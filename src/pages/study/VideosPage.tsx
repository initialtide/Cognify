import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, ListVideo, PlayCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CognitoDialog } from '../../components/modals/CognitoDialog';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { NoteLesson } from '../../types/curriculum';
import { CognitoVideoPlayer } from './NotesViewerPage';

export const VideosPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];
  const [selectedTopic, setSelectedTopic] = useState<number | 'all'>('all');
  const [activeLesson, setActiveLesson] = useState<NoteLesson | null>(null);

  const videoLessons = course.topics
    .filter((t) => selectedTopic === 'all' || t.number === selectedTopic)
    .flatMap((t) =>
      t.subtopics.map((sub) => ({
        topic: t,
        subtopic: sub,
        lesson: course.notes[sub.id],
      }))
    )
    .filter((item): item is { topic: typeof course.topics[0]; subtopic: typeof course.topics[0]['subtopics'][0]; lesson: NoteLesson } =>
      Boolean(item.lesson)
    );

  return (
    <main className="page-container">
      <Link
        to={`/course/${course.id}`}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 16 }}
      >
        <ArrowLeft size={16} /> Back to {course.qualificationLabel} {course.subjectName}
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <h1 className="font-heading" style={{ fontSize: '2.1rem' }}>
            {course.qualificationLabel} {course.subjectName} Video Lessons
          </h1>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>
            Specification-mapped Cognito &amp; revision walkthroughs with interactive chapter timestamps, notes &amp; quizzes.
          </p>
        </div>

        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          aria-label="Filter videos by topic"
          style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-card)', fontWeight: 700 }}
        >
          <option value="all">All topics ({course.topics.length})</option>
          {course.topics.map((t) => (
            <option key={t.number} value={t.number}>Topic {t.number} — {t.title}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 16 }}>
        {videoLessons.map(({ topic, subtopic, lesson }) => (
          <div key={subtopic.id} className="cognito-card" style={{ padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14 }}>
            <div>
              <button
                type="button"
                onClick={() => setActiveLesson(lesson)}
                aria-label={`Play ${lesson.videoTitle}`}
                className="cognito-video-thumb"
                style={{ border: 0, padding: 0, display: 'block' }}
              >
                <img
                  src={`https://i.ytimg.com/vi/${encodeURIComponent(lesson.youtubeId)}/hqdefault.jpg`}
                  alt={lesson.videoTitle}
                  loading="lazy"
                />
                <span className="cognito-video-thumb__play">
                  <PlayCircle size={44} strokeWidth={1.8} />
                </span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-blue-600)' }}>
                  Topic {topic.number} · {subtopic.code}
                </span>
                <span className="cognito-video-channel-pill">
                  {lesson.videoChannel ?? 'Cognito'}
                </span>
              </div>

              <h2 className="font-heading" style={{ fontSize: '1.22rem', marginBottom: 6 }}>
                {lesson.videoTitle}
              </h2>

              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span>{lesson.readingMinutes} min study</span>
                <span>·</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <ListVideo size={13} />
                  {lesson.timestamps.length} {lesson.timestamps.length === 1 ? 'chapter' : 'chapters'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <Link
                to={`/course/${course.id}/lesson/${subtopic.id}`}
                className="tactile-btn tactile-btn--sm tactile-btn--blue"
              >
                <PlayCircle size={15} /> Open lesson
              </Link>
              <Link
                to={`/course/${course.id}/notes/${subtopic.id}`}
                style={{ fontSize: '0.86rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--text-heading)' }}
              >
                <BookOpen size={14} /> Notes
              </Link>
            </div>
          </div>
        ))}
      </div>

      <CognitoDialog open={Boolean(activeLesson)} onClose={() => setActiveLesson(null)} titleId="video-modal-title" size="xl">
        {activeLesson && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 14, paddingRight: 36 }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-blue-600)', marginBottom: 2 }}>
                  {course.qualificationLabel} {course.subjectName} · {activeLesson.subtopicCode}
                </div>
                <h2 id="video-modal-title" className="font-heading" style={{ fontSize: '1.45rem' }}>
                  {activeLesson.subtopicTitle}
                </h2>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <Link
                  to={`/course/${course.id}/lesson/${activeLesson.subtopicId}`}
                  onClick={() => setActiveLesson(null)}
                  className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
                >
                  <PlayCircle size={15} /> Open lesson + questions
                </Link>
                <Link
                  to={`/course/${course.id}/notes/${activeLesson.subtopicId}`}
                  onClick={() => setActiveLesson(null)}
                  className="tactile-btn tactile-btn--sm tactile-btn--purple"
                >
                  <BookOpen size={15} /> Revision notes <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <CognitoVideoPlayer
              subtopicId={activeLesson.subtopicId}
              youtubeId={activeLesson.youtubeId}
              videoUrl={activeLesson.videoUrl}
              videoTitle={activeLesson.videoTitle}
              videoChannel={activeLesson.videoChannel}
              videoDuration={activeLesson.videoDuration}
              courseMatchSummary={activeLesson.courseMatchSummary}
              courseSubtitle={`${course.qualificationLabel} ${course.boardLabel} ${course.tier}`}
              timestamps={activeLesson.timestamps}
              defaultTimestampsOpen={true}
              showVideoHeader={true}
              autoLoad={true}
            />
          </div>
        )}
      </CognitoDialog>
    </main>
  );
};
