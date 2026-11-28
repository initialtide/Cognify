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
  ALEVEL_ECON_UNITS_1_3_EXAM_PRACTICE,
  ALEVEL_ECON_UNITS_1_3_FLASHCARDS,
  ALEVEL_ECON_UNITS_1_3_NOTES,
  ALEVEL_ECON_UNITS_1_3_QUIZZES,
  ALEVEL_ECON_UNITS_1_3_TOPICS,
} from './economics/alevelUnits1to3';
import {
  ALEVEL_ECON_UNITS_4_6_EXAM_PRACTICE,
  ALEVEL_ECON_UNITS_4_6_FLASHCARDS,
  ALEVEL_ECON_UNITS_4_6_NOTES,
  ALEVEL_ECON_UNITS_4_6_QUIZZES,
  ALEVEL_ECON_UNITS_4_6_TOPICS,
} from './economics/alevelUnits4to6';

export const ALEVEL_ECONOMICS_TOPICS: TopicDefinition[] = [
  ...ALEVEL_ECON_UNITS_1_3_TOPICS,
  ...ALEVEL_ECON_UNITS_4_6_TOPICS,
];

export const ALEVEL_ECONOMICS_NOTES: Record<string, NoteLesson> = {
  ...ALEVEL_ECON_UNITS_1_3_NOTES,
  ...ALEVEL_ECON_UNITS_4_6_NOTES,
};

export const ALEVEL_ECONOMICS_QUIZZES: QuizQuestion[] = [
  ...ALEVEL_ECON_UNITS_1_3_QUIZZES,
  ...ALEVEL_ECON_UNITS_4_6_QUIZZES,
];

export const ALEVEL_ECONOMICS_FLASHCARDS: FlashcardItem[] = [
  ...ALEVEL_ECON_UNITS_1_3_FLASHCARDS,
  ...ALEVEL_ECON_UNITS_4_6_FLASHCARDS,
];

export const ALEVEL_ECONOMICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  ...ALEVEL_ECON_UNITS_1_3_EXAM_PRACTICE,
  ...ALEVEL_ECON_UNITS_4_6_EXAM_PRACTICE,
];

export const ALEVEL_ECONOMICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-alecon-1',
    slug: 'unit-1-methodology-price-mechanism-elasticities',
    title: 'Unit 1: Methodology, Surplus, Behavioural Economics & Elasticities',
    topicNumber: 1,
    topicName: 'Economic Methodology, Price Mechanism & Elasticities',
    summary: 'Positive vs normative economics, PPC, bounded rationality & nudges, consumer/producer surplus, PED, YED, XED, and PES.',
    accentColor: '#d97706',
    sections: [
      {
        heading: '1.1–1.3 Core Micro Formulae',
        formula: 'PED = %ΔQd ÷ %ΔP  |  YED = %ΔQd ÷ %ΔY  |  XED = %ΔQd(A) ÷ %ΔP(B)  |  PES = %ΔQs ÷ %ΔP',
        points: [
          'Consumer surplus = area below D and above market price; Producer surplus = area above S and below market price.',
          'YED < 0 = inferior good; 0 < YED < 1 = normal necessity; YED > 1 = luxury. XED > 0 = substitutes; XED < 0 = complements.',
          'Behavioural biases (anchoring, loss aversion, hyperbolic discounting) challenge homo economicus rationality.',
        ],
      },
    ],
  },
  {
    id: 'cs-alecon-2',
    slug: 'unit-2-market-failure-government-intervention',
    title: 'Unit 2: Externalities (MSC/MSB), Pigouvian Taxes & Government Failure',
    topicNumber: 2,
    topicName: 'Market Failure & Government Intervention',
    summary: 'Negative/positive externalities, welfare loss triangles, public goods, asymmetric information, tax incidence, subsidies, price controls, and government failure.',
    accentColor: '#dc2626',
    sections: [
      {
        heading: '2.1–2.3 Marginal Welfare Conditions',
        formula: 'Social Optimum: MSB = MSC  |  Negative Production Externality: MSC > MPC (Qm > Qopt)',
        points: [
          'Inelastic demand pushes the larger share of an indirect tax burden onto consumers; elastic demand pushes more onto producers.',
          'Binding maximum price below Eq creates shortages & black markets; minimum price above Eq creates surpluses requiring state buffer purchases.',
          'Government failure arises from imperfect information, administrative costs, regulatory capture, and unintended consequences.',
        ],
      },
    ],
  },
  {
    id: 'cs-alecon-3',
    slug: 'unit-3-theory-of-the-firm-market-structures',
    title: 'Unit 3: Costs, Revenues, Perfect Competition, Monopoly & Oligopoly',
    topicNumber: 3,
    topicName: 'Theory of the Firm & Market Structures',
    summary: 'Diminishing marginal returns, SRAC/LRAC/MES, profit/revenue/sales max, perfect competition, monopoly, third-degree price discrimination, game theory, and contestable markets.',
    accentColor: '#7c3aed',
    sections: [
      {
        heading: '3.1–3.4 Marginal Efficiency Rules',
        formula: 'Profit Max: MC = MR  |  Revenue Max: MR = 0  |  Sales Max: AR = AC  |  Allocative Eff: P = MC  |  Productive Eff: MC = AC',
        points: [
          'Short-run shut-down point: P < AVC (cannot cover variable costs); Long-run exit point: P < AC.',
          'Monopoly sets Qm at MC = MR, charges Pm > MC (deadweight loss), yet supernormal profits can fund dynamic R&D efficiency.',
          'Prisoner’s Dilemma Nash equilibrium explains why oligopolies face incentives to cheat on collusive cartels; low sunk costs keep markets contestable.',
        ],
      },
    ],
  },
  {
    id: 'cs-alecon-4',
    slug: 'unit-4-macro-performance-ad-as',
    title: 'Unit 4: Circular Flow, Keynesian Multiplier & AD/AS Models',
    topicNumber: 4,
    topicName: 'Macroeconomic Performance & AD/AS Analysis',
    summary: 'Injections vs withdrawals, open-economy multiplier, accelerator effect, stagflation, output gaps, and Classical vs Keynesian LRAS.',
    accentColor: '#059669',
    sections: [
      {
        heading: '4.1–4.2 National Income & AD/AS Formulae',
        formula: 'AD = C + I + G + (X − M)  |  k = 1 ÷ (MPS + MPT + MPM)  |  ΔY = k × ΔJ',
        points: [
          'Keynesian LRAS evaluation: boosting AD inside a negative output gap yields non-inflationary growth; at Yfe it triggers pure demand-pull inflation.',
          'SRAS leftward shock (energy/wages) causes stagflation (inflation ↑ + real GDP ↓ simultaneously).',
          'Real GDP per head ignores inequality, informal economies, externalities, and working hours — pair with PPP & HDI.',
        ],
      },
    ],
  },
  {
    id: 'cs-alecon-5',
    slug: 'unit-5-macro-policy-phillips-lorenz',
    title: 'Unit 5: Phillips Curve, Fiscal/QE Policy, Supply-Side & Lorenz/Gini',
    topicNumber: 5,
    topicName: 'Macroeconomic Policy, Inflation & Inequality',
    summary: 'Fisher MV = PQ, benign vs malign deflation, NAIRU, SRPC/LRPC, structural deficits, crowding out, QE, liquidity traps, and Lorenz/Gini.',
    accentColor: '#2563eb',
    sections: [
      {
        heading: '5.1–5.3 Policy & Inequality Formulae',
        formula: 'MV = PQ  |  Gini Coefficient = Area A ÷ (Area A + Area B)  |  0 = Equal, 1 = Total Inequality',
        points: [
          'Expectations-augmented LRPC: AD stimulus lowers U only short-term; rising inflation expectations shift SRPC up back to NRU.',
          'QE creates electronic reserves to buy bonds (lowering yields & lifting liquidity) but risks asset inequality and liquidity traps.',
          'Interventionist supply-side (education, rail) expands LRAS & equity with long lags; market-based cuts taxes/red tape faster but can widen Gini.',
        ],
      },
    ],
  },
  {
    id: 'cs-alecon-6',
    slug: 'unit-6-international-trade-tariffs-bop',
    title: 'Unit 6: Comparative Advantage, Tariffs, Marshall-Lerner & J-Curve',
    topicNumber: 6,
    topicName: 'International Economics, Trade & Exchange Rates',
    summary: 'Opportunity-cost comparative advantage, Terms of Trade, tariff deadweight losses, trade creation vs diversion, Marshall-Lerner, and J-curve.',
    accentColor: '#0284c7',
    sections: [
      {
        heading: '6.1 Global Trade Formulae',
        formula: 'ToT = (Export Price Index ÷ Import Price Index) × 100  |  Marshall-Lerner: |PEDx| + |PEDm| > 1',
        points: [
          'Specialise in lowest domestic opportunity cost; mutually beneficial Terms of Trade lie strictly between both countries’ opportunity costs.',
          'Tariff raises Pw → Pw+t: creates tariff revenue t(Q₃−Q₂) plus TWO deadweight loss triangles (production + consumption inefficiency).',
          'J-curve: short-run inelastic contracts worsen a current account deficit right after depreciation before long-run elastic switching improves it.',
        ],
      },
    ],
  },
];

export const ALEVEL_ECONOMICS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'alecon-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Economics Paper 1: Markets & Market Failure (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '7136/1',
    durationMinutes: 120,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Evaluate the effectiveness of a Pigouvian carbon tax compared with tradable pollution permits in correcting negative production externalities.',
        marks: 25,
        markScheme: [
          'Draws MSC > MPC diagram showing welfare loss triangle and tax shifting MPC → MSC.',
          'Evaluates PED dependence, regressive burden, and information failure in setting exact MEC.',
        ],
      },
    ],
  },
  {
    id: 'alecon-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Economics Paper 2: National & International Economy (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '7136/2',
    durationMinutes: 120,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Assess whether expansionary fiscal policy is more effective than Quantitative Easing in closing a deep negative output gap.',
        marks: 25,
        markScheme: [
          'Uses Keynesian LRAS + multiplier k = 1/MPW vs liquidity trap & QE wealth-inequality limits.',
          'Evaluates structural deficit, crowding out, and time lags.',
        ],
      },
    ],
  },
  {
    id: 'alecon-pp-2024-p3',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Economics Paper 3: Economic Principles & Issues (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '9708/31',
    durationMinutes: 75,
    totalMarks: 30,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Compare price and output outcomes when a monopolist switches from profit maximisation (MC = MR) to revenue maximisation (MR = 0).',
        marks: 4,
        markScheme: [
          'Output rises and price falls from Pm toward lower price where MR = 0.',
        ],
      },
    ],
  },
  {
    id: 'alecon-pp-2024-p4',
    specEra: 'new-9-1',
    year: '2024',
    title: 'A-Level Economics Paper 4: Data Response & Essays (2024)',
    tier: 'A-Level',
    series: 'June 2024',
    paperCode: '9708/41',
    durationMinutes: 120,
    totalMarks: 60,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Evaluate whether currency depreciation can permanently cure a persistent current account deficit.',
        marks: 20,
        markScheme: [
          'Applies Marshall-Lerner (|PEDx| + |PEDm| > 1) and J-curve short-run dip.',
          'Evaluates imported cost-push inflation and structural supply-side competitiveness.',
        ],
      },
    ],
  },
  {
    id: 'alecon-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'A-Level Economics Paper 1: Microeconomics & Competition Policy (2023)',
    tier: 'A-Level',
    series: 'June 2023',
    paperCode: '7136/1',
    durationMinutes: 120,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Evaluate whether a natural monopoly should be nationalised or regulated using RPI − X price caps.',
        marks: 25,
        markScheme: [
          'Explains falling LRAC across full market demand and dynamic R&D vs X-inefficiency.',
          'Evaluates regulatory capture vs state-ownership fiscal burden.',
        ],
      },
    ],
  },
  {
    id: 'alecon-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'A-Level Economics Paper 2: Macroeconomics & Development (2023)',
    tier: 'A-Level',
    series: 'June 2023',
    paperCode: '7136/2',
    durationMinutes: 120,
    totalMarks: 80,
    sampleQuestions: [
      {
        number: 'Q1',
        question: 'Using SRPC and LRPC diagrams, assess whether supply-side policies can reduce both inflation and unemployment without widening the Gini coefficient.',
        marks: 25,
        markScheme: [
          'Shows LRPC shifting left via interventionist human-capital investment vs market-based inequality risk.',
        ],
      },
    ],
  },
];

export const ALEVEL_ECONOMICS_KEY_TERMS: KeyTermEntry[] = [
  // Unit 1
  { id: 'alecon-kt-1', term: 'Positive Statement', definition: 'Objective economic claim that can be tested and verified against empirical evidence.', topicNumber: 1, subtopicId: 'al-econ-1-1', subtopicCode: '1.1' },
  { id: 'alecon-kt-2', term: 'Normative Statement', definition: 'Subjective value judgement expressing what ought to happen in an economy.', topicNumber: 1, subtopicId: 'al-econ-1-1', subtopicCode: '1.1' },
  { id: 'alecon-kt-3', term: 'Bounded Rationality', definition: 'Cognitive limit where consumers use heuristics rather than perfect optimisation due to limited time and information.', topicNumber: 1, subtopicId: 'al-econ-1-1', subtopicCode: '1.1' },
  { id: 'alecon-kt-4', term: 'Consumer Surplus', definition: 'Difference between the maximum price consumers are willing to pay and the market price actually paid.', topicNumber: 1, subtopicId: 'al-econ-1-2', subtopicCode: '1.2' },
  { id: 'alecon-kt-5', term: 'Producer Surplus', definition: 'Difference between the market price firms receive and the minimum price they were willing to supply at.', topicNumber: 1, subtopicId: 'al-econ-1-2', subtopicCode: '1.2' },
  { id: 'alecon-kt-6', term: 'Cross Elasticity of Demand (XED)', definition: 'Responsiveness of demand for Good A to a percentage change in the price of Good B.', topicNumber: 1, subtopicId: 'al-econ-1-3', subtopicCode: '1.3' },
  { id: 'alecon-kt-7', term: 'Income Elasticity of Demand (YED)', definition: 'Responsiveness of quantity demanded to a percentage change in real household income.', topicNumber: 1, subtopicId: 'al-econ-1-3', subtopicCode: '1.3' },
  // Unit 2
  { id: 'alecon-kt-8', term: 'Marginal Social Cost (MSC)', definition: 'Marginal Private Cost plus Marginal External Cost imposed on third parties (MSC = MPC + MEC).', topicNumber: 2, subtopicId: 'al-econ-2-1', subtopicCode: '2.1' },
  { id: 'alecon-kt-9', term: 'Marginal Social Benefit (MSB)', definition: 'Marginal Private Benefit plus Marginal External Benefit gained by third parties (MSB = MPB + MEB).', topicNumber: 2, subtopicId: 'al-econ-2-1', subtopicCode: '2.1' },
  { id: 'alecon-kt-10', term: 'Asymmetric Information', definition: 'Market failure where one party in a transaction holds superior knowledge over the other (e.g. adverse selection, moral hazard).', topicNumber: 2, subtopicId: 'al-econ-2-1', subtopicCode: '2.1' },
  { id: 'alecon-kt-11', term: 'Pigouvian Tax', definition: 'Indirect tax set equal to marginal external cost to internalise a negative externality.', topicNumber: 2, subtopicId: 'al-econ-2-2', subtopicCode: '2.2' },
  { id: 'alecon-kt-12', term: 'Tax Incidence', definition: 'Distribution of the economic burden of an indirect tax between consumers and producers, governed by PED and PES.', topicNumber: 2, subtopicId: 'al-econ-2-2', subtopicCode: '2.2' },
  { id: 'alecon-kt-13', term: 'Deadweight Welfare Loss', definition: 'Net loss of total consumer and producer surplus caused by market failure or distorting intervention.', topicNumber: 2, subtopicId: 'al-econ-2-2', subtopicCode: '2.2' },
  { id: 'alecon-kt-14', term: 'Government Failure', definition: 'When state intervention causes a deeper net welfare loss than the original market failure.', topicNumber: 2, subtopicId: 'al-econ-2-3', subtopicCode: '2.3' },
  { id: 'alecon-kt-15', term: 'Tradable Pollution Permits', definition: 'Cap-and-trade licences capping total emissions while letting low-abatement firms sell spare permits.', topicNumber: 2, subtopicId: 'al-econ-2-3', subtopicCode: '2.3' },
  // Unit 3
  { id: 'alecon-kt-16', term: 'Diminishing Marginal Returns', definition: 'Short-run law where adding variable factors to a fixed factor eventually reduces marginal product.', topicNumber: 3, subtopicId: 'al-econ-3-1', subtopicCode: '3.1' },
  { id: 'alecon-kt-17', term: 'Minimum Efficient Scale (MES)', definition: 'Lowest level of output at which long-run average cost (LRAC) is minimised.', topicNumber: 3, subtopicId: 'al-econ-3-1', subtopicCode: '3.1' },
  { id: 'alecon-kt-18', term: 'Profit Satisficing', definition: 'Managers pursuing sufficient profit to satisfy shareholders while also pursuing growth or perks.', topicNumber: 3, subtopicId: 'al-econ-3-1', subtopicCode: '3.1' },
  { id: 'alecon-kt-19', term: 'Allocative Efficiency', definition: 'Producing the exact bundle society values most where Price equals Marginal Cost (P = MC).', topicNumber: 3, subtopicId: 'al-econ-3-2', subtopicCode: '3.2' },
  { id: 'alecon-kt-20', term: 'Productive Efficiency', definition: 'Producing at the minimum point of the Average Cost curve (where MC = AC).', topicNumber: 3, subtopicId: 'al-econ-3-2', subtopicCode: '3.2' },
  { id: 'alecon-kt-21', term: 'Dynamic Efficiency', definition: 'Long-run innovation and process improvement financed by reinvested supernormal profits.', topicNumber: 3, subtopicId: 'al-econ-3-3', subtopicCode: '3.3' },
  { id: 'alecon-kt-22', term: 'Natural Monopoly', definition: 'Industry where huge fixed infrastructure costs cause LRAC to fall across the entire market demand.', topicNumber: 3, subtopicId: 'al-econ-3-3', subtopicCode: '3.3' },
  { id: 'alecon-kt-23', term: 'Third-Degree Price Discrimination', definition: 'Charging different prices to distinct consumer segments with different PEDs for the same good.', topicNumber: 3, subtopicId: 'al-econ-3-3', subtopicCode: '3.3' },
  { id: 'alecon-kt-24', term: 'Nash Equilibrium', definition: 'Game-theory outcome where no firm can improve its payoff by unilaterally changing strategy.', topicNumber: 3, subtopicId: 'al-econ-3-4', subtopicCode: '3.4' },
  { id: 'alecon-kt-25', term: 'Contestable Market', definition: 'Market with low barriers to entry/exit and low sunk costs where threat of hit-and-run entry disciplines incumbents.', topicNumber: 3, subtopicId: 'al-econ-3-4', subtopicCode: '3.4' },
  { id: 'alecon-kt-26', term: 'X-Inefficiency', definition: 'Operating above the minimum possible AC curve due to organisational slack under weak competition.', topicNumber: 3, subtopicId: 'al-econ-3-3', subtopicCode: '3.3' },
  // Unit 4
  { id: 'alecon-kt-27', term: 'Keynesian Multiplier', definition: 'Amplified change in real national income resulting from an initial autonomous injection (k = 1 ÷ MPW).', topicNumber: 4, subtopicId: 'al-econ-4-1', subtopicCode: '4.1' },
  { id: 'alecon-kt-28', term: 'Marginal Propensity to Withdraw (MPW)', definition: 'Sum of MPS + MPT + MPM showing the fraction of extra income leaving the domestic circular flow.', topicNumber: 4, subtopicId: 'al-econ-4-1', subtopicCode: '4.1' },
  { id: 'alecon-kt-29', term: 'Negative Output Gap', definition: 'Deficit where actual real GDP falls below trend productive potential with spare capacity.', topicNumber: 4, subtopicId: 'al-econ-4-1', subtopicCode: '4.1' },
  { id: 'alecon-kt-30', term: 'Positive Output Gap', definition: 'Temporary boom where actual real GDP exceeds trend potential, generating inflationary pressure.', topicNumber: 4, subtopicId: 'al-econ-4-1', subtopicCode: '4.1' },
  { id: 'alecon-kt-31', term: 'Accelerator Effect', definition: 'Disproportionate swings in business capital investment triggered by changes in the rate of GDP growth.', topicNumber: 4, subtopicId: 'al-econ-4-2', subtopicCode: '4.2' },
  { id: 'alecon-kt-32', term: 'Stagflation', definition: 'Simultaneous rising inflation and falling real GDP caused by an adverse leftward SRAS shock.', topicNumber: 4, subtopicId: 'al-econ-4-2', subtopicCode: '4.2' },
  { id: 'alecon-kt-33', term: 'Keynesian LRAS', definition: 'Three-part aggregate supply curve spanning horizontal spare capacity, curved bottlenecks, and vertical Yfe.', topicNumber: 4, subtopicId: 'al-econ-4-2', subtopicCode: '4.2' },
  // Unit 5
  { id: 'alecon-kt-34', term: 'Fisher Equation (MV = PQ)', definition: 'Monetary identity linking money supply and velocity to nominal national income.', topicNumber: 5, subtopicId: 'al-econ-5-1', subtopicCode: '5.1' },
  { id: 'alecon-kt-35', term: 'Disinflation', definition: 'A decline in the rate of inflation while the general price level continues rising slowly.', topicNumber: 5, subtopicId: 'al-econ-5-1', subtopicCode: '5.1' },
  { id: 'alecon-kt-36', term: 'NAIRU / Natural Rate', definition: 'Equilibrium unemployment persisting at full employment (frictional + structural) with stable inflation.', topicNumber: 5, subtopicId: 'al-econ-5-1', subtopicCode: '5.1' },
  { id: 'alecon-kt-37', term: 'Hysteresis', definition: 'Permanent rise in structural unemployment after a prolonged recession erodes workers’ skills.', topicNumber: 5, subtopicId: 'al-econ-5-1', subtopicCode: '5.1' },
  { id: 'alecon-kt-38', term: 'Long-Run Phillips Curve', definition: 'Vertical curve at NAIRU demonstrating no lasting long-run inflation–unemployment trade-off.', topicNumber: 5, subtopicId: 'al-econ-5-1', subtopicCode: '5.1' },
  { id: 'alecon-kt-39', term: 'Automatic Stabilisers', definition: 'Built-in tax and welfare rules automatically cushioning recessions and moderating booms.', topicNumber: 5, subtopicId: 'al-econ-5-2', subtopicCode: '5.2' },
  { id: 'alecon-kt-40', term: 'Structural Budget Deficit', definition: 'Underlying fiscal shortfall persisting even when the economy operates at full employment.', topicNumber: 5, subtopicId: 'al-econ-5-2', subtopicCode: '5.2' },
  { id: 'alecon-kt-41', term: 'Crowding Out', definition: 'Heavy government borrowing driving up interest rates and displacing private capital investment.', topicNumber: 5, subtopicId: 'al-econ-5-2', subtopicCode: '5.2' },
  { id: 'alecon-kt-42', term: 'Quantitative Easing (QE)', definition: 'Central bank purchases of financial assets with created reserves to boost liquidity and lower yields.', topicNumber: 5, subtopicId: 'al-econ-5-2', subtopicCode: '5.2' },
  { id: 'alecon-kt-43', term: 'Liquidity Trap', definition: 'Near-zero interest-rate environment where depressed confidence causes banks and households to hoard cash.', topicNumber: 5, subtopicId: 'al-econ-5-2', subtopicCode: '5.2' },
  { id: 'alecon-kt-44', term: 'Lorenz Curve', definition: 'Graph comparing cumulative population share against cumulative income share relative to a 45° equality line.', topicNumber: 5, subtopicId: 'al-econ-5-3', subtopicCode: '5.3' },
  { id: 'alecon-kt-45', term: 'Gini Coefficient', definition: 'Inequality index A ÷ (A + B) from 0 (perfect equality) to 1 (complete inequality).', topicNumber: 5, subtopicId: 'al-econ-5-3', subtopicCode: '5.3' },
  { id: 'alecon-kt-46', term: 'Poverty Trap', definition: 'High effective marginal tax plus benefit loss discouraging low-paid workers from earning extra income.', topicNumber: 5, subtopicId: 'al-econ-5-3', subtopicCode: '5.3' },
  // Unit 6
  { id: 'alecon-kt-47', term: 'Comparative Advantage', definition: 'Producing a good at a lower domestic opportunity cost than a trading partner.', topicNumber: 6, subtopicId: 'al-econ-6-1', subtopicCode: '6.1' },
  { id: 'alecon-kt-48', term: 'Terms of Trade', definition: '(Export Price Index ÷ Import Price Index) × 100 measuring import purchasing power per unit of exports.', topicNumber: 6, subtopicId: 'al-econ-6-1', subtopicCode: '6.1' },
  { id: 'alecon-kt-49', term: 'Trade Diversion', definition: 'Welfare loss when a customs union redirects imports from a lower-cost external nation to a costlier bloc member.', topicNumber: 6, subtopicId: 'al-econ-6-1', subtopicCode: '6.1' },
  { id: 'alecon-kt-50', term: 'Marshall-Lerner Condition', definition: 'Rule that currency depreciation improves the current account strictly when |PEDx| + |PEDm| > 1.', topicNumber: 6, subtopicId: 'al-econ-6-1', subtopicCode: '6.1' },
  { id: 'alecon-kt-51', term: 'J-Curve Effect', definition: 'Short-run worsening then long-run improvement in the current account following a currency depreciation.', topicNumber: 6, subtopicId: 'al-econ-6-1', subtopicCode: '6.1' },
];
