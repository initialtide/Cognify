import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const IGCSE_BUS_TOPICS_1_TO_3: TopicDefinition[] = [
  {
    number: 1,
    title: 'Understanding Business Activity',
    subtopics: [
      {
        id: 'igcse-bus-1-1',
        code: '1.1',
        slug: '1.1-business-activity-scarcity-added-value',
        title: 'Business Activity, Scarcity & Added Value',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-1-2',
        code: '1.2',
        slug: '1.2-classification-of-businesses-economic-sectors',
        title: 'Classification of Businesses & Economic Sectors',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-1-3',
        code: '1.3',
        slug: '1.3-enterprise-business-growth-measuring-size',
        title: 'Enterprise, Business Growth & Measuring Size',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-1-4',
        code: '1.4',
        slug: '1.4-types-of-business-organisations',
        title: 'Types of Business Organisations (Sole Trader, Ltd, Plc, Franchise)',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-1-5',
        code: '1.5',
        slug: '1.5-business-objectives-stakeholder-objectives',
        title: 'Business Objectives & Stakeholder Objectives',
        readingMinutes: 9,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'People in Business',
    subtopics: [
      {
        id: 'igcse-bus-2-1',
        code: '2.1',
        slug: '2.1-motivating-employees-theories-rewards',
        title: 'Motivating Employees (Taylor, Maslow, Herzberg & Rewards)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-2-2',
        code: '2.2',
        slug: '2.2-organisation-management-leadership-trade-unions',
        title: 'Organisation, Management, Leadership & Trade Unions',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-2-3',
        code: '2.3',
        slug: '2.3-recruitment-selection-training-legal-controls',
        title: 'Recruitment, Selection, Training & Legal Controls',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-2-4',
        code: '2.4',
        slug: '2.4-internal-external-communication',
        title: 'Internal & External Communication',
        readingMinutes: 9,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Marketing',
    subtopics: [
      {
        id: 'igcse-bus-3-1',
        code: '3.1',
        slug: '3.1-marketing-competition-segmentation-niche-mass',
        title: 'Marketing, Competition, Segmentation & Niche vs Mass Markets',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-2',
        code: '3.2',
        slug: '3.2-market-research-primary-secondary-sampling',
        title: 'Market Research (Primary, Secondary & Sampling)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-3',
        code: '3.3',
        slug: '3.3-marketing-mix-product-branding-plc',
        title: 'Marketing Mix: Product, Branding & Product Life Cycle',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-4',
        code: '3.4',
        slug: '3.4-marketing-mix-pricing-strategies-elasticity',
        title: 'Marketing Mix: Pricing Strategies & Price Elasticity',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-5',
        code: '3.5',
        slug: '3.5-marketing-mix-place-distribution-channels',
        title: 'Marketing Mix: Place & Channels of Distribution',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-6',
        code: '3.6',
        slug: '3.6-marketing-mix-promotion-advertising-ecommerce',
        title: 'Marketing Mix: Promotion, Advertising & E-Commerce',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-7',
        code: '3.7',
        slug: '3.7-marketing-strategy-legal-controls-foreign-markets',
        title: 'Marketing Strategy, Legal Controls & Foreign Markets',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_BUS_NOTES_1_TO_3: Record<string, NoteLesson> = {
  // =========================================================================
  // UNIT 1: UNDERSTANDING BUSINESS ACTIVITY
  // =========================================================================
  'igcse-bus-1-1': {
    subtopicId: 'igcse-bus-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Business Activity, Scarcity & Added Value',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 1.1 Business Activity',
    youtubeId: 'FNB2eprVvCQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:20',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Needs, Wants, Scarcity & Opportunity Cost', cardId: 'igcse-bus-1-1-c1' },
      { time: '3:50', seconds: 230, label: 'Factors of Production & Specialisation', cardId: 'igcse-bus-1-1-c2' },
      { time: '7:40', seconds: 460, label: 'Purpose of Business & Adding Value', cardId: 'igcse-bus-1-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-1-c1',
        title: 'Needs, Wants, Scarcity & Opportunity Cost',
        summary: 'Unlimited human wants versus finite economic resources create scarcity and opportunity cost.',
        bullets: [
          'The **economic problem** exists because human wants are unlimited while resources are scarce, forcing consumers, firms, and governments to make choices that incur an **opportunity cost**.',
        ],
        subsections: [
          {
            heading: 'Needs vs Wants & Making Choices',
            bullets: [
              '**Needs vs Wants** - needs are essentials required for survival (water, food, shelter, basic clothing), whereas wants are non-essential desires (designer trainers, luxury cars) that are infinite.',
              '**Scarcity forces trade-offs** - because budgets, time, and raw materials are limited, choosing one investment automatically sacrifices the next best option.',
            ],
            exampleHeading: 'Worked example: Opportunity cost of capital spending',
            examples: [
              'A small printing firm has $20,000 in retained funds and can either buy a faster digital press or lease a delivery van.',
              'If it buys the digital press, the **opportunity cost** is the next best alternative given up — the delivery van (not the $20,000 cash price alone).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'opportunity cost', definition: 'The next best alternative given up by choosing another item or course of action.' },
          { term: 'economic problem', definition: 'The conflict between unlimited human wants and scarce factors of production.' },
        ],
        memoryAid: 'Scarcity -> Choice -> Opportunity Cost (always the NEXT BEST alternative foregone!).',
      },
      {
        id: 'igcse-bus-1-1-c2',
        title: 'Four Factors of Production & Specialisation',
        summary: 'Combining land, labour, capital, and enterprise with division of labour to lift efficiency.',
        bullets: [
          'Businesses combine the four **factors of production** and apply **specialisation** (division of labour) to produce goods and services more efficiently.',
        ],
        subsections: [
          {
            heading: 'C-E-L-L & Division of Labour',
            bullets: [
              '**Land, Labour, Capital & Enterprise** - Land covers all natural resources (oil, timber, farmland); Labour is human effort; Capital is finance, machinery, and equipment; Enterprise is the risk-taking skill of entrepreneurs combining the other three.',
              '**Division of labour** - splitting a production process into separate repetitive tasks performed by specialist workers increases output per worker and cuts training time, but causes boredom, lower quality if demotivated, and production halts if a key specialist is absent.',
            ],
            exampleHeading: 'Worked example: Bakery division of labour',
            examples: [
              'When 4 bakers each make whole loaves from scratch, output is 80 loaves/hour (20 loaves/worker).',
              'Splitting into mixing, shaping, baking, and packing raises total output to 140 loaves/hour — a 75% productivity gain (35 loaves/worker).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'factors of production', definition: 'The four scarce inputs needed to produce goods and services: land, labour, capital, and enterprise.' },
          { term: 'specialisation', definition: 'Concentrating on the task or product that a worker or business does best to increase efficiency.' },
        ],
      },
      {
        id: 'igcse-bus-1-1-c3',
        title: 'Purpose of Business Activity & Added Value',
        summary: 'Measuring added value and raising it through branding, quality, convenience, or lower material costs.',
        bullets: [
          '**Added value** = Selling price − Cost of bought-in materials and components; it creates the funds needed to cover wages, rent, utilities, and ultimately earn profit.',
        ],
        subsections: [
          {
            heading: 'Two Ways to Increase Added Value',
            bullets: [
              '**Increase selling price (keeping material costs constant)** - build a prestigious brand image, design attractive protective packaging, improve product quality/features, or offer faster convenience and customer service.',
              '**Reduce bought-in input costs (keeping selling price constant)** - negotiate bulk discounts with suppliers or source cheaper materials without harming customer-perceived quality.',
            ],
            exampleHeading: 'Worked example: Café latte added value calculation',
            examples: [
              'BeanCraft Café buys coffee beans, milk, syrup, and a cup for $0.85 and sells each branded latte for $4.25.',
              'Added value = $4.25 − $0.85 = $3.40 per cup (which still has to cover barista wages, shop rent, and electricity before leaving profit).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Added value', definition: 'The difference between the selling price of a product and the cost of bought-in raw materials and components.' },
        ],
        commonMistake: 'Students frequently claim Added Value equals Profit. Added Value ONLY deducts bought-in materials and components — rent, wages, marketing, and energy bills must still be paid before any profit remains!',
      },
    ],
    keyTerms: [
      { term: 'Need', definition: 'A good or service essential for human survival, such as clean water, food, and shelter.' },
      { term: 'Opportunity cost', definition: 'The next best alternative given up when choosing one option over another.' },
      { term: 'Division of labour', definition: 'Splitting production into specialised tasks so each worker focuses on one narrow job.' },
      { term: 'Added value', definition: 'Selling price of a product minus the cost of bought-in raw materials and components.' },
    ],
    checklistPoints: [
      'Explain how unlimited wants and scarce resources create opportunity cost in business decisions.',
      'Identify all four factors of production and evaluate the pros and cons of division of labour.',
      'Calculate added value accurately, distinguish it from profit, and recommend two ways to increase it.',
    ],
  },

  'igcse-bus-1-2': {
    subtopicId: 'igcse-bus-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Classification of Businesses & Economic Sectors',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 1.2 Classification of Businesses',
    youtubeId: 'SyEZ_DZ9czs',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:05',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Primary, Secondary & Tertiary Sectors', cardId: 'igcse-bus-1-2-c1' },
      { time: '3:30', seconds: 210, label: 'Sector Shifts & De-industrialisation', cardId: 'igcse-bus-1-2-c2' },
      { time: '6:50', seconds: 410, label: 'Mixed Economy: Private vs Public Sector', cardId: 'igcse-bus-1-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-2-c1',
        title: 'Primary, Secondary & Tertiary Sectors of Industry',
        summary: 'How raw material extraction, manufacturing, and services form a connected chain of production.',
        bullets: [
          'Every business operates in the **primary sector** (extracting natural resources), **secondary sector** (manufacturing/construction), or **tertiary sector** (providing services to consumers and firms).',
        ],
        subsections: [
          {
            heading: 'Chain of Production Across All Three Sectors',
            bullets: [
              '**Primary sector** - farming, fishing, forestry, quarrying, and oil/mineral extraction supplying natural inputs.',
              '**Secondary sector** - factories, bakeries, oil refineries, and construction firms transforming raw inputs into finished or semi-finished physical goods.',
              '**Tertiary sector** - retailing, banking, insurance, transport, hotels, healthcare, and software support delivering intangible services.',
            ],
            exampleHeading: 'Case study: From timber to dining table',
            examples: [
              'Forestry company fells oak trees (Primary) -> Furniture factory crafts dining tables (Secondary) -> High-street homeware retailer and courier deliver to buyers (Tertiary).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'primary sector', definition: 'Businesses that extract and use the natural resources of the Earth to produce raw materials.' },
          { term: 'tertiary sector', definition: 'Businesses that provide services to consumers and to other sectors of industry.' },
        ],
        memoryAid: 'P-S-T Chain: Pull it (Primary) -> Shape it (Secondary) -> Sell/Serve it (Tertiary)!',
      },
      {
        id: 'igcse-bus-1-2-c2',
        title: 'Changing Sector Importance & De-industrialisation',
        summary: 'Why developing nations industrialise while mature economies shift heavily into tertiary services.',
        bullets: [
          'As countries develop, employment and GDP shift from primary agriculture to secondary manufacturing and later to tertiary services — a decline in manufacturing known as **de-industrialisation**.',
        ],
        subsections: [
          {
            heading: 'Drivers of De-industrialisation in Developed Economies',
            bullets: [
              '**Depletion & foreign competition** - domestic natural resources run out, while newly industrialising countries manufacture goods at lower labour costs.',
              '**Rising incomes** - wealthier consumers spend a higher % of income on holidays, restaurants, financial advice, and entertainment rather than extra physical goods.',
            ],
            exampleHeading: 'Worked example: Comparing country employment shares',
            examples: [
              'Country A employs 55% in Primary, 25% in Secondary, 20% in Tertiary (developing economy).',
              'Country B employs 2% in Primary, 18% in Secondary, 80% in Tertiary (developed economy after de-industrialisation).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'de-industrialisation', definition: 'A decline in the importance of the secondary manufacturing sector in a country’s economy.' },
        ],
      },
      {
        id: 'igcse-bus-1-2-c3',
        title: 'Mixed Economies: Private Sector vs Public Sector',
        summary: 'Balancing profit-driven private firms against government-owned public services and privatisation.',
        bullets: [
          'Almost every country operates a **mixed economy**, combining a **private sector** (businesses owned by private individuals) with a **public sector** (organisations owned and controlled by the government).',
        ],
        subsections: [
          {
            heading: 'Private vs Public Goals & Privatisation',
            bullets: [
              '**Private sector** - owners decide what to produce, how to produce, and what prices to charge, primarily seeking profit, survival, and growth.',
              '**Public sector** - government supplies essential merit/public services (healthcare, education, policing, public water/rail) often free or subsidised at point of use so low-income citizens are not excluded.',
              '**Privatisation** - selling state-owned industries to private shareholders can raise government cash and sharpen efficiency through competition, though private monopolies may raise prices or cut unprofitable rural routes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mixed economy', definition: 'An economic system containing both a private sector and a government-controlled public sector.' },
        ],
        commonMistake: 'Students often think a "Public Limited Company (Plc)" belongs to the public sector. Never fall for this trap: a Plc is in the PRIVATE sector — only government-owned bodies are in the public sector!',
      },
    ],
    keyTerms: [
      { term: 'Primary sector', definition: 'Industry extracting natural resources such as farming, fishing, mining, and forestry.' },
      { term: 'Secondary sector', definition: 'Industry manufacturing and constructing physical goods using primary raw materials.' },
      { term: 'De-industrialisation', definition: 'Decline in the share of secondary manufacturing in a developed country’s output and employment.' },
      { term: 'Mixed economy', definition: 'Economy with both private sector businesses and government-owned public sector enterprises.' },
    ],
    checklistPoints: [
      'Classify businesses into primary, secondary, and tertiary sectors across a chain of production.',
      'Explain why sector importance changes over time and identify causes of de-industrialisation.',
      'Compare private sector and public sector ownership, aims, and the impact of privatisation.',
    ],
  },

  'igcse-bus-1-3': {
    subtopicId: 'igcse-bus-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Enterprise, Business Growth & Measuring Size',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 1.3 Enterprise, Growth and Size',
    youtubeId: '2e6dQ33HtIs',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:15',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Entrepreneurs, Business Plans & Government Support', cardId: 'igcse-bus-1-3-c1' },
      { time: '4:30', seconds: 270, label: 'Measuring Business Size & Why Firms Stay Small', cardId: 'igcse-bus-1-3-c2' },
      { time: '8:50', seconds: 530, label: 'Internal vs External Growth & Why Firms Fail', cardId: 'igcse-bus-1-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-3-c1',
        title: 'Entrepreneurs, Business Plans & Startup Support',
        summary: 'Traits of successful entrepreneurs, how business plans secure finance, and why governments back startups.',
        bullets: [
          'An **entrepreneur** organises, operates, and takes calculated financial risk for a new venture, using a written **business plan** to reduce failure risk and persuade banks or investors to provide finance.',
        ],
        subsections: [
          {
            heading: 'Characteristics, Plans & Government Grants',
            bullets: [
              '**Key entrepreneurial traits** - risk-taking, creative, innovative, self-confident, optimistic, hard-working, independent, and effective communicator.',
              '**Contents of a business plan** - business description, products/services, market research & target customers, marketing strategy, operations/location, management team, and cash-flow/profit forecasts.',
              '**Why governments support startups** - reduces unemployment, increases competition and innovation, boosts GDP/tax revenue, and helps small firms grow into future exporters via grants, low-rent enterprise zones, and free training.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'entrepreneur', definition: 'A person who organises, operates, and takes the financial risk for a new business venture.' },
          { term: 'business plan', definition: 'A formal document setting out business objectives, marketing strategy, operational plans, and financial forecasts.' },
        ],
      },
      {
        id: 'igcse-bus-1-3-c2',
        title: 'Measuring Business Size & Why Some Firms Stay Small',
        summary: 'Comparing employee count, sales, output, and capital employed — and why profit fails as a size measure.',
        bullets: [
          'Business size is measured by number of employees, value of output, value of sales, or **capital employed** — each has limitations, and **profit is NOT a measure of business size**.',
        ],
        subsections: [
          {
            heading: 'Limitations of Size Measures & Staying Small',
            bullets: [
              '**Capital-intensive distortion** - an automated car plant using robotics may have few workers yet $50m of capital employed, while a hand-stitching workshop has 300 workers but tiny capital.',
              '**Why many firms remain small** - type of industry (personal services like hairdressers or plumbers), small local market size, or the owner’s preference to keep personal control and avoid heavy debt.',
            ],
            exampleHeading: 'Worked example: Comparing two factories on size metrics',
            examples: [
              'Firm X employs 120 workers with $400,000 capital employed; Firm Y employs 25 workers with $8,000,000 automated robotics.',
              'Firm X looks larger by employee count, whereas Firm Y is 20× larger by capital employed — showing why analysts check multiple measures.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'capital employed', definition: 'Total value of long-term capital invested in a business (shareholders’ equity plus non-current liabilities).' },
        ],
        commonMistake: 'Students often list Profit as a way to measure business size. A massive airline can make a $10m loss during a fuel spike while a tiny specialist consultant makes $200k profit — profit measures PERFORMANCE, not SIZE!',
      },
      {
        id: 'igcse-bus-1-3-c3',
        title: 'Internal vs External Growth, Integration & Failure Causes',
        summary: 'Horizontal, backward/forward vertical, and conglomerate mergers plus top reasons new businesses fail.',
        bullets: [
          'Firms expand through **internal (organic) growth** (opening new branches from retained profit) or **external growth** (mergers and takeovers across horizontal, vertical, or conglomerate links).',
        ],
        subsections: [
          {
            heading: 'Four Integration Paths & Reasons Businesses Fail',
            bullets: [
              '**Horizontal integration** - merging with a direct rival at the same stage (cuts competition, achieves bulk economies of scale, increases market share).',
              '**Backward & Forward vertical integration** - buying a supplier (backward: secures raw materials and captures supplier margin) or buying a retailer/distributor (forward: guarantees sales outlets and controls customer display).',
              '**Conglomerate integration** - merging with an unrelated industry to spread risk across different markets.',
              '**Why new & established businesses fail** - poor cash-flow management (running out of working capital), weak management skills, over-expansion (overtrading), failure to adapt to new tech/tastes, and strong new rivals.',
            ],
            exampleHeading: 'Case study: Coffee roaster vertical integration',
            examples: [
              'A coffee roaster buying a Brazilian bean plantation is backward vertical integration; buying 40 high-street cafés is forward vertical integration; buying a rival roaster is horizontal integration.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Horizontal integration', definition: 'A merger or takeover between two firms in the same industry at the same stage of production.' },
        ],
        memoryAid: 'Horizontal = Same Horizon (rival); Backward = Back to Supplier; Forward = Forward to Customer; Conglomerate = Completely different!',
      },
    ],
    keyTerms: [
      { term: 'Entrepreneur', definition: 'Individual who takes calculated financial risk to organise and launch a new business.' },
      { term: 'Business plan', definition: 'Document detailing objectives, operations, market analysis, and financial forecasts to guide a firm and secure finance.' },
      { term: 'Capital employed', definition: 'Total long-term finance invested in a business.' },
      { term: 'Conglomerate integration', definition: 'Merger or takeover between two businesses operating in completely different industries.' },
    ],
    checklistPoints: [
      'Identify key entrepreneurial traits and explain how a business plan reduces risk and attracts finance.',
      'Compare four measures of business size (and explain why profit is excluded) plus reasons firms stay small.',
      'Distinguish horizontal, backward/forward vertical, and conglomerate integration, and explain main causes of business failure.',
    ],
  },

  'igcse-bus-1-4': {
    subtopicId: 'igcse-bus-1-4',
    subtopicCode: '1.4',
    subtopicTitle: 'Types of Business Organisations (Sole Trader, Ltd, Plc, Franchise)',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 1.4 Types of Business Organisations',
    youtubeId: 'lGu-fydVdLQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:10',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Unincorporated: Sole Traders & Partnerships', cardId: 'igcse-bus-1-4-c1' },
      { time: '4:45', seconds: 285, label: 'Incorporated: Ltd vs Plc & Limited Liability', cardId: 'igcse-bus-1-4-c2' },
      { time: '9:30', seconds: 570, label: 'Franchises, Joint Ventures & Public Corporations', cardId: 'igcse-bus-1-4-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-4-c1',
        title: 'Unincorporated Businesses: Sole Traders & Partnerships',
        summary: 'Fast setup and direct control traded against unlimited liability and restricted capital.',
        bullets: [
          '**Unincorporated businesses** (sole traders and partnerships) have no separate legal identity from their owners, meaning owners carry **unlimited liability** for every business debt.',
        ],
        subsections: [
          {
            heading: 'Sole Trader vs Partnership',
            bullets: [
              '**Sole trader** - one owner keeps 100% of profits, makes rapid decisions, and faces few legal formalities, but suffers unlimited liability, limited finance, long hours, and zero continuity on death.',
              '**Partnership (2–20 owners)** - brings extra capital, shared workload, and complementary skills (governed by a **Deed of Partnership**), but profits are shared, disagreements can slow decisions, and partners still have unlimited liability.',
            ],
            exampleHeading: 'Worked example: Unlimited liability personal risk',
            examples: [
              'A sole trader bakery collapses owing suppliers $45,000 while business assets sell for only $15,000.',
              'Because of unlimited liability, the owner must legally sell personal possessions (e.g. car or savings) to cover the remaining $30,000 debt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'unlimited liability', definition: 'Legal responsibility where owners must pay all business debts even if personal assets have to be sold.' },
          { term: 'Deed of Partnership', definition: 'Written legal agreement between partners stating capital invested, profit-sharing ratios, and voting rules.' },
        ],
      },
      {
        id: 'igcse-bus-1-4-c2',
        title: 'Incorporated Companies: Private (Ltd) vs Public (Plc)',
        summary: 'Separate legal identity, continuity, share capital, and divorce of ownership from control.',
        bullets: [
          'Incorporated companies (Ltd and Plc) have a **separate legal identity**, continuity of existence, and **limited liability** capping shareholders’ losses strictly at the value of shares purchased.',
        ],
        subsections: [
          {
            heading: 'Comparing Ltd and Plc',
            bullets: [
              '**Private Limited Company (Ltd)** - shares are sold privately only with existing shareholders’ agreement (e.g. family/friends), preventing hostile stock-market takeovers and keeping accounts less public, though total capital raised is capped.',
              '**Public Limited Company (Plc)** - sells shares to the general public on a stock exchange (via an IPO) to raise millions in permanent capital, but faces high legal setup costs, mandatory published accounts, short-term dividend pressure, and **divorce between ownership (shareholders) and control (directors)**.',
            ],
            exampleHeading: 'Worked example: Limited liability protection',
            examples: [
              'An investor buys 5,000 shares at $2 each ($10,000) in BrightSolar Ltd. If BrightSolar Ltd fails owing $400,000, the investor’s maximum legal loss is strictly $10,000.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'limited liability', definition: 'Protection capping shareholders’ maximum financial loss strictly at the capital they invested in shares.' },
        ],
        commonMistake: 'Students often claim a Plc is run by the government. Remember: a Plc is owned by PRIVATE citizens and institutions who buy its shares on the stock market — it is a PRIVATE-sector organisation!',
      },
      {
        id: 'igcse-bus-1-4-c3',
        title: 'Franchises, Joint Ventures & Public Corporations',
        summary: 'Rapid brand expansion via franchising, risk-sharing joint ventures, and state-owned corporations.',
        bullets: [
          'Beyond standard company structures, firms grow through **franchising** or **joint ventures**, while governments run **public corporations** for strategic national services.',
        ],
        subsections: [
          {
            heading: 'Weighing Franchises, Joint Ventures & Public Corporations',
            bullets: [
              '**Franchise (franchisor vs franchisee)** - the franchisee pays an upfront fee plus ongoing % royalties to use a proven brand, training, and national marketing (lower failure risk, less creative freedom); the franchisor expands fast using franchisees’ capital but risks brand damage if one outlet serves poor quality.',
              '**Joint venture** - two separate companies pool capital, local market knowledge, and expertise for a specific project (sharing costs and risks), though clashing corporate cultures can spark disputes.',
              '**Public corporation** - wholly owned by the state (e.g. national rail or postal operator), funded by taxes to prioritise universal affordable service rather than maximum profit.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'franchising', definition: 'A business arrangement allowing a franchisee to trade under a franchisor’s established brand and system for a fee and royalties.' },
          { term: 'joint ventures', definition: 'Two or more businesses agreeing to start a new project together, sharing capital, risks, and profits.' },
        ],
        memoryAid: 'Unincorporated = Unlimited risk (Sole trader, Partnership); Incorporated = Shielded Ltd/Plc!',
      },
    ],
    keyTerms: [
      { term: 'Sole trader', definition: 'Unincorporated business owned and controlled by one person with unlimited liability.' },
      { term: 'Limited liability', definition: 'Legal shield limiting shareholders’ financial loss to the money they invested in shares.' },
      { term: 'Franchise', definition: 'Licence allowing a franchisee to operate using an established brand name, products, and methods.' },
      { term: 'Joint venture', definition: 'Two or more independent businesses combining resources to launch a shared project.' },
    ],
    checklistPoints: [
      'Compare sole traders, partnerships, Ltd, and Plc on liability, continuity, control, and finance.',
      'Evaluate the advantages and disadvantages of franchising for both franchisor and franchisee.',
      'Explain when a joint venture is preferable and contrast public corporations with private Plcs.',
    ],
  },

  'igcse-bus-1-5': {
    subtopicId: 'igcse-bus-1-5',
    subtopicCode: '1.5',
    subtopicTitle: 'Business Objectives & Stakeholder Objectives',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 1.5 Business Objectives and Stakeholder Objectives',
    youtubeId: 'yQiE2qyawD0',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:45',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Private & Social Enterprise Business Objectives', cardId: 'igcse-bus-1-5-c1' },
      { time: '3:55', seconds: 235, label: 'Why Objectives Change Over Time', cardId: 'igcse-bus-1-5-c2' },
      { time: '7:45', seconds: 465, label: 'Internal & External Stakeholder Conflicts', cardId: 'igcse-bus-1-5-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-5-c1',
        title: 'Private Sector, Public Sector & Social Enterprise Objectives',
        summary: 'Setting clear targets for survival, profit, growth, market share, and social/environmental impact.',
        bullets: [
          'Clear **business objectives** give managers and workers a shared direction, help measure performance, and guide resource allocation across private firms, public bodies, and **social enterprises**.',
        ],
        subsections: [
          {
            heading: 'Core Objectives Across Sectors',
            bullets: [
              '**Private objectives** - **Survival** (vital for new startups and during recessions), **Profit** (rewarding owners and funding reinvestment), **Growth** (economies of scale and higher market power), **Market share** (brand dominance and retailer bargaining power), and **Service to the community**.',
              '**Social enterprises** - operate commercially like private firms but reinvest surpluses into a triple bottom line: **Social** (jobs for disadvantaged groups), **Environmental** (protecting ecosystems), and **Financial** (making enough profit to stay self-sustaining).',
              '**Public sector objectives** - Financial (staying within government budget), Service (high-quality accessible healthcare/education), and Social (protecting employment in deprived regions).',
            ],
            exampleHeading: 'Worked example: Calculating market share (%)',
            examples: [
              'Total annual sales in a city’s coffee-shop market are $5,000,000, and RoastHub earns $750,000.',
              'RoastHub’s market share = ($750,000 ÷ $5,000,000) × 100 = 15%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'business objectives', definition: 'Clear, measurable aims or targets that a business works to achieve over a given time period.' },
          { term: 'social enterprises', definition: 'Businesses with social or environmental goals that reinvest profits back into their mission rather than maximising shareholder dividends.' },
        ],
      },
      {
        id: 'igcse-bus-1-5-c2',
        title: 'Why Business Objectives Change Over Time',
        summary: 'Shifting targets as a firm matures, enters a recession, or faces aggressive competitors.',
        bullets: [
          'Objectives are never static — managers regularly revise targets in response to business age, economic cycles, competition, and technology.',
        ],
        subsections: [
          {
            heading: 'Typical Objective Transitions',
            bullets: [
              '**Startup -> Established firm** - a newly launched bakery targets **survival** in Year 1; once its customer base is secure by Year 3, it shifts to **profit** and **growth** (opening a second store).',
              '**Boom -> Recession** - an established luxury retailer chasing 20% **growth** in a boom may urgently pivot back to **survival** (cutting costs and holding cash) if a severe recession hits.',
            ],
            exampleHeading: 'Case study: Tech startup pivoting objectives',
            examples: [
              'EcoScoot focused purely on breaking even (survival) during its first 18 months; after securing 22% market share, shareholders pushed for higher annual dividends (profit objective).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Market share', definition: 'The percentage of total market sales held by one specific brand or business.' },
        ],
        memoryAid: 'Objective Timeline: Survive -> Profit -> Grow -> Dominate Market Share (then back to Survive in a recession)!',
      },
      {
        id: 'igcse-bus-1-5-c3',
        title: 'Stakeholder Groups & Inevitable Stakeholder Conflicts',
        summary: 'Mapping internal and external stakeholders and analysing why strategic choices create trade-offs.',
        bullets: [
          'A **stakeholder** is any person or group with a direct interest in a business’s decisions — **internal stakeholders** (owners, workers, managers) and **external stakeholders** (customers, banks/lenders, suppliers, government, local community).',
        ],
        subsections: [
          {
            heading: 'Classic IGCSE Stakeholder Conflicts',
            bullets: [
              '**Workers vs Shareholders** - employees demand a 10% wage rise and better conditions, raising costs and lowering short-term profits/dividends for shareholders.',
              '**Managers/Owners vs Local Community** - building a 24-hour distribution hub creates profits and 150 jobs, but angers nearby residents over lorry noise, traffic congestion, and emissions.',
              '**Customers vs Owners** - cutting raw material quality lowers unit costs to widen profit margins, but disappoints customers seeking durable, fair-priced goods.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'stakeholder', definition: 'Any individual or group with a direct interest in the performance and activities of a business.' },
        ],
        commonMistake: 'Students frequently confuse SHAREHOLDERS with STAKEHOLDERS. Shareholders are ONLY the part-owners of a limited company — they are just ONE subgroup inside the much wider pool of stakeholders!',
      },
    ],
    keyTerms: [
      { term: 'Business objective', definition: 'A specific, measurable target that an organisation works towards.' },
      { term: 'Social enterprise', definition: 'Organisation trading commercially to achieve social and environmental goals rather than private profit maximisation.' },
      { term: 'Market share', definition: 'A business’s sales revenue divided by total market sales revenue, expressed as a percentage.' },
      { term: 'Stakeholder', definition: 'Any internal or external individual or group affected by a business’s activities.' },
    ],
    checklistPoints: [
      'Explain survival, profit, growth, market share, and social enterprise objectives across sectors.',
      'Justify why a business’s objectives evolve from launch through maturity or economic downturns.',
      'Identify internal and external stakeholders and analyse realistic conflicts between their aims.',
    ],
  },

  // =========================================================================
  // UNIT 2: PEOPLE IN BUSINESS
  // =========================================================================
  'igcse-bus-2-1': {
    subtopicId: 'igcse-bus-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Motivating Employees (Taylor, Maslow, Herzberg & Rewards)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 2.1 Motivating employees',
    youtubeId: 'u9BDnMylPS4',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:40',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Motivation Matters & F.W. Taylor', cardId: 'igcse-bus-2-1-c1' },
      { time: '4:25', seconds: 265, label: 'Maslow’s Hierarchy & Herzberg Two-Factor', cardId: 'igcse-bus-2-1-c2' },
      { time: '9:00', seconds: 540, label: 'Financial & Non-Financial Motivation Methods', cardId: 'igcse-bus-2-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-1-c1',
        title: 'Why Motivation Matters & F.W. Taylor’s Scientific Management',
        summary: 'How high motivation boosts productivity and cuts turnover, and why Taylor’s piece-rate view has limits.',
        bullets: [
          'Motivated staff work harder and smarter, delivering higher **labour productivity**, fewer defects, lower **absenteeism**, and lower **labour turnover** (saving heavy recruitment and induction costs).',
        ],
        subsections: [
          {
            heading: 'F.W. Taylor: Economic Man & Piece-Rate Pay',
            bullets: [
              '**Taylor’s core assumption** - workers are motivated purely by money, so managers should break tasks down scientifically and pay **piece-rate** (a fixed sum per unit produced) to maximise output.',
              '**Key criticisms** - ignores social belonging and job satisfaction, fails for roles where output cannot be counted cleanly (teachers, nurses, designers), and tempts factory workers to rush and produce defective goods.',
            ],
            exampleHeading: 'Worked example: Calculating piece-rate earnings',
            examples: [
              'A garment factory pays $1.50 per shirt stitched. Worker A stitches 50 shirts/day ($75/day); Worker B stitches 68 shirts/day ($102/day), incentivising high speed — requiring quality checks to stop rushed stitching.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'labour turnover', definition: 'The rate at which employees leave a business and must be replaced over a given period.' },
          { term: 'absenteeism', definition: 'Frequent, unplanned employee absence from work, disrupting output and raising costs.' },
        ],
      },
      {
        id: 'igcse-bus-2-1-c2',
        title: 'Maslow’s Hierarchy of Needs & Herzberg’s Two-Factor Theory',
        summary: 'Moving up Maslow’s five human needs and separating Herzberg’s Hygiene factors from true Motivators.',
        bullets: [
          'Both Abraham Maslow and Frederick Herzberg proved that fair pay alone cannot create lasting motivation once basic workplace needs are satisfied.',
        ],
        subsections: [
          {
            heading: 'Comparing Maslow and Herzberg in Practice',
            bullets: [
              '**Maslow’s 5 levels (bottom -> top)** - 1. Physiological (living wage, rest breaks) -> 2. Safety/Security (permanent contract, safe equipment) -> 3. Social (teamwork, friendly colleagues) -> 4. Esteem (promotion, praise, status) -> 5. **Self-actualisation** (challenging creative work achieving full potential). Once a level is met, it stops motivating.',
              '**Herzberg’s Two-Factor Theory** - **Hygiene factors** (salary, working conditions, company policy, supervision) merely prevent DISSATISFACTION when good; only **Motivators** (achievement, recognition, meaningful work, responsibility, advancement) actively create job satisfaction and drive effort.',
            ],
            exampleHeading: 'Case study: Applying Herzberg to a call centre',
            examples: [
              'Upgrading noisy headsets and paying fair base wages fixes hygiene complaints (removing dissatisfaction), while letting senior advisors resolve refunds independently adds responsibility (true motivator).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Hygiene factors', definition: 'Herzberg’s workplace essentials (pay, conditions, security) that prevent dissatisfaction without actively motivating.' },
          { term: 'Self-actualisation', definition: 'The highest level of Maslow’s hierarchy where an employee fulfils their full creative potential.' },
        ],
        memoryAid: 'Maslow bottom-up: Please Stop Sending Emails Soon (Physiological, Safety, Social, Esteem, Self-actualisation)!',
      },
      {
        id: 'igcse-bus-2-1-c3',
        title: 'Financial & Non-Financial Rewards',
        summary: 'Matching wages, salaries, commission, bonuses, profit-sharing, and job redesign to specific job roles.',
        bullets: [
          'Effective HR teams blend targeted **financial rewards** with **non-financial motivation** methods tailored to each job’s nature and budget.',
        ],
        subsections: [
          {
            heading: 'Financial Tools vs Job Redesign',
            bullets: [
              '**Financial methods** - time-rate wages (paid per hour), piece-rate (per unit), salary (fixed annual pay for office/managers), **commission** (% of each sale for sales staff), bonuses (one-off target reward), **profit-sharing** (% of company profit shared across staff), and fringe benefits (health insurance, company car, staff discounts).',
              '**Non-financial methods** - **job rotation** (swapping equally skilled tasks to cut boredom), **job enlargement** (adding more tasks at the SAME skill level), **job enrichment** (adding higher-skill responsibility and decision-making), teamworking, training, and praise/recognition.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'job enrichment', definition: 'Redesigning a role to include more challenging tasks, autonomy, and decision-making responsibility.' },
        ],
        commonMistake: 'Students routinely confuse Job Enlargement with Job Enrichment. Enlargement adds MORE tasks at the SAME difficulty (horizontal loading), whereas Enrichment adds HIGHER responsibility and skill (vertical loading — a true Herzberg motivator)!',
      },
    ],
    keyTerms: [
      { term: 'Motivation', definition: 'The reason why employees want to work hard and effectively for a business.' },
      { term: 'Piece-rate pay', definition: 'Financial reward paying workers a fixed amount for every unit they produce.' },
      { term: 'Hygiene factors', definition: 'Workplace factors such as pay and working conditions that prevent dissatisfaction if adequate (Herzberg).' },
      { term: 'Job enrichment', definition: 'Adding greater responsibility, challenge, and autonomy to a worker’s role.' },
    ],
    checklistPoints: [
      'Evaluate Taylor’s scientific management, Maslow’s 5-level hierarchy, and Herzberg’s Two-Factor Theory.',
      'Recommend appropriate financial rewards (piece-rate, commission, salary, bonus, profit-sharing) in context.',
      'Distinguish job rotation, job enlargement, and job enrichment cleanly in exam answers.',
    ],
  },

  'igcse-bus-2-2': {
    subtopicId: 'igcse-bus-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Organisation, Management, Leadership & Trade Unions',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 2.2 Organisation and management',
    youtubeId: 'klhSlw72X2U',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:05',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Organisation Charts, Span of Control & Delayering', cardId: 'igcse-bus-2-2-c1' },
      { time: '4:40', seconds: 280, label: 'Role of Management & Leadership Styles', cardId: 'igcse-bus-2-2-c2' },
      { time: '9:20', seconds: 560, label: 'Delegation & Trade Unions', cardId: 'igcse-bus-2-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-2-c1',
        title: 'Organisational Structure, Chain of Command & Delayering',
        summary: 'Reading tall vs flat hierarchy charts and weighing the cost and control impacts of delayering.',
        bullets: [
          'An **organisational chart** maps formal lines of authority, showing the **chain of command** (top-to-bottom instruction path) and each manager’s **span of control** (direct subordinates).',
        ],
        subsections: [
          {
            heading: 'Tall vs Flat Hierarchies & Delayering',
            bullets: [
              '**Tall (narrow span) vs Flat (wide span)** - tall hierarchies allow close supervision but slow communication and carry high management salary costs; flat hierarchies speed communication and cut middle-manager salaries, but widen spans of control.',
              '**Delayering** - removing a layer of middle management reduces salary bills by 15%–25% and empowers lower staff, though surviving managers face heavier workloads and potential loss of control.',
            ],
            exampleHeading: 'Worked example: Delayering span-of-control shift',
            examples: [
              'A retail chain cuts 4 regional managers so 20 store managers now report directly to 2 operations directors instead of 4 regional layers.',
              'Each director’s span of control widens from 2 to 10 subordinates, cutting management wages while making delegation essential.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'chain of command', definition: 'The structure in an organisation allowing instructions to pass down from senior management to lower levels.' },
          { term: 'span of control', definition: 'The number of subordinates working directly under a single manager.' },
        ],
      },
      {
        id: 'igcse-bus-2-2-c2',
        title: 'Roles of Management & Three Leadership Styles',
        summary: 'Planning, organising, coordinating, commanding, and controlling plus matching leadership style to context.',
        bullets: [
          'Managers perform five core roles (planning, organising, coordinating, commanding, controlling) and choose between **autocratic**, **democratic**, and **laissez-faire** leadership depending on task urgency and workforce skill.',
        ],
        subsections: [
          {
            heading: 'Choosing the Right Leadership Style',
            bullets: [
              '**Autocratic** - leader decides alone using one-way commands; essential in safety emergencies, military settings, or with newly hired unskilled staff, but stifles creativity and causes high turnover among skilled staff.',
              '**Democratic** - leader consults employees and welcomes two-way feedback before deciding; boosts motivation and generates stronger ideas from experienced teams, though takes longer in urgent crises.',
              '**Laissez-faire** - leader sets broad goals and leaves day-to-day choices to staff; thrives with highly skilled creative designers or R&D scientists, but causes chaos and missed deadlines with inexperienced workers.',
            ],
            exampleHeading: 'Case study: Contextual leadership choice',
            examples: [
              'During an emergency chemical leak at a paint plant, autocratic orders save lives instantly; when designing next year’s eco-paint range, democratic workshops harness chemists’ best ideas.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'democratic', definition: 'Leadership style that involves employees in decision-making through consultation and two-way communication.' },
        ],
        memoryAid: 'Autocratic = Alone; Democratic = Discuss; Laissez-faire = Leave them to lead!',
      },
      {
        id: 'igcse-bus-2-2-c3',
        title: 'Delegation & Role of Trade Unions',
        summary: 'Passing authority safely while retaining accountability, and how trade unions negotiate collectively.',
        bullets: [
          '**Delegation** grants subordinates authority to carry out tasks (freeing managers for strategic planning and motivating junior staff), while **trade unions** represent employees collectively.',
        ],
        subsections: [
          {
            heading: 'Delegation Risks & Trade Union Pros/Cons',
            bullets: [
              '**Delegation balance** - builds trust, trains future managers, and reduces senior overload, yet managers keep final **accountability** and may hesitate if they distrust staff skills.',
              '**Trade unions** - employee groups funded by member subscriptions that use collective bargaining to win fairer pay, safer conditions, and legal support against unfair dismissal; strong unions give firms a single voice to negotiate with, though strikes can halt output and damage reputation.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Delegation', definition: 'Giving a subordinate the authority to perform particular tasks while the manager retains overall responsibility.' },
          { term: 'trade unions', definition: 'Organisations of workers formed to protect and improve their pay, working conditions, and job security through collective bargaining.' },
        ],
        commonMistake: 'Students often write that delegating a task removes the manager’s responsibility. Never forget: authority can be delegated, but final ACCOUNTABILITY always stays with the manager!',
      },
    ],
    keyTerms: [
      { term: 'Chain of command', definition: 'Hierarchy path through which orders and authority flow from top management to lower staff.' },
      { term: 'Span of control', definition: 'Number of subordinates reporting directly to one manager.' },
      { term: 'Delegation', definition: 'Passing authority to perform tasks down to subordinates while keeping ultimate accountability.' },
      { term: 'Trade union', definition: 'Group of workers acting collectively to protect pay, safety, and employment rights.' },
    ],
    checklistPoints: [
      'Interpret organisation charts using chain of command, span of control, and delayering.',
      'Recommend autocratic, democratic, or laissez-faire leadership based on crisis urgency and staff skill.',
      'Evaluate delegation benefits/risks and the impact of trade unions on both employees and employers.',
    ],
  },

  'igcse-bus-2-3': {
    subtopicId: 'igcse-bus-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'Recruitment, Selection, Training & Legal Controls',
    readingMinutes: 10,
    videoTitle: 'IGCSE: Business. Chapter 2.3: Recruitment, selection and training',
    youtubeId: 'J9259zzXHyI',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:30',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Recruitment Stages: Job Analysis, Internal vs External', cardId: 'igcse-bus-2-3-c1' },
      { time: '5:00', seconds: 300, label: 'Training Types & Part-Time vs Full-Time Staff', cardId: 'igcse-bus-2-3-c2' },
      { time: '9:45', seconds: 585, label: 'Dismissal, Redundancy & Employment Laws', cardId: 'igcse-bus-2-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-3-c1',
        title: 'Recruitment & Selection Process (Internal vs External)',
        summary: 'From job analysis and person specifications to choosing internal promotion or external hiring.',
        bullets: [
          'Effective recruitment starts with **job analysis**, producing a **job description** (duties and responsibilities) and a **person specification** (qualifications, skills, and qualities required), before advertising and shortlisting.',
        ],
        subsections: [
          {
            heading: 'Internal vs External Recruitment & Selection Tools',
            bullets: [
              '**Internal recruitment** - faster, cheaper, motivates existing staff through promotion, and the candidate already knows company culture; however, it brings no fresh ideas and leaves another vacancy behind.',
              '**External recruitment** - wider talent pool with fresh outside skills and ideas, though slower, costlier (adverts/agencies), and riskier until the recruit proves themselves via CVs, interviews, aptitude tests, and references.',
            ],
            exampleHeading: 'Worked example: Cost comparison of hiring a supervisor',
            examples: [
              'External hiring via a recruitment agency charges 15% of a $40,000 salary ($6,000 fee) plus 6 weeks’ wait; internal promotion costs $0 in agency fees and takes 10 days.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'job description', definition: 'Document outlining the main duties, tasks, and responsibilities of a specific job role.' },
          { term: 'person specification', definition: 'Document detailing the qualifications, experience, skills, and personal traits needed to do a job.' },
        ],
        memoryAid: 'Job Description = Duties of the Desk; Person Specification = Profile of the Person!',
      },
      {
        id: 'igcse-bus-2-3-c2',
        title: 'Training Methods & Part-Time vs Full-Time Workforce',
        summary: 'Comparing induction, on-the-job, and off-the-job training alongside flexible staffing models.',
        bullets: [
          'Training raises productivity, reduces accidents, and helps staff adapt to new technology, using **induction**, **on-the-job**, or **off-the-job** methods.',
        ],
        subsections: [
          {
            heading: 'Three Training Methods & Workforce Flexibility',
            bullets: [
              '**Induction training** - introduces new hires to company rules, fire safety, layout, and colleagues so they settle quickly and safely.',
              '**On-the-job vs Off-the-job** - On-the-job (shadowing an experienced worker at work) is cheap and job-specific, but slows the trainer and can pass on bad habits; Off-the-job (external college/specialist courses) brings cutting-edge expertise and qualifications, but costs course fees, loses working hours, and makes staff easier for rivals to poach.',
              '**Part-time vs Full-time staff** - part-time staff offer shift flexibility during peak retail/restaurant hours and lower fixed wage bills, though they can be less committed and harder to train across teams.',
            ],
            exampleHeading: 'Case study: Tech firm training investment',
            examples: [
              'Sending 5 engineers to a 3-day cybersecurity course costs $4,500 in fees plus 15 lost workdays (off-the-job), yet prevents costly data breaches and earns industry certification.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'on-the-job', definition: 'Training carried out at the workplace by watching and being coached by an experienced employee.' },
          { term: 'off-the-job', definition: 'Training away from the normal workplace, usually delivered by external specialists or colleges.' },
        ],
      },
      {
        id: 'igcse-bus-2-3-c3',
        title: 'Downsizing: Dismissal, Redundancy & Legal Controls',
        summary: 'Distinguishing employee-fault dismissal from job-loss redundancy and complying with employment law.',
        bullets: [
          'When reducing workforce size, HR must distinguish **dismissal** from **redundancy** and obey strict **employment laws** covering contracts, unfair dismissal, discrimination, health and safety, and minimum wages.',
        ],
        subsections: [
          {
            heading: 'Dismissal vs Redundancy & Legal Impact on Business',
            bullets: [
              '**Dismissal vs Redundancy** - Dismissal ends employment due to the worker’s own fault (gross misconduct, theft, persistent lateness/incompetence); Redundancy happens when the JOB itself disappears (factory automation, falling demand, relocation) — NOT the employee’s fault, often entitling them to redundancy pay.',
              '**Legal controls over employment** - laws banning discrimination (gender, race, religion, disability), enforcing health & safety, and setting legal minimum wages raise compliance and wage costs in the short run, but widen the talent pool, cut workplace accidents, and protect brand reputation.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'redundancy', definition: 'Ending employment because a business no longer needs a particular job role, not because of employee fault.' },
        ],
        commonMistake: 'Students frequently write that workers are "dismissed" when a factory closes or buys robots. Always use REDUNDANCY when the job disappears through no fault of the worker — Dismissal is ONLY for worker misconduct or incompetence!',
      },
    ],
    keyTerms: [
      { term: 'Job description', definition: 'Document listing the duties, tasks, and responsibilities attached to a role.' },
      { term: 'Person specification', definition: 'Document stating the qualifications, skills, and experience needed by applicants.' },
      { term: 'Induction training', definition: 'Introductory training helping new employees learn workplace rules, safety, and colleagues.' },
      { term: 'Redundancy', definition: 'Ending a worker’s contract because their job role is no longer required by the business.' },
    ],
    checklistPoints: [
      'Outline every stage of recruitment and contrast internal with external recruitment.',
      'Evaluate induction, on-the-job, and off-the-job training plus part-time vs full-time contracts.',
      'Distinguish dismissal from redundancy and explain how employment laws affect business costs and staff.',
    ],
  },

  'igcse-bus-2-4': {
    subtopicId: 'igcse-bus-2-4',
    subtopicCode: '2.4',
    subtopicTitle: 'Internal & External Communication',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 2.4 Internal and external communication',
    youtubeId: 'ksEgxij_lNM',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:30',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Effective Communication & One-Way vs Two-Way', cardId: 'igcse-bus-2-4-c1' },
      { time: '3:50', seconds: 230, label: 'Verbal, Written & Visual Methods', cardId: 'igcse-bus-2-4-c2' },
      { time: '7:40', seconds: 460, label: 'Communication Barriers & How to Overcome Them', cardId: 'igcse-bus-2-4-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-4-c1',
        title: 'Effective Communication: Internal, External & Feedback',
        summary: 'Why feedback completes the communication loop and how internal differs from external messaging.',
        bullets: [
          '**Effective communication** occurs ONLY when a message is sent by a transmitter through a suitable medium, received and accurately understood by the receiver, and confirmed by **feedback**.',
        ],
        subsections: [
          {
            heading: 'Internal vs External & One-Way vs Two-Way',
            bullets: [
              '**Internal vs External communication** - Internal takes place inside the organisation (manager emailing warehouse staff); External links the business to outside parties (invoices to customers, orders to suppliers, press releases to investors).',
              '**One-way vs Two-way** - One-way (safety signs, fire-exit posters) allows no reply — fast but offers zero proof of understanding; Two-way (meetings, phone calls, interactive chats) lets the receiver ask clarifying questions and provide feedback, boosting accuracy and motivation.',
            ],
            exampleHeading: 'Case study: Costly failure of one-way messaging',
            examples: [
              'A clothing factory emailed an updated sleeve measurement without requesting confirmation; 2,000 jackets were cut to the old pattern, costing $18,000 in wasted fabric.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Effective communication', definition: 'When a message is sent, received, understood as intended, and acted upon with feedback confirming receipt.' },
          { term: 'feedback', definition: 'The receiver’s reply confirming that a message has been received and understood.' },
        ],
        memoryAid: 'Effective Loop = Sender -> Message -> Medium -> Receiver -> Feedback (no feedback = no proof!).',
      },
      {
        id: 'igcse-bus-2-4-c2',
        title: 'Choosing Communication Methods: Verbal, Written & Visual',
        summary: 'Selecting speed, permanent record, confidentiality, or visual clarity to match business context.',
        bullets: [
          'Managers weigh speed, cost, size of audience, need for a written record, and need for feedback when selecting **verbal**, **written**, or **visual** methods.',
        ],
        subsections: [
          {
            heading: 'Comparing Verbal, Written & Visual Channels',
            bullets: [
              '**Verbal (face-to-face meetings, video calls, phone)** - fast, enables immediate two-way feedback and reads body language/tone, but leaves no permanent written proof and can waste time in large meetings.',
              '**Written (email, letters, formal reports, text/instant message)** - creates a permanent legal record and handles detailed figures accurately, though slower for immediate discussion and risks unread inbox clutter.',
              '**Visual (charts, infographics, safety posters, video demos)** - summarises complex sales data or safety rules rapidly across languages, though cannot capture deep detail alone and needs accompanying explanation.',
            ],
            exampleHeading: 'Worked example: Selecting the right medium',
            examples: [
              'Announcing a disciplinary warning to 1 employee requires a formal face-to-face meeting followed by a written letter (legal record), whereas alerting 80 drivers of a road closure requires an instant SMS/app push notification (speed).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'written', definition: 'Communication using letters, emails, reports, or notices that creates a permanent record for future reference.' },
        ],
      },
      {
        id: 'igcse-bus-2-4-c3',
        title: 'Communication Barriers & Practical Solutions',
        summary: 'Diagnosing jargon, long chains of command, medium breakdown, and receiver distrust — and fixing each.',
        bullets: [
          '**Communication barriers** distort, delay, or block messages across the sender, medium, receiver, or feedback loop, causing expensive mistakes and low staff morale.',
        ],
        subsections: [
          {
            heading: 'Common Barriers & Direct Fixes',
            bullets: [
              '**Sender barriers (jargon, unclear language, speaking too fast)** - fix by using plain everyday language suited to the audience and keeping messages concise.',
              '**Medium barriers (long chain of command, broken IT/poor Wi-Fi, wrong channel)** - fix by delayering to shorten the chain of command, investing in reliable IT, and matching medium to urgency.',
              '**Receiver / Feedback barriers (distrust of management, noise on factory floor, no feedback requested)** - fix by building open two-way culture, holding meetings in quiet rooms, and explicitly requiring confirmation replies.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Communication barriers', definition: 'Factors that stop effective communication of messages, leading to misunderstanding or non-receipt.' },
        ],
        commonMistake: 'Students often claim communication was effective simply because an email was sent. In Cambridge mark schemes, sending a message is NEVER enough — the receiver must UNDERSTAND it and FEEDBACK must confirm it!',
      },
    ],
    keyTerms: [
      { term: 'Internal communication', definition: 'Messages exchanged between people working within the same organisation.' },
      { term: 'External communication', definition: 'Messages sent between a business and outside groups such as customers, suppliers, or banks.' },
      { term: 'Feedback', definition: 'Response from the receiver confirming a message has been received and understood.' },
      { term: 'Communication barrier', definition: 'Any obstacle (such as jargon, long chains of command, or poor channel) that prevents clear understanding.' },
    ],
    checklistPoints: [
      'Explain why feedback is essential for effective communication and contrast one-way with two-way methods.',
      'Select appropriate verbal, written, or visual communication methods for realistic business situations.',
      'Identify barriers in the sender, medium, receiver, and feedback stages and propose targeted fixes.',
    ],
  },

  // =========================================================================
  // UNIT 3: MARKETING
  // =========================================================================
  'igcse-bus-3-1': {
    subtopicId: 'igcse-bus-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Marketing, Competition, Segmentation & Niche vs Mass Markets',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 3.1 Marketing, competition and the customer',
    youtubeId: '_4OvAyimlcE',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:10',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Role of Marketing & Why Consumer Patterns Change', cardId: 'igcse-bus-3-1-c1' },
      { time: '4:05', seconds: 245, label: 'Niche Markets vs Mass Markets', cardId: 'igcse-bus-3-1-c2' },
      { time: '8:10', seconds: 490, label: 'Market Segmentation Methods & Benefits', cardId: 'igcse-bus-3-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-1-c1',
        title: 'Role of Marketing & Responding to Changing Markets',
        summary: 'Identifying and satisfying customer needs profitably while adapting to dynamic competition.',
        bullets: [
          'The **role of marketing** is to identify customer needs, satisfy them profitably, build **customer loyalty**, and anticipate shifts in tastes, technology, incomes, and demographics.',
        ],
        subsections: [
          {
            heading: 'Why Markets Become More Competitive & How Firms Respond',
            bullets: [
              '**Causes of rising competition** - globalisation opens domestic markets to foreign rivals, e-commerce lets shoppers compare prices globally in seconds, and lower transport costs remove local monopolies.',
              '**How firms respond** - maintain loyal customer relationships, cut unit costs to stay price-competitive, develop unique innovative features, and continuously refresh branding/quality.',
            ],
            exampleHeading: 'Case study: High-street bookshop facing online rivals',
            examples: [
              'When online giants cut paperback prices by 25%, an independent bookshop survived by adding an artisan café, hosting author signings, and offering curated gift recommendations.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'customer loyalty', definition: 'Existing customers choosing to buy repeatedly from the same brand rather than switching to rivals.' },
        ],
      },
      {
        id: 'igcse-bus-3-1-c2',
        title: 'Niche Markets vs Mass Markets',
        summary: 'Weighing specialised high-margin niches against high-volume economies of scale in mass markets.',
        bullets: [
          'Businesses choose whether to serve a tiny specialised **niche market** or compete across a huge **mass market**, balancing profit margins against volume and risk.',
        ],
        subsections: [
          {
            heading: 'Niche vs Mass Trade-Offs',
            bullets: [
              '**Niche market** - small, specialised subgroup (e.g. left-handed ergonomic guitars or gluten-free marathon gels): faces few big rivals, meets exact needs, and commands high profit margins, but limits total sales volume, lacks economies of scale, and carries high risk if tastes shift.',
              '**Mass market** - huge undifferentiated audience (e.g. everyday cola or toothpaste): unlocks massive sales volume, bulk economies of scale, and lower risk from product variety, yet faces fierce price wars and heavy advertising budgets.',
            ],
            exampleHeading: 'Worked example: Margin vs volume comparison',
            examples: [
              'Niche bike brand sells 500 custom titanium bikes at $600 profit each ($300,000 total profit). Mass brand sells 15,000 commuter bikes at $30 profit each ($450,000 total profit), showing how lower unit margins can still earn higher total profit at scale.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'niche market', definition: 'A small, specialised segment of a much larger market with specific customer needs.' },
          { term: 'mass market', definition: 'A very large market where standardised products are sold to the general population.' },
        ],
        memoryAid: 'Niche = Narrow audience, Neat margins, Nervous risk; Mass = Mega volume, Massive rivalry!',
      },
      {
        id: 'igcse-bus-3-1-c3',
        title: 'Market Segmentation: Methods & Strategic Benefits',
        summary: 'Dividing markets by age, income, gender, region, lifestyle, and use to prevent wasted ad spend.',
        bullets: [
          '**Market segmentation** divides a whole market into identifiable subgroups of consumers sharing similar characteristics so the 4 Ps can be precisely tailored.',
        ],
        subsections: [
          {
            heading: 'Six Segmentation Bases & Business Payoff',
            bullets: [
              '**Key bases** - **Socio-economic group / income** (budget vs luxury cars), **Age** (kids’ cereals vs retirement cruises), **Region / location** (winter coats in cold climates), **Gender**, **Use of product** (business vs leisure flights), and **Lifestyle** (eco-conscious vegan shoppers).',
              '**Why segment?** - reduces wasted advertising on non-buyers, spots underserved market gaps, boosts sales by matching exact buyer preferences, and enables differentiated pricing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Market segmentation', definition: 'Identifiable subgroups of a whole market in which consumers share similar characteristics or preferences.' },
        ],
        commonMistake: 'Students often claim segmentation automatically guarantees higher profits. Remember: creating separate products and ad campaigns for multiple segments RAISES design, production, and marketing costs!',
      },
    ],
    keyTerms: [
      { term: 'Customer loyalty', definition: 'Tendency of existing buyers to keep purchasing from the same brand over competitors.' },
      { term: 'Niche market', definition: 'Small, specialised segment of a larger market targeting distinct buyer needs.' },
      { term: 'Mass market', definition: 'Large market for standardised everyday goods sold to a wide population.' },
      { term: 'Market segmentation', definition: 'Dividing a market into subgroups of consumers with shared traits such as age, income, or lifestyle.' },
    ],
    checklistPoints: [
      'Explain the role of marketing and how firms respond to increasing global and online competition.',
      'Evaluate the advantages and risks of operating in a niche market versus a mass market.',
      'Select appropriate market segmentation criteria and explain the benefits and costs of segmentation.',
    ],
  },

  'igcse-bus-3-2': {
    subtopicId: 'igcse-bus-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Market Research (Primary, Secondary & Sampling)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 3.2 Market Research',
    youtubeId: '9j-UsKUowyA',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:00',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Market Orientation & Primary Research Methods', cardId: 'igcse-bus-3-2-c1' },
      { time: '4:20', seconds: 260, label: 'Secondary Research & Quantitative vs Qualitative', cardId: 'igcse-bus-3-2-c2' },
      { time: '8:40', seconds: 520, label: 'Sampling Methods & Data Accuracy', cardId: 'igcse-bus-3-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-2-c1',
        title: 'Market Orientation & Primary (Field) Research Methods',
        summary: 'Gathering original first-hand customer insights via questionnaires, interviews, focus groups, and observation.',
        bullets: [
          'A **market-orientated** business runs **market research** BEFORE developing a product, often starting with **primary research** (original first-hand data collected directly for its specific need).',
        ],
        subsections: [
          {
            heading: 'Four Primary Research Tools',
            bullets: [
              '**Questionnaires & online surveys** - reach large numbers cheaply to produce **quantitative** statistics (e.g. 68% prefer recyclable bottles), though poorly worded or leading questions distort results and response rates can be low.',
              '**Interviews & Focus groups** - 6–10 target shoppers discussing prototypes deliver rich **qualitative** reasons ("why they dislike the packaging"), though expensive, time-consuming, and vulnerable to one dominant voice swaying the group.',
              '**Observation** - watching real shopper behaviour in stores (footfall, shelf dwell time) avoids dishonest answers, but never explains WHY customers walked past.',
            ],
            exampleHeading: 'Case study: Testing a plant-based burger',
            examples: [
              'A fast-food chain runs 3 focus groups (30 diners) for $2,500 to refine spice levels before risking $400,000 on a national menu rollout.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'market-orientated', definition: 'Business approach that carries out market research into consumer wants before designing and producing a product.' },
          { term: 'primary research', definition: 'Collection and collation of original, first-hand data via direct contact with potential or existing customers.' },
        ],
      },
      {
        id: 'igcse-bus-3-2-c2',
        title: 'Secondary (Desk) Research: Internal vs External Sources',
        summary: 'Leveraging low-cost existing records, government statistics, and industry reports before field spend.',
        bullets: [
          '**Secondary research** analyses existing data already gathered by internal company records or external bodies — fast and inexpensive, yet potentially outdated or accessible to every competitor.',
        ],
        subsections: [
          {
            heading: 'Internal vs External Secondary Sources',
            bullets: [
              '**Internal sources** - past sales records, loyalty-card purchase histories, customer complaint logs, and accounting statements (free, private, highly relevant to current customers).',
              '**External sources** - government population census, trade association reports, Mintel market intelligence reports, newspapers, and competitor websites (broad market sizing, though may not fit a niche startup’s exact question).',
            ],
            exampleHeading: 'Worked example: Calculating response rate & market size',
            examples: [
              'Government census data shows 80,000 households in a region. An online survey sent to 1,000 households receives 250 replies (25% response rate), of whom 40% (100 households) want organic veg boxes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Secondary research', definition: 'Use of existing information that has already been collected and is available for use by others.' },
        ],
        memoryAid: 'Primary = Fresh, Focused, Pricey; Secondary = Speedy, Cheap, Shared!',
      },
      {
        id: 'igcse-bus-3-2-c3',
        title: 'Sampling Methods, Presenting Data & Accuracy Limits',
        summary: 'Weighing random vs quota sampling, presenting data clearly, and diagnosing bias or small samples.',
        bullets: [
          'Because surveying an entire population is too expensive, researchers survey a **sample** using **random sampling** or **quota sampling** and present results via bar charts, pie charts, or tables.',
        ],
        subsections: [
          {
            heading: 'Random vs Quota Sampling & Accuracy Pitfalls',
            bullets: [
              '**Random sample** - every person in the population has an equal chance of selection (eliminates selection bias, yet may accidentally survey people who never buy the product).',
              '**Quota sample** - selects fixed numbers matching target traits (e.g. 60% teens, 40% parents — guarantees relevant respondents, though interviewer choice introduces bias).',
              '**Why research can be inaccurate** - tiny sample sizes, leading/ambiguous questions, interviewer bias, respondents giving socially acceptable lies, and outdated secondary figures in fast-moving markets.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'quota sampling', definition: 'Selecting respondents based on specific target characteristics (such as age or income) in fixed proportions.' },
        ],
        commonMistake: 'Students often declare that Primary research is always superior to Secondary research. Smart businesses run cheap SECONDARY research FIRST to assess overall market trends, then run focused PRIMARY research to test their exact product!',
      },
    ],
    keyTerms: [
      { term: 'Market-orientated business', definition: 'Business whose decisions are driven by researching customer needs before producing goods.' },
      { term: 'Primary research', definition: 'Gathering original first-hand data directly from customers for a specific business objective.' },
      { term: 'Secondary research', definition: 'Using existing information previously collected from internal records or external sources.' },
      { term: 'Quota sample', definition: 'Sample chosen to mirror specific target population traits such as age group or gender.' },
    ],
    checklistPoints: [
      'Contrast product-orientated and market-orientated approaches and compare primary vs secondary research.',
      'Evaluate questionnaires, interviews, focus groups, and observation for quantitative vs qualitative data.',
      'Compare random vs quota sampling and diagnose four factors that make market research inaccurate.',
    ],
  },

  'igcse-bus-3-3': {
    subtopicId: 'igcse-bus-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Marketing Mix: Product, Branding & Product Life Cycle',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 3.3.1 Marketing mix - Product',
    youtubeId: 'DNoEHkNSE6s',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:40',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'New Product Development, USP & Branding', cardId: 'igcse-bus-3-3-c1' },
      { time: '4:15', seconds: 255, label: 'Role of Packaging in the Marketing Mix', cardId: 'igcse-bus-3-3-c2' },
      { time: '8:20', seconds: 500, label: 'Product Life Cycle & Extension Strategies', cardId: 'igcse-bus-3-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-3-c1',
        title: 'Product Development, USP & Brand Image',
        summary: 'Creating a unique selling point and powerful brand loyalty to command premium prices.',
        bullets: [
          '**Product** is the core of the 4 Ps: developing a **Unique Selling Point (USP)** and strong **brand image** differentiates a firm from rivals and makes demand less price-sensitive.',
        ],
        subsections: [
          {
            heading: 'Developing New Products & Building a Brand',
            bullets: [
              '**New product development stages** - generate ideas -> screen best ideas -> test market feasibility -> build prototype -> test market launch -> full commercial launch (costly R&D, yet vital to beat rivals and replace declining lines).',
              '**Power of brand image & loyalty** - an iconic logo, name, and consistent quality assure consumers of reliability, create repeat **brand loyalty**, ease entry of new product lines, and justify higher selling prices.',
            ],
            exampleHeading: 'Case study: Brand premium on athletic trainers',
            examples: [
              'An unbranded running shoe costing $18 to manufacture sells for $30 ($12 added value), whereas an iconic global sportswear brand sells a comparable shoe for $110 ($92 added value) due to brand image.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Unique Selling Point (USP)', definition: 'A distinct feature of a product that sets it apart from competitors and persuades customers to buy.' },
          { term: 'brand image', definition: 'An identity given to a product that distinguishes it from competitors’ products in consumers’ minds.' },
        ],
      },
      {
        id: 'igcse-bus-3-3-c2',
        title: 'The Multi-Functional Role of Packaging',
        summary: 'Protecting goods in transit, displaying legal info, boosting convenience, and reinforcing brand appeal.',
        bullets: [
          'Effective **packaging** serves both practical protection and promotional persuasion right at the retail shelf.',
        ],
        subsections: [
          {
            heading: 'Four Jobs of Great Packaging',
            bullets: [
              '**Protect & preserve** - prevents breakage during shipping and keeps food hygienic and fresh for longer.',
              '**Inform & comply legally** - displays ingredients, allergy warnings, nutrition panels, barcodes, and usage instructions.',
              '**Promote brand & add convenience** - distinctive colours/shapes catch the eye in crowded aisles, while resealable pouches or pump dispensers add convenience (increasing added value); eco-friendly biodegradable packs increasingly attract green buyers.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'packaging', definition: 'The physical container or wrapping for a product, used for protection, legal information, convenience, and promotion.' },
        ],
      },
      {
        id: 'igcse-bus-3-3-c3',
        title: 'The Product Life Cycle & Extension Strategies',
        summary: 'Tracking sales across all five PLC stages and deploying extension strategies before decline hits.',
        diagram: 'product-life-cycle',
        bullets: [
          'Every product moves through the **Product Life Cycle (PLC)**: **Development -> Introduction -> Growth -> Maturity -> Decline**, guiding pricing and promotion decisions at every stage.',
        ],
        subsections: [
          {
            heading: 'How Marketing Adapts Across Stages & Extension Tactics',
            bullets: [
              '**Introduction & Growth** - Development earns $0 sales with high R&D outflow; Introduction has slow sales and heavy informative ads; Growth sees rapidly rising sales, emerging rivals, and turning profitable.',
              '**Maturity & Decline** - Maturity hits peak sales with intense competition (shift to persuasive brand ads and competitive pricing); Decline brings falling sales as tastes shift or newer tech arrives.',
              '**Extension strategies (launched during Maturity)** - introduce new flavours/features, enter new overseas markets, redesign packaging, discover new uses for the product, or launch fresh promotional campaigns to prolong profitable sales.',
            ],
            exampleHeading: 'Worked example: Soft-drink extension strategy',
            examples: [
              'When annual sales of FizzyCola plateaued at 10 million cans in Maturity, launching a Zero-Sugar Lime edition and exporting to 3 new countries lifted annual sales by 22% to 12.2 million cans.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Product Life Cycle (PLC)', definition: 'The stages a product passes through over its lifetime: development, introduction, growth, maturity, and decline.' },
          { term: 'Extension strategies', definition: 'Actions taken during maturity to prolong the profitable life of a product before sales fall into decline.' },
        ],
        memoryAid: 'PLC Stages: Dogs In Gardens Munch Daisies (Development, Introduction, Growth, Maturity, Decline)!',
        commonMistake: 'Students often wait until the Decline stage to recommend an extension strategy. In reality, businesses launch extension strategies during MATURITY — before sales collapse and brand loyalty evaporates!',
      },
    ],
    keyTerms: [
      { term: 'Unique Selling Point (USP)', definition: 'Special feature distinguishing a product from rivals.' },
      { term: 'Brand image', definition: 'Unique name, design, and reputation separating a product from competitors.' },
      { term: 'Product life cycle', definition: 'Stages a product moves through from R&D to withdrawal: development, introduction, growth, maturity, decline.' },
      { term: 'Extension strategy', definition: 'Way of keeping a product at the maturity stage of its life cycle to extend profitable sales.' },
    ],
    checklistPoints: [
      'Explain the benefits and costs of developing new products with a clear USP and strong brand image.',
      'Analyse the protective, legal, promotional, and environmental roles of packaging.',
      'Interpret the Product Life Cycle diagram and recommend suitable extension strategies in context.',
    ],
  },

  'igcse-bus-3-4': {
    subtopicId: 'igcse-bus-3-4',
    subtopicCode: '3.4',
    subtopicTitle: 'Marketing Mix: Pricing Strategies & Price Elasticity',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 3.3.2 Marketing mix - Price',
    youtubeId: 'ZdKIwYTZucQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:55',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Cost-Plus, Competitive & Promotional Pricing', cardId: 'igcse-bus-3-4-c1' },
      { time: '4:15', seconds: 255, label: 'Price Skimming, Penetration & Dynamic Pricing', cardId: 'igcse-bus-3-4-c2' },
      { time: '8:35', seconds: 515, label: 'Price Elasticity of Demand (PED) & Revenue', cardId: 'igcse-bus-3-4-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-4-c1',
        title: 'Cost-Plus, Competitive & Promotional Pricing',
        summary: 'Setting prices from unit cost mark-ups, matching competitors, or discounting briefly to clear stock.',
        bullets: [
          'Businesses choose a pricing method based on production costs, competitor prices, product uniqueness, and stage in the Product Life Cycle.',
        ],
        subsections: [
          {
            heading: 'Three Core Day-to-Day Pricing Methods',
            bullets: [
              '**Cost-plus pricing** - calculates average unit cost and adds a fixed % mark-up: easy to apply and ensures every unit sold covers costs, yet ignores competitor prices and can price the firm out of the market if rivals are cheaper.',
              '**Competitive pricing** - matches or slightly undercuts rivals’ prices in crowded markets: avoids price wars and keeps sales steady, though requires research and squeezes margins if the firm’s costs are higher.',
              '**Promotional pricing** - temporarily cuts price below normal (e.g. seasonal clearance sales or loss-leaders) to shift unsold inventory or revive a flagging product, though lowers short-term margin and may cheapen brand image if overused.',
            ],
            exampleHeading: 'Worked example: Cost-plus pricing calculation',
            examples: [
              'A backpack factory makes 2,000 bags at $30,000 total cost -> Unit cost = $30,000 ÷ 2,000 = $15.',
              'With an 80% mark-up, Selling price = $15 × 1.80 = $27 per backpack.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Cost-plus pricing', definition: 'Setting price by adding a fixed percentage profit mark-up to the average cost of producing each unit.' },
          { term: 'Promotional pricing', definition: 'Temporarily selling a product at a low price for a set period to clear stock or attract shoppers.' },
        ],
      },
      {
        id: 'igcse-bus-3-4-c2',
        title: 'Launch & Flexible Strategies: Skimming, Penetration & Dynamic',
        summary: 'Launching high on unique tech, launching low in crowded markets, and adjusting prices in real time.',
        bullets: [
          'For brand-new products, managers pick between **price skimming** and **penetration pricing**, while online platforms increasingly deploy **dynamic pricing**.',
        ],
        subsections: [
          {
            heading: 'Skimming vs Penetration vs Dynamic Pricing',
            bullets: [
              '**Price skimming** - sets a high initial price for an innovative, patented product (e.g. new VR headset): rapidly recovers heavy R&D costs and signals luxury prestige, though high margins attract competitors and exclude budget buyers.',
              '**Penetration pricing** - launches at a deliberately low price to break into a crowded market and build market share rapidly; wins quick trial purchases, but earns tiny initial profit and customers may resist later price hikes.',
              '**Dynamic pricing** - adjusts prices in real time as demand shifts (airlines, ride-hailing apps, hotels): maximises revenue at peak times and fills spare capacity off-peak, yet risks frustrating loyal buyers if surge fees look unfair.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price skimming', definition: 'Setting a high launch price for a unique new product to maximise profit from early adopters and recover R&D costs.' },
          { term: 'penetration pricing', definition: 'Setting a low initial price to break into a competitive market quickly and win market share.' },
        ],
        memoryAid: 'Skimming = Sky-high launch (unique tech); Penetration = Pocket-friendly launch (crowded market)!',
      },
      {
        id: 'igcse-bus-3-4-c3',
        title: 'Price Elasticity of Demand (PED) & Total Revenue',
        summary: 'Predicting whether raising or cutting price increases total revenue using elastic vs inelastic curves.',
        diagram: 'elasticity-curves',
        bullets: [
          '**Price Elasticity of Demand (PED)** measures how responsive quantity demanded is to a change in price: `PED = % change in quantity demanded ÷ % change in price`.',
        ],
        subsections: [
          {
            heading: 'Elastic vs Inelastic Demand Revenue Test',
            bullets: [
              '**Price Elastic Demand (|PED| > 1, flat curve)** - occurs when many close substitutes exist (e.g. standard bottled water): a 10% price RISE causes a larger % drop in quantity (e.g. −25%), so **total revenue FALLS**. Cutting price boosts revenue.',
              '**Price Inelastic Demand (|PED| < 1, steep curve)** - occurs for necessities, addictive goods, or iconic brands with few substitutes (e.g. insulin, commuter rail, luxury flagship phones): a 10% price RISE causes a smaller % drop in quantity (e.g. −3%), so **total revenue RISES**.',
            ],
            exampleHeading: 'Worked example: Revenue impact of a 10% price rise',
            examples: [
              'Elastic cola brand: raises price from $2.00 to $2.20 (+10%); sales drop 25% from 1,000 to 750 cans -> Revenue falls from $2,000 to $1,650 (−$350).',
              'Inelastic specialty medicine: raises price from $20 to $22 (+10%); sales fall just 2% from 1,000 to 980 packs -> Revenue rises from $20,000 to $21,560 (+$1,560).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Price Elasticity of Demand (PED)', definition: 'A measure of the responsiveness of quantity demanded to a percentage change in price.' },
        ],
        commonMistake: 'Students often assume raising selling price ALWAYS increases revenue. Check the elasticity diagram: if demand is PRICE ELASTIC (lots of close substitutes), raising price shrinks total revenue because customers flee to rivals!',
      },
    ],
    keyTerms: [
      { term: 'Cost-plus pricing', definition: 'Adding a percentage profit mark-up to average unit cost to determine selling price.' },
      { term: 'Price skimming', definition: 'Charging a high initial price for an innovative product with few rivals.' },
      { term: 'Penetration pricing', definition: 'Charging a low initial price to attract customers and capture market share fast.' },
      { term: 'Price elasticity of demand', definition: 'Degree to which quantity demanded responds to a change in price.' },
    ],
    checklistPoints: [
      'Calculate cost-plus prices and evaluate competitive, promotional, skimming, penetration, and dynamic pricing.',
      'Interpret price elastic vs price inelastic demand curves on an elasticity diagram.',
      'Predict total revenue changes accurately when a business raises or lowers price under elastic vs inelastic PED.',
    ],
  },

  'igcse-bus-3-5': {
    subtopicId: 'igcse-bus-3-5',
    subtopicCode: '3.5',
    subtopicTitle: 'Marketing Mix: Place & Channels of Distribution',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 3.3.3 Marketing mix - Place',
    youtubeId: 'X61cboIrHUA',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:50',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Four Channels of Distribution Explained', cardId: 'igcse-bus-3-5-c1' },
      { time: '3:45', seconds: 225, label: 'Role of Wholesalers, Retailers & Agents', cardId: 'igcse-bus-3-5-c2' },
      { time: '7:15', seconds: 435, label: 'Factors Influencing Distribution Channel Choice', cardId: 'igcse-bus-3-5-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-5-c1',
        title: 'The Four Main Channels of Distribution',
        summary: 'Comparing direct-to-consumer sales against retailer, wholesaler, and overseas agent intermediaries.',
        bullets: [
          'A **channel of distribution** is the route a product takes from manufacturer to final consumer — each extra intermediary widens reach but takes a profit margin.',
        ],
        subsections: [
          {
            heading: 'Four Distribution Routes',
            bullets: [
              '**Channel 1: Producer -> Consumer (Direct)** - factory shops, e-commerce websites, or farmers’ markets: producer keeps 100% of profit margin and direct customer contact, but bears all delivery, storage, and marketing costs.',
              '**Channel 2: Producer -> Retailer -> Consumer** - ideal for big supermarket chains or electrical stores buying directly in bulk: cuts out wholesaler margin while giving wide high-street visibility.',
              '**Channel 3: Producer -> Wholesaler -> Retailer -> Consumer** - vital for everyday mass goods (crisps, toiletries) reaching thousands of tiny corner shops.',
              '**Channel 4: Producer -> Agent -> Wholesaler/Retailer -> Consumer** - used when exporting to unfamiliar foreign countries where a local **agent** knows language, customs, and retail contacts.',
            ],
            exampleHeading: 'Worked example: Margin impact of intermediaries',
            examples: [
              'A ceramic mug sells for $12 retail. Direct online sales earn the factory $12 minus $3 postage = $9 net; via a wholesaler ($2 cut) and retailer ($4 cut), the factory receives $6 per mug — yet sells 5× higher volume nationwide.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'channel of distribution', definition: 'The means by which a product is passed from the place of production to the customer.' },
          { term: 'agent', definition: 'An independent person or business appointed to deal with sales and distribution in an unfamiliar or overseas market.' },
        ],
      },
      {
        id: 'igcse-bus-3-5-c2',
        title: 'The Economic Role of Wholesalers & Retailers',
        summary: 'Breaking bulk, holding warehouse stock, offering trade credit, and displaying goods to shoppers.',
        bullets: [
          'Although intermediaries add a mark-up that raises retail prices, **wholesalers** and **retailers** slash transport and storage costs for producers.',
        ],
        subsections: [
          {
            heading: 'What Wholesalers Do ("Breaking Bulk")',
            bullets: [
              '**Breaking bulk** - buys massive lorry loads from manufacturers and splits them into small cases suitable for independent corner shops.',
              '**Storage, transport & trade credit** - frees factory warehouse space, delivers mixed brands in one van drop, gives small retailers 30-day trade credit, and relays market trends back to producers.',
              '**Drawbacks of wholesalers** - slower delivery (bad for perishable fresh food), higher final price due to extra profit margin, and manufacturer loses direct control over how its brand is displayed.',
            ],
            exampleHeading: 'Case study: Snack maker reaching 3,000 corner shops',
            examples: [
              'Instead of running 3,000 tiny van deliveries each week, CrunchCo delivers 12 full pallets to 4 regional wholesalers, cutting its distribution costs by 45%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Breaking bulk', definition: 'Wholesaler function of buying goods in huge quantities from producers and selling smaller batches to retailers.' },
        ],
        memoryAid: 'Short channel = High control & freshness; Long channel = Wide reach & bulk storage!',
      },
      {
        id: 'igcse-bus-3-5-c3',
        title: 'Choosing the Optimal Distribution Channel',
        summary: 'Matching channel length to product perishability, technical complexity, price, and buyer location.',
        bullets: [
          'Selecting the wrong distribution channel ruins the whole marketing mix — luxury goods sold in discount stalls destroy brand prestige, while fresh fish sent through slow wholesalers spoils.',
        ],
        subsections: [
          {
            heading: 'Five Key Channel Selection Factors',
            bullets: [
              '**Perishability** - fresh bread, flowers, and milk need very short channels (Producer -> Consumer or Producer -> Retailer) to stay fresh.',
              '**Technical complexity & price** - custom industrial turbines or luxury jewellery require direct specialist sales staff or exclusive boutiques to explain features and preserve prestige.',
              '**Purchase frequency & geography** - low-price everyday items (soap, snacks) need long wide channels via wholesalers so every corner shop stocks them; overseas sales often rely on local agents or global e-commerce.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'intermediary', definition: 'A middleman such as a wholesaler, retailer, or agent that links producers to final consumers.' },
        ],
        commonMistake: 'Students often assume Direct (Producer -> Consumer) is always the cheapest or best channel. Direct shipping thousands of individual small orders to scattered buyers can cost FAR more in postage and warehousing than shipping bulk pallets to a wholesaler!',
      },
    ],
    keyTerms: [
      { term: 'Channel of distribution', definition: 'Route by which a product travels from producer to final customer.' },
      { term: 'Wholesaler', definition: 'Intermediary that buys in bulk from manufacturers, stores inventory, and sells smaller lots to retailers.' },
      { term: 'Breaking bulk', definition: 'Splitting huge factory deliveries into smaller quantities that independent retailers can afford.' },
      { term: 'Agent', definition: 'Specialist intermediary connecting an exporter to buyers and retailers in a foreign market.' },
    ],
    checklistPoints: [
      'Compare all four channels of distribution (direct, retailer, wholesaler, and overseas agent).',
      'Explain the benefits and limitations of using wholesalers ("breaking bulk") and retailers.',
      'Recommend the best distribution channel in context using perishability, complexity, price, and location.',
    ],
  },

  'igcse-bus-3-6': {
    subtopicId: 'igcse-bus-3-6',
    subtopicCode: '3.6',
    subtopicTitle: 'Marketing Mix: Promotion, Advertising & E-Commerce',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 3.3.4 Marketing mix - Promotion',
    youtubeId: 'Wtiehm3wIis',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:20',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Aims of Promotion & Advertising Media', cardId: 'igcse-bus-3-6-c1' },
      { time: '4:30', seconds: 270, label: 'Sales Promotion Incentives & Marketing Budget', cardId: 'igcse-bus-3-6-c2' },
      { time: '9:00', seconds: 540, label: 'Social Media Marketing & E-Commerce Trade-Offs', cardId: 'igcse-bus-3-6-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-6-c1',
        title: 'Aims of Promotion & Informative vs Persuasive Advertising',
        summary: 'Informing launch buyers, persuading against rivals, and choosing cost-effective advertising media.',
        bullets: [
          '**Promotion** informs customers about new launches, persuades them to choose the brand over rivals, and builds long-term brand image through **advertising** and **sales promotion**.',
        ],
        subsections: [
          {
            heading: 'Informative vs Persuasive Advertising & Media Choice',
            bullets: [
              '**Informative vs Persuasive** - Informative advertising gives factual details about a brand-new product (price, features, availability); Persuasive advertising creates emotional desire ("our brand makes life better") in mature competitive markets.',
              '**Selecting media** - TV reaches millions visually (very expensive, wasted on tiny niches); local newspapers/radio suit small local firms cheaply; billboards build commuter repetition; targeted social media ads reach precise age/interest segments at low cost.',
            ],
            exampleHeading: 'Worked example: Cost-per-thousand reach comparison',
            examples: [
              'A local gym has a $1,200 marketing budget: a 30-second national TV spot costs $45,000 (unaffordable and wasted nationally), whereas geo-targeted social ads reach 60,000 local residents at $20 per 1,000 views.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Informative advertising', definition: 'Advertising focused on giving full factual information about a product’s features and price, often at launch.' },
          { term: 'Persuasive advertising', definition: 'Advertising aimed at convincing consumers that they need a specific brand rather than rivals.' },
        ],
      },
      {
        id: 'igcse-bus-3-6-c2',
        title: 'Sales Promotion Tactics & Managing the Marketing Budget',
        summary: 'Creating instant short-term sales boosts through discounts, BOGOF, samples, loyalty cards, and PR.',
        bullets: [
          'While advertising builds long-term brand awareness, **sales promotion** offers short-term incentives that trigger immediate purchases and trial.',
        ],
        subsections: [
          {
            heading: 'Key Sales Promotions & Budget Discipline',
            bullets: [
              '**Six sales promotion tools** - price reductions/coupons, Buy-One-Get-One-Free (BOGOF), free samples (great for new food launches), competitions/gifts, point-of-sale displays, and loyalty reward cards (encouraging repeat visits).',
              '**Marketing budget** - a financial plan setting the maximum promotional spend for a product/period; managers measure whether extra sales revenue exceeds the promotional cost (cost-effectiveness).',
            ],
            exampleHeading: 'Worked example: Checking promotional cost-effectiveness',
            examples: [
              'A café spends $500 on 2-for-1 pastry vouchers. Extra gross profit earned from voucher redemptions is $1,350 -> Net promotional gain = +$850 (cost-effective!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sales promotion', definition: 'Short-term incentives (such as vouchers, BOGOF, free samples, or loyalty points) designed to stimulate immediate sales.' },
          { term: 'Marketing budget', definition: 'A financial plan allocating the maximum funds available for marketing activities over a specified time period.' },
        ],
        memoryAid: 'Advertising = Long-term Awareness; Sales Promotion = Short-term Spike!',
      },
      {
        id: 'igcse-bus-3-6-c3',
        title: 'Social Media Marketing & E-Commerce (Technology in Marketing)',
        summary: 'Weighing 24/7 global online storefronts and viral campaigns against returns, security, and rivals.',
        bullets: [
          '**E-commerce** (buying and selling over the internet) and **social media marketing** let even tiny startups sell globally 24/7 without paying prime high-street rent.',
        ],
        subsections: [
          {
            heading: 'Benefits & Drawbacks of E-Commerce & Social Media',
            bullets: [
              '**E-commerce pros for businesses & buyers** - 24/7 global reach, lower shop rent/staff overheads, instant price updates, and convenient home delivery; **cons** include website/cybersecurity costs, packaging/shipping and high clothing return rates, inability to touch/try goods, and instant online price comparison.',
              '**Social media pros & cons** - ultra-cheap targeted ads, viral sharing, and direct two-way feedback with followers; however, negative customer reviews go viral rapidly, ad-blockers hide ads, and older target demographics may be missed.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'E-commerce', definition: 'The online buying and selling of goods and services using computer networks and the internet.' },
        ],
        commonMistake: 'Students often describe BOGOF vouchers or free samples as "advertising". Never mix them up: TV/billboards/online banners are ADVERTISING; temporary buyer incentives like coupons, free samples, and BOGOF are SALES PROMOTION!',
      },
    ],
    keyTerms: [
      { term: 'Informative advertising', definition: 'Advertising providing factual details about a product, especially at launch.' },
      { term: 'Sales promotion', definition: 'Short-term buyer incentives such as discounts, vouchers, free samples, and loyalty schemes.' },
      { term: 'Marketing budget', definition: 'Pre-set financial allocation limiting marketing expenditure over a time period.' },
      { term: 'E-commerce', definition: 'Conducting the buying and selling of goods and services electronically over the internet.' },
    ],
    checklistPoints: [
      'Distinguish informative vs persuasive advertising and select suitable media for a target audience.',
      'Compare sales promotion methods and assess promotional cost-effectiveness against a marketing budget.',
      'Evaluate the opportunities and threats of social media marketing and e-commerce for firms and consumers.',
    ],
  },

  'igcse-bus-3-7': {
    subtopicId: 'igcse-bus-3-7',
    subtopicCode: '3.7',
    subtopicTitle: 'Marketing Strategy, Legal Controls & Foreign Markets',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 3.4 Marketing strategy',
    youtubeId: '5MXgAIASVlE',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:05',
    courseMatchSummary: 'Full chapter coverage aligned to Cambridge IGCSE Business Studies (0450 / 0264)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Coordinating a Consistent Marketing Strategy', cardId: 'igcse-bus-3-7-c1' },
      { time: '4:05', seconds: 245, label: 'Legal Controls Protecting Consumers', cardId: 'igcse-bus-3-7-c2' },
      { time: '8:00', seconds: 480, label: 'Entering Foreign Markets: Opportunities, Risks & Solutions', cardId: 'igcse-bus-3-7-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-7-c1',
        title: 'Building a Coherent Marketing Strategy (Aligning the 4 Ps)',
        summary: 'Combining Product, Price, Place, and Promotion to hit clear marketing objectives without contradictions.',
        bullets: [
          'A **marketing strategy** is a coordinated plan combining all four Ps to achieve a specific goal — such as launching a new product, raising market share by 5%, or entering a new segment.',
        ],
        subsections: [
          {
            heading: 'Why Consistency Across the 4 Ps Matters',
            bullets: [
              '**Matching the target segment** - a luxury Swiss watch needs premium materials (Product), price skimming (Price), exclusive flagship boutiques (Place), and glossy magazine sponsorships (Promotion). Selling it in a bargain warehouse would ruin its brand image.',
              '**Aligning with budget & objectives** - a small startup targeting rapid awareness in a competitive snacks market pairs penetration pricing with free in-store samples and targeted social media reels.',
            ],
            exampleHeading: 'Case study: Integrated 4 Ps for an eco-bottle launch',
            examples: [
              'HydroPure targets university students: Product = insulated recycled-steel bottle; Price = $18 penetration price; Place = campus bookstores & Instagram shop; Promotion = student influencer codes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'marketing strategy', definition: 'A long-term plan combining the 4 Ps of the marketing mix to achieve specific marketing objectives.' },
        ],
        memoryAid: 'Every P must tell the SAME story: Luxury Product = High Price + Exclusive Place + Prestige Promotion!',
      },
      {
        id: 'igcse-bus-3-7-c2',
        title: 'Legal Controls on Marketing & Consumer Protection',
        summary: 'How laws against misleading claims, faulty goods, and unfair pricing protect buyers and constrain firms.',
        bullets: [
          'Governments enforce **consumer protection laws** because individual shoppers lack the technical knowledge and legal power to challenge large corporations alone.',
        ],
        subsections: [
          {
            heading: 'Key Legal Controls & Impact on Businesses',
            bullets: [
              '**Core protections** - goods must match their description and be fit for purpose/safe (no faulty electronics), weights and measures must be accurate, adverts cannot make false claims (e.g. fake "half-price" sales), and online shoppers have cooling-off return rights.',
              '**Business impact** - complying raises quality-testing, legal-review, and product-recall costs, yet builds customer trust and prevents crippling court fines or forced product bans.',
            ],
            exampleHeading: 'Worked example: Cost of violating advertising law',
            examples: [
              'A cosmetics firm fined $85,000 for false "100% organic" claims also spent $120,000 reprinting packaging and suffered a 15% drop in quarterly sales due to bad press.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'consumer protection laws', definition: 'Government regulations ensuring goods are safe, accurately described, fair in weight, and honestly advertised.' },
        ],
      },
      {
        id: 'igcse-bus-3-7-c3',
        title: 'Entering New Foreign Markets: Opportunities, Problems & Solutions',
        summary: 'Evaluating overseas growth potential against cultural, legal, and tariff barriers — and overcoming them.',
        bullets: [
          'Expanding into **foreign markets** unlocks rapid growth when home markets saturate, yet exposes firms to cultural, linguistic, legal, currency, and trade-barrier hurdles.',
        ],
        subsections: [
          {
            heading: 'Problems of Foreign Expansion & Proven Entry Methods',
            bullets: [
              '**Key challenges** - lack of local market knowledge, language/cultural taboos (brand names or food recipes that fail locally), extra shipping/tariff costs, different safety laws, and exchange-rate risk.',
              '**Four ways to overcome barriers** - form a **joint venture** with a local company (shares local insight & costs), **licence** local firms to manufacture the brand, sell via **international franchising**, or hire a local **agent** and adapt the 4 Ps (**localisation**, e.g. adapting fast-food menus to local dietary customs).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'localisation', definition: 'Adapting a product, packaging, pricing, or advertising campaign to fit local cultural tastes and laws in a foreign market.' },
        ],
        commonMistake: 'Students often recommend selling the exact same home-country product and advert overseas without change. Ignoring local tastes, languages, or religious/dietary customs is one of the fastest ways for international expansion to fail!',
      },
    ],
    keyTerms: [
      { term: 'Marketing strategy', definition: 'Coordinated plan aligning Product, Price, Place, and Promotion to meet a marketing objective.' },
      { term: 'Consumer protection law', definition: 'Legislation safeguarding shoppers from unsafe products, faulty goods, and misleading advertising.' },
      { term: 'Licensing', definition: 'Granting a foreign firm legal permission to manufacture and sell a brand’s products in return for a fee.' },
      { term: 'Localisation', definition: 'Modifying products and marketing campaigns to suit cultural preferences and regulations in overseas markets.' },
    ],
    checklistPoints: [
      'Design a consistent 4 Ps marketing strategy tailored to a specific objective and target market.',
      'Explain why governments enact consumer protection laws and evaluate their cost and trust impacts on firms.',
      'Analyse opportunities and barriers in foreign markets and recommend joint ventures, franchising, licensing, or agents.',
    ],
  },
};

export const IGCSE_BUS_QUIZZES_1_TO_3: QuizQuestion[] = [
  // ---- 1.1 Business Activity, Scarcity & Added Value (5) ----
  {
    id: 'igbus-q-11-1',
    subtopicId: 'igcse-bus-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A café buys coffee beans, milk, and a cup for $0.90 and sells each latte for $4.10. What is the added value per latte?',
    options: ['$5.00', '$3.20', '$4.10', '$0.90'],
    correctIndex: 1,
    explanation: 'Added value = Selling price ($4.10) − Cost of bought-in materials ($0.90) = $3.20.',
  },
  {
    id: 'igbus-q-11-2',
    subtopicId: 'igcse-bus-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statement on scarcity and the four factors of production.',
    segments: ['Unlimited wants versus scarce resources force choices whose next best alternative foregone is the ', '; combining land, labour, and capital by taking risk is ', '.'],
    wordBank: ['opportunity cost', 'enterprise', 'added value', 'division'],
    answers: ['opportunity cost', 'enterprise'],
    explanation: 'Scarcity creates opportunity cost, and enterprise is the risk-taking factor that combines land, labour, and capital.',
  },
  {
    id: 'igbus-q-11-3',
    subtopicId: 'igcse-bus-1-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each input example to the correct factor of production.',
    pairs: [
      { left: 'Coal deposits, farmland, and timber', right: 'Land' },
      { left: 'Factory machinery, delivery trucks, and ovens', right: 'Capital' },
      { left: 'Trained engineers and shop assistants', right: 'Labour' },
      { left: 'Risk-taking founder launching a new startup', right: 'Enterprise' },
    ],
    explanation: 'The four factors of production (C-E-L-L) are Capital, Enterprise, Land, and Labour.',
  },
  {
    id: 'igbus-q-11-4',
    subtopicId: 'igcse-bus-1-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO valid ways a handmade chocolate brand can increase its Added Value.',
    options: [
      'Create luxury gift packaging and stronger branding to charge a higher selling price',
      'Buy cocoa beans in bulk from suppliers to lower raw material costs without hurting quality',
      'Double monthly shop rent payments',
      'Increase hourly wages paid to factory packers',
    ],
    correctIndices: [0, 1],
    explanation: 'Added value rises either by raising selling price (branding, packaging, quality, convenience) or cutting bought-in material costs.',
  },
  {
    id: 'igbus-q-11-5',
    subtopicId: 'igcse-bus-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why Added Value is NOT the same as Profit.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Added value is only selling price minus bought-in raw material costs, whereas profit is only left after deducting all other operating expenses such as wages, rent, and utilities.',
      markPoints: [
        { id: 'mp1', markDescription: 'Added value deducts only bought-in materials/components from selling price', requiredKeywordGroups: [['material', 'component', 'selling price']] },
        { id: 'mp2', markDescription: 'Other operating expenses (wages, rent, bills) must still be paid before profit', requiredKeywordGroups: [['wage', 'rent', 'expense', 'overhead', 'other cost']] },
      ],
    },
    explanation: 'Added value covers materials only; wages, rent, marketing, and energy bills must still be paid before reaching profit.',
  },

  // ---- 1.2 Classification of Businesses & Economic Sectors (5) ----
  {
    id: 'igbus-q-12-1',
    subtopicId: 'igcse-bus-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which sequence shows a correct Primary -> Secondary -> Tertiary chain of production?',
    options: [
      'Retail shop -> Car assembly factory -> Iron ore mine',
      'Wheat farm -> Flour and bread factory -> Supermarket',
      'Commercial bank -> Oil refinery -> Fishing trawler',
      'Hotel chain -> Construction firm -> Timber mill',
    ],
    correctIndex: 1,
    explanation: 'Wheat farming extracts raw materials (Primary), baking manufactures goods (Secondary), and supermarkets sell services (Tertiary).',
  },
  {
    id: 'igbus-q-12-2',
    subtopicId: 'igcse-bus-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the summary of de-industrialisation and mixed economies.',
    segments: ['A decline in the importance of secondary manufacturing in a developed country is called ', ', and an economy with both private firms and government enterprises is a ', ' economy.'],
    wordBank: ['de-industrialisation', 'mixed', 'privatisation', 'tertiary'],
    answers: ['de-industrialisation', 'mixed'],
    explanation: 'Developed economies undergo de-industrialisation toward services, and almost all countries operate mixed economies.',
  },
  {
    id: 'igbus-q-12-3',
    subtopicId: 'igcse-bus-1-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each organisation to its correct industrial or ownership sector.',
    pairs: [
      { left: 'Copper mining & deep-sea fishing', right: 'Primary sector' },
      { left: 'Smartphone assembly & bridge construction', right: 'Secondary sector' },
      { left: 'Airlines, insurance & retail stores', right: 'Tertiary sector' },
      { left: 'State-run national hospital service', right: 'Public sector' },
    ],
    explanation: 'Primary extracts natural resources, Secondary manufactures/builds, Tertiary delivers services, and government bodies belong to the public sector.',
  },
  {
    id: 'igbus-q-12-4',
    subtopicId: 'igcse-bus-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO common causes of de-industrialisation in high-income developed countries.',
    options: [
      'Rising consumer incomes shift spending toward leisure, finance, and hospitality services',
      'Lower-cost newly industrialising nations outcompete domestic factories on price',
      'Citizens stop buying food, clothing, and household goods completely',
      'Governments legally outlaw all tertiary service businesses',
    ],
    correctIndices: [0, 1],
    explanation: 'Higher incomes fuel service demand while cheaper overseas manufacturing shrinks domestic secondary-sector employment.',
  },
  {
    id: 'igbus-q-12-5',
    subtopicId: 'igcse-bus-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give one potential benefit and one potential drawback of privatising a state-owned railway network.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Benefit: profit incentives and competition can improve efficiency, service speed, and raise cash for the government. Drawback: a private monopoly may raise ticket fares or cut unprofitable rural train routes.',
      markPoints: [
        { id: 'mp1', markDescription: 'Benefit: greater efficiency, competition, investment, or cash raised for government', requiredKeywordGroups: [['efficien', 'competition', 'invest', 'cash', 'revenue']] },
        { id: 'mp2', markDescription: 'Drawback: higher prices/fares or cutting unprofitable rural/social services', requiredKeywordGroups: [['price', 'fare', 'monopoly', 'rural', 'unprofitable', 'cut']] },
      ],
    },
    explanation: 'Privatisation can sharpen efficiency and raise state funds, but risks higher prices and reduced social-service routes.',
  },

  // ---- 1.3 Enterprise, Business Growth & Measuring Size (5) ----
  {
    id: 'igbus-q-13-1',
    subtopicId: 'igcse-bus-1-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the following is NOT a reliable measure of the SIZE of a business?',
    options: ['Number of employees', 'Value of annual sales', 'Capital employed', 'Annual profit earned'],
    correctIndex: 3,
    explanation: 'Profit measures financial performance, not size — a huge airline can make low profit or a loss during a downturn.',
  },
  {
    id: 'igbus-q-13-2',
    subtopicId: 'igcse-bus-1-3',
    type: 'matching',
    marks: 3,
    prompt: 'Match each merger example to its exact type of external integration.',
    pairs: [
      { left: 'Two competing supermarket chains merge', right: 'Horizontal integration' },
      { left: 'A chocolate factory buys a cocoa plantation', right: 'Backward vertical integration' },
      { left: 'A shoe manufacturer buys a chain of shoe shops', right: 'Forward vertical integration' },
      { left: 'A cinema group takes over a solar-panel maker', right: 'Conglomerate integration' },
    ],
    explanation: 'Horizontal = direct rival; Backward = supplier; Forward = customer/retailer; Conglomerate = unrelated industry.',
  },
  {
    id: 'igbus-q-13-3',
    subtopicId: 'igcse-bus-1-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the explanation of business planning and organic expansion.',
    segments: ['A written ', ' sets out objectives and cash-flow forecasts to persuade banks to lend, while expanding using retained profit to open new stores is ', ' growth.'],
    wordBank: ['business plan', 'internal', 'external', 'conglomerate'],
    answers: ['business plan', 'internal'],
    explanation: 'Business plans reduce startup risk and help secure loans; internal (organic) growth expands from within.',
  },
  {
    id: 'igbus-q-13-4',
    subtopicId: 'igcse-bus-1-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO valid reasons why many local hairdressers and florists choose to remain small businesses.',
    options: [
      'They operate in a small local market providing personalised customer service',
      'Owners want to keep full personal control without heavy borrowing or stress',
      'Governments prohibit hairdressers from hiring more than two employees',
      'Small businesses are legally exempt from paying any rent or utility bills',
    ],
    correctIndices: [0, 1],
    explanation: 'Industry type (personal service), local market size, and owner preferences for control are the main reasons firms stay small.',
  },
  {
    id: 'igbus-q-13-5',
    subtopicId: 'igcse-bus-1-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two common reasons why newly launched startup businesses fail within their first two years.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'New startups often fail due to poor cash-flow management (running out of working capital to pay rent and suppliers) and lack of management experience or weak market research leading to low sales against stronger rivals.',
      markPoints: [
        { id: 'mp1', markDescription: 'Poor cash-flow / lack of working capital or finance', requiredKeywordGroups: [['cash', 'working capital', 'finance', 'liquidity', 'overtrading']] },
        { id: 'mp2', markDescription: 'Poor management skills, weak market research, or fierce competition', requiredKeywordGroups: [['management', 'experience', 'research', 'competition', 'rival', 'plan']] },
      ],
    },
    explanation: 'Cash-flow shortages, poor planning/management experience, overtrading, and intense competition top startup failure causes.',
  },

  // ---- 1.4 Types of Business Organisations (5) ----
  {
    id: 'igbus-q-14-1',
    subtopicId: 'igcse-bus-1-4',
    type: 'mcq',
    marks: 1,
    prompt: 'Which business structure offers limited liability while restricting share sales privately to family and friends?',
    options: ['Sole trader', 'Partnership', 'Private Limited Company (Ltd)', 'Public Limited Company (Plc)'],
    correctIndex: 2,
    explanation: 'An Ltd protects shareholders with limited liability while keeping shares off the public stock exchange.',
  },
  {
    id: 'igbus-q-14-2',
    subtopicId: 'igcse-bus-1-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Contrast unincorporated liability with incorporated company protection.',
    segments: ['Sole traders and partnerships face ', ' liability risking personal possessions, whereas shareholders in an Ltd or Plc enjoy ', ' liability.'],
    wordBank: ['unlimited', 'limited', 'public', 'shared'],
    answers: ['unlimited', 'limited'],
    explanation: 'Unincorporated owners have unlimited personal liability; incorporated shareholders risk only the capital invested.',
  },
  {
    id: 'igbus-q-14-3',
    subtopicId: 'igcse-bus-1-4',
    type: 'matching',
    marks: 3,
    prompt: 'Match each business organisation to its defining feature.',
    pairs: [
      { left: 'Public Limited Company (Plc)', right: 'Raises huge capital by selling shares on a stock exchange' },
      { left: 'Franchise', right: 'Franchisee pays fees and royalties to trade under a proven brand' },
      { left: 'Joint venture', right: 'Two independent firms pool capital and local expertise for one project' },
      { left: 'Public corporation', right: 'Wholly owned by the government to run essential public services' },
    ],
    explanation: 'Always distinguish a private-sector Plc (stock-exchange shares) from a state-owned public corporation.',
  },
  {
    id: 'igbus-q-14-4',
    subtopicId: 'igcse-bus-1-4',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO major drawbacks of converting an Ltd into a Public Limited Company (Plc).',
    options: [
      'Original founders risk losing control through a hostile stock-market takeover',
      'The company must publish detailed financial accounts accessible to competitors',
      'Shareholders immediately lose limited liability protection',
      'The company becomes wholly owned and controlled by the government',
    ],
    correctIndices: [0, 1],
    explanation: 'Plcs retain limited liability and stay in the private sector, but face takeover risk, public disclosure, and high legal setup costs.',
  },
  {
    id: 'igbus-q-14-5',
    subtopicId: 'igcse-bus-1-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain one advantage and one disadvantage to an entrepreneur of buying a fast-food franchise rather than launching an independent brand.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: lower failure risk because the franchise comes with an established brand name, national advertising, and staff training. Disadvantage: must pay a large upfront licence fee plus ongoing royalties and follow strict rules with limited independence.',
      markPoints: [
        { id: 'mp1', markDescription: 'Advantage: established brand, lower risk, training, or franchisor marketing support', requiredKeywordGroups: [['brand', 'lower risk', 'training', 'marketing', 'established', 'support']] },
        { id: 'mp2', markDescription: 'Drawback: upfront licence fee, ongoing royalties, or strict rules/loss of independence', requiredKeywordGroups: [['fee', 'royalt', 'independence', 'control', 'rule', 'strict']] },
      ],
    },
    explanation: 'Franchising lowers startup risk via proven branding and training at the cost of fees, royalties, and strict operating rules.',
  },

  // ---- 1.5 Business Objectives & Stakeholder Objectives (5) ----
  {
    id: 'igbus-q-15-1',
    subtopicId: 'igcse-bus-1-5',
    type: 'mcq',
    marks: 1,
    prompt: 'A regional soft-drinks market has total annual sales of $4,000,000 and CitrusPop sells $600,000. What is CitrusPop’s market share?',
    options: ['12%', '15%', '20%', '6.7%'],
    correctIndex: 1,
    explanation: 'Market share = ($600,000 ÷ $4,000,000) × 100 = 15%.',
  },
  {
    id: 'igbus-q-15-2',
    subtopicId: 'igcse-bus-1-5',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the summary of social enterprises and shifting business aims.',
    segments: ['During a severe economic recession, a struggling firm’s top priority usually switches to ', ', while a ', ' reinvests profits into social and environmental goals.'],
    wordBank: ['survival', 'social enterprise', 'dividend', 'monopoly'],
    answers: ['survival', 'social enterprise'],
    explanation: 'Startups and firms in recessions prioritise survival; social enterprises pursue a triple bottom line (social, environmental, financial).',
  },
  {
    id: 'igbus-q-15-3',
    subtopicId: 'igcse-bus-1-5',
    type: 'matching',
    marks: 3,
    prompt: 'Match each stakeholder group to its primary objective.',
    pairs: [
      { left: 'Shareholders (owners)', right: 'Higher annual dividends and rising share value' },
      { left: 'Employees', right: 'Fair wages, job security, and safe working conditions' },
      { left: 'Banks (lenders)', right: 'Reliable on-time repayment of loans plus interest' },
      { left: 'Local community', right: 'Local employment alongside low noise and zero pollution' },
    ],
    explanation: 'Each internal and external stakeholder holds distinct goals that often clash when firms make big strategic choices.',
  },
  {
    id: 'igbus-q-15-4',
    subtopicId: 'igcse-bus-1-5',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO INTERNAL stakeholders of a manufacturing company.',
    options: ['Factory employees', 'Company managers', 'Local town council residents', 'External commercial bank lenders'],
    correctIndices: [0, 1],
    explanation: 'Internal stakeholders work inside or own the business (owners, managers, workers); residents and banks are external stakeholders.',
  },
  {
    id: 'igbus-q-15-5',
    subtopicId: 'igcse-bus-1-5',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain one stakeholder conflict that arises if a factory decides to automate its production line using robots.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Shareholders benefit because automation cuts unit labour costs and increases profits and dividends, whereas factory employees suffer conflict through job losses and redundancies.',
      markPoints: [
        { id: 'mp1', markDescription: 'Owners/shareholders gain lower costs and higher profits/dividends', requiredKeywordGroups: [['shareholder', 'owner', 'manager'], ['cost', 'profit', 'dividend', 'efficien']] },
        { id: 'mp2', markDescription: 'Employees face redundancies / job losses / insecurity', requiredKeywordGroups: [['employee', 'worker'], ['redundan', 'job', 'unemploy', 'securit']] },
      ],
    },
    explanation: 'Automation aligns with shareholder profit goals while clashing sharply with worker job-security objectives.',
  },

  // ---- 2.1 Motivating Employees (5) ----
  {
    id: 'igbus-q-21-1',
    subtopicId: 'igcse-bus-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'According to Herzberg’s Two-Factor Theory, which of the following is a MOTIVATOR rather than a Hygiene factor?',
    options: ['Basic monthly salary', 'Clean, safe factory lighting', 'Company sick-pay policy', 'Recognition and challenging responsibility'],
    correctIndex: 3,
    explanation: 'Salary, conditions, and policy are hygiene factors (prevent dissatisfaction); recognition, responsibility, and achievement actively motivate.',
  },
  {
    id: 'igbus-q-21-2',
    subtopicId: 'igcse-bus-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Distinguish job enlargement from job enrichment accurately.',
    segments: ['Adding extra tasks at the SAME skill level is job ', ', whereas adding higher-level decision-making and responsibility is job ', '.'],
    wordBank: ['enlargement', 'enrichment', 'rotation', 'commission'],
    answers: ['enlargement', 'enrichment'],
    explanation: 'Job enlargement adds horizontal tasks of equal skill; job enrichment adds vertical challenge and autonomy.',
  },
  {
    id: 'igbus-q-21-3',
    subtopicId: 'igcse-bus-2-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each motivation theorist to their core theory.',
    pairs: [
      { left: 'F.W. Taylor', right: 'Scientific management: workers motivated primarily by piece-rate pay' },
      { left: 'Abraham Maslow', right: 'Five-level Hierarchy of Needs culminating in self-actualisation' },
      { left: 'Frederick Herzberg', right: 'Two-Factor Theory separating Hygiene factors from Motivators' },
    ],
    explanation: 'Quoting Taylor, Maslow, and Herzberg accurately unlocks top-band analysis marks in IGCSE Paper 2.',
  },
  {
    id: 'igbus-q-21-4',
    subtopicId: 'igcse-bus-2-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO financial payment methods suitable for motivating a team of retail sales executives.',
    options: ['Sales commission paid as a % of every item sold', 'Annual profit-sharing bonus linked to company profits', 'Removing all staff rest breaks', 'Eliminating written employment contracts'],
    correctIndices: [0, 1],
    explanation: 'Commission rewards individual sales effort while profit-sharing aligns the whole team with company profitability.',
  },
  {
    id: 'igbus-q-21-5',
    subtopicId: 'igcse-bus-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two reasons why piece-rate pay (F.W. Taylor) may NOT be suitable for hospital nurses.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Nursing output cannot be easily counted as identical units, and paying per patient treated could encourage rushing that lowers care quality and puts patient safety at risk.',
      markPoints: [
        { id: 'mp1', markDescription: 'Output/care cannot be measured or counted as standard units', requiredKeywordGroups: [['output', 'measure', 'count', 'unit', 'individual']] },
        { id: 'mp2', markDescription: 'Encourages rushing, lowering quality of care or harming patient safety', requiredKeywordGroups: [['quality', 'rush', 'safety', 'care', 'patient']] },
      ],
    },
    explanation: 'Piece-rate works only where individual identical output is measurable and quality checks prevent rushing.',
  },

  // ---- 2.2 Organisation, Management, Leadership & Trade Unions (5) ----
  {
    id: 'igbus-q-22-1',
    subtopicId: 'igcse-bus-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which leadership style is MOST effective during an urgent warehouse fire evacuation?',
    options: ['Laissez-faire', 'Democratic', 'Autocratic', 'Delegative'],
    correctIndex: 2,
    explanation: 'Autocratic leadership gives instant, unambiguous one-way commands when there is zero time for consultation.',
  },
  {
    id: 'igbus-q-22-2',
    subtopicId: 'igcse-bus-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the structural definitions on hierarchy charts.',
    segments: ['The number of subordinates reporting directly to one manager is the ', ', while passing authority for tasks down to juniors is called ', '.'],
    wordBank: ['span of control', 'delegation', 'chain of command', 'unionisation'],
    answers: ['span of control', 'delegation'],
    explanation: 'Span of control counts direct reports; delegation hands down task authority while the manager keeps final accountability.',
  },
  {
    id: 'igbus-q-22-3',
    subtopicId: 'igcse-bus-2-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each leadership style to its best workplace scenario.',
    pairs: [
      { left: 'Autocratic leadership', right: 'Emergency crisis or newly hired unskilled workers' },
      { left: 'Democratic leadership', right: 'Experienced product team brainstorming new designs' },
      { left: 'Laissez-faire leadership', right: 'Highly skilled creative artists or independent research scientists' },
    ],
    explanation: 'Effective managers flex their leadership style to fit urgency, risk, and employee skill level.',
  },
  {
    id: 'igbus-q-22-4',
    subtopicId: 'igcse-bus-2-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO likely effects of delayering (removing a tier of middle managers) in a large company.',
    options: [
      'Shorter chain of command enabling faster communication and lower management salary bills',
      'Wider span of control for remaining managers, increasing delegation and workload',
      'Double the number of hierarchy tiers between CEO and factory staff',
      'Guaranteed elimination of all trade union membership',
    ],
    correctIndices: [0, 1],
    explanation: 'Delayering flattens the chart — cutting salary costs and speeding communication, while widening spans of control.',
  },
  {
    id: 'igbus-q-22-5',
    subtopicId: 'igcse-bus-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain one benefit to employees and one potential benefit to employers of recognising a trade union.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Employees gain stronger collective bargaining power for fairer pay, safer conditions, and legal protection. Employers benefit from a single clear channel to negotiate agreements with the whole workforce rather than individual disputes.',
      markPoints: [
        { id: 'mp1', markDescription: 'Employees: collective bargaining for higher pay, safety, or job/legal protection', requiredKeywordGroups: [['collective', 'pay', 'wage', 'safe', 'protect', 'condition']] },
        { id: 'mp2', markDescription: 'Employers: single channel to negotiate/communicate efficiently with workers', requiredKeywordGroups: [['single', 'channel', 'negotiat', 'communicat', 'agree', 'dispute']] },
      ],
    },
    explanation: 'Trade unions strengthen worker bargaining power and can streamline employer-staff negotiation when relations are constructive.',
  },

  // ---- 2.3 Recruitment, Selection, Training & Legal Controls (5) ----
  {
    id: 'igbus-q-23-1',
    subtopicId: 'igcse-bus-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'An online bank automates cheque processing and closes 20 clerk positions. Those 20 staff are:',
    options: ['Dismissed for gross misconduct', 'Made redundant', 'Given induction training', 'Promoted internally'],
    correctIndex: 1,
    explanation: 'Redundancy happens when the job role ceases to exist due to automation or falling demand — not through employee fault.',
  },
  {
    id: 'igbus-q-23-2',
    subtopicId: 'igcse-bus-2-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Distinguish the two core recruitment documents.',
    segments: ['A ', ' outlines the duties and responsibilities of a role, while a ', ' details the skills and qualifications needed by candidates.'],
    wordBank: ['job description', 'person specification', 'contract', 'induction plan'],
    answers: ['job description', 'person specification'],
    explanation: 'Job description describes the job itself; person specification profiles the ideal applicant.',
  },
  {
    id: 'igbus-q-23-3',
    subtopicId: 'igcse-bus-2-3',
    type: 'matching',
    marks: 3,
    prompt: 'Match each training type to its exact purpose.',
    pairs: [
      { left: 'Induction training', right: 'Introduces brand-new recruits to safety rules, layout, and colleagues' },
      { left: 'On-the-job training', right: 'Low-cost coaching by shadowing an experienced colleague at work' },
      { left: 'Off-the-job training', right: 'External specialist course away from work bringing fresh skills' },
    ],
    explanation: 'Managers weigh cost, lost output during training, and need for outside expertise when picking training methods.',
  },
  {
    id: 'igbus-q-23-4',
    subtopicId: 'igcse-bus-2-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO advantages to a growing restaurant of hiring part-time waiting staff.',
    options: [
      'Flexible shifts cover busy Friday/Saturday evenings without paying idle quiet-day hours',
      'Lower fixed wage bill compared with hiring all full-time staff',
      'Zero need for any health, safety, or food-hygiene induction training',
      'Part-time workers are legally barred from earning the national minimum wage',
    ],
    correctIndices: [0, 1],
    explanation: 'Part-time staff provide flexible peak-hour cover and lower fixed payroll costs, though full legal and training duties still apply.',
  },
  {
    id: 'igbus-q-23-5',
    subtopicId: 'igcse-bus-2-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give one advantage and one disadvantage of using EXTERNAL recruitment to hire a new marketing director.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: brings fresh outside ideas, digital skills, and a wider pool of experienced candidates. Disadvantage: much slower and costlier (advertising and agency fees) and can demotivate existing managers passed over for promotion.',
      markPoints: [
        { id: 'mp1', markDescription: 'Advantage: fresh ideas/skills or wider pool of qualified candidates', requiredKeywordGroups: [['fresh', 'new idea', 'wider', 'pool', 'outside', 'skill']] },
        { id: 'mp2', markDescription: 'Disadvantage: higher recruitment cost, slower, or demotivates internal staff', requiredKeywordGroups: [['cost', 'expensive', 'slow', 'time', 'demotivat', 'risk']] },
      ],
    },
    explanation: 'External hiring injects fresh expertise at higher advertising/time cost and potential internal morale friction.',
  },

  // ---- 2.4 Internal & External Communication (5) ----
  {
    id: 'igbus-q-24-1',
    subtopicId: 'igcse-bus-2-4',
    type: 'mcq',
    marks: 1,
    prompt: 'Which element confirms that a business message has been received and accurately understood?',
    options: ['Complex technical jargon', 'A longer chain of command', 'Feedback from the receiver', 'Using one-way posters only'],
    correctIndex: 2,
    explanation: 'Feedback completes the loop and verifies that the receiver interpreted the message as intended.',
  },
  {
    id: 'igbus-q-24-2',
    subtopicId: 'igcse-bus-2-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Classify internal and external business communication.',
    segments: ['A shift rota emailed to warehouse workers is ', ' communication, whereas an invoice sent to a retail customer is ', ' communication.'],
    wordBank: ['internal', 'external', 'verbal', 'visual'],
    answers: ['internal', 'external'],
    explanation: 'Internal communication stays inside the business; external communication connects with outside customers, suppliers, or banks.',
  },
  {
    id: 'igbus-q-24-3',
    subtopicId: 'igcse-bus-2-4',
    type: 'matching',
    marks: 3,
    prompt: 'Match each communication barrier to its best practical solution.',
    pairs: [
      { left: 'Overly technical jargon confusing new staff', right: 'Rewrite messages in plain, simple everyday language' },
      { left: 'Messages distorted down a 9-layer hierarchy', right: 'Delayer management to shorten the chain of command' },
      { left: 'Noisy factory floor drowning out verbal orders', right: 'Hold briefings in a quiet room with written follow-up' },
    ],
    explanation: 'Matching each barrier to a targeted fix earns full application marks on IGCSE communication questions.',
  },
  {
    id: 'igbus-q-24-4',
    subtopicId: 'igcse-bus-2-4',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO advantages of using WRITTEN communication (such as an official email or letter) for a supplier contract change.',
    options: [
      'Provides permanent documentary proof if a legal or pricing dispute arises later',
      'Allows exact technical figures and dates to be checked accurately',
      'Guarantees instant body-language feedback before reading',
      'Eliminates any possibility of language translation errors',
    ],
    correctIndices: [0, 1],
    explanation: 'Written records create permanent verifiable evidence for complex terms, though they lack immediate non-verbal cues.',
  },
  {
    id: 'igbus-q-24-5',
    subtopicId: 'igcse-bus-2-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why two-way communication is generally more effective than one-way communication when introducing a new factory safety procedure.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Two-way communication lets employees ask questions to clarify confusing safety steps and provide feedback confirming understanding, which reduces workplace accidents and improves worker involvement and motivation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Allows receiver to ask questions / give feedback confirming understanding', requiredKeywordGroups: [['question', 'clarif', 'feedback', 'understand']] },
        { id: 'mp2', markDescription: 'Reduces errors/accidents or boosts staff involvement and motivation', requiredKeywordGroups: [['accident', 'error', 'mistake', 'motivat', 'involv', 'safe']] },
      ],
    },
    explanation: 'Two-way dialogue catches misunderstandings before dangerous errors happen and engages workers actively.',
  },

  // ---- 3.1 Marketing, Competition, Segmentation & Niche vs Mass (5) ----
  {
    id: 'igbus-q-31-1',
    subtopicId: 'igcse-bus-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A bakery launches allergen-free vegan wedding cakes exclusively for luxury city weddings. Which market is it targeting?',
    options: ['A mass market', 'A niche market', 'A public-sector market', 'A primary commodity market'],
    correctIndex: 1,
    explanation: 'Targeting a small, specialised customer subgroup with bespoke needs defines a niche market.',
  },
  {
    id: 'igbus-q-31-2',
    subtopicId: 'igcse-bus-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the comparison of niche and mass markets.',
    segments: ['A ', ' market faces less competition and earns higher unit margins, whereas a ', ' market generates huge sales volumes and economies of scale.'],
    wordBank: ['niche', 'mass', 'secondary', 'static'],
    answers: ['niche', 'mass'],
    explanation: 'Niche markets prioritise high margins and focus; mass markets pursue volume and bulk cost savings.',
  },
  {
    id: 'igbus-q-31-3',
    subtopicId: 'igcse-bus-3-1',
    type: 'matching',
    marks: 3,
    prompt: 'Match each product example to its main market segmentation criterion.',
    pairs: [
      { left: 'Budget hatchbacks vs $200,000 sports cars', right: 'Income / socio-economic group' },
      { left: 'Children’s picture books vs retirement cruises', right: 'Age' },
      { left: 'Thermal snow jackets sold in Norway vs swimwear in Bali', right: 'Geographic region / location' },
      { left: 'Zero-waste plant-based meal kits', right: 'Lifestyle' },
    ],
    explanation: 'Effective segmentation aligns product design and promotion with exact customer traits.',
  },
  {
    id: 'igbus-q-31-4',
    subtopicId: 'igcse-bus-3-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO reasons why consumer markets have become far more competitive over the last decade.',
    options: [
      'Globalisation allows overseas manufacturers to enter domestic markets',
      'E-commerce lets shoppers compare prices and reviews across global brands in seconds',
      'Consumer tastes and fashions never change anymore',
      'Transport and shipping costs have risen to block all international trade',
    ],
    correctIndices: [0, 1],
    explanation: 'Globalisation and e-commerce dramatically broaden buyer choice and intensify competition.',
  },
  {
    id: 'igbus-q-31-5',
    subtopicId: 'igcse-bus-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain one advantage and one risk to a small startup of operating exclusively in a niche market.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: faces far less competition from giant rivals and can charge higher profit margins by tailoring products to exact customer needs. Risk: total sales volume is small, so if customer tastes change the whole business could collapse.',
      markPoints: [
        { id: 'mp1', markDescription: 'Advantage: less competition, higher profit margins, or tailored customer needs', requiredKeywordGroups: [['competition', 'margin', 'tailor', 'specific', 'needs']] },
        { id: 'mp2', markDescription: 'Risk: small limited sales volume, no economies of scale, or vulnerability to taste shifts', requiredKeywordGroups: [['small', 'limited', 'volume', 'taste', 'risk', 'collapse']] },
      ],
    },
    explanation: 'Niches protect small firms from mass-market giants but concentrate risk in one narrow segment.',
  },

  // ---- 3.2 Market Research (5) ----
  {
    id: 'igbus-q-32-1',
    subtopicId: 'igcse-bus-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the following is an example of PRIMARY (field) market research?',
    options: [
      'Downloading national government population census tables',
      'Reading a competitor’s published annual accounts',
      'Hosting a focus group of 10 teenagers to test a new energy drink',
      'Checking last year’s national trade newspaper statistics',
    ],
    correctIndex: 2,
    explanation: 'A focus group gathers brand-new first-hand qualitative insights directly from target consumers.',
  },
  {
    id: 'igbus-q-32-2',
    subtopicId: 'igcse-bus-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the comparison of primary and secondary research.',
    segments: ['Original first-hand data gathered for a specific purpose is ', ' research, whereas existing data from government reports or sales records is ', ' research.'],
    wordBank: ['primary', 'secondary', 'quota', 'qualitative'],
    answers: ['primary', 'secondary'],
    explanation: 'Primary research is bespoke and fresh; secondary research reuses existing desk data cheaply and fast.',
  },
  {
    id: 'igbus-q-32-3',
    subtopicId: 'igcse-bus-3-2',
    type: 'matching',
    marks: 3,
    prompt: 'Match each market research term to its correct definition.',
    pairs: [
      { left: 'Random sampling', right: 'Every member of the population has an equal chance of being chosen' },
      { left: 'Quota sampling', right: 'Fixed numbers selected matching specific target age or income traits' },
      { left: 'Quantitative data', right: 'Numerical statistics such as percentages and star ratings' },
      { left: 'Qualitative data', right: 'Detailed opinions explaining WHY buyers like or dislike a product' },
    ],
    explanation: 'Blending quantitative statistics with qualitative customer opinions yields far better launch decisions.',
  },
  {
    id: 'igbus-q-32-4',
    subtopicId: 'igcse-bus-3-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO reasons why market research data might prove inaccurate or misleading.',
    options: [
      'The sample size surveyed was too tiny to represent the whole target market',
      'Questionnaire wording contained biased, leading questions',
      'The business ran secondary desk research before designing field surveys',
      'Results were displayed cleanly on a labelled bar chart',
    ],
    correctIndices: [0, 1],
    explanation: 'Small unrepresentative samples, biased questions, interviewer bias, and outdated reports all undermine data accuracy.',
  },
  {
    id: 'igbus-q-32-5',
    subtopicId: 'igcse-bus-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why a new coffee-roasting startup should run secondary research BEFORE paying for primary research.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Secondary research is much cheaper and faster using free government data or trade reports, allowing the startup to check market size and competitors before spending scarce cash on targeted primary surveys.',
      markPoints: [
        { id: 'mp1', markDescription: 'Cheaper / saves scarce startup cash and faster to collect', requiredKeywordGroups: [['cheap', 'cost', 'free', 'cash'], ['fast', 'quick', 'time']] },
        { id: 'mp2', markDescription: 'Gives overview of market size, trends, or rivals before focused field research', requiredKeywordGroups: [['market', 'size', 'trend', 'competitor', 'overview']] },
      ],
    },
    explanation: 'Desk research establishes broad market viability cheaply before committing funds to bespoke primary research.',
  },

  // ---- 3.3 Marketing Mix: Product, Branding & Product Life Cycle (5) [DIAGRAM] ----
  {
    id: 'igbus-q-33-1',
    subtopicId: 'igcse-bus-3-3',
    type: 'diagram-label',
    marks: 3,
    prompt: 'Use the Product Life Cycle diagram to identify each stage and strategic curve.',
    diagram: 'product-life-cycle',
    labels: [
      { marker: 'Stage where sales peak and competition is fiercest', options: ['Introduction', 'Maturity', 'Development'], answer: 'Maturity' },
      { marker: 'Dashed purple curve launched to prolong profitable sales', options: ['Extension strategy', 'Decline path', 'R&D loss'], answer: 'Extension strategy' },
      { marker: 'Initial stage with $0 sales and high R&D outflow', options: ['Development', 'Growth', 'Maturity'], answer: 'Development' },
    ],
    explanation: 'Development earns $0 sales; Maturity peaks under heavy rivalry — the ideal point to launch extension strategies.',
  },
  {
    id: 'igbus-q-33-2',
    subtopicId: 'igcse-bus-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is building a strong brand image valuable for a smartphone manufacturer?',
    options: [
      'It eliminates all raw material and factory costs',
      'It creates brand loyalty, differentiates from rivals, and allows higher prices',
      'It legally stops any competitor from entering the smartphone industry',
      'It removes the need to test product safety',
    ],
    correctIndex: 1,
    explanation: 'Strong brand image fosters customer loyalty, makes demand less price elastic, and supports premium pricing.',
  },
  {
    id: 'igbus-q-33-3',
    subtopicId: 'igcse-bus-3-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statement on product differentiation and life-cycle management.',
    segments: ['A special feature separating a product from rivals is its ', ', and actions taken during maturity to prevent falling sales are ', ' strategies.'],
    wordBank: ['Unique Selling Point (USP)', 'extension', 'penetration', 'decline'],
    answers: ['Unique Selling Point (USP)', 'extension'],
    explanation: 'A USP differentiates the product; extension strategies keep mature products profitable for longer.',
  },
  {
    id: 'igbus-q-33-4',
    subtopicId: 'igcse-bus-3-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO effective extension strategies for a breakfast cereal entering Maturity.',
    options: [
      'Launch a new high-protein berry flavour variant',
      'Export the cereal into two new overseas markets with refreshed packaging',
      'Cancel all supermarket shelf displays and promotion',
      'Reduce ingredient quality while raising the price by 30%',
    ],
    correctIndices: [0, 1],
    explanation: 'New variants, new geographical markets, refreshed packaging, and new uses are classic PLC extension tactics.',
  },
  {
    id: 'igbus-q-33-5',
    subtopicId: 'igcse-bus-3-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two distinct functions of packaging for a bottled organic fruit juice.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Packaging protects the juice from contamination and leaks during transport while displaying legal ingredients and nutritional facts, and attracts shoppers on crowded supermarket shelves to reinforce an eco-friendly brand image.',
      markPoints: [
        { id: 'mp1', markDescription: 'Protects/preserves product or displays legal ingredients/nutrition info', requiredKeywordGroups: [['protect', 'fresh', 'leak', 'break', 'ingredient', 'legal', 'info']] },
        { id: 'mp2', markDescription: 'Promotes brand image, catches attention on shelves, or adds convenience', requiredKeywordGroups: [['brand', 'promot', 'attract', 'shelf', 'convenien', 'eco']] },
      ],
    },
    explanation: 'Good packaging balances physical protection/legal compliance with shelf appeal and convenience.',
  },

  // ---- 3.4 Marketing Mix: Pricing Strategies & Price Elasticity (5) [DIAGRAM] ----
  {
    id: 'igbus-q-34-1',
    subtopicId: 'igcse-bus-3-4',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the Price Elasticity of Demand (PED) diagram to identify the revenue outcome of raising price.',
    diagram: 'elasticity-curves',
    labels: [
      { marker: 'Flat demand curve (|PED| > 1, many substitutes) when price rises', options: ['Total revenue FALLS', 'Total revenue RISES'], answer: 'Total revenue FALLS' },
      { marker: 'Steep demand curve (|PED| < 1, few substitutes) when price rises', options: ['Total revenue FALLS', 'Total revenue RISES'], answer: 'Total revenue RISES' },
    ],
    explanation: 'Raising price cuts revenue on elastic goods (big drop in Q) but boosts revenue on inelastic goods (small drop in Q).',
  },
  {
    id: 'igbus-q-34-2',
    subtopicId: 'igcse-bus-3-4',
    type: 'mcq',
    marks: 1,
    prompt: 'A jacket costs $45 to manufacture and the firm applies a 60% cost-plus mark-up. What is the selling price?',
    options: ['$60', '$72', '$105', '$54'],
    correctIndex: 1,
    explanation: 'Selling price = $45 × 1.60 = $72.',
  },
  {
    id: 'igbus-q-34-3',
    subtopicId: 'igcse-bus-3-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Contrast launch pricing strategies for new products.',
    segments: ['Setting a high initial price for a patented new gadget to recover R&D is ', ', whereas launching low to win share in a crowded market is ', ' pricing.'],
    wordBank: ['price skimming', 'penetration', 'cost-plus', 'promotional'],
    answers: ['price skimming', 'penetration'],
    explanation: 'Skimming targets early adopters with unique tech; penetration buys rapid market share against entrenched rivals.',
  },
  {
    id: 'igbus-q-34-4',
    subtopicId: 'igcse-bus-3-4',
    type: 'matching',
    marks: 3,
    prompt: 'Match each pricing strategy to its best real-world business context.',
    pairs: [
      { left: 'Price skimming', right: 'Launching a world-first foldable gaming console with zero rivals' },
      { left: 'Penetration pricing', right: 'New budget broadband provider entering a saturated market' },
      { left: 'Dynamic pricing', right: 'Airline raising seat fares automatically during peak holiday weeks' },
      { left: 'Promotional pricing', right: 'Fashion store discounting winter coats 40% in March to clear stock' },
    ],
    explanation: 'Matching pricing strategy to product uniqueness, competition, and timing is a core Cambridge IGCSE skill.',
  },
  {
    id: 'igbus-q-34-5',
    subtopicId: 'igcse-bus-3-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why raising selling price by 15% could reduce total revenue for a standard bottled-water brand.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Standard bottled water has many close substitutes, so demand is price elastic. A 15% price rise causes a much larger percentage drop in quantity demanded as shoppers switch to cheaper rivals, reducing total revenue.',
      markPoints: [
        { id: 'mp1', markDescription: 'Identifies demand is price elastic due to many close substitutes', requiredKeywordGroups: [['elastic'], ['substitute', 'rival', 'alternative']] },
        { id: 'mp2', markDescription: 'Larger percentage drop in quantity demanded causes total revenue to fall', requiredKeywordGroups: [['larger', 'greater', 'switch', 'drop', 'fall'], ['revenue', 'sales']] },
      ],
    },
    explanation: 'For price-elastic products with abundant substitutes, percentage quantity loss outweighs the price increase.',
  },

  // ---- 3.5 Marketing Mix: Place & Channels of Distribution (5) ----
  {
    id: 'igbus-q-35-1',
    subtopicId: 'igcse-bus-3-5',
    type: 'mcq',
    marks: 1,
    prompt: 'Which distribution channel is MOST suitable for an artisan bakery selling fresh cream pastries that expire within 24 hours?',
    options: [
      'Producer -> Consumer (direct shop / local delivery)',
      'Producer -> Agent -> Wholesaler -> Retailer -> Consumer',
      'Producer -> National Wholesaler -> Corner shops',
      'Producer -> Overseas Freight Broker -> Wholesaler -> Consumer',
    ],
    correctIndex: 0,
    explanation: 'Highly perishable fresh goods need the shortest channel (direct to consumer) to prevent spoilage.',
  },
  {
    id: 'igbus-q-35-2',
    subtopicId: 'igcse-bus-3-5',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the functions of wholesalers and overseas agents.',
    segments: ['Buying huge factory loads and splitting them into small batches for corner shops is called ', ', while exporting to an unfamiliar country often relies on a local ', '.'],
    wordBank: ['breaking bulk', 'agent', 'skimming', 'direct selling'],
    answers: ['breaking bulk', 'agent'],
    explanation: 'Wholesalers break bulk for small retailers; local agents provide overseas contacts, language, and market insight.',
  },
  {
    id: 'igbus-q-35-3',
    subtopicId: 'igcse-bus-3-5',
    type: 'matching',
    marks: 3,
    prompt: 'Match each product to its ideal distribution channel.',
    pairs: [
      { left: 'Custom-built industrial wind turbine', right: 'Producer -> Business Customer (Direct)' },
      { left: 'Mass-market toothpaste sold in 5,000 tiny shops', right: 'Producer -> Wholesaler -> Retailer -> Consumer' },
      { left: 'Major branded TVs sold through national electronics chains', right: 'Producer -> Retailer -> Consumer' },
      { left: 'European olive oil entering Japan for the first time', right: 'Producer -> Agent -> Wholesaler/Retailer -> Consumer' },
    ],
    explanation: 'Technical complexity, purchase frequency, perishability, and unfamiliar overseas geography dictate channel length.',
  },
  {
    id: 'igbus-q-35-4',
    subtopicId: 'igcse-bus-3-5',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO advantages to a crisp manufacturer of selling via WHOLESALERS rather than directly to thousands of small corner shops.',
    options: [
      'Slashes delivery transport and warehousing costs by shipping bulk pallet loads',
      'Wholesalers hold storage risk and manage trade credit for small retailers',
      'Wholesalers charge zero profit margin so retail prices always drop',
      'Manufacturer keeps 100% control over how crisps are displayed in every shop',
    ],
    correctIndices: [0, 1],
    explanation: 'Wholesalers save producers massive transport and storage costs, though they take a margin and reduce display control.',
  },
  {
    id: 'igbus-q-35-5',
    subtopicId: 'igcse-bus-3-5',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain one advantage and one drawback for a shoe manufacturer of selling directly to consumers via its own website.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: keeps the full retail profit margin by cutting out wholesalers and retailers while controlling brand presentation directly. Drawback: must handle expensive individual parcel shipping, warehouse packing, and high online shoe returns itself.',
      markPoints: [
        { id: 'mp1', markDescription: 'Advantage: keeps higher profit margin, lower price, or direct brand/customer control', requiredKeywordGroups: [['margin', 'profit', 'control', 'direct', 'intermediar']] },
        { id: 'mp2', markDescription: 'Drawback: high individual delivery/shipping, storage, marketing, or returns costs', requiredKeywordGroups: [['delivery', 'shipping', 'return', 'storage', 'warehouse', 'marketing']] },
      ],
    },
    explanation: 'Direct e-commerce captures full margins and brand control while shifting logistics and returns onto the producer.',
  },

  // ---- 3.6 Marketing Mix: Promotion, Advertising & E-Commerce (5) ----
  {
    id: 'igbus-q-36-1',
    subtopicId: 'igcse-bus-3-6',
    type: 'mcq',
    marks: 1,
    prompt: 'Which promotional method is an example of SALES PROMOTION rather than advertising?',
    options: ['A 30-second national TV commercial', 'A highway billboard poster', 'Offering Buy-One-Get-One-Free (BOGOF) vouchers in store', 'A sponsored radio announcement'],
    correctIndex: 2,
    explanation: 'BOGOF vouchers, discounts, free samples, and loyalty points are short-term sales promotions.',
  },
  {
    id: 'igbus-q-36-2',
    subtopicId: 'igcse-bus-3-6',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Distinguish the two types of advertising.',
    segments: ['Giving factual details about a newly launched product is ', ' advertising, while creating emotional brand preference over rivals is ', ' advertising.'],
    wordBank: ['informative', 'persuasive', 'sales', 'penetration'],
    answers: ['informative', 'persuasive'],
    explanation: 'Informative ads educate buyers at launch; persuasive ads build brand loyalty against mature rivals.',
  },
  {
    id: 'igbus-q-36-3',
    subtopicId: 'igcse-bus-3-6',
    type: 'matching',
    marks: 3,
    prompt: 'Match each promotional medium or tool to its ideal use.',
    pairs: [
      { left: 'Free product samples in supermarkets', right: 'Encouraging shoppers to trial a brand-new food snack' },
      { left: 'Loyalty reward cards', right: 'Incentivising repeat purchases at a coffee-shop chain' },
      { left: 'Targeted social media video ads', right: 'Reaching teen gamers on a modest marketing budget' },
      { left: 'National television campaign', right: 'Building mass nationwide awareness for a global soft drink' },
    ],
    explanation: 'Choosing cost-effective promotion means matching the medium tightly to the target audience and budget.',
  },
  {
    id: 'igbus-q-36-4',
    subtopicId: 'igcse-bus-3-6',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO drawbacks for a fashion retailer of moving heavily into E-COMMERCE.',
    options: [
      'Shoppers cannot try garments on, driving high delivery and return-handling costs',
      'Website build, cybersecurity, and intense online price comparison squeeze margins',
      'Online shops can only open during local 9-to-5 office hours',
      'E-commerce makes it impossible to reach customers outside one town',
    ],
    correctIndices: [0, 1],
    explanation: 'E-commerce expands 24/7 reach and lowers shop rent, but introduces return logistics, IT/security costs, and online price rivalry.',
  },
  {
    id: 'igbus-q-36-5',
    subtopicId: 'igcse-bus-3-6',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain one benefit and one risk of using social media influencers to promote a new skincare brand.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Benefit: cheaply reaches a highly targeted young audience with viral sharing and instant two-way customer feedback. Risk: negative reviews or an influencer scandal can spread virally and rapidly damage brand reputation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Benefit: low cost, highly targeted reach, viral sharing, or direct customer feedback', requiredKeywordGroups: [['cheap', 'cost', 'target', 'viral', 'feedback', 'audience']] },
        { id: 'mp2', markDescription: 'Risk: negative comments/scandals spread virally, harming reputation or missing older buyers', requiredKeywordGroups: [['negative', 'scandal', 'reputation', 'damage', 'older', 'control']] },
      ],
    },
    explanation: 'Social media gives precision targeting at low cost but exposes brands to rapid public backlash.',
  },

  // ---- 3.7 Marketing Strategy, Legal Controls & Foreign Markets (5) ----
  {
    id: 'igbus-q-37-1',
    subtopicId: 'igcse-bus-3-7',
    type: 'mcq',
    marks: 1,
    prompt: 'A luxury perfume brand charges $180 per bottle and advertises in Vogue. Which PLACE decision keeps its marketing strategy consistent?',
    options: ['Discount pound/dollar bargain bins', 'Exclusive department stores and flagship boutiques', 'Roadside wholesale cash-and-carry depots', 'Unbranded vending machines at bus stations'],
    correctIndex: 1,
    explanation: 'All 4 Ps must reinforce the same brand positioning — prestige products require exclusive retail outlets.',
  },
  {
    id: 'igbus-q-37-2',
    subtopicId: 'igcse-bus-3-7',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the summary of consumer law and foreign market adaptation.',
    segments: ['Laws banning faulty goods and misleading ads are ', ' laws, while adapting recipes and packaging for foreign cultures is called ', '.'],
    wordBank: ['consumer protection', 'localisation', 'skimming', 'delayering'],
    answers: ['consumer protection', 'localisation'],
    explanation: 'Consumer protection laws safeguard shoppers; localisation prevents cultural blunders when expanding abroad.',
  },
  {
    id: 'igbus-q-37-3',
    subtopicId: 'igcse-bus-3-7',
    type: 'matching',
    marks: 3,
    prompt: 'Match each overseas market-entry problem to an effective strategic solution.',
    pairs: [
      { left: 'Lack of knowledge of local culture and retail buyers', right: 'Form a joint venture with a local company' },
      { left: 'High import tariffs and costly long-distance shipping', right: 'License a local manufacturer to produce domestically' },
      { left: 'Limited capital to open 50 stores abroad quickly', right: 'Expand through international franchising' },
    ],
    explanation: 'Joint ventures, licensing, franchising, and local agents each solve specific international expansion barriers.',
  },
  {
    id: 'igbus-q-37-4',
    subtopicId: 'igcse-bus-3-7',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO legal consumer protections enforced by most governments on marketing activities.',
    options: [
      'Goods sold must be safe, fit for purpose, and match their product description',
      'Businesses are prohibited from making false or misleading claims in adverts',
      'Every private company must sell its products below cost price',
      'Businesses are banned from segmenting markets by age or location',
    ],
    correctIndices: [0, 1],
    explanation: 'Consumer laws focus on safety, accurate weights/descriptions, fair trading, and honest advertising.',
  },
  {
    id: 'igbus-q-37-5',
    subtopicId: 'igcse-bus-3-7',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two difficulties a European fast-food brand might face when entering a foreign market in Asia for the first time.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'It may lack local market knowledge of dietary customs and language (requiring menu localisation), and face higher costs from unfamiliar local food-safety laws, import tariffs, or strong entrenched domestic competitors.',
      markPoints: [
        { id: 'mp1', markDescription: 'Cultural/dietary/language differences or lack of local market knowledge', requiredKeywordGroups: [['cultur', 'language', 'diet', 'taste', 'local knowledge']] },
        { id: 'mp2', markDescription: 'Legal controls, import tariffs, transport costs, exchange rates, or local rivals', requiredKeywordGroups: [['law', 'regulat', 'tariff', 'transport', 'exchange', 'competitor', 'rival']] },
      ],
    },
    explanation: 'Cultural fit, regulatory compliance, tariffs, and established local rivals are the main hurdles in overseas entry.',
  },
];

export const IGCSE_BUS_FLASHCARDS_1_TO_3: FlashcardItem[] = [
  // 1.1 (5)
  { id: 'igbus-fc-11-1', subtopicId: 'igcse-bus-1-1', front: 'Define the economic problem and opportunity cost.', backBullets: ['Unlimited wants vs scarce resources create the economic problem.', 'Opportunity cost = the next best alternative given up when choosing another option.'] },
  { id: 'igbus-fc-11-2', subtopicId: 'igcse-bus-1-1', front: 'Name all four factors of production with one example each.', backBullets: ['Land (oil, timber), Labour (workers), Capital (machinery, finance), Enterprise (entrepreneur taking risk).'], hint: 'C-E-L-L' },
  { id: 'igbus-fc-11-3', subtopicId: 'igcse-bus-1-1', front: 'State one advantage and one drawback of division of labour.', backBullets: ['Advantage: specialist workers work faster, raising productivity and cutting training time.', 'Drawback: repetitive work causes boredom and a single absent worker can halt the line.'] },
  { id: 'igbus-fc-11-4', subtopicId: 'igcse-bus-1-1', front: 'Write the Added Value formula and explain why it is NOT profit.', backBullets: ['Added value = Selling price − Cost of bought-in materials/components.', 'Not profit: wages, rent, marketing, and electricity must still be subtracted.'] },
  { id: 'igbus-fc-11-5', subtopicId: 'igcse-bus-1-1', front: 'State TWO distinct ways a business can increase Added Value.', backBullets: ['Raise selling price via strong branding, better quality, attractive packaging, or convenience.', 'Lower bought-in input costs via bulk discounts or cheaper suppliers without cutting quality.'] },

  // 1.2 (5)
  { id: 'igbus-fc-12-1', subtopicId: 'igcse-bus-1-2', front: 'Contrast primary, secondary, and tertiary sectors with examples.', backBullets: ['Primary: extracting natural resources (farming, mining).', 'Secondary: manufacturing/construction (factories, bakeries).', 'Tertiary: delivering services (retailing, banking, hotels).'] },
  { id: 'igbus-fc-12-2', subtopicId: 'igcse-bus-1-2', front: 'Define de-industrialisation and state TWO causes.', backBullets: ['Decline in the importance of the secondary manufacturing sector in a developed economy.', 'Causes: cheaper overseas factory rivals + higher incomes shifting spending toward tertiary services.'] },
  { id: 'igbus-fc-12-3', subtopicId: 'igcse-bus-1-2', front: 'Define a mixed economy and contrast private vs public sectors.', backBullets: ['Mixed economy combines private-sector businesses and government-owned public services.', 'Private aims for profit/growth; Public prioritises universal essential services (healthcare, education).'] },
  { id: 'igbus-fc-12-4', subtopicId: 'igcse-bus-1-2', front: 'State one benefit and one risk of privatisation.', backBullets: ['Benefit: competition can boost efficiency and selling state assets raises government revenue.', 'Risk: private monopolies may hike prices or close unprofitable rural services.'] },
  { id: 'igbus-fc-12-5', subtopicId: 'igcse-bus-1-2', front: 'Which sector does a Public Limited Company (Plc) belong to?', backBullets: ['The PRIVATE sector — NOT the public sector!', '"Public" only means private citizens can buy its shares on a stock exchange.'] },

  // 1.3 (5)
  { id: 'igbus-fc-13-1', subtopicId: 'igcse-bus-1-3', front: 'Give 4 characteristics of a successful entrepreneur.', backBullets: ['Risk-taker, creative/innovative, self-confident, hard-working, optimistic, independent, effective communicator.'] },
  { id: 'igbus-fc-13-2', subtopicId: 'igcse-bus-1-3', front: 'State TWO reasons why an entrepreneur writes a business plan.', backBullets: ['Helps persuade banks or investors to provide startup finance by showing cash-flow forecasts.', 'Guides management decisions and lowers startup failure risk by researching the market first.'] },
  { id: 'igbus-fc-13-3', subtopicId: 'igcse-bus-1-3', front: 'List 4 valid ways to measure business size — and the 1 common wrong answer.', backBullets: ['Valid: number of employees, value of output, value of sales, capital employed.', 'NOT valid: Profit (measures performance, not size!).'] },
  { id: 'igbus-fc-13-4', subtopicId: 'igcse-bus-1-3', front: 'Contrast horizontal, backward vertical, forward vertical, and conglomerate integration.', backBullets: ['Horizontal: rival at same stage. Conglomerate: unrelated industry (spreads risk).', 'Backward vertical: buys supplier; Forward vertical: buys customer/retailer.'] },
  { id: 'igbus-fc-13-5', subtopicId: 'igcse-bus-1-3', front: 'Give 3 reasons why businesses stay small or fail early.', backBullets: ['Stay small: personal service industry, small local market, owner wants full control.', 'Fail early: poor cash flow/working capital, overtrading, poor planning, or fierce rivals.'] },

  // 1.4 (5)
  { id: 'igbus-fc-14-1', subtopicId: 'igcse-bus-1-4', front: 'Contrast unlimited liability with limited liability.', backBullets: ['Unlimited (sole trader/partnership): personal assets can be seized to settle business debts.', 'Limited (Ltd/Plc): shareholders lose at most the money they invested in shares.'] },
  { id: 'igbus-fc-14-2', subtopicId: 'igcse-bus-1-4', front: 'State one advantage and one drawback of a Sole Trader vs a Partnership.', backBullets: ['Sole trader: keeps 100% profit and total control, but limited finance and heavy workload.', 'Partnership: extra capital and shared skills, but shared profits, disagreements, and unlimited liability.'] },
  { id: 'igbus-fc-14-3', subtopicId: 'igcse-bus-1-4', front: 'Compare a Private Limited Company (Ltd) with a Public Limited Company (Plc).', backBullets: ['Ltd: private share sales (family/friends), safe from hostile stock-market takeovers.', 'Plc: raises huge capital on a stock exchange, but must publish accounts and faces takeover risk.'] },
  { id: 'igbus-fc-14-4', subtopicId: 'igcse-bus-1-4', front: 'Evaluate franchising from BOTH the franchisor and franchisee viewpoints.', backBullets: ['Franchisee: proven brand and training (lower risk), but fees/royalties and strict rules.', 'Franchisor: fast low-capital expansion, but one bad outlet can ruin the whole brand.'] },
  { id: 'igbus-fc-14-5', subtopicId: 'igcse-bus-1-4', front: 'Define a joint venture and state one risk.', backBullets: ['Two or more independent businesses pool capital, local knowledge, and risk on a joint project.', 'Risk: clashing management styles or disputes over sharing profits.'] },

  // 1.5 (5)
  { id: 'igbus-fc-15-1', subtopicId: 'igcse-bus-1-5', front: 'List 5 common private-sector business objectives.', backBullets: ['Survival, Profit, Growth, Market Share, and Service to the Community.'] },
  { id: 'igbus-fc-15-2', subtopicId: 'igcse-bus-1-5', front: 'What are the 3 objectives of a social enterprise?', backBullets: ['Social (e.g. jobs for disadvantaged groups), Environmental (protecting nature), and Financial (making enough profit to reinvest and survive).'] },
  { id: 'igbus-fc-15-3', subtopicId: 'igcse-bus-1-5', front: 'Why do a business’s objectives change over its lifetime?', backBullets: ['Startups focus on survival; established firms shift to profit, growth, and market share.', 'A sudden recession or aggressive new rival can force a return to survival.'] },
  { id: 'igbus-fc-15-4', subtopicId: 'igcse-bus-1-5', front: 'Distinguish internal stakeholders from external stakeholders.', backBullets: ['Internal: owners/shareholders, managers, employees.', 'External: customers, banks/lenders, suppliers, government, local community.'] },
  { id: 'igbus-fc-15-5', subtopicId: 'igcse-bus-1-5', front: 'Give TWO classic IGCSE examples of stakeholder conflict.', backBullets: ['Workers want higher wages vs shareholders wanting higher dividends.', '24/7 factory expansion boosts profit & jobs vs residents opposing noise and pollution.'] },

  // 2.1 (5)
  { id: 'igbus-fc-21-1', subtopicId: 'igcse-bus-2-1', front: 'Summarise F.W. Taylor’s motivation theory and one limitation.', backBullets: ['Workers are driven primarily by money -> pay piece-rate per unit produced.', 'Limitation: ignores non-financial needs and can cause rushed, low-quality output.'] },
  { id: 'igbus-fc-21-2', subtopicId: 'igcse-bus-2-1', front: 'List Maslow’s 5 levels of human needs from bottom to top.', backBullets: ['1. Physiological -> 2. Safety -> 3. Social -> 4. Esteem -> 5. Self-actualisation.'], hint: 'Please Stop Sending Emails Soon' },
  { id: 'igbus-fc-21-3', subtopicId: 'igcse-bus-2-1', front: 'Contrast Herzberg’s Hygiene factors with Motivators.', backBullets: ['Hygiene (pay, conditions, policy, job security): prevent dissatisfaction when good.', 'Motivators (achievement, recognition, responsibility, challenging work): actively motivate.'] },
  { id: 'igbus-fc-21-4', subtopicId: 'igcse-bus-2-1', front: 'Contrast Job Rotation, Job Enlargement, and Job Enrichment.', backBullets: ['Rotation: swap equally skilled tasks. Enlargement: more tasks at the SAME skill level.', 'Enrichment: higher-level responsibility and decision-making (true Herzberg motivator).'] },
  { id: 'igbus-fc-21-5', subtopicId: 'igcse-bus-2-1', front: 'List 5 financial reward methods and match one to sales staff.', backBullets: ['Time-rate wages, piece-rate, salary, commission, bonuses, profit-sharing, fringe benefits.', 'Sales staff: basic salary + commission (% of sales).'] },

  // 2.2 (5)
  { id: 'igbus-fc-22-1', subtopicId: 'igcse-bus-2-2', front: 'Define chain of command, span of control, and delayering.', backBullets: ['Chain of command: top-to-bottom route of authority. Span of control: direct reports per manager.', 'Delayering: cutting middle management layers — speeds communication, cuts wages, widens spans.'] },
  { id: 'igbus-fc-22-2', subtopicId: 'igcse-bus-2-2', front: 'Name the 5 core functions of management.', backBullets: ['Planning, Organising, Coordinating, Commanding, and Controlling.'] },
  { id: 'igbus-fc-22-3', subtopicId: 'igcse-bus-2-2', front: 'Compare Autocratic, Democratic, and Laissez-faire leadership styles.', backBullets: ['Autocratic: fast one-way orders (crises/unskilled staff).', 'Democratic: consults skilled teams (higher motivation, slower).', 'Laissez-faire: staff decide day-to-day (creative/research experts).'] },
  { id: 'igbus-fc-22-4', subtopicId: 'igcse-bus-2-2', front: 'What happens to accountability when a manager delegates a task?', backBullets: ['Authority to perform the task passes down to the subordinate.', 'Ultimate ACCOUNTABILITY always remains with the manager!'] },
  { id: 'igbus-fc-22-5', subtopicId: 'igcse-bus-2-2', front: 'State TWO benefits to workers of joining a trade union.', backBullets: ['Collective bargaining power to negotiate higher wages and safer working conditions.', 'Legal representation and support in unfair dismissal or grievance disputes.'] },

  // 2.3 (5)
  { id: 'igbus-fc-23-1', subtopicId: 'igcse-bus-2-3', front: 'Contrast a Job Description with a Person Specification.', backBullets: ['Job description: duties, tasks, and responsibilities of the job itself.', 'Person specification: qualifications, experience, and traits required from applicants.'] },
  { id: 'igbus-fc-23-2', subtopicId: 'igcse-bus-2-3', front: 'Compare Internal Recruitment with External Recruitment.', backBullets: ['Internal: fast, cheap, motivates staff, knows culture — but no fresh ideas.', 'External: wider talent pool and fresh outside skills — but costly, slower, and riskier.'] },
  { id: 'igbus-fc-23-3', subtopicId: 'igcse-bus-2-3', front: 'Compare Induction, On-the-job, and Off-the-job training.', backBullets: ['Induction: welcomes new hires to rules/safety.', 'On-the-job: cheap, job-specific, risks passing bad habits.', 'Off-the-job: costly external experts, brings fresh certified skills.'] },
  { id: 'igbus-fc-23-4', subtopicId: 'igcse-bus-2-3', front: 'Distinguish Dismissal from Redundancy clearly.', backBullets: ['Dismissal: employee fired for their own fault (misconduct or incompetence).', 'Redundancy: job role is no longer needed (automation/falling demand — NOT worker fault).'] },
  { id: 'igbus-fc-23-5', subtopicId: 'igcse-bus-2-3', front: 'State 4 areas covered by legal controls over employment.', backBullets: ['Employment contracts, unfair dismissal protection, anti-discrimination, health & safety, and legal minimum wage.'] },

  // 2.4 (5)
  { id: 'igbus-fc-24-1', subtopicId: 'igcse-bus-2-4', front: 'What makes business communication genuinely EFFECTIVE?', backBullets: ['Sender transmits clear message via right medium -> Receiver understands it -> Feedback confirms receipt and understanding.'] },
  { id: 'igbus-fc-24-2', subtopicId: 'igcse-bus-2-4', front: 'Contrast Internal vs External and One-way vs Two-way communication.', backBullets: ['Internal: inside firm (staff rota); External: outside parties (customer invoice).', 'One-way: no reply allowed (posters); Two-way: dialogue with feedback (meetings).'] },
  { id: 'igbus-fc-24-3', subtopicId: 'igcse-bus-2-4', front: 'Compare Verbal, Written, and Visual communication methods.', backBullets: ['Verbal: rapid two-way feedback, no written proof.', 'Written: permanent legal record and exact figures, slower discussion.', 'Visual: summarises data rapidly across languages, needs extra detail.'] },
  { id: 'igbus-fc-24-4', subtopicId: 'igcse-bus-2-4', front: 'Identify 4 common barriers to effective communication.', backBullets: ['Technical jargon, long chains of command, broken IT/noisy environment, and receiver distrust or lack of feedback.'] },
  { id: 'igbus-fc-24-5', subtopicId: 'igcse-bus-2-4', front: 'How can a tall factory shorten its communication chain and cut distortion?', backBullets: ['Delayer middle management, use plain language, and require brief written confirmation feedback.'] },

  // 3.1 (5)
  { id: 'igbus-fc-31-1', subtopicId: 'igcse-bus-3-1', front: 'State 3 core roles of marketing inside a business.', backBullets: ['Identify customer needs, satisfy them profitably, maintain customer loyalty, and anticipate market changes.'] },
  { id: 'igbus-fc-31-2', subtopicId: 'igcse-bus-3-1', front: 'Why have consumer markets become much more competitive?', backBullets: ['Globalisation opens borders to foreign rivals; e-commerce allows instant worldwide price comparison; lower transport costs.'] },
  { id: 'igbus-fc-31-3', subtopicId: 'igcse-bus-3-1', front: 'Compare Niche Markets with Mass Markets.', backBullets: ['Niche: small specialised segment, less rivalry, high unit margins, vulnerable to taste shifts.', 'Mass: huge volume, economies of scale, fierce competition and lower margins.'] },
  { id: 'igbus-fc-31-4', subtopicId: 'igcse-bus-3-1', front: 'List 6 bases used for Market Segmentation.', backBullets: ['Socio-economic group/income, age, region/location, gender, use of product, and lifestyle.'] },
  { id: 'igbus-fc-31-5', subtopicId: 'igcse-bus-3-1', front: 'Give one benefit and one cost of market segmentation.', backBullets: ['Benefit: avoids wasted ad spend and matches products accurately to buyer needs.', 'Cost: designing separate products and campaigns for each segment raises R&D and marketing costs.'] },

  // 3.2 (5)
  { id: 'igbus-fc-32-1', subtopicId: 'igcse-bus-3-2', front: 'Contrast Market-Orientated with Product-Orientated businesses.', backBullets: ['Market-orientated: researches customer wants first before designing the product (lower launch failure risk).', 'Product-orientated: builds a product first, then tries to persuade buyers to purchase it.'] },
  { id: 'igbus-fc-32-2', subtopicId: 'igcse-bus-3-2', front: 'Compare Primary (field) with Secondary (desk) market research.', backBullets: ['Primary: first-hand, fresh, exclusive to firm’s question — but slow and costly.', 'Secondary: existing data (census, reports, sales logs) — fast and cheap, yet potentially outdated or shared with rivals.'] },
  { id: 'igbus-fc-32-3', subtopicId: 'igcse-bus-3-2', front: 'Distinguish Quantitative data from Qualitative data with methods.', backBullets: ['Quantitative: numerical statistics/percentages (questionnaires, online surveys).', 'Qualitative: detailed customer opinions and reasons (focus groups, in-depth interviews).'] },
  { id: 'igbus-fc-32-4', subtopicId: 'igcse-bus-3-2', front: 'Contrast Random Sampling with Quota Sampling.', backBullets: ['Random: everyone has equal chance (unbiased, may pick non-buyers).', 'Quota: fixed numbers from target segments (relevant respondents, risks interviewer bias).'] },
  { id: 'igbus-fc-32-5', subtopicId: 'igcse-bus-3-2', front: 'Give 3 reasons why market research data can be inaccurate.', backBullets: ['Small unrepresentative sample size, biased/leading questions, interviewer bias, or outdated secondary reports.'] },

  // 3.3 (5) [DIAGRAM]
  { id: 'igbus-fc-33-1', subtopicId: 'igcse-bus-3-3', front: 'List all 5 stages of the Product Life Cycle in order.', backBullets: ['Development -> Introduction -> Growth -> Maturity -> Decline.'], diagram: 'product-life-cycle', hint: 'Dogs In Gardens Munch Daisies' },
  { id: 'igbus-fc-33-2', subtopicId: 'igcse-bus-3-3', front: 'Give 4 extension strategies used during Maturity on the PLC.', backBullets: ['Introduce new flavours/features, enter new overseas markets, redesign packaging, find new uses, or launch fresh ads.'], diagram: 'product-life-cycle' },
  { id: 'igbus-fc-33-3', subtopicId: 'igcse-bus-3-3', front: 'Define USP and Brand Image and state why both boost profit.', backBullets: ['USP: unique feature setting the product apart from rivals.', 'Brand image: distinct identity creating brand loyalty and permitting higher prices.'] },
  { id: 'igbus-fc-33-4', subtopicId: 'igcse-bus-3-3', front: 'List 4 key roles of product packaging.', backBullets: ['Protects/preserves goods, displays legal ingredients/warnings, promotes brand on shelves, and adds user convenience.'] },
  { id: 'igbus-fc-33-5', subtopicId: 'igcse-bus-3-3', front: 'State one benefit and one risk of heavy investment in New Product Development.', backBullets: ['Benefit: creates a USP, beats rivals, and replaces older products entering decline.', 'Risk: high R&D spending with no guarantee customers will buy the prototype.'] },

  // 3.4 (5) [DIAGRAM]
  { id: 'igbus-fc-34-1', subtopicId: 'igcse-bus-3-4', front: 'Compare Price Skimming with Penetration Pricing.', backBullets: ['Skimming: high launch price for unique innovative product to recover R&D from early adopters.', 'Penetration: low initial price to enter a crowded market and build share rapidly.'] },
  { id: 'igbus-fc-34-2', subtopicId: 'igcse-bus-3-4', front: 'Write the Cost-Plus Pricing method and its main limitation.', backBullets: ['Selling price = Average unit cost + (% profit mark-up).', 'Limitation: ignores rival prices — may lose all sales if competitors are cheaper.'] },
  { id: 'igbus-fc-34-3', subtopicId: 'igcse-bus-3-4', front: 'How does raising price affect Total Revenue when demand is Elastic vs Inelastic?', backBullets: ['Price Elastic (many substitutes, flat curve): raising price causes revenue to FALL.', 'Price Inelastic (few substitutes/strong brand, steep curve): raising price causes revenue to RISE.'], diagram: 'elasticity-curves' },
  { id: 'igbus-fc-34-4', subtopicId: 'igcse-bus-3-4', front: 'Define Dynamic Pricing with two real-world industry examples.', backBullets: ['Changing prices flexibly in real time as customer demand fluctuates.', 'Examples: airline tickets, hotel rooms, and ride-hailing surge pricing.'] },
  { id: 'igbus-fc-34-5', subtopicId: 'igcse-bus-3-4', front: 'When is Promotional Pricing useful and what is its main risk?', backBullets: ['Useful to clear seasonal unsold stock or revive slow demand temporarily.', 'Risk: cuts profit margins and can damage a luxury brand image if used too often.'] },

  // 3.5 (5)
  { id: 'igbus-fc-35-1', subtopicId: 'igcse-bus-3-5', front: 'List the 4 main channels of distribution.', backBullets: ['1. Producer -> Consumer (Direct).', '2. Producer -> Retailer -> Consumer.', '3. Producer -> Wholesaler -> Retailer -> Consumer.', '4. Producer -> Agent -> Wholesaler/Retailer -> Consumer.'] },
  { id: 'igbus-fc-35-2', subtopicId: 'igcse-bus-3-5', front: 'Explain what "breaking bulk" means for a wholesaler.', backBullets: ['Buying massive bulk loads from factories and splitting them into small affordable quantities for independent retailers.'] },
  { id: 'igbus-fc-35-3', subtopicId: 'igcse-bus-3-5', front: 'Give one advantage and one drawback of using a wholesaler.', backBullets: ['Advantage: cuts producer’s transport and warehouse costs and supplies thousands of small shops.', 'Drawback: adds an extra profit mark-up, slows delivery (bad for fresh food), and reduces brand control.'] },
  { id: 'igbus-fc-35-4', subtopicId: 'igcse-bus-3-5', front: 'When should a business use an overseas Agent?', backBullets: ['When exporting to an unfamiliar foreign country where a local agent understands language, customs, laws, and retail contacts.'] },
  { id: 'igbus-fc-35-5', subtopicId: 'igcse-bus-3-5', front: 'Name 4 factors determining the best channel of distribution.', backBullets: ['Perishability of product, technical complexity/price, purchase frequency, and geographic location of buyers.'] },

  // 3.6 (5)
  { id: 'igbus-fc-36-1', subtopicId: 'igcse-bus-3-6', front: 'Contrast Informative Advertising with Persuasive Advertising.', backBullets: ['Informative: gives factual product info (features, price, launch date).', 'Persuasive: convinces consumers emotionally to choose one brand over competitors.'] },
  { id: 'igbus-fc-36-2', subtopicId: 'igcse-bus-3-6', front: 'Contrast Advertising with Sales Promotion.', backBullets: ['Advertising (TV, social ads, billboards): builds long-term brand image and awareness.', 'Sales promotion (BOGOF, vouchers, free samples, loyalty cards): triggers short-term sales boosts.'] },
  { id: 'igbus-fc-36-3', subtopicId: 'igcse-bus-3-6', front: 'What is a Marketing Budget and how do managers judge cost-effectiveness?', backBullets: ['Financial plan capping promotional spending for a period.', 'Cost-effective if additional gross profit generated exceeds promotional expenditure.'] },
  { id: 'igbus-fc-36-4', subtopicId: 'igcse-bus-3-6', front: 'State 2 advantages and 2 drawbacks of E-Commerce for businesses.', backBullets: ['Pros: 24/7 global reach and lower physical shop rent/staff costs.', 'Cons: website/cybersecurity expenses, delivery & return costs, and easy rival price comparison.'] },
  { id: 'igbus-fc-36-5', subtopicId: 'igcse-bus-3-6', front: 'Give one benefit and one risk of Social Media Marketing.', backBullets: ['Benefit: cheap, tightly targeted ads with instant two-way customer engagement.', 'Risk: negative reviews go viral fast and older buyer segments may be missed.'] },

  // 3.7 (5)
  { id: 'igbus-fc-37-1', subtopicId: 'igcse-bus-3-7', front: 'What makes a Marketing Strategy effective across the 4 Ps?', backBullets: ['All 4 Ps (Product, Price, Place, Promotion) are consistent with each other, fit the budget, and match the target segment and objective.'] },
  { id: 'igbus-fc-37-2', subtopicId: 'igcse-bus-3-7', front: 'List 3 consumer protections enforced by marketing legislation.', backBullets: ['Goods must be safe and fit for purpose, weights/descriptions must be accurate, and misleading/false adverts are banned.'] },
  { id: 'igbus-fc-37-3', subtopicId: 'igcse-bus-3-7', front: 'Give 4 challenges of entering a new foreign market.', backBullets: ['Cultural/language differences, lack of local knowledge, import tariffs/shipping costs, unfamiliar safety laws, and exchange-rate risk.'] },
  { id: 'igbus-fc-37-4', subtopicId: 'igcse-bus-3-7', front: 'State 4 ways to overcome barriers when expanding into foreign markets.', backBullets: ['Joint venture with a local firm, licensing local production, international franchising, or hiring local agents and localising the 4 Ps.'] },
  { id: 'igbus-fc-37-5', subtopicId: 'igcse-bus-3-7', front: 'Define Localisation with one fast-food example.', backBullets: ['Adapting products, menus, packaging, or ads to match local foreign customs and laws.', 'Example: removing beef/pork items or adding local vegetarian spices when entering India.'] },
];

export const IGCSE_BUS_EXAM_PRACTICE_1_TO_3: ExamQuestionItem[] = [
  {
    id: 'igbus-exam-1-1',
    subtopicId: 'igcse-bus-1-1',
    number: 1,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] Maya runs an artisan bakery buying $1.20 of flour, butter, and packaging per cupcake and selling each branded cupcake for $6.00 to local office workers.',
    parts: [
      {
        id: 'igbus-exam-1-1a',
        label: '(a)',
        prompt: 'Calculate Maya’s added value per cupcake and explain TWO ways she could increase added value further.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Added value = $6.00 − $1.20 = $4.80 per cupcake. Maya can raise selling price via premium gift packaging or stronger branding, and lower bought-in input costs by buying flour and butter in bulk from cheaper suppliers.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates added value = $4.80', numericMatch: { value: 4.8, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'Raise selling price via branding, gift packaging, quality, or convenience', requiredKeywordGroups: [['brand', 'packag', 'quality', 'price', 'convenien']] },
            { id: 'mp3', markDescription: 'Lower bought-in material costs via bulk buying or cheaper suppliers', requiredKeywordGroups: [['bulk', 'cheaper', 'supplier', 'input', 'lower cost']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-1-2',
    subtopicId: 'igcse-bus-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] Over 25 years in Country Z, employment in coal mining and farming fell from 30% to 8%, manufacturing fell from 35% to 18%, while banking, tourism, and retail rose to 74%.',
    parts: [
      {
        id: 'igbus-exam-1-2a',
        label: '(a)',
        prompt: 'Identify the sector change shown by the data and explain TWO reasons why this shift occurs in developed economies.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Country Z is experiencing de-industrialisation as employment shifts from primary and secondary manufacturing into the tertiary service sector. Reasons include rising household incomes increasing demand for leisure, banking, and tourism services, plus factory automation and cheaper overseas manufacturing.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies de-industrialisation / shift from secondary to tertiary services', requiredKeywordGroups: [['de-industrialisation', 'deindustrialisation', 'tertiary']] },
            { id: 'mp2', markDescription: 'Higher consumer incomes raise demand for tertiary services', requiredKeywordGroups: [['income', 'service', 'leisure', 'tourism', 'banking']] },
            { id: 'mp3', markDescription: 'Factory automation or cheaper overseas manufacturing imports', requiredKeywordGroups: [['automation', 'machine', 'robot', 'cheaper', 'overseas', 'import']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-1-3',
    subtopicId: 'igcse-bus-1-3',
    number: 3,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] BeanCraft Coffee operates 18 cafés and plans to take over a commercial coffee-bean roasting farm in Brazil to control its raw supplies.',
    parts: [
      {
        id: 'igbus-exam-1-3a',
        label: '(a)',
        prompt: 'Identify this type of external integration and explain TWO advantages for BeanCraft Coffee.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Buying its coffee-bean farm supplier is backward vertical integration. Advantages include guaranteeing a reliable, high-quality supply of raw beans and absorbing the supplier’s profit margin to lower unit costs (or restricting bean supply to rival cafés).',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies backward vertical integration', requiredKeywordGroups: [['backward'], ['vertical']] },
            { id: 'mp2', markDescription: 'Guarantees reliable supply or tighter quality control of raw beans', requiredKeywordGroups: [['reliable', 'assured', 'control', 'quality', 'supply']] },
            { id: 'mp3', markDescription: 'Captures supplier profit margin / lowers costs / restricts rivals', requiredKeywordGroups: [['margin', 'lower cost', 'cheaper', 'rival', 'competitor']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-1-4',
    subtopicId: 'igcse-bus-1-4',
    number: 4,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] Two electricians operate SparkFix as an unincorporated partnership and want to borrow $180,000 to open three new regional depots while protecting their family homes.',
    parts: [
      {
        id: 'igbus-exam-1-4a',
        label: '(a)',
        prompt: 'Recommend whether SparkFix should convert into a Private Limited Company (Ltd) and justify your answer with TWO advantages.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'SparkFix should convert into a Private Limited Company (Ltd) because owners gain limited liability so their personal family homes cannot be seized if the business fails, they can raise extra capital by selling shares privately to trusted investors without hostile takeover risk, and the company gains separate legal continuity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Recommends Private Limited Company (Ltd) with limited liability protecting homes', requiredKeywordGroups: [['limited liability'], ['home', 'personal', 'asset', 'protect']] },
            { id: 'mp2', markDescription: 'Raises additional finance by selling shares privately while keeping control', requiredKeywordGroups: [['share', 'capital', 'finance'], ['private', 'control', 'takeover']] },
            { id: 'mp3', markDescription: 'Gains separate legal identity / continuity of existence', requiredKeywordGroups: [['continuity', 'separate legal', 'incorporat']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-1-5',
    subtopicId: 'igcse-bus-1-5',
    number: 5,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] SteelWorks Plc plans to automate its factory floor with robotics to cut labour costs by 25%, raising dividends while making 80 local workers redundant.',
    parts: [
      {
        id: 'igbus-exam-1-5a',
        label: '(a)',
        prompt: 'Explain ONE stakeholder conflict created by this plan and state why SteelWorks’ business objectives might change during a severe economic recession.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Shareholders want higher profits and dividends from automation, directly conflicting with employees and the local community who want job security and steady wages rather than 80 redundancies. During a severe recession, SteelWorks’ main objective would shift from profit maximisation or growth to survival so it can stay solvent until demand recovers.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies shareholders seeking higher profit/dividends', requiredKeywordGroups: [['shareholder', 'owner'], ['profit', 'dividend']] },
            { id: 'mp2', markDescription: 'Conflicts with employees/local community seeking job security/wages', requiredKeywordGroups: [['worker', 'employee', 'community'], ['job', 'redundan', 'wage', 'security']] },
            { id: 'mp3', markDescription: 'Objective shifts to survival during a recession', requiredKeywordGroups: [['survival', 'survive']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-2-1',
    subtopicId: 'igcse-bus-2-1',
    number: 6,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] SupportHub operates a customer call centre with 38% annual labour turnover despite paying above-average hourly wages to staff doing repetitive scripted calls.',
    parts: [
      {
        id: 'igbus-exam-2-1a',
        label: '(a)',
        prompt: 'Using Herzberg’s Two-Factor Theory, explain why high wages failed to motivate staff and recommend ONE non-financial motivator.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'According to Herzberg, pay is only a hygiene factor that prevents dissatisfaction rather than actively motivating workers. SupportHub lacks true motivators such as achievement and responsibility; introducing job enrichment (giving agents authority to solve complex cases independently) or teamworking will raise motivation and cut turnover.',
          markPoints: [
            { id: 'mp1', markDescription: 'Pay is only a hygiene factor preventing dissatisfaction', requiredKeywordGroups: [['hygiene'], ['dissatisfaction', 'prevent']] },
            { id: 'mp2', markDescription: 'True motivators (responsibility, recognition, achievement) are missing', requiredKeywordGroups: [['motivator', 'responsibility', 'recognition', 'achievement']] },
            { id: 'mp3', markDescription: 'Recommends job enrichment, rotation, teamwork, or training/promotion', requiredKeywordGroups: [['enrichment', 'rotation', 'team', 'training', 'promotion']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-2-2',
    subtopicId: 'igcse-bus-2-2',
    number: 7,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] SkyLine Logistics has 8 hierarchical management layers, causing slow customer-service responses, high middle-management salaries, and distorted instructions.',
    parts: [
      {
        id: 'igbus-exam-2-2a',
        label: '(a)',
        prompt: 'Explain TWO benefits of delayering for SkyLine Logistics and evaluate ONE risk of widening managers’ span of control.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Delayering shortens the chain of command so communication travels faster with less distortion, cuts middle-management salary costs, and encourages delegation. However, a wider span of control increases each manager’s workload, risking reduced supervision, mistakes, and stress.',
          markPoints: [
            { id: 'mp1', markDescription: 'Shortens chain of command for faster, clearer communication', requiredKeywordGroups: [['chain of command', 'faster', 'communication', 'distortion']] },
            { id: 'mp2', markDescription: 'Reduces management salary costs / boosts delegation', requiredKeywordGroups: [['cost', 'salary', 'delegat']] },
            { id: 'mp3', markDescription: 'Risk of wider span: manager overload, weak control/supervision, or errors', requiredKeywordGroups: [['workload', 'supervision', 'control', 'mistake', 'stress', 'overload']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-2-3',
    subtopicId: 'igcse-bus-2-3',
    number: 8,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] PrecisionMed Ltd manufactures surgical sensors and must train 12 newly hired technicians in strict sterile assembly standards on a tight budget.',
    parts: [
      {
        id: 'igbus-exam-2-3a',
        label: '(a)',
        prompt: 'Compare on-the-job training with off-the-job training for PrecisionMed Ltd and justify which method is more suitable.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'On-the-job training is cheaper, tailored to PrecisionMed’s exact factory equipment, and keeps output flowing, though bad habits can be passed on and mistakes risk costly sterile defects. Off-the-job training from external specialists teaches up-to-date certified sterile techniques with zero factory disruption, though course fees are high. Overall, because surgical sensors demand strict zero-defect safety, off-the-job training (or induction plus certified off-the-job) is justified despite higher cost.',
          markPoints: [
            { id: 'mp1', markDescription: 'On-the-job pro/con (cheap & tailored vs bad habits / lower trainer output)', requiredKeywordGroups: [['on-the-job'], ['cheap', 'cost', 'tailor', 'bad habit', 'output']] },
            { id: 'mp2', markDescription: 'Off-the-job pro/con (expert up-to-date skills vs expensive fees / lost work time)', requiredKeywordGroups: [['off-the-job'], ['expert', 'specialist', 'up-to-date', 'expensive', 'cost']] },
            { id: 'mp3', markDescription: 'Supported judgement linked to sterile surgical quality or tight budget', requiredKeywordGroups: [['overall', 'recommend', 'justif', 'sterile', 'surgical', 'budget']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-2-4',
    subtopicId: 'igcse-bus-2-4',
    number: 9,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] GlobalShip Co operates warehouses across four time zones and recently suffered a costly missed dispatch after an urgent delivery change was pinned only to a canteen noticeboard.',
    parts: [
      {
        id: 'igbus-exam-2-4a',
        label: '(a)',
        prompt: 'Explain TWO communication barriers that caused this mistake and recommend a better method to prevent future dispatch errors.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Barriers include choosing the wrong medium (a physical noticeboard cannot reach remote overseas warehouses fast) and one-way communication with no feedback confirming receipt. Switching to two-way video calls or instant email/ERP alerts with read-receipt confirmation provides a written record and immediate clarification across time zones.',
          markPoints: [
            { id: 'mp1', markDescription: 'Wrong medium (physical noticeboard unsuited to urgent multi-site message)', requiredKeywordGroups: [['medium', 'noticeboard', 'channel', 'remote', 'time zone']] },
            { id: 'mp2', markDescription: 'One-way communication lacking feedback confirmation', requiredKeywordGroups: [['feedback', 'one-way', 'confirm']] },
            { id: 'mp3', markDescription: 'Recommends email/messaging/video call with written record or two-way feedback', requiredKeywordGroups: [['email', 'video', 'instant', 'two-way'], ['record', 'feedback', 'confirm', 'clarif']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-1',
    subtopicId: 'igcse-bus-3-1',
    number: 10,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] EcoStride launches vegan trail-running shoes exclusively for ultra-marathon athletes rather than competing directly against mass-market sneaker giants.',
    parts: [
      {
        id: 'igbus-exam-3-1a',
        label: '(a)',
        prompt: 'Explain ONE advantage and ONE risk of targeting this niche market instead of a mass market.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Advantage: targeting a niche market avoids intense competition from giant brands and meets marathon runners’ exact vegan performance needs, enabling higher prices and strong profit margins. Risk: the small total market size limits economies of scale and leaves EcoStride vulnerable if niche tastes change or a large rival enters.',
          markPoints: [
            { id: 'mp1', markDescription: 'Advantage: less competition from big brands', requiredKeywordGroups: [['less competition', 'avoid', 'competitor']] },
            { id: 'mp2', markDescription: 'Advantage: tailored specialist needs allow higher price / profit margins', requiredKeywordGroups: [['tailor', 'specific', 'need', 'higher price', 'margin']] },
            { id: 'mp3', markDescription: 'Risk: small market size limits economies of scale or vulnerable to taste shifts', requiredKeywordGroups: [['small', 'limited', 'economies of scale', 'vulnerable', 'risk']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-2',
    subtopicId: 'igcse-bus-3-2',
    number: 11,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] FreshJuice Ltd plans to launch a sparkling ginger drink aimed at gym-goers aged 18–30 and is deciding between free government health reports (secondary research) or focus groups (primary research).',
    parts: [
      {
        id: 'igbus-exam-3-2a',
        label: '(a)',
        prompt: 'Evaluate whether FreshJuice Ltd should use primary focus groups or secondary research before launching the drink.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Secondary government reports are cheap and fast to gather for market trends, but they are outdated, general, and available to competitors. Primary focus groups using quota sampling of 18–30 gym-goers deliver up-to-date qualitative taste feedback specific to the ginger drink, though they cost more and take longer. Overall, combining quick secondary data first with targeted primary focus groups gives the highest accuracy.',
          markPoints: [
            { id: 'mp1', markDescription: 'Secondary pro/con: cheap & fast vs outdated/general/shared with rivals', requiredKeywordGroups: [['secondary'], ['cheap', 'fast', 'outdated', 'general', 'competitor']] },
            { id: 'mp2', markDescription: 'Primary focus-group pro/con: up-to-date specific taste insight vs costly/slow', requiredKeywordGroups: [['primary', 'focus group'], ['specific', 'taste', 'up-to-date', 'cost', 'time']] },
            { id: 'mp3', markDescription: 'Clear justified recommendation (quota sampling / combining both)', requiredKeywordGroups: [['overall', 'recommend', 'combine', 'quota', 'accurate']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-3',
    subtopicId: 'igcse-bus-3-3',
    number: 12,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] CrispWave’s flagship salted-potato snack has reached the Maturity stage of its Product Life Cycle as rival brands copy its recipe and supermarket sales flatten.',
    diagram: 'product-life-cycle',
    parts: [
      {
        id: 'igbus-exam-3-3a',
        label: '(a)',
        prompt: 'Recommend TWO extension strategies CrispWave could use to prevent sales entering the Decline stage and justify the better option.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'CrispWave could introduce new spicy or baked healthy flavours (product modification) or expand into overseas export markets and convenience-store multipacks (new markets/packaging). Introducing new baked flavours is often better because it leverages existing supermarket shelf space and brand loyalty at lower risk than entering an unfamiliar foreign market.',
          markPoints: [
            { id: 'mp1', markDescription: 'Extension strategy 1: new flavours, healthier recipe, or redesigned packaging', requiredKeywordGroups: [['flavour', 'flavor', 'recipe', 'packaging', 'product']] },
            { id: 'mp2', markDescription: 'Extension strategy 2: new markets/segments, overseas export, or refreshed advertising', requiredKeywordGroups: [['new market', 'overseas', 'export', 'segment', 'advert', 'multipack']] },
            { id: 'mp3', markDescription: 'Justifies chosen strategy in CrispWave’s context', requiredKeywordGroups: [['better', 'recommend', 'loyalty', 'lower risk', 'shelf']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-4',
    subtopicId: 'igcse-bus-3-4',
    number: 13,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] NovaTech has patented an ultra-thin foldable tablet with zero direct competitors after spending $4 million on R&D.',
    diagram: 'elasticity-curves',
    parts: [
      {
        id: 'igbus-exam-3-4a',
        label: '(a)',
        prompt: 'Recommend a suitable launch pricing strategy for NovaTech and explain why demand for the tablet is likely to be price inelastic initially.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'NovaTech should use price skimming, setting a high initial price to earn strong profit margins from early adopters and recover its $4m R&D costs quickly. Demand is initially price inelastic because the patented design has zero close substitutes, meaning a high price causes only a small drop in quantity demanded and maximises total revenue.',
          markPoints: [
            { id: 'mp1', markDescription: 'Recommends price skimming (high initial launch price)', requiredKeywordGroups: [['skimming']] },
            { id: 'mp2', markDescription: 'Recovers $4m R&D costs / captures high margins from early adopters', requiredKeywordGroups: [['r&d', 'research', 'early adopter', 'recover', 'margin']] },
            { id: 'mp3', markDescription: 'Inelastic demand due to zero close substitutes / unique patented product', requiredKeywordGroups: [['inelastic'], ['no substitute', 'zero', 'unique', 'patent']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-5',
    subtopicId: 'igcse-bus-3-5',
    number: 14,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] SunOrchard farms organic peaches and currently sells through a wholesaler to small grocers, losing 35% of the retail price in middleman mark-ups while fruit loses freshness in transit.',
    parts: [
      {
        id: 'igbus-exam-3-5a',
        label: '(a)',
        prompt: 'Explain ONE advantage and ONE drawback if SunOrchard switches to direct-to-consumer (online subscription box) distribution.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Advantage: cutting out the wholesaler lets SunOrchard keep the 35% profit margin and deliver fresher perishable peaches rapidly straight from farm to customer. Drawback: SunOrchard must now pay for its own refrigerated delivery logistics, packaging, and marketing to reach individual consumers rather than relying on the wholesaler’s established retail network.',
          markPoints: [
            { id: 'mp1', markDescription: 'Keeps higher profit margin by removing wholesaler mark-up', requiredKeywordGroups: [['margin', 'profit', '35%', 'middleman', 'wholesaler']] },
            { id: 'mp2', markDescription: 'Faster delivery preserves freshness for perishable peaches', requiredKeywordGroups: [['fresh', 'perishable', 'faster', 'direct']] },
            { id: 'mp3', markDescription: 'Drawback: own delivery/storage/marketing costs or smaller reach', requiredKeywordGroups: [['delivery', 'logistics', 'cost', 'marketing', 'reach']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-6',
    subtopicId: 'igcse-bus-3-6',
    number: 15,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] BiteBar is launching a new protein snack bar for university students on a small $5,000 promotional budget and must choose between free campus samples or national TV advertising.',
    parts: [
      {
        id: 'igbus-exam-3-6a',
        label: '(a)',
        prompt: 'Evaluate both promotional methods and justify which is better for BiteBar.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'National TV advertising reaches millions and builds long-term brand awareness, but far exceeds BiteBar’s $5,000 budget and wastes spend on non-students. Free campus samples are a targeted sales promotion letting students taste the new bar risk-free to persuade first purchases, though reach is locally limited. Overall, free campus samples paired with low-cost social media marketing is far more cost-effective for a $5,000 budget.',
          markPoints: [
            { id: 'mp1', markDescription: 'TV advertising pro/con: wide reach/brand image vs exceeds $5,000 budget/wasted audience', requiredKeywordGroups: [['tv'], ['reach', 'expensive', 'budget', '5,000', '5000']] },
            { id: 'mp2', markDescription: 'Free samples pro/con: lets students taste new food product vs small local reach/stock cost', requiredKeywordGroups: [['sample'], ['taste', 'try', 'persuad', 'target', 'limited']] },
            { id: 'mp3', markDescription: 'Justifies free samples (+ social media) fitting BiteBar’s small budget and food product', requiredKeywordGroups: [['overall', 'recommend', 'sample', 'cost-effective', 'budget']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-3-7',
    subtopicId: 'igcse-bus-3-7',
    number: 16,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] UrbanBrew Coffee (based in Europe) plans to open 20 cafés in Southeast Asia, where local tastes favour iced sweet drinks and strict foreign-ownership laws apply.',
    parts: [
      {
        id: 'igbus-exam-3-7a',
        label: '(a)',
        prompt: 'Explain TWO problems UrbanBrew faces entering this foreign market and recommend ONE method to overcome them.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Problems include cultural taste differences (needing localised iced menus rather than standard hot espresso) and legal barriers restricting foreign ownership plus lack of local market knowledge. Forming a joint venture with a local café chain shares setup costs, meets ownership laws, and provides local cultural expertise (though profits must be shared).',
          markPoints: [
            { id: 'mp1', markDescription: 'Cultural/taste differences requiring product localisation', requiredKeywordGroups: [['cultural', 'taste', 'localis', 'iced', 'menu']] },
            { id: 'mp2', markDescription: 'Legal foreign-ownership restrictions or lack of local market knowledge', requiredKeywordGroups: [['law', 'legal', 'ownership', 'knowledge', 'tariff']] },
            { id: 'mp3', markDescription: 'Recommends joint venture, franchising, or licensing to share risk & gain local insight', requiredKeywordGroups: [['joint venture', 'franchise', 'licens', 'agent']] },
          ],
        },
      },
    ],
  },
];
