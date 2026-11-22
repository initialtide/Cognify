import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  Bookmark,
  BookOpen,
  Check,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Copy,
  Download,
  ExternalLink,
  Info,
  Lightbulb,
  Link as LinkIcon,
  ListTodo,
  OctagonAlert,
  PlayCircle,
  RotateCcw,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { EducationalDiagram } from '../../components/artwork/Diagrams';
import { StudyTopBar } from '../../components/layout/StudyTopBar';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { GlossaryPill, NoteCardContent, NoteLesson, VideoTimestamp } from '../../types/curriculum';
import { playSound } from '../../utils/soundEffects';

const INLINE_MARKDOWN_REGEX = /(\*\*[^*]+\*\*|\*[^\s*](?:[^*]*[^\s*])?\*)/g;

export function stripInlineMarkdown(text: string): string {
  return text.replace(INLINE_MARKDOWN_REGEX, (seg) => {
    if (seg.startsWith('**') && seg.endsWith('**') && seg.length > 4) {
      return seg.slice(2, -2);
    }
    if (seg.startsWith('*') && seg.endsWith('*') && seg.length > 2) {
      return seg.slice(1, -1);
    }
    return seg;
  });
}

export function renderInlineMarkdown(text: string): React.ReactNode {
  if (!text) return text;
  const segments = text.split(INLINE_MARKDOWN_REGEX);
  if (segments.length === 1) return text;
  return segments.map((seg, idx) => {
    if (seg.startsWith('**') && seg.endsWith('**') && seg.length > 4) {
      return (
        <strong key={`b-${idx}`} style={{ fontWeight: 700, color: 'var(--text-heading)' }}>
          {seg.slice(2, -2)}
        </strong>
      );
    }
    if (seg.startsWith('*') && seg.endsWith('*') && seg.length > 2) {
      return <em key={`i-${idx}`}>{seg.slice(1, -1)}</em>;
    }
    return <React.Fragment key={`t-${idx}`}>{seg}</React.Fragment>;
  });
}

interface YTPlayerInstance {
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  playVideo: () => void;
  getCurrentTime: () => number;
  destroy: () => void;
}

interface YTNamespace {
  Player: new (
    element: string | HTMLElement,
    options: {
      events?: {
        onReady?: (event: { target: YTPlayerInstance }) => void;
        onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
        onError?: (event: { data: number }) => void;
      };
    }
  ) => YTPlayerInstance;
  PlayerState?: {
    ENDED?: number;
    PLAYING?: number;
    PAUSED?: number;
    BUFFERING?: number;
    CUED?: number;
  };
}

interface WindowWithYT extends Window {
  YT?: YTNamespace;
  onYouTubeIframeAPIReady?: () => void;
}

let ytApiLoadPromise: Promise<YTNamespace | null> | null = null;

function loadYouTubeIframeApi(): Promise<YTNamespace | null> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.resolve(null);
  }
  const win = window as unknown as WindowWithYT;
  if (win.YT && typeof win.YT.Player === 'function') {
    return Promise.resolve(win.YT);
  }
  if (typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent)) {
    return Promise.resolve(null);
  }
  if (ytApiLoadPromise) {
    return ytApiLoadPromise;
  }

  ytApiLoadPromise = new Promise<YTNamespace | null>((resolve) => {
    const previousReady = win.onYouTubeIframeAPIReady;
    win.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === 'function') {
        try {
          previousReady();
        } catch {
          // Ignore errors from any prior callback
        }
      }
      resolve(win.YT ?? null);
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => {
        ytApiLoadPromise = null;
        resolve(null);
      };
      document.head.appendChild(script);
    } else if (win.YT && typeof win.YT.Player === 'function') {
      resolve(win.YT);
    }
  });

  return ytApiLoadPromise;
}

function buildYouTubeEmbedUrl(youtubeId: string): string {
  const params = new URLSearchParams({
    enablejsapi: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    hl: 'en',
  });
  if (typeof window !== 'undefined' && window.location?.origin) {
    const origin = window.location.origin;
    if (/^https?:\/\//.test(origin)) {
      params.set('origin', origin);
    }
  }
  return `https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}?${params.toString()}`;
}

const STOP_WORDS = new Set([
  'with',
  'from',
  'that',
  'this',
  'into',
  'over',
  'what',
  'when',
  'where',
  'which',
  'their',
  'about',
  'intro',
  'introduction',
  'overview',
  'summary',
  'recap',
  'exam',
  'tips',
]);

function tokenizeForMatch(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token));
}

function findMatchingNoteCard(
  timestamp: VideoTimestamp,
  index: number,
  totalTimestamps: number,
  cards?: NoteCardContent[]
): NoteCardContent | null {
  if (!cards || cards.length === 0) return null;
  if (timestamp.outsideCourse) return null;
  if (timestamp.cardId) {
    const direct = cards.find((c) => c.id === timestamp.cardId);
    if (direct) return direct;
  }

  const tsTokens = tokenizeForMatch(timestamp.label);
  if (tsTokens.length > 0) {
    let bestCard: NoteCardContent | null = null;
    let bestScore = 0;
    for (const card of cards) {
      const cardTokens = new Set(tokenizeForMatch(card.title));
      let score = 0;
      for (const token of tsTokens) {
        if (cardTokens.has(token)) {
          score += 2;
        } else if (card.title.toLowerCase().includes(token)) {
          score += 1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestCard = card;
      }
    }
    if (bestCard && bestScore > 0) {
      return bestCard;
    }
  }

  if (cards.length === 1) return cards[0];
  const mappedIndex = Math.min(
    cards.length - 1,
    Math.floor((index * cards.length) / Math.max(1, totalTimestamps))
  );
  return cards[mappedIndex] ?? null;
}

function smoothScrollToElement(id: string, e?: React.MouseEvent): void {
  const target = document.getElementById(id);
  if (target && typeof target.scrollIntoView === 'function') {
    e?.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export interface CognitoVideoPlayerProps {
  subtopicId: string;
  youtubeId: string;
  videoTitle: string;
  videoChannel?: string;
  videoDuration?: string;
  courseMatchSummary?: string;
  courseSubtitle?: string;
  timestamps: VideoTimestamp[];
  cards?: NoteCardContent[];
  defaultTimestampsOpen?: boolean;
  showVideoHeader?: boolean;
  showCardWrapper?: boolean;
}

export const CognitoVideoPlayer: React.FC<CognitoVideoPlayerProps> = ({
  subtopicId,
  youtubeId,
  videoTitle,
  videoChannel,
  videoDuration,
  courseMatchSummary,
  courseSubtitle,
  timestamps,
  cards,
  defaultTimestampsOpen = true,
  showVideoHeader = false,
  showCardWrapper = true,
}) => {
  const reactId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const stageRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const isReadyRef = useRef(false);
  const pendingSeekRef = useRef<number | null>(null);
  const seekLockUntilRef = useRef<number>(0);
  const pollTimerRef = useRef<number | null>(null);
  const videoTitleRef = useRef(videoTitle);
  videoTitleRef.current = videoTitle;

  const [showTimestamps, setShowTimestamps] = useState(defaultTimestampsOpen);
  const [showMatchInfo, setShowMatchInfo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [embedError, setEmbedError] = useState<number | null>(null);

  const sortedTimestamps = useMemo(
    () => [...timestamps].sort((a, b) => a.seconds - b.seconds),
    [timestamps]
  );

  const matchedCount = useMemo(
    () => sortedTimestamps.filter((ts) => !ts.outsideCourse).length,
    [sortedTimestamps]
  );

  useEffect(() => {
    setShowTimestamps(defaultTimestampsOpen);
    setShowMatchInfo(false);
  }, [subtopicId, defaultTimestampsOpen]);

  useEffect(() => {
    let cancelled = false;
    const stage = stageRef.current;
    if (!stage) return;

    const clearPoll = () => {
      if (pollTimerRef.current !== null) {
        window.clearInterval(pollTimerRef.current);
        pollTimerRef.current = null;
      }
    };

    const syncTimeFromPlayer = (target: YTPlayerInstance) => {
      try {
        const t = target.getCurrentTime();
        if (typeof t === 'number' && Number.isFinite(t)) {
          const now = Date.now();
          if (now < seekLockUntilRef.current) {
            setCurrentTime((prev) => {
              if (Math.abs(t - prev) < 3) {
                seekLockUntilRef.current = 0;
                return t;
              }
              return prev;
            });
          } else {
            setCurrentTime(t);
          }
        }
      } catch {
        // Ignore transient YouTube API readiness errors
      }
    };

    clearPoll();
    isReadyRef.current = false;
    pendingSeekRef.current = null;
    seekLockUntilRef.current = 0;
    playerRef.current = null;
    setCurrentTime(0);
    setIsPlaying(false);
    setHasInteracted(false);
    setEmbedError(null);

    stage.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.id = `cognito-yt-${subtopicId.replace(/[^a-zA-Z0-9_-]/g, '_')}-${reactId}`;
    iframe.title = videoTitleRef.current;
    iframe.src = buildYouTubeEmbedUrl(youtubeId);
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.className = 'cognito-video-iframe';
    stage.appendChild(iframe);
    iframeRef.current = iframe;

    loadYouTubeIframeApi().then((YT) => {
      if (cancelled || !YT || typeof YT.Player !== 'function' || !stage.contains(iframe)) {
        return;
      }
      try {
        const ytPlayer = new YT.Player(iframe, {
          events: {
            onReady: (event) => {
              if (cancelled) return;
              isReadyRef.current = true;
              playerRef.current = event.target;
              if (pendingSeekRef.current !== null) {
                const targetSec = pendingSeekRef.current;
                pendingSeekRef.current = null;
                try {
                  event.target.seekTo(targetSec, true);
                  event.target.playVideo();
                } catch {
                  // Ignore if autoplay is blocked
                }
              }
            },
            onStateChange: (event) => {
              if (cancelled) return;
              const playingState = YT.PlayerState?.PLAYING ?? 1;
              if (event.data === playingState) {
                setIsPlaying(true);
                setHasInteracted(true);
                syncTimeFromPlayer(event.target);
                clearPoll();
                pollTimerRef.current = window.setInterval(() => {
                  syncTimeFromPlayer(event.target);
                }, 300);
              } else {
                setIsPlaying(false);
                clearPoll();
                syncTimeFromPlayer(event.target);
              }
            },
            onError: (event) => {
              if (cancelled) return;
              setEmbedError(event.data);
            },
          },
        });
        playerRef.current = ytPlayer;
      } catch {
        // Keep base iframe working cleanly if YT API fails to bind
      }
    });

    return () => {
      cancelled = true;
      clearPoll();
      isReadyRef.current = false;
      pendingSeekRef.current = null;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // Ignore YT destroy edge cases
        }
        playerRef.current = null;
      }
      iframeRef.current = null;
      stage.innerHTML = '';
    };
  }, [subtopicId, youtubeId, reactId]);

  const activeTimestampIndex = useMemo(() => {
    if (sortedTimestamps.length === 0) return -1;
    if (!isPlaying && !hasInteracted && currentTime === 0) return -1;
    let activeIdx = 0;
    for (let i = 0; i < sortedTimestamps.length; i++) {
      if (sortedTimestamps[i].seconds <= currentTime + 0.5) {
        activeIdx = i;
      }
    }
    return activeIdx;
  }, [sortedTimestamps, currentTime, isPlaying, hasInteracted]);

  const handleSeekTo = (seconds: number) => {
    setCurrentTime(seconds);
    setHasInteracted(true);
    seekLockUntilRef.current = Date.now() + 1800;

    if (playerRef.current && isReadyRef.current) {
      try {
        playerRef.current.seekTo(seconds, true);
        playerRef.current.playVideo();
        return;
      } catch {
        // Fall through to postMessage fallback
      }
    }

    pendingSeekRef.current = seconds;
    const frameWindow = iframeRef.current?.contentWindow;
    if (frameWindow && typeof frameWindow.postMessage === 'function') {
      try {
        frameWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds, true] }),
          '*'
        );
        frameWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
      } catch {
        // Ignore postMessage errors in restricted sandboxes
      }
    }
  };

  const youtubeWatchUrl =
    currentTime > 1
      ? `https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}&t=${Math.floor(currentTime)}s`
      : `https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}`;

  const channelLabel = videoChannel || 'Cognito';
  const defaultMatchText = `${matchedCount} of ${sortedTimestamps.length} sections match ${courseSubtitle || 'your course'}`;
  const summaryText = courseMatchSummary || defaultMatchText;
  const summaryMatch = summaryText.match(/^(\d+\s+of\s+\d+)(.*)$/i);

  return (
    <section
      className={`${showCardWrapper ? 'cognito-card ' : ''}cognito-video-card no-print`}
      aria-label={`Video lesson: ${videoTitle}`}
    >
      {/* Optional Compact Header (used in VideosPage modal; hidden on NotesViewerPage for flush 16:9 top) */}
      {showVideoHeader && (
        <div className="cognito-video-header">
          <div className="cognito-video-header__left">
            <PlayCircle size={18} color="var(--color-purple-500)" style={{ flexShrink: 0 }} />
            <span className="cognito-video-header__title">{videoTitle}</span>
            <span className="cognito-video-channel-pill">
              {channelLabel}
              {videoDuration ? ` · ${videoDuration}` : ''}
            </span>
          </div>

          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cognito-video-yt-link"
          >
            <span>Open on YouTube</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      )}

      {/* Flush 16:9 YouTube Player Stage */}
      <div className="cognito-video-stage-wrap">
        <div ref={stageRef} className="cognito-video-stage" />
      </div>

      {/* Graceful Embed Restriction Fallback */}
      {embedError !== null && (
        <div className="cognito-video-fallback-banner" role="status">
          <span>This video cannot play in embedded mode in your browser.</span>
          <a
            href={youtubeWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 800, textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: 4 }}
          >
            Watch on YouTube <ExternalLink size={13} />
          </a>
        </div>
      )}

      {/* Cognito-style Match Summary + Blue Toggle Switch Bar */}
      {sortedTimestamps.length > 0 && (
        <>
          <div className="cognito-timestamps-bar">
            <div className="cognito-timestamps-match">
              <span>
                {summaryMatch ? (
                  <>
                    <strong>{summaryMatch[1]}</strong>
                    {summaryMatch[2]}
                  </>
                ) : (
                  summaryText
                )}
              </span>
              <button
                type="button"
                className="notes-icon-action"
                aria-label="About matched video sections"
                title="Sections matched to your selected specification"
                onClick={() => setShowMatchInfo((prev) => !prev)}
                style={{ padding: 2 }}
              >
                <Info size={14} />
              </button>
            </div>

            <div className="cognito-timestamps-controls">
              {!showVideoHeader && (
                <a
                  href={youtubeWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cognito-video-yt-link"
                  title={`Open "${videoTitle}" (${channelLabel}) on YouTube`}
                >
                  <span>YouTube</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              )}

              <label className="cognito-timestamps-switch-label">
                <span>Show timestamps</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={showTimestamps}
                  aria-label="Show timestamps"
                  className="toggle-switch"
                  onClick={() => setShowTimestamps((open) => !open)}
                >
                  <span className="toggle-switch__knob" />
                </button>
              </label>
            </div>
          </div>

          {showMatchInfo && (
            <div
              style={{
                padding: '0 22px 12px',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              Highlighted chapters are directly assessed in your specification ({courseSubtitle || 'this course'}).
              Chapters marked <em>Outside your course</em> are optional extra context — click any timestamp to jump straight there.
            </div>
          )}

          {showTimestamps && (
            <div className="cognito-timestamps-list" role="list" aria-label="Video chapter timestamps">
              {sortedTimestamps.map((ts, idx) => {
                const isActive = idx === activeTimestampIndex;
                const matchedCard = findMatchingNoteCard(
                  ts,
                  idx,
                  sortedTimestamps.length,
                  cards
                );

                return (
                  <div
                    key={`${ts.time}-${idx}`}
                    role="listitem"
                    className={`cognito-timestamp-row${isActive ? ' is-active' : ''}${ts.outsideCourse ? ' is-outside' : ''}`}
                    data-active={isActive ? 'true' : 'false'}
                  >
                    <button
                      type="button"
                      className="cognito-timestamp-seek"
                      aria-current={isActive ? 'true' : undefined}
                      onClick={() => handleSeekTo(ts.seconds)}
                    >
                      <span className="cognito-timestamp-time">
                        <Clock size={13} aria-hidden="true" />
                        <span>{ts.time}</span>
                      </span>
                      <span className="cognito-timestamp-label">{ts.label}</span>
                      {isActive && (
                        <span className="cognito-timestamp-playing">
                          <span
                            className={`cognito-timestamp-dot${isPlaying ? ' is-pulsing' : ''}`}
                            aria-hidden="true"
                          />
                          {isPlaying ? 'Playing' : 'Selected'}
                        </span>
                      )}
                    </button>

                    {ts.outsideCourse ? (
                      <span className="cognito-outside-pill">Outside your course</span>
                    ) : (
                      matchedCard && (
                        <a
                          href={`#${matchedCard.id}`}
                          className="cognito-timestamp-jump"
                          title={`Jump to note: ${matchedCard.title}`}
                          onClick={(e) => smoothScrollToElement(matchedCard.id, e)}
                        >
                          <span>Jump to note</span>
                          <ArrowDown size={12} aria-hidden="true" />
                        </a>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
};

function createFallbackLesson(code: string, title: string, subtopicId: string): NoteLesson {
  return {
    subtopicId,
    subtopicCode: code,
    subtopicTitle: title,
    readingMinutes: 6,
    videoTitle: `${code} ${title} — Revision Overview`,
    youtubeId: 'qHkUOlC8Nbo',
    videoChannel: 'Cognito',
    timestamps: [{ time: '0:00', seconds: 0, label: 'Core concepts & exam essentials' }],
    cards: [
      {
        id: `${subtopicId}-c1`,
        title: `Key Principles of ${title}`,
        summary: `Core definitions, mechanisms, and worked exam applications for ${title}.`,
        bullets: [
          `Understand the **core definitions** and mechanisms required by the specification for ${title}.`,
          'Practise applying equations, diagrams, and real-world examples.',
          'Review common examiner mark-scheme phrasing using the Quiz and Exam Practice tabs.',
        ],
        memoryAid: `Break ${title} into definitions, cause-and-effect steps, and worked numerical examples.`,
      },
    ],
    keyTerms: [
      { term: title, definition: `Specification subtopic ${code} covering foundational theory and exam application.` },
    ],
    checklistPoints: [
      `I can recall the core definitions and processes for ${code} ${title}.`,
      'I am ready to test my recall using the interactive Quiz.',
    ],
  };
}

export const NotesViewerPage: React.FC = () => {
  const { courseId, subtopicId } = useParams<{ courseId: string; subtopicId: string }>();
  const {
    profile,
    markNoteRead,
    toggleChecklistPoint,
    setAllChecklistPoints,
  } = useApp();

  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const allSubtopics = course.topics.flatMap((t) => t.subtopics);
  const subIndex = Math.max(0, allSubtopics.findIndex((s) => s.id === subtopicId));
  const subtopic = allSubtopics[subIndex] ?? allSubtopics[0];
  const nextSubtopic = allSubtopics[subIndex + 1];

  const lesson: NoteLesson =
    (subtopic && course.notes[subtopic.id]) ??
    createFallbackLesson(subtopic?.code ?? '1.1', subtopic?.title ?? 'Revision Notes', subtopic?.id ?? 'default');

  const [scrollPct, setScrollPct] = useState(12);
  const [activePill, setActivePill] = useState<{ cardId: string; pill: GlossaryPill } | null>(null);
  const [keyTermsOpen, setKeyTermsOpen] = useState(true);
  const [revealAllTerms, setRevealAllTerms] = useState(false);
  const [revealedTerms, setRevealedTerms] = useState<string[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);
  const [feedbackByTarget, setFeedbackByTarget] = useState<Record<string, 'up' | 'down' | 'flag'>>({});

  const progress = profile.progressByCourse[course.id];
  const isRead = progress?.readNoteIds.includes(lesson.subtopicId) ?? false;
  const checkedPoints = progress?.checkedPointsBySubtopic[lesson.subtopicId] ?? [];

  useEffect(() => {
    setActivePill(null);
    setKeyTermsOpen(true);
    setRevealAllTerms(false);
    setRevealedTerms([]);
    setCopiedLink(false);
    setFeedbackByTarget({});
  }, [course.id, lesson.subtopicId]);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPct(100);
      } else {
        setScrollPct(Math.min(100, Math.max(8, Math.round((window.scrollY / docHeight) * 100))));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const applyGlossaryPills = (
    text: string,
    cardId: string,
    pills: GlossaryPill[] = [],
    keyPrefix = 'p'
  ): React.ReactNode => {
    if (!pills || pills.length === 0) return text;
    let parts: React.ReactNode[] = [text];
    for (const pill of pills) {
      if (!pill.term.trim()) continue;
      const escaped = pill.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const prefix = /^\w/.test(pill.term) ? '\\b' : '';
      const suffix = /\w$/.test(pill.term) ? '\\b' : '';
      const regex = new RegExp(`(${prefix}${escaped}${suffix})`, 'i');

      parts = parts.flatMap<React.ReactNode>((chunk, idx) => {
        if (typeof chunk !== 'string') return [chunk];
        const split = chunk.split(regex);
        return split.map<React.ReactNode>((seg, sIdx) => {
          if (seg.toLowerCase() === pill.term.toLowerCase()) {
            const isOpen =
              activePill?.cardId === cardId &&
              activePill.pill.term.toLowerCase() === pill.term.toLowerCase();
            return (
              <button
                key={`${keyPrefix}-${pill.term}-${idx}-${sIdx}`}
                type="button"
                className={`notes-glossary-pill${isOpen ? ' is-open' : ''}`}
                title={`${pill.term}: ${pill.definition}`}
                onClick={() =>
                  setActivePill((prev) =>
                    prev &&
                    prev.cardId === cardId &&
                    prev.pill.term.toLowerCase() === pill.term.toLowerCase()
                      ? null
                      : { cardId, pill }
                  )
                }
              >
                {seg}
              </button>
            );
          }
          return seg;
        });
      });
    }
    return parts;
  };

  const renderRichText = (
    text: string,
    cardId: string,
    pills: GlossaryPill[] = []
  ): React.ReactNode => {
    const tokenRegex = /(\*\*[^*]+\*\*|\*[^\s*](?:[^*]*[^\s*])?\*)/g;
    const segments = text.split(tokenRegex);
    return segments.map((seg, idx) => {
      if (seg.startsWith('**') && seg.endsWith('**') && seg.length > 4) {
        const inner = seg.slice(2, -2);
        return (
          <strong key={`b-${idx}`} style={{ fontWeight: 700, color: 'var(--text-heading)' }}>
            {applyGlossaryPills(inner, cardId, pills, `b-${idx}`)}
          </strong>
        );
      }
      if (seg.startsWith('*') && seg.endsWith('*') && seg.length > 2) {
        const inner = seg.slice(1, -1);
        return (
          <em key={`i-${idx}`}>
            {applyGlossaryPills(inner, cardId, pills, `i-${idx}`)}
          </em>
        );
      }
      return (
        <React.Fragment key={`t-${idx}`}>
          {applyGlossaryPills(seg, cardId, pills, `t-${idx}`)}
        </React.Fragment>
      );
    });
  };

  const handleCompleteNotes = () => {
    markNoteRead(course.id, lesson.subtopicId, `${lesson.subtopicCode} ${lesson.subtopicTitle}`);
    playSound('xp', profile.preferences.soundEnabled, profile.preferences.soundVolume);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setCopiedLink(true);
    window.setTimeout(() => setCopiedLink(false), 1600);
  };

  const toggleFeedback = (targetKey: string, kind: 'up' | 'down' | 'flag') => {
    setFeedbackByTarget((prev) => {
      if (prev[targetKey] === kind) {
        const next = { ...prev };
        delete next[targetKey];
        return next;
      }
      return { ...prev, [targetKey]: kind };
    });
  };

  const hasHiddenTerms =
    !revealAllTerms &&
    revealedTerms.length === 0 &&
    lesson.keyTerms.length > 0;

  const courseSubtitleText =
    course.tier && course.tier !== course.qualificationLabel
      ? `${course.qualificationLabel} ${course.boardLabel} ${course.tier}`.replace(/\s+/g, ' ').trim()
      : `${course.qualificationLabel} ${course.boardLabel}`.replace(/\s+/g, ' ').trim();

  return (
    <div>
      {/* Notice: NO weekly usage limit bar — 100% unlocked! */}
      <StudyTopBar
        course={course}
        currentSubtopicId={lesson.subtopicId}
        title={lesson.subtopicTitle}
        activityType="notes"
        progressPercent={scrollPct}
      />

      <main className="notes-layout">
        {/* Left Sticky CONTENTS Card (matches Cognito screenshots 1:1) */}
        <aside className="cognito-card notes-sidebar no-print" aria-label="Contents">
          <span className="tilted-badge tilted-badge--edge tilted-badge--purple">
            CONTENTS
          </span>

          <ol className="notes-contents-list">
            {lesson.cards.map((c, idx) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="notes-contents-item"
                  onClick={(e) => smoothScrollToElement(c.id, e)}
                >
                  <span className="notes-num-circle">{idx + 1}</span>
                  <div>
                    <div className="notes-contents-title">{c.title}</div>
                    {c.summary && (
                      <div className="notes-contents-summary">{c.summary}</div>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        {/* Centered Main Notes Column */}
        <div className="notes-main-col">
          {/* Top Lesson Title Card */}
          <section className="cognito-card notes-title-card">
            <span className="tilted-badge tilted-badge--edge tilted-badge--purple">
              {course.subjectName}
            </span>

            <h1 className="font-heading" style={{ fontSize: '2.02rem', lineHeight: 1.2, marginBottom: 18 }}>
              {lesson.subtopicCode} - {lesson.subtopicTitle}
            </h1>

            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
              {lesson.cards.map((c, idx) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={(e) => smoothScrollToElement(c.id, e)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span className="notes-num-circle">{idx + 1}</span>
                    <span>{c.title}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="notes-title-footer no-print">
              <span className="notes-duration-pill">
                <Clock size={14} /> {lesson.readingMinutes} min
              </span>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <button
                  type="button"
                  className="notes-icon-action"
                  onClick={() => window.print()}
                  aria-label="Download PDF"
                  title="Print or save PDF"
                >
                  <Download size={16} />
                </button>
                <button
                  type="button"
                  className={`notes-icon-action${copiedLink ? ' is-active' : ''}`}
                  onClick={handleCopyLink}
                  aria-label={copiedLink ? 'Link copied' : 'Copy lesson link'}
                  title={copiedLink ? 'Link copied!' : 'Copy link'}
                >
                  {copiedLink ? <Check size={16} /> : <LinkIcon size={16} />}
                </button>
              </div>
            </div>
          </section>

          <hr className="dashed-divider no-print" />

          {/* Unified Video & Timestamps Card (flush 16:9 top + blue Show timestamps toggle) */}
          <CognitoVideoPlayer
            subtopicId={lesson.subtopicId}
            youtubeId={lesson.youtubeId}
            videoTitle={lesson.videoTitle}
            videoChannel={lesson.videoChannel}
            videoDuration={lesson.videoDuration}
            courseMatchSummary={lesson.courseMatchSummary}
            courseSubtitle={courseSubtitleText}
            timestamps={lesson.timestamps}
            cards={lesson.cards}
            defaultTimestampsOpen={true}
            showVideoHeader={false}
          />

          {/* Numbered NOTE Cards */}
          {lesson.cards.map((card, idx) => {
            const cardFeedback = feedbackByTarget[card.id];
            const showCardPill = activePill && activePill.cardId === card.id;

            return (
              <React.Fragment key={card.id}>
                <hr className="dashed-divider" />
                <article id={card.id} className="cognito-card notes-card">
                  <span className="tilted-badge tilted-badge--edge tilted-badge--purple">
                    NOTE {idx + 1} OF {lesson.cards.length}
                  </span>

                  <h2 className="font-heading" style={{ fontSize: '1.58rem', marginBottom: 16 }}>
                    {card.title}
                  </h2>

                  {showCardPill && (
                    <div role="status" className="notes-glossary-popover">
                      <div>
                        <strong style={{ textTransform: 'capitalize' }}>{activePill.pill.term}: </strong>
                        <span>{activePill.pill.definition}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActivePill(null)}
                        aria-label="Close definition"
                        style={{ border: 0, background: 'transparent', fontWeight: 800, color: 'inherit', padding: '0 4px' }}
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="notes-bullet-list">
                      {card.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{renderRichText(b, card.id, card.glossaryPills)}</li>
                      ))}
                    </ul>
                  )}

                  {card.diagram && (
                    <div className="notes-diagram-wrap">
                      <EducationalDiagram kind={card.diagram} />
                    </div>
                  )}

                  {card.subsections && card.subsections.length > 0 && (
                    <div>
                      {card.subsections.map((sub, sIdx) => (
                        <div key={sIdx}>
                          {sub.heading && (
                            <h3
                              className={`notes-subheading${
                                sIdx === 0 && (!card.bullets || card.bullets.length === 0)
                                  ? ' notes-subheading--first'
                                  : ''
                              }`}
                            >
                              {sub.heading}
                            </h3>
                          )}

                          {sub.bullets && sub.bullets.length > 0 && (
                            <ul className="notes-bullet-list">
                              {sub.bullets.map((b, bIdx) => (
                                <li key={bIdx}>{renderRichText(b, card.id, card.glossaryPills)}</li>
                              ))}
                            </ul>
                          )}

                          {sub.examples && sub.examples.length > 0 && (
                            <div>
                              {sub.exampleHeading && (
                                <div className="notes-example-heading">{sub.exampleHeading}</div>
                              )}
                              <ul className="notes-bullet-list">
                                {sub.examples.map((ex, eIdx) => (
                                  <li key={eIdx}>{renderRichText(ex, card.id, card.glossaryPills)}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {sub.diagram && (
                            <div className="notes-diagram-wrap">
                              <EducationalDiagram kind={sub.diagram} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {card.memoryAid && (
                    <div className="notes-callout notes-callout--memory">
                      <span className="tilted-badge tilted-badge--edge tilted-badge--memory">
                        <Bookmark size={12} /> MEMORY AID
                      </span>
                      <p>{renderRichText(card.memoryAid, card.id, card.glossaryPills)}</p>
                    </div>
                  )}

                  {card.commonMistake && (
                    <div className="notes-callout notes-callout--mistake">
                      <span className="tilted-badge tilted-badge--edge tilted-badge--mistake">
                        <OctagonAlert size={13} /> COMMON MISTAKE
                      </span>
                      <p>{renderRichText(card.commonMistake, card.id, card.glossaryPills)}</p>
                    </div>
                  )}

                  <div className="no-print" style={{ marginTop: 18, display: 'flex', justifyContent: 'flex-end', gap: 6 }}>
                    <button
                      type="button"
                      aria-label="Helpful"
                      className={`notes-icon-action${cardFeedback === 'up' ? ' is-active' : ''}`}
                      onClick={() => toggleFeedback(card.id, 'up')}
                    >
                      <ThumbsUp size={16} />
                    </button>
                    <button
                      type="button"
                      aria-label="Not helpful"
                      className={`notes-icon-action${cardFeedback === 'down' ? ' is-active' : ''}`}
                      onClick={() => toggleFeedback(card.id, 'down')}
                    >
                      <ThumbsDown size={16} />
                    </button>
                    <button
                      type="button"
                      aria-label="Report"
                      className={`notes-icon-action${cardFeedback === 'flag' ? ' is-active' : ''}`}
                      onClick={() => toggleFeedback(card.id, 'flag')}
                    >
                      <AlertTriangle size={16} />
                    </button>
                  </div>
                </article>
              </React.Fragment>
            );
          })}

          {/* Collapsible KEY TERMS Active Recall Card */}
          {lesson.keyTerms.length > 0 && (
            <>
              <hr className="dashed-divider" />
              <section className="cognito-card key-terms-card">
                <span className="tilted-badge tilted-badge--edge tilted-badge--purple">
                  <BookOpen size={12} /> KEY TERMS
                </span>

                <button
                  type="button"
                  className="key-terms-collapse-btn no-print"
                  aria-expanded={keyTermsOpen}
                  aria-label={keyTermsOpen ? 'Collapse key terms' : 'Expand key terms'}
                  onClick={() => setKeyTermsOpen((open) => !open)}
                >
                  {keyTermsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {keyTermsOpen ? (
                  <>
                    <div className="key-terms-header-row">
                      <span>TERM</span>
                      <span>DEFINITION</span>
                    </div>

                    <div className="key-terms-body">
                      {lesson.keyTerms.map((kt) => {
                        const shown = revealAllTerms || revealedTerms.includes(kt.term);
                        return (
                          <button
                            key={kt.term}
                            type="button"
                            className="key-terms-row"
                            onClick={() =>
                              setRevealedTerms((prev) =>
                                prev.includes(kt.term)
                                  ? prev.filter((item) => item !== kt.term)
                                  : [...prev, kt.term]
                              )
                            }
                          >
                            <strong style={{ color: 'var(--text-heading)' }}>{kt.term}</strong>
                            <span
                              style={{
                                filter: shown ? 'none' : 'blur(5px)',
                                opacity: shown ? 1 : 0.42,
                                transition: 'filter 180ms ease, opacity 180ms ease',
                                userSelect: shown ? 'auto' : 'none',
                              }}
                              title={shown ? undefined : 'Tap to reveal definition'}
                            >
                              {kt.definition}
                            </span>
                          </button>
                        );
                      })}

                      {hasHiddenTerms && (
                        <div className="key-terms-recall-hint" aria-hidden="true">
                          TRY TO RECALL EACH DEFINITION, THEN TAP IT TO CHECK
                        </div>
                      )}
                    </div>

                    <div className="key-terms-footer no-print">
                      <button
                        type="button"
                        className="key-terms-show-btn"
                        onClick={() => {
                          if (revealAllTerms) {
                            setRevealAllTerms(false);
                            setRevealedTerms([]);
                          } else {
                            setRevealAllTerms(true);
                          }
                        }}
                      >
                        {revealAllTerms ? 'Hide all' : 'Show all'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', paddingTop: 4 }}>
                    {lesson.keyTerms.length} key {lesson.keyTerms.length === 1 ? 'term' : 'terms'} hidden — tap the arrow to test your recall.
                  </div>
                )}
              </section>
            </>
          )}

          {/* END OF NOTES Checklist + 2-Column Tactile Action Grid */}
          <hr className="dashed-divider" />
          <section className="cognito-card end-notes-card">
            <span className="tilted-badge tilted-badge--edge tilted-badge--purple">
              END OF NOTES
            </span>

            <h2
              className="font-heading"
              style={{
                fontSize: '1.42rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                marginBottom: 14,
              }}
            >
              <ListTodo size={22} color="var(--text-heading)" />
              Key points to remember
            </h2>

            <div style={{ display: 'grid', gap: 4 }}>
              {lesson.checklistPoints.map((pt) => {
                const checked = checkedPoints.includes(pt);
                return (
                  <label key={pt} className={`end-notes-check-item${checked ? ' is-checked' : ''}`}>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleChecklistPoint(course.id, lesson.subtopicId, pt)}
                    />
                    <span className="end-notes-squircle" aria-hidden="true">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 28 28"
                        overflow="visible"
                        focusable="false"
                      >
                        <path
                          d="M6.1,10 L6.5,19.8 Q6.6,22.8 9.6,22.7 L19.5,22.4 Q22.6,22.2 22.4,19.2 L22.1,9.2 Q22,6.2 19,6.4 L9,6.85 Q6,7 6.1,10 Z"
                          className="end-notes-squircle__box"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {checked && (
                          <path
                            d="M10.1 14.7 L13.0 17.6 L18.5 11.2"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </span>
                    <span className="end-notes-check-text">{pt}</span>
                  </label>
                );
              })}
            </div>

            <div className="end-notes-utility-bar no-print">
              <div className="end-notes-inline-controls">
                <button
                  type="button"
                  className="end-notes-text-btn"
                  onClick={() => setAllChecklistPoints(course.id, lesson.subtopicId, lesson.checklistPoints)}
                >
                  <CheckSquare size={14} /> Tick all
                </button>
                <span aria-hidden="true">|</span>
                <button
                  type="button"
                  className="end-notes-text-btn"
                  onClick={() => setAllChecklistPoints(course.id, lesson.subtopicId, [])}
                >
                  <RotateCcw size={13} /> Reset
                </button>
              </div>

              <button
                type="button"
                onClick={handleCompleteNotes}
                className={`tactile-btn tactile-btn--sm ${isRead ? 'tactile-btn--green' : 'tactile-btn--solid-blue'}`}
              >
                <Check size={15} />
                {isRead ? 'Completed (+5 XP review)' : 'Mark notes complete (+25 XP)'}
              </button>
            </div>

            <hr className="dashed-divider no-print" style={{ margin: '22px 0' }} />

            <div className="end-notes-actions-grid no-print">
              {/* Left Unified Tactile Card: Quiz + Flashcards */}
              <div className="end-action-stack">
                <Link to={`/course/${course.id}/quiz/${lesson.subtopicId}`} className="end-action-row">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    <Lightbulb size={17} color="var(--text-heading)" />
                    <span>Take a quiz</span>
                  </span>
                  <ChevronRight size={17} color="var(--text-muted)" />
                </Link>

                {course.flashcards.length > 0 && (
                  <Link to={`/course/${course.id}/flashcards/${lesson.subtopicId}`} className="end-action-row">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                      <Copy size={18} color="var(--text-heading)" />
                      <span>View flashcards</span>
                    </span>
                    <ChevronRight size={17} color="var(--text-muted)" />
                  </Link>
                )}
              </div>

              {/* Right Column: Next Up Card + Note Rating */}
              <div>
                {nextSubtopic ? (
                  <Link to={`/course/${course.id}/notes/${nextSubtopic.id}`} className="end-next-card">
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.94rem', color: 'var(--text-heading)' }}>
                        {nextSubtopic.code} - {nextSubtopic.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
                        Next up
                      </div>
                    </div>
                    <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  </Link>
                ) : (
                  <Link to={`/course/${course.id}`} className="end-next-card">
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.94rem', color: 'var(--text-heading)' }}>
                        Back to {course.subjectName}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>
                        Course overview
                      </div>
                    </div>
                    <ChevronRight size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                  </Link>
                )}

                <div className="end-notes-feedback-row">
                  <span>How were these notes?</span>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    <button
                      type="button"
                      aria-label="Notes helpful"
                      className={`notes-icon-action${feedbackByTarget.lesson === 'up' ? ' is-active' : ''}`}
                      onClick={() => toggleFeedback('lesson', 'up')}
                    >
                      <ThumbsUp size={15} />
                    </button>
                    <button
                      type="button"
                      aria-label="Notes not helpful"
                      className={`notes-icon-action${feedbackByTarget.lesson === 'down' ? ' is-active' : ''}`}
                      onClick={() => toggleFeedback('lesson', 'down')}
                    >
                      <ThumbsDown size={15} />
                    </button>
                    <button
                      type="button"
                      aria-label="Report issue with notes"
                      className={`notes-icon-action${feedbackByTarget.lesson === 'flag' ? ' is-active' : ''}`}
                      onClick={() => toggleFeedback('lesson', 'flag')}
                    >
                      <AlertTriangle size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
