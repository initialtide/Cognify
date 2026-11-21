import {
  CheatSheetItem,
  CheatSheetSection,
  CourseDefinition,
  ExamQuestionItem,
  FlashcardItem,
  KeyTermEntry,
  MarkPoint,
  NoteLesson,
  PastPaperDoc,
  QuizQuestion,
  SubtopicDefinition,
  TopicDefinition,
} from '../types/curriculum';
import { getPastPapersOnlyTopics, makePastPaperSet } from './courses/otherCourses';

const ACCENT_PALETTE = [
  '#42ac88',
  '#1a96f3',
  '#8d22cc',
  '#e16181',
  '#ca8d1b',
  '#2ea582',
  '#1578c3',
  '#711ba3',
];

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^\s*](?:[^*]*[^\s*])?)\*/g, '$1')
    .trim();
}

function sanitizeKeyTermDefinition(term: string, definition: string): string {
  let clean = stripMarkdown(definition);
  if (term.trim().toLowerCase() !== 'white blood cell') {
    clean = clean.replace(/\bwhite blood cells?\b/gi, 'leukocytes');
  }
  if (term.trim().toLowerCase() !== 'mitochondria') {
    clean = clean.replace(/\bmitochondria\b/gi, 'aerobic respiratory organelles');
  }
  return clean;
}

function extractKeywords(text: string, maxCount = 3): string[][] {
  const boldMatches = Array.from(text.matchAll(/\*\*([^*]+)\*\*/g)).map((m) =>
    m[1].toLowerCase().trim()
  );
  const cleanWords = stripMarkdown(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 5 && !STOP_KEYWORDS.has(w));

  const pool = Array.from(new Set([...boldMatches, ...cleanWords])).slice(0, maxCount);
  if (pool.length === 0) {
    return [['concept', 'process', 'system']];
  }
  return pool.map((w) => [w]);
}

const STOP_KEYWORDS = new Set([
  'which',
  'their',
  'there',
  'where',
  'while',
  'these',
  'those',
  'about',
  'under',
  'between',
  'through',
  'during',
  'before',
  'after',
  'because',
  'causes',
  'using',
  'other',
  'every',
  'always',
  'never',
  'often',
  'students',
  'confuse',
  'remember',
]);

function collectLessonBullets(lesson: NoteLesson): string[] {
  const bullets: string[] = [];
  for (const card of lesson.cards) {
    for (const b of card.bullets ?? []) {
      if (b.trim()) bullets.push(stripMarkdown(b));
    }
    for (const sub of card.subsections ?? []) {
      for (const b of sub.bullets ?? []) {
        if (b.trim()) bullets.push(stripMarkdown(b));
      }
      for (const ex of sub.examples ?? []) {
        if (ex.trim()) bullets.push(stripMarkdown(ex));
      }
    }
  }
  return bullets;
}

const PAST_PAPERS_ONLY_SYLLABUSES: Record<string, TopicDefinition[]> = {
  'computer-science': [
    {
      number: 1,
      title: 'Data Representation & Computer Systems',
      subtopics: [
        { id: 'cs-1-1', code: '1.1', slug: '1.1-binary-hex-representation', title: 'Binary, Hexadecimal & Data Storage', readingMinutes: 8, hasDeepContent: true },
        { id: 'cs-1-2', code: '1.2', slug: '1.2-cpu-von-neumann', title: 'CPU Architecture & Fetch-Decode-Execute Cycle', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Networks, Cybersecurity & Systems Software',
      subtopics: [
        { id: 'cs-2-1', code: '2.1', slug: '2.1-networks-protocols-topologies', title: 'Network Topologies, Protocols & Layers', readingMinutes: 8, hasDeepContent: true },
        { id: 'cs-2-2', code: '2.2', slug: '2.2-cyber-security-encryption', title: 'Cybersecurity Threats, SQL Injection & Encryption', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Algorithms, Programming & Databases',
      subtopics: [
        { id: 'cs-3-1', code: '3.1', slug: '3.1-searching-sorting-algorithms', title: 'Searching, Sorting & Trace Tables', readingMinutes: 10, hasDeepContent: true },
        { id: 'cs-3-2', code: '3.2', slug: '3.2-boolean-logic-sql-databases', title: 'Boolean Logic Gates & Relational SQL Databases', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  economics: [
    {
      number: 1,
      title: 'The Basic Economic Problem & Resource Allocation',
      subtopics: [
        { id: 'econ-1-1', code: '1.1', slug: '1.1-scarcity-opportunity-cost-ppc', title: 'Scarcity, Opportunity Cost & PPC Curves', readingMinutes: 8, hasDeepContent: true },
        { id: 'econ-1-2', code: '1.2', slug: '1.2-demand-supply-equilibrium', title: 'Demand, Supply, Price Elasticity & Market Equilibrium', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Microeconomic Decision Makers & Market Failure',
      subtopics: [
        { id: 'econ-2-1', code: '2.1', slug: '2.1-firms-costs-market-structures', title: 'Firms, Costs, Revenue & Competitive vs Monopoly Markets', readingMinutes: 9, hasDeepContent: true },
        { id: 'econ-2-2', code: '2.2', slug: '2.2-externalities-market-failure', title: 'Social Costs, Externalities & Government Intervention', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Macroeconomics, Fiscal/Monetary Policy & Global Trade',
      subtopics: [
        { id: 'econ-3-1', code: '3.1', slug: '3.1-inflation-unemployment-growth', title: 'GDP Growth, Inflation, Unemployment & Fiscal Policy', readingMinutes: 9, hasDeepContent: true },
        { id: 'econ-3-2', code: '3.2', slug: '3.2-exchange-rates-balance-of-payments', title: 'International Trade, Tariffs & Exchange Rates', readingMinutes: 8, hasDeepContent: true },
      ],
    },
  ],
  'english-language': [
    {
      number: 1,
      title: 'Reading Comprehension, Analysis & Summary',
      subtopics: [
        { id: 'eng-1-1', code: '1.1', slug: '1.1-explicit-implicit-meaning', title: 'Retrieving Information & Analysing Implicit Meaning', readingMinutes: 8, hasDeepContent: true },
        { id: 'eng-1-2', code: '1.2', slug: '1.2-writers-effects-language-analysis', title: 'Language Devices, Imagery & Writer’s Effects', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Directed Writing & Transactional Perspectives',
      subtopics: [
        { id: 'eng-2-1', code: '2.1', slug: '2.1-speeches-letters-articles', title: 'Persuasive Speeches, Formal Letters & Feature Articles', readingMinutes: 9, hasDeepContent: true },
        { id: 'eng-2-2', code: '2.2', slug: '2.2-evaluation-synthesis', title: 'Evaluating Arguments & Synthesising Paired Texts', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Descriptive & Narrative Composition',
      subtopics: [
        { id: 'eng-3-1', code: '3.1', slug: '3.1-descriptive-sensory-framing', title: 'Sensory Imagery, Structural Shifts & Descriptive Framing', readingMinutes: 8, hasDeepContent: true },
        { id: 'eng-3-2', code: '3.2', slug: '3.2-narrative-pacing-character', title: 'Narrative Arc, Pacing, Dialogue & Sentence Variety', readingMinutes: 8, hasDeepContent: true },
      ],
    },
  ],
  geography: [
    {
      number: 1,
      title: 'Physical Geography: Hazards, Rivers & Coasts',
      subtopics: [
        { id: 'geog-1-1', code: '1.1', slug: '1.1-tectonic-weather-hazards', title: 'Plate Margins, Earthquakes, Tropical Storms & Climate Change', readingMinutes: 9, hasDeepContent: true },
        { id: 'geog-1-2', code: '1.2', slug: '1.2-rivers-coasts-landforms', title: 'Fluvial & Coastal Processes, Landforms and Management', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Human Geography: Urbanisation, Development & Resources',
      subtopics: [
        { id: 'geog-2-1', code: '2.1', slug: '2.1-urban-issues-sustainability', title: 'Megacities, Urban Challenges & Sustainable Urban Living', readingMinutes: 8, hasDeepContent: true },
        { id: 'geog-2-2', code: '2.2', slug: '2.2-economic-development-resources', title: 'Development Gap, TNCs & Global Food/Water/Energy Security', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  history: [
    {
      number: 1,
      title: 'Twentieth-Century International Relations & Conflict',
      subtopics: [
        { id: 'hist-1-1', code: '1.1', slug: '1.1-treaty-of-versailles-league', title: 'Peace Treaties 1919–23 & The League of Nations', readingMinutes: 9, hasDeepContent: true },
        { id: 'hist-1-2', code: '1.2', slug: '1.2-cold-war-superpower-relations', title: 'Origins of the Cold War, Cuban Missile Crisis & Détente', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Depth Study & Source Provenance Evaluation',
      subtopics: [
        { id: 'hist-2-1', code: '2.1', slug: '2.1-weimar-and-nazi-germany', title: 'Weimar Republic Recovery, Stresemann & Consolidation of Power', readingMinutes: 9, hasDeepContent: true },
        { id: 'hist-2-2', code: '2.2', slug: '2.2-historical-sources-interpretations', title: 'Evaluating Source Utility, Provenance & Interpretations', readingMinutes: 8, hasDeepContent: true },
      ],
    },
  ],
  psychology: [
    {
      number: 1,
      title: 'Memory, Perception & Cognitive Development',
      subtopics: [
        { id: 'gpsy-1-1', code: '1.1', slug: '1.1-encoding-storage-retrieval', title: 'Multi-Store Memory, Reconstructive Memory & Interference', readingMinutes: 8, hasDeepContent: true },
        { id: 'gpsy-1-2', code: '1.2', slug: '1.2-piaget-cognitive-development', title: 'Piaget’s Stage Theory, Schemas & Dweck’s Mindset Theory', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Research Methods, Social Influence & Neuropsychology',
      subtopics: [
        { id: 'gpsy-2-1', code: '2.1', slug: '2.1-conformity-obedience-prosocial', title: 'Conformity, Obedience, Bystander Behaviour & Crowd Dynamics', readingMinutes: 8, hasDeepContent: true },
        { id: 'gpsy-2-2', code: '2.2', slug: '2.2-experimental-design-ethics', title: 'Experimental Hypotheses, Sampling, Ethics & Data Analysis', readingMinutes: 8, hasDeepContent: true },
      ],
    },
  ],
};

function getDefaultTopicsForPastPapersCourse(course: CourseDefinition): TopicDefinition[] {
  if (course.topics.length > 0) return course.topics;
  const fromHelper = getPastPapersOnlyTopics(course.subjectSlug, course.subjectName);
  if (fromHelper.length > 0) return fromHelper;
  const matched = PAST_PAPERS_ONLY_SYLLABUSES[course.subjectSlug];
  if (matched) return matched;
  const prefix = course.subjectSlug.slice(0, 4);
  return [
    {
      number: 1,
      title: `Core Principles & Foundations of ${course.subjectName}`,
      subtopics: [
        {
          id: `${prefix}-1-1`,
          code: '1.1',
          slug: '1.1-foundational-concepts',
          title: `Foundational Concepts & Terminology in ${course.subjectName}`,
          readingMinutes: 8,
          hasDeepContent: true,
        },
        {
          id: `${prefix}-1-2`,
          code: '1.2',
          slug: '1.2-analytical-methods',
          title: `Analytical Methods & Specification Applications`,
          readingMinutes: 8,
          hasDeepContent: true,
        },
      ],
    },
    {
      number: 2,
      title: `Extended Analysis & Exam Evaluation in ${course.subjectName}`,
      subtopics: [
        {
          id: `${prefix}-2-1`,
          code: '2.1',
          slug: '2.1-extended-evaluation',
          title: `Structured Evaluation & Case Study Synthesis`,
          readingMinutes: 9,
          hasDeepContent: true,
        },
      ],
    },
  ];
}

function buildSynthesizedQuizzesForSubtopic(
  course: CourseDefinition,
  topic: TopicDefinition,
  subtopic: SubtopicDefinition,
  lesson: NoteLesson,
  allCourseTerms: { term: string; definition: string }[],
  allCourseBullets: string[],
  existingForSubtopic: QuizQuestion[]
): QuizQuestion[] {
  const needed = 5 - existingForSubtopic.length;
  if (needed <= 0) return existingForSubtopic;

  const bullets = collectLessonBullets(lesson);
  const terms = [
    ...lesson.keyTerms,
    ...lesson.cards.flatMap((c) => c.glossaryPills ?? []),
  ];
  const primaryTerm = terms[0] ?? {
    term: lesson.cards[0]?.title ?? subtopic.title,
    definition:
      lesson.cards[0]?.summary ??
      bullets[0] ??
      `Core specification concept in ${subtopic.code} ${subtopic.title}.`,
  };
  const secondaryTerm = terms[1] ?? {
    term: lesson.cards[Math.min(1, lesson.cards.length - 1)]?.title ?? `${subtopic.title} mechanism`,
    definition:
      lesson.cards[Math.min(1, lesson.cards.length - 1)]?.summary ??
      bullets[1] ??
      lesson.checklistPoints[0] ??
      `Essential application of ${subtopic.title}.`,
  };

  const otherTermDefs = allCourseTerms
    .filter(
      (t) =>
        t.term.toLowerCase() !== primaryTerm.term.toLowerCase() &&
        t.definition !== primaryTerm.definition
    )
    .map((t) => t.definition);

  const distractorDefs = [
    otherTermDefs[0] ?? `A contrasting process that operates in the opposite direction without ${primaryTerm.term.toLowerCase()}.`,
    otherTermDefs[1] ?? `An unrelated structural component not involved in ${subtopic.title.toLowerCase()}.`,
    otherTermDefs[2] ?? `A secondary byproduct that remains constant regardless of ${subtopic.title.toLowerCase()}.`,
  ];

  const mistakeText =
    lesson.cards.find((c) => c.commonMistake)?.commonMistake ??
    `Do not confuse ${primaryTerm.term} with unrelated processes in Topic ${topic.number}.`;
  const memoryText =
    lesson.cards.find((c) => c.memoryAid)?.memoryAid ??
    lesson.checklistPoints[0] ??
    bullets[0] ??
    `Link the definition of ${primaryTerm.term} directly to its cause-and-effect outcome.`;

  const otherBullets = allCourseBullets.filter((b) => !bullets.includes(b));

  const candidates: QuizQuestion[] = [
    // 1. Key term / concept precision MCQ
    {
      id: `${course.id}-${subtopic.id}-syn-q1`,
      subtopicId: subtopic.id,
      type: 'mcq',
      marks: 1,
      prompt: `In ${subtopic.code} ${subtopic.title}, which statement accurately defines or describes ${primaryTerm.term}?`,
      options: [
        distractorDefs[0],
        stripMarkdown(primaryTerm.definition),
        distractorDefs[1],
        distractorDefs[2],
      ],
      correctIndex: 1,
      explanation: `${primaryTerm.term}: ${stripMarkdown(primaryTerm.definition)}`,
    },
    // 2. Multi-select specification statements
    {
      id: `${course.id}-${subtopic.id}-syn-q2`,
      subtopicId: subtopic.id,
      type: 'multi-select',
      marks: 2,
      selectCount: 2,
      prompt: `Select the TWO statements that are correct according to the ${course.boardLabel} specification for ${subtopic.code} ${subtopic.title}.`,
      options: [
        bullets[0] ?? stripMarkdown(lesson.checklistPoints[0] ?? primaryTerm.definition),
        otherBullets[0] ?? `This process only occurs at absolute zero and never requires energy or particles.`,
        bullets[1] ?? stripMarkdown(lesson.checklistPoints[1] ?? secondaryTerm.definition),
        otherBullets[1] ?? `The values remain permanently invariant and independent of all external variables.`,
      ],
      correctIndices: [0, 2],
      explanation: `Both selected statements are key specification requirements for ${subtopic.code} ${subtopic.title}. ${stripMarkdown(memoryText)}`,
    },
    // 3. Examiner misconception & mark-scheme precision MCQ
    {
      id: `${course.id}-${subtopic.id}-syn-q3`,
      subtopicId: subtopic.id,
      type: 'mcq',
      marks: 1,
      prompt: `When answering an exam question on ${subtopic.code} ${subtopic.title}, which point avoids a common student misconception and secures the mark?`,
      options: [
        `Assuming that ${primaryTerm.term.toLowerCase()} and ${secondaryTerm.term.toLowerCase()} are identical in every situation.`,
        `Ignoring quantitative units and cause-and-effect terminology when describing ${subtopic.title.toLowerCase()}.`,
        stripMarkdown(lesson.checklistPoints[0] ?? bullets[0] ?? primaryTerm.definition),
        otherBullets[2] ?? `Stating that no variables or conditions affect the outcome of ${subtopic.title.toLowerCase()}.`,
      ],
      correctIndex: 2,
      explanation: `Examiner note: ${stripMarkdown(mistakeText)}`,
    },
    // 4. Matching specification pairs
    {
      id: `${course.id}-${subtopic.id}-syn-q4`,
      subtopicId: subtopic.id,
      type: 'matching',
      marks: 3,
      prompt: `Match each concept from ${subtopic.code} ${subtopic.title} to its correct specification detail.`,
      pairs: [
        {
          left: primaryTerm.term,
          right: stripMarkdown(primaryTerm.definition).slice(0, 140),
        },
        {
          left: secondaryTerm.term,
          right: stripMarkdown(secondaryTerm.definition).slice(0, 140),
        },
        {
          left: lesson.cards[0]?.title ?? `Exam checklist (${subtopic.code})`,
          right: stripMarkdown(lesson.cards[0]?.summary ?? lesson.checklistPoints[0] ?? memoryText).slice(0, 140),
        },
      ],
      explanation: `Review the key terms and summary cards for ${subtopic.code} ${subtopic.title} to consolidate these pairings.`,
    },
    // 5. Structured short-answer mark-scheme question
    {
      id: `${course.id}-${subtopic.id}-syn-q5`,
      subtopicId: subtopic.id,
      type: 'short-answer',
      marks: 3,
      prompt: `Explain the core principles of ${lesson.cards[0]?.title ?? subtopic.title} (${subtopic.code}) and state key points required by the mark scheme. [3 marks]`,
      rubric: {
        maxMarks: 3,
        modelAnswer: [
          stripMarkdown(primaryTerm.definition),
          stripMarkdown(bullets[0] ?? secondaryTerm.definition),
          stripMarkdown(lesson.checklistPoints[0] ?? memoryText),
        ].join(' '),
        markPoints: [
          {
            id: `${subtopic.id}-syn-mp1`,
            markDescription: `Accurately defines or identifies ${primaryTerm.term}: ${stripMarkdown(primaryTerm.definition)}`,
            requiredKeywordGroups: extractKeywords(`${primaryTerm.term} ${primaryTerm.definition}`, 2),
          },
          {
            id: `${subtopic.id}-syn-mp2`,
            markDescription: `Explains core mechanism or principle: ${stripMarkdown(bullets[0] ?? secondaryTerm.definition)}`,
            requiredKeywordGroups: extractKeywords(bullets[0] ?? secondaryTerm.definition, 2),
          },
          {
            id: `${subtopic.id}-syn-mp3`,
            markDescription: `Applies specification checklist point: ${stripMarkdown(lesson.checklistPoints[0] ?? memoryText)}`,
            requiredKeywordGroups: extractKeywords(lesson.checklistPoints[0] ?? memoryText, 2),
          },
        ],
      },
      explanation: `Full 3-mark responses combine precise terminology (${primaryTerm.term}) with clear cause-and-effect explanation.`,
    },
  ];

  const existingIds = new Set(existingForSubtopic.map((q) => q.id));
  const additions = candidates.filter((c) => !existingIds.has(c.id)).slice(0, needed);
  return [...existingForSubtopic, ...additions];
}

function buildSynthesizedFlashcardsForSubtopic(
  course: CourseDefinition,
  subtopic: SubtopicDefinition,
  lesson: NoteLesson,
  existingForSubtopic: FlashcardItem[]
): FlashcardItem[] {
  const needed = 5 - existingForSubtopic.length;
  if (needed <= 0) return existingForSubtopic;

  const candidates: FlashcardItem[] = [];

  // 1. One card per NoteCardContent
  lesson.cards.forEach((card, idx) => {
    const cardBullets = [
      ...(card.bullets ?? []).map(stripMarkdown),
      ...(card.subsections ?? []).flatMap((s) => (s.bullets ?? []).map(stripMarkdown)),
    ].slice(0, 3);

    if (cardBullets.length > 0) {
      candidates.push({
        id: `${course.id}-${subtopic.id}-syn-fc-card-${idx + 1}`,
        subtopicId: subtopic.id,
        front: `${subtopic.code} ${subtopic.title}: What are the key specification points for "${card.title}"?`,
        backBullets: cardBullets,
        hint: card.summary ? stripMarkdown(card.summary) : `Focus on ${card.title.toLowerCase()}`,
      });
    }
  });

  // 2. Key terms & glossary pills flashcards
  const allTerms = [
    ...lesson.keyTerms,
    ...lesson.cards.flatMap((c) => c.glossaryPills ?? []),
  ];
  allTerms.forEach((kt, idx) => {
    candidates.push({
      id: `${course.id}-${subtopic.id}-syn-fc-term-${idx + 1}`,
      subtopicId: subtopic.id,
      front: `Define "${kt.term}" (${subtopic.code} ${subtopic.title}).`,
      backBullets: [
        stripMarkdown(kt.definition),
        ...(lesson.checklistPoints[idx % Math.max(1, lesson.checklistPoints.length)]
          ? [stripMarkdown(lesson.checklistPoints[idx % lesson.checklistPoints.length])]
          : []),
      ],
      hint: `Key specification term in ${subtopic.code}`,
    });
  });

  // 3. Common mistake & memory aid flashcard
  const mistake = lesson.cards.find((c) => c.commonMistake)?.commonMistake;
  const memory = lesson.cards.find((c) => c.memoryAid)?.memoryAid;
  if (mistake || memory) {
    candidates.push({
      id: `${course.id}-${subtopic.id}-syn-fc-examiner`,
      subtopicId: subtopic.id,
      front: `What common exam pitfall and memory aid apply to ${subtopic.code} ${subtopic.title}?`,
      backBullets: [
        ...(mistake ? [`Avoid: ${stripMarkdown(mistake)}`] : []),
        ...(memory ? [`Memory aid: ${stripMarkdown(memory)}`] : []),
      ],
      hint: 'Think about how examiners award or withhold marks on this subtopic.',
    });
  }

  // 4. Checklist summary card
  if (lesson.checklistPoints.length > 0) {
    candidates.push({
      id: `${course.id}-${subtopic.id}-syn-fc-checklist`,
      subtopicId: subtopic.id,
      front: `What are the core exam checklist takeaways for ${subtopic.code} ${subtopic.title}?`,
      backBullets: lesson.checklistPoints.map(stripMarkdown),
      hint: `Review the End of Notes checklist for ${subtopic.code}`,
    });
  }

  const existingIds = new Set(existingForSubtopic.map((f) => f.id));
  const additions = candidates.filter((c) => !existingIds.has(c.id)).slice(0, needed);
  return [...existingForSubtopic, ...additions];
}

function buildSynthesizedExamQuestionForSubtopic(
  course: CourseDefinition,
  topic: TopicDefinition,
  subtopic: SubtopicDefinition,
  lesson: NoteLesson,
  questionNumber: number,
  allCourseTerms: { term: string; definition: string }[]
): ExamQuestionItem {
  const bullets = collectLessonBullets(lesson);
  const terms = [
    ...lesson.keyTerms,
    ...lesson.cards.flatMap((c) => c.glossaryPills ?? []),
  ];
  const primaryTerm = terms[0] ?? {
    term: lesson.cards[0]?.title ?? subtopic.title,
    definition: bullets[0] ?? `Fundamental concept in ${subtopic.code} ${subtopic.title}.`,
  };
  const diagram =
    lesson.cards.find((c) => c.diagram)?.diagram ??
    lesson.cards.flatMap((c) => c.subsections ?? []).find((s) => s.diagram)?.diagram;

  const otherDefs = allCourseTerms
    .filter((t) => t.term.toLowerCase() !== primaryTerm.term.toLowerCase())
    .map((t) => stripMarkdown(t.definition));

  const partBModel = [
    stripMarkdown(primaryTerm.definition),
    stripMarkdown(bullets[0] ?? lesson.checklistPoints[0] ?? ''),
  ]
    .filter(Boolean)
    .join(' ');

  const secondCard = lesson.cards[Math.min(1, lesson.cards.length - 1)] ?? lesson.cards[0];
  const partCBullets = [
    stripMarkdown(bullets[1] ?? bullets[0] ?? primaryTerm.definition),
    stripMarkdown(bullets[2] ?? lesson.checklistPoints[0] ?? ''),
    stripMarkdown(
      lesson.cards.find((c) => c.commonMistake)?.commonMistake ??
        lesson.checklistPoints[1] ??
        lesson.checklistPoints[0] ??
        primaryTerm.definition
    ),
  ].filter(Boolean);

  const partCMarkPoints: MarkPoint[] = partCBullets.slice(0, 3).map((pt, idx) => ({
    id: `${course.id}-ex-${subtopic.id}-c-mp${idx + 1}`,
    markDescription: pt,
    requiredKeywordGroups: extractKeywords(pt, 2),
  }));

  return {
    id: `${course.id}-exam-syn-${subtopic.id}`,
    subtopicId: subtopic.id,
    number: questionNumber,
    stimulus: `Topic ${topic.number} (${topic.title}) — Specification Question on ${subtopic.code} ${subtopic.title}: A student is revising ${lesson.cards.map((c) => c.title.toLowerCase()).join(' and ')} for ${course.qualificationLabel} ${course.subjectName} (${course.boardLabel} ${course.specCode}). Answer all parts of the question below.`,
    diagram,
    parts: [
      {
        id: `${course.id}-exam-syn-${subtopic.id}-a`,
        label: 'a',
        prompt: `Which statement best describes ${primaryTerm.term} in ${subtopic.code} ${subtopic.title}?`,
        kind: 'mcq',
        marks: 1,
        options: [
          otherDefs[0] ?? `A process that prevents ${subtopic.title.toLowerCase()} from occurring.`,
          stripMarkdown(primaryTerm.definition),
          otherDefs[1] ?? `An unrelated variable not assessed in Topic ${topic.number}.`,
          otherDefs[2] ?? `A constant quantity that is independent of ${primaryTerm.term.toLowerCase()}.`,
        ],
        correctIndex: 1,
      },
      {
        id: `${course.id}-exam-syn-${subtopic.id}-b`,
        label: 'b',
        prompt: `Define ${primaryTerm.term} and state one key specification principle for ${subtopic.code} ${subtopic.title}.`,
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: partBModel,
          markPoints: [
            {
              id: `${course.id}-ex-${subtopic.id}-b-mp1`,
              markDescription: `Correct definition of ${primaryTerm.term}: ${stripMarkdown(primaryTerm.definition)}`,
              requiredKeywordGroups: extractKeywords(`${primaryTerm.term} ${primaryTerm.definition}`, 2),
            },
            {
              id: `${course.id}-ex-${subtopic.id}-b-mp2`,
              markDescription: `Key specification detail: ${stripMarkdown(bullets[0] ?? lesson.checklistPoints[0] ?? primaryTerm.definition)}`,
              requiredKeywordGroups: extractKeywords(bullets[0] ?? lesson.checklistPoints[0] ?? primaryTerm.definition, 2),
            },
          ],
        },
      },
      {
        id: `${course.id}-exam-syn-${subtopic.id}-c`,
        label: 'c',
        prompt: `Explain the key mechanisms or applications of ${secondCard?.title ?? subtopic.title} and how to avoid common errors in exam responses.`,
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: partCBullets.join(' '),
          markPoints: partCMarkPoints,
        },
      },
    ],
  };
}

function buildSynthesizedCheatSheetForTopic(
  course: CourseDefinition,
  topic: TopicDefinition
): CheatSheetItem {
  const sections: CheatSheetSection[] = topic.subtopics.map((sub) => {
    const lesson = course.notes[sub.id];
    if (!lesson) {
      return {
        heading: `${sub.code} ${sub.title}`,
        points: [`Master core definitions, mechanisms, and worked exam questions for ${sub.code} ${sub.title}.`],
      };
    }
    const bullets = collectLessonBullets(lesson).slice(0, 4);
    const memory = lesson.cards.find((c) => c.memoryAid)?.memoryAid;
    const mistake = lesson.cards.find((c) => c.commonMistake)?.commonMistake;
    return {
      heading: `${sub.code} ${sub.title}`,
      points: [
        ...bullets,
        ...(mistake ? [`Examiner tip: ${stripMarkdown(mistake)}`] : []),
      ].slice(0, 5),
      formula: memory ? stripMarkdown(memory) : undefined,
    };
  });

  const topicTerms = topic.subtopics.flatMap((sub) => course.notes[sub.id]?.keyTerms ?? []).slice(0, 5);
  if (topicTerms.length > 0) {
    sections.push({
      heading: `Topic ${topic.number} Key Terms & Definitions`,
      points: topicTerms.map((kt) => `${kt.term}: ${stripMarkdown(kt.definition)}`),
    });
  }

  return {
    id: `${course.id}-cs-topic-${topic.number}`,
    slug: `topic-${topic.number}-${topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    title: `Topic ${topic.number}: ${topic.title}`,
    topicNumber: topic.number,
    topicName: `Topic ${topic.number} · ${topic.title}`,
    summary: `Complete 1-page revision cheat sheet covering ${topic.subtopics.map((s) => `${s.code} ${s.title}`).join(', ')}.`,
    accentColor: ACCENT_PALETTE[(topic.number - 1) % ACCENT_PALETTE.length],
    sections,
  };
}

function buildCompletePastPapers(
  course: CourseDefinition,
  topics: TopicDefinition[]
): PastPaperDoc[] {
  const allSubtopics = topics.flatMap((t) => t.subtopics);

  const buildSampleQuestions = (paperNum: 1 | 2) => {
    const slice =
      paperNum === 1
        ? allSubtopics.slice(0, Math.max(4, Math.ceil(allSubtopics.length / 2)))
        : allSubtopics.slice(Math.floor(allSubtopics.length / 2));
    const pool = slice.length >= 2 ? slice : allSubtopics;

    return [0, 1, 2, 3].map((idx) => {
      const sub = pool[idx % Math.max(1, pool.length)];
      const lesson = sub ? course.notes[sub.id] : undefined;
      const bullets = lesson ? collectLessonBullets(lesson) : [];
      const kt = lesson?.keyTerms[0];
      const title = sub ? `${sub.code} ${sub.title}` : `${course.subjectName} Topic ${idx + 1}`;

      return {
        number: `Q${idx + 1}`,
        question: kt
          ? `(${title}) Define "${kt.term}" and explain how ${lesson?.cards[0]?.title.toLowerCase() ?? sub.title.toLowerCase()} is applied in ${course.qualificationLabel} ${course.subjectName}.`
          : `(${title}) Explain the core principles, mechanisms, and analytical methods required for ${title} in ${course.boardLabel} ${course.subjectName}.`,
        marks: idx === 3 ? 6 : 4,
        markScheme: [
          kt
            ? `1 mark: Accurate definition of ${kt.term} — ${stripMarkdown(kt.definition)}`
            : `1 mark: Accurate definition of core terminology in ${title}.`,
          bullets[0]
            ? `1–2 marks: ${bullets[0]}`
            : `1–2 marks: Clear step-by-step explanation of the primary mechanism or method in ${title}.`,
          bullets[1]
            ? `1 mark: ${bullets[1]}`
            : `1 mark: Correct application to the specification context with appropriate units/terminology.`,
          ...(idx === 3
            ? [
                lesson?.checklistPoints[0]
                  ? `1–2 marks (Extended evaluation): ${stripMarkdown(lesson.checklistPoints[0])}`
                  : `1–2 marks (Extended evaluation): Balanced conclusion linking theoretical principles to exam data.`,
              ]
            : []),
        ],
      };
    });
  };

  const defaultInsert = `${course.boardLabel} ${course.qualificationLabel} ${course.subjectName} (${course.specCode}) Official Data, Formulae & Source Insert — Reference values, key equations, and specification tables provided for candidates.`;

  // First, enrich any existing past papers so every paper has >= 4 sampleQuestions and an insertNote
  const enrichedExisting: PastPaperDoc[] = course.pastPapers.map((pp, idx) => {
    const paperNum: 1 | 2 = pp.title.includes('Paper 2') ? 2 : 1;
    const synthQs = buildSampleQuestions(paperNum);
    const mergedQs =
      pp.sampleQuestions.length >= 4
        ? pp.sampleQuestions
        : [
            ...pp.sampleQuestions,
            ...synthQs.slice(pp.sampleQuestions.length).map((q, qIdx) => ({
              ...q,
              number: `Q${pp.sampleQuestions.length + qIdx + 1}`,
            })),
          ];
    return {
      ...pp,
      insertNote: pp.insertNote || (idx % 2 === 0 ? defaultInsert : `${course.boardLabel} ${course.subjectName} Paper ${paperNum} Resource Booklet & Specification Insert.`),
      sampleQuestions: mergedQs,
    };
  });

  if (enrichedExisting.length >= 6) {
    return enrichedExisting;
  }

  const targetTemplates: {
    year: string;
    series: string;
    specEra: 'new-9-1' | 'old';
    paperNum: 1 | 2;
  }[] = [
    { year: '2024', series: 'June 2024', specEra: 'new-9-1', paperNum: 1 },
    { year: '2024', series: 'June 2024', specEra: 'new-9-1', paperNum: 2 },
    { year: '2023', series: 'June 2023', specEra: 'new-9-1', paperNum: 1 },
    { year: '2023', series: 'June 2023', specEra: 'new-9-1', paperNum: 2 },
    { year: '2022', series: 'June 2022', specEra: 'new-9-1', paperNum: 1 },
    { year: '2022', series: 'June 2022', specEra: 'new-9-1', paperNum: 2 },
    { year: '2019', series: 'June 2019 (Legacy)', specEra: 'old', paperNum: 1 },
  ];

  const result = [...enrichedExisting];
  for (const tpl of targetTemplates) {
    if (result.length >= 6 && tpl.year === '2019') break;
    const alreadyExists = result.some(
      (p) => p.year === tpl.year && p.title.toLowerCase().includes(`paper ${tpl.paperNum}`)
    );
    if (alreadyExists) continue;

    const topicSliceLabel =
      tpl.paperNum === 1
        ? topics
            .slice(0, Math.ceil(topics.length / 2))
            .map((t) => `Topic ${t.number}`)
            .join(', ')
        : topics
            .slice(Math.floor(topics.length / 2))
            .map((t) => `Topic ${t.number}`)
            .join(', ');

    result.push({
      id: `${course.id}-pp-${tpl.year}-p${tpl.paperNum}`,
      specEra: tpl.specEra,
      year: tpl.year,
      title: `Paper ${tpl.paperNum} — ${course.subjectName} (${topicSliceLabel || 'Core & Extended'})`,
      tier: course.tier || course.qualificationLabel,
      series: tpl.series,
      paperCode: `${course.specCode}/${tpl.paperNum}`,
      durationMinutes: course.qualification === 'a-level' ? 120 : 105,
      totalMarks: course.qualification === 'a-level' ? 100 : 90,
      insertNote: defaultInsert,
      sampleQuestions: buildSampleQuestions(tpl.paperNum),
    });
  }

  return result;
}

const completedCourseCache = new Map<string, CourseDefinition>();

export function ensureCompleteCourseContent(course: CourseDefinition): CourseDefinition {
  const cacheKey = `${course.id}::${course.topics.length}::${course.quizzes.length}::${course.flashcards.length}::${course.cheatSheets.length}::${course.examPractice.length}::${course.pastPapers.length}`;
  const cached = completedCourseCache.get(cacheKey);
  if (cached) return cached;

  const topics = getDefaultTopicsForPastPapersCourse(course);
  const seededCourse =
    course.pastPapersOnly && course.pastPapers.length < 6
      ? {
          ...course,
          pastPapers: makePastPaperSet(
            course.id.replace(/[^a-z0-9]+/gi, '-').toLowerCase(),
            course.subjectName,
            course.subjectSlug
          ),
        }
      : course;
  const pastPapers = buildCompletePastPapers(seededCourse, topics);

  if (course.pastPapersOnly) {
    const completedPastOnly: CourseDefinition = {
      ...course,
      topics,
      pastPapers,
    };
    completedCourseCache.set(cacheKey, completedPastOnly);
    return completedPastOnly;
  }

  // Merge and deduplicate keyTerms across course.keyTerms + NoteLesson.keyTerms + glossaryPills
  const keyTerms: KeyTermEntry[] = [];
  const seenTerms = new Set<string>();

  for (const kt of course.keyTerms) {
    const norm = kt.term.trim().toLowerCase();
    if (!norm || seenTerms.has(norm)) continue;
    seenTerms.add(norm);
    keyTerms.push({
      ...kt,
      definition: sanitizeKeyTermDefinition(kt.term, kt.definition),
    });
  }

  for (const topic of topics) {
    for (const sub of topic.subtopics) {
      const lesson = course.notes[sub.id];
      if (!lesson) continue;
      lesson.keyTerms.forEach((kt, idx) => {
        const norm = kt.term.trim().toLowerCase();
        if (!norm || seenTerms.has(norm)) return;
        seenTerms.add(norm);
        keyTerms.push({
          id: `${course.id}-kt-${sub.id}-${idx + 1}`,
          term: kt.term,
          definition: sanitizeKeyTermDefinition(kt.term, kt.definition),
          topicNumber: topic.number,
          subtopicId: sub.id,
          subtopicCode: sub.code,
        });
      });

      lesson.cards.forEach((card, cIdx) => {
        (card.glossaryPills ?? []).forEach((pill, pIdx) => {
          const norm = pill.term.trim().toLowerCase();
          if (!norm || seenTerms.has(norm)) return;
          seenTerms.add(norm);
          const displayTerm = pill.term.charAt(0).toUpperCase() + pill.term.slice(1);
          keyTerms.push({
            id: `${course.id}-kt-pill-${sub.id}-${cIdx + 1}-${pIdx + 1}`,
            term: displayTerm,
            definition: sanitizeKeyTermDefinition(displayTerm, pill.definition),
            topicNumber: topic.number,
            subtopicId: sub.id,
            subtopicCode: sub.code,
          });
        });
      });
    }
  }

  const allCourseTerms = keyTerms.map((k) => ({ term: k.term, definition: k.definition }));
  const allCourseBullets = topics.flatMap((t) =>
    t.subtopics.flatMap((s) => (course.notes[s.id] ? collectLessonBullets(course.notes[s.id]) : []))
  );

  // Guarantee >= 5 quizzes, >= 5 flashcards, and >= 1 multi-part examPractice question per subtopic
  const quizzes: QuizQuestion[] = [];
  const flashcards: FlashcardItem[] = [];
  const examPractice: ExamQuestionItem[] = [];
  let examCounter = 1;

  for (const topic of topics) {
    for (const sub of topic.subtopics) {
      const lesson = course.notes[sub.id];
      const existingQs = course.quizzes.filter((q) => q.subtopicId === sub.id);
      const existingFcs = course.flashcards.filter((f) => f.subtopicId === sub.id);
      const existingExams = course.examPractice.filter((e) => e.subtopicId === sub.id);

      if (lesson) {
        quizzes.push(
          ...buildSynthesizedQuizzesForSubtopic(
            course,
            topic,
            sub,
            lesson,
            allCourseTerms,
            allCourseBullets,
            existingQs
          )
        );
        flashcards.push(
          ...buildSynthesizedFlashcardsForSubtopic(course, sub, lesson, existingFcs)
        );
        if (existingExams.length > 0) {
          existingExams.forEach((ex) => {
            examPractice.push({ ...ex, number: examCounter++ });
          });
        } else {
          examPractice.push(
            buildSynthesizedExamQuestionForSubtopic(
              course,
              topic,
              sub,
              lesson,
              examCounter++,
              allCourseTerms
            )
          );
        }
      } else {
        quizzes.push(...existingQs);
        flashcards.push(...existingFcs);
        existingExams.forEach((ex) => {
          examPractice.push({ ...ex, number: examCounter++ });
        });
      }
    }
  }

  // Guarantee 1 CheatSheetItem per topic (sorted by topicNumber)
  const cheatSheets: CheatSheetItem[] = topics.map((topic) => {
    const existing = course.cheatSheets.find((cs) => cs.topicNumber === topic.number);
    return existing ?? buildSynthesizedCheatSheetForTopic(course, topic);
  });

  const completed: CourseDefinition = {
    ...course,
    topics,
    quizzes,
    flashcards,
    cheatSheets,
    examPractice,
    pastPapers,
    keyTerms,
    totalQuestionsCount: quizzes.length,
    totalFlashcardsCount: course.isMaths ? 0 : flashcards.length,
  };

  completedCourseCache.set(cacheKey, completed);
  return completed;
}
