import { describe, expect, it } from 'vitest';
import { getCourseById } from '../data/catalog';
import { buildRevisionSessionQuestions, createEmptyCourseProgress } from '../store/AppContext';

describe('Multi-Subtopic Revision Session Builder (No 15-Question Paywall Cap)', () => {
  it('builds sessions exceeding 15 questions when multiple subtopics are selected', () => {
    const bio = getCourseById('gcse-biology-aqa-higher')!;
    const allSubIds = bio.topics.flatMap((t) => t.subtopics.map((s) => s.id));

    const questions = buildRevisionSessionQuestions({
      course: bio,
      subtopicIds: allSubIds,
      progress: createEmptyCourseProgress(),
      strategy: 'balanced',
      requestedTotal: 999,
    });

    expect(questions.length).toBeGreaterThan(15);
    expect(questions.length).toBe(bio.quizzes.length);
  });

  it('prioritises previously incorrect questions first in fix-mistakes strategy', () => {
    const bio = getCourseById('gcse-biology-aqa-higher')!;
    const allSubIds = bio.topics.flatMap((t) => t.subtopics.map((s) => s.id));
    const progress = createEmptyCourseProgress();
    const targetWrongId = bio.quizzes[bio.quizzes.length - 1].id;
    progress.questionAttempts[targetWrongId] = {
      answered: true,
      correct: false,
      earnedMarks: 0,
      maxMarks: 1,
      lastAnsweredAt: new Date().toISOString(),
    };

    const questions = buildRevisionSessionQuestions({
      course: bio,
      subtopicIds: allSubIds,
      progress,
      strategy: 'fix-mistakes',
      requestedTotal: 5,
    });

    expect(questions[0].id).toBe(targetWrongId);
  });
});
