import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  LogIn,
  Mail,
  ShieldCheck,
  User,
  UserPlus,
} from 'lucide-react';
import { AVATAR_OPTIONS, AvatarId, MonsterAvatar } from '../artwork/Avatars';
import { useApp } from '../../store/AppContext';

export type AuthMode = 'signin' | 'register' | 'sync';

interface AuthFormCardProps {
  initialMode?: AuthMode;
  onSuccess?: () => void;
  titleId?: string;
  compact?: boolean;
}

const YEAR_OPTIONS = [
  'YEAR 10',
  'YEAR 11',
  'YEAR 12',
  'YEAR 13',
  'IGCSE STUDENT',
  'A-LEVEL STUDENT',
  'PRIVATE CANDIDATE',
];

export const AuthFormCard: React.FC<AuthFormCardProps> = ({
  initialMode = 'signin',
  onSuccess,
  titleId = 'auth-dialog-title',
  compact = false,
}) => {
  const { accounts, state, registerAccount, signInAccount, applySyncCode } = useApp();

  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [yearGroup, setYearGroup] = useState('YEAR 12');
  const [avatarId, setAvatarId] = useState<AvatarId>('snorkel');
  const [keepGuestProgress, setKeepGuestProgress] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [syncCode, setSyncCode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setError('');
    setSuccessMsg('');
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setSubmitting(true);
    try {
      const res = await signInAccount({ email, password });
      if (!res.ok) {
        setError(res.error ?? 'Sign in failed.');
        return;
      }
      setSuccessMsg('Signed in! Your saved progress is loaded.');
      onSuccess?.();
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
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
      });
      if (!res.ok) {
        setError(res.error ?? 'Registration failed.');
        return;
      }
      setSuccessMsg('Account created! Your progress will now auto-save.');
      onSuccess?.();
    } finally {
      setSubmitting(false);
    }
  };

  const handleSyncRestore = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    const res = applySyncCode(syncCode);
    if (!res.ok) {
      setError(res.error ?? 'Invalid sync code.');
      return;
    }
    setSuccessMsg('Study progress restored from your Sync Code!');
    setSyncCode('');
    onSuccess?.();
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 10,
    border: '1.5px solid var(--border-card)',
    backgroundColor: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
  };

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: '9px 10px',
    borderRadius: 10,
    border: active ? '1.5px solid var(--color-blue-500)' : '1.5px solid transparent',
    backgroundColor: active ? 'var(--bg-elevated)' : 'transparent',
    color: active ? 'var(--color-blue-600)' : 'var(--text-secondary)',
    fontWeight: 700,
    fontSize: '0.88rem',
    boxShadow: active ? '0 2px 0 var(--border-lip)' : 'none',
  });

  return (
    <div style={{ display: 'grid', gap: compact ? 14 : 18 }}>
      <div>
        <h2
          id={titleId}
          className="font-heading"
          style={{ fontSize: compact ? '1.45rem' : '1.75rem', lineHeight: 1.2 }}
        >
          {mode === 'signin'
            ? 'Welcome back to Cognify'
            : mode === 'register'
              ? 'Create your free account'
              : 'Restore from Sync Code'}
        </h2>
        <p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
          {mode === 'signin'
            ? 'Sign in to load your saved courses, XP, streaks, quiz scores, and flashcards.'
            : mode === 'register'
              ? 'Register in seconds to save your revision progress automatically.'
              : 'Paste a Sync Code copied from another browser or device to transfer your progress.'}
        </p>
      </div>

      {/* Mode Switcher Tabs */}
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

      {error && (
        <div
          role="alert"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 9,
            padding: '10px 13px',
            borderRadius: 11,
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            color: 'var(--color-red-600)',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          <AlertCircle size={17} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>{error}</span>
        </div>
      )}

      {successMsg && (
        <div
          role="status"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            padding: '10px 13px',
            borderRadius: 11,
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
        <form onSubmit={handleSignIn} style={{ display: 'grid', gap: 13 }}>
          {accounts.length > 0 && (
            <div
              style={{
                padding: '10px 12px',
                borderRadius: 11,
                backgroundColor: 'var(--bg-sunken)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 7 }}>
                Saved accounts on this browser
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {accounts.map((acc) => {
                  const prof = state.profiles.find((p) => p.id === acc.profileId);
                  return (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => {
                        setEmail(acc.email);
                        setError('');
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 7,
                        padding: '5px 10px',
                        borderRadius: 999,
                        border: '1px solid var(--border-card)',
                        backgroundColor: 'var(--bg-elevated)',
                        fontSize: '0.82rem',
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

          <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.88rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Lock size={14} /> Password
            </span>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: 42 }}
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
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="tactile-btn tactile-btn--solid-blue"
            style={{ width: '100%', marginTop: 4 }}
          >
            <LogIn size={16} /> {submitting ? 'Signing in...' : 'Sign in'}
          </button>

          <div style={{ textAlign: 'center', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            New to Cognify?{' '}
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
          </div>
        </form>
      )}

      {/* REGISTER FORM */}
      {mode === 'register' && (
        <form onSubmit={handleRegister} style={{ display: 'grid', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
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
              <span>Year group</span>
              <select
                value={yearGroup}
                onChange={(e) => setYearGroup(e.target.value)}
                style={inputStyle}
              >
                {YEAR_OPTIONS.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </label>
          </div>

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
                  style={{ ...inputStyle, paddingRight: 38 }}
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

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              padding: '9px 12px',
              borderRadius: 10,
              backgroundColor: 'var(--bg-sunken)',
              fontSize: '0.85rem',
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
            <span>Passwords are salted &amp; hashed with PBKDF2-SHA256 locally in your browser.</span>
          </div>
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
            Generate a Sync Code anytime in <strong>Account → Account Security &amp; Sync</strong> to move your saved courses, XP, streaks, and flashcards onto another laptop, phone, or browser.
          </p>
          <button type="submit" className="tactile-btn tactile-btn--solid-blue" style={{ width: '100%' }}>
            <KeyRound size={16} /> Restore saved progress
          </button>
        </form>
      )}
    </div>
  );
};
