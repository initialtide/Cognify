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

export const BUSINESS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Understanding Business Activity',
    subtopics: [
      { id: 'bus-1-1', code: '1.1', slug: '1.1-enterprise-business-growth', title: 'Enterprise, Added Value & Business Growth', readingMinutes: 7, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Marketing & Market Research',
    subtopics: [
      { id: 'bus-2-1', code: '2.1', slug: '2.1-marketing-mix-4ps', title: 'The Marketing Mix (4 Ps)', readingMinutes: 8, hasDeepContent: true },
    ],
  },
];

export const BUSINESS_NOTES: Record<string, NoteLesson> = {
  'bus-1-1': {
    subtopicId: 'bus-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Enterprise, Added Value & Business Growth',
    readingMinutes: 7,
    videoTitle: 'Business Studies — Added Value & Enterprise',
    youtubeId: 'qHkUOlC8Nbo',
    videoChannel: 'Cognito',
    videoDuration: '6:49',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Needs vs wants & factors of production', cardId: 'bus-1-1-c1' },
      { time: '2:10', seconds: 130, label: 'Calculating & increasing added value', cardId: 'bus-1-1-c1' },
      { time: '4:25', seconds: 265, label: 'Entrepreneurship & business growth', cardId: 'bus-1-1-c2' },
    ],
    cards: [
      {
        id: 'bus-1-1-c1',
        title: 'Added Value & Entrepreneurs',
        summary: 'How businesses add value above bought-in costs and how entrepreneurs organise production.',
        bullets: [
          '**Added value** = Selling price − Cost of bought-in materials and components.',
          'Businesses add value by **branding**, **convenience**, **quality design**, and **unique selling points (USPs)**.',
          '**Entrepreneurs** take calculated financial risks to organise land, labour, and capital into goods or services.',
        ],
      },
      {
        id: 'bus-1-1-c2',
        title: 'Organic vs External Business Growth',
        summary: 'Comparing internal expansion with mergers, Horizontal/Vertical integration, and economies of scale.',
        bullets: [
          '**Internal (organic) growth**: Expanding by opening new branches, launching new products, or entering new markets.',
          '**External (inorganic) growth**: Mergers and takeovers — horizontal (same stage/industry), vertical forward (towards customers), or vertical backward (towards suppliers).',
          'Growth unlocks **purchasing and technical economies of scale**, lowering average unit cost, though over-expansion can cause **diseconomies of scale** (poor communication and coordination).',
        ],
      },
    ],
    keyTerms: [
      { term: 'Added value', definition: 'Difference between the selling price of a product and the cost of bought-in raw materials.' },
      { term: 'Opportunity cost', definition: 'The next best alternative forgone when making a business or economic decision.' },
    ],
    checklistPoints: [
      'Added value is NOT the same as profit — wages and overheads must still be paid.',
      'Distinguish horizontal, forward vertical, and backward vertical integration.',
    ],
  },
  'bus-2-1': {
    subtopicId: 'bus-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'The Marketing Mix (4 Ps)',
    readingMinutes: 8,
    videoTitle: 'Business Studies — The Marketing Mix (4 Ps)',
    youtubeId: 'PB97svr7Ye8',
    videoChannel: 'Cognito',
    videoDuration: '4:39',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Product lifecycle & differentiation', cardId: 'bus-2-1-c1' },
      { time: '1:40', seconds: 100, label: 'Pricing strategies (skimming, penetration, cost-plus)', cardId: 'bus-2-1-c1' },
      { time: '3:15', seconds: 195, label: 'Place (distribution channels) & Promotion', cardId: 'bus-2-1-c2' },
    ],
    cards: [
      {
        id: 'bus-2-1-c1',
        title: 'Product & Price Strategies',
        summary: 'Product lifecycle extension strategies and choosing skimming, penetration, or cost-plus pricing.',
        bullets: [
          '**Product lifecycle**: Development → Introduction → Growth → Maturity → Saturation → Decline; extended via rebranding, new flavours/features, or new export markets.',
          '**Price skimming**: High initial price for innovative/patented products with inelastic demand; **Penetration pricing**: Low launch price to capture market share rapidly in competitive markets.',
          '**Cost-plus pricing**: Adding a fixed percentage mark-up to unit cost; guarantees profit per unit sold if sales targets are met.',
        ],
      },
      {
        id: 'bus-2-1-c2',
        title: 'Place (Distribution Channels) & Promotion',
        summary: 'Direct vs intermediary retail channels and above-the-line vs below-the-line promotion.',
        bullets: [
          '**Place (Distribution)**: Direct-to-consumer (e-commerce/Producer → Consumer keeps full margin) vs Producer → Wholesaler → Retailer → Consumer (wider geographic reach, lower margin).',
          '**Promotion**: Above-the-line mass media advertising (TV, social media ads) vs below-the-line sales promotions (BOGOF, loyalty schemes, sponsorship, public relations).',
        ],
      },
    ],
    keyTerms: [
      { term: 'Price skimming', definition: 'Setting a high initial price for a unique new product to maximise revenue from early adopters.' },
      { term: 'Penetration pricing', definition: 'Setting a low initial price to attract customers away from established competitors.' },
    ],
    checklistPoints: [
      'Ensure all 4 Ps (Product, Price, Place, Promotion) reinforce a consistent brand image.',
      'Match pricing strategy to market competition and price elasticity of demand.',
    ],
  },
};

export const BUSINESS_QUIZZES: QuizQuestion[] = [
  {
    id: 'bus-q1',
    subtopicId: 'bus-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A bakery buys ingredients for £1.20 and sells a loaf of bread for £3.00. What is the added value?',
    options: ['£4.20', '£1.80', '£1.20', '£3.00'],
    correctIndex: 1,
    explanation: 'Added value = Selling price (£3.00) − Cost of bought-in materials (£1.20) = £1.80.',
  },
  {
    id: 'bus-q2',
    subtopicId: 'bus-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which is NOT one of the four factors of production?',
    options: ['Land', 'Labour', 'Profit', 'Enterprise'],
    correctIndex: 2,
    explanation: 'The four factors of production are Land, Labour, Capital, and Enterprise.',
  },
];

export const BUSINESS_FLASHCARDS: FlashcardItem[] = [
  { id: 'bus-fc-1', subtopicId: 'bus-1-1', front: 'How is Added Value calculated?', backBullets: ['Selling price − Cost of bought-in raw materials/components'] },
  { id: 'bus-fc-2', subtopicId: 'bus-1-1', front: 'Name the 4 factors of production.', backBullets: ['Land', 'Labour', 'Capital', 'Enterprise'] },
];

export const PSYCHOLOGY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Memory & Research Methods',
    subtopics: [
      { id: 'psy-1-1', code: '1.1', slug: '1.1-multi-store-model-memory', title: 'Multi-Store Model of Memory (Atkinson & Shiffrin)', readingMinutes: 9, hasDeepContent: true },
      { id: 'psy-1-2', code: '1.2', slug: '1.2-experimental-designs', title: 'Laboratory vs Field Experiments & Variables', readingMinutes: 8, hasDeepContent: true },
    ],
  },
];

export const PSYCHOLOGY_NOTES: Record<string, NoteLesson> = {
  'psy-1-1': {
    subtopicId: 'psy-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Multi-Store Model of Memory',
    readingMinutes: 9,
    videoTitle: 'The Multi-Store Model of Memory [AQA A-Level]',
    youtubeId: 'yw3CFPHFJTk',
    videoChannel: 'Psych Boost',
    videoDuration: '15:28',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Atkinson & Shiffrin (1968) Multi-Store Model', cardId: 'psy-1-1-c1' },
      { time: '3:50', seconds: 230, label: 'Capacity, duration & coding across stores', cardId: 'psy-1-1-c1' },
      { time: '8:30', seconds: 510, label: 'Supporting evidence & evaluation', cardId: 'psy-1-1-c2' },
    ],
    cards: [
      {
        id: 'psy-1-1-c1',
        title: 'Capacity, Duration & Coding',
        summary: 'Sensory register, STM, and LTM coding, capacity, and duration benchmarks.',
        diagram: 'multi-store-memory',
        bullets: [
          '**Sensory register**: High capacity, duration < 0.5 s, modality-specific coding.',
          '**Short-Term Memory (STM)**: Capacity 7 ± 2 items (Miller), duration ~18–30 seconds without rehearsal, acoustic coding.',
          '**Long-Term Memory (LTM)**: Potentially unlimited capacity and duration, mainly semantic coding.',
        ],
      },
      {
        id: 'psy-1-1-c2',
        title: 'Control Processes & Evaluation',
        summary: 'Attention, maintenance rehearsal, and neurological case evidence (HM and KF).',
        bullets: [
          '**Attention** transfers information from the sensory register into STM; **maintenance rehearsal** retains items in STM and transfers them to LTM.',
          '**Support**: Patient HM could not transfer new memories into LTM after hippocampal damage while STM remained intact.',
          '**Critique**: Patient KF had impaired verbal STM but intact visual STM, showing STM is not a single unitary store.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Semantic coding', definition: 'Encoding information according to its meaning, primarily used in Long-Term Memory.' },
    ],
    checklistPoints: [
      'Attention transfers data from sensory memory to STM; maintenance rehearsal keeps it in STM and transfers to LTM.',
    ],
  },
  'psy-1-2': {
    subtopicId: 'psy-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Laboratory vs Field Experiments & Variables',
    readingMinutes: 8,
    videoTitle: 'Types of Experiment - Research Methods [A-Level Psychology]',
    youtubeId: 'Fo7zq8WeVpc',
    videoChannel: 'Psych Boost',
    videoDuration: '8:21',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Laboratory experiments & internal validity', cardId: 'psy-1-2-c1' },
      { time: '2:00', seconds: 120, label: 'Field experiments & ecological validity', cardId: 'psy-1-2-c1' },
      { time: '4:31', seconds: 271, label: 'Natural experiments & experimental designs', cardId: 'psy-1-2-c2' },
    ],
    cards: [
      {
        id: 'psy-1-2-c1',
        title: 'Laboratory vs Field Experiments',
        summary: 'Comparing controlled laboratory settings with naturalistic real-world field experiments.',
        bullets: [
          '**Laboratory experiments** manipulate the IV in a controlled environment — high internal validity and replicability, lower ecological validity.',
          '**Field experiments** manipulate the IV in a natural everyday environment — higher ecological validity and fewer demand characteristics, harder to control extraneous variables.',
        ],
      },
      {
        id: 'psy-1-2-c2',
        title: 'Independent vs Repeated Measures Designs',
        summary: 'Using random allocation or counterbalancing to control participant and order effects.',
        bullets: [
          '**Independent measures** assigns different participants to each condition (controlled via random allocation).',
          '**Repeated measures** tests the same participants in every condition (controlled via AB/BA counterbalancing).',
        ],
      },
    ],
    keyTerms: [
      { term: 'Independent variable (IV)', definition: 'The factor directly manipulated by the experimenter to test its effect on the dependent variable.' },
    ],
    checklistPoints: [
      'Operationalise both the IV and DV clearly when writing experimental hypotheses.',
    ],
  },
};

export const PSYCHOLOGY_QUIZZES: QuizQuestion[] = [
  {
    id: 'psy-q1',
    subtopicId: 'psy-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'According to Miller (1956), what is the capacity of Short-Term Memory?',
    options: ['Unlimited', '7 ± 2 items', '2 items', '100 items'],
    correctIndex: 1,
    explanation: 'Miller found STM holds roughly 5 to 9 chunks (7 ± 2 items).',
  },
];

export const PSYCHOLOGY_FLASHCARDS: FlashcardItem[] = [
  { id: 'psy-fc-1', subtopicId: 'psy-1-1', front: 'What is the primary coding format of STM vs LTM?', backBullets: ['STM: Acoustic (sound)', 'LTM: Semantic (meaning)'] },
];

export const PAST_PAPERS_ONLY_TOPICS_BY_SLUG: Record<string, TopicDefinition[]> = {
  'computer-science': [
    {
      number: 1,
      title: 'Data Representation & Computer Systems',
      subtopics: [
        { id: 'cs-1-1', code: '1.1', slug: '1.1-binary-hex-data-representation', title: 'Binary, Hexadecimal, Two’s Complement & Media Representation', readingMinutes: 9, hasDeepContent: true },
        { id: 'cs-1-2', code: '1.2', slug: '1.2-cpu-von-neumann-architecture', title: 'CPU Architecture, Von Neumann & Fetch–Decode–Execute Cycle', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Boolean Logic, Memory & Storage',
      subtopics: [
        { id: 'cs-2-1', code: '2.1', slug: '2.1-boolean-logic-gates-truth-tables', title: 'Logic Gates (AND, OR, NOT, XOR, NAND) & Truth Tables', readingMinutes: 8, hasDeepContent: true },
        { id: 'cs-2-2', code: '2.2', slug: '2.2-primary-secondary-cloud-storage', title: 'RAM, ROM, Virtual Memory & Magnetic/Optical/Solid-State Storage', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Networks, Protocols & Cyber Security',
      subtopics: [
        { id: 'cs-3-1', code: '3.1', slug: '3.1-networks-topologies-tcp-ip', title: 'LAN/WAN, Star & Mesh Topologies, Packet Switching & TCP/IP Layers', readingMinutes: 10, hasDeepContent: true },
        { id: 'cs-3-2', code: '3.2', slug: '3.2-cyber-security-threats-encryption', title: 'Malware, SQL Injection, Phishing, Firewalls & Encryption', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Algorithms, Searching & Sorting',
      subtopics: [
        { id: 'cs-4-1', code: '4.1', slug: '4.1-computational-thinking-trace-tables', title: 'Decomposition, Abstraction, Pseudocode & Trace Tables', readingMinutes: 9, hasDeepContent: true },
        { id: 'cs-4-2', code: '4.2', slug: '4.2-linear-binary-bubble-merge-sort', title: 'Linear vs Binary Search & Bubble, Insertion and Merge Sort', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 5,
      title: 'Programming Constructs, Databases & SQL',
      subtopics: [
        { id: 'cs-5-1', code: '5.1', slug: '5.1-arrays-subroutines-file-handling', title: 'Selection, Iteration, 1D/2D Arrays, Subroutines & File Handling', readingMinutes: 10, hasDeepContent: true },
        { id: 'cs-5-2', code: '5.2', slug: '5.2-relational-databases-sql-queries', title: 'Relational Databases, Primary Keys & SQL SELECT/UPDATE Queries', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  economics: [
    {
      number: 1,
      title: 'The Basic Economic Problem & Resource Allocation',
      subtopics: [
        { id: 'econ-1-1', code: '1.1', slug: '1.1-scarcity-opportunity-cost-ppc', title: 'Scarcity, Factors of Production, Opportunity Cost & PPC Curves', readingMinutes: 9, hasDeepContent: true },
        { id: 'econ-1-2', code: '1.2', slug: '1.2-demand-supply-market-equilibrium', title: 'Demand, Supply, Price Equilibrium & Consumer/Producer Surplus', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Elasticities & Market Failure',
      subtopics: [
        { id: 'econ-2-1', code: '2.1', slug: '2.1-ped-pes-revenue-tax-incidence', title: 'Price Elasticity of Demand (PED) & Price Elasticity of Supply (PES)', readingMinutes: 9, hasDeepContent: true },
        { id: 'econ-2-2', code: '2.2', slug: '2.2-externalities-public-goods-taxes', title: 'Market Failure: Social Costs/Benefits, Public Goods & Indirect Taxes', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Microeconomic Decision Makers (Firms, Workers & Banks)',
      subtopics: [
        { id: 'econ-3-1', code: '3.1', slug: '3.1-money-central-commercial-banks', title: 'Functions of Money, Commercial Banks & Central Bank Monetary Policy', readingMinutes: 8, hasDeepContent: true },
        { id: 'econ-3-2', code: '3.2', slug: '3.2-costs-revenue-economies-competition', title: 'Fixed/Variable Costs, Economies of Scale, Monopoly & Competitive Markets', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Government & The Macroeconomy',
      subtopics: [
        { id: 'econ-4-1', code: '4.1', slug: '4.1-gdp-growth-inflation-unemployment', title: 'Economic Growth (Real GDP), CPI Inflation & Types of Unemployment', readingMinutes: 10, hasDeepContent: true },
        { id: 'econ-4-2', code: '4.2', slug: '4.2-fiscal-monetary-supply-side-policies', title: 'Fiscal Policy, Monetary Policy & Supply-Side Reforms', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 5,
      title: 'Economic Development & International Trade',
      subtopics: [
        { id: 'econ-5-1', code: '5.1', slug: '5.1-poverty-hdi-population-development', title: 'Living Standards (HDI), Absolute vs Relative Poverty & Population Structure', readingMinutes: 9, hasDeepContent: true },
        { id: 'econ-5-2', code: '5.2', slug: '5.2-free-trade-tariffs-exchange-rates-bop', title: 'Comparative Advantage, Protectionism (Tariffs/Quotas), Exchange Rates & Current Account', readingMinutes: 10, hasDeepContent: true },
      ],
    },
  ],
  'english-language': [
    {
      number: 1,
      title: 'Reading Comprehension, Summary & Synthesis',
      subtopics: [
        { id: 'eng-1-1', code: '1.1', slug: '1.1-explicit-implicit-inference-synthesis', title: 'Explicit & Implicit Meaning, Textual Synthesis & Selective Summary', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Language Analysis & Writer’s Effects',
      subtopics: [
        { id: 'eng-2-1', code: '2.1', slug: '2.1-imagery-lexical-choices-sentence-forms', title: 'Analysing Metaphor, Sensory Imagery, Lexical Fields & Structural Shifts', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Directed Writing & Transactional Rhetoric',
      subtopics: [
        { id: 'eng-3-1', code: '3.1', slug: '3.1-speeches-letters-articles-persuasion', title: 'Adapting Register, Voice & Rhetorical Devices (Speeches, Letters, Articles)', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Descriptive & Narrative Composition',
      subtopics: [
        { id: 'eng-4-1', code: '4.1', slug: '4.1-narrative-arc-pacing-sensory-description', title: 'Crafting Narrative Arcs, Cyclical Structure, Characterization & Punctuation for Effect', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  'english-literature': [
    {
      number: 1,
      title: 'Shakespeare & Jacobean Drama',
      subtopics: [
        { id: 'englit-1-1', code: '1.1', slug: '1.1-macbeth-romeo-juliet-tragedy', title: 'Tragic Form, Soliloquy, Dramatic Irony & Jacobean Context (Macbeth / Romeo & Juliet)', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: '19th-Century & Modern Prose Texts',
      subtopics: [
        { id: 'englit-2-1', code: '2.1', slug: '2.1-nineteenth-century-modern-novel', title: 'Narrative Perspective, Social Criticism & Character Arcs (Jekyll & Hyde / A Christmas Carol / An Inspector Calls)', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Poetry Anthology & Comparative Analysis',
      subtopics: [
        { id: 'englit-3-1', code: '3.1', slug: '3.1-poetry-anthology-power-conflict', title: 'Comparing Poetic Form, Metre, Enjambment, Caesura & Thematic Motifs', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Unseen Poetry & Critical Appreciation',
      subtopics: [
        { id: 'englit-4-1', code: '4.1', slug: '4.1-unseen-poetry-close-reading', title: 'Deconstructing Unseen Poems: Tone, Volta, Imagery & Comparative Methods', readingMinutes: 8, hasDeepContent: true },
      ],
    },
  ],
  geography: [
    {
      number: 1,
      title: 'Population, Migration & Urban Settlement',
      subtopics: [
        { id: 'geog-1-1', code: '1.1', slug: '1.1-demographic-transition-migration-urbanisation', title: 'Demographic Transition Model, Population Pyramids, Push–Pull Migration & Rapid Urbanisation', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Tectonic Hazards, Weather & Climate Change',
      subtopics: [
        { id: 'geog-2-1', code: '2.1', slug: '2.1-plate-margins-tropical-storms-climate', title: 'Destructive/Constructive Plate Margins, Earthquakes, Volcanoes & Tropical Cyclones', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'River & Coastal Landscapes',
      subtopics: [
        { id: 'geog-3-1', code: '3.1', slug: '3.1-erosion-landforms-flood-coastal-management', title: 'Geomorphic Processes, Meanders, Spit/Headland Landforms & Hard vs Soft Engineering', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Economic Development, Food, Water & Energy Resources',
      subtopics: [
        { id: 'geog-4-1', code: '4.1', slug: '4.1-development-gap-tncs-resource-security', title: 'Closing the Development Gap, TNCs, Sustainable Water Supply & Renewable Energy Mix', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 5,
      title: 'Geographical Skills, Cartography & Fieldwork Enquiry',
      subtopics: [
        { id: 'geog-5-1', code: '5.1', slug: '5.1-os-maps-gis-fieldwork-sampling', title: '6-Figure Grid References, Cross-Sections, Stratified Field Sampling & Statistical Presentation', readingMinutes: 8, hasDeepContent: true },
      ],
    },
  ],
  history: [
    {
      number: 1,
      title: 'Peace Treaties & The League of Nations (1919–1939)',
      subtopics: [
        { id: 'hist-1-1', code: '1.1', slug: '1.1-treaty-versailles-league-appeasement', title: 'Treaty of Versailles (Big Three Aims & German Impact), Manchuria/Abyssinia & Causes of WWII', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Depth Study: Weimar & Nazi Germany (1918–1945)',
      subtopics: [
        { id: 'hist-2-1', code: '2.1', slug: '2.1-weimar-hyperinflation-hitler-consolidation', title: '1923 Hyperinflation, Stresemann Recovery, Great Depression, Reichstag Fire & Enabling Act', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'The Cold War: Superpower Relations (1945–1991)',
      subtopics: [
        { id: 'hist-3-1', code: '3.1', slug: '3.1-yalta-potsdam-berlin-cuba-vietnam', title: 'Yalta/Potsdam, Truman Doctrine, Berlin Blockade & Wall, Cuban Missile Crisis & Détente', readingMinutes: 10, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Source Utility, Provenance & Historical Interpretations',
      subtopics: [
        { id: 'hist-4-1', code: '4.1', slug: '4.1-source-provenance-purpose-interpretations', title: 'Evaluating Nature, Origin & Purpose (NOP), Cross-Referencing Sources & Historiography', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  'religious-studies': [
    {
      number: 1,
      title: 'Christian & Islamic Beliefs and Teachings',
      subtopics: [
        { id: 'rs-1-1', code: '1.1', slug: '1.1-nature-of-god-tawhid-trinity-afterlife', title: 'The Trinity & Incarnation, Tawhid, Prophethood (Risalah), Problem of Evil & Eschatology', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Religion, Peace & Conflict',
      subtopics: [
        { id: 'rs-2-1', code: '2.1', slug: '2.1-just-war-pacifism-forgiveness', title: 'Just War Theory (Aquinas), Holy War, Pacifism, Weapons of Mass Destruction & Peacemaking', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Religion & Life (Medical Ethics & Environment)',
      subtopics: [
        { id: 'rs-3-1', code: '3.1', slug: '3.1-sanctity-of-life-abortion-euthanasia-stewardship', title: 'Sanctity vs Quality of Life, Abortion, Euthanasia, Animal Experimentation & Stewardship/Khalifah', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Crime, Punishment, Human Rights & Social Justice',
      subtopics: [
        { id: 'rs-4-1', code: '4.1', slug: '4.1-aims-of-punishment-capital-punishment-justice', title: 'Retribution, Deterrence & Reformation, Capital Punishment, Religious Freedom & Zakah/Charity', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  french: [
    {
      number: 1,
      title: 'Identity, Family, Culture & Daily Life',
      subtopics: [
        { id: 'fr-1-1', code: '1.1', slug: '1.1-famille-relations-technologie-fetes', title: 'Relationships, Social Media, Francophone Festivals & Reflexive/Present Tense Verbs', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Local Area, Travel, Holidays & Environment',
      subtopics: [
        { id: 'fr-2-1', code: '2.1', slug: '2.1-vacances-ville-environnement', title: 'Describing Regions, Sustainable Living, Passé Composé vs Imparfait & Conditional Mood', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'School, Future Study & World of Work',
      subtopics: [
        { id: 'fr-3-1', code: '3.1', slug: '3.1-ecole-projets-avenir-emplois', title: 'Education Systems, Career Ambitions, Simple Future, Subjunctive Triggers & Translation Skills', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  german: [
    {
      number: 1,
      title: 'Identity, Youth Culture, Family & Festivals',
      subtopics: [
        { id: 'de-1-1', code: '1.1', slug: '1.1-familie-freizeit-feste-medien', title: 'Family Relationships, Digital Media, DACH Traditions & Nominative/Accusative/Dative Cases', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Home, Travel, Tourism & Global Sustainability',
      subtopics: [
        { id: 'de-2-1', code: '2.1', slug: '2.1-reisen-umwelt-perfekt-praeteritum', title: 'Travel Experiences, Environmental Protection, Perfect/Imperfect Tenses & Subordinating Word Order (TMP)', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Education, Vocational Training & Careers',
      subtopics: [
        { id: 'de-3-1', code: '3.1', slug: '3.1-schule-beruf-zukunft-konjunktiv', title: 'School Life, Future Plans, Modal Verbs, Future Tense (werden) & Konjunktiv II', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  spanish: [
    {
      number: 1,
      title: 'Identity, Relationships, Technology & Hispanic Customs',
      subtopics: [
        { id: 'es-1-1', code: '1.1', slug: '1.1-familia-redes-sociales-fiestas', title: 'Family & Friends, Mobile Technology, Hispanic Festivals & Ser vs Estar / Present Tenses', readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Holidays, Town, Social Issues & Environment',
      subtopics: [
        { id: 'es-2-1', code: '2.1', slug: '2.1-vacaciones-ciudad-medio-ambiente', title: 'Tourism, Global Issues, Preterite vs Imperfect Tenses & Para + Infinitive Structures', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Education, Post-16 Choices & Employment',
      subtopics: [
        { id: 'es-3-1', code: '3.1', slug: '3.1-instituto-trabajo-futuro-subjuntivo', title: 'School Rules, University vs Work, Future & Conditional Tenses & Present Subjunctive', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
  psychology: [
    {
      number: 1,
      title: 'Memory, Perception & Cognitive Development',
      subtopics: [
        { id: 'psy-gcse-1-1', code: '1.1', slug: '1.1-multi-store-reconstructive-memory', title: 'Multi-Store Model, Bartlett’s War of the Ghosts & Piaget’s Stages of Development', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: 'Social Influence, Language & Non-Verbal Communication',
      subtopics: [
        { id: 'psy-gcse-2-1', code: '2.1', slug: '2.1-conformity-obedience-prosocial-behaviour', title: 'Asch Conformity, Milgram Obedience, Piliavin Bystander Behaviour & Crowd Deindividuation', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: 'Brain & Neuropsychology + Psychological Problems',
      subtopics: [
        { id: 'psy-gcse-3-1', code: '3.1', slug: '3.1-nervous-system-depression-addiction', title: 'Synaptic Transmission, Localisation, Clinical Depression, Addiction & CBT vs Drug Therapies', readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 4,
      title: 'Research Methods & Data Interpretation',
      subtopics: [
        { id: 'psy-gcse-4-1', code: '4.1', slug: '4.1-experiments-observations-ethics-stats', title: 'Experimental Designs, Interviews, Correlations, BPS Ethics & Descriptive Statistics', readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ],
};

interface SubjectPaperBlueprint {
  codePrefix: string;
  specCode: string;
  paper1Title: string;
  paper2Title: string;
  insert1: string;
  insert2: string;
  p1Questions: { number: string; question: string; marks: number; markScheme: string[] }[];
  p2Questions: { number: string; question: string; marks: number; markScheme: string[] }[];
}

const SUBJECT_PAPER_BLUEPRINTS: Record<string, SubjectPaperBlueprint> = {
  'computer-science': {
    codePrefix: 'cs',
    specCode: '0478',
    paper1Title: 'Paper 1: Computer Systems (0478/12)',
    paper2Title: 'Paper 2: Algorithms, Programming & Logic (0478/22)',
    insert1: 'Clean copy — Calculators are NOT permitted on Computer Science Paper 1.',
    insert2: 'Includes Pseudocode Reference Guide & Pre-Release Scenario Insert.',
    p1Questions: [
      {
        number: '1(a)',
        question: 'Convert the denary integer −85 into 8-bit two’s complement binary, and convert the unsigned binary number 11010110 into hexadecimal.',
        marks: 4,
        markScheme: [
          '+85 in 8-bit binary = 01010101 (1 mark); invert bits (10101010) and add 1 → 10101011 (1 mark).',
          '1101 = 13 = D; 0110 = 6 → D6 in hexadecimal (2 marks).',
        ],
      },
      {
        number: '2(b)',
        question: 'Describe the roles of the Program Counter (PC), Memory Address Register (MAR), Memory Data Register (MDR), and Current Instruction Register (CIR) during the Fetch stage of the FDE cycle.',
        marks: 4,
        markScheme: [
          'PC holds the memory address of the next instruction and copies it to the MAR (1 mark).',
          'Address is sent along the address bus; instruction at that address is copied across the data bus into the MDR (1 mark).',
          'Contents of the MDR are copied into the CIR for decoding by the Control Unit (1 mark).',
          'PC is incremented by 1 to point to the next sequential instruction (1 mark).',
        ],
      },
      {
        number: '3(c)',
        question: 'A 10-second stereo audio clip is sampled at 44,100 Hz with a 16-bit sample resolution. Write an expression for the uncompressed file size in MiB and explain the trade-off of lossy MP3 compression.',
        marks: 4,
        markScheme: [
          'File size = (44,100 × 16 × 2 × 10) ÷ (8 × 1024 × 1024) MiB ≈ 1.68 MiB (2 marks).',
          'Lossy compression permanently removes imperceptible frequencies (psychoacoustic masking), drastically reducing bandwidth/storage at the cost of irreversible quality loss (2 marks).',
        ],
      },
      {
        number: '4(d)',
        question: 'Explain how a packet is routed across the internet using packet switching and how SSL/TLS handshakes secure HTTPS traffic.',
        marks: 4,
        markScheme: [
          'Data split into numbered packets with source/destination IP and payload; routers inspect header and forward each packet dynamically down least-congested routes before reordering at destination (2 marks).',
          'SSL/TLS verifies server digital certificate via public-key cryptography and negotiates a symmetric session key to encrypt all transmitted data (2 marks).',
        ],
      },
    ],
    p2Questions: [
      {
        number: '1(a)',
        question: 'Construct the full truth table for the Boolean expression X = (A NAND B) XOR (NOT C).',
        marks: 4,
        markScheme: [
          'Correct intermediate column for A NAND B = (1, 1, 1, 1, 1, 1, 0, 0) (1 mark).',
          'Correct intermediate column for NOT C = (1, 0, 1, 0, 1, 0, 1, 0) (1 mark).',
          'All 8 output rows of X = (0, 1, 0, 1, 0, 1, 1, 0) accurate (2 marks).',
        ],
      },
      {
        number: '2(b)',
        question: 'Compare Linear Search and Binary Search on a list of N = 1,024 items, stating the precondition required for Binary Search and the maximum comparisons for each.',
        marks: 4,
        markScheme: [
          'Binary Search strictly requires the list/array to be sorted in ascending or descending order (1 mark).',
          'Linear Search checks items sequentially: worst-case 1,024 comparisons, O(N) (1 mark).',
          'Binary Search halves the search interval at each midpoint check: worst-case log₂(1024) + 1 = 11 comparisons, O(log N) (2 marks).',
        ],
      },
      {
        number: '3(c)',
        question: 'Write an SQL query to retrieve `StudentName` and `Score` from the `ExamResults` table for all students in `Form = "11A"` with `Score >= 75`, ordered by `Score` descending.',
        marks: 4,
        markScheme: [
          'SELECT StudentName, Score FROM ExamResults (2 marks).',
          'WHERE Form = \'11A\' AND Score >= 75 (1 mark).',
          'ORDER BY Score DESC; (1 mark).',
        ],
      },
      {
        number: '4(d)',
        question: 'Write a pseudocode function `TotalEven(Arr, Length)` that iterates through a 1D integer array `Arr[0..Length-1]` and returns the sum of all even values.',
        marks: 4,
        markScheme: [
          'Initialise `Total ← 0` outside the loop (1 mark).',
          '`FOR i ← 0 TO Length - 1` loop structure (1 mark).',
          '`IF Arr[i] MOD 2 = 0 THEN Total ← Total + Arr[i] ENDIF` (1 mark).',
          '`RETURN Total` after loop termination (1 mark).',
        ],
      },
    ],
  },
  economics: {
    codePrefix: 'econ',
    specCode: '0455',
    paper1Title: 'Paper 1: Microeconomics & Market Allocation (0455/12)',
    paper2Title: 'Paper 2: Macroeconomics, Trade & Development (0455/22)',
    insert1: 'Includes Case Study Source Data Insert on Global Commodity & Energy Markets.',
    insert2: 'Includes Macroeconomic Indicators & Balance of Payments Data Extract.',
    p1Questions: [
      {
        number: '1(a)',
        question: 'Using a Production Possibility Curve (PPC) diagram, distinguish between a movement along the curve and an outward shift of the entire curve.',
        marks: 4,
        markScheme: [
          'Movement along the PPC shows reallocation of scarce resources between two goods and illustrates opportunity cost (2 marks).',
          'Outward shift of the PPC represents long-run economic growth (increase in quantity or quality of factors of production, e.g., new technology or education) (2 marks).',
        ],
      },
      {
        number: '2(b)',
        question: 'When the price of train tickets rises from $20 to $25, daily demand falls from 10,000 to 9,000 journeys. Calculate the Price Elasticity of Demand (PED) and explain the effect on total revenue.',
        marks: 4,
        markScheme: [
          '%ΔQD = −10%; %ΔP = +25% → PED = −10% ÷ 25% = −0.4 (1 mark for formula, 1 mark for −0.4).',
          'Since |PED| < 1, demand is price inelastic; raising price increases total revenue from $200,000 to $225,000 (2 marks).',
        ],
      },
      {
        number: '3(c)',
        question: 'Explain why fossil-fuel electricity generation causes market failure and evaluate how an indirect carbon tax restores allocative efficiency.',
        marks: 6,
        markScheme: [
          'Negative externalities of production: Marginal Social Cost (MSC) exceeds Marginal Private Cost (MPC) by the external pollution cost, causing overproduction (Q_market > Q_opt) and welfare loss (3 marks).',
          'An indirect tax equal to Marginal External Cost internalises the externality (shifts supply left to MSC), though effectiveness depends on inelastic PED and accurate valuation of external pollution costs (3 marks).',
        ],
      },
      {
        number: '4(d)',
        question: 'Discuss whether horizontal merger between two major supermarkets always benefits consumers.',
        marks: 6,
        markScheme: [
          'Benefits: Purchasing, technical, and financial economies of scale lower average costs, potentially enabling lower grocery prices and R&D investment (3 marks).',
          'Drawbacks: Reduced competition increases monopoly market power, risking higher prices, lower consumer choice, and x-inefficiency unless regulated (3 marks).',
        ],
      },
    ],
    p2Questions: [
      {
        number: '1(a)',
        question: 'Distinguish between demand-pull inflation and cost-push inflation, giving one real-world cause of each.',
        marks: 4,
        markScheme: [
          'Demand-pull: Aggregate Demand (C + I + G + X − M) grows faster than Aggregate Supply near full capacity (e.g., consumer credit boom or tax cuts) (2 marks).',
          'Cost-push: Rising production costs shift Short-Run Aggregate Supply left (e.g., oil price shock or wage rises exceeding productivity) (2 marks).',
        ],
      },
      {
        number: '2(b)',
        question: 'Explain how a Central Bank uses interest rates (contractionary monetary policy) to reduce inflation above its 2% target.',
        marks: 4,
        markScheme: [
          'Raising base interest rates increases the cost of borrowing and reward for saving, reducing household consumption (C) and firm investment (I) (2 marks).',
          'Higher interest rates attract hot-money inflows, appreciating the exchange rate (lowering import prices and net exports X − M), shifting AD left to curb inflation (2 marks).',
        ],
      },
      {
        number: '3(c)',
        question: 'Analyse why Human Development Index (HDI) is a more comprehensive measure of living standards than Real GDP per capita alone.',
        marks: 6,
        markScheme: [
          'Real GDP per capita measures average income/output adjusted for inflation but ignores income inequality (Gini), unpaid work, and environmental depletion (3 marks).',
          'HDI combines GNI per capita (PPP) with life expectancy at birth (health) and mean/expected years of schooling (education), capturing multidimensional human welfare (3 marks).',
        ],
      },
      {
        number: '4(d)',
        question: 'Evaluate the effectiveness of supply-side policies versus fiscal stimulus in reducing long-term structural unemployment.',
        marks: 6,
        markScheme: [
          'Supply-side policies (retraining schemes, apprenticeships, infrastructure) directly tackle occupational and geographical immobility without inflationary pressure, though they have long time lags (3 marks).',
          'Expansionary fiscal policy reduces cyclical (demand-deficient) unemployment quickly via the multiplier, but cannot cure structural skills mismatches and widens budget deficits (3 marks).',
        ],
      },
    ],
  },
  'english-language': {
    codePrefix: 'eng',
    specCode: '0500',
    paper1Title: 'Paper 1: Reading Passages, Summary & Writer’s Effects (0500/12)',
    paper2Title: 'Paper 2: Directed Writing & Composition (0500/22)',
    insert1: 'Includes Reading Booklet Insert (Text A, Text B & Text C: Patagonia Expedition).',
    insert2: 'Includes Source Stimulus Booklet for Question 1 Directed Writing.',
    p1Questions: [
      {
        number: '1(f)',
        question: 'According to Text B, summarise the challenges faced by deep-sea researchers and the technological adaptations developed to overcome them. Use your own words (up to 120 words).',
        marks: 15,
        markScheme: [
          'Reading (10 marks): Identifies up to 10 distinct points covering crushing hydrostatic pressure, freezing darkness, communication blackouts, titanium hulls, fibre-optic tethers, and autonomous sonar mapping.',
          'Writing (5 marks): Concise, coherent synthesis paraphrased in candidate’s own vocabulary without lifting verbatim phrases.',
        ],
      },
      {
        number: '2(d)',
        question: 'Re-read paragraphs 3 and 5 of Text C. Explain how the writer uses language to convey both the majesty and the menace of the advancing glacier.',
        marks: 15,
        markScheme: [
          'Selects 3 precise imagery choices from each paragraph (e.g., "cathedral spires of fractured cobalt", "groaning jaws of the crevasse").',
          'Unpacks literal meaning, layered connotations, sensory effects (sibilance, plosive verbs), and overarching shift in atmosphere.',
        ],
      },
      {
        number: '3',
        question: 'Extended Response to Reading: Imagine you are the expedition leader in Text C. Write the speech you deliver to the town council justifying further funding for polar conservation.',
        marks: 25,
        markScheme: [
          'Reading (15 marks): Integrates and develops all three bullet prompts (scientific discoveries, near-disaster lessons, future climate urgency) rooted convincingly in Text C details.',
          'Writing (10 marks): Persuasive rhetorical register (tricolon, direct address, measured authority) with accurate punctuation and paragraphing.',
        ],
      },
      {
        number: '4',
        question: 'Compare how the writers of Text A and Text C structure their openings to hook the reader’s curiosity.',
        marks: 10,
        markScheme: [
          'Analyses Text A’s in medias res chronological drop vs Text C’s panoramic-to-microscopic spatial zoom (5 marks).',
          'Evaluates sentence-length contrast (hypotactic build-up followed by a single-clause declarative turn) across both texts (5 marks).',
        ],
      },
    ],
    p2Questions: [
      {
        number: '1',
        question: 'Directed Writing: Evaluate the arguments in Texts A and B regarding a four-day school week. Write a formal magazine article for parents and teachers presenting your reasoned view.',
        marks: 40,
        markScheme: [
          'Reading & Evaluation (15 marks): Critically weighs claims in both texts (student burnout vs childcare burdens and curriculum compression), challenging implicit assumptions.',
          'Writing (25 marks): Engaging headline, subheadings, balanced argumentative arc, sophisticated vocabulary, and faultless technical control.',
        ],
      },
      {
        number: '2(a)',
        question: 'Descriptive Composition: Describe a bustling night market just before and during a sudden tropical downpour.',
        marks: 40,
        markScheme: [
          'Content & Structure (16 marks): Multisensory contrast (neon steam, sizzling spices, tarpaulin drumbeats, emptying alleys) organized via deliberate temporal/spatial shifts.',
          'Style & Accuracy (24 marks): Original figurative imagery, varied syntactic rhythm, and precise clause punctuation.',
        ],
      },
      {
        number: '3(a)',
        question: 'Narrative Composition: Write a story that includes the words, "Nothing in the envelope matched what they had promised."',
        marks: 40,
        markScheme: [
          'Content & Structure (16 marks): Controlled narrative tension, credible characterization, and purposeful integration of the prompt line.',
          'Style & Accuracy (24 marks): Nuanced dialogue punctuation, evocative verbs, and sustained tonal control.',
        ],
      },
      {
        number: '4',
        question: 'Proofreading & Syntactic Craft: Rewrite the provided paragraph to eliminate comma splices and replace generic verbs with precise active phrasing.',
        marks: 10,
        markScheme: [
          'Replaces comma splices with semicolons, subordinating conjunctions, or participial clauses (5 marks).',
          'Upgrades weak verb+adverb pairs into precise dynamic verbs while maintaining register consistency (5 marks).',
        ],
      },
    ],
  },
};

export function getPastPapersOnlyTopics(subjectSlug: string, subjectName = 'Course'): TopicDefinition[] {
  const existing = PAST_PAPERS_ONLY_TOPICS_BY_SLUG[subjectSlug];
  if (existing && existing.length > 0) return existing;

  const prefix = subjectSlug.slice(0, 4).toLowerCase();
  return [
    {
      number: 1,
      title: `Foundations & Core Principles of ${subjectName}`,
      subtopics: [
        { id: `${prefix}-1-1`, code: '1.1', slug: '1.1-core-concepts-terminology', title: `Core Concepts, Terminology & Frameworks in ${subjectName}`, readingMinutes: 8, hasDeepContent: true },
      ],
    },
    {
      number: 2,
      title: `Applied Analysis & Case Studies in ${subjectName}`,
      subtopics: [
        { id: `${prefix}-2-1`, code: '2.1', slug: '2.1-applied-context-analysis', title: `Contextual Application, Data Interpretation & Case Studies`, readingMinutes: 9, hasDeepContent: true },
      ],
    },
    {
      number: 3,
      title: `Extended Evaluation & Synoptic Synthesis`,
      subtopics: [
        { id: `${prefix}-3-1`, code: '3.1', slug: '3.1-extended-evaluation-essays', title: `Extended Essay Structure, Critical Evaluation & Exam Technique`, readingMinutes: 9, hasDeepContent: true },
      ],
    },
  ];
}

function resolveSubjectSlugFromPrefix(codePrefix: string, subjectName: string, subjectSlug?: string): string {
  if (subjectSlug && PAST_PAPERS_ONLY_TOPICS_BY_SLUG[subjectSlug]) return subjectSlug;
  const p = codePrefix.toLowerCase();
  const n = subjectName.toLowerCase();
  if (p === 'cs' || n.includes('computer')) return 'computer-science';
  if (p === 'econ' || n.includes('econom')) return 'economics';
  if (p === 'eng' || n.includes('english language')) return 'english-language';
  if (n.includes('literature')) return 'english-literature';
  if (n.includes('geograph')) return 'geography';
  if (n.includes('histor')) return 'history';
  if (n.includes('religious')) return 'religious-studies';
  if (n.includes('french')) return 'french';
  if (n.includes('german')) return 'german';
  if (n.includes('spanish')) return 'spanish';
  if (p.startsWith('psy') || n.includes('psych')) return 'psychology';
  return subjectSlug ?? p;
}

export function makePastPaperSet(
  codePrefix: string,
  subjectName: string,
  subjectSlug?: string
): PastPaperDoc[] {
  const slug = resolveSubjectSlugFromPrefix(codePrefix, subjectName, subjectSlug);
  const bp = SUBJECT_PAPER_BLUEPRINTS[slug];
  const topics = getPastPapersOnlyTopics(slug, subjectName);

  const p1Questions = bp?.p1Questions ?? [
    {
      number: '1(a)',
      question: `Define and explain the foundational principles of ${topics[0]?.title ?? subjectName} with reference to an applied example.`,
      marks: 4,
      markScheme: [
        `Precise definition of core terminology from ${topics[0]?.title ?? subjectName} (2 marks).`,
        'Accurate development linked to a concrete real-world example (2 marks).',
      ],
    },
    {
      number: '2(b)',
      question: `Analyse two key factors covered in ${topics[1]?.title ?? subjectName} and explain how they interact in practice.`,
      marks: 6,
      markScheme: [
        'Identifies two distinct syllabus mechanisms with accurate specialist terminology (2 marks).',
        'Explains cause-and-effect chains and contextual implications (4 marks).',
      ],
    },
    {
      number: '3(c)',
      question: `Compare the competing perspectives or methods studied in ${topics[2]?.title ?? subjectName}.`,
      marks: 6,
      markScheme: [
        'Outlines key strengths and assumptions of the first method/perspective (3 marks).',
        'Contrasts directly with limitations and alternative interpretations (3 marks).',
      ],
    },
    {
      number: '4(d)',
      question: `Evaluate the statement: "Long-term outcomes in ${subjectName} depend more on structural factors than short-term interventions."`,
      marks: 8,
      markScheme: [
        'Balanced multi-paragraph analysis weighing short-term versus structural arguments (4 marks).',
        'Integrates specific case evidence/examples from across the specification (2 marks).',
        'Substantiated evaluative judgement addressing "to what extent" (2 marks).',
      ],
    },
  ];

  const p2Questions = bp?.p2Questions ?? [
    {
      number: '1(a)',
      question: `Using source data, interpret the primary trend shown for ${topics[0]?.subtopics[0]?.title ?? subjectName} and calculate the percentage change.`,
      marks: 4,
      markScheme: [
        'Accurately extracts baseline and final figures with correct units (2 marks).',
        'Calculates percentage change and states overall trend + anomaly (2 marks).',
      ],
    },
    {
      number: '2(b)',
      question: `Explain two methodological or practical challenges encountered when investigating ${topics[1]?.subtopics[0]?.title ?? subjectName}.`,
      marks: 6,
      markScheme: [
        'Challenge 1 identified and explained with syllabus terminology (3 marks).',
        'Challenge 2 identified and linked to validity, reliability, or real-world constraints (3 marks).',
      ],
    },
    {
      number: '3(c)',
      question: `Assess the impact of modern developments on ${topics[2]?.subtopics[0]?.title ?? subjectName}.`,
      marks: 6,
      markScheme: [
        'Analyses positive impacts using supporting evidence (3 marks).',
        'Weighs unintended consequences, costs, or cultural/ethical counterarguments (3 marks).',
      ],
    },
    {
      number: '4(d)',
      question: `Synoptic Extended Essay: Discuss how concepts from ${topics[0]?.title ?? 'Unit 1'} and ${topics[topics.length - 1]?.title ?? 'Unit 3'} connect to explain real-world outcomes in ${subjectName}.`,
      marks: 8,
      markScheme: [
        'Synthesises concepts across multiple specification units seamlessly (3 marks).',
        'Applies critical analysis to concrete case studies or texts (3 marks).',
        'Reaches a reasoned, well-supported conclusion (2 marks).',
      ],
    },
  ];

  const p1Title = bp?.paper1Title ?? `${subjectName} Paper 1: Core Theory & Analysis`;
  const p2Title = bp?.paper2Title ?? `${subjectName} Paper 2: Applied Case Studies & Extended Response`;
  const insert1 = bp?.insert1 ?? `Includes Official ${subjectName} Paper 1 Source Extract & Reference Insert.`;
  const insert2 = bp?.insert2 ?? `Includes Official ${subjectName} Paper 2 Data & Stimulus Booklet.`;
  const spec = bp?.specCode ?? codePrefix.toUpperCase();

  const years: { year: string; era: 'new-9-1' | 'old'; series: string }[] = [
    { year: '2024', era: 'new-9-1', series: 'June 2024' },
    { year: '2023', era: 'new-9-1', series: 'June 2023' },
    { year: '2022', era: 'new-9-1', series: 'June 2022' },
    { year: '2019', era: 'old', series: 'June 2019 (Legacy Spec)' },
  ];

  const docs: PastPaperDoc[] = [];
  for (const y of years) {
    docs.push({
      id: `${codePrefix}-${y.year}-p1`,
      specEra: y.era,
      year: y.year,
      title: p1Title,
      tier: 'Core / Higher',
      series: y.series,
      paperCode: `${spec}/12-${y.year.slice(-2)}`,
      durationMinutes: 105,
      totalMarks: 80,
      insertNote: insert1,
      sampleQuestions: p1Questions,
    });
    docs.push({
      id: `${codePrefix}-${y.year}-p2`,
      specEra: y.era,
      year: y.year,
      title: p2Title,
      tier: 'Core / Higher',
      series: y.series,
      paperCode: `${spec}/22-${y.year.slice(-2)}`,
      durationMinutes: 105,
      totalMarks: 80,
      insertNote: insert2,
      sampleQuestions: p2Questions,
    });
  }

  return docs;
}

export const SHARED_CHEAT_EMPTY: CheatSheetItem[] = [];
export const SHARED_EXAM_EMPTY: ExamQuestionItem[] = [];
export const SHARED_KT_EMPTY: KeyTermEntry[] = [];
