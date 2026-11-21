import React, { createContext, useContext, useEffect, useState } from 'react';
import { AvatarId } from '../components/artwork/Avatars';
import { ALL_COURSES, getCourseById } from '../data/catalog';
import { CourseDefinition, ProfileCreationInput, QuizQuestion } from '../types/curriculum';
import {
  ActivityEvent,
  AppStoreState,
  CourseProgress,
  UserPreferences,
  UserProfile,
} from '../types/user';

export const STORAGE_KEY = 'cognito_clone_v1';

export function formatDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function createEmptyCourseProgress(): CourseProgress {
  return {
    readNoteIds: [],
    checkedPointsBySubtopic: {},
    questionAttempts: {},
    flashcardConfidence: {},
    examPartScores: {},
  };
}

export function createDefaultProfile(overrides?: Partial<UserProfile>): UserProfile {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  const todayKey = formatDateKey(today);
  const yesterdayKey = formatDateKey(yesterday);
  const twoDaysAgoKey = formatDateKey(twoDaysAgo);

  const defaultEnrolled = [
    'gcse-maths-edexcel-higher',
    'gcse-biology-aqa-higher',
    'gcse-chemistry-aqa-higher',
    'gcse-physics-aqa-higher',
    'igcse-biology-cie',
    'igcse-chemistry-cie',
    'igcse-physics-cie',
    'igcse-maths-cie',
    'igcse-business-cie',
    'a-level-biology-aqa',
    'a-level-chemistry-aqa',
    'a-level-physics-aqa',
    'a-level-maths-edexcel',
    'a-level-psychology-cie-core',
  ];

  const defaultSavedBySubject: Record<string, string> = {
    maths: 'gcse-maths-edexcel-higher',
    biology: 'gcse-biology-aqa-higher',
    chemistry: 'gcse-chemistry-aqa-higher',
    physics: 'gcse-physics-aqa-higher',
    business: 'igcse-business-cie',
    'computer-science': 'gcse-computer-science-cie-core',
    economics: 'gcse-economics-cie-core',
    'english-language': 'gcse-english-language-cie-core',
    psychology: 'a-level-psychology-cie-core',
  };

  return {
    id: overrides?.id ?? 'profile-default',
    name: overrides?.name ?? 'Alex',
    yearGroup: overrides?.yearGroup ?? 'YEAR 11',
    avatarId: overrides?.avatarId ?? 'snorkel',
    joinedDate: overrides?.joinedDate ?? 'Sep 2026',
    dailyXpGoal: overrides?.dailyXpGoal ?? 150,
    streakFreezes: overrides?.streakFreezes ?? 2,
    enrolledCourseIds: overrides?.enrolledCourseIds ?? defaultEnrolled,
    savedCourseBySubject: overrides?.savedCourseBySubject ?? defaultSavedBySubject,
    preferences: overrides?.preferences ?? {
      darkMode: false,
      soundEnabled: true,
      soundVolume: 50,
      aiMarkingEnabled: true,
      emailNotifications: false,
      analyticsCookies: false,
      aiConfig: {
        enabled: false,
        provider: 'gemini',
        apiKey: '',
        model: 'gemini-2.5-flash',
      },
    },
    progressByCourse: overrides?.progressByCourse ?? {
      'gcse-physics-aqa-higher': {
        readNoteIds: ['phys-1-1'],
        checkedPointsBySubtopic: {},
        questionAttempts: {
          'phys-q1': { answered: true, correct: true, earnedMarks: 1, maxMarks: 1, lastAnsweredAt: yesterday.toISOString() },
          'phys-q2': { answered: true, correct: true, earnedMarks: 1, maxMarks: 1, lastAnsweredAt: yesterday.toISOString() },
          'phys-q3': { answered: true, correct: true, earnedMarks: 2, maxMarks: 2, lastAnsweredAt: yesterday.toISOString() },
        },
        flashcardConfidence: {},
        examPartScores: {},
      },
    },
    activityLog: overrides?.activityLog ?? [
      {
        id: 'seed-1',
        timestamp: twoDaysAgo.toISOString(),
        dateKey: twoDaysAgoKey,
        type: 'notes',
        courseId: 'gcse-physics-aqa-higher',
        courseLabel: 'GCSE Physics · AQA',
        subjectName: 'Physics',
        subtopicId: 'phys-1-1',
        title: '1.1 Energy Stores & Transfers',
        xpEarned: 36,
        durationSeconds: 320,
        questionsAnswered: 0,
      },
      {
        id: 'seed-2',
        timestamp: yesterday.toISOString(),
        dateKey: yesterdayKey,
        type: 'quiz',
        courseId: 'gcse-physics-aqa-higher',
        courseLabel: 'GCSE Physics · AQA',
        subjectName: 'Physics',
        subtopicId: 'phys-1-1',
        title: '1.1 Energy Stores Quiz',
        xpEarned: 45,
        durationSeconds: 260,
        questionsAnswered: 3,
        scorePercent: 100,
      },
      {
        id: 'seed-3',
        timestamp: today.toISOString(),
        dateKey: todayKey,
        type: 'notes',
        courseId: 'gcse-biology-aqa-higher',
        courseLabel: 'GCSE Biology · AQA',
        subjectName: 'Biology',
        subtopicId: 'bio-1-1',
        title: 'Previewed 1.1 Cell Structure',
        xpEarned: 20,
        durationSeconds: 180,
        questionsAnswered: 0,
      },
    ],
  };
}

export function createInitialStoreState(): AppStoreState {
  const initialProfile = createDefaultProfile();
  return {
    version: 1,
    activeProfileId: initialProfile.id,
    profiles: [initialProfile],
  };
}

export function computeStreakStats(
  activityLog: ActivityEvent[],
  streakFreezes: number,
  referenceDate: Date = new Date()
): {
  currentStreak: number;
  longestStreak: number;
  activeDates: Set<string>;
  xpByDate: Record<string, number>;
  totalXp: number;
} {
  const xpByDate: Record<string, number> = {};
  const activeDates = new Set<string>();
  let totalXp = 0;

  for (const ev of activityLog) {
    const dk = ev.dateKey || formatDateKey(new Date(ev.timestamp));
    activeDates.add(dk);
    xpByDate[dk] = (xpByDate[dk] ?? 0) + ev.xpEarned;
    totalXp += ev.xpEarned;
  }

  // Current streak: count backwards from today (or yesterday if today not yet active), bridging missed days if freezes allow
  const todayKey = formatDateKey(referenceDate);
  let cursor = new Date(referenceDate);
  if (!activeDates.has(todayKey)) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let currentStreak = 0;
  let freezesAvailable = streakFreezes;
  for (let i = 0; i < 365; i++) {
    const key = formatDateKey(cursor);
    if (activeDates.has(key)) {
      currentStreak += 1;
    } else if (freezesAvailable > 0 && currentStreak > 0) {
      freezesAvailable -= 1;
    } else {
      break;
    }
    cursor.setDate(cursor.getDate() - 1);
  }

  // Longest streak across recorded sorted active dates
  const sortedDates = Array.from(activeDates).sort();
  let longestStreak = 0;
  let run = 0;
  let prevTime: number | null = null;

  for (const ds of sortedDates) {
    const t = new Date(`${ds}T12:00:00Z`).getTime();
    if (prevTime !== null && Math.round((t - prevTime) / 86400000) === 1) {
      run += 1;
    } else {
      run = 1;
    }
    if (run > longestStreak) longestStreak = run;
    prevTime = t;
  }

  longestStreak = Math.max(longestStreak, currentStreak);
  return { currentStreak, longestStreak, activeDates, xpByDate, totalXp };
}

export type SessionMixStrategy = 'learn' | 'balanced' | 'fix-mistakes';

export interface RevisionSessionMixInput {
  course: CourseDefinition;
  subtopicIds: string[];
  progress: CourseProgress | undefined;
  strategy: SessionMixStrategy;
  requestedTotal: number;
  customCounts?: { newCount: number; correctCount: number; incorrectCount: number };
}

/**
 * Pure session builder with ZERO paywall limits — supports selecting any number
 * of questions across any number of subtopics (never capped at 15).
 */
export function buildRevisionSessionQuestions(input: RevisionSessionMixInput): QuizQuestion[] {
  const pool = input.course.quizzes.filter((q) => input.subtopicIds.includes(q.subtopicId));
  const attempts = input.progress?.questionAttempts ?? {};

  const newQs: QuizQuestion[] = [];
  const correctQs: QuizQuestion[] = [];
  const incorrectQs: QuizQuestion[] = [];

  for (const q of pool) {
    const attempt = attempts[q.id];
    if (!attempt || !attempt.answered) {
      newQs.push(q);
    } else if (attempt.correct) {
      correctQs.push(q);
    } else {
      incorrectQs.push(q);
    }
  }

  if (input.customCounts) {
    return [
      ...newQs.slice(0, input.customCounts.newCount),
      ...correctQs.slice(0, input.customCounts.correctCount),
      ...incorrectQs.slice(0, input.customCounts.incorrectCount),
    ];
  }

  const target = Math.max(1, Math.min(input.requestedTotal, pool.length));
  let prioritized: QuizQuestion[];

  if (input.strategy === 'learn') {
    prioritized = [...newQs, ...incorrectQs, ...correctQs];
  } else if (input.strategy === 'fix-mistakes') {
    prioritized = [...incorrectQs, ...newQs, ...correctQs];
  } else {
    // Balanced interleaving
    prioritized = [];
    const maxLen = Math.max(newQs.length, incorrectQs.length, correctQs.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < newQs.length) prioritized.push(newQs[i]);
      if (i < incorrectQs.length) prioritized.push(incorrectQs[i]);
      if (i < correctQs.length) prioritized.push(correctQs[i]);
    }
  }

  return prioritized.slice(0, target);
}

export function getCourseStats(course: CourseDefinition, progress?: CourseProgress): {
  questionsAnswered: number;
  questionsTotal: number;
  avgScorePercent: number | null;
  flashcardsConfident: number;
  flashcardsTotal: number;
  confidencePercent: number | null;
  notesRead: number;
  notesTotal: number;
} {
  const p = progress ?? createEmptyCourseProgress();
  const attempts = Object.values(p.questionAttempts).filter((a) => a.answered);
  const questionsAnswered = attempts.length;
  const totalEarned = attempts.reduce((acc, a) => acc + a.earnedMarks, 0);
  const totalMax = attempts.reduce((acc, a) => acc + a.maxMarks, 0);
  const avgScorePercent = totalMax > 0 ? Math.round((totalEarned / totalMax) * 100) : null;

  const confidentCards = Object.values(p.flashcardConfidence).filter(
    (c) => c.status === 'confident'
  ).length;
  const totalDeckTried = Object.keys(p.flashcardConfidence).length;
  const confidencePercent =
    totalDeckTried > 0 ? Math.round((confidentCards / totalDeckTried) * 100) : null;

  const allSubtopicCount = course.topics.reduce((acc, t) => acc + t.subtopics.length, 0);

  return {
    questionsAnswered,
    questionsTotal: course.totalQuestionsCount,
    avgScorePercent,
    flashcardsConfident: confidentCards,
    flashcardsTotal: course.totalFlashcardsCount,
    confidencePercent,
    notesRead: p.readNoteIds.length,
    notesTotal: Math.max(1, allSubtopicCount),
  };
}

export function exportProfileJson(profile: UserProfile): string {
  return JSON.stringify(
    {
      cognitoCloneBackupVersion: 1,
      exportedAt: new Date().toISOString(),
      profile,
    },
    null,
    2
  );
}

export function parseImportedProfileJson(rawJson: string): UserProfile | null {
  try {
    const parsed = JSON.parse(rawJson);
    const candidate = parsed?.profile ?? parsed;
    if (
      !candidate ||
      typeof candidate.name !== 'string' ||
      !Array.isArray(candidate.enrolledCourseIds)
    ) {
      return null;
    }
    return createDefaultProfile({
      ...candidate,
      id: `profile-${Date.now()}`,
    });
  } catch {
    return null;
  }
}

function loadStoreState(): AppStoreState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialStoreState();
    const parsed = JSON.parse(raw) as AppStoreState;
    if (!parsed || !Array.isArray(parsed.profiles) || parsed.profiles.length === 0) {
      return createInitialStoreState();
    }
    return parsed;
  } catch {
    return createInitialStoreState();
  }
}

interface AppContextValue {
  state: AppStoreState;
  profile: UserProfile;
  streakStats: ReturnType<typeof computeStreakStats>;
  updateProfile: (updater: (prev: UserProfile) => UserProfile) => void;
  updatePreferences: (patch: Partial<UserPreferences>) => void;
  setAvatar: (avatarId: AvatarId) => void;
  setDailyXpGoal: (goal: 100 | 150 | 250 | 500) => void;
  toggleEnrollCourse: (courseId: string) => void;
  setSavedCourseForSubject: (subjectSlug: string, courseId: string) => void;
  markNoteRead: (courseId: string, subtopicId: string, subtopicTitle: string) => void;
  toggleChecklistPoint: (courseId: string, subtopicId: string, point: string) => void;
  setAllChecklistPoints: (courseId: string, subtopicId: string, points: string[]) => void;
  recordQuestionAttempt: (
    courseId: string,
    questionId: string,
    correct: boolean,
    earnedMarks: number,
    maxMarks: number,
    activityTitle: string,
    subtopicId?: string
  ) => void;
  recordFlashcardConfidence: (
    courseId: string,
    cardId: string,
    status: 'confident' | 'still-learning',
    activityTitle: string,
    subtopicId?: string
  ) => void;
  recordExamPartScore: (
    courseId: string,
    partId: string,
    earnedMarks: number,
    maxMarks: number,
    answerText: string,
    activityTitle: string,
    subtopicId?: string
  ) => void;
  logSimpleActivity: (
    event: Omit<ActivityEvent, 'id' | 'timestamp' | 'dateKey'>
  ) => void;
  switchProfile: (profileId: string) => void;
  createProfile: (input: ProfileCreationInput) => void;
  importProfile: (rawJson: string) => boolean;
  resetActiveProfile: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppStoreState>(() => loadStoreState());

  const profile =
    state.profiles.find((p) => p.id === state.activeProfileId) ?? state.profiles[0];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      const mode = profile.preferences.darkMode ? 'dark' : 'light';
      localStorage.setItem('color-scheme', mode);
      document.documentElement.dataset.theme = mode;
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) meta.setAttribute('content', mode);
    } catch {
      // Ignore quota / restricted storage errors
    }
  }, [state, profile.preferences.darkMode]);

  const updateProfile = (updater: (prev: UserProfile) => UserProfile) => {
    setState((prev) => ({
      ...prev,
      profiles: prev.profiles.map((p) =>
        p.id === prev.activeProfileId ? updater(p) : p
      ),
    }));
  };

  const updatePreferences = (patch: Partial<UserPreferences>) => {
    updateProfile((p) => ({
      ...p,
      preferences: { ...p.preferences, ...patch },
    }));
  };

  const setAvatar = (avatarId: AvatarId) => {
    updateProfile((p) => ({ ...p, avatarId }));
  };

  const setDailyXpGoal = (dailyXpGoal: 100 | 150 | 250 | 500) => {
    updateProfile((p) => ({ ...p, dailyXpGoal }));
  };

  const toggleEnrollCourse = (courseId: string) => {
    updateProfile((p) => {
      const exists = p.enrolledCourseIds.includes(courseId);
      const enrolledCourseIds = exists
        ? p.enrolledCourseIds.filter((id) => id !== courseId)
        : [...p.enrolledCourseIds, courseId];
      const course = getCourseById(courseId);
      const savedCourseBySubject = { ...p.savedCourseBySubject };
      if (!exists && course && !savedCourseBySubject[course.subjectSlug]) {
        savedCourseBySubject[course.subjectSlug] = courseId;
      }
      return { ...p, enrolledCourseIds, savedCourseBySubject };
    });
  };

  const setSavedCourseForSubject = (subjectSlug: string, courseId: string) => {
    updateProfile((p) => {
      const enrolled = p.enrolledCourseIds.includes(courseId)
        ? p.enrolledCourseIds
        : [...p.enrolledCourseIds, courseId];
      return {
        ...p,
        enrolledCourseIds: enrolled,
        savedCourseBySubject: {
          ...p.savedCourseBySubject,
          [subjectSlug]: courseId,
        },
      };
    });
  };

  const appendActivity = (
    p: UserProfile,
    event: Omit<ActivityEvent, 'id' | 'timestamp' | 'dateKey'>
  ): UserProfile => {
    const now = new Date();
    const newEv: ActivityEvent = {
      ...event,
      id: `ev-${now.getTime()}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: now.toISOString(),
      dateKey: formatDateKey(now),
    };
    return {
      ...p,
      activityLog: [newEv, ...p.activityLog],
    };
  };

  const markNoteRead = (courseId: string, subtopicId: string, subtopicTitle: string) => {
    const course = getCourseById(courseId) ?? ALL_COURSES[0];
    updateProfile((p) => {
      const current = p.progressByCourse[courseId] ?? createEmptyCourseProgress();
      const alreadyRead = current.readNoteIds.includes(subtopicId);
      const nextProgress: CourseProgress = {
        ...current,
        readNoteIds: alreadyRead ? current.readNoteIds : [...current.readNoteIds, subtopicId],
      };
      const updated = {
        ...p,
        progressByCourse: { ...p.progressByCourse, [courseId]: nextProgress },
      };
      return appendActivity(updated, {
        type: 'notes',
        courseId,
        courseLabel: `${course.qualificationLabel} ${course.subjectName} · ${course.boardLabel}`,
        subjectName: course.subjectName,
        subtopicId,
        title: `Completed notes: ${subtopicTitle}`,
        xpEarned: alreadyRead ? 5 : 25,
        durationSeconds: 180,
        questionsAnswered: 0,
      });
    });
  };

  const toggleChecklistPoint = (courseId: string, subtopicId: string, point: string) => {
    updateProfile((p) => {
      const current = p.progressByCourse[courseId] ?? createEmptyCourseProgress();
      const existing = current.checkedPointsBySubtopic[subtopicId] ?? [];
      const nextList = existing.includes(point)
        ? existing.filter((x) => x !== point)
        : [...existing, point];
      return {
        ...p,
        progressByCourse: {
          ...p.progressByCourse,
          [courseId]: {
            ...current,
            checkedPointsBySubtopic: {
              ...current.checkedPointsBySubtopic,
              [subtopicId]: nextList,
            },
          },
        },
      };
    });
  };

  const setAllChecklistPoints = (courseId: string, subtopicId: string, points: string[]) => {
    updateProfile((p) => {
      const current = p.progressByCourse[courseId] ?? createEmptyCourseProgress();
      return {
        ...p,
        progressByCourse: {
          ...p.progressByCourse,
          [courseId]: {
            ...current,
            checkedPointsBySubtopic: {
              ...current.checkedPointsBySubtopic,
              [subtopicId]: points,
            },
          },
        },
      };
    });
  };

  const recordQuestionAttempt = (
    courseId: string,
    questionId: string,
    correct: boolean,
    earnedMarks: number,
    maxMarks: number,
    activityTitle: string,
    subtopicId?: string
  ) => {
    const course = getCourseById(courseId) ?? ALL_COURSES[0];
    updateProfile((p) => {
      const current = p.progressByCourse[courseId] ?? createEmptyCourseProgress();
      const updated = {
        ...p,
        progressByCourse: {
          ...p.progressByCourse,
          [courseId]: {
            ...current,
            questionAttempts: {
              ...current.questionAttempts,
              [questionId]: {
                answered: true,
                correct,
                earnedMarks,
                maxMarks,
                lastAnsweredAt: new Date().toISOString(),
              },
            },
          },
        },
      };
      return appendActivity(updated, {
        type: 'quiz',
        courseId,
        courseLabel: `${course.qualificationLabel} ${course.subjectName} · ${course.boardLabel}`,
        subjectName: course.subjectName,
        subtopicId,
        title: activityTitle,
        xpEarned: correct ? 15 : 5,
        durationSeconds: 45,
        questionsAnswered: 1,
        scorePercent: maxMarks > 0 ? Math.round((earnedMarks / maxMarks) * 100) : 0,
      });
    });
  };

  const recordFlashcardConfidence = (
    courseId: string,
    cardId: string,
    status: 'confident' | 'still-learning',
    activityTitle: string,
    subtopicId?: string
  ) => {
    const course = getCourseById(courseId) ?? ALL_COURSES[0];
    updateProfile((p) => {
      const current = p.progressByCourse[courseId] ?? createEmptyCourseProgress();
      const updated = {
        ...p,
        progressByCourse: {
          ...p.progressByCourse,
          [courseId]: {
            ...current,
            flashcardConfidence: {
              ...current.flashcardConfidence,
              [cardId]: { status, updatedAt: new Date().toISOString() },
            },
          },
        },
      };
      return appendActivity(updated, {
        type: 'flashcards',
        courseId,
        courseLabel: `${course.qualificationLabel} ${course.subjectName} · ${course.boardLabel}`,
        subjectName: course.subjectName,
        subtopicId,
        title: activityTitle,
        xpEarned: status === 'confident' ? 10 : 5,
        durationSeconds: 20,
        questionsAnswered: 1,
      });
    });
  };

  const recordExamPartScore = (
    courseId: string,
    partId: string,
    earnedMarks: number,
    maxMarks: number,
    answerText: string,
    activityTitle: string,
    subtopicId?: string
  ) => {
    const course = getCourseById(courseId) ?? ALL_COURSES[0];
    updateProfile((p) => {
      const current = p.progressByCourse[courseId] ?? createEmptyCourseProgress();
      const updated = {
        ...p,
        progressByCourse: {
          ...p.progressByCourse,
          [courseId]: {
            ...current,
            examPartScores: {
              ...current.examPartScores,
              [partId]: { earnedMarks, maxMarks, answerText },
            },
          },
        },
      };
      return appendActivity(updated, {
        type: 'exam',
        courseId,
        courseLabel: `${course.qualificationLabel} ${course.subjectName} · ${course.boardLabel}`,
        subjectName: course.subjectName,
        subtopicId,
        title: activityTitle,
        xpEarned: Math.max(5, earnedMarks * 10),
        durationSeconds: 90,
        questionsAnswered: 1,
        scorePercent: maxMarks > 0 ? Math.round((earnedMarks / maxMarks) * 100) : 0,
      });
    });
  };

  const logSimpleActivity = (event: Omit<ActivityEvent, 'id' | 'timestamp' | 'dateKey'>) => {
    updateProfile((p) => appendActivity(p, event));
  };

  const switchProfile = (profileId: string) => {
    setState((prev) => ({
      ...prev,
      activeProfileId: prev.profiles.some((p) => p.id === profileId)
        ? profileId
        : prev.activeProfileId,
    }));
  };

  const createProfile = (input: ProfileCreationInput) => {
    const fresh = createDefaultProfile({
      id: `profile-${Date.now()}`,
      name: input.name.trim() || 'Student',
      yearGroup: input.yearGroup.trim() || 'YEAR 11',
      avatarId: input.avatarId,
      progressByCourse: {},
      activityLog: [],
    });
    setState((prev) => ({
      ...prev,
      activeProfileId: fresh.id,
      profiles: [...prev.profiles, fresh],
    }));
  };

  const importProfile = (rawJson: string): boolean => {
    const imported = parseImportedProfileJson(rawJson);
    if (!imported) return false;
    setState((prev) => ({
      ...prev,
      activeProfileId: imported.id,
      profiles: [...prev.profiles, imported],
    }));
    return true;
  };

  const resetActiveProfile = () => {
    const fresh = createDefaultProfile({ id: profile.id, name: profile.name });
    setState((prev) => ({
      ...prev,
      profiles: prev.profiles.map((p) => (p.id === prev.activeProfileId ? fresh : p)),
    }));
  };

  const streakStats = computeStreakStats(profile.activityLog, profile.streakFreezes);

  return (
    <AppContext.Provider
      value={{
        state,
        profile,
        streakStats,
        updateProfile,
        updatePreferences,
        setAvatar,
        setDailyXpGoal,
        toggleEnrollCourse,
        setSavedCourseForSubject,
        markNoteRead,
        toggleChecklistPoint,
        setAllChecklistPoints,
        recordQuestionAttempt,
        recordFlashcardConfidence,
        recordExamPartScore,
        logSimpleActivity,
        switchProfile,
        createProfile,
        importProfile,
        resetActiveProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
