# Cognify — Remote Development & Content Expansion Plan

This document is the self-contained handoff and execution roadmap for continuing **Cognify** as a remote project (currently copied from the Cognito Clone baseline in `c:\Users\yosch\Downloads\Cognito Clone`).

---

## 1. Current State Summary (What Is Already Built & Verified)

### UI/UX & Interactive Features
- **Full Cognito-Style Study Workspace**: Light and Dark mode support, official SVG subject badges (`public/assets/cognito/subject-badges/*.svg`), and user avatars (`public/assets/cognito/avatars/*.svg`).
- **Notes Viewer & Active Recall (`src/pages/study/NotesViewerPage.tsx`)**:
  - Top video card with interactive clickable timestamps synced to note cards and `"Outside your course"` badges where applicable.
  - Note cards supporting `subsections` (`heading`, `bullets`, `exampleHeading`, `examples`, `diagram`), lavender `glossaryPills`, `memoryAid`, and `commonMistake` callouts.
  - Key Terms table with active-recall blur-to-reveal definitions (the blue `"TRY TO RECALL EACH DEFINITION, THEN TAP IT TO CHECK"` hint hides automatically once the student reveals at least 1 definition).
  - End-of-Notes recall checklist (`checklistPoints`).
- **Complete Study Suite**:
  - Quizzes (`QuizPlayerPage.tsx`: MCQ, multi-select, fill-in-the-blank)
  - Flashcards (`FlashcardsPlayerPage.tsx`)
  - Cheat Sheets (`CheatSheetsPage.tsx`)
  - Exam Practice (`ExamPracticePage.tsx` with keyword/numeric rubric grading in `src/utils/grader.ts`)
  - Past Papers (`PastPapersTab.tsx`)
  - Quick Search modal, Revision Session Builder, Teacher Tools, XP & Streak tracking (`src/store/AppContext.tsx`).
- **100% Paywall-Free**: Zero upgrade gates, zero locked features.

### Auto-Completeness Layer (`src/data/contentCompleteness.ts`)
`ensureCompleteCourseContent` wraps `ALL_COURSES` and `resolveCourseVariant` in `src/data/catalog.ts`. Once any course defines complete `topics` and `notes`, it automatically guarantees:
- Merged `keyTerms` combining `lesson.keyTerms` and every card's `glossaryPills`
- `>= 5` quiz questions per subtopic
- `>= 5` flashcards per subtopic (`totalFlashcardsCount: course.isMaths ? 0 : flashcards.length`)
- `>= 1` multi-part exam practice question per subtopic
- `1` CheatSheet item per topic
- `>= 6` past papers per course

### Current Curriculum Coverage

| Qualification | Subject | Status | File / Subtopics |
| --- | --- | --- | --- |
| **GCSE** | Biology, Chemistry, Physics, Maths, Business, Economics | Complete / Unlocked | `biologyAqa.ts`, `chemistryAqa.ts`, `physicsAqa.ts`, `mathsGcse.ts`, `igcseBusiness.ts` (28 subs, Mr Lee), `economics.ts` (33 subs, Mr Lee) |
| **IGCSE** | Biology (`0610`) | Full Notes (`igbio-1-1`..`10-1`) | `src/data/courses/igcseBiology.ts` (20 subtopics) |
| **IGCSE** | Chemistry (`0620`) | Full Notes | `src/data/courses/igcseChemistry.ts` (16 subtopics) |
| **IGCSE** | Physics (`0625`) | Full Notes | `src/data/courses/igcsePhysics.ts` (16 subtopics) |
| **IGCSE** | Maths (`0580` / `4MA1`) | Full Notes | `src/data/courses/igcseMaths.ts` (15 subtopics) |
| **IGCSE** | Business Studies (`0450` / `0264`) | Complete 6 Units (100% Mr Lee) | `src/data/courses/igcseBusiness.ts` + `business/igcse*.ts` (28 subtopics, 6 units) |
| **IGCSE** | Computer Science (`0478`) | Complete | `src/data/courses/computerScience.ts` (8 subtopics) |
| **IGCSE** | Economics (`0455`, 2027 spec) | Complete 6 Units (100% Mr Lee) | `src/data/courses/economics.ts` + `economics/igcse*.ts` (33 subtopics, 6 units) |
| **IGCSE** | English Language (`0500`) | Complete | `src/data/courses/englishLanguage.ts` (6 subtopics) |
| **A-Level** | Biology (`7402` / `9700`) | Full Notes | `src/data/courses/alevelBiology.ts` (16 subtopics) |
| **A-Level** | Chemistry (`7405` / `9701`) | Full Notes | `src/data/courses/alevelChemistry.ts` (16 subtopics) |
| **A-Level** | Physics (`7408` / `9702`) | Full Notes | `src/data/courses/alevelPhysics.ts` (16 subtopics) |
| **A-Level** | Maths (`9MA0` / `9709`) | Full Notes | `src/data/courses/alevelMaths.ts` (15 subtopics) |
| **A-Level** | Psychology (`9990` / `7182`) | Full Notes | `src/data/courses/alevelPsychology.ts` (18 subtopics) |
| **A-Level** | Business (`7132` / `9609`) | Complete 6 Units (100% Mr Lee) | `src/data/courses/alevelBusiness.ts` + `business/alevel*.ts` (16 subtopics, official CIE 9609 PDFs) |
| **A-Level** | Economics (`7136` / `9708`) | Complete 6 Units (100% Mr Lee) | `src/data/courses/alevelEconomics.ts` + `economics/alevel*.ts` (16 subtopics, official CIE 9708 PDFs) |

### Verified YouTube Resource Pool & Scripts
- [`docs/yt_verified_pool.json`](./docs/yt_verified_pool.json) holds 1,300+ real YouTube videos collected across educational channels; [`docs/mr_lee_verified_videos.json`](./docs/mr_lee_verified_videos.json) holds 107 HTTP-200 verified `Mr Lee - Business Econ` (`@Mrlee-business-econ`) videos powering 100% of GCSE/IGCSE/A-Level Economics & Business lessons.
- [`scripts/verify_youtube_oembed.mjs`](./scripts/verify_youtube_oembed.mjs) recursively scans `src/data/courses/**/*.ts` and verifies every unique `youtubeId` against YouTube oEmbed (`HTTP 200`).
- [`scripts/audit_study_content.mjs`](./scripts/audit_study_content.mjs) (`npm run audit:content` / `npm run audit:content:write` → `docs/STUDY_CONTENT_REPORT.md`) grades all 8 Economics & Business courses out of 100/100 across 10 strict pedagogical dimensions using the live production grader (`src/utils/grader.ts`).

---

## 2. Phase-by-Phase Roadmap (What To Do Next)

### Phase 1 — Brand Switch to Cognify *(Confirm with User First)*
- Update `package.json` `"name": "cognify"`.
- Update `index.html` `<title>` and metadata.
- Update wordmark/brand text in `src/components/artwork/CognitoLogo.tsx`, `src/components/layout/TopNav.tsx`, and `src/pages/HelpFaqPage.tsx`.
- Keep `localStorage` persistence backward-compatible with `cognito_clone_v1` so existing student progress migrates seamlessly while preserving the pastel Cognito-style UI.

### Phase 2 — Upgrade Existing IGCSE & A-Level Notes to Full Cognito Intuition Standard
Replicate the benchmark card style used in `igbio-1-2` (`src/data/courses/igcseBiology.ts`): plain-English student explanations, structured `subsections` (`heading`, `bullets`, `exampleHeading`, `examples`, optional `diagram`), lavender `glossaryPills`, `memoryAid`, and `commonMistake` callouts.

1. **`src/data/courses/igcseBiology.ts`**: Rewrite `igbio-1-1` (*1.1 - Characteristics of Living Organisms*) to include Cognito `subsections` + concrete plant/animal `Examples:`, and enrich `igbio-1-3`..`igbio-10-1` wherever `subsections` are missing.
2. **`src/data/courses/alevelChemistry.ts` & `src/data/courses/alevelPhysics.ts`**: Expand all 16 subtopics in each file to **3 deep Cognito cards** featuring `subsections`, step-by-step `Worked example:` calculations (`Step 1`, `Step 2`, ...), intuitive physical/chemical explanations, `glossaryPills`, `memoryAid`, and `commonMistake`.
3. **Foundational Subtopic Polish**: Add `subsections` and `Worked example:` / `Examples:` blocks to foundational subtopics in `igcseChemistry.ts`, `igcsePhysics.ts`, `igcseMaths.ts`, `igcseBusiness.ts`, `alevelBiology.ts`, and `alevelMaths.ts`.

### Phase 3 — Build All Missing IGCSE Subjects (Completed: 13/13 Subjects, Zero `pastPapersOnly`)
Full IGCSE list (13/13 unlocked): `biology`, `chemistry`, `physics`, `maths`, `business` (28 chapters, Mr Lee), `computer-science`, `economics` (33 chapters, Mr Lee), `english-language`, `english-literature`, `geography`, `history`, `french`, `spanish`.

### Phase 4 — Build All Missing A-Level Subjects (Progress: 7/14 Unlocked — Business & Economics Shipped!)
- **Completed**:
  - `src/data/courses/alevelEconomics.ts` + `economics/alevel*.ts` (6 units / 16 chapters — 100% verified Mr Lee videos + official CIE 9708 PDFs)
  - `src/data/courses/alevelBusiness.ts` + `business/alevel*.ts` (6 units / 16 chapters — 100% verified Mr Lee videos + official CIE 9609 PDFs)
- **Remaining**:
  1. `ALEVEL_CS_BUNDLE` (6 topics / 12 subtopics — Craig'n'Dave)
  2. `ALEVEL_FURTHER_MATHS_BUNDLE` (5 topics / 10 subtopics — TLMaths / Bicen Maths)
  3. `ALEVEL_GEOGRAPHY_BUNDLE`, `ALEVEL_HISTORY_BUNDLE`, `ALEVEL_SOCIOLOGY_BUNDLE`, `ALEVEL_ENGLISH_LIT_BUNDLE`, `ALEVEL_RS_BUNDLE`.

Full target A-Level list (14 unlocked): `biology`, `chemistry`, `physics`, `maths`, `business`, `economics`, `psychology` (done) + `further-maths`, `computer-science`, `geography`, `history`, `sociology`, `english-literature`, `religious-studies` (next).

### Phase 5 — Wire Types, Subject Icons, Theme CSS, and Catalog
- `src/types/curriculum.ts`: add `'sociology'` to `SubjectIconId` (verify whether `'further-maths'` needs a separate icon id or reuses `'maths'` cleanly).
- `src/components/artwork/SubjectIcons.tsx`: map `'sociology': '/assets/cognito/subject-badges/sociology.svg'` (SVG already exists in `public/assets/cognito/subject-badges/sociology.svg`).
- `src/styles/components.css`: add theme token classes (light + dark mode) for `.subject-theme--sociology`, `.subject-theme--english-literature`, `.subject-theme--rs`, `.subject-theme--further-maths`, `.subject-theme--french`, `.subject-theme--spanish`.
- `src/data/catalog.ts`:
  - Expand `ALEVEL_SUBJECTS` toward all 14 unlocked subjects as remaining bundles land.

### Phase 6 — Full Automated & Visual Verification
- Run `npm run verify:youtube`, `npm run audit:content -- --strict`, `npm run audit:learning`, `npm run audit:ui`, and `npm run check` — all must exit `0` with `100/100` scores.

### Phase 7 — Deployment & Remote Hosting *(Shipped on GitHub Pages)*
- Static `dist/` output deployed to GitHub Pages with SPA fallback and prerendered agent routes.

---

## 3. Critical Technical Reference & Guardrails (for Remote Agents)

### Valid `DiagramKind` Union (`src/types/curriculum.ts`)
Only use these 32 registered diagram identifiers unless you also implement and export the new diagram in `src/components/artwork/Diagrams.tsx`:
- `eukaryotic-vs-prokaryotic`, `root-hair-vs-palisade`, `microscope`, `atomic-structure`, `circuit-series-parallel`, `transverse-wave`, `bacterial-cell`, `virus-particle`, `enzyme-lock-key`, `osmosis-membrane`, `mitosis-cycle`, `ionic-covalent-bonding`, `exothermic-endothermic`, `reflex-arc`, `forces-free-body`, `multi-store-memory`, `synaptic-transmission`, `photosynthesis-chloroplast`
- `quadratic-graph`, `right-triangle-trig`, `supply-demand-equilibrium`, `production-possibility-curve`, `cpu-fde-architecture`, `logic-gates-truth`, `tectonic-plate-margins`, `break-even-chart`
- `product-life-cycle`, `business-cycle`, `elasticity-curves`, `ad-as-macro`, `monopoly-market-structure`, `externality-market-failure`

### Test & Integrity Constraints
- **`src/__tests__/paywallFree.test.tsx`**: Keep zero paywall or `"Upgrade"` prompts across UI and data, and preserve the unique `"White blood cell"` key-term match inside `src/data/courses/biologyAqa.ts` (note how `contentCompleteness.ts` intentionally sanitizes incidental `"white blood cell"` mentions elsewhere unless the term itself is `"White blood cell"`).
- **YouTube Verification Rule**: Every `youtubeId` MUST return HTTP `200` on `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json`. Never scrape `youtube.com/results` in tight loops (triggers HTTP failures / consent redirects); prefer `docs/yt_verified_pool.json` or YouTube Atom XML feeds (`https://www.youtube.com/feeds/videos.xml?channel_id=...` or `?playlist_id=...`) followed by `node scripts/verify_youtube_oembed.mjs`.
