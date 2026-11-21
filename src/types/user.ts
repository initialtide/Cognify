import { AvatarId } from '../components/artwork/Avatars';

export interface AiMarkingConfig {
  enabled: boolean;
  provider: 'gemini' | 'openai';
  apiKey: string;
  model: string;
}

export interface UserPreferences {
  darkMode: boolean;
  soundEnabled: boolean;
  soundVolume: number;
  aiMarkingEnabled: boolean;
  emailNotifications: boolean;
  analyticsCookies: boolean;
  aiConfig: AiMarkingConfig;
}

export interface QuestionAttempt {
  answered: boolean;
  correct: boolean;
  earnedMarks: number;
  maxMarks: number;
  lastAnsweredAt: string;
}

export interface FlashcardConfidence {
  status: 'confident' | 'still-learning';
  updatedAt: string;
}

export interface CourseProgress {
  readNoteIds: string[];
  checkedPointsBySubtopic: Record<string, string[]>;
  questionAttempts: Record<string, QuestionAttempt>;
  flashcardConfidence: Record<string, FlashcardConfidence>;
  examPartScores: Record<string, { earnedMarks: number; maxMarks: number; answerText: string }>;
}

export interface ActivityEvent {
  id: string;
  timestamp: string;
  dateKey: string;
  type: 'notes' | 'quiz' | 'flashcards' | 'exam' | 'key-terms' | 'past-paper';
  courseId: string;
  courseLabel: string;
  subjectName: string;
  subtopicId?: string;
  title: string;
  xpEarned: number;
  durationSeconds: number;
  questionsAnswered: number;
  scorePercent?: number;
}

export interface UserProfile {
  id: string;
  name: string;
  yearGroup: string;
  avatarId: AvatarId;
  joinedDate: string;
  dailyXpGoal: 100 | 150 | 250 | 500;
  streakFreezes: number;
  enrolledCourseIds: string[];
  savedCourseBySubject: Record<string, string>;
  preferences: UserPreferences;
  progressByCourse: Record<string, CourseProgress>;
  activityLog: ActivityEvent[];
}

export interface AppStoreState {
  version: 1;
  activeProfileId: string;
  profiles: UserProfile[];
}
