import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  FileCode2,
  Github,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_COURSES, EXAM_BOARDS, QUALIFICATIONS } from '../data/catalog';
import { SITE_METADATA } from '../data/siteMetadata';

const TOTAL_SUBTOPICS = ALL_COURSES.reduce(
  (total, course) =>
    total + course.topics.reduce((topicSum, topic) => topicSum + topic.subtopics.length, 0),
  0
);

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Cognify — Free GCSE, IGCSE & A-Level Interactive Revision Platform';
  }, []);

  return (
    <main className="page-container info-page">
      <header className="info-page__header">
        <span className="info-page__eyebrow">About Cognify · Initialtide Education Project</span>
        <h1 className="font-heading info-page__title">
          About Cognify — Open-Access GCSE, IGCSE &amp; A-Level Revision
        </h1>
        <p className="info-page__lead">
          Cognify is a free, open-access interactive revision platform built by{' '}
          <a href={SITE_METADATA.githubOrgUrl} target="_blank" rel="noreferrer">
            Initialtide
          </a>{' '}
          for secondary and sixth-form learners preparing for UK GCSE, Cambridge IGCSE, and A-Level
          examinations. Every interactive lesson, structured revision note, past paper, flashcard
          deck, and exam-style practice question is available without paywalls, weekly limits, or
          advertising trackers.
        </p>
      </header>

      <section className="info-stat-grid" aria-label="Platform curriculum scale">
        <div className="cognito-card info-stat-card">
          <div className="info-stat-card__value">{ALL_COURSES.length}</div>
          <div className="info-stat-card__label">Structured Courses</div>
        </div>
        <div className="cognito-card info-stat-card">
          <div className="info-stat-card__value">{TOTAL_SUBTOPICS}+</div>
          <div className="info-stat-card__label">Curriculum Subtopics</div>
        </div>
        <div className="cognito-card info-stat-card">
          <div className="info-stat-card__value">{QUALIFICATIONS.length}</div>
          <div className="info-stat-card__label">Qualifications (GCSE, IGCSE, A-Level)</div>
        </div>
        <div className="cognito-card info-stat-card">
          <div className="info-stat-card__value">{EXAM_BOARDS.length}</div>
          <div className="info-stat-card__label">Exam Boards Supported</div>
        </div>
      </section>

      <div className="info-card-stack">
        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <GraduationCap size={20} color="var(--color-blue-600)" /> Educational Mission &amp;
            Pedagogy
          </h2>
          <p>
            High-quality exam preparation should never depend on household income or subscription
            tiers. Cognify organises science, mathematics, humanities, and social-science curricula
            into short, focused study units aligned with AQA, Edexcel, OCR, and Cambridge
            International (CIE) specifications. Each subtopic connects six complementary study
            modes: progressive interactive lessons, full revision notes with privacy-enhanced video
            walkthroughs, multi-format active-recall quizzes, spaced-repetition flashcards,
            structured exam-style practice with examiner mark schemes, and printable A–Z key-term
            glossaries.
          </p>
          <p>
            For Cambridge IGCSE subjects, Cognify links directly to official past examination
            papers and mark schemes so students can practise under realistic exam conditions and
            verify every mark point step by step. Teachers and independent learners can also build
            custom multi-topic revision sessions in seconds via the Session Builder or Teacher
            Tools workspace.
          </p>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <BookOpen size={20} color="var(--color-green-600)" /> Open Curriculum &amp; Agent
            Readiness
          </h2>
          <p>
            Cognify is maintained in the open by the{' '}
            <a href={SITE_METADATA.githubOrgUrl} target="_blank" rel="noreferrer">
              Initialtide GitHub organization
            </a>{' '}
            in the{' '}
            <a href={SITE_METADATA.githubRepoUrl} target="_blank" rel="noreferrer">
              initialtide/Cognify repository
            </a>
            . Alongside the interactive web application, Cognify publishes structured JSON
            curriculum endpoints, an OpenAPI 3.1 specification, Markdown representations for AI
            study assistants, an <code>llms.txt</code> instruction guide, and an MCP tool manifest
            so educational AI agents can reliably discover syllabuses, subtopics, and direct study
            links.
          </p>
          <div className="info-inline-links">
            <Link to="/courses" className="tactile-btn tactile-btn--solid-blue">
              Explore Courses
            </Link>
            <Link to="/docs" className="tactile-btn">
              <FileCode2 size={16} /> Cognify API &amp; Docs
            </Link>
            <Link to="/mcp" className="tactile-btn">
              MCP &amp; Agent Tools
            </Link>
            <a
              href={SITE_METADATA.githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="tactile-btn"
            >
              <Github size={16} /> GitHub Repository
            </a>
          </div>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Building2 size={20} color="var(--color-purple-600)" /> Organization &amp; Governance
          </h2>
          <p>
            <strong>Project Maintainer:</strong> {SITE_METADATA.legalName} ({SITE_METADATA.organizationName})
            <br />
            <strong>Registered Correspondence Address:</strong> {SITE_METADATA.address.formatted}
            <br />
            <strong>Support Contact:</strong>{' '}
            <a href={`mailto:${SITE_METADATA.contact.email}`}>{SITE_METADATA.contact.email}</a> ·{' '}
            <Link to="/contact">Contact Page</Link> · <Link to="/privacy">Privacy Policy</Link>
          </p>
          <p>
            Every release is verified through automated curriculum quality audits, TypeScript type
            checking, automated unit and integration tests, and accessibility checks across both
            Light and Dark themes.
          </p>
        </section>
      </div>
    </main>
  );
};

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Curriculum & Content Feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Cognify — Support, Curriculum Feedback & Developer Inquiries';
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  };

  return (
    <main className="page-container info-page">
      <header className="info-page__header">
        <span className="info-page__eyebrow">Support &amp; Communication</span>
        <h1 className="font-heading info-page__title">Contact Cognify &amp; Initialtide</h1>
        <p className="info-page__lead">
          Reach the Cognify maintainers for curriculum corrections, exam-board syllabus requests,
          accessibility reports, API or MCP integration questions, or privacy inquiries. We welcome
          feedback from students, teachers, parents, and educational tool developers.
        </p>
      </header>

      <div className="info-two-col">
        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Mail size={20} color="var(--color-blue-600)" /> Direct Contact Channels
          </h2>
          <ul className="info-contact-list">
            <li>
              <Mail size={16} aria-hidden="true" />
              <div>
                <strong>General &amp; Student Support</strong>
                <div>
                  <a href={`mailto:${SITE_METADATA.contact.email}`}>
                    {SITE_METADATA.contact.email}
                  </a>
                </div>
              </div>
            </li>
            <li>
              <ShieldCheck size={16} aria-hidden="true" />
              <div>
                <strong>Privacy &amp; Data Protection</strong>
                <div>
                  <a href={`mailto:${SITE_METADATA.contact.securityEmail}`}>
                    {SITE_METADATA.contact.securityEmail}
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <div>
                <strong>Telephone (UK Office Hours)</strong>
                <div>
                  <a href={`tel:${SITE_METADATA.contact.telephone}`}>
                    {SITE_METADATA.contact.telephone}
                  </a>
                </div>
              </div>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <div>
                <strong>Postal Address</strong>
                <div>{SITE_METADATA.address.formatted}</div>
              </div>
            </li>
            <li>
              <Github size={16} aria-hidden="true" />
              <div>
                <strong>Open-Source Issue Tracker</strong>
                <div>
                  <a
                    href={`${SITE_METADATA.githubRepoUrl}/issues`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/initialtide/Cognify/issues <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <p className="info-meta-note">
            <strong>Support Hours:</strong> {SITE_METADATA.contact.hours}
            <br />
            <strong>Typical Response Time:</strong> {SITE_METADATA.contact.responseTime}
          </p>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            Send a Message or Curriculum Suggestion
          </h2>
          <p>
            Need a specific GCSE, IGCSE, or A-Level subtopic added, spotted a mark-scheme typo, or
            building an integration with the Cognify Curriculum API? Draft a structured note below
            or open an issue directly on GitHub for public tracking.
          </p>
          {submitted ? (
            <div className="info-success-box" role="status">
              <CheckCircle2 size={20} color="var(--color-green-600)" />
              <div>
                <strong>Message prepared for {topic}</strong>
                <p style={{ margin: '6px 0 10px' }}>
                  Because Cognify runs as a privacy-first static application with no background
                  tracking server, your draft stays locally in your browser. Click below to send it
                  directly via your email client or file a public GitHub issue.
                </p>
                <div className="info-inline-links">
                  <a
                    href={`mailto:${SITE_METADATA.contact.email}?subject=${encodeURIComponent(
                      `[Cognify] ${topic}`
                    )}&body=${encodeURIComponent(
                      `From: ${name || 'Cognify Visitor'} (${email || 'no email provided'})\n\n${message}`
                    )}`}
                    className="tactile-btn tactile-btn--solid-blue"
                  >
                    Open in Email Client
                  </a>
                  <button
                    type="button"
                    className="tactile-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                  >
                    Write Another Message
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form className="info-form" onSubmit={handleSubmit}>
              <label className="info-form__field">
                <span>Your Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Patel"
                />
              </label>
              <label className="info-form__field">
                <span>Email Address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                />
              </label>
              <label className="info-form__field">
                <span>Inquiry Topic</span>
                <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                  <option>Curriculum &amp; Content Feedback</option>
                  <option>Bug Report or Accessibility Issue</option>
                  <option>Cognify API &amp; MCP Integration</option>
                  <option>School &amp; Teacher Support</option>
                  <option>Privacy &amp; Data Inquiry</option>
                </select>
              </label>
              <label className="info-form__field">
                <span>Message</span>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Include the course, exam board, or API endpoint so we can help quickly..."
                />
              </label>
              <button type="submit" className="tactile-btn tactile-btn--solid-blue">
                Prepare Message
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
};

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy — Cognify Revision Platform';
  }, []);

  return (
    <main className="page-container info-page">
      <header className="info-page__header">
        <span className="info-page__eyebrow">
          Privacy &amp; Data Protection · Effective {SITE_METADATA.lastUpdated}
        </span>
        <h1 className="font-heading info-page__title">Cognify Privacy Policy</h1>
        <p className="info-page__lead">
          Cognify is designed from the ground up as a local-first, privacy-respecting educational
          web application. We do not sell student data, run third-party advertising networks, place
          cross-site behavioural tracking cookies, or require cloud registration to revise.
        </p>
      </header>

      <div className="info-card-stack">
        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Lock size={20} color="var(--color-blue-600)" /> 1. Local-First Data Architecture
          </h2>
          <p>
            When you create a student profile, enroll in GCSE, IGCSE, or A-Level courses, answer
            quiz questions, review flashcards, or track daily XP and study streaks, all progress is
            stored locally inside your own browser using standard <code>localStorage</code> and{' '}
            <code>IndexedDB</code> storage. Account credentials created through Cognify&apos;s
            built-in sign-up system are salted and hashed locally on your device using the Web
            Crypto API and are never transmitted to an Initialtide backend server.
          </p>
          <p>
            Because your learning history remains on your device, you hold complete ownership and
            control. You may export a portable JSON backup of your study data or permanently erase
            your local profile at any time from <strong>Account → Settings</strong> or by clearing
            site data in your browser.
          </p>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <ShieldCheck size={20} color="var(--color-green-600)" /> 2. Third-Party Embeds &amp;
            Optional Services
          </h2>
          <p>
            <strong>Privacy-Enhanced Lesson Videos:</strong> Lesson and revision-note video
            walkthroughs load behind a lightweight preview facade with zero external player scripts
            requested until you click Play. When you choose to play a video, Cognify embeds via{' '}
            <code>www.youtube-nocookie.com</code> (YouTube&apos;s Privacy-Enhanced Mode) so video
            playback does not set advertising cookies prior to interaction.
          </p>
          <p>
            <strong>Optional Examiner AI Marking (Bring Your Own Key):</strong> Out of the box,
            Cognify grades short-answer and exam-style practice questions completely offline using
            built-in mark-scheme rubrics. If you optionally supply your own Gemini or OpenAI API
            key in Account Preferences, that key stays in your browser and is sent directly from
            your browser to the AI provider you selected only when you request AI examiner feedback.
          </p>
          <p>
            <strong>Hosting Infrastructure:</strong> The static web application is delivered via
            GitHub Pages. Like standard web hosts, GitHub Pages processes standard technical
            request metadata (such as IP address and User-Agent) in accordance with the GitHub
            Privacy Statement to deliver pages reliably and prevent abuse.
          </p>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            3. Children&apos;s Privacy, Your Rights &amp; Privacy Contact
          </h2>
          <p>
            Cognify is built for secondary and sixth-form students, including learners under 16.
            Because no personal profiles, grades, or contact details are collected on remote
            Cognify servers, students can study safely without creating an online personal data
            footprint. Under UK GDPR and equivalent international privacy regulations, you have the
            right to access, export, rectify, and delete your data — all of which can be exercised
            instantly on-device.
          </p>
          <p>
            For any privacy questions, data protection inquiries, or requests regarding this
            policy, contact the Initialtide Education Project at{' '}
            <a href={`mailto:${SITE_METADATA.contact.securityEmail}`}>
              {SITE_METADATA.contact.securityEmail}
            </a>{' '}
            or write to {SITE_METADATA.address.formatted}. You can also review our open-source
            codebase directly at{' '}
            <a href={SITE_METADATA.githubRepoUrl} target="_blank" rel="noreferrer">
              {SITE_METADATA.githubRepoUrl}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = '404 Page Not Found — Cognify';
  }, []);

  return (
    <main className="page-container info-page">
      <section className="cognito-card info-section-card">
        <span className="info-page__eyebrow">HTTP 404 · Not Found</span>
        <h1 className="font-heading info-page__title" style={{ marginTop: 6 }}>
          Page Not Found on Cognify
        </h1>
        <p className="info-page__lead">
          The requested path <code>{location.pathname}</code> does not match an active Cognify
          lesson, course, or documentation route. Use the links below to jump to the dashboard,
          browse the full curriculum, or inspect machine-readable navigation files.
        </p>
        <div className="info-inline-links" style={{ marginTop: 18 }}>
          <Link to="/dashboard" className="tactile-btn tactile-btn--solid-blue">
            <Compass size={16} /> Go to Dashboard
          </Link>
          <Link to="/courses" className="tactile-btn">
            Browse Courses
          </Link>
          <Link to="/docs" className="tactile-btn">
            API &amp; Developer Docs
          </Link>
          <a href={`${import.meta.env.BASE_URL}sitemap.xml`} className="tactile-btn">
            sitemap.xml
          </a>
          <a href={`${import.meta.env.BASE_URL}llms.txt`} className="tactile-btn">
            llms.txt
          </a>
        </div>
      </section>
    </main>
  );
};
