import { MarkSchemeRubric } from '../types/curriculum';
import { AiMarkingConfig } from '../types/user';

export interface GradeResult {
  earnedMarks: number;
  maxMarks: number;
  percent: number;
  hitPoints: string[];
  missedPoints: string[];
  feedback: string;
  modelAnswer: string;
  usedAi: boolean;
}

function normalizeText(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/['’`]/g, '')
    .replace(/[^a-z0-9.×xμµ\s/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesKeywordGroup(normalizedAnswer: string, group: string[]): boolean {
  return group.some((variant) => {
    const clean = normalizeText(variant);
    if (!clean) return false;
    // Direct phrase match or stem tolerance
    if (normalizedAnswer.includes(clean)) return true;
    const words = normalizedAnswer.split(' ');
    return words.some((w) => w === clean || (clean.length > 4 && w.startsWith(clean)));
  });
}

function matchesNumeric(rawAnswer: string, target: { value: number; tolerance: number; unit?: string }): boolean {
  const nums = rawAnswer.match(/-?\d+(?:\.\d+)?/g);
  if (!nums) return false;
  const hasMatchingNumber = nums.some((token) => {
    const val = Number.parseFloat(token);
    return Number.isFinite(val) && Math.abs(val - target.value) <= target.tolerance;
  });
  if (!hasMatchingNumber) return false;
  if (!target.unit) return true;
  return normalizeText(rawAnswer).includes(normalizeText(target.unit));
}

export function gradeShortAnswerLocal(studentAnswer: string, rubric: MarkSchemeRubric): GradeResult {
  const normalized = normalizeText(studentAnswer);
  if (!normalized) {
    return {
      earnedMarks: 0,
      maxMarks: rubric.maxMarks,
      percent: 0,
      hitPoints: [],
      missedPoints: rubric.markPoints.map((mp) => mp.markDescription),
      feedback: 'No answer entered yet. Compare your thinking with the mark scheme below.',
      modelAnswer: rubric.modelAnswer,
      usedAi: false,
    };
  }

  const hitPoints: string[] = [];
  const missedPoints: string[] = [];

  for (const point of rubric.markPoints) {
    let hit = false;
    if (point.numericMatch) {
      hit = matchesNumeric(studentAnswer, point.numericMatch);
    } else if (point.requiredKeywordGroups && point.requiredKeywordGroups.length > 0) {
      hit = point.requiredKeywordGroups.every((group) => matchesKeywordGroup(normalized, group));
    }
    if (hit) {
      hitPoints.push(point.markDescription);
    } else {
      missedPoints.push(point.markDescription);
    }
  }

  const earnedMarks = Math.min(rubric.maxMarks, hitPoints.length);
  const percent = rubric.maxMarks > 0 ? Math.round((earnedMarks / rubric.maxMarks) * 100) : 0;

  let feedback = '';
  if (earnedMarks === rubric.maxMarks) {
    feedback = `Full marks (${earnedMarks}/${rubric.maxMarks})! You hit every point in the mark scheme.`;
  } else if (earnedMarks > 0) {
    feedback = `Partial marks (${earnedMarks}/${rubric.maxMarks}). Check the missed mark points below to sharpen your wording.`;
  } else {
    feedback = `0/${rubric.maxMarks} marks awarded against the mark scheme. Review the key terms and model answer below.`;
  }

  return {
    earnedMarks,
    maxMarks: rubric.maxMarks,
    percent,
    hitPoints,
    missedPoints,
    feedback,
    modelAnswer: rubric.modelAnswer,
    usedAi: false,
  };
}

export async function gradeShortAnswer(
  studentAnswer: string,
  rubric: MarkSchemeRubric,
  questionPrompt: string,
  aiConfig?: AiMarkingConfig
): Promise<GradeResult> {
  const localResult = gradeShortAnswerLocal(studentAnswer, rubric);
  if (!aiConfig?.enabled || !aiConfig.apiKey.trim() || !studentAnswer.trim()) {
    return localResult;
  }

  try {
    const promptText = [
      `You are a strict UK GCSE/A-Level examiner grading a student answer out of ${rubric.maxMarks} marks.`,
      `Question: ${questionPrompt}`,
      `Mark scheme points:\n${rubric.markPoints.map((m, i) => `${i + 1}. ${m.markDescription}`).join('\n')}`,
      `Model answer: ${rubric.modelAnswer}`,
      `Student answer: ${studentAnswer}`,
      `Respond ONLY with valid JSON: {"earnedMarks": number, "hitPoints": string[], "missedPoints": string[], "feedback": string}`,
    ].join('\n\n');

    if (aiConfig.provider === 'gemini') {
      const model = aiConfig.model.trim() || 'gemini-2.5-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(aiConfig.apiKey.trim())}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { responseMimeType: 'application/json', temperature: 0.1 },
        }),
      });
      if (!res.ok) return localResult;
      const data = await res.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) return localResult;
      const parsed = JSON.parse(rawText);
      const earned = Math.max(0, Math.min(rubric.maxMarks, Number(parsed.earnedMarks ?? localResult.earnedMarks)));
      return {
        earnedMarks: earned,
        maxMarks: rubric.maxMarks,
        percent: rubric.maxMarks > 0 ? Math.round((earned / rubric.maxMarks) * 100) : 0,
        hitPoints: Array.isArray(parsed.hitPoints) ? parsed.hitPoints : localResult.hitPoints,
        missedPoints: Array.isArray(parsed.missedPoints) ? parsed.missedPoints : localResult.missedPoints,
        feedback: typeof parsed.feedback === 'string' && parsed.feedback ? parsed.feedback : localResult.feedback,
        modelAnswer: rubric.modelAnswer,
        usedAi: true,
      };
    }

    // OpenAI-compatible chat completions
    const model = aiConfig.model.trim() || 'gpt-4o-mini';
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${aiConfig.apiKey.trim()}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.1,
        response_format: { type: 'json_object' },
        messages: [{ role: 'user', content: promptText }],
      }),
    });
    if (!res.ok) return localResult;
    const data = await res.json();
    const rawText = data?.choices?.[0]?.message?.content;
    if (!rawText) return localResult;
    const parsed = JSON.parse(rawText);
    const earned = Math.max(0, Math.min(rubric.maxMarks, Number(parsed.earnedMarks ?? localResult.earnedMarks)));
    return {
      earnedMarks: earned,
      maxMarks: rubric.maxMarks,
      percent: rubric.maxMarks > 0 ? Math.round((earned / rubric.maxMarks) * 100) : 0,
      hitPoints: Array.isArray(parsed.hitPoints) ? parsed.hitPoints : localResult.hitPoints,
      missedPoints: Array.isArray(parsed.missedPoints) ? parsed.missedPoints : localResult.missedPoints,
      feedback: typeof parsed.feedback === 'string' && parsed.feedback ? parsed.feedback : localResult.feedback,
      modelAnswer: rubric.modelAnswer,
      usedAi: true,
    };
  } catch {
    return localResult;
  }
}
