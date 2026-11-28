import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ECON_TOPICS_1_TO_3: TopicDefinition[] = [
  {
    number: 1,
    title: 'The Basic Economic Problem',
    subtopics: [
      {
        id: 'econ-1-1',
        code: '1.1',
        slug: '1.1-scarcity-factors-opportunity-cost-ppc',
        title: 'Scarcity, Factors of Production, Opportunity Cost & PPC',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-1-2',
        code: '1.2',
        slug: '1.2-economic-assumptions-sectors-resource-allocation',
        title: 'Economic Assumptions, Sectors & Resource Allocation',
        readingMinutes: 8,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'The Allocation of Resources',
    subtopics: [
      {
        id: 'econ-2-1',
        code: '2.1',
        slug: '2.1-role-of-markets-allocating-resources',
        title: 'Role of Markets in Allocating Resources',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-2',
        code: '2.2',
        slug: '2.2-demand-curves-movements-shifts-determinants',
        title: 'Demand: Curves, Movements vs Shifts & Determinants',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-3',
        code: '2.3',
        slug: '2.3-supply-curves-extensions-shifts-determinants',
        title: 'Supply: Curves, Extensions vs Shifts & Determinants',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-4',
        code: '2.4',
        slug: '2.4-price-determination-equilibrium-disequilibrium',
        title: 'Price Determination, Market Equilibrium & Disequilibrium',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-5',
        code: '2.5',
        slug: '2.5-price-changes-simultaneous-market-shifts',
        title: 'Price Changes & Simultaneous Market Shifts',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-6',
        code: '2.6',
        slug: '2.6-price-elasticity-of-demand-ped-total-revenue',
        title: 'Price Elasticity of Demand (PED) & Total Revenue',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-7',
        code: '2.7',
        slug: '2.7-price-elasticity-of-supply-pes-determinants',
        title: 'Price Elasticity of Supply (PES) & Determinants',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-8',
        code: '2.8',
        slug: '2.8-market-economic-system-and-market-failure',
        title: 'Market Economic System & Market Failure (Externalities, Merit/Demerit, Public Goods)',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-2-9',
        code: '2.9',
        slug: '2.9-mixed-economic-system-government-intervention',
        title: 'Mixed Economic System & Government Intervention (Taxes, Subsidies, Price Controls)',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Microeconomic Decision Makers',
    subtopics: [
      {
        id: 'econ-3-1',
        code: '3.1',
        slug: '3.1-money-commercial-banks-central-banks',
        title: 'Money, Commercial Banks & Central Banks',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-3-2',
        code: '3.2',
        slug: '3.2-households-spending-saving-borrowing',
        title: 'Households: Influences on Spending, Saving & Borrowing',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-3-3',
        code: '3.3',
        slug: '3.3-workers-wages-division-of-labour-trade-unions',
        title: 'Workers, Wage Determination, Division of Labour & Trade Unions',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-3-4',
        code: '3.4',
        slug: '3.4-firms-size-mergers-economies-of-scale',
        title: 'Firms: Size, Mergers & Economies/Diseconomies of Scale',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-3-5',
        code: '3.5',
        slug: '3.5-firms-production-labour-capital-intensive-productivity',
        title: 'Firms & Production: Labour- vs Capital-Intensive & Productivity',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'econ-3-6',
        code: '3.6',
        slug: '3.6-firms-costs-revenue-business-objectives',
        title: "Firms' Costs, Revenue & Business Objectives",
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-3-7',
        code: '3.7',
        slug: '3.7-market-structures-competitive-vs-monopoly',
        title: 'Market Structures: Competitive Markets vs Monopoly',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const ECON_NOTES_1_TO_3: Record<string, NoteLesson> = {
  'econ-1-1': {
    subtopicId: 'econ-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Scarcity, Factors of Production, Opportunity Cost & PPC',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 1 The Basic Economic Problem (Updated for 2027 specification)',
    youtubeId: 'Nvy1sEKrtYU',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Scarcity, Economic vs Free Goods & Four Factors (CELL)', cardId: 'econ-1-1-c1' },
      { time: '4:05', seconds: 245, label: 'Factor Mobility & Opportunity Cost in Decision-Making', cardId: 'econ-1-1-c2' },
      { time: '8:10', seconds: 490, label: 'Production Possibility Curves (PPC) & Outward/Inward Shifts', cardId: 'econ-1-1-c3' },
    ],
    cards: [
      {
        id: 'econ-1-1-c1',
        title: 'Scarcity, Economic Goods & The Four Factors of Production',
        summary: 'Unlimited human wants chasing finite resources create scarcity, requiring scarce factors of production (CELL) to be allocated carefully.',
        bullets: [
          '**The basic economic problem** - **scarcity** arises because human wants are unlimited while available resources (**factors of production**) are finite.',
          '**Four factors & exact rewards (CELL)** - **Capital** (man-made machinery/factories used to produce other goods → **interest**), **Enterprise** (risk-taking organisation combining factors → **profit**), **Land** (natural resources such as oil, farmland, fish → **rent**), **Labour** (human mental and physical effort → **wages**).',
          '**Economic goods vs Free goods** - **economic goods** require scarce resources and carry an opportunity cost (e.g. bread, roads, state hospitals); **free goods** are naturally abundant with zero opportunity cost (e.g. sunlight, ambient air).',
        ],
        subsections: [
          {
            heading: 'Quantity & Quality of Factors of Production',
            bullets: [
              '**Raising quantity** - land reclamation, higher retirement age/immigration (labour), net capital investment, or lower taxes encouraging entrepreneurs.',
              '**Raising quality** - fertilisers/conservation (land), education and healthcare (labour), faster automation/AI software (capital), management training (enterprise).',
            ],
            exampleHeading: 'Concrete check: Why state schooling is an economic good',
            examples: [
              'Even when students pay $0 tuition, state schools consume scarce teachers, land, electricity, and $12bn of government tax revenue that could have funded hospitals — so schooling is an **economic good**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'scarcity', definition: 'Situation where finite resources are insufficient to satisfy unlimited human wants.' },
          { term: 'factors of production', definition: 'The four economic resources used to produce goods and services: land, labour, capital, and enterprise.' },
        ],
      },
      {
        id: 'econ-1-1-c2',
        title: 'Factor Mobility & Opportunity Cost',
        summary: 'Opportunity cost measures the exact next best alternative foregone, while mobility determines how easily factors switch uses or locations.',
        bullets: [
          '**Opportunity cost** - the **next best alternative foregone** when making an economic choice (applies to consumers, workers, producers, and governments).',
          '**Occupational mobility** - ease of moving a factor between different jobs or industries (e.g. a forklift truck or versatile accountant is occupationally mobile; a specialised blast furnace is immobile).',
          '**Geographical mobility** - ease of moving a factor from one region to another (land is geographically immobile; labour mobility is limited by housing costs, visas, and family ties).',
        ],
        subsections: [
          {
            heading: 'Opportunity Cost Across Decision Makers',
            bullets: [
              '**Consumers** - spending $60 on concert tickets means foregoing the next best purchase, such as new trainers.',
              '**Governments** - allocating $400m of tax revenue to a high-speed rail link means foregoing the next best public project, such as 8 regional clinics.',
            ],
            exampleHeading: 'Worked numerical example: Opportunity cost along a PPC',
            examples: [
              'If an economy reallocates workers to raise smartphone output from 200 to 260 units (+60), while laptop output falls from 150 to 120 units (−30), the opportunity cost of 60 smartphones is **30 laptops** (or **0.5 laptops per smartphone**).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'opportunity cost', definition: 'The next best alternative foregone when choosing one use of scarce resources over another.' },
        ],
      },
      {
        id: 'econ-1-1-c3',
        title: 'Production Possibility Curves (PPC) & Shifts',
        summary: 'Points on a PPC show full productive efficiency, points inside show unemployed resources, and outward shifts represent long-run economic growth.',
        bullets: [
          '**Reading PPC points** - **On the curve** = full employment and productive efficiency; **Inside the curve** = unemployed or inefficiently used resources; **Outside the curve** = currently **unattainable** with existing resources and technology.',
          '**Movement along vs Shift of the PPC** - a **movement along** reallocates existing resources between two goods (showing opportunity cost); an **outward shift** shows an increase in **productive capacity** (potential economic growth).',
          '**Causes of shifts** - **Outward shift**: better education/training, technological innovation, net investment in capital goods, immigration, or resource discovery. **Inward shift**: war, natural disasters, emigration, or severe capital depreciation.',
        ],
        subsections: [
          {
            heading: 'Capital Goods vs Consumer Goods Trade-Off',
            bullets: [
              '**Future growth trade-off** - producing more **capital goods** (machinery, factories) today sacrifices current **consumer goods** (living standards now), but shifts the PPC further outward in future years.',
            ],
            exampleHeading: 'Real-world comparison: South Korea vs low-investment economies',
            examples: [
              'South Korea invested over 30% of GDP into capital goods, ports, and STEM universities from 1970–2000, shifting its PPC dramatically outward and multiplying real output per head.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'production possibility curve', definition: 'Diagram showing the maximum combinations of two goods an economy can produce with its existing resources and technology.' },
        ],
        diagram: 'production-possibility-curve',
        memoryAid: 'CELL factor rewards: Capital → Interest, Enterprise → Profit, Land → Rent, Labour → Wages!',
        commonMistake: 'NEVER claim "free healthcare" or "public parks" are free goods — they use scarce doctors, builders, and tax revenue, so they are ECONOMIC goods with an opportunity cost!',
      },
    ],
    keyTerms: [
      { term: 'Scarcity', definition: 'Finite resources relative to unlimited human wants.' },
      { term: 'Factors of production', definition: 'Land, labour, capital, and enterprise used to produce goods and services.' },
      { term: 'Opportunity cost', definition: 'The next best alternative foregone when making an economic choice.' },
      { term: 'Production possibility curve (PPC)', definition: 'Maximum combinations of two goods an economy can produce with full use of current resources.' },
    ],
    checklistPoints: [
      'Define scarcity, distinguish economic goods from free goods, and match all 4 factors (CELL) to their rewards',
      'Explain occupational vs geographical mobility and calculate opportunity cost for consumers, firms, and governments',
      'Interpret points inside, on, and outside a PPC and distinguish movements along a PPC from outward/inward shifts',
    ],
  },

  'econ-1-2': {
    subtopicId: 'econ-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Economic Assumptions, Sectors & Resource Allocation',
    readingMinutes: 8,
    videoTitle: 'Factors of Production & Sectors of the Economy | Edexcel IGCSE Economics (9-1)',
    youtubeId: 'fcClmydrgBo',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '8:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Rational Economic Assumptions: Consumers & Firms', cardId: 'econ-1-2-c1' },
      { time: '2:55', seconds: 175, label: 'Primary, Secondary & Tertiary Sectors & Deindustrialisation', cardId: 'econ-1-2-c2' },
      { time: '5:50', seconds: 350, label: 'The Three Economic Questions & Resource Allocation', cardId: 'econ-1-2-c3' },
    ],
    cards: [
      {
        id: 'econ-1-2-c1',
        title: 'Economic Assumptions: Rational Consumers & Profit-Maximising Firms',
        summary: 'Economic models assume consumers maximise utility and firms maximise profit, though real-world behaviour often deviates due to habit or imperfect information.',
        bullets: [
          '**Consumer rationality** - economists assume consumers compare prices and quality logically to **maximise utility (satisfaction)** from their limited income.',
          '**Firm rationality** - private-sector firms are assumed to **maximise profit** (Total Revenue − Total Cost) by lowering costs and selling products consumers want.',
          '**Why agents may NOT behave rationally** - **information gaps** (misjudging long-term costs of sugary drinks or loans), **habitual behaviour/brand loyalty**, **social influence**, and **computation difficulties** comparing complex tariffs.',
        ],
        subsections: [
          {
            heading: 'Alternative Objectives Beyond Profit',
            bullets: [
              '**Charities & social enterprises** - prioritise community welfare, fair-trade wages, or environmental sustainability rather than pure profit.',
            ],
            exampleHeading: 'Worked numerical check: Consumer choice & utility',
            examples: [
              'A shopper with $120 chooses between Broadband Plan A ($30/month, 100 Mbps) and Plan B ($36/month, 100 Mbps). A rational consumer saves **$6/month ($72/year)** by selecting Plan A unless inertia keeps them on Plan B.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'utility', definition: 'The satisfaction or benefit a consumer gains from consuming a good or service.' },
        ],
      },
      {
        id: 'econ-1-2-c2',
        title: 'Primary, Secondary & Tertiary Sectors of the Economy',
        summary: 'As economies develop, employment and GDP shift from primary extraction to secondary manufacturing and finally tertiary services.',
        bullets: [
          '**Primary sector** - extracting raw materials directly from nature (agriculture, mining, fishing, forestry); dominates low-income economies.',
          '**Secondary sector** - manufacturing, processing, and construction turning raw materials into finished goods (cars, textiles, steel, housing).',
          '**Tertiary sector** - providing services to consumers and businesses (banking, retail, tourism, healthcare, software); accounts for ~75%–80% of GDP in high-income countries.',
        ],
        subsections: [
          {
            heading: 'Structural Change & Deindustrialisation',
            bullets: [
              '**Why tertiary share grows** - rising household incomes increase demand for leisure/finance/health services, while mechanisation reduces labour needed in farming and factories.',
            ],
            exampleHeading: 'Real-world sector shares (% of GDP)',
            examples: [
              'In the UK, services (tertiary) generate roughly **80%** of GDP, manufacturing/construction (secondary) ~**19%**, and agriculture/mining (primary) under **1%**, whereas in Vietnam secondary manufacturing exceeds **35%**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'deindustrialisation', definition: 'Decline in the relative share of manufacturing (secondary sector) in a country’s GDP and employment as services expand.' },
        ],
      },
      {
        id: 'econ-1-2-c3',
        title: 'The Three Economic Questions & Resource Allocation',
        summary: 'Every society must answer What, How, and For Whom to produce using market forces, government planning, or a mixed combination.',
        bullets: [
          '**What to produce?** - deciding which goods and services to make (e.g. renewable turbines vs luxury SUVs) given scarce resources.',
          '**How to produce?** - choosing the production method: **labour-intensive** (more workers) vs **capital-intensive** (more automated machinery).',
          '**For whom to produce?** - deciding who receives output: those with the highest **ability and willingness to pay** (market) vs allocation based on **need** (state welfare/healthcare).',
        ],
        subsections: [
          {
            heading: 'Ceteris Paribus in Economic Analysis',
            bullets: [
              '**Holding other factors constant** - economists use **ceteris paribus** ("all other things being equal") to isolate the effect of one variable at a time (e.g. price on demand).',
            ],
            exampleHeading: 'Concrete check: Linking sectors to factor intensity',
            examples: [
              'A rice farm in rural Bangladesh uses labour-intensive methods (low wage costs), whereas a wheat farm in Australia uses capital-intensive combine harvesters (high wages, huge acreage).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ceteris paribus', definition: 'Latin assumption meaning "all other factors remain constant", used to isolate one economic cause-and-effect link.' },
        ],
        memoryAid: 'Three sectors flow down the chain: Primary (extract) → Secondary (make) → Tertiary (serve)!',
        commonMistake: 'Do NOT assume low-income countries have zero tertiary sector — they have retail markets and transport, but a far HIGHER proportion of workers work in primary agriculture!',
      },
    ],
    keyTerms: [
      { term: 'Utility', definition: 'Satisfaction or benefit received from consuming a good or service.' },
      { term: 'Primary sector', definition: 'Industries extracting raw materials from nature (farming, fishing, mining).' },
      { term: 'Secondary sector', definition: 'Manufacturing and construction industries converting raw materials into finished goods.' },
      { term: 'Tertiary sector', definition: 'Service industries such as banking, healthcare, tourism, and retail.' },
    ],
    checklistPoints: [
      'State the core rationality assumptions for consumers and firms and explain why real-world decisions can deviate',
      'Classify economic activities into primary, secondary, and tertiary sectors and explain structural change',
      'Explain how societies answer the three resource allocation questions (what, how, and for whom to produce)',
    ],
  },

  'econ-2-1': {
    subtopicId: 'econ-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Role of Markets in Allocating Resources',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics Chapter 2.1 The role of markets in allocating resources (Updated for 2027 syllabus)',
    youtubeId: 'pvcHbtRErgk',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Microeconomics vs Macroeconomics & Market Decision Makers', cardId: 'econ-2-1-c1' },
      { time: '3:10', seconds: 190, label: 'The Price Mechanism: Signalling, Incentivising & Rationing', cardId: 'econ-2-1-c2' },
      { time: '6:20', seconds: 380, label: 'Market, Mixed & Planned Economic Systems Compared', cardId: 'econ-2-1-c3' },
    ],
    cards: [
      {
        id: 'econ-2-1-c1',
        title: 'Microeconomics vs Macroeconomics & What Markets Do',
        summary: 'Microeconomics studies individual markets and decision makers, while macroeconomics examines the whole economy; markets connect buyers and sellers to set prices.',
        bullets: [
          '**Microeconomics** - studies individual consumers, workers, firms, and single markets (e.g. why the price of avocados rises or how a cinema prices tickets).',
          '**Macroeconomics** - studies whole-economy aggregates such as **GDP growth**, **inflation**, **unemployment**, **interest rates**, and the **balance of payments**.',
          '**A market** - any arrangement (physical shop or digital exchange) where buyers and sellers interact to exchange goods, services, or factors of production at a price.',
        ],
        subsections: [
          {
            heading: 'Key Economic Decision Makers',
            bullets: [
              '**Three core groups** - **households** (consumers and workers), **firms** (producers hiring factors), and **governments** (taxing, spending, and regulating).',
            ],
            exampleHeading: 'Concrete check: Micro vs Macro exam classification',
            examples: [
              'A 10% rise in wheat prices due to drought is **microeconomic**; a 6% rise in the national Consumer Prices Index (CPI) across all goods is **macroeconomic**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'microeconomics', definition: 'Study of the behaviour and decisions of individual consumers, firms, and specific product or labour markets.' },
          { term: 'macroeconomics', definition: 'Study of the entire national economy, including total output (GDP), inflation, unemployment, and international trade.' },
        ],
      },
      {
        id: 'econ-2-1-c2',
        title: 'The Price Mechanism: Signalling, Incentivising & Rationing',
        summary: 'In a market economy, price changes automatically reallocate scarce resources without central planners via signalling, incentives, and rationing.',
        bullets: [
          '**Signalling function** - rising prices signal to producers that a good is in **high demand / scarce** (and falling prices signal surplus or waning consumer interest).',
          '**Incentivising function** - higher prices increase potential **profit margins**, motivating firms to allocate more land, labour, and capital into producing that product.',
          '**Rationing function** - when a good is scarce, higher prices **ration** limited supply to the consumers most willing and able to pay, eliminating shortages.',
        ],
        subsections: [
          {
            heading: 'Consumer Sovereignty',
            bullets: [
              '**Consumers "vote" with spending** - firms that fail to match consumer tastes lose sales and exit, redirecting scarce resources toward popular goods.',
            ],
            exampleHeading: 'Worked market reallocation: Surge in electric-scooter demand',
            examples: [
              'When urban demand jumps, scooter prices rise from $300 to $420 (+40%). This signals scarcity, rations stock to urgent buyers, and incentivises factories to shift assembly lines into producing 50% more scooters.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price mechanism', definition: 'System where changes in market prices arising from supply and demand automatically allocate scarce resources.' },
        ],
        diagram: 'supply-demand-equilibrium',
      },
      {
        id: 'econ-2-1-c3',
        title: 'Market, Mixed & Planned Economic Systems',
        summary: 'Economic systems differ by who owns resources and how allocation decisions are coordinated — private prices, state planning, or both.',
        bullets: [
          '**Market economic system** - resources are privately owned; prices and profit motives answer what, how, and for whom to produce with minimal state role.',
          '**Planned (command) economic system** - the state owns key resources and central planners set production quotas and fixed prices (risking shortages, low choice, and weak efficiency incentives).',
          '**Mixed economic system** - combines a **private sector** (guided by prices/profits) with a **public sector** (government providing merit/public goods, taxing demerit goods, and protecting vulnerable groups).',
        ],
        subsections: [
          {
            heading: 'Real-World Spectrum',
            bullets: [
              '**No pure extremes** - almost every modern economy is mixed, though Singapore and the USA lean closer to free markets while Sweden and France have larger public sectors.',
            ],
            exampleHeading: 'Concrete check: Public spending share (% of GDP)',
            examples: [
              'Government spending represents around **15%–20%** of GDP in Singapore versus **45%–55%** in France, illustrating different balances inside mixed economies.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'resource allocation', definition: 'The way scarce factors of production are distributed among competing uses to produce goods and services.' },
        ],
        memoryAid: 'Price mechanism functions = SIR: Signalling, Incentivising, Rationing!',
        commonMistake: 'NEVER claim the price mechanism guarantees a FAIR allocation — it allocates goods to those with ABILITY TO PAY, which can leave low-income households priced out of essentials!',
      },
    ],
    keyTerms: [
      { term: 'Microeconomics', definition: 'Study of individual markets, consumers, workers, and firms.' },
      { term: 'Macroeconomics', definition: 'Study of economy-wide indicators such as GDP, inflation, and unemployment.' },
      { term: 'Price mechanism', definition: 'Allocation of scarce resources through price changes driven by supply and demand.' },
      { term: 'Resource allocation', definition: 'Distribution of scarce factors of production across competing goods and services.' },
    ],
    checklistPoints: [
      'Distinguish microeconomic issues from macroeconomic issues using concrete examples',
      'Explain how the price mechanism allocates resources via signalling, incentivising, and rationing (SIR)',
      'Compare how market, planned, and mixed economic systems answer what, how, and for whom to produce',
    ],
  },

  'econ-2-2': {
    subtopicId: 'econ-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Demand: Curves, Movements vs Shifts & Determinants',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics: Chapter 2.2 Demand (Updated for 2027 syllabus)',
    youtubeId: '_cCn0TG7n4M',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:12',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Effective Demand, Individual vs Market Demand & Law of Demand', cardId: 'econ-2-2-c1' },
      { time: '3:25', seconds: 205, label: 'Extensions & Contractions vs Shifts of the Demand Curve', cardId: 'econ-2-2-c2' },
      { time: '6:50', seconds: 410, label: 'Non-Price Determinants (Income, Substitutes, Complements & Tastes)', cardId: 'econ-2-2-c3' },
    ],
    cards: [
      {
        id: 'econ-2-2-c1',
        title: 'Effective Demand & The Law of Demand',
        summary: 'Demand must be backed by financial ability to pay; as price falls, quantity demanded rises along a downward-sloping curve.',
        bullets: [
          '**Effective demand** - the **willingness AND financial ability** to buy a product at a given price over a given period (wanting a Ferrari without money is NOT demand).',
          '**Law of demand** - there is an **inverse relationship** between price and quantity demanded (*ceteris paribus*): lower price → higher quantity demanded; higher price → lower quantity demanded.',
          '**Individual vs Market demand** - **market demand** is the horizontal sum of all individual consumers’ quantities demanded at every price level.',
        ],
        subsections: [
          {
            heading: 'Building a Market Demand Schedule',
            bullets: [
              '**Horizontal summation** - add each buyer’s quantity at the same price to derive the total market demand curve.',
            ],
            exampleHeading: 'Worked market demand schedule',
            examples: [
              'At $4 per coffee, Buyer A buys 3 cups, Buyer B buys 2, and Buyer C buys 5 → Market quantity demanded = **10 cups**. When price drops to $2, total market quantity extends to **18 cups**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'effective demand', definition: 'Willingness and financial ability of consumers to purchase a product at a given price.' },
        ],
      },
      {
        id: 'econ-2-2-c2',
        title: 'Movements Along vs Shifts of the Demand Curve',
        summary: 'A change in the product’s OWN price causes an extension or contraction along D; non-price factors shift the entire demand curve left or right.',
        bullets: [
          '**Extension of demand** - a **fall in the good’s own price** causes a downward movement ALONG the existing demand curve (higher quantity demanded).',
          '**Contraction of demand** - a **rise in the good’s own price** causes an upward movement ALONG the existing demand curve (lower quantity demanded).',
          '**Shift of demand (increase/decrease)** - caused ONLY by **non-price factors**: a **rightward shift (D₁ → D₂)** means more is demanded at every price; a **leftward shift** means less is demanded at every price.',
        ],
        subsections: [
          {
            heading: 'Diagram Precision Checklist',
            bullets: [
              '**Label every axis and shift** - vertical axis = Price (P), horizontal axis = Quantity (Q), curves labelled D₁ and D₂ with directional arrows showing the shift.',
            ],
            exampleHeading: 'Worked comparison: Own price vs income change',
            examples: [
              'Cinema ticket cut from $12 to $9 → **extension** along D₁ from 400 to 520 tickets. A 10% rise in local wages at the same $12 price → **rightward shift** (D₁ → D₂) from 400 to 480 tickets.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'extension of demand', definition: 'An increase in quantity demanded caused strictly by a fall in the product’s own price, shown as a movement down along the demand curve.' },
        ],
        diagram: 'supply-demand-equilibrium',
      },
      {
        id: 'econ-2-2-c3',
        title: 'Non-Price Determinants of Demand (PASIFIC)',
        summary: 'Changes in disposable income, prices of substitutes/complements, advertising, tastes, population, and interest rates shift the entire demand curve.',
        bullets: [
          '**Disposable income** - higher income shifts demand **right** for **normal goods** (restaurant meals, smartphones), but shifts demand **left** for **inferior goods** (own-brand instant noodles, second-hand bus passes).',
          '**Substitutes (competitive demand)** - goods in alternative use (e.g. Pepsi & Coca-Cola): a **rise in Pepsi’s price** shifts demand for Coca-Cola **right**.',
          '**Complements (joint demand)** - goods used together (e.g. games consoles & video games): a **rise in console prices** shifts demand for video games **left**.',
          '**Other shifters** - **advertising**, **fashion/tastes**, **population size & age structure**, **expectations of future prices**, and **interest rates/credit availability**.',
        ],
        subsections: [
          {
            heading: 'Normal vs Inferior Goods Check',
            bullets: [
              '**Direction of income effect** - always verify whether a product is a normal good (positive link to income) or an inferior good (negative link to income).',
            ],
            exampleHeading: 'Concrete real-world example: Ageing population',
            examples: [
              'In Japan, where over 29% of the population is aged 65+, demographic change steadily shifts the demand curve for healthcare and assisted-living services to the **right**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'substitute good', definition: 'A product that can be consumed in place of another (e.g. tea and coffee); a price rise in one increases demand for the other.' },
          { term: 'complement good', definition: 'A product consumed together with another (e.g. printers and ink cartridges); a price rise in one lowers demand for the other.' },
        ],
        memoryAid: 'PASIFIC demand shifters: Population, Advertising, Substitutes, Income, Fashion/tastes, Interest rates, Complements!',
        commonMistake: 'NEVER write "a rise in price shifts the demand curve to the left" — a rise in the good’s OWN price causes a CONTRACTION along the existing demand curve!',
      },
    ],
    keyTerms: [
      { term: 'Effective demand', definition: 'Willingness and ability to buy a product at a given price.' },
      { term: 'Extension of demand', definition: 'Higher quantity demanded caused by a fall in the product’s own price.' },
      { term: 'Substitute good', definition: 'Alternative product that can replace another in consumption.' },
      { term: 'Complement good', definition: 'Product jointly demanded alongside another product.' },
    ],
    checklistPoints: [
      'Define effective demand and derive market demand by summing individual quantities',
      'Accurately distinguish extensions/contractions along a demand curve from leftward/rightward shifts',
      'Apply PASIFIC determinants — including normal vs inferior goods, substitutes, and complements — to real-world scenarios',
    ],
  },

  'econ-2-3': {
    subtopicId: 'econ-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'Supply: Curves, Extensions vs Shifts & Determinants',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics: Chapter 2.3 Supply (Updated for 2027 syllabus)',
    youtubeId: 'C1em1Rfl0hI',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Law of Supply, Profit Motive & Market Supply', cardId: 'econ-2-3-c1' },
      { time: '3:05', seconds: 185, label: 'Movements Along vs Shifts of the Supply Curve', cardId: 'econ-2-3-c2' },
      { time: '6:10', seconds: 370, label: 'Non-Price Supply Shifters: Costs, Tech, Taxes & Subsidies', cardId: 'econ-2-3-c3' },
    ],
    cards: [
      {
        id: 'econ-2-3-c1',
        title: 'The Law of Supply & Market Supply',
        summary: 'Higher prices raise potential profit margins and help cover higher unit costs, causing firms to supply a larger quantity along an upward-sloping curve.',
        bullets: [
          '**Supply** - the **willingness and ability of producers** to offer a good or service for sale at various prices over a given time period.',
          '**Law of supply** - there is a **direct (positive) relationship** between price and quantity supplied (*ceteris paribus*): higher price → greater profit incentive → firms expand output and new firms enter.',
          '**Market supply** - the horizontal sum of all individual firms’ quantities supplied at every price level.',
        ],
        subsections: [
          {
            heading: 'Why Supply Slopes Upward',
            bullets: [
              '**Rising marginal costs** - expanding production often requires overtime wages or less efficient equipment, so producers need a higher price to make extra units profitable.',
            ],
            exampleHeading: 'Worked market supply schedule',
            examples: [
              'If 3 bakeries each supply 100 loaves at $2, market supply = **300 loaves**. If price rises to $3 (+50%), higher profit margins encourage each bakery to bake 150 loaves → market supply extends to **450 loaves**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'supply', definition: 'The willingness and ability of firms to produce and sell a good or service at a given price over a period of time.' },
        ],
      },
      {
        id: 'econ-2-3-c2',
        title: 'Extensions & Contractions vs Shifts of Supply',
        summary: 'Only a change in the product’s own price causes an extension or contraction along S; cost, technology, tax, or weather changes shift the whole supply curve.',
        bullets: [
          '**Extension of supply** - a **rise in the product’s own price** causes an upward movement ALONG the existing supply curve.',
          '**Contraction of supply** - a **fall in the product’s own price** causes a downward movement ALONG the existing supply curve.',
          '**Shift of supply** - a **rightward shift (increase in supply)** means firms are willing to supply MORE at every price; a **leftward shift (decrease in supply)** means firms supply LESS at every price.',
        ],
        subsections: [
          {
            heading: 'Reading Left vs Right Visually',
            bullets: [
              '**Always say LEFT or RIGHT (never "up" or "down")** - a leftward shift looks visually "higher", which tricks students into writing "supply increased" when supply actually DECREASED!',
            ],
            exampleHeading: 'Concrete check: Visual trap avoided',
            examples: [
              'When electricity bills jump by 30% for steelmakers, the supply curve shifts **LEFT** (firms need a higher price to supply the same 10,000 tonnes, or supply only 7,500 tonnes at the old price).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'extension of supply', definition: 'An increase in quantity supplied resulting solely from a rise in the product’s own price.' },
        ],
      },
      {
        id: 'econ-2-3-c3',
        title: 'Non-Price Determinants of Supply (PINTSWC)',
        summary: 'Production costs, technology, indirect taxes, subsidies, weather shocks, and the number of firms in the industry shift the entire supply curve.',
        bullets: [
          '**Costs of production** - higher wages, energy, or raw-material prices reduce profitability and shift supply **LEFT**; cheaper inputs shift supply **RIGHT**.',
          '**Indirect taxes vs Subsidies** - an **indirect tax** (e.g. VAT, excise duty on petrol) adds to firm costs → supply shifts **LEFT**; a **subsidy** (government grant per unit) lowers costs → supply shifts **RIGHT**.',
          '**Technology & Productivity** - automated machinery and better worker training cut unit costs → supply shifts **RIGHT**.',
          '**Weather/natural shocks, Number of firms & Related goods** - droughts/floods shift agricultural supply **LEFT**; new firm entry shifts market supply **RIGHT**; **joint supply** (beef & leather) means rising beef output shifts leather supply **RIGHT**.',
        ],
        subsections: [
          {
            heading: 'Specific Unit Tax Impact on Supply',
            bullets: [
              '**Vertical shift equals tax** - a $2 per-pack tax shifts the supply curve vertically upward (to the **left**) by $2 at every quantity.',
            ],
            exampleHeading: 'Worked cost-shift example: Solar panel innovation',
            examples: [
              'Advances in silicon wafer manufacturing cut solar-panel production costs by 45% between 2015 and 2024, shifting global supply sharply **RIGHT** and slashing prices per watt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'indirect tax', definition: 'A tax levied on spending on goods and services (such as VAT or excise duty) that increases firms’ costs and shifts supply left.' },
          { term: 'subsidy', definition: 'A government financial grant to producers that reduces costs of production and shifts the supply curve right.' },
        ],
        memoryAid: 'PINTSWC supply shifters: Productivity, Indirect taxes, Number of firms, Technology, Subsidies, Weather, Costs of production!',
        commonMistake: 'NEVER say a supply curve shifts "up" or "down" — ALWAYS state shifts RIGHT (increase in supply) or LEFT (decrease in supply) so you never confuse higher costs with higher supply!',
      },
    ],
    keyTerms: [
      { term: 'Supply', definition: 'Willingness and ability of producers to sell a product at various prices.' },
      { term: 'Indirect tax', definition: 'Tax on expenditure (e.g. VAT or excise duty) raising production costs and shifting supply left.' },
      { term: 'Subsidy', definition: 'Government payment to producers lowering costs and shifting supply right.' },
      { term: 'Joint supply', definition: 'Situation where producing one good automatically produces another (e.g. beef and leather).' },
    ],
    checklistPoints: [
      'Explain why the supply curve slopes upward using profit incentives and rising marginal costs',
      'Distinguish extensions/contractions along S from leftward/rightward shifts of S',
      'Apply PINTSWC determinants — especially indirect taxes, subsidies, technology, and weather shocks — accurately',
    ],
  },

  'econ-2-4': {
    subtopicId: 'econ-2-4',
    subtopicCode: '2.4',
    subtopicTitle: 'Price Determination, Market Equilibrium & Disequilibrium',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics: Chapter 2.4 Price determination (Updated for 2027 syllabus)',
    youtubeId: 'u8EawjnkfpA',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Market Equilibrium & The Market-Clearing Price', cardId: 'econ-2-4-c1' },
      { time: '3:00', seconds: 180, label: 'Excess Demand (Shortage) & Upward Price Pressure', cardId: 'econ-2-4-c2' },
      { time: '6:05', seconds: 365, label: 'Excess Supply (Surplus) & Downward Price Pressure', cardId: 'econ-2-4-c3' },
    ],
    cards: [
      {
        id: 'econ-2-4-c1',
        title: 'Market Equilibrium (Market-Clearing Price)',
        summary: 'Market equilibrium occurs at the exact intersection of D and S where quantity demanded equals quantity supplied, leaving zero shortage or surplus.',
        bullets: [
          '**Equilibrium price (P*)** - the **market-clearing price** where **Qd = Qs**; every buyer willing to pay P* finds a seller and every seller willing to sell at P* clears their stock.',
          '**Why equilibrium is stable** - at P* there is **no tendency for price to change** unless an external non-price factor shifts either D or S.',
          '**Finding equilibrium from a schedule** - compare the Qd and Qs columns row by row until the exact price where both quantities match.',
        ],
        subsections: [
          {
            heading: 'Reading an Equilibrium Schedule',
            bullets: [
              '**Total expenditure at equilibrium** - calculate Total Revenue (TR) at equilibrium as **P* × Q***.',
            ],
            exampleHeading: 'Worked numerical schedule: Concert T-shirts',
            examples: [
              'At $10: Qd = 900, Qs = 300. At $15: Qd = 600, Qs = 600. At $20: Qd = 300, Qs = 900. Market equilibrium is **$15** and **600 T-shirts** (Total Revenue = $15 × 600 = **$9,000**).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'market equilibrium', definition: 'State where quantity demanded equals quantity supplied at the market-clearing price, with no shortage or surplus.' },
        ],
        diagram: 'supply-demand-equilibrium',
      },
      {
        id: 'econ-2-4-c2',
        title: 'Disequilibrium: Excess Demand (Shortage)',
        summary: 'Any price below equilibrium creates excess demand (Qd > Qs), prompting buyers to bid prices up until supply extends and demand contracts back to equilibrium.',
        bullets: [
          '**Excess demand (shortage)** - occurs when market price is **BELOW equilibrium (P < P*)**, so **quantity demanded exceeds quantity supplied (Qd − Qs > 0)**.',
          '**Self-correcting mechanism** - queues and empty shelves show sellers they can raise price; as price rises, **demand contracts** along D and **supply extends** along S until Qd = Qs again.',
        ],
        subsections: [
          {
            heading: 'Calculating the Size of a Shortage',
            bullets: [
              '**Formula** - **Shortage = Qd − Qs** at the given disequilibrium price.',
            ],
            exampleHeading: 'Worked shortage calculation',
            examples: [
              'In the T-shirt market above (equilibrium $15), if a vendor mistakenly prices shirts at **$10**, Qd = 900 and Qs = 300 → **excess demand (shortage) of 600 T-shirts**, pushing price up toward $15.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'excess demand', definition: 'Market disequilibrium (shortage) where quantity demanded exceeds quantity supplied because price is below equilibrium.' },
        ],
      },
      {
        id: 'econ-2-4-c3',
        title: 'Disequilibrium: Excess Supply (Surplus)',
        summary: 'Any price above equilibrium creates excess supply (Qs > Qd), leaving unsold stock that forces firms to cut prices back down to equilibrium.',
        bullets: [
          '**Excess supply (surplus)** - occurs when market price is **ABOVE equilibrium (P > P*)**, so **quantity supplied exceeds quantity demanded (Qs − Qd > 0)**.',
          '**Self-correcting mechanism** - piling unsold inventories (and storage costs) force producers to discount prices; as price falls, **supply contracts** along S and **demand extends** along D until the market clears.',
        ],
        subsections: [
          {
            heading: 'Calculating the Size of a Surplus',
            bullets: [
              '**Formula** - **Surplus = Qs − Qd** at the given price above equilibrium.',
            ],
            exampleHeading: 'Worked surplus calculation',
            examples: [
              'At **$20** per T-shirt, Qs = 900 and Qd = 300 → **excess supply (surplus) of 600 unsold shirts**. Retailers cut prices in clearance sales until price returns to $15.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'excess supply', definition: 'Market disequilibrium (surplus) where quantity supplied exceeds quantity demanded because price is above equilibrium.' },
          { term: 'disequilibrium', definition: 'Any market situation where quantity demanded does not equal quantity supplied at the prevailing price.' },
        ],
        memoryAid: 'Price BELOW E* → Shortage (Excess Demand) pushes P UP; Price ABOVE E* → Surplus (Excess Supply) pulls P DOWN!',
        commonMistake: 'When explaining how a shortage disappears, NEVER say "demand shifts left" — as price rises back to equilibrium, demand CONTRACTS and supply EXTENDS along the existing curves!',
      },
    ],
    keyTerms: [
      { term: 'Market equilibrium', definition: 'Price and quantity where Qd = Qs and the market clears with zero tendency to change.' },
      { term: 'Disequilibrium', definition: 'Situation where Qd ≠ Qs, producing either a shortage or a surplus.' },
      { term: 'Excess demand (shortage)', definition: 'Amount by which Qd exceeds Qs when price is below equilibrium.' },
      { term: 'Excess supply (surplus)', definition: 'Amount by which Qs exceeds Qd when price is above equilibrium.' },
    ],
    checklistPoints: [
      'Identify equilibrium price and quantity from both diagrams and numerical demand/supply schedules',
      'Calculate excess demand (shortage) and excess supply (surplus) accurately at disequilibrium prices',
      'Trace step-by-step how price movements eliminate shortages and surpluses through contractions and extensions',
    ],
  },

  'econ-2-5': {
    subtopicId: 'econ-2-5',
    subtopicCode: '2.5',
    subtopicTitle: 'Price Changes & Simultaneous Market Shifts',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics: Chapter 2.5 Price changes (Updated for 2027 syllabus)',
    youtubeId: 'nZiNTQ_qQmA',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'How Demand Shifts Change Equilibrium Price & Quantity', cardId: 'econ-2-5-c1' },
      { time: '3:15', seconds: 195, label: 'How Supply Shifts Change Equilibrium Price & Quantity', cardId: 'econ-2-5-c2' },
      { time: '6:30', seconds: 390, label: 'Simultaneous Shifts, Relative Magnitude & Interrelated Markets', cardId: 'econ-2-5-c3' },
    ],
    cards: [
      {
        id: 'econ-2-5-c1',
        title: 'Consequences of Demand Shifts on Price & Quantity',
        summary: 'A demand shift moves equilibrium price and quantity in the SAME direction — both rise when D shifts right, and both fall when D shifts left.',
        bullets: [
          '**Increase in demand (D₁ → D₂ right)** - creates temporary **excess demand** at the old price P₁ → price is bid **UP** (P₁ → P₂) → firms **extend supply** along S → equilibrium quantity **RISES** (Q₁ → Q₂).',
          '**Decrease in demand (D₁ → D₂ left)** - creates temporary **excess supply** at P₁ → price falls **DOWN** (P₁ → P₂) → firms **contract supply** along S → equilibrium quantity **FALLS** (Q₁ → Q₂).',
        ],
        subsections: [
          {
            heading: 'Four-Step Exam Chain for Price Changes',
            bullets: [
              '**Golden 4 steps** - (1) Identify which curve shifts and direction; (2) Note temporary shortage/surplus at P₁; (3) State price movement to P₂; (4) State extension/contraction along the other curve to Q₂.',
            ],
            exampleHeading: 'Worked example: Heatwave hits ice-cream market',
            examples: [
              'A 38°C heatwave shifts ice-cream demand right (D₁ → D₂). At the old $3 price there is a shortage of 200 cones/day, bidding price up to **$4** (+33%) and extending quantity supplied from 500 to **650 cones/day**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'demand shift', definition: 'Movement of the entire demand curve left or right caused by a non-price factor, creating a new equilibrium price and quantity.' },
        ],
      },
      {
        id: 'econ-2-5-c2',
        title: 'Consequences of Supply Shifts on Price & Quantity',
        summary: 'A supply shift moves equilibrium price and quantity in OPPOSITE directions — higher supply lowers price and raises quantity; lower supply raises price and cuts quantity.',
        bullets: [
          '**Increase in supply (S₁ → S₂ right)** - e.g. subsidy or new machinery → creates temporary **excess supply** at P₁ → price **FALLS** (P₁ → P₂) → consumers **extend demand** along D → quantity **RISES** (Q₁ → Q₂).',
          '**Decrease in supply (S₁ → S₂ left)** - e.g. drought, higher wages, or indirect tax → creates temporary **excess demand** at P₁ → price **RISES** (P₁ → P₂) → consumers **contract demand** along D → quantity **FALLS** (Q₁ → Q₂).',
        ],
        subsections: [
          {
            heading: 'Consequences for Producers & Consumers',
            bullets: [
              '**Rightward supply shift** - consumers benefit from lower prices and higher consumption; efficient producers with lower unit costs can gain sales volume and market share.',
            ],
            exampleHeading: 'Worked example: Global cocoa harvest disease',
            examples: [
              'Crop disease in West Africa cut cocoa supply by 15%, shifting S left → global cocoa prices surged from $3,000 to over **$6,000/tonne**, forcing chocolate makers to raise retail prices and reducing quantity demanded.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'supply shift', definition: 'Movement of the entire supply curve left or right due to changes in production costs, technology, taxes, subsidies, or shocks.' },
        ],
      },
      {
        id: 'econ-2-5-c3',
        title: 'Simultaneous Shifts & Interrelated Markets',
        summary: 'When both D and S shift at once, one equilibrium variable moves unambiguously while the other depends on which shift is larger.',
        bullets: [
          '**Both D and S shift RIGHT** - equilibrium **quantity definitely RISES**, while **price is ambiguous** (rises if demand shifts more than supply; falls if supply shifts more than demand).',
          '**D shifts RIGHT while S shifts LEFT** - equilibrium **price definitely RISES**, while **quantity is ambiguous** depending on the relative size of the two shifts.',
          '**Interrelated markets** - a supply shock in one market ripples into **substitutes**, **complements**, and **derived-demand** factor markets (e.g. higher car demand boosts demand for steel and tyres).',
        ],
        subsections: [
          {
            heading: 'Derived Demand & Composite Demand',
            bullets: [
              '**Derived demand** - demand for an input (e.g. lithium, builders) derived from demand for the final good (electric vehicles, new homes).',
              '**Composite demand** - a raw material demanded for multiple rival uses (e.g. milk for cheese and butter; higher cheese demand cuts milk supply for butter, raising butter’s price).',
            ],
            exampleHeading: 'Worked simultaneous shift: Electric vehicles (EVs)',
            examples: [
              'Rising environmental awareness shifts EV demand right (+20%), while battery breakthroughs shift EV supply right (+35%). Result: EV quantity **jumps sharply**, and because the supply shift exceeds the demand shift, average EV price **falls**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'derived demand', definition: 'Demand for a factor of production or raw material arising from demand for the final good it helps produce.' },
        ],
        memoryAid: 'Demand shift = P & Q move TOGETHER; Supply shift = P & Q move OPPOSITE!',
        commonMistake: 'When BOTH D and S shift right, NEVER assume price must stay constant — price rises if the D shift is bigger, falls if the S shift is bigger, and stays unchanged only if both shifts are equal!',
      },
    ],
    keyTerms: [
      { term: 'Demand shift', definition: 'Rightward or leftward movement of the whole demand curve due to non-price changes.' },
      { term: 'Supply shift', definition: 'Rightward or leftward movement of the whole supply curve due to cost, tax, subsidy, or tech changes.' },
      { term: 'Derived demand', definition: 'Demand for an input driven by demand for the final product it makes.' },
      { term: 'Composite demand', definition: 'Demand for a resource that has two or more competing uses.' },
    ],
    checklistPoints: [
      'Predict exact equilibrium P and Q changes following any demand shift or supply shift using the 4-step disequilibrium chain',
      'Analyse simultaneous D and S shifts and identify which variable is certain vs dependent on relative shift magnitude',
      'Trace knock-on price effects across substitute, complement, derived-demand, and composite-demand markets',
    ],
  },

  'econ-2-6': {
    subtopicId: 'econ-2-6',
    subtopicCode: '2.6',
    subtopicTitle: 'Price Elasticity of Demand (PED) & Total Revenue',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics: Chapter 2.6 Price elasticity of demand (Updated for 2027 syllabus)',
    youtubeId: 'BkQDHjpFW98',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'PED Formula, Calculations & Five Elasticity Classifications', cardId: 'econ-2-6-c1' },
      { time: '4:10', seconds: 250, label: 'Determinants of PED (Substitutes, Necessity, Addiction, Time)', cardId: 'econ-2-6-c2' },
      { time: '8:20', seconds: 500, label: 'PED, Total Revenue Pricing Decisions & Tax Burden', cardId: 'econ-2-6-c3' },
    ],
    cards: [
      {
        id: 'econ-2-6-c1',
        title: 'PED Formula, Calculation & Five Classifications',
        summary: 'PED measures the responsiveness of quantity demanded to a price change (%ΔQd ÷ %ΔP), ranging from 0 (perfectly inelastic) to ∞ (perfectly elastic).',
        bullets: [
          '**PED formula** - **PED = % change in Quantity Demanded ÷ % change in Price** (always negative due to the inverse law of demand; examiners focus on the absolute magnitude `|PED|`).',
          '**Five PED categories** - **Perfectly inelastic (`PED = 0`)**: vertical curve, Q unchanged (life-saving insulin); **Inelastic (`0 < |PED| < 1`)**: steep curve, `%ΔQd < %ΔP`; **Unitary (`|PED| = 1`)**: `%ΔQd = %ΔP`, Total Revenue stays constant; **Elastic (`|PED| > 1`)**: flat curve, `%ΔQd > %ΔP`; **Perfectly elastic (`PED = ∞`)**: horizontal curve.',
        ],
        subsections: [
          {
            heading: 'Step-by-Step Percentage Change Method',
            bullets: [
              '**Formula reminder** - `%Δ = ((New − Old) ÷ Old) × 100%`. Always calculate BOTH `%ΔQd` and `%ΔP` before dividing.',
            ],
            exampleHeading: 'Worked PED calculation from raw prices & quantities',
            examples: [
              'A streaming service raises price from $10 to $12 (+20%), and subscribers fall from 5,000 to 3,500 (−30%). PED = −30% ÷ +20% = **-1.5** (price **elastic**, because `|-1.5| > 1`).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of demand', definition: 'Measure of the responsiveness of quantity demanded to a change in price (%ΔQd ÷ %ΔP).' },
        ],
      },
      {
        id: 'econ-2-6-c2',
        title: 'Determinants of Price Elasticity of Demand',
        summary: 'Availability of close substitutes is the single strongest determinant of PED, alongside necessity vs luxury, addictiveness, income share, and time.',
        bullets: [
          '**Number & closeness of substitutes** - **many close substitutes** (e.g. branded cereals, budget airlines) = **price elastic**; **few/no substitutes** (e.g. tap water, patented medicine) = **price inelastic**.',
          '**Necessity vs Luxury & Addictiveness** - **necessities** (staple food, electricity) and **addictive/habit-forming goods** (cigarettes, petrol) are **inelastic**; **luxuries** (designer watches, foreign holidays) are **elastic**.',
          '**Proportion of income & Time period** - items taking a **tiny share of income** (salt, matches) are **inelastic**, whereas major purchases (cars) are **elastic**; demand becomes **more elastic in the long run** as buyers find alternatives.',
        ],
        subsections: [
          {
            heading: 'Narrow vs Broad Market Definition',
            bullets: [
              '**Brand vs Category** - demand for "all petrol" is inelastic (few short-run substitutes), whereas demand for "Shell petrol at one junction" is highly elastic (drivers cross the road to BP).',
            ],
            exampleHeading: 'Concrete check: Commuter rail tickets',
            examples: [
              'Peak-hour commuter train tickets have inelastic PED (~ -0.3) because commuters must reach work at 9am, while off-peak leisure tickets have elastic PED (~ -1.6) because tourists can travel by coach or stay home.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price inelastic demand', definition: 'Demand where percentage change in quantity demanded is smaller than the percentage change in price (|PED| < 1).' },
        ],
      },
      {
        id: 'econ-2-6-c3',
        title: 'PED, Total Revenue Decisions & Tax Incidence',
        summary: 'Raise price to boost revenue when demand is inelastic; cut price to boost revenue when demand is elastic; governments tax inelastic goods for high revenue.',
        bullets: [
          '**Inelastic demand (`|PED| < 1`)** - **RAISING price** causes a proportionally smaller drop in sales → **Total Revenue (P × Q) RISES** (cutting price causes TR to fall).',
          '**Elastic demand (`|PED| > 1`)** - **LOWERING price** causes a proportionally larger jump in sales → **Total Revenue RISES** (raising price causes TR to fall).',
          '**Government tax strategy** - taxing **inelastic** goods (tobacco, fuel) generates **large tax revenue** (and consumers bear most of the tax burden), though quantity drops only slightly unless combined with education.',
        ],
        subsections: [
          {
            heading: 'Revenue Verification Table',
            bullets: [
              '**Always check P₁×Q₁ vs P₂×Q₂** - verifying actual revenue numbers prevents sign errors in exams.',
            ],
            exampleHeading: 'Worked Total Revenue check (Elastic vs Inelastic)',
            examples: [
              'Elastic streaming case above: Old TR = $10 × 5,000 = **$50,000**; New TR = $12 × 3,500 = **$42,000** (TR fell by $8,000!). Inelastic train ticket (+20% price from $50 to $60, −5% passengers from 1,000 to 950): Old TR = $50,000 → New TR = **$57,000** (TR rose by $7,000!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'total revenue', definition: 'Total income earned by a firm from selling its output, calculated as Price × Quantity sold.' },
        ],
        diagram: 'elasticity-curves',
        memoryAid: 'Steep curve looks like "I" for Inelastic (Raise P → TR rises); Flat curve looks like "E" for Elastic (Cut P → TR rises)!',
        commonMistake: 'NEVER flip the PED fraction upside down — Quantity Demanded (%ΔQd) is ALWAYS on top and Price (%ΔP) is ALWAYS on the bottom!',
      },
    ],
    keyTerms: [
      { term: 'Price elasticity of demand (PED)', definition: 'Responsiveness of quantity demanded to a change in price (%ΔQd ÷ %ΔP).' },
      { term: 'Price elastic demand', definition: 'Situation where |PED| > 1 so quantity demanded changes by a larger percentage than price.' },
      { term: 'Price inelastic demand', definition: 'Situation where |PED| < 1 so quantity demanded changes by a smaller percentage than price.' },
      { term: 'Unitary elasticity', definition: 'Situation where |PED| = 1 so Total Revenue stays unchanged when price changes.' },
    ],
    checklistPoints: [
      'Calculate PED accurately from raw price/quantity data and classify all 5 elasticity types (0 to ∞)',
      'Explain how substitutes, necessity, addiction, income proportion, and time determine PED',
      'Use PED to advise firms on Total Revenue pricing strategy and governments on indirect taxation',
    ],
  },

  'econ-2-7': {
    subtopicId: 'econ-2-7',
    subtopicCode: '2.7',
    subtopicTitle: 'Price Elasticity of Supply (PES) & Determinants',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics: Chapter 2.7 Price elasticity of supply (Updated for 2027 syllabus)',
    youtubeId: 'qZuQzd1GB9U',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:55',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'PES Formula, Calculations & Supply Curve Slopes', cardId: 'econ-2-7-c1' },
      { time: '3:20', seconds: 200, label: 'Determinants of PES (Time, Spare Capacity, Stocks & Mobility)', cardId: 'econ-2-7-c2' },
      { time: '6:40', seconds: 400, label: 'Significance of PES for Firms, Consumers & Price Volatility', cardId: 'econ-2-7-c3' },
    ],
    cards: [
      {
        id: 'econ-2-7-c1',
        title: 'PES Formula, Calculation & Special Cases',
        summary: 'PES measures how swiftly firms expand output when price rises (%ΔQs ÷ %ΔP), and is always positive because price and supply move together.',
        bullets: [
          '**PES formula** - **PES = % change in Quantity Supplied ÷ % change in Price** (always **positive** due to the direct law of supply).',
          '**Classifying PES** - **Price elastic supply (`PES > 1`)**: output rises by a larger % than price (curve cuts the vertical Price axis); **Price inelastic supply (`0 < PES < 1`)**: output responds sluggishly (curve cuts the horizontal Quantity axis); **Unitary (`PES = 1`)**: straight line passing through the origin; **Perfectly inelastic (`PES = 0`)**: vertical (stadium seats, original paintings).',
        ],
        subsections: [
          {
            heading: 'Worked PES Calculations',
            bullets: [
              '**Compare agricultural vs manufactured goods** - manufactured goods with spare factory lines typically exhibit PES > 1, while fresh crops exhibit PES < 1.',
            ],
            exampleHeading: 'Worked example: Smartphone cases vs Avocados',
            examples: [
              'Phone-case price rises +10% and factory output rises +25% → PES = +25% ÷ +10% = **+2.5** (elastic supply). Avocado price rises +40% and harvest output rises +8% → PES = +8% ÷ +40% = **+0.2** (highly inelastic supply).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of supply', definition: 'Responsiveness of quantity supplied to a change in price (%ΔQs ÷ %ΔP), always positive.' },
        ],
      },
      {
        id: 'econ-2-7-c2',
        title: 'Determinants of Price Elasticity of Supply',
        summary: 'Supply is more elastic when production time is short, spare capacity and stored stocks are high, and factors of production are mobile.',
        bullets: [
          '**Time taken to produce (production lag)** - goods taking years to grow or build (coffee trees, nuclear plants, housing) have **inelastic** PES; fast-made digital or light-manufactured goods have **elastic** PES.',
          '**Level of spare capacity** - factories operating below full capacity (e.g. 70% utilisation) can quickly ramp up output (**elastic**); firms at 100% capacity have **inelastic** supply.',
          '**Availability & storability of stocks** - non-perishable goods stored in warehouses (tinned food, electronics) allow instant release when prices rise (**elastic**); perishable fresh fish or hotel rooms cannot be stockpiled (**inelastic**).',
          '**Factor mobility & Time period** - mobile labour/machinery raises PES; **long-run PES is always more elastic than short-run PES** because firms can build factories and train extra staff over time.',
        ],
        subsections: [
          {
            heading: 'Short Run vs Long Run Housing Supply',
            bullets: [
              '**Land & planning constraints** - even if house prices jump 20% in one year, planning permits and construction take years, keeping short-run housing PES very low (~0.2–0.4).',
            ],
            exampleHeading: 'Concrete check: Why concert tickets have PES = 0',
            examples: [
              'A 50,000-seat stadium has fixed physical capacity on concert night: even if ticket prices double (+100%), quantity supplied changes by 0% → **PES = 0** (perfectly inelastic).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'spare capacity', definition: 'Unused machinery, factory space, or labour that a firm can bring into production quickly if demand rises.' },
        ],
      },
      {
        id: 'econ-2-7-c3',
        title: 'Significance of PES for Producers, Consumers & Governments',
        summary: 'Elastic supply enables firms to capture booming demand and keeps prices stable; inelastic supply causes sharp price spikes whenever demand surges.',
        bullets: [
          '**Why firms want HIGH (elastic) PES** - when demand suddenly surges, firms with flexible workers, spare capacity, and warehouse stocks can rapidly expand sales and profits before rivals catch up.',
          '**Price volatility in primary commodities** - when supply is **inelastic** (oil, wheat, housing), any demand shift causes a **huge swing in price** and very little change in quantity.',
          '**How governments & firms raise PES** - investing in worker retraining (occupational mobility), flexible automation, better transport/storage facilities, and streamlining planning approvals.',
        ],
        subsections: [
          {
            heading: 'Consumer Impact of Inelastic Supply',
            bullets: [
              '**Affordability risk** - inelastic housing supply combined with rising urban incomes pushes rents and house prices up dramatically rather than producing more homes.',
            ],
            exampleHeading: 'Worked market contrast: Demand rises +30%',
            examples: [
              'If demand for both T-shirts (PES = 2.0) and city apartments (PES = 0.2) rises by 30%, T-shirt prices rise only ~10% as supply surges, whereas apartment rents jump over 60% because few new flats can be built quickly.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price inelastic supply', definition: 'Supply where quantity supplied changes by a smaller percentage than price (0 < PES < 1), causing steeper price swings.' },
        ],
        memoryAid: 'PES determinants = TSFM: Time lag, Stocks/storability, Factor mobility & Spare capacity! Remember: PES is ALWAYS POSITIVE (+)!',
        commonMistake: 'NEVER write a negative sign for PES — unlike PED, supply slopes UPWARD so both price and quantity supplied move in the SAME direction!',
      },
    ],
    keyTerms: [
      { term: 'Price elasticity of supply (PES)', definition: 'Responsiveness of quantity supplied to a change in price (%ΔQs ÷ %ΔP).' },
      { term: 'Price elastic supply', definition: 'Supply with PES > 1, where firms can expand output easily when price rises.' },
      { term: 'Price inelastic supply', definition: 'Supply with PES < 1, where production lags or capacity limits restrict output response.' },
      { term: 'Spare capacity', definition: 'Underused capital and labour available to raise output quickly without building new factories.' },
    ],
    checklistPoints: [
      'Calculate PES accurately from percentage or raw data and recognise all 5 PES values including PES = 0 and PES = 1',
      'Explain how production time, spare capacity, stock storability, and factor mobility determine PES',
      'Evaluate why elastic supply benefits firms and stabilises prices, and how PES can be increased over time',
    ],
  },

  'econ-2-8': {
    subtopicId: 'econ-2-8',
    subtopicCode: '2.8',
    subtopicTitle: 'Market Economic System & Market Failure (Externalities, Merit/Demerit, Public Goods)',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 2.8-9 Market economic system and market failure (Updated for 2027 syllabus)',
    youtubeId: 'OobdxjpOOJM',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Market Economic System: Advantages & Disadvantages', cardId: 'econ-2-8-c1' },
      { time: '4:35', seconds: 275, label: 'Private, External & Social Costs and Benefits (Externalities)', cardId: 'econ-2-8-c2' },
      { time: '9:10', seconds: 550, label: 'Merit Goods, Demerit Goods, Public Goods & Other Failures', cardId: 'econ-2-8-c3' },
    ],
    cards: [
      {
        id: 'econ-2-8-c1',
        title: 'The Market Economic System: Strengths & Weaknesses',
        summary: 'Market economies foster innovation, choice, and efficiency through competition and profit incentives, but risk inequality, monopolies, and market failure.',
        bullets: [
          '**Advantages of a market system** - **consumer sovereignty** (firms produce what buyers want), **competition** drives lower prices and higher quality, **profit motive** sparks innovation and efficiency, and **no costly state bureaucracy**.',
          '**Disadvantages of a market system** - ignores **externalities** (pollution), **under-provides merit goods** and fails to supply **public goods**, breeds **income inequality** (goods go only to those who can pay), and risks **monopoly exploitation**.',
        ],
        subsections: [
          {
            heading: 'What Market Failure Means',
            bullets: [
              '**Definition** - **market failure** occurs whenever the free market mechanism leads to an **inefficient allocation of resources** (over-producing harmful goods, under-producing beneficial goods, or failing to provide public goods at all).',
            ],
            exampleHeading: 'Concrete check: Productive vs Allocative failure',
            examples: [
              'A coal power plant that dumps $15m of unpriced smog onto nearby towns produces MORE electricity than is socially optimal because it ignores the external health cost.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'market failure', definition: 'Situation where the free market allocates resources inefficiently, failing to maximise society’s welfare.' },
        ],
      },
      {
        id: 'econ-2-8-c2',
        title: 'Private, External & Social Costs and Benefits',
        summary: 'Markets fail whenever external spillover costs or benefits create a gap between private decisions and true social costs/benefits.',
        bullets: [
          '**Core equations** - **Social Cost = Private Cost + External Cost**; **Social Benefit = Private Benefit + External Benefit**.',
          '**External costs (negative externalities)** - harmful spillover effects on third parties outside the transaction (e.g. factory air pollution, traffic congestion, passive smoking) → **MSC > MPC** → free market **over-produces / over-consumes** (`Qm > Qopt`).',
          '**External benefits (positive externalities)** - beneficial spillover effects on third parties (e.g. vaccinations creating herd immunity, educated workers raising national productivity) → **MSB > MPB** → free market **under-consumes**.',
        ],
        subsections: [
          {
            heading: 'Worked Social Cost Calculation',
            bullets: [
              '**Internalising the externality** - society wants output at `Qopt` where **Social Benefit = Social Cost**, eliminating deadweight welfare loss.',
            ],
            exampleHeading: 'Worked numerical example: Chemical factory costs',
            examples: [
              'A factory’s private cost is $80/tonne (wages + chemicals), and river clean-up imposes an external cost of $35/tonne on local fisheries → **Social Cost = $80 + $35 = $115/tonne**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'external cost', definition: 'Negative spillover cost imposed on third parties who are neither the buyer nor seller of a product (e.g. pollution).' },
          { term: 'social cost', definition: 'Total cost to society of an economic activity, equal to Private Cost plus External Cost.' },
        ],
        diagram: 'externality-market-failure',
      },
      {
        id: 'econ-2-8-c3',
        title: 'Merit Goods, Demerit Goods, Public Goods & Information Failure',
        summary: 'Demerit goods are over-consumed, merit goods are under-consumed, public goods are not provided at all due to free riders, and monopoly/immobility worsen failure.',
        bullets: [
          '**Merit goods** (healthcare, education, vaccines) - generate **positive externalities** AND suffer **information failure** (buyers undervalue long-term benefits) → **under-consumed** in a free market.',
          '**Demerit goods** (cigarettes, alcohol, ultra-processed junk food) - generate **negative externalities** AND buyers underestimate harm → **over-consumed** in a free market.',
          '**Public goods** (street lighting, national defence, flood barriers) - **non-excludable** (cannot stop non-payers benefiting) and **non-rival** (one person’s use doesn’t reduce availability for others) → **free-rider problem** means private firms earn $0 profit, so the market provides **zero**.',
          '**Additional causes of market failure** - **abuse of monopoly power** (high prices, restricted output), **factor immobility** (persistent regional unemployment), and **short-termism** (overfishing, deforestation).',
        ],
        subsections: [
          {
            heading: 'Public Goods vs Private Goods Test',
            bullets: [
              '**Excludable + Rival = Private good** - a cinema ticket or sandwich is a private good (you can exclude non-payers, and eating a sandwich leaves one fewer for others).',
            ],
            exampleHeading: 'Concrete check: Why state hospitals are NOT public goods',
            examples: [
              'State healthcare is a **merit good**, NOT a pure public good: hospital beds are **rival** (one patient uses a bed another cannot) and **excludable** (private clinics charge fees).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'public good', definition: 'A good that is both non-excludable and non-rival (e.g. street lighting), leading to the free-rider problem and non-provision by private firms.' },
          { term: 'merit good', definition: 'A beneficial product (e.g. education, vaccinations) generating external benefits that is under-consumed in a free market.' },
        ],
        memoryAid: 'Public goods = Non-Excludable + Non-Rival → Free-Rider Problem! Demerit = Over-consumed; Merit = Under-consumed!',
        commonMistake: 'NEVER call state schools or hospitals "public goods" just because the public sector provides them — they are MERIT goods because they are rival and excludable!',
      },
    ],
    keyTerms: [
      { term: 'Market failure', definition: 'Inefficient allocation of resources by the free market mechanism.' },
      { term: 'External cost', definition: 'Negative spillover harm suffered by third parties outside a market transaction.' },
      { term: 'Public good', definition: 'Non-excludable and non-rival good suffering from the free-rider problem.' },
      { term: 'Demerit good', definition: 'Harmful product with negative externalities that is over-consumed in a free market.' },
    ],
    checklistPoints: [
      'Evaluate the advantages and disadvantages of a market economic system',
      'Calculate social cost and social benefit and explain why negative/positive externalities cause market failure',
      'Distinguish merit goods, demerit goods, public goods (free-rider problem), information failure, and monopoly abuse',
    ],
  },

  'econ-2-9': {
    subtopicId: 'econ-2-9',
    subtopicCode: '2.9',
    subtopicTitle: 'Mixed Economic System & Government Intervention (Taxes, Subsidies, Price Controls)',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics: 2.10 Mixed economic system (Updated for 2027)',
    youtubeId: 'GurGAR9Hliw',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'The Mixed Economic System: Balancing Private & Public Sectors', cardId: 'econ-2-9-c1' },
      { time: '4:15', seconds: 255, label: 'Indirect Taxes, Subsidies, Maximum & Minimum Prices', cardId: 'econ-2-9-c2' },
      { time: '8:35', seconds: 515, label: 'Regulation, Direct Provision, Privatisation & Government Failure', cardId: 'econ-2-9-c3' },
    ],
    cards: [
      {
        id: 'econ-2-9-c1',
        title: 'The Mixed Economic System',
        summary: 'A mixed economy combines private-sector enterprise with targeted government intervention to correct market failure and protect equity.',
        bullets: [
          '**How a mixed economy works** - private firms produce most consumer goods via the price mechanism, while the government intervenes to fix **market failure**, supply **public and merit goods**, curb monopolies, and support low-income households.',
          '**Goal of intervention** - move market output closer to the **social optimum** (`Qopt`) while keeping competition, choice, and incentives alive.',
        ],
        subsections: [
          {
            heading: 'Choosing the Right Policy Tool',
            bullets: [
              '**Match remedy to failure** - negative externalities/demerit goods → indirect taxes or regulation; positive externalities/merit goods → subsidies or free state provision; public goods → direct state funding from taxation.',
            ],
            exampleHeading: 'Concrete check: Multi-policy approach to smoking',
            examples: [
              'Most mixed economies pair heavy cigarette excise taxes (75%+ of retail price) with plain packaging, indoor bans, and free quit-smoking clinics because inelastic PED limits what taxes alone achieve.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mixed economic system', definition: 'An economic system combining private ownership and market forces with public-sector ownership and government intervention.' },
        ],
      },
      {
        id: 'econ-2-9-c2',
        title: 'Indirect Taxes, Subsidies & Price Controls (Max vs Min)',
        summary: 'Taxes shift S left to deter demerit goods; subsidies shift S right to encourage merit goods; binding maximum prices cause shortages and minimum prices cause surpluses.',
        bullets: [
          '**Indirect taxes** - shift supply **LEFT**, raising price and reducing consumption of demerit goods while raising tax revenue (**drawback**: regressive on low-income buyers, and ineffective at cutting volume if PED is very inelastic).',
          '**Subsidies** - shift supply **RIGHT**, lowering price and boosting output of merit/green goods like solar panels or buses (**drawback**: high **opportunity cost** for the government budget; firms may pocket part of the subsidy).',
          '**Maximum price (price ceiling)** - legal cap set **BELOW equilibrium** to keep essentials (rent, staple bread) affordable → creates **excess demand (shortage)**, queues, and **black/parallel markets**.',
          '**Minimum price (price floor)** - legal floor set **ABOVE equilibrium** (e.g. minimum alcohol unit price or agricultural price floor) → discourages demerit use OR protects farmer incomes, but creates **excess supply (surplus)**.',
        ],
        subsections: [
          {
            heading: 'Worked Numerical Check: Binding vs Non-Binding Controls',
            bullets: [
              '**Position matters** - a maximum price set ABOVE equilibrium has zero effect; a minimum price set BELOW equilibrium has zero effect.',
            ],
            exampleHeading: 'Worked rent-ceiling calculation',
            examples: [
              'If equilibrium rent is $1,200/month (Qd = Qs = 10,000 flats) and the city imposes a maximum rent of **$900/month**, Qd rises to 13,500 while landlords supply only 8,000 flats → a **housing shortage of 5,500 flats**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'maximum price', definition: 'A legally enforced price ceiling set below market equilibrium to improve affordability, resulting in excess demand (a shortage).' },
          { term: 'minimum price', definition: 'A legally enforced price floor set above market equilibrium to deter demerit consumption or support producers, creating excess supply (a surplus).' },
        ],
      },
      {
        id: 'econ-2-9-c3',
        title: 'Regulation, Direct Provision, Privatisation & Government Failure',
        summary: 'Laws, state provision, and privatisation/nationalisation reshape markets, yet imperfect information and enforcement costs can cause government failure.',
        bullets: [
          '**Regulation & bans** - legal limits (minimum smoking age, factory emission caps, seatbelt laws) act directly and clearly, but require costly **inspection and enforcement** and can spark illegal markets.',
          '**Direct state provision & information** - government funds and provides public goods (streetlights, police) and merit goods (state schools, vaccinations), plus public health campaigns to fix information failure.',
          '**Privatisation vs Nationalisation** - **privatisation** (selling state firms to the private sector) can boost efficiency, competition, and treasury revenue, but risks **private monopolies** and job cuts; **nationalisation** (bringing firms into state ownership) prioritises social welfare and universal access, but risks inefficiency without profit discipline.',
          '**Government failure** - intervention can **worsen** resource allocation due to **imperfect information** (setting the wrong tax rate), **high administration costs**, **unintended consequences** (black markets), and **opportunity cost** of public spending.',
        ],
        subsections: [
          {
            heading: 'Evaluating Intervention in 8-Mark Essays',
            bullets: [
              '**Always balance benefits vs limits** - mention PED responsiveness, budget opportunity cost, enforcement cost, and regressive equity impacts.',
            ],
            exampleHeading: 'Concrete evaluation: Subsidising electric cars',
            examples: [
              'A $5,000 EV grant lowers carbon externalities, yet may disproportionately subsidise wealthy households who would have bought an EV anyway, carrying a $2bn fiscal opportunity cost.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'privatisation', definition: 'Transfer of ownership of state-owned enterprises or assets from the public sector to the private sector.' },
          { term: 'government failure', definition: 'Situation where government intervention leads to a less efficient allocation of resources than before.' },
        ],
        memoryAid: 'Max price BELOW Eq = Shortage (ceiling stops price rising); Min price ABOVE Eq = Surplus (floor stops price falling)!',
        commonMistake: 'NEVER draw a binding MAXIMUM price above equilibrium or a binding MINIMUM price below equilibrium — think "ceiling below to hold prices DOWN; floor above to hold prices UP"!',
      },
    ],
    keyTerms: [
      { term: 'Mixed economic system', definition: 'Economy combining private market allocation with public-sector intervention.' },
      { term: 'Maximum price', definition: 'Legal price ceiling set below equilibrium causing excess demand (shortage).' },
      { term: 'Minimum price', definition: 'Legal price floor set above equilibrium causing excess supply (surplus).' },
      { term: 'Privatisation', definition: 'Sale of state-owned industries to private investors.' },
    ],
    checklistPoints: [
      'Compare how indirect taxes, subsidies, regulation, and direct provision correct different types of market failure',
      'Draw and explain the exact disequilibrium outcomes of binding maximum prices (shortage) and minimum prices (surplus)',
      'Evaluate privatisation vs nationalisation and explain causes of government failure',
    ],
  },

  'econ-3-1': {
    subtopicId: 'econ-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Money, Commercial Banks & Central Banks',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics: Chapter 3.1 Money and banking (Updated for 2027 syllabus)',
    youtubeId: 'nCAcVqSqOxg',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Functions & Characteristics of Money vs Barter', cardId: 'econ-3-1-c1' },
      { time: '3:35', seconds: 215, label: 'Commercial Banks: Deposits, Loans & Liquidity vs Profitability', cardId: 'econ-3-1-c2' },
      { time: '7:10', seconds: 430, label: 'The Central Bank: Monetary Policy & Lender of Last Resort', cardId: 'econ-3-1-c3' },
    ],
    cards: [
      {
        id: 'econ-3-1-c1',
        title: 'Forms, Functions & Characteristics of Money',
        summary: 'Money replaces inefficient barter by serving as medium of exchange, measure of value, store of value, and standard for deferred payments.',
        bullets: [
          '**Why barter fails** - barter requires a **double coincidence of wants** (both traders must want exactly what the other offers at the same time) and makes saving or comparing values difficult.',
          '**Four functions of money** - (1) **Medium of exchange** (universally accepted for purchases); (2) **Unit of account / measure of value** (prices compare relative worth); (3) **Store of value** (retains purchasing power over time); (4) **Standard for deferred payments** (enables credit and future contracts).',
          '**Characteristics of good money** - **generally acceptable**, **durable**, **portable**, **divisible**, **homogeneous (uniform)**, and **limited in supply (scarce)**.',
        ],
        subsections: [
          {
            heading: 'Modern Forms of Money',
            bullets: [
              '**Beyond cash** - bank deposits transferred via debit cards, mobile wallets, and electronic clearing represent over **90%** of the money supply in advanced economies.',
            ],
            exampleHeading: 'Worked numerical check: Inflation eroding store of value',
            examples: [
              'If a saver holds $1,000 in cash while annual inflation runs at **20%**, the real purchasing power of that $1,000 drops to roughly **$833** after just one year, weakening money’s store-of-value function.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'money', definition: 'Any item generally accepted as a medium of exchange for goods, services, and settlement of debts.' },
          { term: 'store of value', definition: 'Function of money allowing purchasing power to be saved and spent in the future, undermined by high inflation.' },
        ],
      },
      {
        id: 'econ-3-1-c2',
        title: 'Commercial Banks: Functions & Aims',
        summary: 'Commercial banks are profit-seeking businesses accepting deposits, making loans and mortgages, processing payments, and balancing profitability against liquidity.',
        bullets: [
          '**Primary functions** - (1) **Accepting deposits** (current/sight accounts and savings/time accounts); (2) **Lending** (overdrafts, personal loans, business loans, mortgages); (3) **Facilitating payments** (direct debits, cheques, card transfers, foreign exchange).',
          '**How commercial banks earn profit** - they charge a higher interest rate on loans than they pay on deposits (the **interest-rate spread**).',
          '**Profitability vs Liquidity trade-off** - long-term loans earn higher interest (**profitability**), while holding cash reserves satisfies sudden customer withdrawals (**liquidity**).',
        ],
        subsections: [
          {
            heading: 'Secondary Services',
            bullets: [
              '**Wealth & trade services** - offering safe-deposit boxes, insurance, investment advice, and letters of credit for international trade.',
            ],
            exampleHeading: 'Worked bank interest spread calculation',
            examples: [
              'A commercial bank pays **2.5%** interest on $100m of customer deposits ($2.5m cost) and lends $85m at **6.5%** ($5.525m revenue) → gross interest margin = **$3.025m** while keeping $15m liquid.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'commercial bank', definition: 'Private profit-seeking financial institution that accepts deposits, processes payments, and lends to households and firms.' },
        ],
      },
      {
        id: 'econ-3-1-c3',
        title: 'The Central Bank & Its Core Functions',
        summary: 'The central bank is the state monetary authority that issues currency, sets base interest rates, regulates commercial banks, and acts as lender of last resort.',
        bullets: [
          '**Core responsibilities** - (1) **Sole issuer of notes and coins**; (2) **Operates monetary policy** (setting base interest rates and controlling money supply to hit inflation targets); (3) **Banker to the government** (holds state accounts and manages national debt); (4) **Banker to commercial banks** & **lender of last resort** (provides emergency liquidity to prevent bank runs); (5) **Regulates the banking system** and manages **foreign exchange reserves**.',
        ],
        subsections: [
          {
            heading: 'Central Bank Independence',
            bullets: [
              '**Why many central banks are independent** - insulating interest-rate decisions from short-term election politics builds inflation credibility (e.g. Bank of England, Federal Reserve, ECB).',
            ],
            exampleHeading: 'Concrete check: Lender of last resort in action',
            examples: [
              'When a solvent commercial bank faces a sudden withdrawal panic, the central bank lends emergency funds against collateral so depositors remain safe and systemic financial collapse is prevented.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'central bank', definition: 'National state monetary authority that issues currency, operates monetary policy, regulates commercial banks, and acts as lender of last resort.' },
        ],
        memoryAid: 'Commercial banks serve Households & Firms for PROFIT; the Central Bank serves Government & Commercial Banks for STABILITY!',
        commonMistake: 'NEVER claim commercial banks set the country’s base interest rate or print banknotes — ONLY the CENTRAL BANK issues legal tender and sets the national base rate!',
      },
    ],
    keyTerms: [
      { term: 'Money', definition: 'Generally accepted medium of exchange, unit of account, store of value, and standard for deferred payments.' },
      { term: 'Commercial bank', definition: 'Profit-seeking retail/business bank accepting deposits and making loans.' },
      { term: 'Central bank', definition: 'State monetary authority controlling currency issuance, base interest rates, and bank regulation.' },
      { term: 'Lender of last resort', definition: 'Central bank role supplying emergency liquidity to commercial banks to prevent systemic collapse.' },
    ],
    checklistPoints: [
      'State all 4 functions and 6 characteristics of money and explain why money outperforms barter',
      'Explain commercial bank functions and the trade-off between liquidity and profitability',
      'Distinguish all key roles of a central bank from those of commercial banks',
    ],
  },

  'econ-3-2': {
    subtopicId: 'econ-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Households: Influences on Spending, Saving & Borrowing',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics: Chapter 3.2 Households (Updated for 2027 syllabus)',
    youtubeId: 'XMzawZNS2cQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Disposable Income, APC & Influences on Household Spending', cardId: 'econ-3-2-c1' },
      { time: '3:05', seconds: 185, label: 'Motives & Determinants of Household Saving (APS)', cardId: 'econ-3-2-c2' },
      { time: '6:15', seconds: 375, label: 'Determinants of Household Borrowing & Risks of Debt', cardId: 'econ-3-2-c3' },
    ],
    cards: [
      {
        id: 'econ-3-2-c1',
        title: 'Household Spending, Disposable Income & APC',
        summary: 'Disposable income is the strongest driver of household spending; low-income families spend a higher proportion of income, while wealthy families spend more in total cash terms.',
        bullets: [
          '**Disposable income** - income left after **direct taxes** (income tax) are deducted and state **welfare benefits** added; spent (`C`) or saved (`S`).',
          '**Average Propensity to Consume (APC)** - `APC = Consumption ÷ Disposable Income`. **Poorer households** have a **higher APC** (often 90%–100%, mostly on essentials like food/rent); **richer households** spend MORE in total dollars yet have a **lower APC** and spend a larger share on luxuries.',
          '**Other spending drivers** - **interest rates** (lower rates boost spending), **wealth** (rising house/share prices create a wealth effect), **consumer confidence**, **inflation expectations**, and **age/dependants**.',
        ],
        subsections: [
          {
            heading: 'Worked APC Comparison Across Income Groups',
            bullets: [
              '**Proportion vs Total amount** - always separate percentage spent (`%`) from absolute currency spent (`$`) in exam answers.',
            ],
            exampleHeading: 'Worked numerical example: Household A vs Household B',
            examples: [
              'Household A earns $1,200/month and spends $1,140 → **APC = 95%** (saves $60). Household B earns $8,000/month and spends $5,200 → **APC = 65%** (saves $2,800). B spends over 4× more dollars, while A spends a much higher proportion!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'disposable income', definition: 'Household income remaining after deducting direct taxes and adding transfer benefits, available for spending or saving.' },
          { term: 'average propensity to consume', definition: 'The proportion of household disposable income spent on goods and services (Consumption ÷ Disposable Income).' },
        ],
      },
      {
        id: 'econ-3-2-c2',
        title: 'Household Saving: Motives & Determinants',
        summary: 'Households save for retirement, emergencies, and major purchases; saving rises with higher incomes, higher real interest rates, and economic uncertainty.',
        bullets: [
          '**Average Propensity to Save (APS)** - `APS = Saving ÷ Disposable Income` (note: `APC + APS = 1`).',
          '**Key influences on saving** - **Disposable income** (higher income enables larger saving capacity), **interest rates** (higher rates raise the reward for saving), **range & trustworthiness of financial institutions**, **tax incentives** (tax-free ISAs/pensions), **age** (middle-aged workers save most; young and retired groups often dissave), and **precautionary motive** (fears of recession/unemployment raise saving).',
        ],
        subsections: [
          {
            heading: 'Target Savers Exception',
            bullets: [
              '**Nuanced evaluation** - a small group of "target savers" aiming for a fixed retirement sum may actually save LESS when interest rates rise because compound interest helps them hit their goal sooner!',
            ],
            exampleHeading: 'Worked interest return check',
            examples: [
              'Depositing $5,000 at **5%** interest earns **$250/year** versus only **$50/year** at **1%** — a 5× stronger incentive to delay spending when inflation is low.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dissaving', definition: 'Situation where household spending exceeds current disposable income, funded by drawing down past savings or borrowing.' },
        ],
      },
      {
        id: 'econ-3-2-c3',
        title: 'Household Borrowing & Debt Influences',
        summary: 'Borrowing lets households buy homes, education, and cars now, driven by low interest rates, easy credit availability, strong confidence, and rising asset collateral.',
        bullets: [
          '**Why households borrow** - funding big-ticket purchases (**mortgages**, cars, university tuition), smoothing temporary income dips, or starting small businesses.',
          '**Determinants of borrowing** - **Interest rates** (lower rates cut monthly repayments → more borrowing), **availability of credit** (banks’ lending rules & credit cards), **collateral/wealth** (higher house values make secured loans easier), **consumer confidence** (optimistic earners trust they can repay), and **social attitudes** toward debt.',
          '**Risks of excessive borrowing** - rising interest rates or job loss can cause mortgage default, repossession, and severe cuts in future spending.',
        ],
        subsections: [
          {
            heading: 'Interest Rate Impact on Repayments',
            bullets: [
              '**Variable-rate mortgages** - even a 2 percentage-point rise in interest rates significantly squeezes household discretionary budgets.',
            ],
            exampleHeading: 'Worked mortgage repayment example',
            examples: [
              'On a $200,000 interest-only loan, a rate hike from **3%** to **5.5%** raises annual interest payments from **$6,000** to **$11,000** (+$5,000/year), cutting other consumer spending.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'borrowing', definition: 'Obtaining funds from a lender (e.g. bank loan, credit card, or mortgage) to be repaid later with interest.' },
        ],
        memoryAid: 'Higher Interest Rates → Reward for SAVING goes UP, Cost of BORROWING goes UP, Household SPENDING goes DOWN!',
        commonMistake: 'NEVER claim low-income households spend MORE money than rich households — low-income households spend a HIGHER PROPORTION (APC), whereas rich households spend a higher TOTAL CASH AMOUNT!',
      },
    ],
    keyTerms: [
      { term: 'Disposable income', definition: 'Household income after direct taxes and state benefits.' },
      { term: 'Average propensity to consume (APC)', definition: 'Proportion of disposable income spent on consumption.' },
      { term: 'Average propensity to save (APS)', definition: 'Proportion of disposable income saved rather than spent.' },
      { term: 'Dissaving', definition: 'Spending more than disposable income by using past savings or borrowing.' },
    ],
    checklistPoints: [
      'Calculate APC and APS and explain how spending and saving patterns differ between low- and high-income groups',
      'Analyse how interest rates, income, age, wealth, and confidence influence household spending and saving',
      'Explain the main influences on household borrowing and the risks of excessive debt',
    ],
  },

  'econ-3-3': {
    subtopicId: 'econ-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Workers, Wage Determination, Division of Labour & Trade Unions',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics: Chapter 3.3 Workers (Updated for 2027 syllabus)',
    youtubeId: 'qsKQASmFCyk',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Wage & Non-Wage Factors in Occupational Choice', cardId: 'econ-3-3-c1' },
      { time: '4:00', seconds: 240, label: 'Wage Determination, Differentials & National Minimum Wage', cardId: 'econ-3-3-c2' },
      { time: '8:05', seconds: 485, label: 'Division of Labour (Specialisation) & Trade Unions', cardId: 'econ-3-3-c3' },
    ],
    cards: [
      {
        id: 'econ-3-3-c1',
        title: 'Wage & Non-Wage Factors Affecting Occupational Choice',
        summary: 'Workers choose jobs based on both financial pay (wages, bonuses, commission) and non-wage benefits (job security, working hours, pensions, satisfaction).',
        bullets: [
          '**Wage factors** - basic **hourly wage / annual salary**, **overtime pay**, **performance bonuses**, **piece-rate pay** (per unit made), and **sales commission**.',
          '**Non-wage factors** - **job satisfaction** (teaching, nursing), **job security**, **working conditions & safety**, **working hours & holiday entitlement**, **promotion prospects**, **fringe benefits** (health insurance, company car, pensions), and **commuting distance**.',
          '**Limiting factors** - **qualifications, skills, experience, and geographical/occupational immobility** restrict which jobs a worker can enter.',
        ],
        subsections: [
          {
            heading: 'Why Someone Chooses a Lower-Paid Job',
            bullets: [
              '**Utility over pure money** - workers maximise total job satisfaction, so high non-wage perks often offset lower headline pay.',
            ],
            exampleHeading: 'Concrete check: Comparing two job offers',
            examples: [
              'A graduate declines a $65,000/year investment-bank role (70 hours/week) for a $48,000/year civil-service role (37 hours/week, strong pension, flexible remote work) because non-wage benefits outweigh the $17,000 pay gap.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'non-wage factors', definition: 'Non-monetary features of a job — such as working hours, safety, holidays, promotion prospects, and job satisfaction — that influence occupational choice.' },
        ],
      },
      {
        id: 'econ-3-3-c2',
        title: 'Wage Determination, Differentials & Minimum Wages',
        summary: 'Equilibrium wages are set by derived labour demand and labour supply; scarce skills, high productivity, and strong bargaining power create wide wage differentials.',
        bullets: [
          '**Demand & Supply of labour** - **demand for labour** is **derived demand** (depends on product demand and worker productivity); **supply of labour** depends on population, training length, qualifications, and non-wage appeal.',
          '**Why wage differentials exist** - **skills & qualifications** (surgeons vs cleaners: scarce inelastic supply + high inelastic demand), **risk/unsociable hours** (deep-sea divers), **public vs private sector**, **bargaining power (unions)**, and **discrimination**.',
          '**National Minimum Wage (NMW)** - legal wage floor set **above** equilibrium lifts low-paid incomes and reduces poverty, **BUT** risks raising firm costs and causing **excess supply of labour (unemployment)** if labour demand is elastic (unless higher morale/productivity offsets costs).',
        ],
        subsections: [
          {
            heading: 'Elasticity of Demand & Supply of Labour',
            bullets: [
              '**Why star athletes earn millions** - supply of world-class talent is almost vertical (perfectly inelastic), while global broadcast demand is huge, driving massive equilibrium pay.',
            ],
            exampleHeading: 'Worked numerical check: Minimum wage impact',
            examples: [
              'If equilibrium café wage is $10/hr (Qd = Qs = 500 workers) and the government sets a $13/hr minimum wage (+30%), labour supply extends to 620 while cafés cut hiring to 430 → potential unemployment gap of **190 workers**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'wage differential', definition: 'Difference in wage rates earned between different occupations, industries, skill levels, or regions.' },
          { term: 'national minimum wage', definition: 'Legally enforced lowest hourly wage rate an employer is permitted to pay workers.' },
        ],
      },
      {
        id: 'econ-3-3-c3',
        title: 'Division of Labour & Trade Unions',
        summary: 'Specialisation boosts worker productivity and pay but risks boredom and narrow skills; trade unions bargain collectively for better wages and working conditions.',
        bullets: [
          '**Division of labour (worker specialisation)** - splitting production into narrow tasks: **Pros** — practice builds speed/skill, higher productivity, less time lost switching tools, higher potential wages; **Cons** — monotony/boredom lowers quality, high staff turnover, interdependence means one stoppage halts production, and **structural unemployment risk** if automated.',
          '**Trade unions** - organisations representing workers via **collective bargaining** to win higher wages, safer workplaces, fair hours, and protection from unfair dismissal; industrial action includes **overtime bans**, **work-to-rule**, and **strikes**.',
          '**When unions are strong** - high **union density (membership %)**, booming economy / low unemployment, **high firm profits**, inelastic demand for the firm’s product, and workers hard to replace with machines.',
        ],
        subsections: [
          {
            heading: 'Evaluating Trade Unions for Firms & Economy',
            bullets: [
              '**Balanced view** - unions can raise labour costs and disrupt output via strikes, **OR** act as a single communication channel that improves morale, training, and productivity.',
            ],
            exampleHeading: 'Worked productivity check: Division of labour',
            examples: [
              'One artisan stitches 4 shoes/day; dividing cutting, stitching, and sole-gluing among 5 specialised workers raises output to 45 shoes/day (**9 shoes per worker** — a **125% productivity jump**).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'division of labour', definition: 'Breaking a production process into separate specialised tasks, with each worker concentrating on one task.' },
          { term: 'trade union', definition: 'Organisation of workers that uses collective bargaining to negotiate improved pay, working conditions, and job security.' },
        ],
        memoryAid: 'High pay = High Derived Demand + Scarce Skilled Supply! Unions = Collective Bargaining (strongest when profits & membership are high)!',
        commonMistake: 'NEVER assume a National Minimum Wage ALWAYS causes mass job losses — in evaluation, always note that higher wages can motivate workers, cut staff turnover, and boost consumer spending!',
      },
    ],
    keyTerms: [
      { term: 'Derived demand', definition: 'Demand for labour arising from consumer demand for the final goods workers produce.' },
      { term: 'Wage differential', definition: 'Pay gap between different occupations, skill groups, or regions.' },
      { term: 'Division of labour', definition: 'Specialisation of workers in distinct narrow tasks within a production process.' },
      { term: 'Trade union', definition: 'Association of workers negotiating collectively with employers for wages and conditions.' },
    ],
    checklistPoints: [
      'Distinguish wage factors from non-wage factors influencing a worker’s choice of occupation',
      'Use labour demand/supply analysis to explain wage differentials and evaluate a national minimum wage',
      'Evaluate the pros and cons of division of labour and factors determining trade union bargaining power',
    ],
  },

  'econ-3-4': {
    subtopicId: 'econ-3-4',
    subtopicCode: '3.4',
    subtopicTitle: 'Firms: Size, Mergers & Economies/Diseconomies of Scale',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics: Chapter 3.4 Firms (Updated for 2027 syllabus)',
    youtubeId: 'EjExuH1w6Rs',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Classifying & Measuring Firm Size & Why Small Firms Survive', cardId: 'econ-3-4-c1' },
      { time: '4:05', seconds: 245, label: 'Internal vs External Growth: Horizontal, Vertical & Conglomerate Mergers', cardId: 'econ-3-4-c2' },
      { time: '8:10', seconds: 490, label: 'Internal Economies, External Economies & Diseconomies of Scale', cardId: 'econ-3-4-c3' },
    ],
    cards: [
      {
        id: 'econ-3-4-c1',
        title: 'Classifying Firms, Measuring Size & Survival of Small Firms',
        summary: 'Firm size is measured by employees, capital employed, revenue, or market share; small firms survive via niche focus, personal service, flexibility, and low capital needs.',
        bullets: [
          '**Classifying firms** - by **sector** (primary, secondary, tertiary), **ownership** (private sector vs public sector state-owned enterprises), and **relative size** (number of **employees**, **output/sales revenue**, **capital employed**, or **market share**).',
          '**Why measuring size is tricky** - an automated tech firm may have only 40 employees yet $500m in capital and sales, while a cleaning company has 800 employees and minimal capital.',
          '**Why small firms survive** - **small/local market size** (village cafés), **personalised bespoke service** (tailors, hairdressers), **flexibility** to adapt fast, **owner’s preference for independence**, **lack of finance** to expand, and **cooperation/state grants**.',
        ],
        subsections: [
          {
            heading: 'Market Share Calculation',
            bullets: [
              '**Formula** - `Market Share (%) = (Firm Sales ÷ Total Industry Sales) × 100%`.',
            ],
            exampleHeading: 'Worked market share check',
            examples: [
              'If Artisan Roasters sells $1.8m of coffee beans in a $60m regional market, its market share is `(1.8 ÷ 60) × 100%` = **3.0%** — a small niche competitor thriving on bespoke blends.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'capital employed', definition: 'Total value of long-term capital assets (machinery, factories, equipment) used by a firm in production.' },
        ],
      },
      {
        id: 'econ-3-4-c2',
        title: 'Internal vs External Growth & Types of Mergers',
        summary: 'Firms grow internally by reinvesting profits or externally by merging horizontally, vertically (backward/forward), or as conglomerates.',
        bullets: [
          '**Internal (organic) growth** - expanding own output by opening new stores, launching products, or buying machinery using retained profits (slower, lower culture-clash risk).',
          '**External growth (mergers & takeovers)** - joining two existing firms for rapid scale:',
          '**Horizontal merger** - same industry, **same stage** (e.g. two supermarkets) → instant market share & economies of scale, but risks monopoly scrutiny & job cuts.',
          '**Vertical merger** - same industry, **different stages**: **Backward vertical** buys a supplier (car maker buys battery factory → secure supply & lower input costs); **Forward vertical** buys a customer/outlet (coffee roaster buys café chain → guaranteed retail outlet).',
          '**Conglomerate merger** - completely **unrelated industries** (e.g. airline buys hotel & publishing group) → **diversifies risk** across markets, though management may lack specialist expertise.',
        ],
        subsections: [
          {
            heading: 'Evaluating Mergers Across Stakeholders',
            bullets: [
              '**Trade-offs** - shareholders may gain scale profits, yet workers risk redundancy (duplicated departments) and consumers risk reduced competition.',
            ],
            exampleHeading: 'Concrete check: Identifying exact merger direction',
            examples: [
              'A chocolate manufacturer acquiring a cocoa plantation is **vertical backward**; acquiring a retail sweet-shop chain is **vertical forward**; acquiring a rival chocolate brand is **horizontal**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'horizontal merger', definition: 'Combination of two firms operating in the same industry at the same stage of production.' },
          { term: 'vertical merger', definition: 'Combination of two firms at different stages of the same industry supply chain (backward toward suppliers, or forward toward outlets).' },
        ],
      },
      {
        id: 'econ-3-4-c3',
        title: 'Internal Economies, External Economies & Diseconomies of Scale',
        summary: 'Expanding scale lowers long-run average cost via economies of scale, until excessive size creates communication and control diseconomies that push average cost upward.',
        bullets: [
          '**Internal economies of scale** (as the INDIVIDUAL firm grows, **average cost falls**) - **Purchasing** (bulk-buying discounts), **Technical** (specialist high-speed machinery), **Financial** (lower interest rates on bank loans), **Managerial** (hiring specialist finance/HR/marketing directors), **Marketing** (spreading TV ad costs across millions of units), and **Risk-bearing** (diversifying product lines).',
          '**External economies of scale** (as the ENTIRE INDUSTRY grows in a region, **average cost falls** for all local firms) - shared pool of **skilled labour**, **specialist component suppliers**, **dedicated transport/infrastructure**, and **joint R&D/universities** (e.g. Silicon Valley tech, Shenzhen electronics).',
          '**Diseconomies of scale** (firm grows TOO large, **average cost rises**) - **poor internal communication**, **loss of managerial control/coordination**, **slow bureaucracy**, and **worker alienation/low morale**.',
        ],
        subsections: [
          {
            heading: 'Worked Average Cost Curve Numerical Check',
            bullets: [
              '**U-shaped LRAC** - average cost falls during economies of scale, hits minimum efficient scale, then rises when diseconomies dominate.',
            ],
            exampleHeading: 'Worked example: Bulk purchasing & unit cost drop',
            examples: [
              'At 1,000 jackets/month, Total Cost is $50,000 (**AC = $50/jacket**). After expanding to 5,000 jackets/month with 20% fabric bulk discounts, Total Cost is $190,000 (**AC = $38/jacket** — $12 unit cost saving from economies of scale!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'economies of scale', definition: 'Reductions in long-run average cost per unit achieved as a firm increases its scale of production.' },
          { term: 'diseconomies of scale', definition: 'Increases in long-run average cost per unit when a firm grows too large, caused by poor communication, weak control, and worker alienation.' },
        ],
        memoryAid: 'Internal Economies = PTFMR (Purchasing, Technical, Financial, Managerial, Risk-bearing/Marketing) — ALL lower AVERAGE COST!',
        commonMistake: 'NEVER write "economies of scale reduce TOTAL cost" — making more units ALWAYS raises total cost; economies of scale reduce **AVERAGE COST PER UNIT (AC = TC ÷ Q)**!',
      },
    ],
    keyTerms: [
      { term: 'Horizontal merger', definition: 'Merger of two firms in the same industry and same stage of production.' },
      { term: 'Conglomerate merger', definition: 'Merger of two firms in completely unrelated industries to diversify risk.' },
      { term: 'Economies of scale', definition: 'Falling average cost per unit as scale of output increases.' },
      { term: 'Diseconomies of scale', definition: 'Rising average cost per unit due to coordination and communication breakdowns in oversized firms.' },
    ],
    checklistPoints: [
      'Measure firm size across multiple metrics and explain why small firms continue to thrive alongside giants',
      'Distinguish internal growth from horizontal, backward/forward vertical, and conglomerate mergers',
      'Differentiate internal economies, external economies, and diseconomies of scale and link each to long-run average cost',
    ],
  },

  'econ-3-5': {
    subtopicId: 'econ-3-5',
    subtopicCode: '3.5',
    subtopicTitle: 'Firms & Production: Labour- vs Capital-Intensive & Productivity',
    readingMinutes: 9,
    videoTitle: 'IGCSE Economics: Chapter 3.5 Firms and production (Updated for 2027 syllabus)',
    youtubeId: 'DgdhdSUDl6E',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '9:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Derived Demand for Factors of Production', cardId: 'econ-3-5-c1' },
      { time: '3:10', seconds: 190, label: 'Labour-Intensive vs Capital-Intensive Production Methods', cardId: 'econ-3-5-c2' },
      { time: '6:20', seconds: 380, label: 'Production vs Productivity & Boosting Output per Worker', cardId: 'econ-3-5-c3' },
    ],
    cards: [
      {
        id: 'econ-3-5-c1',
        title: 'Demand for Factors of Production',
        summary: 'Firms demand land, labour, and capital based on derived demand for final output, relative factor prices, and factor productivity.',
        bullets: [
          '**Three drivers of factor demand** - (1) **Demand for the final product** (derived demand: surging EV sales boost demand for battery engineers and robotic presses); (2) **Price of each factor** (if wages jump 25%, firms substitute automated capital); (3) **Productivity of each factor** (higher output per $ spent increases hiring/investment).',
          '**Factor substitution vs complementarity** - self-checkout kiosks **substitute** for cashiers, whereas extra delivery vans **complement** extra delivery drivers.',
        ],
        subsections: [
          {
            heading: 'Cost-Minimising Factor Mix',
            bullets: [
              '**Choosing the lowest-cost combination** - firms compare **output per dollar spent** across labour and machinery before expanding capacity.',
            ],
            exampleHeading: 'Worked numerical check: Comparing labour vs machine cost',
            examples: [
              'If a $150/day worker packs 300 boxes (**$0.50/box**) while an automated packer costs $400/day and packs 1,000 boxes (**$0.40/box**), switching to the machine lowers unit packing cost by **20%**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'factor substitution', definition: 'Replacing one factor of production (such as labour) with another (such as automated capital) when relative costs or technologies change.' },
        ],
      },
      {
        id: 'econ-3-5-c2',
        title: 'Labour-Intensive vs Capital-Intensive Production',
        summary: 'Labour-intensive firms rely mainly on workers for flexibility and personalised service; capital-intensive firms rely on machinery for 24/7 precision and scale.',
        bullets: [
          '**Labour-intensive production** - uses a high proportion of **labour relative to capital** (e.g. hairdressing, fruit picking, garment sewing in low-wage economies). **Pros**: flexible, tailored craftsmanship, low start-up capital cost, creates jobs. **Cons**: slower output, human error/fatigue, rising wage costs, strike risk.',
          '**Capital-intensive production** - uses a high proportion of **machinery/automation relative to labour** (e.g. car assembly plants, semiconductor fabs, oil refining). **Pros**: operates 24/7, consistent precision, huge economies of scale, low unit cost at high volume. **Cons**: massive upfront capital cost, inflexible to custom designs, costly breakdowns, and causes technological unemployment.',
        ],
        subsections: [
          {
            heading: 'When Each Method Fits Best',
            bullets: [
              '**Context matters** - cheap abundant labour favours labour-intensive methods; high wages, standardised mass demand, and cheap finance favour capital-intensive methods.',
            ],
            exampleHeading: 'Real-world contrast: Bespoke tailor vs Automated textile mill',
            examples: [
              'A London bespoke suit tailor stays labour-intensive because customers pay $2,500 for unique hand-stitching, whereas a mass-market shirt factory in China uses computerised cutters producing 50,000 identical shirts/week.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'labour-intensive', definition: 'Production method that uses a high ratio of human labour compared with machinery and capital equipment.' },
          { term: 'capital-intensive', definition: 'Production method that uses a high ratio of machinery, automation, and equipment compared with human labour.' },
        ],
      },
      {
        id: 'econ-3-5-c3',
        title: 'Production vs Productivity',
        summary: 'Production is total output produced, whereas productivity is output per unit of input (e.g. output per worker) — rising productivity cuts average cost.',
        bullets: [
          '**Production** - total volume of goods and services produced over a period (e.g. 10,000 bicycles per month).',
          '**Labour productivity** - **output per worker (or per worker-hour)** = `Total Output ÷ Number of Workers`.',
          '**How to increase productivity** - **education & training**, **modern capital/technology**, **division of labour**, **performance-related pay/motivation**, and **better management/working conditions**.',
          '**Why productivity matters** - higher productivity lowers **average cost per unit**, boosts firm international competitiveness, enables **higher real wages** without inflation, and shifts the national PPC outward.',
        ],
        subsections: [
          {
            heading: 'Production Can Rise While Productivity Falls!',
            bullets: [
              '**Watch the ratio** - hiring double the workers to produce only 50% more output raises **total production**, yet **labour productivity FALLS**!',
            ],
            exampleHeading: 'Worked productivity calculation',
            examples: [
              'Factory X makes 2,400 chairs/week with 40 workers → productivity = `2,400 ÷ 40` = **60 chairs/worker**. After training and new saws, 40 workers make 3,000 chairs → productivity jumps to **75 chairs/worker** (+25%!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'productivity', definition: 'Measure of efficiency showing output produced per unit of input (e.g. output per worker per period).' },
        ],
        memoryAid: 'Production = TOTAL Output; Productivity = Output PER Worker (Output ÷ Workers)!',
        commonMistake: 'NEVER treat "production" and "productivity" as synonyms — a firm can increase total production simply by hiring more workers even if productivity per worker drops!',
      },
    ],
    keyTerms: [
      { term: 'Labour-intensive', definition: 'Production relying predominantly on human labour relative to capital.' },
      { term: 'Capital-intensive', definition: 'Production relying predominantly on machinery and automation relative to labour.' },
      { term: 'Production', definition: 'Total quantity of goods and services produced over a given period.' },
      { term: 'Productivity', definition: 'Output produced per unit of input (e.g. output per worker).' },
    ],
    checklistPoints: [
      'Explain how final demand, factor prices, and factor productivity determine a firm’s demand for factors',
      'Evaluate the advantages and drawbacks of labour-intensive vs capital-intensive production in context',
      'Calculate labour productivity accurately and explain how higher productivity lowers unit costs',
    ],
  },

  'econ-3-6': {
    subtopicId: 'econ-3-6',
    subtopicCode: '3.6',
    subtopicTitle: "Firms' Costs, Revenue & Business Objectives",
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics: Chapter 3.6 Firms revenue and objective (Updated for 2027 syllabus)',
    youtubeId: 'SgvqTDPIQ18',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Fixed, Variable, Total & Average Cost Formulae (TFC, TVC, TC, AC)', cardId: 'econ-3-6-c1' },
      { time: '4:00', seconds: 240, label: 'Total Revenue, Average Revenue, Break-Even & Profit', cardId: 'econ-3-6-c2' },
      { time: '7:55', seconds: 475, label: 'Objectives of Firms: Profit Maximisation, Growth, Survival & Social Welfare', cardId: 'econ-3-6-c3' },
    ],
    cards: [
      {
        id: 'econ-3-6-c1',
        title: 'Fixed, Variable, Total & Average Costs',
        summary: 'Fixed costs stay constant with output while variable costs rise with output; spreading fixed costs continuously reduces AFC while AC forms a U-shape.',
        bullets: [
          '**Total Fixed Cost (TFC)** - costs that do **NOT** vary with output in the short run (factory rent, insurance, salaried managers, loan interest); horizontal straight line on a graph.',
          '**Total Variable Cost (TVC)** - costs that **vary directly with output** (raw materials, packaging, direct electricity, piece-rate wages); starts at $0 when output = 0.',
          '**Key cost formulae** - **TC = TFC + TVC** | **AFC = TFC ÷ Q** (falls continuously as Q rises) | **AVC = TVC ÷ Q** | **AC (ATC) = TC ÷ Q = AFC + AVC**.',
        ],
        subsections: [
          {
            heading: 'Worked Short-Run Cost Table',
            bullets: [
              '**Spreading fixed costs** - even when output is 0, TC equals TFC; doubling output halves AFC immediately.',
            ],
            exampleHeading: 'Worked numerical example: Drone maker (TFC = $4,000, VC = $60/drone)',
            examples: [
              'At Q = 100 drones: TFC = $4,000 (AFC = $40), TVC = $6,000 (AVC = $60) → **TC = $10,000** and **AC = $100/drone**. At Q = 200 drones: TC = $4,000 + $12,000 = $16,000 → **AC drops to $80/drone** (AFC halved to $20)!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fixed costs', definition: 'Production costs (such as rent and insurance) that remain constant regardless of output level in the short run.' },
          { term: 'average cost', definition: 'Cost per unit of output produced, calculated as Total Cost divided by Output (TC ÷ Q).' },
        ],
      },
      {
        id: 'econ-3-6-c2',
        title: 'Revenue, Break-Even & Profit Calculations',
        summary: 'Total Revenue equals Price × Quantity, Average Revenue equals Price, Break-Even occurs where TR = TC, and Profit equals TR − TC.',
        bullets: [
          '**Revenue equations** - **Total Revenue (TR) = Price × Quantity**; **Average Revenue (AR) = TR ÷ Q = Price** (revenue received per unit sold).',
          '**Profit & Break-Even** - **Profit = TR − TC** (or `(AR − AC) × Q`). At the **break-even point**, **TR = TC** (zero profit, zero loss); output above break-even lies in the **profit zone** and creates a **margin of safety**.',
          '**How firms increase profit** - **raise revenue** (better marketing, product innovation, smart PED pricing) AND/OR **cut average costs** (higher productivity, economies of scale, cheaper suppliers).',
        ],
        subsections: [
          {
            heading: 'Break-Even Output Formula',
            bullets: [
              '**Formula** - `Break-Even Output = Fixed Costs ÷ (Selling Price − Variable Cost per unit)`.',
            ],
            exampleHeading: 'Worked break-even & profit check (Drone maker selling at $110)',
            examples: [
              'Contribution per drone = `$110 − $60 = $50`. Break-even = `$4,000 ÷ $50` = **80 drones**. At 200 drones sold: TR = `$110 × 200 = $22,000`, TC = `$16,000` → **Profit = $6,000** (Margin of safety = `200 − 80 = 120 drones`).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'average revenue', definition: 'Total revenue divided by quantity sold (TR ÷ Q), which is equal to the selling price per unit.' },
          { term: 'profit', definition: 'Financial surplus earned by a firm when Total Revenue exceeds Total Cost (TR − TC).' },
        ],
        diagram: 'break-even-chart',
      },
      {
        id: 'econ-3-6-c3',
        title: 'Objectives of Firms',
        summary: 'While traditional theory emphasises profit maximisation, real-world firms often pursue survival, growth/market share, profit satisficing, or social welfare.',
        bullets: [
          '**Profit maximisation** - earning the widest positive gap between TR and TC; rewards risk-taking shareholders and funds reinvestment (R&D, expansion).',
          '**Survival** - priority for **new start-ups** or firms during a **recession** (cutting prices to keep cash flowing until market demand recovers).',
          '**Growth & Market Share** - expanding sales volume to capture **economies of scale**, deter rivals, and boost executive salaries/prestige (sometimes sacrificing short-term profit).',
          '**Social welfare & Environmental goals** - **charities, social enterprises, and state-owned firms** prioritise affordable healthcare, clean energy, or fair farmer pay rather than maximum profit.',
        ],
        subsections: [
          {
            heading: 'Profit Satisficing (Divorce of Ownership & Control)',
            bullets: [
              '**Managers vs Shareholders** - in large public companies, salaried managers may aim for "satisfactory" profit to keep shareholders content while prioritising firm size or perks.',
            ],
            exampleHeading: 'Concrete check: Why objectives evolve over time',
            examples: [
              'A new café targets **survival** in Year 1, **sales growth** in Years 2–4 to build loyal footfall, and **profit maximisation** once established as the dominant neighbourhood brand.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'profit maximisation', definition: 'Business objective of achieving the largest possible positive difference between total revenue and total cost.' },
        ],
        memoryAid: 'TC = TFC + TVC | AC = TC ÷ Q | TR = P × Q | AR = P | Profit = TR − TC!',
        commonMistake: 'NEVER confuse REVENUE with PROFIT — a firm can have $10m in Total Revenue and still make a LOSS if its Total Cost is $11m!',
      },
    ],
    keyTerms: [
      { term: 'Fixed costs', definition: 'Costs that do not change with output in the short run (e.g. rent, insurance).' },
      { term: 'Variable costs', definition: 'Costs that change directly with the level of output (e.g. raw materials).' },
      { term: 'Total revenue', definition: 'Total sales income earned by a firm (Price × Quantity).' },
      { term: 'Profit maximisation', definition: 'Aiming for the largest positive gap between Total Revenue and Total Cost.' },
    ],
    checklistPoints: [
      'Calculate TFC, TVC, TC, AFC, AVC, AC, TR, AR, break-even output, and profit from numerical tables',
      'Interpret a break-even chart identifying FC, TC, TR, break-even point, profit/loss zones, and margin of safety',
      'Compare profit maximisation, survival, growth, profit satisficing, and social welfare objectives across firm types',
    ],
  },

  'econ-3-7': {
    subtopicId: 'econ-3-7',
    subtopicCode: '3.7',
    subtopicTitle: 'Market Structures: Competitive Markets vs Monopoly',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics: Chapter 3.7 Types of markets (Updated for 2027 syllabus)',
    youtubeId: '3fvkiDeYgCw',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '10:55',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Competitive Markets: Characteristics, Price Takers & Efficiency', cardId: 'econ-3-7-c1' },
      { time: '3:40', seconds: 220, label: 'Monopoly: Features, Barriers to Entry & Price Makers', cardId: 'econ-3-7-c2' },
      { time: '7:20', seconds: 440, label: 'Evaluating Monopoly: Consumer Harm vs Scale, R&D & Natural Monopolies', cardId: 'econ-3-7-c3' },
    ],
    cards: [
      {
        id: 'econ-3-7-c1',
        title: 'Competitive Markets: Features & Effects',
        summary: 'Highly competitive markets feature many small firms and low barriers to entry, forcing firms to be price takers and delivering low prices, choice, and efficiency.',
        bullets: [
          '**Characteristics of high competition** - **many buyers and sellers**, **low barriers to entry and exit**, high **price transparency**, and firms act as **price takers** (raising price above market level loses customers to rivals).',
          '**Effects on consumers & firms** - **lower prices**, **wide consumer choice**, strong pressure for **cost efficiency and high quality**; in the long run firms earn only **normal profit** (supernormal profits attract new entrants, shifting market supply right and pulling price back down).',
          '**Limits of small-scale competition** - small competitive firms may lack **economies of scale** and lack retained profits to fund expensive **research & development (R&D)**.',
        ],
        subsections: [
          {
            heading: 'How Entry Eliminates Supernormal Profit',
            bullets: [
              '**Dynamic market discipline** - if street-food stalls earn high profits, low start-up barriers draw new stalls in, expanding supply and lowering meal prices.',
            ],
            exampleHeading: 'Concrete check: Normal profit vs Supernormal profit',
            examples: [
              'If a competitive bakery earns $40,000 profit (covering the owner’s minimum opportunity cost), it earns **normal profit**; any sustained excess above this triggers rival bakeries to open nearby.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price taker', definition: 'A small firm in a competitive market with no power to raise price above the prevailing market price without losing sales.' },
          { term: 'barriers to entry', definition: 'Obstacles — such as patents, huge start-up capital, or brand loyalty — that make it difficult for new firms to enter a market.' },
        ],
      },
      {
        id: 'econ-3-7-c2',
        title: 'Monopoly: Characteristics & Barriers to Entry',
        summary: 'A monopoly is a single dominant firm shielded by high barriers to entry, giving it price-making power to restrict output and earn long-run supernormal profit.',
        bullets: [
          '**Definition** - pure monopoly = **100% market share** (single seller); in practice, competition regulators often investigate firms holding **> 25% market share**.',
          '**Sources of monopoly power (barriers to entry)** - **legal barriers** (patents, copyrights, state licences), **huge capital start-up costs** (semiconductors, railways), **economies of scale** (incumbent undercuts small entrants), **control of key resources**, and **strong brand loyalty / heavy advertising**.',
          '**Price maker behaviour** - facing a downward-sloping demand curve with no close substitutes, the monopolist sets a higher price (`Pm`) and lower output (`Qm`) than a competitive market, earning **supernormal profit** and creating a **deadweight welfare loss**.',
        ],
        subsections: [
          {
            heading: 'Disadvantages of Monopoly for Consumers',
            bullets: [
              '**Consumer harm** - **higher prices**, **restricted output**, **reduced consumer choice**, risk of **X-inefficiency** (complacency without rivals), and poorer customer service.',
            ],
            exampleHeading: 'Worked numerical contrast: Competitive vs Monopoly pricing',
            examples: [
              'A competitive rail-coach route charges $25/ticket with 2,000 passengers (cost $22/ticket). A monopoly operator raises price to **$42/ticket** (+68%), restricting seats to 1,400 and extracting $28,000 in supernormal profit.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'monopoly', definition: 'A market structure dominated by a single firm protected by high barriers to entry, acting as a price maker.' },
          { term: 'price maker', definition: 'A firm with significant market power (such as a monopoly) able to set or influence the market price of its product.' },
        ],
        diagram: 'monopoly-market-structure',
      },
      {
        id: 'econ-3-7-c3',
        title: 'Evaluating Monopoly: Potential Benefits & Natural Monopolies',
        summary: 'Monopolies are not always harmful: huge economies of scale, R&D dynamic efficiency, international competitiveness, and natural monopolies can benefit society.',
        bullets: [
          '**Potential benefits of monopoly** - (1) **Huge economies of scale** can push average cost BELOW what small competitive firms achieve (potentially yielding lower prices!); (2) **Dynamic efficiency (R&D)** — supernormal profits fund expensive breakthroughs (e.g. pharmaceuticals, batteries); (3) **Global competitiveness** against overseas giants.',
          '**Natural monopoly** - industries with massive fixed infrastructure (water pipes, electricity grids, rail tracks) where **duplicating networks is wasteful** and a single firm achieves the lowest long-run average cost.',
          '**Regulating monopolies** - governments use **price caps**, **merger blocks**, **fines for anti-competitive abuse**, **deregulation** to lower entry barriers, or **nationalisation**.',
        ],
        subsections: [
          {
            heading: '8-Mark Essay Evaluation Blueprint',
            bullets: [
              '**Golden balance** - weigh **higher prices, less choice, and inefficiency** against **economies of scale, R&D innovation, and whether a regulator caps prices**.',
            ],
            exampleHeading: 'Real-world case: Patented pharmaceuticals',
            examples: [
              'A 20-year drug patent grants temporary monopoly pricing to help pharma firms recover $1bn+ in clinical trial R&D — without temporary monopoly profit, life-saving medicines might never be invented.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'natural monopoly', definition: 'Industry where massive fixed infrastructure costs mean a single firm can supply the whole market at a lower average cost than multiple competing firms.' },
        ],
        memoryAid: 'Monopoly 8-mark balance: Cons = High P, Low Q, Low Choice, Complacency; Pros = Economies of Scale, R&D Innovation, Natural Monopoly!',
        commonMistake: 'NEVER claim a monopoly ALWAYS charges higher prices than competitive firms — if huge economies of scale slash a monopolist’s average cost dramatically, it can sometimes charge LESS than tiny high-cost rivals!',
      },
    ],
    keyTerms: [
      { term: 'Price taker', definition: 'Firm in a competitive market that must accept the prevailing market equilibrium price.' },
      { term: 'Monopoly', definition: 'Single dominant seller protected by high barriers to entry with strong price-making power.' },
      { term: 'Barriers to entry', definition: 'Legal, financial, or cost obstacles preventing new rivals from entering a market.' },
      { term: 'Natural monopoly', definition: 'Market where one single network provider achieves the lowest possible average cost (e.g. water mains).' },
    ],
    checklistPoints: [
      'Compare the characteristics and outcomes of competitive markets vs monopolies (price taker vs price maker)',
      'Explain key barriers to entry and interpret the monopoly diagram (Pm, Qm, supernormal profit, DWL)',
      'Evaluate both the harms and potential benefits of monopolies, including natural monopolies and regulation',
    ],
  },
};

export const ECON_QUIZZES_1_TO_3: QuizQuestion[] = [
  // 1.1 Scarcity, Factors of Production, Opportunity Cost & PPC
  {
    id: 'econ-q-1-1-1',
    subtopicId: 'econ-1-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret key positions on a Production Possibility Curve (PPC) diagram:',
    diagram: 'production-possibility-curve',
    labels: [
      { marker: 'Point INSIDE PPC₁', options: ['Unemployed / inefficiently used resources', 'Unattainable output', 'Full productive efficiency'], answer: 'Unemployed / inefficiently used resources' },
      { marker: 'Outward shift PPC₁ → PPC₂', options: ['Increase in productive capacity (economic growth)', 'Short-run recession', 'Reallocation of existing resources only'], answer: 'Increase in productive capacity (economic growth)' },
    ],
    explanation: 'Points inside PPC₁ represent underused resources; an outward shift to PPC₂ shows expanded productive capacity.',
  },
  {
    id: 'econ-q-1-1-2',
    subtopicId: 'econ-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Define opportunity cost and calculate the opportunity cost when an economy moves along its PPC from (200 smartphones, 150 laptops) to (260 smartphones, 120 laptops).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Opportunity cost is the next best alternative foregone when making a choice. Moving along the PPC gives up 30 laptops to gain 60 smartphones.',
      markPoints: [
        { id: 'mp1', markDescription: 'Defines opportunity cost as next best alternative foregone', requiredKeywordGroups: [['next best'], ['alternative', 'foregone']] },
        { id: 'mp2', markDescription: 'Calculates 30 laptops foregone', numericMatch: { value: 30, tolerance: 0.1 } },
      ],
    },
    explanation: 'Opportunity cost is the next best alternative sacrificed: 150 minus 120 equals 30 laptops given up.',
  },
  {
    id: 'econ-q-1-1-3',
    subtopicId: 'econ-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each of the four factors of production to its exact factor reward:',
    pairs: [
      { left: 'Land', right: 'Rent' },
      { left: 'Labour', right: 'Wages' },
      { left: 'Capital', right: 'Interest' },
      { left: 'Enterprise', right: 'Profit' },
    ],
    explanation: 'Every Cambridge 0455 candidate must match Land→Rent, Labour→Wages, Capital→Interest, Enterprise→Profit.',
  },
  {
    id: 'econ-q-1-1-4',
    subtopicId: 'econ-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is state-funded public healthcare classified as an ECONOMIC good rather than a FREE good?',
    options: [
      'Patients always pay full market fees at hospitals',
      'It uses scarce doctors, buildings, and tax funds, so it carries an opportunity cost',
      'It is exported to foreign patients',
      'Only private firms can provide healthcare',
    ],
    correctIndex: 1,
    explanation: 'Free-at-the-point-of-use services still consume scarce factors of production and carry an opportunity cost.',
  },
  {
    id: 'econ-q-1-1-5',
    subtopicId: 'econ-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statements on PPC and factor mobility:',
    segments: ['A point outside a PPC is currently ', ', while better worker retraining raises ', ' mobility of labour.'],
    wordBank: ['unattainable', 'occupational', 'geographical', 'inefficient'],
    answers: ['unattainable', 'occupational'],
    explanation: 'Points beyond the PPC exceed current resources; retraining helps workers switch between occupations.',
  },

  // 1.2 Economic Assumptions, Sectors & Resource Allocation
  {
    id: 'econ-q-1-2-1',
    subtopicId: 'econ-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'In standard economic theory, what are rational consumers and private firms respectively assumed to maximise?',
    options: [
      'Consumers maximise saving; firms maximise employment',
      'Consumers maximise utility (satisfaction); firms maximise profit',
      'Consumers maximise tax paid; firms maximise total cost',
      'Consumers maximise debt; firms maximise output regardless of cost',
    ],
    correctIndex: 1,
    explanation: 'Economic models assume consumers aim to maximise utility and private firms aim to maximise profit.',
  },
  {
    id: 'econ-q-1-2-2',
    subtopicId: 'econ-1-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each economic activity to its correct sector of the economy:',
    pairs: [
      { left: 'Coal mining and wheat farming', right: 'Primary sector' },
      { left: 'Automobile assembly and house building', right: 'Secondary sector' },
      { left: 'Commercial banking and healthcare', right: 'Tertiary sector' },
    ],
    explanation: 'Primary extracts raw materials, secondary manufactures goods, and tertiary delivers services.',
  },
  {
    id: 'econ-q-1-2-3',
    subtopicId: 'econ-1-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO reasons why real-world consumers may NOT always behave completely rationally:',
    options: [
      'Imperfect information or hidden product costs',
      'Habitual purchasing and strong brand loyalty',
      'Complete knowledge of every price in the world',
      'Zero scarcity of money',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Information gaps, inertia, habits, and social influence often stop shoppers from making purely calculating choices.',
  },
  {
    id: 'econ-q-1-2-4',
    subtopicId: 'econ-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the structural change and modelling terms:',
    segments: ['The decline in manufacturing’s share of GDP as services expand is called ', ', and holding other variables constant is known as ', '.'],
    wordBank: ['deindustrialisation', 'ceteris paribus', 'scarcity', 'specialisation'],
    answers: ['deindustrialisation', 'ceteris paribus'],
    explanation: 'Deindustrialisation describes shrinking manufacturing share; ceteris paribus holds other factors constant.',
  },
  {
    id: 'econ-q-1-2-5',
    subtopicId: 'econ-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'State TWO of the three basic economic resource allocation questions every society must answer.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Every society must decide what to produce, how to produce it, and for whom to produce.',
      markPoints: [
        { id: 'mp1', markDescription: 'Identifies what to produce', requiredKeywordGroups: [['what to produce', 'what']] },
        { id: 'mp2', markDescription: 'Identifies how to produce or for whom to produce', requiredKeywordGroups: [['how to produce', 'for whom']] },
      ],
    },
    explanation: 'Scarcity forces every society to answer What, How, and For Whom to produce.',
  },

  // 2.1 Role of Markets in Allocating Resources
  {
    id: 'econ-q-2-1-1',
    subtopicId: 'econ-2-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the Supply and Demand diagram to interpret how markets allocate resources:',
    diagram: 'supply-demand-equilibrium',
    labels: [
      { marker: 'Point E₁ (P*, Q*)', options: ['Market equilibrium where Qd = Qs', 'Excess supply surplus', 'Government price ceiling'], answer: 'Market equilibrium where Qd = Qs' },
      { marker: 'Movement along S from E₁ to E₂ after D shifts right', options: ['Higher price incentivises firms to extend supply', 'Firms cut output due to lower profit', 'Supply shifts left'], answer: 'Higher price incentivises firms to extend supply' },
    ],
    explanation: 'Rising prices from P* to P₂ signal higher demand and incentivise firms to extend supply to Q₂.',
  },
  {
    id: 'econ-q-2-1-2',
    subtopicId: 'econ-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the following is a MACROECONOMIC topic rather than a microeconomic topic?',
    options: [
      'A rise in the price of coffee beans after frost in Brazil',
      'A national rise in inflation and unemployment across the whole economy',
      'A bakery choosing whether to hire two more chefs',
      'Competition between two local gyms',
    ],
    correctIndex: 1,
    explanation: 'Macroeconomics examines whole-economy aggregates such as inflation, GDP, and unemployment.',
  },
  {
    id: 'econ-q-2-1-3',
    subtopicId: 'econ-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each function of the price mechanism to its role:',
    pairs: [
      { left: 'Signalling function', right: 'Rising prices show producers where consumer demand is strong' },
      { left: 'Incentivising function', right: 'Higher profit margins motivate firms to expand output' },
      { left: 'Rationing function', right: 'Higher prices allocate scarce stock to buyers willing to pay most' },
    ],
    explanation: 'The price mechanism coordinates resource allocation through signalling, incentivising, and rationing (SIR).',
  },
  {
    id: 'econ-q-2-1-4',
    subtopicId: 'econ-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the comparison of economic systems:',
    segments: ['In a ', ' economy resources are allocated purely by prices and profit motives, whereas a ', ' economy combines private markets with public-sector intervention.'],
    wordBank: ['market', 'mixed', 'planned', 'barter'],
    answers: ['market', 'mixed'],
    explanation: 'Market systems rely on private prices; mixed systems blend private markets with government intervention.',
  },
  {
    id: 'econ-q-2-1-5',
    subtopicId: 'econ-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO ways a rise in the market price of electric bicycles reallocates resources in a market economy.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The higher price signals strong demand and higher potential profit, incentivising firms to shift resources to produce more bicycles, while rationing limited current stock to buyers most willing and able to pay.',
      markPoints: [
        { id: 'mp1', markDescription: 'Signals scarcity/demand and incentivises higher production via profit', requiredKeywordGroups: [['signal', 'incentiv', 'profit'], ['produce', 'supply', 'output', 'resources']] },
        { id: 'mp2', markDescription: 'Rations scarce stock to buyers willing/able to pay', requiredKeywordGroups: [['ration', 'willing', 'able to pay']] },
      ],
    },
    explanation: 'Higher prices simultaneously signal demand, incentivise producers to allocate factors, and ration limited goods.',
  },

  // 2.2 Demand: Curves, Movements vs Shifts & Determinants
  {
    id: 'econ-q-2-2-1',
    subtopicId: 'econ-2-2',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the demand shift shown on the Supply and Demand diagram:',
    diagram: 'supply-demand-equilibrium',
    labels: [
      { marker: 'Shift from D₁ to D₂', options: ['Increase in demand caused by a non-price factor', 'Extension of demand caused by lower own price', 'Decrease in demand'], answer: 'Increase in demand caused by a non-price factor' },
      { marker: 'Outcome of D₁ → D₂ at E₂', options: ['Higher equilibrium price P₂ and higher quantity Q₂', 'Lower equilibrium price and lower quantity', 'Zero change in quantity'], answer: 'Higher equilibrium price P₂ and higher quantity Q₂' },
    ],
    explanation: 'A rightward shift from D₁ to D₂ reflects a non-price increase in demand, raising both P and Q.',
  },
  {
    id: 'econ-q-2-2-2',
    subtopicId: 'econ-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What happens to the demand curve for TEA when the price of COFFEE (a close substitute) rises sharply?',
    options: [
      'A contraction occurs along the demand curve for tea',
      'The demand curve for tea shifts to the RIGHT',
      'The demand curve for tea shifts to the LEFT',
      'The supply curve of tea shifts left',
    ],
    correctIndex: 1,
    explanation: 'Higher coffee prices encourage buyers to switch to tea, shifting the entire tea demand curve right.',
  },
  {
    id: 'econ-q-2-2-3',
    subtopicId: 'econ-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the movement vs shift distinction for demand:',
    segments: ['A fall in a good’s own price causes an ', ' along the demand curve, whereas a rise in the price of a complement causes demand to shift ', '.'],
    wordBank: ['extension', 'left', 'right', 'contraction'],
    answers: ['extension', 'left'],
    explanation: 'Own price drops cause an extension along D; dearer complements reduce joint demand, shifting D left.',
  },
  {
    id: 'econ-q-2-2-4',
    subtopicId: 'econ-2-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors that would shift the demand curve for new electric cars to the RIGHT:',
    options: [
      'A rise in household disposable incomes (assuming EVs are normal goods)',
      'A steep rise in petrol prices making petrol cars more expensive to run',
      'A rise in the selling price of electric cars themselves',
      'Higher interest rates making car loans costlier',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Higher income for a normal good and costlier substitutes (petrol cars) both shift EV demand right.',
  },
  {
    id: 'econ-q-2-2-5',
    subtopicId: 'econ-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Define effective demand and explain why demand for an inferior good falls when household income rises.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Effective demand is the willingness and financial ability to buy a product at a given price. When income rises, consumers switch away from inferior goods toward higher-quality normal substitutes, shifting demand left.',
      markPoints: [
        { id: 'mp1', markDescription: 'Willingness and ability to buy at a given price', requiredKeywordGroups: [['willing'], ['ability', 'able']] },
        { id: 'mp2', markDescription: 'Consumers switch to better/normal goods so demand shifts left', requiredKeywordGroups: [['switch', 'normal', 'better', 'higher-quality', 'left']] },
      ],
    },
    explanation: 'Effective demand requires both desire and purchasing power; higher incomes cause buyers to trade up from inferior goods.',
  },

  // 2.3 Supply: Curves, Extensions vs Shifts & Determinants
  {
    id: 'econ-q-2-3-1',
    subtopicId: 'econ-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does a typical market supply curve slope upward from left to right?',
    options: [
      'Higher prices reduce firm profits so firms sell more',
      'Higher prices raise potential profit margins and cover higher marginal costs, encouraging firms to supply more',
      'Consumers demand more at higher prices',
      'Governments force firms to double output when prices rise',
    ],
    correctIndex: 1,
    explanation: 'Higher prices boost profitability and help cover rising unit costs, inducing producers to extend supply.',
  },
  {
    id: 'econ-q-2-3-2',
    subtopicId: 'econ-2-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each event to its exact effect on the supply curve:',
    pairs: [
      { left: 'Government imposes an indirect excise tax', right: 'Supply shifts LEFT' },
      { left: 'Government grants a per-unit production subsidy', right: 'Supply shifts RIGHT' },
      { left: 'The product’s own selling price increases', right: 'Extension ALONG the supply curve' },
      { left: 'New automated machinery cuts unit costs by 20%', right: 'Supply shifts RIGHT' },
    ],
    explanation: 'Own price changes move along S; higher costs/taxes shift S left; subsidies and better technology shift S right.',
  },
  {
    id: 'econ-q-2-3-3',
    subtopicId: 'econ-2-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the supply curve statements:',
    segments: ['A fall in a good’s own price causes a ', ' along the supply curve, whereas a rise in raw-material costs shifts the supply curve ', '.'],
    wordBank: ['contraction', 'left', 'right', 'extension'],
    answers: ['contraction', 'left'],
    explanation: 'Lower own price causes a contraction along S; higher input costs reduce supply at every price (shift left).',
  },
  {
    id: 'econ-q-2-3-4',
    subtopicId: 'econ-2-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors that would shift the market supply curve for wheat to the LEFT:',
    options: [
      'Severe drought destroying 25% of harvests',
      'A sharp rise in fertiliser and diesel costs',
      'Introduction of higher-yielding drought-resistant seeds',
      'New farming subsidies paid per tonne harvested',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Adverse weather and higher input costs reduce producers’ willingness/ability to supply at every price.',
  },
  {
    id: 'econ-q-2-3-5',
    subtopicId: 'econ-2-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between the effect of an indirect tax and a subsidy on a firm’s supply curve.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'An indirect tax raises production costs per unit, shifting the supply curve to the left. A subsidy lowers production costs, shifting the supply curve to the right.',
      markPoints: [
        { id: 'mp1', markDescription: 'Indirect tax raises costs and shifts supply left', requiredKeywordGroups: [['tax'], ['cost'], ['left']] },
        { id: 'mp2', markDescription: 'Subsidy lowers costs and shifts supply right', requiredKeywordGroups: [['subsidy'], ['cost'], ['right']] },
      ],
    },
    explanation: 'Indirect taxes increase unit costs (supply shifts left); subsidies lower unit costs (supply shifts right).',
  },

  // 2.4 Price Determination, Market Equilibrium & Disequilibrium
  {
    id: 'econ-q-2-4-1',
    subtopicId: 'econ-2-4',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Identify the equilibrium and disequilibrium features on the Supply & Demand diagram:',
    diagram: 'supply-demand-equilibrium',
    labels: [
      { marker: 'Equilibrium E₁ (P*, Q*)', options: ['Market-clearing price where Qd = Qs', 'Unsold surplus of goods', 'Excess demand shortage'], answer: 'Market-clearing price where Qd = Qs' },
      { marker: 'If price remained stuck at P* after demand shifted to D₂', options: ['Excess demand (shortage) until price rises to P₂', 'Excess supply (surplus)', 'Zero sales'], answer: 'Excess demand (shortage) until price rises to P₂' },
    ],
    explanation: 'At P* on D₂, quantity demanded exceeds quantity supplied, creating excess demand that bids price up to P₂.',
  },
  {
    id: 'econ-q-2-4-2',
    subtopicId: 'econ-2-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'At $10 per T-shirt, Qd = 900 and Qs = 300; at $15, Qd = 600 and Qs = 600. State the equilibrium price and calculate the excess demand (shortage) at $10.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The equilibrium price is $15 (where Qd = Qs = 600). At $10, excess demand (shortage) = 900 - 300 = 600 T-shirts.',
      markPoints: [
        { id: 'mp1', markDescription: 'Equilibrium price $15', numericMatch: { value: 15, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Shortage of 600 T-shirts', numericMatch: { value: 600, tolerance: 1 } },
      ],
    },
    explanation: 'Equilibrium is $15 where Qd = Qs = 600; at $10 the shortage is Qd − Qs = 900 − 300 = 600 units.',
  },
  {
    id: 'econ-q-2-4-3',
    subtopicId: 'econ-2-4',
    type: 'mcq',
    marks: 1,
    prompt: 'When market price is set ABOVE equilibrium, what happens automatically in a free market?',
    options: [
      'Excess demand pushes prices higher',
      'Unsold surplus (excess supply) forces sellers to cut prices until Qd = Qs',
      'The supply curve shifts right',
      'The demand curve shifts left',
    ],
    correctIndex: 1,
    explanation: 'Above equilibrium Qs > Qd; unsold stock pushes firms to cut prices, contracting supply and extending demand.',
  },
  {
    id: 'econ-q-2-4-4',
    subtopicId: 'econ-2-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the disequilibrium adjustment process:',
    segments: ['When price is below equilibrium there is excess ', ', so price rises, causing demand to ', ' and supply to extend until equilibrium returns.'],
    wordBank: ['demand', 'contract', 'supply', 'shift'],
    answers: ['demand', 'contract'],
    explanation: 'Prices below equilibrium create excess demand (shortage); rising price contracts demand along D and extends S.',
  },
  {
    id: 'econ-q-2-4-5',
    subtopicId: 'econ-2-4',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is equilibrium price called the "market-clearing price"?',
    options: [
      'Because firms sell goods at zero profit',
      'Because every unit supplied at that price is bought, leaving zero shortage and zero unsold surplus',
      'Because the government buys all remaining stock',
      'Because demand and supply curves become horizontal',
    ],
    correctIndex: 1,
    explanation: 'At the market-clearing price Qd exactly matches Qs, so no queues or unsold inventories remain.',
  },

  // 2.5 Price Changes & Simultaneous Market Shifts
  {
    id: 'econ-q-2-5-1',
    subtopicId: 'econ-2-5',
    type: 'mcq',
    marks: 1,
    prompt: 'A breakthrough cuts solar-panel manufacturing costs by 30%, shifting supply right. What happens to equilibrium price and quantity?',
    options: [
      'Price rises and quantity falls',
      'Price falls and quantity rises',
      'Both price and quantity rise',
      'Both price and quantity fall',
    ],
    correctIndex: 1,
    explanation: 'A rightward shift of supply creates excess supply at the old price, pulling price down and extending quantity demanded.',
  },
  {
    id: 'econ-q-2-5-2',
    subtopicId: 'econ-2-5',
    type: 'matching',
    marks: 2,
    prompt: 'Match each single curve shift to its guaranteed effect on equilibrium price (P) and quantity (Q):',
    pairs: [
      { left: 'Demand shifts RIGHT', right: 'P rises and Q rises' },
      { left: 'Demand shifts LEFT', right: 'P falls and Q falls' },
      { left: 'Supply shifts RIGHT', right: 'P falls and Q rises' },
      { left: 'Supply shifts LEFT', right: 'P rises and Q falls' },
    ],
    explanation: 'Demand shifts move P and Q in the same direction; supply shifts move P and Q in opposite directions.',
  },
  {
    id: 'econ-q-2-5-3',
    subtopicId: 'econ-2-5',
    type: 'mcq',
    marks: 1,
    prompt: 'If BOTH the demand curve and the supply curve for electric scooters shift to the RIGHT simultaneously, what outcome is 100% CERTAIN?',
    options: [
      'Equilibrium price will definitely rise',
      'Equilibrium price will definitely fall',
      'Equilibrium quantity will definitely rise',
      'Equilibrium quantity will stay unchanged',
    ],
    correctIndex: 2,
    explanation: 'Both rightward shifts push quantity upward, whereas the net price change depends on which shift is larger.',
  },
  {
    id: 'econ-q-2-5-4',
    subtopicId: 'econ-2-5',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the interrelated market concepts:',
    segments: ['Rising demand for electric cars increases demand for lithium batteries via ', ' demand, while milk demanded for both cheese and butter is ', ' demand.'],
    wordBank: ['derived', 'composite', 'joint', 'inferior'],
    answers: ['derived', 'composite'],
    explanation: 'Input demand stemming from final goods is derived demand; competing uses for one resource is composite demand.',
  },
  {
    id: 'econ-q-2-5-5',
    subtopicId: 'econ-2-5',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain what happens to the equilibrium price and quantity of smartphones if BOTH demand shifts right (new features) AND supply shifts left (chip shortage).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Equilibrium price will definitely rise because both shifts push price upward. The effect on equilibrium quantity is uncertain and depends on the relative size of the demand and supply shifts.',
      markPoints: [
        { id: 'mp1', markDescription: 'Price definitely rises', requiredKeywordGroups: [['price'], ['rise', 'increase', 'higher']] },
        { id: 'mp2', markDescription: 'Quantity change is uncertain / depends on relative magnitude of shifts', requiredKeywordGroups: [['quantity'], ['uncertain', 'ambiguous', 'depends', 'size', 'magnitude']] },
      ],
    },
    explanation: 'Rightward D and leftward S both lift price, while pulling quantity in opposite directions.',
  },

  // 2.6 Price Elasticity of Demand (PED) & Total Revenue
  {
    id: 'econ-q-2-6-1',
    subtopicId: 'econ-2-6',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the Elastic vs Inelastic Demand panels on the elasticity diagram:',
    diagram: 'elasticity-curves',
    labels: [
      { marker: 'Flat demand curve (left panel, |PED| > 1)', options: ['Raising price causes a big Q drop so Total Revenue falls', 'Raising price boosts Total Revenue', 'Perfectly inelastic demand'], answer: 'Raising price causes a big Q drop so Total Revenue falls' },
      { marker: 'Steep demand curve (right panel, |PED| < 1)', options: ['Raising price causes a small Q drop so Total Revenue rises', 'Raising price causes Total Revenue to fall', 'Unitary elasticity'], answer: 'Raising price causes a small Q drop so Total Revenue rises' },
    ],
    explanation: 'Flat elastic curves lose revenue when price rises; steep inelastic curves gain revenue when price rises.',
  },
  {
    id: 'econ-q-2-6-2',
    subtopicId: 'econ-2-6',
    type: 'short-answer',
    marks: 2,
    prompt: 'A cinema raises ticket prices by 20% and ticket sales fall by 10%. Calculate PED and state whether Total Revenue rises or falls.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'PED = -10% / +20% = -0.5. Because demand is price inelastic (|PED| < 1), raising price causes Total Revenue to rise.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates PED = -0.5', numericMatch: { value: -0.5, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'States inelastic and Total Revenue rises', requiredKeywordGroups: [['inelastic'], ['rise', 'increase']] },
      ],
    },
    explanation: 'PED = −10% ÷ +20% = −0.5 (inelastic), so the 20% price rise outweighs the 10% drop in tickets sold.',
  },
  {
    id: 'econ-q-2-6-3',
    subtopicId: 'econ-2-6',
    type: 'mcq',
    marks: 1,
    prompt: 'Which product is most likely to have HIGHLY PRICE INELASTIC demand?',
    options: [
      'A specific brand of bottled orange juice in a supermarket',
      'Life-saving insulin required daily by diabetic patients',
      'Luxury Mediterranean cruises',
      'Designer trainers with dozens of rival brands',
    ],
    correctIndex: 1,
    explanation: 'Essential medical treatments with no close substitutes have near-zero (highly inelastic) PED.',
  },
  {
    id: 'econ-q-2-6-4',
    subtopicId: 'econ-2-6',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the PED pricing rules:',
    segments: ['To increase Total Revenue when demand is price elastic (|PED| > 1), a firm should ', ' its price; when |PED| = 1, elasticity is ', ' and Total Revenue stays unchanged.'],
    wordBank: ['lower', 'unitary', 'raise', 'inelastic'],
    answers: ['lower', 'unitary'],
    explanation: 'Cutting price on elastic goods generates a proportionally larger jump in sales; unitary PED keeps TR constant.',
  },
  {
    id: 'econ-q-2-6-5',
    subtopicId: 'econ-2-6',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors that make a product’s PED MORE ELASTIC:',
    options: [
      'Many close substitutes available',
      'A longer time period allowing consumers to switch',
      'The product is strongly addictive',
      'The product accounts for a tiny fraction of household income',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Close substitutes and longer adjustment periods make buyers much more responsive to price changes.',
  },

  // 2.7 Price Elasticity of Supply (PES) & Determinants
  {
    id: 'econ-q-2-7-1',
    subtopicId: 'econ-2-7',
    type: 'short-answer',
    marks: 2,
    prompt: 'When the price of wheat rises by 25%, farmers increase quantity supplied by 10%. Calculate PES and classify whether supply is elastic or inelastic.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'PES = +10% / +25% = 0.4. Because PES is less than 1, supply is price inelastic.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates PES = 0.4', numericMatch: { value: 0.4, tolerance: 0.05 } },
        { id: 'mp2', markDescription: 'Classifies supply as price inelastic', requiredKeywordGroups: [['inelastic']] },
      ],
    },
    explanation: 'PES = +10% ÷ +25% = +0.4, which lies between 0 and 1, so supply is price inelastic.',
  },
  {
    id: 'econ-q-2-7-2',
    subtopicId: 'econ-2-7',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is the Price Elasticity of Supply (PES) ALWAYS positive?',
    options: [
      'Because firms always lower prices when costs rise',
      'Because price and quantity supplied move in the SAME direction (upward-sloping supply curve)',
      'Because supply curves are always vertical',
      'Because governments subsidise every product',
    ],
    correctIndex: 1,
    explanation: 'Higher prices encourage higher quantity supplied (both %ΔQs and %ΔP share the same sign), making PES positive.',
  },
  {
    id: 'econ-q-2-7-3',
    subtopicId: 'econ-2-7',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors that make a firm’s supply MORE PRICE ELASTIC (higher PES):',
    options: [
      'Abundant spare factory capacity',
      'Large stockpiles of non-perishable goods in warehouses',
      'A 5-year growing period before crops mature',
      'Perishable fresh fish that spoils in 24 hours',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Spare capacity and storable inventory let producers expand sales rapidly when prices rise.',
  },
  {
    id: 'econ-q-2-7-4',
    subtopicId: 'econ-2-7',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the PES special cases:',
    segments: ['Seats inside a fixed 50,000-capacity stadium tonight have a PES of ', ' (perfectly inelastic), and supply is generally more ', ' in the long run than in the short run.'],
    wordBank: ['zero', 'elastic', 'negative', 'inelastic'],
    answers: ['zero', 'elastic'],
    explanation: 'Fixed stadium seating cannot expand on event night (PES = 0); over time firms can build extra capacity (more elastic).',
  },
  {
    id: 'econ-q-2-7-5',
    subtopicId: 'econ-2-7',
    type: 'mcq',
    marks: 1,
    prompt: 'If demand surges by 30% in a market with highly INELASTIC supply (such as inner-city housing), what is the main market effect?',
    options: [
      'Prices stay almost flat while quantity doubles',
      'A very sharp rise in price with only a small increase in quantity supplied',
      'Price falls dramatically',
      'Supply becomes perfectly elastic immediately',
    ],
    correctIndex: 1,
    explanation: 'When producers cannot rapidly raise output (low PES), higher demand drives steep price increases.',
  },

  // 2.8 Market Economic System & Market Failure
  {
    id: 'econ-q-2-8-1',
    subtopicId: 'econ-2-8',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the Negative Externality of Production diagram:',
    diagram: 'externality-market-failure',
    labels: [
      { marker: 'Vertical gap between MSC and MPC (S)', options: ['External cost (pollution harm to third parties)', 'Private profit margin', 'Consumer subsidy'], answer: 'External cost (pollution harm to third parties)' },
      { marker: 'Comparison of free-market Qm vs socially optimal Qopt', options: ['Market overproduces (Qm > Qopt) causing deadweight welfare loss', 'Market underproduces merit goods', 'Zero market failure'], answer: 'Market overproduces (Qm > Qopt) causing deadweight welfare loss' },
    ],
    explanation: 'Because producers ignore external costs, free-market output Qm exceeds social optimum Qopt, causing welfare loss.',
  },
  {
    id: 'econ-q-2-8-2',
    subtopicId: 'econ-2-8',
    type: 'short-answer',
    marks: 2,
    prompt: 'A chemical plant has a private cost of $80 per tonne and creates river pollution costing local fisheries $35 per tonne. Calculate the Social Cost per tonne and identify this type of externality.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Social Cost = Private Cost + External Cost = $80 + $35 = $115 per tonne. This is a negative externality (external cost) of production.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates Social Cost = $115', numericMatch: { value: 115, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Identifies negative externality / external cost', requiredKeywordGroups: [['negative externality', 'external cost']] },
      ],
    },
    explanation: 'Social Cost = Private Cost ($80) + External Cost ($35) = $115/tonne, illustrating a negative production externality.',
  },
  {
    id: 'econ-q-2-8-3',
    subtopicId: 'econ-2-8',
    type: 'mcq',
    marks: 1,
    prompt: 'Why do private profit-maximising firms fail to supply pure PUBLIC GOODS like street lighting?',
    options: [
      'Street lighting is a demerit good',
      'Public goods are non-excludable and non-rival, creating the free-rider problem so firms cannot charge profitably',
      'Demand for street lighting is perfectly elastic',
      'Street lighting has zero cost to install',
    ],
    correctIndex: 1,
    explanation: 'Non-excludability allows non-payers to free ride, removing any profit incentive for private providers.',
  },
  {
    id: 'econ-q-2-8-4',
    subtopicId: 'econ-2-8',
    type: 'matching',
    marks: 2,
    prompt: 'Match each category of good to its classic IGCSE Economics example:',
    pairs: [
      { left: 'Merit good (under-consumed)', right: 'Vaccinations and education' },
      { left: 'Demerit good (over-consumed)', right: 'Cigarettes and excessive alcohol' },
      { left: 'Public good (non-excludable & non-rival)', right: 'National defence and street lighting' },
      { left: 'Private good (excludable & rival)', right: 'A takeaway sandwich' },
    ],
    explanation: 'Know the precise classification of merit, demerit, public, and private goods to avoid losing easy marks.',
  },
  {
    id: 'econ-q-2-8-5',
    subtopicId: 'econ-2-8',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the market failure rules:',
    segments: ['In a free market, demerit goods are ', ' because consumers ignore external costs, whereas merit goods like healthcare are ', '.'],
    wordBank: ['over-consumed', 'under-consumed', 'non-rival', 'free'],
    answers: ['over-consumed', 'under-consumed'],
    explanation: 'Information failure and externalities cause free markets to over-consume demerit goods and under-consume merit goods.',
  },

  // 2.9 Mixed Economic System & Government Intervention
  {
    id: 'econ-q-2-9-1',
    subtopicId: 'econ-2-9',
    type: 'mcq',
    marks: 1,
    prompt: 'A city government sets a binding MAXIMUM rent (price ceiling) BELOW market equilibrium. What is the immediate economic result?',
    options: [
      'A surplus of empty apartments',
      'Excess demand (a housing shortage), queues, and potential black-market subletting',
      'Supply of apartments shifts sharply right',
      'Equilibrium rent rises automatically',
    ],
    correctIndex: 1,
    explanation: 'A binding maximum price below equilibrium pushes Qd above Qs, creating a persistent shortage.',
  },
  {
    id: 'econ-q-2-9-2',
    subtopicId: 'econ-2-9',
    type: 'short-answer',
    marks: 2,
    prompt: 'Equilibrium rent is $1,200/month. Under a $900/month maximum rent cap, Qd = 13,500 flats and Qs = 8,000 flats. Calculate the shortage and explain ONE drawback for tenants.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The housing shortage is 13,500 - 8,000 = 5,500 flats. A drawback is long waiting lists, lower maintenance quality from landlords, or illegal black-market side payments.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates shortage = 5,500 flats', numericMatch: { value: 5500, tolerance: 1 } },
        { id: 'mp2', markDescription: 'Identifies queues, poor quality/maintenance, or black markets', requiredKeywordGroups: [['queue', 'waiting', 'quality', 'maintenance', 'black market', 'illegal', 'shortage']] },
      ],
    },
    explanation: 'Shortage = Qd − Qs = 5,500 flats, risking queues, deteriorating housing upkeep, and informal side payments.',
  },
  {
    id: 'econ-q-2-9-3',
    subtopicId: 'econ-2-9',
    type: 'matching',
    marks: 2,
    prompt: 'Match each government policy tool to its primary market effect:',
    pairs: [
      { left: 'Indirect tax on demerit goods', right: 'Shifts supply left, raises price, generates tax revenue' },
      { left: 'Subsidy on solar panels', right: 'Shifts supply right, lowers price, raises output' },
      { left: 'Binding minimum price (above Eq)', right: 'Creates excess supply (surplus)' },
      { left: 'Privatisation of a state enterprise', right: 'Transfers ownership to private investors to boost efficiency' },
    ],
    explanation: 'Each mixed-economy tool alters incentives, costs, or ownership in a distinct direction.',
  },
  {
    id: 'econ-q-2-9-4',
    subtopicId: 'econ-2-9',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO causes of GOVERNMENT FAILURE when the state intervenes in a market:',
    options: [
      'Imperfect information leading to taxes or subsidies set at the wrong level',
      'High administrative, inspection, and enforcement costs',
      'Perfect knowledge of every external cost to the exact cent',
      'Zero opportunity cost of public spending',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Information gaps, bureaucratic costs, and unintended black markets can make intervention worsen efficiency.',
  },
  {
    id: 'econ-q-2-9-5',
    subtopicId: 'econ-2-9',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the public-ownership distinctions:',
    segments: ['Selling a state-owned airline to private shareholders is ', ', whereas bringing a failing private rail network into state ownership is ', '.'],
    wordBank: ['privatisation', 'nationalisation', 'regulation', 'taxation'],
    answers: ['privatisation', 'nationalisation'],
    explanation: 'Privatisation shifts assets from public to private ownership; nationalisation shifts private assets into state ownership.',
  },
  // 3.1 Money, Commercial Banks & Central Banks
  {
    id: 'econ-q-3-1-1',
    subtopicId: 'econ-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which role is performed EXCLUSIVELY by a country’s central bank rather than high-street commercial banks?',
    options: [
      'Issuing personal mortgages to homebuyers',
      'Setting national base interest rates and acting as lender of last resort',
      'Offering current accounts and debit cards to households',
      'Approving small business overdraft facilities',
    ],
    correctIndex: 1,
    explanation: 'Only the central bank operates monetary policy, issues legal tender, and acts as lender of last resort.',
  },
  {
    id: 'econ-q-3-1-2',
    subtopicId: 'econ-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO reasons why money is more efficient than barter for carrying out everyday trade.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Money acts as a widely accepted medium of exchange, eliminating the double coincidence of wants required under barter. It also serves as a unit of account so prices and values of different goods can be compared easily.',
      markPoints: [
        { id: 'mp1', markDescription: 'Medium of exchange / solves double coincidence of wants', requiredKeywordGroups: [['medium of exchange', 'double coincidence']] },
        { id: 'mp2', markDescription: 'Unit of account / store of value / standard of deferred payment', requiredKeywordGroups: [['unit of account', 'store of value', 'deferred', 'compare']] },
      ],
    },
    explanation: 'Money removes the double coincidence of wants and provides a reliable measure of value and store of wealth.',
  },
  {
    id: 'econ-q-3-1-3',
    subtopicId: 'econ-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each function of money to its economic meaning:',
    pairs: [
      { left: 'Medium of exchange', right: 'Widely accepted in payment for goods and services' },
      { left: 'Unit of account', right: 'Common yardstick for measuring and comparing prices' },
      { left: 'Store of value', right: 'Retains purchasing power for future spending' },
      { left: 'Standard of deferred payment', right: 'Allows debts and credit contracts to be settled later' },
    ],
    explanation: 'All four functions require money to be durable, portable, divisible, scarce, and generally acceptable.',
  },
  {
    id: 'econ-q-3-1-4',
    subtopicId: 'econ-3-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO core functions carried out by commercial banks:',
    options: [
      'Accepting household and business deposits into savings and current accounts',
      'Making loans and mortgages to households and firms to earn interest',
      'Printing national banknotes and coins',
      'Managing the country’s official gold and foreign exchange reserves',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Commercial banks take deposits and lend profitably; printing legal tender and holding national reserves belong to the central bank.',
  },
  {
    id: 'econ-q-3-1-5',
    subtopicId: 'econ-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the characteristics of good money:',
    segments: ['If rapid inflation erodes purchasing power, money fails as a ', ', whereas banknotes that are hard to forge preserve ', '.'],
    wordBank: ['store of value', 'acceptability', 'barter', 'liquidity'],
    answers: ['store of value', 'acceptability'],
    explanation: 'High inflation destroys money’s store of value; security features maintain public trust and acceptability.',
  },

  // 3.2 Households: Spending, Saving & Borrowing
  {
    id: 'econ-q-3-2-1',
    subtopicId: 'econ-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What typically happens to household spending, saving, and borrowing when the central bank RAISES interest rates sharply?',
    options: [
      'Saving rises, borrowing falls, and consumer spending slows down',
      'Saving falls to zero and borrowing surges',
      'Mortgage repayments become cheaper so spending rises',
      'Disposable income increases for all borrowers immediately',
    ],
    correctIndex: 0,
    explanation: 'Higher interest rates reward saving and increase loan/mortgage repayments, reducing discretionary household spending.',
  },
  {
    id: 'econ-q-3-2-2',
    subtopicId: 'econ-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'A household’s monthly disposable income is $4,000 and it spends $3,400. Calculate its Average Propensity to Save (APS) as a percentage and state ONE factor besides income that raises saving.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Saving = $4,000 - $3,400 = $600, so APS = (600 / 4,000) x 100 = 15%. Higher interest rates, retirement planning, or low consumer confidence encourage households to save a larger share.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates APS = 15%', numericMatch: { value: 15, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Identifies higher interest rates, precautionary confidence, or retirement/age', requiredKeywordGroups: [['interest rate', 'confidence', 'retirement', 'age', 'precautionary', 'uncertainty']] },
      ],
    },
    explanation: 'APS = Saving ÷ Disposable Income = 600 ÷ 4,000 = 15%. Interest rates, age, and confidence all shift saving.',
  },
  {
    id: 'econ-q-3-2-3',
    subtopicId: 'econ-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the income-group spending pattern:',
    segments: ['Low-income households spend a higher ', ' of their disposable income on necessities, whereas high-income households spend a larger absolute ', ' and save a higher share.'],
    wordBank: ['proportion', 'amount', 'deficit', 'tariff'],
    answers: ['proportion', 'amount'],
    explanation: 'Poorer households have a higher APC (proportion spent) even though richer households spend more total dollars.',
  },
  {
    id: 'econ-q-3-2-4',
    subtopicId: 'econ-3-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO factors likely to INCREASE household borrowing:',
    options: [
      'A fall in bank interest rates on personal loans and mortgages',
      'Strong consumer confidence about future job security and wages',
      'Stricter bank credit checks and larger deposit requirements',
      'Fear of imminent recession and redundancy',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Lower borrowing costs and strong optimism about future earnings make households more willing to take on debt.',
  },
  {
    id: 'econ-q-3-2-5',
    subtopicId: 'econ-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each household financial concept to its correct definition:',
    pairs: [
      { left: 'Disposable income', right: 'Gross income minus direct taxes plus state cash benefits' },
      { left: 'Average Propensity to Consume (APC)', right: 'Proportion of disposable income spent on consumption' },
      { left: 'Dissaving', right: 'Spending more than current income by drawing down savings or borrowing' },
      { left: 'Wealth effect', right: 'Rising house or share values encouraging households to spend more' },
    ],
    explanation: 'Distinguish disposable income from gross pay and understand how wealth and life stage alter APC/APS.',
  },

  // 3.3 Workers, Wages, Division of Labour & Trade Unions
  {
    id: 'econ-q-3-3-1',
    subtopicId: 'econ-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which combination best explains why specialist neurosurgeons earn far higher wages than supermarket shelf-stackers?',
    options: [
      'Low demand for healthcare and abundant supply of trained surgeons',
      'High derived demand paired with highly inelastic, scarce supply due to years of specialist training',
      'Lower productivity and weak qualifications in medicine',
      'A national minimum wage set only for hospitals',
    ],
    correctIndex: 1,
    explanation: 'Strong derived demand plus scarce, qualification-restricted labour supply pushes equilibrium wages sharply higher.',
  },
  {
    id: 'econ-q-3-3-2',
    subtopicId: 'econ-3-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE advantage and ONE disadvantage of division of labour (worker specialisation) for a worker.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: repeating a specialised task builds expertise and raises productivity, which can lead to higher pay. Disadvantage: repetitive work causes boredom and low motivation, or makes the worker vulnerable to structural unemployment if their narrow skill becomes obsolete.',
      markPoints: [
        { id: 'mp1', markDescription: 'Higher skill, productivity, or wages', requiredKeywordGroups: [['skill', 'expert', 'productivity', 'higher pay', 'wage']] },
        { id: 'mp2', markDescription: 'Boredom, monotony, alienation, or narrow/obsolete skills', requiredKeywordGroups: [['boredom', 'repetitive', 'monoton', 'obsolete', 'unemploy', 'motivation']] },
      ],
    },
    explanation: 'Specialisation lifts output per worker and pay potential, but risks monotony and narrow skill dependency.',
  },
  {
    id: 'econ-q-3-3-3',
    subtopicId: 'econ-3-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO NON-WAGE factors that influence a worker’s choice of occupation:',
    options: [
      'Job satisfaction, safe working conditions, and career promotion prospects',
      'Commuting distance, flexible hours, and pension or holiday perks',
      'Basic hourly wage rate alone',
      'Overtime bonus rate per extra hour worked',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Workers weigh non-pecuniary rewards (satisfaction, safety, location, hours, fringe benefits) alongside wages.',
  },
  {
    id: 'econ-q-3-3-4',
    subtopicId: 'econ-3-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the trade union and labour market principles:',
    segments: ['Trade unions negotiate pay on behalf of members through ', ' bargaining, and a union’s bargaining strength is greatest when firm profits are high and labour demand is price ', '.'],
    wordBank: ['collective', 'inelastic', 'individual', 'elastic'],
    answers: ['collective', 'inelastic'],
    explanation: 'Collective bargaining gives workers leverage, especially when firms cannot easily replace workers or pass up profits.',
  },
  {
    id: 'econ-q-3-3-5',
    subtopicId: 'econ-3-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each labour-market term to its correct explanation:',
    pairs: [
      { left: 'Derived demand for labour', right: 'Workers are demanded because consumers want the goods they produce' },
      { left: 'National minimum wage (above Eq)', right: 'Raises pay for employed workers but risks excess labour supply' },
      { left: 'Work-to-rule', right: 'Industrial action where staff follow every rule strictly to slow output' },
      { left: 'Wage differential', right: 'Gap in earnings between occupations due to skills, risk, or bargaining power' },
    ],
    explanation: 'Wage determination reflects derived demand, labour supply elasticity, union power, and government wage floors.',
  },

  // 3.4 Firms: Size, Mergers & Economies/Diseconomies of Scale
  {
    id: 'econ-q-3-4-1',
    subtopicId: 'econ-3-4',
    type: 'mcq',
    marks: 1,
    prompt: 'A national coffee-shop chain buys a coffee-bean plantation in Colombia. What type of integration is this?',
    options: [
      'Horizontal integration',
      'Vertical backward integration',
      'Vertical forward integration',
      'Conglomerate integration',
    ],
    correctIndex: 1,
    explanation: 'Acquiring an upstream raw-material supplier in the same supply chain is vertical backward integration.',
  },
  {
    id: 'econ-q-3-4-2',
    subtopicId: 'econ-3-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO reasons why many small firms survive successfully alongside giant multinational corporations.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Small firms survive by serving niche markets with personalised local service that large firms ignore, and by operating with low fixed start-up costs and rapid flexibility to adapt to customer tastes.',
      markPoints: [
        { id: 'mp1', markDescription: 'Niche market / personalised service / local convenience', requiredKeywordGroups: [['niche', 'personal', 'local', 'bespoke', 'tailored']] },
        { id: 'mp2', markDescription: 'Flexibility, low overhead/capital needs, or owner prefers independence', requiredKeywordGroups: [['flexib', 'low cost', 'start-up', 'startup', 'independence', 'overhead', 'adapt']] },
      ],
    },
    explanation: 'Niche specialisation, personal service, low barriers to entry, and agility allow small firms to thrive.',
  },
  {
    id: 'econ-q-3-4-3',
    subtopicId: 'econ-3-4',
    type: 'matching',
    marks: 2,
    prompt: 'Match each internal economy of scale to how it lowers average cost:',
    pairs: [
      { left: 'Purchasing economy', right: 'Bulk-buying discounts on raw materials and components' },
      { left: 'Financial economy', right: 'Borrowing large sums at lower interest rates due to lower risk' },
      { left: 'Technical economy', right: 'Using high-speed specialised machinery spread over huge output' },
      { left: 'Managerial economy', right: 'Hiring specialist finance, marketing, and operations directors' },
    ],
    explanation: 'All internal economies of scale reduce long-run average cost per unit as the individual firm expands.',
  },
  {
    id: 'econ-q-3-4-4',
    subtopicId: 'econ-3-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the scale-efficiency relationship:',
    segments: ['When a firm grows too large and poor communication pushes average cost up, it suffers ', ' of scale, whereas cost savings shared by all firms in a clustered tech hub are ', ' economies of scale.'],
    wordBank: ['diseconomies', 'external', 'internal', 'horizontal'],
    answers: ['diseconomies', 'external'],
    explanation: 'Internal diseconomies raise AC via bureaucracy/control loss; external economies benefit every firm in a growing industry.',
  },
  {
    id: 'econ-q-3-4-5',
    subtopicId: 'econ-3-4',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO valid ways economists measure the size of a firm:',
    options: [
      'Number of employees and annual sales revenue (turnover)',
      'Market share and total capital employed (or stock market capitalisation)',
      'Age of the company founder',
      'Number of colours used in the brand logo',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Firm size is measured by workforce, output/revenue, capital employed, and market share—never profit alone.',
  },

  // 3.5 Firms & Production: Labour- vs Capital-Intensive & Productivity
  {
    id: 'econ-q-3-5-1',
    subtopicId: 'econ-3-5',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the precise difference between PRODUCTION and PRODUCTIVITY?',
    options: [
      'Production is output per worker; productivity is total factory revenue',
      'Production is the total volume of goods/services produced; productivity is output per unit of input (e.g. per worker or per hour)',
      'They mean exactly the same thing in economics',
      'Productivity only applies to agriculture',
    ],
    correctIndex: 1,
    explanation: 'A firm can raise total production by hiring double the staff without improving productivity (output per worker).',
  },
  {
    id: 'econ-q-3-5-2',
    subtopicId: 'econ-3-5',
    type: 'short-answer',
    marks: 2,
    prompt: 'A factory’s 40 workers produce 3,200 smartphones per week. After training, the same 40 workers produce 3,600 smartphones per week. Calculate the new weekly labour productivity and the percentage increase in productivity.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Initial productivity = 3,200 / 40 = 80 phones per worker. New productivity = 3,600 / 40 = 90 phones per worker. Percentage increase = ((90 - 80) / 80) x 100 = 12.5%.',
      markPoints: [
        { id: 'mp1', markDescription: 'New productivity = 90 phones per worker', numericMatch: { value: 90, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Percentage increase = 12.5%', numericMatch: { value: 12.5, tolerance: 0.1 } },
      ],
    },
    explanation: '3,600 ÷ 40 = 90 phones/worker; rising from 80 to 90 is a (10 ÷ 80) × 100 = 12.5% productivity gain.',
  },
  {
    id: 'econ-q-3-5-3',
    subtopicId: 'econ-3-5',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the factor-intensity comparison:',
    segments: ['A firm relying heavily on automated robots and machinery is ', '-intensive, whereas a bespoke tailoring workshop relying mainly on skilled craftspeople is ', '-intensive.'],
    wordBank: ['capital', 'labour', 'land', 'tertiary'],
    answers: ['capital', 'labour'],
    explanation: 'Relative factor prices (wages vs machine costs) and product customisation determine optimal factor intensity.',
  },
  {
    id: 'econ-q-3-5-4',
    subtopicId: 'econ-3-5',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO reasons a car manufacturer might switch toward MORE capital-intensive production:',
    options: [
      'Rising domestic wage rates making human labour relatively expensive',
      'Falling cost and higher precision of industrial robots running 24/7',
      'Customers demanding hand-carved one-off wooden bodywork',
      'Extremely high interest rates making borrowing for machinery prohibitive',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Higher wages and cheaper, consistent robotics shift derived demand from labour toward capital.',
  },
  {
    id: 'econ-q-3-5-5',
    subtopicId: 'econ-3-5',
    type: 'matching',
    marks: 2,
    prompt: 'Match each production concept to its primary economic effect:',
    pairs: [
      { left: 'Investment in worker training', right: 'Raises labour productivity and reduces unit labour costs' },
      { left: 'High fixed capital outlay', right: 'Main barrier preventing tiny start-ups from full automation' },
      { left: 'Derived demand for capital', right: 'Firms buy new machinery only when consumer product demand grows' },
      { left: 'Capital-deepening innovation', right: 'Boosts long-run output per hour but can displace routine jobs' },
    ],
    explanation: 'Higher productivity lowers average cost and boosts international competitiveness.',
  },

  // 3.6 Firms' Costs, Revenue & Business Objectives
  {
    id: 'econ-q-3-6-1',
    subtopicId: 'econ-3-6',
    type: 'short-answer',
    marks: 2,
    prompt: 'A bicycle workshop has monthly fixed costs of $4,500 and variable costs of $110 per bike. It produces and sells 150 bikes at $170 each. Calculate (i) Average Total Cost (ATC) and (ii) Total Profit.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Total Cost = $4,500 + (150 x $110) = $21,000, so ATC = $21,000 / 150 = $140 per bike. Total Revenue = 150 x $170 = $25,500, so Total Profit = $25,500 - $21,000 = $4,500.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates ATC = $140', numericMatch: { value: 140, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Calculates Total Profit = $4,500', numericMatch: { value: 4500, tolerance: 1 } },
      ],
    },
    explanation: 'TC = 4,500 + 16,500 = $21,000 → ATC = $140. TR = $25,500 → Profit = $25,500 − $21,000 = $4,500.',
  },
  {
    id: 'econ-q-3-6-2',
    subtopicId: 'econ-3-6',
    type: 'mcq',
    marks: 1,
    prompt: 'What happens to AVERAGE FIXED COST (AFC) as a firm steadily increases its monthly output?',
    options: [
      'AFC rises in direct proportion to output',
      'AFC falls continuously because total fixed costs are spread across more units',
      'AFC stays constant at every output level',
      'AFC equals variable cost per unit',
    ],
    correctIndex: 1,
    explanation: 'Since AFC = TFC ÷ Q and TFC is unchanged, rising output continuously lowers AFC per unit.',
  },
  {
    id: 'econ-q-3-6-3',
    subtopicId: 'econ-3-6',
    type: 'matching',
    marks: 2,
    prompt: 'Match each cost or revenue formula to its correct definition:',
    pairs: [
      { left: 'Total Cost (TC)', right: 'Total Fixed Cost + Total Variable Cost' },
      { left: 'Average Cost (AC)', right: 'Total Cost ÷ Output (Q)' },
      { left: 'Total Revenue (TR)', right: 'Price × Quantity Sold' },
      { left: 'Average Revenue (AR)', right: 'Total Revenue ÷ Quantity (= Selling Price)' },
    ],
    explanation: 'Every Cambridge 0455 cost-table question relies on fluent conversion between total and average figures.',
  },
  {
    id: 'econ-q-3-6-4',
    subtopicId: 'econ-3-6',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO valid NON-PROFIT-MAXIMISING objectives a firm might prioritise:',
    options: [
      'Survival during a severe recession or early start-up year',
      'Social welfare, environmental sustainability, or rapid market-share growth',
      'Maximising average fixed cost per unit',
      'Deliberately ensuring total revenue stays below variable cost',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Depending on age, ownership, and economic cycle, firms pursue survival, growth, social welfare, or profit maximisation.',
  },
  {
    id: 'econ-q-3-6-5',
    subtopicId: 'econ-3-6',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the short-run cost behaviour:',
    segments: ['Factory rent that must be paid even when output is zero is a ', ' cost, whereas raw materials that rise directly with production are a ', ' cost.'],
    wordBank: ['fixed', 'variable', 'marginal', 'sunk'],
    answers: ['fixed', 'variable'],
    explanation: 'Fixed costs do not vary with output in the short run; variable costs change directly with output.',
  },

  // 3.7 Market Structures: Competitive Markets vs Monopoly
  {
    id: 'econ-q-3-7-1',
    subtopicId: 'econ-3-7',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Interpret the Monopoly Market Structure diagram:',
    diagram: 'monopoly-market-structure',
    labels: [
      { marker: 'Monopoly price & output vs Competitive benchmark', options: ['Higher price (Pm > Pc) and lower output (Qm < Qc)', 'Lower price and higher output', 'Identical price and output'], answer: 'Higher price (Pm > Pc) and lower output (Qm < Qc)' },
      { marker: 'Why rivals cannot immediately enter and erode monopoly profit', options: ['High barriers to entry (patents, brand loyalty, scale)', 'Zero fixed costs', 'Perfect consumer information'], answer: 'High barriers to entry (patents, brand loyalty, scale)' },
    ],
    explanation: 'Barriers to entry let a monopolist restrict output and charge a higher price than a competitive market.',
  },
  {
    id: 'econ-q-3-7-2',
    subtopicId: 'econ-3-7',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE potential advantage and ONE potential disadvantage of a monopoly for consumers.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: a large monopoly can achieve substantial economies of scale lowering average cost and reinvest supernormal profits into research and development (R&D) for innovative products. Disadvantage: lack of competition lets it restrict output and charge higher prices with less consumer choice.',
      markPoints: [
        { id: 'mp1', markDescription: 'Economies of scale lowering unit costs OR R&D innovation', requiredKeywordGroups: [['economies of scale', 'r&d', 'research', 'innovat', 'lower average cost']] },
        { id: 'mp2', markDescription: 'Higher prices, restricted output, X-inefficiency, or less choice', requiredKeywordGroups: [['higher price', 'less choice', 'restrict', 'inefficien', 'poor quality']] },
      ],
    },
    explanation: 'Balanced 8-mark evaluation always contrasts scale economies/R&D innovation against higher prices and lower choice.',
  },
  {
    id: 'econ-q-3-7-3',
    subtopicId: 'econ-3-7',
    type: 'mcq',
    marks: 1,
    prompt: 'In a highly competitive market with many small firms selling identical goods and zero barriers to entry, each individual firm is a:',
    options: [
      'Price maker able to raise price freely',
      'Price taker forced to accept the market equilibrium price',
      'Natural monopoly protected by legal patents',
      'Sole buyer of national labour',
    ],
    correctIndex: 1,
    explanation: 'With many perfect substitutes, raising price above market equilibrium causes customers to switch instantly.',
  },
  {
    id: 'econ-q-3-7-4',
    subtopicId: 'econ-3-7',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the market structure characteristics:',
    segments: ['A market where a single infrastructure network (like water pipes) is cheapest when supplied by one firm is a ', ' monopoly, and a legal right preventing rivals from copying an invention is a ', '.'],
    wordBank: ['natural', 'patent', 'competitive', 'tariff'],
    answers: ['natural', 'patent'],
    explanation: 'Natural monopolies arise from extreme economies of scale; patents create legal barriers to encourage R&D.',
  },
  {
    id: 'econ-q-3-7-5',
    subtopicId: 'econ-3-7',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO outcomes normally driven by intense market competition:',
    options: [
      'Lower prices closer to average production costs and greater consumer choice',
      'Strong pressure on firms to improve product quality and cut waste',
      'Guaranteed permanent supernormal monopoly profits',
      'Complete elimination of consumer sovereignty',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Competition forces firms to keep costs and prices down while innovating to retain customers.',
  },
];

export const ECON_FLASHCARDS_1_TO_3: FlashcardItem[] = [
  // 1.1
  { id: 'econ-fc-1-1-1', subtopicId: 'econ-1-1', front: 'Define the basic economic problem.', backBullets: ['Unlimited human wants chasing finite resources (scarcity), forcing choices on what, how, and for whom to produce.'] },
  { id: 'econ-fc-1-1-2', subtopicId: 'econ-1-1', front: 'Name the four factors of production (CELL) and their exact rewards.', backBullets: ['Land → Rent; Labour → Wages; Capital → Interest; Enterprise → Profit.'] },
  { id: 'econ-fc-1-1-3', subtopicId: 'econ-1-1', front: 'Distinguish an economic good from a free good.', backBullets: ['Economic goods use scarce resources and have an opportunity cost (even if state-funded); free goods (sunlight, ambient air) are abundant with zero opportunity cost.'] },
  { id: 'econ-fc-1-1-4', subtopicId: 'econ-1-1', front: 'Define opportunity cost precisely.', backBullets: ['The next best alternative foregone when making an economic decision.'] },
  { id: 'econ-fc-1-1-5', subtopicId: 'econ-1-1', front: 'What do points inside, on, outside, and an outward shift of a PPC show?', backBullets: ['Inside = unemployed/inefficient resources; On = productive efficiency; Outside = currently unattainable; Outward shift = long-run growth from more/better resources.'] },

  // 1.2
  { id: 'econ-fc-1-2-1', subtopicId: 'econ-1-2', front: 'What do economists assume consumers and firms aim to maximise?', backBullets: ['Rational consumers aim to maximise utility (satisfaction); firms aim to maximise profit (TR − TC), though real behaviour can deviate.'] },
  { id: 'econ-fc-1-2-2', subtopicId: 'econ-1-2', front: 'Explain the meaning of ceteris paribus.', backBullets: ['“All other things being equal” — holding every other determinant constant to isolate the effect of one variable change.'] },
  { id: 'econ-fc-1-2-3', subtopicId: 'econ-1-2', front: 'Distinguish positive statements from normative statements.', backBullets: ['Positive statements are objective and testable against data; normative statements express value judgements (“should” / “ought”).'] },
  { id: 'econ-fc-1-2-4', subtopicId: 'econ-1-2', front: 'Outline the primary, secondary, and tertiary economic sectors.', backBullets: ['Primary extracts raw materials; Secondary manufactures/constructs goods; Tertiary provides services (dominant in developed economies).'] },
  { id: 'econ-fc-1-2-5', subtopicId: 'econ-1-2', front: 'How do planned, market, and mixed economies differ in allocating resources?', backBullets: ['Planned: state owns resources & sets output; Market: private price mechanism; Mixed: private markets plus government regulation/welfare.'] },

  // 2.1
  { id: 'econ-fc-2-1-1', subtopicId: 'econ-2-1', front: 'Distinguish microeconomics from macroeconomics.', backBullets: ['Microeconomics studies individual markets, households, and firms; macroeconomics studies the whole economy (GDP, inflation, unemployment, trade).'] },
  { id: 'econ-fc-2-1-2', subtopicId: 'econ-2-1', front: 'State the three key economic questions every society must answer.', backBullets: ['What to produce? How to produce it? For whom to produce it?'] },
  { id: 'econ-fc-2-1-3', subtopicId: 'econ-2-1', front: 'Explain the three functions of the price mechanism (SIR).', backBullets: ['Signalling scarcity via rising prices; Incentivising firms with profit; Rationing limited output to highest-willingness buyers.'] },
  { id: 'econ-fc-2-1-4', subtopicId: 'econ-2-1', front: 'What is consumer sovereignty in a market system?', backBullets: ['Consumers’ spending votes direct what firms produce, rewarding efficient suppliers and forcing unwanted goods out of business.'] },
  { id: 'econ-fc-2-1-5', subtopicId: 'econ-2-1', front: 'Give two limitations of relying purely on the price mechanism.', backBullets: ['Rations goods by ability to pay (inequality), ignores externalities, and fails to supply non-excludable public goods.'] },

  // 2.2
  { id: 'econ-fc-2-2-1', subtopicId: 'econ-2-2', front: 'Define effective demand and state the law of demand.', backBullets: ['Willingness AND ability to pay; as own price falls, quantity demanded extends (inverse relationship, ceteris paribus).'] },
  { id: 'econ-fc-2-2-2', subtopicId: 'econ-2-2', front: 'Extension/contraction of demand vs shift of demand?', backBullets: ['Change in the good’s own price causes movement ALONG D (extension/contraction); non-price factors shift the entire D curve left or right.'] },
  { id: 'econ-fc-2-2-3', subtopicId: 'econ-2-2', front: 'List five key non-price determinants that shift demand (PASIFIC).', backBullets: ['Population, Advertising, Substitutes’ prices, Income, Fashion/tastes, Interest rates, Complements’ prices.'] },
  { id: 'econ-fc-2-2-4', subtopicId: 'econ-2-2', front: 'How does a rise in the price of a substitute vs a complement affect demand?', backBullets: ['Substitute price rises → demand shifts RIGHT; Complement price rises → demand shifts LEFT.'] },
  { id: 'econ-fc-2-2-5', subtopicId: 'econ-2-2', front: 'Distinguish a normal good from an inferior good.', backBullets: ['When income rises, demand shifts right for normal goods (restaurant meals) and shifts left for inferior goods (basic instant noodles).'] },

  // 2.3
  { id: 'econ-fc-2-3-1', subtopicId: 'econ-2-3', front: 'Define supply and explain why the supply curve slopes upward.', backBullets: ['Willingness and ability to sell at each price; higher prices boost profit incentive and cover rising marginal production costs.'] },
  { id: 'econ-fc-2-3-2', subtopicId: 'econ-2-3', front: 'Extension/contraction of supply vs shift of supply?', backBullets: ['Own price change causes movement ALONG S; changes in costs, technology, taxes, subsidies, or weather shift the whole S curve.'] },
  { id: 'econ-fc-2-3-3', subtopicId: 'econ-2-3', front: 'How do indirect taxes and government subsidies shift the supply curve?', backBullets: ['Indirect tax raises unit costs → S shifts LEFT; Subsidy lowers unit costs → S shifts RIGHT.'] },
  { id: 'econ-fc-2-3-4', subtopicId: 'econ-2-3', front: 'List four determinants that shift market supply right.', backBullets: ['Lower raw material/wage costs, better technology, production subsidies, favourable weather, or new firms entering the industry.'] },
  { id: 'econ-fc-2-3-5', subtopicId: 'econ-2-3', front: 'What is market supply?', backBullets: ['The horizontal sum of individual firms’ quantities supplied at every given price level.'] },

  // 2.4
  { id: 'econ-fc-2-4-1', subtopicId: 'econ-2-4', front: 'Define market equilibrium (market-clearing price).', backBullets: ['The price where quantity demanded equals quantity supplied (Qd = Qs), leaving no shortage or surplus and no tendency for price to change.'] },
  { id: 'econ-fc-2-4-2', subtopicId: 'econ-2-4', front: 'What happens when market price is set ABOVE equilibrium?', backBullets: ['Excess supply (surplus: Qs > Qd); firms cut prices to clear unsold stock until equilibrium is restored.'] },
  { id: 'econ-fc-2-4-3', subtopicId: 'econ-2-4', front: 'What happens when market price is set BELOW equilibrium?', backBullets: ['Excess demand (shortage: Qd > Qs); buyer competition bids price upward, extending supply and contracting demand to equilibrium.'] },
  { id: 'econ-fc-2-4-4', subtopicId: 'econ-2-4', front: 'Why are queues and unsold stock signs of disequilibrium?', backBullets: ['Queues indicate persistent excess demand (price too low); stockpiles indicate persistent excess supply (price too high).'] },
  { id: 'econ-fc-2-4-5', subtopicId: 'econ-2-4', front: 'Explain how a shortage self-corrects in a free market.', backBullets: ['Firms raise price → higher price signals/incentivises supply extension while rationing demand contraction until Qd = Qs.'] },

  // 2.5
  { id: 'econ-fc-2-5-1', subtopicId: 'econ-2-5', front: 'Effect on equilibrium P and Q when demand shifts RIGHT?', backBullets: ['Creates temporary shortage at old P → equilibrium price RISES and equilibrium quantity RISES (supply extends).'] },
  { id: 'econ-fc-2-5-2', subtopicId: 'econ-2-5', front: 'Effect on equilibrium P and Q when supply shifts LEFT?', backBullets: ['Higher costs cut supply → equilibrium price RISES and equilibrium quantity FALLS (demand contracts).'] },
  { id: 'econ-fc-2-5-3', subtopicId: 'econ-2-5', front: 'Effect on equilibrium P and Q when supply shifts RIGHT?', backBullets: ['Lower costs/new tech expand supply → equilibrium price FALLS and equilibrium quantity RISES (demand extends).'] },
  { id: 'econ-fc-2-5-4', subtopicId: 'econ-2-5', front: 'What happens when demand shifts right AND supply shifts right simultaneously?', backBullets: ['Equilibrium quantity definitely RISES, while the final change in price depends on which curve shifts further.'] },
  { id: 'econ-fc-2-5-5', subtopicId: 'econ-2-5', front: 'How do you avoid the most common diagram error on price-change questions?', backBullets: ['Never say a shift in D shifts S; a shift in D causes a MOVEMENT (extension/contraction) along the existing S curve!'] },

  // 2.6
  { id: 'econ-fc-2-6-1', subtopicId: 'econ-2-6', front: 'State the Price Elasticity of Demand (PED) formula.', backBullets: ['PED = % change in quantity demanded ÷ % change in price (usually negative due to law of demand).'] },
  { id: 'econ-fc-2-6-2', subtopicId: 'econ-2-6', front: 'Classify |PED| values: elastic, inelastic, unitary, perfectly elastic/inelastic.', backBullets: ['|PED| > 1 elastic; |PED| < 1 inelastic; |PED| = 1 unitary; 0 = vertical (perfectly inelastic); ∞ = horizontal (perfectly elastic).'] },
  { id: 'econ-fc-2-6-3', subtopicId: 'econ-2-6', front: 'How should a firm change price to raise Total Revenue under elastic vs inelastic PED?', backBullets: ['Inelastic (|PED| < 1) → RAISE price (TR rises); Elastic (|PED| > 1) → CUT price (TR rises).'] },
  { id: 'econ-fc-2-6-4', subtopicId: 'econ-2-6', front: 'List five determinants of PED (SPLAT).', backBullets: ['Substitutes (availability/closeness), Proportion of income, Luxury vs necessity, Addictiveness/habit, Time period to adjust.'] },
  { id: 'econ-fc-2-6-5', subtopicId: 'econ-2-6', front: 'Why do governments tax price-inelastic goods like fuel and tobacco heavily?', backBullets: ['Because quantity falls proportionally less than price rises, generating large, reliable indirect tax revenue (though limiting consumption cuts).'] },

  // 2.7
  { id: 'econ-fc-2-7-1', subtopicId: 'econ-2-7', front: 'State the Price Elasticity of Supply (PES) formula and its sign.', backBullets: ['PES = % change in quantity supplied ÷ % change in price (always positive because P and Qs move in the same direction).'] },
  { id: 'econ-fc-2-7-2', subtopicId: 'econ-2-7', front: 'List four key determinants of PES.', backBullets: ['Spare productive capacity, ability to hold stocks/inventories, length of production time lag, and factor mobility/substitutability.'] },
  { id: 'econ-fc-2-7-3', subtopicId: 'econ-2-7', front: 'Why is agricultural supply typically price inelastic in the short run?', backBullets: ['Long growing seasons, perishable crops that cannot be stockpiled easily, and fixed arable land prevent rapid output rises.'] },
  { id: 'econ-fc-2-7-4', subtopicId: 'econ-2-7', front: 'How can a firm make its supply MORE price elastic?', backBullets: ['Hold buffer stocks, cross-train flexible workers, upgrade flexible machinery, and maintain spare capacity or rapid supplier links.'] },
  { id: 'econ-fc-2-7-5', subtopicId: 'econ-2-7', front: 'How does inelastic supply affect price volatility when demand shifts?', backBullets: ['Steep inelastic supply means any surge in demand causes a sharp price spike with very little extra output.'] },

  // 2.8
  { id: 'econ-fc-2-8-1', subtopicId: 'econ-2-8', front: 'Define market failure and state the Social Cost / Social Benefit equations.', backBullets: ['Inefficient allocation of scarce resources by the free market; Social Cost = Private + External Cost; Social Benefit = Private + External Benefit.'] },
  { id: 'econ-fc-2-8-2', subtopicId: 'econ-2-8', front: 'Distinguish merit goods from demerit goods.', backBullets: ['Merit goods (vaccines, schooling) generate external benefits and are under-consumed; demerit goods (cigarettes, alcohol) generate external costs and are over-consumed.'] },
  { id: 'econ-fc-2-8-3', subtopicId: 'econ-2-8', front: 'Explain the two properties of pure public goods and the free-rider problem.', backBullets: ['Non-excludable and non-rival; because non-payers cannot be barred, nobody voluntarily pays, so private firms supply zero.'] },
  { id: 'econ-fc-2-8-4', subtopicId: 'econ-2-8', front: 'Give three causes of market failure besides externalities and public goods.', backBullets: ['Abuse of monopoly market power, factor immobility (occupational/geographical), and asymmetric/imperfect information.'] },
  { id: 'econ-fc-2-8-5', subtopicId: 'econ-2-8', front: 'Why does free-market over-production happen under negative externalities?', backBullets: ['Producers consider only Private Cost, ignoring External Cost (pollution), so output exceeds the socially optimum level.'] },

  // 2.9
  { id: 'econ-fc-2-9-1', subtopicId: 'econ-2-9', front: 'Compare binding maximum prices (ceilings) and minimum prices (floors).', backBullets: ['Max price (below Eq) helps affordability but creates shortages/black markets; Min price (above Eq) supports incomes/cuts demerit use but creates surpluses.'] },
  { id: 'econ-fc-2-9-2', subtopicId: 'econ-2-9', front: 'How do indirect taxes and subsidies correct externalities?', backBullets: ['Indirect taxes internalise external costs on demerit goods (S shifts left); subsidies lower prices of merit goods (S shifts right).'] },
  { id: 'econ-fc-2-9-3', subtopicId: 'econ-2-9', front: 'Distinguish privatisation from nationalisation.', backBullets: ['Privatisation sells state-owned enterprises to private investors; nationalisation transfers private enterprises into state ownership.'] },
  { id: 'econ-fc-2-9-4', subtopicId: 'econ-2-9', front: 'Name three non-price ways governments correct market failure.', backBullets: ['Direct state provision (public goods/NHS), laws and regulation (bans, age limits, emissions caps), and information campaigns.'] },
  { id: 'econ-fc-2-9-5', subtopicId: 'econ-2-9', front: 'What is government failure?', backBullets: ['When state intervention causes an even less efficient allocation via imperfect information, administrative costs, black markets, or regulatory capture.'] },

  // 3.1
  { id: 'econ-fc-3-1-1', subtopicId: 'econ-3-1', front: 'State the four functions of money.', backBullets: ['Medium of exchange, unit of account, store of value, and standard of deferred payment.'] },
  { id: 'econ-fc-3-1-2', subtopicId: 'econ-3-1', front: 'List five characteristics of effective money.', backBullets: ['Generally acceptable, durable, portable, divisible, scarce (limited supply), and uniform/hard to counterfeit.'] },
  { id: 'econ-fc-3-1-3', subtopicId: 'econ-3-1', front: 'Outline the main roles of a commercial bank.', backBullets: ['Accepting deposits, lending via loans/overdrafts/mortgages, facilitating payments, and offering foreign-exchange or investment services.'] },
  { id: 'econ-fc-3-1-4', subtopicId: 'econ-3-1', front: 'Outline five key functions of a central bank.', backBullets: ['Issues notes/coins, sets base interest rates (monetary policy), regulates banks, acts as government’s banker, and serves as lender of last resort.'] },
  { id: 'econ-fc-3-1-5', subtopicId: 'econ-3-1', front: 'Why does the central bank act as lender of last resort?', backBullets: ['To lend emergency liquidity to solvent commercial banks facing temporary cash runs, preventing systemic banking collapse.'] },

  // 3.2
  { id: 'econ-fc-3-2-1', subtopicId: 'econ-3-2', front: 'Define disposable income and distinguish APC from APS.', backBullets: ['Disposable income = gross income − direct taxes + benefits; APC = Consumption ÷ Disposable Income; APS = Saving ÷ Disposable Income (APC + APS = 1).'] },
  { id: 'econ-fc-3-2-2', subtopicId: 'econ-3-2', front: 'How do higher interest rates influence household spending, saving, and borrowing?', backBullets: ['Saving becomes more attractive, borrowing/mortgages cost more, and consumer spending decreases.'] },
  { id: 'econ-fc-3-2-3', subtopicId: 'econ-3-2', front: 'Compare spending proportions of low-income vs high-income households.', backBullets: ['Low-income households have higher APC (spend nearly 100% on necessities); high-income households spend more total cash but save a higher percentage.'] },
  { id: 'econ-fc-3-2-4', subtopicId: 'econ-3-2', front: 'Give three non-income factors influencing household saving.', backBullets: ['Interest rates, consumer confidence about future jobs, age/life-cycle stage, and availability of pension/social-security schemes.'] },
  { id: 'econ-fc-3-2-5', subtopicId: 'econ-3-2', front: 'Give three factors driving household borrowing.', backBullets: ['Low interest rates, strong confidence in future pay, relaxed bank lending rules, and purchasing big-ticket assets (homes, education).'] },

  // 3.3
  { id: 'econ-fc-3-3-1', subtopicId: 'econ-3-3', front: 'List four wage and four non-wage factors influencing occupational choice.', backBullets: ['Wage: basic pay, overtime, bonuses, commission. Non-wage: job satisfaction, safety, hours, holidays, pensions, promotion, commuting distance.'] },
  { id: 'econ-fc-3-3-2', subtopicId: 'econ-3-3', front: 'Why do wage differentials persist between occupations?', backBullets: ['Differences in derived demand, training length/scarcity of supply, risk/unsociable hours, productivity, and union bargaining power.'] },
  { id: 'econ-fc-3-3-3', subtopicId: 'econ-3-3', front: 'State two advantages and two disadvantages of division of labour.', backBullets: ['Pros: higher productivity, faster training, lower unit cost. Cons: worker boredom, interdependence bottlenecks, risk of narrow obsolete skills.'] },
  { id: 'econ-fc-3-3-4', subtopicId: 'econ-3-3', front: 'What is a trade union and what determines its bargaining power?', backBullets: ['Worker association negotiating via collective bargaining; stronger when profits are high, union density is high, unemployment is low, and labour demand is inelastic.'] },
  { id: 'econ-fc-3-3-5', subtopicId: 'econ-3-3', front: 'Explain the possible trade-off of raising the national minimum wage.', backBullets: ['Lifts incomes of low-paid workers and cuts poverty, but if set above equilibrium may raise firm costs and reduce employment of low-skilled staff.'] },

  // 3.4
  { id: 'econ-fc-3-4-1', subtopicId: 'econ-3-4', front: 'Distinguish internal (organic) growth from external growth (mergers/takeovers).', backBullets: ['Internal growth reinvests profit to open new sites/products steadily; external growth merges with or acquires another firm rapidly.'] },
  { id: 'econ-fc-3-4-2', subtopicId: 'econ-3-4', front: 'Classify horizontal, vertical backward, vertical forward, and conglomerate mergers.', backBullets: ['Horizontal = same industry/stage; Backward = supplier; Forward = distributor/retailer; Conglomerate = unrelated industry for risk diversification.'] },
  { id: 'econ-fc-3-4-3', subtopicId: 'econ-3-4', front: 'Name five internal economies of scale and state their effect on AC.', backBullets: ['Purchasing, technical, financial, managerial, marketing/risk-bearing — all reduce long-run average cost per unit as output expands.'] },
  { id: 'econ-fc-3-4-4', subtopicId: 'econ-3-4', front: 'What causes internal diseconomies of scale?', backBullets: ['Poor communication, slow bureaucracy, weak management control, and worker alienation in oversized organisations → rising average cost.'] },
  { id: 'econ-fc-3-4-5', subtopicId: 'econ-3-4', front: 'Give three reasons why small firms continue to survive.', backBullets: ['Niche markets, personalised local service, low capital entry barriers, rapid adaptability, and owners valuing personal control.'] },

  // 3.5
  { id: 'econ-fc-3-5-1', subtopicId: 'econ-3-5', front: 'Distinguish production from productivity with the labour productivity formula.', backBullets: ['Production = total output; Labour productivity = Total Output ÷ Number of Workers (or hours worked).'] },
  { id: 'econ-fc-3-5-2', subtopicId: 'econ-3-5', front: 'Compare labour-intensive and capital-intensive production.', backBullets: ['Labour-intensive uses high human effort relative to machines (flexible, bespoke); capital-intensive relies on machinery (high fixed cost, consistent mass output).'] },
  { id: 'econ-fc-3-5-3', subtopicId: 'econ-3-5', front: 'What determines a firm’s derived demand for factors of production?', backBullets: ['Consumer demand for the final product, relative factor prices (wages vs machinery), and relative factor productivity.'] },
  { id: 'econ-fc-3-5-4', subtopicId: 'econ-3-5', front: 'Give three ways a firm can raise labour productivity.', backBullets: ['Targeted staff training, better technology/equipment, improved motivation/pay incentives, and division of labour.'] },
  { id: 'econ-fc-3-5-5', subtopicId: 'econ-3-5', front: 'Why does higher productivity improve international competitiveness?', backBullets: ['More output per worker lowers average cost per unit, letting firms cut export prices or earn higher profit margins.'] },

  // 3.6
  { id: 'econ-fc-3-6-1', subtopicId: 'econ-3-6', front: 'State the formulas for TC, AC, AFC, AVC, TR, AR, and Profit.', backBullets: ['TC = TFC + TVC; AC = TC ÷ Q; AFC = TFC ÷ Q; AVC = TVC ÷ Q; TR = P × Q; AR = TR ÷ Q = P; Profit = TR − TC.'] },
  { id: 'econ-fc-3-6-2', subtopicId: 'econ-3-6', front: 'How do TFC and AFC behave as output rises?', backBullets: ['Total Fixed Cost stays constant in the short run, so Average Fixed Cost (TFC ÷ Q) falls continuously as output increases.'] },
  { id: 'econ-fc-3-6-3', subtopicId: 'econ-3-6', front: 'Why is the short-run Average Total Cost curve typically U-shaped?', backBullets: ['Initially falling AFC and specialisation pull AC down; beyond optimal capacity, overcrowding/inefficiency causes AC to rise.'] },
  { id: 'econ-fc-3-6-4', subtopicId: 'econ-3-6', front: 'List four common business objectives besides profit maximisation.', backBullets: ['Survival (start-ups/recessions), sales/market-share growth, social welfare/charity impact, and environmental sustainability.'] },
  { id: 'econ-fc-3-6-5', subtopicId: 'econ-3-6', front: 'How can a firm increase total profit mathematically?', backBullets: ['Increase Total Revenue (higher sales volume or optimal pricing based on PED) and/or reduce Total Costs (higher productivity, scale economies).'] },

  // 3.7
  { id: 'econ-fc-3-7-1', subtopicId: 'econ-3-7', front: 'State four features of a highly competitive market.', backBullets: ['Many buyers and sellers, low barriers to entry/exit, similar or identical products, firms act as price takers earning normal long-run profit.'] },
  { id: 'econ-fc-3-7-2', subtopicId: 'econ-3-7', front: 'Define a pure monopoly and name four barriers to entry.', backBullets: ['Single dominant seller (price maker); protected by legal patents, economies of scale (natural monopoly), huge brand loyalty, or control of key inputs.'] },
  { id: 'econ-fc-3-7-3', subtopicId: 'econ-3-7', front: 'Give three drawbacks of monopoly power for consumers.', backBullets: ['Higher prices, restricted output, reduced consumer choice, and risk of complacency/poor quality (X-inefficiency).'] },
  { id: 'econ-fc-3-7-4', subtopicId: 'econ-3-7', front: 'Give two potential benefits of a large monopoly.', backBullets: ['Vast economies of scale (avoiding wasteful network duplication in natural monopolies) and profits reinvested into long-term R&D innovation.'] },
  { id: 'econ-fc-3-7-5', subtopicId: 'econ-3-7', front: 'How can governments regulate monopolies to protect consumers?', backBullets: ['Price caps, blocking anti-competitive mergers, fining cartels, opening markets to rivals, or nationalising natural monopolies.'] },
];

export const ECON_EXAM_PRACTICE_1_TO_3: ExamQuestionItem[] = [
  {
    id: 'econ-ex-1-1',
    subtopicId: 'econ-1-1',
    number: 1,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A developing island economy reallocates $240m of government funds from coastal flood barriers to build three new technical colleges and fibre-optic broadband.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain the opportunity cost of this decision and analyse how the investment affects the country’s Production Possibility Curve (PPC) in the long run.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Opportunity cost is the next best alternative foregone, namely the coastal flood barriers that could not be built with the $240m. In the long run, better technical education and broadband capital raise the quality of labour and productive capacity, shifting the PPC outward.',
          markPoints: [
            { id: 'mp1', markDescription: 'Defines opportunity cost as next best alternative foregone (flood barriers)', requiredKeywordGroups: [['next best', 'foregone', 'alternative'], ['flood', 'barrier']] },
            { id: 'mp2', markDescription: 'Higher labour quality/skills and capital infrastructure raise productive capacity', requiredKeywordGroups: [['quality', 'skills', 'education', 'capital', 'capacity']] },
            { id: 'mp3', markDescription: 'Shifts the PPC outward', requiredKeywordGroups: [['ppc'], ['outward', 'right']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-1-2',
    subtopicId: 'econ-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Between 2005 and 2025, Country M’s agricultural employment fell from 34% to 12% of the workforce while financial, tourism, and software jobs rose from 38% to 65%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Identify the structural shift taking place across economic sectors and explain TWO economic reasons why this change occurs as countries develop.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The economy is shifting from the primary sector toward the tertiary (service) sector. First, agricultural mechanisation raises farm productivity so fewer farm workers are needed; second, rising household incomes boost demand for services like finance, tourism, and software.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies shift from primary to tertiary sector', requiredKeywordGroups: [['primary'], ['tertiary', 'service']] },
            { id: 'mp2', markDescription: 'Mechanisation/higher productivity in agriculture releases labour', requiredKeywordGroups: [['mechanis', 'productivity', 'technology', 'machinery']] },
            { id: 'mp3', markDescription: 'Rising incomes raise demand for services', requiredKeywordGroups: [['income'], ['demand', 'service']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-1',
    subtopicId: 'econ-2-1',
    number: 3,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A sudden cold winter causes household demand for portable electric heaters to surge across a market economy with no price controls.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain how the signalling, incentive, and rationing functions of the price mechanism respond to this surge in demand.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Excess demand pushes heater prices upward, signalling scarcity to producers. Higher prices provide a profit incentive for firms to expand heater output, while simultaneously rationing limited existing stock to buyers willing and able to pay the higher price.',
          markPoints: [
            { id: 'mp1', markDescription: 'Signalling: rising price signals scarcity/higher demand', requiredKeywordGroups: [['signal'], ['scarcity', 'demand', 'price']] },
            { id: 'mp2', markDescription: 'Incentive: higher profit encourages firms to expand supply', requiredKeywordGroups: [['incentiv'], ['profit', 'supply', 'output']] },
            { id: 'mp3', markDescription: 'Rationing: allocates limited stock to highest-willingness buyers', requiredKeywordGroups: [['ration'], ['willing', 'able', 'scarce', 'limited']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-2',
    subtopicId: 'econ-2-2',
    number: 4,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A major smartphone manufacturer cuts the price of its flagship handset by 15% while average real household incomes rise by 4%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Distinguish between the diagram effect of the 15% price cut and the diagram effect of the 4% rise in real incomes on demand for the smartphone.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The 15% fall in the smartphone’s own price causes a downward movement along the existing demand curve, called an extension in demand. By contrast, rising real income is a non-price factor that shifts the entire demand curve to the right because smartphones are a normal good.',
          markPoints: [
            { id: 'mp1', markDescription: 'Own price cut causes movement along curve / extension of demand', requiredKeywordGroups: [['extension', 'movement along']] },
            { id: 'mp2', markDescription: 'Higher income shifts the entire demand curve right', requiredKeywordGroups: [['shift'], ['right']] },
            { id: 'mp3', markDescription: 'Recognises smartphones as a normal good / non-price determinant', requiredKeywordGroups: [['normal good', 'non-price']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-3',
    subtopicId: 'econ-2-3',
    number: 5,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A government introduces a $600 per-unit production subsidy for domestic solar-panel manufacturers while semiconductor prices fall.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Analyse how these two changes affect the supply curve, equilibrium price, and equilibrium quantity of solar panels.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Both the production subsidy and cheaper semiconductors lower unit production costs, shifting the supply curve of solar panels to the right. As a result, equilibrium price falls and equilibrium quantity extends (increases) along the demand curve.',
          markPoints: [
            { id: 'mp1', markDescription: 'Lowers production costs', requiredKeywordGroups: [['lower', 'fall', 'reduce'], ['cost']] },
            { id: 'mp2', markDescription: 'Supply curve shifts to the right', requiredKeywordGroups: [['supply'], ['right']] },
            { id: 'mp3', markDescription: 'Equilibrium price falls and quantity increases', requiredKeywordGroups: [['price'], ['falls', 'decreases'], ['quantity'], ['increases', 'rises', 'extends']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-4',
    subtopicId: 'econ-2-4',
    number: 6,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] At a festival ticket price of $40, quantity demanded is 18,000 tickets while venue capacity (quantity supplied) is 12,000 tickets. Market equilibrium price is $65.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate the size of the disequilibrium at $40 and explain how market forces restore equilibrium if prices are allowed to adjust freely.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'At $40 there is excess demand (a shortage) of 18,000 - 12,000 = 6,000 tickets. Competition among buyers bids the ticket price upward toward $65, causing quantity demanded to contract and quantity supplied to extend until Qd equals Qs at equilibrium.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates shortage of 6,000 tickets', numericMatch: { value: 6000, tolerance: 1 } },
            { id: 'mp2', markDescription: 'Identifies excess demand / shortage pushes price up', requiredKeywordGroups: [['excess demand', 'shortage'], ['price'], ['up', 'rise', 'bid']] },
            { id: 'mp3', markDescription: 'Demand contracts and supply extends until Qd = Qs', requiredKeywordGroups: [['contract', 'falls'], ['equilibrium', 'qd', 'qs']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-5',
    subtopicId: 'econ-2-5',
    number: 7,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Severe frost destroys 35% of Brazil’s orange harvest at the exact same time a health campaign increases consumer demand for fresh orange juice.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Analyse the combined effect of these two simultaneous shifts on the equilibrium price and equilibrium quantity of orange juice.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Frost shifts the supply curve left while the health campaign shifts the demand curve right. Both shifts push equilibrium price sharply upward, whereas the final change in equilibrium quantity is uncertain and depends on the relative size of the supply and demand shifts.',
          markPoints: [
            { id: 'mp1', markDescription: 'Supply shifts left and demand shifts right', requiredKeywordGroups: [['supply'], ['left'], ['demand'], ['right']] },
            { id: 'mp2', markDescription: 'Equilibrium price definitely rises', requiredKeywordGroups: [['price'], ['up', 'rise', 'higher']] },
            { id: 'mp3', markDescription: 'Equilibrium quantity change is uncertain / depends on relative shift sizes', requiredKeywordGroups: [['quantity'], ['uncertain', 'ambiguous', 'depends', 'relative']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-6',
    subtopicId: 'econ-2-6',
    number: 8,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A commuter rail operator raises peak-hour season ticket prices by 12% and sees passenger journeys drop by 3%. On leisure weekend routes, a 10% price cut boosts sales by 25%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate PED on the peak-hour route and explain why raising peak fares while cutting weekend fares can increase total revenue.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Peak-hour PED = -3% / +12% = -0.25, which is price inelastic because commuters lack close substitutes. Raising peak price increases total revenue because sales drop proportionally less than price rises; meanwhile weekend PED is -2.5 (elastic), so cutting weekend fares lifts sales proportionally more, raising total revenue on both routes.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates peak PED = -0.25', numericMatch: { value: -0.25, tolerance: 0.02 } },
            { id: 'mp2', markDescription: 'Peak demand is inelastic so higher price raises total revenue', requiredKeywordGroups: [['inelastic'], ['total revenue', 'revenue']] },
            { id: 'mp3', markDescription: 'Weekend demand is elastic so lower price boosts volume & total revenue', requiredKeywordGroups: [['elastic'], ['cut', 'lower', 'weekend']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-7',
    subtopicId: 'econ-2-7',
    number: 9,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Global demand for lithium batteries surges by 40%. Mining firms take 5 years to open new lithium mines, whereas electronics factories assembling battery packs hold spare assembly lines and large component inventories.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Compare the likely Price Elasticity of Supply (PES) of raw lithium with assembled battery packs and explain how this affects their short-run price volatility.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Raw lithium has price inelastic supply (PES < 1) due to the long 5-year production lag to open mines, causing sharp short-run price spikes when demand jumps. Assembled battery packs have more price elastic supply (PES > 1) because spare capacity and stockpiled components allow factories to expand output quickly with smaller price rises.',
          markPoints: [
            { id: 'mp1', markDescription: 'Raw lithium is price inelastic due to long production time lag', requiredKeywordGroups: [['inelastic'], ['lag', '5-year', '5 year', 'time']] },
            { id: 'mp2', markDescription: 'Battery packs are more elastic due to spare capacity and stocks/inventories', requiredKeywordGroups: [['elastic'], ['spare capacity', 'stock', 'inventor']] },
            { id: 'mp3', markDescription: 'Inelastic supply leads to sharper price spikes / higher volatility', requiredKeywordGroups: [['spike', 'volatil', 'sharp', 'price rise']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-8',
    subtopicId: 'econ-2-8',
    number: 10,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A coal-fired power station generates cheap electricity for local factories, but its smoke causes asthma among nearby residents and damages regional farmland.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain why this situation represents market failure using the concepts of private cost, external cost, and social cost.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Market failure occurs because the power station only considers its private costs (coal and wages) and ignores the negative externalities (external costs of asthma healthcare and damaged farmland imposed on third parties). Consequently, social cost exceeds private cost and electricity is over-produced relative to the social optimum.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies negative externality / external costs on third parties (asthma/farmland)', requiredKeywordGroups: [['external cost', 'negative externalit'], ['third part', 'asthma', 'farmland', 'resident']] },
            { id: 'mp2', markDescription: 'Social cost = private cost + external cost (exceeds private cost)', requiredKeywordGroups: [['social cost'], ['private cost']] },
            { id: 'mp3', markDescription: 'Free market over-produces / misallocates resources', requiredKeywordGroups: [['over-produc', 'overproduc', 'misallocat', 'too much']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-2-9',
    subtopicId: 'econ-2-9',
    number: 11,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A government introduces a heavy per-litre indirect tax on sugary fizzy drinks while using the revenue to subsidise school fruit programmes.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Evaluate how effective this indirect tax is likely to be in reducing sugary drink consumption, referring to Price Elasticity of Demand and ONE possible unintended drawback.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The indirect tax shifts supply of sugary drinks left and raises price. If demand is price inelastic (due to habit/addiction), quantity demanded falls only slightly even though high tax revenue is raised to fund fruit subsidies; moreover, the tax is regressive, hitting low-income households harder, or may risk government failure via black-market imports.',
          markPoints: [
            { id: 'mp1', markDescription: 'Indirect tax shifts supply left and raises price', requiredKeywordGroups: [['supply'], ['left'], ['price']] },
            { id: 'mp2', markDescription: 'Effectiveness depends on PED (inelastic means small drop in Q but large revenue)', requiredKeywordGroups: [['inelastic', 'ped'], ['small', 'slightly', 'revenue']] },
            { id: 'mp3', markDescription: 'Identifies regressive burden, smuggling/black market, or job losses', requiredKeywordGroups: [['regressive', 'low-income', 'low income', 'black market', 'black-market', 'government failure']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-1',
    subtopicId: 'econ-3-1',
    number: 12,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Annual inflation in Country R jumps to 42%, while rumours spread that a mid-sized commercial bank has run short of cash reserves.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain which function of money is most damaged by 42% inflation and describe TWO actions the central bank can take to restore banking and price stability.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'High inflation severely damages money’s function as a store of value because savings rapidly lose purchasing power. The central bank can act as lender of last resort to provide emergency liquidity to prevent a bank run, and raise national base interest rates to curb borrowing and reduce inflation.',
          markPoints: [
            { id: 'mp1', markDescription: 'Damages store of value / erodes purchasing power', requiredKeywordGroups: [['store of value'], ['purchasing power', 'erode', 'lose']] },
            { id: 'mp2', markDescription: 'Acts as lender of last resort / emergency liquidity', requiredKeywordGroups: [['lender of last resort', 'emergency', 'liquidity']] },
            { id: 'mp3', markDescription: 'Raises base interest rates to control inflation', requiredKeywordGroups: [['interest rate'], ['raise', 'higher', 'increase']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-2',
    subtopicId: 'econ-3-2',
    number: 13,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Over one year, a central bank cuts base interest rates from 6% to 3%, while rising house prices lift household wealth across Country T.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Analyse how these two changes affect household saving, borrowing, and consumer spending.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Lower interest rates reduce the return on savings (lowering the incentive to save) and make loans and mortgages cheaper (encouraging borrowing). Combined with the positive wealth effect from higher house prices, households feel more confident and increase consumer spending.',
          markPoints: [
            { id: 'mp1', markDescription: 'Lower return reduces saving', requiredKeywordGroups: [['saving', 'save'], ['reduce', 'lower', 'less']] },
            { id: 'mp2', markDescription: 'Cheaper loans/mortgages increase borrowing', requiredKeywordGroups: [['borrowing', 'loan', 'mortgage'], ['cheaper', 'encourage', 'more']] },
            { id: 'mp3', markDescription: 'Wealth effect and lower rates boost consumer spending', requiredKeywordGroups: [['wealth effect', 'house'], ['spending', 'consumption']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-3',
    subtopicId: 'econ-3-3',
    number: 14,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A national railway workers’ trade union demands an 8% pay rise at a time when commuter demand for rail travel is booming and unemployment is just 3.2%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain TWO reasons why this trade union holds strong bargaining power AND identify ONE possible risk for railway employment if wages rise faster than productivity.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The union has strong collective bargaining power because booming commuter demand raises rail company profits and low 3.2% unemployment means replacement drivers are scarce. However, if wages rise faster than labour productivity, unit labour costs increase, which could push the employer to automate tasks or cut jobs.',
          markPoints: [
            { id: 'mp1', markDescription: 'Strong demand / high profits give employer ability to pay', requiredKeywordGroups: [['profit', 'booming', 'demand']] },
            { id: 'mp2', markDescription: 'Low unemployment / scarce replacement workers strengthens leverage', requiredKeywordGroups: [['low unemployment', 'scarce', 'replace', 'tight']] },
            { id: 'mp3', markDescription: 'Higher unit labour costs risk automation, higher fares, or job cuts', requiredKeywordGroups: [['unit labour cost', 'cost', 'automate', 'job cut', 'unemployment']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-4',
    subtopicId: 'econ-3-4',
    number: 15,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Two rival regional parcel-delivery companies announce a horizontal merger that will give the combined firm 48% of the national market and 35,000 staff.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Analyse ONE internal economy of scale AND ONE internal diseconomy of scale that the merged delivery company may experience.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The merged company can achieve purchasing economies of scale by bulk-buying vans and fuel at steep discounts (or technical/network economies from combining overlapping delivery routes), lowering average cost per parcel. Conversely, managing 35,000 staff may cause communication breakdowns and slow bureaucracy, creating diseconomies of scale that push average cost up.',
          markPoints: [
            { id: 'mp1', markDescription: 'Explains a relevant internal economy of scale (purchasing/technical/financial/managerial)', requiredKeywordGroups: [['purchasing', 'bulk', 'technical', 'financial', 'managerial', 'economies of scale']] },
            { id: 'mp2', markDescription: 'Links economy of scale to falling average cost', requiredKeywordGroups: [['lower', 'fall'], ['average cost', 'unit cost']] },
            { id: 'mp3', markDescription: 'Explains communication/control/morale diseconomy raising average cost', requiredKeywordGroups: [['communication', 'bureaucracy', 'control', 'morale'], ['diseconomies', 'average cost']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-5',
    subtopicId: 'econ-3-5',
    number: 16,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A clothing manufacturer considers replacing 60 sewing machinists with automated robotic stitching lines costing $2.4 million after domestic wages rose 18%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain ONE advantage and ONE drawback of switching toward capital-intensive production for this clothing firm.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Advantage: robotic stitching operates 24/7 with consistent precision, raising productivity and lowering average variable labour cost per garment in the long run. Drawback: the $2.4m fixed capital outlay creates financing/interest pressure, reduces flexibility for customised fashion designs, and risks redundancy costs or lower morale.',
          markPoints: [
            { id: 'mp1', markDescription: 'Higher productivity / consistent 24/7 quality / lower long-run unit cost', requiredKeywordGroups: [['productivity', 'precision', '24/7', 'unit cost', 'average']] },
            { id: 'mp2', markDescription: 'High $2.4m initial fixed capital cost or borrowing risk', requiredKeywordGroups: [['2.4', 'fixed', 'capital', 'borrow', 'interest', 'expensive']] },
            { id: 'mp3', markDescription: 'Less flexibility for bespoke designs or redundancy/worker resistance', requiredKeywordGroups: [['flexib', 'custom', 'bespoke', 'redundan', 'morale']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-6',
    subtopicId: 'econ-3-6',
    number: 17,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A craft soda start-up has fixed costs of $3,000 per month and variable costs of $1.50 per bottle. In Month 1 it produces and sells 2,000 bottles at $4.00 each.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate the firm’s Average Total Cost (ATC) and Total Profit in Month 1, and state ONE reason it might prioritise survival over profit maximisation in its first year.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Total Cost = $3,000 + (2,000 x $1.50) = $6,000, so ATC = $6,000 / 2,000 = $3.00 per bottle. Total Revenue = 2,000 x $4.00 = $8,000, giving Total Profit = $8,000 - $6,000 = $2,000. As a new start-up lacking brand recognition, it may focus on survival and building market share to establish loyal customers against established rivals.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates ATC = $3.00', numericMatch: { value: 3, tolerance: 0.05 } },
            { id: 'mp2', markDescription: 'Calculates Total Profit = $2,000', numericMatch: { value: 2000, tolerance: 1 } },
            { id: 'mp3', markDescription: 'Explains survival/brand recognition/market share in start-up stage', requiredKeywordGroups: [['survival', 'brand', 'market share', 'loyal', 'start-up', 'startup', 'rival']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-3-7',
    subtopicId: 'econ-3-7',
    number: 18,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] PharmaNova holds a 20-year legal patent as the sole supplier of a breakthrough diabetes drug, earning a 45% profit margin.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Discuss whether PharmaNova’s monopoly position is on balance harmful or beneficial for patients and society.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Harmful: shielded by the patent barrier to entry, PharmaNova acts as a price maker and can restrict output and charge very high prices, making essential medicine unaffordable for poorer patients. Beneficial: temporary monopoly profits provide the incentive and funds for costly R&D into life-saving medical innovations that might never be developed in a fiercely competitive market.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies patent as barrier to entry / price-maker power', requiredKeywordGroups: [['patent', 'barrier', 'price maker']] },
            { id: 'mp2', markDescription: 'Drawback: high prices / restricted access for patients', requiredKeywordGroups: [['high price', 'unaffordable', 'restrict']] },
            { id: 'mp3', markDescription: 'Benefit: funds and incentivises R&D medical innovation', requiredKeywordGroups: [['r&d', 'research', 'innovat', 'incentive']] },
          ],
        },
      },
    ],
  },
];
