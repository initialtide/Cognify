import React from 'react';
import { BookOpen, CheckCircle2, LogIn, LogOut, Sparkles, UserPlus, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthMode } from '../auth/AuthFormCard';
import { useApp } from '../../store/AppContext';
import {
  CognitoActivityChartIcon,
  CognitoCogIcon,
  CognitoHouseIcon,
  CognitoMoonStarIcon,
  CognitoPencilIcon,
  CognitoServiceBellIcon,
} from '../artwork/CognitoIcons';

interface AccountMenuProps {
  onClose: () => void;
  onOpenManageCourses: () => void;
  onOpenAuthModal?: (mode: AuthMode) => void;
}

export const AccountMenu: React.FC<AccountMenuProps> = ({
  onClose,
  onOpenManageCourses,
  onOpenAuthModal,
}) => {
  const { profile, currentAccount, isAuthenticated, updatePreferences, signOutAccount } = useApp();

  const linkRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 11,
    padding: '9px 12px',
    borderRadius: 10,
    fontWeight: 600,
    fontSize: '0.94rem',
    color: 'var(--text-primary)',
    background: 'transparent',
    border: 0,
    width: '100%',
    textAlign: 'left',
  };

  return (
    <div
      className="popover-surface"
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        right: 0,
        width: 'min(92vw, 315px)',
        padding: 16,
      }}
    >
      {/* Profile Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-heading)' }}>
            {profile.name}
          </div>
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {isAuthenticated && currentAccount
              ? currentAccount.email
              : `Guest · ${profile.yearGroup}`}
          </div>
        </div>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '3px 10px',
            borderRadius: 999,
            fontSize: '0.76rem',
            fontWeight: 800,
            flexShrink: 0,
            backgroundColor: 'var(--color-green-100)',
            color: 'var(--color-green-700)',
          }}
        >
          {isAuthenticated ? (
            <>
              <CheckCircle2 size={12} /> Saved
            </>
          ) : (
            <>
              <Sparkles size={12} /> All Access
            </>
          )}
        </span>
      </div>

      {/* Guest Sign In / Register Callout */}
      {!isAuthenticated && (
        <div
          style={{
            display: 'grid',
            gap: 8,
            padding: '10px 12px',
            borderRadius: 12,
            backgroundColor: 'var(--color-blue-50)',
            border: '1px solid var(--color-blue-200, rgba(59, 130, 246, 0.25))',
            marginBottom: 10,
          }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0b3c61' }}>
            Sign in or register to save your XP, streaks &amp; quiz history
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              type="button"
              className="tactile-btn tactile-btn--sm tactile-btn--solid-blue"
              style={{ flex: 1, minHeight: 34, padding: '5px 10px', fontSize: '0.82rem' }}
              onClick={() => {
                onClose();
                onOpenAuthModal?.('register');
              }}
            >
              <UserPlus size={14} /> Register
            </button>
            <button
              type="button"
              className="tactile-btn tactile-btn--sm"
              style={{ flex: 1, minHeight: 34, padding: '5px 10px', fontSize: '0.82rem' }}
              onClick={() => {
                onClose();
                onOpenAuthModal?.('signin');
              }}
            >
              <LogIn size={14} /> Sign in
            </button>
          </div>
        </div>
      )}

      {/* Dark Mode Switch */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 12px',
          borderRadius: 12,
          backgroundColor: 'var(--bg-sunken)',
          marginBottom: 10,
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontWeight: 700, fontSize: '0.92rem' }}>
          <CognitoMoonStarIcon size={18} /> Dark mode
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={profile.preferences.darkMode}
          aria-label="Toggle dark mode"
          className="toggle-switch"
          onClick={() => updatePreferences({ darkMode: !profile.preferences.darkMode })}
        >
          <span className="toggle-switch__knob" />
        </button>
      </div>

      {/* Course Management */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 8, paddingBottom: 8 }}>
        <button
          type="button"
          style={linkRowStyle}
          onClick={() => {
            onClose();
            onOpenManageCourses();
          }}
        >
          <CognitoPencilIcon size={18} /> Manage courses
        </button>
        <Link to="/courses" onClick={onClose} style={linkRowStyle}>
          <BookOpen size={17} /> Browse all courses
        </Link>
        <Link to="/onboarding" onClick={onClose} style={linkRowStyle}>
          <Sparkles size={17} /> Guided setup
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 8 }}>
        <Link to="/dashboard" onClick={onClose} style={linkRowStyle}>
          <CognitoHouseIcon size={18} /> Dashboard
        </Link>
        <Link to="/account/profile" onClick={onClose} style={linkRowStyle}>
          <CognitoCogIcon size={18} /> Account &amp; Sync
        </Link>
        <Link to="/account/activity" onClick={onClose} style={linkRowStyle}>
          <CognitoActivityChartIcon size={18} /> Activity Log
        </Link>
        <Link to="/teacher-tools" onClick={onClose} style={linkRowStyle}>
          <Users size={17} /> Teacher tools
        </Link>
        <Link to="/faq" onClick={onClose} style={linkRowStyle}>
          <CognitoServiceBellIcon size={18} /> Help &amp; FAQ
        </Link>
      </div>

      {/* Sign Out Footer for Authenticated Users */}
      {isAuthenticated && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 8, marginTop: 6 }}>
          <button
            type="button"
            style={{ ...linkRowStyle, color: 'var(--color-red-600)' }}
            onClick={() => {
              signOutAccount();
              onClose();
            }}
          >
            <LogOut size={17} /> Sign out
          </button>
        </div>
      )}
    </div>
  );
};
