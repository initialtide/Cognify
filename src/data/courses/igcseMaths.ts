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

export const IGCSE_MATHS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Number',
    subtopics: [
      {
        id: 'igcse-maths-1-1',
        code: '1.1',
        slug: '1.1-fractions-percentages-compound-reverse',
        title: 'Fractions, Percentages, Compound Interest & Reverse Percentages',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-1-2',
        code: '1.2',
        slug: '1.2-indices-surds-standard-form-bounds',
        title: 'Indices, Surds, Standard Form & Upper/Lower Bounds',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-1-3',
        code: '1.3',
        slug: '1.3-ratio-direct-inverse-proportion',
        title: 'Ratio, Direct Proportion & Inverse Proportion',
        readingMinutes: 9,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Algebra & Graphs',
    subtopics: [
      {
        id: 'igcse-maths-2-1',
        code: '2.1',
        slug: '2.1-quadratics-factorising-formula-completing-square',
        title: 'Expanding, Factorising & Solving Quadratic Equations',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-2-2',
        code: '2.2',
        slug: '2.2-simultaneous-equations-inequalities',
        title: 'Simultaneous Equations (Linear & Quadratic) & Inequalities',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-2-3',
        code: '2.3',
        slug: '2.3-sequences-functions-differentiation',
        title: 'Sequences, Functions (Composite/Inverse) & Differentiation',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Coordinate Geometry',
    subtopics: [
      {
        id: 'igcse-maths-3-1',
        code: '3.1',
        slug: '3.1-straight-line-graphs-midpoint-perpendicular',
        title: 'Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'Geometry & Circle Theorems',
    subtopics: [
      {
        id: 'igcse-maths-4-1',
        code: '4.1',
        slug: '4.1-angles-polygons-bearings-similarity',
        title: 'Angles, Polygons, Bearings, Similarity & Congruence',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-4-2',
        code: '4.2',
        slug: '4.2-circle-theorems-alternate-segment',
        title: 'Circle Theorems & Alternate Segment Theorem',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 5,
    title: 'Mensuration',
    subtopics: [
      {
        id: 'igcse-maths-5-1',
        code: '5.1',
        slug: '5.1-area-sectors-volume-surface-area',
        title: 'Area, Arc Length, Sector Area, Surface Area & Volume',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'Trigonometry',
    subtopics: [
      {
        id: 'igcse-maths-6-1',
        code: '6.1',
        slug: '6.1-pythagoras-sohcahtoa-3d-trig',
        title: 'Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-6-2',
        code: '6.2',
        slug: '6.2-sine-rule-cosine-rule-triangle-area',
        title: 'Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 7,
    title: 'Vectors & Transformations',
    subtopics: [
      {
        id: 'igcse-maths-7-1',
        code: '7.1',
        slug: '7.1-vectors-transformations',
        title: 'Column Vectors, Vector Geometry & Transformations',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 8,
    title: 'Probability & Statistics',
    subtopics: [
      {
        id: 'igcse-maths-8-1',
        code: '8.1',
        slug: '8.1-probability-trees-venn-conditional',
        title: 'Probability Trees, Venn Diagrams & Conditional Probability',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-maths-8-2',
        code: '8.2',
        slug: '8.2-averages-cumulative-frequency-histograms',
        title: 'Averages, Cumulative Frequency, Box Plots & Histograms',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_MATHS_NOTES: Record<string, NoteLesson> = {
  'igcse-maths-1-1': {
    subtopicId: 'igcse-maths-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Fractions, Percentages, Compound Interest & Reverse Percentages',
    readingMinutes: 10,
    videoTitle: 'GCSE Maths - Percentage Increase and Decrease (Multiplier Method)',
    youtubeId: 'MTxNPBupKMo',
    videoChannel: 'Cognito',
    videoDuration: '7:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Percentage Increases and Decreases', cardId: 'igcse-maths-1-1-c1' },
      { time: '1:33', seconds: 93, label: 'Method 1: Simple Calculation (Decrease Example)', cardId: 'igcse-maths-1-1-c1' },
      { time: '4:38', seconds: 278, label: 'Multiplier Method (Increase Example 2)', cardId: 'igcse-maths-1-1-c2' },
      { time: '6:35', seconds: 395, label: 'Multiplier Method: Increases over 100%', cardId: 'igcse-maths-1-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-1-1-c1',
        title: 'Fractions, Recurring Decimals & Percentage Change',
        summary: 'Mixed-number fraction arithmetic, recurring decimals, and percentage change.',
        bullets: [
          'Always convert mixed numbers to improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12. To divide, multiply by the reciprocal (Keep–Change–Flip).',
          'Converting a recurring decimal to an exact fraction (Extended): Let x = 0.363636..., then 100x = 36.363636... Subtracting gives 99x = 36, so x = 36/99 = 4/11.',
          'Percentage change = ((New value − Original value) ÷ Original value) × 100%. Always divide by the ORIGINAL value, never the new value!',
        ],
        glossaryPills: [
          {
            term: 'reciprocal',
            definition: 'The multiplicative inverse of a number or fraction obtained by swapping numerator and denominator (e.g., reciprocal of 3/4 is 4/3).',
          },
        ],
      },
      {
        id: 'igcse-maths-1-1-c2',
        title: 'Decimal Multipliers, Simple & Compound Interest',
        summary: 'Using decimal multipliers for simple interest, compound interest, and decay.',
        bullets: [
          'A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82.',
          'Simple interest adds the SAME fixed amount every year: I = (P × R × T) ÷ 100.',
          'Compound interest (and exponential decay/depreciation): Final Value = P × (1 ± r/100)ⁿ, where P is principal, r is rate per period, and n is number of periods.',
          '**Worked example:** $5,000 is invested at 4% compound interest for 3 years. Value = 5000 × (1.04)³ = $5,624.32. Total interest earned = $624.32.',
        ],
        glossaryPills: [
          {
            term: 'decimal multiplier',
            definition: 'A single decimal factor representing a percentage increase (1 + r/100) or decrease (1 − r/100).',
          },
        ],
        memoryAid: 'Simple = Straight-line addition each year; Compound = Multiply by (Multiplier)^n repeatedly!',
      },
      {
        id: 'igcse-maths-1-1-c3',
        title: 'Reverse Percentages',
        summary: 'Working backwards by dividing by the multiplier to find original prices.',
        bullets: [
          'Use reverse percentages when you are given the FINAL amount AFTER a percentage increase or decrease and must recover the ORIGINAL 100% value.',
          '**Method:** Original = Final amount ÷ Decimal Multiplier.',
          '**Worked example 1 (decrease):** A laptop costs $510 after a 15% discount. $510 represents 85% (multiplier 0.85), so Original = 510 ÷ 0.85 = $600.',
          '**Worked example 2 (increase):** After a 12% pay rise, Ali earns $2,800/month. $2,800 represents 112% (multiplier 1.12), so Original = 2800 ÷ 1.12 = $2,500.',
        ],
        commonMistake: 'NEVER find 15% of $510 and add it back — 15% of the reduced price is smaller than 15% of the original price. Always DIVIDE by 0.85!',
      },
    ],
    keyTerms: [
      { term: 'Decimal multiplier', definition: 'Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85).' },
      { term: 'Compound interest', definition: 'Interest calculated on both the initial principal and all previously accumulated interest: A = P(1 + r/100)ⁿ.' },
      { term: 'Reverse percentage', definition: 'Finding the original 100% quantity by dividing the post-change value by its decimal multiplier.' },
    ],
    checklistPoints: [
      'Convert recurring decimals to simplified fractions algebraically.',
      'Use A = P(1 ± r/100)ⁿ for compound interest and depreciation.',
      'Divide by the correct decimal multiplier to solve reverse percentage questions.',
    ],
  },
  'igcse-maths-1-2': {
    subtopicId: 'igcse-maths-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Indices, Surds, Standard Form & Upper/Lower Bounds',
    readingMinutes: 11,
    videoTitle: 'GCSE Maths - What on Earth are Surds? And How do You Simplify Them? (Part 1/3)',
    youtubeId: 'wzAotwNPhm8',
    videoChannel: 'Cognito',
    videoDuration: '5:37',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction & What are Surds?', cardId: 'igcse-maths-1-2-c2' },
      { time: '1:49', seconds: 109, label: 'Splitting Surds using Factors', cardId: 'igcse-maths-1-2-c2' },
      { time: '2:50', seconds: 170, label: 'How to Simplify Surds', cardId: 'igcse-maths-1-2-c2' },
      { time: '5:04', seconds: 304, label: 'Simplify sqrt(48)', cardId: 'igcse-maths-1-2-c2' },
    ],
    cards: [
      {
        id: 'igcse-maths-1-2-c1',
        title: 'Laws of Indices (Integer, Negative & Fractional)',
        summary: 'Evaluating negative, zero, and fractional indices cleanly without a calculator.',
        bullets: [
          '**Core index laws:** aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1 (for any a ≠ 0).',
          '**Negative index means reciprocal:** a⁻ⁿ = 1 ÷ aⁿ (and (a/b)⁻ⁿ = (b/a)ⁿ). Example: (2/3)⁻² = (3/2)² = 9/4.',
          '**Fractional index means root then power:** a^(m/n) = (ⁿ√a)ᵐ. Always take the root FIRST to keep numbers small!',
          '**Worked example:** Evaluate 27^(−2/3). Step 1: Cube root of 27 = 3. Step 2: Square it → 3² = 9. Step 3: Apply negative power (reciprocal) → 1/9.',
        ],
        memoryAid: 'Fractional powers: "Flower Power" — the denominator is the ROOT (underground), the numerator is the POWER (up top)!',
      },
      {
        id: 'igcse-maths-1-2-c2',
        title: 'Surds & Rationalising the Denominator',
        summary: 'Simplifying square roots and rationalising single- and two-term denominators.',
        bullets: [
          'A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2.',
          'Collect like surds just like algebra: 5√3 + √12 = 5√3 + 2√3 = 7√3.',
          '**Rationalising single-term denominator:** multiply top and bottom by √b. Example: 6/√3 = (6√3)/3 = 2√3.',
          'Rationalising binomial denominator (a + √b): multiply top and bottom by the conjugate (a − √b) using difference of two squares: 4 ÷ (3 − √5) = 4(3 + √5) ÷ (9 − 5) = 3 + √5.',
        ],
        glossaryPills: [
          {
            term: 'surd',
            definition: 'An exact irrational root (such as √2 or √7) that cannot be simplified to a terminating or recurring decimal.',
          },
          {
            term: 'conjugate',
            definition: 'The binomial expression formed by flipping the sign between two terms (e.g., 3 + √5 is the conjugate of 3 − √5).',
          },
        ],
      },
      {
        id: 'igcse-maths-1-2-c3',
        title: 'Standard Form & Upper/Lower Bounds',
        summary: 'Calculating in standard form and finding maximum or minimum error bounds.',
        bullets: [
          '**Standard form** writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 0.00045 = 4.5 × 10⁻⁴; (3 × 10⁵) × (4 × 10³) = 12 × 10⁸ = 1.2 × 10⁹.',
          '**Bounds of a rounded measurement:** Add and subtract HALF of the rounding unit. If L = 8.4 cm to 1 d.p. (unit 0.1), then 8.35 ≤ L < 8.45.',
          '**Bounds in calculations:** For maximum of a ÷ b, divide UPPER(a) by LOWER(b). For minimum of a − b, calculate LOWER(a) − UPPER(b).',
          '**Worked example:** Distance d = 120 m (nearest 10 m → 115 to 125) and time t = 8.0 s (nearest 0.5 s → 7.75 to 8.25). Maximum speed = d_max ÷ t_min = 125 ÷ 7.75 = 16.13 m/s (2 d.p.).',
        ],
        commonMistake: 'To maximise a fraction A/B, NEVER divide Upper(A) by Upper(B) — dividing by the SMALLEST possible denominator (Lower B) gives the largest answer!',
      },
    ],
    keyTerms: [
      { term: 'Standard form', definition: 'Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n.' },
      { term: 'Surd', definition: 'Irrational root expressed exactly using a square-root symbol.' },
      { term: 'Upper and lower bounds', definition: 'Maximum and minimum possible true values of a rounded measurement (± half the degree of accuracy).' },
    ],
    checklistPoints: [
      'Evaluate negative and fractional indices without a calculator.',
      'Simplify surds and rationalise both single-term and two-term denominators.',
      'Compute in standard form and find upper/lower bounds for sums, differences, products, and quotients.',
    ],
  },
  'igcse-maths-1-3': {
    subtopicId: 'igcse-maths-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Ratio, Direct Proportion & Inverse Proportion',
    readingMinutes: 9,
    videoTitle: 'GCSE Maths - What Does Inversely Proportional Mean?',
    youtubeId: 'OCZSFmHnNI4',
    videoChannel: 'Cognito',
    videoDuration: '4:34',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro & Example', cardId: 'igcse-maths-1-3-c1' },
      { time: '1:05', seconds: 65, label: 'Graphical Representation', cardId: 'igcse-maths-1-3-c3' },
      { time: '2:13', seconds: 133, label: 'The Equation (Constant of Proportionality)', cardId: 'igcse-maths-1-3-c2' },
      { time: '3:29', seconds: 209, label: 'Summary', cardId: 'igcse-maths-1-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-1-3-c1',
        title: 'Ratio Sharing & Combining Ratios',
        summary: 'Sharing amounts in ratios, difference problems, and combining three-part ratios.',
        bullets: [
          '**Sharing in a ratio:** Sum the ratio parts, find the value of 1 part, then multiply. Example: Share $450 in ratio 2 : 3 : 4 → 9 parts = $450 → 1 part = $50 → $100, $150, $200.',
          '**Difference ratio problems:** If Mia and Leo share money in ratio 3 : 7 and Leo gets $60 more than Mia, the difference of 4 parts = $60 → 1 part = $15 → total 10 parts = $150.',
          '**Combining two ratios A :** B = 2 : 3 and B : C = 4 : 5: Make the shared letter B equal (LCM of 3 and 4 is 12) → A : B = 8 : 12 and B : C = 12 : 15 → A : B : C = 8 : 12 : 15.',
        ],
      },
      {
        id: 'igcse-maths-1-3-c2',
        title: 'Direct Proportion (Algebraic Form)',
        summary: 'Setting up and solving algebraic direct proportion formulas with k.',
        bullets: [
          'If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin).',
          '**Direct proportion** also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x.',
          '**4-step method:** (1) Write equation with k, (2) Substitute known pair (x, y) to solve for k, (3) Rewrite formula with numerical k, (4) Substitute new value to find the unknown.',
          '**Worked example:** y ∝ x² and y = 45 when x = 3. Then 45 = k(3²) = 9k → k = 5, so y = 5x². When x = 4, y = 5 × 16 = 80.',
        ],
        glossaryPills: [
          {
            term: 'constant of proportionality',
            definition: 'Fixed non-zero number k linking two proportional variables in y = kx or y = k/x.',
          },
        ],
      },
      {
        id: 'igcse-maths-1-3-c3',
        title: 'Inverse Proportion',
        summary: 'Solving inverse and inverse-square proportion problems step by step.',
        bullets: [
          'If y is inversely proportional to x (y ∝ 1/x), then y = k ÷ x (so x × y = k is constant). As x doubles, y halves; the graph is a smooth hyperbola approaching both axes.',
          'Inverse square law (common in physics & Extended maths): y ∝ 1/x² → y = k ÷ x².',
          '**Worked example:** 6 workers build a wall in 10 hours. Since workers × hours = constant, k = 6 × 10 = 60 worker-hours. For 15 workers, time = 60 ÷ 15 = 4 hours.',
        ],
        commonMistake: 'Read carefully whether y is proportional to x, x², x³, or √x — writing y = kx when the question states "proportional to the square of x" loses almost all method marks!',
      },
    ],
    keyTerms: [
      { term: 'Direct proportion', definition: 'Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0).' },
      { term: 'Inverse proportion', definition: 'Relationship where x × y = k is constant (y = k/x); doubling x halves y.' },
    ],
    checklistPoints: [
      'Solve ratio sharing, ratio difference, and combined three-part ratio problems.',
      'Set up and solve direct proportion formulas (y = kx, kx², k√x) and inverse proportion formulas (y = k/x, k/x²).',
      'Recognise the shapes of direct (line through origin) and inverse (reciprocal curve) graphs.',
    ],
  },
  'igcse-maths-2-1': {
    subtopicId: 'igcse-maths-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Expanding, Factorising & Solving Quadratic Equations',
    readingMinutes: 11,
    videoTitle: 'GCSE Maths - Solving Quadratics Using the Quadratic Formula',
    youtubeId: 'maejPmUzqpM',
    videoChannel: 'Cognito',
    videoDuration: '5:26',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro: The Quadratic Formula', cardId: 'igcse-maths-2-1-c2' },
      { time: '1:00', seconds: 60, label: 'Example 1: Calculation Steps', cardId: 'igcse-maths-2-1-c2' },
      { time: '3:26', seconds: 206, label: 'Example 2: Problem', cardId: 'igcse-maths-2-1-c2' },
      { time: '4:45', seconds: 285, label: 'Example 2: Final Rounded Answers', cardId: 'igcse-maths-2-1-c2' },
    ],
    cards: [
      {
        id: 'igcse-maths-2-1-c1',
        title: 'Expanding Brackets & Factorising Quadratics',
        summary: 'Factorising monic, non-monic, and difference-of-two-squares quadratics.',
        bullets: [
          'Always rearrange a quadratic equation into **standard form** ax² + bx + c = 0 before solving.',
          '**Difference of two squares:** **a² − b² = (a + b)(a − b)**. Example: 9x² − 16 = (3x + 4)(3x − 4).',
          'Factorising when a = 1 (x² + bx + c): find two integers multiplying to c and adding to b. Example: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2.',
          'Factorising when a ≠ 1 (AC method): For 2x² + 7x + 3, find two numbers multiplying to ac = 6 and adding to 7 (6 and 1). Split middle term: 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).',
        ],
      },
      {
        id: 'igcse-maths-2-1-c2',
        title: 'The Quadratic Formula',
        summary: 'Solving non-factorisable quadratics with the formula and discriminant.',
        bullets: [
          'When a question says "give your answers to 2 decimal places" or "3 significant figures", use the Quadratic Formula: **x = (−b ± √(b² − 4ac)) ÷ (2a)**.',
          '**Worked example:** Solve 3x² − 5x − 4 = 0. Here a = 3, b = −5, c = −4. Discriminant b² − 4ac = (−5)² − 4(3)(−4) = 25 + 48 = 73.',
          'Thus x = (5 ± √73) ÷ 6 → x = 2.26 or x = −0.59 (2 d.p.).',
          'The discriminant Δ = b² − 4ac tells you the number of real roots: Δ > 0 gives 2 distinct roots; Δ = 0 gives 1 repeated root; Δ < 0 gives no real roots.',
        ],
        glossaryPills: [
          {
            term: 'discriminant',
            definition: 'The expression b² − 4ac inside the square root of the quadratic formula that determines how many real solutions exist.',
          },
        ],
        commonMistake: 'When b is negative (e.g., b = −5), write (−5)² = +25 in brackets on your calculator — typing −5² gives −25 and ruins the entire solution!',
      },
      {
        id: 'igcse-maths-2-1-c3',
        title: 'Completing the Square & Vertex (Turning Point)',
        summary: 'Completing the square to solve exactly and locate parabola vertices.',
        bullets: [
          'To write x² + bx + c in completed-square form (x + p)² + q: halve the coefficient of x so p = b/2, then subtract p² and add c.',
          '**Worked example:** x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2.',
          '**Turning point** (minimum vertex) of y = (x + p)² + q occurs when the squared bracket equals 0, giving coordinates (−p, q). For y = (x − 3)² + 2, the minimum point is (3, 2)!',
          '**Solving by completing the square:** (x − 3)² − 5 = 0 → (x − 3)² = 5 → x = 3 ± √5.',
        ],
        memoryAid: 'To find the turning point from (x + p)² + q: FLIP the sign inside the bracket, KEEP the sign outside → (−p, q).',
      },
    ],
    keyTerms: [
      { term: 'Quadratic equation', definition: 'Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0).' },
      { term: 'Difference of two squares', definition: 'Algebraic identity a² − b² = (a + b)(a − b).' },
      { term: 'Completing the square', definition: 'Rewriting x² + bx + c as (x + p)² + q to solve exactly or locate the parabola’s turning point (−p, q).' },
    ],
    checklistPoints: [
      'Factorise quadratics with a = 1, a > 1, and difference of two squares.',
      'Apply the quadratic formula accurately with negative coefficients using brackets.',
      'Complete the square to solve equations and read off the minimum/maximum turning point.',
    ],
  },
  'igcse-maths-2-2': {
    subtopicId: 'igcse-maths-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Simultaneous Equations (Linear & Quadratic) & Inequalities',
    readingMinutes: 10,
    videoTitle: 'GCSE Maths - How to Solve Simultaneous Equations - Using the Elimination Technique',
    youtubeId: '68hMhae269k',
    videoChannel: 'Cognito',
    videoDuration: '8:21',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Solving Simultaneous Equations', cardId: 'igcse-maths-2-2-c1' },
      { time: '3:55', seconds: 235, label: 'Example 2 (More Complex)', cardId: 'igcse-maths-2-2-c1' },
      { time: '5:06', seconds: 306, label: 'Step 2: Make Coefficients the Same', cardId: 'igcse-maths-2-2-c1' },
      { time: '7:05', seconds: 425, label: 'Step 6: Check the Solution', cardId: 'igcse-maths-2-2-c1' },
    ],
    cards: [
      {
        id: 'igcse-maths-2-2-c1',
        title: 'Linear Simultaneous Equations (Elimination)',
        summary: 'Solving linear simultaneous equations using the SSS elimination rule.',
        bullets: [
          'Match the coefficients of either x or y by multiplying one or both equations, then eliminate that variable using SSS (Same Signs Subtract, Different Signs Add).',
          '**Worked example:** Solve 3x + 2y = 16 and 5x − y = 18. Multiply the second equation by 2 → 10x − 2y = 36.',
          'Since +2y and −2y have different signs, ADD the equations: 13x = 52 → x = 4. Substitute into 3(4) + 2y = 16 → 2y = 4 → y = 2.',
          'Always verify by substituting BOTH x = 4 and y = 2 back into the unused equation: 5(4) − 2 = 18 ✓.',
        ],
        memoryAid: 'SSS = Same Signs Subtract; Different Signs Add!',
      },
      {
        id: 'igcse-maths-2-2-c2',
        title: 'Non-Linear Simultaneous Equations (Substitution)',
        summary: 'Substituting a linear equation into a quadratic or circle equation.',
        bullets: [
          'When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION.',
          '**Step 1:** Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0.',
          '**Step 3:** Factorise: (x + 4)(x − 3) = 0 → x = −4 or x = 3. Step 4: Find the matching y for EACH x using the linear equation: (−4, −3) and (3, 4).',
          'Geometrically, these two coordinate pairs are the exact intersection points of the straight line and the circle!',
        ],
        commonMistake: 'Never leave x and y unpaired — write each solution clearly as matched pairs: x = −4, y = −3 and x = 3, y = 4.',
      },
      {
        id: 'igcse-maths-2-2-c3',
        title: 'Linear, Quadratic & Graphical Inequalities',
        summary: 'Solving linear and quadratic inequalities and shading feasible regions.',
        bullets: [
          'Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5).',
          '**Quadratic inequalities:** Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3.',
          '**Graphical inequalities (linear programming):** Draw solid lines for ≤ / ≥ and dashed lines for < / >. Test a point (like (0, 0)) to identify the unwanted side to shade.',
        ],
        glossaryPills: [
          {
            term: 'inequality',
            definition: 'A mathematical statement comparing two expressions with <, >, ≤, or ≥ rather than equals.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Elimination method', definition: 'Adding or subtracting multiples of linear simultaneous equations to cancel one unknown.' },
      { term: 'Substitution method', definition: 'Expressing one variable from a linear equation and inserting it into a second (often quadratic) equation.' },
    ],
    checklistPoints: [
      'Solve linear simultaneous equations accurately and verify both values.',
      'Solve linear-quadratic simultaneous equations by substitution and pair (x, y) solutions clearly.',
      'Flip the inequality sign when dividing by a negative and sketch parabolas for quadratic inequalities.',
    ],
  },
  'igcse-maths-2-3': {
    subtopicId: 'igcse-maths-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'Sequences, Functions (Composite/Inverse) & Differentiation',
    readingMinutes: 11,
    videoTitle: 'Sequences & Series in 23 minutes - A-Level Pure Year 2',
    youtubeId: '5G7VKXarees',
    videoChannel: 'Bicen Maths',
    videoDuration: '23:02',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Arithmetic Sequences & Sum Formula (Sn)', cardId: 'igcse-maths-2-3-c1' },
      { time: '6:00', seconds: 360, label: 'Geometric Sequences & Sum to Infinity', cardId: 'igcse-maths-2-3-c1' },
      { time: '12:40', seconds: 760, label: 'Sigma Notation & Recurrence Relations', cardId: 'igcse-maths-2-3-c1' },
      { time: '18:20', seconds: 1100, label: 'Modelling with Sequences', cardId: 'igcse-maths-2-3-c2' },
    ],
    cards: [
      {
        id: 'igcse-maths-2-3-c1',
        title: 'Arithmetic, Geometric & Quadratic Sequences',
        summary: 'Deriving nth term rules for arithmetic, geometric, and quadratic sequences.',
        bullets: [
          'Linear (arithmetic) sequence with common difference d: nth term = dn + (first term − d). Example: 5, 9, 13, 17... has d = 4 → uₙ = 4n + 1.',
          'Quadratic sequence (constant SECOND difference 2a): Halve the second difference to get a (coefficient of n²), subtract an² from each term, then find the linear rule for the remainder!',
          '**Worked example:** 4, 9, 16, 25... (or 5, 11, 21, 35...): 1st diffs = 6, 10, 14; 2nd diff = 4 → a = 4/2 = 2, so start with 2n² (2, 8, 18, 32). Remainder = 3, 3, 3, 3 → uₙ = 2n² + 3.',
          '**Geometric sequence (constant multiplier r):** uₙ = a × rⁿ⁻¹. Example: 3, 6, 12, 24... has uₙ = 3 × 2ⁿ⁻¹.',
        ],
      },
      {
        id: 'igcse-maths-2-3-c2',
        title: 'Composite & Inverse Functions (Extended)',
        summary: 'Evaluating composite functions fg(x) and deriving inverse functions f⁻¹(x).',
        bullets: [
          'Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)!',
          '**Worked example:** If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)².',
          'Inverse function f⁻¹(x) reverses f(x): (1) Write y = f(x), (2) Rearrange to make x the subject, (3) Replace y with x. Example: y = (3x − 1)/4 → 4y + 1 = 3x → f⁻¹(x) = (4x + 1)/3.',
          '**Domain exclusions:** Exclude any x that makes a denominator zero or a square root negative.',
        ],
        glossaryPills: [
          {
            term: 'composite function',
            definition: 'A function formed by applying one function to the output of another: fg(x) = f(g(x)).',
          },
          {
            term: 'inverse function',
            definition: 'A function f⁻¹(x) that undoes the action of f(x) so that f⁻¹(f(x)) = x.',
          },
        ],
        commonMistake: 'Students often compute fg(x) left-to-right (f first, then g). ALWAYS work RIGHT-TO-LEFT starting with the function closest to x!',
      },
      {
        id: 'igcse-maths-2-3-c3',
        title: 'Introduction to Differentiation (CIE 0580 / Edexcel 4MA1 Extended)',
        summary: 'Differentiating polynomials with the power rule to classify turning points.',
        bullets: [
          'The derivative dy/dx gives the exact gradient function of a curve y = f(x) at any x-coordinate.',
          '**Power rule:** If y = axⁿ, then dy/dx = anxⁿ⁻¹. The derivative of any constant is 0 (d/dx(c) = 0).',
          '**Worked example:** For y = x³ − 3x² − 9x + 4, dy/dx = 3x² − 6x − 9.',
          'Stationary (turning) points occur where gradient dy/dx = 0: 3x² − 6x − 9 = 0 → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0 → x = 3 or x = −1. Use the second derivative d²y/dx² = 6x − 6: at x = 3, d²y/dx² = +12 > 0 (LOCAL MINIMUM); at x = −1, d²y/dx² = −12 < 0 (LOCAL MAXIMUM).',
        ],
        memoryAid: 'Power rule: Multiply by the old power, then subtract 1 from the power! Minimum has positive smile (d²y/dx² > 0); Maximum has negative frown (d²y/dx² < 0).',
      },
    ],
    keyTerms: [
      { term: 'Quadratic sequence', definition: 'Sequence with a constant second difference 2a and nth term an² + bn + c.' },
      { term: 'Inverse function', definition: 'Function f⁻¹(x) found by making x the subject of y = f(x) and swapping x and y.' },
      { term: 'Stationary point', definition: 'Point on a curve where the gradient dy/dx equals zero (maximum, minimum, or inflection).' },
    ],
    checklistPoints: [
      'Find the nth term of arithmetic, geometric, and quadratic sequences.',
      'Evaluate composite functions fg(x) right-to-left and derive inverse functions f⁻¹(x).',
      'Differentiate polynomials term-by-term to find gradients, tangents, and turning points.',
    ],
  },
  'igcse-maths-3-1': {
    subtopicId: 'igcse-maths-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars',
    readingMinutes: 10,
    videoTitle: 'GCSE Maths - Perpendicular Lines',
    youtubeId: 'tXxIwT6ZSwQ',
    videoChannel: 'Cognito',
    videoDuration: '5:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Perpendicular Lines', cardId: 'igcse-maths-3-1-c1' },
      { time: '0:42', seconds: 42, label: 'The Gradient Product Rule for Perpendicular Lines', cardId: 'igcse-maths-3-1-c3' },
      { time: '3:22', seconds: 202, label: 'Finding the Gradient of a Perpendicular Line', cardId: 'igcse-maths-3-1-c3' },
      { time: '4:25', seconds: 265, label: 'Finding the Equation of a Perpendicular Line', cardId: 'igcse-maths-3-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-3-1-c1',
        title: 'Gradient, Midpoint & Length of a Line Segment',
        summary: 'Finding gradient, midpoint, and distance between any two coordinates.',
        bullets: [
          'Given two points A(x₁, y₁) and B(x₂, y₂):',
          '**Gradient:** m = (y₂ − y₁) ÷ (x₂ − x₁). Positive m slopes uphill left-to-right; negative m slopes downhill.',
          'Midpoint M: ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2) — simply the average of the x’s and average of the y’s.',
          '**Length AB (from Pythagoras):** d = √((x₂ − x₁)² + (y₂ − y₁)²). Example for A(1, 2) and B(7, 10): d = √(6² + 8²) = √100 = 10.',
        ],
        glossaryPills: [
          {
            term: 'midpoint',
            definition: 'The exact halfway point between two coordinates, given by averaging their x-values and y-values.',
          },
        ],
      },
      {
        id: 'igcse-maths-3-1-c2',
        title: 'Equation of a Straight Line (y = mx + c)',
        summary: 'Rearranging linear equations and finding y = mx + c from two points.',
        bullets: [
          'In **y = mx + c**, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c!',
          'Finding the line through (2, 5) and (6, 17): First find m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Substitute (2, 5) into y = 3x + c → 5 = 6 + c → c = −1 → y = 3x − 1.',
        ],
        commonMistake: 'In 3x + 2y = 8, the gradient is NOT 3 — rearrange to y = −1.5x + 4 first, so m = −1.5!',
      },
      {
        id: 'igcse-maths-3-1-c3',
        title: 'Parallel Lines, Perpendicular Lines & Perpendicular Bisectors',
        summary: 'Parallel lines, negative-reciprocal perpendiculars, and perpendicular bisectors.',
        bullets: [
          '**Parallel lines have EQUAL gradients:** m₁ = m₂.',
          'Perpendicular lines satisfy **m₁ × m₂ = −1**, so m₂ = −1 ÷ m₁ (the negative reciprocal: flip the fraction and flip the sign! E.g., 2/3 → −3/2; −4 → +1/4).',
          'Perpendicular bisector of segment AB (a classic CIE Extended 4-mark question): (1) Find midpoint M of AB, (2) Find gradient m_AB, (3) Take negative reciprocal m_perp = −1/m_AB, (4) Substitute M into y = m_perp x + c to find c.',
        ],
        glossaryPills: [
          {
            term: 'perpendicular bisector',
            definition: 'A straight line that passes through the midpoint of a line segment at a 90° right angle.',
          },
        ],
        memoryAid: 'Perpendicular gradient = Flip the fraction AND flip the sign!',
      },
    ],
    keyTerms: [
      { term: 'Gradient', definition: 'Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁).' },
      { term: 'Perpendicular lines', definition: 'Lines intersecting at 90° whose gradients multiply to −1 (m₁m₂ = −1).' },
      { term: 'Perpendicular bisector', definition: 'Line crossing a segment at its midpoint at right angles.' },
    ],
    checklistPoints: [
      'Calculate gradient, midpoint, and distance between any two coordinate pairs.',
      'Rearrange ax + by = c into y = mx + c to read off gradient and y-intercept.',
      'Derive the equation of a parallel line, perpendicular line, or perpendicular bisector.',
    ],
  },
  'igcse-maths-4-1': {
    subtopicId: 'igcse-maths-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Angles, Polygons, Bearings, Similarity & Congruence',
    readingMinutes: 10,
    videoTitle: 'Transformations: Rotate, Reflect, Enlarge, Translate - GCSE Maths Revision',
    youtubeId: 'fwv7e5OyuzA',
    videoChannel: 'HannahKettleMaths',
    videoDuration: '17:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Overview of the 4 Transformations', cardId: 'igcse-maths-4-1-c1' },
      { time: '3:30', seconds: 210, label: 'Translations & Column Vectors', cardId: 'igcse-maths-4-1-c2' },
      { time: '8:00', seconds: 480, label: 'Reflections & Rotations', cardId: 'igcse-maths-4-1-c3' },
      { time: '12:40', seconds: 760, label: 'Enlargements & Scale Factors', cardId: 'igcse-maths-4-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-4-1-c1',
        title: 'Parallel Lines & Polygon Angle Rules',
        summary: 'Parallel-line angle pairs and interior or exterior polygon angle sums.',
        bullets: [
          '**Parallel line angle pairs:** Alternate angles (Z-shape) are EQUAL; Corresponding angles (F-shape) are EQUAL; Co-interior / allied angles (C-shape) sum to 180°.',
          '**For ANY n-sided polygon:** Sum of interior angles = (n − 2) × 180°. Sum of ALL exterior angles = 360° (always!).',
          '**For a REGULAR n-sided polygon:** Each exterior angle = 360° ÷ n, and Interior angle + Exterior angle = 180°. Example: Regular octagon (n = 8) has exterior angle 360/8 = 45° and interior angle 135°.',
        ],
        memoryAid: 'Always find the EXTERIOR angle (360° ÷ n) first — it is far faster than the interior formula!',
      },
      {
        id: 'igcse-maths-4-1-c2',
        title: 'Three-Figure Bearings',
        summary: 'Measuring three-figure clockwise bearings from North and back bearings.',
        bullets: [
          '**Bearings obey 3 strict rules:** (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°).',
          'The wording "bearing of B FROM A" means stand at A, draw a North line at A, and turn clockwise until pointing to B.',
          '**Back bearing (of A from B):** Add 180° if the original bearing < 180°, or subtract 180° if ≥ 180° (follows from co-interior angles between parallel North lines).',
        ],
        commonMistake: 'Always check which point follows the word "FROM" — that is where you draw your North arrow!',
      },
      {
        id: 'igcse-maths-4-1-c3',
        title: 'Congruence & Similar Shapes (Length, Area & Volume Scale Factors)',
        summary: 'Triangle congruence tests (SSS/SAS/ASA/RHS) and k, k², k³ similarity scaling.',
        bullets: [
          'Two triangles are CONGRUENT (identical size & shape) if they satisfy SSS, SAS, ASA/AAS, or RHS (Right angle, Hypotenuse, Side). Note: AAA proves similarity, NOT congruence!',
          '**Similar shapes** have identical angles and proportional sides with linear scale factor k = L₂ ÷ L₁.',
          '**Crucial Extended rule:** Length scale factor = k → Area scale factor = k² → Volume scale factor = k³!',
          '**Worked example:** Two similar bottles have heights 10 cm and 15 cm (k = 1.5). If the smaller bottle holds 400 ml, the larger holds 400 × (1.5)³ = 400 × 3.375 = 1,350 ml.',
        ],
        glossaryPills: [
          {
            term: 'congruent',
            definition: 'Geometric figures having the exact same shape and exact same dimensions (all corresponding sides and angles equal).',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Bearing', definition: 'Direction measured clockwise from North and expressed as a three-figure angle (000°–359°).' },
      { term: 'Congruence', definition: 'Exact equality of shape and size proved via SSS, SAS, ASA, or RHS.' },
      { term: 'Scale factor', definition: 'Ratio k of corresponding lengths in similar shapes; areas scale by k² and volumes by k³.' },
    ],
    checklistPoints: [
      'Calculate interior and exterior angles of regular and irregular polygons.',
      'Measure and calculate bearings and back bearings using co-interior angles.',
      'Apply k, k², and k³ scale factors to similar lengths, surface areas, and volumes.',
    ],
  },
  'igcse-maths-4-2': {
    subtopicId: 'igcse-maths-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Circle Theorems & Alternate Segment Theorem',
    readingMinutes: 10,
    videoTitle: 'Circle Theorems - GCSE Higher Maths',
    youtubeId: 'dBIlCD_JF9Q',
    videoChannel: '1st Class Maths',
    videoDuration: '13:52',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-maths-4-2-c1' },
      { time: '3:31', seconds: 211, label: 'Opposite Angles in a Cyclic Quadrilateral', cardId: 'igcse-maths-4-2-c2' },
      { time: '5:55', seconds: 355, label: 'Alternate Segment Theorem', cardId: 'igcse-maths-4-2-c3' },
      { time: '11:06', seconds: 666, label: 'Worked Exam Example', cardId: 'igcse-maths-4-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-4-2-c1',
        title: 'Centre, Semicircle & Same-Segment Theorems',
        summary: 'Angle at the centre, angle in a semicircle, same segment, and chord bisector.',
        bullets: [
          '**Theorem 1 (Angle at the centre):** The angle subtended by an arc at the centre is TWICE the angle subtended at the circumference.',
          '**Theorem 2 (Angle in a semicircle):** The angle subtended by a diameter at the circumference is ALWAYS 90°.',
          '**Theorem 3 (Angles in the same segment):** Angles subtended by the same chord/arc at the circumference in the same segment are EQUAL (butterfly/bow-tie shape).',
          '**Theorem 4 (Perpendicular from centre to chord):** A line from the centre perpendicular to a chord BISECTS the chord into two equal halves.',
        ],
        memoryAid: 'Always look for hidden ISOSCELES TRIANGLES formed by two radii (both sides = r, so base angles are equal)!',
      },
      {
        id: 'igcse-maths-4-2-c2',
        title: 'Cyclic Quadrilaterals & Tangent Rules',
        summary: 'Cyclic quadrilateral opposite angles and perpendicular tangent-radius rules.',
        bullets: [
          'Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°.',
          'Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at **90°**.',
          'Theorem 7 (Two tangents from an external point): Two tangents drawn to a circle from the same external point P are EQUAL in length (PA = PB), creating two **congruent** right-angled triangles with the centre.',
        ],
        glossaryPills: [
          {
            term: 'cyclic quadrilateral',
            definition: 'A four-sided polygon whose four vertices all lie directly on the circumference of a single circle.',
          },
          {
            term: 'tangent',
            definition: 'A straight line that touches a circle at exactly one point and sits perpendicular (90°) to the radius at that point.',
          },
        ],
        commonMistake: 'A quadrilateral with one corner at the CENTRE of the circle is NOT a cyclic quadrilateral — all 4 vertices must touch the circumference!',
      },
      {
        id: 'igcse-maths-4-2-c3',
        title: 'The Alternate Segment Theorem',
        summary: 'Applying the Alternate Segment Theorem with formal exam proof phrasing.',
        bullets: [
          '**Theorem 8 (Alternate Segment Theorem):** The angle between a tangent and a chord drawn from the point of contact is EQUAL to the angle subtended by that chord in the alternate (opposite) segment.',
          '**Exam phrasing tip:** Always write the FULL formal theorem reason in proof questions (e.g., "Angle in a semicircle is 90°" or "Opposite angles in a cyclic quadrilateral sum to 180°") — vague phrases like "Z-angles" or "arrow rule" get ZERO reason marks!',
        ],
      },
    ],
    keyTerms: [
      { term: 'Cyclic quadrilateral', definition: 'Four-sided shape inscribed in a circle whose opposite angles add to 180°.' },
      { term: 'Alternate Segment Theorem', definition: 'Angle between tangent and chord equals the inscribed angle in the opposite segment.' },
      { term: 'Subtended angle', definition: 'Angle formed at a point by joining it to the two endpoints of an arc or chord.' },
    ],
    checklistPoints: [
      'Recall and apply all 8 circle theorems accurately in multi-step angle problems.',
      'Spot isosceles triangles formed by two radii immediately.',
      'State exact exam-board wording for every geometric reason.',
    ],
  },
  'igcse-maths-5-1': {
    subtopicId: 'igcse-maths-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Area, Arc Length, Sector Area, Surface Area & Volume',
    readingMinutes: 10,
    videoTitle: 'GCSE Maths - How to find the Volumes of Cones and Pyramids',
    youtubeId: 'e_jqJtObKfI',
    videoChannel: 'Cognito',
    videoDuration: '2:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro & Shared Formula', cardId: 'igcse-maths-5-1-c2' },
      { time: '0:49', seconds: 49, label: 'Volume of a Pyramid Formula', cardId: 'igcse-maths-5-1-c2' },
      { time: '1:22', seconds: 82, label: 'Example Measurements', cardId: 'igcse-maths-5-1-c2' },
      { time: '1:58', seconds: 118, label: 'Example: Pyramid Volume Calculation', cardId: 'igcse-maths-5-1-c2' },
    ],
    cards: [
      {
        id: 'igcse-maths-5-1-c1',
        title: '2D Areas, Arc Length & Sector Area',
        summary: 'Trapezium areas, circle formulas, arc length, and sector area or perimeter.',
        bullets: [
          'Trapezium area = ½(a + b) × h (average of **parallel** sides × perpendicular height). Circle circumference = 2πr = πd; Circle area = πr².',
          'Sector of angle θ° and radius r: Arc length = (θ ÷ 360) × 2πr; Sector area = (θ ÷ 360) × πr².',
          'Perimeter of a sector = Arc length + 2r (don’t forget the two straight radii!).',
          '**Worked example:** A sector has radius 12 cm and angle 60°. Area = (60/360) × π × 12² = 24π ≈ 75.4 cm². Arc length = (60/360) × 2π(12) = 4π cm; Perimeter = 4π + 24 ≈ 36.6 cm.',
        ],
        commonMistake: 'When asked for the PERIMETER of a sector, students often calculate only the curved arc length and forget to add the two straight radii (+ 2r)!',
      },
      {
        id: 'igcse-maths-5-1-c2',
        title: 'Volume & Surface Area of 3D Solids',
        summary: 'Volume and total surface area for prisms, cylinders, cones, and spheres.',
        bullets: [
          '**Any uniform Prism:** Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr².',
          '**Pyramid:** Volume = ⅓ × Base area × perpendicular height. Cone: Volume = ⅓πr²h; Curved surface area = πrl (where slant height l = √(r² + h²)); Total SA = πrl + πr².',
          '**Sphere:** Volume = (4/3)πr³; Surface area = 4πr². Solid Hemisphere: Volume = (2/3)πr³; Total SA = 2πr² (curved) + πr² (flat circular base) = 3πr²!',
        ],
        glossaryPills: [
          {
            term: 'slant height',
            definition: 'Distance measured along the sloping outer surface of a cone from its apex to the circular base rim: l = √(r² + h²).',
          },
        ],
        memoryAid: 'A solid hemisphere has Total Surface Area = 3πr² (half of 4πr² = 2πr² PLUS the flat circular bottom πr²)!',
      },
      {
        id: 'igcse-maths-5-1-c3',
        title: 'Unit Conversions & Frustums',
        summary: 'Converting squared and cubed units plus frustum and recasting problems.',
        bullets: [
          '**Area & volume unit conversions:** 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³.',
          'A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone).',
          'When melting and recasting metal from one 3D shape into another (e.g., spheres melted into a cylinder), total VOLUME is conserved: equate V_before = V_after and cancel π.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Sector', definition: 'Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr².' },
      { term: 'Frustum', definition: 'Lower portion of a cone or pyramid remaining after slicing off the top parallel to the base.' },
    ],
    checklistPoints: [
      'Calculate arc length, sector perimeter, and sector area in exact π form and decimals.',
      'Find volume and total surface area of prisms, cylinders, pyramids, cones, spheres, and hemispheres.',
      'Convert between m²/cm² and m³/cm³/litres accurately.',
    ],
  },
  'igcse-maths-6-1': {
    subtopicId: 'igcse-maths-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)',
    readingMinutes: 10,
    videoTitle: 'Trigonometry | SOH CAH TOA | Sin, Cos, Tan',
    youtubeId: 'WFH_7n7hpHo',
    videoChannel: 'Cognito',
    videoDuration: '8:14',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro & Identifying Right-Angled Triangles', cardId: 'igcse-maths-6-1-c1' },
      { time: '1:47', seconds: 107, label: 'Trigonometric Formulae', cardId: 'igcse-maths-6-1-c2' },
      { time: '4:54', seconds: 294, label: 'Using Inverse Tan Function (Tan^-1)', cardId: 'igcse-maths-6-1-c2' },
      { time: '7:26', seconds: 446, label: 'Calculator Tip: Closing Brackets', cardId: 'igcse-maths-6-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-6-1-c1',
        title: 'Pythagoras’ Theorem (2D & 3D)',
        summary: 'Finding sides in 2D right-angled triangles and 3D cuboid diagonals.',
        bullets: [
          'In any right-angled triangle, **a² + b² = c²**, where c is always the hypotenuse (longest side opposite the 90° angle).',
          '**Finding the longest side:** ADD the squares (c = √(a² + b²)). Finding a shorter side: SUBTRACT the squares (a = √(c² − b²)).',
          '3D Space Diagonal of a cuboid with dimensions l, w, h: d = √(l² + w² + h²). Worked example: For a 6 × 8 × 10 cm box, base diagonal = √(6² + 8²) = 10 cm, space diagonal = √(10² + 10²) = √200 = 10√2 ≈ 14.1 cm.',
        ],
      },
      {
        id: 'igcse-maths-6-1-c2',
        title: 'Right-Angled Trigonometry (SOHCAHTOA)',
        summary: 'Applying SOHCAHTOA and recalling exact trig values for 30°, 45°, and 60°.',
        bullets: [
          'Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ).',
          '**SOH:** sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A.',
          '**Finding a missing angle:** use inverse functions sin⁻¹, cos⁻¹, or tan⁻¹ on your calculator (always check calculator is in DEGREE mode "D", not radians "R"!).',
          '**Exact trigonometric values to memorise:** sin 30° = ½, cos 60° = ½, tan 45° = 1, sin 45° = cos 45° = √2/2, sin 60° = cos 30° = √3/2, tan 30° = 1/√3, tan 60° = √3.',
        ],
        glossaryPills: [
          {
            term: 'hypotenuse',
            definition: 'The longest side of a right-angled triangle, located directly opposite the 90° angle.',
          },
        ],
        memoryAid: 'SOH-CAH-TOA + exact sin table: sin(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2!',
      },
      {
        id: 'igcse-maths-6-1-c3',
        title: 'Angles of Elevation, Depression & 3D Trigonometry',
        summary: 'Solving angles of elevation, depression, and 3D line-to-plane angles.',
        bullets: [
          'Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!).',
          'For 3D trigonometry (angle between a line and a plane): drop a **perpendicular** from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal.',
          'Keep UNROUNDED intermediate values in your calculator memory (or exact surd form like √100) until the final answer to avoid premature rounding error!',
        ],
        commonMistake: 'Angle of depression is measured from the HORIZONTAL down to the line of sight — NEVER from the vertical cliff wall!',
      },
    ],
    keyTerms: [
      { term: 'Hypotenuse', definition: 'Longest side of a right-angled triangle, opposite the right angle.' },
      { term: 'Angle of elevation', definition: 'Angle measured upward from a horizontal line to an observer’s line of sight.' },
    ],
    checklistPoints: [
      'Apply Pythagoras in 2D and 3D cuboids/pyramids.',
      'Find missing sides and angles using SOHCAHTOA and recall exact trig values for 30°, 45°, and 60°.',
      'Solve 3D angle-between-line-and-plane problems without premature rounding.',
    ],
  },
  'igcse-maths-6-2': {
    subtopicId: 'igcse-maths-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles',
    readingMinutes: 11,
    videoTitle: 'The Sine Rule - GCSE Higher Maths',
    youtubeId: '7xeLeDulY60',
    videoChannel: '1st Class Maths',
    videoDuration: '13:46',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-maths-6-2-c1' },
      { time: '1:10', seconds: 70, label: 'Example 1: Finding a Missing Side', cardId: 'igcse-maths-6-2-c1' },
      { time: '5:47', seconds: 347, label: 'Example 3: Finding a Missing Angle', cardId: 'igcse-maths-6-2-c1' },
      { time: '9:23', seconds: 563, label: 'Example 5: The Ambiguous Case', cardId: 'igcse-maths-6-2-c1' },
    ],
    cards: [
      {
        id: 'igcse-maths-6-2-c1',
        title: 'The Sine Rule (and Ambiguous Case)',
        summary: 'Using the Sine Rule for opposite pairs and checking the obtuse case.',
        bullets: [
          'Use the **Sine Rule** whenever you have a MATCHING OPPOSITE PAIR (one side and its opposite angle):',
          '**For a missing side:** a / sin A = b / sin B = c / sin C. For a missing angle: sin A / a = sin B / b (put the unknown on TOP!).',
          '**Worked example:** Side a = 9 cm opposite A = 40°, find side b opposite B = 75° → b = (9 × sin 75°) ÷ sin 40° = 13.5 cm (3 s.f.).',
          'Ambiguous (obtuse) case: Because sin(180° − θ) = sin θ, if a question specifies an OBTUSE angle, subtract your calculator’s acute sin⁻¹ result from 180°!',
        ],
        glossaryPills: [
          {
            term: 'obtuse',
            definition: 'An angle strictly greater than 90° and less than 180°.',
          },
        ],
      },
      {
        id: 'igcse-maths-6-2-c2',
        title: 'The Cosine Rule',
        summary: 'Applying the Cosine Rule for SAS and SSS non-right-angled triangles.',
        bullets: [
          'Use the **Cosine Rule** when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known).',
          '**Finding a missing side (SAS):** **a² = b² + c² − 2bc cos A** (remember to take the square root at the end!).',
          '**Finding a missing angle (SSS):** cos A = (b² + c² − a²) ÷ (2bc). Note: if cos A is negative, cos⁻¹ automatically gives the correct obtuse angle!',
          '**Worked example:** b = 7 cm, c = 10 cm, included angle A = 60°. a² = 49 + 100 − 2(7)(10) cos 60° = 149 − 70 = 79 → a = √79 ≈ 8.89 cm.',
        ],
        commonMistake: 'When calculating a² = b² + c² − 2bc cos A, NEVER subtract 2bc before multiplying by cos A (respect BIDMAS) and NEVER forget to square root a²!',
      },
      {
        id: 'igcse-maths-6-2-c3',
        title: 'Area of Any Triangle & Solving Trig Equations (0° ≤ x ≤ 360°)',
        summary: 'Calculating triangle area via ½ab sin C and solving 0°–360° trig equations.',
        bullets: [
          'Area of any triangle using two sides and their INCLUDED angle: **Area = ½ × a × b × sin C**.',
          'Trigonometric symmetry on 0° ≤ x ≤ 360° (Extended):',
          'For sin x = k: second solution is 180° − x₁ (positive in Q1 & Q2). Example: sin x = 0.5 → x = 30° and 150°.',
          'For cos x = k: second solution is 360° − x₁ (positive in Q1 & Q4). Example: cos x = 0.5 → x = 60° and 300°.',
          'For tan x = k: repeats every 180°, so add 180° (positive in Q1 & Q3). Example: tan x = 1 → x = 45° and 225°.',
        ],
        memoryAid: 'Decision tree: Right-angled? → SOHCAHTOA. Opposite side-angle pair? → Sine Rule. SAS or SSS? → Cosine Rule!',
      },
    ],
    keyTerms: [
      { term: 'Sine Rule', definition: 'a / sin A = b / sin B = c / sin C for any triangle.' },
      { term: 'Cosine Rule', definition: 'a² = b² + c² − 2bc cos A (used for SAS or SSS non-right-angled triangles).' },
    ],
    checklistPoints: [
      'Choose correctly between SOHCAHTOA, Sine Rule, and Cosine Rule.',
      'Calculate triangle area using ½ab sin C and handle obtuse angles in the Sine Rule.',
      'Solve trigonometric equations over 0° ≤ x ≤ 360° using graph symmetry.',
    ],
  },
  'igcse-maths-7-1': {
    subtopicId: 'igcse-maths-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Column Vectors, Vector Geometry & Transformations',
    readingMinutes: 10,
    videoTitle: 'Vectors - GCSE Higher Maths',
    youtubeId: 'PxDfkq3FMaw',
    videoChannel: '1st Class Maths',
    videoDuration: '28:33',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro', cardId: 'igcse-maths-7-1-c1' },
      { time: '3:45', seconds: 225, label: 'Example 1: Finding Vectors', cardId: 'igcse-maths-7-1-c1' },
      { time: '18:15', seconds: 1095, label: 'Example 4: Showing Vectors are Parallel', cardId: 'igcse-maths-7-1-c2' },
      { time: '24:21', seconds: 1461, label: 'Example 6: Equating Coefficients', cardId: 'igcse-maths-7-1-c2' },
    ],
    cards: [
      {
        id: 'igcse-maths-7-1-c1',
        title: 'Column Vectors & Magnitude',
        summary: 'Adding, scaling, and finding magnitudes of 2D column vectors.',
        bullets: [
          'A column vector (x / y) represents horizontal shift x (right +, left −) and vertical shift y (up +, down −).',
          'Magnitude (length) of vector v = (x / y) is |v| = √(x² + y²). Example: |(3 / −4)| = √(3² + (−4)²) = √25 = 5.',
          '**Vector algebra:** Add/subtract components directly; multiply both components by any scalar k. Reversing direction negates the vector: BA = −AB.',
        ],
      },
      {
        id: 'igcse-maths-7-1-c2',
        title: 'Vector Geometry, Parallelism & Collinearity Proofs',
        summary: 'Expressing geometric paths and proving parallel vectors or collinear points.',
        bullets: [
          '**Triangle rule for paths:** To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a ("destination minus start").',
          '**Dividing a line in ratio m :** n: If point P divides AB in ratio 2 : 3, then AP = (2/5)AB and OP = OA + (2/5)AB.',
          '**Proving two vectors are PARALLEL:** Show that one vector is a non-zero scalar multiple of the other (e.g., XY = 3(a + b) and PQ = 2(a + b), so XY = 1.5 PQ → parallel).',
          'Proving three points A, B, C are COLLINEAR (on one straight line): Show that AB and BC are **parallel** (scalar multiples) AND state that they share the common point B!',
        ],
        glossaryPills: [
          {
            term: 'collinear',
            definition: 'Three or more points that all lie along the exact same straight line.',
          },
        ],
        commonMistake: 'Showing AB = k·BC alone only proves parallelism — you MUST add the sentence "and they share the common point B, therefore A, B, and C are collinear" to earn the final proof mark!',
      },
      {
        id: 'igcse-maths-7-1-c3',
        title: 'The Four Geometric Transformations',
        summary: 'Describing translations, reflections, rotations, and fractional/negative enlargements.',
        bullets: [
          'When describing a single transformation fully, always state the EXACT required details:',
          '**Translation:** state "Translation" + column vector (x / y).',
          '**Reflection:** state "Reflection" + exact equation of the mirror line (e.g., y = x, x = −1, y = 2).',
          '**Rotation:** state "Rotation" + angle (90°, 180°, 270°) + direction (clockwise/anticlockwise, not needed for 180°) + centre of rotation (x, y).',
          '**Enlargement:** state "Enlargement" + scale factor k (fractional shrinks; negative inverts through centre!) + centre of enlargement (x, y) found by joining corresponding vertices with straight rays.',
        ],
        memoryAid: 'Never describe a single transformation using TWO combined moves — if the exam says "single transformation", check whether it is a single rotation or negative enlargement!',
      },
    ],
    keyTerms: [
      { term: 'Position vector', definition: 'Vector OA starting at the origin O(0, 0) and ending at point A.' },
      { term: 'Collinear points', definition: 'Points lying on the same straight line (parallel connecting vectors sharing a common point).' },
      { term: 'Negative scale factor', definition: 'Enlargement that projects the image on the opposite side of the centre of enlargement, inverted by 180°.' },
    ],
    checklistPoints: [
      'Calculate vector magnitudes and express geometric paths using ratio fractions.',
      'Write formal proofs for parallel vectors and collinear points.',
      'Describe and perform translations, reflections, rotations, and positive/fractional/negative enlargements.',
    ],
  },
  'igcse-maths-8-1': {
    subtopicId: 'igcse-maths-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Probability Trees, Venn Diagrams & Conditional Probability',
    readingMinutes: 10,
    videoTitle: 'Venn Diagrams & Set Theory | GCSE Maths Tutor',
    youtubeId: 'xPPBM7MM8-I',
    videoChannel: 'The GCSE Maths Tutor',
    videoDuration: '17:58',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Venn Diagrams & Set Notation', cardId: 'igcse-maths-8-1-c3' },
      { time: '4:00', seconds: 240, label: 'Union, Intersection & Complement', cardId: 'igcse-maths-8-1-c3' },
      { time: '9:20', seconds: 560, label: 'Completing Venn Diagrams from Data', cardId: 'igcse-maths-8-1-c3' },
      { time: '13:40', seconds: 820, label: 'Conditional Probability from Venn Diagrams', cardId: 'igcse-maths-8-1-c2' },
    ],
    cards: [
      {
        id: 'igcse-maths-8-1-c1',
        title: 'Probability Rules & Tree Diagrams',
        summary: 'Applying AND/OR rules and 1 − P(none) on independent probability trees.',
        bullets: [
          'Every set of branches radiating from a single node MUST sum to 1 (P(A′) = 1 − P(A)).',
          'Multiply ALONG the branches for "AND" (consecutive events): P(A and B) = P(A) × P(B | A).',
          'ADD down the final outcome column for "OR" (mutually exclusive routes): P(exactly one win) = P(W, L) + P(L, W).',
          'Shortcut for "at least one": P(at least one) = 1 − P(none). Always faster and less error-prone!',
        ],
        memoryAid: 'Multiply ACROSS (AND), Add DOWN (OR)!',
      },
      {
        id: 'igcse-maths-8-1-c2',
        title: 'Conditional Probability (Without Replacement)',
        summary: 'Updating fractions cleanly on without-replacement conditional trees.',
        bullets: [
          'When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch.',
          '**Worked example:** A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15.',
          'P(different colours) = P(R, B) + P(B, R) = (4/10)(6/9) + (6/10)(4/9) = 48/90 = 8/15.',
        ],
        commonMistake: 'When finding "one red and one blue" without replacement, DO NOT forget there are TWO orderings (Red then Blue OR Blue then Red) — add both paths!',
      },
      {
        id: 'igcse-maths-8-1-c3',
        title: 'Venn Diagrams & Set Notation',
        summary: 'Filling Venn diagrams from the overlap and calculating P(A | B).',
        bullets: [
          '**Key set notation:** A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A.',
          'Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!',
          'Conditional probability from a Venn diagram: P(A | B) = "probability of A GIVEN B" = n(A ∩ B) ÷ n(B). Only divide by the restricted total n(B), NOT the universal set!',
        ],
        glossaryPills: [
          {
            term: 'conditional probability',
            definition: 'The probability of event A occurring given that event B is already known to have occurred: P(A | B) = P(A ∩ B) ÷ P(B).',
          },
          {
            term: 'intersection',
            definition: 'The overlap region A ∩ B containing elements that belong to both set A and set B simultaneously.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Mutually exclusive', definition: 'Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B).' },
      { term: 'Independent events', definition: 'Events where the outcome of one does not affect the probability of the other: P(A ∩ B) = P(A) × P(B).' },
      { term: 'Conditional probability', definition: 'Probability of A given B has happened: P(A | B) = n(A ∩ B) ÷ n(B).' },
    ],
    checklistPoints: [
      'Construct and evaluate both independent and without-replacement probability trees.',
      'Use P(at least one) = 1 − P(none) cleanly.',
      'Interpret Venn diagrams, set notation (∩, ∪, ′), and conditional probabilities P(A | B).',
    ],
  },
  'igcse-maths-8-2': {
    subtopicId: 'igcse-maths-8-2',
    subtopicCode: '8.2',
    subtopicTitle: 'Averages, Cumulative Frequency, Box Plots & Histograms',
    readingMinutes: 11,
    videoTitle: 'Drawing Histograms - GCSE Higher Maths',
    youtubeId: 'g7Jnrf0g2tQ',
    videoChannel: '1st Class Maths',
    videoDuration: '4:58',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Maths (0580)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-maths-8-2-c3' },
      { time: '0:18', seconds: 18, label: 'What is Class Width?', cardId: 'igcse-maths-8-2-c3' },
      { time: '2:17', seconds: 137, label: 'Drawing the Histogram', cardId: 'igcse-maths-8-2-c3' },
      { time: '4:15', seconds: 255, label: 'Review of Steps', cardId: 'igcse-maths-8-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-maths-8-2-c1',
        title: 'Estimated Mean & Grouped Frequency Tables',
        summary: 'Computing estimated mean using class midpoints and Σ(fx) ÷ Σf.',
        bullets: [
          'For grouped continuous data, calculate the MIDPOINT (x) of each class interval, multiply by frequency (f × x), then compute: **Estimated Mean = Σ(fx) ÷ Σf**.',
          'It is an "estimate" because we do not know the exact individual values inside each interval and assume they are evenly distributed around each midpoint.',
          'Modal class = interval with the highest frequency (for equal widths). Class containing the median = find the ((n + 1)/2)th value using a running **cumulative frequency** column.',
        ],
        commonMistake: 'Always divide Σ(fx) by the TOTAL FREQUENCY (Σf), NEVER by the number of rows in the table!',
      },
      {
        id: 'igcse-maths-8-2-c2',
        title: 'Cumulative Frequency Curves & Box Plots',
        summary: 'Plotting cumulative frequency at upper bounds and comparing box plots.',
        bullets: [
          'Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0.',
          '**For total frequency N:** Median (Q₂) is read across from 50% (0.5N); Lower Quartile (Q₁) from 25% (0.25N); Upper Quartile (Q₃) from 75% (0.75N).',
          'Interquartile Range: **IQR = Q₃ − Q₁** (measures spread of the middle 50% and ignores extreme outliers).',
          '**Comparing two box plots (2 mandatory marks):** (1) Compare the MEDIAN ("Group A has a higher median, so on average scores are higher") AND (2) Compare the IQR ("Group B has a smaller IQR, so its data is more consistent / less spread out").',
        ],
        glossaryPills: [
          {
            term: 'interquartile range',
            definition: 'Difference between the upper quartile and lower quartile (Q₃ − Q₁), measuring the spread of the central 50% of data.',
          },
        ],
        memoryAid: 'Plot Midpoints for Mean/Frequency Polygons; plot UPPER endpoints for Cumulative Frequency!',
      },
      {
        id: 'igcse-maths-8-2-c3',
        title: 'Histograms & Frequency Density',
        summary: 'Calculating frequency density and reading areas from unequal-width histograms.',
        bullets: [
          'Histograms display continuous grouped data with UNEQUAL class widths. The vertical axis is FREQUENCY DENSITY (NOT frequency!).',
          '**Key formula:** Frequency Density = Frequency ÷ Class Width. Rearranged: Frequency = Frequency Density × Class Width = AREA of each bar!',
          '**Worked example:** A bar spans 20 ≤ t < 35 (width = 15) with frequency density 2.4. Frequency in this interval = 15 × 2.4 = 36.',
          'To estimate the number above a cutoff inside a bar (e.g., t > 30 in the 20–35 bar), take the proportional sub-area: width (35 − 30) × 2.4 = 5 × 2.4 = 12.',
        ],
        glossaryPills: [
          {
            term: 'frequency density',
            definition: 'Height of a histogram bar calculated as Frequency ÷ Class Width, ensuring that bar area is directly proportional to frequency.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Interquartile range (IQR)', definition: 'Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations.' },
      { term: 'Frequency density', definition: 'Frequency divided by class width, plotted on the y-axis of a histogram.' },
    ],
    checklistPoints: [
      'Calculate estimated mean from grouped tables using midpoints and Σ(fx) ÷ Σf.',
      'Plot cumulative frequency at upper boundaries, read off median/Q₁/Q₃/IQR, and compare distributions using both median and IQR.',
      'Draw and interpret histograms using Frequency = Frequency Density × Class Width.',
    ],
  },
};

export const IGCSE_MATHS_QUIZZES: QuizQuestion[] = [
  {
    "id": "igcse-maths-q1",
    "subtopicId": "igcse-maths-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "After a 15% discount, a camera sells for $340. Work out the original price before the discount.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Original = 340 ÷ 0.85 = $400.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Use multiplier 0.85 (85%)",
          "requiredKeywordGroups": [
            [
              "0.85",
              "85%"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct original price $400",
          "numericMatch": {
            "value": 400,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "A 15% discount leaves 85% (0.85). Original = 340 ÷ 0.85 = $400."
  },
  {
    "id": "igcse-maths-q2",
    "subtopicId": "igcse-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Evaluate 16^(−3/4) as an exact fraction.",
    "options": [
      "−12",
      "1/8",
      "8",
      "1/64"
    ],
    "correctIndex": 1,
    "explanation": "Fourth root of 16 is 2; 2³ = 8; negative power takes reciprocal → 1/8."
  },
  {
    "id": "igcse-maths-q3",
    "subtopicId": "igcse-maths-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "y is inversely proportional to x². When x = 2, y = 12. Calculate y when x = 4.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "y = k/x² → 12 = k/4 → k = 48. When x = 4, y = 48 ÷ 16 = 3.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Find k = 48",
          "requiredKeywordGroups": [
            [
              "48"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct value y = 3",
          "numericMatch": {
            "value": 3,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "k = yx² = 12 × 4 = 48. When x = 4, y = 48 ÷ 4² = 48 ÷ 16 = 3."
  },
  {
    "id": "igcse-maths-q4",
    "subtopicId": "igcse-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A parabola has equation y = (x − 4)² − 7. What are the coordinates of its minimum turning point?",
    "options": [
      "(−4, −7)",
      "(4, −7)",
      "(4, 7)",
      "(−4, 7)"
    ],
    "correctIndex": 1,
    "explanation": "For y = (x + p)² + q, the vertex is (−p, q). Flipping −4 gives +4 and keeping −7 gives (4, −7)."
  },
  {
    "id": "igcse-maths-q5",
    "subtopicId": "igcse-maths-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given f(x) = 3x − 2 and g(x) = x² + 1, find fg(2).",
    "options": [
      "17",
      "13",
      "15",
      "11"
    ],
    "correctIndex": 1,
    "explanation": "Work right-to-left: g(2) = 2² + 1 = 5; then f(5) = 3(5) − 2 = 13."
  },
  {
    "id": "igcse-maths-q6",
    "subtopicId": "igcse-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Line L has equation 3x + 6y = 12. What is the gradient of a line PERPENDICULAR to L?",
    "options": [
      "−½",
      "½",
      "2",
      "−2"
    ],
    "correctIndex": 2,
    "explanation": "Rearrange: 6y = −3x + 12 → y = −0.5x + 2 (m = −1/2). Negative reciprocal is +2."
  },
  {
    "id": "igcse-maths-q7",
    "subtopicId": "igcse-maths-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Two similar cones have heights 6 cm and 12 cm. The volume of the smaller cone is 50 cm³. Calculate the volume of the larger cone.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Linear k = 12 ÷ 6 = 2. Volume scale factor = 2³ = 8. Volume = 50 × 8 = 400 cm³.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Recognise volume scale factor 2³ = 8",
          "requiredKeywordGroups": [
            [
              "8"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct volume 400 cm³",
          "numericMatch": {
            "value": 400,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "Length scale factor k = 2, so volume scales by k³ = 8: 50 × 8 = 400 cm³."
  },
  {
    "id": "igcse-maths-q8",
    "subtopicId": "igcse-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "ABCD is a cyclic quadrilateral with angle ABC = 112°. What is the size of angle ADC?",
    "options": [
      "112°",
      "68°",
      "56°",
      "90°"
    ],
    "correctIndex": 1,
    "explanation": "Opposite angles in a cyclic quadrilateral sum to 180°: 180° − 112° = 68°."
  },
  {
    "id": "igcse-maths-q9",
    "subtopicId": "igcse-maths-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Triangle PQR has sides p = 8 cm, q = 10 cm, and included angle R = 30°. Calculate the area of triangle PQR.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Area = ½ × 8 × 10 × sin 30° = 40 × 0.5 = 20 cm².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Apply ½ab sin C (0.5 × 8 × 10 × 0.5)",
          "requiredKeywordGroups": [
            [
              "0.5",
              "sin"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct area 20 cm²",
          "numericMatch": {
            "value": 20,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "Area = ½(8)(10) sin 30° = 40 × 0.5 = 20 cm²."
  },
  {
    "id": "igcse-maths-q10",
    "subtopicId": "igcse-maths-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In a histogram, the class interval 10 ≤ x < 25 has a frequency of 45. Calculate its frequency density.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Class width = 25 − 10 = 15. Frequency density = 45 ÷ 15 = 3.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Identify class width = 15",
          "requiredKeywordGroups": [
            [
              "15"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct frequency density = 3",
          "numericMatch": {
            "value": 3,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "Frequency density = Frequency ÷ Class Width = 45 ÷ (25 − 10) = 45 ÷ 15 = 3."
  },
  {
    "id": "igcse-maths-q-extra-110",
    "subtopicId": "igcse-maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.1 (Fractions, Percentages, Compound Interest & Reverse Percentages), which of the following is the accurate definition of \"Decimal multiplier\"?",
    "options": [
      "Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85).",
      "The inverse ratio of Compound interest measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Fractions, Percentages, Compound Interest & Reverse Percentages.",
      "An experimental error caused by neglecting unit conversions in Fractions, Recurring Decimals & Percentage Change."
    ],
    "correctIndex": 0,
    "explanation": "Decimal multiplier is defined as: Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85)."
  },
  {
    "id": "igcse-maths-q-extra-111",
    "subtopicId": "igcse-maths-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Decimal Multipliers, Simple & Compound Interest\" (1.1 Fractions, Percentages, Compound Interest & Reverse Percentages).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82. 2. Simple interest adds the SAME fixed amount every year: I = (P × R × T) ÷ 100.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82."
        },
        {
          "id": "mp2",
          "markDescription": "Simple interest adds the SAME fixed amount every year: I = (P × R × T) ÷ 100."
        }
      ]
    },
    "explanation": "From Decimal Multipliers, Simple & Compound Interest: A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82."
  },
  {
    "id": "igcse-maths-q-extra-112",
    "subtopicId": "igcse-maths-1-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.1 Fractions, Percentages, Compound Interest & Reverse Percentages.",
    "options": [
      "Convert recurring decimals to simplified fractions algebraically.",
      "In Fractions, Percentages, Compound Interest & Reverse Percentages, standard unit conversions are never required before applying formulas.",
      "Use A = P(1 ± r/100)ⁿ for compound interest and depreciation.",
      "Decimal multiplier and Compound interest always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Convert recurring decimals to simplified fractions algebraically.\" and \"Use A = P(1 ± r/100)ⁿ for compound interest and depreciation.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-113",
    "subtopicId": "igcse-maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.1 (Fractions, Percentages, Compound Interest & Reverse Percentages)?",
    "options": [
      "NEVER find 15% of $510 and add it back — 15% of the reduced price is smaller than 15% of the original price. Always DIVIDE by 0.85!",
      "Always omit units and rounding in Fractions, Percentages, Compound Interest & Reverse Percentages calculations.",
      "Never show intermediate working steps in 1.1 questions.",
      "Assume Decimal multiplier is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "NEVER find 15% of $510 and add it back — 15% of the reduced price is smaller than 15% of the original price. Always DIVIDE by 0.85!"
  },
  {
    "id": "igcse-maths-q-extra-115",
    "subtopicId": "igcse-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.2 (Indices, Surds, Standard Form & Upper/Lower Bounds), which of the following is the accurate definition of \"Standard form\"?",
    "options": [
      "Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n.",
      "The inverse ratio of Surd measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Indices, Surds, Standard Form & Upper/Lower Bounds.",
      "An experimental error caused by neglecting unit conversions in Laws of Indices (Integer, Negative & Fractional)."
    ],
    "correctIndex": 0,
    "explanation": "Standard form is defined as: Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n."
  },
  {
    "id": "igcse-maths-q-extra-116",
    "subtopicId": "igcse-maths-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Surds & Rationalising the Denominator\" (1.2 Indices, Surds, Standard Form & Upper/Lower Bounds).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2. 2. Collect like surds just like algebra: 5√3 + √12 = 5√3 + 2√3 = 7√3.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2."
        },
        {
          "id": "mp2",
          "markDescription": "Collect like surds just like algebra: 5√3 + √12 = 5√3 + 2√3 = 7√3."
        }
      ]
    },
    "explanation": "From Surds & Rationalising the Denominator: A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2."
  },
  {
    "id": "igcse-maths-q-extra-117",
    "subtopicId": "igcse-maths-1-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.2 Indices, Surds, Standard Form & Upper/Lower Bounds.",
    "options": [
      "Evaluate negative and fractional indices without a calculator.",
      "In Indices, Surds, Standard Form & Upper/Lower Bounds, standard unit conversions are never required before applying formulas.",
      "Simplify surds and rationalise both single-term and two-term denominators.",
      "Standard form and Surd always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Evaluate negative and fractional indices without a calculator.\" and \"Simplify surds and rationalise both single-term and two-term denominators.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-118",
    "subtopicId": "igcse-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.2 (Indices, Surds, Standard Form & Upper/Lower Bounds)?",
    "options": [
      "To maximise a fraction A/B, NEVER divide Upper(A) by Upper(B) — dividing by the SMALLEST possible denominator (Lower B) gives the largest answer!",
      "Always omit units and rounding in Indices, Surds, Standard Form & Upper/Lower Bounds calculations.",
      "Never show intermediate working steps in 1.2 questions.",
      "Assume Standard form is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "To maximise a fraction A/B, NEVER divide Upper(A) by Upper(B) — dividing by the SMALLEST possible denominator (Lower B) gives the largest answer!"
  },
  {
    "id": "igcse-maths-q-extra-120",
    "subtopicId": "igcse-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.3 (Ratio, Direct Proportion & Inverse Proportion), which of the following is the accurate definition of \"Direct proportion\"?",
    "options": [
      "Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0).",
      "The inverse ratio of Inverse proportion measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Ratio, Direct Proportion & Inverse Proportion.",
      "An experimental error caused by neglecting unit conversions in Ratio Sharing & Combining Ratios."
    ],
    "correctIndex": 0,
    "explanation": "Direct proportion is defined as: Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0)."
  },
  {
    "id": "igcse-maths-q-extra-121",
    "subtopicId": "igcse-maths-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Direct Proportion (Algebraic Form)\" (1.3 Ratio, Direct Proportion & Inverse Proportion).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin). 2. Direct proportion also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin)."
        },
        {
          "id": "mp2",
          "markDescription": "Direct proportion also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x."
        }
      ]
    },
    "explanation": "From Direct Proportion (Algebraic Form): If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin)."
  },
  {
    "id": "igcse-maths-q-extra-122",
    "subtopicId": "igcse-maths-1-3",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.3 Ratio, Direct Proportion & Inverse Proportion.",
    "options": [
      "Solve ratio sharing, ratio difference, and combined three-part ratio problems.",
      "In Ratio, Direct Proportion & Inverse Proportion, standard unit conversions are never required before applying formulas.",
      "Set up and solve direct proportion formulas (y = kx, kx², k√x) and inverse proportion formulas (y = k/x, k/x²).",
      "Direct proportion and Inverse proportion always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Solve ratio sharing, ratio difference, and combined three-part ratio problems.\" and \"Set up and solve direct proportion formulas (y = kx, kx², k√x) and inverse proportion formulas (y = k/x, k/x²).\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-123",
    "subtopicId": "igcse-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.3 (Ratio, Direct Proportion & Inverse Proportion)?",
    "options": [
      "Read carefully whether y is proportional to x, x², x³, or √x — writing y = kx when the question states \"proportional to the square of x\" loses almost all method marks!",
      "Always omit units and rounding in Ratio, Direct Proportion & Inverse Proportion calculations.",
      "Never show intermediate working steps in 1.3 questions.",
      "Assume Direct proportion is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Read carefully whether y is proportional to x, x², x³, or √x — writing y = kx when the question states \"proportional to the square of x\" loses almost all method marks!"
  },
  {
    "id": "igcse-maths-q-extra-125",
    "subtopicId": "igcse-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.1 (Expanding, Factorising & Solving Quadratic Equations), which of the following is the accurate definition of \"Quadratic equation\"?",
    "options": [
      "Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0).",
      "The inverse ratio of Difference of two squares measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Expanding, Factorising & Solving Quadratic Equations.",
      "An experimental error caused by neglecting unit conversions in Expanding Brackets & Factorising Quadratics."
    ],
    "correctIndex": 0,
    "explanation": "Quadratic equation is defined as: Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0)."
  },
  {
    "id": "igcse-maths-q-extra-126",
    "subtopicId": "igcse-maths-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"The Quadratic Formula\" (2.1 Expanding, Factorising & Solving Quadratic Equations).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When a question says \"give your answers to 2 decimal places\" or \"3 significant figures\", use the Quadratic Formula: x = (−b ± √(b² − 4ac)) ÷ (2a). 2. Worked example: Solve 3x² − 5x − 4 = 0. Here a = 3, b = −5, c = −4. Discriminant b² − 4ac = (−5)² − 4(3)(−4) = 25 + 48 = 73.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When a question says \"give your answers to 2 decimal places\" or \"3 significant figures\", use the Quadratic Formula: x = (−b ± √(b² − 4ac)) ÷ (2a)."
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: Solve 3x² − 5x − 4 = 0. Here a = 3, b = −5, c = −4. Discriminant b² − 4ac = (−5)² − 4(3)(−4) = 25 + 48 = 73."
        }
      ]
    },
    "explanation": "From The Quadratic Formula: When a question says \"give your answers to 2 decimal places\" or \"3 significant figures\", use the Quadratic Formula: x = (−b ± √(b² − 4ac)) ÷ (2a)."
  },
  {
    "id": "igcse-maths-q-extra-127",
    "subtopicId": "igcse-maths-2-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.1 Expanding, Factorising & Solving Quadratic Equations.",
    "options": [
      "Factorise quadratics with a = 1, a > 1, and difference of two squares.",
      "In Expanding, Factorising & Solving Quadratic Equations, standard unit conversions are never required before applying formulas.",
      "Apply the quadratic formula accurately with negative coefficients using brackets.",
      "Quadratic equation and Difference of two squares always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Factorise quadratics with a = 1, a > 1, and difference of two squares.\" and \"Apply the quadratic formula accurately with negative coefficients using brackets.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-128",
    "subtopicId": "igcse-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.1 (Expanding, Factorising & Solving Quadratic Equations)?",
    "options": [
      "When b is negative (e.g., b = −5), write (−5)² = +25 in brackets on your calculator — typing −5² gives −25 and ruins the entire solution!",
      "Always omit units and rounding in Expanding, Factorising & Solving Quadratic Equations calculations.",
      "Never show intermediate working steps in 2.1 questions.",
      "Assume Quadratic equation is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When b is negative (e.g., b = −5), write (−5)² = +25 in brackets on your calculator — typing −5² gives −25 and ruins the entire solution!"
  },
  {
    "id": "igcse-maths-q-extra-130",
    "subtopicId": "igcse-maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.2 (Simultaneous Equations (Linear & Quadratic) & Inequalities), which of the following is the accurate definition of \"Elimination method\"?",
    "options": [
      "Adding or subtracting multiples of linear simultaneous equations to cancel one unknown.",
      "The inverse ratio of Substitution method measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Simultaneous Equations (Linear & Quadratic) & Inequalities.",
      "An experimental error caused by neglecting unit conversions in Linear Simultaneous Equations (Elimination)."
    ],
    "correctIndex": 0,
    "explanation": "Elimination method is defined as: Adding or subtracting multiples of linear simultaneous equations to cancel one unknown."
  },
  {
    "id": "igcse-maths-q-extra-131",
    "subtopicId": "igcse-maths-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Non-Linear Simultaneous Equations (Substitution)\" (2.2 Simultaneous Equations (Linear & Quadratic) & Inequalities).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION. 2. Step 1: Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION."
        },
        {
          "id": "mp2",
          "markDescription": "Step 1: Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0."
        }
      ]
    },
    "explanation": "From Non-Linear Simultaneous Equations (Substitution): When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION."
  },
  {
    "id": "igcse-maths-q-extra-132",
    "subtopicId": "igcse-maths-2-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.2 Simultaneous Equations (Linear & Quadratic) & Inequalities.",
    "options": [
      "Solve linear simultaneous equations accurately and verify both values.",
      "In Simultaneous Equations (Linear & Quadratic) & Inequalities, standard unit conversions are never required before applying formulas.",
      "Solve linear-quadratic simultaneous equations by substitution and pair (x, y) solutions clearly.",
      "Elimination method and Substitution method always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Solve linear simultaneous equations accurately and verify both values.\" and \"Solve linear-quadratic simultaneous equations by substitution and pair (x, y) solutions clearly.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-133",
    "subtopicId": "igcse-maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.2 (Simultaneous Equations (Linear & Quadratic) & Inequalities)?",
    "options": [
      "Never leave x and y unpaired — write each solution clearly as matched pairs: x = −4, y = −3 and x = 3, y = 4.",
      "Always omit units and rounding in Simultaneous Equations (Linear & Quadratic) & Inequalities calculations.",
      "Never show intermediate working steps in 2.2 questions.",
      "Assume Elimination method is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never leave x and y unpaired — write each solution clearly as matched pairs: x = −4, y = −3 and x = 3, y = 4."
  },
  {
    "id": "igcse-maths-q-extra-134",
    "subtopicId": "igcse-maths-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Linear, Quadratic & Graphical Inequalities\" for 2.2 Simultaneous Equations (Linear & Quadratic) & Inequalities.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5). Quadratic inequalities: Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5)."
        },
        {
          "id": "mp2",
          "markDescription": "Quadratic inequalities: Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3."
        }
      ]
    },
    "explanation": "Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5)."
  },
  {
    "id": "igcse-maths-q-extra-135",
    "subtopicId": "igcse-maths-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.3 (Sequences, Functions (Composite/Inverse) & Differentiation), which of the following is the accurate definition of \"Quadratic sequence\"?",
    "options": [
      "Sequence with a constant second difference 2a and nth term an² + bn + c.",
      "The inverse ratio of Inverse function measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Sequences, Functions (Composite/Inverse) & Differentiation.",
      "An experimental error caused by neglecting unit conversions in Arithmetic, Geometric & Quadratic Sequences."
    ],
    "correctIndex": 0,
    "explanation": "Quadratic sequence is defined as: Sequence with a constant second difference 2a and nth term an² + bn + c."
  },
  {
    "id": "igcse-maths-q-extra-136",
    "subtopicId": "igcse-maths-2-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Composite & Inverse Functions (Extended)\" (2.3 Sequences, Functions (Composite/Inverse) & Differentiation).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)! 2. Worked example: If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)!"
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)²."
        }
      ]
    },
    "explanation": "From Composite & Inverse Functions (Extended): Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)!"
  },
  {
    "id": "igcse-maths-q-extra-137",
    "subtopicId": "igcse-maths-2-3",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.3 Sequences, Functions (Composite/Inverse) & Differentiation.",
    "options": [
      "Find the nth term of arithmetic, geometric, and quadratic sequences.",
      "In Sequences, Functions (Composite/Inverse) & Differentiation, standard unit conversions are never required before applying formulas.",
      "Evaluate composite functions fg(x) right-to-left and derive inverse functions f⁻¹(x).",
      "Quadratic sequence and Inverse function always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Find the nth term of arithmetic, geometric, and quadratic sequences.\" and \"Evaluate composite functions fg(x) right-to-left and derive inverse functions f⁻¹(x).\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-138",
    "subtopicId": "igcse-maths-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.3 (Sequences, Functions (Composite/Inverse) & Differentiation)?",
    "options": [
      "Students often compute fg(x) left-to-right (f first, then g). ALWAYS work RIGHT-TO-LEFT starting with the function closest to x!",
      "Always omit units and rounding in Sequences, Functions (Composite/Inverse) & Differentiation calculations.",
      "Never show intermediate working steps in 2.3 questions.",
      "Assume Quadratic sequence is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Students often compute fg(x) left-to-right (f first, then g). ALWAYS work RIGHT-TO-LEFT starting with the function closest to x!"
  },
  {
    "id": "igcse-maths-q-extra-140",
    "subtopicId": "igcse-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.1 (Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars), which of the following is the accurate definition of \"Gradient\"?",
    "options": [
      "Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁).",
      "The inverse ratio of Perpendicular lines measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars.",
      "An experimental error caused by neglecting unit conversions in Gradient, Midpoint & Length of a Line Segment."
    ],
    "correctIndex": 0,
    "explanation": "Gradient is defined as: Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁)."
  },
  {
    "id": "igcse-maths-q-extra-141",
    "subtopicId": "igcse-maths-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Equation of a Straight Line (y = mx + c)\" (3.1 Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. In y = mx + c, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c! 2. Finding the line through (2, 5) and (6, 17): First find m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Substitute (2, 5) into y = 3x + c → 5 = 6 + c → c = −1 → y = 3x − 1.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "In y = mx + c, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c!"
        },
        {
          "id": "mp2",
          "markDescription": "Finding the line through (2, 5) and (6, 17): First find m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Substitute (2, 5) into y = 3x + c → 5 = 6 + c → c = −1 → y = 3x − 1."
        }
      ]
    },
    "explanation": "From Equation of a Straight Line (y = mx + c): In y = mx + c, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c!"
  },
  {
    "id": "igcse-maths-q-extra-142",
    "subtopicId": "igcse-maths-3-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.1 Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars.",
    "options": [
      "Calculate gradient, midpoint, and distance between any two coordinate pairs.",
      "In Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars, standard unit conversions are never required before applying formulas.",
      "Rearrange ax + by = c into y = mx + c to read off gradient and y-intercept.",
      "Gradient and Perpendicular lines always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate gradient, midpoint, and distance between any two coordinate pairs.\" and \"Rearrange ax + by = c into y = mx + c to read off gradient and y-intercept.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-143",
    "subtopicId": "igcse-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.1 (Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars)?",
    "options": [
      "In 3x + 2y = 8, the gradient is NOT 3 — rearrange to y = −1.5x + 4 first, so m = −1.5!",
      "Always omit units and rounding in Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars calculations.",
      "Never show intermediate working steps in 3.1 questions.",
      "Assume Gradient is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "In 3x + 2y = 8, the gradient is NOT 3 — rearrange to y = −1.5x + 4 first, so m = −1.5!"
  },
  {
    "id": "igcse-maths-q-extra-145",
    "subtopicId": "igcse-maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.1 (Angles, Polygons, Bearings, Similarity & Congruence), which of the following is the accurate definition of \"Bearing\"?",
    "options": [
      "Direction measured clockwise from North and expressed as a three-figure angle (000°–359°).",
      "The inverse ratio of Congruence measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Angles, Polygons, Bearings, Similarity & Congruence.",
      "An experimental error caused by neglecting unit conversions in Parallel Lines & Polygon Angle Rules."
    ],
    "correctIndex": 0,
    "explanation": "Bearing is defined as: Direction measured clockwise from North and expressed as a three-figure angle (000°–359°)."
  },
  {
    "id": "igcse-maths-q-extra-146",
    "subtopicId": "igcse-maths-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Three-Figure Bearings\" (4.1 Angles, Polygons, Bearings, Similarity & Congruence).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°). 2. The wording \"bearing of B FROM A\" means stand at A, draw a North line at A, and turn clockwise until pointing to B.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°)."
        },
        {
          "id": "mp2",
          "markDescription": "The wording \"bearing of B FROM A\" means stand at A, draw a North line at A, and turn clockwise until pointing to B."
        }
      ]
    },
    "explanation": "From Three-Figure Bearings: Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°)."
  },
  {
    "id": "igcse-maths-q-extra-147",
    "subtopicId": "igcse-maths-4-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.1 Angles, Polygons, Bearings, Similarity & Congruence.",
    "options": [
      "Calculate interior and exterior angles of regular and irregular polygons.",
      "In Angles, Polygons, Bearings, Similarity & Congruence, standard unit conversions are never required before applying formulas.",
      "Measure and calculate bearings and back bearings using co-interior angles.",
      "Bearing and Congruence always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate interior and exterior angles of regular and irregular polygons.\" and \"Measure and calculate bearings and back bearings using co-interior angles.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-148",
    "subtopicId": "igcse-maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.1 (Angles, Polygons, Bearings, Similarity & Congruence)?",
    "options": [
      "Always check which point follows the word \"FROM\" — that is where you draw your North arrow!",
      "Always omit units and rounding in Angles, Polygons, Bearings, Similarity & Congruence calculations.",
      "Never show intermediate working steps in 4.1 questions.",
      "Assume Bearing is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Always check which point follows the word \"FROM\" — that is where you draw your North arrow!"
  },
  {
    "id": "igcse-maths-q-extra-150",
    "subtopicId": "igcse-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.2 (Circle Theorems & Alternate Segment Theorem), which of the following is the accurate definition of \"Cyclic quadrilateral\"?",
    "options": [
      "Four-sided shape inscribed in a circle whose opposite angles add to 180°.",
      "The inverse ratio of Alternate Segment Theorem measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Circle Theorems & Alternate Segment Theorem.",
      "An experimental error caused by neglecting unit conversions in Centre, Semicircle & Same-Segment Theorems."
    ],
    "correctIndex": 0,
    "explanation": "Cyclic quadrilateral is defined as: Four-sided shape inscribed in a circle whose opposite angles add to 180°."
  },
  {
    "id": "igcse-maths-q-extra-151",
    "subtopicId": "igcse-maths-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Cyclic Quadrilaterals & Tangent Rules\" (4.2 Circle Theorems & Alternate Segment Theorem).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°. 2. Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at 90°.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°."
        },
        {
          "id": "mp2",
          "markDescription": "Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at 90°."
        }
      ]
    },
    "explanation": "From Cyclic Quadrilaterals & Tangent Rules: Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°."
  },
  {
    "id": "igcse-maths-q-extra-152",
    "subtopicId": "igcse-maths-4-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.2 Circle Theorems & Alternate Segment Theorem.",
    "options": [
      "Recall and apply all 8 circle theorems accurately in multi-step angle problems.",
      "In Circle Theorems & Alternate Segment Theorem, standard unit conversions are never required before applying formulas.",
      "Spot isosceles triangles formed by two radii immediately.",
      "Cyclic quadrilateral and Alternate Segment Theorem always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Recall and apply all 8 circle theorems accurately in multi-step angle problems.\" and \"Spot isosceles triangles formed by two radii immediately.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-153",
    "subtopicId": "igcse-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.2 (Circle Theorems & Alternate Segment Theorem)?",
    "options": [
      "A quadrilateral with one corner at the CENTRE of the circle is NOT a cyclic quadrilateral — all 4 vertices must touch the circumference!",
      "Always omit units and rounding in Circle Theorems & Alternate Segment Theorem calculations.",
      "Never show intermediate working steps in 4.2 questions.",
      "Assume Cyclic quadrilateral is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "A quadrilateral with one corner at the CENTRE of the circle is NOT a cyclic quadrilateral — all 4 vertices must touch the circumference!"
  },
  {
    "id": "igcse-maths-q-extra-155",
    "subtopicId": "igcse-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.1 (Area, Arc Length, Sector Area, Surface Area & Volume), which of the following is the accurate definition of \"Sector\"?",
    "options": [
      "Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr².",
      "The inverse ratio of Frustum measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Area, Arc Length, Sector Area, Surface Area & Volume.",
      "An experimental error caused by neglecting unit conversions in 2D Areas, Arc Length & Sector Area."
    ],
    "correctIndex": 0,
    "explanation": "Sector is defined as: Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr²."
  },
  {
    "id": "igcse-maths-q-extra-156",
    "subtopicId": "igcse-maths-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Volume & Surface Area of 3D Solids\" (5.1 Area, Arc Length, Sector Area, Surface Area & Volume).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Any uniform Prism: Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr². 2. Pyramid: Volume = ⅓ × Base area × perpendicular height. Cone: Volume = ⅓πr²h; Curved surface area = πrl (where slant height l = √(r² + h²)); Total SA = πrl + πr².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Any uniform Prism: Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr²."
        },
        {
          "id": "mp2",
          "markDescription": "Pyramid: Volume = ⅓ × Base area × perpendicular height. Cone: Volume = ⅓πr²h; Curved surface area = πrl (where slant height l = √(r² + h²)); Total SA = πrl + πr²."
        }
      ]
    },
    "explanation": "From Volume & Surface Area of 3D Solids: Any uniform Prism: Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr²."
  },
  {
    "id": "igcse-maths-q-extra-157",
    "subtopicId": "igcse-maths-5-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.1 Area, Arc Length, Sector Area, Surface Area & Volume.",
    "options": [
      "Calculate arc length, sector perimeter, and sector area in exact π form and decimals.",
      "In Area, Arc Length, Sector Area, Surface Area & Volume, standard unit conversions are never required before applying formulas.",
      "Find volume and total surface area of prisms, cylinders, pyramids, cones, spheres, and hemispheres.",
      "Sector and Frustum always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate arc length, sector perimeter, and sector area in exact π form and decimals.\" and \"Find volume and total surface area of prisms, cylinders, pyramids, cones, spheres, and hemispheres.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-158",
    "subtopicId": "igcse-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.1 (Area, Arc Length, Sector Area, Surface Area & Volume)?",
    "options": [
      "When asked for the PERIMETER of a sector, students often calculate only the curved arc length and forget to add the two straight radii (+ 2r)!",
      "Always omit units and rounding in Area, Arc Length, Sector Area, Surface Area & Volume calculations.",
      "Never show intermediate working steps in 5.1 questions.",
      "Assume Sector is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When asked for the PERIMETER of a sector, students often calculate only the curved arc length and forget to add the two straight radii (+ 2r)!"
  },
  {
    "id": "igcse-maths-q-extra-159",
    "subtopicId": "igcse-maths-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Unit Conversions & Frustums\" for 5.1 Area, Arc Length, Sector Area, Surface Area & Volume.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³. A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³."
        },
        {
          "id": "mp2",
          "markDescription": "A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone)."
        }
      ]
    },
    "explanation": "Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³."
  },
  {
    "id": "igcse-maths-q-extra-160",
    "subtopicId": "igcse-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.1 (Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)), which of the following is the accurate definition of \"Hypotenuse\"?",
    "options": [
      "Longest side of a right-angled triangle, opposite the right angle.",
      "The inverse ratio of Angle of elevation measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA).",
      "An experimental error caused by neglecting unit conversions in Pythagoras’ Theorem (2D & 3D)."
    ],
    "correctIndex": 0,
    "explanation": "Hypotenuse is defined as: Longest side of a right-angled triangle, opposite the right angle."
  },
  {
    "id": "igcse-maths-q-extra-161",
    "subtopicId": "igcse-maths-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Right-Angled Trigonometry (SOHCAHTOA)\" (6.1 Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ). 2. SOH: sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ)."
        },
        {
          "id": "mp2",
          "markDescription": "SOH: sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A."
        }
      ]
    },
    "explanation": "From Right-Angled Trigonometry (SOHCAHTOA): Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ)."
  },
  {
    "id": "igcse-maths-q-extra-162",
    "subtopicId": "igcse-maths-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.1 Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA).",
    "options": [
      "Apply Pythagoras in 2D and 3D cuboids/pyramids.",
      "In Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA), standard unit conversions are never required before applying formulas.",
      "Find missing sides and angles using SOHCAHTOA and recall exact trig values for 30°, 45°, and 60°.",
      "Hypotenuse and Angle of elevation always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply Pythagoras in 2D and 3D cuboids/pyramids.\" and \"Find missing sides and angles using SOHCAHTOA and recall exact trig values for 30°, 45°, and 60°.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-163",
    "subtopicId": "igcse-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.1 (Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA))?",
    "options": [
      "Angle of depression is measured from the HORIZONTAL down to the line of sight — NEVER from the vertical cliff wall!",
      "Always omit units and rounding in Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA) calculations.",
      "Never show intermediate working steps in 6.1 questions.",
      "Assume Hypotenuse is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Angle of depression is measured from the HORIZONTAL down to the line of sight — NEVER from the vertical cliff wall!"
  },
  {
    "id": "igcse-maths-q-extra-164",
    "subtopicId": "igcse-maths-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Angles of Elevation, Depression & 3D Trigonometry\" for 6.1 Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!). For 3D trigonometry (angle between a line and a plane): drop a perpendicular from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!)."
        },
        {
          "id": "mp2",
          "markDescription": "For 3D trigonometry (angle between a line and a plane): drop a perpendicular from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal."
        }
      ]
    },
    "explanation": "Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!)."
  },
  {
    "id": "igcse-maths-q-extra-165",
    "subtopicId": "igcse-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.2 (Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles), which of the following is the accurate definition of \"Sine Rule\"?",
    "options": [
      "a / sin A = b / sin B = c / sin C for any triangle.",
      "The inverse ratio of Cosine Rule measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles.",
      "An experimental error caused by neglecting unit conversions in The Sine Rule (and Ambiguous Case)."
    ],
    "correctIndex": 0,
    "explanation": "Sine Rule is defined as: a / sin A = b / sin B = c / sin C for any triangle."
  },
  {
    "id": "igcse-maths-q-extra-166",
    "subtopicId": "igcse-maths-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"The Cosine Rule\" (6.2 Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known). 2. Finding a missing side (SAS): a² = b² + c² − 2bc cos A (remember to take the square root at the end!).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known)."
        },
        {
          "id": "mp2",
          "markDescription": "Finding a missing side (SAS): a² = b² + c² − 2bc cos A (remember to take the square root at the end!)."
        }
      ]
    },
    "explanation": "From The Cosine Rule: Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known)."
  },
  {
    "id": "igcse-maths-q-extra-167",
    "subtopicId": "igcse-maths-6-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.2 Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles.",
    "options": [
      "Choose correctly between SOHCAHTOA, Sine Rule, and Cosine Rule.",
      "In Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles, standard unit conversions are never required before applying formulas.",
      "Calculate triangle area using ½ab sin C and handle obtuse angles in the Sine Rule.",
      "Sine Rule and Cosine Rule always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Choose correctly between SOHCAHTOA, Sine Rule, and Cosine Rule.\" and \"Calculate triangle area using ½ab sin C and handle obtuse angles in the Sine Rule.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-168",
    "subtopicId": "igcse-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.2 (Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles)?",
    "options": [
      "When calculating a² = b² + c² − 2bc cos A, NEVER subtract 2bc before multiplying by cos A (respect BIDMAS) and NEVER forget to square root a²!",
      "Always omit units and rounding in Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles calculations.",
      "Never show intermediate working steps in 6.2 questions.",
      "Assume Sine Rule is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When calculating a² = b² + c² − 2bc cos A, NEVER subtract 2bc before multiplying by cos A (respect BIDMAS) and NEVER forget to square root a²!"
  },
  {
    "id": "igcse-maths-q-extra-170",
    "subtopicId": "igcse-maths-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 7.1 (Column Vectors, Vector Geometry & Transformations), which of the following is the accurate definition of \"Position vector\"?",
    "options": [
      "Vector OA starting at the origin O(0, 0) and ending at point A.",
      "The inverse ratio of Collinear points measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Column Vectors, Vector Geometry & Transformations.",
      "An experimental error caused by neglecting unit conversions in Column Vectors & Magnitude."
    ],
    "correctIndex": 0,
    "explanation": "Position vector is defined as: Vector OA starting at the origin O(0, 0) and ending at point A."
  },
  {
    "id": "igcse-maths-q-extra-171",
    "subtopicId": "igcse-maths-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Vector Geometry, Parallelism & Collinearity Proofs\" (7.1 Column Vectors, Vector Geometry & Transformations).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Triangle rule for paths: To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a (\"destination minus start\"). 2. Dividing a line in ratio m : n: If point P divides AB in ratio 2 : 3, then AP = (2/5)AB and OP = OA + (2/5)AB.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Triangle rule for paths: To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a (\"destination minus start\")."
        },
        {
          "id": "mp2",
          "markDescription": "Dividing a line in ratio m : n: If point P divides AB in ratio 2 : 3, then AP = (2/5)AB and OP = OA + (2/5)AB."
        }
      ]
    },
    "explanation": "From Vector Geometry, Parallelism & Collinearity Proofs: Triangle rule for paths: To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a (\"destination minus start\")."
  },
  {
    "id": "igcse-maths-q-extra-172",
    "subtopicId": "igcse-maths-7-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 7.1 Column Vectors, Vector Geometry & Transformations.",
    "options": [
      "Calculate vector magnitudes and express geometric paths using ratio fractions.",
      "In Column Vectors, Vector Geometry & Transformations, standard unit conversions are never required before applying formulas.",
      "Write formal proofs for parallel vectors and collinear points.",
      "Position vector and Collinear points always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate vector magnitudes and express geometric paths using ratio fractions.\" and \"Write formal proofs for parallel vectors and collinear points.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-173",
    "subtopicId": "igcse-maths-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 7.1 (Column Vectors, Vector Geometry & Transformations)?",
    "options": [
      "Showing AB = k·BC alone only proves parallelism — you MUST add the sentence \"and they share the common point B, therefore A, B, and C are collinear\" to earn the final proof mark!",
      "Always omit units and rounding in Column Vectors, Vector Geometry & Transformations calculations.",
      "Never show intermediate working steps in 7.1 questions.",
      "Assume Position vector is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Showing AB = k·BC alone only proves parallelism — you MUST add the sentence \"and they share the common point B, therefore A, B, and C are collinear\" to earn the final proof mark!"
  },
  {
    "id": "igcse-maths-q-extra-174",
    "subtopicId": "igcse-maths-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"The Four Geometric Transformations\" for 7.1 Column Vectors, Vector Geometry & Transformations.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "When describing a single transformation fully, always state the EXACT required details: Translation: state \"Translation\" + column vector (x / y).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When describing a single transformation fully, always state the EXACT required details:"
        },
        {
          "id": "mp2",
          "markDescription": "Translation: state \"Translation\" + column vector (x / y)."
        }
      ]
    },
    "explanation": "When describing a single transformation fully, always state the EXACT required details:"
  },
  {
    "id": "igcse-maths-q-extra-175",
    "subtopicId": "igcse-maths-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 8.1 (Probability Trees, Venn Diagrams & Conditional Probability), which of the following is the accurate definition of \"Mutually exclusive\"?",
    "options": [
      "Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B).",
      "The inverse ratio of Independent events measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Probability Trees, Venn Diagrams & Conditional Probability.",
      "An experimental error caused by neglecting unit conversions in Probability Rules & Tree Diagrams."
    ],
    "correctIndex": 0,
    "explanation": "Mutually exclusive is defined as: Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B)."
  },
  {
    "id": "igcse-maths-q-extra-176",
    "subtopicId": "igcse-maths-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Conditional Probability (Without Replacement)\" (8.1 Probability Trees, Venn Diagrams & Conditional Probability).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch. 2. Worked example: A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch."
        },
        {
          "id": "mp2",
          "markDescription": "Worked example: A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15."
        }
      ]
    },
    "explanation": "From Conditional Probability (Without Replacement): When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch."
  },
  {
    "id": "igcse-maths-q-extra-177",
    "subtopicId": "igcse-maths-8-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 8.1 Probability Trees, Venn Diagrams & Conditional Probability.",
    "options": [
      "Construct and evaluate both independent and without-replacement probability trees.",
      "In Probability Trees, Venn Diagrams & Conditional Probability, standard unit conversions are never required before applying formulas.",
      "Use P(at least one) = 1 − P(none) cleanly.",
      "Mutually exclusive and Independent events always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Construct and evaluate both independent and without-replacement probability trees.\" and \"Use P(at least one) = 1 − P(none) cleanly.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-178",
    "subtopicId": "igcse-maths-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 8.1 (Probability Trees, Venn Diagrams & Conditional Probability)?",
    "options": [
      "When finding \"one red and one blue\" without replacement, DO NOT forget there are TWO orderings (Red then Blue OR Blue then Red) — add both paths!",
      "Always omit units and rounding in Probability Trees, Venn Diagrams & Conditional Probability calculations.",
      "Never show intermediate working steps in 8.1 questions.",
      "Assume Mutually exclusive is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When finding \"one red and one blue\" without replacement, DO NOT forget there are TWO orderings (Red then Blue OR Blue then Red) — add both paths!"
  },
  {
    "id": "igcse-maths-q-extra-179",
    "subtopicId": "igcse-maths-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Venn Diagrams & Set Notation\" for 8.1 Probability Trees, Venn Diagrams & Conditional Probability.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A. Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A."
        },
        {
          "id": "mp2",
          "markDescription": "Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!"
        }
      ]
    },
    "explanation": "Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A."
  },
  {
    "id": "igcse-maths-q-extra-180",
    "subtopicId": "igcse-maths-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 8.2 (Averages, Cumulative Frequency, Box Plots & Histograms), which of the following is the accurate definition of \"Interquartile range (IQR)\"?",
    "options": [
      "Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations.",
      "The inverse ratio of Frequency density measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Averages, Cumulative Frequency, Box Plots & Histograms.",
      "An experimental error caused by neglecting unit conversions in Estimated Mean & Grouped Frequency Tables."
    ],
    "correctIndex": 0,
    "explanation": "Interquartile range (IQR) is defined as: Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations."
  },
  {
    "id": "igcse-maths-q-extra-181",
    "subtopicId": "igcse-maths-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Cumulative Frequency Curves & Box Plots\" (8.2 Averages, Cumulative Frequency, Box Plots & Histograms).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0. 2. For total frequency N: Median (Q₂) is read across from 50% (0.5N); Lower Quartile (Q₁) from 25% (0.25N); Upper Quartile (Q₃) from 75% (0.75N).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0."
        },
        {
          "id": "mp2",
          "markDescription": "For total frequency N: Median (Q₂) is read across from 50% (0.5N); Lower Quartile (Q₁) from 25% (0.25N); Upper Quartile (Q₃) from 75% (0.75N)."
        }
      ]
    },
    "explanation": "From Cumulative Frequency Curves & Box Plots: Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0."
  },
  {
    "id": "igcse-maths-q-extra-182",
    "subtopicId": "igcse-maths-8-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 8.2 Averages, Cumulative Frequency, Box Plots & Histograms.",
    "options": [
      "Calculate estimated mean from grouped tables using midpoints and Σ(fx) ÷ Σf.",
      "In Averages, Cumulative Frequency, Box Plots & Histograms, standard unit conversions are never required before applying formulas.",
      "Plot cumulative frequency at upper boundaries, read off median/Q₁/Q₃/IQR, and compare distributions using both median and IQR.",
      "Interquartile range (IQR) and Frequency density always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate estimated mean from grouped tables using midpoints and Σ(fx) ÷ Σf.\" and \"Plot cumulative frequency at upper boundaries, read off median/Q₁/Q₃/IQR, and compare distributions using both median and IQR.\" are core specification points."
  },
  {
    "id": "igcse-maths-q-extra-183",
    "subtopicId": "igcse-maths-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 8.2 (Averages, Cumulative Frequency, Box Plots & Histograms)?",
    "options": [
      "Always divide Σ(fx) by the TOTAL FREQUENCY (Σf), NEVER by the number of rows in the table!",
      "Always omit units and rounding in Averages, Cumulative Frequency, Box Plots & Histograms calculations.",
      "Never show intermediate working steps in 8.2 questions.",
      "Assume Interquartile range (IQR) is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Always divide Σ(fx) by the TOTAL FREQUENCY (Σf), NEVER by the number of rows in the table!"
  }
];

export const IGCSE_MATHS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "igcse-maths-fc-1",
    "subtopicId": "igcse-maths-1-1",
    "front": "How do you reverse a 20% decrease?",
    "backBullets": [
      "Divide the discounted value by 0.80 (NOT add 20%)"
    ]
  },
  {
    "id": "igcse-maths-fc-2",
    "subtopicId": "igcse-maths-1-2",
    "front": "How do you find the UPPER bound of A ÷ B?",
    "backBullets": [
      "Upper bound of A ÷ Lower bound of B (biggest numerator, smallest denominator)"
    ]
  },
  {
    "id": "igcse-maths-fc-3",
    "subtopicId": "igcse-maths-2-1",
    "front": "State the Quadratic Formula and turning point from (x + p)² + q.",
    "backBullets": [
      "x = (−b ± √(b² − 4ac)) ÷ (2a)",
      "Turning point is (−p, q)"
    ]
  },
  {
    "id": "igcse-maths-fc-4",
    "subtopicId": "igcse-maths-2-3",
    "front": "How do you differentiate y = axⁿ?",
    "backBullets": [
      "dy/dx = anxⁿ⁻¹ (multiply by old power, reduce power by 1)",
      "Stationary points occur where dy/dx = 0"
    ]
  },
  {
    "id": "igcse-maths-fc-5",
    "subtopicId": "igcse-maths-4-1",
    "front": "If two similar solids have length ratio k, what are their area and volume ratios?",
    "backBullets": [
      "Area scale factor = k²",
      "Volume scale factor = k³"
    ]
  },
  {
    "id": "igcse-maths-fc-6",
    "subtopicId": "igcse-maths-6-2",
    "front": "When do you use the Cosine Rule instead of the Sine Rule?",
    "backBullets": [
      "SAS (two sides + included angle) or SSS (all three sides) — whenever you lack a matching opposite pair"
    ]
  },
  {
    "id": "igcse-maths-fc-7",
    "subtopicId": "igcse-maths-8-2",
    "front": "What is plotted on the y-axis of a histogram and how do you find frequency?",
    "backBullets": [
      "y-axis = Frequency Density = Frequency ÷ Class Width",
      "Frequency = Area of bar (Frequency Density × Class Width)"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-107",
    "subtopicId": "igcse-maths-1-1",
    "front": "1.1 Fractions, Recurring Decimals & Percentage Change: What are the essential exam points to remember?",
    "backBullets": [
      "Always convert mixed numbers to improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12. To divide, multiply by the reciprocal (Keep–Change–Flip).",
      "Converting a recurring decimal to an exact fraction (Extended): Let x = 0.363636..., then 100x = 36.363636... Subtracting gives 99x = 36, so x = 36/99 = 4/11.",
      "Percentage change = ((New value − Original value) ÷ Original value) × 100%. Always divide by the ORIGINAL value, never the new value!"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-108",
    "subtopicId": "igcse-maths-1-1",
    "front": "1.1 Decimal Multipliers, Simple & Compound Interest: What are the essential exam points to remember?",
    "backBullets": [
      "A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82.",
      "Simple interest adds the SAME fixed amount every year: I = (P × R × T) ÷ 100.",
      "Compound interest (and exponential decay/depreciation): Final Value = P × (1 ± r/100)ⁿ, where P is principal, r is rate per period, and n is number of periods."
    ],
    "hint": "Simple = Straight-line addition each year; Compound = Multiply by (Multiplier)^n repeatedly!"
  },
  {
    "id": "igcse-maths-fc-extra-109",
    "subtopicId": "igcse-maths-1-1",
    "front": "1.1 Reverse Percentages: What are the essential exam points to remember?",
    "backBullets": [
      "Use reverse percentages when you are given the FINAL amount AFTER a percentage increase or decrease and must recover the ORIGINAL 100% value.",
      "Method: Original = Final amount ÷ Decimal Multiplier.",
      "Worked example 1 (decrease): A laptop costs $510 after a 15% discount. $510 represents 85% (multiplier 0.85), so Original = 510 ÷ 0.85 = $600."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-110",
    "subtopicId": "igcse-maths-1-1",
    "front": "Define: Decimal multiplier (1.1)",
    "backBullets": [
      "Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-111",
    "subtopicId": "igcse-maths-1-2",
    "front": "1.2 Laws of Indices (Integer, Negative & Fractional): What are the essential exam points to remember?",
    "backBullets": [
      "Core index laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1 (for any a ≠ 0).",
      "Negative index means reciprocal: a⁻ⁿ = 1 ÷ aⁿ (and (a/b)⁻ⁿ = (b/a)ⁿ). Example: (2/3)⁻² = (3/2)² = 9/4.",
      "Fractional index means root then power: a^(m/n) = (ⁿ√a)ᵐ. Always take the root FIRST to keep numbers small!"
    ],
    "hint": "Fractional powers: \"Flower Power\" — the denominator is the ROOT (underground), the numerator is the POWER (up top)!"
  },
  {
    "id": "igcse-maths-fc-extra-112",
    "subtopicId": "igcse-maths-1-2",
    "front": "1.2 Surds & Rationalising the Denominator: What are the essential exam points to remember?",
    "backBullets": [
      "A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2.",
      "Collect like surds just like algebra: 5√3 + √12 = 5√3 + 2√3 = 7√3.",
      "Rationalising single-term denominator: multiply top and bottom by √b. Example: 6/√3 = (6√3)/3 = 2√3."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-113",
    "subtopicId": "igcse-maths-1-2",
    "front": "1.2 Standard Form & Upper/Lower Bounds: What are the essential exam points to remember?",
    "backBullets": [
      "Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 0.00045 = 4.5 × 10⁻⁴; (3 × 10⁵) × (4 × 10³) = 12 × 10⁸ = 1.2 × 10⁹.",
      "Bounds of a rounded measurement: Add and subtract HALF of the rounding unit. If L = 8.4 cm to 1 d.p. (unit 0.1), then 8.35 ≤ L < 8.45.",
      "Bounds in calculations: For maximum of a ÷ b, divide UPPER(a) by LOWER(b). For minimum of a − b, calculate LOWER(a) − UPPER(b)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-114",
    "subtopicId": "igcse-maths-1-2",
    "front": "Define: Standard form (1.2)",
    "backBullets": [
      "Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-115",
    "subtopicId": "igcse-maths-1-3",
    "front": "1.3 Ratio Sharing & Combining Ratios: What are the essential exam points to remember?",
    "backBullets": [
      "Sharing in a ratio: Sum the ratio parts, find the value of 1 part, then multiply. Example: Share $450 in ratio 2 : 3 : 4 → 9 parts = $450 → 1 part = $50 → $100, $150, $200.",
      "Difference ratio problems: If Mia and Leo share money in ratio 3 : 7 and Leo gets $60 more than Mia, the difference of 4 parts = $60 → 1 part = $15 → total 10 parts = $150.",
      "Combining two ratios A : B = 2 : 3 and B : C = 4 : 5: Make the shared letter B equal (LCM of 3 and 4 is 12) → A : B = 8 : 12 and B : C = 12 : 15 → A : B : C = 8 : 12 : 15."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-116",
    "subtopicId": "igcse-maths-1-3",
    "front": "1.3 Direct Proportion (Algebraic Form): What are the essential exam points to remember?",
    "backBullets": [
      "If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin).",
      "Direct proportion also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x.",
      "4-step method: (1) Write equation with k, (2) Substitute known pair (x, y) to solve for k, (3) Rewrite formula with numerical k, (4) Substitute new value to find the unknown."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-117",
    "subtopicId": "igcse-maths-1-3",
    "front": "1.3 Inverse Proportion: What are the essential exam points to remember?",
    "backBullets": [
      "If y is inversely proportional to x (y ∝ 1/x), then y = k ÷ x (so x × y = k is constant). As x doubles, y halves; the graph is a smooth hyperbola approaching both axes.",
      "Inverse square law (common in physics & Extended maths): y ∝ 1/x² → y = k ÷ x².",
      "Worked example: 6 workers build a wall in 10 hours. Since workers × hours = constant, k = 6 × 10 = 60 worker-hours. For 15 workers, time = 60 ÷ 15 = 4 hours."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-118",
    "subtopicId": "igcse-maths-1-3",
    "front": "Define: Direct proportion (1.3)",
    "backBullets": [
      "Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-119",
    "subtopicId": "igcse-maths-1-3",
    "front": "Define: Inverse proportion (1.3)",
    "backBullets": [
      "Relationship where x × y = k is constant (y = k/x); doubling x halves y."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-120",
    "subtopicId": "igcse-maths-2-1",
    "front": "2.1 Expanding Brackets & Factorising Quadratics: What are the essential exam points to remember?",
    "backBullets": [
      "Always rearrange a quadratic equation into standard form ax² + bx + c = 0 before solving.",
      "Difference of two squares: a² − b² = (a + b)(a − b). Example: 9x² − 16 = (3x + 4)(3x − 4).",
      "Factorising when a = 1 (x² + bx + c): find two integers multiplying to c and adding to b. Example: x² − 5x − 14 = (x − 7)(x + 2) = 0 → x = 7 or x = −2."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-121",
    "subtopicId": "igcse-maths-2-1",
    "front": "2.1 The Quadratic Formula: What are the essential exam points to remember?",
    "backBullets": [
      "When a question says \"give your answers to 2 decimal places\" or \"3 significant figures\", use the Quadratic Formula: x = (−b ± √(b² − 4ac)) ÷ (2a).",
      "Worked example: Solve 3x² − 5x − 4 = 0. Here a = 3, b = −5, c = −4. Discriminant b² − 4ac = (−5)² − 4(3)(−4) = 25 + 48 = 73.",
      "Thus x = (5 ± √73) ÷ 6 → x = 2.26 or x = −0.59 (2 d.p.)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-122",
    "subtopicId": "igcse-maths-2-1",
    "front": "2.1 Completing the Square & Vertex (Turning Point): What are the essential exam points to remember?",
    "backBullets": [
      "To write x² + bx + c in completed-square form (x + p)² + q: halve the coefficient of x so p = b/2, then subtract p² and add c.",
      "Worked example: x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2.",
      "Turning point (minimum vertex) of y = (x + p)² + q occurs when the squared bracket equals 0, giving coordinates (−p, q). For y = (x − 3)² + 2, the minimum point is (3, 2)!"
    ],
    "hint": "To find the turning point from (x + p)² + q: FLIP the sign inside the bracket, KEEP the sign outside → (−p, q)."
  },
  {
    "id": "igcse-maths-fc-extra-123",
    "subtopicId": "igcse-maths-2-1",
    "front": "Define: Quadratic equation (2.1)",
    "backBullets": [
      "Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-124",
    "subtopicId": "igcse-maths-2-2",
    "front": "2.2 Linear Simultaneous Equations (Elimination): What are the essential exam points to remember?",
    "backBullets": [
      "Match the coefficients of either x or y by multiplying one or both equations, then eliminate that variable using SSS (Same Signs Subtract, Different Signs Add).",
      "Worked example: Solve 3x + 2y = 16 and 5x − y = 18. Multiply the second equation by 2 → 10x − 2y = 36.",
      "Since +2y and −2y have different signs, ADD the equations: 13x = 52 → x = 4. Substitute into 3(4) + 2y = 16 → 2y = 4 → y = 2."
    ],
    "hint": "SSS = Same Signs Subtract; Different Signs Add!"
  },
  {
    "id": "igcse-maths-fc-extra-125",
    "subtopicId": "igcse-maths-2-2",
    "front": "2.2 Non-Linear Simultaneous Equations (Substitution): What are the essential exam points to remember?",
    "backBullets": [
      "When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION.",
      "Step 1: Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0.",
      "Step 3: Factorise: (x + 4)(x − 3) = 0 → x = −4 or x = 3. Step 4: Find the matching y for EACH x using the linear equation: (−4, −3) and (3, 4)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-126",
    "subtopicId": "igcse-maths-2-2",
    "front": "2.2 Linear, Quadratic & Graphical Inequalities: What are the essential exam points to remember?",
    "backBullets": [
      "Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5).",
      "Quadratic inequalities: Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3.",
      "Graphical inequalities (linear programming): Draw solid lines for ≤ / ≥ and dashed lines for < / >. Test a point (like (0, 0)) to identify the unwanted side to shade."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-127",
    "subtopicId": "igcse-maths-2-2",
    "front": "Define: Elimination method (2.2)",
    "backBullets": [
      "Adding or subtracting multiples of linear simultaneous equations to cancel one unknown."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-128",
    "subtopicId": "igcse-maths-2-2",
    "front": "Define: Substitution method (2.2)",
    "backBullets": [
      "Expressing one variable from a linear equation and inserting it into a second (often quadratic) equation."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-129",
    "subtopicId": "igcse-maths-2-3",
    "front": "2.3 Arithmetic, Geometric & Quadratic Sequences: What are the essential exam points to remember?",
    "backBullets": [
      "Linear (arithmetic) sequence with common difference d: nth term = dn + (first term − d). Example: 5, 9, 13, 17... has d = 4 → uₙ = 4n + 1.",
      "Quadratic sequence (constant SECOND difference 2a): Halve the second difference to get a (coefficient of n²), subtract an² from each term, then find the linear rule for the remainder!",
      "Worked example: 4, 9, 16, 25... (or 5, 11, 21, 35...): 1st diffs = 6, 10, 14; 2nd diff = 4 → a = 4/2 = 2, so start with 2n² (2, 8, 18, 32). Remainder = 3, 3, 3, 3 → uₙ = 2n² + 3."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-130",
    "subtopicId": "igcse-maths-2-3",
    "front": "2.3 Composite & Inverse Functions (Extended): What are the essential exam points to remember?",
    "backBullets": [
      "Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)!",
      "Worked example: If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)².",
      "Inverse function f⁻¹(x) reverses f(x): (1) Write y = f(x), (2) Rearrange to make x the subject, (3) Replace y with x. Example: y = (3x − 1)/4 → 4y + 1 = 3x → f⁻¹(x) = (4x + 1)/3."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-131",
    "subtopicId": "igcse-maths-2-3",
    "front": "2.3 Introduction to Differentiation (CIE 0580 / Edexcel 4MA1 Extended): What are the essential exam points to remember?",
    "backBullets": [
      "The derivative dy/dx gives the exact gradient function of a curve y = f(x) at any x-coordinate.",
      "Power rule: If y = axⁿ, then dy/dx = anxⁿ⁻¹. The derivative of any constant is 0 (d/dx(c) = 0).",
      "Worked example: For y = x³ − 3x² − 9x + 4, dy/dx = 3x² − 6x − 9."
    ],
    "hint": "Power rule: Multiply by the old power, then subtract 1 from the power! Minimum has positive smile (d²y/dx² > 0); Maximum has negative frown (d²y/dx² < 0)."
  },
  {
    "id": "igcse-maths-fc-extra-132",
    "subtopicId": "igcse-maths-2-3",
    "front": "Define: Quadratic sequence (2.3)",
    "backBullets": [
      "Sequence with a constant second difference 2a and nth term an² + bn + c."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-133",
    "subtopicId": "igcse-maths-3-1",
    "front": "3.1 Gradient, Midpoint & Length of a Line Segment: What are the essential exam points to remember?",
    "backBullets": [
      "Given two points A(x₁, y₁) and B(x₂, y₂):",
      "Gradient: m = (y₂ − y₁) ÷ (x₂ − x₁). Positive m slopes uphill left-to-right; negative m slopes downhill.",
      "Midpoint M: ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2) — simply the average of the x’s and average of the y’s."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-134",
    "subtopicId": "igcse-maths-3-1",
    "front": "3.1 Equation of a Straight Line (y = mx + c): What are the essential exam points to remember?",
    "backBullets": [
      "In y = mx + c, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c!",
      "Finding the line through (2, 5) and (6, 17): First find m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Substitute (2, 5) into y = 3x + c → 5 = 6 + c → c = −1 → y = 3x − 1."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-135",
    "subtopicId": "igcse-maths-3-1",
    "front": "3.1 Parallel Lines, Perpendicular Lines & Perpendicular Bisectors: What are the essential exam points to remember?",
    "backBullets": [
      "Parallel lines have EQUAL gradients: m₁ = m₂.",
      "Perpendicular lines satisfy m₁ × m₂ = −1, so m₂ = −1 ÷ m₁ (the negative reciprocal: flip the fraction and flip the sign! E.g., 2/3 → −3/2; −4 → +1/4).",
      "Perpendicular bisector of segment AB (a classic CIE Extended 4-mark question): (1) Find midpoint M of AB, (2) Find gradient m_AB, (3) Take negative reciprocal m_perp = −1/m_AB, (4) Substitute M into y = m_perp x + c to find c."
    ],
    "hint": "Perpendicular gradient = Flip the fraction AND flip the sign!"
  },
  {
    "id": "igcse-maths-fc-extra-136",
    "subtopicId": "igcse-maths-3-1",
    "front": "Define: Gradient (3.1)",
    "backBullets": [
      "Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-137",
    "subtopicId": "igcse-maths-3-1",
    "front": "Define: Perpendicular lines (3.1)",
    "backBullets": [
      "Lines intersecting at 90° whose gradients multiply to −1 (m₁m₂ = −1)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-138",
    "subtopicId": "igcse-maths-4-1",
    "front": "4.1 Parallel Lines & Polygon Angle Rules: What are the essential exam points to remember?",
    "backBullets": [
      "Parallel line angle pairs: Alternate angles (Z-shape) are EQUAL; Corresponding angles (F-shape) are EQUAL; Co-interior / allied angles (C-shape) sum to 180°.",
      "For ANY n-sided polygon: Sum of interior angles = (n − 2) × 180°. Sum of ALL exterior angles = 360° (always!).",
      "For a REGULAR n-sided polygon: Each exterior angle = 360° ÷ n, and Interior angle + Exterior angle = 180°. Example: Regular octagon (n = 8) has exterior angle 360/8 = 45° and interior angle 135°."
    ],
    "hint": "Always find the EXTERIOR angle (360° ÷ n) first — it is far faster than the interior formula!"
  },
  {
    "id": "igcse-maths-fc-extra-139",
    "subtopicId": "igcse-maths-4-1",
    "front": "4.1 Three-Figure Bearings: What are the essential exam points to remember?",
    "backBullets": [
      "Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°).",
      "The wording \"bearing of B FROM A\" means stand at A, draw a North line at A, and turn clockwise until pointing to B.",
      "Back bearing (of A from B): Add 180° if the original bearing < 180°, or subtract 180° if ≥ 180° (follows from co-interior angles between parallel North lines)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-140",
    "subtopicId": "igcse-maths-4-1",
    "front": "4.1 Congruence & Similar Shapes (Length, Area & Volume Scale Factors): What are the essential exam points to remember?",
    "backBullets": [
      "Two triangles are CONGRUENT (identical size & shape) if they satisfy SSS, SAS, ASA/AAS, or RHS (Right angle, Hypotenuse, Side). Note: AAA proves similarity, NOT congruence!",
      "Similar shapes have identical angles and proportional sides with linear scale factor k = L₂ ÷ L₁.",
      "Crucial Extended rule: Length scale factor = k → Area scale factor = k² → Volume scale factor = k³!"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-141",
    "subtopicId": "igcse-maths-4-1",
    "front": "Define: Bearing (4.1)",
    "backBullets": [
      "Direction measured clockwise from North and expressed as a three-figure angle (000°–359°)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-142",
    "subtopicId": "igcse-maths-4-2",
    "front": "4.2 Centre, Semicircle & Same-Segment Theorems: What are the essential exam points to remember?",
    "backBullets": [
      "Theorem 1 (Angle at the centre): The angle subtended by an arc at the centre is TWICE the angle subtended at the circumference.",
      "Theorem 2 (Angle in a semicircle): The angle subtended by a diameter at the circumference is ALWAYS 90°.",
      "Theorem 3 (Angles in the same segment): Angles subtended by the same chord/arc at the circumference in the same segment are EQUAL (butterfly/bow-tie shape)."
    ],
    "hint": "Always look for hidden ISOSCELES TRIANGLES formed by two radii (both sides = r, so base angles are equal)!"
  },
  {
    "id": "igcse-maths-fc-extra-143",
    "subtopicId": "igcse-maths-4-2",
    "front": "4.2 Cyclic Quadrilaterals & Tangent Rules: What are the essential exam points to remember?",
    "backBullets": [
      "Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°.",
      "Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at 90°.",
      "Theorem 7 (Two tangents from an external point): Two tangents drawn to a circle from the same external point P are EQUAL in length (PA = PB), creating two congruent right-angled triangles with the centre."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-144",
    "subtopicId": "igcse-maths-4-2",
    "front": "4.2 The Alternate Segment Theorem: What are the essential exam points to remember?",
    "backBullets": [
      "Theorem 8 (Alternate Segment Theorem): The angle between a tangent and a chord drawn from the point of contact is EQUAL to the angle subtended by that chord in the alternate (opposite) segment.",
      "Exam phrasing tip: Always write the FULL formal theorem reason in proof questions (e.g., \"Angle in a semicircle is 90°\" or \"Opposite angles in a cyclic quadrilateral sum to 180°\") — vague phrases like \"Z-angles\" or \"arrow rule\" get ZERO reason marks!"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-145",
    "subtopicId": "igcse-maths-4-2",
    "front": "Define: Cyclic quadrilateral (4.2)",
    "backBullets": [
      "Four-sided shape inscribed in a circle whose opposite angles add to 180°."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-146",
    "subtopicId": "igcse-maths-4-2",
    "front": "Define: Alternate Segment Theorem (4.2)",
    "backBullets": [
      "Angle between tangent and chord equals the inscribed angle in the opposite segment."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-147",
    "subtopicId": "igcse-maths-5-1",
    "front": "5.1 2D Areas, Arc Length & Sector Area: What are the essential exam points to remember?",
    "backBullets": [
      "Trapezium area = ½(a + b) × h (average of parallel sides × perpendicular height). Circle circumference = 2πr = πd; Circle area = πr².",
      "Sector of angle θ° and radius r: Arc length = (θ ÷ 360) × 2πr; Sector area = (θ ÷ 360) × πr².",
      "Perimeter of a sector = Arc length + 2r (don’t forget the two straight radii!)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-148",
    "subtopicId": "igcse-maths-5-1",
    "front": "5.1 Volume & Surface Area of 3D Solids: What are the essential exam points to remember?",
    "backBullets": [
      "Any uniform Prism: Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr².",
      "Pyramid: Volume = ⅓ × Base area × perpendicular height. Cone: Volume = ⅓πr²h; Curved surface area = πrl (where slant height l = √(r² + h²)); Total SA = πrl + πr².",
      "Sphere: Volume = (4/3)πr³; Surface area = 4πr². Solid Hemisphere: Volume = (2/3)πr³; Total SA = 2πr² (curved) + πr² (flat circular base) = 3πr²!"
    ],
    "hint": "A solid hemisphere has Total Surface Area = 3πr² (half of 4πr² = 2πr² PLUS the flat circular bottom πr²)!"
  },
  {
    "id": "igcse-maths-fc-extra-149",
    "subtopicId": "igcse-maths-5-1",
    "front": "5.1 Unit Conversions & Frustums: What are the essential exam points to remember?",
    "backBullets": [
      "Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³.",
      "A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone).",
      "When melting and recasting metal from one 3D shape into another (e.g., spheres melted into a cylinder), total VOLUME is conserved: equate V_before = V_after and cancel π."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-150",
    "subtopicId": "igcse-maths-5-1",
    "front": "Define: Sector (5.1)",
    "backBullets": [
      "Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr²."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-151",
    "subtopicId": "igcse-maths-5-1",
    "front": "Define: Frustum (5.1)",
    "backBullets": [
      "Lower portion of a cone or pyramid remaining after slicing off the top parallel to the base."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-152",
    "subtopicId": "igcse-maths-6-1",
    "front": "6.1 Pythagoras’ Theorem (2D & 3D): What are the essential exam points to remember?",
    "backBullets": [
      "In any right-angled triangle, a² + b² = c², where c is always the hypotenuse (longest side opposite the 90° angle).",
      "Finding the longest side: ADD the squares (c = √(a² + b²)). Finding a shorter side: SUBTRACT the squares (a = √(c² − b²)).",
      "3D Space Diagonal of a cuboid with dimensions l, w, h: d = √(l² + w² + h²). Worked example: For a 6 × 8 × 10 cm box, base diagonal = √(6² + 8²) = 10 cm, space diagonal = √(10² + 10²) = √200 = 10√2 ≈ 14.1 cm."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-153",
    "subtopicId": "igcse-maths-6-1",
    "front": "6.1 Right-Angled Trigonometry (SOHCAHTOA): What are the essential exam points to remember?",
    "backBullets": [
      "Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ).",
      "SOH: sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A.",
      "Finding a missing angle: use inverse functions sin⁻¹, cos⁻¹, or tan⁻¹ on your calculator (always check calculator is in DEGREE mode \"D\", not radians \"R\"!)."
    ],
    "hint": "SOH-CAH-TOA + exact sin table: sin(0°, 30°, 45°, 60°, 90°) = √0/2, √1/2, √2/2, √3/2, √4/2!"
  },
  {
    "id": "igcse-maths-fc-extra-154",
    "subtopicId": "igcse-maths-6-1",
    "front": "6.1 Angles of Elevation, Depression & 3D Trigonometry: What are the essential exam points to remember?",
    "backBullets": [
      "Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!).",
      "For 3D trigonometry (angle between a line and a plane): drop a perpendicular from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal.",
      "Keep UNROUNDED intermediate values in your calculator memory (or exact surd form like √100) until the final answer to avoid premature rounding error!"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-155",
    "subtopicId": "igcse-maths-6-1",
    "front": "Define: Hypotenuse (6.1)",
    "backBullets": [
      "Longest side of a right-angled triangle, opposite the right angle."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-156",
    "subtopicId": "igcse-maths-6-1",
    "front": "Define: Angle of elevation (6.1)",
    "backBullets": [
      "Angle measured upward from a horizontal line to an observer’s line of sight."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-157",
    "subtopicId": "igcse-maths-6-2",
    "front": "6.2 The Sine Rule (and Ambiguous Case): What are the essential exam points to remember?",
    "backBullets": [
      "Use the Sine Rule whenever you have a MATCHING OPPOSITE PAIR (one side and its opposite angle):",
      "For a missing side: a / sin A = b / sin B = c / sin C. For a missing angle: sin A / a = sin B / b (put the unknown on TOP!).",
      "Worked example: Side a = 9 cm opposite A = 40°, find side b opposite B = 75° → b = (9 × sin 75°) ÷ sin 40° = 13.5 cm (3 s.f.)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-158",
    "subtopicId": "igcse-maths-6-2",
    "front": "6.2 The Cosine Rule: What are the essential exam points to remember?",
    "backBullets": [
      "Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known).",
      "Finding a missing side (SAS): a² = b² + c² − 2bc cos A (remember to take the square root at the end!).",
      "Finding a missing angle (SSS): cos A = (b² + c² − a²) ÷ (2bc). Note: if cos A is negative, cos⁻¹ automatically gives the correct obtuse angle!"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-159",
    "subtopicId": "igcse-maths-6-2",
    "front": "6.2 Area of Any Triangle & Solving Trig Equations (0° ≤ x ≤ 360°): What are the essential exam points to remember?",
    "backBullets": [
      "Area of any triangle using two sides and their INCLUDED angle: Area = ½ × a × b × sin C.",
      "Trigonometric symmetry on 0° ≤ x ≤ 360° (Extended):",
      "For sin x = k: second solution is 180° − x₁ (positive in Q1 & Q2). Example: sin x = 0.5 → x = 30° and 150°."
    ],
    "hint": "Decision tree: Right-angled? → SOHCAHTOA. Opposite side-angle pair? → Sine Rule. SAS or SSS? → Cosine Rule!"
  },
  {
    "id": "igcse-maths-fc-extra-160",
    "subtopicId": "igcse-maths-6-2",
    "front": "Define: Sine Rule (6.2)",
    "backBullets": [
      "a / sin A = b / sin B = c / sin C for any triangle."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-161",
    "subtopicId": "igcse-maths-7-1",
    "front": "7.1 Column Vectors & Magnitude: What are the essential exam points to remember?",
    "backBullets": [
      "A column vector (x / y) represents horizontal shift x (right +, left −) and vertical shift y (up +, down −).",
      "Magnitude (length) of vector v = (x / y) is |v| = √(x² + y²). Example: |(3 / −4)| = √(3² + (−4)²) = √25 = 5.",
      "Vector algebra: Add/subtract components directly; multiply both components by any scalar k. Reversing direction negates the vector: BA = −AB."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-162",
    "subtopicId": "igcse-maths-7-1",
    "front": "7.1 Vector Geometry, Parallelism & Collinearity Proofs: What are the essential exam points to remember?",
    "backBullets": [
      "Triangle rule for paths: To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a (\"destination minus start\").",
      "Dividing a line in ratio m : n: If point P divides AB in ratio 2 : 3, then AP = (2/5)AB and OP = OA + (2/5)AB.",
      "Proving two vectors are PARALLEL: Show that one vector is a non-zero scalar multiple of the other (e.g., XY = 3(a + b) and PQ = 2(a + b), so XY = 1.5 PQ → parallel)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-163",
    "subtopicId": "igcse-maths-7-1",
    "front": "7.1 The Four Geometric Transformations: What are the essential exam points to remember?",
    "backBullets": [
      "When describing a single transformation fully, always state the EXACT required details:",
      "Translation: state \"Translation\" + column vector (x / y).",
      "Reflection: state \"Reflection\" + exact equation of the mirror line (e.g., y = x, x = −1, y = 2)."
    ],
    "hint": "Never describe a single transformation using TWO combined moves — if the exam says \"single transformation\", check whether it is a single rotation or negative enlargement!"
  },
  {
    "id": "igcse-maths-fc-extra-164",
    "subtopicId": "igcse-maths-7-1",
    "front": "Define: Position vector (7.1)",
    "backBullets": [
      "Vector OA starting at the origin O(0, 0) and ending at point A."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-165",
    "subtopicId": "igcse-maths-7-1",
    "front": "Define: Collinear points (7.1)",
    "backBullets": [
      "Points lying on the same straight line (parallel connecting vectors sharing a common point)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-166",
    "subtopicId": "igcse-maths-8-1",
    "front": "8.1 Probability Rules & Tree Diagrams: What are the essential exam points to remember?",
    "backBullets": [
      "Every set of branches radiating from a single node MUST sum to 1 (P(A′) = 1 − P(A)).",
      "Multiply ALONG the branches for \"AND\" (consecutive events): P(A and B) = P(A) × P(B | A).",
      "ADD down the final outcome column for \"OR\" (mutually exclusive routes): P(exactly one win) = P(W, L) + P(L, W)."
    ],
    "hint": "Multiply ACROSS (AND), Add DOWN (OR)!"
  },
  {
    "id": "igcse-maths-fc-extra-167",
    "subtopicId": "igcse-maths-8-1",
    "front": "8.1 Conditional Probability (Without Replacement): What are the essential exam points to remember?",
    "backBullets": [
      "When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch.",
      "Worked example: A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15.",
      "P(different colours) = P(R, B) + P(B, R) = (4/10)(6/9) + (6/10)(4/9) = 48/90 = 8/15."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-168",
    "subtopicId": "igcse-maths-8-1",
    "front": "8.1 Venn Diagrams & Set Notation: What are the essential exam points to remember?",
    "backBullets": [
      "Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A.",
      "Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!",
      "Conditional probability from a Venn diagram: P(A | B) = \"probability of A GIVEN B\" = n(A ∩ B) ÷ n(B). Only divide by the restricted total n(B), NOT the universal set!"
    ]
  },
  {
    "id": "igcse-maths-fc-extra-169",
    "subtopicId": "igcse-maths-8-1",
    "front": "Define: Mutually exclusive (8.1)",
    "backBullets": [
      "Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-170",
    "subtopicId": "igcse-maths-8-1",
    "front": "Define: Independent events (8.1)",
    "backBullets": [
      "Events where the outcome of one does not affect the probability of the other: P(A ∩ B) = P(A) × P(B)."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-171",
    "subtopicId": "igcse-maths-8-2",
    "front": "8.2 Estimated Mean & Grouped Frequency Tables: What are the essential exam points to remember?",
    "backBullets": [
      "For grouped continuous data, calculate the MIDPOINT (x) of each class interval, multiply by frequency (f × x), then compute: Estimated Mean = Σ(fx) ÷ Σf.",
      "It is an \"estimate\" because we do not know the exact individual values inside each interval and assume they are evenly distributed around each midpoint.",
      "Modal class = interval with the highest frequency (for equal widths). Class containing the median = find the ((n + 1)/2)th value using a running cumulative frequency column."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-172",
    "subtopicId": "igcse-maths-8-2",
    "front": "8.2 Cumulative Frequency Curves & Box Plots: What are the essential exam points to remember?",
    "backBullets": [
      "Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0.",
      "For total frequency N: Median (Q₂) is read across from 50% (0.5N); Lower Quartile (Q₁) from 25% (0.25N); Upper Quartile (Q₃) from 75% (0.75N).",
      "Interquartile Range: IQR = Q₃ − Q₁ (measures spread of the middle 50% and ignores extreme outliers)."
    ],
    "hint": "Plot Midpoints for Mean/Frequency Polygons; plot UPPER endpoints for Cumulative Frequency!"
  },
  {
    "id": "igcse-maths-fc-extra-173",
    "subtopicId": "igcse-maths-8-2",
    "front": "8.2 Histograms & Frequency Density: What are the essential exam points to remember?",
    "backBullets": [
      "Histograms display continuous grouped data with UNEQUAL class widths. The vertical axis is FREQUENCY DENSITY (NOT frequency!).",
      "Key formula: Frequency Density = Frequency ÷ Class Width. Rearranged: Frequency = Frequency Density × Class Width = AREA of each bar!",
      "Worked example: A bar spans 20 ≤ t < 35 (width = 15) with frequency density 2.4. Frequency in this interval = 15 × 2.4 = 36."
    ]
  },
  {
    "id": "igcse-maths-fc-extra-174",
    "subtopicId": "igcse-maths-8-2",
    "front": "Define: Interquartile range (IQR) (8.2)",
    "backBullets": [
      "Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations."
    ]
  }
];

export const IGCSE_MATHS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-igcse-maths-topic-1",
    "slug": "topic-1-number",
    "title": "Topic 1: Number — Complete Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Number",
    "summary": "One-page revision summary covering 1.1 Fractions, Percentages, Compound Interest & Reverse Percentages; 1.2 Indices, Surds, Standard Form & Upper/Lower Bounds; 1.3 Ratio, Direct Proportion & Inverse Proportion.",
    "accentColor": "#8d22cc",
    "sections": [
      {
        "heading": "1.1 Fractions, Percentages, Compound Interest & Reverse Percentages",
        "formula": "A = P(1 ± r/100)ⁿ  |  Original = Final ÷ Multiplier",
        "points": [
          "Convert recurring decimals to simplified fractions algebraically.",
          "Use A = P(1 ± r/100)ⁿ for compound interest and depreciation."
        ]
      },
      {
        "heading": "1.2 Indices, Surds, Standard Form & Upper/Lower Bounds",
        "formula": "a^(m/n) = (ⁿ√a)ᵐ  |  Bounds: ±0.5 × rounding unit  |  y = kx^n or k/x^n",
        "points": [
          "Evaluate negative and fractional indices without a calculator.",
          "Simplify surds and rationalise both single-term and two-term denominators.",
          "Tip: Fractional powers: \"Flower Power\" — the denominator is the ROOT (underground), the numerator is the POWER (up top)!"
        ]
      },
      {
        "heading": "1.3 Ratio, Direct Proportion & Inverse Proportion",
        "formula": "A = P(1 ± r/100)ⁿ  |  Original = Final ÷ Multiplier",
        "points": [
          "Solve ratio sharing, ratio difference, and combined three-part ratio problems.",
          "Set up and solve direct proportion formulas (y = kx, kx², k√x) and inverse proportion formulas (y = k/x, k/x²)."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-2",
    "slug": "topic-2-algebra-graphs",
    "title": "Topic 2: Algebra & Graphs — Complete Cheat Sheet",
    "topicNumber": 2,
    "topicName": "Algebra & Graphs",
    "summary": "One-page revision summary covering 2.1 Expanding, Factorising & Solving Quadratic Equations; 2.2 Simultaneous Equations (Linear & Quadratic) & Inequalities; 2.3 Sequences, Functions (Composite/Inverse) & Differentiation.",
    "accentColor": "#1a96f3",
    "sections": [
      {
        "heading": "2.1 Expanding, Factorising & Solving Quadratic Equations",
        "formula": "x = (−b ± √(b² − 4ac)) ÷ 2a  |  (x + p)² + q vertex (−p, q)",
        "points": [
          "Factorise quadratics with a = 1, a > 1, and difference of two squares.",
          "Apply the quadratic formula accurately with negative coefficients using brackets."
        ]
      },
      {
        "heading": "2.2 Simultaneous Equations (Linear & Quadratic) & Inequalities",
        "formula": "uₙ = a + (n − 1)d  |  dy/dx(axⁿ) = anxⁿ⁻¹ (stationary: dy/dx = 0)",
        "points": [
          "Solve linear simultaneous equations accurately and verify both values.",
          "Solve linear-quadratic simultaneous equations by substitution and pair (x, y) solutions clearly.",
          "Tip: SSS = Same Signs Subtract; Different Signs Add!"
        ]
      },
      {
        "heading": "2.3 Sequences, Functions (Composite/Inverse) & Differentiation",
        "formula": "x = (−b ± √(b² − 4ac)) ÷ 2a  |  (x + p)² + q vertex (−p, q)",
        "points": [
          "Find the nth term of arithmetic, geometric, and quadratic sequences.",
          "Evaluate composite functions fg(x) right-to-left and derive inverse functions f⁻¹(x)."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-3",
    "slug": "topic-3-coordinate-geometry",
    "title": "Topic 3: Coordinate Geometry — Complete Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Coordinate Geometry",
    "summary": "One-page revision summary covering 3.1 Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "3.1 Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars",
        "formula": "m = (y₂ − y₁)/(x₂ − x₁)  |  M = ((x₁+x₂)/2, (y₁+y₂)/2)",
        "points": [
          "Calculate gradient, midpoint, and distance between any two coordinate pairs.",
          "Rearrange ax + by = c into y = mx + c to read off gradient and y-intercept."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-4",
    "slug": "topic-4-geometry-circle-theorems",
    "title": "Topic 4: Geometry & Circle Theorems — Complete Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Geometry & Circle Theorems",
    "summary": "One-page revision summary covering 4.1 Angles, Polygons, Bearings, Similarity & Congruence; 4.2 Circle Theorems & Alternate Segment Theorem.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "4.1 Angles, Polygons, Bearings, Similarity & Congruence",
        "formula": "Interior sum = (n − 2) × 180°  |  Exterior angle = 360° ÷ n",
        "points": [
          "Calculate interior and exterior angles of regular and irregular polygons.",
          "Measure and calculate bearings and back bearings using co-interior angles.",
          "Tip: Always find the EXTERIOR angle (360° ÷ n) first — it is far faster than the interior formula!"
        ]
      },
      {
        "heading": "4.2 Circle Theorems & Alternate Segment Theorem",
        "formula": "Similar shapes: Length k  →  Area k²  →  Volume k³",
        "points": [
          "Recall and apply all 8 circle theorems accurately in multi-step angle problems.",
          "Spot isosceles triangles formed by two radii immediately.",
          "Tip: Always look for hidden ISOSCELES TRIANGLES formed by two radii (both sides = r, so base angles are equal)!"
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-5",
    "slug": "topic-5-mensuration",
    "title": "Topic 5: Mensuration — Complete Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Mensuration",
    "summary": "One-page revision summary covering 5.1 Area, Arc Length, Sector Area, Surface Area & Volume.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "5.1 Area, Arc Length, Sector Area, Surface Area & Volume",
        "formula": "Arc = (θ/360)2πr  |  Sector Area = (θ/360)πr²  |  Trap = ½(a+b)h",
        "points": [
          "Calculate arc length, sector perimeter, and sector area in exact π form and decimals.",
          "Find volume and total surface area of prisms, cylinders, pyramids, cones, spheres, and hemispheres.",
          "Watch out: When asked for the PERIMETER of a sector, students often calculate only the curved arc length and forget to add the two straight radii (+ 2r)!"
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-6",
    "slug": "topic-6-trigonometry",
    "title": "Topic 6: Trigonometry — Complete Cheat Sheet",
    "topicNumber": 6,
    "topicName": "Trigonometry",
    "summary": "One-page revision summary covering 6.1 Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA); 6.2 Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles.",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "6.1 Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)",
        "formula": "a² + b² = c²  |  3D Diagonal = √(l² + w² + h²)  |  SOHCAHTOA",
        "points": [
          "Apply Pythagoras in 2D and 3D cuboids/pyramids.",
          "Find missing sides and angles using SOHCAHTOA and recall exact trig values for 30°, 45°, and 60°."
        ]
      },
      {
        "heading": "6.2 Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles",
        "formula": "a/sin A = b/sin B  |  a² = b² + c² − 2bc cos A  |  Area = ½ab sin C",
        "points": [
          "Choose correctly between SOHCAHTOA, Sine Rule, and Cosine Rule.",
          "Calculate triangle area using ½ab sin C and handle obtuse angles in the Sine Rule."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-7",
    "slug": "topic-7-vectors-transformations",
    "title": "Topic 7: Vectors & Transformations — Complete Cheat Sheet",
    "topicNumber": 7,
    "topicName": "Vectors & Transformations",
    "summary": "One-page revision summary covering 7.1 Column Vectors, Vector Geometry & Transformations.",
    "accentColor": "#db2777",
    "sections": [
      {
        "heading": "7.1 Column Vectors, Vector Geometry & Transformations",
        "formula": "|v| = √(x² + y²)  |  AB = OB − OA = b − a",
        "points": [
          "Calculate vector magnitudes and express geometric paths using ratio fractions.",
          "Write formal proofs for parallel vectors and collinear points."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-maths-topic-8",
    "slug": "topic-8-probability-statistics",
    "title": "Topic 8: Probability & Statistics — Complete Cheat Sheet",
    "topicNumber": 8,
    "topicName": "Probability & Statistics",
    "summary": "One-page revision summary covering 8.1 Probability Trees, Venn Diagrams & Conditional Probability; 8.2 Averages, Cumulative Frequency, Box Plots & Histograms.",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "8.1 Probability Trees, Venn Diagrams & Conditional Probability",
        "formula": "P(A | B) = n(A ∩ B) ÷ n(B)  |  Mean = Σ(fx) ÷ Σf",
        "points": [
          "Construct and evaluate both independent and without-replacement probability trees.",
          "Use P(at least one) = 1 − P(none) cleanly.",
          "Tip: Multiply ACROSS (AND), Add DOWN (OR)!"
        ]
      },
      {
        "heading": "8.2 Averages, Cumulative Frequency, Box Plots & Histograms",
        "formula": "IQR = Q₃ − Q₁  |  Frequency Density = Frequency ÷ Class Width",
        "points": [
          "Calculate estimated mean from grouped tables using midpoints and Σ(fx) ÷ Σf.",
          "Plot cumulative frequency at upper boundaries, read off median/Q₁/Q₃/IQR, and compare distributions using both median and IQR.",
          "Watch out: Always divide Σ(fx) by the TOTAL FREQUENCY (Σf), NEVER by the number of rows in the table!"
        ]
      }
    ]
  }
];

export const IGCSE_MATHS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "igcse-maths-exam-1",
    "subtopicId": "igcse-maths-1-1",
    "number": 1,
    "stimulus": "Structured exam question on Topic 1.1 (Fractions, Percentages, Compound Interest & Reverse Percentages). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-1a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Fractions, Percentages, Compound Interest & Reverse Percentages?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Convert recurring decimals to simplified fractions algebraically.",
          "It violates the core rule of Fractions, Percentages, Compound Interest & Reverse Percentages by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Decimal multiplier.",
          "It assumes Compound interest remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-1b",
        "label": "b)",
        "prompt": "Define \"Decimal multiplier\" and explain the key principles covered in \"Decimal Multipliers, Simple & Compound Interest\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Decimal multiplier: Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85). Furthermore, A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82. Simple interest adds the SAME fixed amount every year: I = (P × R × T) ÷ 100.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Decimal multiplier: Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: A decimal multiplier converts a percentage change into one multiplication: +12% → ×1.12; +3.5% → ×1.035; −18% → ×0.82."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Simple interest adds the SAME fixed amount every year: I = (P × R × T) ÷ 100."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-1c",
        "label": "c)",
        "prompt": "Apply \"Reverse Percentages\" to explain how examiners award full marks on Fractions, Percentages, Compound Interest & Reverse Percentages problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Use reverse percentages when you are given the FINAL amount AFTER a percentage increase or decrease and must recover the ORIGINAL 100% value. Method: Original = Final amount ÷ Decimal Multiplier. Avoid: NEVER find 15% of $510 and add it back — 15% of the reduced price is smaller than 15% of the original price. Always DIVIDE by 0.85!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Use reverse percentages when you are given the FINAL amount AFTER a percentage increase or decrease and must recover the ORIGINAL 100% value."
            },
            {
              "id": "mp2",
              "markDescription": "Method: Original = Final amount ÷ Decimal Multiplier."
            },
            {
              "id": "mp3",
              "markDescription": "NEVER find 15% of $510 and add it back — 15% of the reduced price is smaller than 15% of the original price. Always DIVIDE by 0.85!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-2",
    "subtopicId": "igcse-maths-1-2",
    "number": 2,
    "stimulus": "Structured exam question on Topic 1.2 (Indices, Surds, Standard Form & Upper/Lower Bounds). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-2a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Indices, Surds, Standard Form & Upper/Lower Bounds?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Evaluate negative and fractional indices without a calculator.",
          "It violates the core rule of Indices, Surds, Standard Form & Upper/Lower Bounds by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Standard form.",
          "It assumes Surd remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-2b",
        "label": "b)",
        "prompt": "Define \"Standard form\" and explain the key principles covered in \"Surds & Rationalising the Denominator\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Standard form: Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n. Furthermore, A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2. Collect like surds just like algebra: 5√3 + √12 = 5√3 + 2√3 = 7√3.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Standard form: Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: A surd is an irrational root such as √2, √3, or √5. Simplify by pulling out the LARGEST square factor: √72 = √(36 × 2) = 6√2."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Collect like surds just like algebra: 5√3 + √12 = 5√3 + 2√3 = 7√3."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-2c",
        "label": "c)",
        "prompt": "Apply \"Standard Form & Upper/Lower Bounds\" to explain how examiners award full marks on Indices, Surds, Standard Form & Upper/Lower Bounds problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 0.00045 = 4.5 × 10⁻⁴; (3 × 10⁵) × (4 × 10³) = 12 × 10⁸ = 1.2 × 10⁹. Bounds of a rounded measurement: Add and subtract HALF of the rounding unit. If L = 8.4 cm to 1 d.p. (unit 0.1), then 8.35 ≤ L < 8.45. Avoid: To maximise a fraction A/B, NEVER divide Upper(A) by Upper(B) — dividing by the SMALLEST possible denominator (Lower B) gives the largest answer!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Standard form writes any number as A × 10ⁿ where 1 ≤ A < 10 and n is an integer. Example: 0.00045 = 4.5 × 10⁻⁴; (3 × 10⁵) × (4 × 10³) = 12 × 10⁸ = 1.2 × 10⁹."
            },
            {
              "id": "mp2",
              "markDescription": "Bounds of a rounded measurement: Add and subtract HALF of the rounding unit. If L = 8.4 cm to 1 d.p. (unit 0.1), then 8.35 ≤ L < 8.45."
            },
            {
              "id": "mp3",
              "markDescription": "To maximise a fraction A/B, NEVER divide Upper(A) by Upper(B) — dividing by the SMALLEST possible denominator (Lower B) gives the largest answer!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-3",
    "subtopicId": "igcse-maths-1-3",
    "number": 3,
    "stimulus": "Structured exam question on Topic 1.3 (Ratio, Direct Proportion & Inverse Proportion). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-3a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Ratio, Direct Proportion & Inverse Proportion?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Solve ratio sharing, ratio difference, and combined three-part ratio problems.",
          "It violates the core rule of Ratio, Direct Proportion & Inverse Proportion by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Direct proportion.",
          "It assumes Inverse proportion remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-3b",
        "label": "b)",
        "prompt": "Define \"Direct proportion\" and explain the key principles covered in \"Direct Proportion (Algebraic Form)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Direct proportion: Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0). Furthermore, If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin). Direct proportion also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Direct proportion: Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Direct proportion also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-3c",
        "label": "c)",
        "prompt": "Apply \"Inverse Proportion\" to explain how examiners award full marks on Ratio, Direct Proportion & Inverse Proportion problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "If y is inversely proportional to x (y ∝ 1/x), then y = k ÷ x (so x × y = k is constant). As x doubles, y halves; the graph is a smooth hyperbola approaching both axes. Inverse square law (common in physics & Extended maths): y ∝ 1/x² → y = k ÷ x². Avoid: Read carefully whether y is proportional to x, x², x³, or √x — writing y = kx when the question states \"proportional to the square of x\" loses almost all method marks!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "If y is inversely proportional to x (y ∝ 1/x), then y = k ÷ x (so x × y = k is constant). As x doubles, y halves; the graph is a smooth hyperbola approaching both axes."
            },
            {
              "id": "mp2",
              "markDescription": "Inverse square law (common in physics & Extended maths): y ∝ 1/x² → y = k ÷ x²."
            },
            {
              "id": "mp3",
              "markDescription": "Read carefully whether y is proportional to x, x², x³, or √x — writing y = kx when the question states \"proportional to the square of x\" loses almost all method marks!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-4",
    "subtopicId": "igcse-maths-2-1",
    "number": 4,
    "stimulus": "Structured exam question on Topic 2.1 (Expanding, Factorising & Solving Quadratic Equations). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-4a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Expanding, Factorising & Solving Quadratic Equations?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Factorise quadratics with a = 1, a > 1, and difference of two squares.",
          "It violates the core rule of Expanding, Factorising & Solving Quadratic Equations by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Quadratic equation.",
          "It assumes Difference of two squares remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-4b",
        "label": "b)",
        "prompt": "Define \"Quadratic equation\" and explain the key principles covered in \"The Quadratic Formula\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Quadratic equation: Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0). Furthermore, When a question says \"give your answers to 2 decimal places\" or \"3 significant figures\", use the Quadratic Formula: x = (−b ± √(b² − 4ac)) ÷ (2a). Worked example: Solve 3x² − 5x − 4 = 0. Here a = 3, b = −5, c = −4. Discriminant b² − 4ac = (−5)² − 4(3)(−4) = 25 + 48 = 73.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Quadratic equation: Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When a question says \"give your answers to 2 decimal places\" or \"3 significant figures\", use the Quadratic Formula: x = (−b ± √(b² − 4ac)) ÷ (2a)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: Solve 3x² − 5x − 4 = 0. Here a = 3, b = −5, c = −4. Discriminant b² − 4ac = (−5)² − 4(3)(−4) = 25 + 48 = 73."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-4c",
        "label": "c)",
        "prompt": "Apply \"Completing the Square & Vertex (Turning Point)\" to explain how examiners award full marks on Expanding, Factorising & Solving Quadratic Equations problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "To write x² + bx + c in completed-square form (x + p)² + q: halve the coefficient of x so p = b/2, then subtract p² and add c. Worked example: x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "To write x² + bx + c in completed-square form (x + p)² + q: halve the coefficient of x so p = b/2, then subtract p² and add c."
            },
            {
              "id": "mp2",
              "markDescription": "Worked example: x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2."
            },
            {
              "id": "mp3",
              "markDescription": "Factorise quadratics with a = 1, a > 1, and difference of two squares."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-5",
    "subtopicId": "igcse-maths-2-2",
    "number": 5,
    "stimulus": "Structured exam question on Topic 2.2 (Simultaneous Equations (Linear & Quadratic) & Inequalities). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-5a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Simultaneous Equations (Linear & Quadratic) & Inequalities?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Solve linear simultaneous equations accurately and verify both values.",
          "It violates the core rule of Simultaneous Equations (Linear & Quadratic) & Inequalities by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Elimination method.",
          "It assumes Substitution method remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-5b",
        "label": "b)",
        "prompt": "Define \"Elimination method\" and explain the key principles covered in \"Non-Linear Simultaneous Equations (Substitution)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Elimination method: Adding or subtracting multiples of linear simultaneous equations to cancel one unknown. Furthermore, When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION. Step 1: Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Elimination method: Adding or subtracting multiples of linear simultaneous equations to cancel one unknown."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Step 1: Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-5c",
        "label": "c)",
        "prompt": "Apply \"Linear, Quadratic & Graphical Inequalities\" to explain how examiners award full marks on Simultaneous Equations (Linear & Quadratic) & Inequalities problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5). Quadratic inequalities: Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5)."
            },
            {
              "id": "mp2",
              "markDescription": "Quadratic inequalities: Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3."
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
    "id": "igcse-maths-exam-6",
    "subtopicId": "igcse-maths-2-3",
    "number": 6,
    "stimulus": "Structured exam question on Topic 2.3 (Sequences, Functions (Composite/Inverse) & Differentiation). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-6a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Sequences, Functions (Composite/Inverse) & Differentiation?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Find the nth term of arithmetic, geometric, and quadratic sequences.",
          "It violates the core rule of Sequences, Functions (Composite/Inverse) & Differentiation by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Quadratic sequence.",
          "It assumes Inverse function remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-6b",
        "label": "b)",
        "prompt": "Define \"Quadratic sequence\" and explain the key principles covered in \"Composite & Inverse Functions (Extended)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Quadratic sequence: Sequence with a constant second difference 2a and nth term an² + bn + c. Furthermore, Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)! Worked example: If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Quadratic sequence: Sequence with a constant second difference 2a and nth term an² + bn + c."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)!"
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)²."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-6c",
        "label": "c)",
        "prompt": "Apply \"Introduction to Differentiation (CIE 0580 / Edexcel 4MA1 Extended)\" to explain how examiners award full marks on Sequences, Functions (Composite/Inverse) & Differentiation problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "The derivative dy/dx gives the exact gradient function of a curve y = f(x) at any x-coordinate. Power rule: If y = axⁿ, then dy/dx = anxⁿ⁻¹. The derivative of any constant is 0 (d/dx(c) = 0).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "The derivative dy/dx gives the exact gradient function of a curve y = f(x) at any x-coordinate."
            },
            {
              "id": "mp2",
              "markDescription": "Power rule: If y = axⁿ, then dy/dx = anxⁿ⁻¹. The derivative of any constant is 0 (d/dx(c) = 0)."
            },
            {
              "id": "mp3",
              "markDescription": "Find the nth term of arithmetic, geometric, and quadratic sequences."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-7",
    "subtopicId": "igcse-maths-3-1",
    "number": 7,
    "stimulus": "Structured exam question on Topic 3.1 (Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-7a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate gradient, midpoint, and distance between any two coordinate pairs.",
          "It violates the core rule of Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Gradient.",
          "It assumes Perpendicular lines remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-7b",
        "label": "b)",
        "prompt": "Define \"Gradient\" and explain the key principles covered in \"Equation of a Straight Line (y = mx + c)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Gradient: Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁). Furthermore, In y = mx + c, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c! Finding the line through (2, 5) and (6, 17): First find m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Substitute (2, 5) into y = 3x + c → 5 = 6 + c → c = −1 → y = 3x − 1.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Gradient: Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: In y = mx + c, m is the gradient and c is the y-intercept (where x = 0). If given in implicit form like 2x + 4y = 12, rearrange to y = −0.5x + 3 BEFORE reading m and c!"
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Finding the line through (2, 5) and (6, 17): First find m = (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = 3. Substitute (2, 5) into y = 3x + c → 5 = 6 + c → c = −1 → y = 3x − 1."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-7c",
        "label": "c)",
        "prompt": "Apply \"Parallel Lines, Perpendicular Lines & Perpendicular Bisectors\" to explain how examiners award full marks on Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Parallel lines have EQUAL gradients: m₁ = m₂. Perpendicular lines satisfy m₁ × m₂ = −1, so m₂ = −1 ÷ m₁ (the negative reciprocal: flip the fraction and flip the sign! E.g., 2/3 → −3/2; −4 → +1/4).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Parallel lines have EQUAL gradients: m₁ = m₂."
            },
            {
              "id": "mp2",
              "markDescription": "Perpendicular lines satisfy m₁ × m₂ = −1, so m₂ = −1 ÷ m₁ (the negative reciprocal: flip the fraction and flip the sign! E.g., 2/3 → −3/2; −4 → +1/4)."
            },
            {
              "id": "mp3",
              "markDescription": "Calculate gradient, midpoint, and distance between any two coordinate pairs."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-8",
    "subtopicId": "igcse-maths-4-1",
    "number": 8,
    "stimulus": "Structured exam question on Topic 4.1 (Angles, Polygons, Bearings, Similarity & Congruence). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-8a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Angles, Polygons, Bearings, Similarity & Congruence?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate interior and exterior angles of regular and irregular polygons.",
          "It violates the core rule of Angles, Polygons, Bearings, Similarity & Congruence by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Bearing.",
          "It assumes Congruence remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-8b",
        "label": "b)",
        "prompt": "Define \"Bearing\" and explain the key principles covered in \"Three-Figure Bearings\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Bearing: Direction measured clockwise from North and expressed as a three-figure angle (000°–359°). Furthermore, Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°). The wording \"bearing of B FROM A\" means stand at A, draw a North line at A, and turn clockwise until pointing to B.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Bearing: Direction measured clockwise from North and expressed as a three-figure angle (000°–359°)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: The wording \"bearing of B FROM A\" means stand at A, draw a North line at A, and turn clockwise until pointing to B."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-8c",
        "label": "c)",
        "prompt": "Apply \"Congruence & Similar Shapes (Length, Area & Volume Scale Factors)\" to explain how examiners award full marks on Angles, Polygons, Bearings, Similarity & Congruence problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Two triangles are CONGRUENT (identical size & shape) if they satisfy SSS, SAS, ASA/AAS, or RHS (Right angle, Hypotenuse, Side). Note: AAA proves similarity, NOT congruence! Similar shapes have identical angles and proportional sides with linear scale factor k = L₂ ÷ L₁.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Two triangles are CONGRUENT (identical size & shape) if they satisfy SSS, SAS, ASA/AAS, or RHS (Right angle, Hypotenuse, Side). Note: AAA proves similarity, NOT congruence!"
            },
            {
              "id": "mp2",
              "markDescription": "Similar shapes have identical angles and proportional sides with linear scale factor k = L₂ ÷ L₁."
            },
            {
              "id": "mp3",
              "markDescription": "Always find the EXTERIOR angle (360° ÷ n) first — it is far faster than the interior formula!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-9",
    "subtopicId": "igcse-maths-4-2",
    "number": 9,
    "stimulus": "Structured exam question on Topic 4.2 (Circle Theorems & Alternate Segment Theorem). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-9a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Circle Theorems & Alternate Segment Theorem?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Recall and apply all 8 circle theorems accurately in multi-step angle problems.",
          "It violates the core rule of Circle Theorems & Alternate Segment Theorem by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Cyclic quadrilateral.",
          "It assumes Alternate Segment Theorem remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-9b",
        "label": "b)",
        "prompt": "Define \"Cyclic quadrilateral\" and explain the key principles covered in \"Cyclic Quadrilaterals & Tangent Rules\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Cyclic quadrilateral: Four-sided shape inscribed in a circle whose opposite angles add to 180°. Furthermore, Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°. Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at 90°.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Cyclic quadrilateral: Four-sided shape inscribed in a circle whose opposite angles add to 180°."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at 90°."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-9c",
        "label": "c)",
        "prompt": "Apply \"The Alternate Segment Theorem\" to explain how examiners award full marks on Circle Theorems & Alternate Segment Theorem problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Theorem 8 (Alternate Segment Theorem): The angle between a tangent and a chord drawn from the point of contact is EQUAL to the angle subtended by that chord in the alternate (opposite) segment. Exam phrasing tip: Always write the FULL formal theorem reason in proof questions (e.g., \"Angle in a semicircle is 90°\" or \"Opposite angles in a cyclic quadrilateral sum to 180°\") — vague phrases like \"Z-angles\" or \"arrow rule\" get ZERO reason marks!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Theorem 8 (Alternate Segment Theorem): The angle between a tangent and a chord drawn from the point of contact is EQUAL to the angle subtended by that chord in the alternate (opposite) segment."
            },
            {
              "id": "mp2",
              "markDescription": "Exam phrasing tip: Always write the FULL formal theorem reason in proof questions (e.g., \"Angle in a semicircle is 90°\" or \"Opposite angles in a cyclic quadrilateral sum to 180°\") — vague phrases like \"Z-angles\" or \"arrow rule\" get ZERO reason marks!"
            },
            {
              "id": "mp3",
              "markDescription": "Always look for hidden ISOSCELES TRIANGLES formed by two radii (both sides = r, so base angles are equal)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-10",
    "subtopicId": "igcse-maths-5-1",
    "number": 10,
    "stimulus": "Structured exam question on Topic 5.1 (Area, Arc Length, Sector Area, Surface Area & Volume). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-10a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Area, Arc Length, Sector Area, Surface Area & Volume?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate arc length, sector perimeter, and sector area in exact π form and decimals.",
          "It violates the core rule of Area, Arc Length, Sector Area, Surface Area & Volume by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Sector.",
          "It assumes Frustum remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-10b",
        "label": "b)",
        "prompt": "Define \"Sector\" and explain the key principles covered in \"Volume & Surface Area of 3D Solids\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Sector: Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr². Furthermore, Any uniform Prism: Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr². Pyramid: Volume = ⅓ × Base area × perpendicular height. Cone: Volume = ⅓πr²h; Curved surface area = πrl (where slant height l = √(r² + h²)); Total SA = πrl + πr².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Sector: Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr²."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Any uniform Prism: Volume = Cross-sectional area × length. Cylinder: Volume = πr²h; Curved surface area = 2πrh; Total surface area = 2πrh + 2πr²."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Pyramid: Volume = ⅓ × Base area × perpendicular height. Cone: Volume = ⅓πr²h; Curved surface area = πrl (where slant height l = √(r² + h²)); Total SA = πrl + πr²."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-10c",
        "label": "c)",
        "prompt": "Apply \"Unit Conversions & Frustums\" to explain how examiners award full marks on Area, Arc Length, Sector Area, Surface Area & Volume problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³. A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³."
            },
            {
              "id": "mp2",
              "markDescription": "A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone)."
            },
            {
              "id": "mp3",
              "markDescription": "Calculate arc length, sector perimeter, and sector area in exact π form and decimals."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-11",
    "subtopicId": "igcse-maths-6-1",
    "number": 11,
    "stimulus": "Structured exam question on Topic 6.1 (Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-11a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Apply Pythagoras in 2D and 3D cuboids/pyramids.",
          "It violates the core rule of Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA) by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Hypotenuse.",
          "It assumes Angle of elevation remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-11b",
        "label": "b)",
        "prompt": "Define \"Hypotenuse\" and explain the key principles covered in \"Right-Angled Trigonometry (SOHCAHTOA)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Hypotenuse: Longest side of a right-angled triangle, opposite the right angle. Furthermore, Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ). SOH: sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Hypotenuse: Longest side of a right-angled triangle, opposite the right angle."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: SOH: sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-11c",
        "label": "c)",
        "prompt": "Apply \"Angles of Elevation, Depression & 3D Trigonometry\" to explain how examiners award full marks on Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA) problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!). For 3D trigonometry (angle between a line and a plane): drop a perpendicular from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal. Avoid: Angle of depression is measured from the HORIZONTAL down to the line of sight — NEVER from the vertical cliff wall!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!)."
            },
            {
              "id": "mp2",
              "markDescription": "For 3D trigonometry (angle between a line and a plane): drop a perpendicular from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal."
            },
            {
              "id": "mp3",
              "markDescription": "Angle of depression is measured from the HORIZONTAL down to the line of sight — NEVER from the vertical cliff wall!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-12",
    "subtopicId": "igcse-maths-6-2",
    "number": 12,
    "stimulus": "Structured exam question on Topic 6.2 (Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-12a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Choose correctly between SOHCAHTOA, Sine Rule, and Cosine Rule.",
          "It violates the core rule of Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Sine Rule.",
          "It assumes Cosine Rule remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-12b",
        "label": "b)",
        "prompt": "Define \"Sine Rule\" and explain the key principles covered in \"The Cosine Rule\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Sine Rule: a / sin A = b / sin B = c / sin C for any triangle. Furthermore, Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known). Finding a missing side (SAS): a² = b² + c² − 2bc cos A (remember to take the square root at the end!).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Sine Rule: a / sin A = b / sin B = c / sin C for any triangle."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Finding a missing side (SAS): a² = b² + c² − 2bc cos A (remember to take the square root at the end!)."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-12c",
        "label": "c)",
        "prompt": "Apply \"Area of Any Triangle & Solving Trig Equations (0° ≤ x ≤ 360°)\" to explain how examiners award full marks on Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Area of any triangle using two sides and their INCLUDED angle: Area = ½ × a × b × sin C. Trigonometric symmetry on 0° ≤ x ≤ 360° (Extended):",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Area of any triangle using two sides and their INCLUDED angle: Area = ½ × a × b × sin C."
            },
            {
              "id": "mp2",
              "markDescription": "Trigonometric symmetry on 0° ≤ x ≤ 360° (Extended):"
            },
            {
              "id": "mp3",
              "markDescription": "Choose correctly between SOHCAHTOA, Sine Rule, and Cosine Rule."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-13",
    "subtopicId": "igcse-maths-7-1",
    "number": 13,
    "stimulus": "Structured exam question on Topic 7.1 (Column Vectors, Vector Geometry & Transformations). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-13a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Column Vectors, Vector Geometry & Transformations?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate vector magnitudes and express geometric paths using ratio fractions.",
          "It violates the core rule of Column Vectors, Vector Geometry & Transformations by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Position vector.",
          "It assumes Collinear points remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-13b",
        "label": "b)",
        "prompt": "Define \"Position vector\" and explain the key principles covered in \"Vector Geometry, Parallelism & Collinearity Proofs\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Position vector: Vector OA starting at the origin O(0, 0) and ending at point A. Furthermore, Triangle rule for paths: To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a (\"destination minus start\"). Dividing a line in ratio m : n: If point P divides AB in ratio 2 : 3, then AP = (2/5)AB and OP = OA + (2/5)AB.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Position vector: Vector OA starting at the origin O(0, 0) and ending at point A."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Triangle rule for paths: To travel from A to C via O, write AC = AO + OC = −OA + OC = c − a (\"destination minus start\")."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Dividing a line in ratio m : n: If point P divides AB in ratio 2 : 3, then AP = (2/5)AB and OP = OA + (2/5)AB."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-13c",
        "label": "c)",
        "prompt": "Apply \"The Four Geometric Transformations\" to explain how examiners award full marks on Column Vectors, Vector Geometry & Transformations problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "When describing a single transformation fully, always state the EXACT required details: Translation: state \"Translation\" + column vector (x / y).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "When describing a single transformation fully, always state the EXACT required details:"
            },
            {
              "id": "mp2",
              "markDescription": "Translation: state \"Translation\" + column vector (x / y)."
            },
            {
              "id": "mp3",
              "markDescription": "Calculate vector magnitudes and express geometric paths using ratio fractions."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-14",
    "subtopicId": "igcse-maths-8-1",
    "number": 14,
    "stimulus": "Structured exam question on Topic 8.1 (Probability Trees, Venn Diagrams & Conditional Probability). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-14a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Probability Trees, Venn Diagrams & Conditional Probability?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Construct and evaluate both independent and without-replacement probability trees.",
          "It violates the core rule of Probability Trees, Venn Diagrams & Conditional Probability by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Mutually exclusive.",
          "It assumes Independent events remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-14b",
        "label": "b)",
        "prompt": "Define \"Mutually exclusive\" and explain the key principles covered in \"Conditional Probability (Without Replacement)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Mutually exclusive: Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B). Furthermore, When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch. Worked example: A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Mutually exclusive: Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Worked example: A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-14c",
        "label": "c)",
        "prompt": "Apply \"Venn Diagrams & Set Notation\" to explain how examiners award full marks on Probability Trees, Venn Diagrams & Conditional Probability problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A. Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A."
            },
            {
              "id": "mp2",
              "markDescription": "Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!"
            },
            {
              "id": "mp3",
              "markDescription": "Multiply ACROSS (AND), Add DOWN (OR)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-exam-15",
    "subtopicId": "igcse-maths-8-2",
    "number": 15,
    "stimulus": "Structured exam question on Topic 8.2 (Averages, Cumulative Frequency, Box Plots & Histograms). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-maths-exam-15a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Averages, Cumulative Frequency, Box Plots & Histograms?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate estimated mean from grouped tables using midpoints and Σ(fx) ÷ Σf.",
          "It violates the core rule of Averages, Cumulative Frequency, Box Plots & Histograms by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Interquartile range (IQR).",
          "It assumes Frequency density remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-maths-exam-15b",
        "label": "b)",
        "prompt": "Define \"Interquartile range (IQR)\" and explain the key principles covered in \"Cumulative Frequency Curves & Box Plots\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Interquartile range (IQR): Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations. Furthermore, Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0. For total frequency N: Median (Q₂) is read across from 50% (0.5N); Lower Quartile (Q₁) from 25% (0.25N); Upper Quartile (Q₃) from 75% (0.75N).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Interquartile range (IQR): Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Plot cumulative frequencies against the UPPER BOUNDARY of each class interval (never the midpoint!) and join with a smooth S-shaped curve starting from the lowest class boundary at y = 0."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: For total frequency N: Median (Q₂) is read across from 50% (0.5N); Lower Quartile (Q₁) from 25% (0.25N); Upper Quartile (Q₃) from 75% (0.75N)."
            }
          ]
        }
      },
      {
        "id": "igcse-maths-exam-15c",
        "label": "c)",
        "prompt": "Apply \"Histograms & Frequency Density\" to explain how examiners award full marks on Averages, Cumulative Frequency, Box Plots & Histograms problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Histograms display continuous grouped data with UNEQUAL class widths. The vertical axis is FREQUENCY DENSITY (NOT frequency!). Key formula: Frequency Density = Frequency ÷ Class Width. Rearranged: Frequency = Frequency Density × Class Width = AREA of each bar!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Histograms display continuous grouped data with UNEQUAL class widths. The vertical axis is FREQUENCY DENSITY (NOT frequency!)."
            },
            {
              "id": "mp2",
              "markDescription": "Key formula: Frequency Density = Frequency ÷ Class Width. Rearranged: Frequency = Frequency Density × Class Width = AREA of each bar!"
            },
            {
              "id": "mp3",
              "markDescription": "Calculate estimated mean from grouped tables using midpoints and Σ(fx) ÷ Σf."
            }
          ]
        }
      }
    ]
  }
];

export const IGCSE_MATHS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "igcse-maths-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0580 Paper 2 Extended Short-Answer (0580/22)",
    "tier": "Extended",
    "series": "May/June 2024",
    "paperCode": "0580/22",
    "durationMinutes": 90,
    "totalMarks": 70,
    "insertNote": "Includes CIE 0580 Extended Mathematical Formulae List.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.1 — Fractions, Percentages, Compound Interest & Reverse Percentages] (a) Define Decimal multiplier. (b) Apply the principles of \"Fractions, Recurring Decimals & Percentage Change\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Decimal multiplier — Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85).",
          "2 marks: Always convert mixed numbers to improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12. To divide, multiply by the reciprocal (Keep–Change–Flip).",
          "1 mark: Converting a recurring decimal to an exact fraction (Extended): Let x = 0.363636..., then 100x = 36.363636... Subtracting gives 99x = 36, so x = 36/99 = 4/11."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 1.3 — Ratio, Direct Proportion & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Direct Proportion (Algebraic Form)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0).",
          "2 marks: If y is directly proportional to x (written y ∝ x), then y = kx where k is the constant of proportionality (graph is a straight line through the origin).",
          "1 mark: Direct proportion also extends to powers and roots: y ∝ x² → y = kx²; y ∝ √x → y = k√x."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 2.2 — Simultaneous Equations (Linear & Quadratic) & Inequalities] (a) Define Elimination method. (b) Apply the principles of \"Linear, Quadratic & Graphical Inequalities\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Elimination method — Adding or subtracting multiples of linear simultaneous equations to cancel one unknown.",
          "2 marks: Solve linear inequalities just like equations, EXCEPT multiplying or dividing both sides by a NEGATIVE number FLIPS the inequality sign (e.g., −2x < 10 → x > −5).",
          "1 mark: Quadratic inequalities: Solve the equality first, then SKETCH the parabola! For x² − 5x + 6 < 0, roots are 2 and 3; the U-shaped parabola is below zero BETWEEN the roots → 2 < x < 3. For x² − 5x + 6 > 0, it is above zero OUTSIDE the roots → x < 2 or x > 3."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 3.1 — Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars] (a) Define Gradient. (b) Apply the principles of \"Gradient, Midpoint & Length of a Line Segment\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gradient — Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁).",
          "2 marks: Given two points A(x₁, y₁) and B(x₂, y₂):",
          "1 mark: Gradient: m = (y₂ − y₁) ÷ (x₂ − x₁). Positive m slopes uphill left-to-right; negative m slopes downhill."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2024-p4",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0580 Paper 4 Extended Structured (0580/42)",
    "tier": "Extended",
    "series": "May/June 2024",
    "paperCode": "0580/42",
    "durationMinutes": 150,
    "totalMarks": 130,
    "insertNote": "Includes CIE 0580 Extended Mathematical Formulae List.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 2.1 — Expanding, Factorising & Solving Quadratic Equations] (a) Define Quadratic equation. (b) Apply the principles of \"Expanding Brackets & Factorising Quadratics\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic equation — Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0).",
          "2 marks: Always rearrange a quadratic equation into standard form ax² + bx + c = 0 before solving.",
          "1 mark: Difference of two squares: a² − b² = (a + b)(a − b). Example: 9x² − 16 = (3x + 4)(3x − 4)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.3 — Sequences, Functions (Composite/Inverse) & Differentiation] (a) Define Quadratic sequence. (b) Apply the principles of \"Composite & Inverse Functions (Extended)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic sequence — Sequence with a constant second difference 2a and nth term an² + bn + c.",
          "2 marks: Composite function fg(x) means apply g FIRST, then substitute the result into f: fg(x) = f(g(x)). Order matters — usually fg(x) ≠ gf(x)!",
          "1 mark: Worked example: If f(x) = 2x + 3 and g(x) = x², then fg(x) = f(x²) = 2x² + 3, whereas gf(x) = g(2x + 3) = (2x + 3)²."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 4.1 — Angles, Polygons, Bearings, Similarity & Congruence] (a) Define Bearing. (b) Apply the principles of \"Congruence & Similar Shapes (Length, Area & Volume Scale Factors)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Bearing — Direction measured clockwise from North and expressed as a three-figure angle (000°–359°).",
          "2 marks: Two triangles are CONGRUENT (identical size & shape) if they satisfy SSS, SAS, ASA/AAS, or RHS (Right angle, Hypotenuse, Side). Note: AAA proves similarity, NOT congruence!",
          "1 mark: Similar shapes have identical angles and proportional sides with linear scale factor k = L₂ ÷ L₁."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 5.1 — Area, Arc Length, Sector Area, Surface Area & Volume] (a) Define Sector. (b) Apply the principles of \"2D Areas, Arc Length & Sector Area\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sector — Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr².",
          "2 marks: Trapezium area = ½(a + b) × h (average of parallel sides × perpendicular height). Circle circumference = 2πr = πd; Circle area = πr².",
          "1 mark: Sector of angle θ° and radius r: Arc length = (θ ÷ 360) × 2πr; Sector area = (θ ÷ 360) × πr²."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "CIE 0580 Paper 2 Extended Short-Answer (0580/22)",
    "tier": "Extended",
    "series": "Oct/Nov 2023",
    "paperCode": "0580/22",
    "durationMinutes": 90,
    "totalMarks": 70,
    "insertNote": "Includes CIE 0580 Extended Mathematical Formulae List.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.1 — Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars] (a) Define Gradient. (b) Apply the principles of \"Gradient, Midpoint & Length of a Line Segment\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gradient — Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁).",
          "2 marks: Given two points A(x₁, y₁) and B(x₂, y₂):",
          "1 mark: Gradient: m = (y₂ − y₁) ÷ (x₂ − x₁). Positive m slopes uphill left-to-right; negative m slopes downhill."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.2 — Circle Theorems & Alternate Segment Theorem] (a) Define Cyclic quadrilateral. (b) Apply the principles of \"Cyclic Quadrilaterals & Tangent Rules\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Cyclic quadrilateral — Four-sided shape inscribed in a circle whose opposite angles add to 180°.",
          "2 marks: Theorem 5 (Cyclic quadrilateral): All 4 vertices MUST lie on the circumference. Opposite angles of a cyclic quadrilateral sum to 180°.",
          "1 mark: Theorem 6 (Tangent meets radius): A tangent to a circle always meets the radius at the point of contact at 90°."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 6.1 — Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)] (a) Define Hypotenuse. (b) Apply the principles of \"Angles of Elevation, Depression & 3D Trigonometry\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Hypotenuse — Longest side of a right-angled triangle, opposite the right angle.",
          "2 marks: Angle of elevation is measured UPWARD from the horizontal; angle of depression is measured DOWNWARD from the horizontal (they are equal alternate Z-angles!).",
          "1 mark: For 3D trigonometry (angle between a line and a plane): drop a perpendicular from the top endpoint straight down onto the plane, draw the right-angled triangle on the base, find the base diagonal with Pythagoras, then use tan θ = vertical height ÷ base diagonal."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 7.1 — Column Vectors, Vector Geometry & Transformations] (a) Define Position vector. (b) Apply the principles of \"Column Vectors & Magnitude\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Position vector — Vector OA starting at the origin O(0, 0) and ending at point A.",
          "2 marks: A column vector (x / y) represents horizontal shift x (right +, left −) and vertical shift y (up +, down −).",
          "1 mark: Magnitude (length) of vector v = (x / y) is |v| = √(x² + y²). Example: |(3 / −4)| = √(3² + (−4)²) = √25 = 5."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2023-p4",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "CIE 0580 Paper 4 Extended Structured (0580/42)",
    "tier": "Extended",
    "series": "Oct/Nov 2023",
    "paperCode": "0580/42",
    "durationMinutes": 150,
    "totalMarks": 130,
    "insertNote": "Includes CIE 0580 Extended Mathematical Formulae List.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 5.1 — Area, Arc Length, Sector Area, Surface Area & Volume] (a) Define Sector. (b) Apply the principles of \"2D Areas, Arc Length & Sector Area\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sector — Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr².",
          "2 marks: Trapezium area = ½(a + b) × h (average of parallel sides × perpendicular height). Circle circumference = 2πr = πd; Circle area = πr².",
          "1 mark: Sector of angle θ° and radius r: Arc length = (θ ÷ 360) × 2πr; Sector area = (θ ÷ 360) × πr²."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 6.2 — Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles] (a) Define Sine Rule. (b) Apply the principles of \"The Cosine Rule\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sine Rule — a / sin A = b / sin B = c / sin C for any triangle.",
          "2 marks: Use the Cosine Rule when you do NOT have an opposite pair: either SAS (two sides and the INCLUDED angle between them) or SSS (all three sides known).",
          "1 mark: Finding a missing side (SAS): a² = b² + c² − 2bc cos A (remember to take the square root at the end!)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 8.1 — Probability Trees, Venn Diagrams & Conditional Probability] (a) Define Mutually exclusive. (b) Apply the principles of \"Venn Diagrams & Set Notation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Mutually exclusive — Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B).",
          "2 marks: Key set notation: A ∩ B (intersection: in BOTH A and B); A ∪ B (union: in A, or B, or both); A′ (complement: NOT in A); n(A) = number of elements in A.",
          "1 mark: Always fill the INTERSECTION (overlap) FIRST when populating a Venn diagram, then subtract the overlap from each individual circle’s total!"
        ]
      },
      {
        "number": "04",
        "question": "[Topic 1.1 — Fractions, Percentages, Compound Interest & Reverse Percentages] (a) Define Decimal multiplier. (b) Apply the principles of \"Fractions, Recurring Decimals & Percentage Change\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Decimal multiplier — Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85).",
          "2 marks: Always convert mixed numbers to improper fractions before multiplying or dividing: 2⅓ × 1¾ = (7/3) × (7/4) = 49/12 = 4 1/12. To divide, multiply by the reciprocal (Keep–Change–Flip).",
          "1 mark: Converting a recurring decimal to an exact fraction (Extended): Let x = 0.363636..., then 100x = 36.363636... Subtracting gives 99x = 36, so x = 36/99 = 4/11."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Edexcel Intl 4MA1 Paper 1H Higher (4MA1/1H)",
    "tier": "Higher",
    "series": "June 2022",
    "paperCode": "4MA1/1H",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Edexcel International GCSE Higher Tier Formulae Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.3 — Ratio, Direct Proportion & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Ratio Sharing & Combining Ratios\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0).",
          "2 marks: Sharing in a ratio: Sum the ratio parts, find the value of 1 part, then multiply. Example: Share $450 in ratio 2 : 3 : 4 → 9 parts = $450 → 1 part = $50 → $100, $150, $200.",
          "1 mark: Difference ratio problems: If Mia and Leo share money in ratio 3 : 7 and Leo gets $60 more than Mia, the difference of 4 parts = $60 → 1 part = $15 → total 10 parts = $150."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.2 — Simultaneous Equations (Linear & Quadratic) & Inequalities] (a) Define Elimination method. (b) Apply the principles of \"Non-Linear Simultaneous Equations (Substitution)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Elimination method — Adding or subtracting multiples of linear simultaneous equations to cancel one unknown.",
          "2 marks: When one equation is linear and the other is quadratic (e.g., y = x + 1 and x² + y² = 25), ALWAYS use SUBSTITUTION.",
          "1 mark: Step 1: Isolate one variable in the linear equation (y = x + 1). Step 2: Substitute into the quadratic: x² + (x + 1)² = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 3.1 — Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars] (a) Define Gradient. (b) Apply the principles of \"Parallel Lines, Perpendicular Lines & Perpendicular Bisectors\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gradient — Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁).",
          "2 marks: Parallel lines have EQUAL gradients: m₁ = m₂.",
          "1 mark: Perpendicular lines satisfy m₁ × m₂ = −1, so m₂ = −1 ÷ m₁ (the negative reciprocal: flip the fraction and flip the sign! E.g., 2/3 → −3/2; −4 → +1/4)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.2 — Circle Theorems & Alternate Segment Theorem] (a) Define Cyclic quadrilateral. (b) Apply the principles of \"Centre, Semicircle & Same-Segment Theorems\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Cyclic quadrilateral — Four-sided shape inscribed in a circle whose opposite angles add to 180°.",
          "2 marks: Theorem 1 (Angle at the centre): The angle subtended by an arc at the centre is TWICE the angle subtended at the circumference.",
          "1 mark: Theorem 2 (Angle in a semicircle): The angle subtended by a diameter at the circumference is ALWAYS 90°."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2022-p4",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Edexcel Intl 4MA1 Paper 2H Higher (4MA1/2H)",
    "tier": "Higher",
    "series": "June 2022",
    "paperCode": "4MA1/2H",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Edexcel International GCSE Higher Tier Formulae Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 2.3 — Sequences, Functions (Composite/Inverse) & Differentiation] (a) Define Quadratic sequence. (b) Apply the principles of \"Arithmetic, Geometric & Quadratic Sequences\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Quadratic sequence — Sequence with a constant second difference 2a and nth term an² + bn + c.",
          "2 marks: Linear (arithmetic) sequence with common difference d: nth term = dn + (first term − d). Example: 5, 9, 13, 17... has d = 4 → uₙ = 4n + 1.",
          "1 mark: Quadratic sequence (constant SECOND difference 2a): Halve the second difference to get a (coefficient of n²), subtract an² from each term, then find the linear rule for the remainder!"
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.1 — Angles, Polygons, Bearings, Similarity & Congruence] (a) Define Bearing. (b) Apply the principles of \"Three-Figure Bearings\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Bearing — Direction measured clockwise from North and expressed as a three-figure angle (000°–359°).",
          "2 marks: Bearings obey 3 strict rules: (1) Measured from NORTH (000°), (2) Measured CLOCKWISE, (3) Written as 3 digits (e.g., 045°, NOT 45°).",
          "1 mark: The wording \"bearing of B FROM A\" means stand at A, draw a North line at A, and turn clockwise until pointing to B."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.1 — Area, Arc Length, Sector Area, Surface Area & Volume] (a) Define Sector. (b) Apply the principles of \"Unit Conversions & Frustums\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sector — Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr².",
          "2 marks: Area & volume unit conversions: 1 m² = 100² = 10,000 cm²; 1 m³ = 100³ = 1,000,000 cm³; 1 litre = 1,000 cm³.",
          "1 mark: A frustum is a cone with a smaller similar cone sliced off its top: Volume of frustum = Volume(large cone) − Volume(removed small cone)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 6.2 — Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles] (a) Define Sine Rule. (b) Apply the principles of \"The Sine Rule (and Ambiguous Case)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sine Rule — a / sin A = b / sin B = c / sin C for any triangle.",
          "2 marks: Use the Sine Rule whenever you have a MATCHING OPPOSITE PAIR (one side and its opposite angle):",
          "1 mark: For a missing side: a / sin A = b / sin B = c / sin C. For a missing angle: sin A / a = sin B / b (put the unknown on TOP!)."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2019-p2",
    "specEra": "old",
    "year": "2019",
    "title": "CIE 0580 Paper 2 Extended (Legacy Series — 0580/22)",
    "tier": "Extended",
    "series": "May/June 2019",
    "paperCode": "0580/22",
    "durationMinutes": 90,
    "totalMarks": 70,
    "insertNote": "Pre-2020 Legacy Specification Paper 2.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 4.2 — Circle Theorems & Alternate Segment Theorem] (a) Define Cyclic quadrilateral. (b) Apply the principles of \"Centre, Semicircle & Same-Segment Theorems\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Cyclic quadrilateral — Four-sided shape inscribed in a circle whose opposite angles add to 180°.",
          "2 marks: Theorem 1 (Angle at the centre): The angle subtended by an arc at the centre is TWICE the angle subtended at the circumference.",
          "1 mark: Theorem 2 (Angle in a semicircle): The angle subtended by a diameter at the circumference is ALWAYS 90°."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 6.1 — Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)] (a) Define Hypotenuse. (b) Apply the principles of \"Right-Angled Trigonometry (SOHCAHTOA)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Hypotenuse — Longest side of a right-angled triangle, opposite the right angle.",
          "2 marks: Label the 3 sides relative to the target angle θ: Hypotenuse (H, opposite 90°), Opposite (O, across from θ), Adjacent (A, next to θ).",
          "1 mark: SOH: sin θ = O ÷ H | CAH: cos θ = A ÷ H | TOA: tan θ = O ÷ A."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 7.1 — Column Vectors, Vector Geometry & Transformations] (a) Define Position vector. (b) Apply the principles of \"The Four Geometric Transformations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Position vector — Vector OA starting at the origin O(0, 0) and ending at point A.",
          "2 marks: When describing a single transformation fully, always state the EXACT required details:",
          "1 mark: Translation: state \"Translation\" + column vector (x / y)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 8.2 — Averages, Cumulative Frequency, Box Plots & Histograms] (a) Define Interquartile range (IQR). (b) Apply the principles of \"Estimated Mean & Grouped Frequency Tables\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Interquartile range (IQR) — Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations.",
          "2 marks: For grouped continuous data, calculate the MIDPOINT (x) of each class interval, multiply by frequency (f × x), then compute: Estimated Mean = Σ(fx) ÷ Σf.",
          "1 mark: It is an \"estimate\" because we do not know the exact individual values inside each interval and assume they are evenly distributed around each midpoint."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2019-p4",
    "specEra": "old",
    "year": "2019",
    "title": "CIE 0580 Paper 4 Extended (Legacy Series — 0580/42)",
    "tier": "Extended",
    "series": "May/June 2019",
    "paperCode": "0580/42",
    "durationMinutes": 150,
    "totalMarks": 130,
    "insertNote": "Pre-2020 Legacy Specification Paper 4.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 6.2 — Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles] (a) Define Sine Rule. (b) Apply the principles of \"The Sine Rule (and Ambiguous Case)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sine Rule — a / sin A = b / sin B = c / sin C for any triangle.",
          "2 marks: Use the Sine Rule whenever you have a MATCHING OPPOSITE PAIR (one side and its opposite angle):",
          "1 mark: For a missing side: a / sin A = b / sin B = c / sin C. For a missing angle: sin A / a = sin B / b (put the unknown on TOP!)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 8.1 — Probability Trees, Venn Diagrams & Conditional Probability] (a) Define Mutually exclusive. (b) Apply the principles of \"Conditional Probability (Without Replacement)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Mutually exclusive — Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B).",
          "2 marks: When items are drawn WITHOUT replacement, both the denominator and the chosen colour’s numerator decrease by 1 on the second branch.",
          "1 mark: Worked example: A bag has 4 red and 6 blue counters (10 total). Two are picked without replacement. P(both red) = (4/10) × (3/9) = 12/90 = 2/15."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 1.1 — Fractions, Percentages, Compound Interest & Reverse Percentages] (a) Define Decimal multiplier. (b) Apply the principles of \"Reverse Percentages\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Decimal multiplier — Single factor used to compute percentage increases (e.g., 1.15) or decreases (e.g., 0.85).",
          "2 marks: Use reverse percentages when you are given the FINAL amount AFTER a percentage increase or decrease and must recover the ORIGINAL 100% value.",
          "1 mark: Method: Original = Final amount ÷ Decimal Multiplier."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 1.3 — Ratio, Direct Proportion & Inverse Proportion] (a) Define Direct proportion. (b) Apply the principles of \"Ratio Sharing & Combining Ratios\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Direct proportion — Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0).",
          "2 marks: Sharing in a ratio: Sum the ratio parts, find the value of 1 part, then multiply. Example: Share $450 in ratio 2 : 3 : 4 → 9 parts = $450 → 1 part = $50 → $100, $150, $200.",
          "1 mark: Difference ratio problems: If Mia and Leo share money in ratio 3 : 7 and Leo gets $60 more than Mia, the difference of 4 parts = $60 → 1 part = $15 → total 10 parts = $150."
        ]
      }
    ]
  }
];

export const IGCSE_MATHS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "imkt-1",
    "term": "Decimal multiplier",
    "definition": "Factor (1 ± r/100) used for percentage change and compound interest.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "imkt-2",
    "term": "Surd",
    "definition": "Irrational root expressed in exact square-root form.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "imkt-3",
    "term": "Discriminant",
    "definition": "b² − 4ac in the quadratic formula, indicating the number of real roots.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "imkt-4",
    "term": "Inverse function",
    "definition": "Function f⁻¹(x) that reverses f(x), found by making x the subject of y = f(x).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "imkt-5",
    "term": "Cyclic quadrilateral",
    "definition": "Four-sided shape with all vertices on a circle; opposite angles sum to 180°.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "imkt-6",
    "term": "Frequency density",
    "definition": "Frequency divided by class width, represented by bar height in a histogram.",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "igcse-maths-kt-106",
    "term": "Compound interest",
    "definition": "Interest calculated on both the initial principal and all previously accumulated interest: A = P(1 + r/100)ⁿ.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-maths-kt-107",
    "term": "Reverse percentage",
    "definition": "Finding the original 100% quantity by dividing the post-change value by its decimal multiplier.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-maths-kt-108",
    "term": "Reciprocal",
    "definition": "The multiplicative inverse of a number or fraction obtained by swapping numerator and denominator (e.g., reciprocal of 3/4 is 4/3).",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-maths-kt-109",
    "term": "Standard form",
    "definition": "Scientific notation A × 10ⁿ with 1 ≤ A < 10 and integer exponent n.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-maths-kt-110",
    "term": "Upper and lower bounds",
    "definition": "Maximum and minimum possible true values of a rounded measurement (± half the degree of accuracy).",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-maths-kt-111",
    "term": "Conjugate",
    "definition": "The binomial expression formed by flipping the sign between two terms (e.g., 3 + √5 is the conjugate of 3 − √5).",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-maths-kt-112",
    "term": "Direct proportion",
    "definition": "Relationship where y/x = k is constant (y = kx); graph is a straight line through (0, 0).",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-maths-kt-113",
    "term": "Inverse proportion",
    "definition": "Relationship where x × y = k is constant (y = k/x); doubling x halves y.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-maths-kt-114",
    "term": "Constant of proportionality",
    "definition": "Fixed non-zero number k linking two proportional variables in y = kx or y = k/x.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-maths-kt-115",
    "term": "Quadratic equation",
    "definition": "Equation of degree 2 written in standard form ax² + bx + c = 0 (a ≠ 0).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-maths-kt-116",
    "term": "Difference of two squares",
    "definition": "Algebraic identity a² − b² = (a + b)(a − b).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-maths-kt-117",
    "term": "Completing the square",
    "definition": "Rewriting x² + bx + c as (x + p)² + q to solve exactly or locate the parabola’s turning point (−p, q).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-maths-kt-118",
    "term": "Elimination method",
    "definition": "Adding or subtracting multiples of linear simultaneous equations to cancel one unknown.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-maths-kt-119",
    "term": "Substitution method",
    "definition": "Expressing one variable from a linear equation and inserting it into a second (often quadratic) equation.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-maths-kt-120",
    "term": "Inequality",
    "definition": "A mathematical statement comparing two expressions with <, >, ≤, or ≥ rather than equals.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-maths-kt-121",
    "term": "Quadratic sequence",
    "definition": "Sequence with a constant second difference 2a and nth term an² + bn + c.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "igcse-maths-kt-122",
    "term": "Stationary point",
    "definition": "Point on a curve where the gradient dy/dx equals zero (maximum, minimum, or inflection).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "igcse-maths-kt-123",
    "term": "Composite function",
    "definition": "A function formed by applying one function to the output of another: fg(x) = f(g(x)).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "igcse-maths-kt-124",
    "term": "Gradient",
    "definition": "Measure of steepness between two points: m = (y₂ − y₁) ÷ (x₂ − x₁).",
    "topicNumber": 3,
    "subtopicId": "igcse-maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-maths-kt-125",
    "term": "Perpendicular lines",
    "definition": "Lines intersecting at 90° whose gradients multiply to −1 (m₁m₂ = −1).",
    "topicNumber": 3,
    "subtopicId": "igcse-maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-maths-kt-126",
    "term": "Perpendicular bisector",
    "definition": "Line crossing a segment at its midpoint at right angles.",
    "topicNumber": 3,
    "subtopicId": "igcse-maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-maths-kt-127",
    "term": "Midpoint",
    "definition": "The exact halfway point between two coordinates, given by averaging their x-values and y-values.",
    "topicNumber": 3,
    "subtopicId": "igcse-maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-maths-kt-128",
    "term": "Bearing",
    "definition": "Direction measured clockwise from North and expressed as a three-figure angle (000°–359°).",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-maths-kt-129",
    "term": "Congruence",
    "definition": "Exact equality of shape and size proved via SSS, SAS, ASA, or RHS.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-maths-kt-130",
    "term": "Scale factor",
    "definition": "Ratio k of corresponding lengths in similar shapes; areas scale by k² and volumes by k³.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-maths-kt-131",
    "term": "Congruent",
    "definition": "Geometric figures having the exact same shape and exact same dimensions (all corresponding sides and angles equal).",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-maths-kt-132",
    "term": "Alternate Segment Theorem",
    "definition": "Angle between tangent and chord equals the inscribed angle in the opposite segment.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-maths-kt-133",
    "term": "Subtended angle",
    "definition": "Angle formed at a point by joining it to the two endpoints of an arc or chord.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-maths-kt-134",
    "term": "Tangent",
    "definition": "A straight line that touches a circle at exactly one point and sits perpendicular (90°) to the radius at that point.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-maths-kt-135",
    "term": "Sector",
    "definition": "Pie-slice region of a circle bounded by two radii and an arc, with area (θ/360)πr².",
    "topicNumber": 5,
    "subtopicId": "igcse-maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-maths-kt-136",
    "term": "Frustum",
    "definition": "Lower portion of a cone or pyramid remaining after slicing off the top parallel to the base.",
    "topicNumber": 5,
    "subtopicId": "igcse-maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-maths-kt-137",
    "term": "Slant height",
    "definition": "Distance measured along the sloping outer surface of a cone from its apex to the circular base rim: l = √(r² + h²).",
    "topicNumber": 5,
    "subtopicId": "igcse-maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-maths-kt-138",
    "term": "Hypotenuse",
    "definition": "Longest side of a right-angled triangle, opposite the right angle.",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-maths-kt-139",
    "term": "Angle of elevation",
    "definition": "Angle measured upward from a horizontal line to an observer’s line of sight.",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-maths-kt-140",
    "term": "Sine Rule",
    "definition": "a / sin A = b / sin B = c / sin C for any triangle.",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-maths-kt-141",
    "term": "Cosine Rule",
    "definition": "a² = b² + c² − 2bc cos A (used for SAS or SSS non-right-angled triangles).",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-maths-kt-142",
    "term": "Obtuse",
    "definition": "An angle strictly greater than 90° and less than 180°.",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-maths-kt-143",
    "term": "Position vector",
    "definition": "Vector OA starting at the origin O(0, 0) and ending at point A.",
    "topicNumber": 7,
    "subtopicId": "igcse-maths-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "igcse-maths-kt-144",
    "term": "Collinear points",
    "definition": "Points lying on the same straight line (parallel connecting vectors sharing a common point).",
    "topicNumber": 7,
    "subtopicId": "igcse-maths-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "igcse-maths-kt-145",
    "term": "Negative scale factor",
    "definition": "Enlargement that projects the image on the opposite side of the centre of enlargement, inverted by 180°.",
    "topicNumber": 7,
    "subtopicId": "igcse-maths-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "igcse-maths-kt-146",
    "term": "Collinear",
    "definition": "Three or more points that all lie along the exact same straight line.",
    "topicNumber": 7,
    "subtopicId": "igcse-maths-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "igcse-maths-kt-147",
    "term": "Mutually exclusive",
    "definition": "Events that cannot happen at the same time, so P(A ∩ B) = 0 and P(A or B) = P(A) + P(B).",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "igcse-maths-kt-148",
    "term": "Independent events",
    "definition": "Events where the outcome of one does not affect the probability of the other: P(A ∩ B) = P(A) × P(B).",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "igcse-maths-kt-149",
    "term": "Conditional probability",
    "definition": "Probability of A given B has happened: P(A | B) = n(A ∩ B) ÷ n(B).",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "igcse-maths-kt-150",
    "term": "Intersection",
    "definition": "The overlap region A ∩ B containing elements that belong to both set A and set B simultaneously.",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "igcse-maths-kt-151",
    "term": "Interquartile range (IQR)",
    "definition": "Q₃ − Q₁, a robust measure of spread covering the middle 50% of observations.",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "igcse-maths-kt-152",
    "term": "Interquartile range",
    "definition": "Difference between the upper quartile and lower quartile (Q₃ − Q₁), measuring the spread of the central 50% of data.",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-2",
    "subtopicCode": "8.2"
  }
];
