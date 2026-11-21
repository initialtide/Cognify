# Cognify

100% free, zero-paywall GCSE, IGCSE, and A-Level interactive revision web application — inspired by Cognito with plain-English notes, timestamped videos, custom pastel SVG diagrams, active-recall blurred key terms, quizzes, flashcards, cheat sheets, exam practice, and past papers.

## Features

- **Structured Study Workspace**: Clean 4-column desktop layout (Quick Nav, Main Notes/Players, Key Terms & End-of-Notes checklist) in both Light and Dark themes.
- **Interactive Video & Notes**: Embedded YouTube lessons with interactive clickable timestamp sections matched to the active course specification.
- **Active Recall Built In**: Blurred Key Terms definitions with tap-to-reveal recall, multi-format Quizzes (`mcq`, `multi-select`, `fill-blank`), spaced Flashcards, printable Cheat Sheets, rubric-graded Exam Practice, and Past Papers.
- **Zero Paywalls**: All subjects, revision tools, progress tracking, Revision Session Builder, and Teacher Tools are unlocked by default.

## Quick Start

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run typecheck                  # TypeScript strict check (tsc --noEmit)
npm run test                       # Run Vitest unit & curriculum integrity tests
npm run build                      # Typecheck + production Vite bundle
node scripts/verify_youtube_oembed.mjs  # Verify all youtubeId values return HTTP 200 via oEmbed
```

## Tech Stack

- **React 19** + **TypeScript 5.7**
- **Vite 7** + **React Router 7**
- **Lucide React**
- **Vitest** + **Testing Library** + **jsdom**

## Remote Development Roadmap

See [`PLAN.md`](./PLAN.md) for the complete architecture notes, current curriculum coverage, verified YouTube video pool (`docs/yt_verified_pool.json`), and step-by-step roadmap for expanding all remaining IGCSE and A-Level subjects.
