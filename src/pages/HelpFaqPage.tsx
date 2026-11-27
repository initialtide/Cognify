import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: 'Are there any paywalls, weekly limits, or Pro subscriptions here?',
    a: 'No! Cognify is completely free with zero paywalls and zero weekly usage caps. All video lessons, revision notes, 6-type quizzes, unlimited multi-subtopic revision sessions, flashcards, printable cheat sheets, A–Z key terms (+ Test me), exam practice, past papers, and full activity history are 100% unlocked.',
  },
  {
    q: 'Where is my XP, streak, and course progress saved?',
    a: 'All progress is saved automatically in your browser localStorage under your active profile. You can create multiple student profiles or export/import JSON backups anytime in Account settings.',
  },
  {
    q: 'How does short-answer & Exam Practice marking work?',
    a: 'Out of the box, answers are graded offline against detailed mark-scheme keyword & numerical rubrics. If you want LLM-written examiner feedback, you can optionally enter a Gemini or OpenAI API key in Account → Preferences.',
  },
  {
    q: 'Can I switch exam boards, tiers, or dark mode?',
    a: 'Yes! Open any course to switch exam boards or Higher/Foundation tiers via the hero pill, or toggle Dark Mode anytime from the top-right Account menu or Preferences.',
  },
];

export const HelpFaqPage: React.FC = () => {
  return (
    <main className="page-container">
      <h1 className="font-heading" style={{ fontSize: '2.3rem', marginBottom: 8 }}>
        Help &amp; Frequently Asked Questions
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
        Everything you need to know about Cognify — free GCSE, IGCSE &amp; A-Level revision with zero paywalls.
      </p>

      <div style={{ display: 'grid', gap: 14 }}>
        {FAQS.map((item) => (
          <section key={item.q} className="cognito-card" style={{ padding: '20px 24px' }}>
            <h2 className="font-heading" style={{ fontSize: '1.3rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={18} color="var(--color-green-600)" /> {item.q}
            </h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item.a}</p>
          </section>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <Link to="/dashboard" className="tactile-btn tactile-btn--solid-blue">
          Return to Dashboard
        </Link>
      </div>
    </main>
  );
};
