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
      { id: 'igcse-bus-1-1', code: '1.1', slug: '1.1-enterprise-added-value-sectors', title: 'Enterprise, Added Value & Classification of Businesses', readingMinutes: 9, hasDeepContent: true },
      { id: 'igcse-bus-1-2', code: '1.2', slug: '1.2-business-growth-organisations-stakeholders', title: 'Business Growth, Types of Organisation, Objectives & Stakeholders', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'People in Business',
    subtopics: [
      { id: 'igcse-bus-2-1', code: '2.1', slug: '2.1-motivating-employees-theories-rewards', title: 'Motivating Employees (Taylor, Maslow, Herzberg) & Rewards', readingMinutes: 10, hasDeepContent: true },
      { id: 'igcse-bus-2-2', code: '2.2', slug: '2.2-organisation-leadership-recruitment-communication', title: 'Organisation Structure, Leadership, Recruitment, Training & Communication', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Marketing',
    subtopics: [
      { id: 'igcse-bus-3-1', code: '3.1', slug: '3.1-marketing-segmentation-market-research', title: 'Market Segmentation, Niche vs Mass Markets & Market Research', readingMinutes: 9, hasDeepContent: true },
      { id: 'igcse-bus-3-2', code: '3.2', slug: '3.2-marketing-mix-4ps-ecommerce', title: 'The Marketing Mix (4 Ps: Product, Price, Place, Promotion) & E-Commerce', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Operations Management',
    subtopics: [
      { id: 'igcse-bus-4-1', code: '4.1', slug: '4.1-production-methods-lean-production', title: 'Production Methods (Job, Batch, Flow), Productivity & Lean Production', readingMinutes: 10, hasDeepContent: true },
      { id: 'igcse-bus-4-2', code: '4.2', slug: '4.2-costs-economies-scale-breakeven-quality', title: 'Costs, Economies of Scale, Break-Even Analysis & Quality', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Financial Information & Decisions',
    subtopics: [
      { id: 'igcse-bus-5-1', code: '5.1', slug: '5.1-sources-of-finance-cash-flow', title: 'Sources of Business Finance & Cash-Flow Forecasting', readingMinutes: 10, hasDeepContent: true },
      { id: 'igcse-bus-5-2', code: '5.2', slug: '5.2-income-statements-balance-sheets-ratios', title: 'Income Statements, Balance Sheets & Financial Ratios', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'External Influences on Business Activity',
    subtopics: [
      { id: 'igcse-bus-6-1', code: '6.1', slug: '6.1-economic-issues-cycle-inflation-exchange-rates', title: 'Economic Issues (Business Cycle, Inflation, Tax, Interest & Exchange Rates)', readingMinutes: 10, hasDeepContent: true },
      { id: 'igcse-bus-6-2', code: '6.2', slug: '6.2-environment-ethics-globalisation-mncs', title: 'Environmental & Ethical Issues, Globalisation & Multinational Companies', readingMinutes: 10, hasDeepContent: true },
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
      { time: '0:00', seconds: 0, label: 'Scarcity, Opportunity Cost & Factors of Production', cardId: 'igcse-bus-1-1-c1' },
      { time: '2:59', seconds: 179, label: 'Enterprise & Adding Value', cardId: 'igcse-bus-1-1-c2' },
      { time: '6:15', seconds: 375, label: 'Primary, Secondary & Tertiary Sectors', cardId: 'igcse-bus-1-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-1-c1',
        title: 'The Economic Problem, Factors of Production & Opportunity Cost',
        summary: 'Scarcity of the 4 factors of production forces choices with an opportunity cost.',
        bullets: [
          'The **economic problem** arises because human wants are unlimited while resources are scarce, creating **opportunity cost** whenever a choice is made.',
        ],
        subsections: [
          {
            heading: 'Four Factors of Production & Specialisation',
            bullets: [
              '**Land, Labour, Capital, Enterprise** - natural resources (land), workforce (labour), machinery/finance (capital), and risk-taking skill combining the other three (enterprise).',
              '**Division of labour** - splitting production into specialised tasks raises efficiency and output, though repetitive jobs can cause boredom and bottlenecks if one worker is absent.',
            ],
            exampleHeading: 'Worked example: Opportunity cost of a new machine',
            examples: [
              'A bakery has £15,000 and chooses to buy a new industrial oven instead of a delivery van.',
              'The opportunity cost is the next best alternative foregone — the delivery van.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'opportunity cost', definition: 'The next best alternative given up when choosing one option over another.' },
        ],
        memoryAid: 'Factors of Production = C-E-L-L (Capital, Enterprise, Land, Labour)!',
      },
      {
        id: 'igcse-bus-1-1-c2',
        title: 'Enterprise, Business Plans & Added Value',
        summary: 'Raising selling price or cutting material costs to increase added value.',
        bullets: [
          '**Added value** = Selling price − Cost of bought-in materials and components (it is NOT the same as profit because wages, rent, and bills still have to be paid).',
        ],
        subsections: [
          {
            heading: 'How Businesses Increase Added Value',
            bullets: [
              '**Raise selling price** - build a strong brand image, add convenient packaging, improve design/quality, or offer rapid customer service.',
              '**Lower bought-in input costs** - buy raw materials in bulk or switch to cheaper suppliers without sacrificing quality.',
              '**Entrepreneurs & business plans** - entrepreneurs take calculated risks; a written business plan lowers risk and helps persuade banks/investors to lend.',
            ],
            exampleHeading: 'Worked example: Coffee shop added value',
            examples: [
              'A café buys coffee beans, milk, and a cup for £0.65 and sells a branded latte for £3.65.',
              'Added value = £3.65 − £0.65 = £3.00 per cup (out of which rent, barista wages, and electricity must still be paid before profit).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Added value', definition: 'The difference between a product’s selling price and the cost of bought-in raw materials and components.' },
        ],
        commonMistake: 'Students often claim Added Value equals Profit. Instead, Added Value ignores labour wages, rent, and utilities — Profit is only left AFTER subtracting all operating costs!',
      },
      {
        id: 'igcse-bus-1-1-c3',
        title: 'Economic Sectors & Mixed Economies',
        summary: 'Primary, secondary, and tertiary sectors plus private vs public sector aims.',
        bullets: [
          'Businesses operate across three industrial sectors, shifting from primary to secondary to **tertiary** as economies develop (**de-industrialisation**).',
        ],
        subsections: [
          {
            heading: 'Sectors of Industry & Ownership',
            bullets: [
              '**Primary, Secondary & Tertiary** - Primary extracts raw materials (farming, mining); Secondary manufactures goods (car factories, bakeries); Tertiary provides services (banking, retail, tourism).',
              '**Private vs Public sector** - private businesses aim mainly for profit/growth; public corporations (owned by government, e.g. public healthcare or rail) aim to provide affordable essential services.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'de-industrialisation', definition: 'Decline in the importance of secondary manufacturing as a country’s economy shifts toward tertiary services.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Opportunity cost', definition: 'Next best alternative given up by choosing another item or investment.' },
      { term: 'Added value', definition: 'Selling price minus the cost of bought-in raw materials and components.' },
      { term: 'Entrepreneur', definition: 'Person who organises, operates, and takes the financial risk for a new business venture.' },
      { term: 'De-industrialisation', definition: 'Shift in a developed economy away from manufacturing (secondary) toward services (tertiary).' },
    ],
    checklistPoints: [
      'Define scarcity, opportunity cost, and all four factors of production.',
      'Calculate added value and distinguish it clearly from profit.',
      'Classify businesses into primary, secondary, and tertiary sectors and private vs public ownership.',
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
      { time: '0:00', seconds: 0, label: 'Measuring Size & Growth Methods', cardId: 'igcse-bus-1-2-c1' },
      { time: '1:25', seconds: 85, label: 'Unincorporated vs Limited Companies', cardId: 'igcse-bus-1-2-c2' },
      { time: '3:00', seconds: 180, label: 'Franchises, Objectives & Stakeholders', cardId: 'igcse-bus-1-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-1-2-c1',
        title: 'Measuring Size, Internal vs External Growth & Staying Small',
        summary: 'Horizontal, vertical, and conglomerate integration plus why some firms stay small.',
        bullets: [
          'Business size can be measured by number of employees, value of output, value of sales, or **capital employed** — profit is NOT a reliable measure of size.',
        ],
        subsections: [
          {
            heading: 'Types of External Integration',
            bullets: [
              '**Horizontal integration** - merging with a competitor in the same industry and stage (e.g. two car makers) to cut competition and gain economies of scale.',
              '**Vertical integration (forward / backward)** - buying a supplier (backward, securing materials) or a customer/retailer (forward, securing outlets).',
              '**Conglomerate integration** - merging with a firm in an unrelated industry to spread risk.',
            ],
            exampleHeading: 'Case study: Why local florists remain small',
            examples: [
              'Owners value personal customer service, operate in a small local market, or want to keep full control without extra debt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'capital employed', definition: 'Total value of long-term capital invested in a business (shareholders’ equity plus non-current liabilities).' },
        ],
      },
      {
        id: 'igcse-bus-1-2-c2',
        title: 'Sole Traders, Partnerships, Ltd, Plc & Franchises',
        summary: 'Unlimited vs limited liability, raising share capital, and franchising trade-offs.',
        bullets: [
          'The key legal divide is **unlimited liability** (owners can lose personal assets like their house) vs **limited liability** (shareholders risk only what they invested).',
        ],
        subsections: [
          {
            heading: 'Ownership Structures Compared',
            bullets: [
              '**Sole trader & partnership** - quick to set up and keep control, but suffer unlimited liability, limited finance, and no continuity on death.',
              '**Private Limited Company (Ltd)** - separate legal identity and limited liability; shares sold privately to family/friends (no takeover risk on stock market).',
              '**Public Limited Company (Plc)** - raises huge capital by selling shares on a stock exchange, but must publish accounts and risks hostile takeovers.',
              '**Franchise** - franchisee pays a fee and royalty to trade under an established brand (lower failure risk, less independence).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'limited liability', definition: 'Legal protection capping shareholders’ maximum financial loss strictly at the amount they invested in shares.' },
        ],
        commonMistake: 'Students often say a Public Limited Company (Plc) is owned by the government. Instead, a Plc is in the PRIVATE sector — "public" means members of the general public can buy its shares on the stock exchange!',
      },
      {
        id: 'igcse-bus-1-2-c3',
        title: 'Business Objectives & Stakeholder Conflicts',
        summary: 'How objectives evolve over a firm’s life and why stakeholder goals clash.',
        bullets: [
          'Typical private objectives include **survival** (start-ups/recessions), **profit**, **growth**, **market share**, and **social enterprise** goals.',
        ],
        subsections: [
          {
            heading: 'Stakeholder Conflicts',
            bullets: [
              '**Internal vs external stakeholders** - owners/shareholders (high dividends), workers (higher wages & job security), managers (bonuses & expansion), customers (low prices & high quality), community (jobs & low pollution), government (tax revenue).',
              '**Classic conflicts** - raising wages satisfies workers but lowers short-term dividends for shareholders; building a new factory creates jobs but angers local residents concerned about noise and pollution.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'stakeholders', definition: 'Any individual or group with a direct interest in the performance and activities of a business.' },
        ],
        memoryAid: 'Ltd = Private shares (closed circle); Plc = Public stock exchange (still PRIVATE sector)!',
      },
    ],
    keyTerms: [
      { term: 'Limited liability', definition: 'Shareholders can lose only the money they invested in the company, protecting personal assets.' },
      { term: 'Horizontal integration', definition: 'Merger or takeover between two businesses at the same stage of the same industry.' },
      { term: 'Franchise', definition: 'Licence allowing a franchisee to use an established brand name, products, and business model for a fee.' },
      { term: 'Stakeholder', definition: 'Any person or group affected by or interested in a business’s decisions.' },
    ],
    checklistPoints: [
      'Explain horizontal, vertical, and conglomerate integration and why some firms stay small.',
      'Compare sole traders, partnerships, Ltd, Plc, franchises, and joint ventures on liability and finance.',
      'Analyse conflicts between owners, employees, customers, local community, and government.',
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
      { time: '0:00', seconds: 0, label: 'Why Motivation Matters & F.W. Taylor', cardId: 'igcse-bus-2-1-c1' },
      { time: '3:05', seconds: 185, label: 'Maslow’s Hierarchy & Herzberg Two-Factor', cardId: 'igcse-bus-2-1-c2' },
      { time: '6:20', seconds: 380, label: 'Financial & Non-Financial Rewards', cardId: 'igcse-bus-2-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-1-c1',
        title: 'Why Motivation Matters & F.W. Taylor',
        summary: 'Productivity benefits of motivated staff and Taylor’s piece-rate economic man theory.',
        bullets: [
          'Well-motivated employees deliver higher **labour productivity**, lower **absenteeism**, and lower **labour turnover** (cutting recruitment and training costs).',
        ],
        subsections: [
          {
            heading: 'Taylor’s Scientific Management',
            bullets: [
              '**Core idea** - workers are motivated primarily by money ("economic man"), so pay should link directly to output via piece-rate pay.',
              '**Criticism** - ignores social and non-financial needs, does not fit jobs where output cannot be counted easily (e.g. teachers or nurses), and can sacrifice quality for speed.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'labour turnover', definition: 'The rate at which employees leave a business and must be replaced over a year.' },
        ],
      },
      {
        id: 'igcse-bus-2-1-c2',
        title: 'Maslow’s Hierarchy & Herzberg’s Two-Factor Theory',
        summary: 'Five levels of human need (Maslow) and Hygiene vs Motivators (Herzberg).',
        bullets: [
          'Maslow and Herzberg showed that pay alone is not enough for sustained long-term motivation.',
        ],
        subsections: [
          {
            heading: 'Maslow & Herzberg Compared',
            bullets: [
              '**Maslow’s 5 levels (bottom → top)** - Physiological (pay/food) → Safety (job security) → Social (teamwork) → Esteem (recognition/status) → Self-actualisation (reaching full potential). Once a level is met, it stops motivating.',
              '**Herzberg’s Two-Factor Theory** - Hygiene factors (pay, working conditions, company policy) prevent DISSATISFACTION if good, while Motivators (achievement, recognition, responsibility, challenging work) actively CREATE motivation.',
            ],
            exampleHeading: 'Applying Herzberg in a retail store',
            examples: [
              'Fixing broken air conditioning and paying fair wages removes dissatisfaction (hygiene), while letting staff manage their own window display creates genuine motivation (motivator).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Hygiene factors', definition: 'Herzberg’s workplace essentials (pay, conditions, job security) that prevent dissatisfaction but do not actively motivate on their own.' },
          { term: 'Self-actualisation', definition: 'Top level of Maslow’s hierarchy where a worker reaches their full creative potential through challenging work.' },
        ],
        memoryAid: 'Maslow bottom-up: Please Stop Sending Emails Soon (Physiological, Safety, Social, Esteem, Self-actualisation)!',
      },
      {
        id: 'igcse-bus-2-1-c3',
        title: 'Financial & Non-Financial Motivation Methods',
        summary: 'Choosing wages, salaries, commission, profit-sharing, job rotation, enlargement, and enrichment.',
        bullets: [
          'Managers combine **financial rewards** with **non-financial** job design to match the role.',
        ],
        subsections: [
          {
            heading: 'Key Financial vs Non-Financial Tools',
            bullets: [
              '**Financial** - time-rate wages, piece-rate, salaries, commission (sales), bonuses, profit-sharing, and fringe benefits (company car, health insurance).',
              '**Job rotation, enlargement & enrichment** - Rotation swaps similar tasks to beat boredom; Enlargement adds more tasks at the SAME skill level; Enrichment adds higher-level responsibility and decision-making (Herzberg motivator).',
            ],
          },
        ],
        commonMistake: 'Students often confuse Job Enlargement with Job Enrichment. Enlargement adds MORE tasks at the same difficulty (horizontal), whereas Enrichment adds MORE RESPONSIBILITY and skill (vertical)!',
      },
    ],
    keyTerms: [
      { term: 'Motivation', definition: 'The reason why employees want to work hard and work effectively for a business.' },
      { term: 'Hygiene factors', definition: 'Factors such as pay and working conditions that must be met to prevent dissatisfaction (Herzberg).' },
      { term: 'Job enrichment', definition: 'Redesigning a job to include more challenging tasks and greater responsibility.' },
      { term: 'Piece-rate pay', definition: 'Payment method where workers are paid a fixed amount for every unit produced.' },
    ],
    checklistPoints: [
      'Compare Taylor, Maslow’s 5-level hierarchy, and Herzberg’s Hygiene vs Motivator factors.',
      'Recommend suitable financial rewards (piece-rate, commission, salary, profit-sharing) in context.',
      'Distinguish job rotation, job enlargement, and job enrichment clearly.',
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
      { time: '0:00', seconds: 0, label: 'Chain of Command, Span of Control & Delayering', cardId: 'igcse-bus-2-2-c1' },
      { time: '6:30', seconds: 390, label: 'Leadership Styles & Trade Unions', cardId: 'igcse-bus-2-2-c2' },
      { time: '12:45', seconds: 765, label: 'Recruitment, Training & Effective Communication', cardId: 'igcse-bus-2-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-2-2-c1',
        title: 'Organisation Charts, Span of Control & Delayering',
        summary: 'Tall vs flat hierarchies, delegation, and effects of delayering.',
        bullets: [
          'An organisational chart shows **chain of command** (lines of authority top-to-bottom) and **span of control** (number of subordinates reporting directly to one manager).',
        ],
        subsections: [
          {
            heading: 'Tall vs Flat Structures & Delegation',
            bullets: [
              '**Delayering (flattening)** - removing layers of middle management speeds up communication, cuts wage costs, and widens span of control — encouraging **delegation** (passing authority down, while the manager keeps ultimate accountability).',
              '**Trade unions** - employee groups negotiating collectively for better pay, safe working conditions, and legal protection against unfair dismissal.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'span of control', definition: 'The number of subordinates working directly under a single manager.' },
          { term: 'delegation', definition: 'Giving a subordinate the authority to carry out specific tasks while the manager retains overall responsibility.' },
        ],
      },
      {
        id: 'igcse-bus-2-2-c2',
        title: 'Autocratic, Democratic & Laissez-Faire Leadership',
        summary: 'Choosing the right leadership style for crisis, skilled teams, or creative work.',
        bullets: [
          'Effective managers match their leadership style to the urgency of decisions and skill level of the workforce.',
        ],
        subsections: [
          {
            heading: 'Three Leadership Styles',
            bullets: [
              '**Autocratic** - leader makes all decisions alone with one-way commands; ideal in emergencies or with unskilled staff, but can demotivate experienced workers.',
              '**Democratic** - leader consults employees and encourages two-way communication; boosts motivation and better ideas, though slower in crises.',
              '**Laissez-faire** - broad objectives set while staff make day-to-day choices; ideal for creative designers or research scientists, risky with inexperienced workers.',
            ],
            exampleHeading: 'Contextual recommendation: Software studio vs factory fire',
            examples: [
              'A game design studio thrives under democratic or laissez-faire leadership, whereas an emergency factory evacuation demands autocratic command.',
            ],
          },
        ],
        memoryAid: 'Autocratic = Alone; Democratic = Discuss; Laissez-faire = Leave them to lead!',
      },
      {
        id: 'igcse-bus-2-2-c3',
        title: 'Recruitment, Training, Redundancy & Communication Barriers',
        summary: 'Job description vs person specification, induction/on-the-job/off-the-job training, and communication.',
        bullets: [
          'Recruitment begins with a **job description** (duties and responsibilities) and a **person specification** (skills and qualifications needed), followed by internal or external advertising and selection.',
        ],
        subsections: [
          {
            heading: 'Training Types, Dismissal vs Redundancy & Communication',
            bullets: [
              '**Three training types** - Induction (new recruits learning rules/safety), On-the-job (watching an experienced colleague at work — cheap, specific), Off-the-job (external courses — expensive, brings fresh skills).',
              '**Dismissal vs Redundancy** - Dismissal is the employee’s fault (misconduct/incompetence); Redundancy is NOT the employee’s fault (job no longer exists due to automation or falling demand).',
              '**Effective communication** - requires sender, clear message, medium, receiver, and feedback; avoid barriers like jargon, long chains of command, and poor channels.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'person specification', definition: 'Document outlining the qualifications, experience, and personal qualities required for a job role.' },
        ],
        commonMistake: 'Students often confuse redundancy with dismissal. Remember: REDUNDANCY means the JOB is no longer needed (not the worker’s fault); DISMISSAL is because of the worker’s own misconduct or poor performance.',
      },
    ],
    keyTerms: [
      { term: 'Chain of command', definition: 'Structure allowing instructions to be passed down from senior management to lower levels.' },
      { term: 'Span of control', definition: 'Number of subordinates reporting directly to one manager.' },
      { term: 'Delegation', definition: 'Passing authority to perform tasks to subordinates while retaining overall accountability.' },
      { term: 'Redundancy', definition: 'Ending employment because a job role is no longer needed by the business, not due to employee fault.' },
    ],
    checklistPoints: [
      'Explain chain of command, span of control, delegation, and delayering.',
      'Recommend autocratic, democratic, or laissez-faire leadership in real business scenarios.',
      'Contrast internal vs external recruitment, training methods, dismissal vs redundancy, and communication barriers.',
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
      { time: '0:00', seconds: 0, label: 'Market Orientation, Niche vs Mass & Segmentation', cardId: 'igcse-bus-3-1-c1' },
      { time: '2:30', seconds: 150, label: 'Primary Market Research & Sampling', cardId: 'igcse-bus-3-1-c2' },
      { time: '5:00', seconds: 300, label: 'Secondary Research & Data Accuracy', cardId: 'igcse-bus-3-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-1-c1',
        title: 'Market Segmentation, Niche Markets & Mass Markets',
        summary: 'Targeting customer segments and weighing high-margin niches against high-volume mass markets.',
        bullets: [
          '**Market segmentation** divides a whole market into subgroups sharing similar needs (by age, income, gender, location, or lifestyle) so products and adverts hit the exact target audience.',
        ],
        subsections: [
          {
            heading: 'Niche vs Mass Markets',
            bullets: [
              '**Niche market** - small, specialised segment (e.g. vegan hiking boots): less competition and higher profit margins, but limited sales volume and high risk if tastes shift.',
              '**Mass market** - huge total audience (e.g. everyday toothpaste): massive sales volume and economies of scale, but fierce competition and lower margins per unit.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Market segmentation', definition: 'Identifying subgroups of consumers with similar characteristics so a business can tailor its marketing mix.' },
        ],
      },
      {
        id: 'igcse-bus-3-1-c2',
        title: 'Primary Market Research & Sampling Methods',
        summary: 'Collecting first-hand questionnaires, focus groups, and interviews with random vs quota samples.',
        bullets: [
          '**Primary (field) research** collects brand-new data directly from potential customers for the firm’s exact purpose — up-to-date and exclusive, but slower and costlier.',
        ],
        subsections: [
          {
            heading: 'Methods & Sampling',
            bullets: [
              '**Core methods** - questionnaires/online surveys (quantitative statistics), interviews & focus groups (qualitative opinions/reasons), and observation.',
              '**Random vs Quota sampling** - Random gives everyone an equal chance (unbiased, may include non-buyers); Quota selects set numbers from specific target segments (e.g. 50 teenagers, 50 adults — focused, risk of interviewer bias).',
            ],
            exampleHeading: 'Worked example: Launching a gluten-free snack bar',
            examples: [
              'A small bakery runs a focus group of 12 coeliac shoppers (primary qualitative) to test taste and packaging before spending £20,000 on production.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Primary (field) research', definition: 'Collection and collation of original, first-hand data directly from customers for a specific business need.' },
        ],
        memoryAid: 'Primary = First-hand (Fresh, Focused, Pricey); Secondary = Second-hand (Speedy, Cheap, Shared)!',
      },
      {
        id: 'igcse-bus-3-1-c3',
        title: 'Secondary Research & Factors Affecting Data Accuracy',
        summary: 'Using government statistics, trade reports, and internal records while spotting bias.',
        bullets: [
          '**Secondary (desk) research** uses data already collected by others (government census, market reports, competitor websites, internal sales records) — fast and cheap, but can be outdated or available to rivals.',
        ],
        subsections: [
          {
            heading: 'Why Market Research Can Be Inaccurate',
            bullets: [
              '**Sample size & bias** - tiny samples do not represent the whole market; leading questions distort answers.',
              '**Outdated data** - rapidly changing tech or fashion trends quickly make 3-year-old secondary reports unreliable.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Secondary (desk) research', definition: 'Using existing information already gathered for another purpose, such as government data or trade journals.' },
        ],
        commonMistake: 'Students often say primary research is always better than secondary research. Instead, smart businesses run cheap SECONDARY research first to understand market size, then targeted PRIMARY research to test their exact product!',
      },
    ],
    keyTerms: [
      { term: 'Market segmentation', definition: 'Dividing a market into identifiable subgroups of consumers with shared needs.' },
      { term: 'Niche market', definition: 'Small, specialised segment of a much larger market with specific customer needs.' },
      { term: 'Primary research', definition: 'Gathering original first-hand data directly from customers for a specific business purpose.' },
      { term: 'Secondary research', definition: 'Using existing information already collected by internal records or external organisations.' },
    ],
    checklistPoints: [
      'Compare niche and mass markets and segment customers by age, income, gender, location, and lifestyle.',
      'Compare primary (questionnaires, focus groups, observation) and secondary research on cost, speed, and relevance.',
      'Evaluate random vs quota sampling and explain causes of inaccurate research data.',
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
      { time: '0:00', seconds: 0, label: 'Product Life Cycle & Extension Strategies', cardId: 'igcse-bus-3-2-c1' },
      { time: '3:30', seconds: 210, label: 'Pricing Strategies & Price Elasticity of Demand', cardId: 'igcse-bus-3-2-c2' },
      { time: '7:00', seconds: 420, label: 'Place, Promotion & E-Commerce', cardId: 'igcse-bus-3-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-3-2-c1',
        title: 'Product: Branding, Packaging & Product Life Cycle',
        summary: 'Stages of the product life cycle and extension strategies to prevent decline.',
        bullets: [
          'Every product moves through the **Product Life Cycle**: Development → Introduction → Growth → Maturity → Decline.',
        ],
        subsections: [
          {
            heading: 'Branding & Extension Strategies',
            bullets: [
              '**Brand image & packaging** - unique branding builds customer loyalty and allows higher prices; packaging protects the product, gives legal info, and attracts buyers on shelves.',
              '**Extension strategies** - used during Maturity/Decline to prolong profitable sales: add new flavours/features, enter overseas markets, redesign packaging, or launch fresh ad campaigns.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Product Life Cycle', definition: 'Stages a product passes through over time: development, introduction, growth, maturity, and decline.' },
        ],
      },
      {
        id: 'igcse-bus-3-2-c2',
        title: 'Price: Pricing Strategies & Price Elasticity of Demand (PED)',
        summary: 'Cost-plus, competitive, penetration, skimming, promotional pricing, and PED revenue impacts.',
        diagram: 'supply-demand-equilibrium',
        bullets: [
          'Choosing the right pricing strategy depends on brand strength, competition, and **price elasticity of demand (PED)**.',
        ],
        subsections: [
          {
            heading: 'Five Pricing Strategies & PED',
            bullets: [
              '**Price skimming vs Penetration** - Skimming launches a unique/innovative product at a HIGH price (e.g. new smartphone) to recover R&D costs; Penetration launches LOW to break into a crowded market and build market share quickly.',
              '**Cost-plus, Competitive & Promotional** - Cost-plus adds a % mark-up to unit cost; Competitive matches rivals; Promotional cuts prices briefly to clear stock.',
              '**Price Elastic vs Inelastic Demand** - Elastic (many substitutes): raising price causes a larger % drop in sales → revenue FALLS. Inelastic (essentials/strong brand): raising price causes a smaller % drop in sales → revenue RISES.',
            ],
            exampleHeading: 'Worked example: Cost-plus pricing',
            examples: [
              'A jacket costs £40 to manufacture and the brand applies a 60% mark-up.',
              'Selling price = £40 × 1.60 = £64.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of demand', definition: 'A measure of how responsive quantity demanded is to a change in price (elastic = sensitive; inelastic = insensitive).' },
        ],
        commonMistake: 'Students often say raising price ALWAYS increases revenue. If demand is PRICE ELASTIC (lots of close substitutes), raising price actually REDUCES total revenue!',
      },
      {
        id: 'igcse-bus-3-2-c3',
        title: 'Place, Promotion & E-Commerce',
        summary: 'Distribution channels, above/below-the-line promotion, and e-commerce trade-offs.',
        bullets: [
          '**Place** selects distribution channels (direct to consumer, via retailers, or via wholesalers + retailers), while **Promotion** informs and persuades buyers.',
        ],
        subsections: [
          {
            heading: 'Promotion & E-Commerce',
            bullets: [
              '**Advertising vs Sales Promotion** - Advertising (TV, social media, billboards) builds long-term brand image; Sales promotion (BOGOF, vouchers, free samples, loyalty points) creates short-term sales spikes.',
              '**E-commerce** - sells 24/7 globally with lower retail rent costs, but faces intense online price comparison, delivery/returns logistics, and inability for shoppers to touch/try goods.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'E-commerce', definition: 'Buying and selling goods and services electronically over the internet.' },
        ],
        memoryAid: '4 Ps must stay consistent: luxury Product = skimming Price + exclusive Place + glossy Promotion!',
      },
    ],
    keyTerms: [
      { term: 'Product life cycle', definition: 'Stages a product passes through from launch to withdrawal: introduction, growth, maturity, decline.' },
      { term: 'Price skimming', definition: 'Setting a high launch price for a new, unique product to maximise profit from early adopters.' },
      { term: 'Penetration pricing', definition: 'Setting a low initial price to attract customers quickly and gain market share.' },
      { term: 'Price elasticity of demand', definition: 'Responsiveness of demand to a price change.' },
    ],
    checklistPoints: [
      'Draw the Product Life Cycle and suggest appropriate extension strategies.',
      'Select skimming, penetration, cost-plus, competitive, or promotional pricing using PED.',
      'Evaluate distribution channels, advertising vs sales promotion, and e-commerce.',
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
      { time: '0:00', seconds: 0, label: 'Job, Batch & Flow Production Compared', cardId: 'igcse-bus-4-1-c1' },
      { time: '4:45', seconds: 285, label: 'Labour Productivity & Automation', cardId: 'igcse-bus-4-1-c2' },
      { time: '8:30', seconds: 510, label: 'Lean Production: Kaizen & Just-in-Time (JIT)', cardId: 'igcse-bus-4-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-1-c1',
        title: 'Job, Batch & Flow Production Methods',
        summary: 'Choosing custom job, flexible batch, or high-volume flow production.',
        bullets: [
          'Operations managers pick a production method based on demand volume, product customisation, and capital budget.',
        ],
        subsections: [
          {
            heading: 'Three Core Production Methods',
            bullets: [
              '**Job production** - one-off custom item made to individual order (wedding dress, custom bridge): high quality and worker motivation, but slow and high unit cost.',
              '**Batch production** - groups of identical items made together (bakery loaves, clothing sizes): flexible variety, but machine changeover downtime and storage costs.',
              '**Flow (mass) production** - continuous assembly line for standardised goods (soft drinks, smartphones): ultra-low unit cost and high output, but huge set-up capital cost and dull repetitive jobs.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Flow (mass) production', definition: 'Continuous production of large quantities of identical, standardised products along a production line.' },
        ],
      },
      {
        id: 'igcse-bus-4-1-c2',
        title: 'Productivity, Buffer Inventory & Production Technology',
        summary: 'Calculating labour productivity and evaluating CAD/CAM automation.',
        bullets: [
          '**Labour productivity** = Total output ÷ Number of employees; higher productivity lowers average labour cost per unit.',
        ],
        subsections: [
          {
            heading: 'Boosting Productivity & Automation',
            bullets: [
              '**Raising productivity** - train staff, improve motivation, introduce automation/robotics (CAM), and reorganise factory layouts.',
              '**Technology trade-offs** - automated machinery cuts unit costs and human error, but demands heavy upfront investment and can trigger worker redundancy fears.',
            ],
            exampleHeading: 'Worked example: Factory labour productivity',
            examples: [
              'A factory produces 12,000 chairs per week with 60 workers → Labour productivity = 12,000 ÷ 60 = 200 chairs/worker/week.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Labour productivity', definition: 'Output produced per worker over a given time period (Total output ÷ Number of workers).' },
        ],
      },
      {
        id: 'igcse-bus-4-1-c3',
        title: 'Lean Production: Kaizen & Just-in-Time (JIT)',
        summary: 'Cutting waste through continuous improvement (Kaizen) and zero-warehouse JIT stock control.',
        bullets: [
          '**Lean production** eliminates waste (defects, overproduction, waiting time, excess inventory) to slash unit costs without cutting quality.',
        ],
        subsections: [
          {
            heading: 'Kaizen & Just-in-Time Inventory',
            bullets: [
              '**Kaizen (continuous improvement)** - regular small improvements suggested by shop-floor workers boost efficiency and motivation without huge capital spending.',
              '**Just-in-Time (JIT)** - raw materials arrive moments before needed on the line, eliminating warehouse rent, insurance, and spoilage — but relies completely on ultra-reliable suppliers because any late delivery halts the entire factory!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Just-in-Time (JIT)', definition: 'Lean inventory method ordering materials to arrive only as needed in production, minimising stock-holding costs.' },
        ],
        memoryAid: 'JIT = Zero warehouse waste, but needs 100% reliable suppliers!',
        commonMistake: 'Students often say JIT eliminates all costs. Instead, JIT eliminates WAREHOUSE/STORAGE costs, while potentially increasing delivery frequency costs and vulnerability to supply delays.',
      },
    ],
    keyTerms: [
      { term: 'Job production', definition: 'Making a single unique custom product from start to finish to meet a specific order.' },
      { term: 'Batch production', definition: 'Producing a set quantity of identical products before switching equipment to another batch.' },
      { term: 'Lean production', definition: 'Techniques used to cut down on waste and increase operational efficiency.' },
      { term: 'Kaizen', definition: 'Japanese lean philosophy of continuous small improvements suggested by employees.' },
    ],
    checklistPoints: [
      'Compare job, batch, and flow production with real-world examples.',
      'Calculate labour productivity and evaluate CAD/CAM automation.',
      'Explain how Kaizen and Just-in-Time (JIT) reduce waste and evaluate JIT supplier risks.',
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
      { time: '3:15', seconds: 195, label: 'Break-Even Output & Margin of Safety', cardId: 'igcse-bus-4-2-c2' },
      { time: '6:40', seconds: 400, label: 'Economies of Scale & Quality Assurance', cardId: 'igcse-bus-4-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-2-c1',
        title: 'Fixed, Variable, Total & Average Costs',
        summary: 'Classifying business costs and calculating average cost per unit.',
        bullets: [
          'Understanding how costs behave with output lets managers price profitably and forecast break-even levels.',
        ],
        subsections: [
          {
            heading: 'Cost Definitions & Equations',
            bullets: [
              '**Fixed costs (FC)** - stay constant in the short run regardless of output (rent, insurance, manager salaries).',
              '**Variable costs (VC)** - rise directly in proportion to output (raw materials, packaging, piece-rate labour).',
              '**Total & Average costs** - Total Cost (TC) = FC + VC; Average Cost per unit = TC ÷ Output.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Fixed costs', definition: 'Business costs (such as rent and insurance) that do not change with the level of output in the short run.' },
        ],
      },
      {
        id: 'igcse-bus-4-2-c2',
        title: 'Break-Even Analysis & Margin of Safety',
        summary: 'Computing break-even output, contribution per unit, and margin of safety.',
        diagram: 'break-even-chart',
        bullets: [
          'The **break-even point** is the exact output level where **Total Revenue = Total Cost** (zero profit and zero loss).',
        ],
        subsections: [
          {
            heading: 'Break-Even Formulas & Worked Calculation',
            bullets: [
              '**Contribution per unit** - Selling price − Variable cost per unit.',
              '**Break-even output** - Fixed Costs ÷ Contribution per unit.',
              '**Margin of safety** - Actual (or forecast) sales − Break-even output (shows how far sales can fall before making a loss).',
            ],
            exampleHeading: 'Worked example: T-shirt printer break-even',
            examples: [
              'Fixed costs = £6,000/month, variable cost = £4/shirt, selling price = £10/shirt, forecast sales = 1,400 shirts.',
              'Contribution = £10 − £4 = £6 → Break-even = £6,000 ÷ £6 = 1,000 shirts → Margin of safety = 1,400 − 1,000 = 400 shirts.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Margin of safety', definition: 'The amount by which actual or forecast sales exceed the break-even level of output.' },
        ],
        commonMistake: 'Students often divide Fixed Costs by Selling Price instead of Contribution (Price − Variable Cost). Always subtract variable cost per unit first!',
      },
      {
        id: 'igcse-bus-4-2-c3',
        title: 'Economies of Scale, Diseconomies & Quality Control vs Assurance',
        summary: 'Lower average costs at scale, communication diseconomies, and preventing defects.',
        bullets: [
          '**Economies of scale** are factors that lower average unit cost as a firm grows (purchasing bulk discounts, marketing, financial, managerial, technical); growing too big causes **diseconomies of scale** (poor communication, low morale, slow decisions).',
        ],
        subsections: [
          {
            heading: 'Quality Control vs Quality Assurance',
            bullets: [
              '**Quality control** - inspecting finished products at the END of the line to catch defects (wastes faulty output already made).',
              '**Quality assurance (and TQM)** - building quality checks into EVERY stage of production so defects are prevented before they occur (cuts waste, boosts brand reputation, requires staff training).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Economies of scale', definition: 'Cost advantages that reduce average cost per unit as a business increases its scale of production.' },
        ],
        memoryAid: '5 Economies of Scale = Really Fun Monkeys Play Tennis (Risk-bearing/Financial, Managerial, Purchasing, Technical)!',
      },
    ],
    keyTerms: [
      { term: 'Fixed costs', definition: 'Costs that do not vary with output in the short run, such as rent and insurance.' },
      { term: 'Break-even output', definition: 'Output level where Total Revenue equals Total Cost (Fixed Costs ÷ Contribution per unit).' },
      { term: 'Margin of safety', definition: 'Difference between current/forecast output and break-even output.' },
      { term: 'Quality assurance', definition: 'Preventing defects by building quality standards into every stage of production.' },
    ],
    checklistPoints: [
      'Calculate fixed, variable, total, and average costs cleanly.',
      'Calculate contribution, break-even output, and margin of safety, and interpret a break-even chart.',
      'Compare economies vs diseconomies of scale and quality control vs quality assurance.',
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
      { time: '0:00', seconds: 0, label: 'Internal vs External Sources of Finance', cardId: 'igcse-bus-5-1-c1' },
      { time: '4:10', seconds: 250, label: 'Building a Cash-Flow Forecast', cardId: 'igcse-bus-5-1-c2' },
      { time: '8:30', seconds: 510, label: 'Working Capital & Fixing Cash Shortages', cardId: 'igcse-bus-5-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-1-c1',
        title: 'Internal vs External Sources of Finance',
        summary: 'Retained profit, overdrafts, bank loans, share issue, leasing, and crowdfunding.',
        bullets: [
          'Businesses match the finance source to the time horizon (short-term working capital vs long-term expansion) and legal structure.',
        ],
        subsections: [
          {
            heading: 'Internal vs External Finance',
            bullets: [
              '**Internal (no interest, no loss of control)** - retained profit (only available to established profitable firms), selling unused non-current assets, reducing excess inventory.',
              '**External short-term** - bank overdraft (flexible, high daily interest), trade credit (buy now, pay supplier in 30–60 days), debt factoring.',
              '**External long-term** - bank loan (fixed repayments + interest), issuing shares (Ltd/Plc only — no interest, dilutes ownership), leasing, venture capital, crowdfunding.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'retained profit', definition: 'Profit kept inside the business after paying taxes and dividends to owners, reinvested interest-free.' },
        ],
      },
      {
        id: 'igcse-bus-5-1-c2',
        title: 'Cash-Flow Forecasting Calculations',
        summary: 'Computing Net Cash Flow and Closing Balance month by month.',
        bullets: [
          'A **cash-flow forecast** predicts monthly cash inflows and outflows so managers spot liquidity shortfalls months in advance.',
        ],
        subsections: [
          {
            heading: 'Two Essential Forecast Equations',
            bullets: [
              '**Net Cash Flow** - Total Cash Inflows − Total Cash Outflows.',
              '**Closing Balance** - Opening Balance + Net Cash Flow (and this month’s Closing Balance becomes next month’s Opening Balance!).',
            ],
            exampleHeading: 'Worked example: January cash-flow forecast',
            examples: [
              'Opening balance = £2,000; Cash inflows = £9,500; Cash outflows = £12,000.',
              'Net cash flow = £9,500 − £12,000 = −£2,500 → Closing balance = £2,000 + (−£2,500) = −£500 (overdraft needed!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cash-flow forecast', definition: 'An estimate of future monthly cash inflows, cash outflows, and expected closing bank balances.' },
        ],
        commonMistake: 'Students often confuse CASH with PROFIT. A profitable firm can still go bankrupt (insolvent) if customers buy on 60-day credit while rent and wages must be paid in cash today!',
      },
      {
        id: 'igcse-bus-5-1-c3',
        title: 'Working Capital & Overcoming Short-Term Cash Problems',
        summary: 'Managing day-to-day liquidity via overdrafts, chasing debtors, and delaying supplier payments.',
        bullets: [
          '**Working capital** = Current Assets − Current Liabilities: the liquid funds needed to pay everyday bills like wages and stock.',
        ],
        subsections: [
          {
            heading: 'Four Ways to Fix a Short-Term Cash Deficit',
            bullets: [
              '**Speed up inflows** - ask credit customers (debtors) to pay faster (offer early-payment discounts) or arrange a short-term bank overdraft.',
              '**Slow down outflows** - negotiate longer trade credit from suppliers or delay non-essential capital purchases (e.g. lease instead of buying a van outright).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Working capital', definition: 'Capital available to a business for day-to-day running costs (Current Assets − Current Liabilities).' },
        ],
        memoryAid: 'Cash is King: Profit pays off long-term, but CASH pays today’s rent and wages!',
      },
    ],
    keyTerms: [
      { term: 'Retained profit', definition: 'Profit kept within the business after taxes and dividends for reinvestment.' },
      { term: 'Overdraft', definition: 'Flexible short-term bank facility allowing a business to withdraw more than its current account balance.' },
      { term: 'Net cash flow', definition: 'Difference between total cash inflows and total cash outflows in a given month.' },
      { term: 'Working capital', definition: 'Current assets minus current liabilities, used to finance day-to-day business operations.' },
    ],
    checklistPoints: [
      'Recommend appropriate internal or external finance sources for short- and long-term needs.',
      'Calculate net cash flow and closing balances accurately in a cash-flow forecast.',
      'Distinguish cash flow from profit and suggest practical fixes for short-term cash deficits.',
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
      { time: '0:00', seconds: 0, label: 'Income Statement: Revenue, Gross & Net Profit', cardId: 'igcse-bus-5-2-c1' },
      { time: '2:20', seconds: 140, label: 'Statement of Financial Position (Balance Sheet)', cardId: 'igcse-bus-5-2-c2' },
      { time: '4:30', seconds: 270, label: 'Profitability & Liquidity Ratios', cardId: 'igcse-bus-5-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-2-c1',
        title: 'Income Statements (Profit & Loss Account)',
        summary: 'Computing Gross Profit, Operating/Net Profit, and Retained Profit.',
        bullets: [
          'An **income statement** records a business’s revenue, costs, and profit earned over a full financial year.',
        ],
        subsections: [
          {
            heading: 'Income Statement Equations',
            bullets: [
              '**Gross Profit** - Revenue − Cost of Sales (direct material/manufacturing costs).',
              '**Profit (Net Profit)** - Gross Profit − Expenses (overheads like rent, marketing, admin salaries).',
              '**Retained Profit** - Profit after tax − Dividends paid to shareholders.',
            ],
            exampleHeading: 'Worked example: Annual income statement',
            examples: [
              'Revenue = £200,000, Cost of sales = £120,000, Expenses = £50,000.',
              'Gross profit = £80,000 → Net profit = £80,000 − £50,000 = £30,000.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Gross Profit', definition: 'Revenue minus the direct cost of sales before deducting indirect operating expenses.' },
        ],
      },
      {
        id: 'igcse-bus-5-2-c2',
        title: 'Statement of Financial Position (Balance Sheet)',
        summary: 'Assets, liabilities, and shareholders’ equity at one snapshot date.',
        bullets: [
          'A **Statement of Financial Position** is a one-day snapshot showing what a business OWNS (assets) and OWES (liabilities).',
        ],
        subsections: [
          {
            heading: 'Assets & Liabilities Breakdown',
            bullets: [
              '**Non-current vs Current Assets** - Non-current assets last >1 year (buildings, machinery, vehicles); Current assets turn to cash within 1 year (inventory, trade receivables/debtors, cash).',
              '**Current vs Non-current Liabilities** - Current liabilities are owed within 1 year (trade payables, overdraft); Non-current liabilities are long-term loans (>1 year).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Statement of Financial Position', definition: 'Accounting snapshot listing a business’s assets, liabilities, and capital on a specific date.' },
        ],
      },
      {
        id: 'igcse-bus-5-2-c3',
        title: 'Profitability & Liquidity Ratios',
        summary: 'Computing GPM, NPM, ROCE, Current Ratio, and Acid-Test Ratio.',
        bullets: [
          'Financial ratios allow fair comparisons between different years and rival companies of different sizes.',
        ],
        subsections: [
          {
            heading: 'Five Core IGCSE Financial Ratios',
            bullets: [
              '**Gross Profit Margin (GPM)** - (Gross Profit ÷ Revenue) × 100%; **Profit Margin (NPM)** = (Net Profit ÷ Revenue) × 100%.',
              '**ROCE** - (Net Profit ÷ Capital Employed) × 100% — measures how efficiently invested capital generates profit.',
              '**Current Ratio & Acid-Test Ratio** - Current Ratio = Current Assets ÷ Current Liabilities (healthy ~1.5–2.0); Acid-Test = (Current Assets − Inventory) ÷ Current Liabilities (healthy ≥ 1.0, removes slow-selling stock).',
            ],
            exampleHeading: 'Worked example: Acid-test liquidity check',
            examples: [
              'Current assets = £40,000 (including £15,000 inventory); Current liabilities = £25,000.',
              'Current ratio = 40,000 ÷ 25,000 = 1.6 : 1; Acid-test = (40,000 − 15,000) ÷ 25,000 = 1.0 : 1 (safe liquidity).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Acid-Test Ratio', definition: 'Strict liquidity ratio excluding inventory: (Current Assets − Inventory) ÷ Current Liabilities.' },
        ],
        memoryAid: 'Liquidity = Ability to pay short-term bills; Acid-test strips out slow-to-sell Inventory!',
        commonMistake: 'Students often include inventory in the Acid-Test Ratio. Remember: Acid-Test = (Current Assets − Inventory) ÷ Current Liabilities because inventory is the least liquid current asset!',
      },
    ],
    keyTerms: [
      { term: 'Gross profit', definition: 'Revenue minus direct cost of sales.' },
      { term: 'Profit margin', definition: 'Net profit expressed as a percentage of revenue: (Net profit ÷ Revenue) × 100.' },
      { term: 'ROCE', definition: 'Return on Capital Employed = (Net profit ÷ Capital employed) × 100.' },
      { term: 'Liquidity', definition: 'The ability of a business to pay back its short-term debts on time.' },
    ],
    checklistPoints: [
      'Calculate gross profit, net profit, and retained profit on an income statement.',
      'Classify non-current/current assets and liabilities on a statement of financial position.',
      'Calculate and interpret GPM, NPM, ROCE, Current Ratio, and Acid-Test Ratio.',
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
      { time: '0:00', seconds: 0, label: 'The Business Cycle & Government Objectives', cardId: 'igcse-bus-6-1-c1' },
      { time: '4:40', seconds: 280, label: 'Fiscal & Monetary Policy (Taxes & Interest Rates)', cardId: 'igcse-bus-6-1-c2' },
      { time: '9:10', seconds: 550, label: 'Exchange Rates: SPICED / WPIDEC', cardId: 'igcse-bus-6-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-1-c1',
        title: 'The Business Cycle & Economic Objectives',
        summary: 'Growth, boom, recession, and slump impacts on sales, wages, and inflation.',
        bullets: [
          'Governments aim for steady economic growth (rising **GDP**), low **inflation**, low unemployment, and a healthy balance of payments.',
        ],
        subsections: [
          {
            heading: 'Four Stages of the Business Cycle',
            bullets: [
              '**Growth & Boom** - rising incomes and strong consumer spending boost luxury sales, though skill shortages and inflation push wages and costs up.',
              '**Recession & Slump** - falling GDP and rising unemployment cut demand for non-essential goods (while discount supermarkets may benefit as shoppers trade down).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'GDP', definition: 'Gross Domestic Product — the total value of output of goods and services produced in a country in one year.' },
          { term: 'inflation', definition: 'A sustained increase in the average price level of goods and services over time, reducing money’s purchasing power.' },
        ],
      },
      {
        id: 'igcse-bus-6-1-c2',
        title: 'Fiscal Policy (Taxes) & Monetary Policy (Interest Rates)',
        summary: 'How income tax, corporation tax, VAT, and higher interest rates affect businesses.',
        bullets: [
          'Governments steer the economy using **fiscal policy** (taxes and government spending) and **monetary policy** (interest rates).',
        ],
        subsections: [
          {
            heading: 'Tax & Interest Rate Effects',
            bullets: [
              '**Direct & indirect taxes** - higher income tax cuts consumers’ disposable income; higher corporation tax reduces retained profit for reinvestment; higher VAT/tariffs raise prices.',
              '**Higher interest rates** - make bank loans more expensive (discouraging business expansion), reward saving over spending, and increase household mortgage payments (cutting retail demand).',
            ],
          },
        ],
      },
      {
        id: 'igcse-bus-6-1-c3',
        title: 'Exchange Rates: Appreciation vs Depreciation',
        summary: 'Predicting exporter and importer winners and losers using SPICED.',
        bullets: [
          'An **exchange rate** is the price of one currency in terms of another (e.g. £1 = $1.25).',
        ],
        subsections: [
          {
            heading: 'SPICED Rule for Currency Movements',
            bullets: [
              '**Appreciation (Stronger Pound)** - SPICED: Strong Pound makes Imports Cheaper (helps firms importing raw materials) and Exports Dearer (hurts exporters selling abroad).',
              '**Depreciation (Weaker Pound)** - makes exports cheaper for foreign buyers (boosting export sales) but makes imported materials more expensive.',
            ],
            exampleHeading: 'Worked example: Export price when £1 rises from $1.20 to $1.40',
            examples: [
              'A UK bicycle priced at £500 costs US buyers 500 × 1.20 = $600 before appreciation, rising to 500 × 1.40 = $700 after appreciation — reducing US demand.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'exchange rate', definition: 'The price of one country’s currency expressed in terms of another currency.' },
        ],
        memoryAid: 'SPICED = Strong Pound: Imports Cheaper, Exports Dearer!',
        commonMistake: 'Students often think a stronger home currency helps exporters. Check SPICED: a Strong home currency makes Exports DEARER (more expensive) abroad, hurting exporters!',
      },
    ],
    keyTerms: [
      { term: 'Recession', definition: 'Period of falling GDP accompanied by falling consumer spending and rising unemployment.' },
      { term: 'Inflation', definition: 'Sustained rise in average prices across an economy over time.' },
      { term: 'Interest rate', definition: 'The cost of borrowing money or the reward paid for saving.' },
      { term: 'Exchange rate', definition: 'Value of one currency expressed in terms of another currency.' },
    ],
    checklistPoints: [
      'Analyse how boom and recession affect different types of businesses.',
      'Explain the impacts of changes in income tax, corporation tax, VAT, and interest rates.',
      'Apply SPICED to calculate and evaluate exchange-rate impacts on exporters and importers.',
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
      { time: '0:00', seconds: 0, label: 'Sustainable Production, Externalities & Pressure Groups', cardId: 'igcse-bus-6-2-c1' },
      { time: '2:00', seconds: 120, label: 'Globalisation, Tariffs & Quotas', cardId: 'igcse-bus-6-2-c2' },
      { time: '3:50', seconds: 230, label: 'Multinational Companies (MNCs) Pros & Cons', cardId: 'igcse-bus-6-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-2-c1',
        title: 'Environment, Externalities, Ethics & Pressure Groups',
        summary: 'Balancing green/ethical costs against brand loyalty and pressure group boycotts.',
        bullets: [
          'Businesses increasingly adopt **sustainable development** — meeting today’s needs without compromising future generations — to avoid fines and consumer boycotts.',
        ],
        subsections: [
          {
            heading: 'External Costs, Pressure Groups & Ethics',
            bullets: [
              '**External costs & pressure groups** - pollution and congestion impose external costs on society; **pressure groups** campaign and organise boycotts to force eco-friendly or ethical practices (e.g. fair wages, no child labour).',
              '**Ethical trade-off** - paying Fairtrade suppliers or using recycled packaging raises short-term costs, but strengthens brand reputation, attracts ethical shoppers, and boosts employee morale.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pressure groups', definition: 'Organisations formed by people with a shared cause who try to influence business decisions and government policy (e.g. via boycotts).' },
          { term: 'sustainable development', definition: 'Business activity and economic growth that does not deplete finite resources or harm the environment for future generations.' },
        ],
      },
      {
        id: 'igcse-bus-6-2-c2',
        title: 'Globalisation, Tariffs & Import Quotas',
        summary: 'Global trade opportunities, foreign competition, and protectionist barriers.',
        bullets: [
          '**Globalisation** is the growing worldwide integration of markets, trade, and production across borders.',
        ],
        subsections: [
          {
            heading: 'Opportunities, Threats & Trade Barriers',
            bullets: [
              '**Opportunities vs threats** - firms can sell to billions of overseas consumers and source cheaper materials abroad, but face fierce foreign rivals competing on price.',
              '**Tariffs vs Quotas** - a tariff is a TAX placed on imported goods (raising their price); a quota is a physical LIMIT on the maximum quantity of an imported good allowed in.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Globalisation', definition: 'The process by which businesses, markets, and countries become increasingly interconnected through international trade and investment.' },
        ],
      },
      {
        id: 'igcse-bus-6-2-c3',
        title: 'Multinational Companies (MNCs): Host-Country Impact',
        summary: 'Weighing jobs, taxes, and infrastructure against profit repatriation and local rivalry.',
        bullets: [
          'A **Multinational Company (MNC)** operates production factories or service outlets in MORE THAN ONE country (not merely exporting!).',
        ],
        subsections: [
          {
            heading: 'Host Country Benefits vs Drawbacks',
            bullets: [
              '**Benefits to host country** - creates local jobs and raises GDP, pays corporate taxes, brings advanced technology/training, and builds local roads/infrastructure.',
              '**Drawbacks to host country** - local small rivals may be forced out of business, jobs created may be low-skilled, scarce natural resources can be depleted, and profits are often sent back (repatriated) to the home country.',
            ],
            exampleHeading: 'Case study: Car manufacturer opening an assembly plant abroad',
            examples: [
              'The MNC gains lower wage costs and avoids import tariffs inside that trade bloc, while the host nation gains 2,500 factory jobs — though profits flow back to headquarters.',
            ],
          },
        ],
        memoryAid: 'Tariff = Tax on imports; Quota = Quantity limit on imports!',
        commonMistake: 'Students often call any company that exports products abroad a Multinational (MNC). An MNC must physically OPERATE factories, offices, or stores in more than one country!',
      },
    ],
    keyTerms: [
      { term: 'Pressure group', definition: 'Group campaigning to influence business behaviour or government laws through protests, lobbying, or boycotts.' },
      { term: 'Globalisation', definition: 'Increasing worldwide movement of goods, services, capital, and labour across borders.' },
      { term: 'Tariff', definition: 'Government tax imposed on imported goods to make them more expensive than domestic alternatives.' },
      { term: 'Multinational company (MNC)', definition: 'Business with factories, production, or service operations in more than one country.' },
    ],
    checklistPoints: [
      'Evaluate the financial costs and reputational benefits of sustainable and ethical decisions.',
      'Explain globalisation opportunities/threats and contrast import tariffs with import quotas.',
      'Evaluate the advantages and disadvantages of MNCs for both the business and host countries.',
    ],
  },
};

export const IGCSE_BUSINESS_QUIZZES: QuizQuestion[] = [
  // 1.1 (5)
  { id: 'igbus-q-101', subtopicId: 'igcse-bus-1-1', type: 'mcq', marks: 1, prompt: 'A café buys coffee beans, milk, and a cup for £0.70 and sells the coffee for £3.50. What is the added value per cup?', options: ['£4.20', '£2.80', '£3.50', '£0.70'], correctIndex: 1, explanation: 'Added value = Selling price (£3.50) − Bought-in materials (£0.70) = £2.80.' },
  { id: 'igbus-q-102', subtopicId: 'igcse-bus-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the definitions of scarcity and opportunity cost.', segments: ['Unlimited wants versus scarce resources forces choices, and the next best alternative given up is the ', '; the four factors of production are land, labour, capital, and ', '.'], wordBank: ['opportunity cost', 'enterprise', 'added value', 'revenue'], answers: ['opportunity cost', 'enterprise'], explanation: 'Scarcity creates opportunity cost; C-E-L-L lists the 4 factors of production.' },
  { id: 'igbus-q-103', subtopicId: 'igcse-bus-1-1', type: 'matching', marks: 3, prompt: 'Match each business activity to its economic sector.', pairs: [{ left: 'Copper mining & wheat farming', right: 'Primary sector' }, { left: 'Car assembly & bread baking', right: 'Secondary sector' }, { left: 'Banking, hotels & retail shops', right: 'Tertiary sector' }], explanation: 'Primary extracts raw materials; secondary manufactures; tertiary delivers services.' },
  { id: 'igbus-q-104', subtopicId: 'igcse-bus-1-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO valid ways a clothing brand can increase Added Value.', options: ['Build a strong designer brand image to charge a higher selling price', 'Negotiate bulk discounts to lower fabric costs without cutting quality', 'Double the wages paid to retail shop assistants', 'Increase monthly store rent payments'], correctIndices: [0, 1], explanation: 'Added value rises by raising selling price (branding/quality/convenience) or lowering bought-in material costs.' },
  { id: 'igbus-q-105', subtopicId: 'igcse-bus-1-1', type: 'short-answer', marks: 2, prompt: 'Explain why Added Value is NOT the same as Profit.', rubric: { maxMarks: 2, modelAnswer: 'Added value only subtracts bought-in raw material costs from selling price, whereas profit is left only after also subtracting operating expenses such as wages, rent, and electricity.', markPoints: [{ id: 'mp1', markDescription: 'Added value = selling price minus bought-in materials only', requiredKeywordGroups: [['material', 'component', 'selling price']] }, { id: 'mp2', markDescription: 'Other operating costs (wages, rent, bills) must still be paid before profit', requiredKeywordGroups: [['wage', 'rent', 'expense', 'other cost', 'overhead']] }] }, explanation: 'Wages, rent, marketing, and energy costs must still be deducted from added value to reach profit.' },

  // 1.2 (5)
  { id: 'igbus-q-106', subtopicId: 'igcse-bus-1-2', type: 'mcq', marks: 1, prompt: 'Which business organisation enjoys limited liability while keeping shares private among family and friends?', options: ['Sole trader', 'Partnership', 'Private Limited Company (Ltd)', 'Public Limited Company (Plc)'], correctIndex: 2, explanation: 'An Ltd offers limited liability and private share ownership without stock-market takeover risk.' },
  { id: 'igbus-q-107', subtopicId: 'igcse-bus-1-2', type: 'matching', marks: 3, prompt: 'Match each merger example to its type of external integration.', pairs: [{ left: 'Two rival airlines merging', right: 'Horizontal integration' }, { left: 'A coffee chain buying a coffee bean farm', right: 'Backward vertical integration' }, { left: 'A shoe factory buying a chain of shoe shops', right: 'Forward vertical integration' }, { left: 'A cinema chain buying a hotel group', right: 'Conglomerate integration' }], explanation: 'Horizontal = same stage; Vertical = supplier/customer; Conglomerate = unrelated industry.' },
  { id: 'igbus-q-108', subtopicId: 'igcse-bus-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the key legal difference between sole traders and limited companies.', segments: ['Sole traders face ', ' liability so personal assets are at risk, whereas shareholders in an Ltd or Plc enjoy ', ' liability.'], wordBank: ['unlimited', 'limited', 'public', 'external'], answers: ['unlimited', 'limited'], explanation: 'Limited liability protects shareholders’ personal wealth beyond the capital they invested.' },
  { id: 'igbus-q-109', subtopicId: 'igcse-bus-1-2', type: 'mcq', marks: 1, prompt: 'Which of the following is NOT a reliable measure of a business’s size?', options: ['Value of output', 'Number of employees', 'Profit earned in one year', 'Capital employed'], correctIndex: 2, explanation: 'A huge company can make low profit during investment or recession, so profit does not reliably measure size.' },
  { id: 'igbus-q-110', subtopicId: 'igcse-bus-1-2', type: 'short-answer', marks: 2, prompt: 'Explain one conflict between shareholders and employees when a company decides whether to raise wages.', rubric: { maxMarks: 2, modelAnswer: 'Employees want higher wages to raise their living standards, but higher wage bills increase business costs and reduce short-term profits and dividends paid to shareholders.', markPoints: [{ id: 'mp1', markDescription: 'Employees want higher wages/pay', requiredKeywordGroups: [['employee', 'worker'], ['wage', 'pay', 'salary']] }, { id: 'mp2', markDescription: 'Higher costs reduce profits/dividends for shareholders', requiredKeywordGroups: [['cost', 'profit', 'dividend'], ['shareholder', 'owner', 'reduc', 'lower']] }] }, explanation: 'Stakeholder objectives regularly clash over how profits are distributed.' },

  // 2.1 (5)
  { id: 'igbus-q-201', subtopicId: 'igcse-bus-2-1', type: 'mcq', marks: 1, prompt: 'In Herzberg’s Two-Factor Theory, which of the following is a MOTIVATOR rather than a Hygiene factor?', options: ['Safe working conditions', 'Basic salary', 'Recognition and greater responsibility', 'Company holiday policy'], correctIndex: 2, explanation: 'Pay, conditions, and policy are hygiene factors (prevent dissatisfaction); achievement, recognition, and responsibility motivate.' },
  { id: 'igbus-q-202', subtopicId: 'igcse-bus-2-1', type: 'fill-blank', marks: 2, prompt: 'Contrast job enlargement with job enrichment.', segments: ['Adding extra tasks at the SAME skill level is job ', ', whereas adding higher responsibility and decision-making is job ', '.'], wordBank: ['enlargement', 'enrichment', 'rotation', 'delegation'], answers: ['enlargement', 'enrichment'], explanation: 'Enlargement adds horizontal tasks; enrichment adds vertical challenge and autonomy.' },
  { id: 'igbus-q-203', subtopicId: 'igcse-bus-2-1', type: 'matching', marks: 3, prompt: 'Match each motivational theorist to their signature concept.', pairs: [{ left: 'F.W. Taylor', right: 'Piece-rate pay ("economic man" motivated by money)' }, { left: 'Abraham Maslow', right: '5-level Hierarchy of Needs ending in self-actualisation' }, { left: 'Frederick Herzberg', right: 'Two-Factor Theory (Hygiene factors vs Motivators)' }], explanation: 'Quote the right theorist accurately in IGCSE People in Business essays.' },
  { id: 'igbus-q-204', subtopicId: 'igcse-bus-2-1', type: 'mcq', marks: 1, prompt: 'Which financial payment method is best suited to a car salesperson whose sales can be tracked individually?', options: ['Piece-rate per car manufactured', 'Basic salary plus sales commission', 'Unpaid work experience', 'Fixed time-rate wage only'], correctIndex: 1, explanation: 'Commission rewards each car sold, directly incentivising closing sales.' },
  { id: 'igbus-q-205', subtopicId: 'igcse-bus-2-1', type: 'short-answer', marks: 2, prompt: 'State two business benefits of having a highly motivated workforce.', rubric: { maxMarks: 2, modelAnswer: 'Motivated workers achieve higher labour productivity (lowering unit costs) and have lower absenteeism and lower labour turnover (saving recruitment and training costs).', markPoints: [{ id: 'mp1', markDescription: 'Higher labour productivity / output / quality', requiredKeywordGroups: [['productiv', 'output', 'quality', 'harder', 'efficien']] }, { id: 'mp2', markDescription: 'Lower absenteeism or lower labour turnover (saving recruitment costs)', requiredKeywordGroups: [['absent', 'turnover', 'stay', 'recruit', 'loyal']] }] }, explanation: 'Motivation directly lowers unit labour costs and staff replacement costs.' },

  // 2.2 (5)
  { id: 'igbus-q-206', subtopicId: 'igcse-bus-2-2', type: 'mcq', marks: 1, prompt: 'Which leadership style is MOST suitable during a factory safety emergency requiring instant action?', options: ['Laissez-faire', 'Democratic', 'Autocratic', 'Consultative'], correctIndex: 2, explanation: 'Autocratic leadership gives fast, clear one-way commands when there is no time for discussion.' },
  { id: 'igbus-q-207', subtopicId: 'igcse-bus-2-2', type: 'fill-blank', marks: 2, prompt: 'Distinguish a job description from a person specification.', segments: ['A ', ' lists the tasks and responsibilities of a role, while a ', ' lists the qualifications and skills required.'], wordBank: ['job description', 'person specification', 'business plan', 'contract'], answers: ['job description', 'person specification'], explanation: 'Job description = the job itself; Person specification = the ideal candidate.' },
  { id: 'igbus-q-208', subtopicId: 'igcse-bus-2-2', type: 'matching', marks: 3, prompt: 'Match each training type to its exact description.', pairs: [{ left: 'Induction training', right: 'Introduces new recruits to workplace rules, safety, and colleagues' }, { left: 'On-the-job training', right: 'Learning by watching an experienced worker at the workplace' }, { left: 'Off-the-job training', right: 'Attending external specialist courses away from the workplace' }], explanation: 'Weigh cost, productivity disruption, and fresh external expertise when recommending training.' },
  { id: 'igbus-q-209', subtopicId: 'igcse-bus-2-2', type: 'mcq', marks: 1, prompt: 'A supermarket installs self-checkout tills and no longer needs 15 cashier roles. Those employees are made:', options: ['Dismissed for gross misconduct', 'Redundant', 'Delegated', 'Inducted'], correctIndex: 1, explanation: 'Redundancy occurs when the job itself ceases to exist — not through any fault of the employee.' },
  { id: 'igbus-q-210', subtopicId: 'igcse-bus-2-2', type: 'short-answer', marks: 2, prompt: 'Explain one benefit and one drawback of delayering (removing a layer of middle managers).', rubric: { maxMarks: 2, modelAnswer: 'Benefit: cuts management wage costs and speeds up communication along a shorter chain of command. Drawback: widens managers’ span of control, increasing workload and risk of losing control over staff.', markPoints: [{ id: 'mp1', markDescription: 'Benefit: cuts wage costs / faster communication / more delegation', requiredKeywordGroups: [['cost', 'faster', 'communication', 'delegat', 'short']] }, { id: 'mp2', markDescription: 'Drawback: wider span of control / higher manager workload / loss of control', requiredKeywordGroups: [['span of control', 'workload', 'stress', 'control', 'redundancy']] }] }, explanation: 'Delayering cuts costs and speeds communication but stretches managers across wider spans of control.' },

  // 3.1 (5)
  { id: 'igbus-q-301', subtopicId: 'igcse-bus-3-1', type: 'mcq', marks: 1, prompt: 'Which of the following is an example of PRIMARY (field) market research?', options: ['Reading government census population tables', 'Running a customer focus group to taste-test a new drink', 'Checking a competitor’s published annual report', 'Reading a free trade newspaper'], correctIndex: 1, explanation: 'Focus groups collect brand-new first-hand data directly from target customers.' },
  { id: 'igbus-q-302', subtopicId: 'igcse-bus-3-1', type: 'fill-blank', marks: 2, prompt: 'Contrast niche markets with mass markets.', segments: ['A ', ' market targets a small specialised segment with less competition, whereas a ', ' market sells high volumes to the whole population.'], wordBank: ['niche', 'mass', 'secondary', 'public'], answers: ['niche', 'mass'], explanation: 'Niche = focused/higher margins/smaller volume; Mass = huge volume/economies of scale/intense rivalry.' },
  { id: 'igbus-q-303', subtopicId: 'igcse-bus-3-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO common reasons why market research data might prove inaccurate.', options: ['The sample size surveyed was too small to represent the market', 'Questions were worded in a biased, leading way', 'The research combined both primary and secondary sources', 'Responses were checked carefully before launching the product'], correctIndices: [0, 1], explanation: 'Small unrepresentative samples, leading questions, and outdated secondary data all reduce accuracy.' },
  { id: 'igbus-q-304', subtopicId: 'igcse-bus-3-1', type: 'matching', marks: 2, prompt: 'Match each sampling or research term to its meaning.', pairs: [{ left: 'Random sample', right: 'Every member of the population has an equal chance of selection' }, { left: 'Quota sample', right: 'Interviewers select set numbers matching target characteristics' }, { left: 'Quantitative data', right: 'Numerical statistics such as percentages and ratings' }, { left: 'Qualitative data', right: 'Detailed opinions and reasons behind customer behaviour' }], explanation: 'Combine quantitative numbers with qualitative insights for balanced marketing decisions.' },
  { id: 'igbus-q-305', subtopicId: 'igcse-bus-3-1', type: 'short-answer', marks: 2, prompt: 'Explain why a small startup should use secondary research BEFORE paying for primary research.', rubric: { maxMarks: 2, modelAnswer: 'Secondary research is much cheaper and quicker to gather (using free government or internet data), helping the startup check overall market size and competitors before spending money on targeted primary research.', markPoints: [{ id: 'mp1', markDescription: 'Cheaper / lower cost and quicker/faster to obtain', requiredKeywordGroups: [['cheap', 'cost', 'free', 'inexpensive'], ['quick', 'fast', 'time']] }, { id: 'mp2', markDescription: 'Gives overview of market size / competitors before targeted field research', requiredKeywordGroups: [['market', 'competitor', 'overview', 'size', 'trend']] }] }, explanation: 'Desk research saves scarce startup cash before funding bespoke field surveys.' },

  // 3.2 (5)
  { id: 'igbus-q-306', subtopicId: 'igcse-bus-3-2', type: 'diagram-label', marks: 2, prompt: 'Use the supply and demand diagram to match pricing strategies to market situations.', diagram: 'supply-demand-equilibrium', labels: [{ marker: 'Launching a unique high-tech gadget at a high price', options: ['Price skimming', 'Penetration pricing'], answer: 'Price skimming' }, { marker: 'Launching low to enter a crowded market fast', options: ['Price skimming', 'Penetration pricing'], answer: 'Penetration pricing' }], explanation: 'Skimming captures early-adopter margins on unique goods; penetration wins share in competitive markets.' },
  { id: 'igbus-q-307', subtopicId: 'igcse-bus-3-2', type: 'mcq', marks: 1, prompt: 'A jacket costs £50 to produce and the company applies a 40% cost-plus mark-up. What is the selling price?', options: ['£54', '£65', '£70', '£90'], correctIndex: 2, explanation: '£50 × 1.40 = £70.' },
  { id: 'igbus-q-308', subtopicId: 'igcse-bus-3-2', type: 'fill-blank', marks: 2, prompt: 'Complete the PED impact on total revenue when price increases.', segments: ['If demand is price ', ' (many substitutes), raising price causes total revenue to ', '.'], wordBank: ['elastic', 'fall', 'inelastic', 'rise'], answers: ['elastic', 'fall'], explanation: 'For elastic demand, % drop in quantity exceeds % rise in price, reducing total revenue.' },
  { id: 'igbus-q-309', subtopicId: 'igcse-bus-3-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO valid extension strategies for a drink entering the Maturity stage of its Product Life Cycle.', options: ['Introduce a new tropical flavour or sugar-free variant', 'Launch the product into new overseas markets', 'Stop all advertising immediately', 'Increase manufacturing defects'], correctIndices: [0, 1], explanation: 'New variants, fresh packaging, new markets, and new ad campaigns extend profitable maturity.' },
  { id: 'igbus-q-310', subtopicId: 'igcse-bus-3-2', type: 'short-answer', marks: 2, prompt: 'Give one advantage and one disadvantage of selling clothes via e-commerce rather than only physical shops.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: reaches customers 24/7 worldwide with lower retail rent costs. Disadvantage: customers cannot try clothes on before buying, leading to high delivery and return costs (plus intense online price competition).', markPoints: [{ id: 'mp1', markDescription: 'Advantage: 24/7 global reach / lower store rent/overheads', requiredKeywordGroups: [['24', 'global', 'wider', 'rent', 'overhead', 'cost']] }, { id: 'mp2', markDescription: 'Disadvantage: cannot try on / delivery & return costs / online competition', requiredKeywordGroups: [['try on', 'touch', 'return', 'delivery', 'competition', 'security']] }] }, explanation: 'Always balance lower store overheads and wider reach against returns and delivery logistics.' },

  // 4.1 (5)
  { id: 'igbus-q-401', subtopicId: 'igcse-bus-4-1', type: 'mcq', marks: 1, prompt: 'Which production method is best suited to bottling 100,000 identical cans of fizzy drink per day?', options: ['Job production', 'Batch production', 'Flow production', 'Craft production'], correctIndex: 2, explanation: 'Continuous flow production achieves huge output and minimal unit cost for identical mass-market goods.' },
  { id: 'igbus-q-402', subtopicId: 'igcse-bus-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the two Japanese lean production methods.', segments: ['Continuous small improvements suggested by workers is called ', ', while ordering supplies to arrive moments before use is ', '.'], wordBank: ['Kaizen', 'Just-in-Time (JIT)', 'Batching', 'Delegation'], answers: ['Kaizen', 'Just-in-Time (JIT)'], explanation: 'Kaizen drives ongoing efficiency gains; JIT cuts warehouse storage and waste.' },
  { id: 'igbus-q-403', subtopicId: 'igcse-bus-4-1', type: 'matching', marks: 3, prompt: 'Match each production method to its ideal product example.', pairs: [{ left: 'Job production', right: 'Bespoke handmade wedding dress' }, { left: 'Batch production', right: '200 blueberry muffins followed by 200 chocolate muffins' }, { left: 'Flow production', right: 'Continuous automated car assembly line' }], explanation: 'Match production method directly to volume and customisation.' },
  { id: 'igbus-q-404', subtopicId: 'igcse-bus-4-1', type: 'mcq', marks: 1, prompt: 'A factory makes 9,000 phone cases per week using 30 workers. What is its weekly labour productivity?', options: ['270 cases/worker', '300 cases/worker', '30 cases/worker', '9,030 cases/worker'], correctIndex: 1, explanation: 'Labour productivity = Total output ÷ Number of workers = 9,000 ÷ 30 = 300 cases/worker.' },
  { id: 'igbus-q-405', subtopicId: 'igcse-bus-4-1', type: 'short-answer', marks: 2, prompt: 'Explain one major advantage and one major risk of using Just-in-Time (JIT) inventory control.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: eliminates warehouse rent, insurance, and stock spoilage costs while freeing up cash. Risk: zero buffer inventory means any late delivery from a supplier halts the entire production line.', markPoints: [{ id: 'mp1', markDescription: 'Advantage: cuts warehouse/storage costs and reduces waste/spoilage', requiredKeywordGroups: [['warehouse', 'storage', 'space', 'waste', 'cash']] }, { id: 'mp2', markDescription: 'Risk: late supplier delivery halts production (no buffer stock)', requiredKeywordGroups: [['supplier', 'late', 'delay'], ['halt', 'stop', 'buffer', 'shortage']] }] }, explanation: 'JIT saves storage costs only if supplier relationships and logistics are rock-solid.' },

  // 4.2 (5)
  { id: 'igbus-q-406', subtopicId: 'igcse-bus-4-2', type: 'diagram-label', marks: 2, prompt: 'Use the break-even chart diagram to identify each line and point.', diagram: 'break-even-chart', labels: [{ marker: 'Point where Total Revenue crosses Total Cost', options: ['Break-even output (0 profit)', 'Margin of safety'], answer: 'Break-even output (0 profit)' }, { marker: 'Horizontal gap between forecast sales and break-even', options: ['Break-even output (0 profit)', 'Margin of safety'], answer: 'Margin of safety' }], explanation: 'Break-even is TR = TC; Margin of safety measures sales cushion above break-even.' },
  { id: 'igbus-q-407', subtopicId: 'igcse-bus-4-2', type: 'mcq', marks: 1, prompt: 'Fixed costs are £8,000, selling price is £12, and variable cost is £4 per unit. What is the break-even output?', options: ['667 units', '1,000 units', '2,000 units', '500 units'], correctIndex: 1, explanation: 'Contribution = £12 − £4 = £8; Break-even = £8,000 ÷ £8 = 1,000 units.' },
  { id: 'igbus-q-408', subtopicId: 'igcse-bus-4-2', type: 'fill-blank', marks: 2, prompt: 'Distinguish quality control from quality assurance.', segments: ['Inspecting finished goods at the end of production is quality ', ', whereas building quality checks into every stage to prevent defects is quality ', '.'], wordBank: ['control', 'assurance', 'efficiency', 'scale'], answers: ['control', 'assurance'], explanation: 'Quality control detects defects after making them; quality assurance prevents defects throughout.' },
  { id: 'igbus-q-409', subtopicId: 'igcse-bus-4-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO examples of Fixed Costs for a hair salon in the short run.', options: ['Monthly shop rent', 'Annual business insurance', 'Shampoo used per customer haircut', 'Disposable foils used per colour treatment'], correctIndices: [0, 1], explanation: 'Rent and insurance stay fixed regardless of customer count; shampoo and foils vary with output.' },
  { id: 'igbus-q-410', subtopicId: 'igcse-bus-4-2', type: 'short-answer', marks: 2, prompt: 'Explain what is meant by "purchasing economies of scale" and give one cause of diseconomies of scale.', rubric: { maxMarks: 2, modelAnswer: 'Purchasing economies of scale happen when a large firm buys raw materials in bulk and receives discounts, lowering average cost per unit. Diseconomies of scale arise when huge firms suffer poor communication or slow decision-making, raising unit costs.', markPoints: [{ id: 'mp1', markDescription: 'Bulk buying discounts lower average cost per unit', requiredKeywordGroups: [['bulk', 'discount'], ['average cost', 'unit cost', 'lower', 'cheap']] }, { id: 'mp2', markDescription: 'Diseconomies: poor communication, low morale, or slow decisions', requiredKeywordGroups: [['communication', 'morale', 'slow', 'bureaucracy', 'control']] }] }, explanation: 'Average costs fall with economies of scale until excessive size creates communication diseconomies.' },

  // 5.1 (5)
  { id: 'igbus-q-501', subtopicId: 'igcse-bus-5-1', type: 'mcq', marks: 1, prompt: 'A firm has an opening balance of £1,500, cash inflows of £6,000, and cash outflows of £8,200. What is its closing balance?', options: ['+£700', '−£700', '−£2,200', '+£3,700'], correctIndex: 1, explanation: 'Net cash flow = 6,000 − 8,200 = −£2,200; Closing = 1,500 − 2,200 = −£700.' },
  { id: 'igbus-q-502', subtopicId: 'igcse-bus-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the working capital formula and internal finance source.', segments: ['Working capital equals Current Assets minus Current ', ', and ', ' profit is an interest-free internal source of finance.'], wordBank: ['Liabilities', 'retained', 'Revenue', 'overdraft'], answers: ['Liabilities', 'retained'], explanation: 'Working capital = CA − CL; retained profit incurs zero interest and dilutes zero ownership.' },
  { id: 'igbus-q-503', subtopicId: 'igcse-bus-5-1', type: 'matching', marks: 3, prompt: 'Match each finance source to its best business use.', pairs: [{ left: 'Bank overdraft', right: 'Covering a brief 2-week cash-flow deficit' }, { left: 'Long-term bank loan / mortgage', right: 'Buying a new £500,000 factory building' }, { left: 'Trade credit from suppliers', right: 'Buying stock now and paying in 30–60 days' }, { left: 'Issuing new shares (Plc)', right: 'Raising huge permanent capital without interest' }], explanation: 'Match the duration of finance to the lifespan of the asset or cash need.' },
  { id: 'igbus-q-504', subtopicId: 'igcse-bus-5-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO practical ways a business can solve a short-term cash-flow shortage.', options: ['Chase trade debtors to pay faster (or offer small early-payment discounts)', 'Negotiate longer trade credit terms with suppliers', 'Buy a brand-new factory with cash immediately', 'Give customers 120 extra days to pay invoices'], correctIndices: [0, 1], explanation: 'Speeding up cash inflows and slowing outflows improves short-term liquidity.' },
  { id: 'igbus-q-505', subtopicId: 'igcse-bus-5-1', type: 'short-answer', marks: 2, prompt: 'Explain how a profitable business can still run out of cash and face insolvency.', rubric: { maxMarks: 2, modelAnswer: 'Sales made on long credit terms count as revenue and profit immediately, but no cash arrives for 30–90 days while rent, wages, and supplier bills must be paid in cash right now.', markPoints: [{ id: 'mp1', markDescription: 'Credit sales record profit before cash is actually received', requiredKeywordGroups: [['credit', 'debtor', 'receivable', 'delay'], ['cash']] }, { id: 'mp2', markDescription: 'Immediate cash outflows (wages, rent, stock) must be paid now', requiredKeywordGroups: [['wage', 'rent', 'bill', 'supplier', 'outflow', 'pay']] }] }, explanation: 'Timing gaps between recording credit sales and receiving cash cause profitable firms to fail.' },

  // 5.2 (5)
  { id: 'igbus-q-506', subtopicId: 'igcse-bus-5-2', type: 'mcq', marks: 1, prompt: 'Revenue is £150,000, Cost of Sales is £90,000, and Expenses are £30,000. What is the Gross Profit Margin (GPM)?', options: ['20%', '40%', '60%', '30%'], correctIndex: 1, explanation: 'Gross profit = 150,000 − 90,000 = £60,000; GPM = (60,000 ÷ 150,000) × 100 = 40%.' },
  { id: 'igbus-q-507', subtopicId: 'igcse-bus-5-2', type: 'fill-blank', marks: 2, prompt: 'Complete the liquidity ratio formulas.', segments: ['Current Ratio = Current Assets ÷ Current Liabilities; Acid-Test Ratio subtracts ', ' from Current Assets before dividing because stock is the least ', ' current asset.'], wordBank: ['inventory', 'liquid', 'cash', 'fixed'], answers: ['inventory', 'liquid'], explanation: 'Acid-test strips out inventory to check whether cash + receivables alone cover short-term debts.' },
  { id: 'igbus-q-508', subtopicId: 'igcse-bus-5-2', type: 'matching', marks: 3, prompt: 'Match each balance sheet item to its accounting category.', pairs: [{ left: 'Factory machinery & delivery vans', right: 'Non-current assets' }, { left: 'Cash, inventory & trade receivables', right: 'Current assets' }, { left: 'Trade payables & bank overdraft', right: 'Current liabilities' }, { left: '10-year bank mortgage', right: 'Non-current liabilities' }], explanation: 'Current = within 12 months; Non-current = lasting longer than 12 months.' },
  { id: 'igbus-q-509', subtopicId: 'igcse-bus-5-2', type: 'mcq', marks: 1, prompt: 'A company earns £40,000 net profit on £200,000 capital employed. What is its ROCE?', options: ['5%', '20%', '25%', '40%'], correctIndex: 1, explanation: 'ROCE = (40,000 ÷ 200,000) × 100 = 20%.' },
  { id: 'igbus-q-510', subtopicId: 'igcse-bus-5-2', type: 'short-answer', marks: 2, prompt: 'A business has Current Assets of £50,000 (including £20,000 inventory) and Current Liabilities of £25,000. Calculate both the Current Ratio and Acid-Test Ratio.', rubric: { maxMarks: 2, modelAnswer: 'Current Ratio = 50,000 ÷ 25,000 = 2.0 (2:1). Acid-Test Ratio = (50,000 − 20,000) ÷ 25,000 = 30,000 ÷ 25,000 = 1.2 (1.2:1).', markPoints: [{ id: 'mp1', markDescription: 'Calculates Current Ratio = 2.0 (or 2:1)', numericMatch: { value: 2, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Calculates Acid-Test Ratio = 1.2 (or 1.2:1)', numericMatch: { value: 1.2, tolerance: 0.05 } }] }, explanation: 'Both ratios are healthy (Current ~1.5–2.0; Acid-Test ≥ 1.0).' },

  // 6.1 (5)
  { id: 'igbus-q-601', subtopicId: 'igcse-bus-6-1', type: 'mcq', marks: 1, prompt: 'Using SPICED, if the UK pound (£) APPRECIATES strongly against the US dollar ($), what happens to a UK exporter selling luxury shoes in the USA?', options: ['UK shoes become cheaper in the USA, boosting exports', 'UK shoes become more expensive (dearer) in the USA, reducing export sales', 'Imported US leather becomes more expensive', 'UK inflation doubles immediately'], correctIndex: 1, explanation: 'SPICED: Strong Pound makes Imports Cheaper and Exports Dearer.' },
  { id: 'igbus-q-602', subtopicId: 'igcse-bus-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the impact of a sharp rise in central bank interest rates.', segments: ['Higher interest rates make business bank loans more ', ' and leave consumers with less disposable income because ', ' repayments rise.'], wordBank: ['expensive', 'mortgage', 'cheaper', 'tax'], answers: ['expensive', 'mortgage'], explanation: 'Higher interest rates curb both business investment borrowing and household spending.' },
  { id: 'igbus-q-603', subtopicId: 'igcse-bus-6-1', type: 'matching', marks: 3, prompt: 'Match each economic policy tool to its main business impact.', pairs: [{ left: 'Higher income tax', right: 'Lower consumer disposable income; lower luxury sales' }, { left: 'Higher corporation tax', right: 'Less retained profit available to reinvest' }, { left: 'Import tariff', right: 'Raises price of foreign competing goods' }, { left: 'Recession (falling GDP)', right: 'Rising unemployment and falling consumer spending' }], explanation: 'Link macroeconomic changes step-by-step to revenue, costs, and investment.' },
  { id: 'igbus-q-604', subtopicId: 'igcse-bus-6-1', type: 'mcq', marks: 1, prompt: 'A UK coat sells for £200. When the exchange rate moves from £1 = $1.20 to £1 = $1.50, what is the new dollar price in the USA?', options: ['$240', '$300', '$133', '$350'], correctIndex: 1, explanation: '£200 × 1.50 = $300 (up from $240 — more expensive for US buyers).' },
  { id: 'igbus-q-605', subtopicId: 'igcse-bus-6-1', type: 'short-answer', marks: 2, prompt: 'Explain two ways a luxury watch retailer is affected during an economic recession.', rubric: { maxMarks: 2, modelAnswer: 'During a recession, rising unemployment and lower disposable incomes cause consumers to cut back on non-essential luxury watches, sharply reducing sales revenue and forcing discounts or redundancies.', markPoints: [{ id: 'mp1', markDescription: 'Lower consumer incomes / higher unemployment', requiredKeywordGroups: [['income', 'unemployment', 'spending', 'confident']] }, { id: 'mp2', markDescription: 'Demand/sales for luxury non-essentials fall sharply', requiredKeywordGroups: [['luxury', 'non-essential', 'demand', 'sales'], ['fall', 'drop', 'decreas', 'lower']] }] }, explanation: 'Luxury/income-elastic brands suffer far more in recessions than budget supermarkets.' },

  // 6.2 (5)
  { id: 'igbus-q-606', subtopicId: 'igcse-bus-6-2', type: 'mcq', marks: 1, prompt: 'What is the difference between an import TARIFF and an import QUOTA?', options: ['A tariff is a tax on imports; a quota is a physical limit on import quantity', 'A tariff bans exports; a quota lowers taxes', 'Both are voluntary discounts offered by exporters', 'A quota is a tax; a tariff is a quantity cap'], correctIndex: 0, explanation: 'Tariff = Tax on imports; Quota = Quantity cap on imports.' },
  { id: 'igbus-q-607', subtopicId: 'igcse-bus-6-2', type: 'fill-blank', marks: 2, prompt: 'Complete the definition of a Multinational Company (MNC).', segments: ['A multinational company operates factories or service outlets in ', ' than one country; a drawback for the host nation is that profits are often ', ' back to headquarters.'], wordBank: ['more', 'repatriated', 'less', 'taxed'], answers: ['more', 'repatriated'], explanation: 'MNCs have physical operations across countries and often repatriate profits home.' },
  { id: 'igbus-q-608', subtopicId: 'igcse-bus-6-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO benefits to a developing host country when a foreign MNC opens a new factory there.', options: ['Creates local jobs and raises GDP and tax revenue', 'Brings modern production technology and worker training', 'Guarantees local small competitors will increase profits', 'Eliminates all environmental impact automatically'], correctIndices: [0, 1], explanation: 'MNCs boost employment, GDP, taxes, and skills, though local competitors and environments can suffer.' },
  { id: 'igbus-q-609', subtopicId: 'igcse-bus-6-2', type: 'matching', marks: 2, prompt: 'Match each external influence concept to its example.', pairs: [{ left: 'Pressure group action', right: 'Consumer boycott over factory river pollution' }, { left: 'Sustainable production', right: 'Using solar power and 100% recycled packaging' }, { left: 'Ethical decision', right: 'Paying Fairtrade wages above legal minimum' }, { left: 'Globalisation threat', right: 'Cheaper foreign rivals entering the home market' }], explanation: 'Evaluate both short-term costs and long-term brand benefits in ethics/environment questions.' },
  { id: 'igbus-q-610', subtopicId: 'igcse-bus-6-2', type: 'short-answer', marks: 2, prompt: 'Explain one financial cost and one long-term benefit of switching a fashion brand to ethical, Fairtrade cotton suppliers.', rubric: { maxMarks: 2, modelAnswer: 'Cost: ethical Fairtrade cotton costs more to buy, raising variable costs and lowering short-term profit margins. Benefit: improves brand reputation, avoids pressure group boycotts, and attracts loyal ethical customers willing to pay higher prices.', markPoints: [{ id: 'mp1', markDescription: 'Cost: higher raw material / variable costs reducing short-term margin', requiredKeywordGroups: [['cost', 'expensive', 'margin'], ['higher', 'increas', 'lower', 'reduc']] }, { id: 'mp2', markDescription: 'Benefit: stronger brand image / loyal customers / avoids boycotts', requiredKeywordGroups: [['reputation', 'brand', 'image', 'loyal', 'boycott', 'sales']] }] }, explanation: 'Ethical sourcing raises input costs initially but protects brand equity and pricing power.' },
];

export const IGCSE_BUSINESS_FLASHCARDS: FlashcardItem[] = [
  // 1.1 (5)
  { id: 'igbus-fc-101', subtopicId: 'igcse-bus-1-1', front: 'List all 4 factors of production.', backBullets: ['Land, Labour, Capital, and Enterprise (risk-taking skill combining the other three).'], hint: 'C-E-L-L!' },
  { id: 'igbus-fc-102', subtopicId: 'igcse-bus-1-1', front: 'Define opportunity cost with a business example.', backBullets: ['The next best alternative given up when making a choice.', 'Example: buying a new oven instead of a delivery van → the van is the opportunity cost.'] },
  { id: 'igbus-fc-103', subtopicId: 'igcse-bus-1-1', front: 'State the Added Value formula and why it differs from Profit.', backBullets: ['Added value = Selling price − Cost of bought-in materials.', 'Not profit: wages, rent, and bills must still be deducted.'] },
  { id: 'igbus-fc-104', subtopicId: 'igcse-bus-1-1', front: 'Give 3 ways a business can increase Added Value.', backBullets: ['Build stronger branding/packaging to raise price.', 'Improve quality or customer convenience.', 'Cut bought-in raw material costs via bulk buying.'] },
  { id: 'igbus-fc-105', subtopicId: 'igcse-bus-1-1', front: 'Contrast primary, secondary, and tertiary sectors.', backBullets: ['Primary: extracting raw materials (farming, mining).', 'Secondary: manufacturing goods (factories).', 'Tertiary: providing services (retail, banking, tourism).'] },

  // 1.2 (5)
  { id: 'igbus-fc-106', subtopicId: 'igcse-bus-1-2', front: 'Contrast horizontal, vertical, and conglomerate integration.', backBullets: ['Horizontal: same industry & same stage (rival).', 'Vertical: backward (supplier) or forward (retailer/customer).', 'Conglomerate: completely unrelated industry (spreads risk).'] },
  { id: 'igbus-fc-107', subtopicId: 'igcse-bus-1-2', front: 'Contrast unlimited liability with limited liability.', backBullets: ['Unlimited (sole trader/partnership): owners’ personal assets can be seized for business debts.', 'Limited (Ltd/Plc): shareholders risk ONLY the amount invested in shares.'] },
  { id: 'igbus-fc-108', subtopicId: 'igcse-bus-1-2', front: 'Contrast an Ltd (Private Limited) with a Plc (Public Limited) company.', backBullets: ['Ltd: shares sold privately to family/friends (no hostile takeover risk).', 'Plc: shares traded publicly on a stock exchange (huge capital, must publish accounts).'] },
  { id: 'igbus-fc-109', subtopicId: 'igcse-bus-1-2', front: 'Give one advantage and one drawback of buying a Franchise.', backBullets: ['Advantage: established brand, training, and lower failure risk.', 'Drawback: upfront licence fee, ongoing royalties, and strict rules limiting independence.'] },
  { id: 'igbus-fc-110', subtopicId: 'igcse-bus-1-2', front: 'Give two examples of stakeholder conflicts.', backBullets: ['Workers want higher wages vs shareholders wanting higher dividends.', 'Expansion creates jobs vs local community opposing traffic/pollution.'] },

  // 2.1 (5)
  { id: 'igbus-fc-201', subtopicId: 'igcse-bus-2-1', front: 'Summarise F.W. Taylor’s motivation theory and one criticism.', backBullets: ['Workers are motivated primarily by money → pay piece-rate linked to output.', 'Criticism: ignores non-financial needs and can reduce product quality.'] },
  { id: 'igbus-fc-202', subtopicId: 'igcse-bus-2-1', front: 'List Maslow’s 5 levels of needs from bottom to top.', backBullets: ['1. Physiological → 2. Safety → 3. Social → 4. Esteem → 5. Self-actualisation.'], hint: 'Please Stop Sending Emails Soon.' },
  { id: 'igbus-fc-203', subtopicId: 'igcse-bus-2-1', front: 'Contrast Herzberg’s Hygiene factors with Motivators.', backBullets: ['Hygiene (pay, conditions, policy): prevent dissatisfaction, do not actively motivate.', 'Motivators (achievement, recognition, responsibility): create genuine motivation.'] },
  { id: 'igbus-fc-204', subtopicId: 'igcse-bus-2-1', front: 'Contrast Job Rotation, Job Enlargement, and Job Enrichment.', backBullets: ['Rotation: swap similar tasks; Enlargement: more tasks at SAME skill level.', 'Enrichment: add higher-level responsibility and decision-making.'] },
  { id: 'igbus-fc-205', subtopicId: 'igcse-bus-2-1', front: 'List 4 financial rewards used to motivate staff.', backBullets: ['Piece-rate wages, commission (sales), performance bonuses, profit-sharing, and fringe benefits.'] },

  // 2.2 (5)
  { id: 'igbus-fc-206', subtopicId: 'igcse-bus-2-2', front: 'Define chain of command, span of control, and delegation.', backBullets: ['Chain of command: path instructions follow top-to-bottom.', 'Span of control: subordinates reporting directly to one manager.', 'Delegation: passing authority down while keeping overall accountability.'] },
  { id: 'igbus-fc-207', subtopicId: 'igcse-bus-2-2', front: 'Compare Autocratic, Democratic, and Laissez-faire leadership.', backBullets: ['Autocratic: fast commands alone (emergencies).', 'Democratic: consults staff (higher motivation, slower).', 'Laissez-faire: staff decide day-to-day (creative experts).'] },
  { id: 'igbus-fc-208', subtopicId: 'igcse-bus-2-2', front: 'Contrast a job description with a person specification.', backBullets: ['Job description: duties and responsibilities of the job.', 'Person specification: qualifications, skills, and experience needed by the applicant.'] },
  { id: 'igbus-fc-209', subtopicId: 'igcse-bus-2-2', front: 'Compare induction, on-the-job, and off-the-job training.', backBullets: ['Induction: welcomes new hires to rules/safety.', 'On-the-job: cheap, workplace-specific; Off-the-job: costly, brings fresh external expertise.'] },
  { id: 'igbus-fc-210', subtopicId: 'igcse-bus-2-2', front: 'Distinguish Redundancy from Dismissal.', backBullets: ['Redundancy: job is no longer needed (NOT the worker’s fault).', 'Dismissal: worker fired for misconduct or incompetence.'] },

  // 3.1 (5)
  { id: 'igbus-fc-301', subtopicId: 'igcse-bus-3-1', front: 'List 5 ways to segment a consumer market.', backBullets: ['Age, income/socio-economic group, gender, geographic location, and lifestyle/use.'] },
  { id: 'igbus-fc-302', subtopicId: 'igcse-bus-3-1', front: 'Compare a niche market with a mass market.', backBullets: ['Niche: small specialist segment, less competition, higher margins, higher risk.', 'Mass: huge sales volume, economies of scale, fierce competition.'] },
  { id: 'igbus-fc-303', subtopicId: 'igcse-bus-3-1', front: 'Compare primary (field) and secondary (desk) market research.', backBullets: ['Primary: first-hand, up-to-date, tailored, but costly and slower.', 'Secondary: existing data, fast and cheap, but potentially outdated or shared with rivals.'] },
  { id: 'igbus-fc-304', subtopicId: 'igcse-bus-3-1', front: 'Contrast random sampling with quota sampling.', backBullets: ['Random: everyone has equal chance (unbiased, may sample non-buyers).', 'Quota: fixed numbers from target segments (relevant, risks interviewer bias).'] },
  { id: 'igbus-fc-305', subtopicId: 'igcse-bus-3-1', front: 'Give 3 reasons why market research data can be inaccurate.', backBullets: ['Small unrepresentative sample size.', 'Leading/biased questions or outdated secondary reports.'] },

  // 3.2 (5)
  { id: 'igbus-fc-306', subtopicId: 'igcse-bus-3-2', front: 'List the 5 stages of the Product Life Cycle and 3 extension strategies.', backBullets: ['Development → Introduction → Growth → Maturity → Decline.', 'Extensions: new flavours/features, new overseas markets, refreshed packaging/ads.'] },
  { id: 'igbus-fc-307', subtopicId: 'igcse-bus-3-2', front: 'Compare Price Skimming with Penetration Pricing.', backBullets: ['Skimming: high launch price for unique innovative product (recovers R&D).', 'Penetration: low launch price to break into a competitive market fast.'], diagram: 'supply-demand-equilibrium' },
  { id: 'igbus-fc-308', subtopicId: 'igcse-bus-3-2', front: 'How does raising price affect total revenue for Elastic vs Inelastic demand?', backBullets: ['Elastic (many substitutes): raising price causes revenue to FALL.', 'Inelastic (essentials/strong brand): raising price causes revenue to RISE.'] },
  { id: 'igbus-fc-309', subtopicId: 'igcse-bus-3-2', front: 'Contrast advertising with sales promotion.', backBullets: ['Advertising (TV, social media): builds long-term brand awareness.', 'Sales promotion (vouchers, BOGOF, free samples): creates short-term sales boosts.'] },
  { id: 'igbus-fc-310', subtopicId: 'igcse-bus-3-2', front: 'Give 2 pros and 2 cons of e-commerce.', backBullets: ['Pros: 24/7 global sales, lower shop rent costs.', 'Cons: delivery/return costs, cannot try/touch items, easy online price comparison.'] },

  // 4.1 (5)
  { id: 'igbus-fc-401', subtopicId: 'igcse-bus-4-1', front: 'Compare Job, Batch, and Flow production.', backBullets: ['Job: unique custom item (high unit cost, high skill).', 'Batch: groups of identical goods (flexible, changeover downtime).', 'Flow: continuous mass line (lowest unit cost, high capital set-up).'] },
  { id: 'igbus-fc-402', subtopicId: 'igcse-bus-4-1', front: 'Write the Labour Productivity equation.', backBullets: ['Labour productivity = Total output ÷ Number of employees.'] },
  { id: 'igbus-fc-403', subtopicId: 'igcse-bus-4-1', front: 'What is Kaizen in lean production?', backBullets: ['Continuous small improvements suggested by shop-floor workers to cut waste and boost efficiency.'] },
  { id: 'igbus-fc-404', subtopicId: 'igcse-bus-4-1', front: 'State the main benefit and main risk of Just-in-Time (JIT) stock control.', backBullets: ['Benefit: eliminates warehouse rent, insurance, and stock spoilage.', 'Risk: any late supplier delivery halts the entire factory (no buffer stock).'] },
  { id: 'igbus-fc-405', subtopicId: 'igcse-bus-4-1', front: 'Give one pro and one con of factory automation (CAM/robotics).', backBullets: ['Pro: faster output, lower unit cost, consistent high accuracy.', 'Con: huge upfront capital cost and worker redundancy/resistance.'] },

  // 4.2 (5)
  { id: 'igbus-fc-406', subtopicId: 'igcse-bus-4-2', front: 'Write the Break-Even Output and Margin of Safety equations.', backBullets: ['Contribution = Selling price − Variable cost per unit.', 'Break-even = Fixed Costs ÷ Contribution per unit.', 'Margin of safety = Actual/forecast sales − Break-even output.'], diagram: 'break-even-chart' },
  { id: 'igbus-fc-407', subtopicId: 'igcse-bus-4-2', front: 'Distinguish Fixed Costs from Variable Costs with examples.', backBullets: ['Fixed: constant in short run regardless of output (rent, insurance, salaries).', 'Variable: rise directly with output (raw materials, packaging, piece-rate pay).'] },
  { id: 'igbus-fc-408', subtopicId: 'igcse-bus-4-2', front: 'Name the 5 types of Economies of Scale.', backBullets: ['Purchasing (bulk discounts), Marketing, Financial (cheaper loans), Managerial (specialists), Technical (advanced machinery).'] },
  { id: 'igbus-fc-409', subtopicId: 'igcse-bus-4-2', front: 'Name 3 causes of Diseconomies of Scale.', backBullets: ['Poor communication in giant hierarchies, low employee morale, and slow decision-making.'] },
  { id: 'igbus-fc-410', subtopicId: 'igcse-bus-4-2', front: 'Contrast Quality Control with Quality Assurance.', backBullets: ['Quality control: inspects finished goods at the END (wastes faulty output).', 'Quality assurance: builds quality into EVERY stage to prevent defects before they occur.'] },

  // 5.1 (5)
  { id: 'igbus-fc-501', subtopicId: 'igcse-bus-5-1', front: 'Name 3 internal sources of finance.', backBullets: ['Retained profit (interest-free), selling unused non-current assets, and reducing excess inventory.'] },
  { id: 'igbus-fc-502', subtopicId: 'igcse-bus-5-1', front: 'Compare a bank overdraft with a long-term bank loan.', backBullets: ['Overdraft: flexible short-term cash buffer, high daily interest, repayable on demand.', 'Bank loan: fixed multi-year repayments for big assets like buildings/machinery.'] },
  { id: 'igbus-fc-503', subtopicId: 'igcse-bus-5-1', front: 'Write the Net Cash Flow and Closing Balance formulas.', backBullets: ['Net cash flow = Total cash inflows − Total cash outflows.', 'Closing balance = Opening balance + Net cash flow.'] },
  { id: 'igbus-fc-504', subtopicId: 'igcse-bus-5-1', front: 'Write the Working Capital formula and explain its purpose.', backBullets: ['Working capital = Current Assets − Current Liabilities.', 'Liquid funds needed to pay everyday bills like wages, rent, and stock.'] },
  { id: 'igbus-fc-505', subtopicId: 'igcse-bus-5-1', front: 'State 3 ways to fix a short-term cash-flow deficit.', backBullets: ['Chase credit customers faster, negotiate longer supplier trade credit, arrange an overdraft, or lease instead of buying assets.'] },

  // 5.2 (5)
  { id: 'igbus-fc-506', subtopicId: 'igcse-bus-5-2', front: 'State the Gross Profit and Net Profit formulas on an Income Statement.', backBullets: ['Gross Profit = Revenue − Cost of Sales.', 'Net Profit = Gross Profit − Operating Expenses.'] },
  { id: 'igbus-fc-507', subtopicId: 'igcse-bus-5-2', front: 'Write GPM, NPM, and ROCE profitability ratio equations.', backBullets: ['GPM = (Gross Profit ÷ Revenue) × 100; NPM = (Net Profit ÷ Revenue) × 100.', 'ROCE = (Net Profit ÷ Capital Employed) × 100.'] },
  { id: 'igbus-fc-508', subtopicId: 'igcse-bus-5-2', front: 'Write the Current Ratio and Acid-Test Ratio equations.', backBullets: ['Current Ratio = Current Assets ÷ Current Liabilities (ideal 1.5–2.0).', 'Acid-Test Ratio = (Current Assets − Inventory) ÷ Current Liabilities (ideal ≥ 1.0).'] },
  { id: 'igbus-fc-509', subtopicId: 'igcse-bus-5-2', front: 'Why does the Acid-Test Ratio exclude inventory?', backBullets: ['Inventory is the least liquid current asset — it may take months to sell or lose value if forced to liquidate quickly.'] },
  { id: 'igbus-fc-510', subtopicId: 'igcse-bus-5-2', front: 'Contrast Current Assets with Non-Current Assets.', backBullets: ['Current (<1 year): cash, trade receivables (debtors), inventory.', 'Non-current (>1 year): buildings, machinery, vehicles.'] },

  // 6.1 (5)
  { id: 'igbus-fc-601', subtopicId: 'igcse-bus-6-1', front: 'Name the 4 stages of the Business Cycle.', backBullets: ['Growth → Boom → Recession → Slump.'] },
  { id: 'igbus-fc-602', subtopicId: 'igcse-bus-6-1', front: 'How do higher interest rates affect businesses and consumers?', backBullets: ['Business loans become costlier (less investment).', 'Higher mortgages and better savings returns reduce household spending.'] },
  { id: 'igbus-fc-603', subtopicId: 'igcse-bus-6-1', front: 'Contrast income tax, corporation tax, and VAT.', backBullets: ['Income tax: cuts household disposable income.', 'Corporation tax: cuts company retained profit.', 'VAT: indirect tax raising retail prices.'] },
  { id: 'igbus-fc-604', subtopicId: 'igcse-bus-6-1', front: 'Explain SPICED for exchange rate appreciation.', backBullets: ['Strong Pound: Imports Cheaper (good for importers), Exports Dearer (bad for exporters).'] },
  { id: 'igbus-fc-605', subtopicId: 'igcse-bus-6-1', front: 'Who benefits when the home currency DEPRECIATES (weakens)?', backBullets: ['Exporters benefit because their goods become cheaper for overseas buyers.', 'Importers suffer higher costs for foreign materials.'] },

  // 6.2 (5)
  { id: 'igbus-fc-606', subtopicId: 'igcse-bus-6-2', front: 'Contrast an import Tariff with an import Quota.', backBullets: ['Tariff: tax placed on imported goods (raises their price).', 'Quota: physical cap on the maximum quantity of imports allowed.'] },
  { id: 'igbus-fc-607', subtopicId: 'igcse-bus-6-2', front: 'How can pressure groups force businesses to act sustainably?', backBullets: ['Organising consumer boycotts, negative media campaigns, and lobbying governments for stricter environmental laws.'] },
  { id: 'igbus-fc-608', subtopicId: 'igcse-bus-6-2', front: 'Define a Multinational Company (MNC) accurately.', backBullets: ['A business with physical factories, production, or service operations in MORE THAN ONE country (not just exporting!).'] },
  { id: 'igbus-fc-609', subtopicId: 'igcse-bus-6-2', front: 'List 3 benefits of an MNC to a host country.', backBullets: ['Creates local jobs, boosts GDP and government tax revenue, transfers technology/skills, and improves infrastructure.'] },
  { id: 'igbus-fc-610', subtopicId: 'igcse-bus-6-2', front: 'List 3 drawbacks of an MNC to a host country.', backBullets: ['Drives small local rivals out of business, repatriates profits home, may create mostly low-skilled jobs or deplete resources.'] },
];

export const IGCSE_BUSINESS_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'cs-igbus-1', slug: 'unit-1-business-activity', title: 'Unit 1: Understanding Business Activity', topicNumber: 1, topicName: 'Understanding Business Activity', summary: 'Factors of production, opportunity cost, added value, sectors, growth, liability, and stakeholders.', accentColor: '#2563eb', sections: [{ heading: '1.1–1.2 Core Concepts', formula: 'Added Value = Selling Price − Bought-in Materials', points: ['C-E-L-L factors of production; Primary/Secondary/Tertiary sectors.', 'Unlimited liability (sole trader/partnership) vs Limited liability (Ltd/Plc); Horizontal/Vertical/Conglomerate integration.'] }] },
  { id: 'cs-igbus-2', slug: 'unit-2-people', title: 'Unit 2: People in Business', topicNumber: 2, topicName: 'People in Business', summary: 'Taylor, Maslow, Herzberg, financial/non-financial rewards, structure, leadership, recruitment, and training.', accentColor: '#7c3aed', sections: [{ heading: '2.1–2.2 Motivation & Management', points: ['Taylor (piece-rate), Maslow (5-level hierarchy), Herzberg (Hygiene vs Motivators); Enlargement ≠ Enrichment.', 'Delayering widens span of control & speeds communication; Redundancy (job gone) ≠ Dismissal (worker fault).'] }] },
  { id: 'cs-igbus-3', slug: 'unit-3-marketing', title: 'Unit 3: Marketing & The 4 Ps', topicNumber: 3, topicName: 'Marketing', summary: 'Segmentation, niche vs mass, primary vs secondary research, Product Life Cycle, PED, and e-commerce.', accentColor: '#db2777', sections: [{ heading: '3.1–3.2 Research & Marketing Mix', points: ['Primary (first-hand, focused, pricey) vs Secondary (desk, fast, cheap); Random vs Quota sampling.', 'Elastic demand: higher price → LOWER revenue; Inelastic: higher price → HIGHER revenue.'] }] },
  { id: 'cs-igbus-4', slug: 'unit-4-operations', title: 'Unit 4: Operations, Break-Even & Quality', topicNumber: 4, topicName: 'Operations Management', summary: 'Job/batch/flow, productivity, Kaizen, JIT, costs, break-even, economies of scale, and quality.', accentColor: '#059669', sections: [{ heading: '4.1–4.2 Production & Break-Even', formula: 'Break-Even = Fixed Costs ÷ (Price − Variable Cost)  |  MoS = Sales − BE', points: ['Kaizen = continuous small improvements; JIT = zero warehouse stock (needs reliable suppliers).', 'Quality control inspects at end; Quality assurance prevents defects at every stage.'] }] },
  { id: 'cs-igbus-5', slug: 'unit-5-finance', title: 'Unit 5: Finance, Cash Flow & Ratios', topicNumber: 5, topicName: 'Financial Information & Decisions', summary: 'Sources of finance, cash-flow forecasts, income statements, balance sheets, and ratios.', accentColor: '#ea580c', sections: [{ heading: '5.1–5.2 Cash Flow & Financial Ratios', formula: 'Working Capital = CA − CL  |  Acid-Test = (CA − Inventory) ÷ CL', points: ['Net Cash Flow = Inflows − Outflows; Closing = Opening + Net Cash Flow.', 'GPM = GP/Rev × 100 | NPM = NP/Rev × 100 | ROCE = NP/Capital Employed × 100.'] }] },
  { id: 'cs-igbus-6', slug: 'unit-6-external', title: 'Unit 6: External Influences & Globalisation', topicNumber: 6, topicName: 'External Influences on Business Activity', summary: 'Business cycle, taxes, interest rates, SPICED exchange rates, ethics, tariffs/quotas, and MNCs.', accentColor: '#0284c7', sections: [{ heading: '6.1–6.2 Macroeconomy & MNCs', formula: 'SPICED: Strong Pound → Imports Cheaper, Exports Dearer', points: ['Higher interest rates raise borrowing costs and cut mortgage holders’ spending.', 'Tariff = tax on imports; Quota = quantity cap; MNCs bring jobs/tech but repatriate profits.'] }] },
];

export const IGCSE_BUSINESS_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'igbus-exam-1', subtopicId: 'igcse-bus-1-1', number: 1, stimulus: 'Maya runs a small artisan bakery buying £1.20 of flour, butter, and packaging per cake and selling each cake for £6.00.', parts: [{ id: 'igbus-exam-1a', label: 'a)', prompt: 'Calculate Maya’s added value per cake and explain two ways she could increase it further.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Added value = £6.00 − £1.20 = £4.80 per cake. She could increase it by using premium gift branding/packaging to raise the selling price or buying ingredients in bulk to lower input costs.', markPoints: [{ id: 'mp1', markDescription: 'Calculates £4.80 added value', numericMatch: { value: 4.8, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Increase price via branding/packaging/quality/convenience', requiredKeywordGroups: [['brand', 'packag', 'quality', 'price', 'convenien']] }, { id: 'mp3', markDescription: 'Lower bought-in input costs via bulk buying or cheaper suppliers', requiredKeywordGroups: [['bulk', 'cheaper', 'supplier', 'lower cost', 'input']] }] } }] },
  { id: 'igbus-exam-2', subtopicId: 'igcse-bus-1-2', number: 2, stimulus: 'GreenSpark currently operates as a two-partner electrical partnership and wants to raise £250,000 to open three new branches.', parts: [{ id: 'igbus-exam-2a', label: 'a)', prompt: 'Explain two advantages to the partners of converting into a Private Limited Company (Ltd).', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Converting to an Ltd grants limited liability so the owners’ personal assets are protected if the business fails, allows them to raise extra capital by selling shares privately to family/investors, and gives continuity of existence.', markPoints: [{ id: 'mp1', markDescription: 'Gains limited liability protecting personal assets', requiredKeywordGroups: [['limited liability'], ['personal', 'asset', 'protect', 'invested']] }, { id: 'mp2', markDescription: 'Can raise more finance by selling private shares', requiredKeywordGroups: [['share', 'capital', 'finance']] }, { id: 'mp3', markDescription: 'Separate legal identity / continuity without stock-market takeover risk', requiredKeywordGroups: [['separate legal', 'continuity', 'control', 'private']] }] } }] },
  { id: 'igbus-exam-3', subtopicId: 'igcse-bus-2-1', number: 3, stimulus: 'A call centre suffers 40% annual labour turnover despite paying above-average hourly wages.', parts: [{ id: 'igbus-exam-3a', label: 'a)', prompt: 'Using Herzberg’s Two-Factor Theory, explain why high pay alone has failed to keep staff motivated and recommend one non-financial method.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'In Herzberg’s theory, pay is only a hygiene factor that prevents dissatisfaction rather than actively motivating. Introducing job enrichment (giving staff responsibility to resolve customer issues independently) or recognition awards provides true motivators.', markPoints: [{ id: 'mp1', markDescription: 'Pay is only a hygiene factor (prevents dissatisfaction)', requiredKeywordGroups: [['hygiene'], ['dissatisfaction', 'motivat']] }, { id: 'mp2', markDescription: 'Motivators like responsibility/recognition/achievement are missing', requiredKeywordGroups: [['motivator', 'responsibility', 'recognition', 'achievement']] }, { id: 'mp3', markDescription: 'Recommends job enrichment / rotation / empowerment / teamwork', requiredKeywordGroups: [['enrichment', 'rotation', 'empower', 'team', 'recognition']] }] } }] },
  { id: 'igbus-exam-4', subtopicId: 'igcse-bus-2-2', number: 4, stimulus: 'FastTech Ltd has 7 management layers and slows down whenever customers request custom urgent software updates.', parts: [{ id: 'igbus-exam-4a', label: 'a)', prompt: 'Explain how delayering and democratic leadership could improve FastTech’s responsiveness.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Delayering shortens the chain of command so messages travel faster with less distortion and encourages delegation. Democratic leadership involves skilled developers in decisions, improving ideas and motivation.', markPoints: [{ id: 'mp1', markDescription: 'Delayering shortens chain of command for faster communication', requiredKeywordGroups: [['chain of command', 'faster', 'communication']] }, { id: 'mp2', markDescription: 'Encourages delegation and cuts management costs', requiredKeywordGroups: [['delegat', 'cost']] }, { id: 'mp3', markDescription: 'Democratic style involves skilled staff, boosting motivation and better ideas', requiredKeywordGroups: [['democratic', 'consult', 'involv'], ['motivat', 'idea', 'decision']] }] } }] },
  { id: 'igbus-exam-5', subtopicId: 'igcse-bus-3-1', number: 5, stimulus: 'A new sportswear startup plans to sell eco-friendly running shoes exclusively to marathon runners.', parts: [{ id: 'igbus-exam-5a', label: 'a)', prompt: 'Explain one advantage and one risk of targeting this niche market, and justify using quota sampling for primary research.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Advantage: less competition allows higher profit margins by meeting marathon runners’ exact needs. Risk: small market size limits sales volume if demand drops. Quota sampling ensures only target runners are surveyed rather than non-runners.', markPoints: [{ id: 'mp1', markDescription: 'Niche advantage: less competition / higher margins / tailored needs', requiredKeywordGroups: [['less competition', 'margin', 'tailor', 'specific', 'needs']] }, { id: 'mp2', markDescription: 'Niche risk: small total market / vulnerable if tastes change', requiredKeywordGroups: [['small', 'limited', 'risk', 'volume']] }, { id: 'mp3', markDescription: 'Quota sampling targets exact segment (runners) accurately', requiredKeywordGroups: [['quota', 'target', 'runner', 'segment']] }] } }] },
  { id: 'igbus-exam-6', subtopicId: 'igcse-bus-3-2', number: 6, stimulus: 'NovaPhone launches a patented foldable smartphone with zero direct competitors.', diagram: 'supply-demand-equilibrium', parts: [{ id: 'igbus-exam-6a', label: 'a)', prompt: 'Recommend a suitable launch pricing strategy for NovaPhone and explain why its demand is likely to be price inelastic initially.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Price skimming is best: setting a high initial price maximises profit from early adopters and recovers R&D costs. Demand is price inelastic initially because there are no close substitutes and a strong unique brand.', markPoints: [{ id: 'mp1', markDescription: 'Recommends price skimming (high initial price)', requiredKeywordGroups: [['skimming']] }, { id: 'mp2', markDescription: 'Recovers R&D costs / high profit from early adopters', requiredKeywordGroups: [['r&d', 'research', 'high profit', 'early adopter', 'image']] }, { id: 'mp3', markDescription: 'Inelastic because zero/few close substitutes exist', requiredKeywordGroups: [['no substitute', 'few substitute', 'unique', 'inelastic']] }] } }] },
  { id: 'igbus-exam-7', subtopicId: 'igcse-bus-4-1', number: 7, stimulus: 'AutoParts Co switches its brake-pad assembly line from holding 4 weeks of buffer stock to Just-in-Time (JIT) deliveries.', parts: [{ id: 'igbus-exam-7a', label: 'a)', prompt: 'Evaluate whether switching to JIT is a good decision for AutoParts Co.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'JIT eliminates warehouse rent, insurance, and obsolete stock costs while freeing working capital. However, any late delivery or transport strike will halt the whole assembly line because there is no buffer inventory — so it succeeds only with ultra-reliable suppliers.', markPoints: [{ id: 'mp1', markDescription: 'Saves warehouse/storage costs and improves cash flow', requiredKeywordGroups: [['warehouse', 'storage', 'cash', 'waste']] }, { id: 'mp2', markDescription: 'Risk of halting production if deliveries are late', requiredKeywordGroups: [['late', 'delay', 'halt', 'stop', 'buffer']] }, { id: 'mp3', markDescription: 'Depends on reliable local suppliers / strong supplier links', requiredKeywordGroups: [['reliable', 'supplier']] }] } }] },
  { id: 'igbus-exam-8', subtopicId: 'igcse-bus-4-2', number: 8, stimulus: 'A candle maker has fixed costs of £4,500/month, variable costs of £3/candle, sells candles for £12 each, and expects to sell 700 candles per month.', diagram: 'break-even-chart', parts: [{ id: 'igbus-exam-8a', label: 'a)', prompt: 'Calculate the monthly break-even output and margin of safety.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Contribution = £12 − £3 = £9. Break-even = £4,500 ÷ £9 = 500 candles. Margin of safety = 700 − 500 = 200 candles.', markPoints: [{ id: 'mp1', markDescription: 'Calculates contribution = £9', numericMatch: { value: 9, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Calculates break-even = 500 candles', numericMatch: { value: 500, tolerance: 1 } }, { id: 'mp3', markDescription: 'Calculates margin of safety = 200 candles', numericMatch: { value: 200, tolerance: 1 } }] } }] },
  { id: 'igbus-exam-9', subtopicId: 'igcse-bus-5-1', number: 9, stimulus: 'A seasonal garden centre forecasts an Opening Balance of £4,000 in February, Cash Inflows of £9,000, and Cash Outflows of £15,000.', parts: [{ id: 'igbus-exam-9a', label: 'a)', prompt: 'Calculate February’s Net Cash Flow and Closing Balance, and suggest one suitable source of short-term finance.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Net Cash Flow = £9,000 − £15,000 = −£6,000. Closing Balance = £4,000 − £6,000 = −£2,000. A short-term bank overdraft or supplier trade credit is suitable to cover this temporary seasonal gap.', markPoints: [{ id: 'mp1', markDescription: 'Calculates Net Cash Flow = −£6,000', numericMatch: { value: -6000, tolerance: 10 } }, { id: 'mp2', markDescription: 'Calculates Closing Balance = −£2,000', numericMatch: { value: -2000, tolerance: 10 } }, { id: 'mp3', markDescription: 'Suggests bank overdraft or trade credit', requiredKeywordGroups: [['overdraft', 'trade credit']] }] } }] },
  { id: 'igbus-exam-10', subtopicId: 'igcse-bus-5-2', number: 10, stimulus: 'Apex Retail reports Revenue £400,000, Cost of Sales £220,000, Expenses £100,000, and Capital Employed £500,000.', parts: [{ id: 'igbus-exam-10a', label: 'a)', prompt: 'Calculate Gross Profit Margin (GPM), Net Profit Margin (NPM), and ROCE.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Gross Profit = £180,000 → GPM = (180,000 ÷ 400,000) × 100 = 45%. Net Profit = £80,000 → NPM = (80,000 ÷ 400,000) × 100 = 20%. ROCE = (80,000 ÷ 500,000) × 100 = 16%.', markPoints: [{ id: 'mp1', markDescription: 'Calculates GPM = 45%', numericMatch: { value: 45, tolerance: 0.2 } }, { id: 'mp2', markDescription: 'Calculates NPM = 20%', numericMatch: { value: 20, tolerance: 0.2 } }, { id: 'mp3', markDescription: 'Calculates ROCE = 16%', numericMatch: { value: 16, tolerance: 0.2 } }] } }] },
  { id: 'igbus-exam-11', subtopicId: 'igcse-bus-6-1', number: 11, stimulus: 'The UK central bank raises interest rates by 2% at the same time as the pound appreciates by 10% against the euro.', parts: [{ id: 'igbus-exam-11a', label: 'a)', prompt: 'Explain how these two changes together affect a UK furniture manufacturer that exports 60% of its sofas to Europe and holds large bank loans.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Higher interest rates increase monthly repayments on its bank loans (raising fixed costs) and lower UK buyers’ disposable incomes. Meanwhile, the stronger pound makes exported sofas dearer in euros (SPICED), cutting European sales volume.', markPoints: [{ id: 'mp1', markDescription: 'Higher loan interest repayments raise business costs', requiredKeywordGroups: [['loan', 'repayment', 'borrowing'], ['cost', 'higher', 'expensive']] }, { id: 'mp2', markDescription: 'Lower domestic consumer spending (higher mortgages)', requiredKeywordGroups: [['consumer', 'spending', 'mortgage', 'demand']] }, { id: 'mp3', markDescription: 'Stronger pound makes exports dearer in Europe, cutting export sales', requiredKeywordGroups: [['export', 'dearer', 'more expensive'], ['sales', 'fall', 'drop', 'less']] }] } }] },
  { id: 'igbus-exam-12', subtopicId: 'igcse-bus-6-2', number: 12, stimulus: 'A global electronics MNC proposes opening a smartphone assembly factory employing 3,000 local workers in a developing country.', parts: [{ id: 'igbus-exam-12a', label: 'a)', prompt: 'Evaluate whether the host country’s government should welcome this MNC factory.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Benefits include 3,000 new jobs, higher GDP, corporate tax revenue, and technology/skills transfer. Drawbacks include profits being repatriated abroad, pressure on small local rivals, and potential pollution — so the government should welcome it while enforcing strict environmental and labour laws.', markPoints: [{ id: 'mp1', markDescription: 'Host benefits: jobs, GDP, tax revenue, or technology transfer', requiredKeywordGroups: [['job', 'employment', 'gdp', 'tax', 'technology', 'skill']] }, { id: 'mp2', markDescription: 'Host drawbacks: profit repatriation, local rivals hurt, or pollution', requiredKeywordGroups: [['repatriat', 'local', 'pollution', 'low-skill', 'resource']] }, { id: 'mp3', markDescription: 'Balanced evaluative judgement / condition', requiredKeywordGroups: [['law', 'regulat', 'balance', 'however', 'overall', 'depend']] }] } }] },
];

export const IGCSE_BUSINESS_PAST_PAPERS: PastPaperDoc[] = [
  { id: 'igbus-pp-2024-p1', specEra: 'new-9-1', year: '2024', title: 'Paper 1: Short Answer & Data Response (0450/12)', tier: 'Core & Extended', series: 'May/June 2024', paperCode: '0450/12', durationMinutes: 90, totalMarks: 80, sampleQuestions: [{ number: '1(a)', question: 'Define "added value" and explain two ways a restaurant can increase it.', marks: 4, markScheme: ['Selling price minus bought-in materials (2 marks)', 'Stronger ambience/branding to raise price; bulk-buying fresh ingredients to lower input costs (2 marks)'] }, { number: '2(c)', question: 'Outline two reasons why a business might remain small.', marks: 4, markScheme: ['Small local market / personal service preferred; owner wants to keep full control without extra debt (4 marks)'] }, { number: '3(d)', question: 'Explain two benefits of using off-the-job training for new IT engineers.', marks: 4, markScheme: ['Specialist external experts teach latest coding skills; employees gain recognised qualifications (4 marks)'] }, { number: '4(e)', question: 'Do you think price skimming is the best strategy for a new electric scooter brand? Justify your answer.', marks: 6, markScheme: ['Pros/cons of skimming vs competitive/penetration pricing in context + reasoned conclusion (6 marks)'] }] },
  { id: 'igbus-pp-2024-p2', specEra: 'new-9-1', year: '2024', title: 'Paper 2: Case Study (0450/22)', tier: 'Core & Extended', series: 'May/June 2024', paperCode: '0450/22', durationMinutes: 90, totalMarks: 80, sampleQuestions: [{ number: '1(a)', question: 'Explain two ways the business could reduce its high labour turnover using Maslow’s Hierarchy.', marks: 8, markScheme: ['Application of safety/social/esteem/self-actualisation needs in context (8 marks)'] }, { number: '2(b)', question: 'Consider the break-even chart and recommend whether to raise price by 10% or switch to a cheaper supplier.', marks: 12, markScheme: ['Analyse PED/demand impact vs quality/reputation impact + justified recommendation (12 marks)'] }, { number: '3(b)', question: 'Compare a bank loan with issuing shares to finance a $500,000 warehouse expansion.', marks: 12, markScheme: ['Loan: keeps control, adds interest cost; Shares: no interest, dilutes control (12 marks)'] }, { number: '4(a)', question: 'Explain how a 15% appreciation in the home currency affects an exporting manufacturer.', marks: 8, markScheme: ['SPICED: exports dearer abroad (lower sales) while imported parts get cheaper (8 marks)'] }] },
  { id: 'igbus-pp-2023-p1', specEra: 'new-9-1', year: '2023', title: 'Paper 1: Short Answer & Data Response (0450/11)', tier: 'Core & Extended', series: 'May/June 2023', paperCode: '0450/11', durationMinutes: 90, totalMarks: 80, sampleQuestions: [{ number: '1(b)', question: 'Calculate Gross Profit Margin when Revenue is $250,000 and Cost of Sales is $150,000.', marks: 2, markScheme: ['Gross Profit = $100,000 (1 mark)', 'GPM = (100,000 ÷ 250,000) × 100 = 40% (1 mark)'] }, { number: '2(d)', question: 'Explain two advantages of batch production for a commercial bakery.', marks: 4, markScheme: ['Offers variety of flavours/loaves; lower unit cost than one-off job production (4 marks)'] }, { number: '3(c)', question: 'Identify two differences between redundancy and dismissal.', marks: 4, markScheme: ['Redundancy = job no longer needed (not worker fault); Dismissal = employee misconduct/incompetence (4 marks)'] }, { number: '4(e)', question: 'Should a clothing retailer invest in e-commerce? Justify your answer.', marks: 6, markScheme: ['24/7 global sales and lower store rent vs returns, shipping, and online rivalry + judgement (6 marks)'] }] },
  { id: 'igbus-pp-2023-p2', specEra: 'new-9-1', year: '2023', title: 'Paper 2: Case Study (0450/21)', tier: 'Core & Extended', series: 'May/June 2023', paperCode: '0450/21', durationMinutes: 90, totalMarks: 80, sampleQuestions: [{ number: '1(b)', question: 'Compare Quality Control and Quality Assurance for a medical device factory.', marks: 12, markScheme: ['Defects unacceptable in medical devices → Quality Assurance prevents faults throughout production (12 marks)'] }, { number: '2(a)', question: 'Explain two reasons why cash-flow forecasts are essential for a seasonal hotel.', marks: 8, markScheme: ['Identifies off-season deficits early to arrange overdrafts and ensure staff wages are paid on time (8 marks)'] }, { number: '3(b)', question: 'Evaluate whether a soft-drinks firm should open a factory in a low-wage country as an MNC.', marks: 12, markScheme: ['Lower wages & tariff avoidance vs transport/quality/ethical risks + reasoned conclusion (12 marks)'] }, { number: '4(a)', question: 'Explain two ways pressure groups can influence a fast-fashion brand.', marks: 8, markScheme: ['Consumer boycotts reducing sales; negative social media publicity harming brand image (8 marks)'] }] },
  { id: 'igbus-pp-2022-p1', specEra: 'new-9-1', year: '2022', title: 'Paper 1: Short Answer & Data Response (0450/12)', tier: 'Core & Extended', series: 'Oct/Nov 2022', paperCode: '0450/12', durationMinutes: 90, totalMarks: 80, sampleQuestions: [{ number: '1(a)', question: 'Define "span of control" and explain one effect of delayering on it.', marks: 4, markScheme: ['Subordinates reporting to one manager (2 marks); delayering widens span of control (2 marks)'] }, { number: '2(c)', question: 'Distinguish between primary and secondary market research.', marks: 4, markScheme: ['Primary = original first-hand data; Secondary = existing desk data collected previously (4 marks)'] }, { number: '3(d)', question: 'Explain two benefits of Kaizen for a car parts factory.', marks: 4, markScheme: ['Cuts waste continuously without big capital outlay; involves workers boosting motivation (4 marks)'] }, { number: '4(e)', question: 'Evaluate whether raising interest rates harms all businesses equally.', marks: 6, markScheme: ['Highly indebted & luxury firms suffer most; cash-rich budget food retailers are far less affected (6 marks)'] }] },
  { id: 'igbus-pp-2022-p2', specEra: 'new-9-1', year: '2022', title: 'Paper 2: Case Study (0450/22)', tier: 'Core & Extended', series: 'Oct/Nov 2022', paperCode: '0450/22', durationMinutes: 90, totalMarks: 80, sampleQuestions: [{ number: '1(b)', question: 'Recommend whether a growing cafe chain should expand via franchising or company-owned stores.', marks: 12, markScheme: ['Franchising = fast low-capital growth vs loss of quality control; owned stores = full profit/control (12 marks)'] }, { number: '2(b)', question: 'Evaluate using Acid-Test Ratio and GPM whether the business is financially healthy.', marks: 12, markScheme: ['Interpret profitability (GPM) vs short-term liquidity (Acid-Test ≥ 1.0) in context (12 marks)'] }, { number: '3(a)', question: 'Explain two extension strategies for a maturing smartphone app.', marks: 8, markScheme: ['Add new AI features, launch in new countries, or refresh subscription tiers (8 marks)'] }, { number: '4(b)', question: 'Recommend how a toy firm should respond to a 20% import tariff in its largest overseas market.', marks: 12, markScheme: ['Absorb margin, build local assembly plant, or target tariff-free markets + judgement (12 marks)'] }] },
];

export const IGCSE_BUSINESS_KEY_TERMS: KeyTermEntry[] = [
  { id: 'igbus-kt-1', term: 'Opportunity cost', definition: 'Next best alternative foregone when choosing one option over another.', topicNumber: 1, subtopicId: 'igcse-bus-1-1', subtopicCode: '1.1' },
  { id: 'igbus-kt-2', term: 'Added value', definition: 'Selling price minus the cost of bought-in raw materials and components.', topicNumber: 1, subtopicId: 'igcse-bus-1-1', subtopicCode: '1.1' },
  { id: 'igbus-kt-3', term: 'Limited liability', definition: 'Shareholders’ financial risk is capped at the value of the shares they bought.', topicNumber: 1, subtopicId: 'igcse-bus-1-2', subtopicCode: '1.2' },
  { id: 'igbus-kt-4', term: 'Stakeholder', definition: 'Any individual or group with a direct interest in the decisions and performance of a business.', topicNumber: 1, subtopicId: 'igcse-bus-1-2', subtopicCode: '1.2' },
  { id: 'igbus-kt-5', term: 'Hygiene factors', definition: 'Herzberg’s essential workplace conditions (pay, safety, policy) that prevent dissatisfaction.', topicNumber: 2, subtopicId: 'igcse-bus-2-1', subtopicCode: '2.1' },
  { id: 'igbus-kt-6', term: 'Job enrichment', definition: 'Adding greater responsibility and challenging tasks to motivate workers.', topicNumber: 2, subtopicId: 'igcse-bus-2-1', subtopicCode: '2.1' },
  { id: 'igbus-kt-7', term: 'Span of control', definition: 'Number of subordinates working directly under a single manager.', topicNumber: 2, subtopicId: 'igcse-bus-2-2', subtopicCode: '2.2' },
  { id: 'igbus-kt-8', term: 'Delegation', definition: 'Passing authority to perform tasks down to subordinates while keeping ultimate responsibility.', topicNumber: 2, subtopicId: 'igcse-bus-2-2', subtopicCode: '2.2' },
  { id: 'igbus-kt-9', term: 'Market segmentation', definition: 'Dividing a market into subgroups of consumers with shared characteristics and needs.', topicNumber: 3, subtopicId: 'igcse-bus-3-1', subtopicCode: '3.1' },
  { id: 'igbus-kt-10', term: 'Price elasticity of demand', definition: 'Responsiveness of quantity demanded to a change in price.', topicNumber: 3, subtopicId: 'igcse-bus-3-2', subtopicCode: '3.2' },
  { id: 'igbus-kt-11', term: 'Kaizen', definition: 'Lean production philosophy of continuous small improvements suggested by employees.', topicNumber: 4, subtopicId: 'igcse-bus-4-1', subtopicCode: '4.1' },
  { id: 'igbus-kt-12', term: 'Just-in-Time (JIT)', definition: 'Inventory control ordering stock to arrive moments before use, eliminating storage waste.', topicNumber: 4, subtopicId: 'igcse-bus-4-1', subtopicCode: '4.1' },
  { id: 'igbus-kt-13', term: 'Break-even output', definition: 'Output level where Total Revenue equals Total Cost (Fixed Costs ÷ Contribution per unit).', topicNumber: 4, subtopicId: 'igcse-bus-4-2', subtopicCode: '4.2' },
  { id: 'igbus-kt-14', term: 'Margin of safety', definition: 'Amount by which actual or forecast sales exceed break-even output.', topicNumber: 4, subtopicId: 'igcse-bus-4-2', subtopicCode: '4.2' },
  { id: 'igbus-kt-15', term: 'Working capital', definition: 'Current Assets minus Current Liabilities, used to pay day-to-day running costs.', topicNumber: 5, subtopicId: 'igcse-bus-5-1', subtopicCode: '5.1' },
  { id: 'igbus-kt-16', term: 'Acid-Test Ratio', definition: 'Strict liquidity ratio: (Current Assets − Inventory) ÷ Current Liabilities.', topicNumber: 5, subtopicId: 'igcse-bus-5-2', subtopicCode: '5.2' },
  { id: 'igbus-kt-17', term: 'Exchange rate', definition: 'Value of one currency expressed in terms of another currency.', topicNumber: 6, subtopicId: 'igcse-bus-6-1', subtopicCode: '6.1' },
  { id: 'igbus-kt-18', term: 'Multinational company (MNC)', definition: 'Business operating factories or service outlets in more than one country.', topicNumber: 6, subtopicId: 'igcse-bus-6-2', subtopicCode: '6.2' },
];
