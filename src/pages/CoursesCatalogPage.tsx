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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {boardsForSelection.map((b) => (
              <Link
                key={b.id}
                to={`/courses/${qualInfo.id}/${subjectInfo.slug}/${b.id}`}
                className="cognito-card cognito-card--interactive"
                style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-heading)' }}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', marginBottom: 18 }}>
            <div>
              <h1 className="font-heading" style={{ fontSize: '2.1rem' }}>{qualInfo.label} Courses</h1>
              <p style={{ color: 'var(--text-muted)', margin: '4px 0 0' }}>{qualInfo.description}</p>
            </div>
            <div style={{ position: 'relative', width: 'min(100%, 280px)' }}>
              <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search subjects..."
                aria-label="Search subjects"
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  borderRadius: 10,
                  border: '1px solid var(--border-card)',
                  backgroundColor: 'var(--bg-card)',
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
              <div key={cat} style={{ marginTop: 26 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 12 }}>
                  {cat === 'science-maths' ? 'Science and Maths' : 'Other (A to Z)'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 12 }}>
                  {list.map((subj) => (
                    <Link
                      key={subj.slug}
                      to={`/courses/${qualInfo.id}/${subj.slug}`}
                      className="cognito-card cognito-card--interactive"
                      style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <SubjectIcon icon={subj.icon} size={38} />
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{subj.name}</div>
                          {subj.pastPapersOnly ? (
                            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Past papers</div>
                          ) : (
                            <div className="catalog-feature-tag">
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', paddingBottom: 22, borderBottom: '1px solid var(--border-subtle)' }}>
            <div>
              <h1 className="font-heading" style={{ fontSize: '2.4rem' }}>Our courses</h1>
              <p style={{ color: 'var(--text-secondary)', margin: '6px 0 0' }}>
                Browse Cognito courses for KS3, GCSE, IGCSE, A-Level, IB, and more — all completely unlocked.
              </p>
            </div>
          </div>

          <h2 className="font-heading" style={{ fontSize: '1.65rem', margin: '24px 0 6px' }}>Qualifications</h2>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 18px', fontSize: '0.92rem' }}>Select course</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
            {QUALIFICATIONS.map((q) => (
              <Link
                key={q.id}
                to={`/courses/${q.id}`}
                className="cognito-card cognito-card--interactive"
                style={{ padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', color: 'var(--text-heading)' }}>{q.label}</div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: 2 }}>{q.description}</div>
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
