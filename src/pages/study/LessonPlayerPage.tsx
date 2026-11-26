import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  CornerDownLeft,
  FileCheck2,
  HelpCircle,
  Layers,
  Lightbulb,
  PlayCircle,
  RotateCcw,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  X,
  XCircle,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { EducationalDiagram } from '../../components/artwork/Diagrams';
import { StudyTopBar } from '../../components/layout/StudyTopBar';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { computeLessonSubtopicProgress, useApp } from '../../store/AppContext';
import { NoteLesson, QuizQuestion } from '../../types/curriculum';
import { gradeShortAnswer, GradeResult } from '../../utils/grader';
import { playSound } from '../../utils/soundEffects';
import { CognitoVideoPlayer, renderInlineMarkdown } from './NotesViewerPage';
import { getShuffledMatchingPairs } from './QuizPlayerPage';

interface LessonAnswerState {
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

const EMPTY_LESSON_ANSWER: LessonAnswerState = {
  checked: false,
  correct: false,
  earnedMarks: 0,
};

function canCheckLessonQuestion(q: QuizQuestion, st: LessonAnswerState): boolean {
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

function getLessonQuestionHint(q: QuizQuestion, lesson: NoteLesson | undefined): string {
  if (q.type === 'short-answer' && q.rubric.markPoints.length > 0) {
    const firstPoint = q.rubric.markPoints[0];
    if (firstPoint.numericMatch?.unit) {
      return `Calculate carefully and include the correct unit (${firstPoint.numericMatch.unit}).`;
    }
    return `Think about: ${firstPoint.markDescription.replace(/\.$/, '')}.`;
  }
  const memoryAid = lesson?.cards.find((c) => c.memoryAid)?.memoryAid;
  if (memoryAid) return memoryAid;
  if (lesson?.checklistPoints[0]) return lesson.checklistPoints[0];
  return 'Re-watch the matching timestamp in the video above if you need a quick refresher.';
}

export const LessonPlayerPage: React.FC = () => {
  const { courseId, subtopicId } = useParams<{ courseId: string; subtopicId?: string }>();
  const { profile, recordQuestionAttempt, setLessonWatched } = useApp();

  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const allSubtopics = useMemo(
    () => course.topics.flatMap((t) => t.subtopics.map((s) => ({ ...s, topic: t }))),
    [course.topics]
  );

  const subIndex = Math.max(
    0,
    subtopicId ? allSubtopics.findIndex((s) => s.id === subtopicId) : 0
  );
  const currentEntry = allSubtopics[subIndex] ?? allSubtopics[0];
  const prevEntry = subIndex > 0 ? allSubtopics[subIndex - 1] : null;
  const nextEntry = subIndex + 1 < allSubtopics.length ? allSubtopics[subIndex + 1] : null;

  const resolvedSubtopicId = currentEntry?.id ?? subtopicId ?? 'default';
  const lessonNote: NoteLesson | undefined = course.notes[resolvedSubtopicId];

  const baseQuestions = useMemo(() => {
    const matched = course.quizzes.filter((q) => q.subtopicId === resolvedSubtopicId);
    return matched;
  }, [course.quizzes, resolvedSubtopicId]);

  const progress = profile.progressByCourse[course.id];
  const persistedLessonProgress = useMemo(
    () => computeLessonSubtopicProgress(course, resolvedSubtopicId, progress),
    [course, progress, resolvedSubtopicId]
  );
  const isWatched = persistedLessonProgress.watched;

  const questionsSectionRef = useRef<HTMLElement>(null);

  const [browseMode, setBrowseMode] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>(baseQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, LessonAnswerState>>({});
  const [showComplete, setShowComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [recapOpen, setRecapOpen] = useState(false);
  const [sessionXp, setSessionXp] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [activeMatchLeft, setActiveMatchLeft] = useState<Record<string, string>>({});
  const [markingId, setMarkingId] = useState<string | null>(null);
  const [qFeedback, setQFeedback] = useState<Record<string, 'up' | 'down' | 'flag' | null>>({});

  useEffect(() => {
    setActiveQuestions(baseQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setShowComplete(false);
    setShowHint(false);
    setRecapOpen(false);
    setSessionXp(0);
    setSessionStreak(0);
    setActiveMatchLeft({});
    setMarkingId(null);
    setQFeedback({});
  }, [course.id, resolvedSubtopicId, baseQuestions]);

  useEffect(() => {
    setShowHint(false);
  }, [currentIndex]);

  const lessonDisplayTitle = currentEntry
    ? `${currentEntry.code} - ${currentEntry.title}`
    : `${course.subjectName} Lesson`;

  const videoTitle = lessonNote?.videoTitle ?? `${lessonDisplayTitle} — Video Lesson`;
  const youtubeId = lessonNote?.youtubeId ?? 'qHkUOlC8Nbo';
  const timestamps = lessonNote?.timestamps ?? [
    { time: '0:00', seconds: 0, label: 'Core concepts & worked examples' },
  ];

  const courseSubtitleText =
    course.tier && course.tier !== course.qualificationLabel
      ? `${course.qualificationLabel} ${course.boardLabel} ${course.tier}`.replace(/\s+/g, ' ').trim()
      : `${course.qualificationLabel} ${course.boardLabel}`.replace(/\s+/g, ' ').trim();

  const checkedCount = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked).length,
    [activeQuestions, answers]
  );

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

  const correctCount = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked && answers[q.id]?.correct).length,
    [activeQuestions, answers]
  );

  // Live lesson progress combines video watched (25%) + lesson questions checked (75%)
  const liveProgressPct = useMemo(() => {
    if (baseQuestions.length === 0) {
      return isWatched ? 100 : 0;
    }
    const answeredCount = Math.max(persistedLessonProgress.answered, checkedCount);
    const videoPart = isWatched ? 25 : 0;
    const questionPart = (Math.min(baseQuestions.length, answeredCount) / baseQuestions.length) * 75;
    return Math.min(100, Math.round(videoPart + questionPart));
  }, [baseQuestions.length, checkedCount, isWatched, persistedLessonProgress.answered]);

  const handleToggleWatched = useCallback(() => {
    const nextWatched = !isWatched;
    setLessonWatched(course.id, resolvedSubtopicId, lessonDisplayTitle, nextWatched);
    if (nextWatched) {
      setSessionXp((x) => x + 15);
      playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
    }
  }, [
    course.id,
    isWatched,
    lessonDisplayTitle,
    profile.preferences.soundEnabled,
    profile.preferences.soundVolume,
    resolvedSubtopicId,
    setLessonWatched,
  ]);

  const handleAutoMarkWatched = useCallback(() => {
    if (!isWatched) {
      setLessonWatched(course.id, resolvedSubtopicId, lessonDisplayTitle, true);
      setSessionXp((x) => x + 15);
    }
  }, [course.id, isWatched, lessonDisplayTitle, resolvedSubtopicId, setLessonWatched]);

  const commitGrade = useCallback(
    (q: QuizQuestion, nextState: LessonAnswerState, silentSound = false) => {
      const gained = browseMode ? 0 : nextState.correct ? 15 : 5;
      const stamped: LessonAnswerState = { ...nextState, xpAwarded: gained };
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
          `Lesson: ${lessonDisplayTitle}`,
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
      lessonDisplayTitle,
      profile.preferences.soundEnabled,
      profile.preferences.soundVolume,
      recordQuestionAttempt,
    ]
  );

  const gradeQuestion = useCallback(
    async (q: QuizQuestion, overrideState?: LessonAnswerState, silentSound = false) => {
      const st = overrideState ?? answers[q.id] ?? EMPTY_LESSON_ANSWER;
      if (st.checked) return;

      if (q.type === 'mcq') {
        if (typeof st.selectedOption !== 'number') return;
        const correct = st.selectedOption === q.correctIndex;
        commitGrade(
          q,
          { ...st, checked: true, correct, earnedMarks: correct ? q.marks : 0 },
          silentSound
        );
        return;
      }

      if (q.type === 'multi-select') {
        const picked = st.selectedMulti ?? [];
        const sortedPicked = [...picked].sort((a, b) => a - b).join(',');
        const sortedAns = [...q.correctIndices].sort((a, b) => a - b).join(',');
        const correctHits = picked.filter((i) => q.correctIndices.includes(i)).length;
        const wrongHits = picked.filter((i) => !q.correctIndices.includes(i)).length;
        const full = sortedPicked === sortedAns;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: full,
            earnedMarks: full ? q.marks : Math.max(0, Math.min(q.marks - 1, correctHits - wrongHits)),
            selectedMulti: picked,
          },
          silentSound
        );
        return;
      }

      if (q.type === 'fill-blank') {
        const vals = st.fillValues ?? q.answers.map(() => '');
        const hits = q.answers.filter(
          (ans, i) => (vals[i] ?? '').trim().toLowerCase() === ans.toLowerCase()
        ).length;
        const full = hits === q.answers.length;
        commitGrade(
          q,
          {
            ...st,
            checked: true,
            correct: full,
            earnedMarks: Math.min(q.marks, hits),
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
      const st = answers[q.id] ?? EMPTY_LESSON_ANSWER;
      if (canCheckLessonQuestion(q, st)) {
        await gradeQuestion(q, st, true);
      }
    }
    playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
  };

  const resetQuestions = (subset?: QuizQuestion[]) => {
    setActiveQuestions(subset && subset.length > 0 ? subset : baseQuestions);
    setAnswers({});
    setCurrentIndex(0);
    setShowComplete(false);
    setShowHint(false);
    setActiveMatchLeft({});
  };

  const handleNextQuestion = useCallback(() => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowComplete(true);
      if (!isWatched) {
        setLessonWatched(course.id, resolvedSubtopicId, lessonDisplayTitle, true);
      }
      playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
    }
  }, [
    activeQuestions.length,
    course.id,
    currentIndex,
    isWatched,
    lessonDisplayTitle,
    profile.preferences.soundEnabled,
    profile.preferences.soundVolume,
    resolvedSubtopicId,
    setLessonWatched,
  ]);

  const currentQuestion = activeQuestions[currentIndex];
  const currentState = currentQuestion
    ? answers[currentQuestion.id] ?? EMPTY_LESSON_ANSWER
    : EMPTY_LESSON_ANSWER;

  // Keyboard shortcuts for Focus mode: 1-9 select option, Enter checks / advances
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (browseMode || showComplete || !currentQuestion) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      const isTextField =
        tag === 'input' || tag === 'textarea' || tag === 'select' || target?.isContentEditable;

      if (!isTextField && !currentState.checked && /^[1-9]$/.test(e.key)) {
        const optionIdx = Number(e.key) - 1;
        if (currentQuestion.type === 'mcq' && optionIdx < currentQuestion.options.length) {
          e.preventDefault();
          setAnswers((prev) => ({
            ...prev,
            [currentQuestion.id]: {
              ...(prev[currentQuestion.id] ?? EMPTY_LESSON_ANSWER),
              selectedOption: optionIdx,
            },
          }));
          return;
        }
        if (currentQuestion.type === 'multi-select' && optionIdx < currentQuestion.options.length) {
          e.preventDefault();
          setAnswers((prev) => {
            const st = prev[currentQuestion.id] ?? EMPTY_LESSON_ANSWER;
            const picked = st.selectedMulti ?? [];
            const next = picked.includes(optionIdx)
              ? picked.filter((x) => x !== optionIdx)
              : [...picked, optionIdx];
            return { ...prev, [currentQuestion.id]: { ...st, selectedMulti: next } };
          });
          return;
        }
      }

      if (e.key === 'Enter') {
        if (tag === 'textarea') return;
        const isChoiceBtn = target?.dataset?.choiceBtn === 'true';
        if ((tag === 'button' || tag === 'a') && !isChoiceBtn) return;

        if (!currentState.checked) {
          if (canCheckLessonQuestion(currentQuestion, currentState) && markingId !== currentQuestion.id) {
            e.preventDefault();
            void gradeQuestion(currentQuestion, currentState);
          }
        } else {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    browseMode,
    currentQuestion,
    currentState,
    gradeQuestion,
    handleNextQuestion,
    markingId,
    showComplete,
  ]);

  const toggleFeedback = (qId: string, kind: 'up' | 'down' | 'flag') => {
    setQFeedback((prev) => ({
      ...prev,
      [qId]: prev[qId] === kind ? null : kind,
    }));
  };

  const scrollToQuestions = () => {
    const el = questionsSectionRef.current;
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderLessonQuestionBody = (q: QuizQuestion, qIdx: number, isFocus: boolean) => {
    const st = answers[q.id] ?? EMPTY_LESSON_ANSWER;
    const readyToCheck = canCheckLessonQuestion(q, st);
    const fb = qFeedback[q.id];
    const isLastFocus = isFocus && qIdx + 1 >= activeQuestions.length;
    const hintText = getLessonQuestionHint(q, lessonNote);

    return (
      <div key={q.id} className={isFocus ? 'lesson-q-body' : 'cognito-card sp-quiz-card'}>
        <div className="sp-quiz-card-top">
          <span className="sp-quiz-qnum">
            Question {qIdx + 1} of {activeQuestions.length}
          </span>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {isFocus && !st.checked && (
              <button
                type="button"
                className={`lesson-hint-btn${showHint ? ' is-open' : ''}`}
                onClick={() => setShowHint((h) => !h)}
              >
                <HelpCircle size={13} />
                {showHint ? 'Hide hint' : 'Hint'}
              </button>
            )}
            <span className="sp-mark-badge">
              [{q.marks} {q.marks === 1 ? 'mark' : 'marks'}]
            </span>
          </div>
        </div>

        <h3 className="sp-quiz-prompt">{renderInlineMarkdown(q.prompt)}</h3>

        {isFocus && showHint && !st.checked && (
          <div className="lesson-hint-box" role="note">
            <Lightbulb size={15} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{renderInlineMarkdown(hintText)}</span>
          </div>
        )}

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
            <div style={{ fontSize: '1.03rem', lineHeight: 2.15, marginBottom: 14 }}>
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

        {/* 5. Short Answer / Calculation */}
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
              Click a term on the left, then click its matching pair on the right:
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
            <p className="sp-feedback-banner__body">{renderInlineMarkdown(q.explanation)}</p>
          </div>
        )}

        {/* Question Action Footer */}
        <div className="sp-quiz-footer">
          <div className="sp-quiz-footer__meta">
            {isFocus && qIdx > 0 && (
              <button
                type="button"
                className="lesson-prev-q-btn"
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              >
                <ArrowLeft size={14} /> Prev
              </button>
            )}
            <div className="sp-feedback-icons" aria-label="Question feedback">
              <button
                type="button"
                aria-label="Thumbs up"
                className={`sp-icon-btn${fb === 'up' ? ' is-active' : ''}`}
                onClick={() => toggleFeedback(q.id, 'up')}
              >
                <ThumbsUp size={14} />
              </button>
              <button
                type="button"
                aria-label="Thumbs down"
                className={`sp-icon-btn${fb === 'down' ? ' is-active' : ''}`}
                onClick={() => toggleFeedback(q.id, 'down')}
              >
                <ThumbsDown size={14} />
              </button>
              <button
                type="button"
                aria-label="Report question"
                className={`sp-icon-btn${fb === 'flag' ? ' is-active' : ''}`}
                onClick={() => toggleFeedback(q.id, 'flag')}
              >
                <AlertTriangle size={14} />
              </button>
            </div>
          </div>

          <div className="sp-quiz-footer__actions">
            {!st.checked ? (
              <button
                type="button"
                disabled={!readyToCheck || markingId === q.id}
                className="tactile-btn tactile-btn--solid-blue"
                onClick={() => void gradeQuestion(q)}
              >
                <span>{markingId === q.id ? 'Checking...' : 'Check'}</span>
                {isFocus && (
                  <span className="sp-kbd hide-mobile" style={{ color: '#0b3c61', background: '#ffffff' }}>
                    <CornerDownLeft size={11} />
                  </span>
                )}
              </button>
            ) : isFocus ? (
              <button
                type="button"
                className="tactile-btn tactile-btn--solid-blue"
                onClick={handleNextQuestion}
              >
                <span>{isLastFocus ? 'Finish lesson' : 'Next question'}</span>
                <ArrowRight size={16} />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <StudyTopBar
        course={course}
        currentSubtopicId={resolvedSubtopicId}
        title={lessonDisplayTitle}
        activityType="lesson"
        progressPercent={liveProgressPct}
        sessionXp={sessionXp}
        sessionStreak={sessionStreak}
        browseMode={browseMode}
        onToggleBrowse={() => {
          setBrowseMode((b) => !b);
          setShowComplete(false);
        }}
      />

      <main className="lesson-layout">
        {/* Clean Lesson Header: Title + Lesson/Notes Mode Switcher */}
        <header className="lesson-header">
          <div className="lesson-header__title-wrap">
            <div className="lesson-eyebrow">
              <span>{course.qualificationLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{course.boardLabel}</span>
              {currentEntry?.topic && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Topic {currentEntry.topic.number} — {currentEntry.topic.title}
                  </span>
                </>
              )}
            </div>
            <h1 className="font-heading lesson-title">{lessonDisplayTitle}</h1>
          </div>

          <div className="lesson-mode-switch no-print" role="group" aria-label="Switch between Lesson and Revision Notes">
            <span className="lesson-mode-pill is-active" aria-current="page">
              <PlayCircle size={14} /> Lesson
            </span>
            <Link
              to={`/course/${course.id}/notes/${resolvedSubtopicId}`}
              className="lesson-mode-pill"
            >
              <BookOpen size={14} /> Notes
            </Link>
          </div>
        </header>

        {/* PART 1: Focused Video Lesson Card */}
        <section className="cognito-card lesson-video-shell" aria-label="Video lesson">
          <CognitoVideoPlayer
            subtopicId={resolvedSubtopicId}
            youtubeId={youtubeId}
            videoTitle={videoTitle}
            videoChannel={lessonNote?.videoChannel}
            videoDuration={lessonNote?.videoDuration}
            courseMatchSummary={lessonNote?.courseMatchSummary}
            courseSubtitle={courseSubtitleText}
            timestamps={timestamps}
            defaultTimestampsOpen={false}
            showVideoHeader={false}
            showCardWrapper={false}
            onVideoStartPlaying={handleAutoMarkWatched}
          />

          <div className="lesson-video-toolbar no-print">
            <div className="lesson-video-meta">
              <span className="lesson-video-meta__title">{videoTitle}</span>
              <span className="lesson-video-meta__sub">
                <Clock size={13} />
                <span>
                  {lessonNote?.videoChannel ?? 'Cognito'}
                  {lessonNote?.videoDuration
                    ? ` · ${lessonNote.videoDuration}`
                    : lessonNote?.readingMinutes
                      ? ` · ${lessonNote.readingMinutes} min`
                      : ''}
                </span>
              </span>
            </div>

            <div className="lesson-video-actions">
              <button
                type="button"
                onClick={handleToggleWatched}
                aria-pressed={isWatched}
                className={`lesson-watched-btn${isWatched ? ' is-watched' : ''}`}
              >
                <Check size={15} strokeWidth={2.7} />
                <span>{isWatched ? 'Watched' : 'Mark as watched (+15 XP)'}</span>
              </button>

              {baseQuestions.length > 0 && (
                <button
                  type="button"
                  onClick={scrollToQuestions}
                  className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
                >
                  <span>Questions ({baseQuestions.length})</span>
                  <ArrowDown size={14} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* PART 2: Interactive Follow-Up Lesson Questions (Direct on Lesson Page) */}
        <section
          ref={questionsSectionRef}
          className="cognito-card lesson-questions-shell"
          aria-label="Lesson questions"
        >
          <div className="lesson-questions-head">
            <div>
              <div className="lesson-questions-eyebrow">CHECK YOUR UNDERSTANDING</div>
              <h2 className="font-heading" style={{ fontSize: '1.42rem', margin: '2px 0 0' }}>
                Lesson questions
              </h2>
            </div>

            {activeQuestions.length > 0 && (
              <div className="lesson-questions-tally">
                <span className="lesson-tally-pill">
                  {checkedCount} / {activeQuestions.length} answered
                </span>
                {checkedCount > 0 && (
                  <span className="lesson-tally-pill is-score">
                    {totalEarned} / {totalPossible} marks
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Interactive Stepper Dots (Focus Mode) */}
          {!browseMode && !showComplete && activeQuestions.length > 1 && (
            <div className="lesson-stepper" role="tablist" aria-label="Lesson question steps">
              {activeQuestions.map((q, idx) => {
                const st = answers[q.id];
                const isCurrent = idx === currentIndex;
                const stateClass = st?.checked
                  ? st.correct
                    ? ' is-correct'
                    : ' is-incorrect'
                  : '';
                return (
                  <button
                    key={q.id}
                    type="button"
                    role="tab"
                    aria-selected={isCurrent}
                    aria-label={`Question ${idx + 1}${st?.checked ? (st.correct ? ' (correct)' : ' (incorrect)') : ''}`}
                    className={`lesson-step-dot${isCurrent ? ' is-current' : ''}${stateClass}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    {st?.checked ? (
                      st.correct ? (
                        <Check size={13} strokeWidth={3} />
                      ) : (
                        <X size={13} strokeWidth={3} />
                      )
                    ) : (
                      idx + 1
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {activeQuestions.length === 0 ? (
            <div style={{ padding: '20px 0 8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              No follow-up questions yet for this lesson. Try switching to{' '}
              <Link to={`/course/${course.id}/notes/${resolvedSubtopicId}`} style={{ fontWeight: 700, color: 'var(--text-link)' }}>
                Revision Notes
              </Link>{' '}
              or moving to the next lesson below.
            </div>
          ) : browseMode ? (
            <div>
              <div className="sp-browse-banner" style={{ marginBottom: 18 }}>
                <span>
                  Browse all {activeQuestions.length} lesson questions ({totalEarned} / {totalPossible}{' '}
                  marks).
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
                    onClick={() => resetQuestions(baseQuestions)}
                  >
                    <RotateCcw size={14} /> Reset
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gap: 18 }}>
                {activeQuestions.map((q, qIdx) => renderLessonQuestionBody(q, qIdx, false))}
              </div>
            </div>
          ) : showComplete ? (
            <div className="lesson-complete-panel">
              <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 12 }}>
                <Sparkles size={13} /> LESSON COMPLETE
              </span>
              <h3 className="font-heading" style={{ fontSize: '1.85rem', marginBottom: 6 }}>
                {scorePercent >= 80
                  ? 'Great work on this lesson!'
                  : scorePercent >= 50
                    ? 'Solid understanding!'
                    : 'Good practice — review the video & try again!'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0 auto 20px', maxWidth: 460 }}>
                You got <strong>{correctCount} of {activeQuestions.length}</strong> lesson questions right
                in <strong>{lessonDisplayTitle}</strong>.
              </p>

              <div className="sp-summary-stats" style={{ marginBottom: 22 }}>
                <div className="sp-summary-stat">
                  <div
                    className="sp-summary-stat__val"
                    style={{
                      color: scorePercent >= 70 ? 'var(--color-green-600)' : 'var(--color-blue-600)',
                    }}
                  >
                    {scorePercent}%
                  </div>
                  <div className="sp-summary-stat__label">
                    {totalEarned} / {totalPossible} marks
                  </div>
                </div>
                <div className="sp-summary-stat">
                  <div className="sp-summary-stat__val" style={{ color: 'var(--color-green-600)' }}>
                    {isWatched ? 'Watched' : 'Video'}
                  </div>
                  <div className="sp-summary-stat__label">Video status</div>
                </div>
                <div className="sp-summary-stat">
                  <div className="sp-summary-stat__val" style={{ color: 'var(--color-blue-500)' }}>
                    +{sessionXp} XP
                  </div>
                  <div className="sp-summary-stat__label">Earned this lesson</div>
                </div>
              </div>

              <div className="lesson-complete-actions">
                {nextEntry && (
                  <Link
                    to={`/course/${course.id}/lesson/${nextEntry.id}`}
                    className="tactile-btn tactile-btn--solid-blue"
                  >
                    <span>
                      Next lesson: {nextEntry.code} - {nextEntry.title}
                    </span>
                    <ArrowRight size={16} />
                  </Link>
                )}

                {missedQuestions.length > 0 && (
                  <button
                    type="button"
                    className="tactile-btn"
                    onClick={() => resetQuestions(missedQuestions)}
                  >
                    <RotateCcw size={15} /> Retry missed ({missedQuestions.length})
                  </button>
                )}

                <button
                  type="button"
                  className="tactile-btn"
                  onClick={() => resetQuestions(baseQuestions)}
                >
                  <RotateCcw size={15} /> Redo questions
                </button>
              </div>

              <div className="lesson-complete-links">
                <Link to={`/course/${course.id}/notes/${resolvedSubtopicId}`}>
                  <BookOpen size={15} /> Read full Revision Notes
                </Link>
                {course.flashcards.length > 0 && (
                  <Link to={`/course/${course.id}/flashcards/${resolvedSubtopicId}`}>
                    <Layers size={15} /> Practise Flashcards
                  </Link>
                )}
                <Link to={`/course/${course.id}/exam-practice/${resolvedSubtopicId}`}>
                  <FileCheck2 size={15} /> Exam Practice
                </Link>
              </div>
            </div>
          ) : (
            currentQuestion && renderLessonQuestionBody(currentQuestion, currentIndex, true)
          )}
        </section>

        {/* PART 3: Collapsible Quick Lesson Recap (Collapsed by default so Lesson stays video + questions first) */}
        {lessonNote && (
          <section className="cognito-card lesson-recap-card no-print">
            <button
              type="button"
              className="lesson-recap-toggle"
              aria-expanded={recapOpen}
              onClick={() => setRecapOpen((open) => !open)}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                <BookOpen size={17} color="var(--color-blue-600)" />
                <span>Quick lesson recap &amp; key formulas</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                <span>{recapOpen ? 'Hide' : 'Show'}</span>
                {recapOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>

            {recapOpen && (
              <div className="lesson-recap-body">
                {lessonNote.checklistPoints.length > 0 && (
                  <ul className="lesson-recap-list">
                    {lessonNote.checklistPoints.map((pt, idx) => (
                      <li key={idx}>{renderInlineMarkdown(pt)}</li>
                    ))}
                  </ul>
                )}

                {lessonNote.cards.some((c) => c.memoryAid) && (
                  <div className="lesson-recap-tip">
                    <Lightbulb size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>
                      {renderInlineMarkdown(
                        lessonNote.cards.find((c) => c.memoryAid)?.memoryAid ?? ''
                      )}
                    </span>
                  </div>
                )}

                <div style={{ marginTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
                  <Link
                    to={`/course/${course.id}/notes/${resolvedSubtopicId}`}
                    className="tactile-btn tactile-btn--sm"
                  >
                    <BookOpen size={14} /> Open full Revision Notes <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </section>
        )}

        {/* PART 4: Clean Previous / Next Lesson Footer */}
        <nav className="lesson-nav-footer no-print" aria-label="Lesson pagination">
          {prevEntry ? (
            <Link to={`/course/${course.id}/lesson/${prevEntry.id}`} className="lesson-nav-card">
              <ArrowLeft size={16} color="var(--text-muted)" />
              <div>
                <div className="lesson-nav-card__eyebrow">Previous lesson</div>
                <div className="lesson-nav-card__title">
                  {prevEntry.code} - {prevEntry.title}
                </div>
              </div>
            </Link>
          ) : (
            <Link to={`/course/${course.id}/lessons`} className="lesson-nav-card">
              <ArrowLeft size={16} color="var(--text-muted)" />
              <div>
                <div className="lesson-nav-card__eyebrow">Course overview</div>
                <div className="lesson-nav-card__title">All {course.subjectName} lessons</div>
              </div>
            </Link>
          )}

          {nextEntry ? (
            <Link
              to={`/course/${course.id}/lesson/${nextEntry.id}`}
              className="lesson-nav-card lesson-nav-card--next"
            >
              <div>
                <div className="lesson-nav-card__eyebrow">Next lesson</div>
                <div className="lesson-nav-card__title">
                  {nextEntry.code} - {nextEntry.title}
                </div>
              </div>
              <ArrowRight size={16} color="var(--color-blue-600)" />
            </Link>
          ) : (
            <Link
              to={`/course/${course.id}/lessons`}
              className="lesson-nav-card lesson-nav-card--next"
            >
              <div>
                <div className="lesson-nav-card__eyebrow">Finished topic list</div>
                <div className="lesson-nav-card__title">Back to {course.subjectName}</div>
              </div>
              <ArrowRight size={16} color="var(--color-blue-600)" />
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
};
