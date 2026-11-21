import { describe, expect, it } from 'vitest';
import {
  computeStreakStats,
  createDefaultProfile,
  exportProfileJson,
  formatDateKey,
  parseImportedProfileJson,
} from '../store/AppContext';
import { ActivityEvent } from '../types/user';

describe('Store helpers & streak/backup logic', () => {
  it('computes consecutive days and uses streak freeze automatically on a missed day', () => {
    const ref = new Date('2026-11-21T12:00:00Z');
    const day0 = formatDateKey(ref); // 2026-11-21
    const day2 = '2026-11-19'; // skipped 2026-11-20!

    const events: ActivityEvent[] = [
      {
        id: '1',
        timestamp: `${day0}T10:00:00Z`,
        dateKey: day0,
        type: 'quiz',
        courseId: 'gcse-biology-aqa-higher',
        courseLabel: 'GCSE Biology · AQA',
        subjectName: 'Biology',
        title: 'Quiz 1',
        xpEarned: 30,
        durationSeconds: 120,
        questionsAnswered: 2,
      },
      {
        id: '2',
        timestamp: `${day2}T10:00:00Z`,
        dateKey: day2,
        type: 'notes',
        courseId: 'gcse-biology-aqa-higher',
        courseLabel: 'GCSE Biology · AQA',
        subjectName: 'Biology',
        title: 'Notes 1',
        xpEarned: 25,
        durationSeconds: 180,
        questionsAnswered: 0,
      },
    ];

    const statsWithFreeze = computeStreakStats(events, 1, ref);
    expect(statsWithFreeze.currentStreak).toBe(2);
    expect(statsWithFreeze.totalXp).toBe(55);

    const statsNoFreeze = computeStreakStats(events, 0, ref);
    expect(statsNoFreeze.currentStreak).toBe(1);
  });

  it('roundtrips profile JSON export and import safely', () => {
    const profile = createDefaultProfile({ name: 'Jordan', dailyXpGoal: 250 });
    const raw = exportProfileJson(profile);
    const restored = parseImportedProfileJson(raw);

    expect(restored).not.toBeNull();
    expect(restored?.name).toBe('Jordan');
    expect(restored?.dailyXpGoal).toBe(250);
    expect(restored?.enrolledCourseIds.length).toBeGreaterThanOrEqual(5);
  });

  it('rejects malformed backup JSON cleanly', () => {
    expect(parseImportedProfileJson('{bad json')).toBeNull();
    expect(parseImportedProfileJson('{"hello":"world"}')).toBeNull();
  });
});
