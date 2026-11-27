import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  CornerDownLeft,
  FileCheck2,
  HelpCircle,
  Layers,
  Lightbulb,
  Link as LinkIcon,
  RotateCcw,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  X,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { EducationalDiagram } from '../../components/artwork/Diagrams';
import { StudyProgressSegments, StudyTopBar } from '../../components/layout/StudyTopBar';
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

const CORRECT_PRAISE = ['Excellent work!', 'Well done!', 'Great job!', 'Spot on!'];
const INCORRECT_PROMPTS = ['Try reviewing this', 'Missed that one'];

function canCheckLessonQuestion(q: QuizQuestion, st: LessonAnswerState): boolean {
  if (st.checked) return false;
  switch (q.type) {
    case 'mcq':
      return typeof st.selectedOption === 'number';
    case 'multi-select':
      return (st.selectedMulti?.length ?? 0) >= Math.min(q.selectCount, q.options.length);
    case 'fill-blank':
      return (
        q.answers.length > 0 &&
        q.answers.every((_, idx) => ((st.fillValues ?? [])[idx] ?? '').trim().length > 0)
      );
    case 'diagram-label':
      return Object.values(st.diagramSelections ?? {}).some((v) => v.trim().length > 0);
    case 'short-answer':
      return (st.shortText ?? '').trim().length > 0;
    case 'matching':
      return Object.keys(st.matchingPairs ?? {}).length > 0;
  }
}

function getUnreadyPromptLabel(q: QuizQuestion, st: LessonAnswerState): string {
  switch (q.type) {
    case 'mcq':
      return 'Select 1 answer';
    case 'multi-select': {
      const remaining = Math.max(1, q.selectCount - (st.selectedMulti?.length ?? 0));
      return remaining === 1 ? 'Select 1 more' : `Select ${q.selectCount} answers`;
    }
    case 'fill-blank':
      return 'Type your answer';
    case 'diagram-label':
      return 'Select labels';
    case 'short-answer':
      return 'Type your answer';
    case 'matching':
      return 'Match pairs';
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
  return 'Re-watch the video card above if you want a quick refresher before answering.';
}

function shouldUseHorizontalChoices(options: string[]): boolean {
  return options.length >= 2 && options.length <= 4 && options.every((o) => o.trim().length <= 18);
}

/**
 * Cognito's signature overlapping mark circles:
 * - Unchecked: hollow warm grey circles (`○○○○`)
 * - Checked: earned marks fill mint green `(✓)`, missed marks fill rose `(×)`
 */
const MarkCircles: React.FC<{
  totalMarks: number;
  checked: boolean;
  earnedMarks: number;
}> = ({ totalMarks, checked, earnedMarks }) => {
  const count = Math.max(1, Math.min(6, totalMarks));
  const earnedDisplay = checked
    ? Math.min(count, Math.round((earnedMarks / Math.max(1, totalMarks)) * count))
    : 0;
  const missedDisplay = checked ? Math.max(0, count - earnedDisplay) : 0;

  return (
    <span className="cl-mark-circles" aria-hidden="true">
      {!checked
        ? Array.from({ length: count }).map((_, idx) => (
            <span key={idx} className="cl-mark-circle cl-mark-circle--empty" />
          ))
        : (
          <>
            {Array.from({ length: missedDisplay }).map((_, idx) => (
              <span key={`m-${idx}`} className="cl-mark-circle cl-mark-circle--miss">
                <X size={11} strokeWidth={3} />
              </span>
            ))}
            {Array.from({ length: earnedDisplay }).map((_, idx) => (
              <span key={`e-${idx}`} className="cl-mark-circle cl-mark-circle--hit">
                <Check size={11} strokeWidth={3} />
              </span>
            ))}
          </>
        )}
    </span>
  );
};

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

  const baseQuestions = useMemo(
    () => course.quizzes.filter((q) => q.subtopicId === resolvedSubtopicId),
    [course.quizzes, resolvedSubtopicId]
  );

  const progress = profile.progressByCourse[course.id];
  const persistedLessonProgress = useMemo(
    () => computeLessonSubtopicProgress(course, resolvedSubtopicId, progress),
    [course, progress, resolvedSubtopicId]
  );
  const isWatched = persistedLessonProgress.watched;

  const [browseMode, setBrowseMode] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>(baseQuestions);
  // Step 0 = Video card only. Clicking Continue unlocks Step 1 (Question 1), Step 2 (Question 2), ...
  const [unlockedStep, setUnlockedStep] = useState(0);
  const [videoStepDone, setVideoStepDone] = useState(false);
  const [answers, setAnswers] = useState<Record<string, LessonAnswerState>>({});
  const [showComplete, setShowComplete] = useState(false);
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openExplanations, setOpenExplanations] = useState<Record<string, boolean>>({});
  const [recapOpen, setRecapOpen] = useState(false);
  const [sessionXp, setSessionXp] = useState(0);
  const [sessionStreak, setSessionStreak] = useState(0);
  const [activeMatchLeft, setActiveMatchLeft] = useState<Record<string, string>>({});
  const [markingId, setMarkingId] = useState<string | null>(null);
  const [qFeedback, setQFeedback] = useState<Record<string, 'up' | 'down' | 'flag' | null>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  const cardRefs = useRef<Record<string, HTMLElement | null>>({});
  const completeCardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setActiveQuestions(baseQuestions);
    setUnlockedStep(0);
    setVideoStepDone(false);
    setAnswers({});
    setShowComplete(false);
    setOpenHints({});
    setOpenExplanations({});
    setRecapOpen(false);
    setSessionXp(0);
    setSessionStreak(0);
    setActiveMatchLeft({});
    setMarkingId(null);
    setQFeedback({});
    setCopiedLink(false);
    if (
      typeof window !== 'undefined' &&
      typeof window.scrollTo === 'function' &&
      !/jsdom/i.test(navigator.userAgent)
    ) {
      window.scrollTo({ top: 0 });
    }
  }, [course.id, resolvedSubtopicId, baseQuestions]);

  // Smoothly scroll newly unlocked card into center of viewport (exact real Cognito rhythm)
  useEffect(() => {
    if (browseMode) return;
    if (showComplete) {
      const el = completeCardRef.current;
      if (el && typeof el.scrollIntoView === 'function') {
        window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 60);
      }
      return;
    }
    if (unlockedStep > 0) {
      const q = activeQuestions[unlockedStep - 1];
      if (!q) return;
      const el = cardRefs.current[q.id];
      if (el && typeof el.scrollIntoView === 'function') {
        window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 60);
      }
    }
  }, [unlockedStep, showComplete, browseMode, activeQuestions]);

  const lessonDisplayTitle = currentEntry
    ? `${currentEntry.code} - ${currentEntry.title}`
    : `${course.subjectName} Lesson`;
  const topBarTitle = currentEntry?.title ?? lessonDisplayTitle;

  const videoTitle = lessonNote?.videoTitle ?? `${lessonDisplayTitle} — Video Lesson`;
  const youtubeId = lessonNote?.youtubeId ?? 'qHkUOlC8Nbo';
  const timestamps = lessonNote?.timestamps ?? [
    { time: '0:00', seconds: 0, label: 'Core concepts & worked examples' },
  ];
  const objectives = useMemo(() => {
    if (lessonNote?.cards.length) {
      return lessonNote.cards.slice(0, 4).map((c) => c.title);
    }
    return currentEntry ? [currentEntry.title] : [];
  }, [lessonNote, currentEntry]);

  const courseSubtitleText =
    course.tier && course.tier !== course.qualificationLabel
      ? `${course.qualificationLabel} ${course.boardLabel} ${course.tier}`.replace(/\s+/g, ' ').trim()
      : `${course.qualificationLabel} ${course.boardLabel}`.replace(/\s+/g, ' ').trim();

  const totalSteps = 1 + activeQuestions.length;

  const totalEarned = useMemo(
    () => activeQuestions.reduce((acc, q) => acc + (answers[q.id]?.earnedMarks ?? 0), 0),
    [activeQuestions, answers]
  );

  const totalPossible = useMemo(
    () => activeQuestions.reduce((acc, q) => acc + q.marks, 0),
    [activeQuestions]
  );

  const missedMarks = useMemo(
    () =>
      activeQuestions.reduce((acc, q) => {
        const st = answers[q.id];
        if (!st?.checked) return acc;
        return acc + Math.max(0, q.marks - st.earnedMarks);
      }, 0),
    [activeQuestions, answers]
  );

  const scorePercent = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 100;

  const missedQuestions = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked && !answers[q.id]?.correct),
    [activeQuestions, answers]
  );

  const correctCount = useMemo(
    () => activeQuestions.filter((q) => answers[q.id]?.checked && answers[q.id]?.correct).length,
    [activeQuestions, answers]
  );

  // Real Cognito multi-color top bar segments:
  // Mint green = earned marks | Rose red = missed marks | Cognito blue = video step completed
  const progressSegments: StudyProgressSegments = useMemo(() => {
    const totalUnits = 1 + totalPossible;
    if (totalUnits <= 0) return { greenPct: 0, redPct: 0, bluePct: 0 };
    const videoCompleted = videoStepDone || isWatched;
    const greenPct = (totalEarned / totalUnits) * 100;
    const redPct = (missedMarks / totalUnits) * 100;
    const bluePct = videoCompleted ? (1 / totalUnits) * 100 : 0;
    return {
      greenPct: Math.min(100, Number(greenPct.toFixed(2))),
      redPct: Math.min(100 - greenPct, Number(redPct.toFixed(2))),
      bluePct: Math.min(100 - greenPct - redPct, Number(bluePct.toFixed(2))),
    };
  }, [isWatched, missedMarks, totalEarned, totalPossible, videoStepDone]);

  const liveProgressPct = Math.min(
    100,
    Math.round(progressSegments.greenPct + progressSegments.redPct + progressSegments.bluePct)
  );

  const markVideoWatchedOnce = useCallback(() => {
    if (!videoStepDone) {
      setVideoStepDone(true);
      setSessionXp((x) => x + 5);
    }
    if (!isWatched) {
      setLessonWatched(course.id, resolvedSubtopicId, lessonDisplayTitle, true);
    }
  }, [course.id, isWatched, lessonDisplayTitle, resolvedSubtopicId, setLessonWatched, videoStepDone]);

  const handleContinueFromVideo = useCallback(() => {
    markVideoWatchedOnce();
    playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
    if (activeQuestions.length === 0) {
      setShowComplete(true);
    } else {
      setUnlockedStep(1);
    }
  }, [
    activeQuestions.length,
    markVideoWatchedOnce,
    profile.preferences.soundEnabled,
    profile.preferences.soundVolume,
  ]);

  const commitGrade = useCallback(
    (q: QuizQuestion, nextState: LessonAnswerState, silentSound = false) => {
      const gained = browseMode
        ? 0
        : nextState.earnedMarks > 0
          ? Math.max(3, nextState.earnedMarks * 3)
          : 0;
      const stamped: LessonAnswerState = { ...nextState, xpAwarded: gained };
      setAnswers((prev) => ({ ...prev, [q.id]: stamped }));

      // Auto-reveal explanation on wrong/partial answers if an explanation is present
      if (!nextState.correct && q.explanation) {
        setOpenExplanations((prev) => ({ ...prev, [q.id]: true }));
      }

      if (!browseMode) {
        if (gained > 0) setSessionXp((x) => x + gained);
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

  const handleAdvanceFromQuestion = useCallback(
    (qIdx: number) => {
      if (qIdx + 1 < activeQuestions.length) {
        setUnlockedStep(qIdx + 2);
      } else {
        setShowComplete(true);
        if (!isWatched) {
          setLessonWatched(course.id, resolvedSubtopicId, lessonDisplayTitle, true);
        }
        playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
      }
    },
    [
      activeQuestions.length,
      course.id,
      isWatched,
      lessonDisplayTitle,
      profile.preferences.soundEnabled,
      profile.preferences.soundVolume,
      resolvedSubtopicId,
      setLessonWatched,
    ]
  );

  const resetLesson = (subset?: QuizQuestion[]) => {
    const nextQs = subset && subset.length > 0 ? subset : baseQuestions;
    setActiveQuestions(nextQs);
    setAnswers({});
    setOpenHints({});
    setOpenExplanations({});
    setShowComplete(false);
    setActiveMatchLeft({});
    // If retrying missed questions, jump straight into Step 1 (first missed question)
    setUnlockedStep(subset && subset.length > 0 ? 1 : 0);
    if (!subset) {
      setVideoStepDone(false);
      setSessionXp(0);
      setSessionStreak(0);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setCopiedLink(true);
    window.setTimeout(() => setCopiedLink(false), 1600);
  };

  const toggleFeedback = (id: string, kind: 'up' | 'down' | 'flag') => {
    setQFeedback((prev) => ({
      ...prev,
      [id]: prev[id] === kind ? null : kind,
    }));
  };

  // Active focus question (when unlockedStep >= 1)
  const activeFocusQIdx = unlockedStep >= 1 ? unlockedStep - 1 : -1;
  const activeFocusQuestion =
    activeFocusQIdx >= 0 && activeFocusQIdx < activeQuestions.length
      ? activeQuestions[activeFocusQIdx]
      : null;
  const activeFocusState = activeFocusQuestion
    ? answers[activeFocusQuestion.id] ?? EMPTY_LESSON_ANSWER
    : EMPTY_LESSON_ANSWER;

  // Cognito exact keyboard shortcuts: 1-9 select option on active card, Enter continues/checks
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (browseMode || showComplete) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      const isTextField =
        tag === 'input' || tag === 'textarea' || tag === 'select' || target?.isContentEditable;

      // Step 0: Video card -> Enter continues to Question 1
      if (unlockedStep === 0) {
        if (e.key === 'Enter' && !isTextField && tag !== 'a' && tag !== 'button') {
          e.preventDefault();
          handleContinueFromVideo();
        }
        return;
      }

      if (!activeFocusQuestion) return;

      if (!isTextField && !activeFocusState.checked && /^[1-9]$/.test(e.key)) {
        const optionIdx = Number(e.key) - 1;
        if (activeFocusQuestion.type === 'mcq' && optionIdx < activeFocusQuestion.options.length) {
          e.preventDefault();
          setAnswers((prev) => ({
            ...prev,
            [activeFocusQuestion.id]: {
              ...(prev[activeFocusQuestion.id] ?? EMPTY_LESSON_ANSWER),
              selectedOption: optionIdx,
            },
          }));
          return;
        }
        if (
          activeFocusQuestion.type === 'multi-select' &&
          optionIdx < activeFocusQuestion.options.length
        ) {
          e.preventDefault();
          setAnswers((prev) => {
            const st = prev[activeFocusQuestion.id] ?? EMPTY_LESSON_ANSWER;
            const picked = st.selectedMulti ?? [];
            const next = picked.includes(optionIdx)
              ? picked.filter((x) => x !== optionIdx)
              : [...picked, optionIdx];
            return { ...prev, [activeFocusQuestion.id]: { ...st, selectedMulti: next } };
          });
          return;
        }
      }

      if (e.key === 'Enter') {
        if (tag === 'textarea') return;
        const isChoiceBtn = target?.dataset?.choiceBtn === 'true';
        if ((tag === 'button' || tag === 'a') && !isChoiceBtn) return;

        if (!activeFocusState.checked) {
          if (
            canCheckLessonQuestion(activeFocusQuestion, activeFocusState) &&
            markingId !== activeFocusQuestion.id
          ) {
            e.preventDefault();
            void gradeQuestion(activeFocusQuestion, activeFocusState);
          }
        } else {
          e.preventDefault();
          handleAdvanceFromQuestion(activeFocusQIdx);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    activeFocusQIdx,
    activeFocusQuestion,
    activeFocusState,
    browseMode,
    gradeQuestion,
    handleAdvanceFromQuestion,
    handleContinueFromVideo,
    markingId,
    showComplete,
    unlockedStep,
  ]);

  const renderQuestionCard = (q: QuizQuestion, qIdx: number, isBrowse: boolean) => {
    const st = answers[q.id] ?? EMPTY_LESSON_ANSWER;
    const readyToCheck = canCheckLessonQuestion(q, st);
    const stepNum = qIdx + 2;
    const isActiveFocusCard = !isBrowse && !showComplete && qIdx === unlockedStep - 1;
    const isLastQuestion = qIdx + 1 >= activeQuestions.length;
    const hintOpen = Boolean(openHints[q.id]);
    const expOpen = Boolean(openExplanations[q.id]);
    const hintText = getLessonQuestionHint(q, lessonNote);
    const fb = qFeedback[q.id];

    const outcome: 'none' | 'correct' | 'partial' | 'incorrect' = !st.checked
      ? 'none'
      : st.correct
        ? 'correct'
        : st.earnedMarks > 0
          ? 'partial'
          : 'incorrect';

    const verdictText =
      outcome === 'correct'
        ? CORRECT_PRAISE[qIdx % CORRECT_PRAISE.length]
        : outcome === 'partial'
          ? 'Nearly there'
          : INCORRECT_PROMPTS[qIdx % INCORRECT_PROMPTS.length];

    const useHorizontalRow =
      (q.type === 'mcq' || q.type === 'multi-select') && shouldUseHorizontalChoices(q.options);

    return (
      <article
        key={q.id}
        ref={(el) => {
          cardRefs.current[q.id] = el;
        }}
        className={`cl-card${
          outcome !== 'none' ? ` cl-card--${outcome}` : ''
        }${isActiveFocusCard ? ' is-active' : ''}`}
      >
        <div className="cl-card__body">
          <div className="cl-step-counter">
            {stepNum} of {totalSteps}
          </div>

          <h2 className="cl-prompt">{renderInlineMarkdown(q.prompt)}</h2>

          {'diagram' in q && q.diagram && (
            <div className="sp-exam-diagram-frame">
              <EducationalDiagram kind={q.diagram} compact />
            </div>
          )}

          {/* 1. MCQ — Cognito numbered rounded pills (row for short options, stack for long) */}
          {q.type === 'mcq' && (
            <div
              className={`cl-choices${useHorizontalRow ? ' cl-choices--row' : ''}`}
              role="radiogroup"
              aria-label="Answer choices"
            >
              {q.options.map((opt, idx) => {
                const isPicked = st.selectedOption === idx;
                const isRight = q.correctIndex === idx;
                let stateClass = '';
                if (st.checked) {
                  if (isRight) stateClass = ' is-correct';
                  else if (isPicked && !isRight) stateClass = ' is-incorrect';
                  else stateClass = ' is-dimmed';
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
                    className={`cl-choice-btn sp-focusable${stateClass}`}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: { ...st, selectedOption: idx },
                      }))
                    }
                  >
                    <span className="cl-choice-btn__left">
                      <span className="cl-choice-num">{idx + 1}</span>
                      <span className="cl-choice-text">{renderInlineMarkdown(opt)}</span>
                    </span>
                    {st.checked && isRight && (
                      <span className="cl-choice-icon cl-choice-icon--right" aria-hidden="true">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    )}
                    {st.checked && isPicked && !isRight && (
                      <span className="cl-choice-icon cl-choice-icon--wrong" aria-hidden="true">
                        <X size={13} strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* 2. Multi-Select — Cognito numbered multi-select pills */}
          {q.type === 'multi-select' && (
            <div
              className={`cl-choices${useHorizontalRow ? ' cl-choices--row' : ''}`}
              role="group"
              aria-label={`Select ${q.selectCount} answers`}
            >
              {q.options.map((opt, idx) => {
                const picked = st.selectedMulti ?? [];
                const isSel = picked.includes(idx);
                const isRight = q.correctIndices.includes(idx);
                let stateClass = '';
                if (st.checked) {
                  if (isRight) stateClass = ' is-correct';
                  else if (isSel && !isRight) stateClass = ' is-incorrect';
                  else stateClass = ' is-dimmed';
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
                    className={`cl-choice-btn sp-focusable${stateClass}`}
                    onClick={() => {
                      const next = isSel ? picked.filter((x) => x !== idx) : [...picked, idx];
                      setAnswers((prev) => ({ ...prev, [q.id]: { ...st, selectedMulti: next } }));
                    }}
                  >
                    <span className="cl-choice-btn__left">
                      <span className="cl-choice-num">{idx + 1}</span>
                      <span className="cl-choice-text">{renderInlineMarkdown(opt)}</span>
                    </span>
                    {st.checked && isRight && (
                      <span className="cl-choice-icon cl-choice-icon--right" aria-hidden="true">
                        <Check size={13} strokeWidth={3} />
                      </span>
                    )}
                    {st.checked && isSel && !isRight && (
                      <span className="cl-choice-icon cl-choice-icon--wrong" aria-hidden="true">
                        <X size={13} strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* 3. Fill-in-the-blank — Exact Cognito inline underline blanks + word bank */}
          {q.type === 'fill-blank' && (
            <div className="cl-fill-wrap">
              <div className="cl-fill-sentence">
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
                        <span className="cl-blank-group">
                          <input
                            type="text"
                            disabled={st.checked}
                            value={val}
                            onChange={(e) => {
                              const next = [...vals];
                              next[i] = e.target.value;
                              setAnswers((prev) => ({
                                ...prev,
                                [q.id]: { ...st, fillValues: next },
                              }));
                            }}
                            aria-label={`Blank ${i + 1}`}
                            className={`cl-blank-input${
                              val.trim() && !st.checked ? ' has-value' : ''
                            }${st.checked ? (blankRight ? ' is-correct' : ' is-incorrect') : ''}`}
                          />
                          {st.checked && !blankRight && (
                            <span className="cl-blank-correction">{q.answers[i]}</span>
                          )}
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {q.wordBank.length > 0 && !st.checked && (
                <div className="cl-wordbank">
                  <span className="cl-wordbank__label">Word bank:</span>
                  {q.wordBank.map((word) => (
                    <button
                      key={word}
                      type="button"
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
              )}
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

          {/* Exact Real Cognito "Get hint" pill (Focus mode before checking) */}
          {!isBrowse && !st.checked && (
            <div className="cl-inline-tools">
              <button
                type="button"
                className={`cl-hint-pill${hintOpen ? ' is-open' : ''}`}
                onClick={() => setOpenHints((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
              >
                <Lightbulb size={14} />
                <span>{hintOpen ? 'Hide hint' : 'Get hint'}</span>
              </button>
            </div>
          )}

          {hintOpen && !st.checked && (
            <div className="lesson-hint-box" role="note" style={{ marginTop: 12, marginBottom: 0 }}>
              <Lightbulb size={15} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{renderInlineMarkdown(hintText)}</span>
            </div>
          )}

          {/* Exact Real Cognito "Show explanation" toggle after checking */}
          {st.checked && q.explanation && (
            <div className="cl-explanation-wrap">
              <button
                type="button"
                className="cl-explanation-toggle"
                aria-expanded={expOpen}
                onClick={() =>
                  setOpenExplanations((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                }
              >
                <span>{expOpen ? 'Hide explanation' : 'Show explanation'}</span>
                {expOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {expOpen && (
                <p className="cl-explanation-body">{renderInlineMarkdown(q.explanation)}</p>
              )}
            </div>
          )}
        </div>

        {/* CARD FOOTER */}
        {isBrowse ? (
          /* Exact Real Cognito Browse Footer: Left Submit | Right Get hint + 👍👎⚠ + 0/1 box */
          <div className={`cl-browse-footer${outcome !== 'none' ? ` cl-browse-footer--${outcome}` : ''}`}>
            <div className="cl-browse-footer__left">
              {!st.checked ? (
                <button
                  type="button"
                  disabled={!readyToCheck || markingId === q.id}
                  className="cl-tactile-btn"
                  onClick={() => void gradeQuestion(q)}
                >
                  {markingId === q.id ? 'Checking...' : 'Submit'}
                </button>
              ) : (
                <div className="cl-verdict-group" role="status">
                  <MarkCircles
                    totalMarks={q.marks}
                    checked={st.checked}
                    earnedMarks={st.earnedMarks}
                  />
                  <span className="cl-verdict-text">{verdictText}</span>
                </div>
              )}
            </div>

            <div className="cl-browse-footer__right">
              {!st.checked && (
                <button
                  type="button"
                  className={`cl-hint-pill${hintOpen ? ' is-open' : ''}`}
                  onClick={() => setOpenHints((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                >
                  <Lightbulb size={14} />
                  <span>{hintOpen ? 'Hide hint' : 'Get hint'}</span>
                </button>
              )}

              <div className="sp-feedback-icons" aria-label={`Question ${qIdx + 1} feedback`}>
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

              <span className="cl-browse-marks-box">
                {st.checked ? st.earnedMarks : 0} / {q.marks}
              </span>
            </div>
          </div>
        ) : (
          /* Exact Real Cognito Focus Footer: Full-bleed Mint / Amber / Rose on Check + Overlapping Mark Circles */
          <div
            className={`cl-card__footer${outcome !== 'none' ? ` cl-card__footer--${outcome}` : ''}`}
          >
            <div className="cl-verdict-group" role={st.checked ? 'status' : undefined}>
              <MarkCircles
                totalMarks={q.marks}
                checked={st.checked}
                earnedMarks={st.earnedMarks}
              />
              {!st.checked ? (
                <span className="cl-marks-label">
                  {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
                </span>
              ) : (
                <span className="cl-verdict-text">{verdictText}</span>
              )}
            </div>

            {!st.checked ? (
              <button
                type="button"
                disabled={!readyToCheck || markingId === q.id}
                className={`cl-tactile-btn${readyToCheck ? ' is-ready' : ''}`}
                onClick={() => void gradeQuestion(q)}
              >
                <span>
                  {markingId === q.id
                    ? 'Checking...'
                    : readyToCheck
                      ? 'Check'
                      : getUnreadyPromptLabel(q, st)}
                </span>
                <CornerDownLeft size={14} strokeWidth={2.4} aria-hidden="true" />
              </button>
            ) : isActiveFocusCard ? (
              <button
                type="button"
                className="cl-tactile-btn is-ready"
                onClick={() => handleAdvanceFromQuestion(qIdx)}
              >
                <span>{isLastQuestion ? 'Finish lesson' : 'Continue'}</span>
                <CornerDownLeft size={14} strokeWidth={2.4} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        )}
      </article>
    );
  };

  const visibleFocusQuestions = useMemo(
    () => (unlockedStep > 0 ? activeQuestions.slice(0, unlockedStep) : []),
    [activeQuestions, unlockedStep]
  );

  return (
    <div className="cl-page">
      <StudyTopBar
        course={course}
        currentSubtopicId={resolvedSubtopicId}
        title={topBarTitle}
        activityType="lesson"
        progressPercent={liveProgressPct}
        progressSegments={progressSegments}
        sessionXp={sessionXp}
        sessionStreak={sessionStreak}
        browseMode={browseMode}
        onToggleBrowse={() => {
          setBrowseMode((b) => !b);
          setShowComplete(false);
        }}
      />

      <main className={`cl-stream${browseMode ? ' cl-stream--browse' : ''}`}>
        <h1 className="sr-only">{lessonDisplayTitle} - lesson</h1>

        {/* BROWSE MODE: Exact Real Cognito Lesson Overview Card (cognito_lesson_options.png) */}
        {browseMode && (
          <section className="cl-card cl-overview-card" aria-label="Lesson overview">
            <div className="cl-overview-card__top">
              <h2 className="cl-overview-card__title">{lessonDisplayTitle}</h2>
              {objectives.length > 0 && (
                <ol className="lesson-preview-objectives">
                  {objectives.map((obj, idx) => (
                    <li key={idx} className="lesson-preview-objectives__item">
                      <span className="lesson-preview-objectives__num">{idx + 1}</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <div className="cl-overview-card__meta">
              <div className="cl-overview-pills">
                <span className="cl-meta-pill">
                  <Clock size={14} />
                  <span>{lessonNote?.readingMinutes ?? 5} min</span>
                </span>
                <span className="cl-meta-pill">
                  <HelpCircle size={14} />
                  <span>
                    {activeQuestions.length}{' '}
                    {activeQuestions.length === 1 ? 'question' : 'questions'}
                  </span>
                </span>
                <Link
                  to={`/course/${course.id}/notes/${resolvedSubtopicId}`}
                  className="cl-meta-pill cl-meta-pill--link"
                >
                  <BookOpen size={14} />
                  <span>Revision notes</span>
                </Link>
              </div>

              <button
                type="button"
                aria-label="Copy link"
                title={copiedLink ? 'Link copied!' : 'Copy link'}
                className="sp-icon-btn"
                onClick={handleCopyLink}
              >
                {copiedLink ? <Check size={15} color="var(--color-green-600)" /> : <LinkIcon size={15} />}
              </button>
            </div>
          </section>
        )}

        {/* STEP 1 OF N: Flush Cognito Video Card (matches cognito_lesson_step1.png & walk_browse_1.png) */}
        <article
          className={`cl-card cl-card--video${browseMode ? ' is-browse' : ''}`}
          aria-label="Video lesson"
        >
          {browseMode && (
            <div className="cl-video-browse-head">
              <span className="cl-step-counter">1 of {totalSteps}</span>
            </div>
          )}

          <div className={`cl-video-frame-wrap${browseMode ? ' is-padded' : ''}`}>
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
              showTimestampsBar={browseMode}
              showVideoHeader={false}
              showCardWrapper={false}
              onVideoStartPlaying={markVideoWatchedOnce}
            />
          </div>

          {browseMode ? (
            <div className="cl-video-browse-footer">
              <div className="sp-feedback-icons" aria-label="Video feedback">
                <button
                  type="button"
                  aria-label="Like video"
                  className={`sp-icon-btn${qFeedback['video'] === 'up' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback('video', 'up')}
                >
                  <ThumbsUp size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Dislike video"
                  className={`sp-icon-btn${qFeedback['video'] === 'down' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback('video', 'down')}
                >
                  <ThumbsDown size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Report video"
                  className={`sp-icon-btn${qFeedback['video'] === 'flag' ? ' is-active' : ''}`}
                  onClick={() => toggleFeedback('video', 'flag')}
                >
                  <AlertTriangle size={15} />
                </button>
              </div>
            </div>
          ) : unlockedStep === 0 && !showComplete ? (
            <div className="cl-card__footer cl-card__footer--video">
              <span />
              <button
                type="button"
                aria-label="Continue to next card"
                className="cl-tactile-btn is-ready"
                onClick={handleContinueFromVideo}
              >
                <span>Continue</span>
                <CornerDownLeft size={14} strokeWidth={2.4} aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </article>

        {/* STEPS 2..N: Progressive Question Cards (Focus) or All Questions (Browse) */}
        {(browseMode ? activeQuestions : visibleFocusQuestions).map((q, qIdx) =>
          renderQuestionCard(q, qIdx, browseMode)
        )}

        {/* LESSON COMPLETE CARD (Revealed cleanly after final step — ZERO paywall or sign-up gates) */}
        {!browseMode && showComplete && (
          <section
            ref={completeCardRef}
            className="cl-card cl-complete-card"
            aria-label="Lesson complete"
          >
            <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 14 }}>
              <Sparkles size={13} /> LESSON COMPLETE
            </span>
            <h2 className="font-heading cl-complete-card__title">
              {scorePercent >= 80
                ? 'Excellent work on this lesson!'
                : scorePercent >= 50
                  ? 'Solid understanding!'
                  : 'Good practice — review & try again!'}
            </h2>
            <p className="cl-complete-card__sub">
              {activeQuestions.length > 0 ? (
                <>
                  You got <strong>{correctCount} of {activeQuestions.length}</strong> questions
                  right in <strong>{lessonDisplayTitle}</strong>.
                </>
              ) : (
                <>
                  You completed <strong>{lessonDisplayTitle}</strong>.
                </>
              )}
            </p>

            {/* Glossy Mastery Summary Bar */}
            <div className="cl-complete-bar" aria-label={`Lesson mastery ${scorePercent}%`}>
              {progressSegments.greenPct > 0 && (
                <span
                  className="workspace-bar-seg workspace-bar-seg--green"
                  style={{ width: `${progressSegments.greenPct}%` }}
                />
              )}
              {progressSegments.redPct > 0 && (
                <span
                  className="workspace-bar-seg workspace-bar-seg--red"
                  style={{ width: `${progressSegments.redPct}%` }}
                />
              )}
              {progressSegments.bluePct > 0 && (
                <span
                  className="workspace-bar-seg workspace-bar-seg--blue"
                  style={{ width: `${progressSegments.bluePct}%` }}
                />
              )}
            </div>

            <div className="sp-summary-stats" style={{ marginBottom: 22 }}>
              <div className="sp-summary-stat">
                <div
                  className="sp-summary-stat__val"
                  style={{
                    color:
                      scorePercent >= 70 ? 'var(--color-green-600)' : 'var(--color-blue-600)',
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
                <div className="sp-summary-stat__label">Earned this lesson</div>
              </div>
              <div className="sp-summary-stat">
                <div className="sp-summary-stat__val" style={{ color: 'var(--color-green-600)' }}>
                  {totalSteps} / {totalSteps}
                </div>
                <div className="sp-summary-stat__label">Steps completed</div>
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
                  onClick={() => resetLesson(missedQuestions)}
                >
                  <RotateCcw size={15} /> Retry missed ({missedQuestions.length})
                </button>
              )}

              <button
                type="button"
                className="tactile-btn"
                onClick={() => resetLesson()}
              >
                <RotateCcw size={15} /> Redo lesson
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
          </section>
        )}

        {/* BROWSE MODE EXTRA: Collapsible Quick Lesson Recap & Prev/Next Pagination */}
        {browseMode && lessonNote && (
          <section className="cl-card lesson-recap-card no-print">
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
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                }}
              >
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

        {browseMode && (
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
        )}
      </main>
    </div>
  );
};
