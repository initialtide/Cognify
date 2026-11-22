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
      { time: '2:49', seconds: 169, label: 'Example 2: Finding Original Price after Decrease (Sale)', cardId: 'maths-1-1-c2' },
      { time: '4:56', seconds: 296, label: 'Reverse Percentages Using the Value Change', cardId: 'maths-1-1-c3' },
      { time: '6:59', seconds: 419, label: 'Example 5: Calculating Original Price from Decrease Value', cardId: 'maths-1-1-c3' },
    ],
    cards: [
      {
        id: 'maths-1-1-c1',
        title: 'Fractions & Decimal Multipliers',
        summary: 'Improper fraction arithmetic, one-step decimal multipliers, and percentage change.',
        bullets: [
          'Using a decimal **multiplier** turns any percentage increase or decrease into a single multiplication step.',
        ],
        subsections: [
          {
            heading: 'Mixed Numbers & Percentage Change',
            bullets: [
              '**Mixed numbers** - convert to improper fractions before multiplying or dividing (for division, multiply by the reciprocal).',
              '**Decimal multipliers** - increase by r%: multiply by (1 + r/100), e.g. +15% → ×1.15, +3.5% → ×1.035; decrease by r%: multiply by (1 − r/100), e.g. −15% → ×0.85.',
              '**Percentage change** - Percentage change = ((New − Original) ÷ Original) × 100%.',
            ],
            exampleHeading: 'Worked example: Mixed number multiplication',
            examples: [
              'Calculate 2⅓ × 1¾: convert to improper fractions → (7/3) × (7/4).',
              'Multiply tops and bottoms: 49/12 = 4 1/12.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'multiplier',
            definition: 'A decimal factor representing a percentage increase (1 + r/100) or decrease (1 − r/100) in a single step.',
          },
          {
            term: 'improper fractions',
            definition: 'Fractions whose numerator is greater than or equal to the denominator (e.g. 7/3), required before multiplying or dividing mixed numbers.',
          },
        ],
      },
      {
        id: 'maths-1-1-c2',
        title: 'Compound Interest & Depreciation',
        summary: 'Applying Final = Initial × (Multiplier)ⁿ for repeated percentage growth and decay.',
        bullets: [
          'In **compound interest**, each year’s percentage applies to the updated balance rather than only the starting deposit.',
        ],
        subsections: [
          {
            heading: 'Repeated Percentage Formula',
            bullets: [
              '**Growth & decay formula** - Final amount = Initial × (Multiplier)ⁿ, where n is the number of years or time periods.',
              '**Depreciation** - a car losing 12% of its value each year has multiplier 1 − 0.12 = 0.88, so after 3 years its value is Initial × (0.88)³.',
            ],
            exampleHeading: 'Worked example: Compound interest over 4 years',
            examples: [
              '£4,000 is invested at 3.5% compound interest per year for 4 years (multiplier = 1.035).',
              'Final amount = 4,000 × (1.035)⁴ = £4,590.09 (to the nearest penny).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'compound interest',
            definition: 'Interest calculated on both the original deposit and any previously earned interest: A = P(1 + r/100)ⁿ.',
          },
        ],
        memoryAid: 'Compound = Multiply by (Multiplier)^n; Simple = Add the exact same fixed interest every year.',
      },
      {
        id: 'maths-1-1-c3',
        title: 'Reverse Percentages',
        summary: 'Dividing by the decimal multiplier to recover an original 100% value.',
        bullets: [
          'Whenever a question gives you the FINAL price AFTER a percentage rise or sale discount, **divide** by the multiplier to work backwards to 100%.',
        ],
        subsections: [
          {
            heading: 'Working Backwards to 100%',
            bullets: [
              '**After a discount** - a 20% sale leaves 80% (0.80 × original), so Original = Sale price ÷ 0.80.',
              '**After an increase** - a 10% rise gives 110% (1.10 × original), so Original = New price ÷ 1.10.',
            ],
            exampleHeading: 'Worked example: Recovering pre-sale price',
            examples: [
              'A jacket costs £64 in a 20% off sale → £64 represents 80% (multiplier = 0.80).',
              'Original price = £64 ÷ 0.80 = £80.',
            ],
          },
        ],
        commonMistake: 'Students often find 20% of £64 (£12.80) and add it back to get £76.80. Instead, £64 is 80% of the original, so always DIVIDE by 0.80 to get £80.',
      },
    ],
    keyTerms: [
      { term: 'Multiplier', definition: 'Decimal factor corresponding to a percentage increase or decrease (e.g. 1.04 for +4%).' },
      { term: 'Compound interest', definition: 'Interest calculated on both the starting amount and previously earned interest: A = P(1 + r/100)ⁿ.' },
      { term: 'Depreciation', definition: 'Repeated percentage reduction in the value of an asset over time.' },
      { term: 'Reverse percentage', definition: 'Finding the original 100% quantity by dividing the changed value by its decimal multiplier.' },
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
      { time: '1:33', seconds: 93, label: 'Rule 1: Power of 0', cardId: 'maths-1-2-c2' },
      { time: '2:36', seconds: 156, label: 'Rule 3: Base of 1', cardId: 'maths-1-2-c3' },
    ],
    cards: [
      {
        id: 'maths-1-2-c1',
        title: 'Index Laws (Negative & Fractional Powers)',
        summary: 'Evaluating negative, zero, and fractional indices without a calculator.',
        bullets: [
          'Core laws: **aᵐ × aⁿ = aᵐ⁺ⁿ**, **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**, **(aᵐ)ⁿ = aᵐⁿ**, and **a⁰ = 1** (for a ≠ 0).',
        ],
        subsections: [
          {
            heading: 'Negative & Fractional Indices',
            bullets: [
              '**Negative index (reciprocal)** - a⁻ⁿ = 1 ÷ aⁿ, and for fractions (a/b)⁻ⁿ = (b/a)ⁿ.',
              '**Fractional index (root then power)** - a^(m/n) = (ⁿ√a)ᵐ; always take the root first so numbers stay small.',
            ],
            exampleHeading: 'Worked example: Evaluating 8^(2/3) and 16^(−3/4)',
            examples: [
              '8^(2/3) = (³√8)² = 2² = 4.',
              '16^(−3/4) = 1 ÷ (⁴√16)³ = 1 ÷ 2³ = 1/8.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'reciprocal',
            definition: 'One divided by a number (a⁻¹ = 1/a), flipping a fraction upside down so the product equals 1.',
          },
        ],
        memoryAid: 'Take the ROOT (denominator) first so the numbers stay tiny, then raise to the POWER (numerator), then FLIP if negative!',
      },
      {
        id: 'maths-1-2-c2',
        title: 'Simplifying & Rationalising Surds',
        summary: 'Simplifying roots and rationalising single-term and two-term denominators.',
        bullets: [
          'A **surd** is an exact irrational square root like √2, √3, or √5 left in radical form rather than rounded.',
        ],
        subsections: [
          {
            heading: 'Simplifying & Rationalising Denominators',
            bullets: [
              '**Simplifying** - factor out the largest square number: √48 = √(16 × 3) = 4√3; collect like surds after simplifying (√50 + √8 = 5√2 + 2√2 = 7√2).',
              '**Single-term denominator** - multiply top and bottom by √b: 10/√5 = (10√5)/5 = 2√5.',
              '**Two-term denominator** - multiply top and bottom by the conjugate (a ∓ √b) to eliminate roots via difference of two squares.',
            ],
            exampleHeading: 'Worked example: Rationalising 6 ÷ (√5 − 2)',
            examples: [
              'Multiply numerator and denominator by the conjugate (√5 + 2): 6(√5 + 2) ÷ ((√5 − 2)(√5 + 2)).',
              'Denominator becomes 5 − 4 = 1, leaving 6√5 + 12.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'surd',
            definition: 'An irrational square root left in exact radical form (e.g. √3 or 4√2) rather than rounded as a decimal.',
          },
          {
            term: 'conjugate',
            definition: 'The binomial formed by reversing the middle sign of a + √b to a − √b so their product is rational.',
          },
        ],
      },
      {
        id: 'maths-1-2-c3',
        title: 'Standard Form Calculations',
        summary: 'Multiplying, dividing, adding, and adjusting answers in A × 10ⁿ.',
        bullets: [
          '**Standard form** writes any number as A × 10ⁿ where **1 ≤ A < 10** and n is an integer (e.g. 64,000 = 6.4 × 10⁴; 0.0032 = 3.2 × 10⁻³).',
        ],
        subsections: [
          {
            heading: 'Arithmetic in Standard Form',
            bullets: [
              '**Multiply & divide** - multiply/divide the front numbers A and add/subtract powers of 10, then re-adjust if A ≥ 10 or A < 1.',
              '**Add & subtract** - match both numbers to the SAME power of 10 (or write as ordinary numbers) before adding.',
            ],
            exampleHeading: 'Worked example: Adjusting after multiplication',
            examples: [
              '(4 × 10⁵) × (3 × 10⁴) = 12 × 10⁹.',
              'Divide 12 by 10 and add 1 to the exponent so 1 ≤ A < 10 → 1.2 × 10¹⁰.',
            ],
          },
        ],
        commonMistake: 'Students often leave an answer like 12 × 10⁹ or 0.4 × 10⁶. Instead, A must satisfy 1 ≤ A < 10, so always adjust to 1.2 × 10¹⁰ or 4 × 10⁵.',
      },
    ],
    keyTerms: [
      { term: 'Reciprocal', definition: '1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.' },
      { term: 'Surd', definition: 'Exact irrational root written with a square-root sign.' },
      { term: 'Conjugate', definition: 'Paired expression with opposite sign (a − √b for a + √b) used to rationalise denominators.' },
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
      { time: '3:14', seconds: 194, label: 'Step 3: Writing the Final Brackets for Example 1', cardId: 'maths-2-1-c2' },
      { time: '4:31', seconds: 271, label: 'Example 2', cardId: 'maths-2-1-c3' },
    ],
    cards: [
      {
        id: 'maths-2-1-c1',
        title: 'Factorising Quadratic Equations',
        summary: 'Factorising monic, non-monic (a > 1), and difference-of-two-squares quadratics.',
        diagram: 'quadratic-graph',
        bullets: [
          'Always rearrange a quadratic into **ax² + bx + c = 0** BEFORE factorising or reading coefficients.',
        ],
        subsections: [
          {
            heading: 'Three Factorising Techniques',
            bullets: [
              '**Monic (a = 1)** - find two numbers multiplying to c and adding to b: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2.',
              '**Difference of two squares** - a² − b² = (a + b)(a − b), e.g. 4x² − 25 = (2x + 5)(2x − 5).',
              '**Non-monic (a > 1)** - multiply a × c, find two numbers multiplying to ac and adding to b, split the middle term, and factorise in pairs.',
            ],
            exampleHeading: 'Worked example: Non-monic 2x² + 7x + 3 = 0',
            examples: [
              'a × c = 2 × 3 = 6; factor pair adding to 7 is +6 and +1 → 2x² + 6x + x + 3 = 0.',
              'Group pairs: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3) = 0 → x = −0.5 or x = −3.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'roots',
            definition: 'The x-values where a quadratic equation equals zero (ax² + bx + c = 0), shown as x-intercepts on its parabola.',
          },
        ],
      },
      {
        id: 'maths-2-1-c2',
        title: 'The Quadratic Formula',
        summary: 'Applying x = (−b ± √(b² − 4ac)) ÷ 2a cleanly, especially when b or c is negative.',
        bullets: [
          'Whenever an exam question asks for solutions to **2 decimal places** or **3 significant figures**, go straight to the quadratic formula.',
        ],
        subsections: [
          {
            heading: 'Using the Formula Without Sign Errors',
            bullets: [
              '**Formula** - x = (−b ± √(b² − 4ac)) ÷ (2a), where the discriminant b² − 4ac tells you how many real roots exist.',
              '**Bracket negatives** - wrap negative values of b and c inside brackets so squaring (−b)² stays positive.',
            ],
            exampleHeading: 'Worked example: Solve 2x² − 3x − 7 = 0 (2 d.p.)',
            examples: [
              'Identify a = 2, b = −3, c = −7 → x = (3 ± √((−3)² − 4(2)(−7))) ÷ 4 = (3 ± √(9 + 56)) ÷ 4.',
              'x = (3 ± √65) ÷ 4 → x = 2.77 or x = −1.27 (to 2 d.p.).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'discriminant',
            definition: 'The expression b² − 4ac inside the quadratic formula: > 0 gives 2 real roots, = 0 gives 1 repeated root, < 0 gives 0 real roots.',
          },
        ],
        commonMistake: 'Students often type −3² into a calculator and get −9 instead of +9. Instead, always bracket negative b: (−3)² = +9.',
      },
      {
        id: 'maths-2-1-c3',
        title: 'Completing the Square & Turning Points',
        summary: 'Rewriting x² + bx + c as (x + p)² + q to find exact solutions and parabola vertices.',
        bullets: [
          'Completing the square expresses y = x² + bx + c as **y = (x + b/2)² − (b/2)² + c**, revealing the minimum **turning point** immediately.',
        ],
        subsections: [
          {
            heading: 'Reading Off the Turning Point',
            bullets: [
              '**Vertex rule** - the minimum turning point of y = (x + p)² + q is (−p, q), because (x + p)² reaches its minimum value 0 when x = −p.',
              '**Exact solving** - set (x + p)² + q = 0, isolate (x + p)² = −q, take ±√, and solve for x in surd form.',
            ],
            exampleHeading: 'Worked example: Turning point of y = x² + 8x + 10',
            examples: [
              'Halve 8 to get 4: y = (x + 4)² − 4² + 10 = (x + 4)² − 6.',
              'Flip the inside sign (+4 → −4) and keep the outside sign (−6) → minimum turning point is (−4, −6).',
            ],
          },
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
      { term: 'Discriminant', definition: 'The value b² − 4ac that determines how many real solutions a quadratic has.' },
      { term: 'Roots', definition: 'Solutions of ax² + bx + c = 0 where the parabola crosses the x-axis.' },
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
      { time: '5:06', seconds: 306, label: 'Step 2: Make Coefficients the Same', cardId: 'maths-2-2-c2' },
      { time: '7:05', seconds: 425, label: 'Step 6: Check the Solution', cardId: 'maths-2-2-c3' },
    ],
    cards: [
      {
        id: 'maths-2-2-c1',
        title: 'Elimination Method (Two Linear Equations)',
        summary: 'Scaling coefficients and applying SSS to eliminate x or y cleanly.',
        bullets: [
          'The **elimination** method cancels one unknown by matching its coefficient size in both equations, then adding or subtracting.',
        ],
        subsections: [
          {
            heading: 'Four-Step Elimination Workflow',
            bullets: [
              '**Step 1: Match coefficients** - multiply one or both equations so x or y has the exact same numerical coefficient.',
              '**Step 2: Apply SSS** - Same Signs Subtract; Different Signs Add to cancel that variable.',
              '**Step 3: Back-substitute & check** - find the second unknown using equation 1, then verify both numbers inside equation 2.',
            ],
            exampleHeading: 'Worked example: 2x + 3y = 19 and 5x − 3y = 9',
            examples: [
              '+3y and −3y have DIFFERENT signs, so ADD the equations: 7x = 28 → x = 4.',
              'Substitute x = 4 into 2(4) + 3y = 19 → 3y = 11 → y = 11/3. Check: 5(4) − 3(11/3) = 20 − 11 = 9 ✓.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'elimination',
            definition: 'Adding or subtracting scaled equations so that one variable cancels out completely.',
          },
        ],
        memoryAid: 'SSS = Same Signs Subtract; Different Signs Add!',
      },
      {
        id: 'maths-2-2-c2',
        title: 'Substitution Method (Linear & Quadratic / Circle)',
        summary: 'Solving linear–quadratic and line–circle systems to obtain paired (x, y) solutions.',
        bullets: [
          'Whenever one equation contains x² or y² (e.g. a circle x² + y² = r²), you MUST use **substitution** rather than elimination.',
        ],
        subsections: [
          {
            heading: 'Solving Linear + Quadratic Systems',
            bullets: [
              '**Isolate & substitute** - rearrange the linear equation for y (or x) and replace it in the quadratic equation.',
              '**Expand, collect, solve** - collect into ax² + bx + c = 0, factorise or use the formula, then substitute EACH x-value back into the linear equation to pair every y.',
            ],
            exampleHeading: 'Worked example: y = 2x + 1 and x² + y² = 13',
            examples: [
              'Substitute y: x² + (2x + 1)² = 13 → x² + 4x² + 4x + 1 = 13 → 5x² + 4x − 12 = 0.',
              'Factorise: (5x − 6)(x + 2) = 0 → x = 1.2 or x = −2. Paired solutions: (1.2, 3.4) and (−2, −3).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'substitution',
            definition: 'Replacing one variable in an equation with an equivalent algebraic expression derived from another equation.',
          },
        ],
        commonMistake: 'Students often expand (2x + 1)² as 4x² + 1 and miss the middle term. Instead, write (2x + 1)(2x + 1) = 4x² + 4x + 1.',
      },
      {
        id: 'maths-2-2-c3',
        title: 'Graphical Meaning of Simultaneous Solutions',
        summary: 'Connecting algebraic solutions to points of intersection between lines and curves.',
        bullets: [
          'Every real simultaneous solution (x, y) is an exact **point of intersection** where the two graphs cross.',
        ],
        subsections: [
          {
            heading: 'Counting Solutions Geometrically',
            bullets: [
              '**Two straight lines** - crossing lines have 1 unique solution; parallel lines (same gradient, different y-intercept) have 0 solutions.',
              '**Line & curve (parabola/circle)** - 2 solutions = line cuts curve twice; 1 repeated solution = line is a tangent; 0 real solutions = line misses curve.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'point of intersection',
            definition: 'The coordinate pair (x, y) where two graphs cross, satisfying both equations simultaneously.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Simultaneous equations', definition: 'Two or more equations sharing unknowns that must be satisfied at the exact same values.' },
      { term: 'Elimination', definition: 'Cancelling one variable by adding or subtracting scaled linear equations.' },
      { term: 'Substitution', definition: 'Replacing one unknown using an expression from another equation (essential for linear-quadratic pairs).' },
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
      { time: '2:37', seconds: 157, label: 'Example 2: Finding the Equation', cardId: 'maths-3-1-c2' },
      { time: '3:53', seconds: 233, label: 'Forming the Final Equation', cardId: 'maths-3-1-c3' },
    ],
    cards: [
      {
        id: 'maths-3-1-c1',
        title: 'Gradient, y-Intercept & Midpoints',
        summary: 'Reading gradient m, y-intercept c, and midpoints from rearranged linear equations.',
        bullets: [
          'In **y = mx + c**, m is the **gradient** (steepness = (y₂ − y₁) ÷ (x₂ − x₁)) and c is the **y-intercept** where the line crosses the y-axis at (0, c).',
        ],
        subsections: [
          {
            heading: 'Rearranging & Midpoint Formula',
            bullets: [
              '**Rearrange first** - make y the sole subject before reading m and c: 4x + 2y = 10 → 2y = −4x + 10 → y = −2x + 5 (m = −2, c = 5).',
              '**Midpoint** - average the x-coordinates and average the y-coordinates: ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2).',
            ],
            exampleHeading: 'Worked example: Gradient and midpoint of A(1, 3) and B(5, 11)',
            examples: [
              'Gradient m = (11 − 3) ÷ (5 − 1) = 8 ÷ 4 = 2.',
              'Midpoint M = ((1 + 5)/2, (3 + 11)/2) = (3, 7).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'gradient',
            definition: 'The rate of vertical change per unit horizontal change along a line: m = (y₂ − y₁) ÷ (x₂ − x₁).',
          },
          {
            term: 'y-intercept',
            definition: 'The y-coordinate c where a line crosses the vertical y-axis (at x = 0).',
          },
        ],
      },
      {
        id: 'maths-3-1-c2',
        title: 'Parallel & Perpendicular Gradients',
        summary: 'Identifying parallel lines and negative-reciprocal perpendicular gradients.',
        bullets: [
          'Parallel lines never meet because they have identical gradients (**m₁ = m₂**); perpendicular lines meet at 90° and satisfy **m₁ × m₂ = −1**.',
        ],
        subsections: [
          {
            heading: 'Finding Negative Reciprocals Fast',
            bullets: [
              '**Negative reciprocal rule** - m₂ = −1 ÷ m₁: write m₁ as a fraction, flip numerator/denominator, and swap the sign.',
              '**Quick examples** - perpendicular to m = 2 is m = −½; perpendicular to m = −3/4 is m = +4/3.',
            ],
          },
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
        title: 'Finding the Equation of a Perpendicular Line',
        summary: 'Step-by-step substitution of a point (x, y) to determine c.',
        bullets: [
          'Once you know gradient m and one coordinate pair (x, y) on the line, substitute into **y = mx + c** to solve for c.',
        ],
        subsections: [
          {
            heading: 'Worked Exam Walkthrough',
            bullets: [
              '**Step 1: Find m₂** - take the negative reciprocal of the given line’s gradient.',
              '**Step 2: Substitute (x, y)** - plug the point into y = m₂x + c and solve for c.',
            ],
            exampleHeading: 'Worked example: Line perpendicular to y = 2x + 3 through (4, 5)',
            examples: [
              'Original m₁ = 2 → perpendicular m₂ = −½.',
              'Substitute (4, 5): 5 = −½(4) + c → 5 = −2 + c → c = 7 → Final equation: y = −½x + 7.',
            ],
          },
        ],
        commonMistake: 'Students often swap x and y when plugging (4, 5) into y = mx + c. Instead, always check that y (the second coordinate, 5) goes on the left and x (4) multiplies m.',
      },
    ],
    keyTerms: [
      { term: 'Gradient', definition: 'Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).' },
      { term: 'y-intercept', definition: 'Point (0, c) where a graph crosses the vertical y-axis.' },
      { term: 'Parallel lines', definition: 'Two lines with equal gradients (m₁ = m₂) that never intersect.' },
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
      { time: '0:55', seconds: 55, label: 'Graphical Representation', cardId: 'maths-4-1-c2' },
      { time: '1:05', seconds: 65, label: 'Key Features of the Graph', cardId: 'maths-4-1-c3' },
      { time: '1:51', seconds: 111, label: 'Summary', cardId: 'maths-4-1-c3' },
    ],
    cards: [
      {
        id: 'maths-4-1-c1',
        title: 'Direct Proportion (y ∝ x, x², x³, √x)',
        summary: 'Setting up and solving direct proportion equations using constant k.',
        bullets: [
          'Two variables are in **direct proportion** when their ratio stays constant: y ∝ x means **y = kx** (where k is the **constant of proportionality**).',
        ],
        subsections: [
          {
            heading: 'Powers & Roots in Higher Tier',
            bullets: [
              '**Translating phrases** - "directly proportional to x²" → y = kx²; "to the square root of x" → y = k√x; "to the cube of x" → y = kx³.',
              '**4-step k method** - write formula with k → substitute known pair → find k → rewrite formula and solve.',
            ],
            exampleHeading: 'Worked example: y ∝ x³ with y = 32 when x = 2',
            examples: [
              'Write y = kx³ → substitute 32 = k(2³) = 8k → k = 4 → formula is y = 4x³.',
              'When x = 3: y = 4 × 3³ = 4 × 27 = 108.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'direct proportion',
            definition: 'A relationship where two variables scale by the same factor (y = kx), producing a straight line through (0, 0).',
          },
          {
            term: 'constant of proportionality',
            definition: 'The fixed non-zero number k linking two proportional variables (k = y/x for direct; k = xy for inverse).',
          },
        ],
      },
      {
        id: 'maths-4-1-c2',
        title: 'Inverse Proportion (y ∝ 1/x, 1/x²)',
        summary: 'Solving inverse and inverse-square proportion problems cleanly.',
        bullets: [
          'In **inverse proportion**, multiplying x by a factor divides y by the same factor: y ∝ 1/x means **y = k ÷ x** (so x × y = k stays constant).',
        ],
        subsections: [
          {
            heading: 'Worded & Inverse-Square Problems',
            bullets: [
              '**Inverse square** - y ∝ 1/x² → y = k ÷ x² (doubling x quarters y).',
              '**Workforce problems** - total work (workers × hours) stays constant when all workers work at the same rate.',
            ],
            exampleHeading: 'Worked example: F inversely proportional to d²',
            examples: [
              'When d = 3, F = 10 → k = F × d² = 10 × 9 = 90 → F = 90 ÷ d².',
              'When d = 6: F = 90 ÷ 36 = 2.5.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'inverse proportion',
            definition: 'A relationship y = k/x where increasing one variable decreases the other so their product xy remains constant.',
          },
        ],
        commonMistake: 'Students often assume any straight line like y = 2x + 5 shows direct proportion. Instead, a direct proportion graph MUST pass through the origin (0, 0).',
      },
      {
        id: 'maths-4-1-c3',
        title: 'Recognising Proportion Graphs',
        summary: 'Distinguishing linear, quadratic, and reciprocal proportion curves at a glance.',
        bullets: [
          'Exam questions frequently ask you to match proportionality statements to unlabelled graph sketches.',
        ],
        subsections: [
          {
            heading: 'Three Core Shapes',
            bullets: [
              '**y ∝ x** - straight line passing strictly through the origin (0, 0).',
              '**y ∝ x²** - upward-curving half-parabola starting at (0, 0), getting steeper as x grows.',
              '**y ∝ 1/x** - smooth reciprocal curve approaching both axes as asymptotes without ever touching 0.',
            ],
          },
        ],
        memoryAid: 'Always follow 4 steps: (1) Write equation with k, (2) Plug in known pair to find k, (3) Rewrite formula with k, (4) Solve!',
      },
    ],
    keyTerms: [
      { term: 'Direct proportion', definition: 'Relationship y = kx where y/x remains constant.' },
      { term: 'Inverse proportion', definition: 'Relationship y = k/x where x × y remains constant.' },
      { term: 'Constant of proportionality', definition: 'Fixed multiplier k calculated from a known (x, y) pair.' },
      { term: 'Asymptote', definition: 'Line that a reciprocal curve approaches closer and closer without ever touching.' },
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
    videoTitle: "GCSE Maths - Pythagoras' Theorem And How To Use It",
    youtubeId: 'CnHgqfBSgco',
    videoChannel: 'Cognito',
    videoDuration: '6:31',
    courseMatchSummary: '4 of 4 sections match GCSE Maths Higher',
    timestamps: [
      { time: '0:00', seconds: 0, label: "Intro to Pythagoras' Theorem", cardId: 'maths-5-1-c1' },
      { time: '1:00', seconds: 60, label: 'The Formula: a^2 + b^2 = c^2', cardId: 'maths-5-1-c1' },
      { time: '2:34', seconds: 154, label: 'Example 2: Calculating the Hypotenuse', cardId: 'maths-5-1-c2' },
      { time: '5:19', seconds: 319, label: 'Example 4: Exam Question Style (ABC)', cardId: 'maths-5-1-c3' },
    ],
    cards: [
      {
        id: 'maths-5-1-c1',
        title: 'Pythagoras’ Theorem',
        summary: 'Finding both hypotenuses and shorter sides in right-angled triangles.',
        diagram: 'right-triangle-trig',
        bullets: [
          'In any right-angled triangle, **a² + b² = c²**, where c is the **hypotenuse** (always the longest side opposite the 90° angle).',
        ],
        subsections: [
          {
            heading: 'Add for Hypotenuse, Subtract for Shorter Side',
            bullets: [
              '**Finding hypotenuse c** - square both shorter sides, ADD, then take √: c = √(a² + b²).',
              '**Finding shorter side a** - square both sides, SUBTRACT smaller from hypotenuse², then take √: a = √(c² − b²).',
            ],
            exampleHeading: 'Worked example: Finding a shorter side',
            examples: [
              'A ladder of length 13 m leans against a wall with its base 5 m out.',
              'Wall height a = √(13² − 5²) = √(169 − 25) = √144 = 12 m.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'hypotenuse',
            definition: 'The longest side of a right-angled triangle, directly opposite the 90° angle.',
          },
        ],
      },
      {
        id: 'maths-5-1-c2',
        title: 'SOHCAHTOA Trigonometry',
        summary: 'Labelling O, A, H and finding unknown sides or angles in right-angled triangles.',
        bullets: [
          'Label **Hypotenuse** (opposite 90°), **Opposite** (across from target angle θ), and **Adjacent** (touching both θ and 90°).',
        ],
        subsections: [
          {
            heading: 'Three Trigonometric Ratios',
            bullets: [
              '**Ratios** - sin θ = Opp ÷ Hyp | cos θ = Adj ÷ Hyp | tan θ = Opp ÷ Adj.',
              '**Unknown on bottom** - if sin 35° = 8 ÷ x, swap them: x = 8 ÷ sin 35° = 13.9 cm.',
              '**Finding an angle** - apply inverse trig sin⁻¹, cos⁻¹, or tan⁻¹ with calculator in Degree mode ("D").',
            ],
            exampleHeading: 'Worked example: Unknown angle θ',
            examples: [
              'A right-angled triangle has Opposite = 6 cm and Adjacent = 8 cm.',
              'tan θ = 6 ÷ 8 = 0.75 → θ = tan⁻¹(0.75) = 36.9° (to 1 d.p.).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'Adjacent',
            definition: 'The shorter side of a right-angled triangle that sits next to the target acute angle θ (between θ and the 90° angle).',
          },
        ],
        commonMistake: 'Students often multiply 7 × cos 40° when solving cos 40° = 7 ÷ x. Instead, when x is in the denominator, always DIVIDE: x = 7 ÷ cos 40°.',
      },
      {
        id: 'maths-5-1-c3',
        title: 'Exact Trigonometric Values (Non-Calculator Paper 1)',
        summary: 'Memorising exact sin, cos, and tan values for 0°, 30°, 45°, 60°, and 90°.',
        bullets: [
          'GCSE Paper 1 (non-calculator) expects exact **trigonometric ratios** in fraction or surd form.',
        ],
        subsections: [
          {
            heading: 'Exact Value Table',
            bullets: [
              '**30°** - sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3 (or √3/3).',
              '**45°** - sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1.',
              '**60° & extremes** - sin 60° = √3/2, cos 60° = ½, tan 60° = √3; sin 0° = 0, cos 0° = 1, sin 90° = 1, cos 90° = 0.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'trigonometric ratios',
            definition: 'Exact side-length ratios sine (O/H), cosine (A/H), and tangent (O/A) tied to an acute angle in a right-angled triangle.',
          },
        ],
        memoryAid: 'Root pattern: sin(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2; cos is the exact reverse!',
      },
    ],
    keyTerms: [
      { term: 'Hypotenuse', definition: 'The longest side of a right-angled triangle, directly opposite the 90° angle.' },
      { term: 'Opposite side', definition: 'The side directly across from the chosen acute angle θ.' },
      { term: 'Adjacent side', definition: 'The shorter side touching both the chosen angle θ and the 90° angle.' },
      { term: 'Trigonometric ratio', definition: 'Ratio of two side lengths in a right-angled triangle (sine, cosine, or tangent).' },
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
      { time: '12:36', seconds: 756, label: 'Example 5: Harder Tree Diagram', cardId: 'maths-6-1-c3' },
    ],
    cards: [
      {
        id: 'maths-6-1-c1',
        title: 'Probability Tree Diagrams (Independent Events)',
        summary: 'Applying AND/OR branch rules and the 1 − P(none) shortcut.',
        bullets: [
          'Every set of branches radiating from a single node on a probability tree must sum to **1**.',
        ],
        subsections: [
          {
            heading: 'AND vs OR Branch Rules',
            bullets: [
              '**AND rule (along branches)** - MULTIPLY probabilities along the chosen path.',
              '**OR rule (between outcomes)** - ADD the probabilities of separate valid end outcomes.',
              '**At-least-one shortcut** - P(at least one success) = 1 − P(no successes), saving time on multi-branch trees.',
            ],
            exampleHeading: 'Worked example: Two independent spins (P(Win) = 0.3)',
            examples: [
              'P(Lose) = 1 − 0.3 = 0.7 → P(Lose both) = 0.7 × 0.7 = 0.49.',
              'P(Win at least once) = 1 − 0.49 = 0.51.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'independent',
            definition: 'Events where the outcome of the first trial does not change the probabilities of the second trial.',
          },
        ],
        memoryAid: 'Multiply ACROSS branches for AND; Add DOWN outcomes for OR!',
      },
      {
        id: 'maths-6-1-c2',
        title: 'Conditional Probability (Without Replacement)',
        summary: 'Adjusting numerators and denominators when items are not replaced.',
        bullets: [
          'When items are picked **without replacement**, the events are dependent: the total denominator drops by 1 on the second draw.',
        ],
        subsections: [
          {
            heading: 'Updating Fractions on the Second Draw',
            bullets: [
              '**Same colour twice** - reduce BOTH that colour’s numerator and the total denominator by 1.',
              '**One of each colour** - include BOTH orders: P(A then B) + P(B then A).',
            ],
            exampleHeading: 'Worked example: 3 green & 5 yellow sweets (no replacement)',
            examples: [
              'P(both green) = (3/8) × (2/7) = 6/56 = 3/28.',
              'P(one of each colour) = (3/8)(5/7) + (5/8)(3/7) = 30/56 = 15/28.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'without replacement',
            definition: 'Selecting an item and keeping it out so both the remaining total and remaining count of that item drop by 1.',
          },
        ],
        commonMistake: 'Students often keep the denominator at 8 on the second pick when a question says "takes two sweets at random". Instead, taking two items means without replacement, so the second denominator is 7.',
      },
      {
        id: 'maths-6-1-c3',
        title: 'Venn Diagrams & Set Notation',
        summary: 'Filling Venn overlaps first and computing ∩, ∪, ′, and given-that probabilities.',
        bullets: [
          'Always place the **intersection** (A ∩ B) in the centre overlap FIRST, then subtract it from each circle total so nothing is double-counted.',
        ],
        subsections: [
          {
            heading: 'Set Symbols & Conditional "Given That"',
            bullets: [
              '**Key symbols** - A ∩ B = both A AND B; A ∪ B = A OR B (or both); A′ = complement (everything OUTSIDE A, including the outside box).',
              '**Given-that probability P(A | B)** - restrict the denominator ONLY to circle B: P(A | B) = n(A ∩ B) ÷ n(B).',
            ],
          },
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
      { term: 'Complement (A′)', definition: 'All elements in the universal set that are outside set A.' },
    ],
    checklistPoints: [
      'Draw and solve both independent and without-replacement probability tree diagrams.',
      'Populate Venn diagrams starting from the centre overlap so totals match accurately.',
      'Interpret ∩, ∪, ′ and conditional "given that" probabilities from Venn diagrams.',
    ],
  },
};

export const MATHS_QUIZZES: QuizQuestion[] = [
  // ---- maths-1-1 (5) ----
  {
    id: 'maths-q-101',
    subtopicId: 'maths-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A coat costs £68 in a 15% off sale. What was its original pre-sale price?',
    options: ['£78.20', '£80.00', '£83.00', '£57.80'],
    correctIndex: 1,
    explanation: 'A 15% discount leaves 85% (multiplier = 0.85), so Original = £68 ÷ 0.85 = £80.00.',
  },
  {
    id: 'maths-q-102',
    subtopicId: 'maths-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the single decimal multipliers for percentage changes.',
    segments: ['To increase by 4.5%, multiply by ', '; to decrease by 15%, multiply by ', '.'],
    wordBank: ['1.045', '0.85', '1.45', '0.15', '0.955'],
    answers: ['1.045', '0.85'],
    explanation: '1 + 4.5/100 = 1.045, and 1 − 15/100 = 0.85.',
  },
  {
    id: 'maths-q-103',
    subtopicId: 'maths-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: '£2,000 is invested at 5% compound interest per year for 3 years. Calculate the final balance to the nearest penny.',
    rubric: {
      maxMarks: 2,
      modelAnswer: '2000 × (1.05)³ = 2000 × 1.157625 = £2315.25.',
      markPoints: [
        { id: 'mp1', markDescription: 'Uses compound multiplier 1.05³', requiredKeywordGroups: [['1.05']] },
        { id: 'mp2', markDescription: 'Calculates £2315.25', numericMatch: { value: 2315.25, tolerance: 0.05 } },
      ],
    },
    explanation: 'Final balance = 2000 × (1.05)³ = £2,315.25.',
  },
  {
    id: 'maths-q-104',
    subtopicId: 'maths-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each percentage change to its single decimal multiplier.',
    pairs: [
      { left: 'Increase by 12%', right: '× 1.12' },
      { left: 'Decrease by 12%', right: '× 0.88' },
      { left: 'Increase by 3.5%', right: '× 1.035' },
      { left: 'Decrease by 2.5%', right: '× 0.975' },
    ],
    explanation: 'Increases use 1 + r/100; decreases use 1 − r/100.',
  },
  {
    id: 'maths-q-105',
    subtopicId: 'maths-1-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO statements about fractions and percentages are true?',
    options: [
      'Mixed numbers must be converted to improper fractions before multiplying',
      'To reverse a 25% discount, add 25% to the sale price',
      'To reverse a 25% discount, divide the sale price by 0.75',
      'Simple interest grows faster than compound interest at the same rate over 5 years',
    ],
    correctIndices: [0, 2],
    explanation: 'Convert mixed numbers to improper fractions first, and always divide by 0.75 (not add 25%) to undo a 25% discount.',
  },

  // ---- maths-1-2 (5) ----
  {
    id: 'maths-q-106',
    subtopicId: 'maths-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Evaluate 27^(−2/3) without a calculator.',
    options: ['−9', '−1/9', '1/9', '9'],
    correctIndex: 2,
    explanation: 'Cube root of 27 is 3; 3² = 9; negative index takes the reciprocal → 1/9.',
  },
  {
    id: 'maths-q-107',
    subtopicId: 'maths-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the standard form product (5 × 10⁴) × (4 × 10³).',
    segments: ['Multiplying gives 20 × 10⁷, which adjusts to ', ' × 10', ' in valid standard form.'],
    wordBank: ['2', '8', '20', '7', '6'],
    answers: ['2', '8'],
    explanation: '20 × 10⁷ = 2 × 10⁸ so that 1 ≤ A < 10.',
  },
  {
    id: 'maths-q-108',
    subtopicId: 'maths-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Simplify √75 + √12 completely.',
    options: ['√87', '7√3', '5√3', '9√3'],
    correctIndex: 1,
    explanation: '√75 = 5√3 and √12 = 2√3, so 5√3 + 2√3 = 7√3.',
  },
  {
    id: 'maths-q-109',
    subtopicId: 'maths-1-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each index or surd expression to its exact simplified value.',
    pairs: [
      { left: '8^(2/3)', right: '4' },
      { left: '5⁻²', right: '1/25' },
      { left: '10 ÷ √5', right: '2√5' },
      { left: '7⁰', right: '1' },
    ],
    explanation: 'Root then power for fractional indices, reciprocal for negative indices, and multiply top/bottom by √5 to rationalise.',
  },
  {
    id: 'maths-q-110',
    subtopicId: 'maths-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Rationalise the denominator of 6 ÷ (√5 − 2) and simplify completely.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Multiply numerator and denominator by the conjugate (√5 + 2): 6(√5 + 2) ÷ (5 − 4) = 6√5 + 12.',
      markPoints: [
        { id: 'mp1', markDescription: 'Multiplies by conjugate (√5 + 2)', requiredKeywordGroups: [['5', 'conjugate'], ['2']] },
        { id: 'mp2', markDescription: 'Simplifies to 6√5 + 12', requiredKeywordGroups: [['6'], ['12']] },
      ],
    },
    explanation: '(√5 − 2)(√5 + 2) = 5 − 4 = 1, leaving 6(√5 + 2) = 6√5 + 12.',
  },

  // ---- maths-2-1 (5) ----
  {
    id: 'maths-q-201',
    subtopicId: 'maths-2-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the quadratic parabola diagram to identify the features of y = (x − 3)² − 4.',
    diagram: 'quadratic-graph',
    labels: [
      {
        marker: 'Minimum turning point',
        options: ['(3, −4)', '(−3, −4)', '(3, 4)'],
        answer: '(3, −4)',
      },
      {
        marker: 'Line of symmetry',
        options: ['x = 3', 'x = −3', 'y = −4'],
        answer: 'x = 3',
      },
    ],
    explanation: 'Flip the inside sign (−3 → +3) and keep the outside value (−4) → turning point (3, −4) and axis of symmetry x = 3.',
  },
  {
    id: 'maths-q-202',
    subtopicId: 'maths-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Factorise 9x² − 16 completely.',
    options: ['(3x − 4)²', '(3x + 4)(3x − 4)', '(9x + 4)(x − 4)', '(3x + 8)(3x − 2)'],
    correctIndex: 1,
    explanation: 'Difference of two squares: a² − b² = (a + b)(a − b) with a = 3x and b = 4.',
  },
  {
    id: 'maths-q-203',
    subtopicId: 'maths-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the factorisation and solutions of x² − 7x + 12 = 0.',
    segments: ['Factorising gives (x − 3)(x − ', ') = 0, so the two roots are x = 3 and x = ', '.'],
    wordBank: ['4', '4', '3', '−4', '12'],
    answers: ['4', '4'],
    explanation: '(x − 3)(x − 4) = 0 → x = 3 or x = 4.',
  },
  {
    id: 'maths-q-204',
    subtopicId: 'maths-2-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select the TWO roots of 2x² + 5x − 3 = 0.',
    options: ['x = 0.5 (1/2)', 'x = −0.5', 'x = −3', 'x = 3'],
    correctIndices: [0, 2],
    explanation: '2x² + 5x − 3 = (2x − 1)(x + 3) = 0 → x = 0.5 or x = −3.',
  },
  {
    id: 'maths-q-205',
    subtopicId: 'maths-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Complete the square for y = x² + 6x + 5 and state the coordinates of its minimum turning point.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'y = (x + 3)² − 9 + 5 = (x + 3)² − 4. Minimum turning point is (−3, −4).',
      markPoints: [
        { id: 'mp1', markDescription: 'Completes the square to (x + 3)² − 4', requiredKeywordGroups: [['x + 3', 'x+3', '3'], ['-4', '−4', '4']] },
        { id: 'mp2', markDescription: 'States turning point (−3, −4)', numericMatch: { value: -3, tolerance: 0 } },
      ],
    },
    explanation: 'Halving 6 gives (x + 3)² − 9 + 5 = (x + 3)² − 4, so the vertex is (−3, −4).',
  },

  // ---- maths-2-2 (5) ----
  {
    id: 'maths-q-206',
    subtopicId: 'maths-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Solve the simultaneous equations 3x + 2y = 16 and x − 2y = 4.',
    options: ['x = 5, y = 0.5', 'x = 4, y = 2', 'x = 6, y = −1', 'x = 3, y = 3.5'],
    correctIndex: 0,
    explanation: 'Different signs on y → ADD: 4x = 20 → x = 5. Then 5 − 2y = 4 → 2y = 1 → y = 0.5.',
  },
  {
    id: 'maths-q-207',
    subtopicId: 'maths-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the elimination step for 4x + 5y = 29 and 4x + 2y = 17.',
    segments: ['Because both equations have +4x (Same Signs), ', ' them to get 3y = 12, giving y = ', '.'],
    wordBank: ['subtract', 'add', '4', '6', '12'],
    answers: ['subtract', '4'],
    explanation: 'SSS (Same Signs Subtract): (4x + 5y) − (4x + 2y) = 12 → 3y = 12 → y = 4.',
  },
  {
    id: 'maths-q-208',
    subtopicId: 'maths-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What does it mean graphically if two linear simultaneous equations have NO solution?',
    options: [
      'They cross at the origin (0, 0)',
      'They are parallel lines with the same gradient and different y-intercepts',
      'They are perpendicular lines',
      'They are identical equations',
    ],
    correctIndex: 1,
    explanation: 'Parallel distinct lines never intersect, so no (x, y) satisfies both equations.',
  },
  {
    id: 'maths-q-209',
    subtopicId: 'maths-2-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each simultaneous system type to the best solution method or intersection count.',
    pairs: [
      { left: 'Two linear equations with +3y and −3y', right: 'Elimination by adding' },
      { left: 'Two linear equations with +2x and +2x', right: 'Elimination by subtracting' },
      { left: 'y = 2x + 1 and x² + y² = 13', right: 'Substitution into the circle equation' },
      { left: 'Tangent line touching a circle', right: '1 repeated simultaneous solution' },
    ],
    explanation: 'Choose elimination for linear pairs and substitution whenever a curve (x² or y²) appears.',
  },
  {
    id: 'maths-q-210',
    subtopicId: 'maths-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Find the coordinates of intersection of y = x + 1 and y = x² − 5.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Set x² − 5 = x + 1 → x² − x − 6 = 0 → (x − 3)(x + 2) = 0 → x = 3 (y = 4) and x = −2 (y = −1). Points: (3, 4) and (−2, −1).',
      markPoints: [
        { id: 'mp1', markDescription: 'Finds x = 3 and y = 4', numericMatch: { value: 3, tolerance: 0 } },
        { id: 'mp2', markDescription: 'Finds x = −2 and y = −1', numericMatch: { value: -2, tolerance: 0 } },
      ],
    },
    explanation: 'Equating y gives x² − x − 6 = 0 → (x − 3)(x + 2) = 0, giving (3, 4) and (−2, −1).',
  },

  // ---- maths-3-1 (5) ----
  {
    id: 'maths-q-301',
    subtopicId: 'maths-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the gradient of the straight line 3x + 6y = 12?',
    options: ['3', '−3', '−0.5 (−1/2)', '2'],
    correctIndex: 2,
    explanation: 'Rearrange to y = mx + c: 6y = −3x + 12 → y = −0.5x + 2, so gradient m = −0.5.',
  },
  {
    id: 'maths-q-302',
    subtopicId: 'maths-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the parallel and perpendicular gradients for a line with gradient 4.',
    segments: ['Any parallel line has gradient ', ', while any perpendicular line has gradient ', '.'],
    wordBank: ['4', '−1/4', '1/4', '−4', '0'],
    answers: ['4', '−1/4'],
    explanation: 'Parallel lines share m₁ = 4; perpendicular lines use the negative reciprocal m₂ = −1/4.',
  },
  {
    id: 'maths-q-303',
    subtopicId: 'maths-3-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO equations represent lines PARALLEL to y = 3x − 2?',
    options: ['y = 3x + 7', 'y = −3x − 2', '2y − 6x = 10', 'y = (1/3)x + 4'],
    correctIndices: [0, 2],
    explanation: 'y = 3x + 7 has m = 3, and 2y − 6x = 10 rearranges to y = 3x + 5 (also m = 3).',
  },
  {
    id: 'maths-q-304',
    subtopicId: 'maths-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each coordinate-geometry feature to its formula.',
    pairs: [
      { left: 'Gradient between two points', right: '(y₂ − y₁) ÷ (x₂ − x₁)' },
      { left: 'Midpoint of segment', right: '((x₁ + x₂)/2, (y₁ + y₂)/2)' },
      { left: 'Parallel lines condition', right: 'm₁ = m₂' },
      { left: 'Perpendicular lines condition', right: 'm₁ × m₂ = −1' },
    ],
    explanation: 'Know all four coordinate-geometry formulas cold for GCSE Higher.',
  },
  {
    id: 'maths-q-305',
    subtopicId: 'maths-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Find the equation of the line perpendicular to y = 2x + 3 passing through (4, 5).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Perpendicular gradient m = −0.5 (−1/2). Substituting (4, 5) gives 5 = −0.5(4) + c → c = 7. Equation: y = −0.5x + 7.',
      markPoints: [
        { id: 'mp1', markDescription: 'Finds perpendicular gradient −0.5 (or −1/2)', requiredKeywordGroups: [['-0.5', '-1/2', '−0.5', '−1/2', '-½', '−½']] },
        { id: 'mp2', markDescription: 'Finds y-intercept c = 7', numericMatch: { value: 7, tolerance: 0 } },
      ],
    },
    explanation: 'm₂ = −½ and 5 = −½(4) + c gives c = 7, so y = −½x + 7.',
  },

  // ---- maths-4-1 (5) ----
  {
    id: 'maths-q-401',
    subtopicId: 'maths-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'y is directly proportional to x². When x = 3, y = 45. What is y when x = 5?',
    options: ['75', '125', '225', '15'],
    correctIndex: 1,
    explanation: 'y = kx² → 45 = k(9) → k = 5. When x = 5, y = 5 × 25 = 125.',
  },
  {
    id: 'maths-q-402',
    subtopicId: 'maths-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the inverse proportion calculation: 6 workers paint a hall in 10 hours.',
    segments: ['The constant total workload is k = ', ' worker-hours, so 4 workers take ', ' hours.'],
    wordBank: ['60', '15', '24', '6.7', '40'],
    answers: ['60', '15'],
    explanation: 'Inverse proportion: k = 6 × 10 = 60 worker-hours; 60 ÷ 4 = 15 hours.',
  },
  {
    id: 'maths-q-403',
    subtopicId: 'maths-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which graph strictly represents y directly proportional to x (y ∝ x)?',
    options: [
      'A straight line passing through (0, 4)',
      'A straight line passing through the origin (0, 0)',
      'A reciprocal curve approaching both axes',
      'A horizontal line y = 6',
    ],
    correctIndex: 1,
    explanation: 'Direct proportion y = kx always gives a straight line passing through (0, 0).',
  },
  {
    id: 'maths-q-404',
    subtopicId: 'maths-4-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each worded proportionality statement to its algebraic equation.',
    pairs: [
      { left: 'y is directly proportional to x', right: 'y = kx' },
      { left: 'y is directly proportional to √x', right: 'y = k√x' },
      { left: 'y is inversely proportional to x', right: 'y = k ÷ x' },
      { left: 'y is inversely proportional to x²', right: 'y = k ÷ x²' },
    ],
    explanation: 'Step 1 of every proportion question is writing the exact equation with constant k.',
  },
  {
    id: 'maths-q-405',
    subtopicId: 'maths-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'F is inversely proportional to d². When d = 3, F = 10. Find F when d = 6.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'F = k ÷ d² → k = 10 × 3² = 90 → F = 90 ÷ d². When d = 6, F = 90 ÷ 36 = 2.5.',
      markPoints: [
        { id: 'mp1', markDescription: 'Finds constant k = 90', numericMatch: { value: 90, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Calculates F = 2.5', numericMatch: { value: 2.5, tolerance: 0.05 } },
      ],
    },
    explanation: 'Doubling d from 3 to 6 divides F by 2² = 4, giving 10 ÷ 4 = 2.5.',
  },

  // ---- maths-5-1 (5) ----
  {
    id: 'maths-q-501',
    subtopicId: 'maths-5-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the right-angled triangle diagram to label each side relative to acute angle θ.',
    diagram: 'right-triangle-trig',
    labels: [
      {
        marker: 'Longest side opposite 90°',
        options: ['Hypotenuse', 'Opposite', 'Adjacent'],
        answer: 'Hypotenuse',
      },
      {
        marker: 'Shorter side touching θ and 90°',
        options: ['Hypotenuse', 'Opposite', 'Adjacent'],
        answer: 'Adjacent',
      },
    ],
    explanation: 'Always identify Hypotenuse (opposite 90°) first, then Opposite (across from θ), then Adjacent (next to θ).',
  },
  {
    id: 'maths-q-502',
    subtopicId: 'maths-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the exact value of sin 30° + cos 60° (non-calculator)?',
    options: ['0.5', '1', '√3', '√2'],
    correctIndex: 1,
    explanation: 'sin 30° = 0.5 and cos 60° = 0.5, so 0.5 + 0.5 = 1.',
  },
  {
    id: 'maths-q-503',
    subtopicId: 'maths-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete these exact non-calculator trigonometric values.',
    segments: ['The exact value of tan 45° is ', ', and the exact value of cos 60° is ', '.'],
    wordBank: ['1', '1/2', '√3', '0', '√2/2'],
    answers: ['1', '1/2'],
    explanation: 'In a 45°-45°-90° triangle O = A so tan 45° = 1; cos 60° = 1/2.',
  },
  {
    id: 'maths-q-504',
    subtopicId: 'maths-5-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each exact non-calculator trigonometric value.',
    pairs: [
      { left: 'sin 30°', right: '1/2' },
      { left: 'cos 30°', right: '√3 / 2' },
      { left: 'sin 45°', right: '√2 / 2' },
      { left: 'tan 60°', right: '√3' },
    ],
    explanation: 'Memorise the exact values for 0°, 30°, 45°, 60°, and 90° for Paper 1.',
  },
  {
    id: 'maths-q-505',
    subtopicId: 'maths-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'In a right-angled triangle, angle θ = 30° and the side opposite θ is 7 cm. Calculate the exact length of the hypotenuse.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'sin 30° = Opp ÷ Hyp → 0.5 = 7 ÷ Hyp → Hyp = 7 ÷ 0.5 = 14 cm.',
      markPoints: [
        { id: 'mp1', markDescription: 'Uses sin 30° = 0.5 = 7 ÷ Hyp', requiredKeywordGroups: [['sin', '0.5', '1/2'], ['7']] },
        { id: 'mp2', markDescription: 'Calculates hypotenuse = 14 cm', numericMatch: { value: 14, tolerance: 0.05 } },
      ],
    },
    explanation: 'Hyp = Opp ÷ sin 30° = 7 ÷ 0.5 = 14 cm.',
  },

  // ---- maths-6-1 (5) ----
  {
    id: 'maths-q-601',
    subtopicId: 'maths-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A bag holds 3 red and 5 blue counters. Two counters are taken WITHOUT replacement. What is P(both red)?',
    options: ['9/64', '6/56 (3/28)', '6/64', '3/16'],
    correctIndex: 1,
    explanation: 'Without replacement: (3/8) × (2/7) = 6/56 = 3/28.',
  },
  {
    id: 'maths-q-602',
    subtopicId: 'maths-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'If P(rain) = 0.2 on any day (independent), complete the two-day probabilities.',
    segments: ['P(no rain on both days) = 0.8 × 0.8 = ', ', so P(rain on at least one day) = ', '.'],
    wordBank: ['0.64', '0.36', '0.04', '0.16', '0.80'],
    answers: ['0.64', '0.36'],
    explanation: 'P(no rain both days) = 0.64, and P(at least one rain day) = 1 − 0.64 = 0.36.',
  },
  {
    id: 'maths-q-603',
    subtopicId: 'maths-6-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Venn diagram set symbol to its exact meaning.',
    pairs: [
      { left: 'A ∩ B', right: 'Intersection: elements in BOTH A and B' },
      { left: 'A ∪ B', right: 'Union: elements in A, B, or both' },
      { left: 'A′', right: 'Complement: everything outside set A' },
      { left: 'P(A | B)', right: 'Conditional probability of A given B' },
    ],
    explanation: 'Read Venn set notation accurately before counting regions.',
  },
  {
    id: 'maths-q-604',
    subtopicId: 'maths-6-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO rules are ALWAYS true for probability tree diagrams?',
    options: [
      'Probabilities on branches leaving the same node sum to 1',
      'To combine outcomes along a single path (AND), add the probabilities',
      'P(at least one success) = 1 − P(no successes)',
      'Without-replacement trees keep the same denominator on every stage',
    ],
    correctIndices: [0, 2],
    explanation: 'Sibling branches always sum to 1, AND means multiply, and 1 − P(none) gives P(at least one).',
  },
  {
    id: 'maths-q-605',
    subtopicId: 'maths-6-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'In a class of 30 students, 18 study French (F), 14 study Spanish (S), and 6 study BOTH. Find how many study neither language and calculate P(F | S).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'French only = 18 − 6 = 12; Spanish only = 14 − 6 = 8; inside circles = 12 + 6 + 8 = 26, so 4 study neither. P(F | S) = 6/14 = 3/7 (0.43).',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates 4 students study neither', numericMatch: { value: 4, tolerance: 0 } },
        { id: 'mp2', markDescription: 'Calculates P(F | S) = 6/14 or 3/7', requiredKeywordGroups: [['6/14', '3/7', '0.43', '0.428']] },
      ],
    },
    explanation: 'Place 6 in the overlap first: 12 + 6 + 8 = 26, leaving 4 outside; given Spanish (14 students), 6 also take French → 6/14 = 3/7.',
  },
];

export const MATHS_FLASHCARDS: FlashcardItem[] = [
  // maths-1-1 (5)
  { id: 'maths-fc-101', subtopicId: 'maths-1-1', front: 'How do you form a decimal multiplier for +r% vs −r%?', backBullets: ['Increase by r%: 1 + r/100 (e.g. +3.5% → 1.035).', 'Decrease by r%: 1 − r/100 (e.g. −15% → 0.85).'] },
  { id: 'maths-fc-102', subtopicId: 'maths-1-1', front: 'Write the compound interest / depreciation formula.', backBullets: ['Final = Initial × (Multiplier)ⁿ.', 'Use multiplier > 1 for growth and < 1 for depreciation.'] },
  { id: 'maths-fc-103', subtopicId: 'maths-1-1', front: 'How do you solve a reverse percentage problem after a 20% sale discount?', backBullets: ['Sale price = 80% of original (multiplier 0.80).', 'Original = Sale price ÷ 0.80 (NEVER add 20% of the sale price!).'] },
  { id: 'maths-fc-104', subtopicId: 'maths-1-1', front: 'Write the Percentage Change formula.', backBullets: ['Percentage change = ((New − Original) ÷ Original) × 100%.', 'Always divide by the ORIGINAL value.'] },
  { id: 'maths-fc-105', subtopicId: 'maths-1-1', front: 'What is the essential first step before multiplying or dividing mixed numbers?', backBullets: ['Convert every mixed number into an improper fraction first.', 'For division, multiply by the reciprocal (Keep–Change–Flip).'] },

  // maths-1-2 (5)
  { id: 'maths-fc-106', subtopicId: 'maths-1-2', front: 'State how negative and fractional indices work: a⁻ⁿ and a^(m/n).', backBullets: ['Negative index = reciprocal: a⁻ⁿ = 1 ÷ aⁿ.', 'Fractional index = root then power: a^(m/n) = (ⁿ√a)ᵐ.'] },
  { id: 'maths-fc-107', subtopicId: 'maths-1-2', front: 'How do you simplify a surd like √72?', backBullets: ['Factor out the largest square number: √72 = √(36 × 2) = 6√2.'] },
  { id: 'maths-fc-108', subtopicId: 'maths-1-2', front: 'How do you rationalise a two-term denominator like 5 ÷ (√3 + 1)?', backBullets: ['Multiply numerator and denominator by the conjugate (√3 − 1).', 'Denominator becomes (√3)² − 1² = 3 − 1 = 2.'] },
  { id: 'maths-fc-109', subtopicId: 'maths-1-2', front: 'What condition must A satisfy in standard form A × 10ⁿ?', backBullets: ['1 ≤ A < 10 and n must be an integer.', 'Example: rewrite 12 × 10⁵ as 1.2 × 10⁶.'] },
  { id: 'maths-fc-110', subtopicId: 'maths-1-2', front: 'What is the fastest way to add two numbers in standard form?', backBullets: ['Convert both to ordinary numbers OR adjust them to the SAME power of 10 before adding front numbers.'] },

  // maths-2-1 (5)
  { id: 'maths-fc-201', subtopicId: 'maths-2-1', front: 'State the Quadratic Formula and when to use it.', backBullets: ['x = (−b ± √(b² − 4ac)) ÷ (2a) for ax² + bx + c = 0.', 'Use whenever the question asks for decimal places or significant figures.'], diagram: 'quadratic-graph' },
  { id: 'maths-fc-202', subtopicId: 'maths-2-1', front: 'How do you read off the turning point from y = (x + p)² + q?', backBullets: ['Turning point = (−p, q).', 'FLIP the inside sign, KEEP the outside sign!'] },
  { id: 'maths-fc-203', subtopicId: 'maths-2-1', front: 'State the difference of two squares identity with an example.', backBullets: ['a² − b² = (a + b)(a − b).', 'Example: 4x² − 25 = (2x + 5)(2x − 5).'] },
  { id: 'maths-fc-204', subtopicId: 'maths-2-1', front: 'How do you factorise a non-monic quadratic ax² + bx + c (a > 1)?', backBullets: ['Find two numbers multiplying to a × c and adding to b.', 'Split bx into those two terms and factorise by grouping.'] },
  { id: 'maths-fc-205', subtopicId: 'maths-2-1', front: 'Exam trap: What happens if you forget brackets around negative b in b²?', backBullets: ['−3² evaluates to −9 on a calculator, ruining the discriminant.', 'Always write (−3)² = +9.'] },

  // maths-2-2 (5)
  { id: 'maths-fc-206', subtopicId: 'maths-2-2', front: 'State the SSS rule for solving linear simultaneous equations by elimination.', backBullets: ['Same Signs Subtract; Different Signs Add (once coefficients match).'] },
  { id: 'maths-fc-207', subtopicId: 'maths-2-2', front: 'Which method must you use for a linear + quadratic/circle simultaneous pair?', backBullets: ['Substitution: isolate x or y in the linear equation and plug it into the quadratic/circle equation.', 'Always pair each x-solution with its matching y-solution!'] },
  { id: 'maths-fc-208', subtopicId: 'maths-2-2', front: 'What does a simultaneous solution (x, y) represent graphically?', backBullets: ['The exact point of intersection where the two graphs cross.'] },
  { id: 'maths-fc-209', subtopicId: 'maths-2-2', front: 'How many solutions can a straight line and a circle have?', backBullets: ['2 solutions (cuts twice), 1 repeated solution (tangent), or 0 real solutions (misses).'] },
  { id: 'maths-fc-210', subtopicId: 'maths-2-2', front: 'Exam trap: Expand (2x + 1)² correctly.', backBullets: ['(2x + 1)(2x + 1) = 4x² + 4x + 1.', 'Never forget the middle cross-term +4x!'] },

  // maths-3-1 (5)
  { id: 'maths-fc-301', subtopicId: 'maths-3-1', front: 'State the gradient and midpoint formulas for (x₁, y₁) and (x₂, y₂).', backBullets: ['Gradient m = (y₂ − y₁) ÷ (x₂ − x₁).', 'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).'] },
  { id: 'maths-fc-302', subtopicId: 'maths-3-1', front: 'How are the gradients of parallel vs perpendicular lines related?', backBullets: ['Parallel: m₁ = m₂ (equal).', 'Perpendicular: m₁ × m₂ = −1 (negative reciprocal: flip fraction and sign).'] },
  { id: 'maths-fc-303', subtopicId: 'maths-3-1', front: 'What must you do before reading gradient m from 4x + 2y = 10?', backBullets: ['Rearrange into y = mx + c: 2y = −4x + 10 → y = −2x + 5, so m = −2 and c = 5.'] },
  { id: 'maths-fc-304', subtopicId: 'maths-3-1', front: 'What is the gradient perpendicular to m = −3/4?', backBullets: ['Flip fraction (4/3) and flip sign (− → +) → m₂ = +4/3.'] },
  { id: 'maths-fc-305', subtopicId: 'maths-3-1', front: 'How do you find c once you know gradient m and a point (x, y)?', backBullets: ['Substitute x and y into y = mx + c and solve for c (careful not to swap x and y!).'] },

  // maths-4-1 (5)
  { id: 'maths-fc-401', subtopicId: 'maths-4-1', front: 'State the 4-step k method for all GCSE proportion questions.', backBullets: ['1. Write equation with k (y = kx, kx², k/x, etc.).', '2. Substitute known (x, y) to find k.', '3. Rewrite formula with k. 4. Solve for unknown.'] },
  { id: 'maths-fc-402', subtopicId: 'maths-4-1', front: 'Translate "y is inversely proportional to the square of x" into an equation.', backBullets: ['y = k ÷ x² (so k = y × x²).'] },
  { id: 'maths-fc-403', subtopicId: 'maths-4-1', front: 'How can you tell instantly if a straight-line graph shows direct proportion?', backBullets: ['It MUST be a straight line passing strictly through the origin (0, 0).', 'y = 2x + 5 is NOT direct proportion!'] },
  { id: 'maths-fc-404', subtopicId: 'maths-4-1', front: 'What does the graph of y ∝ 1/x look like in the first quadrant?', backBullets: ['A smooth reciprocal curve approaching both axes asymptotically without ever touching 0.'] },
  { id: 'maths-fc-405', subtopicId: 'maths-4-1', front: 'If y ∝ 1/x² and x doubles, what happens to y?', backBullets: ['y is divided by 2² = 4 (becomes one quarter of its original value).'] },

  // maths-5-1 (5)
  { id: 'maths-fc-501', subtopicId: 'maths-5-1', front: 'State Pythagoras’ Theorem for finding the hypotenuse vs a shorter side.', backBullets: ['Hypotenuse: c = √(a² + b²).', 'Shorter side: a = √(c² − b²).'], diagram: 'right-triangle-trig' },
  { id: 'maths-fc-502', subtopicId: 'maths-5-1', front: 'Write the three SOHCAHTOA trigonometric ratios.', backBullets: ['sin θ = Opp ÷ Hyp.', 'cos θ = Adj ÷ Hyp.', 'tan θ = Opp ÷ Adj.'] },
  { id: 'maths-fc-503', subtopicId: 'maths-5-1', front: 'How do you solve sin 35° = 8 ÷ x when x is in the denominator?', backBullets: ['Swap x and sin 35°: x = 8 ÷ sin 35° (DIVIDE, do not multiply!).'] },
  { id: 'maths-fc-504', subtopicId: 'maths-5-1', front: 'Recall exact values of sin 30°, sin 45°, and sin 60°.', backBullets: ['sin 30° = 1/2.', 'sin 45° = √2/2.', 'sin 60° = √3/2.'], hint: '√1/2, √2/2, √3/2!' },
  { id: 'maths-fc-505', subtopicId: 'maths-5-1', front: 'Recall exact values of tan 30°, tan 45°, and tan 60°.', backBullets: ['tan 30° = 1/√3 (or √3/3).', 'tan 45° = 1.', 'tan 60° = √3.'] },

  // maths-6-1 (5)
  { id: 'maths-fc-601', subtopicId: 'maths-6-1', front: 'State the AND and OR rules for probability tree diagrams.', backBullets: ['AND (along branches): MULTIPLY probabilities.', 'OR (separate outcomes): ADD probabilities.'] },
  { id: 'maths-fc-602', subtopicId: 'maths-6-1', front: 'What is the fast shortcut for P(at least one success)?', backBullets: ['P(at least one) = 1 − P(none).'] },
  { id: 'maths-fc-603', subtopicId: 'maths-6-1', front: 'What changes on the second stage of a WITHOUT-REPLACEMENT tree?', backBullets: ['Total denominator decreases by 1.', 'The numerator of whichever item was picked first also decreases by 1.'] },
  { id: 'maths-fc-604', subtopicId: 'maths-6-1', front: 'In what order should you fill numbers into a 2-circle Venn diagram?', backBullets: ['Put the centre overlap (A ∩ B) in FIRST.', 'Then subtract the overlap from circle A and circle B totals to prevent double-counting.'] },
  { id: 'maths-fc-605', subtopicId: 'maths-6-1', front: 'How do you compute a "given that" probability P(A | B) from a Venn diagram?', backBullets: ['Restrict your denominator ONLY to set B: P(A | B) = n(A ∩ B) ÷ n(B).'] },
];

export const MATHS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-maths-topic-1',
    slug: 'topic-1-numbers',
    title: 'Topic 1: Numbers — Complete Cheat Sheet',
    topicNumber: 1,
    topicName: 'Numbers',
    summary: 'Multipliers, compound & reverse percentages, index laws, surds, and standard form.',
    accentColor: '#2563eb',
    sections: [
      {
        heading: '1.1 Fractions, Percentages & Reverse Percentages',
        formula: 'Final = Initial × (Multiplier)ⁿ  |  Original = Final ÷ Multiplier',
        points: [
          'Convert mixed numbers to improper fractions before multiplying or dividing.',
          '+r% → ×(1 + r/100); −r% → ×(1 − r/100).',
          'Always DIVIDE by the multiplier to work backwards to 100%.',
        ],
      },
      {
        heading: '1.2 Index Laws, Surds & Standard Form',
        formula: 'a⁻ⁿ = 1/aⁿ  |  a^(m/n) = (ⁿ√a)ᵐ  |  A × 10ⁿ (1 ≤ A < 10)',
        points: [
          'Take the root (denominator) first, then raise to the power, then flip if negative.',
          'Rationalise a + √b using its conjugate a − √b.',
          'Adjust standard form answers so 1 ≤ A < 10.',
        ],
      },
    ],
  },
  {
    id: 'cs-maths-topic-2',
    slug: 'topic-2-algebra',
    title: 'Topic 2: Algebra — Complete Cheat Sheet',
    topicNumber: 2,
    topicName: 'Algebra',
    summary: 'Factorising, quadratic formula, completing the square, and simultaneous equations.',
    accentColor: '#7c3aed',
    sections: [
      {
        heading: '2.1 Quadratics',
        formula: 'x = (−b ± √(b² − 4ac)) ÷ 2a  |  y = (x + p)² + q → Vertex (−p, q)',
        points: [
          'Always rearrange to ax² + bx + c = 0 before solving.',
          'Difference of two squares: a² − b² = (a + b)(a − b).',
          'Bracket negative b when squaring: (−b)² > 0.',
        ],
      },
      {
        heading: '2.2 Simultaneous Equations',
        formula: 'Linear: SSS Elimination  |  Linear + Curve: Substitution',
        points: [
          'SSS = Same Signs Subtract; Different Signs Add.',
          'For line + quadratic/circle, substitute the linear equation and pair every x with its y.',
          'Solutions = exact points of intersection on graphs.',
        ],
      },
    ],
  },
  {
    id: 'cs-maths-topic-3',
    slug: 'topic-3-graphs',
    title: 'Topic 3: Graphs — Complete Cheat Sheet',
    topicNumber: 3,
    topicName: 'Graphs',
    summary: 'Straight-line equations, gradients, midpoints, and parallel/perpendicular rules.',
    accentColor: '#059669',
    sections: [
      {
        heading: '3.1 Straight Line Graphs',
        formula: 'y = mx + c  |  m = (y₂ − y₁)/(x₂ − x₁)  |  m₁m₂ = −1',
        points: [
          'Rearrange implicit equations into y = mx + c before reading m and c.',
          'Parallel lines: m₁ = m₂. Perpendicular lines: flip fraction and sign (m₂ = −1/m₁).',
          'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).',
        ],
      },
    ],
  },
  {
    id: 'cs-maths-topic-4',
    slug: 'topic-4-proportion',
    title: 'Topic 4: Ratio & Proportion — Complete Cheat Sheet',
    topicNumber: 4,
    topicName: 'Ratio, Proportion & Rates of Change',
    summary: 'Direct and inverse proportionality equations, 4-step k method, and graph recognition.',
    accentColor: '#ea580c',
    sections: [
      {
        heading: '4.1 Direct & Inverse Proportion',
        formula: 'Direct: y = kx  |  Inverse: y = k/x  |  Inverse Square: y = k/x²',
        points: [
          '4-step method: write with k → plug in known pair → find k → solve.',
          'Direct proportion y ∝ x MUST pass through the origin (0, 0).',
          'Inverse proportion y ∝ 1/x forms a smooth reciprocal curve approaching both axes.',
        ],
      },
    ],
  },
  {
    id: 'cs-maths-topic-5',
    slug: 'topic-5-geometry',
    title: 'Topic 5: Geometry & Measures — Complete Cheat Sheet',
    topicNumber: 5,
    topicName: 'Geometry & Measures',
    summary: 'Pythagoras, SOHCAHTOA, unknown-on-bottom swaps, and exact Paper 1 trig values.',
    accentColor: '#db2777',
    sections: [
      {
        heading: '5.1 Pythagoras & SOHCAHTOA',
        formula: 'a² + b² = c²  |  sin = O/H  |  cos = A/H  |  tan = O/A',
        points: [
          'Add squares for hypotenuse; subtract squares for a shorter side.',
          'Exact sin(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2; cos is the reverse.',
          'tan 30° = 1/√3, tan 45° = 1, tan 60° = √3.',
        ],
      },
    ],
  },
  {
    id: 'cs-maths-topic-6',
    slug: 'topic-6-probability',
    title: 'Topic 6: Probability & Statistics — Complete Cheat Sheet',
    topicNumber: 6,
    topicName: 'Probability & Statistics',
    summary: 'Independent & without-replacement trees, Venn notation, and conditional probability.',
    accentColor: '#0284c7',
    sections: [
      {
        heading: '6.1 Probability Trees & Venn Diagrams',
        formula: 'AND = ×  |  OR = +  |  P(≥1) = 1 − P(none)  |  P(A|B) = n(A∩B)/n(B)',
        points: [
          'Sibling branches from any node always sum to 1.',
          'Without replacement drops both the remaining total and picked-category numerator by 1.',
          'Fill the Venn centre overlap (A ∩ B) FIRST before subtracting from circle totals.',
        ],
      },
    ],
  },
];

export const MATHS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'maths-exam-1',
    subtopicId: 'maths-1-1',
    number: 1,
    stimulus: 'A bike shop reduces all mountain bikes by 15% in a winter sale. One bike sells for £340 in the sale. Separately, a customer deposits £5,000 in a savings account paying 4% compound interest per year.',
    parts: [
      {
        id: 'maths-exam-1a',
        label: 'a)',
        prompt: 'Calculate the original price of the mountain bike before the 15% reduction.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '£340 represents 85% (multiplier 0.85), so Original = 340 ÷ 0.85 = £400.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies multiplier 0.85 (85%)', requiredKeywordGroups: [['0.85', '85']] },
            { id: 'mp2', markDescription: 'Calculates £400', numericMatch: { value: 400, tolerance: 0.5 } },
          ],
        },
      },
      {
        id: 'maths-exam-1b',
        label: 'b)',
        prompt: 'Calculate the value of the £5,000 savings account after 3 years at 4% compound interest per year.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '5000 × (1.04)³ = £5,624.32.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses compound multiplier 1.04³', requiredKeywordGroups: [['1.04']] },
            { id: 'mp2', markDescription: 'Calculates £5,624.32', numericMatch: { value: 5624.32, tolerance: 0.1 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-2',
    subtopicId: 'maths-1-2',
    number: 2,
    stimulus: 'Non-calculator question involving indices, surds, and standard form.',
    parts: [
      {
        id: 'maths-exam-2a',
        label: 'a)',
        prompt: 'Evaluate 16^(3/4) + 2⁻³ as a mixed number or decimal.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '16^(3/4) = (⁴√16)³ = 2³ = 8; 2⁻³ = 1/8 = 0.125. Sum = 8.125 (or 8 1/8).',
          markPoints: [
            { id: 'mp1', markDescription: 'Evaluates 16^(3/4) = 8', numericMatch: { value: 8, tolerance: 0 } },
            { id: 'mp2', markDescription: 'Obtains final sum 8.125 (or 8 1/8)', numericMatch: { value: 8.125, tolerance: 0.01 } },
          ],
        },
      },
      {
        id: 'maths-exam-2b',
        label: 'b)',
        prompt: 'Work out (6 × 10⁷) ÷ (3 × 10²) + (5 × 10⁴), giving your final answer in standard form.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '(6 × 10⁷) ÷ (3 × 10²) = 2 × 10⁵ = 200,000. Adding 50,000 gives 250,000 = 2.5 × 10⁵.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates quotient 2 × 10⁵ (200,000)', requiredKeywordGroups: [['2', '200000', '200,000']] },
            { id: 'mp2', markDescription: 'Writes final answer 2.5 × 10⁵', numericMatch: { value: 2.5, tolerance: 0.01 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-3',
    subtopicId: 'maths-2-1',
    number: 3,
    stimulus: 'A quadratic curve has the equation y = x² − 6x + 5.',
    diagram: 'quadratic-graph',
    parts: [
      {
        id: 'maths-exam-3a',
        label: 'a)',
        prompt: 'Factorise x² − 6x + 5 and state the two roots where the curve crosses the x-axis.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '(x − 1)(x − 5) = 0, so the roots are x = 1 and x = 5.',
          markPoints: [
            { id: 'mp1', markDescription: 'Finds root x = 1', numericMatch: { value: 1, tolerance: 0 } },
            { id: 'mp2', markDescription: 'Finds root x = 5', numericMatch: { value: 5, tolerance: 0 } },
          ],
        },
      },
      {
        id: 'maths-exam-3b',
        label: 'b)',
        prompt: 'Write y = x² − 6x + 5 in completed-square form (x − p)² + q and state the coordinates of its minimum turning point.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'y = (x − 3)² − 9 + 5 = (x − 3)² − 4. Minimum turning point is (3, −4).',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies x-coordinate of turning point = 3', numericMatch: { value: 3, tolerance: 0 } },
            { id: 'mp2', markDescription: 'Identifies y-coordinate of turning point = −4', numericMatch: { value: -4, tolerance: 0 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-4',
    subtopicId: 'maths-2-2',
    number: 4,
    stimulus: 'A café sells 3 coffees and 2 muffins for £13.00, and 2 coffees and 5 muffins for £16.00.',
    parts: [
      {
        id: 'maths-exam-4a',
        label: 'a)',
        prompt: 'Solve the simultaneous equations 3c + 2m = 13 and 2c + 5m = 16 to find the cost of one coffee (c) and one muffin (m).',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Scale to 6c + 4m = 26 and 6c + 15m = 48. Subtracting gives 11m = 22 → m = £2.00. Substituting into 3c + 4 = 13 → 3c = 9 → c = £3.00.',
          markPoints: [
            { id: 'mp1', markDescription: 'Eliminates c or m cleanly (11m = 22)', numericMatch: { value: 22, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'Finds muffin cost m = £2 (2.00)', numericMatch: { value: 2, tolerance: 0.01 } },
            { id: 'mp3', markDescription: 'Finds coffee cost c = £3 (3.00)', numericMatch: { value: 3, tolerance: 0.01 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-5',
    subtopicId: 'maths-3-1',
    number: 5,
    stimulus: 'Line L₁ passes through A(2, 1) and B(6, 9). Line L₂ is perpendicular to L₁ and passes through the midpoint M of AB.',
    parts: [
      {
        id: 'maths-exam-5a',
        label: 'a)',
        prompt: 'Find the gradient of line L₁ and the coordinates of midpoint M.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Gradient m₁ = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2. Midpoint M = ((2 + 6)/2, (1 + 9)/2) = (4, 5).',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates gradient m₁ = 2', numericMatch: { value: 2, tolerance: 0 } },
            { id: 'mp2', markDescription: 'Calculates midpoint (4, 5)', numericMatch: { value: 5, tolerance: 0 } },
          ],
        },
      },
      {
        id: 'maths-exam-5b',
        label: 'b)',
        prompt: 'Find the equation of the perpendicular bisector L₂ in the form y = mx + c.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Perpendicular gradient m₂ = −0.5 (−1/2). Passing through (4, 5): 5 = −0.5(4) + c → c = 7. Equation: y = −0.5x + 7.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses perpendicular gradient −0.5 (−1/2)', requiredKeywordGroups: [['-0.5', '-1/2', '−0.5', '−1/2']] },
            { id: 'mp2', markDescription: 'Finds y-intercept c = 7', numericMatch: { value: 7, tolerance: 0 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-6',
    subtopicId: 'maths-4-1',
    number: 6,
    stimulus: 'The time t (hours) to fill a swimming pool is inversely proportional to the number of identical pumps p operating. With 4 pumps running, the pool fills in 9 hours.',
    parts: [
      {
        id: 'maths-exam-6a',
        label: 'a)',
        prompt: 'Find the equation connecting t and p.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 't = k ÷ p → 9 = k ÷ 4 → k = 36, so t = 36 ÷ p.',
          markPoints: [
            { id: 'mp1', markDescription: 'Finds constant k = 36', numericMatch: { value: 36, tolerance: 0 } },
            { id: 'mp2', markDescription: 'Writes t = 36 ÷ p (or 36/p)', requiredKeywordGroups: [['36'], ['p']] },
          ],
        },
      },
      {
        id: 'maths-exam-6b',
        label: 'b)',
        prompt: 'Calculate how long it takes to fill the pool using 6 pumps.',
        kind: 'short-answer',
        marks: 1,
        rubric: {
          maxMarks: 1,
          modelAnswer: 't = 36 ÷ 6 = 6 hours.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates 6 hours', numericMatch: { value: 6, tolerance: 0 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-7',
    subtopicId: 'maths-5-1',
    number: 7,
    stimulus: 'A 10 m guy rope is anchored 6 m horizontally from the base of a vertical radio mast, forming a right-angled triangle.',
    diagram: 'right-triangle-trig',
    parts: [
      {
        id: 'maths-exam-7a',
        label: 'a)',
        prompt: 'Calculate the vertical height of the attachment point on the mast.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Height = √(10² − 6²) = √(100 − 36) = √64 = 8 m.',
          markPoints: [
            { id: 'mp1', markDescription: 'Uses Pythagoras subtraction 10² − 6² = 64', numericMatch: { value: 64, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'Calculates height = 8 m', numericMatch: { value: 8, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'maths-exam-7b',
        label: 'b)',
        prompt: 'Calculate the angle θ the rope makes with the horizontal ground, to 1 decimal place.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'cos θ = Adj ÷ Hyp = 6 ÷ 10 = 0.6 → θ = cos⁻¹(0.6) = 53.1°.',
          markPoints: [
            { id: 'mp1', markDescription: 'Sets up cos θ = 0.6 (or tan θ = 8/6, sin θ = 0.8)', requiredKeywordGroups: [['0.6', '0.8', '8/6', '6/10', '8/10']] },
            { id: 'mp2', markDescription: 'Calculates 53.1°', numericMatch: { value: 53.1, tolerance: 0.2 } },
          ],
        },
      },
    ],
  },
  {
    id: 'maths-exam-8',
    subtopicId: 'maths-6-1',
    number: 8,
    stimulus: 'A jar contains 4 blue and 6 white marbles. Priya takes two marbles at random WITHOUT replacement.',
    parts: [
      {
        id: 'maths-exam-8a',
        label: 'a)',
        prompt: 'Calculate the probability that both marbles are blue (as a simplified fraction or decimal).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'P(both blue) = (4/10) × (3/9) = 12/90 = 2/15 (0.133).',
          markPoints: [
            { id: 'mp1', markDescription: 'Multiplies 4/10 × 3/9', requiredKeywordGroups: [['4/10', '0.4'], ['3/9', '1/3']] },
            { id: 'mp2', markDescription: 'Obtains 12/90 or 2/15', requiredKeywordGroups: [['12/90', '2/15', '0.133']] },
          ],
        },
      },
      {
        id: 'maths-exam-8b',
        label: 'b)',
        prompt: 'Calculate the probability that Priya picks one marble of each colour.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'P(B, W) + P(W, B) = (4/10)(6/9) + (6/10)(4/9) = 24/90 + 24/90 = 48/90 = 8/15.',
          markPoints: [
            { id: 'mp1', markDescription: 'Includes both orders B-W and W-B (24/90 + 24/90)', requiredKeywordGroups: [['24/90', '48/90', '8/15']] },
            { id: 'mp2', markDescription: 'Simplifies to 8/15 (or 48/90)', requiredKeywordGroups: [['8/15', '48/90', '0.533']] },
          ],
        },
      },
    ],
  },
];

export const MATHS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'maths-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 1 Non-Calculator (1MA1/1H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '1MA1/1H',
    durationMinutes: 90,
    totalMarks: 80,
    insertNote: 'Includes Official GCSE Maths Higher Formulae Sheet (Non-Calculator).',
    sampleQuestions: [
      {
        number: '1',
        question: 'Work out 2⅓ × 1¾. Give your answer as a mixed number in its simplest form.',
        marks: 2,
        markScheme: ['Convert to improper fractions: (7/3) × (7/4) = 49/12 (1 mark)', 'Convert to mixed number: 4 1/12 (1 mark)'],
      },
      {
        number: '2',
        question: 'Evaluate 27^(−2/3) + 5⁰.',
        marks: 2,
        markScheme: ['27^(−2/3) = 1/9 (1 mark)', '1/9 + 1 = 10/9 or 1 1/9 (1 mark)'],
      },
      {
        number: '3',
        question: 'Rationalise the denominator of 12 ÷ (√7 − 1) and simplify.',
        marks: 3,
        markScheme: ['Multiply top and bottom by (√7 + 1) (1 mark)', 'Denominator = 7 − 1 = 6 (1 mark)', 'Final answer: 2√7 + 2 (1 mark)'],
      },
      {
        number: '4',
        question: 'Write down the exact value of (sin 30° × cos 60°) + tan 45°.',
        marks: 2,
        markScheme: ['(1/2 × 1/2) + 1 (1 mark)', '5/4 or 1.25 (1 mark)'],
      },
    ],
  },
  {
    id: 'maths-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 2 Calculator (1MA1/2H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '1MA1/2H',
    durationMinutes: 90,
    totalMarks: 80,
    insertNote: 'Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).',
    sampleQuestions: [
      {
        number: '1',
        question: 'A car bought for £18,000 depreciates by 12% each year. Calculate its value after 4 years to the nearest pound.',
        marks: 2,
        markScheme: ['18000 × (0.88)⁴ (1 mark)', '£10,794 (1 mark)'],
      },
      {
        number: '2',
        question: 'Solve 3x² − 4x − 5 = 0. Give your solutions correct to 2 decimal places.',
        marks: 3,
        markScheme: ['Substitute a = 3, b = −4, c = −5 into quadratic formula (1 mark)', 'x = (4 ± √76) ÷ 6 (1 mark)', 'x = 2.12 or x = −0.79 (1 mark)'],
      },
      {
        number: '3',
        question: 'y is directly proportional to √x. When x = 16, y = 20. Find x when y = 35.',
        marks: 3,
        markScheme: ['20 = k√16 → k = 5 (1 mark)', '35 = 5√x → √x = 7 (1 mark)', 'x = 49 (1 mark)'],
      },
      {
        number: '4',
        question: 'In a right-angled triangle, angle A = 38° and adjacent side = 9.4 cm. Calculate the hypotenuse to 1 decimal place.',
        marks: 2,
        markScheme: ['Hyp = 9.4 ÷ cos 38° (1 mark)', '11.9 cm (1 mark)'],
      },
    ],
  },
  {
    id: 'maths-pp-2024-p3',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 3 Calculator (1MA1/3H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '1MA1/3H',
    durationMinutes: 90,
    totalMarks: 80,
    insertNote: 'Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).',
    sampleQuestions: [
      {
        number: '1',
        question: 'After a 12% pay rise, Sam earns £31,360. Calculate Sam’s salary before the rise.',
        marks: 2,
        markScheme: ['31360 ÷ 1.12 (1 mark)', '£28,000 (1 mark)'],
      },
      {
        number: '2',
        question: 'Solve simultaneously: y = 2x − 1 and x² + y² = 10.',
        marks: 4,
        markScheme: ['x² + (2x − 1)² = 10 → 5x² − 4x − 9 = 0 (2 marks)', '(5x − 9)(x + 1) = 0 → x = 1.8 or x = −1 (1 mark)', 'Paired answers: (1.8, 2.6) and (−1, −3) (1 mark)'],
      },
      {
        number: '3',
        question: 'Find the equation of the line perpendicular to 2y + 6x = 8 passing through (6, 5).',
        marks: 3,
        markScheme: ['Rearrange to y = −3x + 4 → m₁ = −3, so m₂ = 1/3 (1 mark)', '5 = (1/3)(6) + c → c = 3 (1 mark)', 'y = (1/3)x + 3 (1 mark)'],
      },
      {
        number: '4',
        question: 'A bag has 5 green and 3 red discs. Two discs are drawn without replacement. Find P(different colours).',
        marks: 3,
        markScheme: ['P(G, R) = (5/8)(3/7) = 15/56 (1 mark)', 'P(R, G) = (3/8)(5/7) = 15/56 (1 mark)', 'Total = 30/56 = 15/28 (1 mark)'],
      },
    ],
  },
  {
    id: 'maths-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 1 Non-Calculator (1MA1/1H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '1MA1/1H',
    durationMinutes: 90,
    totalMarks: 80,
    insertNote: 'Includes Official GCSE Maths Higher Formulae Sheet (Non-Calculator).',
    sampleQuestions: [
      {
        number: '1',
        question: 'Simplify √50 + √18 − √8.',
        marks: 2,
        markScheme: ['5√2 + 3√2 − 2√2 (1 mark)', '6√2 (1 mark)'],
      },
      {
        number: '2',
        question: 'Factorise 6x² + 11x − 10.',
        marks: 2,
        markScheme: ['AC = −60; split as +15x − 4x (1 mark)', '(2x + 5)(3x − 2) (1 mark)'],
      },
      {
        number: '3',
        question: 'Write x² − 10x + 18 in the form (x − a)² + b and state the minimum turning point.',
        marks: 3,
        markScheme: ['(x − 5)² − 25 + 18 (1 mark)', '(x − 5)² − 7 (1 mark)', 'Turning point (5, −7) (1 mark)'],
      },
      {
        number: '4',
        question: 'Work out (3.2 × 10⁵) + (4.5 × 10⁴) in standard form.',
        marks: 2,
        markScheme: ['320,000 + 45,000 = 365,000 (1 mark)', '3.65 × 10⁵ (1 mark)'],
      },
    ],
  },
  {
    id: 'maths-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 2 Calculator (1MA1/2H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '1MA1/2H',
    durationMinutes: 90,
    totalMarks: 80,
    insertNote: 'Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).',
    sampleQuestions: [
      {
        number: '1',
        question: 'A town’s population grows by 2.4% per year from 45,000. Find the population after 5 years to the nearest hundred.',
        marks: 2,
        markScheme: ['45000 × (1.024)⁵ = 50,665 (1 mark)', '50,700 (1 mark)'],
      },
      {
        number: '2',
        question: 'P is inversely proportional to V. When V = 12, P = 15. Find V when P = 25.',
        marks: 3,
        markScheme: ['k = 12 × 15 = 180 (1 mark)', '25 = 180 ÷ V (1 mark)', 'V = 7.2 (1 mark)'],
      },
      {
        number: '3',
        question: 'Find the length of the line segment joining (−2, 3) and (4, 11).',
        marks: 2,
        markScheme: ['Δx = 6, Δy = 8; √(6² + 8²) (1 mark)', '10 units (1 mark)'],
      },
      {
        number: '4',
        question: 'In a Venn diagram of 40 students, 22 play tennis, 19 swim, and 7 do both. Find P(tennis | swims).',
        marks: 2,
        markScheme: ['n(T ∩ S) = 7, n(S) = 19 (1 mark)', '7/19 (1 mark)'],
      },
    ],
  },
  {
    id: 'maths-pp-2023-p3',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 3 Calculator (1MA1/3H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '1MA1/3H',
    durationMinutes: 90,
    totalMarks: 80,
    insertNote: 'Includes Official GCSE Maths Higher Formulae Sheet (Calculator Allowed).',
    sampleQuestions: [
      {
        number: '1',
        question: 'Solve 5x − 3y = 19 and 2x + y = 12.',
        marks: 3,
        markScheme: ['Multiply second by 3: 6x + 3y = 36 (1 mark)', 'Add: 11x = 55 → x = 5 (1 mark)', 'y = 12 − 10 = 2 (1 mark)'],
      },
      {
        number: '2',
        question: 'A right-angled ramp rises 1.8 m over a horizontal run of 4.5 m. Find the angle of elevation to 1 d.p.',
        marks: 2,
        markScheme: ['tan θ = 1.8 ÷ 4.5 = 0.4 (1 mark)', 'θ = 21.8° (1 mark)'],
      },
      {
        number: '3',
        question: 'Show algebraically that the lines y = 4x − 3 and 2x + 8y = 16 are perpendicular.',
        marks: 2,
        markScheme: ['Second line: y = −(1/4)x + 2, so m₂ = −1/4 (1 mark)', 'm₁ × m₂ = 4 × (−1/4) = −1, therefore perpendicular (1 mark)'],
      },
      {
        number: '4',
        question: 'A biased dice has P(6) = 0.3. It is rolled twice. Find P(at least one 6).',
        marks: 2,
        markScheme: ['P(no 6) = 0.7 × 0.7 = 0.49 (1 mark)', 'P(at least one 6) = 1 − 0.49 = 0.51 (1 mark)'],
      },
    ],
  },
];

export const MATHS_KEY_TERMS: KeyTermEntry[] = [
  { id: 'maths-kt-1', term: 'Multiplier', definition: 'Decimal factor corresponding to a percentage increase or decrease (e.g. 1.04 for +4%).', topicNumber: 1, subtopicId: 'maths-1-1', subtopicCode: '1.1' },
  { id: 'maths-kt-2', term: 'Compound interest', definition: 'Interest calculated on both the starting amount and previously earned interest: A = P(1 + r/100)ⁿ.', topicNumber: 1, subtopicId: 'maths-1-1', subtopicCode: '1.1' },
  { id: 'maths-kt-3', term: 'Reverse percentage', definition: 'Recovering the original 100% value by dividing the changed amount by its decimal multiplier.', topicNumber: 1, subtopicId: 'maths-1-1', subtopicCode: '1.1' },
  { id: 'maths-kt-4', term: 'Reciprocal', definition: '1 divided by a number (a⁻¹ = 1/a), flipping a fraction upside down.', topicNumber: 1, subtopicId: 'maths-1-2', subtopicCode: '1.2' },
  { id: 'maths-kt-5', term: 'Surd', definition: 'Exact irrational root written with a square-root sign (e.g. √3 or 4√2).', topicNumber: 1, subtopicId: 'maths-1-2', subtopicCode: '1.2' },
  { id: 'maths-kt-6', term: 'Standard form', definition: 'Scientific notation A × 10ⁿ where 1 ≤ A < 10 and n is an integer.', topicNumber: 1, subtopicId: 'maths-1-2', subtopicCode: '1.2' },
  { id: 'maths-kt-7', term: 'Quadratic equation', definition: 'Polynomial equation of highest power 2 in the form ax² + bx + c = 0.', topicNumber: 2, subtopicId: 'maths-2-1', subtopicCode: '2.1' },
  { id: 'maths-kt-8', term: 'Turning point', definition: 'Minimum or maximum vertex of a parabola y = (x + p)² + q located at (−p, q).', topicNumber: 2, subtopicId: 'maths-2-1', subtopicCode: '2.1' },
  { id: 'maths-kt-9', term: 'Discriminant', definition: 'Expression b² − 4ac determining whether a quadratic has 2, 1, or 0 real roots.', topicNumber: 2, subtopicId: 'maths-2-1', subtopicCode: '2.1' },
  { id: 'maths-kt-10', term: 'Simultaneous equations', definition: 'Two or more equations sharing unknowns that must be satisfied at the exact same values.', topicNumber: 2, subtopicId: 'maths-2-2', subtopicCode: '2.2' },
  { id: 'maths-kt-11', term: 'Point of intersection', definition: 'Coordinate pair (x, y) where two graphs meet, representing their simultaneous solution.', topicNumber: 2, subtopicId: 'maths-2-2', subtopicCode: '2.2' },
  { id: 'maths-kt-12', term: 'Gradient', definition: 'Steepness of a line equal to (y₂ − y₁) ÷ (x₂ − x₁).', topicNumber: 3, subtopicId: 'maths-3-1', subtopicCode: '3.1' },
  { id: 'maths-kt-13', term: 'Perpendicular lines', definition: 'Two lines meeting at 90° whose gradients multiply to −1 (m₂ = −1/m₁).', topicNumber: 3, subtopicId: 'maths-3-1', subtopicCode: '3.1' },
  { id: 'maths-kt-14', term: 'Direct proportion', definition: 'Relationship y = kx where y/x remains constant and graph passes through (0, 0).', topicNumber: 4, subtopicId: 'maths-4-1', subtopicCode: '4.1' },
  { id: 'maths-kt-15', term: 'Inverse proportion', definition: 'Relationship y = k/x where x × y remains constant.', topicNumber: 4, subtopicId: 'maths-4-1', subtopicCode: '4.1' },
  { id: 'maths-kt-16', term: 'Hypotenuse', definition: 'The longest side of a right-angled triangle, directly opposite the 90° angle.', topicNumber: 5, subtopicId: 'maths-5-1', subtopicCode: '5.1' },
  { id: 'maths-kt-17', term: 'Trigonometric ratio', definition: 'Side-length ratio sine (O/H), cosine (A/H), or tangent (O/A) linked to an acute angle.', topicNumber: 5, subtopicId: 'maths-5-1', subtopicCode: '5.1' },
  { id: 'maths-kt-18', term: 'Independent events', definition: 'Events where the outcome of the first does not affect the probabilities of the second.', topicNumber: 6, subtopicId: 'maths-6-1', subtopicCode: '6.1' },
  { id: 'maths-kt-19', term: 'Intersection (A ∩ B)', definition: 'Region of a Venn diagram belonging to both set A and set B.', topicNumber: 6, subtopicId: 'maths-6-1', subtopicCode: '6.1' },
  { id: 'maths-kt-20', term: 'Union (A ∪ B)', definition: 'All elements belonging to set A, set B, or both.', topicNumber: 6, subtopicId: 'maths-6-1', subtopicCode: '6.1' },
];
