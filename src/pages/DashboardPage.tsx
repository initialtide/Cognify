import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  HelpCircle,
  Info,
  LogIn,
  ShieldCheck,
  UserPlus,
  X,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FlameMascot, FreezeCubeIcon, MonsterAvatar } from '../components/artwork/Avatars';
import { StreakFlameTickIcon } from '../components/artwork/CognitoIcons';
import { SubjectIcon } from '../components/artwork/SubjectIcons';
import { AuthMode } from '../components/auth/AuthFormCard';
import { formatWeekRangeLabel, getWeekDays } from '../components/modals/StreakModal';
import { getCourseById } from '../data/catalog';
import { getCourseStats, useApp } from '../store/AppContext';
import { CourseDefinition } from '../types/curriculum';

type SortCol = 'subject' | 'questions' | 'flashcards';
type SortDir = 'ascending' | 'descending';

interface DashboardPageProps {
  onOpenAvatarModal: () => void;
  onOpenStreakModal: () => void;
  onOpenManageCourses: () => void;
  onOpenAuthModal?: (mode: AuthMode) => void;
}

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onOpenAvatarModal,
  onOpenStreakModal,
  onOpenManageCourses,
  onOpenAuthModal,
}) => {
  const { profile, isAuthenticated, streakStats } = useApp();
  const navigate = useNavigate();
  const [weekOffset, setWeekOffset] = useState(0);
  const [sortCol, setSortCol] = useState<SortCol | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('ascending');
  const [qualFilter, setQualFilter] = useState<string>('all');
  const [infoTip, setInfoTip] = useState<'questions' | 'flashcards' | null>(null);
  const [dismissedSaveTip, setDismissedSaveTip] = useState(false);

  const days = getWeekDays(weekOffset);
  const rangeLabel = formatWeekRangeLabel(weekOffset);

  const enrolledRows = useMemo(() => {
    const seen = new Set<string>();
    const resolvedCourses: CourseDefinition[] = [];
    for (const id of profile.enrolledCourseIds) {
      if (!id || seen.has(id)) continue;
      const course = getCourseById(id);
      if (!course || seen.has(course.id)) continue;
      seen.add(id);
      seen.add(course.id);
      resolvedCourses.push(course);
    }
    return resolvedCourses.map((course) => {
      const stats = getCourseStats(course, profile.progressByCourse[course.id]);
      return { course, stats };
    });
  }, [profile.enrolledCourseIds, profile.progressByCourse]);

  const availableQuals = useMemo(() => {
    const map = new Map<string, string>();
    for (const { course } of enrolledRows) {
      if (!map.has(course.qualification)) {
        map.set(course.qualification, course.qualificationLabel);
      }
    }
    return Array.from(map.entries());
  }, [enrolledRows]);

  const sortedRows = useMemo(() => {
    const filtered =
      qualFilter === 'all'
        ? enrolledRows
        : enrolledRows.filter(({ course }) => course.qualification === qualFilter);
    if (!sortCol) return filtered;
    const factor = sortDir === 'ascending' ? 1 : -1;
    return [...filtered].sort((a, b) => {
      if (sortCol === 'subject') {
        return factor * collator.compare(a.course.subjectName, b.course.subjectName);
      }
      if (sortCol === 'questions') {
        return factor * (a.stats.questionsAnswered - b.stats.questionsAnswered);
      }
      return factor * (a.stats.flashcardsConfident - b.stats.flashcardsConfident);
    });
  }, [enrolledRows, qualFilter, sortCol, sortDir]);

  const resumeTarget = useMemo(() => {
    const latest = profile.activityLog[0];
    if (!latest) return null;
    const course = getCourseById(latest.courseId);
    if (!course) return null;

    let to = `/course/${course.id}`;
    if (latest.subtopicId) {
      if (latest.type === 'quiz') {
        to = `/course/${course.id}/quiz/${latest.subtopicId}`;
      } else if (latest.type === 'flashcards') {
        to = `/course/${course.id}/flashcards/${latest.subtopicId}`;
      } else if (latest.type === 'exam') {
        to = `/course/${course.id}/exam-practice/${latest.subtopicId}`;
      } else if (latest.type === 'notes') {
        to = `/course/${course.id}/notes/${latest.subtopicId}`;
      }
    }

    return {
      course,
      title: latest.title,
      to,
    };
  }, [profile.activityLog]);

  const handleSort = (col: SortCol) => {
    if (sortCol === col) {
      setSortDir((d) => (d === 'ascending' ? 'descending' : 'ascending'));
    } else {
      setSortCol(col);
      setSortDir('ascending');
    }
  };

  const showGuestOnboardingStrip = !isAuthenticated && !profile.onboardingCompleted && !dismissedSaveTip;

  return (
    <main className="page-container">
      {/* Hero Profile & Streak Card — Spacious Cognito Proportions */}
      <section className="cognito-card" style={{ padding: '36px 40px', marginTop: 8 }}>
        <button
          type="button"
          onClick={() => navigate('/account/profile')}
          className="tilted-badge tilted-badge--edge tilted-badge--paper"
          title="Edit profile & year group"
        >
          STUDENT · {profile.yearGroup}
        </button>

        <div className="dashboard-hero-grid">
          {/* Left: Avatar + Greeting + Freezes */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <button
              type="button"
              onClick={onOpenAvatarModal}
              aria-label="Change avatar"
              style={{
                padding: 0,
                border: 0,
                background: 'transparent',
                borderRadius: '999px',
                flexShrink: 0,
              }}
            >
              <MonsterAvatar avatarId={profile.avatarId} size={96} />
            </button>

            <div>
              <h1 className="font-heading" style={{ fontSize: '2.35rem', lineHeight: 1.12 }}>
                Hi {profile.name}
              </h1>
              <button
                type="button"
                onClick={onOpenStreakModal}
                className="freeze-pill"
              >
                <FreezeCubeIcon size={21} count={profile.streakFreezes} />
                <span>{profile.streakFreezes} freezes</span>
              </button>
            </div>
          </div>

          {/* Right: Flame Mascot + Streak Count + M-S Weekly Circles */}
          <div className="dashboard-streak-col">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <FlameMascot active={streakStats.currentStreak > 0} size={50} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.18rem', color: '#e07a16', lineHeight: 1.1 }}>
                    {streakStats.currentStreak} {streakStats.currentStreak === 1 ? 'day' : 'days'}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    Current streak
                  </div>
                </div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    backgroundColor: 'var(--bg-sunken)',
                    padding: '4px 9px',
                    borderRadius: 999,
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <button
                    type="button"
                    aria-label="Previous week"
                    onClick={() => setWeekOffset((w) => w - 1)}
                    style={{ border: 0, background: 'transparent', padding: 1, display: 'inline-flex' }}
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <span>{rangeLabel}</span>
                  <button
                    type="button"
                    aria-label="Next week"
                    onClick={() => setWeekOffset((w) => Math.min(0, w + 1))}
                    disabled={weekOffset >= 0}
                    style={{ border: 0, background: 'transparent', padding: 1, display: 'inline-flex', opacity: weekOffset >= 0 ? 0.35 : 1 }}
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenStreakModal}
                  aria-label="How streaks work"
                  style={{
                    border: 0,
                    background: 'transparent',
                    padding: 2,
                    color: 'var(--text-muted)',
                    display: 'inline-flex',
                  }}
                >
                  <Info size={17} />
                </button>
              </div>
            </div>

            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 10 }}>
              {days.map((d) => {
                const done = streakStats.activeDates.has(d.dateKey);
                return (
                  <div
                    key={d.dateKey}
                    title={`${d.dateKey}${done ? ' — Active!' : ''}`}
                    className={`streak-day-circle${done ? ' is-done' : ''}${d.isToday ? ' is-today' : ''}`}
                  >
                    {done ? <StreakFlameTickIcon size={36} /> : d.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Single Calm Contextual Strip (never stack two banners!) */}
      {showGuestOnboardingStrip ? (
        <section
          className="cognito-card"
          style={{
            marginTop: 22,
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            backgroundColor: 'var(--bg-card)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, minWidth: 0 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                backgroundColor: 'var(--color-blue-50)',
                color: 'var(--color-blue-600)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--text-heading)' }}>
                Personalise Cognify in 60 seconds
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: 1 }}>
                Pick your IGCSE or A-Level subjects, exam boards, daily XP target, and save your progress.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Link
              to="/onboarding"
              className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
            >
              Start guided setup <ArrowRight size={14} />
            </Link>
            <Link
              to="/onboarding?mode=signin"
              className="tactile-btn tactile-btn--sm"
            >
              <LogIn size={14} /> Sign in
            </Link>
            <button
              type="button"
              aria-label="Dismiss setup reminder"
              onClick={() => setDismissedSaveTip(true)}
              style={{
                border: 0,
                background: 'transparent',
                color: 'var(--text-muted)',
                padding: 6,
                display: 'inline-flex',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </section>
      ) : resumeTarget ? (
        <section className="cognito-card dashboard-resume-bar" aria-label="Continue studying">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
            <SubjectIcon icon={resumeTarget.course.icon} size={38} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Continue studying · {resumeTarget.course.qualificationLabel} {resumeTarget.course.subjectName}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-heading)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 }}>
                {resumeTarget.title}
              </div>
            </div>
          </div>
          <Link to={resumeTarget.to} className="dashboard-resume-cta">
            Resume <ArrowRight size={14} />
          </Link>
        </section>
      ) : !isAuthenticated && !dismissedSaveTip ? (
        <section
          className="cognito-card"
          style={{
            marginTop: 22,
            padding: '15px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
            <ShieldCheck size={20} color="var(--color-blue-600)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-heading)' }}>
              Save your XP, streaks &amp; quiz scores with a free account
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
              onClick={() => (onOpenAuthModal ? onOpenAuthModal('register') : navigate('/register'))}
            >
              <UserPlus size={14} /> Create account
            </button>
            <button
              type="button"
              aria-label="Dismiss save reminder"
              onClick={() => setDismissedSaveTip(true)}
              style={{ border: 0, background: 'transparent', color: 'var(--text-muted)', padding: 6, display: 'inline-flex' }}
            >
              <X size={16} />
            </button>
          </div>
        </section>
      ) : null}

      {/* Section Header: [N COURSES] - - - - - [Manage courses] */}
      <div
        style={{
          margin: '44px 0 22px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <span className="tilted-badge tilted-badge--navy">
          {enrolledRows.length} {enrolledRows.length === 1 ? 'COURSE' : 'COURSES'}
        </span>
        <hr className="dashed-divider" />
        <button
          type="button"
          className="tactile-btn"
          onClick={onOpenManageCourses}
        >
          Manage courses
        </button>
      </div>

      {/* Optional Clean Qualification Filter Pills when enrolled across multiple levels */}
      {availableQuals.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
          {(
            [['all', `All (${enrolledRows.length})`], ...availableQuals.map(([id, label]) => [id, label])] as [string, string][]
          ).map(([id, label]) => {
            const active = qualFilter === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setQualFilter(id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: active ? '1.5px solid var(--color-blue-500)' : '1px solid var(--border-card)',
                  backgroundColor: active ? 'var(--color-blue-50)' : 'var(--bg-card)',
                  color: active ? 'var(--color-blue-700)' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  transition: 'all 120ms ease',
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Courses Table */}
      <section className="cognito-card" style={{ overflow: 'hidden' }}>
        <div
          tabIndex={0}
          role="region"
          aria-labelledby="my-courses-caption"
          className="table-wrapper"
        >
          <table className="courses-table">
            <caption id="my-courses-caption" className="sr-only">
              Enrolled revision courses with question scores and flashcard confidence
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-sort={sortCol === 'subject' ? sortDir : undefined}>
                  <button
                    type="button"
                    className="sort-header-btn"
                    onClick={() => handleSort('subject')}
                  >
                    <ArrowUpDown size={14} aria-hidden="true" />
                    <span>SUBJECT</span>
                  </button>
                </th>
                <th scope="col" aria-sort={sortCol === 'questions' ? sortDir : undefined} style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="sort-header-btn"
                      onClick={() => handleSort('questions')}
                      style={{ width: 'auto' }}
                    >
                      <span>QUESTIONS / AVG SCORE</span>
                    </button>
                    <button
                      type="button"
                      aria-label="About questions and average score"
                      onClick={() => setInfoTip((t) => (t === 'questions' ? null : 'questions'))}
                      style={{ border: 0, background: 'transparent', padding: 4, color: 'var(--text-muted)', display: 'inline-flex' }}
                    >
                      <HelpCircle size={15} />
                    </button>
                  </div>
                  {infoTip === 'questions' && (
                    <div
                      className="popover-surface"
                      style={{ position: 'absolute', top: '100%', left: 12, padding: '8px 12px', fontSize: '0.78rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0, width: 230, whiteSpace: 'normal', color: 'var(--text-primary)' }}
                    >
                      Tracks how many unique quiz questions you have answered and your average accuracy.
                    </div>
                  )}
                </th>
                <th scope="col" aria-sort={sortCol === 'flashcards' ? sortDir : undefined} style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="sort-header-btn"
                      onClick={() => handleSort('flashcards')}
                      style={{ width: 'auto' }}
                    >
                      <span>FLASHCARDS / CONFIDENCE</span>
                    </button>
                    <button
                      type="button"
                      aria-label="About flashcards and confidence"
                      onClick={() => setInfoTip((t) => (t === 'flashcards' ? null : 'flashcards'))}
                      style={{ border: 0, background: 'transparent', padding: 4, color: 'var(--text-muted)', display: 'inline-flex' }}
                    >
                      <HelpCircle size={15} />
                    </button>
                  </div>
                  {infoTip === 'flashcards' && (
                    <div
                      className="popover-surface"
                      style={{ position: 'absolute', top: '100%', left: 12, padding: '8px 12px', fontSize: '0.78rem', fontWeight: 600, textTransform: 'none', letterSpacing: 0, width: 230, whiteSpace: 'normal', color: 'var(--text-primary)' }}
                    >
                      Shows cards marked as Confident out of the total deck for that course.
                    </div>
                  )}
                </th>
                <th scope="col" style={{ width: 44 }}><span className="sr-only">Open course</span></th>
              </tr>
            </thead>
            <tbody>
              {sortedRows.length === 0 ? (
                <tr>
                  <td colSpan={4} style={{ textAlign: 'center', padding: 36, color: 'var(--text-muted)' }}>
                    You have no courses added yet. Click <strong>Manage courses</strong> above to add subjects!
                  </td>
                </tr>
              ) : (
                sortedRows.map(({ course, stats }) => (
                  <tr
                    key={course.id}
                    className="course-row"
                    tabIndex={0}
                    onClick={() => navigate(`/course/${course.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/course/${course.id}`);
                      }
                    }}
                  >
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <SubjectIcon icon={course.icon} size={46} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1.03rem', color: 'var(--text-heading)' }}>
                            {course.subjectName}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 2 }}>
                            {course.subtitle}
                          </div>
                        </div>
                      </div>
                    </td>

                    {course.pastPapersOnly ? (
                      <td colSpan={2}>
                        <span className="past-papers-only-pill">
                          <FileText size={14} /> Past papers only
                        </span>
                      </td>
                    ) : (
                      <>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontWeight: 600, fontSize: '0.94rem' }}>
                            <span style={{ minWidth: 68 }}>
                              {stats.questionsAnswered} / {stats.questionsTotal}
                            </span>
                            {stats.avgScorePercent !== null ? (
                              <span className={`score-pill${stats.avgScorePercent < 70 ? ' score-pill--amber' : ''}`}>
                                {stats.avgScorePercent}%
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>~</span>
                            )}
                          </div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontWeight: 600, fontSize: '0.94rem' }}>
                            <span style={{ minWidth: 68 }}>
                              {stats.flashcardsConfident} / {stats.flashcardsTotal}
                            </span>
                            {stats.confidencePercent !== null ? (
                              <span className={`score-pill${stats.confidencePercent < 70 ? ' score-pill--amber' : ''}`}>
                                {stats.confidencePercent}%
                              </span>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>~</span>
                            )}
                          </div>
                        </td>
                      </>
                    )}

                    <td style={{ textAlign: 'right' }}>
                      <ChevronRight size={18} color="var(--text-muted)" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
