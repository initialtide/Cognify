import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Frown,
  Lightbulb,
  ListChecks,
  RefreshCcw,
  RotateCcw,
  Shuffle,
  Smile,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { StudyTopBar } from '../../components/layout/StudyTopBar';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { FlashcardItem } from '../../types/curriculum';
import { playSound } from '../../utils/soundEffects';

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const FlashcardsPlayerPage: React.FC = () => {
  const { courseId, subtopicId } = useParams<{ courseId: string; subtopicId: string }>();
  const location = useLocation();
  const { profile, recordFlashcardConfidence } = useApp();

  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const stateData = location.state as { customCards?: FlashcardItem[]; title?: string } | null;

  const cards = useMemo(() => {
    if (stateData?.customCards && stateData.customCards.length > 0) {
      return stateData.customCards;
    }
    if (!subtopicId || subtopicId === 'all') return course.flashcards;
    const matched = course.flashcards.filter((f) => f.subtopicId === subtopicId);
    return matched.length > 0 ? matched : course.flashcards;
  }, [course.flashcards, stateData, subtopicId]);

  const allSubtopics = useMemo(
    () => course.topics.flatMap((t) => t.subtopics),
    [course.topics]
  );

  const nextSubtopic = useMemo(() => {
    if (!subtopicId || subtopicId === 'all' || subtopicId === 'custom') return null;
    const curIdx = allSubtopics.findIndex((s) => s.id === subtopicId);
    if (curIdx === -1 || curIdx + 1 >= allSubtopics.length) return null;
    return allSubtopics[curIdx + 1];
  }, [allSubtopics, subtopicId]);

  const title =
    stateData?.title ??
    allSubtopics.find((s) => s.id === subtopicId)?.title ??
    `${course.subjectName} Flashcards`;

  const [browseMode, setBrowseMode] = useState(false);
  const [deckQueue, setDeckQueue] = useState<FlashcardItem[]>(cards);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionXp, setSessionXp] = useState(0);
  const [confidentIds, setConfidentIds] = useState<string[]>([]);
  const [stillLearningIds, setStillLearningIds] = useState<string[]>([]);
  const [filterStillLearning, setFilterStillLearning] = useState(false);
  const [roundVersion, setRoundVersion] = useState(0);

  // Per-card Browse mode flip state & feedback state
  const [browseFlippedIds, setBrowseFlippedIds] = useState<Record<string, boolean>>({});
  const [cardFeedback, setCardFeedback] = useState<Record<string, 'up' | 'down' | 'flag' | null>>({});

  useEffect(() => {
    setDeckQueue(cards);
    setIdx(0);
    setFlipped(false);
    setShowHint(false);
    setConfidentIds([]);
    setStillLearningIds([]);
    setFilterStillLearning(false);
    setBrowseFlippedIds({});
    setSessionXp(0);
    setRoundVersion((v) => v + 1);
  }, [cards]);

  const activeCard = deckQueue[idx];
  const isComplete = !browseMode && (idx >= deckQueue.length || !activeCard);

  const progressPct = useMemo(() => {
    if (deckQueue.length === 0) return 0;
    return Math.min(100, Math.round((idx / deckQueue.length) * 100));
  }, [deckQueue.length, idx]);

  const handleFlip = useCallback(() => {
    setFlipped((f) => !f);
    playSound('flip', profile.preferences.soundEnabled, profile.preferences.soundVolume);
  }, [profile.preferences.soundEnabled, profile.preferences.soundVolume]);

  const handleRate = useCallback(
    (status: 'confident' | 'still-learning') => {
      if (!activeCard) return;
      recordFlashcardConfidence(
        course.id,
        activeCard.id,
        status,
        `${title} flashcards`,
        activeCard.subtopicId
      );
      setSessionXp((x) => x + (status === 'confident' ? 10 : 5));
      playSound(
        status === 'confident' ? 'correct' : 'flip',
        profile.preferences.soundEnabled,
        profile.preferences.soundVolume
      );

      if (status === 'confident') {
        setConfidentIds((prev) => (prev.includes(activeCard.id) ? prev : [...prev, activeCard.id]));
        setStillLearningIds((prev) => prev.filter((id) => id !== activeCard.id));
      } else {
        setStillLearningIds((prev) =>
          prev.includes(activeCard.id) ? prev : [...prev, activeCard.id]
        );
        setConfidentIds((prev) => prev.filter((id) => id !== activeCard.id));
      }

      setIdx((i) => i + 1);
      setFlipped(false);
      setShowHint(false);
    },
    [
      activeCard,
      course.id,
      profile.preferences.soundEnabled,
      profile.preferences.soundVolume,
      recordFlashcardConfidence,
      title,
    ]
  );

  const handleShuffle = useCallback(() => {
    const basePool = filterStillLearning
      ? cards.filter((c) => stillLearningIds.includes(c.id))
      : cards;
    const pool = basePool.length > 0 ? basePool : cards;
    setDeckQueue(shuffleArray(pool));
    setIdx(0);
    setFlipped(false);
    setShowHint(false);
    setRoundVersion((v) => v + 1);
    playSound('flip', profile.preferences.soundEnabled, profile.preferences.soundVolume);
  }, [
    cards,
    filterStillLearning,
    profile.preferences.soundEnabled,
    profile.preferences.soundVolume,
    stillLearningIds,
  ]);

  const handleToggleStillLearningFilter = () => {
    if (filterStillLearning) {
      setFilterStillLearning(false);
      setDeckQueue(cards);
      setIdx(0);
      setFlipped(false);
      setShowHint(false);
      setRoundVersion((v) => v + 1);
    } else if (stillLearningIds.length > 0) {
      const subset = cards.filter((c) => stillLearningIds.includes(c.id));
      setFilterStillLearning(true);
      setDeckQueue(subset);
      setIdx(0);
      setFlipped(false);
      setShowHint(false);
      setRoundVersion((v) => v + 1);
    }
  };

  const handleReviewStillLearning = () => {
    const subset = cards.filter((c) => stillLearningIds.includes(c.id));
    if (subset.length === 0) return;
    setFilterStillLearning(true);
    setDeckQueue(subset);
    setIdx(0);
    setFlipped(false);
    setShowHint(false);
    setRoundVersion((v) => v + 1);
  };

  const handleRestartDeck = () => {
    setFilterStillLearning(false);
    setDeckQueue(cards);
    setIdx(0);
    setConfidentIds([]);
    setStillLearningIds([]);
    setFlipped(false);
    setShowHint(false);
    setRoundVersion((v) => v + 1);
  };

  // Global keyboard shortcuts in Study (non-Browse) mode
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (browseMode || isComplete) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || target?.isContentEditable) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleFlip();
        return;
      }

      if (e.key === 'Enter') {
        // Avoid double-trigger if user is intentionally activating a different button
        if (tag === 'button' || tag === 'a') return;
        e.preventDefault();
        handleFlip();
        return;
      }

      if (e.key === '1' || e.key === 'ArrowLeft') {
        e.preventDefault();
        handleRate('still-learning');
        return;
      }

      if (e.key === '2' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleRate('confident');
        return;
      }

      if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        handleShuffle();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [browseMode, handleFlip, handleRate, handleShuffle, isComplete]);

  const toggleFeedback = (cardId: string, kind: 'up' | 'down' | 'flag') => {
    setCardFeedback((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === kind ? null : kind,
    }));
  };

  const handleBrowseRate = (card: FlashcardItem, status: 'confident' | 'still-learning') => {
    playSound(
      status === 'confident' ? 'correct' : 'flip',
      profile.preferences.soundEnabled,
      profile.preferences.soundVolume
    );
    if (status === 'confident') {
      setConfidentIds((prev) => (prev.includes(card.id) ? prev : [...prev, card.id]));
      setStillLearningIds((prev) => prev.filter((id) => id !== card.id));
    } else {
      setStillLearningIds((prev) => (prev.includes(card.id) ? prev : [...prev, card.id]));
      setConfidentIds((prev) => prev.filter((id) => id !== card.id));
    }
  };

  const allBrowseRevealed =
    cards.length > 0 && cards.every((c) => Boolean(browseFlippedIds[c.id]));

  const handleToggleRevealAllBrowse = () => {
    if (allBrowseRevealed) {
      setBrowseFlippedIds({});
    } else {
      const next: Record<string, boolean> = {};
      for (const c of cards) next[c.id] = true;
      setBrowseFlippedIds(next);
    }
  };

  return (
    <div>
      <StudyTopBar
        course={course}
        currentSubtopicId={subtopicId}
        title={title}
        activityType="flashcards"
        progressPercent={progressPct}
        sessionXp={sessionXp}
        sessionStreak={confidentIds.length}
        browseMode={browseMode}
        onToggleBrowse={() => setBrowseMode((b) => !b)}
      />

      <main className="page-container sp-fc-container">
        {cards.length === 0 ? (
          <section className="cognito-card sp-summary-card">
            <h1 className="font-heading" style={{ fontSize: '1.75rem', marginBottom: 8 }}>
              No flashcards for this subtopic yet
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
              Switch to Notes, Quiz, or another subtopic from the top bar.
            </p>
            <Link
              to={`/course/${course.id}/quiz/${subtopicId ?? 'all'}`}
              className="tactile-btn tactile-btn--solid-blue"
            >
              <ListChecks size={16} /> Try Quiz instead
            </Link>
          </section>
        ) : browseMode ? (
          <div>
            {/* Browse Mode Top Bar: Reveal all / Hide all + Counts */}
            <div className="sp-fc-browse-bar">
              <div className="sp-fc-status-pills">
                <span className="sp-status-pill">
                  {cards.length} {cards.length === 1 ? 'card' : 'cards'}
                </span>
                <span className="sp-status-pill sp-status-pill--confident">
                  <Smile size={14} /> {confidentIds.length} Confident
                </span>
                {stillLearningIds.length > 0 && (
                  <span className="sp-status-pill sp-status-pill--learning">
                    <Frown size={14} /> {stillLearningIds.length} Still learning
                  </span>
                )}
              </div>

              <button
                type="button"
                className="tactile-btn tactile-btn--sm"
                onClick={handleToggleRevealAllBrowse}
              >
                {allBrowseRevealed ? <EyeOff size={15} /> : <Eye size={15} />}
                {allBrowseRevealed ? 'Hide all' : 'Reveal all'}
              </button>
            </div>

            {/* Interactive Individually Flippable Browse Cards (1:1 step_47_shot_2) */}
            <div style={{ display: 'grid', gap: 18 }}>
              {cards.map((card, cIdx) => {
                const isCardFlipped = Boolean(browseFlippedIds[card.id]);
                const isConfident = confidentIds.includes(card.id);
                const isLearning = stillLearningIds.includes(card.id);
                const fb = cardFeedback[card.id];

                const toggleThisCard = () => {
                  setBrowseFlippedIds((prev) => ({
                    ...prev,
                    [card.id]: !prev[card.id],
                  }));
                  playSound('flip', profile.preferences.soundEnabled, profile.preferences.soundVolume);
                };

                return (
                  <article
                    key={card.id}
                    className={`cognito-card sp-fc-browse-card${
                      isConfident ? ' is-confident' : isLearning ? ' is-learning' : ''
                    }`}
                  >
                    <div className="sp-fc-face__top">
                      <div>
                        {isConfident && (
                          <span className="sp-status-pill sp-status-pill--confident">
                            <Check size={12} /> Confident
                          </span>
                        )}
                        {isLearning && (
                          <span className="sp-status-pill sp-status-pill--learning">
                            Still learning
                          </span>
                        )}
                      </div>
                      <span className="sp-fc-counter">
                        {cIdx + 1} of {cards.length}
                      </span>
                      <span
                        className={`sp-face-pill${isCardFlipped ? ' sp-face-pill--back' : ''}`}
                      >
                        {isCardFlipped ? 'Back' : 'Front'}
                      </span>
                    </div>

                    <div
                      className="sp-fc-browse-body sp-focusable"
                      role="button"
                      tabIndex={0}
                      aria-label={`Flip card ${cIdx + 1}: currently showing ${
                        isCardFlipped ? 'back' : 'front'
                      }`}
                      onClick={toggleThisCard}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.code === 'Space') {
                          e.preventDefault();
                          toggleThisCard();
                        }
                      }}
                    >
                      {!isCardFlipped ? (
                        <div className="sp-fc-front-body" style={{ padding: '10px 8px' }}>
                          <div className="sp-fc-front-text">{card.front}</div>
                        </div>
                      ) : (
                        <ul className="sp-fc-back-bullets">
                          {card.backBullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="sp-fc-browse-footer">
                      <span
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          fontStyle: 'italic',
                        }}
                      >
                        Tap card to flip
                      </span>

                      <div className="sp-fc-browse-actions">
                        <button
                          type="button"
                          aria-pressed={isLearning}
                          className={`tactile-btn tactile-btn--pink sp-fc-pill-btn${
                            isLearning ? ' is-selected' : ''
                          }`}
                          onClick={() => handleBrowseRate(card, 'still-learning')}
                        >
                          <Frown size={16} />
                          <span className="hide-mobile">Still learning</span>
                        </button>
                        <button
                          type="button"
                          className="tactile-btn sp-fc-pill-btn"
                          aria-label={`Flip card ${cIdx + 1}`}
                          onClick={toggleThisCard}
                        >
                          <RefreshCcw size={15} /> Flip
                        </button>
                        <button
                          type="button"
                          aria-pressed={isConfident}
                          className={`tactile-btn tactile-btn--green sp-fc-pill-btn${
                            isConfident ? ' is-selected' : ''
                          }`}
                          onClick={() => handleBrowseRate(card, 'confident')}
                        >
                          <Smile size={16} />
                          <span className="hide-mobile">Confident</span>
                        </button>
                      </div>

                      <div style={{ display: 'inline-flex', justifyContent: 'flex-end', gap: 4 }}>
                        <button
                          type="button"
                          aria-label="Helpful flashcard"
                          className={`sp-icon-btn${fb === 'up' ? ' is-active' : ''}`}
                          onClick={() => toggleFeedback(card.id, 'up')}
                        >
                          <ThumbsUp size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Needs improvement"
                          className={`sp-icon-btn${fb === 'down' ? ' is-active' : ''}`}
                          onClick={() => toggleFeedback(card.id, 'down')}
                        >
                          <ThumbsDown size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Report issue"
                          className={`sp-icon-btn${fb === 'flag' ? ' is-active' : ''}`}
                          onClick={() => toggleFeedback(card.id, 'flag')}
                        >
                          <AlertTriangle size={15} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : isComplete ? (
          /* Polished Completion Summary Card */
          <section className="cognito-card sp-summary-card">
            <span className="tilted-badge tilted-badge--navy" style={{ marginBottom: 14 }}>
              <Sparkles size={13} /> DECK COMPLETE
            </span>
            <h1 className="font-heading" style={{ fontSize: '2.05rem', marginBottom: 8 }}>
              {stillLearningIds.length === 0
                ? 'Amazing work — every card mastered!'
                : 'Round complete!'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: 460 }}>
              {stillLearningIds.length === 0
                ? `You marked all ${cards.length} cards in ${title} as Confident.`
                : `You marked ${confidentIds.length} of ${cards.length} cards as Confident and flagged ${stillLearningIds.length} to review again.`}
            </p>

            <div className="sp-summary-stats">
              <div className="sp-summary-stat">
                <div className="sp-summary-stat__val" style={{ color: 'var(--color-green-600)' }}>
                  {confidentIds.length} / {cards.length}
                </div>
                <div className="sp-summary-stat__label">Confident</div>
              </div>
              <div className="sp-summary-stat">
                <div className="sp-summary-stat__val" style={{ color: 'var(--color-magenta-500)' }}>
                  {stillLearningIds.length}
                </div>
                <div className="sp-summary-stat__label">Still learning</div>
              </div>
              <div className="sp-summary-stat">
                <div className="sp-summary-stat__val" style={{ color: 'var(--color-blue-500)' }}>
                  +{sessionXp} XP
                </div>
                <div className="sp-summary-stat__label">Session XP</div>
              </div>
            </div>

            <div className="sp-summary-actions">
              {stillLearningIds.length > 0 && (
                <button
                  type="button"
                  className="tactile-btn tactile-btn--pink"
                  onClick={handleReviewStillLearning}
                >
                  <Frown size={16} /> Review still learning ({stillLearningIds.length})
                </button>
              )}

              <button
                type="button"
                className="tactile-btn"
                onClick={handleRestartDeck}
              >
                <RotateCcw size={16} /> Restart deck
              </button>

              <Link
                to={`/course/${course.id}/quiz/${subtopicId ?? 'all'}`}
                className="tactile-btn tactile-btn--green"
              >
                <ListChecks size={16} /> Take quiz
              </Link>

              {nextSubtopic ? (
                <Link
                  to={`/course/${course.id}/flashcards/${nextSubtopic.id}`}
                  className="tactile-btn tactile-btn--solid-blue"
                >
                  Next subtopic <ArrowRight size={16} />
                </Link>
              ) : (
                <Link
                  to={`/course/${course.id}/flashcards`}
                  className="tactile-btn tactile-btn--solid-blue"
                >
                  Back to topics <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </section>
        ) : (
          <div>
            {/* Clear Deck Status Strip */}
            <div className="sp-fc-status-strip">
              <div className="sp-fc-status-pills">
                <span className="sp-status-pill">
                  Card {Math.min(idx + 1, deckQueue.length)} of {deckQueue.length}
                </span>

                <span className="sp-status-pill sp-status-pill--confident">
                  <Smile size={14} /> {confidentIds.length} Confident
                </span>

                {stillLearningIds.length > 0 && (
                  <button
                    type="button"
                    aria-pressed={filterStillLearning}
                    className={`sp-status-pill sp-status-pill--learning sp-focusable${
                      filterStillLearning ? ' is-active' : ''
                    }`}
                    onClick={handleToggleStillLearningFilter}
                    title={
                      filterStillLearning
                        ? 'Showing only Still learning cards — click to show full deck'
                        : 'Filter deck to Still learning cards'
                    }
                  >
                    <Frown size={14} />
                    Still learning ({stillLearningIds.length})
                  </button>
                )}
              </div>

              <button
                type="button"
                className="sp-shuffle-btn sp-focusable"
                onClick={handleShuffle}
                title="Shuffle deck (S)"
              >
                <Shuffle size={14} />
                <span>Shuffle</span>
                <kbd className="sp-kbd">S</kbd>
              </button>
            </div>

            {/* Spacious Centered 3D Stacked Flip Card */}
            <div
              key={`${activeCard.id}-${roundVersion}-${idx}`}
              className="flashcard-deck-wrap sp-fc-stage"
            >
              <div className="flashcard-scene">
                <div
                  className={`sp-fc-card sp-focusable${flipped ? ' is-flipped' : ''}`}
                  onClick={handleFlip}
                  role="button"
                  tabIndex={0}
                  aria-pressed={flipped}
                  aria-label={`Flashcard ${idx + 1} of ${deckQueue.length}, showing ${
                    flipped ? 'back' : 'front'
                  }. Press Space or Enter to flip.`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleFlip();
                    }
                  }}
                >
                  {/* Front Face */}
                  <div className="sp-fc-face">
                    <div className="sp-fc-face__top">
                      <div>
                        {stillLearningIds.includes(activeCard.id) && (
                          <span className="sp-status-pill sp-status-pill--learning">
                            Still learning
                          </span>
                        )}
                      </div>
                      <span className="sp-fc-counter">
                        {Math.min(idx + 1, deckQueue.length)} of {deckQueue.length}
                      </span>
                      <span className="sp-face-pill">FRONT</span>
                    </div>

                    <div className="sp-fc-front-body">
                      <div className="sp-fc-front-text">{activeCard.front}</div>

                      {activeCard.hint && (
                        <div onClick={(e) => e.stopPropagation()}>
                          {showHint ? (
                            <div className="sp-fc-hint-box">
                              <strong>Hint:</strong> {activeCard.hint}
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="sp-fc-hint-btn sp-focusable"
                              onClick={() => setShowHint(true)}
                            >
                              <Lightbulb size={13} /> Show hint
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="sp-fc-face__footer">
                      <span className="sp-fc-tap-hint">Tap card to flip</span>
                      <div
                        style={{ display: 'inline-flex', gap: 4 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          aria-label="Helpful flashcard"
                          className={`sp-icon-btn${
                            cardFeedback[activeCard.id] === 'up' ? ' is-active' : ''
                          }`}
                          onClick={() => toggleFeedback(activeCard.id, 'up')}
                        >
                          <ThumbsUp size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Not helpful"
                          className={`sp-icon-btn${
                            cardFeedback[activeCard.id] === 'down' ? ' is-active' : ''
                          }`}
                          onClick={() => toggleFeedback(activeCard.id, 'down')}
                        >
                          <ThumbsDown size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Report flashcard"
                          className={`sp-icon-btn${
                            cardFeedback[activeCard.id] === 'flag' ? ' is-active' : ''
                          }`}
                          onClick={() => toggleFeedback(activeCard.id, 'flag')}
                        >
                          <AlertTriangle size={15} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="sp-fc-face sp-fc-face--back">
                    <div className="sp-fc-face__top">
                      <div />
                      <span className="sp-fc-counter">
                        {Math.min(idx + 1, deckQueue.length)} of {deckQueue.length}
                      </span>
                      <span className="sp-face-pill sp-face-pill--back">BACK</span>
                    </div>

                    <ul className="sp-fc-back-bullets">
                      {activeCard.backBullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>

                    <div className="sp-fc-face__footer">
                      <span className="sp-fc-tap-hint">Tap card to flip</span>
                      <div
                        style={{ display: 'inline-flex', gap: 4 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          aria-label="Helpful flashcard"
                          className={`sp-icon-btn${
                            cardFeedback[activeCard.id] === 'up' ? ' is-active' : ''
                          }`}
                          onClick={() => toggleFeedback(activeCard.id, 'up')}
                        >
                          <ThumbsUp size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Not helpful"
                          className={`sp-icon-btn${
                            cardFeedback[activeCard.id] === 'down' ? ' is-active' : ''
                          }`}
                          onClick={() => toggleFeedback(activeCard.id, 'down')}
                        >
                          <ThumbsDown size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Report flashcard"
                          className={`sp-icon-btn${
                            cardFeedback[activeCard.id] === 'flag' ? ' is-active' : ''
                          }`}
                          onClick={() => toggleFeedback(activeCard.id, 'flag')}
                        >
                          <AlertTriangle size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Controls: Still learning | Flip | Confident + Keyboard Hints */}
            <div className="sp-fc-controls">
              <div className="sp-fc-action-col sp-fc-action-col--wide">
                <button
                  type="button"
                  className="tactile-btn tactile-btn--pink"
                  onClick={() => handleRate('still-learning')}
                >
                  <Frown size={18} /> Still learning
                </button>
                <span className="sp-fc-kbd-hint">
                  <kbd className="sp-kbd">1</kbd> or <kbd className="sp-kbd">←</kbd>
                </span>
              </div>

              <div className="sp-fc-action-col">
                <button
                  type="button"
                  className="tactile-btn sp-fc-flip-btn"
                  aria-label="Flip flashcard"
                  onClick={handleFlip}
                >
                  <RefreshCcw size={18} />
                </button>
                <span className="sp-fc-kbd-hint">
                  <kbd className="sp-kbd">Space</kbd>
                </span>
              </div>

              <div className="sp-fc-action-col sp-fc-action-col--wide">
                <button
                  type="button"
                  className="tactile-btn tactile-btn--green"
                  onClick={() => handleRate('confident')}
                >
                  <Smile size={18} /> Confident
                </button>
                <span className="sp-fc-kbd-hint">
                  <kbd className="sp-kbd">2</kbd> or <kbd className="sp-kbd">→</kbd>
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
