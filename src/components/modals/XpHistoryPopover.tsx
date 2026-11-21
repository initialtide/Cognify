import React, { useMemo, useState } from 'react';
import { ArrowRight, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatDateKey, useApp } from '../../store/AppContext';

type PeriodKey = 'week' | 'month' | 'year' | 'all';

interface XpHistoryPopoverProps {
  onClose: () => void;
  onEditGoal: () => void;
}

export const XpHistoryPopover: React.FC<XpHistoryPopoverProps> = ({
  onClose,
  onEditGoal,
}) => {
  const { profile, streakStats } = useApp();
  const [period, setPeriod] = useState<PeriodKey>('week');

  const chartData = useMemo(() => {
    const today = new Date();
    if (period === 'week') {
      const dayOfWeek = (today.getDay() + 6) % 7; // 0 = Mon
      const monday = new Date(today);
      monday.setDate(today.getDate() - dayOfWeek);
      const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      return labels.map((label, idx) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + idx);
        const key = formatDateKey(d);
        return { label, xp: streakStats.xpByDate[key] ?? 0, isToday: idx === dayOfWeek };
      });
    }
    if (period === 'month') {
      return ['W1', 'W2', 'W3', 'W4'].map((label, wIdx) => {
        let sum = 0;
        for (let i = 0; i < 7; i++) {
          const d = new Date(today);
          d.setDate(today.getDate() - ((3 - wIdx) * 7 + i));
          sum += streakStats.xpByDate[formatDateKey(d)] ?? 0;
        }
        return { label, xp: sum, isToday: wIdx === 3 };
      });
    }
    if (period === 'year') {
      const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
      const curMonth = today.getMonth();
      return months.map((label, mIdx) => {
        const sum = profile.activityLog
          .filter((ev) => new Date(ev.timestamp).getMonth() === mIdx)
          .reduce((a, b) => a + b.xpEarned, 0);
        return { label, xp: sum, isToday: mIdx === curMonth };
      });
    }
    return [
      { label: 'Notes', xp: profile.activityLog.filter((e) => e.type === 'notes').reduce((a, b) => a + b.xpEarned, 0), isToday: false },
      { label: 'Quiz', xp: profile.activityLog.filter((e) => e.type === 'quiz').reduce((a, b) => a + b.xpEarned, 0), isToday: true },
      { label: 'Cards', xp: profile.activityLog.filter((e) => e.type === 'flashcards').reduce((a, b) => a + b.xpEarned, 0), isToday: false },
      { label: 'Exam', xp: profile.activityLog.filter((e) => e.type === 'exam').reduce((a, b) => a + b.xpEarned, 0), isToday: false },
    ];
  }, [period, profile.activityLog, streakStats.xpByDate]);

  const totalInPeriod = chartData.reduce((acc, item) => acc + item.xp, 0);
  const maxVal = Math.max(profile.dailyXpGoal, ...chartData.map((d) => d.xp), 150);
  const goalY = 110 - (profile.dailyXpGoal / maxVal) * 90;

  return (
    <div
      className="popover-surface"
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        right: 0,
        width: 'min(92vw, 390px)',
        padding: 18,
      }}
    >
      {/* Period Tabs */}
      <div
        role="tablist"
        aria-label="XP history period"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 4,
          backgroundColor: 'var(--bg-sunken)',
          padding: 4,
          borderRadius: 10,
        }}
      >
        {(
          [
            ['week', 'Week'],
            ['month', 'Month'],
            ['year', 'Year'],
            ['all', 'All time'],
          ] as [PeriodKey, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={period === key}
            onClick={() => setPeriod(key)}
            style={{
              border: 0,
              borderRadius: 8,
              padding: '6px 8px',
              fontSize: '0.84rem',
              fontWeight: 700,
              backgroundColor: period === key ? 'var(--bg-card)' : 'transparent',
              color: period === key ? 'var(--text-heading)' : 'var(--text-muted)',
              boxShadow: period === key ? 'var(--shadow-sm)' : 'none',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span className="font-heading" style={{ fontSize: '1.65rem', fontWeight: 600, color: 'var(--text-heading)' }}>
          {totalInPeriod} XP
        </span>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {period === 'all' ? 'total earned' : `this ${period}`}
        </span>
      </div>

      {/* Bar Chart */}
      <div style={{ marginTop: 10 }}>
        <svg viewBox="0 0 340 138" style={{ width: '100%', height: 138, overflow: 'visible' }}>
          {/* Grid lines */}
          {[0, 0.33, 0.66, 1].map((frac, idx) => {
            const y = 110 - frac * 90;
            const tick = Math.round(frac * maxVal);
            return (
              <g key={idx}>
                <text x="0" y={y + 4} fontSize="10" fill="var(--text-muted)">
                  {tick}
                </text>
                <line x1="28" y1={y} x2="336" y2={y} stroke="var(--border-subtle)" strokeWidth="1" />
              </g>
            );
          })}

          {/* Daily Goal Dashed Line */}
          {period === 'week' && (
            <line
              x1="28"
              y1={goalY}
              x2="336"
              y2={goalY}
              stroke="var(--text-muted)"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
          )}

          {totalInPeriod === 0 && (
            <text x="182" y="66" textAnchor="middle" fontSize="12" fill="var(--text-muted)">
              No XP in this period yet
            </text>
          )}

          {chartData.map((d, idx) => {
            const step = 300 / chartData.length;
            const barW = Math.min(26, step * 0.56);
            const x = 34 + idx * step + (step - barW) / 2;
            const barH = d.xp > 0 ? Math.max(6, (d.xp / maxVal) * 90) : 3;
            const y = 110 - barH;
            return (
              <g key={d.label + idx}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  rx="4"
                  fill={d.xp > 0 ? 'var(--color-blue-500)' : 'var(--border-subtle)'}
                />
                <text
                  x={x + barW / 2}
                  y="129"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight={d.isToday ? '800' : '600'}
                  fill={d.isToday ? 'var(--color-blue-500)' : 'var(--text-muted)'}
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer Goal Edit & Activity Link */}
      <div
        style={{
          marginTop: 12,
          paddingTop: 12,
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          fontSize: '0.84rem',
        }}
      >
        <button
          type="button"
          onClick={() => {
            onClose();
            onEditGoal();
          }}
          style={{
            border: 0,
            background: 'transparent',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            color: 'var(--text-secondary)',
          }}
        >
          <span>Your goal is</span>
          <strong style={{ borderBottom: '1px dotted var(--text-muted)', color: 'var(--text-primary)' }}>
            {profile.dailyXpGoal} XP a day
          </strong>
          <Pencil size={13} />
        </button>

        <Link
          to="/account/activity"
          onClick={onClose}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            fontWeight: 700,
            color: 'var(--text-heading)',
          }}
        >
          See all your activity <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};
