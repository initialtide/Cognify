import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_ECON_UNITS_4_6_TOPICS: TopicDefinition[] = [
  {
    number: 4,
    title: 'Macroeconomic Performance & AD/AS Analysis',
    subtopics: [
      {
        id: 'al-econ-4-1',
        code: '4.1',
        slug: '4.1-circular-flow-multiplier-economic-cycle',
        title: 'Circular Flow of Income, The Multiplier (1 ÷ MPW) & Economic Cycle',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-4-2',
        code: '4.2',
        slug: '4.2-ad-sras-keynesian-classical-lras-output-gaps',
        title: 'Aggregate Demand, SRAS & Keynesian vs Classical LRAS Output Gaps',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 5,
    title: 'Macroeconomic Policy, Inflation & Inequality',
    subtopics: [
      {
        id: 'al-econ-5-1',
        code: '5.1',
        slug: '5.1-inflation-unemployment-phillips-curve',
        title: 'Inflation, Unemployment & Short-Run / Long-Run Phillips Curve',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-5-2',
        code: '5.2',
        slug: '5.2-fiscal-monetary-qe-policy-tradeoffs',
        title: 'Fiscal Policy, Monetary Policy (Interest Rates & QE) & Policy Trade-offs',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-5-3',
        code: '5.3',
        slug: '5.3-supply-side-inequality-lorenz-gini',
        title: 'Supply-Side Policies, Income Inequality, Lorenz Curve & Gini Coefficient',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'International Economics, Trade & Exchange Rates',
    subtopics: [
      {
        id: 'al-econ-6-1',
        code: '6.1',
        slug: '6.1-comparative-advantage-tariffs-marshall-lerner-bop',
        title: 'Comparative Advantage, Tariff Welfare Diagrams, Marshall-Lerner / J-Curve & BoP',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_ECON_UNITS_4_6_NOTES: Record<string, NoteLesson> = {
  'al-econ-4-1': {
    subtopicId: 'al-econ-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Circular Flow of Income, The Multiplier (1 ÷ MPW) & Economic Cycle',
    readingMinutes: 11,
    videoTitle: 'Circular Flow & The Economic Cycle IB Economics',
    youtubeId: 'PUVXpKDzDN0',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:35',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7136 & CIE 9708 National Income',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Circular Flow: Injections (J) vs Withdrawals (W)', cardId: 'al-econ-4-1-c1' },
      { time: '4:10', seconds: 250, label: 'The Keynesian Multiplier (k = 1 ÷ MPW) & Marginal Propensities', cardId: 'al-econ-4-1-c2' },
      { time: '8:20', seconds: 500, label: 'Economic Cycle, Positive/Negative Output Gaps & GDP Limits', cardId: 'al-econ-4-1-c3' },
    ],
    cards: [
      {
        id: 'al-econ-4-1-c1',
        title: 'The Circular Flow of Income: Injections vs Leakages',
        summary: 'National income is in macroeconomic equilibrium when total injections (I + G + X) exactly equal total withdrawals (S + T + M).',
        bullets: [
          '**Injections (J)** add spending into the domestic circular flow: **Investment (I) + Government spending (G) + Exports (X)**.',
          '**Withdrawals / Leakages (W)** remove spending from the circular flow: **Savings (S) + Taxation (T) + Imports (M)**. If `J > W`, real national income expands; if `W > J`, national income contracts.',
        ],
        subsections: [
          {
            heading: 'Income vs Wealth & Real vs Nominal GDP',
            bullets: [
              '**Income** is a **flow** measured per period (annual wages, rent, dividends); **wealth** is a **stock** of assets held at a point in time (property, shares, pensions).',
              '**Real GDP** strips out inflation using a GDP deflator (`Real GDP = Nominal GDP ÷ (Price Index ÷ 100)`), enabling genuine living-standard comparisons across years.',
            ],
            exampleHeading: 'Worked check: Equilibrium vs expansion',
            examples: [
              'If I = $120bn, G = $210bn, X = $170bn (J = **$500bn**) while S = $110bn, T = $190bn, M = $160bn (W = **$460bn**), net injections of **+$40bn** expand real GDP until rising withdrawals restore J = W.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'injections', definition: 'Additions to the circular flow of income from Investment (I), Government spending (G), and Exports (X).' },
        ],
      },
      {
        id: 'al-econ-4-1-c2',
        title: 'The Keynesian Multiplier Effect (k = 1 ÷ MPW)',
        summary: 'An initial injection circulates through successive rounds of spending, causing a proportionally LARGER final rise in real GDP.',
        bullets: [
          '**Open-economy multiplier**: `k = 1 ÷ (1 − MPC) = 1 ÷ MPW`, where `MPW = MPS + MPT + MPM` (marginal propensities to save, tax, and import).',
          '**Final GDP change**: `ΔY = k × ΔJ`. Economies with a **high MPC** (lower-income households spending extra income domestically) have a **larger multiplier**, whereas high import leakages (`MPM`) shrink `k`.',
        ],
        subsections: [
          {
            heading: 'Evaluating Multiplier Size in Real Economies',
            bullets: [
              '**Spare capacity constraint** - if the economy is already operating near full capacity (`Yfe`), a large injection triggers **inflation** rather than real output growth.',
              '**Reverse multiplier** - sharp fiscal austerity cuts (ΔG < 0) trigger a multiplied contraction in GDP and tax revenues.',
            ],
            exampleHeading: 'Worked calculation: Multiplier & total GDP expansion',
            examples: [
              'In an open economy, MPS = 0.10, MPT = 0.20, and MPM = 0.20 → MPW = 0.10 + 0.20 + 0.20 = **0.50**.',
              'Multiplier `k` = 1 ÷ 0.50 = **2.0**. A **$15bn** public rail investment raises final equilibrium GDP by `2.0 × $15bn` = **$30bn** (assuming ample spare capacity).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Keynesian multiplier', definition: 'Ratio of the final change in real national income to the initial autonomous injection (k = 1 ÷ MPW).' },
          { term: 'MPW', definition: 'Marginal Propensity to Withdraw — proportion of each extra £1 of income leaked into saving (MPS), tax (MPT), and imports (MPM).' },
        ],
      },
      {
        id: 'al-econ-4-1-c3',
        title: 'The Economic Cycle & Positive vs Negative Output Gaps',
        summary: 'Actual real GDP oscillates around long-run trend productive potential, creating inflationary positive gaps or recessionary negative gaps.',
        bullets: [
          '**Negative output gap**: actual GDP lies **below** trend productive potential → spare capacity, high cyclical unemployment, low demand-pull inflation.',
          '**Positive output gap**: actual GDP temporarily exceeds trend potential during a boom → overworked factors, labour shortages, rising wages, and accelerating demand-pull inflation.',
        ],
        subsections: [
          {
            heading: 'Limitations of Real GDP per Capita for Measuring Welfare',
            bullets: [
              'Ignores **income distribution** (inequality), the **informal/shadow economy**, **non-market home production**, negative environmental **externalities**, and leisure/working hours — hence A-Level economists supplement GDP with **PPP-adjusted GNI** and **HDI**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'negative output gap', definition: 'Shortfall where actual real GDP lies below the economy’s long-run trend productive capacity.' },
        ],
        diagram: 'business-cycle',
        memoryAid: 'Injections = IGX (I + G + X); Leakages = STM (S + T + M); Multiplier k = 1 ÷ (MPS + MPT + MPM)!',
        commonMistake: 'Students calculate the open-economy multiplier using ONLY `1 ÷ MPS` and forget taxation (MPT) and imports (MPM) — grossly overestimating the real-world multiplier!',
      },
    ],
    keyTerms: [
      { term: 'Circular flow of income', definition: 'Model showing flows of output, income, and spending between households, firms, government, and foreign sectors.' },
      { term: 'Keynesian multiplier', definition: 'k = 1 ÷ (1 − MPC) = 1 ÷ (MPS + MPT + MPM); amplified GDP change from an initial injection.' },
      { term: 'Positive output gap', definition: 'Temporary boom where actual GDP exceeds long-run trend productive potential, driving inflation.' },
      { term: 'Purchasing Power Parity (PPP)', definition: 'Exchange-rate adjustment equalising the real cost of an identical basket of goods across countries.' },
    ],
    checklistPoints: [
      'Distinguish injections (I, G, X) from withdrawals (S, T, M) and income (flow) from wealth (stock).',
      'Calculate the open-economy multiplier k = 1 ÷ (MPS + MPT + MPM) and evaluate capacity limits.',
      'Explain positive vs negative output gaps along the economic cycle and critique GDP as a welfare measure.',
    ],
  },

  'al-econ-4-2': {
    subtopicId: 'al-econ-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Aggregate Demand, SRAS & Keynesian vs Classical LRAS Output Gaps',
    readingMinutes: 12,
    videoTitle: 'Keynesian curve IB Economics',
    youtubeId: 'mkbcKQLdX18',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:45',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7136 & CIE 9708 AD/AS Models',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Aggregate Demand (C + I + G + X − M) & Slope Reasons', cardId: 'al-econ-4-2-c1' },
      { time: '4:30', seconds: 270, label: 'SRAS Shocks vs Classical Vertical LRAS', cardId: 'al-econ-4-2-c2' },
      { time: '9:00', seconds: 540, label: 'Keynesian L-Shaped LRAS & Policy Evaluation', cardId: 'al-econ-4-2-c3' },
    ],
    cards: [
      {
        id: 'al-econ-4-2-c1',
        title: 'Aggregate Demand (AD = C + I + G + X − M) & Accelerator Theory',
        summary: 'AD measures total planned expenditure on domestic goods at each price level, dominated by consumption (~60%) and volatile investment.',
        bullets: [
          '**Why AD slopes downward**: a higher domestic price level reduces real household purchasing power (**wealth effect**), makes exports less price-competitive (**international trade effect**), and pushes central banks to raise interest rates (**interest-rate effect**).',
          '**Accelerator theory**: net business **Investment (I)** responds disproportionately to the **rate of change of real GDP growth** — even a slowdown in GDP growth can cause investment to plunge sharply.',
        ],
        subsections: [
          {
            heading: 'Key Shifters of Aggregate Demand',
            bullets: [
              '**Consumption (C)** - disposable income, interest rates, consumer confidence, and house-price wealth effects.',
              '**Net Exports (X − M)** - foreign partner GDP growth, domestic exchange rate (SPICED/WPIDEC), and non-price quality competitiveness.',
            ],
            exampleHeading: 'Worked calculation: AD components',
            examples: [
              'If C = $620bn, I = $180bn, G = $240bn, X = $210bn, and M = $250bn, then Net Exports = −$40bn and **AD = 620 + 180 + 240 − 40 = $1,000bn**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'accelerator effect', definition: 'Process whereby changes in the rate of real GDP growth cause proportionally larger swings in business capital investment.' },
        ],
      },
      {
        id: 'al-econ-4-2-c2',
        title: 'Short-Run Aggregate Supply (SRAS) & Classical Vertical LRAS',
        summary: 'SRAS shifts with unit production costs (wages, oil, exchange rates); Classical LRAS is vertical at full-employment output Yfe.',
        bullets: [
          '**SRAS shifters**: money wage rates, global commodity/energy prices (oil/gas shocks), indirect business taxes, and imported raw-material costs via exchange rates. A leftward SRAS shift causes **stagflation** (higher inflation + falling GDP + rising unemployment simultaneously!).',
          '**Classical (Neoclassical) LRAS**: completely vertical at full-employment output `Yfe` because wages and prices adjust flexibly in the long run — implying expansionary AD policy ONLY creates **inflation** in the long run without raising sustainable output.',
        ],
        subsections: [
          {
            heading: 'Shifting LRAS Right (Long-Run Non-Inflationary Growth)',
            bullets: [
              'Both Classical and Keynesian models agree that shifting **LRAS rightward** requires increasing the **quantity or quality of factors of production** (technology, human capital, net skilled immigration, infrastructure, enterprise competition).',
            ],
            exampleHeading: 'Concrete case: Global oil shock (SRAS left)',
            examples: [
              'A 50% jump in global natural-gas prices raises UK factory energy costs, shifting **SRAS left** → price level jumps from P₁ to P₂ while real GDP falls from Y₁ to Y₂ (**cost-push stagflation**).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'stagflation', definition: 'Macroeconomic shock combining stagnant/falling real GDP and rising unemployment with accelerating cost-push inflation.' },
        ],
      },
      {
        id: 'al-econ-4-2-c3',
        title: 'Keynesian LRAS Curve: Spare Capacity, Bottlenecks & Full Employment',
        summary: 'The Keynesian L-shaped AS curve shows that the inflationary impact of boosting AD depends critically on how much spare capacity exists.',
        bullets: [
          '**Horizontal section (deep recession)**: abundant spare capacity and unemployed labour mean shifting AD right (`AD₁ → AD₂`) boosts real GDP and cuts unemployment with **zero demand-pull inflation**.',
          '**Curved intermediate section**: skilled-labour bottlenecks emerge as output nears `Yfe`, causing both real GDP AND the price level to rise together.',
          '**Vertical section (full capacity `Yfe`)**: all factors are fully employed, so any further AD rise (`AD₃`) causes **pure demand-pull inflation** with zero extra real output.',
        ],
        subsections: [
          {
            heading: 'A-Level Evaluation: Keynesian vs Classical Policy Stance',
            bullets: [
              '**Keynesian verdict** - economies can get stuck below `Yfe` due to **sticky downward wages**, justifying active expansionary fiscal stimulus during deep recessions.',
              '**Classical verdict** - fiscal stimulus risks **crowding out** private investment and fuels inflation unless paired with structural supply-side reform.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Keynesian LRAS', definition: 'Three-part aggregate supply curve transitioning from horizontal spare capacity through rising bottlenecks to vertical full employment (Yfe).' },
        ],
        diagram: 'ad-as-macro',
        memoryAid: 'Keynesian LRAS evaluation gold: "The inflationary impact of higher AD depends crucially on the size of the initial NEGATIVE OUTPUT GAP!"',
        commonMistake: 'Students shift LRAS left when oil prices spike temporarily. Short-run input cost spikes shift SRAS left — LRAS only shifts when long-run productive capacity (capital, skills, tech, labour force) changes!',
      },
    ],
    keyTerms: [
      { term: 'Aggregate Demand (AD)', definition: 'Total planned expenditure on domestic output at a given price level: C + I + G + (X − M).' },
      { term: 'Accelerator effect', definition: 'Disproportionate surge or collapse in capital investment triggered by changes in GDP growth rate.' },
      { term: 'Stagflation', definition: 'Simultaneous rise in inflation and unemployment caused by a negative SRAS supply shock.' },
      { term: 'Keynesian LRAS', definition: 'Aggregate supply curve showing elastic spare capacity at low GDP and vertical capacity limits at Yfe.' },
    ],
    checklistPoints: [
      'Explain all components of AD, the downward slope of AD, and the accelerator effect.',
      'Contrast SRAS supply shocks (stagflation) with Classical vertical LRAS adjustments.',
      'Draw and evaluate the Keynesian LRAS curve to judge when expansionary AD causes inflation vs real growth.',
    ],
  },

  'al-econ-5-1': {
    subtopicId: 'al-econ-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Inflation, Unemployment & Short-Run / Long-Run Phillips Curve',
    readingMinutes: 11,
    videoTitle: 'Phillips Curve IB Economics',
    youtubeId: 'ChdOFKdtK-Y',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:50',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7136 & CIE 9708 Phillips Curve',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'CPI Weighting, Quantity Theory (MV = PQ) & Deflation', cardId: 'al-econ-5-1-c1' },
      { time: '4:20', seconds: 260, label: 'Natural Rate of Unemployment (NRU) & Real-Wage Rigidity', cardId: 'al-econ-5-1-c2' },
      { time: '8:35', seconds: 515, label: 'Short-Run (SRPC) vs Expectations-Augmented Long-Run Phillips Curve (LRPC)', cardId: 'al-econ-5-1-c3' },
    ],
    cards: [
      {
        id: 'al-econ-5-1-c1',
        title: 'Inflation Measurement (CPI), Monetarism (MV = PQ) & Deflationary Spirals',
        summary: 'Weighted CPI tracks household living costs; monetarists blame excess money-supply growth; malign deflation traps economies in recession.',
        bullets: [
          '**Fisher’s Quantity Theory of Money**: `M × V = P × Q` (or `PT`). Monetarists argue that if velocity `V` and full-employment output `Q` are stable, raising the money supply `M` faster than real output directly causes proportional **inflation (`P ↑`)**.',
          '**Benign vs Malign Deflation**: **benign deflation** arises from rightward AS shifts (cheaper technology/productivity), boosting living standards; **malign deflation** arises from collapsing AD, triggering deferred spending, rising real debt burdens, and mass layoffs.',
        ],
        subsections: [
          {
            heading: 'Weighted CPI Index Calculation',
            bullets: [
              'CPI weights each category (housing, food, transport) by its share of average household spending (`Σ Weight × Price Index ÷ Σ Weights`), though individual households with different baskets face different personal inflation rates.',
            ],
            exampleHeading: 'Worked calculation: Weighted CPI inflation',
            examples: [
              'Basket weights: Food 0.30 (index 110), Housing 0.50 (index 106), Transport 0.20 (index 105).',
              'Weighted CPI = (0.30 × 110) + (0.50 × 106) + (0.20 × 105) = 33 + 53 + 21 = **107.0** → **7.0% inflation** from base year 100.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Fisher equation', definition: 'Identity MV = PQ linking money supply (M) and velocity of circulation (V) to price level (P) and real output (Q).' },
        ],
      },
      {
        id: 'al-econ-5-1-c2',
        title: 'Natural Rate of Unemployment (NRU / NAIRU) & Labour Market Rigidity',
        summary: 'Even at full-employment equilibrium, frictional and structural unemployment persist at the Natural Rate (NRU).',
        bullets: [
          '**Natural Rate of Unemployment (NRU / NAIRU)**: the equilibrium rate of unemployment remaining when aggregate labour demand equals aggregate labour supply — composed of **frictional, structural, and seasonal** unemployment (zero cyclical unemployment).',
          '**Hysteresis effect**: prolonged cyclical unemployment during a deep recession erodes workers’ skills and confidence, turning temporary cyclical joblessness into permanent **structural unemployment** and raising the NRU.',
        ],
        subsections: [
          {
            heading: 'Real-Wage (Classical) Unemployment',
            bullets: [
              'If trade-union bargaining or high binding minimum wages hold real wages above market-clearing equilibrium, labour supply exceeds labour demand, creating persistent classical unemployment.',
            ],
            exampleHeading: 'Concrete case: Hysteresis after regional industrial decline',
            examples: [
              'When steel plants close and laid-off engineers stay unemployed for 18+ months, outdated digital skills prevent re-entry into growing green-tech jobs without targeted state retraining.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Natural Rate of Unemployment', definition: 'Equilibrium unemployment persisting at full employment (frictional + structural) with stable inflation (NAIRU).' },
          { term: 'hysteresis', definition: 'Process where prolonged cyclical unemployment causes skill decay and discouragement, permanently raising structural unemployment.' },
        ],
      },
      {
        id: 'al-econ-5-1-c3',
        title: 'The Short-Run (SRPC) & Long-Run Phillips Curve (LRPC)',
        summary: 'In the short run policymakers face an inflation-unemployment trade-off; in the long run Friedman showed inflation expectations eliminate the trade-off.',
        bullets: [
          '**Short-Run Phillips Curve (SRPC)**: inverse curve showing that expansionary AD cuts unemployment below NRU temporarily, but tighter labour markets bid up wages and inflation (`movement up-left along SRPC₁`).',
          '**Expectations-Augmented LRPC (Friedman)**: once workers anticipate higher inflation, they demand higher nominal wages to restore real wages — firms lay off the extra hires, shifting **SRPC outward (`SRPC₁ → SRPC₂`)**! Unemployment returns to the **vertical LRPC at NRU**, stuck permanently at **higher inflation**.',
        ],
        subsections: [
          {
            heading: 'How to Shift LRPC Left (Lower NRU Without Inflation)',
            bullets: [
              'Only **supply-side labour-market policies** (retraining, childcare support, job-matching portals, cutting occupational immobility) shift **LRPC to the left**, lowering both unemployment and inflation simultaneously.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Long-Run Phillips Curve', definition: 'Vertical curve at the Natural Rate of Unemployment showing no permanent long-run trade-off between inflation and unemployment.' },
        ],
        memoryAid: 'AD stimulus moves ALONG SRPC short-term, then higher inflation expectations shift SRPC UP back to vertical LRPC!',
        commonMistake: 'Students confuse DISINFLATION (positive inflation slowing down, e.g. from 8% to 3%) with DEFLATION (negative inflation where the general price level actually falls, e.g. −1%).',
      },
    ],
    keyTerms: [
      { term: 'Quantity Theory of Money', definition: 'MV = PQ; monetarist link between excess money supply growth and inflation.' },
      { term: 'Disinflation', definition: 'A fall in the rate of inflation while prices are still rising more slowly (e.g. 7% down to 2%).' },
      { term: 'NAIRU / Natural Rate', definition: 'Non-Accelerating Inflation Rate of Unemployment where only frictional and structural unemployment exist.' },
      { term: 'Long-Run Phillips Curve', definition: 'Vertical line at NRU proving demand-side policy cannot permanently hold unemployment below NRU.' },
    ],
    checklistPoints: [
      'Calculate weighted CPI inflation and contrast benign (AS-driven) vs malign (AD-driven) deflation.',
      'Explain the Natural Rate of Unemployment (NAIRU), classical real-wage unemployment, and hysteresis.',
      'Use SRPC and vertical LRPC diagrams to explain why adaptive inflation expectations eliminate the long-run trade-off.',
    ],
  },

  'al-econ-5-2': {
    subtopicId: 'al-econ-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Fiscal Policy, Monetary Policy (Interest Rates & QE) & Policy Trade-offs',
    readingMinutes: 12,
    videoTitle: 'Monetary policy | Edexcel IGCSE Economics (9-1)',
    youtubeId: '6XcDx-eABf4',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:20',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7136 & CIE 9708 Demand-Side Policy',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Cyclical vs Structural Budget Deficits & Crowding Out', cardId: 'al-econ-5-2-c1' },
      { time: '4:45', seconds: 285, label: 'Monetary Transmission Mechanism & Quantitative Easing (QE)', cardId: 'al-econ-5-2-c2' },
      { time: '9:30', seconds: 570, label: 'Liquidity Traps, Time Lags & Macroeconomic Policy Trade-offs', cardId: 'al-econ-5-2-c3' },
    ],
    cards: [
      {
        id: 'al-econ-5-2-c1',
        title: 'Fiscal Policy: Automatic Stabilisers, Structural Deficits & Crowding Out',
        summary: 'Distinguishing recession-driven cyclical deficits from persistent structural deficits and evaluating bond-market crowding out.',
        bullets: [
          '**Automatic stabilisers** dampen economic cycles without new legislation: during recessions, progressive tax receipts fall while welfare benefits rise automatically, cushioning the fall in AD.',
          '**Cyclical vs Structural budget deficit**: a **cyclical deficit** disappears once GDP recovers to trend; a **structural deficit** persists even during a boom and steadily inflates the **national debt-to-GDP ratio**.',
          '**Financial crowding out**: heavy government borrowing raises demand for loanable funds, pushing up market interest rates and discouraging private-sector business investment (`I ↓`).',
        ],
        subsections: [
          {
            heading: 'The Laffer Curve & Tax Revenue',
            bullets: [
              'The **Laffer curve** suggests that beyond an optimal tax rate `T*`, further tax hikes shrink total tax revenue by discouraging work effort, encouraging tax avoidance, and triggering brain drain.',
            ],
            exampleHeading: 'Worked example: Debt-to-GDP vs Budget Deficit',
            examples: [
              'A country with $2,000bn GDP has $1,600bn existing national debt (80% of GDP) and runs a $100bn annual budget deficit (5% of GDP) → total national debt rises to **$1,700bn**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'crowding out', definition: 'Reduction in private-sector investment or consumption caused by rising interest rates or resource scarcity from higher government borrowing.' },
          { term: 'structural budget deficit', definition: 'Portion of a government’s fiscal deficit that persists even when the economy operates at full-employment trend GDP.' },
        ],
      },
      {
        id: 'al-econ-5-2-c2',
        title: 'Monetary Transmission Mechanism & Quantitative Easing (QE)',
        summary: 'Central banks steer AD via base interest rates and — when rates hit the zero lower bound — via large-scale bond purchases (QE).',
        bullets: [
          '**Monetary transmission channels**: cutting base rates lowers mortgage/loan costs (`C ↑, I ↑`), lifts house/share prices (**wealth effect**), and triggers hot-money outflows that depreciate the exchange rate (**WPIDEC → `X − M ↑`**).',
          '**Quantitative Easing (QE)**: the central bank electronically creates reserves to buy government bonds from commercial banks and pension funds — boosting bank liquidity, driving **bond yields down** (cheaper long-term loans), and raising asset prices to stimulate AD during deep recessions.',
        ],
        subsections: [
          {
            heading: 'Risks & Limits of Quantitative Easing',
            bullets: [
              '**Asset-price inequality** - QE inflates share and property prices owned mainly by wealthier households while struggling to reach real-economy small businesses if banks hoard excess liquidity.',
              '**Inflation risk** - excessive QE once supply constraints tighten can fuel sustained inflation.',
            ],
            exampleHeading: 'Concrete case: Liquidity trap at near-zero rates',
            examples: [
              'When Japan cut interest rates to −0.25% amid deflationary pessimism, nervous households and firms still refused to borrow and spend — illustrating Keynes’s **liquidity trap** where monetary policy loses traction.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Quantitative Easing (QE)', definition: 'Unconventional monetary policy where the central bank creates money electronically to buy financial assets (government bonds) to boost liquidity and lower long-term yields.' },
        ],
      },
      {
        id: 'al-econ-5-2-c3',
        title: 'Evaluating Policy Trade-offs & Implementation Time Lags',
        summary: 'No single policy solves every objective simultaneously; effective macroeconomic governance combines demand-side stability with supply-side reform.',
        bullets: [
          '**Policy time lags**: interest-rate cuts take **12–24 months** to pass fully through fixed-rate mortgages and investment decisions; discretionary fiscal infrastructure projects suffer political approval and construction lags.',
          '**Core conflicts**: expansionary AD boosts growth and jobs (`U ↓`) yet risks **demand-pull inflation** and a **current account deficit** (`M ↑` due to high MPM); contractionary rates tame inflation yet raise debt-servicing costs and appreciate the exchange rate (hurting exporters).',
        ],
        subsections: [
          {
            heading: 'Combining Policies for Top A-Level Evaluation Marks',
            bullets: [
              'Always specify **state of the economy** (spare capacity vs full capacity), **size of the multiplier**, **consumer/business confidence**, and **policy mix** (e.g. short-run monetary/fiscal stabilisation paired with long-run supply-side investment).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'liquidity trap', definition: 'Situation where interest rates are near zero yet low confidence causes households and banks to hoard cash rather than borrow and spend.' },
        ],
        memoryAid: 'Budget Deficit = ANNUAL flow (G > T this year); National Debt = CUMULATIVE stock of all past unpaid borrowing!',
        commonMistake: 'Students claim QE "prints cash and hands it directly to consumers." In reality, central banks buy EXISTING bonds from financial institutions to lower bond yields and boost lending liquidity!',
      },
    ],
    keyTerms: [
      { term: 'Automatic stabilisers', definition: 'Built-in tax and welfare rules that automatically cushion recessions and cool booms without new legislation.' },
      { term: 'Crowding out', definition: 'Higher government borrowing driving up interest rates and displacing private capital investment.' },
      { term: 'Quantitative Easing (QE)', definition: 'Central bank asset purchases using created reserves to boost bank liquidity and lower long-term interest yields.' },
      { term: 'Liquidity trap', definition: 'Condition where near-zero interest rates fail to stimulate borrowing due to weak confidence.' },
    ],
    checklistPoints: [
      'Distinguish cyclical vs structural budget deficits, national debt vs deficit, and financial crowding out.',
      'Explain all channels of the monetary transmission mechanism and evaluate Quantitative Easing (QE).',
      'Weigh macroeconomic conflicts, liquidity traps, and 12–24 month time lags in policy essays.',
    ],
  },

  'al-econ-5-3': {
    subtopicId: 'al-econ-5-3',
    subtopicCode: '5.3',
    subtopicTitle: 'Supply-Side Policies, Income Inequality, Lorenz Curve & Gini Coefficient',
    readingMinutes: 11,
    videoTitle: 'Lorenz Curve IB Economics',
    youtubeId: 'JnUHFDty2qo',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:45',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7136 & CIE 9708 Supply-Side & Inequality',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Market-Based vs Interventionist Supply-Side Policies', cardId: 'al-econ-5-3-c1' },
      { time: '4:00', seconds: 240, label: 'Lorenz Curve & Gini Coefficient Calculation', cardId: 'al-econ-5-3-c2' },
      { time: '7:55', seconds: 475, label: 'Equity vs Efficiency Trade-offs & Redistribution Policies', cardId: 'al-econ-5-3-c3' },
    ],
    cards: [
      {
        id: 'al-econ-5-3-c1',
        title: 'Market-Based vs Interventionist Supply-Side Policies',
        summary: 'Shifting LRAS right raises non-inflationary growth, yet market-based and interventionist tools carry sharply different equity and fiscal costs.',
        bullets: [
          '**Market-based supply-side policies** free up market incentives: cutting income/corporation taxes, deregulation, privatisation, and reducing trade-union/welfare rigidities — cheaper upfront for taxpayers, yet risk **widening inequality** and **private monopoly abuse**.',
          '**Interventionist supply-side policies** fix market failures directly: state funding for STEM education, apprenticeships, healthcare, R&D grants, and green/transport infrastructure — lift both growth AND equity, yet impose **heavy fiscal opportunity costs** and **5–15 year time lags**.',
        ],
        subsections: [
          {
            heading: 'Dual AD + LRAS Effect of Infrastructure & Education',
            bullets: [
              'Building a national fibre-broadband or rail network immediately increases `G` (boosting **AD short-run** via the multiplier) AND later boosts nationwide productivity (shifting **LRAS right long-run**).',
            ],
            exampleHeading: 'Concrete comparison: Deregulation vs Apprenticeships',
            examples: [
              'Deregulating telecom licensing quickly lowers consumer broadband prices via new entry, whereas funding 200,000 engineering apprenticeships takes 3–5 years before lifting national labour productivity.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'interventionist supply-side policy', definition: 'Active government investment in education, training, healthcare, R&D, or infrastructure to expand LRAS.' },
        ],
      },
      {
        id: 'al-econ-5-3-c2',
        title: 'Measuring Inequality: The Lorenz Curve & Gini Coefficient',
        summary: 'Plotting cumulative income shares against cumulative population shares quantifies inequality strictly between 0 and 1.',
        bullets: [
          '**Lorenz Curve**: plots cumulative % of population (x-axis) against cumulative % of total income (y-axis). A **45° diagonal line** represents **perfect equality**; the further the Lorenz curve bows outward away from the 45° line, the greater the inequality.',
          '**Gini Coefficient** = `Area A ÷ (Area A + Area B)`, where **Area A** is the area between the 45° line and the Lorenz curve, and **Area B** lies under the Lorenz curve. **Gini = 0** = perfect equality; **Gini = 1** = one person holds 100% of all income.',
        ],
        subsections: [
          {
            heading: 'Income vs Wealth Inequality Drivers',
            bullets: [
              '**Drivers** - skill-biased technological change (AI/software premiums), globalisation squeezing low-skilled manufacturing wages, inheritance of capital/property wealth (where returns `r > g`), and regressive indirect taxes.',
            ],
            exampleHeading: 'Worked calculation: Gini coefficient from Lorenz areas',
            examples: [
              'For Country X, Area A (between 45° line and Lorenz curve) = **0.18** and Area B (under Lorenz curve) = **0.32** (so A + B = 0.50).',
              'Gini Coefficient = 0.18 ÷ (0.18 + 0.32) = 0.18 ÷ 0.50 = **0.36** (lower than Brazil’s ~0.52, higher than Slovakia’s ~0.24).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Gini coefficient', definition: 'Numerical index of income inequality ranging from 0 (perfect equality) to 1 (complete inequality), calculated as A ÷ (A + B) from a Lorenz curve.' },
          { term: 'Lorenz curve', definition: 'Graph showing the cumulative percentage of national income earned by each cumulative percentage of the population.' },
        ],
      },
      {
        id: 'al-econ-5-3-c3',
        title: 'Redistribution Policies & The Equity–Efficiency Trade-off',
        summary: 'Progressive taxes, universal healthcare, and minimum wages shrink the Gini coefficient, though policymakers must guard against disincentive effects.',
        bullets: [
          '**Equality vs Equity**: **equality** means identical outcomes for everyone; **equity** means fairness (often defined as equality of opportunity and protecting the vulnerable from absolute poverty).',
          '**Redistribution toolkit**: progressive income/wealth taxation, means-tested welfare transfers, state-funded education/healthcare (**in-kind benefits**), and living minimum wages — evaluated against potential **poverty traps** (high marginal tax + benefit withdrawal rates discouraging low-paid work) and tax flight.',
        ],
        subsections: [
          {
            heading: 'Evaluating Kuznets & Trickle-Down Claims',
            bullets: [
              'Moderate inequality can reward innovation and entrepreneurship, yet extreme inequality weakens aggregate demand (since wealthy households have a **lower MPC** than poorer households) and entrenches social immobility.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'poverty trap', definition: 'Situation where low-income workers gain little extra net income from working more hours because higher taxes and lost means-tested benefits offset wage gains.' },
        ],
        memoryAid: 'Gini = A ÷ (A + B): 0 = Totally Equal (on the 45° line); 1 = One Person Owns Everything!',
        commonMistake: 'Students claim a higher Gini coefficient means MORE equality. The opposite is true: a HIGHER Gini (closer to 1.0) means GREATER INEQUALITY (a wider bow away from the 45° line)!',
      },
    ],
    keyTerms: [
      { term: 'Market-based supply-side policy', definition: 'Tax cuts, deregulation, privatisation, and labour-market flexibility designed to raise LRAS via incentives.' },
      { term: 'Lorenz curve', definition: 'Curve plotting cumulative population share against cumulative income share relative to a 45° equality line.' },
      { term: 'Gini coefficient', definition: 'A ÷ (A + B) from a Lorenz curve; 0 = perfect equality, 1 = total inequality.' },
      { term: 'Poverty trap', definition: 'Disincentive to earn extra wages when progressive taxes plus withdrawn benefits produce a high effective marginal tax rate.' },
    ],
    checklistPoints: [
      'Contrast market-based vs interventionist supply-side policies across fiscal cost, time lag, and equity.',
      'Interpret a Lorenz curve and calculate the Gini coefficient from Areas A and B.',
      'Evaluate progressive taxation, welfare transfers, and minimum wages using the equity–efficiency trade-off.',
    ],
  },

  'al-econ-6-1': {
    subtopicId: 'al-econ-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Comparative Advantage, Tariff Welfare Diagrams, Marshall-Lerner / J-Curve & BoP',
    readingMinutes: 12,
    videoTitle: 'Tariffs IB Economics',
    youtubeId: 'SGhzu7w4oxU',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:20',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7136 & CIE 9708 International Trade',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Comparative Advantage, Opportunity Cost Ratios & Terms of Trade', cardId: 'al-econ-6-1-c1' },
      { time: '4:30', seconds: 270, label: 'Tariff Diagram: Consumer Surplus Loss, Government Revenue & Deadweight Loss', cardId: 'al-econ-6-1-c2' },
      { time: '8:55', seconds: 535, label: 'Exchange Rates, Marshall-Lerner Condition & The J-Curve Effect', cardId: 'al-econ-6-1-c3' },
    ],
    cards: [
      {
        id: 'al-econ-6-1-c1',
        title: 'Comparative Advantage & Terms of Trade',
        summary: 'Countries gain mutually from specialising in goods where they hold the LOWEST opportunity cost — even if one country has absolute advantage in both.',
        bullets: [
          '**Comparative advantage (Ricardo)**: country A has comparative advantage in Good X if it produces X at a **lower domestic opportunity cost** than country B. Mutually beneficial trade requires the **Terms of Trade** (exchange ratio) to lie strictly **between** the two countries’ domestic opportunity costs.',
          '**Terms of Trade index** = `(Index of Export Prices ÷ Index of Import Prices) × 100`. A rise above 100 means an **improvement** (1 unit of exports now buys more imports), though if caused by rising domestic inflation it may worsen export volume competitiveness.',
        ],
        subsections: [
          {
            heading: 'Worked Calculation: Opportunity Cost & Trade Ratio',
            bullets: [
              'Country A can produce either 40 laptops OR 20 bikes (1 bike costs **2 laptops**). Country B can produce either 10 laptops OR 10 bikes (1 bike costs **1 laptop**).',
              'Country B has comparative advantage in bikes (1 < 2 laptops); Country A has comparative advantage in laptops (0.5 < 1 bike). Both gain if they trade at **1 bike = 1.5 laptops**!',
            ],
            exampleHeading: 'Limitations of Comparative Advantage Theory',
            examples: [
              'Assumes zero transport costs, constant returns to scale, perfect factor mobility within countries, and ignores over-dependence on volatile primary commodities (Prebisch-Singer hypothesis).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'comparative advantage', definition: 'Ability of a country to produce a good at a lower domestic opportunity cost than another trading partner.' },
          { term: 'Terms of Trade', definition: 'Ratio of average export prices to average import prices: (Index of Export Prices ÷ Index of Import Prices) × 100.' },
        ],
      },
      {
        id: 'al-econ-6-1-c2',
        title: 'Tariff Welfare Diagram: Surplus Transfers & Deadweight Losses',
        summary: 'An import tariff lifts domestic price from Pw to Pw+t, enriching domestic producers and the treasury while inflicting net deadweight welfare loss.',
        bullets: [
          '**Price & Quantity effect**: raising import price from `Pw` to `Pw + t` expands domestic supply (`Q₁ → Q₂`), contracts domestic demand (`Q₄ → Q₃`), and shrinks imports from `(Q₄ − Q₁)` down to `(Q₃ − Q₂)`.',
          '**Two Deadweight Welfare Loss triangles**: (1) **Production inefficiency triangle** (less efficient domestic firms producing between `Q₁` and `Q₂` above world cost `Pw`); (2) **Consumption welfare loss triangle** (consumers priced out between `Q₃` and `Q₄`). Government collects tariff revenue = `t × (Q₃ − Q₂)`.',
        ],
        subsections: [
          {
            heading: 'Tariffs vs Quotas vs Trading Blocs',
            bullets: [
              '**Quota vs Tariff** - quotas generate **zero government tax revenue** (foreign exporters or import licence holders capture quota rents), making tariffs fiscally preferable.',
              '**Customs unions (trade creation vs trade diversion)** - removing internal barriers creates trade with lower-cost members (**trade creation**), yet a common external tariff can divert imports away from cheaper global producers (**trade diversion**).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'trade diversion', definition: 'Welfare loss when joining a customs union shifts imports from a low-cost outside nation to a higher-cost partner inside the bloc.' },
        ],
      },
      {
        id: 'al-econ-6-1-c3',
        title: 'Marshall-Lerner Condition, J-Curve & Balance of Payments',
        summary: 'Currency depreciation improves a current account deficit ONLY if combined trade demand elasticities exceed 1 — and even then worsens first before improving.',
        bullets: [
          '**Marshall-Lerner condition**: a currency depreciation improves the current account balance strictly when `|PED exports| + |PED imports| > 1` (so the volume boost outweighs higher import prices).',
          '**The J-Curve effect**: in the **short run**, trade contracts are fixed and buyers need time to switch suppliers, making `|PEDx| + |PEDm| < 1` — so the current account deficit initially **WORSENS** (downward dip of the J) before turning into long-run improvement once elasticities become elastic.',
        ],
        subsections: [
          {
            heading: 'Balance of Payments Identity',
            bullets: [
              'Under a pure floating exchange rate, `Current Account + Capital Account + Financial Account = 0` — meaning a persistent current account deficit must be financed by net **Financial Account inflows** (FDI, foreign portfolio purchases, or hot-money loans).',
            ],
            exampleHeading: 'Worked check: Marshall-Lerner test',
            examples: [
              'If `PED exports = −0.8` and `PED imports = −0.6`, then `|−0.8| + |−0.6| = 1.4 > 1` → Marshall-Lerner holds, so depreciation **improves** the current account in the long run (after an initial J-curve dip).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Marshall-Lerner condition', definition: 'Rule that currency depreciation improves the current account balance only if |PED exports| + |PED imports| > 1.' },
          { term: 'J-curve effect', definition: 'Short-run worsening of a current account deficit after currency depreciation (due to inelastic short-run trade contracts) followed by long-run improvement.' },
        ],
        memoryAid: 'Marshall-Lerner: |PEDx| + |PEDm| > 1 for depreciation to cure a deficit — and trace a "J" for short-run dip before long-run gain!',
        commonMistake: 'Students say an "improvement in Terms of Trade" automatically fixes a current account deficit. If export prices rise when demand is price elastic, export volume plunges and the current account WORSENS!',
      },
    ],
    keyTerms: [
      { term: 'Comparative advantage', definition: 'Producing a good at a lower domestic opportunity cost than another nation.' },
      { term: 'Terms of Trade', definition: '(Index of Export Prices ÷ Index of Import Prices) × 100.' },
      { term: 'Marshall-Lerner condition', definition: '|PED exports| + |PED imports| > 1 required for depreciation to narrow a current account deficit.' },
      { term: 'J-curve effect', definition: 'Short-run deterioration then long-run improvement in the current account after currency depreciation.' },
    ],
    checklistPoints: [
      'Calculate domestic opportunity cost ratios to prove comparative advantage and valid terms of trade.',
      'Analyse consumer surplus loss, producer surplus gain, tariff revenue, and both deadweight loss triangles.',
      'Apply the Marshall-Lerner condition and J-curve to evaluate currency depreciation as a BoP policy.',
    ],
  },
};

export const ALEVEL_ECON_UNITS_4_6_QUIZZES: QuizQuestion[] = [
  // 4.1 (5)
  {
    id: 'alecon-q-4-1-1',
    subtopicId: 'al-econ-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In an open economy, MPS = 0.10, MPT = 0.15, and MPM = 0.15. What is the value of the Keynesian multiplier (k)?',
    options: ['1.67', '2.5', '4.0', '10.0'],
    correctIndex: 1,
    explanation: 'MPW = 0.10 + 0.15 + 0.15 = 0.40 → Multiplier k = 1 ÷ 0.40 = 2.5.',
  },
  {
    id: 'alecon-q-4-1-2',
    subtopicId: 'al-econ-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'If an economy has MPC = 0.75 (closed economy with no tax/imports) and the government injects $8bn into hospital construction, calculate the final increase in national income and state ONE reason the real-world gain might be smaller.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Multiplier k = 1 ÷ (1 − 0.75) = 4, so national income rises by 4 × $8bn = $32bn. In reality, import leakages, taxation, or operating near full capacity causing inflation would make the real GDP gain smaller.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates final increase = $32bn (k = 4)', numericMatch: { value: 32, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Names import/tax leakages, full capacity/inflation, or crowding out', requiredKeywordGroups: [['import', 'tax', 'leakage', 'capacity', 'inflation', 'crowding']] },
      ],
    },
    explanation: 'k = 1 ÷ 0.25 = 4 → ΔY = 4 × $8bn = $32bn, dampened in practice by imports, taxes, and capacity limits.',
  },
  {
    id: 'alecon-q-4-1-3',
    subtopicId: 'al-econ-4-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Identify the features of the Economic Cycle diagram:',
    diagram: 'business-cycle',
    labels: [
      { marker: 'Actual Real GDP temporarily ABOVE Trend GDP', options: ['Positive output gap (Boom)', 'Negative output gap (Recession)'], answer: 'Positive output gap (Boom)' },
      { marker: 'Actual Real GDP BELOW Trend GDP with spare capacity', options: ['Negative output gap', 'Full employment'], answer: 'Negative output gap' },
    ],
    explanation: 'Output gaps measure the vertical distance between actual real GDP and long-run trend potential.',
  },
  {
    id: 'alecon-q-4-1-4',
    subtopicId: 'al-econ-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the circular flow identity:',
    segments: ['The three injections into the circular flow are Investment, Government spending, and ', ', whereas savings, taxation, and imports are ', '.'],
    wordBank: ['Exports', 'withdrawals', 'consumption', 'wealth'],
    answers: ['Exports', 'withdrawals'],
    explanation: 'J = I + G + X (injections); W = S + T + M (withdrawals/leakages).',
  },
  {
    id: 'alecon-q-4-1-5',
    subtopicId: 'al-econ-4-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each national-income concept to its exact meaning:',
    pairs: [
      { left: 'Income', right: 'Flow of earnings received per unit of time' },
      { left: 'Wealth', right: 'Stock of financial and physical assets held at one point in time' },
      { left: 'Real GDP', right: 'National output adjusted to remove the effect of inflation' },
    ],
    explanation: 'Distinguishing flows from stocks and real from nominal figures is core A-Level macro precision.',
  },

  // 4.2 (5)
  {
    id: 'alecon-q-4-2-1',
    subtopicId: 'al-econ-4-2',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the Keynesian AD/AS diagram to identify each zone:',
    diagram: 'ad-as-macro',
    labels: [
      { marker: 'Horizontal LRAS region (AD₁ → AD₂)', options: ['Spare capacity: real GDP rises with zero inflation', 'Pure demand-pull inflation'], answer: 'Spare capacity: real GDP rises with zero inflation' },
      { marker: 'Vertical LRAS limit at Yfe (AD₃)', options: ['Full employment: higher AD causes pure inflation', 'Recessionary spare capacity'], answer: 'Full employment: higher AD causes pure inflation' },
    ],
    explanation: 'The Keynesian LRAS curve demonstrates why initial spare capacity dictates whether fiscal stimulus is inflationary.',
  },
  {
    id: 'alecon-q-4-2-2',
    subtopicId: 'al-econ-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'A sudden doubling of global energy prices causes which immediate shift on an AD/AS diagram?',
    options: [
      'SRAS shifts LEFT, causing stagflation (higher price level and lower real GDP)',
      'AD shifts RIGHT, causing a boom',
      'SRAS shifts RIGHT, lowering inflation',
      'LRAS shifts RIGHT immediately',
    ],
    correctIndex: 0,
    explanation: 'Higher energy input costs push SRAS upward/leftward, raising prices while cutting real output (stagflation).',
  },
  {
    id: 'alecon-q-4-2-3',
    subtopicId: 'al-econ-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Classical vs Keynesian macro distinction:',
    segments: ['In the Classical model, LRAS is strictly ', ' at full employment Yfe, whereas the ', ' effect explains why small drops in GDP growth cause sharp drops in business investment.'],
    wordBank: ['vertical', 'accelerator', 'horizontal', 'multiplier'],
    answers: ['vertical', 'accelerator'],
    explanation: 'Classical LRAS assumes flexible prices/wages; accelerator theory links investment volatility to GDP growth rates.',
  },
  {
    id: 'alecon-q-4-2-4',
    subtopicId: 'al-econ-4-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO factors that shift Long-Run Aggregate Supply (LRAS) to the RIGHT:',
    options: [
      'Major investment in AI productivity technology and STEM university training',
      'Net inward migration of skilled engineers and improved transport infrastructure',
      'A temporary cut in VAT for six months',
      'A short-term spike in crude oil prices',
    ],
    correctIndices: [0, 1],
    explanation: 'Only higher quantity or quality of factors of production shifts LRAS rightward.',
  },
  {
    id: 'alecon-q-4-2-5',
    subtopicId: 'al-econ-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why a Classical economist opposes using expansionary fiscal stimulus when an economy is already close to full employment (Yfe).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'In the Classical model, LRAS is vertical at full employment Yfe, so boosting AD cannot permanently raise real output and instead causes pure demand-pull inflation and rising nominal wages (plus financial crowding out of private investment).',
      markPoints: [
        { id: 'mp1', markDescription: 'Classical LRAS is vertical at Yfe so real GDP cannot rise permanently', requiredKeywordGroups: [['vertical', 'yfe', 'full employment', 'full capacity']] },
        { id: 'mp2', markDescription: 'Results in pure demand-pull inflation (or crowding out)', requiredKeywordGroups: [['inflation', 'price level', 'crowding out']] },
      ],
    },
    explanation: 'At vertical LRAS, boosting AD creates pure inflation and potential crowding out rather than sustainable growth.',
  },

  // 5.1 (5)
  {
    id: 'alecon-q-5-1-1',
    subtopicId: 'al-econ-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'According to Milton Friedman’s expectations-augmented Phillips Curve, what happens in the LONG RUN after a central bank repeatedly boosts AD to push unemployment below NRU?',
    options: [
      'Unemployment stays permanently below NRU with low inflation',
      'Rising inflation expectations shift SRPC outward, returning unemployment to NRU on the vertical LRPC at a permanently higher inflation rate',
      'The LRPC becomes completely horizontal',
      'Deflation occurs automatically',
    ],
    correctIndex: 1,
    explanation: 'Workers demand higher nominal wages once they expect inflation, shifting SRPC up until unemployment returns to NRU.',
  },
  {
    id: 'alecon-q-5-1-2',
    subtopicId: 'al-econ-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'In Fisher’s equation MV = PQ, if V and Q stay constant and the money supply M grows by 9%, predict the inflation rate and distinguish DISINFLATION from DEFLATION.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'With V and Q constant, a 9% rise in M causes 9% inflation. Disinflation means the inflation rate slows down while prices still rise (e.g. 6% to 2%), whereas deflation means a negative inflation rate where the general price level actually falls.',
      markPoints: [
        { id: 'mp1', markDescription: 'Predicts 9% inflation', numericMatch: { value: 9, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Distinguishes slowing positive inflation (disinflation) from falling price level (deflation)', requiredKeywordGroups: [['slow', 'still rise', 'lower rate'], ['fall', 'negative', 'price level']] },
      ],
    },
    explanation: 'Monetarists link proportional money-supply growth to inflation; disinflation is slower price rises, deflation is falling prices.',
  },
  {
    id: 'alecon-q-5-1-3',
    subtopicId: 'al-econ-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the unemployment hysteresis and deflation concepts:',
    segments: ['When long-term cyclical joblessness erodes skills and raises structural unemployment permanently, it is called ', '; falling prices caused by productivity tech gains is called ', ' deflation.'],
    wordBank: ['hysteresis', 'benign', 'malign', 'stagflation'],
    answers: ['hysteresis', 'benign'],
    explanation: 'Hysteresis permanently raises NRU; benign deflation stems from rightward AS productivity shifts.',
  },
  {
    id: 'alecon-q-5-1-4',
    subtopicId: 'al-econ-5-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each Phillips Curve / labour-market term to its meaning:',
    pairs: [
      { left: 'NAIRU / NRU', right: 'Equilibrium unemployment (frictional + structural) with stable inflation' },
      { left: 'Real-wage unemployment', right: 'Labour surplus caused by wages held above market-clearing equilibrium' },
      { left: 'Shift of LRPC left', right: 'Achieved by supply-side retraining and labour mobility reforms' },
    ],
    explanation: 'Only supply-side improvements lower the vertical Long-Run Phillips Curve without fuelling inflation.',
  },
  {
    id: 'alecon-q-5-1-5',
    subtopicId: 'al-econ-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is MALIGN (demand-deficient) deflation especially dangerous for a heavily indebted economy?',
    options: [
      'It lowers the real value of household debts',
      'Consumers postpone spending expecting cheaper prices tomorrow AND the real burden of fixed nominal debts rises',
      'It boosts export prices immediately',
      'It eliminates structural unemployment',
    ],
    correctIndex: 1,
    explanation: 'Deferred consumption plus rising real debt burdens create a self-reinforcing deflationary spiral.',
  },

  // 5.2 (5)
  {
    id: 'alecon-q-5-2-1',
    subtopicId: 'al-econ-5-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How does Quantitative Easing (QE) directly work to stimulate a recessed economy?',
    options: [
      'The government slashes VAT on supermarket food',
      'The central bank creates electronic reserves to buy government bonds, raising bank liquidity and lowering long-term bond yields',
      'The central bank raises base interest rates to 10%',
      'Commercial banks freeze all mortgage lending',
    ],
    correctIndex: 1,
    explanation: 'Central bank bond purchases lower long-term yields, boost bank reserves, and lift asset prices to support lending and AD.',
  },
  {
    id: 'alecon-q-5-2-2',
    subtopicId: 'al-econ-5-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the fiscal deficit concepts:',
    segments: ['A budget deficit that remains even when the economy is at full employment is a ', ' deficit; heavy state borrowing pushing up interest rates and reducing private investment is financial ', ' out.'],
    wordBank: ['structural', 'crowding', 'cyclical', 'liquidity'],
    answers: ['structural', 'crowding'],
    explanation: 'Structural deficits require policy changes rather than waiting for recovery; borrowing can crowd out private investment.',
  },
  {
    id: 'alecon-q-5-2-3',
    subtopicId: 'al-econ-5-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each macroeconomic policy concept to its mechanism:',
    pairs: [
      { left: 'Automatic stabilisers', right: 'Progressive taxes fall and welfare spending rises automatically in recessions' },
      { left: 'Laffer curve', right: 'Beyond an optimal tax rate, further hikes reduce total tax revenue' },
      { left: 'Liquidity trap', right: 'Near-zero interest rates fail to revive borrowing due to low confidence' },
    ],
    explanation: 'Understanding these nuances separates A* A-Level essays from descriptive GCSE answers.',
  },
  {
    id: 'alecon-q-5-2-4',
    subtopicId: 'al-econ-5-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO macroeconomic criticisms or risks of Quantitative Easing (QE):',
    options: [
      'Inflates share and property prices, widening wealth inequality',
      'Risks fuelling inflation if kept loose once spare capacity disappears',
      'Directly increases progressive income tax rates on low earners',
      'Pushes government bond yields sharply upward',
    ],
    correctIndices: [0, 1],
    explanation: 'QE lifts asset wealth mainly for asset-owners and can trigger inflation when capacity tightens.',
  },
  {
    id: 'alecon-q-5-2-5',
    subtopicId: 'al-econ-5-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Distinguish a government BUDGET DEFICIT from the NATIONAL DEBT and explain ONE time lag affecting monetary policy.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A budget deficit is an annual flow where government spending exceeds tax revenue in one year, whereas national debt is the cumulative stock of all unpaid past government borrowing. Monetary policy suffers an 18-month implementation time lag because households on fixed-rate mortgages and firms with multi-year investment plans respond slowly to interest rate changes.',
      markPoints: [
        { id: 'mp1', markDescription: 'Distinguishes annual flow (budget deficit) from cumulative stock (national debt)', requiredKeywordGroups: [['flow', 'annual', 'one year', 'exceeds tax'], ['stock', 'cumulative', 'total', 'past borrowing']] },
        { id: 'mp2', markDescription: 'Explains 12-24 month time lag (fixed-rate mortgages / slow investment adjustment)', requiredKeywordGroups: [['time lag', 'month', 'slow'], ['mortgage', 'investment', 'interest rate']] },
      ],
    },
    explanation: 'Deficit = yearly flow; Debt = cumulative stock; monetary policy takes 12–24 months to work fully.',
  },

  // 5.3 (5)
  {
    id: 'alecon-q-5-3-1',
    subtopicId: 'al-econ-5-3',
    type: 'mcq',
    marks: 1,
    prompt: 'On a Lorenz curve, Area A (between the 45° equality line and the Lorenz curve) = 0.22 and Area B (under the Lorenz curve) = 0.28. What is the Gini Coefficient?',
    options: ['0.22', '0.44', '0.56', '0.78'],
    correctIndex: 1,
    explanation: 'Gini = A ÷ (A + B) = 0.22 ÷ (0.22 + 0.28) = 0.22 ÷ 0.50 = 0.44.',
  },
  {
    id: 'alecon-q-5-3-2',
    subtopicId: 'al-econ-5-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between a MARKET-BASED and an INTERVENTIONIST supply-side policy with ONE example of each.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Market-based supply-side policies reduce state barriers to boost private incentives, such as deregulation or cutting corporation tax. Interventionist supply-side policies use direct government investment to fix market failures and expand LRAS, such as state spending on STEM education, apprenticeships, or high-speed rail infrastructure.',
      markPoints: [
        { id: 'mp1', markDescription: 'Market-based reduces barriers/boosts private incentives (e.g. tax cuts, deregulation, privatisation)', requiredKeywordGroups: [['incentive', 'deregul', 'privatis', 'tax cut', 'corporation tax']] },
        { id: 'mp2', markDescription: 'Interventionist uses direct state spending on human capital/infrastructure (education, training, rail)', requiredKeywordGroups: [['government', 'state', 'spending', 'invest'], ['education', 'training', 'infrastructure', 'healthcare', 'r&d']] },
      ],
    },
    explanation: 'Market-based relies on private incentives; interventionist uses state investment to expand productive potential.',
  },
  {
    id: 'alecon-q-5-3-3',
    subtopicId: 'al-econ-5-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the inequality and poverty-trap rules:',
    segments: ['On a Lorenz curve, bowing further outward AWAY from the 45° line raises the ', ' coefficient closer to 1; when losing benefits plus paying income tax wipes out extra pay from working more hours, workers face a ', ' trap.'],
    wordBank: ['Gini', 'poverty', 'Phillips', 'liquidity'],
    answers: ['Gini', 'poverty'],
    explanation: 'Higher Gini (toward 1) = greater inequality; steep benefit withdrawal creates a poverty trap.',
  },
  {
    id: 'alecon-q-5-3-4',
    subtopicId: 'al-econ-5-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does state spending on national rail and green broadband shift BOTH AD and LRAS to the right?',
    options: [
      'It raises G immediately (shifting AD right) AND lowers business logistics costs long-term (shifting LRAS right)',
      'It lowers income tax and raises interest rates simultaneously',
      'It increases imports and reduces exports',
      'It only shifts SRAS left',
    ],
    correctIndex: 0,
    explanation: 'Infrastructure spending stimulates short-run demand via G while expanding long-run productive potential.',
  },
  {
    id: 'alecon-q-5-3-5',
    subtopicId: 'al-econ-5-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO policies that directly shift a country’s Lorenz curve INWARD toward the 45° line (reducing inequality):',
    options: [
      'Raising progressive higher-rate income tax and funding free state healthcare/education',
      'Introducing a targeted living minimum wage alongside universal childcare',
      'Replacing progressive income tax with a higher flat regressive VAT on basic food',
      'Abolishing all unemployment and disability welfare transfers',
    ],
    correctIndices: [0, 1],
    explanation: 'Progressive taxation, in-kind public services, and living wages reduce post-tax/transfer inequality.',
  },

  // 6.1 (5)
  {
    id: 'alecon-q-6-1-1',
    subtopicId: 'al-econ-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'According to the Marshall-Lerner condition, currency depreciation improves the current account balance when:',
    options: [
      '|PED exports| + |PED imports| < 1',
      '|PED exports| + |PED imports| > 1',
      'Terms of Trade equals zero',
      'Tariffs exceed 50%',
    ],
    correctIndex: 1,
    explanation: 'Combined price elasticity of exports and imports must exceed 1 so quantity gains outweigh price effects.',
  },
  {
    id: 'alecon-q-6-1-2',
    subtopicId: 'al-econ-6-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Country X can produce 60 cars OR 30 trucks; Country Y can produce 20 cars OR 20 trucks. Calculate each country’s opportunity cost of 1 truck (in cars) and state which country has comparative advantage in trucks.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'For Country X, 1 truck costs 2 cars (60 ÷ 30); for Country Y, 1 truck costs 1 car (20 ÷ 20). Because 1 < 2, Country Y has comparative advantage in trucks (and Country X in cars).',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates Country X opportunity cost = 2 cars (and Y = 1 car)', numericMatch: { value: 2, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Identifies Country Y has comparative advantage in trucks', requiredKeywordGroups: [['country y', 'y has'], ['truck']] },
      ],
    },
    explanation: 'Country Y sacrifices only 1 car per truck vs Country X’s 2 cars → Country Y has comparative advantage in trucks.',
  },
  {
    id: 'alecon-q-6-1-3',
    subtopicId: 'al-econ-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the J-curve and customs-union rules:',
    segments: ['In the short run after depreciation, fixed contracts make trade inelastic so the deficit initially worsens — known as the ', ' effect; shifting imports from a cheap global producer to a costlier customs-union member is trade ', '.'],
    wordBank: ['J-curve', 'diversion', 'creation', 'multiplier'],
    answers: ['J-curve', 'diversion'],
    explanation: 'Short-run inelasticity creates the J-curve dip; common external tariffs can trigger trade diversion.',
  },
  {
    id: 'alecon-q-6-1-4',
    subtopicId: 'al-econ-6-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each tariff diagram area to its economic meaning:',
    pairs: [
      { left: 'Rectangle t × (Q₃ − Q₂)', right: 'Government tariff tax revenue' },
      { left: 'Left deadweight triangle (Q₁ to Q₂)', right: 'Domestic production inefficiency welfare loss' },
      { left: 'Right deadweight triangle (Q₃ to Q₄)', right: 'Consumer utility loss from higher tariff price' },
    ],
    explanation: 'Both deadweight loss triangles represent net global welfare lost to protectionist distortion.',
  },
  {
    id: 'alecon-q-6-1-5',
    subtopicId: 'al-econ-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'If a country’s Export Price Index rises to 114 while its Import Price Index stands at 100, what is its Terms of Trade index?',
    options: ['87.7', '100', '114', '214'],
    correctIndex: 2,
    explanation: 'Terms of Trade = (114 ÷ 100) × 100 = 114 (an improvement — each export buys 14% more imports).',
  },
];

export const ALEVEL_ECON_UNITS_4_6_FLASHCARDS: FlashcardItem[] = [
  // 4.1 (5)
  { id: 'alecon-fc-4-1-1', subtopicId: 'al-econ-4-1', front: 'List all 3 Injections (J) and 3 Withdrawals (W) in an open circular flow.', backBullets: ['Injections (J): Investment (I) + Government spending (G) + Exports (X).', 'Withdrawals (W): Savings (S) + Taxation (T) + Imports (M).'] },
  { id: 'alecon-fc-4-1-2', subtopicId: 'al-econ-4-1', front: 'Write the open-economy Keynesian Multiplier formula.', backBullets: ['k = 1 ÷ MPW = 1 ÷ (MPS + MPT + MPM) = 1 ÷ (1 − MPCd).', 'Final GDP change ΔY = k × ΔJ.'] },
  { id: 'alecon-fc-4-1-3', subtopicId: 'al-econ-4-1', front: 'Contrast a Negative Output Gap with a Positive Output Gap.', backBullets: ['Negative: actual GDP < trend potential (spare capacity, cyclical unemployment).', 'Positive: actual GDP > trend potential (overheating boom, demand-pull inflation).'], diagram: 'business-cycle' },
  { id: 'alecon-fc-4-1-4', subtopicId: 'al-econ-4-1', front: 'Distinguish Income (flow) from Wealth (stock).', backBullets: ['Income: flow of earnings per time period (salary, rent, interest).', 'Wealth: stock of net assets owned at a point in time (property, equities, savings).'] },
  { id: 'alecon-fc-4-1-5', subtopicId: 'al-econ-4-1', front: 'Give 4 limitations of Real GDP per head as a measure of national living standards.', backBullets: ['Ignores income inequality, informal/unrecorded markets, environmental degradation, and leisure/working hours.'] },

  // 4.2 (5)
  { id: 'alecon-fc-4-2-1', subtopicId: 'al-econ-4-2', front: 'Give 3 reasons why the Aggregate Demand (AD) curve slopes downward.', backBullets: ['Real wealth effect, international trade competitiveness effect, and central-bank interest-rate effect.'] },
  { id: 'alecon-fc-4-2-2', subtopicId: 'al-econ-4-2', front: 'Explain the Accelerator Effect on investment (I).', backBullets: ['Net capital investment rises/falls disproportionately in response to changes in the RATE OF GROWTH of real GDP.'] },
  { id: 'alecon-fc-4-2-3', subtopicId: 'al-econ-4-2', front: 'What shifts SRAS left and what macro problem does it create?', backBullets: ['Rising wages, energy/commodity prices, indirect taxes, or weaker exchange rates.', 'Creates STAGFLATION: simultaneous cost-push inflation and falling real GDP.'] },
  { id: 'alecon-fc-4-2-4', subtopicId: 'al-econ-4-2', front: 'Contrast Keynesian LRAS with Classical vertical LRAS.', backBullets: ['Classical: vertical at Yfe — boosting AD only causes long-run inflation.', 'Keynesian: flat spare-capacity zone → curved bottlenecks → vertical Yfe.'], diagram: 'ad-as-macro' },
  { id: 'alecon-fc-4-2-5', subtopicId: 'al-econ-4-2', front: 'What shifts LRAS to the right in BOTH Keynesian and Classical models?', backBullets: ['Greater quantity or quality of factors of production: technology, education/skills, capital investment, and enterprise efficiency.'] },

  // 5.1 (5)
  { id: 'alecon-fc-5-1-1', subtopicId: 'al-econ-5-1', front: 'State Fisher’s Quantity Theory of Money equation and monetarist conclusion.', backBullets: ['M × V = P × Q.', 'If V and Q are stable, money-supply growth (M ↑) directly drives proportional inflation (P ↑).'] },
  { id: 'alecon-fc-5-1-2', subtopicId: 'al-econ-5-1', front: 'Contrast Benign Deflation with Malign Deflation.', backBullets: ['Benign: AS shifts right (productivity/tech gains) → lower prices + higher output.', 'Malign: AD collapses → deferred spending, higher real debt burdens, rising unemployment.'] },
  { id: 'alecon-fc-5-1-3', subtopicId: 'al-econ-5-1', front: 'Define NAIRU (Natural Rate of Unemployment) and Hysteresis.', backBullets: ['NAIRU: equilibrium unemployment (frictional + structural) with stable inflation.', 'Hysteresis: prolonged cyclical unemployment erodes skills, permanently raising NAIRU.'] },
  { id: 'alecon-fc-5-1-4', subtopicId: 'al-econ-5-1', front: 'Explain Friedman’s vertical Long-Run Phillips Curve (LRPC).', backBullets: ['AD stimulus cuts unemployment only briefly along SRPC; adaptive inflation expectations push wages up, shifting SRPC outward back to NRU at higher inflation.'] },
  { id: 'alecon-fc-5-1-5', subtopicId: 'al-econ-5-1', front: 'How can a government shift the Long-Run Phillips Curve (LRPC) to the LEFT?', backBullets: ['Supply-side labour reforms: worker retraining, childcare support, job-matching portals, and geographical mobility incentives.'] },

  // 5.2 (5)
  { id: 'alecon-fc-5-2-1', subtopicId: 'al-econ-5-2', front: 'Contrast a Cyclical Budget Deficit with a Structural Budget Deficit.', backBullets: ['Cyclical: temporary recession-induced gap that vanishes as GDP recovers.', 'Structural: persistent deficit even at full-employment boom GDP.'] },
  { id: 'alecon-fc-5-2-2', subtopicId: 'al-econ-5-2', front: 'Explain Financial Crowding Out and the Laffer Curve.', backBullets: ['Crowding out: heavy state borrowing lifts market interest rates, deterring private investment.', 'Laffer curve: raising tax rates beyond optimal T* shrinks total tax revenue via disincentives/avoidance.'] },
  { id: 'alecon-fc-5-2-3', subtopicId: 'al-econ-5-2', front: 'How does Quantitative Easing (QE) stimulate Aggregate Demand?', backBullets: ['Central bank creates electronic reserves to buy government bonds → lowers bond yields, expands bank liquidity, lifts asset prices (wealth effect).'] },
  { id: 'alecon-fc-5-2-4', subtopicId: 'al-econ-5-2', front: 'Define a Liquidity Trap.', backBullets: ['Interest rates sit near zero yet weak confidence causes households and banks to hoard cash rather than borrow and invest.'] },
  { id: 'alecon-fc-5-2-5', subtopicId: 'al-econ-5-2', front: 'List 3 channels in the Monetary Policy Transmission Mechanism.', backBullets: ['Borrowing/mortgage cost channel (C & I), asset wealth effect, and exchange-rate hot-money channel (X − M).'] },

  // 5.3 (5)
  { id: 'alecon-fc-5-3-1', subtopicId: 'al-econ-5-3', front: 'Contrast Market-Based vs Interventionist Supply-Side Policies.', backBullets: ['Market-based: tax cuts, deregulation, privatisation (cheaper fiscally, risks higher inequality).', 'Interventionist: state education, healthcare, infrastructure (raises growth & equity, costly with long lags).'] },
  { id: 'alecon-fc-5-3-2', subtopicId: 'al-econ-5-3', front: 'Write the Gini Coefficient equation from a Lorenz Curve.', backBullets: ['Gini = Area A ÷ (Area A + Area B).', '0 = perfect equality (45° line); 1 = complete inequality.'] },
  { id: 'alecon-fc-5-3-3', subtopicId: 'al-econ-5-3', front: 'Distinguish Equality from Equity in economics.', backBullets: ['Equality: identical income/wealth distribution.', 'Equity: normative fairness (equal opportunity and shielding vulnerable households from poverty).'] },
  { id: 'alecon-fc-5-3-4', subtopicId: 'al-econ-5-3', front: 'What is the Poverty Trap?', backBullets: ['When higher income taxes combined with withdrawn means-tested benefits leave low-paid workers with little net gain from working extra hours.'] },
  { id: 'alecon-fc-5-3-5', subtopicId: 'al-econ-5-3', front: 'Why can extreme inequality harm long-run economic growth?', backBullets: ['Poorer households have a higher MPC than rich households, so extreme concentration dampens consumption, human-capital education, and social stability.'] },

  // 6.1 (5)
  { id: 'alecon-fc-6-1-1', subtopicId: 'al-econ-6-1', front: 'State the law of Comparative Advantage and Terms of Trade equation.', backBullets: ['Specialise in the good with the LOWEST domestic opportunity cost.', 'Terms of Trade = (Export Price Index ÷ Import Price Index) × 100.'] },
  { id: 'alecon-fc-6-1-2', subtopicId: 'al-econ-6-1', front: 'Identify the two Deadweight Loss triangles on a Tariff Diagram.', backBullets: ['Production inefficiency triangle (higher-cost domestic output Q₁→Q₂) + Consumption loss triangle (consumers priced out Q₃→Q₄).'] },
  { id: 'alecon-fc-6-1-3', subtopicId: 'al-econ-6-1', front: 'Contrast Trade Creation with Trade Diversion in a Customs Union.', backBullets: ['Trade creation: switching to lower-cost partner inside the bloc (welfare gain).', 'Trade diversion: switching from cheaper non-member to costlier bloc member due to common external tariff.'] },
  { id: 'alecon-fc-6-1-4', subtopicId: 'al-econ-6-1', front: 'State the Marshall-Lerner condition precisely.', backBullets: ['Currency depreciation improves the current account strictly when |PED exports| + |PED imports| > 1.'] },
  { id: 'alecon-fc-6-1-5', subtopicId: 'al-econ-6-1', front: 'Explain the J-Curve effect after a currency depreciation.', backBullets: ['Short run: inelastic trade contracts worsen the deficit first; Long run: buyers switch suppliers so |PEDx| + |PEDm| > 1 and the deficit narrows.'] },
];

export const ALEVEL_ECON_UNITS_4_6_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'alecon-exam-4-1',
    subtopicId: 'al-econ-4-1',
    number: 11,
    stimulus: '[CIE 9708 / AQA 7136 Data Response] Country M suffers a negative output gap with MPS = 0.15, MPT = 0.10, and MPM = 0.25. The Finance Minister proposes a $20bn green-grid investment injection.',
    diagram: 'business-cycle',
    parts: [
      {
        id: 'alecon-exam-4-1a',
        label: '(a)',
        prompt: 'Calculate the open-economy multiplier and forecast GDP rise, then evaluate ONE factor that could limit the real-output expansion.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'MPW = 0.15 + 0.10 + 0.25 = 0.50, so multiplier k = 1 ÷ 0.50 = 2.0 and forecast GDP increases by 2.0 × $20bn = $40bn. However, if skilled grid engineers are scarce (capacity bottlenecks) or if heavy borrowing crowds out private investment via higher interest rates, part of the $40bn injection leaks into inflation rather than real output. Overall, because Country M currently has a negative output gap, real GDP should rise strongly if import leakages are contained.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates multiplier k = 2.0', numericMatch: { value: 2, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'Calculates forecast GDP rise = $40bn', numericMatch: { value: 40, tolerance: 0.2 } },
            { id: 'mp3', markDescription: 'Evaluates bottleneck/inflation, crowding out, or high MPM import leakage', requiredKeywordGroups: [['bottleneck', 'capacity', 'inflation', 'crowding out', 'import']] },
            { id: 'mp4', markDescription: 'Links judgement to existing negative output gap', requiredKeywordGroups: [['negative output gap', 'spare capacity', 'overall', 'depend']] },
          ],
        },
      },
    ],
  },
  {
    id: 'alecon-exam-4-2',
    subtopicId: 'al-econ-4-2',
    number: 12,
    stimulus: '[CIE 9708 / AQA 7136 Data Response] Following an international energy crisis, Country K experiences 9% CPI inflation alongside a −0.8% contraction in real GDP and rising unemployment.',
    diagram: 'ad-as-macro',
    parts: [
      {
        id: 'alecon-exam-4-2a',
        label: '(a)',
        prompt: 'Using AD/AS analysis, explain this stagflation shock and evaluate why demand-side policies alone struggle to resolve it.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Higher energy prices raise firms’ unit costs and shift SRAS to the left, pushing the price level up to 9% while contracting real GDP by −0.8% (stagflation). Demand-side tools face a sharp conflict: contractionary monetary policy (higher interest rates) lowers inflation by cutting AD but deepens the recession and unemployment, whereas expansionary fiscal stimulus boosts GDP but worsens inflation further. Therefore, pairing short-run targeted support with long-run supply-side energy investment to shift LRAS right is required.',
          markPoints: [
            { id: 'mp1', markDescription: 'SRAS shifts left causing stagflation (higher price level + lower GDP)', requiredKeywordGroups: [['sras'], ['left', 'stagflation']] },
            { id: 'mp2', markDescription: 'Contractionary AD cuts inflation but worsens recession/unemployment', requiredKeywordGroups: [['interest rate', 'contractionary', 'cut ad'], ['unemployment', 'recession', 'gdp']] },
            { id: 'mp3', markDescription: 'Expansionary AD supports jobs/GDP but worsens inflation', requiredKeywordGroups: [['expansionary', 'stimulus'], ['inflation']] },
            { id: 'mp4', markDescription: 'Recommends supply-side policy to shift LRAS/SRAS rightward', requiredKeywordGroups: [['supply-side', 'lras', 'right']] },
          ],
        },
      },
    ],
  },
  {
    id: 'alecon-exam-5-1',
    subtopicId: 'al-econ-5-1',
    number: 13,
    stimulus: '[CIE 9708 / AQA 7136 Essay] Unemployment stands at its Natural Rate (4.5%) with inflation steady at 2.0%. A newly elected government promises massive tax cuts and deficit spending to force unemployment permanently down to 2.5%.',
    parts: [
      {
        id: 'alecon-exam-5-1a',
        label: '(a)',
        prompt: 'Using the Short-Run and Long-Run Phillips Curve (SRPC & LRPC), evaluate whether the government can permanently hold unemployment at 2.5%.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'In the short run, expansionary fiscal policy boosts AD and moves the economy up-left along SRPC, temporarily reducing unemployment toward 2.5% at the cost of higher inflation. However, according to Friedman’s expectations-augmented LRPC, workers adjust inflation expectations upward and demand higher nominal wages to restore real pay, shifting SRPC outward so unemployment returns to the 4.5% Natural Rate on the vertical LRPC with permanently higher inflation. Permanently reaching 2.5% requires supply-side labour reforms that shift LRPC itself to the left.',
          markPoints: [
            { id: 'mp1', markDescription: 'Short-run movement up-left along SRPC (lower unemployment, higher inflation)', requiredKeywordGroups: [['short run', 'srpc'], ['unemployment', 'inflation']] },
            { id: 'mp2', markDescription: 'Adaptive inflation expectations raise wage demands shifting SRPC outward', requiredKeywordGroups: [['expectation', 'wage'], ['shift', 'srpc', 'outward']] },
            { id: 'mp3', markDescription: 'Long-run unemployment returns to vertical LRPC at NRU (4.5%) with higher inflation', requiredKeywordGroups: [['vertical', 'lrpc', 'natural rate', '4.5'], ['higher inflation']] },
            { id: 'mp4', markDescription: 'Evaluates need for supply-side reforms to shift LRPC left', requiredKeywordGroups: [['supply-side', 'retrain', 'shift lrpc left', 'lrpc']] },
          ],
        },
      },
    ],
  },
  {
    id: 'alecon-exam-5-2',
    subtopicId: 'al-econ-5-2',
    number: 14,
    stimulus: '[CIE 9708 / AQA 7136 Data Response] After base interest rates hit 0.1% during a severe recession, a central bank launches $300bn of Quantitative Easing (QE) while consumer and business confidence remains depressed.',
    parts: [
      {
        id: 'alecon-exam-5-2a',
        label: '(a)',
        prompt: 'Explain how QE is intended to revive Aggregate Demand and evaluate TWO reasons why it may prove less effective than fiscal infrastructure stimulus.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Under QE, the central bank creates electronic reserves to buy government bonds, boosting commercial bank liquidity, lowering long-term bond yields, and lifting asset prices to stimulate consumption and investment. However, in a liquidity trap with depressed confidence, banks may hoard reserves and households refuse to borrow; furthermore, QE disproportionately inflates equities and house prices, widening wealth inequality rather than reaching lower-income consumers with a high MPC. Direct fiscal infrastructure spending injects G immediately into the real economy via the multiplier.',
          markPoints: [
            { id: 'mp1', markDescription: 'Explains QE mechanism: buys bonds with created reserves lowering yields/raising liquidity', requiredKeywordGroups: [['bond', 'asset'], ['liquidity', 'yield', 'reserve']] },
            { id: 'mp2', markDescription: 'Identifies liquidity trap / low confidence / banks hoarding reserves', requiredKeywordGroups: [['liquidity trap', 'confidence', 'hoard', 'reluctant']] },
            { id: 'mp3', markDescription: 'Identifies asset-price wealth inequality or low MPC of wealthy asset-holders', requiredKeywordGroups: [['inequality', 'wealth', 'asset price', 'mpc']] },
            { id: 'mp4', markDescription: 'Compares against direct fiscal spending injecting G immediately into real economy', requiredKeywordGroups: [['fiscal', 'infrastructure', 'direct', 'multiplier']] },
          ],
        },
      },
    ],
  },
  {
    id: 'alecon-exam-5-3',
    subtopicId: 'al-econ-5-3',
    number: 15,
    stimulus: '[CIE 9708 / AQA 7136 Data Response] Over a decade of market-based tax cuts and deregulation, Country P’s annual GDP growth accelerated to 3.4%, while its Gini coefficient rose from 0.31 to 0.43.',
    parts: [
      {
        id: 'alecon-exam-5-3a',
        label: '(a)',
        prompt: 'Interpret the rise in the Gini coefficient and evaluate how interventionist supply-side policies could achieve more inclusive growth.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The rise in the Gini coefficient from 0.31 to 0.43 shows income inequality widened substantially as the Lorenz curve bowed further away from the 45° equality line. Interventionist supply-side policies — such as funding free technical apprenticeships, regional transport, and universal healthcare — lift low-income workers’ human capital and earnings while shifting LRAS right for non-inflationary growth. However, they carry heavy fiscal costs, opportunity costs, and 5–10 year time lags before improving inequality and productivity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Interprets 0.31 → 0.43 as widening inequality / Lorenz curve bowing outward', requiredKeywordGroups: [['inequality'], ['wider', 'widen', 'increas', 'lorenz', 'bow']] },
            { id: 'mp2', markDescription: 'Explains interventionist supply-side tools (education/training/healthcare/infrastructure) boosting LRAS & wages', requiredKeywordGroups: [['education', 'apprenticeship', 'training', 'healthcare', 'infrastructure'], ['lras', 'human capital', 'productivity', 'earning']] },
            { id: 'mp3', markDescription: 'Evaluates fiscal cost, opportunity cost, and long time lags', requiredKeywordGroups: [['cost', 'fiscal', 'opportunity cost', 'time lag', 'years']] },
            { id: 'mp4', markDescription: 'Balanced link between equity and non-inflationary growth', requiredKeywordGroups: [['equity', 'inclusive', 'non-inflationary', 'growth']] },
          ],
        },
      },
    ],
  },
  {
    id: 'alecon-exam-6-1',
    subtopicId: 'al-econ-6-1',
    number: 16,
    stimulus: '[CIE 9708 / AQA 7136 Data Response] Country R runs a current account deficit equal to 6% of GDP. Economists estimate |PED exports| = 0.75 and |PED imports| = 0.65 in the long run, but only 0.30 and 0.25 in the first 6 months. The central bank lets the currency depreciate by 15%.',
    parts: [
      {
        id: 'alecon-exam-6-1a',
        label: '(a)',
        prompt: 'Apply the Marshall-Lerner condition and J-curve to evaluate whether the 15% depreciation will cure Country R’s current account deficit.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'In the first 6 months, |PEDx| + |PEDm| = 0.30 + 0.25 = 0.55 (< 1), so the Marshall-Lerner condition fails and the current account deficit initially WORSENS (the downward dip of the J-curve) because fixed trade contracts keep import bills high. In the long run, |PEDx| + |PEDm| = 0.75 + 0.65 = 1.40 (> 1), so Marshall-Lerner holds and cheaper exports plus reduced imports narrow the deficit. However, imported cost-push inflation or foreign recession could erode the price advantage unless backed by supply-side competitiveness reforms.',
          markPoints: [
            { id: 'mp1', markDescription: 'Short-run sum = 0.55 (< 1) → deficit worsens initially (J-curve dip)', numericMatch: { value: 0.55, tolerance: 0.02 } },
            { id: 'mp2', markDescription: 'Long-run sum = 1.40 (> 1) → Marshall-Lerner holds, deficit improves', numericMatch: { value: 1.4, tolerance: 0.02 } },
            { id: 'mp3', markDescription: 'Explains J-curve mechanism (fixed short-run contracts then switching suppliers)', requiredKeywordGroups: [['j-curve', 'short run', 'contract'], ['worsen', 'improve', 'long run']] },
            { id: 'mp4', markDescription: 'Evaluates imported cost-push inflation or foreign growth / supply-side caveat', requiredKeywordGroups: [['inflation', 'cost-push', 'supply-side', 'recession', 'competitiv']] },
          ],
        },
      },
    ],
  },
];
