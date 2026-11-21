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

export const IGCSE_BUSINESS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Understanding Business Activity',
    subtopics: [
      {
        id: 'igcse-bus-1-1',
        code: '1.1',
        slug: '1.1-enterprise-added-value-sectors',
        title: 'Enterprise, Added Value & Classification of Businesses',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-1-2',
        code: '1.2',
        slug: '1.2-business-growth-organisations-stakeholders',
        title: 'Business Growth, Types of Organisation, Objectives & Stakeholders',
        readingMinutes: 10,
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
        title: 'Motivating Employees (Taylor, Maslow, Herzberg) & Rewards',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-2-2',
        code: '2.2',
        slug: '2.2-organisation-leadership-recruitment-communication',
        title: 'Organisation Structure, Leadership, Recruitment, Training & Communication',
        readingMinutes: 11,
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
        slug: '3.1-marketing-segmentation-market-research',
        title: 'Market Segmentation, Niche vs Mass Markets & Market Research',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-3-2',
        code: '3.2',
        slug: '3.2-marketing-mix-4ps-ecommerce',
        title: 'The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'Operations Management',
    subtopics: [
      {
        id: 'igcse-bus-4-1',
        code: '4.1',
        slug: '4.1-production-methods-lean-production',
        title: 'Production Methods (Job, Batch, Flow), Productivity & Lean Production',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-4-2',
        code: '4.2',
        slug: '4.2-costs-economies-scale-breakeven-quality',
        title: 'Costs, Economies of Scale, Break-Even Analysis & Quality',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 5,
    title: 'Financial Information & Decisions',
    subtopics: [
      {
        id: 'igcse-bus-5-1',
        code: '5.1',
        slug: '5.1-sources-of-finance-cash-flow',
        title: 'Sources of Business Finance & Cash-Flow Forecasting',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-5-2',
        code: '5.2',
        slug: '5.2-income-statements-balance-sheets-ratios',
        title: 'Income Statements, Balance Sheets & Financial Ratios',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'External Influences on Business Activity',
    subtopics: [
      {
        id: 'igcse-bus-6-1',
        code: '6.1',
        slug: '6.1-economic-issues-cycle-inflation-exchange-rates',
        title: 'Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-6-2',
        code: '6.2',
        slug: '6.2-environment-ethics-globalisation-mncs',
        title: 'Environmental & Ethical Issues, Globalisation & Multinational Companies',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_BUSINESS_NOTES: Record<string, NoteLesson> = {
  'igcse-bus-1-1': {
    subtopicId: 'igcse-bus-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Enterprise, Added Value & Classification of Businesses',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business 1.1: Business Activity | 0450/0264',
    youtubeId: '1reqnzlE6I4',
    videoChannel: 'Business Studies Mastery',
    videoDuration: '10:25',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Welcome & Business Activity', cardId: 'igcse-bus-1-1-c1' },
      { time: '2:59', seconds: 179, label: 'Enterprise', cardId: 'igcse-bus-1-1-c2' },
      { time: '5:45', seconds: 345, label: 'Value Added in Stages', cardId: 'igcse-bus-1-1-c2' },
      { time: '10:00', seconds: 600, label: 'Recap', cardId: 'igcse-bus-1-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-1-c1',
        title: 'The Economic Problem, Factors of Production & Specialisation',
        summary: 'Scarcity, opportunity cost, the 4 factors of production, and specialisation.',
        bullets: [
          'The economic problem arises because human WANTS are unlimited while RESOURCES (factors of production) are scarce, forcing individuals, businesses, and governments to make choices.',
          'Opportunity cost is the next best alternative forgone when choosing one option over another (e.g., buying a delivery van instead of new factory machinery).',
          '**The 4 Factors of Production:** Land (natural resources), Labour (human workforce), Capital (machinery, equipment, finance), and Enterprise (risk-taking entrepreneurs combining the other three factors).',
          'Specialisation and division of labour split production into small repetitive tasks so workers become faster and more skilled, boosting efficiency — though tasks can become boring, increasing absenteeism and staff turnover.',
        ],
        glossaryPills: [
          {
            term: 'opportunity cost',
            definition: 'The value of the next best alternative given up when making an economic or business choice.',
          },
          {
            term: 'division of labour',
            definition: 'Breaking a production process into separate specialised tasks performed repeatedly by different workers.',
          },
        ],
        memoryAid: 'Remember the 4 Factors of Production with CELL: Capital, Enterprise, Land, Labour!',
      },
      {
        id: 'igcse-bus-1-1-c2',
        title: 'Added Value & Entrepreneurs',
        summary: 'How businesses calculate and increase added value plus entrepreneur traits.',
        bullets: [
          'Added value = Selling price − Cost of bought-in materials and components.',
          'How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality.',
          'Successful entrepreneurs are innovative, risk-taking, resilient, creative, self-confident, and effective communicators. A business plan (objectives, market research, financial forecasts) reduces risk and helps secure bank loans or investor funding.',
        ],
        glossaryPills: [
          {
            term: 'added value',
            definition: 'The difference between a product’s selling price and the cost of bought-in raw materials and components.',
          },
        ],
        commonMistake: 'Added value is NOT the same as profit! Wages, rent, electricity, and marketing costs still have to be paid out of added value before calculating net profit.',
      },
      {
        id: 'igcse-bus-1-1-c3',
        title: 'Economic Sectors & Mixed Economies',
        summary: 'Primary, secondary, and tertiary sectors alongside private vs public ownership.',
        bullets: [
          '**Primary sector:** extracts natural resources (farming, fishing, mining, oil extraction). Secondary sector: manufactures raw materials into finished/semi-finished goods (car assembly, construction, baking). Tertiary sector: provides services to consumers and firms (banking, retail, tourism, education).',
          'De-industrialisation occurs in developed economies as the tertiary sector grows while secondary manufacturing declines due to automation and lower-cost overseas competition.',
          '**Mixed economy:** Private sector firms are owned by individuals aiming for profit; Public sector organisations (state hospitals, public schools, policing) are owned by government to provide essential services free or affordable to all.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Opportunity cost', definition: 'The next best alternative forgone when making a decision.' },
      { term: 'Added value', definition: 'Selling price minus the cost of bought-in materials and components.' },
      { term: 'Entrepreneur', definition: 'An individual who takes the financial risk to organise resources and start a new business venture.' },
      { term: 'De-industrialisation', definition: 'Decline in the relative importance of the secondary manufacturing sector in an economy.' },
    ],
    checklistPoints: [
      'Explain scarcity, opportunity cost, specialisation, and the 4 factors of production.',
      'Calculate added value and explain how firms add value without confusing it with profit.',
      'Classify businesses across primary, secondary, tertiary, private, and public sectors.',
    ],
  },
  'igcse-bus-1-2': {
    subtopicId: 'igcse-bus-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Business Growth, Types of Organisation, Objectives & Stakeholders',
    readingMinutes: 10,
    videoTitle: 'Types of Business Organisation - IGCSE Business CAIE',
    youtubeId: 'keHY3qvFZzw',
    videoChannel: 'Cambridge Business Essentials A-level & IGCSE',
    videoDuration: '4:24',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Business Organisation Overview', cardId: 'igcse-bus-1-2-c1' },
      { time: '0:55', seconds: 55, label: 'Sole Traders & Partnerships', cardId: 'igcse-bus-1-2-c2' },
      { time: '2:20', seconds: 140, label: 'Private & Public Limited Companies (Ltd vs Plc)', cardId: 'igcse-bus-1-2-c2' },
      { time: '3:35', seconds: 215, label: 'Franchises, Joint Ventures & Summary', cardId: 'igcse-bus-1-2-c2' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-2-c1',
        title: 'Measuring Business Size & Methods of Growth',
        summary: 'Measuring firm size and comparing internal, horizontal, and vertical growth.',
        bullets: [
          'Business size is measured by number of employees, value of output, value of sales revenue, or capital employed (note: PROFIT is NOT a measure of business size!).',
          'Internal (organic) growth expands using own resources (opening new stores, launching new products). External growth occurs through mergers or takeovers:',
          '**Horizontal integration:** merging with a competitor at the SAME stage of production (reduces competition, increases market share & economies of scale).',
          '**Vertical integration:** Forward vertical (manufacturer buys retailer — guaranteed outlets) or Backward vertical (manufacturer buys supplier — secures quality & lower input cost). Conglomerate integration joins unrelated industries to spread risk.',
        ],
        commonMistake: 'NEVER list "profit" as a valid way to measure the size of a business — a giant airline can make a loss while a small boutique consultancy makes high profit!',
      },
      {
        id: 'igcse-bus-1-2-c2',
        title: 'Types of Business Organisation & Liability',
        summary: 'Unlimited vs limited liability across sole traders, partnerships, Ltd, Plc, and franchises.',
        bullets: [
          'Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity.',
          'Incorporated companies (Private Limited Company, Ltd; Public Limited Company, Plc): Separate legal identity → LIMITED LIABILITY (shareholders can only lose the money they invested in shares) and continuity.',
          '**Ltd vs Plc:** Ltd shares are sold privately to family/friends (retains control, no hostile takeover risk). Plc shares trade publicly on a stock exchange (raises massive capital, but must publish full accounts, faces takeover risk, and suffers divorce between ownership and control).',
          'Franchises (e.g., McDonald’s): Franchisee pays a licence fee and royalties to use an established brand, reducing failure risk — but loses creative freedom over pricing and suppliers. Joint ventures share costs and local knowledge when entering foreign markets.',
        ],
        glossaryPills: [
          {
            term: 'limited liability',
            definition: 'Legal protection ensuring shareholders’ financial risk is strictly capped at the amount they invested in company shares.',
          },
          {
            term: 'unlimited liability',
            definition: 'Legal status where sole traders or partners are personally responsible for all business debts, risking personal possessions.',
          },
        ],
        memoryAid: 'Incorporated (Ltd & Plc) = Separate legal body = Limited Liability + Continuity!',
      },
      {
        id: 'igcse-bus-1-2-c3',
        title: 'Business Objectives & Stakeholder Conflicts',
        summary: 'Core business objectives and resolving conflicts between stakeholder groups.',
        bullets: [
          '**Private sector objectives:** Survival (new start-ups/recessions), Profit maximisation, Growth, Market share, and Social/Environmental goals (social enterprises reinvest profits into community causes).',
          'Internal stakeholders: Owners/shareholders (high dividends & share price), Employees (higher wages & job security), Managers (bonuses & power).',
          'External stakeholders: Customers (low prices & high quality), Suppliers (prompt payment & regular orders), Banks (loan repayment), Government (taxes & jobs), Local community (jobs without pollution).',
          '**Classic exam conflict:** Automating a factory boosts shareholder profits and lowers prices for customers, but causes redundancies for employees and distress for the local community.',
        ],
        glossaryPills: [
          {
            term: 'stakeholders',
            definition: 'Any internal or external individual or group with a direct interest in the performance and decisions of a business.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Horizontal integration', definition: 'Merger or takeover between two firms operating in the exact same industry and stage of production.' },
      { term: 'Limited liability', definition: 'Shareholders’ liability for business debts is restricted to the value of their share investment.' },
      { term: 'Franchise', definition: 'Business model licensing an established brand name, logo, and operating system to franchisees for fees and royalties.' },
    ],
    checklistPoints: [
      'Compare internal growth with horizontal, vertical, and conglomerate integration.',
      'Contrast sole traders, partnerships, Ltd, Plc, franchises, and joint ventures on liability, control, and capital.',
      'Analyse real conflicts between stakeholder objectives in case-study decisions.',
    ],
  },
  'igcse-bus-2-1': {
    subtopicId: 'igcse-bus-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Motivating Employees (Taylor, Maslow, Herzberg) & Rewards',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business Studies - Motivational Theories Explained Simply',
    youtubeId: 'j-pPai7dbAk',
    videoChannel: 'BizEdMadeSimple',
    videoDuration: '9:08',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Employee Motivation Matters', cardId: 'igcse-bus-2-1-c1' },
      { time: '1:50', seconds: 110, label: 'Taylor: Scientific Management & Piece Rate', cardId: 'igcse-bus-2-1-c1' },
      { time: '4:25', seconds: 265, label: 'Maslow: Hierarchy of Needs', cardId: 'igcse-bus-2-1-c1' },
      { time: '6:45', seconds: 405, label: 'Herzberg: Hygiene Factors vs Motivators', cardId: 'igcse-bus-2-1-c1' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-1-c1',
        title: 'Why Motivation Matters & Motivational Theorists',
        summary: 'Why motivated staff boost productivity plus Taylor, Maslow, and Herzberg.',
        bullets: [
          'Well-motivated employees deliver higher labour productivity, better product quality, lower absenteeism, and lower staff turnover (saving recruitment and training costs).',
          'F.W. **Taylor** (Scientific Management / "Economic Man"): Argued workers are motivated primarily by MONEY. Advocated breaking work into simple tasks and paying PIECE-RATE wages linked strictly to output.',
          'Abraham **Maslow** (Hierarchy of Needs — 5 ascending levels): (1) Physiological (wages for food/shelter), (2) Safety/Security (contracts, safe workplace), (3) Social (teamwork, belonging), (4) Esteem (recognition, status, promotion), (5) Self-actualisation (reaching full creative potential). Lower needs must be satisfied before higher needs motivate.',
          '**Frederick Herzberg (Two-Factor Theory):** Distinguished HYGIENE FACTORS (pay, working conditions, company policy, supervision — prevent dissatisfaction if adequate, but do NOT actively motivate!) from MOTIVATORS (achievement, recognition, interesting work, responsibility, promotion — actively drive motivation!).',
        ],
        glossaryPills: [
          {
            term: 'hygiene factors',
            definition: 'Extrinsic workplace conditions in Herzberg’s theory (such as pay and safe conditions) that must be met to avoid dissatisfaction but do not create lasting motivation alone.',
          },
          {
            term: 'labour productivity',
            definition: 'Output produced per employee over a given period (Total Output ÷ Number of Employees).',
          },
        ],
        memoryAid: 'Maslow bottom-to-top: Please Stay Safe, Everyone Succeeds (Physiological, Safety, Social, Esteem, Self-actualisation)!',
      },
      {
        id: 'igcse-bus-2-1-c2',
        title: 'Financial Rewards',
        summary: 'Evaluating time rate, piece rate, salary, commission, and profit sharing.',
        bullets: [
          '**Hourly wage (time rate):** easy to calculate, encourages care, but rewards slow work equally unless supervised.',
          '**Piece rate:** paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses).',
          '**Salary:** fixed annual pay divided monthly for managers/office staff — gives security, no overtime pay.',
          '**Commission (% of sales value):** motivates sales staff strongly, but can lead to aggressive high-pressure selling.',
          '**Profit sharing & bonuses:** link employee reward to company or team success, reducing "them vs us" conflict, though bonuses lose impact if paid automatically.',
        ],
      },
      {
        id: 'igcse-bus-2-1-c3',
        title: 'Non-Financial Methods of Motivation',
        summary: 'Comparing job rotation, job enlargement, job enrichment, and fringe benefits.',
        bullets: [
          '**Job rotation:** moving employees periodically between different tasks at the same skill level — cuts boredom and builds multi-skilled cover, though does not make tasks more challenging.',
          '**Job enlargement:** adding extra tasks of a similar skill level to broaden variety.',
          'Job enrichment (**Herzberg**’s favourite!): adding MORE CHALLENGING, higher-responsibility tasks (e.g., planning, quality inspection, decision-making) so workers feel trusted and achieve self-esteem.',
          'Teamworking, delegation, training, recognition awards, and fringe benefits (company car, healthcare, staff discounts) also boost retention.',
        ],
        commonMistake: 'Do NOT confuse job enlargement (more tasks at the SAME skill level — horizontal) with job enrichment (more complex, responsible tasks — vertical)!',
      },
    ],
    keyTerms: [
      { term: 'Piece rate', definition: 'Payment method rewarding workers a fixed amount for every unit of output completed.' },
      { term: 'Job enrichment', definition: 'Redesigning a role to include more challenging tasks and greater responsibility/autonomy.' },
      { term: 'Fringe benefits', definition: 'Non-cash perks given to employees on top of wages or salary (e.g., private health insurance, company car).' },
    ],
    checklistPoints: [
      'Compare Taylor, Maslow’s 5-level hierarchy, and Herzberg’s Hygiene vs Motivator factors.',
      'Evaluate financial pay systems (time rate, piece rate, salary, commission, profit sharing) for specific job roles.',
      'Distinguish clearly between job rotation, job enlargement, and job enrichment.',
    ],
  },
  'igcse-bus-2-2': {
    subtopicId: 'igcse-bus-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Organisation Structure, Leadership, Recruitment, Training & Communication',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business Studies Ch 2.2 | Organisation and Management',
    youtubeId: 'dNegVEuaPZ0',
    videoChannel: 'Bahruz - IGCSE Business',
    videoDuration: '19:42',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro', cardId: 'igcse-bus-2-2-c1' },
      { time: '6:10', seconds: 370, label: 'Short Chain of Command', cardId: 'igcse-bus-2-2-c1' },
      { time: '11:02', seconds: 662, label: 'Delegation & Leadership', cardId: 'igcse-bus-2-2-c1' },
      { time: '17:54', seconds: 1074, label: 'Trade Unions Pros & Cons', cardId: 'igcse-bus-2-2-c2' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-2-c1',
        title: 'Organisational Charts, Span of Control & Leadership Styles',
        summary: 'Tall vs flat hierarchies, span of control, delegation, and leadership styles.',
        bullets: [
          '**Chain of command:** structure showing who reports to whom from CEO down to shop-floor workers. Span of control: number of subordinates reporting directly to one manager.',
          'Tall hierarchy (long chain, narrow span): tight supervision and clear promotion paths, but slow communication and high management salary costs. Flat/delayered structure (short chain, wide span): faster communication, lower overheads, more delegation — but managers can become overstretched.',
          'Delegation: passing **authority** to perform a task down to a subordinate (while the manager retains **final accountability**). Frees managers for strategic work and motivates staff.',
          '**Leadership styles:** Autocratic (leader decides alone — fast in emergencies or with unskilled staff, but demotivates skilled staff); Democratic (consults employees — higher motivation & better ideas, but slower decisions); Laissez-faire (sets broad aims and leaves experts to decide — great for creative/R&D teams, chaotic if staff lack discipline).',
        ],
        glossaryPills: [
          {
            term: 'span of control',
            definition: 'The number of subordinate employees directly managed and supervised by a single manager.',
          },
          {
            term: 'delegation',
            definition: 'Giving a subordinate the authority to carry out specific tasks while the manager remains ultimately accountable.',
          },
        ],
      },
      {
        id: 'igcse-bus-2-2-c2',
        title: 'Recruitment, Selection & Training',
        summary: 'The recruitment sequence, internal vs external hiring, training, and unions.',
        bullets: [
          '**Recruitment sequence:** Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer.',
          'Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally).',
          'Induction training welcomes new recruits (health & safety, tour, policies). On-the-job training (shadowing experienced workers: cheap, relevant, output still made — but can pass on bad habits). Off-the-job training (external courses/colleges: expert tutors, qualifications — but expensive and lost work hours).',
          'Trade unions represent workers collectively to negotiate pay/conditions (collective bargaining) and protect against unfair dismissal; redundancy occurs when the JOB itself is no longer needed (not employee fault).',
        ],
        commonMistake: 'Keep Job Description (about the ROLE — tasks and responsibilities) strictly separate from Person Specification (about the CANDIDATE — skills, qualifications, traits)!',
      },
      {
        id: 'igcse-bus-2-2-c3',
        title: 'Effective Communication & Barriers',
        summary: 'Two-way internal/external communication channels and overcoming barriers.',
        bullets: [
          'Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding.',
          'Internal communication occurs within the firm (e.g., team meetings, intranet); External communication occurs with outsiders (customers, suppliers, tax authorities).',
          '**Common barriers to communication:** technical jargon, long chain of command causing distortion, overloaded channels, noisy environments, cultural/language differences, or lack of trust.',
          '**Solutions:** shorten the chain of command (delayering), use plain language, choose two-way channels requiring feedback, and ensure reliable IT infrastructure.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Chain of command', definition: 'The line of authority through which instructions are passed down an organisation.' },
      { term: 'Redundancy', definition: 'Ending an employee’s contract because their job role is no longer required by the business (not due to misconduct).' },
      { term: 'Job description', definition: 'Document outlining the main duties, responsibilities, and reporting lines of a specific vacancy.' },
    ],
    checklistPoints: [
      'Analyse tall vs flat hierarchies, span of control, and the advantages of delegation.',
      'Select suitable leadership styles (autocratic, democratic, laissez-faire) for different business scenarios.',
      'Outline the full recruitment process, compare on- vs off-the-job training, and diagnose communication barriers.',
    ],
  },
  'igcse-bus-3-1': {
    subtopicId: 'igcse-bus-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Market Segmentation, Niche vs Mass Markets & Market Research',
    readingMinutes: 9,
    videoTitle: 'Primary & Secondary Market Research',
    youtubeId: 'S_-bLwHwcoU',
    videoChannel: 'Bizconsesh',
    videoDuration: '7:29',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Purpose of Market Research', cardId: 'igcse-bus-3-1-c1' },
      { time: '1:40', seconds: 100, label: 'Primary (Field) Research Methods', cardId: 'igcse-bus-3-1-c3' },
      { time: '3:55', seconds: 235, label: 'Secondary (Desk) Research Sources', cardId: 'igcse-bus-3-1-c3' },
      { time: '5:50', seconds: 350, label: 'Sampling, Accuracy & Limitations', cardId: 'igcse-bus-3-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-1-c1',
        title: 'Marketing, Mass Markets & Niche Markets',
        summary: 'Role of marketing and weighing mass-market scale against niche focus.',
        bullets: [
          'Marketing identifies, anticipates, and satisfies customer wants profitably — building customer loyalty and adapting to changing tastes, technology, and competition.',
          'Mass marketing targets the whole market with a standardised product (e.g., Coca-Cola, toothpaste): huge sales volume and economies of scale, but fierce competition and high advertising costs.',
          'Niche marketing targets a small, specialised segment with specific needs (e.g., vegan luxury hiking boots): less direct competition and ability to charge premium prices — but smaller total sales volume and high vulnerability if niche tastes change.',
        ],
        glossaryPills: [
          {
            term: 'niche marketing',
            definition: 'Tailoring a specialised product specifically to meet the distinct needs of a small, clearly defined segment of a larger market.',
          },
        ],
      },
      {
        id: 'igcse-bus-3-1-c2',
        title: 'Market Segmentation',
        summary: 'Segmenting markets by income, age, gender, region, lifestyle, and usage.',
        bullets: [
          'Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product.',
          '**Benefits:** Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue.',
        ],
      },
      {
        id: 'igcse-bus-3-1-c3',
        title: 'Primary vs Secondary Market Research & Sampling',
        summary: 'Comparing primary vs secondary research, data types, and sampling accuracy.',
        bullets: [
          'Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming.',
          'Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals.',
          'Quantitative data = numerical statistics ("how many?"). Qualitative data = opinions, attitudes, and reasons ("why?").',
          '**Sampling:** Random sampling gives every member of the population an equal chance (unbiased, but may miss target age groups). Quota sampling selects set numbers from specific target segments (representative of target market, faster, but slight interviewer bias). Accuracy depends on sample size and avoiding leading questions!',
        ],
        glossaryPills: [
          {
            term: 'primary research',
            definition: 'Collection and collation of original first-hand market data directly from potential or existing customers.',
          },
        ],
        commonMistake: 'When evaluating research accuracy in exams, ALWAYS cite 3 concrete factors: sample size (too small?), sampling method (biased?), and question wording (leading questions or outdated secondary source?).',
      },
    ],
    keyTerms: [
      { term: 'Market segmentation', definition: 'Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics.' },
      { term: 'Primary research', definition: 'First-hand field research gathered specifically for a business’s current decision.' },
      { term: 'Secondary research', definition: 'Desk research drawing on already-published internal or external sources.' },
    ],
    checklistPoints: [
      'Evaluate niche vs mass marketing strategies for start-ups and large brands.',
      'Recommend appropriate segmentation criteria for a given product.',
      'Compare primary vs secondary research, quantitative vs qualitative data, and random vs quota sampling.',
    ],
  },
  'igcse-bus-3-2': {
    subtopicId: 'igcse-bus-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce',
    readingMinutes: 11,
    videoTitle: 'Marketing Mix',
    youtubeId: 'JC8lGW1T1bY',
    videoChannel: 'Bizconsesh',
    videoDuration: '9:59',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'What Is the Marketing Mix (4Ps)?', cardId: 'igcse-bus-3-2-c1' },
      { time: '2:00', seconds: 120, label: 'Product & Product Life Cycle', cardId: 'igcse-bus-3-2-c1' },
      { time: '4:40', seconds: 280, label: 'Pricing Strategies', cardId: 'igcse-bus-3-2-c2' },
      { time: '7:10', seconds: 430, label: 'Place (Distribution) & Promotion', cardId: 'igcse-bus-3-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-2-c1',
        title: 'Product: Branding, Packaging & The Product Life Cycle',
        summary: 'Branding, packaging, USPs, Product Life Cycle stages, and extension strategies.',
        bullets: [
          'Product covers design, quality, USP (Unique Selling Point), brand image (builds loyalty and allows higher prices), and packaging (protects, informs, attracts eye on shelves).',
          '**Product Life Cycle (PLC) stages:** Development (high R&D cost, zero sales) → Introduction (slow sales, heavy promotion) → Growth (rapid sales growth, profits emerge) → Maturity (peak sales, fierce competition) → Decline (falling sales due to new rivals/obsolescence).',
          'Extension strategies prevent decline during late maturity: adding new flavours/features, targeting new international markets, redesigning packaging, or finding new uses for the product.',
        ],
        glossaryPills: [
          {
            term: 'extension strategies',
            definition: 'Tactics used during the maturity stage of a product life cycle (such as rebranding, new features, or new markets) to revive sales and delay decline.',
          },
        ],
      },
      {
        id: 'igcse-bus-3-2-c2',
        title: 'Pricing Strategies & Price Elasticity of Demand (PED)',
        summary: 'Core pricing strategies and predicting revenue shifts via price elasticity.',
        bullets: [
          '**Cost-plus pricing:** Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand).',
          '**Competitive pricing:** matching rival prices (safe in crowded markets, requires strong non-price differentiation).',
          '**Penetration pricing:** setting a LOW launch price to break into a market quickly and grab market share (sacrifices early profit margin).',
          'Price skimming: launching an innovative/tech product at a HIGH price to cream early adopters and recover R&D costs before lowering price later.',
          'Dynamic pricing (airlines/hotels adjust prices in real time with demand) & Promotional pricing (short-term discounts to clear stock).',
          '**Price Elasticity of Demand (PED):** Price ELASTIC demand (many close substitutes, luxury goods) → raising price causes a HUGE drop in quantity demanded, so REVENUE FALLS! Price INELASTIC demand (necessities, strong brand loyalty, few substitutes) → raising price barely reduces sales, so REVENUE RISES!',
        ],
        glossaryPills: [
          {
            term: 'price skimming',
            definition: 'Setting a high initial launch price for a new, innovative product to maximise profit per unit from early adopters before competitors enter.',
          },
        ],
        memoryAid: 'Inelastic = I Need it (petrol, medicine, iPhone loyalists) → raise price to boost revenue! Elastic = Easily switched (many substitutes) → cut price to boost revenue!',
      },
      {
        id: 'igcse-bus-3-2-c3',
        title: 'Place (Channels of Distribution), Promotion & E-Commerce',
        summary: 'Choosing distribution channels, promotional tools, and e-commerce platforms.',
        bullets: [
          '**Distribution channels:** Direct (Producer → Consumer: keeps full profit margin, direct customer feedback, great for e-commerce/services); 1-intermediary (Producer → Retailer → Consumer); 2-intermediaries (Producer → Wholesaler → Retailer → Consumer: wholesaler breaks bulk for small shops, though each middleman adds a mark-up).',
          'Promotion aims to inform, persuade, and build brand image: Above-the-line advertising (TV, billboards, social media ads) vs Below-the-line sales promotion (BOGOF, free samples, loyalty cards, sponsorships, PR).',
          '**E-commerce & digital marketing:** opens 24/7 global reach, slashes physical store rent, and enables hyper-targeted social media ads — but increases delivery/returns costs, cybersecurity risks, and inability for buyers to inspect items physically.',
        ],
        commonMistake: 'Ensure ALL 4 Ps stay consistent! Selling a luxury watch via price skimming while using cheap discount coupons and selling in a budget supermarket destroys brand credibility.',
      },
    ],
    keyTerms: [
      { term: 'Product life cycle', definition: 'Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline.' },
      { term: 'Penetration pricing', definition: 'Launching a product at a deliberately low price to gain market share rapidly against established rivals.' },
      { term: 'Price elasticity of demand', definition: 'Responsiveness of quantity demanded to a change in selling price.' },
    ],
    checklistPoints: [
      'Draw the Product Life Cycle and recommend realistic extension strategies.',
      'Select and justify pricing strategies using Price Elasticity of Demand (elastic vs inelastic).',
      'Recommend appropriate distribution channels, promotional mixes, and e-commerce strategies aligned with the other Ps.',
    ],
  },
  'igcse-bus-4-1': {
    subtopicId: 'igcse-bus-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Production Methods (Job, Batch, Flow), Productivity & Lean Production',
    readingMinutes: 10,
    videoTitle: 'Job, Batch and Flow Production Explained Simply | IGCSE Business Studies',
    youtubeId: 'ZdmJCKZYxm4',
    videoChannel: 'BizEdMadeSimple',
    videoDuration: '12:53',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Production Methods', cardId: 'igcse-bus-4-1-c1' },
      { time: '2:30', seconds: 150, label: 'Job Production: Features & Pros/Cons', cardId: 'igcse-bus-4-1-c1' },
      { time: '6:15', seconds: 375, label: 'Batch Production: Flexibility & Cost', cardId: 'igcse-bus-4-1-c1' },
      { time: '9:45', seconds: 585, label: 'Flow Production & Choosing the Right Method', cardId: 'igcse-bus-4-1-c1' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-1-c1',
        title: 'Job, Batch & Flow Production Methods',
        summary: 'Weighing flexibility, unit cost, and motivation across Job, Batch, and Flow.',
        bullets: [
          '**Job production:** making ONE unique custom-built item at a time to exact customer specs (e.g., wedding dress, custom bridge, bespoke furniture). High quality, motivating for skilled workers, premium price — but high unit cost and slow.',
          '**Batch production:** making a SET QUANTITY (batch) of identical items before switching machinery to another batch (e.g., bakery making 200 white loaves then 200 rye loaves, clothing sizes). Flexible variety + some economies of scale — but downtime resetting machines and higher work-in-progress inventory.',
          'Flow production (mass production): continuous automated assembly line producing high volumes of standardised items 24/7 (e.g., cars, soft drinks, smartphones). Lowest unit cost and massive output — but huge initial capital cost, inflexible to custom requests, boring jobs, and one breakdown halts the entire line!',
        ],
        glossaryPills: [
          {
            term: 'flow production',
            definition: 'Continuous large-scale production of standardised goods moving sequentially along an automated assembly line.',
          },
        ],
      },
      {
        id: 'igcse-bus-4-1-c2',
        title: 'Productivity, Automation & Technology',
        summary: 'Raising labour productivity with training, robotics, CAD/CAM, and EPOS.',
        bullets: [
          'Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness.',
          '**Ways to boost productivity:** better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail.',
          '**Automation trade-off:** vastly higher speed, accuracy, and 24/7 operation without fatigue — but expensive capital setup, staff redundancy fears, and technical maintenance costs.',
        ],
      },
      {
        id: 'igcse-bus-4-1-c3',
        title: 'Lean Production: Kaizen & Just-in-Time (JIT)',
        summary: 'Cutting waste through Kaizen continuous improvement and Just-in-Time stock.',
        bullets: [
          'Lean production systematically eliminates waste (excess stock, defects, waiting time, unnecessary movement) to cut costs without sacrificing quality.',
          'Kaizen ("continuous improvement"): regular small-group worker meetings identify tiny daily improvements to layout, workflow, and waste reduction — boosting both efficiency and employee empowerment.',
          'Just-in-Time (JIT) inventory control: raw materials arrive from suppliers **only moments before** they are needed on the production line, holding **near-zero buffer stock**.',
          '**JIT pros:** eliminates warehouse rent, insurance, and obsolescence/spoilage costs; improves cash flow. JIT cons: ZERO margin for error — one late supplier delivery or transport strike immediately stops the whole factory!',
        ],
        glossaryPills: [
          {
            term: 'Kaizen',
            definition: 'Japanese lean production philosophy focusing on continuous small incremental improvements suggested by frontline workers.',
          },
          {
            term: 'Just-in-Time',
            definition: 'Inventory system where materials are delivered precisely when needed for production, minimising storage and holding costs.',
          },
        ],
        commonMistake: 'Never recommend JIT to a business with UNRELIABLE suppliers or erratic sudden demand spikes — JIT strictly requires ultra-reliable suppliers and accurate demand forecasting!',
      },
    ],
    keyTerms: [
      { term: 'Job production', definition: 'One-off custom production tailored to an individual customer’s exact order.' },
      { term: 'Batch production', definition: 'Producing identical goods in grouped batches before retooling for another specification.' },
      { term: 'Lean production', definition: 'Operations techniques (such as Kaizen and JIT) aimed at eliminating all forms of waste.' },
    ],
    checklistPoints: [
      'Recommend and evaluate Job, Batch, or Flow production for real-world businesses.',
      'Explain how training, motivation, and automation increase labour productivity.',
      'Assess the benefits and risks of Kaizen and Just-in-Time (JIT) inventory control.',
    ],
  },
  'igcse-bus-4-2': {
    subtopicId: 'igcse-bus-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Costs, Economies of Scale, Break-Even Analysis & Quality',
    readingMinutes: 11,
    videoTitle: 'What is Break Even Analysis?',
    youtubeId: '6akbg2HTn5I',
    videoChannel: 'Bizconsesh',
    videoDuration: '9:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Fixed, Variable & Total Costs', cardId: 'igcse-bus-4-2-c1' },
      { time: '2:20', seconds: 140, label: 'Break-Even Formula & Contribution', cardId: 'igcse-bus-4-2-c2' },
      { time: '5:15', seconds: 315, label: 'Reading a Break-Even Chart', cardId: 'igcse-bus-4-2-c2' },
      { time: '7:40', seconds: 460, label: 'Margin of Safety & Limitations', cardId: 'igcse-bus-4-2-c2' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-2-c1',
        title: 'Costs, Economies & Diseconomies of Scale',
        summary: 'Fixed vs variable costs and 5 economies vs 3 diseconomies of scale.',
        bullets: [
          '**Fixed Costs** (FC) do NOT change with output in the short run (rent, insurance, management salaries). Variable Costs (VC) change directly with output (raw materials, piece-rate wages, packaging).',
          'Total Cost (TC) = FC + Total VC. Average Cost per unit (AC) = Total Cost ÷ Output.',
          'Economies of scale: factors causing AVERAGE COST PER UNIT to FALL as a business grows larger — Purchasing (bulk-buying discounts), Technical (specialist high-speed machinery), Financial (cheaper bank loans), Marketing (spreading ad spend over huge output), Managerial (hiring functional specialists).',
          'Diseconomies of scale: factors causing average cost to RISE when a firm grows too large — poor communication across sprawling sites, low morale/alienation, and weak coordination/control.',
        ],
        glossaryPills: [
          {
            term: 'economies of scale',
            definition: 'Cost advantages that reduce average cost per unit as a business expands its scale of production.',
          },
        ],
        memoryAid: 'Remember 5 Economies of Scale with Really Pretty Tigers Make Money (or P-T-F-M-M: Purchasing, Technical, Financial, Marketing, Managerial)!',
      },
      {
        id: 'igcse-bus-4-2-c2',
        title: 'Break-Even Analysis & Margin of Safety',
        summary: 'Calculating contribution, break-even output, margin of safety, and limits.',
        bullets: [
          '**Break-even** output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss).',
          'Contribution per unit = Selling Price − Variable Cost per unit. **Break-Even Output = Fixed Costs ÷ Contribution per unit**.',
          '**Worked example:** Fixed costs = $12,000; selling price = $25; variable cost = $10/unit. Contribution = $25 − $10 = $15. Break-even = 12,000 ÷ 15 = 800 units.',
          'Margin of Safety = Actual (or budgeted) Sales − **Break-Even** Output. If actual sales are 1,100 units, Margin of Safety = 1,100 − 800 = 300 units (sales can drop by 300 units before making a loss!).',
          '**Limitations of break-even:** assumes ALL output produced is actually sold, assumes selling price and variable cost stay constant (no bulk discounts), and ignores multi-product firms.',
        ],
        glossaryPills: [
          {
            term: 'margin of safety',
            definition: 'The amount by which actual or forecast sales exceed the break-even level of output.',
          },
        ],
        commonMistake: 'When calculating break-even, ALWAYS divide Fixed Costs by (Price − Variable Cost per unit), NEVER by Selling Price alone!',
      },
      {
        id: 'igcse-bus-4-2-c3',
        title: 'Quality Control vs Quality Assurance & Location Decisions',
        summary: 'Comparing Quality Control vs Quality Assurance and business location factors.',
        bullets: [
          '**Quality Control (QC):** inspectors check finished products at the END of the production line to spot defects. Stops faulty goods reaching customers, but reactive — defects are only caught AFTER materials and labour have already been wasted!',
          '**Quality Assurance (QA):** builds quality checks into EVERY stage of design and production, making every worker responsible ("right first time", e.g., ISO 9000 / Total Quality Management). Cuts scrap and rework, boosts worker pride — requires comprehensive training and full workforce buy-in.',
          '**Location factors:** Manufacturing weighs raw material proximity, transport links, land/labour costs, and government grants; Retailing weighs high footfall, parking, visibility, and local competition.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Break-even output', definition: 'Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit).' },
      { term: 'Contribution per unit', definition: 'Selling price minus variable cost per unit; contributes toward paying fixed costs and then profit.' },
      { term: 'Quality assurance', definition: 'Preventative system checking quality throughout every stage of production to eliminate defects before they happen.' },
    ],
    checklistPoints: [
      'Calculate FC, VC, TC, AC, contribution, break-even output, and margin of safety accurately.',
      'Explain 5 economies of scale and 3 diseconomies of scale with business context.',
      'Evaluate Quality Control vs Quality Assurance and justify optimal business location choices.',
    ],
  },
  'igcse-bus-5-1': {
    subtopicId: 'igcse-bus-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Sources of Business Finance & Cash-Flow Forecasting',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 5.2 Cash-flow forecasting and working capital',
    youtubeId: 'uOMx1g7mYhY',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro', cardId: 'igcse-bus-5-1-c1' },
      { time: '1:16', seconds: 76, label: 'Inflows and Outflows', cardId: 'igcse-bus-5-1-c2' },
      { time: '7:22', seconds: 442, label: 'Overcoming Short-Term Cash Flow Problems', cardId: 'igcse-bus-5-1-c3' },
      { time: '10:35', seconds: 635, label: 'Solved Exam Question', cardId: 'igcse-bus-5-1-c2' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-1-c1',
        title: 'Internal & External Sources of Finance',
        summary: 'Matching internal/external and short/long-term finance to business needs.',
        bullets: [
          'Internal sources (no interest, no loss of ownership control, but limited amount): Retained profit (ploughed-back past profits — zero interest, unavailable to brand-new start-ups), Sale of unwanted non-current assets, and Reducing inventory/working capital.',
          'External short-term sources (<1 year, for working capital): Bank overdraft (flexible, interest charged only on amount overdrawn, but high rate and repayable on demand), Trade credit (buy from suppliers now, pay in 30–60 days — free finance if paid on time), Debt factoring.',
          'External long-term sources (>1 year, for expansion/machinery): Bank loan / Mortgage (fixed repayments, interest charged, often requires collateral), Issuing Shares (Ltd/Plc only — permanent capital with NO repayment or fixed interest, but dilutes ownership control & dividends expected), Leasing, Venture Capital, Crowdfunding, Government Grants.',
        ],
        glossaryPills: [
          {
            term: 'retained profit',
            definition: 'Net profit kept back inside the business after paying taxes and dividends to reinvest in growth.',
          },
          {
            term: 'working capital',
            definition: 'Day-to-day finance available to pay short-term bills and operating expenses: Current Assets − Current Liabilities.',
          },
        ],
        commonMistake: 'NEVER suggest "retained profit" for a brand-new start-up (it has no past profits yet!) and NEVER suggest "issuing shares" for a sole trader or partnership!',
      },
      {
        id: 'igcse-bus-5-1-c2',
        title: 'Constructing & Interpreting Cash-Flow Forecasts',
        summary: 'Calculating net cash flow and closing balances vs accounting profit.',
        bullets: [
          '**Cash Inflows:** cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments.',
          'Core cash-flow equations (memorise these 3!):',
          '1. **Net Cash Flow = Total Cash Inflows − Total Cash Outflows**.',
          '2. **Closing Balance = Opening Balance + Net Cash Flow**.',
          '3. Next Month’s Opening Balance = Previous Month’s Closing Balance.',
          'Cash is NOT the same as Profit! A profitable business can still run out of cash and go insolvent if it gives customers 90 days credit while paying suppliers and staff immediately ("overtrading").',
        ],
        memoryAid: 'Opening + Net Cash Flow = Closing → Carry Closing straight across to next month’s Opening!',
      },
      {
        id: 'igcse-bus-5-1-c3',
        title: 'Overcoming Short-Term Cash-Flow Problems',
        summary: 'Practical tactics and trade-offs for solving short-term cash shortages.',
        bullets: [
          '**Increase/speed up inflows:** arrange a short-term bank overdraft, chase overdue trade receivables (offer small discounts for prompt payment), ask customers for cash/deposits upfront, or sell idle assets.',
          '**Delay/reduce outflows:** negotiate longer trade credit from suppliers (e.g., 60 days instead of 30), lease new machinery instead of buying outright, or postpone non-essential capital spending.',
          '**Evaluate trade-offs:** cutting customer credit terms boosts cash quickly, but may drive loyal B2B clients toward competitors offering 60-day credit!',
        ],
      },
    ],
    keyTerms: [
      { term: 'Bank overdraft', definition: 'Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.' },
      { term: 'Net cash flow', definition: 'Total cash inflows minus total cash outflows over a specific month or period.' },
      { term: 'Insolvency', definition: 'Situation where a business runs out of cash and cannot pay its debts as they fall due.' },
    ],
    checklistPoints: [
      'Match appropriate internal/external and short/long-term finance sources to specific business types (sole trader vs Plc).',
      'Calculate Net Cash Flow, Opening Balance, and Closing Balance accurately across multi-month forecasts.',
      'Explain why profitable firms can face cash crises and recommend realistic remedies.',
    ],
  },
  'igcse-bus-5-2': {
    subtopicId: 'igcse-bus-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Income Statements, Balance Sheets & Financial Ratios',
    readingMinutes: 11,
    videoTitle: 'Income Statements - GCSE Business',
    youtubeId: 'iCI8jCBdwFg',
    videoChannel: 'Bizconsesh',
    videoDuration: '6:25',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Purpose of an Income Statement', cardId: 'igcse-bus-5-2-c1' },
      { time: '1:35', seconds: 95, label: 'Revenue, Cost of Sales & Gross Profit', cardId: 'igcse-bus-5-2-c1' },
      { time: '3:25', seconds: 205, label: 'Expenses, Operating Profit & Net Profit', cardId: 'igcse-bus-5-2-c1' },
      { time: '5:05', seconds: 305, label: 'Profit Margins & Exam Walkthrough', cardId: 'igcse-bus-5-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-2-c1',
        title: 'Income Statements (Profit & Loss Account)',
        summary: 'Structuring Income Statements from revenue to gross, net, and retained profit.',
        bullets: [
          'An **Income Statement** records revenue, costs, and profit earned OVER A PERIOD OF TIME (usually 1 year):',
          'Revenue (Sales) = Selling Price × Quantity Sold.',
          'Gross Profit = Revenue − Cost of Sales (direct raw materials/stock bought for resale).',
          'Net Profit (Profit for the year) = Gross Profit − Expenses/Overheads (rent, wages, utilities, marketing, depreciation).',
          'Retained Profit = Net Profit − Corporation Tax − Dividends paid to shareholders.',
        ],
        glossaryPills: [
          {
            term: 'gross profit',
            definition: 'Sales revenue remaining after deducting direct Cost of Sales, before subtracting indirect operating expenses.',
          },
        ],
      },
      {
        id: 'igcse-bus-5-2-c2',
        title: 'Statement of Financial Position (Balance Sheet)',
        summary: 'Classifying assets, liabilities, working capital, and capital employed.',
        bullets: [
          'A **Balance Sheet** is a SNAPSHOT on ONE specific date showing what the business owns (Assets), owes (Liabilities), and how it is funded (Equity):',
          '**Non-Current Assets:** long-term items kept >1 year (buildings, machinery, vehicles). Current Assets: short-term items converted to cash within 1 year (inventory, trade receivables, cash).',
          '**Current Liabilities:** debts due within 1 year (trade payables, overdraft). Non-Current Liabilities: long-term debts due >1 year (bank loans, mortgages).',
          'Working Capital (Net Current Assets) = Current Assets − Current Liabilities. Capital Employed = Total Equity + Non-Current Liabilities = Total Assets − Current Liabilities.',
        ],
      },
      {
        id: 'igcse-bus-5-2-c3',
        title: 'Profitability & Liquidity Ratios',
        summary: 'Calculating and interpreting GPM, NPM, ROCE, Current, and Acid Test ratios.',
        bullets: [
          'Gross Profit Margin (GPM) = (Gross Profit ÷ Revenue) × 100%. Raised by increasing prices or finding cheaper suppliers.',
          'Net Profit Margin (NPM) = (Net Profit ÷ Revenue) × 100%. Raised by cutting overhead expenses (energy, rent, admin).',
          'Return on Capital Employed (ROCE) = (Net Profit ÷ Capital Employed) × 100%. Shows % return earned per $100 invested in the business (compare against bank interest rates!).',
          '**Current Ratio = Current Assets ÷ Current Liabilities** (ideal benchmark: 1.5 : 1 to 2.0 : 1).',
          'Acid Test (Quick) Ratio = (Current Assets − Inventory) ÷ Current Liabilities (ideal ≥ 1.0 : 1 — measures immediate liquidity without relying on unsold stock that can be hard to turn into cash fast!).',
        ],
        glossaryPills: [
          {
            term: 'liquidity',
            definition: 'The ability of a business to pay its short-term debts on time using cash and liquid current assets.',
          },
        ],
        commonMistake: 'Don’t just state a ratio number (e.g., "Current ratio is 0.8:1") — ALWAYS interpret it in context ("below 1:1 means the firm has only $0.80 of current assets per $1 of short-term debt and risks a liquidity crisis!").',
      },
    ],
    keyTerms: [
      { term: 'Gross profit margin', definition: '(Gross Profit ÷ Revenue) × 100%, showing percentage of sales left after direct cost of sales.' },
      { term: 'ROCE', definition: 'Return on Capital Employed: (Net Profit ÷ Capital Employed) × 100%, measuring profitability relative to total capital invested.' },
      { term: 'Acid test ratio', definition: '(Current Assets − Inventory) ÷ Current Liabilities, testing immediate liquidity without relying on selling stock.' },
    ],
    checklistPoints: [
      'Construct and interpret Income Statements (Gross Profit, Net Profit, Retained Profit).',
      'Classify Non-Current/Current Assets, Liabilities, Working Capital, and Capital Employed on a Balance Sheet.',
      'Calculate and evaluate GPM, NPM, ROCE, Current Ratio, and Acid Test Ratio across two years or rival firms.',
    ],
  },
  'igcse-bus-6-1': {
    subtopicId: 'igcse-bus-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business Studies Ch 6.1 | Economic Issues',
    youtubeId: 'A_YnQ_EbwHI',
    videoChannel: 'Bahruz - IGCSE Business',
    videoDuration: '13:42',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro', cardId: 'igcse-bus-6-1-c1' },
      { time: '2:41', seconds: 161, label: 'Economic Cycle & Slump Stage', cardId: 'igcse-bus-6-1-c1' },
      { time: '6:23', seconds: 383, label: 'Balance of Payments', cardId: 'igcse-bus-6-1-c2' },
      { time: '12:26', seconds: 746, label: 'How Businesses Respond to Economic Policies', cardId: 'igcse-bus-6-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-1-c1',
        title: 'The Business Cycle & Government Economic Objectives',
        summary: 'How businesses adapt across growth, boom, recession, and slump stages.',
        bullets: [
          '**Governments aim for 4 macroeconomic goals:** Steady Economic Growth (rising GDP), Low Inflation (stable prices), Low Unemployment, and a healthy Balance of Payments.',
          '**The 4 Business Cycle stages:** Growth (rising GDP, sales & jobs) → Boom (peak spending, skill shortages, rising wages & inflation) → Recession (falling GDP for 2+ quarters, rising unemployment, consumers cut luxury spending) → Slump (deep prolonged downturn, business closures).',
          '**How firms adapt in a recession:** shift toward value/essential product lines, cut fixed overheads, offer promotional discounts, or target growing overseas export markets.',
        ],
        glossaryPills: [
          {
            term: 'inflation',
            definition: 'A sustained rise in the general price level of goods and services in an economy, reducing the purchasing power of money.',
          },
        ],
      },
      {
        id: 'igcse-bus-6-1-c2',
        title: 'Fiscal Policy (Taxes) & Monetary Policy (Interest Rates)',
        summary: 'Tracing direct/indirect tax changes and interest rate hikes on demand and costs.',
        bullets: [
          'Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment.',
          'Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods.',
          '**Monetary Policy (Interest Rates):** When the central bank RAISES interest rates: (1) Borrowing becomes more expensive → firms delay loans/expansion; (2) Existing variable-rate loan/mortgage payments jump → less disposable income for consumers; (3) Saving becomes more rewarding → consumers spend less; (4) Hot-money inflows strengthen the exchange rate, hurting exporters!',
        ],
        glossaryPills: [
          {
            term: 'disposable income',
            definition: 'The amount of personal income remaining for consumers to spend or save after direct income taxes have been deducted.',
          },
        ],
      },
      {
        id: 'igcse-bus-6-1-c3',
        title: 'Exchange Rate Movements (Appreciation vs Depreciation)',
        summary: 'Applying SPICED to currency appreciation and depreciation for exporters/importers.',
        bullets: [
          'Exchange rate = price of one currency expressed in another (e.g., £1 = $1.25).',
          'Currency APPRECIATION (stronger currency, e.g., £1 rises from $1.25 to $1.40):',
          '• Imports become CHEAPER in home currency (great for firms buying foreign raw materials!).',
          '• Exports become DEARER (more expensive) to foreign buyers → export sales drop unless price/profit margin is cut!',
          '**Currency DEPRECIATION (weaker currency):** Exports become CHEAPER abroad (boosts export competitiveness!), while imported components become MORE EXPENSIVE (raising unit costs).',
        ],
        memoryAid: 'Use SPICED! Strong Pound (or currency) = Imports Cheaper, Exports Dearer! Flip every word for a weak/depreciating currency (WPIDEC).',
        commonMistake: 'Always check whether the case-study business is an EXPORTER (sells abroad — hurt by appreciation) or an IMPORTER (buys materials abroad — helped by appreciation)!',
      },
    ],
    keyTerms: [
      { term: 'Recession', definition: 'Period of falling national output (GDP), rising unemployment, and reduced consumer demand.' },
      { term: 'Interest rate', definition: 'The cost of borrowing money and the reward for saving, expressed as an annual percentage.' },
      { term: 'Exchange rate', definition: 'The price of one country’s currency in terms of another currency.' },
    ],
    checklistPoints: [
      'Analyse business impacts across Growth, Boom, Recession, and Slump.',
      'Trace the chain of effect of income tax, corporation tax, tariffs, and interest-rate hikes on both costs and demand.',
      'Apply SPICED accurately to exporters and importers when a currency appreciates or depreciates.',
    ],
  },
  'igcse-bus-6-2': {
    subtopicId: 'igcse-bus-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Environmental & Ethical Issues, Globalisation & Multinational Companies',
    readingMinutes: 10,
    videoTitle: 'Globalisation - GCSE & A Level Business',
    youtubeId: '-loRR8XBeDw',
    videoChannel: 'Bizconsesh',
    videoDuration: '5:41',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Business Studies (0450)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'What Is Globalisation?', cardId: 'igcse-bus-6-2-c3' },
      { time: '1:25', seconds: 85, label: 'Causes & Multinational Companies (MNCs)', cardId: 'igcse-bus-6-2-c3' },
      { time: '3:05', seconds: 185, label: 'Opportunities & Threats for Domestic Firms', cardId: 'igcse-bus-6-2-c3' },
      { time: '4:30', seconds: 270, label: 'Tariffs, Quotas & Exchange Rates', cardId: 'igcse-bus-6-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-2-c1',
        title: 'Environmental Sustainability, Externalities & Pressure Groups',
        summary: 'External costs, sustainable production, and pressure group campaigns.',
        bullets: [
          'Social cost = Private cost + External cost (negative **externalities** like factory air pollution, river waste, traffic congestion). Sustainable development meets today’s needs without compromising future generations (renewable energy, recyclable packaging, ethical sourcing).',
          'Pressure groups (e.g., Greenpeace) influence firms through consumer boycotts, media campaigns, and lobbying governments for stricter environmental laws, carbon taxes, and fines.',
          'Going green costs more in the short run (cleaner machinery, biodegradable packaging), but builds positive PR, attracts eco-conscious consumers, avoids legal fines, and cuts long-term energy bills.',
        ],
        glossaryPills: [
          {
            term: 'pressure groups',
            definition: 'Organised groups of citizens sharing a common cause (such as environmental protection) who campaign or boycott to change business or government behaviour.',
          },
        ],
      },
      {
        id: 'igcse-bus-6-2-c2',
        title: 'Business Ethics & Corporate Social Responsibility',
        summary: 'Short-term cost vs long-term brand payoff of ethical CSR policies.',
        bullets: [
          'Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery.',
          '**Short-term trade-off:** paying fair wages and using sustainable suppliers raises unit costs compared with unethical rivals — potentially reducing short-term profits.',
          '**Long-term payoff:** prevents reputational scandals/boycotts, strengthens brand loyalty, attracts top employees, and appeals to ethical investors.',
        ],
      },
      {
        id: 'igcse-bus-6-2-c3',
        title: 'Globalisation, Protectionism & Multinational Companies (MNCs)',
        summary: 'Globalisation, tariffs/quotas, and host-country impacts of MNCs.',
        bullets: [
          '**Globalisation** is the growing worldwide integration of markets driven by freer trade agreements, cheap container shipping/air travel, and the internet.',
          '**Protectionism** restricts imports via Tariffs (taxes on imported goods raising their price) and Quotas (physical numerical limits on imported volume) to shelter domestic jobs — though rivals may retaliate.',
          'A Multinational Company (MNC) has operations/factories in MORE than one country (not merely exporting!). Why become an MNC? Lower wage/land costs, closeness to raw materials, bypassing import tariffs, and accessing booming new consumer markets.',
          '**Impact of MNCs on host countries — Pros:** creates local jobs, trains workers, brings modern technology & foreign investment, pays host taxes, boosts exports. Cons: may push local small shops out of business, repatriate profits back to home HQ, pay low local wages, deplete natural resources, or leave abruptly if costs rise.',
        ],
        glossaryPills: [
          {
            term: 'multinational company',
            definition: 'A business organisation with production, assembly, or service operations located in more than one country.',
          },
          {
            term: 'tariffs',
            definition: 'Government taxes imposed on imported goods to make them more expensive than domestically produced alternatives.',
          },
        ],
        commonMistake: 'A business that only EXPORTS goods overseas from a single factory at home is NOT a multinational company — an MNC physically operates facilities in multiple countries!',
      },
    ],
    keyTerms: [
      { term: 'Sustainable development', definition: 'Business growth and production that avoids depleting natural resources or damaging the environment for future generations.' },
      { term: 'Tariff', definition: 'Tax placed on imported products to protect domestic industries.' },
      { term: 'Quota', definition: 'Physical limit on the quantity of a specific product that may be imported into a country.' },
      { term: 'Multinational company (MNC)', definition: 'Firm operating production or service branches in more than one country.' },
    ],
    checklistPoints: [
      'Evaluate environmental and ethical business trade-offs (short-term costs vs long-term brand reputation).',
      'Distinguish tariffs from quotas and explain the effects of globalisation on local firms.',
      'Weigh both benefits and drawbacks of Multinational Companies for host economies.',
    ],
  },
};

export const IGCSE_BUSINESS_QUIZZES: QuizQuestion[] = [
  {
    "id": "igcse-bus-q1",
    "subtopicId": "igcse-bus-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A café buys coffee beans, milk, and cups costing $0.90 per latte and sells each latte for $4.20. Calculate the added value per latte.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Added value = $4.20 − $0.90 = $3.30.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Subtract bought-in material cost from selling price (4.20 − 0.90)",
          "requiredKeywordGroups": [
            [
              "4.20",
              "0.90"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct added value $3.30",
          "numericMatch": {
            "value": 3.3,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "Added value = Selling price ($4.20) − Cost of bought-in materials ($0.90) = $3.30."
  },
  {
    "id": "igcse-bus-q2",
    "subtopicId": "igcse-bus-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A car manufacturer buys a chain of car showrooms to sell directly to drivers. Which type of integration is this?",
    "options": [
      "Horizontal integration",
      "Backward vertical integration",
      "Forward vertical integration",
      "Conglomerate integration"
    ],
    "correctIndex": 2,
    "explanation": "Moving closer to the final customer (from manufacturing into retail) is forward vertical integration."
  },
  {
    "id": "igcse-bus-q3",
    "subtopicId": "igcse-bus-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Herzberg’s Two-Factor Theory, which of the following is classified as a HYGIENE factor rather than a motivator?",
    "options": [
      "Recognition for achievement",
      "Greater responsibility",
      "Safe working conditions and base salary",
      "Challenging, interesting work"
    ],
    "correctIndex": 2,
    "explanation": "Herzberg classified pay and working conditions as hygiene factors — they prevent dissatisfaction when adequate but do not actively create lasting motivation."
  },
  {
    "id": "igcse-bus-q4",
    "subtopicId": "igcse-bus-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A tech firm launches a revolutionary smartwatch at a high initial price to recover R&D costs before competitors copy it. Which pricing strategy is this?",
    "options": [
      "Penetration pricing",
      "Price skimming",
      "Competitive pricing",
      "Promotional pricing"
    ],
    "correctIndex": 1,
    "explanation": "Price skimming sets a high introductory price for a unique/innovative product to target early adopters and recover high R&D expenditure."
  },
  {
    "id": "igcse-bus-q5",
    "subtopicId": "igcse-bus-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the definitions of key lean production methods.",
    "segments": [
      "Continuous small improvements suggested by shop-floor workers are known as ",
      ", while holding near-zero buffer stock by timing deliveries precisely to production is called ",
      "."
    ],
    "wordBank": [
      "Kaizen",
      "Just-in-Time",
      "Batch production",
      "Quality control"
    ],
    "answers": [
      "Kaizen",
      "Just-in-Time"
    ],
    "explanation": "Kaizen drives continuous incremental improvements; Just-in-Time (JIT) minimises inventory storage by synchronising supplier deliveries with production."
  },
  {
    "id": "igcse-bus-q6",
    "subtopicId": "igcse-bus-4-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "A workshop has fixed costs of $15,000 per month. Each chair sells for $80 with variable costs of $30 per chair. Calculate the monthly break-even output.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Contribution = $80 − $30 = $50. Break-even = $15,000 ÷ $50 = 300 chairs.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Contribution per unit = 80 − 30 = $50",
          "requiredKeywordGroups": [
            [
              "50"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Divide fixed costs by contribution (15000 ÷ 50)",
          "requiredKeywordGroups": [
            [
              "15000",
              "15,000"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Break-even output = 300 chairs",
          "numericMatch": {
            "value": 300,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "Contribution = $80 − $30 = $50. Break-even = $15,000 ÷ $50 = 300 chairs."
  },
  {
    "id": "igcse-bus-q7",
    "subtopicId": "igcse-bus-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "In March, a business has an opening balance of $2,000, cash inflows of $9,500, and cash outflows of $12,000. Calculate the closing cash balance.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Net cash flow = 9,500 − 12,000 = −$2,500. Closing balance = 2,000 + (−2,500) = −$500.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Net cash flow = −2500",
          "requiredKeywordGroups": [
            [
              "2500",
              "2,500"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Closing balance = −$500",
          "numericMatch": {
            "value": -500,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "Net cash flow = $9,500 − $12,000 = −$2,500. Closing balance = $2,000 − $2,500 = −$500 (overdrawn)."
  },
  {
    "id": "igcse-bus-q8",
    "subtopicId": "igcse-bus-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does the Acid Test ratio subtract inventory from Current Assets before dividing by Current Liabilities?",
    "options": [
      "Inventory is a non-current asset",
      "Inventory is the least liquid current asset and may not sell quickly in an emergency",
      "Inventory is classified as a current liability",
      "Inventory always increases net profit margin"
    ],
    "correctIndex": 1,
    "explanation": "Inventory takes time to sell (or may spoil/go obsolete), so removing it tests whether the firm can pay immediate debts using cash and receivables alone."
  },
  {
    "id": "igcse-bus-q9",
    "subtopicId": "igcse-bus-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "If a country’s currency APPRECIATES sharply against foreign currencies, what is the immediate effect on its exporters and importers?",
    "options": [
      "Exports become cheaper abroad; imports become dearer",
      "Exports become dearer abroad; imports become cheaper",
      "Both exports and imports become cheaper",
      "Exchange rates have no effect on import costs"
    ],
    "correctIndex": 1,
    "explanation": "SPICED: A Stronger currency makes Imports Cheaper and Exports Dearer (more expensive to overseas buyers)."
  },
  {
    "id": "igcse-bus-q10",
    "subtopicId": "igcse-bus-6-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select TWO valid benefits that a Multinational Company (MNC) can bring to a host developing country.",
    "options": [
      "Creation of new local employment and worker skills training",
      "Guarantee that small local competitors will never lose market share",
      "Inflow of modern technology, infrastructure, and tax revenues",
      "Complete elimination of all profit repatriation"
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "MNCs create jobs, train staff, inject technology/foreign capital, and pay taxes — though they can also outcompete small local firms and repatriate profits."
  },
  {
    "id": "igcse-bus-q-extra-110",
    "subtopicId": "igcse-bus-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.1 (Enterprise, Added Value & Classification of Businesses), which of the following is the accurate definition of \"Opportunity cost\"?",
    "options": [
      "The next best alternative forgone when making a decision.",
      "The inverse ratio of Added value measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Enterprise, Added Value & Classification of Businesses.",
      "An experimental error caused by neglecting unit conversions in The Economic Problem, Factors of Production & Specialisation."
    ],
    "correctIndex": 0,
    "explanation": "Opportunity cost is defined as: The next best alternative forgone when making a decision."
  },
  {
    "id": "igcse-bus-q-extra-111",
    "subtopicId": "igcse-bus-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Added Value & Entrepreneurs\" (1.1 Enterprise, Added Value & Classification of Businesses).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Added value = Selling price − Cost of bought-in materials and components. 2. How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Added value = Selling price − Cost of bought-in materials and components."
        },
        {
          "id": "mp2",
          "markDescription": "How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality."
        }
      ]
    },
    "explanation": "From Added Value & Entrepreneurs: Added value = Selling price − Cost of bought-in materials and components."
  },
  {
    "id": "igcse-bus-q-extra-112",
    "subtopicId": "igcse-bus-1-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.1 Enterprise, Added Value & Classification of Businesses.",
    "options": [
      "Explain scarcity, opportunity cost, specialisation, and the 4 factors of production.",
      "In Enterprise, Added Value & Classification of Businesses, standard unit conversions are never required before applying formulas.",
      "Calculate added value and explain how firms add value without confusing it with profit.",
      "Opportunity cost and Added value always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Explain scarcity, opportunity cost, specialisation, and the 4 factors of production.\" and \"Calculate added value and explain how firms add value without confusing it with profit.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-113",
    "subtopicId": "igcse-bus-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.1 (Enterprise, Added Value & Classification of Businesses)?",
    "options": [
      "Added value is NOT the same as profit! Wages, rent, electricity, and marketing costs still have to be paid out of added value before calculating net profit.",
      "Always omit units and rounding in Enterprise, Added Value & Classification of Businesses calculations.",
      "Never show intermediate working steps in 1.1 questions.",
      "Assume Opportunity cost is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Added value is NOT the same as profit! Wages, rent, electricity, and marketing costs still have to be paid out of added value before calculating net profit."
  },
  {
    "id": "igcse-bus-q-extra-115",
    "subtopicId": "igcse-bus-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.2 (Business Growth, Types of Organisation, Objectives & Stakeholders), which of the following is the accurate definition of \"Horizontal integration\"?",
    "options": [
      "Merger or takeover between two firms operating in the exact same industry and stage of production.",
      "The inverse ratio of Limited liability measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Business Growth, Types of Organisation, Objectives & Stakeholders.",
      "An experimental error caused by neglecting unit conversions in Measuring Business Size & Methods of Growth."
    ],
    "correctIndex": 0,
    "explanation": "Horizontal integration is defined as: Merger or takeover between two firms operating in the exact same industry and stage of production."
  },
  {
    "id": "igcse-bus-q-extra-116",
    "subtopicId": "igcse-bus-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Types of Business Organisation & Liability\" (1.2 Business Growth, Types of Organisation, Objectives & Stakeholders).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity. 2. Incorporated companies (Private Limited Company, Ltd; Public Limited Company, Plc): Separate legal identity → LIMITED LIABILITY (shareholders can only lose the money they invested in shares) and continuity.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity."
        },
        {
          "id": "mp2",
          "markDescription": "Incorporated companies (Private Limited Company, Ltd; Public Limited Company, Plc): Separate legal identity → LIMITED LIABILITY (shareholders can only lose the money they invested in shares) and continuity."
        }
      ]
    },
    "explanation": "From Types of Business Organisation & Liability: Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity."
  },
  {
    "id": "igcse-bus-q-extra-117",
    "subtopicId": "igcse-bus-1-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.2 Business Growth, Types of Organisation, Objectives & Stakeholders.",
    "options": [
      "Compare internal growth with horizontal, vertical, and conglomerate integration.",
      "In Business Growth, Types of Organisation, Objectives & Stakeholders, standard unit conversions are never required before applying formulas.",
      "Contrast sole traders, partnerships, Ltd, Plc, franchises, and joint ventures on liability, control, and capital.",
      "Horizontal integration and Limited liability always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Compare internal growth with horizontal, vertical, and conglomerate integration.\" and \"Contrast sole traders, partnerships, Ltd, Plc, franchises, and joint ventures on liability, control, and capital.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-118",
    "subtopicId": "igcse-bus-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.2 (Business Growth, Types of Organisation, Objectives & Stakeholders)?",
    "options": [
      "NEVER list \"profit\" as a valid way to measure the size of a business — a giant airline can make a loss while a small boutique consultancy makes high profit!",
      "Always omit units and rounding in Business Growth, Types of Organisation, Objectives & Stakeholders calculations.",
      "Never show intermediate working steps in 1.2 questions.",
      "Assume Horizontal integration is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "NEVER list \"profit\" as a valid way to measure the size of a business — a giant airline can make a loss while a small boutique consultancy makes high profit!"
  },
  {
    "id": "igcse-bus-q-extra-120",
    "subtopicId": "igcse-bus-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.1 (Motivating Employees (Taylor, Maslow, Herzberg) & Rewards), which of the following is the accurate definition of \"Piece rate\"?",
    "options": [
      "Payment method rewarding workers a fixed amount for every unit of output completed.",
      "The inverse ratio of Job enrichment measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Motivating Employees (Taylor, Maslow, Herzberg) & Rewards.",
      "An experimental error caused by neglecting unit conversions in Why Motivation Matters & Motivational Theorists."
    ],
    "correctIndex": 0,
    "explanation": "Piece rate is defined as: Payment method rewarding workers a fixed amount for every unit of output completed."
  },
  {
    "id": "igcse-bus-q-extra-121",
    "subtopicId": "igcse-bus-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Financial Rewards\" (2.1 Motivating Employees (Taylor, Maslow, Herzberg) & Rewards).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised. 2. Piece rate: paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised."
        },
        {
          "id": "mp2",
          "markDescription": "Piece rate: paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses)."
        }
      ]
    },
    "explanation": "From Financial Rewards: Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised."
  },
  {
    "id": "igcse-bus-q-extra-122",
    "subtopicId": "igcse-bus-2-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.1 Motivating Employees (Taylor, Maslow, Herzberg) & Rewards.",
    "options": [
      "Compare Taylor, Maslow’s 5-level hierarchy, and Herzberg’s Hygiene vs Motivator factors.",
      "In Motivating Employees (Taylor, Maslow, Herzberg) & Rewards, standard unit conversions are never required before applying formulas.",
      "Evaluate financial pay systems (time rate, piece rate, salary, commission, profit sharing) for specific job roles.",
      "Piece rate and Job enrichment always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Compare Taylor, Maslow’s 5-level hierarchy, and Herzberg’s Hygiene vs Motivator factors.\" and \"Evaluate financial pay systems (time rate, piece rate, salary, commission, profit sharing) for specific job roles.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-123",
    "subtopicId": "igcse-bus-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.1 (Motivating Employees (Taylor, Maslow, Herzberg) & Rewards)?",
    "options": [
      "Do NOT confuse job enlargement (more tasks at the SAME skill level — horizontal) with job enrichment (more complex, responsible tasks — vertical)!",
      "Always omit units and rounding in Motivating Employees (Taylor, Maslow, Herzberg) & Rewards calculations.",
      "Never show intermediate working steps in 2.1 questions.",
      "Assume Piece rate is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Do NOT confuse job enlargement (more tasks at the SAME skill level — horizontal) with job enrichment (more complex, responsible tasks — vertical)!"
  },
  {
    "id": "igcse-bus-q-extra-125",
    "subtopicId": "igcse-bus-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.2 (Organisation Structure, Leadership, Recruitment, Training & Communication), which of the following is the accurate definition of \"Chain of command\"?",
    "options": [
      "The line of authority through which instructions are passed down an organisation.",
      "The inverse ratio of Redundancy measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Organisation Structure, Leadership, Recruitment, Training & Communication.",
      "An experimental error caused by neglecting unit conversions in Organisational Charts, Span of Control & Leadership Styles."
    ],
    "correctIndex": 0,
    "explanation": "Chain of command is defined as: The line of authority through which instructions are passed down an organisation."
  },
  {
    "id": "igcse-bus-q-extra-126",
    "subtopicId": "igcse-bus-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Recruitment, Selection & Training\" (2.2 Organisation Structure, Leadership, Recruitment, Training & Communication).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer. 2. Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer."
        },
        {
          "id": "mp2",
          "markDescription": "Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally)."
        }
      ]
    },
    "explanation": "From Recruitment, Selection & Training: Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer."
  },
  {
    "id": "igcse-bus-q-extra-127",
    "subtopicId": "igcse-bus-2-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.2 Organisation Structure, Leadership, Recruitment, Training & Communication.",
    "options": [
      "Analyse tall vs flat hierarchies, span of control, and the advantages of delegation.",
      "In Organisation Structure, Leadership, Recruitment, Training & Communication, standard unit conversions are never required before applying formulas.",
      "Select suitable leadership styles (autocratic, democratic, laissez-faire) for different business scenarios.",
      "Chain of command and Redundancy always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Analyse tall vs flat hierarchies, span of control, and the advantages of delegation.\" and \"Select suitable leadership styles (autocratic, democratic, laissez-faire) for different business scenarios.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-128",
    "subtopicId": "igcse-bus-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.2 (Organisation Structure, Leadership, Recruitment, Training & Communication)?",
    "options": [
      "Keep Job Description (about the ROLE — tasks and responsibilities) strictly separate from Person Specification (about the CANDIDATE — skills, qualifications, traits)!",
      "Always omit units and rounding in Organisation Structure, Leadership, Recruitment, Training & Communication calculations.",
      "Never show intermediate working steps in 2.2 questions.",
      "Assume Chain of command is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Keep Job Description (about the ROLE — tasks and responsibilities) strictly separate from Person Specification (about the CANDIDATE — skills, qualifications, traits)!"
  },
  {
    "id": "igcse-bus-q-extra-129",
    "subtopicId": "igcse-bus-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Effective Communication & Barriers\" for 2.2 Organisation Structure, Leadership, Recruitment, Training & Communication.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding. Internal communication occurs within the firm (e.g., team meetings, intranet); External communication occurs with outsiders (customers, suppliers, tax authorities).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding."
        },
        {
          "id": "mp2",
          "markDescription": "Internal communication occurs within the firm (e.g., team meetings, intranet); External communication occurs with outsiders (customers, suppliers, tax authorities)."
        }
      ]
    },
    "explanation": "Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding."
  },
  {
    "id": "igcse-bus-q-extra-130",
    "subtopicId": "igcse-bus-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.1 (Market Segmentation, Niche vs Mass Markets & Market Research), which of the following is the accurate definition of \"Market segmentation\"?",
    "options": [
      "Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics.",
      "The inverse ratio of Primary research measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Market Segmentation, Niche vs Mass Markets & Market Research.",
      "An experimental error caused by neglecting unit conversions in Marketing, Mass Markets & Niche Markets."
    ],
    "correctIndex": 0,
    "explanation": "Market segmentation is defined as: Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics."
  },
  {
    "id": "igcse-bus-q-extra-131",
    "subtopicId": "igcse-bus-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Market Segmentation\" (3.1 Market Segmentation, Niche vs Mass Markets & Market Research).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product. 2. Benefits: Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product."
        },
        {
          "id": "mp2",
          "markDescription": "Benefits: Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue."
        }
      ]
    },
    "explanation": "From Market Segmentation: Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product."
  },
  {
    "id": "igcse-bus-q-extra-132",
    "subtopicId": "igcse-bus-3-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.1 Market Segmentation, Niche vs Mass Markets & Market Research.",
    "options": [
      "Evaluate niche vs mass marketing strategies for start-ups and large brands.",
      "In Market Segmentation, Niche vs Mass Markets & Market Research, standard unit conversions are never required before applying formulas.",
      "Recommend appropriate segmentation criteria for a given product.",
      "Market segmentation and Primary research always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Evaluate niche vs mass marketing strategies for start-ups and large brands.\" and \"Recommend appropriate segmentation criteria for a given product.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-133",
    "subtopicId": "igcse-bus-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.1 (Market Segmentation, Niche vs Mass Markets & Market Research)?",
    "options": [
      "When evaluating research accuracy in exams, ALWAYS cite 3 concrete factors: sample size (too small?), sampling method (biased?), and question wording (leading questions or outdated secondary source?).",
      "Always omit units and rounding in Market Segmentation, Niche vs Mass Markets & Market Research calculations.",
      "Never show intermediate working steps in 3.1 questions.",
      "Assume Market segmentation is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When evaluating research accuracy in exams, ALWAYS cite 3 concrete factors: sample size (too small?), sampling method (biased?), and question wording (leading questions or outdated secondary source?)."
  },
  {
    "id": "igcse-bus-q-extra-134",
    "subtopicId": "igcse-bus-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Primary vs Secondary Market Research & Sampling\" for 3.1 Market Segmentation, Niche vs Mass Markets & Market Research.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming. Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming."
        },
        {
          "id": "mp2",
          "markDescription": "Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals."
        }
      ]
    },
    "explanation": "Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming."
  },
  {
    "id": "igcse-bus-q-extra-135",
    "subtopicId": "igcse-bus-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.2 (The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce), which of the following is the accurate definition of \"Product life cycle\"?",
    "options": [
      "Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline.",
      "The inverse ratio of Penetration pricing measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce.",
      "An experimental error caused by neglecting unit conversions in Product: Branding, Packaging & The Product Life Cycle."
    ],
    "correctIndex": 0,
    "explanation": "Product life cycle is defined as: Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline."
  },
  {
    "id": "igcse-bus-q-extra-136",
    "subtopicId": "igcse-bus-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Pricing Strategies & Price Elasticity of Demand (PED)\" (3.2 The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Cost-plus pricing: Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand). 2. Competitive pricing: matching rival prices (safe in crowded markets, requires strong non-price differentiation).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Cost-plus pricing: Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand)."
        },
        {
          "id": "mp2",
          "markDescription": "Competitive pricing: matching rival prices (safe in crowded markets, requires strong non-price differentiation)."
        }
      ]
    },
    "explanation": "From Pricing Strategies & Price Elasticity of Demand (PED): Cost-plus pricing: Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand)."
  },
  {
    "id": "igcse-bus-q-extra-137",
    "subtopicId": "igcse-bus-3-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.2 The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce.",
    "options": [
      "Draw the Product Life Cycle and recommend realistic extension strategies.",
      "In The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce, standard unit conversions are never required before applying formulas.",
      "Select and justify pricing strategies using Price Elasticity of Demand (elastic vs inelastic).",
      "Product life cycle and Penetration pricing always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Draw the Product Life Cycle and recommend realistic extension strategies.\" and \"Select and justify pricing strategies using Price Elasticity of Demand (elastic vs inelastic).\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-138",
    "subtopicId": "igcse-bus-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.2 (The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce)?",
    "options": [
      "Ensure ALL 4 Ps stay consistent! Selling a luxury watch via price skimming while using cheap discount coupons and selling in a budget supermarket destroys brand credibility.",
      "Always omit units and rounding in The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce calculations.",
      "Never show intermediate working steps in 3.2 questions.",
      "Assume Product life cycle is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Ensure ALL 4 Ps stay consistent! Selling a luxury watch via price skimming while using cheap discount coupons and selling in a budget supermarket destroys brand credibility."
  },
  {
    "id": "igcse-bus-q-extra-140",
    "subtopicId": "igcse-bus-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.1 (Production Methods (Job, Batch, Flow), Productivity & Lean Production), which of the following is the accurate definition of \"Job production\"?",
    "options": [
      "One-off custom production tailored to an individual customer’s exact order.",
      "The inverse ratio of Batch production measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Production Methods (Job, Batch, Flow), Productivity & Lean Production.",
      "An experimental error caused by neglecting unit conversions in Job, Batch & Flow Production Methods."
    ],
    "correctIndex": 0,
    "explanation": "Job production is defined as: One-off custom production tailored to an individual customer’s exact order."
  },
  {
    "id": "igcse-bus-q-extra-141",
    "subtopicId": "igcse-bus-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Productivity, Automation & Technology\" (4.1 Production Methods (Job, Batch, Flow), Productivity & Lean Production).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness. 2. Ways to boost productivity: better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness."
        },
        {
          "id": "mp2",
          "markDescription": "Ways to boost productivity: better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail."
        }
      ]
    },
    "explanation": "From Productivity, Automation & Technology: Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness."
  },
  {
    "id": "igcse-bus-q-extra-142",
    "subtopicId": "igcse-bus-4-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.1 Production Methods (Job, Batch, Flow), Productivity & Lean Production.",
    "options": [
      "Recommend and evaluate Job, Batch, or Flow production for real-world businesses.",
      "In Production Methods (Job, Batch, Flow), Productivity & Lean Production, standard unit conversions are never required before applying formulas.",
      "Explain how training, motivation, and automation increase labour productivity.",
      "Job production and Batch production always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Recommend and evaluate Job, Batch, or Flow production for real-world businesses.\" and \"Explain how training, motivation, and automation increase labour productivity.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-143",
    "subtopicId": "igcse-bus-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.1 (Production Methods (Job, Batch, Flow), Productivity & Lean Production)?",
    "options": [
      "Never recommend JIT to a business with UNRELIABLE suppliers or erratic sudden demand spikes — JIT strictly requires ultra-reliable suppliers and accurate demand forecasting!",
      "Always omit units and rounding in Production Methods (Job, Batch, Flow), Productivity & Lean Production calculations.",
      "Never show intermediate working steps in 4.1 questions.",
      "Assume Job production is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never recommend JIT to a business with UNRELIABLE suppliers or erratic sudden demand spikes — JIT strictly requires ultra-reliable suppliers and accurate demand forecasting!"
  },
  {
    "id": "igcse-bus-q-extra-145",
    "subtopicId": "igcse-bus-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.2 (Costs, Economies of Scale, Break-Even Analysis & Quality), which of the following is the accurate definition of \"Break-even output\"?",
    "options": [
      "Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit).",
      "The inverse ratio of Contribution per unit measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Costs, Economies of Scale, Break-Even Analysis & Quality.",
      "An experimental error caused by neglecting unit conversions in Costs, Economies & Diseconomies of Scale."
    ],
    "correctIndex": 0,
    "explanation": "Break-even output is defined as: Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit)."
  },
  {
    "id": "igcse-bus-q-extra-146",
    "subtopicId": "igcse-bus-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Break-Even Analysis & Margin of Safety\" (4.2 Costs, Economies of Scale, Break-Even Analysis & Quality).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss). 2. Contribution per unit = Selling Price − Variable Cost per unit. Break-Even Output = Fixed Costs ÷ Contribution per unit.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss)."
        },
        {
          "id": "mp2",
          "markDescription": "Contribution per unit = Selling Price − Variable Cost per unit. Break-Even Output = Fixed Costs ÷ Contribution per unit."
        }
      ]
    },
    "explanation": "From Break-Even Analysis & Margin of Safety: Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss)."
  },
  {
    "id": "igcse-bus-q-extra-147",
    "subtopicId": "igcse-bus-4-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.2 Costs, Economies of Scale, Break-Even Analysis & Quality.",
    "options": [
      "Calculate FC, VC, TC, AC, contribution, break-even output, and margin of safety accurately.",
      "In Costs, Economies of Scale, Break-Even Analysis & Quality, standard unit conversions are never required before applying formulas.",
      "Explain 5 economies of scale and 3 diseconomies of scale with business context.",
      "Break-even output and Contribution per unit always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate FC, VC, TC, AC, contribution, break-even output, and margin of safety accurately.\" and \"Explain 5 economies of scale and 3 diseconomies of scale with business context.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-148",
    "subtopicId": "igcse-bus-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.2 (Costs, Economies of Scale, Break-Even Analysis & Quality)?",
    "options": [
      "When calculating break-even, ALWAYS divide Fixed Costs by (Price − Variable Cost per unit), NEVER by Selling Price alone!",
      "Always omit units and rounding in Costs, Economies of Scale, Break-Even Analysis & Quality calculations.",
      "Never show intermediate working steps in 4.2 questions.",
      "Assume Break-even output is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When calculating break-even, ALWAYS divide Fixed Costs by (Price − Variable Cost per unit), NEVER by Selling Price alone!"
  },
  {
    "id": "igcse-bus-q-extra-150",
    "subtopicId": "igcse-bus-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.1 (Sources of Business Finance & Cash-Flow Forecasting), which of the following is the accurate definition of \"Bank overdraft\"?",
    "options": [
      "Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.",
      "The inverse ratio of Net cash flow measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Sources of Business Finance & Cash-Flow Forecasting.",
      "An experimental error caused by neglecting unit conversions in Internal & External Sources of Finance."
    ],
    "correctIndex": 0,
    "explanation": "Bank overdraft is defined as: Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit."
  },
  {
    "id": "igcse-bus-q-extra-151",
    "subtopicId": "igcse-bus-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Constructing & Interpreting Cash-Flow Forecasts\" (5.1 Sources of Business Finance & Cash-Flow Forecasting).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments. 2. Core cash-flow equations (memorise these 3!):",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments."
        },
        {
          "id": "mp2",
          "markDescription": "Core cash-flow equations (memorise these 3!):"
        }
      ]
    },
    "explanation": "From Constructing & Interpreting Cash-Flow Forecasts: Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments."
  },
  {
    "id": "igcse-bus-q-extra-152",
    "subtopicId": "igcse-bus-5-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.1 Sources of Business Finance & Cash-Flow Forecasting.",
    "options": [
      "Match appropriate internal/external and short/long-term finance sources to specific business types (sole trader vs Plc).",
      "In Sources of Business Finance & Cash-Flow Forecasting, standard unit conversions are never required before applying formulas.",
      "Calculate Net Cash Flow, Opening Balance, and Closing Balance accurately across multi-month forecasts.",
      "Bank overdraft and Net cash flow always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Match appropriate internal/external and short/long-term finance sources to specific business types (sole trader vs Plc).\" and \"Calculate Net Cash Flow, Opening Balance, and Closing Balance accurately across multi-month forecasts.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-153",
    "subtopicId": "igcse-bus-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.1 (Sources of Business Finance & Cash-Flow Forecasting)?",
    "options": [
      "NEVER suggest \"retained profit\" for a brand-new start-up (it has no past profits yet!) and NEVER suggest \"issuing shares\" for a sole trader or partnership!",
      "Always omit units and rounding in Sources of Business Finance & Cash-Flow Forecasting calculations.",
      "Never show intermediate working steps in 5.1 questions.",
      "Assume Bank overdraft is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "NEVER suggest \"retained profit\" for a brand-new start-up (it has no past profits yet!) and NEVER suggest \"issuing shares\" for a sole trader or partnership!"
  },
  {
    "id": "igcse-bus-q-extra-155",
    "subtopicId": "igcse-bus-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.2 (Income Statements, Balance Sheets & Financial Ratios), which of the following is the accurate definition of \"Gross profit margin\"?",
    "options": [
      "(Gross Profit ÷ Revenue) × 100%, showing percentage of sales left after direct cost of sales.",
      "The inverse ratio of ROCE measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Income Statements, Balance Sheets & Financial Ratios.",
      "An experimental error caused by neglecting unit conversions in Income Statements (Profit & Loss Account)."
    ],
    "correctIndex": 0,
    "explanation": "Gross profit margin is defined as: (Gross Profit ÷ Revenue) × 100%, showing percentage of sales left after direct cost of sales."
  },
  {
    "id": "igcse-bus-q-extra-156",
    "subtopicId": "igcse-bus-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Statement of Financial Position (Balance Sheet)\" (5.2 Income Statements, Balance Sheets & Financial Ratios).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. A Balance Sheet is a SNAPSHOT on ONE specific date showing what the business owns (Assets), owes (Liabilities), and how it is funded (Equity): 2. Non-Current Assets: long-term items kept >1 year (buildings, machinery, vehicles). Current Assets: short-term items converted to cash within 1 year (inventory, trade receivables, cash).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "A Balance Sheet is a SNAPSHOT on ONE specific date showing what the business owns (Assets), owes (Liabilities), and how it is funded (Equity):"
        },
        {
          "id": "mp2",
          "markDescription": "Non-Current Assets: long-term items kept >1 year (buildings, machinery, vehicles). Current Assets: short-term items converted to cash within 1 year (inventory, trade receivables, cash)."
        }
      ]
    },
    "explanation": "From Statement of Financial Position (Balance Sheet): A Balance Sheet is a SNAPSHOT on ONE specific date showing what the business owns (Assets), owes (Liabilities), and how it is funded (Equity):"
  },
  {
    "id": "igcse-bus-q-extra-157",
    "subtopicId": "igcse-bus-5-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.2 Income Statements, Balance Sheets & Financial Ratios.",
    "options": [
      "Construct and interpret Income Statements (Gross Profit, Net Profit, Retained Profit).",
      "In Income Statements, Balance Sheets & Financial Ratios, standard unit conversions are never required before applying formulas.",
      "Classify Non-Current/Current Assets, Liabilities, Working Capital, and Capital Employed on a Balance Sheet.",
      "Gross profit margin and ROCE always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Construct and interpret Income Statements (Gross Profit, Net Profit, Retained Profit).\" and \"Classify Non-Current/Current Assets, Liabilities, Working Capital, and Capital Employed on a Balance Sheet.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-158",
    "subtopicId": "igcse-bus-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.2 (Income Statements, Balance Sheets & Financial Ratios)?",
    "options": [
      "Don’t just state a ratio number (e.g., \"Current ratio is 0.8:1\") — ALWAYS interpret it in context (\"below 1:1 means the firm has only $0.80 of current assets per $1 of short-term debt and risks a liquidity crisis!\").",
      "Always omit units and rounding in Income Statements, Balance Sheets & Financial Ratios calculations.",
      "Never show intermediate working steps in 5.2 questions.",
      "Assume Gross profit margin is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Don’t just state a ratio number (e.g., \"Current ratio is 0.8:1\") — ALWAYS interpret it in context (\"below 1:1 means the firm has only $0.80 of current assets per $1 of short-term debt and risks a liquidity crisis!\")."
  },
  {
    "id": "igcse-bus-q-extra-160",
    "subtopicId": "igcse-bus-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.1 (Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)), which of the following is the accurate definition of \"Recession\"?",
    "options": [
      "Period of falling national output (GDP), rising unemployment, and reduced consumer demand.",
      "The inverse ratio of Interest rate measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates).",
      "An experimental error caused by neglecting unit conversions in The Business Cycle & Government Economic Objectives."
    ],
    "correctIndex": 0,
    "explanation": "Recession is defined as: Period of falling national output (GDP), rising unemployment, and reduced consumer demand."
  },
  {
    "id": "igcse-bus-q-extra-161",
    "subtopicId": "igcse-bus-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Fiscal Policy (Taxes) & Monetary Policy (Interest Rates)\" (6.1 Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment. 2. Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment."
        },
        {
          "id": "mp2",
          "markDescription": "Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods."
        }
      ]
    },
    "explanation": "From Fiscal Policy (Taxes) & Monetary Policy (Interest Rates): Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment."
  },
  {
    "id": "igcse-bus-q-extra-162",
    "subtopicId": "igcse-bus-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.1 Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates).",
    "options": [
      "Analyse business impacts across Growth, Boom, Recession, and Slump.",
      "In Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates), standard unit conversions are never required before applying formulas.",
      "Trace the chain of effect of income tax, corporation tax, tariffs, and interest-rate hikes on both costs and demand.",
      "Recession and Interest rate always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Analyse business impacts across Growth, Boom, Recession, and Slump.\" and \"Trace the chain of effect of income tax, corporation tax, tariffs, and interest-rate hikes on both costs and demand.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-163",
    "subtopicId": "igcse-bus-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.1 (Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates))?",
    "options": [
      "Always check whether the case-study business is an EXPORTER (sells abroad — hurt by appreciation) or an IMPORTER (buys materials abroad — helped by appreciation)!",
      "Always omit units and rounding in Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates) calculations.",
      "Never show intermediate working steps in 6.1 questions.",
      "Assume Recession is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Always check whether the case-study business is an EXPORTER (sells abroad — hurt by appreciation) or an IMPORTER (buys materials abroad — helped by appreciation)!"
  },
  {
    "id": "igcse-bus-q-extra-165",
    "subtopicId": "igcse-bus-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.2 (Environmental & Ethical Issues, Globalisation & Multinational Companies), which of the following is the accurate definition of \"Sustainable development\"?",
    "options": [
      "Business growth and production that avoids depleting natural resources or damaging the environment for future generations.",
      "The inverse ratio of Tariff measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Environmental & Ethical Issues, Globalisation & Multinational Companies.",
      "An experimental error caused by neglecting unit conversions in Environmental Sustainability, Externalities & Pressure Groups."
    ],
    "correctIndex": 0,
    "explanation": "Sustainable development is defined as: Business growth and production that avoids depleting natural resources or damaging the environment for future generations."
  },
  {
    "id": "igcse-bus-q-extra-166",
    "subtopicId": "igcse-bus-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Business Ethics & Corporate Social Responsibility\" (6.2 Environmental & Ethical Issues, Globalisation & Multinational Companies).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery. 2. Short-term trade-off: paying fair wages and using sustainable suppliers raises unit costs compared with unethical rivals — potentially reducing short-term profits.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery."
        },
        {
          "id": "mp2",
          "markDescription": "Short-term trade-off: paying fair wages and using sustainable suppliers raises unit costs compared with unethical rivals — potentially reducing short-term profits."
        }
      ]
    },
    "explanation": "From Business Ethics & Corporate Social Responsibility: Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery."
  },
  {
    "id": "igcse-bus-q-extra-167",
    "subtopicId": "igcse-bus-6-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.2 Environmental & Ethical Issues, Globalisation & Multinational Companies.",
    "options": [
      "Evaluate environmental and ethical business trade-offs (short-term costs vs long-term brand reputation).",
      "In Environmental & Ethical Issues, Globalisation & Multinational Companies, standard unit conversions are never required before applying formulas.",
      "Distinguish tariffs from quotas and explain the effects of globalisation on local firms.",
      "Sustainable development and Tariff always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Evaluate environmental and ethical business trade-offs (short-term costs vs long-term brand reputation).\" and \"Distinguish tariffs from quotas and explain the effects of globalisation on local firms.\" are core specification points."
  },
  {
    "id": "igcse-bus-q-extra-168",
    "subtopicId": "igcse-bus-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.2 (Environmental & Ethical Issues, Globalisation & Multinational Companies)?",
    "options": [
      "A business that only EXPORTS goods overseas from a single factory at home is NOT a multinational company — an MNC physically operates facilities in multiple countries!",
      "Always omit units and rounding in Environmental & Ethical Issues, Globalisation & Multinational Companies calculations.",
      "Never show intermediate working steps in 6.2 questions.",
      "Assume Sustainable development is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "A business that only EXPORTS goods overseas from a single factory at home is NOT a multinational company — an MNC physically operates facilities in multiple countries!"
  }
];

export const IGCSE_BUSINESS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "igcse-bus-fc-1",
    "subtopicId": "igcse-bus-1-1",
    "front": "Why is Added Value NOT the same as Profit?",
    "backBullets": [
      "Added Value = Selling Price − Bought-in Materials",
      "Profit deducts ALL other expenses (wages, rent, energy, marketing) from added value"
    ]
  },
  {
    "id": "igcse-bus-fc-2",
    "subtopicId": "igcse-bus-1-2",
    "front": "Contrast Unlimited Liability vs Limited Liability.",
    "backBullets": [
      "Unlimited (Sole trader/Partnership): owners risk personal assets for business debts",
      "Limited (Ltd/Plc): shareholders can only lose what they invested in shares"
    ]
  },
  {
    "id": "igcse-bus-fc-3",
    "subtopicId": "igcse-bus-2-1",
    "front": "State the difference between Job Enlargement and Job Enrichment.",
    "backBullets": [
      "Enlargement: more tasks at the SAME skill level",
      "Enrichment: more complex, higher-responsibility tasks (Herzberg motivator)"
    ]
  },
  {
    "id": "igcse-bus-fc-4",
    "subtopicId": "igcse-bus-2-2",
    "front": "What is the difference between a Job Description and a Person Specification?",
    "backBullets": [
      "Job Description: duties, hours & responsibilities of the ROLE",
      "Person Specification: qualifications, skills & traits required of the APPLICANT"
    ]
  },
  {
    "id": "igcse-bus-fc-5",
    "subtopicId": "igcse-bus-3-2",
    "front": "How does Price Elasticity of Demand affect revenue if a business raises price?",
    "backBullets": [
      "Inelastic demand (necessity/loyal brand): raising price INCREASES total revenue",
      "Elastic demand (many close substitutes): raising price DECREASES total revenue"
    ]
  },
  {
    "id": "igcse-bus-fc-6",
    "subtopicId": "igcse-bus-4-1",
    "front": "Give one major advantage and one major risk of Just-in-Time (JIT) production.",
    "backBullets": [
      "Advantage: slashes warehouse rent, storage, and stock spoilage costs",
      "Risk: zero buffer stock — one late supplier delivery halts the entire factory"
    ]
  },
  {
    "id": "igcse-bus-fc-7",
    "subtopicId": "igcse-bus-4-2",
    "front": "Write the Break-Even Output and Margin of Safety formulas.",
    "backBullets": [
      "Break-Even = Fixed Costs ÷ (Selling Price − Variable Cost per unit)",
      "Margin of Safety = Actual Sales − Break-Even Output"
    ]
  },
  {
    "id": "igcse-bus-fc-8",
    "subtopicId": "igcse-bus-5-1",
    "front": "How can a profitable business run out of cash?",
    "backBullets": [
      "Giving customers long credit terms (60–90 days) while paying wages/suppliers immediately",
      "Heavy upfront capital expenditure or holding excessive unsold inventory"
    ]
  },
  {
    "id": "igcse-bus-fc-9",
    "subtopicId": "igcse-bus-5-2",
    "front": "Write the formulas for GPM, NPM, ROCE, Current Ratio, and Acid Test.",
    "backBullets": [
      "GPM = (GP/Rev)×100 | NPM = (NP/Rev)×100 | ROCE = (NP/Cap Emp)×100",
      "Current = CA ÷ CL | Acid Test = (CA − Inventory) ÷ CL"
    ]
  },
  {
    "id": "igcse-bus-fc-10",
    "subtopicId": "igcse-bus-6-1",
    "front": "What does SPICED stand for in exchange rates?",
    "backBullets": [
      "Strong Pound (or currency) = Imports Cheaper, Exports Dearer"
    ]
  },
  {
    "id": "igcse-bus-fc-extra-110",
    "subtopicId": "igcse-bus-1-1",
    "front": "1.1 The Economic Problem, Factors of Production & Specialisation: What are the essential exam points to remember?",
    "backBullets": [
      "The economic problem arises because human WANTS are unlimited while RESOURCES (factors of production) are scarce, forcing individuals, businesses, and governments to make choices.",
      "Opportunity cost is the next best alternative forgone when choosing one option over another (e.g., buying a delivery van instead of new factory machinery).",
      "The 4 Factors of Production: Land (natural resources), Labour (human workforce), Capital (machinery, equipment, finance), and Enterprise (risk-taking entrepreneurs combining the other three factors)."
    ],
    "hint": "Remember the 4 Factors of Production with CELL: Capital, Enterprise, Land, Labour!"
  },
  {
    "id": "igcse-bus-fc-extra-111",
    "subtopicId": "igcse-bus-1-1",
    "front": "1.1 Added Value & Entrepreneurs: What are the essential exam points to remember?",
    "backBullets": [
      "Added value = Selling price − Cost of bought-in materials and components.",
      "How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality.",
      "Successful entrepreneurs are innovative, risk-taking, resilient, creative, self-confident, and effective communicators. A business plan (objectives, market research, financial forecasts) reduces risk and helps secure bank loans or investor funding."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-112",
    "subtopicId": "igcse-bus-1-1",
    "front": "1.1 Economic Sectors & Mixed Economies: What are the essential exam points to remember?",
    "backBullets": [
      "Primary sector: extracts natural resources (farming, fishing, mining, oil extraction). Secondary sector: manufactures raw materials into finished/semi-finished goods (car assembly, construction, baking). Tertiary sector: provides services to consumers and firms (banking, retail, tourism, education).",
      "De-industrialisation occurs in developed economies as the tertiary sector grows while secondary manufacturing declines due to automation and lower-cost overseas competition.",
      "Mixed economy: Private sector firms are owned by individuals aiming for profit; Public sector organisations (state hospitals, public schools, policing) are owned by government to provide essential services free or affordable to all."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-113",
    "subtopicId": "igcse-bus-1-1",
    "front": "Define: Opportunity cost (1.1)",
    "backBullets": [
      "The next best alternative forgone when making a decision."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-114",
    "subtopicId": "igcse-bus-1-2",
    "front": "1.2 Measuring Business Size & Methods of Growth: What are the essential exam points to remember?",
    "backBullets": [
      "Business size is measured by number of employees, value of output, value of sales revenue, or capital employed (note: PROFIT is NOT a measure of business size!).",
      "Internal (organic) growth expands using own resources (opening new stores, launching new products). External growth occurs through mergers or takeovers:",
      "Horizontal integration: merging with a competitor at the SAME stage of production (reduces competition, increases market share & economies of scale)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-115",
    "subtopicId": "igcse-bus-1-2",
    "front": "1.2 Types of Business Organisation & Liability: What are the essential exam points to remember?",
    "backBullets": [
      "Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity.",
      "Incorporated companies (Private Limited Company, Ltd; Public Limited Company, Plc): Separate legal identity → LIMITED LIABILITY (shareholders can only lose the money they invested in shares) and continuity.",
      "Ltd vs Plc: Ltd shares are sold privately to family/friends (retains control, no hostile takeover risk). Plc shares trade publicly on a stock exchange (raises massive capital, but must publish full accounts, faces takeover risk, and suffers divorce between ownership and control)."
    ],
    "hint": "Incorporated (Ltd & Plc) = Separate legal body = Limited Liability + Continuity!"
  },
  {
    "id": "igcse-bus-fc-extra-116",
    "subtopicId": "igcse-bus-1-2",
    "front": "1.2 Business Objectives & Stakeholder Conflicts: What are the essential exam points to remember?",
    "backBullets": [
      "Private sector objectives: Survival (new start-ups/recessions), Profit maximisation, Growth, Market share, and Social/Environmental goals (social enterprises reinvest profits into community causes).",
      "Internal stakeholders: Owners/shareholders (high dividends & share price), Employees (higher wages & job security), Managers (bonuses & power).",
      "External stakeholders: Customers (low prices & high quality), Suppliers (prompt payment & regular orders), Banks (loan repayment), Government (taxes & jobs), Local community (jobs without pollution)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-117",
    "subtopicId": "igcse-bus-1-2",
    "front": "Define: Horizontal integration (1.2)",
    "backBullets": [
      "Merger or takeover between two firms operating in the exact same industry and stage of production."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-118",
    "subtopicId": "igcse-bus-2-1",
    "front": "2.1 Why Motivation Matters & Motivational Theorists: What are the essential exam points to remember?",
    "backBullets": [
      "Well-motivated employees deliver higher labour productivity, better product quality, lower absenteeism, and lower staff turnover (saving recruitment and training costs).",
      "F.W. Taylor (Scientific Management / \"Economic Man\"): Argued workers are motivated primarily by MONEY. Advocated breaking work into simple tasks and paying PIECE-RATE wages linked strictly to output.",
      "Abraham Maslow (Hierarchy of Needs — 5 ascending levels): (1) Physiological (wages for food/shelter), (2) Safety/Security (contracts, safe workplace), (3) Social (teamwork, belonging), (4) Esteem (recognition, status, promotion), (5) Self-actualisation (reaching full creative potential). Lower needs must be satisfied before higher needs motivate."
    ],
    "hint": "Maslow bottom-to-top: Please Stay Safe, Everyone Succeeds (Physiological, Safety, Social, Esteem, Self-actualisation)!"
  },
  {
    "id": "igcse-bus-fc-extra-119",
    "subtopicId": "igcse-bus-2-1",
    "front": "2.1 Financial Rewards: What are the essential exam points to remember?",
    "backBullets": [
      "Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised.",
      "Piece rate: paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses).",
      "Salary: fixed annual pay divided monthly for managers/office staff — gives security, no overtime pay."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-120",
    "subtopicId": "igcse-bus-2-1",
    "front": "2.1 Non-Financial Methods of Motivation: What are the essential exam points to remember?",
    "backBullets": [
      "Job rotation: moving employees periodically between different tasks at the same skill level — cuts boredom and builds multi-skilled cover, though does not make tasks more challenging.",
      "Job enlargement: adding extra tasks of a similar skill level to broaden variety.",
      "Job enrichment (Herzberg’s favourite!): adding MORE CHALLENGING, higher-responsibility tasks (e.g., planning, quality inspection, decision-making) so workers feel trusted and achieve self-esteem."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-121",
    "subtopicId": "igcse-bus-2-1",
    "front": "Define: Piece rate (2.1)",
    "backBullets": [
      "Payment method rewarding workers a fixed amount for every unit of output completed."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-122",
    "subtopicId": "igcse-bus-2-2",
    "front": "2.2 Organisational Charts, Span of Control & Leadership Styles: What are the essential exam points to remember?",
    "backBullets": [
      "Chain of command: structure showing who reports to whom from CEO down to shop-floor workers. Span of control: number of subordinates reporting directly to one manager.",
      "Tall hierarchy (long chain, narrow span): tight supervision and clear promotion paths, but slow communication and high management salary costs. Flat/delayered structure (short chain, wide span): faster communication, lower overheads, more delegation — but managers can become overstretched.",
      "Delegation: passing authority to perform a task down to a subordinate (while the manager retains final accountability). Frees managers for strategic work and motivates staff."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-123",
    "subtopicId": "igcse-bus-2-2",
    "front": "2.2 Recruitment, Selection & Training: What are the essential exam points to remember?",
    "backBullets": [
      "Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer.",
      "Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally).",
      "Induction training welcomes new recruits (health & safety, tour, policies). On-the-job training (shadowing experienced workers: cheap, relevant, output still made — but can pass on bad habits). Off-the-job training (external courses/colleges: expert tutors, qualifications — but expensive and lost work hours)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-124",
    "subtopicId": "igcse-bus-2-2",
    "front": "2.2 Effective Communication & Barriers: What are the essential exam points to remember?",
    "backBullets": [
      "Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding.",
      "Internal communication occurs within the firm (e.g., team meetings, intranet); External communication occurs with outsiders (customers, suppliers, tax authorities).",
      "Common barriers to communication: technical jargon, long chain of command causing distortion, overloaded channels, noisy environments, cultural/language differences, or lack of trust."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-125",
    "subtopicId": "igcse-bus-2-2",
    "front": "Define: Chain of command (2.2)",
    "backBullets": [
      "The line of authority through which instructions are passed down an organisation."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-126",
    "subtopicId": "igcse-bus-3-1",
    "front": "3.1 Marketing, Mass Markets & Niche Markets: What are the essential exam points to remember?",
    "backBullets": [
      "Marketing identifies, anticipates, and satisfies customer wants profitably — building customer loyalty and adapting to changing tastes, technology, and competition.",
      "Mass marketing targets the whole market with a standardised product (e.g., Coca-Cola, toothpaste): huge sales volume and economies of scale, but fierce competition and high advertising costs.",
      "Niche marketing targets a small, specialised segment with specific needs (e.g., vegan luxury hiking boots): less direct competition and ability to charge premium prices — but smaller total sales volume and high vulnerability if niche tastes change."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-127",
    "subtopicId": "igcse-bus-3-1",
    "front": "3.1 Market Segmentation: What are the essential exam points to remember?",
    "backBullets": [
      "Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product.",
      "Benefits: Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-128",
    "subtopicId": "igcse-bus-3-1",
    "front": "3.1 Primary vs Secondary Market Research & Sampling: What are the essential exam points to remember?",
    "backBullets": [
      "Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming.",
      "Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals.",
      "Quantitative data = numerical statistics (\"how many?\"). Qualitative data = opinions, attitudes, and reasons (\"why?\")."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-129",
    "subtopicId": "igcse-bus-3-1",
    "front": "Define: Market segmentation (3.1)",
    "backBullets": [
      "Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-130",
    "subtopicId": "igcse-bus-3-1",
    "front": "Define: Primary research (3.1)",
    "backBullets": [
      "First-hand field research gathered specifically for a business’s current decision."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-131",
    "subtopicId": "igcse-bus-3-2",
    "front": "3.2 Product: Branding, Packaging & The Product Life Cycle: What are the essential exam points to remember?",
    "backBullets": [
      "Product covers design, quality, USP (Unique Selling Point), brand image (builds loyalty and allows higher prices), and packaging (protects, informs, attracts eye on shelves).",
      "Product Life Cycle (PLC) stages: Development (high R&D cost, zero sales) → Introduction (slow sales, heavy promotion) → Growth (rapid sales growth, profits emerge) → Maturity (peak sales, fierce competition) → Decline (falling sales due to new rivals/obsolescence).",
      "Extension strategies prevent decline during late maturity: adding new flavours/features, targeting new international markets, redesigning packaging, or finding new uses for the product."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-132",
    "subtopicId": "igcse-bus-3-2",
    "front": "3.2 Pricing Strategies & Price Elasticity of Demand (PED): What are the essential exam points to remember?",
    "backBullets": [
      "Cost-plus pricing: Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand).",
      "Competitive pricing: matching rival prices (safe in crowded markets, requires strong non-price differentiation).",
      "Penetration pricing: setting a LOW launch price to break into a market quickly and grab market share (sacrifices early profit margin)."
    ],
    "hint": "Inelastic = I Need it (petrol, medicine, iPhone loyalists) → raise price to boost revenue! Elastic = Easily switched (many substitutes) → cut price to boost revenue!"
  },
  {
    "id": "igcse-bus-fc-extra-133",
    "subtopicId": "igcse-bus-3-2",
    "front": "3.2 Place (Channels of Distribution), Promotion & E-Commerce: What are the essential exam points to remember?",
    "backBullets": [
      "Distribution channels: Direct (Producer → Consumer: keeps full profit margin, direct customer feedback, great for e-commerce/services); 1-intermediary (Producer → Retailer → Consumer); 2-intermediaries (Producer → Wholesaler → Retailer → Consumer: wholesaler breaks bulk for small shops, though each middleman adds a mark-up).",
      "Promotion aims to inform, persuade, and build brand image: Above-the-line advertising (TV, billboards, social media ads) vs Below-the-line sales promotion (BOGOF, free samples, loyalty cards, sponsorships, PR).",
      "E-commerce & digital marketing: opens 24/7 global reach, slashes physical store rent, and enables hyper-targeted social media ads — but increases delivery/returns costs, cybersecurity risks, and inability for buyers to inspect items physically."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-134",
    "subtopicId": "igcse-bus-3-2",
    "front": "Define: Product life cycle (3.2)",
    "backBullets": [
      "Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-135",
    "subtopicId": "igcse-bus-4-1",
    "front": "4.1 Job, Batch & Flow Production Methods: What are the essential exam points to remember?",
    "backBullets": [
      "Job production: making ONE unique custom-built item at a time to exact customer specs (e.g., wedding dress, custom bridge, bespoke furniture). High quality, motivating for skilled workers, premium price — but high unit cost and slow.",
      "Batch production: making a SET QUANTITY (batch) of identical items before switching machinery to another batch (e.g., bakery making 200 white loaves then 200 rye loaves, clothing sizes). Flexible variety + some economies of scale — but downtime resetting machines and higher work-in-progress inventory.",
      "Flow production (mass production): continuous automated assembly line producing high volumes of standardised items 24/7 (e.g., cars, soft drinks, smartphones). Lowest unit cost and massive output — but huge initial capital cost, inflexible to custom requests, boring jobs, and one breakdown halts the entire line!"
    ]
  },
  {
    "id": "igcse-bus-fc-extra-136",
    "subtopicId": "igcse-bus-4-1",
    "front": "4.1 Productivity, Automation & Technology: What are the essential exam points to remember?",
    "backBullets": [
      "Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness.",
      "Ways to boost productivity: better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail.",
      "Automation trade-off: vastly higher speed, accuracy, and 24/7 operation without fatigue — but expensive capital setup, staff redundancy fears, and technical maintenance costs."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-137",
    "subtopicId": "igcse-bus-4-1",
    "front": "4.1 Lean Production: Kaizen & Just-in-Time (JIT): What are the essential exam points to remember?",
    "backBullets": [
      "Lean production systematically eliminates waste (excess stock, defects, waiting time, unnecessary movement) to cut costs without sacrificing quality.",
      "Kaizen (\"continuous improvement\"): regular small-group worker meetings identify tiny daily improvements to layout, workflow, and waste reduction — boosting both efficiency and employee empowerment.",
      "Just-in-Time (JIT) inventory control: raw materials arrive from suppliers only moments before they are needed on the production line, holding near-zero buffer stock."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-138",
    "subtopicId": "igcse-bus-4-1",
    "front": "Define: Job production (4.1)",
    "backBullets": [
      "One-off custom production tailored to an individual customer’s exact order."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-139",
    "subtopicId": "igcse-bus-4-2",
    "front": "4.2 Costs, Economies & Diseconomies of Scale: What are the essential exam points to remember?",
    "backBullets": [
      "Fixed Costs (FC) do NOT change with output in the short run (rent, insurance, management salaries). Variable Costs (VC) change directly with output (raw materials, piece-rate wages, packaging).",
      "Total Cost (TC) = FC + Total VC. Average Cost per unit (AC) = Total Cost ÷ Output.",
      "Economies of scale: factors causing AVERAGE COST PER UNIT to FALL as a business grows larger — Purchasing (bulk-buying discounts), Technical (specialist high-speed machinery), Financial (cheaper bank loans), Marketing (spreading ad spend over huge output), Managerial (hiring functional specialists)."
    ],
    "hint": "Remember 5 Economies of Scale with Really Pretty Tigers Make Money (or P-T-F-M-M: Purchasing, Technical, Financial, Marketing, Managerial)!"
  },
  {
    "id": "igcse-bus-fc-extra-140",
    "subtopicId": "igcse-bus-4-2",
    "front": "4.2 Break-Even Analysis & Margin of Safety: What are the essential exam points to remember?",
    "backBullets": [
      "Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss).",
      "Contribution per unit = Selling Price − Variable Cost per unit. Break-Even Output = Fixed Costs ÷ Contribution per unit.",
      "Worked example: Fixed costs = $12,000; selling price = $25; variable cost = $10/unit. Contribution = $25 − $10 = $15. Break-even = 12,000 ÷ 15 = 800 units."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-141",
    "subtopicId": "igcse-bus-4-2",
    "front": "4.2 Quality Control vs Quality Assurance & Location Decisions: What are the essential exam points to remember?",
    "backBullets": [
      "Quality Control (QC): inspectors check finished products at the END of the production line to spot defects. Stops faulty goods reaching customers, but reactive — defects are only caught AFTER materials and labour have already been wasted!",
      "Quality Assurance (QA): builds quality checks into EVERY stage of design and production, making every worker responsible (\"right first time\", e.g., ISO 9000 / Total Quality Management). Cuts scrap and rework, boosts worker pride — requires comprehensive training and full workforce buy-in.",
      "Location factors: Manufacturing weighs raw material proximity, transport links, land/labour costs, and government grants; Retailing weighs high footfall, parking, visibility, and local competition."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-142",
    "subtopicId": "igcse-bus-4-2",
    "front": "Define: Break-even output (4.2)",
    "backBullets": [
      "Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-143",
    "subtopicId": "igcse-bus-5-1",
    "front": "5.1 Internal & External Sources of Finance: What are the essential exam points to remember?",
    "backBullets": [
      "Internal sources (no interest, no loss of ownership control, but limited amount): Retained profit (ploughed-back past profits — zero interest, unavailable to brand-new start-ups), Sale of unwanted non-current assets, and Reducing inventory/working capital.",
      "External short-term sources (<1 year, for working capital): Bank overdraft (flexible, interest charged only on amount overdrawn, but high rate and repayable on demand), Trade credit (buy from suppliers now, pay in 30–60 days — free finance if paid on time), Debt factoring.",
      "External long-term sources (>1 year, for expansion/machinery): Bank loan / Mortgage (fixed repayments, interest charged, often requires collateral), Issuing Shares (Ltd/Plc only — permanent capital with NO repayment or fixed interest, but dilutes ownership control & dividends expected), Leasing, Venture Capital, Crowdfunding, Government Grants."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-144",
    "subtopicId": "igcse-bus-5-1",
    "front": "5.1 Constructing & Interpreting Cash-Flow Forecasts: What are the essential exam points to remember?",
    "backBullets": [
      "Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments.",
      "Core cash-flow equations (memorise these 3!):",
      "1. Net Cash Flow = Total Cash Inflows − Total Cash Outflows."
    ],
    "hint": "Opening + Net Cash Flow = Closing → Carry Closing straight across to next month’s Opening!"
  },
  {
    "id": "igcse-bus-fc-extra-145",
    "subtopicId": "igcse-bus-5-1",
    "front": "5.1 Overcoming Short-Term Cash-Flow Problems: What are the essential exam points to remember?",
    "backBullets": [
      "Increase/speed up inflows: arrange a short-term bank overdraft, chase overdue trade receivables (offer small discounts for prompt payment), ask customers for cash/deposits upfront, or sell idle assets.",
      "Delay/reduce outflows: negotiate longer trade credit from suppliers (e.g., 60 days instead of 30), lease new machinery instead of buying outright, or postpone non-essential capital spending.",
      "Evaluate trade-offs: cutting customer credit terms boosts cash quickly, but may drive loyal B2B clients toward competitors offering 60-day credit!"
    ]
  },
  {
    "id": "igcse-bus-fc-extra-146",
    "subtopicId": "igcse-bus-5-1",
    "front": "Define: Bank overdraft (5.1)",
    "backBullets": [
      "Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-147",
    "subtopicId": "igcse-bus-5-2",
    "front": "5.2 Income Statements (Profit & Loss Account): What are the essential exam points to remember?",
    "backBullets": [
      "An Income Statement records revenue, costs, and profit earned OVER A PERIOD OF TIME (usually 1 year):",
      "Revenue (Sales) = Selling Price × Quantity Sold.",
      "Gross Profit = Revenue − Cost of Sales (direct raw materials/stock bought for resale)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-148",
    "subtopicId": "igcse-bus-5-2",
    "front": "5.2 Statement of Financial Position (Balance Sheet): What are the essential exam points to remember?",
    "backBullets": [
      "A Balance Sheet is a SNAPSHOT on ONE specific date showing what the business owns (Assets), owes (Liabilities), and how it is funded (Equity):",
      "Non-Current Assets: long-term items kept >1 year (buildings, machinery, vehicles). Current Assets: short-term items converted to cash within 1 year (inventory, trade receivables, cash).",
      "Current Liabilities: debts due within 1 year (trade payables, overdraft). Non-Current Liabilities: long-term debts due >1 year (bank loans, mortgages)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-149",
    "subtopicId": "igcse-bus-5-2",
    "front": "5.2 Profitability & Liquidity Ratios: What are the essential exam points to remember?",
    "backBullets": [
      "Gross Profit Margin (GPM) = (Gross Profit ÷ Revenue) × 100%. Raised by increasing prices or finding cheaper suppliers.",
      "Net Profit Margin (NPM) = (Net Profit ÷ Revenue) × 100%. Raised by cutting overhead expenses (energy, rent, admin).",
      "Return on Capital Employed (ROCE) = (Net Profit ÷ Capital Employed) × 100%. Shows % return earned per $100 invested in the business (compare against bank interest rates!)."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-150",
    "subtopicId": "igcse-bus-5-2",
    "front": "Define: Gross profit margin (5.2)",
    "backBullets": [
      "(Gross Profit ÷ Revenue) × 100%, showing percentage of sales left after direct cost of sales."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-151",
    "subtopicId": "igcse-bus-6-1",
    "front": "6.1 The Business Cycle & Government Economic Objectives: What are the essential exam points to remember?",
    "backBullets": [
      "Governments aim for 4 macroeconomic goals: Steady Economic Growth (rising GDP), Low Inflation (stable prices), Low Unemployment, and a healthy Balance of Payments.",
      "The 4 Business Cycle stages: Growth (rising GDP, sales & jobs) → Boom (peak spending, skill shortages, rising wages & inflation) → Recession (falling GDP for 2+ quarters, rising unemployment, consumers cut luxury spending) → Slump (deep prolonged downturn, business closures).",
      "How firms adapt in a recession: shift toward value/essential product lines, cut fixed overheads, offer promotional discounts, or target growing overseas export markets."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-152",
    "subtopicId": "igcse-bus-6-1",
    "front": "6.1 Fiscal Policy (Taxes) & Monetary Policy (Interest Rates): What are the essential exam points to remember?",
    "backBullets": [
      "Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment.",
      "Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods.",
      "Monetary Policy (Interest Rates): When the central bank RAISES interest rates: (1) Borrowing becomes more expensive → firms delay loans/expansion; (2) Existing variable-rate loan/mortgage payments jump → less disposable income for consumers; (3) Saving becomes more rewarding → consumers spend less; (4) Hot-money inflows strengthen the exchange rate, hurting exporters!"
    ]
  },
  {
    "id": "igcse-bus-fc-extra-153",
    "subtopicId": "igcse-bus-6-1",
    "front": "6.1 Exchange Rate Movements (Appreciation vs Depreciation): What are the essential exam points to remember?",
    "backBullets": [
      "Exchange rate = price of one currency expressed in another (e.g., £1 = $1.25).",
      "Currency APPRECIATION (stronger currency, e.g., £1 rises from $1.25 to $1.40):",
      "• Imports become CHEAPER in home currency (great for firms buying foreign raw materials!)."
    ],
    "hint": "Use SPICED! Strong Pound (or currency) = Imports Cheaper, Exports Dearer! Flip every word for a weak/depreciating currency (WPIDEC)."
  },
  {
    "id": "igcse-bus-fc-extra-154",
    "subtopicId": "igcse-bus-6-1",
    "front": "Define: Recession (6.1)",
    "backBullets": [
      "Period of falling national output (GDP), rising unemployment, and reduced consumer demand."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-155",
    "subtopicId": "igcse-bus-6-2",
    "front": "6.2 Environmental Sustainability, Externalities & Pressure Groups: What are the essential exam points to remember?",
    "backBullets": [
      "Social cost = Private cost + External cost (negative externalities like factory air pollution, river waste, traffic congestion). Sustainable development meets today’s needs without compromising future generations (renewable energy, recyclable packaging, ethical sourcing).",
      "Pressure groups (e.g., Greenpeace) influence firms through consumer boycotts, media campaigns, and lobbying governments for stricter environmental laws, carbon taxes, and fines.",
      "Going green costs more in the short run (cleaner machinery, biodegradable packaging), but builds positive PR, attracts eco-conscious consumers, avoids legal fines, and cuts long-term energy bills."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-156",
    "subtopicId": "igcse-bus-6-2",
    "front": "6.2 Business Ethics & Corporate Social Responsibility: What are the essential exam points to remember?",
    "backBullets": [
      "Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery.",
      "Short-term trade-off: paying fair wages and using sustainable suppliers raises unit costs compared with unethical rivals — potentially reducing short-term profits.",
      "Long-term payoff: prevents reputational scandals/boycotts, strengthens brand loyalty, attracts top employees, and appeals to ethical investors."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-157",
    "subtopicId": "igcse-bus-6-2",
    "front": "6.2 Globalisation, Protectionism & Multinational Companies (MNCs): What are the essential exam points to remember?",
    "backBullets": [
      "Globalisation is the growing worldwide integration of markets driven by freer trade agreements, cheap container shipping/air travel, and the internet.",
      "Protectionism restricts imports via Tariffs (taxes on imported goods raising their price) and Quotas (physical numerical limits on imported volume) to shelter domestic jobs — though rivals may retaliate.",
      "A Multinational Company (MNC) has operations/factories in MORE than one country (not merely exporting!). Why become an MNC? Lower wage/land costs, closeness to raw materials, bypassing import tariffs, and accessing booming new consumer markets."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-158",
    "subtopicId": "igcse-bus-6-2",
    "front": "Define: Sustainable development (6.2)",
    "backBullets": [
      "Business growth and production that avoids depleting natural resources or damaging the environment for future generations."
    ]
  },
  {
    "id": "igcse-bus-fc-extra-159",
    "subtopicId": "igcse-bus-6-2",
    "front": "Define: Tariff (6.2)",
    "backBullets": [
      "Tax placed on imported products to protect domestic industries."
    ]
  }
];

export const IGCSE_BUSINESS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-igcse-bus-topic-1",
    "slug": "topic-1-understanding-business-activity",
    "title": "Topic 1: Understanding Business Activity — Complete Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Understanding Business Activity",
    "summary": "One-page revision summary covering 1.1 Enterprise, Added Value & Classification of Businesses; 1.2 Business Growth, Types of Organisation, Objectives & Stakeholders.",
    "accentColor": "#8d22cc",
    "sections": [
      {
        "heading": "1.1 Enterprise, Added Value & Classification of Businesses",
        "formula": "Added Value = Selling Price − Cost of Bought-in Materials",
        "points": [
          "Explain scarcity, opportunity cost, specialisation, and the 4 factors of production.",
          "Calculate added value and explain how firms add value without confusing it with profit.",
          "Tip: Remember the 4 Factors of Production with CELL: Capital, Enterprise, Land, Labour!"
        ]
      },
      {
        "heading": "1.2 Business Growth, Types of Organisation, Objectives & Stakeholders",
        "formula": "Capital Employed = Shareholders’ Equity + Non-Current Liabilities",
        "points": [
          "Compare internal growth with horizontal, vertical, and conglomerate integration.",
          "Contrast sole traders, partnerships, Ltd, Plc, franchises, and joint ventures on liability, control, and capital.",
          "Watch out: NEVER list \"profit\" as a valid way to measure the size of a business — a giant airline can make a loss while a small boutique consultancy makes high profit!"
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-bus-topic-2",
    "slug": "topic-2-people-in-business",
    "title": "Topic 2: People in Business — Complete Cheat Sheet",
    "topicNumber": 2,
    "topicName": "People in Business",
    "summary": "One-page revision summary covering 2.1 Motivating Employees (Taylor, Maslow, Herzberg) & Rewards; 2.2 Organisation Structure, Leadership, Recruitment, Training & Communication.",
    "accentColor": "#1a96f3",
    "sections": [
      {
        "heading": "2.1 Motivating Employees (Taylor, Maslow, Herzberg) & Rewards",
        "formula": "Labour Productivity = Total Output ÷ Number of Employees",
        "points": [
          "Compare Taylor, Maslow’s 5-level hierarchy, and Herzberg’s Hygiene vs Motivator factors.",
          "Evaluate financial pay systems (time rate, piece rate, salary, commission, profit sharing) for specific job roles.",
          "Tip: Maslow bottom-to-top: Please Stay Safe, Everyone Succeeds (Physiological, Safety, Social, Esteem, Self-actualisation)!"
        ]
      },
      {
        "heading": "2.2 Organisation Structure, Leadership, Recruitment, Training & Communication",
        "formula": "Piece Rate Pay = Units Produced × Rate per Unit",
        "points": [
          "Analyse tall vs flat hierarchies, span of control, and the advantages of delegation.",
          "Select suitable leadership styles (autocratic, democratic, laissez-faire) for different business scenarios."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-bus-topic-3",
    "slug": "topic-3-marketing",
    "title": "Topic 3: Marketing — Complete Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Marketing",
    "summary": "One-page revision summary covering 3.1 Market Segmentation, Niche vs Mass Markets & Market Research; 3.2 The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "3.1 Market Segmentation, Niche vs Mass Markets & Market Research",
        "formula": "Market Share (%) = (Firm Sales ÷ Total Market Sales) × 100",
        "points": [
          "Evaluate niche vs mass marketing strategies for start-ups and large brands.",
          "Recommend appropriate segmentation criteria for a given product."
        ]
      },
      {
        "heading": "3.2 The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce",
        "formula": "Cost-Plus Price = Unit Cost × (1 + % Mark-up)",
        "points": [
          "Draw the Product Life Cycle and recommend realistic extension strategies.",
          "Select and justify pricing strategies using Price Elasticity of Demand (elastic vs inelastic)."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-bus-topic-4",
    "slug": "topic-4-operations-management",
    "title": "Topic 4: Operations Management — Complete Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Operations Management",
    "summary": "One-page revision summary covering 4.1 Production Methods (Job, Batch, Flow), Productivity & Lean Production; 4.2 Costs, Economies of Scale, Break-Even Analysis & Quality.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "4.1 Production Methods (Job, Batch, Flow), Productivity & Lean Production",
        "formula": "TC = FC + VC  |  AC = TC ÷ Output  |  Contribution = Price − AVC",
        "points": [
          "Recommend and evaluate Job, Batch, or Flow production for real-world businesses.",
          "Explain how training, motivation, and automation increase labour productivity."
        ]
      },
      {
        "heading": "4.2 Costs, Economies of Scale, Break-Even Analysis & Quality",
        "formula": "Break-Even Output = FC ÷ Contribution  |  Margin of Safety = Actual − BE",
        "points": [
          "Calculate FC, VC, TC, AC, contribution, break-even output, and margin of safety accurately.",
          "Explain 5 economies of scale and 3 diseconomies of scale with business context.",
          "Tip: Remember 5 Economies of Scale with Really Pretty Tigers Make Money (or P-T-F-M-M: Purchasing, Technical, Financial, Marketing, Managerial)!"
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-bus-topic-5",
    "slug": "topic-5-financial-information-decisions",
    "title": "Topic 5: Financial Information & Decisions — Complete Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Financial Information & Decisions",
    "summary": "One-page revision summary covering 5.1 Sources of Business Finance & Cash-Flow Forecasting; 5.2 Income Statements, Balance Sheets & Financial Ratios.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "5.1 Sources of Business Finance & Cash-Flow Forecasting",
        "formula": "Net Cash Flow = Inflows − Outflows  |  Closing = Opening + NCF",
        "points": [
          "Match appropriate internal/external and short/long-term finance sources to specific business types (sole trader vs Plc).",
          "Calculate Net Cash Flow, Opening Balance, and Closing Balance accurately across multi-month forecasts.",
          "Watch out: NEVER suggest \"retained profit\" for a brand-new start-up (it has no past profits yet!) and NEVER suggest \"issuing shares\" for a sole trader or partnership!"
        ]
      },
      {
        "heading": "5.2 Income Statements, Balance Sheets & Financial Ratios",
        "formula": "GPM = (GP/Rev)×100  |  NPM = (NP/Rev)×100  |  ROCE = (NP/CapEmp)×100  |  Acid Test = (CA−Stock)/CL",
        "points": [
          "Construct and interpret Income Statements (Gross Profit, Net Profit, Retained Profit).",
          "Classify Non-Current/Current Assets, Liabilities, Working Capital, and Capital Employed on a Balance Sheet."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-bus-topic-6",
    "slug": "topic-6-external-influences-on-business-activity",
    "title": "Topic 6: External Influences on Business Activity — Complete Cheat Sheet",
    "topicNumber": 6,
    "topicName": "External Influences on Business Activity",
    "summary": "One-page revision summary covering 6.1 Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates); 6.2 Environmental & Ethical Issues, Globalisation & Multinational Companies.",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "6.1 Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)",
        "formula": "Social Cost = Private Cost + External Cost",
        "points": [
          "Analyse business impacts across Growth, Boom, Recession, and Slump.",
          "Trace the chain of effect of income tax, corporation tax, tariffs, and interest-rate hikes on both costs and demand."
        ]
      },
      {
        "heading": "6.2 Environmental & Ethical Issues, Globalisation & Multinational Companies",
        "formula": "SPICED: Stronger Currency → Imports Cheaper, Exports Dearer",
        "points": [
          "Evaluate environmental and ethical business trade-offs (short-term costs vs long-term brand reputation).",
          "Distinguish tariffs from quotas and explain the effects of globalisation on local firms."
        ]
      }
    ]
  }
];

export const IGCSE_BUSINESS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "igcse-bus-exam-1",
    "subtopicId": "igcse-bus-5-2",
    "number": 1,
    "stimulus": "Verde Textiles Ltd reports Revenue of $400,000, Cost of Sales of $240,000, Operating Expenses of $100,000, Current Assets of $80,000 (including Inventory of $35,000), and Current Liabilities of $50,000.",
    "parts": [
      {
        "id": "igcse-bus-exam-1a",
        "label": "a)",
        "prompt": "Calculate Verde Textiles Ltd’s Gross Profit Margin (%).",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Gross Profit = 400,000 − 240,000 = $160,000. GPM = (160,000 ÷ 400,000) × 100 = 40%.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Gross profit = $160,000",
              "requiredKeywordGroups": [
                [
                  "160000",
                  "160,000"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "GPM = 40%",
              "numericMatch": {
                "value": 40,
                "tolerance": 0.1
              }
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-1b",
        "label": "b)",
        "prompt": "Calculate the Acid Test Ratio (to 2 decimal places).",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "(80,000 − 35,000) ÷ 50,000 = 45,000 ÷ 50,000 = 0.90 : 1.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Subtract inventory: 80,000 − 35,000 = 45,000",
              "requiredKeywordGroups": [
                [
                  "45000",
                  "45,000"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Acid test ratio = 0.90",
              "numericMatch": {
                "value": 0.9,
                "tolerance": 0.02
              }
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-1c",
        "label": "c)",
        "prompt": "Explain one key principle or common pitfall when solving exam problems on Income Statements, Balance Sheets & Financial Ratios.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Don’t just state a ratio number (e.g., \"Current ratio is 0.8:1\") — ALWAYS interpret it in context (\"below 1:1 means the firm has only $0.80 of current assets per $1 of short-term debt and risks a liquidity crisis!\").",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies key rule: Construct and interpret Income Statements (Gross Profit, Net Profit, Retained Profit)."
            },
            {
              "id": "mp2",
              "markDescription": "Explains correct method/units/application clearly"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-2",
    "subtopicId": "igcse-bus-1-1",
    "number": 2,
    "stimulus": "Structured exam question on Topic 1.1 (Enterprise, Added Value & Classification of Businesses). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-2a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Enterprise, Added Value & Classification of Businesses?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Explain scarcity, opportunity cost, specialisation, and the 4 factors of production.",
          "It violates the core rule of Enterprise, Added Value & Classification of Businesses by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Opportunity cost.",
          "It assumes Added value remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-2b",
        "label": "b)",
        "prompt": "Define \"Opportunity cost\" and explain the key principles covered in \"Added Value & Entrepreneurs\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Opportunity cost: The next best alternative forgone when making a decision. Furthermore, Added value = Selling price − Cost of bought-in materials and components. How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Opportunity cost: The next best alternative forgone when making a decision."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Added value = Selling price − Cost of bought-in materials and components."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-2c",
        "label": "c)",
        "prompt": "Apply \"Economic Sectors & Mixed Economies\" to explain how examiners award full marks on Enterprise, Added Value & Classification of Businesses problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Primary sector: extracts natural resources (farming, fishing, mining, oil extraction). Secondary sector: manufactures raw materials into finished/semi-finished goods (car assembly, construction, baking). Tertiary sector: provides services to consumers and firms (banking, retail, tourism, education). De-industrialisation occurs in developed economies as the tertiary sector grows while secondary manufacturing declines due to automation and lower-cost overseas competition.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Primary sector: extracts natural resources (farming, fishing, mining, oil extraction). Secondary sector: manufactures raw materials into finished/semi-finished goods (car assembly, construction, baking). Tertiary sector: provides services to consumers and firms (banking, retail, tourism, education)."
            },
            {
              "id": "mp2",
              "markDescription": "De-industrialisation occurs in developed economies as the tertiary sector grows while secondary manufacturing declines due to automation and lower-cost overseas competition."
            },
            {
              "id": "mp3",
              "markDescription": "Remember the 4 Factors of Production with CELL: Capital, Enterprise, Land, Labour!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-3",
    "subtopicId": "igcse-bus-1-2",
    "number": 3,
    "stimulus": "Structured exam question on Topic 1.2 (Business Growth, Types of Organisation, Objectives & Stakeholders). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-3a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Business Growth, Types of Organisation, Objectives & Stakeholders?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Compare internal growth with horizontal, vertical, and conglomerate integration.",
          "It violates the core rule of Business Growth, Types of Organisation, Objectives & Stakeholders by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Horizontal integration.",
          "It assumes Limited liability remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-3b",
        "label": "b)",
        "prompt": "Define \"Horizontal integration\" and explain the key principles covered in \"Types of Business Organisation & Liability\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Horizontal integration: Merger or takeover between two firms operating in the exact same industry and stage of production. Furthermore, Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity. Incorporated companies (Private Limited Company, Ltd; Public Limited Company, Plc): Separate legal identity → LIMITED LIABILITY (shareholders can only lose the money they invested in shares) and continuity.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Horizontal integration: Merger or takeover between two firms operating in the exact same industry and stage of production."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Unincorporated businesses (Sole Trader, Partnership): Owner and business are legally identical → UNLIMITED LIABILITY (personal assets like house/car can be seized to repay business debts). Easy to set up, full privacy, owner keeps all profit, but hard to raise finance and lacks continuity."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Incorporated companies (Private Limited Company, Ltd; Public Limited Company, Plc): Separate legal identity → LIMITED LIABILITY (shareholders can only lose the money they invested in shares) and continuity."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-3c",
        "label": "c)",
        "prompt": "Apply \"Business Objectives & Stakeholder Conflicts\" to explain how examiners award full marks on Business Growth, Types of Organisation, Objectives & Stakeholders problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Private sector objectives: Survival (new start-ups/recessions), Profit maximisation, Growth, Market share, and Social/Environmental goals (social enterprises reinvest profits into community causes). Internal stakeholders: Owners/shareholders (high dividends & share price), Employees (higher wages & job security), Managers (bonuses & power).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Private sector objectives: Survival (new start-ups/recessions), Profit maximisation, Growth, Market share, and Social/Environmental goals (social enterprises reinvest profits into community causes)."
            },
            {
              "id": "mp2",
              "markDescription": "Internal stakeholders: Owners/shareholders (high dividends & share price), Employees (higher wages & job security), Managers (bonuses & power)."
            },
            {
              "id": "mp3",
              "markDescription": "Compare internal growth with horizontal, vertical, and conglomerate integration."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-4",
    "subtopicId": "igcse-bus-2-1",
    "number": 4,
    "stimulus": "Structured exam question on Topic 2.1 (Motivating Employees (Taylor, Maslow, Herzberg) & Rewards). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-4a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Motivating Employees (Taylor, Maslow, Herzberg) & Rewards?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Compare Taylor, Maslow’s 5-level hierarchy, and Herzberg’s Hygiene vs Motivator factors.",
          "It violates the core rule of Motivating Employees (Taylor, Maslow, Herzberg) & Rewards by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Piece rate.",
          "It assumes Job enrichment remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-4b",
        "label": "b)",
        "prompt": "Define \"Piece rate\" and explain the key principles covered in \"Financial Rewards\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Piece rate: Payment method rewarding workers a fixed amount for every unit of output completed. Furthermore, Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised. Piece rate: paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Piece rate: Payment method rewarding workers a fixed amount for every unit of output completed."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Piece rate: paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses)."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-4c",
        "label": "c)",
        "prompt": "Apply \"Non-Financial Methods of Motivation\" to explain how examiners award full marks on Motivating Employees (Taylor, Maslow, Herzberg) & Rewards problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Job rotation: moving employees periodically between different tasks at the same skill level — cuts boredom and builds multi-skilled cover, though does not make tasks more challenging. Job enlargement: adding extra tasks of a similar skill level to broaden variety. Avoid: Do NOT confuse job enlargement (more tasks at the SAME skill level — horizontal) with job enrichment (more complex, responsible tasks — vertical)!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Job rotation: moving employees periodically between different tasks at the same skill level — cuts boredom and builds multi-skilled cover, though does not make tasks more challenging."
            },
            {
              "id": "mp2",
              "markDescription": "Job enlargement: adding extra tasks of a similar skill level to broaden variety."
            },
            {
              "id": "mp3",
              "markDescription": "Do NOT confuse job enlargement (more tasks at the SAME skill level — horizontal) with job enrichment (more complex, responsible tasks — vertical)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-5",
    "subtopicId": "igcse-bus-2-2",
    "number": 5,
    "stimulus": "Structured exam question on Topic 2.2 (Organisation Structure, Leadership, Recruitment, Training & Communication). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-5a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Organisation Structure, Leadership, Recruitment, Training & Communication?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Analyse tall vs flat hierarchies, span of control, and the advantages of delegation.",
          "It violates the core rule of Organisation Structure, Leadership, Recruitment, Training & Communication by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Chain of command.",
          "It assumes Redundancy remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-5b",
        "label": "b)",
        "prompt": "Define \"Chain of command\" and explain the key principles covered in \"Recruitment, Selection & Training\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Chain of command: The line of authority through which instructions are passed down an organisation. Furthermore, Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer. Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Chain of command: The line of authority through which instructions are passed down an organisation."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally)."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-5c",
        "label": "c)",
        "prompt": "Apply \"Effective Communication & Barriers\" to explain how examiners award full marks on Organisation Structure, Leadership, Recruitment, Training & Communication problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding. Internal communication occurs within the firm (e.g., team meetings, intranet); External communication occurs with outsiders (customers, suppliers, tax authorities).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Effective communication requires a sender, clear message, appropriate medium (verbal, written, visual/electronic), receiver, AND FEEDBACK to confirm understanding."
            },
            {
              "id": "mp2",
              "markDescription": "Internal communication occurs within the firm (e.g., team meetings, intranet); External communication occurs with outsiders (customers, suppliers, tax authorities)."
            },
            {
              "id": "mp3",
              "markDescription": "Analyse tall vs flat hierarchies, span of control, and the advantages of delegation."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-6",
    "subtopicId": "igcse-bus-3-1",
    "number": 6,
    "stimulus": "Structured exam question on Topic 3.1 (Market Segmentation, Niche vs Mass Markets & Market Research). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-6a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Market Segmentation, Niche vs Mass Markets & Market Research?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Evaluate niche vs mass marketing strategies for start-ups and large brands.",
          "It violates the core rule of Market Segmentation, Niche vs Mass Markets & Market Research by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Market segmentation.",
          "It assumes Primary research remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-6b",
        "label": "b)",
        "prompt": "Define \"Market segmentation\" and explain the key principles covered in \"Market Segmentation\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Market segmentation: Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics. Furthermore, Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product. Benefits: Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Market segmentation: Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Benefits: Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-6c",
        "label": "c)",
        "prompt": "Apply \"Primary vs Secondary Market Research & Sampling\" to explain how examiners award full marks on Market Segmentation, Niche vs Mass Markets & Market Research problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming. Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals. Avoid: When evaluating research accuracy in exams, ALWAYS cite 3 concrete factors: sample size (too small?), sampling method (biased?), and question wording (leading questions or outdated secondary source?).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming."
            },
            {
              "id": "mp2",
              "markDescription": "Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals."
            },
            {
              "id": "mp3",
              "markDescription": "When evaluating research accuracy in exams, ALWAYS cite 3 concrete factors: sample size (too small?), sampling method (biased?), and question wording (leading questions or outdated secondary source?)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-7",
    "subtopicId": "igcse-bus-3-2",
    "number": 7,
    "stimulus": "Structured exam question on Topic 3.2 (The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-7a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Draw the Product Life Cycle and recommend realistic extension strategies.",
          "It violates the core rule of The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Product life cycle.",
          "It assumes Penetration pricing remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-7b",
        "label": "b)",
        "prompt": "Define \"Product life cycle\" and explain the key principles covered in \"Pricing Strategies & Price Elasticity of Demand (PED)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Product life cycle: Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline. Furthermore, Cost-plus pricing: Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand). Competitive pricing: matching rival prices (safe in crowded markets, requires strong non-price differentiation).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Product life cycle: Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Cost-plus pricing: Unit cost + fixed % mark-up (guarantees margin if sold, ignores competitors/demand)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Competitive pricing: matching rival prices (safe in crowded markets, requires strong non-price differentiation)."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-7c",
        "label": "c)",
        "prompt": "Apply \"Place (Channels of Distribution), Promotion & E-Commerce\" to explain how examiners award full marks on The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Distribution channels: Direct (Producer → Consumer: keeps full profit margin, direct customer feedback, great for e-commerce/services); 1-intermediary (Producer → Retailer → Consumer); 2-intermediaries (Producer → Wholesaler → Retailer → Consumer: wholesaler breaks bulk for small shops, though each middleman adds a mark-up). Promotion aims to inform, persuade, and build brand image: Above-the-line advertising (TV, billboards, social media ads) vs Below-the-line sales promotion (BOGOF, free samples, loyalty cards, sponsorships, PR). Avoid: Ensure ALL 4 Ps stay consistent! Selling a luxury watch via price skimming while using cheap discount coupons and selling in a budget supermarket destroys brand credibility.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Distribution channels: Direct (Producer → Consumer: keeps full profit margin, direct customer feedback, great for e-commerce/services); 1-intermediary (Producer → Retailer → Consumer); 2-intermediaries (Producer → Wholesaler → Retailer → Consumer: wholesaler breaks bulk for small shops, though each middleman adds a mark-up)."
            },
            {
              "id": "mp2",
              "markDescription": "Promotion aims to inform, persuade, and build brand image: Above-the-line advertising (TV, billboards, social media ads) vs Below-the-line sales promotion (BOGOF, free samples, loyalty cards, sponsorships, PR)."
            },
            {
              "id": "mp3",
              "markDescription": "Ensure ALL 4 Ps stay consistent! Selling a luxury watch via price skimming while using cheap discount coupons and selling in a budget supermarket destroys brand credibility."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-8",
    "subtopicId": "igcse-bus-4-1",
    "number": 8,
    "stimulus": "Structured exam question on Topic 4.1 (Production Methods (Job, Batch, Flow), Productivity & Lean Production). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-8a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Production Methods (Job, Batch, Flow), Productivity & Lean Production?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Recommend and evaluate Job, Batch, or Flow production for real-world businesses.",
          "It violates the core rule of Production Methods (Job, Batch, Flow), Productivity & Lean Production by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Job production.",
          "It assumes Batch production remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-8b",
        "label": "b)",
        "prompt": "Define \"Job production\" and explain the key principles covered in \"Productivity, Automation & Technology\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Job production: One-off custom production tailored to an individual customer’s exact order. Furthermore, Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness. Ways to boost productivity: better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Job production: One-off custom production tailored to an individual customer’s exact order."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Ways to boost productivity: better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-8c",
        "label": "c)",
        "prompt": "Apply \"Lean Production: Kaizen & Just-in-Time (JIT)\" to explain how examiners award full marks on Production Methods (Job, Batch, Flow), Productivity & Lean Production problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Lean production systematically eliminates waste (excess stock, defects, waiting time, unnecessary movement) to cut costs without sacrificing quality. Kaizen (\"continuous improvement\"): regular small-group worker meetings identify tiny daily improvements to layout, workflow, and waste reduction — boosting both efficiency and employee empowerment. Avoid: Never recommend JIT to a business with UNRELIABLE suppliers or erratic sudden demand spikes — JIT strictly requires ultra-reliable suppliers and accurate demand forecasting!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Lean production systematically eliminates waste (excess stock, defects, waiting time, unnecessary movement) to cut costs without sacrificing quality."
            },
            {
              "id": "mp2",
              "markDescription": "Kaizen (\"continuous improvement\"): regular small-group worker meetings identify tiny daily improvements to layout, workflow, and waste reduction — boosting both efficiency and employee empowerment."
            },
            {
              "id": "mp3",
              "markDescription": "Never recommend JIT to a business with UNRELIABLE suppliers or erratic sudden demand spikes — JIT strictly requires ultra-reliable suppliers and accurate demand forecasting!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-9",
    "subtopicId": "igcse-bus-4-2",
    "number": 9,
    "stimulus": "Structured exam question on Topic 4.2 (Costs, Economies of Scale, Break-Even Analysis & Quality). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-9a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Costs, Economies of Scale, Break-Even Analysis & Quality?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate FC, VC, TC, AC, contribution, break-even output, and margin of safety accurately.",
          "It violates the core rule of Costs, Economies of Scale, Break-Even Analysis & Quality by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Break-even output.",
          "It assumes Contribution per unit remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-9b",
        "label": "b)",
        "prompt": "Define \"Break-even output\" and explain the key principles covered in \"Break-Even Analysis & Margin of Safety\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Break-even output: Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit). Furthermore, Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss). Contribution per unit = Selling Price − Variable Cost per unit. Break-Even Output = Fixed Costs ÷ Contribution per unit.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Break-even output: Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Contribution per unit = Selling Price − Variable Cost per unit. Break-Even Output = Fixed Costs ÷ Contribution per unit."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-9c",
        "label": "c)",
        "prompt": "Apply \"Quality Control vs Quality Assurance & Location Decisions\" to explain how examiners award full marks on Costs, Economies of Scale, Break-Even Analysis & Quality problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Quality Control (QC): inspectors check finished products at the END of the production line to spot defects. Stops faulty goods reaching customers, but reactive — defects are only caught AFTER materials and labour have already been wasted! Quality Assurance (QA): builds quality checks into EVERY stage of design and production, making every worker responsible (\"right first time\", e.g., ISO 9000 / Total Quality Management). Cuts scrap and rework, boosts worker pride — requires comprehensive training and full workforce buy-in.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Quality Control (QC): inspectors check finished products at the END of the production line to spot defects. Stops faulty goods reaching customers, but reactive — defects are only caught AFTER materials and labour have already been wasted!"
            },
            {
              "id": "mp2",
              "markDescription": "Quality Assurance (QA): builds quality checks into EVERY stage of design and production, making every worker responsible (\"right first time\", e.g., ISO 9000 / Total Quality Management). Cuts scrap and rework, boosts worker pride — requires comprehensive training and full workforce buy-in."
            },
            {
              "id": "mp3",
              "markDescription": "Remember 5 Economies of Scale with Really Pretty Tigers Make Money (or P-T-F-M-M: Purchasing, Technical, Financial, Marketing, Managerial)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-10",
    "subtopicId": "igcse-bus-5-1",
    "number": 10,
    "stimulus": "Structured exam question on Topic 5.1 (Sources of Business Finance & Cash-Flow Forecasting). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-10a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Sources of Business Finance & Cash-Flow Forecasting?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Match appropriate internal/external and short/long-term finance sources to specific business types (sole trader vs Plc).",
          "It violates the core rule of Sources of Business Finance & Cash-Flow Forecasting by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Bank overdraft.",
          "It assumes Net cash flow remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-10b",
        "label": "b)",
        "prompt": "Define \"Bank overdraft\" and explain the key principles covered in \"Constructing & Interpreting Cash-Flow Forecasts\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Bank overdraft: Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit. Furthermore, Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments. Core cash-flow equations (memorise these 3!):",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Bank overdraft: Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Core cash-flow equations (memorise these 3!):"
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-10c",
        "label": "c)",
        "prompt": "Apply \"Overcoming Short-Term Cash-Flow Problems\" to explain how examiners award full marks on Sources of Business Finance & Cash-Flow Forecasting problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Increase/speed up inflows: arrange a short-term bank overdraft, chase overdue trade receivables (offer small discounts for prompt payment), ask customers for cash/deposits upfront, or sell idle assets. Delay/reduce outflows: negotiate longer trade credit from suppliers (e.g., 60 days instead of 30), lease new machinery instead of buying outright, or postpone non-essential capital spending.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Increase/speed up inflows: arrange a short-term bank overdraft, chase overdue trade receivables (offer small discounts for prompt payment), ask customers for cash/deposits upfront, or sell idle assets."
            },
            {
              "id": "mp2",
              "markDescription": "Delay/reduce outflows: negotiate longer trade credit from suppliers (e.g., 60 days instead of 30), lease new machinery instead of buying outright, or postpone non-essential capital spending."
            },
            {
              "id": "mp3",
              "markDescription": "Match appropriate internal/external and short/long-term finance sources to specific business types (sole trader vs Plc)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-11",
    "subtopicId": "igcse-bus-6-1",
    "number": 11,
    "stimulus": "Structured exam question on Topic 6.1 (Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-11a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Analyse business impacts across Growth, Boom, Recession, and Slump.",
          "It violates the core rule of Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates) by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Recession.",
          "It assumes Interest rate remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-11b",
        "label": "b)",
        "prompt": "Define \"Recession\" and explain the key principles covered in \"Fiscal Policy (Taxes) & Monetary Policy (Interest Rates)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Recession: Period of falling national output (GDP), rising unemployment, and reduced consumer demand. Furthermore, Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment. Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Recession: Period of falling national output (GDP), rising unemployment, and reduced consumer demand."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-11c",
        "label": "c)",
        "prompt": "Apply \"Exchange Rate Movements (Appreciation vs Depreciation)\" to explain how examiners award full marks on Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates) problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Exchange rate = price of one currency expressed in another (e.g., £1 = $1.25). Currency APPRECIATION (stronger currency, e.g., £1 rises from $1.25 to $1.40): Avoid: Always check whether the case-study business is an EXPORTER (sells abroad — hurt by appreciation) or an IMPORTER (buys materials abroad — helped by appreciation)!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Exchange rate = price of one currency expressed in another (e.g., £1 = $1.25)."
            },
            {
              "id": "mp2",
              "markDescription": "Currency APPRECIATION (stronger currency, e.g., £1 rises from $1.25 to $1.40):"
            },
            {
              "id": "mp3",
              "markDescription": "Always check whether the case-study business is an EXPORTER (sells abroad — hurt by appreciation) or an IMPORTER (buys materials abroad — helped by appreciation)!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-bus-exam-12",
    "subtopicId": "igcse-bus-6-2",
    "number": 12,
    "stimulus": "Structured exam question on Topic 6.2 (Environmental & Ethical Issues, Globalisation & Multinational Companies). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-bus-exam-12a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Environmental & Ethical Issues, Globalisation & Multinational Companies?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Evaluate environmental and ethical business trade-offs (short-term costs vs long-term brand reputation).",
          "It violates the core rule of Environmental & Ethical Issues, Globalisation & Multinational Companies by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Sustainable development.",
          "It assumes Tariff remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-bus-exam-12b",
        "label": "b)",
        "prompt": "Define \"Sustainable development\" and explain the key principles covered in \"Business Ethics & Corporate Social Responsibility\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Sustainable development: Business growth and production that avoids depleting natural resources or damaging the environment for future generations. Furthermore, Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery. Short-term trade-off: paying fair wages and using sustainable suppliers raises unit costs compared with unethical rivals — potentially reducing short-term profits.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Sustainable development: Business growth and production that avoids depleting natural resources or damaging the environment for future generations."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Ethical business means doing what is morally right beyond bare legal minimums: paying fair living wages across global supply chains, refusing child labour, honest advertising, and zero bribery."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Short-term trade-off: paying fair wages and using sustainable suppliers raises unit costs compared with unethical rivals — potentially reducing short-term profits."
            }
          ]
        }
      },
      {
        "id": "igcse-bus-exam-12c",
        "label": "c)",
        "prompt": "Apply \"Globalisation, Protectionism & Multinational Companies (MNCs)\" to explain how examiners award full marks on Environmental & Ethical Issues, Globalisation & Multinational Companies problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Globalisation is the growing worldwide integration of markets driven by freer trade agreements, cheap container shipping/air travel, and the internet. Protectionism restricts imports via Tariffs (taxes on imported goods raising their price) and Quotas (physical numerical limits on imported volume) to shelter domestic jobs — though rivals may retaliate. Avoid: A business that only EXPORTS goods overseas from a single factory at home is NOT a multinational company — an MNC physically operates facilities in multiple countries!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Globalisation is the growing worldwide integration of markets driven by freer trade agreements, cheap container shipping/air travel, and the internet."
            },
            {
              "id": "mp2",
              "markDescription": "Protectionism restricts imports via Tariffs (taxes on imported goods raising their price) and Quotas (physical numerical limits on imported volume) to shelter domestic jobs — though rivals may retaliate."
            },
            {
              "id": "mp3",
              "markDescription": "A business that only EXPORTS goods overseas from a single factory at home is NOT a multinational company — an MNC physically operates facilities in multiple countries!"
            }
          ]
        }
      }
    ]
  }
];

export const IGCSE_BUSINESS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "igcse-bus-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0450 Paper 1 Short Answer & Data Response (0450/12)",
    "tier": "Core & Extended",
    "series": "May/June 2024",
    "paperCode": "0450/12",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Financial Ratios & Break-Even Data Stimulus.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.1 — Enterprise, Added Value & Classification of Businesses] (a) Define Opportunity cost. (b) Apply the principles of \"The Economic Problem, Factors of Production & Specialisation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Opportunity cost — The next best alternative forgone when making a decision.",
          "2 marks: The economic problem arises because human WANTS are unlimited while RESOURCES (factors of production) are scarce, forcing individuals, businesses, and governments to make choices.",
          "1 mark: Opportunity cost is the next best alternative forgone when choosing one option over another (e.g., buying a delivery van instead of new factory machinery)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.1 — Motivating Employees (Taylor, Maslow, Herzberg) & Rewards] (a) Define Piece rate. (b) Apply the principles of \"Financial Rewards\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Piece rate — Payment method rewarding workers a fixed amount for every unit of output completed.",
          "2 marks: Hourly wage (time rate): easy to calculate, encourages care, but rewards slow work equally unless supervised.",
          "1 mark: Piece rate: paid per unit produced — strongly raises output (fits Taylor) but risks rushed, poor-quality work and cannot be used where output is unmeasurable (e.g., teachers, nurses)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 3.1 — Market Segmentation, Niche vs Mass Markets & Market Research] (a) Define Market segmentation. (b) Apply the principles of \"Primary vs Secondary Market Research & Sampling\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Market segmentation — Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics.",
          "2 marks: Primary research (field research) collects brand-new first-hand data specifically for the business (questionnaires, online surveys, interviews, focus groups, observation, test marketing). Pros: up-to-date, tailored, exclusive to the firm. Cons: expensive and time-consuming.",
          "1 mark: Secondary (desk) research uses existing already-published data (government census/statistics, trade magazines, competitor websites, market reports, internal sales records). Pros: cheap and fast. Cons: may be out of date, not tailored, and available to rivals."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.1 — Production Methods (Job, Batch, Flow), Productivity & Lean Production] (a) Define Job production. (b) Apply the principles of \"Job, Batch & Flow Production Methods\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Job production — One-off custom production tailored to an individual customer’s exact order.",
          "2 marks: Job production: making ONE unique custom-built item at a time to exact customer specs (e.g., wedding dress, custom bridge, bespoke furniture). High quality, motivating for skilled workers, premium price — but high unit cost and slow.",
          "1 mark: Batch production: making a SET QUANTITY (batch) of identical items before switching machinery to another batch (e.g., bakery making 200 white loaves then 200 rye loaves, clothing sizes). Flexible variety + some economies of scale — but downtime resetting machines and higher work-in-progress inventory."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0450 Paper 2 Case Study (0450/22)",
    "tier": "Core & Extended",
    "series": "May/June 2024",
    "paperCode": "0450/22",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Full Business Case Study Insert with Appendices A–C.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 2.1 — Motivating Employees (Taylor, Maslow, Herzberg) & Rewards] (a) Define Piece rate. (b) Apply the principles of \"Why Motivation Matters & Motivational Theorists\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Piece rate — Payment method rewarding workers a fixed amount for every unit of output completed.",
          "2 marks: Well-motivated employees deliver higher labour productivity, better product quality, lower absenteeism, and lower staff turnover (saving recruitment and training costs).",
          "1 mark: F.W. Taylor (Scientific Management / \"Economic Man\"): Argued workers are motivated primarily by MONEY. Advocated breaking work into simple tasks and paying PIECE-RATE wages linked strictly to output."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 3.1 — Market Segmentation, Niche vs Mass Markets & Market Research] (a) Define Market segmentation. (b) Apply the principles of \"Market Segmentation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Market segmentation — Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics.",
          "2 marks: Market segmentation divides a total market into sub-groups of consumers with shared characteristics: Socio-economic group (income), Age, Gender, Region/Location, Lifestyle, and Use of the product.",
          "1 mark: Benefits: Allows businesses to design tailored products, target promotional spending efficiently without waste, identify gaps in the market, and increase sales revenue."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 4.1 — Production Methods (Job, Batch, Flow), Productivity & Lean Production] (a) Define Job production. (b) Apply the principles of \"Lean Production: Kaizen & Just-in-Time (JIT)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Job production — One-off custom production tailored to an individual customer’s exact order.",
          "2 marks: Lean production systematically eliminates waste (excess stock, defects, waiting time, unnecessary movement) to cut costs without sacrificing quality.",
          "1 mark: Kaizen (\"continuous improvement\"): regular small-group worker meetings identify tiny daily improvements to layout, workflow, and waste reduction — boosting both efficiency and employee empowerment."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 5.1 — Sources of Business Finance & Cash-Flow Forecasting] (a) Define Bank overdraft. (b) Apply the principles of \"Internal & External Sources of Finance\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Bank overdraft — Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.",
          "2 marks: Internal sources (no interest, no loss of ownership control, but limited amount): Retained profit (ploughed-back past profits — zero interest, unavailable to brand-new start-ups), Sale of unwanted non-current assets, and Reducing inventory/working capital.",
          "1 mark: External short-term sources (<1 year, for working capital): Bank overdraft (flexible, interest charged only on amount overdrawn, but high rate and repayable on demand), Trade credit (buy from suppliers now, pay in 30–60 days — free finance if paid on time), Debt factoring."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "CIE 0450 Paper 1 Short Answer & Data Response (0450/12)",
    "tier": "Core & Extended",
    "series": "Oct/Nov 2023",
    "paperCode": "0450/12",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Company Financial Extract & Market Research Data.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.1 — Market Segmentation, Niche vs Mass Markets & Market Research] (a) Define Market segmentation. (b) Apply the principles of \"Marketing, Mass Markets & Niche Markets\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Market segmentation — Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics.",
          "2 marks: Marketing identifies, anticipates, and satisfies customer wants profitably — building customer loyalty and adapting to changing tastes, technology, and competition.",
          "1 mark: Mass marketing targets the whole market with a standardised product (e.g., Coca-Cola, toothpaste): huge sales volume and economies of scale, but fierce competition and high advertising costs."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.1 — Production Methods (Job, Batch, Flow), Productivity & Lean Production] (a) Define Job production. (b) Apply the principles of \"Productivity, Automation & Technology\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Job production — One-off custom production tailored to an individual customer’s exact order.",
          "2 marks: Productivity = Output ÷ Input (Labour productivity = Total Output ÷ Number of Employees). Raising productivity lowers average cost per unit, boosting competitiveness.",
          "1 mark: Ways to boost productivity: better training, motivating pay, replacing outdated machines with CAD/CAM (Computer-Aided Design & Manufacturing), robotics, and EPOS scanners in retail."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.1 — Sources of Business Finance & Cash-Flow Forecasting] (a) Define Bank overdraft. (b) Apply the principles of \"Overcoming Short-Term Cash-Flow Problems\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Bank overdraft — Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.",
          "2 marks: Increase/speed up inflows: arrange a short-term bank overdraft, chase overdue trade receivables (offer small discounts for prompt payment), ask customers for cash/deposits upfront, or sell idle assets.",
          "1 mark: Delay/reduce outflows: negotiate longer trade credit from suppliers (e.g., 60 days instead of 30), lease new machinery instead of buying outright, or postpone non-essential capital spending."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 6.1 — Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)] (a) Define Recession. (b) Apply the principles of \"The Business Cycle & Government Economic Objectives\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Recession — Period of falling national output (GDP), rising unemployment, and reduced consumer demand.",
          "2 marks: Governments aim for 4 macroeconomic goals: Steady Economic Growth (rising GDP), Low Inflation (stable prices), Low Unemployment, and a healthy Balance of Payments.",
          "1 mark: The 4 Business Cycle stages: Growth (rising GDP, sales & jobs) → Boom (peak spending, skill shortages, rising wages & inflation) → Recession (falling GDP for 2+ quarters, rising unemployment, consumers cut luxury spending) → Slump (deep prolonged downturn, business closures)."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "CIE 0450 Paper 2 Case Study (0450/22)",
    "tier": "Core & Extended",
    "series": "Oct/Nov 2023",
    "paperCode": "0450/22",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Full Business Case Study Insert with Financial Appendix.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 4.1 — Production Methods (Job, Batch, Flow), Productivity & Lean Production] (a) Define Job production. (b) Apply the principles of \"Job, Batch & Flow Production Methods\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Job production — One-off custom production tailored to an individual customer’s exact order.",
          "2 marks: Job production: making ONE unique custom-built item at a time to exact customer specs (e.g., wedding dress, custom bridge, bespoke furniture). High quality, motivating for skilled workers, premium price — but high unit cost and slow.",
          "1 mark: Batch production: making a SET QUANTITY (batch) of identical items before switching machinery to another batch (e.g., bakery making 200 white loaves then 200 rye loaves, clothing sizes). Flexible variety + some economies of scale — but downtime resetting machines and higher work-in-progress inventory."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 5.1 — Sources of Business Finance & Cash-Flow Forecasting] (a) Define Bank overdraft. (b) Apply the principles of \"Constructing & Interpreting Cash-Flow Forecasts\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Bank overdraft — Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.",
          "2 marks: Cash Inflows: cash sales, payments received from credit customers (trade receivables), loans, share capital. Cash Outflows: wages, rent, material purchases, utility bills, loan repayments.",
          "1 mark: Core cash-flow equations (memorise these 3!):"
        ]
      },
      {
        "number": "03",
        "question": "[Topic 6.1 — Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)] (a) Define Recession. (b) Apply the principles of \"Exchange Rate Movements (Appreciation vs Depreciation)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Recession — Period of falling national output (GDP), rising unemployment, and reduced consumer demand.",
          "2 marks: Exchange rate = price of one currency expressed in another (e.g., £1 = $1.25).",
          "1 mark: Currency APPRECIATION (stronger currency, e.g., £1 rises from $1.25 to $1.40):"
        ]
      },
      {
        "number": "04",
        "question": "[Topic 1.1 — Enterprise, Added Value & Classification of Businesses] (a) Define Opportunity cost. (b) Apply the principles of \"The Economic Problem, Factors of Production & Specialisation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Opportunity cost — The next best alternative forgone when making a decision.",
          "2 marks: The economic problem arises because human WANTS are unlimited while RESOURCES (factors of production) are scarce, forcing individuals, businesses, and governments to make choices.",
          "1 mark: Opportunity cost is the next best alternative forgone when choosing one option over another (e.g., buying a delivery van instead of new factory machinery)."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "CIE 0450 Paper 1 Short Answer & Data Response (0450/12)",
    "tier": "Core & Extended",
    "series": "May/June 2022",
    "paperCode": "0450/12",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Operations & Cash-Flow Forecast Data Stimulus.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 5.1 — Sources of Business Finance & Cash-Flow Forecasting] (a) Define Bank overdraft. (b) Apply the principles of \"Internal & External Sources of Finance\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Bank overdraft — Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.",
          "2 marks: Internal sources (no interest, no loss of ownership control, but limited amount): Retained profit (ploughed-back past profits — zero interest, unavailable to brand-new start-ups), Sale of unwanted non-current assets, and Reducing inventory/working capital.",
          "1 mark: External short-term sources (<1 year, for working capital): Bank overdraft (flexible, interest charged only on amount overdrawn, but high rate and repayable on demand), Trade credit (buy from suppliers now, pay in 30–60 days — free finance if paid on time), Debt factoring."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 6.1 — Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)] (a) Define Recession. (b) Apply the principles of \"Fiscal Policy (Taxes) & Monetary Policy (Interest Rates)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Recession — Period of falling national output (GDP), rising unemployment, and reduced consumer demand.",
          "2 marks: Direct Taxes (Income Tax on wages; Corporation Tax on company profits): Higher income tax cuts consumer disposable income (hurting luxury/non-essential sales); higher corporation tax leaves less retained profit for reinvestment.",
          "1 mark: Indirect Taxes (VAT / GST on spending; import tariffs): Raise retail prices for consumers and raise material costs for firms importing tariffed goods."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 1.1 — Enterprise, Added Value & Classification of Businesses] (a) Define Opportunity cost. (b) Apply the principles of \"Economic Sectors & Mixed Economies\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Opportunity cost — The next best alternative forgone when making a decision.",
          "2 marks: Primary sector: extracts natural resources (farming, fishing, mining, oil extraction). Secondary sector: manufactures raw materials into finished/semi-finished goods (car assembly, construction, baking). Tertiary sector: provides services to consumers and firms (banking, retail, tourism, education).",
          "1 mark: De-industrialisation occurs in developed economies as the tertiary sector grows while secondary manufacturing declines due to automation and lower-cost overseas competition."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 2.1 — Motivating Employees (Taylor, Maslow, Herzberg) & Rewards] (a) Define Piece rate. (b) Apply the principles of \"Why Motivation Matters & Motivational Theorists\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Piece rate — Payment method rewarding workers a fixed amount for every unit of output completed.",
          "2 marks: Well-motivated employees deliver higher labour productivity, better product quality, lower absenteeism, and lower staff turnover (saving recruitment and training costs).",
          "1 mark: F.W. Taylor (Scientific Management / \"Economic Man\"): Argued workers are motivated primarily by MONEY. Advocated breaking work into simple tasks and paying PIECE-RATE wages linked strictly to output."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "CIE 0450 Paper 2 Case Study (0450/22)",
    "tier": "Core & Extended",
    "series": "May/June 2022",
    "paperCode": "0450/22",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Includes Full Business Case Study Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 6.1 — Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)] (a) Define Recession. (b) Apply the principles of \"The Business Cycle & Government Economic Objectives\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Recession — Period of falling national output (GDP), rising unemployment, and reduced consumer demand.",
          "2 marks: Governments aim for 4 macroeconomic goals: Steady Economic Growth (rising GDP), Low Inflation (stable prices), Low Unemployment, and a healthy Balance of Payments.",
          "1 mark: The 4 Business Cycle stages: Growth (rising GDP, sales & jobs) → Boom (peak spending, skill shortages, rising wages & inflation) → Recession (falling GDP for 2+ quarters, rising unemployment, consumers cut luxury spending) → Slump (deep prolonged downturn, business closures)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 1.1 — Enterprise, Added Value & Classification of Businesses] (a) Define Opportunity cost. (b) Apply the principles of \"Added Value & Entrepreneurs\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Opportunity cost — The next best alternative forgone when making a decision.",
          "2 marks: Added value = Selling price − Cost of bought-in materials and components.",
          "1 mark: How businesses increase added value: (1) Raising selling price via strong branding, unique selling points (USPs), luxury packaging, or excellent customer service; OR (2) Lowering bought-in material costs without hurting perceived quality."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 2.1 — Motivating Employees (Taylor, Maslow, Herzberg) & Rewards] (a) Define Piece rate. (b) Apply the principles of \"Non-Financial Methods of Motivation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Piece rate — Payment method rewarding workers a fixed amount for every unit of output completed.",
          "2 marks: Job rotation: moving employees periodically between different tasks at the same skill level — cuts boredom and builds multi-skilled cover, though does not make tasks more challenging.",
          "1 mark: Job enlargement: adding extra tasks of a similar skill level to broaden variety."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 3.1 — Market Segmentation, Niche vs Mass Markets & Market Research] (a) Define Market segmentation. (b) Apply the principles of \"Marketing, Mass Markets & Niche Markets\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Market segmentation — Dividing a market into distinct consumer sub-groups sharing similar needs or characteristics.",
          "2 marks: Marketing identifies, anticipates, and satisfies customer wants profitably — building customer loyalty and adapting to changing tastes, technology, and competition.",
          "1 mark: Mass marketing targets the whole market with a standardised product (e.g., Coca-Cola, toothpaste): huge sales volume and economies of scale, but fierce competition and high advertising costs."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2019-p1",
    "specEra": "old",
    "year": "2019",
    "title": "CIE 0450 Paper 1 Short Answer & Data Response (Legacy — 0450/12)",
    "tier": "Core & Extended",
    "series": "May/June 2019",
    "paperCode": "0450/12",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Legacy Specification Series Paper 1.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.2 — Business Growth, Types of Organisation, Objectives & Stakeholders] (a) Define Horizontal integration. (b) Apply the principles of \"Measuring Business Size & Methods of Growth\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Horizontal integration — Merger or takeover between two firms operating in the exact same industry and stage of production.",
          "2 marks: Business size is measured by number of employees, value of output, value of sales revenue, or capital employed (note: PROFIT is NOT a measure of business size!).",
          "1 mark: Internal (organic) growth expands using own resources (opening new stores, launching new products). External growth occurs through mergers or takeovers:"
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.2 — Organisation Structure, Leadership, Recruitment, Training & Communication] (a) Define Chain of command. (b) Apply the principles of \"Recruitment, Selection & Training\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Chain of command — The line of authority through which instructions are passed down an organisation.",
          "2 marks: Recruitment sequence: Job analysis → Job Description (tasks, duties, hours) & Person Specification (qualifications, skills, personality) → Advertise (internal vs external) → Shortlist CVs/applications → Interview/aptitude tests → Select & offer.",
          "1 mark: Internal recruitment (cheaper, faster, motivates existing staff, known track record) vs External recruitment (fresh ideas, wider talent pool, avoids leaving another vacancy internally)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 3.2 — The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce] (a) Define Product life cycle. (b) Apply the principles of \"Place (Channels of Distribution), Promotion & E-Commerce\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Product life cycle — Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline.",
          "2 marks: Distribution channels: Direct (Producer → Consumer: keeps full profit margin, direct customer feedback, great for e-commerce/services); 1-intermediary (Producer → Retailer → Consumer); 2-intermediaries (Producer → Wholesaler → Retailer → Consumer: wholesaler breaks bulk for small shops, though each middleman adds a mark-up).",
          "1 mark: Promotion aims to inform, persuade, and build brand image: Above-the-line advertising (TV, billboards, social media ads) vs Below-the-line sales promotion (BOGOF, free samples, loyalty cards, sponsorships, PR)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.2 — Costs, Economies of Scale, Break-Even Analysis & Quality] (a) Define Break-even output. (b) Apply the principles of \"Costs, Economies & Diseconomies of Scale\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Break-even output — Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit).",
          "2 marks: Fixed Costs (FC) do NOT change with output in the short run (rent, insurance, management salaries). Variable Costs (VC) change directly with output (raw materials, piece-rate wages, packaging).",
          "1 mark: Total Cost (TC) = FC + Total VC. Average Cost per unit (AC) = Total Cost ÷ Output."
        ]
      }
    ]
  },
  {
    "id": "igcse-bus-pp-2019-p2",
    "specEra": "old",
    "year": "2019",
    "title": "CIE 0450 Paper 2 Case Study (Legacy — 0450/22)",
    "tier": "Core & Extended",
    "series": "May/June 2019",
    "paperCode": "0450/22",
    "durationMinutes": 90,
    "totalMarks": 80,
    "insertNote": "Legacy Specification Series Paper 2 with Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.2 — The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce] (a) Define Product life cycle. (b) Apply the principles of \"Product: Branding, Packaging & The Product Life Cycle\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Product life cycle — Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline.",
          "2 marks: Product covers design, quality, USP (Unique Selling Point), brand image (builds loyalty and allows higher prices), and packaging (protects, informs, attracts eye on shelves).",
          "1 mark: Product Life Cycle (PLC) stages: Development (high R&D cost, zero sales) → Introduction (slow sales, heavy promotion) → Growth (rapid sales growth, profits emerge) → Maturity (peak sales, fierce competition) → Decline (falling sales due to new rivals/obsolescence)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.2 — Costs, Economies of Scale, Break-Even Analysis & Quality] (a) Define Break-even output. (b) Apply the principles of \"Break-Even Analysis & Margin of Safety\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Break-even output — Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit).",
          "2 marks: Break-even output is the exact level of sales where Total Revenue = Total Costs (neither profit nor loss).",
          "1 mark: Contribution per unit = Selling Price − Variable Cost per unit. Break-Even Output = Fixed Costs ÷ Contribution per unit."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.2 — Income Statements, Balance Sheets & Financial Ratios] (a) Define Gross profit margin. (b) Apply the principles of \"Profitability & Liquidity Ratios\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Gross profit margin — (Gross Profit ÷ Revenue) × 100%, showing percentage of sales left after direct cost of sales.",
          "2 marks: Gross Profit Margin (GPM) = (Gross Profit ÷ Revenue) × 100%. Raised by increasing prices or finding cheaper suppliers.",
          "1 mark: Net Profit Margin (NPM) = (Net Profit ÷ Revenue) × 100%. Raised by cutting overhead expenses (energy, rent, admin)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 6.2 — Environmental & Ethical Issues, Globalisation & Multinational Companies] (a) Define Sustainable development. (b) Apply the principles of \"Environmental Sustainability, Externalities & Pressure Groups\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Sustainable development — Business growth and production that avoids depleting natural resources or damaging the environment for future generations.",
          "2 marks: Social cost = Private cost + External cost (negative externalities like factory air pollution, river waste, traffic congestion). Sustainable development meets today’s needs without compromising future generations (renewable energy, recyclable packaging, ethical sourcing).",
          "1 mark: Pressure groups (e.g., Greenpeace) influence firms through consumer boycotts, media campaigns, and lobbying governments for stricter environmental laws, carbon taxes, and fines."
        ]
      }
    ]
  }
];

export const IGCSE_BUSINESS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "ibkt-1",
    "term": "Opportunity cost",
    "definition": "Value of the next best alternative forgone when making a business decision.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "ibkt-2",
    "term": "Added value",
    "definition": "Selling price minus cost of bought-in raw materials and components.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "ibkt-3",
    "term": "Limited liability",
    "definition": "Shareholders’ financial liability is limited to the capital they invested in company shares.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "ibkt-4",
    "term": "Stakeholder",
    "definition": "Any internal or external individual or group affected by a business’s objectives and activities.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "ibkt-5",
    "term": "Hygiene factors",
    "definition": "Herzberg’s workplace basics (pay, conditions, policy) needed to prevent dissatisfaction.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "ibkt-6",
    "term": "Job enrichment",
    "definition": "Adding more challenging tasks and responsibility to motivate employees.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "ibkt-7",
    "term": "Span of control",
    "definition": "Number of subordinates directly reporting to a single manager.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "ibkt-8",
    "term": "Delegation",
    "definition": "Giving a subordinate authority to carry out a task while retaining final accountability.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "ibkt-9",
    "term": "Market segmentation",
    "definition": "Splitting a total market into sub-groups with shared characteristics (age, income, lifestyle).",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "ibkt-10",
    "term": "Price skimming",
    "definition": "Launching an innovative product at a high initial price to capture early adopters and recover R&D.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "ibkt-11",
    "term": "Kaizen",
    "definition": "Lean production approach of continuous small improvements proposed by workers.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "ibkt-12",
    "term": "Just-in-Time (JIT)",
    "definition": "Inventory system scheduling material deliveries right as production needs them, minimising stock.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "ibkt-13",
    "term": "Economies of scale",
    "definition": "Factors reducing average unit cost as production scale expands.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "ibkt-14",
    "term": "Margin of safety",
    "definition": "Amount by which actual or forecast sales exceed break-even output.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "ibkt-15",
    "term": "Working capital",
    "definition": "Current Assets minus Current Liabilities — finance available for daily business operations.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "ibkt-16",
    "term": "Liquidity",
    "definition": "Ability of a business to convert assets to cash quickly to settle short-term liabilities.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "ibkt-17",
    "term": "Inflation",
    "definition": "Sustained general rise in prices across an economy, eroding purchasing power.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "ibkt-18",
    "term": "Multinational company",
    "definition": "Business operating factories, offices, or outlets in more than one country.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-bus-kt-118",
    "term": "Entrepreneur",
    "definition": "An individual who takes the financial risk to organise resources and start a new business venture.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-bus-kt-119",
    "term": "De-industrialisation",
    "definition": "Decline in the relative importance of the secondary manufacturing sector in an economy.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-bus-kt-120",
    "term": "Division of labour",
    "definition": "Breaking a production process into separate specialised tasks performed repeatedly by different workers.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-bus-kt-121",
    "term": "Horizontal integration",
    "definition": "Merger or takeover between two firms operating in the exact same industry and stage of production.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-bus-kt-122",
    "term": "Franchise",
    "definition": "Business model licensing an established brand name, logo, and operating system to franchisees for fees and royalties.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-bus-kt-123",
    "term": "Unlimited liability",
    "definition": "Legal status where sole traders or partners are personally responsible for all business debts, risking personal possessions.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-bus-kt-124",
    "term": "Stakeholders",
    "definition": "Any internal or external individual or group with a direct interest in the performance and decisions of a business.",
    "topicNumber": 1,
    "subtopicId": "igcse-bus-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-bus-kt-125",
    "term": "Piece rate",
    "definition": "Payment method rewarding workers a fixed amount for every unit of output completed.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-bus-kt-126",
    "term": "Fringe benefits",
    "definition": "Non-cash perks given to employees on top of wages or salary (e.g., private health insurance, company car).",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-bus-kt-127",
    "term": "Labour productivity",
    "definition": "Output produced per employee over a given period (Total Output ÷ Number of Employees).",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-bus-kt-128",
    "term": "Chain of command",
    "definition": "The line of authority through which instructions are passed down an organisation.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-bus-kt-129",
    "term": "Redundancy",
    "definition": "Ending an employee’s contract because their job role is no longer required by the business (not due to misconduct).",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-bus-kt-130",
    "term": "Job description",
    "definition": "Document outlining the main duties, responsibilities, and reporting lines of a specific vacancy.",
    "topicNumber": 2,
    "subtopicId": "igcse-bus-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-bus-kt-131",
    "term": "Primary research",
    "definition": "First-hand field research gathered specifically for a business’s current decision.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-bus-kt-132",
    "term": "Secondary research",
    "definition": "Desk research drawing on already-published internal or external sources.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-bus-kt-133",
    "term": "Niche marketing",
    "definition": "Tailoring a specialised product specifically to meet the distinct needs of a small, clearly defined segment of a larger market.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-bus-kt-134",
    "term": "Product life cycle",
    "definition": "Stages a product passes through over time: Development, Introduction, Growth, Maturity, and Decline.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-bus-kt-135",
    "term": "Penetration pricing",
    "definition": "Launching a product at a deliberately low price to gain market share rapidly against established rivals.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-bus-kt-136",
    "term": "Price elasticity of demand",
    "definition": "Responsiveness of quantity demanded to a change in selling price.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-bus-kt-137",
    "term": "Extension strategies",
    "definition": "Tactics used during the maturity stage of a product life cycle (such as rebranding, new features, or new markets) to revive sales and delay decline.",
    "topicNumber": 3,
    "subtopicId": "igcse-bus-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-bus-kt-138",
    "term": "Job production",
    "definition": "One-off custom production tailored to an individual customer’s exact order.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-bus-kt-139",
    "term": "Batch production",
    "definition": "Producing identical goods in grouped batches before retooling for another specification.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-bus-kt-140",
    "term": "Lean production",
    "definition": "Operations techniques (such as Kaizen and JIT) aimed at eliminating all forms of waste.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-bus-kt-141",
    "term": "Flow production",
    "definition": "Continuous large-scale production of standardised goods moving sequentially along an automated assembly line.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-bus-kt-142",
    "term": "Just-in-Time",
    "definition": "Inventory system where materials are delivered precisely when needed for production, minimising storage and holding costs.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-bus-kt-143",
    "term": "Break-even output",
    "definition": "Sales volume where Total Revenue equals Total Cost: Fixed Costs ÷ (Price − Variable Cost per unit).",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-bus-kt-144",
    "term": "Contribution per unit",
    "definition": "Selling price minus variable cost per unit; contributes toward paying fixed costs and then profit.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-bus-kt-145",
    "term": "Quality assurance",
    "definition": "Preventative system checking quality throughout every stage of production to eliminate defects before they happen.",
    "topicNumber": 4,
    "subtopicId": "igcse-bus-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-bus-kt-146",
    "term": "Bank overdraft",
    "definition": "Flexible short-term arrangement allowing a business to withdraw more cash than is currently in its bank account up to an agreed limit.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-bus-kt-147",
    "term": "Net cash flow",
    "definition": "Total cash inflows minus total cash outflows over a specific month or period.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-bus-kt-148",
    "term": "Insolvency",
    "definition": "Situation where a business runs out of cash and cannot pay its debts as they fall due.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-bus-kt-149",
    "term": "Retained profit",
    "definition": "Net profit kept back inside the business after paying taxes and dividends to reinvest in growth.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-bus-kt-150",
    "term": "Gross profit margin",
    "definition": "(Gross Profit ÷ Revenue) × 100%, showing percentage of sales left after direct cost of sales.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-bus-kt-151",
    "term": "ROCE",
    "definition": "Return on Capital Employed: (Net Profit ÷ Capital Employed) × 100%, measuring profitability relative to total capital invested.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-bus-kt-152",
    "term": "Acid test ratio",
    "definition": "(Current Assets − Inventory) ÷ Current Liabilities, testing immediate liquidity without relying on selling stock.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-bus-kt-153",
    "term": "Gross profit",
    "definition": "Sales revenue remaining after deducting direct Cost of Sales, before subtracting indirect operating expenses.",
    "topicNumber": 5,
    "subtopicId": "igcse-bus-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-bus-kt-154",
    "term": "Recession",
    "definition": "Period of falling national output (GDP), rising unemployment, and reduced consumer demand.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-bus-kt-155",
    "term": "Interest rate",
    "definition": "The cost of borrowing money and the reward for saving, expressed as an annual percentage.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-bus-kt-156",
    "term": "Exchange rate",
    "definition": "The price of one country’s currency in terms of another currency.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-bus-kt-157",
    "term": "Disposable income",
    "definition": "The amount of personal income remaining for consumers to spend or save after direct income taxes have been deducted.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-bus-kt-158",
    "term": "Sustainable development",
    "definition": "Business growth and production that avoids depleting natural resources or damaging the environment for future generations.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-bus-kt-159",
    "term": "Tariff",
    "definition": "Tax placed on imported products to protect domestic industries.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-bus-kt-160",
    "term": "Quota",
    "definition": "Physical limit on the quantity of a specific product that may be imported into a country.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-bus-kt-161",
    "term": "Multinational company (MNC)",
    "definition": "Firm operating production or service branches in more than one country.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-bus-kt-162",
    "term": "Pressure groups",
    "definition": "Organised groups of citizens sharing a common cause (such as environmental protection) who campaign or boycott to change business or government behaviour.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-bus-kt-163",
    "term": "Tariffs",
    "definition": "Government taxes imposed on imported goods to make them more expensive than domestically produced alternatives.",
    "topicNumber": 6,
    "subtopicId": "igcse-bus-6-2",
    "subtopicCode": "6.2"
  }
];
