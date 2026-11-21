import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { formatDateKey, useApp } from '../../store/AppContext';
import { FlameMascot, FreezeCubeIcon } from '../artwork/Avatars';
import { StreakFlameTickIcon } from '../artwork/CognitoIcons';
import { CognitoDialog } from './CognitoDialog';

export function getWeekDays(weekOffset: number): {
  label: string;
  dateKey: string;
  isToday: boolean;
}[] {
  const today = new Date();
  const todayKey = formatDateKey(today);
  const dayIdx = (today.getDay() + 6) % 7; // Mon=0..Sun=6
  const monday = new Date(today);
  monday.setDate(today.getDate() - dayIdx + weekOffset * 7);

  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return labels.map((label, idx) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + idx);
    const dk = formatDateKey(d);
    return { label, dateKey: dk, isToday: dk === todayKey };
  });
}

export function formatWeekRangeLabel(weekOffset: number): string {
  const days = getWeekDays(weekOffset);
  const start = new Date(`${days[0].dateKey}T12:00:00`);
  const end = new Date(`${days[6].dateKey}T12:00:00`);
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  return `${fmt(start)} - ${fmt(end)}`;
}

export const StreakModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { profile, streakStats } = useApp();
  const [weekOffset, setWeekOffset] = useState(0);
  const days = getWeekDays(weekOffset);

  return (
    <CognitoDialog open={open} onClose={onClose} titleId="streak-modal-title">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <FlameMascot active={streakStats.currentStreak > 0} size={46} />
        <div>
          <h2 id="streak-modal-title" className="font-heading" style={{ fontSize: '1.75rem' }}>
            Your streak
          </h2>
          <div style={{ color: '#ca8d1b', fontWeight: 700, fontSize: '0.92rem' }}>
            Longest streak: {streakStats.longestStreak} {streakStats.longestStreak === 1 ? 'day' : 'days'}
          </div>
        </div>
      </div>

      {/* Week calendar card */}
      <div
        className="cognito-card"
        style={{ marginTop: 18, padding: '16px 18px', backgroundColor: 'var(--bg-elevated)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              backgroundColor: 'var(--bg-sunken)',
              padding: '4px 10px',
              borderRadius: 999,
              fontSize: '0.84rem',
              fontWeight: 700,
            }}
          >
            <button
              type="button"
              aria-label="Previous week"
              onClick={() => setWeekOffset((w) => w - 1)}
              style={{ border: 0, background: 'transparent', padding: 2, display: 'inline-flex' }}
            >
              <ChevronLeft size={15} />
            </button>
            <span>{formatWeekRangeLabel(weekOffset)}</span>
            <button
              type="button"
              aria-label="Next week"
              onClick={() => setWeekOffset((w) => Math.min(0, w + 1))}
              disabled={weekOffset >= 0}
              style={{ border: 0, background: 'transparent', padding: 2, display: 'inline-flex', opacity: weekOffset >= 0 ? 0.35 : 1 }}
            >
              <ChevronRight size={15} />
            </button>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              backgroundColor: 'var(--color-blue-50)',
              padding: '4px 10px',
              borderRadius: 999,
            }}
            title={`${profile.streakFreezes} freezes available`}
          >
            {Array.from({ length: profile.streakFreezes }).map((_, i) => (
              <FreezeCubeIcon key={i} size={18} />
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, textAlign: 'center' }}>
          {days.map((d) => {
            const done = streakStats.activeDates.has(d.dateKey);
            return (
              <div
                key={d.dateKey}
                style={{
                  width: 36,
                  height: 36,
                  margin: '0 auto',
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  backgroundColor: done ? 'transparent' : 'var(--bg-sunken)',
                  color: d.isToday ? '#e07a16' : 'var(--text-muted)',
                  border: !done && d.isToday ? '2px solid #f59e0b' : '1px solid transparent',
                }}
              >
                {done ? <StreakFlameTickIcon size={34} /> : d.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* Rules list */}
      <div style={{ marginTop: 20, display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: '#fff7e9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FlameMascot active size={26} />
          </div>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-heading)' }}>Practise every day</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Complete any learning activity each day to keep your streak going.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: '#ecf7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <FreezeCubeIcon size={24} />
          </div>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-heading)' }}>Streak freezes</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              If you miss a day, a freeze is applied automatically, so your streak survives.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: '#ecf7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              <FreezeCubeIcon size={15} />
              <FreezeCubeIcon size={15} />
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-heading)' }}>Earn freezes</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Do activities to earn freezes, and hold up to two at a time.
            </div>
          </div>
        </div>
      </div>
    </CognitoDialog>
  );
};
