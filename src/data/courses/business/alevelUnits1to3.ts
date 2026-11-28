import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_BUSINESS_TOPICS_1_TO_3: TopicDefinition[] = [
  {
    number: 1,
    title: 'Business Strategy, Structure & Corporate Objectives',
    subtopics: [
      {
        id: 'al-bus-1-1',
        code: '1.1',
        slug: '1.1-mission-corporate-objectives-csr-stakeholders',
        title: 'Mission Statements, Corporate Objectives, CSR & Stakeholder Mapping',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-1-2',
        code: '1.2',
        slug: '1.2-ownership-corporate-governance-privatisation-growth',
        title: 'Ownership Structures, Corporate Governance, Privatisation & Growth',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-1-3',
        code: '1.3',
        slug: '1.3-strategic-analysis-swot-pestle-porters-ansoff',
        title: "Strategic Analysis: SWOT, PESTLE, Porter's Five Forces & Ansoff's Matrix",
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'People, Leadership & Human Resource Strategy',
    subtopics: [
      {
        id: 'al-bus-2-1',
        code: '2.1',
        slug: '2.1-organisational-design-delegation-centralisation-matrix',
        title: 'Organisational Design, Delegation, Centralisation & Matrix Structures',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-2-2',
        code: '2.2',
        slug: '2.2-leadership-models-motivation-theories',
        title: 'Leadership Models (Blake Mouton, Tannenbaum-Schmidt) & Motivation (Maslow, Herzberg, Vroom, Mayo)',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-2-3',
        code: '2.3',
        slug: '2.3-hr-analytics-soft-hard-hrm-trade-unions',
        title: 'HR Analytics (Labour Turnover, Retention, Productivity), Soft vs Hard HRM & Trade Unions',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Marketing Analytics, Portfolio & Global Marketing',
    subtopics: [
      {
        id: 'al-bus-3-1',
        code: '3.1',
        slug: '3.1-market-analysis-ped-yed-sales-forecasting',
        title: 'Market Analysis, PED/YED Pricing Strategy & Moving-Average Sales Forecasting',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-3-2',
        code: '3.2',
        slug: '3.2-product-portfolio-boston-matrix-plc-7ps',
        title: 'Product Portfolio Strategy (Boston Matrix, PLC) & The Extended 7 Ps',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-bus-3-3',
        code: '3.3',
        slug: '3.3-digital-marketing-omnichannel-international-entry',
        title: 'Digital Marketing, Omni-Channel Distribution & International Market Entry',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_BUSINESS_NOTES_1_TO_3: Record<string, NoteLesson> = {
  'al-bus-1-1': {
    subtopicId: 'al-bus-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Mission Statements, Corporate Objectives, CSR & Stakeholder Mapping',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 1.5 Business Objectives and Stakeholder Objectives',
    youtubeId: 'yQiE2qyawD0',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:45',
    courseMatchSummary: 'Foundational Mr Lee walkthrough extended to A-Level hierarchy of objectives, CSR & Mendelow mapping',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Mission Statements & Hierarchy of Corporate Objectives', cardId: 'al-bus-1-1-c1' },
      { time: '4:00', seconds: 240, label: "CSR, Triple Bottom Line & Carroll's Pyramid", cardId: 'al-bus-1-1-c2' },
      { time: '8:15', seconds: 495, label: "Stakeholder Theory vs Shareholder Primacy & Mendelow's Matrix", cardId: 'al-bus-1-1-c3' },
    ],
    cards: [
      {
        id: 'al-bus-1-1-c1',
        title: 'Mission Statements, Corporate Aims & The Hierarchy of Objectives',
        summary: 'Translating broad qualitative missions into measurable SMART corporate and functional objectives.',
        bullets: [
          'A **mission statement** defines a firm’s overarching purpose and core values for internal and external stakeholders, sitting at the apex of the **hierarchy of objectives**.',
          'Strategy cascades downwards: Mission → **Corporate Objectives** (whole-firm, medium-to-long term) → **Functional / Departmental Objectives** (Marketing, Finance, Operations, HR) → Individual targets via **Management by Objectives (MBO)**.',
        ],
        subsections: [
          {
            heading: 'SMART Criteria, Satisficing & Strategic Alignment',
            bullets: [
              '**SMART objectives** — Specific, Measurable, Achievable, Realistic, and Time-bound (e.g. "raise UK market share from 14% to 18% within 24 months").',
              '**Profit maximisation vs profit satisficing** — large Plcs may pursue **satisficing** (earning sufficient profit to keep shareholders content while managers pursue growth, staff welfare, or environmental targets).',
              '**Limitations of mission statements** — often criticised as vague PR rhetoric ("to be the world’s best") that lacks operational metrics unless backed by budgeted corporate objectives.',
            ],
            exampleHeading: 'Worked example: Cascading a corporate ROCE target',
            examples: [
              'A retailer sets a corporate objective to raise operating profit from £4.0m to £5.0m (+25%) on £25m capital employed, lifting ROCE from 16% to 20% within 2 years.',
              'Functional cascade: Operations must cut unit distribution cost by 8% (saving £450,000); Marketing must grow online revenue by £3.0m at a 20% operating margin (adding £600,000 profit).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Hierarchy of objectives', definition: 'Structured cascade linking mission statement to corporate, departmental, and individual SMART targets.' },
          { term: 'Profit satisficing', definition: 'Earning a satisfactory minimum level of profit to appease owners rather than strictly maximising short-term profit.' },
        ],
        memoryAid: 'M-C-D-I cascade: Mission → Corporate → Departmental → Individual (each made SMART!).',
      },
      {
        id: 'al-bus-1-1-c2',
        title: "Corporate Social Responsibility (CSR), Triple Bottom Line & Carroll's Pyramid",
        summary: 'Evaluating ethical investments through Elkington’s Triple Bottom Line and Carroll’s CSR framework.',
        bullets: [
          '**Corporate Social Responsibility (CSR)** means voluntarily accepting obligations to society and the environment beyond strict legal minimums.',
          'John Elkington’s **Triple Bottom Line** measures performance across three pillars: **Profit** (economic), **People** (social equity), and **Planet** (environmental sustainability).',
        ],
        subsections: [
          {
            heading: "Carroll's CSR Pyramid & Social Audits",
            bullets: [
              "**Carroll's four-tier pyramid** (base to peak): 1) **Economic** (be profitable to survive) → 2) **Legal** (obey laws) → 3) **Ethical** (do what is morally right beyond the law) → 4) **Philanthropic** (charitable community giving).",
              '**Social audit** — an independent report assessing a business’s carbon footprint, supplier wages, diversity, and health-and-safety record to counter accusations of **greenwashing**.',
              '**Strategic trade-off** — ethical sourcing raises short-term variable costs, yet strengthens brand equity, attracts ESG institutional investors, and lowers employee turnover.',
            ],
            exampleHeading: 'Worked example: Short-term margin impact of ethical sourcing',
            examples: [
              'A coffee roaster sells 500,000 bags/year at £8.00 (revenue = £4,000,000). Switching to Fairtrade beans raises variable cost from £3.20 to £3.60/bag (+£200,000 cost).',
              'If stronger ethical branding lets the firm raise price by 5% to £8.40 without losing volume, revenue rises by £200,000 — fully offsetting the ethical cost while strengthening long-term loyalty.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Triple Bottom Line', definition: 'Framework measuring business performance across Profit (economic), People (social), and Planet (environmental) outcomes.' },
          { term: 'Social audit', definition: 'Independent assessment of a firm’s social, ethical, and environmental impact against stated CSR targets.' },
        ],
        commonMistake: 'Students often treat CSR purely as charitable donations. Under Carroll’s Pyramid, economic viability and legal compliance form the essential base — philanthropy alone cannot offset unethical labour or pollution.',
      },
      {
        id: 'al-bus-1-1-c3',
        title: "Stakeholder Theory vs Shareholder Concept & Mendelow's Matrix",
        summary: 'Prioritising conflicting stakeholder claims using power–interest mapping.',
        bullets: [
          'Milton Friedman’s **shareholder concept** argues a firm’s sole duty is maximising shareholder returns within the law, whereas R. Edward Freeman’s **stakeholder concept** argues long-term success requires balancing all stakeholder interests.',
          '**Mendelow’s Matrix** maps stakeholders by **Power** (ability to block/force decisions) against **Level of Interest** (how strongly the decision affects them) to guide management strategy.',
        ],
        subsections: [
          {
            heading: "Applying Mendelow's Four Quadrants",
            bullets: [
              '**High Power / High Interest (Manage Closely)** — institutional shareholders, major retail buyers, or unionised key engineers; consult directly and align strategy.',
              '**High Power / Low Interest (Keep Satisfied)** — government regulators, tax authorities, or passive institutional lenders; ensure compliance so they do not become active opponents.',
              '**Low Power / High Interest (Keep Informed)** — local residents, minor suppliers, or non-union staff; communicate transparently to prevent them allying with media or pressure groups.',
              '**Low Power / Low Interest (Minimal Effort)** — general public or distant casual consumers; monitor periodically at low cost.',
            ],
            exampleHeading: 'Worked example: Quantifying a shareholder vs employee conflict',
            examples: [
              'A Plc earns £10m profit. Paying a 6% wage rise to 800 staff averaging £30,000 costs £1.44m, cutting funds available for dividends by 14.4%.',
              'However, if staff are High Power / High Interest (skilled technicians), denying the pay award risks strikes costing £3m in lost output — showing why short-term shareholder focus can destroy long-term value.',
            ],
          },
        ],
        glossaryPills: [
          { term: "Mendelow's Matrix", definition: 'Stakeholder mapping grid plotting Power against Interest to decide whether to manage closely, keep satisfied, keep informed, or apply minimal effort.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Mission statement', definition: 'Qualitative declaration of a business’s core purpose, identity, and values.' },
      { term: 'Corporate objectives', definition: 'Medium-to-long-term SMART targets set for the entire organisation to achieve its mission.' },
      { term: 'Triple Bottom Line', definition: 'Evaluating corporate success across Profit, People, and Planet.' },
      { term: "Mendelow's Matrix", definition: 'Tool categorising stakeholders by Power and Interest to prioritise engagement.' },
      { term: 'Shareholder concept', definition: 'View that directors’ primary responsibility is maximising financial returns for shareholders.' },
    ],
    checklistPoints: [
      'Cascade a mission statement into SMART corporate and departmental objectives.',
      "Evaluate CSR investments using Elkington's Triple Bottom Line and Carroll's Pyramid.",
      "Map conflicting stakeholders on Mendelow's Matrix and recommend management actions.",
    ],
  },

  'al-bus-1-2': {
    subtopicId: 'al-bus-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Ownership Structures, Corporate Governance, Privatisation & Growth',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 1.4 Types of Business Organisations',
    youtubeId: 'lGu-fydVdLQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:10',
    courseMatchSummary: 'Mr Lee’s ownership foundations extended to A-Level corporate governance, market cap, privatisation & Greiner’s growth model',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Incorporation, Divorce of Ownership & Control & Governance', cardId: 'al-bus-1-2-c1' },
      { time: '4:10', seconds: 250, label: 'Market Capitalisation, Share Price & Privatisation', cardId: 'al-bus-1-2-c2' },
      { time: '8:20', seconds: 500, label: "Organic vs External Growth, Synergy & Greiner's Model", cardId: 'al-bus-1-2-c3' },
    ],
    cards: [
      {
        id: 'al-bus-1-2-c1',
        title: 'Ownership Structures, Divorce of Ownership & Control & Corporate Governance',
        summary: 'Managing principal-agent conflicts when shareholders separate from salaried executive directors.',
        bullets: [
          'Converting from an Ltd to a **Public Limited Company (Plc)** via an **Initial Public Offering (IPO)** unlocks huge equity capital on a stock exchange, but creates the **divorce of ownership and control**.',
          'In the **principal-agent problem**, salaried directors (agents) may chase empire-building revenue growth or lavish perks rather than long-term shareholder value (principals).',
        ],
        subsections: [
          {
            heading: 'Corporate Governance Safeguards & Alternative Forms',
            bullets: [
              '**Corporate governance mechanisms** — independent **Non-Executive Directors (NEDs)**, separate CEO and Chair roles, independent remuneration committees, performance-linked share options, and shareholder voting at the **Annual General Meeting (AGM)**.',
              '**Mutuals, cooperatives & social enterprises** — worker/consumer cooperatives share profits among members; **social enterprises** (e.g. CICs) reinvest profits primarily into social or environmental missions.',
              '**Share dilution risk** — issuing new ordinary shares raises permanent, interest-free finance, yet reduces existing founders’ voting percentage.',
            ],
            exampleHeading: 'Worked example: Calculating voting dilution after a share issue',
            examples: [
              'A founder holds 600,000 of 1,000,000 ordinary shares (60% majority control). The company issues 500,000 new shares at £4.00 each to raise £2,000,000.',
              'Total shares rise to 1,500,000; the founder’s stake falls to 600,000 ÷ 1,500,000 = 40% — losing outright majority control (>50%).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Divorce of ownership and control', definition: 'Separation between shareholders who own a Plc and salaried executive directors who run its daily strategy.' },
          { term: 'Non-Executive Director (NED)', definition: 'Independent board member who scrutinises executive decisions to protect shareholder and stakeholder interests.' },
        ],
        commonMistake: 'Students frequently assume a Plc is publicly owned by the state. A Plc is firmly in the PRIVATE sector — "public" means shares can be bought by the general public on a stock exchange, unlike state-owned public corporations.',
      },
      {
        id: 'al-bus-1-2-c2',
        title: 'Market Capitalisation, Share Valuation & Privatisation vs Nationalisation',
        summary: 'Valuing listed companies and weighing private efficiency against public-service welfare.',
        bullets: [
          '**Market capitalisation** measures the total stock-market value of a Plc’s equity: `Market Capitalisation = Current Share Price × Total Number of Issued Shares`.',
          'Share prices fluctuate daily based on expected future profits, dividend announcements, interest rates, macroeconomic forecasts, and takeover rumours.',
        ],
        subsections: [
          {
            heading: 'Privatisation vs Nationalisation Trade-Offs',
            bullets: [
              '**Privatisation** (selling state-owned enterprises to private investors) raises Treasury cash, injects profit-driven cost efficiency, and removes political interference — but risks private monopolies raising prices or cutting unprofitable rural services.',
              '**Nationalisation** (taking private firms into state ownership) protects strategic utilities (rail, water, energy) and prioritises social welfare — yet can suffer bureaucracy, taxpayer subsidies, and weaker innovation incentives.',
            ],
            exampleHeading: 'Worked example: Market capitalisation and takeover premium',
            examples: [
              'Helios Plc has 20,000,000 issued shares trading at £3.50 each → Market Capitalisation = 20,000,000 × £3.50 = £70,000,000.',
              'A rival bids £4.20/share (a 20% takeover premium), valuing Helios at £84,000,000 to persuade institutional shareholders to sell.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Market capitalisation', definition: 'Total market value of a listed company’s issued shares (Share Price × Number of Shares).' },
          { term: 'Privatisation', definition: 'Transfer of assets or state-owned enterprises from the public sector into private-sector ownership.' },
        ],
        memoryAid: 'Market Cap = Price × Pieces (Share Price × Total Shares Issued)!',
      },
      {
        id: 'al-bus-1-2-c3',
        title: "Organic vs External Growth, Synergy & Greiner's Model of Growth",
        summary: 'Evaluating mergers, takeovers, strategic alliances, and the management crises accompanying rapid expansion.',
        bullets: [
          '**Organic (internal) growth** expands gradually using retained profits, retaining culture and control; **inorganic (external) growth** via mergers/takeovers delivers instant market share and **synergy** ("2 + 2 = 5").',
          'Over half of M&A deals fail to deliver projected synergy due to **cultural clashes**, duplicated IT systems, communication diseconomies, and overpaying for the target.',
        ],
        subsections: [
          {
            heading: "Greiner's Model of Growth & Strategic Alliances",
            bullets: [
              "**Greiner's Growth Model** explains that firms grow through alternating phases of evolution and crisis: Creativity → Crisis of Leadership → Direction → Crisis of Autonomy → Delegation → Crisis of Control → Coordination → Crisis of Red Tape → Collaboration.",
              '**Joint ventures & strategic alliances** — two firms pool R&D or market access (e.g. airline alliances) while remaining legally separate, lowering capital risk compared to full acquisition.',
              '**Overtrading risk** — expanding sales volume faster than working capital can fund stock and wages, causing profitable firms to suffer liquidity failure.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Synergy', definition: 'When two merged businesses achieve greater combined revenue or lower unit costs than operating independently ("2 + 2 = 5").' },
          { term: 'Overtrading', definition: 'Expanding sales rapidly without sufficient working capital, creating acute cash-flow shortages.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Divorce of ownership and control', definition: 'Separation between shareholder owners and salaried directors in large Plcs.' },
      { term: 'Market capitalisation', definition: 'Current share price multiplied by total number of issued ordinary shares.' },
      { term: 'Corporate governance', definition: 'System of board oversight, NEDs, audits, and controls ensuring directors act in stakeholders’ interests.' },
      { term: 'Synergy', definition: 'Combined financial or operational gain from a merger exceeding the sum of separate parts.' },
      { term: 'Overtrading', definition: 'Growing output and credit sales faster than available working capital can finance.' },
    ],
    checklistPoints: [
      'Explain how corporate governance mitigates the principal-agent problem in Plcs.',
      'Calculate share dilution and market capitalisation and evaluate privatisation vs nationalisation.',
      "Compare organic growth, M&A synergy, strategic alliances, and Greiner's growth crises.",
    ],
  },

  'al-bus-1-3': {
    subtopicId: 'al-bus-1-3',
    subtopicCode: '1.3',
    subtopicTitle: "Strategic Analysis: SWOT, PESTLE, Porter's Five Forces & Ansoff's Matrix",
    readingMinutes: 13,
    videoTitle: 'IGCSE Business: Chapter 1.3 Enterprise, Growth and Size',
    youtubeId: '2e6dQ33HtIs',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:50',
    courseMatchSummary: 'Mr Lee’s enterprise & growth foundations expanded into full A-Level strategic audit tools: SWOT, PESTLE, Porter & Ansoff',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'SWOT, PESTLE & Core Competencies', cardId: 'al-bus-1-3-c1' },
      { time: '4:20', seconds: 260, label: "Porter's Five Forces & Generic Competitive Strategies", cardId: 'al-bus-1-3-c2' },
      { time: '8:45', seconds: 525, label: "Ansoff's Growth Matrix & Strategic Risk Appraisal", cardId: 'al-bus-1-3-c3' },
    ],
    cards: [
      {
        id: 'al-bus-1-3-c1',
        title: 'Strategic Audits: SWOT, PESTLE & Core Competencies',
        summary: 'Diagnosing internal capabilities and external macro-environmental threats before choosing strategy.',
        bullets: [
          '**SWOT analysis** pairs **internal** factors the firm controls (**Strengths, Weaknesses**) with **external** macro/market forces (**Opportunities, Threats**) to form actionable strategic matches.',
          '**PESTLE analysis** systematically audits the external environment: **Political, Economic, Social, Technological, Legal, and Environmental** forces.',
        ],
        subsections: [
          {
            heading: 'Core Competencies & Limitations of Strategic Audits',
            bullets: [
              '**Core competencies** (Prahalad & Hamel) — unique internal skills, patents, or capabilities difficult for rivals to copy that unlock multiple markets (e.g. battery engineering or logistics algorithms).',
              '**Critique of SWOT/PESTLE** — purely static snapshots; subjective classification can omit blind spots unless paired with hard financial ratios, market growth data, and sensitivity forecasts.',
            ],
            exampleHeading: 'Worked example: Linking a PESTLE shift to SWOT revenue impact',
            examples: [
              'A Legal/Environmental PESTLE shift bans single-use plastic bottles, threatening £12m of a drinks firm’s £40m revenue (30% exposure).',
              'Matching its internal Strength (£8m retained cash & automated bottling) with the external Opportunity lets it capture 25% of a fast-growing £20m reusable-aluminium market (+£5m revenue).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'PESTLE analysis', definition: 'External macro-environment audit across Political, Economic, Social, Technological, Legal, and Environmental factors.' },
          { term: 'Core competence', definition: 'Unique, hard-to-imitate internal capability providing a sustainable competitive advantage across markets.' },
        ],
        commonMistake: 'Students regularly mix up internal Weaknesses with external Threats in SWOT. Ask: "Can the board directly fix this inside the firm?" High staff turnover = internal Weakness; a new rival entering the market = external Threat.',
      },
      {
        id: 'al-bus-1-3-c2',
        title: "Porter's Five Forces & Generic Competitive Strategies",
        summary: 'Assessing industry profitability structure and positioning for sustainable competitive advantage.',
        bullets: [
          "**Porter's Five Forces** evaluates long-run industry profit attractiveness through: 1) **Competitive Rivalry**, 2) **Threat of New Entrants**, 3) **Bargaining Power of Buyers**, 4) **Bargaining Power of Suppliers**, and 5) **Threat of Substitutes**.",
          'When all five forces are strong (e.g. budget airlines), industry profit margins are squeezed; high barriers to entry (patents, economies of scale, brand loyalty) protect incumbent returns.',
        ],
        subsections: [
          {
            heading: "Porter's Three Generic Strategies",
            bullets: [
              '**Cost Leadership** — achieving the lowest unit operating cost in the industry (economies of scale, lean processes) to earn above-average margins even at low prices.',
              '**Differentiation** — offering unique design, quality, brand prestige, or service that makes demand price inelastic and supports premium pricing.',
              '**Focus (Cost Focus or Differentiation Focus)** — targeting a tightly defined niche segment better than mass-market rivals.',
              '**Stuck in the middle** — failing to be either the cheapest or distinctively differentiated leads to weak profitability.',
            ],
          },
        ],
        glossaryPills: [
          { term: "Porter's Five Forces", definition: 'Model analysing industry competitiveness via rivalry, buyer power, supplier power, threat of entrants, and threat of substitutes.' },
          { term: 'Barriers to entry', definition: 'Economic, legal, or brand obstacles (patents, start-up capital, scale) that deter new competitors from entering a market.' },
        ],
      },
      {
        id: 'al-bus-1-3-c3',
        title: "Ansoff's Matrix: Strategic Direction & Risk Escalation",
        summary: 'Mapping growth strategies by product novelty and market familiarity to calibrate risk.',
        bullets: [
          "**Ansoff's Matrix** classifies four growth options across **Existing vs New Products** and **Existing vs New Markets**, with risk escalating sharply whenever a firm leaves familiar territory.",
        ],
        subsections: [
          {
            heading: 'The Four Ansoff Quadrants & Quantitative Comparison',
            bullets: [
              '**Market Penetration (Existing Product, Existing Market — Lowest Risk)** — increase usage, loyalty schemes, or competitive pricing to capture rivals’ share.',
              '**Product Development (New Product, Existing Market — Medium Risk)** — launch innovative variants or R&D extensions to current loyal customers.',
              '**Market Development (Existing Product, New Market — Medium Risk)** — enter overseas territories, new demographics, or online channels with proven products.',
              '**Diversification (New Product, New Market — Highest Risk)** — step outside core capabilities (related or unrelated); spreads risk long-term yet carries highest failure rate.',
            ],
            exampleHeading: 'Worked example: Comparing Ansoff risk-adjusted expected returns',
            examples: [
              'Option A (Market Penetration): £1.0m promotion with 80% success chance generating £1.8m contribution → Expected Net Gain = (0.8 × £1.8m) − £1.0m = £440,000.',
              'Option B (Diversification): £3.0m launch with 40% success chance generating £8.0m contribution → Expected Net Gain = (0.4 × £8.0m) − £3.0m = £200,000 (lower expected return AND 3× capital at risk).',
            ],
          },
        ],
        glossaryPills: [
          { term: "Ansoff's Matrix", definition: 'Strategic planning grid comparing Market Penetration, Product Development, Market Development, and Diversification by risk level.' },
        ],
        memoryAid: 'Ansoff risk ladder: Penetration (safe base) → Product/Market Dev (medium step) → Diversification (double leap of risk)!',
      },
    ],
    keyTerms: [
      { term: 'SWOT analysis', definition: 'Strategic audit matching internal Strengths/Weaknesses against external Opportunities/Threats.' },
      { term: 'PESTLE analysis', definition: 'Macro-environmental scan of Political, Economic, Social, Technological, Legal, and Environmental forces.' },
      { term: "Porter's Five Forces", definition: 'Framework assessing industry profitability via rivalry, entrants, substitutes, buyer power, and supplier power.' },
      { term: "Ansoff's Matrix", definition: 'Grid linking existing/new products and markets to evaluate strategic growth risk.' },
      { term: 'Cost leadership', definition: 'Porter generic strategy achieving the industry’s lowest unit cost base to outperform rivals.' },
    ],
    checklistPoints: [
      'Distinguish internal SWOT factors from external PESTLE forces accurately.',
      "Apply Porter's Five Forces and Generic Strategies to judge industry attractiveness and positioning.",
      "Classify expansion proposals on Ansoff's Matrix and evaluate risk against core competencies.",
    ],
  },

  'al-bus-2-1': {
    subtopicId: 'al-bus-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Organisational Design, Delegation, Centralisation & Matrix Structures',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 2.2 Organisation and management',
    youtubeId: 'klhSlw72X2U',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:30',
    courseMatchSummary: 'Mr Lee’s organisational chart foundations extended to A-Level matrix design, delayering costings, centralisation & Handy’s cultures',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Tall, Flat, Delayering & Matrix Structures', cardId: 'al-bus-2-1-c1' },
      { time: '3:50', seconds: 230, label: 'Delegation, Empowerment & Span of Control', cardId: 'al-bus-2-1-c2' },
      { time: '7:40', seconds: 460, label: "Centralisation vs Decentralisation & Handy's Cultures", cardId: 'al-bus-2-1-c3' },
    ],
    cards: [
      {
        id: 'al-bus-2-1-c1',
        title: 'Organisational Structures: Tall, Flat, Delayering & Matrix Design',
        summary: 'Matching hierarchy depth and cross-functional teams to strategic agility and cost efficiency.',
        bullets: [
          '**Tall (hierarchical) structures** feature narrow spans of control and long chains of command (tight supervision, clear promotion paths, slow distorted communication); **flat structures** feature wide spans and shorter chains (faster decisions, lower overhead).',
          '**Matrix structures** assemble cross-functional project teams (e.g. engineering + marketing + finance) where staff report to both a functional head and a project manager.',
        ],
        subsections: [
          {
            heading: 'Delayering & Matrix Trade-Offs',
            bullets: [
              '**Delayering** removes one or more tiers of middle management to cut salary overhead, accelerate communication, and encourage delegation — yet raises remaining managers’ workload and stress.',
              '**Matrix benefits vs conflict** — sparks cross-departmental innovation and client responsiveness, but dual chains of command can trigger conflicting priorities and slower resource disputes.',
              "**Handy's Shamrock Organisation** — divides the workforce into three leaves: Core full-time professionals, Contractual fringe (outsourced specialists), and Flexible contingent workers.",
            ],
            exampleHeading: 'Worked example: Net financial saving from delayering',
            examples: [
              'Removing a tier of 12 middle managers earning £55,000/year saves £660,000 annually in salaries.',
              'If redundancy payouts cost £180,000 and retraining supervisors costs £60,000 (total Year 1 cost = £240,000), Year 1 net saving = £660,000 − £240,000 = £420,000.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Matrix structure', definition: 'Project-based design combining specialists from different functional departments under dual functional and project reporting lines.' },
          { term: 'Delayering', definition: 'Removing one or more layers of middle management to flatten the hierarchy, cut costs, and speed communication.' },
        ],
        commonMistake: 'Students often claim that delegation transfers ultimate accountability to the subordinate. Delegation passes down AUTHORITY to execute a task, while the manager ALWAYS retains ultimate accountability if it fails.',
      },
      {
        id: 'al-bus-2-1-c2',
        title: 'Delegation, Empowerment & Optimal Span of Control',
        summary: 'Calibrating authority transfer and manager-to-subordinate ratios to skill levels and risk.',
        bullets: [
          '**Delegation** passes task authority down the hierarchy, freeing senior leaders for strategic planning while enriching junior roles; **empowerment** goes further by granting staff autonomy over how to achieve goals.',
          'Optimal **span of control** depends on task complexity, subordinate skill/experience, manager capability, and IT monitoring systems.',
        ],
        subsections: [
          {
            heading: 'Managing Span of Control Ratios',
            bullets: [
              '**Wide span of control** (e.g. 1:15) works well when work is routine or staff are highly autonomous professionals.',
              '**Narrow span of control** (e.g. 1:4) is vital in high-risk, complex, or newly hired environments requiring close coaching.',
            ],
            exampleHeading: 'Worked example: Span-of-control shift after restructuring',
            examples: [
              'A call centre with 120 agents and 15 team leaders has an average span of control of 120 ÷ 15 = 8 agents per leader.',
              'Cutting 5 team leaders reduces leaders to 10, widening the span of control to 120 ÷ 10 = 12 (+50% wider supervision load).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Empowerment', definition: 'Granting employees genuine autonomy, resources, and decision-making authority over their own work methods.' },
          { term: 'Span of control', definition: 'Number of direct subordinates reporting to a single manager.' },
        ],
      },
      {
        id: 'al-bus-2-1-c3',
        title: "Centralisation vs Decentralisation & Charles Handy's Cultural Types",
        summary: 'Balancing headquarters control against regional responsiveness and cultural fit.',
        bullets: [
          '**Centralisation** concentrates key strategic and budget decisions at head office, ensuring consistent brand standards and bulk-buying economies of scale.',
          '**Decentralisation** delegates decision-making to regional branches or divisions, speeding up adaptation to local tastes and motivating branch managers.',
        ],
        subsections: [
          {
            heading: "Charles Handy's Four Organisational Cultures",
            bullets: [
              '**Power Culture (Web)** — decisions radiate from a dominant central founder; fast and agile in small startups, vulnerable if the leader leaves.',
              '**Role Culture (Temple)** — governed by formal procedures, job descriptions, and tall functional silos; stable in large utilities, slow to innovate.',
              '**Task Culture (Net)** — project-focused matrix teams prized for expertise; highly adaptable for consultancies and tech firms.',
              '**Person Culture (Cluster)** — exists primarily to serve elite autonomous individuals (e.g. law chambers, surgical practices).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Decentralisation', definition: 'Dispersing decision-making authority away from head office to regional managers, branches, or divisions.' },
        ],
        memoryAid: "Handy's 4 cultures = P-R-T-P: Power (Web), Role (Temple), Task (Net), Person (Cluster)!",
      },
    ],
    keyTerms: [
      { term: 'Matrix structure', definition: 'Cross-functional team structure where staff report to both a functional and project manager.' },
      { term: 'Delayering', definition: 'Eliminating middle-management tiers to shorten the chain of command and reduce overhead.' },
      { term: 'Delegation', definition: 'Passing authority for specific tasks to subordinates while retaining ultimate accountability.' },
      { term: 'Decentralisation', definition: 'Devolving strategic and operational decision-making to local branches or divisions.' },
      { term: 'Task culture', definition: 'Handy’s project-team culture valuing specialist expertise and collaboration over formal rank.' },
    ],
    checklistPoints: [
      'Compare tall, flat, matrix, and Shamrock structures and calculate delayering savings and span of control.',
      'Distinguish delegation, empowerment, authority, and ultimate accountability.',
      "Evaluate centralisation vs decentralisation and align structure with Handy's four cultural types.",
    ],
  },

  'al-bus-2-2': {
    subtopicId: 'al-bus-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Leadership Models (Blake Mouton, Tannenbaum-Schmidt) & Motivation (Maslow, Herzberg, Vroom, Mayo)',
    readingMinutes: 13,
    videoTitle: 'IGCSE Business: Chapter 2.1 Motivating employees',
    youtubeId: 'u9BDnMylPS4',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:40',
    courseMatchSummary: 'Mr Lee’s motivation core upgraded to A-Level Blake Mouton Grid, Tannenbaum-Schmidt, Mayo, Herzberg & Vroom’s Expectancy Theory',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Blake Mouton Grid & Tannenbaum-Schmidt Continuum', cardId: 'al-bus-2-2-c1' },
      { time: '4:30', seconds: 270, label: 'Content Theories: Taylor, Mayo, Maslow & Herzberg', cardId: 'al-bus-2-2-c2' },
      { time: '9:00', seconds: 540, label: "Vroom's Expectancy Theory & Strategic Reward Design", cardId: 'al-bus-2-2-c3' },
    ],
    cards: [
      {
        id: 'al-bus-2-2-c1',
        title: 'Leadership Models: Blake Mouton Grid & Tannenbaum-Schmidt Continuum',
        summary: 'Diagnosing task-vs-people leadership orientation and situational delegation along a control continuum.',
        bullets: [
          'The **Blake Mouton Managerial Grid** plots **Concern for Production (1–9)** horizontally against **Concern for People (1–9)** vertically, yielding five styles: Impoverished (1,1), Country Club (1,9), Produce-or-Perish (9,1), Middle-of-the-Road (5,5), and **Team Management (9,9)**.',
          'The **Tannenbaum-Schmidt Continuum** maps leadership dynamically from boss-centred to subordinate-centred: **Tells → Sells → Suggests → Consults → Joins → Delegates → Abdicates**.',
        ],
        subsections: [
          {
            heading: 'Situational Fit & McGregor Theory X vs Theory Y',
            bullets: [
              '**Choosing on Tannenbaum-Schmidt** — depends on four forces: the leader’s values, subordinates’ skill/readiness, urgency of the crisis (Tells in emergencies), and organisational culture.',
              "**McGregor's Theory X vs Theory Y** — Theory X managers assume workers dislike work and need autocratic control (9,1); Theory Y managers assume staff seek responsibility and thrive under democratic/Team Management (9,9).",
            ],
          },
        ],
        glossaryPills: [
          { term: 'Blake Mouton Grid', definition: 'Leadership model scoring managers 1–9 on Concern for Production and Concern for People, identifying 9,9 Team Management as ideal.' },
          { term: 'Tannenbaum-Schmidt Continuum', definition: 'Spectrum of leadership styles moving from autocratic Tells/Sells through Consults/Joins to subordinate autonomy.' },
        ],
        memoryAid: 'Blake Mouton corners: (1,1) Impoverished, (9,1) Produce-or-Perish, (1,9) Country Club, (5,5) Middle, (9,9) Team!',
      },
      {
        id: 'al-bus-2-2-c2',
        title: 'Content Theories of Motivation: Taylor, Mayo, Maslow & Herzberg',
        summary: 'Contrasting scientific piece-rate pay with social belonging, higher-order needs, and job enrichment.',
        bullets: [
          '**F.W. Taylor (Scientific Management)** assumed "economic man" responds primarily to piece-rate pay and strict division of labour — effective for simple repetitive output, yet breeds boredom and quality cuts.',
          '**Elton Mayo (Hawthorne Studies)** demonstrated that productivity surges when workers receive attention, teamwork autonomy, and informal social belonging — not merely better lighting or wages.',
        ],
        subsections: [
          {
            heading: 'Maslow & Herzberg Applied to Unit Labour Costs',
            bullets: [
              "**Maslow's Hierarchy** — Physiological → Safety → Social → Esteem → Self-Actualisation; once a level is satisfied, only the next unmet tier motivates.",
              "**Herzberg's Two-Factor Theory** — **Hygiene factors** (salary, policies, working conditions) prevent dissatisfaction, whereas **Motivators** (achievement, recognition, responsibility, advancement via **job enrichment**) drive active effort.",
            ],
            exampleHeading: 'Worked example: Motivation impact on unit labour cost',
            examples: [
              'A plant pays 50 staff £24,000/year (total wage bill = £1,200,000) producing 240,000 units → Unit Labour Cost = £1,200,000 ÷ 240,000 = £5.00/unit.',
              'After introducing Herzberg job enrichment and team cells (costing £60,000 in training), output rises 20% to 288,000 units → New Unit Labour Cost = £1,260,000 ÷ 288,000 = £4.38/unit (a 12.4% unit-cost cut).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Hawthorne Effect', definition: 'Mayo’s finding that employee productivity improves when workers feel consulted, valued, and part of supportive teams.' },
          { term: 'Job enrichment', definition: 'Vertical expansion of a role to include challenging tasks, autonomy, and decision-making responsibility.' },
        ],
        commonMistake: 'Students often confuse Herzberg’s Hygiene factors with Motivators by saying "raising basic salary motivates staff long term". In Herzberg’s model, basic pay is a Hygiene factor — low pay demotivates, but high basic pay alone will not create lasting motivation without motivators.',
      },
      {
        id: 'al-bus-2-2-c3',
        title: "Process Theory (Vroom's Expectancy Theory) & Strategic Reward Design",
        summary: 'Linking effort, performance appraisal, and valued rewards via Expectancy × Instrumentality × Valence.',
        bullets: [
          "**Vroom's Expectancy Theory** is a **process theory** explaining *how* workers rationally choose effort level: `Motivational Force = Expectancy × Instrumentality × Valence`.",
          'Because the three elements multiply, if **any single link equals zero**, motivational force collapses to zero!',
        ],
        subsections: [
          {
            heading: 'Vroom’s Three Links & Financial Reward Schemes',
            bullets: [
              '**Expectancy (E)** — belief that extra effort will actually produce higher performance (requires realistic targets and training).',
              '**Instrumentality (I)** — trust that hitting the performance target will definitely earn the promised reward (requires transparent appraisals).',
              '**Valence (V)** — how much the employee personally values that specific reward (cash bonus vs flexible hours vs share options).',
              '**Reward schemes** — Performance-Related Pay (PRP), profit-sharing (aligns staff with corporate profit), and employee share-ownership schemes (long-term retention).',
            ],
            exampleHeading: 'Worked example: Evaluating a profit-sharing bonus scheme',
            examples: [
              'A firm distributes 5% of its £2,000,000 operating profit (£100,000) equally across 100 employees → £1,000 bonus each.',
              'If absenteeism and scrap drop, raising operating profit by £260,000, the net gain after paying the £100,000 pool is +£160,000 — provided employees perceive a credible link (high Instrumentality).',
            ],
          },
        ],
        glossaryPills: [
          { term: "Vroom's Expectancy Theory", definition: 'Process motivation theory stating Force = Expectancy (effort→performance) × Instrumentality (performance→reward) × Valence (value of reward).' },
          { term: 'Performance-Related Pay (PRP)', definition: 'Financial pay rise or bonus tied directly to meeting agreed individual or team appraisal targets.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Blake Mouton Grid', definition: 'Leadership framework plotting Concern for Production (1–9) against Concern for People (1–9).' },
      { term: 'Tannenbaum-Schmidt Continuum', definition: 'Leadership scale ranging from manager-led Tells/Sells to team-led Consults/Joins.' },
      { term: "Vroom's Expectancy Theory", definition: 'Process theory modelling motivation as Expectancy × Instrumentality × Valence.' },
      { term: 'Hawthorne Effect', definition: 'Mayo’s discovery that social interaction and management attention lift worker productivity.' },
      { term: 'Hygiene factors', definition: 'Herzberg’s baseline workplace factors (pay, policy, conditions) that prevent dissatisfaction.' },
    ],
    checklistPoints: [
      'Position leaders on the Blake Mouton Grid and Tannenbaum-Schmidt Continuum in case contexts.',
      'Compare Taylor, Mayo, Maslow, and Herzberg and calculate motivation effects on unit labour cost.',
      "Diagnose broken incentive schemes using Vroom's Expectancy × Instrumentality × Valence equation.",
    ],
  },

  'al-bus-2-3': {
    subtopicId: 'al-bus-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'HR Analytics (Labour Turnover, Retention, Productivity), Soft vs Hard HRM & Trade Unions',
    readingMinutes: 12,
    videoTitle: 'IGCSE: Business. Chapter 2.3: Recruitment, selection and training',
    youtubeId: 'J9259zzXHyI',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:20',
    courseMatchSummary: 'Mr Lee’s recruitment & training lesson extended to A-Level HR analytics formulas, Hard vs Soft HRM & trade union relations',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'HR Analytics: Turnover, Retention, Absenteeism & Productivity', cardId: 'al-bus-2-3-c1' },
      { time: '4:15', seconds: 255, label: 'Hard vs Soft HRM & Flexible Workforce Planning', cardId: 'al-bus-2-3-c2' },
      { time: '8:10', seconds: 490, label: 'Trade Unions, Collective Bargaining & Dispute Resolution', cardId: 'al-bus-2-3-c3' },
    ],
    cards: [
      {
        id: 'al-bus-2-3-c1',
        title: 'Quantitative HR Analytics: Turnover, Retention, Absenteeism & Productivity',
        summary: 'Measuring workforce performance precisely to diagnose morale, recruitment costs, and competitiveness.',
        bullets: [
          'A-Level HR strategy relies on five core metrics to judge whether people management supports corporate objectives.',
        ],
        subsections: [
          {
            heading: 'Core A-Level HR Formulas',
            bullets: [
              '**Labour Turnover (%)** = `(Number of staff leaving in a year ÷ Average number of staff employed) × 100`.',
              '**Employee Retention Rate (%)** = `(Staff employed for ≥1 year ÷ Total staff at start of period) × 100`.',
              '**Absenteeism Rate (%)** = `(Total days absent ÷ Total possible working days) × 100`.',
              '**Labour Productivity** = `Total Output ÷ Number of Employees`; **Unit Labour Cost** = `Total Labour Cost ÷ Total Output`.',
            ],
            exampleHeading: 'Worked example: Auditing an HR crisis at a logistics hub',
            examples: [
              'A warehouse averages 200 staff; 48 leave during the year → Labour Turnover = (48 ÷ 200) × 100 = 24% (well above the 10% industry norm).',
              'If replacing and training each worker costs £3,500, annual turnover cost = 48 × £3,500 = £168,000. Meanwhile 1,440 sick days out of 48,000 scheduled days → Absenteeism = (1,440 ÷ 48,000) × 100 = 3.0%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Labour turnover', definition: 'Percentage of the average workforce leaving a business within a 12-month period.' },
          { term: 'Unit labour cost', definition: 'Total labour expenditure divided by total output produced; measures labour cost competitiveness per unit.' },
        ],
        commonMistake: 'Students often assume 0% labour turnover is always optimal. Very low turnover (<3%) can signal stagnation and lack of fresh skills, while high turnover in seasonal retail is structurally normal — always benchmark against industry norms.',
      },
      {
        id: 'al-bus-2-3-c2',
        title: 'Hard vs Soft HRM & Strategic Workforce Planning',
        summary: 'Contrasting cost-minimising labour control against long-term human-capital development.',
        bullets: [
          '**Hard HRM** treats employees primarily as a variable resource to be minimised in cost — favouring tight supervision, zero-hours or temporary contracts, outsourcing, and rapid downsizing.',
          '**Soft HRM** views employees as the firm’s most valuable competitive asset — investing in training, consultation, career progression, job security, and democratic empowerment.',
        ],
        subsections: [
          {
            heading: 'Workforce Planning & Flexible Contracts',
            bullets: [
              '**Workforce planning** forecasts future staffing numbers and skills required to execute corporate strategy, preventing both skill bottlenecks and costly overstaffing.',
              '**Flexible working** — part-time, flexitime, remote/hybrid, and zero-hours contracts match staffing dynamically to demand peaks, though insecure contracts can hurt morale and customer service quality.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Hard HRM', definition: 'Cost-focused human resource strategy treating labour as a flexible input to be tightly controlled and minimised.' },
          { term: 'Soft HRM', definition: 'Developmental human resource strategy investing in staff welfare, training, and empowerment to achieve high commitment.' },
        ],
        memoryAid: 'Hard HRM = Headcount & Costs (short-term lean); Soft HRM = Skills & Support (long-term loyalty)!',
      },
      {
        id: 'al-bus-2-3-c3',
        title: 'Employer–Employee Relations, Trade Unions & Dispute Resolution',
        summary: 'Navigating collective bargaining, works councils, industrial action, and ACAS mediation.',
        bullets: [
          'A **trade union** represents members in **collective bargaining** over wages, hours, safety, and redundancy terms, redressing the power imbalance between individual staff and large employers.',
          '**Works councils** create formal employer–employee consultation forums inside firms, often preventing adversarial conflict before it escalates.',
        ],
        subsections: [
          {
            heading: 'Industrial Action, Single-Union Deals & ACAS',
            bullets: [
              '**Escalation of industrial action** — overtime bans → work-to-rule (strict contract compliance slowing output) → go-slow → full strike action.',
              '**Resolving disputes** — **conciliation** (independent body like ACAS facilitates dialogue) vs **arbitration** (independent arbitrator imposes a binding settlement); **single-union** and **no-strike agreements** streamline negotiations.',
            ],
            exampleHeading: 'Worked example: Financial cost of a 5-day strike',
            examples: [
              'A rail operator generates £400,000 daily ticket revenue with £120,000 variable operating costs (daily contribution = £280,000).',
              'A 5-day strike loses 5 × £280,000 = £1,400,000 in contribution plus long-term reputational churn — often far exceeding the £600,000 annual cost of a compromise pay deal.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Collective bargaining', definition: 'Formal negotiation between employer representatives and trade unions over pay and working conditions.' },
          { term: 'Arbitration', definition: 'Dispute resolution where an impartial third party hears both sides and delivers a binding decision.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Labour turnover', definition: '(Staff leaving ÷ Average staff employed) × 100 over a year.' },
      { term: 'Employee retention rate', definition: 'Percentage of employees remaining with an organisation over a defined period.' },
      { term: 'Hard HRM', definition: 'Approach managing employees primarily as a cost resource via tight control and flexible contracts.' },
      { term: 'Soft HRM', definition: 'Approach treating staff as strategic assets through training, empowerment, and strong communication.' },
      { term: 'Collective bargaining', definition: 'Negotiation of wages and conditions jointly between unions and employers.' },
    ],
    checklistPoints: [
      'Calculate and interpret labour turnover, retention rate, absenteeism, productivity, and unit labour cost.',
      'Evaluate Hard vs Soft HRM in different strategic contexts (cost leadership vs differentiation).',
      'Assess the impact of trade unions, industrial action, works councils, and conciliation/arbitration.',
    ],
  },

  'al-bus-3-1': {
    subtopicId: 'al-bus-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Market Analysis, PED/YED Pricing Strategy & Moving-Average Sales Forecasting',
    readingMinutes: 13,
    videoTitle: 'IGCSE Business: Chapter 3.3.2 Marketing mix - Price',
    youtubeId: 'ZdKIwYTZucQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:05',
    courseMatchSummary: 'Mr Lee’s pricing strategy upgraded to A-Level market analytics, PED/YED revenue calculations & moving-average sales forecasting',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Market Size, Growth, Share & Correlation Analysis', cardId: 'al-bus-3-1-c1' },
      { time: '4:15', seconds: 255, label: 'PED, YED & Revenue-Maximising Pricing Strategy', cardId: 'al-bus-3-1-c2' },
      { time: '8:30', seconds: 510, label: 'Time-Series Moving Averages & Seasonal Variation', cardId: 'al-bus-3-1-c3' },
    ],
    cards: [
      {
        id: 'al-bus-3-1-c1',
        title: 'Market Size, Market Growth, Market Share & Correlation Analysis',
        summary: 'Quantifying competitive standing and testing marketing relationships with scatter correlation.',
        bullets: [
          'Marketing objectives must be grounded in hard market metrics: **Market Share (%)** = `(Firm Sales ÷ Total Market Sales) × 100` and **Market Growth (%)** = `(Change in Market Size ÷ Original Market Size) × 100`.',
          '**Correlation analysis** plots two variables on a scatter graph (e.g. ad spend vs sales) to identify **positive**, **negative**, or **zero correlation** — remembering that correlation does NOT prove causation.',
        ],
        subsections: [
          {
            heading: 'Sampling Confidence & Quantitative Market Audit',
            bullets: [
              '**Confidence levels & intervals** — larger random/stratified samples narrow the margin of error (e.g. 60% ± 3% at 95% confidence), reducing launch risk at higher research cost.',
              '**Volume vs value market share** — a luxury brand can hold a modest volume share (5%) yet a dominant value share (18%) due to premium pricing.',
            ],
            exampleHeading: 'Worked example: Market growth vs firm growth performance',
            examples: [
              'The UK oat-milk market expands from £200m to £250m → Market Growth = (£50m ÷ £200m) × 100 = 25%.',
              'Brand A’s sales grow from £40m to £45m (+12.5%), so its Market Share actually FALLS from 20% (£40m/£200m) to 18% (£45m/£250m) despite rising sales.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Market share', definition: 'A business’s sales expressed as a percentage of total sales in the market (by value or volume).' },
          { term: 'Correlation', definition: 'Statistical strength and direction of relationship between two variables (does not guarantee causation).' },
        ],
      },
      {
        id: 'al-bus-3-1-c2',
        title: 'PED, YED & Quantitative Pricing Strategy',
        summary: 'Predicting total revenue and cyclical vulnerability using Price and Income Elasticity of Demand.',
        diagram: 'elasticity-curves',
        bullets: [
          '**Price Elasticity of Demand (PED)** = `%Δ Quantity Demanded ÷ %Δ Price`. When `|PED| > 1` (price elastic), raising price cuts total revenue; when `|PED| < 1` (price inelastic), raising price increases total revenue.',
          '**Income Elasticity of Demand (YED)** = `%Δ Quantity Demanded ÷ %Δ Real Income`. **Luxury goods** have `YED > +1`, **normal necessities** lie between `0` and `+1`, and **inferior goods** have `YED < 0` (sales rise during recessions!).',
        ],
        subsections: [
          {
            heading: 'Strategic Pricing Applications',
            bullets: [
              '**Price discrimination & dynamic pricing** — charging different prices to segments with different PEDs (e.g. peak business rail tickets with inelastic demand vs off-peak leisure tickets).',
              '**Limitations of PED/YED** — estimates rely on historical data and assume *ceteris paribus*, whereas rival price cuts or viral trends constantly shift elasticity.',
            ],
            exampleHeading: 'Worked example: PED calculation and total revenue impact',
            examples: [
              'A streaming app raises monthly price by 10% (from £10 to £11) and subscribers fall by 4% (from 100,000 to 96,000) → PED = −4% ÷ +10% = −0.4 (price inelastic).',
              'Total Revenue rises from £1,000,000 (100,000 × £10) to £1,056,000 (96,000 × £11) — an extra £56,000/month because |PED| < 1.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Price Elasticity of Demand (PED)', definition: 'Measure of responsiveness of quantity demanded to a percentage change in selling price (%ΔQd ÷ %ΔP).' },
          { term: 'Income Elasticity of Demand (YED)', definition: 'Measure of responsiveness of quantity demanded to a percentage change in real consumer income (%ΔQd ÷ %ΔY).' },
        ],
        commonMistake: 'Students frequently forget the negative sign on inferior goods’ YED or misread PED = −0.4 as "less than 1 means elastic". Always take the absolute value for PED: |−0.4| = 0.4 < 1 → INELASTIC.',
      },
      {
        id: 'al-bus-3-1-c3',
        title: 'Time-Series Analysis: Moving Averages & Sales Forecasting',
        summary: 'Smoothing seasonal noise to isolate the underlying sales trend and extrapolate future demand.',
        bullets: [
          '**Time-series analysis** decomposes historical sales into three components: **Underlying Trend**, **Seasonal Variation** (`Actual − Trend`), and **Cyclical/Random Fluctuations**.',
          'Calculating a **3-period moving average** (or **4-quarter centred moving average**) smooths out seasonal spikes so managers can project the trend forward and re-apply the average seasonal variation.',
        ],
        subsections: [
          {
            heading: 'Extrapolation Steps & Forecasting Limitations',
            bullets: [
              '**Forecasting formula** — `Forecast Sales = Extrapolated Trend Value + Average Seasonal Variation` for that quarter/season.',
              '**Limitations of extrapolation** — assumes past trends persist; sudden external shocks (recessions, disruptive competitors, viral boycotts) can invalidate purely statistical forecasts.',
            ],
            exampleHeading: 'Worked example: 3-period moving average & seasonal forecast',
            examples: [
              'Quarterly sales (£000s): Q1 = 120, Q2 = 150, Q3 = 180 → 3-quarter moving average centred on Q2 = (120 + 150 + 180) ÷ 3 = £150k.',
              'If the extrapolated trend for next Q4 is £210k and Q4’s average seasonal variation is +£35k (holiday surge), Forecast Q4 Sales = £210k + £35k = £245k.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Moving average', definition: 'Successive averages of consecutive data periods used to smooth seasonal fluctuations and reveal the underlying sales trend.' },
          { term: 'Seasonal variation', definition: 'Regular difference between actual sales in a given period and the underlying trend value (Actual − Trend).' },
        ],
        memoryAid: 'Forecast = Trend + Season (extrapolate the smooth line, then add back the seasonal bump or dip)!',
      },
    ],
    keyTerms: [
      { term: 'Price Elasticity of Demand (PED)', definition: '% change in quantity demanded divided by % change in price.' },
      { term: 'Income Elasticity of Demand (YED)', definition: '% change in quantity demanded divided by % change in consumer income.' },
      { term: 'Moving average', definition: 'Statistical smoothing technique averaging consecutive periods to identify a sales trend.' },
      { term: 'Seasonal variation', definition: 'Predictable deviation of actual sales above or below the trend at specific times of year.' },
      { term: 'Extrapolation', definition: 'Extending a historical trend line into the future to forecast sales.' },
    ],
    checklistPoints: [
      'Calculate market share, market growth, and interpret scatter correlation without assuming causation.',
      'Calculate PED and YED and explain how elasticity governs pricing and revenue outcomes.',
      'Compute moving averages and seasonal variations to build and critique sales forecasts.',
    ],
  },

  'al-bus-3-2': {
    subtopicId: 'al-bus-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Product Portfolio Strategy (Boston Matrix, PLC) & The Extended 7 Ps',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 3.3.1 Marketing mix - Product',
    youtubeId: 'DNoEHkNSE6s',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:55',
    courseMatchSummary: 'Mr Lee’s Product lesson expanded to A-Level Product Life Cycle cash flows, Boston Matrix portfolio balance & Extended 7 Ps',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Product Life Cycle Cash Flow & Extension Strategies', cardId: 'al-bus-3-2-c1' },
      { time: '4:05', seconds: 245, label: 'The Boston Matrix (BCG) & Portfolio Balancing', cardId: 'al-bus-3-2-c2' },
      { time: '8:10', seconds: 490, label: 'Integrated Marketing Mix & The Extended 7 Ps', cardId: 'al-bus-3-2-c3' },
    ],
    cards: [
      {
        id: 'al-bus-3-2-c1',
        title: 'Product Life Cycle (PLC), Cash Flow & Extension Strategies',
        summary: 'Managing revenue, cash-flow deficits, and timely extensions across every stage of a product’s life.',
        diagram: 'product-life-cycle',
        bullets: [
          'The **Product Life Cycle (PLC)** traces sales across **Research & Development → Introduction → Growth → Maturity → Decline**, with cash flow deeply negative in R&D/Introduction and strongly positive in Maturity.',
          'Before decline accelerates, firms deploy **extension strategies** (new features, refreshed packaging, price repositioning, new demographics, or export markets) to prolong profitable maturity.',
        ],
        subsections: [
          {
            heading: 'Critique of PLC & Extension ROI',
            bullets: [
              '**Strategic limitation** — managers cannot reliably distinguish a temporary seasonal dip from the start of permanent decline in real time, and PLC curves vary wildly (e.g. viral fads vs century-old staples).',
            ],
            exampleHeading: 'Worked example: Evaluating an extension strategy investment',
            examples: [
              'A maturing soft drink generates £3.0m annual contribution but is falling 20%/year. Spending £800,000 on a sugar-free reformulation & relaunch preserves £3.0m/year contribution for 2 extra years instead of dropping to £2.4m and £1.9m.',
              'Extra contribution saved = (£3.0m − £2.4m) + (£3.0m − £1.9m) = £1.7m vs £0.8m cost → Net gain = +£900,000.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Product Life Cycle (PLC)', definition: 'Model showing sales trajectory and cash-flow profile from development and launch through growth, maturity, and decline.' },
          { term: 'Extension strategy', definition: 'Marketing initiative designed to revive sales and extend a product’s profitable maturity phase.' },
        ],
      },
      {
        id: 'al-bus-3-2-c2',
        title: 'The Boston Matrix (BCG) & Balanced Product Portfolio Management',
        summary: 'Funding tomorrow’s Stars from today’s Cash Cows while pruning cash-draining Dogs.',
        bullets: [
          'The **Boston Matrix** plots products by **Market Growth Rate** (vertical) and **Relative Market Share** (horizontal) into four quadrants: **Stars, Cash Cows, Question Marks (Problem Children), and Dogs**.',
          'A **balanced portfolio** harvests cash surpluses from mature **Cash Cows** to finance heavy marketing and R&D for **Question Marks** and fast-growing **Stars**, ensuring future income once current Cash Cows decline.',
        ],
        subsections: [
          {
            heading: 'Four Strategic Prescriptions (Build, Hold, Harvest, Divest)',
            bullets: [
              '**Stars (High Growth / High Share)** — *Build/Invest* heavily to defend share; high revenues offset by high promotional & capacity investment.',
              '**Cash Cows (Low Growth / High Share)** — *Hold/Harvest* strong positive cash flow with low promotional outlay.',
              '**Question Marks (High Growth / Low Share)** — *Build selectively or Divest*; cash-hungry gambles that need funding to become Stars.',
              '**Dogs (Low Growth / Low Share)** — *Divest or Harvest* unless they serve a profitable niche or complement flagship lines.',
            ],
            exampleHeading: 'Worked example: Auditing a multi-product portfolio cash flow',
            examples: [
              'TechCorp has 2 Cash Cows generating +£9m net cash/year, 1 Star breaking even (0m net cash), and 2 Question Marks consuming −£6m/year in R&D & ads.',
              'Net portfolio cash surplus = £9m − £6m = +£3m/year — healthy and self-funding. Without the Cash Cows, the Question Marks would force heavy external borrowing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Boston Matrix', definition: 'Portfolio grid classifying products into Stars, Cash Cows, Question Marks, and Dogs based on market growth and relative market share.' },
          { term: 'Cash Cow', definition: 'High market-share product in a slow-growth market generating strong net cash surplus to fund newer lines.' },
        ],
        commonMistake: 'Students often claim a company should immediately discontinue every "Dog" in the Boston Matrix. A Dog may still yield positive contribution covering fixed overheads, serve loyal niche clients, or act as a loss-leader supporting Cash Cow sales.',
      },
      {
        id: 'al-bus-3-2-c3',
        title: 'Integrated Marketing Mix & The Extended 7 Ps for Services',
        summary: 'Aligning Product, Price, Place, Promotion with People, Process, and Physical Evidence.',
        bullets: [
          'Service-dominated economies extend McCarthy’s traditional **4 Ps** to the **Extended 7 Ps** by adding **People, Process, and Physical Evidence**.',
          'An **integrated marketing mix** ensures every element sends a consistent positioning signal (e.g. a luxury spa pairs premium pricing with bespoke staff training, effortless booking processes, and marble interiors).',
        ],
        subsections: [
          {
            heading: 'The Three Service Ps & Market Mapping',
            bullets: [
              '**People** — front-line staff training, friendliness, and product expertise directly define perceived service quality.',
              '**Process** — speed, convenience, and reliability of delivery (e.g. one-click checkout, real-time tracking, frictionless check-in).',
              '**Physical Evidence** — tangible cues reassuring buyers before purchase (store ambiance, app UI polish, clean uniforms, customer reviews).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Extended 7 Ps', definition: 'Service marketing mix expanding Product, Price, Place, Promotion to include People, Process, and Physical Evidence.' },
        ],
        memoryAid: 'Boston Matrix cash flow: Milk the Cash Cows → Feed the Question Marks → Grow future Stars → Trim draining Dogs!',
      },
    ],
    keyTerms: [
      { term: 'Product Life Cycle', definition: 'Progression of a product’s sales through Development, Introduction, Growth, Maturity, and Decline.' },
      { term: 'Boston Matrix', definition: 'Portfolio model mapping Market Growth against Relative Market Share (Stars, Cash Cows, Question Marks, Dogs).' },
      { term: 'Cash Cow', definition: 'Established high-share product in a mature market yielding large cash surpluses.' },
      { term: 'Extended 7 Ps', definition: 'Product, Price, Place, Promotion plus People, Process, and Physical Evidence.' },
      { term: 'Integrated marketing mix', definition: 'Coordinating every element of the 7 Ps so brand positioning is mutually reinforcing.' },
    ],
    checklistPoints: [
      'Link PLC stages to cash-flow profiles and justify targeted extension strategies quantitatively.',
      'Analyse product portfolios on the Boston Matrix and recommend Build, Hold, Harvest, or Divest actions.',
      'Apply the Extended 7 Ps to design an integrated service marketing strategy.',
    ],
  },

  'al-bus-3-3': {
    subtopicId: 'al-bus-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Digital Marketing, Omni-Channel Distribution & International Market Entry',
    readingMinutes: 12,
    videoTitle: 'IGCSE Business: Chapter 3.4 Marketing strategy',
    youtubeId: '5MXgAIASVlE',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:15',
    courseMatchSummary: 'Mr Lee’s marketing strategy expanded to A-Level digital ROAS analytics, omni-channel D2C & international entry modes',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Digital Marketing, CRM & Conversion Analytics', cardId: 'al-bus-3-3-c1' },
      { time: '4:00', seconds: 240, label: 'Omni-Channel Distribution & Disintermediation', cardId: 'al-bus-3-3-c2' },
      { time: '8:00', seconds: 480, label: 'International Entry Modes & Pan-Global vs Glocalisation', cardId: 'al-bus-3-3-c3' },
    ],
    cards: [
      {
        id: 'al-bus-3-3-c1',
        title: 'Digital Marketing, Big Data, CRM & Conversion Analytics',
        summary: 'Optimising targeted online spend using conversion rates, CPA, ROAS, and customer lifetime value.',
        bullets: [
          '**Digital marketing** replaces broad mass-media guesswork with precision targeting via **SEO**, **Pay-Per-Click (PPC)**, social/influencer campaigns, and personalised **Customer Relationship Management (CRM)**.',
          'Big data analytics track exact **Return on Ad Spend (ROAS)**, **Conversion Rate (%)**, and **Customer Acquisition Cost (CAC)** in real time.',
        ],
        subsections: [
          {
            heading: 'Digital Metrics & Privacy Constraints',
            bullets: [
              '**Conversion Rate (%)** = `(Purchases ÷ Website Visits) × 100`; **CAC** = `Campaign Spend ÷ New Customers Won`.',
              '**Risks & constraints** — rising digital ad auction costs, ad-blocker saturation, GDPR/data-privacy regulations, and instant viral backlash if brand claims prove misleading.',
            ],
            exampleHeading: 'Worked example: Calculating digital conversion rate, CAC & ROAS',
            examples: [
              'A paid social campaign costs £25,000, drives 50,000 site visits, and converts 1,250 buyers spending £80 each (revenue = £100,000).',
              'Conversion Rate = (1,250 ÷ 50,000) × 100 = 2.5%; CAC = £25,000 ÷ 1,250 = £20/customer; ROAS = £100,000 ÷ £25,000 = 4.0×.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Customer Relationship Management (CRM)', definition: 'Data-driven systems tracking customer history and preferences to personalise offers and boost retention.' },
          { term: 'Customer Acquisition Cost (CAC)', definition: 'Total marketing and sales cost required to acquire one new paying customer.' },
        ],
      },
      {
        id: 'al-bus-3-3-c2',
        title: 'Omni-Channel Distribution & Direct-to-Consumer (D2C) Disintermediation',
        summary: 'Weighing seamless click-and-collect integration and D2C margin capture against fulfilment logistics.',
        bullets: [
          '**Omni-channel distribution** unifies physical stores, mobile apps, and websites into one seamless customer journey (e.g. click-and-collect, instant in-store returns of online orders, unified loyalty data).',
          '**Disintermediation** cuts out wholesalers or third-party retailers by selling **Direct-to-Consumer (D2C)**, allowing the manufacturer to capture retailer margins and own customer data.',
        ],
        subsections: [
          {
            heading: 'Margin vs Fulfilment Cost Trade-Off',
            bullets: [
              '**D2C challenges** — picking/packing single parcels, last-mile courier fees, and 20–30% fashion return rates can erode the wholesale margin saved unless logistics are automated.',
            ],
            exampleHeading: 'Worked example: D2C margin vs third-party retail channel',
            examples: [
              'A footwear brand makes trainers for £28. Via department stores, it sells wholesale at £50 (gross profit = £22/pair).',
              'Via D2C website, it sells at £90 retail but pays £12 delivery/returns and £15 digital ad CAC → Net contribution = £90 − £28 − £12 − £15 = £35/pair (+£13 extra contribution per pair).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Omni-channel distribution', definition: 'Integrated retail strategy blending physical stores, web, and mobile channels into a single seamless buying experience.' },
          { term: 'Disintermediation', definition: 'Removing middlemen such as wholesalers or retailers to sell directly from producer to consumer.' },
        ],
        commonMistake: 'Students often equate "multi-channel" with "omni-channel". Multi-channel merely sells via separate silos (store + website), whereas omni-channel synchronises inventory, pricing, loyalty, and returns seamlessly across every touchpoint.',
      },
      {
        id: 'al-bus-3-3-c3',
        title: 'International Market Entry Modes & Pan-Global vs Glocalisation',
        summary: 'Choosing low-risk exporting vs high-control FDI and adapting marketing mixes across cultures.',
        bullets: [
          'International entry modes escalate in **control, capital commitment, and risk**: Direct Exporting → Licensing / Franchising → **Joint Venture** → **Foreign Direct Investment (FDI)** / wholly owned subsidiary.',
          'Firms must decide between **pan-global marketing** (identical product/brand globally for economies of scale) and **glocalisation** ("think global, act local" — adapting recipes, language, packaging, and channels to local culture).',
        ],
        subsections: [
          {
            heading: 'Evaluating Entry Modes & Cultural Barriers',
            bullets: [
              '**Joint ventures** pair a foreign firm’s brand/technology with a local partner’s regulatory knowledge and distribution network — yet require sharing profits and risk partner disputes.',
              '**Glocalisation advantage** — avoids cultural blunders and satisfies local laws/tastes (e.g. vegetarian menus in India), though customisation sacrifices some marketing and production economies of scale.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Glocalisation', definition: 'Global strategy combining a recognised international brand with product and marketing adaptations tailored to local cultures.' },
          { term: 'Foreign Direct Investment (FDI)', definition: 'Long-term investment by a firm into building or acquiring physical production or retail operations abroad.' },
        ],
        memoryAid: 'Entry risk ladder: Export (lowest) → License/Franchise → Joint Venture → FDI Subsidiary (highest control & cost)!',
      },
    ],
    keyTerms: [
      { term: 'Omni-channel distribution', definition: 'Seamless integration of online, mobile, and physical store channels with shared stock and customer data.' },
      { term: 'Disintermediation', definition: 'Bypassing traditional wholesalers/retailers to sell directly to end consumers.' },
      { term: 'Glocalisation', definition: 'Adapting a global brand’s product, pricing, or promotion to fit local cultural and legal expectations.' },
      { term: 'Pan-global marketing', definition: 'Selling a standardised product with a uniform global marketing mix across all countries.' },
      { term: 'Joint venture', definition: 'Two or more firms forming a shared legal entity to enter a market, pooling capital, expertise, and risk.' },
    ],
    checklistPoints: [
      'Calculate and interpret digital conversion rates, CAC, and ROAS to assess campaign efficiency.',
      'Evaluate omni-channel distribution and D2C disintermediation margins against logistics costs.',
      'Compare international entry modes and justify pan-global marketing versus glocalisation.',
    ],
  },
};

export const ALEVEL_BUSINESS_QUIZZES_1_TO_3: QuizQuestion[] = [
  // 1.1 (5)
  {
    id: 'albus-q-111',
    subtopicId: 'al-bus-1-1',
    type: 'mcq',
    marks: 1,
    prompt: "On Mendelow's Stakeholder Matrix, how should a board manage a stakeholder group with HIGH Power and LOW Interest (e.g. a government safety regulator)?",
    options: ['Minimal effort', 'Keep informed', 'Keep satisfied', 'Ignore until an AGM vote'],
    correctIndex: 2,
    explanation: 'High Power / Low Interest stakeholders must be Kept Satisfied so compliance failures never provoke them into active intervention.',
  },
  {
    id: 'albus-q-112',
    subtopicId: 'al-bus-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: "Complete Elkington's Triple Bottom Line and the satisficing concept.",
    segments: ['The Triple Bottom Line evaluates performance across Profit, People, and ', '; pursuing sufficient profit to keep owners content while meeting other aims is profit ', '.'],
    wordBank: ['Planet', 'satisficing', 'Price', 'maximisation'],
    answers: ['Planet', 'satisficing'],
    explanation: 'Triple Bottom Line = Profit, People, Planet; profit satisficing balances owner returns with wider managerial or ethical goals.',
  },
  {
    id: 'albus-q-113',
    subtopicId: 'al-bus-1-1',
    type: 'matching',
    marks: 3,
    prompt: "Match each tier of Carroll's CSR Pyramid to its exact business obligation.",
    pairs: [
      { left: 'Economic responsibility (Base)', right: 'Generate profit and remain financially viable' },
      { left: 'Legal responsibility', right: 'Comply strictly with employment, tax, and safety laws' },
      { left: 'Ethical responsibility', right: 'Act morally beyond minimum legal requirements' },
      { left: 'Philanthropic responsibility (Peak)', right: 'Voluntary charitable donations and community grants' },
    ],
    explanation: "Carroll's Pyramid builds upward from economic viability and legal compliance through ethical conduct to philanthropy.",
  },
  {
    id: 'albus-q-114',
    subtopicId: 'al-bus-1-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO valid criticisms of corporate mission statements at A-Level.',
    options: [
      'They are frequently vague PR slogans lacking measurable SMART targets',
      'They may fail to reflect real operational decisions when short-term profit pressures rise',
      'They legally force a company to convert into a charity',
      'They replace the need to prepare an annual Income Statement',
    ],
    correctIndices: [0, 1],
    explanation: 'Mission statements often lack specificity and can be undermined by short-term profit motives unless cascaded into budgeted SMART objectives.',
  },
  {
    id: 'albus-q-115',
    subtopicId: 'al-bus-1-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'Contrast Friedman’s shareholder concept with Freeman’s stakeholder concept, and explain one way a social audit strengthens CSR credibility.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'The shareholder concept argues directors must focus on maximising financial returns for shareholders within the law, whereas the stakeholder concept requires balancing the interests of all affected groups such as staff, customers, and communities. An independent social audit verifies ethical and environmental impact against targets, countering greenwashing accusations.',
      markPoints: [
        { id: 'mp1', markDescription: 'Shareholder concept prioritises maximising shareholder returns/profits', requiredKeywordGroups: [['shareholder'], ['return', 'profit', 'value', 'maximis']] },
        { id: 'mp2', markDescription: 'Stakeholder concept balances wider groups (staff, customers, community)', requiredKeywordGroups: [['stakeholder'], ['balanc', 'staff', 'customer', 'communit', 'group']] },
        { id: 'mp3', markDescription: 'Social audit independently verifies CSR performance / counters greenwashing', requiredKeywordGroups: [['social audit', 'independent'], ['verif', 'credib', 'greenwash', 'target', 'impact']] },
      ],
    },
    explanation: 'Independent social audits turn CSR claims into verifiable evidence, reducing accusations of greenwashing.',
  },

  // 1.2 (5)
  {
    id: 'albus-q-121',
    subtopicId: 'al-bus-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'A Plc has 25,000,000 issued ordinary shares trading at £6.40 per share. What is its market capitalisation?',
    options: ['£16,000,000', '£160,000,000', '£390,625,000', '£31,400,000'],
    correctIndex: 1,
    explanation: 'Market Capitalisation = Share Price (£6.40) × Issued Shares (25,000,000) = £160,000,000.',
  },
  {
    id: 'albus-q-122',
    subtopicId: 'al-bus-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the explanation of the principal-agent conflict in Plcs.',
    segments: ['In large Plcs, the ', ' of ownership and control means salaried directors may pursue personal goals rather than shareholder value, so boards appoint independent ', ' Directors to monitor executives.'],
    wordBank: ['divorce', 'Non-Executive', 'synergy', 'privatisation'],
    answers: ['divorce', 'Non-Executive'],
    explanation: 'Divorce of ownership and control creates principal-agent risk; independent NEDs strengthen corporate governance.',
  },
  {
    id: 'albus-q-123',
    subtopicId: 'al-bus-1-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each strategic growth concept to its correct definition.',
    pairs: [
      { left: 'Synergy', right: 'Combined post-merger gains exceeding the sum of separate firms' },
      { left: 'Overtrading', right: 'Rapid sales growth outstripping working capital liquidity' },
      { left: 'Share dilution', right: 'Issuing new equity that reduces existing owners’ voting percentage' },
      { left: 'Strategic alliance', right: 'Two firms collaborating on a project while staying legally independent' },
    ],
    explanation: 'Precise terminology distinguishes inorganic M&A gains from financial and governance risks.',
  },
  {
    id: 'albus-q-124',
    subtopicId: 'al-bus-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO common reasons why large horizontal mergers fail to deliver expected synergy.',
    options: [
      'Clashes between organisational cultures causing key talent to resign',
      'Communication diseconomies and costly IT/operational integration delays',
      'Limited liability automatically expiring after a takeover',
      'Eliminating all fixed costs instantaneously upon merger completion',
    ],
    correctIndices: [0, 1],
    explanation: 'Cultural conflict, integration friction, and diseconomies of scale frequently erode projected M&A synergy.',
  },
  {
    id: 'albus-q-125',
    subtopicId: 'al-bus-1-2',
    type: 'short-answer',
    marks: 3,
    prompt: 'A founder owns 450,000 of 750,000 shares in an Ltd. The firm issues 250,000 new shares to a venture capitalist. Calculate the founder’s new percentage stake and explain one governance consequence.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Total shares become 750000 + 250000 = 1000000. The founder’s stake drops from 60% to 45% (450000 / 1000000 x 100 = 45%). Because ownership falls below 50%, the founder loses outright majority voting control over strategic board decisions.',
      markPoints: [
        { id: 'mp1', markDescription: 'Total shares = 1,000,000', numericMatch: { value: 1000000, tolerance: 1 } },
        { id: 'mp2', markDescription: 'Founder new stake = 45%', numericMatch: { value: 45, tolerance: 0.2 } },
        { id: 'mp3', markDescription: 'Falls below 50% so founder loses outright majority voting control', requiredKeywordGroups: [['50%', 'majority', 'control', 'voting'], ['los', 'below', 'dilut']] },
      ],
    },
    explanation: 'Issuing 250,000 shares dilutes the founder from 60% to 45%, crossing the crucial 50% majority control threshold.',
  },

  // 1.3 (5)
  {
    id: 'albus-q-131',
    subtopicId: 'al-bus-1-3',
    type: 'mcq',
    marks: 1,
    prompt: 'A UK sports-drink manufacturer launches a brand-new range of electric bicycles in Japan. Which quadrant of Ansoff’s Matrix does this represent?',
    options: ['Market Penetration', 'Product Development', 'Market Development', 'Diversification'],
    correctIndex: 3,
    explanation: 'New product (e-bikes) in a new market (Japan) = Diversification, the highest-risk Ansoff strategy.',
  },
  {
    id: 'albus-q-132',
    subtopicId: 'al-bus-1-3',
    type: 'matching',
    marks: 3,
    prompt: "Match each scenario to the correct force in Porter's Five Forces.",
    pairs: [
      { left: 'Supermarkets demand 15% lower wholesale prices from small dairy farms', right: 'High bargaining power of buyers' },
      { left: 'Only one patented microchip manufacturer exists worldwide', right: 'High bargaining power of suppliers' },
      { left: 'Video-conferencing replaces domestic business flights', right: 'High threat of substitutes' },
      { left: 'Billions in R&D and strict aviation licensing deter startup airlines', right: 'Low threat of new entrants' },
    ],
    explanation: 'Strong buyer/supplier power and close substitutes compress industry margins, whereas high entry barriers protect profits.',
  },
  {
    id: 'albus-q-133',
    subtopicId: 'al-bus-1-3',
    type: 'fill-blank',
    marks: 2,
    prompt: "Complete Porter's Generic Strategies framework.",
    segments: ['Achieving the industry’s lowest unit operating cost is ', ', whereas failing to achieve either lowest cost or clear uniqueness leaves a firm ', '.'],
    wordBank: ['Cost Leadership', 'stuck in the middle', 'Diversification', 'PESTLE'],
    answers: ['Cost Leadership', 'stuck in the middle'],
    explanation: 'Porter warns that firms neither lowest-cost nor distinctly differentiated get "stuck in the middle" with weak returns.',
  },
  {
    id: 'albus-q-134',
    subtopicId: 'al-bus-1-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO factors that belong under INTERNAL Weaknesses (not external Threats) in a SWOT analysis.',
    options: [
      'Outdated warehouse ERP software causing 8% late deliveries',
      'High gearing ratio of 68% limiting capacity to borrow for R&D',
      'A 15% import tariff imposed by an overseas government',
      'A national economic recession reducing consumer disposable income',
    ],
    correctIndices: [0, 1],
    explanation: 'Internal IT and capital-structure issues are Weaknesses; tariffs and recessions are external PESTLE Threats.',
  },
  {
    id: 'albus-q-135',
    subtopicId: 'al-bus-1-3',
    type: 'short-answer',
    marks: 3,
    prompt: 'Explain why Market Penetration carries lower strategic risk than Diversification on Ansoff’s Matrix, and identify one limitation of relying solely on Market Penetration.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Market penetration sells existing products into existing markets where the firm already possesses brand recognition, customer knowledge, and core competencies, minimising R&D and launch failure risk. However, relying only on penetration limits long-term growth if the core market becomes saturated or declines.',
      markPoints: [
        { id: 'mp1', markDescription: 'Uses existing products in existing markets', requiredKeywordGroups: [['existing product'], ['existing market']] },
        { id: 'mp2', markDescription: 'Leverages existing brand/customer knowledge/core competencies (lower risk)', requiredKeywordGroups: [['knowledge', 'brand', 'competenc', 'familiar', 'lower risk']] },
        { id: 'mp3', markDescription: 'Limitation: market saturation, price wars, or vulnerability to single-market decline', requiredKeywordGroups: [['saturat', 'limit', 'declin', 'price war', 'rival']] },
      ],
    },
    explanation: 'Penetration is safest in the short run but leaves a firm exposed if its sole market matures or shrinks.',
  },

  // 2.1 (5)
  {
    id: 'albus-q-211',
    subtopicId: 'al-bus-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A software consultancy assigns engineers to cross-functional client squads where they report both to the Head of Engineering and a Project Lead. What structure is this?',
    options: ['Tall functional hierarchy', 'Matrix structure', 'Centralised sole structure', 'Regional bureaucracy'],
    correctIndex: 1,
    explanation: 'Matrix structures combine functional specialists into project teams with dual reporting lines.',
  },
  {
    id: 'albus-q-212',
    subtopicId: 'al-bus-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the distinction between centralisation and delayering.',
    segments: ['Devolving pricing and hiring authority to regional store managers is ', ', whereas removing a tier of middle management widens the span of control through ', '.'],
    wordBank: ['decentralisation', 'delayering', 'autocracy', 'diversification'],
    answers: ['decentralisation', 'delayering'],
    explanation: 'Decentralisation empowers local branches; delayering removes middle-management layers.',
  },
  {
    id: 'albus-q-213',
    subtopicId: 'al-bus-2-1',
    type: 'matching',
    marks: 3,
    prompt: "Match each of Charles Handy's cultural types to its defining trait.",
    pairs: [
      { left: 'Power culture (Web)', right: 'Central founder makes rapid decisions with minimal bureaucracy' },
      { left: 'Role culture (Temple)', right: 'Formal rules, rigid job descriptions, and tall functional silos' },
      { left: 'Task culture (Net)', right: 'Adaptable cross-functional project teams valuing expertise' },
      { left: 'Person culture (Cluster)', right: 'Organisation exists mainly to support autonomous star individuals' },
    ],
    explanation: 'Organisational structure works effectively only when aligned with Handy’s underlying cultural type.',
  },
  {
    id: 'albus-q-214',
    subtopicId: 'al-bus-2-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO genuine drawbacks of adopting a Matrix organisational structure.',
    options: [
      'Dual reporting lines can create conflicting priorities and role stress for employees',
      'Coordinating shared specialists across multiple projects increases administrative overhead',
      'It forbids marketing and engineering staff from communicating',
      'It automatically eliminates the need for project deadlines',
    ],
    correctIndices: [0, 1],
    explanation: 'Dual accountability in matrix teams fosters collaboration yet risks role conflict and resource-allocation friction.',
  },
  {
    id: 'albus-q-215',
    subtopicId: 'al-bus-2-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'A retail chain removes 8 regional managers earning £60,000 each, paying £140,000 in one-off redundancies. Calculate the Year 1 net cost saving and state one operational risk of delayering.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Annual salary savings = 8 x 60000 = 480000 GBP. Subtracting 140000 GBP redundancy costs gives a Year 1 net saving of 340000 GBP. A key operational risk is that remaining senior managers face a much wider span of control, increasing workload, stress, and slower oversight of store standards.',
      markPoints: [
        { id: 'mp1', markDescription: 'Gross salary saving = £480,000', numericMatch: { value: 480000, tolerance: 10 } },
        { id: 'mp2', markDescription: 'Year 1 net saving = £340,000', numericMatch: { value: 340000, tolerance: 10 } },
        { id: 'mp3', markDescription: 'Operational risk: wider span of control / higher stress / loss of oversight', requiredKeywordGroups: [['span of control', 'workload', 'stress', 'oversight', 'morale']] },
      ],
    },
    explanation: 'Delayering saves £340k in Year 1 and £480k/year thereafter, but stretches surviving managers’ spans of control.',
  },

  // 2.2 (5)
  {
    id: 'albus-q-221',
    subtopicId: 'al-bus-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'On the Blake Mouton Managerial Grid, a manager who scores (9,1) — maximum Concern for Production and minimum Concern for People — uses which style?',
    options: ['Country Club Management', 'Team Management', 'Produce-or-Perish (Authority-Compliance)', 'Impoverished Management'],
    correctIndex: 2,
    explanation: '(9,1) is Produce-or-Perish: strict task focus with little regard for staff welfare, often causing high turnover.',
  },
  {
    id: 'albus-q-222',
    subtopicId: 'al-bus-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: "Complete Vroom's Expectancy Theory formula.",
    segments: ["In Vroom's Expectancy Theory, Motivational Force equals Expectancy multiplied by ", ' (trust that hitting targets wins the reward) multiplied by ', ' (how strongly the worker values the reward).'],
    wordBank: ['Instrumentality', 'Valence', 'Hygiene', 'Autonomy'],
    answers: ['Instrumentality', 'Valence'],
    explanation: 'Force = Expectancy × Instrumentality × Valence; if any factor is zero, motivation collapses.',
  },
  {
    id: 'albus-q-223',
    subtopicId: 'al-bus-2-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each motivation or leadership theorist to their core contribution.',
    pairs: [
      { left: 'Elton Mayo', right: 'Hawthorne Effect: social groups & management attention lift output' },
      { left: 'Frederick Herzberg', right: 'Hygiene factors prevent dissatisfaction; motivators drive effort' },
      { left: 'Victor Vroom', right: 'Process theory: Expectancy × Instrumentality × Valence' },
      { left: 'Tannenbaum & Schmidt', right: 'Leadership continuum from Tells and Sells to Consults and Joins' },
    ],
    explanation: 'Distinguishing content theories (Taylor, Mayo, Maslow, Herzberg) from process theory (Vroom) is vital for A-Level essays.',
  },
  {
    id: 'albus-q-224',
    subtopicId: 'al-bus-2-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Under Herzberg’s Two-Factor Theory, select TWO genuine MOTIVATORS (not Hygiene factors).',
    options: [
      'Greater responsibility and autonomy through job enrichment',
      'Formal recognition of achievement and opportunities for advancement',
      'Clean canteen facilities and updated health-and-safety policies',
      'Standard annual cost-of-living base salary adjustment',
    ],
    correctIndices: [0, 1],
    explanation: 'Responsibility, achievement, recognition, and growth motivate; working conditions, policies, and base pay are hygiene factors.',
  },
  {
    id: 'albus-q-225',
    subtopicId: 'al-bus-2-2',
    type: 'short-answer',
    marks: 3,
    prompt: "A sales team ignores a new £5,000 annual bonus because the target requires doubling sales during a recession and managers previously cancelled bonuses unilaterally. Diagnose this failure using Vroom's Expectancy Theory.",
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Expectancy is near zero because doubling sales in a recession feels unachievable regardless of effort. Instrumentality is also near zero because past cancellations destroyed trust that hitting targets will actually pay the bonus. Since Force = Expectancy x Instrumentality x Valence, motivational force collapses to zero even though Valence for 5000 GBP is high.',
      markPoints: [
        { id: 'mp1', markDescription: 'Low/zero Expectancy — target seems impossible in a recession', requiredKeywordGroups: [['expectancy'], ['unachiev', 'impossible', 'unrealistic', 'recession', 'zero', 'low']] },
        { id: 'mp2', markDescription: 'Low/zero Instrumentality — lack of trust managers will honour bonus', requiredKeywordGroups: [['instrumentality'], ['trust', 'cancel', 'pay', 'honour', 'zero', 'low']] },
        { id: 'mp3', markDescription: 'Multiplicative formula means zero on any link collapses total Force', requiredKeywordGroups: [['multiply', 'force', 'collaps', 'zero'], ['valence', 'expectancy', 'instrumentality']] },
      ],
    },
    explanation: 'Even a highly valued £5,000 bonus fails if unrealistic targets (Expectancy) or broken promises (Instrumentality) drive Force to zero.',
  },

  // 2.3 (5)
  {
    id: 'albus-q-231',
    subtopicId: 'al-bus-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'A hotel employs an average of 160 staff and 40 employees resign during the year. What is its annual labour turnover rate?',
    options: ['16%', '20%', '25%', '40%'],
    correctIndex: 2,
    explanation: 'Labour Turnover = (40 ÷ 160) × 100 = 25%.',
  },
  {
    id: 'albus-q-232',
    subtopicId: 'al-bus-2-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Contrast Hard HRM with Soft HRM.',
    segments: ['Treating employees as a variable cost resource via zero-hours contracts and tight supervision is ', ' HRM, whereas investing in training, security, and empowerment is ', ' HRM.'],
    wordBank: ['Hard', 'Soft', 'Matrix', 'Tall'],
    answers: ['Hard', 'Soft'],
    explanation: 'Hard HRM prioritises short-term cost control; Soft HRM builds long-term commitment and capability.',
  },
  {
    id: 'albus-q-233',
    subtopicId: 'al-bus-2-3',
    type: 'matching',
    marks: 3,
    prompt: 'Match each industrial relations term to its exact meaning.',
    pairs: [
      { left: 'Work-to-rule', right: 'Staff follow contract wording strictly, slowing output without losing pay' },
      { left: 'Collective bargaining', right: 'Union negotiates pay and conditions jointly for all members' },
      { left: 'Arbitration', right: 'Independent third party hears both sides and imposes a binding decision' },
      { left: 'Works council', right: 'Internal employer–employee committee consulting on workplace changes' },
    ],
    explanation: 'Understanding escalation steps and conciliation vs binding arbitration is key for HR strategy evaluation.',
  },
  {
    id: 'albus-q-234',
    subtopicId: 'al-bus-2-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO reliable business indicators that a Soft HRM strategy is succeeding.',
    options: [
      'Falling labour turnover and lower annual recruitment and induction expenses',
      'Rising labour productivity leading to lower unit labour costs',
      'Sharply rising absenteeism rates across core departments',
      'Increasing industrial disputes and work-to-rule actions',
    ],
    correctIndices: [0, 1],
    explanation: 'Effective Soft HRM lowers turnover/absenteeism and boosts productivity, offsetting higher training investment.',
  },
  {
    id: 'albus-q-235',
    subtopicId: 'al-bus-2-3',
    type: 'short-answer',
    marks: 3,
    prompt: 'A factory’s annual labour cost is £900,000 for 30 workers producing 180,000 units. Calculate labour productivity per worker and unit labour cost, and explain one way Soft HRM can lower unit labour cost.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Labour productivity = 180000 / 30 = 6000 units per worker. Unit labour cost = 900000 / 180000 = 5 GBP per unit. Soft HRM lowers unit labour cost by training and empowering staff so output per worker rises faster than wages while cutting absenteeism and turnover.',
      markPoints: [
        { id: 'mp1', markDescription: 'Labour productivity = 6,000 units/worker', numericMatch: { value: 6000, tolerance: 5 } },
        { id: 'mp2', markDescription: 'Unit labour cost = £5.00/unit', numericMatch: { value: 5, tolerance: 0.05 } },
        { id: 'mp3', markDescription: 'Soft HRM lifts output/productivity or cuts turnover/absenteeism', requiredKeywordGroups: [['training', 'empower', 'motivat', 'soft hrm'], ['productiv', 'output', 'turnover', 'absent']] },
      ],
    },
    explanation: 'Higher pay or training under Soft HRM still reduces unit labour cost whenever productivity grows proportionally faster.',
  },

  // 3.1 (5)
  {
    id: 'albus-q-311',
    subtopicId: 'al-bus-3-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the elasticity curves diagram to classify each pricing outcome.',
    diagram: 'elasticity-curves',
    labels: [
      { marker: 'Flat curve (|PED| > 1): effect of raising price on Total Revenue', options: ['Total Revenue falls', 'Total Revenue rises'], answer: 'Total Revenue falls' },
      { marker: 'Steep curve (|PED| < 1): effect of raising price on Total Revenue', options: ['Total Revenue falls', 'Total Revenue rises'], answer: 'Total Revenue rises' },
    ],
    explanation: 'Elastic demand loses proportionately more sales volume than price gained (TR falls); inelastic demand retains buyers (TR rises).',
  },
  {
    id: 'albus-q-312',
    subtopicId: 'al-bus-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Consumer real incomes fall by 5% during a recession, and a budget supermarket’s own-label pasta sales rise by 8%. What is the YED and product classification?',
    options: ['YED = +1.6 (Luxury good)', 'YED = −1.6 (Inferior good)', 'YED = −0.625 (Normal necessity)', 'YED = +0.625 (Normal good)'],
    correctIndex: 1,
    explanation: 'YED = +8% ÷ −5% = −1.6; negative YED defines an inferior good whose demand rises as incomes fall.',
  },
  {
    id: 'albus-q-313',
    subtopicId: 'al-bus-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the time-series sales forecasting relationship.',
    segments: ['In time-series analysis, ', ' variation equals Actual Sales minus Trend, and projecting the smoothed trend forward into future quarters is called ', '.'],
    wordBank: ['seasonal', 'extrapolation', 'correlation', 'diversification'],
    answers: ['seasonal', 'extrapolation'],
    explanation: 'Seasonal variation = Actual − Trend; extrapolation extends the historical trend line into future periods.',
  },
  {
    id: 'albus-q-314',
    subtopicId: 'al-bus-3-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO reasons why moving-average sales forecasts may still prove inaccurate in A-Level business planning.',
    options: [
      'Extrapolation assumes past trends continue and cannot foresee sudden shocks or disruptive new rivals',
      'Changes in consumer tastes or interest rates can abruptly alter seasonal spending patterns',
      'Moving averages can only be calculated when PED equals zero',
      'Time-series data ignores all sales figures from previous years',
    ],
    correctIndices: [0, 1],
    explanation: 'Historical statistical forecasts break down whenever external PESTLE shocks or competitor launches shift underlying demand.',
  },
  {
    id: 'albus-q-315',
    subtopicId: 'al-bus-3-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'A software firm cuts its annual licence price from £200 to £180 (−10%) and annual subscriptions jump from 4,000 to 5,000 (+25%). Calculate PED and the change in total revenue.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'PED = +25% / -10% = -2.5 (price elastic). Original revenue = 4000 x 200 = 800000 GBP. New revenue = 5000 x 180 = 900000 GBP, giving a total revenue increase of +100000 GBP.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates PED = −2.5 (elastic)', numericMatch: { value: -2.5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'New revenue = £900,000', numericMatch: { value: 900000, tolerance: 100 } },
        { id: 'mp3', markDescription: 'Revenue increases by £100,000', numericMatch: { value: 100000, tolerance: 100 } },
      ],
    },
    explanation: 'Because |PED| = 2.5 > 1 (elastic), lowering price by 10% stimulates a 25% volume jump and lifts total revenue by £100,000.',
  },

  // 3.2 (5)
  {
    id: 'albus-q-321',
    subtopicId: 'al-bus-3-2',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the Product Life Cycle diagram to match each strategic feature.',
    diagram: 'product-life-cycle',
    labels: [
      { marker: 'Stage generating peak positive net cash flow with lower launch ad spend', options: ['Maturity', 'Development & Introduction'], answer: 'Maturity' },
      { marker: 'Dashed upward curve triggered by product refresh or new export markets', options: ['Extension strategy', 'Decline phase'], answer: 'Extension strategy' },
    ],
    explanation: 'Maturity yields peak cash surpluses, and well-timed extension strategies delay decline.',
  },
  {
    id: 'albus-q-322',
    subtopicId: 'al-bus-3-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each Boston Matrix quadrant to its recommended strategic action.',
    pairs: [
      { left: 'Star (High Growth, High Share)', right: 'Invest heavily to defend share as market matures' },
      { left: 'Cash Cow (Low Growth, High Share)', right: 'Harvest strong net cash surplus to fund newer products' },
      { left: 'Question Mark (High Growth, Low Share)', right: 'Selectively build market share or divest if uncompetitive' },
      { left: 'Dog (Low Growth, Low Share)', right: 'Divest or run for niche contribution with minimal capital' },
    ],
    explanation: 'A balanced Boston portfolio uses Cash Cow surpluses to turn selected Question Marks into future Stars.',
  },
  {
    id: 'albus-q-323',
    subtopicId: 'al-bus-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Extended 7 Ps for service businesses.',
    segments: ['Beyond Product, Price, Place, and Promotion, the Extended 7 Ps add People, ', ' (seamless booking and delivery systems), and Physical ', ' (tangible cues like store design and reviews).'],
    wordBank: ['Process', 'Evidence', 'Profit', 'Payback'],
    answers: ['Process', 'Evidence'],
    explanation: 'People, Process, and Physical Evidence shape customer perception for intangible services.',
  },
  {
    id: 'albus-q-324',
    subtopicId: 'al-bus-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is holding a product portfolio consisting EXCLUSIVELY of Cash Cows strategically dangerous in the long run?',
    options: [
      'Cash Cows generate negative cash flow today',
      'Low-growth markets eventually decline, leaving no future Stars or Question Marks to replace lost revenue',
      'Cash Cows always require the highest R&D investment',
      'Regulators forbid firms from owning more than two Cash Cows',
    ],
    correctIndex: 1,
    explanation: 'Cash Cows fund the present, but without Stars and Question Marks in growing markets, long-term survival is threatened.',
  },
  {
    id: 'albus-q-325',
    subtopicId: 'al-bus-3-2',
    type: 'short-answer',
    marks: 3,
    prompt: 'Explain how a balanced Boston Matrix portfolio improves corporate cash flow, and give one reason a firm might rationally keep a "Dog" product.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'In a balanced portfolio, mature Cash Cows generate strong positive cash surpluses that internally finance the heavy marketing and R&D spending needed by Question Marks and Stars without costly debt. A firm may still keep a Dog if it earns positive contribution toward fixed overheads or complements flagship products for loyal niche buyers.',
      markPoints: [
        { id: 'mp1', markDescription: 'Cash Cows generate surplus cash flow', requiredKeywordGroups: [['cash cow'], ['cash', 'surplus', 'fund']] },
        { id: 'mp2', markDescription: 'Funds heavy investment in Question Marks / Stars internally', requiredKeywordGroups: [['question mark', 'star'], ['fund', 'financ', 'invest', 'r&d', 'marketing']] },
        { id: 'mp3', markDescription: 'Keep Dog if positive contribution, niche loyalty, or complements range', requiredKeywordGroups: [['contribution', 'overhead', 'niche', 'complement', 'loyal']] },
      ],
    },
    explanation: 'Portfolio balance synchronises cash generators (Cash Cows) with cash consumers (Question Marks/Stars).',
  },

  // 3.3 (5)
  {
    id: 'albus-q-331',
    subtopicId: 'al-bus-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'An online brand spends £15,000 on search ads, gains 30,000 clicks, and converts 600 orders averaging £125 each. What is its Return on Ad Spend (ROAS)?',
    options: ['2.0×', '4.0×', '5.0×', '25.0×'],
    correctIndex: 2,
    explanation: 'Revenue = 600 × £125 = £75,000; ROAS = £75,000 ÷ £15,000 = 5.0×.',
  },
  {
    id: 'albus-q-332',
    subtopicId: 'al-bus-3-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Distinguish disintermediation from glocalisation.',
    segments: ['Selling Direct-to-Consumer by cutting out wholesalers is ', ', whereas combining a global brand with local cultural adaptations is ', '.'],
    wordBank: ['disintermediation', 'glocalisation', 'delayering', 'privatisation'],
    answers: ['disintermediation', 'glocalisation'],
    explanation: 'Disintermediation captures channel margins; glocalisation balances global brand equity with local relevance.',
  },
  {
    id: 'albus-q-333',
    subtopicId: 'al-bus-3-3',
    type: 'matching',
    marks: 3,
    prompt: 'Match each international market entry mode to its primary strategic trade-off.',
    pairs: [
      { left: 'Direct exporting', right: 'Lowest capital risk, but exposed to import tariffs and shipping costs' },
      { left: 'International franchising', right: 'Rapid capital-light rollout, but risks inconsistent local quality' },
      { left: 'Joint venture', right: 'Gains local partner expertise and access, but profits & control are shared' },
      { left: 'FDI (wholly owned subsidiary)', right: 'Maximum control and full profits, but highest capital risk' },
    ],
    explanation: 'Matching entry mode to capital availability, local regulation, and risk appetite is core A-Level global strategy.',
  },
  {
    id: 'albus-q-334',
    subtopicId: 'al-bus-3-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO genuine strategic advantages of an Omni-Channel retail model over purely physical stores.',
    options: [
      'Click-and-collect drives footfall into physical stores while offering 24/7 digital convenience',
      'Unified CRM data tracks customer behaviour across app, web, and store for targeted offers',
      'Eliminates all website hosting and warehouse fulfilment costs completely',
      'Guarantees zero product returns from online fashion shoppers',
    ],
    correctIndices: [0, 1],
    explanation: 'Omni-channel combines 24/7 digital reach, store convenience, and unified CRM insight, though IT and fulfilment costs remain significant.',
  },
  {
    id: 'albus-q-335',
    subtopicId: 'al-bus-3-3',
    type: 'short-answer',
    marks: 3,
    prompt: 'Explain one benefit and one drawback of a UK snack brand using Glocalisation rather than Pan-Global marketing when entering India.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Benefit: glocalisation adapts flavours, vegetarian ingredients, and local-language promotions to Indian cultural norms, boosting consumer acceptance and market share. Drawback: tailoring recipes, packaging, and local ad campaigns raises unit costs and sacrifices the marketing and production economies of scale of a pan-global strategy.',
      markPoints: [
        { id: 'mp1', markDescription: 'Benefit: adapts product/flavour/marketing to local culture and laws', requiredKeywordGroups: [['adapt', 'tailor', 'local'], ['culture', 'flavour', 'taste', 'law', 'vegetarian']] },
        { id: 'mp2', markDescription: 'Boosts local demand / brand acceptance / market share', requiredKeywordGroups: [['demand', 'sales', 'share', 'accept', 'appeal']] },
        { id: 'mp3', markDescription: 'Drawback: higher unit costs / loss of economies of scale vs pan-global', requiredKeywordGroups: [['cost', 'expensive', 'economies of scale'], ['higher', 'los', 'sacrific', 'reduc']] },
      ],
    },
    explanation: 'Glocalisation trades away standardisation economies to secure stronger local market fit.',
  },
];

export const ALEVEL_BUSINESS_FLASHCARDS_1_TO_3: FlashcardItem[] = [
  // 1.1 (5)
  { id: 'albus-fc-111', subtopicId: 'al-bus-1-1', front: 'Trace the Hierarchy of Objectives from top to bottom.', backBullets: ['Mission Statement → Corporate Objectives (SMART) → Departmental/Functional Objectives → Individual targets (MBO).'], hint: 'M-C-D-I!' },
  { id: 'albus-fc-112', subtopicId: 'al-bus-1-1', front: 'Contrast profit maximisation with profit satisficing.', backBullets: ['Maximisation: pushing for the highest possible financial return.', 'Satisficing: earning enough profit to keep shareholders content while pursuing wider aims (growth, CSR, welfare).'] },
  { id: 'albus-fc-113', subtopicId: 'al-bus-1-1', front: "List the 4 layers of Carroll's CSR Pyramid from base to peak.", backBullets: ['1. Economic (be profitable) → 2. Legal (obey laws) → 3. Ethical (act morally beyond law) → 4. Philanthropic (charitable giving).'] },
  { id: 'albus-fc-114', subtopicId: 'al-bus-1-1', front: "What are the 4 quadrants of Mendelow's Stakeholder Matrix?", backBullets: ['High Power/High Interest: Manage Closely; High Power/Low Interest: Keep Satisfied.', 'Low Power/High Interest: Keep Informed; Low Power/Low Interest: Minimal Effort.'] },
  { id: 'albus-fc-115', subtopicId: 'al-bus-1-1', front: 'What is Elkington’s Triple Bottom Line and why use a Social Audit?', backBullets: ['Measures Profit (economic), People (social), and Planet (environmental).', 'Social audits independently verify CSR metrics to counter greenwashing claims.'] },

  // 1.2 (5)
  { id: 'albus-fc-121', subtopicId: 'al-bus-1-2', front: 'Explain the Divorce of Ownership and Control (Principal-Agent Problem).', backBullets: ['In Plcs, shareholders own the firm while salaried directors run daily operations.', 'Directors may chase prestige or short-term bonuses unless constrained by NEDs, AGMs, and incentive alignment.'] },
  { id: 'albus-fc-122', subtopicId: 'al-bus-1-2', front: 'State the Market Capitalisation formula.', backBullets: ['Market Capitalisation = Current Share Price × Total Number of Issued Shares.', 'Reflects stock-market valuation of a Plc’s total equity.'], hint: 'Price × Pieces!' },
  { id: 'albus-fc-123', subtopicId: 'al-bus-1-2', front: 'Weigh one pro and one con of Privatisation.', backBullets: ['Pro: profit motive sharpens efficiency, cuts state subsidies, and raises Treasury cash.', 'Con: natural monopolies may raise prices or cut unprofitable rural public services.'] },
  { id: 'albus-fc-124', subtopicId: 'al-bus-1-2', front: 'Define Synergy and explain why M&A deals often fail to achieve it.', backBullets: ['Synergy ("2+2=5"): combined revenue/cost gains exceed two firms operating apart.', 'Often fails due to cultural clashes, IT integration delays, and diseconomies of scale.'] },
  { id: 'albus-fc-125', subtopicId: 'al-bus-1-2', front: "Summarise Greiner's Model of Organisational Growth.", backBullets: ['Firms grow through alternating evolution phases and crises (Leadership → Autonomy → Control → Red Tape).', 'Each crisis forces structural reform before the next expansion phase.'] },

  // 1.3 (5)
  { id: 'albus-fc-131', subtopicId: 'al-bus-1-3', front: 'How do internal SWOT factors differ from external PESTLE forces?', backBullets: ['SWOT Strengths/Weaknesses are internal capabilities the board controls.', 'Opportunities/Threats stem from external Political, Economic, Social, Tech, Legal, and Environmental forces.'] },
  { id: 'albus-fc-132', subtopicId: 'al-bus-1-3', front: "Name all 5 forces in Porter's Five Forces model.", backBullets: ['1. Competitive Rivalry, 2. Threat of New Entrants, 3. Bargaining Power of Buyers, 4. Bargaining Power of Suppliers, 5. Threat of Substitutes.'] },
  { id: 'albus-fc-133', subtopicId: 'al-bus-1-3', front: "List Porter's Generic Strategies and what 'stuck in the middle' means.", backBullets: ['Cost Leadership, Differentiation, and Focus (Cost Focus / Differentiation Focus).', 'Stuck in the middle: neither lowest cost nor clearly differentiated → weak profit margins.'] },
  { id: 'albus-fc-134', subtopicId: 'al-bus-1-3', front: "List all 4 quadrants of Ansoff's Matrix in ascending order of risk.", backBullets: ['Market Penetration (lowest) → Product Development & Market Development (medium) → Diversification (highest).'] },
  { id: 'albus-fc-135', subtopicId: 'al-bus-1-3', front: 'What is a Core Competence (Prahalad & Hamel)?', backBullets: ['A unique, hard-to-imitate internal capability (e.g. battery tech or logistics) delivering competitive advantage across multiple markets.'] },

  // 2.1 (5)
  { id: 'albus-fc-211', subtopicId: 'al-bus-2-1', front: 'Give one advantage and one risk of a Matrix organisational structure.', backBullets: ['Advantage: unites cross-functional specialists for rapid innovation and client focus.', 'Risk: dual reporting lines cause priority clashes, stress, and extra coordination cost.'] },
  { id: 'albus-fc-212', subtopicId: 'al-bus-2-1', front: 'Distinguish Delegation from Empowerment and state who keeps accountability.', backBullets: ['Delegation passes task authority down; empowerment grants autonomy over methods too.', 'Ultimate accountability ALWAYS remains with the delegating manager.'] },
  { id: 'albus-fc-213', subtopicId: 'al-bus-2-1', front: 'Evaluate Delayering on costs, communication, and span of control.', backBullets: ['Cuts middle-management salaries and shortens the chain of command for faster communication.', 'Widens remaining managers’ spans of control, risking stress and weaker oversight.'] },
  { id: 'albus-fc-214', subtopicId: 'al-bus-2-1', front: 'Contrast Centralisation with Decentralisation.', backBullets: ['Centralisation: consistent brand standards & bulk-buying scale from HQ.', 'Decentralisation: faster local adaptation and higher branch-manager motivation.'] },
  { id: 'albus-fc-215', subtopicId: 'al-bus-2-1', front: "List Charles Handy's 4 Organisational Cultures.", backBullets: ['Power (Web — central founder), Role (Temple — formal silos), Task (Net — project teams), Person (Cluster — autonomous stars).'], hint: 'P-R-T-P!' },

  // 2.2 (5)
  { id: 'albus-fc-221', subtopicId: 'al-bus-2-2', front: 'Identify the 5 positions on the Blake Mouton Managerial Grid.', backBullets: ['(1,1) Impoverished, (1,9) Country Club, (9,1) Produce-or-Perish, (5,5) Middle-of-the-Road, (9,9) Team Management.'] },
  { id: 'albus-fc-222', subtopicId: 'al-bus-2-2', front: 'Trace the Tannenbaum-Schmidt Leadership Continuum.', backBullets: ['Boss-centred → Subordinate-centred: Tells → Sells → Suggests → Consults → Joins → Delegates → Abdicates.'] },
  { id: 'albus-fc-223', subtopicId: 'al-bus-2-2', front: 'What did Elton Mayo’s Hawthorne Studies prove about motivation?', backBullets: ['Output rose due to social belonging, supportive team groups, and management attention — disproving Taylor’s money-only view.'] },
  { id: 'albus-fc-224', subtopicId: 'al-bus-2-2', front: "State Vroom's Expectancy Theory equation and its key diagnostic rule.", backBullets: ['Force = Expectancy (effort→target) × Instrumentality (target→reward) × Valence (value of reward).', 'If ANY single factor equals 0, total motivational force collapses to 0.'] },
  { id: 'albus-fc-225', subtopicId: 'al-bus-2-2', front: "Contrast Herzberg's Hygiene factors with Motivators.", backBullets: ['Hygiene (base pay, policy, conditions): prevent dissatisfaction only.', 'Motivators (achievement, recognition, job enrichment): create active motivation.'] },

  // 2.3 (5)
  { id: 'albus-fc-231', subtopicId: 'al-bus-2-3', front: 'State the Labour Turnover and Absenteeism Rate formulas.', backBullets: ['Labour Turnover (%) = (Staff Leaving ÷ Average Staff Employed) × 100.', 'Absenteeism (%) = (Total Days Absent ÷ Total Possible Working Days) × 100.'] },
  { id: 'albus-fc-232', subtopicId: 'al-bus-2-3', front: 'State the Labour Productivity and Unit Labour Cost formulas.', backBullets: ['Labour Productivity = Total Output ÷ Number of Employees.', 'Unit Labour Cost = Total Labour Cost ÷ Total Output.'] },
  { id: 'albus-fc-233', subtopicId: 'al-bus-2-3', front: 'Contrast Hard HRM with Soft HRM.', backBullets: ['Hard HRM: treats labour as a controllable cost (flexible contracts, outsourcing, downsizing).', 'Soft HRM: treats staff as strategic assets (training, empowerment, long-term retention).'] },
  { id: 'albus-fc-234', subtopicId: 'al-bus-2-3', front: 'Distinguish Conciliation from Arbitration in industrial disputes.', backBullets: ['Conciliation (e.g. ACAS): facilitates voluntary compromise between union and employer.', 'Arbitration: impartial third party imposes a binding settlement on both sides.'] },
  { id: 'albus-fc-235', subtopicId: 'al-bus-2-3', front: 'List 3 forms of industrial action short of a full strike.', backBullets: ['Overtime bans, work-to-rule (strictly following minimum contract rules), and go-slows.'] },

  // 3.1 (5)
  { id: 'albus-fc-311', subtopicId: 'al-bus-3-1', front: 'State the Market Share and Market Growth formulas.', backBullets: ['Market Share (%) = (Firm Sales ÷ Total Market Sales) × 100.', 'Market Growth (%) = (Change in Market Size ÷ Original Market Size) × 100.'] },
  { id: 'albus-fc-312', subtopicId: 'al-bus-3-1', front: 'Explain the PED Revenue Test for Elastic vs Inelastic demand.', backBullets: ['Elastic (|PED| > 1): raising price causes Total Revenue to FALL; cutting price boosts revenue.', 'Inelastic (|PED| < 1): raising price causes Total Revenue to RISE.'], diagram: 'elasticity-curves' },
  { id: 'albus-fc-313', subtopicId: 'al-bus-3-1', front: 'Classify YED values for Luxury, Normal Necessity, and Inferior goods.', backBullets: ['Luxury: YED > +1; Normal Necessity: 0 < YED ≤ +1; Inferior good: YED < 0 (sales rise in recessions).'] },
  { id: 'albus-fc-314', subtopicId: 'al-bus-3-1', front: 'How is a Time-Series Sales Forecast constructed using moving averages?', backBullets: ['Smooth past sales into a Moving Average Trend → extrapolate the trend → add Average Seasonal Variation (Actual − Trend).'] },
  { id: 'albus-fc-315', subtopicId: 'al-bus-3-1', front: 'Give 2 limitations of extrapolating moving-average forecasts.', backBullets: ['Assumes historical trends persist into the future.', 'Cannot anticipate sudden shocks, competitor launches, or sharp macroeconomic shifts.'] },

  // 3.2 (5)
  { id: 'albus-fc-321', subtopicId: 'al-bus-3-2', front: 'Describe cash flow across the Product Life Cycle stages.', backBullets: ['R&D / Introduction: heavily negative cash flow (development & launch promotion).', 'Growth: turns positive; Maturity: peak cash surplus; Decline: shrinking inflows.'], diagram: 'product-life-cycle' },
  { id: 'albus-fc-322', subtopicId: 'al-bus-3-2', front: 'Define the 4 quadrants of the Boston Matrix (BCG).', backBullets: ['Stars (High Growth/High Share), Cash Cows (Low Growth/High Share), Question Marks (High Growth/Low Share), Dogs (Low Growth/Low Share).'] },
  { id: 'albus-fc-323', subtopicId: 'al-bus-3-2', front: 'Why should a firm avoid divesting every "Dog" immediately?', backBullets: ['A Dog may still earn positive contribution covering fixed overheads, satisfy loyal niche buyers, or complement flagship Cash Cows.'] },
  { id: 'albus-fc-324', subtopicId: 'al-bus-3-2', front: 'What are the 3 additional Ps in the Extended 7 Ps?', backBullets: ['People (staff quality/training), Process (delivery/booking speed), and Physical Evidence (tangible premises, UI, reviews).'] },
  { id: 'albus-fc-325', subtopicId: 'al-bus-3-2', front: 'What makes a marketing mix "integrated"?', backBullets: ['All 7 Ps reinforce the same target positioning — e.g. premium price matched by high product quality, exclusive outlets, and trained staff.'] },

  // 3.3 (5)
  { id: 'albus-fc-331', subtopicId: 'al-bus-3-3', front: 'State the Conversion Rate, CAC, and ROAS formulas.', backBullets: ['Conversion Rate = (Orders ÷ Visits) × 100; CAC = Ad Spend ÷ New Customers.', 'ROAS = Campaign Revenue ÷ Ad Spend.'] },
  { id: 'albus-fc-332', subtopicId: 'al-bus-3-3', front: 'Distinguish Omni-Channel from Multi-Channel retailing.', backBullets: ['Multi-channel sells via separate store/web silos.', 'Omni-channel unifies stock, CRM data, click-and-collect, and returns seamlessly across every touchpoint.'] },
  { id: 'albus-fc-333', subtopicId: 'al-bus-3-3', front: 'Evaluate Direct-to-Consumer (D2C) disintermediation.', backBullets: ['Captures wholesaler/retailer margins and owns customer CRM data.', 'Offsets margin gains with parcel fulfilment, courier fees, returns, and digital CAC.'] },
  { id: 'albus-fc-334', subtopicId: 'al-bus-3-3', front: 'Rank 4 international market entry modes by capital commitment and control.', backBullets: ['1. Direct Exporting (lowest) → 2. Licensing/Franchising → 3. Joint Venture → 4. FDI Wholly Owned Subsidiary (highest).'] },
  { id: 'albus-fc-335', subtopicId: 'al-bus-3-3', front: 'Contrast Pan-Global marketing with Glocalisation.', backBullets: ['Pan-Global: uniform product/brand worldwide (maximum economies of scale).', 'Glocalisation: global brand adapted to local tastes, language, and laws (stronger local fit, higher unit cost).'] },
];

export const ALEVEL_BUSINESS_EXAM_PRACTICE_1_TO_3: ExamQuestionItem[] = [
  {
    id: 'albus-exam-1',
    subtopicId: 'al-bus-1-1',
    number: 1,
    stimulus: 'VerdeBrew Plc operates 180 UK coffee shops earning £6.0m operating profit on £40m revenue. A pressure group has exposed non-living wages at two overseas bean suppliers. Switching entirely to Fairtrade beans raises annual variable costs by £1.2m, while major pension-fund shareholders demand maintaining an operating profit margin of at least 15%.',
    parts: [
      {
        id: 'albus-exam-1a',
        label: 'a)',
        prompt: 'Calculate VerdeBrew’s current operating profit margin and its new operating profit margin if it switches to Fairtrade beans without changing revenue.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Current operating profit margin = (6 / 40) x 100 = 15%. After adding 1.2m GBP Fairtrade costs, profit falls to 4.8m GBP, so new operating profit margin = (4.8 / 40) x 100 = 12%.',
          markPoints: [
            { id: 'mp1', markDescription: 'Current operating profit margin = 15%', numericMatch: { value: 15, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'New operating profit margin = 12%', numericMatch: { value: 12, tolerance: 0.1 } },
          ],
        },
      },
      {
        id: 'albus-exam-1b',
        label: 'b)',
        prompt: "Using Mendelow's Matrix and the Triple Bottom Line, evaluate whether VerdeBrew should switch to Fairtrade beans immediately.",
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Pension-fund shareholders have High Power and High Interest (Manage Closely) and may sell shares if margins drop from 15% to 12%. However, ethical customers and the pressure group can organise boycotts damaging long-term Profit as well as People and Planet under the Triple Bottom Line. Switching to Fairtrade backed by a social audit and a modest 3% price rise on inelastic coffee lets VerdeBrew protect both brand equity and long-term shareholder value.',
          markPoints: [
            { id: 'mp1', markDescription: 'Maps institutional shareholders as High Power / High Interest (Manage Closely)', requiredKeywordGroups: [['shareholder', 'pension'], ['high power', 'manage closely', 'margin']] },
            { id: 'mp2', markDescription: 'Applies Triple Bottom Line (People, Planet, Profit) / boycott risk', requiredKeywordGroups: [['triple bottom line', 'people', 'planet', 'boycott']] },
            { id: 'mp3', markDescription: 'Evaluates short-term margin fall vs long-term brand equity / pricing power', requiredKeywordGroups: [['short-term', 'long-term', 'brand', 'reputation', 'price']] },
            { id: 'mp4', markDescription: 'Justified strategic recommendation (e.g. switch + social audit / phased price pass-through)', requiredKeywordGroups: [['recommend', 'switch', 'social audit', 'protect', 'overall']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-2',
    subtopicId: 'al-bus-1-2',
    number: 2,
    stimulus: 'SolarGrid Ltd is a fast-growing clean-energy firm founded by two engineers holding 100% of its 2,000,000 shares. To fund a £15m battery plant, the directors are choosing between an IPO converting into a Plc (issuing 1,000,000 new shares at £15 each) or forming a 50:50 joint venture with a German engineering Plc.',
    parts: [
      {
        id: 'albus-exam-2a',
        label: 'a)',
        prompt: 'Calculate SolarGrid’s post-IPO market capitalisation at £15/share and the founders’ diluted percentage ownership.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Total shares after IPO = 3000000, so market capitalisation = 3000000 x 15 = 45000000 GBP (45m GBP). Founders’ ownership falls to (2000000 / 3000000) x 100 = 66.7%.',
          markPoints: [
            { id: 'mp1', markDescription: 'Post-IPO market capitalisation = £45,000,000 (or 45m)', numericMatch: { value: 45, tolerance: 0.2 } },
            { id: 'mp2', markDescription: 'Founders’ diluted stake = 66.7%', numericMatch: { value: 66.7, tolerance: 0.2 } },
          ],
        },
      },
      {
        id: 'albus-exam-2b',
        label: 'b)',
        prompt: 'Evaluate whether SolarGrid should float as a Plc or pursue the joint venture to fund the battery plant.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Floating as a Plc raises the full £15m permanent interest-free equity while founders retain 66.7% voting control, though it creates IPO fees, public financial disclosure, and future divorce of ownership and control pressures. A joint venture avoids stock-market scrutiny and brings German engineering expertise and synergy, but forces sharing 50% of battery profits and risks cultural conflict. Overall, floating as a Plc is stronger if founders want long-term capital access and retain 66.7% majority control.',
          markPoints: [
            { id: 'mp1', markDescription: 'Plc benefit: permanent interest-free £15m equity while retaining 66.7% majority', requiredKeywordGroups: [['plc', 'ipo', 'equity'], ['interest-free', 'permanent', '66.7', 'control']] },
            { id: 'mp2', markDescription: 'Plc drawback: divorce of ownership/control, public accounts, or takeover/short-termist pressure', requiredKeywordGroups: [['divorce', 'disclosure', 'short-term', 'takeover', 'governance', 'fee']] },
            { id: 'mp3', markDescription: 'Joint venture trade-off: shared expertise/synergy vs shared profits and partner conflict', requiredKeywordGroups: [['joint venture'], ['expertise', 'synergy', 'conflict', 'profit', '50%']] },
            { id: 'mp4', markDescription: 'Supported evaluative judgement weighing control and long-term growth', requiredKeywordGroups: [['overall', 'recommend', 'however', 'depend', 'stronger']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-3',
    subtopicId: 'al-bus-1-3',
    number: 3,
    stimulus: 'AeroLite Plc manufactures mid-priced commuter bicycles in a UK market growing at only 1% per year, with six aggressive Asian importers cutting prices by 20%. AeroLite’s CEO proposes spending £6m of its £7m cash reserves to diversify into launching luxury marine jet-skis in North America.',
    parts: [
      {
        id: 'albus-exam-3a',
        label: 'a)',
        prompt: "Identify the Ansoff's Matrix strategy proposed by the CEO and state two Porter's Five Forces currently squeezing AeroLite's bicycle margins.",
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Launching jet-skis in North America is Diversification (new product in a new market). In bicycles, intense competitive rivalry from six Asian importers and high bargaining power of buyers (price-sensitive commuters with many alternatives) are squeezing margins.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies Diversification (new product, new market)', requiredKeywordGroups: [['diversification']] },
            { id: 'mp2', markDescription: 'Porter force 1: intense competitive rivalry / threat of new entrants', requiredKeywordGroups: [['rivalry', 'competit', 'entrant']] },
            { id: 'mp3', markDescription: 'Porter force 2: high buyer bargaining power or threat of substitutes', requiredKeywordGroups: [['buyer', 'substitute', 'price']] },
          ],
        },
      },
      {
        id: 'albus-exam-3b',
        label: 'b)',
        prompt: "Evaluate whether AeroLite should diversify into marine jet-skis or pursue Product Development (e.g. differentiated UK e-bikes) using Porter's Generic Strategies and Core Competencies.",
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Diversifying into marine jet-skis commits 86% of cash reserves (£6m of £7m) into a market where AeroLite has zero brand recognition or marine core competencies, creating extreme failure risk. Product development into differentiated UK electric commuter bikes leverages existing cycle engineering and retail networks while escaping the "stuck in the middle" mid-price trap via Porter’s Differentiation strategy. Overall, Product Development is far lower risk and preserves liquidity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Critiques diversification: lacks marine core competencies / commits £6m of £7m cash', requiredKeywordGroups: [['core competenc', 'risk', 'cash', '6m'], ['jet-ski', 'marine', 'diversif']] },
            { id: 'mp2', markDescription: 'Product Development leverages existing cycling capabilities/brand', requiredKeywordGroups: [['product development', 'e-bike', 'electric'], ['existing', 'brand', 'competenc', 'network']] },
            { id: 'mp3', markDescription: 'Applies Porter Differentiation to escape stuck-in-the-middle price squeeze', requiredKeywordGroups: [['differentiation', 'stuck in the middle', 'porter']] },
            { id: 'mp4', markDescription: 'Clear evaluative judgement favouring Product Development', requiredKeywordGroups: [['overall', 'lower risk', 'recommend', 'prefer', 'liquidity']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-4',
    subtopicId: 'al-bus-2-1',
    number: 4,
    stimulus: 'NordicHome Plc runs 90 European furniture stores under a highly centralised Role Culture with 8 management layers. Store managers must wait 14 days for head-office approval to match local rival discounts, causing regional sales to fall 12%. The board is considering delayering 2 tiers (removing 20 managers on £50,000 each; redundancy cost £250,000) and decentralising local pricing.',
    parts: [
      {
        id: 'albus-exam-4a',
        label: 'a)',
        prompt: 'Calculate the Year 1 net financial saving from delayering the 20 management posts.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Annual salary saving = 20 x 50000 = 1000000 GBP. Subtracting 250000 GBP one-off redundancy cost yields a Year 1 net saving of 750000 GBP.',
          markPoints: [
            { id: 'mp1', markDescription: 'Annual salary saving = £1,000,000', numericMatch: { value: 1000000, tolerance: 100 } },
            { id: 'mp2', markDescription: 'Year 1 net saving = £750,000', numericMatch: { value: 750000, tolerance: 100 } },
          ],
        },
      },
      {
        id: 'albus-exam-4b',
        label: 'b)',
        prompt: "Evaluate whether NordicHome should delayer and decentralise local pricing across its 90 stores.",
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Delayering saves £750k in Year 1 and £1m annually while shortening the 8-layer chain of command, and decentralisation lets store managers respond immediately to local rival discounts rather than waiting 14 days, boosting motivation and sales. However, widening spans of control may overload remaining directors and decentralised discounting risks inconsistent brand image and eroded margins. NordicHome should decentralise within clear HQ margin boundaries (e.g. max 10% local discount authority) while retraining remaining leaders.',
          markPoints: [
            { id: 'mp1', markDescription: 'Delayering cuts £1m/year overhead and speeds communication', requiredKeywordGroups: [['delayer', 'saving', 'cost'], ['chain of command', 'faster', 'communication', '750']] },
            { id: 'mp2', markDescription: 'Decentralisation enables rapid local price response and boosts store-manager motivation', requiredKeywordGroups: [['decentralis', 'local'], ['fast', 'respond', 'motivat', '14 day']] },
            { id: 'mp3', markDescription: 'Risks: wider span of control, stress, or inconsistent brand pricing/lower margins', requiredKeywordGroups: [['span of control', 'inconsistent', 'margin', 'brand', 'overload']] },
            { id: 'mp4', markDescription: 'Balanced conditional recommendation (e.g. bounded local pricing limits)', requiredKeywordGroups: [['however', 'boundar', 'limit', 'retrain', 'recommend', 'should']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-5',
    subtopicId: 'al-bus-2-2',
    number: 5,
    stimulus: 'PrecisionMed Ltd manufactures surgical sensors using 60 skilled technicians paid £35,000/year (output: 120,000 sensors/year). Its operations director uses an autocratic (9,1) Produce-or-Perish style and pays zero bonuses; annual turnover has jumped to 32% and defect rates doubled. HR proposes transitioning to Team Management (9,9), Herzberg job enrichment, and a £120,000 team quality-bonus scheme forecast to raise output by 15%.',
    parts: [
      {
        id: 'albus-exam-5a',
        label: 'a)',
        prompt: 'Calculate PrecisionMed’s current unit labour cost and its projected unit labour cost if HR’s proposal raises total labour cost by £120,000 and output by 15%.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Current total labour cost = 60 x 35000 = 2100000 GBP; current unit labour cost = 2100000 / 120000 = 17.50 GBP. Projected labour cost = 2220000 GBP and projected output = 120000 x 1.15 = 138000 units, giving projected unit labour cost = 2220000 / 138000 = 16.09 GBP.',
          markPoints: [
            { id: 'mp1', markDescription: 'Current unit labour cost = £17.50', numericMatch: { value: 17.5, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'Projected unit labour cost = £16.09', numericMatch: { value: 16.09, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'albus-exam-5b',
        label: 'b)',
        prompt: "Using Blake Mouton, Herzberg, and Vroom's Expectancy Theory, evaluate HR's proposal to overhaul leadership and rewards.",
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Skilled medical technicians are alienated by a (9,1) autocratic style; moving to Blake Mouton (9,9) Team Management and Herzberg motivators like job enrichment addresses esteem and responsibility needs, cutting 32% turnover and lowering unit labour cost from £17.50 to £16.09. Under Vroom’s Expectancy Theory, the £120,000 bonus will motivate only if quality targets are achievable (Expectancy), transparently paid (Instrumentality), and valued (Valence). Success depends on retraining or replacing the entrenched autocratic director so cultural change is credible.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies Blake Mouton (9,1) → (9,9) Team Management for skilled technicians', requiredKeywordGroups: [['9,9', 'team management', 'blake mouton'], ['9,1', 'autocratic', 'skilled']] },
            { id: 'mp2', markDescription: 'Applies Herzberg job enrichment / motivators to cut turnover and defects', requiredKeywordGroups: [['herzberg', 'motivator', 'enrichment'], ['turnover', 'defect', '16.09']] },
            { id: 'mp3', markDescription: 'Applies Vroom Expectancy, Instrumentality, and Valence conditions to the bonus', requiredKeywordGroups: [['vroom', 'expectancy'], ['instrumentality', 'valence']] },
            { id: 'mp4', markDescription: 'Evaluative condition: depends on director buy-in / leadership retraining', requiredKeywordGroups: [['depend', 'director', 'retrain', 'credible', 'culture']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-6',
    subtopicId: 'al-bus-2-3',
    number: 6,
    stimulus: 'RapidDrop Couriers uses Hard HRM with zero-hours contracts for 400 delivery drivers. Over the past 12 months, 180 drivers resigned (replacement cost £1,500 per driver) and drivers voted to join a national transport trade union threatening a 4-day pre-Christmas strike. Management is debating shifting 250 core drivers onto salaried Soft HRM contracts costing £400,000 extra per year.',
    parts: [
      {
        id: 'albus-exam-6a',
        label: 'a)',
        prompt: 'Calculate RapidDrop’s annual labour turnover rate and its total annual staff replacement cost.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Labour turnover = (180 / 400) x 100 = 45%. Annual replacement cost = 180 x 1500 = 270000 GBP.',
          markPoints: [
            { id: 'mp1', markDescription: 'Labour turnover = 45%', numericMatch: { value: 45, tolerance: 0.2 } },
            { id: 'mp2', markDescription: 'Annual replacement cost = £270,000', numericMatch: { value: 270000, tolerance: 50 } },
          ],
        },
      },
      {
        id: 'albus-exam-6b',
        label: 'b)',
        prompt: 'Evaluate whether RapidDrop should move core drivers onto Soft HRM salaried contracts and engage in collective bargaining.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Although Soft HRM salaried contracts add £400,000 in fixed wage costs, halving the 45% turnover immediately saves £135,000 in recruitment costs while preventing a catastrophic pre-Christmas union strike and improving delivery reliability. Keeping 150 flexible drivers alongside 250 core salaried staff (a Shamrock core-periphery blend) preserves seasonal flexibility. Engaging early in ACAS conciliation and a single-union collective agreement is strategically wiser than maintaining pure Hard HRM.',
          markPoints: [
            { id: 'mp1', markDescription: 'Weighs £400k higher fixed wage cost against £270k turnover cost savings', requiredKeywordGroups: [['400', 'fixed'], ['turnover', '270', 'recruit', 'saving']] },
            { id: 'mp2', markDescription: 'Prevents pre-Christmas strike disruption and protects customer reputation', requiredKeywordGroups: [['strike', 'christmas', 'reputation', 'reliab']] },
            { id: 'mp3', markDescription: 'Considers hybrid core-periphery / flexible staffing for seasonal peaks', requiredKeywordGroups: [['flexible', 'seasonal', 'core', 'peripher', 'shamrock', '150']] },
            { id: 'mp4', markDescription: 'Recommends constructive union engagement / ACAS conciliation', requiredKeywordGroups: [['union', 'collective', 'acas', 'conciliation', 'recommend']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-7',
    subtopicId: 'al-bus-3-1',
    number: 7,
    stimulus: 'AlpineRoast sells premium single-origin coffee pods in a UK market that grew from £400m to £480m this year. AlpineRoast’s revenue rose from £40m to £44m. Market research estimates PED = −0.6 and YED = +1.8 for its flagship pods. Its extrapolated Q4 sales trend is £12.0m with an average Q4 seasonal variation of +£2.4m.',
    diagram: 'elasticity-curves',
    parts: [
      {
        id: 'albus-exam-7a',
        label: 'a)',
        prompt: 'Calculate the UK market growth rate, AlpineRoast’s new market share, and its Q4 sales forecast.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Market growth = (80 / 400) x 100 = 20%. New market share = (44 / 480) x 100 = 9.17%. Q4 sales forecast = 12.0 + 2.4 = 14.4m GBP.',
          markPoints: [
            { id: 'mp1', markDescription: 'Market growth = 20%', numericMatch: { value: 20, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'New market share = 9.17% (accept 9.1–9.2%)', numericMatch: { value: 9.17, tolerance: 0.1 } },
            { id: 'mp3', markDescription: 'Q4 sales forecast = £14.4m', numericMatch: { value: 14.4, tolerance: 0.1 } },
          ],
        },
      },
      {
        id: 'albus-exam-7b',
        label: 'b)',
        prompt: 'Using PED (−0.6), YED (+1.8), and forecasting limitations, evaluate whether AlpineRoast should raise pod prices by 8% ahead of an expected UK economic slowdown.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Because PED is −0.6 (price inelastic), an 8% price hike should raise total revenue in normal conditions as loyal buyers absorb the increase. However, YED of +1.8 reveals that premium pods are highly income-elastic luxury items, so a recession will trigger a sharp drop in demand and invalidate the historical £14.4m moving-average forecast. Rather than raising flagship prices across the board, AlpineRoast should hold prices steady or introduce a lower-priced value pod tier to defend its falling market share (down from 10% to 9.17%).',
          markPoints: [
            { id: 'mp1', markDescription: 'PED = −0.6 is inelastic so an 8% price hike normally raises total revenue', requiredKeywordGroups: [['inelastic', '-0.6', '0.6'], ['revenue', 'rise', 'increas']] },
            { id: 'mp2', markDescription: 'YED = +1.8 means luxury/income-elastic demand vulnerable in a slowdown', requiredKeywordGroups: [['1.8', 'luxury', 'income-elastic'], ['recession', 'slowdown', 'fall', 'drop']] },
            { id: 'mp3', markDescription: 'Critiques £14.4m time-series forecast as historical extrapolation', requiredKeywordGroups: [['forecast', 'extrapolat', '14.4'], ['invalid', 'historic', 'shock', 'inaccurat']] },
            { id: 'mp4', markDescription: 'Contextual judgement defending falling market share (10% → 9.17%)', requiredKeywordGroups: [['market share', 'recommend', 'hold', 'value', 'however']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-8',
    subtopicId: 'al-bus-3-2',
    number: 8,
    stimulus: 'OmniPlay Plc sells three entertainment lines: Console Classic (Low Market Growth 2%, Relative Market Share 2.1×, +£18m net cash/yr), CloudStream Subscription (High Market Growth 28%, Relative Share 0.4×, −£9m net cash/yr), and DVD Rentals (Market Growth −15%, Relative Share 0.2×, +£1.5m net cash/yr).',
    diagram: 'product-life-cycle',
    parts: [
      {
        id: 'albus-exam-8a',
        label: 'a)',
        prompt: 'Classify each of OmniPlay’s three lines on the Boston Matrix and calculate total net portfolio cash flow.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Console Classic is a Cash Cow, CloudStream is a Question Mark (Problem Child), and DVD Rentals is a Dog. Total net portfolio cash flow = +18 - 9 + 1.5 = +10.5m GBP per year.',
          markPoints: [
            { id: 'mp1', markDescription: 'Console Classic = Cash Cow', requiredKeywordGroups: [['console'], ['cash cow']] },
            { id: 'mp2', markDescription: 'CloudStream = Question Mark / Problem Child', requiredKeywordGroups: [['cloudstream'], ['question mark', 'problem child']] },
            { id: 'mp3', markDescription: 'DVD Rentals = Dog', requiredKeywordGroups: [['dvd'], ['dog']] },
            { id: 'mp4', markDescription: 'Total net cash flow = +£10.5m', numericMatch: { value: 10.5, tolerance: 0.1 } },
          ],
        },
      },
      {
        id: 'albus-exam-8b',
        label: 'b)',
        prompt: 'Evaluate how OmniPlay should manage its portfolio and use the Extended 7 Ps to turn CloudStream into a Star.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'OmniPlay should use Console Classic’s £18m Cash Cow surplus to invest aggressively in CloudStream (Build strategy) while harvesting DVD Rentals rather than divesting immediately because it still contributes +£1.5m positive cash flow. To lift CloudStream’s 0.4× share in a 28% growth market, OmniPlay must optimise the Extended 7 Ps — seamless low-latency streaming Process, responsive 24/7 support People, and sleek app UI Physical Evidence. However, if CloudStream fails to gain share against giant rivals, the board must set a clear investment cap to avoid draining Cash Cow reserves.',
          markPoints: [
            { id: 'mp1', markDescription: 'Use Cash Cow £18m surplus to Build CloudStream into a Star', requiredKeywordGroups: [['cash cow', '18m'], ['cloudstream', 'star', 'build', 'invest']] },
            { id: 'mp2', markDescription: 'Nuanced decision on Dog (Harvest +£1.5m cash rather than instant divestment)', requiredKeywordGroups: [['dvd', 'dog'], ['harvest', '1.5', 'positive', 'cash', 'keep']] },
            { id: 'mp3', markDescription: 'Applies Extended 7 Ps (People, Process, Physical Evidence) to CloudStream', requiredKeywordGroups: [['process', 'people', 'physical evidence']] },
            { id: 'mp4', markDescription: 'Evaluative risk caveat (competitive rivalry / investment cap)', requiredKeywordGroups: [['however', 'rival', 'cap', 'risk', 'depend']] },
          ],
        },
      },
    ],
  },
  {
    id: 'albus-exam-9',
    subtopicId: 'al-bus-3-3',
    number: 9,
    stimulus: 'Lumina Skincare currently sells face serums exclusively through UK pharmacies at a £14 wholesale price (manufacturing cost £6/unit). It plans to launch a D2C omni-channel website selling at £32 retail (packaging & courier £5/unit; forecast digital CAC £9/unit) and expand into South Korea via either a local Joint Venture or a wholly owned FDI subsidiary.',
    parts: [
      {
        id: 'albus-exam-9a',
        label: 'a)',
        prompt: 'Calculate Lumina’s unit contribution via UK pharmacies versus its projected unit contribution via D2C online sales.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Pharmacy wholesale unit contribution = 14 - 6 = 8 GBP. D2C online unit contribution = 32 - 6 - 5 - 9 = 12 GBP (an extra 4 GBP contribution per unit).',
          markPoints: [
            { id: 'mp1', markDescription: 'Pharmacy unit contribution = £8', numericMatch: { value: 8, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'D2C online unit contribution = £12', numericMatch: { value: 12, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'albus-exam-9b',
        label: 'b)',
        prompt: 'Evaluate whether Lumina should enter South Korea using a Joint Venture with glocalisation rather than a wholly owned pan-global FDI subsidiary.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'A Joint Venture with a Korean beauty distributor slashes upfront capital risk, accelerates cosmetic regulatory approval, and supplies deep local cultural insight for glocalised packaging and influencer campaigns in a fiercely competitive K-beauty market. Conversely, a wholly owned pan-global subsidiary retains 100% of profits and economies of scale, yet risks costly cultural missteps and high fixed FDI outlays. Overall, a Joint Venture with targeted glocalisation is far lower risk, backed by Lumina’s higher £12 D2C UK margins funding international marketing.',
          markPoints: [
            { id: 'mp1', markDescription: 'Joint venture gains local partner regulatory/distribution insight and cuts capital risk', requiredKeywordGroups: [['joint venture'], ['local', 'risk', 'regulat', 'distribut', 'capital']] },
            { id: 'mp2', markDescription: 'Glocalisation adapts skincare/marketing to demanding Korean consumer norms', requiredKeywordGroups: [['glocalis', 'adapt'], ['korea', 'cultur', 'local', 'packag', 'influencer']] },
            { id: 'mp3', markDescription: 'Trade-off: JV shares profits/control vs FDI retaining 100% profits and pan-global scale', requiredKeywordGroups: [['fdi', 'subsidiary', 'pan-global'], ['profit', 'control', 'scale', '100%']] },
            { id: 'mp4', markDescription: 'Clear strategic judgement linked to case context', requiredKeywordGroups: [['overall', 'recommend', 'lower risk', 'd2c', 'margin']] },
          ],
        },
      },
    ],
  },
];
