import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const TARGET_IGCSE_SLUGS = [
  'biology',
  'chemistry',
  'physics',
  'maths',
  'business',
  'computer-science',
  'economics',
  'english-language',
  'english-literature',
  'geography',
  'history',
  'french',
  'spanish',
];

const TARGET_ALEVEL_SLUGS = [
  'biology',
  'chemistry',
  'physics',
  'maths',
  'further-maths',
  'psychology',
  'economics',
  'business',
  'computer-science',
  'geography',
  'history',
  'sociology',
  'english-literature',
  'religious-studies',
];

async function loadCatalog() {
  const entry = path.join(ROOT_DIR, 'src', 'data', 'catalog.ts');
  const tmpFile = path.join(
    os.tmpdir(),
    `cognify-catalog-${process.pid}-${Date.now()}.mjs`
  );

  try {
    await build({
      entryPoints: [entry],
      outfile: tmpFile,
      bundle: true,
      format: 'esm',
      platform: 'node',
      target: 'node22',
      logLevel: 'silent',
    });
    return await import(pathToFileURL(tmpFile).href);
  } finally {
    if (fs.existsSync(tmpFile)) {
      fs.unlinkSync(tmpFile);
    }
  }
}

function scoreLesson(lesson, qualification) {
  const cards = lesson?.cards ?? [];
  const isALevel = qualification === 'a-level';

  // 1. Card depth (20 pts)
  let cardScore = 0;
  if (isALevel) {
    cardScore = cards.length >= 3 ? 20 : cards.length === 2 ? 12 : 0;
  } else {
    cardScore = cards.length >= 3 ? 20 : cards.length === 2 ? 16 : 0;
  }

  // 2. Structured subsections (20 pts)
  const cardsWithSubsections = cards.filter(
    (c) => Array.isArray(c.subsections) && c.subsections.length > 0
  ).length;
  const subsectionRatio = cards.length > 0 ? cardsWithSubsections / cards.length : 0;
  const subsectionScore = Math.round(Math.min(1, subsectionRatio / 0.5) * 20);

  // 3. Concrete examples / worked examples (15 pts)
  const exampleCount = cards.reduce((acc, c) => {
    const subs = c.subsections ?? [];
    return (
      acc +
      subs.reduce((sAcc, s) => sAcc + (Array.isArray(s.examples) ? s.examples.length : 0), 0)
    );
  }, 0);
  const exampleScore = exampleCount > 0 ? 15 : 0;

  // 4. Interactive glossary pills (15 pts)
  const pillCount = cards.reduce(
    (acc, c) => acc + (Array.isArray(c.glossaryPills) ? c.glossaryPills.length : 0),
    0
  );
  const pillScore = pillCount >= 3 ? 15 : pillCount >= 1 ? 9 : 0;

  // 5. Common mistake misconception prevention (10 pts)
  const hasCommonMistake = cards.some(
    (c) => typeof c.commonMistake === 'string' && c.commonMistake.trim().length > 0
  );
  const commonMistakeScore = hasCommonMistake ? 10 : 0;

  // 6. Memory aid / intuition anchor (10 pts)
  const hasMemoryAid = cards.some(
    (c) => typeof c.memoryAid === 'string' && c.memoryAid.trim().length > 0
  );
  const memoryAidScore = hasMemoryAid ? 10 : 0;

  // 7. Video timestamps + recall checklist sync (10 pts)
  const timestamps = lesson?.timestamps ?? [];
  const linkedTimestamps = timestamps.filter((t) => Boolean(t.cardId)).length;
  const checklistCount = (lesson?.checklistPoints ?? []).filter(
    (p) => typeof p === 'string' && p.trim().length > 0
  ).length;
  const syncScore =
    (timestamps.length >= 3 && linkedTimestamps >= 2 ? 5 : 0) +
    (checklistCount >= 3 ? 5 : checklistCount >= 1 ? 3 : 0);

  const total =
    cardScore +
    subsectionScore +
    exampleScore +
    pillScore +
    commonMistakeScore +
    memoryAidScore +
    syncScore;

  const gaps = [];
  if (isALevel && cards.length < 3) gaps.push(`only ${cards.length} cards (target >=3)`);
  if (cardsWithSubsections === 0) gaps.push('no subsections');
  if (exampleCount === 0) gaps.push('no worked/concrete examples');
  if (pillCount === 0) gaps.push('no glossaryPills');
  if (!hasCommonMistake) gaps.push('no commonMistake');
  if (!hasMemoryAid) gaps.push('no memoryAid');

  const hasDiagram = cards.some(
    (c) => Boolean(c.diagram) || (c.subsections ?? []).some((s) => Boolean(s.diagram))
  );

  return {
    score: total,
    cardCount: cards.length,
    cardsWithSubsections,
    exampleCount,
    pillCount,
    hasCommonMistake,
    hasMemoryAid,
    hasDiagram,
    gaps,
  };
}

function normalizeForGradability(raw) {
  return String(raw ?? '')
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9.×xμµ\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isMarkPointGradable(mp) {
  if (!mp || typeof mp !== 'object') return false;
  if (mp.numericMatch) {
    return (
      typeof mp.numericMatch.value === 'number' &&
      Number.isFinite(mp.numericMatch.value) &&
      typeof mp.numericMatch.tolerance === 'number' &&
      Number.isFinite(mp.numericMatch.tolerance) &&
      mp.numericMatch.tolerance >= 0
    );
  }
  if (!Array.isArray(mp.requiredKeywordGroups) || mp.requiredKeywordGroups.length === 0) {
    return false;
  }
  return mp.requiredKeywordGroups.every(
    (group) =>
      Array.isArray(group) &&
      group.length > 0 &&
      group.some((kw) => typeof kw === 'string' && normalizeForGradability(kw).length > 0)
  );
}

function auditCourseAssessments(course, subtopicCount) {
  const quizzes = Array.isArray(course.quizzes) ? course.quizzes : [];
  const flashcards = Array.isArray(course.flashcards) ? course.flashcards : [];
  const examPractice = Array.isArray(course.examPractice) ? course.examPractice : [];
  const cheatSheets = Array.isArray(course.cheatSheets) ? course.cheatSheets : [];
  const topicCount = Array.isArray(course.topics) ? course.topics.length : 0;

  let explicitQuizCount = 0;
  let bakedQuizCount = 0;
  let runtimeSynQuizCount = 0;

  for (const q of quizzes) {
    const id = String(q?.id ?? '');
    if (/-syn-/i.test(id)) {
      runtimeSynQuizCount++;
    } else if (/-extra-/i.test(id)) {
      bakedQuizCount++;
    } else {
      explicitQuizCount++;
    }
  }

  let explicitFlashcardCount = 0;
  let bakedFlashcardCount = 0;
  let runtimeSynFlashcardCount = 0;

  for (const f of flashcards) {
    const id = String(f?.id ?? '');
    if (/-syn-/i.test(id)) {
      runtimeSynFlashcardCount++;
    } else if (/-extra-/i.test(id)) {
      bakedFlashcardCount++;
    } else {
      explicitFlashcardCount++;
    }
  }

  let explicitExamCount = 0;
  let bakedExamCount = 0;
  let runtimeSynExamCount = 0;

  for (const e of examPractice) {
    const id = String(e?.id ?? '');
    const stimulus = String(e?.stimulus ?? '');
    if (/-exam-syn-|-syn-|^exam-syn-/i.test(id)) {
      runtimeSynExamCount++;
    } else if (/-extra-/i.test(id) || /^Structured exam question on Topic\b/i.test(stimulus)) {
      bakedExamCount++;
    } else {
      explicitExamCount++;
    }
  }

  let explicitCheatSheetCount = 0;
  let runtimeSynCheatSheetCount = 0;

  for (const cs of cheatSheets) {
    const id = String(cs?.id ?? '');
    if (/-cs-(?:syn-)?topic-|^syn-cs-topic-/i.test(id)) {
      runtimeSynCheatSheetCount++;
    } else {
      explicitCheatSheetCount++;
    }
  }

  let totalShortAnswerMarkPoints = 0;
  let gradableShortAnswerMarkPoints = 0;
  let ungradableShortAnswerMarkPoints = 0;

  const inspectRubric = (rubric, fallbackMarks) => {
    const markPoints = rubric?.markPoints;
    if (!Array.isArray(markPoints) || markPoints.length === 0) {
      const missingCount = Math.max(1, Number(fallbackMarks) || 1);
      totalShortAnswerMarkPoints += missingCount;
      ungradableShortAnswerMarkPoints += missingCount;
      return;
    }
    for (const mp of markPoints) {
      totalShortAnswerMarkPoints++;
      if (isMarkPointGradable(mp)) {
        gradableShortAnswerMarkPoints++;
      } else {
        ungradableShortAnswerMarkPoints++;
      }
    }
  };

  for (const q of quizzes) {
    if (q?.type === 'short-answer') {
      inspectRubric(q.rubric, q.marks);
    }
  }

  for (const ex of examPractice) {
    for (const part of ex?.parts ?? []) {
      if (part?.kind === 'short-answer') {
        inspectRubric(part.rubric, part.marks);
      }
    }
  }

  const gradableRubricPct =
    totalShortAnswerMarkPoints === 0
      ? 100
      : Math.round((gradableShortAnswerMarkPoints / totalShortAnswerMarkPoints) * 100);

  return {
    explicitQuizCount,
    explicitFlashcardCount,
    explicitExamCount,
    explicitCheatSheetCount,
    explicitQuizzesPerSubtopic:
      subtopicCount > 0 ? Number((explicitQuizCount / subtopicCount).toFixed(1)) : 0,
    explicitFlashcardsPerSubtopic:
      subtopicCount > 0 ? Number((explicitFlashcardCount / subtopicCount).toFixed(1)) : 0,
    explicitExamsPerSubtopic:
      subtopicCount > 0 ? Number((explicitExamCount / subtopicCount).toFixed(1)) : 0,
    explicitCheatSheetsPerTopic:
      topicCount > 0 ? Number((explicitCheatSheetCount / topicCount).toFixed(1)) : 0,
    bakedExtraCount: bakedQuizCount + bakedFlashcardCount + bakedExamCount,
    runtimeSynCount:
      runtimeSynQuizCount +
      runtimeSynFlashcardCount +
      runtimeSynExamCount +
      runtimeSynCheatSheetCount,
    totalShortAnswerMarkPoints,
    gradableShortAnswerMarkPoints,
    ungradableShortAnswerMarkPoints,
    gradableRubricPct,
  };
}

function summarizeSubjectCoverage(catalogSubjects, targetSlugs) {
  const bySlug = new Map(catalogSubjects.map((s) => [s.slug, s]));
  const unlocked = [];
  const stubs = [];
  const missing = [];

  for (const slug of targetSlugs) {
    const item = bySlug.get(slug);
    if (!item) {
      missing.push(slug);
    } else if (item.pastPapersOnly) {
      stubs.push(slug);
    } else {
      unlocked.push(slug);
    }
  }

  return {
    targetCount: targetSlugs.length,
    unlocked,
    stubs,
    missing,
  };
}

const QUAL_RANK = {
  'igcse': 1,
  'a-level': 2,
  'gcse': 3,
};

function selectCanonicalCourses(allCourses) {
  // Deduplicate board/tier/qualification aliases that share the exact same underlying subtopic bundle
  const byBundle = new Map();
  for (const course of allCourses) {
    if (course.pastPapersOnly || !course.topics || course.topics.length === 0) continue;
    const subIds = course.topics.flatMap((t) => t.subtopics.map((s) => s.id));
    if (subIds.length === 0) continue;
    const bundleKey = `${subIds[0]}::${subIds.length}`;
    const rank = QUAL_RANK[course.qualification] ?? 9;
    const existing = byBundle.get(bundleKey);
    if (!existing) {
      byBundle.set(bundleKey, { course, rank, aliases: 1 });
    } else {
      existing.aliases += 1;
      if (rank < existing.rank || (rank === existing.rank && course.id.localeCompare(existing.course.id) < 0)) {
        existing.course = course;
        existing.rank = rank;
      }
    }
  }
  return Array.from(byBundle.values())
    .map((v) => ({ ...v.course, _aliasCount: v.aliases }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

function buildReport(catalog) {
  const canonicalCourses = selectCanonicalCourses(catalog.ALL_COURSES);
  const courseSummaries = [];
  const allLessonAudit = [];

  for (const course of canonicalCourses) {
    const subtopics = course.topics.flatMap((t) => t.subtopics);
    let scoreSum = 0;
    let withSubsections = 0;
    let withExamples = 0;
    let withCommonMistake = 0;
    let withMemoryAid = 0;
    let withDiagram = 0;
    let underTargetCards = 0;

    for (const sub of subtopics) {
      const lesson = course.notes?.[sub.id];
      const metrics = scoreLesson(lesson, course.qualification);
      scoreSum += metrics.score;
      if (metrics.cardsWithSubsections > 0) withSubsections++;
      if (metrics.exampleCount > 0) withExamples++;
      if (metrics.hasCommonMistake) withCommonMistake++;
      if (metrics.hasMemoryAid) withMemoryAid++;
      if (metrics.hasDiagram) withDiagram++;
      if (course.qualification === 'a-level' && metrics.cardCount < 3) underTargetCards++;

      allLessonAudit.push({
        courseId: course.id,
        qualification: course.qualification,
        subjectName: course.subjectName,
        subtopicId: sub.id,
        subtopicCode: sub.code,
        subtopicTitle: sub.title,
        ...metrics,
      });
    }

    const avgScore = subtopics.length > 0 ? Math.round(scoreSum / subtopics.length) : 0;
    const assessment = auditCourseAssessments(course, subtopics.length);
    courseSummaries.push({
      courseId: course.id,
      qualification: course.qualification,
      subjectName: course.subjectName,
      topicCount: course.topics.length,
      subtopicCount: subtopics.length,
      avgScore,
      subsectionPct: Math.round((withSubsections / subtopics.length) * 100),
      examplePct: Math.round((withExamples / subtopics.length) * 100),
      commonMistakePct: Math.round((withCommonMistake / subtopics.length) * 100),
      memoryAidPct: Math.round((withMemoryAid / subtopics.length) * 100),
      diagramCount: withDiagram,
      underTargetCards,
      ...assessment,
    });
  }

  const totalSubtopics = allLessonAudit.length;
  const totalTopics = courseSummaries.reduce((acc, c) => acc + c.topicCount, 0);
  const overallScore =
    totalSubtopics > 0
      ? Math.round(allLessonAudit.reduce((acc, l) => acc + l.score, 0) / totalSubtopics)
      : 0;

  const totalExplicitQuizzes = courseSummaries.reduce((acc, c) => acc + c.explicitQuizCount, 0);
  const totalExplicitFlashcards = courseSummaries.reduce((acc, c) => acc + c.explicitFlashcardCount, 0);
  const totalExplicitExams = courseSummaries.reduce((acc, c) => acc + c.explicitExamCount, 0);
  const totalExplicitCheatSheets = courseSummaries.reduce((acc, c) => acc + c.explicitCheatSheetCount, 0);
  const totalBakedExtraCount = courseSummaries.reduce((acc, c) => acc + c.bakedExtraCount, 0);
  const totalRuntimeSynCount = courseSummaries.reduce((acc, c) => acc + c.runtimeSynCount, 0);
  const totalMarkPoints = courseSummaries.reduce((acc, c) => acc + c.totalShortAnswerMarkPoints, 0);
  const totalGradableMarkPoints = courseSummaries.reduce(
    (acc, c) => acc + c.gradableShortAnswerMarkPoints,
    0
  );
  const totalUngradableMarkPoints = courseSummaries.reduce(
    (acc, c) => acc + c.ungradableShortAnswerMarkPoints,
    0
  );
  const overallGradableRubricPct =
    totalMarkPoints === 0 ? 100 : Math.round((totalGradableMarkPoints / totalMarkPoints) * 100);

  const flaggedCourses = courseSummaries
    .filter((c) => c.ungradableShortAnswerMarkPoints > 0)
    .map((c) => ({
      courseId: c.courseId,
      ungradableShortAnswerMarkPoints: c.ungradableShortAnswerMarkPoints,
      totalShortAnswerMarkPoints: c.totalShortAnswerMarkPoints,
      gradableRubricPct: c.gradableRubricPct,
    }));

  const assessmentSummary = {
    explicitQuizzesPerSubtopic:
      totalSubtopics > 0 ? Number((totalExplicitQuizzes / totalSubtopics).toFixed(1)) : 0,
    explicitFlashcardsPerSubtopic:
      totalSubtopics > 0 ? Number((totalExplicitFlashcards / totalSubtopics).toFixed(1)) : 0,
    explicitExamsPerSubtopic:
      totalSubtopics > 0 ? Number((totalExplicitExams / totalSubtopics).toFixed(1)) : 0,
    explicitCheatSheetsPerTopic:
      totalTopics > 0 ? Number((totalExplicitCheatSheets / totalTopics).toFixed(1)) : 0,
    totalExplicitQuizzes,
    totalExplicitFlashcards,
    totalExplicitExams,
    totalExplicitCheatSheets,
    totalBakedExtraCount,
    totalRuntimeSynCount,
    totalShortAnswerMarkPoints: totalMarkPoints,
    gradableShortAnswerMarkPoints: totalGradableMarkPoints,
    ungradableShortAnswerMarkPoints: totalUngradableMarkPoints,
    gradableRubricPct: overallGradableRubricPct,
    flaggedCourses,
  };

  const igcseCoverage = summarizeSubjectCoverage(catalog.IGCSE_SUBJECTS, TARGET_IGCSE_SLUGS);
  const alevelCoverage = summarizeSubjectCoverage(catalog.ALEVEL_SUBJECTS, TARGET_ALEVEL_SLUGS);

  // Build prioritized Next Best Learning Upgrades queue
  const nextUpgrades = [];

  for (const flagged of flaggedCourses) {
    nextUpgrades.push({
      priority: 'P1',
      category: 'Fix Ungradable Rubrics',
      target: `${flagged.courseId} (${flagged.gradableRubricPct}% gradable)`,
      reason: `${flagged.ungradableShortAnswerMarkPoints}/${flagged.totalShortAnswerMarkPoints} short-answer markPoints lack valid requiredKeywordGroups or numericMatch.`,
    });
  }

  for (const stub of igcseCoverage.stubs) {
    nextUpgrades.push({
      priority: 'P1',
      category: 'Unlock Stub Subject',
      target: `IGCSE ${stub}`,
      reason: 'Currently shown in catalog as pastPapersOnly without interactive notes, videos, or active recall.',
    });
  }
  for (const stub of alevelCoverage.stubs) {
    nextUpgrades.push({
      priority: 'P1',
      category: 'Unlock Stub Subject',
      target: `A-Level ${stub}`,
      reason: 'Currently shown in catalog as pastPapersOnly without interactive notes.',
    });
  }

  const lowestCourses = [...courseSummaries]
    .filter((c) => c.avgScore < 90)
    .sort((a, b) => a.avgScore - b.avgScore)
    .slice(0, 6);

  for (const c of lowestCourses) {
    const reasons = [];
    if (c.underTargetCards > 0) {
      reasons.push(`${c.underTargetCards}/${c.subtopicCount} subtopics have <3 cards`);
    }
    if (c.subsectionPct < 100) {
      reasons.push(`subsections on ${c.subsectionPct}% of subtopics`);
    }
    if (c.examplePct < 100) {
      reasons.push(`worked/concrete examples on ${c.examplePct}%`);
    }
    if (c.commonMistakePct < 80) {
      reasons.push(`commonMistake callouts on ${c.commonMistakePct}%`);
    }
    nextUpgrades.push({
      priority: 'P2',
      category: 'Deepen Existing Notes',
      target: `${c.qualification.toUpperCase()} ${c.subjectName} (${c.avgScore}/100)`,
      reason: reasons.join('; ') || 'Raise note depth to Cognito-intuition benchmark.',
    });
  }

  for (const slug of igcseCoverage.missing.slice(0, 3)) {
    nextUpgrades.push({
      priority: 'P3',
      category: 'Add Roadmap Subject',
      target: `IGCSE ${slug}`,
      reason: 'Planned in PLAN.md Phase 3 (target: 13 unlocked IGCSE subjects).',
    });
  }

  for (const slug of alevelCoverage.missing.slice(0, 3)) {
    nextUpgrades.push({
      priority: 'P3',
      category: 'Add Roadmap Subject',
      target: `A-Level ${slug}`,
      reason: 'Planned in PLAN.md Phase 4 (target: 14 unlocked A-Level subjects).',
    });
  }

  const lowestLessons = [...allLessonAudit]
    .sort((a, b) => a.score - b.score || a.subtopicId.localeCompare(b.subtopicId))
    .slice(0, 12);

  return {
    overallScore,
    totalCourses: courseSummaries.length,
    totalSubtopics,
    assessmentSummary,
    igcseCoverage,
    alevelCoverage,
    courseSummaries,
    nextUpgrades: nextUpgrades.slice(0, 12),
    lowestLessons,
  };
}

function renderMarkdown(report) {
  const lines = [];
  lines.push('# Cognify Learning Quality Scorecard');
  lines.push('');
  lines.push(
    '> Auto-generated by `npm run audit:learning`. Tracks pedagogical depth (structured subsections, worked examples, glossary pills, common mistakes, memory aids, recall sync) and curriculum expansion progress.'
  );
  lines.push('');
  lines.push('## Overall Snapshot');
  lines.push('');
  lines.push('| Metric | Current | Target |');
  lines.push('| --- | --- | --- |');
  lines.push(`| **Overall Learning Depth Score** | **${report.overallScore} / 100** | 95+ / 100 |`);
  lines.push(`| **Active Deep Courses Audited** | ${report.totalCourses} | 31+ |`);
  lines.push(`| **Total Subtopic Lessons** | ${report.totalSubtopics} | Growing |`);
  lines.push(
    `| **IGCSE Unlocked Subjects** | ${report.igcseCoverage.unlocked.length} / ${report.igcseCoverage.targetCount} (${report.igcseCoverage.stubs.length} stubs) | ${report.igcseCoverage.targetCount} / ${report.igcseCoverage.targetCount} |`
  );
  lines.push(
    `| **A-Level Unlocked Subjects** | ${report.alevelCoverage.unlocked.length} / ${report.alevelCoverage.targetCount} (${report.alevelCoverage.stubs.length} stubs) | ${report.alevelCoverage.targetCount} / ${report.alevelCoverage.targetCount} |`
  );
  lines.push(
    `| **Explicit Authored Quizzes / Subtopic** | ${report.assessmentSummary.explicitQuizzesPerSubtopic} | 5.0+ |`
  );
  lines.push(
    `| **Explicit Authored Flashcards / Subtopic** | ${report.assessmentSummary.explicitFlashcardsPerSubtopic} | 5.0+ |`
  );
  lines.push(
    `| **Explicit Authored Exam Practice / Subtopic** | ${report.assessmentSummary.explicitExamsPerSubtopic} | 1.0+ |`
  );
  lines.push(
    `| **Explicit Authored Cheat Sheets / Topic** | ${report.assessmentSummary.explicitCheatSheetsPerTopic} | 1.0 |`
  );
  lines.push(
    `| **Baked \`-extra-\` / Template Items** | ${report.assessmentSummary.totalBakedExtraCount} | 0 |`
  );
  lines.push(
    `| **Runtime \`-syn-\` Fallback Items** | ${report.assessmentSummary.totalRuntimeSynCount} | 0 |`
  );
  lines.push(
    `| **Gradable Short-Answer MarkPoints** | **${report.assessmentSummary.gradableRubricPct}%** (${report.assessmentSummary.gradableShortAnswerMarkPoints} / ${report.assessmentSummary.totalShortAnswerMarkPoints}, ${report.assessmentSummary.ungradableShortAnswerMarkPoints} ungradable) | 100% |`
  );
  lines.push('');

  lines.push('## Top Next Learning Upgrades (Auto-Prioritized)');
  lines.push('');
  lines.push('| Priority | Category | Target | Why It Improves Learning |');
  lines.push('| --- | --- | --- | --- |');
  for (const item of report.nextUpgrades) {
    lines.push(`| **${item.priority}** | ${item.category} | ${item.target} | ${item.reason} |`);
  }
  lines.push('');

  lines.push('## Course Pedagogical Depth Breakdown');
  lines.push('');
  lines.push(
    '| Course | Subtopics | Score | Subsections | Examples | Common Mistakes | Memory Aids | Diagrams |'
  );
  lines.push('| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const c of report.courseSummaries) {
    lines.push(
      `| \`${c.courseId}\` | ${c.subtopicCount} | **${c.avgScore}/100** | ${c.subsectionPct}% | ${c.examplePct}% | ${c.commonMistakePct}% | ${c.memoryAidPct}% | ${c.diagramCount} |`
    );
  }
  lines.push('');

  lines.push('## Assessment Authorship & Rubric Gradability Breakdown');
  lines.push('');
  lines.push(
    '| Course | Auth. Quiz/Sub | Auth. Cards/Sub | Auth. Exam/Sub | Auth. Sheets/Topic | Baked `-extra-` | Runtime `-syn-` | Gradable MarkPoints |'
  );
  lines.push('| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const c of report.courseSummaries) {
    lines.push(
      `| \`${c.courseId}\` | ${c.explicitQuizzesPerSubtopic} | ${c.explicitFlashcardsPerSubtopic} | ${c.explicitExamsPerSubtopic} | ${c.explicitCheatSheetsPerTopic} | ${c.bakedExtraCount} | ${c.runtimeSynCount} | ${c.gradableRubricPct}% (${c.gradableShortAnswerMarkPoints}/${c.totalShortAnswerMarkPoints}) |`
    );
  }
  lines.push('');

  lines.push('## Shallowest Subtopics (Best Quick Wins)');
  lines.push('');
  lines.push('| Course | Subtopic | Score | Missing Learning Elements |');
  lines.push('| --- | --- | ---: | --- |');
  for (const l of report.lowestLessons) {
    lines.push(
      `| \`${l.courseId}\` | \`${l.subtopicId}\` — ${l.subtopicTitle} | ${l.score}/100 | ${l.gaps.join(', ') || 'Polish depth'} |`
    );
  }
  lines.push('');

  lines.push('## Roadmap Coverage Status');
  lines.push('');
  lines.push(`- **IGCSE Stubs to Replace**: ${report.igcseCoverage.stubs.join(', ') || 'None'}`);
  lines.push(`- **IGCSE Subjects Not Yet Added**: ${report.igcseCoverage.missing.join(', ') || 'None'}`);
  lines.push(`- **A-Level Subjects Not Yet Added**: ${report.alevelCoverage.missing.join(', ') || 'None'}`);
  lines.push('');
  return lines.join('\n');
}

function renderTerminal(report) {
  const a = report.assessmentSummary;
  console.log(`\n=== Cognify Learning Quality Audit ===`);
  console.log(
    `Overall Learning Depth Score: ${report.overallScore}/100 across ${report.totalCourses} courses (${report.totalSubtopics} subtopics)`
  );
  console.log(
    `IGCSE Subjects: ${report.igcseCoverage.unlocked.length}/${report.igcseCoverage.targetCount} unlocked (${report.igcseCoverage.stubs.length} stubs, ${report.igcseCoverage.missing.length} not yet added)`
  );
  console.log(
    `A-Level Subjects: ${report.alevelCoverage.unlocked.length}/${report.alevelCoverage.targetCount} unlocked (${report.alevelCoverage.missing.length} not yet added)`
  );
  console.log(
    `Assessment Authorship: quiz=${a.explicitQuizzesPerSubtopic}/sub, cards=${a.explicitFlashcardsPerSubtopic}/sub, exam=${a.explicitExamsPerSubtopic}/sub, sheets=${a.explicitCheatSheetsPerTopic}/topic | baked -extra-=${a.totalBakedExtraCount}, runtime -syn-=${a.totalRuntimeSynCount}`
  );
  console.log(
    `Short-Answer Rubric Gradability: ${a.gradableRubricPct}% (${a.gradableShortAnswerMarkPoints}/${a.totalShortAnswerMarkPoints} gradable, ${a.ungradableShortAnswerMarkPoints} ungradable)`
  );

  console.log('\nCourse Scores & Assessment Authorship:');
  for (const c of report.courseSummaries) {
    const padId = c.courseId.padEnd(32, ' ');
    console.log(
      `  ${padId} ${String(c.avgScore).padStart(3, ' ')}/100  (sub=${String(c.subtopicCount).padStart(2, ' ')}, q=${String(c.explicitQuizzesPerSubtopic).padStart(3, ' ')}/s, fc=${String(c.explicitFlashcardsPerSubtopic).padStart(3, ' ')}/s, ex=${String(c.explicitExamsPerSubtopic).padStart(3, ' ')}/s, extra=${String(c.bakedExtraCount).padStart(3, ' ')}, syn=${String(c.runtimeSynCount).padStart(3, ' ')}, gradable=${String(c.gradableRubricPct).padStart(3, ' ')}%)`
    );
  }

  if (a.flaggedCourses.length > 0) {
    console.log('\nFlagged Ungradable Short-Answer Rubrics:');
    for (const fc of a.flaggedCourses) {
      console.log(
        `  [UNGRADABLE] ${fc.courseId}: ${fc.ungradableShortAnswerMarkPoints}/${fc.totalShortAnswerMarkPoints} ungradable markPoints (${fc.gradableRubricPct}% gradable)`
      );
    }
  }

  console.log('\nTop Next Learning Upgrades:');
  for (const item of report.nextUpgrades.slice(0, 8)) {
    console.log(`  [${item.priority}] ${item.target} — ${item.reason}`);
  }
  console.log('');
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const catalog = await loadCatalog();
  const report = buildReport(catalog);

  if (args.has('--write-report') || args.has('--write')) {
    const reportPath = path.join(ROOT_DIR, 'docs', 'LEARNING_QUALITY_REPORT.md');
    fs.writeFileSync(reportPath, renderMarkdown(report), 'utf8');
    console.log(`Updated ${path.relative(ROOT_DIR, reportPath)}`);
  }

  if (args.has('--json')) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  if (args.has('--markdown')) {
    console.log(renderMarkdown(report));
    return;
  }

  renderTerminal(report);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
