import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Check,
  ChevronsUpDown,
  FileCheck2,
  Flame,
  Layers,
  Link as LinkIcon,
  ListChecks,
  Moon,
  MoreVertical,
  Palette,
  PlayCircle,
  Printer,
  Scan,
  Sparkles,
  Star,
  Volume2,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { computeLessonSubtopicProgress, useApp } from '../../store/AppContext';
import '../../styles/study-players.css';
import { CourseDefinition } from '../../types/curriculum';

export type StudyThemeColor = 'white' | 'amber' | 'blue' | 'green' | 'purple';

const STUDY_THEME_OPTIONS: {
  id: StudyThemeColor;
  label: string;
  swatchColor: string;
  needsBorder?: boolean;
}[] = [
  { id: 'white', label: 'White', swatchColor: 'rgb(255, 255, 255)', needsBorder: true },
  { id: 'amber', label: 'Amber', swatchColor: 'rgb(232, 161, 44)' },
  { id: 'blue', label: 'Blue', swatchColor: 'rgb(59, 130, 246)' },
  { id: 'green', label: 'Green', swatchColor: 'rgb(66, 172, 136)' },
  { id: 'purple', label: 'Purple', swatchColor: 'rgb(141, 34, 204)' },
];

const THEME_STORAGE_KEY = 'cognito_study_theme';
const OUTLINES_STORAGE_KEY = 'cognito_card_outlines';

export interface StudyProgressSegments {
  greenPct: number;
  redPct: number;
  bluePct: number;
}

interface StudyTopBarProps {
  course: CourseDefinition;
  currentSubtopicId?: string;
  title: string;
  activityType: 'lesson' | 'notes' | 'quiz' | 'flashcards' | 'exam-practice';
  progressPercent: number;
  progressSegments?: StudyProgressSegments;
  sessionXp?: number;
  sessionStreak?: number;
  browseMode?: boolean;
  onToggleBrowse?: () => void;
  rightBadgeText?: string;
}

const ACTIVITIES = [
  { kind: 'lesson' as const, label: 'Lesson', icon: PlayCircle },
  { kind: 'notes' as const, label: 'Notes', icon: BookOpen },
  { kind: 'quiz' as const, label: 'Quiz', icon: ListChecks },
  { kind: 'flashcards' as const, label: 'Flashcards', icon: Layers },
  { kind: 'exam-practice' as const, label: 'Exam', icon: FileCheck2 },
];

export const StudyTopBar: React.FC<StudyTopBarProps> = ({
  course,
  currentSubtopicId,
  title,
  activityType,
  progressPercent,
  progressSegments,
  sessionXp,
  sessionStreak,
  browseMode,
  onToggleBrowse,
  rightBadgeText,
}) => {
  const navigate = useNavigate();
  const { profile, updatePreferences } = useApp();
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reportedIssue, setReportedIssue] = useState(false);

  const [studyTheme, setStudyTheme] = useState<StudyThemeColor>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as StudyThemeColor | null;
      if (saved && STUDY_THEME_OPTIONS.some((o) => o.id === saved)) {
        return saved;
      }
    } catch {
      // Ignore restricted storage
    }
    return 'purple';
  });

  const [cardOutlines, setCardOutlines] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(OUTLINES_STORAGE_KEY);
      if (saved === 'off') return false;
    } catch {
      // Ignore restricted storage
    }
    return true;
  });

  const barRef = useRef<HTMLDivElement>(null);
  const switcherBtnRef = useRef<HTMLButtonElement>(null);
  const optionsBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      document.documentElement.dataset.studyTheme = studyTheme;
      localStorage.setItem(THEME_STORAGE_KEY, studyTheme);
    } catch {
      // Ignore restricted storage
    }
  }, [studyTheme]);

  useEffect(() => {
    try {
      document.documentElement.dataset.cardOutlines = cardOutlines ? 'on' : 'off';
      localStorage.setItem(OUTLINES_STORAGE_KEY, cardOutlines ? 'on' : 'off');
    } catch {
      // Ignore restricted storage
    }
  }, [cardOutlines]);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setSwitcherOpen(false);
        setOptionsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (switcherOpen) {
          setSwitcherOpen(false);
          switcherBtnRef.current?.focus();
        }
        if (optionsOpen) {
          setOptionsOpen(false);
          optionsBtnRef.current?.focus();
        }
      }
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [switcherOpen, optionsOpen]);

  const allSubtopics = useMemo(
    () => course.topics.flatMap((t) => t.subtopics),
    [course.topics]
  );

  const resolvedSubtopicId =
    currentSubtopicId && currentSubtopicId !== 'custom' && currentSubtopicId !== 'all'
      ? currentSubtopicId
      : allSubtopics[0]?.id;

  const backTarget = `/course/${course.id}/${
    activityType === 'lesson' ? 'lessons' : activityType
  }`;

  const courseProgress = profile.progressByCourse[course.id];

  // Compute completion percent & checkmark per subtopic for current activity
  const subtopicCompletionMap = useMemo(() => {
    const map = new Map<string, { percent: number; completed: boolean }>();
    for (const sub of allSubtopics) {
      if (activityType === 'lesson') {
        const lp = computeLessonSubtopicProgress(course, sub.id, courseProgress);
        map.set(sub.id, { percent: lp.percent, completed: lp.completed });
      } else if (activityType === 'notes') {
        const isRead = courseProgress?.readNoteIds.includes(sub.id) ?? false;
        const lesson = course.notes[sub.id];
        const totalPts = lesson?.checklistPoints.length ?? 0;
        const checkedPts = courseProgress?.checkedPointsBySubtopic[sub.id]?.length ?? 0;
        const pct = isRead
          ? 100
          : totalPts > 0
            ? Math.round((checkedPts / totalPts) * 100)
            : 0;
        map.set(sub.id, { percent: pct, completed: isRead });
      } else if (activityType === 'quiz') {
        const subQs = course.quizzes.filter((q) => q.subtopicId === sub.id);
        if (subQs.length === 0) {
          map.set(sub.id, { percent: 0, completed: false });
        } else {
          const answered = subQs.filter(
            (q) => courseProgress?.questionAttempts[q.id]?.answered
          ).length;
          const pct = Math.round((answered / subQs.length) * 100);
          map.set(sub.id, { percent: pct, completed: answered === subQs.length });
        }
      } else if (activityType === 'flashcards') {
        const subCards = course.flashcards.filter((f) => f.subtopicId === sub.id);
        if (subCards.length === 0) {
          map.set(sub.id, { percent: 0, completed: false });
        } else {
          const confident = subCards.filter(
            (f) => courseProgress?.flashcardConfidence[f.id]?.status === 'confident'
          ).length;
          const pct = Math.round((confident / subCards.length) * 100);
          map.set(sub.id, { percent: pct, completed: confident === subCards.length });
        }
      } else {
        const subExams = course.examPractice.filter((e) => e.subtopicId === sub.id);
        const parts = subExams.flatMap((e) => e.parts);
        if (parts.length === 0) {
          map.set(sub.id, { percent: 0, completed: false });
        } else {
          const graded = parts.filter((p) =>
            Boolean(courseProgress?.examPartScores[p.id])
          ).length;
          const pct = Math.round((graded / parts.length) * 100);
          map.set(sub.id, { percent: pct, completed: graded === parts.length });
        }
      }
    }
    return map;
  }, [activityType, allSubtopics, course, courseProgress]);

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handleReportIssue = () => {
    setReportedIssue(true);
    setTimeout(() => setReportedIssue(false), 2200);
  };

  const activeThemeLabel =
    STUDY_THEME_OPTIONS.find((o) => o.id === studyTheme)?.label ?? 'Purple';

  // Parse "Total: 0 / 73" nicely to match Cognito's label + boxed score visual
  const parsedRightBadge = useMemo(() => {
    if (!rightBadgeText) return null;
    const colonIdx = rightBadgeText.indexOf(':');
    if (colonIdx > 0) {
      return {
        label: rightBadgeText.slice(0, colonIdx + 1),
        value: rightBadgeText.slice(colonIdx + 1).trim(),
      };
    }
    return { label: '', value: rightBadgeText };
  }, [rightBadgeText]);

  return (
    <header ref={barRef} className="sp-topbar no-print">
      <div className="sp-topbar__inner">
        {/* Left: Back + Subtopic/Activity Switcher */}
        <div className="sp-topbar__left">
          <Link
            to={backTarget}
            aria-label="Back to course"
            className="sp-topbar__back sp-focusable"
          >
            <ArrowLeft size={19} />
          </Link>

          <button
            ref={switcherBtnRef}
            type="button"
            className="sp-topbar__switcher-btn sp-focusable"
            aria-expanded={switcherOpen}
            aria-haspopup="dialog"
            onClick={() => {
              setSwitcherOpen((s) => !s);
              setOptionsOpen(false);
            }}
          >
            <span className="sp-topbar__title-text">{title}</span>
            <ChevronsUpDown size={15} color="var(--text-muted)" />
          </button>

          {switcherOpen && (
            <div
              role="dialog"
              aria-label="Switch activity or subtopic"
              className="popover-surface sp-switcher-popover"
            >
              {resolvedSubtopicId && (
                <>
                  <div className="sp-popover-eyebrow">CHANGE ACTIVITY</div>
                  <div
                    className="sp-activity-grid sp-activity-grid--5"
                    role="group"
                    aria-label="Change study activity"
                  >
                    {ACTIVITIES.map(({ kind, label, icon: Icon }) => {
                      const isActive = activityType === kind;
                      const targetId =
                        currentSubtopicId === 'all' && kind !== 'notes' && kind !== 'lesson'
                          ? 'all'
                          : resolvedSubtopicId;
                      return (
                        <button
                          key={kind}
                          type="button"
                          aria-current={isActive ? 'page' : undefined}
                          className={`sp-activity-btn sp-focusable${isActive ? ' is-active' : ''}`}
                          onClick={() => {
                            setSwitcherOpen(false);
                            navigate(`/course/${course.id}/${kind}/${targetId}`);
                          }}
                        >
                          <Icon size={16} />
                          <span>{label}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="sp-popover-eyebrow">SUBTOPICS</div>
              <div>
                {course.topics.map((topic) => (
                  <div key={topic.number} className="sp-switcher-topic-group">
                    <div className="sp-switcher-topic-head">
                      <div className="sp-switcher-topic-num">TOPIC {topic.number}</div>
                      <div className="sp-switcher-topic-title">{topic.title}</div>
                    </div>
                    <div className="sp-switcher-sub-list">
                      {topic.subtopics.map((sub) => {
                        const isCurrent = sub.id === currentSubtopicId;
                        const status = subtopicCompletionMap.get(sub.id) ?? {
                          percent: 0,
                          completed: false,
                        };
                        return (
                          <button
                            key={sub.id}
                            type="button"
                            aria-current={isCurrent ? 'page' : undefined}
                            className={`sp-switcher-sub-btn sp-focusable${
                              isCurrent ? ' is-current' : ''
                            }`}
                            onClick={() => {
                              setSwitcherOpen(false);
                              navigate(`/course/${course.id}/${activityType}/${sub.id}`);
                            }}
                          >
                            <div className="sp-switcher-sub-row">
                              <span>
                                {sub.code} - {sub.title}
                              </span>
                              {status.completed && (
                                <span
                                  className="sp-switcher-check"
                                  title="Completed"
                                  aria-label="Completed"
                                >
                                  <Check size={12} strokeWidth={3} />
                                </span>
                              )}
                            </div>
                            <div className="sp-switcher-mini-track" aria-hidden="true">
                              <div
                                className={`sp-switcher-mini-fill${
                                  status.completed ? ' is-done' : ''
                                }`}
                                style={{ width: `${status.percent}%` }}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center: Progress bar (Glossy Cognito multi-segment pill when progressSegments provided) */}
        <div
          className={`sp-topbar__progress-track${progressSegments ? ' is-segmented' : ''}`}
          role="progressbar"
          aria-label="Session progress"
          aria-valuenow={Math.min(100, Math.max(0, Math.round(progressPercent)))}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {progressSegments ? (
            <div className="sp-topbar__progress-segments">
              {progressSegments.greenPct > 0 && (
                <div
                  className="sp-topbar__seg sp-topbar__seg--green"
                  style={{ width: `${Math.min(100, progressSegments.greenPct)}%` }}
                />
              )}
              {progressSegments.redPct > 0 && (
                <div
                  className="sp-topbar__seg sp-topbar__seg--red"
                  style={{ width: `${Math.min(100, progressSegments.redPct)}%` }}
                />
              )}
              {progressSegments.bluePct > 0 && (
                <div
                  className="sp-topbar__seg sp-topbar__seg--blue"
                  style={{ width: `${Math.min(100, progressSegments.bluePct)}%` }}
                />
              )}
            </div>
          ) : (
            <div
              className="sp-topbar__progress-fill"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          )}
        </div>

        {/* Right: Stats / Total Marks / Browse / ⋮ Options */}
        <div className="sp-topbar__right">
          {typeof sessionXp === 'number' && (
            <span
              className={`sp-topbar__xp${activityType === 'lesson' ? ' sp-topbar__xp--lesson' : ''}`}
              aria-live="polite"
            >
              {activityType !== 'lesson' && (
                <Star size={16} fill="#76c0f8" color="#1a96f3" />
              )}
              {activityType === 'lesson' && sessionXp > 0 ? `+${sessionXp} XP` : `${sessionXp} XP`}
            </span>
          )}

          {typeof sessionStreak === 'number' && (
            <span
              className={`sp-topbar__streak hide-mobile${sessionStreak > 0 ? ' is-active' : ''}`}
              title="Session streak"
            >
              <Flame
                size={15}
                fill={sessionStreak > 0 ? '#fdc04e' : 'none'}
                color={sessionStreak > 0 ? '#e67e22' : 'currentColor'}
              />
              {sessionStreak}
            </span>
          )}

          {parsedRightBadge && (
            <div className="sp-topbar__total-wrap">
              {parsedRightBadge.label && (
                <span className="hide-mobile">{parsedRightBadge.label}</span>
              )}
              <span className="sp-topbar__total-box">{parsedRightBadge.value}</span>
            </div>
          )}

          {onToggleBrowse && typeof browseMode === 'boolean' && (
            <label className={`sp-topbar__browse-label${browseMode ? ' is-on' : ''}`}>
              <button
                type="button"
                role="switch"
                aria-checked={browseMode}
                aria-label="Toggle browse mode"
                className="toggle-switch sp-focusable"
                onClick={onToggleBrowse}
              >
                <span className="toggle-switch__knob" />
              </button>
              <span className="hide-mobile">Browse</span>
            </label>
          )}

          <button
            ref={optionsBtnRef}
            type="button"
            aria-label="Activity options"
            aria-expanded={optionsOpen}
            aria-haspopup="dialog"
            className="sp-topbar__menu-btn sp-focusable"
            onClick={() => {
              setOptionsOpen((o) => !o);
              setSwitcherOpen(false);
            }}
          >
            <MoreVertical size={17} />
          </button>

          {optionsOpen && (
            <div
              role="dialog"
              aria-label="Study options"
              className="popover-surface sp-options-popover"
            >
              <div className="sp-options-toggle-group">
                {onToggleBrowse && typeof browseMode === 'boolean' && (
                  <div className="sp-options-tile">
                    <div className="sp-options-tile-row">
                      <span className="sp-options-label">
                        <Layers size={16} /> Browse
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={browseMode}
                        aria-label="Toggle browse mode"
                        className="toggle-switch sp-focusable"
                        onClick={onToggleBrowse}
                      >
                        <span className="toggle-switch__knob" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="sp-options-tile">
                  <div className="sp-options-tile-row">
                    <span className="sp-options-label">
                      <Moon size={16} /> Dark mode
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={profile.preferences.darkMode}
                      aria-label="Toggle dark mode"
                      className="toggle-switch sp-focusable"
                      onClick={() =>
                        updatePreferences({ darkMode: !profile.preferences.darkMode })
                      }
                    >
                      <span className="toggle-switch__knob" />
                    </button>
                  </div>
                </div>

                {/* Notes-specific Cognito controls: Theme colour & Card outlines (1:1 step_438.json) */}
                {activityType === 'notes' && (
                  <>
                    <div className="sp-options-tile">
                      <div className="sp-options-tile-row">
                        <span className="sp-options-label">
                          <Palette size={16} /> Theme colour
                        </span>
                        <span
                          style={{
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            color: 'var(--text-muted)',
                          }}
                        >
                          {activeThemeLabel}
                        </span>
                      </div>
                      <div
                        className="sp-theme-swatches"
                        role="radiogroup"
                        aria-label="Theme colour"
                      >
                        {STUDY_THEME_OPTIONS.map((swatch) => {
                          const selected = studyTheme === swatch.id;
                          return (
                            <button
                              key={swatch.id}
                              type="button"
                              role="menuitemradio"
                              aria-checked={selected}
                              aria-label={swatch.label}
                              title={swatch.label}
                              className="sp-theme-swatch sp-focusable"
                              onClick={() => setStudyTheme(swatch.id)}
                            >
                              <span
                                className="sp-theme-swatch__dot"
                                style={{
                                  backgroundColor: swatch.swatchColor,
                                  border: swatch.needsBorder
                                    ? '1px solid var(--border-card)'
                                    : undefined,
                                }}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="sp-options-tile">
                      <div className="sp-options-tile-row">
                        <span className="sp-options-label">
                          <Scan size={16} /> Card outlines
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={cardOutlines}
                          aria-label="Toggle card outlines"
                          className="toggle-switch sp-focusable"
                          onClick={() => setCardOutlines((v) => !v)}
                        >
                          <span className="toggle-switch__knob" />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Exam Practice AI marking toggle (1:1 step_470.json) */}
                {activityType === 'exam-practice' && (
                  <div className="sp-options-tile">
                    <div className="sp-options-tile-row">
                      <span className="sp-options-label">
                        <Sparkles size={16} /> AI marking
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={profile.preferences.aiMarkingEnabled}
                        aria-label="Toggle AI marking"
                        className="toggle-switch sp-focusable"
                        onClick={() =>
                          updatePreferences({
                            aiMarkingEnabled: !profile.preferences.aiMarkingEnabled,
                          })
                        }
                      >
                        <span className="toggle-switch__knob" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="sp-options-tile">
                  <div className="sp-options-tile-row">
                    <span className="sp-options-label">
                      <Volume2 size={16} /> Sound effects
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={profile.preferences.soundEnabled}
                      aria-label="Toggle sound effects"
                      className="toggle-switch sp-focusable"
                      onClick={() =>
                        updatePreferences({ soundEnabled: !profile.preferences.soundEnabled })
                      }
                    >
                      <span className="toggle-switch__knob" />
                    </button>
                  </div>
                  <div className="sp-options-slider-row">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={profile.preferences.soundVolume}
                      onChange={(e) =>
                        updatePreferences({ soundVolume: Number(e.target.value) })
                      }
                      aria-label="Sound effects volume"
                      className="sp-options-slider"
                    />
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        width: 36,
                        textAlign: 'right',
                        color: 'var(--text-secondary)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {profile.preferences.soundVolume}%
                    </span>
                  </div>
                </div>
              </div>

              {resolvedSubtopicId && activityType !== 'lesson' && (
                <Link
                  to={`/course/${course.id}/lesson/${resolvedSubtopicId}`}
                  onClick={() => setOptionsOpen(false)}
                  className="sp-options-action sp-focusable"
                >
                  <PlayCircle size={16} /> Open video lesson
                </Link>
              )}

              {resolvedSubtopicId && activityType !== 'notes' && (
                <Link
                  to={`/course/${course.id}/notes/${resolvedSubtopicId}`}
                  onClick={() => setOptionsOpen(false)}
                  className="sp-options-action sp-focusable"
                >
                  <BookOpen size={16} /> Open revision notes
                </Link>
              )}

              <button
                type="button"
                onClick={() => {
                  setOptionsOpen(false);
                  window.print();
                }}
                className="sp-options-action sp-focusable"
              >
                <Printer size={16} /> Print / Save PDF
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="sp-options-action sp-focusable"
              >
                {copied ? (
                  <Check size={16} color="var(--color-green-600)" />
                ) : (
                  <LinkIcon size={16} />
                )}
                {copied ? 'Link copied!' : 'Copy link'}
              </button>

              <button
                type="button"
                onClick={handleReportIssue}
                className="sp-options-action sp-focusable"
              >
                {reportedIssue ? (
                  <Check size={16} color="var(--color-green-600)" />
                ) : (
                  <AlertTriangle size={16} />
                )}
                {reportedIssue ? 'Issue reported!' : 'Report an issue'}
              </button>

              {reportedIssue && (
                <div role="status" className="sp-report-toast">
                  <Check size={14} /> Thanks — our curriculum team has been notified.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
