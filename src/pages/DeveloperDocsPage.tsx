import React, { useEffect } from 'react';
import {
  Bot,
  Code2,
  ExternalLink,
  FileJson,
  FileText,
  Github,
  Layers,
  Terminal,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_COURSES } from '../data/catalog';
import { SITE_METADATA } from '../data/siteMetadata';

const BASE = SITE_METADATA.baseUrl;

export const DocsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Cognify API & Developer Documentation — Cognify';
  }, []);

  return (
    <main className="page-container info-page">
      <header className="info-page__header">
        <span className="info-page__eyebrow">Developer Resources · Open Curriculum Platform</span>
        <h1 className="font-heading info-page__title">Cognify API &amp; Developer Documentation</h1>
        <p className="info-page__lead">
          Official developer documentation for integrating with the Cognify GCSE, IGCSE, and
          A-Level Curriculum API, Markdown content negotiation, <code>llms.txt</code> agent
          instructions, and the Cognify MCP tool manifest. All endpoints are open-access and
          require no API keys or authentication tokens.
        </p>
      </header>

      <div className="info-card-stack">
        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Code2 size={20} color="var(--color-blue-600)" /> Quick Start: Machine-Readable Endpoints
          </h2>
          <p>
            AI agents, educational apps, and curriculum researchers can read Cognify&apos;s full
            course catalog, OpenAPI schema, and Markdown summaries directly over HTTPS:
          </p>
          <div className="dev-endpoint-grid">
            <div className="dev-endpoint-card">
              <div className="dev-endpoint-card__top">
                <span className="dev-method-pill">GET</span>
                <code>/api/v1/courses.json</code>
              </div>
              <p>
                Structured JSON catalog of all {ALL_COURSES.length} GCSE, IGCSE, and A-Level
                courses, exam boards, topics, subtopics, and canonical study URLs.
              </p>
              <a href={`${import.meta.env.BASE_URL}api/v1/courses.json`}>
                Open JSON Catalog <ExternalLink size={12} />
              </a>
            </div>
            <div className="dev-endpoint-card">
              <div className="dev-endpoint-card__top">
                <span className="dev-method-pill">GET</span>
                <code>/api/openapi.json</code>
              </div>
              <p>
                OpenAPI 3.1.0 specification describing Cognify Curriculum API endpoints, JSON
                response schemas, and content-negotiation headers.
              </p>
              <a href={`${import.meta.env.BASE_URL}api/openapi.json`}>
                View OpenAPI Spec <ExternalLink size={12} />
              </a>
            </div>
            <div className="dev-endpoint-card">
              <div className="dev-endpoint-card__top">
                <span className="dev-method-pill">GET</span>
                <code>/llms.txt</code>
              </div>
              <p>
                Curated LLM &amp; AI agent instruction index including explicit &ldquo;When to use
                Cognify&rdquo; guidance, key URLs, and full catalog links.
              </p>
              <a href={`${import.meta.env.BASE_URL}llms.txt`}>
                Read llms.txt <ExternalLink size={12} />
              </a>
            </div>
            <div className="dev-endpoint-card">
              <div className="dev-endpoint-card__top">
                <span className="dev-method-pill">GET</span>
                <code>/.well-known/mcp.json</code>
              </div>
              <p>
                Model Context Protocol (MCP) manifest describing Cognify&apos;s structured
                curriculum discovery tools for AI coding and tutoring agents.
              </p>
              <Link to="/mcp">
                Explore Cognify MCP Tools <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Terminal size={20} color="var(--color-green-600)" /> Markdown Content Negotiation
            (acceptmarkdown.com)
          </h2>
          <p>
            When served through Cognify&apos;s edge middleware or local preview server, every route
            (including the homepage, dashboard, course pages, documentation, and HTTP 404 error
            responses) negotiates content via the HTTP <code>Accept</code> header and returns{' '}
            <code>Vary: Accept</code>. Static Markdown mirrors are also published alongside every
            core page (for example <code>/index.md</code>, <code>/docs.md</code>, and{' '}
            <code>/llms-full.txt</code>).
          </p>
          <pre className="dev-code-block">
            <code>{`# Request clean Markdown directly from the homepage
curl -sS -L -i -H 'Accept: text/markdown' ${BASE}/

# Request standard HTML for browsers
curl -sS -L -i -H 'Accept: text/html' ${BASE}/

# Fetch the full JSON curriculum catalog
curl -sS ${BASE}/api/v1/courses.json | jq '.courseCount, .courses[0].title'`}</code>
          </pre>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Layers size={20} color="var(--color-purple-600)" /> Dedicated Developer Pages &amp;
            Source Code
          </h2>
          <p>
            Explore dedicated specifications for the Curriculum API, MCP server tools, XML sitemap,
            and Initialtide&apos;s open-source GitHub repository:
          </p>
          <div className="info-inline-links">
            <Link to="/api" className="tactile-btn tactile-btn--solid-blue">
              <FileJson size={16} /> Cognify API Reference
            </Link>
            <Link to="/mcp" className="tactile-btn">
              <Bot size={16} /> Cognify MCP Server
            </Link>
            <a href={`${import.meta.env.BASE_URL}llms-full.txt`} className="tactile-btn">
              <FileText size={16} /> llms-full.txt
            </a>
            <a
              href={SITE_METADATA.githubOrgUrl}
              target="_blank"
              rel="noreferrer"
              className="tactile-btn"
            >
              <Github size={16} /> Initialtide on GitHub
            </a>
            <a
              href={SITE_METADATA.githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="tactile-btn"
            >
              <Github size={16} /> Cognify Source Repo
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export const ApiReferencePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Cognify Curriculum API Reference — OpenAPI 3.1';
  }, []);

  return (
    <main className="page-container info-page">
      <header className="info-page__header">
        <span className="info-page__eyebrow">OpenAPI 3.1.0 · Read-Only Public Curriculum API</span>
        <h1 className="font-heading info-page__title">Cognify Curriculum API Reference</h1>
        <p className="info-page__lead">
          The Cognify Curriculum API exposes structured, read-only JSON and Markdown data for all{' '}
          {ALL_COURSES.length} GCSE, IGCSE, and A-Level courses across AQA, Edexcel, OCR, and
          Cambridge International (CIE). No authentication or rate-limit registration is required.
        </p>
      </header>

      <div className="info-card-stack">
        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <FileJson size={20} color="var(--color-blue-600)" /> Base URL &amp; Endpoints
          </h2>
          <p>
            <strong>Production Base URL:</strong> <code>{BASE}</code>
          </p>
          <div className="dev-table-wrap">
            <table className="dev-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Path</th>
                  <th>Content-Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="dev-method-pill">GET</span>
                  </td>
                  <td>
                    <code>/api/v1/courses.json</code>
                  </td>
                  <td>
                    <code>application/json</code>
                  </td>
                  <td>Full catalog of {ALL_COURSES.length} courses, topics, subtopics &amp; URLs.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dev-method-pill">GET</span>
                  </td>
                  <td>
                    <code>/api/openapi.json</code>
                  </td>
                  <td>
                    <code>application/json</code>
                  </td>
                  <td>Machine-readable OpenAPI 3.1.0 schema for Cognify endpoints.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dev-method-pill">GET</span>
                  </td>
                  <td>
                    <code>/.well-known/mcp.json</code>
                  </td>
                  <td>
                    <code>application/json</code>
                  </td>
                  <td>Model Context Protocol tool &amp; resource discovery manifest.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dev-method-pill">GET</span>
                  </td>
                  <td>
                    <code>/llms.txt</code> &amp; <code>/llms-full.txt</code>
                  </td>
                  <td>
                    <code>text/markdown</code>
                  </td>
                  <td>Concise &amp; full Markdown agent instruction indices.</td>
                </tr>
                <tr>
                  <td>
                    <span className="dev-method-pill">GET</span>
                  </td>
                  <td>
                    <code>/.well-known/agent-instructions.md</code>
                  </td>
                  <td>
                    <code>text/markdown</code>
                  </td>
                  <td>Dedicated when-to-use rules and invocation guide for AI agents.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="info-inline-links" style={{ marginTop: 16 }}>
            <a
              href={`${import.meta.env.BASE_URL}api/openapi.json`}
              className="tactile-btn tactile-btn--solid-blue"
            >
              Download openapi.json
            </a>
            <a href={`${import.meta.env.BASE_URL}api/v1/courses.json`} className="tactile-btn">
              Inspect courses.json
            </a>
            <Link to="/docs" className="tactile-btn">
              Back to Cognify Docs
            </Link>
          </div>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">Example JSON Response</h2>
          <pre className="dev-code-block">
            <code>{`{
  "service": "Cognify Curriculum API",
  "version": "1.0.0",
  "baseUrl": "${BASE}",
  "courseCount": ${ALL_COURSES.length},
  "courses": [
    {
      "id": "${ALL_COURSES[0]?.id ?? 'gcse-biology-aqa-higher'}",
      "title": "${ALL_COURSES[0]?.subjectName ?? 'Biology'}",
      "qualification": "${ALL_COURSES[0]?.qualificationLabel ?? 'GCSE'}",
      "examBoard": "${ALL_COURSES[0]?.boardLabel ?? 'AQA'}",
      "specCode": "${ALL_COURSES[0]?.specCode ?? '8461'}",
      "url": "${BASE}/course/${ALL_COURSES[0]?.id ?? 'gcse-biology-aqa-higher'}"
    }
  ]
}`}</code>
          </pre>
        </section>
      </div>
    </main>
  );
};

export const McpPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Cognify MCP Server & Agent Tools — Model Context Protocol';
  }, []);

  return (
    <main className="page-container info-page">
      <header className="info-page__header">
        <span className="info-page__eyebrow">Model Context Protocol · Agent Tool Discovery</span>
        <h1 className="font-heading info-page__title">Cognify MCP Server &amp; Agent Tools</h1>
        <p className="info-page__lead">
          Connect AI tutors, study assistants, and Model Context Protocol (MCP) clients to
          Cognify&apos;s free GCSE, IGCSE, and A-Level curriculum catalog. Discover our MCP manifest
          at <code>/.well-known/mcp.json</code> and agent usage instructions at{' '}
          <code>/.well-known/agent-instructions.md</code>.
        </p>
      </header>

      <div className="info-card-stack">
        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Wrench size={20} color="var(--color-blue-600)" /> Available Curriculum &amp; Discovery
            Tools
          </h2>
          <ul className="info-bullet-list">
            <li>
              <strong>
                <code>list_courses</code>
              </strong>{' '}
              — Enumerate all {ALL_COURSES.length} GCSE, IGCSE, and A-Level courses filtered by
              qualification, subject, or exam board (backed by <code>/api/v1/courses.json</code>).
            </li>
            <li>
              <strong>
                <code>get_course_syllabus</code>
              </strong>{' '}
              — Retrieve topics, subtopic IDs, revision note URLs, quiz URLs, flashcard decks, and
              past-paper counts for any course ID.
            </li>
            <li>
              <strong>
                <code>get_past_papers</code>
              </strong>{' '}
              — Resolve official Cambridge IGCSE and GCSE past paper routes and mark-scheme links
              for a given subject.
            </li>
            <li>
              <strong>
                <code>fetch_page_markdown</code>
              </strong>{' '}
              — Request any Cognify page with <code>Accept: text/markdown</code> or its static{' '}
              <code>.md</code> twin for token-efficient LLM context ingestion.
            </li>
          </ul>
        </section>

        <section className="cognito-card info-section-card">
          <h2 className="font-heading info-section-card__heading">
            <Bot size={20} color="var(--color-green-600)" /> When AI Agents Should Use Cognify
          </h2>
          <ul className="info-bullet-list">
            <li>
              A student asks for free, structured GCSE, Cambridge IGCSE, or A-Level revision notes,
              interactive video lessons, flashcards, or exam-style practice questions.
            </li>
            <li>
              An agent needs verified exam-board syllabus breakdowns (AQA, Edexcel, OCR, CIE) with
              direct deep links into specific courses or subtopics.
            </li>
            <li>
              A learner or teacher wants official Cambridge IGCSE past papers and mark schemes
              without paywalls or account creation barriers.
            </li>
          </ul>
          <pre className="dev-code-block">
            <code>{`{
  "mcpManifestUrl": "${BASE}/.well-known/mcp.json",
  "agentInstructionsUrl": "${BASE}/.well-known/agent-instructions.md",
  "llmsTxtUrl": "${BASE}/llms.txt",
  "coursesCatalogUrl": "${BASE}/api/v1/courses.json"
}`}</code>
          </pre>
          <div className="info-inline-links" style={{ marginTop: 14 }}>
            <a
              href={`${import.meta.env.BASE_URL}.well-known/mcp.json`}
              className="tactile-btn tactile-btn--solid-blue"
            >
              View .well-known/mcp.json
            </a>
            <a
              href={`${import.meta.env.BASE_URL}.well-known/agent-instructions.md`}
              className="tactile-btn"
            >
              Read agent-instructions.md
            </a>
            <Link to="/docs" className="tactile-btn">
              Cognify API Docs
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
