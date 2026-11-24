import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { AuthPage } from '../pages/AuthPage';
import { DashboardPage } from '../pages/DashboardPage';
import {
  decodeSyncCode,
  encodeSyncCode,
  generateSalt,
  hashPassword,
  verifyPassword,
} from '../services/authService';
import { AppProvider, createDefaultProfile, STORAGE_KEY, useApp } from '../store/AppContext';

describe('Sign In, Register & Progress Save System', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('hashes and verifies passwords with unique salts', async () => {
    const saltA = generateSalt();
    const saltB = generateSalt();
    expect(saltA).not.toBe(saltB);

    const hashA = await hashPassword('supersecret123', saltA);
    const hashB = await hashPassword('supersecret123', saltB);
    expect(hashA).not.toBe(hashB);
    expect(hashA).not.toContain('supersecret123');

    expect(await verifyPassword('supersecret123', saltA, hashA)).toBe(true);
    expect(await verifyPassword('wrongpass', saltA, hashA)).toBe(false);
  });

  it('encodes and decodes portable Sync Codes while stripping personal AI API keys', () => {
    const profile = createDefaultProfile({
      name: 'Samira',
      yearGroup: 'YEAR 13',
      dailyXpGoal: 250,
    });
    profile.preferences.aiConfig.apiKey = 'sk-secret-do-not-export';

    const code = encodeSyncCode(profile);
    expect(code.startsWith('COGNIFY-SAVE-V1:')).toBe(true);

    const restored = decodeSyncCode(code);
    expect(restored).not.toBeNull();
    expect(restored?.name).toBe('Samira');
    expect(restored?.yearGroup).toBe('YEAR 13');
    expect(restored?.dailyXpGoal).toBe(250);
    expect(restored?.preferences.aiConfig.apiKey).toBe('');

    expect(decodeSyncCode('INVALID-CODE')).toBeNull();
    expect(decodeSyncCode('COGNIFY-SAVE-V1:not-valid-base64!!!')).toBeNull();
  });

  it('registers, auto-saves progress, signs out, rejects bad password, and restores saved progress on sign-in', async () => {
    let api!: ReturnType<typeof useApp>;
    const Harness: React.FC = () => {
      api = useApp();
      return (
        <div>
          <span data-testid="name">{api.profile.name}</span>
          <span data-testid="auth">{api.isAuthenticated ? 'yes' : 'no'}</span>
          <span data-testid="xp">{api.streakStats.totalXp}</span>
        </div>
      );
    };

    render(
      <AppProvider>
        <Harness />
      </AppProvider>
    );

    expect(screen.getByTestId('auth')).toHaveTextContent('no');
    expect(screen.getByTestId('name')).toHaveTextContent('Alex');

    // Register fresh account (keepGuestProgress: false)
    let res = await act(async () =>
      api.registerAccount({
        name: 'Zara',
        email: 'Zara@Example.com',
        password: 'password123',
        yearGroup: 'YEAR 12',
        avatarId: 'wizard',
        keepGuestProgress: false,
      })
    );
    expect(res.ok).toBe(true);
    expect(screen.getByTestId('auth')).toHaveTextContent('yes');
    expect(screen.getByTestId('name')).toHaveTextContent('Zara');
    expect(screen.getByTestId('xp')).toHaveTextContent('0');

    // Duplicate email rejected (case-insensitive)
    res = await act(async () =>
      api.registerAccount({
        name: 'Duplicate',
        email: 'zara@example.com',
        password: 'password123',
        yearGroup: 'YEAR 12',
        avatarId: 'dj',
        keepGuestProgress: false,
      })
    );
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/already exists/i);

    // Record study progress while signed in -> auto-saves to localStorage
    act(() => {
      api.markNoteRead('a-level-physics-aqa', 'al-phys-1-1', '1.1 SI Base Units');
    });
    expect(screen.getByTestId('xp')).toHaveTextContent('25');
    expect(localStorage.getItem(STORAGE_KEY)).toContain('zara@example.com');

    // Change password
    res = await act(async () => api.changeAccountPassword('wrong', 'newpass99'));
    expect(res.ok).toBe(false);
    res = await act(async () => api.changeAccountPassword('password123', 'newpass99'));
    expect(res.ok).toBe(true);

    // Sign out -> returns cleanly to Guest profile without deleting Zara's saved account
    act(() => {
      api.signOutAccount();
    });
    expect(screen.getByTestId('auth')).toHaveTextContent('no');
    expect(screen.getByTestId('name')).toHaveTextContent('Alex');

    // Old password fails; new password restores Zara with her exact 25 XP!
    res = await act(async () =>
      api.signInAccount({ email: 'zara@example.com', password: 'password123' })
    );
    expect(res.ok).toBe(false);

    res = await act(async () =>
      api.signInAccount({ email: 'zara@example.com', password: 'newpass99' })
    );
    expect(res.ok).toBe(true);
    expect(screen.getByTestId('auth')).toHaveTextContent('yes');
    expect(screen.getByTestId('name')).toHaveTextContent('Zara');
    expect(screen.getByTestId('xp')).toHaveTextContent('25');
  });

  it('completes the Register UI form on /register and navigates to Dashboard as the new student', async () => {
    render(
      <AppProvider>
        <MemoryRouter initialEntries={['/register']}>
          <Routes>
            <Route path="/register" element={<AuthPage initialMode="register" />} />
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

    fireEvent.change(screen.getByPlaceholderText(/e\.g\. Maya/i), {
      target: { value: 'Liam' },
    });
    fireEvent.change(screen.getByPlaceholderText(/student@example\.com/i), {
      target: { value: 'liam@school.uk' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Min 6 characters/i), {
      target: { value: 'study2026' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Repeat password/i), {
      target: { value: 'study2026' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Create free account/i }));

    await waitFor(() => {
      expect(screen.getByText(/Hi Liam/i)).toBeInTheDocument();
    });
    // Guest save banner should disappear once signed in!
    expect(screen.queryByText(/Save your revision progress/i)).not.toBeInTheDocument();
  });

  it('persists registered accounts synchronously across full remount and supports Recovery Key password reset', async () => {
    let api!: ReturnType<typeof useApp>;
    const Harness: React.FC = () => {
      api = useApp();
      return (
        <div>
          <span data-testid="name">{api.profile.name}</span>
          <span data-testid="auth">{api.isAuthenticated ? 'yes' : 'no'}</span>
        </div>
      );
    };

    const firstMount = render(
      <AppProvider>
        <Harness />
      </AppProvider>
    );

    const regRes = await act(async () =>
      api.registerAccount({
        name: 'Amara',
        email: 'amara@alevel.uk',
        password: 'initialPassword1',
        yearGroup: 'YEAR 13',
        avatarId: 'wizard',
        keepGuestProgress: false,
      })
    );
    expect(regRes.ok).toBe(true);
    expect(regRes.recoveryKey).toMatch(/^COG-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);

    // Simulate an immediate browser reload by unmounting and mounting a fresh AppProvider
    firstMount.unmount();

    render(
      <AppProvider>
        <Harness />
      </AppProvider>
    );

    // Still signed in as Amara after reload!
    expect(screen.getByTestId('auth')).toHaveTextContent('yes');
    expect(screen.getByTestId('name')).toHaveTextContent('Amara');

    // Sign out and reset forgotten password with Recovery Key
    act(() => {
      api.signOutAccount();
    });
    expect(screen.getByTestId('auth')).toHaveTextContent('no');

    const badReset = await act(async () =>
      api.resetAccountPassword('amara@alevel.uk', 'COG-0000-0000-0000', 'brandNewPass9')
    );
    expect(badReset.ok).toBe(false);
    expect(badReset.code).toBe('INVALID_RECOVERY_KEY');

    const goodReset = await act(async () =>
      api.resetAccountPassword('amara@alevel.uk', regRes.recoveryKey!, 'brandNewPass9')
    );
    expect(goodReset.ok).toBe(true);
    expect(screen.getByTestId('auth')).toHaveTextContent('yes');
    expect(screen.getByTestId('name')).toHaveTextContent('Amara');

    // Sign out and verify the new password actually works
    act(() => {
      api.signOutAccount();
    });
    const signInRes = await act(async () =>
      api.signInAccount({ email: 'amara@alevel.uk', password: 'brandNewPass9' })
    );
    expect(signInRes.ok).toBe(true);
    expect(screen.getByTestId('name')).toHaveTextContent('Amara');
  });
});
