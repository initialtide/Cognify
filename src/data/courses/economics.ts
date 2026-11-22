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

export const ECONOMICS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'The Basic Economic Problem',
    subtopics: [
      { id: 'econ-1-1', code: '1.1', slug: '1.1-scarcity-opportunity-cost-ppc', title: 'Scarcity, Factors of Production, Opportunity Cost & PPC', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Allocation of Resources',
    subtopics: [
      { id: 'econ-2-1', code: '2.1', slug: '2.1-demand-supply-equilibrium-price', title: 'Demand, Supply, Market Equilibrium & Price Mechanism', readingMinutes: 10, hasDeepContent: true },
      { id: 'econ-2-2', code: '2.2', slug: '2.2-ped-pes-market-failure-intervention', title: 'Price Elasticity (PED & PES), Market Failure & Government Intervention', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Microeconomic Decision Makers',
    subtopics: [
      { id: 'econ-3-1', code: '3.1', slug: '3.1-money-banks-households-workers', title: 'Money, Central & Commercial Banks, Households & Labour Markets', readingMinutes: 10, hasDeepContent: true },
      { id: 'econ-3-2', code: '3.2', slug: '3.2-firms-costs-economies-scale-market-structures', title: 'Firms, Costs, Revenue, Economies of Scale & Competition vs Monopoly', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Government & The Macroeconomy',
    subtopics: [
      { id: 'econ-4-1', code: '4.1', slug: '4.1-macro-aims-fiscal-monetary-supply-side', title: 'Macroeconomic Aims, Fiscal, Monetary & Supply-Side Policies', readingMinutes: 11, hasDeepContent: true },
      { id: 'econ-4-2', code: '4.2', slug: '4.2-economic-growth-unemployment-inflation', title: 'Economic Growth (GDP), Employment/Unemployment & Inflation', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'International Trade & Globalisation',
    subtopics: [
      { id: 'econ-5-1', code: '5.1', slug: '5.1-specialisation-protectionism-exchange-rates-bop', title: 'Specialisation, Free Trade vs Protectionism, Exchange Rates & Current Account', readingMinutes: 11, hasDeepContent: true },
    ],
  },
];

export const ECONOMICS_NOTES: Record<string, NoteLesson> = {
  'econ-1-1': {
    subtopicId: 'econ-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Scarcity, Factors of Production, Opportunity Cost & PPC',
    readingMinutes: 9,
    videoTitle: 'Comparative Advantage - Consuming Beyond The PPF',
    youtubeId: 'xX_XT6FmL68',
    videoChannel: 'EconplusDal',
    videoDuration: '7:12',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'The Basic Economic Problem & Factors of Production', cardId: 'econ-1-1-c1' },
      { time: '2:25', seconds: 145, label: 'Opportunity Cost & Economic vs Free Goods', cardId: 'econ-1-1-c2' },
      { time: '4:45', seconds: 285, label: 'Production Possibility Curves (PPC) & Shifts', cardId: 'econ-1-1-c3' },
    ],
    cards: [
      {
        id: 'econ-1-1-c1',
        title: 'Scarcity & The Four Factors of Production',
        summary: 'Unlimited human wants chasing finite resources force every society to decide what, how, and for whom to produce.',
        bullets: [
          '**Basic economic problem** - **scarcity** exists because wants are infinite while resources (**factors of production**) are finite.',
          '**Four factors & rewards** - **Land** (natural resources → **rent**), **Labour** (human effort → **wages**), **Capital** (man-made goods used to produce other goods → **interest**), **Enterprise** (risk-taking organisation → **profit**).',
        ],
        subsections: [
          {
            heading: 'Occupational vs Geographical Mobility',
            bullets: [
              '**Occupational mobility** - ease of moving between different jobs (improved by education/retraining); **geographical mobility** - ease of moving between regions (limited by housing costs and family ties).',
            ],
            exampleHeading: 'Concrete check: Economic goods vs Free goods',
            examples: [
              'Economic goods (bread, hospitals, cars) are scarce and carry an opportunity cost; free goods (sunlight, ambient air) are abundant with zero opportunity cost.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'scarcity', definition: 'Situation where finite resources are insufficient to satisfy unlimited human wants.' },
        ],
      },
      {
        id: 'econ-1-1-c2',
        title: 'Opportunity Cost in Everyday Decisions',
        summary: 'Opportunity cost is strictly the NEXT BEST alternative foregone whenever a choice is made.',
        bullets: [
          '**Opportunity cost** - the **next best alternative foregone** when choosing one use of scarce time, money, or land over another.',
        ],
        subsections: [
          {
            heading: 'Examples Across Consumers, Firms & Governments',
            bullets: [
              '**Government choice** - spending $500m on a new motorway instead of building two hospitals → opportunity cost is the two hospitals foregone.',
            ],
            exampleHeading: 'Worked example: PPC opportunity cost',
            examples: [
              'Moving along a PPC from (100 cars, 200 tractors) to (130 cars, 140 tractors) gains 30 cars at an opportunity cost of **60 tractors** (2 tractors per car).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'opportunity cost', definition: 'The next best alternative foregone when making an economic choice.' },
        ],
      },
      {
        id: 'econ-1-1-c3',
        title: 'Production Possibility Curves (PPC)',
        summary: 'Points on the PPC show full productive efficiency; points inside show unemployment; outward shifts show long-run economic growth.',
        bullets: [
          '**Reading a PPC** - **On the curve** = full employment of resources; **Inside the curve** = unemployed/inefficiently used resources; **Outside the curve** = currently **unattainable**.',
          '**Outward shift of PPC** - caused by more or better **quantity/quality of resources** (education/training, new technology, investment in capital goods, resource discovery).',
        ],
        subsections: [
          {
            heading: 'Movement Along vs Shift of PPC',
            bullets: [
              '**Movement along curve** - reallocating existing resources between two goods (incurs opportunity cost). **Outward shift** - expanding the economy’s productive capacity.',
            ],
            exampleHeading: 'Concrete check: Capital goods vs Consumer goods',
            examples: [
              'Investing more in capital goods (machinery/factories) today sacrifices some consumer goods now, but shifts the PPC further outward in future years.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'production possibility curve', definition: 'Diagram showing the maximum combinations of two goods an economy can produce with its existing resources and technology.' },
        ],
        diagram: 'production-possibility-curve',
        memoryAid: 'Factor rewards: Land → Rent, Labour → Wages, Capital → Interest, Enterprise → Profit!',
        commonMistake: 'NEVER say "free healthcare" is a free good in economics — it uses scarce doctors, buildings, and taxes, so it is an ECONOMIC good with an opportunity cost!',
      },
    ],
    keyTerms: [
      { term: 'Scarcity', definition: 'Finite resources relative to unlimited human wants.' },
      { term: 'Opportunity cost', definition: 'Next best alternative foregone when making a choice.' },
      { term: 'Production possibility curve', definition: 'Maximum output combinations of two goods using available resources.' },
      { term: 'Enterprise', definition: 'Willingness to bear risk and combine land, labour, and capital to produce goods.' },
    ],
    checklistPoints: [
      'Match all 4 factors of production to their exact rewards and distinguish economic vs free goods',
      'Calculate and apply opportunity cost for consumers, firms, and governments',
      'Interpret points inside/on/outside a PPC and explain causes of outward vs inward PPC shifts',
    ],
  },

  'econ-2-1': {
    subtopicId: 'econ-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Demand, Supply, Market Equilibrium & Price Mechanism',
    readingMinutes: 10,
    videoTitle: '5 BEAUTIFUL Micro Diagrams to STUN Paper 1 Examiners!!! 🔥',
    youtubeId: 'LuVmxYVN-p8',
    videoChannel: 'EconplusDal',
    videoDuration: '10:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Law of Demand, Extensions vs Shifts', cardId: 'econ-2-1-c1' },
      { time: '3:25', seconds: 205, label: 'Law of Supply & Supply Curve Shifts', cardId: 'econ-2-1-c2' },
      { time: '6:50', seconds: 410, label: 'Market Equilibrium, Excess Demand & Excess Supply', cardId: 'econ-2-1-c3' },
    ],
    cards: [
      {
        id: 'econ-2-1-c1',
        title: 'Demand: Movements Along vs Shifts of the Curve',
        summary: 'A change in the good’s OWN price causes a movement along D; non-price factors shift the entire demand curve.',
        bullets: [
          '**Law of demand** - inverse relationship between price and quantity demanded (**extension** when price falls, **contraction** when price rises).',
          '**Demand shifters (PASIFIC)** - **Population**, **Advertising**, **Substitutes** price, **Income**, **Fashion/tastes**, **Interest rates**, **Complements** price.',
        ],
        subsections: [
          {
            heading: 'Substitutes vs Complements',
            bullets: [
              '**Substitutes (tea & coffee)** - a rise in coffee price shifts demand for tea **right**.',
              '**Complements (printers & ink)** - a rise in printer price shifts demand for ink **left**.',
            ],
            exampleHeading: 'Worked diagram shift: Rise in consumer income for normal goods',
            examples: [
              'Higher disposable income shifts Demand right (D₁ → D₂), driving equilibrium price UP and equilibrium quantity UP.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'effective demand', definition: 'Willingness AND financial ability of consumers to purchase a product at a given price.' },
        ],
        diagram: 'supply-demand-equilibrium',
      },
      {
        id: 'econ-2-1-c2',
        title: 'Supply & Non-Price Shifters',
        summary: 'Higher prices incentivise firms to extend supply; lower production costs or subsidies shift supply right.',
        bullets: [
          '**Law of supply** - direct relationship between price and quantity supplied (higher price → greater profit motive → **extension** of supply).',
          '**Supply shifters (PINTSWC)** - **Productivity**, **Indirect taxes** (shift left), **Number of firms**, **Technology** (shift right), **Subsidies** (shift right), **Weather/shocks**, **Costs of production** (wages, energy, raw materials).',
        ],
        subsections: [
          {
            heading: 'Effect of an Indirect Tax vs Subsidy',
            bullets: [
              '**Indirect tax (e.g. VAT/excise duty)** - raises firm costs → supply shifts **LEFT** → higher price, lower quantity.',
              '**Subsidy (government grant)** - lowers firm costs → supply shifts **RIGHT** → lower price, higher quantity.',
            ],
            exampleHeading: 'Worked example: Surge in global oil prices for airlines',
            examples: [
              'Higher jet fuel costs shift airline supply left (S₁ → S₂), causing ticket prices to rise and passenger quantity to contract along D.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'subsidy', definition: 'A financial grant paid by the government to producers to lower production costs, shift supply right, and encourage output.' },
        ],
      },
      {
        id: 'econ-2-1-c3',
        title: 'Market Equilibrium, Disequilibrium & The Price Mechanism',
        summary: 'Market equilibrium occurs where D = S with zero shortage or surplus; prices automatically clear disequilibrium.',
        bullets: [
          '**Excess demand (shortage)** - price set **below** equilibrium → quantity demanded > quantity supplied → competition among buyers bids price **up** until market clears.',
          '**Excess supply (surplus)** - price set **above** equilibrium → quantity supplied > quantity demanded → unsold stock forces firms to cut price **down**.',
        ],
        subsections: [
          {
            heading: 'Three Functions of the Price Mechanism',
            bullets: [
              '**Signalling, Incentivising & Rationing** - rising prices signal scarcity, incentivise firms to expand supply, and ration limited output to buyers willing to pay most.',
            ],
            exampleHeading: 'Concrete check: Minimum vs Maximum price',
            examples: [
              'A maximum price (rent cap) below equilibrium causes a **shortage**; a minimum price (agricultural floor) above equilibrium causes a **surplus**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'market equilibrium', definition: 'The price at which quantity demanded exactly equals quantity supplied, leaving no shortage or surplus.' },
        ],
        memoryAid: 'OWN price = Movement ALONG (Extension/Contraction); ANYTHING ELSE = SHIFT of the curve!',
        commonMistake: 'NEVER say "a rise in price shifts demand left" — a rise in the good’s own price causes a CONTRACTION along the existing demand curve!',
      },
    ],
    keyTerms: [
      { term: 'Effective demand', definition: 'Willingness and ability to buy a product at a given price.' },
      { term: 'Market equilibrium', definition: 'Price where quantity demanded equals quantity supplied.' },
      { term: 'Subsidy', definition: 'Government payment to producers lowering costs and shifting supply right.' },
      { term: 'Excess demand', definition: 'Shortage occurring when market price is set below equilibrium.' },
    ],
    checklistPoints: [
      'Distinguish movements along D/S curves from shifts caused by non-price determinants',
      'Draw labelled S&D shift diagrams showing new equilibrium price and quantity',
      'Explain how prices eliminate shortages and surpluses and evaluate max/min price controls',
    ],
  },

  'econ-2-2': {
    subtopicId: 'econ-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Price Elasticity (PED & PES), Market Failure & Government Intervention',
    readingMinutes: 11,
    videoTitle: 'Micro - ALL Formula, Equations & Conditions Needed for Micro Exams!',
    youtubeId: 'tSalk7P_RDo',
    videoChannel: 'EconplusDal',
    videoDuration: '12:04',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'PED Formula, Determinants & Total Revenue', cardId: 'econ-2-2-c1' },
      { time: '4:00', seconds: 240, label: 'PES Formula & Time/Capacity Factors', cardId: 'econ-2-2-c2' },
      { time: '8:00', seconds: 480, label: 'Market Failure: Externalities, Merit/Demerit & Public Goods', cardId: 'econ-2-2-c3' },
    ],
    cards: [
      {
        id: 'econ-2-2-c1',
        title: 'Price Elasticity of Demand (PED) & Total Revenue',
        summary: 'Raise price to boost revenue when demand is inelastic (|PED| < 1); cut price to boost revenue when demand is elastic (|PED| > 1).',
        bullets: [
          '**PED formula** - **PED = % change in Quantity Demanded ÷ % change in Price** (always negative due to inverse law of demand; ignore minus sign when classifying magnitude).',
          '**Determinants** - **Number of close substitutes** (more substitutes = more elastic), **necessity vs luxury**, **addictiveness** (cigarettes = very inelastic), **proportion of income**, and **time period**.',
        ],
        subsections: [
          {
            heading: 'Pricing Strategy Using PED',
            bullets: [
              '**Price elastic (|PED| > 1)** - LOWERING price causes a proportionally LARGER rise in quantity → **Total Revenue (P × Q) rises**.',
              '**Price inelastic (|PED| < 1)** - RAISING price causes a proportionally SMALLER drop in quantity → **Total Revenue rises**.',
            ],
            exampleHeading: 'Worked PED calculation',
            examples: [
              'Price rises by +10% and quantity demanded falls by −4% → PED = −4% ÷ +10% = **−0.4** (price inelastic, so total revenue increases!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of demand', definition: 'Responsiveness of quantity demanded to a change in price (%ΔQ_d ÷ %ΔP).' },
        ],
      },
      {
        id: 'econ-2-2-c2',
        title: 'Price Elasticity of Supply (PES)',
        summary: 'PES measures how rapidly producers can scale output when price rises, determined by spare capacity, stocks, and production time.',
        bullets: [
          '**PES formula** - **PES = % change in Quantity Supplied ÷ % change in Price** (always positive).',
          '**Key determinants** - **Spare capacity**, **level of stored stocks**, **production time lag** (agricultural crops = inelastic in short run), and **factor mobility**.',
        ],
        subsections: [
          {
            heading: 'Short Run vs Long Run PES',
            bullets: [
              '**Long run is more elastic** - over time firms can build new factories, train workers, and plant extra crops.',
            ],
            exampleHeading: 'Worked PES calculation',
            examples: [
              'Price rises +20% and supply rises +30% → PES = +30% ÷ +20% = **+1.5** (price elastic supply).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'price elasticity of supply', definition: 'Responsiveness of quantity supplied to a change in price (%ΔQ_s ÷ %ΔP).' },
        ],
      },
      {
        id: 'econ-2-2-c3',
        title: 'Market Failure, Externalities & Government Remedies',
        summary: 'Markets fail when social costs/benefits diverge from private ones, or when non-excludable public goods are not provided at all.',
        bullets: [
          '**External costs (negative externalities)** - spillover harm to third parties (factory pollution, passive smoking) → **demerit goods** are **over-consumed**; remedy: **indirect taxes**, regulations, or bans.',
          '**External benefits (positive externalities)** - spillover gain to third parties (vaccinations, education) → **merit goods** are **under-consumed**; remedy: **subsidies** or free state provision.',
          '**Public goods (streetlights, defence)** - **non-excludable** and **non-rival** → **free-rider problem** means private firms make zero profit so the state must fund them from taxation.',
        ],
        subsections: [
          {
            heading: 'Social Cost Equation',
            bullets: [
              '**Social Cost = Private Cost + External Cost**; **Social Benefit = Private Benefit + External Benefit**.',
            ],
            exampleHeading: 'Concrete check: Why cigarette taxes raise huge revenue',
            examples: [
              'Because cigarettes are addictive (very inelastic PED), heavy excise taxes generate large tax revenue even though consumption drops only modestly unless paired with education/bans.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'market failure', definition: 'Inefficient allocation of resources by the free market, such as over-consumption of demerit goods or non-provision of public goods.' },
          { term: 'merit good', definition: 'A product generating positive externalities (e.g. healthcare, education) that is under-consumed in a free market.' },
        ],
        memoryAid: 'PED < 1 looks like "I" for Inelastic (steep curve → Raise Price for Revenue)! Public goods = Non-Excludable + Non-Rival!',
        commonMistake: 'NEVER put %ΔP on top of the elasticity fraction — Quantity is ALWAYS the numerator (%ΔQ ÷ %ΔP)!',
      },
    ],
    keyTerms: [
      { term: 'Price elasticity of demand (PED)', definition: '% change in quantity demanded divided by % change in price.' },
      { term: 'Price elasticity of supply (PES)', definition: '% change in quantity supplied divided by % change in price.' },
      { term: 'External cost', definition: 'Negative spillover cost imposed on third parties outside a market transaction.' },
      { term: 'Public good', definition: 'Non-excludable, non-rival good (e.g. street lighting) suffering from the free-rider problem.' },
    ],
    checklistPoints: [
      'Calculate PED and PES accurately and link PED to Total Revenue pricing decisions',
      'Explain negative/positive externalities, demerit/merit goods, and public goods (free-rider problem)',
      'Evaluate indirect taxes, subsidies, regulation, and state provision as remedies for market failure',
    ],
  },

  'econ-3-1': {
    subtopicId: 'econ-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Money, Central & Commercial Banks, Households & Labour Markets',
    readingMinutes: 10,
    videoTitle: 'Role of the Central Bank',
    youtubeId: 'K6VxrO_c69Q',
    videoChannel: 'EconplusDal',
    videoDuration: '8:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Functions of Money, Commercial & Central Banks', cardId: 'econ-3-1-c1' },
      { time: '3:00', seconds: 180, label: 'Household Spending, Saving & Borrowing', cardId: 'econ-3-1-c2' },
      { time: '6:00', seconds: 360, label: 'Wage Differentials, Trade Unions & Specialisation', cardId: 'econ-3-1-c3' },
    ],
    cards: [
      {
        id: 'econ-3-1-c1',
        title: 'Functions of Money & Commercial vs Central Banks',
        summary: 'Money solves barter’s double coincidence of wants; commercial banks serve households/firms while the central bank sets interest rates and acts as lender of last resort.',
        bullets: [
          '**Four functions of money** - **Medium of exchange**, **unit of account (measure of value)**, **store of value**, and **standard for deferred payments**.',
          '**Commercial banks** - accept deposits, make loans/mortgages, process payments (aim: **profit** for shareholders).',
          '**Central bank (e.g. Bank of England)** - issues notes/coins, operates **monetary policy (base interest rates)**, regulates commercial banks, manages foreign reserves, and acts as **lender of last resort** and government’s banker.',
        ],
        subsections: [
          {
            heading: 'Characteristics of Good Money',
            bullets: [
              '**Key traits** - generally acceptable, portable, durable, divisible, scarce (limited supply), and uniform.',
            ],
            exampleHeading: 'Concrete check: Why high inflation harms money',
            examples: [
              'Rapidly rising prices erode purchasing power, destroying money’s function as a **store of value**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'central bank', definition: 'National monetary authority responsible for issuing currency, setting base interest rates, regulating banks, and acting as lender of last resort.' },
        ],
      },
      {
        id: 'econ-3-1-c2',
        title: 'Household Spending, Saving & Borrowing',
        summary: 'Higher disposable income and lower interest rates encourage spending and borrowing; higher interest rates and uncertainty raise saving.',
        bullets: [
          '**Interest rate impact** - **higher interest rates** increase the reward for **saving** and raise the cost of **borrowing**, reducing consumer spending (and vice versa).',
          '**Income & APC** - poorer households spend a higher **proportion** of their income (mostly on necessities), whereas richer households spend more in total cash terms AND save a higher proportion.',
        ],
        subsections: [
          {
            heading: 'Other Determinants',
            bullets: [
              '**Confidence & age** - optimistic workers spend/borrow more; middle-aged earners save more for retirement than young or retired households.',
            ],
            exampleHeading: 'Concrete check: Saving vs Spending ratio',
            examples: [
              'Household A earns $1,000 and spends $950 (95%); Household B earns $10,000 and spends $6,000 (60%) — B spends more dollars, A spends a higher proportion.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'disposable income', definition: 'Household income remaining after direct income taxes are deducted and state benefits added.' },
        ],
      },
      {
        id: 'econ-3-1-c3',
        title: 'Wage Determination, Differentials & Trade Unions',
        summary: 'Wages reflect labour supply and demand (skills, qualifications, productivity, bargaining power) plus non-wage factors like job security.',
        bullets: [
          '**Why surgeons earn more than cleaners** - **derived demand** is high and inelastic, while **supply of skilled labour is low** due to long expensive training and scarce qualifications.',
          '**Trade unions** - represent workers through **collective bargaining** to negotiate higher pay, safer conditions, and fair hours; strength rises when union membership is high, firm profits are strong, and labour is hard to replace.',
        ],
        subsections: [
          {
            heading: 'Division of Labour for Workers',
            bullets: [
              '**Pros vs Cons** - workers become faster/more skilled at one task (higher pay), but face boredom/alienation and risk of structural unemployment if their single skill is automated.',
            ],
            exampleHeading: 'Concrete check: Non-wage factors',
            examples: [
              'Workers may accept lower pay for shorter commutes, flexible hours, holidays, pensions, or job satisfaction.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'trade union', definition: 'An organisation of workers that negotiates collectively with employers for better wages, working conditions, and job security.' },
        ],
        memoryAid: 'Central Bank = Banker to Government & Commercial Banks + Sets Interest Rates + Lender of Last Resort!',
        commonMistake: 'NEVER write that commercial banks set the country’s base interest rate — ONLY the CENTRAL BANK sets the base interest rate!',
      },
    ],
    keyTerms: [
      { term: 'Central bank', definition: 'State bank issuing currency, controlling monetary policy, and acting as lender of last resort.' },
      { term: 'Disposable income', definition: 'Income left to spend or save after direct taxes.' },
      { term: 'Trade union', definition: 'Workers’ association using collective bargaining for pay and conditions.' },
      { term: 'Derived demand', definition: 'Demand for a factor (like labour) arising from demand for the final product it makes.' },
    ],
    checklistPoints: [
      'State the 4 functions of money and distinguish commercial bank vs central bank roles',
      'Explain how income, interest rates, and confidence affect household spending, saving, and borrowing',
      'Explain occupational wage differentials using labour S&D and evaluate trade union power',
    ],
  },

  'econ-3-2': {
    subtopicId: 'econ-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Firms, Costs, Revenue, Economies of Scale & Competition vs Monopoly',
    readingMinutes: 10,
    videoTitle: '6 Paper 1 Mistakes That Will Cost You an A* 😱',
    youtubeId: 'Vfr3ztbMjcw',
    videoChannel: 'EconplusDal',
    videoDuration: '11:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Fixed/Variable Costs, Average Cost & Profit', cardId: 'econ-3-2-c1' },
      { time: '3:50', seconds: 230, label: 'Firm Growth, Mergers & Economies/Diseconomies of Scale', cardId: 'econ-3-2-c2' },
      { time: '7:40', seconds: 460, label: 'Competitive Markets vs Monopoly', cardId: 'econ-3-2-c3' },
    ],
    cards: [
      {
        id: 'econ-3-2-c1',
        title: 'Costs, Revenue & Profit Formulae',
        summary: 'Know TC = FC + VC, AC = TC ÷ Q, TR = P × Q, and Profit = TR − TC.',
        bullets: [
          '**Costs** - **Fixed costs (FC)** do not vary with output (rent, insurance); **Variable costs (VC)** rise directly with output (raw materials, piece-rate labour); **Total Cost = FC + VC**; **Average Cost (AC) = TC ÷ Q**.',
          '**Revenue & Profit** - **Total Revenue (TR) = Price × Quantity**; **Average Revenue (AR) = TR ÷ Q = Price**; **Profit = TR − TC**.',
        ],
        subsections: [
          {
            heading: 'Worked Cost & Profit Table',
            bullets: [
              '**Average fixed cost (AFC)** - falls continuously as output rises because fixed costs are spread over more units.',
            ],
            exampleHeading: 'Worked example: 200 units sold at $15 each; FC = $800, VC = $7/unit',
            examples: [
              'TC = 800 + (200 × 7) = $2,200 (AC = $11/unit); TR = 200 × 15 = $3,000 → **Profit = $800**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'average cost', definition: 'Total cost of production divided by total quantity of output produced (AC = TC ÷ Q).' },
        ],
      },
      {
        id: 'econ-3-2-c2',
        title: 'Mergers, Internal/External Economies & Diseconomies of Scale',
        summary: 'Growing output lowers long-run average cost via economies of scale, until excessive size causes communication/control diseconomies.',
        bullets: [
          '**Types of integration (mergers)** - **Horizontal** (same industry, same stage: two banks), **Vertical forward/backward** (same industry, different stage: coffee roaster buying farms/cafés), **Conglomerate** (unrelated industries — spreads risk).',
          '**Internal economies of scale** - **purchasing** (bulk discounts), **technical** (specialist machinery), **financial** (cheaper bank loans), **managerial** (specialist managers), **marketing** (ad cost spread over huge output).',
          '**Diseconomies of scale** - growing too large causes **poor communication**, **loss of managerial control**, and **worker alienation**, pushing **average cost UP**.',
        ],
        subsections: [
          {
            heading: 'Why Small Firms Survive',
            bullets: [
              '**Small-firm advantages** - niche markets, personal customer service, owner’s preference for independence, or lack of capital to expand.',
            ],
            exampleHeading: 'Concrete check: Internal vs External economies',
            examples: [
              'Internal = firm itself grows; External = entire industry concentrates in one area (e.g. Silicon Valley shared talent pool & specialist suppliers).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'economies of scale', definition: 'Reductions in long-run average cost per unit as a firm increases its scale of production.' },
        ],
      },
      {
        id: 'econ-3-2-c3',
        title: 'Competitive Markets vs Monopoly',
        summary: 'Competition drives low prices, choice, and efficiency; monopolies hold high market power and barriers to entry, risking high prices yet funding R&D.',
        bullets: [
          '**Competitive market** - many buyers/sellers, low barriers to entry, firms are **price takers** → low prices, high choice, incentive for efficiency and quality.',
          '**Monopoly** - single dominant firm with high **barriers to entry** (patents, huge start-up costs, brand loyalty) acting as a **price maker** → risk of **higher prices, restricted output, and lower choice**, BUT may exploit huge **economies of scale** and reinvest supernormal profits into **R&D innovation**.',
        ],
        subsections: [
          {
            heading: 'Natural Monopolies',
            bullets: [
              '**Water pipes & rail tracks** - duplicating infrastructure is wasteful; one regulated provider achieves lowest average cost.',
            ],
            exampleHeading: 'Balanced evaluation of monopoly',
            examples: [
              'Always give BOTH sides in 6/8-mark IGCSE essays: high prices/lack of choice vs economies of scale/R&D funding!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'monopoly', definition: 'A market structure dominated by a single firm protected by high barriers to entry, giving it strong price-setting power.' },
        ],
        memoryAid: 'Economies of Scale = AVERAGE Cost Falls (NOT Total Cost — Total Cost always rises when you make more units)!',
        commonMistake: 'NEVER write "economies of scale reduce total cost" — producing more units increases TOTAL cost; economies of scale reduce **AVERAGE cost per unit**!',
      },
    ],
    keyTerms: [
      { term: 'Average cost', definition: 'Total cost divided by output (TC ÷ Q).' },
      { term: 'Economies of scale', definition: 'Falling average cost per unit as scale of output expands.' },
      { term: 'Diseconomies of scale', definition: 'Rising average cost per unit when a firm becomes too large to coordinate efficiently.' },
      { term: 'Monopoly', definition: 'Single dominant seller protected by high barriers to entry.' },
    ],
    checklistPoints: [
      'Calculate FC, VC, TC, AC, TR, AR, and Profit accurately from firm data tables',
      'Distinguish horizontal, vertical, and conglomerate mergers plus internal/external economies & diseconomies of scale',
      'Evaluate competitive markets against monopolies with balanced consumer and efficiency arguments',
    ],
  },

  'econ-4-1': {
    subtopicId: 'econ-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Macroeconomic Aims, Fiscal, Monetary & Supply-Side Policies',
    readingMinutes: 11,
    videoTitle: 'Monetary Policy UK Themes - HOT TOPIC for Paper 2! Must Watch 🔥',
    youtubeId: 'Dwk4-YXk4y4',
    videoChannel: 'EconplusDal',
    videoDuration: '12:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Five Macro Aims & Policy Conflicts', cardId: 'econ-4-1-c1' },
      { time: '4:10', seconds: 250, label: 'Fiscal Policy (Taxation & Government Spending)', cardId: 'econ-4-1-c2' },
      { time: '8:20', seconds: 500, label: 'Monetary Policy & Supply-Side Policies', cardId: 'econ-4-1-c3' },
    ],
    cards: [
      {
        id: 'econ-4-1-c1',
        title: 'Five Government Macroeconomic Aims & Conflicts',
        summary: 'Governments aim for growth, low unemployment, low stable inflation, BoP stability, and fair income distribution — often facing trade-offs.',
        bullets: [
          '**Five aims** - (1) Sustainable **economic growth**; (2) **Full employment / low unemployment**; (3) **Price stability (low inflation ~2%)**; (4) **Balance of payments stability**; (5) **Redistribution of income** (reducing poverty).',
          '**Key conflict** - boosting aggregate demand to cut unemployment and raise growth can trigger **demand-pull inflation** and suck in **imports** (worsening the current account deficit).',
        ],
        subsections: [
          {
            heading: 'Progressive vs Regressive Taxes',
            bullets: [
              '**Progressive tax (income tax)** - higher earners pay a higher **percentage** of income (reduces inequality).',
              '**Regressive tax (VAT/sales tax)** - takes a higher **percentage** of a poor person’s income than a rich person’s.',
            ],
            exampleHeading: 'Concrete check: Budget deficit vs surplus',
            examples: [
              'Budget deficit = government spending > tax revenue (requires borrowing); Budget surplus = tax revenue > government spending.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fiscal policy', definition: 'Use of government spending and taxation to influence aggregate demand, employment, growth, and income distribution.' },
        ],
      },
      {
        id: 'econ-4-1-c2',
        title: 'Fiscal Policy & Monetary Policy',
        summary: 'Expansionary fiscal/monetary policy boosts total demand to fight recession; contractionary policy cools demand to tame inflation.',
        bullets: [
          '**Expansionary fiscal policy** - **cut taxes** and/or **increase government spending** → higher disposable income & total demand → raises GDP and cuts cyclical unemployment (risk: budget deficit & inflation).',
          '**Monetary policy (Central Bank)** - adjusting **interest rates**, **money supply**, and exchange rates: **raising interest rates** increases saving & mortgage/loan costs → lowers consumer/investment spending → slows **inflation** (risk: slower growth & higher unemployment).',
        ],
        subsections: [
          {
            heading: 'Direct vs Indirect Taxes',
            bullets: [
              '**Direct taxes** - levied on income/wealth (income tax, corporation tax); **Indirect taxes** - levied on spending (VAT, excise duty on fuel/tobacco).',
            ],
            exampleHeading: 'Worked chain of reasoning: Interest rate cut',
            examples: [
              'Lower interest rates → cheaper borrowing + less incentive to save → higher consumer spending & firm investment → higher total demand → higher GDP & employment.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'monetary policy', definition: 'Central bank control of interest rates and money supply to influence aggregate demand and keep inflation stable.' },
        ],
      },
      {
        id: 'econ-4-1-c3',
        title: 'Supply-Side Policies (Long-Run Productive Capacity)',
        summary: 'Supply-side policies expand long-run productive capacity (shifting PPC outward), achieving non-inflationary growth.',
        bullets: [
          '**Examples** - **education & training** (higher labour productivity), **infrastructure investment** (transport/broadband), **cutting corporation/income tax rates** (work & investment incentives), **deregulation & privatisation** (more competition), **subsidising R&D**.',
          '**Huge advantage** - raises real GDP AND lowers cost-push inflation simultaneously without causing a demand-pull conflict! **Drawbacks**: expensive, long **time lags** (years for education to pay off), and tax cuts/privatisation can widen inequality.',
        ],
        subsections: [
          {
            heading: 'Matching Policy to Problem',
            bullets: [
              '**Cyclical unemployment** → Expansionary fiscal/monetary policy. **Structural unemployment** → Supply-side retraining & mobility.',
            ],
            exampleHeading: 'Concrete check: Why supply-side shifts PPC outward',
            examples: [
              'Better educated workers and faster broadband raise the maximum output an economy can produce with its resources.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'supply-side policy', definition: 'Government measures aimed at increasing the economy’s long-run productive capacity and efficiency (shifting the PPC outward).' },
        ],
        memoryAid: 'Fiscal = Taxes & Gov Spending; Monetary = Interest Rates & Money Supply; Supply-Side = Productivity & Capacity (PPC outward)!',
        commonMistake: 'Remember education and healthcare spending are BOTH fiscal policy (short-run demand boost) AND supply-side policy (long-run productivity boost)!',
      },
    ],
    keyTerms: [
      { term: 'Fiscal policy', definition: 'Adjusting government spending and taxation to manage the economy.' },
      { term: 'Monetary policy', definition: 'Adjusting interest rates and money supply via the central bank.' },
      { term: 'Supply-side policy', definition: 'Policies raising long-run productivity and capacity (education, deregulation, R&D).' },
      { term: 'Progressive tax', definition: 'Tax whose percentage rate increases as income increases.' },
    ],
    checklistPoints: [
      'State the 5 macro aims and explain conflicts (e.g. low unemployment vs low inflation)',
      'Trace chains of reasoning for expansionary/contractionary fiscal and monetary policies',
      'Evaluate supply-side policies including their time lags and ability to achieve non-inflationary growth',
    ],
  },

  'econ-4-2': {
    subtopicId: 'econ-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Economic Growth (GDP), Employment/Unemployment & Inflation',
    readingMinutes: 10,
    videoTitle: 'Costs and Benefits of Inflation',
    youtubeId: 'iI5JcLn3hVo',
    videoChannel: 'EconplusDal',
    videoDuration: '10:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Real GDP, Recession & Living Standards (HDI)', cardId: 'econ-4-2-c1' },
      { time: '3:35', seconds: 215, label: 'Types, Causes & Consequences of Unemployment', cardId: 'econ-4-2-c2' },
      { time: '7:10', seconds: 430, label: 'Inflation (CPI), Demand-Pull vs Cost-Push & Deflation', cardId: 'econ-4-2-c3' },
    ],
    cards: [
      {
        id: 'econ-4-2-c1',
        title: 'Economic Growth, Real GDP per Head & HDI',
        summary: 'Real GDP removes inflation distortion; GDP per head misses income inequality, pollution, and leisure — so HDI adds health and education.',
        bullets: [
          '**Real GDP** - total value of goods & services produced in an economy in a year **adjusted for inflation**; a **recession** is **two consecutive quarters** of falling real GDP.',
          '**Human Development Index (HDI)** - combines **GNI/GDP per head**, **life expectancy at birth**, and **mean/expected years of schooling** (0 to 1 scale).',
        ],
        subsections: [
          {
            heading: 'Benefits vs Costs of Economic Growth',
            bullets: [
              '**Benefits** - higher incomes, lower absolute poverty, higher tax revenue for schools/hospitals, more jobs.',
              '**Costs** - resource depletion, pollution/CO₂, stress/longer hours, and potential widening inequality.',
            ],
            exampleHeading: 'Concrete check: Real GDP vs Nominal GDP',
            examples: [
              'If nominal GDP grows 5% while inflation is 6%, **real GDP actually fell by ~1%**!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'recession', definition: 'A period of negative economic growth defined as two consecutive quarters (6 months) of falling real GDP.' },
        ],
      },
      {
        id: 'econ-4-2-c2',
        title: 'Measurement, Types & Consequences of Unemployment',
        summary: 'Distinguish cyclical (recession), structural (declining industries/skills mismatch), and frictional (between jobs) unemployment.',
        bullets: [
          '**Unemployment rate** - (Unemployed ÷ Labour force) × 100%, measured by the **Claimant Count** or **ILO Labour Force Survey**.',
          '**Three main types** - **Cyclical** (lack of total demand during recession), **Structural** (long-term industry decline/automation/skills mismatch), **Frictional** (short-term search between jobs), plus **Seasonal**.',
        ],
        subsections: [
          {
            heading: 'Costs of Unemployment',
            bullets: [
              '**Personal & Macro costs** - lost household income/skills, lost national output (point inside PPC), lower tax revenues, and higher government welfare spending.',
            ],
            exampleHeading: 'Worked unemployment rate',
            examples: [
              '1.5 million unemployed out of a 30 million labour force → (1.5 / 30) × 100% = **5.0%**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'structural unemployment', definition: 'Long-term unemployment caused by permanent decline of industries, automation, or a mismatch between workers’ skills and available jobs.' },
        ],
      },
      {
        id: 'econ-4-2-c3',
        title: 'Inflation (CPI), Demand-Pull vs Cost-Push & Deflation',
        summary: 'Inflation is a sustained rise in the general price level measured by a weighted CPI basket; deflation can freeze spending in a recessionary spiral.',
        bullets: [
          '**Consumer Prices Index (CPI)** - tracks a weighted basket of ~700 household goods/services relative to base year = 100.',
          '**Demand-pull inflation** - excessive total demand ("too much money chasing too few goods") when economy nears full capacity.',
          '**Cost-push inflation** - rising production costs (wages, oil, raw materials, indirect taxes) passed on to consumers as higher prices.',
        ],
        subsections: [
          {
            heading: 'Losers from Inflation & Danger of Deflation',
            bullets: [
              '**Hurt by inflation** - **savers** (real value eroded if interest < inflation), **fixed-income pensioners**, and **exporters** (exports lose price competitiveness).',
              '**Malign deflation (falling price level)** - consumers **delay purchases** waiting for even lower prices → firms cut output & lay off workers → deep recession.',
            ],
            exampleHeading: 'Worked CPI calculation',
            examples: [
              'CPI rises from 120 to 126 → Inflation rate = ((126 − 120) ÷ 120) × 100% = **5.0%**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'inflation', definition: 'A sustained rise in the general price level of goods and services over time, reducing the purchasing power of money.' },
          { term: 'CPI', definition: 'Consumer Prices Index — weighted price index measuring average changes in the cost of a representative household basket.' },
        ],
        memoryAid: 'Demand-PULL = buyers PULL prices up; Cost-PUSH = rising firm costs PUSH prices up!',
        commonMistake: 'NEVER confuse DISINFLATION (prices rising MORE SLOWLY, e.g. 5% → 2%) with DEFLATION (prices actually FALLING, e.g. −1%)!',
      },
    ],
    keyTerms: [
      { term: 'Recession', definition: 'Two consecutive quarters of falling real GDP.' },
      { term: 'HDI', definition: 'Human Development Index combining income per head, life expectancy, and education.' },
      { term: 'Structural unemployment', definition: 'Unemployment due to declining industries, automation, or skills mismatch.' },
      { term: 'Inflation', definition: 'Sustained increase in the general price level measured by CPI.' },
    ],
    checklistPoints: [
      'Explain real GDP per head, recession, and why HDI improves on GDP as a living-standard indicator',
      'Classify cyclical, structural, frictional, and seasonal unemployment and match each to remedies',
      'Calculate CPI inflation, distinguish demand-pull vs cost-push inflation, and explain deflation risks',
    ],
  },

  'econ-5-1': {
    subtopicId: 'econ-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Specialisation, Free Trade vs Protectionism, Exchange Rates & Current Account',
    readingMinutes: 11,
    videoTitle: 'Balance of Payments (Current Account, Financial Account and Capital Account)',
    youtubeId: 'MIKt6ewrj5U',
    videoChannel: 'EconplusDal',
    videoDuration: '11:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'International Specialisation & Free Trade vs Protectionism', cardId: 'econ-5-1-c1' },
      { time: '3:45', seconds: 225, label: 'Floating Exchange Rates & SPICED / WPIDEC', cardId: 'econ-5-1-c2' },
      { time: '7:30', seconds: 450, label: 'Current Account of Balance of Payments & Deficits', cardId: 'econ-5-1-c3' },
    ],
    cards: [
      {
        id: 'econ-5-1-c1',
        title: 'Specialisation, Free Trade & Protectionism',
        summary: 'Countries specialise in goods they produce efficiently; protectionism shields domestic jobs/infant industries via tariffs and quotas at the cost of higher consumer prices.',
        bullets: [
          '**Benefits of free trade** - lower prices, wider consumer choice, economies of scale for exporters, competition spurring efficiency.',
          '**Protectionist tools** - **Tariffs** (taxes on imports raising price & raising government revenue), **Quotas** (physical limit on import volume), **Subsidies** to domestic firms, and **Embargoes** (total ban).',
          '**Reasons for protectionism** - protect **infant industries**, protect **declining (sunset) industries/jobs**, stop **dumping**, and cut a current account deficit (risk: **retaliation** and higher costs for consumers/firms!).',
        ],
        subsections: [
          {
            heading: 'Multinational Companies (MNCs)',
            bullets: [
              '**Host country pros vs cons** - creates jobs, tax revenue, tech transfer, and exports; risks profit repatriation, local firm closures, and environmental/labour exploitation.',
            ],
            exampleHeading: 'Concrete check: Tariff vs Quota',
            examples: [
              'A tariff raises tax revenue for the domestic government; a quota restricts physical quantity without generating tariff revenue.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tariff', definition: 'A tax placed by a government on imported goods to make them dearer and protect domestic producers.' },
        ],
      },
      {
        id: 'econ-5-1-c2',
        title: 'Floating Exchange Rates (Appreciation vs Depreciation)',
        summary: 'Exchange rates are set by currency supply and demand; a stronger currency makes imports cheaper and exports dearer (SPICED).',
        bullets: [
          '**Appreciation (Stronger currency)** - e.g. £1 rises from $1.20 → $1.40; caused by higher demand for £ (strong exports, **higher UK interest rates** attracting hot money, inward FDI).',
          '**SPICED & WPIDEC** - **S**trong **P**ound: **I**mports **C**heaper, **E**xports **D**earer (reduces imported inflation, worsens trade balance if demand elastic). **W**eak **P**ound: **I**mports **D**earer, **E**xports **C**heaper (boosts export jobs, risks cost-push inflation).',
        ],
        subsections: [
          {
            heading: 'Worked Exchange Rate Conversion',
            bullets: [
              '**Check direction carefully** - multiply when converting from the base currency (£ → $); divide when converting back ($ → £).',
            ],
            exampleHeading: 'Worked example: UK machine costs £10,000 when £1 = $1.20 vs £1 = $1.40',
            examples: [
              'At $1.20, US buyer pays $12,000. After £ appreciates to $1.40, US buyer must pay **$14,000** (export becomes dearer!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'exchange rate', definition: 'The price of one currency expressed in terms of another currency (e.g. £1 = $1.30).' },
        ],
        memoryAid: 'SPICED (Strong Pound: Imports Cheaper, Exports Dearer) & WPIDEC (Weak Pound: Imports Dearer, Exports Cheaper)!',
      },
      {
        id: 'econ-5-1-c3',
        title: 'Current Account of the Balance of Payments',
        summary: 'The current account tracks Trade in Goods, Trade in Services, Primary Income, and Secondary Income.',
        bullets: [
          '**Four components** - (1) **Trade in goods** (visible exports − visible imports); (2) **Trade in services** (invisible exports like tourism/banking − imports); (3) **Primary income** (wages/profits/dividends across borders); (4) **Secondary income** (remittances, foreign aid).',
          '**Causes of a Current Account Deficit** - overvalued exchange rate (SPICED), high domestic inflation hurting competitiveness, strong consumer boom sucking in imports, or declining manufacturing productivity.',
        ],
        subsections: [
          {
            heading: 'Reducing a Current Account Deficit',
            bullets: [
              '**Policies** - **supply-side improvements** (long-run quality & productivity), **currency depreciation**, **contractionary fiscal/monetary policy** (cuts import spending), or temporary tariffs.',
            ],
            exampleHeading: 'Worked Current Account balance',
            examples: [
              'Goods: −$40bn, Services: +$25bn, Primary income: +$3bn, Secondary income: −$2bn → Overall Current Account = **−$14bn (deficit)**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'current account deficit', definition: 'Situation where total outflows of money for imports and income transfers exceed total inflows from exports and income.' },
        ],
        commonMistake: 'NEVER confuse a Current Account Deficit (imports > exports) with a Government Budget Deficit (government spending > tax revenue) — they are completely different!',
      },
    ],
    keyTerms: [
      { term: 'Tariff', definition: 'Import tax raising the price of foreign goods to protect domestic producers.' },
      { term: 'Exchange rate', definition: 'Price of one currency in terms of another.' },
      { term: 'Appreciation', definition: 'Rise in the value of a floating currency against other currencies.' },
      { term: 'Current account', definition: 'Record of trade in goods, trade in services, primary income, and secondary income.' },
    ],
    checklistPoints: [
      'Evaluate free trade vs protectionism (tariffs, quotas, subsidies, infant industries, retaliation)',
      'Apply SPICED and WPIDEC to predict exchange-rate effects on exports, imports, and inflation',
      'Calculate a current account balance from all 4 components and distinguish it from a budget deficit',
    ],
  },
};

export const ECONOMICS_QUIZZES: QuizQuestion[] = [
  // 1.1
  { id: 'econ-q-1-1-1', subtopicId: 'econ-1-1', type: 'diagram-label', marks: 2, prompt: 'Interpret the regions on a Production Possibility Curve (PPC):', diagram: 'production-possibility-curve', labels: [{ marker: 'Point INSIDE the PPC', options: ['Unemployed / inefficiently used resources', 'Unattainable output', 'Full employment'], answer: 'Unemployed / inefficiently used resources' }, { marker: 'Outward shift of the PPC', options: ['Increase in productive capacity (economic growth)', 'Recession', 'Opportunity cost only'], answer: 'Increase in productive capacity (economic growth)' }], explanation: 'Points inside show spare/unemployed resources; outward shift shows expanded capacity.' },
  { id: 'econ-q-1-1-2', subtopicId: 'econ-1-1', type: 'short-answer', marks: 2, prompt: 'Define opportunity cost and identify the opportunity cost if a government spends $100m on a new airport instead of its next best option of building 4 schools.', rubric: { maxMarks: 2, modelAnswer: 'Opportunity cost is the next best alternative foregone when making a choice. Here the opportunity cost is the 4 schools foregone.', markPoints: [{ id: 'mp1', markDescription: 'Next best alternative foregone', requiredKeywordGroups: [['next best'], ['alternative', 'foregone', 'given up']] }, { id: 'mp2', markDescription: 'Identifies the 4 schools', requiredKeywordGroups: [['school']] }] }, explanation: 'Opportunity cost is always the single next best option sacrificed.' },
  { id: 'econ-q-1-1-3', subtopicId: 'econ-1-1', type: 'matching', marks: 2, prompt: 'Match each factor of production to its factor reward:', pairs: [{ left: 'Land', right: 'Rent' }, { left: 'Labour', right: 'Wages' }, { left: 'Capital', right: 'Interest' }, { left: 'Enterprise', right: 'Profit' }], explanation: 'Memorise all four exact factor payments.' },
  { id: 'econ-q-1-1-4', subtopicId: 'econ-1-1', type: 'mcq', marks: 1, prompt: 'Why is state-funded public education an ECONOMIC good rather than a FREE good?', options: ['Students pay tuition fees', 'It uses scarce resources (teachers, buildings, taxes) and therefore has an opportunity cost', 'It is exported', 'Only rich people use it'], correctIndex: 1, explanation: 'Free-at-point-of-use ≠ free good; scarce resources create opportunity cost.' },
  { id: 'econ-q-1-1-5', subtopicId: 'econ-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the PPC facts:', segments: ['A point outside a PPC is currently ', ', and better education/technology shifts the PPC ', '.'], wordBank: ['unattainable', 'outward', 'inefficient', 'inward'], answers: ['unattainable', 'outward'], explanation: 'Outside points exceed current resources; better technology/skills expand capacity outward.' },

  // 2.1
  { id: 'econ-q-2-1-1', subtopicId: 'econ-2-1', type: 'diagram-label', marks: 2, prompt: 'Identify the features of a Supply & Demand diagram:', diagram: 'supply-demand-equilibrium', labels: [{ marker: 'Intersection of D and S', options: ['Market equilibrium (D = S)', 'Excess demand', 'Excess supply'], answer: 'Market equilibrium (D = S)' }, { marker: 'Price set BELOW equilibrium', options: ['Excess demand (shortage)', 'Excess supply (surplus)', 'Zero demand'], answer: 'Excess demand (shortage)' }], explanation: 'Where D = S the market clears; prices below equilibrium create shortages.' },
  { id: 'econ-q-2-1-2', subtopicId: 'econ-2-1', type: 'short-answer', marks: 2, prompt: 'Explain what happens to the equilibrium price and quantity of electric cars if the government gives carmakers a production subsidy.', rubric: { maxMarks: 2, modelAnswer: 'A subsidy lowers production costs, shifting the supply curve to the right; equilibrium price falls and equilibrium quantity increases.', markPoints: [{ id: 'mp1', markDescription: 'Lowers costs / supply shifts right', requiredKeywordGroups: [['supply'], ['right', 'increases']] }, { id: 'mp2', markDescription: 'Price falls & quantity rises', requiredKeywordGroups: [['price'], ['falls', 'decreases', 'lower'], ['quantity', 'output']] }] }, explanation: 'Subsidies shift supply right → lower P, higher Q.' },
  { id: 'econ-q-2-1-3', subtopicId: 'econ-2-1', type: 'mcq', marks: 1, prompt: 'What happens to the demand curve for TEA when the price of COFFEE (a close substitute) rises sharply?', options: ['Contracts along the tea demand curve', 'Shifts to the RIGHT', 'Shifts to the LEFT', 'Supply of tea shifts left'], correctIndex: 1, explanation: 'More consumers switch from expensive coffee to tea, shifting demand for tea right.' },
  { id: 'econ-q-2-1-4', subtopicId: 'econ-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the movement vs shift distinction:', segments: ['A fall in a good’s own price causes an ', ' along the demand curve, while an indirect tax shifts the ', ' curve to the left.'], wordBank: ['extension', 'supply', 'contraction', 'demand'], answers: ['extension', 'supply'], explanation: 'Own price changes move along D; indirect taxes raise firm costs, shifting S left.' },
  { id: 'econ-q-2-1-5', subtopicId: 'econ-2-1', type: 'mcq', marks: 1, prompt: 'If a government imposes a binding MINIMUM price above market equilibrium for wheat, what is the immediate market result?', options: ['A shortage (excess demand)', 'A surplus (excess supply)', 'Market equilibrium', 'Supply shifts left'], correctIndex: 1, explanation: 'Above equilibrium, quantity supplied exceeds quantity demanded, leaving unsold surplus.' },

  // 2.2
  { id: 'econ-q-2-2-1', subtopicId: 'econ-2-2', type: 'short-answer', marks: 2, prompt: 'A cinema raises ticket prices by 20% and ticket sales fall by 10%. Calculate PED and state whether total revenue rises or falls.', rubric: { maxMarks: 2, modelAnswer: 'PED = −10% ÷ +20% = −0.5 (price inelastic, |PED| < 1), so total revenue RISES.', markPoints: [{ id: 'mp1', markDescription: 'PED = −0.5 (or 0.5)', numericMatch: { value: -0.5, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Inelastic → revenue rises', requiredKeywordGroups: [['inelastic', 'rises', 'increases']] }] }, explanation: '−10 ÷ 20 = −0.5 (inelastic) → raising price boosts total revenue.' },
  { id: 'econ-q-2-2-2', subtopicId: 'econ-2-2', type: 'mcq', marks: 1, prompt: 'Why will private firms NOT supply pure PUBLIC GOODS like street lighting in a free market?', options: ['They are demerit goods', 'They are non-excludable and non-rival, causing the free-rider problem so firms cannot charge profitably', 'They have elastic demand', 'Government bans them'], correctIndex: 1, explanation: 'Because non-payers cannot be excluded, free riders eliminate profit incentive.' },
  { id: 'econ-q-2-2-3', subtopicId: 'econ-2-2', type: 'fill-blank', marks: 2, prompt: 'Complete the market failure rules:', segments: ['Demerit goods create external costs and are ', ' in a free market, while merit goods like vaccinations are ', '.'], wordBank: ['over-consumed', 'under-consumed', 'non-rival', 'elastic'], answers: ['over-consumed', 'under-consumed'], explanation: 'Free markets over-consume demerit goods and under-consume merit goods.' },
  { id: 'econ-q-2-2-4', subtopicId: 'econ-2-2', type: 'mcq', marks: 1, prompt: 'Which factor makes a product’s Price Elasticity of Demand (PED) MORE ELASTIC?', options: ['Many close substitutes available', 'The product is highly addictive', 'Tiny proportion of income', 'Strict medical necessity'], correctIndex: 0, explanation: 'Easy switching to close substitutes makes consumers highly responsive to price rises.' },
  { id: 'econ-q-2-2-5', subtopicId: 'econ-2-2', type: 'mcq', marks: 1, prompt: 'Social Cost is equal to:', options: ['Private Cost − External Cost', 'Private Cost + External Cost', 'Private Benefit + External Benefit', 'Total Revenue − Total Cost'], correctIndex: 1, explanation: 'Social Cost = Private Cost + External Cost.' },

  // 3.1
  { id: 'econ-q-3-1-1', subtopicId: 'econ-3-1', type: 'mcq', marks: 1, prompt: 'Which function is carried out ONLY by a country’s CENTRAL BANK (not commercial banks)?', options: ['Accepting household savings deposits', 'Setting the national base interest rate and acting as lender of last resort', 'Issuing debit cards', 'Offering home mortgages'], correctIndex: 1, explanation: 'Monetary policy and lender of last resort belong strictly to the central bank.' },
  { id: 'econ-q-3-1-2', subtopicId: 'econ-3-1', type: 'short-answer', marks: 2, prompt: 'Explain TWO reasons why a brain surgeon earns much higher wages than a retail shop assistant.', rubric: { maxMarks: 2, modelAnswer: '1) Supply of surgeons is very low/inelastic due to long, demanding qualifications and scarce specialist skills; 2) Demand for life-saving surgery is high and inelastic (high productivity/value of output).', markPoints: [{ id: 'mp1', markDescription: 'Low/scarce supply due to long training & qualifications', requiredKeywordGroups: [['supply'], ['low', 'scarce', 'training', 'qualification', 'skill']] }, { id: 'mp2', markDescription: 'High/inelastic demand / high productivity', requiredKeywordGroups: [['demand', 'productivity', 'value', 'inelastic']] }] }, explanation: 'High derived demand + scarce skilled supply drive high equilibrium wages.' },
  { id: 'econ-q-3-1-3', subtopicId: 'econ-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete household saving and union facts:', segments: ['Higher interest rates encourage households to ', ' more and borrow less, and trade unions use ', ' bargaining to negotiate pay.'], wordBank: ['save', 'collective', 'spend', 'monopoly'], answers: ['save', 'collective'], explanation: 'Higher rates reward saving; unions bargain collectively.' },
  { id: 'econ-q-3-1-4', subtopicId: 'econ-3-1', type: 'multi-select', marks: 2, prompt: 'Select TWO official functions of money:', options: ['Medium of exchange', 'Store of value', 'Setting interest rates', 'Guaranteeing zero inflation'], selectCount: 2, correctIndices: [0, 1], explanation: 'Money acts as medium of exchange, unit of account, store of value, and standard of deferred payment.' },
  { id: 'econ-q-3-1-5', subtopicId: 'econ-3-1', type: 'mcq', marks: 1, prompt: 'When is a trade union in a STRONGER position to win a pay rise?', options: ['During a deep recession with high unemployment', 'When the firm is making high profits and union density is high', 'When workers can be easily replaced by machines', 'When the firm is losing money'], correctIndex: 1, explanation: 'High profits, tight labour markets, and strong membership strengthen union leverage.' },

  // 3.2
  { id: 'econ-q-3-2-1', subtopicId: 'econ-3-2', type: 'short-answer', marks: 2, prompt: 'A bakery has fixed costs of $500 and variable costs of $3 per cake. It produces and sells 250 cakes at $7 each. Calculate its average cost and total profit.', rubric: { maxMarks: 2, modelAnswer: 'TC = 500 + (250 × 3) = $1,250 → AC = 1250 ÷ 250 = $5. TR = 250 × 7 = $1,750 → Profit = 1750 − 1250 = $500.', markPoints: [{ id: 'mp1', markDescription: 'Average cost $5', numericMatch: { value: 5, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Profit $500', numericMatch: { value: 500, tolerance: 0.5 } }] }, explanation: 'TC = $1,250 (AC = $5), TR = $1,750 → Profit = $500.' },
  { id: 'econ-q-3-2-2', subtopicId: 'econ-3-2', type: 'mcq', marks: 1, prompt: 'What happens to a firm’s AVERAGE COST per unit when it experiences economies of scale?', options: ['Average cost rises', 'Average cost falls', 'Total cost falls to zero', 'Fixed cost disappears'], correctIndex: 1, explanation: 'Economies of scale reduce long-run average cost per unit as output expands.' },
  { id: 'econ-q-3-2-3', subtopicId: 'econ-3-2', type: 'matching', marks: 2, prompt: 'Match each merger type to its example:', pairs: [{ left: 'Horizontal merger', right: 'Two rival airlines merging' }, { left: 'Vertical backward merger', right: 'Chocolate maker buying a cocoa farm' }, { left: 'Vertical forward merger', right: 'Car manufacturer buying dealerships' }, { left: 'Conglomerate merger', right: 'Hotel chain buying a software firm' }], explanation: 'Know all 4 merger directions clearly.' },
  { id: 'econ-q-3-2-4', subtopicId: 'econ-3-2', type: 'fill-blank', marks: 2, prompt: 'Complete diseconomies and monopoly facts:', segments: ['Growing too large can cause poor communication and rising average cost, called ', ' of scale, while a monopoly is protected by high ', ' to entry.'], wordBank: ['diseconomies', 'barriers', 'economies', 'subsidies'], answers: ['diseconomies', 'barriers'], explanation: 'Diseconomies raise AC; barriers protect monopolies from rivals.' },
  { id: 'econ-q-3-2-5', subtopicId: 'econ-3-2', type: 'mcq', marks: 1, prompt: 'Which of these is a POTENTIAL BENEFIT of a large monopoly for consumers?', options: ['Lack of choice', 'Huge economies of scale and profits reinvested into R&D innovation', 'Higher prices above marginal cost', 'Lower product quality'], correctIndex: 1, explanation: 'Dynamic efficiency (R&D) and scale economies are the main counterarguments in monopoly evaluation.' },

  // 4.1
  { id: 'econ-q-4-1-1', subtopicId: 'econ-4-1', type: 'mcq', marks: 1, prompt: 'Which policy tool belongs to MONETARY policy?', options: ['Raising income tax', 'Increasing central bank interest rates', 'Building public highways', 'Increasing unemployment benefits'], correctIndex: 1, explanation: 'Interest rates and money supply are monetary policy; taxes and spending are fiscal policy.' },
  { id: 'econ-q-4-1-2', subtopicId: 'econ-4-1', type: 'short-answer', marks: 2, prompt: 'Explain ONE key advantage and ONE disadvantage of using supply-side policies (such as education & training) to grow an economy.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: increases long-run productive capacity (shifts PPC outward), allowing economic growth WITHOUT causing demand-pull inflation. Disadvantage: expensive for the government budget and suffers long time lags before effects appear.', markPoints: [{ id: 'mp1', markDescription: 'Non-inflationary long-run growth / shifts PPC outward', requiredKeywordGroups: [['capacity', 'productivity', 'ppc', 'non-inflationary', 'long-run', 'long run']] }, { id: 'mp2', markDescription: 'Time lags / expensive / opportunity cost', requiredKeywordGroups: [['time lag', 'years', 'long time', 'expensive', 'cost']] }] }, explanation: 'Supply-side raises capacity non-inflationarily, but takes years and costs public funds.' },
  { id: 'econ-q-4-1-3', subtopicId: 'econ-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete tax and policy distinctions:', segments: ['Income tax takes a higher percentage from higher earners so it is ', ', whereas VAT on spending is ', '.'], wordBank: ['progressive', 'regressive', 'monetary', 'direct'], answers: ['progressive', 'regressive'], explanation: 'Progressive taxes narrow inequality; regressive taxes hit lower-income proportions harder.' },
  { id: 'econ-q-4-1-4', subtopicId: 'econ-4-1', type: 'mcq', marks: 1, prompt: 'How does expansionary fiscal policy (lower taxes + higher government spending) affect a recession?', options: ['Reduces total demand and raises unemployment', 'Boosts total demand, raising GDP and reducing cyclical unemployment', 'Immediately eliminates inflation', 'Causes a budget surplus'], correctIndex: 1, explanation: 'Higher disposable income and public spending lift aggregate demand and employment.' },
  { id: 'econ-q-4-1-5', subtopicId: 'econ-4-1', type: 'mcq', marks: 1, prompt: 'Which macroeconomic conflict often happens when a government stimulates rapid economic growth?', options: ['Deflation and falling wages', 'Demand-pull inflation and rising imports (current account deficit)', 'Higher cyclical unemployment', 'Lower tax revenues'], correctIndex: 1, explanation: 'Fast demand growth can overheat prices and pull in foreign imports.' },

  // 4.2
  { id: 'econ-q-4-2-1', subtopicId: 'econ-4-2', type: 'short-answer', marks: 2, prompt: 'The CPI rises from 150 to 156 over one year. Calculate the annual rate of inflation and name ONE group hurt by high inflation.', rubric: { maxMarks: 2, modelAnswer: 'Inflation = ((156 − 150) ÷ 150) × 100% = 4%. Groups hurt include savers, pensioners on fixed incomes, or exporters.', markPoints: [{ id: 'mp1', markDescription: 'Inflation = 4%', numericMatch: { value: 4, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Names savers, fixed-income earners, pensioners, or exporters', requiredKeywordGroups: [['saver', 'pensioner', 'fixed income', 'exporter', 'lender']] }] }, explanation: '(6 ÷ 150) × 100% = 4%.' },
  { id: 'econ-q-4-2-2', subtopicId: 'econ-4-2', type: 'mcq', marks: 1, prompt: 'What is the official definition of a RECESSION?', options: ['One month of rising prices', 'Two consecutive quarters (6 months) of falling real GDP', 'Unemployment rising above 5%', 'A current account deficit'], correctIndex: 1, explanation: 'Two consecutive quarters of negative real GDP growth.' },
  { id: 'econ-q-4-2-3', subtopicId: 'econ-4-2', type: 'matching', marks: 2, prompt: 'Match each unemployment type to its cause:', pairs: [{ left: 'Cyclical unemployment', right: 'Fall in aggregate demand during recession' }, { left: 'Structural unemployment', right: 'Permanent industry decline or skills mismatch' }, { left: 'Frictional unemployment', right: 'Short-term search moving between jobs' }, { left: 'Seasonal unemployment', right: 'Regular off-season drop (e.g. winter tourism)' }], explanation: 'Precise unemployment classification is tested on every 0455 paper.' },
  { id: 'econ-q-4-2-4', subtopicId: 'econ-4-2', type: 'fill-blank', marks: 2, prompt: 'Complete inflation causes:', segments: ['Rising oil and wage costs cause ', ' inflation, while excessive total spending causes ', ' inflation.'], wordBank: ['cost-push', 'demand-pull', 'deflation', 'structural'], answers: ['cost-push', 'demand-pull'], explanation: 'Higher production costs = cost-push; excess AD = demand-pull.' },
  { id: 'econ-q-4-2-5', subtopicId: 'econ-4-2', type: 'multi-select', marks: 2, prompt: 'Select TWO indicators included in the Human Development Index (HDI) alongside GNI per head:', options: ['Life expectancy at birth', 'Mean and expected years of schooling', 'National inflation rate', 'Total defence spending'], selectCount: 2, correctIndices: [0, 1], explanation: 'HDI combines income per head, health (life expectancy), and education.' },

  // 5.1
  { id: 'econ-q-5-1-1', subtopicId: 'econ-5-1', type: 'mcq', marks: 1, prompt: 'According to SPICED, if the UK Pound APPRECIATES strongly against the US Dollar, what happens to UK exports and imports?', options: ['Imports become dearer, exports become cheaper', 'Imports become cheaper, exports become dearer to foreign buyers', 'Both become cheaper', 'Both stay unchanged'], correctIndex: 1, explanation: 'SPICED: Strong Pound → Imports Cheaper, Exports Dearer.' },
  { id: 'econ-q-5-1-2', subtopicId: 'econ-5-1', type: 'short-answer', marks: 2, prompt: 'Calculate a country’s Current Account balance if Trade in Goods = −$35bn, Trade in Services = +$20bn, Primary Income = +$4bn, and Secondary Income = −$3bn, and state whether it is a surplus or deficit.', rubric: { maxMarks: 2, modelAnswer: '−35 + 20 + 4 − 3 = −$14bn, which is a current account DEFICIT.', markPoints: [{ id: 'mp1', markDescription: '−14 bn', numericMatch: { value: -14, tolerance: 0.1 } }, { id: 'mp2', markDescription: 'Deficit', requiredKeywordGroups: [['deficit']] }] }, explanation: 'Sum all four components: −35 + 20 + 4 − 3 = −$14bn deficit.' },
  { id: 'econ-q-5-1-3', subtopicId: 'econ-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete protectionist tools:', segments: ['A tax placed on imported goods is a ', ', whereas a physical limit on the volume of imports is a ', '.'], wordBank: ['tariff', 'quota', 'subsidy', 'dividend'], answers: ['tariff', 'quota'], explanation: 'Tariffs tax imports; quotas cap import quantity.' },
  { id: 'econ-q-5-1-4', subtopicId: 'econ-5-1', type: 'mcq', marks: 1, prompt: 'What is a major RISK for a country that imposes heavy tariffs on foreign imports?', options: ['Domestic prices fall sharply', 'Trading partners may impose retaliatory tariffs on its own exports', 'Foreign competition increases', 'Government tariff revenue falls to zero'], correctIndex: 1, explanation: 'Retaliation harms domestic exporters and raises living costs for consumers.' },
  { id: 'econ-q-5-1-5', subtopicId: 'econ-5-1', type: 'mcq', marks: 1, prompt: 'What happens to a country’s floating exchange rate if its central bank RAISES interest rates above rival countries?', options: ['Currency depreciates', 'Hot money flows in raising demand for the currency, so it appreciates', 'Current account becomes zero', 'Exports become cheaper'], correctIndex: 1, explanation: 'Higher returns attract foreign savers who buy the domestic currency, pushing its value up.' },
];

export const ECONOMICS_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'econ-fc-1-1-1', subtopicId: 'econ-1-1', front: 'Define the basic economic problem.', backBullets: ['Scarcity: unlimited human wants chasing finite resources (land, labour, capital, enterprise).'] },
  { id: 'econ-fc-1-1-2', subtopicId: 'econ-1-1', front: 'Define opportunity cost.', backBullets: ['The next best alternative foregone when making a choice.'] },
  { id: 'econ-fc-1-1-3', subtopicId: 'econ-1-1', front: 'Four factors of production and their rewards?', backBullets: ['Land → Rent; Labour → Wages; Capital → Interest; Enterprise → Profit.'] },
  { id: 'econ-fc-1-1-4', subtopicId: 'econ-1-1', front: 'What do points inside, on, and outside a PPC show?', backBullets: ['Inside: unemployed resources; On: full efficiency; Outside: currently unattainable.'] },
  { id: 'econ-fc-1-1-5', subtopicId: 'econ-1-1', front: 'What shifts a PPC outward?', backBullets: ['Greater quantity or quality of resources (education, technology, capital investment, resource discovery).'] },
  // 2.1
  { id: 'econ-fc-2-1-1', subtopicId: 'econ-2-1', front: 'Movement along D vs Shift of D?', backBullets: ['Own price change → movement along (extension/contraction); Non-price factor (income, tastes, substitutes) → shift.'] },
  { id: 'econ-fc-2-1-2', subtopicId: 'econ-2-1', front: 'Effect of an indirect tax vs subsidy on the Supply curve?', backBullets: ['Indirect tax shifts S LEFT (higher P, lower Q); Subsidy shifts S RIGHT (lower P, higher Q).'] },
  { id: 'econ-fc-2-1-3', subtopicId: 'econ-2-1', front: 'What happens when market price is set below equilibrium?', backBullets: ['Excess demand (shortage); buyer competition pushes price back up to equilibrium.'] },
  { id: 'econ-fc-2-1-4', subtopicId: 'econ-2-1', front: 'Three functions of the price mechanism?', backBullets: ['Signalling scarcity, incentivising producers, and rationing limited goods.'] },
  { id: 'econ-fc-2-1-5', subtopicId: 'econ-2-1', front: 'Effect of a binding maximum price vs minimum price?', backBullets: ['Max price (below Eq) → shortage; Min price (above Eq) → surplus.'] },
  // 2.2
  { id: 'econ-fc-2-2-1', subtopicId: 'econ-2-2', front: 'PED formula and pricing rule for Total Revenue?', backBullets: ['%ΔQd ÷ %ΔP; Inelastic (|PED|<1) → raise P to boost TR; Elastic (|PED|>1) → lower P to boost TR.'] },
  { id: 'econ-fc-2-2-2', subtopicId: 'econ-2-2', front: 'Four determinants of Price Elasticity of Supply (PES)?', backBullets: ['Spare capacity, stock levels, production time lag, and factor mobility.'] },
  { id: 'econ-fc-2-2-3', subtopicId: 'econ-2-2', front: 'Social Cost and Social Benefit equations?', backBullets: ['Social Cost = Private Cost + External Cost; Social Benefit = Private Benefit + External Benefit.'] },
  { id: 'econ-fc-2-2-4', subtopicId: 'econ-2-2', front: 'Merit goods vs Demerit goods in a free market?', backBullets: ['Merit (education/vaccines): under-consumed; Demerit (cigarettes/alcohol): over-consumed.'] },
  { id: 'econ-fc-2-2-5', subtopicId: 'econ-2-2', front: 'Two defining properties of a public good?', backBullets: ['Non-excludable and non-rival → free-rider problem prevents private provision.'] },
  // 3.1
  { id: 'econ-fc-3-1-1', subtopicId: 'econ-3-1', front: 'Four functions of money?', backBullets: ['Medium of exchange, unit of account, store of value, standard for deferred payments.'] },
  { id: 'econ-fc-3-1-2', subtopicId: 'econ-3-1', front: 'Four roles of a Central Bank?', backBullets: ['Issues notes/coins, sets base interest rates, regulates commercial banks, acts as lender of last resort & government’s banker.'] },
  { id: 'econ-fc-3-1-3', subtopicId: 'econ-3-1', front: 'How do higher interest rates affect household spending, saving, and borrowing?', backBullets: ['Encourages saving, raises borrowing cost, and reduces consumer spending.'] },
  { id: 'econ-fc-3-1-4', subtopicId: 'econ-3-1', front: 'Why do high-skilled workers earn higher wages?', backBullets: ['High inelastic derived demand combined with scarce labour supply due to long training/qualifications.'] },
  { id: 'econ-fc-3-1-5', subtopicId: 'econ-3-1', front: 'Main role of a trade union?', backBullets: ['Collective bargaining to negotiate higher wages, better working conditions, and job security.'] },
  // 3.2
  { id: 'econ-fc-3-2-1', subtopicId: 'econ-3-2', front: 'Key firm cost & revenue equations?', backBullets: ['TC = FC + VC; AC = TC ÷ Q; TR = P × Q; Profit = TR − TC.'] },
  { id: 'econ-fc-3-2-2', subtopicId: 'econ-3-2', front: 'Five internal economies of scale?', backBullets: ['Purchasing (bulk), technical, financial, managerial, and marketing — all lowering average cost.'] },
  { id: 'econ-fc-3-2-3', subtopicId: 'econ-3-2', front: 'What causes diseconomies of scale?', backBullets: ['Excessive firm size causing poor communication, weak control, and worker alienation → rising AC.'] },
  { id: 'econ-fc-3-2-4', subtopicId: 'econ-3-2', front: 'Horizontal vs Vertical vs Conglomerate integration?', backBullets: ['Horizontal: same stage; Vertical: supply chain backward/forward; Conglomerate: unrelated industries.'] },
  { id: 'econ-fc-3-2-5', subtopicId: 'econ-3-2', front: 'Key pros and cons of a monopoly?', backBullets: ['Pros: scale economies & R&D innovation; Cons: higher prices, less choice, restricted output.'] },
  // 4.1
  { id: 'econ-fc-4-1-1', subtopicId: 'econ-4-1', front: 'Five macroeconomic aims of government?', backBullets: ['Economic growth, full employment, low stable inflation, BoP stability, income redistribution.'] },
  { id: 'econ-fc-4-1-2', subtopicId: 'econ-4-1', front: 'Fiscal policy vs Monetary policy instruments?', backBullets: ['Fiscal: government spending & taxation; Monetary: interest rates & money supply.'] },
  { id: 'econ-fc-4-1-3', subtopicId: 'econ-4-1', front: 'Progressive vs Regressive tax?', backBullets: ['Progressive (income tax): higher % rate on higher incomes; Regressive (VAT): higher % burden on lower incomes.'] },
  { id: 'econ-fc-4-1-4', subtopicId: 'econ-4-1', front: 'Four examples of supply-side policies?', backBullets: ['Education/training, infrastructure, lower direct taxes, deregulation/privatisation, R&D subsidies.'] },
  { id: 'econ-fc-4-1-5', subtopicId: 'econ-4-1', front: 'Main benefit and drawback of supply-side policy?', backBullets: ['Benefit: non-inflationary long-run growth (PPC outward); Drawback: costly with long time lags.'] },
  // 4.2
  { id: 'econ-fc-4-2-1', subtopicId: 'econ-4-2', front: 'Real GDP vs Nominal GDP & definition of recession?', backBullets: ['Real GDP adjusts for inflation; recession = 2 consecutive quarters of falling real GDP.'] },
  { id: 'econ-fc-4-2-2', subtopicId: 'econ-4-2', front: 'Three components of HDI?', backBullets: ['GNI per head, life expectancy at birth, and mean/expected years of schooling.'] },
  { id: 'econ-fc-4-2-3', subtopicId: 'econ-4-2', front: 'Cyclical vs Structural vs Frictional unemployment?', backBullets: ['Cyclical: recession/low AD; Structural: declining industry/skills mismatch; Frictional: between jobs.'] },
  { id: 'econ-fc-4-2-4', subtopicId: 'econ-4-2', front: 'Demand-pull vs Cost-push inflation?', backBullets: ['Demand-pull: excessive total demand; Cost-push: rising wages/raw material/energy costs.'] },
  { id: 'econ-fc-4-2-5', subtopicId: 'econ-4-2', front: 'Why can sustained deflation damage an economy?', backBullets: ['Consumers postpone spending waiting for cheaper prices → falling output and rising unemployment.'] },
  // 5.1
  { id: 'econ-fc-5-1-1', subtopicId: 'econ-5-1', front: 'Four tools of trade protectionism?', backBullets: ['Tariffs (import taxes), quotas (volume limits), domestic subsidies, and embargoes.'] },
  { id: 'econ-fc-5-1-2', subtopicId: 'econ-5-1', front: 'What do SPICED and WPIDEC stand for?', backBullets: ['Strong Pound: Imports Cheaper, Exports Dearer; Weak Pound: Imports Dearer, Exports Cheaper.'] },
  { id: 'econ-fc-5-1-3', subtopicId: 'econ-5-1', front: 'Four components of the Current Account of the Balance of Payments?', backBullets: ['Trade in goods, trade in services, primary income, and secondary income.'] },
  { id: 'econ-fc-5-1-4', subtopicId: 'econ-5-1', front: 'How do higher domestic interest rates affect a floating exchange rate?', backBullets: ['Attract foreign hot-money inflows → higher demand for currency → exchange rate appreciates.'] },
  { id: 'econ-fc-5-1-5', subtopicId: 'econ-5-1', front: 'Current Account Deficit vs Government Budget Deficit?', backBullets: ['Current account deficit = imports/outflows > exports/inflows; Budget deficit = government spending > tax revenue.'] },
];

export const ECONOMICS_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'econ-cs-1', slug: 'topic-1-economic-problem', title: '1. Basic Economic Problem Cheat Sheet', topicNumber: 1, topicName: 'The Basic Economic Problem', summary: 'Scarcity, CELL factors & rewards, opportunity cost & PPC.', accentColor: '#D97706', sections: [{ heading: 'Core Concepts', points: ['Land (Rent), Labour (Wages), Capital (Interest), Enterprise (Profit)', 'PPC: Inside = unemployed, On = efficient, Outside = unattainable', 'Outward PPC shift = better quantity/quality of resources'] }] },
  { id: 'econ-cs-2', slug: 'topic-2-allocation-resources', title: '2. Markets, Elasticity & Market Failure Cheat Sheet', topicNumber: 2, topicName: 'Allocation of Resources', summary: 'S&D shifts, PED/PES, externalities, merit/demerit & public goods.', accentColor: '#D97706', sections: [{ heading: 'Formulae & Rules', points: ['PED = %ΔQd ÷ %ΔP; PES = %ΔQs ÷ %ΔP', 'Inelastic |PED| < 1 → raise price for revenue; Elastic |PED| > 1 → cut price', 'Social Cost = Private + External Cost; Public goods = non-excludable & non-rival'] }] },
  { id: 'econ-cs-3', slug: 'topic-3-micro-decisions', title: '3. Microeconomic Decision Makers Cheat Sheet', topicNumber: 3, topicName: 'Microeconomic Decision Makers', summary: 'Money, central/commercial banks, wages, costs & monopolies.', accentColor: '#D97706', sections: [{ heading: 'Formulae & Rules', points: ['TC = FC + VC | AC = TC ÷ Q | TR = P × Q | Profit = TR − TC', 'Economies of scale lower AVERAGE cost per unit', 'Central bank sets interest rates & acts as lender of last resort'] }] },
  { id: 'econ-cs-4', slug: 'topic-4-macroeconomy', title: '4. Government & Macroeconomy Cheat Sheet', topicNumber: 4, topicName: 'Government & The Macroeconomy', summary: 'Fiscal, monetary, supply-side policies, GDP, unemployment & CPI.', accentColor: '#D97706', sections: [{ heading: 'Policy Toolkit', points: ['Fiscal: tax & gov spending | Monetary: interest rates & money supply | Supply-side: productivity/PPC', 'Recession = 2 consecutive quarters falling real GDP', 'CPI inflation = ((CPI₂ − CPI₁) ÷ CPI₁) × 100%'] }] },
  { id: 'econ-cs-5', slug: 'topic-5-international-trade', title: '5. International Trade & Exchange Rates Cheat Sheet', topicNumber: 5, topicName: 'International Trade & Globalisation', summary: 'Protectionism, SPICED/WPIDEC & Current Account components.', accentColor: '#D97706', sections: [{ heading: 'Trade & Currency', points: ['SPICED: Strong Pound → Imports Cheaper, Exports Dearer', 'Current Account = Goods + Services + Primary Income + Secondary Income', 'Tariffs raise revenue; quotas cap volume; both risk retaliation'] }] },
];

export const ECONOMICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'econ-ex-1-1', subtopicId: 'econ-1-1', number: 1, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A developing country invests heavily in university STEM education and high-speed rail infrastructure.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain the opportunity cost of this spending and how it shifts the country’s Production Possibility Curve (PPC) in the long run.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Opportunity cost is the next best alternative foregone (e.g. spending the same budget on hospitals or tax cuts). In the long run, higher-skilled labour and better capital infrastructure raise productive capacity, shifting the PPC outward.', markPoints: [{ id: 'mp1', markDescription: 'Defines opportunity cost as next best alternative foregone', requiredKeywordGroups: [['next best', 'foregone', 'alternative']] }, { id: 'mp2', markDescription: 'Higher quality/quantity of labour & capital', requiredKeywordGroups: [['skilled', 'productivity', 'quality', 'capital', 'capacity']] }, { id: 'mp3', markDescription: 'Shifts PPC outward', requiredKeywordGroups: [['ppc'], ['outward', 'right']] }] } },
  ] },
  { id: 'econ-ex-2-1', subtopicId: 'econ-2-1', number: 2, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Severe drought destroys 30% of the global coffee harvest.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain, using demand and supply analysis, the effect on the equilibrium price and quantity of coffee and on the demand for tea.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Drought shifts the supply curve of coffee to the left, raising equilibrium price and causing a contraction in equilibrium quantity. Because tea is a close substitute, demand for tea shifts to the right.', markPoints: [{ id: 'mp1', markDescription: 'Coffee supply shifts left', requiredKeywordGroups: [['supply'], ['left', 'decreases']] }, { id: 'mp2', markDescription: 'Coffee price rises & quantity falls', requiredKeywordGroups: [['price'], ['rises', 'increases'], ['quantity', 'falls', 'contracts']] }, { id: 'mp3', markDescription: 'Tea (substitute) demand shifts right', requiredKeywordGroups: [['substitute', 'tea'], ['right', 'increases']] }] } },
  ] },
  { id: 'econ-ex-2-2', subtopicId: 'econ-2-2', number: 3, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A government introduces a heavy indirect excise tax on sugary soft drinks to tackle obesity.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain why sugary drinks may cause market failure and discuss why the effectiveness of the tax depends on PED.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Sugary drinks are demerit goods generating external costs (higher public healthcare costs) and are over-consumed. If demand is price inelastic, the tax raises lots of revenue but cuts consumption only slightly; if elastic, consumption drops significantly.', markPoints: [{ id: 'mp1', markDescription: 'Demerit good / external healthcare costs / over-consumed', requiredKeywordGroups: [['demerit', 'external cost', 'healthcare', 'over-consum']] }, { id: 'mp2', markDescription: 'Inelastic PED → small drop in Q, high tax revenue', requiredKeywordGroups: [['inelastic'], ['small', 'little', 'revenue']] }, { id: 'mp3', markDescription: 'Elastic PED → large drop in Q', requiredKeywordGroups: [['elastic'], ['large', 'fall', 'drop']] }] } },
  ] },
  { id: 'econ-ex-3-1', subtopicId: 'econ-3-1', number: 4, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A central bank raises its base interest rate from 2% to 5.5%.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Analyse how this interest rate rise affects household saving, borrowing, and consumer spending.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Higher interest rates increase the return on savings (encouraging saving) and raise the cost of loans/mortgages (discouraging borrowing), leaving households with less disposable income so consumer spending falls.', markPoints: [{ id: 'mp1', markDescription: 'Higher reward encourages saving', requiredKeywordGroups: [['saving', 'save'], ['increase', 'more', 'reward']] }, { id: 'mp2', markDescription: 'Higher cost discourages borrowing', requiredKeywordGroups: [['borrowing', 'borrow', 'mortgage', 'loan'], ['cost', 'expensive', 'less', 'falls']] }, { id: 'mp3', markDescription: 'Consumer spending decreases', requiredKeywordGroups: [['spending', 'consumption'], ['falls', 'decreases', 'lower']] }] } },
  ] },
  { id: 'econ-ex-3-2', subtopicId: 'econ-3-2', number: 5, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Two major supermarket chains propose a horizontal merger.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Discuss ONE potential benefit and ONE potential drawback of this merger for consumers.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Benefit: the larger firm can gain purchasing/bulk-buying economies of scale, lowering average cost per unit and potentially lowering prices. Drawback: reduced competition increases monopoly power, risking higher prices, less choice, or diseconomies of scale.', markPoints: [{ id: 'mp1', markDescription: 'Economies of scale lowering average cost', requiredKeywordGroups: [['economies of scale', 'bulk', 'average cost']] }, { id: 'mp2', markDescription: 'Lower competition / monopoly power', requiredKeywordGroups: [['monopoly', 'less competition', 'market power']] }, { id: 'mp3', markDescription: 'Higher prices / less choice / diseconomies', requiredKeywordGroups: [['higher price', 'less choice', 'diseconomies']] }] } },
  ] },
  { id: 'econ-ex-4-1', subtopicId: 'econ-4-1', number: 6, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] An economy faces 8% inflation alongside low unemployment of 3.5%.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how contractionary monetary policy could reduce inflation and identify ONE resulting macroeconomic conflict.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Raising interest rates lowers consumer spending and business investment, reducing aggregate demand and curbing demand-pull inflation. However, lower total demand slows economic growth and risks raising cyclical unemployment.', markPoints: [{ id: 'mp1', markDescription: 'Raise interest rates to cut spending/investment', requiredKeywordGroups: [['raise', 'higher'], ['interest rate']] }, { id: 'mp2', markDescription: 'Lower aggregate demand cuts demand-pull inflation', requiredKeywordGroups: [['demand'], ['inflation']] }, { id: 'mp3', markDescription: 'Conflict: slower growth / higher unemployment', requiredKeywordGroups: [['unemployment', 'slower growth', 'recession']] }] } },
  ] },
  { id: 'econ-ex-4-2', subtopicId: 'econ-4-2', number: 7, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country Z reports 6% annual real GDP growth, yet its Human Development Index (HDI) rank barely improves.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain TWO reasons why rising real GDP may fail to improve living standards for the average citizen.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: '1) Income inequality may mean growth benefits only a wealthy minority while poverty remains high; 2) Rapid industrial growth may cause air/water pollution, longer working hours, or fail to fund healthcare (life expectancy) and schooling.', markPoints: [{ id: 'mp1', markDescription: 'Income inequality / uneven distribution', requiredKeywordGroups: [['inequality', 'distribution', 'rich', 'poor']] }, { id: 'mp2', markDescription: 'Pollution / environment / working hours', requiredKeywordGroups: [['pollution', 'environment', 'hours', 'stress', 'healthcare', 'education']] }, { id: 'mp3', markDescription: 'Links to HDI / life expectancy / schooling', requiredKeywordGroups: [['hdi', 'life expectancy', 'education', 'schooling', 'health']] }] } },
  ] },
  { id: 'econ-ex-5-1', subtopicId: 'econ-5-1', number: 8, stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] A country’s currency depreciates by 15% on foreign exchange markets.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Analyse how this depreciation could improve the current account balance AND explain ONE inflation risk.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'By WPIDEC, a weaker currency makes exports cheaper abroad (boosting export sales) and imports dearer at home (cutting import demand), narrowing a current account deficit. However, dearer imported raw materials and fuel increase firm costs, risking cost-push inflation.', markPoints: [{ id: 'mp1', markDescription: 'Exports cheaper & imports dearer (WPIDEC)', requiredKeywordGroups: [['export'], ['cheaper'], ['import'], ['dearer', 'more expensive']] }, { id: 'mp2', markDescription: 'Improves trade/current account balance', requiredKeywordGroups: [['current account', 'deficit', 'trade balance']] }, { id: 'mp3', markDescription: 'Risk of imported cost-push inflation', requiredKeywordGroups: [['cost-push', 'inflation'], ['raw material', 'import', 'cost']] }] } },
  ] },
];

export const ECONOMICS_PAST_PAPERS: PastPaperDoc[] = [
  { id: 'econ-pp-2024-p1', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Economics (0455) Paper 1 (MCQ) — May/June 2024', tier: 'Core', series: 'May/June', paperCode: '0455/12', durationMinutes: 45, totalMarks: 30, sampleQuestions: [{ number: 'Q1', question: 'Identify which factor shifts a PPC outward vs moving along it.', marks: 1, markScheme: ['Technology/education shifts PPC outward; reallocating resources moves along it.'] }] },
  { id: 'econ-pp-2024-p2', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Economics (0455) Paper 2 (Structured Questions) — May/June 2024', tier: 'Core', series: 'May/June', paperCode: '0455/22', durationMinutes: 135, totalMarks: 90, sampleQuestions: [{ number: 'Q1', question: 'Discuss whether a government should impose heavy indirect taxes on sugary drinks.', marks: 8, markScheme: ['Demerit good/externalities + tax revenue vs regressive burden + inelastic PED limits fall in Q.'] }] },
  { id: 'econ-pp-2023n-p1', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Economics (0455) Paper 1 (MCQ) — Oct/Nov 2023', tier: 'Core', series: 'Oct/Nov', paperCode: '0455/12', durationMinutes: 45, totalMarks: 30, sampleQuestions: [{ number: 'Q1', question: 'Calculate PED and predict revenue change after a 20% price rise.', marks: 1, markScheme: ['Inelastic PED (−0.5) raises Total Revenue.'] }] },
  { id: 'econ-pp-2023n-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Economics (0455) Paper 2 (Structured Questions) — Oct/Nov 2023', tier: 'Core', series: 'Oct/Nov', paperCode: '0455/22', durationMinutes: 135, totalMarks: 90, sampleQuestions: [{ number: 'Q1', question: 'Discuss whether a currency depreciation always benefits an economy.', marks: 8, markScheme: ['WPIDEC export boost & jobs vs imported cost-push inflation and PED dependence.'] }] },
  { id: 'econ-pp-2023-p1', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Economics (0455) Paper 1 (MCQ) — May/June 2023', tier: 'Core', series: 'May/June', paperCode: '0455/12', durationMinutes: 45, totalMarks: 30, sampleQuestions: [{ number: 'Q1', question: 'Distinguish structural unemployment from cyclical unemployment.', marks: 1, markScheme: ['Structural = skills/industry mismatch; Cyclical = recession/low AD.'] }] },
  { id: 'econ-pp-2023-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Economics (0455) Paper 2 (Structured Questions) — May/June 2023', tier: 'Core', series: 'May/June', paperCode: '0455/22', durationMinutes: 135, totalMarks: 90, sampleQuestions: [{ number: 'Q1', question: 'Discuss whether mergers between large firms benefit consumers.', marks: 8, markScheme: ['Economies of scale/R&D vs monopoly pricing/reduced choice/diseconomies.'] }] },
];

export const ECONOMICS_KEY_TERMS: KeyTermEntry[] = [
  { id: 'econ-kt-1', term: 'Opportunity Cost', definition: 'Next best alternative foregone when making an economic choice.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-2', term: 'Production Possibility Curve', definition: 'Maximum output combinations of two goods using available resources.', topicNumber: 1, subtopicId: 'econ-1-1', subtopicCode: '1.1' },
  { id: 'econ-kt-3', term: 'Market Equilibrium', definition: 'Price where quantity demanded equals quantity supplied.', topicNumber: 2, subtopicId: 'econ-2-1', subtopicCode: '2.1' },
  { id: 'econ-kt-4', term: 'Price Elasticity of Demand', definition: 'Responsiveness of quantity demanded to a change in price (%ΔQd ÷ %ΔP).', topicNumber: 2, subtopicId: 'econ-2-2', subtopicCode: '2.2' },
  { id: 'econ-kt-5', term: 'Market Failure', definition: 'Inefficient resource allocation by the free market (externalities, public goods).', topicNumber: 2, subtopicId: 'econ-2-2', subtopicCode: '2.2' },
  { id: 'econ-kt-6', term: 'Central Bank', definition: 'National bank issuing currency, setting interest rates, and acting as lender of last resort.', topicNumber: 3, subtopicId: 'econ-3-1', subtopicCode: '3.1' },
  { id: 'econ-kt-7', term: 'Economies of Scale', definition: 'Falling long-run average cost per unit as a firm’s scale of output increases.', topicNumber: 3, subtopicId: 'econ-3-2', subtopicCode: '3.2' },
  { id: 'econ-kt-8', term: 'Monopoly', definition: 'Single dominant seller shielded by high barriers to entry.', topicNumber: 3, subtopicId: 'econ-3-2', subtopicCode: '3.2' },
  { id: 'econ-kt-9', term: 'Fiscal Policy', definition: 'Use of government spending and taxation to steer macroeconomic activity.', topicNumber: 4, subtopicId: 'econ-4-1', subtopicCode: '4.1' },
  { id: 'econ-kt-10', term: 'Monetary Policy', definition: 'Central bank control of interest rates and money supply.', topicNumber: 4, subtopicId: 'econ-4-1', subtopicCode: '4.1' },
  { id: 'econ-kt-11', term: 'Supply-Side Policy', definition: 'Measures boosting long-run productive capacity and efficiency (shifting PPC outward).', topicNumber: 4, subtopicId: 'econ-4-1', subtopicCode: '4.1' },
  { id: 'econ-kt-12', term: 'Inflation', definition: 'Sustained rise in the general price level measured by CPI.', topicNumber: 4, subtopicId: 'econ-4-2', subtopicCode: '4.2' },
  { id: 'econ-kt-13', term: 'Tariff', definition: 'Import tax raising foreign goods’ prices to shield domestic firms.', topicNumber: 5, subtopicId: 'econ-5-1', subtopicCode: '5.1' },
  { id: 'econ-kt-14', term: 'Current Account', definition: 'Balance of Payments section covering trade in goods, services, primary, and secondary income.', topicNumber: 5, subtopicId: 'econ-5-1', subtopicCode: '5.1' },
];
