import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookA,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  ChevronsUpDown,
  Clock,
  Info,
  Layers,
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
import { CourseDefinition, CourseTabId, TopicDefinition } from '../types/curriculum';
import { PastPapersTab } from './study/PastPapersTab';

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
  const [showTierDropdown, setShowTierDropdown] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);

  useEffect(() => {
    setExpandedTopics(course.topics.length > 0 ? [course.topics[0].number] : []);
    setSearchQuery('');
    setShowTierDropdown(false);
    setShowMoreMenu(false);
  }, [course.id]);

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
        summary: `${stats.answered} / ${stats.total} answered`,
        accentPill: stats.scorePercent !== null ? `${stats.scorePercent}%` : null,
      };
    }
    if (activeTab === 'flashcards') {
      const stats = getFlashcardStatsForSubtopics(allIds);
      const pct = stats.total > 0 ? Math.round((stats.confident / stats.total) * 100) : 0;
      return {
        pct,
        summary: `${stats.confident} / ${stats.total} Confident`,
        accentPill: null,
      };
    }
    if (activeTab === 'exam-practice') {
      const stats = getExamStatsForSubtopics(allIds);
      const pct = stats.maxMarks > 0 ? Math.round((stats.earnedMarks / stats.maxMarks) * 100) : 0;
      return {
        pct,
        summary: `${stats.earnedMarks} / ${stats.maxMarks} marks`,
        accentPill: null,
      };
    }
    const readCount = allIds.filter((id) => progress?.readNoteIds.includes(id)).length;
    const total = Math.max(1, allIds.length);
    const pct = Math.round((readCount / total) * 100);
    return {
      pct,
      summary: `${pct}%`,
      accentPill: null,
    };
  }, [activeTab, allSubtopics, course.quizzes, course.flashcards, course.examPractice, progress]);

  const getTopicMetrics = (topic: TopicDefinition) => {
    const ids = topic.subtopics.map((s) => s.id);
    if (activeTab === 'quiz') {
      const stats = getQuizStatsForSubtopics(ids);
      const pct = stats.total > 0 ? Math.round((stats.answered / stats.total) * 100) : 0;
      return { pct, label: `${stats.answered} / ${stats.total} answered` };
    }
    if (activeTab === 'flashcards') {
      const stats = getFlashcardStatsForSubtopics(ids);
      const pct = stats.total > 0 ? Math.round((stats.confident / stats.total) * 100) : 0;
      return { pct, label: `${stats.confident} / ${stats.total} Confident` };
    }
    if (activeTab === 'exam-practice') {
      const stats = getExamStatsForSubtopics(ids);
      const pct = stats.maxMarks > 0 ? Math.round((stats.earnedMarks / stats.maxMarks) * 100) : 0;
      return { pct, label: `${stats.earnedMarks} / ${stats.maxMarks} marks` };
    }
    const readInTopic = ids.filter((id) => progress?.readNoteIds.includes(id)).length;
    const pct = ids.length > 0 ? Math.round((readInTopic / ids.length) * 100) : 0;
    return { pct, label: `${readInTopic} / ${ids.length} read` };
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
            <div style={{ fontSize: '0.94rem', lineHeight: 1.45 }}>
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

      {/* Subject Hero Banner Card — Airy Cognito Proportions */}
      <section
        className={`cognito-grid-bg ${course.themeClass}`}
        style={{
          position: 'relative',
          padding: '38px 40px',
          borderRadius: 22,
          border: '2px solid var(--subject-border)',
          backgroundColor: 'var(--subject-tint)',
          boxShadow: '0 4px 0 var(--border-lip)',
          marginTop: 8,
        }}
      >
        <span
          className="tilted-badge tilted-badge--edge"
          style={{
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-heading)',
            border: '2px solid var(--subject-border)',
          }}
        >
          {course.qualificationLabel} · {course.boardLabel}
        </span>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <SubjectIcon icon={course.icon} size={94} />
            <div>
              <h1 className="font-heading" style={{ fontSize: '2.55rem', lineHeight: 1.08 }}>
                {course.subjectName}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 12, position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setShowTierDropdown((s) => !s)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '7px 15px',
                    borderRadius: 999,
                    border: '1px solid var(--border-card)',
                    backgroundColor: 'var(--bg-card)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                  }}
                >
                  <span>{course.tier}</span>
                  <ChevronsUpDown size={14} color="var(--text-muted)" />
                </button>

                <button
                  type="button"
                  onClick={() => toggleEnrollCourse(course.id)}
                  title={isEnrolled ? 'Saved on Dashboard (click to remove)' : 'Add course to Dashboard'}
                  aria-label={isEnrolled ? 'Remove course from dashboard' : 'Add course to dashboard'}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '999px',
                    border: '1px solid var(--border-card)',
                    backgroundColor: isEnrolled ? 'var(--color-green-500)' : 'var(--bg-card)',
                    color: isEnrolled ? '#ffffff' : 'var(--text-heading)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isEnrolled ? <Check size={16} strokeWidth={2.8} /> : <Plus size={16} />}
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
              style={{ minHeight: 50, padding: '10px 24px', fontSize: '0.98rem' }}
            >
              Study multiple subtopics <ArrowRight size={17} />
            </Link>
          )}
        </div>
      </section>

      {/* Activity Navigation Tabs — Exact Cognito Full-Width Underline Rail */}
      <div
        style={{
          marginTop: 32,
          borderBottom: '1.5px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
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
              style={{ position: 'relative' }}
            >
              <span>More</span>
              <ChevronDown size={15} />
              <span
                style={{
                  position: 'absolute',
                  top: 2,
                  right: -2,
                  backgroundColor: 'var(--color-blue-500)',
                  color: '#ffffff',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  padding: '1px 5px',
                  borderRadius: 5,
                }}
              >
                NEW
              </span>
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
        <section style={{ marginTop: 28 }}>
          {course.cheatSheets.length === 0 ? (
            <div className="cognito-card" style={{ padding: 36, textAlign: 'center', color: 'var(--text-muted)' }}>
              Cheat sheets for this subject are coming soon — use Notes, Quizzes, and Past Papers meanwhile!
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 20 }}>
              {course.cheatSheets.map((cs) => (
                <Link
                  key={cs.id}
                  to={`/course/${course.id}/cheat-sheets/${cs.slug}`}
                  className="cognito-card cognito-card--interactive"
                  style={{ padding: 26, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}
                >
                  <div>
                    <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 14 }}>
                      {cs.topicName}
                    </span>
                    <h3 className="font-heading" style={{ fontSize: '1.4rem', marginBottom: 8 }}>
                      {cs.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{cs.summary}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-link)' }}>
                    <span>Open &amp; download</span>
                    <ArrowRight size={15} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      ) : (
        /* Topic List (Notes / Lessons / Quiz / Flashcards / Exam Practice) */
        <section style={{ marginTop: 26 }}>
          {/* Dynamic Overall Progress + Inline Filter + Expand/Collapse */}
          <div className="workspace-toolbar">
            <button
              type="button"
              onClick={() => setShowProgressModal(true)}
              className="cognito-card workspace-progress-card"
            >
              <span style={{ fontWeight: 700, fontSize: '0.92rem', whiteSpace: 'nowrap', color: 'var(--text-heading)' }}>
                Overall progress:
              </span>
              <div style={{ flex: 1, minWidth: 90, height: 10, borderRadius: 999, backgroundColor: 'var(--bg-sunken)', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${overallMetrics.pct}%`,
                    height: '100%',
                    backgroundColor: 'var(--color-green-500)',
                    borderRadius: 999,
                    transition: 'width 200ms ease',
                  }}
                />
              </div>
              <span style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                {overallMetrics.summary}
              </span>
              {overallMetrics.accentPill && (
                <span className="score-pill">{overallMetrics.accentPill}</span>
              )}
              <ChevronRight size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            </button>

            <div className="workspace-filter-wrap">
              <Search
                size={15}
                style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  if (val.trim()) {
                    setExpandedTopics(course.topics.map((t) => t.number));
                  }
                }}
                placeholder="Filter topics..."
                aria-label="Filter topics"
                className="workspace-filter-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear filter"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: 0,
                    background: 'transparent',
                    padding: 4,
                    color: 'var(--text-muted)',
                    display: 'inline-flex',
                  }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setExpandedTopics(allExpanded ? [] : filteredTopics.map((t) => t.number))
              }
              className="cognito-card"
              style={{
                height: 48,
                padding: '0 18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--text-heading)',
              }}
            >
              <span>{allExpanded ? 'Collapse all' : 'Expand all'}</span>
              {allExpanded ? <ChevronsUp size={16} /> : <ChevronsDown size={16} />}
            </button>
          </div>

          {/* Topic Accordions — Clean & Uncluttered like Real Cognito */}
          {filteredTopics.length === 0 ? (
            <div className="cognito-card" style={{ padding: 36, textAlign: 'center', color: 'var(--text-muted)' }}>
              No topics match &ldquo;{searchQuery}&rdquo;.{' '}
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{ border: 0, background: 'transparent', color: 'var(--text-link)', fontWeight: 700 }}
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 16 }}>
              {filteredTopics.map((topic) => {
                const isOpen = expandedTopics.includes(topic.number);
                const topicMetrics = getTopicMetrics(topic);

                return (
                  <div key={topic.number} className="cognito-card" style={{ overflow: 'hidden' }}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleTopic(topic.number)}
                      className="workspace-topic-header"
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: '1.08rem', color: 'var(--text-heading)' }}>
                          Topic {topic.number} - {topic.title}
                        </div>
                        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 175, height: 7, borderRadius: 999, backgroundColor: 'var(--bg-sunken)', overflow: 'hidden' }}>
                            <div
                              style={{
                                width: `${topicMetrics.pct}%`,
                                height: '100%',
                                backgroundColor: 'var(--color-green-500)',
                                borderRadius: 999,
                                transition: 'width 200ms ease',
                              }}
                            />
                          </div>
                          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                            {topicMetrics.label}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        size={18}
                        color="var(--text-muted)"
                        style={{
                          transform: isOpen ? 'rotate(90deg)' : 'none',
                          transition: 'transform 150ms ease',
                          flexShrink: 0,
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
                        {topic.subtopics.map((sub) => {
                          const targetRoute =
                            activeTab === 'quiz'
                              ? `/course/${course.id}/quiz/${sub.id}`
                              : activeTab === 'flashcards'
                                ? `/course/${course.id}/flashcards/${sub.id}`
                                : activeTab === 'exam-practice'
                                  ? `/course/${course.id}/exam-practice/${sub.id}`
                                  : `/course/${course.id}/notes/${sub.id}`;

                          let status: 'none' | 'progress' | 'complete' = 'none';
                          let rightContent: React.ReactNode = null;

                          if (activeTab === 'quiz') {
                            const qStats = getQuizStatsForSubtopics([sub.id]);
                            if (qStats.total > 0 && qStats.answered >= qStats.total) {
                              status = 'complete';
                            } else if (qStats.answered > 0) {
                              status = 'progress';
                            }
                            rightContent =
                              qStats.scorePercent !== null ? (
                                <>
                                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                                    {qStats.answered} / {qStats.total}
                                  </span>
                                  <span
                                    className={`score-pill${qStats.scorePercent < 70 ? ' score-pill--amber' : ''}`}
                                  >
                                    {qStats.scorePercent}%
                                  </span>
                                </>
                              ) : (
                                <span className="workspace-start-pill">
                                  {qStats.total > 0
                                    ? `${qStats.total} ${qStats.total === 1 ? 'question' : 'questions'}`
                                    : 'Practice quiz'}
                                </span>
                              );
                          } else if (activeTab === 'flashcards') {
                            const fStats = getFlashcardStatsForSubtopics([sub.id]);
                            if (fStats.total > 0 && fStats.confident >= fStats.total) {
                              status = 'complete';
                            } else if (fStats.confident > 0 || fStats.learning > 0) {
                              status = 'progress';
                            }
                            const confPct =
                              fStats.total > 0 ? Math.round((fStats.confident / fStats.total) * 100) : 0;
                            const learnPct =
                              fStats.total > 0 ? Math.round((fStats.learning / fStats.total) * 100) : 0;

                            rightContent =
                              fStats.total === 0 ? (
                                <span className="workspace-start-pill">
                                  <Layers size={12} /> Start deck
                                </span>
                              ) : fStats.confident === 0 && fStats.learning === 0 ? (
                                <>
                                  <span className="workspace-confidence-bar" aria-hidden="true" />
                                  <span className="workspace-start-pill">
                                    <Layers size={12} /> Start deck ({fStats.total})
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="workspace-confidence-bar" aria-hidden="true">
                                    <span style={{ width: `${confPct}%`, backgroundColor: 'var(--color-green-500)' }} />
                                    <span style={{ width: `${learnPct}%`, backgroundColor: 'var(--color-amber-400)' }} />
                                  </span>
                                  <span
                                    className={`score-pill${
                                      fStats.confident >= fStats.total ? '' : ' score-pill--blue'
                                    }`}
                                  >
                                    {fStats.confident} / {fStats.total} Confident
                                  </span>
                                </>
                              );
                          } else if (activeTab === 'exam-practice') {
                            const eStats = getExamStatsForSubtopics([sub.id]);
                            if (eStats.maxMarks > 0 && eStats.earnedMarks >= eStats.maxMarks) {
                              status = 'complete';
                            } else if (eStats.attemptedParts > 0) {
                              status = 'progress';
                            }
                            const pct =
                              eStats.maxMarks > 0
                                ? Math.round((eStats.earnedMarks / eStats.maxMarks) * 100)
                                : 0;

                            rightContent =
                              eStats.maxMarks === 0 ? (
                                <span className="workspace-start-pill">Exam questions</span>
                              ) : eStats.attemptedParts > 0 ? (
                                <span className={`score-pill${pct < 70 ? ' score-pill--amber' : ''}`}>
                                  {eStats.earnedMarks} / {eStats.maxMarks} marks
                                </span>
                              ) : (
                                <span className="workspace-start-pill">
                                  {eStats.maxMarks} {eStats.maxMarks === 1 ? 'mark' : 'marks'}
                                </span>
                              );
                          } else {
                            // Notes / Lessons
                            const isRead = progress?.readNoteIds.includes(sub.id) ?? false;
                            if (isRead) status = 'complete';
                            const readingMins = course.notes[sub.id]?.readingMinutes ?? sub.readingMinutes;
                            rightContent = (
                              <span className={`score-pill${isRead ? '' : ' score-pill--neutral'}`}>
                                <Clock size={12} style={{ marginRight: 4 }} />
                                {readingMins} min
                              </span>
                            );
                          }

                          return (
                            <Link key={sub.id} to={targetRoute} className="workspace-subtopic-row">
                              <div className="workspace-subtopic-left">
                                <span
                                  className={`workspace-status-indicator${
                                    status === 'complete'
                                      ? ' is-complete'
                                      : status === 'progress'
                                        ? ' is-progress'
                                        : ''
                                  }`}
                                  aria-hidden="true"
                                >
                                  {status === 'complete' ? (
                                    <Check size={12} strokeWidth={3} />
                                  ) : status === 'progress' ? (
                                    <span
                                      style={{
                                        width: 7,
                                        height: 7,
                                        borderRadius: 999,
                                        backgroundColor: 'currentColor',
                                      }}
                                    />
                                  ) : null}
                                </span>

                                <span
                                  className={`workspace-subtopic-code${
                                    status === 'complete' ? ' is-complete' : ''
                                  }`}
                                >
                                  {sub.code}
                                </span>

                                <span className="workspace-subtopic-title">{sub.title}</span>
                              </div>

                              <div className="workspace-subtopic-right">
                                {rightContent}
                                <ChevronRight size={17} color="var(--text-muted)" />
                              </div>
                            </Link>
                          );
                        })}
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
