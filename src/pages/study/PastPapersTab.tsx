import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BookOpenCheck,
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  ChevronsUp,
  Clock,
  Columns2,
  ExternalLink,
  FileCheck2,
  FileText,
  MoreHorizontal,
  Pause,
  Play,
  Printer,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CognitoDialog } from '../../components/modals/CognitoDialog';
import { useApp } from '../../store/AppContext';
import '../../styles/study-players.css';
import { CourseDefinition, PastPaperDoc, TopicDefinition } from '../../types/curriculum';

type SpecFilter = 'all' | 'official' | 'new-9-1' | 'old' | 'with-insert';
type ViewerMode = 'qp' | 'ms' | 'split' | 'insert' | 'report';

function sortYearKeys(a: string, b: string): number {
  const aSpec = /specimen/i.test(a);
  const bSpec = /specimen/i.test(b);
  const aNum = parseInt(a, 10) || 0;
  const bNum = parseInt(b, 10) || 0;
  // Real exam sessions before specimen papers if same era; newest first within each group
  if (aSpec !== bSpec) return aSpec ? 1 : -1;
  return bNum - aNum;
}

function formatTimer(seconds: number): string {
  const clamped = Math.max(0, seconds);
  const hrs = Math.floor(clamped / 3600);
  const mins = Math.floor((clamped % 3600) / 60);
  const secs = clamped % 60;
  const mm = String(mins).padStart(2, '0');
  const ss = String(secs).padStart(2, '0');
  return hrs > 0 ? `${hrs}:${mm}:${ss}` : `${mm}:${ss}`;
}

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

  // Built-in timed exam stopwatch for real past paper practice
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [pdfRenderer, setPdfRenderer] = useState<'universal' | 'native'>('universal');

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

  // Reset filters & expand the first 2 year groups when switching courses
  useEffect(() => {
    setSpecFilter('all');
    setPaperFilter('all');
    setOpenResourcePaperId(null);
    const availableYears = Array.from(new Set(course.pastPapers.map((p) => p.year))).sort(
      sortYearKeys
    );
    setExpandedYears(availableYears.slice(0, 2));
  }, [course.id, course.pastPapers]);

  // Countdown tick while timer is running
  useEffect(() => {
    if (!timerRunning || !viewerDoc) return;
    const id = window.setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning, viewerDoc]);

  const officialPortalUrl = useMemo(
    () => course.pastPapers.find((p) => p.officialPortalUrl)?.officialPortalUrl,
    [course.pastPapers]
  );

  const officialPdfCount = useMemo(
    () => course.pastPapers.filter((p) => Boolean(p.questionPaperUrl)).length,
    [course.pastPapers]
  );

  // Extract clean paper number / series filter pills dynamically
  const paperSeriesLabels = useMemo(() => {
    const labels = new Set<string>();
    for (const p of course.pastPapers) {
      const m = p.title.match(/Paper\s+\d+/i);
      if (m) labels.add(m[0]);
    }
    return Array.from(labels).sort((a, b) => {
      const na = parseInt(a.replace(/\D/g, ''), 10) || 0;
      const nb = parseInt(b.replace(/\D/g, ''), 10) || 0;
      return na - nb;
    });
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
    () => course.pastPapers.filter((p) => Boolean(p.insertUrl || p.insertNote)).length,
    [course.pastPapers]
  );

  const filteredPapers = useMemo(() => {
    return course.pastPapers.filter((p) => {
      if (specFilter === 'official' && !p.questionPaperUrl) return false;
      if (specFilter === 'new-9-1' && p.specEra !== 'new-9-1') return false;
      if (specFilter === 'old' && p.specEra !== 'old') return false;
      if (specFilter === 'with-insert' && !p.insertUrl && !p.insertNote) return false;
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
    return Array.from(map.entries()).sort((a, b) => sortYearKeys(a[0], b[0]));
  }, [filteredPapers]);

  const officialSpecYears = groupedByYear.filter(([, docs]) =>
    docs.some((d) => Boolean(d.questionPaperUrl))
  );
  const practiceNewSpecYears = groupedByYear.filter(
    ([, docs]) =>
      docs.every((d) => !d.questionPaperUrl) && docs.some((d) => d.specEra === 'new-9-1')
  );
  const oldSpecYears = groupedByYear.filter(
    ([, docs]) => docs.every((d) => !d.questionPaperUrl) && docs.some((d) => d.specEra === 'old')
  );

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
      questionPaperUrl: undefined,
      markSchemeUrl: undefined,
      insertUrl: undefined,
      examinerReportUrl: undefined,
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
    setTimerRunning(false);
    setTimerSeconds(paper.durationMinutes * 60);
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

  const getActivePdfUrl = (doc: { paper: PastPaperDoc; mode: ViewerMode }): string | undefined => {
    if (doc.mode === 'qp') return doc.paper.questionPaperUrl;
    if (doc.mode === 'ms') return doc.paper.markSchemeUrl;
    if (doc.mode === 'insert') return doc.paper.insertUrl;
    if (doc.mode === 'report') return doc.paper.examinerReportUrl;
    return doc.paper.questionPaperUrl;
  };

  const renderPaperList = (
    yearsList: [string, PastPaperDoc[]][],
    heading: string,
    isOfficialGroup = false
  ) => {
    if (yearsList.length === 0) return null;
    return (
      <div className="cognito-card" style={{ overflow: 'visible', marginBottom: 18 }}>
        <div
          style={{
            padding: '12px 20px',
            fontSize: '0.82rem',
            fontWeight: 800,
            color: isOfficialGroup ? 'var(--color-green-700)' : 'var(--text-secondary)',
            backgroundColor: isOfficialGroup ? 'var(--color-green-50)' : 'var(--bg-sunken)',
            borderRadius: '14px 14px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            {isOfficialGroup && <ShieldCheck size={15} />}
            <span>{heading}</span>
          </span>
          {isOfficialGroup && (
            <span style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.88 }}>
              Direct official PDFs from Cambridge International ({course.specCode})
            </span>
          )}
        </div>
        {yearsList.map(([year, docs], idx) => {
          const isOpen = expandedYears.includes(year);
          const cleanCode = course.specCode.split('/')[0]?.trim() || course.specCode;
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
                  <span>
                    {year} ({cleanCode})
                  </span>
                </span>
                <span className="sp-mark-badge">
                  {docs.length} {docs.length === 1 ? 'paper' : 'papers'}
                </span>
              </button>

              {isOpen && (
                <div className="cognito-accordion-body">
                  {docs.map((paper) => {
                    const insertOpen = openResourcePaperId === paper.id;
                    const hasOfficialPdf = Boolean(paper.questionPaperUrl);
                    const hasExtraMenu = Boolean(
                      paper.insertUrl ||
                        paper.insertNote ||
                        paper.examinerReportUrl ||
                        paper.questionPaperUrl
                    );

                    return (
                      <div key={paper.id} className="sp-pp-paper-row">
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              flexWrap: 'wrap',
                            }}
                          >
                            <span
                              style={{
                                fontWeight: 800,
                                fontSize: '0.96rem',
                                color: 'var(--text-heading)',
                              }}
                            >
                              {paper.title}
                            </span>
                            {hasOfficialPdf && (
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: 4,
                                  padding: '2px 8px',
                                  borderRadius: 999,
                                  fontSize: '0.7rem',
                                  fontWeight: 800,
                                  backgroundColor: 'var(--color-green-100)',
                                  color: 'var(--color-green-700)',
                                  letterSpacing: '0.02em',
                                }}
                              >
                                <ShieldCheck size={11} /> OFFICIAL PDF
                              </span>
                            )}
                          </div>
                          <div
                            style={{
                              fontSize: '0.82rem',
                              color: 'var(--text-muted)',
                              marginTop: 3,
                            }}
                          >
                            {paper.series} · {paper.durationMinutes} mins · {paper.totalMarks}{' '}
                            marks · {paper.paperCode}
                          </div>
                        </div>

                        {/* Joined Cognito Segmented Action Group: Paper | Mark scheme | Split PDF | ... */}
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
                            disabled={hasOfficialPdf && !paper.markSchemeUrl}
                            onClick={() => openDoc(paper, 'ms')}
                          >
                            <FileCheck2 size={14} /> Mark scheme
                          </button>
                          <button
                            type="button"
                            className="sp-pp-action-btn sp-focusable hide-mobile"
                            title="Split view (Paper | Mark scheme)"
                            disabled={hasOfficialPdf && !paper.markSchemeUrl}
                            onClick={() => openDoc(paper, 'split')}
                          >
                            <Columns2 size={14} /> Split view
                          </button>
                          {hasExtraMenu && (
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

                          {hasExtraMenu && insertOpen && (
                            <div
                              role="menu"
                              className="popover-surface sp-pp-insert-popover"
                              style={{ minWidth: 230 }}
                            >
                              {paper.questionPaperUrl && (
                                <a
                                  href={paper.questionPaperUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  role="menuitem"
                                  className="sp-options-action sp-focusable"
                                  style={{ justifyContent: 'space-between' }}
                                  onClick={() => setOpenResourcePaperId(null)}
                                >
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    <ExternalLink size={14} /> Paper PDF (new tab)
                                  </span>
                                  <ArrowUpRight size={14} color="var(--text-muted)" />
                                </a>
                              )}
                              {paper.markSchemeUrl && (
                                <a
                                  href={paper.markSchemeUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  role="menuitem"
                                  className="sp-options-action sp-focusable"
                                  style={{ justifyContent: 'space-between' }}
                                  onClick={() => setOpenResourcePaperId(null)}
                                >
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    <FileCheck2 size={14} /> Mark scheme PDF (new tab)
                                  </span>
                                  <ArrowUpRight size={14} color="var(--text-muted)" />
                                </a>
                              )}
                              {(paper.insertUrl || paper.insertNote) && (
                                <button
                                  type="button"
                                  role="menuitem"
                                  className="sp-options-action sp-focusable"
                                  style={{ justifyContent: 'space-between' }}
                                  onClick={() => openDoc(paper, 'insert')}
                                >
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    <FileText size={14} /> {paper.insertLabel ?? 'Insert'}
                                  </span>
                                  <ArrowUpRight size={14} color="var(--text-muted)" />
                                </button>
                              )}
                              {paper.examinerReportUrl && (
                                <button
                                  type="button"
                                  role="menuitem"
                                  className="sp-options-action sp-focusable"
                                  style={{ justifyContent: 'space-between' }}
                                  onClick={() => openDoc(paper, 'report')}
                                >
                                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                    <BookOpenCheck size={14} /> Examiner Report
                                  </span>
                                  <ArrowUpRight size={14} color="var(--text-muted)" />
                                </button>
                              )}
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

  const getEmbedSrc = (rawUrl: string) =>
    pdfRenderer === 'universal'
      ? `https://docs.google.com/gview?embedded=true&url=${encodeURI(rawUrl)}`
      : rawUrl;

  const activePdfUrl = viewerDoc ? getActivePdfUrl(viewerDoc) : undefined;
  const viewerHasOfficialPdf = Boolean(viewerDoc?.paper.questionPaperUrl);

  return (
    <section ref={sectionRef} style={{ marginTop: 20 }}>
      {/* Top Controls Row (1:1 real Cognito) */}
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

          {officialPdfCount > 0 && (
            <button
              type="button"
              aria-pressed={specFilter === 'official'}
              className={`sp-filter-pill sp-focusable${
                specFilter === 'official' ? ' is-active' : ''
              }`}
              onClick={() => setSpecFilter((s) => (s === 'official' ? 'all' : 'official'))}
            >
              <span>Official Cambridge PDFs</span>
              <span className="sp-filter-pill__count">{officialPdfCount}</span>
            </button>
          )}

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

      {/* Intro Description Card (1:1 real Cognito) */}
      <div
        className="cognito-card"
        style={{
          padding: '16px 20px',
          marginBottom: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 14,
          flexWrap: 'wrap',
        }}
      >
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: 1.55, flex: '1 1 360px' }}>
          Work through real {course.qualificationLabel} {course.subjectName} {course.boardLabel}{' '}
          ({course.specCode}) past papers and official mark schemes, sorted by year. Open real
          Cambridge PDFs side-by-side with their mark schemes, or switch to the by-topic view for
          targeted practice.
        </p>
        {officialPortalUrl && (
          <a
            href={officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn tactile-btn--sm"
            style={{ whiteSpace: 'nowrap' }}
          >
            Cambridge Portal <ExternalLink size={14} />
          </a>
        )}
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
            {renderPaperList(
              officialSpecYears,
              'Official Cambridge International Papers & Specimen Exams',
              true
            )}
            {renderPaperList(
              practiceNewSpecYears,
              officialSpecYears.length > 0
                ? 'Additional Interactive Practice Papers'
                : 'New 9-1 specification'
            )}
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

      {/* Interactive Paper / Mark Scheme / Split View / Real Cambridge PDF Viewer Modal */}
      <CognitoDialog
        open={Boolean(viewerDoc)}
        onClose={() => {
          setTimerRunning(false);
          setViewerDoc(null);
        }}
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
                marginBottom: 14,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                  <span className="tilted-badge tilted-badge--navy">
                    {viewerDoc.mode === 'qp'
                      ? 'QUESTION PAPER'
                      : viewerDoc.mode === 'ms'
                        ? 'MARK SCHEME'
                        : viewerDoc.mode === 'split'
                          ? 'SPLIT VIEW · PAPER & MARK SCHEME'
                          : viewerDoc.mode === 'report'
                            ? 'EXAMINER REPORT'
                            : (viewerDoc.paper.insertLabel ?? 'INSERT').toUpperCase()}
                  </span>
                  {viewerHasOfficialPdf && (
                    <span className="score-pill">
                      <ShieldCheck size={12} style={{ marginRight: 4 }} />
                      Official Cambridge PDF
                    </span>
                  )}
                </div>

                <h2
                  id="past-paper-viewer-title"
                  className="font-heading"
                  style={{ fontSize: '1.55rem' }}
                >
                  {viewerDoc.topicHeading
                    ? `${viewerDoc.topicHeading} · ${viewerDoc.paper.year}`
                    : `${viewerDoc.paper.title}`}
                </h2>
                <div
                  style={{
                    fontSize: '0.85rem',
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

              {/* Built-in Exam Countdown Timer */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 10px',
                  borderRadius: 11,
                  backgroundColor: 'var(--bg-sunken)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <Clock size={15} color="var(--color-blue-600)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    color: timerRunning ? 'var(--color-blue-600)' : 'var(--text-heading)',
                    minWidth: 56,
                  }}
                >
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  type="button"
                  className="tactile-btn tactile-btn--sm"
                  style={{ minHeight: 30, padding: '3px 9px', fontSize: '0.78rem' }}
                  onClick={() => setTimerRunning((r) => !r)}
                >
                  {timerRunning ? <Pause size={13} /> : <Play size={13} />}
                  <span>{timerRunning ? 'Pause' : 'Start timer'}</span>
                </button>
                <button
                  type="button"
                  aria-label="Reset exam timer"
                  onClick={() => {
                    setTimerRunning(false);
                    setTimerSeconds(viewerDoc.paper.durationMinutes * 60);
                  }}
                  style={{
                    border: 0,
                    background: 'transparent',
                    padding: 4,
                    color: 'var(--text-muted)',
                    display: 'inline-flex',
                  }}
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Viewer Mode Switcher + External PDF / Print Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                flexWrap: 'wrap',
                marginBottom: 14,
              }}
            >
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
                {(!viewerHasOfficialPdf || viewerDoc.paper.markSchemeUrl) && (
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
                )}
                {(!viewerHasOfficialPdf || viewerDoc.paper.markSchemeUrl) && (
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
                    <Columns2 size={14} /> Split view
                  </button>
                )}
                {(viewerDoc.paper.insertUrl || viewerDoc.paper.insertNote) && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewerDoc.mode === 'insert'}
                    className={`sp-segmented__btn sp-focusable${
                      viewerDoc.mode === 'insert' ? ' is-active' : ''
                    }`}
                    onClick={() => setViewerDoc({ ...viewerDoc, mode: 'insert' })}
                  >
                    {viewerDoc.paper.insertLabel ?? 'Insert'}
                  </button>
                )}
                {viewerDoc.paper.examinerReportUrl && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewerDoc.mode === 'report'}
                    className={`sp-segmented__btn sp-focusable${
                      viewerDoc.mode === 'report' ? ' is-active' : ''
                    }`}
                    onClick={() => setViewerDoc({ ...viewerDoc, mode: 'report' })}
                  >
                    Examiner Report
                  </button>
                )}
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                {activePdfUrl && (
                  <a
                    href={activePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
                  >
                    <ExternalLink size={14} /> Open PDF in new tab
                  </a>
                )}
                {!viewerHasOfficialPdf && (
                  <button
                    type="button"
                    className="tactile-btn tactile-btn--sm"
                    onClick={() => window.print()}
                  >
                    <Printer size={15} /> Print / PDF
                  </button>
                )}
              </div>
            </div>

            {/* REAL OFFICIAL CAMBRIDGE PDF EMBED VIEWER */}
            {viewerHasOfficialPdf ? (
              viewerDoc.mode === 'split' && viewerDoc.paper.markSchemeUrl ? (
                <div style={{ display: 'grid', gap: 10 }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                      gap: 12,
                    }}
                  >
                    <div style={{ display: 'grid', gap: 6 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: 'var(--text-heading)',
                        }}
                      >
                        <span>Question Paper ({viewerDoc.paper.paperCode})</span>
                        <a
                          href={viewerDoc.paper.questionPaperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--text-link)', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                        >
                          Full tab <ExternalLink size={12} />
                        </a>
                      </div>
                      <iframe
                        title={`${viewerDoc.paper.title} Question Paper PDF`}
                        src={getEmbedSrc(viewerDoc.paper.questionPaperUrl!)}
                        className="cognito-pdf-frame"
                      />
                    </div>
                    <div style={{ display: 'grid', gap: 6 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: 'var(--color-green-700)',
                        }}
                      >
                        <span>Official Mark Scheme</span>
                        <a
                          href={viewerDoc.paper.markSchemeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--text-link)', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                        >
                          Full tab <ExternalLink size={12} />
                        </a>
                      </div>
                      <iframe
                        title={`${viewerDoc.paper.title} Mark Scheme PDF`}
                        src={getEmbedSrc(viewerDoc.paper.markSchemeUrl)}
                        className="cognito-pdf-frame"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 10,
                      flexWrap: 'wrap',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <span>Source: Official Cambridge International Education PDFs ({viewerDoc.paper.paperCode}).</span>
                    <button
                      type="button"
                      onClick={() => setPdfRenderer((r) => (r === 'universal' ? 'native' : 'universal'))}
                      style={{ border: 0, background: 'transparent', color: 'var(--text-link)', fontWeight: 700, padding: 0 }}
                    >
                      {pdfRenderer === 'universal' ? 'Switch to browser native PDF' : 'Switch to universal PDF viewer'}
                    </button>
                  </div>
                </div>
              ) : activePdfUrl ? (
                <div style={{ display: 'grid', gap: 10 }}>
                  <iframe
                    title={`${viewerDoc.paper.title} (${viewerDoc.mode.toUpperCase()}) Official Cambridge PDF`}
                    src={getEmbedSrc(activePdfUrl)}
                    className="cognito-pdf-frame cognito-pdf-frame--tall"
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 10,
                      flexWrap: 'wrap',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      padding: '6px 4px 0',
                    }}
                  >
                    <span>
                      Source: Official Cambridge International Education PDF ({viewerDoc.paper.paperCode}).
                    </span>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => setPdfRenderer((r) => (r === 'universal' ? 'native' : 'universal'))}
                        style={{ border: 0, background: 'transparent', color: 'var(--text-secondary)', fontWeight: 700, padding: 0 }}
                      >
                        {pdfRenderer === 'universal' ? 'Try native PDF' : 'Try universal viewer'}
                      </button>
                      <a
                        href={activePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-link)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                      >
                        Open direct Cambridge PDF <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="cognito-card"
                  style={{ padding: 20, backgroundColor: 'var(--bg-sunken)' }}
                >
                  <p style={{ margin: 0, fontWeight: 700, color: 'var(--text-primary)' }}>
                    {viewerDoc.paper.insertNote ?? 'Document not available for this component.'}
                  </p>
                </div>
              )
            ) : viewerDoc.mode === 'insert' ? (
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
