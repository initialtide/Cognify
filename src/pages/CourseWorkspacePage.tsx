import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  BookA,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  ChevronsUpDown,
  Info,
  Plus,
  Search,
  Video,
  X,
} from 'lucide-react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { SubjectIcon } from '../components/artwork/SubjectIcons';
import { ProgressModal } from '../components/modals/ProgressModal';
import { ALL_COURSES, EXAM_BOARDS, getCourseById, resolveCourseVariant } from '../data/catalog';
import { useApp } from '../store/AppContext';
import { CourseDefinition, CourseTabId, SubtopicDefinition, TopicDefinition } from '../types/curriculum';
import { PastPapersTab } from './study/PastPapersTab';

/**
 * Splits a topic's subtopics into 3 balanced vertical columns (column-major order),
 * matching real Cognito's signature 3-column reading flow (e.g. 1.1–1.9 | 1.10–1.18 | 1.19–1.25).
 */
function splitIntoColumns(items: SubtopicDefinition[], numCols = 3): SubtopicDefinition[][] {
  if (items.length === 0) return [];
  const cols = Math.min(numCols, items.length);
  const perCol = Math.ceil(items.length / cols);
  const result: SubtopicDefinition[][] = [];
  for (let i = 0; i < cols; i++) {
    const slice = items.slice(i * perCol, (i + 1) * perCol);
    if (slice.length > 0) result.push(slice);
  }
  return result;
}

export const CourseWorkspacePage: React.FC = () => {
  const { courseId, tab } = useParams<{ courseId: string; tab?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, toggleEnrollCourse, setSavedCourseForSubject } = useApp();

  const customState = (location.state as { customCourse?: CourseDefinition } | null)?.customCourse;
  const course = getCourseById(courseId ?? '') ?? customState ?? ALL_COURSES[0];

  const defaultTab: CourseTabId = course.pastPapersOnly
    ? 'past-papers'
    : course.isMaths
      ? 'lessons'
      : 'notes';

  const activeTab = (tab as CourseTabId) || defaultTab;

  const [expandedTopics, setExpandedTopics] = useState<number[]>(() =>
    course.topics.length > 0 ? [course.topics[0].number] : []
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [showTierDropdown, setShowTierDropdown] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setExpandedTopics(course.topics.length > 0 ? [course.topics[0].number] : []);
    setSearchQuery('');
    setSearchOpen(false);
    setShowTierDropdown(false);
    setShowMoreMenu(false);
  }, [course.id]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const progress = profile.progressByCourse[course.id];
  const isEnrolled = profile.enrolledCourseIds.includes(course.id);

  const savedCourseId = profile.savedCourseBySubject[course.subjectSlug];
  const savedCourse = savedCourseId ? getCourseById(savedCourseId) : undefined;
  const showSavedBanner = Boolean(savedCourse && savedCourse.id !== course.id);

  const tabs: { id: CourseTabId; label: string }[] = course.pastPapersOnly
    ? [{ id: 'past-papers', label: 'Past Papers' }]
    : [
        { id: course.isMaths ? 'lessons' : 'notes', label: course.isMaths ? 'Lessons' : 'Notes' },
        { id: 'quiz', label: 'Quiz' },
        { id: 'flashcards', label: 'Flashcards' },
        { id: 'cheat-sheets', label: 'Cheat Sheets' },
        { id: 'exam-practice', label: 'Exam Practice' },
        { id: 'past-papers', label: 'Past Papers' },
      ];

  const allSubtopics = useMemo(
    () => course.topics.flatMap((t) => t.subtopics),
    [course.topics]
  );

  const getExamStatsForSubtopics = (subtopicIds: string[]) => {
    const idSet = new Set(subtopicIds);
    const items = course.examPractice.filter((e) => idSet.has(e.subtopicId));
    let earnedMarks = 0;
    let maxMarks = 0;
    let attemptedParts = 0;
    for (const item of items) {
      for (const part of item.parts) {
        maxMarks += part.marks;
        const score = progress?.examPartScores[part.id];
        if (score) {
          attemptedParts += 1;
          earnedMarks += Math.min(part.marks, score.earnedMarks);
        }
      }
    }
    return { earnedMarks, maxMarks, attemptedParts };
  };

  const getQuizStatsForSubtopics = (subtopicIds: string[]) => {
    const idSet = new Set(subtopicIds);
    const qs = course.quizzes.filter((q) => idSet.has(q.subtopicId));
    let answered = 0;
    let earnedMarks = 0;
    let maxAttemptedMarks = 0;
    for (const q of qs) {
      const attempt = progress?.questionAttempts[q.id];
      if (attempt?.answered) {
        answered += 1;
        earnedMarks += attempt.earnedMarks;
        maxAttemptedMarks += attempt.maxMarks;
      }
    }
    const scorePercent =
      maxAttemptedMarks > 0 ? Math.round((earnedMarks / maxAttemptedMarks) * 100) : null;
    return { total: qs.length, answered, scorePercent };
  };

  const getFlashcardStatsForSubtopics = (subtopicIds: string[]) => {
    const idSet = new Set(subtopicIds);
    const cards = course.flashcards.filter((f) => idSet.has(f.subtopicId));
    let confident = 0;
    let learning = 0;
    for (const c of cards) {
      const status = progress?.flashcardConfidence[c.id]?.status;
      if (status === 'confident') confident += 1;
      else if (status === 'still-learning') learning += 1;
    }
    return { total: cards.length, confident, learning };
  };

  const overallMetrics = useMemo(() => {
    const allIds = allSubtopics.map((s) => s.id);
    if (activeTab === 'quiz') {
      const stats = getQuizStatsForSubtopics(allIds);
      const pct = stats.total > 0 ? Math.round((stats.answered / stats.total) * 100) : 0;
      return {
        pct,
        accentPill: stats.scorePercent !== null ? `${stats.scorePercent}%` : null,
      };
    }
    if (activeTab === 'flashcards') {
      const stats = getFlashcardStatsForSubtopics(allIds);
      const pct = stats.total > 0 ? Math.round((stats.confident / stats.total) * 100) : 0;
      return { pct, accentPill: null };
    }
    if (activeTab === 'exam-practice') {
      const stats = getExamStatsForSubtopics(allIds);
      const pct = stats.maxMarks > 0 ? Math.round((stats.earnedMarks / stats.maxMarks) * 100) : 0;
      return { pct, accentPill: null };
    }
    const readCount = allIds.filter((id) => progress?.readNoteIds.includes(id)).length;
    const total = Math.max(1, allIds.length);
    const pct = Math.round((readCount / total) * 100);
    return { pct, accentPill: null };
  }, [activeTab, allSubtopics, course.quizzes, course.flashcards, course.examPractice, progress]);

  const getTopicPct = (topic: TopicDefinition): number => {
    const ids = topic.subtopics.map((s) => s.id);
    if (activeTab === 'quiz') {
      const stats = getQuizStatsForSubtopics(ids);
      return stats.total > 0 ? Math.round((stats.answered / stats.total) * 100) : 0;
    }
    if (activeTab === 'flashcards') {
      const stats = getFlashcardStatsForSubtopics(ids);
      return stats.total > 0 ? Math.round((stats.confident / stats.total) * 100) : 0;
    }
    if (activeTab === 'exam-practice') {
      const stats = getExamStatsForSubtopics(ids);
      return stats.maxMarks > 0 ? Math.round((stats.earnedMarks / stats.maxMarks) * 100) : 0;
    }
    const readInTopic = ids.filter((id) => progress?.readNoteIds.includes(id)).length;
    return ids.length > 0 ? Math.round((readInTopic / ids.length) * 100) : 0;
  };

  const getSubtopicBarStats = (sub: SubtopicDefinition) => {
    if (activeTab === 'quiz') {
      const qStats = getQuizStatsForSubtopics([sub.id]);
      const fillPct = qStats.total > 0 ? Math.round((qStats.answered / qStats.total) * 100) : 0;
      return {
        greenPct: fillPct,
        amberPct: 0,
        scoreText: qStats.scorePercent !== null ? `${qStats.scorePercent}%` : null,
      };
    }
    if (activeTab === 'flashcards') {
      const fStats = getFlashcardStatsForSubtopics([sub.id]);
      const greenPct = fStats.total > 0 ? Math.round((fStats.confident / fStats.total) * 100) : 0;
      const amberPct = fStats.total > 0 ? Math.round((fStats.learning / fStats.total) * 100) : 0;
      return {
        greenPct,
        amberPct,
        scoreText: fStats.confident > 0 ? `${fStats.confident}/${fStats.total}` : null,
      };
    }
    if (activeTab === 'exam-practice') {
      const eStats = getExamStatsForSubtopics([sub.id]);
      const greenPct =
        eStats.maxMarks > 0 ? Math.round((eStats.earnedMarks / eStats.maxMarks) * 100) : 0;
      return {
        greenPct,
        amberPct: 0,
        scoreText: eStats.attemptedParts > 0 ? `${eStats.earnedMarks}/${eStats.maxMarks}` : null,
      };
    }
    const isRead = progress?.readNoteIds.includes(sub.id) ?? false;
    return {
      greenPct: isRead ? 100 : 0,
      amberPct: 0,
      scoreText: null,
    };
  };

  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return course.topics;
    return course.topics
      .map((t) => ({
        ...t,
        subtopics: t.subtopics.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.code.toLowerCase().includes(q) ||
            t.title.toLowerCase().includes(q)
        ),
      }))
      .filter((t) => t.subtopics.length > 0 || t.title.toLowerCase().includes(q));
  }, [course.topics, searchQuery]);

  const toggleTopic = (num: number) => {
    setExpandedTopics((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const allExpanded =
    filteredTopics.length > 0 &&
    filteredTopics.every((t) => expandedTopics.includes(t.number));

  const switchVariant = (newTier: string, newBoard = course.board) => {
    const variant = resolveCourseVariant(course.qualification, course.subjectSlug, newBoard, newTier);
    const existing = getCourseById(variant.id);
    setShowTierDropdown(false);
    navigate(`/course/${existing ? existing.id : variant.id}/${activeTab}`, {
      state: existing ? undefined : { customCourse: variant },
    });
  };

  return (
    <main className="page-container">
      {/* Saved Course Comparison Info Banner */}
      {showSavedBanner && savedCourse && (
        <div className="info-banner">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Info size={19} color="#1a96f3" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: '0.92rem', lineHeight: 1.45 }}>
              You&apos;re looking at <strong>{course.boardLabel} {course.tier}</strong>, but your saved{' '}
              {course.subjectName} course is <strong>{savedCourse.boardLabel} {savedCourse.tier}</strong>.
              We&apos;ll save your progress in each course, but it won&apos;t carry over from one to the other.
            </div>
          </div>
          <button
            type="button"
            className="info-banner__cta"
            onClick={() => setSavedCourseForSubject(course.subjectSlug, course.id)}
          >
            Make this my saved course <ArrowRight size={15} />
          </button>
        </div>
      )}

      {/* Subject Hero Banner Card — Exact Real Cognito Proportions */}
      <section
        className={`cognito-grid-bg ${course.themeClass}`}
        style={{
          position: 'relative',
          padding: '26px 32px',
          borderRadius: 15,
          border: '1.5px solid var(--subject-border)',
          backgroundColor: 'var(--subject-tint)',
          boxShadow: '0 3px 0 var(--border-lip)',
          marginTop: 6,
        }}
      >
        <span
          className="tilted-badge tilted-badge--edge"
          style={{
            backgroundColor: 'var(--bg-elevated)',
            color: 'var(--text-heading)',
            border: '1.5px solid var(--subject-border)',
            transform: 'none',
            borderRadius: 7,
            padding: '3px 10px',
            fontSize: '0.72rem',
            letterSpacing: '0.05em',
            top: -12,
            left: 16,
          }}
        >
          {course.qualificationLabel} · {course.boardLabel}
        </span>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <SubjectIcon icon={course.icon} size={64} />
            <div>
              <h1 className="font-heading" style={{ fontSize: '1.68rem', fontWeight: 600, lineHeight: 1.15 }}>
                {course.subjectName}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setShowTierDropdown((s) => !s)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: '4px 11px',
                    borderRadius: 999,
                    border: '1px solid rgba(15, 35, 65, 0.08)',
                    backgroundColor: 'rgba(15, 35, 65, 0.055)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                  }}
                >
                  <span>{course.tier}</span>
                  <ChevronsUpDown size={12} color="var(--text-muted)" />
                </button>

                <button
                  type="button"
                  onClick={() => toggleEnrollCourse(course.id)}
                  title={isEnrolled ? 'Saved on Dashboard (click to remove)' : 'Add course to Dashboard'}
                  aria-label={isEnrolled ? 'Remove course from dashboard' : 'Add course to dashboard'}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '999px',
                    border: isEnrolled ? '1px solid #9ee0b8' : '1px solid var(--border-card)',
                    backgroundColor: isEnrolled ? '#e8f8ef' : 'var(--bg-elevated)',
                    color: isEnrolled ? '#2f9e66' : 'var(--text-heading)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isEnrolled ? <Check size={14} strokeWidth={2.6} /> : <Plus size={14} />}
                </button>

                {showTierDropdown && (
                  <div
                    className="popover-surface"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: 0,
                      width: 260,
                      padding: 12,
                    }}
                  >
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', padding: '4px 8px' }}>
                      SWITCH TIER
                    </div>
                    {course.availableTiers.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => switchVariant(t)}
                        className={`workspace-dropdown-item${t === course.tier ? ' is-active' : ''}`}
                      >
                        {t}
                      </button>
                    ))}
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', padding: '10px 8px 6px' }}>
                      SWITCH BOARD
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 6px 4px' }}>
                      {course.availableBoards.map((bId) => {
                        const label = EXAM_BOARDS.find((b) => b.id === bId)?.label ?? bId.toUpperCase();
                        return (
                          <button
                            key={bId}
                            type="button"
                            onClick={() => switchVariant(course.tier, bId)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: 8,
                              border: '1px solid var(--border-card)',
                              background: bId === course.board ? 'var(--color-blue-500)' : 'var(--bg-elevated)',
                              color: bId === course.board ? '#ffffff' : 'var(--text-primary)',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                            }}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {!course.pastPapersOnly && (
            <Link
              to={`/course/${course.id}/revision-session`}
              className="tactile-btn"
              style={{
                minHeight: 40,
                padding: '7px 18px',
                fontSize: '0.87rem',
                borderRadius: 10,
                borderWidth: 1.5,
              }}
            >
              Study multiple subtopics <ArrowRight size={15} />
            </Link>
          )}
        </div>
      </section>

      {/* Activity Navigation Tabs — Exact Real Cognito Clean Pill Row */}
      <div
        style={{
          marginTop: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          position: 'relative',
        }}
      >
        <div className="cognito-tablist" role="tablist" aria-label="Course study modes">
          {tabs.map((t) => {
            const selected = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`cognito-tab ${selected ? 'cognito-tab--active' : ''}`}
                onClick={() => navigate(`/course/${course.id}/${t.id}`, { state: { customCourse: customState } })}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {!course.pastPapersOnly && (
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setShowMoreMenu((m) => !m)}
              className="cognito-tab"
            >
              <span>More</span>
              <ChevronDown size={14} />
            </button>
            {showMoreMenu && (
              <div
                className="popover-surface"
                style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: 210, padding: 10 }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', padding: '4px 10px' }}>
                  STUDY TOOLS
                </div>
                {course.keyTerms.length > 0 && (
                  <Link
                    to={`/course/${course.id}/key-terms`}
                    onClick={() => setShowMoreMenu(false)}
                    className="nav-dropdown-action"
                    style={{ justifyContent: 'flex-start', gap: 9 }}
                  >
                    <BookA size={16} color="var(--color-purple-500)" /> Key terms
                  </Link>
                )}
                <Link
                  to={`/course/${course.id}/videos`}
                  onClick={() => setShowMoreMenu(false)}
                  className="nav-dropdown-action"
                  style={{ justifyContent: 'flex-start', gap: 9 }}
                >
                  <Video size={16} color="var(--color-blue-500)" /> Videos
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tab Content */}
      {activeTab === 'past-papers' ? (
        <PastPapersTab course={course} />
      ) : activeTab === 'cheat-sheets' ? (
        <section style={{ marginTop: 22 }}>
          {course.cheatSheets.length === 0 ? (
            <div className="cognito-card" style={{ padding: 36, textAlign: 'center', color: 'var(--text-muted)' }}>
              Cheat sheets for this subject are coming soon — use Notes, Quizzes, and Past Papers meanwhile!
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))', gap: 18 }}>
              {course.cheatSheets.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/course/${course.id}/cheat-sheets/${cs.slug}`}
                  className="cognito-card cognito-card--interactive"
                  style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14 }}
                >
                  <div>
                    <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 12 }}>
                      {cs.topicName}
                    </span>
                    <h3 className="font-heading" style={{ fontSize: '1.3rem', marginBottom: 8 }}>
                      {cs.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cs.summary}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-link)' }}>
                    <span>Open &amp; download</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      ) : (
        /* Topic Cards + Exact Real Cognito 3-Column Subtopic Grid */
        <section style={{ marginTop: 16 }}>
          {/* Compact Toolbar: Left Overall Progress Pill | Right Search Toggle + Expand All */}
          <div className="workspace-toolbar">
            <button
              type="button"
              onClick={() => setShowProgressModal(true)}
              className="workspace-progress-card"
            >
              <span style={{ fontWeight: 600, fontSize: '0.82rem', whiteSpace: 'nowrap', color: 'var(--text-secondary)' }}>
                Overall progress:
              </span>
              <div className="workspace-mini-track" style={{ width: 118 }}>
                <div className="workspace-mini-fill" style={{ width: `${overallMetrics.pct}%` }} />
              </div>
              {overallMetrics.accentPill && (
                <span className="score-pill">{overallMetrics.accentPill}</span>
              )}
              <ChevronRight size={14} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            </button>

            <div className="workspace-toolbar-right">
              {searchOpen || searchQuery ? (
                <div className="workspace-filter-wrap">
                  <Search
                    size={14}
                    style={{
                      position: 'absolute',
                      left: 11,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                      pointerEvents: 'none',
                    }}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      const val = e.target.value;
                      setSearchQuery(val);
                      if (val.trim()) {
                        setExpandedTopics(course.topics.map((t) => t.number));
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape' && !searchQuery) setSearchOpen(false);
                    }}
                    placeholder="Filter topics..."
                    aria-label="Filter topics"
                    className="workspace-filter-input"
                  />
                  <button
                    type="button"
                    aria-label="Close topic filter"
                    onClick={() => {
                      setSearchQuery('');
                      setSearchOpen(false);
                    }}
                    style={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      border: 0,
                      background: 'transparent',
                      padding: 4,
                      color: 'var(--text-muted)',
                      display: 'inline-flex',
                    }}
                  >
                    <X size={13} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  aria-label="Filter topics"
                  title="Filter topics"
                  onClick={() => setSearchOpen(true)}
                  className="workspace-icon-btn"
                >
                  <Search size={16} />
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  setExpandedTopics(allExpanded ? [] : filteredTopics.map((t) => t.number))
                }
                className="workspace-expand-btn"
              >
                <span>{allExpanded ? 'Collapse all' : 'Expand all'}</span>
                {allExpanded ? <ChevronsUp size={15} /> : <ChevronsDown size={15} />}
              </button>
            </div>
          </div>

          {/* Topic Accordions with Real Cognito 3-Column Subtopics */}
          {filteredTopics.length === 0 ? (
            <div className="cognito-card" style={{ padding: 36, textAlign: 'center', color: 'var(--text-muted)' }}>
              No topics match &ldquo;{searchQuery}&rdquo;.{' '}
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSearchOpen(false);
                }}
                style={{ border: 0, background: 'transparent', color: 'var(--text-link)', fontWeight: 700 }}
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 14 }}>
              {filteredTopics.map((topic) => {
                const isOpen = expandedTopics.includes(topic.number);
                const topicPct = getTopicPct(topic);
                const columns = splitIntoColumns(topic.subtopics, 3);

                return (
                  <div key={topic.number} className="workspace-topic-card">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleTopic(topic.number)}
                      className="workspace-topic-header"
                    >
                      <span className={`workspace-topic-title${isOpen ? ' is-open' : ''}`}>
                        {isOpen ? (
                          <ChevronDown size={15} style={{ flexShrink: 0 }} />
                        ) : (
                          <ChevronRight size={15} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                        )}
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          <strong style={{ fontWeight: 700 }}>Topic {topic.number}</strong>
                          <span style={{ fontWeight: 500 }}> - {topic.title}</span>
                        </span>
                      </span>

                      <div className="workspace-mini-track" aria-label={`${topicPct}% complete`}>
                        <div className="workspace-mini-fill" style={{ width: `${topicPct}%` }} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="workspace-subtopics-grid">
                        {columns.map((col, colIndex) => (
                          <div key={colIndex} className="workspace-subtopics-col">
                            {col.map((sub) => {
                              const targetRoute =
                                activeTab === 'quiz'
                                  ? `/course/${course.id}/quiz/${sub.id}`
                                  : activeTab === 'flashcards'
                                    ? `/course/${course.id}/flashcards/${sub.id}`
                                    : activeTab === 'exam-practice'
                                      ? `/course/${course.id}/exam-practice/${sub.id}`
                                      : `/course/${course.id}/notes/${sub.id}`;

                              const bar = getSubtopicBarStats(sub);
                              const fullLabel = `${sub.code} - ${sub.title}`;

                              return (
                                <Link
                                  key={sub.id}
                                  to={targetRoute}
                                  title={fullLabel}
                                  className="workspace-subtopic-cell"
                                >
                                  <span className="workspace-subtopic-cell__label">{fullLabel}</span>
                                  <span className="workspace-subtopic-cell__meta">
                                    <span className="workspace-subtopic-cell__bar" aria-hidden="true">
                                      {bar.greenPct > 0 && (
                                        <span
                                          style={{
                                            width: `${bar.greenPct}%`,
                                            backgroundColor: 'var(--color-green-500)',
                                          }}
                                        />
                                      )}
                                      {bar.amberPct > 0 && (
                                        <span
                                          style={{
                                            width: `${bar.amberPct}%`,
                                            backgroundColor: 'var(--color-amber-400)',
                                          }}
                                        />
                                      )}
                                    </span>
                                    {bar.scoreText && (
                                      <span className="workspace-subtopic-cell__score">
                                        {bar.scoreText}
                                      </span>
                                    )}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      <ProgressModal
        open={showProgressModal}
        onClose={() => setShowProgressModal(false)}
        course={course}
      />
    </main>
  );
};
