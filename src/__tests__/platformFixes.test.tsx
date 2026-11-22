import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { EducationalDiagram } from '../components/artwork/Diagrams';
import { SubjectIcon } from '../components/artwork/SubjectIcons';
import { TopNav } from '../components/layout/TopNav';
import { ManageCoursesModal } from '../components/modals/ManageCoursesModal';
import { ALL_COURSES, getCourseById } from '../data/catalog';
import { ensureCompleteCourseContent } from '../data/contentCompleteness';
import { CourseWorkspacePage } from '../pages/CourseWorkspacePage';
import { DashboardPage } from '../pages/DashboardPage';
import { CheatSheetDetailPage } from '../pages/study/CheatSheetsPage';
import { ExamPracticePage } from '../pages/study/ExamPracticePage';
import { FlashcardsPlayerPage } from '../pages/study/FlashcardsPlayerPage';
import { renderInlineMarkdown } from '../pages/study/NotesViewerPage';
import { getShuffledMatchingPairs, QuizPlayerPage } from '../pages/study/QuizPlayerPage';
import { AppProvider, createDefaultProfile, STORAGE_KEY } from '../store/AppContext';
import {
  CourseDefinition,
  DiagramKind,
  ExamQuestionItem,
  FlashcardItem,
  MarkPoint,
  QuizQuestion,
  SubjectIconId,
} from '../types/curriculum';

const NEW_DIAGRAM_KINDS: DiagramKind[] = [
  'quadratic-graph',
  'right-triangle-trig',
  'supply-demand-equilibrium',
  'production-possibility-curve',
  'cpu-fde-architecture',
  'logic-gates-truth',
  'tectonic-plate-margins',
  'break-even-chart',
];

const NEW_SUBJECT_ICON_IDS: SubjectIconId[] = [
  'sociology',
  'further-maths',
  'pe',
  'design-technology',
  'food-nutrition',
];

// Untouched legacy M2 course subtopic prefixes containing pre-existing ungradable baked markPoints.
// M2 will replace these 5 files and remove this allowlist to enforce 100% gradability globally.
const M2_LEGACY_UNGRADABLE_SUBTOPIC_PREFIXES = [
  'phys-',
  'math-',
  'igphys-',
  'igmath-',
  'igbus-',
];

function normalizeForGradability(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9.×xμµ\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isMarkPointGradable(mp: MarkPoint): boolean {
  if (mp.numericMatch) {
    return (
      typeof mp.numericMatch.value === 'number' &&
      Number.isFinite(mp.numericMatch.value) &&
      typeof mp.numericMatch.tolerance === 'number' &&
      Number.isFinite(mp.numericMatch.tolerance) &&
      mp.numericMatch.tolerance >= 0
    );
  }
  if (!Array.isArray(mp.requiredKeywordGroups) || mp.requiredKeywordGroups.length === 0) {
    return false;
  }
  return mp.requiredKeywordGroups.every(
    (group) =>
      Array.isArray(group) &&
      group.length > 0 &&
      group.some((kw) => typeof kw === 'string' && normalizeForGradability(kw).length > 0)
  );
}

beforeEach(() => {
  localStorage.clear();
});

describe('M1 Platform Fixes & Foundation Contracts', () => {
  it('1. renders all 8 new EducationalDiagram kinds with valid SVGs, aria-labels, and unique marker IDs', () => {
    const markerIds = new Set<string>();

    for (const kind of NEW_DIAGRAM_KINDS) {
      const { container, unmount } = render(
        <div>
          <EducationalDiagram kind={kind} />
          <EducationalDiagram kind={kind} compact />
        </div>
      );
      const svgs = container.querySelectorAll('svg');
      expect(svgs.length, `Expected 2 SVGs for ${kind}`).toBe(2);

      svgs.forEach((svg) => {
        const ariaLabel = svg.getAttribute('aria-label') ?? '';
        expect(ariaLabel.trim().length, `Missing aria-label on ${kind}`).toBeGreaterThan(10);
        expect(svg.getAttribute('viewBox')).toBeTruthy();
      });

      const markers = Array.from(container.querySelectorAll('marker'));
      const localIds = markers.map((m) => m.getAttribute('id')).filter(Boolean) as string[];
      expect(new Set(localIds).size, `Duplicate marker IDs within ${kind}`).toBe(localIds.length);
      localIds.forEach((id) => markerIds.add(id));

      unmount();
    }

    expect(markerIds.size).toBeGreaterThan(0);
  });

  it('2. renders all 5 new SubjectIconId entries with valid badge <img> sources', () => {
    const expectedSrcByIcon: Record<SubjectIconId, string> = {
      sociology: '/assets/cognito/subject-badges/sociology.svg',
      'further-maths': '/assets/cognito/subject-badges/maths.svg',
      pe: '/assets/cognito/subject-badges/pe.svg',
      'design-technology': '/assets/cognito/subject-badges/design-technology.svg',
      'food-nutrition': '/assets/cognito/subject-badges/food-nutrition.svg',
      biology: '',
      chemistry: '',
      physics: '',
      maths: '',
      'combined-science': '',
      business: '',
      'computer-science': '',
      economics: '',
      'english-language': '',
      'english-literature': '',
      psychology: '',
      geography: '',
      history: '',
      french: '',
      german: '',
      spanish: '',
      rs: '',
      languages: '',
    };

    for (const icon of NEW_SUBJECT_ICON_IDS) {
      const { container, unmount } = render(<SubjectIcon icon={icon} size={40} />);
      const img = container.querySelector('img');
      expect(img, `Missing img for ${icon}`).not.toBeNull();
      expect(img?.getAttribute('src')).toBe(expectedSrcByIcon[icon]);
      unmount();
    }
  });

  it('3. FlashcardsPlayerPage persists Browse Mode ratings, hydrates on remount, renders inline markdown & optional back diagram', () => {
    const customCards: FlashcardItem[] = [
      {
        id: 'test-fc-md-1',
        subtopicId: 'bio-1-1',
        front: 'What is **mitosis** in *eukaryotic* cells?',
        hint: 'Think about **genetically identical** daughters',
        backBullets: ['Produces two **diploid** cells for *growth* and repair'],
        diagram: 'quadratic-graph',
      },
      {
        id: 'test-fc-md-2',
        subtopicId: 'bio-1-1',
        front: 'State the value of 2 * x * 3 when x = 2.',
        backBullets: ['Equals **12**'],
      },
    ];

    const routeEntry = {
      pathname: '/course/gcse-biology-aqa-higher/flashcards/bio-1-1',
      state: { customCards, title: 'Markdown & Diagram Test' },
    };

    const { container, unmount } = render(
      <AppProvider>
        <MemoryRouter initialEntries={[routeEntry]}>
          <Routes>
            <Route path="/course/:courseId/flashcards/:subtopicId" element={<FlashcardsPlayerPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    // Focus mode renders bold/italic markdown and optional diagram on back face
    expect(container.querySelector('strong')?.textContent).toBe('mitosis');
    expect(container.querySelector('em')?.textContent).toBe('eukaryotic');
    expect(container.querySelector('svg[aria-label*="Quadratic graph"]')).not.toBeNull();

    // Switch to Browse mode and rate card 1 as Confident
    fireEvent.click(screen.getByRole('switch', { name: /Toggle browse mode/i }));
    const confidentButtons = screen.getAllByRole('button', { name: /Confident/i });
    fireEvent.click(confidentButtons[0]);

    // Verify persisted in localStorage under STORAGE_KEY (AppStoreState envelope)
    const raw = localStorage.getItem(STORAGE_KEY);
    expect(raw).toBeTruthy();
    const persisted = JSON.parse(raw as string);
    expect(
      persisted.profiles[0].progressByCourse['gcse-biology-aqa-higher']?.flashcardConfidence?.[
        'test-fc-md-1'
      ]?.status
    ).toBe('confident');

    // Also verify multiplication asterisks are not turned into <em>
    const emTexts = Array.from(container.querySelectorAll('em')).map((el) => el.textContent);
    expect(emTexts).not.toContain(' x ');

    unmount();

    // Remount and verify hydration restores Confident count
    render(
      <AppProvider>
        <MemoryRouter initialEntries={[routeEntry]}>
          <Routes>
            <Route path="/course/:courseId/flashcards/:subtopicId" element={<FlashcardsPlayerPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );
    expect(screen.getByText(/1 confident/i)).toBeInTheDocument();
  });

  it('4. QuizPlayerPage deterministically shuffles matching right column (non-identity, non-reverse for n>=3) and renders inline markdown', () => {
    const pairs3 = [
      { left: 'Term A', right: 'Def A' },
      { left: 'Term B', right: 'Def B' },
      { left: 'Term C', right: 'Def C' },
    ];
    const shuffled3a = getShuffledMatchingPairs('q-match-3', pairs3);
    const shuffled3b = getShuffledMatchingPairs('q-match-3', pairs3);
    expect(shuffled3a).toEqual(shuffled3b);
    expect(shuffled3a.map((p) => p.right)).not.toEqual(['Def A', 'Def B', 'Def C']);
    expect(shuffled3a.map((p) => p.right)).not.toEqual(['Def C', 'Def B', 'Def A']);

    const pairs4 = [
      { left: 'L1', right: 'R1' },
      { left: 'L2', right: 'R2' },
      { left: 'L3', right: 'R3' },
      { left: 'L4', right: 'R4' },
    ];
    for (const qid of ['q-4-a', 'q-4-b', 'q-4-c', 'q-4-d', 'q-4-e']) {
      const res = getShuffledMatchingPairs(qid, pairs4);
      expect(res.map((p) => p.right)).not.toEqual(['R1', 'R2', 'R3', 'R4']);
      expect(res.map((p) => p.right)).not.toEqual(['R4', 'R3', 'R2', 'R1']);
      expect(res).toEqual(getShuffledMatchingPairs(qid, pairs4));
    }

    // Inline markdown rendering in QuizPlayerPage + multiplication safety
    const matchingQuestion: Extract<QuizQuestion, { type: 'matching' }> = {
      id: 'test-quiz-match-md',
      subtopicId: 'bio-1-1',
      type: 'matching',
      marks: 3,
      prompt: 'Match each **key concept** for *cell biology* (2 * x * 3).',
      pairs: [
        { left: '**Nucleus**', right: 'Contains *DNA*' },
        { left: '**Ribosome**', right: 'Synthesises *protein*' },
        { left: '**Membrane**', right: 'Controls *transport*' },
      ],
      explanation: 'Review **cell organelles** carefully.',
    };
    const customQuestions: QuizQuestion[] = [matchingQuestion];

    const { container } = render(
      <AppProvider>
        <MemoryRouter
          initialEntries={[
            {
              pathname: '/course/gcse-biology-aqa-higher/quiz/bio-1-1',
              state: { customQuestions, title: 'Matching Markdown Quiz' },
            },
          ]}
        >
          <Routes>
            <Route path="/course/:courseId/quiz/:subtopicId" element={<QuizPlayerPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    const promptHeading = container.querySelector('.sp-quiz-prompt');
    expect(promptHeading?.querySelector('strong')?.textContent).toBe('key concept');
    expect(promptHeading?.querySelector('em')?.textContent).toBe('cell biology');
    expect(promptHeading?.textContent).toContain('2 * x * 3');

    const rightButtons = Array.from(container.querySelectorAll('.sp-match-right')).map((b) =>
      b.textContent?.trim()
    );
    expect(rightButtons).toEqual(
      getShuffledMatchingPairs('test-quiz-match-md', matchingQuestion.pairs).map((p) =>
        p.right.replace(/\*/g, '')
      )
    );
  });

  it('5. ExamPracticePage hydrates saved examPartScores on remount and renders inline markdown', () => {
    const customExams: ExamQuestionItem[] = [
      {
        id: 'test-exam-1',
        subtopicId: 'bio-1-1',
        number: 1,
        stimulus: 'An investigation measured **enzyme activity** at *different* pH values.',
        parts: [
          {
            id: 'test-exam-1-a',
            label: 'a',
            prompt: 'State which **organelle** carries out aerobic respiration.',
            kind: 'mcq',
            marks: 1,
            options: ['**Nucleus**', '**Mitochondria**', '**Vacuole**', '**Cell wall**'],
            correctIndex: 1,
          },
          {
            id: 'test-exam-1-b',
            label: 'b',
            prompt: 'Explain why extreme pH reduces *enzyme* activity.',
            kind: 'short-answer',
            marks: 2,
            rubric: {
              maxMarks: 2,
              modelAnswer: 'The **active site** changes shape so the **substrate** can no longer bind.',
              markPoints: [
                {
                  id: 'mp-1',
                  markDescription: 'Active site changes shape / denatures',
                  requiredKeywordGroups: [['active site', 'denatur']],
                },
                {
                  id: 'mp-2',
                  markDescription: 'Substrate no longer fits',
                  requiredKeywordGroups: [['substrate'], ['fit', 'bind', 'complement']],
                },
              ],
            },
          },
        ],
      },
    ];

    const seedProfile = createDefaultProfile();
    seedProfile.progressByCourse['gcse-biology-aqa-higher'] = {
      readNoteIds: [],
      checkedPointsBySubtopic: {},
      questionAttempts: {},
      flashcardConfidence: {},
      examPartScores: {
        'test-exam-1-a': { earnedMarks: 1, maxMarks: 1, answerText: '1' },
        'test-exam-1-b': {
          earnedMarks: 2,
          maxMarks: 2,
          answerText: 'The active site denatures so the substrate cannot bind.',
        },
      },
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        schemaVersion: 1,
        activeProfileId: seedProfile.id,
        profiles: [seedProfile],
      })
    );

    const { container } = render(
      <AppProvider>
        <MemoryRouter
          initialEntries={[
            {
              pathname: '/course/gcse-biology-aqa-higher/exam-practice/bio-1-1',
              state: { customExams, title: 'Hydration Exam Test' },
            },
          ]}
        >
          <Routes>
            <Route path="/course/:courseId/exam-practice/:subtopicId" element={<ExamPracticePage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    // Hydrated total score badge shows 3 / 3 marks (split across Total: + 3 / 3 spans)
    expect(container.querySelector('.sp-topbar__total-box')?.textContent).toBe('3 / 3');
    // Hydrated short-answer text & rubric feedback restored
    const textarea = screen.getByLabelText(/Answer for part b/i) as HTMLTextAreaElement;
    expect(textarea.value).toContain('active site denatures');
    // Inline markdown rendered in stimulus & model answer
    const strongTexts = Array.from(container.querySelectorAll('strong')).map((s) => s.textContent);
    expect(strongTexts).toContain('enzyme activity');
    expect(strongTexts).toContain('active site');
  });

  it('6. CheatSheetsPage expands SVG viewBox height dynamically (> 560) for 5+ sections without clipping', () => {
    const found = ALL_COURSES.flatMap((course) =>
      course.cheatSheets.map((sheet) => ({ course, sheet }))
    ).find((item) => item.sheet.sections.length >= 5);
    expect(found, 'Expected at least one course cheat sheet with >= 5 sections').toBeDefined();

    const { course, sheet: tallSheet } = found!;
    const { container } = render(
      <AppProvider>
        <MemoryRouter
          initialEntries={[`/course/${course.id}/cheat-sheets/${tallSheet.slug}`]}
        >
          <Routes>
            <Route path="/course/:courseId/cheat-sheets/:slug" element={<CheatSheetDetailPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    const posterSvg = container.querySelector(`svg[aria-label="${tallSheet.title} printable poster"]`);
    expect(posterSvg).not.toBeNull();
    const viewBox = posterSvg?.getAttribute('viewBox') ?? '';
    const [, , , heightStr] = viewBox.split(' ');
    const posterHeight = Number(heightStr);
    expect(posterHeight).toBeGreaterThan(560);

    // Every section heading should appear inside the SVG (none clipped or omitted)
    const svgText = posterSvg?.textContent ?? '';
    for (const sec of tallSheet.sections) {
      expect(svgText).toContain(sec.heading.toUpperCase());
    }
  });

  it('7. Maths courses expose full flashcard counts and unified tabs (Flashcards, Cheat Sheets, Exam Practice, Key Terms)', () => {
    for (const mathsId of ['gcse-maths-edexcel-higher', 'igcse-maths-cie', 'a-level-maths-edexcel']) {
      const course = getCourseById(mathsId);
      expect(course, `Missing Maths course ${mathsId}`).toBeDefined();
      expect(course!.flashcards.length).toBeGreaterThan(0);
      expect(course!.totalFlashcardsCount).toBe(course!.flashcards.length);
    }

    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/course/gcse-maths-edexcel-higher']}>
          <Routes>
            <Route path="/course/:courseId" element={<CourseWorkspacePage />} />
            <Route path="/course/:courseId/:tab" element={<CourseWorkspacePage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByRole('tab', { name: /Lessons/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Quiz/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Flashcards/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Cheat Sheets/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Exam Practice/i })).toBeInTheDocument();

    // Open "More" menu and confirm Key terms link is present for Maths
    fireEvent.click(screen.getByRole('button', { name: /More/i }));
    expect(screen.getByRole('link', { name: /Key terms/i })).toBeInTheDocument();
  });

  it('8. Dynamic enrolled course variants resolve and display across DashboardPage, TopNav, and ManageCoursesModal', () => {
    const dynamicId = 'gcse-biology-edexcel-triple-higher';
    const resolved = getCourseById(dynamicId);
    expect(resolved).toBeDefined();
    expect(resolved?.boardLabel).toBe('Edexcel');

    const seedProfile = createDefaultProfile();
    seedProfile.enrolledCourseIds = [dynamicId, 'stale-nonexistent-course-id'];
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        schemaVersion: 1,
        activeProfileId: seedProfile.id,
        profiles: [seedProfile],
      })
    );

    const noop = () => {};
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/dashboard']}>
          <TopNav
            onOpenStreakModal={noop}
            onOpenDailyGoalModal={noop}
            onOpenManageCourses={noop}
            onOpenQuickSearch={noop}
          />
          <DashboardPage
            onOpenAvatarModal={noop}
            onOpenStreakModal={noop}
            onOpenManageCourses={noop}
          />
          <ManageCoursesModal open onClose={noop} />
        </MemoryRouter>
      </AppProvider>
    );

    // Dashboard renders the dynamic Edexcel Biology variant
    expect(screen.getByText(resolved!.subtitle)).toBeInTheDocument();

    // TopNav "My courses" dropdown renders the dynamic Edexcel Biology variant subtitle
    fireEvent.click(screen.getByRole('button', { name: /My courses/i }));
    expect(screen.getAllByText(resolved!.subtitle).length).toBeGreaterThanOrEqual(2);

    // ManageCoursesModal counts only valid resolved courses (1, skipping stale ID) and shows variant on drilldown
    expect(screen.getByText(/YOUR COURSES \(1\)/i)).toBeInTheDocument();
    const gcseDrillBtn = screen.getByRole('button', { name: /GCSE.*1 course/i });
    fireEvent.click(gcseDrillBtn);
    expect(
      screen.getAllByText(`${resolved!.boardLabel} · ${resolved!.tier}`).length
    ).toBeGreaterThanOrEqual(1);
  });

  it('9. contentCompleteness caches aliased bundles without collision, rotates correctIndex, and produces 100% gradable synthesized rubrics + valid bounds', () => {
    const baseBio = getCourseById('gcse-biology-aqa-higher')!;
    const aliasA: CourseDefinition = {
      ...baseBio,
      id: 'test-alias-bio-a',
      quizzes: [],
      flashcards: [],
      examPractice: [],
      cheatSheets: [],
      keyTerms: [],
    };
    const aliasB: CourseDefinition = {
      ...aliasA,
      id: 'test-alias-bio-b',
      board: 'edexcel',
      boardLabel: 'Edexcel',
    };
    const distinctInput: CourseDefinition = {
      ...aliasA,
      id: 'test-alias-bio-c',
      flashcards: baseBio.flashcards,
    };

    const doneA = ensureCompleteCourseContent(aliasA);
    const doneB = ensureCompleteCourseContent(aliasB);
    const doneC = ensureCompleteCourseContent(distinctInput);

    // Aliased bundles sharing exact input refs reuse cached synthesized arrays (O(1) hit)
    expect(doneA.quizzes).toBe(doneB.quizzes);
    expect(doneA.flashcards).toBe(doneB.flashcards);
    expect(doneA.examPractice).toBe(doneB.examPractice);
    expect(doneA.cheatSheets).toBe(doneB.cheatSheets);
    // Distinct bundle inputs MUST NOT collide
    expect(doneC.flashcards).not.toBe(doneA.flashcards);

    // Varied correctIndex values across synthesized MCQs
    const synMcqIndices = new Set(
      doneA.quizzes
        .filter(
          (q): q is Extract<QuizQuestion, { type: 'mcq' }> =>
            q.type === 'mcq' && q.id.includes('-syn-')
        )
        .map((q) => q.correctIndex)
    );
    expect(synMcqIndices.size).toBeGreaterThanOrEqual(3);

    // 100% gradable synthesized MarkPoints across quizzes and exam practice
    for (const q of doneA.quizzes) {
      if (q.type === 'short-answer') {
        expect(q.rubric.markPoints.length).toBeGreaterThanOrEqual(q.rubric.maxMarks);
        for (const mp of q.rubric.markPoints) {
          expect(isMarkPointGradable(mp), `Ungradable synthesized quiz mp ${mp.id}`).toBe(true);
        }
      }
    }
    for (const ex of doneA.examPractice) {
      for (const part of ex.parts) {
        if (part.kind === 'short-answer') {
          expect(part.rubric).toBeDefined();
          expect(part.rubric!.markPoints.length).toBeGreaterThanOrEqual(part.rubric!.maxMarks);
          for (const mp of part.rubric!.markPoints) {
            expect(isMarkPointGradable(mp), `Ungradable synthesized exam mp ${mp.id}`).toBe(true);
          }
        }
      }
    }

    // Structural bounds & clean-course gradability across all non-stub catalog courses
    const nonStubCourses = ALL_COURSES.filter((c) => !c.pastPapersOnly && c.topics.length > 0);
    for (const course of nonStubCourses) {
      for (const q of course.quizzes) {
        if (q.type === 'mcq') {
          expect(q.correctIndex).toBeGreaterThanOrEqual(0);
          expect(q.correctIndex).toBeLessThan(q.options.length);
        } else if (q.type === 'multi-select') {
          expect(q.correctIndices.length).toBe(q.selectCount);
          expect(new Set(q.correctIndices).size).toBe(q.correctIndices.length);
          for (const ci of q.correctIndices) {
            expect(ci).toBeGreaterThanOrEqual(0);
            expect(ci).toBeLessThan(q.options.length);
          }
        } else if (q.type === 'fill-blank') {
          expect(q.segments.length).toBeGreaterThanOrEqual(q.answers.length);
          for (const ans of q.answers) {
            expect(q.wordBank.map((w) => w.toLowerCase())).toContain(ans.toLowerCase());
          }
        } else if (q.type === 'diagram-label') {
          for (const lbl of q.labels) {
            expect(lbl.options).toContain(lbl.answer);
          }
        } else if (q.type === 'short-answer') {
          const isLegacyM2 =
            q.id.includes('-extra-') ||
            M2_LEGACY_UNGRADABLE_SUBTOPIC_PREFIXES.some((p) => q.subtopicId.startsWith(p));
          if (!isLegacyM2 || q.id.includes('-syn-')) {
            for (const mp of q.rubric.markPoints) {
              expect(isMarkPointGradable(mp), `Ungradable ${course.id}/${q.id}/${mp.id}`).toBe(true);
            }
          }
        }
      }
    }

    // Verify renderInlineMarkdown preserves multiplication expressions safely
    const { container } = render(<div>{renderInlineMarkdown('Calculate **area** = 2 * x * 3 for *n* sides')}</div>);
    expect(container.querySelector('strong')?.textContent).toBe('area');
    expect(container.querySelector('em')?.textContent).toBe('n');
    expect(container.textContent).toContain('2 * x * 3');
  });

  it('10. audit_learning_quality.mjs --json reports assessment authorship and accurately detects ungradable markPoints', async () => {
    const childProcessMod = (await import('node:child_process' as string)) as {
      execFileSync: (
        file: string,
        args: string[],
        options: { encoding: string; maxBuffer: number }
      ) => string;
    };
    const pathMod = (await import('node:path' as string)) as {
      resolve: (...parts: string[]) => string;
    };
    const nodeProcess = (
      globalThis as unknown as { process: { execPath: string; cwd: () => string } }
    ).process;
    const scriptPath = pathMod.resolve(nodeProcess.cwd(), 'scripts', 'audit_learning_quality.mjs');
    const stdout = childProcessMod.execFileSync(nodeProcess.execPath, [scriptPath, '--json'], {
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
    });
    const report = JSON.parse(stdout);

    expect(report.overallScore).toBeGreaterThan(0);
    expect(report.assessmentSummary).toBeDefined();
    expect(typeof report.assessmentSummary.explicitQuizzesPerSubtopic).toBe('number');
    expect(typeof report.assessmentSummary.explicitFlashcardsPerSubtopic).toBe('number');
    expect(typeof report.assessmentSummary.explicitExamsPerSubtopic).toBe('number');
    expect(typeof report.assessmentSummary.explicitCheatSheetsPerTopic).toBe('number');
    expect(typeof report.assessmentSummary.totalBakedExtraCount).toBe('number');
    expect(typeof report.assessmentSummary.totalRuntimeSynCount).toBe('number');
    expect(report.assessmentSummary.totalShortAnswerMarkPoints).toBeGreaterThan(0);

    // Accurately flags untouched legacy M2 courses that have pre-existing ungradable markPoints
    const flaggedById = new Map(
      report.assessmentSummary.flaggedCourses.map(
        (c: { courseId: string; ungradableShortAnswerMarkPoints: number }) => [c.courseId, c]
      )
    );
    expect(report.assessmentSummary.ungradableShortAnswerMarkPoints).toBeGreaterThan(0);
    expect(flaggedById.has('gcse-physics-aqa-higher')).toBe(true);

    // Clean courses (e.g. A-Level Biology, IGCSE Biology) report 100% gradable markPoints
    const aLevelBio = report.courseSummaries.find(
      (c: { courseId: string }) => c.courseId === 'a-level-biology-aqa'
    );
    expect(aLevelBio).toBeDefined();
    expect(aLevelBio.gradableRubricPct).toBe(100);
    expect(aLevelBio.ungradableShortAnswerMarkPoints).toBe(0);
  });
});
