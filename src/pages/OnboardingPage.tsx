import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Eye,
  EyeOff,
  Flame,
  GraduationCap,
  Lock,
  LogIn,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  User,
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AVATAR_OPTIONS, AvatarId, MonsterAvatar } from '../components/artwork/Avatars';
import { CognitoLogo } from '../components/artwork/CognitoLogo';
import { SubjectIcon } from '../components/artwork/SubjectIcons';
import { AuthFormCard, AuthMode, AuthSuccessMeta } from '../components/auth/AuthFormCard';
import { ALL_COURSES } from '../data/catalog';
import { getPasswordStrength, validateEmail, validatePassword } from '../services/authService';
import { useApp } from '../store/AppContext';
import { CourseDefinition } from '../types/curriculum';
import { OnboardingQualification } from '../types/user';

interface OnboardingPageProps {
  onOpenAuthModal?: (mode: AuthMode) => void;
}

interface SubjectGroup {
  key: string;
  qualification: 'igcse' | 'a-level' | 'gcse';
  qualificationLabel: string;
  subjectSlug: string;
  subjectName: string;
  icon: CourseDefinition['icon'];
  variants: CourseDefinition[];
}

const QUAL_OPTIONS: {
  id: OnboardingQualification;
  title: string;
  badge: string;
  description: string;
  defaultYear: string;
}[] = [
  {
    id: 'igcse',
    title: 'IGCSE',
    badge: '8 FULL COURSES',
    description: 'Cambridge CIE & Edexcel International — Maths, Sciences, Business, CS, Economics & English.',
    defaultYear: 'YEAR 11',
  },
  {
    id: 'a-level',
    title: 'A-Level',
    badge: '5 FULL COURSES',
    description: 'Full A-Level depth — Maths, Physics, Chemistry, Biology & Psychology with mark-scheme rubrics.',
    defaultYear: 'YEAR 12',
  },
  {
    id: 'both',
    title: 'IGCSE + A-Level',
    badge: 'MIX & MATCH',
    description: 'Studying across both levels or bridging from IGCSE straight into Sixth Form A-Levels.',
    defaultYear: 'YEAR 12',
  },
  {
    id: 'gcse',
    title: 'GCSE',
    badge: 'UK SPECS',
    description: 'AQA & Edexcel GCSE Maths, Biology, Chemistry, Physics & Combined Science.',
    defaultYear: 'YEAR 11',
  },
];

const YEAR_CHIPS = ['YEAR 10', 'YEAR 11', 'YEAR 12', 'YEAR 13', 'PRIVATE CANDIDATE'];

const GOAL_OPTIONS: {
  xp: 100 | 150 | 250 | 500;
  label: string;
  minutes: string;
  tagline: string;
  recommended?: boolean;
}[] = [
  { xp: 100, label: 'Casual', minutes: '~10 mins / day', tagline: 'Keep your streak alive on busy days' },
  { xp: 150, label: 'Regular', minutes: '~15 mins / day', tagline: 'Steady progress across all topics', recommended: true },
  { xp: 250, label: 'Serious', minutes: '~25 mins / day', tagline: 'Build strong exam mastery every week' },
  { xp: 500, label: 'Exam Sprint', minutes: '~45 mins / day', tagline: 'High-intensity mock & past-paper prep' },
];

function buildSubjectGroups(): SubjectGroup[] {
  const map = new Map<string, SubjectGroup>();
  for (const c of ALL_COURSES) {
    if (c.qualification !== 'igcse' && c.qualification !== 'a-level' && c.qualification !== 'gcse') {
      continue;
    }
    const key = `${c.qualification}::${c.subjectSlug}`;
    const existing = map.get(key);
    if (existing) {
      existing.variants.push(c);
    } else {
      map.set(key, {
        key,
        qualification: c.qualification,
        qualificationLabel: c.qualificationLabel,
        subjectSlug: c.subjectSlug,
        subjectName: c.subjectName,
        icon: c.icon,
        variants: [c],
      });
    }
  }
  return Array.from(map.values());
}

function getDefaultCourseIdsForQual(
  qual: OnboardingQualification,
  groups: SubjectGroup[]
): string[] {
  const matching = groups.filter((g) =>
    qual === 'both'
      ? g.qualification === 'igcse' || g.qualification === 'a-level'
      : g.qualification === qual
  );
  // Pre-select up to 4 core subjects cleanly
  const preferredOrder = ['maths', 'physics', 'chemistry', 'biology', 'economics', 'computer-science', 'business', 'psychology'];
  const sorted = [...matching].sort((a, b) => {
    const ai = preferredOrder.indexOf(a.subjectSlug);
    const bi = preferredOrder.indexOf(b.subjectSlug);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
  return sorted.slice(0, 4).map((g) => g.variants[0].id);
}

export const OnboardingPage: React.FC<OnboardingPageProps> = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { profile, isAuthenticated, completeOnboarding, updateProfile } = useApp();

  const allGroups = useMemo(() => buildSubjectGroups(), []);

  const modeParam = searchParams.get('mode');
  const initialViewMode: 'setup' | 'signin' =
    modeParam === 'signin' && !isAuthenticated ? 'signin' : 'setup';
  const [viewMode, setViewMode] = useState<'setup' | 'signin'>(initialViewMode);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [qualification, setQualification] = useState<OnboardingQualification>(
    profile.selectedQualification ?? 'igcse'
  );
  const [yearGroup, setYearGroup] = useState<string>(profile.yearGroup || 'YEAR 11');

  // Map of subjectGroupKey -> chosen variant courseId
  const [selectedByGroup, setSelectedByGroup] = useState<Record<string, string>>(() => {
    const initialIds = getDefaultCourseIdsForQual(
      profile.selectedQualification ?? 'igcse',
      allGroups
    );
    const next: Record<string, string> = {};
    for (const cid of initialIds) {
      const grp = allGroups.find((g) => g.variants.some((v) => v.id === cid));
      if (grp) next[grp.key] = cid;
    }
    return next;
  });

  const [dailyXpGoal, setDailyXpGoal] = useState<100 | 150 | 250 | 500>(
    profile.dailyXpGoal ?? 150
  );
  const [avatarId, setAvatarId] = useState<AvatarId>(profile.avatarId ?? 'snorkel');
  const [displayName, setDisplayName] = useState<string>(
    profile.isGuest && profile.name === 'Alex' ? '' : profile.name
  );

  // Step 4 optional account registration fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');
  const [errorCode, setErrorCode] = useState<string | undefined>(undefined);
  const [submitting, setSubmitting] = useState(false);

  // Keep viewMode synchronized if the user navigates between /onboarding and /onboarding?mode=signin
  useEffect(() => {
    if (modeParam === 'signin' && !isAuthenticated) {
      setViewMode('signin');
    } else if (modeParam !== 'signin') {
      setViewMode('setup');
    }
  }, [modeParam, isAuthenticated]);

  // Keep Step 3 personalization synced whenever a different profile becomes active
  useEffect(() => {
    setDisplayName(profile.isGuest && profile.name === 'Alex' ? '' : profile.name);
    setYearGroup(profile.yearGroup || 'YEAR 11');
    setAvatarId(profile.avatarId ?? 'snorkel');
    setDailyXpGoal(profile.dailyXpGoal ?? 150);
  }, [profile.id, isAuthenticated]);

  const switchViewMode = (next: 'setup' | 'signin') => {
    setViewMode(next);
    setError('');
    setErrorCode(undefined);
    if (next === 'signin') {
      setSearchParams({ mode: 'signin' }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const handleInlineAuthSuccess = (meta: AuthSuccessMeta) => {
    if (meta.mode === 'register' && meta.needsOnboarding) {
      setStep(1);
      switchViewMode('setup');
      return;
    }
    navigate('/dashboard');
  };

  const handleSkip = () => {
    if (isAuthenticated && !profile.onboardingCompleted) {
      updateProfile((p) => ({ ...p, onboardingCompleted: true }));
    }
    navigate('/dashboard');
  };

  const visibleGroups = useMemo(() => {
    return allGroups.filter((g) =>
      qualification === 'both'
        ? g.qualification === 'igcse' || g.qualification === 'a-level'
        : g.qualification === qualification
    );
  }, [allGroups, qualification]);

  const selectedCourseIds = useMemo(() => {
    const visibleKeys = new Set(visibleGroups.map((g) => g.key));
    return Object.entries(selectedByGroup)
      .filter(([key, cid]) => visibleKeys.has(key) && Boolean(cid))
      .map(([, cid]) => cid);
  }, [selectedByGroup, visibleGroups]);

  const handleSelectQualification = (q: OnboardingQualification) => {
    setQualification(q);
    const opt = QUAL_OPTIONS.find((o) => o.id === q);
    if (opt) setYearGroup(opt.defaultYear);

    const defaults = getDefaultCourseIdsForQual(q, allGroups);
    const next: Record<string, string> = {};
    for (const cid of defaults) {
      const grp = allGroups.find((g) => g.variants.some((v) => v.id === cid));
      if (grp) next[grp.key] = cid;
    }
    setSelectedByGroup(next);
    setError('');
  };

  const toggleGroup = (grp: SubjectGroup) => {
    setError('');
    setSelectedByGroup((prev) => {
      const copy = { ...prev };
      if (copy[grp.key]) {
        delete copy[grp.key];
      } else {
        copy[grp.key] = grp.variants[0].id;
      }
      return copy;
    });
  };

  const pickBoardVariant = (grp: SubjectGroup, courseId: string) => {
    setSelectedByGroup((prev) => ({ ...prev, [grp.key]: courseId }));
  };

  const selectAllVisible = () => {
    const next: Record<string, string> = {};
    for (const g of visibleGroups) {
      next[g.key] = selectedByGroup[g.key] ?? g.variants[0].id;
    }
    setSelectedByGroup(next);
    setError('');
  };

  const goNext = () => {
    setError('');
    if (step === 2 && selectedCourseIds.length === 0) {
      setError('Pick at least one subject to build your dashboard!');
      return;
    }
    if (step < 4) {
      setStep((s) => (s + 1) as 1 | 2 | 3 | 4);
    }
  };

  const goBack = () => {
    setError('');
    if (step > 1) {
      setStep((s) => (s - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleFinishWithAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setErrorCode(undefined);
    const emailErr = validateEmail(email);
    if (emailErr) {
      setError(emailErr);
      return;
    }
    const pwErr = validatePassword(password);
    if (pwErr) {
      setError(pwErr);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please check both fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await completeOnboarding({
        name: displayName.trim(),
        yearGroup,
        avatarId,
        dailyXpGoal,
        selectedQualification: qualification,
        enrolledCourseIds: selectedCourseIds,
        account: { email, password },
      });
      if (!res.ok) {
        setError(res.error ?? 'Could not create account.');
        setErrorCode(res.code);
        return;
      }
      navigate('/dashboard');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFinishAsGuestOrSignedIn = async () => {
    setError('');
    setSubmitting(true);
    try {
      const res = await completeOnboarding({
        name: displayName.trim() || profile.name || 'Alex',
        yearGroup,
        avatarId,
        dailyXpGoal,
        selectedQualification: qualification,
        enrolledCourseIds: selectedCourseIds,
      });
      if (!res.ok) {
        setError(res.error ?? 'Could not save setup.');
        return;
      }
      navigate('/dashboard');
    } finally {
      setSubmitting(false);
    }
  };

  const progressPercent = (step / 4) * 100;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 10,
    border: '1.5px solid var(--border-card)',
    backgroundColor: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Clean Sticky Onboarding Progress Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="wide-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
            minHeight: 62,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <CognitoLogo />
            <span
              className="hide-mobile"
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                padding: '4px 11px',
                borderRadius: 999,
                backgroundColor: 'var(--bg-sunken)',
                color: 'var(--text-secondary)',
              }}
            >
              {viewMode === 'signin' ? 'Sign in' : `Step ${step} of 4`}
            </span>
          </div>

          {/* Animated Progress Track (shown during 4-step setup) */}
          {viewMode === 'setup' ? (
            <div
              aria-label={`Onboarding progress: step ${step} of 4`}
              style={{
                flex: '1 1 180px',
                maxWidth: 320,
                height: 10,
                borderRadius: 999,
                backgroundColor: 'var(--bg-sunken)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  borderRadius: 999,
                  backgroundColor: 'var(--color-blue-500)',
                  transition: 'width 240ms ease',
                }}
              />
            </div>
          ) : (
            <div style={{ flex: '1 1 auto' }} />
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {!isAuthenticated &&
              (viewMode === 'setup' ? (
                <button
                  type="button"
                  className="tactile-btn tactile-btn--sm"
                  onClick={() => switchViewMode('signin')}
                >
                  <LogIn size={14} /> <span className="hide-mobile">Sign in</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
                  onClick={() => switchViewMode('setup')}
                >
                  <Sparkles size={14} /> <span className="hide-mobile">Guided setup</span>
                </button>
              ))}
            <button
              type="button"
              onClick={handleSkip}
              style={{
                border: 0,
                background: 'transparent',
                color: 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.86rem',
                padding: '6px 8px',
              }}
            >
              Skip
            </button>
          </div>
        </div>
      </header>

      <main className="page-container" style={{ maxWidth: 960, paddingTop: 40 }}>
        {viewMode === 'signin' ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 28,
              alignItems: 'start',
            }}
          >
            <section className="cognito-card" style={{ padding: '36px 38px' }}>
              <AuthFormCard
                initialMode="signin"
                titleId="onboarding-signin-title"
                defaultRunOnboarding={false}
                onSuccess={handleInlineAuthSuccess}
                onStartGuidedOnboarding={() => switchViewMode('setup')}
              />
            </section>

            <aside
              className="cognito-card cognito-grid-bg"
              style={{ padding: '36px 36px', display: 'grid', gap: 20 }}
            >
              <div>
                <span className="tilted-badge tilted-badge--blue" style={{ marginBottom: 12 }}>
                  NEW TO COGNIFY?
                </span>
                <h2 className="font-heading" style={{ fontSize: '1.65rem', lineHeight: 1.2 }}>
                  Set up your IGCSE &amp; A-Level plan in 60 seconds
                </h2>
                <p style={{ margin: '8px 0 0', color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.55 }}>
                  Pick your exact subjects, exam boards, daily XP target, and mascot — then create a free account so every quiz, flashcard, and note auto-saves.
                </p>
              </div>

              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  'Choose IGCSE, A-Level, or both in one dashboard',
                  'Match your exact exam board (CIE, Edexcel, AQA)',
                  'Auto-save XP, streaks, quiz marks & flashcards',
                  '100% free forever — zero paywalls or weekly caps',
                ].map((bullet) => (
                  <div
                    key={bullet}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 999,
                        backgroundColor: 'var(--color-green-100)',
                        color: 'var(--color-green-700)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="tactile-btn tactile-btn--solid-blue"
                style={{ width: '100%' }}
                onClick={() => switchViewMode('setup')}
              >
                <Sparkles size={16} /> Start 4-step guided setup <ArrowRight size={15} />
              </button>
            </aside>
          </div>
        ) : (
        <section className="cognito-card cognito-grid-bg" style={{ padding: '40px 42px' }}>
          {/* STEP 1: QUALIFICATION & YEAR GROUP */}
          {step === 1 && (
            <div style={{ display: 'grid', gap: 22 }}>
              <div>
                <span className="tilted-badge tilted-badge--blue" style={{ marginBottom: 10 }}>
                  STEP 1 · STUDY TRACK
                </span>
                <h1 className="font-heading" style={{ fontSize: '2rem', lineHeight: 1.15 }}>
                  What are you studying for?
                </h1>
                <p style={{ margin: '6px 0 0', color: 'var(--text-secondary)', fontSize: '0.96rem' }}>
                  We’ll tailor your dashboard, notes, quizzes, flashcards, and past papers to your exact exam level.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                  gap: 12,
                }}
              >
                {QUAL_OPTIONS.map((opt) => {
                  const active = qualification === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => handleSelectQualification(opt.id)}
                      style={{
                        textAlign: 'left',
                        padding: '16px 18px',
                        borderRadius: 14,
                        border: active
                          ? '2px solid var(--color-blue-500)'
                          : '1.5px solid var(--border-card)',
                        backgroundColor: active ? 'var(--color-blue-50)' : 'var(--bg-elevated)',
                        color: active ? '#0b3c61' : 'var(--text-primary)',
                        boxShadow: active ? '0 3px 0 var(--color-blue-500)' : '0 2px 0 var(--border-lip)',
                        display: 'grid',
                        gap: 6,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontWeight: 800, fontSize: '1.08rem' }}>
                          <GraduationCap size={18} /> {opt.title}
                        </span>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            padding: '2px 8px',
                            borderRadius: 999,
                            backgroundColor: active ? 'var(--color-blue-500)' : 'var(--bg-sunken)',
                            color: active ? '#ffffff' : 'var(--text-muted)',
                          }}
                        >
                          {opt.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.84rem', opacity: 0.88, lineHeight: 1.4 }}>
                        {opt.description}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Year Group Chips */}
              <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-heading)' }}>
                  Which year group are you in?
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {YEAR_CHIPS.map((yr) => {
                    const active = yearGroup === yr;
                    return (
                      <button
                        key={yr}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setYearGroup(yr)}
                        style={{
                          padding: '8px 14px',
                          borderRadius: 999,
                          border: active
                            ? '2px solid var(--color-blue-500)'
                            : '1.5px solid var(--border-card)',
                          backgroundColor: active ? 'var(--color-blue-500)' : 'var(--bg-elevated)',
                          color: active ? '#ffffff' : 'var(--text-primary)',
                          fontWeight: 800,
                          fontSize: '0.82rem',
                        }}
                      >
                        {yr}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SUBJECT & EXAM BOARD PICKER */}
          {step === 2 && (
            <div style={{ display: 'grid', gap: 18 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <div>
                  <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 10 }}>
                    STEP 2 · YOUR SUBJECTS
                  </span>
                  <h1 className="font-heading" style={{ fontSize: '1.9rem', lineHeight: 1.15 }}>
                    Pick your subjects &amp; exam boards
                  </h1>
                  <p style={{ margin: '6px 0 0', color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                    Tap subjects to add them to your dashboard. You can change them anytime later.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      padding: '5px 11px',
                      borderRadius: 999,
                      backgroundColor: 'var(--color-green-100)',
                      color: 'var(--color-green-700)',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                    }}
                  >
                    {selectedCourseIds.length} selected
                  </span>
                  <button
                    type="button"
                    className="tactile-btn tactile-btn--sm"
                    onClick={selectAllVisible}
                  >
                    Select all
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: 12,
                }}
              >
                {visibleGroups.map((grp) => {
                  const chosenId = selectedByGroup[grp.key];
                  const isSelected = Boolean(chosenId);
                  const activeVariant =
                    grp.variants.find((v) => v.id === chosenId) ?? grp.variants[0];

                  return (
                    <div
                      key={grp.key}
                      style={{
                        borderRadius: 14,
                        border: isSelected
                          ? '2px solid var(--color-blue-500)'
                          : '1.5px solid var(--border-card)',
                        backgroundColor: isSelected ? 'var(--color-blue-50)' : 'var(--bg-elevated)',
                        color: isSelected ? '#0b3c61' : 'var(--text-primary)',
                        boxShadow: isSelected ? '0 3px 0 var(--color-blue-500)' : '0 2px 0 var(--border-lip)',
                        padding: '13px 14px',
                        display: 'grid',
                        gap: 10,
                      }}
                    >
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleGroup(grp)}
                        style={{
                          border: 0,
                          background: 'transparent',
                          padding: 0,
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 10,
                          width: '100%',
                          color: 'inherit',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                          <SubjectIcon icon={grp.icon} size={36} />
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontWeight: 800, fontSize: '0.96rem', lineHeight: 1.2 }}>
                              {grp.subjectName}
                            </div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.78, marginTop: 2 }}>
                              {grp.qualificationLabel} · {activeVariant.topics.length} topics
                            </div>
                          </div>
                        </div>

                        <span
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 999,
                            flexShrink: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: isSelected ? 'var(--color-blue-500)' : 'var(--bg-sunken)',
                            color: isSelected ? '#ffffff' : 'transparent',
                            border: isSelected ? '0' : '1.5px solid var(--border-card)',
                          }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>
                      </button>

                      {/* Inline Exam Board Switcher when multiple boards exist */}
                      {grp.variants.length > 1 && (
                        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                          {grp.variants.map((variant) => {
                            const boardSelected = activeVariant.id === variant.id && isSelected;
                            return (
                              <button
                                key={variant.id}
                                type="button"
                                onClick={() => pickBoardVariant(grp, variant.id)}
                                style={{
                                  padding: '3px 8px',
                                  borderRadius: 999,
                                  fontSize: '0.72rem',
                                  fontWeight: 800,
                                  border: boardSelected
                                    ? '1.5px solid var(--color-blue-500)'
                                    : '1px solid var(--border-card)',
                                  backgroundColor: boardSelected
                                    ? 'var(--color-blue-500)'
                                    : 'var(--bg-card)',
                                  color: boardSelected ? '#ffffff' : 'var(--text-secondary)',
                                }}
                              >
                                {variant.boardLabel}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: DAILY GOAL, MASCOT & DISPLAY NAME */}
          {step === 3 && (
            <div style={{ display: 'grid', gap: 22 }}>
              <div>
                <span className="tilted-badge tilted-badge--paper" style={{ marginBottom: 10 }}>
                  STEP 3 · PERSONALISE
                </span>
                <h1 className="font-heading" style={{ fontSize: '1.9rem', lineHeight: 1.15 }}>
                  Set your daily target &amp; mascot
                </h1>
                <p style={{ margin: '6px 0 0', color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                  Small daily wins build unstoppable exam streaks.
                </p>
              </div>

              {/* Daily XP Goal Cards */}
              <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 800, fontSize: '0.92rem' }}>
                  <Target size={16} color="var(--color-blue-500)" /> Choose your daily XP goal
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))',
                    gap: 10,
                  }}
                >
                  {GOAL_OPTIONS.map((g) => {
                    const active = dailyXpGoal === g.xp;
                    return (
                      <button
                        key={g.xp}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setDailyXpGoal(g.xp)}
                        style={{
                          textAlign: 'left',
                          padding: '13px 14px',
                          borderRadius: 13,
                          border: active
                            ? '2px solid var(--color-blue-500)'
                            : '1.5px solid var(--border-card)',
                          backgroundColor: active ? 'var(--color-blue-50)' : 'var(--bg-elevated)',
                          color: active ? '#0b3c61' : 'var(--text-primary)',
                          boxShadow: active ? '0 3px 0 var(--color-blue-500)' : '0 2px 0 var(--border-lip)',
                          display: 'grid',
                          gap: 4,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                          <span style={{ fontWeight: 800, fontSize: '0.98rem' }}>{g.label}</span>
                          {g.recommended && (
                            <span
                              style={{
                                fontSize: '0.66rem',
                                fontWeight: 800,
                                padding: '2px 7px',
                                borderRadius: 999,
                                backgroundColor: 'var(--color-green-100)',
                                color: 'var(--color-green-700)',
                              }}
                            >
                              BEST
                            </span>
                          )}
                        </div>
                        <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--color-blue-600)' }}>
                          {g.xp} XP · {g.minutes}
                        </div>
                        <div style={{ fontSize: '0.78rem', opacity: 0.8 }}>{g.tagline}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mascot Picker + Live Name Preview */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: 18,
                  padding: 18,
                  borderRadius: 14,
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'grid', gap: 12 }}>
                  <label style={{ display: 'grid', gap: 6, fontWeight: 800, fontSize: '0.9rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <User size={15} /> What should we call you?
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. Elena"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      style={inputStyle}
                    />
                  </label>

                  <div style={{ display: 'grid', gap: 6 }}>
                    <span style={{ fontWeight: 800, fontSize: '0.86rem' }}>Pick your mascot</span>
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
                              backgroundColor: selected ? 'var(--color-blue-50)' : 'var(--bg-card)',
                              display: 'inline-flex',
                            }}
                          >
                            <MonsterAvatar avatarId={opt.id} size={40} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Live Student Card Preview */}
                <div
                  style={{
                    padding: '18px 16px',
                    borderRadius: 14,
                    backgroundColor: 'var(--bg-sunken)',
                    border: '1px dashed var(--border-card)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                  }}
                >
                  <MonsterAvatar avatarId={avatarId} size={74} />
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {yearGroup}
                    </div>
                    <div className="font-heading" style={{ fontSize: '1.45rem', lineHeight: 1.15 }}>
                      Hi {displayName.trim() || 'Alex'}!
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: '#e07a16', marginTop: 4 }}>
                      <Flame size={14} /> {dailyXpGoal} XP daily goal · {selectedCourseIds.length} courses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: SAVE YOUR SETUP (CREATE ACCOUNT OR GUEST) */}
          {step === 4 && (
            <div style={{ display: 'grid', gap: 20 }}>
              <div>
                <span className="tilted-badge tilted-badge--blue" style={{ marginBottom: 10 }}>
                  STEP 4 · READY TO LAUNCH
                </span>
                <h1 className="font-heading" style={{ fontSize: '1.9rem', lineHeight: 1.15 }}>
                  {isAuthenticated ? 'Your personalised plan is ready!' : 'Save your setup with a free account'}
                </h1>
                <p style={{ margin: '6px 0 0', color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                  {isAuthenticated
                    ? 'Click below to apply your updated subjects, mascot, and daily goal to your account.'
                    : 'Create a free password-protected account so your XP, streaks, and courses stay saved — or jump straight in as a guest.'}
                </p>
              </div>

              {/* Plan Summary Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 14,
                  flexWrap: 'wrap',
                  padding: '14px 16px',
                  borderRadius: 14,
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <MonsterAvatar avatarId={avatarId} size={52} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-heading)' }}>
                      {displayName.trim() || profile.name || 'Alex'} · {yearGroup}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                      <BookOpen size={13} style={{ verticalAlign: '-2px', marginRight: 4 }} />
                      {selectedCourseIds.length} {selectedCourseIds.length === 1 ? 'subject' : 'subjects'} · {dailyXpGoal} XP daily goal
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: '4px 11px',
                    borderRadius: 999,
                    backgroundColor: 'var(--color-green-100)',
                    color: 'var(--color-green-700)',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                  }}
                >
                  <Sparkles size={13} /> 100% Free Forever
                </span>
              </div>

              {isAuthenticated ? (
                <button
                  type="button"
                  disabled={submitting}
                  className="tactile-btn tactile-btn--solid-blue"
                  style={{ width: '100%' }}
                  onClick={handleFinishAsGuestOrSignedIn}
                >
                  <Rocket size={17} /> {submitting ? 'Saving...' : 'Save & open my Dashboard'}
                </button>
              ) : (
                <div style={{ display: 'grid', gap: 16 }}>
                  <form
                    onSubmit={handleFinishWithAccount}
                    noValidate
                    style={{
                      display: 'grid',
                      gap: 12,
                      padding: 18,
                      borderRadius: 14,
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1.5px solid var(--color-blue-300, var(--border-card))',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontWeight: 800, fontSize: '0.96rem', color: 'var(--text-heading)' }}>
                      <ShieldCheck size={18} color="var(--color-blue-500)" /> Create free account &amp; auto-save
                    </div>

                    <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <Mail size={14} /> Email address
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

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
                      <label style={{ display: 'grid', gap: 5, fontWeight: 700, fontSize: '0.86rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                          <Lock size={14} /> Password
                        </span>
                        <div style={{ position: 'relative' }}>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            minLength={6}
                            autoComplete="new-password"
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
                          required
                          minLength={6}
                          autoComplete="new-password"
                          placeholder="Repeat password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          style={inputStyle}
                        />
                      </label>
                    </div>

                    {(password.length > 0 || confirmPassword.length > 0) && (() => {
                      const pwStrength = getPasswordStrength(password);
                      const matches = Boolean(password && confirmPassword && password === confirmPassword);
                      return (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', fontSize: '0.78rem', fontWeight: 700 }}>
                          <span style={{ color: pwStrength.color }}>{pwStrength.label}</span>
                          {confirmPassword.length > 0 && (
                            <span style={{ color: matches ? 'var(--color-green-600)' : 'var(--color-red-600)' }}>
                              {matches ? 'Passwords match ✓' : 'Passwords do not match'}
                            </span>
                          )}
                        </div>
                      );
                    })()}

                    {error && (
                      <div
                        role="alert"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 10,
                          flexWrap: 'wrap',
                          padding: '10px 13px',
                          borderRadius: 11,
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.35)',
                          color: 'var(--color-red-600)',
                          fontWeight: 700,
                          fontSize: '0.86rem',
                        }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                          <AlertCircle size={17} style={{ flexShrink: 0 }} />
                          <span>{error}</span>
                        </span>
                        {errorCode === 'EMAIL_EXISTS' && (
                          <button
                            type="button"
                            onClick={() => switchViewMode('signin')}
                            style={{
                              border: '1px solid var(--color-blue-500)',
                              borderRadius: 8,
                              padding: '5px 10px',
                              backgroundColor: 'var(--bg-elevated)',
                              color: 'var(--color-blue-600)',
                              fontWeight: 800,
                              fontSize: '0.8rem',
                            }}
                          >
                            Sign in instead →
                          </button>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="tactile-btn tactile-btn--solid-blue"
                      style={{ width: '100%', marginTop: 2 }}
                    >
                      <Rocket size={16} /> {submitting ? 'Setting up...' : 'Create free account & start studying'}
                    </button>

                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.45 }}>
                      Saved securely in this browser with an automatic Recovery Key · transfer to another device anytime via <strong>Sync Code</strong>.
                    </div>
                  </form>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      disabled={submitting}
                      className="tactile-btn"
                      onClick={handleFinishAsGuestOrSignedIn}
                    >
                      Start studying as guest
                    </button>
                    <button
                      type="button"
                      onClick={() => switchViewMode('signin')}
                      style={{
                        border: 0,
                        background: 'transparent',
                        color: 'var(--color-blue-600)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        textDecoration: 'underline',
                      }}
                    >
                      Already have an account? Sign in
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error Alert for Steps 1–3 */}
          {error && step < 4 && (
            <div
              role="alert"
              style={{
                marginTop: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                flexWrap: 'wrap',
                padding: '10px 13px',
                borderRadius: 11,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.35)',
                color: 'var(--color-red-600)',
                fontWeight: 700,
                fontSize: '0.88rem',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <AlertCircle size={17} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </span>
            </div>
          )}

          {/* Bottom Step Navigation Bar */}
          <div
            style={{
              marginTop: 26,
              paddingTop: 18,
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <button
              type="button"
              className="tactile-btn"
              onClick={step === 1 ? () => navigate('/dashboard') : goBack}
            >
              <ArrowLeft size={16} /> {step === 1 ? 'Back to Dashboard' : 'Back'}
            </button>

            <div style={{ display: 'flex', gap: 7 }} aria-hidden="true">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  style={{
                    width: n === step ? 22 : 8,
                    height: 8,
                    borderRadius: 999,
                    backgroundColor:
                      n <= step ? 'var(--color-blue-500)' : 'var(--border-card)',
                    transition: 'all 200ms ease',
                  }}
                />
              ))}
            </div>

            {step < 4 ? (
              <button
                type="button"
                className="tactile-btn tactile-btn--solid-blue"
                onClick={goNext}
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <span style={{ width: 96 }} />
            )}
          </div>
        </section>
        )}
      </main>
    </div>
  );
};
