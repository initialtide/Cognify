import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const IGCSE_CS_UNITS_7_10_TOPICS: TopicDefinition[] = [
  {
    number: 7,
    title: 'Algorithm Design & Problem-Solving',
    subtopics: [
      {
        id: 'cs-7-1',
        code: '7.1',
        slug: '7.1-sdlc-decomposition-structure-diagrams-pseudocode',
        title: 'Program Development Life Cycle, Decomposition, Structure Diagrams & Pseudocode',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-7-2',
        code: '7.2',
        slug: '7.2-linear-search-bubble-sort-standard-algorithms',
        title: 'Standard Algorithms: Linear Search, Bubble Sort, Totalling, Counting & Max/Min',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'cs-7-3',
        code: '7.3',
        slug: '7.3-validation-verification-test-data-trace-tables',
        title: 'Validation, Verification, Test Data & Trace Tables',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 8,
    title: 'Programming',
    subtopics: [
      {
        id: 'cs-8-1',
        code: '8.1',
        slug: '8.1-variables-constructs-operators-strings',
        title: 'Variables, Data Types, Sequence/Selection/Iteration, Operators & String Handling',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'cs-8-2',
        code: '8.2',
        slug: '8.2-procedures-functions-scope-library-maintainability',
        title: 'Procedures, Functions, Parameters, Local/Global Scope, Libraries & Maintainability',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-8-3',
        code: '8.3',
        slug: '8.3-arrays-1d-2d-file-handling',
        title: '1D & 2D Arrays, Nested Iteration & Text File Handling',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 9,
    title: 'Databases',
    subtopics: [
      {
        id: 'cs-9-1',
        code: '9.1',
        slug: '9.1-databases-primary-keys-data-types-sql',
        title: 'Single-Table Databases, Primary Keys, Data Types & SQL Queries',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 10,
    title: 'Boolean Logic',
    subtopics: [
      {
        id: 'cs-10-1',
        code: '10.1',
        slug: '10.1-logic-gates-symbols-truth-tables',
        title: 'Logic Gates (NOT, AND, OR, NAND, NOR, XOR) & Truth Tables',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-10-2',
        code: '10.2',
        slug: '10.2-logic-circuits-expressions-problem-statements',
        title: 'Building Logic Circuits & Expressions from Truth Tables & Problem Statements',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_CS_UNITS_7_10_NOTES: Record<string, NoteLesson> = {
  'cs-7-1': {
    subtopicId: 'cs-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Program Development Life Cycle, Decomposition, Structure Diagrams & Pseudocode',
    readingMinutes: 10,
    videoTitle: '75. CAMBRIDGE IGCSE (0478-0984) 7 Decomposition overview',
    youtubeId: 'UR4ZWB1B8cU',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:14',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Program Development Life Cycle (Analysis → Design → Coding → Testing)', cardId: 'cs-7-1-c1' },
      { time: '2:25', seconds: 145, label: 'Abstraction, Top-Down Decomposition & Structure Diagrams', cardId: 'cs-7-1-c2' },
      { time: '4:50', seconds: 290, label: 'Designing Algorithms: Flowcharts vs Cambridge Pseudocode', cardId: 'cs-7-1-c3' },
    ],
    cards: [
      {
        id: 'cs-7-1-c1',
        title: 'Program Development Life Cycle (4 Stages)',
        summary: 'Software is engineered iteratively across four structured phases: Analysis, Design, Coding, and Testing.',
        bullets: [
          '**1. Analysis** — identify requirements using **abstraction** (hiding irrelevant detail) and **decomposition** (splitting into sub-problems); define inputs, processes, outputs, and storage.',
          '**2. Design** — blueprint the solution before coding using **structure diagrams**, **flowcharts**, and **pseudocode**.',
          '**3. Coding** — write modular program code in a chosen high-level language and execute **iterative testing** on each module.',
          '**4. Testing** — test the integrated system rigorously with normal, abnormal, extreme, and boundary test data until every requirement passes.',
        ],
        subsections: [
          {
            heading: 'Why Iterative Cycling Matters',
            bullets: [
              '**Feedback loop** — bugs discovered during Testing often trigger revisions back to Design or Coding rather than waiting until deployment.',
            ],
            exampleHeading: 'Worked example: Specifying a car-park ticket subsystem (IPOS)',
            examples: [
              'Input = `entryTime, exitTime`; Process = `hours ← CEIL(exitTime − entryTime)`, `fee ← hours × 2.50`; Output = `fee` on display; Storage = daily revenue log.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'abstraction', definition: 'Removing unnecessary detail from a problem to focus solely on the essential inputs, processes, and outputs.' },
          { term: 'decomposition', definition: 'Breaking a complex system down into smaller, manageable sub-systems and modules.' },
        ],
      },
      {
        id: 'cs-7-1-c2',
        title: 'Top-Down Design & Structure Diagrams',
        summary: 'Structure diagrams visually decompose a system hierarchically from the top-level program down to reusable single-purpose sub-routines.',
        bullets: [
          '**Structure diagram** — tree hierarchy showing how a top-level problem splits into sub-systems (`Inputs`, `Validation`, `Processing`, `Outputs`), which can be built and tested independently by different programmers.',
          '**Benefits of modular decomposition** — simpler to debug, easier to divide across a team, and reusable modules reduce duplicate code.',
        ],
        subsections: [
          {
            heading: 'Decomposing an Exam Grading App',
            bullets: [
              '**Top node**: `Exam Grading System` → branches into `Input Marks`, `Validate Range (0–100)`, `Calculate Average & Grade`, and `Output Report`.',
            ],
            exampleHeading: 'Worked hierarchy trace',
            examples: [
              'Each leaf box maps to a clean procedure or function (`InputMarks()`, `ComputeGrade(mark)`), isolating bugs to one small module.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'structure diagram', definition: 'Hierarchical top-down chart illustrating how a system decomposes into sub-systems and sub-routines.' },
        ],
      },
      {
        id: 'cs-7-1-c3',
        title: 'Flowcharts & Cambridge 0478 Pseudocode Standards',
        summary: 'Flowcharts visualize control flow with standard shapes; Cambridge pseudocode expresses language-independent logic using uppercase keywords and `←` assignment.',
        bullets: [
          '**Standard Flowchart Symbols** — **Terminator** (rounded oval: `Start`/`Stop`), **Input/Output** (parallelogram), **Process** (rectangle), **Decision** (diamond with `Yes`/`No` branches), **Subroutine** (rectangle with double vertical bars), **Flow arrows**.',
          '**Cambridge 0478 Pseudocode Syntax** — uppercase keywords (`INPUT`, `OUTPUT`, `IF ... THEN ... ELSE ... ENDIF`, `CASE OF ... ENDCASE`, `FOR ... TO ... NEXT`, `WHILE ... DO ... ENDWHILE`, `REPEAT ... UNTIL`), assignment arrow `←`, and `DIV` / `MOD`.',
        ],
        subsections: [
          {
            heading: 'Worked Pseudocode Snippet',
            bullets: [
              '**Always close every block** — `ENDIF`, `ENDCASE`, `NEXT`, `ENDWHILE`!',
            ],
            exampleHeading: 'Worked example: Award Pass/Merit/Fail',
            examples: [
              '`IF Score >= 80 THEN OUTPUT "Merit" ELSE IF Score >= 50 THEN OUTPUT "Pass" ELSE OUTPUT "Fail" ENDIF ENDIF`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pseudocode', definition: 'Structured English-like notation expressing algorithm logic independent of any specific programming language.' },
        ],
        memoryAid: 'SDLC = A-D-C-T (Analysis, Design, Coding, Testing). Parallelogram = I/O, Diamond = Decision!',
        commonMistake: 'Leaving out `Yes` / `No` labels on arrows exiting a Flowchart Decision diamond — Cambridge Paper 2 deducts a mark if decision branches are unlabelled!',
      },
    ],
    keyTerms: [
      { term: 'Abstraction', definition: 'Filtering out irrelevant details to model only the essential attributes of a problem.' },
      { term: 'Decomposition', definition: 'Breaking a large problem down into smaller, independently solvable sub-systems.' },
      { term: 'Structure Diagram', definition: 'Hierarchical diagram decomposing a software system into modular sub-tasks.' },
      { term: 'Pseudocode', definition: 'Language-independent structured notation for planning algorithms before coding.' },
    ],
    checklistPoints: [
      'Describe all four stages of the Program Development Life Cycle (Analysis, Design, Coding, Testing)',
      'Explain abstraction and top-down decomposition using a structure diagram',
      'Draw standard flowchart symbols and write valid Cambridge 0478 pseudocode blocks',
    ],
  },

  'cs-7-2': {
    subtopicId: 'cs-7-2',
    subtopicCode: '7.2',
    subtopicTitle: 'Standard Algorithms: Linear Search, Bubble Sort, Totalling, Counting & Max/Min',
    readingMinutes: 11,
    videoTitle: '81. CAMBRIDGE IGCSE (0478-0984) 7 Bubble sort',
    youtubeId: 'lVBYtXxuZiM',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:36',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Linear Search: Scanning Unsorted Arrays Step-by-Step', cardId: 'cs-7-2-c1' },
      { time: '2:35', seconds: 155, label: 'Bubble Sort: Pairwise Swaps & Early-Exit Swap Flag', cardId: 'cs-7-2-c2' },
      { time: '5:10', seconds: 310, label: 'Totalling, Counting, Average, Maximum & Minimum Patterns', cardId: 'cs-7-2-c3' },
    ],
    cards: [
      {
        id: 'cs-7-2-c1',
        title: 'Linear Search Algorithm',
        summary: 'Linear search inspects each array element sequentially from index 1 until the target item is found or the end is reached — works on unsorted lists.',
        diagram: 'sorting-searching-trace',
        bullets: [
          '**How Linear Search works** — initialise `Found ← FALSE`, `Index ← 1`; loop while `NOT Found AND Index <= Length`; if `List[Index] = Target` set `Found ← TRUE`, else `Index ← Index + 1`.',
          '**Strength & weakness** — works on **unsorted** data with zero setup, simple to code; slow on huge lists because worst-case checks all `n` elements (`O(n)`).',
        ],
        subsections: [
          {
            heading: 'Worked Linear Search Pseudocode',
            bullets: [
              '**Post-loop check** — always test `IF Found = TRUE` after the loop to output the position or `"Not found"`.',
            ],
            exampleHeading: 'Worked trace: Searching `[19, 4, 27, 11]` for `27`',
            examples: [
              '`Index=1 (19≠27) → Index=2 (4≠27) → Index=3 (27=27)` → sets `Found ← TRUE`, exits loop after `3` comparisons!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'linear search', definition: 'Sequential search checking every item one by one from the start until the target is found or the list ends.' },
        ],
      },
      {
        id: 'cs-7-2-c2',
        title: 'Bubble Sort Algorithm & Optimisation',
        summary: 'Bubble sort repeatedly compares adjacent elements and swaps out-of-order pairs until a full pass completes with zero swaps.',
        bullets: [
          '**Core mechanism** — compare `A[i]` with `A[i + 1]`; if `A[i] > A[i + 1]`, swap using a temporary variable (`Temp ← A[i]; A[i] ← A[i+1]; A[i+1] ← Temp`) and set `Swapped ← TRUE`.',
          '**Two vital optimisations** — (1) Use a Boolean flag `Swapped` inside a `REPEAT ... UNTIL NOT Swapped` loop so sorting stops early once sorted; (2) Decrement the upper boundary `Top ← Top - 1` after each pass because the largest unsorted value has bubbled to the end.',
        ],
        subsections: [
          {
            heading: 'Worked Pass 1 of Bubble Sort',
            bullets: [
              '**Temporary variable** — swapping without `Temp` overwrites and loses one value!',
            ],
            exampleHeading: 'Worked trace: Pass 1 on `[14, 5, 9, 2]`',
            examples: [
              'Compare `14,5` → swap `[5,14,9,2]`; compare `14,9` → swap `[5,9,14,2]`; compare `14,2` → swap **`[5,9,2,14]`** (`14` locked at end!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'bubble sort', definition: 'Sorting algorithm that repeatedly compares and swaps adjacent out-of-order elements across passes until no swaps occur.' },
        ],
      },
      {
        id: 'cs-7-2-c3',
        title: 'Standard Methods: Totalling, Counting, Average, Max & Min',
        summary: 'Paper 2 frequently tests five canonical loop patterns: accumulating totals, counting matches, computing averages, and finding maximum/minimum values.',
        bullets: [
          '**Totalling & Counting** — initialise `Total ← 0` and `Count ← 0` **before** the loop; inside the loop add `Total ← Total + Value` and `Count ← Count + 1`; after the loop compute `Average ← Total / Count` (guarding against `Count = 0`).',
          '**Maximum & Minimum initialisation** — initialise `Max ← Array[1]` and `Min ← Array[1]` (or safely extreme sentinel values like `Max ← −9999`, `Min ← 9999`), then compare every remaining item updating `IF Array[i] > Max THEN Max ← Array[i]`.',
        ],
        subsections: [
          {
            heading: 'Worked Max/Min Safe Pattern',
            bullets: [
              '**Why `Min ← 0` is a classic bug!** — if every input temperature is positive (`12, 18, 24 °C`), initialising `Min ← 0` falsely reports `0` as the minimum!',
            ],
            exampleHeading: 'Worked trace on `Scores = [64, 91, 78, 52]`',
            examples: [
              'Start `Max ← 64, Min ← 64` → check `91` (`Max=91`) → check `78` (no change) → check `52` (`Min=52`); `Total = 285`, `Average = 285 ÷ 4 = 71.25`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'totalling', definition: 'Accumulating a running sum by adding each successive value into an initially zero total variable.' },
          { term: 'counting', definition: 'Incrementing an integer counter variable by 1 each time an event or matching condition occurs.' },
        ],
        memoryAid: 'Bubble Sort swap ALWAYS uses `Temp`! Max/Min ALWAYS starts at `Array[1]` (never `Min ← 0`)!',
        commonMistake: 'Initialising `Min ← 0` when finding the lowest positive test score — `0` is smaller than every score, so `Min` never updates! Always initialise `Min ← List[1]`!',
      },
    ],
    keyTerms: [
      { term: 'Linear Search', definition: 'Inspecting items sequentially from index 1 until target matches or array ends.' },
      { term: 'Bubble Sort', definition: 'Repeatedly swapping adjacent out-of-order items until a full pass makes zero swaps.' },
      { term: 'Totalling & Counting', definition: 'Accumulating a running sum (`Total ← Total + X`) and tally (`Count ← Count + 1`).' },
      { term: 'Temporary Swap Variable', definition: 'Extra variable (`Temp`) preventing data overwrite when exchanging two array elements.' },
    ],
    checklistPoints: [
      'Write and trace Linear Search pseudocode with a `Found` flag',
      'Trace Bubble Sort passes using a `Temp` swap variable, `Swapped` flag, and shrinking boundary',
      'Write bug-free totalling, counting, average, and maximum/minimum pseudocode',
    ],
  },

  'cs-7-3': {
    subtopicId: 'cs-7-3',
    subtopicCode: '7.3',
    subtopicTitle: 'Validation, Verification, Test Data & Trace Tables',
    readingMinutes: 11,
    videoTitle: '86. CAMBRIDGE IGCSE (0478-0984) 7 Trace tables',
    youtubeId: '-7_kyY88Y9Y',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:48',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: '6 Automated Validation Checks (Range, Length, Type, Presence, Format, Check Digit)', cardId: 'cs-7-3-c1' },
      { time: '2:45', seconds: 165, label: 'Verification (Double Entry & Visual Check) vs Validation', cardId: 'cs-7-3-c2' },
      { time: '5:15', seconds: 315, label: '4 Categories of Test Data & Dry-Running Trace Tables', cardId: 'cs-7-3-c3' },
    ],
    cards: [
      {
        id: 'cs-7-3-c1',
        title: 'Data Validation Checks (Reasonable & Sensible)',
        summary: 'Validation is an automated computer check ensuring entered data is reasonable and meets predefined rules before acceptance (not that it is factually true!).',
        bullets: [
          '**Range check** — value lies between lower and upper bounds (e.g. exam percentage `0 <= Mark <= 100`).',
          '**Length check** — string has an exact or bounded character count (e.g. 8-character password `LENGTH(Pwd) >= 8`).',
          '**Type check** — confirms correct data type (e.g. age is an `INTEGER`, not `"twenty"`).',
          '**Presence check** — ensures a mandatory field is not left blank (`Name <> ""`).',
          '**Format check** — matches a fixed character pattern (e.g. `DD/MM/YYYY` or `AB12 3CD`).',
          '**Check digit** — extra computed digit validating scanned/typed IDs (ISBN-13, barcodes).',
        ],
        subsections: [
          {
            heading: 'Validation Loop Pattern in Pseudocode',
            bullets: [
              '**`REPEAT ... UNTIL`** guarantees at least one input prompt and re-prompts until valid.',
            ],
            exampleHeading: 'Worked example: Range check for `1` to `10`',
            examples: [
              '`REPEAT INPUT Num UNTIL Num >= 1 AND Num <= 10` — rejects `0` and `11`, accepts `1` through `10`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'validation', definition: 'Automated computer check confirming input data is sensible and conforms to defined rules before processing.' },
          { term: 'range check', definition: 'Validation verifying that a numeric or date value falls within specified minimum and maximum limits.' },
        ],
      },
      {
        id: 'cs-7-3-c2',
        title: 'Verification vs Validation',
        summary: 'Verification checks that data has not been corrupted or mistyped during entry or copying (matches the original source), using double entry or visual checks.',
        bullets: [
          '**Core contrast** — **Validation** checks data is *reasonable* against rules (`age = 45` is valid even if your real age is `16`!). **Verification** checks data matches the *original source* accurately.',
          '**Double entry** — user enters data twice (e.g. `"Confirm new password"` or `"Re-enter email"`); computer rejects if the two entries differ.',
          '**Visual (Screen) check** — user manually compares displayed data on screen against the original paper form before clicking Confirm.',
        ],
        subsections: [
          {
            heading: 'Why Both Are Needed Together',
            bullets: [
              '**Combined protection** — a Range Check catches `Mark = 150`; Double Entry catches typing `74` instead of `47`!',
            ],
            exampleHeading: 'Worked example: Setting a new bank password',
            examples: [
              'Length & Format **validation** enforces `>= 10` chars with a digit; Double Entry **verification** catches typos by requiring exact re-typing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'verification', definition: 'Checking that copied or entered data accurately matches its original source (via double entry or visual check).' },
        ],
      },
      {
        id: 'cs-7-3-c3',
        title: 'Test Data Categories & Trace Tables',
        summary: 'Systematic testing covers Normal, Abnormal, Extreme, and Boundary inputs; trace tables dry-run every variable and output row by row to find logic errors.',
        bullets: [
          '**Normal test data** — typical valid inputs expected to be accepted (for `1..100`: `50`).',
          '**Abnormal (Erroneous) test data** — invalid data type or out-of-range inputs expected to be rejected (`−5`, `150`, `"abc"`).',
          '**Extreme test data** — the exact lowest and highest **accepted** valid limits (`1` and `100`).',
          '**Boundary test data** — a pair of values straddling each boundary: one just accepted and one just rejected (`0 & 1`, and `100 & 101`).',
          '**Trace table** — column for every variable + `OUTPUT`; step through every line strictly in execution order, writing a new value only when it changes.',
        ],
        subsections: [
          {
            heading: 'Worked Dry-Run Trace Table',
            bullets: [
              '**Golden rule** — never "guess" the final output in your head; update each column mechanically one line at a time!',
            ],
            exampleHeading: 'Worked trace: `Total ← 0; FOR i ← 1 TO 3: Total ← Total + i * 2; NEXT i; OUTPUT Total`',
            examples: [
              'Init: `Total=0` → `i=1: Total=2` → `i=2: Total=6` → `i=3: Total=12` → `OUTPUT = 12`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'boundary test data', definition: 'Test pair placed immediately inside and outside an acceptance threshold (e.g. 0 & 1, 100 & 101) to catch `<` vs `<=` bugs.' },
          { term: 'trace table', definition: 'Structured dry-run grid recording how variable values and outputs evolve line by line during algorithm execution.' },
        ],
        memoryAid: 'Validation = Sensible? (Rules). Verification = Identical to source? (Double entry / Visual). Boundary = Pair straddling edge (0 & 1)!',
        commonMistake: 'Writing "validation checks data is correct" — NEVER say "correct"! Validation only checks data is REASONABLE/SENSIBLE according to rules (`15/06/2008` is valid even if your real birthday is `16/06/2008`)!',
      },
    ],
    keyTerms: [
      { term: 'Validation', definition: 'Automated rule check confirming input data is sensible and within defined constraints.' },
      { term: 'Verification', definition: 'Checking entered/copied data matches its original source (double entry or visual check).' },
      { term: 'Extreme vs Boundary Data', definition: 'Exact valid limits (1, 100) vs pairs straddling each limit (0 & 1, 100 & 101).' },
      { term: 'Trace Table', definition: 'Manual dry-run grid tracking variable changes and outputs step-by-step to debug logic.' },
    ],
    checklistPoints: [
      'Apply all six Cambridge validation checks and distinguish validation from verification',
      'Select appropriate Normal, Abnormal, Extreme, and Boundary test data for any rule',
      'Complete a trace table accurately and diagnose off-by-one or logic errors',
    ],
  },

  'cs-8-1': {
    subtopicId: 'cs-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Variables, Data Types, Sequence/Selection/Iteration, Operators & String Handling',
    readingMinutes: 11,
    videoTitle: '92. CAMBRIDGE IGCSE (0478-0984) 8.1 The use of the three basic programming constructs',
    youtubeId: 'QgffZbGnBvg',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:44',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Variables, Constants & 5 Core Data Types', cardId: 'cs-8-1-c1' },
      { time: '2:35', seconds: 155, label: 'Sequence, Selection (IF/CASE) & 3 Iteration Loops', cardId: 'cs-8-1-c2' },
      { time: '5:10', seconds: 310, label: 'DIV, MOD, Boolean Operators & String Manipulation', cardId: 'cs-8-1-c3' },
    ],
    cards: [
      {
        id: 'cs-8-1-c1',
        title: 'Variables, Constants & Core Data Types',
        summary: 'Variables store mutable values in named memory locations; constants store fixed values that never change during execution; data types define valid storage and operations.',
        bullets: [
          '**Variable vs Constant** — a **Variable** (`DECLARE Score : INTEGER`) can change during runtime; a **Constant** (`CONSTANT Pi = 3.14159`) stays fixed, preventing accidental overwrites and making code self-documenting.',
          '**5 Cambridge Data Types** — `INTEGER` (whole numbers, e.g. `−42`, `100`), `REAL` (decimal numbers, e.g. `3.14`), `CHAR` (single character `\'A\'`), `STRING` (sequence of characters `"CIE0478"`), `BOOLEAN` (`TRUE` or `FALSE`).',
        ],
        subsections: [
          {
            heading: 'Choosing the Right Data Type',
            bullets: [
              '**Phone numbers & postcodes** → ALWAYS use `STRING` (not `INTEGER`), because integers strip leading zeroes (`07700` → `7700`) and cannot hold spaces/letters!',
            ],
            exampleHeading: 'Worked declarations in Cambridge Pseudocode',
            examples: [
              '`DECLARE Age : INTEGER`, `DECLARE Price : REAL`, `DECLARE Grade : CHAR`, `DECLARE Phone : STRING`, `DECLARE Passed : BOOLEAN`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'constant', definition: 'Named memory value fixed at declaration that cannot be altered during program execution.' },
          { term: 'Boolean', definition: 'Data type holding strictly one of two logical truth values: TRUE or FALSE.' },
        ],
      },
      {
        id: 'cs-8-1-c2',
        title: 'Sequence, Selection & The 3 Iteration Loops',
        summary: 'Every structured program combines Sequence (step-by-step), Selection (`IF`/`CASE`), and Iteration (`FOR` count-controlled, `WHILE` pre-condition, `REPEAT` post-condition).',
        bullets: [
          '**Selection** — `IF ... THEN ... ELSE ... ENDIF` evaluates Boolean expressions; `CASE OF Variable ... OTHERWISE ... ENDCASE` cleanly handles multiple discrete options.',
          '**Count-controlled loop (`FOR`)** — runs a **known fixed number** of iterations (`FOR i ← 1 TO 10 ... NEXT i`).',
          '**Pre-condition loop (`WHILE ... DO ... ENDWHILE`)** — tests condition **before** entering, so loop body may execute **0 times** if initially false.',
          '**Post-condition loop (`REPEAT ... UNTIL`)** — tests condition **at the end**, guaranteeing the loop body runs **at least once** (ideal for input validation!).',
        ],
        subsections: [
          {
            heading: 'Choosing `FOR` vs `WHILE` vs `REPEAT`',
            bullets: [
              '**Known count** → `FOR`; **unknown count, might skip entirely** → `WHILE`; **unknown count, must run ≥ 1 time** → `REPEAT`.',
            ],
            exampleHeading: 'Worked example: Nested selection & loop',
            examples: [
              'Reading sensor samples until `−1` sentinel arrives uses `WHILE Sample <> -1 DO ... ENDWHILE`, stopping immediately if the very first reading is `−1`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pre-condition loop', definition: 'Iteration (`WHILE`) that evaluates its Boolean condition before executing the body, allowing 0 iterations.' },
          { term: 'post-condition loop', definition: 'Iteration (`REPEAT ... UNTIL`) that tests its exit condition at the end, executing at least once.' },
        ],
      },
      {
        id: 'cs-8-1-c3',
        title: 'Arithmetic (`DIV`/`MOD`), Logical Operators & String Handling',
        summary: '`DIV` returns integer quotients, `MOD` returns remainders, Boolean operators combine conditions (`AND`/`OR`/`NOT`), and string functions extract/transform text.',
        bullets: [
          '**Arithmetic & Relational** — `+`, `-`, `*`, `/`, `^` (power), **`DIV`** (integer division: `17 DIV 5 = 3`), **`MOD`** (remainder: `17 MOD 5 = 2`, tests evenness via `n MOD 2 = 0`); relational `<`, `<=`, `>`, `>=`, `=`, `<>` (not equal).',
          '**Logical operators** — `AND` (both true), `OR` (at least one true), `NOT` (inverts truth value).',
          '**Cambridge String Functions** — `LENGTH(s)`, `SUBSTRING(s, start, length)` (1-indexed in CIE!), `LCASE(s)` (lowercase), `UCASE(s)` (uppercase).',
        ],
        subsections: [
          {
            heading: 'Worked String & `MOD`/`DIV` Evaluation',
            bullets: [
              '**Watch 1-based indexing!** — In Cambridge 0478 pseudocode, the first character of a string is at position **`1`** (not `0`).',
            ],
            exampleHeading: 'Worked example on `Word ← "Computer"` and `Mins ← 135`',
            examples: [
              '`LENGTH(Word) = 8`, `SUBSTRING(Word, 1, 4) = "Comp"`, `UCASE("cie") = "CIE"`.',
              'Hours = `135 DIV 60 = 2`; Remaining minutes = `135 MOD 60 = 15` → **`2h 15m`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'MOD operator', definition: 'Modulo operator returning the integer remainder after division (e.g. `17 MOD 5 = 2`).' },
        ],
        memoryAid: 'WHILE = 0 or more times (test first). REPEAT = 1 or more times (test last). `DIV` = Whole times, `MOD` = Remainder!',
        commonMistake: 'Storing phone numbers like `"07912345678"` as an `INTEGER` — leading zeroes disappear! Always choose `STRING` for identifiers that are not used in arithmetic.',
      },
    ],
    keyTerms: [
      { term: 'Variable vs Constant', definition: 'Named mutable storage location vs fixed read-only identifier.' },
      { term: 'Selection & Iteration', definition: 'Branching (`IF`/`CASE`) and looping (`FOR`/`WHILE`/`REPEAT`) control structures.' },
      { term: 'DIV & MOD', definition: 'Integer quotient (`17 DIV 5 = 3`) and integer remainder (`17 MOD 5 = 2`).' },
      { term: 'SUBSTRING(s, start, len)', definition: '1-indexed Cambridge string routine extracting `len` characters beginning at `start`.' },
    ],
    checklistPoints: [
      'Select appropriate data types (`INTEGER`, `REAL`, `CHAR`, `STRING`, `BOOLEAN`) and declare constants',
      'Choose correctly between `FOR`, `WHILE`, and `REPEAT ... UNTIL` loops',
      'Evaluate `DIV`, `MOD`, Boolean logic (`AND`/`OR`/`NOT`), and `LENGTH`/`SUBSTRING`/`UCASE`/`LCASE`',
    ],
  },

  'cs-8-2': {
    subtopicId: 'cs-8-2',
    subtopicCode: '8.2',
    subtopicTitle: 'Procedures, Functions, Parameters, Local/Global Scope, Libraries & Maintainability',
    readingMinutes: 10,
    videoTitle: '98. CAMBRIDGE IGCSE (0478-0984) 8.1 Procedures, functions and parameters',
    youtubeId: 'hiaejS7bgQQ',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:30',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Procedures vs Functions & Parameter Passing', cardId: 'cs-8-2-c1' },
      { time: '2:30', seconds: 150, label: 'Local vs Global Variable Scope', cardId: 'cs-8-2-c2' },
      { time: '5:00', seconds: 300, label: 'Built-in Library Routines & Writing Maintainable Code', cardId: 'cs-8-2-c3' },
    ],
    cards: [
      {
        id: 'cs-8-2-c1',
        title: 'Procedures vs Functions & Parameters',
        summary: 'Both procedures and functions bundle reusable code; a function RETURNS a value to its caller, whereas a procedure executes actions without returning a value.',
        bullets: [
          '**Procedure** — defined with `PROCEDURE Name(Param : Type) ... ENDPROCEDURE` and invoked with `CALL Name(arg)`; performs an action (e.g. printing a menu) and **does NOT return a value**.',
          '**Function** — defined with `FUNCTION Name(Param : Type) RETURNS Type ... RETURN val ... ENDFUNCTION`; **always returns a value** used in an assignment or expression (`Total ← CalcTax(Price)`).',
          '**Parameters** — input variables passed into a subroutine so the same reusable block operates cleanly on different data values.',
        ],
        subsections: [
          {
            heading: 'Worked Procedure & Function Syntax',
            bullets: [
              '**Avoid repeating code** — edit one function and every call site automatically benefits.',
            ],
            exampleHeading: 'Worked example: `FUNCTION Area(W : REAL, H : REAL) RETURNS REAL`',
            examples: [
              '`FUNCTION Area(W : REAL, H : REAL) RETURNS REAL` → `RETURN W * H` → `ENDFUNCTION`.',
              'Caller executes `RoomSize ← Area(4.5, 3.2)` → assigns **`14.4`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'function', definition: 'Named reusable subroutine that takes optional parameters and returns a value back to the calling statement.' },
          { term: 'procedure', definition: 'Named reusable subroutine that executes a task without returning a value.' },
        ],
      },
      {
        id: 'cs-8-2-c2',
        title: 'Local vs Global Variable Scope',
        summary: 'Local variables exist only inside their declaring subroutine (preventing accidental side effects and freeing RAM); global variables persist across the whole program.',
        bullets: [
          '**Local variable** — declared inside a procedure/function; only accessible within that subroutine and destroyed when it ends. **Why preferred?** Prevents unintended overwrites (**side effects**), makes modules self-contained/reusable, and frees memory on exit.',
          '**Global variable** — declared in main program scope; readable/modifiable anywhere. Useful for shared constants/config, but risky because any subroutine can corrupt it unexpectedly, making debugging hard.',
        ],
        subsections: [
          {
            heading: 'Passing Data Cleanly Without Globals',
            bullets: [
              '**Best practice** — pass inputs in as **parameters** and send outputs back via **`RETURN`** instead of mutating globals!',
            ],
            exampleHeading: 'Worked scope trace',
            examples: [
              'Local variable `Temp` inside `SortList()` cannot clash with a separate local `Temp` inside `CalcAvg()`, because each lives in its own isolated scope.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'local variable', definition: 'Variable declared inside a subroutine whose scope and lifetime are restricted strictly to that subroutine.' },
          { term: 'global variable', definition: 'Variable declared at top level accessible from every part of a program.' },
        ],
      },
      {
        id: 'cs-8-2-c3',
        title: 'Library Routines & Maintainable Programs',
        summary: 'Pre-tested library routines (`ROUND`, `RANDOM`, `DIV`, `MOD`) accelerate reliable coding, while meaningful identifiers, comments, indentation, and modularity keep code maintainable.',
        bullets: [
          '**Library routines** — pre-written, thoroughly tested functions ready to call: `ROUND(x, places)` (rounds real numbers), `RANDOM()` (generates pseudorandom float `0.0 ≤ r < 1.0`), `DIV`, `MOD`. Saves coding time and cuts bugs.',
          '**4 Pillars of Maintainable Code** — (1) **Meaningful identifier names** (`StudentScore`, not `x1`), (2) **Clear inline comments** (`// Calculate VAT`), (3) **Consistent indentation & whitespace** revealing block structure, and (4) **Modular procedures/functions** + constants.',
        ],
        subsections: [
          {
            heading: 'Worked Random Integer & Rounding Pattern',
            bullets: [
              '**Dice roll `1..6`**: `Die ← INT(RANDOM() * 6) + 1`; rounding currency: `Final ← ROUND(19.456, 2)` → `19.46`.',
            ],
            exampleHeading: 'Worked maintainability audit',
            examples: [
              'Replacing `a ← b * 1.2` with `CONSTANT VatRate = 1.2` and `GrossPrice ← NetPrice * VatRate // Add 20% VAT` makes future updates instant.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'library routine', definition: 'Pre-written, pre-tested reusable subroutine bundled with a language (e.g. ROUND, RANDOM) to speed up development.' },
        ],
        memoryAid: 'Function = RETURNS a value! Procedure = PERFORMS a task! Maintainability = M-C-I-M (Meaningful names, Comments, Indentation, Modularity).',
        commonMistake: 'Calling a `FUNCTION` with `CALL MyFunc(x)` instead of assigning/using its return value (`Result ← MyFunc(x)`) — in Cambridge pseudocode, `CALL` is strictly for `PROCEDURE`s!',
      },
    ],
    keyTerms: [
      { term: 'Procedure', definition: 'Subroutine invoked via `CALL` that executes statements without returning a value.' },
      { term: 'Function', definition: 'Subroutine that computes and returns a value back to the caller using `RETURN`.' },
      { term: 'Local vs Global Scope', definition: 'Subroutine-confined variable avoiding side effects vs program-wide accessible variable.' },
      { term: 'Library Routine', definition: 'Pre-tested built-in subroutine such as `ROUND()` or `RANDOM()`.' },
    ],
    checklistPoints: [
      'Write and call both Cambridge `PROCEDURE`s and `FUNCTION`s with typed parameters',
      'Explain why local variables are generally preferred over global variables',
      'Use `ROUND`/`RANDOM` library routines and apply all four code maintainability practices',
    ],
  },

  'cs-8-3': {
    subtopicId: 'cs-8-3',
    subtopicCode: '8.3',
    subtopicTitle: '1D & 2D Arrays, Nested Iteration & Text File Handling',
    readingMinutes: 11,
    videoTitle: '102. CAMBRIDGE IGCSE (0478-0984) 8.2 The use of arrays',
    youtubeId: 'avBbuh1RiZw',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:48',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: '1D Arrays: Declaration, Indexing & Iteration', cardId: 'cs-8-3-c1' },
      { time: '2:40', seconds: 160, label: '2D Arrays (Rows × Columns) & Nested FOR Loops', cardId: 'cs-8-3-c2' },
      { time: '5:15', seconds: 315, label: 'Persistent Text File Handling (OPENFILE, READFILE, WRITEFILE)', cardId: 'cs-8-3-c3' },
    ],
    cards: [
      {
        id: 'cs-8-3-c1',
        title: '1D Arrays: Static Same-Type Collections',
        summary: 'A 1D array stores multiple values of the SAME data type under a single identifier, accessed cleanly via an integer index.',
        bullets: [
          '**Declaration** — `DECLARE Marks : ARRAY[1:30] OF INTEGER` reserves 30 contiguous integer slots (indices `1` to `30` in Cambridge pseudocode).',
          '**Why use arrays?** — instead of declaring `Mark1, Mark2 ... Mark30`, a single `FOR i ← 1 TO 30` loop can input, validate, total, search, or sort all elements cleanly.',
          '**Parallel arrays** — using matching index `i` across `Names[i]` and `Marks[i]` links each student’s name directly to their mark.',
        ],
        subsections: [
          {
            heading: 'Worked 1D Array Processing Loop',
            bullets: [
              '**Bounds safety** — accessing `Marks[31]` on `ARRAY[1:30]` throws an **index out-of-bounds** runtime error.',
            ],
            exampleHeading: 'Worked example: Counting passes (`>= 50`) across 30 students',
            examples: [
              '`Passes ← 0; FOR i ← 1 TO 30: IF Marks[i] >= 50 THEN Passes ← Passes + 1 ENDIF; NEXT i`.',
            ],
          },
        ],
        glossaryPills: [
          { term: '1D array', definition: 'Indexed data structure storing a fixed number of elements of the same data type under one identifier.' },
        ],
      },
      {
        id: 'cs-8-3-c2',
        title: '2D Arrays & Nested Iteration',
        summary: 'A 2D array models a table or grid with two indices `[Row, Col]`, traversed systematically with nested `FOR` loops.',
        bullets: [
          '**Declaration** — `DECLARE Grid : ARRAY[1:5, 1:4] OF INTEGER` holds `5 rows × 4 columns = 20` integers.',
          '**Nested `FOR` loops** — outer loop steps through `Row ← 1 TO 5`; inner loop steps through `Col ← 1 TO 4`, visiting every cell `Grid[Row, Col]`.',
          '**Row totals vs Grand total** — reset `RowTotal ← 0` inside the outer loop (before the inner loop) to sum each row individually!',
        ],
        subsections: [
          {
            heading: 'Worked 2D Grid Summation',
            bullets: [
              '**Coordinate order** — Cambridge 0478 always writes `[Row, Column]` (first index = row, second = column).',
            ],
            exampleHeading: 'Worked example: Summing `3` students × `4` test scores',
            examples: [
              '`FOR s ← 1 TO 3`: `RowSum ← 0`; `FOR t ← 1 TO 4`: `RowSum ← RowSum + Scores[s, t]`; `NEXT t`; `OUTPUT RowSum`; `NEXT s`.',
            ],
          },
        ],
        glossaryPills: [
          { term: '2D array', definition: 'Tabular data structure indexed by two coordinates `[Row, Column]` storing elements of one data type.' },
        ],
      },
      {
        id: 'cs-8-3-c3',
        title: 'Text File Handling (Persistent Storage)',
        summary: 'Files store program data permanently on secondary storage after RAM clears; Cambridge 0478 requires `OPENFILE`, `READFILE`, `WRITEFILE`, and `CLOSEFILE`.',
        bullets: [
          '**Why use files?** — variables and arrays in **RAM are volatile** and disappear when the program ends; writing to a file preserves data on **non-volatile secondary storage**.',
          '**4 Essential File Operations** — `OPENFILE "scores.txt" FOR READ` (or `FOR WRITE`), `READFILE "scores.txt", Line`, `WRITEFILE "scores.txt", Text`, and **`CLOSEFILE "scores.txt"`** (flushes buffers & releases OS file lock).',
          '**Reading until end of file** — check `WHILE NOT EOF("scores.txt") DO READFILE ... ENDWHILE` so any file length is read safely.',
        ],
        subsections: [
          {
            heading: 'Worked File Write & Read Pseudocode',
            bullets: [
              '**Overwrite warning** — `FOR WRITE` creates a new file or **overwrites** an existing file from line 1!',
            ],
            exampleHeading: 'Worked example: Saving a high score to `"high.txt"`',
            examples: [
              '`OPENFILE "high.txt" FOR WRITE` → `WRITEFILE "high.txt", BestPlayer` → `CLOSEFILE "high.txt"`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'EOF', definition: 'End-of-File Boolean function returning TRUE when no more lines remain to be read from an open file.' },
        ],
        memoryAid: '2D Array = `[Row, Col]` with Outer Row loop, Inner Col loop. File 3-step = OPEN → READ/WRITE → CLOSE!',
        commonMistake: 'Forgetting `CLOSEFILE` at the end of a file-handling routine — leaving a file open risks losing buffered writes and loses an easy Cambridge Paper 2 mark!',
      },
    ],
    keyTerms: [
      { term: '1D Array', definition: 'Fixed-size, single-type list accessed via one integer index (`Arr[i]`).' },
      { term: '2D Array', definition: 'Grid of rows and columns (`Grid[r, c]`) processed with nested iteration.' },
      { term: 'OPENFILE / CLOSEFILE', definition: 'Pseudocode commands opening a file in `READ`/`WRITE` mode and closing it cleanly.' },
      { term: 'EOF (End of File)', definition: 'Condition indicating all lines of an open text file have been read.' },
    ],
    checklistPoints: [
      'Declare and iterate through 1D arrays and parallel arrays cleanly',
      'Process 2D `[Row, Column]` arrays using nested `FOR` loops for row and grand totals',
      'Write complete `OPENFILE`, `READFILE`/`WRITEFILE`, `EOF`, and `CLOSEFILE` pseudocode',
    ],
  },

  'cs-9-1': {
    subtopicId: 'cs-9-1',
    subtopicCode: '9.1',
    subtopicTitle: 'Single-Table Databases, Primary Keys, Data Types & SQL Queries',
    readingMinutes: 11,
    videoTitle: '106. CAMBRIDGE IGCSE (0478-0984) 9 SQL',
    youtubeId: 'Gs8tTXPTo3E',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:14',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Tables, Records, Fields, Data Types & Primary Keys', cardId: 'cs-9-1-c1' },
      { time: '2:45', seconds: 165, label: 'SQL Queries: SELECT, FROM, WHERE & ORDER BY', cardId: 'cs-9-1-c2' },
      { time: '5:25', seconds: 325, label: 'Aggregate Functions (SUM, COUNT) & Boolean Filters', cardId: 'cs-9-1-c3' },
    ],
    cards: [
      {
        id: 'cs-9-1-c1',
        title: 'Database Structure, Field Data Types & Primary Keys',
        summary: 'A database table organises structured records (rows) across typed fields (columns), with every record uniquely identified by a Primary Key.',
        diagram: 'database-normalisation-erd',
        bullets: [
          '**Table anatomy** — **Table** (stores one entity, e.g. `Books`), **Record / Row** (all fields for one item), **Field / Column** (one attribute, e.g. `Price`).',
          '**Database data types** — `Text / Alphanumeric`, `Character`, `Boolean`, `Integer`, `Real`, and `Date/Time`.',
          '**Primary Key** — a field containing a **unique, non-null value for every record** (e.g. `BookID`, `StudentID`) so any individual record can be identified unambiguously. Names and dates of birth are poor primary keys because duplicates occur!',
        ],
        subsections: [
          {
            heading: 'Selecting a Suitable Primary Key',
            bullets: [
              '**Uniqueness test** — ask *"Could two rows EVER share the same value?"* If yes (e.g. `Surname`, `City`, `DOB`), it CANNOT be a Primary Key.',
            ],
            exampleHeading: 'Worked table schema: `LibraryBooks` (`4 fields`, `120 records`)',
            examples: [
              '`ISBN` (Text, **Primary Key**), `Title` (Text), `Price` (Real), `OnLoan` (Boolean).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'primary key', definition: 'Field uniquely identifying every record in a database table with zero duplicates and no empty values.' },
          { term: 'record', definition: 'Single horizontal row in a database table containing all field values for one entity instance.' },
        ],
      },
      {
        id: 'cs-9-1-c2',
        title: 'Structured Query Language (SQL): SELECT, FROM, WHERE & ORDER BY',
        summary: 'SQL queries extract, filter, and sort exact subsets of data from database tables using `SELECT`, `FROM`, `WHERE`, and `ORDER BY`.',
        bullets: [
          '**`SELECT`** — specifies which fields to display (or `*` for all fields).',
          '**`FROM`** — names the target table (`FROM Products`).',
          "**`WHERE`** — filters rows meeting Boolean conditions (`=`, `>`, `<`, `>=`, `<=`, `<>`, `AND`, `OR`, `NOT`). Wrap string literals in quotes (`'London'`).",
          '**`ORDER BY`** — sorts results ascending (`ASC`, default) or descending (`DESC`).',
        ],
        subsections: [
          {
            heading: 'Worked SQL Query Construction',
            bullets: [
              '**Clause order is fixed**: `SELECT` → `FROM` → `WHERE` → `ORDER BY`!',
            ],
            exampleHeading: 'Worked example: List `Title, Price` of books under `$20` sorted cheapest first',
            examples: [
              '`SELECT Title, Price FROM LibraryBooks WHERE Price < 20 AND OnLoan = FALSE ORDER BY Price ASC;`',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SQL', definition: 'Structured Query Language — standard declarative language for querying and managing relational databases.' },
        ],
      },
      {
        id: 'cs-9-1-c3',
        title: 'SQL Aggregate Functions: `SUM` and `COUNT`',
        summary: 'Cambridge 0478 tests `SUM(Field)` to total numeric columns and `COUNT(Field)` to tally matching rows.',
        bullets: [
          '**`SUM(Field)`** — adds all numeric values in the specified column for rows passing the `WHERE` filter.',
          '**`COUNT(Field)`** — returns the integer number of matching records (e.g. how many books are currently on loan).',
          '**Exam tip** — never confuse `SUM` (adds numbers) with `COUNT` (tallies rows)!',
        ],
        subsections: [
          {
            heading: 'Worked `SUM` vs `COUNT` Trace',
            bullets: [
              '**Given 3 matching rows** with `Stock = [10, 25, 15]`: `COUNT(Stock) = 3`, whereas `SUM(Stock) = 50`.',
            ],
            exampleHeading: "Worked example: Total value of in-stock items in `'Tech'` category",
            examples: [
              '`SELECT SUM(Price) FROM Products WHERE Category = \'Tech\';` (adds prices) vs `SELECT COUNT(ProductID) FROM Products WHERE Category = \'Tech\';` (counts products).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'aggregate function', definition: 'SQL function such as SUM() or COUNT() that computes a single summary value across multiple matching records.' },
        ],
        memoryAid: 'SQL Order = S-F-W-O (SELECT · FROM · WHERE · ORDER BY). COUNT = How many rows; SUM = Add values!',
        commonMistake: 'Writing `COUNT(Price)` when asked for the *total cost* of items — `COUNT` returns the NUMBER of rows, NOT the monetary total! Use `SUM(Price)` for totals!',
      },
    ],
    keyTerms: [
      { term: 'Primary Key', definition: 'Unique identifier field ensuring no two records in a table share the same key.' },
      { term: 'Record & Field', definition: 'A table row (one entity) and a table column (one attribute).' },
      { term: 'SQL SELECT / WHERE / ORDER BY', definition: 'Clauses selecting columns, filtering rows by conditions, and sorting output.' },
      { term: 'SQL SUM() & COUNT()', definition: 'Aggregate functions returning the numeric total vs row count of matching records.' },
    ],
    checklistPoints: [
      'Design a single-table schema with optimal field data types and a valid Primary Key',
      'Write accurate SQL queries using `SELECT`, `FROM`, `WHERE`, `AND`/`OR`, and `ORDER BY ASC/DESC`',
      'Distinguish `SUM()` and `COUNT()` and predict exact SQL query outputs from sample tables',
    ],
  },

  'cs-10-1': {
    subtopicId: 'cs-10-1',
    subtopicCode: '10.1',
    subtopicTitle: 'Logic Gates (NOT, AND, OR, NAND, NOR, XOR) & Truth Tables',
    readingMinutes: 10,
    videoTitle: '107. CAMBRIDGE IGCSE (0478-0984) 10 Introduction to logic gates and logic circuits',
    youtubeId: 'qTiaDr5GDa8',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:42',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Core Gates: NOT, AND & OR Symbols and Truth Tables', cardId: 'cs-10-1-c1' },
      { time: '2:35', seconds: 155, label: 'Compound Gates: NAND, NOR & XOR (Exclusive OR)', cardId: 'cs-10-1-c2' },
      { time: '5:10', seconds: 310, label: 'Evaluating Multi-Gate Truth Tables (8-Row 3-Input Trace)', cardId: 'cs-10-1-c3' },
    ],
    cards: [
      {
        id: 'cs-10-1-c1',
        title: 'Fundamental Logic Gates: NOT, AND & OR',
        summary: 'Logic gates combine binary 0/1 voltages electronically; NOT inverts 1 input, AND requires BOTH inputs 1, and OR requires AT LEAST ONE input 1.',
        diagram: 'logic-gates-truth',
        bullets: [
          '**`NOT` (Inverter)** — 1 input (`A`); outputs `1` iff `A = 0` (`X = NOT A`). Triangle with inversion circle.',
          '**`AND`** — 2 inputs (`A, B`); outputs `1` **only when BOTH `A = 1` AND `B = 1`** (`X = A AND B`). Flat-back D-shape.',
          '**`OR`** — 2 inputs (`A, B`); outputs `1` when **`A = 1`, `B = 1`, or BOTH** (`X = A OR B`). Curved-back shield shape.',
        ],
        subsections: [
          {
            heading: '2-Input Truth Table Quick Check (`00, 01, 10, 11`)',
            bullets: [
              '**`AND` outputs**: `0, 0, 0, 1` · **`OR` outputs**: `0, 1, 1, 1`.',
            ],
            exampleHeading: 'Worked example: `NOT (A AND B)` when `A = 1, B = 0`',
            examples: [
              'Inner `1 AND 0 = 0` → outer `NOT 0 = 1`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'truth table', definition: 'Exhaustive table listing every possible binary input combination (`2ⁿ` rows) and the corresponding logic output.' },
          { term: 'logic gate', definition: 'Electronic circuit block performing a Boolean operation on one or more binary inputs to yield a single binary output.' },
        ],
      },
      {
        id: 'cs-10-1-c2',
        title: 'Compound Gates: NAND, NOR & XOR',
        summary: 'NAND inverts AND, NOR inverts OR, and XOR outputs 1 strictly when the two inputs are DIFFERENT (`0,1` or `1,0`).',
        bullets: [
          '**`NAND` (`NOT AND`)** — AND symbol with output circle; outputs `0` **only when both inputs are `1`** (`1, 1, 1, 0`).',
          '**`NOR` (`NOT OR`)** — OR symbol with output circle; outputs `1` **only when both inputs are `0`** (`1, 0, 0, 0`).',
          '**`XOR` (Exclusive OR)** — OR symbol with extra curved input line; outputs `1` **only when inputs are DIFFERENT** (`0, 1, 1, 0`). Note: `1 XOR 1 = 0`!',
        ],
        subsections: [
          {
            heading: 'Comparing `OR` vs `XOR`',
            bullets: [
              '**Single difference row**: when `A = 1, B = 1`, **`OR` gives `1`** whereas **`XOR` gives `0`**!',
            ],
            exampleHeading: 'Worked example: `A = 1, B = 1` across NAND, NOR, XOR',
            examples: [
              '`1 NAND 1 = 0` · `1 NOR 1 = 0` · `1 XOR 1 = 0` (all three output `0` on `1,1`!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'XOR gate', definition: 'Exclusive-OR gate outputting 1 strictly when its two binary inputs differ (0,1 or 1,0).' },
          { term: 'NAND gate', definition: 'Inverted AND gate outputting 0 solely when both inputs are 1.' },
        ],
      },
      {
        id: 'cs-10-1-c3',
        title: 'Completing 3-Input Truth Tables Without Errors',
        summary: 'A 3-input circuit (`A, B, C`) has exactly `2³ = 8` rows (`000` to `111`); always add workspace columns for intermediate gates before computing final output `X`.',
        bullets: [
          '**Standard binary row order** — list `000, 001, 010, 011, 100, 101, 110, 111` so zero combinations are missed.',
          '**Workspace columns** — label intermediate wires (`P = A AND B`, `Q = NOT C`), fill each column cleanly, then combine `X = P OR Q`.',
        ],
        subsections: [
          {
            heading: 'Worked 3-Input Expression Trace',
            bullets: [
              '**Expression**: `X = (A AND B) OR (NOT C)` — output is `1` whenever `C = 0` (4 rows) OR `A = B = 1` (row `111`), giving `5` ones and `3` zeroes.',
            ],
            exampleHeading: 'Worked check on rows `110`, `111`, and `011`',
            examples: [
              '`110`: `(1 AND 1) OR (NOT 0) = 1 OR 1 = 1` · `111`: `1 OR 0 = 1` · `011`: `0 OR 0 = 0`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'workspace column', definition: 'Intermediate truth-table column recording a sub-gate’s output to prevent mental calculation mistakes.' },
        ],
        memoryAid: 'XOR = eXclusively different (1 only if A ≠ B). 3 inputs = 2³ = 8 rows (`000` → `111`)!',
        commonMistake: 'Forgetting the small inversion circle on `NOT`, `NAND`, or `NOR` gates when sketching circuits — without the circle, `NAND` becomes `AND` and loses the mark!',
      },
    ],
    keyTerms: [
      { term: 'NOT / AND / OR Gates', definition: 'Core gates inverting a bit, requiring all 1s, or requiring at least one 1.' },
      { term: 'NAND & NOR Gates', definition: 'Inverted AND (`1,1→0`) and inverted OR (`0,0→1`) compound logic gates.' },
      { term: 'XOR Gate', definition: 'Exclusive-OR gate outputting 1 only when inputs differ (`0,1` or `1,0`).' },
      { term: 'Truth Table', definition: 'Complete `2ⁿ`-row mapping of all binary input states to circuit outputs.' },
    ],
    checklistPoints: [
      'Recognise symbols and truth tables for all six Cambridge 0478 gates (NOT, AND, OR, NAND, NOR, XOR)',
      'Complete 8-row 3-input truth tables cleanly using intermediate workspace columns',
      'Distinguish inclusive OR from exclusive XOR on input `(1, 1)`',
    ],
  },

  'cs-10-2': {
    subtopicId: 'cs-10-2',
    subtopicCode: '10.2',
    subtopicTitle: 'Building Logic Circuits & Expressions from Truth Tables & Problem Statements',
    readingMinutes: 10,
    videoTitle: '108. CAMBRIDGE IGCSE (0478-0984) 10 Logic circuits, truth tables and logic expressions',
    youtubeId: 'Db-DGga53u8',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:06',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Translating Real-World Safety Specifications into Logic Expressions', cardId: 'cs-10-2-c1' },
      { time: '2:45', seconds: 165, label: 'Drawing Clean Multi-Stage Logic Circuits from Expressions', cardId: 'cs-10-2-c2' },
      { time: '5:20', seconds: 320, label: 'Deriving Logic Expressions Directly from Truth Tables', cardId: 'cs-10-2-c3' },
    ],
    cards: [
      {
        id: 'cs-10-2-c1',
        title: 'Translating Problem Statements into Logic Expressions',
        summary: 'Break English alarm/control rules into bracketed binary clauses mapping "ON/high" to `1`, "OFF/low" to `NOT`, "both" to `AND`, and "either" to `OR`.',
        bullets: [
          '**Step 1: Map inputs** — carefully read the exam table defining what `1` and `0` mean for every sensor (`T=1` means `temp > 60 °C`; `P=0` means `pressure <= 2 bar`).',
          '**Step 2: Translate clauses** — *"Temperature is high (`T=1`) AND pressure is NOT high (`P=0`)"* → `(T AND (NOT P))`.',
          '**Step 3: Combine with outer brackets** — use explicit parentheses to enforce exact precedence (`NOT` binds tightest, then `AND`, then `OR`).',
        ],
        subsections: [
          {
            heading: 'Worked Industrial Alarm Specification',
            bullets: [
              '**Rule**: Warning alarm `X = 1` if *(Temperature `T = 1` AND Valve closed `V = 0`)* OR *(Manual override `M = 1` AND Valve closed `V = 0`)*.',
            ],
            exampleHeading: 'Worked expression derivation',
            examples: [
              '`X = (T AND (NOT V)) OR (M AND (NOT V))` — or factored cleanly as `X = (T OR M) AND (NOT V)` (uses 1 fewer gate!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'logic expression', definition: 'Symbolic Boolean statement combining input variables with NOT, AND, OR, NAND, NOR, and XOR operators.' },
        ],
      },
      {
        id: 'cs-10-2-c2',
        title: 'Drawing Logic Circuits from Expressions',
        summary: 'Draw circuits strictly left-to-right: place inputs `A, B, C` down the left edge, resolve innermost brackets first, and feed outputs cleanly into the final gate `X`.',
        bullets: [
          '**Left-to-right flow** — inputs `A, B, C` on the left, output `X` on the right; use neat solid junction dots whenever a wire splits to two gates.',
          '**Inside-out construction** — build `NOT` gates and innermost parentheses first, then feed their outputs into outer `AND`/`OR`/`XOR` gates.',
          '**Self-check** — trace 2 sample input triples (`000`, `101`) through your drawn circuit to verify it matches the logic expression 100%.',
        ],
        subsections: [
          {
            heading: 'Worked Circuit Layout Check',
            bullets: [
              '**Expression**: `X = (A XOR B) AND (NOT C)` requires strictly `3` gates: 1× `XOR`, 1× `NOT`, and 1× final `AND`.',
            ],
            exampleHeading: 'Worked verification on `A=1, B=0, C=0`',
            examples: [
              '`1 XOR 0 = 1`; `NOT 0 = 1`; final `1 AND 1 = 1` → `X = 1` ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'logic circuit', definition: 'Interconnected network of electronic logic gates implementing a target Boolean function.' },
        ],
      },
      {
        id: 'cs-10-2-c3',
        title: 'Deriving Expressions from Truth Tables (Sum of Products)',
        summary: 'Focus solely on rows where output `X = 1`: AND together each row’s inputs (`A` if `1`, `NOT A` if `0`), then OR all `X = 1` rows together!',
        bullets: [
          '**Sum-of-Products method** — find every row where `X = 1`. For each such row, write an `AND` term (`1` → variable, `0` → `NOT variable`).',
          '**Combine rows** — link every `X = 1` row term with `OR` operators.',
          '**Spot single-gate shortcuts** — if `X = 1` only on `01` and `10`, immediately recognise **`A XOR B`**; if `X = 1` on `00, 01, 10`, recognise **`A NAND B`**!',
        ],
        subsections: [
          {
            heading: 'Worked Truth-Table-to-Expression Example',
            bullets: [
              '**Given `X = 1` only for `(A=0, B=1, C=1)` and `(A=1, B=0, C=1)`**.',
            ],
            exampleHeading: 'Worked derivation',
            examples: [
              'Row 1: `((NOT A) AND B AND C)`; Row 2: `(A AND (NOT B) AND C)`.',
              'Combined: `X = ((NOT A) AND B AND C) OR (A AND (NOT B) AND C)` = **`(A XOR B) AND C`**!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sum of products', definition: 'Method forming a Boolean expression by OR-ing together the AND minterms of every truth-table row outputting 1.' },
        ],
        memoryAid: 'Truth Table → Expression: Pick every `X = 1` row → `AND` inputs (`0` gets `NOT`) → `OR` rows together!',
        commonMistake: 'Writing `A = 0` inside a final Boolean expression instead of `NOT A` — Cambridge logic expressions use `NOT A`, never `A = 0`!',
      },
    ],
    keyTerms: [
      { term: 'Logic Expression', definition: 'Formal Boolean formula representing a problem specification or circuit using logic operators.' },
      { term: 'Operator Precedence', definition: 'Evaluation order: Brackets first → NOT → AND → OR.' },
      { term: 'Sum of Products', definition: 'Combining every `X = 1` truth-table row as AND-ed terms joined by OR.' },
      { term: 'Logic Circuit Diagram', definition: 'Left-to-right schematic connecting standard gate symbols from inputs to output X.' },
    ],
    checklistPoints: [
      'Translate wordy Cambridge alarm/control specifications into bracketed logic expressions',
      'Draw neat left-to-right logic circuits directly from Boolean expressions',
      'Derive equivalent Boolean expressions directly from truth-table `X = 1` rows',
    ],
  },
};

export const IGCSE_CS_UNITS_7_10_QUIZZES: QuizQuestion[] = [
  // cs-7-1
  {
    id: 'cs-7-1-q1',
    subtopicId: 'cs-7-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which stage of the Program Development Life Cycle uses structure diagrams, flowcharts, and pseudocode BEFORE writing program code?',
    options: ['Design', 'Analysis', 'Coding', 'Testing'],
    correctIndex: 0,
    explanation: 'During Design, developers model algorithms and modular structure using structure diagrams, flowcharts, and pseudocode.',
  },
  {
    id: 'cs-7-1-q2',
    subtopicId: 'cs-7-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which flowchart symbol represents a decision/condition branching into Yes and No paths?',
    options: ['Diamond', 'Parallelogram', 'Rectangle', 'Rounded oval'],
    correctIndex: 0,
    explanation: 'A diamond denotes a Boolean decision (parallelogram = I/O, rectangle = process, oval = Start/Stop).',
  },
  {
    id: 'cs-7-1-q3',
    subtopicId: 'cs-7-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the computational thinking principles used in Analysis.',
    segments: ['Hiding irrelevant detail to focus on core requirements is ', ', while splitting a complex system into smaller sub-systems is ', '.'],
    wordBank: ['abstraction', 'decomposition', 'encryption', 'verification'],
    answers: ['abstraction', 'decomposition'],
    explanation: 'Abstraction strips irrelevant details; decomposition breaks a problem into modular sub-problems.',
  },
  {
    id: 'cs-7-1-q4',
    subtopicId: 'cs-7-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each flowchart shape to its purpose.',
    pairs: [
      { left: 'Parallelogram', right: 'Input or Output (e.g. INPUT Score)' },
      { left: 'Rectangle', right: 'Process / Assignment (e.g. Total ← Total + 1)' },
      { left: 'Rounded oval', right: 'Terminator (Start or Stop)' },
    ],
    explanation: 'Standard ISO/Cambridge flowchart shapes distinguish I/O, processes, and terminators unambiguously.',
  },
  {
    id: 'cs-7-1-q5',
    subtopicId: 'cs-7-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give two advantages of decomposing a large software project into smaller sub-systems using a structure diagram. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Smaller modules are easier to code, test, and debug individually, and different programmers can work on separate sub-systems in parallel.',
      markPoints: [
        { id: 'mp1', markDescription: 'Easier to develop, test, or debug smaller modules', requiredKeywordGroups: [['easier', 'debug', 'test', 'manage']] },
        { id: 'mp2', markDescription: 'Teamwork in parallel OR reusable modules', requiredKeywordGroups: [['team', 'parallel', 'programmer', 'reus']] },
      ],
    },
    explanation: 'Decomposition simplifies testing/debugging, enables parallel team development, and fosters module reuse.',
  },

  // cs-7-2
  {
    id: 'cs-7-2-q1',
    subtopicId: 'cs-7-2',
    type: 'mcq',
    marks: 1,
    diagram: 'sorting-searching-trace',
    prompt: 'What is the state of the list `[12, 4, 9, 2]` immediately after PASS 1 of an ascending Bubble Sort?',
    options: ['[4, 9, 2, 12]', '[2, 4, 9, 12]', '[4, 12, 2, 9]', '[4, 2, 9, 12]'],
    correctIndex: 0,
    explanation: 'Pass 1 swaps (12,4)→[4,12,9,2], (12,9)→[4,9,12,2], (12,2)→[4,9,2,12], bubbling 12 to the final index.',
  },
  {
    id: 'cs-7-2-q2',
    subtopicId: 'cs-7-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why should a `Min` variable be initialised to `Array[1]` rather than `0` when finding the lowest positive exam score?',
    options: [
      'Because 0 is lower than every positive score so Min would falsely stay 0',
      'Because arrays cannot hold integers',
      'Because 0 causes a syntax error in pseudocode',
      'Because Min must always equal the average',
    ],
    correctIndex: 0,
    explanation: 'If all scores are > 0, `Score < 0` is never true, so `Min` falsely reports 0 instead of the true minimum.',
  },
  {
    id: 'cs-7-2-q3',
    subtopicId: 'cs-7-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the standard algorithm comparison.',
    segments: ['A ', ' search works on unsorted arrays by checking elements sequentially, while an optimised Bubble Sort stops early using a Boolean ', ' flag.'],
    wordBank: ['linear', 'swapped', 'binary', 'check'],
    answers: ['linear', 'swapped'],
    explanation: 'Linear search handles unsorted lists; a `Swapped` flag lets Bubble Sort terminate early as soon as a pass performs zero swaps.',
  },
  {
    id: 'cs-7-2-q4',
    subtopicId: 'cs-7-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO valid steps required when swapping `A[i]` and `A[i + 1]` inside Bubble Sort.',
    options: [
      'Store `A[i]` safely in a temporary variable `Temp` before overwriting `A[i]`',
      'Set `Swapped ← TRUE` whenever a swap occurs',
      'Assign `A[i] ← A[i + 1]` and then `A[i + 1] ← A[i]` without `Temp`',
      'Reset `Total ← 0` inside every comparison',
    ],
    correctIndices: [0, 1],
    explanation: 'A `Temp` variable preserves `A[i]` before overwrite, and `Swapped ← TRUE` records that the array changed during the pass.',
  },
  {
    id: 'cs-7-2-q5',
    subtopicId: 'cs-7-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how a Boolean flag (`Swapped`) improves the efficiency of a Bubble Sort algorithm. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'If a complete pass makes zero swaps (`Swapped = FALSE`), the list is already sorted so the algorithm terminates early instead of running unnecessary remaining passes.',
      markPoints: [
        { id: 'mp1', markDescription: 'Detects when a pass performs no swaps (list is sorted)', requiredKeywordGroups: [['no swap', 'zero swap', 'false', 'already sorted']] },
        { id: 'mp2', markDescription: 'Terminates early / avoids unnecessary extra passes', requiredKeywordGroups: [['early', 'stop', 'terminat', 'unnecessary', 'fewer pass']] },
      ],
    },
    explanation: 'Tracking whether any swap occurred allows Bubble Sort to exit immediately once the data is sorted.',
  },

  // cs-7-3
  {
    id: 'cs-7-3-q1',
    subtopicId: 'cs-7-3',
    type: 'mcq',
    marks: 1,
    prompt: 'A program accepts integer ages from `12` to `18` inclusive. Which pair is valid BOUNDARY test data for the lower limit?',
    options: ['11 and 12', '12 and 18', '15 and 16', '0 and 50'],
    correctIndex: 0,
    explanation: 'Boundary data tests immediately either side of an edge: 11 (rejected) and 12 (accepted).',
  },
  {
    id: 'cs-7-3-q2',
    subtopicId: 'cs-7-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which check is a VERIFICATION method rather than a validation check?',
    options: ['Double entry (re-typing a new password)', 'Range check', 'Length check', 'Presence check'],
    correctIndex: 0,
    explanation: 'Double entry and visual check verify entered data matches the original source; range, length, and presence are validation checks.',
  },
  {
    id: 'cs-7-3-q3',
    subtopicId: 'cs-7-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the validation rules.',
    segments: ['Checking that a required form field is not left blank is a ', ' check, whereas verifying `DD/MM/YYYY` pattern compliance is a ', ' check.'],
    wordBank: ['presence', 'format', 'range', 'visual'],
    answers: ['presence', 'format'],
    explanation: 'Presence ensures non-empty entry; format validates structural pattern compliance.',
  },
  {
    id: 'cs-7-3-q4',
    subtopicId: 'cs-7-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each test data category for rule `1 <= Score <= 50` to an example.',
    pairs: [
      { left: 'Normal', right: '25 (typical accepted input)' },
      { left: 'Extreme', right: '1 and 50 (exact valid limits)' },
      { left: 'Abnormal', right: '−4 or "hello" (rejected invalid input)' },
    ],
    explanation: 'Normal tests typical inputs, Extreme tests exact valid limits, and Abnormal tests invalid/erroneous values.',
  },
  {
    id: 'cs-7-3-q5',
    subtopicId: 'cs-7-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between validation and verification when entering student exam marks into a computer system. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Validation automatically checks that an entered mark is reasonable and follows rules (such as 0–100), whereas verification checks that the entered mark accurately matches the original paper script (e.g. via double entry or visual check).',
      markPoints: [
        { id: 'mp1', markDescription: 'Validation checks data is reasonable / conforms to rules', requiredKeywordGroups: [['validation'], ['reasonable', 'sensible', 'rule', 'range']] },
        { id: 'mp2', markDescription: 'Verification checks entered data matches original source (double entry/visual)', requiredKeywordGroups: [['verification'], ['original', 'source', 'match', 'double entry', 'visual']] },
      ],
    },
    explanation: 'Validation checks sensibility against rules; verification confirms exact transcription from the source.',
  },

  // cs-8-1
  {
    id: 'cs-8-1-q1',
    subtopicId: 'cs-8-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What are the exact values of `23 DIV 5` and `23 MOD 5`?',
    options: ['4 and 3', '3 and 4', '4.6 and 3', '5 and 3'],
    correctIndex: 0,
    explanation: '5 fits into 23 exactly 4 whole times (DIV = 4) with remainder 3 (MOD = 3).',
  },
  {
    id: 'cs-8-1-q2',
    subtopicId: 'cs-8-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What does `SUBSTRING("Cambridge", 1, 4)` return in Cambridge 0478 pseudocode?',
    options: ['"Camb"', '"ambr"', '"Cam"', '"ridge"'],
    correctIndex: 0,
    explanation: 'Cambridge pseudocode strings are 1-indexed: starting at character 1 for length 4 yields "Camb".',
  },
  {
    id: 'cs-8-1-q3',
    subtopicId: 'cs-8-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the loop execution guarantees.',
    segments: ['A ', ' loop tests its condition before running (0 or more times), whereas a ', ' loop tests at the end (at least 1 time).'],
    wordBank: ['WHILE', 'REPEAT', 'CASE', 'CONSTANT'],
    answers: ['WHILE', 'REPEAT'],
    explanation: '`WHILE` is pre-condition (0+ runs); `REPEAT ... UNTIL` is post-condition (1+ runs).',
  },
  {
    id: 'cs-8-1-q4',
    subtopicId: 'cs-8-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each field to its best Cambridge programming data type.',
    pairs: [
      { left: 'UK mobile number "07700900123"', right: 'STRING (preserves leading zero)' },
      { left: 'Item weight 14.75 kg', right: 'REAL' },
      { left: 'IsLoggedIn flag', right: 'BOOLEAN' },
    ],
    explanation: 'Phone numbers need STRING so leading 0s remain; decimals need REAL; yes/no flags need BOOLEAN.',
  },
  {
    id: 'cs-8-1-q5',
    subtopicId: 'cs-8-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two benefits of declaring a fixed tax rate as a `CONSTANT` instead of a regular variable. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Declaring a constant prevents the tax rate from being accidentally overwritten during execution, and updating the single constant declaration updates every calculation cleanly for better maintainability.',
      markPoints: [
        { id: 'mp1', markDescription: 'Prevents accidental modification / overwrite during runtime', requiredKeywordGroups: [['accident', 'cannot be changed', 'overwrite', 'prevent']] },
        { id: 'mp2', markDescription: 'Easier maintenance (change once) or clearer readability', requiredKeywordGroups: [['maintain', 'one place', 'readab', 'clearer', 'update']] },
      ],
    },
    explanation: 'Constants safeguard fixed values against accidental mutation and simplify future updates.',
  },

  // cs-8-2
  {
    id: 'cs-8-2-q1',
    subtopicId: 'cs-8-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the fundamental difference between a `FUNCTION` and a `PROCEDURE` in Cambridge 0478?',
    options: [
      'A function returns a value back to the calling expression, whereas a procedure does not',
      'A procedure cannot accept parameters',
      'A function can only use global variables',
      'A procedure runs faster than machine code',
    ],
    correctIndex: 0,
    explanation: 'Both can accept parameters, but only a FUNCTION returns a value using `RETURN`.',
  },
  {
    id: 'cs-8-2-q2',
    subtopicId: 'cs-8-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What does `ROUND(7.386, 2)` return?',
    options: ['7.39', '7.38', '7.4', '7'],
    correctIndex: 0,
    explanation: 'Rounding 7.386 to 2 decimal places rounds the hundredths digit up to 7.39.',
  },
  {
    id: 'cs-8-2-q3',
    subtopicId: 'cs-8-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the scope statement.',
    segments: ['A ', ' variable exists only inside its declaring subroutine, whereas a ', ' variable is accessible across the entire program.'],
    wordBank: ['local', 'global', 'constant', 'binary'],
    answers: ['local', 'global'],
    explanation: 'Local variables are scoped to one subroutine; global variables are visible everywhere.',
  },
  {
    id: 'cs-8-2-q4',
    subtopicId: 'cs-8-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO practices that directly improve program maintainability for another programmer.',
    options: [
      'Using meaningful identifier names and explanatory comments',
      'Applying consistent indentation and modular procedures/functions',
      'Naming all variables a, b, c and storing everything globally',
      'Removing all blank lines and comments to shrink the file',
    ],
    correctIndices: [0, 1],
    explanation: 'Meaningful names, comments, indentation, and modularity make programs readable and easy to update.',
  },
  {
    id: 'cs-8-2-q5',
    subtopicId: 'cs-8-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two reasons why programmers prefer local variables over global variables inside subroutines. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Local variables cannot be accidentally overwritten by other subroutines (preventing side effects), and they make subroutines self-contained and reusable while freeing RAM when the subroutine ends.',
      markPoints: [
        { id: 'mp1', markDescription: 'Prevents accidental modification / side effects by other routines', requiredKeywordGroups: [['accident', 'side effect', 'overwrit', 'corrupt', 'other']] },
        { id: 'mp2', markDescription: 'Self-contained / reusable module OR frees memory on exit', requiredKeywordGroups: [['reus', 'self-contained', 'memory', 'ram', 'freed', 'debug']] },
      ],
    },
    explanation: 'Local variables isolate state against side effects, support module reuse, and release memory automatically.',
  },

  // cs-8-3
  {
    id: 'cs-8-3-q1',
    subtopicId: 'cs-8-3',
    type: 'mcq',
    marks: 1,
    prompt: 'How many total elements are stored in `DECLARE Matrix : ARRAY[1:6, 1:5] OF REAL`?',
    options: ['30', '11', '25', '36'],
    correctIndex: 0,
    explanation: '6 rows × 5 columns = 30 total REAL elements.',
  },
  {
    id: 'cs-8-3-q2',
    subtopicId: 'cs-8-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why must data be written to a text file instead of kept solely in a 2D array?',
    options: [
      'Arrays reside in volatile RAM and disappear on exit, whereas files persist on non-volatile secondary storage',
      'Arrays cannot store integers',
      'Files execute arithmetic faster than CPU registers',
      'Text files automatically encrypt themselves with RSA',
    ],
    correctIndex: 0,
    explanation: 'Secondary storage files preserve data persistently across power-offs and program restarts.',
  },
  {
    id: 'cs-8-3-q3',
    subtopicId: 'cs-8-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Cambridge text file-handling syntax.',
    segments: ['To read every line safely from an open file, loop `WHILE NOT ', '("log.txt")` and finish with `', ' "log.txt"`.'],
    wordBank: ['EOF', 'CLOSEFILE', 'WRITEFILE', 'MOD'],
    answers: ['EOF', 'CLOSEFILE'],
    explanation: '`EOF()` detects the end of file, and `CLOSEFILE` flushes buffers and frees OS file handles.',
  },
  {
    id: 'cs-8-3-q4',
    subtopicId: 'cs-8-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each array or file statement to its action.',
    pairs: [
      { left: 'OPENFILE "a.txt" FOR WRITE', right: 'Creates or overwrites a text file for writing' },
      { left: 'Scores[3, 2]', right: 'Accesses Row 3, Column 2 of a 2D array' },
      { left: 'READFILE "a.txt", Line', right: 'Reads the next line of text into variable Line' },
    ],
    explanation: 'Cambridge 2D arrays index [Row, Column], and `OPENFILE`/`READFILE` handle sequential text files.',
  },
  {
    id: 'cs-8-3-q5',
    subtopicId: 'cs-8-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how nested `FOR` loops are used to compute the total of every element in `Grid : ARRAY[1:4, 1:3] OF INTEGER`. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'An outer FOR loop iterates Row from 1 to 4 while an inner FOR loop iterates Col from 1 to 3, adding `Grid[Row, Col]` to `Total` on each iteration.',
      markPoints: [
        { id: 'mp1', markDescription: 'Outer loop iterates rows (1..4) and inner loop iterates columns (1..3)', requiredKeywordGroups: [['outer', 'row'], ['inner', 'col']] },
        { id: 'mp2', markDescription: 'Accumulates `Grid[Row, Col]` into a running total', requiredKeywordGroups: [['grid', 'total', 'add', 'sum']] },
      ],
    },
    explanation: 'Nested loops traverse every row–column intersection systematically without repeating code.',
  },

  // cs-9-1
  {
    id: 'cs-9-1-q1',
    subtopicId: 'cs-9-1',
    type: 'mcq',
    marks: 1,
    diagram: 'database-normalisation-erd',
    prompt: 'Which field is the MOST suitable Primary Key for a `Students` database table?',
    options: ['StudentID', 'FirstName', 'DateOfBirth', 'TutorGroup'],
    correctIndex: 0,
    explanation: 'Names, DOBs, and tutor groups can be duplicated across students; only `StudentID` uniquely identifies every record.',
  },
  {
    id: 'cs-9-1-q2',
    subtopicId: 'cs-9-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which SQL query outputs the total number of products priced over `50` in the `Items` table?',
    options: [
      'SELECT COUNT(ItemID) FROM Items WHERE Price > 50;',
      'SELECT SUM(ItemID) FROM Items WHERE Price > 50;',
      'SELECT ItemID FROM Items ORDER BY Price > 50;',
      'COUNT * FROM Items IF Price > 50;',
    ],
    correctIndex: 0,
    explanation: '`COUNT()` tallies matching rows, whereas `SUM()` adds numeric values.',
  },
  {
    id: 'cs-9-1-q3',
    subtopicId: 'cs-9-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the SQL clause syntax.',
    segments: ['Use ', ' to filter matching records by a condition, and ', ' `Price DESC` to sort highest price first.'],
    wordBank: ['WHERE', 'ORDER BY', 'SUM', 'FROM'],
    answers: ['WHERE', 'ORDER BY'],
    explanation: '`WHERE` filters records and `ORDER BY ... DESC` sorts descending.',
  },
  {
    id: 'cs-9-1-q4',
    subtopicId: 'cs-9-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each SQL function or term to its definition.',
    pairs: [
      { left: 'SUM(Sales)', right: 'Adds all numeric values in the Sales column' },
      { left: 'COUNT(OrderID)', right: 'Counts how many records satisfy the WHERE clause' },
      { left: 'Primary Key', right: 'Uniquely identifies each record in a table' },
    ],
    explanation: 'SUM totals numeric fields, COUNT tallies rows, and the Primary Key uniquely identifies each row.',
  },
  {
    id: 'cs-9-1-q5',
    subtopicId: 'cs-9-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'Write an SQL query to display `Name` and `Score` from the `Results` table for all records where `Score >= 80`, sorted by `Score` descending. [3 marks]',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'SELECT Name, Score FROM Results WHERE Score >= 80 ORDER BY Score DESC;',
      markPoints: [
        { id: 'mp1', markDescription: 'SELECT Name, Score FROM Results', requiredKeywordGroups: [['select'], ['name'], ['score'], ['from results']] },
        { id: 'mp2', markDescription: 'WHERE Score >= 80', requiredKeywordGroups: [['where'], ['80']] },
        { id: 'mp3', markDescription: 'ORDER BY Score DESC', requiredKeywordGroups: [['order by'], ['desc']] },
      ],
    },
    explanation: 'Follow exact SQL clause order: `SELECT ... FROM ... WHERE ... ORDER BY ... DESC`.',
  },

  // cs-10-1
  {
    id: 'cs-10-1-q1',
    subtopicId: 'cs-10-1',
    type: 'mcq',
    marks: 1,
    diagram: 'logic-gates-truth',
    prompt: 'What is the output of an `XOR` gate when BOTH inputs are `1` (`A = 1, B = 1`)?',
    options: ['0', '1', '2', 'Undefined'],
    correctIndex: 0,
    explanation: 'XOR (Exclusive OR) outputs 1 ONLY when inputs differ (`0,1` or `1,0`), so `1 XOR 1 = 0`.',
  },
  {
    id: 'cs-10-1-q2',
    subtopicId: 'cs-10-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which two-input logic gate outputs `1` ONLY when BOTH inputs are `0`?',
    options: ['NOR', 'NAND', 'XOR', 'AND'],
    correctIndex: 0,
    explanation: 'NOR (`NOT OR`) outputs `1` strictly on `(0, 0)` and `0` on `(0,1), (1,0), (1,1)`.',
  },
  {
    id: 'cs-10-1-q3',
    subtopicId: 'cs-10-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the truth-table properties.',
    segments: ['A logic circuit with 3 inputs requires exactly ', ' rows in its truth table, and a ', ' gate outputs 0 only when both inputs are 1.'],
    wordBank: ['8', 'NAND', '6', 'NOR'],
    answers: ['8', 'NAND'],
    explanation: '3 binary inputs yield `2³ = 8` rows; NAND (`NOT AND`) outputs 0 solely for `(1, 1)`.',
  },
  {
    id: 'cs-10-1-q4',
    subtopicId: 'cs-10-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each logic gate to its 4-row output column (for inputs 00, 01, 10, 11).',
    pairs: [
      { left: 'AND', right: '0, 0, 0, 1' },
      { left: 'NAND', right: '1, 1, 1, 0' },
      { left: 'XOR', right: '0, 1, 1, 0' },
    ],
    explanation: 'AND gives 0001, NAND inverts AND to 1110, and XOR outputs 1 solely on differing inputs (0110).',
  },
  {
    id: 'cs-10-1-q5',
    subtopicId: 'cs-10-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Evaluate `X = (A NAND B) OR (NOT C)` when `A = 1, B = 1, C = 0`, showing both intermediate steps. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: '1 NAND 1 = 0, and NOT 0 = 1; combining 0 OR 1 gives final output X = 1.',
      markPoints: [
        { id: 'mp1', markDescription: 'Correct intermediate values: 1 NAND 1 = 0 and NOT 0 = 1', requiredKeywordGroups: [['0'], ['1']] },
        { id: 'mp2', markDescription: 'Final output X = 1', requiredKeywordGroups: [['x = 1', 'output 1', 'gives 1', '= 1']] },
      ],
    },
    explanation: '`1 NAND 1 = 0`, `NOT 0 = 1`, and `0 OR 1 = 1`.',
  },

  // cs-10-2
  {
    id: 'cs-10-2-q1',
    subtopicId: 'cs-10-2',
    type: 'mcq',
    marks: 1,
    prompt: 'A greenhouse alarm `X` sounds (`1`) when Temperature is high (`T = 1`) AND the Fan is OFF (`F = 0`), OR when Smoke is detected (`S = 1`). Which logic expression matches?',
    options: [
      'X = (T AND (NOT F)) OR S',
      'X = (T OR F) AND S',
      'X = (NOT T) AND F AND S',
      'X = T XOR F XOR S',
    ],
    correctIndex: 0,
    explanation: 'High temperature (`T`) AND fan OFF (`NOT F`), combined with OR smoke (`S`), gives `(T AND (NOT F)) OR S`.',
  },
  {
    id: 'cs-10-2-q2',
    subtopicId: 'cs-10-2',
    type: 'mcq',
    marks: 1,
    prompt: 'A 2-input truth table outputs `X = 1` ONLY for row `(A = 0, B = 1)`. Which Boolean expression matches?',
    options: ['(NOT A) AND B', 'A AND (NOT B)', 'A OR (NOT B)', 'A NAND B'],
    correctIndex: 0,
    explanation: '`NOT A` is 1 when `A=0`, and `B` is 1 when `B=1`, so `(NOT A) AND B` outputs 1 solely on `(0, 1)`.',
  },
  {
    id: 'cs-10-2-q3',
    subtopicId: 'cs-10-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Sum-of-Products derivation rule.',
    segments: ['To build an expression from a truth table, select every row where `X = ', '`, write an `AND` term for each row, and join those terms with `', '`.'],
    wordBank: ['1', 'OR', '0', 'XOR'],
    answers: ['1', 'OR'],
    explanation: 'Sum-of-Products ANDs the literals of each `X = 1` row and ORs all those rows together.',
  },
  {
    id: 'cs-10-2-q4',
    subtopicId: 'cs-10-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO expressions that evaluate to `1` when `A = 0, B = 1, C = 1`.',
    options: [
      '(A XOR B) AND C',
      '(NOT A) AND (B OR C)',
      'A AND B AND C',
      'B NOR C',
    ],
    correctIndices: [0, 1],
    explanation: '`0 XOR 1 = 1` and `1 AND 1 = 1`; also `NOT 0 = 1` and `1 OR 1 = 1`. Both `A AND B AND C` and `1 NOR 1` give `0`.',
  },
  {
    id: 'cs-10-2-q5',
    subtopicId: 'cs-10-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Write a Cambridge Boolean logic expression for output `X` which is `1` when: Sensor `A` is OFF (`0`) AND Sensor `B` is ON (`1`), OR both `B` and `C` are ON (`1`). [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'X = ((NOT A) AND B) OR (B AND C)',
      markPoints: [
        { id: 'mp1', markDescription: 'Clause 1: (NOT A) AND B', requiredKeywordGroups: [['not a'], ['and b']] },
        { id: 'mp2', markDescription: 'Clause 2 combined with OR: OR (B AND C)', requiredKeywordGroups: [['or'], ['b and c']] },
      ],
    },
    explanation: 'Translating each condition strictly yields `X = ((NOT A) AND B) OR (B AND C)`.',
  },
];

export const IGCSE_CS_UNITS_7_10_FLASHCARDS: FlashcardItem[] = [
  // cs-7-1
  { id: 'cs-7-1-fc1', subtopicId: 'cs-7-1', front: 'List the 4 stages of the Program Development Life Cycle.', backBullets: ['1. Analysis (abstraction & decomposition). 2. Design (structure diagrams, flowcharts, pseudocode).', '3. Coding (modular code + iterative testing). 4. Testing (normal, abnormal, extreme, boundary data).'] },
  { id: 'cs-7-1-fc2', subtopicId: 'cs-7-1', front: 'Contrast Abstraction vs Decomposition.', backBullets: ['Abstraction hides irrelevant detail to keep only essential inputs, processes, and outputs.', 'Decomposition splits a big problem into smaller manageable sub-systems.'] },
  { id: 'cs-7-1-fc3', subtopicId: 'cs-7-1', front: 'What is a Structure Diagram used for?', backBullets: ['Top-down hierarchical chart illustrating how a system divides into reusable sub-routines.', 'Enables parallel teamwork and isolated module testing.'] },
  { id: 'cs-7-1-fc4', subtopicId: 'cs-7-1', front: 'Name the 4 main flowchart symbols.', backBullets: ['Oval = Terminator (Start/Stop); Parallelogram = Input/Output.', 'Rectangle = Process/Assignment; Diamond = Decision (must label Yes/No arrows!).'] },
  { id: 'cs-7-1-fc5', subtopicId: 'cs-7-1', front: 'What assignment symbol and block closers does Cambridge 0478 pseudocode use?', backBullets: ['Assignment uses `←` (e.g. `Count ← Count + 1`).', 'Closers: `ENDIF`, `ENDCASE`, `NEXT`, `ENDWHILE`, `ENDPROCEDURE`, `ENDFUNCTION`.'] },

  // cs-7-2
  { id: 'cs-7-2-fc1', subtopicId: 'cs-7-2', front: 'How does Linear Search work and when is it required?', backBullets: ['Scans items one by one from index 1 until target is found or list ends.', 'Works directly on UNSORTED lists with zero pre-sorting overhead.'] },
  { id: 'cs-7-2-fc2', subtopicId: 'cs-7-2', front: 'How does Bubble Sort sort an array in ascending order?', backBullets: ['Repeatedly compares adjacent items `A[i]` and `A[i+1]`, swapping if out of order using `Temp`.', 'Stops early once an entire pass completes with `Swapped = FALSE`.'] },
  { id: 'cs-7-2-fc3', subtopicId: 'cs-7-2', front: 'Why must a `Temp` variable be used when swapping two array elements?', backBullets: ['`Temp ← A[i]; A[i] ← A[i+1]; A[i+1] ← Temp`.', 'Without `Temp`, assigning `A[i] ← A[i+1]` permanently overwrites `A[i]`!'] },
  { id: 'cs-7-2-fc4', subtopicId: 'cs-7-2', front: 'Write the safe initialisation rule for finding `Max` and `Min` in an array.', backBullets: ['Set `Max ← List[1]` and `Min ← List[1]`, then loop from index `2` to `N`.', 'Avoid `Min ← 0` because positive datasets would never fall below 0!'] },
  { id: 'cs-7-2-fc5', subtopicId: 'cs-7-2', front: 'Distinguish Totalling vs Counting in a loop.', backBullets: ['Totalling adds item values: `Total ← Total + Value`.', 'Counting tallies matching events: `Count ← Count + 1`.'] },

  // cs-7-3
  { id: 'cs-7-3-fc1', subtopicId: 'cs-7-3', front: 'Name all 6 Cambridge 0478 validation checks.', backBullets: ['Range check, Length check, Type check.', 'Presence check, Format check, and Check digit.'] },
  { id: 'cs-7-3-fc2', subtopicId: 'cs-7-3', front: 'Contrast Validation vs Verification.', backBullets: ['Validation checks data is REASONABLE/SENSIBLE against rules (automated).', 'Verification checks entered/copied data MATCHES the original source (double entry or visual check).'] },
  { id: 'cs-7-3-fc3', subtopicId: 'cs-7-3', front: 'Define Normal, Abnormal, Extreme, and Boundary test data for `1..100`.', backBullets: ['Normal: 50 (accepted). Abnormal: −5 or "abc" (rejected).', 'Extreme: 1 and 100 (exact valid limits). Boundary: pairs (0 & 1) and (100 & 101).'] },
  { id: 'cs-7-3-fc4', subtopicId: 'cs-7-3', front: 'What is the purpose of a Trace Table?', backBullets: ['Manual dry-run grid tracking every variable and output row-by-row.', 'Exposes logic errors (like off-by-one loop bounds) before or during debugging.'] },
  { id: 'cs-7-3-fc5', subtopicId: 'cs-7-3', front: 'Which loop structure is ideal for an input validation check?', backBullets: ['`REPEAT ... UNTIL` (post-condition loop).', 'Guarantees the user is prompted at least once and repeats until valid data is entered.'] },

  // cs-8-1
  { id: 'cs-8-1-fc1', subtopicId: 'cs-8-1', front: 'List the 5 Cambridge 0478 basic data types.', backBullets: ['`INTEGER`, `REAL`, `CHAR`, `STRING`, `BOOLEAN`.', 'Store phone numbers & postcodes as `STRING` so leading zeroes are kept.'] },
  { id: 'cs-8-1-fc2', subtopicId: 'cs-8-1', front: 'Contrast `FOR`, `WHILE`, and `REPEAT ... UNTIL` loops.', backBullets: ['`FOR`: known fixed iterations. `WHILE`: pre-condition (0 or more runs).', '`REPEAT ... UNTIL`: post-condition (guaranteed at least 1 run).'] },
  { id: 'cs-8-1-fc3', subtopicId: 'cs-8-1', front: 'Evaluate `29 DIV 6` and `29 MOD 6`.', backBullets: ['`29 DIV 6 = 4` (whole integer quotient).', '`29 MOD 6 = 5` (integer remainder).'] },
  { id: 'cs-8-1-fc4', subtopicId: 'cs-8-1', front: 'List the 4 Cambridge 0478 string handling functions.', backBullets: ['`LENGTH(s)`, `SUBSTRING(s, start, len)` (1-indexed!).', '`UCASE(s)` (uppercase) and `LCASE(s)` (lowercase).'] },
  { id: 'cs-8-1-fc5', subtopicId: 'cs-8-1', front: 'Why declare fixed rates/limits as `CONSTANT`?', backBullets: ['Prevents accidental modification anywhere in the program.', 'Changing the value in one place updates every usage cleanly.'] },

  // cs-8-2
  { id: 'cs-8-2-fc1', subtopicId: 'cs-8-2', front: 'Contrast a `PROCEDURE` and a `FUNCTION`.', backBullets: ['Procedure: invoked via `CALL`, performs a task, returns NO value.', 'Function: invoked inside an assignment/expression, ALWAYS returns a value via `RETURN`.'] },
  { id: 'cs-8-2-fc2', subtopicId: 'cs-8-2', front: 'Why are local variables preferred over global variables?', backBullets: ['Cannot be accidentally altered by other subroutines (no hidden side effects).', 'Makes modules self-contained/reusable and frees memory on exit.'] },
  { id: 'cs-8-2-fc3', subtopicId: 'cs-8-2', front: 'What are Library Routines? Give 3 Cambridge examples.', backBullets: ['Pre-written, thoroughly tested functions built into a language.', 'Examples: `ROUND(x, n)`, `RANDOM()`, `DIV`, `MOD`.'] },
  { id: 'cs-8-2-fc4', subtopicId: 'cs-8-2', front: 'List 4 techniques for writing maintainable code.', backBullets: ['Meaningful identifier names & clear explanatory comments.', 'Consistent indentation/whitespace & modular procedures/functions with constants.'] },
  { id: 'cs-8-2-fc5', subtopicId: 'cs-8-2', front: 'What are parameters used for in procedures and functions?', backBullets: ['Pass data values cleanly into a subroutine without relying on global variables.', 'Allows the same subroutine to process different datasets on each call.'] },

  // cs-8-3
  { id: 'cs-8-3-fc1', subtopicId: 'cs-8-3', front: 'How do you declare a 1D array of 25 strings in Cambridge pseudocode?', backBullets: ['`DECLARE Names : ARRAY[1:25] OF STRING`.', 'All elements must share the same data type and are accessed via `Names[i]`.'] },
  { id: 'cs-8-3-fc2', subtopicId: 'cs-8-3', front: 'How do you declare and traverse a 2D array `ARRAY[1:5, 1:4]`?', backBullets: ['Use `[Row, Col]` indexing with an outer loop `FOR r ← 1 TO 5` and inner loop `FOR c ← 1 TO 4`.', 'Reset any `RowTotal ← 0` inside the outer loop before starting the inner loop.'] },
  { id: 'cs-8-3-fc3', subtopicId: 'cs-8-3', front: 'Why are files needed alongside arrays in real programs?', backBullets: ['Arrays live in volatile RAM and vanish when the program terminates.', 'Files persist permanently on non-volatile secondary storage (SSD/HDD).'] },
  { id: 'cs-8-3-fc4', subtopicId: 'cs-8-3', front: 'Name the 4 Cambridge file-handling keywords.', backBullets: ['`OPENFILE filename FOR READ` (or `FOR WRITE`), `READFILE`, `WRITEFILE`.', 'Always terminate cleanly with `CLOSEFILE filename`!'] },
  { id: 'cs-8-3-fc5', subtopicId: 'cs-8-3', front: 'What is the purpose of `EOF(filename)`?', backBullets: ['Returns `TRUE` when the end of an open text file is reached.', 'Used in `WHILE NOT EOF("data.txt") DO READFILE ... ENDWHILE`.'] },

  // cs-9-1
  { id: 'cs-9-1-fc1', subtopicId: 'cs-9-1', front: 'Define Table, Record, Field, and Primary Key.', backBullets: ['Table = entity collection; Record = horizontal row; Field = vertical attribute column.', 'Primary Key = unique, non-null field identifying every record unambiguously.'] },
  { id: 'cs-9-1-fc2', subtopicId: 'cs-9-1', front: 'What is the fixed order of SQL query clauses in Cambridge 0478?', backBullets: ['`SELECT` (fields) → `FROM` (table) → `WHERE` (filter) → `ORDER BY` (`ASC`/`DESC`).', 'Wrap text string comparisons in quotes (`\'London\'`).'] },
  { id: 'cs-9-1-fc3', subtopicId: 'cs-9-1', front: 'Contrast SQL `SUM(Field)` and `COUNT(Field)`.', backBullets: ['`SUM()` adds all numeric values in the column for matching rows.', '`COUNT()` tallies how many records satisfy the query filter.'] },
  { id: 'cs-9-1-fc4', subtopicId: 'cs-9-1', front: 'Why are `Surname` and `DateOfBirth` unsuitable as Primary Keys?', backBullets: ['Multiple people can share identical surnames or dates of birth.', 'A Primary Key MUST be guaranteed unique across every record.'] },
  { id: 'cs-9-1-fc5', subtopicId: 'cs-9-1', front: 'Write an SQL query returning `Title` of all films after `2020`, sorted A–Z.', backBullets: ['`SELECT Title FROM Films WHERE Year > 2020 ORDER BY Title ASC;`.', 'Note: `ASC` sorts ascending (A–Z); `DESC` sorts descending (Z–A).'] },

  // cs-10-1
  { id: 'cs-10-1-fc1', subtopicId: 'cs-10-1', front: 'State the output rules for NOT, AND, and OR gates.', backBullets: ['NOT: inverts input (`0→1, 1→0`). AND: 1 only if BOTH inputs are 1.', 'OR: 1 if EITHER or BOTH inputs are 1.'] },
  { id: 'cs-10-1-fc2', subtopicId: 'cs-10-1', front: 'State the output rules for NAND, NOR, and XOR gates.', backBullets: ['NAND: 0 only if BOTH are 1 (`1,1,1,0`). NOR: 1 only if BOTH are 0 (`1,0,0,0`).', 'XOR: 1 strictly when inputs are DIFFERENT (`0,1,1,0`).'] },
  { id: 'cs-10-1-fc3', subtopicId: 'cs-10-1', front: 'How many rows are in a 2-input vs 3-input truth table?', backBullets: ['2 inputs: `2² = 4` rows (`00` to `11`).', '3 inputs: `2³ = 8` rows (`000` to `111`).'] },
  { id: 'cs-10-1-fc4', subtopicId: 'cs-10-1', front: 'How does the symbol of NAND differ from AND, and XOR differ from OR?', backBullets: ['NAND adds a small inversion circle on the output of an AND gate.', 'XOR adds a second curved bar at the input side of an OR gate.'] },
  { id: 'cs-10-1-fc5', subtopicId: 'cs-10-1', front: 'Why should you add workspace columns when solving multi-gate truth tables?', backBullets: ['Breaks the circuit into simple single-gate steps (`P = A AND B`, `Q = NOT C`).', 'Prevents careless mental inversion errors across 8 rows.'] },

  // cs-10-2
  { id: 'cs-10-2-fc1', subtopicId: 'cs-10-2', front: 'How do you translate an English specification into a Boolean expression?', backBullets: ['Map "ON/high" → variable, "OFF/low" → `NOT`, "both" → `AND`, "either" → `OR`.', 'Wrap every sub-condition in explicit parentheses to enforce exact precedence.'] },
  { id: 'cs-10-2-fc2', subtopicId: 'cs-10-2', front: 'How do you derive a logic expression directly from a truth table?', backBullets: ['Identify every row where `X = 1`.', 'Write an `AND` term for each `X = 1` row (`0` gets `NOT`), then join rows with `OR`.'] },
  { id: 'cs-10-2-fc3', subtopicId: 'cs-10-2', front: 'What is the precedence order of Boolean operators?', backBullets: ['1. Brackets `()` → 2. `NOT` → 3. `AND` → 4. `OR`.', 'Using explicit brackets removes any ambiguity in Cambridge exams.'] },
  { id: 'cs-10-2-fc4', subtopicId: 'cs-10-2', front: 'What best practices ensure full marks when drawing a logic circuit?', backBullets: ['Draw left-to-right (inputs on left, `X` on right), include inversion circles on NOT/NAND/NOR.', 'Use clear solid dots where input wires branch and verify with 2 sample rows.'] },
  { id: 'cs-10-2-fc5', subtopicId: 'cs-10-2', front: 'Simplify `((NOT A) AND B) OR (A AND (NOT B))` into a single 2-input gate.', backBullets: ['Outputs `1` exclusively on `(0, 1)` and `(1, 0)`.', 'Equivalent to a single **`A XOR B`** gate!'] },
];

export const IGCSE_CS_UNITS_7_10_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'cs-ex-7-1',
    subtopicId: 'cs-7-1',
    number: 16,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A cinema kiosk system lets customers select a film, choose seat count, validate payment, and print tickets.',
    parts: [
      {
        id: 'cs-ex-7-1-a',
        label: '(a)',
        prompt: 'Explain how abstraction and top-down decomposition are applied during the Analysis and Design stages for this cinema kiosk. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Abstraction removes irrelevant details (like cinema decor) to model only film ID, seat availability, and price; decomposition splits the kiosk into smaller sub-systems (film selection, payment validation, ticket printing) shown on a structure diagram.',
          markPoints: [
            { id: 'mp1', markDescription: 'Abstraction removes irrelevant detail focusing on core inputs/outputs', requiredKeywordGroups: [['abstraction'], ['irrelevant', 'unnecessary', 'essential', 'detail']] },
            { id: 'mp2', markDescription: 'Decomposition breaks kiosk into manageable sub-systems/modules', requiredKeywordGroups: [['decomposition'], ['sub-system', 'smaller', 'module', 'split', 'break']] },
            { id: 'mp3', markDescription: 'Represented in Design with a structure diagram / flowcharts / pseudocode', requiredKeywordGroups: [['structure diagram', 'flowchart', 'pseudocode']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-7-2',
    subtopicId: 'cs-7-2',
    number: 17,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: An array `Temps[1:5]` holds unsorted daily temperatures `[22, 15, 29, 18, 12]`.',
    diagram: 'sorting-searching-trace',
    parts: [
      {
        id: 'cs-ex-7-2-a',
        label: '(a)',
        prompt: 'Show the array state after Pass 1 of an ascending Bubble Sort and explain why Linear Search must be used before sorting. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'After Pass 1 the array is [15, 22, 18, 12, 29] with 29 bubbled to the end. Linear search must be used on unsorted data because it checks each element sequentially from index 1 without requiring sorted order.',
          markPoints: [
            { id: 'mp1', markDescription: 'Correct Pass 1 state [15, 22, 18, 12, 29]', requiredKeywordGroups: [['15', '22', '18', '12', '29']] },
            { id: 'mp2', markDescription: 'Linear search works on unsorted arrays', requiredKeywordGroups: [['unsorted', 'not sorted']] },
            { id: 'mp3', markDescription: 'Checks items sequentially one by one', requiredKeywordGroups: [['sequential', 'one by one', 'each element', 'in order']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-7-3',
    subtopicId: 'cs-7-3',
    number: 18,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A school registration form only accepts integer Year Groups between `7` and `11` inclusive.',
    parts: [
      {
        id: 'cs-ex-7-3-a',
        label: '(a)',
        prompt: 'Identify the validation check required and provide one example each of Normal, Abnormal, Extreme, and Boundary test data. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'A range check (and type check) is required. Normal: 9; Abnormal: 15 (or "abc"); Extreme: 7 (or 11); Boundary pair: 6 and 7 (or 11 and 12).',
          markPoints: [
            { id: 'mp1', markDescription: 'Range check named', requiredKeywordGroups: [['range check', 'range']] },
            { id: 'mp2', markDescription: 'Valid Normal (8, 9, or 10) and Abnormal (<7, >11, or non-integer)', requiredKeywordGroups: [['normal'], ['abnormal']] },
            { id: 'mp3', markDescription: 'Valid Extreme (7 or 11)', requiredKeywordGroups: [['extreme'], ['7', '11']] },
            { id: 'mp4', markDescription: 'Valid Boundary pair straddling edge (6 & 7 or 11 & 12)', requiredKeywordGroups: [['boundary'], ['6', '12']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-8-1',
    subtopicId: 'cs-8-1',
    number: 19,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A parcel company parses tracking IDs like `"UK202699"` and checks whether package weights are exact multiples of `5 kg`.',
    parts: [
      {
        id: 'cs-ex-8-1-a',
        label: '(a)',
        prompt: 'Write the pseudocode expression to extract `"UK"` from `TrackID` and the condition to test whether `Weight` is an exact multiple of 5. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Use `SUBSTRING(TrackID, 1, 2)` to extract "UK", and check `Weight MOD 5 = 0` to test whether Weight is an exact multiple of 5.',
          markPoints: [
            { id: 'mp1', markDescription: 'SUBSTRING(TrackID, 1, 2)', requiredKeywordGroups: [['substring'], ['1'], ['2']] },
            { id: 'mp2', markDescription: 'Weight MOD 5 = 0', requiredKeywordGroups: [['mod'], ['5'], ['0']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-8-2',
    subtopicId: 'cs-8-2',
    number: 20,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A programmer replaces duplicated discount calculations across five screens with a single `FUNCTION CalcDiscount(Price : REAL) RETURNS REAL`.',
    parts: [
      {
        id: 'cs-ex-8-2-a',
        label: '(a)',
        prompt: 'Explain why a function with a parameter and local variables is better than a procedure using global variables here. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'A function returns the discounted price directly to each caller via RETURN (whereas a procedure does not), parameters pass different prices cleanly, and local variables prevent accidental side effects or overwrites across the five screens.',
          markPoints: [
            { id: 'mp1', markDescription: 'Function returns a value via RETURN (procedure does not)', requiredKeywordGroups: [['return'], ['value', 'price', 'result']] },
            { id: 'mp2', markDescription: 'Parameter passes input cleanly into reusable routine', requiredKeywordGroups: [['parameter', 'reus']] },
            { id: 'mp3', markDescription: 'Local variables prevent accidental global side effects', requiredKeywordGroups: [['local'], ['side effect', 'accident', 'overwrit', 'global']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-8-3',
    subtopicId: 'cs-8-3',
    number: 21,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A weather station stores 7 days of 3 daily readings in `Rain : ARRAY[1:7, 1:3] OF REAL` and archives weekly summaries to `"rain.txt"`.',
    parts: [
      {
        id: 'cs-ex-8-3-a',
        label: '(a)',
        prompt: 'Write the three Cambridge pseudocode lines required to open `"rain.txt"` for writing, write `SummaryLine`, and close the file cleanly. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'OPENFILE "rain.txt" FOR WRITE; WRITEFILE "rain.txt", SummaryLine; CLOSEFILE "rain.txt".',
          markPoints: [
            { id: 'mp1', markDescription: 'OPENFILE "rain.txt" FOR WRITE', requiredKeywordGroups: [['openfile'], ['for write']] },
            { id: 'mp2', markDescription: 'WRITEFILE "rain.txt", SummaryLine', requiredKeywordGroups: [['writefile'], ['summaryline']] },
            { id: 'mp3', markDescription: 'CLOSEFILE "rain.txt"', requiredKeywordGroups: [['closefile']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-9-1',
    subtopicId: 'cs-9-1',
    number: 22,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A table `Flights` stores fields `FlightNo` (Text), `Destination` (Text), `SeatsLeft` (Integer), and `Fare` (Real).',
    diagram: 'database-normalisation-erd',
    parts: [
      {
        id: 'cs-ex-9-1-a',
        label: '(a)',
        prompt: 'Write an SQL query to display `FlightNo` and `Fare` for flights to `\'Tokyo\'` with `SeatsLeft > 0`, ordered cheapest `Fare` first. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: "SELECT FlightNo, Fare FROM Flights WHERE Destination = 'Tokyo' AND SeatsLeft > 0 ORDER BY Fare ASC;",
          markPoints: [
            { id: 'mp1', markDescription: 'SELECT FlightNo, Fare FROM Flights', requiredKeywordGroups: [['select'], ['flightno'], ['fare'], ['from flights']] },
            { id: 'mp2', markDescription: "WHERE Destination = 'Tokyo' AND SeatsLeft > 0", requiredKeywordGroups: [['where'], ['tokyo'], ['seatsleft']] },
            { id: 'mp3', markDescription: 'ORDER BY Fare ASC', requiredKeywordGroups: [['order by'], ['fare'], ['asc']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-10-1',
    subtopicId: 'cs-10-1',
    number: 23,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A digital controller implements the logic expression `X = (A AND B) XOR (NOT C)`.',
    diagram: 'logic-gates-truth',
    parts: [
      {
        id: 'cs-ex-10-1-a',
        label: '(a)',
        prompt: 'Evaluate `X` for both `(A=1, B=1, C=0)` and `(A=1, B=0, C=1)`, showing intermediate outputs. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'For (1,1,0): (1 AND 1)=1 and NOT 0=1, so 1 XOR 1 = 0. For (1,0,1): (1 AND 0)=0 and NOT 1=0, so 0 XOR 0 = 0.',
          markPoints: [
            { id: 'mp1', markDescription: '(1,1,0) → 1 XOR 1 = 0', requiredKeywordGroups: [['1 xor 1', '= 0']] },
            { id: 'mp2', markDescription: '(1,0,1) → 0 XOR 0 = 0', requiredKeywordGroups: [['0 xor 0', '0']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-10-2',
    subtopicId: 'cs-10-2',
    number: 24,
    stimulus: 'Cambridge IGCSE 0478 Paper 2: A boiler safety shutoff `X = 1` activates whenever Pressure is too high (`P = 1`) AND Coolant Flow is OFF (`F = 0`), OR when Emergency Stop (`E = 1`) is pressed.',
    parts: [
      {
        id: 'cs-ex-10-2-a',
        label: '(a)',
        prompt: 'Write the Boolean logic expression for `X` and name the exact gates required to draw its logic circuit. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'X = (P AND (NOT F)) OR E. Drawing the circuit requires one NOT gate (on F), one AND gate (combining P and NOT F), and one final OR gate (combining that output with E).',
          markPoints: [
            { id: 'mp1', markDescription: 'Sub-expression (P AND (NOT F))', requiredKeywordGroups: [['not f'], ['p and', 'and (not f)']] },
            { id: 'mp2', markDescription: 'Combined with OR E', requiredKeywordGroups: [['or e']] },
            { id: 'mp3', markDescription: 'Names NOT, AND, and OR gates', requiredKeywordGroups: [['not'], ['and'], ['or']] },
          ],
        },
      },
    ],
  },
];
