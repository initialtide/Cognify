import {
  CheatSheetItem,
  CourseDefinition,
  ExamBoardId,
  ExamQuestionItem,
  FlashcardItem,
  KeyTermEntry,
  NoteLesson,
  PastPaperDoc,
  QualificationId,
  QuizQuestion,
  SubjectIconId,
  TopicDefinition,
} from '../types/curriculum';
import {
  ALEVEL_BIOLOGY_CHEAT_SHEETS,
  ALEVEL_BIOLOGY_EXAM_PRACTICE,
  ALEVEL_BIOLOGY_FLASHCARDS,
  ALEVEL_BIOLOGY_KEY_TERMS,
  ALEVEL_BIOLOGY_NOTES,
  ALEVEL_BIOLOGY_PAST_PAPERS,
  ALEVEL_BIOLOGY_QUIZZES,
  ALEVEL_BIOLOGY_TOPICS,
} from './courses/alevelBiology';
import {
  ALEVEL_CHEMISTRY_CHEAT_SHEETS,
  ALEVEL_CHEMISTRY_EXAM_PRACTICE,
  ALEVEL_CHEMISTRY_FLASHCARDS,
  ALEVEL_CHEMISTRY_KEY_TERMS,
  ALEVEL_CHEMISTRY_NOTES,
  ALEVEL_CHEMISTRY_PAST_PAPERS,
  ALEVEL_CHEMISTRY_QUIZZES,
  ALEVEL_CHEMISTRY_TOPICS,
} from './courses/alevelChemistry';
import {
  ALEVEL_MATHS_CHEAT_SHEETS,
  ALEVEL_MATHS_EXAM_PRACTICE,
  ALEVEL_MATHS_FLASHCARDS,
  ALEVEL_MATHS_KEY_TERMS,
  ALEVEL_MATHS_NOTES,
  ALEVEL_MATHS_PAST_PAPERS,
  ALEVEL_MATHS_QUIZZES,
  ALEVEL_MATHS_TOPICS,
} from './courses/alevelMaths';
import {
  ALEVEL_PHYSICS_CHEAT_SHEETS,
  ALEVEL_PHYSICS_EXAM_PRACTICE,
  ALEVEL_PHYSICS_FLASHCARDS,
  ALEVEL_PHYSICS_KEY_TERMS,
  ALEVEL_PHYSICS_NOTES,
  ALEVEL_PHYSICS_PAST_PAPERS,
  ALEVEL_PHYSICS_QUIZZES,
  ALEVEL_PHYSICS_TOPICS,
} from './courses/alevelPhysics';
import {
  ALEVEL_PSYCHOLOGY_CHEAT_SHEETS,
  ALEVEL_PSYCHOLOGY_EXAM_PRACTICE,
  ALEVEL_PSYCHOLOGY_FLASHCARDS,
  ALEVEL_PSYCHOLOGY_KEY_TERMS,
  ALEVEL_PSYCHOLOGY_NOTES,
  ALEVEL_PSYCHOLOGY_PAST_PAPERS,
  ALEVEL_PSYCHOLOGY_QUIZZES,
  ALEVEL_PSYCHOLOGY_TOPICS,
} from './courses/alevelPsychology';
import {
  BIOLOGY_CHEAT_SHEETS,
  BIOLOGY_EXAM_PRACTICE,
  BIOLOGY_FLASHCARDS,
  BIOLOGY_KEY_TERMS,
  BIOLOGY_NOTES,
  BIOLOGY_PAST_PAPERS,
  BIOLOGY_QUIZZES,
  BIOLOGY_TOPICS,
} from './courses/biologyAqa';
import {
  CHEMISTRY_CHEAT_SHEETS,
  CHEMISTRY_EXAM_PRACTICE,
  CHEMISTRY_FLASHCARDS,
  CHEMISTRY_KEY_TERMS,
  CHEMISTRY_NOTES,
  CHEMISTRY_PAST_PAPERS,
  CHEMISTRY_QUIZZES,
  CHEMISTRY_TOPICS,
} from './courses/chemistryAqa';
import {
  IGCSE_BIOLOGY_CHEAT_SHEETS,
  IGCSE_BIOLOGY_EXAM_PRACTICE,
  IGCSE_BIOLOGY_FLASHCARDS,
  IGCSE_BIOLOGY_KEY_TERMS,
  IGCSE_BIOLOGY_NOTES,
  IGCSE_BIOLOGY_PAST_PAPERS,
  IGCSE_BIOLOGY_QUIZZES,
  IGCSE_BIOLOGY_TOPICS,
} from './courses/igcseBiology';
import {
  IGCSE_BUSINESS_CHEAT_SHEETS,
  IGCSE_BUSINESS_EXAM_PRACTICE,
  IGCSE_BUSINESS_FLASHCARDS,
  IGCSE_BUSINESS_KEY_TERMS,
  IGCSE_BUSINESS_NOTES,
  IGCSE_BUSINESS_PAST_PAPERS,
  IGCSE_BUSINESS_QUIZZES,
  IGCSE_BUSINESS_TOPICS,
} from './courses/igcseBusiness';
import {
  IGCSE_CHEMISTRY_CHEAT_SHEETS,
  IGCSE_CHEMISTRY_EXAM_PRACTICE,
  IGCSE_CHEMISTRY_FLASHCARDS,
  IGCSE_CHEMISTRY_KEY_TERMS,
  IGCSE_CHEMISTRY_NOTES,
  IGCSE_CHEMISTRY_PAST_PAPERS,
  IGCSE_CHEMISTRY_QUIZZES,
  IGCSE_CHEMISTRY_TOPICS,
} from './courses/igcseChemistry';
import {
  IGCSE_MATHS_CHEAT_SHEETS,
  IGCSE_MATHS_EXAM_PRACTICE,
  IGCSE_MATHS_FLASHCARDS,
  IGCSE_MATHS_KEY_TERMS,
  IGCSE_MATHS_NOTES,
  IGCSE_MATHS_PAST_PAPERS,
  IGCSE_MATHS_QUIZZES,
  IGCSE_MATHS_TOPICS,
} from './courses/igcseMaths';
import {
  IGCSE_PHYSICS_CHEAT_SHEETS,
  IGCSE_PHYSICS_EXAM_PRACTICE,
  IGCSE_PHYSICS_FLASHCARDS,
  IGCSE_PHYSICS_KEY_TERMS,
  IGCSE_PHYSICS_NOTES,
  IGCSE_PHYSICS_PAST_PAPERS,
  IGCSE_PHYSICS_QUIZZES,
  IGCSE_PHYSICS_TOPICS,
} from './courses/igcsePhysics';
import {
  MATHS_CHEAT_SHEETS,
  MATHS_EXAM_PRACTICE,
  MATHS_FLASHCARDS,
  MATHS_KEY_TERMS,
  MATHS_NOTES,
  MATHS_PAST_PAPERS,
  MATHS_QUIZZES,
  MATHS_TOPICS,
} from './courses/mathsGcse';
import { getPastPapersOnlyTopics, makePastPaperSet } from './courses/otherCourses';
import {
  PHYSICS_CHEAT_SHEETS,
  PHYSICS_EXAM_PRACTICE,
  PHYSICS_FLASHCARDS,
  PHYSICS_KEY_TERMS,
  PHYSICS_NOTES,
  PHYSICS_PAST_PAPERS,
  PHYSICS_QUIZZES,
  PHYSICS_TOPICS,
} from './courses/physicsAqa';
import {
  COMPUTER_SCIENCE_CHEAT_SHEETS,
  COMPUTER_SCIENCE_EXAM_PRACTICE,
  COMPUTER_SCIENCE_FLASHCARDS,
  COMPUTER_SCIENCE_KEY_TERMS,
  COMPUTER_SCIENCE_NOTES,
  COMPUTER_SCIENCE_PAST_PAPERS,
  COMPUTER_SCIENCE_QUIZZES,
  COMPUTER_SCIENCE_TOPICS,
} from './courses/computerScience';
import {
  ECONOMICS_CHEAT_SHEETS,
  ECONOMICS_EXAM_PRACTICE,
  ECONOMICS_FLASHCARDS,
  ECONOMICS_KEY_TERMS,
  ECONOMICS_NOTES,
  ECONOMICS_PAST_PAPERS,
  ECONOMICS_QUIZZES,
  ECONOMICS_TOPICS,
} from './courses/economics';
import {
  ENGLISH_LANGUAGE_CHEAT_SHEETS,
  ENGLISH_LANGUAGE_EXAM_PRACTICE,
  ENGLISH_LANGUAGE_FLASHCARDS,
  ENGLISH_LANGUAGE_KEY_TERMS,
  ENGLISH_LANGUAGE_NOTES,
  ENGLISH_LANGUAGE_PAST_PAPERS,
  ENGLISH_LANGUAGE_QUIZZES,
  ENGLISH_LANGUAGE_TOPICS,
} from './courses/englishLanguage';
import {
  IGCSE_ENGLISH_LIT_CHEAT_SHEETS,
  IGCSE_ENGLISH_LIT_EXAM_PRACTICE,
  IGCSE_ENGLISH_LIT_FLASHCARDS,
  IGCSE_ENGLISH_LIT_KEY_TERMS,
  IGCSE_ENGLISH_LIT_NOTES,
  IGCSE_ENGLISH_LIT_PAST_PAPERS,
  IGCSE_ENGLISH_LIT_QUIZZES,
  IGCSE_ENGLISH_LIT_TOPICS,
} from './courses/igcseEnglishLit';
import {
  IGCSE_FRENCH_CHEAT_SHEETS,
  IGCSE_FRENCH_EXAM_PRACTICE,
  IGCSE_FRENCH_FLASHCARDS,
  IGCSE_FRENCH_KEY_TERMS,
  IGCSE_FRENCH_NOTES,
  IGCSE_FRENCH_PAST_PAPERS,
  IGCSE_FRENCH_QUIZZES,
  IGCSE_FRENCH_TOPICS,
} from './courses/igcseFrench';
import {
  IGCSE_GEOGRAPHY_CHEAT_SHEETS,
  IGCSE_GEOGRAPHY_EXAM_PRACTICE,
  IGCSE_GEOGRAPHY_FLASHCARDS,
  IGCSE_GEOGRAPHY_KEY_TERMS,
  IGCSE_GEOGRAPHY_NOTES,
  IGCSE_GEOGRAPHY_PAST_PAPERS,
  IGCSE_GEOGRAPHY_QUIZZES,
  IGCSE_GEOGRAPHY_TOPICS,
} from './courses/igcseGeography';
import {
  IGCSE_HISTORY_CHEAT_SHEETS,
  IGCSE_HISTORY_EXAM_PRACTICE,
  IGCSE_HISTORY_FLASHCARDS,
  IGCSE_HISTORY_KEY_TERMS,
  IGCSE_HISTORY_NOTES,
  IGCSE_HISTORY_PAST_PAPERS,
  IGCSE_HISTORY_QUIZZES,
  IGCSE_HISTORY_TOPICS,
} from './courses/igcseHistory';
import {
  IGCSE_SPANISH_CHEAT_SHEETS,
  IGCSE_SPANISH_EXAM_PRACTICE,
  IGCSE_SPANISH_FLASHCARDS,
  IGCSE_SPANISH_KEY_TERMS,
  IGCSE_SPANISH_NOTES,
  IGCSE_SPANISH_PAST_PAPERS,
  IGCSE_SPANISH_QUIZZES,
  IGCSE_SPANISH_TOPICS,
} from './courses/igcseSpanish';
import { ensureCompleteCourseContent } from './contentCompleteness';

export interface QualificationInfo {
  id: QualificationId;
  label: string;
  description: string;
}

export const QUALIFICATIONS: QualificationInfo[] = [
  { id: 'ks3', label: 'KS3', description: 'Years 7–9 foundation sciences & maths' },
  { id: 'gcse', label: 'GCSE', description: 'UK GCSE specifications (AQA, Edexcel, OCR, WJEC)' },
  { id: 'igcse', label: 'IGCSE', description: 'Cambridge CIE & Edexcel International GCSE courses' },
  { id: 'a-level', label: 'A-Level', description: 'Sixth form & International A-Level courses' },
  { id: 'ib', label: 'IB', description: 'International Baccalaureate Diploma SL & HL' },
  { id: 'entrance-exams', label: 'Entrance Exams', description: '11+, 13+ & university admissions prep' },
  { id: 'us-sciences', label: 'US Sciences', description: 'High school Biology, Chemistry & Physics' },
  { id: 'us-ap', label: 'US AP', description: 'College Board AP STEM & Humanities' },
];

export const EXAM_BOARDS: { id: ExamBoardId; label: string }[] = [
  { id: 'aqa', label: 'AQA' },
  { id: 'edexcel', label: 'Edexcel' },
  { id: 'ocr-a', label: 'OCR A' },
  { id: 'ocr-b', label: 'OCR B' },
  { id: 'ccea', label: 'CCEA' },
  { id: 'wjec', label: 'WJEC' },
  { id: 'sqa-n5', label: 'SQA National 5' },
  { id: 'cie', label: 'CIE' },
  { id: 'edexcel-intl', label: 'Edexcel International' },
  { id: 'oxford-aqa', label: 'Oxford AQA' },
];

export interface SubjectCatalogItem {
  slug: string;
  name: string;
  icon: SubjectIconId;
  category: 'science-maths' | 'other';
  pastPapersOnly?: boolean;
  isMaths?: boolean;
}

export const GCSE_SUBJECTS: SubjectCatalogItem[] = [
  { slug: 'biology', name: 'Biology', icon: 'biology', category: 'science-maths' },
  { slug: 'chemistry', name: 'Chemistry', icon: 'chemistry', category: 'science-maths' },
  { slug: 'physics', name: 'Physics', icon: 'physics', category: 'science-maths' },
  { slug: 'combined-science', name: 'Combined Science', icon: 'combined-science', category: 'science-maths' },
  { slug: 'maths', name: 'Maths', icon: 'maths', category: 'science-maths', isMaths: true },
  { slug: 'business', name: 'Business Studies', icon: 'business', category: 'other' },
  { slug: 'computer-science', name: 'Computer Science', icon: 'computer-science', category: 'other', pastPapersOnly: true },
  { slug: 'economics', name: 'Economics', icon: 'economics', category: 'other', pastPapersOnly: true },
  { slug: 'english-language', name: 'English Language', icon: 'english-language', category: 'other', pastPapersOnly: true },
  { slug: 'english-literature', name: 'English Literature', icon: 'english-literature', category: 'other', pastPapersOnly: true },
  { slug: 'french', name: 'French', icon: 'french', category: 'other', pastPapersOnly: true },
  { slug: 'geography', name: 'Geography', icon: 'geography', category: 'other', pastPapersOnly: true },
  { slug: 'german', name: 'German', icon: 'german', category: 'other', pastPapersOnly: true },
  { slug: 'history', name: 'History', icon: 'history', category: 'other', pastPapersOnly: true },
  { slug: 'psychology', name: 'Psychology', icon: 'psychology', category: 'other' },
  { slug: 'religious-studies', name: 'Religious Studies', icon: 'rs', category: 'other', pastPapersOnly: true },
  { slug: 'spanish', name: 'Spanish', icon: 'spanish', category: 'other', pastPapersOnly: true },
];

export const IGCSE_SUBJECTS: SubjectCatalogItem[] = [
  { slug: 'biology', name: 'Biology', icon: 'biology', category: 'science-maths' },
  { slug: 'chemistry', name: 'Chemistry', icon: 'chemistry', category: 'science-maths' },
  { slug: 'physics', name: 'Physics', icon: 'physics', category: 'science-maths' },
  { slug: 'maths', name: 'Maths', icon: 'maths', category: 'science-maths', isMaths: true },
  { slug: 'business', name: 'Business Studies', icon: 'business', category: 'other' },
  { slug: 'computer-science', name: 'Computer Science', icon: 'computer-science', category: 'other' },
  { slug: 'economics', name: 'Economics', icon: 'economics', category: 'other' },
  { slug: 'english-language', name: 'English Language', icon: 'english-language', category: 'other' },
  { slug: 'english-literature', name: 'English Literature', icon: 'english-literature', category: 'other' },
  { slug: 'geography', name: 'Geography', icon: 'geography', category: 'other' },
  { slug: 'history', name: 'History', icon: 'history', category: 'other' },
  { slug: 'french', name: 'French', icon: 'french', category: 'other' },
  { slug: 'spanish', name: 'Spanish', icon: 'spanish', category: 'other' },
];

export const ALEVEL_SUBJECTS: SubjectCatalogItem[] = [
  { slug: 'biology', name: 'Biology', icon: 'biology', category: 'science-maths' },
  { slug: 'chemistry', name: 'Chemistry', icon: 'chemistry', category: 'science-maths' },
  { slug: 'physics', name: 'Physics', icon: 'physics', category: 'science-maths' },
  { slug: 'maths', name: 'Maths', icon: 'maths', category: 'science-maths', isMaths: true },
  { slug: 'psychology', name: 'Psychology', icon: 'psychology', category: 'other' },
];

export function getSubjectsForQualification(qualification: QualificationId): SubjectCatalogItem[] {
  if (qualification === 'igcse') return IGCSE_SUBJECTS;
  if (qualification === 'a-level') return ALEVEL_SUBJECTS;
  return GCSE_SUBJECTS;
}

export function getBoardsForQualification(
  qualification: QualificationId,
  subjectSlug: string
): { id: ExamBoardId; label: string }[] {
  let ids: ExamBoardId[];
  if (qualification === 'igcse') {
    ids = ['cie', 'edexcel-intl', 'oxford-aqa'];
  } else if (qualification === 'a-level') {
    if (subjectSlug === 'psychology') {
      ids = ['cie', 'aqa', 'edexcel'];
    } else if (subjectSlug === 'maths') {
      ids = ['edexcel', 'cie', 'aqa', 'ocr-a'];
    } else {
      ids = ['aqa', 'cie', 'edexcel', 'ocr-a'];
    }
  } else {
    ids = EXAM_BOARDS.map((b) => b.id);
  }
  return ids
    .map((id) => EXAM_BOARDS.find((b) => b.id === id))
    .filter((b): b is { id: ExamBoardId; label: string } => Boolean(b));
}

export function getTiersForQualification(
  qualification: QualificationId,
  subject: SubjectCatalogItem,
  board?: ExamBoardId
): string[] {
  if (qualification === 'a-level') {
    return ['A-Level', 'AS-Level'];
  }
  if (qualification === 'igcse') {
    if (
      subject.slug === 'business' ||
      subject.slug === 'computer-science' ||
      subject.slug === 'economics' ||
      subject.slug === 'english-language' ||
      subject.slug === 'english-literature' ||
      subject.slug === 'geography' ||
      subject.slug === 'history' ||
      subject.slug === 'french' ||
      subject.slug === 'spanish' ||
      subject.pastPapersOnly
    ) {
      return ['Core'];
    }
    return ['Extended', 'Core'];
  }
  if (qualification === 'gcse') {
    if (subject.isMaths) {
      return ['Higher', 'Foundation'];
    }
    if (subject.slug === 'business' || subject.slug === 'psychology' || subject.pastPapersOnly) {
      return ['Core'];
    }
    if (board === 'cie' || board === 'edexcel-intl') {
      return ['Combined · Extended', 'Extended', 'Core'];
    }
    return ['Triple · Higher', 'Triple · Foundation', 'Combined · Higher', 'Combined · Foundation'];
  }
  return subject.isMaths ? ['Higher', 'Foundation'] : ['Core', 'Higher'];
}

const SCIENCE_BOARDS: ExamBoardId[] = [
  'aqa', 'edexcel', 'ocr-a', 'ocr-b', 'ccea', 'wjec', 'sqa-n5', 'cie', 'edexcel-intl', 'oxford-aqa',
];

const IGCSE_BOARDS: ExamBoardId[] = ['cie', 'edexcel-intl', 'oxford-aqa'];
const ALEVEL_SCIENCE_BOARDS: ExamBoardId[] = ['aqa', 'cie', 'edexcel', 'ocr-a'];
const ALEVEL_MATHS_BOARDS: ExamBoardId[] = ['edexcel', 'cie', 'aqa', 'ocr-a'];
const ALEVEL_PSYCH_BOARDS: ExamBoardId[] = ['cie', 'aqa', 'edexcel'];

interface CourseContentBundle {
  topics: TopicDefinition[];
  notes: Record<string, NoteLesson>;
  quizzes: QuizQuestion[];
  flashcards: FlashcardItem[];
  cheatSheets: CheatSheetItem[];
  examPractice: ExamQuestionItem[];
  pastPapers: PastPaperDoc[];
  keyTerms: KeyTermEntry[];
}

const IGCSE_BIO_BUNDLE: CourseContentBundle = {
  topics: IGCSE_BIOLOGY_TOPICS,
  notes: IGCSE_BIOLOGY_NOTES,
  quizzes: IGCSE_BIOLOGY_QUIZZES,
  flashcards: IGCSE_BIOLOGY_FLASHCARDS,
  cheatSheets: IGCSE_BIOLOGY_CHEAT_SHEETS,
  examPractice: IGCSE_BIOLOGY_EXAM_PRACTICE,
  pastPapers: IGCSE_BIOLOGY_PAST_PAPERS,
  keyTerms: IGCSE_BIOLOGY_KEY_TERMS,
};

const IGCSE_CHEM_BUNDLE: CourseContentBundle = {
  topics: IGCSE_CHEMISTRY_TOPICS,
  notes: IGCSE_CHEMISTRY_NOTES,
  quizzes: IGCSE_CHEMISTRY_QUIZZES,
  flashcards: IGCSE_CHEMISTRY_FLASHCARDS,
  cheatSheets: IGCSE_CHEMISTRY_CHEAT_SHEETS,
  examPractice: IGCSE_CHEMISTRY_EXAM_PRACTICE,
  pastPapers: IGCSE_CHEMISTRY_PAST_PAPERS,
  keyTerms: IGCSE_CHEMISTRY_KEY_TERMS,
};

const IGCSE_PHYS_BUNDLE: CourseContentBundle = {
  topics: IGCSE_PHYSICS_TOPICS,
  notes: IGCSE_PHYSICS_NOTES,
  quizzes: IGCSE_PHYSICS_QUIZZES,
  flashcards: IGCSE_PHYSICS_FLASHCARDS,
  cheatSheets: IGCSE_PHYSICS_CHEAT_SHEETS,
  examPractice: IGCSE_PHYSICS_EXAM_PRACTICE,
  pastPapers: IGCSE_PHYSICS_PAST_PAPERS,
  keyTerms: IGCSE_PHYSICS_KEY_TERMS,
};

const IGCSE_MATHS_BUNDLE: CourseContentBundle = {
  topics: IGCSE_MATHS_TOPICS,
  notes: IGCSE_MATHS_NOTES,
  quizzes: IGCSE_MATHS_QUIZZES,
  flashcards: IGCSE_MATHS_FLASHCARDS,
  cheatSheets: IGCSE_MATHS_CHEAT_SHEETS,
  examPractice: IGCSE_MATHS_EXAM_PRACTICE,
  pastPapers: IGCSE_MATHS_PAST_PAPERS,
  keyTerms: IGCSE_MATHS_KEY_TERMS,
};

const IGCSE_BUSINESS_BUNDLE: CourseContentBundle = {
  topics: IGCSE_BUSINESS_TOPICS,
  notes: IGCSE_BUSINESS_NOTES,
  quizzes: IGCSE_BUSINESS_QUIZZES,
  flashcards: IGCSE_BUSINESS_FLASHCARDS,
  cheatSheets: IGCSE_BUSINESS_CHEAT_SHEETS,
  examPractice: IGCSE_BUSINESS_EXAM_PRACTICE,
  pastPapers: IGCSE_BUSINESS_PAST_PAPERS,
  keyTerms: IGCSE_BUSINESS_KEY_TERMS,
};

const IGCSE_CS_BUNDLE: CourseContentBundle = {
  topics: COMPUTER_SCIENCE_TOPICS,
  notes: COMPUTER_SCIENCE_NOTES,
  quizzes: COMPUTER_SCIENCE_QUIZZES,
  flashcards: COMPUTER_SCIENCE_FLASHCARDS,
  cheatSheets: COMPUTER_SCIENCE_CHEAT_SHEETS,
  examPractice: COMPUTER_SCIENCE_EXAM_PRACTICE,
  pastPapers: COMPUTER_SCIENCE_PAST_PAPERS,
  keyTerms: COMPUTER_SCIENCE_KEY_TERMS,
};

const IGCSE_ECON_BUNDLE: CourseContentBundle = {
  topics: ECONOMICS_TOPICS,
  notes: ECONOMICS_NOTES,
  quizzes: ECONOMICS_QUIZZES,
  flashcards: ECONOMICS_FLASHCARDS,
  cheatSheets: ECONOMICS_CHEAT_SHEETS,
  examPractice: ECONOMICS_EXAM_PRACTICE,
  pastPapers: ECONOMICS_PAST_PAPERS,
  keyTerms: ECONOMICS_KEY_TERMS,
};

const IGCSE_ENGLANG_BUNDLE: CourseContentBundle = {
  topics: ENGLISH_LANGUAGE_TOPICS,
  notes: ENGLISH_LANGUAGE_NOTES,
  quizzes: ENGLISH_LANGUAGE_QUIZZES,
  flashcards: ENGLISH_LANGUAGE_FLASHCARDS,
  cheatSheets: ENGLISH_LANGUAGE_CHEAT_SHEETS,
  examPractice: ENGLISH_LANGUAGE_EXAM_PRACTICE,
  pastPapers: ENGLISH_LANGUAGE_PAST_PAPERS,
  keyTerms: ENGLISH_LANGUAGE_KEY_TERMS,
};

const IGCSE_ENGLIT_BUNDLE: CourseContentBundle = {
  topics: IGCSE_ENGLISH_LIT_TOPICS,
  notes: IGCSE_ENGLISH_LIT_NOTES,
  quizzes: IGCSE_ENGLISH_LIT_QUIZZES,
  flashcards: IGCSE_ENGLISH_LIT_FLASHCARDS,
  cheatSheets: IGCSE_ENGLISH_LIT_CHEAT_SHEETS,
  examPractice: IGCSE_ENGLISH_LIT_EXAM_PRACTICE,
  pastPapers: IGCSE_ENGLISH_LIT_PAST_PAPERS,
  keyTerms: IGCSE_ENGLISH_LIT_KEY_TERMS,
};

const IGCSE_GEOG_BUNDLE: CourseContentBundle = {
  topics: IGCSE_GEOGRAPHY_TOPICS,
  notes: IGCSE_GEOGRAPHY_NOTES,
  quizzes: IGCSE_GEOGRAPHY_QUIZZES,
  flashcards: IGCSE_GEOGRAPHY_FLASHCARDS,
  cheatSheets: IGCSE_GEOGRAPHY_CHEAT_SHEETS,
  examPractice: IGCSE_GEOGRAPHY_EXAM_PRACTICE,
  pastPapers: IGCSE_GEOGRAPHY_PAST_PAPERS,
  keyTerms: IGCSE_GEOGRAPHY_KEY_TERMS,
};

const IGCSE_HISTORY_BUNDLE: CourseContentBundle = {
  topics: IGCSE_HISTORY_TOPICS,
  notes: IGCSE_HISTORY_NOTES,
  quizzes: IGCSE_HISTORY_QUIZZES,
  flashcards: IGCSE_HISTORY_FLASHCARDS,
  cheatSheets: IGCSE_HISTORY_CHEAT_SHEETS,
  examPractice: IGCSE_HISTORY_EXAM_PRACTICE,
  pastPapers: IGCSE_HISTORY_PAST_PAPERS,
  keyTerms: IGCSE_HISTORY_KEY_TERMS,
};

const IGCSE_FRENCH_BUNDLE: CourseContentBundle = {
  topics: IGCSE_FRENCH_TOPICS,
  notes: IGCSE_FRENCH_NOTES,
  quizzes: IGCSE_FRENCH_QUIZZES,
  flashcards: IGCSE_FRENCH_FLASHCARDS,
  cheatSheets: IGCSE_FRENCH_CHEAT_SHEETS,
  examPractice: IGCSE_FRENCH_EXAM_PRACTICE,
  pastPapers: IGCSE_FRENCH_PAST_PAPERS,
  keyTerms: IGCSE_FRENCH_KEY_TERMS,
};

const IGCSE_SPANISH_BUNDLE: CourseContentBundle = {
  topics: IGCSE_SPANISH_TOPICS,
  notes: IGCSE_SPANISH_NOTES,
  quizzes: IGCSE_SPANISH_QUIZZES,
  flashcards: IGCSE_SPANISH_FLASHCARDS,
  cheatSheets: IGCSE_SPANISH_CHEAT_SHEETS,
  examPractice: IGCSE_SPANISH_EXAM_PRACTICE,
  pastPapers: IGCSE_SPANISH_PAST_PAPERS,
  keyTerms: IGCSE_SPANISH_KEY_TERMS,
};

const ALEVEL_BIO_BUNDLE: CourseContentBundle = {
  topics: ALEVEL_BIOLOGY_TOPICS,
  notes: ALEVEL_BIOLOGY_NOTES,
  quizzes: ALEVEL_BIOLOGY_QUIZZES,
  flashcards: ALEVEL_BIOLOGY_FLASHCARDS,
  cheatSheets: ALEVEL_BIOLOGY_CHEAT_SHEETS,
  examPractice: ALEVEL_BIOLOGY_EXAM_PRACTICE,
  pastPapers: ALEVEL_BIOLOGY_PAST_PAPERS,
  keyTerms: ALEVEL_BIOLOGY_KEY_TERMS,
};

const ALEVEL_CHEM_BUNDLE: CourseContentBundle = {
  topics: ALEVEL_CHEMISTRY_TOPICS,
  notes: ALEVEL_CHEMISTRY_NOTES,
  quizzes: ALEVEL_CHEMISTRY_QUIZZES,
  flashcards: ALEVEL_CHEMISTRY_FLASHCARDS,
  cheatSheets: ALEVEL_CHEMISTRY_CHEAT_SHEETS,
  examPractice: ALEVEL_CHEMISTRY_EXAM_PRACTICE,
  pastPapers: ALEVEL_CHEMISTRY_PAST_PAPERS,
  keyTerms: ALEVEL_CHEMISTRY_KEY_TERMS,
};

const ALEVEL_PHYS_BUNDLE: CourseContentBundle = {
  topics: ALEVEL_PHYSICS_TOPICS,
  notes: ALEVEL_PHYSICS_NOTES,
  quizzes: ALEVEL_PHYSICS_QUIZZES,
  flashcards: ALEVEL_PHYSICS_FLASHCARDS,
  cheatSheets: ALEVEL_PHYSICS_CHEAT_SHEETS,
  examPractice: ALEVEL_PHYSICS_EXAM_PRACTICE,
  pastPapers: ALEVEL_PHYSICS_PAST_PAPERS,
  keyTerms: ALEVEL_PHYSICS_KEY_TERMS,
};

const ALEVEL_MATHS_BUNDLE: CourseContentBundle = {
  topics: ALEVEL_MATHS_TOPICS,
  notes: ALEVEL_MATHS_NOTES,
  quizzes: ALEVEL_MATHS_QUIZZES,
  flashcards: ALEVEL_MATHS_FLASHCARDS,
  cheatSheets: ALEVEL_MATHS_CHEAT_SHEETS,
  examPractice: ALEVEL_MATHS_EXAM_PRACTICE,
  pastPapers: ALEVEL_MATHS_PAST_PAPERS,
  keyTerms: ALEVEL_MATHS_KEY_TERMS,
};

const ALEVEL_PSYCH_BUNDLE: CourseContentBundle = {
  topics: ALEVEL_PSYCHOLOGY_TOPICS,
  notes: ALEVEL_PSYCHOLOGY_NOTES,
  quizzes: ALEVEL_PSYCHOLOGY_QUIZZES,
  flashcards: ALEVEL_PSYCHOLOGY_FLASHCARDS,
  cheatSheets: ALEVEL_PSYCHOLOGY_CHEAT_SHEETS,
  examPractice: ALEVEL_PSYCHOLOGY_EXAM_PRACTICE,
  pastPapers: ALEVEL_PSYCHOLOGY_PAST_PAPERS,
  keyTerms: ALEVEL_PSYCHOLOGY_KEY_TERMS,
};

function buildCourseFromBundle(config: {
  id: string;
  qualification: QualificationId;
  qualificationLabel: string;
  subjectSlug: string;
  subjectName: string;
  board: ExamBoardId;
  boardLabel: string;
  tier: string;
  specCode: string;
  subtitle?: string;
  icon: SubjectIconId;
  themeClass: string;
  isMaths?: boolean;
  availableTiers: string[];
  availableBoards: ExamBoardId[];
  bundle: CourseContentBundle;
}): CourseDefinition {
  const { bundle } = config;
  return {
    id: config.id,
    qualification: config.qualification,
    qualificationLabel: config.qualificationLabel,
    subjectSlug: config.subjectSlug,
    subjectName: config.subjectName,
    board: config.board,
    boardLabel: config.boardLabel,
    tier: config.tier,
    specCode: config.specCode,
    subtitle:
      config.subtitle ??
      (config.tier && config.tier !== config.qualificationLabel
        ? `${config.qualificationLabel} · ${config.boardLabel}, ${config.tier}`
        : `${config.qualificationLabel} · ${config.boardLabel}`),
    icon: config.icon,
    themeClass: config.themeClass,
    isMaths: config.isMaths,
    totalQuestionsCount: bundle.quizzes.length,
    totalFlashcardsCount: bundle.flashcards.length,
    availableTiers: config.availableTiers,
    availableBoards: config.availableBoards,
    topics: bundle.topics,
    notes: bundle.notes,
    quizzes: bundle.quizzes,
    flashcards: bundle.flashcards,
    cheatSheets: bundle.cheatSheets,
    examPractice: bundle.examPractice,
    pastPapers: bundle.pastPapers,
    keyTerms: bundle.keyTerms,
  };
}

function buildScienceCourse(
  id: string,
  qualification: QualificationId,
  qualLabel: string,
  subjectSlug: 'biology' | 'chemistry' | 'physics',
  board: ExamBoardId,
  boardLabel: string,
  tier: string
): CourseDefinition {
  if (subjectSlug === 'biology') {
    return {
      id,
      qualification,
      qualificationLabel: qualLabel,
      subjectSlug: 'biology',
      subjectName: 'Biology',
      board,
      boardLabel,
      tier,
      specCode: board === 'aqa' ? '8461' : board === 'cie' ? '0653' : 'SPEC',
      subtitle: `${qualLabel} · ${boardLabel}, ${tier}`,
      icon: 'biology',
      themeClass: 'subject-theme--biology',
      totalQuestionsCount: Math.max(26, BIOLOGY_QUIZZES.length),
      totalFlashcardsCount: Math.max(18, BIOLOGY_FLASHCARDS.length),
      availableTiers: ['Triple · Higher', 'Triple · Foundation', 'Combined · Higher', 'Combined · Foundation'],
      availableBoards: SCIENCE_BOARDS,
      topics: BIOLOGY_TOPICS,
      notes: BIOLOGY_NOTES,
      quizzes: BIOLOGY_QUIZZES,
      flashcards: BIOLOGY_FLASHCARDS,
      cheatSheets: BIOLOGY_CHEAT_SHEETS,
      examPractice: BIOLOGY_EXAM_PRACTICE,
      pastPapers: BIOLOGY_PAST_PAPERS,
      keyTerms: BIOLOGY_KEY_TERMS,
    };
  }
  if (subjectSlug === 'chemistry') {
    return {
      id,
      qualification,
      qualificationLabel: qualLabel,
      subjectSlug: 'chemistry',
      subjectName: 'Chemistry',
      board,
      boardLabel,
      tier,
      specCode: board === 'aqa' ? '8462' : 'SPEC',
      subtitle: `${qualLabel} · ${boardLabel}, ${tier}`,
      icon: 'chemistry',
      themeClass: 'subject-theme--chemistry',
      totalQuestionsCount: Math.max(18, CHEMISTRY_QUIZZES.length),
      totalFlashcardsCount: Math.max(14, CHEMISTRY_FLASHCARDS.length),
      availableTiers: ['Triple · Higher', 'Triple · Foundation', 'Combined · Higher', 'Combined · Foundation'],
      availableBoards: SCIENCE_BOARDS,
      topics: CHEMISTRY_TOPICS,
      notes: CHEMISTRY_NOTES,
      quizzes: CHEMISTRY_QUIZZES,
      flashcards: CHEMISTRY_FLASHCARDS,
      cheatSheets: CHEMISTRY_CHEAT_SHEETS,
      examPractice: CHEMISTRY_EXAM_PRACTICE,
      pastPapers: CHEMISTRY_PAST_PAPERS,
      keyTerms: CHEMISTRY_KEY_TERMS,
    };
  }
  return {
    id,
    qualification,
    qualificationLabel: qualLabel,
    subjectSlug: 'physics',
    subjectName: 'Physics',
    board,
    boardLabel,
    tier,
    specCode: board === 'aqa' ? '8463' : 'SPEC',
    subtitle: `${qualLabel} · ${boardLabel}, ${tier}`,
    icon: 'physics',
    themeClass: 'subject-theme--physics',
    totalQuestionsCount: Math.max(15, PHYSICS_QUIZZES.length),
    totalFlashcardsCount: Math.max(12, PHYSICS_FLASHCARDS.length),
    availableTiers: ['Triple · Higher', 'Triple · Foundation', 'Combined · Higher', 'Combined · Foundation'],
    availableBoards: SCIENCE_BOARDS,
    topics: PHYSICS_TOPICS,
    notes: PHYSICS_NOTES,
    quizzes: PHYSICS_QUIZZES,
    flashcards: PHYSICS_FLASHCARDS,
    cheatSheets: PHYSICS_CHEAT_SHEETS,
    examPractice: PHYSICS_EXAM_PRACTICE,
    pastPapers: PHYSICS_PAST_PAPERS,
    keyTerms: PHYSICS_KEY_TERMS,
  };
}

const RAW_COURSES: CourseDefinition[] = [
  // Primary GCSE Science & Maths Courses
  buildScienceCourse('gcse-biology-aqa-higher', 'gcse', 'GCSE', 'biology', 'aqa', 'AQA', 'Triple · Higher'),
  buildScienceCourse('gcse-biology-aqa-foundation', 'gcse', 'GCSE', 'biology', 'aqa', 'AQA', 'Triple · Foundation'),
  buildCourseFromBundle({
    id: 'gcse-biology-cie-extended',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'biology',
    subjectName: 'Biology',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Combined · Extended',
    specCode: '0653',
    subtitle: 'Cambridge IGCSE · CIE, Extended Combined',
    icon: 'biology',
    themeClass: 'subject-theme--biology',
    availableTiers: ['Combined · Extended', 'Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_BIO_BUNDLE,
  }),
  buildScienceCourse('gcse-chemistry-aqa-higher', 'gcse', 'GCSE', 'chemistry', 'aqa', 'AQA', 'Triple · Higher'),
  buildCourseFromBundle({
    id: 'gcse-chemistry-cie-extended',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'chemistry',
    subjectName: 'Chemistry',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Combined · Extended',
    specCode: '0620',
    subtitle: 'Cambridge IGCSE · CIE, Extended Combined',
    icon: 'chemistry',
    themeClass: 'subject-theme--chemistry',
    availableTiers: ['Combined · Extended', 'Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_CHEM_BUNDLE,
  }),
  buildScienceCourse('gcse-physics-aqa-higher', 'gcse', 'GCSE', 'physics', 'aqa', 'AQA', 'Triple · Higher'),
  buildCourseFromBundle({
    id: 'gcse-physics-cie-extended',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'physics',
    subjectName: 'Physics',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Combined · Extended',
    specCode: '0625',
    subtitle: 'Cambridge IGCSE · CIE, Extended Combined',
    icon: 'physics',
    themeClass: 'subject-theme--physics',
    availableTiers: ['Combined · Extended', 'Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_PHYS_BUNDLE,
  }),
  (() => {
    const combinedTopics = [
      ...BIOLOGY_TOPICS.slice(0, 2),
      ...CHEMISTRY_TOPICS.slice(0, 2),
      ...PHYSICS_TOPICS.slice(0, 2),
    ].map((t, idx) => ({ ...t, number: idx + 1 }));
    const combinedSubtopicIds = new Set(
      combinedTopics.flatMap((t) => t.subtopics.map((s) => s.id))
    );
    const combinedQuizzes = [
      ...BIOLOGY_QUIZZES,
      ...CHEMISTRY_QUIZZES,
      ...PHYSICS_QUIZZES,
    ].filter((q) => combinedSubtopicIds.has(q.subtopicId));
    const combinedFlashcards = [
      ...BIOLOGY_FLASHCARDS,
      ...CHEMISTRY_FLASHCARDS,
      ...PHYSICS_FLASHCARDS,
    ].filter((f) => combinedSubtopicIds.has(f.subtopicId));
    const combinedExamPractice = [
      ...BIOLOGY_EXAM_PRACTICE,
      ...CHEMISTRY_EXAM_PRACTICE,
      ...PHYSICS_EXAM_PRACTICE,
    ].filter((e) => combinedSubtopicIds.has(e.subtopicId));
    const combinedCheatSheets = [
      ...BIOLOGY_CHEAT_SHEETS.slice(0, 2).map((cs, i) => ({ ...cs, topicNumber: i + 1 })),
      ...CHEMISTRY_CHEAT_SHEETS.slice(0, 2).map((cs, i) => ({ ...cs, topicNumber: i + 3 })),
      ...PHYSICS_CHEAT_SHEETS.slice(0, 2).map((cs, i) => ({ ...cs, topicNumber: i + 5 })),
    ];
    const combinedKeyTerms = [
      ...BIOLOGY_KEY_TERMS,
      ...CHEMISTRY_KEY_TERMS,
      ...PHYSICS_KEY_TERMS,
    ].filter((kt) => combinedSubtopicIds.has(kt.subtopicId));

    return {
      id: 'gcse-combined-aqa-higher',
      qualification: 'gcse' as const,
      qualificationLabel: 'GCSE',
      subjectSlug: 'combined-science',
      subjectName: 'Combined Science',
      board: 'aqa' as const,
      boardLabel: 'AQA',
      tier: 'Trilogy · Higher',
      specCode: '8464',
      subtitle: 'GCSE · AQA, Trilogy Higher',
      icon: 'combined-science' as const,
      themeClass: 'subject-theme--biology',
      totalQuestionsCount: combinedQuizzes.length,
      totalFlashcardsCount: combinedFlashcards.length,
      availableTiers: ['Trilogy · Higher', 'Trilogy · Foundation'],
      availableBoards: ['aqa' as const, 'edexcel' as const, 'ocr-a' as const, 'ocr-b' as const],
      topics: combinedTopics,
      notes: { ...BIOLOGY_NOTES, ...CHEMISTRY_NOTES, ...PHYSICS_NOTES },
      quizzes: combinedQuizzes,
      flashcards: combinedFlashcards,
      cheatSheets: combinedCheatSheets,
      examPractice: combinedExamPractice,
      pastPapers: [
        ...BIOLOGY_PAST_PAPERS.slice(0, 2),
        ...CHEMISTRY_PAST_PAPERS.slice(0, 2),
        ...PHYSICS_PAST_PAPERS.slice(0, 2),
      ],
      keyTerms: combinedKeyTerms,
    };
  })(),
  {
    id: 'gcse-maths-edexcel-higher',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'maths',
    subjectName: 'Maths',
    board: 'edexcel',
    boardLabel: 'Edexcel',
    tier: 'Higher',
    specCode: '1MA1',
    subtitle: 'GCSE · Edexcel, Higher',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    totalQuestionsCount: MATHS_QUIZZES.length,
    totalFlashcardsCount: MATHS_FLASHCARDS.length,
    availableTiers: ['Higher', 'Foundation'],
    availableBoards: ['edexcel', 'aqa', 'ocr-a', 'wjec', 'cie'],
    topics: MATHS_TOPICS,
    notes: MATHS_NOTES,
    quizzes: MATHS_QUIZZES,
    flashcards: MATHS_FLASHCARDS,
    cheatSheets: MATHS_CHEAT_SHEETS,
    examPractice: MATHS_EXAM_PRACTICE,
    pastPapers: MATHS_PAST_PAPERS,
    keyTerms: MATHS_KEY_TERMS,
  },
  {
    id: 'gcse-maths-aqa-higher',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'maths',
    subjectName: 'Maths',
    board: 'aqa',
    boardLabel: 'AQA',
    tier: 'Higher',
    specCode: '8300',
    subtitle: 'GCSE · AQA, Higher',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    totalQuestionsCount: MATHS_QUIZZES.length,
    totalFlashcardsCount: MATHS_FLASHCARDS.length,
    availableTiers: ['Higher', 'Foundation'],
    availableBoards: ['aqa', 'edexcel', 'ocr-a'],
    topics: MATHS_TOPICS,
    notes: MATHS_NOTES,
    quizzes: MATHS_QUIZZES,
    flashcards: MATHS_FLASHCARDS,
    cheatSheets: MATHS_CHEAT_SHEETS,
    examPractice: MATHS_EXAM_PRACTICE,
    pastPapers: MATHS_PAST_PAPERS,
    keyTerms: MATHS_KEY_TERMS,
  },

  // Dedicated IGCSE Courses (CIE & Edexcel International)
  buildCourseFromBundle({
    id: 'igcse-biology-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'biology',
    subjectName: 'Biology',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Extended',
    specCode: '0610',
    subtitle: 'IGCSE · CIE, Extended',
    icon: 'biology',
    themeClass: 'subject-theme--biology',
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_BIO_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-biology-edexcel-intl',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'biology',
    subjectName: 'Biology',
    board: 'edexcel-intl',
    boardLabel: 'Edexcel International',
    tier: 'Extended',
    specCode: '4BI1',
    subtitle: 'IGCSE · Edexcel International',
    icon: 'biology',
    themeClass: 'subject-theme--biology',
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_BIO_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-chemistry-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'chemistry',
    subjectName: 'Chemistry',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Extended',
    specCode: '0620',
    subtitle: 'IGCSE · CIE, Extended',
    icon: 'chemistry',
    themeClass: 'subject-theme--chemistry',
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_CHEM_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-chemistry-edexcel-intl',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'chemistry',
    subjectName: 'Chemistry',
    board: 'edexcel-intl',
    boardLabel: 'Edexcel International',
    tier: 'Extended',
    specCode: '4CH1',
    subtitle: 'IGCSE · Edexcel International',
    icon: 'chemistry',
    themeClass: 'subject-theme--chemistry',
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_CHEM_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-physics-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'physics',
    subjectName: 'Physics',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Extended',
    specCode: '0625',
    subtitle: 'IGCSE · CIE, Extended',
    icon: 'physics',
    themeClass: 'subject-theme--physics',
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_PHYS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-physics-edexcel-intl',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'physics',
    subjectName: 'Physics',
    board: 'edexcel-intl',
    boardLabel: 'Edexcel International',
    tier: 'Extended',
    specCode: '4PH1',
    subtitle: 'IGCSE · Edexcel International',
    icon: 'physics',
    themeClass: 'subject-theme--physics',
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_PHYS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-maths-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'maths',
    subjectName: 'Maths',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Extended',
    specCode: '0580',
    subtitle: 'IGCSE · CIE, Extended',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_MATHS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-maths-edexcel-intl',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'maths',
    subjectName: 'Maths',
    board: 'edexcel-intl',
    boardLabel: 'Edexcel International',
    tier: 'Extended',
    specCode: '4MA1',
    subtitle: 'IGCSE · Edexcel International',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    availableTiers: ['Extended', 'Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_MATHS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-business-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'business',
    subjectName: 'Business Studies',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0450',
    subtitle: 'IGCSE · CIE',
    icon: 'business',
    themeClass: 'subject-theme--business',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_BUSINESS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-computer-science-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'computer-science',
    subjectName: 'Computer Science',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0478',
    subtitle: 'IGCSE · CIE',
    icon: 'computer-science',
    themeClass: 'subject-theme--computer-science',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_CS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-economics-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'economics',
    subjectName: 'Economics',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0455',
    subtitle: 'IGCSE · CIE',
    icon: 'economics',
    themeClass: 'subject-theme--economics',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_ECON_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-english-language-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'english-language',
    subjectName: 'English Language',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0500',
    subtitle: 'IGCSE · CIE',
    icon: 'english-language',
    themeClass: 'subject-theme--english-language',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_ENGLANG_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-english-literature-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'english-literature',
    subjectName: 'English Literature',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0475',
    subtitle: 'IGCSE · CIE',
    icon: 'english-literature',
    themeClass: 'subject-theme--english-literature',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_ENGLIT_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-geography-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'geography',
    subjectName: 'Geography',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0460',
    subtitle: 'IGCSE · CIE',
    icon: 'geography',
    themeClass: 'subject-theme--geography',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_GEOG_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-history-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'history',
    subjectName: 'History',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0470',
    subtitle: 'IGCSE · CIE',
    icon: 'history',
    themeClass: 'subject-theme--history',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_HISTORY_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-french-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'french',
    subjectName: 'French',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0520',
    subtitle: 'IGCSE · CIE',
    icon: 'french',
    themeClass: 'subject-theme--french',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_FRENCH_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'igcse-spanish-cie',
    qualification: 'igcse',
    qualificationLabel: 'IGCSE',
    subjectSlug: 'spanish',
    subjectName: 'Spanish',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0530',
    subtitle: 'IGCSE · CIE',
    icon: 'spanish',
    themeClass: 'subject-theme--spanish',
    availableTiers: ['Core'],
    availableBoards: IGCSE_BOARDS,
    bundle: IGCSE_SPANISH_BUNDLE,
  }),

  // Dedicated A-Level Courses (AQA, Edexcel, CIE)
  buildCourseFromBundle({
    id: 'a-level-biology-aqa',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'biology',
    subjectName: 'Biology',
    board: 'aqa',
    boardLabel: 'AQA',
    tier: 'A-Level',
    specCode: '7402',
    subtitle: 'A-Level · AQA',
    icon: 'biology',
    themeClass: 'subject-theme--biology',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_SCIENCE_BOARDS,
    bundle: ALEVEL_BIO_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-biology-cie',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'biology',
    subjectName: 'Biology',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'A-Level',
    specCode: '9700',
    subtitle: 'A-Level · CIE',
    icon: 'biology',
    themeClass: 'subject-theme--biology',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_SCIENCE_BOARDS,
    bundle: ALEVEL_BIO_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-chemistry-aqa',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'chemistry',
    subjectName: 'Chemistry',
    board: 'aqa',
    boardLabel: 'AQA',
    tier: 'A-Level',
    specCode: '7405',
    subtitle: 'A-Level · AQA',
    icon: 'chemistry',
    themeClass: 'subject-theme--chemistry',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_SCIENCE_BOARDS,
    bundle: ALEVEL_CHEM_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-chemistry-cie',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'chemistry',
    subjectName: 'Chemistry',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'A-Level',
    specCode: '9701',
    subtitle: 'A-Level · CIE',
    icon: 'chemistry',
    themeClass: 'subject-theme--chemistry',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_SCIENCE_BOARDS,
    bundle: ALEVEL_CHEM_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-physics-aqa',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'physics',
    subjectName: 'Physics',
    board: 'aqa',
    boardLabel: 'AQA',
    tier: 'A-Level',
    specCode: '7408',
    subtitle: 'A-Level · AQA',
    icon: 'physics',
    themeClass: 'subject-theme--physics',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_SCIENCE_BOARDS,
    bundle: ALEVEL_PHYS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-physics-cie',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'physics',
    subjectName: 'Physics',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'A-Level',
    specCode: '9702',
    subtitle: 'A-Level · CIE',
    icon: 'physics',
    themeClass: 'subject-theme--physics',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_SCIENCE_BOARDS,
    bundle: ALEVEL_PHYS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-maths-edexcel',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'maths',
    subjectName: 'Maths',
    board: 'edexcel',
    boardLabel: 'Edexcel',
    tier: 'A-Level',
    specCode: '9MA0',
    subtitle: 'A-Level · Edexcel',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_MATHS_BOARDS,
    bundle: ALEVEL_MATHS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-maths-cie',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'maths',
    subjectName: 'Maths',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'A-Level',
    specCode: '9709',
    subtitle: 'A-Level · CIE',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_MATHS_BOARDS,
    bundle: ALEVEL_MATHS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-psychology-cie-core',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'psychology',
    subjectName: 'Psychology',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'A-Level',
    specCode: '9990',
    subtitle: 'A-Level · CIE',
    icon: 'psychology',
    themeClass: 'subject-theme--psychology',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_PSYCH_BOARDS,
    bundle: ALEVEL_PSYCH_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'a-level-psychology-aqa',
    qualification: 'a-level',
    qualificationLabel: 'A-Level',
    subjectSlug: 'psychology',
    subjectName: 'Psychology',
    board: 'aqa',
    boardLabel: 'AQA',
    tier: 'A-Level',
    specCode: '7182',
    subtitle: 'A-Level · AQA',
    icon: 'psychology',
    themeClass: 'subject-theme--psychology',
    availableTiers: ['A-Level', 'AS-Level'],
    availableBoards: ALEVEL_PSYCH_BOARDS,
    bundle: ALEVEL_PSYCH_BUNDLE,
  }),

  // Dashboard GCSE & CIE Other Courses (preserved IDs for backwards compatibility)
  buildCourseFromBundle({
    id: 'gcse-business-cie-core',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'business',
    subjectName: 'Business Studies',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0450',
    subtitle: 'GCSE · CIE',
    icon: 'business',
    themeClass: 'subject-theme--business',
    availableTiers: ['Core'],
    availableBoards: ['cie', 'aqa', 'edexcel'],
    bundle: IGCSE_BUSINESS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'gcse-computer-science-cie-core',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'computer-science',
    subjectName: 'Computer Science',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0478',
    subtitle: 'GCSE · CIE',
    icon: 'computer-science',
    themeClass: 'subject-theme--computer-science',
    availableTiers: ['Core'],
    availableBoards: ['cie', 'aqa', 'ocr-a'],
    bundle: IGCSE_CS_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'gcse-economics-cie-core',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'economics',
    subjectName: 'Economics',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0455',
    subtitle: 'GCSE · CIE',
    icon: 'economics',
    themeClass: 'subject-theme--economics',
    availableTiers: ['Core'],
    availableBoards: ['cie', 'aqa', 'edexcel'],
    bundle: IGCSE_ECON_BUNDLE,
  }),
  buildCourseFromBundle({
    id: 'gcse-english-language-cie-core',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'english-language',
    subjectName: 'English Language',
    board: 'cie',
    boardLabel: 'CIE',
    tier: 'Core',
    specCode: '0500',
    subtitle: 'GCSE · CIE',
    icon: 'english-language',
    themeClass: 'subject-theme--english-language',
    availableTiers: ['Core'],
    availableBoards: ['cie', 'aqa', 'edexcel'],
    bundle: IGCSE_ENGLANG_BUNDLE,
  }),
  {
    id: 'gcse-psychology-oxford-aqa-core',
    qualification: 'gcse',
    qualificationLabel: 'GCSE',
    subjectSlug: 'psychology',
    subjectName: 'Psychology',
    board: 'oxford-aqa',
    boardLabel: 'Oxford AQA',
    tier: 'Core',
    specCode: '9218',
    subtitle: 'GCSE · Oxford AQA',
    icon: 'psychology',
    themeClass: 'subject-theme--psychology',
    pastPapersOnly: true,
    totalQuestionsCount: 0,
    totalFlashcardsCount: 0,
    availableTiers: ['Core'],
    availableBoards: ['oxford-aqa', 'aqa'],
    topics: getPastPapersOnlyTopics('psychology', 'GCSE Psychology'),
    notes: {},
    quizzes: [],
    flashcards: [],
    cheatSheets: [],
    examPractice: [],
    pastPapers: makePastPaperSet('psy-gcse', 'GCSE Psychology', 'psychology'),
    keyTerms: [],
  },

  // Starter courses across remaining qualifications so every qualification branch resolves cleanly
  buildScienceCourse('ks3-biology-core', 'ks3', 'KS3', 'biology', 'aqa', 'National Curriculum', 'Years 7–9'),
  buildScienceCourse('ib-biology-hl', 'ib', 'IB', 'biology', 'cie', 'IB Diploma', 'Higher Level'),
  {
    id: 'entrance-11plus-maths',
    qualification: 'entrance-exams',
    qualificationLabel: 'Entrance Exams',
    subjectSlug: 'maths',
    subjectName: 'Maths (11+ & 13+)',
    board: 'edexcel',
    boardLabel: 'ISEB / GL',
    tier: 'Common Entrance',
    specCode: '11+',
    subtitle: 'Entrance Exams · Common Entrance',
    icon: 'maths',
    themeClass: 'subject-theme--maths',
    isMaths: true,
    totalQuestionsCount: MATHS_QUIZZES.length,
    totalFlashcardsCount: 0,
    availableTiers: ['Common Entrance'],
    availableBoards: ['edexcel'],
    topics: MATHS_TOPICS,
    notes: MATHS_NOTES,
    quizzes: MATHS_QUIZZES,
    flashcards: [],
    cheatSheets: [],
    examPractice: [],
    pastPapers: MATHS_PAST_PAPERS,
    keyTerms: [],
  },
  buildScienceCourse('us-sciences-biology', 'us-sciences', 'US Sciences', 'biology', 'aqa', 'NGSS', 'High School'),
  buildScienceCourse('us-ap-biology', 'us-ap', 'US AP', 'biology', 'aqa', 'College Board', 'AP Biology'),
];

export const ALL_COURSES: CourseDefinition[] = RAW_COURSES.map(ensureCompleteCourseContent);

const SORTED_QUAL_IDS: QualificationId[] = [...QUALIFICATIONS.map((q) => q.id)].sort(
  (a, b) => b.length - a.length
);

const SORTED_SUBJECT_SLUGS: string[] = Array.from(
  new Set([
    ...GCSE_SUBJECTS.map((s) => s.slug),
    ...IGCSE_SUBJECTS.map((s) => s.slug),
    ...ALEVEL_SUBJECTS.map((s) => s.slug),
  ])
).sort((a, b) => b.length - a.length);

const SORTED_BOARD_IDS: ExamBoardId[] = [...EXAM_BOARDS.map((b) => b.id)].sort(
  (a, b) => b.length - a.length
);

export function resolveCourseVariant(
  qualification: QualificationId,
  subjectSlug: string,
  board: ExamBoardId,
  tier?: string
): CourseDefinition {
  const normalizedTier = tier?.trim().toLowerCase() ?? '';
  const tierMatches = (courseTier: string) => {
    if (!normalizedTier) return true;
    const ct = courseTier.toLowerCase();
    return ct === normalizedTier || ct.includes(normalizedTier) || normalizedTier.includes(ct);
  };

  // 1. Exact qualification + subject + board + tier match
  const exact = ALL_COURSES.find(
    (c) =>
      c.qualification === qualification &&
      c.subjectSlug === subjectSlug &&
      c.board === board &&
      tierMatches(c.tier)
  );
  if (exact) return exact;

  // 2. Same qualification + subject + board (alternate tier) OR same qualification + subject (alternate board)
  //    Guarantees IGCSE always resolves to IGCSE data and A-Level always resolves to A-Level data!
  const sameQualAndSubject =
    ALL_COURSES.find(
      (c) =>
        c.qualification === qualification &&
        c.subjectSlug === subjectSlug &&
        c.board === board
    ) ??
    ALL_COURSES.find(
      (c) => c.qualification === qualification && c.subjectSlug === subjectSlug
    );

  // 3. International GCSE routes accessed via /courses/gcse (CIE / Edexcel International)
  const intlFallback =
    !sameQualAndSubject &&
    qualification === 'gcse' &&
    (board === 'cie' || board === 'edexcel-intl')
      ? ALL_COURSES.find(
          (c) => c.qualification === 'igcse' && c.subjectSlug === subjectSlug
        )
      : undefined;

  const base =
    sameQualAndSubject ??
    intlFallback ??
    ALL_COURSES.find((c) => c.subjectSlug === subjectSlug) ??
    ALL_COURSES[0];

  const qualLabel = QUALIFICATIONS.find((q) => q.id === qualification)?.label ?? base.qualificationLabel;
  const boardLabel = EXAM_BOARDS.find((b) => b.id === board)?.label ?? board.toUpperCase();
  const resolvedTier = tier?.trim() || base.availableTiers[0] || base.tier;
  const tierSlug = resolvedTier.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return ensureCompleteCourseContent({
    ...base,
    id: `${qualification}-${subjectSlug}-${board}${tierSlug ? `-${tierSlug}` : ''}`,
    qualification,
    qualificationLabel: qualLabel,
    board,
    boardLabel,
    tier: resolvedTier,
    subtitle:
      resolvedTier && resolvedTier !== qualLabel
        ? `${qualLabel} · ${boardLabel}, ${resolvedTier}`
        : `${qualLabel} · ${boardLabel}`,
  });
}

export function getCourseById(courseId: string): CourseDefinition | undefined {
  const exact = ALL_COURSES.find((c) => c.id === courseId);
  if (exact) return exact;

  // Dynamically resolve generated variant IDs (e.g. igcse-biology-oxford-aqa-extended or a-level-chemistry-ocr-a-a-level)
  for (const qual of SORTED_QUAL_IDS) {
    if (!courseId.startsWith(`${qual}-`)) continue;
    const afterQual = courseId.slice(qual.length + 1);

    for (const subj of SORTED_SUBJECT_SLUGS) {
      if (!afterQual.startsWith(`${subj}-`)) continue;
      const afterSubj = afterQual.slice(subj.length + 1);

      for (const board of SORTED_BOARD_IDS) {
        if (afterSubj === board || afterSubj.startsWith(`${board}-`)) {
          const tierPart = afterSubj.length > board.length ? afterSubj.slice(board.length + 1) : '';
          const prettyTier = tierPart
            ? tierPart
                .split('-')
                .map((w) => (w === 'as' ? 'AS' : w === 'a' ? 'A' : w.charAt(0).toUpperCase() + w.slice(1)))
                .join(' ')
                .replace(/^A Level$/i, 'A-Level')
                .replace(/^AS Level$/i, 'AS-Level')
            : undefined;
          const resolved = resolveCourseVariant(qual, subj, board, prettyTier);
          return { ...resolved, id: courseId };
        }
      }
    }
  }

  return undefined;
}
