import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  Clock,
  Columns2,
  FileCheck2,
  FileText,
  MoreHorizontal,
  Printer,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CognitoDialog } from '../../components/modals/CognitoDialog';
import { useApp } from '../../store/AppContext';
import '../../styles/study-players.css';
import { CourseDefinition, PastPaperDoc, TopicDefinition } from '../../types/curriculum';

type SpecFilter = 'all' | 'new-9-1' | 'old' | 'with-insert';
type ViewerMode = 'qp' | 'ms' | 'split' | 'insert';

export const PastPapersTab: React.FC<{ course: CourseDefinition }> = ({ course }) => {
  const { logSimpleActivity } = useApp();
  const [viewBy, setViewBy] = useState<'year' | 'topic'>('year');
  const [specFilter, setSpecFilter] = useState<SpecFilter>('all');
  const [paperFilter, setPaperFilter] = useState<string>('all');
  const [expandedYears, setExpandedYears] = useState<string[]>(['2025', '2024']);
  const [openResourcePaperId, setOpenResourcePaperId] = useState<string | null>(null);
  const [viewerDoc, setViewerDoc] = useState<{
    paper: PastPaperDoc;
    mode: ViewerMode;
    topicHeading?: string;
  } | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  // Close insert popover on outside click or Escape
  useEffect(() => {
    if (!openResourcePaperId) return;
    const onOutside = (e: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target as Node)) {
        setOpenResourcePaperId(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenResourcePaperId(null);
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('keydown', onKey);
    };
  }, [openResourcePaperId]);

  // Reset filters when switching courses
  useEffect(() => {
    setSpecFilter('all');
    setPaperFilter('all');
    setOpenResourcePaperId(null);
    const availableYears = Array.from(new Set(course.pastPapers.map((p) => p.year)));
    setExpandedYears(availableYears.slice(0, 2));
  }, [course.id, course.pastPapers]);

  // Extract clean paper number / series filter pills dynamically
  const paperSeriesLabels = useMemo(() => {
    const labels = new Set<string>();
    for (const p of course.pastPapers) {
      const m = p.title.match(/Paper\s+\d+/i);
      if (m) labels.add(m[0]);
    }
    return Array.from(labels).sort();
  }, [course.pastPapers]);

  const hasNewSpec = useMemo(
    () => course.pastPapers.some((p) => p.specEra === 'new-9-1'),
    [course.pastPapers]
  );
  const hasOldSpec = useMemo(
    () => course.pastPapers.some((p) => p.specEra === 'old'),
    [course.pastPapers]
  );
  const insertCount = useMemo(
    () => course.pastPapers.filter((p) => Boolean(p.insertNote)).length,
    [course.pastPapers]
  );

  const filteredPapers = useMemo(() => {
    return course.pastPapers.filter((p) => {
      if (specFilter === 'new-9-1' && p.specEra !== 'new-9-1') return false;
      if (specFilter === 'old' && p.specEra !== 'old') return false;
      if (specFilter === 'with-insert' && !p.insertNote) return false;
      if (paperFilter !== 'all' && !p.title.toLowerCase().includes(paperFilter.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [course.pastPapers, paperFilter, specFilter]);

  const groupedByYear = useMemo(() => {
    const map = new Map<string, PastPaperDoc[]>();
    for (const p of filteredPapers) {
      const list = map.get(p.year) ?? [];
      list.push(p);
      map.set(p.year, list);
    }
    return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filteredPapers]);

  const newSpecYears = groupedByYear.filter(([, docs]) =>
    docs.some((d) => d.specEra === 'new-9-1')
  );
  const oldSpecYears = groupedByYear.filter(([, docs]) => docs.some((d) => d.specEra === 'old'));

  // Synthesize a compiled topic past-paper pack for "By topic" across all courses
  const buildTopicPaperDoc = (topic: TopicDefinition, tIdx: number): PastPaperDoc | null => {
    const basePaper = course.pastPapers[tIdx % Math.max(1, course.pastPapers.length)];
    if (!basePaper) return null;

    const allQuestions = course.pastPapers.flatMap((p) =>
      p.sampleQuestions.map((sq) => ({
        ...sq,
        yearTag: p.year,
      }))
    );

    const keywords = [
      topic.title.toLowerCase(),
      ...topic.subtopics.map((s) => s.title.toLowerCase()),
    ]
      .flatMap((phrase) => phrase.split(/[^a-z0-9]+/))
      .filter((w) => w.length >= 4);

    const matched = allQuestions.filter((sq) => {
      const hay = `${sq.question} ${sq.markScheme.join(' ')}`.toLowerCase();
      return keywords.some((kw) => hay.includes(kw));
    });

    const chosen =
      matched.length >= 2
        ? matched.slice(0, 5)
        : allQuestions.slice(
            (tIdx * 2) % Math.max(1, allQuestions.length),
            ((tIdx * 2) % Math.max(1, allQuestions.length)) + 4
          );

    const sampleQuestions = (chosen.length > 0 ? chosen : basePaper.sampleQuestions).map(
      (sq, idx) => ({
        number: `${idx + 1}`,
        question: sq.question,
        marks: sq.marks,
        markScheme: sq.markScheme,
      })
    );

    const totalMarks = sampleQuestions.reduce((acc, q) => acc + q.marks, 0);

    return {
      ...basePaper,
      id: `${course.id}-topic-pack-${topic.number}`,
      title: `Topic ${topic.number}: ${topic.title} Past Questions`,
      totalMarks,
      durationMinutes: Math.max(25, Math.round(totalMarks * 1.2)),
      sampleQuestions,
    };
  };

  const toggleYear = (y: string) => {
    setExpandedYears((prev) => (prev.includes(y) ? prev.filter((x) => x !== y) : [...prev, y]));
  };

  const allExpanded =
    groupedByYear.length > 0 && groupedByYear.every(([y]) => expandedYears.includes(y));

  const openDoc = (paper: PastPaperDoc, mode: ViewerMode, topicHeading?: string) => {
    setOpenResourcePaperId(null);
    setViewerDoc({ paper, mode, topicHeading });
    logSimpleActivity({
      type: 'past-paper',
      courseId: course.id,
      courseLabel: `${course.qualificationLabel} ${course.subjectName} · ${course.boardLabel}`,
      subjectName: course.subjectName,
      title: `Viewed ${paper.year} ${paper.title} (${mode.toUpperCase()})`,
      xpEarned: 10,
      durationSeconds: 120,
      questionsAnswered: 0,
    });
  };

  const renderPaperList = (yearsList: [string, PastPaperDoc[]][], heading: string) => {
    if (yearsList.length === 0) return null;
    return (
      <div className="cognito-card" style={{ overflow: 'visible', marginBottom: 18 }}>
        <div
          style={{
            padding: '13px 20px',
            fontSize: '0.84rem',
            fontWeight: 800,
            color: 'var(--text-secondary)',
            backgroundColor: 'var(--bg-sunken)',
            borderRadius: '15px 15px 0 0',
          }}
        >
          {heading}
        </div>
        {yearsList.map(([year, docs], idx) => {
          const isOpen = expandedYears.includes(year);
          return (
            <div
              key={year}
              style={{ borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none' }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleYear(year)}
                className={`sp-pp-year-btn sp-focusable${isOpen ? ' is-open' : ''}`}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="sp-pp-chevron">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                  <span>{year}</span>
                </span>
                <span className="sp-mark-badge">
                  {docs.length} {docs.length === 1 ? 'paper' : 'papers'}
                </span>
              </button>

              {isOpen && (
                <div>
                  {docs.map((paper) => {
                    const insertOpen = openResourcePaperId === paper.id;
                    return (
                      <div key={paper.id} className="sp-pp-paper-row">
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontWeight: 800,
                              fontSize: '0.96rem',
                              color: 'var(--text-heading)',
                            }}
                          >
                            {paper.title}
                          </div>
                          <div
                            style={{
                              fontSize: '0.82rem',
                              color: 'var(--text-muted)',
                              marginTop: 2,
                            }}
                          >
                            {paper.series} · {paper.durationMinutes} mins · {paper.totalMarks}{' '}
                            marks · {paper.paperCode}
                          </div>
                        </div>

                        {/* Joined Cognito Segmented Action Group: Paper | Mark scheme | ... (1:1 step_183_shot_1) */}
                        <div className="sp-pp-action-group">
                          <button
                            type="button"
                            className="sp-pp-action-btn sp-focusable"
                            onClick={() => openDoc(paper, 'qp')}
                          >
                            <FileText size={14} /> Paper
                          </button>
                          <button
                            type="button"
                            className="sp-pp-action-btn sp-focusable"
                            onClick={() => openDoc(paper, 'ms')}
                          >
                            <FileCheck2 size={14} /> Mark scheme
                          </button>
                          <button
                            type="button"
                            className="sp-pp-action-btn sp-focusable hide-mobile"
                            title="Split view (Paper | Mark scheme)"
                            onClick={() => openDoc(paper, 'split')}
                          >
                            <Columns2 size={14} /> Split view
                          </button>
                          {paper.insertNote && (
                            <button
                              type="button"
                              aria-label={`Additional resources for ${paper.title}`}
                              aria-expanded={insertOpen}
                              aria-haspopup="menu"
                              className="sp-pp-action-btn sp-focusable"
                              style={{ padding: '8px 10px' }}
                              onClick={() =>
                                setOpenResourcePaperId((id) => (id === paper.id ? null : paper.id))
                              }
                            >
                              <MoreHorizontal size={16} />
                            </button>
                          )}

                          {paper.insertNote && insertOpen && (
                            <div
                              role="menu"
                              className="popover-surface sp-pp-insert-popover"
                            >
                              <button
                                type="button"
                                role="menuitem"
                                className="sp-options-action sp-focusable"
                                style={{ justifyContent: 'space-between' }}
                                onClick={() => openDoc(paper, 'insert')}
                              >
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                  <FileText size={15} /> Insert
                                </span>
                                <ArrowUpRight size={14} color="var(--text-muted)" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={sectionRef} style={{ marginTop: 20 }}>
      {/* Top Controls Row (1:1 step_56_shot_2 & step_172_shot_4) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div role="tablist" aria-label="Past papers grouping" className="sp-segmented">
          <button
            type="button"
            role="tab"
            aria-selected={viewBy === 'year'}
            onClick={() => setViewBy('year')}
            className={`sp-segmented__btn sp-focusable${viewBy === 'year' ? ' is-active' : ''}`}
          >
            By year
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewBy === 'topic'}
            onClick={() => setViewBy('topic')}
            className={`sp-segmented__btn sp-focusable${viewBy === 'topic' ? ' is-active' : ''}`}
          >
            By topic
          </button>
        </div>

        {viewBy === 'year' && groupedByYear.length > 0 && (
          <button
            type="button"
            className="cognito-card sp-focusable"
            onClick={() =>
              setExpandedYears(allExpanded ? [] : groupedByYear.map(([y]) => y))
            }
            style={{
              height: 40,
              padding: '0 14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontWeight: 700,
              fontSize: '0.88rem',
              color: 'var(--text-heading)',
            }}
          >
            <span>{allExpanded ? 'Collapse all' : 'Expand all'}</span>
            {allExpanded ? <ChevronsUp size={15} /> : <ChevronsDown size={15} />}
          </button>
        )}
      </div>

      {/* Clean Filter Pills Bar */}
      {viewBy === 'year' && course.pastPapers.length > 0 && (
        <div className="sp-filter-pills" role="group" aria-label="Filter past papers">
          <button
            type="button"
            aria-pressed={specFilter === 'all' && paperFilter === 'all'}
            className={`sp-filter-pill sp-focusable${
              specFilter === 'all' && paperFilter === 'all' ? ' is-active' : ''
            }`}
            onClick={() => {
              setSpecFilter('all');
              setPaperFilter('all');
            }}
          >
            <span>All papers</span>
            <span className="sp-filter-pill__count">{course.pastPapers.length}</span>
          </button>

          {hasNewSpec && hasOldSpec && (
            <>
              <button
                type="button"
                aria-pressed={specFilter === 'new-9-1'}
                className={`sp-filter-pill sp-focusable${
                  specFilter === 'new-9-1' ? ' is-active' : ''
                }`}
                onClick={() =>
                  setSpecFilter((s) => (s === 'new-9-1' ? 'all' : 'new-9-1'))
                }
              >
                New 9–1 spec
              </button>
              <button
                type="button"
                aria-pressed={specFilter === 'old'}
                className={`sp-filter-pill sp-focusable${specFilter === 'old' ? ' is-active' : ''}`}
                onClick={() => setSpecFilter((s) => (s === 'old' ? 'all' : 'old'))}
              >
                Old spec
              </button>
            </>
          )}

          {paperSeriesLabels.length > 1 &&
            paperSeriesLabels.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={paperFilter === label}
                className={`sp-filter-pill sp-focusable${
                  paperFilter === label ? ' is-active' : ''
                }`}
                onClick={() => setPaperFilter((f) => (f === label ? 'all' : label))}
              >
                {label}
              </button>
            ))}

          {insertCount > 0 && (
            <button
              type="button"
              aria-pressed={specFilter === 'with-insert'}
              className={`sp-filter-pill sp-focusable${
                specFilter === 'with-insert' ? ' is-active' : ''
              }`}
              onClick={() =>
                setSpecFilter((s) => (s === 'with-insert' ? 'all' : 'with-insert'))
              }
            >
              <span>With insert</span>
              <span className="sp-filter-pill__count">{insertCount}</span>
            </button>
          )}
        </div>
      )}

      {/* Intro Description Card (1:1 step_56_shot_2) */}
      <div className="cognito-card" style={{ padding: '16px 20px', marginBottom: 18 }}>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.55 }}>
          Work through real {course.qualificationLabel} {course.subjectName} {course.boardLabel}{' '}
          ({course.specCode}) past papers and official mark schemes, sorted by year. Or switch to
          the by-topic view to see past exam questions ordered by topic.
        </p>
      </div>

      {viewBy === 'year' ? (
        filteredPapers.length === 0 ? (
          <div
            className="cognito-card"
            style={{ padding: 28, textAlign: 'center', color: 'var(--text-muted)' }}
          >
            No past papers match this filter.{' '}
            <button
              type="button"
              className="sp-focusable"
              style={{
                border: 0,
                background: 'transparent',
                color: 'var(--color-blue-500)',
                fontWeight: 800,
              }}
              onClick={() => {
                setSpecFilter('all');
                setPaperFilter('all');
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            {renderPaperList(newSpecYears, 'New 9-1 specification')}
            {renderPaperList(oldSpecYears, 'Old specification')}
          </>
        )
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {course.topics.map((t, tIdx) => {
            const topicDoc = buildTopicPaperDoc(t, tIdx);
            const firstSubtopic = t.subtopics[0];
            return (
              <div
                key={t.number}
                className="cognito-card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--text-heading)' }}>
                    Topic {t.number} — {t.title}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    {t.subtopics.length > 0 ? `${t.subtopics.length} subtopics · ` : ''}
                    {topicDoc
                      ? `${topicDoc.sampleQuestions.length} exam questions · ${topicDoc.totalMarks} marks`
                      : 'Compiled exam-style questions & mark schemes'}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  {topicDoc && (
                    <div className="sp-pp-action-group">
                      <button
                        type="button"
                        className="sp-pp-action-btn sp-focusable"
                        onClick={() =>
                          openDoc(topicDoc, 'qp', `Topic ${t.number}: ${t.title} Pack`)
                        }
                      >
                        <FileText size={14} /> Paper
                      </button>
                      <button
                        type="button"
                        className="sp-pp-action-btn sp-focusable"
                        onClick={() =>
                          openDoc(topicDoc, 'ms', `Topic ${t.number}: ${t.title} Pack`)
                        }
                      >
                        <FileCheck2 size={14} /> Mark scheme
                      </button>
                      <button
                        type="button"
                        className="sp-pp-action-btn sp-focusable"
                        onClick={() =>
                          openDoc(topicDoc, 'split', `Topic ${t.number}: ${t.title} Pack`)
                        }
                      >
                        <Columns2 size={14} /> Split view
                      </button>
                    </div>
                  )}
                  {firstSubtopic && !course.pastPapersOnly && course.examPractice.length > 0 && (
                    <Link
                      to={`/course/${course.id}/exam-practice/${firstSubtopic.id}`}
                      className="tactile-btn tactile-btn--sm tactile-btn--blue"
                    >
                      <Sparkles size={14} /> Exam Practice
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Paper / Mark Scheme / Split View / Insert Modal */}
      <CognitoDialog
        open={Boolean(viewerDoc)}
        onClose={() => setViewerDoc(null)}
        titleId="past-paper-viewer-title"
        size="xl"
      >
        {viewerDoc && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 12,
                paddingRight: 38,
                marginBottom: 16,
              }}
            >
              <div>
                <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 8 }}>
                  {viewerDoc.mode === 'qp'
                    ? 'QUESTION PAPER'
                    : viewerDoc.mode === 'ms'
                      ? 'MARK SCHEME'
                      : viewerDoc.mode === 'split'
                        ? 'SPLIT VIEW · PAPER & MARK SCHEME'
                        : 'INSERT'}
                </span>
                <h2
                  id="past-paper-viewer-title"
                  className="font-heading"
                  style={{ fontSize: '1.65rem' }}
                >
                  {viewerDoc.topicHeading
                    ? `${viewerDoc.topicHeading} · ${viewerDoc.paper.year}`
                    : `${viewerDoc.paper.year} · ${viewerDoc.paper.title}`}
                </h2>
                <div
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginTop: 4,
                  }}
                >
                  <span>Code: {viewerDoc.paper.paperCode}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={14} /> {viewerDoc.paper.durationMinutes} mins
                  </span>
                  <span>{viewerDoc.paper.totalMarks} marks</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <div className="sp-segmented" role="tablist" aria-label="Document view">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewerDoc.mode === 'qp'}
                    className={`sp-segmented__btn sp-focusable${
                      viewerDoc.mode === 'qp' ? ' is-active' : ''
                    }`}
                    onClick={() => setViewerDoc({ ...viewerDoc, mode: 'qp' })}
                  >
                    Paper
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewerDoc.mode === 'ms'}
                    className={`sp-segmented__btn sp-focusable${
                      viewerDoc.mode === 'ms' ? ' is-active' : ''
                    }`}
                    onClick={() => setViewerDoc({ ...viewerDoc, mode: 'ms' })}
                  >
                    Mark scheme
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewerDoc.mode === 'split'}
                    className={`sp-segmented__btn sp-focusable${
                      viewerDoc.mode === 'split' ? ' is-active' : ''
                    }`}
                    onClick={() => setViewerDoc({ ...viewerDoc, mode: 'split' })}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
                  >
                    <Columns2 size={14} /> Split view (Paper | Mark scheme)
                  </button>
                  {viewerDoc.paper.insertNote && (
                    <button
                      type="button"
                      role="tab"
                      aria-selected={viewerDoc.mode === 'insert'}
                      className={`sp-segmented__btn sp-focusable${
                        viewerDoc.mode === 'insert' ? ' is-active' : ''
                      }`}
                      onClick={() => setViewerDoc({ ...viewerDoc, mode: 'insert' })}
                    >
                      Insert
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="tactile-btn tactile-btn--sm"
                  onClick={() => window.print()}
                >
                  <Printer size={15} /> Print / PDF
                </button>
              </div>
            </div>

            {viewerDoc.mode === 'insert' ? (
              <div
                className="cognito-card"
                style={{ padding: 20, backgroundColor: 'var(--bg-sunken)' }}
              >
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>
                  {viewerDoc.paper.insertNote}
                </p>
              </div>
            ) : viewerDoc.mode === 'split' ? (
              <div style={{ display: 'grid', gap: 14 }}>
                {viewerDoc.paper.sampleQuestions.map((sq) => (
                  <div key={sq.number} className="sp-pp-split-grid">
                    <div className="cognito-card" style={{ padding: '16px 20px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 10,
                          marginBottom: 8,
                        }}
                      >
                        <strong style={{ color: 'var(--text-heading)' }}>
                          Question {sq.number}
                        </strong>
                        <span className="sp-mark-badge">
                          [{sq.marks} {sq.marks === 1 ? 'mark' : 'marks'}]
                        </span>
                      </div>
                      <p style={{ margin: 0, color: 'var(--text-primary)', lineHeight: 1.55 }}>
                        {sq.question}
                      </p>
                    </div>

                    <div className="sp-mark-scheme-box" style={{ height: '100%' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: 6,
                        }}
                      >
                        <strong>Q{sq.number} · Official Mark Scheme</strong>
                        <span className="sp-mark-badge">
                          {sq.marks} {sq.marks === 1 ? 'mark' : 'marks'}
                        </span>
                      </div>
                      <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 4 }}>
                        {sq.markScheme.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gap: 14 }}>
                {viewerDoc.paper.sampleQuestions.map((sq) => (
                  <div key={sq.number} className="cognito-card" style={{ padding: '16px 20px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <strong style={{ color: 'var(--text-heading)' }}>
                        Question {sq.number}
                      </strong>
                      <span className="sp-mark-badge">
                        [{sq.marks} {sq.marks === 1 ? 'mark' : 'marks'}]
                      </span>
                    </div>
                    <p style={{ margin: '0 0 10px', color: 'var(--text-primary)', lineHeight: 1.55 }}>
                      {sq.question}
                    </p>
                    {viewerDoc.mode === 'ms' && (
                      <div className="sp-mark-scheme-box">
                        <strong>Official Mark Scheme:</strong>
                        <ul style={{ margin: '6px 0 0', paddingLeft: 18, display: 'grid', gap: 4 }}>
                          {sq.markScheme.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CognitoDialog>
    </section>
  );
};
