import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { CognitoDialog } from './CognitoDialog';

export const FeedbackModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const [category, setCategory] = useState('Suggestion');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
      onClose();
    }, 1100);
  };

  return (
    <CognitoDialog open={open} onClose={onClose} titleId="feedback-modal-title">
      <h2 id="feedback-modal-title" className="font-heading" style={{ fontSize: '1.75rem', marginBottom: 6 }}>
        Send feedback
      </h2>
      <p style={{ margin: '0 0 16px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
        Spotted a typo in a question or want a new topic added? Leave a note here.
      </p>

      {submitted ? (
        <div
          style={{
            padding: 24,
            borderRadius: 14,
            backgroundColor: 'var(--color-green-50)',
            color: 'var(--color-green-700)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontWeight: 700,
          }}
        >
          <CheckCircle2 size={22} /> Thanks! Your note has been recorded locally.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.9rem' }}>
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                padding: '10px 12px',
                borderRadius: 10,
                border: '1px solid var(--border-card)',
                backgroundColor: 'var(--bg-elevated)',
              }}
            >
              <option>Suggestion</option>
              <option>Question or mark scheme issue</option>
              <option>Bug report</option>
            </select>
          </label>
          <label style={{ display: 'grid', gap: 6, fontWeight: 700, fontSize: '0.9rem' }}>
            Details
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your feedback..."
              required
              style={{
                padding: '10px 12px',
                borderRadius: 10,
                border: '1px solid var(--border-card)',
                backgroundColor: 'var(--bg-elevated)',
                resize: 'vertical',
              }}
            />
          </label>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 6 }}>
            <button type="button" onClick={onClose} style={{ border: 0, background: 'transparent', fontWeight: 700, color: 'var(--text-secondary)' }}>
              Cancel
            </button>
            <button type="submit" className="tactile-btn tactile-btn--solid-blue">
              <Send size={15} /> Send
            </button>
          </div>
        </form>
      )}
    </CognitoDialog>
  );
};
