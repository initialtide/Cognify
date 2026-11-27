import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  ClipboardList,
  Clock,
  FileText,
  Grid,
  LayoutGrid,
  Lightbulb,
  Link2,
  Mail,
  MessageSquare,
  Shuffle,
  Sparkles,
  Sun,
} from 'lucide-react';
import { CognitoDialog } from '../components/modals/CognitoDialog';

interface ToolDef {
  id: string;
  name: string;
  category: 'Quizzes and checks' | 'Reports and parents' | 'In the classroom';
  icon: React.ReactNode;
}

const TEACHER_TOOLS: ToolDef[] = [
  { id: 'starter', name: 'Starter Questions Generator', category: 'Quizzes and checks', icon: <Lightbulb size={18} /> },
  { id: 'exit', name: 'Exit Ticket Generator', category: 'Quizzes and checks', icon: <ClipboardList size={18} /> },
  { id: 'wordsearch', name: 'Word Search Generator', category: 'Quizzes and checks', icon: <Grid size={18} /> },
  { id: 'crossword', name: 'Crossword Generator', category: 'Quizzes and checks', icon: <LayoutGrid size={18} /> },
  { id: 'matching', name: 'Matching Activity Generator', category: 'Quizzes and checks', icon: <Link2 size={18} /> },
  { id: 'bingo', name: 'Keyword Bingo Generator', category: 'Quizzes and checks', icon: <Award size={18} /> },
  { id: 'keyterms', name: 'Key Terms List Builder', category: 'Quizzes and checks', icon: <BookOpen size={18} /> },
  { id: 'report', name: 'Report Comment Generator', category: 'Reports and parents', icon: <FileText size={18} /> },
  { id: 'batch-report', name: 'Batch Report Comments', category: 'Reports and parents', icon: <MessageSquare size={18} /> },
  { id: 'email', name: 'Email Generator', category: 'Reports and parents', icon: <Mail size={18} /> },
  { id: 'picker', name: 'Name and Group Picker', category: 'In the classroom', icon: <Shuffle size={18} /> },
  { id: 'seating', name: 'Seating Plan Generator', category: 'In the classroom', icon: <LayoutGrid size={18} /> },
  { id: 'timer', name: 'Classroom Timer', category: 'In the classroom', icon: <Clock size={18} /> },
  { id: 'calm', name: 'Calm Screen', category: 'In the classroom', icon: <Sun size={18} /> },
];

export const TeacherToolsPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolDef | null>(null);
  const [topicInput, setTopicInput] = useState('Cell Biology — Eukaryotic vs Prokaryotic Cells');
  const [namesInput, setNamesInput] = useState('Maya\nLiam\nSophia\nNoah\nChloe\nEthan');
  const [pickedName, setPickedName] = useState<string>('');
  const [timerSec, setTimerSec] = useState(300);
  const [timerRunning, setTimerRunning] = useState(false);
  const [studentName, setStudentName] = useState('Maya');
  const [strength, setStrength] = useState('consistently applies scientific terminology in 6-mark exam questions');
  const [target, setTarget] = useState('practise unit conversions (mm to μm) under timed conditions');

  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => {
      setTimerSec((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning]);

  const categories: ToolDef['category'][] = [
    'Quizzes and checks',
    'Reports and parents',
    'In the classroom',
  ];

  const renderToolBody = (tool: ToolDef) => {
    if (tool.id === 'timer') {
      const mins = String(Math.floor(timerSec / 60)).padStart(2, '0');
      const secs = String(timerSec % 60).padStart(2, '0');
      return (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div className="font-heading" style={{ fontSize: '4.2rem', fontWeight: 700, marginBottom: 16 }}>
            {mins}:{secs}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="tactile-btn tactile-btn--solid-blue" onClick={() => setTimerRunning((r) => !r)}>
              {timerRunning ? 'Pause' : 'Start'}
            </button>
            <button type="button" className="tactile-btn" onClick={() => { setTimerRunning(false); setTimerSec(300); }}>
              5 min
            </button>
            <button type="button" className="tactile-btn" onClick={() => { setTimerRunning(false); setTimerSec(60); }}>
              1 min
            </button>
          </div>
        </div>
      );
    }

    if (tool.id === 'picker' || tool.id === 'seating') {
      const list = namesInput.split('\n').map((s) => s.trim()).filter(Boolean);
      return (
        <div style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6, fontWeight: 700 }}>
            Student names (one per line)
            <textarea
              rows={5}
              value={namesInput}
              onChange={(e) => setNamesInput(e.target.value)}
              style={{ padding: 10, borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
            />
          </label>
          <button
            type="button"
            className="tactile-btn tactile-btn--solid-blue"
            onClick={() => {
              if (list.length === 0) return;
              if (tool.id === 'picker') {
                setPickedName(list[Math.floor(Math.random() * list.length)]);
              } else {
                const shuffled = [...list].sort(() => Math.random() - 0.5);
                setPickedName(`Desk Pairs: ${shuffled.map((n, i) => (i % 2 === 0 ? `${n} &` : n)).join(' ')}`);
              }
            }}
          >
            <Shuffle size={15} /> {tool.id === 'picker' ? 'Pick random student' : 'Generate random seating pairs'}
          </button>
          {pickedName && (
            <div
              className="cognito-card"
              style={{
                padding: 16,
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '1.25rem',
                backgroundColor: 'var(--surface-accent-blue)',
                borderColor: 'var(--surface-accent-blue-border)',
                color: 'var(--surface-accent-blue-text)',
              }}
            >
              {pickedName}
            </div>
          )}
        </div>
      );
    }

    if (tool.category === 'Reports and parents') {
      const draft =
        tool.id === 'email'
          ? `Subject: Positive Progress Update for ${studentName}\n\nDear Parent/Carer,\n\nI wanted to share how pleased we are with ${studentName}'s engagement this half-term. In particular, ${studentName} ${strength}. To push even further before mocks, our next focus will be to ${target}.\n\nKind regards,\nScience Department`
          : `${studentName} has made strong progress this term and ${strength}. To achieve the highest band in upcoming assessments, ${studentName} should focus on a clear target to ${target}.`;
      return (
        <div style={{ display: 'grid', gap: 12 }}>
          <input
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student name"
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
          />
          <input
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            placeholder="Key strength"
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
          />
          <input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Next target"
            style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
          />
          <textarea
            rows={5}
            readOnly
            value={draft}
            style={{ padding: 12, borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-sunken)' }}
          />
        </div>
      );
    }

    if (tool.id === 'calm') {
      return (
        <div style={{ padding: 36, borderRadius: 16, background: 'linear-gradient(135deg, #ecf7ff, #eefbf6)', color: '#0b3c61', textAlign: 'center' }}>
          <h3 className="font-heading" style={{ fontSize: '2rem', color: '#0b3c61' }}>Silent Focus Time</h3>
          <p style={{ margin: '10px 0 0', fontSize: '1.05rem' }}>Open your exercise book, write today&apos;s date &amp; title, and begin the starter task silently.</p>
        </div>
      );
    }

    // Quizzes & Checks generators
    return (
      <div style={{ display: 'grid', gap: 12 }}>
        <label style={{ display: 'grid', gap: 6, fontWeight: 700 }}>
          Lesson Topic
          <input
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            style={{ padding: '9px 12px', borderRadius: 10, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
          />
        </label>
        <div className="cognito-card" style={{ padding: 16, backgroundColor: 'var(--bg-sunken)' }}>
          <strong style={{ display: 'block', marginBottom: 8 }}>Generated {tool.name} for &ldquo;{topicInput}&rdquo;:</strong>
          <ol style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 6 }}>
            <li>Recall: State two differences between eukaryotic and prokaryotic cells.</li>
            <li>Apply: Why do root hair cells lack chloroplasts?</li>
            <li>Calculate: Convert 12 mm into micrometres (μm).</li>
            <li>Stretch: Compare magnification and resolution in electron vs light microscopes.</li>
          </ol>
        </div>
      </div>
    );
  };

  return (
    <main className="page-container">
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <h1 className="font-heading" style={{ fontSize: '2.3rem' }}>Free Tools for Teachers</h1>
          <span
            style={{
              padding: '3px 10px',
              borderRadius: 999,
              backgroundColor: 'var(--surface-accent-blue)',
              border: '1px solid var(--surface-accent-blue-border)',
              color: 'var(--text-link)',
              fontWeight: 800,
              fontSize: '0.8rem',
            }}
          >
            Beta
          </span>
        </div>
        <p style={{ color: 'var(--text-secondary)', marginTop: 8, maxWidth: 760 }}>
          14 free classroom tools: lesson starters, exit tickets, key terms lists, word searches, crosswords,
          matching activities, keyword bingo, report comments, parent emails, name &amp; group picker, seating plans, classroom timer, and calm screen.
        </p>
      </div>

      <section className="cognito-card" style={{ padding: 26, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 28 }}>
        {categories.map((cat) => (
          <div key={cat}>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: 12 }}>
              {cat}
            </h2>
            <div style={{ display: 'grid', gap: 6 }}>
              {TEACHER_TOOLS.filter((t) => t.category === cat).map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  className="teacher-tool-row"
                  onClick={() => setActiveTool(tool)}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                    <span className="teacher-tool-icon">
                      {tool.icon}
                    </span>
                    <span>{tool.name}</span>
                    {tool.category !== 'In the classroom' && <Sparkles size={14} color="var(--color-purple-400)" />}
                  </span>
                  <ArrowRight size={15} color="var(--text-muted)" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CognitoDialog open={Boolean(activeTool)} onClose={() => setActiveTool(null)} titleId="teacher-tool-title" size="wide">
        {activeTool && (
          <div>
            <h2 id="teacher-tool-title" className="font-heading" style={{ fontSize: '1.7rem', marginBottom: 14 }}>
              {activeTool.name}
            </h2>
            {renderToolBody(activeTool)}
          </div>
        )}
      </CognitoDialog>
    </main>
  );
};
