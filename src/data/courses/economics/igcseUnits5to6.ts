import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ECON_TOPICS_5_TO_6: TopicDefinition[] = [
  {
    number: 5,
    title: 'Economic Development',
    subtopics: [
      {
        id: 'econ-5-1',
        code: '5.1',
        slug: '5.1-living-standards-real-gdp-per-head-hdi',
        title: 'Living Standards: Real GDP per Head & Human Development Index (HDI)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-5-2',
        code: '5.2',
        slug: '5.2-poverty-absolute-relative-alleviation',
        title: 'Poverty: Absolute vs Relative Poverty & Alleviation Policies',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-5-3',
        code: '5.3',
        slug: '5.3-population-growth-age-structure-dependency',
        title: 'Population: Growth, Age Structure, Ageing & Dependency Ratios',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-5-4',
        code: '5.4',
        slug: '5.4-differences-in-economic-development',
        title: 'Differences in Economic Development Between Countries',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'International Trade & Globalisation',
    subtopics: [
      {
        id: 'econ-6-1',
        code: '6.1',
        slug: '6.1-international-specialisation-and-free-trade',
        title: 'International Specialisation & Free Trade',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'econ-6-2',
        code: '6.2',
        slug: '6.2-globalisation-mncs-trade-protectionism',
        title: 'Globalisation, Multinational Corporations (MNCs) & Protectionism',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-6-3',
        code: '6.3',
        slug: '6.3-foreign-exchange-rates-spiced-wpidec',
        title: 'Foreign Exchange Rates: Floating, Fixed & SPICED/WPIDEC',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'econ-6-4',
        code: '6.4',
        slug: '6.4-current-account-balance-of-payments',
        title: 'Current Account of the Balance of Payments: Structure & Policies',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const ECON_NOTES_5_TO_6: Record<string, NoteLesson> = {
  'econ-5-1': {
    subtopicId: 'econ-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Living Standards: Real GDP per Head & Human Development Index (HDI)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 5.1 Economic development (Updated for 2027 syllabus)',
    youtubeId: 'Qp5LEGLavKQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Real GDP per Head & Its Limitations as a Welfare Gauge', cardId: 'econ-5-1-c1' },
      { time: '3:50', seconds: 230, label: 'Human Development Index (HDI): Three Core Dimensions', cardId: 'econ-5-1-c2' },
      { time: '7:40', seconds: 460, label: 'Comparing Living Standards Across Countries & Over Time', cardId: 'econ-5-1-c3' },
    ],
    cards: [
      {
        id: 'econ-5-1-c1',
        title: 'Real GDP per Head & Why Income Alone Is Incomplete',
        summary: 'Real GDP per head tracks average inflation-adjusted income, yet omits income inequality, unpaid work, working hours, and environmental quality.',
        bullets: [
          '**Real GDP per head** - `Real GDP ÷ Population`; a rising figure signals higher average capacity to buy food, housing, and services.',
          '**Income distribution blind spot** - an oil-rich country with high average GDP per head can still leave 40% of households in hardship if wealth concentrates in an elite.',
          '**Non-market & quality omissions** - excludes unpaid childcare/subsistence farming, the informal shadow economy, longer stressful working hours, crime, and industrial air pollution.',
        ],
        subsections: [
          {
            heading: 'Output Composition Matters Too',
            bullets: [
              'If extra GDP comes mainly from military weapons rather than hospitals, schools, and clean water, everyday household living standards barely improve.',
            ],
            exampleHeading: 'Worked calculation: Comparing two nations',
            examples: [
              'Country A has Real GDP = $120bn and 10m citizens ($12,000 per head); Country B has Real GDP = $200bn and 40m citizens ($5,000 per head). Country A enjoys 2.4× higher average income despite smaller total GDP.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'living standards', definition: 'Overall material and non-material quality of life enjoyed by households in a country.' },
          { term: 'informal economy', definition: 'Unrecorded economic activity (cash-in-hand work, subsistence farming) omitted from official GDP.' },
        ],
      },
      {
        id: 'econ-5-1-c2',
        title: 'The Human Development Index (HDI)',
        summary: 'The UN Human Development Index scores countries from 0 to 1 by combining income per head, life expectancy, and years of schooling.',
        bullets: [
          '**1. Standard of living (Income)** - Gross National Income (GNI) per head adjusted for Purchasing Power Parity (PPP $), capturing real local buying power.',
          '**2. Health (Longevity)** - **life expectancy at birth**, reflecting nutrition, clean water, sanitation, and healthcare access.',
          '**3. Education (Knowledge)** - **mean years of schooling** (adults) and **expected years of schooling** (children entering school).',
        ],
        subsections: [
          {
            heading: 'Strengths & Limitations of HDI',
            bullets: [
              '**Strengths**: broader composite indicator than GDP alone; highlights countries with strong healthcare/education relative to income.',
              '**Limitations**: still omits income inequality within a country, political freedoms, gender gaps, environmental sustainability, and school quality (years ≠ exam proficiency).',
            ],
            exampleHeading: 'Concrete check: HDI scale interpretation',
            examples: [
              'An HDI of 0.94 (e.g. Switzerland/Norway) signals very high human development (~83-year life expectancy, ~14 years schooling), whereas an HDI of 0.48 signals severe development gaps.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Human Development Index (HDI)', definition: 'UN composite index (0 to 1) measuring GNI per head (PPP), life expectancy, and mean/expected years of schooling.' },
        ],
        memoryAid: 'HDI = H-E-I → Health (life expectancy), Education (mean + expected schooling), Income (GNI per head PPP).',
      },
      {
        id: 'econ-5-1-c3',
        title: 'Why Living Standards Differ Within & Between Countries',
        summary: 'Differences in productivity, capital stock, healthcare, institutions, and purchasing power drive wide disparities in welfare.',
        bullets: [
          '**Purchasing Power Parity (PPP)** - adjusts international income comparisons because $10 buys far more haircuts and groceries in Vietnam than in Switzerland.',
          '**Regional & income divides** - urban financial hubs often enjoy far higher wages, hospitals, and broadband than remote rural districts inside the exact same country.',
          '**Supplementary indicators** - literacy rates, infant mortality, access to clean water, Gini coefficient (inequality), and carbon footprint complement GDP and HDI.',
        ],
        subsections: [
          {
            heading: 'Exam Technique on Living-Standard Evaluation',
            bullets: [
              'Always verify whether a question asks about **total Real GDP**, **Real GDP per head**, or **HDI**—and evaluate using distribution, leisure, pollution, and informal output.',
            ],
            exampleHeading: 'Worked PPP check: Why exchange rates mislead',
            examples: [
              'If Country X’s GDP per head is $4,000 at market exchange rates, but local prices are 50% lower than US prices, its PPP-adjusted purchasing power is $8,000 ($4,000 ÷ 0.50).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Purchasing Power Parity (PPP)', definition: 'Exchange-rate adjustment equalising the local cost of a standard basket of goods across countries.' },
        ],
        commonMistake: 'Students often claim HDI includes "happiness" or "unemployment" or "pollution". Stick strictly to the THREE official components: GNI per head (PPP), life expectancy, and mean/expected years of schooling.',
      },
    ],
    keyTerms: [
      { term: 'Living Standards', definition: 'Material consumption and broader health, education, and environmental well-being of citizens.' },
      { term: 'Human Development Index (HDI)', definition: 'UN index combining GNI per head (PPP), life expectancy, and schooling years on a 0–1 scale.' },
      { term: 'Real GDP per Head', definition: 'Inflation-adjusted national output divided by total population.' },
      { term: 'Purchasing Power Parity (PPP)', definition: 'Adjustment accounting for cost-of-living differences when comparing incomes across nations.' },
      { term: 'Informal Economy', definition: 'Unreported production and subsistence output missing from official GDP totals.' },
    ],
    checklistPoints: [
      'Explain at least four limitations of using Real GDP per head alone to compare living standards.',
      'Name all three exact HDI dimensions and two limitations of HDI.',
      'Explain why PPP adjustments improve international living-standard comparisons.',
    ],
  },

  'econ-5-2': {
    subtopicId: 'econ-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Poverty: Absolute vs Relative Poverty & Alleviation Policies',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 5.2 Poverty (Updated for 2027 syllabus)',
    youtubeId: '12M4Pn7bChw',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Absolute Poverty vs Relative Poverty Definitions', cardId: 'econ-5-2-c1' },
      { time: '3:40', seconds: 220, label: 'Root Causes of Poverty & The Vicious Cycle of Poverty', cardId: 'econ-5-2-c2' },
      { time: '7:25', seconds: 445, label: 'Government & International Policies to Alleviate Poverty', cardId: 'econ-5-2-c3' },
    ],
    cards: [
      {
        id: 'econ-5-2-c1',
        title: 'Absolute Poverty vs Relative Poverty',
        summary: 'Absolute poverty means lacking bare essentials for survival, whereas relative poverty means falling well below a society’s typical living standard.',
        bullets: [
          '**Absolute poverty** - inability to afford basic human necessities (nutritious food, clean water, basic shelter, primary healthcare); internationally benchmarked by the World Bank at **$2.15/day (PPP)**.',
          '**Relative poverty** - living significantly below a country’s average income (commonly defined as **< 60% of national median household income**), causing social exclusion even if survival needs are met.',
          '**Why relative poverty persists** - rapid economic growth can virtually eradicate absolute poverty yet leave relative poverty unchanged or wider if rich incomes rise faster than median incomes.',
        ],
        subsections: [
          {
            heading: 'Numeric Comparison of Poverty Thresholds',
            bullets: [
              'Absolute poverty uses a fixed survival threshold; relative poverty moves upward automatically whenever median national income rises.',
            ],
            exampleHeading: 'Worked calculation: Relative poverty line',
            examples: [
              'In a developed economy where median household income is $40,000/year, the 60% relative poverty threshold is $24,000/year ($40,000 × 0.60)—far above the $2.15/day (~$785/year) absolute line.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'absolute poverty', definition: 'Condition where household income cannot cover basic survival needs such as food, clean water, and shelter.' },
          { term: 'relative poverty', definition: 'Condition where household income falls far below the national median, preventing normal participation in society.' },
        ],
      },
      {
        id: 'econ-5-2-c2',
        title: 'Causes of Poverty & The Vicious Cycle',
        summary: 'Low education, unemployment, poor health, low savings, and weak infrastructure reinforce each other across generations.',
        bullets: [
          '**Labour-market causes** - long-term unemployment, low wages in informal/agricultural jobs, poor literacy/skills, and lack of vocational qualifications.',
          '**Demographic & health causes** - high dependency ratios (large families with few earners), malnutrition, preventable disease, and old age without pensions.',
          '**The poverty trap (vicious cycle)** - low income → low saving → low investment in capital & education → low productivity → continued low income.',
        ],
        subsections: [
          {
            heading: 'Macro & Structural Triggers',
            bullets: [
              'High inflation erodes real wages of poor households; civil conflict, corruption, and climate shocks destroy farmland and livelihoods.',
            ],
            exampleHeading: 'Concrete check: Breaking the cycle',
            examples: [
              'If a rural household earns $900/year and spends 95% ($855) on food, it saves just $45—too little to pay school fees or buy irrigation pumps without microfinance or state schooling.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'poverty cycle', definition: 'Self-reinforcing spiral where low incomes limit savings, education, and investment, perpetuating low productivity.' },
        ],
        memoryAid: 'Low Income → Low Saving → Low Investment/Skills → Low Productivity → Low Income!',
      },
      {
        id: 'econ-5-2-c3',
        title: 'Policies to Alleviate Poverty & Inequality',
        summary: 'Effective poverty reduction pairs immediate progressive welfare support with long-run education, job creation, and sustainable growth.',
        bullets: [
          '**Promoting sustainable economic growth** - creates formal jobs and raises government tax receipts to finance public services.',
          '**Education, healthcare & skills investment** - raises human capital, employability, and future earning power, breaking intergenerational poverty permanently.',
          '**Progressive taxes & targeted welfare benefits** - taxing higher incomes more heavily funds means-tested child allowances, pensions, and food vouchers; however, overly generous benefits risk creating an unemployment trap.',
          '**National minimum wage & microfinance/foreign aid** - lifts working-poor pay (unless set too high causing layoffs), while micro-loans and targeted development aid fund rural enterprise and clean water.',
        ],
        subsections: [
          {
            heading: 'Evaluating Trade-Offs in Anti-Poverty Policies',
            bullets: [
              'Cash transfers cut poverty immediately but strain budgets; education takes 10+ years to lift wages but builds lasting self-reliance.',
            ],
            exampleHeading: 'Worked progressive transfer check',
            examples: [
              'Raising the income-tax threshold by $3,000 saves a low-income worker paying 20% tax an extra $600/year while increasing their incentive to stay in formal work.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'means-tested benefit', definition: 'State financial assistance paid strictly to households whose income falls below a specified threshold.' },
        ],
        commonMistake: 'Do not say "developed countries have no poverty". Developed countries have very little ABSOLUTE poverty, yet often still experience substantial RELATIVE poverty.',
      },
    ],
    keyTerms: [
      { term: 'Absolute Poverty', definition: 'Inability to afford essential survival needs (food, water, shelter, basic health).' },
      { term: 'Relative Poverty', definition: 'Having income substantially below a nation’s average/median living standard.' },
      { term: 'Vicious Cycle of Poverty', definition: 'Self-perpetuating loop of low income, low saving, low investment, and low productivity.' },
      { term: 'Progressive Taxation', definition: 'Tax system charging higher percentage rates on higher incomes to fund redistribution.' },
      { term: 'Means-Tested Benefits', definition: 'Welfare payments targeted specifically at low-income households.' },
    ],
    checklistPoints: [
      'Distinguish absolute poverty from relative poverty with clear numeric benchmarks.',
      'Trace every link in the vicious cycle of poverty.',
      'Evaluate at least four policies to reduce poverty (growth, education, progressive tax/benefits, minimum wage, aid).',
    ],
  },

  'econ-5-3': {
    subtopicId: 'econ-5-3',
    subtopicCode: '5.3',
    subtopicTitle: 'Population: Growth, Age Structure, Ageing & Dependency Ratios',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 5.3 Population (Updated for 2027 syllabus)',
    youtubeId: 'F33bp3LCb0E',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Birth Rates, Death Rates & Net Migration Drivers', cardId: 'econ-5-3-c1' },
      { time: '3:55', seconds: 235, label: 'Population Pyramids, Dependency Ratio & Optimum Population', cardId: 'econ-5-3-c2' },
      { time: '7:55', seconds: 475, label: 'Economic Consequences of Rapid Growth vs Ageing Populations', cardId: 'econ-5-3-c3' },
    ],
    cards: [
      {
        id: 'econ-5-3-c1',
        title: 'Factors Affecting Population Growth',
        summary: 'Population size changes through natural increase (birth rate minus death rate) plus net migration (immigration minus emigration).',
        bullets: [
          '**Birth rate** - live births per 1,000 people/year; falls as female education/careers expand, child mortality drops, contraception spreads, and urban child-rearing costs rise.',
          '**Death rate** - deaths per 1,000 people/year; falls steeply with clean drinking water, vaccines, modern hospitals, antibiotics, and better nutrition.',
          '**Net migration** - `Immigrants − Emigrants`; positive net migration of working-age migrants expands labour supply and fills skill shortages, while emigration of doctors/engineers ("brain drain") hurts developing nations.',
        ],
        subsections: [
          {
            heading: 'Natural Rate of Increase Formula',
            bullets: [
              '`Population Change = (Births − Deaths) + (Immigrants − Emigrants)`.',
            ],
            exampleHeading: 'Worked calculation: Annual population change',
            examples: [
              'If a country of 10 million has a birth rate of 14/1,000 (140,000 births), a death rate of 9/1,000 (90,000 deaths), and net migration of +30,000, population grows by 50,000 + 30,000 = +80,000 (+0.8%).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'net migration', definition: 'Difference between the number of immigrants entering a country and emigrants leaving it over a year.' },
          { term: 'birth rate', definition: 'Number of live births per 1,000 of the population in a given year.' },
        ],
      },
      {
        id: 'econ-5-3-c2',
        title: 'Population Structure, Dependency Ratio & Optimum Population',
        summary: 'Age pyramids distinguish youthful high-birth developing nations from ageing developed nations and determine the fiscal dependency burden.',
        bullets: [
          '**Dependency ratio** - ratio of economically dependent age groups (children 0–15 + retired 65+) to the working-age population (16–64): `(Dependents ÷ Working-Age) × 100`.',
          '**Developing pyramid (wide base)** - high birth rate, lower life expectancy → large youth dependency requiring heavy investment in schools and future job creation.',
          '**Developed pyramid (narrow base, wide top)** - low birth rate, long life expectancy → ageing population requiring rising state pensions and elder-care spending.',
          '**Optimum population** - population size that maximises **Real GDP per head** given current natural resources and technology (under-population misses scale economies; over-population causes overcrowding/diminishing returns).',
        ],
        subsections: [
          {
            heading: 'Calculating the Dependency Ratio',
            bullets: [
              'A rising dependency ratio means fewer working taxpayers must fund schools, healthcare, and pensions for more non-working dependents.',
            ],
            exampleHeading: 'Worked calculation: Dependency ratio',
            examples: [
              'If a nation has 8m children, 12m retirees (20m total dependents), and 32m working-age adults, its dependency ratio = (20 ÷ 32) × 100 = 62.5 dependents per 100 working-age citizens.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dependency ratio', definition: 'Number of non-working-age dependents (youth and elderly) per 100 people of working age.' },
          { term: 'optimum population', definition: 'Population size that combines with existing land and capital to maximise output per head.' },
        ],
        memoryAid: 'Dependents = Youth (0–15) + Elderly (65+); Optimum Population = Peak Output per Head!',
      },
      {
        id: 'econ-5-3-c3',
        title: 'Consequences of Rapid Population Growth vs Ageing Populations',
        summary: 'Rapid growth can stretch schools and jobs unless matched by investment, whereas ageing societies face shrinking workforces and rising pension bills.',
        bullets: [
          '**Rapid population growth** - expands future labour force and domestic market size (demographic dividend if educated), yet strains housing, clean water, healthcare, farmland, and youth unemployment if capital lags.',
          '**Ageing population (e.g. Japan, Italy)** - shrinking tax-paying workforce, higher government spending on pensions/hospitals, lower occupational mobility, and rising demand for healthcare/leisure services.',
          '**Policy responses to ageing** - raise the statutory retirement age (e.g. 65 → 68), encourage private pension saving, subsidise childcare to lift birth rates, invest in automation, and attract skilled immigration.',
        ],
        subsections: [
          {
            heading: 'Evaluating Skilled Immigration',
            bullets: [
              'Skilled working-age migrants immediately lower the dependency ratio, fill NHS/engineering vacancies, and pay income taxes, though rapid inflows can pressure local housing and school capacity.',
            ],
            exampleHeading: 'Concrete check: Raising retirement age',
            examples: [
              'Raising retirement age from 65 to 67 keeps 600,000 experienced workers paying taxes for two more years while trimming annual state pension outlays by $6bn.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ageing population', definition: 'Demographic shift where the average age and share of citizens aged 65+ rise steadily.' },
        ],
        commonMistake: 'Do NOT assume a growing population is always bad! If a country is UNDER-populated, population growth enables greater specialisation, larger domestic markets, and rising output per head.',
      },
    ],
    keyTerms: [
      { term: 'Birth Rate', definition: 'Live births per 1,000 people per year.' },
      { term: 'Death Rate', definition: 'Deaths per 1,000 people per year.' },
      { term: 'Net Migration', definition: 'Immigrants minus emigrants over a specified period.' },
      { term: 'Dependency Ratio', definition: 'Ratio of youth and elderly dependents to the working-age population.' },
      { term: 'Optimum Population', definition: 'Population size yielding the highest possible output per head.' },
    ],
    checklistPoints: [
      'Explain the main social and economic drivers of birth rates, death rates, and net migration.',
      'Calculate a dependency ratio and distinguish under-population, optimum population, and over-population.',
      'Analyse fiscal and labour-market effects of an ageing population and recommend three policies.',
    ],
  },

  'econ-5-4': {
    subtopicId: 'econ-5-4',
    subtopicCode: '5.4',
    subtopicTitle: 'Differences in Economic Development Between Countries',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 5.4 Differences in economic development (Updated for 2027 syllabus)',
    youtubeId: 'ZyKAkzm1wGo',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Growth vs Development & Structural Characteristics', cardId: 'econ-5-4-c1' },
      { time: '3:50', seconds: 230, label: 'Why Development Gaps Persist: Productivity, Capital & Sectors', cardId: 'econ-5-4-c2' },
      { time: '7:40', seconds: 460, label: 'Strategies to Accelerate Economic Development', cardId: 'econ-5-4-c3' },
    ],
    cards: [
      {
        id: 'econ-5-4-c1',
        title: 'Economic Growth vs Economic Development',
        summary: 'Economic growth measures rising real GDP, whereas economic development captures broader improvements in health, education, institutions, and freedom.',
        bullets: [
          '**Economic growth (quantitative)** - increase in real GDP output; necessary to generate resources, but not sufficient on its own for widespread welfare.',
          '**Economic development (multidimensional)** - sustained progress in living standards, literacy, life expectancy, gender equality, infrastructure, and poverty reduction.',
          '**Six classic development divides** - income per head, labour productivity, population growth/age structure, sectoral share (primary vs secondary/tertiary), saving & investment ratios, and healthcare/education access.',
        ],
        subsections: [
          {
            heading: 'Primary-Sector Dependency Vulnerability',
            bullets: [
              'Low-income economies relying on 1–2 unprocessed primary exports (e.g. cocoa, copper) suffer volatile global prices and lower value-added than nations exporting semiconductors or financial services.',
            ],
            exampleHeading: 'Worked comparison: Export value added',
            examples: [
              'Exporting 1 tonne of raw cocoa beans earns roughly $3,000, whereas processing that cocoa into branded luxury chocolate bars in Europe generates $18,000+ in sales—6× higher added value.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'economic development', definition: 'Broad improvement in human welfare, education, health, income security, and institutional quality.' },
          { term: 'primary-product dependency', definition: 'Heavy reliance on exporting unprocessed agricultural or mineral commodities with volatile prices.' },
        ],
      },
      {
        id: 'econ-5-4-c2',
        title: 'Key Drivers Behind Cross-Country Development Gaps',
        summary: 'Human capital, physical infrastructure, domestic savings, political stability, and technological adoption separate high- and low-income nations.',
        bullets: [
          '**Productivity & capital stock** - workers equipped with reliable electricity, paved roads, automated factories, and digital networks produce far higher output per hour.',
          '**Savings & investment gap** - low incomes restrict household savings, starving local banks of funds needed to lend for domestic factories and roads (Harrod-Domar intuition).',
          '**Education & healthcare** - high literacy and low preventable disease directly raise worker efficiency and attract high-skill foreign direct investment (FDI).',
          '**Institutions & geography** - secure property rights, independent courts, low corruption, and deep-water coastal ports lower business risk and trade costs.',
        ],
        subsections: [
          {
            heading: 'Role of Population Growth in Development',
            bullets: [
              'If population grows at 3.0% per year while Real GDP grows at 2.5%, capital per worker is diluted and Real GDP per head shrinks by ~0.5% annually.',
            ],
            exampleHeading: 'Worked calculation: Investment ratio gap',
            examples: [
              'An emerging economy saving and investing 30% of GDP ($60bn out of $200bn) builds factories and power grids 3× faster than a country investing just 10% ($20bn out of $200bn).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Foreign Direct Investment (FDI)', definition: 'Long-term investment by a multinational firm building factories, offices, or infrastructure in another country.' },
        ],
        memoryAid: 'P-I-S-H-I: Productivity, Infrastructure, Savings/Investment, Health/Education, Institutions.',
      },
      {
        id: 'econ-5-4-c3',
        title: 'Strategies to Promote Economic Development',
        summary: 'Countries accelerate development via export diversification, human-capital investment, FDI attraction, fair trade, and well-targeted international aid.',
        bullets: [
          '**Diversification & industrialisation** - moving up the value chain from raw crops/minerals into food processing, manufacturing, tourism, and digital services stabilises export earnings.',
          '**Attracting FDI (MNCs)** - brings modern technology, management training, export access, and tax revenues, though governments must safeguard labour/environmental standards and avoid profit-repatriation drains.',
          '**Education, clean water & microfinance** - empowering female education lowers birth rates, boosts workforce participation, and raises next-generation health.',
          '**International aid & debt relief** - humanitarian and project aid funds clinics and roads without commercial debt interest, yet poor governance or tied aid can foster dependency.',
        ],
        subsections: [
          {
            heading: 'Evaluating Aid vs Trade',
            bullets: [
              'Removing rich-country agricultural tariffs ("trade not aid") lets developing exporters earn self-sustaining foreign exchange, whereas emergency aid remains vital after droughts or conflicts.',
            ],
            exampleHeading: 'Concrete check: Export diversification',
            examples: [
              'Vietnam shifted from 70% agricultural employment in 1990 to a major electronics and textile exporter, lifting HDI from 0.48 to over 0.72 and slashing absolute poverty below 2%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'economic diversification', definition: 'Expanding an economy across multiple industries and export sectors to reduce vulnerability to single-commodity shocks.' },
        ],
        commonMistake: 'Never treat "developing countries" as identical—compare specific metrics (HDI, primary-sector share, literacy, productivity, infrastructure) rather than sweeping stereotypes.',
      },
    ],
    keyTerms: [
      { term: 'Economic Development', definition: 'Sustained rise in multidimensional well-being across income, health, education, and equity.' },
      { term: 'Primary-Product Dependency', definition: 'Over-reliance on exporting unprocessed agricultural or mineral commodities.' },
      { term: 'Foreign Direct Investment (FDI)', definition: 'Physical capital investment by multinational corporations into a host country.' },
      { term: 'Diversification', definition: 'Broadening output and exports across manufacturing and services to stabilise growth.' },
      { term: 'Development Aid', definition: 'Financial grants, concessional loans, or technical expertise transferred to support lower-income nations.' },
    ],
    checklistPoints: [
      'Distinguish quantitative economic growth from multidimensional economic development.',
      'Explain six economic factors causing development differences across countries.',
      'Evaluate FDI, export diversification, education, and international aid as development strategies.',
    ],
  },

  'econ-6-1': {
    subtopicId: 'econ-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'International Specialisation & Free Trade',
    readingMinutes: 10,
    videoTitle: 'IGCSE Economics Chapter 6.1 Specialisation and free trade (updated for the 2027 syllabus)',
    youtubeId: 'PYcc52nSOIQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '11:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Countries Specialise: Factor Endowments & Efficiency', cardId: 'econ-6-1-c1' },
      { time: '3:45', seconds: 225, label: 'Benefits of International Specialisation & Free Trade', cardId: 'econ-6-1-c2' },
      { time: '7:35', seconds: 455, label: 'Risks of Over-Specialisation & Evaluating Free Trade', cardId: 'econ-6-1-c3' },
    ],
    cards: [
      {
        id: 'econ-6-1-c1',
        title: 'Basis for International Specialisation',
        summary: 'Countries specialise in producing goods where their climate, resources, labour skills, and technology yield the lowest opportunity cost.',
        bullets: [
          '**International specialisation** - nations concentrate resources on producing a narrower range of goods/services they make most efficiently, then export surpluses and import what rivals make cheaper.',
          '**Superior factor endowments** - tropical climate & fertile soil (Colombia coffee), abundant minerals (Australia iron ore), skilled engineering labour & capital (Germany precision machinery, Taiwan semiconductors).',
          '**Free trade** - cross-border exchange of goods and services without artificial barriers such as tariffs, quotas, or discriminatory subsidies.',
        ],
        subsections: [
          {
            heading: 'Absolute vs Comparative Advantage Intuition',
            bullets: [
              'Even when one nation can produce both goods with fewer resources, trade still benefits BOTH nations when each specialises in the product with the **lower opportunity cost**.',
            ],
            exampleHeading: 'Worked numerical trade gain',
            examples: [
              'Suppose Country A gives up 0.5 shirts to produce 1 microchip, while Country B gives up 2 shirts per microchip. Country A specialises in microchips and Country B in shirts—trading at 1 chip = 1 shirt lets BOTH consume outside their domestic PPC!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'international specialisation', definition: 'Concentration of a country’s resources on goods and services it can produce most efficiently for export.' },
          { term: 'free trade', definition: 'International exchange of goods and services unhindered by tariffs, quotas, or government barriers.' },
        ],
      },
      {
        id: 'econ-6-1-c2',
        title: 'Benefits of Specialisation & Free Trade',
        summary: 'Free trade lowers consumer prices, widens product variety, unlocks global economies of scale, and spurs domestic innovation.',
        bullets: [
          '**Lower prices & greater choice** - consumers access year-round produce and affordable imports from the world’s lowest-cost suppliers, lifting real incomes.',
          '**Economies of scale** - selling to a global market of billions instead of a small home market lets firms expand output massively and slash average unit costs.',
          '**Competition & efficiency** - foreign rivals discipline domestic monopolies, encouraging faster innovation, technology transfer, and higher global real GDP.',
        ],
        subsections: [
          {
            heading: 'Impact on Firms & Workers',
            bullets: [
              'Export-oriented firms expand output, earn foreign currency, and create skilled higher-paying jobs; importers gain cheaper raw materials and intermediate components.',
            ],
            exampleHeading: 'Worked scale gain check',
            examples: [
              'A small-nation medical device maker expanding exports from 50,000 units to 500,000 units cuts average unit cost from $80 to $48 (−40%), passing lower prices to hospitals worldwide.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'economies of scale', definition: 'Falling long-run average cost per unit as a firm scales up production for larger markets.' },
        ],
        memoryAid: 'C-E-L-G: Choice ↑, Efficiency/Competition ↑, Lower prices, Global scale economies.',
      },
      {
        id: 'econ-6-1-c3',
        title: 'Risks & Drawbacks of Over-Specialisation',
        summary: 'Relying too narrowly on one export or foreign supply chains exposes countries to structural unemployment, price shocks, and strategic vulnerability.',
        bullets: [
          '**Over-dependence & demand shocks** - if global tastes shift away from a country’s sole export (or synthetic substitutes emerge), export revenues and GDP collapse.',
          '**Resource depletion** - specialising heavily in finite oil, coal, or minerals risks economic ruin once reserves run dry unless earnings are diversified.',
          '**Structural unemployment & infant-industry threat** - domestic sectors unable to match cheap imports shut down, displacing workers who struggle to retrain; strategic shortages (food, vaccines, chips) hurt during global crises.',
        ],
        subsections: [
          {
            heading: 'Transport & Environmental Externalities',
            bullets: [
              'Shipping raw materials and finished products across oceans raises freight carbon emissions compared with local production.',
            ],
            exampleHeading: 'Concrete check: Commodity shock',
            examples: [
              'If copper accounts for 65% of Country Z’s exports and world copper prices fall 30% during a global downturn, Country Z loses ~19.5% of its export revenue overnight.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'over-specialisation', definition: 'Excessive concentration in one or two export products, leaving an economy vulnerable to demand or price shocks.' },
        ],
        commonMistake: 'In 8-mark questions on free trade, do not only list consumer benefits—always evaluate structural job losses in uncompetitive home industries and over-dependence on single commodities.',
      },
    ],
    keyTerms: [
      { term: 'International Specialisation', definition: 'Focusing national production on industries of highest relative efficiency.' },
      { term: 'Free Trade', definition: 'Unrestricted international trade free from tariffs, quotas, and trade barriers.' },
      { term: 'Factor Endowments', definition: 'Quantity and quality of land, labour, capital, and enterprise available within a country.' },
      { term: 'Over-Specialisation', definition: 'Risky over-reliance on a tiny number of export industries.' },
      { term: 'Structural Unemployment', definition: 'Job losses in domestic industries unable to compete with cheaper foreign imports.' },
    ],
    checklistPoints: [
      'Explain why differences in factor endowments and opportunity costs drive international specialisation.',
      'Analyse four benefits of free trade for consumers, firms, and global output.',
      'Evaluate four risks of over-specialisation (commodity shocks, resource depletion, job losses, supply-chain disruption).',
    ],
  },

  'econ-6-2': {
    subtopicId: 'econ-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Globalisation, Multinational Corporations (MNCs) & Protectionism',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 6.2 Globalisation and trade restrictions (Updated for 2027 syllabus)',
    youtubeId: '2Niumv8HDfQ',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Globalisation Drivers & Multinational Corporations (MNCs)', cardId: 'econ-6-2-c1' },
      { time: '4:25', seconds: 265, label: 'Methods of Trade Protectionism: Tariffs, Quotas & Subsidies', cardId: 'econ-6-2-c2' },
      { time: '8:50', seconds: 530, label: 'Arguments For & Against Trade Restrictions (Evaluation)', cardId: 'econ-6-2-c3' },
    ],
    cards: [
      {
        id: 'econ-6-2-c1',
        title: 'Globalisation & The Role of Multinational Corporations',
        summary: 'Falling transport/digital costs and trade liberalisation have knitted national markets together, led by MNCs operating across multiple countries.',
        bullets: [
          '**Globalisation** - growing economic interdependence across nations via freer flows of goods, services, capital (FDI), technology, and labour.',
          '**Multinational Corporation (MNC)** - a company that owns and operates production or service facilities in **more than one country** (merely exporting does NOT make a firm an MNC).',
          '**Benefits of MNCs to host countries** - creates formal jobs, brings FDI capital, transfers modern technology/training, boosts exports, and expands host corporate tax revenue.',
          '**Drawbacks of MNCs to host countries** - may crowd out small local firms, repatriate profits back to home headquarters, exploit weak labour/environmental laws, or relocate abruptly if wages rise.',
        ],
        subsections: [
          {
            heading: 'Why Firms Become MNCs',
            bullets: [
              'Lower wage/raw-material costs, proximity to large growing consumer markets, bypassing import tariffs inside trade blocs (e.g. EU, ASEAN), and spreading regional business risk.',
            ],
            exampleHeading: 'Concrete check: Profit repatriation',
            examples: [
              'If a foreign carmaker invests $500m in a host factory creating 4,000 jobs, yet sends 70% of its $80m annual profit ($56m) back to home shareholders, host-country net income gains are smaller than headline profits suggest.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'globalisation', definition: 'Increasing integration and interdependence of national economies through trade, capital, technology, and migration.' },
          { term: 'Multinational Corporation (MNC)', definition: 'Enterprise owning physical production or service operations in two or more countries.' },
        ],
      },
      {
        id: 'econ-6-2-c2',
        title: 'Methods of Trade Protectionism',
        summary: 'Governments restrict imports or boost domestic producers using tariffs, quotas, embargoes, export subsidies, and regulatory standards.',
        bullets: [
          '**Tariff** - a tax placed on imported goods; raises import prices, reduces import quantity, helps domestic rivals, and generates **government tax revenue**.',
          '**Quota** - a strict physical limit on the maximum volume/quantity of an import allowed per year; restricts supply sharply and raises prices, yet raises **zero tariff revenue** for the government.',
          '**Domestic / export subsidy** - state payment lowering domestic firms’ production costs so they undercut foreign rivals without directly taxing imports.',
          '**Embargo & non-tariff barriers** - total ban on trade with a country/product (embargo), strict safety/packaging rules, or excessive customs red tape.',
        ],
        subsections: [
          {
            heading: 'Tariff vs Quota Numerical Comparison',
            bullets: [
              'A tariff lets price adjust while raising treasury revenue; a quota caps physical volume rigidly.',
            ],
            exampleHeading: 'Worked calculation: Tariff revenue & price impact',
            examples: [
              'If a country imposes a 25% tariff on $400 imported steel per tonne, the landed import price rises to $500/tonne ($400 × 1.25). If 200,000 tonnes are still imported, the treasury collects $100 × 200,000 = $20 million in tariff revenue.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tariff', definition: 'Tax levied on imported goods to raise their domestic price and generate government revenue.' },
          { term: 'quota', definition: 'Physical cap on the maximum quantity of a specified good allowed to be imported.' },
        ],
        memoryAid: 'T-Q-S-E: Tariffs (tax + revenue), Quotas (quantity cap), Subsidies (cost cut), Embargoes (total ban).',
      },
      {
        id: 'econ-6-2-c3',
        title: 'Arguments For & Against Protectionism',
        summary: 'Protectionism can shield infant industries and stop dumping, yet risks foreign retaliation, higher consumer living costs, and sluggish domestic efficiency.',
        bullets: [
          '**Reasons FOR protectionism** - protect **infant (sunrise) industries** until they gain scale economies, shield declining **sunset industries** gradually to avoid mass regional unemployment, stop foreign **dumping** (selling below cost), correct a severe current account deficit, protect strategic defence/food security, and raise tariff revenue.',
          '**Reasons AGAINST protectionism** - **retaliation** (trade wars harming domestic exporters), **higher prices & cost-push inflation** for households and firms using imported components, **reduced consumer choice**, and **X-inefficiency** as sheltered domestic firms lose incentive to innovate.',
        ],
        subsections: [
          {
            heading: 'Exam Evaluation Tip on Protectionism',
            bullets: [
              'Distinguish temporary, targeted protection for a genuinely viable infant industry from permanent tariffs that merely prop up inefficient monopolies.',
            ],
            exampleHeading: 'Concrete check: Retaliatory trade war',
            examples: [
              'When Country A slaps a 30% tariff on Country B’s electric cars, Country B retaliates with a 30% tariff on Country A’s agricultural exports—shrinking jobs and raising prices in BOTH nations.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dumping', definition: 'Exporting surplus goods to a foreign market below domestic production cost to drive local rivals out of business.' },
          { term: 'infant industry', definition: 'Newly established domestic industry needing temporary protection until it achieves competitive economies of scale.' },
        ],
        commonMistake: 'Students frequently forget that tariffs raise costs for DOMESTIC MANUFACTURERS too when applied to imported steel, semiconductors, or components—causing cost-push inflation and hurting home exports!',
      },
    ],
    keyTerms: [
      { term: 'Globalisation', definition: 'Growing integration of world markets via freer trade, FDI, technology, and migration.' },
      { term: 'Multinational Corporation (MNC)', definition: 'Firm operating physical factories or service branches in more than one country.' },
      { term: 'Tariff', definition: 'Tax charged on imported goods.' },
      { term: 'Quota', definition: 'Physical limit on the volume of an imported product.' },
      { term: 'Dumping', definition: 'Selling exports abroad below unit production cost to eliminate foreign rivals.' },
    ],
    checklistPoints: [
      'Define MNC accurately and evaluate four host-country benefits vs drawbacks.',
      'Compare tariffs, quotas, subsidies, and embargoes (including government revenue effects).',
      'Weigh infant-industry and anti-dumping arguments against retaliation, inflation, and inefficiency.',
    ],
  },

  'econ-6-3': {
    subtopicId: 'econ-6-3',
    subtopicCode: '6.3',
    subtopicTitle: 'Foreign Exchange Rates: Floating, Fixed & SPICED/WPIDEC',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 6.3 Foreign exchange rates (Updated for 2027 syllabus)',
    youtubeId: 'iI2X3s1RVlc',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Exchange Rate Determination: Currency Demand & Supply', cardId: 'econ-6-3-c1' },
      { time: '4:15', seconds: 255, label: 'Appreciation vs Depreciation & SPICED / WPIDEC', cardId: 'econ-6-3-c2' },
      { time: '8:35', seconds: 515, label: 'Floating vs Fixed Exchange Rate Systems & Evaluation', cardId: 'econ-6-3-c3' },
    ],
    cards: [
      {
        id: 'econ-6-3-c1',
        title: 'How Floating Exchange Rates Are Determined',
        summary: 'A floating exchange rate is the price of one currency in terms of another, set by demand for and supply of the currency in foreign exchange markets.',
        bullets: [
          '**Demand for domestic currency** - driven by foreign buyers purchasing domestic exports, inbound tourists, foreign direct investment (FDI), and foreign savers moving **hot money** to capture higher domestic interest rates.',
          '**Supply of domestic currency** - driven by domestic consumers buying imports, citizens holidaying abroad, domestic firms investing overseas, and speculators selling the currency if inflation/political risk rises.',
          '**Equilibrium shift rule** - higher exports, higher relative interest rates, or optimism shift **Demand right** (appreciation); surging imports, lower interest rates, or pessimism shift **Supply right** (depreciation).',
        ],
        subsections: [
          {
            heading: 'Exact Terminology: Floating vs Fixed Moves',
            bullets: [
              'Under a **floating** system, a rise in currency value is **appreciation** and a fall is **depreciation**. Under a **fixed** system, official government shifts are called **revaluation** (up) and **devaluation** (down).',
            ],
            exampleHeading: 'Worked conversion: Spot rate move',
            examples: [
              'If the exchange rate changes from £1 = $1.25 to £1 = $1.50, the Pound has **appreciated** by 20% ((1.50 − 1.25) ÷ 1.25 × 100%) while the US Dollar has depreciated.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'foreign exchange rate', definition: 'Price of one nation’s currency expressed in terms of another currency.' },
          { term: 'appreciation', definition: 'Market-driven rise in the value of a floating currency against foreign currencies.' },
        ],
      },
      {
        id: 'econ-6-3-c2',
        title: 'Impact of Currency Changes: SPICED & WPIDEC',
        summary: 'Appreciation lowers import prices and inflation yet squeezes exporters, whereas depreciation boosts export competitiveness yet risks imported inflation.',
        bullets: [
          '**SPICED (Appreciation)** - **Strong Pound → Imports Cheaper, Exports Dearer**; helps households and import-reliant firms (lower cost-push inflation) yet hurts exporters and widens a trade deficit if PED is elastic.',
          '**WPIDEC (Depreciation)** - **Weak Pound → Imports Dearer, Exports Cheaper**; boosts export sales, tourism, and export-sector jobs, narrowing a trade deficit (if PED of exports + imports is elastic), yet raises imported oil/food prices (cost-push inflation).',
          '**PED caveat** - a depreciation only improves the trade balance significantly if demand for exports and imports is sufficiently **price elastic** (buyers actually switch toward cheaper domestic goods).',
        ],
        subsections: [
          {
            heading: 'Worked Pricing Proof (SPICED vs WPIDEC)',
            bullets: [
              'Always calculate both a domestic export sold abroad AND a foreign import bought at home to earn full calculation marks.',
            ],
            exampleHeading: 'Worked calculation: UK car exported to USA',
            examples: [
              'A £20,000 UK car sells in the US for $25,000 at £1 = $1.25. If the Pound appreciates to £1 = $1.50, the exact same car now costs US buyers $30,000 (+$5,000 dearer!), cutting US demand; meanwhile a $1,500 US laptop falls in the UK from £1,200 to £1,000 (−£200 cheaper!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'depreciation', definition: 'Market-driven fall in the external value of a floating currency.' },
        ],
        memoryAid: 'SPICED = Strong Pound: Imports Cheaper, Exports Dearer | WPIDEC = Weak Pound: Imports Dearer, Exports Cheaper!',
      },
      {
        id: 'econ-6-3-c3',
        title: 'Floating vs Fixed Exchange Rate Systems',
        summary: 'Floating rates self-correct trade imbalances and preserve interest-rate freedom, while fixed rates deliver business certainty at the cost of large FX reserves.',
        bullets: [
          '**Floating system advantages** - automatic adjustment of current account deficits (excess imports depreciate the currency, making exports cheaper), no need to hold huge FX reserves, and the central bank stays free to use interest rates for domestic inflation/growth.',
          '**Floating system drawbacks** - daily volatility creates uncertainty for exporters/importers planning contracts and risks speculative swings.',
          '**Fixed system (pegged by central bank buying/selling FX reserves & setting rates)** - removes currency risk for traders/FDI and enforces low-inflation discipline, yet requires vast foreign reserves and forces interest rates to defend the peg even during a home recession.',
        ],
        subsections: [
          {
            heading: 'How a Central Bank Defends a Fixed Peg',
            bullets: [
              'If market selling pushes a fixed currency below its peg, the central bank must **buy its own currency** using foreign-currency reserves and/or **raise domestic interest rates** to attract hot money.',
            ],
            exampleHeading: 'Concrete check: Defending a peg in recession',
            examples: [
              'If speculators sell Country P’s pegged currency during a downturn, raising interest rates from 3% to 9% defends the peg—but severely deepens domestic unemployment and mortgage defaults.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'floating exchange rate', definition: 'Currency value determined freely by foreign exchange market demand and supply without an official peg.' },
          { term: 'fixed exchange rate', definition: 'Currency value pegged to another currency or basket, maintained by central bank intervention.' },
        ],
        commonMistake: 'NEVER write "a strong currency makes exports cheaper"! Double-check SPICED: a STRONG currency makes exports DEARER (more expensive in foreign currency) and imports CHEAPER.',
      },
    ],
    keyTerms: [
      { term: 'Foreign Exchange Rate', definition: 'Price of one currency measured in units of another currency.' },
      { term: 'Appreciation', definition: 'Rise in a floating currency’s value due to higher demand or lower supply.' },
      { term: 'Depreciation', definition: 'Fall in a floating currency’s value due to lower demand or higher supply.' },
      { term: 'Floating Exchange Rate', definition: 'Exchange rate determined solely by market forces of demand and supply.' },
      { term: 'Fixed Exchange Rate', definition: 'Exchange rate pegged at an official value defended by the central bank.' },
    ],
    checklistPoints: [
      'Identify demand and supply factors that appreciate or depreciate a floating currency.',
      'Calculate export and import prices before and after an exchange rate move using SPICED and WPIDEC.',
      'Compare advantages and drawbacks of floating vs fixed exchange rate systems.',
    ],
  },

  'econ-6-4': {
    subtopicId: 'econ-6-4',
    subtopicCode: '6.4',
    subtopicTitle: 'Current Account of the Balance of Payments: Structure & Policies',
    readingMinutes: 11,
    videoTitle: 'IGCSE Economics Chapter 6.4 Current account (Updated for 2027 syllabus)',
    youtubeId: 'dr0T4ey0xhM',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Economics (0455, 2027 spec)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Four Components of the Current Account & Calculations', cardId: 'econ-6-4-c1' },
      { time: '4:10', seconds: 250, label: 'Causes & Consequences of Current Account Deficits & Surpluses', cardId: 'econ-6-4-c2' },
      { time: '8:20', seconds: 500, label: 'Policies to Achieve Current Account Stability & Evaluation', cardId: 'econ-6-4-c3' },
    ],
    cards: [
      {
        id: 'econ-6-4-c1',
        title: 'The Four Components of the Current Account',
        summary: 'The current account records all cross-border cash inflows (credits +) and outflows (debits −) from goods, services, investment income, and transfers.',
        bullets: [
          '**1. Trade in goods (visibles)** - export revenue minus import spending on physical merchandise (cars, oil, electronics, wheat).',
          '**2. Trade in services (invisibles)** - export earnings minus import spending on intangible services (tourism, banking, shipping, insurance, software).',
          '**3. Primary income** - net cross-border wages earned abroad plus investment income (dividends, profits, interest flowing in minus flowing out).',
          '**4. Secondary income (current transfers)** - net one-way transfers with no good/service exchanged (overseas aid, workers’ remittances, international organisation contributions).',
        ],
        subsections: [
          {
            heading: 'Calculating the Current Account Balance',
            bullets: [
              '`Current Account = Goods Balance + Services Balance + Primary Income + Secondary Income`.',
              'Positive total = **Current Account Surplus**; Negative total = **Current Account Deficit**.',
            ],
            exampleHeading: 'Worked calculation: Full four-part balance',
            examples: [
              'If Trade in Goods = −$48bn, Trade in Services = +$32bn, Primary Income = +$6bn, and Secondary Income = −$5bn, then Current Account = −48 + 32 + 6 − 5 = −$15bn (a $15bn deficit).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'current account', definition: 'Section of the balance of payments recording trade in goods, trade in services, primary income, and secondary income.' },
          { term: 'primary income', definition: 'Cross-border inflows and outflows of wages, interest, profits, and dividends.' },
        ],
        memoryAid: 'G-S-P-S: Goods, Services, Primary income (profits/wages), Secondary income (aid/remittances).',
      },
      {
        id: 'econ-6-4-c2',
        title: 'Causes & Consequences of Deficits and Surpluses',
        summary: 'Deficits stem from uncompetitive costs, overvalued currencies, or domestic booms; surpluses bring foreign reserves yet can spark inflation or protectionist anger.',
        bullets: [
          '**Causes of a Current Account Deficit** - **high domestic inflation** or **low productivity** eroding export competitiveness, an **overvalued exchange rate (SPICED)**, booming domestic consumer incomes pulling in imports, or recession in key export partner nations.',
          '**Consequences of a persistent Deficit** - net leakage from aggregate demand (slower GDP growth and export-sector job losses), downward pressure on the exchange rate, and rising foreign debt if financed by borrowing.',
          '**Causes & Consequences of a Large Surplus** - strong productivity, weak currency, or high resource exports boost AD, jobs, and FX reserves—yet can cause demand-pull inflation, currency appreciation, and complaints/tariffs from trading partners.',
        ],
        subsections: [
          {
            heading: 'When Is a Current Account Deficit NOT Alarming?',
            bullets: [
              'A temporary deficit caused by importing **capital machinery** (which expands future export capacity) or representing under 2% of GDP financed easily by stable FDI is far less risky than a consumption-fuelled 10% deficit.',
            ],
            exampleHeading: 'Concrete check: Capital imports vs Consumer imports',
            examples: [
              'Importing $10bn of wind-turbine and factory machinery widens this year’s goods deficit, yet lowers energy costs and boosts future manufactured exports over the next decade.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'current account deficit', definition: 'Situation where total outflows on goods, services, primary, and secondary income exceed total inflows.' },
        ],
      },
      {
        id: 'econ-6-4-c3',
        title: 'Policies to Reduce a Current Account Deficit',
        summary: 'Governments choose among deflationary demand cuts, currency depreciation, protectionism, or long-run supply-side competitiveness reforms.',
        bullets: [
          '**Expenditure-reducing policies (contractionary fiscal/monetary)** - higher taxes or interest rates reduce household incomes and import spending quickly, yet hurt domestic growth and raise unemployment (and higher interest rates may appreciate the currency!).',
          '**Expenditure-switching: Depreciation (WPIDEC)** - cheaper exports & dearer imports improve net trade if demand is price elastic, though risks imported cost-push inflation.',
          '**Expenditure-switching: Protectionism (tariffs/quotas)** - restricts imports immediately, yet risks trading-partner retaliation, higher consumer prices, and lower domestic efficiency.',
          '**Supply-side policies (best long-run cure)** - education, R&D, infrastructure, and innovation raise productivity and product quality, boosting non-price export competitiveness sustainably without recession (but with 5–10 year time lags).',
        ],
        subsections: [
          {
            heading: 'Exam Evaluation Verdict',
            bullets: [
              'No single short-run policy is pain-free: deflation hurts jobs, tariffs invite retaliation, and depreciation sparks inflation—making **supply-side reforms** the strongest structural solution.',
            ],
            exampleHeading: 'Worked evaluation check: Policy conflict',
            examples: [
              'Raising interest rates from 3% to 6% cools UK consumer import demand, yet simultaneously attracts hot money that appreciates the Pound (+10%), making UK exports dearer and partially offsetting the trade improvement!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'expenditure-switching policy', definition: 'Measures (like depreciation or tariffs) aimed at shifting domestic and foreign buyers away from imports toward domestic goods.' },
        ],
        commonMistake: 'NEVER confuse a Current Account Deficit (international inflows < outflows) with a Government Budget Deficit (public spending G > tax revenue T). They are completely separate accounts!',
      },
    ],
    keyTerms: [
      { term: 'Current Account', definition: 'Record of cross-border trade in goods, services, primary income, and secondary income.' },
      { term: 'Balance of Trade in Goods', definition: 'Export value of physical goods minus import value of physical goods.' },
      { term: 'Primary Income', definition: 'Net cross-border flows of wages, dividends, profits, and interest.' },
      { term: 'Secondary Income', definition: 'Net one-way current transfers such as foreign aid and migrant remittances.' },
      { term: 'Expenditure-Switching Policy', definition: 'Policy shifting spending away from imports toward domestic output (e.g. depreciation, tariffs).' },
    ],
    checklistPoints: [
      'List all four components of the current account and compute balances accurately.',
      'Explain causes and consequences of both persistent deficits and large surpluses.',
      'Evaluate fiscal/monetary deflation, depreciation, protectionism, and supply-side reforms for curing a deficit.',
    ],
  },
};

export const ECON_QUIZZES_5_TO_6: QuizQuestion[] = [
  // 5.1
  {
    id: 'econ-q-5-1-1',
    subtopicId: 'econ-5-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO official components included in the Human Development Index (HDI) alongside GNI per head (PPP):',
    options: [
      'Life expectancy at birth (health)',
      'Mean years of schooling and expected years of schooling (education)',
      'Annual national inflation rate',
      'Total national military spending',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'HDI strictly measures health (life expectancy), education (mean & expected schooling), and income (GNI per head PPP).',
  },
  {
    id: 'econ-q-5-1-2',
    subtopicId: 'econ-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Country A has Real GDP of $90bn and a population of 15 million. Calculate Real GDP per head and explain ONE reason Real GDP per head may still overstate true living standards.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Real GDP per head = $90,000m / 15m = $6,000 per person. It may overstate living standards because it ignores wide income inequality, environmental pollution, long stressful working hours, or heavy spending on weapons rather than healthcare.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates Real GDP per head = $6,000', numericMatch: { value: 6000, tolerance: 5 } },
        { id: 'mp2', markDescription: 'Identifies inequality, pollution, working hours, or non-consumer output', requiredKeywordGroups: [['inequality', 'pollution', 'working hours', 'weapons', 'environment', 'distribution']] },
      ],
    },
    explanation: '$90bn ÷ 15m = $6,000/person; averages hide inequality, pollution, and working conditions.',
  },
  {
    id: 'econ-q-5-1-3',
    subtopicId: 'econ-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why do economists use Purchasing Power Parity (PPP) exchange rates when comparing incomes across countries?',
    options: [
      'Because every country uses the exact same currency',
      'To adjust for differences in local cost of living so $1 represents equal real buying power everywhere',
      'To remove education from HDI calculations',
      'To exaggerate differences between rich and poor countries',
    ],
    correctIndex: 1,
    explanation: 'Basic goods and services cost much less in lower-income countries, so PPP captures real local buying power.',
  },
  {
    id: 'econ-q-5-1-4',
    subtopicId: 'econ-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the HDI strengths and limits:',
    segments: ['HDI ranges from 0 to 1 and improves on GDP by adding health and ', ', yet it still ignores within-country income ', ' and environmental damage.'],
    wordBank: ['education', 'inequality', 'inflation', 'tariffs'],
    answers: ['education', 'inequality'],
    explanation: 'HDI broadens welfare tracking beyond income, but still omits inequality, pollution, and freedoms.',
  },
  {
    id: 'econ-q-5-1-5',
    subtopicId: 'econ-5-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each living-standard limitation to its explanation:',
    pairs: [
      { left: 'Informal economy omitted', right: 'Subsistence farming and cash work understate true output in low-income nations' },
      { left: 'Unequal distribution', right: 'High mean GDP per head can coexist with widespread household poverty' },
      { left: 'Negative externalities', right: 'GDP counts industrial output while ignoring air and river pollution' },
      { left: 'Output composition', right: 'High defence spending raises GDP without improving family nutrition' },
    ],
    explanation: 'Always pair GDP/HDI figures with distribution, informal output, and sustainability caveats.',
  },

  // 5.2
  {
    id: 'econ-q-5-2-1',
    subtopicId: 'econ-5-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which situation is an example of ABSOLUTE poverty rather than purely relative poverty?',
    options: [
      'A family earning 55% of national median income who cannot afford a yearly overseas holiday',
      'A household unable to afford basic daily nutrition, clean drinking water, and shelter',
      'A worker earning less than a company chief executive',
      'A graduate waiting to buy a luxury car',
    ],
    correctIndex: 1,
    explanation: 'Absolute poverty means lacking minimum physical essentials for survival (food, clean water, shelter).',
  },
  {
    id: 'econ-q-5-2-2',
    subtopicId: 'econ-5-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'A country’s median household income is $35,000 per year and relative poverty is defined as below 60% of the median. Calculate the relative poverty threshold and explain ONE policy that breaks the poverty cycle long term.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Relative poverty threshold = 60% x $35,000 = $21,000 per year. Investing in free quality education and vocational training raises human capital, labour productivity, and future earnings, breaking the intergenerational poverty cycle.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates threshold = $21,000', numericMatch: { value: 21000, tolerance: 5 } },
        { id: 'mp2', markDescription: 'Explains education/training, healthcare, or sustainable job creation raising productivity/income', requiredKeywordGroups: [['education', 'training', 'healthcare', 'growth', 'microfinance'], ['productivity', 'skill', 'earning', 'income', 'human capital']] },
      ],
    },
    explanation: '0.60 × $35,000 = $21,000; education and healthcare build permanent earning capacity.',
  },
  {
    id: 'econ-q-5-2-3',
    subtopicId: 'econ-5-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the vicious cycle of poverty:',
    segments: ['Low household income leads to low ', ', which restricts capital and education ', ', trapping productivity and future wages low.'],
    wordBank: ['saving', 'investment', 'inflation', 'exports'],
    answers: ['saving', 'investment'],
    explanation: 'Low income leaves almost no surplus for saving or investment in skills and tools.',
  },
  {
    id: 'econ-q-5-2-4',
    subtopicId: 'econ-5-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO government policies directly aimed at reducing poverty and income inequality:',
    options: [
      'Progressive income taxation used to fund means-tested welfare benefits and free healthcare',
      'State investment in primary/secondary education and vocational skills training',
      'Replacing income tax entirely with a high flat VAT on staple bread and milk',
      'Cutting minimum wages while eliminating public schools',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Progressive redistribution gives immediate relief while education/training lifts long-run earning power.',
  },
  {
    id: 'econ-q-5-2-5',
    subtopicId: 'econ-5-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each anti-poverty policy to its primary evaluation drawback:',
    pairs: [
      { left: 'Generous means-tested benefits', right: 'Can strain government budgets or weaken incentive to accept low-paid work' },
      { left: 'National minimum wage set very high', right: 'May raise firm labour costs and cause job losses for unskilled workers' },
      { left: 'Education & health investment', right: 'High upfront cost and takes 10+ years to lift workforce incomes' },
      { left: 'Foreign aid grants', right: 'Risk of corruption, tied conditions, or aid dependency' },
    ],
    explanation: 'Balanced Paper 2 answers weigh both the relief impact and fiscal/incentive drawbacks of every policy.',
  },

  // 5.3
  {
    id: 'econ-q-5-3-1',
    subtopicId: 'econ-5-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Country D has 6 million children (0–15), 9 million elderly retirees (65+), and 25 million working-age adults (16–64). Calculate its dependency ratio (dependents per 100 working-age citizens) and state ONE fiscal pressure of an ageing population.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Total dependents = 6m + 9m = 15m. Dependency ratio = (15 / 25) x 100 = 60 dependents per 100 working-age adults. An ageing population increases government spending on state pensions and healthcare while shrinking the working tax base.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates dependency ratio = 60', numericMatch: { value: 60, tolerance: 0.5 } },
        { id: 'mp2', markDescription: 'Higher state pension/healthcare spending or smaller working tax base', requiredKeywordGroups: [['pension', 'healthcare', 'hospital', 'tax base', 'taxpayer']] },
      ],
    },
    explanation: '(15m ÷ 25m) × 100 = 60; ageing raises pension and healthcare bills relative to active taxpayers.',
  },
  {
    id: 'econ-q-5-3-2',
    subtopicId: 'econ-5-3',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the economic definition of the OPTIMUM POPULATION?',
    options: [
      'The smallest possible population in a country',
      'The population size that maximises Real GDP (output) per head given existing resources and technology',
      'A population where birth rate equals 50 per 1,000',
      'The maximum population that can physically fit inside a border',
    ],
    correctIndex: 1,
    explanation: 'Optimum population combines labour with existing land/capital at the peak of output per person.',
  },
  {
    id: 'econ-q-5-3-3',
    subtopicId: 'econ-5-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the demographic drivers:',
    segments: ['Greater female education and career opportunities typically reduce the ', ' rate, while cleaner water and modern hospitals sharply reduce the ', ' rate.'],
    wordBank: ['birth', 'death', 'inflation', 'tariff'],
    answers: ['birth', 'death'],
    explanation: 'Economic development cuts death rates first through health/sanitation and then lowers birth rates via education and opportunity.',
  },
  {
    id: 'econ-q-5-3-4',
    subtopicId: 'econ-5-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO policies a government with a rapidly AGEING population can use to protect public finances:',
    options: [
      'Raising the statutory retirement age so experienced workers stay employed and pay tax longer',
      'Attracting skilled working-age immigrants and investing in automation/productivity',
      'Lowering the retirement age from 65 to 50',
      'Closing hospitals and banning pension savings',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Later retirement, skilled immigration, childcare support, and higher productivity cushion an ageing demographic.',
  },
  {
    id: 'econ-q-5-3-5',
    subtopicId: 'econ-5-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each demographic term to its correct definition:',
    pairs: [
      { left: 'Net migration', right: 'Immigrants entering minus emigrants leaving in a year' },
      { left: 'Brain drain', right: 'Emigration of highly skilled doctors and engineers from developing countries' },
      { left: 'Under-population', right: 'Too few workers to fully exploit available land, resources, and scale economies' },
      { left: 'Over-population', right: 'Population exceeds optimum size, causing overcrowding and falling output per head' },
    ],
    explanation: 'Population effects depend heavily on age distribution, skill mix, and resource endowment.',
  },

  // 5.4
  {
    id: 'econ-q-5-4-1',
    subtopicId: 'econ-5-4',
    type: 'mcq',
    marks: 1,
    prompt: 'Which combination of features is most typical of a LOWER-INCOME developing economy compared with a high-income developed economy?',
    options: [
      'High HDI (>0.90), tiny agricultural employment, and ageing population',
      'Large primary-sector workforce, lower capital per worker, lower literacy, and higher population growth',
      'Zero informal economy and dominant financial-services exports',
      'Excess capital stock and negative birth rates',
    ],
    correctIndex: 1,
    explanation: 'Lower-income economies typically show larger primary sectors, lower productivity/capital per head, and faster population growth.',
  },
  {
    id: 'econ-q-5-4-2',
    subtopicId: 'econ-5-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO reasons why heavy reliance on exporting a single primary commodity (like raw coffee beans or copper) can hinder economic development.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'First, global commodity prices are highly volatile (due to inelastic supply/demand and weather shocks), making export revenues and government budgets unpredictable. Second, raw commodities carry low value added compared with processed manufactures and suffer sluggish income demand growth.',
      markPoints: [
        { id: 'mp1', markDescription: 'Volatile commodity prices / unpredictable export and tax revenues', requiredKeywordGroups: [['volatil', 'fluctuat', 'unpredictable', 'unstable', 'shock']] },
        { id: 'mp2', markDescription: 'Low value added / declining terms of trade / depletion or weather risk', requiredKeywordGroups: [['value added', 'value-added', 'low price', 'weather', 'deplet', 'terms of trade', 'process']] },
      ],
    },
    explanation: 'Diversifying into processing, manufacturing, and services stabilises export earnings and lifts added value.',
  },
  {
    id: 'econ-q-5-4-3',
    subtopicId: 'econ-5-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the growth vs development distinction:',
    segments: ['Economic ', ' focuses on rising real GDP output, whereas economic ', ' encompasses broader gains in health, education, institutions, and poverty reduction.'],
    wordBank: ['growth', 'development', 'inflation', 'deflation'],
    answers: ['growth', 'development'],
    explanation: 'Growth is a quantitative output measure; development captures multidimensional human progress.',
  },
  {
    id: 'econ-q-5-4-4',
    subtopicId: 'econ-5-4',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO strategies that help a developing economy accelerate sustainable development:',
    options: [
      'Diversifying exports from raw commodities into processed goods, manufacturing, and digital services',
      'Investing in female education, clean water, reliable power grids, and transparent legal institutions',
      'Relying permanently on one unprocessed crop while neglecting schools',
      'Banning all foreign technology and capital equipment imports',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Export diversification, human capital, infrastructure, and sound governance drive lasting development.',
  },
  {
    id: 'econ-q-5-4-5',
    subtopicId: 'econ-5-4',
    type: 'matching',
    marks: 2,
    prompt: 'Match each development factor to how it shapes living standards:',
    pairs: [
      { left: 'Higher domestic savings ratio', right: 'Provides bank funds for factories, roads, and machinery investment' },
      { left: 'Foreign Direct Investment (FDI)', right: 'Transfers multinational capital, technology, and management training' },
      { left: 'Secure property rights & low corruption', right: 'Lowers investor risk and ensures tax revenue funds real public services' },
      { left: 'Export diversification', right: 'Cushions GDP against price crashes in any single commodity' },
    ],
    explanation: 'Sustainable development requires simultaneous upgrades in physical capital, human capital, and institutions.',
  },

  // 6.1
  {
    id: 'econ-q-6-1-1',
    subtopicId: 'econ-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which outcome is a primary BENEFIT of international specialisation and free trade for consumers?',
    options: [
      'Higher domestic monopoly prices and fewer brands',
      'Lower prices, wider variety of goods year-round, and higher real purchasing power',
      'Complete elimination of all transport costs',
      'Guaranteed zero structural unemployment in every industry',
    ],
    correctIndex: 1,
    explanation: 'Buying from the world’s lowest-cost producers lowers consumer prices and expands choice.',
  },
  {
    id: 'econ-q-6-1-2',
    subtopicId: 'econ-6-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain ONE benefit and ONE risk for a small economy that specialises heavily in exporting electronics components.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Benefit: focusing resources on electronics lets domestic firms achieve large global economies of scale, lowering average unit cost and boosting export revenue and skilled jobs. Risk: over-specialisation leaves the economy vulnerable to severe recession and structural unemployment if global electronics demand drops or rival nations develop cheaper substitutes.',
      markPoints: [
        { id: 'mp1', markDescription: 'Economies of scale, lower average cost, efficiency, or export/job growth', requiredKeywordGroups: [['economies of scale', 'average cost', 'efficien', 'export', 'skilled']] },
        { id: 'mp2', markDescription: 'Vulnerability to global demand slump, structural unemployment, or over-dependence', requiredKeywordGroups: [['over-specialis', 'vulnerab', 'depend', 'slump', 'shock', 'unemployment', 'substitute']] },
      ],
    },
    explanation: 'Specialisation captures huge global scale economies, yet creates sharp exposure to sector-specific shocks.',
  },
  {
    id: 'econ-q-6-1-3',
    subtopicId: 'econ-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the international trade principle:',
    segments: ['Countries specialise in goods where their climate, skills, and technology yield the lowest ', ' cost, allowing firms serving global buyers to enjoy ', ' of scale.'],
    wordBank: ['opportunity', 'economies', 'marginal', 'tariffs'],
    answers: ['opportunity', 'economies'],
    explanation: 'Specialising by lowest opportunity cost expands global output and unlocks scale economies.',
  },
  {
    id: 'econ-q-6-1-4',
    subtopicId: 'econ-6-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO major risks associated with excessive international over-specialisation:',
    options: [
      'Exhaustion of finite non-renewable resources (e.g. oil or minerals) leaving no backup industry',
      'Supply-chain disruption of vital imports (food, medicine, energy) during global crises',
      'Automatic elimination of all global competition',
      'Guaranteed rising prices for every commodity forever',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Resource depletion and strategic import vulnerability are key counterarguments to extreme specialisation.',
  },
  {
    id: 'econ-q-6-1-5',
    subtopicId: 'econ-6-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each trade concept to its exact meaning:',
    pairs: [
      { left: 'Factor endowments', right: 'Natural resources, climate, labour skills, and capital held by a nation' },
      { left: 'Free trade', right: 'Cross-border trade without tariffs, quotas, or artificial barriers' },
      { left: 'Economies of scale', right: 'Lower average unit cost from producing for billions of global buyers' },
      { left: 'Structural job loss', right: 'Domestic workers displaced when cheaper imports replace local firms' },
    ],
    explanation: 'Trade lifts aggregate welfare overall, yet creates winners (exporters/consumers) and displaced sectors.',
  },

  // 6.2
  {
    id: 'econ-q-6-2-1',
    subtopicId: 'econ-6-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'A country imposes a 20% tariff on imported solar inverters priced at $500 each, and 100,000 units are still imported. Calculate the new domestic price of an imported inverter and total government tariff revenue.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Tariff per unit = 20% x $500 = $100, so the new domestic price is $500 + $100 = $600. Total government tariff revenue = $100 x 100,000 = $10,000,000 ($10m).',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates new price = $600', numericMatch: { value: 600, tolerance: 1 } },
        { id: 'mp2', markDescription: 'Calculates tariff revenue = $10,000,000 (or 10 million)', numericMatch: { value: 10000000, tolerance: 100 } },
      ],
    },
    explanation: '20% of $500 = $100 tariff → $600 price; $100 × 100,000 units = $10,000,000 treasury revenue.',
  },
  {
    id: 'econ-q-6-2-2',
    subtopicId: 'econ-6-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the defining feature that makes a business a MULTINATIONAL CORPORATION (MNC)?',
    options: [
      'It sells products online to tourists from abroad',
      'It owns and operates physical production or service facilities in more than one country',
      'It pays zero tax in its home country',
      'It employs at least 50 workers in one factory',
    ],
    correctIndex: 1,
    explanation: 'An MNC must have physical operations/branches in at least two countries—exporting alone is not enough.',
  },
  {
    id: 'econ-q-6-2-3',
    subtopicId: 'econ-6-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each trade-restriction method to its primary economic characteristic:',
    pairs: [
      { left: 'Tariff', right: 'Import tax that raises import prices AND generates government revenue' },
      { left: 'Quota', right: 'Strict cap on import quantity that raises prices with zero tariff revenue' },
      { left: 'Domestic subsidy', right: 'Government payment lowering local firms’ costs to undercut imports' },
      { left: 'Embargo', right: 'Complete legal ban on importing or exporting specified goods' },
    ],
    explanation: 'Always contrast tariffs (raises treasury revenue) with quotas (caps volume rigidly, no tax revenue).',
  },
  {
    id: 'econ-q-6-2-4',
    subtopicId: 'econ-6-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the protectionism concepts:',
    segments: ['Exporting surplus goods abroad below production cost to crush local rivals is called ', ', while shielding a newly launched domestic sector until it gains scale economies is the ', ' industry argument.'],
    wordBank: ['dumping', 'infant', 'quota', 'repatriation'],
    answers: ['dumping', 'infant'],
    explanation: 'Anti-dumping and infant-industry protection are two of the strongest economic justifications for temporary tariffs.',
  },
  {
    id: 'econ-q-6-2-5',
    subtopicId: 'econ-6-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO common DRAWBACKS of hosting a large foreign Multinational Corporation (MNC):',
    options: [
      'Profits may be repatriated back to foreign headquarters rather than reinvested locally',
      'Small domestic competitors may be driven out of business or local environments exploited',
      'Complete elimination of host-country exports',
      'Guaranteed collapse in modern technology transfer',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Host nations weigh MNC jobs, FDI, and technology transfer against profit repatriation and crowding out of local SMEs.',
  },

  // 6.3
  {
    id: 'econ-q-6-3-1',
    subtopicId: 'econ-6-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'The exchange rate changes from £1 = $1.20 to £1 = $1.50. Calculate the new US dollar price of a £10,000 British machine and state whether this makes UK exports cheaper or dearer.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'At £1 = $1.50, the £10,000 machine costs 10,000 x $1.50 = $15,000 (up from $12,000). Because the Pound appreciated (SPICED), UK exports become dearer (more expensive) to foreign buyers.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates new USD price = $15,000', numericMatch: { value: 15000, tolerance: 5 } },
        { id: 'mp2', markDescription: 'States exports become dearer / more expensive (SPICED appreciation)', requiredKeywordGroups: [['dearer', 'more expensive', 'higher price', 'spiced']] },
      ],
    },
    explanation: '£10,000 × $1.50 = $15,000 (vs $12,000 previously): SPICED → Strong Pound makes Exports Dearer!',
  },
  {
    id: 'econ-q-6-3-2',
    subtopicId: 'econ-6-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Under a FLOATING exchange rate, what happens to the value of the Japanese Yen if Japan’s central bank RAISES interest rates above rival nations?',
    options: [
      'The Yen depreciates sharply as capital leaves Japan',
      'Foreign hot money flows into Japan, increasing demand for Yen so the Yen appreciates',
      'The exchange rate stays legally frozen forever',
      'Japanese imports immediately become more expensive',
    ],
    correctIndex: 1,
    explanation: 'Higher relative interest rates attract foreign savers who buy Yen, shifting currency demand right (appreciation).',
  },
  {
    id: 'econ-q-6-3-3',
    subtopicId: 'econ-6-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the WPIDEC depreciation chain:',
    segments: ['Under WPIDEC, a currency ', ' makes imports ', ' and exports cheaper, helping narrow a trade deficit if PED is elastic.'],
    wordBank: ['depreciation', 'dearer', 'appreciation', 'cheaper'],
    answers: ['depreciation', 'dearer'],
    explanation: 'Weak currency → Imports Dearer, Exports Cheaper (WPIDEC).',
  },
  {
    id: 'econ-q-6-3-4',
    subtopicId: 'econ-6-3',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO key advantages of a FLOATING exchange rate system over a fixed peg:',
    options: [
      'The central bank remains free to set interest rates for domestic inflation and growth goals',
      'No need to hold huge foreign-exchange reserves and trade deficits tend to self-correct via depreciation',
      'Complete elimination of daily exchange-rate volatility for exporters',
      'Guaranteed zero imported inflation forever',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Floating rates preserve monetary independence and self-adjust imbalances, though at the cost of volatility.',
  },
  {
    id: 'econ-q-6-3-5',
    subtopicId: 'econ-6-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each exchange-rate term to its exact meaning:',
    pairs: [
      { left: 'Appreciation', right: 'Market-driven rise in a floating currency’s external value' },
      { left: 'Depreciation', right: 'Market-driven fall in a floating currency’s external value' },
      { left: 'Devaluation', right: 'Official government reduction of a fixed exchange-rate peg' },
      { left: 'Central bank FX intervention', right: 'Buying domestic currency with foreign reserves to defend a fixed peg' },
    ],
    explanation: 'Use appreciation/depreciation for floating rates and revaluation/devaluation for fixed pegs.',
  },

  // 6.4
  {
    id: 'econ-q-6-4-1',
    subtopicId: 'econ-6-4',
    type: 'short-answer',
    marks: 2,
    prompt: 'Country Q records: Trade in Goods = -$52bn, Trade in Services = +$36bn, Primary Income = +$4bn, Secondary Income = -$6bn. Calculate the Current Account balance and state whether it is a surplus or deficit.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Current Account = -52 + 36 + 4 - 6 = -$18bn, which is a current account deficit of $18bn.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates -$18bn (or 18bn deficit)', numericMatch: { value: -18, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'States current account deficit', requiredKeywordGroups: [['deficit']] },
      ],
    },
    explanation: 'Sum all four components: −52 + 36 + 4 − 6 = −$18bn deficit.',
  },
  {
    id: 'econ-q-6-4-2',
    subtopicId: 'econ-6-4',
    type: 'matching',
    marks: 2,
    prompt: 'Match each cross-border transaction to its exact Current Account component:',
    pairs: [
      { left: 'Exporting domestically manufactured electric cars', right: 'Trade in goods (visibles credit)' },
      { left: 'Foreign tourists paying for local hotels and flights', right: 'Trade in services (invisibles credit)' },
      { left: 'Dividends remitted home from overseas subsidiaries', right: 'Primary income' },
      { left: 'Overseas development aid grants and worker remittances', right: 'Secondary income (current transfers)' },
    ],
    explanation: 'Every current account transaction sits cleanly inside Goods, Services, Primary Income, or Secondary Income.',
  },
  {
    id: 'econ-q-6-4-3',
    subtopicId: 'econ-6-4',
    type: 'mcq',
    marks: 1,
    prompt: 'Which policy provides the MOST SUSTAINABLE long-run cure for a structural current account deficit without triggering recession or trade retaliation?',
    options: [
      'Imposing 60% blanket tariffs on every trading partner',
      'Supply-side policies (education, infrastructure, R&D) that raise productivity and non-price export quality',
      'Slashing government health spending during a recession',
      'Banning citizens from working abroad',
    ],
    correctIndex: 1,
    explanation: 'Supply-side upgrades lower unit costs and raise export quality without provoking tariffs or unemployment.',
  },
  {
    id: 'econ-q-6-4-4',
    subtopicId: 'econ-6-4',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the current account policy comparison:',
    segments: ['Raising taxes to cool import spending is an expenditure-', ' policy, whereas currency depreciation or tariffs aimed at shifting buyers toward local goods is an expenditure-', ' policy.'],
    wordBank: ['reducing', 'switching', 'floating', 'printing'],
    answers: ['reducing', 'switching'],
    explanation: 'Expenditure-reducing policies cut total AD; expenditure-switching policies alter relative prices of imports vs local goods.',
  },
  {
    id: 'econ-q-6-4-5',
    subtopicId: 'econ-6-4',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO likely CAUSES of a widening current account deficit:',
    options: [
      'High domestic inflation and low labour productivity making exports uncompetitive',
      'A strongly appreciated currency (SPICED) combined with booming domestic consumer import demand',
      'Rapid productivity gains lowering domestic factory costs',
      'A sharp rise in global demand for the country’s tourist services',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Uncompetitive domestic inflation, an overvalued currency, and surging consumer imports widen current account deficits.',
  },
];

export const ECON_FLASHCARDS_5_TO_6: FlashcardItem[] = [
  // 5.1
  { id: 'econ-fc-5-1-1', subtopicId: 'econ-5-1', front: 'Give four limitations of Real GDP per head as a measure of living standards.', backBullets: ['Ignores income inequality, informal/unpaid work, pollution/externalities, working hours/leisure, and output composition (weapons vs clinics).'] },
  { id: 'econ-fc-5-1-2', subtopicId: 'econ-5-1', front: 'Name the three exact dimensions of the Human Development Index (HDI).', backBullets: ['GNI per head (PPP $), life expectancy at birth, and mean/expected years of schooling (scored 0 to 1).'] },
  { id: 'econ-fc-5-1-3', subtopicId: 'econ-5-1', front: 'Give three limitations of HDI itself.', backBullets: ['Omits within-country income inequality, environmental sustainability, political freedoms, and quality of schooling.'] },
  { id: 'econ-fc-5-1-4', subtopicId: 'econ-5-1', front: 'Why are Purchasing Power Parity (PPP) adjustments used in international income comparisons?', backBullets: ['They correct for lower local price levels in developing nations so $1 reflects equal real purchasing power everywhere.'] },
  { id: 'econ-fc-5-1-5', subtopicId: 'econ-5-1', front: 'Why can living standards vary hugely inside the exact same country?', backBullets: ['Urban-rural productivity gaps, unequal education/hospital access, and concentration of wealth in top income brackets.'] },

  // 5.2
  { id: 'econ-fc-5-2-1', subtopicId: 'econ-5-2', front: 'Distinguish absolute poverty from relative poverty.', backBullets: ['Absolute: unable to afford survival essentials ($2.15/day PPP); Relative: income well below national median (e.g. <60% of median).'] },
  { id: 'econ-fc-5-2-2', subtopicId: 'econ-5-2', front: 'Trace the four links in the vicious cycle of poverty.', backBullets: ['Low income → Low saving → Low investment in capital/education → Low productivity → Persistently low income.'] },
  { id: 'econ-fc-5-2-3', subtopicId: 'econ-5-2', front: 'List four root causes of poverty.', backBullets: ['Unemployment/low wages, poor education/illiteracy, poor health/malnutrition, high dependency ratios, and lack of capital/infrastructure.'] },
  { id: 'econ-fc-5-2-4', subtopicId: 'econ-5-2', front: 'How do progressive taxes and means-tested benefits reduce poverty?', backBullets: ['Higher % tax on top earners finances targeted cash transfers, food aid, and public services for the poorest households.'] },
  { id: 'econ-fc-5-2-5', subtopicId: 'econ-5-2', front: 'Compare short-run welfare transfers with long-run education investment for cutting poverty.', backBullets: ['Transfers relieve hardship immediately (fiscal cost/incentive risk); education takes 10+ years but permanently raises employability and wages.'] },

  // 5.3
  { id: 'econ-fc-5-3-1', subtopicId: 'econ-5-3', front: 'State the three factors that determine total population growth.', backBullets: ['Birth rate, death rate (natural increase = births − deaths), and net migration (immigrants − emigrants).'] },
  { id: 'econ-fc-5-3-2', subtopicId: 'econ-5-3', front: 'State the dependency ratio formula.', backBullets: ['((Population aged 0–15 + Population aged 65+) ÷ Working-age population 16–64) × 100.'] },
  { id: 'econ-fc-5-3-3', subtopicId: 'econ-5-3', front: 'Define optimum population, under-population, and over-population.', backBullets: ['Optimum maximises Real GDP per head; under-population lacks workers for scale economies; over-population causes overcrowding and lower output/head.'] },
  { id: 'econ-fc-5-3-4', subtopicId: 'econ-5-3', front: 'State three economic pressures created by an ageing population.', backBullets: ['Rising state pension & elder-healthcare costs, shrinking working tax base, and lower labour mobility/productivity growth.'] },
  { id: 'econ-fc-5-3-5', subtopicId: 'econ-5-3', front: 'List four policy responses to an ageing population.', backBullets: ['Raise retirement age, encourage private pensions, attract skilled working-age immigrants, subsidise childcare, and invest in automation.'] },

  // 5.4
  { id: 'econ-fc-5-4-1', subtopicId: 'econ-5-4', front: 'Distinguish economic growth from economic development.', backBullets: ['Growth = rising real GDP; Development = broader sustained progress in living standards, health, education, equality, and institutions.'] },
  { id: 'econ-fc-5-4-2', subtopicId: 'econ-5-4', front: 'Why does primary-product dependency trap some developing countries?', backBullets: ['Volatile global commodity prices destabilise export/tax earnings, raw materials have low value added, and finite minerals deplete.'] },
  { id: 'econ-fc-5-4-3', subtopicId: 'econ-5-4', front: 'List five structural factors explaining development gaps between nations.', backBullets: ['Productivity/capital stock, savings & investment ratios, education & health, sectoral structure, and legal/governance institutions.'] },
  { id: 'econ-fc-5-4-4', subtopicId: 'econ-5-4', front: 'How can Foreign Direct Investment (FDI) accelerate development?', backBullets: ['Injects physical factories/infrastructure, creates formal jobs, transfers technology/skills, and opens global export markets.'] },
  { id: 'econ-fc-5-4-5', subtopicId: 'econ-5-4', front: 'Give three policies to promote economic development besides FDI.', backBullets: ['Export diversification into manufacturing/services, universal education & clean water, microfinance, and fair international trade access.'] },

  // 6.1
  { id: 'econ-fc-6-1-1', subtopicId: 'econ-6-1', front: 'Why do countries engage in international specialisation?', backBullets: ['Different climates, natural resources, labour skills, and technology create lower opportunity costs in specific goods, raising total world output.'] },
  { id: 'econ-fc-6-1-2', subtopicId: 'econ-6-1', front: 'List four key benefits of free trade.', backBullets: ['Lower consumer prices, wider product choice, massive global economies of scale, and competitive pressure driving innovation.'] },
  { id: 'econ-fc-6-1-3', subtopicId: 'econ-6-1', front: 'List four risks of international over-specialisation.', backBullets: ['Severe vulnerability to demand/price shocks, finite resource depletion, structural unemployment, and strategic import shortages in crises.'] },
  { id: 'econ-fc-6-1-4', subtopicId: 'econ-6-1', front: 'How does free trade allow countries to consume outside their domestic PPC?', backBullets: ['Each nation specialises in its lowest-opportunity-cost export and trades at mutually favourable terms, obtaining more of both goods.'] },
  { id: 'econ-fc-6-1-5', subtopicId: 'econ-6-1', front: 'Who loses inside a country when trade barriers are removed?', backBullets: ['Uncompetitive domestic industries and their workers who face structural unemployment unless retrained for growing export sectors.'] },

  // 6.2
  { id: 'econ-fc-6-2-1', subtopicId: 'econ-6-2', front: 'Define a Multinational Corporation (MNC) precisely.', backBullets: ['A business that owns and operates physical production or service sites in more than one country (not merely exporting).'] },
  { id: 'econ-fc-6-2-2', subtopicId: 'econ-6-2', front: 'State three benefits and three drawbacks of MNCs for host countries.', backBullets: ['Benefits: FDI capital, jobs, tech/skills, taxes. Drawbacks: profit repatriation, local SME closures, environmental/labour exploitation, footloose exit.'] },
  { id: 'econ-fc-6-2-3', subtopicId: 'econ-6-2', front: 'Compare tariffs, quotas, subsidies, and embargoes.', backBullets: ['Tariff: import tax + state revenue; Quota: physical volume cap (no tariff revenue); Subsidy: cuts home firm costs; Embargo: total trade ban.'] },
  { id: 'econ-fc-6-2-4', subtopicId: 'econ-6-2', front: 'Give four arguments IN FAVOUR of trade protectionism.', backBullets: ['Shield infant (sunrise) industries, prevent foreign dumping, slow sunset-industry job losses, protect strategic goods, and trim trade deficits.'] },
  { id: 'econ-fc-6-2-5', subtopicId: 'econ-6-2', front: 'Give four arguments AGAINST trade protectionism.', backBullets: ['Foreign retaliation (trade wars), higher consumer/component prices (cost-push inflation), less choice, and complacent domestic inefficiency.'] },

  // 6.3
  { id: 'econ-fc-6-3-1', subtopicId: 'econ-6-3', front: 'What factors increase DEMAND for a floating currency (causing appreciation)?', backBullets: ['Higher domestic exports, inbound tourism, inward FDI, higher relative interest rates (hot money), and bullish speculation.'] },
  { id: 'econ-fc-6-3-2', subtopicId: 'econ-6-3', front: 'State SPICED and WPIDEC in full.', backBullets: ['SPICED: Strong Pound → Imports Cheaper, Exports Dearer; WPIDEC: Weak Pound → Imports Dearer, Exports Cheaper.'] },
  { id: 'econ-fc-6-3-3', subtopicId: 'econ-6-3', front: 'Distinguish appreciation/depreciation from revaluation/devaluation.', backBullets: ['Appreciation/depreciation are market-driven under floating rates; revaluation/devaluation are official government changes to a fixed peg.'] },
  { id: 'econ-fc-6-3-4', subtopicId: 'econ-6-3', front: 'Why might a currency depreciation FAIL to shrink a trade deficit immediately?', backBullets: ['If PED of exports and imports is price inelastic in the short run (fixed contracts/essential oil imports), import bills rise before volumes switch.'] },
  { id: 'econ-fc-6-3-5', subtopicId: 'econ-6-3', front: 'Compare floating vs fixed exchange rate systems.', backBullets: ['Floating: monetary freedom & automatic deficit correction, but volatile. Fixed: trade certainty & inflation discipline, but needs vast FX reserves & sacrifices domestic interest rates.'] },

  // 6.4
  { id: 'econ-fc-6-4-1', subtopicId: 'econ-6-4', front: 'Name all four components of the Current Account (G-S-P-S).', backBullets: ['Trade in goods (visibles), trade in services (invisibles), primary income (wages/profits/dividends), and secondary income (aid/remittances).'] },
  { id: 'econ-fc-6-4-2', subtopicId: 'econ-6-4', front: 'List four causes of a Current Account Deficit.', backBullets: ['High domestic inflation, low productivity, overvalued currency (SPICED), domestic consumer boom, or recession in export partner economies.'] },
  { id: 'econ-fc-6-4-3', subtopicId: 'econ-6-4', front: 'Explain when a Current Account Deficit may NOT be harmful.', backBullets: ['When small (% of GDP), temporary, easily financed by long-term FDI, or caused by importing productive machinery that raises future exports.'] },
  { id: 'econ-fc-6-4-4', subtopicId: 'econ-6-4', front: 'Compare expenditure-reducing, expenditure-switching, and supply-side cures for a deficit.', backBullets: ['Reducing (tight tax/rates): cuts imports fast but slows GDP; Switching (depreciation/tariffs): risks inflation/retaliation; Supply-side: sustainable but slow.'] },
  { id: 'econ-fc-6-4-5', subtopicId: 'econ-6-4', front: 'Distinguish a Current Account Deficit from a Government Budget Deficit.', backBullets: ['Current Account Deficit = external outflows > inflows across goods/services/income; Budget Deficit = government spending G > tax revenue T.'] },
];

export const ECON_EXAM_PRACTICE_5_TO_6: ExamQuestionItem[] = [
  {
    id: 'econ-ex-5-1',
    subtopicId: 'econ-5-1',
    number: 26,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country V has a Real GDP per head of $28,000 and an HDI of 0.71, whereas Country W has a lower Real GDP per head of $19,500 yet a higher HDI of 0.84.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain how Country W can achieve a higher Human Development Index (HDI) than Country V despite having a lower Real GDP per head.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'HDI combines GNI per head (PPP) with two non-income indicators: life expectancy at birth (health) and mean/expected years of schooling (education). Country W can outscore Country V if it invests heavily in universal public healthcare, clean water, and schools—and distributes income more evenly—whereas Country V’s higher GDP per head may be concentrated in a wealthy elite or spent on non-welfare goods.',
          markPoints: [
            { id: 'mp1', markDescription: 'Names the two non-income HDI components: life expectancy (health) and schooling (education)', requiredKeywordGroups: [['life expectancy', 'health'], ['schooling', 'education']] },
            { id: 'mp2', markDescription: 'Explains higher public healthcare/education outcomes in Country W', requiredKeywordGroups: [['healthcare', 'hospital', 'school', 'universal', 'invest']] },
            { id: 'mp3', markDescription: 'Notes inequality / output composition / PPP gap in Country V', requiredKeywordGroups: [['inequality', 'elite', 'concentrat', 'distribution', 'ppp', 'welfare']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-5-2',
    subtopicId: 'econ-5-2',
    number: 27,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] In a low-income rural region, 38% of households live in absolute poverty while secondary school completion is only 42%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Explain how poor schooling reinforces the vicious cycle of poverty and evaluate ONE short-run and ONE long-run policy the government could introduce.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Poor schooling keeps worker skills and productivity low, trapping households on low incomes with almost zero saving or investment capacity to educate their children (the vicious cycle of poverty). In the short run, means-tested food or cash transfers relieve absolute poverty immediately (though costing public funds); in the long run, free secondary schooling and vocational training permanently lift human capital and earnings, despite taking years to bear fruit.',
          markPoints: [
            { id: 'mp1', markDescription: 'Links low schooling → low productivity/income → low saving/investment (vicious cycle)', requiredKeywordGroups: [['productivity', 'skill'], ['saving', 'investment', 'vicious cycle', 'low income']] },
            { id: 'mp2', markDescription: 'Short-run policy (means-tested cash/food transfers/aid) with relief + fiscal cost', requiredKeywordGroups: [['transfer', 'benefit', 'food', 'means-tested', 'aid'], ['immediate', 'short run', 'short-run', 'cost', 'budget']] },
            { id: 'mp3', markDescription: 'Long-run policy (free education/training) raising human capital/wages despite time lag', requiredKeywordGroups: [['education', 'school', 'training'], ['human capital', 'earning', 'years', 'long run', 'long-run']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-5-3',
    subtopicId: 'econ-5-3',
    number: 28,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Over twenty years, Country L’s birth rate fell from 14 to 7 per 1,000 while life expectancy rose from 78 to 85 years, lifting the share of citizens aged 65+ to 29%.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Analyse TWO economic challenges caused by Country L’s ageing population and recommend ONE effective policy response.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'First, a higher dependency ratio forces fewer working-age taxpayers to finance rapidly rising government spending on state pensions and elderly healthcare, widening the budget deficit. Second, a shrinking domestic labour force can create skill shortages and slow potential GDP growth. Country L can respond by raising the retirement age, encouraging skilled working-age immigration, or investing in automation.',
          markPoints: [
            { id: 'mp1', markDescription: 'Higher dependency ratio → rising pension/healthcare fiscal burden on shrinking tax base', requiredKeywordGroups: [['pension', 'healthcare'], ['tax', 'budget', 'dependency']] },
            { id: 'mp2', markDescription: 'Shrinking labour force / skill shortages / slower potential growth', requiredKeywordGroups: [['labour force', 'workforce', 'shortage', 'growth', 'output']] },
            { id: 'mp3', markDescription: 'Policy: raise retirement age, skilled immigration, childcare subsidies, or automation', requiredKeywordGroups: [['retirement age', 'immigra', 'automation', 'childcare', 'private pension']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-5-4',
    subtopicId: 'econ-5-4',
    number: 29,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country G earns 74% of its export revenue from unprocessed timber and iron ore, and recently offered tax incentives to attract multinational electronics manufacturers.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Discuss whether attracting multinational corporations (FDI) will successfully accelerate Country G’s economic development.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Attracting electronics MNCs diversifies Country G away from volatile primary-product dependency, bringing FDI capital, formal higher-wage manufacturing jobs, and modern technology transfer that lift productivity and living standards. However, generous tax breaks reduce initial government tax revenue, MNCs may repatriate profits abroad, and without local education investment host workers may remain stuck in low-skill assembly jobs.',
          markPoints: [
            { id: 'mp1', markDescription: 'Diversifies away from primary-product dependency / brings FDI, jobs, and technology', requiredKeywordGroups: [['diversif', 'primary'], ['fdi', 'job', 'technology', 'productivity']] },
            { id: 'mp2', markDescription: 'Drawback: profit repatriation OR lost revenue from tax incentives', requiredKeywordGroups: [['repatriat', 'tax break', 'tax incentive', 'revenue']] },
            { id: 'mp3', markDescription: 'Evaluation: lasting impact depends on local education/skills or environmental/labour rules', requiredKeywordGroups: [['education', 'skill', 'local', 'regulat', 'low-skill', 'assembly']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-6-1',
    subtopicId: 'econ-6-1',
    number: 30,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country C removes all import tariffs on textiles and footwear while focusing domestic engineers and capital on medical imaging machines for global export.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Evaluate the economic effects of this international specialisation on Country C’s consumers, medical-device exporters, and domestic textile workers.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Consumers benefit from lower prices and wider choice on imported textiles and footwear, lifting real incomes; meanwhile medical-device exporters gain massive global economies of scale, lowering unit cost and expanding high-skill export earnings. However, uncompetitive domestic textile workers face factory closures and structural unemployment unless supported by government retraining grants.',
          markPoints: [
            { id: 'mp1', markDescription: 'Consumers enjoy lower prices / wider choice / higher real income', requiredKeywordGroups: [['consumer'], ['lower price', 'cheaper', 'choice', 'real income']] },
            { id: 'mp2', markDescription: 'Medical exporters gain global economies of scale / lower unit cost / export revenue', requiredKeywordGroups: [['economies of scale', 'unit cost', 'export', 'medical']] },
            { id: 'mp3', markDescription: 'Domestic textile workers risk structural unemployment / need retraining', requiredKeywordGroups: [['textile'], ['structural', 'unemployment', 'closure', 'retrain']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-6-2',
    subtopicId: 'econ-6-2',
    number: 31,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] To protect a newly launched domestic electric-battery industry employing 8,000 workers, Country P imposes a 35% import tariff on all foreign batteries.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Discuss whether Country P’s 35% tariff on imported batteries is likely to benefit the overall economy.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'In favour: the tariff shields an infant industry from foreign rivals until it grows large enough to achieve economies of scale, protects 8,000 jobs, and raises government tariff revenue. Against: higher battery costs raise prices for domestic carmakers and consumers (cost-push inflation), risk retaliatory tariffs against Country P’s exports, and may breed complacency/inefficiency if protection lasts too long.',
          markPoints: [
            { id: 'mp1', markDescription: 'Supports infant industry / scale economies / protects jobs / raises tariff revenue', requiredKeywordGroups: [['infant', 'economies of scale', '8,000', 'job', 'tariff revenue']] },
            { id: 'mp2', markDescription: 'Raises costs/prices for consumers and domestic carmakers (cost-push inflation)', requiredKeywordGroups: [['higher', 'cost', 'price', 'inflation'], ['consumer', 'carmaker', 'cost-push']] },
            { id: 'mp3', markDescription: 'Risks foreign retaliation / trade war OR domestic inefficiency', requiredKeywordGroups: [['retaliat', 'trade war', 'inefficien', 'complacen']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-6-3',
    subtopicId: 'econ-6-3',
    number: 32,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Following sharp central bank rate cuts, Country K’s floating currency depreciates by 18% against its major trading partners’ currencies.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Evaluate how this 18% currency depreciation affects Country K’s current account balance and its domestic inflation rate.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'By WPIDEC, the 18% depreciation makes exports cheaper abroad and imports dearer at home; provided demand for exports and imports is price elastic, net exports rise and the current account deficit narrows. However, dearer imported fuel, food, and industrial components push up firm production costs, creating imported cost-push inflation (and higher demand-pull pressure from booming exports).',
          markPoints: [
            { id: 'mp1', markDescription: 'WPIDEC: exports cheaper abroad and imports dearer at home', requiredKeywordGroups: [['export'], ['cheaper'], ['import'], ['dearer', 'expensive']] },
            { id: 'mp2', markDescription: 'Improves current account balance PROVIDED demand is price elastic', requiredKeywordGroups: [['current account', 'net export', 'deficit'], ['elastic', 'ped']] },
            { id: 'mp3', markDescription: 'Triggers imported cost-push inflation via dearer raw materials/fuel/food', requiredKeywordGroups: [['cost-push', 'inflation'], ['fuel', 'material', 'component', 'import']] },
          ],
        },
      },
    ],
  },
  {
    id: 'econ-ex-6-4',
    subtopicId: 'econ-6-4',
    number: 33,
    stimulus: '[Cambridge IGCSE 0455 Paper 2 Style] Country U has run a persistent Current Account Deficit equal to 6.5% of GDP for four years, driven by low manufacturing productivity and surging consumer goods imports.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Compare using contractionary fiscal policy (expenditure-reducing) with supply-side reforms to reduce Country U’s current account deficit.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Contractionary fiscal policy (higher income taxes and lower public spending) reduces household disposable income and cuts consumer import spending relatively quickly, yet harms domestic GDP growth and raises cyclical unemployment. Supply-side reforms (vocational training, R&D, and modern infrastructure) address the root cause—low manufacturing productivity—boosting export competitiveness sustainably without recession, though they are costly and suffer long 5–10 year time lags.',
          markPoints: [
            { id: 'mp1', markDescription: 'Contractionary fiscal cuts disposable income/import spending fast', requiredKeywordGroups: [['tax', 'spending', 'disposable'], ['import'], ['quick', 'fast', 'cut', 'reduce']] },
            { id: 'mp2', markDescription: 'Drawback of fiscal deflation: slower GDP growth / higher cyclical unemployment', requiredKeywordGroups: [['unemployment', 'recession', 'slower growth', 'gdp']] },
            { id: 'mp3', markDescription: 'Supply-side fixes productivity/competitiveness sustainably despite high cost and long time lags', requiredKeywordGroups: [['supply-side', 'supply side', 'productivity', 'competitiv'], ['time lag', 'years', 'costly', 'expensive']] },
          ],
        },
      },
    ],
  },
];
