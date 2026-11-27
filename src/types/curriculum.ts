import { AvatarId } from '../components/artwork/Avatars';

export type QualificationId =
  | 'ks3'
  | 'gcse'
  | 'igcse'
  | 'a-level'
  | 'ib'
  | 'entrance-exams'
  | 'us-sciences'
  | 'us-ap';

export type ExamBoardId =
  | 'aqa'
  | 'edexcel'
  | 'ocr-a'
  | 'ocr-b'
  | 'ccea'
  | 'wjec'
  | 'sqa-n5'
  | 'cie'
  | 'edexcel-intl'
  | 'oxford-aqa';

export type SubjectIconId =
  | 'biology'
  | 'chemistry'
  | 'physics'
  | 'maths'
  | 'combined-science'
  | 'business'
  | 'computer-science'
  | 'economics'
  | 'english-language'
  | 'english-literature'
  | 'psychology'
  | 'geography'
  | 'history'
  | 'french'
  | 'german'
  | 'spanish'
  | 'rs'
  | 'languages'
  | 'sociology'
  | 'further-maths'
  | 'pe'
  | 'design-technology'
  | 'food-nutrition';

export type DiagramKind =
  | 'eukaryotic-vs-prokaryotic'
  | 'root-hair-vs-palisade'
  | 'microscope'
  | 'atomic-structure'
  | 'circuit-series-parallel'
  | 'transverse-wave'
  | 'bacterial-cell'
  | 'virus-particle'
  | 'enzyme-lock-key'
  | 'osmosis-membrane'
  | 'mitosis-cycle'
  | 'ionic-covalent-bonding'
  | 'exothermic-endothermic'
  | 'reflex-arc'
  | 'forces-free-body'
  | 'multi-store-memory'
  | 'synaptic-transmission'
  | 'photosynthesis-chloroplast'
  | 'quadratic-graph'
  | 'right-triangle-trig'
  | 'supply-demand-equilibrium'
  | 'production-possibility-curve'
  | 'cpu-fde-architecture'
  | 'logic-gates-truth'
  | 'tectonic-plate-margins'
  | 'break-even-chart';

export interface GlossaryPill {
  term: string;
  definition: string;
}

export interface VideoTimestamp {
  time: string;
  seconds: number;
  label: string;
  cardId?: string;
  outsideCourse?: boolean;
}

export interface NoteSubsection {
  heading?: string;
  bullets: string[];
  exampleHeading?: string;
  examples?: string[];
  diagram?: DiagramKind;
}

export interface NoteCardContent {
  id: string;
  title: string;
  summary?: string;
  bullets: string[];
  subsections?: NoteSubsection[];
  glossaryPills?: GlossaryPill[];
  memoryAid?: string;
  commonMistake?: string;
  diagram?: DiagramKind;
}

export interface NoteLesson {
  subtopicId: string;
  subtopicCode: string;
  subtopicTitle: string;
  readingMinutes: number;
  videoTitle: string;
  youtubeId: string;
  /** Optional direct ad-free MP4/WebM video URL for instant native HTML5 playback */
  videoUrl?: string;
  videoChannel?: string;
  videoDuration?: string;
  courseMatchSummary?: string;
  timestamps: VideoTimestamp[];
  cards: NoteCardContent[];
  keyTerms: { term: string; definition: string }[];
  checklistPoints: string[];
}

export interface MarkPoint {
  id: string;
  markDescription: string;
  requiredKeywordGroups?: string[][];
  numericMatch?: {
    value: number;
    tolerance: number;
    unit?: string;
  };
}

export interface MarkSchemeRubric {
  maxMarks: number;
  modelAnswer: string;
  markPoints: MarkPoint[];
}

export type QuizQuestion =
  | {
      id: string;
      subtopicId: string;
      type: 'mcq';
      marks: number;
      prompt: string;
      diagram?: DiagramKind;
      options: string[];
      correctIndex: number;
      explanation: string;
    }
  | {
      id: string;
      subtopicId: string;
      type: 'multi-select';
      marks: number;
      selectCount: number;
      prompt: string;
      options: string[];
      correctIndices: number[];
      explanation: string;
    }
  | {
      id: string;
      subtopicId: string;
      type: 'fill-blank';
      marks: number;
      prompt: string;
      segments: string[];
      wordBank: string[];
      answers: string[];
      explanation: string;
    }
  | {
      id: string;
      subtopicId: string;
      type: 'diagram-label';
      marks: number;
      prompt: string;
      diagram: DiagramKind;
      labels: { marker: string; options: string[]; answer: string }[];
      explanation: string;
    }
  | {
      id: string;
      subtopicId: string;
      type: 'short-answer';
      marks: number;
      prompt: string;
      rubric: MarkSchemeRubric;
      explanation: string;
    }
  | {
      id: string;
      subtopicId: string;
      type: 'matching';
      marks: number;
      prompt: string;
      pairs: { left: string; right: string }[];
      explanation: string;
    };

export interface FlashcardItem {
  id: string;
  subtopicId: string;
  front: string;
  backBullets: string[];
  hint?: string;
  diagram?: DiagramKind;
}

export interface CheatSheetSection {
  heading: string;
  points: string[];
  formula?: string;
}

export interface CheatSheetItem {
  id: string;
  slug: string;
  title: string;
  topicNumber: number;
  topicName: string;
  summary: string;
  accentColor: string;
  sections: CheatSheetSection[];
}

export interface ExamSubPart {
  id: string;
  label: string;
  prompt: string;
  kind: 'mcq' | 'short-answer';
  marks: number;
  options?: string[];
  correctIndex?: number;
  rubric?: MarkSchemeRubric;
}

export interface ExamQuestionItem {
  id: string;
  subtopicId: string;
  number: number;
  stimulus: string;
  diagram?: DiagramKind;
  parts: ExamSubPart[];
}

export interface PastPaperDoc {
  id: string;
  specEra: 'new-9-1' | 'old';
  year: string;
  title: string;
  tier: string;
  series: string;
  paperCode: string;
  durationMinutes: number;
  totalMarks: number;
  sampleQuestions: {
    number: string;
    question: string;
    marks: number;
    markScheme: string[];
  }[];
  insertNote?: string;
  questionPaperUrl?: string;
  markSchemeUrl?: string;
  insertUrl?: string;
  insertLabel?: string;
  examinerReportUrl?: string;
  sourceName?: string;
  officialPortalUrl?: string;
}

export interface KeyTermEntry {
  id: string;
  term: string;
  definition: string;
  topicNumber: number;
  subtopicId: string;
  subtopicCode: string;
}

export interface SubtopicDefinition {
  id: string;
  code: string;
  slug: string;
  title: string;
  readingMinutes: number;
  hasDeepContent: boolean;
}

export interface TopicDefinition {
  number: number;
  title: string;
  subtopics: SubtopicDefinition[];
}

export type CourseTabId =
  | 'notes'
  | 'lessons'
  | 'quiz'
  | 'flashcards'
  | 'cheat-sheets'
  | 'exam-practice'
  | 'past-papers';

export interface CourseDefinition {
  id: string;
  qualification: QualificationId;
  qualificationLabel: string;
  subjectSlug: string;
  subjectName: string;
  board: ExamBoardId;
  boardLabel: string;
  tier: string;
  specCode: string;
  subtitle: string;
  icon: SubjectIconId;
  themeClass: string;
  pastPapersOnly?: boolean;
  isMaths?: boolean;
  totalQuestionsCount: number;
  totalFlashcardsCount: number;
  availableTiers: string[];
  availableBoards: ExamBoardId[];
  topics: TopicDefinition[];
  notes: Record<string, NoteLesson>;
  quizzes: QuizQuestion[];
  flashcards: FlashcardItem[];
  cheatSheets: CheatSheetItem[];
  examPractice: ExamQuestionItem[];
  pastPapers: PastPaperDoc[];
  keyTerms: KeyTermEntry[];
}

export interface ProfileCreationInput {
  name: string;
  yearGroup: string;
  avatarId: AvatarId;
}
