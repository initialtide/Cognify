import React, { useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  LogIn,
  Mail,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  User,
  UserPlus,
} from 'lucide-react';
import { AVATAR_OPTIONS, AvatarId, MonsterAvatar } from '../artwork/Avatars';
import { getPasswordStrength } from '../../services/authService';
import { useApp } from '../../store/AppContext';

export type AuthMode = 'signin' | 'register' | 'reset' | 'sync';

export interface AuthSuccessMeta {
  mode: AuthMode;
  needsOnboarding?: boolean;
  recoveryKey?: string;
}

interface AuthFormCardProps {
  initialMode?: AuthMode;
  onSuccess?: (meta: AuthSuccessMeta) => void;
  onStartGuidedOnboarding?: () => void;
  defaultRunOnboarding?: boolean;
  titleId?: string;
  compact?: boolean;
}

const YEAR_OPTIONS = ['YEAR 10', 'YEAR 11', 'YEAR 12', 'YEAR 13', 'PRIVATE CANDIDATE'];

export const AuthFormCard: React.FC<AuthFormCardProps> = ({
  initialMode = 'signin',
  onSuccess,
  onStartGuidedOnboarding,
  defaultRunOnboarding = false,
  titleId = 'auth-dialog-title',
  compact = false,
}) => {
  const {
    accounts,
    state,
    registerAccount,
    signInAccount,
    resetAccountPassword,
    applySyncCode,
  } = useApp();

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recoveryKeyInput, setRecoveryKeyInput] = useState('');
  const [yearGroup, setYearGroup] = useState('YEAR 12');
  const [avatarId, setAvatarId] = useState<AvatarId>('snorkel');
  const [keepGuestProgress, setKeepGuestProgress] = useState(true);
  const [runOnboardingNext, setRunOnboardingNext] = useState(defaultRunOnboarding);
  const [showPassword, setShowPassword] = useState(false);

  const [syncCode, setSyncCode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [errorCode, setErrorCode] = useState<string | undefined>(undefined);
  const [successMsg, setSuccessMsg] = useState('');

  const strength = getPasswordStrength(password);
  const passwordsMatch = Boolean(password && confirmPassword && password === confirmPassword);

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setError('');
    setErrorCode(undefined);
    setSuccessMsg('');
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrorCode(undefined);
    setSuccessMsg('');
    setSubmitting(true);
    try {
      const res = await signInAccount({ email, password });
      if (!res.ok) {
        setError(res.error ?? 'Sign in failed.');
        setErrorCode(res.code);
        return;
      }
      setSuccessMsg('Signed in! Your saved progress is loaded.');
      onSuccess?.({
        mode: 'signin',
        needsOnboarding: res.needsOnboarding,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrorCode(undefined);
    setSuccessMsg('');
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter both fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await registerAccount({
        name,
        email,
        password,
        yearGroup,
        avatarId,
        keepGuestProgress,
        runOnboardingNext,
      });
      if (!res.ok) {
        setError(res.error ?? 'Registration failed.');
        setErrorCode(res.code);
        return;
      }
      setSuccessMsg('Account created! Your progress will now auto-save.');
      onSuccess?.({
        mode: 'register',
        needsOnboarding: res.needsOnboarding,
        recoveryKey: res.recoveryKey,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrorCode(undefined);
    setSuccessMsg('');
    if (password !== confirmPassword) {
      setError('New passwords do not match. Please check both fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await resetAccountPassword(email, recoveryKeyInput, password);
      if (!res.ok) {
        setError(res.error ?? 'Could not reset password.');
        setErrorCode(res.code);
        return;
      }
      setSuccessMsg('Password updated! You are now signed back in.');
      onSuccess?.({ mode: 'reset' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleSyncRestore = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrorCode(undefined);
    setSuccessMsg('');
    const res = applySyncCode(syncCode);
    if (!res.ok) {
      setError(res.error ?? 'Invalid sync code.');
      return;
    }
    setSuccessMsg('Study progress restored from your Sync Code!');
    setSyncCode('');
    onSuccess?.({ mode: 'sync' });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px 13px',
    borderRadius: 11,
    border: '1.5px solid var(--border-card)',
    backgroundColor: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    fontSize: '0.96rem',
  };

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '10px 10px',
    borderRadius: 10,
    border: active ? '1.5px solid var(--color-blue-500)' : '1.5px solid transparent',
    backgroundColor: active ? 'var(--bg-elevated)' : 'transparent',
    color: active ? 'var(--color-blue-600)' : 'var(--text-secondary)',
    fontWeight: 700,
    fontSize: '0.88rem',
    boxShadow: active ? '0 2px 0 var(--border-lip)' : 'none',
  });

  return (
    <div style={{ display: 'grid', gap: compact ? 16 : 20 }}>
      <div>
        <h2
          id={titleId}
          className="font-heading"
          style={{ fontSize: compact ? '1.5rem' : '1.85rem', lineHeight: 1.2 }}
        >
          {mode === 'signin'
            ? 'Welcome back to Cognify'
            : mode === 'register'
              ? 'Create your free account'
              : mode === 'reset'
                ? 'Reset your password'
                : 'Restore from Sync Code'}
        </h2>
        <p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: '0.93rem', lineHeight: 1.5 }}>
          {mode === 'signin'
            ? 'Sign in to load your saved courses, XP, streaks, quiz scores, and flashcards.'
            : mode === 'register'
              ? 'Register in seconds to save your revision progress automatically.'
              : mode === 'reset'
                ? 'Enter your email and Recovery Key (COG-XXXX-XXXX-XXXX) to set a new password.'
                : 'Paste a Sync Code copied from another browser or device to transfer your progress.'}
        </p>
      </div>

      {/* Mode Switcher Tabs (hidden in Reset sub-view) */}
      {mode !== 'reset' ? (
        <div
          role="tablist"
          aria-label="Account access mode"
          style={{
            display: 'flex',
            gap: 6,
            padding: 5,
            borderRadius: 13,
            backgroundColor: 'var(--bg-sunken)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'signin'}
            style={tabBtnStyle(mode === 'signin')}
            onClick={() => switchMode('signin')}
          >
            <LogIn size={15} /> Sign in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'register'}
            style={tabBtnStyle(mode === 'register')}
            onClick={() => switchMode('register')}
          >
            <UserPlus size={15} /> Register
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'sync'}
            style={tabBtnStyle(mode === 'sync')}
            onClick={() => switchMode('sync')}
          >
            <KeyRound size={15} /> Sync Code
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => switchMode('signin')}
          style={{
            border: 0,
            background: 'transparent',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'var(--color-blue-600)',
            fontWeight: 700,
            fontSize: '0.88rem',
            justifySelf: 'start',
          }}
        >
          <ArrowLeft size={15} /> Back to Sign in
        </button>
      )}

      {error && (
        <div
          role="alert"
          style={{
            display: 'grid',
            gap: 8,
            padding: '12px 14px',
            borderRadius: 12,
            backgroundColor: 'rgba(239, 68, 68, 0.09)',
            border: '1px solid rgba(239, 68, 68, 0.32)',
            color: 'var(--color-red-600)',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
            <AlertCircle size={17} style={{ flexShrink: 0, marginTop: 1 }} />
            <span>{error}</span>
          </div>
          {mode === 'signin' && errorCode === 'EMAIL_NOT_FOUND' && email.trim() && (
            <button
              type="button"
              onClick={() => {
                setName((prev) => prev || email.split('@')[0]?.replace(/[^a-zA-Z0-9 ]/g, ' ') || '');
                switchMode('register');
              }}
              style={{
                justifySelf: 'start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 12px',
                borderRadius: 8,
                border: '1px solid var(--color-blue-300, var(--color-blue-500))',
                backgroundColor: 'var(--bg-elevated)',
                color: 'var(--color-blue-600)',
                fontWeight: 800,
                fontSize: '0.82rem',
              }}
            >
              Create free account for {email.trim()} <ArrowRight size={13} />
            </button>
          )}
          {mode === 'signin' && errorCode === 'WRONG_PASSWORD' && (
            <button
              type="button"
              onClick={() => switchMode('reset')}
              style={{
                justifySelf: 'start',
                border: 0,
                background: 'transparent',
                padding: 0,
                color: 'var(--color-blue-600)',
                fontWeight: 800,
                fontSize: '0.82rem',
                textDecoration: 'underline',
              }}
            >
              Forgot password? Reset with Recovery Key
            </button>
          )}
        </div>
      )}

      {successMsg && (
        <div
          role="status"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            padding: '11px 14px',
            borderRadius: 12,
            backgroundColor: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: 'var(--color-green-700)',
            fontSize: '0.88rem',
            fontWeight: 700,
          }}
        >
          <CheckCircle2 size={17} style={{ flexShrink: 0 }} />
          <span>{successMsg}</span>
        </div>
      )}

      {/* SIGN IN FORM */}
      {mode === 'signin' && (
        <form onSubmit={handleSignIn} style={{ display: 'grid', gap: 14 }}>
          {accounts.length > 0 && (
            <div
              style={{
                padding: '12px 14px',
                borderRadius: 12,
                backgroundColor: 'var(--bg-sunken)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: 8,
                }}
              >
                Saved accounts on this browser — tap to fill
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {accounts.map((acc) => {
                  const prof = state.profiles.find((p) => p.id === acc.profileId);
                  const selected = email.trim().toLowerCase() === acc.email.toLowerCase();
                  return (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => {
                        setEmail(acc.email);
                        setError('');
                        setErrorCode(undefined);
                        passwordInputRef.current?.focus();
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 12px',
                        borderRadius: 999,
                        border: selected
                          ? '1.5px solid var(--color-blue-500)'
                          : '1px solid var(--border-card)',
                        backgroundColor: selected ? 'var(--color-blue-50)' : 'var(--bg-elevated)',
                        color: selected ? 'var(--color-blue-700)' : 'var(--text-primary)',
                        fontSize: '0.83rem',
                        fontWeight: 700,
                      }}
                    >
                      <MonsterAvatar avatarId={prof?.avatarId ?? 'snorkel'} size={22} />
                      <span>{prof?.name ?? acc.email}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.88rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Mail size={14} /> Email address
            </span>
            <input
              type="email"
              autoComplete="email"
              required
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </label>

          <div style={{ display: 'grid', gap: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <label
                htmlFor={`${titleId}-signin-password`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: '0.88rem' }}
              >
                <Lock size={14} /> Password
              </label>
              <button
                type="button"
                onClick={() => switchMode('reset')}
                style={{
                  border: 0,
                  background: 'transparent',
                  padding: 0,
                  color: 'var(--color-blue-600)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                }}
              >
                Forgot password?
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <input
                ref={passwordInputRef}
                id={`${titleId}-signin-password`}
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: 44 }}
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((v) => !v)}
                style={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 0,
                  background: 'transparent',
                  padding: 6,
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                }}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="tactile-btn tactile-btn--solid-blue"
            style={{ width: '100%', marginTop: 4 }}
          >
            <LogIn size={16} /> {submitting ? 'Signing in...' : 'Sign in'}
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              flexWrap: 'wrap',
              fontSize: '0.87rem',
              color: 'var(--text-muted)',
            }}
          >
            <span>New to Cognify?</span>
            {onStartGuidedOnboarding ? (
              <button
                type="button"
                onClick={onStartGuidedOnboarding}
                style={{
                  border: 0,
                  background: 'transparent',
                  color: 'var(--color-blue-600)',
                  fontWeight: 800,
                  padding: 0,
                  textDecoration: 'underline',
                }}
              >
                Start guided setup &amp; register
              </button>
            ) : (
              <button
                type="button"
                onClick={() => switchMode('register')}
                style={{
                  border: 0,
                  background: 'transparent',
                  color: 'var(--color-blue-600)',
                  fontWeight: 800,
                  padding: 0,
                  textDecoration: 'underline',
                }}
              >
                Create a free account
              </button>
            )}
          </div>
        </form>
      )}

      {/* REGISTER FORM */}
      {mode === 'register' && (
        <form onSubmit={handleRegister} style={{ display: 'grid', gap: 13 }}>
          <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <User size={14} /> Display name
            </span>
            <input
              type="text"
              autoComplete="name"
              required
              placeholder="e.g. Maya"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </label>

          <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Mail size={14} /> Email address
            </span>
            <input
              type="email"
              autoComplete="email"
              required
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
            <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Lock size={14} /> Password
              </span>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  minLength={6}
                  placeholder="Min 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingRight: 40 }}
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((v) => !v)}
                  style={{
                    position: 'absolute',
                    right: 6,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: 0,
                    background: 'transparent',
                    padding: 5,
                    color: 'var(--text-muted)',
                    display: 'inline-flex',
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </label>

            <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
              <span>Confirm password</span>
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyle}
              />
            </label>
          </div>

          {/* Live Password Strength & Match Feedback */}
          {(password.length > 0 || confirmPassword.length > 0) && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', fontSize: '0.78rem', fontWeight: 700 }}>
              <span style={{ color: strength.color }}>{strength.label}</span>
              {confirmPassword.length > 0 && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    color: passwordsMatch ? 'var(--color-green-600)' : 'var(--color-red-600)',
                  }}
                >
                  {passwordsMatch ? (
                    <>
                      <Check size={13} strokeWidth={3} /> Passwords match
                    </>
                  ) : (
                    'Passwords do not match'
                  )}
                </span>
              )}
            </div>
          )}

          {/* Tactile Year Group Pills (replaces native <select> so modals never flicker) */}
          <div style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontWeight: 700, fontSize: '0.86rem' }}>Year group</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {YEAR_OPTIONS.map((yr) => {
                const active = yearGroup === yr;
                return (
                  <button
                    key={yr}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setYearGroup(yr)}
                    style={{
                      padding: '6px 11px',
                      borderRadius: 999,
                      border: active
                        ? '1.5px solid var(--color-blue-500)'
                        : '1px solid var(--border-card)',
                      backgroundColor: active ? 'var(--color-blue-500)' : 'var(--bg-elevated)',
                      color: active ? '#ffffff' : 'var(--text-secondary)',
                      fontWeight: 800,
                      fontSize: '0.76rem',
                    }}
                  >
                    {yr}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Avatar Picker */}
          <div style={{ display: 'grid', gap: 6 }}>
            <span style={{ fontWeight: 700, fontSize: '0.86rem' }}>Choose your mascot</span>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {AVATAR_OPTIONS.map((opt) => {
                const selected = avatarId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-label={opt.label}
                    aria-pressed={selected}
                    onClick={() => setAvatarId(opt.id)}
                    style={{
                      padding: 4,
                      borderRadius: 12,
                      border: selected
                        ? '2px solid var(--color-blue-500)'
                        : '1.5px solid var(--border-card)',
                      backgroundColor: selected ? 'var(--color-blue-50)' : 'var(--bg-elevated)',
                      display: 'inline-flex',
                    }}
                  >
                    <MonsterAvatar avatarId={opt.id} size={36} />
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 8 }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                padding: '9px 12px',
                borderRadius: 10,
                backgroundColor: 'var(--bg-sunken)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={keepGuestProgress}
                onChange={(e) => setKeepGuestProgress(e.target.checked)}
              />
              <span>Save my current study progress, XP &amp; enrolled courses into this account</span>
            </label>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                padding: '9px 12px',
                borderRadius: 10,
                backgroundColor: 'var(--color-blue-50)',
                border: '1px solid var(--color-blue-200)',
                color: '#0b3c61',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={runOnboardingNext}
                onChange={(e) => setRunOnboardingNext(e.target.checked)}
              />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <Sparkles size={14} /> Pick my IGCSE / A-Level subjects &amp; daily goal next
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="tactile-btn tactile-btn--solid-blue"
            style={{ width: '100%', marginTop: 2 }}
          >
            <UserPlus size={16} /> {submitting ? 'Creating account...' : 'Create free account'}
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
            }}
          >
            <ShieldCheck size={14} />
            <span>Saved instantly with salted PBKDF2-SHA256 hashing &amp; automatic Recovery Key.</span>
          </div>
        </form>
      )}

      {/* PASSWORD RESET FORM */}
      {mode === 'reset' && (
        <form onSubmit={handlePasswordReset} style={{ display: 'grid', gap: 13 }}>
          <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Mail size={14} /> Account email address
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="student@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </label>

          <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <KeyRound size={14} /> Recovery Key
            </span>
            <input
              type="text"
              required
              placeholder="COG-XXXX-XXXX-XXXX"
              value={recoveryKeyInput}
              onChange={(e) => setRecoveryKeyInput(e.target.value)}
              style={{ ...inputStyle, fontFamily: 'monospace', letterSpacing: '0.04em' }}
            />
          </label>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
            <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Lock size={14} /> New password
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="Min 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
            </label>

            <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
              <span>Confirm new password</span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="Repeat new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyle}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="tactile-btn tactile-btn--solid-blue"
            style={{ width: '100%' }}
          >
            <RotateCcw size={16} /> {submitting ? 'Updating password...' : 'Reset password & sign in'}
          </button>
        </form>
      )}

      {/* SYNC CODE RESTORE */}
      {mode === 'sync' && (
        <form onSubmit={handleSyncRestore} style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.88rem' }}>
            <span>Paste your Cognify Sync Code</span>
            <textarea
              rows={4}
              required
              placeholder="COGNIFY-SAVE-V1:eyJ2IjoxLC..."
              value={syncCode}
              onChange={(e) => setSyncCode(e.target.value)}
              style={{
                ...inputStyle,
                fontFamily: 'monospace',
                fontSize: '0.82rem',
                resize: 'vertical',
              }}
            />
          </label>
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Generate a Sync Code anytime in <strong>Account → Sign In &amp; Save Sync</strong> to move your saved courses, XP, streaks, and flashcards onto another laptop, phone, or browser.
          </p>
          <button type="submit" className="tactile-btn tactile-btn--solid-blue" style={{ width: '100%' }}>
            <KeyRound size={16} /> Restore saved progress
          </button>
        </form>
      )}
    </div>
  );
};
