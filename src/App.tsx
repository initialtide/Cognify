import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { TopNav } from './components/layout/TopNav';
import { AuthMode } from './components/auth/AuthFormCard';
import { AuthModal } from './components/modals/AuthModal';
import { AvatarModal } from './components/modals/AvatarModal';
import { DailyGoalModal } from './components/modals/DailyGoalModal';
import { FeedbackModal } from './components/modals/FeedbackModal';
import { ManageCoursesModal } from './components/modals/ManageCoursesModal';
import { QuickSearchModal } from './components/modals/QuickSearchModal';
import { StreakModal } from './components/modals/StreakModal';
import { AccountLayout } from './pages/account/AccountLayout';
import { AuthPage } from './pages/AuthPage';
import { CoursesCatalogPage } from './pages/CoursesCatalogPage';
import { CourseWorkspacePage } from './pages/CourseWorkspacePage';
import { DashboardPage } from './pages/DashboardPage';
import { HelpFaqPage } from './pages/HelpFaqPage';
import { RevisionSessionBuilderPage } from './pages/RevisionSessionBuilderPage';
import { CheatSheetDetailPage } from './pages/study/CheatSheetsPage';
import { ExamPracticePage } from './pages/study/ExamPracticePage';
import { FlashcardsPlayerPage } from './pages/study/FlashcardsPlayerPage';
import { KeyTermsPage } from './pages/study/KeyTermsPage';
import { NotesViewerPage } from './pages/study/NotesViewerPage';
import { QuizPlayerPage } from './pages/study/QuizPlayerPage';
import { VideosPage } from './pages/study/VideosPage';
import { TeacherToolsPage } from './pages/TeacherToolsPage';
import { AppProvider } from './store/AppContext';

const AppShell: React.FC = () => {
  const location = useLocation();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [streakOpen, setStreakOpen] = useState(false);
  const [dailyGoalOpen, setDailyGoalOpen] = useState(false);
  const [manageCoursesOpen, setManageCoursesOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ open: boolean; mode: AuthMode }>({
    open: false,
    mode: 'signin',
  });

  const openAuthModal = (mode: AuthMode = 'signin') =>
    setAuthModalState({ open: true, mode });

  // Global Ctrl+K / Cmd+K Quick Search shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setQuickSearchOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Study players have their own sticky StudyTopBar
  const isStudyPlayer =
    /\/course\/[^/]+\/(notes|quiz|flashcards|exam-practice)\/[^/]+/.test(location.pathname);

  return (
    <>
      {!isStudyPlayer && (
        <TopNav
          onOpenStreakModal={() => setStreakOpen(true)}
          onOpenDailyGoalModal={() => setDailyGoalOpen(true)}
          onOpenManageCourses={() => setManageCoursesOpen(true)}
          onOpenQuickSearch={() => setQuickSearchOpen(true)}
          onOpenAuthModal={openAuthModal}
        />
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              onOpenAvatarModal={() => setAvatarOpen(true)}
              onOpenStreakModal={() => setStreakOpen(true)}
              onOpenManageCourses={() => setManageCoursesOpen(true)}
              onOpenAuthModal={openAuthModal}
            />
          }
        />

        {/* Authentication & Account Sync */}
        <Route path="/auth" element={<AuthPage initialMode="signin" />} />
        <Route path="/login" element={<AuthPage initialMode="signin" />} />
        <Route path="/register" element={<AuthPage initialMode="register" />} />

        {/* Course Catalog Hierarchy */}
        <Route path="/courses" element={<CoursesCatalogPage />} />
        <Route path="/courses/:qual" element={<CoursesCatalogPage />} />
        <Route path="/courses/:qual/:subject" element={<CoursesCatalogPage />} />
        <Route path="/courses/:qual/:subject/:board" element={<CoursesCatalogPage />} />

        {/* Study Players & Tools */}
        <Route path="/course/:courseId/revision-session" element={<RevisionSessionBuilderPage />} />
        <Route path="/course/:courseId/notes/:subtopicId" element={<NotesViewerPage />} />
        <Route path="/course/:courseId/quiz/:subtopicId" element={<QuizPlayerPage />} />
        <Route path="/course/:courseId/flashcards/:subtopicId" element={<FlashcardsPlayerPage />} />
        <Route path="/course/:courseId/exam-practice/:subtopicId" element={<ExamPracticePage />} />
        <Route path="/course/:courseId/cheat-sheets/:slug" element={<CheatSheetDetailPage />} />
        <Route path="/course/:courseId/key-terms" element={<KeyTermsPage />} />
        <Route path="/course/:courseId/videos" element={<VideosPage />} />

        {/* Course Workspace & Tabs */}
        <Route path="/course/:courseId" element={<CourseWorkspacePage />} />
        <Route path="/course/:courseId/:tab" element={<CourseWorkspacePage />} />

        {/* Account & Utilities */}
        <Route
          path="/account/:tab"
          element={
            <AccountLayout
              onOpenAvatarModal={() => setAvatarOpen(true)}
              onOpenDailyGoalModal={() => setDailyGoalOpen(true)}
              onOpenAuthModal={openAuthModal}
            />
          }
        />
        <Route path="/account" element={<Navigate to="/account/profile" replace />} />
        <Route path="/teacher-tools" element={<TeacherToolsPage />} />
        <Route path="/faq" element={<HelpFaqPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      {/* Bottom-Right Floating Feedback Button */}
      <button
        type="button"
        className="floating-feedback-btn no-print"
        aria-label="Send feedback"
        onClick={() => setFeedbackOpen(true)}
      >
        <Send size={18} />
      </button>

      {/* Global Native <dialog> Modals */}
      <AvatarModal open={avatarOpen} onClose={() => setAvatarOpen(false)} />
      <StreakModal open={streakOpen} onClose={() => setStreakOpen(false)} />
      <DailyGoalModal open={dailyGoalOpen} onClose={() => setDailyGoalOpen(false)} />
      <ManageCoursesModal open={manageCoursesOpen} onClose={() => setManageCoursesOpen(false)} />
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
      <QuickSearchModal open={quickSearchOpen} onClose={() => setQuickSearchOpen(false)} />
      <AuthModal
        open={authModalState.open}
        initialMode={authModalState.mode}
        onClose={() => setAuthModalState((s) => ({ ...s, open: false }))}
      />
    </>
  );
};

export const App: React.FC = () => (
  <AppProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  </AppProvider>
);

export default App;
