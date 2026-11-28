import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const IGCSE_BUS_TOPICS_UNIT_4: TopicDefinition[] = [
  {
    number: 4,
    title: 'Operations Management',
    subtopics: [
      {
        id: 'igcse-bus-4-1',
        code: '4.1',
        slug: '4.1-production-methods-productivity-lean-technology',
        title: 'Production Methods, Productivity, Technology & Lean Production',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-4-2',
        code: '4.2',
        slug: '4.2-costs-economies-scale-breakeven-analysis',
        title: 'Costs, Economies of Scale & Break-Even Analysis',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-4-3',
        code: '4.3',
        slug: '4.3-achieving-quality-production',
        title: 'Achieving Quality Production (Quality Control, Quality Assurance & TQM)',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-4-4',
        code: '4.4',
        slug: '4.4-location-decisions',
        title: 'Location Decisions (Manufacturing, Services & Relocating Overseas)',
        readingMinutes: 9,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_BUS_NOTES_UNIT_4: Record<string, NoteLesson> = {
  'igcse-bus-4-1': {
    subtopicId: 'igcse-bus-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Production Methods, Productivity, Technology & Lean Production',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 4.1: Production of goods and services',
    youtubeId: 'WsYcHjQ8pIM',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:18',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 4.1)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Productivity, Buffer Inventory & Lean Production (Kaizen & JIT)', cardId: 'igcse-bus-4-1-c1' },
      { time: '4:45', seconds: 285, label: 'Job, Batch & Flow Production Methods Compared', cardId: 'igcse-bus-4-1-c2' },
      { time: '9:30', seconds: 570, label: 'How Technology (Automation, CAD/CAM & EPOS) Transforms Operations', cardId: 'igcse-bus-4-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-1-c1',
        title: 'Productivity, Inventory Management & Lean Production',
        summary: 'Raising output per worker and cutting waste through Kaizen and Just-in-Time lowers unit costs.',
        bullets: [
          '**Labour productivity** = `Total Output ÷ Number of Employees`. Higher productivity lowers average cost per unit and improves competitiveness.',
          '**Lean production** cuts every form of operational waste (defects, overproduction, waiting time, excess stock) using **Kaizen** (continuous small shop-floor improvements) and **Just-in-Time (JIT)** (deliveries arriving right when needed so zero warehouse stock is held).',
        ],
        subsections: [
          {
            heading: 'Buffer Inventory vs JIT Trade-off',
            bullets: [
              '**Buffer inventory** protects against sudden demand spikes or late deliveries, yet incurs warehouse rent, insurance, and spoilage costs.',
              '**JIT** eliminates storage costs and frees cash, yet requires ultra-reliable suppliers because one late truck stops the whole factory.',
            ],
            exampleHeading: 'Worked calculation: Weekly labour productivity',
            examples: [
              'A bottling factory increases weekly output from 12,000 to 15,000 bottles using the same 25 workers.',
              'Productivity rises from `12,000 ÷ 25 = 480` to `15,000 ÷ 25 =` **600 bottles/worker (+25%)**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Kaizen', definition: 'Japanese lean production approach focused on continuous small efficiency improvements suggested by workers.' },
          { term: 'Just-in-Time (JIT)', definition: 'Inventory method ordering raw materials to arrive moments before production so virtually no buffer stock is stored.' },
        ],
      },
      {
        id: 'igcse-bus-4-1-c2',
        title: 'Job, Batch & Flow Production Methods',
        summary: 'Matching the production method to product customisation, sales volume, and available capital.',
        bullets: [
          '**Job production**: single bespoke item made to individual customer specifications (e.g. tailored wedding dress, bridge) — high quality and worker pride, but high unit cost and slow output.',
          '**Batch production**: groups of identical items produced together before resetting machines for the next batch (e.g. 500 blueberry muffins then 500 chocolate muffins) — flexible variety, though machine changeover causes downtime.',
          '**Flow (mass) production**: continuous automated assembly line producing huge volumes of standardised goods (e.g. soft-drink cans, smartphones) — lowest average cost via economies of scale, yet massive capital setup cost and repetitive boring jobs.',
        ],
        subsections: [
          {
            heading: 'Choosing the Optimal Method in Case Studies',
            bullets: [
              'Weigh **nature of the product** (unique vs standardised), **size of the market** (niche vs mass), **nature of demand** (steady vs seasonal), and **size/finance of the business**.',
            ],
            exampleHeading: 'Concrete comparison: Artisan bakery vs Industrial bakery',
            examples: [
              'A local cake designer making custom 3-tier birthday cakes uses **job production**, whereas a supermarket bakery producing 20,000 identical white loaves daily uses **flow production**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'flow production', definition: 'Continuous production of large quantities of identical standardised goods on an assembly line.' },
        ],
      },
      {
        id: 'igcse-bus-4-1-c3',
        title: 'Technology in Production (Automation, CAD/CAM & EPOS)',
        summary: 'Automation and robotics boost speed and consistency, though upfront investment and worker resistance must be managed.',
        bullets: [
          '**CAD/CAM & Robotics**: **Computer-Aided Design (CAD)** speeds up 3D product prototyping; **Computer-Aided Manufacturing (CAM)** and robotics cut defects and operate 24/7 with lower variable wage bills.',
          '**EPOS (Electronic Point of Sale)** scans barcodes at retail tills to update inventory automatically and trigger JIT supplier re-orders.',
        ],
        subsections: [
          {
            heading: 'Evaluating New Production Technology',
            bullets: [
              '**Advantages** - higher productivity, consistent quality, safer hazardous work, and faster market response.',
              '**Disadvantages** - huge upfront capital outlay, worker redundancies hurting morale/union relations, costly staff retraining, and rapid tech obsolescence.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'automation', definition: 'Replacing manual tasks with computer-controlled machinery and robotics to boost speed and precision.' },
        ],
        memoryAid: 'Production Volume Ladder: Job (1 unique) → Batch (grouped variety) → Flow (millions identical)!',
        commonMistake: 'Students confuse PRODUCTION (total volume made) with PRODUCTIVITY (output PER WORKER). Hiring twice as many workers to double output raises production, NOT productivity!',
      },
    ],
    keyTerms: [
      { term: 'Labour productivity', definition: 'Total output divided by number of employees.' },
      { term: 'Kaizen', definition: 'Continuous small operational improvements suggested by employees to eliminate waste.' },
      { term: 'Just-in-Time (JIT)', definition: 'Eliminating buffer inventory by scheduling deliveries right onto the production line.' },
      { term: 'Flow production', definition: 'Continuous high-volume assembly-line production of identical standardised products.' },
    ],
    checklistPoints: [
      'Calculate labour productivity and distinguish productivity from total production.',
      'Compare Job, Batch, and Flow production across cost, flexibility, volume, and worker motivation.',
      'Evaluate Kaizen, JIT, and factory automation/EPOS technology in realistic business contexts.',
    ],
  },

  'igcse-bus-4-2': {
    subtopicId: 'igcse-bus-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Costs, Economies of Scale & Break-Even Analysis',
    readingMinutes: 11,
    videoTitle: 'Chapter 4.2: Costs, scale of production and break-even analysis',
    youtubeId: 'cyUjpE5k1iw',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '16:40',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 4.2)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Fixed, Variable, Total & Average Costs', cardId: 'igcse-bus-4-2-c1' },
      { time: '5:30', seconds: 330, label: 'Economies of Scale vs Diseconomies of Scale', cardId: 'igcse-bus-4-2-c2' },
      { time: '11:00', seconds: 660, label: 'Break-Even Charts, Formula & Margin of Safety', cardId: 'igcse-bus-4-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-2-c1',
        title: 'Fixed Costs, Variable Costs, Total Cost & Average Cost',
        summary: 'Distinguishing overheads that stay flat from variable costs that climb with every unit produced.',
        bullets: [
          '**Fixed costs (FC)**: stay constant regardless of output in the short run (rent, insurance, management salaries). **Variable costs (VC)**: rise directly with output (raw materials, packaging, piece-rate pay).',
          '**Key equations**: `Total Cost (TC) = FC + Total VC`; `Average Cost (AC) = TC ÷ Output`; `Total Revenue (TR) = Price × Output`.',
        ],
        subsections: [
          {
            heading: 'Why Cost Data Matters to Managers',
            bullets: [
              'Accurate cost data helps managers set profitable prices, decide whether to discontinue loss-making lines, and compare factory locations.',
            ],
            exampleHeading: 'Worked calculation: Total & Average Cost',
            examples: [
              'A workshop has monthly Fixed Costs = $6,000 and Variable Cost = $4/chair. Making 1,000 chairs gives `TC = $6,000 + (1,000 × $4) =` **$10,000** and `AC = $10,000 ÷ 1,000 =` **$10/chair**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fixed costs', definition: 'Business costs that do not vary with output in the short run, such as factory rent and insurance.' },
        ],
      },
      {
        id: 'igcse-bus-4-2-c2',
        title: 'Economies of Scale vs Diseconomies of Scale',
        summary: 'Expanding lowers average cost per unit until excessive size creates communication and morale diseconomies.',
        bullets: [
          '**5 Economies of Scale** (falling average cost as output grows): **Purchasing** (bulk-buying discounts), **Marketing** (spreading TV ad costs over huge sales), **Financial** (cheaper bank loans), **Managerial** (hiring specialist managers), and **Technical** (automated high-speed machinery).',
          '**Diseconomies of Scale** (rising average cost when a firm grows too large): **poor communication** across tall hierarchies, **low employee morale/alienation**, and **slow decision-making**.',
        ],
        subsections: [
          {
            heading: 'Avoiding Diseconomies During Expansion',
            bullets: [
              'Large corporations counter diseconomies by decentralising authority to regional branches, delayering management, and using digital ERP communication.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'economies of scale', definition: 'Factors that reduce a firm’s average cost per unit as its scale of production expands.' },
          { term: 'diseconomies of scale', definition: 'Factors that cause average cost per unit to rise when a business becomes too large to coordinate efficiently.' },
        ],
      },
      {
        id: 'igcse-bus-4-2-c3',
        title: 'Break-Even Output, Margin of Safety & Chart Limitations',
        summary: 'Break-even identifies the exact sales volume where Total Revenue equals Total Cost (zero profit, zero loss).',
        bullets: [
          '**Contribution per unit** = `Selling Price − Variable Cost per unit`. **Break-Even Output** = `Fixed Costs ÷ Contribution per unit`.',
          '**Margin of Safety** = `Actual/Forecast Output − Break-Even Output` (how far sales can drop before making a loss).',
        ],
        subsections: [
          {
            heading: 'Worked Calculation & Limitations',
            bullets: [
              '**Limitations** - assumes **all goods produced are sold** (no unsold inventory), assumes straight-line TR and TC (ignoring bulk discounts), and only models one fixed price at a time.',
            ],
            exampleHeading: 'Worked calculation: Mr Lee’s table factory break-even',
            examples: [
              'Fixed Costs = $10,000/month, Selling Price = $250/table, Variable Cost = $125/table, Forecast Sales = 100 tables/month.',
              'Contribution = $250 − $125 = **$125** → Break-even = `$10,000 ÷ $125 =` **80 tables** → Margin of Safety = `100 − 80 =` **20 tables**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'break-even output', definition: 'Quantity of output where Total Revenue exactly equals Total Cost, yielding zero profit and zero loss.' },
        ],
        diagram: 'break-even-chart',
        memoryAid: '5 Economies of Scale = Really Fun Managers Prefer Tech (Risk-bearing/Purchasing, Financial, Managerial, Marketing, Technical)!',
        commonMistake: 'Students say economies of scale lower TOTAL costs. Producing more ALWAYS raises total cost — economies of scale lower AVERAGE COST PER UNIT!',
      },
    ],
    keyTerms: [
      { term: 'Fixed costs', definition: 'Costs staying unchanged regardless of output in the short run (rent, salaries).' },
      { term: 'Variable costs', definition: 'Costs rising directly with output volume (raw materials, packaging).' },
      { term: 'Economies of scale', definition: 'Fall in average cost per unit as a business expands output.' },
      { term: 'Margin of safety', definition: 'Actual or forecast sales minus break-even output.' },
    ],
    checklistPoints: [
      'Classify fixed vs variable costs and calculate TC, AC, and TR accurately.',
      'Explain all 5 economies of scale and 3 causes of diseconomies of scale.',
      'Calculate break-even output and margin of safety and state limitations of break-even charts.',
    ],
  },

  'igcse-bus-4-3': {
    subtopicId: 'igcse-bus-4-3',
    subtopicCode: '4.3',
    subtopicTitle: 'Achieving Quality Production (Quality Control, Quality Assurance & TQM)',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 4.3: Achieving quality production',
    youtubeId: '7kkUGZXZgZs',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:50',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 4.3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Quality Matters to Customers & Brand Reputation', cardId: 'igcse-bus-4-3-c1' },
      { time: '4:15', seconds: 255, label: 'Quality Control (End Inspection) vs Quality Assurance (Process Checks)', cardId: 'igcse-bus-4-3-c2' },
      { time: '8:30', seconds: 510, label: 'Total Quality Management (TQM) & Cost-Benefit Evaluation', cardId: 'igcse-bus-4-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-3-c1',
        title: 'What Quality Means & Why It Drives Competitiveness',
        summary: 'Quality means producing a good or service free of defects that consistently meets customer expectations.',
        bullets: [
          '**Benefits of high quality**: builds strong **brand loyalty** and repeat purchases, lets the business charge **higher prices**, slashes costly returns/repairs/recalls, and attracts new customers via positive reviews.',
          '**Consequences of poor quality**: damaged reputation, expensive legal compensation claims, wasted scrap materials, and rapid customer defection to rivals.',
        ],
        subsections: [
          {
            heading: 'Quality Depends on Customer Expectations',
            bullets: [
              'A $15 budget toaster and a $150 luxury toaster can BOTH be "high quality" if each reliably meets its target segment’s safety, durability, and value expectations.',
            ],
            exampleHeading: 'Concrete example: Cost of faulty returns',
            examples: [
              'If a phone maker ships 2,000 faulty handsets costing $180 each to replace and ship back, poor quality directly destroys **$360,000** in profit plus viral bad publicity.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'quality', definition: 'Producing a good or service free of defects that consistently meets customer expectations.' },
        ],
      },
      {
        id: 'igcse-bus-4-3-c2',
        title: 'Quality Control vs Quality Assurance',
        summary: 'Quality Control catches defects AFTER production; Quality Assurance prevents defects AT EVERY STAGE.',
        bullets: [
          '**Quality Control (QC)**: specialist inspectors check finished items at the END of the line — stops faulty products reaching buyers with minimal worker training, YET discovers mistakes **too late** (expensive scrap/rework of whole batches) and fails to identify root causes.',
          '**Quality Assurance (QA)**: quality standards (like ISO 9001) are checked at **every stage** from raw materials to delivery — cuts rework waste and boosts worker responsibility, though training staff takes time and money.',
        ],
        subsections: [
          {
            heading: 'Worked Comparison in a Factory',
            bullets: [
              'Checking wooden chairs at every stage (cutting, sanding, varnishing) stops a warped leg immediately before wasting varnish and assembly labour — saving far more than discarding finished chairs at final QC inspection.',
            ],
            exampleHeading: 'Worked example: Rework cost reduction',
            examples: [
              'Switching from QC to QA cuts monthly faulty batches from 400 units ($25 rework each = $10,000) to 60 units ($1,500), saving **$8,500/month** in waste.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'quality control', definition: 'Checking finished goods at the end of production by specialist inspectors to catch faulty items.' },
          { term: 'quality assurance', definition: 'Checking quality standards throughout every stage of production to prevent defects from occurring.' },
        ],
      },
      {
        id: 'igcse-bus-4-3-c3',
        title: 'Total Quality Management (TQM)',
        summary: 'Making continuous zero-defect improvement the responsibility of every single employee across the entire organisation.',
        bullets: [
          '**TQM philosophy**: every department acts as an **internal customer** — zero faulty output is ever passed to the next stage, eliminating the need for separate end-of-line inspectors.',
          '**Evaluation**: TQM slashes long-term waste and builds an elite quality reputation, YET only works if **every worker is fully trained and committed**; even one careless department breaks the quality chain.',
        ],
        subsections: [
          {
            heading: 'Exam Evaluation Tip (Mr Lee 6-Mark Technique)',
            bullets: [
              'For a small start-up on a tight budget, start with **Quality Assurance** checks; for a large brand competing on premium reliability, invest in full **TQM** culture.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Total Quality Management (TQM)', definition: 'Continuous improvement of products and processes by placing quality responsibility on every employee.' },
        ],
        memoryAid: 'QC = Catches faults at the END; QA = Assures quality ALL ALONG; TQM = Total workforce zero-defect culture!',
        commonMistake: 'Students claim Quality Control prevents defects. QC only DETECTS defects AFTER they are already made — Quality Assurance and TQM PREVENT defects!',
      },
    ],
    keyTerms: [
      { term: 'Quality', definition: 'Producing goods or services free of defects that meet customer expectations.' },
      { term: 'Quality control', definition: 'Inspecting finished output at the end of production to spot faulty items.' },
      { term: 'Quality assurance', definition: 'Checking quality standards at every stage of production to prevent defects.' },
      { term: 'Total Quality Management (TQM)', definition: 'Whole-organisation quality culture where every worker takes ownership of zero defects.' },
    ],
    checklistPoints: [
      'Explain why consistent quality boosts brand loyalty, pricing power, and profitability.',
      'Compare Quality Control, Quality Assurance, and TQM across cost, waste, and staff training.',
      'Justify the best quality method for a given business case study.',
    ],
  },

  'igcse-bus-4-4': {
    subtopicId: 'igcse-bus-4-4',
    subtopicCode: '4.4',
    subtopicTitle: 'Location Decisions (Manufacturing, Services & Relocating Overseas)',
    readingMinutes: 9,
    videoTitle: 'IGCSE Business: Chapter 4.4: Location decisions',
    youtubeId: 'a9YA3T1qKVM',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:05',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 4.4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Location Factors for Manufacturing Businesses', cardId: 'igcse-bus-4-4-c1' },
      { time: '4:05', seconds: 245, label: 'Location Factors for Retail & Service Businesses', cardId: 'igcse-bus-4-4-c2' },
      { time: '8:10', seconds: 490, label: 'Relocating Overseas & Government Legal/Grant Controls', cardId: 'igcse-bus-4-4-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-4-4-c1',
        title: 'Location Factors for Manufacturing Businesses',
        summary: 'Factories balance raw-material proximity, transport links, cheap land, skilled labour, and energy reliability.',
        bullets: [
          '**Production methods & materials**: **bulk-reducing** factories (sawmills, steelworks) locate close to **raw materials** to save heavy freight; **bulk-gaining** or perishable makers (bottlers, bakeries) locate close to **markets/customers**.',
          '**Infrastructure & costs**: reliable electricity/water supply, motorway/port transport links, affordable factory land/rent, and availability of appropriately skilled labour.',
        ],
        subsections: [
          {
            heading: 'External Economies & Government Grants',
            bullets: [
              'Locating near specialist suppliers lowers delivery costs; governments also offer **regional grants or tax breaks** to attract factories into high-unemployment regions.',
            ],
            exampleHeading: 'Worked cost check: City vs Industrial Park factory',
            examples: [
              'An edge-of-town industrial park charges $4,500/month rent (vs $9,500 city centre) while adding only $1,200/month extra van fuel → net monthly saving of **$3,800** ($45,600/year).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'infrastructure', definition: 'Essential transport, power, water, and digital networks needed for businesses to operate smoothly.' },
        ],
      },
      {
        id: 'igcse-bus-4-4-c2',
        title: 'Location Factors for Service & Retail Businesses',
        summary: 'Customer footfall, accessibility, skilled service staff, and nearby rivals dominate service-sector site choices.',
        bullets: [
          '**High-contact services (cafés, salons, restaurants)**: need high **customer footfall**, parking/public transit access, attractive neighbourhood image, and **skilled customer-facing employees**.',
          '**Low-contact / online services (call centres, IT support, e-commerce warehouses)**: do NOT need expensive high-street footfall — they prioritise low rent, fast broadband, and affordable skilled staff.',
        ],
        subsections: [
          {
            heading: 'Mr Lee’s Service-Sector Evaluation Insight',
            bullets: [
              'While high rent hurts profit margins, for premium services **skilled employees** directly drive customer satisfaction and brand reputation — making talent access often more decisive than chasing the cheapest rent.',
            ],
            exampleHeading: 'Concrete check: Retail shop vs Online warehouse',
            examples: [
              'A boutique fashion shop pays high city-centre rent for walk-in footfall, whereas an online fashion retailer locates its dispatch warehouse next to a cheap motorway junction.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'footfall', definition: 'Number of potential customers passing by a retail or service location over a given time.' },
        ],
      },
      {
        id: 'igcse-bus-4-4-c3',
        title: 'Relocating Overseas & Government Legal Controls',
        summary: 'Opening factories abroad taps lower wages and huge growth markets — balanced against tariffs, culture, and planning laws.',
        bullets: [
          '**Why relocate overseas**: access **cheaper wages and land**, enter **fast-growing foreign markets** directly, **bypass import tariffs/quotas** by producing inside a trade bloc, and secure tax incentives.',
          '**Risks & legal controls**: language/cultural barriers, longer shipping distances, unfamiliar employment/environmental laws, and domestic planning regulations prohibiting noisy factories near homes.',
        ],
        subsections: [
          {
            heading: 'Evaluating Overseas Relocation',
            bullets: [
              'Always weigh immediate wage savings against shipping lead times, exchange-rate volatility, quality control supervision, and potential domestic customer backlash over job losses.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'trade bloc', definition: 'Group of countries allowing tariff-free trade between members while imposing common external tariffs on outsiders.' },
        ],
        memoryAid: 'Manufacturing = Materials, Land, Power, Transport; Services = Footfall, Skilled Staff, Rent, Tech!',
        commonMistake: 'Students say ALL businesses should choose the cheapest rent location. A luxury café on a cheap empty backstreet with zero footfall will earn zero revenue and fail fast!',
      },
    ],
    keyTerms: [
      { term: 'Infrastructure', definition: 'Essential roads, ports, electricity, water, and broadband networks supporting business operations.' },
      { term: 'Footfall', definition: 'Volume of people walking past a retail or hospitality site.' },
      { term: 'Regional grant', definition: 'Government financial subsidy encouraging firms to open factories in high-unemployment areas.' },
      { term: 'Trade bloc', definition: 'Regional group of nations trading tariff-free internally (e.g. EU, ASEAN).' },
    ],
    checklistPoints: [
      'Compare key location factors for manufacturing vs high-contact retail vs online/service firms.',
      'Evaluate reasons and risks of relocating production overseas.',
      'Explain how government planning laws, grants, and tariffs influence location choices.',
    ],
  },
};

export const IGCSE_BUS_QUIZZES_UNIT_4: QuizQuestion[] = [
  // 4.1 (5)
  { id: 'igbus-q-41-1', subtopicId: 'igcse-bus-4-1', type: 'mcq', marks: 1, prompt: 'Which production method is best suited to bottling 100,000 identical cans of fizzy drink per day?', options: ['Job production', 'Batch production', 'Flow production', 'Craft production'], correctIndex: 2, explanation: 'Flow production achieves huge continuous output and lowest unit cost for identical mass-market goods.' },
  { id: 'igbus-q-41-2', subtopicId: 'igcse-bus-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the two Japanese lean production methods:', segments: ['Continuous small improvements suggested by workers is ', ', while ordering supplies to arrive moments before use is ', '.'], wordBank: ['Kaizen', 'Just-in-Time (JIT)', 'Batching', 'Delegation'], answers: ['Kaizen', 'Just-in-Time (JIT)'], explanation: 'Kaizen drives ongoing shop-floor efficiency; JIT eliminates warehouse storage waste.' },
  { id: 'igbus-q-41-3', subtopicId: 'igcse-bus-4-1', type: 'matching', marks: 3, prompt: 'Match each production method to its best product example:', pairs: [{ left: 'Job production', right: 'Bespoke handmade wedding dress' }, { left: 'Batch production', right: '300 blueberry muffins then 300 chocolate muffins' }, { left: 'Flow production', right: 'Continuous automated car assembly line' }], explanation: 'Choose production method by volume, standardisation, and customisation.' },
  { id: 'igbus-q-41-4', subtopicId: 'igcse-bus-4-1', type: 'mcq', marks: 1, prompt: 'A factory makes 9,000 phone cases per week using 30 workers. What is its weekly labour productivity?', options: ['270 cases/worker', '300 cases/worker', '30 cases/worker', '9,030 cases/worker'], correctIndex: 1, explanation: 'Labour productivity = Total output ÷ Employees = 9,000 ÷ 30 = 300 cases/worker.' },
  { id: 'igbus-q-41-5', subtopicId: 'igcse-bus-4-1', type: 'short-answer', marks: 2, prompt: 'Explain ONE advantage and ONE risk of using Just-in-Time (JIT) inventory control.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: eliminates warehouse rent, insurance, and stock spoilage while freeing up cash. Risk: holding zero buffer inventory means any late supplier delivery halts the entire production line.', markPoints: [{ id: 'mp1', markDescription: 'Advantage: cuts warehouse/storage costs or reduces waste/frees cash', requiredKeywordGroups: [['warehouse', 'storage', 'space', 'waste', 'cash']] }, { id: 'mp2', markDescription: 'Risk: late supplier delivery halts production (no buffer stock)', requiredKeywordGroups: [['supplier', 'late', 'delay'], ['halt', 'stop', 'buffer', 'shortage']] }] }, explanation: 'JIT saves holding costs only when supplier reliability and forecasting are rock-solid.' },

  // 4.2 (5)
  { id: 'igbus-q-42-1', subtopicId: 'igcse-bus-4-2', type: 'diagram-label', marks: 2, prompt: 'Identify the key labels on the Break-Even Chart:', diagram: 'break-even-chart', labels: [{ marker: 'Point where Total Revenue crosses Total Cost', options: ['Break-even output (0 profit)', 'Margin of safety'], answer: 'Break-even output (0 profit)' }, { marker: 'Horizontal gap between forecast sales and break-even', options: ['Break-even output (0 profit)', 'Margin of safety'], answer: 'Margin of safety' }], explanation: 'Break-even is TR = TC; Margin of safety measures the sales cushion above break-even.' },
  { id: 'igbus-q-42-2', subtopicId: 'igcse-bus-4-2', type: 'mcq', marks: 1, prompt: 'Fixed costs are $10,000, selling price is $250, and variable cost is $125 per unit. What is break-even output?', options: ['40 units', '80 units', '100 units', '125 units'], correctIndex: 1, explanation: 'Contribution = $250 − $125 = $125; Break-even = $10,000 ÷ $125 = 80 units.' },
  { id: 'igbus-q-42-3', subtopicId: 'igcse-bus-4-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO examples of Fixed Costs for a hair salon in the short run:', options: ['Monthly shop rent', 'Annual business insurance', 'Shampoo used per customer haircut', 'Disposable foils used per colour treatment'], correctIndices: [0, 1], explanation: 'Rent and insurance stay fixed regardless of customer count; shampoo and foils vary with output.' },
  { id: 'igbus-q-42-4', subtopicId: 'igcse-bus-4-2', type: 'fill-blank', marks: 2, prompt: 'Complete the scale of production rules:', segments: ['Buying raw materials in bulk for discounts is a ', ' economy of scale, while slow communication in giant firms causes ', ' of scale.'], wordBank: ['purchasing', 'diseconomies', 'fixed', 'margin'], answers: ['purchasing', 'diseconomies'], explanation: 'Bulk discounts lower average cost; coordination breakdowns raise average cost.' },
  { id: 'igbus-q-42-5', subtopicId: 'igcse-bus-4-2', type: 'short-answer', marks: 2, prompt: 'A firm’s break-even output is 80 tables/month and forecast sales are 100 tables/month. Calculate the margin of safety and state ONE limitation of break-even charts.', rubric: { maxMarks: 2, modelAnswer: 'Margin of safety = 100 − 80 = 20 tables per month. A limitation is that break-even charts assume all units produced are sold with zero unsold inventory (and assume constant linear prices/variable costs).', markPoints: [{ id: 'mp1', markDescription: 'Calculates margin of safety = 20 tables', numericMatch: { value: 20, tolerance: 0.1 } }, { id: 'mp2', markDescription: 'States limitation (assumes all output sold / linear costs & prices / single product)', requiredKeywordGroups: [['all', 'sold', 'unsold', 'inventory', 'linear', 'straight', 'constant', 'single']] }] }, explanation: 'Margin of safety = 100 − 80 = 20 units; remember break-even assumes all output is sold at one fixed price.' },

  // 4.3 (5)
  { id: 'igbus-q-43-1', subtopicId: 'igcse-bus-4-3', type: 'fill-blank', marks: 2, prompt: 'Distinguish quality control from quality assurance:', segments: ['Inspecting finished goods at the end of production is quality ', ', whereas checking quality at every stage to prevent defects is quality ', '.'], wordBank: ['control', 'assurance', 'efficiency', 'scale'], answers: ['control', 'assurance'], explanation: 'Quality control catches faults at the end; quality assurance prevents defects throughout.' },
  { id: 'igbus-q-43-2', subtopicId: 'igcse-bus-4-3', type: 'mcq', marks: 1, prompt: 'What is the main drawback of relying ONLY on traditional Quality Control (end-of-line inspection)?', options: ['It trains every worker in zero defects', 'Defects are spotted only after raw materials and labour have already been wasted on a faulty batch', 'It eliminates inspector wages', 'It guarantees zero customer returns automatically'], correctIndex: 1, explanation: 'Discovering defects at the very end causes expensive scrap and rework costs.' },
  { id: 'igbus-q-43-3', subtopicId: 'igcse-bus-4-3', type: 'mcq', marks: 1, prompt: 'Under Total Quality Management (TQM), who is responsible for checking quality?', options: ['Only the quality control manager', 'Every single employee across every department', 'Only external auditors once a year', 'Only customers after buying'], correctIndex: 1, explanation: 'TQM embeds zero-defect responsibility across the entire workforce.' },
  { id: 'igbus-q-43-4', subtopicId: 'igcse-bus-4-3', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO benefits to a manufacturer of achieving consistently high product quality:', options: ['Stronger brand reputation and higher repeat customer sales', 'Fewer costly product returns, warranty claims, and scrap waste', 'Eliminates all staff training costs', 'Removes the need for any raw materials'], correctIndices: [0, 1], explanation: 'Consistent quality strengthens customer loyalty, pricing power, and cuts rework waste.' },
  { id: 'igbus-q-43-5', subtopicId: 'igcse-bus-4-3', type: 'short-answer', marks: 2, prompt: 'Explain ONE benefit and ONE cost of introducing Quality Assurance across a furniture factory.', rubric: { maxMarks: 2, modelAnswer: 'Benefit: defects are spotted early during cutting or assembly, preventing costly rework and scrap waste across large batches. Cost: training every employee to follow strict quality assurance standards costs time and money.', markPoints: [{ id: 'mp1', markDescription: 'Spots faults early reducing scrap/rework waste', requiredKeywordGroups: [['early', 'stage', 'prevent'], ['waste', 'rework', 'scrap', 'defect']] }, { id: 'mp2', markDescription: 'Higher staff training costs or time needed to embed standards', requiredKeywordGroups: [['training', 'cost', 'time', 'expensive']] }] }, explanation: 'Quality assurance cuts long-run waste but requires upfront investment in employee training.' },

  // 4.4 (5)
  { id: 'igbus-q-44-1', subtopicId: 'igcse-bus-4-4', type: 'mcq', marks: 1, prompt: 'Which location factor is MOST critical for a high-street coffee shop relying on walk-in customers?', options: ['Being next to an iron-ore mine', 'High customer footfall and accessible skilled service staff', 'Lowest possible rent in a remote forest', 'Access to deep-sea shipping ports'], correctIndex: 1, explanation: 'High-contact hospitality businesses depend directly on visible footfall and quality customer service.' },
  { id: 'igbus-q-44-2', subtopicId: 'igcse-bus-4-4', type: 'matching', marks: 3, prompt: 'Match each business type to its top priority location factor:', pairs: [{ left: 'Bulk-reducing sawmill', right: 'Close to timber forests (raw materials)' }, { left: 'E-commerce dispatch warehouse', right: 'Low-rent motorway hub with fast broadband' }, { left: 'Luxury city hotel', right: 'Tourist/business centre with skilled hospitality staff' }], explanation: 'Location priorities vary sharply between manufacturing, logistics, and personal services.' },
  { id: 'igbus-q-44-3', subtopicId: 'igcse-bus-4-4', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO reasons why a European manufacturer might relocate a factory overseas:', options: ['Lower labour wages and cheaper industrial land costs', 'Avoiding import tariffs by producing directly inside a foreign trade bloc', 'Eliminating all language and cultural differences', 'Making shipping distances shorter to domestic European homes'], correctIndices: [0, 1], explanation: 'Lower operating costs and tariff-free regional market access are top overseas-location drivers.' },
  { id: 'igbus-q-44-4', subtopicId: 'igcse-bus-4-4', type: 'fill-blank', marks: 2, prompt: 'Complete the government location influence concepts:', segments: ['Governments attract factories into high-unemployment areas by offering regional ', ', while local ', ' laws prevent noisy factories opening next to residential houses.'], wordBank: ['grants', 'planning', 'tariffs', 'footfall'], answers: ['grants', 'planning'], explanation: 'Regional grants incentivise job creation; planning regulations protect residents and environments.' },
  { id: 'igbus-q-44-5', subtopicId: 'igcse-bus-4-4', type: 'short-answer', marks: 2, prompt: 'Explain ONE advantage and ONE drawback of moving a clothing factory to a lower-wage overseas country.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: significantly lower wage and rent costs reduce average cost per garment and boost competitiveness. Drawback: longer international transport lead times, shipping costs, and language or quality-supervision barriers increase operational risk.', markPoints: [{ id: 'mp1', markDescription: 'Lower labour/rent costs reducing average unit cost', requiredKeywordGroups: [['wage', 'labour', 'rent', 'cost'], ['lower', 'cheap', 'reduc']] }, { id: 'mp2', markDescription: 'Transport lead times, shipping costs, language/cultural or quality control risks', requiredKeywordGroups: [['transport', 'shipping', 'lead time', 'language', 'culture', 'quality']] }] }, explanation: 'Evaluate lower overseas wages against shipping, communication, and quality-supervision risks.' },
];

export const IGCSE_BUS_FLASHCARDS_UNIT_4: FlashcardItem[] = [
  // 4.1 (5)
  { id: 'igbus-fc-41-1', subtopicId: 'igcse-bus-4-1', front: 'Compare Job, Batch, and Flow production.', backBullets: ['Job: unique custom item (high unit cost, high skill).', 'Batch: groups of identical goods (flexible, changeover downtime).', 'Flow: continuous mass assembly line (lowest unit cost, huge capital outlay).'] },
  { id: 'igbus-fc-41-2', subtopicId: 'igcse-bus-4-1', front: 'Write the Labour Productivity formula and distinguish it from Production.', backBullets: ['Labour productivity = Total output ÷ Number of employees.', 'Production = total volume made; Productivity = efficiency PER worker.'] },
  { id: 'igbus-fc-41-3', subtopicId: 'igcse-bus-4-1', front: 'Define Kaizen in lean production.', backBullets: ['Continuous small improvements suggested by shop-floor employees to reduce waste and boost efficiency.'] },
  { id: 'igbus-fc-41-4', subtopicId: 'igcse-bus-4-1', front: 'State the main benefit and main risk of Just-in-Time (JIT).', backBullets: ['Benefit: eliminates warehouse rent, insurance, and stock spoilage.', 'Risk: zero buffer inventory means any late supplier halts production immediately.'] },
  { id: 'igbus-fc-41-5', subtopicId: 'igcse-bus-4-1', front: 'Give 2 advantages and 2 drawbacks of automation (robotics / CAM).', backBullets: ['Pros: faster output, 24/7 operation, consistent accuracy, lower variable wages.', 'Cons: huge upfront capital cost, worker redundancy, retraining costs.'] },
  // 4.2 (5)
  { id: 'igbus-fc-42-1', subtopicId: 'igcse-bus-4-2', front: 'Write Break-Even Output and Margin of Safety equations.', backBullets: ['Contribution = Price − Variable Cost; Break-Even = Fixed Costs ÷ Contribution.', 'Margin of Safety = Actual/Forecast Sales − Break-Even Output.'], diagram: 'break-even-chart' },
  { id: 'igbus-fc-42-2', subtopicId: 'igcse-bus-4-2', front: 'Distinguish Fixed Costs from Variable Costs with 2 examples each.', backBullets: ['Fixed (constant in short run): rent, insurance, management salaries.', 'Variable (rise with output): raw materials, packaging, piece-rate labour.'] },
  { id: 'igbus-fc-42-3', subtopicId: 'igcse-bus-4-2', front: 'Name the 5 types of Economies of Scale.', backBullets: ['Purchasing (bulk discounts), Marketing, Financial (cheaper loans), Managerial (specialists), Technical (advanced machines).'] },
  { id: 'igbus-fc-42-4', subtopicId: 'igcse-bus-4-2', front: 'Name 3 causes of Diseconomies of Scale.', backBullets: ['Poor communication in tall hierarchies, low employee morale/alienation, and slow decision-making.'] },
  { id: 'igbus-fc-42-5', subtopicId: 'igcse-bus-4-2', front: 'State 2 limitations of Break-Even Charts.', backBullets: ['Assumes all goods made are actually sold (zero unsold inventory).', 'Assumes linear TR/TC lines (ignores bulk discounts and price cuts).'] },
  // 4.3 (5)
  { id: 'igbus-fc-43-1', subtopicId: 'igcse-bus-4-3', front: 'Define Quality in business studies.', backBullets: ['Producing a good or service free of defects that consistently meets customer expectations.'] },
  { id: 'igbus-fc-43-2', subtopicId: 'igcse-bus-4-3', front: 'Contrast Quality Control (QC) with Quality Assurance (QA).', backBullets: ['QC: inspects finished goods at the END (wastes faulty batches).', 'QA: checks standards at EVERY stage to prevent defects early.'] },
  { id: 'igbus-fc-43-3', subtopicId: 'igcse-bus-4-3', front: 'What is Total Quality Management (TQM)?', backBullets: ['Whole-organisation culture where every employee acts as an internal customer aiming for zero defects.'] },
  { id: 'igbus-fc-43-4', subtopicId: 'igcse-bus-4-3', front: 'List 3 business benefits of consistent high quality.', backBullets: ['Higher brand loyalty & repeat sales, ability to charge higher prices, and lower warranty/scrap costs.'] },
  { id: 'igbus-fc-43-5', subtopicId: 'igcse-bus-4-3', front: 'Give 2 drawbacks of implementing TQM.', backBullets: ['High upfront training costs and requires complete cultural commitment from every single employee.'] },
  // 4.4 (5)
  { id: 'igbus-fc-44-1', subtopicId: 'igcse-bus-4-4', front: 'List 4 key location factors for a manufacturing factory.', backBullets: ['Proximity to raw materials or markets, transport/power infrastructure, affordable land/rent, and skilled labour.'] },
  { id: 'igbus-fc-44-2', subtopicId: 'igcse-bus-4-4', front: 'List 3 key location factors for a high-contact service business.', backBullets: ['High customer footfall, access to skilled customer-facing staff, and manageable rent/parking.'] },
  { id: 'igbus-fc-44-3', subtopicId: 'igcse-bus-4-4', front: 'Why can online/e-commerce retailers choose much cheaper locations?', backBullets: ['They do not need expensive high-street footfall — only fast broadband, low warehouse rent, and motorway links.'] },
  { id: 'igbus-fc-44-4', subtopicId: 'igcse-bus-4-4', front: 'Give 3 reasons businesses relocate factories overseas.', backBullets: ['Cheaper wages/land, proximity to fast-growing markets, and avoiding import tariffs inside trade blocs.'] },
  { id: 'igbus-fc-44-5', subtopicId: 'igcse-bus-4-4', front: 'How do governments influence business location decisions?', backBullets: ['Regional grants/tax breaks in high-unemployment zones AND planning/environmental laws restricting factory sites.'] },
];

export const IGCSE_BUS_EXAM_PRACTICE_UNIT_4: ExamQuestionItem[] = [
  {
    id: 'igbus-exam-4-1',
    subtopicId: 'igcse-bus-4-1',
    number: 17,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] AutoParts Co switches its brake-pad assembly line from holding 4 weeks of buffer inventory to Just-in-Time (JIT) deliveries from overseas suppliers.',
    parts: [
      {
        id: 'igbus-exam-4-1a',
        label: '(a)',
        prompt: 'Evaluate whether switching to JIT is the best decision for AutoParts Co.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'JIT eliminates warehouse rent, insurance, and obsolete stock costs while freeing working capital. However, holding zero buffer stock means any overseas shipping delay halts the entire brake-pad production line. Overall, JIT is only advisable if AutoParts switches to ultra-reliable local suppliers rather than long-distance overseas shipments.',
          markPoints: [
            { id: 'mp1', markDescription: 'Benefit: cuts warehouse/storage costs and frees working capital', requiredKeywordGroups: [['warehouse', 'storage', 'rent', 'working capital', 'cost']] },
            { id: 'mp2', markDescription: 'Risk: zero buffer stock means overseas shipping delay halts production', requiredKeywordGroups: [['buffer', 'delay', 'overseas', 'supplier'], ['halt', 'stop', 'production']] },
            { id: 'mp3', markDescription: 'Supported judgement conditional on reliable/local suppliers', requiredKeywordGroups: [['overall', 'only', 'reliable', 'local', 'recommend']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-4-2',
    subtopicId: 'igcse-bus-4-2',
    number: 18,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] WoodCraft Ltd makes dining tables with Fixed Costs of $10,000/month, Variable Cost of $125/table, Selling Price of $250/table, and monthly forecast sales of 100 tables.',
    diagram: 'break-even-chart',
    parts: [
      {
        id: 'igbus-exam-4-2a',
        label: '(a)',
        prompt: 'Calculate WoodCraft’s break-even output and margin of safety, and explain what happens to break-even if fixed rent rises to $12,500.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Contribution = $250 − $125 = $125, so break-even = $10,000 ÷ $125 = 80 tables and margin of safety = 100 − 80 = 20 tables. If fixed rent rises to $12,500, break-even rises to 100 tables ($12,500 ÷ $125), wiping out the margin of safety completely.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates break-even = 80 tables', numericMatch: { value: 80, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'Calculates margin of safety = 20 tables', numericMatch: { value: 20, tolerance: 0.1 } },
            { id: 'mp3', markDescription: 'Identifies higher fixed cost raises break-even to 100 / shrinks margin of safety', requiredKeywordGroups: [['100', 'rises', 'increases'], ['break-even', 'margin of safety']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-4-3',
    subtopicId: 'igcse-bus-4-3',
    number: 19,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] BrightLamp Ltd currently uses end-of-line Quality Control inspectors, but 12% of finished lamps fail final tests and must be scrapped or reworked.',
    parts: [
      {
        id: 'igbus-exam-4-3a',
        label: '(a)',
        prompt: 'Explain why switching from Quality Control to Quality Assurance would benefit BrightLamp Ltd and state ONE drawback.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Quality Assurance checks standards at every stage of lamp assembly so defects are caught immediately rather than scrapping 12% of finished lamps, cutting waste and protecting brand reputation. However, training all factory staff to check quality takes time and money upfront.',
          markPoints: [
            { id: 'mp1', markDescription: 'Checks quality at every stage to catch/prevent defects early', requiredKeywordGroups: [['every stage', 'throughout', 'early', 'prevent']] },
            { id: 'mp2', markDescription: 'Reduces 12% scrap/rework waste and protects brand image', requiredKeywordGroups: [['waste', 'scrap', 'rework', 'reputation', 'brand']] },
            { id: 'mp3', markDescription: 'Drawback: upfront cost and time to train employees', requiredKeywordGroups: [['training', 'cost', 'time', 'expensive']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-4-4',
    subtopicId: 'igcse-bus-4-4',
    number: 20,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] LuxeCare Salon wants to open its second hair-and-spa clinic and is choosing between a cheap suburban office park (low rent, few passers-by) or a busy town-centre street with nearby skilled stylists (high rent).',
    parts: [
      {
        id: 'igbus-exam-4-4a',
        label: '(a)',
        prompt: 'Evaluate BOTH factors (rent vs skilled staff & footfall) and recommend the better location for LuxeCare Salon.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Low suburban rent reduces fixed costs and protects profit margins, yet low footfall risks weak sales. The busy town centre costs more in rent, but gives high walk-in customer footfall and access to skilled stylists whose service quality drives LuxeCare’s luxury brand reputation. Overall, the town-centre site is recommended because customer service and footfall are essential for a luxury salon.',
          markPoints: [
            { id: 'mp1', markDescription: 'Evaluates low rent benefit (lower fixed costs/margin) vs weak footfall', requiredKeywordGroups: [['rent', 'fixed cost', 'margin'], ['footfall', 'sales']] },
            { id: 'mp2', markDescription: 'Evaluates skilled stylists / footfall boosting service quality & brand reputation', requiredKeywordGroups: [['skilled', 'staff', 'stylist', 'footfall'], ['service', 'reputation', 'brand']] },
            { id: 'mp3', markDescription: 'Justified recommendation for town-centre site in luxury service context', requiredKeywordGroups: [['overall', 'recommend', 'town', 'centre', 'center', 'luxury']] },
          ],
        },
      },
    ],
  },
];
