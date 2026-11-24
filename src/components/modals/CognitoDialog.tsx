import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CognitoDialogProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  size?: 'default' | 'wide' | 'xl';
  children: React.ReactNode;
}

/**
 * Native <dialog> modal following modern-web-guidance:
 * - Opens via showModal() for browser-managed top-layer, inert background & Esc.
 * - Uses closedby="any" + pointerdown/pointerup outside-rect fallback for light dismiss.
 */
export const CognitoDialog: React.FC<CognitoDialogProps> = ({
  open,
  onClose,
  titleId,
  size = 'default',
  children,
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      if (open) onClose();
    };

    let pressedOutside = false;
    const isOutside = (e: PointerEvent) => {
      if (e.target !== dialog) return false;
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    const handlePointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!('closedBy' in HTMLDialogElement.prototype) && pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('close', handleClose);
    dialog.addEventListener('pointerdown', handlePointerDown);
    dialog.addEventListener('pointerup', handlePointerUp);

    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('pointerdown', handlePointerDown);
      dialog.removeEventListener('pointerup', handlePointerUp);
    };
  }, [open, onClose]);

  const sizeClass =
    size === 'xl'
      ? 'cognito-dialog--xl'
      : size === 'wide'
        ? 'cognito-dialog--wide'
        : '';

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className={`cognito-dialog ${sizeClass}`}
      {...({ closedby: 'any' } as Record<string, string>)}
    >
      <button
        type="button"
        className="cognito-dialog__close"
        aria-label="Close modal"
        onClick={() => ref.current?.close()}
      >
        <X size={18} />
      </button>
      <div className="cognito-dialog__scroll">{open ? children : null}</div>
    </dialog>
  );
};
