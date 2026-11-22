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

export const ALEVEL_MATHS_TOPICS: TopicDefinition[] = [
  {
    "number": 1,
    "title": "Pure 1 — Algebra, Quadratics & Coordinate Geometry",
    "subtopics": [
      {
        "id": "al-maths-1-1",
        "code": "1.1",
        "slug": "1.1-quadratics-discriminant",
        "title": "Quadratics, Completing the Square & the Discriminant",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-1-2",
        "code": "1.2",
        "slug": "1.2-surds-indices-factor-theorem",
        "title": "Surds, Indices, Inequalities & the Factor Theorem",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-1-3",
        "code": "1.3",
        "slug": "1.3-coordinate-geometry-circles",
        "title": "Coordinate Geometry — Straight Lines & Circles",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Pure 1 & 2 — Binomial Expansion, Sequences & Series",
    "subtopics": [
      {
        "id": "al-maths-2-1",
        "code": "2.1",
        "slug": "2.1-binomial-expansion",
        "title": "Binomial Expansion (Integer & Rational Powers)",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-2-2",
        "code": "2.2",
        "slug": "2.2-arithmetic-geometric-series",
        "title": "Arithmetic & Geometric Sequences and Series",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Pure 1 & 2 — Trigonometry, Exponentials & Logarithms",
    "subtopics": [
      {
        "id": "al-maths-3-1",
        "code": "3.1",
        "slug": "3.1-trigonometry-radians",
        "title": "Trigonometry, Radians, Sectors & Small-Angle Approximations",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-3-2",
        "code": "3.2",
        "slug": "3.2-trig-identities-equations",
        "title": "Trigonometric Identities, Addition Formulae & R-Formula",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-3-3",
        "code": "3.3",
        "slug": "3.3-exponentials-logarithms",
        "title": "Exponentials, Natural Logarithms & Modelling",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Calculus & Vectors",
    "subtopics": [
      {
        "id": "al-maths-4-1",
        "code": "4.1",
        "slug": "4.1-differentiation-rules",
        "title": "Differentiation — First Principles, Chain, Product & Quotient Rules",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-4-2",
        "code": "4.2",
        "slug": "4.2-integration-differential-equations",
        "title": "Integration — Substitution, Parts, Partial Fractions & Differential Equations",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-4-3",
        "code": "4.3",
        "slug": "4.3-vectors-2d-3d",
        "title": "2D & 3D Vectors, Magnitude & Geometric Proofs",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Statistics",
    "subtopics": [
      {
        "id": "al-maths-5-1",
        "code": "5.1",
        "slug": "5.1-binomial-normal-distributions",
        "title": "Probability Distributions — Binomial & Normal Distributions",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-5-2",
        "code": "5.2",
        "slug": "5.2-hypothesis-testing",
        "title": "Statistical Hypothesis Testing & PMCC Correlation",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Mechanics",
    "subtopics": [
      {
        "id": "al-maths-6-1",
        "code": "6.1",
        "slug": "6.1-kinematics-suvat-projectiles",
        "title": "Kinematics — SUVAT Equations, Projectiles & Variable Acceleration",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-maths-6-2",
        "code": "6.2",
        "slug": "6.2-newtons-laws-moments",
        "title": "Forces, Newton’s Laws, Friction, Connected Particles & Moments",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  }
];

export const ALEVEL_MATHS_NOTES: Record<string, NoteLesson> = {
  "al-maths-1-1": {
    "subtopicId": "al-maths-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "Quadratics, Completing the Square & the Discriminant",
    "readingMinutes": 10,
    "videoTitle": "A-Level Maths: Quadratics - Using the Discriminant",
    "youtubeId": "PUo0zoEdHl8",
    "videoChannel": "TLMaths",
    "videoDuration": "6:47",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "The Quadratic Formula & Discriminant (b² − 4ac)",
        "cardId": "al-maths-1-1-c1"
      },
      {
        "time": "1:40",
        "seconds": 100,
        "label": "Two Distinct Real Roots (> 0)",
        "cardId": "al-maths-1-1-c2"
      },
      {
        "time": "3:30",
        "seconds": 210,
        "label": "One Repeated Root (= 0) & No Real Roots (< 0)",
        "cardId": "al-maths-1-1-c3"
      },
      {
        "time": "5:15",
        "seconds": 315,
        "label": "Worked Inequality Exam Question",
        "cardId": "al-maths-1-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-1-1-c1",
        "title": "Completing the Square (Including Leading Coefficient a ≠ 1)",
        "summary": "Rewriting ax² + bx + c in vertex form a(x + p)² + q when a ≠ 1.",
        "bullets": [
          "Any quadratic ax² + bx + c can be rewritten in vertex form a(x + p)² + q by factoring a out of the x² and x terms first.",
          "**Worked Example 1**: Express 3x² − 12x + 7 in the form a(x + p)² + q. Step 1: Factor 3 from the first two terms → 3(x² − 4x) + 7. Step 2: Halve the coefficient of x inside the bracket and subtract its square → 3[(x − 2)² − 4] + 7. Step 3: Expand the outer bracket → 3(x − 2)² − 12 + 7 = 3(x − 2)² − 5.",
          "**Vertex reading**: Because (x − 2)² ≥ 0 for all real x, the minimum value is −5 occurring at x = 2, so the turning point is (2, −5) with line of symmetry x = 2.",
          "If a < 0 (e.g., −2(x + 1)² + 9), the parabola opens downwards and the vertex (−1, 9) is a MAXIMUM turning point."
        ],
        "subsections": [
          {
            "heading": "Quick-check vertex summary",
            "bullets": [
              "For **y = a(x + p)² + q**, the turning point is always **(−p, q)** with vertical line of symmetry **x = −p**."
            ],
            "exampleHeading": "Worked turning-point comparisons:",
            "examples": [
              "**y = 3(x − 2)² − 5** — Opens upwards (a = 3 > 0) ⇒ **minimum** at (2, −5)",
              "**y = −2(x + 1)² + 9** — Opens downwards (a = −2 < 0) ⇒ **maximum** at (−1, 9)"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "vertex form",
            "definition": "Completed-square quadratic a(x + p)² + q from which the turning point (−p, q) can be read immediately."
          }
        ],
        "memoryAid": "Factor a out first, halve b/a inside, subtract the square inside, THEN multiply out by a!"
      },
      {
        "id": "al-maths-1-1-c2",
        "title": "The Discriminant Δ = b² − 4ac",
        "summary": "Using Δ = b² − 4ac to classify real roots and solve parameter inequalities.",
        "bullets": [
          "In the quadratic formula x = (−b ± √(b² − 4ac)) / (2a), the expression under the square root Δ = b² − 4ac determines the number of real roots:",
          "b² − 4ac > 0 → Two distinct real roots (parabola crosses the x-axis twice).",
          "b² − 4ac = 0 → One repeated real root (parabola is tangent to the x-axis at its vertex).",
          "b² − 4ac < 0 → No real roots (parabola lies entirely above or below the x-axis).",
          "**Worked Example 2**: Find the range of values of k such that kx² + 4x + (k − 3) = 0 has two distinct real roots. Set Δ > 0: 4² − 4(k)(k − 3) > 0 → 16 − 4k² + 12k > 0 → divide by −4 (REVERSING the inequality!) → k² − 3k − 4 < 0 → (k − 4)(k + 1) < 0 → −1 < k < 4."
        ],
        "commonMistake": "When solving for \"real roots\" (without the word \"distinct\"), use b² − 4ac ≥ 0 rather than strictly > 0, because equal repeated roots are still real!",
        "subsections": [
          {
            "heading": "Discriminant Decision Table",
            "bullets": [
              "**Δ > 0** - two distinct real roots; **Δ = 0** - one repeated root (tangent); **Δ < 0** - no real roots."
            ],
            "exampleHeading": "Worked example: Tangency condition for kx² + 6x + 3 = 0",
            "examples": [
              "Set Δ = 0: 6² − 4(k)(3) = 0 → 36 − 12k = 0 → **k = 3**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "discriminant",
            "definition": "b² − 4ac; determines the number of real roots of ax² + bx + c = 0."
          },
          {
            "term": "critical values",
            "definition": "Boundary roots where a quadratic equals zero, partitioning inequality intervals."
          }
        ]
      },
      {
        "id": "al-maths-1-1-c3",
        "title": "Hidden Quadratics & Substitution",
        "summary": "Solving disguised exponential and fractional-power quadratics via substitution.",
        "bullets": [
          "Equations of the form a(f(x))² + b(f(x)) + c = 0 can be solved by substituting y = f(x).",
          "**Worked Example 3**: Solve 2^(2x) − 10(2^x) + 16 = 0. Notice 2^(2x) = (2^x)². Let y = 2^x → y² − 10y + 16 = 0 → (y − 2)(y − 8) = 0 → y = 2 or y = 8. Convert back: 2^x = 2 ⇒ x = 1, and 2^x = 8 = 2³ ⇒ x = 3.",
          "For fractional-power hidden quadratics such as x − 5√x + 6 = 0, substitute y = √x (requiring y ≥ 0), giving (y − 2)(y − 3) = 0 ⇒ √x = 2 or 3 ⇒ x = 4 or x = 9."
        ]
      },
      {
        "id": "al-maths-1-1-c4",
        "title": "Quadratic Inequalities & Set Notation",
        "summary": "Sketching critical values and expressing inequality intervals in set notation.",
        "bullets": [
          "Always sketch the quadratic after finding critical values (roots): for a > 0, f(x) < 0 lies BETWEEN the roots (single interval), whereas f(x) > 0 lies OUTSIDE the roots (two separate intervals).",
          "**Set notation required by A-Level mark schemes**: \"between\" is written {x : −1 < x < 4} or (−1, 4); \"outside\" is written {x : x ≤ −2} ∪ {x : x ≥ 5}.",
          "Never multiply both sides of an inequality by an unknown x that could be negative; instead multiply by x² (always positive for x ≠ 0) or rearrange everything onto one side as a single fraction."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Discriminant",
        "definition": "The value b² − 4ac determining whether ax² + bx + c = 0 has two distinct, one repeated, or no real roots."
      },
      {
        "term": "Critical values",
        "definition": "The boundary roots where a quadratic expression equals zero, used to partition intervals when solving inequalities."
      },
      {
        "term": "Hidden quadratic",
        "definition": "An equation reducible to a quadratic form ay² + by + c = 0 via a substitution such as y = √x or y = e^x."
      }
    ],
    "checklistPoints": [
      "Complete the square reliably when a ≠ 1 (including negative a) and state the exact turning point.",
      "Apply b² − 4ac >, =, ≥, < 0 to find parameter ranges and line–curve tangency conditions.",
      "Solve hidden quadratics involving x^(2/3), √x, e^(2x), or trigonometric functions, rejecting extraneous roots.",
      "Express quadratic inequality solutions accurately in interval or set notation using a quick sketch."
    ]
  },
  "al-maths-1-2": {
    "subtopicId": "al-maths-1-2",
    "subtopicCode": "1.2",
    "subtopicTitle": "Surds, Indices, Inequalities & the Factor Theorem",
    "readingMinutes": 10,
    "videoTitle": "Quadratics in less than 28 minutes - A-Level Pure Year 1",
    "youtubeId": "HssHkcd68e8",
    "videoChannel": "Bicen Maths",
    "videoDuration": "27:11",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Factorising & Completing the Square",
        "cardId": "al-maths-1-2-c1"
      },
      {
        "time": "7:00",
        "seconds": 420,
        "label": "Sketching Polynomials & Turning Points",
        "cardId": "al-maths-1-2-c2"
      },
      {
        "time": "14:20",
        "seconds": 860,
        "label": "Using the Discriminant & Roots",
        "cardId": "al-maths-1-2-c3"
      },
      {
        "time": "21:20",
        "seconds": 1280,
        "label": "Disguised Equations & Proof Modelling",
        "cardId": "al-maths-1-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-1-2-c1",
        "title": "Fractional & Negative Indices",
        "summary": "Evaluating negative and fractional indices cleanly for algebra and calculus.",
        "bullets": [
          "**Core laws**: a^m × a^n = a^(m+n); a^m ÷ a^n = a^(m−n); (a^m)^n = a^(mn); a^0 = 1; a^(−n) = 1 / a^n; a^(m/n) = (ⁿ√a)^m.",
          "**Worked Example 1**: Evaluate (27/8)^(−2/3). Step 1 (negative flips fraction): (8/27)^(2/3). Step 2 (cube root first to keep numbers small): (∛8 / ∛27)² = (2/3)² = 4/9.",
          "**Worked Example 2**: Rewrite (3x² − 4√x) / (2x) in index form for calculus: split the numerator → (3/2)x − 2x^(−1/2)."
        ],
        "memoryAid": "Fractional power m/n = \"Flower power\": Power on TOP (m), Root at the BOTTOM (n) underground!",
        "subsections": [
          {
            "heading": "Rationalising & Fractional Indices",
            "bullets": [
              "**Binomial conjugate** - multiply top and bottom of k / (a + √b) by (a − √b) to clear the surd via a² − b."
            ],
            "exampleHeading": "Worked example: Rationalise (4 + √3) / (2 − √3)",
            "examples": [
              "Multiply by (2 + √3)/(2 + √3): (8 + 6√3 + 3) / (4 − 3) = **11 + 6√3**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-1-2-c2",
        "title": "Manipulating Surds & Rationalising Conjugate Denominators",
        "summary": "Multiplying by surd conjugates to rationalise binomial denominators exactly.",
        "bullets": [
          "To rationalise a / (b + c√d), multiply numerator and denominator by the conjugate (b − c√d), exploiting difference of two squares: (b + c√d)(b − c√d) = b² − c²d.",
          "**Worked Example 3**: Simplify (5 + √3) / (2 − √3). Multiply top and bottom by (2 + √3): Numerator = (5 + √3)(2 + √3) = 10 + 5√3 + 2√3 + 3 = 13 + 7√3. Denominator = 2² − (√3)² = 4 − 3 = 1. Final exact answer: 13 + 7√3.",
          "Always show every intermediate expansion step on \"show that\" / \"detailed reasoning\" exam questions because calculators can simplify surds automatically."
        ],
        "commonMistake": "When expanding (2 + √3)², never write 4 + 3 = 7! Remember the cross-term: (2 + √3)² = 4 + 4√3 + 3 = 7 + 4√3.",
        "subsections": [
          {
            "heading": "Factor Theorem & Polynomial Division",
            "bullets": [
              "**Factor Theorem** - (ax − b) is a factor of f(x) iff f(b/a) = 0."
            ],
            "exampleHeading": "Worked example: Test if (x − 2) divides f(x) = x³ − 3x² − 4x + 12",
            "examples": [
              "f(2) = 8 − 12 − 8 + 12 = 0 ⇒ (x − 2) is a factor; dividing gives (x − 2)(x − 3)(x + 2)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "conjugate",
            "definition": "Expression (a − √b) paired with (a + √b) so their product a² − b is rational."
          },
          {
            "term": "surd",
            "definition": "Irrational root such as √3 left in exact radical form rather than a rounded decimal."
          }
        ]
      },
      {
        "id": "al-maths-1-2-c3",
        "title": "The Factor Theorem & Cubic Factorisation",
        "summary": "Proving polynomial factors with f(b/a) = 0 and fully factorising cubics.",
        "bullets": [
          "Factor Theorem: For a polynomial f(x), (ax − b) is a factor of f(x) IF AND ONLY IF f(b/a) = 0. Specifically, (x − p) is a factor iff f(p) = 0.",
          "**Worked Example 4**: Show that (x − 2) is a factor of f(x) = 2x³ − 3x² − 8x + 12 and factorise completely. Step 1: f(2) = 2(8) − 3(4) − 8(2) + 12 = 16 − 12 − 16 + 12 = 0, therefore (x − 2) is a factor (always write this concluding sentence!).",
          "**Step 2 (inspection / equating coefficients)**: 2x³ − 3x² − 8x + 12 = (x − 2)(2x² + kx − 6). Comparing x² coefficients: −4 + k = −3 ⇒ k = 1. Factorise 2x² + x − 6 = (2x − 3)(x + 2). Complete factorisation: (x − 2)(2x − 3)(x + 2)."
        ],
        "glossaryPills": [
          {
            "term": "Factor Theorem",
            "definition": "Theorem stating that (ax − b) divides polynomial f(x) with zero remainder if and only if f(b/a) = 0."
          }
        ]
      },
      {
        "id": "al-maths-1-2-c4",
        "title": "Mathematical Proof Methods (Deduction, Exhaustion, Counter-Example & Contradiction)",
        "summary": "Writing formal proofs by deduction, counter-example, exhaustion, and contradiction.",
        "bullets": [
          "**Proof by deduction**: Start from known definitions (even = 2n, odd = 2n + 1, consecutive integers = n, n+1) and derive the result algebraically for ALL values.",
          "**Disproof by counter-example**: A single specific input that makes a universal statement false immediately disproves it (e.g., n² + n + 41 is not always prime because n = 41 gives 41 × 43).",
          "Proof by contradiction (Year 2): Assume the negation of the theorem is true (e.g., assume √2 = a/b in lowest terms, or assume finitely many primes p₁, …, pₙ and construct N = p₁p₂…pₙ + 1) and derive a logical impossibility, forcing the original statement to hold."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Conjugate surd",
        "definition": "Expression formed by reversing the sign between rational and irrational terms (e.g., a − b√c is the conjugate of a + b√c)."
      },
      {
        "term": "Proof by contradiction",
        "definition": "Proof technique assuming the opposite of the desired statement and showing it leads to a logical impossibility."
      },
      {
        "term": "Repeated root",
        "definition": "A factor (x − a)² in a polynomial where the curve touches and bounces off the x-axis at x = a."
      }
    ],
    "checklistPoints": [
      "Evaluate negative and fractional powers cleanly without calculator errors.",
      "Rationalise binomial surd denominators showing full step-by-step expansion.",
      "Apply the Factor Theorem with explicit conclusion statement and factorise cubics completely.",
      "Write rigorous proofs by deduction, exhaustion, counter-example, and contradiction."
    ]
  },
  "al-maths-1-3": {
    "subtopicId": "al-maths-1-3",
    "subtopicCode": "1.3",
    "subtopicTitle": "Coordinate Geometry — Straight Lines & Circles",
    "readingMinutes": 11,
    "videoTitle": "A-Level Maths: Circles - Introducing the Equation of the Circle",
    "youtubeId": "G6C0lbELl2Y",
    "videoChannel": "TLMaths",
    "videoDuration": "3:53",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Pythagoras Derivation of Circle Equation",
        "cardId": "al-maths-1-3-c1"
      },
      {
        "time": "1:15",
        "seconds": 75,
        "label": "Standard Form: (x − a)² + (y − b)² = r²",
        "cardId": "al-maths-1-3-c2"
      },
      {
        "time": "2:35",
        "seconds": 155,
        "label": "Finding Centre & Radius Examples",
        "cardId": "al-maths-1-3-c3"
      }
    ],
    "cards": [
      {
        "id": "al-maths-1-3-c1",
        "title": "Straight Lines, Midpoints & Perpendicular Bisectors",
        "summary": "Gradient, midpoint, distance, point–gradient lines, and perpendicular bisectors.",
        "bullets": [
          "Between A(x₁, y₁) and B(x₂, y₂): Gradient m = (y₂ − y₁)/(x₂ − x₁); Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2); Distance d = √((x₂ − x₁)² + (y₂ − y₁)²).",
          "**Point–gradient equation**: y − y₁ = m(x − x₁). Two lines are perpendicular iff m₁ × m₂ = −1 (so m₂ = −1/m₁).",
          "**Perpendicular bisector of chord AB**: Passes through the midpoint M of AB with gradient −1/m_AB — crucially, the perpendicular bisector of ANY chord of a circle passes directly through the circle’s centre!"
        ],
        "subsections": [
          {
            "heading": "Point-Slope Form & Perpendiculars",
            "bullets": [
              "**y − y₁ = m(x − x₁)** - fastest A-Level route to a line equation; perpendiculars satisfy m₁m₂ = −1."
            ],
            "exampleHeading": "Worked example: Tangent to (x − 2)² + (y + 1)² = 25 at (5, 3)",
            "examples": [
              "Radius gradient from (2, −1) to (5, 3) is 4/3 → tangent gradient = −3/4 → y − 3 = −¾(x − 5) ⇒ 3x + 4y = 27."
            ]
          }
        ]
      },
      {
        "id": "al-maths-1-3-c2",
        "title": "Equation of a Circle & Finding Centre and Radius",
        "summary": "Completing the square on x and y to read circle centre (a, b) and radius r.",
        "bullets": [
          "**Standard form**: (x − a)² + (y − b)² = r² has centre C(a, b) and radius r.",
          "**Expanded form**: x² + y² + 2fx + 2gy + c = 0 has centre (−f, −g) and radius √(f² + g² − c) — best found reliably by completing the square on both x and y.",
          "**Worked Example 1**: Find the centre and radius of x² + y² − 6x + 10y − 15 = 0. Group terms: (x² − 6x) + (y² + 10y) = 15 → (x − 3)² − 9 + (y + 5)² − 25 = 15 → (x − 3)² + (y + 5)² = 49. Hence Centre = (3, −5) and Radius = √49 = 7."
        ],
        "commonMistake": "Two classic sign errors: (1) For (x + 5)², the centre coordinate is −5, not +5; (2) Remember the right-hand side is r² (49), so take the square root to get radius r = 7!",
        "subsections": [
          {
            "heading": "Completing the Square for Circle Centre & Radius",
            "bullets": [
              "**x² + y² + 2gx + 2fy + c = 0** - complete the square on x and y separately to get (x − a)² + (y − b)² = r²."
            ],
            "exampleHeading": "Worked example: x² + y² − 6x + 8y − 11 = 0",
            "examples": [
              "(x − 3)² − 9 + (y + 4)² − 16 − 11 = 0 ⇒ (x − 3)² + (y + 4)² = 36 → Centre **(3, −4)**, radius **6**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "tangent",
            "definition": "Line touching a circle at one point, perpendicular to the radius at that point."
          },
          {
            "term": "normal",
            "definition": "Line perpendicular to the tangent at the point of contact — passes through the circle’s centre."
          }
        ]
      },
      {
        "id": "al-maths-1-3-c3",
        "title": "Tangents, Normals & Line–Circle Intersections",
        "summary": "Finding circle tangents/normals and testing line intersections via Δ = b² − 4ac.",
        "bullets": [
          "A tangent to a circle at point P is PERPENDICULAR to the radius CP (so m_tangent = −1 / m_CP). The normal at P IS the line through centre C and point P.",
          "**Worked Example 2**: Find the tangent to (x − 2)² + (y + 1)² = 25 at P(5, 3). Centre C(2, −1). Gradient of radius CP = (3 − (−1))/(5 − 2) = 4/3. Tangent gradient = −3/4. Equation: y − 3 = −(3/4)(x − 5) ⇒ 3x + 4y − 27 = 0.",
          "**Line–circle intersection**: Substitute y = mx + c into the circle equation to obtain a quadratic in x. Compute discriminant Δ = b² − 4ac: Δ > 0 (line cuts circle at 2 points), Δ = 0 (line is TANGENT at 1 point), Δ < 0 (line misses circle completely)."
        ],
        "glossaryPills": [
          {
            "term": "normal to a circle",
            "definition": "The straight line perpendicular to the tangent at the point of contact — every normal to a circle passes through its centre."
          }
        ]
      },
      {
        "id": "al-maths-1-3-c4",
        "title": "Geometric Properties of Circles in Exam Problems",
        "summary": "Applying semicircle right angles, chord bisectors, and boundary checks.",
        "bullets": [
          "Angle in a semicircle is 90°: If triangle PQR has a right angle at Q (verify via m_PQ × m_QR = −1 or Pythagoras PQ² + QR² = PR²), then PR is a DIAMETER of the circumcircle, so the centre is the midpoint of PR and radius = ½ PR.",
          "Distance from centre C to a tangent line equals radius r; distance from C to a chord of length L gives a right triangle with hypotenuse r, base L/2, and perpendicular height d = √(r² − (L/2)²).",
          "**Checking whether point Q lies inside, on, or outside the circle**: compare CQ² against r² (CQ² < r² inside; CQ² = r² on circle; CQ² > r² outside)."
        ],
        "memoryAid": "Three magic circle geometry facts for A-Level: Radius ⊥ Tangent; Chord ⊥ Bisector passes through Centre; Right angle in triangle ⇒ Hypotenuse is Diameter."
      }
    ],
    "keyTerms": [
      {
        "term": "Perpendicular bisector",
        "definition": "Line cutting a segment at 90° through its midpoint; for any circle chord, it passes through the centre."
      },
      {
        "term": "Circumcircle",
        "definition": "Unique circle passing through all three vertices of a triangle; its centre lies where perpendicular bisectors of the sides intersect."
      },
      {
        "term": "Tangent",
        "definition": "Straight line touching a curve at exactly one point (Δ = 0) and meeting the circle’s radius at 90°."
      }
    ],
    "checklistPoints": [
      "Complete the square on expanded circle equations to extract exact centre (a, b) and radius r.",
      "Find equations of tangents and normals to circles at specified boundary points.",
      "Use substitution and the discriminant to test line–circle intersections or tangency.",
      "Apply perpendicular chord bisectors and right-angled triangles (semicircle theorem) to locate circle centres."
    ]
  },
  "al-maths-2-1": {
    "subtopicId": "al-maths-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Binomial Expansion (Integer & Rational Powers)",
    "readingMinutes": 11,
    "videoTitle": "A-Level Maths: Binomial Expansion - Pascal’s Triangle and nCr",
    "youtubeId": "Bw-9_Rq2bp4",
    "videoChannel": "TLMaths",
    "videoDuration": "11:12",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Pascal’s Triangle & Expanding (a + b)ⁿ",
        "cardId": "al-maths-2-1-c1"
      },
      {
        "time": "3:05",
        "seconds": 185,
        "label": "Linking Binomial Coefficients to nCr",
        "cardId": "al-maths-2-1-c2"
      },
      {
        "time": "6:25",
        "seconds": 385,
        "label": "The Binomial Expansion Formula",
        "cardId": "al-maths-2-1-c3"
      },
      {
        "time": "9:00",
        "seconds": 540,
        "label": "Worked Term-Finding Example",
        "cardId": "al-maths-2-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-2-1-c1",
        "title": "Positive Integer Binomial Expansion (Year 1)",
        "summary": "Expanding (a + b)ⁿ and extracting target coefficients using ⁿCᵣ.",
        "bullets": [
          "**For positive integer n**: (a + b)ⁿ = aⁿ + ⁿC₁ aⁿ⁻¹ b + ⁿC₂ aⁿ⁻² b² + … + ⁿCᵣ aⁿ⁻ʳ bʳ + … + bⁿ, where ⁿCᵣ = n! / (r!(n − r)!).",
          "**Worked Example 1**: Find the coefficient of x³ in (2 − 3x)⁵. The x³ term corresponds to r = 3: ⁵C₃ (2)² (−3x)³ = 10 × 4 × (−27x³) = −1080x³, so coefficient is −1080.",
          "Always enclose negative terms like (−3x) in brackets before raising to powers so alternating signs stay accurate!"
        ],
        "subsections": [
          {
            "heading": "Positive Integer Expansion (a + bx)ⁿ",
            "bullets": [
              "**General term** - ⁿC_r aⁿ⁻ʳ (bx)ʳ; remember to raise the ENTIRE bx (including b and any minus sign!) to power r."
            ],
            "exampleHeading": "Worked example: x² term in (2 − 3x)⁵",
            "examples": [
              "⁵C₂ (2)³ (−3x)² = 10 × 8 × 9x² = **720x²**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-2-1-c2",
        "title": "General Binomial Expansion for Rational & Negative n (Year 2)",
        "summary": "Infinite binomial series for negative and fractional powers with |x| < 1.",
        "bullets": [
          "When n is negative or fractional (e.g., n = −1, −2, ½, −⅓), the expansion is an INFINITE series:",
          "(1 + x)ⁿ = 1 + nx + [n(n − 1)/2!]x² + [n(n − 1)(n − 2)/3!]x³ + …, valid ONLY for |x| < 1 (i.e., −1 < x < 1).",
          "**Worked Example 2**: Expand (1 + 2x)^(−1/2) up to x². Here n = −½ and x → (2x): 1 + (−½)(2x) + [(−½)(−3/2)/2](2x)² = 1 − x + (3/8)(4x²) = 1 − x + (3/2)x². Valid for |2x| < 1 ⇒ |x| < ½."
        ],
        "glossaryPills": [
          {
            "term": "range of validity",
            "definition": "Interval of x values (|u| < 1) for which an infinite binomial series converges to the exact function."
          },
          {
            "term": "binomial coefficient",
            "definition": "ⁿC_r = n! / (r!(n − r)!), giving the coefficient in (a + b)ⁿ."
          },
          {
            "term": "validity interval",
            "definition": "Range |bx/a| < 1 where an infinite binomial expansion converges."
          }
        ],
        "subsections": [
          {
            "heading": "General Binomial Series (1 + bx)ⁿ for Negative/Fractional n",
            "bullets": [
              "**Factor out aⁿ first** - (a + bx)ⁿ = aⁿ(1 + (b/a)x)ⁿ, valid strictly for **|(b/a)x| < 1**."
            ],
            "exampleHeading": "Worked example: Validity range of (4 − 2x)^(−1/2)",
            "examples": [
              "4^(−1/2)(1 − ½x)^(−1/2) → valid for |−½x| < 1 ⇒ **|x| < 2**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-2-1-c3",
        "title": "Expanding (a + bx)ⁿ When a ≠ 1",
        "summary": "Factoring out aⁿ in (a + bx)ⁿ and checking convergence |bx/a| < 1.",
        "bullets": [
          "Because the infinite series formula strictly requires a leading \"1\", you MUST factor out aⁿ first: (a + bx)ⁿ = aⁿ (1 + (b/a)x)ⁿ, valid for |(b/a)x| < 1 ⇒ |x| < |a/b|.",
          "**Worked Example 3**: Expand √(4 − x) = (4 − x)^(1/2) up to x². Factor out 4^(1/2) = 2: 2(1 − x/4)^(1/2) = 2 [1 + (½)(−x/4) + ((½)(−½)/2)(−x/4)²] = 2 [1 − x/8 − x²/128] = 2 − x/4 − x²/64. Valid for |−x/4| < 1 ⇒ |x| < 4.",
          "**Checking approximations**: Substituting x = 0.04 (well inside |x| < 4) gives √3.96 ≈ 2 − 0.01 − 0.000025 = 1.989975 (accurate to 6 significant figures!)."
        ],
        "commonMistake": "The #1 Year 2 error is forgetting to raise the factored-out constant a to the power n! Writing (4 − x)^(1/2) = 4(1 − x/4)^(1/2) instead of 4^(1/2)(1 − x/4)^(1/2) = 2(1 − x/4)^(1/2) costs almost all accuracy marks."
      },
      {
        "id": "al-maths-2-1-c4",
        "title": "Combining Partial Fractions with Binomial Expansion",
        "summary": "Combining partial fractions with binomial expansions and narrower validity bounds.",
        "bullets": [
          "Rational functions like (5x + 1)/((1 − x)(2 + x)) are first split into partial fractions A/(1 − x) + B/(2 + x) = A(1 − x)⁻¹ + B(2 + x)⁻¹.",
          "Expand each term separately up to the required power of x, then sum like terms.",
          "**Combined validity**: Take the STRICTER (narrower) overlap of both intervals! If term 1 needs |x| < 1 and term 2 needs |x| < 2, the combined expansion is valid only for |x| < 1."
        ],
        "memoryAid": "Combined validity = intersection (pick the SMALLER upper bound on |x| so BOTH series converge)."
      }
    ],
    "keyTerms": [
      {
        "term": "Binomial coefficient (ⁿCᵣ)",
        "definition": "Number of ways to choose r items from n, equal to n! / (r!(n − r)!)."
      },
      {
        "term": "Convergence",
        "definition": "Property of an infinite series approaching a finite exact sum as more terms are added."
      },
      {
        "term": "Partial fractions",
        "definition": "Splitting a rational expression with factorised denominator into a sum of simpler fractions."
      }
    ],
    "checklistPoints": [
      "Find specific coefficients in (a + bx)ⁿ for positive integer n using ⁿCᵣ aⁿ⁻ʳ (bx)ʳ.",
      "Factor out aⁿ cleanly before expanding (a + bx)ⁿ for negative or fractional n.",
      "State the exact range of validity |bx/a| < 1 (and take the narrower bound when combining two expansions).",
      "Use small valid substitutions to estimate irrational square or cube roots."
    ]
  },
  "al-maths-2-2": {
    "subtopicId": "al-maths-2-2",
    "subtopicCode": "2.2",
    "subtopicTitle": "Arithmetic & Geometric Sequences and Series",
    "readingMinutes": 11,
    "videoTitle": "Sequences & Series in 23 minutes - A-Level Pure Year 2",
    "youtubeId": "5G7VKXarees",
    "videoChannel": "Bicen Maths",
    "videoDuration": "23:02",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Arithmetic Sequences & Sum Formula (Sₙ)",
        "cardId": "al-maths-2-2-c1"
      },
      {
        "time": "6:00",
        "seconds": 360,
        "label": "Geometric Sequences & Sum to Infinity",
        "cardId": "al-maths-2-2-c2"
      },
      {
        "time": "12:40",
        "seconds": 760,
        "label": "Sigma Notation & Recurrence Relations",
        "cardId": "al-maths-2-2-c3"
      },
      {
        "time": "18:20",
        "seconds": 1100,
        "label": "Modelling with Sequences",
        "cardId": "al-maths-2-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-2-2-c1",
        "title": "Arithmetic Sequences & Series (AP)",
        "summary": "Arithmetic uₙ and Sₙ formulae, examinable sum proof, and worked example.",
        "bullets": [
          "Defined by first term a and constant common difference d = u_{n+1} − u_n.",
          "**nth term**: u_n = a + (n − 1)d. Sum of first n terms: S_n = (n/2)[2a + (n − 1)d] = (n/2)(a + l) where l is the last term.",
          "Examinable proof of S_n: Write S_n = a + (a + d) + … + [a + (n−1)d]; write the exact same sum backwards underneath; add vertically to get n identical pairs of [2a + (n−1)d], so 2S_n = n[2a + (n−1)d] ⇒ S_n = (n/2)[2a + (n−1)d].",
          "**Worked Example 1**: An AP has u₃ = 11 and u₈ = 31. Subtracting (a + 7d) − (a + 2d) gives 5d = 20 ⇒ d = 4, a = 3. Then S₂₀ = 10[6 + 19(4)] = 10 × 82 = 820."
        ],
        "subsections": [
          {
            "heading": "Arithmetic Series Formulae",
            "bullets": [
              "**AP** - uₙ = a + (n − 1)d; Sₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l)."
            ],
            "exampleHeading": "Worked example: Sum of first 20 terms of 3, 7, 11, ...",
            "examples": [
              "a = 3, d = 4, n = 20 → S₂₀ = 10(6 + 19 × 4) = 10 × 82 = **820**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-2-2-c2",
        "title": "Geometric Sequences & Series (GP)",
        "summary": "Geometric uₙ and Sₙ proof plus solving index inequalities carefully with logs.",
        "bullets": [
          "Defined by first term a and constant common ratio r = u_{n+1} / u_n.",
          "**nth term**: u_n = a r^(n−1). Sum of first n terms: S_n = a(1 − rⁿ) / (1 − r) = a(rⁿ − 1) / (r − 1) for r ≠ 1.",
          "Examinable proof of S_n: Write S_n = a + ar + ar² + … + arⁿ⁻¹; multiply by r to get rS_n = ar + ar² + … + arⁿ; subtract S_n − rS_n = a − arⁿ ⇒ S_n(1 − r) = a(1 − rⁿ).",
          "**Worked Example 2**: A GP has a = 5, r = 1.2. Find least integer n for S_n > 200. 5(1.2ⁿ − 1)/(0.2) > 200 ⇒ 25(1.2ⁿ − 1) > 200 ⇒ 1.2ⁿ > 9 ⇒ n ln(1.2) > ln(9) ⇒ n > 12.05 ⇒ least integer n = 13."
        ],
        "commonMistake": "When solving an inequality like (0.8)ⁿ < 0.05 using logarithms, remember ln(0.8) is NEGATIVE — dividing by ln(0.8) REVERSES the inequality sign to n > ln(0.05)/ln(0.8) = 13.42, so n = 14!",
        "subsections": [
          {
            "heading": "Geometric Series & Sum to Infinity",
            "bullets": [
              "**GP** - uₙ = arⁿ⁻¹; Sₙ = a(1 − rⁿ)/(1 − r); **S_∞ = a / (1 − r)** strictly when **|r| < 1**."
            ],
            "exampleHeading": "Worked example: Sum to infinity of 12, 4, 4/3, ...",
            "examples": [
              "a = 12, r = 1/3 (|r| < 1 ✓) → S_∞ = 12 / (1 − 1/3) = 12 ÷ (2/3) = **18**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "sum to infinity",
            "definition": "Convergent limit S_∞ = a / (1 − r) of a geometric series when |r| < 1."
          },
          {
            "term": "sigma notation",
            "definition": "Compact shorthand Σ summing a formula across integer index limits."
          }
        ]
      },
      {
        "id": "al-maths-2-2-c3",
        "title": "Convergent Geometric Series & Sum to Infinity",
        "summary": "Convergence condition |r| < 1 and sum to infinity S_∞ = a / (1 − r).",
        "bullets": [
          "As n → ∞, rⁿ → 0 IF AND ONLY IF |r| < 1 (i.e., −1 < r < 1). Under this condition the series converges to S_∞ = a / (1 − r).",
          "**Worked Example 3**: A ball dropped from 12 m rebounds to 3/4 of its previous height on each bounce. Total distance travelled = 12 (first drop) + 2 × [9 + 6.75 + …] (each bounce goes up and down) = 12 + 2 × [9 / (1 − 3/4)] = 12 + 2(36) = 84 m.",
          "**Checking consecutive GP terms x, y, z**: always set y/x = z/y ⇒ y² = xz."
        ],
        "glossaryPills": [
          {
            "term": "convergent geometric series",
            "definition": "A geometric series with |r| < 1 whose partial sums approach the finite limit S_∞ = a / (1 − r)."
          }
        ]
      },
      {
        "id": "al-maths-2-2-c4",
        "title": "Sigma Notation (Σ) & Recurrence Relations",
        "summary": "Evaluating shifted sigma sums and classifying periodic or convergent recurrences.",
        "bullets": [
          "Always write out the first 3 terms of any Σ expression to spot whether it is arithmetic, geometric, periodic, or telescoping!",
          "**Shifted lower limit**: ∑(r=5 to 20) u_r = S₂₀ − S₄ (NOT S₂₀ − S₅ — include the 5th term!). Also ∑(r=1 to n) c = cn.",
          "Recurrence relations (e.g., u_{n+1} = 0.6 u_n + 8, u₁ = 10): Classified as increasing, decreasing, periodic (repeats with period k if u_{n+k} = u_n), or convergent to a limit L satisfying L = 0.6L + 8 ⇒ L = 20."
        ],
        "memoryAid": "Counting terms from r = k to n inclusive: Number of terms = (n − k) + 1 (never forget the +1!)."
      }
    ],
    "keyTerms": [
      {
        "term": "Common difference (d)",
        "definition": "Constant amount added between consecutive terms of an arithmetic progression."
      },
      {
        "term": "Common ratio (r)",
        "definition": "Constant multiplier between consecutive terms of a geometric progression."
      },
      {
        "term": "Periodic sequence",
        "definition": "Sequence whose terms repeat cyclically every k terms (u_{n+k} = u_n), where k is the order/period."
      }
    ],
    "checklistPoints": [
      "Prove both the arithmetic sum formula S_n and geometric sum formula S_n cleanly from scratch.",
      "Use logarithms carefully to solve geometric inequalities, reversing the sign when dividing by ln(r) for 0 < r < 1.",
      "State |r| < 1 for convergence and apply S_∞ = a / (1 − r) to modelling contexts.",
      "Evaluate sigma sums with non-1 starting limits and classify recurrence relations."
    ]
  },
  "al-maths-3-1": {
    "subtopicId": "al-maths-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "Trigonometry, Radians, Sectors & Small-Angle Approximations",
    "readingMinutes": 11,
    "videoTitle": "A-Level Maths: Trigonometry - Introducing Radians",
    "youtubeId": "nzGDeZS2FF0",
    "videoChannel": "TLMaths",
    "videoDuration": "8:31",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Defining 1 Radian",
        "cardId": "al-maths-3-1-c1"
      },
      {
        "time": "2:10",
        "seconds": 130,
        "label": "Converting Between Degrees and Radians",
        "cardId": "al-maths-3-1-c2"
      },
      {
        "time": "4:40",
        "seconds": 280,
        "label": "Exact Radian Angles (π/6, π/4, π/3, π/2)",
        "cardId": "al-maths-3-1-c3"
      },
      {
        "time": "6:45",
        "seconds": 405,
        "label": "Arc Length & Sector Area Preview",
        "cardId": "al-maths-3-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-3-1-c1",
        "title": "Radian Measure & Exact Trigonometric Values",
        "summary": "Converting degrees and radians plus exact π/6, π/4, and π/3 trig ratios.",
        "bullets": [
          "One radian is the angle subtended at the centre of a circle by an arc equal in length to the radius. Since circumference = 2πr, 2π rad = 360° and π rad = 180°.",
          "**Conversions**: Degrees → Radians: multiply by π/180; Radians → Degrees: multiply by 180/π.",
          "**Essential exact values**: π/6 (30°): sin = ½, cos = √3/2, tan = 1/√3; π/4 (45°): sin = √2/2, cos = √2/2, tan = 1; π/3 (60°): sin = √3/2, cos = ½, tan = √3.",
          "**Why radians are mandatory in Year 2 calculus**: d/dx(sin x) = cos x holds ONLY when x is measured in radians!"
        ],
        "subsections": [
          {
            "heading": "Radians, Arcs & Sectors",
            "bullets": [
              "**π rad = 180°** - arc length **s = rθ**, sector area **A = ½r²θ**, segment area **½r²(θ − sin θ)** (θ MUST be in radians!)."
            ],
            "exampleHeading": "Worked example: Sector with r = 8 cm, θ = 0.75 rad",
            "examples": [
              "Arc s = 8 × 0.75 = **6 cm**; Area = ½ × 64 × 0.75 = **24 cm²**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-3-1-c2",
        "title": "Arc Length, Sector Area & Segment Area (θ in Radians)",
        "summary": "Calculating arc length rθ, sector area ½r²θ, and minor segment area.",
        "bullets": [
          "**Arc length**: l = rθ. Sector area: A_sector = ½ r²θ. Triangle area inside sector: A_triangle = ½ r² sin θ.",
          "**Area of minor segment (shaded cap between chord and arc)**: A_segment = A_sector − A_triangle = ½ r²(θ − sin θ).",
          "**Worked Example 1**: A sector of radius 8 cm has arc length 10 cm. Find θ and the segment area. θ = l/r = 10/8 = 1.25 rad. Segment area = ½(8²)(1.25 − sin 1.25) = 32(1.25 − 0.94898) = 9.63 cm² (3 s.f.)."
        ],
        "commonMistake": "Always check your calculator displays \"R\" (RAD) before computing sin(1.25) or solving radian trig equations — leaving it in DEG mode is the single costliest slip on Pure Paper 2!",
        "subsections": [
          {
            "heading": "Small-Angle Approximations (θ in Radians)",
            "bullets": [
              "**Three limits** - sin θ ≈ θ, tan θ ≈ θ, **cos θ ≈ 1 − θ²/2** when θ is small and in **radians**."
            ],
            "exampleHeading": "Worked example: Approximate (1 − cos 2θ) / (θ sin 3θ) for small θ",
            "examples": [
              "1 − (1 − (2θ)²/2) = 2θ²; denominator ≈ θ(3θ) = 3θ² → limit = **2/3**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "radian",
            "definition": "Angle subtended at a circle’s centre by an arc equal in length to the radius (2π rad = 360°)."
          },
          {
            "term": "sector",
            "definition": "Region bounded by two radii and an arc, with area ½r²θ in radians."
          }
        ]
      },
      {
        "id": "al-maths-3-1-c3",
        "title": "Small-Angle Approximations (θ Small & in Radians)",
        "summary": "Applying sin θ ≈ θ, tan θ ≈ θ, and cos θ ≈ 1 − θ²/2 for small radian angles.",
        "bullets": [
          "**When θ is small (measured in radians)**: sin θ ≈ θ, tan θ ≈ θ, and cos θ ≈ 1 − θ²/2.",
          "**Worked Example 2**: Show that for small θ, (cos 4θ − 1) / (θ sin 2θ) ≈ −4. Substitute cos(4θ) ≈ 1 − (4θ)²/2 = 1 − 8θ² and sin(2θ) ≈ 2θ. Numerator = (1 − 8θ²) − 1 = −8θ². Denominator = θ(2θ) = 2θ². Ratio = −8θ² / 2θ² = −4.",
          "**Notice how compound arguments substitute cleanly**: cos(3θ) ≈ 1 − (3θ)²/2 = 1 − (9/2)θ² (square the 3 too!)."
        ],
        "glossaryPills": [
          {
            "term": "small-angle approximation",
            "definition": "Leading Taylor-series approximations (sin θ ≈ θ, cos θ ≈ 1 − θ²/2, tan θ ≈ θ) accurate for small radian angles."
          }
        ]
      },
      {
        "id": "al-maths-3-1-c4",
        "title": "Solving Trigonometric Equations Over an Interval",
        "summary": "Adjusting transformed intervals first to find every root cleanly.",
        "bullets": [
          "**Principal & secondary solutions**: For sin x = k, second angle is π − α (180° − α); for cos x = k, second angle is −α or 2π − α (360° − α); for tan x = k, add/subtract multiples of π (180°).",
          "Transformed arguments (e.g., solve sin(2x − π/6) = 0.5 for 0 ≤ x ≤ 2π): Step 1 — Adjust the interval BEFORE taking arcsin: −π/6 ≤ 2x − π/6 ≤ 23π/6. Step 2 — Find ALL solutions for u = 2x − π/6 in the adjusted range: π/6, 5π/6, 13π/6, 17π/6. Step 3 — Rearrange x = (u + π/6)/2 ⇒ x = π/6, π/2, 7π/6, 3π/2."
        ],
        "memoryAid": "Always adjust the range FIRST for compound angles like (2x − 30°), find all solutions, and convert back to x LAST!"
      }
    ],
    "keyTerms": [
      {
        "term": "Radian",
        "definition": "SI unit of angle defined as the angle subtended by an arc of length equal to the circle’s radius (π rad = 180°)."
      },
      {
        "term": "Minor segment",
        "definition": "Region enclosed between a chord and its minor arc, with area ½r²(θ − sin θ)."
      },
      {
        "term": "Principal value",
        "definition": "The unique angle returned by the inverse trig functions arcsin ([−π/2, π/2]), arccos ([0, π]), and arctan ((−π/2, π/2))."
      }
    ],
    "checklistPoints": [
      "Convert seamlessly between degrees and exact multiples of π radians.",
      "Calculate arc lengths, sector areas, and segment areas using l = rθ and A = ½r²(θ − sin θ).",
      "Apply small-angle approximations to simplify expressions including multiple angles like cos(3θ).",
      "Adjust the solution domain before finding all roots of transformed trig equations."
    ]
  },
  "al-maths-3-2": {
    "subtopicId": "al-maths-3-2",
    "subtopicCode": "3.2",
    "subtopicTitle": "Trigonometric Identities, Addition Formulae & R-Formula",
    "readingMinutes": 12,
    "videoTitle": "Trigonometric Identities & Equations - A-Level Pure Year 1",
    "youtubeId": "8spZW7G6yV0",
    "videoChannel": "Bicen Maths",
    "videoDuration": "20:19",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "CAST Diagram & Principal Values",
        "cardId": "al-maths-3-2-c1"
      },
      {
        "time": "5:20",
        "seconds": 320,
        "label": "Core Identities: tan = sin/cos & sin² + cos² = 1",
        "cardId": "al-maths-3-2-c2"
      },
      {
        "time": "11:20",
        "seconds": 680,
        "label": "Solving Quadratic Trig Equations",
        "cardId": "al-maths-3-2-c3"
      },
      {
        "time": "16:20",
        "seconds": 980,
        "label": "Solving Equations with Multiple Angles",
        "cardId": "al-maths-3-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-3-2-c1",
        "title": "Reciprocal Trig Functions & Pythagorean Identities",
        "summary": "Defining sec, cosec, and cot and solving equations with 1 + tan²θ ≡ sec²θ.",
        "bullets": [
          "Definitions (look at the 3rd letter!): sec θ = 1/cos θ, cosec θ = 1/sin θ, cot θ = 1/tan θ = cos θ / sin θ.",
          "**Core identity**: sin²θ + cos²θ ≡ 1. Dividing by cos²θ gives 1 + tan²θ ≡ sec²θ; dividing by sin²θ gives 1 + cot²θ ≡ cosec²θ.",
          "**Worked Example 1**: Solve sec²x = 3 + tan x for 0° ≤ x ≤ 360°. Replace sec²x with 1 + tan²x → 1 + tan²x = 3 + tan x → tan²x − tan x − 2 = 0 → (tan x − 2)(tan x + 1) = 0 → tan x = 2 (63.4°, 243.4°) or tan x = −1 (135°, 315°)."
        ],
        "memoryAid": "Third-letter trick: seC = 1/Cos; coSec = 1/Sin; coT = 1/Tan!",
        "subsections": [
          {
            "heading": "Pythagorean & Reciprocal Identities",
            "bullets": [
              "**Three identities** - sin²θ + cos²θ ≡ 1; **1 + tan²θ ≡ sec²θ**; **1 + cot²θ ≡ cosec²θ**."
            ],
            "exampleHeading": "Worked example: Solve sec²x = 3 tan x − 1",
            "examples": [
              "Replace sec²x with 1 + tan²x: tan²x − 3 tan x + 2 = 0 → (tan x − 1)(tan x − 2) = 0 → tan x = 1 or 2."
            ]
          }
        ]
      },
      {
        "id": "al-maths-3-2-c2",
        "title": "Addition & Double-Angle Formulae",
        "summary": "Addition formulae, three cos 2A forms, and power-reduction identities.",
        "bullets": [
          "**Addition formulae**: sin(A ± B) ≡ sin A cos B ± cos A sin B; cos(A ± B) ≡ cos A cos B ∓ sin A sin B (note the flipped sign!); tan(A ± B) ≡ (tan A ± tan B) / (1 ∓ tan A tan B).",
          "Double-angle identities (set B = A): sin 2A ≡ 2 sin A cos A; tan 2A ≡ (2 tan A)/(1 − tan²A); and THREE vital forms of cos 2A:",
          "cos 2A ≡ cos²A − sin²A ≡ 2cos²A − 1 ≡ 1 − 2sin²A.",
          "Rearranged power-reduction forms (essential for integrating sin²x and cos²x!): cos²A ≡ ½(1 + cos 2A) and sin²A ≡ ½(1 − cos 2A)."
        ],
        "subsections": [
          {
            "heading": "Harmonic R-Formula a cos θ + b sin θ = R cos(θ − α)",
            "bullets": [
              "**R = √(a² + b²)** and **tan α = b/a** — immediately reveals maximum (+R) and minimum (−R) values!"
            ],
            "exampleHeading": "Worked example: Express 3 cos θ + 4 sin θ as R cos(θ − α)",
            "examples": [
              "R = √(3² + 4²) = **5**; tan α = 4/3 → α = **53.1°** → 5 cos(θ − 53.1°)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "secant",
            "definition": "Reciprocal of cosine: sec θ = 1 / cos θ."
          },
          {
            "term": "double-angle formula",
            "definition": "sin 2A = 2 sin A cos A; cos 2A = cos²A − sin²A = 2 cos²A − 1 = 1 − 2 sin²A."
          },
          {
            "term": "R-formula",
            "definition": "Rewriting a cos θ + b sin θ into a single wave R cos(θ − α) with amplitude R = √(a² + b²)."
          }
        ]
      },
      {
        "id": "al-maths-3-2-c3",
        "title": "Harmonic Form (The R-Formula)",
        "summary": "Rewriting a cos θ ± b sin θ into R cos(θ ∓ α) by equating coefficients.",
        "bullets": [
          "Any linear combination a cos θ ± b sin θ (or a sin θ ± b cos θ) can be collapsed into a single shifted cosine or sine wave of amplitude R = √(a² + b²) and acute phase angle α (0 < α < π/2).",
          "**Worked Example 2**: Express 3 cos θ + 4 sin θ in the form R cos(θ − α) with R > 0, 0° < α < 90°. Expand R cos(θ − α) = R cos θ cos α + R sin θ sin α. Equate coefficients: R cos α = 3 and R sin α = 4.",
          "**Square and add**: R = √(3² + 4²) = 5. Divide: tan α = 4/3 ⇒ α = 53.1° (1 d.p.). Therefore 3 cos θ + 4 sin θ ≡ 5 cos(θ − 53.1°).",
          "Solving 3 cos θ + 4 sin θ = 2.5 now reduces cleanly to cos(θ − 53.1°) = 0.5 ⇒ θ − 53.1° = ±60°, etc."
        ],
        "commonMistake": "Always expand the target R form and match coefficients explicitly rather than guessing whether tan α is b/a or a/b — sign errors on cos(θ ± α) disappear completely when you equate coefficients!"
      },
      {
        "id": "al-maths-3-2-c4",
        "title": "Finding Extreme Values & Proving Trigonometric Identities",
        "summary": "Finding exact wave maxima/minima and structuring formal trig identity proofs.",
        "bullets": [
          "Once written as R cos(θ − α), since −1 ≤ cos(θ − α) ≤ 1: Maximum value is +R (when θ − α = 0, 2π, …) and Minimum value is −R (when θ − α = π, …).",
          "**Worked Example 3**: Find the maximum value of 10 / (7 + 3 cos θ + 4 sin θ). Denominator = 7 + 5 cos(θ − 53.1°), whose MINIMUM is 7 − 5 = 2 (when cos(θ − 53.1°) = −1 ⇒ θ = 233.1°). Hence maximum fraction value is 10 / 2 = 5.",
          "**Identity proof rules**: Start strictly from ONE side (usually the more complex LHS), manipulate logically into the RHS using exact identities, and NEVER move terms across an \"=\" sign as though solving an equation."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Double-angle identity",
        "definition": "Trigonometric identity expressing sin 2A, cos 2A, or tan 2A in terms of sin A, cos A, and tan A."
      },
      {
        "term": "Harmonic form (R-formula)",
        "definition": "Rewriting a sin θ + b cos θ as a single sinusoid R sin(θ + α) or R cos(θ − α) with amplitude R = √(a² + b²)."
      },
      {
        "term": "Reciprocal trig functions",
        "definition": "sec θ = 1/cos θ, cosec θ = 1/sin θ, and cot θ = 1/tan θ."
      }
    ],
    "checklistPoints": [
      "Derive and apply 1 + tan²θ ≡ sec²θ and 1 + cot²θ ≡ cosec²θ to solve quadratic trig equations.",
      "Select the optimal form of cos 2A (2cos²A − 1 or 1 − 2sin²A) when solving equations or integrating.",
      "Convert a cos θ ± b sin θ into R cos(θ ∓ α) or R sin(θ ± α) by equating coefficients.",
      "Find exact maxima, minima, and corresponding θ values in real-world wave/tide modelling problems."
    ]
  },
  "al-maths-3-3": {
    "subtopicId": "al-maths-3-3",
    "subtopicCode": "3.3",
    "subtopicTitle": "Exponentials, Natural Logarithms & Modelling",
    "readingMinutes": 11,
    "videoTitle": "Exponentials & Logarithms - A-Level Pure Year 1",
    "youtubeId": "EdN6irvBYqc",
    "videoChannel": "Bicen Maths",
    "videoDuration": "31:58",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Exponential Graphs (aˣ & eˣ) & Differentiation",
        "cardId": "al-maths-3-3-c1"
      },
      {
        "time": "8:20",
        "seconds": 500,
        "label": "Logarithm Laws & Natural Log ln(x)",
        "cardId": "al-maths-3-3-c2"
      },
      {
        "time": "17:20",
        "seconds": 1040,
        "label": "Solving Exponential & Log Equations",
        "cardId": "al-maths-3-3-c3"
      },
      {
        "time": "25:20",
        "seconds": 1520,
        "label": "Linearising Non-Linear Data (Log Graphs)",
        "cardId": "al-maths-3-3-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-3-3-c1",
        "title": "The Natural Exponential Function y = eˣ & y = ln x",
        "summary": "Key graph features, asymptotes, and derivatives of y = eˣ and y = ln x.",
        "bullets": [
          "Euler’s number e ≈ 2.71828 is the unique base such that the gradient of y = eˣ equals the y-value itself at every point: d/dx(eˣ) = eˣ and d/dx(e^(kx)) = k e^(kx).",
          "y = ln x (logₑ x) is the inverse function of y = eˣ, reflected across the line y = x. Key properties: e^(ln x) = x (for x > 0), ln(eˣ) = x, ln 1 = 0, ln e = 1.",
          "**Graph features**: y = eˣ has horizontal asymptote y = 0, y-intercept (0, 1), and range y > 0; y = ln x has vertical asymptote x = 0, x-intercept (1, 0), and domain x > 0."
        ],
        "subsections": [
          {
            "heading": "Logarithm Laws & Natural Base e",
            "bullets": [
              "**Three laws** - log(ab) = log a + log b; log(a/b) = log a − log b; log(aᵏ) = k log a; **ln(eˣ) = x**."
            ],
            "exampleHeading": "Worked example: Solve 3^(2x−1) = 15",
            "examples": [
              "Take ln both sides: (2x − 1) ln 3 = ln 15 → 2x − 1 = ln 15 / ln 3 = 2.465 → x = **1.73** (3 s.f.)."
            ]
          }
        ]
      },
      {
        "id": "al-maths-3-3-c2",
        "title": "Laws of Logarithms & Exact Equation Solving",
        "summary": "Combining logarithm laws, solving exact index equations, and rejecting invalid roots.",
        "bullets": [
          "Core laws (for x, y > 0, same base a): log_a(xy) = log_a x + log_a y; log_a(x/y) = log_a x − log_a y; log_a(x^k) = k log_a x; log_a(a) = 1; log_a(1) = 0.",
          "**Worked Example 1**: Solve ln(2x + 1) − ln(x − 1) = ln 5. Combine LHS: ln((2x + 1)/(x − 1)) = ln 5 ⇒ (2x + 1)/(x − 1) = 5 ⇒ 2x + 1 = 5x − 5 ⇒ 3x = 6 ⇒ x = 2. Check domain: 2x + 1 = 5 > 0 and x − 1 = 1 > 0 (valid!).",
          "**Worked Example 2**: Solve 3^(2x−1) = 5^x exactly. Take ln of both sides: (2x − 1) ln 3 = x ln 5 ⇒ x(2 ln 3 − ln 5) = ln 3 ⇒ x = ln 3 / ln(9/5)."
        ],
        "commonMistake": "ALWAYS check candidate solutions in the original log equation — logarithms are undefined for zero or negative arguments, so extraneous roots (e.g., x = −3 inside ln(x + 1)) MUST be rejected!",
        "subsections": [
          {
            "heading": "Linearising Exponential & Power Curves",
            "bullets": [
              "**y = abˣ** → ln y = x ln b + ln a (plot ln y vs x: gradient = ln b, intercept = ln a).",
              "**y = axⁿ** → ln y = n ln x + ln a (plot ln y vs ln x: gradient = n, intercept = ln a)."
            ],
            "exampleHeading": "Worked example: Line ln y = 0.4x + 2",
            "examples": [
              "ln a = 2 ⇒ a = e² ≈ 7.39; ln b = 0.4 ⇒ b = e^0.4 ≈ 1.49 → y = 7.39(1.49)ˣ."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "natural logarithm",
            "definition": "Logarithm to base e (ln x = log_e x), inverse function of eˣ."
          },
          {
            "term": "linearisation",
            "definition": "Taking logs of non-linear data (y = abˣ or y = axⁿ) to produce a straight line Y = mX + c."
          }
        ]
      },
      {
        "id": "al-maths-3-3-c3",
        "title": "Exponential Growth & Decay Modelling",
        "summary": "Interpreting initial values, asymptotes, and dP/dt in exponential decay models.",
        "bullets": [
          "**Standard model**: P = A e^(kt) + C, where t = 0 gives initial value P₀ = A + C, k > 0 models growth, k < 0 models decay, and as t → ∞ (for k < 0) P approaches long-term asymptote C (e.g., room temperature in Newton’s Law of Cooling).",
          "**Instantaneous rate of change**: dP/dt = k A e^(kt) = k(P − C).",
          "**Worked Example 3**: Value of a car is V = 24000 e^(−0.18t) + 1500. (a) Initial value at t = 0: £25,500. (b) Long-term scrap value as t → ∞: £1,500. (c) Rate of depreciation at t = 4: dV/dt = −4320 e^(−0.72) ≈ −£2,103/year."
        ],
        "glossaryPills": [
          {
            "term": "asymptote",
            "definition": "A line approached arbitrarily closely by a curve as a variable tends to infinity (or a domain boundary)."
          }
        ]
      },
      {
        "id": "al-maths-3-3-c4",
        "title": "Linearising Non-Linear Data Using Logarithms",
        "summary": "Linearising power laws y = axⁿ (log–log) and exponentials y = abˣ (log–linear).",
        "bullets": [
          "Power law y = a xⁿ: Take logs of both sides → log y = n log x + log a. Plotting log y against log x gives a straight line with gradient = n and vertical intercept = log a (so a = 10^intercept or e^intercept).",
          "Exponential law y = a bˣ: Take logs → log y = (log b) x + log a. Plotting log y against x gives a straight line with gradient = log b (so b = 10^gradient) and vertical intercept = log a (so a = 10^intercept).",
          "**Worked Example 4**: A graph of ln y against x passes through (0, 1.4) with gradient −0.3. Since ln y = −0.3x + 1.4, exponentiate both sides: y = e^(1.4) · e^(−0.3x) = 4.06 (0.741)ˣ."
        ],
        "memoryAid": "Power law (xⁿ) needs LOG on BOTH axes (log y vs log x); Exponential law (bˣ) needs LOG on Y ONLY (log y vs x)!"
      }
    ],
    "keyTerms": [
      {
        "term": "Natural logarithm (ln x)",
        "definition": "Logarithm to base e ≈ 2.71828, acting as the exact inverse of the exponential function eˣ."
      },
      {
        "term": "Log-linear plot",
        "definition": "Graph of log y against x that turns an exponential curve y = abˣ into a straight line."
      },
      {
        "term": "Log-log plot",
        "definition": "Graph of log y against log x that turns a power relationship y = axⁿ into a straight line."
      }
    ],
    "checklistPoints": [
      "Apply all logarithm laws cleanly and reject invalid non-positive roots.",
      "Interpret initial values, long-term asymptotes, and rates of change dP/dt in exponential models.",
      "Convert y = axⁿ and y = abˣ into linear Y = mX + c equations and recover constants a, b, n from graph gradients/intercepts."
    ]
  },
  "al-maths-4-1": {
    "subtopicId": "al-maths-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "Differentiation — First Principles, Chain, Product & Quotient Rules",
    "readingMinutes": 12,
    "videoTitle": "Chain, Product and Quotient Rule Explained in 14 Minutes",
    "youtubeId": "LLfOrUH86_E",
    "videoChannel": "NeilDoesMaths",
    "videoDuration": "13:31",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Overview of Differentiation Rules",
        "cardId": "al-maths-4-1-c1"
      },
      {
        "time": "2:45",
        "seconds": 165,
        "label": "The Chain Rule (Composite Functions)",
        "cardId": "al-maths-4-1-c2"
      },
      {
        "time": "6:45",
        "seconds": 405,
        "label": "The Product Rule: u dv/dx + v du/dx",
        "cardId": "al-maths-4-1-c3"
      },
      {
        "time": "10:10",
        "seconds": 610,
        "label": "The Quotient Rule & Exam Tips",
        "cardId": "al-maths-4-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-4-1-c1",
        "title": "First Principles & Core A-Level Derivatives",
        "summary": "First-principles limit definition and all core polynomial, exp, log, and trig derivatives.",
        "bullets": [
          "**First principles definition**: f′(x) = lim(h→0) [f(x + h) − f(x)] / h. (Exam favourite: prove d/dx(sin x) = cos x using sin(x + h) = sin x cos h + cos x sin h and small-angle limits (cos h − 1)/h → 0, (sin h)/h → 1.)",
          "**Standard derivatives (x in radians)**: d/dx(xⁿ) = n xⁿ⁻¹; d/dx(e^(kx)) = k e^(kx); d/dx(ln x) = 1/x; d/dx(aˣ) = aˣ ln a; d/dx(sin kx) = k cos kx; d/dx(cos kx) = −k sin kx; d/dx(tan kx) = k sec²(kx).",
          "Also note d/dx(ln(f(x))) = f′(x)/f(x) and d/dx(e^(f(x))) = f′(x) e^(f(x))."
        ],
        "subsections": [
          {
            "heading": "Chain, Product & Quotient Rules",
            "bullets": [
              "**Product** - (uv)′ = u′v + uv′; **Quotient** - (u/v)′ = (vu′ − uv′) / v²; **Chain** - dy/dx = dy/du × du/dx."
            ],
            "exampleHeading": "Worked example: Differentiate y = x² e^(3x)",
            "examples": [
              "u = x², v = e^(3x) → dy/dx = 2x e^(3x) + 3x² e^(3x) = **x(2 + 3x)e^(3x)**."
            ]
          }
        ],
        "memoryAid": "Key check for 4.1: verify exact A-Level conditions and algebraic signs before finalising!"
      },
      {
        "id": "al-maths-4-1-c2",
        "title": "Chain Rule, Product Rule & Quotient Rule",
        "summary": "Executing Chain, Product, and Quotient rules cleanly with worked examples.",
        "bullets": [
          "**Chain Rule (composite functions)**: dy/dx = (dy/du)(du/dx). Example: y = (3x² + 1)⁵ ⇒ dy/dx = 5(3x² + 1)⁴ × 6x = 30x(3x² + 1)⁴.",
          "Product Rule (u · v): d/dx(uv) = u(dv/dx) + v(du/dx). Worked Example 1: Differentiate y = x² e^(3x). Let u = x² (u′ = 2x), v = e^(3x) (v′ = 3e^(3x)) ⇒ dy/dx = x²(3e^(3x)) + 2x e^(3x) = x e^(3x)(3x + 2).",
          "**Quotient Rule (u / v)**: d/dx(u/v) = [v(du/dx) − u(dv/dx)] / v². Worked Example 2: Differentiate y = sin x / (x + 1). u = sin x (u′ = cos x), v = x + 1 (v′ = 1) ⇒ dy/dx = [(x + 1)cos x − sin x] / (x + 1)²."
        ],
        "commonMistake": "In the Quotient Rule, order matters because of subtraction: ALWAYS start with v·u′ − u·v′ (\"low d-high minus high d-low, over low squared\")!",
        "subsections": [
          {
            "heading": "Implicit & Parametric Differentiation",
            "bullets": [
              "**Implicit** - differentiate every y-term wrt y and multiply by **dy/dx**; **Parametric** - **dy/dx = (dy/dt) ÷ (dx/dt)**."
            ],
            "exampleHeading": "Worked example: Implicit dy/dx for x² + y² = 25",
            "examples": [
              "2x + 2y (dy/dx) = 0 ⇒ **dy/dx = −x / y**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "chain rule",
            "definition": "Rule for differentiating composite functions: d/dx[f(g(x))] = f′(g(x)) · g′(x)."
          },
          {
            "term": "implicit differentiation",
            "definition": "Differentiating an equation where y is not isolated by multiplying each y-derivative by dy/dx."
          }
        ]
      },
      {
        "id": "al-maths-4-1-c3",
        "title": "Implicit & Parametric Differentiation",
        "summary": "Finding dy/dx for implicit curves and parametric equations (dy/dt ÷ dx/dt).",
        "bullets": [
          "**Implicit differentiation**: Differentiate every term with respect to x; whenever differentiating a function of y, apply the chain rule by multiplying by dy/dx (e.g., d/dx(y³) = 3y² dy/dx; d/dx(xy) = x dy/dx + y).",
          "**Worked Example 3**: Find dy/dx for x² + 3xy − y² = 5 at (2, 1). Differentiate: 2x + 3x(dy/dx) + 3y − 2y(dy/dx) = 0. Substitute x = 2, y = 1: 4 + 6(dy/dx) + 3 − 2(dy/dx) = 0 ⇒ 4(dy/dx) = −7 ⇒ dy/dx = −7/4.",
          "Parametric curves (x = f(t), y = g(t)): dy/dx = (dy/dt) ÷ (dx/dt). Tangent is horizontal when dy/dt = 0 (and dx/dt ≠ 0); vertical when dx/dt = 0."
        ]
      },
      {
        "id": "al-maths-4-1-c4",
        "title": "Concavity, Inflection Points & Connected Rates of Change",
        "summary": "Classifying stationary points, inflection sign changes, and connected rates.",
        "bullets": [
          "Stationary points occur where f′(x) = 0: f″(x) > 0 ⇒ local minimum (convex ∪); f″(x) < 0 ⇒ local maximum (concave ∩). If f″(x) = 0, test the sign of f′(x) just left and right!",
          "Point of inflection: Point where concavity CHANGES sign (f″(x) = 0 AND f″ changes from + to − or − to + across x). Not every point of inflection is stationary (non-stationary inflection has f′(x) ≠ 0).",
          "Connected rates of change (Chain Rule): e.g., a sphere inflates at dV/dt = 12 cm³/s. Since V = (4/3)πr³, dV/dr = 4πr², so dr/dt = (dV/dt) ÷ (dV/dr) = 12 / (4πr²) = 3/(πr²)."
        ],
        "glossaryPills": [
          {
            "term": "point of inflection",
            "definition": "Point on a curve where f″(x) = 0 and concavity switches between convex (f″ > 0) and concave (f″ < 0)."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Chain rule",
        "definition": "Rule for differentiating composite functions: d/dx[f(g(x))] = f′(g(x)) · g′(x)."
      },
      {
        "term": "Implicit differentiation",
        "definition": "Differentiating an equation containing mixed x and y terms directly using d/dx(f(y)) = f′(y) dy/dx."
      },
      {
        "term": "Convex function",
        "definition": "Curve bending upwards over an interval where f″(x) ≥ 0 (tangent lines lie below the curve)."
      }
    ],
    "checklistPoints": [
      "Differentiate polynomial and trigonometric functions rigorously from first principles.",
      "Select and execute Chain, Product, and Quotient rules cleanly, factorising the result to locate stationary points.",
      "Differentiate implicit and parametric equations to obtain tangents and normals.",
      "Classify stationary points, test sign changes of f″(x) for inflection points, and solve connected-rate problems."
    ]
  },
  "al-maths-4-2": {
    "subtopicId": "al-maths-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Integration — Substitution, Parts, Partial Fractions & Differential Equations",
    "readingMinutes": 13,
    "videoTitle": "A-Level Maths: Further Integration - Integration by Parts & LATE",
    "youtubeId": "MeHuy4OAuus",
    "videoChannel": "TLMaths",
    "videoDuration": "6:02",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Deriving Integration by Parts from Product Rule",
        "cardId": "al-maths-4-2-c1"
      },
      {
        "time": "1:45",
        "seconds": 105,
        "label": "Choosing u and dv/dx Using LATE",
        "cardId": "al-maths-4-2-c2"
      },
      {
        "time": "3:45",
        "seconds": 225,
        "label": "Worked Example: Integral of x eˣ dx",
        "cardId": "al-maths-4-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-maths-4-2-c1",
        "title": "Standard Integrals & Reverse Chain Rule",
        "summary": "Standard integrals, trig power reductions, and spotting ∫ f′(x)/f(x) dx = ln|f(x)|.",
        "bullets": [
          "**Core integrals**: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ −1); ∫ (1/x) dx = ln|x| + c; ∫ e^(kx) dx = (1/k)e^(kx) + c; ∫ sin(kx) dx = −(1/k)cos(kx) + c; ∫ cos(kx) dx = (1/k)sin(kx) + c; ∫ sec²(kx) dx = (1/k)tan(kx) + c.",
          "Spot ∫ f′(x) / f(x) dx = ln|f(x)| + c immediately! Worked Example 1: ∫ (6x)/(3x² + 5) dx = ln|3x² + 5| + c (since derivative of 3x² + 5 is 6x).",
          "**Trig power integrals**: Rewrite ∫ cos²x dx = ∫ ½(1 + cos 2x) dx = ½x + ¼ sin 2x + c; rewrite ∫ tan²x dx = ∫ (sec²x − 1) dx = tan x − x + c."
        ],
        "subsections": [
          {
            "heading": "Reverse Chain Rule & Substitution",
            "bullets": [
              "**Log recognition** - ∫ f′(x)/f(x) dx = **ln|f(x)| + c**; always convert limits when integrating by substitution!"
            ],
            "exampleHeading": "Worked example: ∫ (2x) / (x² + 5) dx",
            "examples": [
              "Numerator is exact derivative of denominator → **ln(x² + 5) + c**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-4-2-c2",
        "title": "Integration by Substitution",
        "summary": "Integrating by substitution and converting definite limits from x to u.",
        "bullets": [
          "Use substitution u = g(x) to simplify awkward nested expressions like x√(2x + 1). Compute du/dx ⇒ dx = du / g′(x), replace ALL x terms with u, and FOR DEFINITE INTEGRALS ALWAYS CONVERT THE x-LIMITS TO u-LIMITS!",
          "**Worked Example 2**: Evaluate ∫(0 to 4) x√(2x + 1) dx using u = 2x + 1. Then x = (u − 1)/2, du/dx = 2 ⇒ dx = du/2. New limits: x = 0 ⇒ u = 1; x = 4 ⇒ u = 9.",
          "Integral becomes ¼ ∫(1 to 9) (u − 1)u^(1/2) du = ¼ ∫(1 to 9) (u^(3/2) − u^(1/2)) du = ¼ [(2/5)u^(5/2) − (2/3)u^(3/2)]₁⁹ = ¼ [(486/5 − 18) − (2/5 − 2/3)] = ¼ [396/5 + 4/15] = ¼ (1192/15) = 298/15."
        ],
        "commonMistake": "When substituting into a definite integral, never plug the original x-limits into your u-antiderivative! Either convert the limits to u right away (fastest & safest) or substitute x back in before applying x-limits.",
        "subsections": [
          {
            "heading": "Integration by Parts & Separable Differential Equations",
            "bullets": [
              "**IBP (LATE priority for u)** - ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx (choose u in order **Logs, Algebra, Trig, Exponentials**)."
            ],
            "exampleHeading": "Worked example: ∫ x eˣ dx",
            "examples": [
              "u = x, dv/dx = eˣ → x eˣ − ∫ eˣ dx = **x eˣ − eˣ + c**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "integration by parts",
            "definition": "Product-rule reverse: ∫ u(dv/dx)dx = uv − ∫ v(du/dx)dx."
          },
          {
            "term": "separable differential equation",
            "definition": "ODE of form dy/dx = f(x)g(y) solved by separating ∫ (1/g(y)) dy = ∫ f(x) dx."
          }
        ]
      },
      {
        "id": "al-maths-4-2-c3",
        "title": "Integration by Parts & Partial Fractions",
        "summary": "Integration by Parts with the LATE rule plus partial fraction decomposition.",
        "bullets": [
          "**Integration by Parts formula (from Product Rule)**: ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx.",
          "**Choosing u reliably (LATE priority)**: Logs (ln x) → Algebra (xⁿ) → Trig (sin/cos) → Exponentials (eˣ). Always set u = ln x when integrating ln x (using dv/dx = 1)!",
          "**Worked Example 3**: ∫ x e^(2x) dx. Set u = x (du/dx = 1), dv/dx = e^(2x) (v = ½ e^(2x)). Result = ½x e^(2x) − ∫ ½ e^(2x) dx = ½x e^(2x) − ¼ e^(2x) + c.",
          "**Partial Fractions**: Split improper fractions by polynomial division first, then decompose into A/(x − a) + B/(x − b) or repeated factor B/(x − b) + C/(x − b)² before integrating into logs and negative powers."
        ],
        "memoryAid": "Choose u in Integration by Parts via LATE: Logs first, then Algebra, then Trig, then Exponentials last!"
      },
      {
        "id": "al-maths-4-2-c4",
        "title": "Separating Variables in Differential Equations & Trapezium Rule",
        "summary": "Separating variables in first-order ODEs and estimating areas via Trapezium Rule.",
        "bullets": [
          "Separable ODE dy/dx = f(x)g(y): Collect all y terms with dy on the LHS and x terms with dx on the RHS: ∫ (1/g(y)) dy = ∫ f(x) dx, include +c IMMEDIATELY after integrating, and substitute initial conditions (x₀, y₀) to obtain the particular solution.",
          "**Worked Example 4**: Rate of cooling dT/dt = −k(T − 20), with T = 90 at t = 0. Separate: ∫ dT/(T − 20) = ∫ −k dt ⇒ ln|T − 20| = −kt + c ⇒ T − 20 = A e^(−kt). Using T(0) = 90 ⇒ A = 70, so T = 20 + 70 e^(−kt).",
          "Trapezium Rule numerical estimate with n strips of width h = (b − a)/n: ∫(a to b) y dx ≈ (h/2)[y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁)]. Overestimates convex curves (f″ > 0) and underestimates concave curves (f″ < 0)."
        ],
        "glossaryPills": [
          {
            "term": "general vs particular solution",
            "definition": "A general solution retains an arbitrary constant c (family of curves); applying a boundary condition fixes c to yield the unique particular solution."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Integration by parts",
        "definition": "Technique ∫ u(dv/dx)dx = uv − ∫ v(du/dx)dx derived from reversing the Product Rule."
      },
      {
        "term": "Separable differential equation",
        "definition": "First-order ODE dy/dx = f(x)g(y) solvable by separating x and y onto opposite sides and integrating."
      },
      {
        "term": "Trapezium rule",
        "definition": "Numerical integration approximation summing areas of equal-width trapezia under a curve."
      }
    ],
    "checklistPoints": [
      "Recognise reverse chain rule patterns including ∫ f′(x)/f(x) dx = ln|f(x)| + c.",
      "Execute integration by substitution cleanly while updating definite limits from x to u.",
      "Apply Integration by Parts (including twice for x²eˣ and with dv/dx = 1 for ln x) and Partial Fractions.",
      "Solve first-order separable differential equations to find particular solutions from boundary conditions."
    ]
  },
  "al-maths-4-3": {
    "subtopicId": "al-maths-4-3",
    "subtopicCode": "4.3",
    "subtopicTitle": "2D & 3D Vectors, Magnitude & Geometric Proofs",
    "readingMinutes": 10,
    "videoTitle": "A-Level Maths: Vectors - Introducing 3D Vectors",
    "youtubeId": "n-8x9wbCJj4",
    "videoChannel": "TLMaths",
    "videoDuration": "4:46",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "3D Cartesian Coordinates (x, y, z)",
        "cardId": "al-maths-4-3-c1"
      },
      {
        "time": "1:25",
        "seconds": 85,
        "label": "Unit Vectors i, j, k in 3D",
        "cardId": "al-maths-4-3-c2"
      },
      {
        "time": "3:00",
        "seconds": 180,
        "label": "Column Vector Notation & Position Vectors",
        "cardId": "al-maths-4-3-c3"
      }
    ],
    "cards": [
      {
        "id": "al-maths-4-3-c1",
        "title": "2D & 3D Position and Displacement Vectors",
        "summary": "3D i, j, k notation, displacement AB = b − a, and exact 3D distance.",
        "bullets": [
          "A 3D vector can be written in component form xi + yj + zk or column form (x, y, z)ᵀ, where i, j, k are orthogonal unit vectors along the x, y, and z axes.",
          "If points A and B have position vectors a = OA and b = OB relative to origin O, the displacement vector from A to B is ALWAYS AB = b − a (head minus tail!).",
          "Distance between A(x₁, y₁, z₁) and B(x₂, y₂, z₂): |AB| = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]."
        ],
        "memoryAid": "Displacement vector AB = OB − OA = \"End minus Start\" (b − a).",
        "subsections": [
          {
            "heading": "3D Vectors, Unit Vectors & Direction Cosines",
            "bullets": [
              "**3D magnitude** - |a| = √(x² + y² + z²); **unit vector** â = a / |a|; angle with x-axis satisfies **cos θ_x = x / |a|**."
            ],
            "exampleHeading": "Worked example: Unit vector of v = 2i − 3j + 6k",
            "examples": [
              "|v| = √(4 + 9 + 36) = √49 = **7** → unit vector = **(1/7)(2i − 3j + 6k)**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-4-3-c2",
        "title": "Unit Vectors & Angles with Coordinate Axes",
        "summary": "Finding unit vectors â = a/|a| and direction-cosine angles with the x, y, z axes.",
        "bullets": [
          "**Unit vector in the direction of a**: â = a / |a| (has magnitude 1). To construct a vector of length L parallel to a, compute L · (a / |a|).",
          "**Worked Example 1**: Given v = 2i − 3j + 6k, find |v|, the unit vector v̂, and the angle v makes with the positive z-axis. |v| = √(2² + (−3)² + 6²) = √(4 + 9 + 36) = √49 = 7. Unit vector v̂ = (1/7)(2i − 3j + 6k).",
          "**Angles with axes (direction cosines)**: cos θ_x = x/|v|, cos θ_y = y/|v|, cos θ_z = z/|v|. Here cos θ_z = 6/7 ⇒ θ_z = arccos(6/7) = 31.0° (1 d.p.)."
        ],
        "subsections": [
          {
            "heading": "Comparing Coefficients in Vector Proofs",
            "bullets": [
              "**Non-parallel a and b** - if p a + q b = r a + s b, then p = r AND q = s uniquely!"
            ],
            "exampleHeading": "Worked example: Finding ratio λ where two diagonals cross",
            "examples": [
              "Equate i-components and j-components of two vector paths to solve for λ and μ simultaneously."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "unit vector",
            "definition": "A vector of magnitude 1 in the same direction as v, given by v / |v|."
          },
          {
            "term": "position vector",
            "definition": "Vector OA from the origin O to point A; displacement AB = b − a."
          }
        ]
      },
      {
        "id": "al-maths-4-3-c3",
        "title": "Parallel Vectors, Collinearity & Ratio Theorem",
        "summary": "Proving collinearity via parallel vectors + shared point and the ratio theorem.",
        "bullets": [
          "Two non-zero vectors p and q are PARALLEL iff p = λq for some non-zero scalar λ.",
          "Proving three points A, B, C are COLLINEAR requires TWO mandatory statements: (1) Show AB = λ BC (or AC = λ AB), proving the vectors are parallel; AND (2) State they share a common point (B or A), therefore A, B, and C lie on a single straight line!",
          "**Ratio Theorem**: If point P divides segment AB internally in the ratio m : n, its position vector is OP = (n a + m b) / (m + n). (Notice the cross-multiplication: the closer point gets the larger weight!)"
        ],
        "commonMistake": "Showing AB = 3 BC alone is NOT enough for full collinearity proof marks — two opposite sides of a parallelogram are parallel too! You MUST write \"...and they share the common point B, so A, B, and C are collinear.\""
      },
      {
        "id": "al-maths-4-3-c4",
        "title": "Solving Geometric Intersection Problems by Equating Coefficients",
        "summary": "Equating coefficients of non-parallel vectors to locate geometric intersections.",
        "bullets": [
          "If non-parallel vectors a and b satisfy p a + q b = r a + s b, then necessarily p = r AND q = s (linear independence).",
          "**Worked Example 2**: In triangle OAB, M is the midpoint of OA and N divides OB in ratio 2:1. Line AN meets BM at X. Write OX along TWO different paths: Path 1 (along AN): OX = a + λ(⅔b − a) = (1 − λ)a + (⅔λ)b. Path 2 (along BM): OX = b + μ(½a − b) = (½μ)a + (1 − μ)b.",
          "**Equate coefficients of a and b**: 1 − λ = ½μ and ⅔λ = 1 − μ. Solving gives μ = 4/7 and λ = 3/7, hence OX = (2/7)a + (4/7)b and AX : XN = 3 : 4."
        ],
        "glossaryPills": [
          {
            "term": "collinear points",
            "definition": "Three or more points lying along the exact same straight line."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Unit vector",
        "definition": "A vector of magnitude 1 in a specified direction, found by dividing a vector by its length: â = a / |a|."
      },
      {
        "term": "Position vector",
        "definition": "Displacement vector from the fixed origin O to a point P, denoted OP or p."
      },
      {
        "term": "Direction cosines",
        "definition": "Cosines of the angles a 3D vector makes with the positive x, y, and z axes: x/|v|, y/|v|, z/|v|."
      }
    ],
    "checklistPoints": [
      "Compute 3D displacement vectors AB = b − a, exact magnitudes, unit vectors, and angles with the x, y, z axes.",
      "Prove collinearity by demonstrating both scalar parallelism and a shared point.",
      "Apply the ratio formula OP = (na + mb)/(m + n) and equate coefficients of non-parallel vectors to locate intersections."
    ]
  },
  "al-maths-5-1": {
    "subtopicId": "al-maths-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "Probability Distributions — Binomial & Normal Distributions",
    "readingMinutes": 12,
    "videoTitle": "Normal Distribution in 30 minutes - A-Level Statistics Year 2",
    "youtubeId": "eTvD9Rc8qvM",
    "videoChannel": "Bicen Maths",
    "videoDuration": "30:33",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Properties of the Normal Distribution N(μ, σ²)",
        "cardId": "al-maths-5-1-c1"
      },
      {
        "time": "8:00",
        "seconds": 480,
        "label": "Finding Probabilities & Inverse Normal",
        "cardId": "al-maths-5-1-c2"
      },
      {
        "time": "16:20",
        "seconds": 980,
        "label": "Standard Normal Z & Finding Unknown μ or σ",
        "cardId": "al-maths-5-1-c3"
      },
      {
        "time": "24:00",
        "seconds": 1440,
        "label": "Normal Approximation to Binomial & Hypothesis Tests",
        "cardId": "al-maths-5-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-5-1-c1",
        "title": "The Binomial Distribution X ~ B(n, p)",
        "summary": "BINS conditions, exact/cumulative Binomial probabilities, and inequality conversions.",
        "bullets": [
          "**Four strict modelling conditions (BINS)**: Binary outcomes (success/failure), Independent trials, fixed Number of trials n, and constant probability of success p.",
          "**Exact probability formula**: P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ. Mean μ = np; Variance σ² = np(1 − p).",
          "Converting inequalities for cumulative tables / calculator Binomial CD (which calculates P(X ≤ k)): P(X < k) = P(X ≤ k − 1); P(X ≥ k) = 1 − P(X ≤ k − 1); P(X > k) = 1 − P(X ≤ k); P(a ≤ X ≤ b) = P(X ≤ b) − P(X ≤ a − 1).",
          "**Worked Example 1**: X ~ B(12, 0.3). Find P(X ≥ 5). Convert: 1 − P(X ≤ 4) = 1 − 0.7237 = 0.2763 (4 d.p.)."
        ],
        "memoryAid": "Binomial conditions = BINS (Binary, Independent, Fixed Number n, Same probability p).",
        "subsections": [
          {
            "heading": "Binomial Conditions & Mean/Variance",
            "bullets": [
              "**B(n, p)** - fixed n trials, two outcomes, constant p, independent trials; **E(X) = np**, **Var(X) = np(1 − p)**; P(X ≥ k) = 1 − P(X ≤ k − 1)."
            ],
            "exampleHeading": "Worked example: X ~ B(10, 0.3), find P(X = 2)",
            "examples": [
              "¹⁰C₂ (0.3)² (0.7)⁸ = 45 × 0.09 × 0.05765 = **0.233** (3 s.f.)."
            ]
          }
        ]
      },
      {
        "id": "al-maths-5-1-c2",
        "title": "The Normal Distribution X ~ N(μ, σ²)",
        "summary": "Normal N(μ, σ²) symmetry, 68–95–99.7 rule, and Z = (X − μ)/σ standardisation.",
        "bullets": [
          "Continuous bell-shaped distribution symmetric about mean μ with variance σ² (standard deviation σ). Total area under the curve = 1; points of inflection lie at μ ± σ.",
          "**Empirical 68–95–99.7 rule**: ~68% of data lies within μ ± σ, ~95% within μ ± 2σ, and ~99.7% within μ ± 3σ. Because X is continuous, P(X = a) = 0 so P(X < a) = P(X ≤ a).",
          "Standardisation to Z ~ N(0, 1): Z = (X − μ) / σ.",
          "**Worked Example 2**: Heights H ~ N(170, 8²). Find P(162 < H < 182). Standardise: z₁ = (162 − 170)/8 = −1.0, z₂ = (182 − 170)/8 = 1.5. P(−1 < Z < 1.5) = Φ(1.5) − Φ(−1) = 0.9332 − 0.1587 = 0.7745."
        ],
        "commonMistake": "Watch the notation X ~ N(50, 16) vs X ~ N(50, 4²)! The second parameter is ALWAYS VARIANCE σ², NOT standard deviation — so for N(50, 16), σ = √16 = 4!",
        "subsections": [
          {
            "heading": "Normal Standardisation Z = (X − μ) / σ",
            "bullets": [
              "**X ~ N(μ, σ²)** - notice the second parameter is **VARIANCE σ²** (take √ to get standard deviation σ!); use Z = (X − μ)/σ to find unknown μ or σ."
            ],
            "exampleHeading": "Worked example: X ~ N(50, 16), find Z for X = 56",
            "examples": [
              "σ = √16 = 4 → Z = (56 − 50) / 4 = **1.5**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "binomial distribution",
            "definition": "Discrete distribution B(n, p) counting successes in n independent trials with constant probability p."
          },
          {
            "term": "standardisation",
            "definition": "Transforming any normal variable X ~ N(μ, σ²) to Z ~ N(0, 1) via Z = (X − μ) / σ."
          }
        ]
      },
      {
        "id": "al-maths-5-1-c3",
        "title": "Inverse Normal & Solving for Unknown μ and σ",
        "summary": "Using Inverse Normal z-scores to solve simultaneously for unknown μ and σ.",
        "bullets": [
          "When μ or σ is unknown, ALWAYS standardise to Z ~ N(0, 1), use Inverse Normal on the exact left-tail area Φ(z) to find the z-score, and form linear equations x − μ = zσ.",
          "**Worked Example 3**: Battery lifetime T ~ N(μ, σ²). Given P(T > 60) = 0.10 and P(T < 42) = 0.05, find μ and σ.",
          "**Left-tail areas**: P(T < 60) = 0.90 ⇒ z₁ = +1.2816, so 60 − μ = 1.2816σ. P(T < 42) = 0.05 ⇒ z₂ = −1.6449, so 42 − μ = −1.6449σ. Subtracting equations: 18 = 2.9265σ ⇒ σ = 6.15 hours, and μ = 60 − 1.2816(6.15) = 52.1 hours."
        ]
      },
      {
        "id": "al-maths-5-1-c4",
        "title": "Normal Approximation to the Binomial & Continuity Correction",
        "summary": "Approximating large-n Binomials with Normal curves and ±0.5 continuity corrections.",
        "bullets": [
          "When n is large AND p is close to 0.5 (typically np > 5 and n(1 − p) > 5), discrete X ~ B(n, p) can be approximated by continuous Y ~ N(np, np(1 − p)).",
          "Continuity correction (±0.5): Every integer k occupies the continuous interval [k − 0.5, k + 0.5]. Therefore: P(X ≤ k) ≈ P(Y < k + 0.5); P(X < k) ≈ P(Y < k − 0.5); P(X ≥ k) ≈ P(Y > k − 0.5); P(X = k) ≈ P(k − 0.5 < Y < k + 0.5).",
          "**Worked Example 4**: X ~ B(200, 0.48). Approximate P(X ≥ 105). Mean μ = 96, variance σ² = 200(0.48)(0.52) = 49.92 (σ = 7.065). Continuity correction includes 105 → P(Y > 104.5) = P(Z > (104.5 − 96)/7.065) = P(Z > 1.203) = 0.1145."
        ],
        "glossaryPills": [
          {
            "term": "continuity correction",
            "definition": "Adjusting discrete integer boundaries by ±0.5 when approximating a discrete distribution with a continuous Normal curve."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Standard normal variable (Z)",
        "definition": "Normally distributed variable Z ~ N(0, 1) obtained via Z = (X − μ)/σ."
      },
      {
        "term": "Cumulative distribution function",
        "definition": "Function giving P(X ≤ x), the total probability up to and including value x."
      },
      {
        "term": "Variance (σ²)",
        "definition": "Mean squared deviation from the mean, written as the second parameter in N(μ, σ²)."
      }
    ],
    "checklistPoints": [
      "Verify the four BINS conditions and rewrite strict/upper-tail binomial inequalities cleanly into P(X ≤ k).",
      "Distinguish variance σ² from standard deviation σ in N(μ, σ²) notation.",
      "Solve simultaneous equations for unknown μ and σ using standardised z-values.",
      "Apply the Normal approximation to Binomial with accurate ±0.5 continuity corrections."
    ]
  },
  "al-maths-5-2": {
    "subtopicId": "al-maths-5-2",
    "subtopicCode": "5.2",
    "subtopicTitle": "Statistical Hypothesis Testing & PMCC Correlation",
    "readingMinutes": 11,
    "videoTitle": "Hypothesis Testing (Binomial) - A-Level Statistics Year 1",
    "youtubeId": "z4kccxhR53k",
    "videoChannel": "Bicen Maths",
    "videoDuration": "24:15",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Null (H₀) vs Alternative (H₁) Hypotheses",
        "cardId": "al-maths-5-2-c1"
      },
      {
        "time": "6:15",
        "seconds": 375,
        "label": "One-Tailed vs Two-Tailed Tests & Significance Level",
        "cardId": "al-maths-5-2-c2"
      },
      {
        "time": "13:00",
        "seconds": 780,
        "label": "Finding Critical Regions",
        "cardId": "al-maths-5-2-c3"
      },
      {
        "time": "19:00",
        "seconds": 1140,
        "label": "p-Value Method & Contextual Conclusion",
        "cardId": "al-maths-5-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-5-2-c1",
        "title": "Binomial Hypothesis Testing (p-Value & Critical Region Methods)",
        "summary": "Six-step Binomial hypothesis tests using p-values and discrete critical regions.",
        "bullets": [
          "**Standard 6-step protocol**: (1) Define parameter p in context; (2) State H₀: p = p₀ and H₁ (one-tailed p > p₀ or p < p₀ at α; two-tailed p ≠ p₀ split into α/2 in EACH tail!); (3) State test model X ~ B(n, p₀) under H₀; (4) Compute tail p-value (or critical region); (5) Compare p-value with α (reject H₀ if p-value < α); (6) Write a non-assertive contextual conclusion.",
          "**Worked Example 1**: Historically 25% of seeds fail to germinate. After new storage, 1 out of 20 seeds fails. Test at 5% significance whether failure rate has DECREASED. H₀: p = 0.25, H₁: p < 0.25 (one-tailed, α = 0.05). Under H₀, X ~ B(20, 0.25). P(X ≤ 1) = 0.0243 < 0.05 ⇒ Reject H₀. Conclusion: There is sufficient evidence at the 5% level to suggest the failure rate has decreased.",
          "Actual significance level of a discrete test = P(X ∈ Critical Region), which is usually slightly smaller than nominal α (e.g., 2.43% for CR X ≤ 1)."
        ],
        "memoryAid": "p-value rule: \"If p is LOW, H₀ must GO!\" (Compare with α/2 for a two-tailed test!)",
        "subsections": [
          {
            "heading": "Five-Step Hypothesis Testing Framework",
            "bullets": [
              "**Standard steps** - (1) State H₀ and H₁ (1-tail vs 2-tail — halve α for 2-tail!); (2) State distribution under H₀; (3) Compute p-value or critical region; (4) Compare with α (or α/2); (5) Write a **non-assertive contextual conclusion** (\"sufficient/insufficient evidence to suggest...\")."
            ],
            "exampleHeading": "Worked example: Sample Mean Test X̄ ~ N(μ, σ²/n)",
            "examples": [
              "For μ = 100, σ = 12, n = 36: X̄ ~ N(100, 144/36 = 4) → standard error = **12 / √36 = 2**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-5-2-c2",
        "title": "Hypothesis Testing for the Mean of a Normal Distribution",
        "summary": "Testing sample means using X̄ ~ N(μ, σ²/n) and standard error σ/√n.",
        "bullets": [
          "If individual observations follow X ~ N(μ, σ²), then the SAMPLE MEAN of n independent observations follows X̄ ~ N(μ, σ² / n) — standard error is σ / √n!",
          "**Test statistic**: Z = (x̄ − μ₀) / (σ / √n). For a two-tailed 5% test (2.5% each tail), critical z = ±1.9600; for a one-tailed 5% test, z = ±1.6449; for a one-tailed 1% test, z = ±2.3263.",
          "**Worked Example 2**: Coffee cups have mean μ = 250 ml, known σ = 6 ml. A sample of n = 36 cups has mean x̄ = 247.8 ml. Test at 5% whether the machine is dispensing differently (two-tailed). H₀: μ = 250, H₁: μ ≠ 250. X̄ ~ N(250, 36/36) = N(250, 1). z = (247.8 − 250)/1 = −2.20. Since |−2.20| > 1.96 (or p = 0.0139 < 0.025), Reject H₀: sufficient evidence the mean volume differs from 250 ml."
        ],
        "commonMistake": "NEVER forget to divide the variance σ² by sample size n when testing a sample mean X̄! Using σ instead of σ/√n is the most common error on Year 2 Statistics papers.",
        "subsections": [
          {
            "heading": "PMCC Correlation Test (r)",
            "bullets": [
              "**H₀: ρ = 0** (no linear correlation) vs **H₁: ρ > 0 / < 0 / ≠ 0** — compare |r| with critical value from tables."
            ],
            "exampleHeading": "Concrete check: Contextual wording rule",
            "examples": [
              "NEVER write \"H₀ is proven true\" — ALWAYS write \"There is insufficient evidence to reject H₀ / suggest that...\"!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "null hypothesis",
            "definition": "Default baseline statement H₀ (e.g. p = 0.2 or μ = 50) assumed true unless sample evidence proves it unlikely."
          },
          {
            "term": "significance level",
            "definition": "Threshold probability α (e.g. 5% or 1%) for rejecting H₀ — halved to α/2 in each tail for two-tailed tests."
          }
        ]
      },
      {
        "id": "al-maths-5-2-c3",
        "title": "Correlation Hypothesis Testing (Product Moment Correlation Coefficient)",
        "summary": "Testing linear population correlation H₀: ρ = 0 against critical PMCC tables.",
        "bullets": [
          "Sample PMCC r measures strength and direction of LINEAR correlation (−1 ≤ r ≤ +1); population PMCC is denoted ρ (rho — ALWAYS write ρ in H₀ and H₁, never r!).",
          "**Hypotheses**: H₀: ρ = 0 (no linear correlation in population); H₁: ρ > 0 (positive), ρ < 0 (negative), or ρ ≠ 0 (two-tailed).",
          "Look up the critical value r_crit for sample size n and significance level α (or α/2 if two-tailed). Reject H₀ if |r| > r_crit (and sign matches H₁).",
          "**Note**: Non-linear relationships can be tested via exponential/power transformations (taking logs) before computing r."
        ],
        "glossaryPills": [
          {
            "term": "critical region",
            "definition": "Range of test-statistic values that leads to rejecting the null hypothesis H₀ at the chosen significance level."
          }
        ]
      },
      {
        "id": "al-maths-5-2-c4",
        "title": "Examiner Mark-Scheme Essentials",
        "summary": "Avoiding parameter errors, halving α for two-tailed tests, and contextual wording.",
        "bullets": [
          "Always use POPULATION parameters (p, μ, ρ) in hypotheses H₀ and H₁ — NEVER sample statistics (x̄, r) or probabilities like P(X = 0.25).",
          "**Two-tailed tests**: Split α in half! For a 5% two-tailed test, compare the single-tail p-value against 0.025 (or double the p-value and compare against 0.05).",
          "**Contextual wording**: Never write \"H₁ is proven\" or \"H₀ is true\". Write \"There is sufficient / insufficient evidence at the 5% significance level to suggest that [restate claim in context].\""
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Null hypothesis (H₀)",
        "definition": "Baseline claim of no change, no difference, or zero correlation assumed true while computing the p-value."
      },
      {
        "term": "p-value",
        "definition": "Probability of observing a test result at least as extreme as the sample value, assuming H₀ is true."
      },
      {
        "term": "Standard error of the mean",
        "definition": "Standard deviation of the sampling distribution of X̄, equal to σ / √n."
      }
    ],
    "checklistPoints": [
      "Write formal hypotheses strictly in terms of population parameters p, μ, or ρ.",
      "Execute Binomial tests using both p-value comparison and critical regions (remembering α/2 for two-tailed tests).",
      "Apply X̄ ~ N(μ, σ²/n) accurately for Normal sample-mean tests.",
      "Conclude every hypothesis test with clear, cautious wording tied directly to the problem context."
    ]
  },
  "al-maths-6-1": {
    "subtopicId": "al-maths-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Kinematics — SUVAT Equations, Projectiles & Variable Acceleration",
    "readingMinutes": 12,
    "videoTitle": "Constant Acceleration (SUVAT) - A-Level Mechanics Year 1",
    "youtubeId": "19Yc4i5QSfA",
    "videoChannel": "Bicen Maths",
    "videoDuration": "30:51",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Displacement-Time & Velocity-Time Graphs",
        "cardId": "al-maths-6-1-c1"
      },
      {
        "time": "8:00",
        "seconds": 480,
        "label": "The Five SUVAT Equations",
        "cardId": "al-maths-6-1-c2"
      },
      {
        "time": "16:40",
        "seconds": 1000,
        "label": "Vertical Motion Under Gravity (g = 9.8 m s⁻²)",
        "cardId": "al-maths-6-1-c3"
      },
      {
        "time": "24:20",
        "seconds": 1460,
        "label": "Multi-Stage & Two-Particle Problems",
        "cardId": "al-maths-6-1-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-6-1-c1",
        "title": "Constant Acceleration (SUVAT) & Motion Graphs",
        "summary": "Applying the five constant-acceleration SUVAT equations and motion graph links.",
        "diagram": "forces-free-body",
        "bullets": [
          "Valid ONLY when acceleration a is constant (including vertical free fall with a = −g = −9.8 m s⁻² upwards, or +9.8 m s⁻² downwards):",
          "(1) v = u + at; (2) s = ½(u + v)t; (3) s = ut + ½at²; (4) s = vt − ½at²; (5) v² = u² + 2as.",
          "**Worked Example 1**: A stone is thrown vertically upwards at 14 m s⁻¹ from a cliff 20 m above the sea. Find time to hit the sea. Take UP as positive: u = +14, a = −9.8, s = −20 (below launch point!). Use s = ut + ½at² ⇒ −20 = 14t − 4.9t² ⇒ 4.9t² − 14t − 20 = 0 ⇒ t = (14 + √(196 + 392))/9.8 = 3.90 s (reject negative t).",
          "**Graph links**: Gradient of s–t graph = velocity; gradient of v–t graph = acceleration; signed area under v–t graph = displacement."
        ],
        "commonMistake": "NEVER use SUVAT when acceleration depends on time t (e.g., a = 3t − 2)! SUVAT applies strictly to CONSTANT acceleration; variable acceleration requires calculus.",
        "subsections": [
          {
            "heading": "2D Projectiles (Independent Horizontal & Vertical Motion)",
            "bullets": [
              "**Split components** - Horizontal: a_x = 0, **x = (U cos θ) t**; Vertical: a_y = −g, **y = (U sin θ) t − ½gt²**; max height occurs when **v_y = 0**."
            ],
            "exampleHeading": "Worked example: Ball launched at 20 m/s at 30° above flat ground (g = 9.8)",
            "examples": [
              "u_y = 20 sin 30° = 10 m/s → time to top = 10/9.8 = 1.02 s → total flight = 2.04 s; range = (20 cos 30°)(2.04) = **35.3 m**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-6-1-c2",
        "title": "Projectile Motion in Two Dimensions",
        "summary": "Splitting 2D projectiles into constant horizontal motion and vertical gravity.",
        "bullets": [
          "Resolve initial velocity U at launch angle α above horizontal into two INDEPENDENT perpendicular motions sharing the same time t:",
          "Horizontal (a_x = 0): u_x = U cos α (constant velocity throughout!), x = (U cos α) t.",
          "Vertical (a_y = −g = −9.8 m s⁻²): u_y = U sin α, v_y = U sin α − gt, y = (U sin α)t − ½gt² (add +h if launched from height h above ground).",
          "**Key landmark conditions**: Greatest height occurs when v_y = 0 (time t = U sin α / g, max height H = U² sin²α / (2g)); returns to launch level when y = 0 (time of flight T = 2U sin α / g; horizontal range R = U² sin(2α) / g, maximised at α = 45°)."
        ],
        "memoryAid": "Horizontally: CONSTANT speed (x = U cos α · t). Vertically: pure SUVAT with a = −g. Time t links both!",
        "subsections": [
          {
            "heading": "Variable Acceleration (Calculus Links)",
            "bullets": [
              "**Differentiate** - s → v = ds/dt → a = dv/dt; **Integrate** - a → v = ∫a dt (+ c) → s = ∫v dt (+ c)."
            ],
            "exampleHeading": "Worked example: v = 3t² − 12t + 9, find times when instantaneously at rest",
            "examples": [
              "Set v = 0: 3(t − 1)(t − 3) = 0 → **t = 1 s and t = 3 s**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "projectile",
            "definition": "Object moving under gravity alone with constant horizontal velocity and constant vertical acceleration −g."
          },
          {
            "term": "instantaneously at rest",
            "definition": "Moment when velocity v = 0 (often where a particle reverses direction)."
          }
        ]
      },
      {
        "id": "al-maths-6-1-c3",
        "title": "Impact Speed, Direction & Cartesian Trajectory Equation",
        "summary": "Finding impact speed/angle, Cartesian trajectory parabola, and model critiques.",
        "bullets": [
          "**Worked Example 2**: A ball is projected at 25 m s⁻¹ at 30° above horizontal from ground level. Find its speed and angle of motion at t = 2 s. v_x = 25 cos 30° = 21.65 m s⁻¹; v_y = 25 sin 30° − 9.8(2) = 12.5 − 19.6 = −7.1 m s⁻¹ (moving downwards). Speed = √(21.65² + (−7.1)²) = 22.8 m s⁻¹ at angle arctan(7.1/21.65) = 18.2° BELOW horizontal.",
          "Cartesian equation of path (eliminating t = x / (U cos α)): y = x tan α − (g x²)/(2 U² cos²α) = x tan α − (g x² / (2 U²))(1 + tan²α), confirming a parabolic trajectory.",
          "**Standard modelling assumptions & critiques**: Particle model (ignores spin/size), no air resistance (real drag reduces both range and maximum height), uniform flat gravity g = 9.8 m s⁻²."
        ]
      },
      {
        "id": "al-maths-6-1-c4",
        "title": "Variable Acceleration in 1D & 2D Vectors (Calculus Kinematics)",
        "summary": "Differentiating and integrating 1D/2D vectors r(t), v(t), a(t) for variable acceleration.",
        "bullets": [
          "Differentiate going DOWN (r → v → a): v = dr/dt, a = dv/dt = d²r/dt². Integrate going UP (a → v → r): v = ∫ a dt + c₁, r = ∫ v dt + c₂ (ALWAYS find constant vectors c₁, c₂ using initial conditions at t = 0!).",
          "**Worked Example 3**: A particle has acceleration a = (6t i − 4 j) m s⁻² and initial velocity v(0) = (2i + 5j) m s⁻¹. Integrate: v(t) = (3t² + 2)i + (5 − 4t)j. Moving parallel to i when j-component = 0 ⇒ 5 − 4t = 0 ⇒ t = 1.25 s.",
          "Distance travelled vs displacement: When velocity reverses sign at t = t₀ inside [t₁, t₂], split the integral and sum |∫(t₁ to t₀) v dt| + |∫(t₀ to t₂) v dt|!"
        ],
        "glossaryPills": [
          {
            "term": "instantaneous rest",
            "definition": "Moment when velocity v(t) = 0 (in 2D, BOTH i and j components of velocity must vanish simultaneously)."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Projectile",
        "definition": "Object moving freely under gravity alone with zero horizontal acceleration and vertical acceleration −g."
      },
      {
        "term": "Displacement",
        "definition": "Vector change in position from start to finish (can be negative or zero even when distance travelled is large)."
      },
      {
        "term": "Trajectory",
        "definition": "Parabolic Cartesian path y(x) traced out by a projectile obtained by eliminating time t."
      }
    ],
    "checklistPoints": [
      "Choose a clear positive direction and apply all five SUVAT equations accurately when acceleration is constant.",
      "Split 2D projectile motion cleanly into horizontal (constant speed) and vertical (a = −g) equations to find flight time, range, max height, and impact velocity.",
      "Derive the Cartesian trajectory equation and state modelling limitations (air resistance, spin).",
      "Differentiate and integrate 1D and 2D vector functions r(t), v(t), a(t) while never forgetting vector constants of integration."
    ]
  },
  "al-maths-6-2": {
    "subtopicId": "al-maths-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Forces, Newton’s Laws, Friction, Connected Particles & Moments",
    "readingMinutes": 12,
    "videoTitle": "A-Level Maths: Non-Parallel Forces - Ladders & Moments",
    "youtubeId": "avAGmV6AzFQ",
    "videoChannel": "TLMaths",
    "videoDuration": "6:46",
    "courseMatchSummary": "All sections match Edexcel 9MA0 & CIE 9709 A-Level Maths",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Modelling Non-Parallel Forces & Friction",
        "cardId": "al-maths-6-2-c1"
      },
      {
        "time": "1:50",
        "seconds": 110,
        "label": "Resolving Horizontally & Vertically",
        "cardId": "al-maths-6-2-c2"
      },
      {
        "time": "3:45",
        "seconds": 225,
        "label": "Taking Moments About the Base of a Ladder",
        "cardId": "al-maths-6-2-c3"
      },
      {
        "time": "5:25",
        "seconds": 325,
        "label": "Solving for Normal Reaction & Friction μ",
        "cardId": "al-maths-6-2-c4"
      }
    ],
    "cards": [
      {
        "id": "al-maths-6-2-c1",
        "title": "Newton’s Laws & Inclined Planes",
        "summary": "Applying F = ma and resolving weight into mg sin θ and mg cos θ on slopes.",
        "diagram": "forces-free-body",
        "bullets": [
          "**Newton’s Second Law**: Resultant Force F_net = m a (in Newtons, kg, m s⁻²). In equilibrium (rest or constant velocity), resultant force = 0 in EVERY direction.",
          "**Inclined plane at angle θ to horizontal**: Resolve weight mg PARALLEL to slope = mg sin θ (down slope) and PERPENDICULAR to slope = mg cos θ (into slope).",
          "**Normal reaction R balances perpendicular forces**: if no angled pull acts, R = mg cos θ; if a force P pulls upwards at angle α to the slope, R + P sin α = mg cos θ ⇒ R = mg cos θ − P sin α (pulling upwards REDUCES normal reaction and hence reduces friction!)."
        ],
        "memoryAid": "Down the slope is mg SIN θ (\"Sliding = Sin\"); Into the slope is mg COS θ (\"Cos keeps it Close\")!",
        "subsections": [
          {
            "heading": "Inclined Planes & Limiting Friction (F_max = μR)",
            "bullets": [
              "**Resolve parallel & perpendicular** - Weight component down slope = **mg sin θ**; normal reaction = **R = mg cos θ**; limiting friction **F_max = μR** opposes motion."
            ],
            "exampleHeading": "Worked example: 5 kg block on a 30° rough slope (μ = 0.2, g = 9.8)",
            "examples": [
              "R = 5(9.8) cos 30° = 42.4 N; F_max = 0.2(42.4) = 8.49 N; down-slope F_net = 24.5 − 8.49 = 16.0 N → a = **3.20 m/s²**."
            ]
          }
        ]
      },
      {
        "id": "al-maths-6-2-c2",
        "title": "Friction F ≤ μR & Limiting Equilibrium",
        "summary": "Modelling static and dynamic friction using F ≤ μR and limiting equilibrium.",
        "bullets": [
          "Friction always opposes motion (or the tendency to move) parallel to the contact surface, bounded by F_max = μR where μ is the coefficient of friction.",
          "**Static equilibrium**: F takes only the value needed to stop slipping (0 ≤ F ≤ μR). On the point of slipping (limiting equilibrium) OR while sliding (dynamic), F = μR.",
          "**Worked Example 1**: A 5 kg block slides down a rough plane inclined at 30° with μ = 0.25. Perpendicular: R = 5g cos 30° = 42.44 N. Friction up slope: F = μR = 0.25(42.44) = 10.61 N. Parallel down slope (F = ma): 5g sin 30° − 10.61 = 5a ⇒ 24.5 − 10.61 = 5a ⇒ a = 2.78 m s⁻²."
        ],
        "subsections": [
          {
            "heading": "Connected Particles & Rigid-Body Moments",
            "bullets": [
              "**Pulley/towbar** - light inextensible string gives equal T and equal a; **tilting rod** - at point of tilting about support A, reaction at other support B drops to **R_B = 0**!"
            ],
            "exampleHeading": "Concrete check: Choosing the pivot wisely",
            "examples": [
              "Take moments about a point where an unknown force acts so that unknown vanishes (0 × d = 0)!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "limiting friction",
            "definition": "Maximum static friction F_max = μR reached just before an object begins to slide."
          },
          {
            "term": "inextensible string",
            "definition": "Modelling assumption ensuring both connected particles share the exact same magnitude of acceleration."
          }
        ]
      },
      {
        "id": "al-maths-6-2-c3",
        "title": "Connected Particles: Pulleys & Towbars",
        "summary": "Solving pulley/towbar connected-particle systems and explaining string assumptions.",
        "bullets": [
          "Modelling assumptions (frequent 2-mark exam questions!): Light inextensible string ⇒ tension T is constant along the string AND both particles share the exact same magnitude of acceleration a; Smooth pulley ⇒ tension T is equal on both sides of the pulley.",
          "**Worked Example 2 (Atwood pulley)**: Masses 3 kg and 5 kg hang from a light inextensible string over a smooth fixed pulley. Equation for 5 kg (falling): 5g − T = 5a. Equation for 3 kg (rising): T − 3g = 3a. Add both equations (T cancels!): 2g = 8a ⇒ a = g/4 = 2.45 m s⁻², and T = 3(9.8 + 2.45) = 36.75 N.",
          "Force exerted ON the pulley by the string = vector sum of the two tensions acting away from the pulley: for vertical hanging strings, Resultant = 2T downwards (73.5 N); for strings meeting at angle θ, magnitude = 2T cos(θ/2) bisecting the angle."
        ],
        "commonMistake": "When a towbar/car system accelerates, treat the whole system as ONE combined mass (m₁ + m₂) to find acceleration a fast, then isolate JUST the trailer to find tension T cleanly — never forget to include resistances on both bodies!"
      },
      {
        "id": "al-maths-6-2-c4",
        "title": "Moments, Tilting & Static Equilibrium of Rigid Bodies (Ladders)",
        "summary": "Taking moments about strategic pivots for tilting beams and rough-ground ladders.",
        "bullets": [
          "Moment of force F about pivot P = F × d_⊥ (perpendicular distance from P to the line of action of F, in N m). For a rigid body in static equilibrium: (1) Sum of horizontal forces = 0; (2) Sum of vertical forces = 0; (3) Sum of clockwise moments = Sum of anticlockwise moments about ANY pivot (choose a pivot through an unknown force to eliminate it!).",
          "**Tilting condition**: A beam supported at pivots C and D is on the point of tilting about D when the normal reaction at C drops to ZERO (R_C = 0)!",
          "**Worked Example 3 (Uniform ladder)**: A uniform 4 m ladder of mass 12 kg rests at 60° to rough horizontal ground against a smooth vertical wall. Vertical equilibrium: R_ground = 12g = 117.6 N. Horizontal: F_ground = S_wall. Moments about ground base (eliminating R and F!): 12g(2 cos 60°) = S_wall(4 sin 60°) ⇒ 12g = 2√3 S_wall ⇒ S_wall = 6g/√3 = 2√3 g = 33.9 N. For no slip, μ ≥ F/R = (2√3 g)/(12g) = √3/6 ≈ 0.289."
        ],
        "glossaryPills": [
          {
            "term": "limiting equilibrium",
            "definition": "State where a body is still stationary but on the exact verge of slipping, so friction attains its maximum value F = μR."
          }
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Normal reaction (R)",
        "definition": "Contact force exerted perpendicularly outwards from a surface onto a resting or sliding body."
      },
      {
        "term": "Coefficient of friction (μ)",
        "definition": "Dimensionless constant describing surface roughness such that maximum friction F_max = μR."
      },
      {
        "term": "Moment (torque)",
        "definition": "Turning effect of a force about a pivot, equal to Force × perpendicular distance (N m)."
      }
    ],
    "checklistPoints": [
      "Draw complete free-body diagrams and resolve weights into mg sin θ (parallel) and mg cos θ (perpendicular) on inclined planes.",
      "Apply F ≤ μR correctly, checking whether friction acts up or down the slope depending on tendency to move.",
      "Set up simultaneous F = ma equations for connected particles and explain light/inextensible/smooth assumptions.",
      "Solve equilibrium, tilting (R = 0), and leaning-ladder problems by resolving forces and taking moments about strategic pivots."
    ]
  }
};

export const ALEVEL_MATHS_QUIZZES: QuizQuestion[] = [
  {
    "id": "al-maths-q1",
    "subtopicId": "al-maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "The quadratic equation 2x² − 6x + k = 0 has NO real roots. What is the exact range of values for k?",
    "options": [
      "k > 9/2",
      "k < 9/2",
      "k ≥ 9/2",
      "k > 9"
    ],
    "correctIndex": 0,
    "explanation": "No real roots requires b² − 4ac < 0 ⇒ (−6)² − 4(2)(k) < 0 ⇒ 36 − 8k < 0 ⇒ k > 36/8 = 9/2."
  },
  {
    "id": "al-maths-q2",
    "subtopicId": "al-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Find the centre and radius of the circle x² + y² − 8x + 6y − 11 = 0.",
    "options": [
      "Centre (−4, 3), radius 6",
      "Centre (4, −3), radius 6",
      "Centre (4, −3), radius 36",
      "Centre (8, −6), radius √11"
    ],
    "correctIndex": 1,
    "explanation": "Completing the square gives (x − 4)² − 16 + (y + 3)² − 9 = 11 ⇒ (x − 4)² + (y + 3)² = 36, so centre (4, −3) and radius √36 = 6."
  },
  {
    "id": "al-maths-q3",
    "subtopicId": "al-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "For which values of x is the binomial expansion of (4 − 2x)^(−1/2) valid?",
    "options": [
      "|x| < 1",
      "|x| < 2",
      "|x| < 1/2",
      "|x| < 4"
    ],
    "correctIndex": 1,
    "explanation": "Factor out 4: (4 − 2x)^(−1/2) = ½(1 − x/2)^(−1/2), which converges iff |−x/2| < 1 ⇒ |x| < 2."
  },
  {
    "id": "al-maths-q4",
    "subtopicId": "al-maths-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A geometric series has first term a = 12 and common ratio r = 1/4. Calculate its sum to infinity S_∞.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "S_∞ = a / (1 − r) = 12 / (1 − 1/4) = 12 / (3/4) = 16.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Applies S_∞ = 12 / (1 − 1/4)",
          "requiredKeywordGroups": [
            [
              "12",
              "0.75",
              "3/4"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct final answer 16",
          "numericMatch": {
            "value": 16,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "Since |1/4| < 1, S_∞ = 12 ÷ (3/4) = 16."
  },
  {
    "id": "al-maths-q5",
    "subtopicId": "al-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "For small angles θ (in radians), what is the small-angle approximation of (1 − cos 2θ) / (θ tan 3θ)?",
    "options": [
      "2/3",
      "1/3",
      "4/3",
      "2"
    ],
    "correctIndex": 0,
    "explanation": "cos 2θ ≈ 1 − (2θ)²/2 = 1 − 2θ², so 1 − cos 2θ ≈ 2θ²; denominator ≈ θ(3θ) = 3θ²; ratio = 2θ² / 3θ² = 2/3."
  },
  {
    "id": "al-maths-q6",
    "subtopicId": "al-maths-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When 5 cos θ − 12 sin θ is written in harmonic form R cos(θ + α) with R > 0, what is the value of R?",
    "options": [
      "17",
      "13",
      "√119",
      "7"
    ],
    "correctIndex": 1,
    "explanation": "R = √(5² + 12²) = √(25 + 144) = √169 = 13."
  },
  {
    "id": "al-maths-q7",
    "subtopicId": "al-maths-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "A non-linear relationship y = a bˣ is plotted as ln y against x, yielding a straight line with gradient 0.5 and y-intercept 2. What are a and b?",
    "options": [
      "a = 2, b = 0.5",
      "a = e², b = e^(0.5)",
      "a = e^(0.5), b = e²",
      "a = ln 2, b = ln 0.5"
    ],
    "correctIndex": 1,
    "explanation": "ln y = (ln b)x + ln a ⇒ ln b = 0.5 (b = e^0.5) and ln a = 2 (a = e²)."
  },
  {
    "id": "al-maths-q8",
    "subtopicId": "al-maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Using the Product Rule, what is d/dx (x³ ln x)?",
    "options": [
      "3x² / x",
      "x²(1 + 3 ln x)",
      "3x² ln x",
      "x³ + 3x² ln x"
    ],
    "correctIndex": 1,
    "explanation": "u = x³ (u′ = 3x²), v = ln x (v′ = 1/x) ⇒ x³(1/x) + 3x² ln x = x² + 3x² ln x = x²(1 + 3 ln x)."
  },
  {
    "id": "al-maths-q9",
    "subtopicId": "al-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Evaluate the indefinite integral ∫ (4x) / (2x² + 7) dx.",
    "options": [
      "2 ln|2x² + 7| + c",
      "ln|2x² + 7| + c",
      "½ ln|2x² + 7| + c",
      "−4x / (2x² + 7)² + c"
    ],
    "correctIndex": 1,
    "explanation": "The derivative of the denominator 2x² + 7 is exactly the numerator 4x, so ∫ f′(x)/f(x) dx = ln|2x² + 7| + c."
  },
  {
    "id": "al-maths-q10",
    "subtopicId": "al-maths-4-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the exact magnitude of the 3D vector v = 3i − 4j + 12k.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "|v| = √(3² + (−4)² + 12²) = √(9 + 16 + 144) = √169 = 13.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct sum of squares 9 + 16 + 144 = 169",
          "requiredKeywordGroups": [
            [
              "169",
              "144"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Magnitude = 13",
          "numericMatch": {
            "value": 13,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "√(3² + (−4)² + 12²) = √169 = 13."
  },
  {
    "id": "al-maths-q11",
    "subtopicId": "al-maths-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Individual weights follow X ~ N(80, 100). A random sample of n = 25 items is taken. What is the distribution of the sample mean X̄?",
    "options": [
      "X̄ ~ N(80, 100)",
      "X̄ ~ N(80, 20)",
      "X̄ ~ N(80, 4)",
      "X̄ ~ N(3.2, 4)"
    ],
    "correctIndex": 2,
    "explanation": "X̄ ~ N(μ, σ²/n) = N(80, 100/25) = N(80, 4), so standard error is √4 = 2."
  },
  {
    "id": "al-maths-q12",
    "subtopicId": "al-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A 10 kg crate sits on a rough horizontal floor with coefficient of friction μ = 0.3. What is the maximum horizontal pulling force before the crate slips? (Take g = 9.8 m s⁻²)",
    "options": [
      "3.0 N",
      "29.4 N",
      "98.0 N",
      "326.7 N"
    ],
    "correctIndex": 1,
    "explanation": "Normal reaction R = mg = 10 × 9.8 = 98 N, so F_max = μR = 0.3 × 98 = 29.4 N."
  },
  {
    "id": "al-maths-q13",
    "subtopicId": "al-maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What are the coordinates of the turning point of the curve y = 3(x − 2)² − 5?",
    "options": [
      "(−2, −5)",
      "(2, −5)",
      "(2, 5)",
      "(6, −5)"
    ],
    "correctIndex": 1,
    "explanation": "Since (x − 2)² ≥ 0, the minimum value is y = −5 occurring when x = 2, giving turning point (2, −5)."
  },
  {
    "id": "al-maths-q14",
    "subtopicId": "al-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Evaluate (27 / 8)^(−2/3) as an exact fraction.",
    "options": [
      "9/4",
      "4/9",
      "−4/9",
      "2/3"
    ],
    "correctIndex": 1,
    "explanation": "(27/8)^(−2/3) = (8/27)^(2/3) = (∛8 / ∛27)² = (2/3)² = 4/9."
  },
  {
    "id": "al-maths-q15",
    "subtopicId": "al-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given that (x − 2) is a factor of f(x) = 2x³ − 3x² + kx + 6, what is the value of k?",
    "options": [
      "k = −5",
      "k = 5",
      "k = −1",
      "k = 1"
    ],
    "correctIndex": 0,
    "explanation": "By the Factor Theorem, f(2) = 0 ⇒ 2(8) − 3(4) + 2k + 6 = 0 ⇒ 16 − 12 + 2k + 6 = 0 ⇒ 2k = −10 ⇒ k = −5."
  },
  {
    "id": "al-maths-q16",
    "subtopicId": "al-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "A circle has centre C(2, −1) and passes through P(5, 3). What is the gradient of the tangent to the circle at P?",
    "options": [
      "4/3",
      "−4/3",
      "−3/4",
      "3/4"
    ],
    "correctIndex": 2,
    "explanation": "Gradient of radius CP = (3 − (−1))/(5 − 2) = 4/3. The tangent is perpendicular to the radius, so m_tangent = −3/4."
  },
  {
    "id": "al-maths-q17",
    "subtopicId": "al-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the coefficient of x³ in the binomial expansion of (2 − 3x)⁵?",
    "options": [
      "−1080",
      "1080",
      "−720",
      "540"
    ],
    "correctIndex": 0,
    "explanation": "The x³ term is ⁵C₃ (2)² (−3x)³ = 10 × 4 × (−27x³) = −1080x³."
  },
  {
    "id": "al-maths-q18",
    "subtopicId": "al-maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "An arithmetic sequence has 3rd term 11 and 8th term 31. What is its common difference d?",
    "options": [
      "d = 3",
      "d = 4",
      "d = 5",
      "d = 2.5"
    ],
    "correctIndex": 1,
    "explanation": "u₈ − u₃ = 5d = 31 − 11 = 20 ⇒ d = 4."
  },
  {
    "id": "al-maths-q19",
    "subtopicId": "al-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A circular sector has radius r = 6 cm and angle θ = 1.5 radians. What is the area of the sector?",
    "options": [
      "9 cm²",
      "18 cm²",
      "27 cm²",
      "54 cm²"
    ],
    "correctIndex": 2,
    "explanation": "A = ½ r² θ = ½ × 36 × 1.5 = 27 cm²."
  },
  {
    "id": "al-maths-q20",
    "subtopicId": "al-maths-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which trigonometric identity is valid for all θ where sec θ is defined?",
    "options": [
      "1 + sec²θ ≡ tan²θ",
      "1 + tan²θ ≡ sec²θ",
      "sec²θ + tan²θ ≡ 1",
      "1 − tan²θ ≡ sec²θ"
    ],
    "correctIndex": 1,
    "explanation": "Dividing sin²θ + cos²θ ≡ 1 through by cos²θ yields tan²θ + 1 ≡ sec²θ."
  },
  {
    "id": "al-maths-q21",
    "subtopicId": "al-maths-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Solve the equation ln(2x + 1) − ln(x − 1) = ln 5 for x > 1.",
    "options": [
      "x = 2",
      "x = 3",
      "x = 4",
      "x = 6"
    ],
    "correctIndex": 0,
    "explanation": "ln((2x + 1)/(x − 1)) = ln 5 ⇒ 2x + 1 = 5x − 5 ⇒ 3x = 6 ⇒ x = 2."
  },
  {
    "id": "al-maths-q22",
    "subtopicId": "al-maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A curve is defined parametrically by x = t², y = 2t³. What is dy/dx in terms of t?",
    "options": [
      "3t",
      "6t",
      "3t²",
      "1 / (3t)"
    ],
    "correctIndex": 0,
    "explanation": "dy/dx = (dy/dt) ÷ (dx/dt) = (6t²) ÷ (2t) = 3t."
  },
  {
    "id": "al-maths-q23",
    "subtopicId": "al-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When using Integration by Parts on ∫ x² ln x dx, which choice of u and dv/dx follows the LATE rule?",
    "options": [
      "u = x², dv/dx = ln x",
      "u = ln x, dv/dx = x²",
      "u = x ln x, dv/dx = x",
      "u = 1, dv/dx = x² ln x"
    ],
    "correctIndex": 1,
    "explanation": "LATE prioritises Logarithms before Algebra, so u = ln x (du/dx = 1/x) and dv/dx = x² (v = x³/3)."
  },
  {
    "id": "al-maths-q24",
    "subtopicId": "al-maths-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Points A and B have position vectors a = 2i − j + 3k and b = 5i + 3j − k. What is the displacement vector AB?",
    "options": [
      "7i + 2j + 2k",
      "3i + 4j − 4k",
      "−3i − 4j + 4k",
      "3i + 2j + 2k"
    ],
    "correctIndex": 1,
    "explanation": "AB = b − a = (5 − 2)i + (3 − (−1))j + (−1 − 3)k = 3i + 4j − 4k."
  },
  {
    "id": "al-maths-q25",
    "subtopicId": "al-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "If X ~ B(15, 0.4), how is P(X ≥ 6) expressed in terms of cumulative probabilities P(X ≤ k)?",
    "options": [
      "1 − P(X ≤ 6)",
      "1 − P(X ≤ 5)",
      "P(X ≤ 6) − P(X ≤ 5)",
      "1 − P(X ≤ 7)"
    ],
    "correctIndex": 1,
    "explanation": "For a discrete integer variable, P(X ≥ 6) includes 6, so its complement is X ≤ 5: 1 − P(X ≤ 5)."
  },
  {
    "id": "al-maths-q26",
    "subtopicId": "al-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "When approximating a discrete Binomial random variable X ~ B(n, p) with a continuous Normal variable Y ~ N(np, np(1−p)), how is P(X ≤ 40) written with continuity correction?",
    "options": [
      "P(Y < 39.5)",
      "P(Y < 40.5)",
      "P(Y > 40.5)",
      "P(39.5 < Y < 40.5)"
    ],
    "correctIndex": 1,
    "explanation": "To include the entire discrete bar centered at 40, extend the upper boundary by +0.5 to P(Y < 40.5)."
  },
  {
    "id": "al-maths-q27",
    "subtopicId": "al-maths-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In a two-tailed hypothesis test for the population correlation coefficient at the 5% significance level, what are the correct null and alternative hypotheses?",
    "options": [
      "H₀: r = 0, H₁: r ≠ 0",
      "H₀: ρ = 0, H₁: ρ ≠ 0 (with 2.5% in each tail)",
      "H₀: μ = 0, H₁: μ > 0",
      "H₀: p = 0.5, H₁: p ≠ 0.5"
    ],
    "correctIndex": 1,
    "explanation": "Correlation hypotheses must always use the population parameter ρ (rho), never the sample statistic r."
  },
  {
    "id": "al-maths-q28",
    "subtopicId": "al-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A projectile is launched from horizontal ground with speed U at angle α above the horizontal. What is its vertical component of velocity v_y at its point of greatest height?",
    "options": [
      "v_y = U cos α",
      "v_y = 0",
      "v_y = −9.8 m s⁻¹",
      "v_y = U sin α"
    ],
    "correctIndex": 1,
    "explanation": "At maximum height the projectile momentarily stops rising vertically (v_y = 0) while its horizontal velocity remains U cos α."
  },
  {
    "id": "al-maths-q29",
    "subtopicId": "al-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A particle moves along the x-axis with displacement x(t) = t³ − 6t² + 9t metres. At what times t is the particle instantaneously at rest?",
    "options": [
      "t = 0 s and t = 3 s",
      "t = 1 s and t = 3 s",
      "t = 2 s only",
      "t = 3 s only"
    ],
    "correctIndex": 1,
    "explanation": "v(t) = dx/dt = 3t² − 12t + 9 = 3(t − 1)(t − 3) = 0 ⇒ t = 1 s and t = 3 s."
  },
  {
    "id": "al-maths-q30",
    "subtopicId": "al-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A uniform horizontal beam rests on two supports at C and D. When weights are added to the overhang beyond D so that the beam is on the point of tilting about D, what is the normal reaction at support C?",
    "options": [
      "R_C = R_D",
      "R_C = 0",
      "R_C = mg",
      "R_C = ½ mg"
    ],
    "correctIndex": 1,
    "explanation": "When a rigid beam is on the point of tilting about pivot D, it is just lifting off support C, so R_C = 0."
  },
  {
    "id": "al-maths-q-1-1-3",
    "subtopicId": "al-maths-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the exact value of k for which 2x² − 8x + k = 0 has exactly ONE repeated real root.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Set b² − 4ac = 0: (−8)² − 4(2)(k) = 0 → 64 − 8k = 0 → k = 8.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Sets b² − 4ac = 0",
          "requiredKeywordGroups": [
            [
              "64",
              "8k",
              "4ac"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "k = 8",
          "numericMatch": {
            "value": 8,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "Δ = 64 − 8k = 0 ⇒ k = 8."
  },
  {
    "id": "al-maths-q-1-1-4",
    "subtopicId": "al-maths-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the completed-square vertex rule:",
    "segments": [
      "For y = 2(x − 3)² + 5, the minimum turning point is (",
      ", 5) and the equation of the line of symmetry is x = ",
      "."
    ],
    "wordBank": [
      "3",
      "3",
      "-3",
      "5"
    ],
    "answers": [
      "3",
      "3"
    ],
    "explanation": "Vertex of a(x + p)² + q is (−p, q) = (3, 5) with symmetry line x = 3."
  },
  {
    "id": "al-maths-q-1-1-5",
    "subtopicId": "al-maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Solve the hidden quadratic 2^(2x) − 6(2^x) + 8 = 0.",
    "options": [
      "x = 2 or x = 4",
      "x = 1 or x = 2",
      "x = 0 or x = 3",
      "x = −1 or x = 2"
    ],
    "correctIndex": 1,
    "explanation": "Let y = 2^x: (y − 2)(y − 4) = 0 ⇒ 2^x = 2 or 4 ⇒ x = 1 or x = 2."
  },
  {
    "id": "al-maths-q-1-2-3",
    "subtopicId": "al-maths-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Given f(x) = 2x³ + kx² − 5x + 6 is divisible by (x − 2), find the value of k.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "By Factor Theorem f(2) = 0: 16 + 4k − 10 + 6 = 0 → 4k + 12 = 0 → k = −3.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Sets f(2) = 0",
          "requiredKeywordGroups": [
            [
              "16",
              "4k"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "k = −3",
          "numericMatch": {
            "value": -3,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "f(2) = 16 + 4k − 10 + 6 = 0 ⇒ k = −3."
  },
  {
    "id": "al-maths-q-1-2-4",
    "subtopicId": "al-maths-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Factor Theorem statement:",
    "segments": [
      "(2x − 3) is a factor of polynomial f(x) if and only if f(",
      ") = ",
      "."
    ],
    "wordBank": [
      "3/2",
      "0",
      "2/3",
      "1"
    ],
    "answers": [
      "3/2",
      "0"
    ],
    "explanation": "Set 2x − 3 = 0 ⇒ x = 3/2, so f(3/2) = 0."
  },
  {
    "id": "al-maths-q-1-2-5",
    "subtopicId": "al-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Simplify (8x⁶)^(−2/3).",
    "options": [
      "1 / (4x⁴)",
      "4 / x⁴",
      "−4x⁴",
      "1 / (2x⁴)"
    ],
    "correctIndex": 0,
    "explanation": "Cube root: 2x²; square: 4x⁴; reciprocal: 1 / (4x⁴)."
  },
  {
    "id": "al-maths-q-1-3-3",
    "subtopicId": "al-maths-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the centre and radius of the circle x² + y² + 4x − 10y + 4 = 0.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "(x + 2)² + (y − 5)² = 4 + 25 − 4 = 25 → Centre (−2, 5), radius 5.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Centre (−2, 5)",
          "requiredKeywordGroups": [
            [
              "-2",
              "−2"
            ],
            [
              "5"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Radius 5",
          "numericMatch": {
            "value": 5,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "(x + 2)² − 4 + (y − 5)² − 25 + 4 = 0 ⇒ r² = 25 ⇒ r = 5."
  },
  {
    "id": "al-maths-q-1-3-4",
    "subtopicId": "al-maths-1-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the circle geometry theorem:",
    "segments": [
      "The perpendicular bisector of any chord passes through the ",
      ", and the angle in a semicircle is ",
      "°."
    ],
    "wordBank": [
      "centre",
      "90",
      "tangent",
      "180"
    ],
    "answers": [
      "centre",
      "90"
    ],
    "explanation": "Both theorems directly unlock circle-equation exam questions."
  },
  {
    "id": "al-maths-q-1-3-5",
    "subtopicId": "al-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Two circles have centres 10 units apart and radii 6 and 4. How do they meet?",
    "options": [
      "Do not intersect",
      "Touch externally at 1 point",
      "Intersect at 2 points",
      "One lies strictly inside the other"
    ],
    "correctIndex": 1,
    "explanation": "Distance d = 10 = r₁ + r₂ (6 + 4), so they touch externally."
  },
  {
    "id": "al-maths-q-2-1-3",
    "subtopicId": "al-maths-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the validity range for the binomial expansion of (3 + 6x)^(−1).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Factor out 3: ⅓(1 + 2x)^(−1), valid for |2x| < 1, i.e. |x| < 1/2 (or −0.5 < x < 0.5).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Factors out 3 to get (1 + 2x)",
          "requiredKeywordGroups": [
            [
              "2x",
              "1/3",
              "⅓"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "|x| < 0.5 or 1/2",
          "requiredKeywordGroups": [
            [
              "1/2",
              "0.5"
            ]
          ]
        }
      ]
    },
    "explanation": "|6x / 3| < 1 ⇒ |2x| < 1 ⇒ |x| < 1/2."
  },
  {
    "id": "al-maths-q-2-1-4",
    "subtopicId": "al-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the coefficient of x² in (1 − 2x)⁴?",
    "options": [
      "−24",
      "24",
      "12",
      "−12"
    ],
    "correctIndex": 1,
    "explanation": "⁴C₂(−2x)² = 6 × 4x² = +24x²."
  },
  {
    "id": "al-maths-q-2-1-5",
    "subtopicId": "al-maths-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the infinite binomial series:",
    "segments": [
      "(1 + x)ⁿ = 1 + nx + n(n − 1)x² / ",
      "! + ..., valid when |x| < ",
      "."
    ],
    "wordBank": [
      "2",
      "1",
      "3",
      "0"
    ],
    "answers": [
      "2",
      "1"
    ],
    "explanation": "Denominator is 2! = 2, valid for |x| < 1."
  },
  {
    "id": "al-maths-q-2-2-3",
    "subtopicId": "al-maths-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A geometric series has first term a = 15 and common ratio r = 2/5. Calculate its sum to infinity S_∞.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Since |2/5| < 1, S_∞ = 15 / (1 − 0.4) = 15 / 0.6 = 25.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Uses a / (1 − r)",
          "requiredKeywordGroups": [
            [
              "0.6",
              "3/5",
              "15"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "25",
          "numericMatch": {
            "value": 25,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "15 ÷ (3/5) = 25."
  },
  {
    "id": "al-maths-q-2-2-4",
    "subtopicId": "al-maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "For which values of common ratio r does a geometric series CONVERGE to a finite sum to infinity?",
    "options": [
      "r > 1",
      "|r| < 1 (i.e. −1 < r < 1)",
      "r > 0",
      "All real r ≠ 1"
    ],
    "correctIndex": 1,
    "explanation": "rⁿ → 0 as n → ∞ only when −1 < r < 1."
  },
  {
    "id": "al-maths-q-2-2-5",
    "subtopicId": "al-maths-2-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the AP and GP nth term rules:",
    "segments": [
      "For an AP, uₙ = a + (n − 1)",
      ", and for a GP, uₙ = a",
      "ⁿ⁻¹."
    ],
    "wordBank": [
      "d",
      "r",
      "n",
      "S"
    ],
    "answers": [
      "d",
      "r"
    ],
    "explanation": "AP adds d repeatedly; GP multiplies by r repeatedly."
  },
  {
    "id": "al-maths-q-3-1-3",
    "subtopicId": "al-maths-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A sector has radius 10 cm and central angle 1.2 radians. Calculate its arc length and area.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Arc length s = 10 × 1.2 = 12 cm; Area = ½ × 10² × 1.2 = 60 cm².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Arc length 12 cm",
          "numericMatch": {
            "value": 12,
            "tolerance": 0.05
          }
        },
        {
          "id": "mp2",
          "markDescription": "Area 60 cm²",
          "numericMatch": {
            "value": 60,
            "tolerance": 0.1
          }
        }
      ]
    },
    "explanation": "s = rθ = 12 cm; A = ½r²θ = 60 cm²."
  },
  {
    "id": "al-maths-q-3-1-4",
    "subtopicId": "al-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "For small angle θ in radians, what is the small-angle approximation for cos(3θ)?",
    "options": [
      "1 − 3θ² / 2",
      "1 − 9θ² / 2",
      "3θ",
      "1 + 9θ² / 2"
    ],
    "correctIndex": 1,
    "explanation": "cos(3θ) ≈ 1 − (3θ)²/2 = 1 − 9θ²/2."
  },
  {
    "id": "al-maths-q-3-1-5",
    "subtopicId": "al-maths-3-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the radian conversions:",
    "segments": [
      "π radians equals ",
      "°, and segment area in radians is ½r²(θ − ",
      ")."
    ],
    "wordBank": [
      "180",
      "sin θ",
      "360",
      "cos θ"
    ],
    "answers": [
      "180",
      "sin θ"
    ],
    "explanation": "π rad = 180°; segment = sector (½r²θ) − triangle (½r² sin θ)."
  },
  {
    "id": "al-maths-q-3-2-3",
    "subtopicId": "al-maths-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the exact maximum value of 5 cos θ + 12 sin θ + 4.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "R = √(5² + 12²) = 13, so maximum value is 13 + 4 = 17.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Finds R = 13",
          "numericMatch": {
            "value": 13,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "Max = 17",
          "numericMatch": {
            "value": 17,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "R = 13, max of 13 cos(θ − α) + 4 is 17."
  },
  {
    "id": "al-maths-q-3-2-4",
    "subtopicId": "al-maths-3-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each identity to its equivalent form:",
    "pairs": [
      {
        "left": "1 + tan²θ",
        "right": "sec²θ"
      },
      {
        "left": "1 + cot²θ",
        "right": "cosec²θ"
      },
      {
        "left": "sin 2A",
        "right": "2 sin A cos A"
      },
      {
        "left": "cos 2A",
        "right": "2 cos²A − 1"
      }
    ],
    "explanation": "Core A-Level Pure Year 2 identities."
  },
  {
    "id": "al-maths-q-3-2-5",
    "subtopicId": "al-maths-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which third-letter memory trick identifies cosec θ?",
    "options": [
      "1 / cos θ",
      "1 / sin θ",
      "1 / tan θ",
      "cos θ / sin θ"
    ],
    "correctIndex": 1,
    "explanation": "co**s**ec = 1/sin, se**c** = 1/cos, co**t** = 1/tan."
  },
  {
    "id": "al-maths-q-3-3-3",
    "subtopicId": "al-maths-3-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Solve ln(2x − 3) = 4, leaving your answer in exact form in terms of e (or to 2 d.p.).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "2x − 3 = e⁴ → x = (e⁴ + 3) / 2 ≈ 28.80.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Exponentiates to 2x − 3 = e⁴",
          "requiredKeywordGroups": [
            [
              "e^4",
              "e⁴",
              "54.6"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "(e⁴ + 3)/2 or 28.8",
          "requiredKeywordGroups": [
            [
              "(e^4 + 3)/2",
              "(e⁴ + 3)/2",
              "28.8",
              "28.79"
            ]
          ]
        }
      ]
    },
    "explanation": "Invert ln with e^(...): 2x = e⁴ + 3 ⇒ x = (e⁴ + 3)/2."
  },
  {
    "id": "al-maths-q-3-3-4",
    "subtopicId": "al-maths-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "For data following y = axⁿ, plotting log y against log x gives a straight line whose GRADIENT equals:",
    "options": [
      "a",
      "log a",
      "n",
      "log n"
    ],
    "correctIndex": 2,
    "explanation": "log y = n log x + log a ⇒ gradient = n, y-intercept = log a."
  },
  {
    "id": "al-maths-q-3-3-5",
    "subtopicId": "al-maths-3-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the log rules:",
    "segments": [
      "log(a / b) = log a − ",
      ", and the derivative of e^(kx) is ",
      "e^(kx)."
    ],
    "wordBank": [
      "log b",
      "k",
      "log a",
      "x"
    ],
    "answers": [
      "log b",
      "k"
    ],
    "explanation": "Quotient log law subtracts; d/dx(e^(kx)) = k e^(kx)."
  },
  {
    "id": "al-maths-q-4-1-3",
    "subtopicId": "al-maths-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Differentiate y = ln(3x² + 1) using the chain rule.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "dy/dx = 6x / (3x² + 1).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Numerator 6x",
          "requiredKeywordGroups": [
            [
              "6x"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Denominator (3x² + 1)",
          "requiredKeywordGroups": [
            [
              "3x² + 1",
              "3x^2 + 1",
              "3x^2+1"
            ]
          ]
        }
      ]
    },
    "explanation": "d/dx[ln f(x)] = f′(x) / f(x) = 6x / (3x² + 1)."
  },
  {
    "id": "al-maths-q-4-1-4",
    "subtopicId": "al-maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is d/dx (cos 4x)?",
    "options": [
      "4 sin 4x",
      "−4 sin 4x",
      "−sin 4x / 4",
      "4 cos 4x"
    ],
    "correctIndex": 1,
    "explanation": "Derivative of cos u is −sin u; multiply by u′ = 4 → −4 sin 4x."
  },
  {
    "id": "al-maths-q-4-1-5",
    "subtopicId": "al-maths-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the parametric & trig derivatives:",
    "segments": [
      "For parametric curves, dy/dx = (dy/dt) ÷ (",
      "), and d/dx(tan x) = ",
      "."
    ],
    "wordBank": [
      "dx/dt",
      "sec²x",
      "dt/dx",
      "cot x"
    ],
    "answers": [
      "dx/dt",
      "sec²x"
    ],
    "explanation": "Parametric chain rule divides dy/dt by dx/dt; derivative of tan x is sec²x."
  },
  {
    "id": "al-maths-q-4-2-3",
    "subtopicId": "al-maths-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Evaluate ∫ (3x²)/(x³ + 1) dx.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "ln|x³ + 1| + c.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Recognises f′(x)/f(x) → ln|x³ + 1|",
          "requiredKeywordGroups": [
            [
              "ln"
            ],
            [
              "x^3 + 1",
              "x³ + 1",
              "x^3+1"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Includes + c",
          "requiredKeywordGroups": [
            [
              "+ c",
              "+c"
            ]
          ]
        }
      ]
    },
    "explanation": "Numerator 3x² is the exact derivative of x³ + 1."
  },
  {
    "id": "al-maths-q-4-2-4",
    "subtopicId": "al-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When integrating ∫ x² ln x dx by parts, which factor MUST be chosen as u?",
    "options": [
      "x²",
      "ln x",
      "x",
      "1/x"
    ],
    "correctIndex": 1,
    "explanation": "LATE rule puts Logs first: u = ln x (because we cannot easily integrate ln x directly)."
  },
  {
    "id": "al-maths-q-4-2-5",
    "subtopicId": "al-maths-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the trig integral trick:",
    "segments": [
      "To integrate ∫ sin²x dx, replace sin²x using the double-angle identity ½(1 − ",
      "), and never forget ",
      " on indefinite integrals."
    ],
    "wordBank": [
      "cos 2x",
      "+ c",
      "sin 2x",
      "− 1"
    ],
    "answers": [
      "cos 2x",
      "+ c"
    ],
    "explanation": "cos 2x = 1 − 2 sin²x ⇒ sin²x = ½(1 − cos 2x)."
  },
  {
    "id": "al-maths-q-4-3-3",
    "subtopicId": "al-maths-4-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the exact magnitude of the 3D vector p = 3i − 4j + 12k and write the unit vector in its direction.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "|p| = √(9 + 16 + 144) = √169 = 13; unit vector = (1/13)(3i − 4j + 12k).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Magnitude 13",
          "numericMatch": {
            "value": 13,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "Divides vector by 13",
          "requiredKeywordGroups": [
            [
              "1/13",
              "/13"
            ]
          ]
        }
      ]
    },
    "explanation": "√(9 + 16 + 144) = 13; divide vector by 13 for unit vector."
  },
  {
    "id": "al-maths-q-4-3-4",
    "subtopicId": "al-maths-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "What angle does v = 3i + 4j + 0k make with the positive z-axis?",
    "options": [
      "0°",
      "45°",
      "90°",
      "53.1°"
    ],
    "correctIndex": 2,
    "explanation": "cos θ_z = 0 / 5 = 0 ⇒ θ_z = 90°."
  },
  {
    "id": "al-maths-q-4-3-5",
    "subtopicId": "al-maths-4-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the 3D vector rules:",
    "segments": [
      "Displacement vector AB = b − ",
      ", and cos θ_x = x ÷ ",
      "."
    ],
    "wordBank": [
      "a",
      "|v|",
      "b",
      "y"
    ],
    "answers": [
      "a",
      "|v|"
    ],
    "explanation": "AB = End − Start; direction cosine divides component by magnitude."
  },
  {
    "id": "al-maths-q-5-1-3",
    "subtopicId": "al-maths-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "If X ~ N(40, 25), state its standard deviation σ and calculate the Z-score of X = 50.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "σ = √25 = 5; Z = (50 − 40) / 5 = 2.0.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "σ = 5",
          "numericMatch": {
            "value": 5,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "Z = 2",
          "numericMatch": {
            "value": 2,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "N(μ, σ²) gives σ² = 25 ⇒ σ = 5 ⇒ Z = (50 − 40)/5 = 2."
  },
  {
    "id": "al-maths-q-5-1-4",
    "subtopicId": "al-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "For discrete X ~ B(20, 0.4), how do you rewrite P(X ≥ 8) to use cumulative Binomial CD?",
    "options": [
      "1 − P(X ≤ 8)",
      "1 − P(X ≤ 7)",
      "P(X ≤ 8)",
      "1 − P(X = 8)"
    ],
    "correctIndex": 1,
    "explanation": "Complement of X ≥ 8 is X ≤ 7."
  },
  {
    "id": "al-maths-q-5-1-5",
    "subtopicId": "al-maths-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Normal approximation to Binomial:",
    "segments": [
      "B(n, p) can be approximated by N(np, np(1 − p)) when n is large and p ≈ 0.5, remembering to apply a ",
      " correction of ±",
      "."
    ],
    "wordBank": [
      "continuity",
      "0.5",
      "variance",
      "0.05"
    ],
    "answers": [
      "continuity",
      "0.5"
    ],
    "explanation": "Discrete to continuous approximation needs ±0.5 continuity correction."
  },
  {
    "id": "al-maths-q-5-2-3",
    "subtopicId": "al-maths-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A random sample of size n = 25 is drawn from X ~ N(80, 10²). State the distribution of the sample mean X̄ and its standard error.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "X̄ ~ N(80, 10²/25) = N(80, 4); standard error = 10 / √25 = 2.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Variance 4 (100/25)",
          "numericMatch": {
            "value": 4,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "Standard error 2",
          "numericMatch": {
            "value": 2,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "Var(X̄) = σ²/n = 100/25 = 4 ⇒ SE = 2."
  },
  {
    "id": "al-maths-q-5-2-4",
    "subtopicId": "al-maths-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In a TWO-TAILED hypothesis test at the 5% significance level, what probability do you compare the tail p-value against?",
    "options": [
      "5% (0.05)",
      "2.5% (0.025)",
      "10% (0.10)",
      "1% (0.01)"
    ],
    "correctIndex": 1,
    "explanation": "Two-tailed tests split α equally into both tails: α/2 = 2.5%."
  },
  {
    "id": "al-maths-q-5-2-5",
    "subtopicId": "al-maths-5-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the decision rule:",
    "segments": [
      "If the p-value is ",
      " than the significance level, we ",
      " H₀."
    ],
    "wordBank": [
      "less",
      "reject",
      "greater",
      "prove"
    ],
    "answers": [
      "less",
      "reject"
    ],
    "explanation": "p-value < α ⇒ statistically significant ⇒ reject H₀."
  },
  {
    "id": "al-maths-q-6-1-3",
    "subtopicId": "al-maths-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A particle’s displacement is s = t³ − 6t² + 5 (metres). Find its velocity and acceleration at t = 3 s.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "v = ds/dt = 3t² − 12t → at t = 3, v = 27 − 36 = −9 m/s. a = dv/dt = 6t − 12 → at t = 3, a = 6 m/s².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "v = −9 m/s",
          "numericMatch": {
            "value": -9,
            "tolerance": 0.05
          }
        },
        {
          "id": "mp2",
          "markDescription": "a = 6 m/s²",
          "numericMatch": {
            "value": 6,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "Differentiate once for v (−9 m/s) and twice for a (6 m/s²)."
  },
  {
    "id": "al-maths-q-6-1-4",
    "subtopicId": "al-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "At the MAXIMUM HEIGHT of a projectile’s flight, which quantity equals zero?",
    "options": [
      "Horizontal velocity v_x",
      "Vertical velocity v_y",
      "Vertical acceleration g",
      "Total speed"
    ],
    "correctIndex": 1,
    "explanation": "v_y = 0 at the apex while v_x = U cos θ and a_y = −g remain non-zero."
  },
  {
    "id": "al-maths-q-6-1-5",
    "subtopicId": "al-maths-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the kinematics calculus chain:",
    "segments": [
      "To get acceleration from velocity, ",
      " with respect to t; to get displacement from velocity, ",
      " with respect to t."
    ],
    "wordBank": [
      "differentiate",
      "integrate",
      "multiply",
      "factorise"
    ],
    "answers": [
      "differentiate",
      "integrate"
    ],
    "explanation": "s → v → a differentiates; a → v → s integrates."
  },
  {
    "id": "al-maths-q-6-2-3",
    "subtopicId": "al-maths-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A 10 kg box rests on a horizontal rough floor with μ = 0.3 (g = 9.8 m/s²). Calculate the maximum friction force F_max.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "R = 10 × 9.8 = 98 N; F_max = 0.3 × 98 = 29.4 N.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "R = 98 N",
          "numericMatch": {
            "value": 98,
            "tolerance": 0.2
          }
        },
        {
          "id": "mp2",
          "markDescription": "F_max = 29.4 N",
          "numericMatch": {
            "value": 29.4,
            "tolerance": 0.2
          }
        }
      ]
    },
    "explanation": "F_max = μR = 0.3 × 98 = 29.4 N."
  },
  {
    "id": "al-maths-q-6-2-4",
    "subtopicId": "al-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "What does the modelling assumption \"SMOOTH pulley\" allow you to conclude about a string passing over it?",
    "options": [
      "Acceleration is zero",
      "Tension T is the same on both sides of the pulley",
      "Mass is negligible",
      "Friction equals μR"
    ],
    "correctIndex": 1,
    "explanation": "Smooth pulley ⇒ zero pulley friction ⇒ uniform tension throughout the string."
  },
  {
    "id": "al-maths-q-6-2-5",
    "subtopicId": "al-maths-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the inclined plane weight components:",
    "segments": [
      "Parallel down a slope of angle θ, weight component is mg ",
      " θ, and perpendicular to the slope is mg ",
      " θ."
    ],
    "wordBank": [
      "sin",
      "cos",
      "tan",
      "sec"
    ],
    "answers": [
      "sin",
      "cos"
    ],
    "explanation": "Sliding down = SIN; pressing into slope = COS."
  }
];

export const ALEVEL_MATHS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "al-maths-fc-1",
    "subtopicId": "al-maths-1-1",
    "front": "State the three discriminant conditions for ax² + bx + c = 0.",
    "backBullets": [
      "b² − 4ac > 0: Two distinct real roots",
      "b² − 4ac = 0: One repeated real root (tangent)",
      "b² − 4ac < 0: No real roots"
    ]
  },
  {
    "id": "al-maths-fc-2",
    "subtopicId": "al-maths-1-1",
    "front": "How do you read the turning point from completed-square vertex form y = a(x + p)² + q?",
    "backBullets": [
      "Turning point is (−p, q) with axis of symmetry x = −p.",
      "Minimum if a > 0 (∪); Maximum if a < 0 (∩)."
    ]
  },
  {
    "id": "al-maths-fc-3",
    "subtopicId": "al-maths-1-2",
    "front": "State the Factor Theorem for a polynomial f(x).",
    "backBullets": [
      "(x − p) is a factor of f(x) if and only if f(p) = 0.",
      "More generally, (ax − b) is a factor of f(x) iff f(b/a) = 0."
    ]
  },
  {
    "id": "al-maths-fc-4",
    "subtopicId": "al-maths-1-2",
    "front": "How do you rationalise the denominator of a / (b + c√d)?",
    "backBullets": [
      "Multiply numerator and denominator by the conjugate (b − c√d).",
      "The denominator becomes b² − c²d (rational)."
    ]
  },
  {
    "id": "al-maths-fc-5",
    "subtopicId": "al-maths-1-3",
    "front": "What is the standard equation of a circle with centre (a, b) and radius r, and three key circle geometry facts?",
    "backBullets": [
      "(x − a)² + (y − b)² = r²",
      "1. Radius is perpendicular to tangent at point of contact.",
      "2. Perpendicular bisector of any chord passes through the centre.",
      "3. Angle in a semicircle is 90° (hypotenuse = diameter)."
    ]
  },
  {
    "id": "al-maths-fc-6",
    "subtopicId": "al-maths-1-3",
    "front": "How do you find the centre and radius of x² + y² + 2fx + 2gy + c = 0?",
    "backBullets": [
      "Complete the square on x and y separately: (x + f)² − f² + (y + g)² − g² + c = 0.",
      "Centre = (−f, −g) and Radius r = √(f² + g² − c)."
    ]
  },
  {
    "id": "al-maths-fc-7",
    "subtopicId": "al-maths-2-1",
    "front": "What is the general binomial expansion for (1 + x)ⁿ and its range of validity?",
    "backBullets": [
      "1 + nx + [n(n−1)/2!]x² + [n(n−1)(n−2)/3!]x³ + …",
      "Valid strictly for |x| < 1.",
      "For (a + bx)ⁿ, factor out aⁿ first → valid for |bx/a| < 1."
    ]
  },
  {
    "id": "al-maths-fc-8",
    "subtopicId": "al-maths-2-1",
    "front": "When combining two binomial expansions with validity |x| < 1/2 and |x| < 3, what is the combined validity range?",
    "backBullets": [
      "Take the STRICTER (smaller) intersection bound: |x| < 1/2.",
      "Both infinite series must converge simultaneously."
    ]
  },
  {
    "id": "al-maths-fc-9",
    "subtopicId": "al-maths-2-2",
    "front": "State the nth term and sum of n terms for an Arithmetic Progression (AP).",
    "backBullets": [
      "uₙ = a + (n − 1)d",
      "Sₙ = (n/2)[2a + (n − 1)d] = (n/2)(a + l)"
    ]
  },
  {
    "id": "al-maths-fc-10",
    "subtopicId": "al-maths-2-2",
    "front": "State the nth term, sum of n terms, and sum to infinity for a Geometric Progression (GP).",
    "backBullets": [
      "uₙ = a rⁿ⁻¹",
      "Sₙ = a(1 − rⁿ) / (1 − r)  (for r ≠ 1)",
      "S_∞ = a / (1 − r), valid if and only if |r| < 1."
    ]
  },
  {
    "id": "al-maths-fc-11",
    "subtopicId": "al-maths-3-1",
    "front": "State the three small-angle approximations (θ in radians).",
    "backBullets": [
      "sin θ ≈ θ",
      "tan θ ≈ θ",
      "cos θ ≈ 1 − θ²/2"
    ]
  },
  {
    "id": "al-maths-fc-12",
    "subtopicId": "al-maths-3-1",
    "front": "Give the radian formulae for arc length, sector area, and minor segment area.",
    "backBullets": [
      "Arc length: l = rθ",
      "Sector area: A = ½ r² θ",
      "Minor segment area: A = ½ r² (θ − sin θ)"
    ]
  },
  {
    "id": "al-maths-fc-13",
    "subtopicId": "al-maths-3-2",
    "front": "List all three forms of the cos 2A double-angle identity.",
    "backBullets": [
      "cos 2A ≡ cos²A − sin²A",
      "cos 2A ≡ 2cos²A − 1  (⇒ cos²A = ½(1 + cos 2A))",
      "cos 2A ≡ 1 − 2sin²A  (⇒ sin²A = ½(1 − cos 2A))"
    ]
  },
  {
    "id": "al-maths-fc-14",
    "subtopicId": "al-maths-3-2",
    "front": "How do you convert a cos θ + b sin θ into harmonic form R cos(θ − α)?",
    "backBullets": [
      "Expand R cos(θ − α) = R cos θ cos α + R sin θ sin α.",
      "Equate coefficients: R cos α = a and R sin α = b.",
      "R = √(a² + b²) and tan α = b / a (0 < α < π/2)."
    ]
  },
  {
    "id": "al-maths-fc-15",
    "subtopicId": "al-maths-3-3",
    "front": "How do you linearise the power model y = a xⁿ and the exponential model y = a bˣ using logarithms?",
    "backBullets": [
      "Power model y = axⁿ: plot log y against log x → gradient = n, vertical intercept = log a.",
      "Exponential model y = abˣ: plot log y against x → gradient = log b, vertical intercept = log a."
    ]
  },
  {
    "id": "al-maths-fc-16",
    "subtopicId": "al-maths-3-3",
    "front": "In the exponential model P = A e^(kt) + C (with k < 0), what are the initial value, long-term asymptote, and rate of change dP/dt?",
    "backBullets": [
      "Initial value at t = 0: P₀ = A + C",
      "Long-term horizontal asymptote as t → ∞: P → C",
      "Rate of change: dP/dt = k A e^(kt) = k(P − C)"
    ]
  },
  {
    "id": "al-maths-fc-17",
    "subtopicId": "al-maths-4-1",
    "front": "State the Product Rule and Quotient Rule for differentiation.",
    "backBullets": [
      "Product: d/dx(uv) = u(dv/dx) + v(du/dx)",
      "Quotient: d/dx(u/v) = [v(du/dx) − u(dv/dx)] / v²"
    ]
  },
  {
    "id": "al-maths-fc-18",
    "subtopicId": "al-maths-4-1",
    "front": "How do you find dy/dx for parametric curves and test for a point of inflection?",
    "backBullets": [
      "Parametric: dy/dx = (dy/dt) ÷ (dx/dt).",
      "Point of inflection: f″(x) = 0 AND f″(x) changes sign (+ to − or − to +) across x."
    ]
  },
  {
    "id": "al-maths-fc-19",
    "subtopicId": "al-maths-4-2",
    "front": "State the Integration by Parts formula and the LATE priority order for choosing u.",
    "backBullets": [
      "∫ u(dv/dx)dx = uv − ∫ v(du/dx)dx",
      "LATE: Logs → Algebra → Trig → Exponentials"
    ]
  },
  {
    "id": "al-maths-fc-20",
    "subtopicId": "al-maths-4-2",
    "front": "What is the reverse-chain-rule result for ∫ [f′(x) / f(x)] dx and how do you integrate cos²x?",
    "backBullets": [
      "∫ [f′(x) / f(x)] dx = ln|f(x)| + c",
      "Use cos²x ≡ ½(1 + cos 2x) ⇒ ∫ cos²x dx = ½x + ¼ sin 2x + c."
    ]
  },
  {
    "id": "al-maths-fc-21",
    "subtopicId": "al-maths-4-3",
    "front": "What two conditions must be stated to prove three points A, B, and C are collinear using vectors?",
    "backBullets": [
      "1. Show AB = λ BC (or AC = λ AB), proving the vectors are parallel.",
      "2. Explicitly state that they share a common point B (or A), so A, B, and C are collinear."
    ]
  },
  {
    "id": "al-maths-fc-22",
    "subtopicId": "al-maths-4-3",
    "front": "How do you find the unit vector â and the angle vector v = xi + yj + zk makes with the x-axis?",
    "backBullets": [
      "Unit vector: â = a / |a| where |v| = √(x² + y² + z²).",
      "Direction cosine: cos θ_x = x / |v| ⇒ θ_x = arccos(x / |v|)."
    ]
  },
  {
    "id": "al-maths-fc-23",
    "subtopicId": "al-maths-5-1",
    "front": "What are the four BINS conditions required to model a variable with X ~ B(n, p)?",
    "backBullets": [
      "Binary outcomes (success or failure only)",
      "Independent trials",
      "Fixed Number of trials n",
      "Same (constant) probability of success p on every trial"
    ]
  },
  {
    "id": "al-maths-fc-24",
    "subtopicId": "al-maths-5-1",
    "front": "When approximating X ~ B(n, p) with Y ~ N(np, np(1 − p)), how does continuity correction work?",
    "backBullets": [
      "P(X ≤ k) ≈ P(Y < k + 0.5)",
      "P(X ≥ k) ≈ P(Y > k − 0.5)",
      "P(X = k) ≈ P(k − 0.5 < Y < k + 0.5)"
    ]
  },
  {
    "id": "al-maths-fc-25",
    "subtopicId": "al-maths-5-2",
    "front": "What is the distribution of the sample mean X̄ when X ~ N(μ, σ²)?",
    "backBullets": [
      "X̄ ~ N(μ, σ²/n)",
      "Standardise using Z = (x̄ − μ) / (σ / √n)."
    ]
  },
  {
    "id": "al-maths-fc-26",
    "subtopicId": "al-maths-5-2",
    "front": "Which symbols must be used in null and alternative hypotheses for Binomial, Normal Mean, and Correlation tests?",
    "backBullets": [
      "Binomial: population proportion p (H₀: p = p₀)",
      "Normal mean: population mean μ (H₀: μ = μ₀)",
      "Correlation: population PMCC ρ (H₀: ρ = 0 — never write sample statistic r!)"
    ]
  },
  {
    "id": "al-maths-fc-27",
    "subtopicId": "al-maths-6-1",
    "front": "List all five constant-acceleration SUVAT equations.",
    "backBullets": [
      "v = u + at",
      "s = ½(u + v)t",
      "s = ut + ½at²",
      "s = vt − ½at²",
      "v² = u² + 2as"
    ]
  },
  {
    "id": "al-maths-fc-28",
    "subtopicId": "al-maths-6-1",
    "front": "How do you convert between displacement r(t), velocity v(t), and acceleration a(t) when acceleration is variable?",
    "backBullets": [
      "Differentiate going down: v = dr/dt, a = dv/dt = d²r/dt².",
      "Integrate going up: v = ∫ a dt + c₁, r = ∫ v dt + c₂ (use initial conditions to fix c₁, c₂)."
    ]
  },
  {
    "id": "al-maths-fc-29",
    "subtopicId": "al-maths-6-2",
    "front": "What are the components of weight mg parallel and perpendicular to a plane inclined at angle θ to the horizontal?",
    "backBullets": [
      "Parallel (down the slope): mg sin θ",
      "Perpendicular (into the slope): mg cos θ",
      "Maximum friction in limiting equilibrium: F_max = μR."
    ]
  },
  {
    "id": "al-maths-fc-30",
    "subtopicId": "al-maths-6-2",
    "front": "What modelling implications follow from \"light inextensible string\" and \"smooth pulley\"?",
    "backBullets": [
      "Light string: mass of string is negligible, so tension is constant along its length.",
      "Inextensible string: string does not stretch, so connected particles have identical magnitude of acceleration a.",
      "Smooth pulley: zero friction at pulley bearing, so tension T is equal on both sides."
    ]
  },
  {
    "id": "al-maths-fc-1-1-3",
    "subtopicId": "al-maths-1-1",
    "front": "Condition for ax² + bx + c = 0 to have real roots (not necessarily distinct)?",
    "backBullets": [
      "b² − 4ac ≥ 0 (includes repeated tangent root Δ = 0)."
    ]
  },
  {
    "id": "al-maths-fc-1-1-4",
    "subtopicId": "al-maths-1-1",
    "front": "How do you solve a hidden quadratic like x − 7√x + 10 = 0?",
    "backBullets": [
      "Substitute y = √x (with y ≥ 0), factorise (y − 2)(y − 5) = 0, then square back: x = 4 or 25."
    ]
  },
  {
    "id": "al-maths-fc-1-1-5",
    "subtopicId": "al-maths-1-1",
    "front": "Set notation for x < −2 or x > 5?",
    "backBullets": [
      "{x : x < −2} ∪ {x : x > 5}."
    ]
  },
  {
    "id": "al-maths-fc-1-2-3",
    "subtopicId": "al-maths-1-2",
    "front": "State the Factor Theorem for linear factor (ax − b).",
    "backBullets": [
      "(ax − b) is a factor of f(x) ⇔ f(b/a) = 0."
    ]
  },
  {
    "id": "al-maths-fc-1-2-4",
    "subtopicId": "al-maths-1-2",
    "front": "How do you rationalise 1 / (3 − √5)?",
    "backBullets": [
      "Multiply top and bottom by conjugate (3 + √5) → (3 + √5) / (9 − 5) = (3 + √5)/4."
    ]
  },
  {
    "id": "al-maths-fc-1-2-5",
    "subtopicId": "al-maths-1-2",
    "front": "Shape of a positive cubic y = ax³ + ... vs negative cubic?",
    "backBullets": [
      "Positive a > 0 rises bottom-left to top-right; negative a < 0 falls top-left to bottom-right."
    ]
  },
  {
    "id": "al-maths-fc-1-3-3",
    "subtopicId": "al-maths-1-3",
    "front": "Standard equation of a circle with centre (a, b) and radius r?",
    "backBullets": [
      "(x − a)² + (y − b)² = r²."
    ]
  },
  {
    "id": "al-maths-fc-1-3-4",
    "subtopicId": "al-maths-1-3",
    "front": "How do you find the tangent to a circle at point P?",
    "backBullets": [
      "Find radius gradient m_CP, take negative reciprocal −1/m_CP, then use y − y₁ = m(x − x₁)."
    ]
  },
  {
    "id": "al-maths-fc-1-3-5",
    "subtopicId": "al-maths-1-3",
    "front": "Fastest way to show AB is a diameter of a circle through A, B, C?",
    "backBullets": [
      "Show AC ⊥ BC (m_AC × m_BC = −1) or AB² = AC² + BC² (converse of angle in a semicircle)."
    ]
  },
  {
    "id": "al-maths-fc-2-1-3",
    "subtopicId": "al-maths-2-1",
    "front": "First step to expand (a + bx)ⁿ when n is negative or fractional?",
    "backBullets": [
      "Factor out aⁿ so the bracket begins with 1: aⁿ(1 + (b/a)x)ⁿ."
    ]
  },
  {
    "id": "al-maths-fc-2-1-4",
    "subtopicId": "al-maths-2-1",
    "front": "Validity condition for (a + bx)ⁿ with rational/negative n?",
    "backBullets": [
      "|(b/a)x| < 1, i.e. |x| < |a/b|."
    ]
  },
  {
    "id": "al-maths-fc-2-1-5",
    "subtopicId": "al-maths-2-1",
    "front": "Formula for ⁿC_r?",
    "backBullets": [
      "n! / (r!(n − r)!)."
    ]
  },
  {
    "id": "al-maths-fc-2-2-3",
    "subtopicId": "al-maths-2-2",
    "front": "Both sum formulae for an Arithmetic Series?",
    "backBullets": [
      "Sₙ = (n/2)(2a + (n − 1)d) and Sₙ = (n/2)(a + l)."
    ]
  },
  {
    "id": "al-maths-fc-2-2-4",
    "subtopicId": "al-maths-2-2",
    "front": "Sum to infinity formula and convergence condition?",
    "backBullets": [
      "S_∞ = a / (1 − r), valid strictly when |r| < 1 (−1 < r < 1)."
    ]
  },
  {
    "id": "al-maths-fc-2-2-5",
    "subtopicId": "al-maths-2-2",
    "front": "How do you find uₙ from a formula for Sₙ?",
    "backBullets": [
      "uₙ = Sₙ − Sₙ₋₁ (for n ≥ 2), and u₁ = S₁."
    ]
  },
  {
    "id": "al-maths-fc-3-1-3",
    "subtopicId": "al-maths-3-1",
    "front": "Arc length, sector area, and segment area in radians?",
    "backBullets": [
      "s = rθ; Sector A = ½r²θ; Segment A = ½r²(θ − sin θ)."
    ]
  },
  {
    "id": "al-maths-fc-3-1-4",
    "subtopicId": "al-maths-3-1",
    "front": "Three small-angle approximations (θ in radians)?",
    "backBullets": [
      "sin θ ≈ θ; tan θ ≈ θ; cos θ ≈ 1 − θ²/2."
    ]
  },
  {
    "id": "al-maths-fc-3-1-5",
    "subtopicId": "al-maths-3-1",
    "front": "Exact radian equivalents of 30°, 45°, 60°, 90°?",
    "backBullets": [
      "π/6, π/4, π/3, π/2."
    ]
  },
  {
    "id": "al-maths-fc-3-2-3",
    "subtopicId": "al-maths-3-2",
    "front": "Three versions of cos 2A?",
    "backBullets": [
      "cos²A − sin²A, 2 cos²A − 1, and 1 − 2 sin²A."
    ]
  },
  {
    "id": "al-maths-fc-3-2-4",
    "subtopicId": "al-maths-3-2",
    "front": "Pythagorean identities involving sec²θ and cosec²θ?",
    "backBullets": [
      "1 + tan²θ ≡ sec²θ and 1 + cot²θ ≡ cosec²θ."
    ]
  },
  {
    "id": "al-maths-fc-3-2-5",
    "subtopicId": "al-maths-3-2",
    "front": "Amplitude R in a cos θ + b sin θ ≡ R cos(θ − α)?",
    "backBullets": [
      "R = √(a² + b²) with tan α = b/a."
    ]
  },
  {
    "id": "al-maths-fc-3-3-3",
    "subtopicId": "al-maths-3-3",
    "front": "How do you linearise y = abˣ vs y = axⁿ?",
    "backBullets": [
      "y = abˣ → plot ln y vs x (grad ln b); y = axⁿ → plot ln y vs ln x (grad n)."
    ]
  },
  {
    "id": "al-maths-fc-3-3-4",
    "subtopicId": "al-maths-3-3",
    "front": "Domain restriction on ln(f(x))?",
    "backBullets": [
      "f(x) > 0 strictly — always reject negative/zero roots of log equations!"
    ]
  },
  {
    "id": "al-maths-fc-3-3-5",
    "subtopicId": "al-maths-3-3",
    "front": "What is unique about the function y = eˣ?",
    "backBullets": [
      "Its derivative equals itself: d/dx(eˣ) = eˣ (rate of growth proportional to size)."
    ]
  },
  {
    "id": "al-maths-fc-4-1-3",
    "subtopicId": "al-maths-4-1",
    "front": "Derivatives of sin x, cos x, tan x, eˣ, and ln x?",
    "backBullets": [
      "cos x, −sin x, sec²x, eˣ, and 1/x (radians required for trig!)."
    ]
  },
  {
    "id": "al-maths-fc-4-1-4",
    "subtopicId": "al-maths-4-1",
    "front": "Formula for Quotient Rule d/dx(u/v)?",
    "backBullets": [
      "(v du/dx − u dv/dx) / v²."
    ]
  },
  {
    "id": "al-maths-fc-4-1-5",
    "subtopicId": "al-maths-4-1",
    "front": "Condition for a point of inflection?",
    "backBullets": [
      "d²y/dx² = 0 AND d²y/dx² changes sign either side of the point."
    ]
  },
  {
    "id": "al-maths-fc-4-2-3",
    "subtopicId": "al-maths-4-2",
    "front": "LATE priority order for choosing u in Integration by Parts?",
    "backBullets": [
      "Logs → Algebra (polynomials) → Trig → Exponentials."
    ]
  },
  {
    "id": "al-maths-fc-4-2-4",
    "subtopicId": "al-maths-4-2",
    "front": "How do you integrate ∫ sin²x dx and ∫ cos²x dx?",
    "backBullets": [
      "Use double-angle identities: sin²x = ½(1 − cos 2x) and cos²x = ½(1 + cos 2x)."
    ]
  },
  {
    "id": "al-maths-fc-4-2-5",
    "subtopicId": "al-maths-4-2",
    "front": "What is the Trapezium Rule formula?",
    "backBullets": [
      "Area ≈ ½h[y₀ + yₙ + 2(y₁ + y₂ + ... + yₙ₋₁)], where h = (b − a)/n."
    ]
  },
  {
    "id": "al-maths-fc-4-3-3",
    "subtopicId": "al-maths-4-3",
    "front": "Formula for a unit vector in the direction of v?",
    "backBullets": [
      "v̂ = v / |v| (magnitude equals 1)."
    ]
  },
  {
    "id": "al-maths-fc-4-3-4",
    "subtopicId": "al-maths-4-3",
    "front": "How do you find the angle a 3D vector makes with the y-axis?",
    "backBullets": [
      "cos θ_y = y / |v| ⇒ θ_y = cos⁻¹(y / |v|)."
    ]
  },
  {
    "id": "al-maths-fc-4-3-5",
    "subtopicId": "al-maths-4-3",
    "front": "Key principle when equating two vector routes in terms of non-parallel a and b?",
    "backBullets": [
      "Equate coefficients of a and coefficients of b separately to form simultaneous equations."
    ]
  },
  {
    "id": "al-maths-fc-5-1-3",
    "subtopicId": "al-maths-5-1",
    "front": "Four assumptions for a Binomial distribution B(n, p)?",
    "backBullets": [
      "Fixed number of trials n, exactly 2 outcomes, independent trials, constant probability p."
    ]
  },
  {
    "id": "al-maths-fc-5-1-4",
    "subtopicId": "al-maths-5-1",
    "front": "What does the second parameter in X ~ N(60, 9) represent?",
    "backBullets": [
      "Variance σ² = 9, so standard deviation σ = √9 = 3!"
    ]
  },
  {
    "id": "al-maths-fc-5-1-5",
    "subtopicId": "al-maths-5-1",
    "front": "Approximately what % of a Normal distribution lies within μ ± 1σ and μ ± 2σ?",
    "backBullets": [
      "68% within ±1σ; 95% within ±2σ; 99.7% within ±3σ."
    ]
  },
  {
    "id": "al-maths-fc-5-2-3",
    "subtopicId": "al-maths-5-2",
    "front": "Distribution of sample mean X̄ for sample size n from N(μ, σ²)?",
    "backBullets": [
      "X̄ ~ N(μ, σ²/n) — standard error is σ / √n."
    ]
  },
  {
    "id": "al-maths-fc-5-2-4",
    "subtopicId": "al-maths-5-2",
    "front": "What must you do to significance level α in a two-tailed test?",
    "backBullets": [
      "Halve it (α/2 in each tail, e.g. 5% → 2.5% per tail)."
    ]
  },
  {
    "id": "al-maths-fc-5-2-5",
    "subtopicId": "al-maths-5-2",
    "front": "Why should you NEVER write \"H₀ is proved\" in a hypothesis test conclusion?",
    "backBullets": [
      "Sample data can only provide \"sufficient\" or \"insufficient evidence\" at the stated significance level."
    ]
  },
  {
    "id": "al-maths-fc-6-1-3",
    "subtopicId": "al-maths-6-1",
    "front": "Horizontal and vertical equations of a projectile launched at speed U, angle θ?",
    "backBullets": [
      "x = (U cos θ)t; y = (U sin θ)t − ½gt²; v_y = U sin θ − gt."
    ]
  },
  {
    "id": "al-maths-fc-6-1-4",
    "subtopicId": "al-maths-6-1",
    "front": "When can you use SUVAT vs Calculus?",
    "backBullets": [
      "SUVAT = CONSTANT acceleration ONLY; Calculus (differentiate/integrate) = VARIABLE acceleration!"
    ]
  },
  {
    "id": "al-maths-fc-6-1-5",
    "subtopicId": "al-maths-6-1",
    "front": "Difference between total distance travelled and displacement when v changes sign?",
    "backBullets": [
      "Split the integral at t where v = 0 and sum absolute values of each stage!"
    ]
  },
  {
    "id": "al-maths-fc-6-2-3",
    "subtopicId": "al-maths-6-2",
    "front": "Weight components parallel and perpendicular to a slope of angle θ?",
    "backBullets": [
      "Parallel (down slope): mg sin θ; Perpendicular (into slope): mg cos θ."
    ]
  },
  {
    "id": "al-maths-fc-6-2-4",
    "subtopicId": "al-maths-6-2",
    "front": "What do \"light\", \"inextensible\", and \"smooth pulley\" imply?",
    "backBullets": [
      "Light = zero string mass; Inextensible = equal acceleration; Smooth pulley = equal tension both sides."
    ]
  },
  {
    "id": "al-maths-fc-6-2-5",
    "subtopicId": "al-maths-6-2",
    "front": "Condition when a beam resting on supports A and B is on the point of tilting about A?",
    "backBullets": [
      "Normal reaction at B equals ZERO (R_B = 0)."
    ]
  }
];

export const ALEVEL_MATHS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-al-maths-1-algebra-geometry",
    "slug": "pure-1-quadratics-algebra-circles",
    "title": "Topic 1: Quadratics, Polynomials & Circle Geometry",
    "topicNumber": 1,
    "topicName": "Pure 1 — Algebra, Quadratics & Coordinate Geometry",
    "summary": "Completing the square, discriminant conditions, Factor Theorem, proof methods, and circle tangents.",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "Quadratics, Discriminant & Factor Theorem",
        "formula": "Vertex form: a(x + p)² + q → Turning point (−p, q)  |  Δ = b² − 4ac",
        "points": [
          "Δ > 0: two distinct real roots; Δ = 0: one repeated root (tangent); Δ < 0: no real roots.",
          "Factor Theorem: (ax − b) is a factor of f(x) ⇔ f(b/a) = 0.",
          "Rationalising surds: multiply top and bottom of a/(b + c√d) by conjugate (b − c√d)."
        ]
      },
      {
        "heading": "Coordinate Geometry & Circles",
        "formula": "(x − a)² + (y − b)² = r²  |  m_tangent = −1 / m_radius",
        "points": [
          "Perpendicular bisector of any chord passes directly through the circle centre (a, b).",
          "Angle in a semicircle is 90°: if ∠PQR = 90°, then PR is a diameter."
        ]
      }
    ]
  },
  {
    "id": "cs-al-maths-2-binomial-series",
    "slug": "pure-binomial-expansion-and-series",
    "title": "Topic 2: Binomial Expansion, Sequences & Series",
    "topicNumber": 2,
    "topicName": "Pure 1 & 2 — Binomial Expansion, Sequences & Series",
    "summary": "Integer and rational binomial expansions, validity intervals, AP/GP sums, S_∞, and sigma notation.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "Binomial Expansion (Integer & Rational n)",
        "formula": "(1 + x)ⁿ = 1 + nx + [n(n−1)/2!]x² + [n(n−1)(n−2)/3!]x³ + …  (|x| < 1)",
        "points": [
          "For (a + bx)ⁿ with negative/fractional n: factor out aⁿ FIRST → aⁿ(1 + (b/a)x)ⁿ, valid for |x| < |a/b|.",
          "When combining partial fractions, choose the STRICTER (smaller) validity bound."
        ]
      },
      {
        "heading": "Arithmetic & Geometric Series",
        "formula": "AP: uₙ = a+(n−1)d, Sₙ = (n/2)[2a+(n−1)d]  |  GP: uₙ = arⁿ⁻¹, Sₙ = a(1−rⁿ)/(1−r), S_∞ = a/(1−r)",
        "points": [
          "Geometric series converges to S_∞ = a/(1 − r) if and only if |r| < 1.",
          "Shifted sigma sum: ∑(r=k to n) u_r = Sₙ − S_{k−1} (contains n − k + 1 terms)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-maths-3-trig-exp-logs",
    "slug": "trigonometry-radians-exponentials-logarithms",
    "title": "Topic 3: Trigonometry, Radians, Exponentials & Logarithms",
    "topicNumber": 3,
    "topicName": "Pure 1 & 2 — Trigonometry, Exponentials & Logarithms",
    "summary": "Radians, small-angle approximations, sec/cosec/cot, double angles, R-formula, and log linearisation.",
    "accentColor": "#0891b2",
    "sections": [
      {
        "heading": "Radians, Small Angles & Trig Identities",
        "formula": "l = rθ  |  A_sector = ½r²θ  |  A_segment = ½r²(θ − sin θ)  |  cos θ ≈ 1 − θ²/2",
        "points": [
          "Pythagorean identities: sin²θ + cos²θ ≡ 1; 1 + tan²θ ≡ sec²θ; 1 + cot²θ ≡ cosec²θ.",
          "Double-angle & power reduction: sin 2A ≡ 2 sin A cos A; cos²A ≡ ½(1 + cos 2A); sin²A ≡ ½(1 − cos 2A).",
          "Harmonic R-formula: a cos θ ± b sin θ ≡ R cos(θ ∓ α) where R = √(a² + b²) and tan α = b/a."
        ]
      },
      {
        "heading": "Exponentials, Natural Logs & Linearisation",
        "formula": "y = axⁿ ⇒ log y = n log x + log a  |  y = abˣ ⇒ log y = (log b)x + log a",
        "points": [
          "Power law plots log y vs log x (gradient = n); Exponential law plots log y vs x (gradient = log b).",
          "For P = A e^(kt) + C: initial value P₀ = A + C, asymptote y = C, and rate dP/dt = k(P − C)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-maths-4-calculus-vectors",
    "slug": "calculus-differentiation-integration-vectors",
    "title": "Topic 4: Differentiation, Integration, ODEs & 3D Vectors",
    "topicNumber": 4,
    "topicName": "Calculus & Vectors",
    "summary": "Chain/Product/Quotient rules, implicit/parametric calculus, substitution, parts, ODEs, and 3D vectors.",
    "accentColor": "#0f766e",
    "sections": [
      {
        "heading": "Differentiation & Integration Rules",
        "formula": "d/dx(uv) = u′v + uv′  |  d/dx(u/v) = (vu′ − uv′)/v²  |  ∫ u(dv/dx)dx = uv − ∫ v(du/dx)dx",
        "points": [
          "Implicit: d/dx(f(y)) = f′(y) dy/dx; Parametric: dy/dx = (dy/dt) ÷ (dx/dt).",
          "Reverse chain rule: ∫ [f′(x)/f(x)] dx = ln|f(x)| + c. Choose u in Parts by LATE (Logs, Algebra, Trig, Exp).",
          "Separable ODE dy/dx = f(x)g(y) ⇒ ∫ (1/g(y)) dy = ∫ f(x) dx + c."
        ]
      },
      {
        "heading": "2D & 3D Vectors",
        "formula": "AB = b − a  |  |v| = √(x² + y² + z²)  |  â = a / |a|  |  cos θ_x = x / |v|",
        "points": [
          "Collinearity proof requires TWO facts: AB = λ BC (parallel) AND shared common point B.",
          "Ratio Theorem: if P divides AB in ratio m : n, then OP = (na + mb)/(m + n)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-maths-5-statistics",
    "slug": "statistics-distributions-hypothesis-testing",
    "title": "Topic 5: Binomial, Normal Distributions & Hypothesis Testing",
    "topicNumber": 5,
    "topicName": "Statistics",
    "summary": "B(n, p), N(μ, σ²), Z-standardisation, continuity corrections, sample-mean tests, and PMCC correlation.",
    "accentColor": "#d97706",
    "sections": [
      {
        "heading": "Binomial & Normal Distributions",
        "formula": "X ~ B(n, p): μ = np, σ² = np(1−p)  |  Z = (X − μ) / σ ~ N(0, 1)",
        "points": [
          "BINS conditions: Binary, Independent, fixed Number n, Same probability p.",
          "Continuity correction (B → N): P(X ≤ k) ≈ P(Y < k + 0.5); P(X ≥ k) ≈ P(Y > k − 0.5)."
        ]
      },
      {
        "heading": "Hypothesis Testing (Binomial, Sample Mean & PMCC)",
        "formula": "Sample Mean: X̄ ~ N(μ, σ²/n) ⇒ Z = (X̄ − μ₀) / (σ / √n)",
        "points": [
          "Always state hypotheses using population parameters: p (Binomial), μ (Normal mean), ρ (PMCC correlation: H₀: ρ = 0).",
          "Halve significance level α in each tail for two-tailed tests, and write a non-assertive conclusion in context."
        ]
      }
    ]
  },
  {
    "id": "cs-al-maths-6-mechanics",
    "slug": "mechanics-kinematics-projectiles-forces-moments",
    "title": "Topic 6: Kinematics, Projectiles, Forces & Rigid-Body Moments",
    "topicNumber": 6,
    "topicName": "Mechanics",
    "summary": "SUVAT equations, 2D projectiles, calculus kinematics, inclined planes, friction, pulleys, and moments.",
    "accentColor": "#e11d48",
    "sections": [
      {
        "heading": "Kinematics: SUVAT, Projectiles & Calculus",
        "formula": "v = u+at  |  s = ut+½at²  |  v² = u²+2as  |  x = (U cos α)t, y = (U sin α)t − ½gt²",
        "points": [
          "Projectiles: horizontal velocity U cos α is constant (a_x = 0); vertical motion has a_y = −g = −9.8 m s⁻².",
          "Variable acceleration: differentiate r → v → a; integrate a → v → r (fixing vector constants via t = 0)."
        ]
      },
      {
        "heading": "Forces, Friction, Pulleys & Moments",
        "formula": "F_net = ma  |  F_max = μR  |  Slope: mg sin θ (parallel), mg cos θ (perp)  |  Moment = F × d_⊥",
        "points": [
          "Connected particles: add individual F = ma equations to eliminate tension T and solve for acceleration a.",
          "Static rigid body (ladders/beams): ∑F_x = 0, ∑F_y = 0, ∑Moments = 0; on the point of tilting about D ⇒ R_C = 0."
        ]
      }
    ]
  }
];

export const ALEVEL_MATHS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "al-maths-exam-1",
    "subtopicId": "al-maths-1-3",
    "number": 1,
    "stimulus": "A circle C has equation x² + y² − 6x + 10y − 15 = 0. The point P(7, −2) lies on C.",
    "parts": [
      {
        "id": "al-maths-exam-1a",
        "label": "a)",
        "prompt": "By completing the square, what are the coordinates of the centre and the radius of circle C?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Centre (3, −5), radius 7",
          "Centre (−3, 5), radius 7",
          "Centre (3, −5), radius 49",
          "Centre (6, −10), radius √15"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-maths-exam-1b",
        "label": "b)",
        "prompt": "Find the equation of the tangent to the circle C at the point P(7, −2), giving your answer in the form ax + by + c = 0.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Gradient of radius from (3, −5) to (7, −2) is (−2 − (−5))/(7 − 3) = 3/4. Gradient of perpendicular tangent = −4/3. Equation: y + 2 = −(4/3)(x − 7) ⇒ 3y + 6 = −4x + 28 ⇒ 4x + 3y − 22 = 0.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Gradient of radius = 3/4",
              "requiredKeywordGroups": [
                [
                  "3/4",
                  "0.75"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Perpendicular tangent gradient = −4/3",
              "requiredKeywordGroups": [
                [
                  "-4/3",
                  "−4/3"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Correct tangent equation 4x + 3y − 22 = 0",
              "requiredKeywordGroups": [
                [
                  "4x + 3y - 22",
                  "4x + 3y − 22",
                  "22"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-maths-exam-1c",
        "label": "c)",
        "prompt": "A chord AB of circle C has length 10. Calculate the exact perpendicular distance from the centre of C to the chord AB.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Half-chord = 5 and radius r = 7. By Pythagoras, perpendicular distance d = √(7² − 5²) = √(49 − 25) = √24 = 2√6.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Uses Pythagoras d² + 5² = 7²",
              "requiredKeywordGroups": [
                [
                  "49",
                  "25"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Exact distance √24 or 2√6 (or 4.90)",
              "requiredKeywordGroups": [
                [
                  "24",
                  "2√6",
                  "4.9"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-exam-2",
    "subtopicId": "al-maths-2-1",
    "number": 2,
    "stimulus": "Consider the function f(x) = (4 − 2x)^(−1/2) for |x| < k.",
    "parts": [
      {
        "id": "al-maths-exam-2a",
        "label": "a)",
        "prompt": "What is the maximum value of k for which the binomial expansion of f(x) in ascending powers of x converges?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "k = 1/2",
          "k = 1",
          "k = 2",
          "k = 4"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-maths-exam-2b",
        "label": "b)",
        "prompt": "Find the first three terms in the binomial expansion of f(x) = (4 − 2x)^(−1/2) in ascending powers of x.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Factor out 4^(−1/2) = 1/2: ½(1 − x/2)^(−1/2) = ½ [1 + (−½)(−x/2) + ((−½)(−3/2)/2)(−x/2)²] = ½ [1 + x/4 + (3/32)x²] = 1/2 + (1/8)x + (3/64)x².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Factors out 4^(−1/2) = 1/2",
              "requiredKeywordGroups": [
                [
                  "1/2",
                  "0.5"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Correct linear term (1/8)x",
              "requiredKeywordGroups": [
                [
                  "1/8",
                  "0.125"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Correct quadratic term (3/64)x²",
              "requiredKeywordGroups": [
                [
                  "3/64"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-maths-exam-2c",
        "label": "c)",
        "prompt": "Explain why substituting x = 3 into your expansion cannot be used to estimate (4 − 6)^(−1/2).",
        "kind": "short-answer",
        "marks": 1,
        "rubric": {
          "maxMarks": 1,
          "modelAnswer": "x = 3 lies outside the range of convergence |x| < 2, so the infinite series diverges.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "x = 3 is outside the validity range |x| < 2 (series diverges)",
              "requiredKeywordGroups": [
                [
                  "outside",
                  "valid",
                  "converg",
                  "diverg",
                  "|x| < 2"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-exam-3",
    "subtopicId": "al-maths-3-2",
    "number": 3,
    "stimulus": "The depth of water D(t) metres in a harbour t hours after midnight is modelled by D(t) = 7 + 3 cos(30t)° + 4 sin(30t)°.",
    "parts": [
      {
        "id": "al-maths-exam-3a",
        "label": "a)",
        "prompt": "When 3 cos θ + 4 sin θ is expressed in the form R cos(θ − α) with R > 0 and 0° < α < 90°, what are R and tan α?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "R = 5, tan α = 4/3",
          "R = 5, tan α = 3/4",
          "R = 7, tan α = 4/3",
          "R = 25, tan α = 4/3"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-maths-exam-3b",
        "label": "b)",
        "prompt": "Hence state the maximum depth of water in the harbour and calculate the first time after midnight when this maximum depth occurs (to the nearest minute).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Maximum depth = 7 + 5 = 12 m. Occurs when cos(30t − 53.13°) = 1 ⇒ 30t − 53.13 = 0 ⇒ t = 53.13 / 30 = 1.771 hours = 01:46.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Maximum depth = 12 m",
              "numericMatch": {
                "value": 12,
                "tolerance": 0
              }
            },
            {
              "id": "mp2",
              "markDescription": "Sets 30t − 53.1° = 0",
              "requiredKeywordGroups": [
                [
                  "53.1",
                  "30t"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "t = 1.77 hours or 01:46 am",
              "requiredKeywordGroups": [
                [
                  "1.77",
                  "1:46",
                  "01:46",
                  "106"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-maths-exam-3c",
        "label": "c)",
        "prompt": "State one limitation of this trigonometric model for predicting harbour depths over a whole month.",
        "kind": "short-answer",
        "marks": 1,
        "rubric": {
          "maxMarks": 1,
          "modelAnswer": "It assumes a fixed constant tidal amplitude of 5 m every day, ignoring spring/neap tidal variations and weather/storm surges.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Ignores weather/wind surges or spring/neap tide amplitude variations",
              "requiredKeywordGroups": [
                [
                  "weather",
                  "storm",
                  "wind",
                  "spring",
                  "neap",
                  "amplitude",
                  "constant"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-exam-4",
    "subtopicId": "al-maths-4-1",
    "number": 4,
    "stimulus": "A curve has equation y = x² e^(−2x) for x ∈ ℝ.",
    "parts": [
      {
        "id": "al-maths-exam-4a",
        "label": "a)",
        "prompt": "Which differentiation rule is required to differentiate the product x² · e^(−2x)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Product Rule combined with the Chain Rule on e^(−2x)",
          "Quotient Rule only",
          "Implicit differentiation only",
          "Trapezium Rule"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-maths-exam-4b",
        "label": "b)",
        "prompt": "Find dy/dx in fully factorised form.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Using the Product Rule with u = x², v = e^(−2x): dy/dx = 2x e^(−2x) − 2x² e^(−2x) = 2x e^(−2x)(1 − x).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Applies Product Rule: u′v + uv′",
              "requiredKeywordGroups": [
                [
                  "2x",
                  "e"
                ],
                [
                  "-2",
                  "−2"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Correct derivative 2x e^(-2x) - 2x^2 e^(-2x)",
              "requiredKeywordGroups": [
                [
                  "2x",
                  "x^2",
                  "x²"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Factorised form 2x e^(-2x)(1 - x)",
              "requiredKeywordGroups": [
                [
                  "1 - x",
                  "1 − x",
                  "1-x"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-maths-exam-4c",
        "label": "c)",
        "prompt": "Hence find the exact coordinates of both stationary points of the curve.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Set dy/dx = 0. Since e^(−2x) > 0 for all x, 2x(1 − x) = 0 ⇒ x = 0 or x = 1. Substituting gives (0, 0) and (1, e⁻²).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Sets dy/dx = 0 and notes e^(-2x) ≠ 0",
              "requiredKeywordGroups": [
                [
                  "0"
                ],
                [
                  "1"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Point (0, 0)",
              "requiredKeywordGroups": [
                [
                  "(0, 0)",
                  "(0,0)"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Point (1, e^-2) or (1, 1/e^2)",
              "requiredKeywordGroups": [
                [
                  "e^-2",
                  "e⁻²",
                  "1/e^2",
                  "1/e²"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-exam-5",
    "subtopicId": "al-maths-5-2",
    "number": 5,
    "stimulus": "The masses of bags of coffee beans produced by a machine are normally distributed with mean μ g and known standard deviation σ = 12 g. Under standard settings μ = 500 g. Following a maintenance check, a quality inspector takes a random sample of n = 36 bags and finds a sample mean of x̄ = 495.2 g.",
    "parts": [
      {
        "id": "al-maths-exam-5a",
        "label": "a)",
        "prompt": "Under H₀: μ = 500, what is the standard error (standard deviation) of the sample mean X̄ for n = 36?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "12 g",
          "4 g",
          "2 g",
          "0.33 g"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-maths-exam-5b",
        "label": "b)",
        "prompt": "Carry out a two-tailed hypothesis test at the 5% significance level to determine whether the mean mass of coffee bags has changed from 500 g.",
        "kind": "short-answer",
        "marks": 4,
        "rubric": {
          "maxMarks": 4,
          "modelAnswer": "H₀: μ = 500, H₁: μ ≠ 500 (two-tailed, α = 0.05 ⇒ 0.025 in each tail, critical z = ±1.96). Under H₀, X̄ ~ N(500, 12²/36) = N(500, 2²). Test statistic z = (495.2 − 500)/2 = −2.40. Since |−2.40| > 1.96 (p = 0.0082 < 0.025), reject H₀. There is sufficient evidence at the 5% level that the mean mass of coffee bags has changed from 500 g.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "States H₀: μ = 500 and H₁: μ ≠ 500",
              "requiredKeywordGroups": [
                [
                  "500"
                ],
                [
                  "h0",
                  "h₀",
                  "h1",
                  "h₁"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Calculates test statistic z = −2.40",
              "requiredKeywordGroups": [
                [
                  "-2.4",
                  "−2.4"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Compares with critical value ±1.96 (or p = 0.0082 < 0.025) and rejects H₀",
              "requiredKeywordGroups": [
                [
                  "1.96",
                  "0.0082",
                  "0.025"
                ],
                [
                  "reject"
                ]
              ]
            },
            {
              "id": "mp4",
              "markDescription": "Contextual conclusion referring to mean mass of coffee bags",
              "requiredKeywordGroups": [
                [
                  "evidence",
                  "mean",
                  "coffee",
                  "bag"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-maths-exam-5c",
        "label": "c)",
        "prompt": "Explain why the Central Limit Theorem is NOT required to justify the distribution of X̄ in this test.",
        "kind": "short-answer",
        "marks": 1,
        "rubric": {
          "maxMarks": 1,
          "modelAnswer": "Because the underlying parent population of coffee bag masses is already normally distributed, X̄ is exactly normal for any sample size n.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Parent population is already Normally distributed",
              "requiredKeywordGroups": [
                [
                  "parent",
                  "population",
                  "already",
                  "normal"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-exam-6",
    "subtopicId": "al-maths-6-2",
    "number": 6,
    "stimulus": "A particle P of mass 5 kg lies on a rough plane inclined at 30° to the horizontal, where the coefficient of friction is μ = 0.25. P is connected by a light inextensible string passing over a smooth pulley at the top of the plane to a particle Q of mass 4 kg hanging freely. The system is released from rest (take g = 9.8 m s⁻²).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "al-maths-exam-6a",
        "label": "a)",
        "prompt": "Which modeling assumption ensures that the tension T in the string is identical on both sides of the pulley?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "The plane is inclined at 30°",
          "The pulley is smooth",
          "The string is inextensible",
          "Particles P and Q are point masses"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-maths-exam-6b",
        "label": "b)",
        "prompt": "Calculate the magnitude of the frictional force acting on P as it begins to slide up the plane.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Resolving perpendicular to the plane: R = 5g cos 30° = 49 × (√3/2) = 42.44 N. Since P slides, F = μR = 0.25 × 42.44 = 10.61 N (down the plane).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "R = 5g cos 30° = 42.4 N",
              "requiredKeywordGroups": [
                [
                  "cos",
                  "42.4"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "F = 0.25 R = 10.6 N",
              "numericMatch": {
                "value": 10.6,
                "tolerance": 0.1
              }
            }
          ]
        }
      },
      {
        "id": "al-maths-exam-6c",
        "label": "c)",
        "prompt": "By writing down the equations of motion for P and Q, calculate the acceleration a of the system.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "For Q (falling): 4g − T = 4a. For P (moving up slope): T − 5g sin 30° − 10.61 = 5a. Adding both equations eliminates T: 4(9.8) − 24.5 − 10.61 = 9a ⇒ 39.2 − 35.11 = 9a ⇒ 4.09 = 9a ⇒ a = 0.454 m s⁻².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Equation for Q: 4g − T = 4a",
              "requiredKeywordGroups": [
                [
                  "4g",
                  "39.2"
                ],
                [
                  "4a"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Equation for P: T − 5g sin 30° − 10.6 = 5a",
              "requiredKeywordGroups": [
                [
                  "24.5",
                  "sin"
                ],
                [
                  "5a"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Acceleration a ≈ 0.45 m s⁻²",
              "numericMatch": {
                "value": 0.454,
                "tolerance": 0.02
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-1-1",
    "subtopicId": "al-maths-1-1",
    "number": 7,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] The line y = kx − 2 is tangent to the curve y = x² + 2x + 7.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the two possible values of k.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Equate: x² + (2 − k)x + 9 = 0. Tangency requires Δ = 0: (2 − k)² − 36 = 0 → 2 − k = ±6 → k = −4 or k = 8.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Forms x² + (2 − k)x + 9 = 0 & sets Δ = 0",
              "requiredKeywordGroups": [
                [
                  "36",
                  "9"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "k = −4",
              "numericMatch": {
                "value": -4,
                "tolerance": 0.01
              }
            },
            {
              "id": "mp3",
              "markDescription": "k = 8",
              "numericMatch": {
                "value": 8,
                "tolerance": 0.01
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-1-2",
    "subtopicId": "al-maths-1-2",
    "number": 8,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] f(x) = x³ − 4x² + x + 6.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Use the Factor Theorem to show (x − 2) is a factor and hence factorise f(x) completely.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "f(2) = 8 − 16 + 2 + 6 = 0 so (x − 2) is a factor. Dividing gives x² − 2x − 3 = (x − 3)(x + 1), so f(x) = (x − 2)(x − 3)(x + 1).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Shows f(2) = 0",
              "requiredKeywordGroups": [
                [
                  "8",
                  "16",
                  "0"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Quotient x² − 2x − 3",
              "requiredKeywordGroups": [
                [
                  "2x",
                  "3"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "(x − 2)(x − 3)(x + 1)",
              "requiredKeywordGroups": [
                [
                  "(x-3)",
                  "(x - 3)",
                  "(x − 3)"
                ],
                [
                  "(x+1)",
                  "(x + 1)"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-2-2",
    "subtopicId": "al-maths-2-2",
    "number": 9,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] A geometric series has second term 12 and fifth term 1.5.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the common ratio r, first term a, and sum to infinity S_∞.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "ar⁴ / ar = r³ = 1.5 / 12 = 1/8 → r = 0.5; a = 12 / 0.5 = 24; S_∞ = 24 / (1 − 0.5) = 48.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "r = 0.5 (or 1/2)",
              "numericMatch": {
                "value": 0.5,
                "tolerance": 0.01
              }
            },
            {
              "id": "mp2",
              "markDescription": "a = 24",
              "numericMatch": {
                "value": 24,
                "tolerance": 0.05
              }
            },
            {
              "id": "mp3",
              "markDescription": "S_∞ = 48",
              "numericMatch": {
                "value": 48,
                "tolerance": 0.1
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-3-1",
    "subtopicId": "al-maths-3-1",
    "number": 10,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] A sector OAB has radius r = 6 cm and angle θ = 0.8 radians.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the exact perimeter of sector OAB and the area of the minor segment (to 2 d.p.).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Perimeter = 6(0.8) + 12 = 4.8 + 12 = 16.8 cm. Segment area = ½(36)(0.8 − sin 0.8) = 18(0.8 − 0.7174) = 1.49 cm².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Arc 4.8 cm + 2r = 16.8 cm",
              "numericMatch": {
                "value": 16.8,
                "tolerance": 0.05
              }
            },
            {
              "id": "mp2",
              "markDescription": "Uses ½r²(θ − sin θ)",
              "requiredKeywordGroups": [
                [
                  "18",
                  "0.717",
                  "sin"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Segment area 1.49 cm²",
              "numericMatch": {
                "value": 1.49,
                "tolerance": 0.04
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-3-3",
    "subtopicId": "al-maths-3-3",
    "number": 11,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] A bacterial population is modelled by P = 500 e^(0.2t), where t is in hours.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the exact time t when the population reaches 2,000, and the initial rate of growth dP/dt at t = 0.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "e^(0.2t) = 4 → 0.2t = ln 4 → t = 5 ln 4 (≈ 6.93 h). dP/dt = 100 e^(0.2t); at t = 0, rate = 100 bacteria/hour.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "e^(0.2t) = 4",
              "requiredKeywordGroups": [
                [
                  "ln 4",
                  "ln4",
                  "1.386"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "t = 5 ln 4 (6.93 h)",
              "requiredKeywordGroups": [
                [
                  "5 ln 4",
                  "5ln4",
                  "6.93"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Initial rate 100",
              "numericMatch": {
                "value": 100,
                "tolerance": 0.5
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-4-2",
    "subtopicId": "al-maths-4-2",
    "number": 12,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] Solve the differential equation dy/dx = 2xy given that y = 3 when x = 0.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Separate variables and express y explicitly in terms of x.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "∫ (1/y) dy = ∫ 2x dx → ln|y| = x² + c. At (0, 3), c = ln 3 → y = 3 e^(x²).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Separates to ln|y| = x² + c",
              "requiredKeywordGroups": [
                [
                  "ln"
                ],
                [
                  "x^2",
                  "x²"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Finds c = ln 3 (or A = 3)",
              "requiredKeywordGroups": [
                [
                  "ln 3",
                  "ln3",
                  "3"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "y = 3e^(x²)",
              "requiredKeywordGroups": [
                [
                  "3e",
                  "3 e"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-4-3",
    "subtopicId": "al-maths-4-3",
    "number": 13,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] Points A(1, −2, 4) and B(3, 4, 1) lie in 3D space.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find vector AB, its exact length |AB|, and the angle AB makes with the positive y-axis (1 d.p.).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "AB = (2, 6, −3); |AB| = √(4 + 36 + 9) = √49 = 7; cos θ_y = 6/7 → θ_y = 31.0°.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "AB = (2, 6, −3)",
              "requiredKeywordGroups": [
                [
                  "2"
                ],
                [
                  "6"
                ],
                [
                  "-3",
                  "−3"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "|AB| = 7",
              "numericMatch": {
                "value": 7,
                "tolerance": 0.01
              }
            },
            {
              "id": "mp3",
              "markDescription": "Angle 31.0°",
              "numericMatch": {
                "value": 31,
                "tolerance": 0.2
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-5-1",
    "subtopicId": "al-maths-5-1",
    "number": 14,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] Weights of apples follow X ~ N(120, σ²), and 15.87% of apples weigh more than 135 g (Φ(1.0) = 0.8413).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Use standardisation Z = (X − μ)/σ to find the standard deviation σ and variance σ².",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "P(X ≤ 135) = 0.8413 → z = 1.0 → (135 − 120)/σ = 1.0 → σ = 15 g, variance σ² = 225.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies z = 1.0",
              "numericMatch": {
                "value": 1,
                "tolerance": 0.02
              }
            },
            {
              "id": "mp2",
              "markDescription": "σ = 15",
              "numericMatch": {
                "value": 15,
                "tolerance": 0.2
              }
            },
            {
              "id": "mp3",
              "markDescription": "Variance 225",
              "numericMatch": {
                "value": 225,
                "tolerance": 2
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-maths-ex-6-1",
    "subtopicId": "al-maths-6-1",
    "number": 15,
    "stimulus": "[Edexcel 9MA0 / CIE 9709 Style] A stone is projected horizontally at 15 m/s from the top of a 44.1 m high cliff (g = 9.8 m/s²).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the time taken to hit the sea and the horizontal distance from the base of the cliff.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Vertically: 44.1 = 0 + ½(9.8)t² → 4.9t² = 44.1 → t² = 9 → t = 3 s. Horizontally: x = 15 × 3 = 45 m.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Sets 4.9t² = 44.1",
              "requiredKeywordGroups": [
                [
                  "4.9",
                  "44.1",
                  "9"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "t = 3 s",
              "numericMatch": {
                "value": 3,
                "tolerance": 0.02
              }
            },
            {
              "id": "mp3",
              "markDescription": "x = 45 m",
              "numericMatch": {
                "value": 45,
                "tolerance": 0.2
              }
            }
          ]
        }
      }
    ]
  }
];

export const ALEVEL_MATHS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "al-maths-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Edexcel 9MA0 Paper 1: Pure Mathematics 1 (9MA0/01)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "9MA0/01",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Official Edexcel A-Level Mathematical Formulae and Statistical Tables Booklet.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Find the first three terms in ascending powers of x in the binomial expansion of (9 − 3x)^(1/2), stating the range of x for which the expansion is valid.",
        "marks": 4,
        "markScheme": [
          "Factor out 9^(1/2) = 3: 3(1 − x/3)^(1/2) (1 mark).",
          "3[1 + (1/2)(−x/3) + ((1/2)(−1/2)/2)(−x/3)²] = 3 − (1/2)x − (1/24)x² (2 marks).",
          "Valid for |−x/3| < 1 ⇒ |x| < 3 (1 mark)."
        ]
      },
      {
        "number": "2",
        "question": "A circle has equation x² + y² − 10x + 4y + 13 = 0. Find its centre, radius, and the equation of the tangent at (7, 2).",
        "marks": 5,
        "markScheme": [
          "(x − 5)² + (y + 2)² = 16 ⇒ Centre (5, −2), Radius 4 (2 marks).",
          "Radius gradient = (2 − (−2))/(7 − 5) = 2 ⇒ Tangent gradient = −1/2 (2 marks).",
          "y − 2 = −½(x − 7) ⇒ x + 2y − 11 = 0 (1 mark)."
        ]
      },
      {
        "number": "3",
        "question": "Use integration by parts to find the exact value of ∫(1 to e) x² ln x dx.",
        "marks": 5,
        "markScheme": [
          "Set u = ln x (u′ = 1/x), dv/dx = x² (v = x³/3) (2 marks).",
          "[(x³/3) ln x]₁ᵉ − ∫(1 to e) (x²/3) dx = (e³/3) − [x³/9]₁ᵉ (2 marks).",
          "= e³/3 − (e³/9 − 1/9) = (2e³ + 1)/9 (1 mark)."
        ]
      },
      {
        "number": "4",
        "question": "Prove by contradiction that √2 is an irrational number.",
        "marks": 5,
        "markScheme": [
          "Assume the negation: √2 = a/b where a, b are integers with no common factors (hcf(a, b) = 1) (1 mark).",
          "Square both sides: 2b² = a² ⇒ a² is even ⇒ a is even, so let a = 2k (2 marks).",
          "Substitute: 2b² = (2k)² = 4k² ⇒ b² = 2k² ⇒ b² is even ⇒ b is also even (1 mark).",
          "Contradiction: a and b share a common factor of 2, contradicting lowest terms; hence √2 is irrational (1 mark)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Edexcel 9MA0 Paper 2: Pure Mathematics 2 (9MA0/02)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "9MA0/02",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Official Edexcel A-Level Mathematical Formulae and Statistical Tables Booklet.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Given that θ is small and measured in radians, use small-angle approximations to show that (1 − cos 4θ) / (2θ sin 3θ) ≈ 4/3.",
        "marks": 4,
        "markScheme": [
          "Substitutes cos 4θ ≈ 1 − (4θ)²/2 = 1 − 8θ² and sin 3θ ≈ 3θ (2 marks).",
          "Numerator = 1 − (1 − 8θ²) = 8θ²; Denominator = 2θ(3θ) = 6θ² (1 mark).",
          "8θ² / 6θ² = 4/3 (1 mark)."
        ]
      },
      {
        "number": "2",
        "question": "A geometric series has first term a = 18 and fourth term u₄ = 16/3. Find the common ratio r and the sum to infinity S_∞.",
        "marks": 4,
        "markScheme": [
          "18 r³ = 16/3 ⇒ r³ = 8/27 ⇒ r = 2/3 (2 marks).",
          "Since |2/3| < 1, S_∞ = 18 / (1 − 2/3) = 54 (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Use the substitution u = 2x + 1 to find the exact value of ∫(0 to 4) x √(2x + 1) dx.",
        "marks": 6,
        "markScheme": [
          "du = 2 dx ⇒ dx = du/2 and x = (u − 1)/2; limits x = 0 → u = 1, x = 4 → u = 9 (2 marks).",
          "Integral becomes ¼ ∫(1 to 9) (u^(3/2) − u^(1/2)) du (2 marks).",
          "¼ [(2/5)u^(5/2) − (2/3)u^(3/2)]₁⁹ = ¼ [(486/5 − 18) − (2/5 − 2/3)] = 298/15 (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Solve the differential equation dy/dx = 2x(y − 3) given that y = 7 when x = 0, expressing y in terms of x.",
        "marks": 5,
        "markScheme": [
          "Separate variables: ∫ 1/(y − 3) dy = ∫ 2x dx (2 marks).",
          "ln|y − 3| = x² + c ⇒ y − 3 = A e^(x²) (2 marks).",
          "Using (0, 7) ⇒ A = 4 ⇒ y = 3 + 4 e^(x²) (1 mark)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2024-p3",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Edexcel 9MA0 Paper 3: Statistics & Mechanics (9MA0/03)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "9MA0/03",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Large Data Set Summary & Statistical Critical Values Booklet.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "The lengths of steel rods follow L ~ N(μ, 1.5²). A sample of 36 rods has mean 49.4 cm. Test at the 5% level whether μ < 50 cm.",
        "marks": 5,
        "markScheme": [
          "H₀: μ = 50, H₁: μ < 50 (one-tailed, α = 0.05) (1 mark).",
          "Under H₀, L̄ ~ N(50, 2.25/36) ⇒ SE = 1.5/6 = 0.25 (1 mark).",
          "z = (49.4 − 50)/0.25 = −2.40 < −1.6449 (p = 0.0082 < 0.05) ⇒ Reject H₀ (2 marks).",
          "Sufficient evidence at the 5% level to suggest mean rod length is less than 50 cm (1 mark)."
        ]
      },
      {
        "number": "2",
        "question": "Battery lifetimes follow T ~ N(μ, σ²). Given P(T > 60) = 0.10 and P(T < 42) = 0.05, find μ and σ to 3 significant figures.",
        "marks": 5,
        "markScheme": [
          "Inverse Normal: (60 − μ)/σ = 1.2816 and (42 − μ)/σ = −1.6449 (2 marks).",
          "Subtracting: 18 = 2.9265σ ⇒ σ = 6.15 hours (2 marks).",
          "μ = 60 − 1.2816(6.15) = 52.1 hours (1 mark)."
        ]
      },
      {
        "number": "3",
        "question": "A particle is projected from ground level at 20 m s⁻¹ at 35° above the horizontal. Calculate the time of flight and horizontal range (g = 9.8 m s⁻²).",
        "marks": 5,
        "markScheme": [
          "Vertical: 0 = (20 sin 35°)t − 4.9t² ⇒ t = (20 sin 35°)/4.9 = 2.34 s (3 s.f.) (3 marks).",
          "Horizontal range R = (20 cos 35°)(2.341) = 38.4 m (3 s.f.) (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "A uniform ladder of length 4 m and mass 12 kg rests at 60° to rough horizontal ground against a smooth vertical wall in limiting equilibrium. Find the coefficient of friction μ.",
        "marks": 6,
        "markScheme": [
          "Vertical equilibrium: R_ground = 12g; Horizontal: F_ground = S_wall (2 marks).",
          "Moments about base of ladder: 12g(2 cos 60°) = S_wall(4 sin 60°) ⇒ S_wall = 2√3 g (2 marks).",
          "Limiting equilibrium: μ = F_ground / R_ground = (2√3 g)/(12g) = √3 / 6 ≈ 0.289 (2 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Edexcel 9MA0 / CIE 9709 Paper 1: Pure Mathematics 1",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "9MA0/01-23",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Official A-Level Mathematical Formulae Booklet.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Express 2x² − 12x + 23 in the form a(x + p)² + q and hence state the minimum value of 2x² − 12x + 23.",
        "marks": 4,
        "markScheme": [
          "2(x² − 6x) + 23 = 2[(x − 3)² − 9] + 23 = 2(x − 3)² + 5 (3 marks).",
          "Minimum value is 5 (occurring at x = 3) (1 mark)."
        ]
      },
      {
        "number": "2",
        "question": "Show that (x − 3) is a factor of f(x) = x³ − 2x² − 5x + 6 and factorise f(x) completely.",
        "marks": 4,
        "markScheme": [
          "f(3) = 27 − 18 − 15 + 6 = 0, so (x − 3) is a factor (2 marks).",
          "f(x) = (x − 3)(x² + x − 2) = (x − 3)(x + 2)(x − 1) (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Find the equation of the normal to the curve y = x³ − 4x + 5 at the point where x = 2.",
        "marks": 5,
        "markScheme": [
          "At x = 2, y = 8 − 8 + 5 = 5; dy/dx = 3x² − 4 = 3(4) − 4 = 8 (2 marks).",
          "Gradient of normal = −1/8 (1 mark).",
          "y − 5 = −(1/8)(x − 2) ⇒ x + 8y − 42 = 0 (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Solve the equation 2 cos²θ − sin θ − 1 = 0 for 0 ≤ θ ≤ 2π, giving exact answers in terms of π.",
        "marks": 5,
        "markScheme": [
          "Substitute cos²θ = 1 − sin²θ ⇒ 2(1 − sin²θ) − sin θ − 1 = 0 ⇒ 2sin²θ + sin θ − 1 = 0 (2 marks).",
          "(2 sin θ − 1)(sin θ + 1) = 0 ⇒ sin θ = 1/2 or sin θ = −1 (1 mark).",
          "θ = π/6, 5π/6, 3π/2 (2 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Edexcel 9MA0 / CIE 9709 Paper 2: Pure Mathematics 2",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "9MA0/02-23",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Official A-Level Mathematical Formulae Booklet.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Express 5 cos θ − 12 sin θ in the form R cos(θ + α) where R > 0 and 0 < α < π/2, and hence solve 5 cos θ − 12 sin θ = 6.5 for 0 ≤ θ ≤ 2π.",
        "marks": 6,
        "markScheme": [
          "R = √(5² + 12²) = 13; tan α = 12/5 ⇒ α = 1.176 rad (3 marks).",
          "cos(θ + 1.176) = 0.5 ⇒ θ + 1.176 = π/3 or 5π/3 (+ 2π) ⇒ θ = 4.06 rad or 5.15 rad (3 marks)."
        ]
      },
      {
        "number": "2",
        "question": "Find dy/dx for the implicit curve x² + 3xy − 2y² = 10 at the point (2, 1).",
        "marks": 5,
        "markScheme": [
          "Differentiate w.r.t. x: 2x + 3y + 3x(dy/dx) − 4y(dy/dx) = 0 (3 marks).",
          "Substitute (2, 1): 4 + 3 + (6 − 4)(dy/dx) = 0 ⇒ dy/dx = −7/2 (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Decompose (7x + 2) / ((x − 1)(x + 2)) into partial fractions and hence evaluate ∫(2 to 4) (7x + 2) / ((x − 1)(x + 2)) dx in the form ln k.",
        "marks": 6,
        "markScheme": [
          "7x + 2 ≡ A(x + 2) + B(x − 1) ⇒ x = 1 gives A = 3; x = −2 gives B = 4 (3 marks).",
          "[3 ln|x − 1| + 4 ln|x + 2|]₂⁴ = (3 ln 3 + 4 ln 6) − (3 ln 1 + 4 ln 4) = ln(27 × 1296 / 256) = ln(2187/16) (3 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Given 3D points A(1, −2, 3), B(4, 0, −3), and C(10, 4, −15), prove using vectors that A, B, and C are collinear.",
        "marks": 4,
        "markScheme": [
          "AB = (3, 2, −6)ᵀ and BC = (6, 4, −12)ᵀ (2 marks).",
          "BC = 2 AB so AB and BC are parallel; since they share the common point B, A, B, and C are collinear (2 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2023-p3",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Edexcel 9MA0 Paper 3: Statistics & Mechanics (9MA0/03-23)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "9MA0/03-23",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Binomial, Normal & PMCC Critical Values Tables.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Historically 30% of bolts from a machine are Grade B. In a random sample of 20 bolts after recalibration, 2 are Grade B. Test at the 5% level whether the proportion has decreased.",
        "marks": 5,
        "markScheme": [
          "H₀: p = 0.30, H₁: p < 0.30 (one-tailed, α = 0.05); X ~ B(20, 0.30) under H₀ (2 marks).",
          "P(X ≤ 2) = 0.0355 < 0.05 ⇒ Reject H₀ (2 marks).",
          "Sufficient evidence at the 5% level that the proportion of Grade B bolts has decreased (1 mark)."
        ]
      },
      {
        "number": "2",
        "question": "A random sample of 15 cities shows a PMCC of r = −0.58 between altitude and mean January temperature. Test at the 5% level for negative correlation (critical value for n=15, one-tailed 5% is −0.4409).",
        "marks": 4,
        "markScheme": [
          "H₀: ρ = 0, H₁: ρ < 0 (one-tailed, α = 0.05) (2 marks).",
          "Since −0.58 < −0.4409, reject H₀: significant evidence of a negative correlation between altitude and temperature (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "A particle moves in a plane with acceleration a(t) = (6t i − 4 j) m s⁻². At t = 0, v = (2i + 5j) m s⁻¹. Find the speed of the particle when it moves parallel to the i-axis.",
        "marks": 5,
        "markScheme": [
          "Integrate: v(t) = (3t² + 2)i + (5 − 4t)j (2 marks).",
          "Parallel to i when j-component = 0 ⇒ 5 − 4t = 0 ⇒ t = 1.25 s (2 marks).",
          "Speed = 3(1.25)² + 2 = 6.6875 m s⁻¹ (1 mark)."
        ]
      },
      {
        "number": "4",
        "question": "Masses 3 kg and 5 kg hang vertically on either side of a smooth fixed pulley connected by a light inextensible string. Find their acceleration and the force exerted on the pulley by the string.",
        "marks": 5,
        "markScheme": [
          "5g − T = 5a and T − 3g = 3a ⇒ 2g = 8a ⇒ a = g/4 = 2.45 m s⁻² (3 marks).",
          "T = 3(9.8 + 2.45) = 36.75 N ⇒ Force on pulley = 2T = 73.5 N downwards (2 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Edexcel 9MA0 Paper 1: Pure Mathematics 1 (9MA0/01-22)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "9MA0/01-22",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Official A-Level Mathematical Formulae Booklet.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Find the set of values of k for which the equation kx² + 4x + (k − 3) = 0 has two distinct real roots.",
        "marks": 4,
        "markScheme": [
          "b² − 4ac > 0 ⇒ 16 − 4k(k − 3) > 0 ⇒ 4k² − 12k − 16 < 0 (2 marks).",
          "(k − 4)(k + 1) < 0 ⇒ −1 < k < 4 (with k ≠ 0 for quadratic) (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "A circular sector of radius 8 cm has perimeter 26 cm. Calculate the area of the minor segment enclosed by the chord and the arc.",
        "marks": 5,
        "markScheme": [
          "Arc length l = 26 − 2(8) = 10 cm ⇒ θ = l/r = 10/8 = 1.25 rad (2 marks).",
          "A_segment = ½ r²(θ − sin θ) = 32(1.25 − sin 1.25) = 9.63 cm² (3 s.f.) (3 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Prove from first principles that the derivative of f(x) = x³ is 3x².",
        "marks": 4,
        "markScheme": [
          "f′(x) = lim(h→0) [(x + h)³ − x³] / h = lim(h→0) [3x²h + 3xh² + h³] / h (2 marks).",
          "= lim(h→0) (3x² + 3xh + h²) = 3x² as h → 0 (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "The value V (£) of an electric car after t years is modelled by V = 24000 e^(−0.18t) + 1500. Find its initial value, its long-term scrap value, and the rate of depreciation at t = 4.",
        "marks": 5,
        "markScheme": [
          "At t = 0, V = 24000 + 1500 = £25,500; as t → ∞, V → £1,500 (2 marks).",
          "dV/dt = −4320 e^(−0.18t); at t = 4, rate of depreciation = 4320 e^(−0.72) = £2,103 per year (3 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Edexcel 9MA0 Paper 2: Pure Mathematics 2 & Applied (9MA0/02-22)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "9MA0/02-22",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Includes Official A-Level Mathematical Formulae & Statistical Tables.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Solve the equation 2^(2x) − 10(2^x) + 16 = 0.",
        "marks": 4,
        "markScheme": [
          "Let y = 2^x ⇒ y² − 10y + 16 = 0 ⇒ (y − 2)(y − 8) = 0 (2 marks).",
          "2^x = 2 ⇒ x = 1; 2^x = 8 ⇒ x = 3 (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "A curve is defined parametrically by x = 2 cos t, y = 3 sin 2t for 0 ≤ t < π. Find dy/dx at t = π/6.",
        "marks": 4,
        "markScheme": [
          "dx/dt = −2 sin t; dy/dt = 6 cos 2t ⇒ dy/dx = (6 cos 2t)/(−2 sin t) (2 marks).",
          "At t = π/6: dy/dx = (6 × 1/2)/(−2 × 1/2) = −3 (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Use the Normal approximation to the Binomial distribution with continuity correction to estimate P(X ≥ 105) when X ~ B(200, 0.48).",
        "marks": 5,
        "markScheme": [
          "μ = np = 96, σ² = np(1 − p) = 49.92 (σ = 7.065) (2 marks).",
          "Continuity correction: P(X ≥ 105) ≈ P(Y > 104.5) (1 mark).",
          "z = (104.5 − 96)/7.065 = 1.203 ⇒ P(Z > 1.203) = 0.1145 (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "A stone is thrown vertically upwards at 14 m s⁻¹ from the edge of a cliff 20 m above the sea. Calculate the speed with which it hits the sea (g = 9.8 m s⁻²).",
        "marks": 4,
        "markScheme": [
          "Take upwards as positive: u = 14, a = −9.8, s = −20 (1 mark).",
          "v² = u² + 2as = 196 + 2(−9.8)(−20) = 196 + 392 = 588 ⇒ speed = √588 = 24.2 m s⁻¹ (3 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2019-p1",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy Edexcel Core Mathematics C3/C4 Archive Paper 1",
    "tier": "A-Level",
    "series": "June 2019 (Legacy Spec)",
    "paperCode": "6665/01-19",
    "durationMinutes": 90,
    "totalMarks": 75,
    "insertNote": "Legacy Modular Core Mathematics C3/C4 Reference Paper.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "Simplify (5 + √3) / (2 − √3) into the form a + b√3, showing every step of your working.",
        "marks": 3,
        "markScheme": [
          "Multiply top and bottom by conjugate (2 + √3) (1 mark).",
          "Numerator = 10 + 5√3 + 2√3 + 3 = 13 + 7√3; Denominator = 4 − 3 = 1 ⇒ 13 + 7√3 (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "Differentiate y = sin x / (x + 1) with respect to x using the Quotient Rule.",
        "marks": 3,
        "markScheme": [
          "u = sin x (u′ = cos x), v = x + 1 (v′ = 1) (1 mark).",
          "dy/dx = [(x + 1)cos x − sin x] / (x + 1)² (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "Find the exact value of ∫(0 to π/4) cos²x dx.",
        "marks": 4,
        "markScheme": [
          "Rewrite cos²x = ½(1 + cos 2x) (2 marks).",
          "[½x + ¼ sin 2x]₀^(π/4) = π/8 + 1/4 (2 marks)."
        ]
      },
      {
        "number": "4",
        "question": "Solve sec²x = 3 + tan x for 0° ≤ x < 360°, giving answers to 1 decimal place where appropriate.",
        "marks": 5,
        "markScheme": [
          "Replace sec²x with 1 + tan²x ⇒ tan²x − tan x − 2 = 0 ⇒ (tan x − 2)(tan x + 1) = 0 (2 marks).",
          "tan x = 2 ⇒ x = 63.4°, 243.4°; tan x = −1 ⇒ x = 135°, 315° (3 marks)."
        ]
      }
    ]
  },
  {
    "id": "al-maths-pp-2019-p2",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy Edexcel Applied Mathematics M1/S1 Archive Paper 2",
    "tier": "A-Level",
    "series": "June 2019 (Legacy Spec)",
    "paperCode": "6677/01-19",
    "durationMinutes": 90,
    "totalMarks": 75,
    "insertNote": "Legacy Modular Mechanics & Statistics Reference Paper.",
    "sampleQuestions": [
      {
        "number": "1",
        "question": "If X ~ B(12, 0.3), calculate P(X = 4) and P(X ≥ 5) to 4 decimal places.",
        "marks": 4,
        "markScheme": [
          "P(X = 4) = ¹²C₄ (0.3)⁴ (0.7)⁸ = 495 × 0.0081 × 0.057648 = 0.2311 (2 marks).",
          "P(X ≥ 5) = 1 − P(X ≤ 4) = 1 − 0.7237 = 0.2763 (2 marks)."
        ]
      },
      {
        "number": "2",
        "question": "Heights of seedlings follow H ~ N(170, 8²). Find P(162 < H < 182).",
        "marks": 4,
        "markScheme": [
          "Standardise: z₁ = (162 − 170)/8 = −1.0; z₂ = (182 − 170)/8 = 1.5 (2 marks).",
          "P(−1.0 < Z < 1.5) = 0.9332 − 0.1587 = 0.7745 (2 marks)."
        ]
      },
      {
        "number": "3",
        "question": "A 5 kg block slides down a rough plane inclined at 30° to the horizontal with coefficient of friction μ = 0.25. Find the acceleration of the block.",
        "marks": 5,
        "markScheme": [
          "R = 5g cos 30° = 42.44 N ⇒ Friction F = 0.25(42.44) = 10.61 N (2 marks).",
          "5g sin 30° − 10.61 = 5a ⇒ 24.5 − 10.61 = 5a ⇒ a = 2.78 m s⁻² (3 marks)."
        ]
      },
      {
        "number": "4",
        "question": "A ball is projected at 25 m s⁻¹ at 30° above the horizontal. Find its speed and direction of motion 2 seconds after projection.",
        "marks": 5,
        "markScheme": [
          "v_x = 25 cos 30° = 21.65 m s⁻¹; v_y = 25 sin 30° − 9.8(2) = −7.1 m s⁻¹ (2 marks).",
          "Speed = √(21.65² + (−7.1)²) = 22.8 m s⁻¹ at arctan(7.1/21.65) = 18.2° below the horizontal (3 marks)."
        ]
      }
    ]
  }
];

export const ALEVEL_MATHS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "al-maths-kt-1",
    "term": "Discriminant",
    "definition": "b² − 4ac for ax² + bx + c = 0, classifying two distinct (> 0), repeated (= 0), or no real roots (< 0).",
    "topicNumber": 1,
    "subtopicId": "al-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "al-maths-kt-2",
    "term": "Factor Theorem",
    "definition": "(ax − b) is a factor of polynomial f(x) if and only if f(b/a) = 0.",
    "topicNumber": 1,
    "subtopicId": "al-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-maths-kt-3",
    "term": "Range of validity",
    "definition": "Interval |bx/a| < 1 for which an infinite rational binomial expansion converges.",
    "topicNumber": 2,
    "subtopicId": "al-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "al-maths-kt-4",
    "term": "Sum to infinity",
    "definition": "Finite limit S_∞ = a / (1 − r) of a geometric series when |r| < 1.",
    "topicNumber": 2,
    "subtopicId": "al-maths-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-maths-kt-5",
    "term": "Radian",
    "definition": "Angle subtended by an arc equal in length to the circle’s radius (π rad = 180°).",
    "topicNumber": 3,
    "subtopicId": "al-maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "al-maths-kt-6",
    "term": "Harmonic form (R-formula)",
    "definition": "Expressing a cos θ ± b sin θ as R cos(θ ∓ α) with amplitude R = √(a² + b²).",
    "topicNumber": 3,
    "subtopicId": "al-maths-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-maths-kt-7",
    "term": "Point of inflection",
    "definition": "Curve point where f″(x) = 0 and concavity changes sign between convex and concave.",
    "topicNumber": 4,
    "subtopicId": "al-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "al-maths-kt-8",
    "term": "Integration by parts",
    "definition": "∫ u(dv/dx)dx = uv − ∫ v(du/dx)dx, choosing u by LATE priority.",
    "topicNumber": 4,
    "subtopicId": "al-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-maths-kt-9",
    "term": "Collinear points",
    "definition": "Points lying on one straight line, proven by parallel displacement vectors sharing a common point.",
    "topicNumber": 4,
    "subtopicId": "al-maths-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "al-maths-kt-10",
    "term": "Continuity correction",
    "definition": "Shifting discrete integer limits by ±0.5 when approximating a Binomial distribution with a Normal curve.",
    "topicNumber": 5,
    "subtopicId": "al-maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-maths-kt-11",
    "term": "Critical region",
    "definition": "Set of sample test-statistic values leading to rejection of H₀ at significance level α.",
    "topicNumber": 5,
    "subtopicId": "al-maths-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "al-maths-kt-12",
    "term": "Limiting equilibrium",
    "definition": "Static state on the exact verge of slipping where friction reaches its maximum value F = μR.",
    "topicNumber": 6,
    "subtopicId": "al-maths-6-2",
    "subtopicCode": "6.2"
  }
];
