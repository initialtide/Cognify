import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronRight,
  FileSpreadsheet,
  KeyRound,
  Search,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ALL_COURSES } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { SubjectIconId } from '../../types/curriculum';
import { SubjectIcon } from '../artwork/SubjectIcons';

interface QuickSearchModalProps {
  open: boolean;
  onClose: () => void;
}

type SearchResultKind = 'course' | 'subtopic' | 'cheat-sheet' | 'key-term';

interface QuickJumpAction {
  label: string;
  to: string;
}

interface SearchResultItem {
  id: string;
  kind: SearchResultKind;
  title: string;
  subtitle: string;
  to: string;
  subjectIcon?: SubjectIconId;
  jumps?: QuickJumpAction[];
  score: number;
}

const SECTION_META: { kind: SearchResultKind; label: string }[] = [
  { kind: 'course', label: 'Courses' },
  { kind: 'subtopic', label: 'Subtopics' },
  { kind: 'cheat-sheet', label: 'Cheat Sheets' },
  { kind: 'key-term', label: 'Key Terms' },
];

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ open, onClose }) => {
  const { profile } = useApp();
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      setQuery('');
      setSelectedIndex(0);
      window.setTimeout(() => inputRef.current?.focus(), 10);
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      if (open) onClose();
    };

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const handlePointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!('closedBy' in HTMLDialogElement.prototype) && pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('pointerdown', handlePointerDown);
    dialog.addEventListener('pointerup', handlePointerUp);
    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('pointerdown', handlePointerDown);
      dialog.removeEventListener('pointerup', handlePointerUp);
    };
  }, [open, onClose]);

  const enrolledSet = useMemo(
    () => new Set(profile.enrolledCourseIds),
    [profile.enrolledCourseIds]
  );

  // Deduplicate courses per (qualification, subjectSlug) for content items so search results stay crisp
  const canonicalContentCourses = useMemo(() => {
    const byBucket = new Map<string, (typeof ALL_COURSES)[number]>();
    for (const course of ALL_COURSES) {
      if (course.pastPapersOnly) continue;
      const bucket = `${course.qualification}::${course.subjectSlug}`;
      const existing = byBucket.get(bucket);
      if (!existing) {
        byBucket.set(bucket, course);
      } else if (!enrolledSet.has(existing.id) && enrolledSet.has(course.id)) {
        byBucket.set(bucket, course);
      }
    }
    return Array.from(byBucket.values());
  }, [enrolledSet]);

  const results = useMemo<SearchResultItem[]>(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      // Default quick-jump list: enrolled courses first, up to 8 items
      const enrolled = ALL_COURSES.filter((c) => enrolledSet.has(c.id));
      const fallback = enrolled.length > 0 ? enrolled : ALL_COURSES.slice(0, 8);
      return fallback.slice(0, 8).map((c, idx) => ({
        id: `default-${c.id}`,
        kind: 'course' as const,
        title: c.subjectName,
        subtitle: c.subtitle,
        to: `/course/${c.id}`,
        subjectIcon: c.icon,
        score: 100 - idx,
      }));
    }

    const terms = q.split(/\s+/).filter(Boolean);
    const matchesAll = (haystack: string) => {
      const lower = haystack.toLowerCase();
      return terms.every((t) => lower.includes(t));
    };

    const courseItems: SearchResultItem[] = [];
    for (const c of ALL_COURSES) {
      const hay = `${c.qualificationLabel} ${c.subjectName} ${c.boardLabel} ${c.tier} ${c.specCode} ${c.subtitle}`;
      if (matchesAll(hay)) {
        const starts =
          c.subjectName.toLowerCase().startsWith(q) ||
          `${c.qualificationLabel} ${c.subjectName}`.toLowerCase().startsWith(q);
        courseItems.push({
          id: `course-${c.id}`,
          kind: 'course',
          title: `${c.qualificationLabel} ${c.subjectName}`,
          subtitle: `${c.boardLabel}${c.tier && c.tier !== c.qualificationLabel ? ` · ${c.tier}` : ''} (${c.specCode})`,
          to: `/course/${c.id}`,
          subjectIcon: c.icon,
          score: (starts ? 40 : 10) + (enrolledSet.has(c.id) ? 20 : 0),
        });
      }
    }
    courseItems.sort((a, b) => b.score - a.score);

    const subtopicItems: SearchResultItem[] = [];
    const cheatSheetItems: SearchResultItem[] = [];
    const keyTermItems: SearchResultItem[] = [];

    for (const c of canonicalContentCourses) {
      const enrolledBoost = enrolledSet.has(c.id) ? 12 : 0;

      for (const topic of c.topics) {
        for (const sub of topic.subtopics) {
          const hay = `${c.qualificationLabel} ${c.subjectName} ${topic.title} ${sub.code} ${sub.title}`;
          if (matchesAll(hay)) {
            const titleStarts = sub.title.toLowerCase().startsWith(q);
            const hasExam = c.examPractice.some((e) => e.subtopicId === sub.id);
            const jumps: QuickJumpAction[] = [
              { label: c.isMaths ? 'Lesson' : 'Notes', to: `/course/${c.id}/notes/${sub.id}` },
              { label: 'Quiz', to: `/course/${c.id}/quiz/${sub.id}` },
            ];
            if (!c.isMaths && c.flashcards.length > 0) {
              jumps.push({ label: 'Cards', to: `/course/${c.id}/flashcards/${sub.id}` });
            }
            if (hasExam) {
              jumps.push({ label: 'Exam', to: `/course/${c.id}/exam-practice/${sub.id}` });
            }

            subtopicItems.push({
              id: `sub-${c.id}-${sub.id}`,
              kind: 'subtopic',
              title: `${sub.code} - ${sub.title}`,
              subtitle: `${c.qualificationLabel} ${c.subjectName} · Topic ${topic.number}: ${topic.title}`,
              to: `/course/${c.id}/notes/${sub.id}`,
              jumps,
              score: (titleStarts ? 30 : 10) + enrolledBoost,
            });
          }
        }
      }

      for (const cs of c.cheatSheets) {
        const hay = `${c.qualificationLabel} ${c.subjectName} ${cs.title} ${cs.topicName} ${cs.summary}`;
        if (matchesAll(hay)) {
          cheatSheetItems.push({
            id: `cs-${c.id}-${cs.id}`,
            kind: 'cheat-sheet',
            title: cs.title,
            subtitle: `${c.qualificationLabel} ${c.subjectName} · ${cs.topicName}`,
            to: `/course/${c.id}/cheat-sheets/${cs.slug}`,
            score: (cs.title.toLowerCase().startsWith(q) ? 25 : 10) + enrolledBoost,
          });
        }
      }

      for (const kt of c.keyTerms) {
        const hay = `${kt.term} ${kt.definition} ${c.qualificationLabel} ${c.subjectName}`;
        if (matchesAll(hay)) {
          keyTermItems.push({
            id: `kt-${c.id}-${kt.id}`,
            kind: 'key-term',
            title: kt.term,
            subtitle: `${c.qualificationLabel} ${c.subjectName} · ${kt.definition}`,
            to: `/course/${c.id}/key-terms`,
            score: (kt.term.toLowerCase().startsWith(q) ? 28 : 8) + enrolledBoost,
          });
        }
      }
    }

    subtopicItems.sort((a, b) => b.score - a.score);
    cheatSheetItems.sort((a, b) => b.score - a.score);
    keyTermItems.sort((a, b) => b.score - a.score);

    return [
      ...courseItems.slice(0, 5),
      ...subtopicItems.slice(0, 10),
      ...cheatSheetItems.slice(0, 4),
      ...keyTermItems.slice(0, 5),
    ];
  }, [query, canonicalContentCourses, enrolledSet]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const el = rowRefs.current[selectedIndex];
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  const navigateAndClose = (to: string) => {
    dialogRef.current?.close();
    onClose();
    navigate(to);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % results.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (results.length > 0) {
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      }
    } else if (e.key === 'Enter') {
      const target = results[selectedIndex];
      if (target) {
        e.preventDefault();
        navigateAndClose(target.to);
      }
    }
  };

  const groupedSections = useMemo(() => {
    let cursor = 0;
    return SECTION_META.map((sec) => {
      const items = results.filter((r) => r.kind === sec.kind);
      const startIndex = cursor;
      cursor += items.length;
      return { ...sec, items, startIndex };
    }).filter((s) => s.items.length > 0);
  }, [results]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Quick search courses, topics, cheat sheets and key terms"
      className="quick-search-dialog"
      {...({ closedby: 'any' } as Record<string, string>)}
    >
      <div className="quick-search__header">
        <Search size={19} color="var(--color-blue-500)" style={{ flexShrink: 0 }} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search courses, topics, subtopics, cheat sheets, or key terms..."
          aria-label="Quick search"
          className="quick-search__input"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="notes-icon-action"
          >
            <X size={16} />
          </button>
        )}
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close quick search"
          className="kbd-cap"
          style={{ cursor: 'pointer' }}
        >
          Esc
        </button>
      </div>

      <div className="quick-search__results" role="listbox" aria-label="Search results">
        {results.length === 0 ? (
          <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: 4 }}>
              No matches for &ldquo;{query}&rdquo;
            </div>
            <div style={{ fontSize: '0.85rem' }}>
              Try searching for a subject (e.g. Biology, Psychology), a topic (mitosis, osmosis, quadratics), or a key term.
            </div>
          </div>
        ) : (
          groupedSections.map((section) => (
            <div key={section.kind}>
              <div className="quick-search__section-label">
                {!query.trim() && section.kind === 'course' ? 'Your Courses' : section.label}
              </div>

              {section.items.map((item, localIdx) => {
                const flatIndex = section.startIndex + localIdx;
                const isSelected = flatIndex === selectedIndex;

                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      rowRefs.current[flatIndex] = el;
                    }}
                    role="option"
                    aria-selected={isSelected}
                    className={`quick-search__row${isSelected ? ' is-selected' : ''}`}
                    onMouseEnter={() => setSelectedIndex(flatIndex)}
                  >
                    <button
                      type="button"
                      className="quick-search__main-btn"
                      onClick={() => navigateAndClose(item.to)}
                    >
                      {item.subjectIcon ? (
                        <SubjectIcon icon={item.subjectIcon} size={32} />
                      ) : (
                        <span className="quick-search__icon-badge" aria-hidden="true">
                          {item.kind === 'subtopic' ? (
                            <BookOpen size={15} color="var(--color-purple-500)" />
                          ) : item.kind === 'cheat-sheet' ? (
                            <FileSpreadsheet size={15} color="var(--color-blue-500)" />
                          ) : (
                            <KeyRound size={15} color="var(--color-green-600)" />
                          )}
                        </span>
                      )}

                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div className="quick-search__title">{item.title}</div>
                        <div className="quick-search__subtitle">{item.subtitle}</div>
                      </div>
                    </button>

                    {item.jumps && item.jumps.length > 0 ? (
                      <div className="quick-search__jumps">
                        {item.jumps.map((jump) => (
                          <button
                            key={jump.label}
                            type="button"
                            className="quick-search__jump-pill"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateAndClose(jump.to);
                            }}
                          >
                            {jump.label}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <ChevronRight size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                    )}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>

      <div className="quick-search__footer">
        <span>
          <kbd className="kbd-cap">↑</kbd> <kbd className="kbd-cap">↓</kbd> Navigate ·{' '}
          <kbd className="kbd-cap">↵</kbd> Open · <kbd className="kbd-cap">Esc</kbd> Close
        </span>
        <span>Tip: try &ldquo;mitosis&rdquo;, &ldquo;memory&rdquo;, &ldquo;bonding&rdquo;, or &ldquo;vectors&rdquo;</span>
      </div>
    </dialog>
  );
};
