import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { getCourseById } from '../data/catalog';
import { CourseWorkspacePage } from '../pages/CourseWorkspacePage';
import { LessonPlayerPage } from '../pages/study/LessonPlayerPage';
import { NotesViewerPage } from '../pages/study/NotesViewerPage';
import { AppProvider, computeLessonSubtopicProgress, STORAGE_KEY } from '../store/AppContext';

beforeEach(() => {
  localStorage.clear();
});

describe('Distinct Cognito Lessons vs Notes Experiences', () => {
  it('routes Lessons tab subtopics to /lesson/:subtopicId and Notes tab subtopics to /notes/:subtopicId on IGCSE Maths & IGCSE Biology', () => {
    const { unmount } = render(
      <AppProvider>
        <MemoryRouter initialEntries={['/course/igcse-maths-cie']}>
          <Routes>
            <Route path="/course/:courseId" element={<CourseWorkspacePage />} />
            <Route path="/course/:courseId/:tab" element={<CourseWorkspacePage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    // Maths lands on Lessons by default and links to /lesson/
    const lessonsTab = screen.getByRole('tab', { name: /^Lessons$/i });
    const notesTab = screen.getByRole('tab', { name: /^Notes$/i });
    expect(lessonsTab).toHaveAttribute('aria-selected', 'true');
    expect(notesTab).toHaveAttribute('aria-selected', 'false');

    const firstLessonLink = document.querySelector('a.workspace-subtopic-cell') as HTMLAnchorElement;
    expect(firstLessonLink).toBeTruthy();
    expect(firstLessonLink.getAttribute('href')).toContain('/course/igcse-maths-cie/lesson/');

    // Switching to Notes tab routes subtopics to /notes/
    fireEvent.click(notesTab);
    expect(screen.getByRole('tab', { name: /^Notes$/i })).toHaveAttribute('aria-selected', 'true');
    const firstNoteLink = document.querySelector('a.workspace-subtopic-cell') as HTMLAnchorElement;
    expect(firstNoteLink.getAttribute('href')).toContain('/course/igcse-maths-cie/notes/');

    unmount();

    // Sciences (IGCSE Biology) land on Notes by default and also expose Lessons tab
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/course/igcse-biology-cie']}>
          <Routes>
            <Route path="/course/:courseId" element={<CourseWorkspacePage />} />
            <Route path="/course/:courseId/:tab" element={<CourseWorkspacePage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByRole('tab', { name: /^Notes$/i })).toHaveAttribute('aria-selected', 'true');
    const bioNoteLink = document.querySelector('a.workspace-subtopic-cell') as HTMLAnchorElement;
    expect(bioNoteLink.getAttribute('href')).toContain('/course/igcse-biology-cie/notes/');

    fireEvent.click(screen.getByRole('tab', { name: /^Lessons$/i }));
    const bioLessonLink = document.querySelector('a.workspace-subtopic-cell') as HTMLAnchorElement;
    expect(bioLessonLink.getAttribute('href')).toContain('/course/igcse-biology-cie/lesson/');
  });

  it('renders LessonPlayerPage as real Cognito progressive card stream (Step 1 Video -> Continue -> Question cards + full-bleed feedback + Browse mode), and switches cleanly to Notes', () => {
    const course = getCourseById('igcse-maths-cie')!;
    const firstSub = course.topics[0].subtopics[0];
    const subQs = course.quizzes.filter((q) => q.subtopicId === firstSub.id);

    const { container } = render(
      <AppProvider>
        <MemoryRouter initialEntries={[`/course/${course.id}/lesson/${firstSub.id}`]}>
          <Routes>
            <Route path="/course/:courseId/lesson/:subtopicId" element={<LessonPlayerPage />} />
            <Route path="/course/:courseId/notes/:subtopicId" element={<NotesViewerPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    // Step 1: Flush YouTube video card + Continue button, NO Notes reading wall, NO question cards revealed yet
    expect(container.querySelector('iframe.cognito-video-iframe')).toBeInTheDocument();
    expect(screen.queryByText(/END OF NOTES/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/^Contents$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(`2 of ${1 + subQs.length}`)).not.toBeInTheDocument();

    // Clicking Continue on Video card persists watchedLessonIds, awards +5 XP, and reveals Step 2 card!
    const videoContinueBtn = screen.getByRole('button', { name: /Continue to next card/i });
    fireEvent.click(videoContinueBtn);

    expect(screen.getByText(/\+5 XP/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Continue to next card/i })).not.toBeInTheDocument();
    if (subQs.length > 0) {
      expect(screen.getByText(`2 of ${1 + subQs.length}`)).toBeInTheDocument();
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    expect(raw).toBeTruthy();
    const persisted = JSON.parse(raw as string);
    expect(persisted.profiles[0].progressByCourse[course.id]?.watchedLessonIds).toContain(
      firstSub.id
    );

    // Answer the first MCQ choice on Card 2 -> Check enables -> full-bleed feedback footer + Continue appears!
    const firstChoice = container.querySelector('.cl-choice-btn') as HTMLButtonElement | null;
    if (firstChoice) {
      fireEvent.click(firstChoice);
      const checkBtn = screen.getByRole('button', { name: /^Check$/i });
      expect(checkBtn).toBeEnabled();
      fireEvent.click(checkBtn);
      expect(screen.getByRole('button', { name: /Continue|Finish lesson/i })).toBeInTheDocument();
    }

    // Toggling Browse mode reveals the Lesson Overview card + all steps + Quick lesson recap
    const browseSwitch = screen.getByRole('switch', { name: /Toggle browse mode/i });
    fireEvent.click(browseSwitch);
    expect(screen.getByLabelText(/Lesson overview/i)).toBeInTheDocument();
    expect(screen.getByText(`1 of ${1 + subQs.length}`)).toBeInTheDocument();
    const recapBtn = screen.getByRole('button', { name: /Quick lesson recap/i });
    expect(recapBtn).toHaveAttribute('aria-expanded', 'false');

    // StudyTopBar exposes BOTH Lesson and Notes distinctly
    const switcherBtn = container.querySelector('.sp-topbar__switcher-btn') as HTMLButtonElement;
    fireEvent.click(switcherBtn);
    expect(screen.getByRole('button', { name: /^Lesson$/i })).toHaveAttribute('aria-current', 'page');
    const notesActivityBtn = screen.getByRole('button', { name: /^Notes$/i });
    expect(notesActivityBtn).toBeInTheDocument();

    // Switching to Notes renders the structured Notes reader (CONTENTS + END OF NOTES)
    fireEvent.click(notesActivityBtn);
    expect(screen.getByLabelText(/^Contents$/i)).toBeInTheDocument();
    expect(screen.getByText(/END OF NOTES/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Interactive video lesson/i })).toBeInTheDocument();
  });

  it('computes Lesson progress distinctly from Notes progress with multi-tone green/rose/blue breakdown via computeLessonSubtopicProgress', () => {
    const course = getCourseById('a-level-biology-aqa')!;
    const subId = course.topics[0].subtopics[0].id;
    const subQs = course.quizzes.filter((q) => q.subtopicId === subId);
    expect(subQs.length).toBeGreaterThan(0);

    // Notes read alone does NOT mark Lesson complete
    const notesOnly = computeLessonSubtopicProgress(course, subId, {
      readNoteIds: [subId],
      watchedLessonIds: [],
      checkedPointsBySubtopic: {},
      questionAttempts: {},
      flashcardConfidence: {},
      examPartScores: {},
    });
    expect(notesOnly.percent).toBe(0);
    expect(notesOnly.completed).toBe(false);

    // Watching video gives 25% lesson progress (videoPct = 25)
    const watchedOnly = computeLessonSubtopicProgress(course, subId, {
      readNoteIds: [],
      watchedLessonIds: [subId],
      checkedPointsBySubtopic: {},
      questionAttempts: {},
      flashcardConfidence: {},
      examPartScores: {},
    });
    expect(watchedOnly.percent).toBe(25);
    expect(watchedOnly.videoPct).toBe(25);
    expect(watchedOnly.watched).toBe(true);
    expect(watchedOnly.completed).toBe(false);

    // Watching video + answering all subtopic questions gives 100% completed (75% green + 25% blue)
    const attempts = Object.fromEntries(
      subQs.map((q) => [
        q.id,
        {
          answered: true,
          correct: true,
          earnedMarks: q.marks,
          maxMarks: q.marks,
          lastAnsweredAt: new Date().toISOString(),
        },
      ])
    );
    const fullLesson = computeLessonSubtopicProgress(course, subId, {
      readNoteIds: [],
      watchedLessonIds: [subId],
      checkedPointsBySubtopic: {},
      questionAttempts: attempts,
      flashcardConfidence: {},
      examPartScores: {},
    });
    expect(fullLesson.percent).toBe(100);
    expect(fullLesson.correctPct).toBe(75);
    expect(fullLesson.incorrectPct).toBe(0);
    expect(fullLesson.videoPct).toBe(25);
    expect(fullLesson.completed).toBe(true);
    expect(fullLesson.scorePercent).toBe(100);
  });

  it('opens the Cognito Lesson Preview Modal (objectives, Steps, Est. time, stepper, Start lesson) and embeds official Cambridge PDFs in Past Papers', () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/course/igcse-maths-cie/lessons']}>
          <Routes>
            <Route path="/course/:courseId/:tab" element={<CourseWorkspacePage />} />
            <Route path="/course/:courseId/lesson/:subtopicId" element={<LessonPlayerPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    // Click first lesson subtopic -> opens Cognito Lesson Preview Modal
    const firstLessonLink = document.querySelector('a.workspace-subtopic-cell') as HTMLAnchorElement;
    expect(firstLessonLink).toBeTruthy();
    fireEvent.click(firstLessonLink);

    expect(screen.getByText(/^Steps$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Est\. time$/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Start lesson/i })).toBeInTheDocument();

    // Step to next lesson inside preview modal
    fireEvent.click(screen.getByRole('button', { name: /Next lesson/i }));
    expect(screen.getByText('1.2')).toBeInTheDocument();

    // Close preview modal and switch to Past Papers tab -> official Cambridge PDFs shown!
    fireEvent.click(screen.getAllByRole('button', { name: /Close modal/i })[0]);
    fireEvent.click(screen.getByRole('tab', { name: /^Past Papers$/i }));

    expect(
      screen.getByText(/Official Cambridge International Papers & Specimen Exams/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/OFFICIAL PDF/i).length).toBeGreaterThanOrEqual(4);

    // Open first official Cambridge paper -> real PDF iframe + live Exam Timer + direct PDF link
    const paperButtons = screen.getAllByRole('button', { name: /^Paper$/i });
    fireEvent.click(paperButtons[0]);
    const pdfFrame = document.querySelector('iframe.cognito-pdf-frame') as HTMLIFrameElement;
    expect(pdfFrame).toBeTruthy();
    expect(pdfFrame.getAttribute('src')).toContain('https://www.cambridgeinternational.org/Images/');
    expect(screen.getByRole('button', { name: /Start timer/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Open PDF in new tab/i })).toHaveAttribute(
      'href',
      expect.stringContaining('https://www.cambridgeinternational.org/Images/')
    );
  });
});
