import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getCourseById, QUALIFICATIONS } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { CourseDefinition } from '../../types/curriculum';
import {
  NavActivityBarsIcon,
  NavStreakFlameIcon,
  NavXpStarIcon,
} from '../artwork/CognitoIcons';
import { CognitoLogo } from '../artwork/CognitoLogo';
import { SubjectIcon } from '../artwork/SubjectIcons';
import { AccountMenu } from '../modals/AccountMenu';
import { XpHistoryPopover } from '../modals/XpHistoryPopover';

interface TopNavProps {
  onOpenStreakModal: () => void;
  onOpenDailyGoalModal: () => void;
  onOpenManageCourses: () => void;
  onOpenQuickSearch: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenStreakModal,
  onOpenDailyGoalModal,
  onOpenManageCourses,
  onOpenQuickSearch,
}) => {
  const { profile, streakStats } = useApp();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/';

  const activeCourseId = useMemo(() => {
    const match = location.pathname.match(/^\/course\/([^/]+)/);
    return match ? match[1] : null;
  }, [location.pathname]);

  const [openMenu, setOpenMenu] = useState<'courses' | 'xp' | 'account' | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const groupedEnrolledCourses = useMemo(() => {
    const seen = new Set<string>();
    const enrolled: CourseDefinition[] = [];
    for (const id of profile.enrolledCourseIds) {
      if (!id || seen.has(id)) continue;
      const course = getCourseById(id);
      if (!course || seen.has(course.id)) continue;
      seen.add(id);
      seen.add(course.id);
      enrolled.push(course);
    }
    return QUALIFICATIONS.map((q) => ({
      qualification: q,
      courses: enrolled.filter((c) => c.qualification === q.id),
    })).filter((g) => g.courses.length > 0);
  }, [profile.enrolledCourseIds]);

  return (
    <header className="top-nav no-print" ref={navRef}>
      <div className="top-nav__inner">
        {/* Left: Logo or <- DASHBOARD + My courses + Quick Search */}
        <div className="top-nav__left">
          {isDashboard ? (
            <Link to="/dashboard" aria-label="Cognito Dashboard">
              <CognitoLogo />
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="font-logo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: '0.96rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
              }}
            >
              <ArrowLeft size={18} />
              DASHBOARD
            </Link>
          )}

          {/* My Courses Dropdown (matches live Cognito layout + grouped by Qualification) */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setOpenMenu((m) => (m === 'courses' ? null : 'courses'))}
              aria-expanded={openMenu === 'courses'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                padding: '6px 10px',
                border: 0,
                borderRadius: 10,
                background: openMenu === 'courses' ? 'var(--bg-sunken)' : 'transparent',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
              }}
            >
              My courses <ChevronDown size={15} />
            </button>

            {openMenu === 'courses' && (
              <div
                className="popover-surface"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  left: 0,
                  width: 'min(92vw, 330px)',
                  padding: 10,
                  maxHeight: '74vh',
                  overflowY: 'auto',
                }}
              >
                {/* Top Quick Actions matching Cognito reference */}
                <div style={{ display: 'grid', gap: 2, paddingBottom: 8, borderBottom: '1px solid var(--border-subtle)' }}>
                  <Link
                    to="/courses"
                    onClick={() => setOpenMenu(null)}
                    className="nav-dropdown-action"
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
                      <Search size={16} color="var(--text-secondary)" />
                      <span>Browse all courses</span>
                    </span>
                    <ChevronRight size={15} color="var(--text-muted)" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenMenu(null);
                      onOpenManageCourses();
                    }}
                    className="nav-dropdown-action"
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
                      <SlidersHorizontal size={16} color="var(--text-secondary)" />
                      <span>Manage my courses</span>
                    </span>
                  </button>
                </div>

                {/* Enrolled Courses Grouped by Qualification */}
                <div style={{ paddingTop: 4 }}>
                  {groupedEnrolledCourses.length === 0 ? (
                    <div style={{ padding: '14px 10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      No courses added yet. Click <strong>Manage my courses</strong> above.
                    </div>
                  ) : (
                    groupedEnrolledCourses.map(({ qualification, courses }) => (
                      <div key={qualification.id}>
                        <div className="nav-dropdown-group-label">{qualification.label}</div>
                        <div style={{ display: 'grid', gap: 2 }}>
                          {courses.map((course) => {
                            const isActive = activeCourseId === course.id;
                            return (
                              <Link
                                key={course.id}
                                to={`/course/${course.id}`}
                                onClick={() => setOpenMenu(null)}
                                className={`nav-dropdown-course${isActive ? ' is-active' : ''}`}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                                  <SubjectIcon icon={course.icon} size={32} />
                                  <div style={{ minWidth: 0 }}>
                                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-heading)' }}>
                                      {course.subjectName}
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                      {course.subtitle}
                                    </div>
                                  </div>
                                </div>
                                {isActive && (
                                  <Check size={16} color="var(--color-blue-500)" strokeWidth={2.8} style={{ flexShrink: 0 }} />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sleek Quick Search Trigger (Ctrl + K) */}
          <button
            type="button"
            className="nav-search-trigger"
            onClick={() => {
              setOpenMenu(null);
              onOpenQuickSearch();
            }}
            aria-label="Quick search (Ctrl+K)"
          >
            <Search size={15} />
            <span className="hide-mobile">Search</span>
            <kbd className="kbd-cap hide-mobile">Ctrl K</kbd>
          </button>
        </div>

        {/* Right: Stats Pill + Account Pill (Zero Paywall / Zero Upgrade CTA) */}
        <div className="top-nav__right">
          <div className="nav-pill-group" style={{ position: 'relative' }}>
            <button
              type="button"
              className="nav-pill-btn"
              onClick={() => setOpenMenu((m) => (m === 'xp' ? null : 'xp'))}
              aria-expanded={openMenu === 'xp'}
              style={{ color: 'var(--color-blue-500)' }}
            >
              <NavXpStarIcon size={22} />
              <span>{streakStats.totalXp} XP</span>
            </button>

            <span className="nav-pill-divider" />

            <Link
              to="/account/activity"
              className="nav-pill-btn"
              aria-label="Activity Log"
              style={{ color: 'var(--color-green-600)' }}
            >
              <NavActivityBarsIcon size={20} />
              <span className="hide-mobile">{isDashboard ? 'Activity' : ''}</span>
            </Link>

            <span className="nav-pill-divider" />

            <button
              type="button"
              className="nav-pill-btn"
              onClick={() => {
                setOpenMenu(null);
                onOpenStreakModal();
              }}
              style={{ color: '#e67e22' }}
            >
              <NavStreakFlameIcon size={21} />
              <span>{streakStats.currentStreak} Days</span>
            </button>

            {openMenu === 'xp' && (
              <XpHistoryPopover
                onClose={() => setOpenMenu(null)}
                onEditGoal={onOpenDailyGoalModal}
              />
            )}
          </div>

          <div className="nav-pill-group" style={{ position: 'relative' }}>
            <button
              type="button"
              className="nav-pill-btn"
              onClick={() => setOpenMenu((m) => (m === 'account' ? null : 'account'))}
              aria-expanded={openMenu === 'account'}
            >
              <span>{profile.name}</span>
              <ChevronDown size={15} />
            </button>

            {openMenu === 'account' && (
              <AccountMenu
                onClose={() => setOpenMenu(null)}
                onOpenManageCourses={onOpenManageCourses}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
