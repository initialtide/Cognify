import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_ECON_UNITS_1_3_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Economic Methodology, Price Mechanism & Elasticities',
    subtopics: [
      {
        id: 'al-econ-1-1',
        code: '1.1',
        slug: '1.1-scarcity-positive-normative-ppc-behavioural',
        title: 'Scarcity, Positive vs Normative Statements, PPC & Behavioural Economics',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-1-2',
        code: '1.2',
        slug: '1.2-price-mechanism-consumer-producer-surplus-welfare',
        title: 'Price Mechanism, Consumer & Producer Surplus & Welfare Analysis',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-1-3',
        code: '1.3',
        slug: '1.3-elasticities-ped-yed-xed-pes-applications',
        title: 'Elasticities: PED, YED, XED & PES Quantitative Applications',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Market Failure & Government Intervention',
    subtopics: [
      {
        id: 'al-econ-2-1',
        code: '2.1',
        slug: '2.1-externalities-public-goods-asymmetric-info',
        title: 'Externalities (MSC, MPC, MSB, MPB), Public Goods & Asymmetric Information',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-2-2',
        code: '2.2',
        slug: '2.2-indirect-taxes-incidence-pigouvian',
        title: 'Indirect Taxes, Tax Incidence & Pigouvian Internalisation',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-2-3',
        code: '2.3',
        slug: '2.3-subsidies-price-controls-permits-gov-failure',
        title: 'Subsidies, Price Controls (Max/Min Prices), Permits & Government Failure',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Theory of the Firm & Market Structures',
    subtopics: [
      {
        id: 'al-econ-3-1',
        code: '3.1',
        slug: '3.1-costs-revenues-firm-objectives',
        title: 'Short-Run & Long-Run Costs, Marginal/Average Revenue & Firm Objectives',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-3-2',
        code: '3.2',
        slug: '3.2-perfect-competition-shutdown-efficiency',
        title: 'Perfect Competition, Shut-Down Point & Economic Efficiency',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-3-3',
        code: '3.3',
        slug: '3.3-monopoly-price-discrimination-regulation',
        title: 'Monopoly, Natural Monopoly, Third-Degree Price Discrimination & Regulation',
        readingMinutes: 14,
        hasDeepContent: true,
      },
      {
        id: 'al-econ-3-4',
        code: '3.4',
        slug: '3.4-oligopoly-game-theory-contestable-markets',
        title: 'Oligopoly, Kinked Demand, Game Theory, Collusion & Contestable Markets',
        readingMinutes: 14,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_ECON_UNITS_1_3_NOTES: Record<string, NoteLesson> = {
  /* =========================================================================
   * 1.1 SCARCITY, POSITIVE VS NORMATIVE, PPC & BEHAVIOURAL ECONOMICS
   * ========================================================================= */
  'al-econ-1-1': {
    subtopicId: 'al-econ-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Scarcity, Positive vs Normative Statements, PPC & Behavioural Economics',
    readingMinutes: 12,
    videoTitle: 'Economic Assumptions | Edexcel IGCSE Economics (9-1)',
    youtubeId: 'o2qU2Qzig40',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:45',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Positive vs Normative Statements & Ceteris Paribus', cardId: 'al-econ-1-1-c1' },
      { time: '3:30', seconds: 210, label: 'Concave PPC, Increasing Opportunity Cost & Growth', cardId: 'al-econ-1-1-c2' },
      { time: '7:10', seconds: 430, label: 'Rationality Assumptions vs Behavioural Economics', cardId: 'al-econ-1-1-c3' },
    ],
    cards: [
      {
        id: 'al-econ-1-1-c1',
        title: 'Economic Methodology: Positive vs Normative Statements & Ceteris Paribus',
        summary: 'Economics models human choices as a social science by separating empirically testable positive claims from value-laden normative judgements.',
        bullets: [
          '**Positive statements** are objective claims about what is, was, or will be that can be empirically **tested, verified, or falsified** against real-world data — even if the claim turns out to be factually wrong.',
          '**Normative statements** embed subjective **value judgements** about what *ought* or *should* happen (equity, fairness, justice) and cannot be proved or disproved by evidence alone.',
          '**Ceteris paribus ("all other things being equal")** allows economists to isolate the causal effect of one variable (e.g. a 10% tax rise) in models because controlled laboratory experiments on whole economies are impossible.',
        ],
        subsections: [
          {
            heading: 'Distinguishing Positive Predictions from Normative Policy Claims',
            bullets: [
              'Policy debates almost always combine a **positive forecast** (magnitude of employment impact) with a **normative weighting** (how much society values reducing inequality versus higher prices).',
              'Words such as **"should", "ought", "fairer", "excessive", or "too high"** flag a normative value judgement.',
            ],
            exampleHeading: 'Worked Classification Check',
            examples: [
              'Positive: "Raising the UK National Living Wage by 10% increases annual payroll costs in hospitality by £1.2bn." (Testable with ONS data.)',
              'Normative: "The government ought to raise the minimum wage to £15/hour to achieve a fairer income distribution." (Depends on value judgements about fairness.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'positive statement', definition: 'An objective statement that can be empirically tested and verified or refuted by reference to factual evidence.' },
          { term: 'ceteris paribus', definition: 'The modelling assumption that all other influencing variables remain constant while analysing one causal change.' },
        ],
      },
      {
        id: 'al-econ-1-1-c2',
        title: 'Marginal Opportunity Cost & Concave vs Linear PPCs',
        summary: 'A concave Production Possibility Curve reflects imperfect factor substitutability and rising marginal opportunity cost as resources shift between sectors.',
        bullets: [
          '**Productive efficiency** occurs at every point **on the PPC boundary** (maximum output from given inputs); **allocative efficiency** occurs only at the single point on the curve matching society’s marginal preferences (`P = MC`).',
          '**Concave (bowed-out) PPC** arises because factors of production are **not equally suited** to producing both goods, generating **increasing marginal opportunity cost** as specialisation deepens; a **straight-line PPC** implies constant opportunity cost.',
          '**Outward shifts** reflect increases in the **quantity or quality (productivity)** of factors of production (capital accumulation, technological innovation, human capital), whereas **pivotal shifts** reflect sector-specific innovation.',
        ],
        subsections: [
          {
            heading: 'Capital vs Consumer Goods Trade-Off & Marginal Cost Math',
            bullets: [
              'Allocating a greater share of output to **capital goods** above the depreciation threshold sacrifices current consumption today in exchange for a larger **outward PPC shift** in future periods.',
              'Marginal opportunity cost of Good X = `ΔGood Y foregone ÷ ΔGood X gained`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Increasing Opportunity Cost',
            examples: [
              'An economy moves along its PPC from Combination A (100 capital goods, 0 consumer goods) to B (90 capital, 40 consumer): opportunity cost = `10 ÷ 40 = 0.25` capital goods per consumer good.',
              'Moving further from B (90, 40) to C (60 capital, 80 consumer) sacrifices 30 capital goods for another 40 consumer goods: marginal opportunity cost rises to `30 ÷ 40 = 0.75` capital goods per consumer good.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'increasing opportunity cost', definition: 'Rising sacrifice of one good required to produce each extra unit of another good due to imperfect factor substitutability.' },
        ],
        diagram: 'production-possibility-curve',
      },
      {
        id: 'al-econ-1-1-c3',
        title: 'Rational Decision-Making vs Behavioural Economics',
        summary: 'Neoclassical theory assumes utility-maximising homo economicus, whereas behavioural economics incorporates cognitive biases, heuristics, and choice architecture.',
        bullets: [
          '**Traditional rationality** assumes consumers maximise **marginal utility per pound spent** (`MUa/Pa = MUb/Pb`), firms maximise profit (`MC = MR`), and agents hold complete information and stable preferences.',
          '**Bounded rationality (Herbert Simon)** recognises computational limits, time constraints, and asymmetric information, leading consumers to use **heuristics** (mental shortcuts) and **satisfice** rather than optimise.',
          '**Cognitive biases & choice architecture**: **anchoring** (over-relying on an initial reference price), **framing** (reacting differently to "90% fat-free" vs "10% fat"), **loss aversion** (pain of losing £100 outweighs joy of gaining £100 by ~2×), **bounded self-control** (hyperbolic discounting), and **default nudges** (auto-enrolment pensions).',
        ],
        subsections: [
          {
            heading: 'Nudges & Choice Architecture in Public Policy',
            bullets: [
              '**Default choices (opt-out)** leverage **status quo bias** to boost desirable behaviour (e.g. UK workplace pension auto-enrolment raised participation from ~47% to over 85%) while preserving freedom of choice (**libertarian paternalism**).',
              '**Mandated choice** and **salience framing** (traffic-light calorie labels, plain cigarette packaging) counter imperfect information without heavy fiscal cost.',
            ],
            exampleHeading: 'Worked Quantitative Check: Utility Maximisation vs Loss Aversion',
            examples: [
              'Suppose a rational consumer gets `MU = 30 utils` from coffee (£3 → `10 utils/£`) and `MU = 24 utils` from a pastry (£4 → `6 utils/£`): reallocate spending toward coffee until `MUc/Pc = MUp/Pp`.',
              'Under loss aversion (coefficient λ ≈ 2.0), a £0.10 plastic bag **charge** (framed as a loss) cut UK single-use bag usage by over 85%, far exceeding a £0.10 reusable bag **bonus** (framed as a gain).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'bounded rationality', definition: 'Decision-making constrained by cognitive limits, finite time, and incomplete information, causing agents to satisfice.' },
          { term: 'choice architecture', definition: 'Deliberate design of how options are presented (defaults, framing, salience) to nudge decisions without banning alternatives.' },
        ],
        memoryAid: 'Behavioural Biases = A-F-L-H-S: Anchoring, Framing, Loss aversion, Herding/Hyperbolic discounting, Status quo bias!',
        commonMistake: 'NEVER claim a false factual statement (e.g. "UK inflation was 40% in 2024") is a normative statement — it is still a POSITIVE statement because it can be empirically tested and proved false!',
      },
    ],
    keyTerms: [
      { term: 'Positive statement', definition: 'Objective, empirically testable claim that can be verified or falsified with evidence.' },
      { term: 'Normative statement', definition: 'Subjective claim incorporating value judgements about what ought to be.' },
      { term: 'Ceteris paribus', definition: 'Assumption holding all other variables constant to isolate a single causal relationship.' },
      { term: 'Bounded rationality', definition: 'Limits on information, time, and cognitive processing that prevent full utility maximisation.' },
      { term: 'Choice architecture', definition: 'Structuring decision environments (e.g. defaults, framing) to nudge behaviour without coercion.' },
    ],
    checklistPoints: [
      'Distinguish positive statements from normative value judgements and explain the role of ceteris paribus',
      'Calculate increasing marginal opportunity cost along a concave PPC and explain capital-goods growth trade-offs',
      'Evaluate neoclassical rational utility maximisation against behavioural biases (anchoring, framing, loss aversion, default nudges)',
    ],
  },

  /* =========================================================================
   * 1.2 PRICE MECHANISM, CONSUMER & PRODUCER SURPLUS & WELFARE ANALYSIS
   * ========================================================================= */
  'al-econ-1-2': {
    subtopicId: 'al-econ-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Price Mechanism, Consumer & Producer Surplus & Welfare Analysis',
    readingMinutes: 12,
    videoTitle: 'Consumer Surplus, Producer Surplus & Welfare Loss — IB Economics',
    youtubeId: 'cKlKmTpJ08g',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:20',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Price Mechanism Functions & Interrelated Markets', cardId: 'al-econ-1-2-c1' },
      { time: '3:15', seconds: 195, label: 'Calculating Consumer Surplus & Producer Surplus', cardId: 'al-econ-1-2-c2' },
      { time: '6:20', seconds: 380, label: 'Equilibrium Shifts, Welfare Changes & Deadweight Loss', cardId: 'al-econ-1-2-c3' },
    ],
    cards: [
      {
        id: 'al-econ-1-2-c1',
        title: 'The Price Mechanism (SIR) & Interrelated Markets',
        summary: 'In competitive markets, equilibrium prices autonomously coordinate millions of decentralised buyers and sellers across linked goods.',
        bullets: [
          '**Three functions of prices (SIR)**: **Signalling** (rising price communicates excess demand/scarcity), **Incentivising** (higher price promises greater profit, encouraging firms to expand Qs), and **Rationing** (higher price chokes off demand from buyers with lower willingness to pay).',
          '**Interrelated demand**: **Competitive demand** (substitutes like rail vs coach), **Joint demand** (complements like EVs & charging cables), **Derived demand** (factor input demanded for final output, e.g. steel for cars), and **Composite demand** (one resource with competing uses, e.g. milk for cheese vs butter).',
          '**Joint supply** occurs when producing one good simultaneously yields a by-product (e.g. beef and leather; crude oil refining yielding petrol and aviation fuel), so higher demand for beef raises supply and lowers price of leather.',
        ],
        subsections: [
          {
            heading: 'Tracing Disequilibrium Back to Equilibrium',
            bullets: [
              'If demand shifts right (`D₁ → D₂`), at initial price `P*` there is **excess demand (`Qd > Qs`)**, creating upward pressure on price.',
              'As price rises from `P*` to `P₂`, quantity supplied **extends** along S and quantity demanded **contracts** along `D₂` until the market clears at `E₂`.',
            ],
            exampleHeading: 'Concrete Application: Composite Demand for Land',
            examples: [
              'A housing boom raises demand for residential land; because land is in composite demand, supply of agricultural land falls, driving up farmland prices and food costs.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'derived demand', definition: 'Demand for a factor of production or intermediate good that arises strictly from demand for the final product it helps produce.' },
          { term: 'composite demand', definition: 'Demand for a good or resource that has two or more competing alternative uses.' },
        ],
        diagram: 'supply-demand-equilibrium',
      },
      {
        id: 'al-econ-1-2-c2',
        title: 'Consumer Surplus, Producer Surplus & Allocative Efficiency',
        summary: 'Consumer and producer surplus quantify net economic welfare created by voluntary exchange and are maximised at competitive equilibrium.',
        bullets: [
          '**Consumer surplus (CS)** is the difference between the maximum price consumers are willing to pay (height of the demand curve) and the actual market price paid (`P*`) — represented by the **triangle below D and above `P*`**.',
          '**Producer surplus (PS)** is the difference between the actual market price received (`P*`) and the minimum price firms are willing to accept (height of the marginal cost/supply curve) — represented by the **triangle above S and below `P*`**.',
          '**Total Social Welfare = CS + PS** is maximised at competitive equilibrium where `P = MC` (**allocative efficiency**), assuming no externalities or market power.',
        ],
        subsections: [
          {
            heading: 'Exact Linear Triangle Area Calculations',
            bullets: [
              'For linear demand with vertical choke intercept `Pmax` and linear supply with vertical intercept `Pmin`:',
              '`CS = ½ × Q* × (Pmax − P*)` and `PS = ½ × Q* × (P* − Pmin)`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Computing CS, PS & Total Welfare',
            examples: [
              'Demand intersects P-axis at £120 (`Pmax = 120`), Supply intersects P-axis at £20 (`Pmin = 20`), and equilibrium occurs at `P* = £60`, `Q* = 500 units`.',
              '`CS = 0.5 × 500 × (120 − 60) = £15,000`; `PS = 0.5 × 500 × (60 − 20) = £10,000`; Total Social Welfare = `£15,000 + £10,000 = £25,000`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'consumer surplus', definition: 'The monetary gain enjoyed by consumers who pay a market price lower than the maximum price they were willing to pay.' },
          { term: 'producer surplus', definition: 'The monetary gain received by producers selling at a market price above the minimum price (marginal cost) they would accept.' },
        ],
      },
      {
        id: 'al-econ-1-2-c3',
        title: 'Welfare Effects of Shifts & Deadweight Welfare Loss',
        summary: 'Curve shifts redistribute and expand or contract total surplus, while output restricted below or pushed above Q* creates deadweight welfare loss.',
        bullets: [
          '**Rightward supply shift** (e.g. productivity gain lowering MC) reduces equilibrium price and expands quantity, unambiguously **increasing consumer surplus** by both a rectangle (cheaper existing units) and a triangle (extra units consumed).',
          '**Elasticity determines surplus size**: the more **price inelastic** demand is, the steeper the demand curve and the **larger the consumer surplus** enjoyed at any given equilibrium price.',
          '**Deadweight welfare loss (DWL)** is the permanent net loss of `CS + PS` when output diverges from the allocatively efficient level `Q*` (due to taxes, monopolies, or price controls).',
        ],
        subsections: [
          {
            heading: 'Quantitative Welfare Change After a Supply Shift',
            bullets: [
              'When price falls from `P₁` to `P₂` and output rises from `Q₁` to `Q₂`, the exact gain in consumer surplus is the trapezium area: `ΔCS = ½ × (Q₁ + Q₂) × (P₁ − P₂)`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Innovation Gain in CS',
            examples: [
              'Battery innovation shifts EV supply right so price falls from £36,000 to £30,000 and annual sales rise from 200,000 to 260,000 cars.',
              'Gain in consumer surplus = `0.5 × (200,000 + 260,000) × £6,000 = 230,000 × £6,000 = £1.38bn`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'deadweight welfare loss', definition: 'Net loss of combined consumer and producer surplus caused when market output is not at the allocatively efficient equilibrium.' },
        ],
        memoryAid: 'Price Mechanism = SIR (Signal, Incentivise, Ration); Consumer Surplus sits UNDER Demand & ABOVE Price (CS = ½ × Q × ΔP)!',
        commonMistake: 'NEVER claim producer surplus equals total economic profit — producer surplus equals Total Revenue minus Total Variable Cost (`TR − TVC`), which includes fixed costs (`Profit + TFC`)!',
      },
    ],
    keyTerms: [
      { term: 'Consumer surplus', definition: 'Difference between maximum willingness to pay and actual market price paid (area below D, above P*).' },
      { term: 'Producer surplus', definition: 'Difference between market price received and minimum supply price (area above S, below P*).' },
      { term: 'Allocative efficiency', definition: 'Resource allocation where price equals marginal cost (P = MC), maximising total social welfare.' },
      { term: 'Derived demand', definition: 'Demand for an input arising solely from demand for the final good it produces.' },
      { term: 'Joint supply', definition: 'Production process where increasing output of one good automatically increases supply of a by-product.' },
    ],
    checklistPoints: [
      'Apply signalling, incentivising, and rationing (SIR) to trace adjustment from disequilibrium to equilibrium',
      'Calculate consumer surplus, producer surplus, and trapezium welfare changes from linear demand/supply data',
      'Distinguish competitive, joint, derived, and composite demand plus joint supply with real-world examples',
    ],
  },

  /* =========================================================================
   * 1.3 ELASTICITIES: PED, YED, XED & PES QUANTITATIVE APPLICATIONS
   * ========================================================================= */
  'al-econ-1-3': {
    subtopicId: 'al-econ-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Elasticities: PED, YED, XED & PES Quantitative Applications',
    readingMinutes: 13,
    videoTitle: 'Income Elasticity of Demand | Edexcel IGCSE Economics (9-1)',
    youtubeId: '9TcZDJfsH5o',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '8:50',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'PED Along Linear Curves & Total Revenue Test', cardId: 'al-econ-1-3-c1' },
      { time: '3:00', seconds: 180, label: 'Income Elasticity (YED) & Cross Elasticity (XED)', cardId: 'al-econ-1-3-c2' },
      { time: '6:10', seconds: 370, label: 'PES Determinants, Time Periods & Commodity Volatility', cardId: 'al-econ-1-3-c3' },
    ],
    cards: [
      {
        id: 'al-econ-1-3-c1',
        title: 'PED, Varying Elasticity Along Linear Curves & Total Revenue',
        summary: 'Price elasticity of demand measures proportional quantity sensitivity to price changes and dictates how pricing alters total and marginal revenue.',
        bullets: [
          '**Formula**: `PED = %ΔQd ÷ %ΔP`. Because price and quantity move inversely for normal demand curves, PED is negative; analysts inspect magnitude `|PED|` (`> 1` elastic, `< 1` inelastic, `= 1` unitary).',
          '**Elasticity vs Slope**: Even on a **straight-line demand curve** with constant slope, `|PED|` falls continuously from `∞` at the vertical intercept, equals `1` at the exact **midpoint** (where Total Revenue is maximised and `MR = 0`), and approaches `0` at the horizontal intercept.',
          '**Total Revenue (TR = P × Q) rule**: When `|PED| < 1` (inelastic), raising P raises TR; when `|PED| > 1` (elastic), cutting P raises TR; at `|PED| = 1`, TR is at its peak.',
        ],
        subsections: [
          {
            heading: 'Determinants of PED (SPLAT)',
            bullets: [
              '**S**ubstitutes (number & closeness), **P**roportion of income spent, **L**uxury vs necessity, **A**ddictiveness/habit, and **T**ime horizon (long-run demand is more elastic as consumers adapt).',
            ],
            exampleHeading: 'Worked Quantitative Example: PED & Total Revenue Impact',
            examples: [
              'A train operator raises peak fare from £40 to £48 (`+20%`), and passenger numbers fall from 10,000 to 9,200 (`−8%`).',
              '`PED = −8% ÷ +20% = −0.40` (price inelastic). Initial `TR₁ = £40 × 10,000 = £400,000`; New `TR₂ = £48 × 9,200 = £441,600` → Revenue rises by **+£41,600 (+10.4%)**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of demand', definition: 'Measure of the responsiveness of quantity demanded of a good to a percentage change in its own price (%ΔQd ÷ %ΔP).' },
          { term: 'unitary elasticity', definition: 'Point where |PED| = 1, meaning a percentage price change triggers an equal percentage quantity change and Total Revenue is maximised.' },
        ],
        diagram: 'elasticity-curves',
      },
      {
        id: 'al-econ-1-3-c2',
        title: 'Income Elasticity (YED) & Cross Elasticity (XED) Strategy',
        summary: 'The algebraic signs (+ or −) of YED and XED classify goods into normal/inferior and substitute/complement categories vital for corporate strategy.',
        bullets: [
          '**YED = %ΔQd ÷ %ΔY (Real Income)**: **Inferior goods** have `YED < 0` (e.g. own-brand value pasta, bus travel); **Normal necessities** have `0 < YED < 1` (staple food, utilities); **Normal luxury/superior goods** have `YED > 1` (foreign holidays, sports cars).',
          '**XED = %ΔQd(Good A) ÷ %ΔP(Good B)**: **Substitutes** have `XED > 0` (large positive = close substitutes); **Complements** have `XED < 0` (large negative = strong complements); **Unrelated goods** have `XED ≈ 0`.',
          '**Business planning**: Firms diversify across **low-YED/negative-YED** lines to stabilise cash flow in recessions, and track **XED** to anticipate rival price wars or bundle strong complements (e.g. consoles + games).',
        ],
        subsections: [
          {
            heading: 'Worked Numerical YED & XED Calculations',
            bullets: [
              'Always preserve and interpret the **positive or negative sign** explicitly on A-Level papers — dropping the sign loses classification marks!',
            ],
            exampleHeading: 'Worked Quantitative Example: YED & XED Applied',
            examples: [
              'Real household income falls by `−5%` during a recession. Sales of discount supermarket groceries rise by `+4%` → `YED = +4% ÷ −5% = −0.80` (inferior good). Sales of boutique cruises fall by `−12%` → `YED = −12% ÷ −5% = +2.40` (income-elastic luxury).',
              'If rival Coffee Chain B cuts latte prices by `−10%` and Chain A’s sales drop by `−15%`, `XED = −15% ÷ −10% = +1.50` (strong substitute → Chain A must differentiate or respond).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'income elasticity of demand', definition: 'Responsiveness of quantity demanded to a change in real consumer income (%ΔQd ÷ %ΔY).' },
          { term: 'cross elasticity of demand', definition: 'Responsiveness of quantity demanded of Good A to a change in the price of Good B (%ΔQdA ÷ %ΔPB).' },
        ],
      },
      {
        id: 'al-econ-1-3-c3',
        title: 'Price Elasticity of Supply (PES) & Commodity Price Volatility',
        summary: 'PES measures how swiftly firms expand output after a price rise and explains why primary commodities endure sharper price swings than manufactures.',
        bullets: [
          '**Formula**: `PES = %ΔQs ÷ %ΔP` (always positive by the Law of Supply; `> 1` elastic, `< 1` inelastic). A linear supply curve passing through the origin has `PES = 1` everywhere.',
          '**Determinants of PES**: **Spare productive capacity**, **inventory/stock levels & perishability**, **production time lags** (momentary vs short run vs long run), **factor mobility/substitutability**, and **barriers to entry**.',
          '**Primary commodity volatility**: Agricultural crops and minerals have **highly inelastic PES** (long growing/mining lags) AND **inelastic PED** (essential raw inputs), so modest supply or demand shocks cause massive price spikes and unstable farm incomes.',
        ],
        subsections: [
          {
            heading: 'Evaluating Real-World Elasticity Estimates',
            bullets: [
              'Empirical elasticity estimates rely on **historical survey/scanner data**, assume *ceteris paribus* (ignoring simultaneous changes in tastes, income, or rival prices), and shift over time as new substitutes emerge.',
            ],
            exampleHeading: 'Worked Quantitative Example: PES in Housing vs Smartphones',
            examples: [
              'House prices rise `+15%` over a year, while newly built housing supply rises only `+3%` → `PES = +3% ÷ +15% = +0.20` (highly price inelastic due to planning laws, land scarcity, and construction lags).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of supply', definition: 'Measure of the responsiveness of quantity supplied of a good to a percentage change in its price (%ΔQs ÷ %ΔP).' },
        ],
        memoryAid: 'Always keep SIGNS for YED & XED: YED (− Inferior, + Normal, >+1 Luxury); XED (+ Substitute, − Complement)!',
        commonMistake: 'NEVER confuse the slope of a demand curve with its PED — a straight-line demand curve has a constant slope, yet PED changes at every single point along it (elastic above midpoint, unitary at midpoint, inelastic below midpoint)!',
      },
    ],
    keyTerms: [
      { term: 'Price elasticity of demand (PED)', definition: 'Percentage change in quantity demanded divided by percentage change in own price.' },
      { term: 'Income elasticity of demand (YED)', definition: 'Percentage change in quantity demanded divided by percentage change in real income.' },
      { term: 'Cross elasticity of demand (XED)', definition: 'Percentage change in quantity demanded of Good A divided by percentage change in price of Good B.' },
      { term: 'Price elasticity of supply (PES)', definition: 'Percentage change in quantity supplied divided by percentage change in price.' },
      { term: 'Inferior good', definition: 'A good with negative income elasticity of demand (YED < 0) whose demand falls as real income rises.' },
    ],
    checklistPoints: [
      'Calculate PED, YED, XED, and PES accurately and explain why PED varies along a linear demand curve',
      'Link PED magnitude to Total Revenue changes and apply YED/XED signs to corporate pricing & product strategy',
      'Explain why inelastic PES and PED cause severe price volatility in primary commodity and housing markets',
    ],
  },

  /* =========================================================================
   * 2.1 EXTERNALITIES, PUBLIC GOODS & ASYMMETRIC INFORMATION
   * ========================================================================= */
  'al-econ-2-1': {
    subtopicId: 'al-econ-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Externalities (MSC, MPC, MSB, MPB), Public Goods & Asymmetric Information',
    readingMinutes: 13,
    videoTitle: 'Market failure - What is MPB, MSB, MPC, & MSC? IB Economics',
    youtubeId: 'KaoRNDiFEmU',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:10',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'MSC, MPC, MSB, MPB & Deadweight Welfare Loss', cardId: 'al-econ-2-1-c1' },
      { time: '3:50', seconds: 230, label: 'Pure Public Goods, Free Riders & Common-Pool Resources', cardId: 'al-econ-2-1-c2' },
      { time: '7:30', seconds: 450, label: 'Asymmetric Information, Adverse Selection & Moral Hazard', cardId: 'al-econ-2-1-c3' },
    ],
    cards: [
      {
        id: 'al-econ-2-1-c1',
        title: 'Marginal Social vs Private Curves (MSC/MPC/MSB/MPB) & Welfare Loss',
        summary: 'Externalities drive a wedge between private and social marginal curves, causing free markets to miss the social optimum where MSB = MSC.',
        bullets: [
          '**Core identities**: `MSC = MPC + MEC` (Marginal Social Cost = Marginal Private Cost + Marginal External Cost) and `MSB = MPB + MEB` (Marginal Social Benefit = Marginal Private Benefit + Marginal External Benefit).',
          '**Negative production externality** (e.g. factory emissions): `MSC > MPC`. The free market produces at `Qm` (`MPC = MPB`), **overproducing** by `Qm − Qopt` compared to the social optimum `Qopt` (`MSC = MSB`). Every excess unit has `MSC > MSB`, creating a **welfare loss triangle pointing towards `Qopt`**.',
          '**Positive consumption externality** (e.g. vaccinations/merit goods): `MSB > MPB`. The free market **under-consumes** (`Qm < Qopt`), forfeiting potential social welfare where `MSB > MSC` between `Qm` and `Qopt`.',
        ],
        subsections: [
          {
            heading: 'Four Externality Cases & Welfare Loss Area Calculation',
            bullets: [
              '**Negative consumption** (tobacco/alcohol/SUV congestion): `MPB > MSB` → over-consumption (`Qm > Qopt`). **Positive production** (open-source R&D, beekeeping pollination): `MPC > MSC` → under-production (`Qm < Qopt`).',
              'Deadweight welfare loss triangle area = `½ × |Qm − Qopt| × |External Cost or Benefit at Qm|`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Computing Externality Welfare Loss',
            examples: [
              'A cement factory emits CO₂ with a constant Marginal External Cost of `£40/tonne`. Free-market output is `Qm = 12,000 tonnes`, whereas the socially optimal output (`MSC = MSB`) is `Qopt = 9,000 tonnes`.',
              'Overproduction = `12,000 − 9,000 = 3,000 tonnes`. Deadweight welfare loss = `0.5 × 3,000 × £40 = £60,000`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'marginal external cost', definition: 'Spillover cost imposed on third parties outside the market transaction from producing or consuming one extra unit.' },
          { term: 'socially optimal output', definition: 'Output level Qopt where Marginal Social Benefit equals Marginal Social Cost (MSB = MSC), eliminating deadweight welfare loss.' },
        ],
        diagram: 'externality-market-failure',
      },
      {
        id: 'al-econ-2-1-c2',
        title: 'Public Goods, Quasi-Public Goods & Tragedy of the Commons',
        summary: 'Non-excludability and non-rivalry cause complete market failure (missing markets), while non-excludable rivalrous commons suffer over-exploitation.',
        bullets: [
          '**Pure public goods** (national defence, flood barriers, street lighting) are strictly **non-excludable** (non-payers cannot be barred from benefiting) and **non-rivalrous** (one person’s consumption does not diminish availability for others; `MC of extra user = 0`).',
          '**The Free-Rider Problem**: Rational consumers conceal their true willingness to pay, hoping to benefit for free once others pay → private firms earn zero revenue → **complete market failure (missing market)** requiring state provision funded by taxation.',
          '**Quasi-public goods** (congested motorways, paywall broadcasting) become partially excludable or rivalrous via technology/capacity limits; **common-pool resources** (ocean fisheries, atmosphere) are **non-excludable but rivalrous**, causing the **Tragedy of the Commons** without property rights or Elinor Ostrom’s local community governance.',
        ],
        subsections: [
          {
            heading: 'Classifying Goods in the 2×2 Excludability/Rivalry Matrix',
            bullets: [
              '**Private goods**: Excludable & Rivalrous (bread, smartphones). **Club goods**: Excludable & Non-rivalrous (Netflix, toll roads off-peak). **Common resources**: Non-excludable & Rivalrous (wild fish stocks). **Pure public goods**: Non-excludable & Non-rivalrous (lighthouses).',
            ],
            exampleHeading: 'Concrete Application: Solving the Tragedy of the Commons',
            examples: [
              'Assigning enforceable Individual Transferable Quotas (ITQs) in Iceland’s cod fisheries converted an open-access common resource into regulated property rights, rebuilding fish biomass by >60%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'free-rider problem', definition: 'Incentive to consume a non-excludable public good without contributing to its cost, preventing profitable private supply.' },
          { term: 'tragedy of the commons', definition: 'Over-exploitation and depletion of non-excludable, rivalrous common-pool resources when individuals ignore external depletion costs.' },
        ],
      },
      {
        id: 'al-econ-2-1-c3',
        title: 'Asymmetric Information: Adverse Selection & Moral Hazard',
        summary: 'When one side of a transaction possesses superior private information, markets misprice risk, shrink, or encourage reckless behaviour.',
        bullets: [
          '**Asymmetric information** occurs when buyers and sellers hold unequal knowledge about product quality or risk — distinct from symmetric **imperfect information** (where neither side knows the future).',
          '**Adverse selection (pre-contractual hidden information)**: Illustrated by **George Akerlof’s "Market for Lemons"** (used cars) and private health insurance; uninformed buyers offer only an average price, driving high-quality sellers or low-risk customers out of the market until it collapses.',
          '**Moral hazard (post-contractual hidden action)**: Once insured or protected from downside loss (e.g. comprehensive car insurance or "too-big-to-fail" bank bailouts in 2008), an agent takes excessive risk because another party bears the cost.',
        ],
        subsections: [
          {
            heading: 'Market & Government Solutions to Information Failure',
            bullets: [
              '**Signalling** (warranties, university degrees, certified vehicle histories) and **screening** (insurance excesses/deductibles, no-claims bonuses) help private markets mitigate asymmetric information.',
              'Governments mandate **disclosure laws**, professional licensing, food hygiene ratings, and bank capital adequacy ratios.',
            ],
            exampleHeading: 'Worked Quantitative Check: Adverse Selection in Used Cars',
            examples: [
              'Suppose 50% of used cars are "peaches" worth £10,000 and 50% are "lemons" worth £4,000. Uninformed buyers offer only the expected value `(0.5 × £10,000) + (0.5 × £4,000) = £7,000`. Peach owners refuse £7,000 and exit, leaving only £4,000 lemons in the market!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'adverse selection', definition: 'Pre-contractual asymmetric information where hidden traits cause high-risk/low-quality agents to dominate a market.' },
          { term: 'moral hazard', definition: 'Post-contractual asymmetric information where insulation from full risk incentivises riskier behaviour at another party’s expense.' },
        ],
        memoryAid: 'Welfare loss arrow ALWAYS points to the SOCIAL OPTIMUM (MSB = MSC); Adverse Selection = BEFORE contract, Moral Hazard = AFTER contract!',
        commonMistake: 'NEVER classify NHS healthcare or state schools as "pure public goods" — they are RIVALROUS (a bed or desk taken by one person cannot be simultaneously used by another) and EXCLUDABLE, making them MERIT GOODS provided publicly!',
      },
    ],
    keyTerms: [
      { term: 'Marginal Social Cost (MSC)', definition: 'Sum of Marginal Private Cost and Marginal External Cost (MSC = MPC + MEC).' },
      { term: 'Marginal Social Benefit (MSB)', definition: 'Sum of Marginal Private Benefit and Marginal External Benefit (MSB = MPB + MEB).' },
      { term: 'Pure public good', definition: 'Good that is both non-excludable and non-rivalrous, creating a free-rider problem.' },
      { term: 'Adverse selection', definition: 'Market distortion before a contract is signed because hidden quality/risk drives out good risks.' },
      { term: 'Moral hazard', definition: 'Increased risk-taking after a contract is signed because another party bears the downside cost.' },
    ],
    checklistPoints: [
      'Draw and interpret all four externality diagrams (MSC/MPC/MSB/MPB) and calculate deadweight welfare loss triangles',
      'Distinguish pure public goods, quasi-public goods, merit goods, and common-pool resources (Tragedy of the Commons)',
      'Differentiate adverse selection (Akerlof’s lemons) from moral hazard and evaluate signalling/screening remedies',
    ],
  },

  /* =========================================================================
   * 2.2 INDIRECT TAXES, TAX INCIDENCE & PIGOUVIAN INTERNALISATION
   * ========================================================================= */
  'al-econ-2-2': {
    subtopicId: 'al-econ-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Indirect Taxes, Tax Incidence & Pigouvian Internalisation',
    readingMinutes: 12,
    videoTitle: 'Market Failure Tax Diagram IB Economics',
    youtubeId: 'N7CH7P79msY',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '8:45',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Specific vs Ad Valorem Taxes & Pigouvian Internalisation', cardId: 'al-econ-2-2-c1' },
      { time: '2:55', seconds: 175, label: 'Consumer vs Producer Tax Incidence & PED/PES Rules', cardId: 'al-econ-2-2-c2' },
      { time: '5:50', seconds: 350, label: 'Evaluating Pigouvian Taxes: Regressivity & Information Gaps', cardId: 'al-econ-2-2-c3' },
    ],
    cards: [
      {
        id: 'al-econ-2-2-c1',
        title: 'Specific vs Ad Valorem Taxes & Pigouvian Internalisation',
        summary: 'Pigouvian indirect taxes shift MPC vertically upward to coincide with MSC at Qopt, forcing polluters and consumers to internalise external costs.',
        bullets: [
          '**Specific (unit) tax** imposes a fixed monetary levy per unit (e.g. £0.53/litre fuel duty, £0.24/litre sugar levy), shifting the supply curve (`MPC`) **upward in parallel** by the exact tax `t`.',
          '**Ad valorem tax** imposes a fixed percentage of price (e.g. 20% UK VAT), causing the post-tax supply curve to **pivot/diverge upward** as price rises (larger monetary gap at higher prices).',
          '**Pigouvian internalisation**: Setting specific tax `t = MEC` at the socially optimal output `Qopt` shifts `MPC → MPC + tax = MSC`, raising price from `Pm` to `Popt`, cutting output from `Qm` to `Qopt`, and **eliminating the externality welfare loss triangle**.',
        ],
        subsections: [
          {
            heading: 'Why Pigouvian Taxes Preserve Price Signals',
            bullets: [
              'Unlike outright bans, a Pigouvian tax works **through the price mechanism**, giving firms continuous financial incentives to innovate cleaner technology to lower their future tax bill (**dynamic efficiency**).',
            ],
            exampleHeading: 'Concrete Check: UK Soft Drinks Industry Levy (SDIL)',
            examples: [
              'By taxing high-sugar drinks at £0.24/litre (>8g sugar/100ml) and £0.18/litre (5–8g), the UK levy incentivised manufacturers to reformulate recipes, cutting total sugar sold in soft drinks by over 35%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Pigouvian tax', definition: 'An indirect tax set equal to the Marginal External Cost at the social optimum to internalise a negative externality.' },
          { term: 'ad valorem tax', definition: 'An indirect tax levied as a percentage of a product’s price, causing the supply curve to pivot upward and diverge.' },
        ],
        diagram: 'externality-market-failure',
      },
      {
        id: 'al-econ-2-2-c2',
        title: 'Consumer vs Producer Tax Incidence & Elasticity Rules',
        summary: 'Statutory liability differs from economic tax incidence: whichever side of the market is more price inelastic bears the larger share of the tax burden.',
        bullets: [
          '**Decomposing total tax revenue (`t × Q₂`)**: If pre-tax equilibrium is `(P₁, Q₁)` and post-tax consumer price is `P₂` with producer net price `Pp = P₂ − t` at output `Q₂`:',
          '**Consumer tax burden** = `(P₂ − P₁) × Q₂`; **Producer tax burden** = `(P₁ − Pp) × Q₂`.',
          '**Elasticity rule**: When **demand is more inelastic than supply (`|PED| < PES`)** (e.g. cigarettes, petrol), **consumers bear the majority of the tax burden** (price rises sharply, quantity falls modestly). When **demand is more elastic than supply (`|PED| > PES`)**, **producers absorb most of the burden** via lower net margins.',
        ],
        subsections: [
          {
            heading: 'Tax Revenue vs Behaviour-Change Trade-Off',
            bullets: [
              'For demerit goods with **price-inelastic demand**, an excise tax generates **large government revenue** but achieves only a **small reduction in consumption** unless the tax rate is very high.',
            ],
            exampleHeading: 'Worked Quantitative Example: Splitting Consumer & Producer Burden',
            examples: [
              'Pre-tax equilibrium for cigarettes is `P₁ = £10/pack`, `Q₁ = 5m packs`. A specific tax of `t = £3/pack` raises retail price to `P₂ = £12.40` (producer receives `Pp = £9.40`) and cuts quantity to `Q₂ = 4.5m packs`.',
              'Total tax revenue = `£3 × 4.5m = £13.5m`. Consumer incidence = `(£12.40 − £10.00) × 4.5m = £10.8m (80%)`. Producer incidence = `(£10.00 − £9.40) × 4.5m = £2.7m (20%)`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tax incidence', definition: 'The division of the economic burden of an indirect tax between consumers (higher prices) and producers (lower net revenue).' },
        ],
      },
      {
        id: 'al-econ-2-2-c3',
        title: 'Evaluating Indirect Taxes: Regressivity, Valuation & Hypothecation',
        summary: 'Real-world Pigouvian taxation faces information limits in valuing MEC, regressive distributional impacts, smuggling risks, and competitiveness losses.',
        bullets: [
          '**Measurement / Information failure**: Governments rarely know the exact monetary value of **Marginal External Cost** (e.g. social cost of carbon across future centuries). Setting `t > MEC` causes **under-production and government failure**; setting `t < MEC` leaves residual market failure.',
          '**Regressive distributional impact**: Flat excise taxes on fuel, heating, or sugary food consume a **higher percentage of low-income households’ disposable income**, widening relative poverty.',
          '**Unintended consequences & mitigation**: Very high taxes spark **black-market smuggling**, cross-border shopping, or **carbon leakage** (firms relocating abroad). Governments can **hypothecate (ring-fence)** tax revenue to subsidise green public transport, insulation grants, or tax rebates for poorer households.',
        ],
        subsections: [
          {
            heading: 'Double Dividend & Combining Policy Instruments',
            bullets: [
              'A **double dividend** arises when revenue from a green Pigouvian tax cuts distortionary taxes on labour/investment or directly funds substitutes (making long-run PED more elastic!).',
            ],
            exampleHeading: 'Worked Quantitative Check: Regressive Burden Comparison',
            examples: [
              'A £400 annual fuel duty bill equals `2.0%` of a £20,000 household income (`£400 ÷ £20,000`), compared with just `0.4%` of a £100,000 household income (`£400 ÷ £100,000`) — five times heavier proportionally on the poorer family.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hypothecation', definition: 'Ring-fencing revenue from a specific tax (e.g. carbon or sugar levy) to fund related public spending or compensation.' },
          { term: 'regressive tax', definition: 'A tax that takes a larger percentage of income from lower-income earners than from higher-income earners.' },
        ],
        memoryAid: 'Incidence rule = INELASTIC side PAYS MORE (just like a stubborn person who refuses to budge gets stuck holding the bill)!',
        commonMistake: 'NEVER draw total tax revenue using the OLD pre-tax quantity Q₁ — tax revenue is ALWAYS `tax per unit × NEW quantity Q₂`, and remember a specific tax shifts supply vertically by the FULL tax t, NOT just the consumer price rise (P₂ − P₁)!',
      },
    ],
    keyTerms: [
      { term: 'Pigouvian tax', definition: 'Per-unit tax equal to MEC at Qopt designed to internalise negative externalities.' },
      { term: 'Specific tax', definition: 'Fixed monetary tax per unit sold causing a parallel upward shift of supply.' },
      { term: 'Ad valorem tax', definition: 'Percentage tax on price causing supply to pivot upward and diverge.' },
      { term: 'Tax incidence', definition: 'Economic split of an indirect tax burden between consumers and producers determined by relative PED and PES.' },
      { term: 'Hypothecation', definition: 'Dedicating revenue from a specific corrective tax directly to complementary public services or rebates.' },
    ],
    checklistPoints: [
      'Contrast specific vs ad valorem tax diagrams and explain Pigouvian internalisation where tax = MEC at Qopt',
      'Calculate total tax revenue, consumer burden, and producer burden and link incidence shares to PED and PES',
      'Evaluate indirect taxes using information gaps, regressivity, smuggling/carbon leakage, and hypothecation',
    ],
  },

  /* =========================================================================
   * 2.3 SUBSIDIES, PRICE CONTROLS, PERMITS & GOVERNMENT FAILURE
   * ========================================================================= */
  'al-econ-2-3': {
    subtopicId: 'al-econ-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'Subsidies, Price Controls (Max/Min Prices), Permits & Government Failure',
    readingMinutes: 13,
    videoTitle: 'Price Control diagram Explained | Maximum & Minimum Prices - IB Economics',
    youtubeId: 'zEtvEsm7vVk',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:05',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Subsidies, Incidence & Opportunity Cost to Taxpayers', cardId: 'al-econ-2-3-c1' },
      { time: '3:25', seconds: 205, label: 'Binding Maximum & Minimum Price Diagrams & Surpluses', cardId: 'al-econ-2-3-c2' },
      { time: '6:55', seconds: 415, label: 'Tradable Pollution Permits, Regulation & Government Failure', cardId: 'al-econ-2-3-c3' },
    ],
    cards: [
      {
        id: 'al-econ-2-3-c1',
        title: 'Subsidies: Welfare Correction, Incidence & Opportunity Cost',
        summary: 'Subsidies lower private marginal costs to expand output of merit/green goods toward Qopt, but carry heavy fiscal opportunity costs and X-inefficiency risks.',
        bullets: [
          '**Mechanism**: A specific per-unit subsidy `s` shifts supply downward/rightward (`MPC → MPC − s`), cutting consumer price from `P₁` to `P₂`, raising effective producer price to `Pp = P₂ + s`, and expanding quantity from `Q₁` to `Q₂`.',
          '**Fiscal cost & incidence**: Total government expenditure = `s × Q₂`. Consumer share of subsidy = `(P₁ − P₂) × Q₂`; Producer share = `(Pp − P₁) × Q₂`. The more **inelastic demand** is, the greater the consumer price drop; if demand is elastic, output expands more sharply.',
          '**Evaluation**: Subsidies incur high **opportunity cost** (higher taxes or cuts to health/education), may be pocketed by inefficient firms (**X-inefficiency** / dependency), and yield tiny output gains if PES or PED is highly inelastic.',
        ],
        subsections: [
          {
            heading: 'Worked Quantitative Subsidy Calculation',
            bullets: [
              'Always compare total government spending `s × Q₂` against the consumer surplus and external benefit gain.',
            ],
            exampleHeading: 'Worked Quantitative Example: Solar Heat-Pump Subsidy',
            examples: [
              'A government grants a `£2,000` subsidy per heat pump. Equilibrium price falls from `£9,000` to `£7,600` (producers receive `£9,600`) and annual installations rise from `40,000` to `65,000`.',
              'Total budget cost = `£2,000 × 65,000 = £130m`. Consumer benefit share = `£1,400 × 65,000 = £91m (70%)`; Producer share = `£600 × 65,000 = £39m (30%)`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'subsidy', definition: 'A government grant per unit of output shifting supply right to lower prices and expand production of merit or green goods.' },
        ],
      },
      {
        id: 'al-econ-2-3-c2',
        title: 'Binding Maximum Prices (Ceilings) & Minimum Prices (Floors)',
        summary: 'Binding price controls override market-clearing signals, generating persistent shortages or surpluses, black markets, and deadweight welfare loss.',
        bullets: [
          '**Maximum price (price ceiling)** is only **binding when set BELOW `Pe`** (e.g. rent controls, energy price caps). At `Pmax`, `Qd > Qs`, creating **excess demand (shortage)**, non-price rationing (queues, waiting lists, landlord discrimination), **black markets**, under-investment in quality, and **DWL**.',
          '**Minimum price (price floor)** is only **binding when set ABOVE `Pe`** (e.g. Scottish Minimum Unit Pricing on alcohol, National Minimum Wage, guaranteed agricultural prices). At `Pmin`, `Qs > Qd`, creating **excess supply (surplus)**.',
          '**Guaranteed agricultural floors & buffer stocks**: If the state buys up the unsold surplus `(Qs − Qd)` at `Pmin`, taxpayers incur a guaranteed purchase cost of `Pmin × (Qs − Qd)` plus storage/spoilage costs and dumping distortions abroad.',
        ],
        subsections: [
          {
            heading: 'Why Alcohol MUP Avoids Government Surplus-Buying Cost',
            bullets: [
              'Unlike agricultural floors, Minimum Unit Pricing on alcohol does **not** require the state to buy unsold bottles — firms simply contract supply to `Qd` while capturing higher per-unit revenue (higher producer surplus), though heavy drinkers with inelastic PED may suffer regressive budget squeeze.',
            ],
            exampleHeading: 'Worked Quantitative Example: Agricultural Price Floor Cost',
            examples: [
              'Equilibrium wheat price is `£180/tonne`. The government sets a binding minimum price of `£220/tonne`, where `Qs = 14m tonnes` and `Qd = 10m tonnes`.',
              'Excess supply (surplus) = `14m − 10m = 4m tonnes`. Cost for the government to buy the surplus = `£220 × 4m = £880m`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'maximum price', definition: 'A legally binding price ceiling set below equilibrium to protect affordability, resulting in excess demand (shortage).' },
          { term: 'minimum price', definition: 'A legally binding price floor set above equilibrium to support incomes or deter demerit consumption, creating excess supply.' },
        ],
      },
      {
        id: 'al-econ-2-3-c3',
        title: 'Tradable Pollution Permits, Regulation & Government Failure',
        summary: 'Cap-and-trade markets guarantee an emissions ceiling at lowest abatement cost, yet any state intervention risks government failure if welfare falls.',
        bullets: [
          '**Tradable pollution permits (Cap-and-Trade, e.g. EU/UK ETS)**: The regulator sets a fixed **cap** on total emissions (vertical supply curve `S`) and auctions/allocates permits. Clean firms with **low abatement costs** cut emissions and sell spare permits to heavy polluters with high abatement costs, achieving the target at **minimum total abatement cost**.',
          '**Command-and-control regulation**: Legal bans, emission standards, or age limits offer certainty and simplicity, but impose uniform compliance costs regardless of firm abatement cost and require expensive monitoring/enforcement.',
          '**Government failure** occurs when state intervention causes a **net loss in economic welfare** (deeper misallocation than the original market failure) due to: (1) **Distortion of price signals**, (2) **Unintended consequences** (black markets, rent-cap housing shortages), (3) **Excessive administrative/enforcement costs**, (4) **Information gaps**, and (5) **Regulatory capture / short-term political myopia**.',
        ],
        subsections: [
          {
            heading: 'Evaluating Cap-and-Trade Permits',
            bullets: [
              'If governments over-allocate free permits (as in EU ETS Phase 1), permit prices collapse to near €0, removing the incentive to decarbonise; tightening the cap shifts `S` left and drives up carbon prices, though **carbon leakage** remains a global threat without Border Carbon Adjustments (CBAM).',
            ],
            exampleHeading: 'Worked Quantitative Check: Permit Trading Efficiency',
            examples: [
              'Firm A can cut 1 tonne of CO₂ for £25; Firm B’s abatement cost is £85/tonne. At a market permit price of £50/tonne, Firm A abates and sells its permit (net gain `£50 − £25 = £25`), while Firm B buys the permit instead of paying £85 (saving `£85 − £50 = £35`). Society saves `£60/tonne`!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tradable pollution permits', definition: 'Marketable licences capping total emissions while allowing firms to buy and sell rights so pollution is cut where abatement is cheapest.' },
          { term: 'government failure', definition: 'Situation where government intervention leads to a worse allocation of resources and a net reduction in economic welfare.' },
        ],
        memoryAid: 'Price Controls = "Max UNDER (Shortage), Min OVER (Surplus)" — like a ceiling you hit from below and a floor you stand on above!',
        commonMistake: 'NEVER draw a binding maximum price ABOVE equilibrium or a binding minimum price BELOW equilibrium — both would be completely non-binding and leave market price unchanged at Pe!',
      },
    ],
    keyTerms: [
      { term: 'Maximum price', definition: 'Legally enforced price ceiling below equilibrium that creates excess demand and non-price rationing.' },
      { term: 'Minimum price', definition: 'Legally enforced price floor above equilibrium that creates excess supply.' },
      { term: 'Tradable pollution permits', definition: 'Capped, marketable emissions allowances creating a market price for carbon.' },
      { term: 'Government failure', definition: 'Net welfare loss caused by misguided, costly, or poorly informed state intervention.' },
      { term: 'Regulatory capture', definition: 'When regulatory bodies act in the interests of the regulated industry rather than the public.' },
    ],
    checklistPoints: [
      'Calculate government subsidy expenditure and explain how PED/PES determine consumer vs producer subsidy shares',
      'Draw binding maximum and minimum price diagrams, quantify shortages/surpluses, and evaluate unintended consequences',
      'Compare tradable pollution permits, regulation, and subsidies while diagnosing five causes of government failure',
    ],
  },

  /* =========================================================================
   * 3.1 SHORT-RUN & LONG-RUN COSTS, REVENUES & FIRM OBJECTIVES
   * ========================================================================= */
  'al-econ-3-1': {
    subtopicId: 'al-econ-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Short-Run & Long-Run Costs, Marginal/Average Revenue & Firm Objectives',
    readingMinutes: 13,
    videoTitle: 'Cost and Revenue Diagram IB Economics',
    youtubeId: '7a6txXDniYE',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:30',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Diminishing Marginal Returns & Short-Run Cost Curves', cardId: 'al-econ-3-1-c1' },
      { time: '3:55', seconds: 235, label: 'Long-Run Average Cost (LRAC), MES & Returns to Scale', cardId: 'al-econ-3-1-c2' },
      { time: '7:40', seconds: 460, label: 'Revenue Curves (AR, MR, TR) & Alternative Firm Objectives', cardId: 'al-econ-3-1-c3' },
    ],
    cards: [
      {
        id: 'al-econ-3-1-c1',
        title: 'Law of Diminishing Marginal Returns & Short-Run Cost Curves',
        summary: 'In the short run (at least one fixed factor), diminishing marginal product forces MC upward and makes MC intersect AVC and ATC at their minima.',
        bullets: [
          '**Short run vs Long run**: In the **short run**, at least one factor of production (typically capital/land) is fixed; in the **long run**, **all** factors of production are variable.',
          '**Law of diminishing marginal returns**: Adding successive units of a variable factor (labour) to a fixed factor (factory machines) eventually causes **Marginal Product (MP)** to fall due to overcrowding and bottlenecks, driving **Marginal Cost (`MC = ΔTC ÷ ΔQ`)** upward.',
          '**Exact cost geometry**: `ATC = AFC + AVC`. As Q rises, `AFC = TFC ÷ Q` falls continuously (rectangular hyperbola), so the vertical gap between ATC and AVC narrows. Crucially, **MC ALWAYS cuts AVC and ATC at their exact minimum points** (if marginal cost is below the average, it pulls the average down; once above, it pulls the average up).',
        ],
        subsections: [
          {
            heading: 'Worked Short-Run Cost Schedule',
            bullets: [
              'Remember fixed costs never change with output (`ΔTFC = 0`), so `MC = ΔTC ÷ ΔQ = ΔTVC ÷ ΔQ`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Deriving MC, AVC & ATC',
            examples: [
              'A firm has `TFC = £100`. At `Q = 4`, `TVC = £120` (`TC = £220`, `ATC = £55`, `AVC = £30`). At `Q = 5`, `TVC = £175` (`TC = £275`).',
              'For the 5th unit: `MC = £275 − £220 = £55`. Notice `MC (£55) = previous ATC (£55)` and new `ATC = £275 ÷ 5 = £55` — confirming ATC is at its exact minimum where `MC = ATC`!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'diminishing marginal returns', definition: 'Short-run law stating that adding extra units of a variable input to a fixed input eventually yields smaller additions to total output.' },
          { term: 'marginal cost', definition: 'The additional total cost incurred by producing one more unit of output (ΔTC ÷ ΔQ).' },
        ],
      },
      {
        id: 'al-econ-3-1-c2',
        title: 'Long-Run Average Cost (LRAC), Returns to Scale & MES',
        summary: 'The LRAC envelope tracks falling unit costs from internal economies of scale up to Minimum Efficient Scale before diseconomies raise costs.',
        bullets: [
          '**Returns to scale (long run)** measure output response when **all inputs** scale proportionally (e.g. doubling labour and capital → output more than doubles = **increasing returns to scale** → **falling LRAC**).',
          '**Internal economies of scale** (bulk purchasing, technical indivisibilities/container principle, financial cheaper credit, managerial specialisation, risk-bearing) drive the downward-sloping portion of LRAC; **external economies** (local skilled labour pools, infrastructure clusters like Silicon Valley) shift the **entire LRAC curve downward**.',
          '**Minimum Efficient Scale (MES)** is the lowest output level at which LRAC reaches its minimum. Industries with a **very high MES relative to total market demand** (aircraft manufacturing, utilities) naturally evolve into **oligopolies or natural monopolies**.',
        ],
        subsections: [
          {
            heading: 'Internal Diseconomies of Scale & L-Shaped LRAC',
            bullets: [
              'Beyond optimal size, coordination failures, bureaucratic layers, and worker alienation cause **diseconomies of scale** (rising LRAC). Empirically, many industries display an **L-shaped LRAC** with a broad constant-returns plateau.',
            ],
            exampleHeading: 'Concrete Application: MES & Market Structure',
            examples: [
              'If total national demand for regional rail is 10m passenger-journeys/year and MES is 9m journeys, only **one firm** can fully exploit scale economies; if hairdressing MES is 3,000 cuts/year in a 30m-cut market, thousands of small salons coexist.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'minimum efficient scale', definition: 'The lowest level of output at which a firm achieves minimum long-run average cost, fully exhausting internal economies of scale.' },
          { term: 'external economies of scale', definition: 'Cost reductions enjoyed by all firms in an industry as the entire industry expands, shifting each firm’s LRAC curve downward.' },
        ],
      },
      {
        id: 'al-econ-3-1-c3',
        title: 'Revenue Curves (AR, MR, TR) & Alternative Firm Objectives',
        summary: 'Downward-sloping demand gives MR twice the slope of AR, allowing clear graphical identification of profit, revenue, sales, and satisficing objectives.',
        bullets: [
          '**Revenue geometry for price-makers**: `AR = TR ÷ Q = Price` (the demand curve). Because lowering price to sell an extra unit also cuts price on all prior units, **MR lies below AR with twice the downward slope**; where **`MR = 0`**, **Total Revenue is maximised** and `|PED| = 1`.',
          '**Four core A-Level firm objectives**: (1) **Profit maximisation** (`MC = MR`, with MC rising); (2) **Revenue maximisation** (`MR = 0` — Baumol); (3) **Sales volume maximisation** (`AR = AC`, largest output subject to earning at least **normal profit**); (4) **Profit satisficing** (Simon — earning sufficient profit to placate shareholders while pursuing managerial perks or ESG goals).',
          '**Principal-Agent Problem**: In public limited companies (PLCs), **divorce of ownership (shareholders = principals) from control (managers = agents)** creates asymmetric information, prompting managers whose bonuses tie to firm size/turnover to choose revenue maximisation or satisficing over strict `MC = MR`.',
        ],
        subsections: [
          {
            heading: 'Normal Profit vs Supernormal Profit',
            bullets: [
              '**Normal profit (`TR = TC` or `AR = AC`)** is the minimum return required to keep entrepreneurial resources in their current use — it is already included inside economic **Total Cost** as an opportunity cost!',
              '**Supernormal (abnormal) profit (`TR > TC` or `AR > AC`)** is profit earned strictly above normal profit.',
            ],
            exampleHeading: 'Worked Quantitative Example: Profit Max vs Revenue Max Output',
            examples: [
              'A firm faces linear demand `P = 100 − 2Q` (so `TR = 100Q − 2Q²` and `MR = 100 − 4Q`) with constant `MC = £20`.',
              'Profit maximisation (`MC = MR`): `100 − 4Q = 20 → Q = 20 units`, `P = £60`, `TR = £1,200`, Profit = `(£60 − £20) × 20 = £800`. Revenue maximisation (`MR = 0`): `100 − 4Q = 0 → Q = 25 units`, `P = £50`, `TR = £1,250` (higher revenue, lower profit of £750).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'normal profit', definition: 'Minimum level of profit needed to keep factors of production in their current use (where Total Revenue equals economic Total Cost, AR = AC).' },
          { term: 'principal-agent problem', definition: 'Conflict of objectives arising when managers (agents) pursue personal goals rather than maximising profits for shareholders (principals).' },
        ],
        memoryAid: 'Firm Objective Rules: Profit Max = MC = MR | Revenue Max = MR = 0 | Sales Max = AR = AC (Normal Profit)!',
        commonMistake: 'NEVER confuse diminishing marginal returns (a SHORT-RUN law with a fixed factor) with diseconomies of scale (a LONG-RUN phenomenon when ALL factors increase together)!',
      },
    ],
    keyTerms: [
      { term: 'Law of diminishing marginal returns', definition: 'Short-run decline in marginal output as additional variable units are combined with a fixed factor.' },
      { term: 'Minimum Efficient Scale (MES)', definition: 'Lowest output level at which a firm reaches the bottom of its LRAC curve.' },
      { term: 'Marginal Revenue (MR)', definition: 'Addition to total revenue from selling one extra unit of output (ΔTR ÷ ΔQ).' },
      { term: 'Profit satisficing', definition: 'Pursuing a satisfactory minimum profit to appease shareholders while meeting alternative managerial or stakeholder goals.' },
      { term: 'Principal-agent problem', definition: 'Misalignment of incentives between owners (shareholders) and salaried managers due to divorce of ownership from control.' },
    ],
    checklistPoints: [
      'Derive TFC, TVC, ATC, AVC, and MC quantitatively and explain why MC cuts AVC and ATC at their minima',
      'Distinguish internal vs external economies of scale, returns to scale, and how MES shapes industry concentration',
      'Compare MC = MR (profit max), MR = 0 (revenue max), AR = AC (sales max), and satisficing under the principal-agent problem',
    ],
  },

  /* =========================================================================
   * 3.2 PERFECT COMPETITION, SHUT-DOWN POINT & ECONOMIC EFFICIENCY
   * ========================================================================= */
  'al-econ-3-2': {
    subtopicId: 'al-econ-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Perfect Competition, Shut-Down Point & Economic Efficiency',
    readingMinutes: 12,
    videoTitle: 'Perfect Competition Diagram IB Economics',
    youtubeId: 'ZBNsThkmOkQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:30',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Price-Taker Geometry & Short-Run to Long-Run Adjustment', cardId: 'al-econ-3-2-c1' },
      { time: '3:30', seconds: 210, label: 'Short-Run (P < AVC) vs Long-Run (P < ATC) Shut-Down Rules', cardId: 'al-econ-3-2-c2' },
      { time: '7:05', seconds: 425, label: 'Static Efficiency (Allocative/Productive) vs Dynamic Efficiency', cardId: 'al-econ-3-2-c3' },
    ],
    cards: [
      {
        id: 'al-econ-3-2-c1',
        title: 'Perfect Competition: Price Takers & Long-Run Normal Profit',
        summary: 'In perfect competition, free entry and exit erode short-run supernormal profits or losses until every surviving firm earns strictly normal profit.',
        bullets: [
          '**Five strict assumptions**: (1) Many small buyers & sellers, (2) **Homogeneous (identical)** products, (3) **Zero barriers to entry and exit**, (4) **Perfect information**, and (5) Profit-maximising price takers.',
          '**Firm vs Industry diagrams**: Industry supply and demand set market price `Pe`. Each individual firm faces a **perfectly elastic horizontal demand curve** at `Pe`, where `P = AR = MR = D`, and chooses output where `MC = MR`.',
          '**Long-run adjustment**: If firms earn **short-run supernormal profit (`P > ATC`)**, zero barriers and perfect info attract new entrants → **industry supply shifts right (`S₁ → S₂`)** → market price falls until `P = min ATC` (normal profit only). If firms suffer losses (`P < ATC`), firms exit → industry supply shifts left → price rises back to `min ATC`.',
        ],
        subsections: [
          {
            heading: 'Contrast with Monopolistic Competition',
            bullets: [
              'Monopolistic competition also has low barriers and **long-run normal profit**, but product differentiation gives firms a **downward-sloping AR curve**, meaning they operate with **excess capacity** (left of min ATC) and `P > MC`.',
            ],
            exampleHeading: 'Concrete Application: Commodity Agriculture & FX Markets',
            examples: [
              'Spot foreign-exchange trading (EUR/USD) and standardised grade-A wheat auctions approximate perfect competition closely: homogeneous units, transparent live pricing, and tiny individual price influence.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price taker', definition: 'A firm with zero market power that must accept the prevailing industry equilibrium price, facing a horizontal perfectly elastic demand curve (P = AR = MR).' },
        ],
      },
      {
        id: 'al-econ-3-2-c2',
        title: 'Short-Run vs Long-Run Shut-Down Conditions',
        summary: 'A loss-making firm rationalises staying open in the short run as long as price covers Average Variable Cost, because any surplus offsets unavoidable fixed costs.',
        bullets: [
          '**Short-run shut-down point (`P < min AVC`)**: Because fixed costs (lease, machinery loan) are **sunk/unavoidable** in the short run, shutting down loses `100% of TFC`. If `AVC ≤ P < ATC`, each unit yields positive **contribution (`P − AVC ≥ 0`)** that reduces total loss below `TFC`, so the firm keeps operating!',
          '**Firm’s short-run supply curve**: Strictly the portion of the **MC curve lying at or above minimum AVC** (below min AVC, quantity supplied jumps to zero).',
          '**Long-run shut-down point (`P < min ATC`)**: In the long run, all costs become variable (leases expire, capital can be sold), so any firm earning subnormal profit (`P < ATC`) exits the industry.',
        ],
        subsections: [
          {
            heading: 'Worked Numerical Shut-Down Decision',
            bullets: [
              'Compare **Operating Loss = `(P − ATC) × Q`** directly against **Shut-Down Loss = `−TFC`** to verify the rational short-run choice.',
            ],
            exampleHeading: 'Worked Quantitative Example: Operate or Shut Down?',
            examples: [
              'A competitive strawberry farm faces market price `P = £4.00/kg`. At `MC = MR` output of `Q = 10,000 kg`, `AVC = £3.20/kg` and `AFC = £1.50/kg` (`ATC = £4.70/kg`, `TFC = £15,000`).',
              'If it **operates**: `TR = £40,000`, `TC = £47,000` → **Loss = −£7,000**. If it **shuts down**: `TR = £0`, must still pay `TFC = £15,000` → **Loss = −£15,000**. Because `P (£4.00) > AVC (£3.20)`, operating saves **£8,000** in the short run!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'short-run shut-down point', definition: 'Output and price level where P = minimum AVC; below this price the firm cannot cover variable costs and ceases production immediately.' },
        ],
      },
      {
        id: 'al-econ-3-2-c3',
        title: 'Economic Efficiency: Static vs Dynamic Evaluation',
        summary: 'Long-run perfect competition achieves the triple crown of static efficiency but fails on dynamic R&D efficiency, consumer variety, and economies of scale.',
        bullets: [
          '**Allocative efficiency (`P = MC`)**: Achieved in both the short run and long run because `P = MR = MC` — society’s marginal valuation matches the marginal opportunity cost of resources.',
          '**Productive efficiency (`P = min ATC`) & X-efficiency**: Achieved in the **long run** because fierce competition forces firms to operate at the bottom of ATC with zero organisational slack (X-inefficiency).',
          '**Limitations — Dynamic Inefficiency & Scale Loss**: Because firms earn **zero supernormal profit** in the long run and operate at small scale with homogeneous products, they lack retained profits and patent protection to fund **R&D innovation (dynamic efficiency)**, cannot exploit large-scale **economies of scale**, and offer zero product variety.',
        ],
        subsections: [
          {
            heading: 'Four Efficiency Conditions Summarised',
            bullets: [
              '**Allocative**: `P = MC`. **Productive**: `Q` at minimum `ATC`. **X-efficiency**: operating on (not above) the lowest possible ATC curve. **Dynamic**: reinvesting profits over time to shift LRAC down and launch superior products.',
            ],
            exampleHeading: 'Worked Quantitative Check: Checking Efficiency Criteria',
            examples: [
              'In long-run perfect competition, `P = £12`, `MC = £12`, and `min ATC = £12` → satisfies `P = MC` (allocative) AND `P = min ATC` (productive), with `Supernormal Profit = (£12 − £12) × Q = £0`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'productive efficiency', definition: 'Producing output at the lowest possible average total cost (minimum point of ATC), eliminating wasted inputs.' },
          { term: 'dynamic efficiency', definition: 'Long-run improvements in productive processes and product innovation driven by R&D investment over time.' },
        ],
        memoryAid: 'Perfect Competition Long-Run = "A-P-X Yes, Dynamic No!" (Allocative, Productive, X-efficient, but lacks Dynamic R&D & Variety)!',
        commonMistake: 'NEVER state that a perfectly competitive firm shuts down immediately whenever P < ATC — in the SHORT RUN it keeps producing as long as P ≥ AVC so contribution offsets unavoidable fixed costs!',
      },
    ],
    keyTerms: [
      { term: 'Price taker', definition: 'Firm unable to influence market price, facing horizontal perfectly elastic demand (P = AR = MR).' },
      { term: 'Short-run shut-down point', definition: 'Price equal to minimum AVC below which a firm minimises loss by producing zero output.' },
      { term: 'Productive efficiency', definition: 'Operating at the minimum point of the Average Total Cost curve.' },
      { term: 'X-inefficiency', definition: 'Operating above the lowest attainable cost curve due to organisational slack and weak competitive pressure.' },
      { term: 'Dynamic efficiency', definition: 'Long-run cost-reducing and product-enhancing innovation funded by reinvested profits.' },
    ],
    checklistPoints: [
      'Draw side-by-side industry and firm diagrams tracing short-run supernormal profit/loss to long-run normal profit',
      'Calculate operating loss vs shut-down loss and prove why the short-run shut-down rule is P < AVC while long-run is P < ATC',
      'Evaluate perfect competition across allocative, productive, X-, and dynamic efficiency plus economies of scale',
    ],
  },

  /* =========================================================================
   * 3.3 MONOPOLY, NATURAL MONOPOLY, PRICE DISCRIMINATION & REGULATION
   * ========================================================================= */
  'al-econ-3-3': {
    subtopicId: 'al-econ-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Monopoly, Natural Monopoly, Third-Degree Price Discrimination & Regulation',
    readingMinutes: 14,
    videoTitle: 'Monopoly Diagram IB Economics',
    youtubeId: '9BOITVPUvdc',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:15',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Monopoly Profit Maximisation, DWL & Dynamic Efficiency', cardId: 'al-econ-3-3-c1' },
      { time: '4:15', seconds: 255, label: 'Natural Monopoly & Third-Degree Price Discrimination', cardId: 'al-econ-3-3-c2' },
      { time: '8:20', seconds: 500, label: 'Competition Policy, RPI − X Price Caps & Regulation', cardId: 'al-econ-3-3-c3' },
    ],
    cards: [
      {
        id: 'al-econ-3-3-c1',
        title: 'Profit-Maximising Monopoly, Welfare Loss & Schumpeterian Innovation',
        summary: 'Shielded by high entry barriers, a pure monopolist restricts output to MC = MR, earning persistent supernormal profit at the cost of deadweight welfare loss.',
        bullets: [
          '**Market definition**: A **pure monopoly** holds 100% share; UK competition law (CMA) defines a **working/legal monopoly** at **≥ 25% market share**. High **structural or strategic barriers to entry** (patents, sunk capital, network effects, brand loyalty, predatory pricing) preserve **long-run supernormal profit**.',
          '**Static welfare losses**: Setting `MC = MR` determines `Qm` and price `Pm` off AR. Compared to competitive equilibrium (`P = MC` at `Qalloc`), monopoly charges a **higher price**, restricts output, transfers consumer surplus into supernormal profit, causes **allocative inefficiency (`Pm > MC`)**, **productive inefficiency** (not at min ATC), **X-inefficiency**, and a **deadweight welfare loss triangle (DWL)**.',
          '**Counter-arguments**: Massive **economies of scale** can push a monopolist’s MC curve far below a competitive industry’s, potentially yielding a *lower* price than fragmented competition, while retained supernormal profits finance **Schumpeterian creative destruction (dynamic R&D efficiency)**.',
        ],
        subsections: [
          {
            heading: 'Worked Monopoly Profit & DWL Calculation',
            bullets: [
              'Supernormal Profit = `(Pm − AC at Qm) × Qm`. Deadweight Loss = `½ × (Qalloc − Qm) × (Pm − MC at Qm)`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Computing Supernormal Profit & DWL',
            examples: [
              'At `MC = MR`, a patented biotech monopolist produces `Qm = 50,000 doses`, charging `Pm = £120` where `AC = £70` and `MC = £40`. Competitive allocative output (`P = MC`) would be `Qalloc = 90,000 doses`.',
              'Supernormal profit = `(£120 − £70) × 50,000 = £2.5m`. Deadweight welfare loss = `0.5 × (90,000 − 50,000) × (£120 − £40) = 0.5 × 40,000 × £80 = £1.6m`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'creative destruction', definition: 'Schumpeter’s process where dynamic innovation funded by monopoly profits displaces outdated firms and technologies.' },
          { term: 'barriers to entry', definition: 'Structural or strategic obstacles (patents, sunk costs, network effects) preventing new rivals from eroding incumbent profits.' },
        ],
        diagram: 'monopoly-market-structure',
      },
      {
        id: 'al-econ-3-3-c2',
        title: 'Natural Monopoly & Third-Degree Price Discrimination',
        summary: 'Natural monopolies enjoy continuously falling LRAC across market demand, while third-degree price discrimination segments buyers by PED to boost profit.',
        bullets: [
          '**Natural monopoly**: Arises where enormous fixed/sunk infrastructure costs (water pipes, electricity transmission grid, railway tracks) cause **LRAC to fall continuously across the entire market demand** (MES > market size) with `MC < AC`. Duplicating networks wastes resources, so a single regulated supplier is productively most efficient.',
          '**Third-degree price discrimination**: Charging **different prices to distinct consumer groups** for the identical product with identical marginal cost (e.g. peak vs off-peak rail, student vs adult cinema tickets).',
          '**Three essential conditions**: (1) **Monopoly/price-setting power**, (2) **Ability to segment markets with differing PEDs**, and (3) **Prevention of arbitrage/seepage** (resale from low-price to high-price buyers). The firm charges a **higher price in the inelastic market** and a **lower price in the elastic market**, equating `MR₁ = MR₂ = MC`.',
        ],
        subsections: [
          {
            heading: 'Evaluating Price Discrimination Welfare Effects',
            bullets: [
              '**Drawbacks**: Converts consumer surplus into monopoly supernormal profit and exploits inelastic captive groups (commuters).',
              '**Benefits**: Low-income/elastic buyers (students, pensioners) gain affordable access; extra profit may **cross-subsidise** loss-making rural routes or fund R&D, expanding total output toward `Qalloc`.',
            ],
            exampleHeading: 'Worked Quantitative Example: Two-Market Price Discrimination',
            examples: [
              'A software firm serves Corporate clients (`PED = −0.5`, willing to pay £200 × 1,000 licences = £200,000) and Student users (`PED = −2.5`, paying £30 × 2,000 licences = £60,000) at constant `MC = £5`.',
              'Total profit with discrimination = `(£195 × 1,000) + (£25 × 2,000) = £245,000` vs single-price £200 profit of `£195,000` — boosting profit by **+£50,000** while expanding student access by 2,000 licences!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'natural monopoly', definition: 'Industry where high fixed infrastructure costs mean a single firm can supply the entire market at lower LRAC than two or more competing firms.' },
          { term: 'third-degree price discrimination', definition: 'Charging different prices to distinct market segments with differing PEDs for the same product without cost differences.' },
        ],
      },
      {
        id: 'al-econ-3-3-c3',
        title: 'Competition Policy & Monopoly Regulation (RPI − X)',
        summary: 'Regulators use price caps, merger blocks, deregulation, and performance targets to curb monopoly abuse without destroying incentives to cut costs.',
        bullets: [
          '**Price-cap regulation (`RPI − X` or `CPI − X`)**: Used by UK utility regulators (Ofwat, Ofgem, Ofcom); limits annual real price rises to inflation minus an efficiency factor `X`. Because firms keep any extra profit from beating `X`, it creates a strong **incentive for productive efficiency**, unlike rate-of-return regulation.',
          '**Competition & Markets Authority (CMA) toolkit**: Blocking anti-competitive mergers, fining cartels up to 10% of global turnover, enforcing divestments, and **deregulation / structural separation** (splitting natural-monopoly track infrastructure from competitive train operators).',
          '**Regulatory pitfalls**: **Asymmetric information** (regulators struggle to verify firms’ true costs when setting `X`), **regulatory capture**, and **under-investment in service quality/maintenance** if `X` is set too tight (addressed via `RPI − X + K` where `K` funds capital investment).',
        ],
        subsections: [
          {
            heading: 'Regulating a Natural Monopoly: P = MC vs P = AC',
            bullets: [
              'Forcing a natural monopoly to charge allocatively efficient **`P = MC`** causes a **permanent loss** because `MC < AC`, requiring a taxpayer subsidy! Setting **`P = AC` (fair-return pricing)** allows normal profit without subsidies while cutting price far below `Pm`.',
            ],
            exampleHeading: 'Worked Quantitative Check: RPI − X Real Price Cap',
            examples: [
              'If CPI inflation is `3.5%` and Ofgem sets efficiency factor `X = 2.0%`, the maximum permitted nominal bill increase is `3.5% − 2.0% = +1.5%`, forcing a **−2.0% real-terms price cut** for households.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'RPI − X regulation', definition: 'Incentive price-cap regime limiting nominal price rises to inflation minus an expected efficiency gain X, rewarding cost cuts.' },
        ],
        memoryAid: '3rd-Degree Price Discrimination needs M-S-A: Market power, Separable differing PEDs, Anti-arbitrage (no resale)!',
        commonMistake: 'NEVER claim a natural monopoly makes profit if forced to price at P = MC — because LRAC is still falling across demand, MC lies BELOW AC, so P = MC forces the firm into a loss requiring a government subsidy!',
      },
    ],
    keyTerms: [
      { term: 'Natural monopoly', definition: 'Industry with continuously falling LRAC across market demand where a single producer minimises unit cost.' },
      { term: 'Third-degree price discrimination', definition: 'Segmenting buyers by PED and charging higher prices to inelastic groups and lower prices to elastic groups.' },
      { term: 'Arbitrage (seepage)', definition: 'Reselling a good bought in a low-price market into a high-price market, which undermines price discrimination.' },
      { term: 'RPI − X price cap', definition: 'Regulatory cap restricting nominal price rises to inflation minus an efficiency target X.' },
      { term: 'Creative destruction', definition: 'Innovation cycle whereby new technologies funded by supernormal profits replace entrenched monopolies.' },
    ],
    checklistPoints: [
      'Draw and analyse a profit-maximising monopoly diagram showing Pm, Qm, supernormal profit, and deadweight welfare loss',
      'Explain natural monopoly cost structure (MC < AC) and the three conditions required for third-degree price discrimination',
      'Evaluate RPI − X regulation, CMA merger policy, deregulation, and nationalisation with regulatory-capture critique',
    ],
  },

  /* =========================================================================
   * 3.4 OLIGOPOLY, KINKED DEMAND, GAME THEORY & CONTESTABLE MARKETS
   * ========================================================================= */
  'al-econ-3-4': {
    subtopicId: 'al-econ-3-4',
    subtopicCode: '3.4',
    subtopicTitle: 'Oligopoly, Kinked Demand, Game Theory, Collusion & Contestable Markets',
    readingMinutes: 14,
    videoTitle: 'Oligopoly | Edexcel IGCSE Economics (9-1)',
    youtubeId: 'zeguRo7fjmw',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:50',
    courseMatchSummary: 'Aligned with AQA 7136, Cambridge CIE 9708 & Edexcel 9EC0 A-Level Economics',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Concentration Ratios, Interdependence & Kinked Demand', cardId: 'al-econ-3-4-c1' },
      { time: '3:25', seconds: 205, label: 'Game Theory, Nash Equilibrium & Overt vs Tacit Collusion', cardId: 'al-econ-3-4-c2' },
      { time: '6:50', seconds: 410, label: 'Baumol’s Contestable Markets, Sunk Costs & Limit Pricing', cardId: 'al-econ-3-4-c3' },
    ],
    cards: [
      {
        id: 'al-econ-3-4-c1',
        title: 'Concentration Ratios (CRn), Interdependence & Kinked Demand',
        summary: 'Oligopolies are dominated by a few mutually interdependent firms, explaining persistent price rigidity and intense non-price competition.',
        bullets: [
          '**n-Firm Concentration Ratio (`CRn`)**: Combined percentage market share of the `n` largest firms (e.g. `CR4 > 60%` indicates a tight oligopoly such as UK supermarkets, retail banking, or mobile networks).',
          '**Sweezy’s Kinked Demand Curve**: Assumes asymmetric rival reactions around prevailing price `P*`. If one firm **raises price**, rivals hold steady so demand is **price elastic** (sharp sales loss). If one firm **cuts price**, rivals immediately match to protect market share so demand is **price inelastic** (tiny sales gain, falling revenue).',
          '**Discontinuous MR gap & price rigidity**: The kink at `P*` creates a **vertical discontinuity in the MR curve**. Marginal cost can shift anywhere within this vertical gap while `MC = MR` still leaves optimal price fixed at `P*` → firms avoid price wars and compete via **non-price strategies** (branding, loyalty cards, R&D, after-sales service).',
        ],
        subsections: [
          {
            heading: 'Worked Concentration Ratio & Kink Critique',
            bullets: [
              '**Limitation of Sweezy’s model**: It explains why prices *stay* rigid at `P*`, but fails to explain how `P*` was initially determined!',
            ],
            exampleHeading: 'Worked Quantitative Example: Computing CR3 & CR5',
            examples: [
              'In a national grocery market, the top 6 firms hold shares of `27%`, `16%`, `14%`, `10%`, `9%`, and `7%` (others `17%`).',
              '`CR3 = 27% + 16% + 14% = 57%`; `CR5 = 57% + 10% + 9% = 76%` — confirming a concentrated oligopoly.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'concentration ratio', definition: 'Combined percentage market share controlled by the n largest firms in an industry (CRn).' },
          { term: 'kinked demand curve', definition: 'Oligopoly model where elastic upper and inelastic lower demand segments generate a discontinuous MR gap and price rigidity.' },
        ],
      },
      {
        id: 'al-econ-3-4-c2',
        title: 'Game Theory, Prisoner’s Dilemma & Overt vs Tacit Collusion',
        summary: 'Payoff matrices prove why mutually interdependent rivals get trapped in a sub-optimal Nash equilibrium unless overt or tacit collusion holds.',
        bullets: [
          '**Dominant strategy & Nash equilibrium**: A **dominant strategy** yields a higher payoff regardless of what the rival chooses. A **Nash equilibrium** occurs when neither player has a unilateral incentive to deviate given the rival’s chosen strategy — even if joint collusion would earn both firms more (**Prisoner’s Dilemma**)!',
          '**Overt (formal) collusion / Cartels**: Explicit illegal agreements (e.g. OPEC quotas, bid-rigging) to fix prices or carve up territory, acting collectively like a profit-maximising monopoly.',
          '**Tacit collusion**: Unspoken parallel pricing without formal meetings (e.g. **barometric or dominant-firm price leadership**), difficult for competition authorities to prosecute. Cartels often break down due to the **incentive to cheat** (secret discounting), differing cost structures, falling demand in recessions, and **CMA whistleblower leniency**.',
        ],
        subsections: [
          {
            heading: 'Solving a 2×2 Oligopoly Payoff Matrix Step-by-Step',
            bullets: [
              'Underline Firm A’s best response in each column and Firm B’s best response in each row; the cell with **two underlines** is the **Nash equilibrium**.',
            ],
            exampleHeading: 'Worked Quantitative Example: Airline Pricing Prisoner’s Dilemma',
            examples: [
              'Payoffs (Firm A, Firm B): Both Hold High Price = `(£10m, £10m)`; A Cuts / B Holds = `(£14m, £2m)`; A Holds / B Cuts = `(£2m, £14m)`; Both Cut = `(£5m, £5m)`.',
              'If B Holds, A prefers Cut (`£14m > £10m`); if B Cuts, A still prefers Cut (`£5m > £2m`). So **Cut Price** is the dominant strategy for both → **Nash equilibrium = Both Cut `(£5m, £5m)`**, losing £5m each relative to collusion!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Nash equilibrium', definition: 'Game-theory outcome where no player can improve their payoff by unilaterally changing strategy given rivals’ choices.' },
          { term: 'tacit collusion', definition: 'Unspoken coordination of prices or output among oligopolists (such as price leadership) without an explicit formal agreement.' },
        ],
      },
      {
        id: 'al-econ-3-4-c3',
        title: 'Baumol’s Contestable Markets, Sunk Costs & Limit Pricing',
        summary: 'In contestable markets, the credible threat of hit-and-run entry forces even a monopolist to behave competitively when sunk costs are low.',
        bullets: [
          '**Contestable market (William Baumol)**: A market characterised by **zero (or very low) barriers to entry and exit**, **negligible sunk costs** (irrecoverable exit costs like bespoke tunnels or heavy advertising), and equal access to technology.',
          '**Hit-and-run competition**: If an incumbent monopolist earns supernormal profit (`P > AC`), a rival can swiftly enter, undercut price, skim profits, and exit costlessly before the incumbent retaliates.',
          '**Welfare implication**: It is the **threat of potential competition** — not the actual number of firms — that disciplines behaviour! Incumbents adopt **limit pricing (`P ≈ AC`, normal profit)** and stay productively efficient. Digital platforms, leasing aircraft (low-cost airlines), and deregulation increase contestability.',
        ],
        subsections: [
          {
            heading: 'Evaluating Real-World Contestability',
            bullets: [
              'No real-world market is **perfectly contestable** because branding, switching inertia, incumbent loyalty schemes, and slot restrictions create lingering sunk costs — contestability exists along a **spectrum**.',
            ],
            exampleHeading: 'Concrete Comparison: High vs Low Contestability',
            examples: [
              'Short-haul aviation became highly contestable because jets can be leased (low sunk cost) and redeployed to rival routes, cutting real European fares by >40%; nuclear power generation remains uncontestable due to £20bn+ irreversible sunk construction costs.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sunk costs', definition: 'Irrecoverable costs already incurred that cannot be recouped if a firm exits an industry, acting as a key barrier to exit and entry.' },
          { term: 'contestable market', definition: 'Market with low barriers to entry/exit and minimal sunk costs where the threat of hit-and-run entry enforces competitive pricing.' },
        ],
        memoryAid: 'Contestable Markets = Low SUNK costs → Hit-and-Run threat → Incumbent uses LIMIT PRICING (P = AC, normal profit)!',
        commonMistake: 'NEVER confuse FIXED costs with SUNK costs — an airline leasing a Boeing 737 faces high fixed rental costs, but LOW sunk costs because it can return or redeploy the aircraft elsewhere upon exit!',
      },
    ],
    keyTerms: [
      { term: 'Concentration ratio (CRn)', definition: 'Sum of the percentage market shares of the largest n firms in a market.' },
      { term: 'Kinked demand curve', definition: 'Oligopoly diagram explaining price stability via elastic responses to price rises and inelastic responses to price cuts.' },
      { term: 'Nash equilibrium', definition: 'Strategic state where no firm can boost its payoff by acting unilaterally.' },
      { term: 'Sunk cost', definition: 'Unrecoverable cost upon exit that deters potential entrants from challenging incumbents.' },
      { term: 'Contestable market', definition: 'Market disciplined by potential hit-and-run competition due to minimal entry/exit barriers and sunk costs.' },
    ],
    checklistPoints: [
      'Calculate n-firm concentration ratios and explain price rigidity using Sweezy’s kinked demand curve and MR discontinuity',
      'Identify dominant strategies and Nash equilibria in 2×2 payoff matrices and evaluate overt vs tacit collusion stability',
      'Distinguish fixed costs from sunk costs and evaluate how contestability and limit pricing improve market welfare',
    ],
  },
};

export const ALEVEL_ECON_UNITS_1_3_QUIZZES: QuizQuestion[] = [
  /* --- 1.1 --- */
  {
    id: 'al-econ-q-1-1-1',
    subtopicId: 'al-econ-1-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the labelled points and shift on the Production Possibility Curve (PPC):',
    diagram: 'production-possibility-curve',
    labels: [
      {
        marker: 'Point A (on PPC₁)',
        options: ['Productively efficient full employment of resources', 'Unemployed spare capacity', 'Currently unattainable output'],
        answer: 'Productively efficient full employment of resources',
      },
      {
        marker: 'Shift from PPC₁ to PPC₂',
        options: ['Long-run increase in productive capacity (quantity/quality of factors)', 'Short-run cyclical recession', 'Higher unemployment of labour'],
        answer: 'Long-run increase in productive capacity (quantity/quality of factors)',
      },
    ],
    explanation: 'Every point on PPC₁ represents productive efficiency (full resource utilisation); an outward shift to PPC₂ reflects long-run economic growth via expanded factor quantity or productivity.',
  },
  {
    id: 'al-econ-q-1-1-2',
    subtopicId: 'al-econ-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the following is strictly a POSITIVE economic statement?',
    options: [
      'The government ought to double inheritance tax to create a fairer society',
      'Raising VAT from 20% to 25% will reduce UK real GDP by 50% next quarter',
      'Executive bonuses in banking are morally excessive compared with nurses’ pay',
      'Free university tuition should be prioritized over motorway expansion',
    ],
    correctIndex: 1,
    explanation: 'Even though a 50% GDP collapse is factually exaggerated, it is empirically testable and falsifiable with data, making it a positive statement rather than a normative value judgement.',
  },
  {
    id: 'al-econ-q-1-1-3',
    subtopicId: 'al-econ-1-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'Moving along a concave PPC, an economy increases output of consumer goods from 50 to 90 units while capital goods fall from 80 to 50 units. Calculate the marginal opportunity cost of 1 extra consumer good and explain why a PPC is typically concave to the origin.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Marginal opportunity cost = 30 capital goods foregone ÷ 40 consumer goods gained = 0.75 capital goods per consumer good. A PPC is concave because factors of production are not equally suited to producing both goods (imperfect factor substitutability), causing increasing opportunity cost.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates 0.75 capital goods per consumer good', numericMatch: { value: 0.75, tolerance: 0.02 } },
        { id: 'mp2', markDescription: 'Factors are imperfectly substitutable / not equally suited', requiredKeywordGroups: [['factor', 'resource'], ['equally suited', 'substitutab', 'specialis', 'adapt']] },
        { id: 'mp3', markDescription: 'Generates increasing opportunity cost', requiredKeywordGroups: [['increasing', 'rising'], ['opportunity cost']] },
      ],
    },
    explanation: '30 ÷ 40 = 0.75 capital goods per consumer good; imperfect factor mobility between sectors creates rising marginal opportunity cost and a bowed-out concave curve.',
  },
  {
    id: 'al-econ-q-1-1-4',
    subtopicId: 'al-econ-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each behavioural economics concept to its accurate definition or example:',
    pairs: [
      { left: 'Anchoring', right: 'Over-relying on an initial reference price (e.g. "Was £200, Now £99")' },
      { left: 'Loss aversion', right: 'Pain of losing £50 outweighs joy of gaining £50, boosting plastic bag charges' },
      { left: 'Default choice', right: 'Auto-enrolling workers into pensions unless they actively opt out' },
      { left: 'Bounded rationality', right: 'Satisficing with heuristics due to cognitive and time limits' },
    ],
    explanation: 'Behavioural economics modifies strict rational-agent assumptions by integrating anchoring, loss aversion, status quo defaults, and bounded rationality.',
  },
  {
    id: 'al-econ-q-1-1-5',
    subtopicId: 'al-econ-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the methodology and choice architecture statement:',
    segments: ['Holding all other influencing variables constant in an economic model is called ', ', while designing option layouts to steer decisions without bans is called ', '.'],
    wordBank: ['ceteris paribus', 'choice architecture', 'normative bias', 'allocative efficiency'],
    answers: ['ceteris paribus', 'choice architecture'],
    explanation: 'Ceteris paribus isolates one variable in social-science models, and choice architecture (nudges) steers behaviour while keeping freedom of choice intact.',
  },

  /* --- 1.2 --- */
  {
    id: 'al-econ-q-1-2-1',
    subtopicId: 'al-econ-1-2',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the equilibrium adjustment shown on the Supply and Demand diagram:',
    diagram: 'supply-demand-equilibrium',
    labels: [
      {
        marker: 'Movement from E₁ to E₂ along Supply curve S',
        options: ['Extension in quantity supplied incentivised by higher price P₂', 'Rightward shift of the supply curve', 'Contraction in quantity supplied'],
        answer: 'Extension in quantity supplied incentivised by higher price P₂',
      },
      {
        marker: 'Immediate market state at old price P* after D₁ shifts to D₂',
        options: ['Excess demand (shortage) signalling scarcity and bidding price upward', 'Excess supply (surplus)', 'Unchanged equilibrium'],
        answer: 'Excess demand (shortage) signalling scarcity and bidding price upward',
      },
    ],
    explanation: 'An outward shift from D₁ to D₂ creates excess demand at P*, signalling scarcity and pushing price up to P₂, which incentivises an extension along S.',
  },
  {
    id: 'al-econ-q-1-2-2',
    subtopicId: 'al-econ-1-2',
    type: 'short-answer',
    marks: 3,
    prompt: 'In a competitive market, demand meets the price axis at £100, supply meets the price axis at £10, and equilibrium is P* = £40, Q* = 300 units. Calculate Consumer Surplus, Producer Surplus, and Total Social Welfare.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Consumer Surplus = 0.5 × 300 × (£100 − £40) = £9,000. Producer Surplus = 0.5 × 300 × (£40 − £10) = £4,500. Total Social Welfare = £9,000 + £4,500 = £13,500.',
      markPoints: [
        { id: 'mp1', markDescription: 'Consumer Surplus = £9,000', numericMatch: { value: 9000, tolerance: 5 } },
        { id: 'mp2', markDescription: 'Producer Surplus = £4,500', numericMatch: { value: 4500, tolerance: 5 } },
        { id: 'mp3', markDescription: 'Total Social Welfare = £13,500', numericMatch: { value: 13500, tolerance: 5 } },
      ],
    },
    explanation: 'CS = ½ × 300 × 60 = £9,000; PS = ½ × 300 × 30 = £4,500; Total Social Welfare = CS + PS = £13,500.',
  },
  {
    id: 'al-econ-q-1-2-3',
    subtopicId: 'al-econ-1-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each interrelated market relationship to its exact example:',
    pairs: [
      { left: 'Derived demand', right: 'Demand for lithium rising because electric car sales surge' },
      { left: 'Composite demand', right: 'Farmland demanded simultaneously for housing and wheat' },
      { left: 'Joint supply', right: 'Higher beef production automatically increasing leather supply' },
      { left: 'Joint demand', right: 'Printers and replacement ink cartridges bought together' },
    ],
    explanation: 'Distinguishing derived, composite, joint demand, and joint supply is essential for Paper 1 multi-market transmission chains.',
  },
  {
    id: 'al-econ-q-1-2-4',
    subtopicId: 'al-econ-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'When a major productivity breakthrough shifts a market’s supply curve to the right (ceteris paribus), what happens to Consumer Surplus?',
    options: [
      'Consumer surplus unambiguously falls because equilibrium price falls',
      'Consumer surplus remains unchanged as long as demand does not shift',
      'Consumer surplus unambiguously increases due to lower price and higher equilibrium quantity',
      'Consumer surplus becomes zero at the new equilibrium',
    ],
    correctIndex: 2,
    explanation: 'A lower equilibrium price and larger quantity expand the triangle underneath the demand curve and above price, raising consumer surplus by a trapezium area.',
  },
  {
    id: 'al-econ-q-1-2-5',
    subtopicId: 'al-econ-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the price mechanism welfare summary:',
    segments: ['Rising prices perform the ', ' function by choking off buyers with lower willingness to pay, and competitive equilibrium achieves ', ' efficiency where P = MC.'],
    wordBank: ['rationing', 'allocative', 'subsidising', 'dynamic'],
    answers: ['rationing', 'allocative'],
    explanation: 'Higher prices ration scarce output to highest-valuing buyers, and where P = MC total surplus (CS + PS) is maximised (allocative efficiency).',
  },

  /* --- 1.3 --- */
  {
    id: 'al-econ-q-1-3-1',
    subtopicId: 'al-econ-1-3',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Analyse the revenue impact shown in the Elasticity Curves comparison:',
    diagram: 'elasticity-curves',
    labels: [
      {
        marker: 'Left panel (|PED| > 1, flat demand curve)',
        options: ['Raising price causes a proportionally larger drop in Q, reducing Total Revenue', 'Raising price boosts Total Revenue', 'Demand is perfectly inelastic'],
        answer: 'Raising price causes a proportionally larger drop in Q, reducing Total Revenue',
      },
      {
        marker: 'Right panel (|PED| < 1, steep demand curve)',
        options: ['Raising price causes only a small drop in Q, increasing Total Revenue', 'Raising price lowers Total Revenue', 'Substitutes are abundant'],
        answer: 'Raising price causes only a small drop in Q, increasing Total Revenue',
      },
    ],
    explanation: 'With elastic demand (|PED| > 1), revenue lost on foregone volume outweighs the price gain; with inelastic demand (|PED| < 1), the price-gain rectangle exceeds the small volume loss.',
  },
  {
    id: 'al-econ-q-1-3-2',
    subtopicId: 'al-econ-1-3',
    type: 'short-answer',
    marks: 3,
    prompt: 'Real incomes rise by 4% and sales of budget coach tickets fall by 6%. Meanwhile, a 10% rise in rail fares lifts coach ticket sales by 8%. Calculate YED and XED for coach tickets and classify the good.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'YED = −6% ÷ +4% = −1.5 (negative YED, so budget coach tickets are an inferior good). XED = +8% ÷ +10% = +0.8 (positive XED, so rail travel is a substitute for coach travel).',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates YED = −1.5', numericMatch: { value: -1.5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Calculates XED = +0.8', numericMatch: { value: 0.8, tolerance: 0.05 } },
        { id: 'mp3', markDescription: 'Identifies inferior good and substitute relationship', requiredKeywordGroups: [['inferior'], ['substitute']] },
      ],
    },
    explanation: 'Negative YED (−1.5) proves an inferior good; positive XED (+0.8) proves a substitute relationship with rail travel.',
  },
  {
    id: 'al-econ-q-1-3-3',
    subtopicId: 'al-econ-1-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each elasticity coefficient to its exact economic classification:',
    pairs: [
      { left: 'YED = +2.1', right: 'Normal luxury (income-elastic) good' },
      { left: 'YED = −0.6', right: 'Inferior good' },
      { left: 'XED = −1.4', right: 'Strong complement' },
      { left: 'PES = +0.25', right: 'Price-inelastic supply (e.g. new housing)' },
    ],
    explanation: 'Signs (+/−) classify normal/inferior (YED) and substitute/complement (XED), while magnitude (>1 or <1) indicates strength/responsiveness.',
  },
  {
    id: 'al-econ-q-1-3-4',
    subtopicId: 'al-econ-1-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors that make a firm’s Price Elasticity of Supply (PES) MORE ELASTIC:',
    options: [
      'Large volumes of spare productive capacity and idle machinery',
      'High levels of non-perishable finished stocks stored in warehouses',
      'A 5-year biological growing cycle with zero stored inventory',
      'Strict occupational immobility of specialist skilled workers',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Spare capacity and readily deployable non-perishable stocks allow firms to expand quantity supplied rapidly when price rises.',
  },
  {
    id: 'al-econ-q-1-3-5',
    subtopicId: 'al-econ-1-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Moving downward from left to right along a straight-line downward-sloping demand curve, what happens to |PED|?',
    options: [
      'It remains constant everywhere because the slope is constant',
      'It rises continuously from 0 to infinity',
      'It falls continuously from infinity above the midpoint, equals 1 at the midpoint, and approaches 0 near the Q-axis',
      'It stays equal to 1 at every point',
    ],
    correctIndex: 2,
    explanation: 'Because PED = (ΔQ/ΔP) × (P/Q), a constant slope (ΔQ/ΔP) combined with a falling P/Q ratio makes |PED| fall continuously down a linear demand curve.',
  },

  /* --- 2.1 --- */
  {
    id: 'al-econ-q-2-1-1',
    subtopicId: 'al-econ-2-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the Negative Externality of Production diagram:',
    diagram: 'externality-market-failure',
    labels: [
      {
        marker: 'Vertical distance between MSC and MPC',
        options: ['Marginal External Cost (MEC) imposed on third parties', 'Marginal Private Benefit', 'Consumer surplus'],
        answer: 'Marginal External Cost (MEC) imposed on third parties',
      },
      {
        marker: 'Shaded W. LOSS triangle pointing toward (Qopt, Popt)',
        options: ['Deadweight welfare loss from overproduction (Qm > Qopt) where MSC > MSB', 'Supernormal profit of the firm', 'Government tax revenue'],
        answer: 'Deadweight welfare loss from overproduction (Qm > Qopt) where MSC > MSB',
      },
    ],
    explanation: 'MSC = MPC + MEC; producing beyond Qopt up to Qm generates units where MSC exceeds MSB, creating the shaded deadweight welfare loss triangle.',
  },
  {
    id: 'al-econ-q-2-1-2',
    subtopicId: 'al-econ-2-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'A steelworks produces Qm = 10,000 tonnes/week with a constant Marginal External Cost of £50/tonne, whereas the social optimum is Qopt = 7,000 tonnes/week. Calculate the weekly deadweight welfare loss and explain why the free market overproduces.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Overproduction = 10,000 − 7,000 = 3,000 tonnes. Deadweight welfare loss = 0.5 × 3,000 × £50 = £75,000 per week. The free market overproduces because profit-maximising firms equate MPC = MPB and ignore external pollution costs (MSC > MPC), so price Pm is too low.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates welfare loss = £75,000', numericMatch: { value: 75000, tolerance: 50 } },
        { id: 'mp2', markDescription: 'Firms equate MPC = MPB and ignore external costs', requiredKeywordGroups: [['mpc'], ['ignore', 'external', 'third part']] },
        { id: 'mp3', markDescription: 'MSC > MPC so output exceeds Qopt / price too low', requiredKeywordGroups: [['msc'], ['qopt', 'overproduc', 'too low']] },
      ],
    },
    explanation: 'Welfare loss triangle = ½ × (10,000 − 7,000) × £50 = £75,000 because firms ignore MEC when choosing Qm where MPC = MPB.',
  },
  {
    id: 'al-econ-q-2-1-3',
    subtopicId: 'al-econ-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each source of market failure to its exact mechanism:',
    pairs: [
      { left: 'Adverse selection', right: 'Hidden pre-contract risk drives good quality out (Akerlof’s Lemons)' },
      { left: 'Moral hazard', right: 'Post-contract insulation from loss encourages reckless risk-taking' },
      { left: 'Free-rider problem', right: 'Non-excludability stops private firms charging for street lighting' },
      { left: 'Tragedy of the commons', right: 'Overfishing in non-excludable, rivalrous international waters' },
    ],
    explanation: 'Each market failure stems from a distinct structural breakdown in incentives, excludability, or symmetric information.',
  },
  {
    id: 'al-econ-q-2-1-4',
    subtopicId: 'al-econ-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In which direction does the vertex of the deadweight welfare loss triangle ALWAYS point on an externality diagram?',
    options: [
      'Always toward the free-market equilibrium (Qm, Pm)',
      'Always toward the vertical price axis',
      'Always toward the socially optimal equilibrium where MSB = MSC (Qopt, Popt)',
      'Always vertically downward toward the quantity axis',
    ],
    correctIndex: 2,
    explanation: 'Because welfare loss shrinks to zero at the social optimum (MSB = MSC), the triangle’s apex always points directly at (Qopt, Popt).',
  },
  {
    id: 'al-econ-q-2-1-5',
    subtopicId: 'al-econ-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the public goods and merit goods distinction:',
    segments: ['Pure public goods are both non-excludable and ', ', whereas state healthcare is rivalrous and therefore classified as a ', ' good.'],
    wordBank: ['non-rivalrous', 'merit', 'demerit', 'inferior'],
    answers: ['non-rivalrous', 'merit'],
    explanation: 'Healthcare uses rivalrous beds and doctors, so it is an under-consumed merit good rather than a pure public good.',
  },

  /* --- 2.2 --- */
  {
    id: 'al-econ-q-2-2-1',
    subtopicId: 'al-econ-2-2',
    type: 'short-answer',
    marks: 3,
    prompt: 'Pre-tax equilibrium for sugary soda is P₁ = £1.20/litre, Q₁ = 20m litres. A specific tax of £0.40/litre raises retail price to £1.50/litre and cuts sales to 18m litres. Calculate total tax revenue, consumer tax incidence, and producer tax incidence.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Total tax revenue = £0.40 × 18m = £7.2m. Consumer incidence = (£1.50 − £1.20) × 18m = £5.4m (75%). Producer net price is £1.10, so producer incidence = (£1.20 − £1.10) × 18m = £1.8m (25%).',
      markPoints: [
        { id: 'mp1', markDescription: 'Total tax revenue = £7.2m', numericMatch: { value: 7.2, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Consumer incidence = £5.4m', numericMatch: { value: 5.4, tolerance: 0.05 } },
        { id: 'mp3', markDescription: 'Producer incidence = £1.8m', numericMatch: { value: 1.8, tolerance: 0.05 } },
      ],
    },
    explanation: 'Revenue = £0.40 × 18m = £7.2m, split £5.4m to consumers (£0.30/L) and £1.8m to producers (£0.10/L) because demand is price inelastic.',
  },
  {
    id: 'al-econ-q-2-2-2',
    subtopicId: 'al-econ-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How does an AD VALOREM indirect tax (such as 20% VAT) shift a linear supply curve compared with a SPECIFIC (per-unit) tax?',
    options: [
      'Both cause an identical parallel shift to the right',
      'An ad valorem tax pivots the supply curve upward so the vertical gap widens as price rises, whereas a specific tax shifts it upward in parallel',
      'An ad valorem tax shifts the demand curve downward while a specific tax shifts supply',
      'An ad valorem tax leaves equilibrium price unchanged',
    ],
    correctIndex: 1,
    explanation: '20% of £10 is £2 whereas 20% of £100 is £20, so an ad valorem tax creates a progressively wider vertical gap above the original supply curve.',
  },
  {
    id: 'al-econ-q-2-2-3',
    subtopicId: 'al-econ-2-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO conditions under which CONSUMERS bear the vast majority of an indirect tax burden:',
    options: [
      'Demand is highly price inelastic (|PED| close to 0)',
      'Supply is relatively price elastic (PES > 1)',
      'Demand is perfectly elastic (horizontal demand curve)',
      'Supply is perfectly inelastic (vertical supply curve)',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'When |PED| is very small relative to PES, firms pass almost the entire per-unit tax onto consumers via higher retail prices.',
  },
  {
    id: 'al-econ-q-2-2-4',
    subtopicId: 'al-econ-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Pigouvian tax policy statement:',
    segments: ['Setting an indirect tax equal to Marginal External Cost at Qopt ', ' the negative externality, and ring-fencing its revenue for green buses is known as ', '.'],
    wordBank: ['internalises', 'hypothecation', 'deregulates', 'satisficing'],
    answers: ['internalises', 'hypothecation'],
    explanation: 'Internalising the externality aligns MPC + tax with MSC, and hypothecation mitigates regressivity while building elastic clean substitutes.',
  },
  {
    id: 'al-econ-q-2-2-5',
    subtopicId: 'al-econ-2-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Pigouvian tax evaluation point to its economic mechanism:',
    pairs: [
      { left: 'Regressive impact', right: 'Excise tax absorbs a higher share of low-income households’ earnings' },
      { left: 'Carbon leakage', right: 'Domestic polluters relocate output to loosely regulated countries' },
      { left: 'Valuation gap', right: 'Difficulty calculating exact monetary MEC leads to over- or under-taxing' },
      { left: 'Double dividend', right: 'Green tax cuts pollution while funding reductions in distortionary taxes' },
    ],
    explanation: 'Top-band A-Level evaluation weighs corrective precision against regressivity, leakage, and information gaps.',
  },

  /* --- 2.3 --- */
  {
    id: 'al-econ-q-2-3-1',
    subtopicId: 'al-econ-2-3',
    type: 'short-answer',
    marks: 3,
    prompt: 'An agricultural price floor is set at £300/tonne (above equilibrium £240/tonne). At £300/tonne, farmers supply 8m tonnes while consumers demand 5.5m tonnes. Calculate the surplus volume and the government cost to buy up the excess supply.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Excess supply (surplus) = 8m − 5.5m = 2.5m tonnes. Government purchase cost = £300 × 2.5m = £750m, incurring a major fiscal opportunity cost and storage expenses.',
      markPoints: [
        { id: 'mp1', markDescription: 'Excess supply = 2.5m tonnes', numericMatch: { value: 2.5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Government expenditure = £750m', numericMatch: { value: 750, tolerance: 1 } },
        { id: 'mp3', markDescription: 'Links to fiscal opportunity cost / storage', requiredKeywordGroups: [['opportunity cost', 'taxpayer', 'storage', 'fiscal', 'budget']] },
      ],
    },
    explanation: 'Surplus = 2.5m tonnes; guaranteed purchase at £300/tonne costs taxpayers £750m before warehousing or disposal costs.',
  },
  {
    id: 'al-econ-q-2-3-2',
    subtopicId: 'al-econ-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the market outcome if a city imposes a binding maximum rent ceiling set 25% BELOW market equilibrium?',
    options: [
      'Excess supply of rental apartments and falling vacancy waiting lists',
      'Persistent excess demand (housing shortage), informal black-market side payments, and reduced landlord maintenance',
      'Market equilibrium stays unchanged because supply shifts right automatically',
      'Deadweight welfare loss falls to zero',
    ],
    correctIndex: 1,
    explanation: 'Below-equilibrium rent caps cause Qd > Qs (shortage), creating queues, illegal key-money markets, and landlord under-investment in property quality.',
  },
  {
    id: 'al-econ-q-2-3-3',
    subtopicId: 'al-econ-2-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each cause of government failure to its real-world example:',
    pairs: [
      { left: 'Unintended consequences', right: 'Strict rent caps shrink private rental construction, worsening homelessness' },
      { left: 'Regulatory capture', right: 'Water regulator prioritises utility shareholders over river quality' },
      { left: 'Distortion of price signals', right: 'Guaranteed farm floors encourage overproduction of unwanted crops' },
      { left: 'Excessive admin costs', right: 'Inspection bureaucracy costs exceed the environmental welfare saved' },
    ],
    explanation: 'Government failure arises whenever state intervention lowers net economic welfare relative to the market outcome.',
  },
  {
    id: 'al-econ-q-2-3-4',
    subtopicId: 'al-econ-2-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO economic advantages of a Cap-and-Trade tradable pollution permit scheme over uniform command-and-control quotas:',
    options: [
      'Guarantees a legally capped ceiling on total aggregate emissions',
      'Minimises total abatement cost by letting lowest-cost firms abate and sell spare permits',
      'Requires zero monitoring or verification of factory emissions',
      'Prevents permit prices from ever falling during a recession',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Cap-and-trade combines quantitative emissions certainty with market-driven cost minimisation across firms with heterogeneous abatement costs.',
  },
  {
    id: 'al-econ-q-2-3-5',
    subtopicId: 'al-econ-2-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the subsidy and government failure rules:',
    segments: ['When demand is highly price ', ', consumers capture most of a production subsidy as a lower price; when intervention causes a net loss of welfare, economists diagnose ', '.'],
    wordBank: ['inelastic', 'government failure', 'elastic', 'allocative efficiency'],
    answers: ['inelastic', 'government failure'],
    explanation: 'Steep (inelastic) demand curves convert a downward supply shift mostly into a sharp price fall for consumers; net welfare loss from intervention is government failure.',
  },

  /* --- 3.1 --- */
  {
    id: 'al-econ-q-3-1-1',
    subtopicId: 'al-econ-3-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'A firm has TFC = £200. At Q = 5, TVC = £300; at Q = 6, TVC = £400. Calculate ATC at Q = 5, MC of the 6th unit, and ATC at Q = 6.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'At Q = 5: TC = £200 + £300 = £500, so ATC = £500 ÷ 5 = £100. At Q = 6: TC = £200 + £400 = £600, so MC of the 6th unit = £600 − £500 = £100, and ATC = £600 ÷ 6 = £100.',
      markPoints: [
        { id: 'mp1', markDescription: 'ATC at Q = 5 is £100', numericMatch: { value: 100, tolerance: 0.5 } },
        { id: 'mp2', markDescription: 'MC of 6th unit is £100', numericMatch: { value: 100, tolerance: 0.5 } },
        { id: 'mp3', markDescription: 'Correctly uses TC = TFC + TVC and ATC = TC/Q', requiredKeywordGroups: [['500'], ['600']] },
      ],
    },
    explanation: 'TC₅ = £500 (ATC = £100), TC₆ = £600 → MC = £100 and ATC stays at £100 (its minimum point where MC = ATC).',
  },
  {
    id: 'al-econ-q-3-1-2',
    subtopicId: 'al-econ-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Where does the short-run Marginal Cost (MC) curve ALWAYS intersect the Average Variable Cost (AVC) and Average Total Cost (ATC) curves?',
    options: [
      'At their maximum points',
      'At their exact minimum points',
      'At the vertical cost axis',
      'Only where AFC equals zero',
    ],
    correctIndex: 1,
    explanation: 'Whenever MC < ATC, the extra unit pulls average cost down; whenever MC > ATC, it pulls average cost up — mathematically forcing MC through the exact minimum of both AVC and ATC.',
  },
  {
    id: 'al-econ-q-3-1-3',
    subtopicId: 'al-econ-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each alternative firm objective to its exact graphical condition:',
    pairs: [
      { left: 'Profit maximisation', right: 'MC = MR (with MC rising)' },
      { left: 'Revenue maximisation', right: 'MR = 0 (|PED| = 1)' },
      { left: 'Sales volume maximisation', right: 'AR = AC (normal profit constraint)' },
      { left: 'Profit satisficing', right: 'Sufficient profit to appease shareholders while meeting other goals' },
    ],
    explanation: 'Each firm objective maps to a distinct output and price coordinate along the standard AR/MR/MC/AC diagram.',
  },
  {
    id: 'al-econ-q-3-1-4',
    subtopicId: 'al-econ-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the short-run vs long-run cost distinction:',
    segments: ['Rising short-run MC is caused by ', ', whereas the lowest output where LRAC hits its bottom is the ', '.'],
    wordBank: ['diminishing marginal returns', 'minimum efficient scale', 'external economies', 'normal profit'],
    answers: ['diminishing marginal returns', 'minimum efficient scale'],
    explanation: 'Fixed factors drive short-run diminishing marginal returns; full exploitation of internal scale economies defines the Minimum Efficient Scale (MES).',
  },
  {
    id: 'al-econ-q-3-1-5',
    subtopicId: 'al-econ-3-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO reasons why managers in a large PLC may pursue revenue maximisation or satisficing instead of profit maximisation:',
    options: [
      'Divorce of ownership from control creates a principal-agent problem with asymmetric information',
      'Executive pay, prestige, and bonuses are often linked to sales turnover and firm size',
      'Profit maximisation is illegal for public limited companies',
      'Shareholders always prefer zero profit over dividends',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Salaried managers (agents) hold information advantages over dispersed shareholders (principals) and often gain status/bonuses from higher revenue and market share.',
  },

  /* --- 3.2 --- */
  {
    id: 'al-econ-q-3-2-1',
    subtopicId: 'al-econ-3-2',
    type: 'short-answer',
    marks: 3,
    prompt: 'A perfectly competitive firm sells at P = £20. At MC = MR output of 500 units, AVC = £16 and AFC = £7. Calculate its short-run operating loss vs shut-down loss and state whether it should stay open in the short run.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'ATC = £16 + £7 = £23 and TFC = £7 × 500 = £3,500. Operating loss = (£20 − £23) × 500 = −£1,500 (a loss of £1,500). Shut-down loss = −£3,500 (a loss of £3,500 in unavoidable fixed costs). Because P (£20) > AVC (£16), it should stay open in the short run, saving £2,000.',
      markPoints: [
        { id: 'mp1', markDescription: 'Operating loss = £1,500', numericMatch: { value: 1500, tolerance: 5 } },
        { id: 'mp2', markDescription: 'Shut-down loss = £3,500 (TFC)', numericMatch: { value: 3500, tolerance: 5 } },
        { id: 'mp3', markDescription: 'Stay open in short run because P > AVC', requiredKeywordGroups: [['stay open', 'continue', 'operate', 'operating'], ['avc']] },
      ],
    },
    explanation: 'Positive contribution of (£20 − £16) × 500 = £2,000 covers part of the £3,500 fixed costs, cutting short-run loss from £3,500 to £1,500.',
  },
  {
    id: 'al-econ-q-3-2-2',
    subtopicId: 'al-econ-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why can a perfectly competitive firm NOT sustain supernormal profit in the long run?',
    options: [
      'Government regulators cap prices at zero profit',
      'Zero barriers to entry and perfect information attract new entrants, shifting industry supply right until P = min ATC',
      'Consumers stop buying homogeneous goods in the long run',
      'Marginal cost falls to zero',
    ],
    correctIndex: 1,
    explanation: 'Supernormal profits act as a signal and incentive for entrants; expanding industry supply drives equilibrium price down until only normal profit remains.',
  },
  {
    id: 'al-econ-q-3-2-3',
    subtopicId: 'al-econ-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each type of economic efficiency to its precise definition:',
    pairs: [
      { left: 'Allocative efficiency', right: 'Price equals Marginal Cost (P = MC)' },
      { left: 'Productive efficiency', right: 'Output produced at minimum Average Total Cost (min ATC)' },
      { left: 'X-efficiency', right: 'Producing strictly on (not above) the lowest attainable cost curve' },
      { left: 'Dynamic efficiency', right: 'Long-run R&D innovation improving products and lowering LRAC over time' },
    ],
    explanation: 'Long-run perfect competition hits all three static efficiencies (allocative, productive, X) but typically lacks dynamic efficiency.',
  },
  {
    id: 'al-econ-q-3-2-4',
    subtopicId: 'al-econ-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the competitive price-taker rules:',
    segments: ['A perfectly competitive firm is a price taker where P = AR = ', ', and its short-run supply curve is the rising portion of its MC curve above minimum ', '.'],
    wordBank: ['MR', 'AVC', 'AFC', 'TFC'],
    answers: ['MR', 'AVC'],
    explanation: 'Selling every unit at constant market price makes P = AR = MR, and firms supply along MC only when P ≥ min AVC.',
  },
  {
    id: 'al-econ-q-3-2-5',
    subtopicId: 'al-econ-3-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO features that hold strictly in LONG-RUN equilibrium under perfect competition:',
    options: [
      'Every firm earns normal profit only (P = min ATC)',
      'Both allocative efficiency (P = MC) and productive efficiency (min ATC) are achieved',
      'Firms sustain large supernormal profits to fund heavy R&D budgets',
      'Each firm faces a steep downward-sloping AR curve',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'In long-run equilibrium, free entry/exit forces P = MR = MC = min ATC, achieving allocative and productive efficiency with normal profit only.',
  },

  /* --- 3.3 --- */
  {
    id: 'al-econ-q-3-3-1',
    subtopicId: 'al-econ-3-3',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the features on the Profit-Maximising Monopoly diagram:',
    diagram: 'monopoly-market-structure',
    labels: [
      {
        marker: 'Output Qm determined where MC intersects MR',
        options: ['Profit-maximising output, with price Pm read vertically off AR = D', 'Allocatively efficient output where P = MC', 'Revenue-maximising output where MR = 0'],
        answer: 'Profit-maximising output, with price Pm read vertically off AR = D',
      },
      {
        marker: 'Shaded DWL triangle between Qm and Qalloc',
        options: ['Deadweight welfare loss caused by under-production and P > MC', 'Total fixed cost', 'Consumer surplus gained'],
        answer: 'Deadweight welfare loss caused by under-production and P > MC',
      },
    ],
    explanation: 'The monopolist sets Qm at MC = MR and charges Pm on AR, leaving Qm < Qalloc and creating the shaded DWL triangle where P > MC.',
  },
  {
    id: 'al-econ-q-3-3-2',
    subtopicId: 'al-econ-3-3',
    type: 'short-answer',
    marks: 3,
    prompt: 'A monopolist produces Qm = 4,000 units at MC = MR, charging Pm = £85 while AC = £55 and MC = £35. Calculate its supernormal profit and explain why Pm > MC causes allocative inefficiency.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Supernormal profit = (£85 − £55) × 4,000 = £120,000. Because Pm (£85) > MC (£35), consumers value extra units more highly than the marginal opportunity cost of producing them, meaning output is restricted below Qalloc and deadweight welfare loss occurs.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates supernormal profit = £120,000', numericMatch: { value: 120000, tolerance: 100 } },
        { id: 'mp2', markDescription: 'Consumer valuation (P) exceeds marginal cost (MC)', requiredKeywordGroups: [['value', 'valuation', 'willing'], ['marginal cost', 'mc']] },
        { id: 'mp3', markDescription: 'Under-production / deadweight welfare loss', requiredKeywordGroups: [['restrict', 'under-produc', 'below', 'welfare loss', 'deadweight']] },
      ],
    },
    explanation: '(£85 − £55) × 4,000 = £120,000 supernormal profit; P > MC signifies unexploited mutually beneficial trades (deadweight welfare loss).',
  },
  {
    id: 'al-econ-q-3-3-3',
    subtopicId: 'al-econ-3-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO necessary conditions for a firm to practise THIRD-DEGREE PRICE DISCRIMINATION successfully:',
    options: [
      'Ability to separate distinct consumer groups with different Price Elasticities of Demand (PED)',
      'Ability to prevent arbitrage (resale/seepage) between the low-price and high-price markets',
      'Operating in a perfectly competitive market with horizontal demand',
      'Having identical PED across all buyer segments',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Alongside monopoly power, a firm must separate groups with differing PEDs and prevent arbitrage from eroding the higher-price segment.',
  },
  {
    id: 'al-econ-q-3-3-4',
    subtopicId: 'al-econ-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does RPI − X (or CPI − X) price-cap regulation incentivise a regulated utility monopoly to improve productive efficiency?',
    options: [
      'It guarantees the firm a fixed 15% profit regardless of how high its costs rise',
      'Because maximum price is capped in real terms, the firm keeps any extra profit generated by cutting costs faster than the X factor',
      'It bans all capital investment permanently',
      'It forces P = MC so the firm earns infinite profit',
    ],
    correctIndex: 1,
    explanation: 'Under an incentive price cap, beating the efficiency target X lets the utility retain higher profits until the next regulatory review, driving down X-inefficiency.',
  },
  {
    id: 'al-econ-q-3-3-5',
    subtopicId: 'al-econ-3-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the natural monopoly and dynamic innovation statements:',
    segments: ['When high fixed infrastructure costs cause LRAC to fall continuously across total market demand, the industry is a ', '; reinvesting monopoly profits into R&D generates Schumpeterian ', '.'],
    wordBank: ['natural monopoly', 'creative destruction', 'price taker', 'cartel'],
    answers: ['natural monopoly', 'creative destruction'],
    explanation: 'Natural monopolies enjoy scale economies across the whole market; Schumpeterian creative destruction describes innovation-led dynamic efficiency.',
  },

  /* --- 3.4 --- */
  {
    id: 'al-econ-q-3-4-1',
    subtopicId: 'al-econ-3-4',
    type: 'short-answer',
    marks: 3,
    prompt: 'In an oligopoly, the top 4 firms hold market shares of 30%, 24%, 18%, and 12%. Two rivals face a pricing matrix: Both High = (£9m, £9m); One Cuts / Other High = (£13m, £1m); Both Cut = (£4m, £4m). Calculate CR4 and identify the Nash equilibrium.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'CR4 = 30% + 24% + 18% + 12% = 84%. Cut Price is the dominant strategy for both firms (£13m > £9m and £4m > £1m), so the Nash equilibrium is Both Cut Price with payoffs (£4m, £4m).',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates CR4 = 84%', numericMatch: { value: 84, tolerance: 0.5 } },
        { id: 'mp2', markDescription: 'Identifies Cut Price as dominant strategy', requiredKeywordGroups: [['cut'], ['dominant']] },
        { id: 'mp3', markDescription: 'Identifies Nash equilibrium as Both Cut (£4m, £4m)', requiredKeywordGroups: [['both cut', '4m', 'nash']] },
      ],
    },
    explanation: 'CR4 = 84% (tight oligopoly); because unilateral cutting always beats holding high, Both Cut (£4m, £4m) is the Prisoner’s Dilemma Nash equilibrium.',
  },
  {
    id: 'al-econ-q-3-4-2',
    subtopicId: 'al-econ-3-4',
    type: 'mcq',
    marks: 1,
    prompt: 'In Sweezy’s kinked demand curve model of oligopoly, what causes prices to remain rigid even when Marginal Cost fluctuates slightly?',
    options: [
      'A vertical discontinuity (gap) in the Marginal Revenue curve directly below the kink at Q*',
      'Marginal cost is always zero in oligopolies',
      'Demand is perfectly horizontal above and below P*',
      'The government legally freezes prices in all oligopolies',
    ],
    correctIndex: 0,
    explanation: 'Because MR jumps vertically downward at Q*, moderate shifts in MC still pass through the vertical MR discontinuity, keeping profit-maximising price fixed at P*.',
  },
  {
    id: 'al-econ-q-3-4-3',
    subtopicId: 'al-econ-3-4',
    type: 'matching',
    marks: 2,
    prompt: 'Match each oligopoly and contestability term to its definition:',
    pairs: [
      { left: 'Overt collusion', right: 'Explicit formal cartel agreement to fix prices or output quotas' },
      { left: 'Tacit collusion', right: 'Unspoken parallel pricing such as dominant-firm price leadership' },
      { left: 'Sunk cost', right: 'Irrecoverable cost upon exit that deters hit-and-run challengers' },
      { left: 'Limit pricing', right: 'Incumbent pricing near AC (normal profit) to deter potential entrants' },
    ],
    explanation: 'Clear separation of collusion types, sunk costs, and strategic limit pricing underpins top-band A-Level market structure essays.',
  },
  {
    id: 'al-econ-q-3-4-4',
    subtopicId: 'al-econ-3-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete Baumol’s contestable market mechanism:',
    segments: ['When sunk costs are negligible, incumbents face the threat of ', ' competition, forcing them to set prices close to ', ' to deter entrants.'],
    wordBank: ['hit-and-run', 'average cost', 'marginal revenue', 'cartel'],
    answers: ['hit-and-run', 'average cost'],
    explanation: 'Credible hit-and-run entry eliminates persistent supernormal profits by forcing incumbents toward limit pricing at P ≈ AC.',
  },
  {
    id: 'al-econ-q-3-4-5',
    subtopicId: 'al-econ-3-4',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors that make an oligopolistic cartel MORE LIKELY to collapse:',
    options: [
      'Strong short-run profit incentive for one member to secretly discount below the cartel price',
      'Competition authority whistleblower leniency programmes offering fine immunity',
      'Having only two firms with identical cost structures and transparent prices',
      'High legal barriers prohibiting any new rivals from entering',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Cheating payoffs (Prisoner’s Dilemma) and antitrust leniency schemes destabilise cartels, whereas few symmetric firms and high barriers help sustain them.',
  },
];

export const ALEVEL_ECON_UNITS_1_3_FLASHCARDS: FlashcardItem[] = [
  /* --- 1.1 --- */
  {
    id: 'al-econ-fc-1-1-1',
    subtopicId: 'al-econ-1-1',
    front: 'Distinguish positive statements from normative statements in economic methodology.',
    backBullets: [
      'Positive: objective, empirically testable/falsifiable claims (even if factually false).',
      'Normative: subjective value judgements about what ought/should happen; cannot be proved by data alone.',
    ],
  },
  {
    id: 'al-econ-fc-1-1-2',
    subtopicId: 'al-econ-1-1',
    front: 'Why is a Production Possibility Curve (PPC) typically concave to the origin?',
    backBullets: [
      'Factors of production are not equally suited to producing both goods (imperfect factor substitutability).',
      'Shifting more resources to one good forces progressively less suited inputs to switch, causing increasing marginal opportunity cost.',
    ],
    diagram: 'production-possibility-curve',
  },
  {
    id: 'al-econ-fc-1-1-3',
    subtopicId: 'al-econ-1-1',
    front: 'Distinguish productive efficiency from allocative efficiency on a PPC.',
    backBullets: [
      'Productive efficiency: ANY point on the PPC boundary (full employment, maximum output from inputs).',
      'Allocative efficiency: the single point on the PPC matching society’s marginal preferences (P = MC).',
    ],
  },
  {
    id: 'al-econ-fc-1-1-4',
    subtopicId: 'al-econ-1-1',
    front: 'What is bounded rationality and why does it challenge neoclassical consumer theory?',
    backBullets: [
      'Consumers face finite time, incomplete information, and cognitive limits, so they rely on heuristics and satisfice rather than computing exact MU/P ratios.',
    ],
  },
  {
    id: 'al-econ-fc-1-1-5',
    subtopicId: 'al-econ-1-1',
    front: 'Define anchoring, framing, loss aversion, and default nudges.',
    backBullets: [
      'Anchoring: over-relying on initial reference prices; Framing: presentation altering choices.',
      'Loss aversion: losses hurt ~2× more than equal gains; Default nudges: opt-out choice architecture using status quo bias.',
    ],
  },

  /* --- 1.2 --- */
  {
    id: 'al-econ-fc-1-2-1',
    subtopicId: 'al-econ-1-2',
    front: 'Explain the three functions of the price mechanism (SIR) during excess demand.',
    backBullets: [
      'Signalling: rising price communicates scarcity; Incentivising: higher profit encourages firms to extend Qs.',
      'Rationing: higher price chokes off demand from lower-valuing buyers until market clears.',
    ],
    diagram: 'supply-demand-equilibrium',
  },
  {
    id: 'al-econ-fc-1-2-2',
    subtopicId: 'al-econ-1-2',
    front: 'State the definitions and triangle formulas for Consumer Surplus and Producer Surplus.',
    backBullets: [
      'CS = willingness to pay minus market price paid = ½ × Q* × (Pmax − P*).',
      'PS = market price received minus minimum supply price = ½ × Q* × (P* − Pmin).',
    ],
  },
  {
    id: 'al-econ-fc-1-2-3',
    subtopicId: 'al-econ-1-2',
    front: 'Distinguish derived demand, composite demand, and joint supply.',
    backBullets: [
      'Derived: input demanded for final output (steel for cars); Composite: one resource with competing uses (milk for butter/cheese).',
      'Joint supply: producing one good simultaneously yields a by-product (beef & leather).',
    ],
  },
  {
    id: 'al-econ-fc-1-2-4',
    subtopicId: 'al-econ-1-2',
    front: 'How does PED affect the size of Consumer Surplus at equilibrium?',
    backBullets: [
      'More price-inelastic (steeper) demand produces a taller price intercept and much larger Consumer Surplus.',
      'Perfectly elastic (horizontal) demand yields zero Consumer Surplus.',
    ],
  },
  {
    id: 'al-econ-fc-1-2-5',
    subtopicId: 'al-econ-1-2',
    front: 'Why is Producer Surplus NOT identical to total economic profit?',
    backBullets: [
      'Supply tracks Marginal Cost, so area under S equals Total Variable Cost (TVC).',
      'Therefore PS = TR − TVC = Economic Profit + Total Fixed Cost (TFC).',
    ],
  },

  /* --- 1.3 --- */
  {
    id: 'al-econ-fc-1-3-1',
    subtopicId: 'al-econ-1-3',
    front: 'How does |PED| change along a straight-line downward-sloping demand curve?',
    backBullets: [
      'Falls continuously from ∞ at the P-axis to 1 at the midpoint (where Total Revenue is maximised and MR = 0) down to 0 at the Q-axis.',
    ],
    diagram: 'elasticity-curves',
  },
  {
    id: 'al-econ-fc-1-3-2',
    subtopicId: 'al-econ-1-3',
    front: 'Classify goods using the exact numerical ranges of YED (%ΔQd ÷ %ΔY).',
    backBullets: [
      'YED < 0: Inferior good; 0 < YED < 1: Normal necessity (income inelastic).',
      'YED > 1: Normal luxury / superior good (income elastic).',
    ],
  },
  {
    id: 'al-econ-fc-1-3-3',
    subtopicId: 'al-econ-1-3',
    front: 'Classify related goods using XED (%ΔQdA ÷ %ΔPB).',
    backBullets: [
      'XED > 0: Substitutes (larger positive = closer substitutes); XED < 0: Complements (larger negative = stronger complements).',
      'XED ≈ 0: Unrelated goods.',
    ],
  },
  {
    id: 'al-econ-fc-1-3-4',
    subtopicId: 'al-econ-1-3',
    front: 'Why do primary commodities suffer far sharper price volatility than manufactured goods?',
    backBullets: [
      'Both PES (long biological/mining lags) and PED (essential inputs/staples) are highly price inelastic.',
      'Small weather or demand shocks therefore cause dramatic vertical price swings.',
    ],
  },
  {
    id: 'al-econ-fc-1-3-5',
    subtopicId: 'al-econ-1-3',
    front: 'Give three limitations of using elasticity figures in business decision-making.',
    backBullets: [
      'Estimates rely on outdated past data and sample errors; ceteris paribus fails when rivals retaliate or tastes/incomes shift.',
      'Elasticity changes over time and along the demand curve as prices move.',
    ],
  },

  /* --- 2.1 --- */
  {
    id: 'al-econ-fc-2-1-1',
    subtopicId: 'al-econ-2-1',
    front: 'State the MSC and MSB equations and the condition for social optimum.',
    backBullets: [
      'MSC = MPC + MEC (Marginal External Cost); MSB = MPB + MEB (Marginal External Benefit).',
      'Socially optimal output Qopt occurs strictly where MSB = MSC; the welfare loss triangle always points to Qopt.',
    ],
    diagram: 'externality-market-failure',
  },
  {
    id: 'al-econ-fc-2-1-2',
    subtopicId: 'al-econ-2-1',
    front: 'Why do pure public goods suffer complete market failure (missing markets)?',
    backBullets: [
      'Non-excludability lets non-payers free-ride, removing private firms’ ability to charge profitably.',
      'Non-rivalry means marginal cost of an extra user is zero, so charging P > 0 would be allocatively inefficient.',
    ],
  },
  {
    id: 'al-econ-fc-2-1-3',
    subtopicId: 'al-econ-2-1',
    front: 'Distinguish Adverse Selection from Moral Hazard.',
    backBullets: [
      'Adverse selection: pre-contract hidden information (e.g. Akerlof’s Lemons used cars, unhealthy insurance applicants) shrinks markets.',
      'Moral hazard: post-contract hidden action where insured/bailed-out agents take excessive risks.',
    ],
  },
  {
    id: 'al-econ-fc-2-1-4',
    subtopicId: 'al-econ-2-1',
    front: 'What distinguishes a common-pool resource from a pure public good?',
    backBullets: [
      'Common-pool resources (ocean fisheries) are non-excludable like public goods, but RIVALROUS in consumption.',
      'Rivalry + open access triggers the Tragedy of the Commons (over-depletion).',
    ],
  },
  {
    id: 'al-econ-fc-2-1-5',
    subtopicId: 'al-econ-2-1',
    front: 'How do signalling and screening reduce asymmetric information?',
    backBullets: [
      'Signalling: informed party credibly reveals quality (warranties, degrees, vehicle inspections).',
      'Screening: uninformed party designs contracts to separate risk types (insurance deductibles, no-claims discounts).',
    ],
  },

  /* --- 2.2 --- */
  {
    id: 'al-econ-fc-2-2-1',
    subtopicId: 'al-econ-2-2',
    front: 'How does a Pigouvian tax correct a negative production externality?',
    backBullets: [
      'Sets a per-unit tax equal to MEC at Qopt, shifting MPC upward to align with MSC.',
      'Internalises the externality, raising price to Popt, cutting output to Qopt, and eliminating welfare loss.',
    ],
    diagram: 'externality-market-failure',
  },
  {
    id: 'al-econ-fc-2-2-2',
    subtopicId: 'al-econ-2-2',
    front: 'Compare the diagrammatic shift of a specific tax vs an ad valorem tax.',
    backBullets: [
      'Specific (per-unit) tax: parallel upward shift of supply by fixed amount t.',
      'Ad valorem (% of price) tax: upward pivotal divergence of supply (wider gap at higher prices).',
    ],
  },
  {
    id: 'al-econ-fc-2-2-3',
    subtopicId: 'al-econ-2-2',
    front: 'State the formulas for Total Tax Revenue, Consumer Incidence, and Producer Incidence.',
    backBullets: [
      'Total Tax Revenue = t × Q₂; Consumer burden = (P₂ − P₁) × Q₂; Producer burden = (P₁ − Pp) × Q₂.',
      'Whichever side is relatively more price inelastic bears the larger incidence share.',
    ],
  },
  {
    id: 'al-econ-fc-2-2-4',
    subtopicId: 'al-econ-2-2',
    front: 'Why are indirect excise taxes often criticised on equity grounds?',
    backBullets: [
      'They are regressive: a flat levy on fuel, tobacco, or sugar takes a higher proportion of disposable income from poorer households than wealthy households.',
    ],
  },
  {
    id: 'al-econ-fc-2-2-5',
    subtopicId: 'al-econ-2-2',
    front: 'What is hypothecation and how does it improve the evaluation of Pigouvian taxes?',
    backBullets: [
      'Ring-fencing green tax revenues to subsidise clean substitutes (public transport) or compensate low-income households.',
      'Counters regressivity and increases long-run PED of the polluting good.',
    ],
  },

  /* --- 2.3 --- */
  {
    id: 'al-econ-fc-2-3-1',
    subtopicId: 'al-econ-2-3',
    front: 'State the total fiscal cost and incidence split of a specific per-unit subsidy s.',
    backBullets: [
      'Government cost = s × Q₂; Consumer share = (P₁ − P₂) × Q₂; Producer share = (Pp − P₁) × Q₂.',
      'Inelastic demand passes more of the subsidy to consumers via lower prices; elastic demand boosts quantity more.',
    ],
  },
  {
    id: 'al-econ-fc-2-3-2',
    subtopicId: 'al-econ-2-3',
    front: 'Compare binding Maximum Prices vs binding Minimum Prices.',
    backBullets: [
      'Maximum price (set BELOW Pe): excess demand (shortage), queues, black markets, quality decline.',
      'Minimum price (set ABOVE Pe): excess supply (surplus), potential taxpayer purchase cost = Pmin × (Qs − Qd).',
    ],
  },
  {
    id: 'al-econ-fc-2-3-3',
    subtopicId: 'al-econ-2-3',
    front: 'How do tradable pollution permits achieve an emissions target at minimum cost?',
    backBullets: [
      'Firms with low abatement cost cut pollution and sell spare permits to high-abatement-cost firms.',
      'Ensures pollution is reduced wherever abatement is cheapest while capping total emissions.',
    ],
  },
  {
    id: 'al-econ-fc-2-3-4',
    subtopicId: 'al-econ-2-3',
    front: 'List five main causes of Government Failure.',
    backBullets: [
      'Distortion of price signals; unintended consequences (black markets/shortages); information gaps.',
      'Excessive administrative/enforcement costs; regulatory capture and short-term political myopia.',
    ],
  },
  {
    id: 'al-econ-fc-2-3-5',
    subtopicId: 'al-econ-2-3',
    front: 'Why might a Cap-and-Trade scheme fail to curb emissions effectively?',
    backBullets: [
      'Over-allocation of free permits collapses carbon prices; firms may relocate abroad (carbon leakage).',
      'Monitoring emissions across small firms incurs high administrative costs.',
    ],
  },

  /* --- 3.1 --- */
  {
    id: 'al-econ-fc-3-1-1',
    subtopicId: 'al-econ-3-1',
    front: 'Why does short-run Marginal Cost (MC) always cut AVC and ATC at their exact minimum points?',
    backBullets: [
      'When MC < average, each extra unit pulls the average down; when MC > average, it pulls the average up.',
      'Therefore the turning point (minimum) of both AVC and ATC occurs precisely where MC intersects them.',
    ],
  },
  {
    id: 'al-econ-fc-3-1-2',
    subtopicId: 'al-econ-3-1',
    front: 'Distinguish diminishing marginal returns from diseconomies of scale.',
    backBullets: [
      'Diminishing marginal returns: SHORT-RUN law when variable labour crowds a FIXED capital factor.',
      'Diseconomies of scale: LONG-RUN rising LRAC when ALL inputs expand excessively (communication/control breakdowns).',
    ],
  },
  {
    id: 'al-econ-fc-3-1-3',
    subtopicId: 'al-econ-3-1',
    front: 'What is Minimum Efficient Scale (MES) and how does it determine market structure?',
    backBullets: [
      'Lowest output where LRAC hits its minimum (exhausting internal economies of scale).',
      'High MES relative to market demand yields oligopoly or natural monopoly; low MES supports many small firms.',
    ],
  },
  {
    id: 'al-econ-fc-3-1-4',
    subtopicId: 'al-econ-3-1',
    front: 'State the four A-Level firm objectives and their exact graphical rules.',
    backBullets: [
      'Profit max: MC = MR; Revenue max: MR = 0 (TR peak); Sales volume max: AR = AC (normal profit).',
      'Profit satisficing: earning minimum acceptable profit to placate shareholders while pursuing managerial goals.',
    ],
  },
  {
    id: 'al-econ-fc-3-1-5',
    subtopicId: 'al-econ-3-1',
    front: 'Explain the Principal-Agent Problem in public limited companies.',
    backBullets: [
      'Divorce of ownership (shareholders = principals) from control (managers = agents) plus asymmetric information.',
      'Managers may pursue revenue growth, empire-building, or satisficing instead of strict MC = MR profit maximisation.',
    ],
  },

  /* --- 3.2 --- */
  {
    id: 'al-econ-fc-3-2-1',
    subtopicId: 'al-econ-3-2',
    front: 'Trace how short-run supernormal profit disappears in long-run perfect competition.',
    backBullets: [
      'Supernormal profit (P > ATC) + zero entry barriers + perfect info attract new entrants.',
      'Industry supply shifts right, driving market price down until P = AR = MR = MC = min ATC (normal profit only).',
    ],
  },
  {
    id: 'al-econ-fc-3-2-2',
    subtopicId: 'al-econ-3-2',
    front: 'State the exact short-run vs long-run shut-down conditions and explain why they differ.',
    backBullets: [
      'Short run: shut down only if P < AVC (if AVC ≤ P < ATC, positive contribution P − AVC offsets unavoidable fixed costs).',
      'Long run: shut down/exit if P < ATC because all costs become variable.',
    ],
  },
  {
    id: 'al-econ-fc-3-2-3',
    subtopicId: 'al-econ-3-2',
    front: 'Which segment of a perfectly competitive firm’s cost diagram is its short-run supply curve?',
    backBullets: [
      'The upward-sloping portion of the Marginal Cost (MC) curve lying at or above minimum Average Variable Cost (AVC).',
    ],
  },
  {
    id: 'al-econ-fc-3-2-4',
    subtopicId: 'al-econ-3-2',
    front: 'Evaluate perfect competition on static efficiency vs dynamic efficiency.',
    backBullets: [
      'Static win: achieves allocative (P = MC), productive (min ATC), and X-efficiency in long-run equilibrium.',
      'Dynamic weakness: zero supernormal profit and tiny firm scale prevent R&D investment, economies of scale, and product variety.',
    ],
  },
  {
    id: 'al-econ-fc-3-2-5',
    subtopicId: 'al-econ-3-2',
    front: 'How does long-run monopolistic competition differ from perfect competition?',
    backBullets: [
      'Both earn normal profit only (P = AC) due to low entry barriers.',
      'Monopolistic competition has differentiated products (downward-sloping AR), so firms operate with excess capacity (left of min ATC) and P > MC.',
    ],
  },

  /* --- 3.3 --- */
  {
    id: 'al-econ-fc-3-3-1',
    subtopicId: 'al-econ-3-3',
    front: 'Explain the static inefficiencies and potential dynamic benefits of a pure monopoly.',
    backBullets: [
      'Inefficiencies: sets MC = MR with Pm > MC (allocative inefficiency + DWL), Qm away from min ATC, X-inefficiency.',
      'Potential benefits: huge economies of scale shifting MC down + supernormal profits funding Schumpeterian R&D.',
    ],
    diagram: 'monopoly-market-structure',
  },
  {
    id: 'al-econ-fc-3-3-2',
    subtopicId: 'al-econ-3-3',
    front: 'Why is a natural monopoly productively efficient yet unable to price at P = MC without subsidy?',
    backBullets: [
      'Huge fixed infrastructure causes LRAC to fall continuously across market demand (one firm avoids wasteful duplication).',
      'Because LRAC is falling, MC lies strictly below AC, so forcing P = MC inflicts a permanent loss.',
    ],
  },
  {
    id: 'al-econ-fc-3-3-3',
    subtopicId: 'al-econ-3-3',
    front: 'State the three conditions for Third-Degree Price Discrimination and its pricing rule.',
    backBullets: [
      'Conditions: (1) Monopoly power, (2) Separable sub-markets with differing PEDs, (3) No arbitrage/seepage.',
      'Rule: charge higher price in the price-inelastic segment and lower price in the price-elastic segment (MR₁ = MR₂ = MC).',
    ],
  },
  {
    id: 'al-econ-fc-3-3-4',
    subtopicId: 'al-econ-3-3',
    front: 'How does RPI − X regulation work and what is its key risk?',
    backBullets: [
      'Caps annual nominal price rises to inflation minus efficiency factor X; beating X lets the firm keep cost-saving profit.',
      'Risks: asymmetric cost information, regulatory capture, or under-investing in quality/maintenance if X is set too high.',
    ],
  },
  {
    id: 'al-econ-fc-3-3-5',
    subtopicId: 'al-econ-3-3',
    front: 'How can third-degree price discrimination benefit certain consumers?',
    backBullets: [
      'Low-income elastic groups (students, off-peak travellers) get prices below single-price monopoly levels.',
      'Extra revenue can cross-subsidise rural routes or finance R&D/capacity expansion.',
    ],
  },

  /* --- 3.4 --- */
  {
    id: 'al-econ-fc-3-4-1',
    subtopicId: 'al-econ-3-4',
    front: 'Explain why Sweezy’s kinked demand curve predicts price rigidity in oligopoly.',
    backBullets: [
      'Rivals ignore price rises (elastic upper D) but match price cuts (inelastic lower D).',
      'Creates a vertical discontinuity in MR at Q*, so MC shifts within the gap leave optimal price fixed at P*.',
    ],
  },
  {
    id: 'al-econ-fc-3-4-2',
    subtopicId: 'al-econ-3-4',
    front: 'Define Dominant Strategy and Nash Equilibrium in a Prisoner’s Dilemma payoff matrix.',
    backBullets: [
      'Dominant strategy: best choice regardless of what the rival selects.',
      'Nash equilibrium: stable outcome where neither rival can improve its payoff by unilaterally deviating — often worse for both than collusion.',
    ],
  },
  {
    id: 'al-econ-fc-3-4-3',
    subtopicId: 'al-econ-3-4',
    front: 'Compare overt collusion vs tacit collusion and state two factors destabilising cartels.',
    backBullets: [
      'Overt: explicit illegal price/quota agreement (cartel); Tacit: unspoken parallel pricing (price leadership).',
      'Cartels fracture due to secret cheating incentives, asymmetric firm costs, recessions, and CMA whistleblower leniency.',
    ],
  },
  {
    id: 'al-econ-fc-3-4-4',
    subtopicId: 'al-econ-3-4',
    front: 'What defines a Contestable Market (Baumol) and why does it improve welfare?',
    backBullets: [
      'Minimal barriers to entry/exit and negligible sunk costs create credible hit-and-run entry threats.',
      'Even a monopolist adopts limit pricing (P ≈ AC, normal profit) and cuts X-inefficiency to deter challengers.',
    ],
  },
  {
    id: 'al-econ-fc-3-4-5',
    subtopicId: 'al-econ-3-4',
    front: 'Distinguish Fixed Costs from Sunk Costs using an aviation example.',
    backBullets: [
      'Fixed costs do not vary with output in the short run, yet may be recoverable upon exit (e.g. leasing a transferable aircraft).',
      'Sunk costs (bespoke advertising, non-refundable licence fees) are permanently irrecoverable upon exit and block contestability.',
    ],
  },
];

export const ALEVEL_ECON_UNITS_1_3_EXAM_PRACTICE: ExamQuestionItem[] = [
  /* 1.1 */
  {
    id: 'al-econ-ex-1-1',
    subtopicId: 'al-econ-1-1',
    number: 1,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] Economy X operates on a concave PPC with points A (120 capital goods, 0 consumer goods), B (105 capital goods, 30 consumer goods), and C (75 capital goods, 60 consumer goods). Meanwhile, the government replaced voluntary opt-in workplace pensions with automatic opt-out enrolment, raising worker participation from 48% to 88%.',
    diagram: 'production-possibility-curve',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate the marginal opportunity cost of 1 extra consumer good moving from A to B and from B to C, and explain what this reveals about factor substitutability.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'From A to B: 15 capital goods ÷ 30 consumer goods = 0.5 capital goods per consumer good. From B to C: 30 capital goods ÷ 30 consumer goods = 1.0 capital good per consumer good. Because marginal opportunity cost rises from 0.5 to 1.0, factors of production are imperfectly substitutable between capital and consumer sectors, explaining the concave PPC.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates A→B marginal opportunity cost = 0.5', numericMatch: { value: 0.5, tolerance: 0.02 } },
            { id: 'mp2', markDescription: 'Calculates B→C marginal opportunity cost = 1.0', numericMatch: { value: 1.0, tolerance: 0.02 } },
            { id: 'mp3', markDescription: 'Identifies increasing opportunity cost', requiredKeywordGroups: [['rising', 'increasing', 'rises'], ['opportunity cost']] },
            { id: 'mp4', markDescription: 'Links to imperfect factor substitutability / concave PPC', requiredKeywordGroups: [['imperfect', 'not equally suited', 'substitutab', 'concave']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate the use of behavioural default nudges (auto-enrolment) compared with traditional rational financial incentives to increase retirement saving.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Auto-enrolment exploits status quo bias and counters bounded rationality and hyperbolic discounting at low fiscal cost while preserving freedom to opt out (libertarian paternalism). However, default contribution rates may be anchored too low for an adequate pension, and workers on very low incomes may still opt out if budgets are tight, so combining nudges with employer-matched tax incentives is often most effective.',
          markPoints: [
            { id: 'mp1', markDescription: 'Explains status quo bias / bounded rationality / hyperbolic discounting', requiredKeywordGroups: [['status quo', 'bounded rationality', 'hyperbolic', 'inertia']] },
            { id: 'mp2', markDescription: 'Notes low fiscal cost / preserves freedom of choice', requiredKeywordGroups: [['low cost', 'fiscal', 'freedom', 'opt out', 'paternalism']] },
            { id: 'mp3', markDescription: 'Evaluates limitation: anchoring at low default rate or low-income opt-out', requiredKeywordGroups: [['anchor', 'too low', 'low income', 'opt out']] },
            { id: 'mp4', markDescription: 'Judgement recommending combining nudges with financial/tax incentives', requiredKeywordGroups: [['combin', 'incentive', 'tax', 'match']] },
          ],
        },
      },
    ],
  },

  /* 1.2 */
  {
    id: 'al-econ-ex-1-2',
    subtopicId: 'al-econ-1-2',
    number: 2,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] In the UK residential solar-panel market, linear demand intercepts the price axis at £800 per panel and linear supply intercepts the price axis at £100 per panel. Initial equilibrium is P₁ = £400, Q₁ = 200,000 panels/year. Falling polysilicon manufacturing costs then shift supply right to a new equilibrium at P₂ = £300, Q₂ = 250,000 panels/year.',
    diagram: 'supply-demand-equilibrium',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate initial Consumer Surplus, initial Producer Surplus, and the exact increase in Consumer Surplus following the supply shift.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Initial CS = 0.5 × 200,000 × (£800 − £400) = £40m. Initial PS = 0.5 × 200,000 × (£400 − £100) = £30m. New CS = 0.5 × 250,000 × (£800 − £300) = £62.5m, so the exact gain in Consumer Surplus is £62.5m − £40m = £22.5m.',
          markPoints: [
            { id: 'mp1', markDescription: 'Initial CS = £40m', numericMatch: { value: 40, tolerance: 0.2 } },
            { id: 'mp2', markDescription: 'Initial PS = £30m', numericMatch: { value: 30, tolerance: 0.2 } },
            { id: 'mp3', markDescription: 'New CS = £62.5m', numericMatch: { value: 62.5, tolerance: 0.2 } },
            { id: 'mp4', markDescription: 'Increase in CS = £22.5m', numericMatch: { value: 22.5, tolerance: 0.2 } },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Analyse how the price mechanism restores equilibrium after supply shifts right and evaluate ONE reason why this market may still fail to achieve allocative efficiency.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'At the initial price £400, the rightward supply shift creates excess supply (surplus), signalling firms to cut prices toward £300, which incentivises an extension in quantity demanded to 250,000 units until the market clears. However, because solar panels displace fossil fuels and generate positive external benefits (MSB > MPB), the free market still under-consumes relative to Qopt unless subsidised.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies excess supply / surplus at initial price £400', requiredKeywordGroups: [['excess supply', 'surplus']] },
            { id: 'mp2', markDescription: 'Price falls signalling/incentivising extension along demand', requiredKeywordGroups: [['signal', 'incentiv', 'extension'], ['price', 'fall', 'cut']] },
            { id: 'mp3', markDescription: 'Evaluates market failure: positive externality (MSB > MPB) or imperfect info', requiredKeywordGroups: [['external', 'msb', 'information', 'monopoly']] },
            { id: 'mp4', markDescription: 'Concludes free market misses social optimum without intervention', requiredKeywordGroups: [['under-consum', 'social optimum', 'qopt', 'subsid']] },
          ],
        },
      },
    ],
  },

  /* 1.3 */
  {
    id: 'al-econ-ex-1-3',
    subtopicId: 'al-econ-1-3',
    number: 3,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] EuroRail estimates the following demand elasticities for its London–Paris service: Business Class PED = −0.40, Leisure Class PED = −1.60, Overall YED = +1.80, and XED with budget short-haul airlines = +0.90. Current Business Class revenue is £10m/month (50,000 tickets at £200).',
    diagram: 'elasticity-curves',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'EuroRail raises Business Class fares by 10%. Calculate the percentage change in Business tickets sold, new ticket volume, and new monthly Business revenue.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: '%ΔQd = PED × %ΔP = −0.40 × +10% = −4%. New quantity = 50,000 × 0.96 = 48,000 tickets. New fare = £200 × 1.10 = £220, so new revenue = 48,000 × £220 = £10.56m (an increase of £0.56m because demand is price inelastic).',
          markPoints: [
            { id: 'mp1', markDescription: '%ΔQd = −4%', numericMatch: { value: -4, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'New ticket volume = 48,000', numericMatch: { value: 48000, tolerance: 50 } },
            { id: 'mp3', markDescription: 'New revenue = £10.56m', numericMatch: { value: 10.56, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate how EuroRail should use its YED (+1.80) and XED (+0.90) estimates when planning strategy during an expected UK recession, noting key limitations of elasticity data.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Because YED = +1.80 (income-elastic luxury), a recession lowering real incomes will trigger a more than proportional fall in rail bookings, so EuroRail should discount elastic Leisure fares (PED = −1.60) to boost revenue. With XED = +0.90 (close substitute to flights), if budget airlines slash fares, EuroRail risks severe customer loss and should stress city-centre convenience and lower carbon footprint. However, elasticity estimates rely on historical data, ignore ceteris paribus violations, and may shift if business travel moves permanently to video calls.',
          markPoints: [
            { id: 'mp1', markDescription: 'Interprets YED = +1.80 as income-elastic luxury vulnerable in recession', requiredKeywordGroups: [['luxury', 'income elastic', 'income-elastic'], ['recession', 'fall']] },
            { id: 'mp2', markDescription: 'Interprets XED = +0.90 as close substitute with airlines', requiredKeywordGroups: [['substitute'], ['airline', 'flight']] },
            { id: 'mp3', markDescription: 'Recommends cutting elastic Leisure fares / differentiating product', requiredKeywordGroups: [['leisure', 'discount', 'cut', 'differentiat']] },
            { id: 'mp4', markDescription: 'Evaluates limitations: historical data / ceteris paribus / changing tastes', requiredKeywordGroups: [['historical', 'ceteris paribus', 'outdated', 'shift', 'estimate']] },
          ],
        },
      },
    ],
  },

  /* 2.1 */
  {
    id: 'al-econ-ex-2-1',
    subtopicId: 'al-econ-2-1',
    number: 4,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] A regional coal-fired power generator operates at free-market equilibrium output Qm = 800,000 MWh/month at price Pm = £60/MWh. Environmental economists estimate a constant Marginal External Cost from sulphur and carbon emissions of £25/MWh, placing the socially optimal output (MSB = MSC) at Qopt = 640,000 MWh/month.',
    diagram: 'externality-market-failure',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate the Marginal Social Cost at Qm and the monthly deadweight welfare loss created by overproduction.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'MSC = MPC + MEC = £60 + £25 = £85/MWh. Overproduction = 800,000 − 640,000 = 160,000 MWh. Monthly deadweight welfare loss = 0.5 × 160,000 × £25 = £2.0m (or £2,000,000).',
          markPoints: [
            { id: 'mp1', markDescription: 'MSC = £85/MWh', numericMatch: { value: 85, tolerance: 0.5 } },
            { id: 'mp2', markDescription: 'Overproduction = 160,000 MWh', numericMatch: { value: 160000, tolerance: 100 } },
            { id: 'mp3', markDescription: 'Deadweight welfare loss = £2m (2,000,000)', numericMatch: { value: 2, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate why clean atmosphere suffers from the Tragedy of the Commons and whether assigning property rights or imposing a Pigouvian carbon tax is the superior remedy.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Clean air is non-excludable yet rivalrous in pollution absorption, so individual generators ignore third-party climate costs, causing over-exploitation (Tragedy of the Commons). Assigning private property rights to global air is practically impossible due to huge transaction costs and transboundary emitters. A Pigouvian carbon tax (£25/MWh) directly internalises MEC and incentivises green innovation, though governments struggle to value exact long-run MEC and risk carbon leakage without international coordination.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies non-excludable and rivalrous traits of common-pool air', requiredKeywordGroups: [['non-excludable'], ['rival']] },
            { id: 'mp2', markDescription: 'Explains why property rights fail for global air (transaction costs / transboundary)', requiredKeywordGroups: [['property right'], ['impossible', 'transaction cost', 'transboundary', 'global']] },
            { id: 'mp3', markDescription: 'Explains Pigouvian tax internalising MEC / spurring green innovation', requiredKeywordGroups: [['pigouvian', 'carbon tax'], ['internalis', 'mec', 'innovation']] },
            { id: 'mp4', markDescription: 'Evaluates tax limits: MEC valuation gap / carbon leakage / international coordination', requiredKeywordGroups: [['valuation', 'measure', 'carbon leakage', 'international', 'coordination']] },
          ],
        },
      },
    ],
  },

  /* 2.2 */
  {
    id: 'al-econ-ex-2-2',
    subtopicId: 'al-econ-2-2',
    number: 5,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] To curb road congestion and air pollution, a government introduces a specific fuel duty hike of £0.50 per litre. Prior to the tax, retail petrol stood at £1.30/litre with daily consumption of 12m litres. After the tax, retail price rises to £1.70/litre and daily consumption falls to 11m litres.',
    diagram: 'externality-market-failure',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate daily tax revenue, daily consumer tax burden, and daily producer tax burden, explaining what this incidence split indicates about PED.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Total daily tax revenue = £0.50 × 11m = £5.5m. Consumer burden = (£1.70 − £1.30) × 11m = £4.4m (80%). Producers receive £1.20/litre net, so producer burden = (£1.30 − £1.20) × 11m = £1.1m (20%). Because consumers bear 80% of the tax and volume dropped only 8.3%, petrol demand is strongly price inelastic.',
          markPoints: [
            { id: 'mp1', markDescription: 'Total tax revenue = £5.5m', numericMatch: { value: 5.5, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'Consumer burden = £4.4m', numericMatch: { value: 4.4, tolerance: 0.05 } },
            { id: 'mp3', markDescription: 'Producer burden = £1.1m', numericMatch: { value: 1.1, tolerance: 0.05 } },
            { id: 'mp4', markDescription: 'Links heavy consumer share to price-inelastic PED', requiredKeywordGroups: [['inelastic'], ['ped', 'demand']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate whether raising fuel duty is an effective and equitable policy for correcting transport externalities.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Raising fuel duty internalises marginal external costs (shifting MPC toward MSC) and raises £5.5m/day in revenue that can be hypothecated into rail and electric bus subsidies. However, because short-run PED for commuting fuel is highly inelastic, consumption falls by only 1m litres/day, and the duty is regressive — hitting rural low-income drivers hardest. In the long run, pairing fuel duty with hypothecated public transport investment increases PED and improves both efficiency and equity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Internalises externality / shifts MPC toward MSC', requiredKeywordGroups: [['internalis', 'mpc', 'msc']] },
            { id: 'mp2', markDescription: 'Critiques small short-run volume fall due to inelastic PED', requiredKeywordGroups: [['inelastic'], ['small', 'limited', '1m']] },
            { id: 'mp3', markDescription: 'Critiques regressive burden on low-income / rural drivers', requiredKeywordGroups: [['regressive'], ['low-income', 'low income', 'rural', 'poor']] },
            { id: 'mp4', markDescription: 'Evaluative recommendation: hypothecate revenue into public transport to raise long-run PED', requiredKeywordGroups: [['hypothecat', 'ring-fenc'], ['public transport', 'subsid', 'long run', 'long-run']] },
          ],
        },
      },
    ],
  },

  /* 2.3 */
  {
    id: 'al-econ-ex-2-3',
    subtopicId: 'al-econ-2-3',
    number: 6,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] Facing surging urban rents (equilibrium £1,500/month at 50,000 flats), a city council imposes a binding maximum rent ceiling of £1,100/month. At £1,100, landlords supply only 38,000 flats while tenants demand 66,000 flats. Separately, the national government considers replacing uniform factory pollution quotas with an Emissions Trading Scheme (ETS).',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate the monthly housing shortage created by the rent ceiling and explain TWO unintended consequences that could lead to government failure.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Excess demand (housing shortage) = 66,000 − 38,000 = 28,000 flats. Unintended consequences include (1) illegal black markets ("key money" bribes) and landlord discrimination during non-price rationing, and (2) landlords cutting maintenance and halting new construction because returns fall, worsening long-run housing quality and supply.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates shortage = 28,000 flats', numericMatch: { value: 28000, tolerance: 50 } },
            { id: 'mp2', markDescription: 'Identifies black markets / illegal side payments / discrimination', requiredKeywordGroups: [['black market', 'bribe', 'key money', 'discriminat', 'rationing']] },
            { id: 'mp3', markDescription: 'Identifies falling maintenance / lower quality / reduced housebuilding', requiredKeywordGroups: [['maintenance', 'quality', 'construction', 'investment', 'supply']] },
            { id: 'mp4', markDescription: 'Links explicitly to worsening housing allocation / government failure', requiredKeywordGroups: [['long-run', 'long run', 'government failure', 'shortage', 'worsen']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate why a Cap-and-Trade Emissions Trading Scheme (ETS) may outperform command-and-control pollution quotas, and state ONE condition needed to prevent ETS government failure.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Unlike uniform quotas forcing high-cost firms to cut output expensively, an ETS lets firms with low abatement costs reduce emissions further and sell surplus permits to high-cost firms, achieving the fixed emissions cap at minimum total cost while encouraging clean R&D. However, if the government over-allocates free permits due to lobbying (regulatory capture) or information gaps, permit prices collapse near zero, so the state must auction permits and tighten the cap predictably.',
          markPoints: [
            { id: 'mp1', markDescription: 'Explains trading between low-cost and high-cost abaters minimising total cost', requiredKeywordGroups: [['low', 'cheaper'], ['abatement', 'permit', 'sell']] },
            { id: 'mp2', markDescription: 'Notes guaranteed aggregate emissions cap / R&D incentive', requiredKeywordGroups: [['cap', 'ceiling', 'r&d', 'innovation']] },
            { id: 'mp3', markDescription: 'Identifies over-allocation / regulatory capture collapsing permit price', requiredKeywordGroups: [['over-allocat', 'too many', 'capture', 'collapse']] },
            { id: 'mp4', markDescription: 'Recommends auctioning permits / tightening cap / carbon price floor', requiredKeywordGroups: [['auction', 'tighten', 'floor', 'strict']] },
          ],
        },
      },
    ],
  },

  /* 3.1 */
  {
    id: 'al-econ-ex-3-1',
    subtopicId: 'al-econ-3-1',
    number: 7,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] A precision-engineering PLC faces the following daily output schedule: Q = 1 (AR = £90, TC = £70); Q = 2 (AR = £80, TC = £110); Q = 3 (AR = £70, TC = £160); Q = 4 (AR = £60, TC = £230); Q = 5 (AR = £50, TC = £320).',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate TR, MR, MC, and Total Profit at Q = 3 and Q = 4, and state which output maximises profit (MC = MR).',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'At Q = 2, TR = £160. At Q = 3: TR = 3 × £70 = £210, so MR = £210 − £160 = £50; MC = £160 − £110 = £50; Profit = £210 − £160 = £50. At Q = 4: TR = 4 × £60 = £240 (MR = £30), MC = £230 − £160 = £70, Profit = £10. Because MC = MR = £50 at Q = 3, profit is maximised at Q = 3.',
          markPoints: [
            { id: 'mp1', markDescription: 'At Q = 3, MR = £50 and MC = £50', numericMatch: { value: 50, tolerance: 0.5 } },
            { id: 'mp2', markDescription: 'At Q = 3, TR = £210', numericMatch: { value: 210, tolerance: 0.5 } },
            { id: 'mp3', markDescription: 'At Q = 4, TR = £240 (or MC = £70)', numericMatch: { value: 240, tolerance: 0.5 } },
            { id: 'mp4', markDescription: 'Concludes profit maximisation at Q = 3 where MC = MR', requiredKeywordGroups: [['q = 3', '3'], ['mc = mr', 'profit']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain why salaried directors of this PLC might instead expand output toward Q = 4 or Q = 5, and evaluate how shareholders can align managerial incentives.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'At Q = 5, TR reaches its peak (£250, revenue maximisation), whereas profit falls negative; divorce of ownership from control creates a principal-agent problem where managers whose pay and prestige track sales revenue or market share choose higher output (revenue maximisation or satisficing) instead of Q = 3. Shareholders can tie CEO pay to share options and long-run dividends, though short-term share targets may still distort long-run R&D investment.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies divorce of ownership from control / principal-agent problem', requiredKeywordGroups: [['divorce', 'principal-agent', 'principal agent']] },
            { id: 'mp2', markDescription: 'Links managerial pay/prestige to revenue maximisation / market share', requiredKeywordGroups: [['revenue', 'sales', 'market share'], ['pay', 'bonus', 'prestige']] },
            { id: 'mp3', markDescription: 'Proposes shareholder remedies: share options / performance pay / AGM oversight', requiredKeywordGroups: [['share option', 'dividend', 'equity', 'bonus', 'board']] },
            { id: 'mp4', markDescription: 'Evaluates risk of short-termism or asymmetric monitoring costs', requiredKeywordGroups: [['short-term', 'short term', 'r&d', 'asymmetric', 'monitor']] },
          ],
        },
      },
    ],
  },

  /* 3.2 */
  {
    id: 'al-econ-ex-3-2',
    subtopicId: 'al-econ-3-2',
    number: 8,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] Following a bumper global harvest, the competitive spot price of barley drops to £140/tonne. At its profit-maximising (loss-minimising) output of 600 tonnes where MC = MR, Meadow Farm incurs AVC = £115/tonne and AFC = £45/tonne.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate Meadow Farm’s short-run loss if it continues operating versus if it shuts down immediately, and advise its rational short-run AND long-run decision.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'ATC = £115 + £45 = £160/tonne and TFC = £45 × 600 = £27,000. Operating loss = (£140 − £160) × 600 = −£12,000 (a loss of £12,000). Shut-down loss = −£27,000 (a loss of £27,000). Because P (£140) > AVC (£115), it earns £15,000 contribution toward fixed costs and should keep operating in the short run; however, if price stays below ATC (£160) in the long run, it must exit.',
          markPoints: [
            { id: 'mp1', markDescription: 'Operating loss = £12,000', numericMatch: { value: 12000, tolerance: 50 } },
            { id: 'mp2', markDescription: 'Shut-down loss = £27,000', numericMatch: { value: 27000, tolerance: 50 } },
            { id: 'mp3', markDescription: 'Stay open in short run because P > AVC', requiredKeywordGroups: [['short run', 'short-run'], ['open', 'operate', 'operating', 'continue'], ['avc']] },
            { id: 'mp4', markDescription: 'Exit in long run if P < ATC persists', requiredKeywordGroups: [['long run', 'long-run'], ['exit', 'leave', 'shut'], ['atc']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate whether long-run perfect competition delivers greater overall economic welfare than a large monopolistic enterprise.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Long-run perfect competition achieves static efficiency: allocative efficiency (P = MC), productive efficiency (min ATC), and X-efficiency as free entry eliminates supernormal profit. However, small price-taking firms cannot exploit massive internal economies of scale, offer zero product variety, and earn no supernormal profits to fund Schumpeterian dynamic R&D innovation. Therefore, in high-R&D or high-MES industries like pharmaceuticals or aerospace, regulated monopolies or oligopolies may deliver superior long-run welfare.',
          markPoints: [
            { id: 'mp1', markDescription: 'Credits perfect competition with allocative (P = MC) & productive (min ATC) efficiency', requiredKeywordGroups: [['allocative', 'p = mc'], ['productive', 'min atc']] },
            { id: 'mp2', markDescription: 'Critiques lack of economies of scale / product variety', requiredKeywordGroups: [['economies of scale', 'variety']] },
            { id: 'mp3', markDescription: 'Critiques lack of dynamic efficiency / R&D due to normal profit only', requiredKeywordGroups: [['dynamic', 'r&d', 'innovation'], ['normal profit', 'supernormal']] },
            { id: 'mp4', markDescription: 'Balanced contextual judgement depending on MES / R&D intensity', requiredKeywordGroups: [['depends', 'high-mes', 'mes', 'pharmaceutical', 'regulated', 'long-run']] },
          ],
        },
      },
    ],
  },

  /* 3.3 */
  {
    id: 'al-econ-ex-3-3',
    subtopicId: 'al-econ-3-3',
    number: 9,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] ThamesRail holds an exclusive franchise on a commuter corridor. Peak commuters have PED = −0.30 and pay £45 for 20,000 daily tickets; off-peak leisure passengers have PED = −1.80 and pay £18 for 15,000 daily tickets. Marginal cost per passenger is £6. The regulator considers tightening its CPI − X fare cap from X = 1% to X = 3%.',
    diagram: 'monopoly-market-structure',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate total daily contribution above marginal cost from peak and off-peak tickets, and explain why ThamesRail charges higher fares at peak times.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Peak contribution = (£45 − £6) × 20,000 = £780,000. Off-peak contribution = (£18 − £6) × 15,000 = £180,000. Total contribution = £960,000/day. ThamesRail practises third-degree price discrimination: peak commuters have highly inelastic demand (PED = −0.30, few substitutes for arriving on time) and tickets are time-stamped to prevent arbitrage, allowing a much higher mark-up.',
          markPoints: [
            { id: 'mp1', markDescription: 'Peak contribution = £780,000', numericMatch: { value: 780000, tolerance: 500 } },
            { id: 'mp2', markDescription: 'Total contribution = £960,000', numericMatch: { value: 960000, tolerance: 500 } },
            { id: 'mp3', markDescription: 'Identifies third-degree price discrimination & inelastic peak PED', requiredKeywordGroups: [['price discrimination'], ['inelastic']] },
            { id: 'mp4', markDescription: 'Notes time-stamped tickets prevent arbitrage/seepage', requiredKeywordGroups: [['arbitrage', 'seepage', 'resale', 'time-stamp', 'separat']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate whether tightening the CPI − X price cap (X = 3%) is preferable to full state nationalisation for protecting rail passengers.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'A stricter CPI − 3% cap forces real-terms fare cuts and preserves profit incentives for productive efficiency if ThamesRail beats the 3% cost-reduction target, avoiding taxpayer buyout costs. However, asymmetric information makes setting X accurately difficult, and an overly tight X may cause under-investment in train reliability or regulatory capture. Nationalisation enables direct P = MC social-welfare pricing and integrated timetables, yet risks X-inefficiency without profit discipline and heavy fiscal opportunity cost — so an incentive CPI − X + K cap tied to punctuality fines is often optimal.',
          markPoints: [
            { id: 'mp1', markDescription: 'Explains CPI − X forcing real price cuts & incentivising cost cuts', requiredKeywordGroups: [['real', 'fare'], ['efficiency', 'cost']] },
            { id: 'mp2', markDescription: 'Evaluates CPI − X risks: asymmetric info / under-investment in quality / capture', requiredKeywordGroups: [['asymmetric', 'under-invest', 'quality', 'capture']] },
            { id: 'mp3', markDescription: 'Contrasts nationalisation pros (social welfare/integration) & cons (X-inefficiency/fiscal cost)', requiredKeywordGroups: [['nationalis', 'state'], ['x-inefficiency', 'fiscal', 'taxpayer', 'subsid']] },
            { id: 'mp4', markDescription: 'Supported judgement (e.g. CPI − X + K with quality standards)', requiredKeywordGroups: [['k', 'quality', 'fine', 'optimal', 'depend']] },
          ],
        },
      },
    ],
  },

  /* 3.4 */
  {
    id: 'al-econ-ex-3-4',
    subtopicId: 'al-econ-3-4',
    number: 10,
    stimulus:
      '[AQA 7136 / CIE 9708 Data Response] Four mobile network operators control UK market shares of 31%, 27%, 23%, and 14% (MVNOs hold 5%). The top two rivals, NetAlpha and NetBeta, consider launching an aggressive 5G price cut. Payoffs (NetAlpha, NetBeta): Both Hold High = (£120m, £120m); Alpha Cuts / Beta Holds = (£160m, £40m); Alpha Holds / Beta Cuts = (£40m, £160m); Both Cut = (£70m, £70m).',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate the 3-firm concentration ratio (CR3) and identify the dominant strategy and Nash equilibrium from the payoff matrix.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'CR3 = 31% + 27% + 23% = 81% (highly concentrated oligopoly). For NetAlpha, Cut dominates Hold whether Beta holds (£160m > £120m) or cuts (£70m > £40m); symmetrically Cut is Beta’s dominant strategy. Therefore the Nash equilibrium is Both Cut Price at (£70m, £70m), leaving each £50m worse off than joint collusion.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates CR3 = 81%', numericMatch: { value: 81, tolerance: 0.5 } },
            { id: 'mp2', markDescription: 'Identifies Cut Price as dominant strategy for both firms', requiredKeywordGroups: [['cut'], ['dominant']] },
            { id: 'mp3', markDescription: 'Identifies Nash equilibrium as Both Cut (£70m, £70m)', requiredKeywordGroups: [['both cut', '70m'], ['nash']] },
            { id: 'mp4', markDescription: 'Notes sub-optimal Prisoner’s Dilemma loss relative to (£120m, £120m)', requiredKeywordGroups: [['120', 'collusion', 'prisoner', 'worse off', '50m']] },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate whether policies that make mobile telecoms more CONTESTABLE (such as mandated network sharing and instant number switching) improve consumer welfare more effectively than breaking up large incumbents.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Mandated mast-sharing slashes irreversible sunk costs for virtual operators (MVNOs), creating a credible threat of hit-and-run entry that forces incumbents toward limit pricing (P ≈ AC) while still allowing large operators to retain economies of scale and 5G R&D budgets. Breaking up incumbents risks sacrificing scale economies and raising average costs. However, spectrum licences and heavy brand loyalty prevent perfect contestability, so combining pro-contestability switching rules with active CMA anti-collusion enforcement delivers the strongest welfare gain.',
          markPoints: [
            { id: 'mp1', markDescription: 'Explains how network sharing cuts sunk costs & boosts hit-and-run threat', requiredKeywordGroups: [['sunk cost'], ['hit-and-run', 'contestab', 'entry']] },
            { id: 'mp2', markDescription: 'Links contestability to limit pricing while preserving scale economies / 5G R&D', requiredKeywordGroups: [['limit pric', 'economies of scale', 'r&d']] },
            { id: 'mp3', markDescription: 'Evaluates barriers preventing perfect contestability (spectrum, brand loyalty)', requiredKeywordGroups: [['brand', 'spectrum', 'loyalty', 'imperfect', 'perfectly contestable']] },
            { id: 'mp4', markDescription: 'Balanced judgement pairing contestability measures with CMA oversight', requiredKeywordGroups: [['cma', 'combin', 'enforcement', 'regulat', 'depend']] },
          ],
        },
      },
    ],
  },
];
