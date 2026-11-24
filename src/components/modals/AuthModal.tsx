import React from 'react';
import { AuthFormCard, AuthMode, AuthSuccessMeta } from '../auth/AuthFormCard';
import { CognitoDialog } from './CognitoDialog';

interface AuthModalProps {
  open: boolean;
  initialMode?: AuthMode;
  onClose: () => void;
  onAuthSuccess?: (meta: AuthSuccessMeta) => void;
  onStartGuidedOnboarding?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  open,
  initialMode = 'signin',
  onClose,
  onAuthSuccess,
  onStartGuidedOnboarding,
}) => {
  return (
    <CognitoDialog open={open} onClose={onClose} titleId="auth-modal-title" size="default">
      {open && (
        <AuthFormCard
          key={initialMode}
          initialMode={initialMode}
          titleId="auth-modal-title"
          compact
          onSuccess={(meta) => {
            onClose();
            onAuthSuccess?.(meta);
          }}
          onStartGuidedOnboarding={
            onStartGuidedOnboarding
              ? () => {
                  onClose();
                  onStartGuidedOnboarding();
                }
              : undefined
          }
        />
      )}
    </CognitoDialog>
  );
};
