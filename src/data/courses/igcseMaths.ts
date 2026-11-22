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
    "number": 1,
    "title": "Number",
    "subtopics": [
      {
        "id": "igcse-maths-1-1",
        "code": "1.1",
        "slug": "1.1-fractions-percentages-compound-reverse",
        "title": "Fractions, Percentages, Compound Interest & Reverse Percentages",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-1-2",
        "code": "1.2",
        "slug": "1.2-indices-surds-standard-form-bounds",
        "title": "Indices, Surds, Standard Form & Upper/Lower Bounds",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-1-3",
        "code": "1.3",
        "slug": "1.3-ratio-direct-inverse-proportion",
        "title": "Ratio, Direct Proportion & Inverse Proportion",
        "readingMinutes": 9,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Algebra & Graphs",
    "subtopics": [
      {
        "id": "igcse-maths-2-1",
        "code": "2.1",
        "slug": "2.1-quadratics-factorising-formula-completing-square",
        "title": "Expanding, Factorising & Solving Quadratic Equations",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-2-2",
        "code": "2.2",
        "slug": "2.2-simultaneous-equations-inequalities",
        "title": "Simultaneous Equations (Linear & Quadratic) & Inequalities",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-2-3",
        "code": "2.3",
        "slug": "2.3-sequences-functions-differentiation",
        "title": "Sequences, Functions (Composite/Inverse) & Differentiation",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Coordinate Geometry",
    "subtopics": [
      {
        "id": "igcse-maths-3-1",
        "code": "3.1",
        "slug": "3.1-straight-line-graphs-midpoint-perpendicular",
        "title": "Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Geometry & Circle Theorems",
    "subtopics": [
      {
        "id": "igcse-maths-4-1",
        "code": "4.1",
        "slug": "4.1-angles-polygons-bearings-similarity",
        "title": "Angles, Polygons, Bearings, Similarity & Congruence",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-4-2",
        "code": "4.2",
        "slug": "4.2-circle-theorems-alternate-segment",
        "title": "Circle Theorems & Alternate Segment Theorem",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Mensuration",
    "subtopics": [
      {
        "id": "igcse-maths-5-1",
        "code": "5.1",
        "slug": "5.1-area-sectors-volume-surface-area",
        "title": "Area, Arc Length, Sector Area, Surface Area & Volume",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Trigonometry",
    "subtopics": [
      {
        "id": "igcse-maths-6-1",
        "code": "6.1",
        "slug": "6.1-pythagoras-sohcahtoa-3d-trig",
        "title": "Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-6-2",
        "code": "6.2",
        "slug": "6.2-sine-rule-cosine-rule-triangle-area",
        "title": "Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 7,
    "title": "Vectors & Transformations",
    "subtopics": [
      {
        "id": "igcse-maths-7-1",
        "code": "7.1",
        "slug": "7.1-vectors-transformations",
        "title": "Column Vectors, Vector Geometry & Transformations",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 8,
    "title": "Probability & Statistics",
    "subtopics": [
      {
        "id": "igcse-maths-8-1",
        "code": "8.1",
        "slug": "8.1-probability-trees-venn-conditional",
        "title": "Probability Trees, Venn Diagrams & Conditional Probability",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-maths-8-2",
        "code": "8.2",
        "slug": "8.2-averages-cumulative-frequency-histograms",
        "title": "Averages, Cumulative Frequency, Box Plots & Histograms",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  }
];

export const IGCSE_MATHS_NOTES: Record<string, NoteLesson> = {
  "igcse-maths-1-1": {
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "Fractions, Percentages, Compound Interest & Reverse Percentages",
    "readingMinutes": 10,
    "videoTitle": "GCSE Maths - Percentage Increase and Decrease (Multiplier Method)",
    "youtubeId": "MTxNPBupKMo",
    "videoChannel": "Cognito",
    "videoDuration": "7:20",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Fractions, Recurring Decimals & Percentage Change",
        "cardId": "igcse-maths-1-1-c1"
      },
      {
        "time": "2:45",
        "seconds": 165,
        "label": "Multipliers & Compound Interest",
        "cardId": "igcse-maths-1-1-c2"
      },
      {
        "time": "5:10",
        "seconds": 310,
        "label": "Reverse Percentages",
        "cardId": "igcse-maths-1-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-1-1-c1",
        "title": "Fractions, Recurring Decimals & Percentage Change",
        "summary": "Convert mixed numbers to improper fractions, recurring decimals algebraically, and divide change by the original value.",
        "bullets": [
          "**Improper fractions first** - always turn mixed numbers into improper fractions before multiplying or dividing, and use **Keep-Change-Flip** when dividing by a fraction."
        ],
        "subsections": [
          {
            "heading": "Recurring Decimals & Percentage Change",
            "bullets": [
              "**Recurring decimal to fraction** - let x equal the recurring decimal, multiply by a power of 10 so the repeating digits line up, then subtract to cancel the tail.",
              "**Percentage change** - ((New value − Original value) ÷ Original value) × 100%."
            ],
            "exampleHeading": "Worked example: Convert 0.363636... to a fraction",
            "examples": [
              "Let x = 0.363636..., so 100x = 36.363636...",
              "Subtract: 99x = 36, therefore x = 36/99 = 4/11."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "improper fraction",
            "definition": "A fraction whose numerator is greater than or equal to its denominator."
          },
          {
            "term": "recurring decimal",
            "definition": "A decimal in which one or more digits repeat infinitely after the decimal point."
          }
        ],
        "memoryAid": "Percentage change always divides by the ORIGINAL (Old) value: Change ÷ Original × 100."
      },
      {
        "id": "igcse-maths-1-1-c2",
        "title": "Decimal Multipliers & Compound Interest",
        "summary": "Use a single multiplier raised to the power n for repeated percentage growth or decay.",
        "bullets": [
          "**Decimal multiplier** - for an r% increase multiply by (1 + r/100); for an r% decrease multiply by (1 − r/100)."
        ],
        "subsections": [
          {
            "heading": "Compound Interest vs Simple Interest",
            "bullets": [
              "**Compound interest formula** - Final amount A = P × (1 + r/100)ⁿ, where P is principal, r% is rate per period, and n is the number of periods.",
              "**Depreciation** - uses a decay multiplier: A = P × (1 − r/100)ⁿ.",
              "**Simple interest** - I = (P × r × t) / 100, adding the exact same fixed interest each year."
            ],
            "exampleHeading": "Worked example: Compound growth over 3 years",
            "examples": [
              "£2,000 is invested at 4% per year compound interest for 3 years.",
              "Multiplier = 1.04 → A = 2000 × 1.04³ = £2,249.73."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "compound interest",
            "definition": "Interest calculated on both the initial principal and the accumulated interest from previous periods."
          }
        ]
      },
      {
        "id": "igcse-maths-1-1-c3",
        "title": "Reverse Percentages",
        "summary": "Divide the final value by the percentage multiplier to recover the original 100% amount.",
        "bullets": [
          "**Recovering the original value** - when told the price AFTER an increase or decrease, write Final = Original × Multiplier, then divide by the multiplier."
        ],
        "subsections": [
          {
            "heading": "Step-by-Step Reverse Method",
            "bullets": [
              "**After a 20% discount** - the sale price represents 80% (multiplier 0.80), so Original = Sale price ÷ 0.80.",
              "**After a 15% rise** - the new value represents 115% (multiplier 1.15), so Original = New value ÷ 1.15."
            ],
            "exampleHeading": "Worked example: Finding the pre-sale price",
            "examples": [
              "A jacket costs £64 in a 20% off sale, so £64 = 80% of the original price.",
              "Original price = 64 ÷ 0.80 = £80."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "reverse percentage",
            "definition": "Working backwards from a post-change value by dividing by its decimal multiplier to find the original 100% value."
          }
        ],
        "commonMistake": "Do NOT add 20% of the sale price (£64 × 1.20 = £76.80) — the 20% discount was taken off the larger original price, not £64!"
      }
    ],
    "checklistPoints": [
      "Convert recurring decimals like 0.3636... into exact simplified fractions",
      "Apply A = P × (1 ± r/100)ⁿ for compound interest and depreciation",
      "Divide by the decimal multiplier to solve reverse percentage problems"
    ],
    "keyTerms": [
      {
        "term": "Improper fraction",
        "definition": "A fraction whose numerator is greater than or equal to its denominator."
      },
      {
        "term": "Recurring decimal",
        "definition": "A decimal in which one or more digits repeat infinitely after the decimal point."
      },
      {
        "term": "Compound interest",
        "definition": "Interest calculated on both the initial principal and the accumulated interest from previous periods."
      },
      {
        "term": "Reverse percentage",
        "definition": "Working backwards from a post-change value by dividing by its decimal multiplier to find the original 100% value."
      }
    ]
  },
  "igcse-maths-1-2": {
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2",
    "subtopicTitle": "Indices, Surds, Standard Form & Upper/Lower Bounds",
    "readingMinutes": 11,
    "videoTitle": "GCSE Maths - What on Earth are Surds? And How do You Simplify Them? (Part 1/3)",
    "youtubeId": "wzAotwNPhm8",
    "videoChannel": "Cognito",
    "videoDuration": "5:37",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Index Laws (Negative & Fractional)",
        "cardId": "igcse-maths-1-2-c1"
      },
      {
        "time": "1:55",
        "seconds": 115,
        "label": "Simplifying Surds & Rationalising Denominators",
        "cardId": "igcse-maths-1-2-c2"
      },
      {
        "time": "3:50",
        "seconds": 230,
        "label": "Standard Form & Upper/Lower Bounds",
        "cardId": "igcse-maths-1-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-1-2-c1",
        "title": "Laws of Indices (Zero, Negative & Fractional)",
        "summary": "Manipulate powers fluently, including reciprocals for negative powers and roots for fractional powers.",
        "bullets": [
          "**Core rules** - aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, and a⁰ = 1 (for a ≠ 0)."
        ],
        "subsections": [
          {
            "heading": "Negative & Fractional Indices",
            "bullets": [
              "**Negative index** - a⁻ⁿ = 1 / aⁿ (take the reciprocal and make the power positive).",
              "**Fractional index** - a^(m/n) = (ⁿ√a)ᵐ — take the nth root first to keep numbers small, then raise to the power m."
            ],
            "exampleHeading": "Worked example: Evaluate 27^(-2/3)",
            "examples": [
              "Cube root first: ³√27 = 3.",
              "Square it: 3² = 9, then apply the negative power (reciprocal) → 1/9."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "reciprocal",
            "definition": "1 divided by a number (or a fraction flipped upside down), corresponding to raising to the power −1."
          }
        ],
        "memoryAid": "Flower power for fractional indices: the bottom number is the ROOT (underground) and the top number is the POWER."
      },
      {
        "id": "igcse-maths-1-2-c2",
        "title": "Surds & Rationalising the Denominator",
        "summary": "Simplify square roots using the largest square factor and clear surds from denominators.",
        "bullets": [
          "**Surd laws** - √(ab) = √a × √b and √(a/b) = √a / √b; only like surds (same number under the root) can be added or subtracted."
        ],
        "subsections": [
          {
            "heading": "Rationalising Single & Binomial Denominators",
            "bullets": [
              "**Single surd denominator** - multiply numerator and denominator by √b so √b × √b = b.",
              "**Binomial denominator (a + √b)** - multiply top and bottom by the conjugate (a − √b) to use the difference of two squares: (a + √b)(a − √b) = a² − b."
            ],
            "exampleHeading": "Worked example: Simplify √72 and rationalise 6 / (√3 − 1)",
            "examples": [
              "√72 = √(36 × 2) = 6√2.",
              "6 / (√3 − 1) × (√3 + 1)/(√3 + 1) = 6(√3 + 1) / (3 − 1) = 3√3 + 3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "surd",
            "definition": "An irrational root (such as √2 or √5) left in root form to keep an exact value."
          },
          {
            "term": "rationalise",
            "definition": "Eliminating a surd from the denominator of a fraction by multiplying top and bottom by an appropriate factor or conjugate."
          }
        ]
      },
      {
        "id": "igcse-maths-1-2-c3",
        "title": "Standard Form & Upper/Lower Bounds",
        "summary": "Express very large or small numbers as A × 10ⁿ and find maximum/minimum error intervals.",
        "bullets": [
          "**Standard form** - written as A × 10ⁿ where 1 ≤ A < 10 and n is an integer."
        ],
        "subsections": [
          {
            "heading": "Calculating Bounds in Expressions",
            "bullets": [
              "**Finding bounds** - half the rounding unit added/subtracted gives Upper Bound (UB) and Lower Bound (LB). E.g. 6.4 cm to 1 d.p. has LB = 6.35 cm, UB = 6.45 cm.",
              "**Bounds of division (a ÷ b)** - maximum = UB(a) ÷ LB(b); minimum = LB(a) ÷ UB(b).",
              "**Bounds of subtraction (a − b)** - maximum = UB(a) − LB(b); minimum = LB(a) − UB(b)."
            ],
            "exampleHeading": "Worked example: Upper bound of speed = distance ÷ time",
            "examples": [
              "Distance = 120 m (nearest 10 m → UB = 125 m); Time = 15 s (nearest second → LB = 14.5 s).",
              "Maximum speed = 125 ÷ 14.5 = 8.62 m/s (3 s.f.)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "upper bound",
            "definition": "The smallest value that would round up to the next unit; the top end of an error interval."
          }
        ],
        "commonMistake": "When finding the upper bound of a ÷ b or a − b, do NOT use UB ÷ UB or UB − UB — dividing or subtracting the LOWER bound of b makes the answer largest!"
      }
    ],
    "checklistPoints": [
      "Evaluate negative and fractional indices without a calculator",
      "Simplify surds and rationalise both single-term and binomial denominators",
      "Compute upper and lower bounds for quotients and differences"
    ],
    "keyTerms": [
      {
        "term": "Reciprocal",
        "definition": "1 divided by a number (or a fraction flipped upside down), corresponding to raising to the power −1."
      },
      {
        "term": "Surd",
        "definition": "An irrational root (such as √2 or √5) left in root form to keep an exact value."
      },
      {
        "term": "Rationalise",
        "definition": "Eliminating a surd from the denominator of a fraction by multiplying top and bottom by an appropriate factor or conjugate."
      },
      {
        "term": "Upper bound",
        "definition": "The smallest value that would round up to the next unit; the top end of an error interval."
      },
      {
        "term": "Upper & Lower Bounds",
        "definition": "The maximum and minimum values a rounded measurement could take (± half the rounding unit)."
      }
    ]
  },
  "igcse-maths-1-3": {
    "subtopicId": "igcse-maths-1-3",
    "subtopicCode": "1.3",
    "subtopicTitle": "Ratio, Direct Proportion & Inverse Proportion",
    "readingMinutes": 9,
    "videoTitle": "GCSE Maths - What Does Inversely Proportional Mean?",
    "youtubeId": "OCZSFmHnNI4",
    "videoChannel": "Cognito",
    "videoDuration": "4:34",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Sharing & Combining Ratios",
        "cardId": "igcse-maths-1-3-c1"
      },
      {
        "time": "1:30",
        "seconds": 90,
        "label": "Direct Proportion Equations (y = kxⁿ)",
        "cardId": "igcse-maths-1-3-c2"
      },
      {
        "time": "3:00",
        "seconds": 180,
        "label": "Inverse Proportion Equations (y = k / xⁿ)",
        "cardId": "igcse-maths-1-3-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-1-3-c1",
        "title": "Ratios, Sharing & Combining Two Ratios",
        "summary": "Find the value of 1 part using totals or differences, and link overlapping ratios with a common multiple.",
        "bullets": [
          "**Sharing in a ratio** - add the ratio parts, divide the total by the sum of parts to find 1 part, then multiply."
        ],
        "subsections": [
          {
            "heading": "Difference Problems & Linking Ratios",
            "bullets": [
              "**Difference given** - if A:B = 3:7 and B receives £24 more than A, then (7 − 3) = 4 parts = £24, so 1 part = £6.",
              "**Combining A:B and B:C** - scale both ratios so the shared term B equals the LCM of its two values."
            ],
            "exampleHeading": "Worked example: Combine A:B = 2:3 and B:C = 4:5",
            "examples": [
              "LCM of 3 and 4 is 12: multiply A:B by 4 → 8:12, multiply B:C by 3 → 12:15.",
              "Combined ratio A:B:C = 8 : 12 : 15."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "ratio",
            "definition": "A comparison of two or more quantities in the same units showing their relative sizes."
          }
        ]
      },
      {
        "id": "igcse-maths-1-3-c2",
        "title": "Direct Proportion (Linear, Square & Root)",
        "summary": "Write y = kxⁿ, substitute a known pair to find the constant k, then solve for the unknown.",
        "bullets": [
          "**Direct proportion** - if y ∝ x, then y = kx; if y ∝ x², then y = kx²; if y ∝ √x, then y = k√x."
        ],
        "subsections": [
          {
            "heading": "Three-Step Algebraic Method",
            "bullets": [
              "**Step 1** - translate the sentence into an equation containing k (the constant of proportionality).",
              "**Step 2** - substitute the given (x, y) pair to calculate k.",
              "**Step 3** - rewrite the completed formula and substitute the new value."
            ],
            "exampleHeading": "Worked example: y is directly proportional to x²",
            "examples": [
              "Given y = 45 when x = 3: 45 = k × 3² → 9k = 45 → k = 5, so y = 5x².",
              "When x = 4: y = 5 × 4² = 80."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "direct proportion",
            "definition": "A relationship y = kxⁿ where multiplying x multiplies y by the corresponding power of that factor, passing through the origin."
          },
          {
            "term": "constant of proportionality",
            "definition": "The fixed non-zero constant k linking two proportional variables."
          }
        ],
        "memoryAid": "Direct = MULTIPLY by k (y = kxⁿ); Inverse = DIVIDE by xⁿ (y = k / xⁿ)."
      },
      {
        "id": "igcse-maths-1-3-c3",
        "title": "Inverse Proportion & Graph Shapes",
        "summary": "In inverse proportion, as one variable increases the other decreases so their product remains constant.",
        "bullets": [
          "**Inverse proportion** - y ∝ 1/x means y = k/x (so xy = k); y ∝ 1/x² means y = k/x²."
        ],
        "subsections": [
          {
            "heading": "Graphs & Real-World Inverse Problems",
            "bullets": [
              "**Graph of y = k/x** - a smooth reciprocal curve in the first quadrant approaching both axes as asymptotes without ever touching them.",
              "**Workers & time** - if 6 workers take 10 days (60 worker-days), then 15 workers take 60 ÷ 15 = 4 days."
            ],
            "exampleHeading": "Worked example: y is inversely proportional to √x",
            "examples": [
              "Given y = 4 when x = 9: 4 = k / √9 = k / 3 → k = 12, so y = 12 / √x.",
              "When x = 16: y = 12 / √16 = 12 / 4 = 3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "inverse proportion",
            "definition": "A relationship y = k/xⁿ where increasing one quantity causes the other to decrease in the corresponding ratio."
          }
        ],
        "commonMistake": "Do NOT assume doubling x doubles y when y ∝ x² — doubling x multiplies y by 2² = 4!"
      }
    ],
    "checklistPoints": [
      "Link overlapping ratios like A:B and B:C using the lowest common multiple",
      "Set up and solve direct proportion equations including x² and √x",
      "Set up and solve inverse proportion equations and recognise reciprocal graphs"
    ],
    "keyTerms": [
      {
        "term": "Ratio",
        "definition": "A comparison of two or more quantities in the same units showing their relative sizes."
      },
      {
        "term": "Direct proportion",
        "definition": "A relationship y = kxⁿ where multiplying x multiplies y by the corresponding power of that factor, passing through the origin."
      },
      {
        "term": "Constant of proportionality",
        "definition": "The fixed non-zero constant k linking two proportional variables."
      },
      {
        "term": "Inverse proportion",
        "definition": "A relationship y = k/xⁿ where increasing one quantity causes the other to decrease in the corresponding ratio."
      }
    ]
  },
  "igcse-maths-2-1": {
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Expanding, Factorising & Solving Quadratic Equations",
    "readingMinutes": 11,
    "videoTitle": "GCSE Maths - Solving Quadratics Using the Quadratic Formula",
    "youtubeId": "maejPmUzqpM",
    "videoChannel": "Cognito",
    "videoDuration": "5:26",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Expanding & Factorising Quadratics",
        "cardId": "igcse-maths-2-1-c1"
      },
      {
        "time": "1:50",
        "seconds": 110,
        "label": "The Quadratic Formula & Discriminant",
        "cardId": "igcse-maths-2-1-c2"
      },
      {
        "time": "3:45",
        "seconds": 225,
        "label": "Completing the Square & Turning Points",
        "cardId": "igcse-maths-2-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-2-1-c1",
        "title": "Expanding Brackets & Factorising Quadratics",
        "summary": "Factorise x² + bx + c, ax² + bx + c, and the difference of two squares to solve ax² + bx + c = 0.",
        "bullets": [
          "**Difference of two squares** - a² − b² = (a + b)(a − b), e.g. 9x² − 16 = (3x + 4)(3x − 4)."
        ],
        "subsections": [
          {
            "heading": "Factorising When a > 1 (Splitting the Middle Term)",
            "bullets": [
              "**AC method** - for ax² + bx + c, find two numbers multiplying to a × c and adding to b, split bx, and factorise in pairs.",
              "**Zero-product rule** - rearrange to \"= 0\" first, then set each factor equal to 0."
            ],
            "exampleHeading": "Worked example: Solve 2x² + 5x − 3 = 0",
            "examples": [
              "Multiply a × c = 2 × (−3) = −6; numbers adding to +5 are +6 and −1.",
              "2x² + 6x − x − 3 = 2x(x + 3) − 1(x + 3) = (2x − 1)(x + 3) = 0 → x = 0.5 or x = −3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "quadratic equation",
            "definition": "A polynomial equation of degree 2 in the form ax² + bx + c = 0 where a ≠ 0."
          }
        ],
        "diagram": "quadratic-graph"
      },
      {
        "id": "igcse-maths-2-1-c2",
        "title": "The Quadratic Formula & Algebraic Fractions",
        "summary": "Use the quadratic formula whenever the question asks for decimal places or significant figures.",
        "bullets": [
          "**Quadratic formula** - for ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / (2a)."
        ],
        "subsections": [
          {
            "heading": "Discriminant & Clearing Denominators",
            "bullets": [
              "**Discriminant b² − 4ac** - > 0 gives 2 distinct real roots, = 0 gives 1 repeated root, < 0 gives no real roots.",
              "**Algebraic fractions** - multiply every term by the common denominator to produce a standard quadratic equal to 0."
            ],
            "exampleHeading": "Worked example: Solve 3x² − 5x − 1 = 0 to 2 d.p.",
            "examples": [
              "a = 3, b = −5, c = −1 → b² − 4ac = (−5)² − 4(3)(−1) = 25 + 12 = 37.",
              "x = (5 ± √37) / 6 → x = 1.85 or x = −0.18 (2 d.p.)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "discriminant",
            "definition": "The expression b² − 4ac inside the square root of the quadratic formula, which determines the number of real roots."
          }
        ],
        "commonMistake": "When b is negative (e.g. b = −5), write (−5)² = +25 with brackets on your calculator — typing −5² gives −25!"
      },
      {
        "id": "igcse-maths-2-1-c3",
        "title": "Completing the Square & Turning Points",
        "summary": "Rewrite x² + bx + c as (x + p)² + q to read off the minimum turning point directly.",
        "bullets": [
          "**Completing the square** - halve the coefficient of x to get p = b/2, then subtract p²: x² + bx + c = (x + b/2)² − (b/2)² + c."
        ],
        "subsections": [
          {
            "heading": "Reading the Turning Point (Vertex)",
            "bullets": [
              "**Vertex coordinates** - for y = (x + p)² + q, the minimum turning point is (−p, q) because (x + p)² ≥ 0 reaches its minimum 0 when x = −p.",
              "**Line of symmetry** - vertical line x = −p."
            ],
            "exampleHeading": "Worked example: Vertex of y = x² − 6x + 11",
            "examples": [
              "Half of −6 is −3: y = (x − 3)² − (−3)² + 11 = (x − 3)² + 2.",
              "Minimum turning point is (3, 2) and line of symmetry is x = 3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "turning point",
            "definition": "The vertex of a parabola where the gradient is zero and the curve changes from decreasing to increasing (or vice versa)."
          }
        ],
        "memoryAid": "Inside the bracket, FLIP the sign; outside the bracket, KEEP the sign: (x + p)² + q has vertex (−p, q)."
      }
    ],
    "checklistPoints": [
      "Factorise quadratics with a = 1, a > 1, and difference of two squares",
      "Apply the quadratic formula accurately with negative coefficients",
      "Complete the square to solve equations and identify the turning point (−p, q)"
    ],
    "keyTerms": [
      {
        "term": "Quadratic equation",
        "definition": "A polynomial equation of degree 2 in the form ax² + bx + c = 0 where a ≠ 0."
      },
      {
        "term": "Discriminant",
        "definition": "The expression b² − 4ac inside the square root of the quadratic formula, which determines the number of real roots."
      },
      {
        "term": "Turning point",
        "definition": "The vertex of a parabola where the gradient is zero and the curve changes from decreasing to increasing (or vice versa)."
      },
      {
        "term": "Completing the Square",
        "definition": "Rewriting x² + bx + c as (x + p)² + q to locate the turning point (−p, q) directly."
      }
    ]
  },
  "igcse-maths-2-2": {
    "subtopicId": "igcse-maths-2-2",
    "subtopicCode": "2.2",
    "subtopicTitle": "Simultaneous Equations (Linear & Quadratic) & Inequalities",
    "readingMinutes": 10,
    "videoTitle": "GCSE Maths - How to Solve Simultaneous Equations - Using the Elimination Technique",
    "youtubeId": "68hMhae269k",
    "videoChannel": "Cognito",
    "videoDuration": "8:21",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Linear Simultaneous Equations (Elimination)",
        "cardId": "igcse-maths-2-2-c1"
      },
      {
        "time": "3:15",
        "seconds": 195,
        "label": "Linear & Quadratic Simultaneous Equations",
        "cardId": "igcse-maths-2-2-c2"
      },
      {
        "time": "6:00",
        "seconds": 360,
        "label": "Linear & Quadratic Inequalities & Regions",
        "cardId": "igcse-maths-2-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-2-2-c1",
        "title": "Linear Simultaneous Equations",
        "summary": "Match coefficients to eliminate one variable, or substitute an isolated variable into the second equation.",
        "bullets": [
          "**Same Sign Subtract, Different Sign Add (SSS / DSA)** - once coefficients of x or y match in magnitude, subtract if signs match or add if signs differ."
        ],
        "subsections": [
          {
            "heading": "Elimination & Graphical Meaning",
            "bullets": [
              "**Elimination steps** - scale equations to match one coefficient, eliminate, solve, then substitute back to find the second unknown.",
              "**Graphical meaning** - the solution (x, y) is the exact point of intersection of the two straight lines."
            ],
            "exampleHeading": "Worked example: Solve 3x + 2y = 16 and 5x − 2y = 8",
            "examples": [
              "Signs on 2y are different (+2y and −2y), so ADD: 8x = 24 → x = 3.",
              "Substitute into 3(3) + 2y = 16 → 2y = 7 → y = 3.5."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "simultaneous equations",
            "definition": "A system of equations that must all be satisfied at the same time by the same values of the unknowns."
          }
        ],
        "memoryAid": "SSS (Same Sign Subtract) and DSA (Different Sign Add) eliminates variables cleanly without sign slips!"
      },
      {
        "id": "igcse-maths-2-2-c2",
        "title": "One Linear & One Quadratic Simultaneous Equation",
        "summary": "Always use substitution from the linear equation into the quadratic to obtain two (x, y) coordinate pairs.",
        "bullets": [
          "**Substitution method** - make y (or x) the subject of the linear equation and substitute it into the quadratic equation."
        ],
        "subsections": [
          {
            "heading": "Pairing Both Solutions Clearly",
            "bullets": [
              "**Rearrange to = 0** - expand carefully, collect like terms, and solve the resulting quadratic for two values.",
              "**Pair each x with its own y** - substitute each x back into the LINEAR equation so you clearly list two pairs (x₁, y₁) and (x₂, y₂)."
            ],
            "exampleHeading": "Worked example: Solve y = x + 1 and x² + y² = 13",
            "examples": [
              "Substitute y = x + 1: x² + (x + 1)² = 13 → 2x² + 2x − 12 = 0 → x² + x − 6 = 0.",
              "(x + 3)(x − 2) = 0 → x = −3 (y = −2) or x = 2 (y = 3)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "substitution",
            "definition": "Replacing one variable in an equation with an equivalent expression derived from another equation."
          }
        ]
      },
      {
        "id": "igcse-maths-2-2-c3",
        "title": "Linear & Quadratic Inequalities and Graphical Regions",
        "summary": "Flip the inequality sign when multiplying or dividing by a negative, and sketch parabolas for quadratic inequalities.",
        "bullets": [
          "**Negative rule** - multiplying or dividing both sides of an inequality by a negative number REVERSES the inequality sign."
        ],
        "subsections": [
          {
            "heading": "Quadratic Inequalities & Shaded Regions",
            "bullets": [
              "**Quadratic inequalities** - find the critical roots of ax² + bx + c = 0, sketch the U-shaped parabola: below the x-axis (< 0) gives one interval r₁ < x < r₂; above (> 0) gives two tails x < r₁ or x > r₂.",
              "**Graphical regions** - draw solid lines for ≤ or ≥, dashed lines for < or >, and test a point like (0, 0) to identify which side satisfies the inequality."
            ],
            "exampleHeading": "Worked example: Solve x² − 5x + 6 < 0",
            "examples": [
              "Critical values from (x − 2)(x − 3) = 0 are x = 2 and x = 3.",
              "The U-curve lies below the x-axis between the roots: 2 < x < 3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "inequality",
            "definition": "A mathematical statement comparing two expressions using <, >, ≤, or ≥ rather than equals."
          }
        ],
        "commonMistake": "For x² − 5x + 6 > 0, never write 2 > x > 3 — write two separate inequalities: x < 2 or x > 3."
      }
    ],
    "checklistPoints": [
      "Solve linear simultaneous equations by elimination and check in both equations",
      "Substitute a linear equation into a quadratic or circle equation to get two paired solutions",
      "Solve quadratic inequalities using a parabola sketch and shade graphical regions accurately"
    ],
    "keyTerms": [
      {
        "term": "Simultaneous equations",
        "definition": "A system of equations that must all be satisfied at the same time by the same values of the unknowns."
      },
      {
        "term": "Substitution",
        "definition": "Replacing one variable in an equation with an equivalent expression derived from another equation."
      },
      {
        "term": "Inequality",
        "definition": "A mathematical statement comparing two expressions using <, >, ≤, or ≥ rather than equals."
      },
      {
        "term": "Linear Simultaneous Equations",
        "definition": "Match coefficients to eliminate one variable, or substitute an isolated variable into the second equation."
      }
    ]
  },
  "igcse-maths-2-3": {
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3",
    "subtopicTitle": "Sequences, Functions (Composite/Inverse) & Differentiation",
    "readingMinutes": 11,
    "videoTitle": "Sequences & Series in 23 minutes - A-Level Pure Year 2",
    "youtubeId": "5G7VKXarees",
    "videoChannel": "Bicen Maths",
    "videoDuration": "23:02",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Linear, Quadratic & Geometric Sequences",
        "cardId": "igcse-maths-2-3-c1"
      },
      {
        "time": "7:40",
        "seconds": 460,
        "label": "Composite & Inverse Functions",
        "cardId": "igcse-maths-2-3-c2"
      },
      {
        "time": "15:20",
        "seconds": 920,
        "label": "Differentiation, Gradients & Stationary Points",
        "cardId": "igcse-maths-2-3-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-2-3-c1",
        "title": "Linear, Quadratic & Geometric Sequences",
        "summary": "Use first differences for linear nth terms, half the second difference for quadratic sequences, and arⁿ⁻¹ for geometric.",
        "bullets": [
          "**Linear nth term** - uₙ = dn + (a − d), where d is the constant first difference and a is the first term."
        ],
        "subsections": [
          {
            "heading": "Quadratic & Geometric nth Terms",
            "bullets": [
              "**Quadratic sequence** - constant second difference 2A gives the n² coefficient A = (second difference) ÷ 2; subtract An² from the sequence to find the remaining linear part Bn + C.",
              "**Geometric sequence** - multiplies by a constant ratio r each step: uₙ = a × rⁿ⁻¹."
            ],
            "exampleHeading": "Worked example: nth term of 5, 11, 21, 35, ...",
            "examples": [
              "First differences: 6, 10, 14; constant second difference = 4 → coefficient of n² is 4 ÷ 2 = 2.",
              "Subtract 2n² (2, 8, 18, 32): remainder is 3, 3, 3, 3 → uₙ = 2n² + 3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "second difference",
            "definition": "The difference between consecutive first differences of a sequence; constant for quadratic sequences."
          }
        ]
      },
      {
        "id": "igcse-maths-2-3-c2",
        "title": "Functions, Composite Functions & Inverse Functions",
        "summary": "Apply composite functions right-to-left (fg(x) = f(g(x))) and swap x and y to find f⁻¹(x).",
        "bullets": [
          "**Composite function fg(x)** - always apply the RIGHT-hand function g first, then substitute the result into f."
        ],
        "subsections": [
          {
            "heading": "Finding the Inverse Function f⁻¹(x)",
            "bullets": [
              "**Three steps for f⁻¹(x)** - write y = f(x), rearrange to make x the subject, then swap x and y to write f⁻¹(x).",
              "**Domain restriction** - exclude any x value causing division by zero or square root of a negative."
            ],
            "exampleHeading": "Worked example: Given f(x) = 3x − 2 and g(x) = x², find fg(4) and f⁻¹(x)",
            "examples": [
              "g(4) = 4² = 16, then f(16) = 3(16) − 2 = 46.",
              "y = 3x − 2 → x = (y + 2)/3 → f⁻¹(x) = (x + 2)/3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "composite function",
            "definition": "A function formed by applying one function to the output of another, written fg(x) = f(g(x))."
          },
          {
            "term": "inverse function",
            "definition": "The function f⁻¹(x) that reverses the mapping of f(x), so f⁻¹(f(x)) = x."
          }
        ],
        "commonMistake": "Do NOT evaluate fg(x) from left to right — fg(x) means f(g(x)), NOT f(x) × g(x) and NOT g(f(x))!"
      },
      {
        "id": "igcse-maths-2-3-c3",
        "title": "Differentiation & Stationary Points (Extended)",
        "summary": "Differentiate axⁿ to anxⁿ⁻¹, set dy/dx = 0 to find turning points, and use d²y/dx² to classify them.",
        "bullets": [
          "**Power rule** - if y = axⁿ then dy/dx = anxⁿ⁻¹; the derivative of a constant is 0."
        ],
        "subsections": [
          {
            "heading": "Gradients & Turning Points",
            "bullets": [
              "**Gradient at a point** - substitute the x-coordinate into dy/dx to get the gradient of the tangent.",
              "**Stationary (turning) points** - occur where dy/dx = 0; substitute x back into the original y to get the y-coordinate.",
              "**Classifying nature** - if d²y/dx² > 0 it is a local minimum; if d²y/dx² < 0 it is a local maximum."
            ],
            "exampleHeading": "Worked example: Find the turning point of y = x² − 8x + 5",
            "examples": [
              "dy/dx = 2x − 8 = 0 → x = 4; y = 4² − 8(4) + 5 = −11.",
              "d²y/dx² = 2 > 0, so (4, −11) is a minimum turning point."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "stationary point",
            "definition": "A point on a curve where the gradient dy/dx = 0 (a local maximum, local minimum, or point of inflection)."
          }
        ],
        "memoryAid": "Differentiate: multiply by the power, then drop the power by 1 (d/dx of axⁿ = anxⁿ⁻¹)."
      }
    ],
    "checklistPoints": [
      "Derive nth term rules for linear, quadratic, and geometric sequences",
      "Compute composite functions fg(x) right-to-left and invert functions f⁻¹(x)",
      "Differentiate polynomials to find tangent gradients and classify stationary points"
    ],
    "keyTerms": [
      {
        "term": "Second difference",
        "definition": "The difference between consecutive first differences of a sequence; constant for quadratic sequences."
      },
      {
        "term": "Composite function",
        "definition": "A function formed by applying one function to the output of another, written fg(x) = f(g(x))."
      },
      {
        "term": "Inverse function",
        "definition": "The function f⁻¹(x) that reverses the mapping of f(x), so f⁻¹(f(x)) = x."
      },
      {
        "term": "Stationary point",
        "definition": "A point on a curve where the gradient dy/dx = 0 (a local maximum, local minimum, or point of inflection)."
      }
    ]
  },
  "igcse-maths-3-1": {
    "subtopicId": "igcse-maths-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "Straight Line Graphs (y = mx + c), Midpoint, Length & Perpendiculars",
    "readingMinutes": 10,
    "videoTitle": "GCSE Maths - Perpendicular Lines",
    "youtubeId": "tXxIwT6ZSwQ",
    "videoChannel": "Cognito",
    "videoDuration": "5:20",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Gradient, Midpoint & Line Segment Length",
        "cardId": "igcse-maths-3-1-c1"
      },
      {
        "time": "1:50",
        "seconds": 110,
        "label": "Equations of Parallel & Perpendicular Lines",
        "cardId": "igcse-maths-3-1-c2"
      },
      {
        "time": "3:40",
        "seconds": 220,
        "label": "Perpendicular Bisectors",
        "cardId": "igcse-maths-3-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-3-1-c1",
        "title": "Gradient, Midpoint & Length Between Two Points",
        "summary": "Compute rise/run for gradient, average coordinates for midpoint, and apply Pythagoras for distance.",
        "bullets": [
          "**Gradient formula** - m = (y₂ − y₁) / (x₂ − x₁); positive slopes go up left-to-right, negative slopes go down."
        ],
        "subsections": [
          {
            "heading": "Midpoint & Distance Formulae",
            "bullets": [
              "**Midpoint** - M = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
              "**Length (distance)** - d = √((x₂ − x₁)² + (y₂ − y₁)²)."
            ],
            "exampleHeading": "Worked example: Segment from A(1, 2) to B(7, 10)",
            "examples": [
              "Gradient m = (10 − 2)/(7 − 1) = 8/6 = 4/3; Midpoint M = (4, 6).",
              "Length AB = √((7 − 1)² + (10 − 2)²) = √(36 + 64) = √100 = 10."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "gradient",
            "definition": "The steepness of a straight line, equal to the change in y divided by the change in x."
          }
        ]
      },
      {
        "id": "igcse-maths-3-1-c2",
        "title": "Equation of a Line, Parallel & Perpendicular Lines",
        "summary": "Parallel lines share the same gradient; perpendicular lines have gradients multiplying to −1.",
        "bullets": [
          "**Slope-intercept form** - y = mx + c, where m is the gradient and (0, c) is the y-intercept."
        ],
        "subsections": [
          {
            "heading": "Parallel vs Perpendicular Condition",
            "bullets": [
              "**Parallel lines** - m₁ = m₂ (rearrange ax + by = c into y = mx + c before reading m!).",
              "**Perpendicular lines** - m₁ × m₂ = −1, so m₂ = −1/m₁ (negative reciprocal: flip the fraction and reverse the sign)."
            ],
            "exampleHeading": "Worked example: Line perpendicular to y = 2x − 3 passing through (4, 1)",
            "examples": [
              "Given m₁ = 2, perpendicular gradient m₂ = −1/2.",
              "Substitute (4, 1) into y = −½x + c: 1 = −2 + c → c = 3 → y = −½x + 3."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "negative reciprocal",
            "definition": "−1 divided by a gradient m; the gradient of any line perpendicular to a line of gradient m."
          }
        ],
        "memoryAid": "Perpendicular gradient = Flip it and Flip the sign (e.g. 3/4 becomes −4/3)."
      },
      {
        "id": "igcse-maths-3-1-c3",
        "title": "Perpendicular Bisector of a Line Segment",
        "summary": "Combine midpoint and negative-reciprocal gradient in 3 steps to find the perpendicular bisector.",
        "bullets": [
          "**Perpendicular bisector** - the straight line cutting segment AB at 90° exactly through its midpoint M."
        ],
        "subsections": [
          {
            "heading": "Three-Step Recipe",
            "bullets": [
              "**Step 1** - find the midpoint M of AB.",
              "**Step 2** - find the gradient m_AB, then take its negative reciprocal m_⊥ = −1 / m_AB.",
              "**Step 3** - substitute M and m_⊥ into y = mx + c to find c."
            ],
            "exampleHeading": "Worked example: Perpendicular bisector of A(2, 1) and B(6, 9)",
            "examples": [
              "Midpoint M = (4, 5); m_AB = (9 − 1)/(6 − 2) = 2 → m_⊥ = −1/2.",
              "5 = −½(4) + c → c = 7 → y = −½x + 7."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "perpendicular bisector",
            "definition": "A line that divides a line segment into two equal halves at a right angle (90°)."
          }
        ],
        "commonMistake": "When finding a perpendicular bisector, substitute the MIDPOINT M into y = mx + c — NOT endpoint A or B!"
      }
    ],
    "checklistPoints": [
      "Calculate gradient, midpoint, and distance between any two coordinates",
      "Rearrange ax + by = c into y = mx + c before identifying parallel or perpendicular gradients",
      "Construct the exact equation of a perpendicular bisector in 3 steps"
    ],
    "keyTerms": [
      {
        "term": "Gradient",
        "definition": "The steepness of a straight line, equal to the change in y divided by the change in x."
      },
      {
        "term": "Negative reciprocal",
        "definition": "−1 divided by a gradient m; the gradient of any line perpendicular to a line of gradient m."
      },
      {
        "term": "Perpendicular bisector",
        "definition": "A line that divides a line segment into two equal halves at a right angle (90°)."
      },
      {
        "term": "Gradient, Midpoint & Length Between Two Points",
        "definition": "Compute rise/run for gradient, average coordinates for midpoint, and apply Pythagoras for distance."
      }
    ]
  },
  "igcse-maths-4-1": {
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "Angles, Polygons, Bearings, Similarity & Congruence",
    "readingMinutes": 10,
    "videoTitle": "Transformations: Rotate, Reflect, Enlarge, Translate - GCSE Maths Revision",
    "youtubeId": "fwv7e5OyuzA",
    "videoChannel": "HannahKettleMaths",
    "videoDuration": "17:20",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Parallel Lines, Polygons & Bearings",
        "cardId": "igcse-maths-4-1-c1"
      },
      {
        "time": "5:45",
        "seconds": 345,
        "label": "Congruent Triangles (SSS, SAS, ASA, RHS)",
        "cardId": "igcse-maths-4-1-c2"
      },
      {
        "time": "11:30",
        "seconds": 690,
        "label": "Similar Shapes: Length, Area & Volume Scale Factors",
        "cardId": "igcse-maths-4-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-4-1-c1",
        "title": "Parallel Lines, Polygons & Three-Figure Bearings",
        "summary": "Use formal angle names, polygon sum formulae, and clockwise bearings measured from North.",
        "bullets": [
          "**Parallel line rules** - **alternate angles** are equal (Z), **corresponding angles** are equal (F), and **co-interior (allied) angles** add to 180° (C)."
        ],
        "subsections": [
          {
            "heading": "Polygon Angles & Bearings",
            "bullets": [
              "**Interior & exterior angles** - sum of interior angles = (n − 2) × 180°; sum of exterior angles = 360°; Interior + Exterior = 180°.",
              "**Three-figure bearings** - always measure from North, turn clockwise, and write 3 digits (e.g. 045°). Back bearing = bearing ± 180°."
            ],
            "exampleHeading": "Worked example: Regular polygon with interior angle 150°",
            "examples": [
              "Exterior angle = 180° − 150° = 30°.",
              "Number of sides n = 360° ÷ 30° = 12 sides."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "bearing",
            "definition": "A three-figure angle measured clockwise from North (000° to 360°)."
          }
        ]
      },
      {
        "id": "igcse-maths-4-1-c2",
        "title": "Congruence Conditions for Triangles",
        "summary": "Prove two triangles are identical in shape and size using SSS, SAS, ASA, or RHS.",
        "bullets": [
          "**Four valid proofs** - **SSS** (3 equal sides), **SAS** (2 sides + included angle), **ASA/AAS** (2 angles + corresponding side), and **RHS** (Right angle, Hypotenuse, one Side)."
        ],
        "subsections": [
          {
            "heading": "Invalid Conditions",
            "bullets": [
              "**AAA proves similarity only** - equal angles give the same shape, not necessarily the same size.",
              "**ASS (SSA) is ambiguous** - two different triangles can share two sides and a non-included angle."
            ],
            "exampleHeading": "Worked example: Proving ΔABD ≅ ΔCBD in a kite",
            "examples": [
              "AB = CB and AD = CD (adjacent pairs of sides equal in a kite), and BD is a common side.",
              "Therefore ΔABD ≅ ΔCBD by SSS."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "congruent",
            "definition": "Identical in both shape and size (all corresponding sides and angles equal)."
          }
        ]
      },
      {
        "id": "igcse-maths-4-1-c3",
        "title": "Similar Shapes: Length, Area & Volume Scale Factors",
        "summary": "Square the linear scale factor k for areas (k²) and cube it for volumes (k³).",
        "bullets": [
          "**Scale factor powers** - if linear scale factor is k = L₂ / L₁, then Area scale factor = k² and Volume scale factor = k³."
        ],
        "subsections": [
          {
            "heading": "Converting Between Area and Volume Ratios",
            "bullets": [
              "**Always go via k** - if given a volume ratio V₁ : V₂, take the cube root first to get k = ³√(V₂/V₁), then square k for the surface area ratio."
            ],
            "exampleHeading": "Worked example: Similar cones with heights 6 cm and 9 cm",
            "examples": [
              "Linear scale factor k = 9 ÷ 6 = 1.5.",
              "If smaller cone volume = 40 cm³, larger cone volume = 40 × 1.5³ = 40 × 3.375 = 135 cm³."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "scale factor",
            "definition": "The constant ratio k between corresponding linear lengths of two mathematically similar figures."
          }
        ],
        "memoryAid": "Length = k¹, Area = k², Volume = k³ — always match the power to the dimension (cm, cm², cm³)!",
        "commonMistake": "Never quote \"Z-angles\" or \"F-angles\" in an exam — examiners require the formal terms \"alternate angles\" and \"corresponding angles\"."
      }
    ],
    "checklistPoints": [
      "Use exterior angles = 360°/n to solve regular polygon problems rapidly",
      "State exact congruence proofs using SSS, SAS, ASA, or RHS",
      "Convert fluently between linear (k), area (k²), and volume (k³) scale factors"
    ],
    "keyTerms": [
      {
        "term": "Bearing",
        "definition": "A three-figure angle measured clockwise from North (000° to 360°)."
      },
      {
        "term": "Congruent",
        "definition": "Identical in both shape and size (all corresponding sides and angles equal)."
      },
      {
        "term": "Scale factor",
        "definition": "The constant ratio k between corresponding linear lengths of two mathematically similar figures."
      },
      {
        "term": "Three-Figure Bearing",
        "definition": "An angle measured clockwise from North and written using three digits (000° to 360°)."
      },
      {
        "term": "Congruent Triangles",
        "definition": "Triangles identical in shape and size, proved by SSS, SAS, ASA, or RHS."
      }
    ]
  },
  "igcse-maths-4-2": {
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Circle Theorems & Alternate Segment Theorem",
    "readingMinutes": 10,
    "videoTitle": "Circle Theorems - GCSE Higher Maths",
    "youtubeId": "dBIlCD_JF9Q",
    "videoChannel": "1st Class Maths",
    "videoDuration": "13:52",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Centre, Semicircle & Same-Segment Theorems",
        "cardId": "igcse-maths-4-2-c1"
      },
      {
        "time": "4:40",
        "seconds": 280,
        "label": "Cyclic Quadrilaterals & Tangent Theorems",
        "cardId": "igcse-maths-4-2-c2"
      },
      {
        "time": "9:15",
        "seconds": 555,
        "label": "Alternate Segment Theorem & Symmetry",
        "cardId": "igcse-maths-4-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-4-2-c1",
        "title": "Angle at the Centre, Semicircle & Same Segment",
        "summary": "Master the three core arc-angle circle theorems and always quote full worded reasons.",
        "bullets": [
          "**Angle at the centre** - the angle subtended by an arc at the centre is TWICE the angle subtended at the circumference."
        ],
        "subsections": [
          {
            "heading": "Semicircle & Same Segment",
            "bullets": [
              "**Angle in a semicircle** - the angle subtended by a diameter at the circumference is always 90°.",
              "**Angles in the same segment** - angles subtended by the same chord/arc in the same segment are equal."
            ],
            "exampleHeading": "Worked example: Finding circumference angle from centre angle 134°",
            "examples": [
              "Angle at circumference = 134° ÷ 2 = 67°.",
              "Reason: angle at the centre is twice the angle at the circumference."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "subtended",
            "definition": "Formed by drawing two line segments from the endpoints of an arc or chord to meet at a vertex."
          }
        ]
      },
      {
        "id": "igcse-maths-4-2-c2",
        "title": "Cyclic Quadrilaterals & Tangent Rules",
        "summary": "All four vertices must touch the circumference for a cyclic quadrilateral, and radii meet tangents at 90°.",
        "bullets": [
          "**Cyclic quadrilateral** - opposite angles of a quadrilateral whose four vertices all lie on the circumference sum to 180°."
        ],
        "subsections": [
          {
            "heading": "Tangents & Radii",
            "bullets": [
              "**Tangent–radius theorem** - a tangent meets the radius at the point of contact at exactly 90°.",
              "**Two tangents from an external point** - are equal in length, forming a symmetrical kite with the two radii."
            ],
            "exampleHeading": "Worked example: Cyclic quadrilateral ABCD with ∠A = 78°",
            "examples": [
              "Opposite angle ∠C = 180° − 78° = 102°.",
              "Reason: opposite angles in a cyclic quadrilateral sum to 180°."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "cyclic quadrilateral",
            "definition": "A four-sided polygon whose four vertices all lie on the circumference of the same circle."
          },
          {
            "term": "tangent",
            "definition": "A straight line that touches a circle at exactly one point and is perpendicular to the radius there."
          }
        ],
        "commonMistake": "Do NOT apply the cyclic quadrilateral rule if one of the four corners is at the CENTRE O — all 4 vertices must lie on the circumference!"
      },
      {
        "id": "igcse-maths-4-2-c3",
        "title": "Alternate Segment Theorem & Perpendicular Chord Bisector",
        "summary": "The angle between a tangent and chord equals the inscribed angle in the alternate segment.",
        "bullets": [
          "**Alternate segment theorem** - the angle between a tangent and a chord drawn from the point of contact equals the angle in the alternate (opposite) segment."
        ],
        "subsections": [
          {
            "heading": "Chord Symmetry & Isosceles Radii",
            "bullets": [
              "**Perpendicular from centre to chord** - bisects the chord into two equal halves at 90°, enabling Pythagoras calculations.",
              "**Two radii form an isosceles triangle** - always check for equal radii OA = OB giving equal base angles!"
            ],
            "exampleHeading": "Worked example: Tangent-chord angle 58°",
            "examples": [
              "Tangent at T makes an angle of 58° with chord TA.",
              "The inscribed angle ∠TBA opposite chord TA in the alternate segment is also 58°."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "alternate segment",
            "definition": "The segment of a circle on the opposite side of a chord from the angle formed between that chord and a tangent."
          }
        ],
        "memoryAid": "Always scan circle diagrams for TWO RADII first — hidden isosceles triangles unlock half of IGCSE circle questions!"
      }
    ],
    "checklistPoints": [
      "State exact full-sentence reasons for all seven circle theorems",
      "Spot hidden isosceles triangles formed by two radii and tangent-radius right angles",
      "Apply the alternate segment theorem and perpendicular chord bisector with Pythagoras"
    ],
    "keyTerms": [
      {
        "term": "Subtended",
        "definition": "Formed by drawing two line segments from the endpoints of an arc or chord to meet at a vertex."
      },
      {
        "term": "Cyclic quadrilateral",
        "definition": "A four-sided polygon whose four vertices all lie on the circumference of the same circle."
      },
      {
        "term": "Tangent",
        "definition": "A straight line that touches a circle at exactly one point and is perpendicular to the radius there."
      },
      {
        "term": "Alternate segment",
        "definition": "The segment of a circle on the opposite side of a chord from the angle formed between that chord and a tangent."
      },
      {
        "term": "Alternate Segment Theorem",
        "definition": "The angle between a tangent and a chord equals the inscribed angle in the opposite segment."
      }
    ]
  },
  "igcse-maths-5-1": {
    "subtopicId": "igcse-maths-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "Area, Arc Length, Sector Area, Surface Area & Volume",
    "readingMinutes": 10,
    "videoTitle": "GCSE Maths - How to find the Volumes of Cones and Pyramids",
    "youtubeId": "e_jqJtObKfI",
    "videoChannel": "Cognito",
    "videoDuration": "2:30",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "2D Areas, Arc Length & Sector Area",
        "cardId": "igcse-maths-5-1-c1"
      },
      {
        "time": "0:50",
        "seconds": 50,
        "label": "Prisms, Cylinders, Cones & Pyramids",
        "cardId": "igcse-maths-5-1-c2"
      },
      {
        "time": "1:40",
        "seconds": 100,
        "label": "Spheres, Hemispheres & Frustums",
        "cardId": "igcse-maths-5-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-5-1-c1",
        "title": "Trapezia, Arc Length & Sector Area",
        "summary": "Multiply full circle formulae by the fraction θ/360 to find arc length and sector area.",
        "bullets": [
          "**Trapezium area** - ½(a + b)h, where a and b are the parallel sides and h is the perpendicular distance between them."
        ],
        "subsections": [
          {
            "heading": "Arcs, Sectors & Segments",
            "bullets": [
              "**Arc length** - (θ/360) × 2πr; perimeter of a sector = arc length + 2r.",
              "**Sector area** - (θ/360) × πr²; segment area = sector area − ½r² sin θ."
            ],
            "exampleHeading": "Worked example: Sector with r = 10 cm and θ = 72°",
            "examples": [
              "Arc length = (72/360) × 2π(10) = 4π ≈ 12.6 cm.",
              "Sector area = (72/360) × π(10²) = 20π ≈ 62.8 cm²."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "sector",
            "definition": "A \"pizza slice\" region of a circle bounded by two radii and the arc between them."
          }
        ]
      },
      {
        "id": "igcse-maths-5-1-c2",
        "title": "Prisms, Cylinders, Pyramids & Cones",
        "summary": "Pointed solids (pyramids and cones) always have volume equal to one-third of the matching prism or cylinder.",
        "bullets": [
          "**Prism & cylinder volume** - Cross-sectional area × length (Cylinder V = πr²h; total surface area = 2πr² + 2πrh)."
        ],
        "subsections": [
          {
            "heading": "Cones & Pyramids",
            "bullets": [
              "**Pyramid volume** - ⅓ × Base area × perpendicular height h.",
              "**Cone volume & surface area** - V = ⅓πr²h; curved surface area = πrl where slant height l = √(r² + h²); total SA = πrl + πr²."
            ],
            "exampleHeading": "Worked example: Cone with r = 6 cm, h = 8 cm",
            "examples": [
              "Slant height l = √(6² + 8²) = 10 cm.",
              "Volume = ⅓ × π × 36 × 8 = 96π cm³; Curved SA = π × 6 × 10 = 60π cm²."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "slant height",
            "definition": "The distance along the sloping outer surface of a cone from its apex to a point on the circular base edge."
          }
        ],
        "memoryAid": "Pointy shapes take ⅓: Cone V = ⅓πr²h and Pyramid V = ⅓Ah."
      },
      {
        "id": "igcse-maths-5-1-c3",
        "title": "Spheres, Hemispheres & Frustums",
        "summary": "Remember the flat circular face of a solid hemisphere and subtract cones for frustums.",
        "bullets": [
          "**Sphere** - V = (4/3)πr³ and Surface Area = 4πr²."
        ],
        "subsections": [
          {
            "heading": "Solid Hemispheres & Frustums",
            "bullets": [
              "**Solid hemisphere** - V = (2/3)πr³, but total surface area = 2πr² (curved) + πr² (flat circular base) = 3πr².",
              "**Frustum** - volume = Big cone volume − Small top cone volume (use similar triangles to find missing radii/heights)."
            ],
            "exampleHeading": "Worked example: Total surface area of a solid hemisphere of radius 5 cm",
            "examples": [
              "Curved dome = 2π(5²) = 50π cm²; flat circular base = π(5²) = 25π cm².",
              "Total SA = 75π ≈ 235.6 cm²."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "frustum",
            "definition": "The solid remaining when the top portion of a cone or pyramid is sliced off parallel to its base."
          }
        ],
        "commonMistake": "When asked for the TOTAL surface area of a solid hemisphere, do NOT write 2πr² — add the flat circular base πr² to get 3πr²!"
      }
    ],
    "checklistPoints": [
      "Calculate arc length, sector perimeter (including + 2r), and sector/segment area",
      "Distinguish vertical height h from slant height l = √(r² + h²) in cones",
      "Compute volumes and total surface areas of spheres, solid hemispheres, and frustums"
    ],
    "keyTerms": [
      {
        "term": "Sector",
        "definition": "A \"pizza slice\" region of a circle bounded by two radii and the arc between them."
      },
      {
        "term": "Slant height",
        "definition": "The distance along the sloping outer surface of a cone from its apex to a point on the circular base edge."
      },
      {
        "term": "Frustum",
        "definition": "The solid remaining when the top portion of a cone or pyramid is sliced off parallel to its base."
      },
      {
        "term": "Trapezia, Arc Length & Sector Area",
        "definition": "Multiply full circle formulae by the fraction θ/360 to find arc length and sector area."
      }
    ]
  },
  "igcse-maths-6-1": {
    "subtopicId": "igcse-maths-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Pythagoras’ Theorem & Right-Angled Trigonometry (SOHCAHTOA)",
    "readingMinutes": 10,
    "videoTitle": "Trigonometry | SOH CAH TOA | Sin, Cos, Tan",
    "youtubeId": "WFH_7n7hpHo",
    "videoChannel": "Cognito",
    "videoDuration": "8:14",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Pythagoras & Labelling Right-Angled Triangles",
        "cardId": "igcse-maths-6-1-c1"
      },
      {
        "time": "2:50",
        "seconds": 170,
        "label": "Finding Missing Sides & Angles with SOHCAHTOA",
        "cardId": "igcse-maths-6-1-c2"
      },
      {
        "time": "5:35",
        "seconds": 335,
        "label": "Exact Trig Values & 3D Trigonometry",
        "cardId": "igcse-maths-6-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-6-1-c1",
        "title": "Pythagoras’ Theorem & Labelling H, O, A",
        "summary": "Always identify the hypotenuse opposite the 90° angle before deciding whether to add or subtract squares.",
        "bullets": [
          "**Pythagoras’ theorem** - a² + b² = c², where c is the **hypotenuse** (longest side opposite the right angle)."
        ],
        "subsections": [
          {
            "heading": "SOHCAHTOA Ratios",
            "bullets": [
              "**Three ratios** - sin θ = Opposite / Hypotenuse, cos θ = Adjacent / Hypotenuse, tan θ = Opposite / Adjacent.",
              "**Labelling order** - mark Hypotenuse (opposite 90°), Opposite (across from angle θ), and Adjacent (next to θ)."
            ],
            "exampleHeading": "Worked example: Finding a shorter side",
            "examples": [
              "Hypotenuse = 13 cm, one side = 5 cm.",
              "Missing side = √(13² − 5²) = √(169 − 25) = √144 = 12 cm."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "hypotenuse",
            "definition": "The longest side of a right-angled triangle, always located opposite the 90° angle."
          }
        ],
        "diagram": "right-triangle-trig",
        "memoryAid": "SOH CAH TOA: Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj."
      },
      {
        "id": "igcse-maths-6-1-c2",
        "title": "Angles of Elevation/Depression & Inverse Trig",
        "summary": "Use sin⁻¹, cos⁻¹, or tan⁻¹ to find unknown angles and check your calculator is in DEG mode.",
        "bullets": [
          "**Finding an angle** - write the ratio first, then apply the inverse trig function (e.g. θ = tan⁻¹(O/A))."
        ],
        "subsections": [
          {
            "heading": "Elevation vs Depression",
            "bullets": [
              "**Angle of elevation** - measured UPWARDS from the horizontal.",
              "**Angle of depression** - measured DOWNWARDS from the horizontal (equal to the alternate angle of elevation from the target!)."
            ],
            "exampleHeading": "Worked example: Finding angle of elevation of a 12 m tower from 18 m away",
            "examples": [
              "Opposite = 12 m, Adjacent = 18 m → tan θ = 12/18 = 2/3.",
              "θ = tan⁻¹(2/3) = 33.7° (1 d.p.)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "angle of elevation",
            "definition": "The upward angle between a horizontal line of sight and a line looking up to an object."
          }
        ]
      },
      {
        "id": "igcse-maths-6-1-c3",
        "title": "Exact Trig Values & 3D Pythagoras / Trigonometry",
        "summary": "Know exact values for 0°, 30°, 45°, 60°, 90° and extract 2D right-angled slices from 3D cuboids.",
        "bullets": [
          "**Exact non-calculator values** - sin 30° = ½, cos 60° = ½, tan 45° = 1, sin 60° = √3/2, cos 30° = √3/2, sin 45° = cos 45° = √2/2."
        ],
        "subsections": [
          {
            "heading": "3D Cuboid Diagonals & Line-to-Plane Angles",
            "bullets": [
              "**3D space diagonal** - d = √(l² + w² + h²).",
              "**Angle between a line and a plane** - drop a perpendicular from the top point straight down onto the plane to form a 2D right-angled triangle."
            ],
            "exampleHeading": "Worked example: Space diagonal of a 6 × 8 × 10 cm cuboid",
            "examples": [
              "Base diagonal = √(6² + 8²) = 10 cm.",
              "Space diagonal = √(10² + 10²) = √200 = 10√2 ≈ 14.1 cm; angle to base = tan⁻¹(10/10) = 45°."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "space diagonal",
            "definition": "The longest straight line connecting two opposite corners through the interior of a 3D cuboid."
          }
        ],
        "commonMistake": "Never round intermediate base-diagonal lengths in 3D trigonometry — keep exact surds (like √100) or full calculator precision until the final answer."
      }
    ],
    "checklistPoints": [
      "Select SOH, CAH, or TOA accurately and solve for sides when the unknown is in the denominator",
      "Recall exact values of sin, cos, and tan for 0°, 30°, 45°, 60°, and 90°",
      "Extract right-angled triangles from 3D shapes to compute space diagonals and line-plane angles"
    ],
    "keyTerms": [
      {
        "term": "Hypotenuse",
        "definition": "The longest side of a right-angled triangle, always located opposite the 90° angle."
      },
      {
        "term": "Angle of elevation",
        "definition": "The upward angle between a horizontal line of sight and a line looking up to an object."
      },
      {
        "term": "Space diagonal",
        "definition": "The longest straight line connecting two opposite corners through the interior of a 3D cuboid."
      },
      {
        "term": "Pythagoras’ Theorem & Labelling H, O, A",
        "definition": "Always identify the hypotenuse opposite the 90° angle before deciding whether to add or subtract squares."
      }
    ]
  },
  "igcse-maths-6-2": {
    "subtopicId": "igcse-maths-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Sine Rule, Cosine Rule & Area of Non-Right-Angled Triangles",
    "readingMinutes": 11,
    "videoTitle": "The Sine Rule - GCSE Higher Maths",
    "youtubeId": "7xeLeDulY60",
    "videoChannel": "1st Class Maths",
    "videoDuration": "13:46",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "The Sine Rule & Ambiguous Case",
        "cardId": "igcse-maths-6-2-c1"
      },
      {
        "time": "4:45",
        "seconds": 285,
        "label": "The Cosine Rule (Sides & Angles)",
        "cardId": "igcse-maths-6-2-c2"
      },
      {
        "time": "9:30",
        "seconds": 570,
        "label": "Triangle Area ½ab sin C & Trig Equations",
        "cardId": "igcse-maths-6-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-6-2-c1",
        "title": "The Sine Rule & Ambiguous Case",
        "summary": "Use the Sine Rule whenever you have a known opposite side–angle pair, and watch for obtuse solutions.",
        "bullets": [
          "**Sine rule** - a / sin A = b / sin B = c / sin C (flip it to sin A / a = sin B / b when finding an angle)."
        ],
        "subsections": [
          {
            "heading": "The Ambiguous Case (Obtuse Angles)",
            "bullets": [
              "**Two possible angles** - since sin(180° − θ) = sin θ, your calculator returns the acute angle θ, so check whether the obtuse angle (180° − θ) is needed."
            ],
            "exampleHeading": "Worked example: Finding side a when b = 10 cm, B = 40°, A = 65°",
            "examples": [
              "a / sin 65° = 10 / sin 40°.",
              "a = 10 × sin 65° / sin 40° = 14.1 cm (3 s.f.)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "sine rule",
            "definition": "The relation a / sin A = b / sin B = c / sin C connecting side lengths to the sines of their opposite angles in any triangle."
          }
        ]
      },
      {
        "id": "igcse-maths-6-2-c2",
        "title": "The Cosine Rule (SAS and SSS)",
        "summary": "Use the Cosine Rule with two sides and the included angle (SAS) or all three sides (SSS).",
        "bullets": [
          "**Finding a side** - a² = b² + c² − 2bc cos A."
        ],
        "subsections": [
          {
            "heading": "Rearranging to Find an Angle",
            "bullets": [
              "**Finding an angle** - cos A = (b² + c² − a²) / (2bc), where side a is OPPOSITE angle A.",
              "**Obtuse angles automatically** - if cos A is negative, cos⁻¹ automatically gives the correct obtuse angle (> 90°)."
            ],
            "exampleHeading": "Worked example: Side a with b = 7 cm, c = 9 cm, included angle A = 60°",
            "examples": [
              "a² = 7² + 9² − 2(7)(9) cos 60° = 49 + 81 − 63 = 67.",
              "a = √67 = 8.19 cm (3 s.f.)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "cosine rule",
            "definition": "The formula a² = b² + c² − 2bc cos A used to find missing sides or angles in non-right-angled triangles without a matching opposite pair."
          }
        ],
        "memoryAid": "Have a matching opposite pair? SINE rule. Have SAS (sandwich) or SSS? COSINE rule!"
      },
      {
        "id": "igcse-maths-6-2-c3",
        "title": "Area Formula ½ab sin C & Solving Trig Equations (0°–360°)",
        "summary": "Compute non-right triangle area from two sides and their included angle, and use graph symmetry for trig equations.",
        "bullets": [
          "**Area of any triangle** - Area = ½ab sin C, where C MUST be the angle trapped between sides a and b."
        ],
        "subsections": [
          {
            "heading": "Trig Graphs & Multiple Solutions in 0° ≤ x ≤ 360°",
            "bullets": [
              "**Sine symmetry** - sin(180° − x) = sin x.",
              "**Cosine symmetry** - cos(360° − x) = cos x.",
              "**Tangent period** - repeats every 180°, so tan(x + 180°) = tan x."
            ],
            "exampleHeading": "Worked example: Solve sin x = 0.5 for 0° ≤ x ≤ 360°",
            "examples": [
              "Principal value: x₁ = sin⁻¹(0.5) = 30°.",
              "Second solution using sine symmetry: x₂ = 180° − 30° = 150°."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "included angle",
            "definition": "The angle formed directly between two specified sides of a triangle."
          }
        ],
        "commonMistake": "In the Cosine Rule a² = b² + c² − 2bc cos A, never forget to take the SQUARE ROOT at the end to find a, and respect BIDMAS around the minus sign!"
      }
    ],
    "checklistPoints": [
      "Choose immediately between Sine Rule (matching pair) and Cosine Rule (SAS / SSS)",
      "Identify obtuse solutions in the ambiguous Sine Rule case",
      "Apply Area = ½ab sin C and find all solutions of sin/cos/tan equations in 0°–360°"
    ],
    "keyTerms": [
      {
        "term": "Sine rule",
        "definition": "The relation a / sin A = b / sin B = c / sin C connecting side lengths to the sines of their opposite angles in any triangle."
      },
      {
        "term": "Cosine rule",
        "definition": "The formula a² = b² + c² − 2bc cos A used to find missing sides or angles in non-right-angled triangles without a matching opposite pair."
      },
      {
        "term": "Included angle",
        "definition": "The angle formed directly between two specified sides of a triangle."
      },
      {
        "term": "The Sine Rule & Ambiguous Case",
        "definition": "Use the Sine Rule whenever you have a known opposite side–angle pair, and watch for obtuse solutions."
      }
    ]
  },
  "igcse-maths-7-1": {
    "subtopicId": "igcse-maths-7-1",
    "subtopicCode": "7.1",
    "subtopicTitle": "Column Vectors, Vector Geometry & Transformations",
    "readingMinutes": 10,
    "videoTitle": "Vectors - GCSE Higher Maths",
    "youtubeId": "PxDfkq3FMaw",
    "videoChannel": "1st Class Maths",
    "videoDuration": "28:33",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Column Vectors & Magnitude",
        "cardId": "igcse-maths-7-1-c1"
      },
      {
        "time": "9:30",
        "seconds": 570,
        "label": "Vector Geometry, Parallelism & Collinearity",
        "cardId": "igcse-maths-7-1-c2"
      },
      {
        "time": "19:00",
        "seconds": 1140,
        "label": "Describing the Four Transformations",
        "cardId": "igcse-maths-7-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-7-1-c1",
        "title": "Column Vectors & Magnitude",
        "summary": "Top entry moves horizontally (x), bottom entry moves vertically (y), and Pythagoras gives vector length.",
        "bullets": [
          "**Column vector (x, y)** - add/subtract components separately and multiply both entries by a scalar k."
        ],
        "subsections": [
          {
            "heading": "Magnitude & Position Vectors",
            "bullets": [
              "**Magnitude |a|** - length of vector (x, y) is √(x² + y²), always positive.",
              "**Vector between two points** - AB = b − a (End minus Start)."
            ],
            "exampleHeading": "Worked example: Magnitude of a = (6, −8)",
            "examples": [
              "|a| = √(6² + (−8)²) = √(36 + 64) = √100 = 10."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "magnitude",
            "definition": "The length (size) of a vector, calculated via Pythagoras √(x² + y²)."
          }
        ]
      },
      {
        "id": "igcse-maths-7-1-c2",
        "title": "Vector Geometry: Parallel & Collinear Proofs",
        "summary": "Show one vector is a scalar multiple of another to prove parallelism, and note a shared point for collinearity.",
        "bullets": [
          "**Route building** - reverse a vector by negating it (BA = −AB) and chain known paths (AC = AB + BC)."
        ],
        "subsections": [
          {
            "heading": "Proving Parallel Lines & Collinear Points",
            "bullets": [
              "**Parallel vectors** - if PQ = k × RS for some constant k, then PQ is parallel to RS and |PQ| = |k| × |RS|.",
              "**Collinear points A, B, C** - show AB = k × BC AND explicitly state they share the common point B."
            ],
            "exampleHeading": "Worked example: Proving A, B, C are collinear",
            "examples": [
              "Suppose AB = 2a + 4b and AC = 3a + 6b = 1.5(2a + 4b) = 1.5 AB.",
              "Since AC is a scalar multiple of AB and both share point A, A, B, and C lie on a straight line."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "collinear",
            "definition": "Lying on the exact same straight line."
          }
        ],
        "memoryAid": "Collinear proof needs TWO ingredients: Scalar Multiple + Shared Point!"
      },
      {
        "id": "igcse-maths-7-1-c3",
        "title": "The Four Single Transformations",
        "summary": "Always state the exact mandatory details for Translation, Reflection, Rotation, or Enlargement.",
        "bullets": [
          "**Translation** - state \"Translation\" + column vector (x, y).",
          "**Reflection** - state \"Reflection\" + equation of the mirror line (e.g. y = x, x = 2)."
        ],
        "subsections": [
          {
            "heading": "Rotation & Enlargement (Including Negative Scale Factors)",
            "bullets": [
              "**Rotation** - state \"Rotation\", angle (e.g. 90°), direction (clockwise/anticlockwise, except 180°), and centre (x, y).",
              "**Enlargement** - state \"Enlargement\", scale factor k, and centre (x, y). A negative k inverts the shape on the opposite side of the centre; fractional |k| < 1 shrinks it."
            ],
            "exampleHeading": "Worked example: Enlargement by scale factor −2 about (0, 0)",
            "examples": [
              "Vertex at (2, 1) multiplies by −2 → image vertex at (−4, −2).",
              "The image is twice as large and rotated 180° through the centre (0, 0)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "enlargement",
            "definition": "A transformation that scales every distance from a fixed centre by a scale factor k (preserving angles)."
          }
        ],
        "commonMistake": "When asked to describe a SINGLE transformation, never combine two (e.g. \"translate and reflect\") — you will score zero marks!"
      }
    ],
    "checklistPoints": [
      "Calculate column vector combinations and magnitudes using √(x² + y²)",
      "Prove two lines are parallel (scalar multiple) or three points are collinear (scalar multiple + common point)",
      "State all mandatory geometric details when describing each of the 4 single transformations"
    ],
    "keyTerms": [
      {
        "term": "Magnitude",
        "definition": "The length (size) of a vector, calculated via Pythagoras √(x² + y²)."
      },
      {
        "term": "Collinear",
        "definition": "Lying on the exact same straight line."
      },
      {
        "term": "Enlargement",
        "definition": "A transformation that scales every distance from a fixed centre by a scale factor k (preserving angles)."
      },
      {
        "term": "Collinear Points",
        "definition": "Three or more points lying on the same straight line (proved via scalar multiple + shared point)."
      }
    ]
  },
  "igcse-maths-8-1": {
    "subtopicId": "igcse-maths-8-1",
    "subtopicCode": "8.1",
    "subtopicTitle": "Probability Trees, Venn Diagrams & Conditional Probability",
    "readingMinutes": 10,
    "videoTitle": "Venn Diagrams & Set Theory | GCSE Maths Tutor",
    "youtubeId": "xPPBM7MM8-I",
    "videoChannel": "The GCSE Maths Tutor",
    "videoDuration": "17:58",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Set Notation & Venn Diagrams",
        "cardId": "igcse-maths-8-1-c1"
      },
      {
        "time": "6:00",
        "seconds": 360,
        "label": "Tree Diagrams & Dependent Events",
        "cardId": "igcse-maths-8-1-c2"
      },
      {
        "time": "12:00",
        "seconds": 720,
        "label": "Conditional Probability P(A | B)",
        "cardId": "igcse-maths-8-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-8-1-c1",
        "title": "Set Notation & Venn Diagrams",
        "summary": "Fill the central intersection first and master ∩ (AND), ∪ (OR), and A′ (NOT A).",
        "bullets": [
          "**Set symbols** - A ∩ B means both A AND B; A ∪ B means A OR B (or both); A′ means NOT in A; ξ is the universal set; n(A) is the number of elements in A."
        ],
        "subsections": [
          {
            "heading": "Populating a Venn Diagram Accurately",
            "bullets": [
              "**Start in the middle** - always enter the intersection n(A ∩ B) first, then subtract it from n(A) and n(B) for the \"only\" crescents.",
              "**Outside region** - subtract the union from the universal total n(ξ) to find n((A ∪ B)′)."
            ],
            "exampleHeading": "Worked example: 30 students; 18 take French, 15 take Spanish, 7 take both",
            "examples": [
              "French only = 18 − 7 = 11; Spanish only = 15 − 7 = 8; Neither = 30 − (11 + 7 + 8) = 4.",
              "P(French or Spanish) = 26/30 = 13/15."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "intersection",
            "definition": "The set A ∩ B of elements belonging to both set A and set B simultaneously."
          },
          {
            "term": "union",
            "definition": "The set A ∪ B of elements belonging to set A, set B, or both."
          }
        ],
        "memoryAid": "∪ looks like U for Union (Unite everything); ∩ looks like an arch/n for iNtersection (AND)."
      },
      {
        "id": "igcse-maths-8-1-c2",
        "title": "Probability Tree Diagrams (With & Without Replacement)",
        "summary": "Multiply along branches for AND, add between separate winning paths for OR, and reduce denominators without replacement.",
        "bullets": [
          "**Branch rules** - probabilities on any pair of branches from a single node always sum to 1; multiply along paths (AND); add separate outcomes (OR)."
        ],
        "subsections": [
          {
            "heading": "Without Replacement (Dependent Events)",
            "bullets": [
              "**Adjust second branches** - when an item is NOT replaced, the total denominator decreases by 1 AND the chosen colour numerator decreases by 1 on that branch.",
              "**At least one shortcut** - P(at least one) = 1 − P(none)."
            ],
            "exampleHeading": "Worked example: 3 red and 5 blue beads; two picked without replacement",
            "examples": [
              "P(both red) = (3/8) × (2/7) = 6/56 = 3/28.",
              "P(different colours) = (3/8 × 5/7) + (5/8 × 3/7) = 30/56 = 15/28."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "independent events",
            "definition": "Events where the outcome of one has zero effect on the probability of the other, so P(A and B) = P(A) × P(B)."
          }
        ]
      },
      {
        "id": "igcse-maths-8-1-c3",
        "title": "Conditional Probability P(A | B)",
        "summary": "Restrict your sample space strictly to the given condition B when calculating P(A | B).",
        "bullets": [
          "**Conditional probability formula** - P(A | B) = P(A ∩ B) / P(B), read as \"probability of A given B\"."
        ],
        "subsections": [
          {
            "heading": "Reading Conditional Probabilities from Venn Diagrams",
            "bullets": [
              "**New denominator** - when told \"given the student studies Spanish\", ignore everyone outside circle S; the denominator becomes n(S), not n(ξ)."
            ],
            "exampleHeading": "Worked example: Using the 30-student Venn diagram above",
            "examples": [
              "Find P(French | Spanish): 15 students take Spanish, and 7 of those also take French.",
              "P(French | Spanish) = 7 / 15."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "conditional probability",
            "definition": "The probability of an event A occurring given that another event B has already occurred."
          }
        ],
        "commonMistake": "For \"given B\" questions, never leave the denominator as the grand total — always shrink the denominator to the size of the given group B!"
      }
    ],
    "checklistPoints": [
      "Construct Venn diagrams from the intersection outwards and read ∩, ∪, and complement notation",
      "Draw and solve tree diagrams both with and without replacement",
      "Restrict the denominator accurately for conditional probabilities P(A | B)"
    ],
    "keyTerms": [
      {
        "term": "Intersection",
        "definition": "The set A ∩ B of elements belonging to both set A and set B simultaneously."
      },
      {
        "term": "Union",
        "definition": "The set A ∪ B of elements belonging to set A, set B, or both."
      },
      {
        "term": "Independent events",
        "definition": "Events where the outcome of one has zero effect on the probability of the other, so P(A and B) = P(A) × P(B)."
      },
      {
        "term": "Conditional probability",
        "definition": "The probability of an event A occurring given that another event B has already occurred."
      }
    ]
  },
  "igcse-maths-8-2": {
    "subtopicId": "igcse-maths-8-2",
    "subtopicCode": "8.2",
    "subtopicTitle": "Averages, Cumulative Frequency, Box Plots & Histograms",
    "readingMinutes": 11,
    "videoTitle": "Drawing Histograms - GCSE Higher Maths",
    "youtubeId": "g7Jnrf0g2tQ",
    "videoChannel": "1st Class Maths",
    "videoDuration": "4:58",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Maths (0580)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Grouped Mean & Averages",
        "cardId": "igcse-maths-8-2-c1"
      },
      {
        "time": "1:40",
        "seconds": 100,
        "label": "Cumulative Frequency Curves & Box Plots",
        "cardId": "igcse-maths-8-2-c2"
      },
      {
        "time": "3:20",
        "seconds": 200,
        "label": "Histograms & Frequency Density",
        "cardId": "igcse-maths-8-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-maths-8-2-c1",
        "title": "Estimated Mean from Grouped Data & Choosing Averages",
        "summary": "Multiply each class midpoint by its frequency and divide by the total frequency (not the number of groups).",
        "bullets": [
          "**Estimated mean** - Σ(f × midpoint) ÷ Σf; it is an estimate because exact raw values within each class are unknown."
        ],
        "subsections": [
          {
            "heading": "Comparing Distributions",
            "bullets": [
              "**Two comparisons required** - always compare one measure of **average** (median/mean) AND one measure of **spread** (IQR/range) in the context of the question."
            ],
            "exampleHeading": "Worked example: Grouped mean of 20 scores",
            "examples": [
              "Classes 0–10 (mid 5, f=4), 10–20 (mid 15, f=10), 20–30 (mid 25, f=6).",
              "Σ(fx) = 20 + 150 + 150 = 320; Estimated mean = 320 ÷ 20 = 16."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "interquartile range",
            "definition": "Upper quartile minus lower quartile (IQR = Q₃ − Q₁), measuring the spread of the middle 50% of data without outlier distortion."
          }
        ]
      },
      {
        "id": "igcse-maths-8-2-c2",
        "title": "Cumulative Frequency Curves & Box Plots",
        "summary": "Plot cumulative frequency at UPPER class boundaries and read Q₁, Median, and Q₃ at ¼n, ½n, and ¾n.",
        "bullets": [
          "**Plotting rule** - ALWAYS plot cumulative frequency points at the **upper boundary** of each class interval, joined by a smooth S-curve."
        ],
        "subsections": [
          {
            "heading": "Quartiles & Five-Number Summary",
            "bullets": [
              "**Reading quartiles** - Lower quartile Q₁ at 0.25n, Median Q₂ at 0.5n, Upper quartile Q₃ at 0.75n; IQR = Q₃ − Q₁.",
              "**Box plot** - displays Minimum, Q₁, Median, Q₃, and Maximum; each of the four sections holds 25% of the data."
            ],
            "exampleHeading": "Worked example: 80 test scores on a cumulative frequency graph",
            "examples": [
              "Read across from CF = 20 (Q₁), CF = 40 (Median), and CF = 60 (Q₃).",
              "If Q₁ = 42 and Q₃ = 68, then IQR = 68 − 42 = 26 marks."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "cumulative frequency",
            "definition": "The running total of frequencies up to the upper boundary of each class interval."
          }
        ],
        "commonMistake": "Never plot cumulative frequency points at class MIDPOINTS — midpoints are for frequency polygons; cumulative frequency ALWAYS uses UPPER class boundaries!"
      },
      {
        "id": "igcse-maths-8-2-c3",
        "title": "Histograms & Frequency Density",
        "summary": "In unequal-width histograms, bar AREA represents frequency and bar height equals frequency density.",
        "bullets": [
          "**Frequency density formula** - Frequency Density = Frequency ÷ Class Width; therefore Frequency = Frequency Density × Class Width (= bar area)."
        ],
        "subsections": [
          {
            "heading": "Reading Frequencies & Finding the Median from a Histogram",
            "bullets": [
              "**No gaps between bars** - histograms represent continuous data with touching bars of varying width.",
              "**Sub-interval estimates** - to estimate how many items lie in part of a bar (e.g. > 25 inside class 20–40), multiply that sub-width (15) by the bar’s frequency density."
            ],
            "exampleHeading": "Worked example: Class 20 ≤ t < 35 with frequency 45",
            "examples": [
              "Class width = 35 − 20 = 15.",
              "Frequency density = 45 ÷ 15 = 3.0 (height of the bar)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "frequency density",
            "definition": "Frequency divided by class width; plotted on the vertical axis of a histogram so bar area equals frequency."
          }
        ],
        "memoryAid": "Histogram Triangle: Frequency on top, Frequency Density × Class Width on the bottom (Area = Frequency)!"
      }
    ],
    "checklistPoints": [
      "Calculate estimated mean from grouped tables using midpoints and dividing by total frequency",
      "Plot cumulative frequency at upper boundaries and extract Q₁, Median, Q₃, and IQR",
      "Compute Frequency Density = Frequency ÷ Class Width and use bar area = frequency on histograms"
    ],
    "keyTerms": [
      {
        "term": "Interquartile range",
        "definition": "Upper quartile minus lower quartile (IQR = Q₃ − Q₁), measuring the spread of the middle 50% of data without outlier distortion."
      },
      {
        "term": "Cumulative frequency",
        "definition": "The running total of frequencies up to the upper boundary of each class interval."
      },
      {
        "term": "Frequency density",
        "definition": "Frequency divided by class width; plotted on the vertical axis of a histogram so bar area equals frequency."
      },
      {
        "term": "Estimated Mean from Grouped Data & Choosing Averages",
        "definition": "Multiply each class midpoint by its frequency and divide by the total frequency (not the number of groups)."
      }
    ]
  }
};

export const IGCSE_MATHS_QUIZZES: QuizQuestion[] = [
  {
    "id": "igcse-maths-q-1-1-1",
    "subtopicId": "igcse-maths-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "£1,500 is invested at 6% compound interest per year for 4 years. Which calculation gives the final amount?",
    "options": [
      "1500 × 1.06 × 4",
      "1500 × 1.06⁴",
      "1500 × 0.94⁴",
      "1500 ÷ 1.06⁴"
    ],
    "correctIndex": 1,
    "explanation": "A 6% annual increase uses multiplier 1.06 raised to the power of 4 years: 1500 × 1.06⁴."
  },
  {
    "id": "igcse-maths-q-1-1-2",
    "subtopicId": "igcse-maths-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A bike costs £255 after a 15% reduction in a sale. Calculate its original price before the sale.",
    "explanation": "Reverse percentage: divide the sale price by (1 − 0.15) = 0.85 to get £300.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "£255 represents 85% (multiplier 0.85), so Original price = 255 ÷ 0.85 = £300.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "0.85",
              "85%"
            ]
          ],
          "markDescription": "Divides by 0.85 (or 85%)"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 300,
            "tolerance": 0.01
          },
          "markDescription": "Final answer 300"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-1-1-3",
    "subtopicId": "igcse-maths-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the conversion of 0.363636... to a fraction:",
    "segments": [
      "Let x = 0.3636..., then 100x = 36.3636..., so ",
      "x = 36, which simplifies to ",
      "."
    ],
    "wordBank": [
      "99",
      "4/11",
      "90",
      "9/25"
    ],
    "answers": [
      "99",
      "4/11"
    ],
    "explanation": "100x − x = 99x = 36, so x = 36/99 = 4/11."
  },
  {
    "id": "igcse-maths-q-1-1-4",
    "subtopicId": "igcse-maths-1-1",
    "type": "multi-select",
    "marks": 2,
    "prompt": "Select the TWO correct decimal multipliers:",
    "options": [
      "12% increase → 1.12",
      "8% decrease → 0.92",
      "5% increase → 1.5",
      "15% decrease → 0.15"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "+12% is 1 + 0.12 = 1.12 and −8% is 1 − 0.08 = 0.92."
  },
  {
    "id": "igcse-maths-q-1-1-5",
    "subtopicId": "igcse-maths-1-1",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each percentage task to the correct formula:",
    "pairs": [
      {
        "left": "Compound growth",
        "right": "P × (1 + r/100)ⁿ"
      },
      {
        "left": "Depreciation",
        "right": "P × (1 − r/100)ⁿ"
      },
      {
        "left": "Reverse percentage",
        "right": "Final ÷ Multiplier"
      },
      {
        "left": "Percentage change",
        "right": "(Change ÷ Original) × 100"
      }
    ],
    "explanation": "Each formula handles its exact direction of percentage calculation."
  },
  {
    "id": "igcse-maths-q-1-2-1",
    "subtopicId": "igcse-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the exact value of 16^(-3/4)?",
    "options": [
      "1/8",
      "−8",
      "1/12",
      "8"
    ],
    "correctIndex": 0,
    "explanation": "Fourth root of 16 is 2, cubed is 8, and the negative power takes the reciprocal → 1/8."
  },
  {
    "id": "igcse-maths-q-1-2-2",
    "subtopicId": "igcse-maths-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A rod has length 8.4 cm correct to 1 decimal place. State its lower bound and upper bound.",
    "explanation": "Half of 0.1 cm is 0.05 cm, giving 8.4 ± 0.05 → 8.35 cm and 8.45 cm.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Lower bound = 8.35 cm and upper bound = 8.45 cm.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 8.35,
            "tolerance": 0.001
          },
          "markDescription": "Lower bound 8.35"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 8.45,
            "tolerance": 0.001
          },
          "markDescription": "Upper bound 8.45"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-1-2-3",
    "subtopicId": "igcse-maths-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the surd simplification and rationalisation:",
    "segments": [
      "√50 simplifies to ",
      "√2, and 6 / √3 rationalises to ",
      "√3."
    ],
    "wordBank": [
      "5",
      "2",
      "25",
      "3"
    ],
    "answers": [
      "5",
      "2"
    ],
    "explanation": "√50 = √(25 × 2) = 5√2; 6/√3 × √3/√3 = 6√3/3 = 2√3."
  },
  {
    "id": "igcse-maths-q-1-2-4",
    "subtopicId": "igcse-maths-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "To find the MAXIMUM possible value of p / q using bounds, you calculate:",
    "options": [
      "UB(p) ÷ UB(q)",
      "UB(p) ÷ LB(q)",
      "LB(p) ÷ UB(q)",
      "LB(p) ÷ LB(q)"
    ],
    "correctIndex": 1,
    "explanation": "Dividing the largest numerator by the smallest denominator produces the largest quotient."
  },
  {
    "id": "igcse-maths-q-1-2-5",
    "subtopicId": "igcse-maths-1-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each expression to its simplified value:",
    "pairs": [
      {
        "left": "a⁰ (a ≠ 0)",
        "right": "1"
      },
      {
        "left": "a⁻²",
        "right": "1 / a²"
      },
      {
        "left": "a^(1/2)",
        "right": "√a"
      },
      {
        "left": "4.5 × 10⁻³",
        "right": "0.0045"
      }
    ],
    "explanation": "Zero, negative, and fractional index laws plus negative standard form powers."
  },
  {
    "id": "igcse-maths-q-1-3-1",
    "subtopicId": "igcse-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "If A : B = 2 : 5 and B : C = 3 : 4, what is A : B : C in simplest form?",
    "options": [
      "2 : 8 : 4",
      "6 : 15 : 20",
      "6 : 15 : 12",
      "4 : 15 : 20"
    ],
    "correctIndex": 1,
    "explanation": "Scale B to LCM(5, 3) = 15: 2:5 → 6:15 and 3:4 → 15:20, giving 6 : 15 : 20."
  },
  {
    "id": "igcse-maths-q-1-3-2",
    "subtopicId": "igcse-maths-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "y is directly proportional to x². When x = 2, y = 20. Find y when x = 5.",
    "explanation": "k = 20 ÷ 2² = 5, hence y = 5 × 5² = 125.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "y = kx² → 20 = 4k → k = 5, so when x = 5, y = 5 × 25 = 125.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 5,
            "tolerance": 0.01
          },
          "markDescription": "Finds k = 5"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 125,
            "tolerance": 0.01
          },
          "markDescription": "Final value 125"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-1-3-3",
    "subtopicId": "igcse-maths-1-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the inverse proportion relationship:",
    "segments": [
      "If y is inversely proportional to x, then y = ",
      " / x, and when x doubles, y is ",
      "."
    ],
    "wordBank": [
      "k",
      "halved",
      "doubled",
      "squared"
    ],
    "answers": [
      "k",
      "halved"
    ],
    "explanation": "For y = k/x, doubling x halves y so xy = k stays constant."
  },
  {
    "id": "igcse-maths-q-1-3-4",
    "subtopicId": "igcse-maths-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "8 pumps can empty a tank in 6 hours. How long will 12 identical pumps take?",
    "options": [
      "9 hours",
      "4 hours",
      "3 hours",
      "4.5 hours"
    ],
    "correctIndex": 1,
    "explanation": "Total work = 8 × 6 = 48 pump-hours; 48 ÷ 12 = 4 hours."
  },
  {
    "id": "igcse-maths-q-1-3-5",
    "subtopicId": "igcse-maths-1-3",
    "type": "multi-select",
    "marks": 2,
    "prompt": "Select the TWO statements that are true for direct proportion y = kx (k > 0):",
    "options": [
      "The graph is a straight line through the origin (0, 0)",
      "Doubling x doubles y",
      "xy is constant",
      "The graph is a reciprocal curve"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Direct linear proportion passes through (0,0) with constant ratio y/x = k."
  },
  {
    "id": "igcse-maths-q-2-1-1",
    "subtopicId": "igcse-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What are the coordinates of the minimum turning point of y = (x − 4)² + 7?",
    "options": [
      "(−4, 7)",
      "(4, 7)",
      "(4, −7)",
      "(−4, −7)"
    ],
    "correctIndex": 1,
    "explanation": "For y = (x + p)² + q, the turning point is (−p, q), so (x − 4)² + 7 has minimum at (4, 7)."
  },
  {
    "id": "igcse-maths-q-2-1-2",
    "subtopicId": "igcse-maths-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Solve x² − 7x + 12 = 0 by factorising.",
    "explanation": "−3 × −4 = +12 and −3 + (−4) = −7, giving roots 3 and 4.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "(x − 3)(x − 4) = 0, so x = 3 or x = 4.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 3,
            "tolerance": 0.01
          },
          "markDescription": "Root x = 3"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 4,
            "tolerance": 0.01
          },
          "markDescription": "Root x = 4"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-2-1-3",
    "subtopicId": "igcse-maths-2-1",
    "type": "diagram-label",
    "marks": 2,
    "prompt": "Identify the key features of a quadratic parabola y = ax² + bx + c:",
    "diagram": "quadratic-graph",
    "labels": [
      {
        "marker": "x-intercepts",
        "options": [
          "Roots where y = 0",
          "Gradient m",
          "Asymptote"
        ],
        "answer": "Roots where y = 0"
      },
      {
        "marker": "Vertex",
        "options": [
          "Turning point (−p, q)",
          "y-intercept c",
          "Discriminant"
        ],
        "answer": "Turning point (−p, q)"
      }
    ],
    "explanation": "Roots lie on the x-axis (y = 0) and the vertex is the minimum/maximum turning point."
  },
  {
    "id": "igcse-maths-q-2-1-4",
    "subtopicId": "igcse-maths-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the difference of two squares factorisation:",
    "segments": [
      "25x² − 9 factorises to (",
      " + 3)(5x − ",
      ")."
    ],
    "wordBank": [
      "5x",
      "3",
      "25x",
      "9"
    ],
    "answers": [
      "5x",
      "3"
    ],
    "explanation": "a² − b² = (a + b)(a − b) with a = 5x and b = 3."
  },
  {
    "id": "igcse-maths-q-2-1-5",
    "subtopicId": "igcse-maths-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "If the discriminant b² − 4ac < 0, how many real roots does ax² + bx + c = 0 have?",
    "options": [
      "2 distinct real roots",
      "1 repeated root",
      "0 real roots",
      "Infinitely many"
    ],
    "correctIndex": 2,
    "explanation": "You cannot take the real square root of a negative number, so there are no real roots."
  },
  {
    "id": "igcse-maths-q-2-2-1",
    "subtopicId": "igcse-maths-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Solve the simultaneous equations: 2x + y = 11 and x − y = 4.",
    "explanation": "Different signs on y → add equations to get 3x = 15 → x = 5, y = 1.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Adding gives 3x = 15 so x = 5; substituting gives 5 − y = 4 so y = 1.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 5,
            "tolerance": 0.01
          },
          "markDescription": "x = 5"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 1,
            "tolerance": 0.01
          },
          "markDescription": "y = 1"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-2-2-2",
    "subtopicId": "igcse-maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Solve the quadratic inequality x² − 5x + 6 < 0.",
    "options": [
      "x < 2 or x > 3",
      "2 < x < 3",
      "−3 < x < −2",
      "x < −3 or x > −2"
    ],
    "correctIndex": 1,
    "explanation": "Roots are 2 and 3; the U-parabola dips below 0 between them: 2 < x < 3."
  },
  {
    "id": "igcse-maths-q-2-2-3",
    "subtopicId": "igcse-maths-2-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the inequality rule:",
    "segments": [
      "When dividing both sides of −3x ≤ 12 by −3, you must ",
      " the inequality sign to get x ",
      " −4."
    ],
    "wordBank": [
      "reverse",
      "≥",
      "keep",
      "≤"
    ],
    "answers": [
      "reverse",
      "≥"
    ],
    "explanation": "Dividing by a negative flips ≤ into ≥."
  },
  {
    "id": "igcse-maths-q-2-2-4",
    "subtopicId": "igcse-maths-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When shading a region for y > 2x + 1 on a coordinate grid, the boundary line y = 2x + 1 must be drawn as a:",
    "options": [
      "Solid line",
      "Dashed line",
      "Curved line",
      "Vertical line"
    ],
    "correctIndex": 1,
    "explanation": "Strict inequalities (< or >) exclude the boundary, so the line is dashed."
  },
  {
    "id": "igcse-maths-q-2-2-5",
    "subtopicId": "igcse-maths-2-2",
    "type": "multi-select",
    "marks": 2,
    "prompt": "Select the TWO ordered pairs that satisfy both y = x + 2 and y = x²:",
    "options": [
      "(2, 4)",
      "(−1, 1)",
      "(1, 3)",
      "(−2, 4)"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "x² = x + 2 → (x − 2)(x + 1) = 0 → (2, 4) and (−1, 1)."
  },
  {
    "id": "igcse-maths-q-2-3-1",
    "subtopicId": "igcse-maths-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given f(x) = 2x + 3 and g(x) = x², what is fg(5)?",
    "options": [
      "169",
      "53",
      "28",
      "50"
    ],
    "correctIndex": 1,
    "explanation": "Apply g first: g(5) = 25, then f(25) = 2(25) + 3 = 53."
  },
  {
    "id": "igcse-maths-q-2-3-2",
    "subtopicId": "igcse-maths-2-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Differentiate y = 3x⁴ − 5x + 7 and find the gradient when x = 1.",
    "explanation": "dy/dx = 12x³ − 5, giving 12 − 5 = 7 at x = 1.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "dy/dx = 12x³ − 5; at x = 1 the gradient is 12(1) − 5 = 7.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "12x"
            ],
            [
              "5"
            ]
          ],
          "markDescription": "Derivative 12x³ − 5"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 7,
            "tolerance": 0.01
          },
          "markDescription": "Gradient = 7"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-2-3-3",
    "subtopicId": "igcse-maths-2-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the quadratic sequence rule:",
    "segments": [
      "If a sequence has a constant second difference of 6, the coefficient of n² is ",
      ", and stationary points on a curve occur where dy/dx = ",
      "."
    ],
    "wordBank": [
      "3",
      "0",
      "6",
      "1"
    ],
    "answers": [
      "3",
      "0"
    ],
    "explanation": "Half the second difference gives A = 6/2 = 3; stationary points have gradient 0."
  },
  {
    "id": "igcse-maths-q-2-3-4",
    "subtopicId": "igcse-maths-2-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Find the inverse function f⁻¹(x) for f(x) = (x − 4) / 3.",
    "options": [
      "3x + 4",
      "3x − 4",
      "(x + 4) / 3",
      "3(x + 4)"
    ],
    "correctIndex": 0,
    "explanation": "y = (x − 4)/3 → 3y = x − 4 → x = 3y + 4, so f⁻¹(x) = 3x + 4."
  },
  {
    "id": "igcse-maths-q-2-3-5",
    "subtopicId": "igcse-maths-2-3",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each calculus/sequence concept to its formula:",
    "pairs": [
      {
        "left": "Geometric nth term",
        "right": "a × rⁿ⁻¹"
      },
      {
        "left": "Derivative of axⁿ",
        "right": "anxⁿ⁻¹"
      },
      {
        "left": "Local minimum test",
        "right": "dy/dx = 0 and d²y/dx² > 0"
      },
      {
        "left": "Local maximum test",
        "right": "dy/dx = 0 and d²y/dx² < 0"
      }
    ],
    "explanation": "Core Extended IGCSE algebra and calculus rules."
  },
  {
    "id": "igcse-maths-q-3-1-1",
    "subtopicId": "igcse-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the gradient of a line perpendicular to y = (3/4)x − 2?",
    "options": [
      "3/4",
      "−3/4",
      "4/3",
      "−4/3"
    ],
    "correctIndex": 3,
    "explanation": "Take the negative reciprocal of 3/4: flip and negate → −4/3."
  },
  {
    "id": "igcse-maths-q-3-1-2",
    "subtopicId": "igcse-maths-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the exact length of the line segment joining A(2, 1) and B(5, 5).",
    "explanation": "Δx = 3, Δy = 4, so distance = √(3² + 4²) = 5.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Length = √((5 − 2)² + (5 − 1)²) = √(9 + 16) = √25 = 5.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "9",
              "3²",
              "3^2"
            ],
            [
              "16",
              "4²",
              "4^2"
            ]
          ],
          "markDescription": "Uses Pythagoras (3² + 4²)"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 5,
            "tolerance": 0.01
          },
          "markDescription": "Length 5"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-3-1-3",
    "subtopicId": "igcse-maths-3-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the midpoint and parallel-line facts:",
    "segments": [
      "The midpoint of (2, 8) and (6, 4) is (",
      ", 6), and parallel lines always have ",
      " gradients."
    ],
    "wordBank": [
      "4",
      "equal",
      "8",
      "opposite"
    ],
    "answers": [
      "4",
      "equal"
    ],
    "explanation": "(2+6)/2 = 4, and parallel lines share m₁ = m₂."
  },
  {
    "id": "igcse-maths-q-3-1-4",
    "subtopicId": "igcse-maths-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the gradient of the line 2x + 4y = 10?",
    "options": [
      "2",
      "−2",
      "−1/2",
      "1/2"
    ],
    "correctIndex": 2,
    "explanation": "Rearrange: 4y = −2x + 10 → y = −½x + 2.5, so m = −1/2."
  },
  {
    "id": "igcse-maths-q-3-1-5",
    "subtopicId": "igcse-maths-3-1",
    "type": "multi-select",
    "marks": 2,
    "prompt": "To find the perpendicular bisector of segment AB, which TWO quantities must you calculate first?",
    "options": [
      "The midpoint of AB",
      "The negative reciprocal of gradient AB",
      "The length of AB",
      "The y-intercept of AB"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "A perpendicular bisector passes through the midpoint M with gradient −1/m_AB."
  },
  {
    "id": "igcse-maths-q-4-1-1",
    "subtopicId": "igcse-maths-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A regular polygon has an exterior angle of 24°. How many sides does it have?",
    "options": [
      "12",
      "15",
      "18",
      "20"
    ],
    "correctIndex": 1,
    "explanation": "n = 360° ÷ 24° = 15 sides."
  },
  {
    "id": "igcse-maths-q-4-1-2",
    "subtopicId": "igcse-maths-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Two similar bottles have heights 10 cm and 15 cm. If the smaller bottle holds 200 ml, calculate the capacity of the larger bottle.",
    "explanation": "Volume scales by k³ = (1.5)³ = 3.375 → 200 × 3.375 = 675 ml.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Linear scale factor k = 15/10 = 1.5; volume scale factor k³ = 3.375; capacity = 200 × 3.375 = 675 ml.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "1.5",
              "3/2",
              "3.375",
              "27/8"
            ]
          ],
          "markDescription": "Linear k = 1.5 or k³ = 3.375"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 675,
            "tolerance": 0.1
          },
          "markDescription": "Capacity 675 ml"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-4-1-3",
    "subtopicId": "igcse-maths-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the bearing calculation:",
    "segments": [
      "If the bearing of B from A is 065°, the back bearing of A from B is ",
      "°, and bearings are always measured ",
      " from North."
    ],
    "wordBank": [
      "245",
      "clockwise",
      "115",
      "anticlockwise"
    ],
    "answers": [
      "245",
      "clockwise"
    ],
    "explanation": "065° + 180° = 245°; bearings are always clockwise from North."
  },
  {
    "id": "igcse-maths-q-4-1-4",
    "subtopicId": "igcse-maths-4-1",
    "type": "multi-select",
    "marks": 2,
    "prompt": "Select the TWO valid triangle congruence conditions:",
    "options": [
      "SAS",
      "RHS",
      "AAA",
      "ASS"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "SSS, SAS, ASA, and RHS prove congruence; AAA only proves similarity and ASS is ambiguous."
  },
  {
    "id": "igcse-maths-q-4-1-5",
    "subtopicId": "igcse-maths-4-1",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each parallel-line angle pair to its property:",
    "pairs": [
      {
        "left": "Alternate angles",
        "right": "Equal"
      },
      {
        "left": "Corresponding angles",
        "right": "Equal"
      },
      {
        "left": "Co-interior angles",
        "right": "Sum to 180°"
      },
      {
        "left": "Vertically opposite angles",
        "right": "Equal"
      }
    ],
    "explanation": "Use exact formal names in geometry proof questions."
  },
  {
    "id": "igcse-maths-q-4-2-1",
    "subtopicId": "igcse-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "The angle subtended by an arc at the centre of a circle is 116°. What is the angle subtended at the circumference?",
    "options": [
      "116°",
      "58°",
      "232°",
      "64°"
    ],
    "correctIndex": 1,
    "explanation": "Angle at circumference = half the angle at the centre = 116° ÷ 2 = 58°."
  },
  {
    "id": "igcse-maths-q-4-2-2",
    "subtopicId": "igcse-maths-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "PQRS is a cyclic quadrilateral with ∠P = 83°. Find ∠R and state the circle theorem used.",
    "explanation": "Opposite angles of a cyclic quadrilateral always add to 180°.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "∠R = 180° − 83° = 97°, because opposite angles in a cyclic quadrilateral sum to 180°.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 97,
            "tolerance": 0.1
          },
          "markDescription": "Angle 97°"
        },
        {
          "id": "mp2",
          "requiredKeywordGroups": [
            [
              "cyclic"
            ],
            [
              "opposite",
              "180"
            ]
          ],
          "markDescription": "Cyclic quadrilateral opposite angles sum to 180°"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-4-2-3",
    "subtopicId": "igcse-maths-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the tangent theorems:",
    "segments": [
      "A tangent meets a radius at ",
      "°, and two tangents from an external point to a circle are ",
      " in length."
    ],
    "wordBank": [
      "90",
      "equal",
      "180",
      "parallel"
    ],
    "answers": [
      "90",
      "equal"
    ],
    "explanation": "Tangent ⊥ radius (90°), and two tangents from one external point are equal."
  },
  {
    "id": "igcse-maths-q-4-2-4",
    "subtopicId": "igcse-maths-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which theorem states that the angle between a tangent and a chord equals the inscribed angle opposite that chord?",
    "options": [
      "Angle in a semicircle",
      "Alternate segment theorem",
      "Same segment theorem",
      "Cyclic quadrilateral theorem"
    ],
    "correctIndex": 1,
    "explanation": "This is the exact wording of the Alternate Segment Theorem."
  },
  {
    "id": "igcse-maths-q-4-2-5",
    "subtopicId": "igcse-maths-4-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each circle theorem to its result:",
    "pairs": [
      {
        "left": "Angle in a semicircle",
        "right": "90°"
      },
      {
        "left": "Opposite angles in cyclic quad",
        "right": "Sum to 180°"
      },
      {
        "left": "Angles in the same segment",
        "right": "Equal"
      },
      {
        "left": "Perpendicular from centre to chord",
        "right": "Bisects the chord"
      }
    ],
    "explanation": "Memorise both the angle fact and its exact wording."
  },
  {
    "id": "igcse-maths-q-5-1-1",
    "subtopicId": "igcse-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the TOTAL surface area of a solid hemisphere of radius r?",
    "options": [
      "2πr²",
      "3πr²",
      "4πr²",
      "(2/3)πr³"
    ],
    "correctIndex": 1,
    "explanation": "Curved surface (2πr²) + flat circular base (πr²) = 3πr²."
  },
  {
    "id": "igcse-maths-q-5-1-2",
    "subtopicId": "igcse-maths-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Calculate the volume of a cone with radius 3 cm and perpendicular height 10 cm, giving your answer to 1 decimal place (use π ≈ 3.142).",
    "explanation": "V = ⅓π(9)(10) = 30π ≈ 94.2 cm³.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "V = (1/3) × π × 3² × 10 = 30π = 94.2 cm³ (or 94.3 cm³).",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "30",
              "1/3",
              "0.33"
            ]
          ],
          "markDescription": "Uses 1/3 π r² h"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 94.25,
            "tolerance": 0.2
          },
          "markDescription": "Answer 94.2–94.3 cm³"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-5-1-3",
    "subtopicId": "igcse-maths-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the sector formulae for radius r and angle θ:",
    "segments": [
      "Arc length = (θ / 360) × ",
      ", and Sector area = (θ / 360) × ",
      "."
    ],
    "wordBank": [
      "2πr",
      "πr²",
      "πr",
      "4πr²"
    ],
    "answers": [
      "2πr",
      "πr²"
    ],
    "explanation": "Multiply circumference (2πr) for arc length and circle area (πr²) for sector area."
  },
  {
    "id": "igcse-maths-q-5-1-4",
    "subtopicId": "igcse-maths-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A cone has base radius 5 cm and vertical height 12 cm. What is its slant height l?",
    "options": [
      "17 cm",
      "13 cm",
      "7 cm",
      "11 cm"
    ],
    "correctIndex": 1,
    "explanation": "By Pythagoras: l = √(5² + 12²) = √169 = 13 cm."
  },
  {
    "id": "igcse-maths-q-5-1-5",
    "subtopicId": "igcse-maths-5-1",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each 3D solid to its volume formula:",
    "pairs": [
      {
        "left": "Cylinder",
        "right": "πr²h"
      },
      {
        "left": "Cone",
        "right": "⅓πr²h"
      },
      {
        "left": "Sphere",
        "right": "(4/3)πr³"
      },
      {
        "left": "Square pyramid",
        "right": "⅓ × base area × h"
      }
    ],
    "explanation": "Keep prism/cylinder vs pointed ⅓ formulae crystal clear."
  },
  {
    "id": "igcse-maths-q-6-1-1",
    "subtopicId": "igcse-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the exact value of cos 60°?",
    "options": [
      "√3 / 2",
      "1 / 2",
      "√2 / 2",
      "1"
    ],
    "correctIndex": 1,
    "explanation": "cos 60° = sin 30° = 1/2."
  },
  {
    "id": "igcse-maths-q-6-1-2",
    "subtopicId": "igcse-maths-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A cuboid measures 3 cm by 4 cm by 12 cm. Calculate the exact length of its 3D space diagonal.",
    "explanation": "√(9 + 16 + 144) = √169 = 13 cm.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Space diagonal = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "169",
              "12²",
              "12^2"
            ]
          ],
          "markDescription": "Applies 3D Pythagoras √(3²+4²+12²)"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 13,
            "tolerance": 0.01
          },
          "markDescription": "Length 13 cm"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-6-1-3",
    "subtopicId": "igcse-maths-6-1",
    "type": "diagram-label",
    "marks": 2,
    "prompt": "Match each side of a right-angled triangle relative to angle θ:",
    "diagram": "right-triangle-trig",
    "labels": [
      {
        "marker": "Longest side (opposite 90°)",
        "options": [
          "Hypotenuse",
          "Adjacent",
          "Opposite"
        ],
        "answer": "Hypotenuse"
      },
      {
        "marker": "Side next to θ",
        "options": [
          "Adjacent",
          "Opposite",
          "Hypotenuse"
        ],
        "answer": "Adjacent"
      }
    ],
    "explanation": "Hypotenuse is opposite 90°; Adjacent touches both θ and 90°."
  },
  {
    "id": "igcse-maths-q-6-1-4",
    "subtopicId": "igcse-maths-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the exact trig values:",
    "segments": [
      "tan 45° = ",
      " and sin 30° = ",
      "."
    ],
    "wordBank": [
      "1",
      "0.5",
      "0",
      "√3"
    ],
    "answers": [
      "1",
      "0.5"
    ],
    "explanation": "tan 45° = 1 and sin 30° = 1/2 = 0.5."
  },
  {
    "id": "igcse-maths-q-6-1-5",
    "subtopicId": "igcse-maths-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In a right-angled triangle, Opposite = 7 cm and Hypotenuse = 14 cm. What is angle θ?",
    "options": [
      "60°",
      "45°",
      "30°",
      "26.6°"
    ],
    "correctIndex": 2,
    "explanation": "sin θ = 7/14 = 0.5 → θ = sin⁻¹(0.5) = 30°."
  },
  {
    "id": "igcse-maths-q-6-2-1",
    "subtopicId": "igcse-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A triangle has sides 8 cm and 10 cm with an included angle of 30°. What is its exact area?",
    "options": [
      "40 cm²",
      "20 cm²",
      "34.6 cm²",
      "80 cm²"
    ],
    "correctIndex": 1,
    "explanation": "Area = ½ × 8 × 10 × sin 30° = 40 × 0.5 = 20 cm²."
  },
  {
    "id": "igcse-maths-q-6-2-2",
    "subtopicId": "igcse-maths-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Solve sin x = 0.5 for 0° ≤ x ≤ 360°, giving both solutions.",
    "explanation": "sin x is positive in quadrants 1 and 2: 30° and 180° − 30° = 150°.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "x = 30° and x = 180° − 30° = 150°.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 30,
            "tolerance": 0.1
          },
          "markDescription": "x = 30°"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 150,
            "tolerance": 0.1
          },
          "markDescription": "x = 150°"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-6-2-3",
    "subtopicId": "igcse-maths-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Choose the right non-right-angled rule:",
    "segments": [
      "When given three sides (SSS) to find an angle, use the ",
      " rule; when given an opposite side–angle pair, use the ",
      " rule."
    ],
    "wordBank": [
      "Cosine",
      "Sine",
      "Tangent",
      "Pythagoras"
    ],
    "answers": [
      "Cosine",
      "Sine"
    ],
    "explanation": "SSS and SAS require Cosine Rule; matching opposite pairs use Sine Rule."
  },
  {
    "id": "igcse-maths-q-6-2-4",
    "subtopicId": "igcse-maths-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In the Cosine Rule a² = b² + c² − 2bc cos A, if b = 5, c = 8, and A = 60°, what is a²?",
    "options": [
      "49",
      "89",
      "129",
      "69"
    ],
    "correctIndex": 0,
    "explanation": "a² = 25 + 64 − 2(5)(8)(0.5) = 89 − 40 = 49 (so a = 7)."
  },
  {
    "id": "igcse-maths-q-6-2-5",
    "subtopicId": "igcse-maths-6-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each trig identity/formula to its expression:",
    "pairs": [
      {
        "left": "Triangle area",
        "right": "½ab sin C"
      },
      {
        "left": "Sine symmetry",
        "right": "sin(180° − x) = sin x"
      },
      {
        "left": "Cosine symmetry",
        "right": "cos(360° − x) = cos x"
      },
      {
        "left": "Cosine angle form",
        "right": "(b² + c² − a²) / (2bc)"
      }
    ],
    "explanation": "Essential non-right triangle and trig-graph rules."
  },
  {
    "id": "igcse-maths-q-7-1-1",
    "subtopicId": "igcse-maths-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Find the magnitude of the column vector v = (−5, 12).",
    "explanation": "√(25 + 144) = 13.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "|v| = √((−5)² + 12²) = √(25 + 144) = √169 = 13.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "25"
            ],
            [
              "144",
              "169"
            ]
          ],
          "markDescription": "Applies Pythagoras √(25 + 144)"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 13,
            "tolerance": 0.01
          },
          "markDescription": "Magnitude 13"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-7-1-2",
    "subtopicId": "igcse-maths-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given AB = 2a + 6b and CD = 3a + 9b, which statement is ALWAYS true?",
    "options": [
      "AB is perpendicular to CD",
      "AB is parallel to CD and CD = 1.5 AB",
      "A, B, C, D are collinear",
      "AB = CD"
    ],
    "correctIndex": 1,
    "explanation": "CD = 1.5(2a + 6b) = 1.5 AB, proving parallelism and length ratio 1.5 (collinearity requires a shared point)."
  },
  {
    "id": "igcse-maths-q-7-1-3",
    "subtopicId": "igcse-maths-7-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the collinearity proof:",
    "segments": [
      "To prove A, B, and C are collinear, show AB is a ",
      " multiple of BC AND that they share the common point ",
      "."
    ],
    "wordBank": [
      "scalar",
      "B",
      "vector",
      "O"
    ],
    "answers": [
      "scalar",
      "B"
    ],
    "explanation": "Scalar multiple proves parallel direction; shared point B forces them onto one line."
  },
  {
    "id": "igcse-maths-q-7-1-4",
    "subtopicId": "igcse-maths-7-1",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each transformation to its mandatory description detail:",
    "pairs": [
      {
        "left": "Translation",
        "right": "Column vector"
      },
      {
        "left": "Reflection",
        "right": "Equation of mirror line"
      },
      {
        "left": "Rotation",
        "right": "Angle, direction & centre"
      },
      {
        "left": "Enlargement",
        "right": "Scale factor & centre"
      }
    ],
    "explanation": "Every single detail is required for full marks on transformation descriptions."
  },
  {
    "id": "igcse-maths-q-7-1-5",
    "subtopicId": "igcse-maths-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A point P(3, −2) is enlarged by scale factor −2 about the origin (0, 0). Where is P′?",
    "options": [
      "(6, −4)",
      "(−6, 4)",
      "(−1.5, 1)",
      "(−6, −4)"
    ],
    "correctIndex": 1,
    "explanation": "Multiply both coordinates by −2: (3 × −2, −2 × −2) = (−6, 4)."
  },
  {
    "id": "igcse-maths-q-8-1-1",
    "subtopicId": "igcse-maths-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A bag has 4 red and 6 blue balls. Two are drawn WITHOUT replacement. What is P(both red)?",
    "options": [
      "16/100",
      "12/90",
      "8/90",
      "4/9"
    ],
    "correctIndex": 1,
    "explanation": "P(R then R) = (4/10) × (3/9) = 12/90 = 2/15."
  },
  {
    "id": "igcse-maths-q-8-1-2",
    "subtopicId": "igcse-maths-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In a class of 25, 14 play football, 11 play tennis, and 5 play both. Find P(football | tennis).",
    "explanation": "Conditional probability uses n(tennis) = 11 as the denominator: 5/11.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Out of the 11 students who play tennis, 5 also play football, so P(football | tennis) = 5/11 (≈ 0.455).",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "11",
              "0.45"
            ]
          ],
          "markDescription": "Restricts denominator to 11"
        },
        {
          "id": "mp2",
          "requiredKeywordGroups": [
            [
              "5/11",
              "0.455",
              "0.45"
            ]
          ],
          "markDescription": "Correct ratio 5/11"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-8-1-3",
    "subtopicId": "igcse-maths-8-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the set notation meanings:",
    "segments": [
      "A ∩ B means A ",
      " B, while A ∪ B means A ",
      " B (or both)."
    ],
    "wordBank": [
      "AND",
      "OR",
      "NOT",
      "GIVEN"
    ],
    "answers": [
      "AND",
      "OR"
    ],
    "explanation": "∩ is intersection (AND) and ∪ is union (OR)."
  },
  {
    "id": "igcse-maths-q-8-1-4",
    "subtopicId": "igcse-maths-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "If P(rain on any day) = 0.3 independently, what is P(rain on at least one of two days)?",
    "options": [
      "0.60",
      "0.51",
      "0.49",
      "0.09"
    ],
    "correctIndex": 1,
    "explanation": "P(at least one) = 1 − P(no rain both days) = 1 − 0.7² = 1 − 0.49 = 0.51."
  },
  {
    "id": "igcse-maths-q-8-1-5",
    "subtopicId": "igcse-maths-8-1",
    "type": "multi-select",
    "marks": 2,
    "prompt": "Select the TWO correct probability tree rules:",
    "options": [
      "Multiply probabilities along branches for AND",
      "Add probabilities of separate winning paths for OR",
      "Add probabilities along branches for AND",
      "Branches from one node sum to 100"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Multiply along paths, add between mutually exclusive paths, and branches from a node sum to 1."
  },
  {
    "id": "igcse-maths-q-8-2-1",
    "subtopicId": "igcse-maths-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "On a histogram, a bar spans 10 ≤ x < 25 and has frequency 30. What is its frequency density?",
    "options": [
      "450",
      "2",
      "0.5",
      "15"
    ],
    "correctIndex": 1,
    "explanation": "Class width = 25 − 10 = 15; Frequency Density = 30 ÷ 15 = 2."
  },
  {
    "id": "igcse-maths-q-8-2-2",
    "subtopicId": "igcse-maths-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A box plot has Q₁ = 34, Median = 48, and Q₃ = 61. Calculate the interquartile range (IQR) and state what percentage of data lies inside the box.",
    "explanation": "IQR = Q₃ − Q₁ = 27, capturing the middle 50% of the distribution.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "IQR = 61 − 34 = 27, and 50% of the data lies inside the box between Q₁ and Q₃.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 27,
            "tolerance": 0.01
          },
          "markDescription": "IQR = 27"
        },
        {
          "id": "mp2",
          "requiredKeywordGroups": [
            [
              "50%",
              "50 percent",
              "half"
            ]
          ],
          "markDescription": "50% of data"
        }
      ]
    }
  },
  {
    "id": "igcse-maths-q-8-2-3",
    "subtopicId": "igcse-maths-8-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the cumulative frequency and histogram rules:",
    "segments": [
      "Cumulative frequency points are plotted at the ",
      " class boundary, and on a histogram bar ",
      " equals frequency."
    ],
    "wordBank": [
      "upper",
      "area",
      "midpoint",
      "height"
    ],
    "answers": [
      "upper",
      "area"
    ],
    "explanation": "Plot CF at upper boundaries; histogram bar area = FD × width = frequency."
  },
  {
    "id": "igcse-maths-q-8-2-4",
    "subtopicId": "igcse-maths-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is the mean calculated from a grouped frequency table only an ESTIMATE?",
    "options": [
      "Because total frequency is unknown",
      "Because exact individual data values inside each class are unknown",
      "Because midpoints are always rounded",
      "Because the mode is missing"
    ],
    "correctIndex": 1,
    "explanation": "Grouping loses individual raw values, so midpoints approximate each class."
  },
  {
    "id": "igcse-maths-q-8-2-5",
    "subtopicId": "igcse-maths-8-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each statistical measure to how it is read from n = 120 cumulative frequency:",
    "pairs": [
      {
        "left": "Lower quartile Q₁",
        "right": "Read across from CF = 30"
      },
      {
        "left": "Median Q₂",
        "right": "Read across from CF = 60"
      },
      {
        "left": "Upper quartile Q₃",
        "right": "Read across from CF = 90"
      },
      {
        "left": "IQR",
        "right": "Q₃ − Q₁"
      }
    ],
    "explanation": "Quartiles sit at 25%, 50%, and 75% of total frequency n."
  }
];

export const IGCSE_MATHS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "igcse-maths-fc-1-1-1",
    "subtopicId": "igcse-maths-1-1",
    "front": "Formula for compound interest / growth?",
    "backBullets": [
      "A = P × (1 + r/100)ⁿ (use 1 − r/100 for depreciation)."
    ]
  },
  {
    "id": "igcse-maths-fc-1-1-2",
    "subtopicId": "igcse-maths-1-1",
    "front": "How do you find an original price in a reverse percentage problem?",
    "backBullets": [
      "Divide the final value by its decimal multiplier (e.g. after 20% off, divide by 0.80)."
    ]
  },
  {
    "id": "igcse-maths-fc-1-1-3",
    "subtopicId": "igcse-maths-1-1",
    "front": "Formula for percentage change?",
    "backBullets": [
      "((New − Original) ÷ Original) × 100%."
    ]
  },
  {
    "id": "igcse-maths-fc-1-1-4",
    "subtopicId": "igcse-maths-1-1",
    "front": "How do you convert 0.727272... to a fraction?",
    "backBullets": [
      "Let x = 0.7272..., 100x = 72.7272..., subtract: 99x = 72 → x = 72/99 = 8/11."
    ]
  },
  {
    "id": "igcse-maths-fc-1-1-5",
    "subtopicId": "igcse-maths-1-1",
    "front": "Rule for dividing mixed-number fractions?",
    "backBullets": [
      "Convert to improper fractions first, then Keep–Change–Flip (multiply by the reciprocal)."
    ]
  },
  {
    "id": "igcse-maths-fc-1-2-1",
    "subtopicId": "igcse-maths-1-2",
    "front": "What does a⁻ⁿ mean?",
    "backBullets": [
      "The reciprocal: 1 / aⁿ."
    ]
  },
  {
    "id": "igcse-maths-fc-1-2-2",
    "subtopicId": "igcse-maths-1-2",
    "front": "How do you evaluate a^(m/n)?",
    "backBullets": [
      "Take the nth root first, then raise to the power m: (ⁿ√a)ᵐ."
    ]
  },
  {
    "id": "igcse-maths-fc-1-2-3",
    "subtopicId": "igcse-maths-1-2",
    "front": "How do you rationalise 1 / (a + √b)?",
    "backBullets": [
      "Multiply top and bottom by the conjugate (a − √b) so the denominator becomes a² − b."
    ]
  },
  {
    "id": "igcse-maths-fc-1-2-4",
    "subtopicId": "igcse-maths-1-2",
    "front": "Condition on A in standard form A × 10ⁿ?",
    "backBullets": [
      "1 ≤ A < 10 and n must be an integer."
    ]
  },
  {
    "id": "igcse-maths-fc-1-2-5",
    "subtopicId": "igcse-maths-1-2",
    "front": "How do you calculate the Upper Bound of a ÷ b?",
    "backBullets": [
      "UB(a) ÷ LB(b) — largest numerator divided by smallest denominator."
    ]
  },
  {
    "id": "igcse-maths-fc-1-3-1",
    "subtopicId": "igcse-maths-1-3",
    "front": "How do you combine A:B and B:C into A:B:C?",
    "backBullets": [
      "Scale both ratios so the shared B values equal their LCM."
    ]
  },
  {
    "id": "igcse-maths-fc-1-3-2",
    "subtopicId": "igcse-maths-1-3",
    "front": "Equation when y is directly proportional to x²?",
    "backBullets": [
      "y = kx² (find k using a given pair first)."
    ]
  },
  {
    "id": "igcse-maths-fc-1-3-3",
    "subtopicId": "igcse-maths-1-3",
    "front": "Equation when y is inversely proportional to √x?",
    "backBullets": [
      "y = k / √x."
    ]
  },
  {
    "id": "igcse-maths-fc-1-3-4",
    "subtopicId": "igcse-maths-1-3",
    "front": "Shape of an inverse proportion graph y = k/x (k > 0)?",
    "backBullets": [
      "A smooth reciprocal curve in quadrant 1 approaching both axes without touching them."
    ]
  },
  {
    "id": "igcse-maths-fc-1-3-5",
    "subtopicId": "igcse-maths-1-3",
    "front": "If y ∝ x² and x is tripled, what happens to y?",
    "backBullets": [
      "y is multiplied by 3² = 9."
    ]
  },
  {
    "id": "igcse-maths-fc-2-1-1",
    "subtopicId": "igcse-maths-2-1",
    "front": "State the quadratic formula.",
    "backBullets": [
      "x = (−b ± √(b² − 4ac)) / (2a) for ax² + bx + c = 0."
    ]
  },
  {
    "id": "igcse-maths-fc-2-1-2",
    "subtopicId": "igcse-maths-2-1",
    "front": "Difference of two squares identity?",
    "backBullets": [
      "a² − b² = (a + b)(a − b)."
    ]
  },
  {
    "id": "igcse-maths-fc-2-1-3",
    "subtopicId": "igcse-maths-2-1",
    "front": "Turning point of y = (x + p)² + q?",
    "backBullets": [
      "(−p, q), with line of symmetry x = −p."
    ]
  },
  {
    "id": "igcse-maths-fc-2-1-4",
    "subtopicId": "igcse-maths-2-1",
    "front": "What does b² − 4ac = 0 tell you about the parabola?",
    "backBullets": [
      "Exactly 1 repeated real root (the curve just touches the x-axis)."
    ]
  },
  {
    "id": "igcse-maths-fc-2-1-5",
    "subtopicId": "igcse-maths-2-1",
    "front": "First step in completing the square for x² + bx + c?",
    "backBullets": [
      "Write (x + b/2)² − (b/2)² + c."
    ]
  },
  {
    "id": "igcse-maths-fc-2-2-1",
    "subtopicId": "igcse-maths-2-2",
    "front": "Elimination sign rule for simultaneous equations?",
    "backBullets": [
      "SSS (Same Sign Subtract) and DSA (Different Sign Add)."
    ]
  },
  {
    "id": "igcse-maths-fc-2-2-2",
    "subtopicId": "igcse-maths-2-2",
    "front": "Method for one linear and one quadratic simultaneous equation?",
    "backBullets": [
      "Isolate y (or x) in the linear equation, substitute into the quadratic, solve, and pair both (x, y) solutions."
    ]
  },
  {
    "id": "igcse-maths-fc-2-2-3",
    "subtopicId": "igcse-maths-2-2",
    "front": "What happens when you multiply/divide an inequality by a negative number?",
    "backBullets": [
      "Reverse the direction of the inequality sign."
    ]
  },
  {
    "id": "igcse-maths-fc-2-2-4",
    "subtopicId": "igcse-maths-2-2",
    "front": "Solution shape for (x − 2)(x − 5) > 0?",
    "backBullets": [
      "Two outer tails: x < 2 or x > 5."
    ]
  },
  {
    "id": "igcse-maths-fc-2-2-5",
    "subtopicId": "igcse-maths-2-2",
    "front": "Solid vs dashed boundary lines in inequality regions?",
    "backBullets": [
      "Solid line for ≤ or ≥ (included); dashed line for < or > (excluded)."
    ]
  },
  {
    "id": "igcse-maths-fc-2-3-1",
    "subtopicId": "igcse-maths-2-3",
    "front": "How do you find the n² coefficient of a quadratic sequence?",
    "backBullets": [
      "Half the constant second difference: A = (second difference) ÷ 2."
    ]
  },
  {
    "id": "igcse-maths-fc-2-3-2",
    "subtopicId": "igcse-maths-2-3",
    "front": "nth term of a geometric sequence with first term a and ratio r?",
    "backBullets": [
      "uₙ = a × rⁿ⁻¹."
    ]
  },
  {
    "id": "igcse-maths-fc-2-3-3",
    "subtopicId": "igcse-maths-2-3",
    "front": "In which order do you apply fg(x)?",
    "backBullets": [
      "Right-to-left: evaluate g(x) first, then substitute into f."
    ]
  },
  {
    "id": "igcse-maths-fc-2-3-4",
    "subtopicId": "igcse-maths-2-3",
    "front": "Power rule for differentiation of y = axⁿ?",
    "backBullets": [
      "dy/dx = anxⁿ⁻¹ (and derivative of a constant is 0)."
    ]
  },
  {
    "id": "igcse-maths-fc-2-3-5",
    "subtopicId": "igcse-maths-2-3",
    "front": "How do you classify a stationary point using d²y/dx²?",
    "backBullets": [
      "d²y/dx² > 0 → minimum; d²y/dx² < 0 → maximum."
    ]
  },
  {
    "id": "igcse-maths-fc-3-1-1",
    "subtopicId": "igcse-maths-3-1",
    "front": "Gradient formula between (x₁, y₁) and (x₂, y₂)?",
    "backBullets": [
      "m = (y₂ − y₁) / (x₂ − x₁)."
    ]
  },
  {
    "id": "igcse-maths-fc-3-1-2",
    "subtopicId": "igcse-maths-3-1",
    "front": "Midpoint formula between (x₁, y₁) and (x₂, y₂)?",
    "backBullets": [
      "((x₁ + x₂)/2, (y₁ + y₂)/2)."
    ]
  },
  {
    "id": "igcse-maths-fc-3-1-3",
    "subtopicId": "igcse-maths-3-1",
    "front": "Distance formula between (x₁, y₁) and (x₂, y₂)?",
    "backBullets": [
      "√((x₂ − x₁)² + (y₂ − y₁)²)."
    ]
  },
  {
    "id": "igcse-maths-fc-3-1-4",
    "subtopicId": "igcse-maths-3-1",
    "front": "Condition for two lines to be perpendicular?",
    "backBullets": [
      "m₁ × m₂ = −1 (negative reciprocal gradients)."
    ]
  },
  {
    "id": "igcse-maths-fc-3-1-5",
    "subtopicId": "igcse-maths-3-1",
    "front": "Three steps to find a perpendicular bisector of AB?",
    "backBullets": [
      "1) Midpoint M of AB, 2) Gradient −1/m_AB, 3) Substitute M into y = mx + c."
    ]
  },
  {
    "id": "igcse-maths-fc-4-1-1",
    "subtopicId": "igcse-maths-4-1",
    "front": "Sum of interior angles of an n-sided polygon?",
    "backBullets": [
      "(n − 2) × 180° (and exterior angles always sum to 360°)."
    ]
  },
  {
    "id": "igcse-maths-fc-4-1-2",
    "subtopicId": "igcse-maths-4-1",
    "front": "Three rules for writing a bearing?",
    "backBullets": [
      "Measure from North, go clockwise, write 3 figures (e.g. 042°)."
    ]
  },
  {
    "id": "igcse-maths-fc-4-1-3",
    "subtopicId": "igcse-maths-4-1",
    "front": "Four valid triangle congruence conditions?",
    "backBullets": [
      "SSS, SAS, ASA (or AAS), and RHS."
    ]
  },
  {
    "id": "igcse-maths-fc-4-1-4",
    "subtopicId": "igcse-maths-4-1",
    "front": "How do Area and Volume scale for similar shapes with linear scale factor k?",
    "backBullets": [
      "Area scales by k²; Volume scales by k³."
    ]
  },
  {
    "id": "igcse-maths-fc-4-1-5",
    "subtopicId": "igcse-maths-4-1",
    "front": "Sum of co-interior (allied) angles between parallel lines?",
    "backBullets": [
      "180°."
    ]
  },
  {
    "id": "igcse-maths-fc-4-2-1",
    "subtopicId": "igcse-maths-4-2",
    "front": "Angle at centre vs angle at circumference theorem?",
    "backBullets": [
      "Angle at the centre is twice the angle at the circumference subtended by the same arc."
    ]
  },
  {
    "id": "igcse-maths-fc-4-2-2",
    "subtopicId": "igcse-maths-4-2",
    "front": "Angle subtended by a diameter at the circumference?",
    "backBullets": [
      "Always 90° (angle in a semicircle)."
    ]
  },
  {
    "id": "igcse-maths-fc-4-2-3",
    "subtopicId": "igcse-maths-4-2",
    "front": "Opposite angles in a cyclic quadrilateral?",
    "backBullets": [
      "Sum to 180° (all four vertices must lie on the circumference)."
    ]
  },
  {
    "id": "igcse-maths-fc-4-2-4",
    "subtopicId": "igcse-maths-4-2",
    "front": "Angle between a tangent and a radius at the point of contact?",
    "backBullets": [
      "90°."
    ]
  },
  {
    "id": "igcse-maths-fc-4-2-5",
    "subtopicId": "igcse-maths-4-2",
    "front": "State the Alternate Segment Theorem.",
    "backBullets": [
      "The angle between a tangent and a chord equals the angle subtended by that chord in the alternate segment."
    ]
  },
  {
    "id": "igcse-maths-fc-5-1-1",
    "subtopicId": "igcse-maths-5-1",
    "front": "Arc length and sector area formulae?",
    "backBullets": [
      "Arc = (θ/360) × 2πr; Sector area = (θ/360) × πr²."
    ]
  },
  {
    "id": "igcse-maths-fc-5-1-2",
    "subtopicId": "igcse-maths-5-1",
    "front": "Volume and curved surface area of a cone?",
    "backBullets": [
      "V = ⅓πr²h; Curved SA = πrl where l = √(r² + h²)."
    ]
  },
  {
    "id": "igcse-maths-fc-5-1-3",
    "subtopicId": "igcse-maths-5-1",
    "front": "Volume and surface area of a sphere?",
    "backBullets": [
      "V = (4/3)πr³; SA = 4πr²."
    ]
  },
  {
    "id": "igcse-maths-fc-5-1-4",
    "subtopicId": "igcse-maths-5-1",
    "front": "Total surface area of a solid hemisphere?",
    "backBullets": [
      "3πr² (2πr² curved dome + πr² flat circular base)."
    ]
  },
  {
    "id": "igcse-maths-fc-5-1-5",
    "subtopicId": "igcse-maths-5-1",
    "front": "Area of a trapezium?",
    "backBullets": [
      "½(a + b)h, where a and b are the parallel sides."
    ]
  },
  {
    "id": "igcse-maths-fc-6-1-1",
    "subtopicId": "igcse-maths-6-1",
    "front": "SOHCAHTOA definitions?",
    "backBullets": [
      "sin θ = O/H, cos θ = A/H, tan θ = O/A."
    ]
  },
  {
    "id": "igcse-maths-fc-6-1-2",
    "subtopicId": "igcse-maths-6-1",
    "front": "Exact values of sin 30°, sin 45°, sin 60°?",
    "backBullets": [
      "1/2, √2/2, √3/2."
    ]
  },
  {
    "id": "igcse-maths-fc-6-1-3",
    "subtopicId": "igcse-maths-6-1",
    "front": "Exact values of tan 30°, tan 45°, tan 60°?",
    "backBullets": [
      "√3/3 (or 1/√3), 1, √3."
    ]
  },
  {
    "id": "igcse-maths-fc-6-1-4",
    "subtopicId": "igcse-maths-6-1",
    "front": "3D space diagonal of a cuboid (l × w × h)?",
    "backBullets": [
      "d = √(l² + w² + h²)."
    ]
  },
  {
    "id": "igcse-maths-fc-6-1-5",
    "subtopicId": "igcse-maths-6-1",
    "front": "Relationship between angle of elevation and angle of depression?",
    "backBullets": [
      "They are equal alternate angles between two parallel horizontal lines."
    ]
  },
  {
    "id": "igcse-maths-fc-6-2-1",
    "subtopicId": "igcse-maths-6-2",
    "front": "State the Sine Rule.",
    "backBullets": [
      "a / sin A = b / sin B = c / sin C."
    ]
  },
  {
    "id": "igcse-maths-fc-6-2-2",
    "subtopicId": "igcse-maths-6-2",
    "front": "State the Cosine Rule for a side.",
    "backBullets": [
      "a² = b² + c² − 2bc cos A."
    ]
  },
  {
    "id": "igcse-maths-fc-6-2-3",
    "subtopicId": "igcse-maths-6-2",
    "front": "State the Cosine Rule rearranged for an angle.",
    "backBullets": [
      "cos A = (b² + c² − a²) / (2bc)."
    ]
  },
  {
    "id": "igcse-maths-fc-6-2-4",
    "subtopicId": "igcse-maths-6-2",
    "front": "Area of a non-right-angled triangle?",
    "backBullets": [
      "Area = ½ab sin C (C must be the included angle)."
    ]
  },
  {
    "id": "igcse-maths-fc-6-2-5",
    "subtopicId": "igcse-maths-6-2",
    "front": "Symmetry rules for sin x, cos x, tan x in 0°–360°?",
    "backBullets": [
      "sin(180° − x) = sin x; cos(360° − x) = cos x; tan(x + 180°) = tan x."
    ]
  },
  {
    "id": "igcse-maths-fc-7-1-1",
    "subtopicId": "igcse-maths-7-1",
    "front": "Magnitude of column vector (x, y)?",
    "backBullets": [
      "√(x² + y²)."
    ]
  },
  {
    "id": "igcse-maths-fc-7-1-2",
    "subtopicId": "igcse-maths-7-1",
    "front": "Vector AB in terms of position vectors a and b?",
    "backBullets": [
      "AB = b − a (End minus Start)."
    ]
  },
  {
    "id": "igcse-maths-fc-7-1-3",
    "subtopicId": "igcse-maths-7-1",
    "front": "Two things needed to prove A, B, C are collinear?",
    "backBullets": [
      "1) AB = k × BC (scalar multiple/parallel) AND 2) they share the common point B."
    ]
  },
  {
    "id": "igcse-maths-fc-7-1-4",
    "subtopicId": "igcse-maths-7-1",
    "front": "Mandatory details to describe a Rotation?",
    "backBullets": [
      "Word \"Rotation\", angle, direction (clockwise/anticlockwise), and centre (x, y)."
    ]
  },
  {
    "id": "igcse-maths-fc-7-1-5",
    "subtopicId": "igcse-maths-7-1",
    "front": "Effect of a negative enlargement scale factor k?",
    "backBullets": [
      "Scales lengths by |k| and inverts the image on the opposite side of the centre of enlargement."
    ]
  },
  {
    "id": "igcse-maths-fc-8-1-1",
    "subtopicId": "igcse-maths-8-1",
    "front": "Difference between A ∩ B and A ∪ B?",
    "backBullets": [
      "A ∩ B = intersection (AND); A ∪ B = union (OR, or both)."
    ]
  },
  {
    "id": "igcse-maths-fc-8-1-2",
    "subtopicId": "igcse-maths-8-1",
    "front": "Shortcut for P(at least one)?",
    "backBullets": [
      "1 − P(none)."
    ]
  },
  {
    "id": "igcse-maths-fc-8-1-3",
    "subtopicId": "igcse-maths-8-1",
    "front": "What changes on the second set of tree branches \"without replacement\"?",
    "backBullets": [
      "The denominator decreases by 1, and the numerator of the already-picked outcome decreases by 1."
    ]
  },
  {
    "id": "igcse-maths-fc-8-1-4",
    "subtopicId": "igcse-maths-8-1",
    "front": "Conditional probability formula P(A | B)?",
    "backBullets": [
      "P(A ∩ B) / P(B) — restrict denominator strictly to B."
    ]
  },
  {
    "id": "igcse-maths-fc-8-1-5",
    "subtopicId": "igcse-maths-8-1",
    "front": "Condition for independent events A and B?",
    "backBullets": [
      "P(A and B) = P(A) × P(B)."
    ]
  },
  {
    "id": "igcse-maths-fc-8-2-1",
    "subtopicId": "igcse-maths-8-2",
    "front": "Formula for Frequency Density on a histogram?",
    "backBullets": [
      "Frequency Density = Frequency ÷ Class Width (so Frequency = bar Area)."
    ]
  },
  {
    "id": "igcse-maths-fc-8-2-2",
    "subtopicId": "igcse-maths-8-2",
    "front": "Where do you plot points on a cumulative frequency graph?",
    "backBullets": [
      "At the UPPER class boundary of each interval (never the midpoint)."
    ]
  },
  {
    "id": "igcse-maths-fc-8-2-3",
    "subtopicId": "igcse-maths-8-2",
    "front": "Formula for Interquartile Range (IQR)?",
    "backBullets": [
      "IQR = Q₃ − Q₁ (spread of the middle 50% of data)."
    ]
  },
  {
    "id": "igcse-maths-fc-8-2-4",
    "subtopicId": "igcse-maths-8-2",
    "front": "Formula for estimated mean from grouped data?",
    "backBullets": [
      "Σ(f × class midpoint) ÷ Σf."
    ]
  },
  {
    "id": "igcse-maths-fc-8-2-5",
    "subtopicId": "igcse-maths-8-2",
    "front": "Five values plotted on a box plot?",
    "backBullets": [
      "Minimum, Lower Quartile (Q₁), Median (Q₂), Upper Quartile (Q₃), Maximum."
    ]
  }
];

export const IGCSE_MATHS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "igcse-maths-cs-1",
    "slug": "topic-1-number",
    "title": "1. Number Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Number",
    "summary": "Percentages, indices, surds, bounds, ratio & proportion.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "Compound: A = P(1 ± r/100)ⁿ",
          "Reverse: Original = Final ÷ Multiplier",
          "a⁻ⁿ = 1/aⁿ; a^(m/n) = (ⁿ√a)ᵐ",
          "UB(a/b) = UB(a)/LB(b)",
          "Direct: y = kxⁿ | Inverse: y = k/xⁿ"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Never add 20% to a 20%-off sale price",
          "Always take roots before powers in fractional indices"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Use LCM to combine A:B and B:C into A:B:C",
          "Write error intervals with ≤ on the left and < on the right"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-2",
    "slug": "topic-2-algebra-graphs",
    "title": "2. Algebra & Graphs Cheat Sheet",
    "topicNumber": 2,
    "topicName": "Algebra & Graphs",
    "summary": "Quadratics, simultaneous equations, inequalities, sequences, functions & differentiation.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "x = (−b ± √(b² − 4ac)) / (2a)",
          "y = (x + p)² + q → vertex (−p, q)",
          "Quadratic seq: A = ½(2nd diff)",
          "Geometric seq: uₙ = arⁿ⁻¹",
          "d/dx(axⁿ) = anxⁿ⁻¹; stationary at dy/dx = 0"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Put brackets around negative b² in the quadratic formula",
          "fg(x) applies g first, then f"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Sketch a quick parabola for every quadratic inequality",
          "Classify turning points with d²y/dx²"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-3",
    "slug": "topic-3-coordinate-geometry",
    "title": "3. Coordinate Geometry Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Coordinate Geometry",
    "summary": "Gradients, midpoints, lengths, parallel/perpendicular lines & bisectors.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "m = (y₂ − y₁)/(x₂ − x₁)",
          "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
          "d = √((x₂−x₁)² + (y₂−y₁)²)",
          "Perpendicular: m₁ × m₂ = −1"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Rearrange ax + by = c to y = mx + c before reading m",
          "Substitute midpoint M (not A or B) into a perpendicular bisector"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Leave gradients as exact fractions to flip cleanly for perpendiculars"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-4",
    "slug": "topic-4-geometry-circle-theorems",
    "title": "4. Geometry & Circle Theorems Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Geometry & Circle Theorems",
    "summary": "Polygons, bearings, congruence, similarity & all 7 circle theorems.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "Interior sum = (n − 2) × 180°",
          "Exterior = 360° / n",
          "Scale factors: Length k, Area k², Volume k³",
          "Cyclic quad opposite angles = 180°"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Never write Z-angles/F-angles — use alternate/corresponding",
          "Cyclic quad needs all 4 vertices on the circumference"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Look for two radii forming isosceles triangles on every circle diagram"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-5",
    "slug": "topic-5-mensuration",
    "title": "5. Mensuration Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Mensuration",
    "summary": "Arcs, sectors, prisms, cones, pyramids, spheres & frustums.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "Arc = (θ/360)2πr | Sector = (θ/360)πr²",
          "Cone V = ⅓πr²h | CSA = πrl",
          "Sphere V = (4/3)πr³ | SA = 4πr²",
          "Solid hemisphere total SA = 3πr²"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Sector perimeter needs + 2r",
          "Solid hemisphere total SA is 3πr², not 2πr²"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Keep π exact until the final calculator step"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-6",
    "slug": "topic-6-trigonometry",
    "title": "6. Trigonometry Cheat Sheet",
    "topicNumber": 6,
    "topicName": "Trigonometry",
    "summary": "Pythagoras, SOHCAHTOA, 3D trig, Sine Rule, Cosine Rule & Area.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "sin θ = O/H | cos θ = A/H | tan θ = O/A",
          "3D diagonal = √(l² + w² + h²)",
          "Sine: a/sin A = b/sin B",
          "Cosine: a² = b² + c² − 2bc cos A",
          "Area = ½ab sin C"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Check calculator is in DEG mode",
          "Watch for obtuse solutions (180° − θ) in Sine Rule"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Pair known → Sine Rule; SAS or SSS → Cosine Rule"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-7",
    "slug": "topic-7-vectors-transformations",
    "title": "7. Vectors & Transformations Cheat Sheet",
    "topicNumber": 7,
    "topicName": "Vectors & Transformations",
    "summary": "Column vectors, magnitude, collinearity proofs & 4 transformations.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "|v| = √(x² + y²)",
          "AB = b − a",
          "Parallel: PQ = k·RS",
          "Collinear: scalar multiple + shared point"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Never describe a single transformation as two moves",
          "Include direction AND centre for rotations"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Trace vector routes using simple arrow diagrams first"
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-cs-8",
    "slug": "topic-8-probability-statistics",
    "title": "8. Probability & Statistics Cheat Sheet",
    "topicNumber": 8,
    "topicName": "Probability & Statistics",
    "summary": "Venn diagrams, trees, conditional probability, CF curves, box plots & histograms.",
    "accentColor": "#2563EB",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "P(at least one) = 1 − P(none)",
          "P(A | B) = P(A ∩ B) / P(B)",
          "IQR = Q₃ − Q₁",
          "FD = Frequency ÷ Class Width"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Plot CF at UPPER boundaries, never midpoints",
          "Histogram frequency is BAR AREA, not height"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Compare both average (median) and spread (IQR) in context"
        ]
      }
    ]
  }
];

export const IGCSE_MATHS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "igcse-maths-ex-1-1",
    "subtopicId": "igcse-maths-1-1",
    "number": 1,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A car is bought for £18,000 and depreciates by 12% each year. Separately, a laptop costs £680 in a 15% off sale.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the value of the car after 3 years, correct to the nearest pound.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Multiplier = 0.88; 18000 × 0.88³ = 18000 × 0.681472 = £12,266.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "0.88"
                ]
              ],
              "markDescription": "Decay multiplier 0.88"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "0.88³",
                  "0.88^3",
                  "0.681"
                ]
              ],
              "markDescription": "Applies power 3"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 12266,
                "tolerance": 2
              },
              "markDescription": "Answer 12266"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Find the original price of the laptop before the 15% discount.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "680 ÷ 0.85 = £800.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "0.85",
                  "85%"
                ]
              ],
              "markDescription": "Divides by 0.85"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 800,
                "tolerance": 0.1
              },
              "markDescription": "Answer 800"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-1-2",
    "subtopicId": "igcse-maths-1-2",
    "number": 2,
    "stimulus": "[Cambridge IGCSE 0580 Paper 2 Style] An athlete runs d = 200 m (to the nearest 10 m) in t = 25 s (to the nearest second).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the upper bound of the athlete’s average speed (d ÷ t) to 2 decimal places.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "UB(d) = 205 m, LB(t) = 24.5 s; Max speed = 205 ÷ 24.5 = 8.37 m/s.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 205,
                "tolerance": 0.01
              },
              "markDescription": "UB(d) = 205"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 24.5,
                "tolerance": 0.01
              },
              "markDescription": "LB(t) = 24.5"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 8.37,
                "tolerance": 0.02
              },
              "markDescription": "Max speed 8.37 m/s"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Evaluate: Without a calculator, evaluate 8^(-2/3) as an exact fraction.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "³√8 = 2, 2² = 4, negative power gives 1/4 (0.25).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "2",
                  "4"
                ]
              ],
              "markDescription": "Cube root 2 and square 4"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "1/4",
                  "0.25"
                ]
              ],
              "markDescription": "Answer 1/4 or 0.25"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-1-3",
    "subtopicId": "igcse-maths-1-3",
    "number": 3,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] Force F is inversely proportional to the square of distance d. When d = 2, F = 50.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the formula linking F and d.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "F = k / d² → 50 = k / 4 → k = 200, so F = 200 / d².",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "d²",
                  "d^2"
                ]
              ],
              "markDescription": "Sets up k/d²"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 200,
                "tolerance": 0.01
              },
              "markDescription": "Finds k = 200"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate F when d = 5.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "F = 200 / 5² = 200 / 25 = 8.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "25",
                  "200"
                ]
              ],
              "markDescription": "Substitutes d = 5 into 200/d²"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 8,
                "tolerance": 0.01
              },
              "markDescription": "F = 8"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-2-1",
    "subtopicId": "igcse-maths-2-1",
    "number": 4,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] Consider the curve y = x² − 8x + 19.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Write x² − 8x + 19 in completed square form (x + p)² + q.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "(x − 4)² − 16 + 19 = (x − 4)² + 3.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "(x-4)",
                  "(x - 4)",
                  "(x − 4)"
                ]
              ],
              "markDescription": "(x − 4)²"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 3,
                "tolerance": 0.01
              },
              "markDescription": "+ 3"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "State the coordinates of the minimum turning point and explain why x² − 8x + 19 = 0 has no real roots.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Minimum turning point is (4, 3). Since the minimum y-value is 3 > 0 (or discriminant (−8)² − 4(1)(19) = −12 < 0), the curve never crosses the x-axis.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 4,
                "tolerance": 0.01
              },
              "markDescription": "x = 4"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 3,
                "tolerance": 0.01
              },
              "markDescription": "y = 3"
            },
            {
              "id": "mp3",
              "requiredKeywordGroups": [
                [
                  "above",
                  "never crosses",
                  "positive",
                  "discriminant",
                  "-12",
                  "−12",
                  "> 0",
                  "greater than 0"
                ]
              ],
              "markDescription": "Minimum > 0 or discriminant < 0"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-2-2",
    "subtopicId": "igcse-maths-2-2",
    "number": 5,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A straight line y = 2x − 1 intersects the curve y = x² − x − 1 at two points.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Solve: Find the two x-coordinates of intersection.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "x² − x − 1 = 2x − 1 → x² − 3x = 0 → x(x − 3) = 0, so x = 0 and x = 3.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "3x"
                ]
              ],
              "markDescription": "Forms x² − 3x = 0"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 0,
                "tolerance": 0.01
              },
              "markDescription": "x = 0"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 3,
                "tolerance": 0.01
              },
              "markDescription": "x = 3"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Find the corresponding y-coordinates to state both intersection points.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "When x = 0, y = −1 → (0, −1); when x = 3, y = 5 → (3, 5).",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": -1,
                "tolerance": 0.01
              },
              "markDescription": "y = -1"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 5,
                "tolerance": 0.01
              },
              "markDescription": "y = 5"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-2-3",
    "subtopicId": "igcse-maths-2-3",
    "number": 6,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A curve has equation y = x³ − 12x + 4.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find dy/dx and the x-coordinates of both stationary points.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "dy/dx = 3x² − 12 = 0 → x² = 4 → x = 2 and x = −2.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "3x"
                ],
                [
                  "12"
                ]
              ],
              "markDescription": "dy/dx = 3x² − 12"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 2,
                "tolerance": 0.01
              },
              "markDescription": "x = 2"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": -2,
                "tolerance": 0.01
              },
              "markDescription": "x = -2"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Determine: Use d²y/dx² to determine the nature of the stationary point at x = 2.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "d²y/dx² = 6x; at x = 2, d²y/dx² = 12 > 0, so it is a local minimum.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "6x",
                  "12"
                ]
              ],
              "markDescription": "d²y/dx² = 6x = 12 > 0"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "minimum",
                  "min"
                ]
              ],
              "markDescription": "Local minimum"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-3-1",
    "subtopicId": "igcse-maths-3-1",
    "number": 7,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] Points A(1, 3) and B(5, 11) lie on a coordinate grid.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the midpoint M and gradient of AB.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Midpoint M = (3, 7) and gradient m = (11 − 3)/(5 − 1) = 8/4 = 2.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "3"
                ],
                [
                  "7"
                ]
              ],
              "markDescription": "Midpoint (3, 7)"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 2,
                "tolerance": 0.01
              },
              "markDescription": "Gradient 2"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Find the equation of the perpendicular bisector of AB in the form y = mx + c.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Perpendicular gradient = −1/2 (−0.5). Using (3, 7): 7 = −1.5 + c → c = 8.5, so y = −0.5x + 8.5.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": -0.5,
                "tolerance": 0.01
              },
              "markDescription": "Perpendicular gradient −0.5"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 8.5,
                "tolerance": 0.01
              },
              "markDescription": "Intercept c = 8.5"
            },
            {
              "id": "mp3",
              "requiredKeywordGroups": [
                [
                  "y"
                ],
                [
                  "x"
                ]
              ],
              "markDescription": "Complete equation"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-4-1",
    "subtopicId": "igcse-maths-4-1",
    "number": 8,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] Two mathematically similar solids have surface areas 36 cm² and 100 cm².",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the linear scale factor from the smaller solid to the larger solid.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Area scale factor = 100/36, so linear scale factor k = √(100/36) = 10/6 = 5/3 (≈ 1.67).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "√",
                  "sqrt",
                  "10/6",
                  "5/3",
                  "1.67"
                ]
              ],
              "markDescription": "Takes square root of area ratio"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "5/3",
                  "1.67",
                  "1.66"
                ]
              ],
              "markDescription": "k = 5/3 or 1.67"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate: The smaller solid has volume 54 cm³. Calculate the volume of the larger solid.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Volume = 54 × (5/3)³ = 54 × 125/27 = 250 cm³.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "125/27",
                  "4.63",
                  "³",
                  "^3"
                ]
              ],
              "markDescription": "Cubes linear scale factor"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 250,
                "tolerance": 0.5
              },
              "markDescription": "Volume 250 cm³"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-4-2",
    "subtopicId": "igcse-maths-4-2",
    "number": 9,
    "stimulus": "[Cambridge IGCSE 0580 Paper 2 Style] A, B, and C lie on a circle with centre O. Angle AOC = 140°, and tangent PT touches the circle at A making ∠TAB = 62° with chord AB.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find acute angle ABC and state your reason.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "∠ABC = 140° ÷ 2 = 70° (angle at the centre is twice the angle at the circumference).",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 70,
                "tolerance": 0.1
              },
              "markDescription": "Angle 70°"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "centre",
                  "center"
                ],
                [
                  "twice",
                  "half",
                  "circumference"
                ]
              ],
              "markDescription": "Centre twice circumference reason"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Find angle ACB using the alternate segment theorem.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "∠ACB = 62° by the alternate segment theorem.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 62,
                "tolerance": 0.1
              },
              "markDescription": "Angle 62°"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "alternate segment"
                ]
              ],
              "markDescription": "Alternate segment theorem"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-5-1",
    "subtopicId": "igcse-maths-5-1",
    "number": 10,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A sector of a circle has radius 12 cm and sector angle 90°.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the exact perimeter of the sector in terms of π (or to 1 decimal place).",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Arc length = (90/360) × 2π(12) = 6π ≈ 18.85 cm. Perimeter = 6π + 24 ≈ 42.8 cm (or 42.9 cm).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "6π",
                  "6pi",
                  "18.8",
                  "18.9"
                ]
              ],
              "markDescription": "Arc length 6π or 18.85"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "24",
                  "12 + 12"
                ]
              ],
              "markDescription": "Adds two radii (+ 24)"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 42.85,
                "tolerance": 0.2
              },
              "markDescription": "Total perimeter 42.8–42.9 cm"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the area of the sector to 1 decimal place.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Area = (90/360) × π × 12² = 36π = 113.1 cm².",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "36π",
                  "36pi",
                  "113"
                ]
              ],
              "markDescription": "36π"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 113.1,
                "tolerance": 0.2
              },
              "markDescription": "113.1 cm²"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-6-1",
    "subtopicId": "igcse-maths-6-1",
    "number": 11,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A ladder of length 6.5 m leans against a vertical wall with its foot 2.5 m from the base of the wall.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate how high up the wall the ladder reaches.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "h = √(6.5² − 2.5²) = √(42.25 − 6.25) = √36 = 6 m.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "36",
                  "42.25"
                ]
              ],
              "markDescription": "Subtracts squares"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 6,
                "tolerance": 0.01
              },
              "markDescription": "Height 6 m"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the angle the ladder makes with the ground to 1 decimal place.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "cos θ = 2.5 / 6.5 → θ = cos⁻¹(2.5/6.5) = 67.4°.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "cos",
                  "sin",
                  "tan"
                ]
              ],
              "markDescription": "Uses cos/sin/tan inverse"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 67.4,
                "tolerance": 0.2
              },
              "markDescription": "Angle 67.4°"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-6-2",
    "subtopicId": "igcse-maths-6-2",
    "number": 12,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] In triangle ABC, AB = 8 cm, AC = 11 cm, and angle BAC = 52°.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate: Use the Cosine Rule to calculate side BC to 1 decimal place.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "BC² = 8² + 11² − 2(8)(11) cos 52° = 185 − 108.36 = 76.64 → BC = 8.8 cm.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "185",
                  "cos 52",
                  "cos52"
                ]
              ],
              "markDescription": "Substitutes into Cosine Rule"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 76.64,
                "tolerance": 0.5
              },
              "markDescription": "BC² ≈ 76.6"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 8.75,
                "tolerance": 0.1
              },
              "markDescription": "BC = 8.8 cm"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the area of triangle ABC to 1 decimal place.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Area = ½ × 8 × 11 × sin 52° = 44 × 0.7880 = 34.7 cm².",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "sin 52",
                  "sin52",
                  "44"
                ]
              ],
              "markDescription": "Uses ½ab sin C"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 34.7,
                "tolerance": 0.2
              },
              "markDescription": "Area 34.7 cm²"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-7-1",
    "subtopicId": "igcse-maths-7-1",
    "number": 13,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] In triangle OAB, OA = a, OB = b, M is the midpoint of OA, and N is the midpoint of OB.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Express AB and MN in terms of a and b.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "AB = b − a and MN = MO + ON = −½a + ½b = ½(b − a).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "b - a",
                  "b − a",
                  "b-a",
                  "-a + b"
                ]
              ],
              "markDescription": "AB = b − a"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "0.5",
                  "1/2",
                  "½"
                ]
              ],
              "markDescription": "MN = 1/2(b − a)"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Deduce: State TWO geometric facts about MN and AB deduced from your answer.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "MN is parallel to AB, and the length of MN is half the length of AB.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "parallel"
                ]
              ],
              "markDescription": "Parallel"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "half",
                  "1/2",
                  "0.5",
                  "twice"
                ]
              ],
              "markDescription": "Half the length"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-8-1",
    "subtopicId": "igcse-maths-8-1",
    "number": 14,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A box contains 5 green pens and 3 black pens. Two pens are chosen at random WITHOUT replacement.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the probability that both pens are green.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "P(G, G) = (5/8) × (4/7) = 20/56 = 5/14 (≈ 0.357).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "5/8"
                ],
                [
                  "4/7"
                ]
              ],
              "markDescription": "Multiplies 5/8 × 4/7"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "5/14",
                  "20/56",
                  "0.357"
                ]
              ],
              "markDescription": "Answer 5/14 or 20/56"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the probability that the two pens are DIFFERENT colours.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "P(G,B) + P(B,G) = (5/8 × 3/7) + (3/8 × 5/7) = 30/56 = 15/28 (≈ 0.536).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "15/56",
                  "30/56",
                  "15/28"
                ]
              ],
              "markDescription": "Includes both orders"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "15/28",
                  "30/56",
                  "0.536"
                ]
              ],
              "markDescription": "Final answer 15/28 or 0.536"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-maths-ex-8-2",
    "subtopicId": "igcse-maths-8-2",
    "number": 15,
    "stimulus": "[Cambridge IGCSE 0580 Paper 4 Style] A histogram shows journey times. The bar for 10 ≤ t < 30 has frequency density 2.4, and the bar for 30 ≤ t < 40 has frequency 35.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the frequency of the 10 ≤ t < 30 interval.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Class width = 20; Frequency = 2.4 × 20 = 48.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 20,
                "tolerance": 0.01
              },
              "markDescription": "Class width 20"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 48,
                "tolerance": 0.01
              },
              "markDescription": "Frequency 48"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the frequency density of the 30 ≤ t < 40 bar.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Class width = 10; Frequency density = 35 ÷ 10 = 3.5.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "10",
                  "35"
                ]
              ],
              "markDescription": "Divides by width 10"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 3.5,
                "tolerance": 0.01
              },
              "markDescription": "FD = 3.5"
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
    "title": "Cambridge IGCSE Mathematics (0580) Paper 2 (Extended) — May/June 2024",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0580/22",
    "durationMinutes": 90,
    "totalMarks": 70,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Evaluate 27^(-2/3) and rationalise 6/(√3 − 1).",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Find the upper bound of speed given distance = 200 m (nearest 10 m) and time = 25 s (nearest s).",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Solve 2x² + 5x − 3 = 0 and find the turning point of y = x² − 8x + 19.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2024-p4",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Cambridge IGCSE Mathematics (0580) Paper 4 (Extended) — May/June 2024",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0580/42",
    "durationMinutes": 150,
    "totalMarks": 130,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Calculate compound depreciation over 3 years and solve a reverse percentage sale problem.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Find the space diagonal and line-to-plane angle of a cuboid.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Complete a histogram table using Frequency Density = Frequency ÷ Class Width.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2023n-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Mathematics (0580) Paper 2 (Extended) — Oct/Nov 2023",
    "tier": "Extended",
    "series": "Oct/Nov",
    "paperCode": "0580/22",
    "durationMinutes": 90,
    "totalMarks": 70,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Prove algebraically that 0.3636... = 4/11.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Find the perpendicular bisector of A(1, 3) and B(5, 11).",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Shade A′ ∩ B on a Venn diagram and calculate P(A | B).",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2023n-p4",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Mathematics (0580) Paper 4 (Extended) — Oct/Nov 2023",
    "tier": "Extended",
    "series": "Oct/Nov",
    "paperCode": "0580/42",
    "durationMinutes": 150,
    "totalMarks": 130,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Solve y = x + 1 and x² + y² = 13 simultaneously.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Use the Sine Rule to find the obtuse angle in triangle PQR.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Prove that three points M, N, and P are collinear using vectors.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Mathematics (0580) Paper 2 (Extended) — May/June 2023",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0580/22",
    "durationMinutes": 90,
    "totalMarks": 70,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Find the nth term of the quadratic sequence 5, 11, 21, 35, ...",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Given f(x) = 3x − 2 and g(x) = x², evaluate fg(4) and find f⁻¹(x).",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Calculate the total surface area of a solid hemisphere of radius 5 cm in terms of π.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-maths-pp-2023-p4",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Mathematics (0580) Paper 4 (Extended) — May/June 2023",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0580/42",
    "durationMinutes": 150,
    "totalMarks": 130,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Use surface area ratio 36:100 to calculate the volume of a larger similar solid.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Differentiate y = x³ − 12x + 4 and classify its stationary points.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Draw a without-replacement probability tree and find P(different colours).",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Mathematics (0580) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  }
];

export const IGCSE_MATHS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "igcse-maths-kt-1",
    "term": "Compound Interest",
    "definition": "Interest calculated on both the initial principal and accumulated prior interest: A = P(1 + r/100)ⁿ.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-maths-kt-2",
    "term": "Reverse Percentage",
    "definition": "Finding an original 100% value by dividing the post-change value by its decimal multiplier.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-maths-kt-3",
    "term": "Surd",
    "definition": "An irrational root (e.g. √2, √5) kept in root form to preserve exactness.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-maths-kt-4",
    "term": "Upper & Lower Bounds",
    "definition": "The maximum and minimum values a rounded measurement could take (± half the rounding unit).",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-maths-kt-5",
    "term": "Inverse Proportion",
    "definition": "A relationship y = k/xⁿ where increasing one quantity decreases the other so their product stays constant.",
    "topicNumber": 1,
    "subtopicId": "igcse-maths-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-maths-kt-6",
    "term": "Discriminant",
    "definition": "The expression b² − 4ac in the quadratic formula, determining whether there are 2, 1, or 0 real roots.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-maths-kt-7",
    "term": "Completing the Square",
    "definition": "Rewriting x² + bx + c as (x + p)² + q to locate the turning point (−p, q) directly.",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-maths-kt-8",
    "term": "Composite Function",
    "definition": "Applying one function to the output of another, written fg(x) = f(g(x)) (right-to-left).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "igcse-maths-kt-9",
    "term": "Stationary Point",
    "definition": "A point on a curve where dy/dx = 0 (local maximum, local minimum, or point of inflection).",
    "topicNumber": 2,
    "subtopicId": "igcse-maths-2-3",
    "subtopicCode": "2.3"
  },
  {
    "id": "igcse-maths-kt-10",
    "term": "Perpendicular Bisector",
    "definition": "A line passing through the midpoint of a segment at 90° (gradient −1/m).",
    "topicNumber": 3,
    "subtopicId": "igcse-maths-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-maths-kt-11",
    "term": "Three-Figure Bearing",
    "definition": "An angle measured clockwise from North and written using three digits (000° to 360°).",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-maths-kt-12",
    "term": "Congruent Triangles",
    "definition": "Triangles identical in shape and size, proved by SSS, SAS, ASA, or RHS.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-maths-kt-13",
    "term": "Cyclic Quadrilateral",
    "definition": "A quadrilateral with all four vertices on a circle’s circumference; opposite angles sum to 180°.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-maths-kt-14",
    "term": "Alternate Segment Theorem",
    "definition": "The angle between a tangent and a chord equals the inscribed angle in the opposite segment.",
    "topicNumber": 4,
    "subtopicId": "igcse-maths-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-maths-kt-15",
    "term": "Frustum",
    "definition": "The solid formed when the top of a cone or pyramid is sliced off parallel to its base.",
    "topicNumber": 5,
    "subtopicId": "igcse-maths-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-maths-kt-16",
    "term": "Hypotenuse",
    "definition": "The longest side of a right-angled triangle, opposite the 90° angle.",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-maths-kt-17",
    "term": "Cosine Rule",
    "definition": "a² = b² + c² − 2bc cos A, used for SAS and SSS non-right-angled triangles.",
    "topicNumber": 6,
    "subtopicId": "igcse-maths-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-maths-kt-18",
    "term": "Collinear Points",
    "definition": "Three or more points lying on the same straight line (proved via scalar multiple + shared point).",
    "topicNumber": 7,
    "subtopicId": "igcse-maths-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "igcse-maths-kt-19",
    "term": "Conditional Probability",
    "definition": "The probability P(A | B) = P(A ∩ B) / P(B) of event A given event B has occurred.",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "igcse-maths-kt-20",
    "term": "Frequency Density",
    "definition": "Frequency ÷ Class Width; the height of a histogram bar so that bar area equals frequency.",
    "topicNumber": 8,
    "subtopicId": "igcse-maths-8-2",
    "subtopicCode": "8.2"
  }
];
