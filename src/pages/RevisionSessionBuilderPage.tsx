import React, { useMemo, useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ClipboardCheck,
  Layers,
  Lightbulb,
  X,
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ALL_COURSES, getCourseById } from '../data/catalog';
import { buildRevisionSessionQuestions, SessionMixStrategy, useApp } from '../store/AppContext';

type ActivityKind = 'quiz' | 'flashcards' | 'exam';

export const RevisionSessionBuilderPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { profile } = useApp();

  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const progress = profile.progressByCourse[course.id];

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [activity, setActivity] = useState<ActivityKind>('quiz');
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>(() =>
    course.topics.flatMap((t) => t.subtopics.map((s) => s.id))
  );
  const [strategy, setStrategy] = useState<SessionMixStrategy>('balanced');
  const [showAdvanced, setShowAdvanced] = useState(true);

  const availablePool = useMemo(() => {
    if (activity === 'quiz') {
      return course.quizzes.filter((q) => selectedSubtopics.includes(q.subtopicId));
    }
    if (activity === 'flashcards') {
      return course.flashcards.filter((f) => selectedSubtopics.includes(f.subtopicId));
    }
    return course.examPractice.filter((e) => selectedSubtopics.includes(e.subtopicId));
  }, [activity, course, selectedSubtopics]);

  const [requestedCount, setRequestedCount] = useState<number>(Math.max(1, availablePool.length));

  const bucketCounts = useMemo(() => {
    const attempts = progress?.questionAttempts ?? {};
    let newCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    for (const item of availablePool) {
      const a = attempts[item.id];
      if (!a || !a.answered) newCount++;
      else if (a.correct) correctCount++;
      else incorrectCount++;
    }
    return { newCount, correctCount, incorrectCount };
  }, [availablePool, progress]);

  const effectiveTotal = Math.min(Math.max(1, requestedCount), Math.max(1, availablePool.length));

  const toggleSubtopic = (id: string) => {
    setSelectedSubtopics((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleTopic = (subIds: string[]) => {
    const allIn = subIds.every((id) => selectedSubtopics.includes(id));
    if (allIn) {
      setSelectedSubtopics((prev) => prev.filter((id) => !subIds.includes(id)));
    } else {
      setSelectedSubtopics((prev) => Array.from(new Set([...prev, ...subIds])));
    }
  };

  const allSubtopicIds = course.topics.flatMap((t) => t.subtopics.map((s) => s.id));
  const allSelected = allSubtopicIds.every((id) => selectedSubtopics.includes(id));

  const handleStart = () => {
    if (activity === 'quiz') {
      const chosen = buildRevisionSessionQuestions({
        course,
        subtopicIds: selectedSubtopics,
        progress,
        strategy,
        requestedTotal: effectiveTotal,
      });
      navigate(`/course/${course.id}/quiz/custom`, {
        state: { customQuestions: chosen, title: `Custom ${course.subjectName} Quiz (${chosen.length} questions)` },
      });
      return;
    }
    if (activity === 'flashcards') {
      const cards = course.flashcards
        .filter((f) => selectedSubtopics.includes(f.subtopicId))
        .slice(0, effectiveTotal);
      navigate(`/course/${course.id}/flashcards/custom`, {
        state: { customCards: cards, title: `Custom ${course.subjectName} Deck (${cards.length} cards)` },
      });
      return;
    }
    const exams = course.examPractice
      .filter((e) => selectedSubtopics.includes(e.subtopicId))
      .slice(0, effectiveTotal);
    navigate(`/course/${course.id}/exam-practice/custom`, {
      state: { customExams: exams, title: `Custom ${course.subjectName} Exam Practice` },
    });
  };

  return (
    <main className="page-container" style={{ paddingBottom: 110 }}>
      {/* Sub-header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          paddingBottom: 18,
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: 28,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            type="button"
            onClick={() => (step > 1 ? setStep((s) => (s - 1) as 1 | 2 | 3) : navigate(`/course/${course.id}`))}
            aria-label="Close or go back"
            style={{ border: 0, background: 'transparent', padding: 4, display: 'inline-flex' }}
          >
            <X size={22} />
          </button>
          <h1 className="font-heading" style={{ fontSize: '1.7rem' }}>
            Create a revision session
          </h1>
        </div>
        <span className="tilted-badge tilted-badge--navy">STEP {step} OF 3</span>
      </div>

      {/* STEP 1: Choose Activity */}
      {step === 1 && (
        <section style={{ maxWidth: 660, margin: '20px auto 0' }}>
          <div className="cognito-card" style={{ paddingTop: 14 }}>
            <span className="tilted-badge tilted-badge--edge tilted-badge--paper">
              SELECT AN ACTIVITY
            </span>
            {[
              {
                id: 'quiz' as ActivityKind,
                label: 'Quiz',
                desc: 'Test your knowledge by creating a quiz of questions.',
                icon: <Lightbulb size={20} color="#1a96f3" />,
                bg: '#ecf7ff',
              },
              {
                id: 'flashcards' as ActivityKind,
                label: 'Flashcards',
                desc: 'Review important concepts by creating a flashcard deck.',
                icon: <Layers size={20} color="#42ac88" />,
                bg: '#eefbf6',
              },
              {
                id: 'exam' as ActivityKind,
                label: 'Exam',
                desc: 'Practise answering exam-style questions.',
                icon: <ClipboardCheck size={20} color="#ca8d1b" />,
                bg: '#fff7e9',
              },
            ].map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActivity(item.id);
                  setRequestedCount(999);
                  setStep(2);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 22px',
                  border: 0,
                  borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                  background: 'transparent',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 42, height: 42, borderRadius: '999px', backgroundColor: item.bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-heading)' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
                <ChevronRight size={19} color="var(--text-muted)" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* STEP 2: Select Subtopics */}
      {step === 2 && (
        <section style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h2 className="font-heading" style={{ fontSize: '1.5rem' }}>Select subtopics</h2>
            <button
              type="button"
              className="tactile-btn tactile-btn--sm"
              onClick={() => setSelectedSubtopics(allSelected ? [] : allSubtopicIds)}
            >
              {allSelected ? 'Deselect all' : 'Select all'}
            </button>
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            {course.topics.map((topic) => {
              const subIds = topic.subtopics.map((s) => s.id);
              const allTopicSelected = subIds.length > 0 && subIds.every((id) => selectedSubtopics.includes(id));

              return (
                <div key={topic.number} className="cognito-card" style={{ padding: '14px 18px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, color: 'var(--text-heading)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={allTopicSelected}
                      onChange={() => toggleTopic(subIds)}
                      style={{ width: 18, height: 18 }}
                    />
                    <span>Topic {topic.number} - {topic.title}</span>
                  </label>
                  <div style={{ marginTop: 10, paddingLeft: 28, display: 'grid', gap: 8 }}>
                    {topic.subtopics.map((sub) => {
                      const countForSub =
                        activity === 'quiz'
                          ? course.quizzes.filter((q) => q.subtopicId === sub.id).length
                          : activity === 'flashcards'
                            ? course.flashcards.filter((f) => f.subtopicId === sub.id).length
                            : course.examPractice.filter((e) => e.subtopicId === sub.id).length;
                      return (
                        <label
                          key={sub.id}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, cursor: 'pointer', fontSize: '0.94rem' }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <input
                              type="checkbox"
                              checked={selectedSubtopics.includes(sub.id)}
                              onChange={() => toggleSubtopic(sub.id)}
                              style={{ width: 16, height: 16 }}
                            />
                            <span>{sub.code} {sub.title}</span>
                          </span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                            {countForSub} available
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* STEP 3: Customise Session (100% Paywall-Free — NO 15-Question Cap!) */}
      {step === 3 && (
        <section style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="cognito-card" style={{ padding: '24px 26px' }}>
            <h2 className="font-heading" style={{ fontSize: '1.65rem', marginBottom: 6 }}>
              Customise your {activity}
            </h2>
            <p style={{ margin: '0 0 18px', fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
              Total pool selected: <strong>{availablePool.length}</strong> items across{' '}
              <strong>{selectedSubtopics.length}</strong> subtopics — unlimited session length!
            </p>

            {/* Quantity selector without 15-question limit */}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, marginBottom: 8 }}>
                <span>Number of {activity === 'flashcards' ? 'cards' : 'questions'}</span>
                <span style={{ color: 'var(--color-blue-600)' }}>
                  {effectiveTotal} / {availablePool.length}
                </span>
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <input
                  type="range"
                  min={1}
                  max={Math.max(1, availablePool.length)}
                  value={effectiveTotal}
                  onChange={(e) => setRequestedCount(Number(e.target.value))}
                  aria-label="Session length slider"
                  style={{ flex: 1 }}
                />
                <input
                  type="number"
                  min={1}
                  max={Math.max(1, availablePool.length)}
                  value={effectiveTotal}
                  onChange={(e) => setRequestedCount(Math.max(1, Number(e.target.value)))}
                  aria-label="Session length count"
                  style={{
                    width: 72,
                    padding: '6px 10px',
                    borderRadius: 10,
                    border: '1px solid var(--border-card)',
                    backgroundColor: 'var(--bg-elevated)',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                />
              </div>
            </div>

            {/* Strategy Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 20 }}>
              {(
                [
                  ['learn', 'LEARN', 'Mostly new questions, covering material you haven’t seen yet'],
                  ['balanced', 'BALANCED', 'An optimised mix for you with a balanced blend of question types'],
                  ['fix-mistakes', 'FIX MISTAKES', 'Focus on what you got wrong by prioritising past mistakes'],
                ] as [SessionMixStrategy, string, string][]
              ).map(([id, badge, desc]) => {
                const active = strategy === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setStrategy(id)}
                    style={{
                      padding: 14,
                      borderRadius: 14,
                      border: active ? '2px solid var(--color-blue-500)' : '1px solid var(--border-card)',
                      backgroundColor: active ? 'var(--color-blue-50)' : 'var(--bg-elevated)',
                      textAlign: 'left',
                      color: active ? '#0b3c61' : 'var(--text-primary)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="tilted-badge tilted-badge--paper">{badge}</span>
                      {active && <Check size={16} color="#1a96f3" />}
                    </div>
                    <div style={{ fontSize: '0.84rem', lineHeight: 1.4, opacity: 0.9 }}>{desc}</div>
                  </button>
                );
              })}
            </div>

            {/* Advanced Options */}
            <button
              type="button"
              onClick={() => setShowAdvanced((s) => !s)}
              style={{
                border: 0,
                background: 'transparent',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontWeight: 700,
                color: 'var(--text-heading)',
              }}
            >
              <span>Advanced options</span>
              {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showAdvanced && (
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>New</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {bucketCounts.newCount} available
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>Previously correct</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {bucketCounts.correctCount} available
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>Previously incorrect</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {bucketCounts.incorrectCount} available
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Sticky Bottom Action Bar */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 30,
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-card)',
          padding: '12px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 12px', borderRadius: 999, backgroundColor: 'var(--color-blue-50)', color: '#1578c3', fontWeight: 800, fontSize: '0.84rem', textTransform: 'capitalize' }}>
              {activity}
            </span>
            <span style={{ padding: '4px 12px', borderRadius: 999, border: '1px solid var(--border-card)', fontWeight: 700, fontSize: '0.84rem' }}>
              {selectedSubtopics.length} Subtopics
            </span>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              {availablePool.length} {activity === 'flashcards' ? 'cards' : 'questions'} available (No limit)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as 1 | 2 | 3)}
                style={{ border: 0, background: 'transparent', fontWeight: 700, padding: '8px 12px', color: 'var(--text-secondary)' }}
              >
                Back
              </button>
            )}
            {step === 2 && (
              <button
                type="button"
                className="tactile-btn tactile-btn--solid-blue"
                disabled={availablePool.length === 0}
                onClick={() => {
                  setRequestedCount(availablePool.length);
                  setStep(3);
                }}
              >
                Continue
              </button>
            )}
            {step === 3 && (
              <button
                type="button"
                className="tactile-btn tactile-btn--solid-blue"
                disabled={availablePool.length === 0}
                onClick={handleStart}
              >
                Start
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
