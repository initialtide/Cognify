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
  ALEVEL_BUSINESS_EXAM_PRACTICE_1_TO_3,
  ALEVEL_BUSINESS_FLASHCARDS_1_TO_3,
  ALEVEL_BUSINESS_NOTES_1_TO_3,
  ALEVEL_BUSINESS_QUIZZES_1_TO_3,
  ALEVEL_BUSINESS_TOPICS_1_TO_3,
} from './business/alevelUnits1to3';
import {
  ALEVEL_BUSINESS_EXAM_PRACTICE_4_TO_6,
  ALEVEL_BUSINESS_FLASHCARDS_4_TO_6,
  ALEVEL_BUSINESS_NOTES_4_TO_6,
  ALEVEL_BUSINESS_QUIZZES_4_TO_6,
  ALEVEL_BUSINESS_TOPICS_4_TO_6,
} from './business/alevelUnits4to6';

export const ALEVEL_BUSINESS_TOPICS: TopicDefinition[] = [
  ...ALEVEL_BUSINESS_TOPICS_1_TO_3,
  ...ALEVEL_BUSINESS_TOPICS_4_TO_6,
];

export const ALEVEL_BUSINESS_NOTES: Record<string, NoteLesson> = {
  ...ALEVEL_BUSINESS_NOTES_1_TO_3,
  ...ALEVEL_BUSINESS_NOTES_4_TO_6,
};

export const ALEVEL_BUSINESS_QUIZZES: QuizQuestion[] = [
  ...ALEVEL_BUSINESS_QUIZZES_1_TO_3,
  ...ALEVEL_BUSINESS_QUIZZES_4_TO_6,
];

export const ALEVEL_BUSINESS_FLASHCARDS: FlashcardItem[] = [
  ...ALEVEL_BUSINESS_FLASHCARDS_1_TO_3,
  ...ALEVEL_BUSINESS_FLASHCARDS_4_TO_6,
];

export const ALEVEL_BUSINESS_EXAM_PRACTICE: ExamQuestionItem[] = [
  ...ALEVEL_BUSINESS_EXAM_PRACTICE_1_TO_3,
  ...ALEVEL_BUSINESS_EXAM_PRACTICE_4_TO_6,
];

export const ALEVEL_BUSINESS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-albus-1',
    slug: 'unit-1-strategy-objectives-structure',
    title: 'Unit 1: Business Strategy, Governance & Analytical Frameworks',
    topicNumber: 1,
    topicName: 'Business Strategy, Structure & Corporate Objectives',
    summary: 'Mission statements, SMART corporate objectives, Mendelow stakeholder mapping, corporate governance, SWOT, PESTLE, Porter’s Five Forces, and Ansoff’s Matrix.',
    accentColor: '#2563eb',
    sections: [
      {
        heading: '1.1–1.3 Core Strategic Tools',
        formula: 'Strategy Hierarchy: Mission → Corporate Objectives → Functional Objectives → Tactics',
        points: [
          'Ansoff Matrix risk ladder: Market Penetration (lowest) → Product / Market Development → Diversification (highest risk).',
          'Porter’s Five Forces diagnoses structural industry profitability: rivalry, buyer power, supplier power, substitutes, new entrants.',
          'Corporate governance separates ownership (shareholders) from control (directors) to curb principal-agent short-termism.',
        ],
      },
    ],
  },
  {
    id: 'cs-albus-2',
    slug: 'unit-2-people-leadership-hrm',
    title: 'Unit 2: Organisational Design, Leadership & HR Analytics',
    topicNumber: 2,
    topicName: 'People, Leadership & Human Resource Strategy',
    summary: 'Matrix vs hierarchical structures, centralisation, Blake Mouton, Tannenbaum-Schmidt, Maslow/Herzberg/Vroom/Mayo, Hard vs Soft HRM, and HR metrics.',
    accentColor: '#7c3aed',
    sections: [
      {
        heading: '2.1–2.3 People & HR Formulae',
        formula: 'Labour Turnover = (Leavers ÷ Avg Staff) × 100  |  Absenteeism = (Days Lost ÷ Total Work Days) × 100',
        points: [
          'Hard HRM treats workers as a variable cost to minimise; Soft HRM invests in training, empowerment, and retention as a competitive asset.',
          'Vroom’s Expectancy Theory: Motivation = Expectancy × Instrumentality × Valence (zero in any factor breaks motivation).',
          'Matrix structures boost cross-functional innovation for projects but risk dual-boss conflict and slow accountability.',
        ],
      },
    ],
  },
  {
    id: 'cs-albus-3',
    slug: 'unit-3-marketing-analytics-portfolio',
    title: 'Unit 3: Marketing Analytics, Boston Matrix & Global Strategy',
    topicNumber: 3,
    topicName: 'Marketing Analytics, Portfolio & Global Marketing',
    summary: 'PED & YED pricing strategy, moving-average sales forecasting, Boston Matrix, Product Life Cycle, 7 Ps, omni-channel digital marketing, and foreign market entry.',
    accentColor: '#db2777',
    sections: [
      {
        heading: '3.1–3.3 Elasticities & Portfolio Strategy',
        formula: 'PED = %ΔQd ÷ %ΔP  |  YED = %ΔQd ÷ %ΔY  |  Market Share = (Firm Sales ÷ Total Market) × 100',
        points: [
          'Boston Matrix: harvest Cash Cows to fund rising Stars and selective Question Marks; divest unprofitable Dogs.',
          'Inelastic PED (|PED| < 1) → raise price to boost revenue; High positive YED (> +1) → luxury sensitive to recessions.',
          'Global entry trade-off: exporting (low risk) vs joint ventures/franchising (shared local insight) vs wholly-owned FDI (full control, high risk).',
        ],
      },
    ],
  },
  {
    id: 'cs-albus-4',
    slug: 'unit-4-operations-cpa-quality',
    title: 'Unit 4: Operations Strategy, Contribution, CPA & Quality',
    topicNumber: 4,
    topicName: 'Operations Strategy, Critical Path & Quality',
    summary: 'Capacity utilisation, inventory re-order levels, JIT/Kaizen/cell production, contribution costing, break-even, Critical Path Analysis, TQM, ERP, and reshoring.',
    accentColor: '#059669',
    sections: [
      {
        heading: '4.1–4.3 Operations & CPA Formulae',
        formula: 'Capacity Util = (Output ÷ Max) × 100  |  Total Float = LFT − Duration − EST  |  Re-order = Buffer + (Usage × Lead Time)',
        points: [
          'Special orders with spare capacity add profit whenever Offer Price > Variable Cost per unit (positive contribution).',
          'CPA forward pass (EST) takes HIGHEST converging value; backward pass (LFT) takes LOWEST; Critical path = zero float.',
          'Offshoring moves your own site abroad; outsourcing contracts an external firm; reshoring returns sites home for resilience.',
        ],
      },
    ],
  },
  {
    id: 'cs-albus-5',
    slug: 'unit-5-finance-ratios-investment-appraisal',
    title: 'Unit 5: Budgets, Ratios, Investment Appraisal & Decision Trees',
    topicNumber: 5,
    topicName: 'Corporate Finance, Ratio Analysis & Investment Appraisal',
    summary: 'Zero-based budgeting, variance analysis, depreciation, ROCE, Gearing, efficiency & shareholder ratios, Payback, ARR, NPV, and Decision Trees.',
    accentColor: '#ea580c',
    sections: [
      {
        heading: '5.1–5.3 Corporate Finance Formulae',
        formula: 'Gearing = (NCL ÷ Cap Emp) × 100  |  ARR = (Avg Profit ÷ Cost) × 100  |  NPV = Σ(CF × DF) − Cost',
        points: [
          'Variance rule: Favourable = higher profit than budget; Adverse = lower profit than budget (never judge cost rises as favourable!).',
          'Depreciation = (Cost − Residual Value) ÷ Life — strictly a NON-CASH expense; Gearing > 50% signals high interest-rate risk.',
          'Decision Tree Net Gain = EMV − Option Cost; always weigh quantitative NPV/ARR alongside qualitative risk and ethics.',
        ],
      },
    ],
  },
  {
    id: 'cs-albus-6',
    slug: 'unit-6-external-csr-change-management',
    title: 'Unit 6: Macroeconomy, CSR & Strategic Change Management',
    topicNumber: 6,
    topicName: 'External Environment, Economic Policy & Global Strategy',
    summary: 'Business cycle strategy, fiscal/monetary shocks, SPICED/WPIDEC exchange rates, Triple Bottom Line, Carroll’s CSR Pyramid, Lewin’s Force Field, and Kotter’s change model.',
    accentColor: '#0284c7',
    sections: [
      {
        heading: '6.1 Macro, Ethics & Change',
        formula: 'SPICED: Strong Pound → Imports Cheaper, Exports Dearer  |  Triple Bottom Line = Profit · People · Planet',
        points: [
          'Higher interest rates squeeze highly geared firms, raise NPV hurdle rates, and strengthen the exchange rate.',
          'Contrast Friedman (shareholder profit focus) against strategic CSR (ESG financing, lower waste, boycott protection).',
          'Lewin’s Force Field succeeds by strengthening driving forces AND weakening restraining forces via Kotter’s communication & participation.',
        ],
      },
    ],
  },
];

export const ALEVEL_BUSINESS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'albus-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Business Paper 1: Business Concepts & Strategy (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '9609/11',
    durationMinutes: 75,
    totalMarks: 40,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Evaluate the usefulness of Ansoff’s Matrix to a medium-sized manufacturer planning diversification into overseas markets.',
        marks: 12,
        markScheme: [
          'Knowledge: defines diversification (new product + new market) as highest-risk quadrant.',
          'Analysis: structures strategic risk assessment and links to finance/market research needs.',
          'Evaluation: static qualitative tool that ignores competitor reaction and quantitative NPV/cash flow.',
        ],
      },
    ],
  },
  {
    id: 'albus-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Business Paper 2: Data Response & Operations (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '9609/21',
    durationMinutes: 90,
    totalMarks: 60,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Calculate the break-even output and margin of safety, then evaluate whether the firm should accept a discounted special order.',
        marks: 12,
        markScheme: [
          'Calculates accurate contribution per unit, BEP, and margin of safety.',
          'Applies contribution rule (Price > Variable Cost) under spare capacity.',
          'Evaluates brand cannibalisation and customer reaction risk.',
        ],
      },
    ],
  },
  {
    id: 'albus-pp-2024-p3',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Business Paper 3: Business Decision-Making Case Study (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '9609/31',
    durationMinutes: 105,
    totalMarks: 60,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Calculate Gearing Ratio, ROCE, and NPV for two mutually exclusive expansion options and recommend the superior strategic choice.',
        marks: 16,
        markScheme: [
          'Accurate quantitative calculation of ROCE, Gearing, and discounted NPV.',
          'Weighs financial risk (gearing > 50%) against long-run return and qualitative stakeholder impacts.',
        ],
      },
    ],
  },
  {
    id: 'albus-pp-2024-p4',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Business Paper 4: Business Strategy Essay (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '9609/41',
    durationMinutes: 75,
    totalMarks: 40,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Evaluate the extent to which Lewin’s Force Field Analysis and Soft HRM guarantee successful organisational restructuring.',
        marks: 20,
        markScheme: [
          'Analyses driving vs restraining forces and Soft HRM engagement/training.',
          'Evaluates subjectivity of weights, short-term cost pressures, and union/culture dynamics.',
        ],
      },
    ],
  },
  {
    id: 'albus-pp-2023-p3',
    specEra: 'new-9-1',
    year: '2023',
    title: 'A-Level Business Paper 3: Decision-Making (2023)',
    tier: 'A-Level',
    series: 'June 2023',
    paperCode: '7132/3',
    durationMinutes: 120,
    totalMarks: 100,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Analyse how a 12% domestic currency appreciation affects an exporting Plc’s pricing, margins, and global location strategy.',
        marks: 12,
        markScheme: [
          'Applies SPICED to export price competitiveness vs cheaper imported components.',
          'Evaluates PED dependence and potential overseas FDI hedging.',
        ],
      },
    ],
  },
  {
    id: 'albus-pp-2023-p4',
    specEra: 'new-9-1',
    year: '2023',
    title: 'A-Level Business Paper 4: Corporate Strategy & Ethics (2023)',
    tier: 'A-Level',
    series: 'June 2023',
    paperCode: '9609/42',
    durationMinutes: 75,
    totalMarks: 40,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Discuss whether Triple Bottom Line reporting conflicts with shareholder value maximisation.',
        marks: 20,
        markScheme: [
          'Contrasts Friedman’s shareholder focus with long-run ESG brand equity and risk mitigation.',
          'Supported judgement weighted by industry visibility and investor time horizon.',
        ],
      },
    ],
  },
];

export const ALEVEL_BUSINESS_KEY_TERMS: KeyTermEntry[] = [
  // Unit 1
  { id: 'albus-kt-1', term: 'Mission Statement', definition: 'Concise declaration of a business’s core purpose and guiding values.', topicNumber: 1, subtopicId: 'al-bus-1-1', subtopicCode: '1.1' },
  { id: 'albus-kt-2', term: 'Corporate Objectives', definition: 'SMART medium-to-long-term targets set for the entire organisation to fulfil its mission.', topicNumber: 1, subtopicId: 'al-bus-1-1', subtopicCode: '1.1' },
  { id: 'albus-kt-3', term: 'Stakeholder Mapping', definition: 'Categorising stakeholders by power and interest (Mendelow Matrix) to prioritise engagement.', topicNumber: 1, subtopicId: 'al-bus-1-1', subtopicCode: '1.1' },
  { id: 'albus-kt-4', term: 'Corporate Governance', definition: 'System of rules and board oversight ensuring directors act in shareholders’ and stakeholders’ interests.', topicNumber: 1, subtopicId: 'al-bus-1-2', subtopicCode: '1.2' },
  { id: 'albus-kt-5', term: 'Divorce of Ownership and Control', definition: 'Separation between shareholders who own a Plc and salaried directors who manage daily strategy.', topicNumber: 1, subtopicId: 'al-bus-1-2', subtopicCode: '1.2' },
  { id: 'albus-kt-6', term: 'Synergy', definition: 'Combined performance of two merged firms exceeding the sum of their separate parts (2 + 2 = 5).', topicNumber: 1, subtopicId: 'al-bus-1-2', subtopicCode: '1.2' },
  { id: 'albus-kt-7', term: 'Ansoff’s Matrix', definition: 'Strategic growth grid mapping Market Penetration, Product Development, Market Development, and Diversification.', topicNumber: 1, subtopicId: 'al-bus-1-3', subtopicCode: '1.3' },
  { id: 'albus-kt-8', term: 'Porter’s Five Forces', definition: 'Framework analysing industry profitability through rivalry, entrants, substitutes, buyer power, and supplier power.', topicNumber: 1, subtopicId: 'al-bus-1-3', subtopicCode: '1.3' },
  { id: 'albus-kt-9', term: 'PESTLE Analysis', definition: 'External audit of Political, Economic, Social, Technological, Legal, and Environmental forces.', topicNumber: 1, subtopicId: 'al-bus-1-3', subtopicCode: '1.3' },
  // Unit 2
  { id: 'albus-kt-10', term: 'Matrix Structure', definition: 'Project-based organisational design combining functional specialists under dual reporting lines.', topicNumber: 2, subtopicId: 'al-bus-2-1', subtopicCode: '2.1' },
  { id: 'albus-kt-11', term: 'Centralisation', definition: 'Concentrating strategic decision-making authority at senior head-office level.', topicNumber: 2, subtopicId: 'al-bus-2-1', subtopicCode: '2.1' },
  { id: 'albus-kt-12', term: 'Decentralisation', definition: 'Delegating decision-making authority down to regional branches and operational managers.', topicNumber: 2, subtopicId: 'al-bus-2-1', subtopicCode: '2.1' },
  { id: 'albus-kt-13', term: 'Blake Mouton Grid', definition: 'Leadership model plotting managers by concern for people versus concern for production.', topicNumber: 2, subtopicId: 'al-bus-2-2', subtopicCode: '2.2' },
  { id: 'albus-kt-14', term: 'Tannenbaum-Schmidt Continuum', definition: 'Leadership spectrum ranging from autocratic "Tells" to delegated "Joins" styles.', topicNumber: 2, subtopicId: 'al-bus-2-2', subtopicCode: '2.2' },
  { id: 'albus-kt-15', term: 'Vroom’s Expectancy Theory', definition: 'Process motivation theory stating effort depends on Expectancy × Instrumentality × Valence.', topicNumber: 2, subtopicId: 'al-bus-2-2', subtopicCode: '2.2' },
  { id: 'albus-kt-16', term: 'Hard HRM', definition: 'Workforce strategy treating employees primarily as a flexible resource cost to minimise.', topicNumber: 2, subtopicId: 'al-bus-2-3', subtopicCode: '2.3' },
  { id: 'albus-kt-17', term: 'Soft HRM', definition: 'Workforce strategy developing employees through training, empowerment, and long-term trust.', topicNumber: 2, subtopicId: 'al-bus-2-3', subtopicCode: '2.3' },
  { id: 'albus-kt-18', term: 'Labour Turnover', definition: 'Percentage of employees leaving an organisation during a given year.', topicNumber: 2, subtopicId: 'al-bus-2-3', subtopicCode: '2.3' },
  // Unit 3
  { id: 'albus-kt-19', term: 'Income Elasticity of Demand (YED)', definition: 'Responsiveness of quantity demanded to a percentage change in consumer income (%ΔQd ÷ %ΔY).', topicNumber: 3, subtopicId: 'al-bus-3-1', subtopicCode: '3.1' },
  { id: 'albus-kt-20', term: 'Moving Average', definition: 'Time-series smoothing method removing seasonal spikes to project underlying sales trends.', topicNumber: 3, subtopicId: 'al-bus-3-1', subtopicCode: '3.1' },
  { id: 'albus-kt-21', term: 'Boston Matrix', definition: 'Product portfolio model classifying items by market growth and market share into Stars, Cash Cows, Question Marks, and Dogs.', topicNumber: 3, subtopicId: 'al-bus-3-2', subtopicCode: '3.2' },
  { id: 'albus-kt-22', term: 'Product Life Cycle', definition: 'Stages of sales performance from Development through Introduction, Growth, Maturity, and Decline.', topicNumber: 3, subtopicId: 'al-bus-3-2', subtopicCode: '3.2' },
  { id: 'albus-kt-23', term: 'Extended Marketing Mix (7 Ps)', definition: 'Product, Price, Place, Promotion plus People, Process, and Physical Evidence for services.', topicNumber: 3, subtopicId: 'al-bus-3-2', subtopicCode: '3.2' },
  { id: 'albus-kt-24', term: 'Omni-Channel Retailing', definition: 'Seamlessly integrating physical stores, websites, and mobile apps into one unified customer journey.', topicNumber: 3, subtopicId: 'al-bus-3-3', subtopicCode: '3.3' },
  { id: 'albus-kt-25', term: 'Glocalisation', definition: 'Adapting a global brand’s products and promotion to local cultural tastes and laws.', topicNumber: 3, subtopicId: 'al-bus-3-3', subtopicCode: '3.3' },
  // Unit 4
  { id: 'albus-kt-26', term: 'Capacity Utilisation', definition: 'Current output expressed as a percentage of maximum possible productive output.', topicNumber: 4, subtopicId: 'al-bus-4-1', subtopicCode: '4.1' },
  { id: 'albus-kt-27', term: 'Rationalisation', definition: 'Reducing excess capacity by closing plants or cutting staff to lower fixed overheads.', topicNumber: 4, subtopicId: 'al-bus-4-1', subtopicCode: '4.1' },
  { id: 'albus-kt-28', term: 'Buffer Inventory', definition: 'Minimum safety stock retained to prevent stock-outs during supplier delays or demand spikes.', topicNumber: 4, subtopicId: 'al-bus-4-1', subtopicCode: '4.1' },
  { id: 'albus-kt-29', term: 'Cell Production', definition: 'Splitting production into multi-skilled self-contained teams completing entire sub-assemblies.', topicNumber: 4, subtopicId: 'al-bus-4-1', subtopicCode: '4.1' },
  { id: 'albus-kt-30', term: 'Contribution Costing', definition: 'Costing method deducting only direct variable costs from selling price to evaluate product contribution to fixed costs.', topicNumber: 4, subtopicId: 'al-bus-4-2', subtopicCode: '4.2' },
  { id: 'albus-kt-31', term: 'Critical Path Analysis (CPA)', definition: 'Project scheduling network identifying zero-float critical tasks and minimum completion time.', topicNumber: 4, subtopicId: 'al-bus-4-2', subtopicCode: '4.2' },
  { id: 'albus-kt-32', term: 'Total Float', definition: 'Spare time a non-critical task can slip without delaying project finish (LFT − Duration − EST).', topicNumber: 4, subtopicId: 'al-bus-4-2', subtopicCode: '4.2' },
  { id: 'albus-kt-33', term: 'Total Quality Management (TQM)', definition: 'Organisation-wide zero-defect culture treating every internal stage as a customer.', topicNumber: 4, subtopicId: 'al-bus-4-3', subtopicCode: '4.3' },
  { id: 'albus-kt-34', term: 'Benchmarking', definition: 'Measuring business KPIs against industry leaders to adopt best-practice improvements.', topicNumber: 4, subtopicId: 'al-bus-4-3', subtopicCode: '4.3' },
  { id: 'albus-kt-35', term: 'Enterprise Resource Planning (ERP)', definition: 'Unified real-time software integrating inventory, production, sales, HR, and finance.', topicNumber: 4, subtopicId: 'al-bus-4-3', subtopicCode: '4.3' },
  { id: 'albus-kt-36', term: 'Reshoring', definition: 'Returning previously offshored production back to the firm’s domestic home country.', topicNumber: 4, subtopicId: 'al-bus-4-3', subtopicCode: '4.3' },
  // Unit 5
  { id: 'albus-kt-37', term: 'Zero-Based Budgeting', definition: 'Resetting budgets to zero each period so all planned spending must be justified from scratch.', topicNumber: 5, subtopicId: 'al-bus-5-1', subtopicCode: '5.1' },
  { id: 'albus-kt-38', term: 'Variance Analysis', definition: 'Comparing budgeted vs actual performance and classifying profit impacts as favourable or adverse.', topicNumber: 5, subtopicId: 'al-bus-5-1', subtopicCode: '5.1' },
  { id: 'albus-kt-39', term: 'Overtrading', definition: 'Expanding sales faster than available working capital can finance cash outflows.', topicNumber: 5, subtopicId: 'al-bus-5-1', subtopicCode: '5.1' },
  { id: 'albus-kt-40', term: 'Debt Factoring', definition: 'Selling unpaid customer invoices to a third-party factor at a discount for instant cash.', topicNumber: 5, subtopicId: 'al-bus-5-1', subtopicCode: '5.1' },
  { id: 'albus-kt-41', term: 'Straight-Line Depreciation', definition: 'Non-cash expense spreading an asset’s cost minus residual value evenly across its useful life.', topicNumber: 5, subtopicId: 'al-bus-5-2', subtopicCode: '5.2' },
  { id: 'albus-kt-42', term: 'Gearing Ratio', definition: 'Non-current liabilities as a percentage of capital employed; above 50% signals high debt risk.', topicNumber: 5, subtopicId: 'al-bus-5-2', subtopicCode: '5.2' },
  { id: 'albus-kt-43', term: 'Window Dressing', definition: 'Legal year-end accounting presentation tweaks making financial statements look artificially strong.', topicNumber: 5, subtopicId: 'al-bus-5-2', subtopicCode: '5.2' },
  { id: 'albus-kt-44', term: 'Dividend Yield', definition: 'Annual dividend per share divided by market share price, expressed as a percentage.', topicNumber: 5, subtopicId: 'al-bus-5-2', subtopicCode: '5.2' },
  { id: 'albus-kt-45', term: 'Average Rate of Return (ARR)', definition: 'Average annual profit as a percentage of initial capital investment outlay.', topicNumber: 5, subtopicId: 'al-bus-5-3', subtopicCode: '5.3' },
  { id: 'albus-kt-46', term: 'Net Present Value (NPV)', definition: 'Sum of discounted future net cash flows minus initial investment cost.', topicNumber: 5, subtopicId: 'al-bus-5-3', subtopicCode: '5.3' },
  { id: 'albus-kt-47', term: 'Expected Monetary Value (EMV)', definition: 'Probability-weighted average financial payoff of a chance node in a decision tree.', topicNumber: 5, subtopicId: 'al-bus-5-3', subtopicCode: '5.3' },
  // Unit 6
  { id: 'albus-kt-48', term: 'Triple Bottom Line', definition: 'Measuring corporate sustainability across Profit (economic), People (social), and Planet (environmental).', topicNumber: 6, subtopicId: 'al-bus-6-1', subtopicCode: '6.1' },
  { id: 'albus-kt-49', term: 'Corporate Social Responsibility (CSR)', definition: 'Voluntary corporate commitment to ethical and environmental standards beyond legal minimums.', topicNumber: 6, subtopicId: 'al-bus-6-1', subtopicCode: '6.1' },
  { id: 'albus-kt-50', term: 'Force Field Analysis', definition: 'Lewin’s tool weighing driving forces for change against restraining forces resisting change.', topicNumber: 6, subtopicId: 'al-bus-6-1', subtopicCode: '6.1' },
  { id: 'albus-kt-51', term: 'Contingency Planning', definition: 'Preparing structured crisis-response protocols in advance for major business disruptions.', topicNumber: 6, subtopicId: 'al-bus-6-1', subtopicCode: '6.1' },
];
