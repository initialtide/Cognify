import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Eye,
  EyeOff,
  Printer,
  RotateCcw,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import '../../styles/study-players.css';
import { KeyTermEntry } from '../../types/curriculum';
import { playSound } from '../../utils/soundEffects';

export const KeyTermsPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { profile, logSimpleActivity } = useApp();
  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];

  const [groupBy, setGroupBy] = useState<'az' | 'topic'>('az');
  const [search, setSearch] = useState('');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [activeLetter, setActiveLetter] = useState<string>('');
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(() => new Set());
  const [testMode, setTestMode] = useState(false);
  const [testIndex, setTestIndex] = useState(0);
  const [testScore, setTestScore] = useState(0);
  const [pickedOption, setPickedOption] = useState<string | null>(null);

  const terms = course.keyTerms;

  useEffect(() => {
    setSearch('');
    setTopicFilter('all');
    setHiddenIds(new Set());
    setTestMode(false);
    setTestIndex(0);
    setTestScore(0);
    setPickedOption(null);
  }, [course.id]);

  const topicTitleMap = useMemo(() => {
    const map = new Map<number, string>();
    for (const t of course.topics) {
      map.set(t.number, t.title);
    }
    return map;
  }, [course.topics]);

  const availableTopics = useMemo(() => {
    const nums = Array.from(new Set(terms.map((t) => t.topicNumber))).sort((a, b) => a - b);
    return nums.map((num) => ({
      number: num,
      title: topicTitleMap.get(num) ?? `Topic ${num}`,
    }));
  }, [terms, topicTitleMap]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return terms.filter((t) => {
      if (topicFilter !== 'all' && String(t.topicNumber) !== topicFilter) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.subtopicCode.toLowerCase().includes(q)
      );
    });
  }, [terms, search, topicFilter]);

  const groupedByLetter = useMemo(() => {
    const map = new Map<string, KeyTermEntry[]>();
    const sorted = [...filtered].sort((a, b) => a.term.localeCompare(b.term));
    for (const item of sorted) {
      const ch = item.term[0].toUpperCase();
      const list = map.get(ch) ?? [];
      list.push(item);
      map.set(ch, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const groupedByTopic = useMemo(() => {
    const map = new Map<number, KeyTermEntry[]>();
    for (const item of filtered) {
      const list = map.get(item.topicNumber) ?? [];
      list.push(item);
      map.set(item.topicNumber, list);
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [filtered]);

  const letters = useMemo(() => groupedByLetter.map(([ch]) => ch), [groupedByLetter]);
  const highlightedLetter = letters.includes(activeLetter) ? activeLetter : letters[0] ?? '';

  // Active-recall hide/reveal state across currently filtered items
  const hiddenFilteredCount = useMemo(
    () => filtered.filter((t) => hiddenIds.has(t.id)).length,
    [filtered, hiddenIds]
  );
  const allFilteredHidden = filtered.length > 0 && hiddenFilteredCount === filtered.length;
  const anyFilteredHidden = hiddenFilteredCount > 0;

  const handleToggleAllDefinitions = () => {
    if (allFilteredHidden || anyFilteredHidden) {
      // Show all
      setHiddenIds(new Set());
    } else {
      // Hide all filtered definitions for active recall
      setHiddenIds(new Set(filtered.map((t) => t.id)));
    }
  };

  const toggleTermHidden = (termId: string) => {
    setHiddenIds((prev) => {
      const next = new Set(prev);
      if (next.has(termId)) {
        next.delete(termId);
      } else {
        next.add(termId);
      }
      return next;
    });
  };

  // Interactive "Test me" active recall quiz (100% unlocked — ZERO Pro lock!)
  const quizDeck = useMemo(() => {
    const pool = filtered.length >= 2 ? filtered : terms;
    return pool.slice(0, Math.min(10, pool.length));
  }, [filtered, terms]);

  const currentQuizTerm = quizDeck[testIndex];

  const quizOptions = useMemo(() => {
    if (!currentQuizTerm) return [];
    const others = terms.filter((t) => t.id !== currentQuizTerm.id);
    // Pick 3 deterministic varied distractors based on testIndex
    const offset = others.length > 0 ? (testIndex * 3) % others.length : 0;
    const rotated = [...others.slice(offset), ...others.slice(0, offset)];
    const distractors = rotated.slice(0, 3).map((t) => t.term);
    return [currentQuizTerm.term, ...distractors].sort((a, b) => a.localeCompare(b));
  }, [currentQuizTerm, terms, testIndex]);

  const handleAnswerTest = useCallback(
    (choice: string) => {
      if (!currentQuizTerm || pickedOption) return;
      setPickedOption(choice);
      const right = choice === currentQuizTerm.term;
      if (right) setTestScore((s) => s + 1);
      playSound(
        right ? 'correct' : 'incorrect',
        profile.preferences.soundEnabled,
        profile.preferences.soundVolume
      );
    },
    [currentQuizTerm, pickedOption, profile.preferences.soundEnabled, profile.preferences.soundVolume]
  );

  const handleNextTest = useCallback(() => {
    if (testIndex + 1 >= quizDeck.length) {
      logSimpleActivity({
        type: 'key-terms',
        courseId: course.id,
        courseLabel: `${course.qualificationLabel} ${course.subjectName} · ${course.boardLabel}`,
        subjectName: course.subjectName,
        title: `Completed Key Terms Test (${testScore}/${quizDeck.length})`,
        xpEarned: Math.max(15, testScore * 10),
        durationSeconds: 90,
        questionsAnswered: quizDeck.length,
        scorePercent: quizDeck.length > 0 ? Math.round((testScore / quizDeck.length) * 100) : 100,
      });
    }
    setPickedOption(null);
    setTestIndex((i) => i + 1);
  }, [course.boardLabel, course.id, course.qualificationLabel, course.subjectName, logSimpleActivity, quizDeck.length, testIndex, testScore]);

  // Keyboard shortcuts inside Test me mode (1-4 select, Enter next)
  useEffect(() => {
    if (!testMode || !currentQuizTerm) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (!pickedOption && /^[1-4]$/.test(e.key)) {
        const opt = quizOptions[Number(e.key) - 1];
        if (opt) {
          e.preventDefault();
          handleAnswerTest(opt);
        }
      } else if (pickedOption && e.key === 'Enter') {
        e.preventDefault();
        handleNextTest();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentQuizTerm, handleAnswerTest, handleNextTest, pickedOption, quizOptions, testMode]);

  const renderTermRow = (item: KeyTermEntry) => {
    const isHidden = hiddenIds.has(item.id);
    return (
      <div key={item.id} className="sp-kt-row">
        <strong style={{ color: 'var(--text-heading)', fontSize: '0.96rem' }}>
          {item.term}
        </strong>

        <button
          type="button"
          aria-pressed={!isHidden}
          aria-label={
            isHidden
              ? `Reveal definition for ${item.term}`
              : `Hide definition for ${item.term} for active recall`
          }
          title={isHidden ? 'Tap to reveal definition' : 'Tap to hide for active recall'}
          onClick={() => toggleTermHidden(item.id)}
          className={`sp-kt-def-btn sp-focusable${isHidden ? ' is-hidden' : ''}`}
        >
          <span className="sp-kt-def-text">{item.definition}</span>
          {isHidden && (
            <span className="sp-kt-reveal-pill" aria-hidden="true">
              <Eye size={14} /> Tap to reveal
            </span>
          )}
        </button>

        <Link
          to={`/course/${course.id}/notes/${item.subtopicId}`}
          className="sp-kt-subtopic-pill sp-focusable"
          title={`Open notes for ${item.subtopicCode}`}
        >
          <BookOpen size={13} /> {item.subtopicCode}
        </Link>
      </div>
    );
  };

  return (
    <main className="page-container">
      <Link
        to={`/course/${course.id}`}
        className="sp-focusable"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontWeight: 700,
          color: 'var(--text-secondary)',
          marginBottom: 16,
          borderRadius: 8,
          padding: '2px 4px',
        }}
      >
        <ArrowLeft size={16} /> Back to {course.subjectName}
      </Link>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 14,
          marginBottom: 20,
        }}
      >
        <div>
          <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 8 }}>
            ALL {terms.length} KEY TERMS UNLOCKED
          </span>
          <h1 className="font-heading" style={{ fontSize: '2.1rem' }}>
            {course.subjectName} Key Terms
          </h1>
        </div>

        <div className="no-print" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <button
            type="button"
            className="tactile-btn tactile-btn--purple"
            disabled={terms.length < 2}
            onClick={() => {
              setTestMode((t) => !t);
              setTestIndex(0);
              setTestScore(0);
              setPickedOption(null);
            }}
          >
            <Sparkles size={16} /> {testMode ? 'Back to glossary' : 'Test me'}
          </button>
          <button type="button" className="tactile-btn" onClick={() => window.print()}>
            <Printer size={16} /> Download PDF
          </button>
        </div>
      </div>

      {testMode ? (
        <section className="cognito-card" style={{ maxWidth: 680, margin: '20px auto', padding: '28px 28px' }}>
          {testIndex >= quizDeck.length || !currentQuizTerm ? (
            <div style={{ textAlign: 'center' }}>
              <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 12 }}>
                <Sparkles size={13} /> TEST COMPLETE
              </span>
              <h2 className="font-heading" style={{ fontSize: '1.9rem', marginBottom: 8 }}>
                Key Terms Test Complete!
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 22 }}>
                You scored{' '}
                <strong>
                  {testScore} / {quizDeck.length}
                </strong>{' '}
                ({quizDeck.length > 0 ? Math.round((testScore / quizDeck.length) * 100) : 100}%).
              </p>
              <div className="sp-summary-actions">
                <button
                  type="button"
                  className="tactile-btn tactile-btn--solid-blue"
                  onClick={() => {
                    setTestIndex(0);
                    setTestScore(0);
                    setPickedOption(null);
                  }}
                >
                  <RotateCcw size={15} /> Try again
                </button>
                <button
                  type="button"
                  className="tactile-btn"
                  onClick={() => setTestMode(false)}
                >
                  Back to glossary
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  marginBottom: 10,
                }}
              >
                <span>
                  Term {testIndex + 1} of {quizDeck.length}
                </span>
                <span className="sp-status-pill sp-status-pill--confident">
                  Score: {testScore}
                </span>
              </div>

              <div
                className="sp-topbar__progress-track"
                style={{ maxWidth: '100%', height: 8, marginBottom: 18 }}
              >
                <div
                  className="sp-topbar__progress-fill"
                  style={{ width: `${Math.round(((testIndex + (pickedOption ? 1 : 0)) / quizDeck.length) * 100)}%` }}
                />
              </div>

              <p
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--text-muted)',
                  margin: '0 0 8px',
                }}
              >
                Which key term matches this definition?
              </p>
              <p
                style={{
                  fontSize: '1.14rem',
                  fontWeight: 700,
                  lineHeight: 1.55,
                  color: 'var(--text-primary)',
                  margin: '0 0 20px',
                }}
              >
                &ldquo;{currentQuizTerm.definition}&rdquo;
              </p>

              <div className="sp-choice-list">
                {quizOptions.map((opt, idx) => {
                  const isPicked = pickedOption === opt;
                  const isRight = opt === currentQuizTerm.term;
                  let cls = '';
                  if (pickedOption) {
                    if (isRight) cls = ' is-correct';
                    else if (isPicked && !isRight) cls = ' is-incorrect';
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={Boolean(pickedOption)}
                      onClick={() => handleAnswerTest(opt)}
                      className={`sp-choice-btn sp-focusable${cls}`}
                    >
                      <span className="sp-choice-btn__left">
                        <span className="sp-choice-key">{idx + 1}</span>
                        <span>{opt}</span>
                      </span>
                      {pickedOption && isRight && <Check size={17} strokeWidth={2.8} />}
                      {pickedOption && isPicked && !isRight && <X size={17} strokeWidth={2.8} />}
                    </button>
                  );
                })}
              </div>

              {pickedOption && (
                <div
                  style={{
                    marginTop: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Press <kbd className="sp-kbd">Enter</kbd> to continue
                  </span>
                  <button
                    type="button"
                    className="tactile-btn tactile-btn--solid-blue"
                    onClick={handleNextTest}
                  >
                    {testIndex + 1 >= quizDeck.length ? 'See results' : 'Next term'}{' '}
                    <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Cognito Single-Row Toolbar: Search + Topic Filter + A-Z/Topic + Show/Hide All */}
          <div className="sp-kt-toolbar no-print">
            <div className="sp-kt-toolbar-group">
              <div className="sp-kt-search-wrap">
                <Search
                  size={15}
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search key terms..."
                  aria-label="Search key terms"
                  className="sp-kt-search-input"
                />
                {search && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearch('')}
                    style={{
                      position: 'absolute',
                      right: 6,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      border: 0,
                      background: 'transparent',
                      color: 'var(--text-muted)',
                      display: 'inline-flex',
                      padding: 4,
                    }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                aria-label="Filter by topic"
                className="sp-kt-topic-select sp-focusable"
              >
                <option value="all">All topics ({terms.length})</option>
                {availableTopics.map((t) => (
                  <option key={t.number} value={String(t.number)}>
                    Topic {t.number}: {t.title}
                  </option>
                ))}
              </select>

              <div className="sp-segmented" role="tablist" aria-label="Group key terms">
                <button
                  type="button"
                  role="tab"
                  aria-selected={groupBy === 'az'}
                  onClick={() => setGroupBy('az')}
                  className={`sp-segmented__btn sp-focusable${groupBy === 'az' ? ' is-active' : ''}`}
                >
                  A–Z
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={groupBy === 'topic'}
                  onClick={() => setGroupBy('topic')}
                  className={`sp-segmented__btn sp-focusable${groupBy === 'topic' ? ' is-active' : ''}`}
                >
                  By topic
                </button>
              </div>
            </div>

            <button
              type="button"
              className="tactile-btn tactile-btn--sm"
              onClick={handleToggleAllDefinitions}
              disabled={filtered.length === 0}
            >
              {anyFilteredHidden ? <Eye size={15} /> : <EyeOff size={15} />}
              {anyFilteredHidden ? 'Show all' : 'Hide all'}
            </button>
          </div>

          {/* Active-Recall Hint Strip when any definitions are hidden */}
          {anyFilteredHidden && (
            <div className="sp-browse-banner no-print">
              <span>
                Active recall mode — {filtered.length - hiddenFilteredCount} of {filtered.length}{' '}
                definitions revealed. Tap any term&apos;s definition to check yourself!
              </span>
              <button
                type="button"
                className="tactile-btn tactile-btn--sm"
                onClick={() => setHiddenIds(new Set())}
              >
                <Eye size={14} /> Show all
              </button>
            </div>
          )}

          {/* Alphabet Jump Bar (1:1 step_130_shot_1) */}
          {groupBy === 'az' && letters.length > 0 && (
            <nav
              aria-label="Alphabet jump bar"
              className="cognito-card sp-kt-alpha-bar no-print"
            >
              {letters.map((ch) => (
                <a
                  key={ch}
                  href={`#letter-${ch}`}
                  onClick={() => setActiveLetter(ch)}
                  className={`sp-kt-alpha-link sp-focusable${
                    highlightedLetter === ch ? ' is-active' : ''
                  }`}
                >
                  {ch}
                </a>
              ))}
            </nav>
          )}

          {/* Terms List (100% Unlocked, Active-Recall Tap-to-Reveal) */}
          {filtered.length === 0 ? (
            <div
              className="cognito-card"
              style={{ padding: 28, textAlign: 'center', color: 'var(--text-muted)' }}
            >
              No key terms matched &ldquo;{search}&rdquo;.{' '}
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setTopicFilter('all');
                }}
                style={{
                  border: 0,
                  background: 'transparent',
                  color: 'var(--color-blue-500)',
                  fontWeight: 800,
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 26 }}>
              {groupBy === 'az'
                ? groupedByLetter.map(([ch, items]) => (
                    <section
                      key={ch}
                      id={`letter-${ch}`}
                      className="cognito-card sp-kt-section-card"
                    >
                      <span className="sp-kt-letter-badge">{ch}</span>
                      <div className="sp-kt-table-head">
                        <span>Term</span>
                        <span>Definition (tap to test recall)</span>
                        <span>Notes</span>
                      </div>
                      {items.map(renderTermRow)}
                    </section>
                  ))
                : groupedByTopic.map(([topicNum, items]) => (
                    <section key={topicNum} className="cognito-card sp-kt-section-card">
                      <span className="sp-kt-letter-badge">
                        TOPIC {topicNum}
                        {topicTitleMap.get(topicNum) ? ` · ${topicTitleMap.get(topicNum)}` : ''}
                      </span>
                      <div className="sp-kt-table-head">
                        <span>Term</span>
                        <span>Definition (tap to test recall)</span>
                        <span>Notes</span>
                      </div>
                      {items.map(renderTermRow)}
                    </section>
                  ))}
            </div>
          )}
        </>
      )}
    </main>
  );
};
