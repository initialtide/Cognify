import React, { useState } from 'react';
import { BookOpen, ChevronRight, Home, Search } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SubjectIcon } from '../components/artwork/SubjectIcons';
import {
  ALL_COURSES,
  EXAM_BOARDS,
  GCSE_SUBJECTS,
  getBoardsForQualification,
  getSubjectsForQualification,
  getTiersForQualification,
  QUALIFICATIONS,
  resolveCourseVariant,
} from '../data/catalog';
import { ExamBoardId, QualificationId } from '../types/curriculum';

export const CoursesCatalogPage: React.FC = () => {
  const { qual, subject, board } = useParams<{
    qual?: string;
    subject?: string;
    board?: string;
  }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const qualInfo = QUALIFICATIONS.find((q) => q.id === qual);
  const subjectsForQual = qualInfo ? getSubjectsForQualification(qualInfo.id) : GCSE_SUBJECTS;
  const subjectInfo =
    subjectsForQual.find((s) => s.slug === subject) ??
    GCSE_SUBJECTS.find((s) => s.slug === subject);
  const boardsForSelection =
    qualInfo && subjectInfo
      ? getBoardsForQualification(qualInfo.id, subjectInfo.slug)
      : EXAM_BOARDS;
  const boardInfo =
    boardsForSelection.find((b) => b.id === board) ??
    EXAM_BOARDS.find((b) => b.id === board);

  const openCourse = (q: QualificationId, s: string, b: ExamBoardId, tier?: string) => {
    const resolved = resolveCourseVariant(q, s, b, tier);
    const existing = ALL_COURSES.find((c) => c.id === resolved.id);
    navigate(`/course/${resolved.id}`, {
      state: existing ? undefined : { customCourse: resolved },
    });
  };

  return (
    <main className="page-container">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
        <Link to="/dashboard" aria-label="Dashboard" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Home size={16} />
        </Link>
        <ChevronRight size={14} />
        <Link to="/courses" style={{ color: !qual ? 'var(--text-heading)' : 'var(--text-link)' }}>
          Courses
        </Link>
        {qualInfo && (
          <>
            <ChevronRight size={14} />
            <Link to={`/courses/${qualInfo.id}`} style={{ color: !subject ? 'var(--text-heading)' : 'var(--text-link)' }}>
              {qualInfo.label}
            </Link>
          </>
        )}
        {subjectInfo && qualInfo && (
          <>
            <ChevronRight size={14} />
            <Link to={`/courses/${qualInfo.id}/${subjectInfo.slug}`} style={{ color: !board ? 'var(--text-heading)' : 'var(--text-link)' }}>
              {subjectInfo.name}
            </Link>
          </>
        )}
        {boardInfo && (
          <>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-heading)' }}>{boardInfo.label}</span>
          </>
        )}
      </nav>

      {/* Level 4: Tiers */}
      {qualInfo && subjectInfo && boardInfo ? (
        <section>
          <h1 className="font-heading" style={{ fontSize: '2.1rem', marginBottom: 6 }}>
            {qualInfo.label} {subjectInfo.name} — {boardInfo.label}
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: 0, marginBottom: 22 }}>
            Choose your tier or course pathway to open Notes, Videos, Quizzes, Flashcards, Cheat Sheets, Exam Practice &amp; Past Papers.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
            {getTiersForQualification(qualInfo.id, subjectInfo, boardInfo.id).map((tier) => (
              <button
                key={tier}
                type="button"
                className="cognito-card cognito-card--interactive"
                onClick={() => openCourse(qualInfo.id, subjectInfo.slug, boardInfo.id, tier)}
                style={{ padding: '20px 22px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.08rem', color: 'var(--text-heading)' }}>{tier}</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: 2 }}>
                    Full unlocked specification
                  </div>
                </div>
                <ChevronRight size={18} color="var(--text-heading)" />
              </button>
            ))}
          </div>
        </section>
      ) : qualInfo && subjectInfo ? (
        /* Level 3: Exam Boards */
        <section>
          <h1 className="font-heading" style={{ fontSize: '2.1rem', marginBottom: 6 }}>
            {qualInfo.label} {subjectInfo.name}
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: 0, marginBottom: 22 }}>
            Select your exam board
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 18 }}>
            {boardsForSelection.map((b) => (
              <Link
                key={b.id}
                to={`/courses/${qualInfo.id}/${subjectInfo.slug}/${b.id}`}
                className="cognito-card cognito-card--interactive"
                style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.02rem', color: 'var(--text-heading)' }}
              >
                <span>{b.label}</span>
                <ChevronRight size={18} />
              </Link>
            ))}
          </div>
        </section>
      ) : qualInfo ? (
        /* Level 2: Subjects */
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', marginBottom: 24 }}>
            <div>
              <h1 className="font-heading" style={{ fontSize: '2.35rem' }}>{qualInfo.label} Courses</h1>
              <p style={{ color: 'var(--text-muted)', margin: '6px 0 0', fontSize: '0.96rem' }}>{qualInfo.description}</p>
            </div>
            <div style={{ position: 'relative', width: 'min(100%, 290px)' }}>
              <Search size={16} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search subjects..."
                aria-label="Search subjects"
                style={{
                  width: '100%',
                  padding: '11px 14px 11px 38px',
                  borderRadius: 12,
                  border: '1px solid var(--border-card)',
                  backgroundColor: 'var(--bg-card)',
                  fontSize: '0.94rem',
                }}
              />
            </div>
          </div>

          {(['science-maths', 'other'] as const).map((cat) => {
            const list = subjectsForQual.filter(
              (s) =>
                s.category === cat &&
                s.name.toLowerCase().includes(search.trim().toLowerCase())
            );
            if (list.length === 0) return null;
            return (
              <div key={cat} style={{ marginTop: 34 }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 16 }}>
                  {cat === 'science-maths' ? 'Science and Maths' : 'Other (A to Z)'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(265px, 1fr))', gap: 16 }}>
                  {list.map((subj) => (
                    <Link
                      key={subj.slug}
                      to={`/courses/${qualInfo.id}/${subj.slug}`}
                      className="cognito-card cognito-card--interactive"
                      style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <SubjectIcon icon={subj.icon} size={42} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1.01rem', color: 'var(--text-heading)' }}>{subj.name}</div>
                          {subj.pastPapersOnly ? (
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>Past papers</div>
                          ) : (
                            <div className="catalog-feature-tag" style={{ marginTop: 2 }}>
                              <BookOpen size={11} /> Notes &amp; videos
                            </div>
                          )}
                        </div>
                      </div>
                      <ChevronRight size={17} color="var(--text-muted)" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        /* Level 1: Qualifications */
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', paddingBottom: 26, borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <h1 className="font-heading" style={{ fontSize: '2.6rem' }}>Our courses</h1>
              <p style={{ color: 'var(--text-secondary)', margin: '8px 0 0', fontSize: '0.98rem' }}>
                Browse Cognify courses for KS3, GCSE, IGCSE, A-Level, IB, and more — all completely free.
              </p>
            </div>
          </div>

          <h2 className="font-heading" style={{ fontSize: '1.75rem', margin: '32px 0 6px' }}>Qualifications</h2>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 22px', fontSize: '0.94rem' }}>Select course</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: 18 }}>
            {QUALIFICATIONS.map((q) => (
              <Link
                key={q.id}
                to={`/courses/${q.id}`}
                className="cognito-card cognito-card--interactive"
                style={{ padding: '24px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.12rem', color: 'var(--text-heading)' }}>{q.label}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: 4 }}>{q.description}</div>
                </div>
                <ChevronRight size={18} color="var(--text-heading)" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
