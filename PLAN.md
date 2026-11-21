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
| **GCSE** | Biology, Chemistry, Physics, Maths | Complete / Baseline | `biologyAqa.ts`, `chemistryAqa.ts`, `physicsAqa.ts`, `mathsGcse.ts` |
| **IGCSE** | Biology (`0610`) | Full Notes (`igbio-1-1`..`10-1`) | `src/data/courses/igcseBiology.ts` (20 subtopics — needs `subsections` enrichment on shallow subtopics) |
| **IGCSE** | Chemistry (`0620`) | Full Notes | `src/data/courses/igcseChemistry.ts` (16 subtopics) |
| **IGCSE** | Physics (`0625`) | Full Notes | `src/data/courses/igcsePhysics.ts` (16 subtopics) |
| **IGCSE** | Maths (`0580` / `4MA1`) | Full Notes | `src/data/courses/igcseMaths.ts` (15 subtopics) |
| **IGCSE** | Business Studies (`0450`) | Full Notes | `src/data/courses/igcseBusiness.ts` (12 subtopics) |
| **IGCSE** | Computer Science (`0478`) | `pastPapersOnly` stub | Replace in `src/data/catalog.ts` |
| **IGCSE** | Economics (`0455`) | `pastPapersOnly` stub | Replace in `src/data/catalog.ts` |
| **IGCSE** | English Language (`0500`) | `pastPapersOnly` stub | Replace in `src/data/catalog.ts` |
| **A-Level** | Biology (`7402`) | Full Notes | `src/data/courses/alevelBiology.ts` (16 subtopics) |
| **A-Level** | Chemistry (`7405`) | Full Notes (needs deeper 3rd cards) | `src/data/courses/alevelChemistry.ts` (16 subtopics) |
| **A-Level** | Physics (`7408`) | Full Notes (needs deeper 3rd cards) | `src/data/courses/alevelPhysics.ts` (16 subtopics) |
| **A-Level** | Maths (`9MA0` / `9709`) | Full Notes | `src/data/courses/alevelMaths.ts` (15 subtopics) |
| **A-Level** | Psychology (`9990`) | Full Notes | `src/data/courses/alevelPsychology.ts` (18 subtopics) |

### Verified YouTube Resource Pool & Script
- [`docs/yt_verified_pool.json`](./docs/yt_verified_pool.json) holds 1,300+ real YouTube videos collected across educational channels (Craig'n'Dave, EconplusDal, Mr Bruff, First Rate Tutors, TLMaths, Bicen Maths, tutor2u, Cognito, Internet Geography, History Matters, Simple History, Learn French with Alexa, Butterfly Spanish, Ben Wardle, CrashCourse, TakingTheBiz, plus 30 pre-verified CS/Business IDs).
- [`scripts/verify_youtube_oembed.mjs`](./scripts/verify_youtube_oembed.mjs) scans `src/data/courses/*.ts` and verifies every unique `youtubeId` against YouTube oEmbed (`HTTP 200`).

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

### Phase 3 — Build All Missing IGCSE Subjects (Target: 13 Subjects, Zero `pastPapersOnly`)
Create the following `CourseContentBundle` files using verified YouTube IDs from `docs/yt_verified_pool.json`:

1. `src/data/courses/igcseComputerScience.ts` (`IGCSE_CS_BUNDLE` — CIE 0478, 6 topics / 12 subtopics; Craig'n'Dave videos)
2. `src/data/courses/igcseEconomics.ts` (`IGCSE_ECONOMICS_BUNDLE` — CIE 0455, 6 topics / 12 subtopics; EconplusDal videos)
3. `src/data/courses/igcseEnglishLanguage.ts` (`IGCSE_ENGLISH_LANG_BUNDLE` — CIE 0500, 4 topics / 8 subtopics; First Rate Tutors / Mr Bruff videos)
4. `src/data/courses/igcseHumanitiesLanguages.ts` exporting:
   - `IGCSE_GEOGRAPHY_BUNDLE` (`internetgeography` / `timeforgeography`)
   - `IGCSE_HISTORY_BUNDLE` (`historymatters` / `simplehistory`)
   - `IGCSE_ENGLISH_LIT_BUNDLE` (`mrbruff` / `firstratetutors`)
   - `IGCSE_FRENCH_BUNDLE` (`learnfrenchalexa`)
   - `IGCSE_SPANISH_BUNDLE` (`butterflyspanish`)

Full target IGCSE list (13 unlocked): `biology`, `chemistry`, `physics`, `maths`, `business`, `computer-science`, `economics`, `english-language`, `english-literature`, `geography`, `history`, `french`, `spanish`.

### Phase 4 — Build All Missing A-Level Subjects (Target: 14 Subjects, Zero `pastPapersOnly`)
Create the following `CourseContentBundle` modules:

1. `src/data/courses/alevelEconomicsBusinessCS.ts` exporting:
   - `ALEVEL_ECONOMICS_BUNDLE` (6 topics / 12 subtopics — EconplusDal)
   - `ALEVEL_BUSINESS_BUNDLE` (6 topics / 12 subtopics — TakingTheBiz / tutor2u)
   - `ALEVEL_CS_BUNDLE` (6 topics / 12 subtopics — Craig'n'Dave)
2. `src/data/courses/alevelHumanitiesFurtherMaths.ts` exporting:
   - `ALEVEL_FURTHER_MATHS_BUNDLE` (5 topics / 10 subtopics — TLMaths / Bicen Maths)
   - `ALEVEL_GEOGRAPHY_BUNDLE` (4 topics / 8 subtopics)
   - `ALEVEL_HISTORY_BUNDLE` (4 topics / 8 subtopics)
   - `ALEVEL_SOCIOLOGY_BUNDLE` (4 topics / 8 subtopics — fetch/verify A-Level Sociology YouTube IDs via oEmbed, note `tutor2u` and `TheHecticTeacher` RSS/channel lookup)
   - `ALEVEL_ENGLISH_LIT_BUNDLE` (3 topics / 6 subtopics)
   - `ALEVEL_RS_BUNDLE` (3 topics / 6 subtopics — Ben Wardle / CrashCourse Philosophy)

Full target A-Level list (14 unlocked): `biology`, `chemistry`, `physics`, `maths`, `further-maths`, `psychology`, `economics`, `business`, `computer-science`, `geography`, `history`, `sociology`, `english-literature`, `religious-studies`.

### Phase 5 — Wire Types, Subject Icons, Theme CSS, and Catalog
- `src/types/curriculum.ts`: add `'sociology'` to `SubjectIconId` (verify whether `'further-maths'` needs a separate icon id or reuses `'maths'` cleanly).
- `src/components/artwork/SubjectIcons.tsx`: map `'sociology': '/assets/cognito/subject-badges/sociology.svg'` (SVG already exists in `public/assets/cognito/subject-badges/sociology.svg`).
- `src/styles/components.css`: add theme token classes (light + dark mode) for `.subject-theme--sociology`, `.subject-theme--english-literature`, `.subject-theme--rs`, `.subject-theme--further-maths`, `.subject-theme--french`, `.subject-theme--spanish`.
- `src/data/catalog.ts`:
  - Expand `IGCSE_SUBJECTS` (13 unlocked) and `ALEVEL_SUBJECTS` (14 unlocked).
  - Replace the 3 IGCSE `pastPapersOnly` stubs (`igcse-computer-science-cie`, `igcse-economics-cie`, `igcse-english-language-cie` or exact catalog IDs) with `buildCourseFromBundle`.
  - Register all new IGCSE & A-Level courses in `RAW_COURSES`.
  - Update `getBoardsForQualification` and `getTiersForQualification` for all new subject slugs (`further-maths`, `business`, `economics`, `computer-science`, `sociology`, `religious-studies`, `english-literature`, `geography`, `history`, `french`, `spanish`).

### Phase 6 — Full Automated & Visual Verification
- Upgrade `src/__tests__/igcseAlevelNotes.test.ts` to assert all 13 IGCSE and 14 A-Level subjects have:
  - `pastPapersOnly` falsy
  - Complete `notes` covering every subtopic
  - `>= 2` cards per lesson, `>= 3` strictly ascending timestamps, valid 11-character `youtubeId`, and valid `DiagramKind` values
  - `>= 5` quizzes & flashcards per subtopic (except `isMaths` flashcards), `>= 1` `examPractice` per subtopic, `>= topics.length` `cheatSheets`, and `>= 6` `pastPapers`.
- Run `node scripts/verify_youtube_oembed.mjs` and replace any non-200 video IDs.
- Run `npm run typecheck`, `npm run test`, and `npm run build` — all must exit `0`.
- Visually inspect `/courses/igcse`, `/courses/a-level`, and newly added note pages in both Light and Dark mode with zero console errors and zero broken SVG/image assets.

### Phase 7 — Deployment & Remote Hosting *(Optional Next)*
- Deploy static `dist/` output to Vercel, Netlify, or GitHub Pages.
- Configure SPA history fallback rewrite (`/* -> /index.html`) so deep client routes like `/course/.../notes/...` work on hard refresh.

---

## 3. Critical Technical Reference & Guardrails (for Remote Agents)

### Valid `DiagramKind` Union (`src/types/curriculum.ts`)
Only use these 18 registered diagram identifiers unless you also implement and export the new diagram in `src/components/artwork/Diagrams.tsx`:
- `eukaryotic-vs-prokaryotic`
- `root-hair-vs-palisade`
- `microscope`
- `atomic-structure`
- `circuit-series-parallel`
- `transverse-wave`
- `bacterial-cell`
- `virus-particle`
- `enzyme-lock-key`
- `osmosis-membrane`
- `mitosis-cycle`
- `ionic-covalent-bonding`
- `exothermic-endothermic`
- `reflex-arc`
- `forces-free-body`
- `multi-store-memory`
- `synaptic-transmission`
- `photosynthesis-chloroplast`

### Test & Integrity Constraints
- **`src/__tests__/paywallFree.test.tsx`**: Keep zero paywall or `"Upgrade"` prompts across UI and data, and preserve the unique `"White blood cell"` key-term match inside `src/data/courses/biologyAqa.ts` (note how `contentCompleteness.ts` intentionally sanitizes incidental `"white blood cell"` mentions elsewhere unless the term itself is `"White blood cell"`).
- **YouTube Verification Rule**: Every `youtubeId` MUST return HTTP `200` on `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json`. Never scrape `youtube.com/results` in tight loops (triggers HTTP failures / consent redirects); prefer `docs/yt_verified_pool.json` or YouTube Atom XML feeds (`https://www.youtube.com/feeds/videos.xml?channel_id=...` or `?playlist_id=...`) followed by `node scripts/verify_youtube_oembed.mjs`.
