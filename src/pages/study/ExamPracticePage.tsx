import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
  Pencil,
  RotateCcw,
  ThumbsDown,
  ThumbsUp,
  X,
  XCircle,
} from 'lucide-react';
import { useLocation, useParams } from 'react-router-dom';
import { EducationalDiagram } from '../../components/artwork/Diagrams';
import { StudyTopBar } from '../../components/layout/StudyTopBar';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { ExamQuestionItem, ExamSubPart } from '../../types/curriculum';
import { gradeShortAnswer, GradeResult } from '../../utils/grader';
import { playSound } from '../../utils/soundEffects';

interface PartState {
  selectedOption?: number;
  textAnswer?: string;
  graded?: boolean;
  earnedMarks: number;
  gradeResult?: GradeResult;
}

export const ExamPracticePage: React.FC = () => {
  const { courseId, subtopicId } = useParams<{ courseId: string; subtopicId: string }>();
  const location = useLocation();
  const { profile, recordExamPartScore } = useApp();

  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const stateData = location.state as { customExams?: ExamQuestionItem[]; title?: string } | null;

  const questions = useMemo(() => {
    if (stateData?.customExams && stateData.customExams.length > 0) {
      return stateData.customExams;
    }
    if (!subtopicId || subtopicId === 'all') return course.examPractice;
    const matched = course.examPractice.filter((e) => e.subtopicId === subtopicId);
    return matched.length > 0 ? matched : course.examPractice;
  }, [course.examPractice, stateData, subtopicId]);

  const title =
    stateData?.title ??
    course.topics.flatMap((t) => t.subtopics).find((s) => s.id === subtopicId)?.title ??
    `${course.subjectName} Exam Practice`;

  const [activeQIndex, setActiveQIndex] = useState(0);
  const [navExpanded, setNavExpanded] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [partStates, setPartStates] = useState<Record<string, PartState>>({});
  const [markingId, setMarkingId] = useState<string | null>(null);
  const [qFeedback, setQFeedback] = useState<Record<string, 'up' | 'down' | 'flag' | null>>({});

  useEffect(() => {
    setActiveQIndex(0);
    setPartStates({});
    setMarkingId(null);
  }, [questions]);

  const currentQ = questions[activeQIndex] ?? questions[0];

  const totalMaxMarks = useMemo(
    () => questions.reduce((sum, q) => sum + q.parts.reduce((ps, p) => ps + p.marks, 0), 0),
    [questions]
  );

  const totalEarnedMarks = useMemo(
    () =>
      questions.reduce(
        (sum, q) => sum + q.parts.reduce((ps, p) => ps + (partStates[p.id]?.earnedMarks ?? 0), 0),
        0
      ),
    [partStates, questions]
  );

  const gradedPartsCount = useMemo(
    () =>
      questions.reduce(
        (sum, q) => sum + q.parts.filter((p) => Boolean(partStates[p.id]?.graded)).length,
        0
      ),
    [partStates, questions]
  );

  const totalPartsCount = useMemo(
    () => questions.reduce((sum, q) => sum + q.parts.length, 0),
    [questions]
  );

  const progressPct =
    totalPartsCount > 0 ? Math.round((gradedPartsCount / totalPartsCount) * 100) : 0;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 1600);
  };

  const toggleFeedback = (qId: string, kind: 'up' | 'down' | 'flag') => {
    setQFeedback((prev) => ({
      ...prev,
      [qId]: prev[qId] === kind ? null : kind,
    }));
  };

  const handleMarkPart = async (part: ExamSubPart) => {
    const st = partStates[part.id] ?? { earnedMarks: 0 };
    if (part.kind === 'mcq') {
      if (typeof st.selectedOption !== 'number') return;
      const correct = st.selectedOption === part.correctIndex;
      const earned = correct ? part.marks : 0;
      setPartStates((prev) => ({
        ...prev,
        [part.id]: { ...st, graded: true, earnedMarks: earned },
      }));
      recordExamPartScore(
        course.id,
        part.id,
        earned,
        part.marks,
        String(st.selectedOption),
        `${title} (${part.label})`,
        currentQ?.subtopicId
      );
      playSound(
        correct ? 'correct' : 'incorrect',
        profile.preferences.soundEnabled,
        profile.preferences.soundVolume
      );
      return;
    }

    if (!part.rubric) return;
    setMarkingId(part.id);
    const res = await gradeShortAnswer(
      st.textAnswer ?? '',
      part.rubric,
      part.prompt,
      profile.preferences.aiConfig
    );
    setMarkingId(null);
    setPartStates((prev) => ({
      ...prev,
      [part.id]: { ...st, graded: true, earnedMarks: res.earnedMarks, gradeResult: res },
    }));
    recordExamPartScore(
      course.id,
      part.id,
      res.earnedMarks,
      part.marks,
      st.textAnswer ?? '',
      `${title} (${part.label})`,
      currentQ?.subtopicId
    );
    playSound(
      res.earnedMarks === part.marks ? 'correct' : 'xp',
      profile.preferences.soundEnabled,
      profile.preferences.soundVolume
    );
  };

  if (!currentQ) {
    return (
      <div>
        <StudyTopBar
          course={course}
          currentSubtopicId={subtopicId}
          title={title}
          activityType="exam-practice"
          progressPercent={0}
          rightBadgeText="Total: 0 / 0"
        />
        <main className="page-container">
          <div
            className="cognito-card"
            style={{ padding: 28, textAlign: 'center', color: 'var(--text-muted)' }}
          >
            No structured exam practice questions for this subtopic yet. Switch subtopics from the
            top bar to practise exam questions!
          </div>
        </main>
      </div>
    );
  }

  const currentQMaxMarks = currentQ.parts.reduce((s, p) => s + p.marks, 0);
  const currentQEarnedMarks = currentQ.parts.reduce(
    (s, p) => s + (partStates[p.id]?.earnedMarks ?? 0),
    0
  );
  const activeFb = qFeedback[currentQ.id];

  return (
    <div>
      <StudyTopBar
        course={course}
        currentSubtopicId={subtopicId}
        title={title}
        activityType="exam-practice"
        progressPercent={progressPct}
        rightBadgeText={`Total: ${totalEarnedMarks} / ${totalMaxMarks}`}
      />

      <main className="page-container" style={{ maxWidth: 820 }}>
        {/* Question Navigator Card (1:1 step_56_shot_1) */}
        <section className="cognito-card sp-exam-nav-card">
          <div className="sp-exam-nav-header">
            <h1 className="font-heading" style={{ fontSize: '1.7rem' }}>
              {title}
            </h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <button
                type="button"
                className="sp-icon-btn sp-focusable"
                aria-label="Copy link to exam practice"
                title={copiedLink ? 'Link copied!' : 'Copy link'}
                onClick={handleCopyLink}
              >
                {copiedLink ? (
                  <Check size={16} color="var(--color-green-600)" />
                ) : (
                  <LinkIcon size={16} />
                )}
              </button>
              <button
                type="button"
                className="sp-icon-btn sp-focusable"
                style={{ border: '1px solid var(--border-card)' }}
                aria-expanded={navExpanded}
                aria-label={navExpanded ? 'Collapse question navigator' : 'Expand question navigator'}
                onClick={() => setNavExpanded((v) => !v)}
              >
                {navExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </div>

          {navExpanded && (
            <>
              <div className="sp-exam-q-grid" role="tablist" aria-label="Exam questions">
                {questions.map((q, qIdx) => {
                  const active = qIdx === activeQIndex;
                  const allPartsGraded =
                    q.parts.length > 0 && q.parts.every((p) => Boolean(partStates[p.id]?.graded));
                  return (
                    <button
                      key={q.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveQIndex(qIdx)}
                      className={`sp-exam-q-btn sp-focusable${active ? ' is-active' : ''}${
                        allPartsGraded ? ' is-done' : ''
                      }`}
                    >
                      {qIdx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="sp-exam-nav-footer">
                <button
                  type="button"
                  onClick={() => setPartStates({})}
                  className="sp-focusable"
                  style={{
                    border: 0,
                    background: 'transparent',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    padding: '4px 6px',
                    borderRadius: 8,
                  }}
                >
                  <RotateCcw size={15} /> Reset {questions.length}{' '}
                  {questions.length === 1 ? 'question' : 'questions'}
                </button>

                <div className="sp-topbar__total-wrap">
                  <span>Total marks:</span>
                  <span className="sp-topbar__total-box">
                    {totalEarnedMarks} / {totalMaxMarks}
                  </span>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Active Exam Question Card (1:1 step_56_shot_1 & step_172_shot_1) */}
        <article className="cognito-card" style={{ padding: '26px 26px 22px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              paddingBottom: 16,
              marginBottom: 18,
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span className="tilted-badge tilted-badge--navy">
                QUESTION {activeQIndex + 1}
              </span>
              <span className="sp-mark-badge">
                [{currentQMaxMarks} {currentQMaxMarks === 1 ? 'mark' : 'marks'} total]
              </span>
            </div>

            <div style={{ display: 'inline-flex', gap: 4 }}>
              <button
                type="button"
                aria-label="Helpful question"
                className={`sp-icon-btn${activeFb === 'up' ? ' is-active' : ''}`}
                onClick={() => toggleFeedback(currentQ.id, 'up')}
              >
                <ThumbsUp size={16} />
              </button>
              <button
                type="button"
                aria-label="Not helpful"
                className={`sp-icon-btn${activeFb === 'down' ? ' is-active' : ''}`}
                onClick={() => toggleFeedback(currentQ.id, 'down')}
              >
                <ThumbsDown size={16} />
              </button>
              <button
                type="button"
                aria-label="Report question"
                className={`sp-icon-btn${activeFb === 'flag' ? ' is-active' : ''}`}
                onClick={() => toggleFeedback(currentQ.id, 'flag')}
              >
                <AlertTriangle size={16} />
              </button>
            </div>
          </div>

          <p
            style={{
              fontSize: '1.03rem',
              lineHeight: 1.6,
              marginTop: 0,
              marginBottom: 20,
              color: 'var(--text-primary)',
            }}
          >
            {currentQ.stimulus}
          </p>

          {currentQ.diagram && (
            <div className="sp-exam-diagram-frame">
              <EducationalDiagram kind={currentQ.diagram} />
            </div>
          )}

          {/* Multi-part Sub-questions a), b), c) */}
          <div style={{ display: 'grid', gap: 22 }}>
            {currentQ.parts.map((part) => {
              const st = partStates[part.id] ?? { earnedMarks: 0 };
              const isFullMarks = Boolean(st.graded) && st.earnedMarks === part.marks;
              const isPartialMarks =
                Boolean(st.graded) && st.earnedMarks > 0 && st.earnedMarks < part.marks;
              const canMark =
                part.kind === 'mcq'
                  ? typeof st.selectedOption === 'number' && !st.graded
                  : (st.textAnswer ?? '').trim().length > 0;

              return (
                <div key={part.id} className="sp-exam-part">
                  <div className="sp-exam-part__head">
                    <div className="sp-exam-part__prompt">
                      <span className="sp-exam-part__label">{part.label}</span>
                      <span>{part.prompt}</span>
                    </div>
                    <span className="sp-mark-badge">
                      [{part.marks} {part.marks === 1 ? 'mark' : 'marks'}]
                    </span>
                  </div>

                  {part.kind === 'mcq' && part.options && (
                    <div className="sp-choice-list" role="radiogroup" aria-label={`Part ${part.label}`}>
                      {part.options.map((opt, oIdx) => {
                        const isSel = st.selectedOption === oIdx;
                        const isRight = part.correctIndex === oIdx;
                        let cls = '';
                        if (st.graded) {
                          if (isRight) cls = ' is-correct';
                          else if (isSel && !isRight) cls = ' is-incorrect';
                        } else if (isSel) {
                          cls = ' is-selected';
                        }

                        return (
                          <button
                            key={oIdx}
                            type="button"
                            role="radio"
                            aria-checked={isSel}
                            disabled={st.graded}
                            onClick={() =>
                              setPartStates((prev) => ({
                                ...prev,
                                [part.id]: { ...st, selectedOption: oIdx },
                              }))
                            }
                            className={`sp-choice-btn sp-focusable${cls}`}
                          >
                            <span className="sp-choice-btn__left">
                              <span className="sp-choice-key">{oIdx + 1}</span>
                              <span>{opt}</span>
                            </span>
                            {st.graded && isRight && <Check size={17} strokeWidth={2.8} />}
                            {st.graded && isSel && !isRight && <X size={17} strokeWidth={2.8} />}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {part.kind === 'short-answer' && (
                    <textarea
                      rows={3}
                      value={st.textAnswer ?? ''}
                      onChange={(e) =>
                        setPartStates((prev) => ({
                          ...prev,
                          [part.id]: { ...st, textAnswer: e.target.value },
                        }))
                      }
                      placeholder="Type your answer here..."
                      aria-label={`Answer for part ${part.label}`}
                      className="sp-textarea"
                    />
                  )}

                  {/* Part Mark Button + Score Box (1:1 step_172_shot_1) */}
                  <div className="sp-exam-part__actions">
                    <button
                      type="button"
                      className="sp-exam-mark-btn sp-focusable"
                      disabled={markingId === part.id || !canMark}
                      onClick={() => void handleMarkPart(part)}
                    >
                      <Pencil size={14} />
                      <span>
                        {markingId === part.id
                          ? 'Marking...'
                          : st.graded && part.kind === 'short-answer'
                            ? 'Re-mark'
                            : 'Mark'}
                      </span>
                    </button>

                    <span
                      className={`sp-score-box${
                        isFullMarks ? ' is-full' : isPartialMarks ? ' is-partial' : ''
                      }`}
                    >
                      {st.earnedMarks} / {part.marks}
                    </span>
                  </div>

                  {/* MCQ Graded Banner */}
                  {st.graded && part.kind === 'mcq' && part.options && (
                    <div
                      role="status"
                      className={`sp-feedback-banner ${
                        isFullMarks
                          ? 'sp-feedback-banner--correct'
                          : 'sp-feedback-banner--incorrect'
                      }`}
                    >
                      <div className="sp-feedback-banner__head">
                        <span className="sp-feedback-banner__title">
                          {isFullMarks ? (
                            <>
                              <CheckCircle2 size={17} /> Correct! ({st.earnedMarks} / {part.marks})
                            </>
                          ) : (
                            <>
                              <XCircle size={17} /> Incorrect — correct answer:{' '}
                              {typeof part.correctIndex === 'number'
                                ? part.options[part.correctIndex]
                                : ''}
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Short-Answer Mark Scheme Rubric Breakdown */}
                  {st.graded && st.gradeResult && (
                    <div className="sp-rubric-box">
                      <div style={{ fontWeight: 800, color: 'var(--text-heading)' }}>
                        {st.gradeResult.feedback}
                        {st.gradeResult.usedAi && ' (AI-assisted feedback)'}
                      </div>
                      {st.gradeResult.hitPoints.map((hp) => (
                        <div key={hp} className="sp-rubric-hit">
                          <Check size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>{hp}</span>
                        </div>
                      ))}
                      {st.gradeResult.missedPoints.map((mp) => (
                        <div key={mp} className="sp-rubric-miss">
                          <X size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>Missed: {mp}</span>
                        </div>
                      ))}
                      <div
                        style={{
                          paddingTop: 8,
                          borderTop: '1px solid var(--border-subtle)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        <strong>Mark scheme model answer:</strong> {st.gradeResult.modelAnswer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Question Stepper */}
          {questions.length > 1 && (
            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                className="tactile-btn tactile-btn--sm"
                disabled={activeQIndex === 0}
                onClick={() => setActiveQIndex((i) => Math.max(0, i - 1))}
              >
                <ArrowLeft size={15} /> Previous
              </button>

              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Question {activeQIndex + 1} of {questions.length} · {currentQEarnedMarks} /{' '}
                {currentQMaxMarks} marks
              </span>

              <button
                type="button"
                className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
                disabled={activeQIndex + 1 >= questions.length}
                onClick={() => setActiveQIndex((i) => Math.min(questions.length - 1, i + 1))}
              >
                Next question <ArrowRight size={15} />
              </button>
            </div>
          )}
        </article>
      </main>
    </div>
  );
};
