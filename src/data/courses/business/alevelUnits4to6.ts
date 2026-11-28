import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_BUSINESS_TOPICS_4_TO_6: TopicDefinition[] = [
  {
    number: 4,
    title: 'Operations Strategy, Critical Path & Quality',
    subtopics: [
      {
        id: 'al-bus-4-1',
        code: '4.1',
        slug: '4.1-capacity-utilisation-inventory-lean-operations',
        title: 'Capacity Utilisation, Inventory Control Charts & Lean Operations',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-4-2',
        code: '4.2',
        slug: '4.2-contribution-costing-breakeven-cpa',
        title: 'Contribution Costing, Special Orders, Break-Even & Critical Path Analysis (CPA)',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-4-3',
        code: '4.3',
        slug: '4.3-tqm-benchmarking-erp-supply-chain',
        title: 'Quality Management (TQM, Benchmarking), ERP & Global Supply-Chain Location',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 5,
    title: 'Corporate Finance, Ratio Analysis & Investment Appraisal',
    subtopics: [
      {
        id: 'al-bus-5-1',
        code: '5.1',
        slug: '5.1-budgeting-variance-analysis-cash-flow',
        title: 'Budgeting, Favourable vs Adverse Variance Analysis & Cash-Flow Management',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-5-2',
        code: '5.2',
        slug: '5.2-financial-statements-depreciation-advanced-ratios',
        title: 'Financial Statements, Depreciation & Advanced Ratio Analysis (Gearing, ROCE, Efficiency)',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-5-3',
        code: '5.3',
        slug: '5.3-investment-appraisal-payback-arr-npv-decision-trees',
        title: 'Investment Appraisal (Payback, ARR, Discounted Cash Flow / NPV) & Decision Trees',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'External Environment, Economic Policy & Global Strategy',
    subtopics: [
      {
        id: 'al-bus-6-1',
        code: '6.1',
        slug: '6.1-macroeconomic-policy-exchange-rates-csr-change-management',
        title: 'Macroeconomic Policy, Exchange Rates, Business Ethics, CSR & Managing Strategic Change',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_BUSINESS_NOTES_4_TO_6: Record<string, NoteLesson> = {
  'al-bus-4-1': {
    subtopicId: 'al-bus-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Capacity Utilisation, Inventory Control Charts & Lean Operations',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 4.1: Production of goods and services',
    youtubeId: 'WsYcHjQ8pIM',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:18',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 Operations',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Capacity Utilisation & Rationalisation vs Outsourcing', cardId: 'al-bus-4-1-c1' },
      { time: '4:40', seconds: 280, label: 'Inventory Control Charts, Buffer Stock & Lead Time', cardId: 'al-bus-4-1-c2' },
      { time: '9:15', seconds: 555, label: 'Lean Production: JIT, Kaizen & Cell Production', cardId: 'al-bus-4-1-c3' },
    ],
    cards: [
      {
        id: 'al-bus-4-1-c1',
        title: 'Capacity Utilisation, Spare Capacity & Capacity Shortage',
        summary: 'Operating near 85–90% spreads fixed costs efficiently while preserving room for maintenance and rush orders.',
        bullets: [
          '**Capacity utilisation (%)** = `(Current output ÷ Maximum possible output) × 100`. High utilisation spreads fixed factory overheads across more units, driving down **average fixed cost (AFC)**.',
          '**Operating at 100% capacity** leaves zero room for urgent orders or preventative machine maintenance, causing breakdowns, overtime fatigue, and rising defect rates.',
        ],
        subsections: [
          {
            heading: 'Managing Under-Utilisation vs Over-Utilisation',
            bullets: [
              '**Spare capacity remedies** - **rationalisation** (closing underused plants to cut fixed costs), sub-contracting unused capacity to other brands, or promotional price cuts to lift sales volume.',
              '**Capacity shortage remedies** - **outsourcing/sub-contracting** production to external suppliers, adding night shifts, or capital investment in extra production lines.',
            ],
            exampleHeading: 'Worked calculation: Factory capacity utilisation',
            examples: [
              'A bottling plant has maximum capacity of 250,000 bottles/week and produces 195,000 bottles/week.',
              'Capacity utilisation = (195,000 ÷ 250,000) × 100 = **78%**, leaving **55,000 bottles/week (22%)** of spare capacity.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'capacity utilisation', definition: 'The proportion of a firm’s maximum productive capacity currently being used, expressed as a percentage.' },
        ],
      },
      {
        id: 'al-bus-4-1-c2',
        title: 'Inventory Control Charts: Buffer Stock, Re-order Level & Lead Time',
        summary: 'Balancing inventory holding costs (storage, obsolescence, tied-up cash) against stock-out costs (lost sales and halted lines).',
        bullets: [
          '**Buffer inventory** is the minimum safety stock held to absorb sudden demand spikes or late supplier deliveries without halting operations.',
          '**Re-order level** = `Buffer inventory + (Daily usage × Lead time in days)`, triggering a fresh replenishment order before inventory dips into buffer stock.',
        ],
        subsections: [
          {
            heading: 'Costs of Too Much vs Too Little Inventory',
            bullets: [
              '**Excess stock costs** - warehouse rent, insurance, pilferage, spoilage/obsolescence, and **opportunity cost** of cash tied up in working capital.',
              '**Stock-out costs** - idle machinery, missed customer orders, emergency air-freight surcharges, and permanent loss of brand trust.',
            ],
            exampleHeading: 'Worked calculation: Re-order level with supplier lead time',
            examples: [
              'An electronics assembler uses 400 microchips/day, keeps a buffer inventory of 1,200 chips, and faces a 5-day supplier lead time.',
              'Re-order level = 1,200 + (400 × 5) = **3,200 microchips**; when stock falls to 3,200, a new order is placed so it arrives right as stock reaches 1,200.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'buffer inventory', definition: 'Minimum safety stock retained to prevent production stoppages during unexpected demand surges or supplier delays.' },
          { term: 'lead time', definition: 'Time elapsed between placing a replenishment order with a supplier and receiving the delivery.' },
        ],
      },
      {
        id: 'al-bus-4-1-c3',
        title: 'Lean Production: JIT, Kaizen, Cell Production & Time-Based Management',
        summary: 'Eliminating every form of waste (time, defects, excess inventory, movement) to cut unit costs and accelerate market response.',
        bullets: [
          '**Just-in-Time (JIT)** eliminates buffer inventory by scheduling deliveries right onto the production line; it demands ultra-reliable suppliers, accurate IT demand forecasting, and zero-defect parts.',
          '**Kaizen (continuous improvement)** empowers shop-floor teams in **cell production** (self-contained U-shaped multi-skilled teams) to suggest small daily efficiency gains, cutting defects and lifting morale.',
        ],
        subsections: [
          {
            heading: 'Evaluating Lean Operations in A-Level Case Studies',
            bullets: [
              '**JIT vulnerability** - global supply shocks (port congestion, semiconductor shortages) expose firms with zero buffer stock to immediate factory shutdowns, pushing many manufacturers toward **Just-in-Case (JIC)** hybrid resilience.',
              '**Simultaneous engineering** - overlapping product design, testing, and production tooling slashes time-to-market for fast-moving tech and fashion firms.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cell production', definition: 'Organising factory workers into multi-skilled self-contained teams responsible for completing a whole unit or sub-assembly.' },
        ],
        memoryAid: 'Re-order Level = Buffer + (Daily Usage × Lead Time) — order BEFORE stock hits the safety floor!',
        commonMistake: 'Students assume 100% capacity utilisation is always optimal. In A-Level evaluation, 100% leaves zero slack for urgent high-margin orders or preventative maintenance — 85–90% is usually healthier.',
      },
    ],
    keyTerms: [
      { term: 'Capacity utilisation', definition: '(Current output ÷ Maximum possible output) × 100.' },
      { term: 'Rationalisation', definition: 'Cutting excess capacity by closing plants or reducing workforce to lower fixed overheads.' },
      { term: 'Buffer inventory', definition: 'Safety stock held to cover unexpected demand surges or late deliveries.' },
      { term: 'Simultaneous engineering', definition: 'Developing a product and its manufacturing process concurrently to shorten time-to-market.' },
    ],
    checklistPoints: [
      'Calculate capacity utilisation and evaluate remedies for spare capacity vs capacity shortages.',
      'Calculate re-order levels from daily usage, lead time, and buffer inventory.',
      'Critically evaluate JIT, Kaizen, and cell production under supply-chain disruption risk.',
    ],
  },

  'al-bus-4-2': {
    subtopicId: 'al-bus-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Contribution Costing, Special Orders, Break-Even & Critical Path Analysis (CPA)',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 4.2: Costs, scale of production and break-even analysis',
    youtubeId: 'cyUjpE5k1iw',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '16:40',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 Costing & CPA',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Contribution Costing & Special Order Decisions', cardId: 'al-bus-4-2-c1' },
      { time: '5:20', seconds: 320, label: 'Break-Even Charts, Margin of Safety & Limitations', cardId: 'al-bus-4-2-c2' },
      { time: '10:45', seconds: 645, label: 'Critical Path Analysis (EST, LFT & Total Float)', cardId: 'al-bus-4-2-c3' },
    ],
    cards: [
      {
        id: 'al-bus-4-2-c1',
        title: 'Contribution Costing, Full Costing & Special Order Acceptance',
        summary: 'Contribution per unit (P − VC) pays off fixed costs first; any surplus becomes profit, guiding special-order pricing.',
        bullets: [
          '**Unit contribution** = `Selling price − Direct variable cost per unit`. **Total contribution** = `Unit contribution × Output`, and **Profit** = `Total contribution − Fixed costs`.',
          '**Special order rule**: if a firm has **spare capacity**, accepting a discounted one-off order is financially worthwhile whenever the offer price exceeds **variable cost per unit** (positive contribution), provided existing full-price customers will not demand matching discounts.',
        ],
        subsections: [
          {
            heading: 'Contribution vs Full (Absorption) Costing',
            bullets: [
              '**Full costing** allocates fixed overheads across all products (useful for single-product pricing, but arbitrary overhead splits can wrongly make a profitable product look loss-making).',
              '**Contribution costing** isolates variable costs so managers never discontinue a product that contributes positively toward fixed overheads.',
            ],
            exampleHeading: 'Worked calculation: Special order with spare capacity',
            examples: [
              'A jacket maker normally sells coats for £90 (variable cost £42, fixed overhead £28/unit = £70 full cost). A foreign hotel chain offers £55 each for 500 coats using spare factory capacity.',
              'Unit contribution = £55 − £42 = **+£13/coat** → Total extra profit = 500 × £13 = **+£6,500**, because fixed overheads are already paid!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'contribution costing', definition: 'Costing method assigning only direct variable costs to output and treating fixed costs as period overheads.' },
        ],
      },
      {
        id: 'al-bus-4-2-c2',
        title: 'Break-Even Output, Target Profit & Margin of Safety',
        summary: 'Visualising the minimum volume needed to break even and testing sensitivity to price or cost shifts.',
        bullets: [
          '**Break-even output** = `Fixed Costs ÷ Unit Contribution`; **Output for Target Profit** = `(Fixed Costs + Target Profit) ÷ Unit Contribution`.',
          '**Margin of safety** = `Current/Forecast output − Break-even output`, measuring how far sales can drop before losses begin.',
        ],
        subsections: [
          {
            heading: 'A-Level Limitations of Break-Even Analysis',
            bullets: [
              'Assumes **all output produced is sold** (zero unsold inventory) and that selling price and variable cost per unit stay **linear** (ignoring bulk-buying discounts or price cuts needed to sell higher volume).',
              'Multi-product firms cannot draw a single break-even chart without assuming a constant sales mix.',
            ],
            exampleHeading: 'Worked calculation: Target profit output',
            examples: [
              'Fixed costs = £45,000, Selling price = £35, Variable cost = £20 (Unit contribution = £15).',
              'Break-even = £45,000 ÷ £15 = **3,000 units**. To achieve a **£15,000 target profit**, output required = (£45,000 + £15,000) ÷ £15 = **4,000 units**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'margin of safety', definition: 'The amount by which actual or forecast sales exceed the break-even level of output.' },
        ],
        diagram: 'break-even-chart',
      },
      {
        id: 'al-bus-4-2-c3',
        title: 'Critical Path Analysis (CPA): EST, LFT & Float Calculations',
        summary: 'Network diagrams schedule complex multi-task projects in the shortest total duration and identify zero-float bottleneck tasks.',
        bullets: [
          '**Forward pass (EST — Earliest Start Time)**: move left to right adding task durations; where two paths converge at a node, take the **HIGHEST** total.',
          '**Backward pass (LFT — Latest Finish Time)**: move right to left subtracting durations from the minimum project duration; where two paths diverge backward, take the **LOWEST** value.',
          '**Critical activities** have **Total Float = 0** (`LFT − Duration − EST = 0`). Any delay on the critical path delays the entire project, whereas **non-critical activities** possess positive float allowing resource reallocation.',
        ],
        subsections: [
          {
            heading: 'Evaluating Critical Path Analysis',
            bullets: [
              '**Benefits** - improves cash-flow scheduling (ordering materials JIT for specific nodes), identifies parallel activities to compress project duration, and pinpoints critical tasks needing tight supervision.',
              '**Limitations** - relies on **estimated durations** that can be disrupted by weather, strikes, or supplier failure; complex networks require costly specialist software and skilled project managers.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'critical path', definition: 'The longest sequence of dependent activities through a project network with zero float, determining minimum project duration.' },
          { term: 'total float', definition: 'The maximum time a non-critical activity can be delayed without delaying the overall project finish date (LFT − Duration − EST).' },
        ],
        memoryAid: 'CPA Passes: Forward = HIGHEST (EST); Backward = LOWEST (LFT); Float = LFT − Duration − EST!',
        commonMistake: 'Students often reject a special order priced below full absorption cost. If spare capacity exists and Price > Variable Cost, positive contribution STILL increases total profit!',
      },
    ],
    keyTerms: [
      { term: 'Unit contribution', definition: 'Selling price minus direct variable cost per unit.' },
      { term: 'Margin of safety', definition: 'Forecast or actual sales minus break-even output.' },
      { term: 'Critical path', definition: 'Sequence of zero-float activities determining the minimum project completion time.' },
      { term: 'Total float', definition: 'LFT − Duration − EST; spare time available on a non-critical task.' },
    ],
    checklistPoints: [
      'Evaluate special-order acceptance quantitatively using contribution costing and qualitative brand risks.',
      'Calculate break-even output, target profit volume, and margin of safety while critiquing linear assumptions.',
      'Compute EST, LFT, critical path, and total float on a CPA network diagram.',
    ],
  },

  'al-bus-4-3': {
    subtopicId: 'al-bus-4-3',
    subtopicCode: '4.3',
    subtopicTitle: 'Quality Management (TQM, Benchmarking), ERP & Global Supply-Chain Location',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 4.3: Achieving quality production',
    youtubeId: '7kkUGZXZgZs',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:50',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 Quality & Supply Chain',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Quality Assurance, TQM & Quality Circles', cardId: 'al-bus-4-3-c1' },
      { time: '4:15', seconds: 255, label: 'Benchmarking & Enterprise Resource Planning (ERP)', cardId: 'al-bus-4-3-c2' },
      { time: '8:20', seconds: 500, label: 'Offshoring, Reshoring & Multi-Site Location Strategy', cardId: 'al-bus-4-3-c3' },
    ],
    cards: [
      {
        id: 'al-bus-4-3-c1',
        title: 'From Quality Control to Total Quality Management (TQM)',
        summary: 'Embedding zero-defect ownership across every department cuts rework waste and builds premium pricing power.',
        bullets: [
          '**Total Quality Management (TQM)** treats every employee and department as an **internal customer** responsible for checking quality before passing work to the next stage — aiming for **zero defects** rather than end-of-line inspection.',
          '**Quality circles** are voluntary small teams of shop-floor employees meeting regularly to diagnose root causes of defects and propose process fixes (linking directly to **Herzberg’s motivators**).',
        ],
        subsections: [
          {
            heading: 'Costs & Culture Requirements of TQM',
            bullets: [
              '**Benefits** - slashes warranty claims, scrap, and recall scandals; enhances brand equity allowing premium prices.',
              '**Drawbacks** - requires heavy upfront investment in staff training, cultural buy-in across all hierarchy tiers, and long-term board commitment rather than short-term cost-cutting.',
            ],
            exampleHeading: 'Worked example: Defect-cost savings from TQM',
            examples: [
              'An appliance manufacturer cuts its defect rate from 4.5% to 0.5% on 100,000 units/year where each faulty unit costs £35 to rework.',
              'Annual rework savings = 4,000 fewer defects × £35 = **£140,000/year** (quickly paying back a £60,000 staff TQM training budget).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Total Quality Management (TQM)', definition: 'Organisation-wide culture committing every employee and internal process to continuous zero-defect quality.' },
        ],
      },
      {
        id: 'al-bus-4-3-c2',
        title: 'Benchmarking & Enterprise Resource Planning (ERP)',
        summary: 'Measuring processes against industry leaders and unifying finance, inventory, HR, and production in real-time software.',
        bullets: [
          '**Benchmarking** compares a business’s KPIs (delivery speed, defect rates, unit cost) against the best-in-class rival or cross-industry leader to close performance gaps.',
          '**Enterprise Resource Planning (ERP)** integrates sales orders, purchasing, inventory control, scheduling, and accounting on one shared database, eliminating departmental data silos.',
        ],
        subsections: [
          {
            heading: 'Evaluating Benchmarking & ERP Adoption',
            bullets: [
              '**Benchmarking limits** - copying yesterday’s industry leader only achieves parity, not breakthrough innovation, and rivals rarely share sensitive proprietary data.',
              '**ERP trade-offs** - boosts supply-chain visibility and cuts inventory holding costs, yet software licensing, data migration, and staff retraining are expensive and disruptive.',
            ],
            exampleHeading: 'Concrete case: ERP & real-time retail replenishment',
            examples: [
              'When a fashion chain links point-of-sale tills to an ERP system, selling 1,000 coats in London automatically triggers fabric re-orders and shifts stock from slower regional depots within hours.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'benchmarking', definition: 'Identifying best-in-class performance standards in the market and adapting internal processes to match or exceed them.' },
          { term: 'ERP', definition: 'Enterprise Resource Planning software linking operations, inventory, HR, and finance in a single integrated real-time database.' },
        ],
      },
      {
        id: 'al-bus-4-3-c3',
        title: 'Global Supply-Chain Location: Offshoring, Outsourcing & Reshoring',
        summary: 'Weighing low overseas wages and trade-bloc access against transport lead times, exchange-rate risk, and ethical scrutiny.',
        bullets: [
          '**Offshoring** relocates a firm’s own production or service operations overseas (e.g. lower wages, tax incentives, proximity to growing markets), whereas **outsourcing** contracts another external firm to perform the function.',
          '**Reshoring** brings previously offshored operations back to the domestic country to shorten lead times, protect intellectual property, improve quality oversight, and cut carbon-intensive shipping.',
        ],
        subsections: [
          {
            heading: 'Quantitative & Qualitative Location Factors',
            bullets: [
              '**Quantitative** - site land/rent costs, labour wage rates, transport costs (bulk-gaining vs bulk-reducing industries), government grants, and break-even/NPV comparisons across sites.',
              '**Qualitative** - political stability, skilled-labour availability, brand image ("Made in UK/Italy"), infrastructure reliability, and environmental/ethical compliance.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'reshoring', definition: 'Returning previously offshored manufacturing or service operations back to the firm’s domestic home country.' },
        ],
        memoryAid: 'Offshoring = moving YOUR OWN plant abroad; Outsourcing = hiring ANOTHER firm to do the task!',
        commonMistake: 'Students frequently conflate offshoring with outsourcing. A firm can offshore WITHOUT outsourcing (opening its own factory in Vietnam) or outsource WITHOUT offshoring (hiring a local UK payroll agency).',
      },
    ],
    keyTerms: [
      { term: 'Total Quality Management (TQM)', definition: 'Whole-organisation quality culture treating every worker as an internal customer pursuing zero defects.' },
      { term: 'Benchmarking', definition: 'Comparing internal KPIs against industry leaders to identify and close performance gaps.' },
      { term: 'ERP (Enterprise Resource Planning)', definition: 'Integrated software connecting inventory, production, sales, HR, and finance in real time.' },
      { term: 'Reshoring', definition: 'Relocating previously offshored operations back to the home country.' },
    ],
    checklistPoints: [
      'Evaluate TQM and quality circles against upfront training costs and organisational culture.',
      'Explain how benchmarking and ERP improve operational efficiency and identify their limitations.',
      'Distinguish offshoring, outsourcing, and reshoring using quantitative and qualitative location factors.',
    ],
  },

  'al-bus-5-1': {
    subtopicId: 'al-bus-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Budgeting, Favourable vs Adverse Variance Analysis & Cash-Flow Management',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 5.2 Cash-flow forecasting and working capital',
    youtubeId: 'uOMx1g7mYhY',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:45',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 Budgeting & Cash Flow',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Incremental vs Zero-Based Budgeting & Delegation', cardId: 'al-bus-5-1-c1' },
      { time: '4:50', seconds: 290, label: 'Favourable vs Adverse Variance Analysis', cardId: 'al-bus-5-1-c2' },
      { time: '9:35', seconds: 575, label: 'Working Capital Cycle, Factoring & Cash-Flow Remedies', cardId: 'al-bus-5-1-c3' },
    ],
    cards: [
      {
        id: 'al-bus-5-1-c1',
        title: 'Purpose of Budgets: Historical (Incremental) vs Zero-Based Budgeting',
        summary: 'Budgets translate corporate strategy into departmental revenue targets and cost ceilings while enabling delegated control.',
        bullets: [
          '**Incremental (historical) budgeting** adjusts last year’s figures for inflation or growth — fast and low-cost, but risks rolling forward outdated inefficiencies ("use it or lose it" year-end spending).',
          '**Zero-based budgeting (ZBB)** resets every department’s budget to **zero** each year so every £/$ of spending must be justified from scratch — eliminates slack, yet consumes heavy management time and can create departmental politics.',
        ],
        subsections: [
          {
            heading: 'Delegated Budgets & Behavioural Impacts',
            bullets: [
              '**Motivation** - consulting budget holders when setting realistic targets improves ownership; imposing unachievable top-down budgets demotivates managers and encourages short-termism (e.g. slashing staff training to hit a cost target).',
              '**Flexible budgets** adjust allowable variable-cost ceilings when actual output rises above forecast so higher sales do not wrongly look like overspending.',
            ],
            exampleHeading: 'Concrete case: Zero-based review in a retail chain',
            examples: [
              'A supermarket group switches marketing to ZBB and uncovers £240,000 spent annually on legacy print flyers with near-zero ROI, reallocating funds to targeted loyalty-app discounts.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'zero-based budgeting', definition: 'Setting every departmental budget to zero each period so all planned expenditure must be freshly justified.' },
        ],
      },
      {
        id: 'al-bus-5-1-c2',
        title: 'Variance Analysis: Favourable (F) vs Adverse (A)',
        summary: 'Comparing budgeted vs actual outcomes strictly by their impact on PROFIT — not merely whether a number is larger or smaller.',
        bullets: [
          '**Favourable variance (F)**: improves profit relative to budget — either **actual revenue > budgeted revenue** OR **actual cost < budgeted cost**.',
          '**Adverse variance (A)**: reduces profit relative to budget — either **actual revenue < budgeted revenue** OR **actual cost > budgeted cost**.',
        ],
        subsections: [
          {
            heading: 'Diagnosing Linked Variances (Do Not Read One Line Alone!)',
            bullets: [
              'A large **favourable sales revenue variance** often causes an **adverse direct-materials cost variance** simply because the factory bought more materials to meet higher demand — net profit still rises!',
              'Conversely, a **favourable raw-materials variance** caused by switching to cheap low-grade suppliers may trigger customer returns and an adverse revenue variance next quarter.',
            ],
            exampleHeading: 'Worked calculation: Profit variance table',
            examples: [
              'Budgeted Sales = £120,000; Actual Sales = £132,000 → **£12,000 Favourable (F)**.',
              'Budgeted Costs = £82,000; Actual Costs = £89,000 → **£7,000 Adverse (A)**. Net Profit Variance = +£12,000 − £7,000 = **£5,000 Favourable (F)** (actual profit £43,000 vs budgeted £38,000).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'adverse variance', definition: 'Difference between budgeted and actual figures that makes actual profit lower than budgeted profit.' },
          { term: 'favourable variance', definition: 'Difference between budgeted and actual figures that makes actual profit higher than budgeted profit.' },
        ],
      },
      {
        id: 'al-bus-5-1-c3',
        title: 'Cash-Flow Forecasting, Overtrading & Working Capital Remedies',
        summary: 'Rapidly expanding profitable firms frequently collapse from overtrading when cash outflows outpace receivable collections.',
        bullets: [
          '**Overtrading** occurs when a business expands sales rapidly without enough working capital — buying huge inventory and hiring staff upfront while credit customers take 60–90 days to pay.',
          '**Debt factoring** sells unpaid customer invoices to a specialist factor for ~80–90% immediate cash; it cures acute liquidity gaps fast, yet sacrifices 10–20% of revenue and can harm customer relationships if the factor chases debtors aggressively.',
        ],
        subsections: [
          {
            heading: 'Evaluating Cash-Flow Solutions',
            bullets: [
              '**Sale and leaseback** unlocks large cash lump sums from owned property while retaining use of the building, but commits the business to permanent rental outflows and loses collateral for future loans.',
              '**Extending supplier trade credit** improves short-term cash free of interest, yet risking late-payment penalties or losing early-settlement discounts.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'debt factoring', definition: 'Selling a firm’s trade receivables (unpaid invoices) to a finance company at a discount in exchange for immediate cash.' },
        ],
        memoryAid: 'Variance rule: ask ONLY one question — "Did this make PROFIT higher (Favourable) or lower (Adverse)?"',
        commonMistake: 'Students label higher actual costs as "favourable" because the number went up. ALWAYS evaluate variances by their effect on PROFIT: higher costs = ADVERSE!',
      },
    ],
    keyTerms: [
      { term: 'Zero-based budgeting', definition: 'Resetting budgets to zero each year so every cost must be justified from scratch.' },
      { term: 'Variance analysis', definition: 'Investigating differences between budgeted and actual revenue, costs, and profit.' },
      { term: 'Overtrading', definition: 'Expanding business activity faster than available working capital can finance cash outflows.' },
      { term: 'Debt factoring', definition: 'Selling unpaid customer invoices to a third party at a discount for instant liquidity.' },
    ],
    checklistPoints: [
      'Contrast incremental, zero-based, and flexible budgets and their behavioural effects.',
      'Calculate and interpret favourable vs adverse revenue, cost, and profit variances.',
      'Diagnose overtrading and evaluate debt factoring, sale-and-leaseback, and credit control.',
    ],
  },

  'al-bus-5-2': {
    subtopicId: 'al-bus-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Financial Statements, Depreciation & Advanced Ratio Analysis (Gearing, ROCE, Efficiency)',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 5.5 Analysis of accounts',
    youtubeId: 'Lj_YByY4j64',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '15:10',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 Financial Analysis',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Income Statement, Balance Sheet & Straight-Line Depreciation', cardId: 'al-bus-5-2-c1' },
      { time: '5:05', seconds: 305, label: 'Profitability (ROCE) & Financial Risk (Gearing Ratio)', cardId: 'al-bus-5-2-c2' },
      { time: '10:15', seconds: 615, label: 'Efficiency Ratios (Inventory Turnover, Payables/Receivables Days) & Shareholder Ratios', cardId: 'al-bus-5-2-c3' },
    ],
    cards: [
      {
        id: 'al-bus-5-2-c1',
        title: 'Published Accounts, Straight-Line Depreciation & Window Dressing',
        summary: 'Depreciation spreads an asset’s wear-and-tear across its useful life without moving cash; window dressing distorts true health.',
        bullets: [
          '**Straight-line depreciation** = `(Historical Cost − Residual Value) ÷ Expected Useful Life`. It reduces **operating profit** on the Income Statement and lowers **Net Book Value** of non-current assets on the Balance Sheet, while causing **zero cash outflow**.',
          '**Window dressing** legally manipulates accounts to look stronger before year-end (e.g. delaying supplier payments to inflate cash or revaluing intangible brand goodwill).',
        ],
        subsections: [
          {
            heading: 'Inventory Valuation (NRV Rule)',
            bullets: [
              'Accounting standards value inventory at the **lower of historical cost or Net Realisable Value (NRV)** so obsolete or damaged stock never artificially inflates profit or current assets.',
            ],
            exampleHeading: 'Worked calculation: Annual straight-line depreciation',
            examples: [
              'A logistics firm buys a delivery lorry for £65,000 with an expected useful life of 5 years and residual scrap value of £10,000.',
              'Annual depreciation = (£65,000 − £10,000) ÷ 5 = **£11,000/year**; after 2 years, Net Book Value = £65,000 − £22,000 = **£43,000**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'straight-line depreciation', definition: 'Accounting method spreading the loss in value of a non-current asset evenly across each year of its useful life.' },
        ],
      },
      {
        id: 'al-bus-5-2-c2',
        title: 'ROCE & Gearing Ratio: Balancing Return Against Debt Risk',
        summary: 'ROCE measures capital efficiency; Gearing reveals how dangerously exposed the firm is to rising interest rates.',
        bullets: [
          '**Return on Capital Employed (ROCE)** = `(Operating Profit ÷ Capital Employed) × 100`, where `Capital Employed = Non-Current Liabilities + Total Equity`. Compare ROCE against bank interest rates and industry rivals.',
          '**Gearing Ratio** = `(Non-Current Liabilities ÷ Capital Employed) × 100`. Gearing **> 50%** is **highly geared** (high interest risk if central bank rates rise, harder to borrow further, yet avoids diluting shareholder voting control).',
        ],
        subsections: [
          {
            heading: 'Strategies to Reduce High Gearing',
            bullets: [
              '**Issue new ordinary shares** (rights issue) or retain profits instead of paying dividends to expand equity and repay long-term bank loans.',
              '**Improve ROCE** by raising operating profit margins OR selling underperforming assets to lower capital employed.',
            ],
            exampleHeading: 'Worked calculation: Gearing ratio & ROCE',
            examples: [
              'A Plc reports Operating Profit = £1.8m, Non-Current Liabilities = £6m, and Shareholders’ Equity = £4m → Capital Employed = £10m.',
              'ROCE = (1.8 ÷ 10) × 100 = **18%** (strong), while Gearing = (6 ÷ 10) × 100 = **60%** (**highly geared** — vulnerable if loan interest rates jump!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'gearing ratio', definition: 'Proportion of a company’s long-term capital employed financed by non-current debt liabilities rather than equity.' },
        ],
      },
      {
        id: 'al-bus-5-2-c3',
        title: 'Efficiency Ratios & Shareholder Investment Ratios',
        summary: 'Tracking how fast stock turns into cash, how long receivables/payables take, and what returns shareholders earn.',
        bullets: [
          '**Inventory turnover** = `Cost of Sales ÷ Average Inventory` (times/year). **Receivables days** = `(Trade Receivables ÷ Credit Sales) × 365`; **Payables days** = `(Trade Payables ÷ Cost of Sales) × 365`. Healthy cash flow needs **Payables days > Receivables days**.',
          '**Dividend yield (%)** = `(Dividend per share ÷ Market share price) × 100`; **Price/Earnings (P/E) ratio** = `Market share price ÷ Earnings per share` (high P/E reflects strong market expectations of future profit growth).',
        ],
        subsections: [
          {
            heading: 'Limitations of Ratio Analysis',
            bullets: [
              'Ratios are **historic snapshots** affected by seasonal balance-sheet dates, inflation, and window dressing — never judge a single ratio without **multi-year trends**, **industry benchmarks**, and **qualitative context** (brand strength, staff morale, R&D pipeline).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dividend yield', definition: 'Annual dividend per share expressed as a percentage of the current market share price.' },
          { term: 'receivables days', definition: 'Average number of days a business waits to collect cash from its credit customers.' },
        ],
        memoryAid: 'Healthy working capital cash gap: COLLECT fast (low receivables days), PAY slower (higher payables days), KEEP gearing < 50%!',
        commonMistake: 'Students claim depreciation reduces a company’s bank cash balance. Depreciation is a NON-CASH accounting expense — cash only left the bank when the asset was bought!',
      },
    ],
    keyTerms: [
      { term: 'Straight-line depreciation', definition: '(Historical Cost − Residual Value) ÷ Useful Life; non-cash annual asset write-down.' },
      { term: 'Gearing ratio', definition: '(Non-Current Liabilities ÷ Capital Employed) × 100; above 50% signals high debt risk.' },
      { term: 'Receivables days', definition: '(Trade Receivables ÷ Credit Sales) × 365; average customer payment speed.' },
      { term: 'Dividend yield', definition: '(Dividend per share ÷ Market share price) × 100.' },
    ],
    checklistPoints: [
      'Calculate straight-line depreciation and explain its impact on profit, net book value, and cash flow.',
      'Calculate and evaluate ROCE, Gearing, Inventory Turnover, Receivables/Payables Days, and Dividend Yield.',
      'Identify window dressing and explain qualitative limitations of financial ratio analysis.',
    ],
  },

  'al-bus-5-3': {
    subtopicId: 'al-bus-5-3',
    subtopicCode: '5.3',
    subtopicTitle: 'Investment Appraisal (Payback, ARR, Discounted Cash Flow / NPV) & Decision Trees',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 5.1 Business Finance: Needs and Sources',
    youtubeId: 'E0b167KAYQA',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '15:30',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 Capital Investment',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Payback Period & Average Rate of Return (ARR)', cardId: 'al-bus-5-3-c1' },
      { time: '5:15', seconds: 315, label: 'Time Value of Money & Net Present Value (NPV)', cardId: 'al-bus-5-3-c2' },
      { time: '10:30', seconds: 630, label: 'Decision Trees, Expected Monetary Value (EMV) & Net Gain', cardId: 'al-bus-5-3-c3' },
    ],
    cards: [
      {
        id: 'al-bus-5-3-c1',
        title: 'Payback Period & Average Rate of Return (ARR)',
        summary: 'Payback prioritises speed and liquidity risk; ARR measures average percentage profitability over the project’s full lifespan.',
        bullets: [
          '**Payback period** calculates the exact years and months required for cumulative net cash inflows to recover the initial capital cost — vital for cash-strapped firms or fast-changing tech industries, but ignores **all cash flows after payback**.',
          '**Average Rate of Return (ARR)** = `(Average Annual Profit ÷ Initial Capital Cost) × 100`, where `Total Net Profit = Sum of all Net Cash Flows − Initial Cost`. Compare ARR directly against the firm’s **criterion rate** or bank interest rate.',
        ],
        subsections: [
          {
            heading: 'Formula Precision for Payback Months',
            bullets: [
              'When payback falls partway through a year: `Extra months = (Remaining shortfall ÷ Net cash flow in that year) × 12`.',
            ],
            exampleHeading: 'Worked calculation: Payback & ARR on a £100,000 machine',
            examples: [
              'Initial cost = £100,000; Net cash inflows: Year 1 = £40,000, Year 2 = £40,000, Year 3 = £40,000, Year 4 = £40,000 (Total inflows = £160,000).',
              'Payback: after 2 years £80,000 recovered, £20,000 left → (20,000 ÷ 40,000) × 12 = 6 months → **2 years 6 months**.',
              'Total Profit = £160,000 − £100,000 = £60,000 → Average annual profit = £60,000 ÷ 4 = £15,000 → ARR = (15,000 ÷ 100,000) × 100 = **15%**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Average Rate of Return (ARR)', definition: 'Annualised percentage return on an investment calculated as (Average Annual Profit ÷ Initial Capital Cost) × 100.' },
        ],
      },
      {
        id: 'al-bus-5-3-c2',
        title: 'Discounted Cash Flow & Net Present Value (NPV)',
        summary: 'NPV accounts for the time value of money because £1 received today is worth more than £1 received in five years.',
        bullets: [
          '**Time value of money**: future cash inflows lose purchasing power to **inflation**, carry **risk**, and forego **interest** that cash held today could earn.',
          '**Net Present Value (NPV)** multiplies each year’s net cash flow by its **discount factor** (at the firm’s cost of capital, e.g. 10%), sums all present values, and subtracts the initial Year 0 outlay. Accept projects with **NPV > 0**.',
        ],
        subsections: [
          {
            heading: 'Evaluating Investment Appraisal Methods',
            bullets: [
              '**NPV strengths** - considers both the **size AND timing** of all cash flows across the full project life.',
              '**NPV limitations** - sensitive to the chosen **discount rate** (if central bank interest rates jump, a positive NPV can turn negative) and relies on uncertain multi-year revenue forecasts; always weigh **qualitative factors** (corporate objectives, ethics, workforce skills, brand fit).',
            ],
            exampleHeading: 'Worked calculation: NPV at a 10% discount rate',
            examples: [
              'Outlay Year 0 = −£50,000. Cash inflows: Year 1 = £30,000 (DF 0.91 → £27,300), Year 2 = £35,000 (DF 0.83 → £29,050).',
              'Total Present Value = £27,300 + £29,050 = £56,350 → **NPV = £56,350 − £50,000 = +£6,350** (financially viable since NPV > 0).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Net Present Value (NPV)', definition: 'Sum of discounted future net cash flows minus the initial investment outlay, accounting for the time value of money.' },
        ],
      },
      {
        id: 'al-bus-5-3-c3',
        title: 'Decision Trees: Expected Monetary Value (EMV) & Net Gain',
        summary: 'Mapping strategic choices (squares) and uncertain chance outcomes (circles) to compute probability-weighted financial payoffs.',
        bullets: [
          '**Symbols**: **Squares (□)** represent management **decision nodes**; **Circles (○)** represent uncertain **chance nodes** whose branch probabilities must sum strictly to **1.0**.',
          '**Expected Monetary Value (EMV)** at a chance node = `Σ (Probability × Outcome)`. **Net Gain** = `EMV − Initial Cost of that decision option`; prune (double-slash `//`) lower-value decision branches.',
        ],
        subsections: [
          {
            heading: 'Critiquing Decision Trees in Essays',
            bullets: [
              '**Value** - forces managers to quantify risks, list all options explicitly, and consider probabilities systematically.',
              '**Limits** - probabilities are often subjective guesses, EMV is a long-run average that ignores catastrophic downside risk for a small firm, and trees omit qualitative issues like worker morale or brand ethics.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Expected Monetary Value (EMV)', definition: 'Probability-weighted average financial outcome of a chance node on a decision tree.' },
        ],
        memoryAid: 'ARR divides AVERAGE ANNUAL PROFIT (after subtracting cost!), NOT total cash flow; Decision Tree Net Gain = EMV − Option Cost!',
        commonMistake: 'In ARR calculations, students frequently forget to subtract the initial investment cost before computing total profit — inflating ARR artificially by 20–30 percentage points!',
      },
    ],
    keyTerms: [
      { term: 'Payback period', definition: 'Time taken for cumulative net cash inflows to recover initial capital expenditure.' },
      { term: 'Average Rate of Return (ARR)', definition: '(Average Annual Profit ÷ Initial Capital Cost) × 100.' },
      { term: 'Net Present Value (NPV)', definition: 'Total discounted future cash flows minus initial capital cost.' },
      { term: 'Expected Monetary Value (EMV)', definition: 'Sum of each outcome multiplied by its probability at a chance node.' },
    ],
    checklistPoints: [
      'Calculate and compare Payback Period, ARR, and NPV for competing capital investment options.',
      'Explain why NPV is theoretically superior yet still dependent on discount-rate and forecast accuracy.',
      'Construct and evaluate a decision tree calculating EMV and Net Gain.',
    ],
  },

  'al-bus-6-1': {
    subtopicId: 'al-bus-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Macroeconomic Policy, Exchange Rates, Business Ethics, CSR & Managing Strategic Change',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 6.3: Business and the international economy',
    youtubeId: 'MqEZQjXXB0Y',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:55',
    courseMatchSummary: '3 of 3 deep A-Level sections aligned with AQA 7132 & CIE 9609 External Strategy & Change',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Business Cycle, Fiscal/Monetary Policy & SPICED Exchange Rates', cardId: 'al-bus-6-1-c1' },
      { time: '5:00', seconds: 300, label: 'Externalities, Carroll’s CSR Pyramid & Stakeholder Ethics', cardId: 'al-bus-6-1-c2' },
      { time: '9:55', seconds: 595, label: 'Globalisation Strategy, Lewin’s Force Field & Kotter’s Change Model', cardId: 'al-bus-6-1-c3' },
    ],
    cards: [
      {
        id: 'al-bus-6-1-c1',
        title: 'Macroeconomic Cycles, Policy Shocks & Exchange Rate Strategy',
        summary: 'Adapting product portfolios, gearing, and export pricing across booms, recessions, interest-rate hikes, and currency swings.',
        bullets: [
          '**Recession resilience**: firms selling **income-inelastic necessities** or inferior own-label ranges thrive during recessions, whereas highly geared luxury brands face falling demand and acute debt-servicing strain when central banks hike interest rates.',
          '**Exchange rates (SPICED / WPIDEC)**: a **strong domestic currency (appreciation)** makes **imports cheaper** (benefiting firms importing raw components) and **exports dearer** (squeezing exporters’ foreign volumes or forcing them to slash profit margins).',
        ],
        subsections: [
          {
            heading: 'Fiscal vs Monetary Policy Impacts on Firms',
            bullets: [
              '**Contractionary monetary policy (higher interest rates)** - increases borrowing costs on variable-rate debt, raises hurdle rates for NPV investment appraisal, and strengthens the currency via hot-money inflows.',
              '**Expansionary fiscal policy (tax cuts / infrastructure spend)** - boosts consumer disposable income and creates public-sector contract opportunities.',
            ],
            exampleHeading: 'Worked calculation: Currency appreciation squeeze on an exporter',
            examples: [
              'A UK machinery exporter sells turbines for £200,000. When the pound appreciates from £1 = $1.25 to £1 = $1.40, the US buyer’s price jumps from **$250,000** to **$280,000** (+12%).',
              'If US demand is price elastic, export volume drops sharply unless the UK firm cuts its pound price and absorbs a lower margin.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SPICED', definition: 'Strong Pound: Imports Cheaper, Exports Dearer — mnemonic predicting currency appreciation impacts.' },
        ],
        diagram: 'business-cycle',
      },
      {
        id: 'al-bus-6-1-c2',
        title: 'Externalities, Corporate Social Responsibility (CSR) & Triple Bottom Line',
        summary: 'Balancing short-term shareholder profit against environmental externalities, ethical sourcing, and long-run brand equity.',
        bullets: [
          '**Negative externalities** (factory emissions, plastic waste) impose unpaid social costs on communities, inviting **environmental taxes**, strict regulation, and damaging **pressure-group boycotts**.',
          '**Elkington’s Triple Bottom Line** audits corporate performance across **People (social), Planet (environmental), and Profit (economic)** — while **Carroll’s CSR Pyramid** builds from Economic → Legal → Ethical → Philanthropic responsibilities.',
        ],
        subsections: [
          {
            heading: 'Friedman vs Stakeholder View of CSR',
            bullets: [
              '**Milton Friedman (Shareholder view)** argued that a company’s sole social responsibility is to maximise shareholder profits within the law; spending on philanthropy acts as an unauthorised tax on owners.',
              '**Modern strategic CSR** demonstrates that sustainable supply chains attract top talent, lower energy waste, secure ESG institutional funding, and build resilient customer loyalty.',
            ],
            exampleHeading: 'Concrete case: Ethical sourcing trade-off',
            examples: [
              'Switching to Fairtrade certified cocoa raises unit material costs by 8% in Year 1, but protects a confectionery brand from viral boycott risk and allows a 12% ethical price premium.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Triple Bottom Line', definition: 'Framework measuring business performance across three pillars: Profit (economic), People (social), and Planet (environmental).' },
          { term: 'CSR', definition: 'Corporate Social Responsibility — voluntary business commitment to go beyond legal minimums to benefit society and the environment.' },
        ],
        diagram: 'externality-market-failure',
      },
      {
        id: 'al-bus-6-1-c3',
        title: 'Managing Strategic Change: Lewin’s Force Field & Kotter’s 8 Steps',
        summary: 'Diagnosing driving vs restraining forces and overcoming staff resistance to digital or global restructuring.',
        bullets: [
          '**Lewin’s Force Field Analysis** assigns numerical weights (1–5) to **driving forces** pushing for change (new rivals, rising costs, tech disruption) vs **restraining forces** resisting it (staff fear of redundancy, culture clash, capital cost). Change succeeds only when managers **strengthen drivers AND weaken restraints**.',
          '**Kotter & Schlesinger’s 4 reasons for resistance**: parochial self-interest, misunderstanding/lack of trust, different assessments of the situation, and low tolerance for change — overcome via **education/communication**, **participation**, **facilitation/training**, and **negotiation**.',
        ],
        subsections: [
          {
            heading: 'Contingency Planning & Crisis Management',
            bullets: [
              '**Contingency planning** prepares tested response protocols for low-probability, high-impact shocks (cyber-attacks, factory fires, product recalls) to protect brand continuity — costly to draft and update, yet far cheaper than chaotic crisis failure.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Force Field Analysis', definition: 'Lewin’s strategic tool weighing driving forces for change against restraining forces resisting change.' },
        ],
        memoryAid: 'Triple Bottom Line = 3 Ps (People, Planet, Profit); Lewin = strengthen DRIVERS + weaken RESTRAINTS!',
        commonMistake: 'Students assume ethical/CSR policies always shrink profit. Always evaluate BOTH short-term cost increases AND long-term revenue/reputation/ESG-financing gains!',
      },
    ],
    keyTerms: [
      { term: 'Triple Bottom Line', definition: 'Auditing business success across Profit, People, and Planet.' },
      { term: 'Corporate Social Responsibility (CSR)', definition: 'Voluntary business accountability for social and environmental impacts beyond legal compliance.' },
      { term: 'Force Field Analysis', definition: 'Lewin’s weighted comparison of driving vs restraining forces around a strategic change.' },
      { term: 'Contingency planning', definition: 'Preparing structured response plans in advance for potential major business crises.' },
    ],
    checklistPoints: [
      'Analyse business impacts of the economic cycle, fiscal/monetary shifts, and exchange-rate movements.',
      'Evaluate CSR and Triple Bottom Line arguments using Friedman vs stakeholder perspectives.',
      'Apply Lewin’s Force Field Analysis and Kotter’s methods to overcome resistance to strategic change.',
    ],
  },
};

export const ALEVEL_BUSINESS_QUIZZES_4_TO_6: QuizQuestion[] = [
  // 4.1 (5)
  {
    id: 'albus-q-4-1-1',
    subtopicId: 'al-bus-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A factory has a maximum weekly capacity of 80,000 units and currently produces 60,000 units. What is its capacity utilisation?',
    options: ['60%', '75%', '80%', '133%'],
    correctIndex: 1,
    explanation: 'Capacity utilisation = (60,000 ÷ 80,000) × 100 = 75%.',
  },
  {
    id: 'albus-q-4-1-2',
    subtopicId: 'al-bus-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'A factory uses 250 parts/day, holds 500 parts as buffer inventory, and faces a 4-day supplier lead time. Calculate the re-order level and state ONE risk of using Just-in-Time (JIT) with zero buffer stock.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Re-order level = 500 + (250 × 4) = 1500 parts. A key risk of JIT with zero buffer inventory is that any supplier delivery delay or disruption halts the entire production line.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates re-order level = 1500 parts', numericMatch: { value: 1500, tolerance: 1 } },
        { id: 'mp2', markDescription: 'Supplier delay halts production line / causes stock-out', requiredKeywordGroups: [['supplier', 'delay', 'disruption'], ['halt', 'stop', 'stock-out', 'production']] },
      ],
    },
    explanation: 'Re-order level = Buffer + (Daily usage × Lead time) = 500 + 1,000 = 1,500 parts.',
  },
  {
    id: 'albus-q-4-1-3',
    subtopicId: 'al-bus-4-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each A-Level operations concept to its definition:',
    pairs: [
      { left: 'Rationalisation', right: 'Closing underused capacity to reduce fixed overheads' },
      { left: 'Cell production', right: 'Multi-skilled teams responsible for a complete sub-assembly' },
      { left: 'Simultaneous engineering', right: 'Overlapping design and tooling stages to cut time-to-market' },
    ],
    explanation: 'These operational strategies directly impact unit cost, responsiveness, and worker motivation.',
  },
  {
    id: 'albus-q-4-1-4',
    subtopicId: 'al-bus-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the lean operations statement:',
    segments: ['Operating at 100% capacity leaves no time for machine ', ', whereas holding excessive stock ties up ', ' capital and risks obsolescence.'],
    wordBank: ['maintenance', 'working', 'advertising', 'equity'],
    answers: ['maintenance', 'working'],
    explanation: '100% utilisation prevents scheduled maintenance; excess inventory locks up working capital.',
  },
  {
    id: 'albus-q-4-1-5',
    subtopicId: 'al-bus-4-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO conditions strictly required for Just-in-Time (JIT) inventory control to succeed:',
    options: [
      'Highly reliable suppliers delivering zero-defect components on exact schedules',
      'Accurate real-time demand forecasting and integrated IT ordering systems',
      'Holding six months of spare raw materials in giant leased warehouses',
      'Ignoring supplier lead times completely',
    ],
    correctIndices: [0, 1],
    explanation: 'JIT depends on dependable suppliers, high part quality, and accurate electronic ordering.',
  },

  // 4.2 (5)
  {
    id: 'albus-q-4-2-1',
    subtopicId: 'al-bus-4-2',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Identify the features of the Break-Even Chart:',
    diagram: 'break-even-chart',
    labels: [
      { marker: 'Output where TR = TC (Zero Profit)', options: ['Break-even output (BEP)', 'Fixed cost intercept'], answer: 'Break-even output (BEP)' },
      { marker: 'Horizontal distance between Actual Sales and BEP', options: ['Margin of safety', 'Variable cost'], answer: 'Margin of safety' },
    ],
    explanation: 'BEP marks zero profit/loss; Margin of safety shows the sales buffer above break-even.',
  },
  {
    id: 'albus-q-4-2-2',
    subtopicId: 'al-bus-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'A firm has fixed costs of £60,000, selling price £25, and variable cost £13 per unit. Calculate the output needed to make a £24,000 target profit.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Unit contribution = £25 − £13 = £12. Target profit output = (£60,000 + £24,000) ÷ £12 = £84,000 ÷ £12 = 7000 units.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates unit contribution = £12', numericMatch: { value: 12, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Calculates target output = 7000 units', numericMatch: { value: 7000, tolerance: 1 } },
      ],
    },
    explanation: 'Target output = (Fixed Costs + Target Profit) ÷ Unit Contribution = 84,000 ÷ 12 = 7,000 units.',
  },
  {
    id: 'albus-q-4-2-3',
    subtopicId: 'al-bus-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'On a Critical Path Analysis (CPA) network, Activity D has EST = 4 days, Duration = 5 days, and LFT = 12 days. What is its Total Float?',
    options: ['0 days (critical)', '3 days', '7 days', '1 day'],
    correctIndex: 1,
    explanation: 'Total Float = LFT − Duration − EST = 12 − 5 − 4 = 3 days (so Activity D is non-critical).',
  },
  {
    id: 'albus-q-4-2-4',
    subtopicId: 'al-bus-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Critical Path Analysis pass rules:',
    segments: ['On the forward pass (EST) where two paths meet, choose the ', ' number; activities on the critical path always have ', ' total float.'],
    wordBank: ['highest', 'zero', 'lowest', 'negative'],
    answers: ['highest', 'zero'],
    explanation: 'Forward pass takes the longest prerequisite path (highest); critical activities have zero float.',
  },
  {
    id: 'albus-q-4-2-5',
    subtopicId: 'al-bus-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'With spare capacity available, when does a discounted special order immediately increase total company profit?',
    options: [
      'Only when the special price exceeds full absorption cost',
      'Whenever the special price exceeds variable cost per unit (positive contribution) without harming existing full-price sales',
      'Whenever total revenue exceeds fixed costs',
      'Never, because discounts always create losses',
    ],
    correctIndex: 1,
    explanation: 'Fixed costs are already covered; any price above variable cost generates positive contribution directly to profit.',
  },

  // 4.3 (5)
  {
    id: 'albus-q-4-3-1',
    subtopicId: 'al-bus-4-3',
    type: 'mcq',
    marks: 1,
    prompt: 'How does Total Quality Management (TQM) differ fundamentally from traditional Quality Control?',
    options: [
      'TQM relies purely on final-stage factory inspectors',
      'TQM embeds zero-defect responsibility across every worker and internal customer throughout the entire firm',
      'TQM eliminates all staff training budgets',
      'TQM forbids benchmarking against competitors',
    ],
    correctIndex: 1,
    explanation: 'TQM builds a whole-organisation zero-defect culture rather than inspecting faults out at the end.',
  },
  {
    id: 'albus-q-4-3-2',
    subtopicId: 'al-bus-4-3',
    type: 'matching',
    marks: 3,
    prompt: 'Match each operations term to its exact meaning:',
    pairs: [
      { left: 'Offshoring', right: 'Moving the firm’s own production facility to an overseas country' },
      { left: 'Outsourcing', right: 'Contracting an external third-party firm to perform a business activity' },
      { left: 'Reshoring', right: 'Bringing previously overseas production back to the domestic home country' },
    ],
    explanation: 'Offshoring changes geography; outsourcing changes organisational ownership of the task.',
  },
  {
    id: 'albus-q-4-3-3',
    subtopicId: 'al-bus-4-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the quality and supply-chain tools:',
    segments: ['Comparing internal KPIs against the market leader is ', ', while software integrating finance, inventory, and production in one database is ', '.'],
    wordBank: ['benchmarking', 'ERP', 'factoring', 'delayering'],
    answers: ['benchmarking', 'ERP'],
    explanation: 'Benchmarking closes best-practice gaps; ERP unifies real-time enterprise data across departments.',
  },
  {
    id: 'albus-q-4-3-4',
    subtopicId: 'al-bus-4-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO strategic reasons why a European apparel brand might choose RESHORING back from overseas factories:',
    options: [
      'Shorter delivery lead times and lower vulnerability to global shipping disruptions',
      'Stronger quality oversight, IP protection, and lower supply-chain carbon footprint',
      'Domestic wage rates are always lower than developing countries',
      'To eliminate all domestic employment laws',
    ],
    correctIndices: [0, 1],
    explanation: 'Reshoring trades higher domestic wages for faster responsiveness, tighter quality control, and sustainability.',
  },
  {
    id: 'albus-q-4-3-5',
    subtopicId: 'al-bus-4-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE benefit and ONE limitation of implementing an Enterprise Resource Planning (ERP) system.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Benefit: integrates real-time inventory, sales, and finance data across departments to reduce stockouts and waste. Limitation: very expensive software licensing, complex data migration, and heavy staff retraining disruption.',
      markPoints: [
        { id: 'mp1', markDescription: 'Integrates real-time cross-departmental data cutting waste/stockouts', requiredKeywordGroups: [['integrat', 'real-time', 'shared', 'database'], ['inventory', 'waste', 'efficien', 'stock', 'data']] },
        { id: 'mp2', markDescription: 'High upfront software/retraining cost or implementation disruption', requiredKeywordGroups: [['expensive', 'cost', 'training', 'disrupt', 'complex']] },
      ],
    },
    explanation: 'ERP delivers real-time visibility across functions but requires major capital and change management.',
  },

  // 5.1 (5)
  {
    id: 'albus-q-5-1-1',
    subtopicId: 'al-bus-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A café budgets £18,000 for coffee bean costs but actually spends £21,500. What is this cost variance?',
    options: ['£3,500 Favourable', '£3,500 Adverse', '£18,000 Favourable', '£21,500 Adverse'],
    correctIndex: 1,
    explanation: 'Actual costs exceeded budget by £3,500, lowering profit → £3,500 Adverse (A).',
  },
  {
    id: 'albus-q-5-1-2',
    subtopicId: 'al-bus-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Budgeted revenue was £95,000 (actual £104,000) and budgeted costs were £70,000 (actual £74,000). Calculate the net profit variance and state whether it is Favourable or Adverse.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Revenue variance = £9,000 Favourable; Cost variance = £4,000 Adverse. Net profit variance = £5000 Favourable (actual profit £30,000 vs budgeted £25,000).',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates net profit variance = £5000', numericMatch: { value: 5000, tolerance: 1 } },
        { id: 'mp2', markDescription: 'Correctly classifies as Favourable', requiredKeywordGroups: [['favourable', 'favorable']] },
      ],
    },
    explanation: 'Budget profit = £25,000; Actual profit = £30,000 → £5,000 Favourable.',
  },
  {
    id: 'albus-q-5-1-3',
    subtopicId: 'al-bus-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the budgeting and liquidity terms:',
    segments: ['Resetting departmental spending to zero each year so every cost must be justified is ', ' budgeting, while selling unpaid customer invoices for immediate cash is debt ', '.'],
    wordBank: ['zero-based', 'factoring', 'incremental', 'gearing'],
    answers: ['zero-based', 'factoring'],
    explanation: 'ZBB challenges historical slack; debt factoring converts receivables into instant cash at a fee.',
  },
  {
    id: 'albus-q-5-1-4',
    subtopicId: 'al-bus-5-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each financial control issue to its description:',
    pairs: [
      { left: 'Overtrading', right: 'Growing sales too fast without sufficient working capital to fund outflows' },
      { left: 'Flexible budget', right: 'Adjusting budgeted variable costs in line with actual output achieved' },
      { left: 'Sale and leaseback', right: 'Selling property for cash while continuing to rent and occupy it' },
    ],
    explanation: 'Each tool manages cash flow or budget fairness under changing output volumes.',
  },
  {
    id: 'albus-q-5-1-5',
    subtopicId: 'al-bus-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why might an adverse raw-materials cost variance actually be GOOD news when reading a firm’s full variance report?',
    options: [
      'Because suppliers raised prices unexpectedly',
      'Because higher-than-budgeted sales volume required buying extra materials, creating a larger favourable revenue variance',
      'Because waste doubled on the production line',
      'Because the finance team deleted fixed costs',
    ],
    correctIndex: 1,
    explanation: 'Always interpret cost variances alongside output and sales revenue variances.',
  },

  // 5.2 (5)
  {
    id: 'albus-q-5-2-1',
    subtopicId: 'al-bus-5-2',
    type: 'mcq',
    marks: 1,
    prompt: 'A company has Non-Current Liabilities of £4.5m and Shareholders’ Equity of £3.0m. What is its Gearing Ratio?',
    options: ['40%', '60%', '66.7%', '150%'],
    correctIndex: 1,
    explanation: 'Capital Employed = £4.5m + £3.0m = £7.5m; Gearing = (4.5 ÷ 7.5) × 100 = 60% (highly geared).',
  },
  {
    id: 'albus-q-5-2-2',
    subtopicId: 'al-bus-5-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'A machine costs £80,000, has a 4-year useful life, and an £8,000 residual value. Calculate annual straight-line depreciation and state its effect on cash flow.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Annual straight-line depreciation = (£80,000 − £8,000) ÷ 4 = £18000 per year. Depreciation is a non-cash accounting expense so it has zero direct effect on cash flow.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates £18000 annual depreciation', numericMatch: { value: 18000, tolerance: 1 } },
        { id: 'mp2', markDescription: 'States depreciation is a non-cash expense with zero direct cash outflow', requiredKeywordGroups: [['non-cash', 'no cash', 'zero', 'does not affect cash', 'no direct effect']] },
      ],
    },
    explanation: '(80,000 − 8,000) ÷ 4 = £18,000/year; depreciation lowers accounting profit without leaving the bank account.',
  },
  {
    id: 'albus-q-5-2-3',
    subtopicId: 'al-bus-5-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each A-Level ratio to its exact formula:',
    pairs: [
      { left: 'Gearing ratio', right: '(Non-Current Liabilities ÷ Capital Employed) × 100' },
      { left: 'Receivables days', right: '(Trade Receivables ÷ Credit Sales) × 365' },
      { left: 'Dividend yield', right: '(Dividend per share ÷ Market share price) × 100' },
    ],
    explanation: 'Memorise exact numerators and denominators for CIE 9609 & AQA 7132 quantitative questions.',
  },
  {
    id: 'albus-q-5-2-4',
    subtopicId: 'al-bus-5-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the financial reporting concepts:',
    segments: ['Artificially presenting accounts to look healthier before year-end is called ', ' dressing, while a gearing ratio above 50% makes a company vulnerable to rising ', ' rates.'],
    wordBank: ['window', 'interest', 'ratio', 'exchange'],
    answers: ['window', 'interest'],
    explanation: 'Window dressing obscures underlying issues; highly geared firms face heavy interest burdens if rates rise.',
  },
  {
    id: 'albus-q-5-2-5',
    subtopicId: 'al-bus-5-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO ways a highly geared Plc (gearing = 65%) can reduce its gearing ratio:',
    options: [
      'Raise new equity via a rights issue of ordinary shares and repay bank loans',
      'Retain profits inside equity rather than paying out high cash dividends',
      'Take out a new £10m 10-year debenture loan',
      'Increase annual dividend payouts above operating profit',
    ],
    correctIndices: [0, 1],
    explanation: 'Increasing shareholders’ equity or paying down non-current debt lowers gearing.',
  },

  // 5.3 (5)
  {
    id: 'albus-q-5-3-1',
    subtopicId: 'al-bus-5-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is Net Present Value (NPV) considered theoretically superior to Payback Period and ARR?',
    options: [
      'It ignores the initial investment outlay',
      'It accounts for the time value of money by discounting all future cash flows over the project’s entire life',
      'It is always faster to calculate without tables',
      'It guarantees zero forecasting error',
    ],
    correctIndex: 1,
    explanation: 'NPV discounts every year’s cash flow to present value, capturing both timing and full lifetime return.',
  },
  {
    id: 'albus-q-5-3-2',
    subtopicId: 'al-bus-5-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Project X costs £200,000 upfront and generates net cash inflows of £80,000/year for 4 years (total inflows £320,000). Calculate both the Payback Period (in years) and the ARR (%).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Payback period = £200,000 ÷ £80,000 = 2.5 years (2 years 6 months). Total profit = £320,000 − £200,000 = £120,000; average annual profit = £30,000; ARR = (£30,000 ÷ £200,000) × 100 = 15%.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates Payback = 2.5 years', numericMatch: { value: 2.5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Calculates ARR = 15%', numericMatch: { value: 15, tolerance: 0.1 } },
      ],
    },
    explanation: 'Payback = 2.5 years; Total profit = £120k → Avg profit £30k/yr → ARR = 15%.',
  },
  {
    id: 'albus-q-5-3-3',
    subtopicId: 'al-bus-5-3',
    type: 'mcq',
    marks: 1,
    prompt: 'On a decision tree, Option A costs £40,000 and has a 0.6 chance of returning £120,000 and a 0.4 chance of returning £50,000. What is Option A’s Net Gain?',
    options: ['£92,000', '£52,000', '£132,000', '£32,000'],
    correctIndex: 1,
    explanation: 'EMV = (0.6 × 120,000) + (0.4 × 50,000) = £72,000 + £20,000 = £92,000; Net Gain = £92,000 − £40,000 = £52,000.',
  },
  {
    id: 'albus-q-5-3-4',
    subtopicId: 'al-bus-5-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the decision-tree conventions:',
    segments: ['On a decision tree, a square node represents a management ', ' while a circle represents a ', ' node whose branch probabilities must sum to 1.0.'],
    wordBank: ['decision', 'chance', 'payback', 'discount'],
    answers: ['decision', 'chance'],
    explanation: 'Squares show controllable choices; circles represent uncertain probabilistic outcomes.',
  },
  {
    id: 'albus-q-5-3-5',
    subtopicId: 'al-bus-5-3',
    type: 'matching',
    marks: 3,
    prompt: 'Match each investment appraisal method to its primary limitation:',
    pairs: [
      { left: 'Payback Period', right: 'Ignores all profitability and cash inflows occurring after break-even' },
      { left: 'Average Rate of Return (ARR)', right: 'Ignores the timing of cash flows and the time value of money' },
      { left: 'Net Present Value (NPV)', right: 'Highly sensitive to choosing an accurate future discount rate' },
    ],
    explanation: 'Strong A-Level evaluation compares quantitative metrics alongside qualitative strategic risks.',
  },

  // 6.1 (5)
  {
    id: 'albus-q-6-1-1',
    subtopicId: 'al-bus-6-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Identify the stages shown on the Business Cycle diagram:',
    diagram: 'business-cycle',
    labels: [
      { marker: 'Two consecutive quarters of falling Real GDP', options: ['Recession', 'Boom'], answer: 'Recession' },
      { marker: 'Highest GDP point with capacity strain and rising inflation', options: ['Boom / Peak', 'Slump'], answer: 'Boom / Peak' },
    ],
    explanation: 'Firms adapt pricing, inventory, and investment across each phase of the business cycle.',
  },
  {
    id: 'albus-q-6-1-2',
    subtopicId: 'al-bus-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which three performance pillars make up Elkington’s Triple Bottom Line?',
    options: [
      'Price, Place, Promotion',
      'People (Social), Planet (Environmental), Profit (Economic)',
      'Payback, ARR, NPV',
      'Primary, Secondary, Tertiary',
    ],
    correctIndex: 1,
    explanation: 'Triple Bottom Line audits corporate sustainability across People, Planet, and Profit.',
  },
  {
    id: 'albus-q-6-1-3',
    subtopicId: 'al-bus-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete Lewin’s Force Field and exchange-rate rules:',
    segments: ['In Lewin’s Force Field Analysis, managers succeed by strengthening ', ' forces and weakening restraining forces; under SPICED, a stronger currency makes domestic exports ', ' overseas.'],
    wordBank: ['driving', 'dearer', 'cheaper', 'fixed'],
    answers: ['driving', 'dearer'],
    explanation: 'Change requires overcoming restraining forces; currency appreciation raises foreign export prices.',
  },
  {
    id: 'albus-q-6-1-4',
    subtopicId: 'al-bus-6-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO methods from Kotter & Schlesinger used to overcome employee resistance to strategic change:',
    options: [
      'Education and transparent communication explaining why change is vital',
      'Participation and involvement of staff in designing new workflows',
      'Hiding all restructuring plans until implementation morning',
      'Eliminating all employee training budgets during transition',
    ],
    correctIndices: [0, 1],
    explanation: 'Communication, participation, and training reduce fear and misunderstanding during change.',
  },
  {
    id: 'albus-q-6-1-5',
    subtopicId: 'al-bus-6-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE short-term financial drawback and ONE long-term strategic benefit of adopting ambitious CSR sustainability standards.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Drawback: ethical suppliers and green technology raise short-term operating costs and reduce immediate profit margins. Benefit: builds strong brand reputation, attracts ESG investors and loyal customers, and avoids regulatory fines or pressure-group boycotts.',
      markPoints: [
        { id: 'mp1', markDescription: 'Higher short-term operating/sourcing costs reducing immediate margin', requiredKeywordGroups: [['cost', 'expensive', 'margin'], ['short-term', 'higher', 'lower', 'reduc', 'increas']] },
        { id: 'mp2', markDescription: 'Long-term brand reputation, loyalty, ESG funding, or avoiding boycotts/fines', requiredKeywordGroups: [['reputation', 'brand', 'loyal', 'boycott', 'esg', 'fine']] },
      ],
    },
    explanation: 'Strategic CSR trades higher initial operating outlays for durable brand equity and lower regulatory risk.',
  },
];

export const ALEVEL_BUSINESS_FLASHCARDS_4_TO_6: FlashcardItem[] = [
  // 4.1 (5)
  { id: 'albus-fc-4-1-1', subtopicId: 'al-bus-4-1', front: 'Write the Capacity Utilisation formula and explain why 100% is risky.', backBullets: ['(Current output ÷ Maximum possible output) × 100.', '100% leaves zero slack for preventative maintenance, rush orders, or quality checks.'] },
  { id: 'albus-fc-4-1-2', subtopicId: 'al-bus-4-1', front: 'Write the Inventory Re-order Level equation.', backBullets: ['Re-order Level = Buffer Inventory + (Daily Usage × Supplier Lead Time).'] },
  { id: 'albus-fc-4-1-3', subtopicId: 'al-bus-4-1', front: 'Contrast Rationalisation with Outsourcing.', backBullets: ['Rationalisation cuts excess capacity (closing sites) to shrink fixed costs.', 'Outsourcing hires external contractors to handle overflow demand without capital outlay.'] },
  { id: 'albus-fc-4-1-4', subtopicId: 'al-bus-4-1', front: 'Define Cell Production and its motivational link.', backBullets: ['Multi-skilled self-contained teams completing an entire sub-assembly.', 'Boosts job enrichment, teamwork (Maslow social/esteem), and quality accountability.'] },
  { id: 'albus-fc-4-1-5', subtopicId: 'al-bus-4-1', front: 'State two benefits and two risks of Just-in-Time (JIT).', backBullets: ['Benefits: cuts warehouse rent, obsolescence, and frees working capital.', 'Risks: zero buffer stock means any supplier delay halts the factory; loses bulk-buying discounts.'] },

  // 4.2 (5)
  { id: 'albus-fc-4-2-1', subtopicId: 'al-bus-4-2', front: 'When should a business accept a discounted special order using contribution costing?', backBullets: ['When spare capacity exists AND Offer Price > Variable Cost per unit (positive contribution).', 'Qualitative check: ensure full-price customers will not discover the discount and defect.'] },
  { id: 'albus-fc-4-2-2', subtopicId: 'al-bus-4-2', front: 'Write the Output for Target Profit formula.', backBullets: ['Target Profit Output = (Fixed Costs + Target Profit) ÷ (Selling Price − Variable Cost).'], diagram: 'break-even-chart' },
  { id: 'albus-fc-4-2-3', subtopicId: 'al-bus-4-2', front: 'State three A-Level limitations of Break-Even Analysis.', backBullets: ['Assumes all output produced is sold (zero inventory).', 'Assumes linear TR and TC (ignoring bulk discounts or stepped fixed costs) and single product mix.'] },
  { id: 'albus-fc-4-2-4', subtopicId: 'al-bus-4-2', front: 'State the EST, LFT, and Total Float rules in Critical Path Analysis.', backBullets: ['Forward pass (EST): choose HIGHEST converging value; Backward pass (LFT): choose LOWEST.', 'Total Float = LFT − Duration − EST (Critical path tasks have Float = 0).'] },
  { id: 'albus-fc-4-2-5', subtopicId: 'al-bus-4-2', front: 'Give two strategic uses and two limits of CPA.', backBullets: ['Uses: schedules JIT deliveries, reveals parallel tasks, focuses management on zero-float bottlenecks.', 'Limits: relies on estimated durations; vulnerable to external shocks like strikes or bad weather.'] },

  // 4.3 (5)
  { id: 'albus-fc-4-3-1', subtopicId: 'al-bus-4-3', front: 'Explain the "internal customer" concept inside TQM.', backBullets: ['Every employee treats the next stage in the workflow as a customer, ensuring zero defects are passed forward.'] },
  { id: 'albus-fc-4-3-2', subtopicId: 'al-bus-4-3', front: 'Define Benchmarking and one key limitation.', backBullets: ['Measuring KPIs against industry leaders to adopt best practice.', 'Limitation: copying leaders yields parity rather than breakthrough innovation, and rivals guard data.'] },
  { id: 'albus-fc-4-3-3', subtopicId: 'al-bus-4-3', front: 'What is Enterprise Resource Planning (ERP)?', backBullets: ['Integrated real-time software linking orders, inventory, production, HR, and finance into one database.'] },
  { id: 'albus-fc-4-3-4', subtopicId: 'al-bus-4-3', front: 'Distinguish Offshoring from Outsourcing accurately.', backBullets: ['Offshoring: moving the firm’s OWN operations abroad.', 'Outsourcing: hiring a THIRD-PARTY firm (domestically or overseas) to perform an activity.'] },
  { id: 'albus-fc-4-3-5', subtopicId: 'al-bus-4-3', front: 'Give three reasons firms choose Reshoring.', backBullets: ['Shorter lead times and supply-chain resilience.', 'Tighter quality/IP protection and lower carbon footprint ("Made locally" brand appeal).'] },

  // 5.1 (5)
  { id: 'albus-fc-5-1-1', subtopicId: 'al-bus-5-1', front: 'Contrast Incremental Budgeting with Zero-Based Budgeting (ZBB).', backBullets: ['Incremental: adjusts prior year budgets (fast, keeps historical slack).', 'ZBB: resets to zero every year so every cost is freshly justified (cuts waste, time-consuming).'] },
  { id: 'albus-fc-5-1-2', subtopicId: 'al-bus-5-1', front: 'Define Favourable vs Adverse Variance.', backBullets: ['Favourable: actual outcome makes PROFIT higher than budget (higher sales OR lower costs).', 'Adverse: actual outcome makes PROFIT lower than budget (lower sales OR higher costs).'] },
  { id: 'albus-fc-5-1-3', subtopicId: 'al-bus-5-1', front: 'What is Overtrading and why does it kill growing firms?', backBullets: ['Expanding sales too rapidly without enough working capital to finance upfront inventory and wages while waiting for credit debtors to pay.'] },
  { id: 'albus-fc-5-1-4', subtopicId: 'al-bus-5-1', front: 'Evaluate Debt Factoring as a cash-flow remedy.', backBullets: ['Pro: converts invoices into ~85% immediate cash fast.', 'Con: sacrifices 10–15% revenue fee and risks damaging customer goodwill if factor chases debts aggressively.'] },
  { id: 'albus-fc-5-1-5', subtopicId: 'al-bus-5-1', front: 'Why are Flexible Budgets fairer for evaluating operations managers?', backBullets: ['They flex allowable variable-cost ceilings up when output exceeds forecast so higher sales do not falsely trigger adverse cost variances.'] },

  // 5.2 (5)
  { id: 'albus-fc-5-2-1', subtopicId: 'al-bus-5-2', front: 'Write the Straight-Line Depreciation equation and its cash-flow impact.', backBullets: ['(Historical Cost − Residual Value) ÷ Expected Useful Life.', 'Non-cash expense: lowers accounting profit and Net Book Value, with ZERO cash outflow.'] },
  { id: 'albus-fc-5-2-2', subtopicId: 'al-bus-5-2', front: 'Write the Gearing Ratio equation and threshold for high gearing.', backBullets: ['(Non-Current Liabilities ÷ Capital Employed) × 100.', 'Above 50% = highly geared (high interest-rate risk; lower equity dilution).'] },
  { id: 'albus-fc-5-2-3', subtopicId: 'al-bus-5-2', front: 'Write Receivables Days, Payables Days, and Inventory Turnover formulas.', backBullets: ['Receivables Days = (Receivables ÷ Credit Sales) × 365; Payables Days = (Payables ÷ Cost of Sales) × 365.', 'Inventory Turnover = Cost of Sales ÷ Average Inventory.'] },
  { id: 'albus-fc-5-2-4', subtopicId: 'al-bus-5-2', front: 'Write the Dividend Yield and P/E Ratio equations.', backBullets: ['Dividend Yield = (Dividend per share ÷ Share price) × 100.', 'P/E Ratio = Market Share Price ÷ Earnings Per Share (high P/E signals strong growth expectations).'] },
  { id: 'albus-fc-5-2-5', subtopicId: 'al-bus-5-2', front: 'Define Window Dressing and state two limits of ratio analysis.', backBullets: ['Window dressing: legal year-end tweaks presenting artificially healthy accounts.', 'Limits: historic snapshot only; must compare trends, industry averages, and qualitative brand/HR factors.'] },

  // 5.3 (5)
  { id: 'albus-fc-5-3-1', subtopicId: 'al-bus-5-3', front: 'State the Average Rate of Return (ARR) formula step-by-step.', backBullets: ['1) Total Profit = Total Net Cash Inflows − Initial Cost.', '2) Avg Annual Profit = Total Profit ÷ Years; 3) ARR = (Avg Annual Profit ÷ Initial Cost) × 100.'] },
  { id: 'albus-fc-5-3-2', subtopicId: 'al-bus-5-3', front: 'Why does NPV discount future cash flows?', backBullets: ['Time value of money: future £1 is worth less due to inflation, risk, and foregone interest earnings today.'] },
  { id: 'albus-fc-5-3-3', subtopicId: 'al-bus-5-3', front: 'Decision rule for Net Present Value (NPV)?', backBullets: ['Accept if NPV > 0 (earns more than the cost of capital); pick the highest positive NPV among mutually exclusive projects.'] },
  { id: 'albus-fc-5-3-4', subtopicId: 'al-bus-5-3', front: 'How do you calculate EMV and Net Gain on a Decision Tree?', backBullets: ['EMV = Σ(Probability × Financial Outcome) at a chance node.', 'Net Gain = EMV − Initial Cost of that strategic option.'] },
  { id: 'albus-fc-5-3-5', subtopicId: 'al-bus-5-3', front: 'List three qualitative factors to weigh alongside NPV and Decision Trees.', backBullets: ['Alignment with corporate mission/ethics, impact on workforce morale/skills, and brand reputation or legal risk.'] },

  // 6.1 (5)
  { id: 'albus-fc-6-1-1', subtopicId: 'al-bus-6-1', front: 'How do rising central bank interest rates hit a highly geared exporter?', backBullets: ['Higher debt-servicing costs squeeze profit, consumers cut spending, and hot-money inflows appreciate the currency (SPICED — dearer exports).'], diagram: 'business-cycle' },
  { id: 'albus-fc-6-1-2', subtopicId: 'al-bus-6-1', front: 'State Elkington’s Triple Bottom Line and Carroll’s CSR Pyramid levels.', backBullets: ['Triple Bottom Line: Profit, People, Planet.', 'Carroll: Economic → Legal → Ethical → Philanthropic responsibilities.'], diagram: 'externality-market-failure' },
  { id: 'albus-fc-6-1-3', subtopicId: 'al-bus-6-1', front: 'Contrast Friedman’s shareholder view with modern strategic CSR.', backBullets: ['Friedman: sole duty is lawful profit maximisation for shareholders.', 'Strategic CSR: sustainability lowers waste, wins ESG capital, and protects long-term brand loyalty.'] },
  { id: 'albus-fc-6-1-4', subtopicId: 'al-bus-6-1', front: 'Explain Lewin’s Force Field Analysis.', backBullets: ['Maps weighted driving forces (pushing change) vs restraining forces (resisting change); managers must strengthen drivers AND weaken restraints.'] },
  { id: 'albus-fc-6-1-5', subtopicId: 'al-bus-6-1', front: 'Give 4 ways from Kotter & Schlesinger to overcome resistance to change.', backBullets: ['Education & communication, participation & involvement, facilitation & training support, and negotiation/agreement.'] },
];

export const ALEVEL_BUSINESS_EXAM_PRACTICE_4_TO_6: ExamQuestionItem[] = [
  {
    id: 'albus-exam-4-1',
    subtopicId: 'al-bus-4-1',
    number: 10,
    stimulus: '[CIE 9609 / AQA 7132 Case] AeroFrame Ltd operates its UK alloy factory at 98% capacity utilisation while switching to Just-in-Time (JIT) deliveries from a single overseas supplier with a 10-day sea-freight lead time.',
    parts: [
      {
        id: 'albus-exam-4-1a',
        label: '(a)',
        prompt: 'Analyse ONE risk of operating at 98% capacity utilisation and evaluate whether AeroFrame Ltd should adopt pure JIT.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Operating at 98% capacity leaves almost no slack for preventative machine maintenance or rush orders, risking breakdowns and quality defects. Pure JIT cuts warehouse storage costs and frees working capital, but relying on a single overseas supplier with a 10-day lead time creates severe stock-out risk if shipping is delayed. Overall, AeroFrame should keep a targeted buffer inventory alongside outsourcing overflow orders rather than pure JIT.',
          markPoints: [
            { id: 'mp1', markDescription: '98% capacity risks breakdowns / no maintenance time / inability to accept rush orders', requiredKeywordGroups: [['maintenance', 'breakdown', 'rush', 'slack', 'defect']] },
            { id: 'mp2', markDescription: 'JIT benefit: lowers storage/warehouse costs or frees working capital', requiredKeywordGroups: [['storage', 'warehouse', 'working capital', 'cost']] },
            { id: 'mp3', markDescription: 'JIT risk: single overseas supplier with 10-day lead time risks stock-outs/halted production', requiredKeywordGroups: [['supplier', 'lead time', 'delay', 'shipping'], ['stock-out', 'halt', 'stop', 'disrupt']] },
            { id: 'mp4', markDescription: 'Supported strategic recommendation (buffer stock / hybrid / outsourcing)', requiredKeywordGroups: [['overall', 'recommend', 'buffer', 'outsourc', 'hybrid']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-4-2',
    subtopicId: 'al-bus-4-2',
    number: 11,
    stimulus: '[CIE 9609 / AQA 7132 Case] TimberCraft Ltd manufactures modular desks selling at £160 each (variable cost £95, allocated fixed overhead £35 = £130 full cost). It has 40% spare capacity when an overseas university offers £115 per desk for a one-off order of 300 desks.',
    diagram: 'break-even-chart',
    parts: [
      {
        id: 'albus-exam-4-2a',
        label: '(a)',
        prompt: 'Calculate the total contribution of the university order and evaluate whether TimberCraft Ltd should accept it.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Unit contribution = £115 − £95 = £20 per desk, so total contribution = 300 × £20 = £6000 extra profit because fixed costs are already paid and spare capacity exists. However, TimberCraft must check whether regular UK buyers paying £160 will discover the discount and demand lower prices or if brand image suffers. Overall, because it is a one-off overseas university order using 40% spare capacity, accepting is recommended.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates unit contribution = £20', numericMatch: { value: 20, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'Calculates total contribution = £6000', numericMatch: { value: 6000, tolerance: 1 } },
            { id: 'mp3', markDescription: 'Qualitative evaluation: risk of upsetting full-price customers / brand image', requiredKeywordGroups: [['regular', 'existing', 'full-price', 'brand', 'discount']] },
            { id: 'mp4', markDescription: 'Justified final recommendation linked to overseas/one-off spare capacity', requiredKeywordGroups: [['overall', 'recommend', 'accept', 'spare capacity', 'overseas']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-4-3',
    subtopicId: 'al-bus-4-3',
    number: 12,
    stimulus: '[CIE 9609 / AQA 7132 Case] NordWear Plc currently offshores jacket manufacturing to low-wage factories in Asia, but shipping delays and a viral defect scandal have caused a 14% drop in European repeat sales.',
    parts: [
      {
        id: 'albus-exam-4-3a',
        label: '(a)',
        prompt: 'Evaluate whether NordWear Plc should reshore production back to Europe and introduce Total Quality Management (TQM).',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Reshoring shortens lead times, eliminates shipping disruption, and strengthens quality and ethical oversight, while TQM embeds zero-defect accountability across every worker to restore repeat sales. However, European wages and factory setup costs are significantly higher and TQM requires expensive long-term staff training and cultural buy-in. Overall, reshoring flagship premium lines with TQM while retaining audited lower-cost sites for basic items balances brand recovery with cost competitiveness.',
          markPoints: [
            { id: 'mp1', markDescription: 'Reshoring advantage: shorter lead times / quality & ethical oversight', requiredKeywordGroups: [['lead time', 'shipping', 'quality', 'ethical', 'oversight']] },
            { id: 'mp2', markDescription: 'TQM advantage: zero-defect culture across all staff restores brand reputation', requiredKeywordGroups: [['tqm', 'zero-defect', 'defect', 'culture', 'reputation']] },
            { id: 'mp3', markDescription: 'Drawbacks: higher European wages/relocation costs and TQM training/culture cost', requiredKeywordGroups: [['wage', 'cost', 'expensive', 'training', 'culture']] },
            { id: 'mp4', markDescription: 'Balanced strategic judgement in context of NordWear', requiredKeywordGroups: [['overall', 'recommend', 'premium', 'balance', 'competitiv']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-5-1',
    subtopicId: 'al-bus-5-1',
    number: 13,
    stimulus: '[CIE 9609 / AQA 7132 Case] FreshPulse Drinks budgeted Q2 revenue of £240,000 and total costs of £175,000. Actual Q2 revenue reached £268,000 while actual costs hit £191,000 after rapid supermarket expansion left the company short of cash.',
    parts: [
      {
        id: 'albus-exam-5-1a',
        label: '(a)',
        prompt: 'Calculate the net profit variance (stating Favourable or Adverse) and evaluate debt factoring as a remedy for FreshPulse’s cash shortage.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Revenue variance = £28,000 Favourable and cost variance = £16,000 Adverse, giving a net profit variance of £12000 Favourable (actual profit £77,000 vs budget £65,000). FreshPulse is experiencing overtrading; debt factoring quickly releases 80–90% of supermarket invoices as immediate cash to pay suppliers, though factoring fees reduce profit margins and aggressive collection may harm supermarket relationships. Overall, short-term factoring combined with negotiating longer supplier trade credit is recommended while growth stabilises.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates net profit variance = £12000', numericMatch: { value: 12000, tolerance: 1 } },
            { id: 'mp2', markDescription: 'Classifies variance as Favourable', requiredKeywordGroups: [['favourable', 'favorable']] },
            { id: 'mp3', markDescription: 'Evaluates debt factoring pro (immediate cash) and con (fees/customer relations)', requiredKeywordGroups: [['cash', 'immediate', 'liquid'], ['fee', 'margin', 'cost', 'relationship']] },
            { id: 'mp4', markDescription: 'Supported recommendation addressing overtrading', requiredKeywordGroups: [['overtrading', 'recommend', 'overall', 'trade credit']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-5-2',
    subtopicId: 'al-bus-5-2',
    number: 14,
    stimulus: '[CIE 9609 / AQA 7132 Case] MetroGrid Plc reports Operating Profit of £4.2m, Non-Current Liabilities of £18m, and Shareholders’ Equity of £12m (Capital Employed = £30m). Receivables days climbed from 35 to 68 days while the central bank plans two interest-rate rises.',
    parts: [
      {
        id: 'albus-exam-5-2a',
        label: '(a)',
        prompt: 'Calculate MetroGrid’s ROCE and Gearing Ratio, and advise the board on its top financial priority.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'ROCE = (£4.2m ÷ £30m) × 100 = 14% and Gearing Ratio = (£18m ÷ £30m) × 100 = 60%. Because MetroGrid is highly geared (>50%) just as interest rates rise, debt-servicing costs will surge, while 68 receivables days indicates dangerously slow cash collection. Overall, the board should tighten credit control immediately and use retained profits or a share rights issue to pay down debt and cut gearing below 50%.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates ROCE = 14%', numericMatch: { value: 14, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'Calculates Gearing = 60%', numericMatch: { value: 60, tolerance: 0.1 } },
            { id: 'mp3', markDescription: 'Identifies high gearing risk with rising interest rates + slow 68 receivables days', requiredKeywordGroups: [['highly geared', 'interest rate', 'debt'], ['receivables', 'cash', 'credit control']] },
            { id: 'mp4', markDescription: 'Strategic recommendation (rights issue / retained profit / tighten credit control)', requiredKeywordGroups: [['rights issue', 'share', 'retained profit', 'credit control', 'reduce gearing']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-5-3',
    subtopicId: 'al-bus-5-3',
    number: 15,
    stimulus: '[CIE 9609 / AQA 7132 Case] VoltPack Ltd is appraising a £120,000 automated battery line with net cash inflows of £60,000 in Year 1 (DF 0.91), £60,000 in Year 2 (DF 0.83), and £50,000 in Year 3 (DF 0.75) at a 10% discount rate.',
    parts: [
      {
        id: 'albus-exam-5-3a',
        label: '(a)',
        prompt: 'Calculate the Net Present Value (NPV) of the project and evaluate ONE quantitative limitation and ONE qualitative factor before deciding.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Present values: Year 1 = £54,600, Year 2 = £49,800, Year 3 = £37,500 → Total PV = £141,900 → NPV = £141,900 − £120,000 = +£21900. Because NPV is positive, the investment earns above the 10% cost of capital; however, cash flows and the 10% discount rate are uncertain forecasts that could worsen if interest rates rise or battery rivals cut prices. Qualitatively, VoltPack must assess staff retraining needs and redundancy morale impacts before committing.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates Total PV = £141,900 (or Year PVs 54.6k, 49.8k, 37.5k)', numericMatch: { value: 141900, tolerance: 50 } },
            { id: 'mp2', markDescription: 'Calculates NPV = £21900', numericMatch: { value: 21900, tolerance: 50 } },
            { id: 'mp3', markDescription: 'Quantitative limitation: forecast uncertainty / discount rate sensitivity', requiredKeywordGroups: [['forecast', 'uncertain', 'estimate', 'discount rate', 'interest rate']] },
            { id: 'mp4', markDescription: 'Qualitative factor: staff morale, retraining, redundancy, or strategic fit', requiredKeywordGroups: [['morale', 'retrain', 'redundan', 'staff', 'brand', 'ethic', 'objective']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-6-1',
    subtopicId: 'al-bus-6-1',
    number: 16,
    stimulus: '[CIE 9609 / AQA 7132 Case] ApexAuto Plc exports 70% of its vehicles to North America. The domestic currency has appreciated by 14% while environmental pressure groups threaten a boycott unless ApexAuto transitions rapidly to electric factories, which factory unions oppose over job-loss fears.',
    diagram: 'business-cycle',
    parts: [
      {
        id: 'albus-exam-6-1a',
        label: '(a)',
        prompt: 'Analyse the impact of the 14% currency appreciation on ApexAuto Plc and recommend how management should use Lewin’s Force Field Analysis and Kotter’s methods to implement the electric transition.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Under SPICED, a 14% currency appreciation makes ApexAuto’s exported cars significantly dearer in North America, cutting export volume or forcing margin cuts, though imported battery parts become cheaper. Using Lewin’s Force Field Analysis, management should strengthen driving forces (ESG demand, avoiding pressure-group boycotts) while weakening restraining forces (union fear of redundancy). Applying Kotter’s methods of transparent communication, union participation in workflow design, and funded EV retraining will reduce resistance and protect long-term competitiveness.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies SPICED: exports dearer cutting US demand/margins, imports cheaper', requiredKeywordGroups: [['spiced', 'dearer', 'more expensive'], ['export', 'import', 'margin']] },
            { id: 'mp2', markDescription: 'Applies Lewin’s Force Field: strengthen driving forces & weaken restraining forces', requiredKeywordGroups: [['driving'], ['restraining', 'resistance', 'weaken']] },
            { id: 'mp3', markDescription: 'Applies Kotter’s methods: communication, participation, retraining/facilitation', requiredKeywordGroups: [['communicat', 'participat', 'involv', 'retrain', 'train']] },
            { id: 'mp4', markDescription: 'Links to CSR/boycott risk and long-term strategic competitiveness', requiredKeywordGroups: [['boycott', 'csr', 'reputation', 'long-term', 'competitiv']] },
          ],
        },
      },
    ],
  },
];
