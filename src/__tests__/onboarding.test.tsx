import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { DashboardPage } from '../pages/DashboardPage';
import { OnboardingPage } from '../pages/OnboardingPage';
import { AppProvider } from '../store/AppContext';

function renderOnboardingApp() {
  return render(
    <AppProvider>
      <MemoryRouter initialEntries={['/onboarding']}>
        <Routes>
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                onOpenAvatarModal={() => {}}
                onOpenStreakModal={() => {}}
                onOpenManageCourses={() => {}}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </AppProvider>
  );
}

describe('Guided 4-Step Onboarding Flow', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('completes onboarding as a guest: picks A-Level, selects subjects, customises name/goal, and lands on tailored Dashboard', async () => {
    renderOnboardingApp();

    // Step 1: Choose A-Level + YEAR 13
    expect(screen.getByText(/What are you studying for\?/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /^A-Level/i }));
    fireEvent.click(screen.getByRole('button', { name: 'YEAR 13' }));
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Step 2: Subjects & exam boards (A-Level defaults pre-selected, toggle Psychology too)
    expect(screen.getByText(/Pick your subjects & exam boards/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Psychology/i }));
    expect(screen.getByText(/5 selected/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Step 3: Daily XP goal, mascot & name
    expect(screen.getByText(/Set your daily target & mascot/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Serious/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Druid' }));
    fireEvent.change(screen.getByPlaceholderText(/e\.g\. Elena/i), {
      target: { value: 'Elena' },
    });
    expect(screen.getByText(/Hi Elena!/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Step 4: Launch as guest
    expect(screen.getByText(/Save your setup with a free account/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Start studying as guest/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hi Elena/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/STUDENT · YEAR 13/i)).toBeInTheDocument();
    expect(screen.getByText(/5 COURSES/i)).toBeInTheDocument();
    // Since onboarding is completed, the Dashboard shows the compact save-progress card instead of the onboarding prompt
    expect(screen.queryByText(/Personalise Cognify in 60 seconds/i)).not.toBeInTheDocument();
  });

  it('completes onboarding with free account creation and validates mismatched passwords', async () => {
    renderOnboardingApp();

    // Step 1 -> Step 2 (IGCSE default) -> Step 3 -> Step 4
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    fireEvent.change(screen.getByPlaceholderText(/e\.g\. Elena/i), {
      target: { value: 'Noah' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));

    // Mismatched password shows validation alert
    fireEvent.change(screen.getByPlaceholderText(/student@example\.com/i), {
      target: { value: 'noah@igcse.org' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Min 6 characters/i), {
      target: { value: 'physics99' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Repeat password/i), {
      target: { value: 'wrong99' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Create free account & start studying/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/do not match/i);

    // Fix password & complete onboarding
    fireEvent.change(screen.getByPlaceholderText(/Repeat password/i), {
      target: { value: 'physics99' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Create free account & start studying/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hi Noah/i)).toBeInTheDocument();
    });
    // Authenticated users see no guest save-progress banner at all
    expect(screen.queryByText(/Save your revision progress/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Personalise Cognify in 60 seconds/i)).not.toBeInTheDocument();
  });

  it('supports inline Sign In inside Onboarding (/onboarding?mode=signin) and routes directly to Dashboard', async () => {
    // First register a real account via onboarding, then mount /onboarding?mode=signin in a fresh session
    const first = renderOnboardingApp();
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.change(screen.getByPlaceholderText(/e\.g\. Elena/i), {
      target: { value: 'Kira' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    fireEvent.change(screen.getByPlaceholderText(/student@example\.com/i), {
      target: { value: 'kira@igcse.org' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Min 6 characters/i), {
      target: { value: 'chemistry77' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Repeat password/i), {
      target: { value: 'chemistry77' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Create free account & start studying/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hi Kira/i)).toBeInTheDocument();
    });

    // Clear only the active session in localStorage to simulate signed-out returning student
    const saved = JSON.parse(localStorage.getItem('cognito_clone_v1') || '{}');
    saved.sessionAccountId = null;
    saved.activeProfileId = 'profile-default';
    localStorage.setItem('cognito_clone_v1', JSON.stringify(saved));
    first.unmount();

    // Visit /onboarding?mode=signin -> renders inline Cognito Sign-In Onboarding
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/onboarding?mode=signin']}>
          <Routes>
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route
              path="/dashboard"
              element={
                <DashboardPage
                  onOpenAvatarModal={() => {}}
                  onOpenStreakModal={() => {}}
                  onOpenManageCourses={() => {}}
                />
              }
            />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    expect(screen.getByText(/Welcome back to Cognify/i)).toBeInTheDocument();
    // Saved account pill for Kira is shown for 1-tap email fill
    fireEvent.click(screen.getByRole('button', { name: /Kira/i }));
    fireEvent.change(screen.getByPlaceholderText(/Enter your password/i), {
      target: { value: 'chemistry77' },
    });
    fireEvent.click(screen.getByRole('button', { name: /^Sign in$/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hi Kira/i)).toBeInTheDocument();
    });
  });
});
