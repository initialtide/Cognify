import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ECON_TOPICS_UNIT_4: TopicDefinition[] = [
  {
    number: 4,
    title: 'Government & The Macroeconomy',
    subtopics: [
      {
        id: 'econ-4-1',
        code: '4.1',
        slug: '4.1-macroeconomic-aims-and-conflicts',
        title: 'Government Macroeconomic Aims & Policy Conflicts',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-4-2',
        code: '4.2',
        slug: '4.2-fiscal-policy-taxation-government-budgets',
        title: 'Fiscal Policy, Taxation & Government Budgets',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-4-3',
        code: '4.3',
        slug: '4.3-monetary-policy-interest-rates-money-supply',
        title: 'Monetary Policy: Interest Rates, Money Supply & Exchange Rates',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-4-4',
        code: '4.4',
        slug: '4.4-supply-side-policies-long-run-capacity',
        title: 'Supply-Side Policies & Long-Run Productive Capacity',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-4-5',
        code: '4.5',
        slug: '4.5-economic-growth-real-gdp-recessions',
        title: 'Economic Growth: Real GDP, Causes, Consequences & Recessions',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-4-6',
        code: '4.6',
        slug: '4.6-employment-and-unemployment',
        title: 'Employment & Unemployment: Measurement, Causes & Policies',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-4-7',
        code: '4.7',
        slug: '4.7-inflation-and-deflation-cpi',
        title: 'Inflation & Deflation: CPI Measurement, Causes & Consequences',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const ECON_NOTES_UNIT_4: Record<string, NoteLesson> = {
  'econ-4-1': {
    subtopicId: 'econ-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Government Macroeconomic Aims & Policy Conflicts',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 4.1 Government Macroeconomic intervention (Updated for 2027 syllabus)',
    youtubeId: 'Pe9iewI17Hc',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Role of Government: Local, National & International', cardId: 'econ-4-1-c1' },
      { time: '3:50', seconds: 230, label: 'The Five Macroeconomic Aims (G-E-I-B-R)', cardId: 'econ-4-1-c2' },
      { time: '7:45', seconds: 465, label: 'Conflicts Between Macroeconomic Aims & Policy Trade-offs', cardId: 'econ-4-1-c3' },
    ],
    cards: [
      {
        id: 'econ-4-1-c1',
        title: 'The Role of Government Across Economic Levels',
        summary: 'Governments act as producer, employer, regulator, and macroeconomic manager at local, national, and international levels.',
        bullets: [
          '**Local government** - delivers local public services such as refuse collection, street lighting, local roads, libraries, and municipal parks.',
          '**National government** - manages taxation, national defence, state healthcare/education, macro stability, and redistribution through the national budget.',
          '**International level** - negotiates trade agreements, sets customs tariffs, contributes to climate accords, and cooperates with bodies such as the WTO and IMF.',
        ],
        subsections: [
          {
            heading: 'Government as Employer & Producer',
            bullets: [
              'As a major employer (teachers, doctors, civil servants), public-sector pay policy directly influences national wage expectations and aggregate demand.',
              'Governments also directly produce public and merit goods or contract private firms via public-private partnerships.',
            ],
            exampleHeading: 'Concrete check: Multi-tier spending',
            examples: [
              'If national government spends $12bn on high-speed rail while local councils fund $400m of commuter bus lanes, total public investment boosts both regional jobs and long-run productivity.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'macroeconomics', definition: 'Study of economy-wide aggregates including GDP, employment, inflation, and external trade.' },
        ],
      },
      {
        id: 'econ-4-1-c2',
        title: 'The Five Core Macroeconomic Aims',
        summary: 'Governments simultaneously target steady growth, full employment, price stability, balance of payments stability, and fairer income distribution.',
        diagram: 'business-cycle',
        bullets: [
          '**Economic growth** - steady, sustainable rise in real GDP (typically 2%–3% per year in mature economies) raising average living standards.',
          '**Full employment / low unemployment** - ensuring people willing and able to work find jobs (allowing a tiny natural 3%–4% frictional rate).',
          '**Price stability (low, stable inflation)** - keeping CPI inflation close to ~2% so money retains purchasing power without slipping into deflation.',
          '**Balance of payments stability** - avoiding persistent, unsustainable current account deficits where import spending drains foreign reserves.',
          '**Redistribution of income & environmental sustainability** - narrowing extreme poverty gaps via progressive taxes/transfers while limiting carbon damage.',
        ],
        subsections: [
          {
            heading: 'Why 2% Inflation Is Targeted Instead of 0%',
            bullets: [
              'A small 2% inflation cushion prevents dangerous deflation spirals, gives firms real-wage flexibility, and signals healthy demand.',
            ],
            exampleHeading: 'Worked check: Target dashboard',
            examples: [
              'An economy recording +2.8% real GDP growth, 3.6% unemployment, 2.1% CPI inflation, and a −0.5% of GDP current account balance is meeting its macroeconomic aims simultaneously.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price stability', definition: 'Low and predictable rate of inflation (around 2%) preserving confidence and purchasing power.' },
          { term: 'full employment', definition: 'Lowest sustainable unemployment rate where everyone willing and able to work at current wages has a job.' },
        ],
        memoryAid: 'GEIBR: Growth, Employment, Inflation (low), Balance of payments, Redistribution.',
      },
      {
        id: 'econ-4-1-c3',
        title: 'Conflicts Between Macroeconomic Aims',
        summary: 'Demand-management policies that solve one macroeconomic problem frequently trigger an unintended trade-off with another aim.',
        bullets: [
          '**Full employment vs Price stability** - stimulating aggregate demand cuts unemployment, but tighter labour markets push wages and demand-pull inflation higher (short-run Phillips curve trade-off).',
          '**Economic growth vs Balance of payments** - rapid GDP growth boosts household incomes, sucking in higher imports and widening a current account deficit.',
          '**Economic growth vs Environment & Equality** - rapid industrialisation lifts GDP quickly yet increases CO₂ emissions and can widen income gaps between capital owners and low-skilled workers.',
        ],
        subsections: [
          {
            heading: 'Resolving Conflicts in the Long Run',
            bullets: [
              'Supply-side reforms (education, green technology, infrastructure) expand productive capacity, enabling non-inflationary growth and stronger export competitiveness simultaneously.',
            ],
            exampleHeading: 'Worked conflict example: Overheating boom',
            examples: [
              'Cutting taxes by $20bn pushes GDP growth from 1% to 4.5% and cuts unemployment from 6% to 3.5%, but pushes CPI inflation from 2% to 6.2% and widens the trade deficit by $9bn.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'macroeconomic conflict', definition: 'Trade-off where pursuing one policy objective (e.g. faster growth) makes achieving another (e.g. low inflation) harder.' },
        ],
        commonMistake: 'Students often claim governments want 0% unemployment or 0% inflation. Always specify LOW unemployment (frictional transitions always exist) and LOW, STABLE inflation (~2%).',
      },
    ],
    keyTerms: [
      { term: 'Macroeconomic Aims', definition: 'Core economy-wide targets: growth, low unemployment, low stable inflation, BoP stability, and income redistribution.' },
      { term: 'Full Employment', definition: 'State where virtually all labour resources willing and able to work are employed.' },
      { term: 'Price Stability', definition: 'Low, steady inflation rate avoiding both rapid price rises and destructive deflation.' },
      { term: 'Policy Conflict', definition: 'Trade-off where improving one macroeconomic indicator worsens another in the short run.' },
      { term: 'Business Cycle', definition: 'Recurring fluctuations in real GDP through boom, slowdown, recession, and recovery.' },
    ],
    checklistPoints: [
      'State all five Cambridge 0455 macroeconomic aims clearly.',
      'Explain why governments target ~2% inflation rather than 0% or deflation.',
      'Analyse at least three macroeconomic conflicts (growth vs inflation, growth vs BoP, growth vs environment).',
    ],
  },

  'econ-4-2': {
    subtopicId: 'econ-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Fiscal Policy, Taxation & Government Budgets',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 4.2 Fiscal policy (Updated for the 2027 syllabus)',
    youtubeId: '1BeUz0qT-Hg',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Government Budget: Surplus, Deficit & Public Spending', cardId: 'econ-4-2-c1' },
      { time: '4:20', seconds: 260, label: 'Direct vs Indirect & Progressive, Proportional, Regressive Taxes', cardId: 'econ-4-2-c2' },
      { time: '8:50', seconds: 530, label: 'Expansionary vs Contractionary Fiscal Policy & Evaluation', cardId: 'econ-4-2-c3' },
    ],
    cards: [
      {
        id: 'econ-4-2-c1',
        title: 'The Government Budget & Public Spending Priorities',
        summary: 'Fiscal policy uses government spending (G) and taxation (T) to steer total demand, fund public services, and redistribute income.',
        bullets: [
          '**Budget balance** - **Budget surplus** when Tax Revenue > Government Spending (`T > G`); **Budget deficit** when `G > T` (requiring government borrowing, adding to national debt); **Balanced budget** when `G = T`.',
          '**Reasons for government spending** - providing public goods (defence), merit goods (schools, hospitals), social safety nets (pensions/benefits), infrastructure, and counter-cyclical demand support.',
          '**Opportunity cost** - every extra billion spent on roads or tax cuts carries an opportunity cost in foregone healthcare, debt reduction, or education.',
        ],
        subsections: [
          {
            heading: 'Budget Deficit vs National Debt',
            bullets: [
              'A **budget deficit** is a single-year flow (`G − T`); **national debt** is the accumulated stock of all past unpaid government borrowing.',
            ],
            exampleHeading: 'Worked calculation: Annual budget balance',
            examples: [
              'If a government collects $410bn in taxes and spends $445bn in 2026, it runs a budget deficit of $35bn ($410bn − $445bn = −$35bn), which adds $35bn to total national debt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fiscal policy', definition: 'Use of government spending and taxation to influence aggregate demand and macroeconomic aims.' },
          { term: 'budget deficit', definition: 'Annual shortfall when government expenditure exceeds total tax revenue.' },
        ],
      },
      {
        id: 'econ-4-2-c2',
        title: 'Classifying Taxes: Direct vs Indirect & Incidence',
        summary: 'Taxes differ both by who pays them legally (direct vs indirect) and by how the percentage tax burden changes across income brackets.',
        bullets: [
          '**Direct taxes** - levied directly on income or wealth (income tax, corporation tax, capital gains tax); harder to evade but high rates can blunt work/investment incentives.',
          '**Indirect taxes** - levied on spending on goods and services (VAT/GST, fuel/tobacco excise duties, tariffs); fast to collect and deter demerit goods, but raise prices and hit lower earners disproportionately.',
          '**Progressive tax** - higher percentage tax rate as income rises (reduces inequality); **Proportional (flat) tax** - constant percentage at all incomes; **Regressive tax** - lower-income earners pay a HIGHER percentage of their income (e.g. VAT).',
        ],
        subsections: [
          {
            heading: 'Principles (Canons) of a Good Tax',
            bullets: [
              'A good tax is **equitable** (fair), **certain** (clear rules), **convenient** to pay, **economical** (low collection cost), and minimises distortion to work and enterprise.',
            ],
            exampleHeading: 'Worked calculation: Why VAT is regressive',
            examples: [
              'A $200 VAT bill on a TV equals 20% of a $1,000/month worker’s income ($200 ÷ $1,000 × 100%) but only 4% of a $5,000/month manager’s income ($200 ÷ $5,000 × 100%) — making VAT regressive.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'progressive tax', definition: 'Tax taking a rising percentage of income as a person’s income increases.' },
          { term: 'regressive tax', definition: 'Tax taking a higher percentage of income from lower-income earners than higher-income earners.' },
        ],
        memoryAid: 'Direct = on Income/Profits (mostly progressive); Indirect = on Spending (mostly regressive).',
      },
      {
        id: 'econ-4-2-c3',
        title: 'Expansionary vs Contractionary Fiscal Policy',
        summary: 'Governments expand budgets during recessions to boost jobs and tighten budgets during inflationary booms to cool spending.',
        bullets: [
          '**Expansionary (reflationary) fiscal policy** - cut taxes and/or raise government spending → higher disposable income & public investment → aggregate demand rises → faster GDP growth and lower cyclical unemployment.',
          '**Contractionary (deflationary) fiscal policy** - raise taxes and/or cut government spending → lower disposable income → aggregate demand falls → reduces demand-pull inflation and narrows budget/import deficits.',
          '**Limitations** - time lags in approving budgets, rising public debt/interest repayments, potential crowding out of private borrowing, and households saving tax cuts during low confidence.',
        ],
        subsections: [
          {
            heading: 'Dual Demand & Supply-Side Impact of Fiscal Spending',
            bullets: [
              'Spending on infrastructure, vocational training, or R&D boosts short-run AD AND expands long-run productive capacity (shifting PPC outward).',
            ],
            exampleHeading: 'Worked check: Fiscal multiplier intuition',
            examples: [
              'When a government spends $10bn building new hospitals, construction workers spend ~70% of their wages locally, generating further rounds of income and retail jobs across the economy.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'expansionary fiscal policy', definition: 'Raising government spending and/or cutting taxes to stimulate aggregate demand and employment.' },
        ],
        commonMistake: 'Do NOT confuse a budget deficit (government G > T) with a current account deficit (imports > exports), or mistake interest rates for fiscal policy (interest rates are MONETARY!).',
      },
    ],
    keyTerms: [
      { term: 'Fiscal Policy', definition: 'Manipulation of government spending and taxation to steer macroeconomic performance.' },
      { term: 'Direct Tax', definition: 'Tax levied directly on individual or corporate income and wealth (e.g. income tax, corporation tax).' },
      { term: 'Indirect Tax', definition: 'Tax levied on expenditure on goods and services (e.g. VAT, excise duties).' },
      { term: 'Progressive Tax', definition: 'Tax whose average percentage rate rises as taxable income increases.' },
      { term: 'Budget Deficit', definition: 'Situation where annual government spending exceeds tax revenue.' },
    ],
    checklistPoints: [
      'Calculate a budget surplus or deficit and distinguish deficit from accumulated national debt.',
      'Compare direct vs indirect taxes and prove numerically why VAT is regressive.',
      'Analyse expansionary vs contractionary fiscal policy with two evaluation limitations.',
    ],
  },

  'econ-4-3': {
    subtopicId: 'econ-4-3',
    subtopicCode: '4.3',
    subtopicTitle: 'Monetary Policy: Interest Rates, Money Supply & Exchange Rates',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 4.3 Monetary policy (Updated for the 2027 syllabus)',
    youtubeId: 'ixLDwUM2s6o',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:55',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Monetary Policy Instruments & Role of the Central Bank', cardId: 'econ-4-3-c1' },
      { time: '3:40', seconds: 220, label: 'Interest Rate Transmission to Spending, Investment & Currency', cardId: 'econ-4-3-c2' },
      { time: '7:20', seconds: 440, label: 'Expansionary vs Contractionary Monetary Policy & Limits', cardId: 'econ-4-3-c3' },
    ],
    cards: [
      {
        id: 'econ-4-3-c1',
        title: 'Monetary Policy Instruments & The Central Bank',
        summary: 'Independent central banks control base interest rates, money supply, and foreign exchange interventions to keep inflation near target.',
        bullets: [
          '**Base interest rate** - the benchmark rate at which the central bank lends to commercial banks, steering mortgage, loan, and savings rates nationwide.',
          '**Money supply control** - expanding liquidity (e.g. Quantitative Easing / buying government bonds) injects cash into banks to encourage lending; reducing money supply curbs excessive credit.',
          '**Foreign exchange rates** - interest rate shifts attract or deter foreign capital flows ("hot money"), indirectly moving floating exchange rates.',
        ],
        subsections: [
          {
            heading: 'Why Central Banks Are Usually Independent',
            bullets: [
              'Political independence prevents governments from cutting interest rates recklessly just before elections, keeping inflation expectations anchored around ~2%.',
            ],
            exampleHeading: 'Concrete check: Monthly rate decisions',
            examples: [
              'Unlike an annual government fiscal budget, a central bank committee can adjust base rates by 0.25% or 0.50% within weeks if CPI inflation jumps unexpectedly.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'monetary policy', definition: 'Central bank control of interest rates, money supply, and exchange rates to manage inflation and demand.' },
          { term: 'base interest rate', definition: 'Benchmark rate set by the central bank that determines retail borrowing and saving rates.' },
        ],
      },
      {
        id: 'econ-4-3-c2',
        title: 'The Interest Rate Transmission Mechanism',
        summary: 'Changing interest rates ripples across household saving, mortgages, business capital investment, and exchange-rate competitiveness.',
        bullets: [
          '**Household channel** - higher interest rates reward saving, raise variable mortgage repayments (cutting discretionary income), and discourage consumer credit spending.',
          '**Business investment channel** - higher borrowing costs reduce the expected return on new factory/equipment loans, lowering private investment (I).',
          '**Exchange rate channel** - higher domestic interest rates attract foreign hot-money inflows → higher demand for domestic currency → currency appreciates (SPICED: exports dearer, imports cheaper → net exports fall).',
        ],
        subsections: [
          {
            heading: 'Worked Numerical Impact on a Homeowner',
            bullets: [
              'Higher rates squeeze cash flow quickly in economies where most mortgages carry variable interest rates.',
            ],
            exampleHeading: 'Worked calculation: Mortgage squeeze',
            examples: [
              'On a $200,000 interest-only mortgage, a base rate rise from 3% to 5.5% increases annual interest payments from $6,000 to $11,000 (+$5,000/year or +$417/month less disposable spending).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hot money', definition: 'Short-term international financial deposits moving rapidly between countries chasing higher interest rates.' },
        ],
        memoryAid: 'Higher Interest Rates → Save ↑, Borrow ↓, Invest ↓, Currency ↑ → Total Demand ↓.',
      },
      {
        id: 'econ-4-3-c3',
        title: 'Expansionary vs Contractionary Monetary Policy & Limits',
        summary: 'Cutting rates revives sluggish economies while raising rates fights demand-pull inflation, though time lags and low confidence limit effectiveness.',
        bullets: [
          '**Expansionary monetary policy** - cut interest rates and/or expand money supply → cheaper borrowing, lower saving incentive, weaker currency (WPIDEC boosts exports) → boosts AD, real GDP, and jobs.',
          '**Contractionary monetary policy** - raise interest rates and/or tighten money supply → curbs household spending, investment, and net exports → lowers demand-pull inflation.',
          '**Key limitations** - full effect takes **12–18 months** (time lags); ineffective during deep recessions if confidence is frozen ("pushing on a string") or rates are near 0%; raising rates cannot directly solve **cost-push** oil shocks without causing recession.',
        ],
        subsections: [
          {
            heading: 'Evaluating Monetary vs Fiscal Policy',
            bullets: [
              'Monetary policy acts quickly without adding to government debt, whereas fiscal policy can target specific deprived regions or sectors directly.',
            ],
            exampleHeading: 'Worked check: Zero lower bound',
            examples: [
              'If base interest rates are already 0.25% and firms expect falling sales, cutting rates to 0% barely stimulates borrowing—making targeted fiscal spending or QE essential.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'contractionary monetary policy', definition: 'Raising interest rates or curbing money supply growth to reduce aggregate demand and inflation.' },
        ],
        commonMistake: 'Students often claim higher interest rates ALWAYS lower costs for firms. Wrong! Higher interest rates RAISE debt-servicing costs for indebted businesses while lowering consumer demand.',
      },
    ],
    keyTerms: [
      { term: 'Monetary Policy', definition: 'Central bank management of interest rates, money supply, and exchange rates.' },
      { term: 'Interest Rate', definition: 'The cost of borrowing money and the percentage reward earned on savings.' },
      { term: 'Money Supply', definition: 'Total stock of cash and liquid bank deposits circulating in an economy.' },
      { term: 'Hot Money Flows', definition: 'Short-term cross-border capital seeking the highest interest return.' },
      { term: 'Time Lag', definition: 'Delay (often 12–18 months) between changing interest rates and seeing full impact on inflation/GDP.' },
    ],
    checklistPoints: [
      'Identify the three monetary policy instruments controlled by a central bank.',
      'Trace how an interest rate rise affects saving, mortgages, firm investment, and the exchange rate.',
      'Evaluate two limitations of monetary policy (12–18 month lags, weak confidence, cost-push shocks).',
    ],
  },

  'econ-4-4': {
    subtopicId: 'econ-4-4',
    subtopicCode: '4.4',
    subtopicTitle: 'Supply-Side Policies & Long-Run Productive Capacity',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 4.4 Supply Side Policy (Updated for the 2027 syllabus)',
    youtubeId: 'OZopG-lWm_w',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:25',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Purpose of Supply-Side Policy: Expanding Long-Run Capacity', cardId: 'econ-4-4-c1' },
      { time: '3:50', seconds: 230, label: 'Interventionist vs Market-Based Supply-Side Reforms', cardId: 'econ-4-4-c2' },
      { time: '7:40', seconds: 460, label: 'Macroeconomic Benefits, Costs & Long-Run Evaluation', cardId: 'econ-4-4-c3' },
    ],
    cards: [
      {
        id: 'econ-4-4-c1',
        title: 'How Supply-Side Policies Shift Long-Run Capacity',
        summary: 'Supply-side policies increase the quantity, quality, and efficiency of factors of production, enabling sustainable non-inflationary economic growth.',
        diagram: 'ad-as-macro',
        bullets: [
          '**Core mechanism** - improves labour skills, capital technology, enterprise incentives, and market competition so firms produce more output at lower unit cost.',
          '**Diagrammatic impact** - shifts the **Production Possibility Curve (PPC) outward** and shifts **Long-Run Aggregate Supply (LRAS) to the right**.',
          '**Unique prize** - achieves **higher real GDP** AND **lower price-level pressure** simultaneously, easing the growth-vs-inflation conflict.',
        ],
        subsections: [
          {
            heading: 'Non-Inflationary Growth Explained',
            bullets: [
              'When aggregate demand grows by 3% per year alongside a 3% outward expansion in productive capacity, output and jobs grow without overheating prices.',
            ],
            exampleHeading: 'Worked productivity check',
            examples: [
              'If workforce digital retraining raises national output per hour from $40 to $44 (+10% productivity), firms can pay higher wages while keeping unit costs flat and exports price-competitive.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'supply-side policy', definition: 'Government measures aimed at increasing productive capacity, efficiency, and long-run aggregate supply.' },
          { term: 'productive capacity', definition: 'Maximum potential output an economy can produce when all factors of production are fully employed.' },
        ],
      },
      {
        id: 'econ-4-4-c2',
        title: 'Interventionist vs Market-Based Supply-Side Policies',
        summary: 'Governments combine state-funded human/physical capital investment with market-friendly tax and regulatory reforms.',
        bullets: [
          '**Education & vocational training** - builds human capital, reduces occupational immobility, and lowers structural unemployment.',
          '**Infrastructure & R&D subsidies** - modern ports, rail, 5G broadband, and clean-energy grants cut transport/energy costs across every private firm.',
          '**Lower direct taxes (income & corporation tax)** - rewards extra hours worked, attracts skilled migrants, and leaves firms more retained profit to reinvest.',
          '**Deregulation, privatisation & labour-market reform** - removes unnecessary red tape, introduces competition into state monopolies, and makes hiring more flexible.',
        ],
        subsections: [
          {
            heading: 'Matching Policy Tool to Economic Bottleneck',
            bullets: [
              'Choose education/retraining to fix structural skills mismatches; choose infrastructure to fix transport bottlenecks; choose deregulation to break sluggish monopolies.',
            ],
            exampleHeading: 'Concrete check: Corporation tax cut',
            examples: [
              'Cutting corporation tax from 25% to 19% allows a manufacturer earning $10m profit to retain an extra $600,000 ($10m × 6%) to fund new automated machinery.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'deregulation', definition: 'Removing or simplifying government rules and entry barriers to stimulate competition and lower compliance costs.' },
          { term: 'human capital', definition: 'Skills, education, health, and experience embodied in the workforce that boost productivity.' },
        ],
        memoryAid: 'EDIT-P: Education, Deregulation, Infrastructure, Tax cuts (direct), Privatisation.',
      },
      {
        id: 'econ-4-4-c3',
        title: 'Evaluating Supply-Side Policies: Time Lags & Trade-Offs',
        summary: 'Despite unmatched long-run benefits, supply-side reforms suffer long time lags, high fiscal costs, and potential inequality or safety risks.',
        bullets: [
          '**Very long time lags** - building a new university system or railway takes **5–15 years** before lifting output, offering no quick fix for a sudden recession.',
          '**High government cost** - funding schools, retraining, and infrastructure strains the budget (opportunity cost) or increases national debt initially.',
          '**Inequality & regulation risks** - cutting top income tax rates or weakening worker protections/environmental rules can widen inequality or create unsafe markets (e.g. financial deregulation).',
          '**No guarantee without demand** - expanding factory capacity achieves little if aggregate demand is depressed during a severe recession.',
        ],
        subsections: [
          {
            heading: 'Exam Evaluation Formula (8-Mark "Discuss")',
            bullets: [
              'Conclude that supply-side policies work best paired with stable demand management and targeted at the country’s specific bottleneck (skills vs energy vs red tape).',
            ],
            exampleHeading: 'Concrete check: Time lag vs Fiscal stimulus',
            examples: [
              'A $5bn apprenticeship reform raises productivity over 6 years, whereas a temporary VAT cut boosts retail demand within 30 days—showing why governments mix short-run and long-run tools.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'structural unemployment', definition: 'Long-term unemployment caused by industry decline or mismatch between worker skills and available jobs.' },
        ],
        commonMistake: 'Students frequently forget that education spending and direct tax cuts are BOTH fiscal AND supply-side policies—explain how they lift short-run AD AND shift long-run PPC/LRAS outward.',
      },
    ],
    keyTerms: [
      { term: 'Supply-Side Policy', definition: 'Reforms designed to raise productive efficiency, labour productivity, and long-run output capacity.' },
      { term: 'Privatisation', definition: 'Sale of state-owned enterprises to private shareholders to encourage profit-driven efficiency.' },
      { term: 'Deregulation', definition: 'Reduction of legal rules or licensing barriers to increase competition and cut firm costs.' },
      { term: 'Human Capital', definition: 'Productive skills, knowledge, and health of a nation’s workforce.' },
      { term: 'Non-Inflationary Growth', definition: 'Expansion of real GDP matched by rising productive capacity so average prices remain stable.' },
    ],
    checklistPoints: [
      'Show how supply-side policies shift the PPC outward / LRAS right for non-inflationary growth.',
      'Explain at least four concrete supply-side policies (education, infrastructure, lower direct tax, deregulation/privatisation).',
      'Evaluate supply-side limits: 5–15 year time lags, budget costs, inequality, and reliance on adequate AD.',
    ],
  },

  'econ-4-5': {
    subtopicId: 'econ-4-5',
    subtopicCode: '4.5',
    subtopicTitle: 'Economic Growth: Real GDP, Causes, Consequences & Recessions',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 4.5 Economic Growth (Updated for 2027 syllabus)',
    youtubeId: 'lU3a3pk_9MY',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Measuring GDP, Real GDP & Real GDP per Head', cardId: 'econ-4-5-c1' },
      { time: '4:10', seconds: 250, label: 'Causes of Actual & Potential Growth + Recessions', cardId: 'econ-4-5-c2' },
      { time: '8:15', seconds: 495, label: 'Consequences of Economic Growth & Policies to Promote It', cardId: 'econ-4-5-c3' },
    ],
    cards: [
      {
        id: 'econ-4-5-c1',
        title: 'Measuring Economic Growth: Nominal vs Real GDP',
        summary: 'Economic growth is the percentage increase in inflation-adjusted output (Real GDP) produced within a country over a given period.',
        bullets: [
          '**Gross Domestic Product (GDP)** - total monetary value of all final goods and services produced within a country’s borders in one year.',
          '**Nominal vs Real GDP** - **Nominal GDP** uses current prices (distorted by inflation); **Real GDP** strips out inflation using constant base-year prices.',
          '**Real GDP per head (per capita)** - `Real GDP ÷ Population`, giving a better guide to average material living standards when population grows.',
        ],
        subsections: [
          {
            heading: 'Calculating Real GDP Growth Rate',
            bullets: [
              '`Growth Rate (%) = ((Real GDP₂ − Real GDP₁) ÷ Real GDP₁) × 100%`.',
              'Approximate rule: `Real GDP Growth ≈ Nominal GDP Growth − Inflation Rate`.',
            ],
            exampleHeading: 'Worked calculation: Nominal vs Real growth',
            examples: [
              'If Nominal GDP grows by 6.5% while CPI inflation is 4.0%, Real GDP growth is approximately 6.5% − 4.0% = +2.5%. If real GDP rises from $400bn to $414bn, exact growth = (14 ÷ 400) × 100% = +3.5%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'real GDP', definition: 'Total value of domestic output adjusted for inflation to measure true volume changes.' },
          { term: 'GDP per head', definition: 'Real GDP divided by total population, approximating average income per person.' },
        ],
      },
      {
        id: 'econ-4-5-c2',
        title: 'Actual Growth, Potential Growth & Recessions',
        summary: 'Actual growth uses spare capacity via higher AD, potential growth shifts the PPC outward, and a recession means two consecutive quarters of falling real GDP.',
        diagram: 'business-cycle',
        bullets: [
          '**Actual economic growth (short-run)** - moving from a point INSIDE the PPC closer to the boundary, driven by higher consumer spending, investment, government spending, or net exports.',
          '**Potential economic growth (long-run)** - outward shift of the PPC caused by more or better factors of production (education, capital investment, innovation, resource discovery).',
          '**Recession** - formally defined as **two consecutive quarters (6 months) of negative real GDP growth**, driven by falling consumer/business confidence, banking crises, global export slumps, or sharp supply shocks.',
        ],
        subsections: [
          {
            heading: 'Consequences of a Recession',
            bullets: [
              'Falling output triggers business closures, rising cyclical unemployment, lower tax revenues, and rising welfare payouts (widening the government budget deficit).',
            ],
            exampleHeading: 'Concrete check: Recession indicator',
            examples: [
              'Country K records Q1 real GDP change of −0.6% and Q2 real GDP change of −0.9% → two consecutive negative quarters officially confirm a recession.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'recession', definition: 'Two consecutive quarters (six months) of negative real GDP growth.' },
        ],
        memoryAid: 'Inside → On PPC = Actual Growth (AD); Outward Shift = Potential Growth (Supply-Side).',
      },
      {
        id: 'econ-4-5-c3',
        title: 'Benefits, Costs & Policies for Sustainable Growth',
        summary: 'Growth lifts incomes, employment, and tax revenue for public services, yet unmanaged growth can fuel inflation, pollution, and inequality.',
        bullets: [
          '**Benefits of growth** - higher average incomes and consumption, lower absolute poverty, higher employment, and rising tax revenue ("fiscal dividend") to fund healthcare and schools without raising tax rates.',
          '**Costs of growth** - depletion of non-renewable resources, air/water pollution and carbon emissions, demand-pull inflation if capacity lags, wider inequality, and workplace stress.',
          '**Policy mix** - use expansionary fiscal/monetary policy to end short-run recessions, and supply-side investment (green energy, skills, R&D) to sustain clean long-run growth.',
        ],
        subsections: [
          {
            heading: 'Limitations of GDP as a Welfare Measure',
            bullets: [
              'GDP omits unpaid household work, the informal/shadow economy, income distribution, leisure hours, and environmental degradation.',
            ],
            exampleHeading: 'Worked check: Fiscal dividend',
            examples: [
              'When real GDP expands by 4% and 300,000 workers move from unemployment into jobs, income tax + VAT receipts rise by $4bn while welfare spending drops $1.2bn, improving the budget by $5.2bn.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sustainable growth', definition: 'Economic growth that raises current living standards without depleting resources or harming future generations.' },
        ],
        commonMistake: 'Never define a recession simply as "slower growth". Growing at +0.5% instead of +3.0% is a slowdown, NOT a recession; real GDP must actively FALL for two consecutive quarters.',
      },
    ],
    keyTerms: [
      { term: 'Real GDP', definition: 'Inflation-adjusted total value of goods and services produced domestically in a year.' },
      { term: 'Economic Growth', definition: 'Sustained percentage increase in an economy’s real GDP (actual or potential).' },
      { term: 'Recession', definition: 'Two consecutive quarters of declining real GDP.' },
      { term: 'GDP per Capita', definition: 'Real GDP divided by total population.' },
      { term: 'Potential Growth', definition: 'Expansion of an economy’s maximum productive capacity (outward PPC shift).' },
    ],
    checklistPoints: [
      'Calculate real GDP growth and explain why real GDP per head beats nominal GDP.',
      'Distinguish actual growth (moving toward PPC) from potential growth (shifting PPC outward).',
      'Define recession accurately and evaluate benefits vs environmental/inflation costs of growth.',
    ],
  },

  'econ-4-6': {
    subtopicId: 'econ-4-6',
    subtopicCode: '4.6',
    subtopicTitle: 'Employment & Unemployment: Measurement, Causes & Policies',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 4.6 Employment and unemployment (Updated for the 2027 syllabus)',
    youtubeId: 'TEzeuZUHb9g',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Labour Force, Participation & Measuring Unemployment', cardId: 'econ-4-6-c1' },
      { time: '4:15', seconds: 255, label: 'Types & Causes: Cyclical, Structural, Frictional, Seasonal', cardId: 'econ-4-6-c2' },
      { time: '8:35', seconds: 515, label: 'Consequences of Unemployment & Targeted Policy Solutions', cardId: 'econ-4-6-c3' },
    ],
    cards: [
      {
        id: 'econ-4-6-c1',
        title: 'The Labour Force & Measuring Unemployment',
        summary: 'Unemployment counts people of working age who are without work, actively seeking a job, and available to start—measured via surveys or claimant counts.',
        bullets: [
          '**Labour force (economically active)** - employed + unemployed workers actively seeking jobs (excludes full-time students, retirees, and stay-at-home carers).',
          '**Unemployment rate formula** - `Unemployment Rate (%) = (Unemployed ÷ Labour Force) × 100%`.',
          '**Two main measures** - **ILO Labour Force Survey** (standardised household interviews, internationally comparable but costly/sampling errors) vs **Claimant Count** (people claiming unemployment benefits—cheap and fast, but misses non-claimants).',
        ],
        subsections: [
          {
            heading: 'Why Employment & Unemployment Can Both Rise',
            bullets: [
              'If population or female participation expands rapidly so 500,000 new entrants join the labour force while 400,000 new jobs are created, both employed AND unemployed totals rise simultaneously.',
            ],
            exampleHeading: 'Worked calculation: Unemployment rate',
            examples: [
              'If a country has 28.5 million employed workers and 1.5 million actively seeking jobs, the Labour Force = 30.0 million and the Unemployment Rate = (1.5 ÷ 30.0) × 100% = 5.0%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'unemployment rate', definition: 'Percentage of the economically active labour force who are jobless and actively seeking work.' },
          { term: 'labour force', definition: 'Total number of people who are employed plus those unemployed and actively seeking work.' },
        ],
      },
      {
        id: 'econ-4-6-c2',
        title: 'Four Core Types & Causes of Unemployment',
        summary: 'Effective policy requires diagnosing whether joblessness stems from recessionary demand weakness, skills mismatches, job-search transitions, or seasons.',
        bullets: [
          '**Cyclical (demand-deficient) unemployment** - caused by a fall in aggregate demand during a recession; firms cut production across many industries.',
          '**Structural unemployment** - caused by long-term decline of whole industries (e.g. coal mining, automation, foreign competition) creating occupational or geographical skills mismatches.',
          '**Frictional (search) unemployment** - short-term, temporary joblessness while workers move between jobs or graduate from university.',
          '**Seasonal unemployment** - predictable off-season drops in demand (ski resorts in summer, farm harvests in winter).',
        ],
        subsections: [
          {
            heading: 'Real-Wage (Classical) Unemployment',
            bullets: [
              'When minimum wages or strong trade unions hold wages persistently above market equilibrium, excess labour supply can emerge in low-skilled sectors.',
            ],
            exampleHeading: 'Concrete check: Matching real scenarios',
            examples: [
              'A steelworker laid off after domestic steel plants close permanently faces **structural** unemployment; a retail clerk laid off when national consumer spending drops 5% faces **cyclical** unemployment.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cyclical unemployment', definition: 'Joblessness resulting from insufficient aggregate demand during an economic downturn.' },
          { term: 'structural unemployment', definition: 'Long-term joblessness due to industry decline, technological change, or immobile skills.' },
        ],
        memoryAid: 'C-S-F-S: Cyclical (Recession), Structural (Skills/Industry), Frictional (Between jobs), Seasonal (Weather/Tourism).',
      },
      {
        id: 'econ-4-6-c3',
        title: 'Consequences of Unemployment & Targeted Policies',
        summary: 'High unemployment wastes scarce human resources inside the PPC, hurts mental health and budgets, and demands policies matched to its root cause.',
        bullets: [
          '**Economic & social costs** - lost potential output (operating inside the PPC), lower household incomes and poverty, skill erosion ("hysteresis"), higher crime/stress, lower tax receipts, and higher welfare spending.',
          '**Fixing cyclical unemployment** - use **expansionary fiscal** (tax cuts, public works) or **expansionary monetary policy** (lower interest rates) to revive aggregate demand.',
          '**Fixing structural & frictional unemployment** - use **supply-side policies**: retraining grants, regional relocation subsidies, apprenticeships, better job-matching portals, and reducing hiring red tape.',
        ],
        subsections: [
          {
            heading: 'Why Policy Must Match the Cause',
            bullets: [
              'Cutting interest rates will NOT quickly re-employ a laid-off coal miner who lacks software skills—structural unemployment needs retraining and mobility support, not just higher AD.',
            ],
            exampleHeading: 'Worked fiscal cost example',
            examples: [
              'If 200,000 extra unemployed workers each lose $3,000 in annual tax contributions and claim $5,000 in state benefits, the fiscal cost to the government equals 200,000 × $8,000 = $1.6 billion/year.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'frictional unemployment', definition: 'Short-term unemployment experienced by workers transitioning between jobs.' },
        ],
        commonMistake: 'When calculating the unemployment rate, NEVER divide by total population! Always divide Unemployed by the LABOUR FORCE (Employed + Unemployed).',
      },
    ],
    keyTerms: [
      { term: 'Labour Force', definition: 'All working-age individuals currently employed or actively seeking employment.' },
      { term: 'Cyclical Unemployment', definition: 'Unemployment caused by deficient aggregate demand in a recession.' },
      { term: 'Structural Unemployment', definition: 'Long-term unemployment caused by declining industries, automation, or skill mismatches.' },
      { term: 'Frictional Unemployment', definition: 'Temporary unemployment while workers search for a new job.' },
      { term: 'Claimant Count', definition: 'Measure of unemployment counting only individuals receiving state jobless benefits.' },
    ],
    checklistPoints: [
      'Calculate the unemployment rate from labour-force data and compare ILO survey vs claimant count.',
      'Diagnose cyclical, structural, frictional, and seasonal unemployment accurately.',
      'Match demand-side policies to cyclical unemployment and supply-side retraining to structural unemployment.',
    ],
  },

  'econ-4-7': {
    subtopicId: 'econ-4-7',
    subtopicCode: '4.7',
    subtopicTitle: 'Inflation & Deflation: CPI Measurement, Causes & Consequences',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 4.7 Inflation (Updated for the 2027 syllabus)',
    youtubeId: '47RAgSzcpMg',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Inflation, Disinflation, Deflation & Measuring the CPI', cardId: 'econ-4-7-c1' },
      { time: '4:30', seconds: 270, label: 'Demand-Pull vs Cost-Push Inflation & Wage-Price Spirals', cardId: 'econ-4-7-c2' },
      { time: '8:50', seconds: 530, label: 'Consequences of Inflation/Deflation & Control Policies', cardId: 'econ-4-7-c3' },
    ],
    cards: [
      {
        id: 'econ-4-7-c1',
        title: 'Inflation, Disinflation, Deflation & The CPI',
        summary: 'Inflation is a sustained rise in the general price level measured using a weighted Consumer Prices Index (CPI) basket of household goods.',
        bullets: [
          '**Inflation** - sustained increase in the general price level, reducing the purchasing power of money.',
          '**Disinflation vs Deflation** - **Disinflation** means inflation is still positive but slowing (e.g. 6% → 3%); **Deflation** means a sustained FALL in the general price level (negative inflation, e.g. −1.5%).',
          '**Consumer Prices Index (CPI)** - tracks a representative "basket" of ~700 household goods/services weighted by the share of average household spending from a base year (= 100).',
        ],
        subsections: [
          {
            heading: 'Calculating Annual CPI Inflation',
            bullets: [
              '`Inflation Rate (%) = ((CPI₂ − CPI₁) ÷ CPI₁) × 100%`.',
              'Weights ensure a 10% rise in rent/food (large budget share) impacts CPI far more than a 10% rise in salt.',
            ],
            exampleHeading: 'Worked calculation: Weighted CPI & annual rate',
            examples: [
              'If the CPI rises from 125.0 to 132.5 over one year, annual inflation = ((132.5 − 125.0) ÷ 125.0) × 100% = (7.5 ÷ 125.0) × 100% = 6.0%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'inflation', definition: 'Sustained rise in the general price level over time, eroding the real value of money.' },
          { term: 'Consumer Prices Index (CPI)', definition: 'Weighted price index tracking changes in the cost of a typical household basket of goods and services.' },
        ],
      },
      {
        id: 'econ-4-7-c2',
        title: 'Demand-Pull vs Cost-Push Causes of Inflation',
        summary: 'Inflation arises either from excessive aggregate spending chasing scarce capacity (demand-pull) or from rising production costs passed into prices (cost-push).',
        bullets: [
          '**Demand-pull inflation** - "too much money chasing too few goods" when booming consumer spending, investment, government spending, or exports push AD beyond full-employment capacity.',
          '**Cost-push inflation** - rising unit production costs (surging oil/energy prices, wage rises exceeding productivity, higher indirect taxes, or dearer imported materials after depreciation) force firms to raise selling prices.',
          '**Wage-price spiral** - workers demand higher pay to keep up with rising living costs → higher wage bills push firm prices even higher → further wage demands.',
        ],
        subsections: [
          {
            heading: 'Good (Benign) vs Bad (Malign) Deflation',
            bullets: [
              '**Benign (supply-side) deflation** stems from technology/productivity lowering costs while output rises; **malign (demand-side) deflation** stems from collapsing AD where consumers delay spending waiting for even lower prices.',
            ],
            exampleHeading: 'Concrete check: Diagnosing inflation type',
            examples: [
              'A 40% surge in global crude oil prices raising transport and electricity bills across every factory causes **cost-push** inflation; a $50bn pre-election tax cut at 3% unemployment causes **demand-pull** inflation.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'demand-pull inflation', definition: 'Inflation triggered by aggregate demand growing faster than the economy’s productive capacity.' },
          { term: 'cost-push inflation', definition: 'Inflation triggered by rising costs of production such as wages, energy, or imported materials.' },
        ],
        memoryAid: 'Demand-Pull = AD pulls prices up; Cost-Push = Rising Costs push prices up.',
      },
      {
        id: 'econ-4-7-c3',
        title: 'Winners, Losers & Policies to Control Inflation/Deflation',
        summary: 'Unanticipated inflation redistributes wealth away from savers and exporters, while malign deflation traps economies in falling demand and rising debt.',
        bullets: [
          '**Losers from high inflation** - savers (when inflation > interest rate), pensioners on fixed incomes, lenders repaid in weaker dollars, and domestic exporters losing price competitiveness abroad.',
          '**Menu & shoe-leather costs** - firms spend resources reprinting price lists ("menu costs") while households shop around or move cash frequently ("shoe-leather costs"); uncertainty deters long-term business investment.',
          '**Control policies** - **contractionary monetary** (higher interest rates) and **contractionary fiscal** (higher taxes/lower G) cool demand-pull inflation; **supply-side policies** (productivity, energy efficiency, competition) tackle cost-push inflation without causing recession.',
        ],
        subsections: [
          {
            heading: 'Why Malign Deflation Is Especially Dangerous',
            bullets: [
              'Falling prices encourage consumers to postpone purchases, increase the real burden of fixed debts/mortgages, squeeze profits, and drive layoffs.',
            ],
            exampleHeading: 'Worked real-return calculation: Savers hit by inflation',
            examples: [
              'If a saver earns 3% nominal bank interest while CPI inflation runs at 7%, their real return is 3% − 7% = −4%, meaning $10,000 in savings loses $400 of real purchasing power in one year.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'deflation', definition: 'Sustained fall in the general price level (negative inflation rate) over time.' },
        ],
        commonMistake: 'NEVER confuse disinflation with deflation! If inflation drops from 8% to 3%, prices are STILL rising (just more slowly)—that is disinflation, NOT deflation.',
      },
    ],
    keyTerms: [
      { term: 'Inflation', definition: 'Sustained rise in the general price level reducing purchasing power.' },
      { term: 'Consumer Prices Index (CPI)', definition: 'Weighted average index measuring changes in the cost of a typical household shopping basket.' },
      { term: 'Demand-Pull Inflation', definition: 'Price rises driven by excessive aggregate demand relative to output capacity.' },
      { term: 'Cost-Push Inflation', definition: 'Price rises driven by higher production costs (wages, energy, raw materials, indirect taxes).' },
      { term: 'Deflation', definition: 'Sustained decrease in the general price level (negative rate of inflation).' },
    ],
    checklistPoints: [
      'Calculate annual CPI inflation accurately and distinguish inflation, disinflation, and deflation.',
      'Explain demand-pull vs cost-push inflation and trace a wage-price spiral.',
      'Analyse who loses from high inflation vs malign deflation and select the right policy response.',
    ],
  },
};

export const ECON_QUIZZES_UNIT_4: QuizQuestion[] = [
  // 4.1
  {
    id: 'econ-q-4-1-1',
    subtopicId: 'econ-4-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the phases on the Business Cycle diagram:',
    diagram: 'business-cycle',
    labels: [
      { marker: 'Rapid real GDP growth with low unemployment and overheating inflation risk', options: ['Boom / Peak', 'Recession / Trough', 'Deflationary depression'], answer: 'Boom / Peak' },
      { marker: 'Two consecutive quarters of falling real GDP and rising cyclical unemployment', options: ['Recession', 'Sustainable potential growth', 'Price stability'], answer: 'Recession' },
    ],
    explanation: 'Macroeconomic policy aims to smooth boom-and-bust fluctuations around the long-run trend.',
  },
  {
    id: 'econ-q-4-1-2',
    subtopicId: 'econ-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE macroeconomic conflict that can occur when a government stimulates rapid economic growth.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Stimulating rapid economic growth raises aggregate demand and employment, which can conflict with price stability by causing demand-pull inflation as capacity tightens, or worsen the current account balance as higher incomes pull in more imports.',
      markPoints: [
        { id: 'mp1', markDescription: 'Names growth vs inflation OR growth vs balance of payments OR growth vs environment/equality', requiredKeywordGroups: [['inflation', 'price stability', 'current account', 'balance of payments', 'import', 'environment', 'pollution']] },
        { id: 'mp2', markDescription: 'Explains causal transmission (higher AD/incomes causing price pressure or rising imports)', requiredKeywordGroups: [['aggregate demand', 'capacity', 'income', 'spending', 'tight']] },
      ],
    },
    explanation: 'Fast demand-led growth commonly trades off against low inflation, external trade balance, or environmental goals.',
  },
  {
    id: 'econ-q-4-1-3',
    subtopicId: 'econ-4-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO official macroeconomic aims pursued by most national governments:',
    options: [
      'Low and stable inflation (price stability around ~2%)',
      'Sustainable economic growth and full employment',
      'Guaranteed zero exports and zero imports',
      'Permanently falling general price levels (deflation)',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Governments aim for steady growth, low unemployment, low stable inflation, BoP stability, and fairer income distribution.',
  },
  {
    id: 'econ-q-4-1-4',
    subtopicId: 'econ-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why do central banks typically target ~2% inflation rather than 0% inflation?',
    options: [
      'To destroy household savings rapidly',
      'To provide a safety buffer against destructive deflation while keeping price expectations stable',
      'Because CPI cannot measure numbers below 2%',
      'To eliminate all international trade',
    ],
    correctIndex: 1,
    explanation: 'A low positive ~2% target avoids deflation spirals while keeping purchasing power predictable.',
  },
  {
    id: 'econ-q-4-1-5',
    subtopicId: 'econ-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the macroeconomic trade-off mechanism:',
    segments: ['Boosting total demand to cut cyclical ', ' often triggers ', '-pull inflation once spare capacity runs low.'],
    wordBank: ['unemployment', 'demand', 'deflation', 'cost'],
    answers: ['unemployment', 'demand'],
    explanation: 'Higher aggregate demand reduces joblessness but pushes prices upward near full employment.',
  },

  // 4.2
  {
    id: 'econ-q-4-2-1',
    subtopicId: 'econ-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'A government collects $320bn in tax revenue and spends $355bn in a year. Calculate its budget balance (stating surplus or deficit) and explain ONE way expansionary fiscal policy stimulates growth.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Budget balance = $320bn - $355bn = -$35bn, which is a $35bn budget deficit. Expansionary fiscal policy cuts taxes or raises government spending, lifting disposable income and aggregate demand to create jobs and higher real GDP.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates -$35bn / $35bn deficit', numericMatch: { value: 35, tolerance: 0.5 } },
        { id: 'mp2', markDescription: 'Identifies deficit and explains higher AD via lower tax or higher G', requiredKeywordGroups: [['deficit'], ['disposable income', 'aggregate demand', 'spending', 'tax']] },
      ],
    },
    explanation: 'When G ($355bn) exceeds T ($320bn) by $35bn, the government runs a $35bn budget deficit that boosts AD.',
  },
  {
    id: 'econ-q-4-2-2',
    subtopicId: 'econ-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is a flat 20% Value Added Tax (VAT) on consumer purchases classified as a REGRESSIVE tax?',
    options: [
      'Only millionaires are legally required to pay VAT',
      'Lower-income households spend a higher percentage of their income on taxed goods, so VAT takes a larger share of their income',
      'VAT is collected directly from corporate profits',
      'The VAT percentage increases automatically as wages rise',
    ],
    correctIndex: 1,
    explanation: 'A flat indirect tax on consumption consumes a larger percentage of a poor household’s income than a rich household’s income.',
  },
  {
    id: 'econ-q-4-2-3',
    subtopicId: 'econ-4-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each tax category to its correct example:',
    pairs: [
      { left: 'Direct progressive tax', right: 'Personal income tax with rising marginal bands' },
      { left: 'Direct corporate tax', right: 'Corporation tax charged on company profits' },
      { left: 'Indirect general sales tax', right: 'VAT / GST charged on retail spending' },
      { left: 'Indirect demerit excise duty', right: 'Per-pack tax on cigarettes or fuel' },
    ],
    explanation: 'Direct taxes fall on income/profits; indirect taxes fall on expenditure on goods and services.',
  },
  {
    id: 'econ-q-4-2-4',
    subtopicId: 'econ-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the fiscal policy definitions:',
    segments: ['To cool demand-pull inflation, a government uses ', ' fiscal policy by raising taxes and cutting ', ' spending.'],
    wordBank: ['contractionary', 'government', 'expansionary', 'monetary'],
    answers: ['contractionary', 'government'],
    explanation: 'Contractionary fiscal policy withdraws spending power from the circular flow to curb overheating.',
  },
  {
    id: 'econ-q-4-2-5',
    subtopicId: 'econ-4-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO potential drawbacks of relying heavily on expansionary fiscal policy during a downturn:',
    options: [
      'Higher government borrowing increases national debt and future debt-interest costs',
      'Households with low confidence may save tax cuts rather than spend them',
      'It immediately eliminates all structural skill shortages overnight',
      'It automatically creates a large budget surplus',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Fiscal stimulus adds to public borrowing and leaks into saving if consumer confidence stays weak.',
  },

  // 4.3
  {
    id: 'econ-q-4-3-1',
    subtopicId: 'econ-4-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which set of tools belongs strictly to MONETARY policy?',
    options: [
      'Income tax rates, VAT, and hospital spending',
      'Base interest rates, money supply control, and foreign exchange rate intervention',
      'Minimum wage legislation and school curricula',
      'Import quotas and corporate profit taxes',
    ],
    correctIndex: 1,
    explanation: 'Monetary policy is run by the central bank via interest rates, money supply, and exchange rate channels.',
  },
  {
    id: 'econ-q-4-3-2',
    subtopicId: 'econ-4-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'A homeowner has a $150,000 variable interest-only mortgage. If the central bank raises interest rates from 4% to 6%, calculate the extra annual interest cost and explain how this helps reduce demand-pull inflation.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Annual interest rises from $6,000 (4% of $150,000) to $9,000 (6% of $150,000), an extra $3,000 per year. Higher mortgage repayments leave households with less discretionary income, reducing consumer spending and aggregate demand to cool demand-pull inflation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates extra annual interest = $3,000', numericMatch: { value: 3000, tolerance: 5 } },
        { id: 'mp2', markDescription: 'Links higher repayments to lower household spending / lower aggregate demand', requiredKeywordGroups: [['spending', 'consumption', 'aggregate demand', 'disposable'], ['lower', 'reduce', 'less', 'cool']] },
      ],
    },
    explanation: '2% × $150,000 = $3,000 higher annual mortgage bill, cutting consumer spending and cooling AD.',
  },
  {
    id: 'econ-q-4-3-3',
    subtopicId: 'econ-4-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the monetary-exchange rate link:',
    segments: ['Raising domestic interest rates attracts foreign ', ' money inflows, causing the domestic currency to ', ' and making exports dearer.'],
    wordBank: ['hot', 'appreciate', 'depreciate', 'fiscal'],
    answers: ['hot', 'appreciate'],
    explanation: 'Higher domestic yields pull in foreign capital, increasing demand for the currency so it appreciates.',
  },
  {
    id: 'econ-q-4-3-4',
    subtopicId: 'econ-4-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO limitations that reduce the effectiveness of monetary policy:',
    options: [
      'Long time lags (typically 12–18 months) before rate changes fully affect inflation',
      'Weak impact when business/consumer confidence is depressed or interest rates are near zero',
      'Central banks must wait for parliament to vote on every annual fiscal budget',
      'Raising interest rates directly lowers global crude oil prices',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Monetary transmission lags and depressed confidence ("pushing on a string") constrain interest-rate policy.',
  },
  {
    id: 'econ-q-4-3-5',
    subtopicId: 'econ-4-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each interest rate cut effect to the affected economic group:',
    pairs: [
      { left: 'Savers', right: 'Earn lower interest returns, encouraging more spending' },
      { left: 'Firms planning new factories', right: 'Face cheaper bank loans, boosting capital investment' },
      { left: 'Exporters', right: 'Benefit from a weaker currency making goods cheaper abroad' },
      { left: 'Variable-rate mortgage borrowers', right: 'Pay lower monthly housing repayments, freeing disposable income' },
    ],
    explanation: 'All four channels work together during expansionary monetary policy to lift aggregate demand.',
  },

  // 4.4
  {
    id: 'econ-q-4-4-1',
    subtopicId: 'econ-4-4',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the AD–AS Macroeconomic diagram for a successful supply-side reform:',
    diagram: 'ad-as-macro',
    labels: [
      { marker: 'Direction that major investment in skills and technology shifts LRAS', options: ['Shifts RIGHT (increasing potential real GDP)', 'Shifts LEFT (shrinking capacity)', 'Moves downward along AD only'], answer: 'Shifts RIGHT (increasing potential real GDP)' },
      { marker: 'Key macroeconomic prize of a rightward LRAS shift', options: ['Higher real output with downward pressure on prices (non-inflationary growth)', 'Stagflation with falling GDP', 'Higher cyclical unemployment'], answer: 'Higher real output with downward pressure on prices (non-inflationary growth)' },
    ],
    explanation: 'Supply-side reforms expand productive capacity, shifting LRAS/PPC outward for non-inflationary growth.',
  },
  {
    id: 'econ-q-4-4-2',
    subtopicId: 'econ-4-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE advantage and ONE limitation of funding nationwide vocational apprenticeships as a supply-side policy.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: apprenticeships upgrade workforce skills and labour productivity, reducing structural unemployment and shifting productive capacity outward without causing inflation. Limitation: they are expensive for the government budget and suffer long time lags of several years before graduates boost output.',
      markPoints: [
        { id: 'mp1', markDescription: 'Higher skills/productivity, lower structural unemployment, or non-inflationary capacity growth', requiredKeywordGroups: [['skill', 'productivity', 'structural', 'capacity', 'non-inflationary']] },
        { id: 'mp2', markDescription: 'High government budget cost/opportunity cost OR long time lag', requiredKeywordGroups: [['expensive', 'cost', 'budget', 'time lag', 'years']] },
      ],
    },
    explanation: 'Apprenticeships build lasting human capital but take years and substantial public funds to pay off.',
  },
  {
    id: 'econ-q-4-4-3',
    subtopicId: 'econ-4-4',
    type: 'mcq',
    marks: 1,
    prompt: 'How can lowering direct personal income tax act as a MARKET-BASED supply-side policy?',
    options: [
      'It immediately builds new motorways',
      'It increases the financial incentive to work extra hours, seek promotion, and join the labour force',
      'It bans all private monopolies by law',
      'It raises firms’ raw material costs',
    ],
    correctIndex: 1,
    explanation: 'Keeping a larger share of extra earnings strengthens work and enterprise incentives, expanding labour supply.',
  },
  {
    id: 'econ-q-4-4-4',
    subtopicId: 'econ-4-4',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO examples of supply-side policies designed to raise long-run productive capacity:',
    options: [
      'Investing in high-speed freight rail, ports, and STEM education',
      'Deregulating overly restrictive industry licences to boost competition',
      'Raising indirect VAT solely to suppress consumer spending',
      'Printing cash with no productivity improvements',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Infrastructure, education, and pro-competitive deregulation raise potential output and efficiency.',
  },
  {
    id: 'econ-q-4-4-5',
    subtopicId: 'econ-4-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the supply-side evaluation:',
    segments: ['Supply-side policies shift the PPC ', ' to deliver non-inflationary growth, but suffer long ', ' lags before lifting national output.'],
    wordBank: ['outward', 'time', 'inward', 'interest'],
    answers: ['outward', 'time'],
    explanation: 'Expanding human and physical capital pushes the PPC outward but takes years to mature.',
  },

  // 4.5
  {
    id: 'econ-q-4-5-1',
    subtopicId: 'econ-4-5',
    type: 'short-answer',
    marks: 2,
    prompt: 'A country’s Real GDP rises from $500bn to $520bn in one year. Calculate the real economic growth rate and explain why Real GDP per head is preferred over Nominal GDP for comparing living standards.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Real GDP growth = ((520 - 500) / 500) x 100 = 4%. Real GDP per head is preferred because it removes inflation distortion and divides by population size to reflect average material output per citizen.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates real growth rate = 4%', numericMatch: { value: 4, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Adjusts for inflation AND divides by population', requiredKeywordGroups: [['inflation'], ['population', 'per person', 'per citizen', 'average']] },
      ],
    },
    explanation: '(20 ÷ 500) × 100% = 4%; Real GDP per head removes both price inflation and population-size distortions.',
  },
  {
    id: 'econ-q-4-5-2',
    subtopicId: 'econ-4-5',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the formal economic definition of a RECESSION?',
    options: [
      'Any year in which GDP growth slows from 4% to 1%',
      'Two consecutive quarters (six months) of negative real GDP growth',
      'An inflation rate rising above 5%',
      'A trade deficit lasting one month',
    ],
    correctIndex: 1,
    explanation: 'A recession requires real GDP to actually fall for at least two consecutive quarters.',
  },
  {
    id: 'econ-q-4-5-3',
    subtopicId: 'econ-4-5',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the PPC growth distinction:',
    segments: ['Moving from a point inside the PPC onto the curve represents ', ' economic growth, whereas shifting the entire PPC outward represents ', ' economic growth.'],
    wordBank: ['actual', 'potential', 'nominal', 'recessionary'],
    answers: ['actual', 'potential'],
    explanation: 'Using unemployed resources delivers actual growth; expanding capacity shifts the PPC outward (potential growth).',
  },
  {
    id: 'econ-q-4-5-4',
    subtopicId: 'econ-4-5',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO potential COSTS of rapid, unregulated economic growth:',
    options: [
      'Environmental degradation, higher CO₂ emissions, and depletion of finite resources',
      'Demand-pull inflation and wider income inequality',
      'Automatic elimination of all pollution',
      'Guaranteed fall in government tax revenue',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Fast industrial expansion can damage ecosystems, overheat prices, and widen income gaps if unmanaged.',
  },
  {
    id: 'econ-q-4-5-5',
    subtopicId: 'econ-4-5',
    type: 'matching',
    marks: 2,
    prompt: 'Match each GDP metric to its exact meaning:',
    pairs: [
      { left: 'Nominal GDP', right: 'Output valued at current market prices without removing inflation' },
      { left: 'Real GDP', right: 'Output adjusted for inflation using constant base-year prices' },
      { left: 'Real GDP per head', right: 'Real GDP divided by total population' },
      { left: 'Fiscal dividend', right: 'Higher tax receipts and lower welfare bills generated by economic growth' },
    ],
    explanation: 'Always check whether GDP figures are nominal, real, or per capita before drawing living-standard conclusions.',
  },

  // 4.6
  {
    id: 'econ-q-4-6-1',
    subtopicId: 'econ-4-6',
    type: 'short-answer',
    marks: 2,
    prompt: 'A country has 19.0 million employed workers and 1.0 million unemployed workers actively seeking jobs. Calculate the unemployment rate and name the best policy category to tackle STRUCTURAL unemployment.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Labour force = 19.0m + 1.0m = 20.0m, so the unemployment rate = (1.0 / 20.0) x 100 = 5%. Structural unemployment is best tackled using supply-side policies such as retraining programmes, education, and regional mobility support.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates unemployment rate = 5%', numericMatch: { value: 5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Identifies supply-side policy / retraining / education / mobility grants', requiredKeywordGroups: [['supply-side', 'supply side', 'retrain', 'education', 'training', 'mobility']] },
      ],
    },
    explanation: 'Unemployment rate = Unemployed ÷ Labour Force = 1m ÷ 20m = 5%; structural mismatches need supply-side retraining.',
  },
  {
    id: 'econ-q-4-6-2',
    subtopicId: 'econ-4-6',
    type: 'matching',
    marks: 2,
    prompt: 'Match each unemployment type to its real-world example:',
    pairs: [
      { left: 'Cyclical unemployment', right: 'Factory workers laid off across the economy during a recession' },
      { left: 'Structural unemployment', right: 'Coal miners unable to fill tech roles after mines close permanently' },
      { left: 'Frictional unemployment', right: 'A recent graduate searching for three weeks before starting a job' },
      { left: 'Seasonal unemployment', right: 'Beach lifeguards out of work during winter months' },
    ],
    explanation: 'Correct diagnosis determines whether demand-side or supply-side intervention is required.',
  },
  {
    id: 'econ-q-4-6-3',
    subtopicId: 'econ-4-6',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does the ILO Labour Force Survey usually report a HIGHER unemployment figure than the national Claimant Count?',
    options: [
      'The ILO survey counts retired pensioners as unemployed',
      'Some actively job-seeking workers (e.g. partners of earners or recent graduates) are ineligible for or choose not to claim state benefits',
      'The claimant count includes every full-time university student',
      'The ILO survey excludes manufacturing workers',
    ],
    correctIndex: 1,
    explanation: 'Strict benefit eligibility rules exclude many genuinely job-seeking people from the claimant count.',
  },
  {
    id: 'econ-q-4-6-4',
    subtopicId: 'econ-4-6',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the unemployment-policy match:',
    segments: ['High unemployment places an economy ', ' its PPC, and recession-driven ', ' unemployment is best cut using expansionary fiscal or monetary policy.'],
    wordBank: ['inside', 'cyclical', 'outside', 'seasonal'],
    answers: ['inside', 'cyclical'],
    explanation: 'Idle labour leaves output inside the PPC; demand-deficient cyclical unemployment needs higher AD.',
  },
  {
    id: 'econ-q-4-6-5',
    subtopicId: 'econ-4-6',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO macroeconomic costs of persistent high unemployment:',
    options: [
      'Lost national output and erosion of workers’ skills over time',
      'Lower government income/VAT tax revenue combined with higher welfare payouts',
      'Immediate outward shift of the Production Possibility Curve',
      'Automatic improvement in worker mental health',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Unemployment wastes potential GDP, degrades human capital, and worsens the fiscal budget.',
  },

  // 4.7
  {
    id: 'econ-q-4-7-1',
    subtopicId: 'econ-4-7',
    type: 'short-answer',
    marks: 2,
    prompt: 'The Consumer Prices Index (CPI) increases from 120 to 129 over twelve months. Calculate the annual rate of inflation and explain ONE reason high inflation hurts domestic exporters.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Annual inflation = ((129 - 120) / 120) x 100 = 7.5%. High domestic inflation makes a country’s exports more expensive relative to foreign rivals, reducing international price competitiveness and lowering export sales.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates inflation = 7.5%', numericMatch: { value: 7.5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Exports become dearer / less internationally price competitive', requiredKeywordGroups: [['expensive', 'dearer', 'competitiv'], ['export', 'foreign', 'sales']] },
      ],
    },
    explanation: '(9 ÷ 120) × 100% = 7.5%; higher domestic prices erode exporters’ competitiveness abroad.',
  },
  {
    id: 'econ-q-4-7-2',
    subtopicId: 'econ-4-7',
    type: 'mcq',
    marks: 1,
    prompt: 'Annual inflation falls from 7% in 2025 to 3% in 2026. Which statement is economically ACCURATE?',
    options: [
      'The economy is experiencing deflation and average prices are falling',
      'The economy is experiencing disinflation: average prices are still rising, just at a slower pace',
      'The CPI index dropped below zero',
      'Money purchasing power increased by 4%',
    ],
    correctIndex: 1,
    explanation: 'A drop from 7% to 3% is disinflation—prices still rise by 3% rather than falling.',
  },
  {
    id: 'econ-q-4-7-3',
    subtopicId: 'econ-4-7',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the inflation cause classification:',
    segments: ['Surging crude oil and wage costs trigger ', ' inflation, whereas excessive household and government spending at full employment triggers ', ' inflation.'],
    wordBank: ['cost-push', 'demand-pull', 'benign', 'structural'],
    answers: ['cost-push', 'demand-pull'],
    explanation: 'Rising production costs push prices up (cost-push); excess AD pulls prices up (demand-pull).',
  },
  {
    id: 'econ-q-4-7-4',
    subtopicId: 'econ-4-7',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO reasons why sustained MALIGN (demand-side) DEFLATION harms an economy:',
    options: [
      'Consumers delay buying cars and appliances hoping prices will fall further, collapsing demand',
      'The real burden of fixed-value mortgages and business debts increases, causing defaults',
      'Savers lose all purchasing power immediately',
      'Export prices surge uncontrollably',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Deferred spending and rising real debt burdens can trap economies in a deflationary slump.',
  },
  {
    id: 'econ-q-4-7-5',
    subtopicId: 'econ-4-7',
    type: 'matching',
    marks: 2,
    prompt: 'Match each inflation term to its correct definition:',
    pairs: [
      { left: 'CPI basket weights', right: 'Reflect the percentage of average household income spent on each item' },
      { left: 'Wage-price spiral', right: 'Higher prices spark bigger pay claims, pushing firm costs and prices higher again' },
      { left: 'Menu costs', right: 'Firm expenses of updating catalogues, websites, and price tags frequently' },
      { left: 'Real interest rate', right: 'Nominal interest rate minus the inflation rate' },
    ],
    explanation: 'Mastering CPI weights, spirals, and real vs nominal returns unlocks top Paper 2 marks.',
  },
];

export const ECON_FLASHCARDS_UNIT_4: FlashcardItem[] = [
  // 4.1
  { id: 'econ-fc-4-1-1', subtopicId: 'econ-4-1', front: 'List the five core macroeconomic aims of government (GEIBR).', backBullets: ['Economic growth, full employment (low unemployment), low stable inflation (~2%), balance of payments stability, and income redistribution.'] },
  { id: 'econ-fc-4-1-2', subtopicId: 'econ-4-1', front: 'Why do governments aim for ~2% inflation instead of 0%?', backBullets: ['Prevents destructive deflation spirals, allows real-wage flexibility, and anchors predictable investment decisions.'] },
  { id: 'econ-fc-4-1-3', subtopicId: 'econ-4-1', front: 'Explain the conflict between full employment and price stability.', backBullets: ['Stimulating AD reduces unemployment, but tighter labour markets bid up wages and trigger demand-pull inflation.'] },
  { id: 'econ-fc-4-1-4', subtopicId: 'econ-4-1', front: 'Explain the conflict between rapid GDP growth and the current account.', backBullets: ['Higher household incomes raise spending on imported consumer goods and raw materials, widening a trade deficit.'] },
  { id: 'econ-fc-4-1-5', subtopicId: 'econ-4-1', front: 'How can governments ease macroeconomic conflicts in the long run?', backBullets: ['Invest in supply-side policies (skills, infrastructure, green tech) that expand capacity non-inflationarily and boost export competitiveness.'] },

  // 4.2
  { id: 'econ-fc-4-2-1', subtopicId: 'econ-4-2', front: 'Distinguish a government budget deficit from national debt.', backBullets: ['Budget deficit = annual shortfall when G > T; National debt = total accumulated stock of unpaid past government borrowing.'] },
  { id: 'econ-fc-4-2-2', subtopicId: 'econ-4-2', front: 'Compare direct taxes and indirect taxes with two examples each.', backBullets: ['Direct (on income/profits): income tax, corporation tax. Indirect (on spending): VAT/GST, excise duties on fuel/tobacco.'] },
  { id: 'econ-fc-4-2-3', subtopicId: 'econ-4-2', front: 'Distinguish progressive, proportional, and regressive taxes.', backBullets: ['Progressive: higher % as income rises (income tax); Proportional: constant %; Regressive: higher % burden on poorer earners (VAT).'] },
  { id: 'econ-fc-4-2-4', subtopicId: 'econ-4-2', front: 'How does expansionary vs contractionary fiscal policy operate?', backBullets: ['Expansionary: cut taxes / raise G → higher AD & jobs; Contractionary: raise taxes / cut G → lower AD & inflation.'] },
  { id: 'econ-fc-4-2-5', subtopicId: 'econ-4-2', front: 'State three limitations of fiscal policy.', backBullets: ['Budget approval time lags, higher national debt/interest repayments, and consumers saving tax cuts during low confidence.'] },

  // 4.3
  { id: 'econ-fc-4-3-1', subtopicId: 'econ-4-3', front: 'Name the three main instruments of monetary policy.', backBullets: ['Base interest rates, money supply changes (e.g. QE), and foreign exchange rate interventions.'] },
  { id: 'econ-fc-4-3-2', subtopicId: 'econ-4-3', front: 'Trace how raising interest rates cools aggregate demand through three channels.', backBullets: ['Households save more & pay higher mortgages (C ↓); firms borrow/invest less (I ↓); currency appreciates via hot money (Net Exports ↓).'] },
  { id: 'econ-fc-4-3-3', subtopicId: 'econ-4-3', front: 'How does expansionary monetary policy help lift an economy out of recession?', backBullets: ['Lower interest rates make borrowing cheaper, cut saving rewards, and weaken the currency (WPIDEC) to boost C, I, and exports.'] },
  { id: 'econ-fc-4-3-4', subtopicId: 'econ-4-3', front: 'Why are central banks typically granted operational independence?', backBullets: ['Prevents politically timed pre-election rate cuts, keeping inflation expectations credibly anchored near target.'] },
  { id: 'econ-fc-4-3-5', subtopicId: 'econ-4-3', front: 'State three limitations of monetary policy.', backBullets: ['12–18 month transmission lags, weak effectiveness near 0% interest rates or low confidence, and inability to fix cost-push shocks directly.'] },

  // 4.4
  { id: 'econ-fc-4-4-1', subtopicId: 'econ-4-4', front: 'What is the core goal of supply-side policy and its diagram shift?', backBullets: ['Expand productive capacity and efficiency, shifting the PPC outward and LRAS right for non-inflationary growth.'] },
  { id: 'econ-fc-4-4-2', subtopicId: 'econ-4-4', front: 'Give three interventionist supply-side policies.', backBullets: ['State education and vocational retraining, public transport/digital infrastructure, and R&D/clean-tech subsidies.'] },
  { id: 'econ-fc-4-4-3', subtopicId: 'econ-4-4', front: 'Give three market-based supply-side policies.', backBullets: ['Lower income/corporation taxes, deregulation of entry barriers, privatisation, and labour-market flexibility reforms.'] },
  { id: 'econ-fc-4-4-4', subtopicId: 'econ-4-4', front: 'How can lower corporation tax act as a supply-side reform?', backBullets: ['Leaves firms higher post-tax profits to reinvest in modern machinery and R&D, raising long-run productivity.'] },
  { id: 'econ-fc-4-4-5', subtopicId: 'econ-4-4', front: 'State three key drawbacks of supply-side policies.', backBullets: ['Very long 5–15 year time lags, heavy initial government fiscal costs, and risks of higher inequality or unsafe deregulation.'] },

  // 4.5
  { id: 'econ-fc-4-5-1', subtopicId: 'econ-4-5', front: 'Distinguish Nominal GDP, Real GDP, and Real GDP per head.', backBullets: ['Nominal uses current prices; Real adjusts for inflation; Real GDP per head divides Real GDP by population.'] },
  { id: 'econ-fc-4-5-2', subtopicId: 'econ-4-5', front: 'State the exact formula for Real GDP growth rate and define recession.', backBullets: ['Growth = ((Real GDP₂ − Real GDP₁) ÷ Real GDP₁) × 100%; Recession = 2 consecutive quarters of falling Real GDP.'] },
  { id: 'econ-fc-4-5-3', subtopicId: 'econ-4-5', front: 'Contrast actual economic growth with potential economic growth on a PPC.', backBullets: ['Actual growth moves from inside the PPC toward the boundary (higher AD); potential growth shifts the entire PPC outward.'] },
  { id: 'econ-fc-4-5-4', subtopicId: 'econ-4-5', front: 'List three benefits and three costs of rapid economic growth.', backBullets: ['Benefits: higher incomes, more jobs, fiscal dividend for public services. Costs: pollution/resource depletion, demand-pull inflation, wider inequality.'] },
  { id: 'econ-fc-4-5-5', subtopicId: 'econ-4-5', front: 'Give three reasons GDP alone does not measure true quality of life.', backBullets: ['Ignores income distribution, unpaid/informal work, leisure time, crime, and environmental damage.'] },

  // 4.6
  { id: 'econ-fc-4-6-1', subtopicId: 'econ-4-6', front: 'State the unemployment rate formula and define the labour force.', backBullets: ['(Unemployed ÷ Labour Force) × 100%; Labour Force = Employed + Unemployed actively seeking work.'] },
  { id: 'econ-fc-4-6-2', subtopicId: 'econ-4-6', front: 'Compare the ILO Labour Force Survey with the Claimant Count.', backBullets: ['ILO uses international household interviews (captures non-claimants, costly); Claimant Count counts benefit recipients only (cheap, understates true joblessness).'] },
  { id: 'econ-fc-4-6-3', subtopicId: 'econ-4-6', front: 'Define cyclical, structural, frictional, and seasonal unemployment.', backBullets: ['Cyclical: low AD in recession; Structural: declining industry/skills mismatch; Frictional: moving between jobs; Seasonal: off-season drop.'] },
  { id: 'econ-fc-4-6-4', subtopicId: 'econ-4-6', front: 'Explain how unemployment can rise at the same time as employment rises.', backBullets: ['When labour-force growth (immigration, higher participation) exceeds the number of new jobs created.'] },
  { id: 'econ-fc-4-6-5', subtopicId: 'econ-4-6', front: 'Match the right policy to cyclical vs structural unemployment.', backBullets: ['Cyclical → expansionary fiscal/monetary policy (raise AD); Structural → supply-side retraining, education, and relocation support.'] },

  // 4.7
  { id: 'econ-fc-4-7-1', subtopicId: 'econ-4-7', front: 'Distinguish inflation, disinflation, and deflation.', backBullets: ['Inflation: rising price level; Disinflation: slower positive inflation (e.g. 6% → 2%); Deflation: falling general price level (negative rate).'] },
  { id: 'econ-fc-4-7-2', subtopicId: 'econ-4-7', front: 'How is the Consumer Prices Index (CPI) constructed and used?', backBullets: ['Tracks a weighted representative basket of household goods/services relative to base year 100; Inflation = ((CPI₂ − CPI₁) ÷ CPI₁) × 100%.'] },
  { id: 'econ-fc-4-7-3', subtopicId: 'econ-4-7', front: 'Contrast demand-pull inflation with cost-push inflation.', backBullets: ['Demand-pull: excessive AD near full capacity; Cost-push: higher wages, energy/raw material bills, or indirect taxes raising unit costs.'] },
  { id: 'econ-fc-4-7-4', subtopicId: 'econ-4-7', front: 'Identify four groups hurt by high unanticipated inflation.', backBullets: ['Savers (falling real value), pensioners/fixed-income earners, lenders, and domestic exporters losing price competitiveness.'] },
  { id: 'econ-fc-4-7-5', subtopicId: 'econ-4-7', front: 'Contrast benign (supply-side) deflation with malign (demand-side) deflation.', backBullets: ['Benign: falling costs via technology/productivity boost output; Malign: collapsing AD leads consumers to delay buying and raises real debt burdens.'] },
];

export const ECON_EXAM_PRACTICE_UNIT_4: ExamQuestionItem[] = [
  {
    id: 'econ-ex-4-1',
    subtopicId: 'econ-4-1',
    number: 19,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country B launches a $30bn fiscal stimulus package to push real GDP growth from 1.2% to 4.8% and cut unemployment from 6.5% to 3.4%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain TWO macroeconomic conflicts that Country B may experience as a result of this rapid expansion.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'First, rapid growth and tight labour markets push wages and aggregate demand beyond spare capacity, conflicting with price stability by causing demand-pull inflation. Second, rising household incomes boost spending on imported consumer goods and machinery, worsening the current account of the balance of payments (or increasing industrial pollution).',
          markPoints: [
            { id: 'mp1', markDescription: 'Conflict 1: demand-pull inflation / harms price stability', requiredKeywordGroups: [['inflation', 'price stability'], ['demand', 'capacity', 'wage']] },
            { id: 'mp2', markDescription: 'Conflict 2: higher imports worsening current account OR environmental damage', requiredKeywordGroups: [['import', 'current account', 'balance of payments', 'pollution', 'environment']] },
            { id: 'mp3', markDescription: 'Links rising incomes/spending directly to the second conflict', requiredKeywordGroups: [['income', 'spending', 'output', 'growth']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-4-2',
    subtopicId: 'econ-4-2',
    number: 20,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Facing a $45bn budget deficit, Country F considers raising VAT from 15% to 20% instead of raising top-bracket income tax rates.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Evaluate the likely economic impact of raising VAT rather than top-bracket income tax on income inequality, inflation, and work incentives.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Raising VAT is regressive because lower-income households spend a larger proportion of their income on taxed essentials, widening income inequality; it also raises retail prices directly (cost-push inflation). However, avoiding higher direct income tax preserves work and enterprise incentives for skilled earners and raises indirect tax revenue quickly.',
          markPoints: [
            { id: 'mp1', markDescription: 'VAT is regressive and widens income inequality', requiredKeywordGroups: [['regressive', 'inequality'], ['lower-income', 'low income', 'proportion', 'poor']] },
            { id: 'mp2', markDescription: 'Higher VAT raises selling prices / inflationary pressure', requiredKeywordGroups: [['price', 'inflation', 'cost-push']] },
            { id: 'mp3', markDescription: 'Preserves work/enterprise incentives compared with higher direct income tax', requiredKeywordGroups: [['incentive', 'work', 'enterprise', 'direct']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-4-3',
    subtopicId: 'econ-4-3',
    number: 21,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Annual CPI inflation in Country H reaches 8.4% during a consumer credit boom. Its independent central bank raises the base interest rate from 3.0% to 6.0%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Analyse how this contractionary monetary policy reduces inflation and discuss ONE limitation that may weaken or delay its effect.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Raising base rates to 6% rewards saving, raises mortgage and business loan costs, and attracts hot money that appreciates the currency—cutting consumer spending, investment, and net exports so aggregate demand and demand-pull inflation fall. However, monetary policy suffers 12–18 month time lags and may fail to reduce imported cost-push inflation while risking higher cyclical unemployment.',
          markPoints: [
            { id: 'mp1', markDescription: 'Higher rates raise saving/borrowing costs or appreciate currency', requiredKeywordGroups: [['saving', 'mortgage', 'loan', 'borrowing', 'appreciate']] },
            { id: 'mp2', markDescription: 'Reduces consumer spending/investment/aggregate demand to cut demand-pull inflation', requiredKeywordGroups: [['aggregate demand', 'spending', 'investment'], ['inflation']] },
            { id: 'mp3', markDescription: 'Limitation: 12–18 month time lag, cost-push ineffectiveness, or recession/unemployment risk', requiredKeywordGroups: [['time lag', '12', '18', 'cost-push', 'unemployment', 'recession']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-4-4',
    subtopicId: 'econ-4-4',
    number: 22,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country S invests $18bn over ten years in renewable electricity grids, modern seaports, and free coding/engineering apprenticeships.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Discuss whether these supply-side policies can achieve sustained non-inflationary economic growth.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'By improving worker human capital and cutting firms’ transport and energy costs, these supply-side investments raise labour productivity and shift the PPC/LRAS outward, allowing real GDP to grow without sparking demand-pull inflation. However, the $18bn outlay carries a high fiscal opportunity cost and suffers long 5–10 year time lags before capacity gains materialise.',
          markPoints: [
            { id: 'mp1', markDescription: 'Raises labour productivity / lowers firm transport and energy costs', requiredKeywordGroups: [['productivity', 'human capital', 'lower', 'cost']] },
            { id: 'mp2', markDescription: 'Shifts PPC outward / LRAS right for non-inflationary growth', requiredKeywordGroups: [['ppc', 'lras', 'capacity'], ['outward', 'right', 'non-inflationary']] },
            { id: 'mp3', markDescription: 'Evaluation: high $18bn fiscal cost/opportunity cost AND/OR long time lags', requiredKeywordGroups: [['time lag', 'years', 'opportunity cost', '18', 'budget', 'expensive']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-4-5',
    subtopicId: 'econ-4-5',
    number: 23,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country N records Nominal GDP growth of 7.0% in 2025, while CPI inflation is 5.5% and population grows by 2.0%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Estimate Country N’s approximate Real GDP growth and explain why average living standards (Real GDP per head) actually fell despite headline 7% Nominal GDP growth.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Approximate Real GDP growth = Nominal growth (7.0%) - Inflation (5.5%) = 1.5%. Because population grew by 2.0%—faster than the 1.5% rise in real output—Real GDP per head fell by roughly 0.5%, meaning average material output per citizen declined.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates approximate Real GDP growth = 1.5%', numericMatch: { value: 1.5, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'Recognises inflation stripped out most of the nominal 7% rise', requiredKeywordGroups: [['inflation', 'nominal', 'real']] },
            { id: 'mp3', markDescription: 'Population growth (2%) exceeded real GDP growth (1.5%), lowering GDP per head', requiredKeywordGroups: [['population'], ['faster', 'exceed', 'greater', 'per head', 'fell']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-4-6',
    subtopicId: 'econ-4-6',
    number: 24,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Automation and foreign competition cause 40,000 shipbuilding jobs to close permanently in northern ports, while software and green-energy firms in the south report 35,000 unfilled vacancies.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Identify the main type of unemployment shown and recommend TWO targeted policies to reduce it.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'This is structural unemployment driven by permanent industry decline plus occupational skills mismatch and geographical immobility. The government should fund vocational retraining grants to equip former shipbuilders for green-energy/tech jobs, and provide relocation subsidies or regional investment incentives to bring jobs north.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies structural unemployment (skills mismatch / geographical immobility)', requiredKeywordGroups: [['structural'], ['mismatch', 'decline', 'immobilit', 'skill']] },
            { id: 'mp2', markDescription: 'Policy 1: government retraining / vocational education grants', requiredKeywordGroups: [['retrain', 'training', 'education', 'apprenticeship']] },
            { id: 'mp3', markDescription: 'Policy 2: relocation subsidies, affordable housing, or regional firm subsidies', requiredKeywordGroups: [['relocat', 'regional', 'housing', 'subsid', 'infrastructure']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-4-7',
    subtopicId: 'econ-4-7',
    number: 25,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country J experiences a −1.2% annual change in its CPI for two consecutive years alongside stagnant consumer retail sales and falling business profits.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Identify the macroeconomic phenomenon occurring in Country J, explain TWO reasons it harms GDP and employment, and suggest ONE policy response.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Country J is experiencing malign (demand-side) deflation. Falling prices encourage households to postpone spending hoping goods get even cheaper, while raising the real value of fixed debts/mortgages—squeezing profits and triggering cyclical unemployment. The government and central bank can respond with expansionary fiscal spending or lower interest rates/QE to revive aggregate demand.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies deflation (malign / demand-side)', requiredKeywordGroups: [['deflation']] },
            { id: 'mp2', markDescription: 'Consumers delay purchases AND/OR rising real debt burden cuts profits/jobs', requiredKeywordGroups: [['delay', 'postpone', 'wait', 'debt'], ['spending', 'demand', 'unemployment', 'profit']] },
            { id: 'mp3', markDescription: 'Recommends expansionary fiscal or monetary policy to lift AD', requiredKeywordGroups: [['expansionary', 'fiscal', 'government spending', 'tax cut', 'interest rate', 'qe']] },
          ],
        },
      },
    ],
  },
];
