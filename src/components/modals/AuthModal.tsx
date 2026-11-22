import React from 'react';
import { AuthFormCard, AuthMode } from '../auth/AuthFormCard';
import { CognitoDialog } from './CognitoDialog';

interface AuthModalProps {
  open: boolean;
  initialMode?: AuthMode;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  open,
  initialMode = 'signin',
  onClose,
}) => {
  return (
    <CognitoDialog open={open} onClose={onClose} titleId="auth-modal-title" size="default">
      {open && (
        <AuthFormCard
          key={initialMode}
          initialMode={initialMode}
          titleId="auth-modal-title"
          compact
          onSuccess={onClose}
        />
      )}
    </CognitoDialog>
  );
};
