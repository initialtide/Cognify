import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const IGCSE_BUS_TOPICS_5_TO_6: TopicDefinition[] = [
  {
    number: 5,
    title: 'Financial Information & Decisions',
    subtopics: [
      {
        id: 'igcse-bus-5-1',
        code: '5.1',
        slug: '5.1-business-finance-needs-and-sources',
        title: 'Business Finance: Needs & Sources (Internal vs External)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-5-2',
        code: '5.2',
        slug: '5.2-cash-flow-forecasting-working-capital',
        title: 'Cash-Flow Forecasting & Working Capital',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-5-3',
        code: '5.3',
        slug: '5.3-income-statements-profit-loss',
        title: 'Income Statements (Profit & Loss Accounts)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-5-4',
        code: '5.4',
        slug: '5.4-statement-of-financial-position',
        title: 'Statement of Financial Position (Balance Sheet)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-5-5',
        code: '5.5',
        slug: '5.5-analysis-of-accounts-ratios',
        title: 'Analysis of Accounts (Profitability & Liquidity Ratios)',
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
        slug: '6.1-economic-issues-cycle-inflation-tax-interest',
        title: 'Economic Issues: Business Cycle, Inflation, Tax & Interest Rates',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-6-2',
        code: '6.2',
        slug: '6.2-environmental-ethical-issues',
        title: 'Environmental & Ethical Issues (Externalities & Pressure Groups)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-bus-6-3',
        code: '6.3',
        slug: '6.3-business-international-economy-mncs-exchange-rates',
        title: 'Business & The International Economy (Globalisation, MNCs & Exchange Rates)',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_BUS_NOTES_5_TO_6: Record<string, NoteLesson> = {
  'igcse-bus-5-1': {
    subtopicId: 'igcse-bus-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Business Finance: Needs & Sources (Internal vs External)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 5.1 Business Finance: Needs and Sources',
    youtubeId: 'E0b167KAYQA',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '15:30',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 5.1)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Businesses Need Finance & Internal Sources', cardId: 'igcse-bus-5-1-c1' },
      { time: '5:10', seconds: 310, label: 'Short-Term vs Long-Term External Finance Sources', cardId: 'igcse-bus-5-1-c2' },
      { time: '10:20', seconds: 620, label: 'Microfinance, Crowdfunding & Selecting the Best Source', cardId: 'igcse-bus-5-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-1-c1',
        title: 'Why Firms Need Finance & Internal Sources of Finance',
        summary: 'Start-up capital, expansion, and working capital can first be funded internally without interest or lost control.',
        bullets: [
          '**Three main reasons for finance**: **start-up capital** (buying initial premises/machinery), **expansion** (opening new branches/launching new products), and **working capital** (paying daily bills like wages and stock).',
          '**Internal sources (from inside the firm)**: **retained profit** (interest-free, no ownership diluted, though unavailable to new start-ups), **selling existing unused non-current assets** (e.g. spare vans), and **reducing excess inventory**.',
        ],
        subsections: [
          {
            heading: 'Evaluating Retained Profit',
            bullets: [
              'Retained profit costs zero interest and never needs repaying, yet keeping too much profit inside the company may anger shareholders expecting higher **dividends**.',
            ],
            exampleHeading: 'Worked example: Funding a $30,000 oven internally',
            examples: [
              'A bakery holding $22,000 in retained profit sells an unused delivery van for $9,000 → raises **$31,000** internally with **0% interest** and zero bank debt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'retained profit', definition: 'Net profit kept inside a business after taxes and dividends are paid, reinvested as interest-free internal finance.' },
        ],
      },
      {
        id: 'igcse-bus-5-1-c2',
        title: 'Short-Term vs Long-Term External Sources of Finance',
        summary: 'Match short-term cash gaps with short-term finance and multi-year assets with long-term debt or equity.',
        bullets: [
          '**Short-term external (< 1 year)**: **bank overdraft** (flexible for brief deficits, high variable interest, repayable on demand), **trade credit** (buying stock now and paying suppliers in 30–60 days, interest-free), and **debt factoring** (selling invoices for ~85% instant cash).',
          '**Long-term external (> 1 year)**: **bank loans & mortgages** (fixed repayments with interest, collateral required), **debentures** (long-term corporate bonds), **leasing** (renting equipment with maintenance included, never owned), and **issuing shares** (permanent capital for Ltd/Plc, no interest, dilutes control).',
        ],
        subsections: [
          {
            heading: 'Comparing Debt (Loans) vs Equity (Shares)',
            bullets: [
              '**Loans** preserve 100% owner control but add fixed interest charges that rise if central bank rates climb; **shares** never need repaying yet dilute voting control and require future dividends.',
            ],
            exampleHeading: 'Worked cost comparison: Buying vs Leasing a van',
            examples: [
              'Buying a $40,000 van with cash drains working capital immediately, whereas leasing at $900/month for 48 months costs **$43,200** total while keeping $40,000 free for inventory and including servicing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'bank overdraft', definition: 'Short-term arrangement allowing a business to withdraw more cash than is in its bank account up to an agreed limit.' },
          { term: 'trade credit', definition: 'Buying raw materials or stock now and paying the supplier 30–90 days later without interest.' },
        ],
      },
      {
        id: 'igcse-bus-5-1-c3',
        title: 'Microfinance, Crowdfunding & Choosing the Optimal Source',
        summary: 'Evaluating purpose, time period, legal form, amount needed, and existing gearing before recommending finance.',
        bullets: [
          '**Microfinance**: small loans offered by specialist agencies to low-income entrepreneurs in developing countries who lack collateral for commercial banks.',
          '**Crowdfunding**: raising small sums from many backers online via platforms (also tests market demand early, though public ideas can be copied and funding targets may fail).',
        ],
        subsections: [
          {
            heading: 'Golden Rule for Cambridge Finance Evaluation',
            bullets: [
              'Always check **legal structure** first: a **sole trader or partnership CANNOT issue shares**! Match **purpose & duration** (never fund a 20-year factory with a short-term overdraft).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'microfinance', definition: 'Providing small-scale financial loans and services to low-income entrepreneurs unable to access traditional commercial banks.' },
        ],
        memoryAid: 'Match duration to asset life: Short-term gap = Overdraft/Trade Credit; Long-term factory = Loan/Mortgage/Shares!',
        commonMistake: 'Students frequently recommend "selling shares" for a sole trader or partnership. ONLY incorporated companies (Ltd and Plc) can legally issue shares!',
      },
    ],
    keyTerms: [
      { term: 'Retained profit', definition: 'Internal interest-free profit kept in the business after tax and dividends.' },
      { term: 'Bank overdraft', definition: 'Flexible short-term bank borrowing up to an agreed negative balance limit.' },
      { term: 'Leasing', definition: 'Paying regular rent to use an asset without owning it upfront, preserving cash.' },
      { term: 'Microfinance', definition: 'Small loans given to low-income entrepreneurs without traditional bank collateral.' },
    ],
    checklistPoints: [
      'Distinguish internal vs external and short-term vs long-term sources of business finance.',
      'Explain microfinance and crowdfunding and evaluate their strengths and risks.',
      'Select and justify the optimal finance source based on legal structure, amount, risk, and control.',
    ],
  },

  'igcse-bus-5-2': {
    subtopicId: 'igcse-bus-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Cash-Flow Forecasting & Working Capital',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 5.2 Cash-flow forecasting and working capital',
    youtubeId: 'uOMx1g7mYhY',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:45',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 5.2)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Cash Is Vital & Why Cash Flow Differs from Profit', cardId: 'igcse-bus-5-2-c1' },
      { time: '4:55', seconds: 295, label: 'Constructing & Completing a Cash-Flow Forecast Table', cardId: 'igcse-bus-5-2-c2' },
      { time: '9:50', seconds: 590, label: 'Working Capital & Overcoming Short-Term Cash Deficits', cardId: 'igcse-bus-5-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-2-c1',
        title: 'Why Cash Matters & Cash Flow vs Profit',
        summary: 'Profitable businesses can still collapse into insolvency if they run out of liquid cash to pay immediate bills.',
        bullets: [
          '**Cash inflows** are actual money entering the business (cash sales, payments received from credit debtors, bank loans, share issues). **Cash outflows** are actual money leaving (raw materials, wages, rent, equipment, loan repayments).',
          '**Cash ≠ Profit**: selling $20,000 of goods on 60-day credit records revenue and profit TODAY, yet **$0 cash arrives for 2 months** while wages, rent, and electricity must be paid in cash right now — causing **insolvency** if cash runs dry!',
        ],
        subsections: [
          {
            heading: 'Why Managers Prepare Cash-Flow Forecasts',
            bullets: [
              'Spots upcoming monthly deficits months in advance so managers can arrange an overdraft early, supports bank loan applications, and reveals idle cash surpluses that could be invested.',
            ],
            exampleHeading: 'Concrete case: Profitable yet insolvent builder',
            examples: [
              'A contractor earns $50,000 accounting profit on a hotel renovation paid 90 days after completion, yet collapses in Month 2 because it lacks $15,000 cash to pay weekly bricklayer wages.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'insolvency', definition: 'Inability of a business to pay its short-term debts and bills when they fall due, leading to closure.' },
        ],
      },
      {
        id: 'igcse-bus-5-2-c2',
        title: 'Cash-Flow Forecast Equations & Worked Table',
        summary: 'Every single closing balance becomes next month’s opening balance — check negative signs carefully.',
        bullets: [
          '**Net Cash Flow** = `Total Cash Inflows − Total Cash Outflows`.',
          '**Closing Balance** = `Opening Balance + Net Cash Flow`. Next month’s **Opening Balance** = Previous month’s **Closing Balance**.',
        ],
        subsections: [
          {
            heading: 'Worked 2-Month Cash-Flow Calculation',
            bullets: [
              'Month 1: Opening = `$2,000`, Inflows = `$7,500`, Outflows = `$10,000` → Net Cash Flow = **−$2,500** → Closing = `$2,000 + (−$2,500) =` **−$500** (deficit!).',
              'Month 2: Opening = **−$500**, Inflows = `$11,000`, Outflows = `$8,000` → Net Cash Flow = **+$3,000** → Closing = `−$500 + $3,000 =` **+$2,500**.',
            ],
            exampleHeading: 'Exam notation reminder',
            examples: [
              'On Cambridge accounting tables, parentheses such as **($500)** always indicate a **NEGATIVE** cash balance of −$500!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'net cash flow', definition: 'Difference between total cash inflows and total cash outflows during a specific time period.' },
        ],
      },
      {
        id: 'igcse-bus-5-2-c3',
        title: 'Working Capital & Remedies for Cash-Flow Shortages',
        summary: 'Working capital funds everyday survival; managers solve deficits by accelerating inflows or delaying outflows.',
        bullets: [
          '**Working capital** = `Current Assets − Current Liabilities` (cash + debtors + inventory minus short-term payables/overdraft) — the lifeblood funding day-to-day trading.',
          '**Solving short-term cash deficits**: (1) arrange a **bank overdraft**, (2) **chase debtors** or offer small early-payment discounts / cut customer credit from 60 to 30 days, (3) **negotiate longer trade credit** from suppliers, (4) **delay or lease** non-essential capital purchases.',
        ],
        subsections: [
          {
            heading: 'Evaluating Cash-Flow Fixes (Drawbacks)',
            bullets: [
              'Cutting customer credit terms may drive buyers to competitors; delaying supplier payments risks losing discounts or supply stops; bank overdrafts charge steep daily interest.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'working capital', definition: 'Capital available for day-to-day business operations, calculated as Current Assets minus Current Liabilities.' },
        ],
        memoryAid: 'Opening + (Inflows − Outflows) = Closing → Carry Closing straight to NEXT month’s Opening!',
        commonMistake: 'Students include credit sales in Month 1 cash inflows when customers pay in 30 days. Cash-flow forecasts record money ONLY in the exact month cash physically enters or leaves the bank!',
      },
    ],
    keyTerms: [
      { term: 'Cash-flow forecast', definition: 'Estimate of future monthly cash inflows, outflows, and expected closing bank balances.' },
      { term: 'Net cash flow', definition: 'Total cash inflows minus total cash outflows for a period.' },
      { term: 'Working capital', definition: 'Current Assets minus Current Liabilities; liquid funds for daily operations.' },
      { term: 'Insolvency', definition: 'Running out of cash to pay short-term debts as they fall due.' },
    ],
    checklistPoints: [
      'Explain why a profitable business can fail due to poor cash flow.',
      'Calculate Net Cash Flow, Closing Balances, and carry-forward Opening Balances accurately.',
      'Define working capital and evaluate 4 remedies for a short-term cash-flow deficit.',
    ],
  },

  'igcse-bus-5-3': {
    subtopicId: 'igcse-bus-5-3',
    subtopicCode: '5.3',
    subtopicTitle: 'Income Statements (Profit & Loss Accounts)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 5.3 Income Statements',
    youtubeId: 'auU_vqRZGQ8',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '13:40',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 5.3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Profit Matters to Private & Social Enterprises', cardId: 'igcse-bus-5-3-c1' },
      { time: '4:30', seconds: 270, label: 'Structure of an Income Statement (Revenue → Gross Profit → Net Profit)', cardId: 'igcse-bus-5-3-c2' },
      { time: '9:00', seconds: 540, label: 'How Managers & Stakeholders Use Income Statements for Decisions', cardId: 'igcse-bus-5-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-3-c1',
        title: 'What Is Profit & Why Is It Important?',
        summary: 'Profit rewards entrepreneurs for taking risks, funds internal growth via retained profit, and signals long-term success.',
        bullets: [
          '**Profit** = `Total Revenue − Total Costs` over a trading period (usually one year).',
          '**Four vital roles of profit**: (1) **reward for enterprise/risk-taking**, (2) **internal source of finance** (retained profit for expansion), (3) **indicator of success** attracting investors and bank loans, and (4) **survival cushion** during downturns.',
        ],
        subsections: [
          {
            heading: 'Profit in Social Enterprises',
            bullets: [
              'Even social enterprises need a financial surplus (profit) to survive and reinvest into their social/environmental mission rather than relying indefinitely on donations.',
            ],
            exampleHeading: 'Concrete check: Profit vs Cash reminder',
            examples: [
              'A clothing wholesaler earns $40,000 net profit on its annual Income Statement, yet has only $3,000 cash in the bank because $37,000 is tied up in unpaid customer invoices and winter stock.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'income statement', definition: 'Financial document recording a business’s revenue, cost of sales, expenses, and profit or loss over a period of time.' },
        ],
      },
      {
        id: 'igcse-bus-5-3-c2',
        title: 'Income Statement Layout & Key Equations',
        summary: 'Master the exact vertical waterfall from Revenue down to Gross Profit, Profit (Net Profit), and Retained Profit.',
        bullets: [
          '**Revenue** (`Price × Quantity`) − **Cost of Sales** (direct materials & manufacturing wages) = **Gross Profit**.',
          '**Gross Profit** − **Operating Expenses** (rent, electricity, marketing, admin salaries) = **Profit (Net Profit before tax)**.',
          '**Net Profit** − **Corporation Tax** − **Dividends paid to shareholders** = **Retained Profit** (transferred to Balance Sheet equity).',
        ],
        subsections: [
          {
            heading: 'Worked Example: Comparing Two Product Options (Mr Lee Method)',
            bullets: [
              'Option 1: Revenue = `$25,000`, Cost of Sales = `$10,000` → Gross Profit = **$15,000**; Expenses = `$1,000` → Net Profit = **$14,000**.',
              'Option 2: Revenue = `$5,000`, Cost of Sales = `$2,500` → Gross Profit = **$2,500**; Expenses = `$500` → Net Profit = **$2,000** → Choose **Option 1** (+$12,000 higher net profit)!',
            ],
            exampleHeading: 'Improving Gross Profit vs Net Profit',
            examples: [
              'Raise **Gross Profit** by increasing selling prices or finding cheaper raw-material suppliers; raise **Net Profit** by cutting indirect overheads like energy bills or office rent.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'gross profit', definition: 'Revenue minus Cost of Sales (direct costs of producing or buying the goods sold).' },
          { term: 'cost of sales', definition: 'Direct costs incurred strictly in purchasing or manufacturing the goods actually sold.' },
        ],
      },
      {
        id: 'igcse-bus-5-3-c3',
        title: 'How Stakeholders Use Income Statements',
        summary: 'Managers, shareholders, banks, and employees rely on profit trends to judge strategy, dividends, and lending safety.',
        bullets: [
          '**Managers** compare profit against last year and competitors, identify loss-making products to discontinue, and forecast which new launch yields the highest profit.',
          '**Shareholders & Banks** check growing net profit to predict rising dividends/share prices and verify the business can comfortably repay loan interest.',
        ],
        subsections: [
          {
            heading: 'Workers & Government Uses',
            bullets: [
              '**Employees/trade unions** inspect profit rises to support wage-increase negotiations and assess job security; **governments** use net profit to calculate **corporation tax** owed.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dividends', definition: 'Share of a company’s profits paid out to shareholders as a return on their investment.' },
        ],
        memoryAid: 'Income Statement Waterfall: Revenue − Cost of Sales = Gross Profit − Expenses = Net Profit − Tax − Dividends = Retained Profit!',
        commonMistake: 'Students subtract rent or advertising from Revenue to find Gross Profit. Rent and advertising are INDIRECT expenses subtracted AFTER Gross Profit — ONLY direct Cost of Sales is deducted for Gross Profit!',
      },
    ],
    keyTerms: [
      { term: 'Income statement', definition: 'Financial account summarising revenue, costs, gross profit, net profit, and retained profit over a year.' },
      { term: 'Cost of sales', definition: 'Direct raw-material or purchase cost of the goods sold.' },
      { term: 'Gross profit', definition: 'Revenue minus Cost of Sales.' },
      { term: 'Net profit', definition: 'Gross Profit minus all indirect operating expenses (rent, utilities, salaries).' },
    ],
    checklistPoints: [
      'Explain why profit matters to entrepreneurs, investors, banks, and social enterprises.',
      'Calculate Gross Profit, Net Profit, and Retained Profit accurately on an Income Statement.',
      'Explain how managers, shareholders, banks, workers, and governments use Income Statements.',
    ],
  },

  'igcse-bus-5-4': {
    subtopicId: 'igcse-bus-5-4',
    subtopicCode: '5.4',
    subtopicTitle: 'Statement of Financial Position (Balance Sheet)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 5.4 Statement of Financial Position',
    youtubeId: 'jeu7wxVvOn4',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '12:55',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 5.4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Assets: Non-Current vs Current Assets', cardId: 'igcse-bus-5-4-c1' },
      { time: '4:20', seconds: 260, label: 'Liabilities, Working Capital & Net Assets', cardId: 'igcse-bus-5-4-c2' },
      { time: '8:35', seconds: 515, label: 'Shareholders’ Equity, Capital Employed & Interpreting Balance Sheets', cardId: 'igcse-bus-5-4-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-4-c1',
        title: 'Assets: What a Business Owns on One Specific Date',
        summary: 'Unlike the Income Statement (a full-year video), the Balance Sheet is a single-day snapshot of Assets, Liabilities, and Equity.',
        bullets: [
          '**Non-current assets**: long-term items owned and used for **more than 1 year** (land, buildings, factory machinery, delivery vehicles — plus intangible assets like patents/goodwill).',
          '**Current assets**: short-term items owned and expected to turn into cash within **12 months** — **Inventory (stock)**, **Trade Receivables (debtors)**, and **Cash**.',
        ],
        subsections: [
          {
            heading: 'Order of Liquidity Inside Current Assets',
            bullets: [
              '**Cash** is 100% liquid; **Trade Receivables** turn into cash when debtors pay; **Inventory** is the LEAST liquid current asset because stock may take months to sell.',
            ],
            exampleHeading: 'Worked example: Summing Total Assets',
            examples: [
              'A bakery owns ovens & shop property ($140,000 non-current assets) plus flour stock ($8,000), receivables ($12,000), and cash ($10,000) → Current Assets = **$30,000**; Total Assets = **$170,000**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'non-current assets', definition: 'Long-term resources owned by a business for more than one year, such as buildings, machinery, and vehicles.' },
          { term: 'current assets', definition: 'Short-term resources expected to be converted into cash within one year (inventory, trade receivables, cash).' },
        ],
      },
      {
        id: 'igcse-bus-5-4-c2',
        title: 'Liabilities, Working Capital & The Balancing Equation',
        summary: 'Liabilities are debts owed to outsiders; Total Assets minus Total Liabilities must ALWAYS equal Total Equity.',
        bullets: [
          '**Current liabilities**: short-term debts payable **within 12 months** (**trade payables/creditors**, **bank overdraft**, unpaid tax). **Non-current liabilities**: long-term debts repaid over **more than 1 year** (bank mortgages, 10-year loans, debentures).',
          '**Core accounting equation**: `Total Assets − Total Liabilities = Shareholders’ Equity` (equivalently `Non-Current Assets + Working Capital − Non-Current Liabilities = Total Equity`).',
        ],
        subsections: [
          {
            heading: 'Worked Balance Sheet Calculation',
            bullets: [
              'Non-Current Assets = `$140,000`; Current Assets = `$30,000`; Current Liabilities = `$18,000` → **Working Capital** = `$30,000 − $18,000 =` **$12,000**.',
              'If Non-Current Liabilities = `$52,000`, then **Net Assets / Equity** = `$140,000 + $12,000 − $52,000 =` **$100,000** (and **Capital Employed** = Equity `$100,000` + NCL `$52,000` = **$152,000**).',
            ],
            exampleHeading: 'Danger of negative working capital',
            examples: [
              'If Current Liabilities ($25,000) exceed Current Assets ($18,000), working capital is **−$7,000** — signalling severe liquidity trouble buying cleaning/raw supplies and risking insolvency!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'current liabilities', definition: 'Short-term debts that a business must repay within 12 months, including trade payables and bank overdrafts.' },
        ],
      },
      {
        id: 'igcse-bus-5-4-c3',
        title: 'Shareholders’ Equity, Capital Employed & Stakeholder Uses',
        summary: 'Equity shows owners’ stake (Share Capital + Retained Reserves); Capital Employed measures all long-term funding.',
        bullets: [
          '**Shareholders’ Equity** = `Share Capital` (initial money raised from issuing shares) + `Retained Profits / Reserves` accumulated over past years.',
          '**Capital Employed** = `Shareholders’ Equity + Non-Current Liabilities` — the exact denominator used to calculate **ROCE**!',
        ],
        subsections: [
          {
            heading: 'What Stakeholders Read from a Balance Sheet',
            bullets: [
              '**Banks** check non-current assets available as **loan collateral** and check existing long-term debt; **suppliers** check working capital to verify invoices will be paid on time; **investors** check asset growth and net worth.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'capital employed', definition: 'Total long-term finance invested in a business: Shareholders’ Equity plus Non-Current Liabilities.' },
        ],
        memoryAid: 'Assets = What you OWN; Liabilities = What you OWE; Equity = Owners’ NET WORTH (Assets − Liabilities)!',
        commonMistake: 'Students classify Trade Receivables (money customers owe US) as a liability. Trade RECEIVABLES are a CURRENT ASSET; Trade PAYABLES (money WE owe suppliers) are a CURRENT LIABILITY!',
      },
    ],
    keyTerms: [
      { term: 'Statement of Financial Position', definition: 'Balance sheet snapshot showing a business’s assets, liabilities, and equity on a single date.' },
      { term: 'Trade receivables', definition: 'Current asset representing money owed to the business by credit customers.' },
      { term: 'Trade payables', definition: 'Current liability representing money owed by the business to credit suppliers.' },
      { term: 'Capital employed', definition: 'Shareholders’ Equity plus Non-Current Liabilities.' },
    ],
    checklistPoints: [
      'Classify all balance-sheet items cleanly into non-current/current assets, liabilities, and equity.',
      'Calculate Working Capital, Net Assets, Total Equity, and Capital Employed accurately.',
      'Explain why banks, suppliers, and shareholders analyse the Statement of Financial Position.',
    ],
  },

  'igcse-bus-5-5': {
    subtopicId: 'igcse-bus-5-5',
    subtopicCode: '5.5',
    subtopicTitle: 'Analysis of Accounts (Profitability & Liquidity Ratios)',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 5.5 Analysis of accounts',
    youtubeId: 'Lj_YByY4j64',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '15:10',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 5.5)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Profitability Ratios: GPM, NPM & ROCE', cardId: 'igcse-bus-5-5-c1' },
      { time: '5:05', seconds: 305, label: 'Liquidity Ratios: Current Ratio & Acid-Test Ratio', cardId: 'igcse-bus-5-5-c2' },
      { time: '10:10', seconds: 610, label: 'Why Accounts Matter to Stakeholders & Limitations of Ratios', cardId: 'igcse-bus-5-5-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-5-5-c1',
        title: 'Profitability Ratios: GPM, NPM & ROCE',
        summary: 'Profitability ratios convert raw dollar profits into percentages so firms of different sizes can be compared fairly.',
        bullets: [
          '**Gross Profit Margin (GPM)** = `(Gross Profit ÷ Revenue) × 100`. Measures mark-up after direct cost of sales; improved by raising selling prices or sourcing cheaper raw materials.',
          '**Profit Margin / Net Profit Margin (NPM)** = `(Net Profit ÷ Revenue) × 100`. Measures overhead control; if GPM stays steady while NPM drops, indirect expenses (rent, wages, energy) have ballooned!',
          '**Return on Capital Employed (ROCE)** = `(Net Profit ÷ Capital Employed) × 100`. Shows percentage return earned per $100 invested — compare directly against bank savings rates and rivals.',
        ],
        subsections: [
          {
            heading: 'Worked Calculation: All 3 Profitability Ratios',
            bullets: [
              'Revenue = `$200,000`, Cost of Sales = `$120,000` (Gross Profit = `$80,000`), Expenses = `$50,000` (Net Profit = `$30,000`), Capital Employed = `$150,000`.',
              'GPM = `(80,000 ÷ 200,000) × 100 =` **40%**; NPM = `(30,000 ÷ 200,000) × 100 =` **15%**; ROCE = `(30,000 ÷ 150,000) × 100 =` **20%**.',
            ],
            exampleHeading: 'Diagnostic insight',
            examples: [
              'A 20% ROCE far beats a 4% bank interest rate — proving shareholders earn strong returns for investing their capital in the business.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ROCE', definition: 'Return on Capital Employed = (Net Profit ÷ Capital Employed) × 100; measures efficiency of long-term capital invested.' },
        ],
      },
      {
        id: 'igcse-bus-5-5-c2',
        title: 'Liquidity Ratios: Current Ratio & Acid-Test Ratio',
        summary: 'Liquidity measures whether the firm has enough short-term liquid assets to pay bills due within 12 months.',
        bullets: [
          '**Current Ratio** = `Current Assets ÷ Current Liabilities` (healthy benchmark **1.5 to 2.0**). Below 1.0 risks insolvency; far above 2.5 means too much idle cash/stock is sitting unproductive.',
          '**Acid-Test (Quick) Ratio** = `(Current Assets − Inventory) ÷ Current Liabilities` (healthy benchmark **≥ 1.0**). Subtracts inventory because stock is the **least liquid** current asset and may not sell quickly.',
        ],
        subsections: [
          {
            heading: 'Worked Calculation: Current vs Acid-Test Ratio',
            bullets: [
              'Current Assets = `$60,000` (of which Inventory = `$36,000`) and Current Liabilities = `$30,000`.',
              'Current Ratio = `60,000 ÷ 30,000 =` **2.0** (looks healthy!), YET Acid-Test = `(60,000 − 36,000) ÷ 30,000 =` **0.8** (danger — over-reliant on unsold stock!).',
            ],
            exampleHeading: 'How to improve poor liquidity',
            examples: [
              'Sell excess inventory at a clearance discount, chase credit debtors faster, convert a short-term overdraft into a long-term bank loan, or sell unused non-current assets.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'acid-test ratio', definition: '(Current Assets − Inventory) ÷ Current Liabilities; strict liquidity test excluding slow-moving stock.' },
          { term: 'liquidity', definition: 'Ability of a business to pay its short-term debts on time using cash or assets easily converted to cash.' },
        ],
      },
      {
        id: 'igcse-bus-5-5-c3',
        title: 'Users of Accounts & Limitations of Ratio Analysis',
        summary: 'Ratios only tell the full story when compared across years, against industry rivals, and alongside non-financial context.',
        bullets: [
          '**Key users**: managers (cost/efficiency control), shareholders (ROCE & profit growth), banks (liquidity & debt safety before lending), suppliers (credit risk), and workers/unions (job security).',
          '**Four limitations of published accounts**: (1) **historical data** (past performance does not guarantee future success), (2) **inflation distorts comparisons** over time, (3) **different accounting methods** across rivals, and (4) **omits qualitative factors** like staff morale, brand reputation, or new competitors.',
        ],
        subsections: [
          {
            heading: 'Evaluation Tip for Cambridge Paper 2',
            bullets: [
              'A supermarket naturally operates smoothly with an Acid-Test ratio around 0.6 because groceries sell for instant cash daily, whereas a luxury yacht maker needs a much higher liquidity cushion.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'gross profit margin', definition: '(Gross Profit ÷ Revenue) × 100; percentage of sales revenue retained after deducting direct cost of sales.' },
        ],
        memoryAid: 'Profitability = % (GPM, NPM, ROCE); Liquidity = ratio (Current ~1.5–2.0; Acid-Test ≥ 1.0, subtract Inventory)!',
        commonMistake: 'Students write Current Ratio as a percentage (e.g. "200%"). ALWAYS express Liquidity Ratios as a plain decimal or ratio (e.g. **2.0** or **2:1**), and Profitability Ratios as percentages (**%**)!',
      },
    ],
    keyTerms: [
      { term: 'Gross Profit Margin (GPM)', definition: '(Gross Profit ÷ Revenue) × 100.' },
      { term: 'Net Profit Margin (NPM)', definition: '(Net Profit ÷ Revenue) × 100.' },
      { term: 'ROCE', definition: '(Net Profit ÷ Capital Employed) × 100.' },
      { term: 'Acid-test ratio', definition: '(Current Assets − Inventory) ÷ Current Liabilities; ideal ≥ 1.0.' },
    ],
    checklistPoints: [
      'Calculate and interpret GPM, NPM, and ROCE accurately with % units.',
      'Calculate Current Ratio and Acid-Test Ratio and explain why inventory is excluded from Acid-Test.',
      'Evaluate how stakeholders use ratios and list 4 key limitations of financial accounts.',
    ],
  },

  'igcse-bus-6-1': {
    subtopicId: 'igcse-bus-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Economic Issues: Business Cycle, Inflation, Tax & Interest Rates',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business: Chapter 6.1 Economic Issues',
    youtubeId: 'jlx4wMrFDds',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:15',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 6.1)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'The 4 Stages of the Business Cycle & Business Impacts', cardId: 'igcse-bus-6-1-c1' },
      { time: '4:45', seconds: 285, label: 'Government Objectives, Fiscal Policy (Taxes & Spending)', cardId: 'igcse-bus-6-1-c2' },
      { time: '9:30', seconds: 570, label: 'Monetary Policy (Interest Rates) & Supply-Side Business Impacts', cardId: 'igcse-bus-6-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-1-c1',
        title: 'The Four Stages of the Business Cycle',
        summary: 'Economic booms lift sales yet raise inflation and wage costs; recessions shrink luxury sales while boosting budget brands.',
        bullets: [
          '**Growth → Boom**: rising GDP, falling unemployment, soaring consumer confidence and business profits — YET booming demand causes **inflation**, skilled-labour shortages, and rising wages.',
          '**Recession → Slump**: falling GDP, rising unemployment, plunging consumer spending — forcing luxury firms to cut prices, delay expansion, or make workers redundant (while budget supermarkets can gain shoppers trading down!).',
        ],
        subsections: [
          {
            heading: 'Four Main Government Economic Objectives',
            bullets: [
              '**Low inflation**, **low unemployment**, **steady economic growth (GDP)**, and a **stable balance of payments** (exports roughly matching imports).',
            ],
            exampleHeading: 'Concrete case: Luxury watch vs Budget grocer in recession',
            examples: [
              'During a recession when household incomes drop 8%, a $2,000 luxury watchmaker’s sales plunge 35%, while a discount supermarket’s revenue rises 6% as families switch to value staples.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'recession', definition: 'Period of falling real GDP (two consecutive quarters) marked by falling consumer spending and rising unemployment.' },
        ],
        diagram: 'business-cycle',
      },
      {
        id: 'igcse-bus-6-1-c2',
        title: 'Fiscal Policy: Direct Taxes, Indirect Taxes & Government Spending',
        summary: 'Changes in income tax, corporation tax, VAT, and public contracts directly reshape business revenues and retained profits.',
        bullets: [
          '**Direct taxes**: higher **income tax** shrinks households’ **disposable income** (cutting demand for non-essential goods); higher **corporation tax** leaves companies with less **retained profit** to reinvest and pay dividends.',
          '**Indirect taxes (VAT / sales tax)** & **import tariffs**: raise retail selling prices (shrinking elastic demand) or raise imported raw-material costs. Higher **government spending** on schools, hospitals, and roads boosts demand for construction and service suppliers.',
        ],
        subsections: [
          {
            heading: 'Worked Tax Impact on Net Retained Profit',
            bullets: [
              'If a company earns $500,000 pre-tax profit and corporation tax rises from 20% to 28%, its tax bill jumps from $100,000 to **$140,000**, leaving **$40,000 less retained profit** for factory expansion.',
            ],
            exampleHeading: 'Evaluating indirect tax rises',
            examples: [
              'A 5% VAT hike hits non-essential restaurant meals far harder than basic electricity or bread because restaurants have more price-elastic demand.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'disposable income', definition: 'Level of personal income remaining for spending or saving after direct income taxes are deducted.' },
          { term: 'fiscal policy', definition: 'Government changes to taxation rates and public expenditure to influence economic activity.' },
        ],
      },
      {
        id: 'igcse-bus-6-1-c3',
        title: 'Monetary Policy (Interest Rates) & Business Responses',
        summary: 'Higher interest rates squeeze business loans, cool mortgage-holders’ spending, and appreciate the exchange rate.',
        bullets: [
          '**Impact of HIGHER interest rates**: (1) **existing variable loans & new borrowing cost more**, delaying capital investment; (2) **consumers pay higher mortgages** and prefer saving over borrowing, lowering retail demand; (3) foreign savers buy the currency, **appreciating the exchange rate** (making exports dearer!).',
          '**How businesses respond**: pause debt-funded expansion, rely on **retained profit** instead of bank loans, launch value/budget product lines, or switch to domestic suppliers.',
        ],
        subsections: [
          {
            heading: 'Supply-Side Policies Helping Businesses',
            bullets: [
              'Government investment in workforce **education/training**, cutting business red tape (**deregulation**), and **privatisation** boost labour productivity and lower long-run firm costs.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'monetary policy', definition: 'Central bank control of interest rates and the money supply to manage inflation and economic activity.' },
        ],
        memoryAid: 'Higher Interest Rates = Triple Hit: Costlier Business Loans + Less Consumer Spending + Stronger Currency (Dearer Exports)!',
        commonMistake: 'Students say higher income tax directly taxes business profits. Income tax hits EMPLOYEES’ disposable income (lowering customer demand); CORPORATION tax taxes company profits!',
      },
    ],
    keyTerms: [
      { term: 'Business cycle', definition: 'Fluctuations in real GDP through Growth, Boom, Recession, and Slump.' },
      { term: 'Disposable income', definition: 'Household income left to spend or save after direct income taxes.' },
      { term: 'Fiscal policy', definition: 'Use of government spending and taxation to steer the economy.' },
      { term: 'Monetary policy', definition: 'Use of interest rates and money supply to control inflation and demand.' },
    ],
    checklistPoints: [
      'Analyse business impacts across Growth, Boom, Recession, and Slump.',
      'Distinguish business effects of income tax, corporation tax, VAT, tariffs, and government spending.',
      'Explain all three ways higher interest rates affect business costs, demand, and exports.',
    ],
  },

  'igcse-bus-6-2': {
    subtopicId: 'igcse-bus-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Environmental & Ethical Issues (Externalities & Pressure Groups)',
    readingMinutes: 10,
    videoTitle: 'IGCSE Business Chapter 6.2: Environmental and ethical issues',
    youtubeId: 'zzrhZk7imGk',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '15:18',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 6.2)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Environmental Impacts, Externalities & Sustainable Development', cardId: 'igcse-bus-6-2-c1' },
      { time: '5:05', seconds: 305, label: 'Pressure Groups, Consumer Boycotts & Government Controls', cardId: 'igcse-bus-6-2-c2' },
      { time: '10:15', seconds: 615, label: 'Ethical Business Decisions: Costs vs Long-Term Brand Advantage', cardId: 'igcse-bus-6-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-2-c1',
        title: 'Environmental Impacts, Externalities & Sustainable Development',
        summary: 'Business production creates unpaid external costs like pollution, pushing firms toward renewable, sustainable methods.',
        bullets: [
          '**Externalities**: **external costs** are negative side effects paid by society rather than the firm (factory air pollution, river toxic waste, lorry traffic congestion); **external benefits** are positive side effects (new local jobs, funded community parks).',
          '**Social Cost = Private Cost + External Cost**; **Social Benefit = Private Benefit + External Benefit**.',
          '**Sustainable development**: meeting present customer needs without depleting resources for future generations — using **renewable solar/wind power**, **recycled packaging**, and **low-waste lean manufacturing**.',
        ],
        subsections: [
          {
            heading: 'Why Firms Resist vs Embrace Green Production',
            bullets: [
              '**Short-term barrier**: eco-friendly machinery and biodegradable packaging raise unit costs, squeezing profit margins if price-sensitive rivals keep polluting.',
              '**Long-term payoff**: lower energy waste, avoiding carbon fines, and winning eco-conscious buyers.',
            ],
            exampleHeading: 'Worked example: Solar rooftop investment',
            examples: [
              'Installing $60,000 of factory solar panels cuts electricity bills by $15,000/year — paying back in **4 years** while cutting carbon emissions by 40%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'external cost', definition: 'Cost paid by the rest of society rather than the business as a result of business activity, such as factory pollution.' },
          { term: 'sustainable development', definition: 'Business activity meeting present consumer needs without harming the environment or depleting resources for future generations.' },
        ],
        diagram: 'externality-market-failure',
      },
      {
        id: 'igcse-bus-6-2-c2',
        title: 'Pressure Groups, Consumer Boycotts & Legal Controls',
        summary: 'External groups and environmental legislation penalise polluters and reward compliant firms.',
        bullets: [
          '**Pressure groups** (e.g. Greenpeace, Fairtrade activists) influence businesses via **consumer boycotts** (urging shoppers to stop buying), viral social-media campaigns damaging brand image, and **lobbying governments** for tougher laws.',
          '**Government legal controls**: strict pollution emission caps with heavy fines, **green taxes** on waste/carbon, **pollution permits**, and **financial subsidies** for green R&D.',
        ],
        subsections: [
          {
            heading: 'When Pressure Groups Are Most Effective',
            bullets: [
              'Consumer-facing household brands (fashion, fast food, coffee) suffer far faster from viral boycotts than anonymous B2B raw-material extractors.',
            ],
            exampleHeading: 'Concrete case: Plastic-waste boycott',
            examples: [
              'After an environmental pressure group filmed single-use plastic waste on beaches, a drinks brand lost 11% of quarterly sales before switching to 100% recycled aluminium cans.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pressure group', definition: 'Organised group of people with a shared cause who campaign, lobby, or organise boycotts to change business or government behaviour.' },
        ],
      },
      {
        id: 'igcse-bus-6-2-c3',
        title: 'Ethical Business Decisions: Does Ethics Hurt or Boost Profit?',
        summary: 'Ethical choices (Fairtrade wages, no child labour, zero bribery) raise short-term input costs yet build durable competitive advantage.',
        bullets: [
          '**Ethical dilemmas**: paying living Fairtrade wages to overseas farmers instead of the lowest legal wage, refusing to use child labour or sweatshops, and avoiding misleading advertising or bribes.',
          '**Mr Lee’s 6-Mark Evaluation Framework**: **Cost side** — ethical supplies and fairer pay raise variable costs and lower short-term margins (risking higher prices). **Benefit side** — boosts employee motivation, attracts loyal ethical customers willing to pay a **price premium**, and prevents catastrophic boycott scandals.',
        ],
        subsections: [
          {
            heading: 'Reaching a Supported Judgement',
            bullets: [
              'Being ethical does NOT always reduce long-run profits: strong ethical reputation acts as a powerful **USP**, letting a brand charge higher prices and win loyal repeat sales!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ethical decision', definition: 'Business choice guided by a moral code of right and wrong rather than purely chasing the lowest legal cost.' },
        ],
        memoryAid: 'Social Cost = Private + External Cost; Ethical Choice = Higher Short-Run Cost vs Stronger Long-Run Brand USP!',
        commonMistake: 'Students argue that "being ethical always lowers profit." Always evaluate BOTH sides — higher supplier/wage costs now vs stronger brand reputation, staff motivation, and premium pricing power long-term!',
      },
    ],
    keyTerms: [
      { term: 'External cost', definition: 'Negative side effect imposed on third parties by business activity (e.g. pollution).' },
      { term: 'Social cost', definition: 'Private Cost plus External Cost.' },
      { term: 'Sustainable development', definition: 'Meeting present needs without depleting environmental resources for future generations.' },
      { term: 'Pressure group', definition: 'Campaigning organisation influencing firms via boycotts, media publicity, and government lobbying.' },
    ],
    checklistPoints: [
      'Distinguish private costs/benefits from external and social costs/benefits.',
      'Explain how pressure groups and environmental laws force sustainable production.',
      'Evaluate whether ethical sourcing reduces or increases long-run profitability.',
    ],
  },

  'igcse-bus-6-3': {
    subtopicId: 'igcse-bus-6-3',
    subtopicCode: '6.3',
    subtopicTitle: 'Business & The International Economy (Globalisation, MNCs & Exchange Rates)',
    readingMinutes: 11,
    videoTitle: 'IGCSE Business: Chapter 6.3: Business and the international economy',
    youtubeId: 'MqEZQjXXB0Y',
    videoChannel: 'Mr Lee - Business Econ',
    videoDuration: '14:55',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Business Studies (0450/0264 Chapter 6.3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Globalisation, Free Trade vs Tariffs & Quotas', cardId: 'igcse-bus-6-3-c1' },
      { time: '4:55', seconds: 295, label: 'Multinational Companies (MNCs): Benefits & Drawbacks for Host Countries', cardId: 'igcse-bus-6-3-c2' },
      { time: '9:55', seconds: 595, label: 'Exchange Rate Appreciation & Depreciation (SPICED / WPIDEC)', cardId: 'igcse-bus-6-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-bus-6-3-c1',
        title: 'Globalisation & Trade Protectionism (Tariffs & Quotas)',
        summary: 'Globalisation opens huge export markets and cheaper suppliers, while exposing domestic firms to fierce foreign rivals.',
        bullets: [
          '**Globalisation** is the growing worldwide integration of markets driven by **free-trade agreements**, cheaper **container shipping/air freight**, and **e-commerce/digital technology**.',
          '**Protectionist barriers**: an **import tariff** is a **tax** placed on imported goods (raising their price to protect domestic producers and raise government revenue); an **import quota** is a **physical limit** on the maximum quantity of imports allowed.',
        ],
        subsections: [
          {
            heading: 'Opportunities vs Threats of Globalisation',
            bullets: [
              '**Opportunities** - sell to billions of overseas buyers, source cheaper raw materials globally, and locate factories in lower-cost countries.',
              '**Threats** - cheap overseas rivals undercut domestic firms’ prices, and top local employees may emigrate to foreign multinationals.',
            ],
            exampleHeading: 'Worked calculation: Effect of a 20% import tariff',
            examples: [
              'Imported steel costs $500/tonne before tax. A **20% import tariff** adds $100, raising the landed price to **$600/tonne** — making domestic steel ($560/tonne) more competitive.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'import tariff', definition: 'A tax levied by a government on imported goods to raise their price and protect domestic firms.' },
          { term: 'import quota', definition: 'A physical cap limiting the maximum quantity of a foreign good permitted to enter a country.' },
        ],
      },
      {
        id: 'igcse-bus-6-3-c2',
        title: 'Multinational Companies (MNCs): Pros & Cons for Host Nations',
        summary: 'MNCs operate physical factories or outlets in more than one country — creating jobs and taxes while competing with local firms.',
        bullets: [
          '**Benefits to host country**: creates **local jobs** and cuts unemployment, boosts **GDP and exports**, pays **corporate tax revenue** funding schools/hospitals, brings **modern technology & worker training**, and expands consumer choice.',
          '**Drawbacks to host country**: **drives small domestic rivals out of business**, **repatriates profits** back to headquarters abroad, may offer mainly **low-skilled jobs**, deplete finite resources, or exploit looser local environmental rules.',
        ],
        subsections: [
          {
            heading: 'Why Firms Become Multinationals',
            bullets: [
              'Lower transport costs near foreign buyers, cheaper wages/raw materials, avoiding trade-bloc import tariffs, and spreading risk across multiple economies.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'multinational company (MNC)', definition: 'A business that owns physical production factories or service operations in MORE than one country.' },
        ],
      },
      {
        id: 'igcse-bus-6-3-c3',
        title: 'Exchange Rates: Appreciation (SPICED) vs Depreciation (WPIDEC)',
        summary: 'Exchange-rate swings instantly alter export competitiveness, imported component costs, and international profit certainty.',
        bullets: [
          '**Currency Appreciation (SPICED — Strong Pound: Imports Cheaper, Exports Dearer)**: domestic exports become MORE expensive for overseas buyers (hurting exporters’ sales), while imported raw materials become CHEAPER (lowering importers’ costs).',
          '**Currency Depreciation (WPIDEC — Weak Pound: Imports Dearer, Exports Cheaper)**: domestic exports become CHEAPER abroad (boosting exporters’ sales), while imported parts/fuel become MORE expensive (raising importers’ costs).',
        ],
        subsections: [
          {
            heading: 'Worked Exchange-Rate Calculation',
            bullets: [
              'A UK factory exports washing machines priced at **£300**. At `£1 = $1.20`, the US price is **$360**. If the pound **appreciates** to `£1 = $1.50`, the US price jumps to `£300 × 1.50 =` **$450** (+25% dearer!).',
              'Fluctuating exchange rates also create **uncertainty**, making it difficult for exporters to plan long-term prices and budgets.',
            ],
            exampleHeading: 'Checking who wins vs loses',
            examples: [
              'When £ appreciates (`£1 = $1.20 → $1.50`), a UK firm importing $15,000 of US chips pays only **£10,000** instead of **£12,500** — saving **£2,500**!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'exchange rate appreciation', definition: 'Rise in the value of one currency relative to another, making exports dearer abroad and imports cheaper at home.' },
        ],
        memoryAid: 'SPICED (Strong Pound → Imports Cheaper, Exports Dearer) vs WPIDEC (Weak Pound → Imports Dearer, Exports Cheaper)!',
        commonMistake: 'Students call any company that exports overseas a Multinational Company (MNC). Exporting alone is NOT an MNC — an MNC must own physical factories, offices, or outlets in MORE than one country!',
      },
    ],
    keyTerms: [
      { term: 'Globalisation', definition: 'Increasing worldwide integration and interdependence of national markets and supply chains.' },
      { term: 'Import tariff', definition: 'Tax placed on imported goods to raise their price.' },
      { term: 'Multinational company (MNC)', definition: 'Business owning physical production or service operations in more than one country.' },
      { term: 'Exchange rate depreciation', definition: 'Fall in a currency’s value against foreign currencies, making exports cheaper and imports dearer.' },
    ],
    checklistPoints: [
      'Explain causes, opportunities, and threats of globalisation plus the difference between tariffs and quotas.',
      'Evaluate benefits and drawbacks of Multinational Companies (MNCs) for developing host countries.',
      'Calculate converted export/import prices and apply SPICED and WPIDEC to predict business impacts.',
    ],
  },
};

export const IGCSE_BUS_QUIZZES_5_TO_6: QuizQuestion[] = [
  // 5.1 (5)
  { id: 'igbus-q-51-1', subtopicId: 'igcse-bus-5-1', type: 'mcq', marks: 1, prompt: 'Which source of finance is INTERNAL and incurs zero interest or ownership dilution?', options: ['Bank loan', 'Retained profit', 'Bank overdraft', 'Issuing new shares'], correctIndex: 1, explanation: 'Retained profit comes from inside the business with zero interest and zero loss of control.' },
  { id: 'igbus-q-51-2', subtopicId: 'igcse-bus-5-1', type: 'matching', marks: 3, prompt: 'Match each finance source to its best business use:', pairs: [{ left: 'Bank overdraft', right: 'Covering a brief 2-week cash-flow deficit' }, { left: 'Long-term bank mortgage', right: 'Buying a $500,000 factory building' }, { left: 'Trade credit', right: 'Buying stock now and paying suppliers in 30–60 days' }, { left: 'Microfinance', right: 'Small start-up loan for a low-income entrepreneur without collateral' }], explanation: 'Always match the duration and cost of finance to the asset or business need.' },
  { id: 'igbus-q-51-3', subtopicId: 'igcse-bus-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the external finance distinctions:', segments: ['Paying monthly rent to use delivery vans without owning them upfront is ', ', while raising small sums from many online backers is ', '.'], wordBank: ['leasing', 'crowdfunding', 'factoring', 'retained'], answers: ['leasing', 'crowdfunding'], explanation: 'Leasing preserves cash; crowdfunding raises capital from online backers while testing demand.' },
  { id: 'igbus-q-51-4', subtopicId: 'igcse-bus-5-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO sources of finance that a SOLE TRADER is legally able to use:', options: ['Bank loan', 'Trade credit from suppliers', 'Issuing ordinary shares on the stock exchange', 'Issuing corporate Plc debentures'], correctIndices: [0, 1], explanation: 'Only incorporated companies (Ltd/Plc) can issue shares; sole traders rely on personal savings, loans, overdrafts, and trade credit.' },
  { id: 'igbus-q-51-5', subtopicId: 'igcse-bus-5-1', type: 'short-answer', marks: 2, prompt: 'Explain ONE advantage and ONE disadvantage for a Plc of raising $2m by issuing new shares instead of taking a bank loan.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: share capital is permanent and never needs to be repaid with zero fixed interest burden. Disadvantage: issuing new shares dilutes existing shareholders’ voting control and risks hostile takeover (plus shareholders expect future dividends).', markPoints: [{ id: 'mp1', markDescription: 'No fixed interest / permanent capital that never needs repaying', requiredKeywordGroups: [['no interest', 'zero interest', 'not repaid', 'never', 'permanent']] }, { id: 'mp2', markDescription: 'Dilutes ownership/control or requires paying future dividends', requiredKeywordGroups: [['dilut', 'control', 'ownership', 'takeover', 'dividend']] }] }, explanation: 'Equity avoids interest obligations at the cost of diluting ownership control.' },

  // 5.2 (5)
  { id: 'igbus-q-52-1', subtopicId: 'igcse-bus-5-2', type: 'mcq', marks: 1, prompt: 'Opening balance = $1,500, Cash inflows = $6,000, Cash outflows = $8,200. What is the Closing Balance?', options: ['+$700', '−$700', '−$2,200', '+$3,700'], correctIndex: 1, explanation: 'Net cash flow = 6,000 − 8,200 = −$2,200; Closing = 1,500 − 2,200 = −$700.' },
  { id: 'igbus-q-52-2', subtopicId: 'igcse-bus-5-2', type: 'fill-blank', marks: 2, prompt: 'Complete the working capital and cash-flow rules:', segments: ['Working capital equals Current Assets minus Current ', ', and running out of cash to pay short-term debts causes ', '.'], wordBank: ['Liabilities', 'insolvency', 'Revenue', 'profit'], answers: ['Liabilities', 'insolvency'], explanation: 'Working capital = CA − CL; insufficient liquid cash leads to insolvency.' },
  { id: 'igbus-q-52-3', subtopicId: 'igcse-bus-5-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO practical ways to fix a short-term monthly cash-flow deficit:', options: ['Chase trade debtors to pay faster or offer small early-payment discounts', 'Negotiate longer trade credit terms with suppliers', 'Buy a brand-new warehouse with cash immediately', 'Double customer credit periods from 30 to 90 days'], correctIndices: [0, 1], explanation: 'Speeding up inflows and delaying outflows directly improves monthly cash balance.' },
  { id: 'igbus-q-52-4', subtopicId: 'igcse-bus-5-2', type: 'mcq', marks: 1, prompt: 'On a monthly cash-flow forecast, what is February’s Opening Balance equal to?', options: ['Zero every month', 'January’s Closing Balance', 'January’s Total Revenue', 'February’s Net Cash Flow'], correctIndex: 1, explanation: 'The ending bank balance of one month always carries forward as the next month’s opening balance.' },
  { id: 'igbus-q-52-5', subtopicId: 'igcse-bus-5-2', type: 'short-answer', marks: 2, prompt: 'Explain how a profitable business can still run out of cash and become insolvent.', rubric: { maxMarks: 2, modelAnswer: 'Sales made on long credit terms count as revenue and profit immediately, yet no cash arrives for 60–90 days while rent, wages, and supplier bills must be paid in cash right now.', markPoints: [{ id: 'mp1', markDescription: 'Credit sales record profit before cash is actually received', requiredKeywordGroups: [['credit', 'debtor', 'receivable', 'delay'], ['cash']] }, { id: 'mp2', markDescription: 'Immediate cash outflows (wages, rent, stock) must be paid now', requiredKeywordGroups: [['wage', 'rent', 'bill', 'supplier', 'outflow', 'pay']] }] }, explanation: 'Timing gaps between credit sales and cash inflows cause profitable businesses to become insolvent.' },

  // 5.3 (5)
  { id: 'igbus-q-53-1', subtopicId: 'igcse-bus-5-3', type: 'mcq', marks: 1, prompt: 'Revenue = $90,000, Cost of Sales = $54,000, Operating Expenses = $21,000. What are Gross Profit and Net Profit?', options: ['GP $36,000 and NP $15,000', 'GP $15,000 and NP $36,000', 'GP $69,000 and NP $15,000', 'GP $36,000 and NP $57,000'], correctIndex: 0, explanation: 'Gross Profit = 90,000 − 54,000 = $36,000; Net Profit = 36,000 − 21,000 = $15,000.' },
  { id: 'igbus-q-53-2', subtopicId: 'igcse-bus-5-3', type: 'fill-blank', marks: 2, prompt: 'Complete the Income Statement waterfall:', segments: ['Revenue minus Cost of Sales equals ', ' Profit; deducting tax and ', ' from Net Profit leaves Retained Profit.'], wordBank: ['Gross', 'dividends', 'Working', 'assets'], answers: ['Gross', 'dividends'], explanation: 'Gross Profit deducts direct cost of sales; Retained Profit is what remains after tax and dividends.' },
  { id: 'igbus-q-53-3', subtopicId: 'igcse-bus-5-3', type: 'matching', marks: 3, prompt: 'Match each stakeholder to how they use an Income Statement:', pairs: [{ left: 'Shareholders', right: 'Check growing net profit to assess future dividends and share value' }, { left: 'Banks / Lenders', right: 'Check profit covers loan interest safely before approving finance' }, { left: 'Government', right: 'Calculate corporation tax owed on company profits' }], explanation: 'Every stakeholder reads the Income Statement with a distinct financial objective.' },
  { id: 'igbus-q-53-4', subtopicId: 'igcse-bus-5-3', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO ways a café can directly increase its GROSS PROFIT:', options: ['Switch to a cheaper bulk coffee-bean supplier without hurting taste', 'Build stronger branding to raise selling prices slightly', 'Cut head-office electricity bills', 'Pay lower dividends to shareholders'], correctIndices: [0, 1], explanation: 'Gross Profit depends ONLY on Revenue and direct Cost of Sales; electricity and dividends sit below Gross Profit.' },
  { id: 'igbus-q-53-5', subtopicId: 'igcse-bus-5-3', type: 'short-answer', marks: 2, prompt: 'A company earns Net Profit of $45,000, pays $9,000 corporation tax, and pays $14,000 in dividends. Calculate Retained Profit and give ONE reason why profit is important.', rubric: { maxMarks: 2, modelAnswer: 'Retained profit = $45,000 − $9,000 − $14,000 = $22000. Profit is vital as an interest-free internal source of finance for future expansion and as a reward for entrepreneurs taking financial risk.', markPoints: [{ id: 'mp1', markDescription: 'Calculates Retained Profit = $22000', numericMatch: { value: 22000, tolerance: 1 } }, { id: 'mp2', markDescription: 'States reward for risk, internal finance for growth, survival, or attracting investors', requiredKeywordGroups: [['reward', 'risk', 'internal', 'expansion', 'growth', 'investor', 'surviv']] }] }, explanation: 'Retained profit = 45,000 − 9,000 − 14,000 = $22,000, funding interest-free reinvestment.' },

  // 5.4 (5)
  { id: 'igbus-q-54-1', subtopicId: 'igcse-bus-5-4', type: 'matching', marks: 4, prompt: 'Match each Balance Sheet item to its exact accounting category:', pairs: [{ left: 'Factory machinery & delivery vans', right: 'Non-current assets' }, { left: 'Cash, inventory & trade receivables', right: 'Current assets' }, { left: 'Trade payables & bank overdraft', right: 'Current liabilities' }, { left: '10-year bank mortgage', right: 'Non-current liabilities' }], explanation: 'Current = within 12 months; Non-current = lasting longer than 12 months.' },
  { id: 'igbus-q-54-2', subtopicId: 'igcse-bus-5-4', type: 'mcq', marks: 1, prompt: 'Which Current Asset is the LEAST liquid (hardest to convert into cash rapidly at full value)?', options: ['Cash in bank', 'Inventory (stock)', 'Trade receivables', 'Petty cash'], correctIndex: 1, explanation: 'Inventory must first find a buyer and may need heavy discounting to liquidate quickly.' },
  { id: 'igbus-q-54-3', subtopicId: 'igcse-bus-5-4', type: 'fill-blank', marks: 2, prompt: 'Complete the Balance Sheet equations:', segments: ['Total Assets minus Total Liabilities equals Shareholders’ ', '; adding Non-Current Liabilities to Equity gives ', ' Employed.'], wordBank: ['Equity', 'Capital', 'Gross', 'Sales'], answers: ['Equity', 'Capital'], explanation: 'Equity = Assets − Liabilities; Capital Employed = Equity + Non-Current Liabilities.' },
  { id: 'igbus-q-54-4', subtopicId: 'igcse-bus-5-4', type: 'mcq', marks: 1, prompt: 'Non-Current Assets = $180,000, Current Assets = $40,000, Current Liabilities = $25,000, Non-Current Liabilities = $70,000. What is Total Equity?', options: ['$125,000', '$150,000', '$195,000', '$220,000'], correctIndex: 0, explanation: 'Working capital = 40k − 25k = $15k; Equity = 180k + 15k − 70k = $125,000.' },
  { id: 'igbus-q-54-5', subtopicId: 'igcse-bus-5-4', type: 'short-answer', marks: 2, prompt: 'Explain ONE reason why a commercial bank inspects a firm’s Statement of Financial Position before approving a 5-year loan.', rubric: { maxMarks: 2, modelAnswer: 'The bank checks non-current assets (such as buildings or machinery) that can serve as loan collateral/security and checks existing non-current liabilities and working capital to assess whether the firm can safely repay debts.', markPoints: [{ id: 'mp1', markDescription: 'Checks non-current assets for collateral/security', requiredKeywordGroups: [['collateral', 'security', 'non-current asset', 'building', 'asset']] }, { id: 'mp2', markDescription: 'Checks existing liabilities/debt or liquidity/working capital to verify repayment ability', requiredKeywordGroups: [['debt', 'liabilit', 'working capital', 'liquid', 'repay']] }] }, explanation: 'Balance sheets reveal asset collateral, existing borrowing, and short-term liquidity health.' },

  // 5.5 (5)
  { id: 'igbus-q-55-1', subtopicId: 'igcse-bus-5-5', type: 'mcq', marks: 1, prompt: 'Revenue = $150,000, Cost of Sales = $90,000, Expenses = $30,000. What is the Gross Profit Margin (GPM)?', options: ['20%', '40%', '60%', '30%'], correctIndex: 1, explanation: 'Gross Profit = 150,000 − 90,000 = $60,000 → GPM = (60,000 ÷ 150,000) × 100 = 40%.' },
  { id: 'igbus-q-55-2', subtopicId: 'igcse-bus-5-5', type: 'fill-blank', marks: 2, prompt: 'Complete the Acid-Test liquidity rule:', segments: ['Acid-Test Ratio subtracts ', ' from Current Assets before dividing by Current Liabilities because stock is the least ', ' current asset.'], wordBank: ['inventory', 'liquid', 'cash', 'fixed'], answers: ['inventory', 'liquid'], explanation: 'Acid-test checks whether cash + receivables alone cover short-term liabilities.' },
  { id: 'igbus-q-55-3', subtopicId: 'igcse-bus-5-5', type: 'mcq', marks: 1, prompt: 'A company earns $40,000 net profit on $200,000 capital employed. What is its ROCE?', options: ['5%', '20%', '25%', '40%'], correctIndex: 1, explanation: 'ROCE = (40,000 ÷ 200,000) × 100 = 20%.' },
  { id: 'igbus-q-55-4', subtopicId: 'igcse-bus-5-5', type: 'short-answer', marks: 2, prompt: 'Current Assets = $50,000 (including $20,000 inventory) and Current Liabilities = $25,000. Calculate BOTH the Current Ratio and Acid-Test Ratio.', rubric: { maxMarks: 2, modelAnswer: 'Current Ratio = 50,000 ÷ 25,000 = 2.0 (2:1). Acid-Test Ratio = (50,000 − 20,000) ÷ 25,000 = 30,000 ÷ 25,000 = 1.2 (1.2:1).', markPoints: [{ id: 'mp1', markDescription: 'Calculates Current Ratio = 2.0', numericMatch: { value: 2, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Calculates Acid-Test Ratio = 1.2', numericMatch: { value: 1.2, tolerance: 0.05 } }] }, explanation: 'Both ratios are healthy (Current 1.5–2.0; Acid-Test ≥ 1.0).' },
  { id: 'igbus-q-55-5', subtopicId: 'igcse-bus-5-5', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO limitations of judging a company solely from one year of financial ratios:', options: ['Accounts are historical data and do not guarantee future performance', 'Ratios ignore non-financial factors like brand reputation, staff morale, or new rivals', 'Ratios never use numbers from the Income Statement', 'ROCE cannot be calculated for profitable companies'], correctIndices: [0, 1], explanation: 'Always combine multi-year trends, rival benchmarks, and qualitative context.' },

  // 6.1 (5)
  { id: 'igbus-q-61-1', subtopicId: 'igcse-bus-6-1', type: 'diagram-label', marks: 2, prompt: 'Identify the stages shown on the Business Cycle diagram:', diagram: 'business-cycle', labels: [{ marker: 'Peak GDP with rapid sales and rising inflation', options: ['Boom', 'Slump'], answer: 'Boom' }, { marker: 'Falling GDP with rising unemployment and weak spending', options: ['Recession', 'Recovery'], answer: 'Recession' }], explanation: 'Each stage of the business cycle shifts demand, costs, and hiring decisions.' },
  { id: 'igbus-q-61-2', subtopicId: 'igcse-bus-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the impact of higher central bank interest rates:', segments: ['Higher interest rates make business bank loans more ', ' and leave households with less disposable income because ', ' repayments rise.'], wordBank: ['expensive', 'mortgage', 'cheaper', 'tariff'], answers: ['expensive', 'mortgage'], explanation: 'Higher interest rates reduce both capital investment and household discretionary spending.' },
  { id: 'igbus-q-61-3', subtopicId: 'igcse-bus-6-1', type: 'matching', marks: 3, prompt: 'Match each government economic tool to its direct business effect:', pairs: [{ left: 'Higher income tax', right: 'Lower consumer disposable income; lower luxury sales' }, { left: 'Higher corporation tax', right: 'Less retained profit available for company reinvestment' }, { left: 'Higher government spending', right: 'More public infrastructure contracts and higher employment' }], explanation: 'Link fiscal tools cleanly to consumer demand vs retained business profits.' },
  { id: 'igbus-q-61-4', subtopicId: 'igcse-bus-6-1', type: 'mcq', marks: 1, prompt: 'Which type of business is MOST likely to see sales RISE during an economic recession?', options: ['Luxury sports-car dealership', 'Discount budget supermarket', 'Five-star cruise airline', 'Designer watch boutique'], correctIndex: 1, explanation: 'Lower incomes cause shoppers to trade down from premium stores to budget supermarkets.' },
  { id: 'igbus-q-61-5', subtopicId: 'igcse-bus-6-1', type: 'short-answer', marks: 2, prompt: 'Explain TWO ways a sharp rise in central bank interest rates affects a furniture retailer.', rubric: { maxMarks: 2, modelAnswer: 'First, existing variable bank loans and new borrowing become more expensive, raising costs and delaying store expansion. Second, consumers pay higher mortgages and borrow less on credit cards, lowering disposable income and cutting demand for expensive furniture.', markPoints: [{ id: 'mp1', markDescription: 'Costlier business loans / higher interest costs delaying investment', requiredKeywordGroups: [['loan', 'borrow', 'investment'], ['cost', 'expensive', 'higher', 'delay']] }, { id: 'mp2', markDescription: 'Higher household mortgages / lower spending cutting furniture demand', requiredKeywordGroups: [['mortgage', 'consumer', 'household', 'disposable', 'saving'], ['spending', 'demand', 'sales', 'fall', 'lower']] }] }, explanation: 'Interest-rate hikes squeeze both firm borrowing costs and big-ticket consumer spending.' },

  // 6.2 (5)
  { id: 'igbus-q-62-1', subtopicId: 'igcse-bus-6-2', type: 'diagram-label', marks: 2, prompt: 'Identify the features of the Negative Externality diagram:', diagram: 'externality-market-failure', labels: [{ marker: 'Total cost to society (Private Cost + External Cost)', options: ['MSC (Social Cost)', 'MPB'], answer: 'MSC (Social Cost)' }, { marker: 'Gap between MSC and MPC caused by factory pollution', options: ['External Cost', 'Private Profit'], answer: 'External Cost' }], explanation: 'External pollution costs push Social Cost (MSC) above Private Cost (MPC).' },
  { id: 'igbus-q-62-2', subtopicId: 'igcse-bus-6-2', type: 'mcq', marks: 1, prompt: 'How can an environmental pressure group directly force a large supermarket to cut plastic packaging?', options: ['By raising national interest rates', 'By organising consumer boycotts and viral media campaigns that threaten brand reputation and sales', 'By setting corporation tax rates', 'By printing currency'], correctIndex: 1, explanation: 'Boycotts and bad publicity directly hit consumer-facing brands’ sales and reputation.' },
  { id: 'igbus-q-62-3', subtopicId: 'igcse-bus-6-2', type: 'fill-blank', marks: 2, prompt: 'Complete the sustainability and social-cost rules:', segments: ['Social Cost equals Private Cost plus ', ' Cost; producing goods without depleting resources for future generations is ', ' development.'], wordBank: ['External', 'sustainable', 'Fixed', 'global'], answers: ['External', 'sustainable'], explanation: 'Social Cost includes third-party impacts; sustainability protects future generations.' },
  { id: 'igbus-q-62-4', subtopicId: 'igcse-bus-6-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO government policies used to discourage factory pollution:', options: ['Heavy fines and strict legal limits on toxic waste', 'Environmental/carbon taxes or pollution permits', 'Removing all health and safety laws', 'Cutting recycling grants to zero'], correctIndices: [0, 1], explanation: 'Regulation, fines, and green taxes force firms to internalise environmental costs.' },
  { id: 'igbus-q-62-5', subtopicId: 'igcse-bus-6-2', type: 'short-answer', marks: 2, prompt: 'Explain ONE short-term financial cost and ONE long-term benefit of switching a coffee brand to ethical Fairtrade beans.', rubric: { maxMarks: 2, modelAnswer: 'Cost: Fairtrade beans are more expensive to purchase, raising variable costs and reducing short-term profit margins. Benefit: builds an ethical brand reputation that avoids pressure-group boycotts and lets the brand charge a higher price to loyal customers.', markPoints: [{ id: 'mp1', markDescription: 'Higher supplier/variable costs reducing short-term margin', requiredKeywordGroups: [['cost', 'expensive', 'margin'], ['higher', 'increas', 'lower', 'reduc']] }, { id: 'mp2', markDescription: 'Stronger brand reputation, loyal customers, premium price, or avoids boycotts', requiredKeywordGroups: [['reputation', 'brand', 'loyal', 'boycott', 'higher price', 'premium']] }] }, explanation: 'Balance short-term input cost rises against long-term ethical brand equity.' },

  // 6.3 (5)
  { id: 'igbus-q-63-1', subtopicId: 'igcse-bus-6-3', type: 'mcq', marks: 1, prompt: 'A UK coat sells for £200. When the exchange rate appreciates from £1 = $1.20 to £1 = $1.50, what is its new US dollar price?', options: ['$240', '$300', '$133', '$350'], correctIndex: 1, explanation: '£200 × 1.50 = $300 (up from $240 — SPICED: Exports Dearer).' },
  { id: 'igbus-q-63-2', subtopicId: 'igcse-bus-6-3', type: 'fill-blank', marks: 2, prompt: 'Complete the Multinational Company (MNC) and trade-barrier facts:', segments: ['A tax on imported goods is a ', ', while a Multinational Company operates physical factories or outlets in ', ' than one country.'], wordBank: ['tariff', 'more', 'quota', 'less'], answers: ['tariff', 'more'], explanation: 'Tariffs tax imports; MNCs maintain physical operations in multiple nations.' },
  { id: 'igbus-q-63-3', subtopicId: 'igcse-bus-6-3', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO benefits to a host country when a foreign MNC opens a new manufacturing plant:', options: ['Creates local employment, raising GDP and government tax revenue', 'Transfers modern production technology and employee training skills', 'Guarantees small local competing firms earn higher profits', 'Eliminates profit repatriation completely'], correctIndices: [0, 1], explanation: 'MNCs boost jobs, GDP, taxes, and technology, though local rivals suffer and profits may be repatriated.' },
  { id: 'igbus-q-63-4', subtopicId: 'igcse-bus-6-3', type: 'matching', marks: 3, prompt: 'Match each international economy term to its meaning:', pairs: [{ left: 'Import quota', right: 'Physical limit on the maximum quantity of imports allowed' }, { left: 'SPICED (Appreciation)', right: 'Strong currency makes imports cheaper and exports dearer' }, { left: 'Profit repatriation', right: 'MNC sending profits earned abroad back to its home headquarters' }], explanation: 'Exact international terminology earns full AO1 and AO3 marks.' },
  { id: 'igbus-q-63-5', subtopicId: 'igcse-bus-6-3', type: 'short-answer', marks: 2, prompt: 'Explain how an APPRECIATION of the domestic currency affects BOTH a domestic exporter AND a domestic firm importing raw components.', rubric: { maxMarks: 2, modelAnswer: 'Under SPICED, currency appreciation makes the exporter’s goods dearer (more expensive) in foreign markets, reducing export sales or forcing price cuts. Conversely, imported raw components become cheaper in domestic currency, lowering the importer’s variable costs and boosting profit margins.', markPoints: [{ id: 'mp1', markDescription: 'Exports become dearer/more expensive abroad reducing exporter sales/margins', requiredKeywordGroups: [['export'], ['dearer', 'more expensive', 'fall', 'lower']] }, { id: 'mp2', markDescription: 'Imported raw components become cheaper lowering importer costs', requiredKeywordGroups: [['import'], ['cheaper', 'lower cost', 'margin']] }] }, explanation: 'SPICED: Strong currency hurts exporters but helps importers of raw materials.' },
];

export const IGCSE_BUS_FLASHCARDS_5_TO_6: FlashcardItem[] = [
  // 5.1 (5)
  { id: 'igbus-fc-51-1', subtopicId: 'igcse-bus-5-1', front: 'List 3 internal sources of business finance.', backBullets: ['Retained profit (interest-free), selling unused non-current assets, and reducing excess inventory.'] },
  { id: 'igbus-fc-51-2', subtopicId: 'igcse-bus-5-1', front: 'Compare a Bank Overdraft with a Long-Term Bank Loan.', backBullets: ['Overdraft: flexible short-term cash buffer, high daily interest, repayable on demand.', 'Bank loan: fixed multi-year repayments for big assets like buildings/machinery.'] },
  { id: 'igbus-fc-51-3', subtopicId: 'igcse-bus-5-1', front: 'Contrast Leasing with Buying an asset outright.', backBullets: ['Leasing: regular rent, preserves cash, includes maintenance, but costlier long-term and never owned.', 'Buying: high upfront outlay, full ownership and collateral value.'] },
  { id: 'igbus-fc-51-4', subtopicId: 'igcse-bus-5-1', front: 'Define Microfinance and Crowdfunding.', backBullets: ['Microfinance: small loans to low-income entrepreneurs lacking bank collateral.', 'Crowdfunding: raising small amounts from many online backers while testing market interest.'] },
  { id: 'igbus-fc-51-5', subtopicId: 'igcse-bus-5-1', front: 'Why can a sole trader NOT raise finance by issuing shares?', backBullets: ['Sole traders and partnerships are unincorporated — ONLY limited companies (Ltd and Plc) can legally sell shares.'] },
  // 5.2 (5)
  { id: 'igbus-fc-52-1', subtopicId: 'igcse-bus-5-2', front: 'Write the Net Cash Flow and Closing Balance formulas.', backBullets: ['Net cash flow = Total Cash Inflows − Total Cash Outflows.', 'Closing balance = Opening Balance + Net Cash Flow.'] },
  { id: 'igbus-fc-52-2', subtopicId: 'igcse-bus-5-2', front: 'Write the Working Capital formula and explain its purpose.', backBullets: ['Working Capital = Current Assets − Current Liabilities.', 'Liquid money needed to pay everyday wages, rent, and raw-material bills.'] },
  { id: 'igbus-fc-52-3', subtopicId: 'igcse-bus-5-2', front: 'Explain how a profitable company can still become insolvent.', backBullets: ['Credit sales count as profit today while cash arrives 60–90 days later, leaving no cash to pay immediate bills.'] },
  { id: 'igbus-fc-52-4', subtopicId: 'igcse-bus-5-2', front: 'List 4 ways to overcome a short-term cash-flow shortage.', backBullets: ['Arrange a bank overdraft, chase debtors faster, negotiate longer supplier trade credit, or lease/delay asset buys.'] },
  { id: 'igbus-fc-52-5', subtopicId: 'igcse-bus-5-2', front: 'State 2 uses of a Cash-Flow Forecast.', backBullets: ['Warns of future negative closing balances early and supports bank loan/overdraft applications.'] },
  // 5.3 (5)
  { id: 'igbus-fc-53-1', subtopicId: 'igcse-bus-5-3', front: 'State the Gross Profit, Net Profit, and Retained Profit formulas.', backBullets: ['Gross Profit = Revenue − Cost of Sales; Net Profit = Gross Profit − Operating Expenses.', 'Retained Profit = Net Profit − Tax − Dividends.'] },
  { id: 'igbus-fc-53-2', subtopicId: 'igcse-bus-5-3', front: 'List 4 reasons why Profit is vital for private businesses.', backBullets: ['Rewards risk-taking, provides interest-free retained finance, signals success to investors/banks, and aids survival.'] },
  { id: 'igbus-fc-53-3', subtopicId: 'igcse-bus-5-3', front: 'Give 2 ways to boost Gross Profit vs 2 ways to boost Net Profit.', backBullets: ['Gross Profit: raise selling price or source cheaper direct raw materials.', 'Net Profit: cut indirect overheads like rent, electricity, or admin expenses.'] },
  { id: 'igbus-fc-53-4', subtopicId: 'igcse-bus-5-3', front: 'How do managers use an Income Statement to compare products?', backBullets: ['By preparing separate profit forecasts for each product to launch the highest-profit option and drop loss-makers.'] },
  { id: 'igbus-fc-53-5', subtopicId: 'igcse-bus-5-3', front: 'Why do banks and employees both inspect a firm’s Income Statement?', backBullets: ['Banks check profit covers loan interest safely; employees gauge job security and pay-rise arguments.'] },
  // 5.4 (5)
  { id: 'igbus-fc-54-1', subtopicId: 'igcse-bus-5-4', front: 'Contrast Non-Current Assets with Current Assets.', backBullets: ['Non-current (>1 year): buildings, machinery, vehicles.', 'Current (<1 year): inventory, trade receivables (debtors), cash.'] },
  { id: 'igbus-fc-54-2', subtopicId: 'igcse-bus-5-4', front: 'Contrast Current Liabilities with Non-Current Liabilities.', backBullets: ['Current (<1 year): trade payables (creditors), bank overdraft, tax due.', 'Non-current (>1 year): long-term bank loans, mortgages, debentures.'] },
  { id: 'igbus-fc-54-3', subtopicId: 'igcse-bus-5-4', front: 'Write the Balance Sheet accounting equation and Capital Employed formula.', backBullets: ['Shareholders’ Equity = Total Assets − Total Liabilities.', 'Capital Employed = Shareholders’ Equity + Non-Current Liabilities.'] },
  { id: 'igbus-fc-54-4', subtopicId: 'igcse-bus-5-4', front: 'Why is negative working capital dangerous on a Balance Sheet?', backBullets: ['Current Liabilities exceed Current Assets, threatening inability to buy supplies or pay short-term debts (insolvency).'] },
  { id: 'igbus-fc-54-5', subtopicId: 'igcse-bus-5-4', front: 'Contrast Trade Receivables with Trade Payables.', backBullets: ['Trade Receivables = money owed TO the business by customers (Current Asset).', 'Trade Payables = money owed BY the business to suppliers (Current Liability).'] },
  // 5.5 (5)
  { id: 'igbus-fc-55-1', subtopicId: 'igcse-bus-5-5', front: 'Write all 3 Profitability Ratio equations.', backBullets: ['GPM = (Gross Profit ÷ Revenue) × 100; NPM = (Net Profit ÷ Revenue) × 100.', 'ROCE = (Net Profit ÷ Capital Employed) × 100.'] },
  { id: 'igbus-fc-55-2', subtopicId: 'igcse-bus-5-5', front: 'Write both Liquidity Ratio equations and healthy benchmarks.', backBullets: ['Current Ratio = CA ÷ CL (ideal 1.5–2.0).', 'Acid-Test Ratio = (CA − Inventory) ÷ CL (ideal ≥ 1.0).'] },
  { id: 'igbus-fc-55-3', subtopicId: 'igcse-bus-5-5', front: 'Why does the Acid-Test Ratio subtract Inventory?', backBullets: ['Inventory is the least liquid current asset — stock may take months to sell or lose value if forced to clear fast.'] },
  { id: 'igbus-fc-55-4', subtopicId: 'igcse-bus-5-5', front: 'What does it mean if GPM stays flat at 40% while NPM drops from 18% to 9%?', backBullets: ['Direct costs stayed controlled, but INDIRECT operating expenses (rent, wages, utilities, ads) surged disproportionately.'] },
  { id: 'igbus-fc-55-5', subtopicId: 'igcse-bus-5-5', front: 'Give 3 limitations of published financial ratio analysis.', backBullets: ['Historical past data only, distorted by inflation/accounting rules, and ignores qualitative factors like brand or morale.'] },
  // 6.1 (5)
  { id: 'igbus-fc-61-1', subtopicId: 'igcse-bus-6-1', front: 'Name the 4 stages of the Business Cycle.', backBullets: ['Growth → Boom → Recession → Slump.'], diagram: 'business-cycle' },
  { id: 'igbus-fc-61-2', subtopicId: 'igcse-bus-6-1', front: 'List the 4 main macroeconomic objectives of governments.', backBullets: ['Low inflation, low unemployment, steady economic growth (GDP), and a balanced Balance of Payments.'] },
  { id: 'igbus-fc-61-3', subtopicId: 'igcse-bus-6-1', front: 'Contrast Income Tax, Corporation Tax, and VAT impacts on firms.', backBullets: ['Income tax: cuts consumer disposable income; Corporation tax: cuts company retained profit; VAT: raises retail prices.'] },
  { id: 'igbus-fc-61-4', subtopicId: 'igcse-bus-6-1', front: 'List 3 ways higher interest rates impact a business.', backBullets: ['Costlier business loans (less investment), lower consumer spending (higher mortgages), and currency appreciation (dearer exports).'] },
  { id: 'igbus-fc-61-5', subtopicId: 'igcse-bus-6-1', front: 'How can a luxury retailer survive a recession?', backBullets: ['Introduce affordable value ranges, cut non-essential fixed overheads, focus on loyal segments, or expand into growing export markets.'] },
  // 6.2 (5)
  { id: 'igbus-fc-62-1', subtopicId: 'igcse-bus-6-2', front: 'Write the Social Cost and Social Benefit equations.', backBullets: ['Social Cost = Private Cost + External Cost; Social Benefit = Private Benefit + External Benefit.'], diagram: 'externality-market-failure' },
  { id: 'igbus-fc-62-2', subtopicId: 'igcse-bus-6-2', front: 'Define Sustainable Development with 2 business actions.', backBullets: ['Meeting present needs without depleting resources for future generations.', 'Actions: solar/wind energy, 100% recycled packaging, and zero-waste lean production.'] },
  { id: 'igbus-fc-62-3', subtopicId: 'igcse-bus-6-2', front: 'State 3 ways pressure groups influence business behaviour.', backBullets: ['Organising consumer boycotts, negative media/social campaigns, and lobbying governments for tougher laws.'] },
  { id: 'igbus-fc-62-4', subtopicId: 'igcse-bus-6-2', front: 'Give 2 short-term costs and 2 long-term gains of Ethical Decisions.', backBullets: ['Costs: higher Fairtrade supplier costs and fairer wages shrinking short-term margins.', 'Gains: superior brand reputation, motivated staff, loyal buyers paying a premium, and zero boycott risk.'] },
  { id: 'igbus-fc-62-5', subtopicId: 'igcse-bus-6-2', front: 'Name 3 government environmental controls on businesses.', backBullets: ['Strict pollution limits & fines, green/carbon taxes, tradable pollution permits, and clean-energy subsidies.'] },
  // 6.3 (5)
  { id: 'igbus-fc-63-1', subtopicId: 'igcse-bus-6-3', front: 'Contrast an Import Tariff with an Import Quota.', backBullets: ['Tariff: tax placed on imported goods (raises their price).', 'Quota: physical cap on the maximum quantity of imports allowed.'] },
  { id: 'igbus-fc-63-2', subtopicId: 'igcse-bus-6-3', front: 'Define a Multinational Company (MNC) accurately.', backBullets: ['A business owning physical factories, offices, or service outlets in MORE THAN ONE country (not merely exporting).'] },
  { id: 'igbus-fc-63-3', subtopicId: 'igcse-bus-6-3', front: 'List 3 benefits and 3 drawbacks of an MNC to a host nation.', backBullets: ['Benefits: local jobs, higher GDP & tax revenue, technology/training transfer.', 'Drawbacks: hurts local rivals, repatriates profits home, may pay low wages or harm environment.'] },
  { id: 'igbus-fc-63-4', subtopicId: 'igcse-bus-6-3', front: 'Explain SPICED for exchange-rate appreciation.', backBullets: ['Strong Pound: Imports Cheaper (helps importers), Exports Dearer (hurts exporters).'] },
  { id: 'igbus-fc-63-5', subtopicId: 'igcse-bus-6-3', front: 'Explain WPIDEC for exchange-rate depreciation.', backBullets: ['Weak Pound: Imports Dearer (raises import costs), Exports Cheaper (boosts export competitiveness).'] },
];

export const IGCSE_BUS_EXAM_PRACTICE_5_TO_6: ExamQuestionItem[] = [
  {
    id: 'igbus-exam-5-1',
    subtopicId: 'igcse-bus-5-1',
    number: 21,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] EcoPrint Ltd needs $120,000 to buy high-speed digital printing machines lasting 8 years and is choosing between a 5-year bank loan or leasing the machines.',
    parts: [
      {
        id: 'igbus-exam-5-1a',
        label: '(a)',
        prompt: 'Evaluate BOTH finance options and recommend the better choice for EcoPrint Ltd.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'A 5-year bank loan lets EcoPrint own the printing machines permanently as assets, though it requires collateral and fixed interest repayments regardless of sales. Leasing preserves working capital with no upfront lump sum and includes free maintenance/tech upgrades, though total long-term payments are higher and EcoPrint never owns the machines. Because printing technology upgrades rapidly, leasing is recommended to protect cash flow and stay up-to-date.',
          markPoints: [
            { id: 'mp1', markDescription: 'Bank loan pro/con: permanent ownership vs interest cost/collateral risk', requiredKeywordGroups: [['loan'], ['own', 'asset', 'interest', 'collateral']] },
            { id: 'mp2', markDescription: 'Leasing pro/con: preserves cash & includes maintenance vs never owned/costlier long run', requiredKeywordGroups: [['leas'], ['cash', 'maintenance', 'upgrade', 'never own', 'more expensive']] },
            { id: 'mp3', markDescription: 'Justified recommendation linked to printing tech or cash flow', requiredKeywordGroups: [['recommend', 'overall', 'tech', 'cash flow', 'printing']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-5-2',
    subtopicId: 'igcse-bus-5-2',
    number: 22,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] SolarRoof Ltd forecasts Month 3 Opening Balance = $4,000, Cash Inflows = $16,000, and Cash Outflows = $23,000 while granting customers 60-day credit.',
    parts: [
      {
        id: 'igbus-exam-5-2a',
        label: '(a)',
        prompt: 'Calculate SolarRoof’s Month 3 Closing Balance and recommend TWO actions to solve this deficit.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Net cash flow = $16,000 − $23,000 = −$7,000, giving a Closing Balance of $4,000 − $7,000 = −$3,000. SolarRoof should arrange a short-term bank overdraft to cover the −$3,000 deficit immediately and reduce customer credit from 60 to 30 days (or negotiate longer supplier trade credit) to accelerate cash inflows.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates Closing Balance = −$3,000', numericMatch: { value: -3000, tolerance: 1 } },
            { id: 'mp2', markDescription: 'Action 1: bank overdraft / chase debtors / shorter customer credit terms', requiredKeywordGroups: [['overdraft', 'debtor', '30 days', 'credit', 'discount']] },
            { id: 'mp3', markDescription: 'Action 2: negotiate longer supplier trade credit / lease or delay equipment', requiredKeywordGroups: [['supplier', 'trade credit', 'delay', 'lease', 'outflow']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-5-3',
    subtopicId: 'igcse-bus-5-3',
    number: 23,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] TastyBites Ltd is comparing launching Option A (Revenue $40,000, Cost of Sales $18,000, Expenses $10,000) vs Option B (Revenue $26,000, Cost of Sales $8,000, Expenses $9,000).',
    parts: [
      {
        id: 'igbus-exam-5-3a',
        label: '(a)',
        prompt: 'Calculate Net Profit for BOTH options and justify which product TastyBites Ltd should launch.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Option A: Gross Profit = $22,000 and Net Profit = $12,000. Option B: Gross Profit = $18,000 and Net Profit = $9,000. Even though Option B has lower cost of sales, Option A is recommended because it earns $3,000 higher net profit and $14,000 higher revenue.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates Option A Net Profit = $12,000', numericMatch: { value: 12000, tolerance: 1 } },
            { id: 'mp2', markDescription: 'Calculates Option B Net Profit = $9,000', numericMatch: { value: 9000, tolerance: 1 } },
            { id: 'mp3', markDescription: 'Recommends Option A justified by higher net profit ($3,000 more) / revenue', requiredKeywordGroups: [['option a'], ['higher', 'more', '3,000', '3000', 'profit']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-5-4',
    subtopicId: 'igcse-bus-5-4',
    number: 24,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] CleanGlass Window Services has Current Assets of $14,000 and Current Liabilities of $19,000 on its latest Statement of Financial Position.',
    parts: [
      {
        id: 'igbus-exam-5-4a',
        label: '(a)',
        prompt: 'Calculate CleanGlass’s working capital and explain TWO reasons why this position threatens the business.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Working capital = $14,000 − $19,000 = −$5,000 (negative working capital). First, CleanGlass may be unable to buy essential detergents and cleaning equipment, lowering service quality and losing customers. Second, it cannot pay short-term creditors or unexpected bills, risking severe liquidity crisis and insolvency.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates working capital = −$5,000', numericMatch: { value: -5000, tolerance: 1 } },
            { id: 'mp2', markDescription: 'Cannot purchase cleaning supplies/materials hurting customer service', requiredKeywordGroups: [['supplies', 'detergent', 'equipment', 'material', 'service', 'quality']] },
            { id: 'mp3', markDescription: 'Cannot pay short-term creditors/bills risking liquidity crisis or insolvency', requiredKeywordGroups: [['insolven', 'liquid', 'creditor', 'bill', 'unexpected', 'fail']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-5-5',
    subtopicId: 'igcse-bus-5-5',
    number: 25,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] RetailMart Plc has Revenue $250,000, Gross Profit $100,000, Net Profit $25,000, Current Assets $60,000 (including $35,000 inventory), and Current Liabilities $30,000.',
    parts: [
      {
        id: 'igbus-exam-5-5a',
        label: '(a)',
        prompt: 'Calculate RetailMart’s GPM, NPM, and Acid-Test Ratio, and comment on its liquidity.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'GPM = (100,000 ÷ 250,000) × 100 = 40%, NPM = (25,000 ÷ 250,000) × 100 = 10%, and Acid-Test Ratio = (60,000 − 35,000) ÷ 30,000 = 0.83. Because Acid-Test is below 1.0, RetailMart relies too heavily on unsold inventory and should clear excess stock or tighten debtor collection to strengthen liquidity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates GPM = 40% (and NPM = 10%)', numericMatch: { value: 40, tolerance: 0.2 } },
            { id: 'mp2', markDescription: 'Calculates Acid-Test = 0.83', numericMatch: { value: 0.83, tolerance: 0.03 } },
            { id: 'mp3', markDescription: 'Identifies liquidity risk (< 1.0) / over-reliance on inventory', requiredKeywordGroups: [['below 1', 'under 1', 'inventory', 'stock', 'liquid']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-6-1',
    subtopicId: 'igcse-bus-6-1',
    number: 26,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] The central bank raises interest rates from 2% to 6% while the government increases income tax to cool a booming economy.',
    diagram: 'business-cycle',
    parts: [
      {
        id: 'igbus-exam-6-1a',
        label: '(a)',
        prompt: 'Explain how BOTH policy changes affect a heavily borrowed luxury sofa retailer.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Higher interest rates (6%) sharply increase interest repayments on the retailer’s existing loans and make new borrowing expensive, cutting profits and halting expansion. Meanwhile, higher income tax plus higher consumer mortgages lower household disposable income, reducing demand for non-essential luxury sofas.',
          markPoints: [
            { id: 'mp1', markDescription: 'Higher interest rates raise loan repayments / cut profit / deter expansion', requiredKeywordGroups: [['loan', 'repayment', 'borrow', 'interest'], ['cost', 'profit', 'expansion', 'expensive']] },
            { id: 'mp2', markDescription: 'Higher income tax lowers household disposable income', requiredKeywordGroups: [['income tax', 'disposable income'], ['lower', 'fall', 'reduc', 'less']] },
            { id: 'mp3', markDescription: 'Luxury non-essential sofa demand falls sharply', requiredKeywordGroups: [['luxury', 'non-essential', 'sofa', 'demand', 'sales'], ['fall', 'drop', 'reduc', 'lower']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-6-2',
    subtopicId: 'igcse-bus-6-2',
    number: 27,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] PureThread Clothing faces a pressure-group campaign over synthetic dye pollution and is deciding whether to switch to ethical organic suppliers costing 15% more.',
    diagram: 'externality-market-failure',
    parts: [
      {
        id: 'igbus-exam-6-2a',
        label: '(a)',
        prompt: 'Do you think acting ethically will always reduce PureThread’s profits? Justify your answer.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Switching to organic suppliers raises variable costs by 15%, lowering short-term profit margins and risking higher prices. However, acting ethically ends the pressure-group boycott, boosts employee motivation, and strengthens PureThread’s brand reputation so loyal customers willingly pay higher prices. Therefore, ethical production does not always lower profit and can boost long-term profitability.',
          markPoints: [
            { id: 'mp1', markDescription: 'Higher supplier costs (+15%) squeeze short-term profit margins', requiredKeywordGroups: [['cost', '15%', 'margin'], ['higher', 'lower', 'reduc', 'increas']] },
            { id: 'mp2', markDescription: 'Builds brand reputation, avoids boycott, lifts staff motivation / premium pricing', requiredKeywordGroups: [['reputation', 'brand', 'boycott', 'motivat', 'higher price', 'loyal']] },
            { id: 'mp3', markDescription: 'Clear justified conclusion (does not always lower long-term profit)', requiredKeywordGroups: [['therefore', 'not always', 'long-term', 'competitive', 'profit']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igbus-exam-6-3',
    subtopicId: 'igcse-bus-6-3',
    number: 28,
    stimulus: '[Cambridge IGCSE 0450/0264 Style] KLG Appliances exports washing machines from Country A priced at $400 and imports microchips from abroad. Country A’s currency appreciates by 20% while a foreign MNC applies to open a rival factory in Country A.',
    parts: [
      {
        id: 'igbus-exam-6-3a',
        label: '(a)',
        prompt: 'Analyse how the 20% currency appreciation affects KLG AND evaluate ONE benefit and ONE drawback of the foreign MNC for Country A.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Under SPICED, a 20% currency appreciation makes KLG’s exported washing machines dearer overseas, lowering export demand, though imported microchips become cheaper. For Country A, the foreign MNC creates local jobs and pays corporate taxes funding public services, yet increases competition for domestic firms like KLG and may repatriate profits abroad.',
          markPoints: [
            { id: 'mp1', markDescription: 'SPICED: washing-machine exports dearer (lower demand) while imported microchips cheaper', requiredKeywordGroups: [['export', 'dearer', 'more expensive'], ['import', 'cheaper', 'microchip']] },
            { id: 'mp2', markDescription: 'MNC benefit for Country A: local jobs, tax revenue, GDP, or technology transfer', requiredKeywordGroups: [['job', 'employ', 'tax', 'gdp', 'technology']] },
            { id: 'mp3', markDescription: 'MNC drawback: squeezes local firms like KLG or repatriates profits abroad', requiredKeywordGroups: [['local', 'competit', 'repatriat', 'domestic', 'struggle']] },
          ],
        },
      },
    ],
  },
];
