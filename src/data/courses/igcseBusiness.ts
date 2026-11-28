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
import {
  IGCSE_BUS_EXAM_PRACTICE_1_TO_3,
  IGCSE_BUS_FLASHCARDS_1_TO_3,
  IGCSE_BUS_NOTES_1_TO_3,
  IGCSE_BUS_QUIZZES_1_TO_3,
  IGCSE_BUS_TOPICS_1_TO_3,
} from './business/igcseUnits1to3';
import {
  IGCSE_BUS_EXAM_PRACTICE_UNIT_4,
  IGCSE_BUS_FLASHCARDS_UNIT_4,
  IGCSE_BUS_NOTES_UNIT_4,
  IGCSE_BUS_QUIZZES_UNIT_4,
  IGCSE_BUS_TOPICS_UNIT_4,
} from './business/igcseUnit4';
import {
  IGCSE_BUS_EXAM_PRACTICE_5_TO_6,
  IGCSE_BUS_FLASHCARDS_5_TO_6,
  IGCSE_BUS_NOTES_5_TO_6,
  IGCSE_BUS_QUIZZES_5_TO_6,
  IGCSE_BUS_TOPICS_5_TO_6,
} from './business/igcseUnits5to6';

export const IGCSE_BUSINESS_TOPICS: TopicDefinition[] = [
  ...IGCSE_BUS_TOPICS_1_TO_3,
  ...IGCSE_BUS_TOPICS_UNIT_4,
  ...IGCSE_BUS_TOPICS_5_TO_6,
];

export const IGCSE_BUSINESS_NOTES: Record<string, NoteLesson> = {
  ...IGCSE_BUS_NOTES_1_TO_3,
  ...IGCSE_BUS_NOTES_UNIT_4,
  ...IGCSE_BUS_NOTES_5_TO_6,
};

export const IGCSE_BUSINESS_QUIZZES: QuizQuestion[] = [
  ...IGCSE_BUS_QUIZZES_1_TO_3,
  ...IGCSE_BUS_QUIZZES_UNIT_4,
  ...IGCSE_BUS_QUIZZES_5_TO_6,
];

export const IGCSE_BUSINESS_FLASHCARDS: FlashcardItem[] = [
  ...IGCSE_BUS_FLASHCARDS_1_TO_3,
  ...IGCSE_BUS_FLASHCARDS_UNIT_4,
  ...IGCSE_BUS_FLASHCARDS_5_TO_6,
];

export const IGCSE_BUSINESS_EXAM_PRACTICE: ExamQuestionItem[] = [
  ...IGCSE_BUS_EXAM_PRACTICE_1_TO_3,
  ...IGCSE_BUS_EXAM_PRACTICE_UNIT_4,
  ...IGCSE_BUS_EXAM_PRACTICE_5_TO_6,
];

export const IGCSE_BUSINESS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-igbus-1',
    slug: 'unit-1-business-activity',
    title: 'Unit 1: Understanding Business Activity (1.1–1.5)',
    topicNumber: 1,
    topicName: 'Understanding Business Activity',
    summary: 'Factors of production, opportunity cost, added value, primary/secondary/tertiary sectors, growth, legal structures, objectives & stakeholders.',
    accentColor: '#2563eb',
    sections: [
      {
        heading: '1.1–1.5 Essential Rules & Formula',
        formula: 'Added Value = Selling Price − Cost of Bought-in Materials (NOT Profit!)',
        points: [
          'C-E-L-L factors of production; Primary (extract), Secondary (manufacture), Tertiary (services); de-industrialisation shifts jobs to tertiary.',
          'Unlimited liability (sole trader/partnership) vs Limited liability (Ltd private shares; Plc stock exchange — BOTH private sector!).',
          'Integration: Horizontal (rival), Vertical Backward (supplier) / Forward (retailer), Conglomerate (unrelated). Stakeholders conflict (wages vs dividends).',
        ],
      },
    ],
  },
  {
    id: 'cs-igbus-2',
    slug: 'unit-2-people',
    title: 'Unit 2: People in Business (2.1–2.4)',
    topicNumber: 2,
    topicName: 'People in Business',
    summary: 'Taylor, Maslow, Herzberg, financial & non-financial rewards, structure, leadership, trade unions, recruitment, training & communication.',
    accentColor: '#7c3aed',
    sections: [
      {
        heading: '2.1–2.4 Motivation, HR & Communication',
        points: [
          'Taylor (money/piece-rate), Maslow (5-level hierarchy), Herzberg (Hygiene prevents dissatisfaction; Motivators genuinely motivate).',
          'Job rotation (swap) ≠ Job enlargement (more same-level tasks) ≠ Job enrichment (higher responsibility). Delayering shortens chain of command.',
          'Job description (role duties) vs Person specification (applicant skills); Redundancy (job gone) ≠ Dismissal (worker fault); Two-way feedback kills barriers.',
        ],
      },
    ],
  },
  {
    id: 'cs-igbus-3',
    slug: 'unit-3-marketing',
    title: 'Unit 3: Marketing & The 4 Ps (3.1–3.7)',
    topicNumber: 3,
    topicName: 'Marketing',
    summary: 'Segmentation, niche vs mass, primary vs secondary research, Product Life Cycle, pricing & PED, distribution channels, promotion, e-commerce & foreign strategy.',
    accentColor: '#db2777',
    sections: [
      {
        heading: '3.1–3.7 Research, 4 Ps & Global Entry',
        formula: 'Elastic Demand: Price ↑ → Revenue ↓  |  Inelastic Demand: Price ↑ → Revenue ↑',
        points: [
          'Primary (tailored, up-to-date, pricey) vs Secondary (desk, fast, cheap, shared with rivals); Random vs Quota sampling.',
          'PLC stages: Dev → Intro → Growth → Maturity → Decline + Extension strategies (new flavours, markets, packaging).',
          'Price skimming (innovative launch) vs Penetration (low entry price); Direct channel keeps margin vs Wholesaler breaks bulk; Joint ventures ease foreign entry.',
        ],
      },
    ],
  },
  {
    id: 'cs-igbus-4',
    slug: 'unit-4-operations',
    title: 'Unit 4: Operations Management (4.1–4.4)',
    topicNumber: 4,
    topicName: 'Operations Management',
    summary: 'Job/batch/flow, labour productivity, Kaizen, JIT, automation, costs, economies of scale, break-even, QC/QA/TQM & location decisions.',
    accentColor: '#059669',
    sections: [
      {
        heading: '4.1–4.4 Production, Break-Even & Quality',
        formula: 'Break-Even = Fixed Costs ÷ (Price − VC)  |  Margin of Safety = Sales − BEP  |  Productivity = Output ÷ Staff',
        points: [
          'Kaizen = continuous small worker improvements; JIT = zero buffer stock (cuts storage cost, risks supplier-delay shutdown).',
          '5 Economies of Scale lower AVERAGE cost per unit; Diseconomies raise AC via poor communication/morale.',
          'Quality Control catches faults at end; Quality Assurance checks every stage; TQM = whole-workforce zero-defect culture.',
        ],
      },
    ],
  },
  {
    id: 'cs-igbus-5',
    slug: 'unit-5-finance',
    title: 'Unit 5: Financial Information & Decisions (5.1–5.5)',
    topicNumber: 5,
    topicName: 'Financial Information & Decisions',
    summary: 'Sources of finance, cash-flow forecasts, working capital, income statements, balance sheets & profitability/liquidity ratios.',
    accentColor: '#ea580c',
    sections: [
      {
        heading: '5.1–5.5 Finance, Cash Flow & Ratio Formulae',
        formula: 'Working Capital = CA − CL  |  Current = CA ÷ CL  |  Acid-Test = (CA − Inventory) ÷ CL',
        points: [
          'Net Cash Flow = Inflows − Outflows; Closing = Opening + Net Cash Flow (Credit sales ≠ immediate cash!).',
          'Income Statement: Revenue − Cost of Sales = Gross Profit − Expenses = Net Profit − Tax − Dividends = Retained Profit.',
          'GPM = (GP ÷ Rev) × 100 | NPM = (NP ÷ Rev) × 100 | ROCE = (NP ÷ Capital Employed) × 100.',
        ],
      },
    ],
  },
  {
    id: 'cs-igbus-6',
    slug: 'unit-6-external',
    title: 'Unit 6: External Influences & Global Economy (6.1–6.3)',
    topicNumber: 6,
    topicName: 'External Influences on Business Activity',
    summary: 'Business cycle, taxes, interest rates, externalities, pressure groups, ethics, tariffs/quotas, MNCs & SPICED/WPIDEC exchange rates.',
    accentColor: '#0284c7',
    sections: [
      {
        heading: '6.1–6.3 Macroeconomy, Ethics & International Trade',
        formula: 'SPICED: Strong Pound → Imports Cheaper, Exports Dearer  |  Social Cost = Private + External Cost',
        points: [
          'Higher interest rates raise business loan costs, reduce mortgage-holders’ spending, and appreciate the currency.',
          'Ethical sourcing raises short-term costs but avoids boycotts, motivates staff, and earns long-run brand premiums.',
          'Tariff = tax on imports; Quota = quantity cap; MNCs operate physical sites in >1 country (jobs/taxes vs local rivals & repatriated profits).',
        ],
      },
    ],
  },
];

export const IGCSE_BUSINESS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'igbus-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge IGCSE Business Studies (0450) Paper 1 — May/June 2024',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0450/12',
    durationMinutes: 90,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Explain two ways an entrepreneur can increase the added value of handmade bakery products.',
        marks: 4,
        markScheme: [
          'Premium branding/packaging enabling higher selling price (2 marks).',
          'Bulk purchasing ingredients to reduce bought-in material costs (2 marks).',
        ],
      },
    ],
  },
  {
    id: 'igbus-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge IGCSE Business Studies (0450) Paper 2 Case Study — May/June 2024',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0450/22',
    durationMinutes: 90,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Recommend whether the manufacturer should fund factory expansion with a bank loan or retained profit. Justify your answer.',
        marks: 12,
        markScheme: [
          'Analyses bank loan (keeps reserves intact, incurs interest/collateral) vs retained profit (interest-free, lowers dividend capacity).',
          'Supported evaluation in case context.',
        ],
      },
    ],
  },
  {
    id: 'igbus-pp-2023n-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Business Studies (0450) Paper 1 — Oct/Nov 2023',
    tier: 'Core',
    series: 'Oct/Nov',
    paperCode: '0450/12',
    durationMinutes: 90,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Calculate break-even output and margin of safety from given cost and price data.',
        marks: 4,
        markScheme: [
          'BEP = Fixed Costs ÷ (Selling Price − Variable Cost); MoS = Actual Sales − BEP.',
        ],
      },
    ],
  },
  {
    id: 'igbus-pp-2023n-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Business Studies (0450) Paper 2 Case Study — Oct/Nov 2023',
    tier: 'Core',
    series: 'Oct/Nov',
    paperCode: '0450/22',
    durationMinutes: 90,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Evaluate whether switching from Quality Control to Quality Assurance is best for a furniture factory.',
        marks: 12,
        markScheme: [
          'Weighs lower rework/scrap waste under QA against upfront employee training costs.',
        ],
      },
    ],
  },
  {
    id: 'igbus-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Business Studies (0450) Paper 1 — May/June 2023',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0450/12',
    durationMinutes: 90,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Explain how currency appreciation (SPICED) affects an exporting manufacturer.',
        marks: 4,
        markScheme: [
          'Exports become dearer abroad cutting sales; imported raw materials become cheaper lowering unit costs.',
        ],
      },
    ],
  },
  {
    id: 'igbus-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Business Studies (0450) Paper 2 Case Study — May/June 2023',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0450/22',
    durationMinutes: 90,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Consider whether a food brand should use free samples or social media advertising to launch a new snack.',
        marks: 12,
        markScheme: [
          'Balances trial persuasion for taste against low-cost targeted reach and budget limits.',
        ],
      },
    ],
  },
];

export const IGCSE_BUSINESS_KEY_TERMS: KeyTermEntry[] = [
  // Unit 1
  { id: 'igbus-kt-1', term: 'Opportunity Cost', definition: 'Next best alternative given up when choosing another item or investment.', topicNumber: 1, subtopicId: 'igcse-bus-1-1', subtopicCode: '1.1' },
  { id: 'igbus-kt-2', term: 'Added Value', definition: 'Difference between selling price and the cost of bought-in raw materials and components.', topicNumber: 1, subtopicId: 'igcse-bus-1-1', subtopicCode: '1.1' },
  { id: 'igbus-kt-3', term: 'Division of Labour', definition: 'Splitting production into separate tasks so each worker specialises in one job.', topicNumber: 1, subtopicId: 'igcse-bus-1-1', subtopicCode: '1.1' },
  { id: 'igbus-kt-4', term: 'De-industrialisation', definition: 'Decline in the importance of secondary manufacturing as an economy shifts to tertiary services.', topicNumber: 1, subtopicId: 'igcse-bus-1-2', subtopicCode: '1.2' },
  { id: 'igbus-kt-5', term: 'Mixed Economy', definition: 'Economy combining private-sector profit firms and public-sector state corporations.', topicNumber: 1, subtopicId: 'igcse-bus-1-2', subtopicCode: '1.2' },
  { id: 'igbus-kt-6', term: 'Entrepreneur', definition: 'Risk-taking individual who organises factors of production to start a new business.', topicNumber: 1, subtopicId: 'igcse-bus-1-3', subtopicCode: '1.3' },
  { id: 'igbus-kt-7', term: 'Horizontal Integration', definition: 'Merger or takeover between two firms in the same industry at the same production stage.', topicNumber: 1, subtopicId: 'igcse-bus-1-3', subtopicCode: '1.3' },
  { id: 'igbus-kt-8', term: 'Vertical Integration', definition: 'Merger with a supplier (backward) or customer/retailer (forward) in the same supply chain.', topicNumber: 1, subtopicId: 'igcse-bus-1-3', subtopicCode: '1.3' },
  { id: 'igbus-kt-9', term: 'Limited Liability', definition: 'Legal cap restricting shareholders’ financial loss strictly to the value of shares invested.', topicNumber: 1, subtopicId: 'igcse-bus-1-4', subtopicCode: '1.4' },
  { id: 'igbus-kt-10', term: 'Franchise', definition: 'Business licence allowing a franchisee to trade using an established brand name and model for a fee and royalties.', topicNumber: 1, subtopicId: 'igcse-bus-1-4', subtopicCode: '1.4' },
  { id: 'igbus-kt-11', term: 'Joint Venture', definition: 'Two or more businesses agreeing to start a new project together, sharing capital, risks, and profits.', topicNumber: 1, subtopicId: 'igcse-bus-1-4', subtopicCode: '1.4' },
  { id: 'igbus-kt-12', term: 'Stakeholder', definition: 'Any person or group with a direct interest in the performance and activities of a business.', topicNumber: 1, subtopicId: 'igcse-bus-1-5', subtopicCode: '1.5' },
  { id: 'igbus-kt-13', term: 'Social Enterprise', definition: 'Business with social/environmental objectives that reinvests profits back into its mission.', topicNumber: 1, subtopicId: 'igcse-bus-1-5', subtopicCode: '1.5' },
  // Unit 2
  { id: 'igbus-kt-14', term: 'Hygiene Factors', definition: 'Herzberg’s workplace essentials (pay, conditions, policy) that prevent dissatisfaction without actively motivating.', topicNumber: 2, subtopicId: 'igcse-bus-2-1', subtopicCode: '2.1' },
  { id: 'igbus-kt-15', term: 'Job Enrichment', definition: 'Redesigning jobs to include higher-level responsibility, challenge, and decision-making.', topicNumber: 2, subtopicId: 'igcse-bus-2-1', subtopicCode: '2.1' },
  { id: 'igbus-kt-16', term: 'Piece-Rate Pay', definition: 'Financial reward paying workers a fixed amount for each unit produced.', topicNumber: 2, subtopicId: 'igcse-bus-2-1', subtopicCode: '2.1' },
  { id: 'igbus-kt-17', term: 'Chain of Command', definition: 'Formal hierarchy pathway through which instructions travel from senior directors to workers.', topicNumber: 2, subtopicId: 'igcse-bus-2-2', subtopicCode: '2.2' },
  { id: 'igbus-kt-18', term: 'Span of Control', definition: 'Number of subordinates reporting directly to a single line manager.', topicNumber: 2, subtopicId: 'igcse-bus-2-2', subtopicCode: '2.2' },
  { id: 'igbus-kt-19', term: 'Delegation', definition: 'Passing authority for a task to a subordinate while retaining overall accountability.', topicNumber: 2, subtopicId: 'igcse-bus-2-2', subtopicCode: '2.2' },
  { id: 'igbus-kt-20', term: 'Trade Union', definition: 'Worker organisation bargaining collectively for higher wages, safer conditions, and job security.', topicNumber: 2, subtopicId: 'igcse-bus-2-2', subtopicCode: '2.2' },
  { id: 'igbus-kt-21', term: 'Job Description', definition: 'Document outlining the main duties, responsibilities, and reporting line of a job.', topicNumber: 2, subtopicId: 'igcse-bus-2-3', subtopicCode: '2.3' },
  { id: 'igbus-kt-22', term: 'Person Specification', definition: 'Document listing the qualifications, skills, and experience needed by an applicant.', topicNumber: 2, subtopicId: 'igcse-bus-2-3', subtopicCode: '2.3' },
  { id: 'igbus-kt-23', term: 'Redundancy', definition: 'Ending employment because the job role is no longer required — not the worker’s fault.', topicNumber: 2, subtopicId: 'igcse-bus-2-3', subtopicCode: '2.3' },
  { id: 'igbus-kt-24', term: 'Effective Communication', definition: 'Message sent, received, understood, and acted upon with feedback confirming understanding.', topicNumber: 2, subtopicId: 'igcse-bus-2-4', subtopicCode: '2.4' },
  // Unit 3
  { id: 'igbus-kt-25', term: 'Market Segmentation', definition: 'Dividing a whole market into identifiable subgroups sharing similar consumer characteristics.', topicNumber: 3, subtopicId: 'igcse-bus-3-1', subtopicCode: '3.1' },
  { id: 'igbus-kt-26', term: 'Niche Market', definition: 'Small, specialised market segment with tailored needs and lower rivalry.', topicNumber: 3, subtopicId: 'igcse-bus-3-1', subtopicCode: '3.1' },
  { id: 'igbus-kt-27', term: 'Primary Research', definition: 'Collecting original first-hand market data directly from target customers.', topicNumber: 3, subtopicId: 'igcse-bus-3-2', subtopicCode: '3.2' },
  { id: 'igbus-kt-28', term: 'Secondary Research', definition: 'Analysing existing desk data previously collected by governments, agencies, or internal records.', topicNumber: 3, subtopicId: 'igcse-bus-3-2', subtopicCode: '3.2' },
  { id: 'igbus-kt-29', term: 'Quota Sampling', definition: 'Selecting fixed numbers of respondents matching target demographic proportions.', topicNumber: 3, subtopicId: 'igcse-bus-3-2', subtopicCode: '3.2' },
  { id: 'igbus-kt-30', term: 'Product Life Cycle', definition: 'Stages a product passes through from Development and Introduction to Growth, Maturity, and Decline.', topicNumber: 3, subtopicId: 'igcse-bus-3-3', subtopicCode: '3.3' },
  { id: 'igbus-kt-31', term: 'Extension Strategy', definition: 'Action taken during Maturity to prolong a product’s profitable life and delay Decline.', topicNumber: 3, subtopicId: 'igcse-bus-3-3', subtopicCode: '3.3' },
  { id: 'igbus-kt-32', term: 'Price Skimming', definition: 'Setting a high initial price for an innovative unique product to recover R&D costs fast.', topicNumber: 3, subtopicId: 'igcse-bus-3-4', subtopicCode: '3.4' },
  { id: 'igbus-kt-33', term: 'Penetration Pricing', definition: 'Setting a low launch price to win market share rapidly in a competitive market.', topicNumber: 3, subtopicId: 'igcse-bus-3-4', subtopicCode: '3.4' },
  { id: 'igbus-kt-34', term: 'Price Elasticity of Demand', definition: 'Responsiveness of quantity demanded to a percentage change in selling price.', topicNumber: 3, subtopicId: 'igcse-bus-3-4', subtopicCode: '3.4' },
  { id: 'igbus-kt-35', term: 'Channel of Distribution', definition: 'Route by which a product travels from producer to final consumer.', topicNumber: 3, subtopicId: 'igcse-bus-3-5', subtopicCode: '3.5' },
  { id: 'igbus-kt-36', term: 'Sales Promotion', definition: 'Short-term incentives (free samples, vouchers, BOGOF) designed to trigger immediate purchases.', topicNumber: 3, subtopicId: 'igcse-bus-3-6', subtopicCode: '3.6' },
  { id: 'igbus-kt-37', term: 'E-Commerce', definition: 'Buying and selling goods and services electronically over the internet.', topicNumber: 3, subtopicId: 'igcse-bus-3-6', subtopicCode: '3.6' },
  { id: 'igbus-kt-38', term: 'Marketing Strategy', definition: 'Coordinated plan aligning all 4 Ps to achieve a specific marketing objective.', topicNumber: 3, subtopicId: 'igcse-bus-3-7', subtopicCode: '3.7' },
  // Unit 4
  { id: 'igbus-kt-39', term: 'Labour Productivity', definition: 'Total output produced divided by the number of employees.', topicNumber: 4, subtopicId: 'igcse-bus-4-1', subtopicCode: '4.1' },
  { id: 'igbus-kt-40', term: 'Kaizen', definition: 'Continuous small workplace improvements suggested by workers to eliminate waste.', topicNumber: 4, subtopicId: 'igcse-bus-4-1', subtopicCode: '4.1' },
  { id: 'igbus-kt-41', term: 'Just-in-Time (JIT)', definition: 'Stock-control system delivering inputs right before production to hold near-zero buffer stock.', topicNumber: 4, subtopicId: 'igcse-bus-4-1', subtopicCode: '4.1' },
  { id: 'igbus-kt-42', term: 'Flow Production', definition: 'Continuous large-scale production of identical standardised items on an assembly line.', topicNumber: 4, subtopicId: 'igcse-bus-4-1', subtopicCode: '4.1' },
  { id: 'igbus-kt-43', term: 'Economies of Scale', definition: 'Factors reducing average cost per unit as a business increases production scale.', topicNumber: 4, subtopicId: 'igcse-bus-4-2', subtopicCode: '4.2' },
  { id: 'igbus-kt-44', term: 'Diseconomies of Scale', definition: 'Rising average costs when excessive firm size causes poor communication and low morale.', topicNumber: 4, subtopicId: 'igcse-bus-4-2', subtopicCode: '4.2' },
  { id: 'igbus-kt-45', term: 'Break-Even Output', definition: 'Sales volume where Total Revenue equals Total Cost (zero profit, zero loss).', topicNumber: 4, subtopicId: 'igcse-bus-4-2', subtopicCode: '4.2' },
  { id: 'igbus-kt-46', term: 'Margin of Safety', definition: 'Amount by which actual or forecast sales exceed break-even output.', topicNumber: 4, subtopicId: 'igcse-bus-4-2', subtopicCode: '4.2' },
  { id: 'igbus-kt-47', term: 'Quality Control', definition: 'Inspecting finished goods at the end of production to detect faulty products.', topicNumber: 4, subtopicId: 'igcse-bus-4-3', subtopicCode: '4.3' },
  { id: 'igbus-kt-48', term: 'Quality Assurance', definition: 'Checking quality standards throughout every stage of production to prevent defects.', topicNumber: 4, subtopicId: 'igcse-bus-4-3', subtopicCode: '4.3' },
  { id: 'igbus-kt-49', term: 'Total Quality Management (TQM)', definition: 'Organisation-wide quality culture where every worker takes ownership of zero defects.', topicNumber: 4, subtopicId: 'igcse-bus-4-3', subtopicCode: '4.3' },
  { id: 'igbus-kt-50', term: 'Infrastructure', definition: 'Essential roads, ports, electricity, water, and broadband supporting business sites.', topicNumber: 4, subtopicId: 'igcse-bus-4-4', subtopicCode: '4.4' },
  // Unit 5
  { id: 'igbus-kt-51', term: 'Retained Profit', definition: 'Internal interest-free profit reinvested in the firm after tax and dividends.', topicNumber: 5, subtopicId: 'igcse-bus-5-1', subtopicCode: '5.1' },
  { id: 'igbus-kt-52', term: 'Bank Overdraft', definition: 'Flexible short-term borrowing letting a business draw below zero up to an agreed limit.', topicNumber: 5, subtopicId: 'igcse-bus-5-1', subtopicCode: '5.1' },
  { id: 'igbus-kt-53', term: 'Microfinance', definition: 'Small loans given to low-income entrepreneurs unable to access traditional banks.', topicNumber: 5, subtopicId: 'igcse-bus-5-1', subtopicCode: '5.1' },
  { id: 'igbus-kt-54', term: 'Working Capital', definition: 'Current Assets minus Current Liabilities; liquid capital funding daily bills.', topicNumber: 5, subtopicId: 'igcse-bus-5-2', subtopicCode: '5.2' },
  { id: 'igbus-kt-55', term: 'Insolvency', definition: 'Running out of cash to pay short-term debts as they fall due.', topicNumber: 5, subtopicId: 'igcse-bus-5-2', subtopicCode: '5.2' },
  { id: 'igbus-kt-56', term: 'Gross Profit', definition: 'Sales revenue minus direct Cost of Sales.', topicNumber: 5, subtopicId: 'igcse-bus-5-3', subtopicCode: '5.3' },
  { id: 'igbus-kt-57', term: 'Net Profit', definition: 'Gross Profit minus all indirect operating expenses.', topicNumber: 5, subtopicId: 'igcse-bus-5-3', subtopicCode: '5.3' },
  { id: 'igbus-kt-58', term: 'Non-Current Assets', definition: 'Long-term assets owned for more than 12 months (buildings, machinery, vehicles).', topicNumber: 5, subtopicId: 'igcse-bus-5-4', subtopicCode: '5.4' },
  { id: 'igbus-kt-59', term: 'Capital Employed', definition: 'Total long-term capital invested: Shareholders’ Equity plus Non-Current Liabilities.', topicNumber: 5, subtopicId: 'igcse-bus-5-4', subtopicCode: '5.4' },
  { id: 'igbus-kt-60', term: 'ROCE', definition: 'Return on Capital Employed = (Net Profit ÷ Capital Employed) × 100.', topicNumber: 5, subtopicId: 'igcse-bus-5-5', subtopicCode: '5.5' },
  { id: 'igbus-kt-61', term: 'Acid-Test Ratio', definition: '(Current Assets − Inventory) ÷ Current Liabilities; strict short-term liquidity measure.', topicNumber: 5, subtopicId: 'igcse-bus-5-5', subtopicCode: '5.5' },
  // Unit 6
  { id: 'igbus-kt-62', term: 'Business Cycle', definition: 'Cyclical swings in GDP across Growth, Boom, Recession, and Slump.', topicNumber: 6, subtopicId: 'igcse-bus-6-1', subtopicCode: '6.1' },
  { id: 'igbus-kt-63', term: 'Disposable Income', definition: 'Household income remaining for spending or saving after direct income taxes.', topicNumber: 6, subtopicId: 'igcse-bus-6-1', subtopicCode: '6.1' },
  { id: 'igbus-kt-64', term: 'Fiscal Policy', definition: 'Government adjustments to taxes and public expenditure.', topicNumber: 6, subtopicId: 'igcse-bus-6-1', subtopicCode: '6.1' },
  { id: 'igbus-kt-65', term: 'Monetary Policy', definition: 'Central bank control of interest rates and the money supply.', topicNumber: 6, subtopicId: 'igcse-bus-6-1', subtopicCode: '6.1' },
  { id: 'igbus-kt-66', term: 'External Cost', definition: 'Unpaid negative side effect imposed on society by business activity (e.g. pollution).', topicNumber: 6, subtopicId: 'igcse-bus-6-2', subtopicCode: '6.2' },
  { id: 'igbus-kt-67', term: 'Sustainable Development', definition: 'Production meeting present needs without depleting environmental resources for future generations.', topicNumber: 6, subtopicId: 'igcse-bus-6-2', subtopicCode: '6.2' },
  { id: 'igbus-kt-68', term: 'Pressure Group', definition: 'Campaigning organisation influencing business behaviour via boycotts and lobbying.', topicNumber: 6, subtopicId: 'igcse-bus-6-2', subtopicCode: '6.2' },
  { id: 'igbus-kt-69', term: 'Import Tariff', definition: 'Tax placed on imported goods to raise their domestic price.', topicNumber: 6, subtopicId: 'igcse-bus-6-3', subtopicCode: '6.3' },
  { id: 'igbus-kt-70', term: 'Import Quota', definition: 'Physical limit on the maximum quantity of a foreign good permitted to enter a country.', topicNumber: 6, subtopicId: 'igcse-bus-6-3', subtopicCode: '6.3' },
  { id: 'igbus-kt-71', term: 'Multinational Company (MNC)', definition: 'Business owning physical factories or service outlets in more than one country.', topicNumber: 6, subtopicId: 'igcse-bus-6-3', subtopicCode: '6.3' },
  { id: 'igbus-kt-72', term: 'Exchange Rate Appreciation', definition: 'Rise in a currency’s value making imports cheaper and exports dearer (SPICED).', topicNumber: 6, subtopicId: 'igcse-bus-6-3', subtopicCode: '6.3' },
];
