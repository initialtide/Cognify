import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AccountLayout } from '../pages/account/AccountLayout';
import { KeyTermsPage } from '../pages/study/KeyTermsPage';
import { NotesViewerPage } from '../pages/study/NotesViewerPage';
import { AppProvider } from '../store/AppContext';
import App from '../App';

describe('Paywall Removal Verification across Dashboard, Notes, Key Terms & Activity', () => {
  it('renders /dashboard with zero Upgrade buttons or Weekly limits banners', () => {
    render(<App />);
    expect(screen.getByText(/Hi Alex/i)).toBeInTheDocument();
    expect(screen.queryByText(/Upgrade to Pro/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Weekly limits/i)).not.toBeInTheDocument();
  });

  it('renders full Notes lesson through END OF NOTES checklist with zero weekly cap strip', () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/course/gcse-biology-aqa-higher/notes/bio-1-1']}>
          <Routes>
            <Route path="/course/:courseId/notes/:subtopicId" element={<NotesViewerPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByText(/END OF NOTES/i)).toBeInTheDocument();
    expect(screen.getByText(/Key points to remember/i)).toBeInTheDocument();
    expect(screen.queryByText(/free notes and lessons this week/i)).not.toBeInTheDocument();
  });

  it('renders all A-W Key Terms unblurred and unlocks Test me', () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/course/gcse-biology-aqa-higher/key-terms']}>
          <Routes>
            <Route path="/course/:courseId/key-terms" element={<KeyTermsPage />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByText(/Mitochondria/i)).toBeInTheDocument();
    expect(screen.getByText(/White blood cell/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Test me/i })).toBeEnabled();
    expect(screen.queryByText(/Unlock every key term/i)).not.toBeInTheDocument();
  });

  it('unlocks all 5 Activity Log timeframes without Pro locks', () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/account/activity']}>
          <Routes>
            <Route
              path="/account/:tab"
              element={<AccountLayout onOpenAvatarModal={() => {}} onOpenDailyGoalModal={() => {}} />}
            />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByRole('tab', { name: 'Today & Yesterday' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Week' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Month' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Year' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'All time' })).toBeInTheDocument();
    expect(screen.queryByText(/UPGRADE TO PRO/i)).not.toBeInTheDocument();
  });
});
