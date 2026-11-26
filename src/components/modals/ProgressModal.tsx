import React from 'react';
import { computeLessonSubtopicProgress, getCourseStats, useApp } from '../../store/AppContext';
import { CourseDefinition } from '../../types/curriculum';
import { CognitoDialog } from './CognitoDialog';

export const ProgressModal: React.FC<{
  open: boolean;
  onClose: () => void;
  course: CourseDefinition;
  mode?: 'lessons' | 'notes';
}> = ({ open, onClose, course, mode = 'notes' }) => {
  const { profile } = useApp();
  const progress = profile.progressByCourse[course.id];
  const stats = getCourseStats(course, progress);
  const allSubtopics = course.topics.flatMap((t) => t.subtopics);

  const isLessons = mode === 'lessons';
  const completedLessons = allSubtopics.filter(
    (s) => computeLessonSubtopicProgress(course, s.id, progress).completed
  ).length;
  const avgLessonPct =
    allSubtopics.length > 0
      ? Math.round(
          allSubtopics.reduce(
            (sum, s) => sum + computeLessonSubtopicProgress(course, s.id, progress).percent,
            0
          ) / allSubtopics.length
        )
      : 0;

  const pct = isLessons
    ? avgLessonPct
    : Math.round((stats.notesRead / stats.notesTotal) * 100);

  return (
    <CognitoDialog open={open} onClose={onClose} titleId="your-progress-title" size="wide">
      <h2 id="your-progress-title" className="font-heading" style={{ fontSize: '1.8rem' }}>
        Your {isLessons ? 'lessons' : 'notes'} progress
      </h2>
      <p style={{ margin: '4px 0 18px', color: 'var(--text-muted)' }}>
        {course.qualificationLabel} {course.subjectName} · {course.boardLabel} ({course.tier})
      </p>

      <div className="cognito-card" style={{ padding: 18, marginBottom: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem', fontWeight: 700 }}>
          <span>
            {isLessons
              ? `${completedLessons} Completed (${pct}%)`
              : `${stats.notesRead} Read (${pct}%)`}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>
            {isLessons
              ? `${stats.lessonsWatched} video${stats.lessonsWatched === 1 ? '' : 's'} watched`
              : `${stats.notesTotal - stats.notesRead} Not read yet`}
          </span>
        </div>
        <div style={{ height: 12, borderRadius: 999, backgroundColor: 'var(--bg-sunken)', overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', backgroundColor: 'var(--color-green-500)', transition: 'width 200ms ease' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gap: 10 }}>
        {course.topics.map((topic) => {
          const doneCount = isLessons
            ? topic.subtopics.filter(
                (s) => computeLessonSubtopicProgress(course, s.id, progress).completed
              ).length
            : topic.subtopics.filter((s) => progress?.readNoteIds.includes(s.id)).length;
          const topicPct = isLessons
            ? topic.subtopics.length > 0
              ? Math.round(
                  topic.subtopics.reduce(
                    (sum, s) =>
                      sum + computeLessonSubtopicProgress(course, s.id, progress).percent,
                    0
                  ) / topic.subtopics.length
                )
              : 0
            : topic.subtopics.length > 0
              ? Math.round((doneCount / topic.subtopics.length) * 100)
              : 0;
          return (
            <div key={topic.number} className="cognito-card" style={{ padding: '12px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.92rem' }}>
                <strong style={{ color: 'var(--text-heading)' }}>
                  Topic {topic.number} - {topic.title}
                </strong>
                <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>
                  {doneCount}/{topic.subtopics.length}
                </span>
              </div>
              <div style={{ height: 8, borderRadius: 999, backgroundColor: 'var(--bg-sunken)', overflow: 'hidden' }}>
                <div style={{ width: `${topicPct}%`, height: '100%', backgroundColor: 'var(--color-blue-500)' }} />
              </div>
            </div>
          );
        })}
      </div>
    </CognitoDialog>
  );
};
