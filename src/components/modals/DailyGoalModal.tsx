import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { useApp } from '../../store/AppContext';
import { CognitoDialog } from './CognitoDialog';

const GOAL_TIERS: { xp: 100 | 150 | 250 | 500; name: string; subtitle: string }[] = [
  { xp: 100, name: 'Chilled', subtitle: '100 XP - Approx 10 mins per day' },
  { xp: 150, name: 'Intermediate', subtitle: '150 XP - Approx 20 mins per day' },
  { xp: 250, name: 'Advanced', subtitle: '250 XP - Approx 40 mins per day' },
  { xp: 500, name: 'Intense', subtitle: '500 XP - Approx 60 mins per day' },
];

export const DailyGoalModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { profile, setDailyXpGoal } = useApp();
  const [selected, setSelected] = useState<100 | 150 | 250 | 500>(profile.dailyXpGoal);

  useEffect(() => {
    if (open) setSelected(profile.dailyXpGoal);
  }, [open, profile.dailyXpGoal]);

  const handleConfirm = () => {
    setDailyXpGoal(selected);
    onClose();
  };

  return (
    <CognitoDialog open={open} onClose={onClose} titleId="daily-goal-title">
      <h2 id="daily-goal-title" className="font-heading" style={{ fontSize: '1.8rem' }}>
        Daily XP goal
      </h2>
      <p style={{ margin: '6px 0 18px', color: 'var(--text-secondary)', fontSize: '0.96rem' }}>
        You'll be given XP for completing activities like lessons and quizzes.
      </p>

      <div
        role="radiogroup"
        aria-labelledby="daily-goal-title"
        style={{
          border: '1px solid var(--border-card)',
          borderRadius: 14,
          overflow: 'hidden',
          backgroundColor: 'var(--bg-card)',
        }}
      >
        {GOAL_TIERS.map((tier, idx) => {
          const active = selected === tier.xp;
          return (
            <button
              key={tier.xp}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(tier.xp)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px 18px',
                border: 0,
                borderTop: idx > 0 ? '1px solid var(--border-subtle)' : 'none',
                backgroundColor: active ? 'var(--color-blue-50)' : 'transparent',
                textAlign: 'left',
                color: active ? '#0b3c61' : 'var(--text-primary)',
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: active ? 'var(--color-blue-600)' : 'var(--text-heading)',
                  }}
                >
                  {tier.name}
                </div>
                <div style={{ fontSize: '0.88rem', color: active ? '#155a8a' : 'var(--text-muted)', marginTop: 2 }}>
                  {tier.subtitle}
                </div>
              </div>
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: active ? 'var(--color-blue-500)' : 'transparent',
                  border: active ? 'none' : '1.8px solid var(--color-grey-300)',
                  color: '#ffffff',
                }}
              >
                {active && <Check size={14} strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          type="button"
          onClick={onClose}
          style={{ border: 0, background: 'transparent', fontWeight: 700, color: 'var(--text-secondary)', padding: '8px 4px' }}
        >
          Cancel
        </button>
        <button type="button" className="tactile-btn" onClick={handleConfirm}>
          Confirm goal
        </button>
      </div>
    </CognitoDialog>
  );
};
