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
  ECON_EXAM_PRACTICE_1_TO_3,
  ECON_FLASHCARDS_1_TO_3,
  ECON_NOTES_1_TO_3,
  ECON_QUIZZES_1_TO_3,
  ECON_TOPICS_1_TO_3,
} from './economics/igcseUnits1to3';
import {
  ECON_EXAM_PRACTICE_UNIT_4,
  ECON_FLASHCARDS_UNIT_4,
  ECON_NOTES_UNIT_4,
  ECON_QUIZZES_UNIT_4,
  ECON_TOPICS_UNIT_4,
} from './economics/igcseUnit4';
import {
  ECON_EXAM_PRACTICE_5_TO_6,
  ECON_FLASHCARDS_5_TO_6,
  ECON_NOTES_5_TO_6,
  ECON_QUIZZES_5_TO_6,
  ECON_TOPICS_5_TO_6,
} from './economics/igcseUnits5to6';

export const ECONOMICS_TOPICS: TopicDefinition[] = [
  ...ECON_TOPICS_1_TO_3,
  ...ECON_TOPICS_UNIT_4,
  ...ECON_TOPICS_5_TO_6,
];

export const ECONOMICS_NOTES: Record<string, NoteLesson> = {
  ...ECON_NOTES_1_TO_3,
  ...ECON_NOTES_UNIT_4,
  ...ECON_NOTES_5_TO_6,
};

export const ECONOMICS_QUIZZES: QuizQuestion[] = [
  ...ECON_QUIZZES_1_TO_3,
  ...ECON_QUIZZES_UNIT_4,
  ...ECON_QUIZZES_5_TO_6,
];

export const ECONOMICS_FLASHCARDS: FlashcardItem[] = [
  ...ECON_FLASHCARDS_1_TO_3,
  ...ECON_FLASHCARDS_UNIT_4,
  ...ECON_FLASHCARDS_5_TO_6,
];

export const ECONOMICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  ...ECON_EXAM_PRACTICE_1_TO_3,
  ...ECON_EXAM_PRACTICE_UNIT_4,
  ...ECON_EXAM_PRACTICE_5_TO_6,
];

export const ECONOMICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'econ-cs-1',
    slug: 'unit-1-basic-economic-problem',
    title: 'Unit 1: The Basic Economic Problem (1.1–1.2)',
    topicNumber: 1,
    topicName: 'The Basic Economic Problem',
    summary: 'Scarcity, CELL factors & rewards, opportunity cost, PPC shifts, ceteris paribus, positive vs normative statements & economic sectors.',
    accentColor: '#D97706',
    sections: [
      {
        heading: '1.1–1.2 Core Concepts & PPC Rules',
        formula: 'CELL Rewards: Land→Rent | Labour→Wages | Capital→Interest | Enterprise→Profit',
        points: [
          'Scarcity = unlimited wants vs finite resources; Economic goods carry opportunity cost (even if state-funded); Free goods (sunlight) have zero opportunity cost.',
          'PPC: Inside = unemployed/inefficient resources; On = productive efficiency; Outside = currently unattainable; Outward shift = more/better resources or technology.',
          'Positive statements are testable facts; Normative statements are value judgements ("should"). Primary → Secondary → Tertiary shift accompanies development.',
        ],
      },
    ],
  },
  {
    id: 'econ-cs-2',
    slug: 'unit-2-allocation-of-resources',
    title: 'Unit 2: The Allocation of Resources (2.1–2.9)',
    topicNumber: 2,
    topicName: 'The Allocation of Resources',
    summary: 'Price mechanism (SIR), demand & supply shifts, equilibrium/disequilibrium, PED & PES revenue rules, market failure & government intervention.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: '2.1–2.9 Elasticity, Externalities & Intervention Formulae',
        formula: 'PED = %ΔQd ÷ %ΔP  |  PES = %ΔQs ÷ %ΔP  |  Social Cost = Private + External Cost',
        points: [
          'Own price change → movement ALONG D or S (extension/contraction); Non-price determinants (PASIFIC / costs / tax / subsidy) SHIFT the whole curve.',
          'Inelastic |PED| < 1 → raise price to boost Total Revenue; Elastic |PED| > 1 → cut price to boost TR. Indirect tax shifts S left; subsidy shifts S right.',
          'Merit goods under-consumed; Demerit goods over-consumed; Public goods non-excludable & non-rival (free riders). Max price (below Eq) → shortage; Min price (above Eq) → surplus.',
        ],
      },
    ],
  },
  {
    id: 'econ-cs-3',
    slug: 'unit-3-microeconomic-decision-makers',
    title: 'Unit 3: Microeconomic Decision Makers (3.1–3.7)',
    topicNumber: 3,
    topicName: 'Microeconomic Decision Makers',
    summary: 'Money, commercial vs central banks, household spending/saving/borrowing, wages & trade unions, mergers, scale economies, costs & monopolies.',
    accentColor: '#7C3AED',
    sections: [
      {
        heading: '3.1–3.7 Banking, Labour, Costs & Market Structures',
        formula: 'TC = TFC + TVC | AC = TC ÷ Q | TR = P × Q | Profit = TR − TC | Productivity = Output ÷ Workers',
        points: [
          'Money functions: Medium of exchange, Unit of account, Store of value, Standard of deferred payment. Central bank sets interest rates & acts as lender of last resort.',
          'Wages reflect derived demand, training scarcity, productivity, and union collective bargaining. Internal economies of scale lower average cost; diseconomies raise AC.',
          'Mergers: Horizontal (rival), Vertical Backward (supplier) / Forward (retailer), Conglomerate (unrelated). Monopolies charge Pm > Pc via barriers but can fund R&D.',
        ],
      },
    ],
  },
  {
    id: 'econ-cs-4',
    slug: 'unit-4-government-and-macroeconomy',
    title: 'Unit 4: Government & The Macroeconomy (4.1–4.7)',
    topicNumber: 4,
    topicName: 'Government & The Macroeconomy',
    summary: 'Five macro aims & conflicts, fiscal/monetary/supply-side policy, real GDP growth & recessions, unemployment types & CPI inflation/deflation.',
    accentColor: '#059669',
    sections: [
      {
        heading: '4.1–4.7 Macro Formulae & Policy Toolkit',
        formula: 'Unemployment % = (Unemployed ÷ Labour Force) × 100 | CPI Inflation % = ((CPI₂ − CPI₁) ÷ CPI₁) × 100',
        points: [
          'Aims (GEIBR): Growth, Full Employment, Low Stable Inflation (~2%), BoP stability, Redistribution. Fiscal = G & T; Monetary = Interest Rates & Money Supply; Supply-side = PPC/LRAS outward.',
          'Progressive tax (income tax) vs Regressive tax (VAT). Recession = 2 consecutive quarters of falling Real GDP. Disinflation = slower positive inflation (NOT deflation!).',
          'Cyclical unemployment → expansionary fiscal/monetary; Structural unemployment → supply-side retraining. Demand-pull = excess AD; Cost-push = higher wages/oil/taxes.',
        ],
      },
    ],
  },
  {
    id: 'econ-cs-5',
    slug: 'unit-5-economic-development',
    title: 'Unit 5: Economic Development (5.1–5.4)',
    topicNumber: 5,
    topicName: 'Economic Development',
    summary: 'Real GDP per head vs HDI, PPP, absolute vs relative poverty, poverty cycle, birth/death rates, dependency ratios, ageing & development strategies.',
    accentColor: '#EA580C',
    sections: [
      {
        heading: '5.1–5.4 Development Indicators & Demographics',
        formula: 'Real GDP per Head = Real GDP ÷ Population  |  Dependency Ratio = ((0–15 + 65+) ÷ 16–64) × 100',
        points: [
          'HDI (0–1) = GNI per head (PPP) + Life expectancy + Mean & expected schooling (omits inequality, environment & freedoms).',
          'Absolute poverty = lacking survival essentials ($2.15/day PPP); Relative poverty = <60% median income. Break the poverty cycle via growth, education, health & progressive transfers.',
          'Optimum population maximises output per head. Ageing raises pension/health bills → raise retirement age, attract skilled migrants, automate. Diversify beyond primary commodities.',
        ],
      },
    ],
  },
  {
    id: 'econ-cs-6',
    slug: 'unit-6-international-trade-globalisation',
    title: 'Unit 6: International Trade & Globalisation (6.1–6.4)',
    topicNumber: 6,
    topicName: 'International Trade & Globalisation',
    summary: 'International specialisation, free trade, MNCs, tariffs/quotas/subsidies, floating vs fixed exchange rates, SPICED/WPIDEC & Current Account.',
    accentColor: '#0284C7',
    sections: [
      {
        heading: '6.1–6.4 Trade, FX & Current Account Rules',
        formula: 'Current Account = Goods + Services + Primary Income + Secondary Income',
        points: [
          'Specialisation unlocks global economies of scale & lower prices, yet risks over-dependence, resource depletion & structural unemployment.',
          'Tariff = import tax (raises state revenue); Quota = physical volume cap (zero tariff revenue). Protectionism shields infant industries & stops dumping, yet risks retaliation & inflation.',
          'SPICED: Strong Pound → Imports Cheaper, Exports Dearer | WPIDEC: Weak Pound → Imports Dearer, Exports Cheaper (improves BoP only if PED is elastic!). Supply-side is the best long-run cure for a deficit.',
        ],
      },
    ],
  },
];

export const ECONOMICS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'econ-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge IGCSE Economics (0455) Paper 1 (MCQ) — May/June 2024',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0455/12',
    durationMinutes: 45,
    totalMarks: 30,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Identify which change shifts a country’s Production Possibility Curve outward rather than causing a movement along it.',
        marks: 1,
        markScheme: ['Investment in education, capital machinery, or technology shifts the PPC outward; reallocating existing resources moves along the PPC.'],
      },
    ],
  },
  {
    id: 'econ-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge IGCSE Economics (0455) Paper 2 (Structured Questions) — May/June 2024',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0455/22',
    durationMinutes: 135,
    totalMarks: 90,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Discuss whether a government should impose heavy indirect taxes on sugary drinks to reduce market failure.',
        marks: 8,
        markScheme: ['Internalises external healthcare costs & funds merit-good subsidies vs regressive burden on low earners & limited Q drop if PED is inelastic.'],
      },
    ],
  },
  {
    id: 'econ-pp-2023n-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Economics (0455) Paper 1 (MCQ) — Oct/Nov 2023',
    tier: 'Core',
    series: 'Oct/Nov',
    paperCode: '0455/12',
    durationMinutes: 45,
    totalMarks: 30,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Calculate PED when a 20% price rise reduces sales by 10% and predict the effect on Total Revenue.',
        marks: 1,
        markScheme: ['PED = −0.5 (price inelastic), so Total Revenue increases.'],
      },
    ],
  },
  {
    id: 'econ-pp-2023n-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Economics (0455) Paper 2 (Structured Questions) — Oct/Nov 2023',
    tier: 'Core',
    series: 'Oct/Nov',
    paperCode: '0455/22',
    durationMinutes: 135,
    totalMarks: 90,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Discuss whether a currency depreciation will always improve a country’s current account balance.',
        marks: 8,
        markScheme: ['WPIDEC boosts export competitiveness & jobs vs imported cost-push inflation and dependence on elastic export/import PED.'],
      },
    ],
  },
  {
    id: 'econ-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Economics (0455) Paper 1 (MCQ) — May/June 2023',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0455/12',
    durationMinutes: 45,
    totalMarks: 30,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Distinguish structural unemployment from cyclical unemployment and select the best policy for each.',
        marks: 1,
        markScheme: ['Structural = skills/industry mismatch (supply-side retraining); Cyclical = recession/low AD (expansionary fiscal/monetary).'],
      },
    ],
  },
  {
    id: 'econ-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge IGCSE Economics (0455) Paper 2 (Structured Questions) — May/June 2023',
    tier: 'Core',
    series: 'May/June',
    paperCode: '0455/22',
    durationMinutes: 135,
    totalMarks: 90,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Discuss whether horizontal mergers between large firms benefit consumers.',
        marks: 8,
        markScheme: ['Economies of scale lowering unit costs & R&D innovation vs monopoly pricing power, less choice, and diseconomies of scale.'],
      },
    ],
  },
];

export const ECONOMICS_KEY_TERMS: KeyTermEntry[] = [
  // Unit 1 (10 terms)
  { id: 'econ-kt-1', term: 'Scarcity', definition: 'Finite resources unable to satisfy unlimited human wants, forcing economic choices.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-2', term: 'Factors of Production', definition: 'Land (rent), Labour (wages), Capital (interest), and Enterprise (profit).', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-3', term: 'Opportunity Cost', definition: 'The next best alternative foregone when making an economic choice.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-4', term: 'Economic Good', definition: 'Scarce good produced with finite resources that carries an opportunity cost.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-5', term: 'Free Good', definition: 'Abundant natural resource (e.g. sunlight, ambient air) with zero opportunity cost.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-6', term: 'Production Possibility Curve (PPC)', definition: 'Curve showing maximum output combinations of two goods using available resources and technology.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-7', term: 'Occupational Mobility', definition: 'Ease with which workers can retrain and switch from one occupation to another.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-8', term: 'Geographical Mobility', definition: 'Ease with which factors of production can relocate between different regions.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-9', term: 'Ceteris Paribus', definition: 'Assumption that all other influencing variables remain constant while analysing one change.', topicNumber: 1, subtopicId: 'econ-1-2', subtopicCode: '1.2' },
  { id: 'econ-kt-10', term: 'Positive vs Normative Statement', definition: 'Positive statements are testable against evidence; normative statements express value judgements.', topicNumber: 1, subtopicId: 'econ-1-2', subtopicCode: '1.2' },

  // Unit 2 (16 terms)
  { id: 'econ-kt-11', term: 'Price Mechanism', definition: 'System where free-market prices signal scarcity, incentivise producers, and ration limited output.', topicNumber: 2, subtopicId: 'econ-2-1', subtopicCode: '2.1' },
  { id: 'econ-kt-12', term: 'Effective Demand', definition: 'Willingness and financial ability of consumers to buy a good at given prices.', topicNumber: 2, subtopicId: 'econ-2-2', subtopicCode: '2.2' },
  { id: 'econ-kt-13', term: 'Normal Good', definition: 'Good whose demand increases (shifts right) when consumer real income rises.', topicNumber: 2, subtopicId: 'econ-2-2', subtopicCode: '2.2' },
  { id: 'econ-kt-14', term: 'Inferior Good', definition: 'Basic good whose demand falls (shifts left) when consumer real income rises.', topicNumber: 2, subtopicId: 'econ-2-2', subtopicCode: '2.2' },
  { id: 'econ-kt-15', term: 'Supply', definition: 'Willingness and ability of producers to offer goods for sale at given prices.', topicNumber: 2, subtopicId: 'econ-2-3', subtopicCode: '2.3' },
  { id: 'econ-kt-16', term: 'Market Equilibrium', definition: 'Market-clearing price where quantity demanded equals quantity supplied (Qd = Qs).', topicNumber: 2, subtopicId: 'econ-2-4', subtopicCode: '2.4' },
  { id: 'econ-kt-17', term: 'Excess Demand (Shortage)', definition: 'Disequilibrium where Qd exceeds Qs because price sits below equilibrium.', topicNumber: 2, subtopicId: 'econ-2-4', subtopicCode: '2.4' },
  { id: 'econ-kt-18', term: 'Excess Supply (Surplus)', definition: 'Disequilibrium where Qs exceeds Qd because price sits above equilibrium.', topicNumber: 2, subtopicId: 'econ-2-4', subtopicCode: '2.4' },
  { id: 'econ-kt-19', term: 'Price Elasticity of Demand (PED)', definition: 'Responsiveness of quantity demanded to a change in price (%ΔQd ÷ %ΔP).', topicNumber: 2, subtopicId: 'econ-2-6', subtopicCode: '2.6' },
  { id: 'econ-kt-20', term: 'Price Elasticity of Supply (PES)', definition: 'Responsiveness of quantity supplied to a change in price (%ΔQs ÷ %ΔP).', topicNumber: 2, subtopicId: 'econ-2-7', subtopicCode: '2.7' },
  { id: 'econ-kt-21', term: 'Market Failure', definition: 'Inefficient allocation of scarce resources by the free market mechanism.', topicNumber: 2, subtopicId: 'econ-2-8', subtopicCode: '2.8' },
  { id: 'econ-kt-22', term: 'External Cost (Negative Externality)', definition: 'Harmful spillover cost imposed on third parties outside a market transaction.', topicNumber: 2, subtopicId: 'econ-2-8', subtopicCode: '2.8' },
  { id: 'econ-kt-23', term: 'Merit Good', definition: 'Beneficial good (e.g. healthcare, vaccines) under-consumed in a free market due to information failure and external benefits.', topicNumber: 2, subtopicId: 'econ-2-8', subtopicCode: '2.8' },
  { id: 'econ-kt-24', term: 'Demerit Good', definition: 'Harmful good (e.g. tobacco, alcohol) over-consumed in a free market creating external costs.', topicNumber: 2, subtopicId: 'econ-2-8', subtopicCode: '2.8' },
  { id: 'econ-kt-25', term: 'Public Good', definition: 'Non-excludable and non-rival good (e.g. street lighting) suffering the free-rider problem.', topicNumber: 2, subtopicId: 'econ-2-8', subtopicCode: '2.8' },
  { id: 'econ-kt-26', term: 'Mixed Economic System', definition: 'Economy combining private free markets with government taxation, regulation, and public provision.', topicNumber: 2, subtopicId: 'econ-2-9', subtopicCode: '2.9' },

  // Unit 3 (15 terms)
  { id: 'econ-kt-27', term: 'Money', definition: 'Asset widely accepted as medium of exchange, unit of account, store of value, and standard of deferred payment.', topicNumber: 3, subtopicId: 'econ-3-1', subtopicCode: '3.1' },
  { id: 'econ-kt-28', term: 'Central Bank', definition: 'National monetary authority issuing currency, setting interest rates, and acting as lender of last resort.', topicNumber: 3, subtopicId: 'econ-3-1', subtopicCode: '3.1' },
  { id: 'econ-kt-29', term: 'Commercial Bank', definition: 'Profit-seeking retail bank taking household/firm deposits and issuing loans and mortgages.', topicNumber: 3, subtopicId: 'econ-3-1', subtopicCode: '3.1' },
  { id: 'econ-kt-30', term: 'Disposable Income', definition: 'Gross personal income minus direct taxes plus state cash benefits.', topicNumber: 3, subtopicId: 'econ-3-2', subtopicCode: '3.2' },
  { id: 'econ-kt-31', term: 'Average Propensity to Save (APS)', definition: 'Proportion of household disposable income saved rather than spent (Saving ÷ Disposable Income).', topicNumber: 3, subtopicId: 'econ-3-2', subtopicCode: '3.2' },
  { id: 'econ-kt-32', term: 'Division of Labour', definition: 'Breaking production into specialised tasks so each worker masters one role to boost productivity.', topicNumber: 3, subtopicId: 'econ-3-3', subtopicCode: '3.3' },
  { id: 'econ-kt-33', term: 'Trade Union', definition: 'Organisation of workers using collective bargaining to negotiate higher wages and safer conditions.', topicNumber: 3, subtopicId: 'econ-3-3', subtopicCode: '3.3' },
  { id: 'econ-kt-34', term: 'Derived Demand', definition: 'Demand for a factor of production (like labour) arising from consumer demand for the final good.', topicNumber: 3, subtopicId: 'econ-3-3', subtopicCode: '3.3' },
  { id: 'econ-kt-35', term: 'Horizontal Integration', definition: 'Merger between two firms operating in the same industry at the exact same stage of production.', topicNumber: 3, subtopicId: 'econ-3-4', subtopicCode: '3.4' },
  { id: 'econ-kt-36', term: 'Vertical Integration', definition: 'Merger between firms at different supply-chain stages (backward to supplier; forward to retailer).', topicNumber: 3, subtopicId: 'econ-3-4', subtopicCode: '3.4' },
  { id: 'econ-kt-37', term: 'Economies of Scale', definition: 'Falling long-run average cost per unit as a firm’s scale of production increases.', topicNumber: 3, subtopicId: 'econ-3-4', subtopicCode: '3.4' },
  { id: 'econ-kt-38', term: 'Diseconomies of Scale', definition: 'Rising average cost per unit when a firm grows too large, hurting communication and control.', topicNumber: 3, subtopicId: 'econ-3-4', subtopicCode: '3.4' },
  { id: 'econ-kt-39', term: 'Labour Productivity', definition: 'Output produced per worker (or per worker-hour) in a given time period.', topicNumber: 3, subtopicId: 'econ-3-5', subtopicCode: '3.5' },
  { id: 'econ-kt-40', term: 'Fixed vs Variable Costs', definition: 'Fixed costs stay constant with output in the short run; variable costs change directly with output.', topicNumber: 3, subtopicId: 'econ-3-6', subtopicCode: '3.6' },
  { id: 'econ-kt-41', term: 'Monopoly', definition: 'Single dominant seller acting as a price maker protected by high barriers to entry.', topicNumber: 3, subtopicId: 'econ-3-7', subtopicCode: '3.7' },

  // Unit 4 (14 terms)
  { id: 'econ-kt-42', term: 'Macroeconomic Aims', definition: 'Growth, full employment, low stable inflation, BoP stability, and fairer income distribution.', topicNumber: 4, subtopicId: 'econ-4-1', subtopicCode: '4.1' },
  { id: 'econ-kt-43', term: 'Fiscal Policy', definition: 'Use of government spending (G) and taxation (T) to steer aggregate demand and public welfare.', topicNumber: 4, subtopicId: 'econ-4-2', subtopicCode: '4.2' },
  { id: 'econ-kt-44', term: 'Budget Deficit', definition: 'Annual shortfall when government spending exceeds total tax revenue (G > T).', topicNumber: 4, subtopicId: 'econ-4-2', subtopicCode: '4.2' },
  { id: 'econ-kt-45', term: 'Progressive Tax', definition: 'Tax whose average percentage rate rises as taxable income increases (e.g. income tax).', topicNumber: 4, subtopicId: 'econ-4-2', subtopicCode: '4.2' },
  { id: 'econ-kt-46', term: 'Regressive Tax', definition: 'Tax taking a higher percentage of income from poorer households than richer ones (e.g. VAT).', topicNumber: 4, subtopicId: 'econ-4-2', subtopicCode: '4.2' },
  { id: 'econ-kt-47', term: 'Monetary Policy', definition: 'Central bank control of base interest rates, money supply, and exchange rates.', topicNumber: 4, subtopicId: 'econ-4-3', subtopicCode: '4.3' },
  { id: 'econ-kt-48', term: 'Supply-Side Policy', definition: 'Reforms increasing productive capacity and efficiency to shift PPC/LRAS outward.', topicNumber: 4, subtopicId: 'econ-4-4', subtopicCode: '4.4' },
  { id: 'econ-kt-49', term: 'Real GDP', definition: 'Total value of domestic output adjusted for inflation using constant base-year prices.', topicNumber: 4, subtopicId: 'econ-4-5', subtopicCode: '4.5' },
  { id: 'econ-kt-50', term: 'Recession', definition: 'Two consecutive quarters (six months) of negative real GDP growth.', topicNumber: 4, subtopicId: 'econ-4-5', subtopicCode: '4.5' },
  { id: 'econ-kt-51', term: 'Cyclical Unemployment', definition: 'Unemployment caused by deficient aggregate demand during an economic downturn.', topicNumber: 4, subtopicId: 'econ-4-6', subtopicCode: '4.6' },
  { id: 'econ-kt-52', term: 'Structural Unemployment', definition: 'Long-term unemployment caused by industry decline, automation, or skill mismatches.', topicNumber: 4, subtopicId: 'econ-4-6', subtopicCode: '4.6' },
  { id: 'econ-kt-53', term: 'Consumer Prices Index (CPI)', definition: 'Weighted price index measuring changes in the cost of a typical household shopping basket.', topicNumber: 4, subtopicId: 'econ-4-7', subtopicCode: '4.7' },
  { id: 'econ-kt-54', term: 'Demand-Pull vs Cost-Push Inflation', definition: 'Demand-pull arises from excess AD; cost-push arises from rising wages, energy, or raw material bills.', topicNumber: 4, subtopicId: 'econ-4-7', subtopicCode: '4.7' },
  { id: 'econ-kt-55', term: 'Deflation', definition: 'Sustained fall in the general price level (negative inflation rate) over time.', topicNumber: 4, subtopicId: 'econ-4-7', subtopicCode: '4.7' },

  // Unit 5 (10 terms)
  { id: 'econ-kt-56', term: 'Human Development Index (HDI)', definition: 'UN composite index (0–1) combining GNI per head (PPP), life expectancy, and schooling years.', topicNumber: 5, subtopicId: 'econ-5-1', subtopicCode: '5.1' },
  { id: 'econ-kt-57', term: 'Purchasing Power Parity (PPP)', definition: 'Adjustment equalising local cost-of-living differences when comparing international incomes.', topicNumber: 5, subtopicId: 'econ-5-1', subtopicCode: '5.1' },
  { id: 'econ-kt-58', term: 'Absolute Poverty', definition: 'Inability to afford minimum physical essentials for survival (food, water, shelter).', topicNumber: 5, subtopicId: 'econ-5-2', subtopicCode: '5.2' },
  { id: 'econ-kt-59', term: 'Relative Poverty', definition: 'Household income falling far below the national median (e.g. <60% of median income).', topicNumber: 5, subtopicId: 'econ-5-2', subtopicCode: '5.2' },
  { id: 'econ-kt-60', term: 'Vicious Cycle of Poverty', definition: 'Self-reinforcing loop of low income, low saving, low investment, and low productivity.', topicNumber: 5, subtopicId: 'econ-5-2', subtopicCode: '5.2' },
  { id: 'econ-kt-61', term: 'Dependency Ratio', definition: 'Number of youth (0–15) and elderly (65+) dependents per 100 working-age citizens (16–64).', topicNumber: 5, subtopicId: 'econ-5-3', subtopicCode: '5.3' },
  { id: 'econ-kt-62', term: 'Optimum Population', definition: 'Population size combining with existing land and capital to maximise Real GDP per head.', topicNumber: 5, subtopicId: 'econ-5-3', subtopicCode: '5.3' },
  { id: 'econ-kt-63', term: 'Net Migration', definition: 'Difference between annual immigrants entering a country and emigrants leaving it.', topicNumber: 5, subtopicId: 'econ-5-3', subtopicCode: '5.3' },
  { id: 'econ-kt-64', term: 'Economic Development', definition: 'Multidimensional improvement in living standards, health, education, equity, and institutions.', topicNumber: 5, subtopicId: 'econ-5-4', subtopicCode: '5.4' },
  { id: 'econ-kt-65', term: 'Primary-Product Dependency', definition: 'Over-reliance on exporting unprocessed agricultural or mineral commodities with volatile prices.', topicNumber: 5, subtopicId: 'econ-5-4', subtopicCode: '5.4' },

  // Unit 6 (10 terms)
  { id: 'econ-kt-66', term: 'International Specialisation', definition: 'Concentrating national production on industries with the lowest relative opportunity cost.', topicNumber: 6, subtopicId: 'econ-6-1', subtopicCode: '6.1' },
  { id: 'econ-kt-67', term: 'Free Trade', definition: 'Cross-border exchange of goods and services unhindered by tariffs, quotas, or artificial barriers.', topicNumber: 6, subtopicId: 'econ-6-1', subtopicCode: '6.1' },
  { id: 'econ-kt-68', term: 'Multinational Corporation (MNC)', definition: 'Company owning and operating physical production or service facilities in more than one country.', topicNumber: 6, subtopicId: 'econ-6-2', subtopicCode: '6.2' },
  { id: 'econ-kt-69', term: 'Tariff', definition: 'Tax placed on imported goods that raises import prices and generates government revenue.', topicNumber: 6, subtopicId: 'econ-6-2', subtopicCode: '6.2' },
  { id: 'econ-kt-70', term: 'Quota', definition: 'Physical cap on the maximum quantity of a good permitted to be imported.', topicNumber: 6, subtopicId: 'econ-6-2', subtopicCode: '6.2' },
  { id: 'econ-kt-71', term: 'Dumping', definition: 'Exporting surplus goods below production cost to eliminate foreign domestic competitors.', topicNumber: 6, subtopicId: 'econ-6-2', subtopicCode: '6.2' },
  { id: 'econ-kt-72', term: 'Foreign Exchange Rate', definition: 'Price of one nation’s currency expressed in units of another currency.', topicNumber: 6, subtopicId: 'econ-6-3', subtopicCode: '6.3' },
  { id: 'econ-kt-73', term: 'Appreciation vs Depreciation', definition: 'Market-driven rise (SPICED) or fall (WPIDEC) in a floating currency’s external value.', topicNumber: 6, subtopicId: 'econ-6-3', subtopicCode: '6.3' },
  { id: 'econ-kt-74', term: 'Current Account', definition: 'Balance of payments record of trade in goods, trade in services, primary income, and secondary income.', topicNumber: 6, subtopicId: 'econ-6-4', subtopicCode: '6.4' },
  { id: 'econ-kt-75', term: 'Expenditure-Switching Policy', definition: 'Measures (depreciation, tariffs) encouraging buyers to switch from imports toward domestic goods.', topicNumber: 6, subtopicId: 'econ-6-4', subtopicCode: '6.4' },
];
