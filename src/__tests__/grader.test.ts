import { describe, expect, it } from 'vitest';
import { MarkSchemeRubric } from '../types/curriculum';
import { gradeShortAnswerLocal } from '../utils/grader';

const CELL_RUBRIC: MarkSchemeRubric = {
  maxMarks: 3,
  modelAnswer: 'Leaf palisade cells absorb light for photosynthesis; root hair cells are underground in the dark so cannot photosynthesise.',
  markPoints: [
    {
      id: 'mp1',
      markDescription: 'Chloroplasts absorb light / carry out photosynthesis',
      requiredKeywordGroups: [['photosynth', 'light'], ['chloroplast', 'leaf']],
    },
    {
      id: 'mp2',
      markDescription: 'Root hair cells are underground / in soil',
      requiredKeywordGroups: [['underground', 'soil', 'dark']],
    },
    {
      id: 'mp3',
      markDescription: 'Receive no light so cannot photosynthesise',
      requiredKeywordGroups: [['no light', 'not photosynth', 'cannot photosynth']],
    },
  ],
};

const MAG_RUBRIC: MarkSchemeRubric = {
  maxMarks: 2,
  modelAnswer: '45 mm = 45,000 μm; Magnification = 45,000 ÷ 50 = 900.',
  markPoints: [
    { id: 'mp1', markDescription: 'Convert 45 mm to 45,000 μm', requiredKeywordGroups: [['45000', '45,000']] },
    { id: 'mp2', markDescription: 'Correct magnification 900', numericMatch: { value: 900, tolerance: 0.5 } },
  ],
};

describe('gradeShortAnswerLocal', () => {
  it('awards full marks when all mark-scheme keyword groups are hit', () => {
    const res = gradeShortAnswerLocal(
      'Leaf cells have chloroplasts to absorb light for photosynthesis. Root hair cells are underground in the dark and receive no light.',
      CELL_RUBRIC
    );
    expect(res.earnedMarks).toBe(3);
    expect(res.maxMarks).toBe(3);
    expect(res.percent).toBe(100);
    expect(res.missedPoints).toHaveLength(0);
  });

  it('awards partial marks accurately', () => {
    const res = gradeShortAnswerLocal('Root cells are underground in the soil.', CELL_RUBRIC);
    expect(res.earnedMarks).toBe(1);
    expect(res.hitPoints).toHaveLength(1);
    expect(res.missedPoints).toHaveLength(2);
  });

  it('grades numerical calculations with tolerance', () => {
    const res = gradeShortAnswerLocal('45,000 / 50 = x900', MAG_RUBRIC);
    expect(res.earnedMarks).toBe(2);
    expect(res.percent).toBe(100);
  });

  it('awards 0 marks cleanly for blank input', () => {
    const res = gradeShortAnswerLocal('   ', CELL_RUBRIC);
    expect(res.earnedMarks).toBe(0);
    expect(res.missedPoints).toHaveLength(3);
  });
});
