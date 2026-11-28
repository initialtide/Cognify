import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const IGCSE_CS_UNITS_4_6_TOPICS: TopicDefinition[] = [
  {
    number: 4,
    title: 'Software',
    subtopics: [
      {
        id: 'cs-4-1',
        code: '4.1',
        slug: '4.1-os-functions-firmware-interrupts',
        title: 'System vs Application Software, Operating System Functions, Firmware & Interrupts',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-4-2',
        code: '4.2',
        slug: '4.2-languages-compilers-interpreters-ides',
        title: 'High/Low-Level Languages, Assembly, Compilers, Interpreters & IDEs',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 5,
    title: 'The Internet & Its Uses',
    subtopics: [
      {
        id: 'cs-5-1',
        code: '5.1',
        slug: '5.1-internet-www-http-dns-cookies-blockchain',
        title: 'Internet vs WWW, URLs, HTTP/HTTPS, DNS, Cookies & Blockchain Digital Currencies',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'cs-5-2',
        code: '5.2',
        slug: '5.2-cyber-security-threats-layered-defences',
        title: 'Cyber Security Threats (Malware, Phishing, DDoS, SQLi) & Layered Defences',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'Automated & Emerging Technologies',
    subtopics: [
      {
        id: 'cs-6-1',
        code: '6.1',
        slug: '6.1-automated-systems-robotics',
        title: 'Automated Systems (Sensors, Microprocessors & Actuators) & Robotics',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-6-2',
        code: '6.2',
        slug: '6.2-artificial-intelligence-expert-systems-ml',
        title: 'Artificial Intelligence, Expert Systems & Machine Learning',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_CS_UNITS_4_6_NOTES: Record<string, NoteLesson> = {
  'cs-4-1': {
    subtopicId: 'cs-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'System vs Application Software, Operating System Functions, Firmware & Interrupts',
    readingMinutes: 10,
    videoTitle: '46. CAMBRIDGE IGCSE (0478-0984) 4.1 The purpose and functions of operating systems',
    youtubeId: 'cgiHpRPqCpo',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:42',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'System Software vs Application Software & Boot Firmware', cardId: 'cs-4-1-c1' },
      { time: '2:35', seconds: 155, label: 'Core Operating System Functions', cardId: 'cs-4-1-c2' },
      { time: '5:10', seconds: 310, label: 'Hardware & Software Interrupts and the ISR Cycle', cardId: 'cs-4-1-c3' },
    ],
    cards: [
      {
        id: 'cs-4-1-c1',
        title: 'System Software, Application Software & Firmware Hierarchy',
        summary: 'Hardware runs boot firmware (BIOS/UEFI), which loads the Operating System (system software), which provides the platform for user applications.',
        diagram: 'compiler-pipeline-os',
        bullets: [
          '**System software** — manages hardware and provides a platform for apps: **Operating System**, **Utility software** (disk defragmenter, backup, anti-malware, compression), and **Device drivers**.',
          '**Application software** — enables users to complete specific tasks: word processors, spreadsheets, web browsers, database apps, games.',
          '**Hardware → Firmware → OS → Apps** — on power-on, ROM **firmware** (bootstrap/BIOS) checks hardware (POST) and loads the **OS** into RAM; apps then call OS services rather than directly manipulating hardware.',
        ],
        subsections: [
          {
            heading: 'Role of Device Drivers',
            bullets: [
              '**Translation layer** — converts generic OS I/O calls into hardware-specific commands for printers, GPUs, or keyboards.',
            ],
            exampleHeading: 'Worked boot sequence (`t = 0 s` to desktop)',
            examples: [
              '`Power ON → CPU runs BIOS/UEFI in ROM → POST tests RAM/SSD → Bootloader loads OS kernel into RAM → User opens Application`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'firmware', definition: 'Low-level permanent software stored in ROM/flash (such as BIOS/UEFI) that bootstraps hardware at startup.' },
          { term: 'utility software', definition: 'System software performing maintenance tasks like encryption, compression, disk repair, and virus scanning.' },
        ],
      },
      {
        id: 'cs-4-1-c2',
        title: 'Operating System Core Functions',
        summary: 'The OS hides hardware complexity by managing files, memory, multitasking, peripherals, user accounts, security, and the user interface.',
        bullets: [
          '**Memory management** — allocates RAM blocks to processes, prevents programs overwriting each other’s memory, and coordinates **virtual memory** paging.',
          '**Multitasking & scheduling** — allocates rapid CPU time slices across processes so multiple apps appear to run simultaneously.',
          '**File, peripheral & user management** — maintains directory structures & permissions, controls I/O queues/buffers via **device drivers**, authenticates user accounts, handles errors, and renders a **GUI or CLI**.',
        ],
        subsections: [
          {
            heading: 'GUI vs Command-Line Interface (CLI)',
            bullets: [
              '**GUI** (windows, icons, menus, pointers) is intuitive for novices; **CLI** uses far less RAM/CPU and lets experts script automated admin tasks directly.',
            ],
            exampleHeading: 'Worked multitasking example (`10 ms` time slices)',
            examples: [
              'Single core alternates `Browser (10 ms) → Music Player (10 ms) → Word Processor (10 ms)` = `100 switches/s`, feeling seamless to the user.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'multitasking', definition: 'OS capability to run multiple processes concurrently by rapidly switching CPU time slices between them.' },
        ],
      },
      {
        id: 'cs-4-1-c3',
        title: 'Interrupts & Interrupt Service Routines (ISRs)',
        summary: 'Interrupts signal the CPU to pause its current task immediately, save register state, run a prioritised ISR, and then resume seamlessly.',
        bullets: [
          '**Hardware interrupts** — triggered by external devices (key press, mouse click, printer out of paper, power fail, hardware timer tick).',
          '**Software interrupts** — triggered by running programs (division by zero, invalid memory access, file-not-found / OS system call).',
          '**Interrupt handling sequence** — CPU finishes current FDE cycle → checks **Interrupt Register / priority** → if higher priority, saves `PC` and registers onto the **stack** → loads **ISR** (Interrupt Service Routine) address into `PC` → executes ISR → restores saved registers from stack and resumes original program.',
        ],
        subsections: [
          {
            heading: 'Buffers + Interrupts for Smooth I/O',
            bullets: [
              '**Print buffer example** — fast CPU fills RAM buffer and returns to user tasks; slow printer empties buffer and fires an **interrupt** only when it needs the next block.',
            ],
            exampleHeading: 'Worked trace: Division by zero during calculation (`10 ÷ 0`)',
            examples: [
              'ALU flags software interrupt → CPU pushes current `PC` to stack → runs OS error ISR displaying `"ZeroDivisionError"` → safely returns control to OS.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'interrupt', definition: 'Signal sent by hardware or software to the CPU requesting immediate attention via an Interrupt Service Routine (ISR).' },
          { term: 'ISR', definition: 'Interrupt Service Routine — specialised handler code executed by the CPU to service a specific interrupt.' },
        ],
        memoryAid: 'Interrupt 4-Step: Finish FDE → Save PC/Registers to Stack → Run ISR → Pop & Resume!',
        commonMistake: 'Saying an interrupt stops the CPU mid-instruction — the CPU ALWAYS finishes the current Fetch–Decode–Execute cycle before checking the interrupt queue!',
      },
    ],
    keyTerms: [
      { term: 'System Software', definition: 'Software controlling hardware and supporting applications (OS, utilities, drivers).' },
      { term: 'Firmware', definition: 'Permanent low-level control software in ROM (e.g. BIOS/bootstrap) starting up hardware.' },
      { term: 'Interrupt', definition: 'Hardware or software signal telling the CPU to pause and execute a prioritised service routine.' },
      { term: 'Interrupt Service Routine (ISR)', definition: 'Dedicated OS subroutine that processes a specific hardware or software interrupt.' },
    ],
    checklistPoints: [
      'Distinguish system software, application software, firmware, and device drivers',
      'Explain six core functions of an Operating System including memory and multitasking management',
      'Trace hardware vs software interrupts through register saving and ISR execution',
    ],
  },

  'cs-4-2': {
    subtopicId: 'cs-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'High/Low-Level Languages, Assembly, Compilers, Interpreters & IDEs',
    readingMinutes: 10,
    videoTitle: '53. CAMBRIDGE IGCSE (0478-0984) 4.2 Compilers and interpreters',
    youtubeId: 'c1nisKE8ln4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:26',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'High-Level Languages vs Low-Level Assembly & Machine Code', cardId: 'cs-4-2-c1' },
      { time: '2:30', seconds: 150, label: 'Translators: Assemblers, Compilers & Interpreters', cardId: 'cs-4-2-c2' },
      { time: '5:05', seconds: 305, label: 'Integrated Development Environment (IDE) Features', cardId: 'cs-4-2-c3' },
    ],
    cards: [
      {
        id: 'cs-4-2-c1',
        title: 'High-Level vs Low-Level Languages',
        summary: 'High-level languages (Python, Java, C#) are portable and English-like; low-level languages (Assembly, Machine Code) directly control hardware registers for maximum speed.',
        bullets: [
          '**High-Level Languages (HLL)** — English-like syntax (`IF score >= 50 THEN`), **machine-independent (portable)** across CPUs, faster to write/debug/maintain, one line translates to many machine instructions.',
          '**Low-Level Languages (LLL)** — **Machine code** (pure binary executable directly by CPU) and **Assembly language** (short mnemonics like `LDA`, `ADD`, `STA` with 1-to-1 mapping to machine code).',
          '**Why still use Assembly?** — direct manipulation of hardware registers/specialised embedded peripherals, minimal RAM footprint, and deterministic real-time execution speed (device drivers, embedded firmware).',
        ],
        subsections: [
          {
            heading: 'One Line of HLL vs Assembly',
            bullets: [
              '**Abstraction trade-off** — HLL boosts programmer productivity; Assembly grants exact hardware control.',
            ],
            exampleHeading: 'Worked comparison: Adding two numbers (`total ← a + b`)',
            examples: [
              'HLL (`1 line`): `total ← a + b`.',
              'Assembly (`3 lines`): `LDA a` → `ADD b` → `STA total` (requires an **Assembler** to translate to binary).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'assembly language', definition: 'Low-level language using short symbolic mnemonics (LDA, ADD, STA) translated 1-to-1 into machine code by an assembler.' },
          { term: 'portable', definition: 'Ability of high-level source code to run on different CPU architectures once translated.' },
        ],
      },
      {
        id: 'cs-4-2-c2',
        title: 'Compilers vs Interpreters vs Assemblers',
        summary: 'Compilers translate the entire program at once into a standalone executable; interpreters translate and run one line at a time, halting immediately on the first syntax error.',
        bullets: [
          '**Compiler** — translates the **entire high-level source file** in one pass into standalone **machine-code executable** (`.exe`), outputting a full **error report** if syntax errors exist. Runs **much faster**, protects source code, and needs no translator at runtime.',
          '**Interpreter** — translates and executes **one statement at a time** without creating an executable; **stops immediately** on the first error, making iterative debugging during development far easier. Slower at runtime and requires the interpreter + source code on every run.',
          '**Assembler** — translates **Assembly language** mnemonics directly into binary machine code.',
        ],
        subsections: [
          {
            heading: 'Best-Practice Workflow (Dev vs Release)',
            bullets: [
              '**Develop with an Interpreter** for instant line-by-line debugging → **Distribute with a Compiler** for fast execution and hidden source code!',
            ],
            exampleHeading: 'Worked comparison: Why commercial games ship compiled binaries',
            examples: [
              'A compiled binary runs `10–50× faster` than interpreted code and prevents competitors from reading the original source code.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'compiler', definition: 'Translator converting an entire high-level source program into a standalone machine-code executable before execution.' },
          { term: 'interpreter', definition: 'Translator executing high-level source code line-by-line without producing a standalone executable.' },
        ],
      },
      {
        id: 'cs-4-2-c3',
        title: 'Integrated Development Environment (IDE) Tools',
        summary: 'IDEs bundle code editing, syntax diagnostics, translation, and interactive debugging into one cohesive workspace.',
        bullets: [
          '**Code Editor & Prettyprinting** — colour-codes keywords/strings/comments (**syntax highlighting**), auto-indents blocks, and offers **auto-completion**.',
          '**Error Diagnostics & Run-Time Environment** — highlights syntax mistakes as you type, lets you run code immediately inside the IDE, and shows stack traces.',
          '**Debugger Tools** — **Breakpoints** pause execution on chosen lines, **Single-stepping** runs one statement at a time, and **Variable watch windows** inspect live memory values to locate logic errors.',
        ],
        subsections: [
          {
            heading: 'Syntax vs Logic Error Debugging',
            bullets: [
              '**Syntax checks** catch typos (`PRNT` instead of `PRINT`); **breakpoints + stepping** catch logic bugs (`total ← total - x` instead of `+ x`).',
            ],
            exampleHeading: 'Worked example: Diagnosing a loop off-by-one bug in an IDE',
            examples: [
              'Place a **breakpoint** inside the `FOR` loop → **step through** iterations while watching `i` and `total` in the variable watch table → spot `i = 0` skipped immediately.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'IDE', definition: 'Integrated Development Environment combining code editor, prettyprinting, translator, runtime, and debugger.' },
        ],
        memoryAid: 'Compiler = Complete Executable + Error List (Fast release). Interpreter = Immediate Line-by-Line (Fast debugging)!',
        commonMistake: 'Writing "interpreters are faster than compilers" — interpreters are faster to START testing during development, NOT faster to EXECUTE; compiled executables run dramatically faster at runtime!',
      },
    ],
    keyTerms: [
      { term: 'High-Level Language', definition: 'Human-readable, portable programming language independent of specific CPU hardware.' },
      { term: 'Assembly Language', definition: 'Hardware-specific low-level language using short mnemonics translated by an assembler.' },
      { term: 'Compiler', definition: 'Translator producing a standalone machine-code executable from an entire high-level program.' },
      { term: 'Interpreter', definition: 'Translator reading and executing high-level code one line at a time.' },
      { term: 'IDE (Integrated Development Environment)', definition: 'Software suite providing code editor, syntax highlighting, translator, and debugger.' },
    ],
    checklistPoints: [
      'Compare high-level languages, assembly language, and machine code with valid use cases',
      'Contrast compilers, interpreters, and assemblers on speed, error reporting, and distribution',
      'Describe five productivity and debugging tools built into a modern IDE',
    ],
  },

  'cs-5-1': {
    subtopicId: 'cs-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Internet vs WWW, URLs, HTTP/HTTPS, DNS, Cookies & Blockchain Digital Currencies',
    readingMinutes: 11,
    videoTitle: '57. CAMBRIDGE IGCSE (0478-0984) 5.1 HTTP and HTTPS',
    youtubeId: 'uj06meqOpqo',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:10',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Internet vs WWW, URLs, DNS & Browser Rendering', cardId: 'cs-5-1-c1' },
      { time: '2:40', seconds: 160, label: 'HTTP vs HTTPS (TLS/SSL) & Session/Persistent Cookies', cardId: 'cs-5-1-c2' },
      { time: '5:05', seconds: 305, label: 'Digital Currencies & Blockchain Decentralised Ledgers', cardId: 'cs-5-1-c3' },
    ],
    cards: [
      {
        id: 'cs-5-1-c1',
        title: 'Internet vs WWW, URL Anatomy & DNS Lookup',
        summary: 'The Internet is the global physical network infrastructure; the World Wide Web (WWW) is the collection of web pages accessed over it via URLs, DNS, and HTTP/HTTPS.',
        bullets: [
          '**Internet vs WWW** — **Internet** = physical global network of routers, cables, and servers (also carries email, VoIP, FTP). **WWW** = web pages and resources hosted on web servers and viewed in a browser.',
          '**URL parts** — e.g. `https://www.cambridge.org/igcse/0478.html` splits into **Protocol** (`https://`), **Domain Name** (`www.cambridge.org`), and **Web Page / File Path** (`/igcse/0478.html`).',
          '**How a web page is located (DNS)** — Browser sends domain name to **DNS (Domain Name System)** server → DNS looks up matching **IP address** (or queries higher DNS servers) → returns IP to browser → browser sends HTTP/HTTPS `GET` request to that IP → server returns HTML/CSS/JS → browser **renders** the page.',
        ],
        subsections: [
          {
            heading: 'Web Browser Core Functions',
            bullets: [
              '**Beyond rendering** — stores **bookmarks/favourites**, tracks **browsing history**, manages **tabs & navigation buttons**, stores **cookies**, and checks **HTTPS digital certificates**.',
            ],
            exampleHeading: 'Worked trace: Navigating to `https://cognify.edu/cs`',
            examples: [
              '1. Parse protocol (`https`), domain (`cognify.edu`), path (`/cs`).',
              '2. DNS resolves `cognify.edu → 198.51.100.24` → TLS handshake completes → HTML fetched & rendered.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'DNS', definition: 'Domain Name System — distributed directory translating human-readable domain names into numerical IP addresses.' },
          { term: 'URL', definition: 'Uniform Resource Locator — unique web address comprising protocol, domain name, and file path.' },
        ],
      },
      {
        id: 'cs-5-1-c2',
        title: 'HTTP vs HTTPS (TLS/SSL) & Cookies',
        summary: 'HTTPS wraps HTTP inside TLS/SSL encryption verified by digital certificates; cookies store small browser-side text files to remember sessions and preferences.',
        bullets: [
          '**HTTP vs HTTPS** — **HTTP** transmits requests and web pages in **plaintext** (vulnerable to eavesdropping). **HTTPS** adds **TLS/SSL encryption** verified by a **Digital Certificate** issued by a trusted Certificate Authority (CA), ensuring confidentiality and server identity.',
          '**Session cookies** — stored temporarily in **RAM** only while the browser tab/session is open (used for shopping carts and active login tokens); deleted when browser closes.',
          '**Persistent cookies** — stored on **secondary storage (SSD/HDD)** until an expiry date (used for `"Remember me"` logins, language preferences, and targeted ad tracking).',
        ],
        subsections: [
          {
            heading: 'HTTPS Handshake Essentials',
            bullets: [
              '**Certificate check** — browser verifies the server’s digital certificate with the CA, extracts the server’s **public key**, negotiates a symmetric session key, and displays the padlock.',
            ],
            exampleHeading: 'Worked comparison: Session vs Persistent cookie on an e-commerce site',
            examples: [
              'Closing the browser deletes a **session cookie** (logs you out of banking), whereas a **persistent cookie** keeps your dark-mode preference next week.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'HTTPS', definition: 'Hypertext Transfer Protocol Secure — encrypts HTTP web traffic using TLS/SSL and digital certificates.' },
          { term: 'cookie', definition: 'Small text file stored by a web browser containing user preferences, session IDs, or tracking tokens.' },
        ],
      },
      {
        id: 'cs-5-1-c3',
        title: 'Digital Currencies & Blockchain Ledgers',
        summary: 'Digital currencies exist purely electronically; cryptocurrencies use a decentralised, cryptographically chained blockchain ledger that prevents tampering.',
        bullets: [
          '**Digital currency** — electronic-only money (centralised like bank/CBDC ledgers, or **decentralised cryptocurrencies** like Bitcoin without a central bank).',
          '**Blockchain structure** — a distributed **digital ledger** of **blocks** replicated across every peer node. Each block stores **transaction data**, a **timestamp**, its own **cryptographic hash**, and the **previous block’s hash** (starting from the **Genesis Block**).',
          '**Tamper resistance (Immutability)** — changing even 1 digit in an older block alters its hash, **breaking the hash link** to every subsequent block across the entire peer network, so honest nodes instantly reject the forged copy.',
        ],
        subsections: [
          {
            heading: 'Adding a New Block',
            bullets: [
              '**Consensus verification** — network nodes validate the new transaction block, link it to the previous block’s hash, and broadcast the updated chain to all participants.',
            ],
            exampleHeading: 'Worked tamper check: Block #2 hash mismatch',
            examples: [
              'Block #2 stores `PrevHash = #1 (A7F2)` and `Hash = 9C4E`. If an attacker alters Block #1, `#1`’s hash becomes `3B10 ≠ A7F2` → chain breaks immediately!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'blockchain', definition: 'Decentralised, append-only digital ledger of time-stamped blocks linked sequentially via cryptographic hashes.' },
        ],
        memoryAid: 'URL = Protocol + Domain + Path. Session Cookie = RAM (temporary). Persistent Cookie = Disk (long-term). Blockchain = Each block hashes the Previous block!',
        commonMistake: 'Saying the Internet and the World Wide Web are the same thing — the Internet is the global physical network infrastructure, while the WWW is just one service (web pages) running on top of it!',
      },
    ],
    keyTerms: [
      { term: 'World Wide Web (WWW)', definition: 'Collection of interlinked web pages accessed via browsers over the physical Internet.' },
      { term: 'Domain Name System (DNS)', definition: 'Server system translating domain names into numerical IP addresses.' },
      { term: 'HTTPS (TLS/SSL)', definition: 'Encrypted version of HTTP securing web traffic with digital certificates and session keys.' },
      { term: 'Session vs Persistent Cookie', definition: 'Temporary RAM-stored browser cookie vs disk-stored cookie retained across restarts.' },
      { term: 'Blockchain', definition: 'Decentralised cryptographic ledger chaining blocks via previous-block hashes to prevent tampering.' },
    ],
    checklistPoints: [
      'Distinguish the Internet from the WWW and trace a full DNS-to-rendered-page lookup',
      'Explain how HTTPS secures web traffic and compare session vs persistent cookies',
      'Describe how cryptographic hashes make a decentralised blockchain tamper-evident',
    ],
  },

  'cs-5-2': {
    subtopicId: 'cs-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Cyber Security Threats (Malware, Phishing, DDoS, SQLi) & Layered Defences',
    readingMinutes: 11,
    videoTitle: '63. CAMBRIDGE IGCSE (0478-0984) 5.3 Cybersecurity threats - Forms of attack',
    youtubeId: 'l27QDW-i3DY',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:20',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Network & Web Attacks: Brute Force, DDoS, MitM & SQL Injection', cardId: 'cs-5-2-c1' },
      { time: '2:50', seconds: 170, label: 'Malware Types & Social Engineering (Phishing/Pharming)', cardId: 'cs-5-2-c2' },
      { time: '5:35', seconds: 335, label: 'Layered Defences: Access Levels, 2FA, Biometrics, Firewalls & Proxies', cardId: 'cs-5-2-c3' },
    ],
    cards: [
      {
        id: 'cs-5-2-c1',
        title: 'Technical Cyber Attacks (Brute Force, DDoS, Data Interception & SQLi)',
        summary: 'Technical attacks exploit software flaws, weak credentials, or network flooding to steal data or deny service availability.',
        bullets: [
          '**Brute-force attack** — automated trial-and-error guessing of every password/key combination until login succeeds (defended by strong length, lockouts, and 2FA).',
          '**DDoS (Distributed Denial of Service)** — a **botnet** of thousands of malware-infected zombie computers floods a target server simultaneously with bogus requests, exhausting bandwidth/CPU so legitimate users are blocked.',
          '**Data interception (Man-in-the-Middle / Packet Sniffing)** — attacker captures unencrypted traffic on open Wi-Fi to steal credentials (defended by HTTPS/TLS encryption).',
          "**SQL Injection** — attacker types malicious SQL syntax (e.g. `' OR '1'='1`) into an unvalidated input field to trick the backend database into leaking or deleting records.",
        ],
        subsections: [
          {
            heading: 'Worked SQL Injection Example',
            bullets: [
              '**Root cause** — concatenating raw user input directly into SQL queries instead of using input validation & parameterised queries.',
            ],
            exampleHeading: 'Worked example: Bypassing an insecure login check',
            examples: [
              'Query: `SELECT * FROM Users WHERE User=\'\' OR 1=1 --\'` → `1=1` is ALWAYS TRUE, dumping all accounts without a valid password!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'DDoS attack', definition: 'Distributed Denial of Service — flooding a server with traffic from a botnet of infected devices to crash or block genuine users.' },
          { term: 'SQL injection', definition: 'Injecting malicious SQL code into an input form to manipulate or extract backend database contents.' },
        ],
      },
      {
        id: 'cs-5-2-c2',
        title: 'Malware Families & Social Engineering',
        summary: 'Malware damages or spies on hosts (virus, worm, trojan, spyware, adware, ransomware); social engineering manipulates human trust (phishing, pharming, shoulder surfing).',
        bullets: [
          '**6 Key Malware Types** — **Virus** (attaches to host file & replicates when opened), **Worm** (standalone self-replicating across networks without user action), **Trojan** (disguised as legitimate software hiding a backdoor), **Spyware / Keylogger** (secretly records keystrokes/activity), **Adware** (floods pop-ups), **Ransomware** (encrypts victim’s files and demands payment for decryption key).',
          '**Phishing** — fraudulent emails/texts posing as trusted banks/schools with fake links urging victims to enter passwords.',
          '**Pharming** — malicious code/DNS poisoning silently **redirects** a user typing a **legitimate URL** to a fake clone website without them clicking any phishing link!',
          '**Social engineering** — exploiting human psychology (blagging, pretexting, baiting, shoulder surfing) rather than technical bugs.',
        ],
        subsections: [
          {
            heading: 'Phishing vs Pharming Exam Trap',
            bullets: [
              '**Phishing** requires the victim to click a fake email/SMS link; **Pharming** corrupts local hosts file or DNS cache so even typing the genuine URL sends the user to a bogus site.',
            ],
            exampleHeading: 'Worked comparison: Virus vs Worm vs Trojan',
            examples: [
              'Virus needs a **host file**; Worm spreads **independently** across networks; Trojan **masquerades** as helpful software.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pharming', definition: 'Attack modifying DNS/hosts records to redirect legitimate website addresses to fraudulent lookalike sites.' },
          { term: 'ransomware', definition: 'Malware that encrypts a victim’s files and demands a ransom payment for the decryption key.' },
        ],
      },
      {
        id: 'cs-5-2-c3',
        title: 'Layered Cyber Defences: Authentication, Firewalls & Proxy Servers',
        summary: 'Effective security layers strong access controls (2FA, biometrics, access levels), network filtering (firewalls & proxies), TLS encryption, patching, and offline backups.',
        bullets: [
          '**Authentication & Access Levels** — **Access levels** restrict users to only data required for their role; **Two-Factor Authentication (2FA)** combines two distinct factors (password + SMS/app OTP); **Biometrics** (fingerprint/iris/face) are unique and impossible to forget.',
          '**Firewall** — monitors incoming and outgoing network traffic against security rules (IPs, ports, protocols), blocking unauthorised connections and logging alerts.',
          '**Proxy server** — acts as an **intermediary** between users and external web servers: hides internal IP addresses, caches frequent pages for speed, filters blocked sites, and absorbs DDoS spikes.',
          '**Hygiene & recovery** — **Anti-malware** (signature + heuristic scans), **automatic software updates** (patch known exploits), checking **URLs & HTTPS certificates**, and maintaining **offline encrypted backups** against ransomware.',
        ],
        subsections: [
          {
            heading: 'Defence-in-Depth Mapping',
            bullets: [
              '**Match defence to threat**: Ransomware → offline backup + anti-malware; Brute force → 2FA + account lockout; DDoS → proxy/firewall rate limiting; SQLi → validation + parameterised queries.',
            ],
            exampleHeading: 'Worked example: Why 2FA defeats a leaked password',
            examples: [
              'Even if phishing steals a user’s password (`Factor 1: something you know`), the attacker lacks their physical phone generating the 6-digit OTP (`Factor 2: something you have`).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'firewall', definition: 'Hardware or software barrier inspecting incoming and outgoing network traffic against security rules to block unauthorised access.' },
          { term: 'proxy server', definition: 'Intermediary server forwarding web requests on behalf of clients to hide internal IPs, filter content, and cache pages.' },
        ],
        memoryAid: 'Phishing = Email bait (click link). Pharming = DNS/hosts hijack (even valid URL redirects). Firewall = Filters traffic. Proxy = Intermediary hiding IP!',
        commonMistake: 'Confusing DoS with DDoS — DoS comes from a SINGLE machine, whereas DDoS uses a DISTRIBUTED botnet of thousands of compromised zombie devices simultaneously!',
      },
    ],
    keyTerms: [
      { term: 'DDoS (Distributed Denial of Service)', definition: 'Flooding a server with requests from a botnet of zombie computers to deny legitimate access.' },
      { term: 'SQL Injection', definition: 'Submitting crafted SQL commands into an input form to extract or corrupt database tables.' },
      { term: 'Phishing vs Pharming', definition: 'Fraudulent link-bait emails vs DNS/hosts-level silent redirection to bogus sites.' },
      { term: 'Firewall', definition: 'Network security system monitoring and filtering incoming/outgoing packets against rules.' },
      { term: 'Two-Factor Authentication (2FA)', definition: 'Verification requiring two independent proofs of identity (e.g. password + mobile OTP).' },
    ],
    checklistPoints: [
      'Explain brute force, DDoS, packet interception, and SQL injection with concrete examples',
      'Distinguish all six malware families plus phishing vs pharming',
      'Match specific cyber threats to layered defences (2FA, biometrics, firewalls, proxies, patching, backups)',
    ],
  },

  'cs-6-1': {
    subtopicId: 'cs-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Automated Systems (Sensors, Microprocessors & Actuators) & Robotics',
    readingMinutes: 10,
    videoTitle: '67. CAMBRIDGE IGCSE (0478-0984) 6.1 Automated systems - Part 1',
    youtubeId: 'krIeObyk8ac',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:22',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Automated Systems Architecture & Real-World Scenarios', cardId: 'cs-6-1-c1' },
      { time: '2:30', seconds: 150, label: 'Characteristics of Robots & Independent vs Dependent Robots', cardId: 'cs-6-1-c2' },
      { time: '5:00', seconds: 300, label: 'Roles, Advantages & Drawbacks of Robotics in Society', cardId: 'cs-6-1-c3' },
    ],
    cards: [
      {
        id: 'cs-6-1-c1',
        title: 'Automated Systems: Sensors, Microprocessors & Actuators',
        summary: 'Automated systems combine sensors, a microprocessor, and actuators to monitor and control physical environments continuously without human intervention.',
        bullets: [
          '**Three core hardware pillars** — **Sensors** gather real-world analogue readings (converted via ADC), **Microprocessor** evaluates readings against stored thresholds/rules, and **Actuators** execute physical changes (valves, motors, heaters, alarms).',
          '**Key Cambridge scenarios** — **Industry** (chemical reactor temperature/pH control), **Transport** (adaptive cruise control / autonomous trains), **Agriculture** (soil-moisture drip irrigation), **Weather stations** (barometer/anemometer logging), **Gaming** (motion/haptic feedback), **Lighting & Science labs** (automated titration).',
          '**Benefits vs Drawbacks** — faster reaction time (`< 10 ms`), 24/7 consistency, safer in hazardous environments; drawbacks include **high upfront capital cost**, maintenance needs, cyber vulnerability, and risk of systematic error if sensors drift.',
        ],
        subsections: [
          {
            heading: 'Worked Automated Agriculture Scenario',
            bullets: [
              '**Closed-loop irrigation** — moisture sensors trigger water valves only when soil drops below `30%` moisture, slashing water waste.',
            ],
            exampleHeading: 'Worked example: Chemical reactor safety cooling (`> 90 °C`)',
            examples: [
              'Temperature sensor → ADC → Microprocessor compares `T > 90 °C` → Actuator opens coolant valve & slows reactant pump → loops every `0.5 s`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'automated system', definition: 'Integrated system of sensors, microprocessors, and actuators operating a process continuously with minimal or zero human intervention.' },
        ],
      },
      {
        id: 'cs-6-1-c2',
        title: 'What Defines a Robot? (3 Mandatory Characteristics)',
        summary: 'Cambridge 0478 defines a robot by three essential traits: a mechanical structure, electrical components (sensors/microprocessor/actuators), and programmability.',
        bullets: [
          '**3 Characteristics of a Robot** — (1) **Mechanical structure / framework** (arms, wheels, end-effectors), (2) **Electrical components** (sensors, microprocessor, power supply, actuators), and (3) **Programmable** (follows stored software instructions and can be reprogrammed for new tasks).',
          '**Independent (Autonomous) robots** — operate without direct human control, using onboard sensors and AI to navigate and make decisions (e.g. autonomous warehouse pickers, Mars rovers, robot vacuum cleaners).',
          '**Dependent robots** — require human interface/control to guide actions (e.g. surgeon-controlled Da Vinci surgical robot, bomb-disposal teleoperated rover).',
        ],
        subsections: [
          {
            heading: 'Software Bots vs Physical Robots',
            bullets: [
              '**Exam distinction** — web crawlers and chatbots are **software bots**, NOT physical robots, because they lack a mechanical body and physical actuators!',
            ],
            exampleHeading: 'Worked classification: Autonomous delivery drone vs Factory welding arm',
            examples: [
              'Both have mechanical frames, electrical sensors/actuators, and programmable microcontrollers — both are true robots (`autonomous` vs `fixed industrial`).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'robotics', definition: 'Branch of computer science and engineering focused on designing, building, and programming physical robots.' },
          { term: 'independent robot', definition: 'Autonomous robot capable of sensing its environment and acting without continuous human control.' },
        ],
      },
      {
        id: 'cs-6-1-c3',
        title: 'Roles, Advantages & Socio-Economic Impact of Robots',
        summary: 'Robots excel at dull, dirty, dangerous, and ultra-precise repetitive tasks across manufacturing, medicine, transport, domestic life, and entertainment.',
        bullets: [
          '**Industry & Manufacturing** — car welding, spray painting, PCB pick-and-place (`±0.02 mm` repeatability, 24/7 operation without fatigue).',
          '**Medicine, Agriculture & Transport** — minimally invasive surgical robots (tiny incisions, zero hand tremor), precision fruit harvesting, autonomous haulage vehicles, and space/deep-sea exploration.',
          '**Advantages** — higher productivity, consistent quality, safer working conditions in toxic/nuclear/extreme sites, lower long-run unit labour costs.',
          '**Drawbacks** — **high initial setup & maintenance costs**, **deskilling / structural unemployment** in routine jobs, inability to handle unexpected non-programmed edge cases without AI.',
        ],
        subsections: [
          {
            heading: 'Balanced Evaluation for 6-Mark Exam Questions',
            bullets: [
              '**Always give BOTH sides**: operational efficiency/safety gains vs capital cost, job displacement, and maintenance dependence.',
            ],
            exampleHeading: 'Worked evaluation: Automated car assembly line',
            examples: [
              'Robots weld `1,200 chassis/day` with zero fatigue and fewer toxic fume injuries, but cost millions upfront and displace routine assembly staff who require retraining.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'end-effector', definition: 'Specialised tool attached to the end of a robotic arm (e.g. gripper, welder, scalpel, spray nozzle).' },
        ],
        memoryAid: 'Robot 3 Pillars = Mechanical body + Electrical components (sensors/CPU/actuators) + Programmable!',
        commonMistake: 'Calling a customer-service chatbot a "robot" in Cambridge 0478 — a true robot MUST have a physical mechanical structure as well as electrical components and programmability.',
      },
    ],
    keyTerms: [
      { term: 'Automated System', definition: 'Sensor + microprocessor + actuator loop controlling a process without human intervention.' },
      { term: 'Robot', definition: 'Programmable machine combining a physical mechanical structure with electrical sensors, processor, and actuators.' },
      { term: 'Independent Robot', definition: 'Robot operating autonomously without direct human control.' },
      { term: 'Dependent Robot', definition: 'Robot requiring real-time human operator guidance (e.g. surgical tele-robotics).' },
    ],
    checklistPoints: [
      'Describe how sensors, microprocessors, and actuators cooperate in real-world automated systems',
      'State the three defining characteristics of a physical robot and contrast independent vs dependent robots',
      'Evaluate industrial, medical, transport, and domestic robotics across benefits and drawbacks',
    ],
  },

  'cs-6-2': {
    subtopicId: 'cs-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Artificial Intelligence, Expert Systems & Machine Learning',
    readingMinutes: 10,
    videoTitle: '71. CAMBRIDGE IGCSE (0478-0984) 6.3 Artificial intelligence (AI)',
    youtubeId: 'rE00609d-f4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:40',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'What Is Artificial Intelligence? Core Characteristics', cardId: 'cs-6-2-c1' },
      { time: '2:35', seconds: 155, label: 'Expert Systems: Knowledge Base, Rule Base & Inference Engine', cardId: 'cs-6-2-c2' },
      { time: '5:10', seconds: 310, label: 'Machine Learning: Training Data, Adaptation & Ethics', cardId: 'cs-6-2-c3' },
    ],
    cards: [
      {
        id: 'cs-6-2-c1',
        title: 'Artificial Intelligence (AI) Characteristics',
        summary: 'AI simulates intelligent human behaviours — collecting data, applying rules, reasoning toward conclusions, and adapting from experience.',
        bullets: [
          '**Definition of AI** — branch of computer science building systems capable of performing tasks normally requiring **human intelligence** (speech recognition, medical imaging diagnosis, autonomous navigation, game playing).',
          '**Three core AI capabilities** — (1) **Data collection & rule storage**, (2) **Ability to reason** (draw logical conclusions from facts and rules), and (3) **Ability to learn and adapt** (updating internal models/rules from new data and feedback).',
          '**Narrow vs General AI** — modern systems are **Narrow AI** excelling at specific domains (chess, fraud detection, translation) rather than broad human general reasoning.',
        ],
        subsections: [
          {
            heading: 'AI vs Simple Automation',
            bullets: [
              '**Key contrast** — a thermostat follows fixed hard-coded thresholds (`T < 18 °C`), whereas an AI system analyses patterns and **adapts** its decisions as new data arrives.',
            ],
            exampleHeading: 'Worked example: Autonomous vehicle object recognition',
            examples: [
              'Cameras & LiDAR stream `30 frames/s` → AI model classifies pedestrians vs road signs in `< 20 ms` and predicts trajectory to brake safely.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'artificial intelligence (AI)', definition: 'Simulation of intelligent human behaviours (reasoning, learning, adaptation) by computer systems.' },
        ],
      },
      {
        id: 'cs-6-2-c2',
        title: 'Expert Systems (4 Core Components)',
        summary: 'Expert systems mimic the decision-making of a human specialist using a User Interface, Inference Engine, Knowledge Base, and Rule Base.',
        bullets: [
          '**1. User Interface** — prompts the user with interactive questions and displays diagnoses, probabilities, and **explanations** of how conclusions were reached.',
          '**2. Knowledge Base** — structured repository of verified domain **facts** gathered from human experts (e.g. medical symptoms, geological traits).',
          '**3. Rule Base** — collection of logical `IF ... THEN ...` **inference rules** linking facts to conclusions.',
          '**4. Inference Engine** — the "brain" / search engine that **applies the Rule Base to the Knowledge Base** and user inputs to deduce conclusions (plus an optional **Explanation System** showing its reasoning chain).',
        ],
        subsections: [
          {
            heading: 'Applications & Limitations of Expert Systems',
            bullets: [
              '**Applications** — medical diagnosis, car engine fault diagnostics, mineral/oil prospecting, credit risk assessment, plant/species identification.',
              '**Limitations** — cannot adapt automatically beyond programmed rules, lacks human empathy/common sense, and wrong facts in the knowledge base produce systematically wrong advice.',
            ],
            exampleHeading: 'Worked trace: Car fault expert system',
            examples: [
              'User enters `engine_cranks = FALSE` AND `headlights_dim = TRUE` → **Inference Engine** matches `IF NOT cranks AND dim_lights THEN flat_battery (92%)` from **Rule Base + Knowledge Base**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'inference engine', definition: 'Core reasoning component of an expert system that applies rules in the rule base to facts in the knowledge base.' },
          { term: 'knowledge base', definition: 'Database of verified domain-specific facts compiled from human experts for an expert system.' },
        ],
      },
      {
        id: 'cs-6-2-c3',
        title: 'Machine Learning (ML): Learning Without Explicit Rules',
        summary: 'Machine Learning is a subset of AI where algorithms automatically detect statistical patterns in training data and improve accuracy over time without being explicitly programmed for every rule.',
        bullets: [
          '**How ML differs from traditional coding / expert systems** — instead of humans manually coding every `IF–THEN` rule, ML algorithms are trained on large **datasets** to adjust internal weights/parameters and generalise to unseen inputs.',
          '**Core ML applications** — **Email spam filters** (adapting to new scam phrasing), **search engines & streaming recommendations**, **credit-card fraud detection**, and **handwriting / speech recognition**.',
          '**Risks & ethical concerns** — **biased training data** leads to unfair/discriminatory predictions, lack of transparency ("black-box" decisions), and high energy/data requirements.',
        ],
        subsections: [
          {
            heading: 'Expert System vs Machine Learning',
            bullets: [
              '**Expert System**: explicit human-authored rules; transparent explanation; static unless manually edited.',
              '**Machine Learning**: learns patterns directly from data; improves automatically with experience; needs large clean datasets.',
            ],
            exampleHeading: 'Worked example: Adaptive spam filter accuracy',
            examples: [
              'Trained on `100,000` labelled emails (`spam` vs `ham`), every time users click `"Report Spam"` the model updates token weights and catches newly coined scam phrases automatically.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'machine learning', definition: 'Subset of AI where programs automatically learn patterns from training data and adapt performance without explicit step-by-step reprogramming.' },
        ],
        memoryAid: 'Expert System = UI + Inference Engine + Knowledge Base (facts) + Rule Base (IF–THEN)!',
        commonMistake: 'Confusing the Knowledge Base with the Rule Base — the Knowledge Base stores FACTS, the Rule Base stores IF–THEN RULES, and the Inference Engine matches them together!',
      },
    ],
    keyTerms: [
      { term: 'Artificial Intelligence (AI)', definition: 'Systems designed to simulate human reasoning, learning, and adaptive decision-making.' },
      { term: 'Expert System', definition: 'AI system emulating a human specialist using a UI, inference engine, knowledge base, and rule base.' },
      { term: 'Inference Engine', definition: 'Reasoning module matching user input against rules and facts in an expert system.' },
      { term: 'Machine Learning (ML)', definition: 'Subset of AI where algorithms automatically adapt and improve accuracy from training data.' },
    ],
    checklistPoints: [
      'Identify the defining capabilities of Artificial Intelligence (data, rules, reasoning, adaptation)',
      'Name and explain all four components of an Expert System (UI, Inference Engine, Knowledge Base, Rule Base)',
      'Contrast Machine Learning with static rule-based Expert Systems and give real-world ML uses',
    ],
  },
};

export const IGCSE_CS_UNITS_4_6_QUIZZES: QuizQuestion[] = [
  // cs-4-1
  {
    id: 'cs-4-1-q1',
    subtopicId: 'cs-4-1',
    type: 'mcq',
    marks: 1,
    diagram: 'compiler-pipeline-os',
    prompt: 'What does the CPU do IMMEDIATELY after completing its current Fetch–Decode–Execute cycle when a high-priority interrupt arrives?',
    options: [
      'Saves current PC and registers onto the stack and executes the Interrupt Service Routine (ISR)',
      'Deletes the running application from RAM',
      'Shuts down the system clock permanently',
      'Recompiles the operating system kernel',
    ],
    correctIndex: 0,
    explanation: 'The CPU saves its register state onto the stack, jumps to the ISR to handle the event, then restores registers and resumes.',
  },
  {
    id: 'cs-4-1-q2',
    subtopicId: 'cs-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the following is an example of a SOFTWARE interrupt rather than a hardware interrupt?',
    options: [
      'A program attempting division by zero',
      'A user pressing a key on the keyboard',
      'A printer running out of paper',
      'A mouse moving across the desk',
    ],
    correctIndex: 0,
    explanation: 'Division by zero is generated internally by executing code (software interrupt); keyboards, mice, and printers generate hardware interrupts.',
  },
  {
    id: 'cs-4-1-q3',
    subtopicId: 'cs-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the startup software hierarchy.',
    segments: ['On power-on, permanent ROM ', ' runs hardware checks and loads the ', ' into RAM so user applications can execute.'],
    wordBank: ['firmware', 'operating system', 'compiler', 'cookie'],
    answers: ['firmware', 'operating system'],
    explanation: 'ROM firmware (BIOS/UEFI bootloader) initializes hardware and loads the Operating System into RAM.',
  },
  {
    id: 'cs-4-1-q4',
    subtopicId: 'cs-4-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each software category to an accurate example.',
    pairs: [
      { left: 'Utility software', right: 'Disk defragmenter / anti-malware scanner' },
      { left: 'Application software', right: 'Spreadsheet / web browser' },
      { left: 'Device driver', right: 'Translates OS print calls into printer-specific commands' },
    ],
    explanation: 'Utilities maintain the system, applications perform user tasks, and device drivers translate OS calls for specific hardware.',
  },
  {
    id: 'cs-4-1-q5',
    subtopicId: 'cs-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'State two core functions performed by an Operating System. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The operating system performs memory management (allocating RAM and virtual memory) and multitasking/file/peripheral management through device drivers.',
      markPoints: [
        { id: 'mp1', markDescription: 'Memory management or multitasking/process scheduling', requiredKeywordGroups: [['memory', 'ram', 'multitasking', 'schedul']] },
        { id: 'mp2', markDescription: 'File management, peripheral/driver control, security/user accounts, or UI', requiredKeywordGroups: [['file', 'peripheral', 'driver', 'user', 'security', 'interface', 'interrupt']] },
      ],
    },
    explanation: 'Core OS duties include memory management, multitasking, file management, peripheral control, user security, and providing a UI.',
  },

  // cs-4-2
  {
    id: 'cs-4-2-q1',
    subtopicId: 'cs-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How does an interpreter behave differently from a compiler when syntax errors exist in a program?',
    options: [
      'An interpreter stops immediately at the first syntax error, whereas a compiler produces an error report for the whole file',
      'An interpreter creates a standalone .exe file before checking syntax',
      'A compiler executes lines one-by-one before finishing translation',
      'Neither translator can detect syntax errors',
    ],
    correctIndex: 0,
    explanation: 'Interpreters halt at the first erroneous line (great for quick debugging); compilers scan the whole file and list all syntax errors together.',
  },
  {
    id: 'cs-4-2-q2',
    subtopicId: 'cs-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why might an embedded systems engineer write a device driver in Assembly language instead of Python?',
    options: [
      'Assembly allows direct control over hardware registers and executes with minimal memory overhead',
      'Assembly is completely portable across every CPU without changes',
      'Assembly requires no translation into binary machine code',
      'Assembly automatically includes a graphical user interface',
    ],
    correctIndex: 0,
    explanation: 'Assembly gives 1-to-1 control of CPU registers and hardware ports with tiny RAM footprint and predictable real-time speed.',
  },
  {
    id: 'cs-4-2-q3',
    subtopicId: 'cs-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the translator definitions.',
    segments: ['An ', ' translates assembly language mnemonics into binary machine code, whereas a ', ' translates a whole high-level program into a standalone executable.'],
    wordBank: ['assembler', 'compiler', 'interpreter', 'router'],
    answers: ['assembler', 'compiler'],
    explanation: 'Assemblers translate assembly language; compilers translate entire high-level programs into standalone executables.',
  },
  {
    id: 'cs-4-2-q4',
    subtopicId: 'cs-4-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO debugging features provided by an Integrated Development Environment (IDE).',
    options: [
      'Breakpoints that pause program execution at chosen lines',
      'Single-stepping with live variable watch inspection',
      'Physical optical disc burning',
      'Automatic DNS IP resolution',
    ],
    correctIndices: [0, 1],
    explanation: 'IDE debuggers include breakpoints, single-stepping, and variable watch tables to hunt down logic errors.',
  },
  {
    id: 'cs-4-2-q5',
    subtopicId: 'cs-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give two advantages of distributing commercial software as a compiled executable rather than interpreted source code. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Compiled executables run much faster without needing a translator installed at runtime, and hiding the original source code protects intellectual property from copying or tampering.',
      markPoints: [
        { id: 'mp1', markDescription: 'Faster execution / no translator needed by end user', requiredKeywordGroups: [['faster', 'no translator', 'standalone', 'executable']] },
        { id: 'mp2', markDescription: 'Source code is hidden / protected from copying or editing', requiredKeywordGroups: [['source code', 'hidden', 'protect', 'cannot view', 'tamper']] },
      ],
    },
    explanation: 'Compiled executables execute faster with no runtime interpreter required and protect proprietary source code.',
  },

  // cs-5-1
  {
    id: 'cs-5-1-q1',
    subtopicId: 'cs-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the role of the Domain Name System (DNS) when a user types `https://www.cambridge.org` into a browser?',
    options: [
      'Translates the human-readable domain name into the web server’s numerical IP address',
      'Encrypts the HTML page using a symmetric session key',
      'Deletes persistent cookies from RAM',
      'Compresses images using Run-Length Encoding',
    ],
    correctIndex: 0,
    explanation: 'DNS acts like the Internet’s phonebook, resolving domain names to numeric IP addresses.',
  },
  {
    id: 'cs-5-1-q2',
    subtopicId: 'cs-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is altering an historical transaction in a blockchain practically impossible to hide?',
    options: [
      'Modifying a block changes its hash, breaking the previous-hash link stored inside every subsequent block across peers',
      'Blockchains are stored on a single central bank hard drive',
      'Blockchains delete old transactions after 24 hours',
      'Blockchains use unencrypted HTTP cookies',
    ],
    correctIndex: 0,
    explanation: 'Each block stores the cryptographic hash of the previous block across all distributed nodes, making tampering instantly detectable.',
  },
  {
    id: 'cs-5-1-q3',
    subtopicId: 'cs-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the comparison of browser cookies.',
    segments: ['Temporary ', ' cookies are held in RAM and deleted when the browser closes, whereas ', ' cookies are saved on secondary storage until expiry.'],
    wordBank: ['session', 'persistent', 'blockchain', 'DNS'],
    answers: ['session', 'persistent'],
    explanation: 'Session cookies live only in RAM for the current session; persistent cookies remain on disk across browser restarts.',
  },
  {
    id: 'cs-5-1-q4',
    subtopicId: 'cs-5-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each part of `https://exam.org/cs/notes.html` to its URL label.',
    pairs: [
      { left: 'https://', right: 'Protocol (encrypted web transfer)' },
      { left: 'exam.org', right: 'Domain name resolved by DNS' },
      { left: '/cs/notes.html', right: 'Web page / file path on server' },
    ],
    explanation: 'A URL consists of Protocol + Domain Name + File/Web Page Path.',
  },
  {
    id: 'cs-5-1-q5',
    subtopicId: 'cs-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between the Internet and the World Wide Web (WWW). [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The Internet is the global physical infrastructure of interconnected networks and hardware, whereas the World Wide Web is the collection of web pages and websites accessed over the Internet using browsers and HTTP/HTTPS.',
      markPoints: [
        { id: 'mp1', markDescription: 'Internet is physical global infrastructure / interconnected networks', requiredKeywordGroups: [['infrastructure', 'physical', 'network', 'hardware']] },
        { id: 'mp2', markDescription: 'WWW is collection of web pages / websites accessed via browsers/HTTP', requiredKeywordGroups: [['web page', 'website', 'browser', 'http']] },
      ],
    },
    explanation: 'The Internet is the global hardware network; the WWW is the web-page service running on top of it.',
  },

  // cs-5-2
  {
    id: 'cs-5-2-q1',
    subtopicId: 'cs-5-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How does PHARMING differ from PHISHING?',
    options: [
      'Pharming hijacks DNS/hosts records to redirect even a correctly typed URL to a fake site, whereas phishing baits users to click a fake email link',
      'Pharming encrypts files for ransom, whereas phishing slows down routers',
      'Pharming only affects smartphones, whereas phishing only affects printers',
      'Pharming uses a botnet to flood servers with packets',
    ],
    correctIndex: 0,
    explanation: 'Phishing tricks users into clicking bogus email/SMS links; pharming redirects legitimate URLs silently via DNS/hosts tampering.',
  },
  {
    id: 'cs-5-2-q2',
    subtopicId: 'cs-5-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which attack uses a botnet of thousands of infected zombie computers to overwhelm a server with requests?',
    options: ['Distributed Denial of Service (DDoS)', 'SQL Injection', 'Shoulder surfing', 'Symmetric encryption'],
    correctIndex: 0,
    explanation: 'DDoS coordinates a distributed botnet to exhaust server bandwidth/resources and block legitimate users.',
  },
  {
    id: 'cs-5-2-q3',
    subtopicId: 'cs-5-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the cyber defence statements.',
    segments: ['A ', ' filters incoming and outgoing packets against security rules, while ', ' encrypts victim files and demands payment for the key.'],
    wordBank: ['firewall', 'ransomware', 'cookie', 'compiler'],
    answers: ['firewall', 'ransomware'],
    explanation: 'Firewalls filter network packets by rules; ransomware encrypts victim data for extortion.',
  },
  {
    id: 'cs-5-2-q4',
    subtopicId: 'cs-5-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each malware type to its behaviour.',
    pairs: [
      { left: 'Worm', right: 'Self-replicates across networks independently without a host file' },
      { left: 'Trojan', right: 'Disguises itself as legitimate software to open a hidden backdoor' },
      { left: 'Spyware', right: 'Secretly logs keystrokes and user activity to transmit to attackers' },
    ],
    explanation: 'Worms spread standalone across networks, Trojans masquerade as genuine programs, and Spyware covertly monitors user input.',
  },
  {
    id: 'cs-5-2-q5',
    subtopicId: 'cs-5-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two security roles performed by a proxy server sitting between a school LAN and the Internet. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A proxy server hides internal user IP addresses from external websites and filters/blocks malicious traffic or unauthorised sites while caching frequently requested web pages.',
      markPoints: [
        { id: 'mp1', markDescription: 'Acts as intermediary hiding internal IP addresses', requiredKeywordGroups: [['hide', 'anonym', 'internal ip', 'intermediary']] },
        { id: 'mp2', markDescription: 'Filters/blocks traffic/sites OR caches pages OR helps absorb DDoS', requiredKeywordGroups: [['filter', 'block', 'cache', 'ddos', 'inspect']] },
      ],
    },
    explanation: 'Proxy servers hide internal client IPs, filter dangerous/unauthorised requests, cache common web content, and buffer DDoS surges.',
  },

  // cs-6-1
  {
    id: 'cs-6-1-q1',
    subtopicId: 'cs-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which combination lists ALL THREE mandatory characteristics of a physical robot in Cambridge IGCSE 0478?',
    options: [
      'Mechanical structure, electrical components (sensors/CPU/actuators), and programmability',
      'Human-like face, cloud storage, and Wi-Fi antenna',
      'Software chatbot code, keyboard, and LCD monitor',
      'Only a microprocessor and an SQL database',
    ],
    correctIndex: 0,
    explanation: 'Cambridge 0478 requires a mechanical body, electrical components (sensors, microprocessor, actuators), and programmability.',
  },
  {
    id: 'cs-6-1-q2',
    subtopicId: 'cs-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A surgeon operates a robotic arm via hand controls inside an operating theatre. What category of robot is this?',
    options: ['Dependent robot', 'Independent robot', 'Software bot', 'Virtual machine'],
    correctIndex: 0,
    explanation: 'Dependent robots require continuous real-time human guidance rather than operating autonomously.',
  },
  {
    id: 'cs-6-1-q3',
    subtopicId: 'cs-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the automated system hardware loop.',
    segments: ['In an automated greenhouse, ', ' continuously measure moisture and temperature while ', ' physically open roof vents and water valves.'],
    wordBank: ['sensors', 'actuators', 'compilers', 'proxies'],
    answers: ['sensors', 'actuators'],
    explanation: 'Sensors capture environmental data and actuators execute the resulting physical movement.',
  },
  {
    id: 'cs-6-1-q4',
    subtopicId: 'cs-6-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO genuine drawbacks of introducing industrial robots onto a factory production line.',
    options: [
      'High upfront capital investment and ongoing specialist maintenance costs',
      'Displacement and deskilling of human workers performing routine assembly',
      'Robots tire rapidly after 8-hour shifts',
      'Robots cannot perform repetitive welds consistently',
    ],
    correctIndices: [0, 1],
    explanation: 'Robots deliver 24/7 precision, but carry heavy capital/maintenance costs and displace routine manual roles.',
  },
  {
    id: 'cs-6-1-q5',
    subtopicId: 'cs-6-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two advantages of using an automated sensor-microprocessor system rather than manual monitoring in a nuclear reactor cooling loop. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Automated systems react in milliseconds continuously 24/7 without human fatigue and keep human operators safely away from hazardous radiation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Faster reaction time / continuous 24/7 precision without fatigue', requiredKeywordGroups: [['faster', 'millisecond', '24/7', 'continuous', 'fatigue', 'consisten']] },
        { id: 'mp2', markDescription: 'Improved human safety in hazardous/toxic environment', requiredKeywordGroups: [['safe', 'hazard', 'danger', 'radiation']] },
      ],
    },
    explanation: 'Automated control reacts instantaneously around the clock and protects human operators from hazardous conditions.',
  },

  // cs-6-2
  {
    id: 'cs-6-2-q1',
    subtopicId: 'cs-6-2',
    type: 'mcq',
    marks: 1,
    prompt: 'In an Expert System, which component applies the IF–THEN rules in the Rule Base to facts in the Knowledge Base?',
    options: ['Inference Engine', 'Actuator', 'Domain Name Server', 'Assembler'],
    correctIndex: 0,
    explanation: 'The Inference Engine performs the logical reasoning by matching user inputs and Knowledge Base facts against the Rule Base.',
  },
  {
    id: 'cs-6-2-q2',
    subtopicId: 'cs-6-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the defining feature of Machine Learning compared to a static rule-based program?',
    options: [
      'It automatically learns patterns from training data and adapts its decisions without being explicitly reprogrammed',
      'It only runs on parallel cables',
      'It stores fixed IF–THEN rules that can never change',
      'It requires zero training data',
    ],
    correctIndex: 0,
    explanation: 'Machine Learning algorithms identify statistical patterns in datasets and improve automatically as new data arrives.',
  },
  {
    id: 'cs-6-2-q3',
    subtopicId: 'cs-6-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Expert System architecture statement.',
    segments: ['Domain facts gathered from specialists are stored in the ', ', while logical IF–THEN conditions are stored in the ', '.'],
    wordBank: ['knowledge base', 'rule base', 'cache', 'payload'],
    answers: ['knowledge base', 'rule base'],
    explanation: 'The Knowledge Base holds domain facts and the Rule Base holds IF–THEN inference rules.',
  },
  {
    id: 'cs-6-2-q4',
    subtopicId: 'cs-6-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each AI / ML concept to its real-world example.',
    pairs: [
      { left: 'Expert System', right: 'Interactive medical symptom diagnosis with reasoning trace' },
      { left: 'Machine Learning', right: 'Spam filter adapting automatically to new scam emails' },
      { left: 'Training data bias', right: 'Unfair predictions caused by skewed historical datasets' },
    ],
    explanation: 'Expert systems apply explicit domain rules, ML adapts from data, and skewed training data causes algorithmic bias.',
  },
  {
    id: 'cs-6-2-q5',
    subtopicId: 'cs-6-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two limitations of using an Expert System for medical diagnosis. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'An expert system cannot adapt automatically to brand-new diseases unless experts manually update its knowledge and rule bases, and it lacks human empathy and common sense.',
      markPoints: [
        { id: 'mp1', markDescription: 'Static rules / cannot learn automatically / errors if knowledge base is inaccurate', requiredKeywordGroups: [['cannot learn', 'manual', 'update', 'inaccurate', 'wrong fact', 'static']] },
        { id: 'mp2', markDescription: 'Lacks human empathy / common sense / expensive to maintain', requiredKeywordGroups: [['empathy', 'common sense', 'human', 'expensive', 'cost']] },
      ],
    },
    explanation: 'Expert systems cannot self-adapt beyond manually authored facts/rules and lack human common sense and empathy.',
  },
];

export const IGCSE_CS_UNITS_4_6_FLASHCARDS: FlashcardItem[] = [
  // cs-4-1
  { id: 'cs-4-1-fc1', subtopicId: 'cs-4-1', front: 'Contrast system software and application software.', backBullets: ['System software manages hardware & provides the platform (OS, utilities, drivers).', 'Application software lets users perform specific tasks (spreadsheets, browsers, games).'] },
  { id: 'cs-4-1-fc2', subtopicId: 'cs-4-1', front: 'List 6 core functions of an Operating System.', backBullets: ['Memory management, multitasking/scheduling, file management.', 'Peripheral/driver management, user accounts & security, UI (GUI/CLI) & interrupt handling.'] },
  { id: 'cs-4-1-fc3', subtopicId: 'cs-4-1', front: 'What is the role of firmware (BIOS/UEFI) on startup?', backBullets: ['Stored permanently in ROM/flash.', 'Runs hardware POST checks and executes the bootstrap loader to load the OS into RAM.'] },
  { id: 'cs-4-1-fc4', subtopicId: 'cs-4-1', front: 'Give 2 hardware interrupt examples and 2 software interrupt examples.', backBullets: ['Hardware: key press, printer out of paper, hardware timer tick, mouse click.', 'Software: division by zero, stack overflow / invalid memory access, OS system call.'] },
  { id: 'cs-4-1-fc5', subtopicId: 'cs-4-1', front: 'Trace how the CPU handles an interrupt via an ISR.', backBullets: ['Finishes current FDE cycle → checks priority → pushes PC & registers onto stack.', 'Executes Interrupt Service Routine (ISR) → pops saved state from stack → resumes program.'] },

  // cs-4-2
  { id: 'cs-4-2-fc1', subtopicId: 'cs-4-2', front: 'Why are high-level languages preferred for most software projects?', backBullets: ['English-like syntax is easier to read, write, debug, and maintain.', 'Machine-independent (portable) across different CPU architectures.'] },
  { id: 'cs-4-2-fc2', subtopicId: 'cs-4-2', front: 'When is Assembly language chosen over a high-level language?', backBullets: ['Direct manipulation of CPU registers, I/O ports, and specialised embedded hardware.', 'Produces compact, deterministic, ultra-fast machine code via a 1-to-1 Assembler.'] },
  { id: 'cs-4-2-fc3', subtopicId: 'cs-4-2', front: 'Compare a Compiler vs an Interpreter.', backBullets: ['Compiler: translates entire file → standalone fast executable + full error list.', 'Interpreter: translates & runs line-by-line → halts at first error (great for debugging), slower at runtime.'] },
  { id: 'cs-4-2-fc4', subtopicId: 'cs-4-2', front: 'Name 5 helpful tools built into an IDE.', backBullets: ['Code editor with syntax highlighting (prettyprinting) & auto-completion.', 'Translator, runtime environment, error diagnostics, breakpoints & single-stepping debugger.'] },
  { id: 'cs-4-2-fc5', subtopicId: 'cs-4-2', front: 'How do breakpoints and variable watch windows aid debugging?', backBullets: ['Breakpoints pause execution at target lines so developers inspect live program state.', 'Single-stepping + watch tables reveal exact values causing logic errors.'] },

  // cs-5-1
  { id: 'cs-5-1-fc1', subtopicId: 'cs-5-1', front: 'How does the Internet differ from the World Wide Web (WWW)?', backBullets: ['Internet = global physical infrastructure of networks, routers, and cables.', 'WWW = collection of interlinked web pages accessed via browsers over HTTP/HTTPS.'] },
  { id: 'cs-5-1-fc2', subtopicId: 'cs-5-1', front: 'Trace how a web browser locates and displays a webpage using DNS.', backBullets: ['Browser sends domain name from URL to DNS server → receives server’s IP address.', 'Browser sends HTTP/HTTPS GET to that IP → receives HTML/CSS/JS → renders page.'] },
  { id: 'cs-5-1-fc3', subtopicId: 'cs-5-1', front: 'How does HTTPS improve security over HTTP?', backBullets: ['Encrypts web traffic with TLS/SSL so intercepted packets are unreadable.', 'Uses CA-signed Digital Certificates to prove the web server’s authentic identity.'] },
  { id: 'cs-5-1-fc4', subtopicId: 'cs-5-1', front: 'Contrast Session Cookies and Persistent Cookies.', backBullets: ['Session cookies: stored in RAM only while browser is open (carts, active logins).', 'Persistent cookies: saved on disk until expiry (preferences, "Remember me", ad tracking).'] },
  { id: 'cs-5-1-fc5', subtopicId: 'cs-5-1', front: 'Explain how cryptographic hashes protect a Blockchain ledger from tampering.', backBullets: ['Every block stores transaction data, timestamp, its own hash, and the previous block’s hash.', 'Altering any past block changes its hash, breaking links across every distributed node.'] },

  // cs-5-2
  { id: 'cs-5-2-fc1', subtopicId: 'cs-5-2', front: 'Explain how a Distributed Denial of Service (DDoS) attack works.', backBullets: ['Attacker commands a botnet of malware-infected zombie computers.', 'All zombies flood the target server simultaneously, exhausting bandwidth/CPU so real users are blocked.'] },
  { id: 'cs-5-2-fc2', subtopicId: 'cs-5-2', front: 'What is SQL Injection and how is it prevented?', backBullets: ['Typing crafted SQL syntax (e.g. `\' OR 1=1 --`) into unvalidated form inputs to leak/alter database tables.', 'Prevented by strict input validation and parameterised queries.'] },
  { id: 'cs-5-2-fc3', subtopicId: 'cs-5-2', front: 'Contrast Virus, Worm, Trojan, Spyware, and Ransomware.', backBullets: ['Virus attaches to host file; Worm self-replicates standalone; Trojan disguises as valid app.', 'Spyware covertly records keystrokes; Ransomware encrypts user files for extortion.'] },
  { id: 'cs-5-2-fc4', subtopicId: 'cs-5-2', front: 'Contrast Phishing vs Pharming.', backBullets: ['Phishing: deceptive emails/texts tricking victims into clicking fake links.', 'Pharming: DNS/hosts tampering redirecting even genuine typed URLs to fraudulent clones.'] },
  { id: 'cs-5-2-fc5', subtopicId: 'cs-5-2', front: 'Compare the roles of a Firewall and a Proxy Server.', backBullets: ['Firewall: inspects incoming/outgoing packets against rules to block unauthorised access.', 'Proxy: intermediary hiding internal client IPs, filtering URLs, and caching web content.'] },

  // cs-6-1
  { id: 'cs-6-1-fc1', subtopicId: 'cs-6-1', front: 'Name the 3 hardware components of every automated system.', backBullets: ['Sensors (capture physical inputs via ADC), Microprocessor (compares against preset rules).', 'Actuators (execute physical movement such as motors, valves, heaters, alarms).'] },
  { id: 'cs-6-1-fc2', subtopicId: 'cs-6-1', front: 'List the 3 mandatory characteristics of a robot in Cambridge 0478.', backBullets: ['1. Physical mechanical structure/frame.', '2. Electrical components (sensors, microprocessor, actuators). 3. Programmable.'] },
  { id: 'cs-6-1-fc3', subtopicId: 'cs-6-1', front: 'Contrast Independent (Autonomous) vs Dependent robots.', backBullets: ['Independent: sense environment & operate autonomously (Mars rover, warehouse AGV).', 'Dependent: guided continuously by a human operator (surgical Da Vinci arm).'] },
  { id: 'cs-6-1-fc4', subtopicId: 'cs-6-1', front: 'Give 3 advantages of industrial robotics.', backBullets: ['24/7 operation without fatigue and consistent sub-millimetre precision.', 'Protects human workers from hazardous, toxic, or extreme environments.'] },
  { id: 'cs-6-1-fc5', subtopicId: 'cs-6-1', front: 'Give 2 major drawbacks of widespread factory automation.', backBullets: ['High initial capital expenditure and specialist maintenance costs.', 'Job displacement / deskilling of routine manual workers.'] },

  // cs-6-2
  { id: 'cs-6-2-fc1', subtopicId: 'cs-6-2', front: 'What are the 3 defining abilities of an Artificial Intelligence system?', backBullets: ['1. Collecting data & storing rules. 2. Reasoning logically to reach conclusions.', '3. Learning and adapting its behaviour from new data and feedback.'] },
  { id: 'cs-6-2-fc2', subtopicId: 'cs-6-2', front: 'List the 4 main components of an Expert System.', backBullets: ['User Interface (questions/outputs) and Inference Engine (reasoning brain).', 'Knowledge Base (domain facts) and Rule Base (IF–THEN rules).'] },
  { id: 'cs-6-2-fc3', subtopicId: 'cs-6-2', front: 'What does the Inference Engine do inside an Expert System?', backBullets: ['Searches the Knowledge Base and applies IF–THEN conditions from the Rule Base.', 'Matches user answers to deduce conclusions and generate an explanation trace.'] },
  { id: 'cs-6-2-fc4', subtopicId: 'cs-6-2', front: 'How does Machine Learning differ from an Expert System?', backBullets: ['Expert systems rely on static, human-authored IF–THEN rules.', 'Machine Learning automatically learns statistical patterns from training datasets and adapts over time.'] },
  { id: 'cs-6-2-fc5', subtopicId: 'cs-6-2', front: 'Give 3 everyday applications of Machine Learning.', backBullets: ['Adaptive email spam filters and credit-card fraud detection.', 'Streaming/search engine recommendations and speech/handwriting recognition.'] },
];

export const IGCSE_CS_UNITS_4_6_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'cs-ex-4-1',
    subtopicId: 'cs-4-1',
    number: 10,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A student prints a 30-page report while editing a spreadsheet on a single-core laptop. Halfway through printing, the printer runs out of paper and triggers an interrupt.',
    diagram: 'compiler-pipeline-os',
    parts: [
      {
        id: 'cs-ex-4-1-a',
        label: '(a)',
        prompt: 'Explain step-by-step how the CPU handles the printer’s hardware interrupt and later resumes the spreadsheet. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The CPU finishes its current FDE cycle, checks interrupt priority, saves the current Program Counter and register values onto the stack, executes the printer Interrupt Service Routine (ISR) to alert the user, and then restores the saved registers to resume the spreadsheet.',
          markPoints: [
            { id: 'mp1', markDescription: 'Completes current FDE cycle and saves PC/registers onto stack', requiredKeywordGroups: [['fde', 'current', 'cycle'], ['save', 'stack', 'register', 'pc']] },
            { id: 'mp2', markDescription: 'Executes the Interrupt Service Routine (ISR)', requiredKeywordGroups: [['isr', 'interrupt service routine']] },
            { id: 'mp3', markDescription: 'Restores saved registers and resumes original task', requiredKeywordGroups: [['restore', 'pop', 'resume']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-4-2',
    subtopicId: 'cs-4-2',
    number: 11,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A software studio is building a commercial physics game in a high-level language using an IDE. They debate using an interpreter during coding and a compiler before release.',
    parts: [
      {
        id: 'cs-ex-4-2-a',
        label: '(a)',
        prompt: 'Explain why using an interpreter during development and a compiler for final release is an effective strategy. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'During development an interpreter executes line by line and halts immediately at the first syntax error for rapid debugging. For release, a compiler translates the whole program into a standalone executable that runs much faster with no translator needed and protects the source code.',
          markPoints: [
            { id: 'mp1', markDescription: 'Interpreter runs line-by-line and stops at first error for easy debugging', requiredKeywordGroups: [['line', 'first error', 'debug']] },
            { id: 'mp2', markDescription: 'Compiler produces standalone executable needing no translator', requiredKeywordGroups: [['standalone', 'executable', 'no translator']] },
            { id: 'mp3', markDescription: 'Compiled executable runs much faster', requiredKeywordGroups: [['fast', 'faster', 'speed', 'quicker']] },
            { id: 'mp4', markDescription: 'Source code is hidden/protected from end users', requiredKeywordGroups: [['source code', 'protect', 'hidden']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-5-1',
    subtopicId: 'cs-5-1',
    number: 12,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: An online retailer migrates its checkout portal from HTTP to HTTPS and explores blockchain technology to verify luxury handbag authenticity.',
    parts: [
      {
        id: 'cs-ex-5-1-a',
        label: '(a)',
        prompt: 'Explain how HTTPS uses TLS/SSL and digital certificates to protect customers’ card details at checkout. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The browser checks the server’s digital certificate signed by a trusted Certificate Authority to verify authenticity, uses the server’s public key to establish an encrypted TLS session key, and encrypts all card data so intercepted packets are unreadable.',
          markPoints: [
            { id: 'mp1', markDescription: 'Verifies server identity via Digital Certificate / CA', requiredKeywordGroups: [['certificate', 'authentic', 'authority']] },
            { id: 'mp2', markDescription: 'Establishes TLS/SSL session encryption using public/session keys', requiredKeywordGroups: [['tls', 'ssl', 'session key', 'public key']] },
            { id: 'mp3', markDescription: 'Intercepted card data is encrypted / unreadable', requiredKeywordGroups: [['encrypt', 'unreadable', 'meaningless', 'ciphertext']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-5-2',
    subtopicId: 'cs-5-2',
    number: 13,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A university portal suffered both an employee clicking a spoofed IT email and an SQL injection attempt on its student search bar.',
    parts: [
      {
        id: 'cs-ex-5-2-a',
        label: '(a)',
        prompt: 'Identify the email attack, explain how SQL injection threatens the portal, and recommend two technical defences. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The spoofed email is a phishing attack. SQL injection inserts malicious SQL syntax into the search bar to extract or delete database records. Defences include two-factor authentication (2FA) to block stolen passwords and strict input validation / parameterised queries plus firewalls.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies phishing attack', requiredKeywordGroups: [['phishing']] },
            { id: 'mp2', markDescription: 'SQL injection submits malicious SQL to access/alter database', requiredKeywordGroups: [['sql'], ['database', 'record', 'extract', 'delete']] },
            { id: 'mp3', markDescription: 'Defence 1: 2FA / biometrics / anti-phishing training', requiredKeywordGroups: [['2fa', 'two-factor', 'biometric', 'training']] },
            { id: 'mp4', markDescription: 'Defence 2: input validation / parameterised queries / firewall / access levels', requiredKeywordGroups: [['validation', 'parameter', 'firewall', 'access level']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-6-1',
    subtopicId: 'cs-6-1',
    number: 14,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A modern logistics warehouse deploys autonomous picking robots alongside conveyor barcode scanners to fulfil 24-hour orders.',
    parts: [
      {
        id: 'cs-ex-6-1-a',
        label: '(a)',
        prompt: 'Explain why these warehouse pickers qualify as independent robots and evaluate one advantage and one drawback for the company. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'They have a mechanical frame, electrical sensors/microprocessor/actuators, and are programmable to navigate autonomously without direct human control. One advantage is continuous 24/7 accurate picking without fatigue; one drawback is high upfront purchase and specialist maintenance costs.',
          markPoints: [
            { id: 'mp1', markDescription: 'Mentions mechanical structure, electrical sensors/actuators, and programmability', requiredKeywordGroups: [['mechanical', 'sensor', 'actuator', 'programmable']] },
            { id: 'mp2', markDescription: 'Autonomous / operates without continuous human control', requiredKeywordGroups: [['autonom', 'without human', 'independent']] },
            { id: 'mp3', markDescription: 'Valid advantage (24/7, accuracy, speed, safety)', requiredKeywordGroups: [['24/7', 'fatigue', 'accura', 'faster', 'safe']] },
            { id: 'mp4', markDescription: 'Valid drawback (high initial cost, maintenance, worker displacement)', requiredKeywordGroups: [['cost', 'expensive', 'maintenance', 'unemploy', 'displac']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-6-2',
    subtopicId: 'cs-6-2',
    number: 15,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A mineral exploration firm builds an Expert System to help geologists classify rock samples in remote field camps.',
    parts: [
      {
        id: 'cs-ex-6-2-a',
        label: '(a)',
        prompt: 'Describe how the User Interface, Knowledge Base, Rule Base, and Inference Engine interact when classifying a rock sample. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The User Interface asks questions about rock traits and displays the final classification; the Inference Engine matches user answers against domain facts stored in the Knowledge Base using logical IF–THEN rules from the Rule Base to deduce the rock type.',
          markPoints: [
            { id: 'mp1', markDescription: 'User Interface collects inputs/questions and outputs conclusion', requiredKeywordGroups: [['user interface'], ['question', 'input', 'output', 'display']] },
            { id: 'mp2', markDescription: 'Knowledge Base holds domain facts', requiredKeywordGroups: [['knowledge base'], ['fact']] },
            { id: 'mp3', markDescription: 'Rule Base holds IF–THEN logic rules', requiredKeywordGroups: [['rule base'], ['rule', 'if']] },
            { id: 'mp4', markDescription: 'Inference Engine matches inputs against rules and facts to deduce answer', requiredKeywordGroups: [['inference engine'], ['match', 'deduc', 'apply', 'search']] },
          ],
        },
      },
    ],
  },
];
