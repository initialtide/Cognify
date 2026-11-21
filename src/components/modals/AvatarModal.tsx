import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { useApp } from '../../store/AppContext';
import { AVATAR_OPTIONS, AvatarId, MonsterAvatar } from '../artwork/Avatars';
import { CognitoDialog } from './CognitoDialog';

export const AvatarModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { profile, setAvatar } = useApp();
  const [selected, setSelected] = useState<AvatarId>(profile.avatarId);

  useEffect(() => {
    if (open) setSelected(profile.avatarId);
  }, [open, profile.avatarId]);

  const handleConfirm = () => {
    setAvatar(selected);
    onClose();
  };

  return (
    <CognitoDialog open={open} onClose={onClose} titleId="avatar-modal-title" size="wide">
      <h2 id="avatar-modal-title" className="font-heading" style={{ fontSize: '1.8rem', marginBottom: 18 }}>
        Select your avatar
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(118px, 1fr))',
          gap: 12,
        }}
      >
        {AVATAR_OPTIONS.map((opt) => {
          const active = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelected(opt.id)}
              aria-label={opt.label}
              aria-pressed={active}
              style={{
                position: 'relative',
                padding: '14px 10px',
                borderRadius: 14,
                border: active ? '2.5px solid var(--color-blue-500)' : '1px solid var(--border-card)',
                backgroundColor: 'var(--bg-elevated)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {active && (
                <span
                  style={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    width: 22,
                    height: 22,
                    borderRadius: '999px',
                    backgroundColor: 'var(--color-blue-500)',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check size={13} strokeWidth={3} />
                </span>
              )}
              <MonsterAvatar avatarId={opt.id} size={82} />
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
          Confirm
        </button>
      </div>
    </CognitoDialog>
  );
};
