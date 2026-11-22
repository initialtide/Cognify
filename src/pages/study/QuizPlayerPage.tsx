import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  CornerDownLeft,
  FileCheck2,
  Layers,
  Pencil,
  RotateCcw,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  X,
  XCircle,
} from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { EducationalDiagram } from '../../components/artwork/Diagrams';
import { StudyTopBar } from '../../components/layout/StudyTopBar';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { QuizQuestion } from '../../types/curriculum';
import { gradeShortAnswer, GradeResult } from '../../utils/grader';
import { playSound } from '../../utils/soundEffects';
import { renderInlineMarkdown } from './NotesViewerPage';

function fnv1aHash(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function getShuffledMatchingPairs<T extends { left: string; right: string }>(
  questionId: string,
  pairs: T[]
): T[] {
  const n = pairs.length;
  if (n <= 1) return [...pairs];
  if (n === 2) return [pairs[1], pairs[0]];

  const baseSeed = fnv1aHash(questionId);
  if (n === 3) {
    const order = baseSeed % 2 === 0 ? [1, 2, 0] : [2, 0, 1];
    return order.map((idx) => pairs[idx]);
  }

  for (let attempt = 0; attempt < 8; attempt++) {
    let state = (baseSeed + Math.imul(attempt + 1, 2654435761)) >>> 0;
    const indices = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) {
      state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
      const j = state % (i + 1);
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const isIdentity = indices.every((origIdx, i) => origIdx === i);
    const isReverse = indices.every((origIdx, i) => origIdx === n - 1 - i);
    if (!isIdentity && !isReverse) {
      return indices.map((idx) => pairs[idx]);
    }
  }

  return pairs.map((_, i) => pairs[(i + 1) % n]);
}

interface AnswerState {
  checked: boolean;
  correct: boolean;
  earnedMarks: number;
  xpAwarded?: number;
  selectedOption?: number;
  selectedMulti?: number[];
  fillValues?: string[];
  diagramSelections?: Record<string, string>;
  shortText?: string;
  gradeResult?: GradeResult;
  matchingPairs?: Record<string, string>;
}

const EMPTY_ANSWER: AnswerState = {
  checked: false,
  correct: false,
  earnedMarks: 0,
};

function canCheckQuestion(q: QuizQuestion, st: AnswerState): boolean {
  if (st.checked) return false;
  switch (q.type) {
    case 'mcq':
      return typeof st.selectedOption === 'number';
    case 'multi-select':
      return (st.selectedMulti?.length ?? 0) > 0;
    case 'fill-blank':
      return (st.fillValues ?? []).some((v) => v.trim().length > 0);
    case 'diagram-label':
      return Object.values(st.diagramSelections ?? {}).some((v) => v.trim().length > 0);
    case 'short-answer':
      return (st.shortText ?? '').trim().length > 0;
    case 'matching':
      return Object.keys(st.matchingPairs ?? {}).length > 0;
  }
}

function getPromptHintLabel(q: QuizQuestion): string {
  switch (q.type) {
    case 'mcq':
      return 'Select 1 answer';
    case 'multi-select':
      return `Select ${q.selectCount} answers`;
    case 'fill-blank':
      return 'Fill the blanks';
    case 'diagram-label':
      return 'Select labels';
    case 'short-answer':
      return 'Type an answer';
    case 'matching':
      return 'Match pairs';
  }
}

export const QuizPlayerPage: React.FC = () => {
  const { courseId, subtopicId } = useParams<{ courseId: string; subtopicId: string }>();
  const location = useLocation();
  const { profile, recordQuestionAttempt } = useApp();

  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const stateData = location.state as { customQuestions?: QuizQuestion[]; title?: string } | null;

  const baseQuestions = useMemo(() => {
    if (stateData?.customQuestions && stateData.customQuestions.length > 0) {
      return stateData.customQuestions;
    }
    if (!subtopicId || subtopicId === 'all') return course.quizzes;
    const matched = course.quizzes.filter((q) => q.subtopicId === subtopicId);
    return matched.length > 0 ? matched : course.quizzes;
  }, [course.quizzes, stateData, subtopicId]);

  const allSubtopics = useMemo(
    () => course.topics.flatMap((t) => t.subtopics),
    [course.topics]
  );

  const nextSubtopic = useMemo(() => {
    if (!subtopicId || subtopicId === 'all' || subtopicId === 'custom') return null;
    const curIdx = allSubtopics.findIndex((s) => s.id === subtopicId);
    if (curIdx === -1 || curIdx + 1 >= allSubtopics.length) return null;
    return allSubtopics[curIdx + 1];
  }, [allSubtopics, subtopicId]);

  const subtopicTitle =
    stateData?.title ??
    allSubtopics.find((s) => s.id === subtopicId)?.title ??
    `${course.subjectName} Quiz`;

  const [browseMode, setBrowseMode] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>(baseQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [showMissedReview, setShowMissedReview] = useState(false);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [sessionXp, setSessionXp] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [activeMatchLeft, setActiveMatchLeft] = useState<Record<string, string>>({});
  const [markingId, setMarkingId] = useState<string | null>(null);
  const [qFeedback, setQFeedback] = useState<Record<string, 'up' | 'down' | 'flag' | null>>({});

  useEffect(() => {
    setActiveQuestions(baseQuestions);
    setCurrentIndex(0);
    setShowSummary(false);
    setShowMissedReview(false);
    setAnswers({});
    setSessionXp(0);
    setSessionStreak(0);
    setActiveMatchLeft({});
    setMarkingId(null);
  }, [baseQuestions]);

  const checkedCount = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked).length,
    [activeQuestions, answers]
  );

  const progressPct =
    activeQuestions.length > 0 ? Math.round((checkedCount / activeQuestions.length) * 100) : 0;

  const totalEarned = useMemo(
    () => activeQuestions.reduce((acc, q) => acc + (answers[q.id]?.earnedMarks ?? 0), 0),
    [activeQuestions, answers]
  );

  const totalPossible = useMemo(
    () => activeQuestions.reduce((acc, q) => acc + q.marks, 0),
    [activeQuestions]
  );

  const scorePercent = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;

  const missedQuestions = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked && !answers[q.id]?.correct),
    [activeQuestions, answers]
  );

  const correctQuestionsCount = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked && answers[q.id]?.correct).length,
    [activeQuestions, answers]
  );

  const commitGrade = useCallback(
    (q: QuizQuestion, nextState: AnswerState, silentSound = false) => {
      const gained = browseMode ? 0 : nextState.correct ? 15 : 5;
      const stamped: AnswerState = { ...nextState, xpAwarded: gained };
      setAnswers((prev) => ({ ...prev, [q.id]: stamped }));

      if (!browseMode) {
        setSessionXp((x) => x + gained);
        setSessionStreak((s) => (nextState.correct ? s + 1 : 0));
        recordQuestionAttempt(
          course.id,
          q.id,
          nextState.correct,
          nextState.earnedMarks,
          q.marks,
          `${subtopicTitle}: Q`,
          q.subtopicId
        );
      }

      if (!silentSound) {
        playSound(
          nextState.correct ? 'correct' : 'incorrect',
          profile.preferences.soundEnabled,
          profile.preferences.soundVolume
        );
      }
    },
    [
      browseMode,
      course.id,
      profile.preferences.soundEnabled,
      profile.preferences.soundVolume,
      recordQuestionAttempt,
      subtopicTitle,
    ]
  );

  const gradeQuestion = useCallback(
    async (q: QuizQuestion, overrideState?: AnswerState, silentSound = false) => {
      const st = overrideState ?? answers[q.id] ?? EMPTY_ANSWER;
      if (st.checked) return;

      if (q.type === 'mcq') {
        if (typeof st.selectedOption !== 'number') return;
        const correct = st.selectedOption === q.correctIndex;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct,
            earnedMarks: correct ? q.marks : 0,
          },
          silentSound
        );
        return;
      }

      if (q.type === 'multi-select') {
        const picked = st.selectedMulti ?? [];
        const sortedPicked = [...picked].sort((a, b) => a - b).join(',');
        const sortedAns = [...q.correctIndices].sort((a, b) => a - b).join(',');
        const correctCount = picked.filter((i) => q.correctIndices.includes(i)).length;
        const wrongCount = picked.filter((i) => !q.correctIndices.includes(i)).length;
        const full = sortedPicked === sortedAns;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: full,
            earnedMarks: full ? q.marks : Math.max(0, Math.min(q.marks - 1, correctCount - wrongCount)),
            selectedMulti: picked,
          },
          silentSound
        );
        return;
      }

      if (q.type === 'fill-blank') {
        const vals = st.fillValues ?? q.answers.map(() => '');
        const correctCount = q.answers.filter(
          (ans, i) => (vals[i] ?? '').trim().toLowerCase() === ans.toLowerCase()
        ).length;
        const full = correctCount === q.answers.length;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: full,
            earnedMarks: Math.min(q.marks, correctCount),
            fillValues: vals,
          },
          silentSound
        );
        return;
      }

      if (q.type === 'diagram-label') {
        const sels = st.diagramSelections ?? {};
        const hits = q.labels.filter((l) => sels[l.marker] === l.answer).length;
        const full = hits === q.labels.length;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: full,
            earnedMarks: Math.min(q.marks, hits),
            diagramSelections: sels,
          },
          silentSound
        );
        return;
      }

      if (q.type === 'short-answer') {
        const text = st.shortText ?? '';
        setMarkingId(q.id);
        const res = await gradeShortAnswer(text, q.rubric, q.prompt, profile.preferences.aiConfig);
        setMarkingId(null);
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: res.earnedMarks === q.marks,
            earnedMarks: res.earnedMarks,
            shortText: text,
            gradeResult: res,
          },
          silentSound
        );
        return;
      }

      if (q.type === 'matching') {
        const map = st.matchingPairs ?? {};
        const hits = q.pairs.filter((p) => map[p.left] === p.right).length;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: hits === q.pairs.length,
            earnedMarks: Math.min(q.marks, hits),
            matchingPairs: map,
          },
          silentSound
        );
      }
    },
    [answers, commitGrade, profile.preferences.aiConfig]
  );

  const handleCheckAllBrowse = async () => {
    const unchecked = activeQuestions.filter((q) => !answers[q.id]?.checked);
    for (const q of unchecked) {
      const st = answers[q.id] ?? EMPTY_ANSWER;
      if (canCheckQuestion(q, st)) {
        await gradeQuestion(q, st, true);
      }
    }
    playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
  };

  const resetAll = (subset?: QuizQuestion[]) => {
    setActiveQuestions(subset && subset.length > 0 ? subset : baseQuestions);
    setAnswers({});
    setCurrentIndex(0);
    setShowSummary(false);
    setShowMissedReview(false);
    setSessionXp(0);
    setSessionStreak(0);
    setActiveMatchLeft({});
  };

  const handleContinue = useCallback(() => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowSummary(true);
      playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
    }
  }, [
    activeQuestions.length,
    currentIndex,
    profile.preferences.soundEnabled,
    profile.preferences.soundVolume,
  ]);

  const currentQuestion = activeQuestions[currentIndex];
  const currentState = currentQuestion ? answers[currentQuestion.id] ?? EMPTY_ANSWER : EMPTY_ANSWER;

  // Focus Mode Keyboard Shortcuts: 1-4 select choices, Enter Check -> Enter Continue
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (browseMode || showSummary || !currentQuestion) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      const isTextField =
        tag === 'input' || tag === 'textarea' || tag === 'select' || target?.isContentEditable;

      // Number shortcuts 1-9 for MCQ and Multi-select when not typing
      if (!isTextField && !currentState.checked && /^[1-9]$/.test(e.key)) {
        const optionIdx = Number(e.key) - 1;
        if (currentQuestion.type === 'mcq' && optionIdx < currentQuestion.options.length) {
          e.preventDefault();
          setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: {
              ...(prev[currentQuestion.id] ?? EMPTY_ANSWER),
              selectedOption: optionIdx,
            },
          }));
          return;
        }
        if (currentQuestion.type === 'multi-select' && optionIdx < currentQuestion.options.length) {
          e.preventDefault();
          setAnswers((prev) => {
            const st = prev[currentQuestion.id] ?? EMPTY_ANSWER;
            const picked = st.selectedMulti ?? [];
            const next = picked.includes(optionIdx)
              ? picked.filter((x) => x !== optionIdx)
              : [...picked, optionIdx];
            return {
              ...prev,
              [currentQuestion.id]: { ...st, selectedMulti: next },
            };
          });
          return;
        }
      }

      if (e.key === 'Enter') {
        if (tag === 'textarea') return;
        // Let non-choice buttons/links handle their own Enter unless it's a choice button
        const isChoiceBtn = target?.dataset?.choiceBtn === 'true';
        if ((tag === 'button' || tag === 'a') && !isChoiceBtn) return;

        if (!currentState.checked) {
          if (canCheckQuestion(currentQuestion, currentState) && markingId !== currentQuestion.id) {
            e.preventDefault();
            void gradeQuestion(currentQuestion, currentState);
          }
        } else {
          e.preventDefault();
          handleContinue();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [browseMode, currentQuestion, currentState, gradeQuestion, handleContinue, markingId, showSummary]);

  const toggleFeedback = (qId: string, kind: 'up' | 'down' | 'flag') => {
    setQFeedback((prev) => ({
      ...prev,
      [qId]: prev[qId] === kind ? null : kind,
    }));
  };

  const renderQuestionCard = (q: QuizQuestion, qIdx: number, isFocus: boolean) => {
    const st = answers[q.id] ?? EMPTY_ANSWER;
    const readyToCheck = canCheckQuestion(q, st);
    const fb = qFeedback[q.id];
    const isLastFocus = isFocus && qIdx + 1 >= activeQuestions.length;

    return (
      <article
        key={q.id}
        className={`cognito-card sp-quiz-card${isFocus ? ' sp-fc-stage' : ''}`}
      >
        <div className="sp-quiz-card-top">
          <span className="sp-quiz-qnum">
            {qIdx + 1} of {activeQuestions.length}
          </span>
          <span className="sp-mark-badge">
            [{q.marks} {q.marks === 1 ? 'mark' : 'marks'}]
          </span>
        </div>

        <h2 className="sp-quiz-prompt">{renderInlineMarkdown(q.prompt)}</h2>

        {'diagram' in q && q.diagram && (
          <div className="sp-exam-diagram-frame">
            <EducationalDiagram kind={q.diagram} compact />
          </div>
        )}

        {/* 1. MCQ */}
        {q.type === 'mcq' && (
          <div className="sp-choice-list" role="radiogroup" aria-label="Answer choices">
            {q.options.map((opt, idx) => {
              const isPicked = st.selectedOption === idx;
              const isRight = q.correctIndex === idx;
              let stateClass = '';
              if (st.checked) {
                if (isRight) stateClass = ' is-correct';
                else if (isPicked && !isRight) stateClass = ' is-incorrect';
              } else if (isPicked) {
                stateClass = ' is-selected';
              }
              return (
                <button
                  key={idx}
                  type="button"
                  role="radio"
                  aria-checked={isPicked}
                  data-choice-btn="true"
                  disabled={st.checked}
                  className={`sp-choice-btn sp-focusable${stateClass}`}
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [q.id]: { ...st, selectedOption: idx },
                    }))
                  }
                >
                  <span className="sp-choice-btn__left">
                    {isFocus && <span className="sp-choice-key">{idx + 1}</span>}
                    <span>{renderInlineMarkdown(opt)}</span>
                  </span>
                  {st.checked && isRight && <Check size={18} strokeWidth={2.8} />}
                  {st.checked && isPicked && !isRight && <X size={18} strokeWidth={2.8} />}
                </button>
              );
            })}
          </div>
        )}

        {/* 2. Multi-Select */}
        {q.type === 'multi-select' && (
          <div className="sp-choice-list">
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              Select {q.selectCount} answers
            </div>
            {q.options.map((opt, idx) => {
              const picked = st.selectedMulti ?? [];
              const isSel = picked.includes(idx);
              const isRight = q.correctIndices.includes(idx);
              let stateClass = '';
              if (st.checked) {
                if (isRight) stateClass = ' is-correct';
                else if (isSel && !isRight) stateClass = ' is-incorrect';
              } else if (isSel) {
                stateClass = ' is-selected';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  role="checkbox"
                  aria-checked={isSel}
                  data-choice-btn="true"
                  disabled={st.checked}
                  className={`sp-choice-btn sp-focusable${stateClass}`}
                  onClick={() => {
                    const next = isSel ? picked.filter((x) => x !== idx) : [...picked, idx];
                    setAnswers((prev) => ({ ...prev, [q.id]: { ...st, selectedMulti: next } }));
                  }}
                >
                  <span className="sp-choice-btn__left">
                    <span className="sp-choice-key">
                      {isSel ? <Check size={14} strokeWidth={3} /> : isFocus ? idx + 1 : ''}
                    </span>
                    <span>{renderInlineMarkdown(opt)}</span>
                  </span>
                  {st.checked && isRight && <Check size={18} strokeWidth={2.8} />}
                  {st.checked && isSel && !isRight && <X size={18} strokeWidth={2.8} />}
                </button>
              );
            })}
          </div>
        )}

        {/* 3. Fill-in-the-blank + Word Bank */}
        {q.type === 'fill-blank' && (
          <div>
            <div style={{ fontSize: '1.05rem', lineHeight: 2.2, marginBottom: 14 }}>
              {q.segments.map((seg, i) => {
                const vals = st.fillValues ?? q.answers.map(() => '');
                const val = vals[i] ?? '';
                const blankRight =
                  st.checked &&
                  i < q.answers.length &&
                  val.trim().toLowerCase() === q.answers[i].toLowerCase();
                return (
                  <React.Fragment key={i}>
                    <span>{renderInlineMarkdown(seg)}</span>
                    {i < q.answers.length && (
                      <input
                        type="text"
                        disabled={st.checked}
                        value={val}
                        onChange={(e) => {
                          const next = [...vals];
                          next[i] = e.target.value;
                          setAnswers((prev) => ({ ...prev, [q.id]: { ...st, fillValues: next } }));
                        }}
                        aria-label={`Blank ${i + 1}`}
                        className={`sp-fill-input${
                          st.checked ? (blankRight ? ' is-correct' : ' is-incorrect') : ''
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Word bank:
              </span>
              {q.wordBank.map((word) => (
                <button
                  key={word}
                  type="button"
                  disabled={st.checked}
                  className="sp-word-chip sp-focusable"
                  onClick={() => {
                    const vals = [...(st.fillValues ?? q.answers.map(() => ''))];
                    const emptyIdx = vals.findIndex((v) => !v.trim());
                    const slot = emptyIdx === -1 ? 0 : emptyIdx;
                    vals[slot] = word;
                    setAnswers((prev) => ({ ...prev, [q.id]: { ...st, fillValues: vals } }));
                  }}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 4. Diagram Label */}
        {q.type === 'diagram-label' && (
          <div style={{ display: 'grid', gap: 10 }}>
            {q.labels.map((lbl) => {
              const sels = st.diagramSelections ?? {};
              return (
                <div
                  key={lbl.marker}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.94rem' }}>
                    {renderInlineMarkdown(lbl.marker)}
                  </span>
                  <select
                    disabled={st.checked}
                    value={sels[lbl.marker] ?? ''}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: {
                          ...st,
                          diagramSelections: { ...sels, [lbl.marker]: e.target.value },
                        },
                      }))
                    }
                    className="sp-select sp-focusable"
                    style={{ minWidth: 220 }}
                  >
                    <option value="">Select label...</option>
                    {lbl.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        )}

        {/* 5. Short Answer */}
        {q.type === 'short-answer' && (
          <div>
            <textarea
              rows={3}
              disabled={st.checked}
              value={st.shortText ?? ''}
              onChange={(e) =>
                setAnswers((prev) => ({ ...prev, [q.id]: { ...st, shortText: e.target.value } }))
              }
              placeholder="Type your answer here..."
              className="sp-textarea"
            />
            {st.checked && st.gradeResult && (
              <div className="sp-rubric-box">
                <div style={{ fontWeight: 800 }}>
                  {renderInlineMarkdown(st.gradeResult.feedback)}
                </div>
                {st.gradeResult.hitPoints.map((hp) => (
                  <div key={hp} className="sp-rubric-hit">
                    <Check size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{renderInlineMarkdown(hp)}</span>
                  </div>
                ))}
                {st.gradeResult.missedPoints.map((mp) => (
                  <div key={mp} className="sp-rubric-miss">
                    <X size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Missed: {renderInlineMarkdown(mp)}</span>
                  </div>
                ))}
                <div style={{ paddingTop: 6, borderTop: '1px solid var(--border-subtle)' }}>
                  <strong>Model answer:</strong> {renderInlineMarkdown(st.gradeResult.modelAnswer)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. Matching */}
        {q.type === 'matching' && (
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              Click a term on the left, then click its matching definition on the right:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ display: 'grid', gap: 8 }}>
                {q.pairs.map((p) => {
                  const assigned = (st.matchingPairs ?? {})[p.left];
                  const isSelected = activeMatchLeft[q.id] === p.left;
                  return (
                    <button
                      key={p.left}
                      type="button"
                      disabled={st.checked}
                      onClick={() => setActiveMatchLeft((m) => ({ ...m, [q.id]: p.left }))}
                      className={`sp-match-btn sp-focusable${isSelected ? ' is-active' : ''}${
                        assigned ? ' is-paired' : ''
                      }`}
                    >
                      <div>{renderInlineMarkdown(p.left)}</div>
                      {assigned && (
                        <div style={{ fontSize: '0.76rem', opacity: 0.85, marginTop: 3 }}>
                          → {renderInlineMarkdown(assigned)}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <div style={{ display: 'grid', gap: 8 }}>
                {getShuffledMatchingPairs(q.id, q.pairs).map((p, rIdx) => (
                  <button
                    key={`${p.right}-${rIdx}`}
                    type="button"
                    disabled={st.checked}
                    className="sp-match-right sp-focusable"
                    onClick={() => {
                      const left = activeMatchLeft[q.id] ?? q.pairs[0].left;
                      const nextMap = { ...(st.matchingPairs ?? {}), [left]: p.right };
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: { ...st, matchingPairs: nextMap },
                      }));
                    }}
                  >
                    {renderInlineMarkdown(p.right)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Instant Feedback Banner */}
        {st.checked && (
          <div
            role="status"
            className={`sp-feedback-banner ${
              st.correct ? 'sp-feedback-banner--correct' : 'sp-feedback-banner--incorrect'
            }`}
          >
            <div className="sp-feedback-banner__head">
              <span className="sp-feedback-banner__title">
                {st.correct ? (
                  <>
                    <CheckCircle2 size={18} /> Correct!
                  </>
                ) : (
                  <>
                    <XCircle size={18} />{' '}
                    {st.earnedMarks > 0
                      ? `Partially correct (${st.earnedMarks} / ${q.marks})`
                      : 'Not quite'}
                  </>
                )}
              </span>
              {st.correct && !browseMode && (
                <span className="sp-xp-chip">+{st.xpAwarded ?? 15} XP</span>
              )}
            </div>
            <div>{renderInlineMarkdown(q.explanation)}</div>
          </div>
        )}

        {/* Card Footer */}
        {isFocus ? (
          <div className="sp-quiz-card-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="sp-mark-indicator">
                <span
                  className={`sp-mark-circle${
                    st.checked ? (st.correct ? ' is-correct' : ' is-incorrect') : ''
                  }`}
                >
                  {st.checked && (st.correct ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />)}
                </span>
                <span>
                  {st.checked
                    ? `${st.earnedMarks} / ${q.marks} ${q.marks === 1 ? 'mark' : 'marks'}`
                    : `${q.marks} ${q.marks === 1 ? 'mark' : 'marks'}`}
                </span>
              </span>

              <div style={{ display: 'inline-flex', gap: 2 }}>
                <button
                  type="button"
                  aria-label="Helpful question"
                  className={`sp-icon-btn${fb === 'up' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback(q.id, 'up')}
                >
                  <ThumbsUp size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Not helpful"
                  className={`sp-icon-btn${fb === 'down' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback(q.id, 'down')}
                >
                  <ThumbsDown size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Report question"
                  className={`sp-icon-btn${fb === 'flag' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback(q.id, 'flag')}
                >
                  <AlertTriangle size={15} />
                </button>
              </div>
            </div>

            {!st.checked ? (
              <button
                type="button"
                className={`tactile-btn${readyToCheck ? ' tactile-btn--solid-blue' : ''}`}
                disabled={!readyToCheck || markingId === q.id}
                onClick={() => void gradeQuestion(q, st)}
              >
                {q.type === 'short-answer' && <Pencil size={15} />}
                <span>
                  {markingId === q.id
                    ? 'Marking...'
                    : readyToCheck
                      ? 'Check'
                      : getPromptHintLabel(q)}
                </span>
                <CornerDownLeft size={15} />
              </button>
            ) : (
              <button
                type="button"
                className="tactile-btn tactile-btn--solid-blue"
                onClick={handleContinue}
              >
                <span>{isLastFocus ? 'Finish quiz' : 'Continue'}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        ) : (
          /* Browse Mode Footer (1:1 step_47_shot_1) */
          <div className="sp-quiz-card-footer">
            {!st.checked ? (
              <button
                type="button"
                className={`tactile-btn tactile-btn--sm${readyToCheck ? ' tactile-btn--solid-blue' : ''}`}
                disabled={!readyToCheck || markingId === q.id}
                onClick={() => void gradeQuestion(q, st)}
              >
                {markingId === q.id
                  ? 'Marking...'
                  : readyToCheck
                    ? 'Check'
                    : getPromptHintLabel(q)}
              </button>
            ) : (
              <span
                className={`sp-status-pill ${
                  st.correct ? 'sp-status-pill--confident' : 'sp-status-pill--learning'
                }`}
              >
                {st.correct ? <Check size={13} /> : <X size={13} />}
                {st.correct ? 'Checked · Correct' : 'Checked'}
              </span>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'inline-flex', gap: 2 }}>
                <button
                  type="button"
                  aria-label="Helpful question"
                  className={`sp-icon-btn${fb === 'up' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback(q.id, 'up')}
                >
                  <ThumbsUp size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Not helpful"
                  className={`sp-icon-btn${fb === 'down' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback(q.id, 'down')}
                >
                  <ThumbsDown size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Report question"
                  className={`sp-icon-btn${fb === 'flag' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback(q.id, 'flag')}
                >
                  <AlertTriangle size={15} />
                </button>
              </div>
              <span
                className={`sp-score-box${
                  st.checked && st.earnedMarks === q.marks
                    ? ' is-full'
                    : st.checked && st.earnedMarks > 0
                      ? ' is-partial'
                      : ''
                }`}
              >
                {st.earnedMarks} / {q.marks}
              </span>
            </div>
          </div>
        )}
      </article>
    );
  };

  return (
    <div>
      <StudyTopBar
        course={course}
        currentSubtopicId={subtopicId}
        title={subtopicTitle}
        activityType="quiz"
        progressPercent={progressPct}
        sessionXp={sessionXp}
        sessionStreak={sessionStreak}
        browseMode={browseMode}
        onToggleBrowse={() => {
          setBrowseMode((b) => !b);
          setShowSummary(false);
        }}
      />

      <main className="page-container sp-quiz-container">
        {activeQuestions.length === 0 ? (
          <section className="cognito-card sp-summary-card">
            <h1 className="font-heading" style={{ fontSize: '1.75rem', marginBottom: 8 }}>
              No quiz questions for this subtopic yet
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
              Switch subtopics or open Notes from the top bar to keep studying.
            </p>
            <Link
              to={`/course/${course.id}/notes/${subtopicId ?? 'all'}`}
              className="tactile-btn tactile-btn--solid-blue"
            >
              Back to course
            </Link>
          </section>
        ) : browseMode ? (
          /* BROWSE MODE: Scrollable All-Questions View (1:1 step_47_shot_1) */
          <div>
            <div className="sp-browse-banner">
              <span>
                Browse mode — explore all {activeQuestions.length} questions freely ({totalEarned} /{' '}
                {totalPossible} marks).
              </span>
              <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
                  onClick={() => void handleCheckAllBrowse()}
                >
                  <Check size={14} /> Check all
                </button>
                <button
                  type="button"
                  className="tactile-btn tactile-btn--sm"
                  onClick={() => resetAll(baseQuestions)}
                >
                  <RotateCcw size={14} /> Reset
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 20 }}>
              {activeQuestions.map((q, qIdx) => renderQuestionCard(q, qIdx, false))}
            </div>
          </div>
        ) : showSummary || !currentQuestion ? (
          /* END-OF-QUIZ SUMMARY SCREEN */
          <section className="cognito-card sp-summary-card">
            <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 14 }}>
              <Sparkles size={13} /> QUIZ COMPLETE
            </span>
            <h1 className="font-heading" style={{ fontSize: '2.05rem', marginBottom: 8 }}>
              {scorePercent >= 80
                ? 'Brilliant score!'
                : scorePercent >= 50
                  ? 'Solid progress!'
                  : 'Keep practising!'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: 460 }}>
              You got <strong>{correctQuestionsCount} of {activeQuestions.length}</strong> questions
              fully right in <strong>{subtopicTitle}</strong>.
            </p>

            <div className="sp-summary-stats">
              <div className="sp-summary-stat">
                <div
                  className="sp-summary-stat__val"
                  style={{
                    color:
                      scorePercent >= 70
                        ? 'var(--color-green-600)'
                        : 'var(--color-amber-600)',
                  }}
                >
                  {scorePercent}%
                </div>
                <div className="sp-summary-stat__label">
                  {totalEarned} / {totalPossible} marks
                </div>
              </div>
              <div className="sp-summary-stat">
                <div className="sp-summary-stat__val" style={{ color: 'var(--color-blue-500)' }}>
                  +{sessionXp} XP
                </div>
                <div className="sp-summary-stat__label">Session XP</div>
              </div>
              <div className="sp-summary-stat">
                <div className="sp-summary-stat__val">
                  {missedQuestions.length}
                </div>
                <div className="sp-summary-stat__label">To review</div>
              </div>
            </div>

            <div className="sp-summary-actions">
              {missedQuestions.length > 0 && (
                <>
                  <button
                    type="button"
                    className="tactile-btn tactile-btn--pink"
                    onClick={() => setShowMissedReview((v) => !v)}
                  >
                    {showMissedReview ? 'Hide missed questions' : `Review missed (${missedQuestions.length})`}
                  </button>
                  <button
                    type="button"
                    className="tactile-btn"
                    onClick={() => resetAll(missedQuestions)}
                  >
                    <RotateCcw size={15} /> Retry missed
                  </button>
                </>
              )}

              <button
                type="button"
                className="tactile-btn"
                onClick={() => resetAll(baseQuestions)}
              >
                <RotateCcw size={15} /> Retry quiz
              </button>

              {course.flashcards.length > 0 && (
                <Link
                  to={`/course/${course.id}/flashcards/${subtopicId ?? 'all'}`}
                  className="tactile-btn tactile-btn--green"
                >
                  <Layers size={15} /> Flashcards
                </Link>
              )}

              {course.examPractice.length > 0 && (
                <Link
                  to={`/course/${course.id}/exam-practice/${subtopicId ?? 'all'}`}
                  className="tactile-btn tactile-btn--blue"
                >
                  <FileCheck2 size={15} /> Exam Practice
                </Link>
              )}

              {nextSubtopic ? (
                <Link
                  to={`/course/${course.id}/quiz/${nextSubtopic.id}`}
                  className="tactile-btn tactile-btn--solid-blue"
                >
                  Next subtopic <ArrowRight size={15} />
                </Link>
              ) : (
                <Link
                  to={`/course/${course.id}/quiz`}
                  className="tactile-btn tactile-btn--solid-blue"
                >
                  Back to topics <ArrowRight size={15} />
                </Link>
              )}
            </div>

            {showMissedReview && missedQuestions.length > 0 && (
              <div className="sp-missed-list">
                {missedQuestions.map((mq) => {
                  const mst = answers[mq.id];
                  return (
                    <div key={mq.id} className="sp-missed-item">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: 10,
                          marginBottom: 6,
                          fontWeight: 800,
                          color: 'var(--text-heading)',
                        }}
                      >
                        <span>{renderInlineMarkdown(mq.prompt)}</span>
                        <span className="sp-mark-badge">
                          {mst?.earnedMarks ?? 0} / {mq.marks}
                        </span>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                        }}
                      >
                        <strong>Explanation:</strong> {renderInlineMarkdown(mq.explanation)}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ) : (
          /* DEFAULT FOCUS MODE: 1 Question at a Time */
          <div>
            <div className="sp-quiz-progress-header">
              <span className="sp-status-pill">
                Question {currentIndex + 1} of {activeQuestions.length}
              </span>

              <div className="sp-quiz-dots" role="navigation" aria-label="Question progress">
                {activeQuestions.map((q, i) => {
                  const qSt = answers[q.id];
                  let dotCls = '';
                  if (i === currentIndex) dotCls = ' is-current';
                  else if (qSt?.checked) {
                    if (qSt.correct) dotCls = ' is-correct';
                    else if (qSt.earnedMarks > 0) dotCls = ' is-partial';
                    else dotCls = ' is-incorrect';
                  }
                  return (
                    <button
                      key={q.id}
                      type="button"
                      aria-label={`Jump to question ${i + 1}`}
                      aria-current={i === currentIndex ? 'step' : undefined}
                      className={`sp-quiz-dot sp-focusable${dotCls}`}
                      onClick={() => setCurrentIndex(i)}
                    />
                  );
                })}
              </div>
            </div>

            {renderQuestionCard(currentQuestion, currentIndex, true)}

            <div
              className="hide-mobile"
              style={{
                marginTop: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12,
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                fontWeight: 600,
              }}
            >
              {(currentQuestion.type === 'mcq' || currentQuestion.type === 'multi-select') && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  <kbd className="sp-kbd">1</kbd>–<kbd className="sp-kbd">{currentQuestion.options.length}</kbd>{' '}
                  select
                </span>
              )}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <kbd className="sp-kbd">Enter</kbd>{' '}
                {currentState.checked ? 'continue' : 'check answer'}
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
