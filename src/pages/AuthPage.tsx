import React from 'react';
import { ArrowLeft, CheckCircle2, Cloud, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CognitoLogo } from '../components/artwork/CognitoLogo';
import { AuthFormCard, AuthMode } from '../components/auth/AuthFormCard';
import { useApp } from '../store/AppContext';

interface AuthPageProps {
  initialMode?: AuthMode;
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'signin' }) => {
  const navigate = useNavigate();
  const { isAuthenticated, profile } = useApp();

  return (
    <main className="page-container" style={{ maxWidth: 960 }}>
      <div style={{ marginBottom: 22 }}>
        <Link
          to="/dashboard"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontWeight: 700,
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
          }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
          alignItems: 'start',
        }}
      >
        {/* Left: Auth Form Card */}
        <section className="cognito-card" style={{ padding: '36px 36px' }}>
          <AuthFormCard
            key={initialMode}
            initialMode={initialMode}
            titleId="auth-page-title"
            onStartGuidedOnboarding={() => navigate('/onboarding')}
            onSuccess={(meta) =>
              navigate(meta.mode === 'register' && meta.needsOnboarding ? '/onboarding' : '/dashboard')
            }
          />
        </section>

        {/* Right: Why Save Your Account Info Card */}
        <aside
          className="cognito-card cognito-grid-bg"
          style={{ padding: '36px 36px', display: 'grid', gap: 20 }}
        >
          <div>
            <CognitoLogo />
            <h3 className="font-heading" style={{ fontSize: '1.35rem', marginTop: 14 }}>
              Your revision, safely saved.
            </h3>
            <p style={{ margin: '6px 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              100% free IGCSE &amp; A-Level notes, quizzes, flashcards, and exam practice — with automatic progress saving.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            {[
              {
                icon: <CheckCircle2 size={18} color="var(--color-green-600)" />,
                title: 'Auto-saves every lesson & quiz',
                desc: 'Your notes read, quiz marks, flashcard confidence, XP, and daily streaks save automatically under your account.',
              },
              {
                icon: <Cloud size={18} color="var(--color-blue-500)" />,
                title: 'Switch devices with Sync Codes',
                desc: 'Copy your compact Sync Code or link optional Supabase Cloud Sync to keep laptop and phone in sync.',
              },
              {
                icon: <ShieldCheck size={18} color="var(--color-purple-600, #7c3aed)" />,
                title: 'Private & password protected',
                desc: 'Each student gets their own salted PBKDF2-SHA256 protected account — ideal on shared home or school devices.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: 11,
                  padding: '11px 13px',
                  borderRadius: 12,
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-heading)' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isAuthenticated ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                padding: '10px 14px',
                borderRadius: 12,
                backgroundColor: 'var(--color-green-100)',
                color: 'var(--color-green-700)',
                fontWeight: 700,
                fontSize: '0.86rem',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Sparkles size={15} /> Signed in as {profile.name}
              </span>
              <Link to="/dashboard" style={{ textDecoration: 'underline', fontWeight: 800 }}>
                Open Dashboard
              </Link>
            </div>
          ) : (
            <Link
              to="/onboarding"
              className="tactile-btn tactile-btn--sm"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={15} /> New here? Start 1-minute guided setup
            </Link>
          )}
        </aside>
      </div>
    </main>
  );
};
