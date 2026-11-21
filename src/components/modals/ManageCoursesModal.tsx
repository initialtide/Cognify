import React, { useState } from 'react';
import { ArrowLeft, Check, ChevronRight, Plus } from 'lucide-react';
import { ALL_COURSES, QUALIFICATIONS } from '../../data/catalog';
import { useApp } from '../../store/AppContext';
import { QualificationId } from '../../types/curriculum';
import { SubjectIcon } from '../artwork/SubjectIcons';
import { CognitoDialog } from './CognitoDialog';

export const ManageCoursesModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { profile, toggleEnrollCourse } = useApp();
  const [drillQual, setDrillQual] = useState<QualificationId | null>(null);

  const enrolledByQual = QUALIFICATIONS.map((q) => {
    const courses = ALL_COURSES.filter(
      (c) => c.qualification === q.id && profile.enrolledCourseIds.includes(c.id)
    );
    return { ...q, courses };
  });

  const activeGroups = enrolledByQual.filter((g) => g.courses.length > 0);
  const unaddedGroups = enrolledByQual.filter((g) => g.courses.length === 0);

  const drillInfo = drillQual ? QUALIFICATIONS.find((q) => q.id === drillQual) : null;
  const drillCourses = drillQual
    ? ALL_COURSES.filter((c) => c.qualification === drillQual)
    : [];

  return (
    <CognitoDialog
      open={open}
      onClose={() => {
        setDrillQual(null);
        onClose();
      }}
      titleId="manage-courses-title"
    >
      {drillQual && drillInfo ? (
        <div>
          <button
            type="button"
            onClick={() => setDrillQual(null)}
            style={{
              border: 0,
              background: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontWeight: 700,
              color: 'var(--text-secondary)',
              padding: 0,
              marginBottom: 12,
            }}
          >
            <ArrowLeft size={16} /> Back to qualifications
          </button>
          <h2 id="manage-courses-title" className="font-heading" style={{ fontSize: '1.7rem', marginBottom: 14 }}>
            {drillInfo.label} courses
          </h2>
          <div className="cognito-card" style={{ overflow: 'hidden' }}>
            {drillCourses.map((course, idx) => {
              const enrolled = profile.enrolledCourseIds.includes(course.id);
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => toggleEnrollCourse(course.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    padding: '13px 16px',
                    border: 0,
                    borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                    backgroundColor: enrolled ? 'var(--color-blue-50)' : 'transparent',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <SubjectIcon icon={course.icon} size={36} />
                    <div>
                      <div style={{ fontWeight: 700, color: enrolled ? '#0b3c61' : 'var(--text-heading)' }}>
                        {course.subjectName}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: enrolled ? '#155a8a' : 'var(--text-muted)' }}>
                        {course.boardLabel} · {course.tier}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: enrolled ? 'var(--color-blue-500)' : 'var(--bg-sunken)',
                      color: enrolled ? '#ffffff' : 'var(--text-secondary)',
                    }}
                  >
                    {enrolled ? <Check size={15} /> : <Plus size={15} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h2 id="manage-courses-title" className="font-heading" style={{ fontSize: '1.8rem', marginBottom: 24 }}>
            Manage courses
          </h2>

          {/* YOUR COURSES */}
          <div className="cognito-card" style={{ paddingTop: 10 }}>
            <span className="tilted-badge tilted-badge--edge tilted-badge--navy">
              YOUR COURSES ({profile.enrolledCourseIds.length})
            </span>
            {activeGroups.length === 0 ? (
              <div style={{ padding: '22px 18px', color: 'var(--text-muted)' }}>
                No courses added yet. Pick a qualification below to add courses.
              </div>
            ) : (
              activeGroups.map((group, idx) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setDrillQual(group.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 18px',
                    border: 0,
                    borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                    background: 'transparent',
                    textAlign: 'left',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-heading)' }}>
                      {group.label}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {group.courses.length} {group.courses.length === 1 ? 'course' : 'courses'} added
                    </div>
                  </div>
                  <ChevronRight size={18} color="var(--text-heading)" />
                </button>
              ))
            )}
          </div>

          <hr className="dashed-divider" style={{ margin: '26px 0' }} />

          {/* ADD SOMETHING NEW */}
          <div className="cognito-card" style={{ paddingTop: 10 }}>
            <span className="tilted-badge tilted-badge--edge tilted-badge--navy">
              ADD SOMETHING NEW
            </span>
            {unaddedGroups.map((group, idx) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setDrillQual(group.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px 18px',
                  border: 0,
                  borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                  background: 'transparent',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{group.label}</span>
                <Plus size={18} color="var(--text-heading)" />
              </button>
            ))}
          </div>
        </div>
      )}
    </CognitoDialog>
  );
};
