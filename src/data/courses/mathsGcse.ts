import {
  CheatSheetItem,
  ExamQuestionItem,
  FlashcardItem,
  KeyTermEntry,
  NoteLesson,
  PastPaperDoc,
  QuizQuestion,
  TopicDefinition,
} from '../../types/curriculum';

export const MATHS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Numbers',
    subtopics: [
      { id: 'maths-1-1', code: '1.1', slug: '1.1-fractions-percentages-ratios', title: 'Fractions, Percentages & Reverse Percentages', readingMinutes: 9, hasDeepContent: true },
      { id: 'maths-1-2', code: '1.2', slug: '1.2-indices-standard-form', title: 'Index Laws, Surds & Standard Form', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Algebra',
    subtopics: [
      { id: 'maths-2-1', code: '2.1', slug: '2.1-expanding-factorising-quadratics', title: 'Expanding, Factorising & Solving Quadratics', readingMinutes: 10, hasDeepContent: true },
      { id: 'maths-2-2', code: '2.2', slug: '2.2-simultaneous-equations', title: 'Simultaneous Equations', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Graphs',
    subtopics: [
      { id: 'maths-3-1', code: '3.1', slug: '3.1-straight-line-y-mx-c', title: 'Straight Line Graphs (y = mx + c)', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Ratio, Proportion & Rates of Change',
    subtopics: [
      { id: 'maths-4-1', code: '4.1', slug: '4.1-direct-inverse-proportion', title: 'Direct & Inverse Proportion', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Geometry & Measures',
    subtopics: [
      { id: 'maths-5-1', code: '5.1', slug: '5.1-pythagoras-trigonometry', title: 'Pythagoras’ Theorem & SOHCAHTOA Trigonometry', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Probability & Statistics',
    subtopics: [
      { id: 'maths-6-1', code: '6.1', slug: '6.1-tree-diagrams-conditional-prob', title: 'Probability Trees & Venn Diagrams', readingMinutes: 9, hasDeepContent: true },
    ],
  },
];

export const MATHS_NOTES: Record<string, NoteLesson> = {
  'maths-1-1': {
    subtopicId: 'maths-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Fractions, Percentages & Reverse Percentages',
    readingMinutes: 9,
    videoTitle: 'GCSE Maths - Reverse Percentages - Calculating The Cost Before The Discount',
    youtubeId: 'dIeb2ryQ1ko',
    videoChannel: 'Cognito',
    videoDuration: '8:14',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Reverse Percentages', cardId: 'maths-1-1-c1' },
      { time: '2:49', seconds: 169, label: 'Example 2: Finding Original Price after Decrease (Sale)', cardId: 'maths-1-1-c3' },
      { time: '4:56', seconds: 296, label: 'Reverse Percentages Using the Value Change', cardId: 'maths-1-1-c3' },
      { time: '6:59', seconds: 419, label: 'Example 5: Calculating Original Price from Decrease Value', cardId: 'maths-1-1-c3' },
    ],
    cards: [
      {
        id: 'maths-1-1-c1',
        title: 'Fractions & Decimal Multipliers',
        summary: 'Improper fraction arithmetic, decimal multipliers, and percentage change.',
        bullets: [
          'Always change mixed numbers into improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12.',
          'Use a decimal multiplier for one-step percentage changes: to increase by 15%, multiply by 1.15; to decrease by 15%, multiply by 0.85; for a 3.5% rise, multiply by 1.035.',
          'Percentage change = ((New − Original) ÷ Original) × 100%.',
        ],
        glossaryPills: [
          {
            term: 'multiplier',
            definition: 'A decimal factor representing a percentage increase (1 + r/100) or decrease (1 − r/100) in a single step.',
          },
        ],
      },
      {
        id: 'maths-1-1-c2',
        title: 'Compound Interest & Depreciation',
        summary: 'Applying Final = Initial × (Multiplier)ⁿ for compound interest and decay.',
        bullets: [
          'Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ.',
          '**Worked example:** £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09.',
          'Depreciation (car losing 12% value per year for 3 years): Final = Initial × (0.88)³.',
        ],
        memoryAid: 'Compound = Multiply by (Multiplier)^n; Simple = Add the same fixed interest every year.',
      },
      {
        id: 'maths-1-1-c3',
        title: 'Reverse Percentages',
        summary: 'Dividing by the decimal multiplier to recover an original price.',
        bullets: [
          'When given a FINAL price AFTER a percentage change, DIVIDE by the multiplier to recover the original 100% value.',
          '**Worked example:** A jacket costs £64 after a 20% sale reduction. £64 equals 80% (0.80 × original), so Original = £64 ÷ 0.80 = £80.',
          '**Worked example (increase):** After a 10% rise, a ticket costs £55. £55 equals 110% (1.10), so Original = £55 ÷ 1.10 = £50.',
        ],
        commonMistake: 'Never add 20% to a discounted price to reverse a 20% discount — divide by 0.80 instead!',
      },
    ],
    keyTerms: [
      { term: 'Multiplier', definition: 'Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%).' },
      { term: 'Compound interest', definition: 'Interest calculated on both the starting amount and previously earned interest: A = P(1 + r/100)ⁿ.' },
    ],
    checklistPoints: [
      'Convert percentage increases and decreases into decimal multipliers accurately.',
      'Calculate compound interest and depreciation over n years.',
      'Always divide by the multiplier to work backwards to an original value.',
    ],
  },
  'maths-1-2': {
    subtopicId: 'maths-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Index Laws, Surds & Standard Form',
    readingMinutes: 10,
    videoTitle: 'GCSE Maths - Introduction to Powers/Indices & 3 Basic Rules (Powers Part 1/6)',
    youtubeId: 'ZLlwb4syPx4',
    videoChannel: 'Cognito',
    videoDuration: '3:28',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'What are Powers?', cardId: 'maths-1-2-c1' },
      { time: '0:53', seconds: 53, label: 'Example: 3 Squared', cardId: 'maths-1-2-c1' },
      { time: '1:33', seconds: 93, label: 'Rule 1: Power of 0', cardId: 'maths-1-2-c1' },
      { time: '2:36', seconds: 156, label: 'Rule 3: Base of 1', cardId: 'maths-1-2-c1' },
    ],
    cards: [
      {
        id: 'maths-1-2-c1',
        title: 'Index Laws (Negative & Fractional Powers)',
        summary: 'Evaluating negative, zero, and fractional indices without a calculator.',
        bullets: [
          '**Core laws:** aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1.',
          'Negative power = reciprocal: a⁻ⁿ = 1 ÷ aⁿ, and (a/b)⁻ⁿ = (b/a)ⁿ. Example: 5⁻² = 1/25; (3/4)⁻² = 16/9.',
          'Fractional power = root then power: a^(m/n) = (ⁿ√a)ᵐ. Example: 8^(2/3) = (³√8)² = 2² = 4; 16^(−3/4) = 1 ÷ (⁴√16)³ = 1/8.',
        ],
        memoryAid: 'Take the ROOT (denominator) first so the numbers stay tiny, then raise to the POWER (numerator), then flip if negative!',
      },
      {
        id: 'maths-1-2-c2',
        title: 'Simplifying & Rationalising Surds',
        summary: 'Simplifying square roots and rationalising single- and two-term denominators.',
        bullets: [
          'A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3.',
          'Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2.',
          'Rationalise a single-term denominator by multiplying top and bottom by √b: 10/√5 = (10√5)/5 = 2√5.',
          'Rationalise a two-term denominator (a + √b) using its conjugate (a − √b): 6 ÷ (√5 − 2) = 6(√5 + 2) ÷ (5 − 4) = 6√5 + 12.',
        ],
        glossaryPills: [
          {
            term: 'surd',
            definition: 'An irrational square root left in exact radical form (e.g., √3 or 4√2) rather than rounded as a decimal.',
          },
        ],
      },
      {
        id: 'maths-1-2-c3',
        title: 'Standard Form Calculations',
        summary: 'Computing and adjusting answers in standard form A × 10ⁿ.',
        bullets: [
          '**Standard form** writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 64,000 = 6.4 × 10⁴; 0.0032 = 3.2 × 10⁻³.',
          '**Multiplying/dividing:** multiply/divide the front numbers and add/subtract the powers of 10, then adjust if A ≥ 10 or A < 1. Example: (4 × 10⁵) × (3 × 10⁴) = 12 × 10⁹ = 1.2 × 10¹⁰.',
          '**Adding/subtracting:** convert both numbers to ordinary numbers OR adjust to the SAME power of 10 before adding!',
        ],
        commonMistake: 'Leaving an answer like 12 × 10⁹ loses the final accuracy mark — A MUST satisfy 1 ≤ A < 10, so rewrite as 1.2 × 10¹⁰!',
      },
    ],
    keyTerms: [
      { term: 'Reciprocal', definition: '1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.' },
      { term: 'Surd', definition: 'Exact irrational root written with a square-root sign.' },
      { term: 'Standard form', definition: 'Scientific notation A × 10ⁿ where 1 ≤ A < 10 and n is an integer.' },
    ],
    checklistPoints: [
      'Evaluate negative and fractional indices accurately without a calculator.',
      'Simplify surds, expand surd brackets, and rationalise single- and two-term denominators.',
      'Multiply, divide, add, and subtract numbers in standard form and adjust A into [1, 10).',
    ],
  },
  'maths-2-1': {
    subtopicId: 'maths-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Expanding, Factorising & Solving Quadratics',
    readingMinutes: 10,
    videoTitle: 'GCSE Maths - Factorising Quadratics - Part 1 (When x^2 Coefficient is 1)',
    youtubeId: '3kE_Q-JdlO4',
    videoChannel: 'Cognito',
    videoDuration: '6:23',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Factorising Quadratics', cardId: 'maths-2-1-c1' },
      { time: '1:23', seconds: 83, label: 'Step 1: Finding Factor Pairs of the Constant Term', cardId: 'maths-2-1-c1' },
      { time: '3:14', seconds: 194, label: 'Step 3: Writing the Final Brackets for Example 1', cardId: 'maths-2-1-c1' },
      { time: '4:31', seconds: 271, label: 'Example 2', cardId: 'maths-2-1-c1' },
    ],
    cards: [
      {
        id: 'maths-2-1-c1',
        title: 'Factorising Quadratic Equations',
        summary: 'Factorising monic, non-monic, and difference-of-two-squares quadratics.',
        bullets: [
          'Always rearrange into ax² + bx + c = 0 BEFORE factorising.',
          'For x² + bx + c = 0, find two numbers that multiply to c and add to b. Example: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2.',
          '**Difference of two squares:** **a² − b² = (a + b)(a − b)**. Example: 4x² − 25 = (2x + 5)(2x − 5).',
          'For ax² + bx + c (a > 1), find two numbers multiplying to a × c and adding to b, split the middle term, and factorise by grouping.',
        ],
      },
      {
        id: 'maths-2-1-c2',
        title: 'The Quadratic Formula',
        summary: 'Applying the quadratic formula cleanly with negative coefficients.',
        bullets: [
          '**Quadratic formula:** **x = (−b ± √(b² − 4ac)) ÷ (2a)**. Use whenever the question asks for decimal places or significant figures.',
          '**Worked example:** Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.).',
        ],
        commonMistake: 'Always put negative b inside brackets when squaring: (−3)² = +9, NOT −9!',
      },
      {
        id: 'maths-2-1-c3',
        title: 'Completing the Square & Turning Points',
        summary: 'Completing the square to read off parabola turning points (−p, q).',
        bullets: [
          'Write x² + bx + c as (x + b/2)² − (b/2)² + c. Example: x² + 8x + 10 = (x + 4)² − 16 + 10 = (x + 4)² − 6.',
          'The minimum turning point of y = (x + p)² + q is (−p, q). For y = (x + 4)² − 6, the turning point is (−4, −6).',
        ],
        glossaryPills: [
          {
            term: 'turning point',
            definition: 'The lowest (minimum) or highest (maximum) vertex of a quadratic parabola, read directly from completed-square form as (−p, q).',
          },
        ],
        memoryAid: 'Vertex from (x + p)² + q: FLIP the inside sign, KEEP the outside sign!',
      },
    ],
    keyTerms: [
      { term: 'Quadratic equation', definition: 'A polynomial equation of highest power 2 in the form ax² + bx + c = 0.' },
      { term: 'Turning point', definition: 'Vertex (minimum or maximum point) of a parabolic graph y = ax² + bx + c.' },
    ],
    checklistPoints: [
      'Set the equation equal to 0 before factorising or applying the quadratic formula.',
      'Use difference of two squares and AC-splitting when a > 1.',
      'Complete the square to solve exactly and state parabola turning points.',
    ],
  },
  'maths-2-2': {
    subtopicId: 'maths-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Simultaneous Equations',
    readingMinutes: 9,
    videoTitle: 'GCSE Maths - How to Solve Simultaneous Equations - Using the Elimination Technique',
    youtubeId: '68hMhae269k',
    videoChannel: 'Cognito',
    videoDuration: '8:21',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Solving Simultaneous Equations', cardId: 'maths-2-2-c1' },
      { time: '3:55', seconds: 235, label: 'Example 2 (More Complex)', cardId: 'maths-2-2-c1' },
      { time: '5:06', seconds: 306, label: 'Step 2: Make Coefficients the Same', cardId: 'maths-2-2-c1' },
      { time: '7:05', seconds: 425, label: 'Step 6: Check the Solution', cardId: 'maths-2-2-c1' },
    ],
    cards: [
      {
        id: 'maths-2-2-c1',
        title: 'Elimination Method (Two Linear Equations)',
        summary: 'Eliminating x or y from linear simultaneous equations with SSS.',
        bullets: [
          'Multiply one or both equations so that the coefficients of either x or y have the exact same size.',
          '**Apply SSS:** Same Signs Subtract; Different Signs Add to eliminate that variable.',
          '**Worked example:** 2x + 3y = 19 and 5x − 3y = 9. Since +3y and −3y have DIFFERENT signs, ADD them: 7x = 28 → x = 4. Substitute into 2(4) + 3y = 19 → 3y = 11 → y = 11/3.',
          'Always check your answers in the SECOND equation before moving on!',
        ],
        memoryAid: 'SSS = Same Signs Subtract; Different Signs Add!',
      },
      {
        id: 'maths-2-2-c2',
        title: 'Substitution Method (Linear & Quadratic / Circle)',
        summary: 'Solving linear and quadratic/circle simultaneous equations by substitution.',
        bullets: [
          'When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation.',
          '**Worked example:** x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2.',
          'Substitute BOTH x-values into y = 2x + 1 to obtain paired solutions: (1.2, 3.4) and (−2, −3).',
        ],
        glossaryPills: [
          {
            term: 'substitution',
            definition: 'Replacing one variable in an equation with an equivalent algebraic expression derived from another equation.',
          },
        ],
        commonMistake: 'Expanding (2x + 1)² as 4x² + 1 is a classic trap — ALWAYS include the middle cross-term: (2x + 1)(2x + 1) = 4x² + 4x + 1!',
      },
      {
        id: 'maths-2-2-c3',
        title: 'Graphical Meaning of Simultaneous Solutions',
        summary: 'Interpreting simultaneous solutions as graph intersection coordinates.',
        bullets: [
          'The solution (x, y) to a pair of simultaneous equations is the exact COORDINATE OF INTERSECTION where the two graphs cross.',
          'Two **parallel** straight lines have identical gradients and never cross — so they have NO simultaneous solution.',
          'A straight line intersecting a quadratic or circle can have 2 solutions (secant), 1 repeated solution (tangent), or 0 real solutions (misses curve).',
        ],
      },
    ],
    keyTerms: [
      { term: 'Simultaneous equations', definition: 'Two or more equations sharing unknowns that must be satisfied at the exact same values.' },
      { term: 'Point of intersection', definition: 'Coordinate pair (x, y) where two graphs meet, representing their simultaneous solution.' },
    ],
    checklistPoints: [
      'Solve linear simultaneous equations cleanly using elimination and verify in both equations.',
      'Solve linear-quadratic simultaneous equations by substitution and present clear paired answers.',
      'Interpret solutions graphically as points of intersection.',
    ],
  },
  'maths-3-1': {
    subtopicId: 'maths-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Straight Line Graphs (y = mx + c)',
    readingMinutes: 9,
    videoTitle: 'GCSE Maths - How to Find the Equation of a Straight Line (y = mx + c)',
    youtubeId: 'ys0Dxj-jKTk',
    videoChannel: 'Cognito',
    videoDuration: '4:28',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro: How to Find the Equation of a Line', cardId: 'maths-3-1-c1' },
      { time: '0:52', seconds: 52, label: 'Example 1: Identifying the Y-intercept (c)', cardId: 'maths-3-1-c1' },
      { time: '2:37', seconds: 157, label: 'Example 2: Finding the Equation', cardId: 'maths-3-1-c1' },
      { time: '3:53', seconds: 233, label: 'Forming the Final Equation', cardId: 'maths-3-1-c3' },
    ],
    cards: [
      {
        id: 'maths-3-1-c1',
        title: 'Gradient & y-Intercept (y = mx + c)',
        summary: 'Reading gradient m, y-intercept c, and midpoints from y = mx + c.',
        bullets: [
          'In **y = mx + c**, m is the gradient (rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)) and c is the y-intercept where the line crosses the y-axis.',
          'Always rearrange implicit equations into **y = mx + c** before reading m and c: 4x + 2y = 10 → 2y = −4x + 10 → y = −2x + 5 (so m = −2, c = 5).',
          'Midpoint of segment joining (x₁, y₁) and (x₂, y₂): ((x₁ + x₂)/2, (y₁ + y₂)/2).',
        ],
      },
      {
        id: 'maths-3-1-c2',
        title: 'Parallel & Perpendicular Gradients',
        summary: 'Identifying parallel lines and negative-reciprocal perpendicular gradients.',
        bullets: [
          '**Parallel lines have IDENTICAL gradients:** m₁ = m₂.',
          'Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: **m₁ × m₂ = −1** (so m₂ = −1 ÷ m₁).',
          '**Examples of perpendicular pairs:** m = 2 and m = −½; m = −3/4 and m = +4/3.',
        ],
        glossaryPills: [
          {
            term: 'negative reciprocal',
            definition: 'The value −1/m formed by inverting a fraction and reversing its sign, giving the gradient of a perpendicular line.',
          },
        ],
        memoryAid: 'Perpendicular gradient = Flip the fraction AND flip the sign!',
      },
      {
        id: 'maths-3-1-c3',
        title: 'Worked Exam Example (Equation of a Perpendicular Line)',
        summary: 'Step-by-step derivation of a perpendicular line through a given point.',
        bullets: [
          'Find the line **perpendicular** to y = 2x + 3 passing through (4, 5).',
          '**Step 1:** Original gradient m₁ = 2 → perpendicular gradient m₂ = −½.',
          '**Step 2:** Substitute (4, 5) into y = −½x + c → 5 = −½(4) + c → 5 = −2 + c → c = 7.',
          '**Final answer:** y = −½x + 7.',
        ],
        commonMistake: 'When substituting coordinates (x, y) into y = mx + c, double-check you put the y-coordinate on the left and x-coordinate on the right!',
      },
    ],
    keyTerms: [
      { term: 'Gradient', definition: 'Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).' },
      { term: 'Perpendicular lines', definition: 'Two lines meeting at 90° whose gradients multiply to −1.' },
    ],
    checklistPoints: [
      'Rearrange linear equations to y = mx + c to identify m and c.',
      'Find equations from two points or a gradient and one point.',
      'Use m₁ = m₂ for parallel lines and m₂ = −1/m₁ for perpendicular lines.',
    ],
  },
  'maths-4-1': {
    subtopicId: 'maths-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Direct & Inverse Proportion',
    readingMinutes: 9,
    videoTitle: 'GCSE Maths - What Does Directly Proportional Mean?',
    youtubeId: 'z9JlSDzSy3c',
    videoChannel: 'Cognito',
    videoDuration: '2:34',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Defining Directly Proportional', cardId: 'maths-4-1-c1' },
      { time: '0:55', seconds: 55, label: 'Graphical Representation', cardId: 'maths-4-1-c3' },
      { time: '1:05', seconds: 65, label: 'Key Features of the Graph', cardId: 'maths-4-1-c3' },
      { time: '1:51', seconds: 111, label: 'Summary', cardId: 'maths-4-1-c1' },
    ],
    cards: [
      {
        id: 'maths-4-1-c1',
        title: 'Direct Proportion (y ∝ x, x², √x)',
        summary: 'Setting up direct proportion formulas y = kx, kx², and k√x.',
        bullets: [
          'Two quantities are in direct proportion if one is a constant multiple of the other: y ∝ x means y = kx (straight-line graph through the origin (0, 0)).',
          '**Higher tier extends to powers and roots:** "y is directly proportional to the square of x" → y = kx²; "to the square root of x" → y = k√x.',
          '**Worked example:** y ∝ x³ and y = 32 when x = 2. Substitute: 32 = k(2³) = 8k → k = 4 → formula is y = 4x³. When x = 3, y = 4(27) = 108.',
        ],
        glossaryPills: [
          {
            term: 'direct proportion',
            definition: 'A relationship where two variables increase or decrease at the same constant ratio (y = kx), passing through the origin.',
          },
        ],
      },
      {
        id: 'maths-4-1-c2',
        title: 'Inverse Proportion (y ∝ 1/x, 1/x²)',
        summary: 'Solving inverse and inverse-square proportion problems with k.',
        bullets: [
          '**Inverse proportion** means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant).',
          '**For inverse square proportion:** y ∝ 1/x² → y = k ÷ x².',
          '**Worked example:** 5 painters finish a house in 12 hours. k = 5 × 12 = 60 painter-hours. For 8 painters, time = 60 ÷ 8 = 7.5 hours.',
          '**Worked example (algebraic):** F is inversely proportional to d². When d = 3, F = 10 → k = 10 × 3² = 90 → F = 90 ÷ d². When d = 6, F = 90 ÷ 36 = 2.5.',
        ],
        commonMistake: 'A straight line with a non-zero y-intercept (e.g., y = 2x + 5) is NOT direct proportion — a direct proportion graph MUST pass through (0, 0)!',
      },
      {
        id: 'maths-4-1-c3',
        title: 'Recognising Proportion Graphs',
        summary: 'Recognising straight-line, quadratic, and reciprocal proportion graphs.',
        bullets: [
          'y ∝ x: Straight line passing through the origin (0, 0).',
          'y ∝ x²: U-shaped curve starting at (0, 0) getting steeper as x increases.',
          'y ∝ 1/x (inverse): Smooth reciprocal curve in the first quadrant that approaches both axes asymptotically without ever touching 0.',
        ],
        memoryAid: 'Always follow 4 steps: (1) Write equation with k, (2) Plug in known pair to find k, (3) Rewrite formula with k, (4) Solve for unknown!',
      },
    ],
    keyTerms: [
      { term: 'Direct proportion', definition: 'Relationship y = kx where y/x remains constant.' },
      { term: 'Inverse proportion', definition: 'Relationship y = k/x where x × y remains constant.' },
    ],
    checklistPoints: [
      'Translate worded proportionality statements into equations with k (including x², x³, √x).',
      'Solve direct and inverse proportion problems using the 4-step k method.',
      'Sketch and recognise graphs of direct and inverse proportion.',
    ],
  },
  'maths-5-1': {
    subtopicId: 'maths-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Pythagoras’ Theorem & SOHCAHTOA Trigonometry',
    readingMinutes: 9,
    videoTitle: 'GCSE Maths - Pythagoras\' Theorem And How To Use It',
    youtubeId: 'CnHgqfBSgco',
    videoChannel: 'Cognito',
    videoDuration: '6:31',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Pythagoras\' Theorem', cardId: 'maths-5-1-c1' },
      { time: '1:00', seconds: 60, label: 'The Formula: a^2 + b^2 = c^2', cardId: 'maths-5-1-c1' },
      { time: '2:34', seconds: 154, label: 'Example 2: Calculating the Hypotenuse', cardId: 'maths-5-1-c1' },
      { time: '5:19', seconds: 319, label: 'Example 4: Exam Question Style (ABC)', cardId: 'maths-5-1-c1' },
    ],
    cards: [
      {
        id: 'maths-5-1-c1',
        title: 'Pythagoras’ Theorem',
        summary: 'Finding hypotenuses and shorter sides with a² + b² = c².',
        bullets: [
          '**In any right-angled triangle:** **a² + b² = c²**, where c is the hypotenuse (longest side directly opposite the 90° right angle).',
          '**Finding the hypotenuse:** c = √(a² + b²). Finding a shorter side: a = √(c² − b²).',
          '**Worked example:** Shorter sides 6 cm and 8 cm → hypotenuse = √(36 + 64) = √100 = 10 cm (a 3-4-5 scaled Pythagorean triple!).',
        ],
      },
      {
        id: 'maths-5-1-c2',
        title: 'SOHCAHTOA Trigonometry',
        summary: 'Labelling O, A, H and solving missing sides or angles via SOHCAHTOA.',
        bullets: [
          'Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°).',
          'sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj.',
          'Finding a missing side when the unknown is on the BOTTOM (e.g., sin 35° = 8 ÷ x): swap them → x = 8 ÷ sin 35° = 13.9 cm.',
          '**Finding a missing angle:** use inverse trig sin⁻¹, cos⁻¹, or tan⁻¹ (check calculator is in Degree mode "D"!).',
        ],
        glossaryPills: [
          {
            term: 'hypotenuse',
            definition: 'The longest side of a right-angled triangle, directly opposite the 90° angle.',
          },
        ],
        commonMistake: 'When solving cos 40° = 7 ÷ x, do NOT multiply 7 × cos 40° — rearrange properly to x = 7 ÷ cos 40°!',
      },
      {
        id: 'maths-5-1-c3',
        title: 'Exact Trigonometric Values (Non-Calculator Paper 1)',
        summary: 'Memorising exact non-calculator sin, cos, and tan values.',
        bullets: [
          'sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3).',
          'sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1.',
          'sin 60° = √3/2, cos 60° = ½, tan 60° = √3.',
          'sin 0° = 0, cos 0° = 1, sin 90° = 1, cos 90° = 0.',
        ],
        memoryAid: 'Hand trick / root pattern: sin(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2; cos is the exact reverse!',
      },
    ],
    keyTerms: [
      { term: 'Hypotenuse', definition: 'The longest side of a right-angled triangle, directly opposite the 90° angle.' },
      { term: 'Trigonometric ratio', definition: 'Ratio of two side lengths in a right-angled triangle (sine, cosine, or tangent) linked to an acute angle.' },
    ],
    checklistPoints: [
      'Use a² + b² = c² to find both hypotenuses and shorter sides.',
      'Label H, O, and A accurately relative to the target angle before applying SOHCAHTOA.',
      'Recall all exact trig values for 0°, 30°, 45°, 60°, and 90° for non-calculator exams.',
    ],
  },
  'maths-6-1': {
    subtopicId: 'maths-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Probability Trees & Venn Diagrams',
    readingMinutes: 9,
    videoTitle: 'Probability Tree Diagrams - GCSE Maths',
    youtubeId: 'Z5BX-LbG7mI',
    videoChannel: '1st Class Maths',
    videoDuration: '16:32',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'maths-6-1-c1' },
      { time: '3:00', seconds: 180, label: 'Example 2: Calculating Probabilities from Diagram', cardId: 'maths-6-1-c1' },
      { time: '5:02', seconds: 302, label: 'Example 3: Further Example', cardId: 'maths-6-1-c2' },
      { time: '12:36', seconds: 756, label: 'Example 5: Harder Tree Diagram', cardId: 'maths-6-1-c2' },
    ],
    cards: [
      {
        id: 'maths-6-1-c1',
        title: 'Probability Tree Diagrams (Independent Events)',
        summary: 'Using AND/OR branch rules and 1 − P(none) on probability trees.',
        bullets: [
          'Every pair/group of branches from a single node MUST sum to 1.',
          '**AND rule (moving along branches):** MULTIPLY probabilities along the path.',
          '**OR rule (combining separate end outcomes):** ADD the probabilities of valid paths.',
          '**Quick shortcut:** P(at least one success) = 1 − P(no successes).',
        ],
        memoryAid: 'Multiply ACROSS branches for AND; Add DOWN outcomes for OR!',
      },
      {
        id: 'maths-6-1-c2',
        title: 'Conditional Probability (Without Replacement)',
        summary: 'Adjusting numerators and denominators for without-replacement trees.',
        bullets: [
          'When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1.',
          '**Worked example:** A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28.',
          'P(one of each colour) = P(G, Y) + P(Y, G) = (3/8)(5/7) + (5/8)(3/7) = 30/56 = 15/28.',
        ],
        commonMistake: 'Do NOT leave the denominator at 8 on the second pick when a question states "without replacement" or "takes two sweets at random"!',
      },
      {
        id: 'maths-6-1-c3',
        title: 'Venn Diagrams & Set Notation',
        summary: 'Populating Venn overlaps and calculating ∩, ∪, ′, and given-that odds.',
        bullets: [
          'A ∩ B = intersection (elements in BOTH A and B). A ∪ B = union (elements in A, B, or both). A′ = complement (everything OUTSIDE A, including the outside box!).',
          'Always place the OVERLAP (A ∩ B) into the centre FIRST, then subtract that overlap from the total of circle A and circle B so you never double-count!',
          'Given-that probability P(A | B): restrict the denominator ONLY to circle B → P(A given B) = n(A ∩ B) ÷ n(B).',
        ],
        glossaryPills: [
          {
            term: 'complement',
            definition: 'The set A′ containing every element in the universal set that does NOT belong to set A.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Independent events', definition: 'Events where the outcome of the first does not affect the probabilities of the second.' },
      { term: 'Intersection (A ∩ B)', definition: 'Region of a Venn diagram belonging to both set A and set B.' },
      { term: 'Union (A ∪ B)', definition: 'All elements belonging to set A, set B, or both.' },
    ],
    checklistPoints: [
      'Draw and solve both independent and without-replacement probability tree diagrams.',
      'Populate Venn diagrams starting from the centre overlap so totals match accurately.',
      'Interpret ∩, ∪, ′ and conditional "given that" probabilities from Venn diagrams.',
    ],
  },
};

export const MATHS_QUIZZES: QuizQuestion[] = [
  {
    "id": "maths-q1",
    "subtopicId": "maths-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In a sale, all prices are reduced by 20%. A jacket costs £64 in the sale. Work out the original price of the jacket.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "64 ÷ 0.80 = £80.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Recognise £64 represents 80% (multiplier 0.80)",
          "requiredKeywordGroups": [
            [
              "0.8",
              "80%"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct original price £80",
          "numericMatch": {
            "value": 80,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "After a 20% reduction, 80% remains. £64 ÷ 0.8 = £80."
  },
  {
    "id": "maths-q2",
    "subtopicId": "maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Factorise fully: x² − 5x − 14.",
    "options": [
      "(x − 7)(x + 2)",
      "(x + 7)(x − 2)",
      "(x − 14)(x + 1)",
      "(x − 7)(x − 2)"
    ],
    "correctIndex": 0,
    "explanation": "−7 × 2 = −14 and −7 + 2 = −5, giving (x − 7)(x + 2)."
  },
  {
    "id": "maths-q3",
    "subtopicId": "maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A line has equation y = 2x + 3. What is the gradient of a line PERPENDICULAR to it?",
    "options": [
      "2",
      "−2",
      "−½",
      "½"
    ],
    "correctIndex": 2,
    "explanation": "The negative reciprocal of 2 is −1/2."
  },
  {
    "id": "maths-q4",
    "subtopicId": "maths-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A right-angled triangle has shorter sides 6 cm and 8 cm. Calculate the length of the hypotenuse.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "√(6² + 8²) = √(36 + 64) = √100 = 10 cm.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "6² + 8² = 100",
          "requiredKeywordGroups": [
            [
              "100",
              "36",
              "64"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Hypotenuse = 10 cm",
          "numericMatch": {
            "value": 10,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "6² + 8² = 36 + 64 = 100, so hypotenuse = √100 = 10 cm."
  },
  {
    "id": "maths-q5",
    "subtopicId": "maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Evaluate 27^(−2/3).",
    "options": [
      "−18",
      "1/9",
      "9",
      "1/3"
    ],
    "correctIndex": 1,
    "explanation": "Cube root of 27 is 3; 3² = 9; negative power takes reciprocal → 1/9."
  },
  {
    "id": "maths-q6",
    "subtopicId": "maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Solve the simultaneous equations: x + y = 10 and x − y = 4.",
    "options": [
      "x = 6, y = 4",
      "x = 7, y = 3",
      "x = 8, y = 2",
      "x = 3, y = 7"
    ],
    "correctIndex": 1,
    "explanation": "Adding gives 2x = 14 → x = 7, so 7 + y = 10 → y = 3."
  },
  {
    "id": "maths-q7",
    "subtopicId": "maths-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "y is directly proportional to x². When x = 3, y = 36. Calculate y when x = 5.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "36 = k(3²) → k = 4, so y = 4x². When x = 5, y = 4 × 25 = 100.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Find k = 4",
          "requiredKeywordGroups": [
            [
              "4"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct value y = 100",
          "numericMatch": {
            "value": 100,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "k = 36 ÷ 9 = 4. When x = 5, y = 4 × 5² = 100."
  },
  {
    "id": "maths-q8",
    "subtopicId": "maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A bag holds 3 red and 7 blue beads. Two beads are drawn WITHOUT replacement. What is the probability both are red?",
    "options": [
      "9/100",
      "6/90",
      "6/100",
      "3/10"
    ],
    "correctIndex": 1,
    "explanation": "P(R, R) = (3/10) × (2/9) = 6/90 (= 1/15)."
  },
  {
    "id": "maths-q-extra-108",
    "subtopicId": "maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.1 (Fractions, Percentages & Reverse Percentages), which of the following is the accurate definition of \"Multiplier\"?",
    "options": [
      "Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%).",
      "The inverse ratio of Compound interest measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Fractions, Percentages & Reverse Percentages.",
      "An experimental error caused by neglecting unit conversions in Fractions & Decimal Multipliers."
    ],
    "correctIndex": 0,
    "explanation": "Multiplier is defined as: Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%)."
  },
  {
    "id": "maths-q-extra-109",
    "subtopicId": "maths-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Compound Interest & Depreciation\" (1.1 Fractions, Percentages & Reverse Percentages).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ. 2. Worked example: £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ."
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09."
        }
      ]
    },
    "explanation": "From Compound Interest & Depreciation: Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ."
  },
  {
    "id": "maths-q-extra-110",
    "subtopicId": "maths-1-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.1 Fractions, Percentages & Reverse Percentages.",
    "options": [
      "Convert percentage increases and decreases into decimal multipliers accurately.",
      "In Fractions, Percentages & Reverse Percentages, standard unit conversions are never required before applying formulas.",
      "Calculate compound interest and depreciation over n years.",
      "Multiplier and Compound interest always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Convert percentage increases and decreases into decimal multipliers accurately.\" and \"Calculate compound interest and depreciation over n years.\" are core specification points."
  },
  {
    "id": "maths-q-extra-111",
    "subtopicId": "maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.1 (Fractions, Percentages & Reverse Percentages)?",
    "options": [
      "Never add 20% to a discounted price to reverse a 20% discount — divide by 0.80 instead!",
      "Always omit units and rounding in Fractions, Percentages & Reverse Percentages calculations.",
      "Never show intermediate working steps in 1.1 questions.",
      "Assume Multiplier is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never add 20% to a discounted price to reverse a 20% discount — divide by 0.80 instead!"
  },
  {
    "id": "maths-q-extra-113",
    "subtopicId": "maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.2 (Index Laws, Surds & Standard Form), which of the following is the accurate definition of \"Reciprocal\"?",
    "options": [
      "1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.",
      "The inverse ratio of Surd measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Index Laws, Surds & Standard Form.",
      "An experimental error caused by neglecting unit conversions in Index Laws (Negative & Fractional Powers)."
    ],
    "correctIndex": 0,
    "explanation": "Reciprocal is defined as: 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down."
  },
  {
    "id": "maths-q-extra-114",
    "subtopicId": "maths-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Simplifying & Rationalising Surds\" (1.2 Index Laws, Surds & Standard Form).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3. 2. Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3."
        },
        {
          "id": "mp2",
          "markDescription": "Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2."
        }
      ]
    },
    "explanation": "From Simplifying & Rationalising Surds: A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3."
  },
  {
    "id": "maths-q-extra-115",
    "subtopicId": "maths-1-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.2 Index Laws, Surds & Standard Form.",
    "options": [
      "Evaluate negative and fractional indices accurately without a calculator.",
      "In Index Laws, Surds & Standard Form, standard unit conversions are never required before applying formulas.",
      "Simplify surds, expand surd brackets, and rationalise single- and two-term denominators.",
      "Reciprocal and Surd always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Evaluate negative and fractional indices accurately without a calculator.\" and \"Simplify surds, expand surd brackets, and rationalise single- and two-term denominators.\" are core specification points."
  },
  {
    "id": "maths-q-extra-116",
    "subtopicId": "maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.2 (Index Laws, Surds & Standard Form)?",
    "options": [
      "Leaving an answer like 12 × 10⁹ loses the final accuracy mark — A MUST satisfy 1 ≤ A < 10, so rewrite as 1.2 × 10¹⁰!",
      "Always omit units and rounding in Index Laws, Surds & Standard Form calculations.",
      "Never show intermediate working steps in 1.2 questions.",
      "Assume Reciprocal is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Leaving an answer like 12 × 10⁹ loses the final accuracy mark — A MUST satisfy 1 ≤ A < 10, so rewrite as 1.2 × 10¹⁰!"
  },
  {
    "id": "maths-q-extra-118",
    "subtopicId": "maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.1 (Expanding, Factorising & Solving Quadratics), which of the following is the accurate definition of \"Quadratic equation\"?",
    "options": [
      "A polynomial equation of highest power 2 in the form ax² + bx + c = 0.",
      "The inverse ratio of Turning point measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Expanding, Factorising & Solving Quadratics.",
      "An experimental error caused by neglecting unit conversions in Factorising Quadratic Equations."
    ],
    "correctIndex": 0,
    "explanation": "Quadratic equation is defined as: A polynomial equation of highest power 2 in the form ax² + bx + c = 0."
  },
  {
    "id": "maths-q-extra-119",
    "subtopicId": "maths-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"The Quadratic Formula\" (2.1 Expanding, Factorising & Solving Quadratics).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures. 2. Worked example: Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures."
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.)."
        }
      ]
    },
    "explanation": "From The Quadratic Formula: Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures."
  },
  {
    "id": "maths-q-extra-120",
    "subtopicId": "maths-2-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.1 Expanding, Factorising & Solving Quadratics.",
    "options": [
      "Set the equation equal to 0 before factorising or applying the quadratic formula.",
      "In Expanding, Factorising & Solving Quadratics, standard unit conversions are never required before applying formulas.",
      "Use difference of two squares and AC-splitting when a > 1.",
      "Quadratic equation and Turning point always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Set the equation equal to 0 before factorising or applying the quadratic formula.\" and \"Use difference of two squares and AC-splitting when a > 1.\" are core specification points."
  },
  {
    "id": "maths-q-extra-121",
    "subtopicId": "maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.1 (Expanding, Factorising & Solving Quadratics)?",
    "options": [
      "Always put negative b inside brackets when squaring: (−3)² = +9, NOT −9!",
      "Always omit units and rounding in Expanding, Factorising & Solving Quadratics calculations.",
      "Never show intermediate working steps in 2.1 questions.",
      "Assume Quadratic equation is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Always put negative b inside brackets when squaring: (−3)² = +9, NOT −9!"
  },
  {
    "id": "maths-q-extra-123",
    "subtopicId": "maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.2 (Simultaneous Equations), which of the following is the accurate definition of \"Simultaneous equations\"?",
    "options": [
      "Two or more equations sharing unknowns that must be satisfied at the exact same values.",
      "The inverse ratio of Point of intersection measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Simultaneous Equations.",
      "An experimental error caused by neglecting unit conversions in Elimination Method (Two Linear Equations)."
    ],
    "correctIndex": 0,
    "explanation": "Simultaneous equations is defined as: Two or more equations sharing unknowns that must be satisfied at the exact same values."
  },
  {
    "id": "maths-q-extra-124",
    "subtopicId": "maths-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Substitution Method (Linear & Quadratic / Circle)\" (2.2 Simultaneous Equations).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation. 2. Worked example: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation."
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2."
        }
      ]
    },
    "explanation": "From Substitution Method (Linear & Quadratic / Circle): When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation."
  },
  {
    "id": "maths-q-extra-125",
    "subtopicId": "maths-2-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.2 Simultaneous Equations.",
    "options": [
      "Solve linear simultaneous equations cleanly using elimination and verify in both equations.",
      "In Simultaneous Equations, standard unit conversions are never required before applying formulas.",
      "Solve linear-quadratic simultaneous equations by substitution and present clear paired answers.",
      "Simultaneous equations and Point of intersection always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Solve linear simultaneous equations cleanly using elimination and verify in both equations.\" and \"Solve linear-quadratic simultaneous equations by substitution and present clear paired answers.\" are core specification points."
  },
  {
    "id": "maths-q-extra-126",
    "subtopicId": "maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.2 (Simultaneous Equations)?",
    "options": [
      "Expanding (2x + 1)² as 4x² + 1 is a classic trap — ALWAYS include the middle cross-term: (2x + 1)(2x + 1) = 4x² + 4x + 1!",
      "Always omit units and rounding in Simultaneous Equations calculations.",
      "Never show intermediate working steps in 2.2 questions.",
      "Assume Simultaneous equations is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Expanding (2x + 1)² as 4x² + 1 is a classic trap — ALWAYS include the middle cross-term: (2x + 1)(2x + 1) = 4x² + 4x + 1!"
  },
  {
    "id": "maths-q-extra-128",
    "subtopicId": "maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.1 (Straight Line Graphs (y = mx + c)), which of the following is the accurate definition of \"Gradient\"?",
    "options": [
      "Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).",
      "The inverse ratio of Perpendicular lines measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Straight Line Graphs (y = mx + c).",
      "An experimental error caused by neglecting unit conversions in Gradient & y-Intercept (y = mx + c)."
    ],
    "correctIndex": 0,
    "explanation": "Gradient is defined as: Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁)."
  },
  {
    "id": "maths-q-extra-129",
    "subtopicId": "maths-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Parallel & Perpendicular Gradients\" (3.1 Straight Line Graphs (y = mx + c)).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Parallel lines have IDENTICAL gradients: m₁ = m₂. 2. Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: m₁ × m₂ = −1 (so m₂ = −1 ÷ m₁).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Parallel lines have IDENTICAL gradients: m₁ = m₂."
        },
        {
          "id": "mp2",
          "markDescription": "Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: m₁ × m₂ = −1 (so m₂ = −1 ÷ m₁)."
        }
      ]
    },
    "explanation": "From Parallel & Perpendicular Gradients: Parallel lines have IDENTICAL gradients: m₁ = m₂."
  },
  {
    "id": "maths-q-extra-130",
    "subtopicId": "maths-3-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.1 Straight Line Graphs (y = mx + c).",
    "options": [
      "Rearrange linear equations to y = mx + c to identify m and c.",
      "In Straight Line Graphs (y = mx + c), standard unit conversions are never required before applying formulas.",
      "Find equations from two points or a gradient and one point.",
      "Gradient and Perpendicular lines always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Rearrange linear equations to y = mx + c to identify m and c.\" and \"Find equations from two points or a gradient and one point.\" are core specification points."
  },
  {
    "id": "maths-q-extra-131",
    "subtopicId": "maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.1 (Straight Line Graphs (y = mx + c))?",
    "options": [
      "When substituting coordinates (x, y) into y = mx + c, double-check you put the y-coordinate on the left and x-coordinate on the right!",
      "Always omit units and rounding in Straight Line Graphs (y = mx + c) calculations.",
      "Never show intermediate working steps in 3.1 questions.",
      "Assume Gradient is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When substituting coordinates (x, y) into y = mx + c, double-check you put the y-coordinate on the left and x-coordinate on the right!"
  },
  {
    "id": "maths-q-extra-133",
    "subtopicId": "maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.1 (Direct & Inverse Proportion), which of the following is the accurate definition of \"Direct proportion\"?",
    "options": [
      "Relationship y = kx where y/x remains constant.",
      "The inverse ratio of Inverse proportion measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Direct & Inverse Proportion.",
      "An experimental error caused by neglecting unit conversions in Direct Proportion (y ∝ x, x², √x)."
    ],
    "correctIndex": 0,
    "explanation": "Direct proportion is defined as: Relationship y = kx where y/x remains constant."
  },
  {
    "id": "maths-q-extra-134",
    "subtopicId": "maths-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Inverse Proportion (y ∝ 1/x, 1/x²)\" (4.1 Direct & Inverse Proportion).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant). 2. For inverse square proportion: y ∝ 1/x² → y = k ÷ x².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant)."
        },
        {
          "id": "mp2",
          "markDescription": "For inverse square proportion: y ∝ 1/x² → y = k ÷ x²."
        }
      ]
    },
    "explanation": "From Inverse Proportion (y ∝ 1/x, 1/x²): Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant)."
  },
  {
    "id": "maths-q-extra-135",
    "subtopicId": "maths-4-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.1 Direct & Inverse Proportion.",
    "options": [
      "Translate worded proportionality statements into equations with k (including x², x³, √x).",
      "In Direct & Inverse Proportion, standard unit conversions are never required before applying formulas.",
      "Solve direct and inverse proportion problems using the 4-step k method.",
      "Direct proportion and Inverse proportion always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Translate worded proportionality statements into equations with k (including x², x³, √x).\" and \"Solve direct and inverse proportion problems using the 4-step k method.\" are core specification points."
  },
  {
    "id": "maths-q-extra-136",
    "subtopicId": "maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.1 (Direct & Inverse Proportion)?",
    "options": [
      "A straight line with a non-zero y-intercept (e.g., y = 2x + 5) is NOT direct proportion — a direct proportion graph MUST pass through (0, 0)!",
      "Always omit units and rounding in Direct & Inverse Proportion calculations.",
      "Never show intermediate working steps in 4.1 questions.",
      "Assume Direct proportion is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "A straight line with a non-zero y-intercept (e.g., y = 2x + 5) is NOT direct proportion — a direct proportion graph MUST pass through (0, 0)!"
  },
  {
    "id": "maths-q-extra-138",
    "subtopicId": "maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.1 (Pythagoras’ Theorem & SOHCAHTOA Trigonometry), which of the following is the accurate definition of \"Hypotenuse\"?",
    "options": [
      "The longest side of a right-angled triangle, directly opposite the 90° angle.",
      "The inverse ratio of Trigonometric ratio measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Pythagoras’ Theorem & SOHCAHTOA Trigonometry.",
      "An experimental error caused by neglecting unit conversions in Pythagoras’ Theorem."
    ],
    "correctIndex": 0,
    "explanation": "Hypotenuse is defined as: The longest side of a right-angled triangle, directly opposite the 90° angle."
  },
  {
    "id": "maths-q-extra-139",
    "subtopicId": "maths-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"SOHCAHTOA Trigonometry\" (5.1 Pythagoras’ Theorem & SOHCAHTOA Trigonometry).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°). 2. sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°)."
        },
        {
          "id": "mp2",
          "markDescription": "sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj."
        }
      ]
    },
    "explanation": "From SOHCAHTOA Trigonometry: Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°)."
  },
  {
    "id": "maths-q-extra-140",
    "subtopicId": "maths-5-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.1 Pythagoras’ Theorem & SOHCAHTOA Trigonometry.",
    "options": [
      "Use a² + b² = c² to find both hypotenuses and shorter sides.",
      "In Pythagoras’ Theorem & SOHCAHTOA Trigonometry, standard unit conversions are never required before applying formulas.",
      "Label H, O, and A accurately relative to the target angle before applying SOHCAHTOA.",
      "Hypotenuse and Trigonometric ratio always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Use a² + b² = c² to find both hypotenuses and shorter sides.\" and \"Label H, O, and A accurately relative to the target angle before applying SOHCAHTOA.\" are core specification points."
  },
  {
    "id": "maths-q-extra-141",
    "subtopicId": "maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.1 (Pythagoras’ Theorem & SOHCAHTOA Trigonometry)?",
    "options": [
      "When solving cos 40° = 7 ÷ x, do NOT multiply 7 × cos 40° — rearrange properly to x = 7 ÷ cos 40°!",
      "Always omit units and rounding in Pythagoras’ Theorem & SOHCAHTOA Trigonometry calculations.",
      "Never show intermediate working steps in 5.1 questions.",
      "Assume Hypotenuse is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When solving cos 40° = 7 ÷ x, do NOT multiply 7 × cos 40° — rearrange properly to x = 7 ÷ cos 40°!"
  },
  {
    "id": "maths-q-extra-143",
    "subtopicId": "maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.1 (Probability Trees & Venn Diagrams), which of the following is the accurate definition of \"Independent events\"?",
    "options": [
      "Events where the outcome of the first does not affect the probabilities of the second.",
      "The inverse ratio of Intersection (A ∩ B) measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Probability Trees & Venn Diagrams.",
      "An experimental error caused by neglecting unit conversions in Probability Tree Diagrams (Independent Events)."
    ],
    "correctIndex": 0,
    "explanation": "Independent events is defined as: Events where the outcome of the first does not affect the probabilities of the second."
  },
  {
    "id": "maths-q-extra-144",
    "subtopicId": "maths-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Conditional Probability (Without Replacement)\" (6.1 Probability Trees & Venn Diagrams).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1. 2. Worked example: A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1."
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28."
        }
      ]
    },
    "explanation": "From Conditional Probability (Without Replacement): When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1."
  },
  {
    "id": "maths-q-extra-145",
    "subtopicId": "maths-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.1 Probability Trees & Venn Diagrams.",
    "options": [
      "Draw and solve both independent and without-replacement probability tree diagrams.",
      "In Probability Trees & Venn Diagrams, standard unit conversions are never required before applying formulas.",
      "Populate Venn diagrams starting from the centre overlap so totals match accurately.",
      "Independent events and Intersection (A ∩ B) always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Draw and solve both independent and without-replacement probability tree diagrams.\" and \"Populate Venn diagrams starting from the centre overlap so totals match accurately.\" are core specification points."
  },
  {
    "id": "maths-q-extra-146",
    "subtopicId": "maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.1 (Probability Trees & Venn Diagrams)?",
    "options": [
      "Do NOT leave the denominator at 8 on the second pick when a question states \"without replacement\" or \"takes two sweets at random\"!",
      "Always omit units and rounding in Probability Trees & Venn Diagrams calculations.",
      "Never show intermediate working steps in 6.1 questions.",
      "Assume Independent events is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Do NOT leave the denominator at 8 on the second pick when a question states \"without replacement\" or \"takes two sweets at random\"!"
  }
];

export const MATHS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "maths-fc-1",
    "subtopicId": "maths-1-1",
    "front": "How do you find the original value after a 15% decrease?",
    "backBullets": [
      "Divide the sale price by 0.85 (Original = Final ÷ Multiplier)"
    ]
  },
  {
    "id": "maths-fc-2",
    "subtopicId": "maths-1-2",
    "front": "How do you evaluate a fractional negative index like a^(−m/n)?",
    "backBullets": [
      "Take the nth root first, raise to power m, then take the reciprocal (1 ÷ result)"
    ]
  },
  {
    "id": "maths-fc-3",
    "subtopicId": "maths-2-1",
    "front": "What is the minimum turning point of y = (x + p)² + q?",
    "backBullets": [
      "(−p, q) — flip the sign inside the bracket, keep the sign outside"
    ]
  },
  {
    "id": "maths-fc-4",
    "subtopicId": "maths-2-2",
    "front": "State the elimination rule SSS for linear simultaneous equations.",
    "backBullets": [
      "Same Signs Subtract; Different Signs Add"
    ]
  },
  {
    "id": "maths-fc-5",
    "subtopicId": "maths-3-1",
    "front": "How are gradients of perpendicular lines related?",
    "backBullets": [
      "m₁ × m₂ = −1 (negative reciprocal: flip fraction and change sign)"
    ]
  },
  {
    "id": "maths-fc-6",
    "subtopicId": "maths-4-1",
    "front": "Write the equations for direct and inverse square proportion.",
    "backBullets": [
      "Direct: y = kx²",
      "Inverse square: y = k ÷ x²"
    ]
  },
  {
    "id": "maths-fc-7",
    "subtopicId": "maths-5-1",
    "front": "Recall sin 30°, cos 60°, and tan 45°.",
    "backBullets": [
      "sin 30° = ½",
      "cos 60° = ½",
      "tan 45° = 1"
    ]
  },
  {
    "id": "maths-fc-8",
    "subtopicId": "maths-6-1",
    "front": "What is the fast formula for P(at least one success)?",
    "backBullets": [
      "1 − P(zero successes)"
    ]
  },
  {
    "id": "maths-fc-extra-108",
    "subtopicId": "maths-1-1",
    "front": "1.1 Fractions & Decimal Multipliers: What are the essential exam points to remember?",
    "backBullets": [
      "Always change mixed numbers into improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12.",
      "Use a decimal multiplier for one-step percentage changes: to increase by 15%, multiply by 1.15; to decrease by 15%, multiply by 0.85; for a 3.5% rise, multiply by 1.035.",
      "Percentage change = ((New − Original) ÷ Original) × 100%."
    ]
  },
  {
    "id": "maths-fc-extra-109",
    "subtopicId": "maths-1-1",
    "front": "1.1 Compound Interest & Depreciation: What are the essential exam points to remember?",
    "backBullets": [
      "Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ.",
      "Worked example: £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09.",
      "Depreciation (car losing 12% value per year for 3 years): Final = Initial × (0.88)³."
    ],
    "hint": "Compound = Multiply by (Multiplier)^n; Simple = Add the same fixed interest every year."
  },
  {
    "id": "maths-fc-extra-110",
    "subtopicId": "maths-1-1",
    "front": "1.1 Reverse Percentages: What are the essential exam points to remember?",
    "backBullets": [
      "When given a FINAL price AFTER a percentage change, DIVIDE by the multiplier to recover the original 100% value.",
      "Worked example: A jacket costs £64 after a 20% sale reduction. £64 equals 80% (0.80 × original), so Original = £64 ÷ 0.80 = £80.",
      "Worked example (increase): After a 10% rise, a ticket costs £55. £55 equals 110% (1.10), so Original = £55 ÷ 1.10 = £50."
    ]
  },
  {
    "id": "maths-fc-extra-111",
    "subtopicId": "maths-1-1",
    "front": "Define: Multiplier (1.1)",
    "backBullets": [
      "Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%)."
    ]
  },
  {
    "id": "maths-fc-extra-112",
    "subtopicId": "maths-1-2",
    "front": "1.2 Index Laws (Negative & Fractional Powers): What are the essential exam points to remember?",
    "backBullets": [
      "Core laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1.",
      "Negative power = reciprocal: a⁻ⁿ = 1 ÷ aⁿ, and (a/b)⁻ⁿ = (b/a)ⁿ. Example: 5⁻² = 1/25; (3/4)⁻² = 16/9.",
      "Fractional power = root then power: a^(m/n) = (ⁿ√a)ᵐ. Example: 8^(2/3) = (³√8)² = 2² = 4; 16^(−3/4) = 1 ÷ (⁴√16)³ = 1/8."
    ],
    "hint": "Take the ROOT (denominator) first so the numbers stay tiny, then raise to the POWER (numerator), then flip if negative!"
  },
  {
    "id": "maths-fc-extra-113",
    "subtopicId": "maths-1-2",
    "front": "1.2 Simplifying & Rationalising Surds: What are the essential exam points to remember?",
    "backBullets": [
      "A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3.",
      "Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2.",
      "Rationalise a single-term denominator by multiplying top and bottom by √b: 10/√5 = (10√5)/5 = 2√5."
    ]
  },
  {
    "id": "maths-fc-extra-114",
    "subtopicId": "maths-1-2",
    "front": "1.2 Standard Form Calculations: What are the essential exam points to remember?",
    "backBullets": [
      "Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 64,000 = 6.4 × 10⁴; 0.0032 = 3.2 × 10⁻³.",
      "Multiplying/dividing: multiply/divide the front numbers and add/subtract the powers of 10, then adjust if A ≥ 10 or A < 1. Example: (4 × 10⁵) × (3 × 10⁴) = 12 × 10⁹ = 1.2 × 10¹⁰.",
      "Adding/subtracting: convert both numbers to ordinary numbers OR adjust to the SAME power of 10 before adding!"
    ]
  },
  {
    "id": "maths-fc-extra-115",
    "subtopicId": "maths-1-2",
    "front": "Define: Reciprocal (1.2)",
    "backBullets": [
      "1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down."
    ]
  },
  {
    "id": "maths-fc-extra-116",
    "subtopicId": "maths-2-1",
    "front": "2.1 Factorising Quadratic Equations: What are the essential exam points to remember?",
    "backBullets": [
      "Always rearrange into ax² + bx + c = 0 BEFORE factorising.",
      "For x² + bx + c = 0, find two numbers that multiply to c and add to b. Example: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2.",
      "Difference of two squares: a² − b² = (a + b)(a − b). Example: 4x² − 25 = (2x + 5)(2x − 5)."
    ]
  },
  {
    "id": "maths-fc-extra-117",
    "subtopicId": "maths-2-1",
    "front": "2.1 The Quadratic Formula: What are the essential exam points to remember?",
    "backBullets": [
      "Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures.",
      "Worked example: Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.)."
    ]
  },
  {
    "id": "maths-fc-extra-118",
    "subtopicId": "maths-2-1",
    "front": "2.1 Completing the Square & Turning Points: What are the essential exam points to remember?",
    "backBullets": [
      "Write x² + bx + c as (x + b/2)² − (b/2)² + c. Example: x² + 8x + 10 = (x + 4)² − 16 + 10 = (x + 4)² − 6.",
      "The minimum turning point of y = (x + p)² + q is (−p, q). For y = (x + 4)² − 6, the turning point is (−4, −6)."
    ],
    "hint": "Vertex from (x + p)² + q: FLIP the inside sign, KEEP the outside sign!"
  },
  {
    "id": "maths-fc-extra-119",
    "subtopicId": "maths-2-1",
    "front": "Define: Quadratic equation (2.1)",
    "backBullets": [
      "A polynomial equation of highest power 2 in the form ax² + bx + c = 0."
    ]
  },
  {
    "id": "maths-fc-extra-120",
    "subtopicId": "maths-2-2",
    "front": "2.2 Elimination Method (Two Linear Equations): What are the essential exam points to remember?",
    "backBullets": [
      "Multiply one or both equations so that the coefficients of either x or y have the exact same size.",
      "Apply SSS: Same Signs Subtract; Different Signs Add to eliminate that variable.",
      "Worked example: 2x + 3y = 19 and 5x − 3y = 9. Since +3y and −3y have DIFFERENT signs, ADD them: 7x = 28 → x = 4. Substitute into 2(4) + 3y = 19 → 3y = 11 → y = 11/3."
    ],
    "hint": "SSS = Same Signs Subtract; Different Signs Add!"
  },
  {
    "id": "maths-fc-extra-121",
    "subtopicId": "maths-2-2",
    "front": "2.2 Substitution Method (Linear & Quadratic / Circle): What are the essential exam points to remember?",
    "backBullets": [
      "When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation.",
      "Worked example: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2.",
      "Substitute BOTH x-values into y = 2x + 1 to obtain paired solutions: (1.2, 3.4) and (−2, −3)."
    ]
  },
  {
    "id": "maths-fc-extra-122",
    "subtopicId": "maths-2-2",
    "front": "2.2 Graphical Meaning of Simultaneous Solutions: What are the essential exam points to remember?",
    "backBullets": [
      "The solution (x, y) to a pair of simultaneous equations is the exact COORDINATE OF INTERSECTION where the two graphs cross.",
      "Two parallel straight lines have identical gradients and never cross — so they have NO simultaneous solution.",
      "A straight line intersecting a quadratic or circle can have 2 solutions (secant), 1 repeated solution (tangent), or 0 real solutions (misses curve)."
    ]
  },
  {
    "id": "maths-fc-extra-123",
    "subtopicId": "maths-2-2",
    "front": "Define: Simultaneous equations (2.2)",
    "backBullets": [
      "Two or more equations sharing unknowns that must be satisfied at the exact same values."
    ]
  },
  {
    "id": "maths-fc-extra-124",
    "subtopicId": "maths-3-1",
    "front": "3.1 Gradient & y-Intercept (y = mx + c): What are the essential exam points to remember?",
    "backBullets": [
      "In y = mx + c, m is the gradient (rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)) and c is the y-intercept where the line crosses the y-axis.",
      "Always rearrange implicit equations into y = mx + c before reading m and c: 4x + 2y = 10 → 2y = −4x + 10 → y = −2x + 5 (so m = −2, c = 5).",
      "Midpoint of segment joining (x₁, y₁) and (x₂, y₂): ((x₁ + x₂)/2, (y₁ + y₂)/2)."
    ]
  },
  {
    "id": "maths-fc-extra-125",
    "subtopicId": "maths-3-1",
    "front": "3.1 Parallel & Perpendicular Gradients: What are the essential exam points to remember?",
    "backBullets": [
      "Parallel lines have IDENTICAL gradients: m₁ = m₂.",
      "Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: m₁ × m₂ = −1 (so m₂ = −1 ÷ m₁).",
      "Examples of perpendicular pairs: m = 2 and m = −½; m = −3/4 and m = +4/3."
    ],
    "hint": "Perpendicular gradient = Flip the fraction AND flip the sign!"
  },
  {
    "id": "maths-fc-extra-126",
    "subtopicId": "maths-3-1",
    "front": "3.1 Worked Exam Example (Equation of a Perpendicular Line): What are the essential exam points to remember?",
    "backBullets": [
      "Find the line perpendicular to y = 2x + 3 passing through (4, 5).",
      "Step 1: Original gradient m₁ = 2 → perpendicular gradient m₂ = −½.",
      "Step 2: Substitute (4, 5) into y = −½x + c → 5 = −½(4) + c → 5 = −2 + c → c = 7."
    ]
  },
  {
    "id": "maths-fc-extra-127",
    "subtopicId": "maths-3-1",
    "front": "Define: Gradient (3.1)",
    "backBullets": [
      "Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁)."
    ]
  },
  {
    "id": "maths-fc-extra-128",
    "subtopicId": "maths-4-1",
    "front": "4.1 Direct Proportion (y ∝ x, x², √x): What are the essential exam points to remember?",
    "backBullets": [
      "Two quantities are in direct proportion if one is a constant multiple of the other: y ∝ x means y = kx (straight-line graph through the origin (0, 0)).",
      "Higher tier extends to powers and roots: \"y is directly proportional to the square of x\" → y = kx²; \"to the square root of x\" → y = k√x.",
      "Worked example: y ∝ x³ and y = 32 when x = 2. Substitute: 32 = k(2³) = 8k → k = 4 → formula is y = 4x³. When x = 3, y = 4(27) = 108."
    ]
  },
  {
    "id": "maths-fc-extra-129",
    "subtopicId": "maths-4-1",
    "front": "4.1 Inverse Proportion (y ∝ 1/x, 1/x²): What are the essential exam points to remember?",
    "backBullets": [
      "Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant).",
      "For inverse square proportion: y ∝ 1/x² → y = k ÷ x².",
      "Worked example: 5 painters finish a house in 12 hours. k = 5 × 12 = 60 painter-hours. For 8 painters, time = 60 ÷ 8 = 7.5 hours."
    ]
  },
  {
    "id": "maths-fc-extra-130",
    "subtopicId": "maths-4-1",
    "front": "4.1 Recognising Proportion Graphs: What are the essential exam points to remember?",
    "backBullets": [
      "y ∝ x: Straight line passing through the origin (0, 0).",
      "y ∝ x²: U-shaped curve starting at (0, 0) getting steeper as x increases.",
      "y ∝ 1/x (inverse): Smooth reciprocal curve in the first quadrant that approaches both axes asymptotically without ever touching 0."
    ],
    "hint": "Always follow 4 steps: (1) Write equation with k, (2) Plug in known pair to find k, (3) Rewrite formula with k, (4) Solve for unknown!"
  },
  {
    "id": "maths-fc-extra-131",
    "subtopicId": "maths-4-1",
    "front": "Define: Direct proportion (4.1)",
    "backBullets": [
      "Relationship y = kx where y/x remains constant."
    ]
  },
  {
    "id": "maths-fc-extra-132",
    "subtopicId": "maths-5-1",
    "front": "5.1 Pythagoras’ Theorem: What are the essential exam points to remember?",
    "backBullets": [
      "In any right-angled triangle: a² + b² = c², where c is the hypotenuse (longest side directly opposite the 90° right angle).",
      "Finding the hypotenuse: c = √(a² + b²). Finding a shorter side: a = √(c² − b²).",
      "Worked example: Shorter sides 6 cm and 8 cm → hypotenuse = √(36 + 64) = √100 = 10 cm (a 3-4-5 scaled Pythagorean triple!)."
    ]
  },
  {
    "id": "maths-fc-extra-133",
    "subtopicId": "maths-5-1",
    "front": "5.1 SOHCAHTOA Trigonometry: What are the essential exam points to remember?",
    "backBullets": [
      "Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°).",
      "sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj.",
      "Finding a missing side when the unknown is on the BOTTOM (e.g., sin 35° = 8 ÷ x): swap them → x = 8 ÷ sin 35° = 13.9 cm."
    ]
  },
  {
    "id": "maths-fc-extra-134",
    "subtopicId": "maths-5-1",
    "front": "5.1 Exact Trigonometric Values (Non-Calculator Paper 1): What are the essential exam points to remember?",
    "backBullets": [
      "sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3).",
      "sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1.",
      "sin 60° = √3/2, cos 60° = ½, tan 60° = √3."
    ],
    "hint": "Hand trick / root pattern: sin(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2; cos is the exact reverse!"
  },
  {
    "id": "maths-fc-extra-135",
    "subtopicId": "maths-5-1",
    "front": "Define: Hypotenuse (5.1)",
    "backBullets": [
      "The longest side of a right-angled triangle, directly opposite the 90° angle."
    ]
  },
  {
    "id": "maths-fc-extra-136",
    "subtopicId": "maths-6-1",
    "front": "6.1 Probability Tree Diagrams (Independent Events): What are the essential exam points to remember?",
    "backBullets": [
      "Every pair/group of branches from a single node MUST sum to 1.",
      "AND rule (moving along branches): MULTIPLY probabilities along the path.",
      "OR rule (combining separate end outcomes): ADD the probabilities of valid paths."
    ],
    "hint": "Multiply ACROSS branches for AND; Add DOWN outcomes for OR!"
  },
  {
    "id": "maths-fc-extra-137",
    "subtopicId": "maths-6-1",
    "front": "6.1 Conditional Probability (Without Replacement): What are the essential exam points to remember?",
    "backBullets": [
      "When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1.",
      "Worked example: A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28.",
      "P(one of each colour) = P(G, Y) + P(Y, G) = (3/8)(5/7) + (5/8)(3/7) = 30/56 = 15/28."
    ]
  },
  {
    "id": "maths-fc-extra-138",
    "subtopicId": "maths-6-1",
    "front": "6.1 Venn Diagrams & Set Notation: What are the essential exam points to remember?",
    "backBullets": [
      "A ∩ B = intersection (elements in BOTH A and B). A ∪ B = union (elements in A, B, or both). A′ = complement (everything OUTSIDE A, including the outside box!).",
      "Always place the OVERLAP (A ∩ B) into the centre FIRST, then subtract that overlap from the total of circle A and circle B so you never double-count!",
      "Given-that probability P(A | B): restrict the denominator ONLY to circle B → P(A given B) = n(A ∩ B) ÷ n(B)."
    ]
  },
  {
    "id": "maths-fc-extra-139",
    "subtopicId": "maths-6-1",
    "front": "Define: Independent events (6.1)",
    "backBullets": [
      "Events where the outcome of the first does not affect the probabilities of the second."
    ]
  }
];

export const MATHS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-maths-topic-1",
    "slug": "topic-1-numbers",
    "title": "Topic 1: Numbers — Complete Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Numbers",
    "summary": "One-page revision summary covering 1.1 Fractions, Percentages & Reverse Percentages; 1.2 Index Laws, Surds & Standard Form.",
    "accentColor": "#8d22cc",
    "sections": [
      {
        "heading": "1.1 Fractions, Percentages & Reverse Percentages",
        "formula": "Final = Initial × (1 ± r/100)ⁿ  |  Original = Final ÷ Multiplier",
        "points": [
          "Convert percentage increases and decreases into decimal multipliers accurately.",
          "Calculate compound interest and depreciation over n years."
        ]
      },
      {
        "heading": "1.2 Index Laws, Surds & Standard Form",
        "formula": "a⁻ⁿ = 1/aⁿ  |  a^(m/n) = (ⁿ√a)ᵐ  |  A × 10ⁿ (1 ≤ A < 10)",
        "points": [
          "Evaluate negative and fractional indices accurately without a calculator.",
          "Simplify surds, expand surd brackets, and rationalise single- and two-term denominators.",
          "Tip: Take the ROOT (denominator) first so the numbers stay tiny, then raise to the POWER (numerator), then flip if negative!"
        ]
      }
    ]
  },
  {
    "id": "cs-maths-topic-2",
    "slug": "topic-2-algebra",
    "title": "Topic 2: Algebra — Complete Cheat Sheet",
    "topicNumber": 2,
    "topicName": "Algebra",
    "summary": "One-page revision summary covering 2.1 Expanding, Factorising & Solving Quadratics; 2.2 Simultaneous Equations.",
    "accentColor": "#1a96f3",
    "sections": [
      {
        "heading": "2.1 Expanding, Factorising & Solving Quadratics",
        "formula": "x = (−b ± √(b² − 4ac)) ÷ 2a  |  a² − b² = (a + b)(a − b)",
        "points": [
          "Set the equation equal to 0 before factorising or applying the quadratic formula.",
          "Use difference of two squares and AC-splitting when a > 1."
        ]
      },
      {
        "heading": "2.2 Simultaneous Equations",
        "formula": "x² + bx + c = (x + b/2)² − (b/2)² + c  |  Vertex (−p, q)",
        "points": [
          "Solve linear simultaneous equations cleanly using elimination and verify in both equations.",
          "Solve linear-quadratic simultaneous equations by substitution and present clear paired answers.",
          "Tip: SSS = Same Signs Subtract; Different Signs Add!"
        ]
      }
    ]
  },
  {
    "id": "cs-maths-topic-3",
    "slug": "topic-3-graphs",
    "title": "Topic 3: Graphs — Complete Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Graphs",
    "summary": "One-page revision summary covering 3.1 Straight Line Graphs (y = mx + c).",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "3.1 Straight Line Graphs (y = mx + c)",
        "formula": "y = mx + c  |  m = (y₂ − y₁) ÷ (x₂ − x₁)",
        "points": [
          "Rearrange linear equations to y = mx + c to identify m and c.",
          "Find equations from two points or a gradient and one point."
        ]
      }
    ]
  },
  {
    "id": "cs-maths-topic-4",
    "slug": "topic-4-ratio-proportion-rates-of-change",
    "title": "Topic 4: Ratio, Proportion & Rates of Change — Complete Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Ratio, Proportion & Rates of Change",
    "summary": "One-page revision summary covering 4.1 Direct & Inverse Proportion.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "4.1 Direct & Inverse Proportion",
        "formula": "Direct: y = kx, y = kx², y = k√x",
        "points": [
          "Translate worded proportionality statements into equations with k (including x², x³, √x).",
          "Solve direct and inverse proportion problems using the 4-step k method."
        ]
      }
    ]
  },
  {
    "id": "cs-maths-topic-5",
    "slug": "topic-5-geometry-measures",
    "title": "Topic 5: Geometry & Measures — Complete Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Geometry & Measures",
    "summary": "One-page revision summary covering 5.1 Pythagoras’ Theorem & SOHCAHTOA Trigonometry.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "5.1 Pythagoras’ Theorem & SOHCAHTOA Trigonometry",
        "formula": "a² + b² = c² (Pythagoras)",
        "points": [
          "Use a² + b² = c² to find both hypotenuses and shorter sides.",
          "Label H, O, and A accurately relative to the target angle before applying SOHCAHTOA."
        ]
      }
    ]
  },
  {
    "id": "cs-maths-topic-6",
    "slug": "topic-6-probability-statistics",
    "title": "Topic 6: Probability & Statistics — Complete Cheat Sheet",
    "topicNumber": 6,
    "topicName": "Probability & Statistics",
    "summary": "One-page revision summary covering 6.1 Probability Trees & Venn Diagrams.",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "6.1 Probability Trees & Venn Diagrams",
        "formula": "P(A and B) = P(A) × P(B | A)  |  P(at least one) = 1 − P(none)",
        "points": [
          "Draw and solve both independent and without-replacement probability tree diagrams.",
          "Populate Venn diagrams starting from the centre overlap so totals match accurately.",
          "Tip: Multiply ACROSS branches for AND; Add DOWN outcomes for OR!"
        ]
      }
    ]
  }
];

export const MATHS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "maths-exam-1",
    "subtopicId": "maths-1-1",
    "number": 1,
    "stimulus": "Structured exam question on Topic 1.1 (Fractions, Percentages & Reverse Percentages). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-1a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Fractions, Percentages & Reverse Percentages?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Convert percentage increases and decreases into decimal multipliers accurately.",
          "It violates the core rule of Fractions, Percentages & Reverse Percentages by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Multiplier.",
          "It assumes Compound interest remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-1b",
        "label": "b)",
        "prompt": "Define \"Multiplier\" and explain the key principles covered in \"Compound Interest & Depreciation\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Multiplier: Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%). Furthermore, Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ. Worked example: £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Multiplier: Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09."
            }
          ]
        }
      },
      {
        "id": "maths-exam-1c",
        "label": "c)",
        "prompt": "Apply \"Reverse Percentages\" to explain how examiners award full marks on Fractions, Percentages & Reverse Percentages problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "When given a FINAL price AFTER a percentage change, DIVIDE by the multiplier to recover the original 100% value. Worked example: A jacket costs £64 after a 20% sale reduction. £64 equals 80% (0.80 × original), so Original = £64 ÷ 0.80 = £80. Avoid: Never add 20% to a discounted price to reverse a 20% discount — divide by 0.80 instead!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "When given a FINAL price AFTER a percentage change, DIVIDE by the multiplier to recover the original 100% value."
            },
            {
              "id": "mp2",
              "markDescription": "Worked example: A jacket costs £64 after a 20% sale reduction. £64 equals 80% (0.80 × original), so Original = £64 ÷ 0.80 = £80."
            },
            {
              "id": "mp3",
              "markDescription": "Never add 20% to a discounted price to reverse a 20% discount — divide by 0.80 instead!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-2",
    "subtopicId": "maths-1-2",
    "number": 2,
    "stimulus": "Structured exam question on Topic 1.2 (Index Laws, Surds & Standard Form). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-2a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Index Laws, Surds & Standard Form?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Evaluate negative and fractional indices accurately without a calculator.",
          "It violates the core rule of Index Laws, Surds & Standard Form by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Reciprocal.",
          "It assumes Surd remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-2b",
        "label": "b)",
        "prompt": "Define \"Reciprocal\" and explain the key principles covered in \"Simplifying & Rationalising Surds\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Reciprocal: 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down. Furthermore, A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3. Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Reciprocal: 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2."
            }
          ]
        }
      },
      {
        "id": "maths-exam-2c",
        "label": "c)",
        "prompt": "Apply \"Standard Form Calculations\" to explain how examiners award full marks on Index Laws, Surds & Standard Form problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 64,000 = 6.4 × 10⁴; 0.0032 = 3.2 × 10⁻³. Multiplying/dividing: multiply/divide the front numbers and add/subtract the powers of 10, then adjust if A ≥ 10 or A < 1. Example: (4 × 10⁵) × (3 × 10⁴) = 12 × 10⁹ = 1.2 × 10¹⁰. Avoid: Leaving an answer like 12 × 10⁹ loses the final accuracy mark — A MUST satisfy 1 ≤ A < 10, so rewrite as 1.2 × 10¹⁰!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 64,000 = 6.4 × 10⁴; 0.0032 = 3.2 × 10⁻³."
            },
            {
              "id": "mp2",
              "markDescription": "Multiplying/dividing: multiply/divide the front numbers and add/subtract the powers of 10, then adjust if A ≥ 10 or A < 1. Example: (4 × 10⁵) × (3 × 10⁴) = 12 × 10⁹ = 1.2 × 10¹⁰."
            },
            {
              "id": "mp3",
              "markDescription": "Leaving an answer like 12 × 10⁹ loses the final accuracy mark — A MUST satisfy 1 ≤ A < 10, so rewrite as 1.2 × 10¹⁰!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-3",
    "subtopicId": "maths-2-1",
    "number": 3,
    "stimulus": "Structured exam question on Topic 2.1 (Expanding, Factorising & Solving Quadratics). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-3a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Expanding, Factorising & Solving Quadratics?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Set the equation equal to 0 before factorising or applying the quadratic formula.",
          "It violates the core rule of Expanding, Factorising & Solving Quadratics by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Quadratic equation.",
          "It assumes Turning point remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-3b",
        "label": "b)",
        "prompt": "Define \"Quadratic equation\" and explain the key principles covered in \"The Quadratic Formula\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Quadratic equation: A polynomial equation of highest power 2 in the form ax² + bx + c = 0. Furthermore, Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures. Worked example: Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Quadratic equation: A polynomial equation of highest power 2 in the form ax² + bx + c = 0."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.)."
            }
          ]
        }
      },
      {
        "id": "maths-exam-3c",
        "label": "c)",
        "prompt": "Apply \"Completing the Square & Turning Points\" to explain how examiners award full marks on Expanding, Factorising & Solving Quadratics problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Write x² + bx + c as (x + b/2)² − (b/2)² + c. Example: x² + 8x + 10 = (x + 4)² − 16 + 10 = (x + 4)² − 6. The minimum turning point of y = (x + p)² + q is (−p, q). For y = (x + 4)² − 6, the turning point is (−4, −6).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Write x² + bx + c as (x + b/2)² − (b/2)² + c. Example: x² + 8x + 10 = (x + 4)² − 16 + 10 = (x + 4)² − 6."
            },
            {
              "id": "mp2",
              "markDescription": "The minimum turning point of y = (x + p)² + q is (−p, q). For y = (x + 4)² − 6, the turning point is (−4, −6)."
            },
            {
              "id": "mp3",
              "markDescription": "Set the equation equal to 0 before factorising or applying the quadratic formula."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-4",
    "subtopicId": "maths-2-2",
    "number": 4,
    "stimulus": "Structured exam question on Topic 2.2 (Simultaneous Equations). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-4a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Simultaneous Equations?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Solve linear simultaneous equations cleanly using elimination and verify in both equations.",
          "It violates the core rule of Simultaneous Equations by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Simultaneous equations.",
          "It assumes Point of intersection remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-4b",
        "label": "b)",
        "prompt": "Define \"Simultaneous equations\" and explain the key principles covered in \"Substitution Method (Linear & Quadratic / Circle)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Simultaneous equations: Two or more equations sharing unknowns that must be satisfied at the exact same values. Furthermore, When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation. Worked example: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Simultaneous equations: Two or more equations sharing unknowns that must be satisfied at the exact same values."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2."
            }
          ]
        }
      },
      {
        "id": "maths-exam-4c",
        "label": "c)",
        "prompt": "Apply \"Graphical Meaning of Simultaneous Solutions\" to explain how examiners award full marks on Simultaneous Equations problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "The solution (x, y) to a pair of simultaneous equations is the exact COORDINATE OF INTERSECTION where the two graphs cross. Two parallel straight lines have identical gradients and never cross — so they have NO simultaneous solution.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "The solution (x, y) to a pair of simultaneous equations is the exact COORDINATE OF INTERSECTION where the two graphs cross."
            },
            {
              "id": "mp2",
              "markDescription": "Two parallel straight lines have identical gradients and never cross — so they have NO simultaneous solution."
            },
            {
              "id": "mp3",
              "markDescription": "SSS = Same Signs Subtract; Different Signs Add!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-5",
    "subtopicId": "maths-3-1",
    "number": 5,
    "stimulus": "Structured exam question on Topic 3.1 (Straight Line Graphs (y = mx + c)). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-5a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Straight Line Graphs (y = mx + c)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Rearrange linear equations to y = mx + c to identify m and c.",
          "It violates the core rule of Straight Line Graphs (y = mx + c) by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Gradient.",
          "It assumes Perpendicular lines remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-5b",
        "label": "b)",
        "prompt": "Define \"Gradient\" and explain the key principles covered in \"Parallel & Perpendicular Gradients\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Gradient: Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁). Furthermore, Parallel lines have IDENTICAL gradients: m₁ = m₂. Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: m₁ × m₂ = −1 (so m₂ = −1 ÷ m₁).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Gradient: Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Parallel lines have IDENTICAL gradients: m₁ = m₂."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: m₁ × m₂ = −1 (so m₂ = −1 ÷ m₁)."
            }
          ]
        }
      },
      {
        "id": "maths-exam-5c",
        "label": "c)",
        "prompt": "Apply \"Worked Exam Example (Equation of a Perpendicular Line)\" to explain how examiners award full marks on Straight Line Graphs (y = mx + c) problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Find the line perpendicular to y = 2x + 3 passing through (4, 5). Step 1: Original gradient m₁ = 2 → perpendicular gradient m₂ = −½. Avoid: When substituting coordinates (x, y) into y = mx + c, double-check you put the y-coordinate on the left and x-coordinate on the right!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Find the line perpendicular to y = 2x + 3 passing through (4, 5)."
            },
            {
              "id": "mp2",
              "markDescription": "Step 1: Original gradient m₁ = 2 → perpendicular gradient m₂ = −½."
            },
            {
              "id": "mp3",
              "markDescription": "When substituting coordinates (x, y) into y = mx + c, double-check you put the y-coordinate on the left and x-coordinate on the right!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-6",
    "subtopicId": "maths-4-1",
    "number": 6,
    "stimulus": "Structured exam question on Topic 4.1 (Direct & Inverse Proportion). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-6a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Direct & Inverse Proportion?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Translate worded proportionality statements into equations with k (including x², x³, √x).",
          "It violates the core rule of Direct & Inverse Proportion by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Direct proportion.",
          "It assumes Inverse proportion remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-6b",
        "label": "b)",
        "prompt": "Define \"Direct proportion\" and explain the key principles covered in \"Inverse Proportion (y ∝ 1/x, 1/x²)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Direct proportion: Relationship y = kx where y/x remains constant. Furthermore, Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant). For inverse square proportion: y ∝ 1/x² → y = k ÷ x².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Direct proportion: Relationship y = kx where y/x remains constant."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: For inverse square proportion: y ∝ 1/x² → y = k ÷ x²."
            }
          ]
        }
      },
      {
        "id": "maths-exam-6c",
        "label": "c)",
        "prompt": "Apply \"Recognising Proportion Graphs\" to explain how examiners award full marks on Direct & Inverse Proportion problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "y ∝ x: Straight line passing through the origin (0, 0). y ∝ x²: U-shaped curve starting at (0, 0) getting steeper as x increases.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "y ∝ x: Straight line passing through the origin (0, 0)."
            },
            {
              "id": "mp2",
              "markDescription": "y ∝ x²: U-shaped curve starting at (0, 0) getting steeper as x increases."
            },
            {
              "id": "mp3",
              "markDescription": "Translate worded proportionality statements into equations with k (including x², x³, √x)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-7",
    "subtopicId": "maths-5-1",
    "number": 7,
    "stimulus": "Structured exam question on Topic 5.1 (Pythagoras’ Theorem & SOHCAHTOA Trigonometry). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-7a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Pythagoras’ Theorem & SOHCAHTOA Trigonometry?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Use a² + b² = c² to find both hypotenuses and shorter sides.",
          "It violates the core rule of Pythagoras’ Theorem & SOHCAHTOA Trigonometry by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Hypotenuse.",
          "It assumes Trigonometric ratio remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-7b",
        "label": "b)",
        "prompt": "Define \"Hypotenuse\" and explain the key principles covered in \"SOHCAHTOA Trigonometry\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Hypotenuse: The longest side of a right-angled triangle, directly opposite the 90° angle. Furthermore, Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°). sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Hypotenuse: The longest side of a right-angled triangle, directly opposite the 90° angle."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj."
            }
          ]
        }
      },
      {
        "id": "maths-exam-7c",
        "label": "c)",
        "prompt": "Apply \"Exact Trigonometric Values (Non-Calculator Paper 1)\" to explain how examiners award full marks on Pythagoras’ Theorem & SOHCAHTOA Trigonometry problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3). sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3)."
            },
            {
              "id": "mp2",
              "markDescription": "sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1."
            },
            {
              "id": "mp3",
              "markDescription": "Use a² + b² = c² to find both hypotenuses and shorter sides."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "maths-exam-8",
    "subtopicId": "maths-6-1",
    "number": 8,
    "stimulus": "Structured exam question on Topic 6.1 (Probability Trees & Venn Diagrams). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "maths-exam-8a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Probability Trees & Venn Diagrams?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Draw and solve both independent and without-replacement probability tree diagrams.",
          "It violates the core rule of Probability Trees & Venn Diagrams by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Independent events.",
          "It assumes Intersection (A ∩ B) remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "maths-exam-8b",
        "label": "b)",
        "prompt": "Define \"Independent events\" and explain the key principles covered in \"Conditional Probability (Without Replacement)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Independent events: Events where the outcome of the first does not affect the probabilities of the second. Furthermore, When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1. Worked example: A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Independent events: Events where the outcome of the first does not affect the probabilities of the second."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28."
            }
          ]
        }
      },
      {
        "id": "maths-exam-8c",
        "label": "c)",
        "prompt": "Apply \"Venn Diagrams & Set Notation\" to explain how examiners award full marks on Probability Trees & Venn Diagrams problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "A ∩ B = intersection (elements in BOTH A and B). A ∪ B = union (elements in A, B, or both). A′ = complement (everything OUTSIDE A, including the outside box!). Always place the OVERLAP (A ∩ B) into the centre FIRST, then subtract that overlap from the total of circle A and circle B so you never double-count!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "A ∩ B = intersection (elements in BOTH A and B). A ∪ B = union (elements in A, B, or both). A′ = complement (everything OUTSIDE A, including the outside box!)."
            },
            {
              "id": "mp2",
              "markDescription": "Always place the OVERLAP (A ∩ B) into the centre FIRST, then subtract that overlap from the total of circle A and circle B so you never double-count!"
            },
            {
              "id": "mp3",
              "markDescription": "Multiply ACROSS branches for AND; Add DOWN outcomes for OR!"
            }
          ]
        }
      }
    ]
  }
];

export const MATHS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "maths-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Paper 1 Non-Calculator (1MA1/1H)",
    "tier": "Higher",
    "series": "June 2024",
    "paperCode": "1MA1/1H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet (Non-Calculator).",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Work out 2 ⅓ × 1 ¾. Give your answer as a mixed number in its simplest form.",
        "marks": 2,
        "markScheme": [
          "Convert to improper fractions: (7/3) × (7/4) = 49/12 (1 mark)",
          "Convert to mixed number: 4 1/12 (1 mark)"
        ]
      },
      {
        "number": "2",
        "question": "Solve x² − 7x + 12 = 0.",
        "marks": 2,
        "markScheme": [
          "Factorise: (x − 3)(x − 4) = 0 (1 mark)",
          "Solutions: x = 3 or x = 4 (1 mark)"
        ]
      },
      {
        "number": "01",
        "question": "[Topic 1.1 — Fractions, Percentages & Reverse Percentages] (a) Define Multiplier. (b) Apply the principles of \"Fractions & Decimal Multipliers\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Multiplier — Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%).",
          "2 marks: Always change mixed numbers into improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12.",
          "1 mark: Use a decimal multiplier for one-step percentage changes: to increase by 15%, multiply by 1.15; to decrease by 15%, multiply by 0.85; for a 3.5% rise, multiply by 1.035."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.1 — Expanding, Factorising & Solving Quadratics] (a) Define Quadratic equation. (b) Apply the principles of \"The Quadratic Formula\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic equation — A polynomial equation of highest power 2 in the form ax² + bx + c = 0.",
          "2 marks: Quadratic formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Use whenever the question asks for decimal places or significant figures.",
          "1 mark: Worked example: Solve 2x² − 3x − 7 = 0. Here a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (2 d.p.)."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Paper 2 Calculator (1MA1/2H)",
    "tier": "Higher",
    "series": "June 2024",
    "paperCode": "1MA1/2H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "£4,000 is invested at 3.5% compound interest per year. Work out the value after 4 years.",
        "marks": 2,
        "markScheme": [
          "Multiplier method: 4000 × 1.035⁴ (1 mark)",
          "Final value = £4,590.09 (1 mark)"
        ]
      },
      {
        "number": "01",
        "question": "[Topic 2.1 — Expanding, Factorising & Solving Quadratics] (a) Define Quadratic equation. (b) Apply the principles of \"Factorising Quadratic Equations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic equation — A polynomial equation of highest power 2 in the form ax² + bx + c = 0.",
          "2 marks: Always rearrange into ax² + bx + c = 0 BEFORE factorising.",
          "1 mark: For x² + bx + c = 0, find two numbers that multiply to c and add to b. Example: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 3.1 — Straight Line Graphs (y = mx + c)] (a) Define Gradient. (b) Apply the principles of \"Parallel & Perpendicular Gradients\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gradient — Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).",
          "2 marks: Parallel lines have IDENTICAL gradients: m₁ = m₂.",
          "1 mark: Perpendicular lines meet at 90° and have NEGATIVE RECIPROCAL gradients: m₁ × m₂ = −1 (so m₂ = −1 ÷ m₁)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.1 — Pythagoras’ Theorem & SOHCAHTOA Trigonometry] (a) Define Hypotenuse. (b) Apply the principles of \"Exact Trigonometric Values (Non-Calculator Paper 1)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Hypotenuse — The longest side of a right-angled triangle, directly opposite the 90° angle.",
          "2 marks: sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3).",
          "1 mark: sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2024-p3",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Paper 3 Calculator (1MA1/3H)",
    "tier": "Higher",
    "series": "June 2024",
    "paperCode": "1MA1/3H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.1 — Straight Line Graphs (y = mx + c)] (a) Define Gradient. (b) Apply the principles of \"Gradient & y-Intercept (y = mx + c)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gradient — Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).",
          "2 marks: In y = mx + c, m is the gradient (rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)) and c is the y-intercept where the line crosses the y-axis.",
          "1 mark: Always rearrange implicit equations into y = mx + c before reading m and c: 4x + 2y = 10 → 2y = −4x + 10 → y = −2x + 5 (so m = −2, c = 5)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 5.1 — Pythagoras’ Theorem & SOHCAHTOA Trigonometry] (a) Define Hypotenuse. (b) Apply the principles of \"SOHCAHTOA Trigonometry\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Hypotenuse — The longest side of a right-angled triangle, directly opposite the 90° angle.",
          "2 marks: Label Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (touching θ and 90°).",
          "1 mark: sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 1.1 — Fractions, Percentages & Reverse Percentages] (a) Define Multiplier. (b) Apply the principles of \"Reverse Percentages\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Multiplier — Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%).",
          "2 marks: When given a FINAL price AFTER a percentage change, DIVIDE by the multiplier to recover the original 100% value.",
          "1 mark: Worked example: A jacket costs £64 after a 20% sale reduction. £64 equals 80% (0.80 × original), so Original = £64 ÷ 0.80 = £80."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 2.1 — Expanding, Factorising & Solving Quadratics] (a) Define Quadratic equation. (b) Apply the principles of \"Factorising Quadratic Equations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic equation — A polynomial equation of highest power 2 in the form ax² + bx + c = 0.",
          "2 marks: Always rearrange into ax² + bx + c = 0 BEFORE factorising.",
          "1 mark: For x² + bx + c = 0, find two numbers that multiply to c and add to b. Example: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Paper 1 Non-Calculator (1MA1/1H)",
    "tier": "Higher",
    "series": "June 2023",
    "paperCode": "1MA1/1H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet (Non-Calculator).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.2 — Index Laws, Surds & Standard Form] (a) Define Reciprocal. (b) Apply the principles of \"Index Laws (Negative & Fractional Powers)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Reciprocal — 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.",
          "2 marks: Core laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1.",
          "1 mark: Negative power = reciprocal: a⁻ⁿ = 1 ÷ aⁿ, and (a/b)⁻ⁿ = (b/a)ⁿ. Example: 5⁻² = 1/25; (3/4)⁻² = 16/9."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.2 — Simultaneous Equations] (a) Define Simultaneous equations. (b) Apply the principles of \"Substitution Method (Linear & Quadratic / Circle)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Simultaneous equations — Two or more equations sharing unknowns that must be satisfied at the exact same values.",
          "2 marks: When one equation has x² or y² (e.g., y = 2x + 1 and x² + y² = 13), solve by substitution: rearrange the linear equation to isolate one variable and replace it in the quadratic equation.",
          "1 mark: Worked example: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0 → (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 4.1 — Direct & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Recognising Proportion Graphs\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship y = kx where y/x remains constant.",
          "2 marks: y ∝ x: Straight line passing through the origin (0, 0).",
          "1 mark: y ∝ x²: U-shaped curve starting at (0, 0) getting steeper as x increases."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 6.1 — Probability Trees & Venn Diagrams] (a) Define Independent events. (b) Apply the principles of \"Probability Tree Diagrams (Independent Events)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Independent events — Events where the outcome of the first does not affect the probabilities of the second.",
          "2 marks: Every pair/group of branches from a single node MUST sum to 1.",
          "1 mark: AND rule (moving along branches): MULTIPLY probabilities along the path."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Paper 2 Calculator (1MA1/2H)",
    "tier": "Higher",
    "series": "June 2023",
    "paperCode": "1MA1/2H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 2.2 — Simultaneous Equations] (a) Define Simultaneous equations. (b) Apply the principles of \"Elimination Method (Two Linear Equations)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Simultaneous equations — Two or more equations sharing unknowns that must be satisfied at the exact same values.",
          "2 marks: Multiply one or both equations so that the coefficients of either x or y have the exact same size.",
          "1 mark: Apply SSS: Same Signs Subtract; Different Signs Add to eliminate that variable."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.1 — Direct & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Inverse Proportion (y ∝ 1/x, 1/x²)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship y = kx where y/x remains constant.",
          "2 marks: Inverse proportion means as x multiplies by a factor, y divides by that factor: y ∝ 1/x → y = k ÷ x (so x × y = k is constant).",
          "1 mark: For inverse square proportion: y ∝ 1/x² → y = k ÷ x²."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 6.1 — Probability Trees & Venn Diagrams] (a) Define Independent events. (b) Apply the principles of \"Venn Diagrams & Set Notation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Independent events — Events where the outcome of the first does not affect the probabilities of the second.",
          "2 marks: A ∩ B = intersection (elements in BOTH A and B). A ∪ B = union (elements in A, B, or both). A′ = complement (everything OUTSIDE A, including the outside box!).",
          "1 mark: Always place the OVERLAP (A ∩ B) into the centre FIRST, then subtract that overlap from the total of circle A and circle B so you never double-count!"
        ]
      },
      {
        "number": "04",
        "question": "[Topic 1.2 — Index Laws, Surds & Standard Form] (a) Define Reciprocal. (b) Apply the principles of \"Index Laws (Negative & Fractional Powers)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Reciprocal — 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.",
          "2 marks: Core laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1.",
          "1 mark: Negative power = reciprocal: a⁻ⁿ = 1 ÷ aⁿ, and (a/b)⁻ⁿ = (b/a)ⁿ. Example: 5⁻² = 1/25; (3/4)⁻² = 16/9."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2023-p3",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Paper 3 Calculator (1MA1/3H)",
    "tier": "Higher",
    "series": "June 2023",
    "paperCode": "1MA1/3H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 4.1 — Direct & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Direct Proportion (y ∝ x, x², √x)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship y = kx where y/x remains constant.",
          "2 marks: Two quantities are in direct proportion if one is a constant multiple of the other: y ∝ x means y = kx (straight-line graph through the origin (0, 0)).",
          "1 mark: Higher tier extends to powers and roots: \"y is directly proportional to the square of x\" → y = kx²; \"to the square root of x\" → y = k√x."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 6.1 — Probability Trees & Venn Diagrams] (a) Define Independent events. (b) Apply the principles of \"Conditional Probability (Without Replacement)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Independent events — Events where the outcome of the first does not affect the probabilities of the second.",
          "2 marks: When items are NOT replaced, the total denominator drops by 1 on the second pick, and the chosen category’s numerator also drops by 1.",
          "1 mark: Worked example: A jar has 3 green and 5 yellow sweets (8 total). Pick 2 without replacement: P(both green) = (3/8) × (2/7) = 6/56 = 3/28."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 1.2 — Index Laws, Surds & Standard Form] (a) Define Reciprocal. (b) Apply the principles of \"Standard Form Calculations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Reciprocal — 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.",
          "2 marks: Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 64,000 = 6.4 × 10⁴; 0.0032 = 3.2 × 10⁻³.",
          "1 mark: Multiplying/dividing: multiply/divide the front numbers and add/subtract the powers of 10, then adjust if A ≥ 10 or A < 1. Example: (4 × 10⁵) × (3 × 10⁴) = 12 × 10⁹ = 1.2 × 10¹⁰."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 2.2 — Simultaneous Equations] (a) Define Simultaneous equations. (b) Apply the principles of \"Elimination Method (Two Linear Equations)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Simultaneous equations — Two or more equations sharing unknowns that must be satisfied at the exact same values.",
          "2 marks: Multiply one or both equations so that the coefficients of either x or y have the exact same size.",
          "1 mark: Apply SSS: Same Signs Subtract; Different Signs Add to eliminate that variable."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Paper 1 Non-Calculator (1MA1/1H)",
    "tier": "Higher",
    "series": "June 2022",
    "paperCode": "1MA1/1H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Official GCSE Maths Higher Formulae Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 5.1 — Pythagoras’ Theorem & SOHCAHTOA Trigonometry] (a) Define Hypotenuse. (b) Apply the principles of \"Pythagoras’ Theorem\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Hypotenuse — The longest side of a right-angled triangle, directly opposite the 90° angle.",
          "2 marks: In any right-angled triangle: a² + b² = c², where c is the hypotenuse (longest side directly opposite the 90° right angle).",
          "1 mark: Finding the hypotenuse: c = √(a² + b²). Finding a shorter side: a = √(c² − b²)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 1.1 — Fractions, Percentages & Reverse Percentages] (a) Define Multiplier. (b) Apply the principles of \"Compound Interest & Depreciation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Multiplier — Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%).",
          "2 marks: Compound growth/decay applies the multiplier repeatedly for n years: Final = Initial × (Multiplier)ⁿ.",
          "1 mark: Worked example: £4,000 invested at 3.5% compound interest for 4 years → 4000 × (1.035)⁴ = £4,590.09."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 2.1 — Expanding, Factorising & Solving Quadratics] (a) Define Quadratic equation. (b) Apply the principles of \"Completing the Square & Turning Points\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic equation — A polynomial equation of highest power 2 in the form ax² + bx + c = 0.",
          "2 marks: Write x² + bx + c as (x + b/2)² − (b/2)² + c. Example: x² + 8x + 10 = (x + 4)² − 16 + 10 = (x + 4)² − 6.",
          "1 mark: The minimum turning point of y = (x + p)² + q is (−p, q). For y = (x + 4)² − 6, the turning point is (−4, −6)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 3.1 — Straight Line Graphs (y = mx + c)] (a) Define Gradient. (b) Apply the principles of \"Gradient & y-Intercept (y = mx + c)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gradient — Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).",
          "2 marks: In y = mx + c, m is the gradient (rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁)) and c is the y-intercept where the line crosses the y-axis.",
          "1 mark: Always rearrange implicit equations into y = mx + c before reading m and c: 4x + 2y = 10 → 2y = −4x + 10 → y = −2x + 5 (so m = −2, c = 5)."
        ]
      }
    ]
  },
  {
    "id": "maths-pp-2019-p1",
    "specEra": "old",
    "year": "2019",
    "title": "Paper 1 Non-Calculator (Legacy Series — 1MA1/1H)",
    "tier": "Higher",
    "series": "June 2019",
    "paperCode": "1MA1/1H",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Unassisted Formulae Recall Series (2019).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 6.1 — Probability Trees & Venn Diagrams] (a) Define Independent events. (b) Apply the principles of \"Probability Tree Diagrams (Independent Events)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Independent events — Events where the outcome of the first does not affect the probabilities of the second.",
          "2 marks: Every pair/group of branches from a single node MUST sum to 1.",
          "1 mark: AND rule (moving along branches): MULTIPLY probabilities along the path."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 1.2 — Index Laws, Surds & Standard Form] (a) Define Reciprocal. (b) Apply the principles of \"Simplifying & Rationalising Surds\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Reciprocal — 1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.",
          "2 marks: A surd is an exact irrational root like √2, √3, or √5. Simplify by factoring out the largest square number: √48 = √(16 × 3) = 4√3.",
          "1 mark: Add/subtract like surds after simplifying: √50 + √8 = 5√2 + 2√2 = 7√2."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 2.2 — Simultaneous Equations] (a) Define Simultaneous equations. (b) Apply the principles of \"Graphical Meaning of Simultaneous Solutions\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Simultaneous equations — Two or more equations sharing unknowns that must be satisfied at the exact same values.",
          "2 marks: The solution (x, y) to a pair of simultaneous equations is the exact COORDINATE OF INTERSECTION where the two graphs cross.",
          "1 mark: Two parallel straight lines have identical gradients and never cross — so they have NO simultaneous solution."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.1 — Direct & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Direct Proportion (y ∝ x, x², √x)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship y = kx where y/x remains constant.",
          "2 marks: Two quantities are in direct proportion if one is a constant multiple of the other: y ∝ x means y = kx (straight-line graph through the origin (0, 0)).",
          "1 mark: Higher tier extends to powers and roots: \"y is directly proportional to the square of x\" → y = kx²; \"to the square root of x\" → y = k√x."
        ]
      }
    ]
  }
];

export const MATHS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "maths-kt-100",
    "term": "Multiplier",
    "definition": "Decimal factor corresponding to a percentage increase or decrease (e.g., 1.04 for +4%).",
    "topicNumber": 1,
    "subtopicId": "maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "maths-kt-101",
    "term": "Compound interest",
    "definition": "Interest calculated on both the starting amount and previously earned interest: A = P(1 + r/100)ⁿ.",
    "topicNumber": 1,
    "subtopicId": "maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "maths-kt-102",
    "term": "Reciprocal",
    "definition": "1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.",
    "topicNumber": 1,
    "subtopicId": "maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "maths-kt-103",
    "term": "Surd",
    "definition": "Exact irrational root written with a square-root sign.",
    "topicNumber": 1,
    "subtopicId": "maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "maths-kt-104",
    "term": "Standard form",
    "definition": "Scientific notation A × 10ⁿ where 1 ≤ A < 10 and n is an integer.",
    "topicNumber": 1,
    "subtopicId": "maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "maths-kt-105",
    "term": "Quadratic equation",
    "definition": "A polynomial equation of highest power 2 in the form ax² + bx + c = 0.",
    "topicNumber": 2,
    "subtopicId": "maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "maths-kt-106",
    "term": "Turning point",
    "definition": "Vertex (minimum or maximum point) of a parabolic graph y = ax² + bx + c.",
    "topicNumber": 2,
    "subtopicId": "maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "maths-kt-107",
    "term": "Simultaneous equations",
    "definition": "Two or more equations sharing unknowns that must be satisfied at the exact same values.",
    "topicNumber": 2,
    "subtopicId": "maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "maths-kt-108",
    "term": "Point of intersection",
    "definition": "Coordinate pair (x, y) where two graphs meet, representing their simultaneous solution.",
    "topicNumber": 2,
    "subtopicId": "maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "maths-kt-109",
    "term": "Substitution",
    "definition": "Replacing one variable in an equation with an equivalent algebraic expression derived from another equation.",
    "topicNumber": 2,
    "subtopicId": "maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "maths-kt-110",
    "term": "Gradient",
    "definition": "Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).",
    "topicNumber": 3,
    "subtopicId": "maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "maths-kt-111",
    "term": "Perpendicular lines",
    "definition": "Two lines meeting at 90° whose gradients multiply to −1.",
    "topicNumber": 3,
    "subtopicId": "maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "maths-kt-112",
    "term": "Negative reciprocal",
    "definition": "The value −1/m formed by inverting a fraction and reversing its sign, giving the gradient of a perpendicular line.",
    "topicNumber": 3,
    "subtopicId": "maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "maths-kt-113",
    "term": "Direct proportion",
    "definition": "Relationship y = kx where y/x remains constant.",
    "topicNumber": 4,
    "subtopicId": "maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "maths-kt-114",
    "term": "Inverse proportion",
    "definition": "Relationship y = k/x where x × y remains constant.",
    "topicNumber": 4,
    "subtopicId": "maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "maths-kt-115",
    "term": "Hypotenuse",
    "definition": "The longest side of a right-angled triangle, directly opposite the 90° angle.",
    "topicNumber": 5,
    "subtopicId": "maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "maths-kt-116",
    "term": "Trigonometric ratio",
    "definition": "Ratio of two side lengths in a right-angled triangle (sine, cosine, or tangent) linked to an acute angle.",
    "topicNumber": 5,
    "subtopicId": "maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "maths-kt-117",
    "term": "Independent events",
    "definition": "Events where the outcome of the first does not affect the probabilities of the second.",
    "topicNumber": 6,
    "subtopicId": "maths-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "maths-kt-118",
    "term": "Intersection (A ∩ B)",
    "definition": "Region of a Venn diagram belonging to both set A and set B.",
    "topicNumber": 6,
    "subtopicId": "maths-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "maths-kt-119",
    "term": "Union (A ∪ B)",
    "definition": "All elements belonging to set A, set B, or both.",
    "topicNumber": 6,
    "subtopicId": "maths-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "maths-kt-120",
    "term": "Complement",
    "definition": "The set A′ containing every element in the universal set that does NOT belong to set A.",
    "topicNumber": 6,
    "subtopicId": "maths-6-1",
    "subtopicCode": "6.1"
  }
];
