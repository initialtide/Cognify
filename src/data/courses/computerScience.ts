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
import {
  IGCSE_CS_UNITS_1_3_EXAM_PRACTICE,
  IGCSE_CS_UNITS_1_3_FLASHCARDS,
  IGCSE_CS_UNITS_1_3_NOTES,
  IGCSE_CS_UNITS_1_3_QUIZZES,
  IGCSE_CS_UNITS_1_3_TOPICS,
} from './cs/igcseUnits1to3';
import {
  IGCSE_CS_UNITS_4_6_EXAM_PRACTICE,
  IGCSE_CS_UNITS_4_6_FLASHCARDS,
  IGCSE_CS_UNITS_4_6_NOTES,
  IGCSE_CS_UNITS_4_6_QUIZZES,
  IGCSE_CS_UNITS_4_6_TOPICS,
} from './cs/igcseUnits4to6';
import {
  IGCSE_CS_UNITS_7_10_EXAM_PRACTICE,
  IGCSE_CS_UNITS_7_10_FLASHCARDS,
  IGCSE_CS_UNITS_7_10_NOTES,
  IGCSE_CS_UNITS_7_10_QUIZZES,
  IGCSE_CS_UNITS_7_10_TOPICS,
} from './cs/igcseUnits7to10';

export const COMPUTER_SCIENCE_TOPICS: TopicDefinition[] = [
  ...IGCSE_CS_UNITS_1_3_TOPICS,
  ...IGCSE_CS_UNITS_4_6_TOPICS,
  ...IGCSE_CS_UNITS_7_10_TOPICS,
];

export const COMPUTER_SCIENCE_NOTES: Record<string, NoteLesson> = {
  ...IGCSE_CS_UNITS_1_3_NOTES,
  ...IGCSE_CS_UNITS_4_6_NOTES,
  ...IGCSE_CS_UNITS_7_10_NOTES,
};

export const COMPUTER_SCIENCE_QUIZZES: QuizQuestion[] = [
  ...IGCSE_CS_UNITS_1_3_QUIZZES,
  ...IGCSE_CS_UNITS_4_6_QUIZZES,
  ...IGCSE_CS_UNITS_7_10_QUIZZES,
];

export const COMPUTER_SCIENCE_FLASHCARDS: FlashcardItem[] = [
  ...IGCSE_CS_UNITS_1_3_FLASHCARDS,
  ...IGCSE_CS_UNITS_4_6_FLASHCARDS,
  ...IGCSE_CS_UNITS_7_10_FLASHCARDS,
];

export const COMPUTER_SCIENCE_EXAM_PRACTICE: ExamQuestionItem[] = [
  ...IGCSE_CS_UNITS_1_3_EXAM_PRACTICE,
  ...IGCSE_CS_UNITS_4_6_EXAM_PRACTICE,
  ...IGCSE_CS_UNITS_7_10_EXAM_PRACTICE,
];

export const COMPUTER_SCIENCE_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-cs-1',
    slug: 'unit-1-data-representation',
    title: 'Unit 1: Data Representation Cheat Sheet',
    topicNumber: 1,
    topicName: 'Data Representation',
    summary: 'Binary, hexadecimal, two’s complement, shifts, ASCII/Unicode, sound, bitmap images, KiB/MiB & RLE compression.',
    accentColor: '#0284C7',
    sections: [
      {
        heading: '1.1–1.3 Core Formulae & Units',
        formula: 'Image (bits) = W × H × Colour Depth  |  Sound (bits) = Rate × Res × Seconds  |  1 KiB = 1024 B',
        points: [
          '1 hex digit = 4 bits (1 nibble); 8-bit unsigned range 0–255; 8-bit two’s complement range −128 to +127 (flip bits + 1).',
          'Logical left shift by n multiplies by 2ⁿ; logical right shift by n integer-divides by 2ⁿ.',
          'Lossless (RLE, PNG, ZIP) restores exact bits (code/text); Lossy (JPEG, MP3) discards imperceptible detail for much smaller sizes.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-2',
    slug: 'unit-2-data-transmission',
    title: 'Unit 2: Data Transmission Cheat Sheet',
    topicNumber: 2,
    topicName: 'Data Transmission',
    summary: 'Packet header/payload/trailer, packet switching, serial vs parallel, USB, parity, checksum, check digit, ARQ & encryption.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: '2.1–2.3 Switching, Errors & Encryption',
        formula: 'Packet = Header (Src/Dest IP + Seq #) + Payload (Data) + Trailer (EOF + CRC)',
        points: [
          'Serial avoids skew over long distances (USB/Ethernet); Parallel suits short internal CPU buses. Full-duplex = both ways simultaneously.',
          'Parity catches odd bit flips (2D parity block locates 1 bit); Check digit catches human entry typos; ARQ uses ACK + Timeout + Resend.',
          'Symmetric = 1 shared key (fast, key-exchange risk); Asymmetric = recipient Public Key encrypts, recipient Private Key decrypts.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-3',
    slug: 'unit-3-hardware',
    title: 'Unit 3: Hardware & CPU Cheat Sheet',
    topicNumber: 3,
    topicName: 'Hardware',
    summary: 'Von Neumann registers, buses, FDE cycle, cache/cores/clock, embedded systems, sensors/ADC, RAM/ROM, HDD/SSD/Optical, virtual memory & MAC/IP.',
    accentColor: '#7C3AED',
    sections: [
      {
        heading: '3.1–3.4 Architecture, Storage & Network Hardware',
        formula: 'FDE: PC → MAR → (Address Bus) → RAM → (Data Bus) → MDR → CIR → PC+1 → CU Decode → ALU/ACC',
        points: [
          'Address bus is unidirectional (CPU → RAM); Data & Control buses are bidirectional. Cache cuts slow RAM trips.',
          'Sensor → ADC → Microprocessor compares preset → Actuator (continuous loop). RAM volatile; ROM non-volatile boot.',
          'MAC = permanent 48-bit hex NIC ID; IPv4 = 32-bit denary; IPv6 = 128-bit hex; Virtual memory swaps inactive pages to SSD/HDD.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-4',
    slug: 'unit-4-software',
    title: 'Unit 4: Software, OS & Translators Cheat Sheet',
    topicNumber: 4,
    topicName: 'Software',
    summary: 'System vs application software, OS functions, firmware, hardware/software interrupts & ISRs, compilers vs interpreters & IDEs.',
    accentColor: '#0D9488',
    sections: [
      {
        heading: '4.1–4.2 OS Interrupts & Translators',
        formula: 'Interrupt Cycle: Finish FDE → Check Priority → Push PC/Regs to Stack → Run ISR → Pop & Resume',
        points: [
          'Firmware (BIOS/UEFI in ROM) boots hardware and loads OS; OS manages memory, multitasking, files, drivers, accounts & UI.',
          'Compiler translates whole HLL file into fast standalone executable + full error list; Interpreter runs line-by-line halting at first error.',
          'IDE tools: syntax highlighting (prettyprinting), auto-complete, runtime environment, breakpoints, single-stepping & variable watch.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-5',
    slug: 'unit-5-internet-cyber-security',
    title: 'Unit 5: Internet & Cyber Security Cheat Sheet',
    topicNumber: 5,
    topicName: 'The Internet & Its Uses',
    summary: 'Internet vs WWW, URLs, DNS, HTTPS/TLS, cookies, blockchain, malware, phishing/pharming, DDoS, SQLi & layered defences.',
    accentColor: '#DC2626',
    sections: [
      {
        heading: '5.1–5.3 Web Protocols, Blockchain & Defences',
        formula: 'URL = Protocol (https://) + Domain (DNS → IP) + Path  |  Blockchain: Hash(Block N) links PrevHash(N−1)',
        points: [
          'Session cookies live in RAM (cleared on exit); Persistent cookies stay on disk until expiry. HTTPS validates CA Digital Certificates.',
          'Phishing = bogus email link; Pharming = DNS/hosts hijack redirecting even real URLs; DDoS = botnet flooding; SQLi = malicious SQL input.',
          'Defences: 2FA, biometrics, access levels, firewalls (packet filtering), proxy servers (IP hiding/caching), patching & offline backups.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-6',
    slug: 'unit-6-automated-emerging-tech',
    title: 'Unit 6: Automated Systems, Robotics & AI Cheat Sheet',
    topicNumber: 6,
    topicName: 'Automated & Emerging Technologies',
    summary: 'Automated sensor loops, 3 characteristics of robots, independent vs dependent robots, Expert Systems & Machine Learning.',
    accentColor: '#059669',
    sections: [
      {
        heading: '6.1–6.3 Robotics, Expert Systems & ML',
        formula: 'Expert System = User Interface + Inference Engine + Knowledge Base (Facts) + Rule Base (IF–THEN)',
        points: [
          'Robots MUST have: (1) Mechanical body, (2) Electrical components (sensors/CPU/actuators), and (3) Programmability.',
          'Independent robots operate autonomously; Dependent robots require live human operator guidance.',
          'Machine Learning adapts automatically from training datasets without static hand-coded rules (watch out for biased training data!).',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-7',
    slug: 'unit-7-algorithm-design',
    title: 'Unit 7: Algorithm Design & Testing Cheat Sheet',
    topicNumber: 7,
    topicName: 'Algorithm Design & Problem-Solving',
    summary: 'SDLC, abstraction, decomposition, structure diagrams, Linear Search, Bubble Sort, validation/verification, test data & trace tables.',
    accentColor: '#D97706',
    sections: [
      {
        heading: '7.1–7.3 Algorithms, Validation & Testing',
        formula: 'Bubble Swap: Temp ← A[i]; A[i] ← A[i+1]; A[i+1] ← Temp  |  Init Max/Min ← Array[1]',
        points: [
          'SDLC = Analysis → Design → Coding → Testing. Label every Flowchart Decision diamond arrow Yes / No!',
          'Validation (Range, Length, Type, Presence, Format, Check digit) checks sensibility; Verification (Double entry, Visual) checks copying accuracy.',
          'Test data: Normal (typical), Abnormal (invalid), Extreme (exact limits 1 & 100), Boundary (edge pairs 0 & 1, 100 & 101).',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-8',
    slug: 'unit-8-programming',
    title: 'Unit 8: Programming, Arrays & Files Cheat Sheet',
    topicNumber: 8,
    topicName: 'Programming',
    summary: 'Data types, FOR/WHILE/REPEAT, DIV/MOD, string handling, procedures/functions, local/global scope, 1D/2D arrays & text files.',
    accentColor: '#4F46E5',
    sections: [
      {
        heading: '8.1–8.3 Core Cambridge 0478 Pseudocode',
        formula: '17 DIV 5 = 3  |  17 MOD 5 = 2  |  SUBSTRING(s, 1, 4) (1-indexed!)  |  OPENFILE → READ/WRITE → CLOSEFILE',
        points: [
          'WHILE runs 0+ times (pre-condition); REPEAT...UNTIL runs 1+ times (post-condition). Store phone numbers as STRING!',
          'FUNCTION returns a value via RETURN; PROCEDURE runs via CALL with no return. Prefer local variables to avoid global side effects.',
          '2D Arrays index [Row, Col] traversed via nested FOR loops; always close persistent files with CLOSEFILE.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-9',
    slug: 'unit-9-databases-sql',
    title: 'Unit 9: Databases & SQL Cheat Sheet',
    topicNumber: 9,
    topicName: 'Databases',
    summary: 'Single-table schemas, Primary Keys, field data types, SQL SELECT/FROM/WHERE/ORDER BY, SUM() & COUNT().',
    accentColor: '#0891B2',
    sections: [
      {
        heading: '9.1 SQL Query Blueprint',
        formula: "SELECT Field1, Field2 FROM TableName WHERE Cond1 AND Cond2 ORDER BY Field1 ASC/DESC;",
        points: [
          'Primary Key must uniquely identify every record with zero duplicates or nulls (never Surname or DOB).',
          'SUM(Field) totals numeric values across matching rows; COUNT(Field) tallies the number of matching rows.',
          'Wrap text criteria in quotes (\'London\'); keep phone numbers/postcodes as Text/Alphanumeric.',
        ],
      },
    ],
  },
  {
    id: 'cs-cs-10',
    slug: 'unit-10-boolean-logic',
    title: 'Unit 10: Boolean Logic Gates & Circuits Cheat Sheet',
    topicNumber: 10,
    topicName: 'Boolean Logic',
    summary: 'NOT, AND, OR, NAND, NOR, XOR symbols, 2- & 3-input truth tables, and building circuits from problem statements.',
    accentColor: '#9333EA',
    sections: [
      {
        heading: '10.1–10.2 Six Gates & Truth Tables',
        formula: 'AND: 0001 | OR: 0111 | NAND: 1110 | NOR: 1000 | XOR: 0110  (3 inputs = 2³ = 8 rows)',
        points: [
          'XOR outputs 1 strictly when inputs are DIFFERENT (1 XOR 1 = 0). Never forget inversion circles on NOT, NAND, and NOR!',
          'Truth table → Expression: take every X = 1 row, AND its inputs (0 gets NOT), then OR rows together.',
          'Precedence: Brackets () → NOT → AND → OR. Always verify drawn circuits with 2 sample rows.',
        ],
      },
    ],
  },
];

export const COMPUTER_SCIENCE_PAST_PAPERS: PastPaperDoc[] = [
  { id: 'cs-pp-2024-p1', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Computer Science (0478) Paper 1 (Computer Systems) — May/June 2024', tier: 'Core', series: 'May/June', paperCode: '0478/12', durationMinutes: 105, totalMarks: 75, sampleQuestions: [{ number: 'Q1', question: 'Convert −42 to 8-bit two’s complement and calculate a 1024×1024 24-bit image size in MiB.', marks: 6, markScheme: ['11010110; 3 MiB.'] }, { number: 'Q2', question: 'Trace the Fetch-Decode-Execute cycle naming PC, MAR, MDR, CIR, and buses.', marks: 6, markScheme: ['PC→MAR→address bus→RAM→data bus→MDR→CIR→PC+1→CU decode→ALU execute.'] }] },
  { id: 'cs-pp-2024-p2', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Computer Science (0478) Paper 2 (Algorithms, Programming & Logic) — May/June 2024', tier: 'Core', series: 'May/June', paperCode: '0478/22', durationMinutes: 105, totalMarks: 75, sampleQuestions: [{ number: 'Q1', question: 'Complete a trace table for a bubble sort algorithm and distinguish validation from verification.', marks: 6, markScheme: ['Row-by-row variable trace; validation = reasonable, verification = copied accurately.'] }, { number: 'Q2', question: 'Write an SQL SELECT...WHERE...ORDER BY query and complete an 8-row truth table.', marks: 6, markScheme: ['Correct SQL syntax; 000–111 binary input order with intermediate columns.'] }] },
  { id: 'cs-pp-2023n-p1', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Computer Science (0478) Paper 1 — Oct/Nov 2023', tier: 'Core', series: 'Oct/Nov', paperCode: '0478/12', durationMinutes: 105, totalMarks: 75, sampleQuestions: [{ number: 'Q1', question: 'Explain packet switching, ARQ, and asymmetric encryption.', marks: 6, markScheme: ['Independent routing + sequence reassembly; acknowledgements/timeouts; public encrypts, private decrypts.'] }] },
  { id: 'cs-pp-2023n-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Computer Science (0478) Paper 2 — Oct/Nov 2023', tier: 'Core', series: 'Oct/Nov', paperCode: '0478/22', durationMinutes: 105, totalMarks: 75, sampleQuestions: [{ number: 'Q1', question: 'Design a linear search procedure and select boundary/extreme test data.', marks: 6, markScheme: ['Loop array comparing target; boundary pairs valid limit + immediate invalid neighbour.'] }] },
  { id: 'cs-pp-2023-p1', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Computer Science (0478) Paper 1 — May/June 2023', tier: 'Core', series: 'May/June', paperCode: '0478/12', durationMinutes: 105, totalMarks: 75, sampleQuestions: [{ number: 'Q1', question: 'Compare compilers vs interpreters and explain CPU interrupt handling.', marks: 6, markScheme: ['Whole executable vs line-by-line; finish cycle → save state → ISR → restore.'] }] },
  { id: 'cs-pp-2023-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Computer Science (0478) Paper 2 — May/June 2023', tier: 'Core', series: 'May/June', paperCode: '0478/22', durationMinutes: 105, totalMarks: 75, sampleQuestions: [{ number: 'Q1', question: 'Draw a logic circuit for ((NOT A) AND B) OR C and choose a primary key for a table.', marks: 6, markScheme: ['Correct gate symbols; unique non-null ID field as primary key.'] }] },
];

export const COMPUTER_SCIENCE_KEY_TERMS: KeyTermEntry[] = [
  // Unit 1
  { id: 'cs-kt-1', term: 'Binary (Base-2)', definition: 'Number system using only 0 and 1 matching two transistor states.', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-2', term: 'Hexadecimal (Base-16)', definition: 'Compact base-16 notation (0–9, A–F) representing 4 binary bits per digit.', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-3', term: 'Nibble', definition: 'Group of 4 binary bits (half a byte) mapped to one hexadecimal digit.', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-4', term: 'Overflow Error', definition: 'Condition when an unsigned sum exceeds the register bit capacity (e.g. > 255 in 8 bits).', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-5', term: 'Logical Binary Shift', definition: 'Shifting bits left (×2ⁿ) or right (÷2ⁿ) while filling vacated positions with 0s.', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-6', term: 'Two’s Complement', definition: 'Signed binary encoding with negative MSB weight (−128 in 8 bits).', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-7', term: 'ASCII', definition: '7-bit character set encoding 128 English characters, digits, and control codes.', topicNumber: 1, subtopicId: 'cs-1-2', subtopicCode: '1.2' },
  { id: 'cs-kt-8', term: 'Unicode', definition: 'Universal 16/32-bit character encoding supporting all global scripts and emoji.', topicNumber: 1, subtopicId: 'cs-1-2', subtopicCode: '1.2' },
  { id: 'cs-kt-9', term: 'Sample Rate (Hz)', definition: 'Number of sound wave amplitude measurements recorded per second.', topicNumber: 1, subtopicId: 'cs-1-2', subtopicCode: '1.2' },
  { id: 'cs-kt-10', term: 'Sample Resolution', definition: 'Number of bits used to store each digital sound amplitude sample.', topicNumber: 1, subtopicId: 'cs-1-2', subtopicCode: '1.2' },
  { id: 'cs-kt-11', term: 'Colour Depth', definition: 'Number of bits allocated per pixel in a bitmap image (2ⁿ colours).', topicNumber: 1, subtopicId: 'cs-1-2', subtopicCode: '1.2' },
  { id: 'cs-kt-12', term: 'Kibibyte (KiB)', definition: 'IEC binary storage unit equal to exactly 1,024 (2¹⁰) bytes.', topicNumber: 1, subtopicId: 'cs-1-3', subtopicCode: '1.3' },
  { id: 'cs-kt-13', term: 'Lossless Compression', definition: 'Reversible compression restoring the exact original bits (e.g. RLE, ZIP, PNG).', topicNumber: 1, subtopicId: 'cs-1-3', subtopicCode: '1.3' },
  { id: 'cs-kt-14', term: 'Lossy Compression', definition: 'Irreversible compression discarding imperceptible detail for much smaller media files (JPEG/MP3).', topicNumber: 1, subtopicId: 'cs-1-3', subtopicCode: '1.3' },
  { id: 'cs-kt-15', term: 'Run-Length Encoding (RLE)', definition: 'Lossless method replacing consecutive identical values with count–value pairs.', topicNumber: 1, subtopicId: 'cs-1-3', subtopicCode: '1.3' },

  // Unit 2
  { id: 'cs-kt-16', term: 'Packet Header', definition: 'Packet metadata storing source IP, destination IP, and packet sequence number.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-17', term: 'Payload', definition: 'Actual portion of user data carried inside a network packet.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-18', term: 'Packet Switching', definition: 'Routing numbered packets independently across routers and reassembling them in order.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-19', term: 'Serial vs Parallel Transmission', definition: '1 bit at a time on 1 wire (no skew) vs multiple simultaneous wires (short buses).', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-20', term: 'Data Skew', definition: 'Timing desynchronisation when parallel bits arrive at different instants over long cables.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-21', term: 'Full-Duplex', definition: 'Simultaneous two-way data communication over a channel.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-22', term: 'Universal Serial Bus (USB)', definition: 'Plug-and-play serial interface delivering both data and power to peripherals.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-23', term: 'Parity Bit & Parity Block', definition: 'Extra bit ensuring even/odd 1-count; 2D row-column grid locates single flipped bits.', topicNumber: 2, subtopicId: 'cs-2-2', subtopicCode: '2.2' },
  { id: 'cs-kt-24', term: 'Checksum', definition: 'Calculated numeric summary sent with a data block and verified by the receiver.', topicNumber: 2, subtopicId: 'cs-2-2', subtopicCode: '2.2' },
  { id: 'cs-kt-25', term: 'Check Digit', definition: 'Validation digit appended to barcodes/ISBNs detecting human data-entry errors.', topicNumber: 2, subtopicId: 'cs-2-2', subtopicCode: '2.2' },
  { id: 'cs-kt-26', term: 'Automatic Repeat Query (ARQ)', definition: 'Error-control protocol using acknowledgements (ACK) and timeouts to resend lost/corrupt frames.', topicNumber: 2, subtopicId: 'cs-2-2', subtopicCode: '2.2' },
  { id: 'cs-kt-27', term: 'Symmetric Encryption', definition: 'Encryption using one identical shared secret key to encrypt and decrypt.', topicNumber: 2, subtopicId: 'cs-2-3', subtopicCode: '2.3' },
  { id: 'cs-kt-28', term: 'Asymmetric Encryption', definition: 'Public-key cryptography encrypting with recipient’s public key and decrypting with secret private key.', topicNumber: 2, subtopicId: 'cs-2-3', subtopicCode: '2.3' },

  // Unit 3
  { id: 'cs-kt-29', term: 'Von Neumann Architecture', definition: 'Stored-program design keeping instructions and data in shared main memory.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-30', term: 'Program Counter (PC)', definition: 'CPU register storing the memory address of the next instruction to fetch.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-31', term: 'MAR & MDR', definition: 'Memory Address Register and Memory Data Register interfacing CPU with main RAM.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-32', term: 'Current Instruction Register (CIR)', definition: 'CPU register holding the binary instruction currently being decoded by the CU.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-33', term: 'Cache Memory', definition: 'Ultra-fast SRAM near the CPU storing frequently used data and instructions.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-34', term: 'Embedded System', definition: 'Dedicated microcontroller built into a larger machine for one specialised task.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-35', term: 'Analogue-to-Digital Converter (ADC)', definition: 'Circuit converting continuous analogue sensor output into digital binary values.', topicNumber: 3, subtopicId: 'cs-3-2', subtopicCode: '3.2' },
  { id: 'cs-kt-36', term: 'Actuator', definition: 'Output hardware (motor, valve, relay) converting electrical signals into physical action.', topicNumber: 3, subtopicId: 'cs-3-2', subtopicCode: '3.2' },
  { id: 'cs-kt-37', term: 'MAC Address', definition: 'Permanent 48-bit hexadecimal physical address burned into a Network Interface Card.', topicNumber: 3, subtopicId: 'cs-3-2', subtopicCode: '3.2' },
  { id: 'cs-kt-38', term: 'IPv4 / IPv6 Address', definition: 'Logical 32-bit denary (IPv4) or 128-bit hex (IPv6) address identifying a host on a network.', topicNumber: 3, subtopicId: 'cs-3-2', subtopicCode: '3.2' },
  { id: 'cs-kt-39', term: 'RAM & ROM', definition: 'Volatile read/write working memory vs non-volatile read-only startup firmware memory.', topicNumber: 3, subtopicId: 'cs-3-3', subtopicCode: '3.3' },
  { id: 'cs-kt-40', term: 'Solid-State Drive (SSD)', definition: 'NAND flash storage with zero moving parts offering rapid shock-resistant access.', topicNumber: 3, subtopicId: 'cs-3-3', subtopicCode: '3.3' },
  { id: 'cs-kt-41', term: 'Virtual Memory', definition: 'Secondary storage space used by the OS as RAM overflow via page swapping.', topicNumber: 3, subtopicId: 'cs-3-3', subtopicCode: '3.3' },
  { id: 'cs-kt-42', term: 'Cloud Storage', definition: 'Off-site data storage hosted on remote internet-connected server farms.', topicNumber: 3, subtopicId: 'cs-3-3', subtopicCode: '3.3' },

  // Unit 4
  { id: 'cs-kt-43', term: 'Firmware (BIOS/UEFI)', definition: 'Permanent ROM software bootstrapping hardware and loading the OS at power-on.', topicNumber: 4, subtopicId: 'cs-4-1', subtopicCode: '4.1' },
  { id: 'cs-kt-44', term: 'Operating System (OS)', definition: 'Core system software managing memory, multitasking, files, drivers, accounts, and UI.', topicNumber: 4, subtopicId: 'cs-4-1', subtopicCode: '4.1' },
  { id: 'cs-kt-45', term: 'Interrupt & ISR', definition: 'Hardware/software signal pausing the CPU to run a prioritised Interrupt Service Routine.', topicNumber: 4, subtopicId: 'cs-4-1', subtopicCode: '4.1' },
  { id: 'cs-kt-46', term: 'High-Level Language', definition: 'Portable, English-like programming language independent of specific CPU hardware.', topicNumber: 4, subtopicId: 'cs-4-2', subtopicCode: '4.2' },
  { id: 'cs-kt-47', term: 'Assembly Language', definition: 'Low-level mnemonic language translated 1-to-1 into machine code by an assembler.', topicNumber: 4, subtopicId: 'cs-4-2', subtopicCode: '4.2' },
  { id: 'cs-kt-48', term: 'Compiler vs Interpreter', definition: 'Translates whole file into standalone fast executable vs line-by-line execution for debugging.', topicNumber: 4, subtopicId: 'cs-4-2', subtopicCode: '4.2' },
  { id: 'cs-kt-49', term: 'IDE (Integrated Development Environment)', definition: 'Programming workspace uniting editor, prettyprinting, translator, runtime, and breakpoints.', topicNumber: 4, subtopicId: 'cs-4-2', subtopicCode: '4.2' },

  // Unit 5
  { id: 'cs-kt-50', term: 'Domain Name System (DNS)', definition: 'Directory servers resolving human-readable domain names into IP addresses.', topicNumber: 5, subtopicId: 'cs-5-1', subtopicCode: '5.1' },
  { id: 'cs-kt-51', term: 'HTTPS (TLS/SSL)', definition: 'Encrypted web transfer verified by CA-issued Digital Certificates.', topicNumber: 5, subtopicId: 'cs-5-1', subtopicCode: '5.1' },
  { id: 'cs-kt-52', term: 'Session vs Persistent Cookie', definition: 'Temporary RAM browser token cleared on exit vs disk-saved preference/tracking token.', topicNumber: 5, subtopicId: 'cs-5-1', subtopicCode: '5.1' },
  { id: 'cs-kt-53', term: 'Blockchain', definition: 'Decentralised immutable digital ledger chaining blocks via cryptographic hashes.', topicNumber: 5, subtopicId: 'cs-5-1', subtopicCode: '5.1' },
  { id: 'cs-kt-54', term: 'DDoS Attack', definition: 'Flooding a server using a botnet of zombie devices to deny legitimate access.', topicNumber: 5, subtopicId: 'cs-5-2', subtopicCode: '5.2' },
  { id: 'cs-kt-55', term: 'SQL Injection', definition: 'Injecting crafted SQL syntax into form inputs to extract or corrupt database tables.', topicNumber: 5, subtopicId: 'cs-5-2', subtopicCode: '5.2' },
  { id: 'cs-kt-56', term: 'Phishing vs Pharming', definition: 'Fraudulent link-bait emails vs DNS/hosts hijacking redirecting legitimate URLs.', topicNumber: 5, subtopicId: 'cs-5-2', subtopicCode: '5.2' },
  { id: 'cs-kt-57', term: 'Ransomware', definition: 'Malware encrypting victim files and demanding payment for the decryption key.', topicNumber: 5, subtopicId: 'cs-5-2', subtopicCode: '5.2' },
  { id: 'cs-kt-58', term: 'Firewall & Proxy Server', definition: 'Rule-based packet filter vs intermediary hiding internal IPs and caching/filtering web requests.', topicNumber: 5, subtopicId: 'cs-5-2', subtopicCode: '5.2' },

  // Unit 6
  { id: 'cs-kt-59', term: 'Automated System', definition: 'Sensor, microprocessor, and actuator feedback loop running without human intervention.', topicNumber: 6, subtopicId: 'cs-6-1', subtopicCode: '6.1' },
  { id: 'cs-kt-60', term: 'Independent vs Dependent Robot', definition: 'Autonomous sensing/acting robot vs teleoperated robot guided by a human.', topicNumber: 6, subtopicId: 'cs-6-1', subtopicCode: '6.1' },
  { id: 'cs-kt-61', term: 'Expert System', definition: 'AI specialist system combining UI, Inference Engine, Knowledge Base, and Rule Base.', topicNumber: 6, subtopicId: 'cs-6-2', subtopicCode: '6.2' },
  { id: 'cs-kt-62', term: 'Inference Engine', definition: 'Expert system module applying Rule Base logic to Knowledge Base facts.', topicNumber: 6, subtopicId: 'cs-6-2', subtopicCode: '6.2' },
  { id: 'cs-kt-63', term: 'Machine Learning (ML)', definition: 'AI subset learning statistical patterns from training datasets and adapting automatically.', topicNumber: 6, subtopicId: 'cs-6-2', subtopicCode: '6.2' },

  // Unit 7
  { id: 'cs-kt-64', term: 'Abstraction & Decomposition', definition: 'Removing irrelevant detail vs splitting a complex problem into manageable sub-systems.', topicNumber: 7, subtopicId: 'cs-7-1', subtopicCode: '7.1' },
  { id: 'cs-kt-65', term: 'Structure Diagram', definition: 'Top-down hierarchical chart mapping a program into modular sub-routines.', topicNumber: 7, subtopicId: 'cs-7-1', subtopicCode: '7.1' },
  { id: 'cs-kt-66', term: 'Linear Search', definition: 'Checking unsorted array items sequentially from index 1 until found or exhausted.', topicNumber: 7, subtopicId: 'cs-7-2', subtopicCode: '7.2' },
  { id: 'cs-kt-67', term: 'Bubble Sort', definition: 'Repeatedly comparing and swapping adjacent elements until a full pass has zero swaps.', topicNumber: 7, subtopicId: 'cs-7-2', subtopicCode: '7.2' },
  { id: 'cs-kt-68', term: 'Validation vs Verification', definition: 'Automated rule check for sensibility vs checking transcription matches original source.', topicNumber: 7, subtopicId: 'cs-7-3', subtopicCode: '7.3' },
  { id: 'cs-kt-69', term: 'Boundary & Extreme Test Data', definition: 'Edge pairs straddling a limit (0 & 1) vs exact valid limits (1 & 100).', topicNumber: 7, subtopicId: 'cs-7-3', subtopicCode: '7.3' },
  { id: 'cs-kt-70', term: 'Trace Table', definition: 'Dry-run grid tracking variable changes and outputs line by line to spot logic errors.', topicNumber: 7, subtopicId: 'cs-7-3', subtopicCode: '7.3' },

  // Unit 8
  { id: 'cs-kt-71', term: 'DIV & MOD Operators', definition: 'Integer division quotient (`17 DIV 5 = 3`) and integer remainder (`17 MOD 5 = 2`).', topicNumber: 8, subtopicId: 'cs-8-1', subtopicCode: '8.1' },
  { id: 'cs-kt-72', term: 'Procedure vs Function', definition: 'Subroutine executing actions via CALL vs subroutine returning a value via RETURN.', topicNumber: 8, subtopicId: 'cs-8-2', subtopicCode: '8.2' },
  { id: 'cs-kt-73', term: 'Local vs Global Variable', definition: 'Subroutine-isolated variable preventing side effects vs program-wide accessible variable.', topicNumber: 8, subtopicId: 'cs-8-2', subtopicCode: '8.2' },
  { id: 'cs-kt-74', term: '1D & 2D Arrays', definition: 'Fixed-size same-type collections indexed by `[i]` or `[Row, Col]`.', topicNumber: 8, subtopicId: 'cs-8-3', subtopicCode: '8.3' },
  { id: 'cs-kt-75', term: 'EOF (End of File)', definition: 'Boolean file-handling check returning TRUE once all lines have been read.', topicNumber: 8, subtopicId: 'cs-8-3', subtopicCode: '8.3' },

  // Unit 9
  { id: 'cs-kt-76', term: 'Primary Key', definition: 'Unique, non-null field identifying every record in a database table.', topicNumber: 9, subtopicId: 'cs-9-1', subtopicCode: '9.1' },
  { id: 'cs-kt-77', term: 'SQL (SELECT / WHERE / ORDER BY)', definition: 'Declarative query clauses retrieving, filtering, and sorting table rows.', topicNumber: 9, subtopicId: 'cs-9-1', subtopicCode: '9.1' },
  { id: 'cs-kt-78', term: 'SQL SUM() & COUNT()', definition: 'Aggregate functions computing a column numeric total vs matching record count.', topicNumber: 9, subtopicId: 'cs-9-1', subtopicCode: '9.1' },

  // Unit 10
  { id: 'cs-kt-79', term: 'XOR Gate (Exclusive OR)', definition: 'Logic gate outputting 1 exclusively when its two binary inputs differ.', topicNumber: 10, subtopicId: 'cs-10-1', subtopicCode: '10.1' },
  { id: 'cs-kt-80', term: 'NAND & NOR Gates', definition: 'Inverted AND (`1,1→0`) and inverted OR (`0,0→1`) compound logic gates.', topicNumber: 10, subtopicId: 'cs-10-1', subtopicCode: '10.1' },
  { id: 'cs-kt-81', term: 'Truth Table', definition: 'Exhaustive `2ⁿ`-row table mapping every binary input state to circuit output X.', topicNumber: 10, subtopicId: 'cs-10-2', subtopicCode: '10.2' },
];
