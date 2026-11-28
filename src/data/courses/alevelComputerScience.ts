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
  ALEVEL_CS_UNITS_1_2_EXAM_PRACTICE,
  ALEVEL_CS_UNITS_1_2_FLASHCARDS,
  ALEVEL_CS_UNITS_1_2_NOTES,
  ALEVEL_CS_UNITS_1_2_QUIZZES,
  ALEVEL_CS_UNITS_1_2_TOPICS,
} from './cs/alevelUnits1to2';
import {
  ALEVEL_CS_UNITS_3_4_EXAM_PRACTICE,
  ALEVEL_CS_UNITS_3_4_FLASHCARDS,
  ALEVEL_CS_UNITS_3_4_NOTES,
  ALEVEL_CS_UNITS_3_4_QUIZZES,
  ALEVEL_CS_UNITS_3_4_TOPICS,
} from './cs/alevelUnits3to4';
import {
  ALEVEL_CS_UNITS_5_6_EXAM_PRACTICE,
  ALEVEL_CS_UNITS_5_6_FLASHCARDS,
  ALEVEL_CS_UNITS_5_6_NOTES,
  ALEVEL_CS_UNITS_5_6_QUIZZES,
  ALEVEL_CS_UNITS_5_6_TOPICS,
} from './cs/alevelUnits5to6';
import {
  ALEVEL_CS_UNITS_7_8_EXAM_PRACTICE,
  ALEVEL_CS_UNITS_7_8_FLASHCARDS,
  ALEVEL_CS_UNITS_7_8_NOTES,
  ALEVEL_CS_UNITS_7_8_QUIZZES,
  ALEVEL_CS_UNITS_7_8_TOPICS,
} from './cs/alevelUnits7to8';

export const ALEVEL_CS_TOPICS: TopicDefinition[] = [
  ...ALEVEL_CS_UNITS_1_2_TOPICS,
  ...ALEVEL_CS_UNITS_3_4_TOPICS,
  ...ALEVEL_CS_UNITS_5_6_TOPICS,
  ...ALEVEL_CS_UNITS_7_8_TOPICS,
];

export const ALEVEL_CS_NOTES: Record<string, NoteLesson> = {
  ...ALEVEL_CS_UNITS_1_2_NOTES,
  ...ALEVEL_CS_UNITS_3_4_NOTES,
  ...ALEVEL_CS_UNITS_5_6_NOTES,
  ...ALEVEL_CS_UNITS_7_8_NOTES,
};

export const ALEVEL_CS_QUIZZES: QuizQuestion[] = [
  ...ALEVEL_CS_UNITS_1_2_QUIZZES,
  ...ALEVEL_CS_UNITS_3_4_QUIZZES,
  ...ALEVEL_CS_UNITS_5_6_QUIZZES,
  ...ALEVEL_CS_UNITS_7_8_QUIZZES,
];

export const ALEVEL_CS_FLASHCARDS: FlashcardItem[] = [
  ...ALEVEL_CS_UNITS_1_2_FLASHCARDS,
  ...ALEVEL_CS_UNITS_3_4_FLASHCARDS,
  ...ALEVEL_CS_UNITS_5_6_FLASHCARDS,
  ...ALEVEL_CS_UNITS_7_8_FLASHCARDS,
];

export const ALEVEL_CS_EXAM_PRACTICE: ExamQuestionItem[] = [
  ...ALEVEL_CS_UNITS_1_2_EXAM_PRACTICE,
  ...ALEVEL_CS_UNITS_3_4_EXAM_PRACTICE,
  ...ALEVEL_CS_UNITS_5_6_EXAM_PRACTICE,
  ...ALEVEL_CS_UNITS_7_8_EXAM_PRACTICE,
];

export const ALEVEL_CS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'alcs-cs-1',
    slug: 'unit-1-information-representation-floating-point',
    title: 'Unit 1: BCD, Vector/Bitmap & Normalised Floating-Point Binary',
    topicNumber: 1,
    topicName: 'Information Representation & Multimedia (AS + A2)',
    summary: 'Two’s complement arithmetic, BCD +0110 correction, IEC KiB/MiB vs SI, Vector vs Bitmap, normalised mantissa/exponent, overflow/underflow & LZ dictionary coding.',
    accentColor: '#0284C7',
    sections: [
      {
        heading: '1.1–1.2 Floating-Point & BCD Rules',
        formula: 'Value = Mantissa × 2^Exponent  |  Normalised: 01... (+ve) or 10... (−ve)  |  BCD sum > 9 → +0110',
        points: [
          'Shift mantissa left k places during normalisation → subtract k from Exponent to preserve value.',
          'Fixed word size trade-off: more mantissa bits = higher precision; more exponent bits = wider magnitude range.',
          'Dictionary compression (LZ77/LZW) replaces repeated substrings with compact lookup tokens losslessly.',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-2',
    slug: 'unit-2-networking-switching-bittorrent-tcpip',
    title: 'Unit 2: Networking, CIDR Subnetting, BitTorrent & TCP/IP 4-Layer Stack',
    topicNumber: 2,
    topicName: 'Communication, Networking & Internet Protocols (AS + A2)',
    summary: 'Client–Server vs P2P, Thin/Thick clients, CSMA/CD, CIDR/NAT, Circuit vs Packet switching, TTL, BitTorrent swarm/tracker/seeder/leecher & TCP/IP stack.',
    accentColor: '#2563EB',
    sections: [
      {
        heading: '2.1–2.3 Protocols, Switching & Subnetting',
        formula: 'Usable IPv4 Hosts = 2^(32 − prefix) − 2  |  TCP/IP: Application → Transport → Internet → Link',
        points: [
          'IP addresses remain constant end-to-end across router hops; MAC addresses rewrite at every single hop.',
          'SMTP pushes outgoing email; POP3 downloads/removes (1 device); IMAP keeps mailboxes synced across all devices.',
          'BitTorrent Tracker distributes swarm peer IPs only (never hosts the file); Seeders hold 100%, Leechers still download.',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-3',
    slug: 'unit-3-assembly-risc-adders-flipflops-kmaps',
    title: 'Unit 3: Assembly Modes, RISC/CISC, Pipelining, Adders, Flip-Flops & K-Maps',
    topicNumber: 3,
    topicName: 'Hardware, Processor Architecture & Boolean Logic (AS + A2)',
    summary: 'RTN (`MDR ← [[MAR]]`), Immediate/Direct/Indirect/Indexed/Relative modes, bit masks, RISC vs CISC, Flynn’s SISD–MIMD, VMs, Half/Full Adders, JK Flip-Flops, De Morgan & K-Maps.',
    accentColor: '#7C3AED',
    sections: [
      {
        heading: '3.1–3.3 Architecture & Logic Minimisation',
        formula: 'NOT(A·B) = Ā + B̄  |  NOT(A+B) = Ā·B̄  |  K-Map Gray Headers: 00, 01, 11, 10',
        points: [
          'LDM # (Immediate), LDD (Direct), LDI (Indirect [[addr]]), LDX (Indexed [base + IX]). AND 0 clears, OR 1 sets, XOR 1 toggles.',
          'RISC = fixed-length 1-cycle pipelined instructions; JK Flip-Flop solves SR (1,1) race by cleanly toggling Q.',
          'K-Map groups MUST be powers of 2 (1, 2, 4, 8), as large as possible, overlapping and wrapping edges.',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-4',
    slug: 'unit-4-os-paging-scheduling-compilation-bnf-rpn',
    title: 'Unit 4: OS Paging/Scheduling, Compiler Pipeline, Two-Pass, BNF & RPN',
    topicNumber: 4,
    topicName: 'System Software, Operating Systems & Translation (AS + A2)',
    summary: 'Paging vs Segmentation, Page Faults/LRU/Thrashing, Ready/Running/Blocked, PCB, Round Robin/MLFQ, 4 compiler stages, Two-Pass Assembler, BNF & RPN.',
    accentColor: '#0D9488',
    sections: [
      {
        heading: '4.1–4.2 OS & Translation Essentials',
        formula: 'Compilation: Lexical → Syntax → Code Gen → Optimise  |  Blocked → ALWAYS returns to Ready!',
        points: [
          'Paging = fixed physical frames (internal fragmentation); Segmentation = variable logical blocks (external fragmentation).',
          'Pass 1 of Two-Pass Assembler resolves forward labels into the Symbol Table; Pass 2 outputs binary machine code.',
          'RPN requires zero brackets: Push operands onto stack, on operator pop RIGHT operand `b` then LEFT `a`, push `a op b`.',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-5',
    slug: 'unit-5-cryptography-digital-signatures-3nf-sql',
    title: 'Unit 5: Digital Signatures, TLS, QKD, 3NF Normalisation & SQL (DDL/DML)',
    topicNumber: 5,
    topicName: 'Security, Cryptography & Relational Databases (AS + A2)',
    summary: 'Security vs Privacy vs Integrity, Digital Signatures (SHA + Private Key), CA Certificates, TLS Handshake/Record, Quantum QKD, ERDs, 1NF→2NF→3NF & SQL DDL/DML.',
    accentColor: '#DC2626',
    sections: [
      {
        heading: '5.1–5.2 Cryptography & Relational 3NF',
        formula: 'Digital Signature = Encrypt(Hash(Msg), SenderPrivateKey)  |  3NF: Key, Whole Key, Nothing But Key',
        points: [
          'Digital Signatures guarantee Authentication, Integrity, and Non-repudiation; QKD exposes taps via disturbed photon polarisation.',
          '1NF: atomic + PK; 2NF: no partial composite-key deps; 3NF: no non-key → non-key transitive deps. Resolve M:N with Link Table.',
          'SQL DDL (`CREATE TABLE`, `FOREIGN KEY`, `ALTER TABLE`) vs DML (`INNER JOIN`, `GROUP BY`, `INSERT`, `UPDATE`, `DELETE`).',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-6',
    slug: 'unit-6-sdlc-testing-maintenance-big-o',
    title: 'Unit 6: SDLC Models, Testing, Maintenance, Structure Charts & Big-O',
    topicNumber: 6,
    topicName: 'Software Development & Algorithm Complexity (AS + A2)',
    summary: 'Waterfall, Iterative, RAD, White/Black-Box, Stub, Alpha/Beta testing, Corrective/Adaptive/Perfective maintenance, Structure Charts, STDs & Big-O.',
    accentColor: '#D97706',
    sections: [
      {
        heading: '6.1–6.2 Software Engineering & Asymptotic Growth',
        formula: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)  |  Maintenance: Corrective / Adaptive / Perfective',
        points: [
          'Structure Charts: open circle (`○→`) = Data parameter, filled circle (`●→`) = Boolean flag, loop arc = iteration, diamond = selection.',
          'Corrective fixes bugs; Adaptive handles external law/OS/hardware changes; Perfective improves speed/features.',
          'Intractable exponential `O(2ⁿ)`/`O(n!)` problems require heuristic approximation algorithms for practical runtimes.',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-7',
    slug: 'unit-7-adts-trees-hash-tables-searching-sorting',
    title: 'Unit 7: ADTs (Stacks, Queues, Linked Lists, BST, Hashing) & Sorting',
    topicNumber: 7,
    topicName: 'Abstract Data Types (ADTs), Searching & Sorting (A2 Paper 3 & 4)',
    summary: 'LIFO Stacks, Circular Queues (`MOD`), Linked Lists (`FreeListPointer`), BST Pre/In/Post-Order, Hash Tables (Open Addressing/Chaining), Binary Search, Insertion & Merge Sort.',
    accentColor: '#4F46E5',
    sections: [
      {
        heading: '7.1–7.3 ADT Operations & Sorting Trade-Offs',
        formula: 'Circular Wrap: (Ptr + 1) MOD Max  |  Binary Search: Mid ← (Low + High) DIV 2  |  Merge: O(n log n)',
        points: [
          'Linked List Delete ALWAYS bypasses `Prev.Next ← Curr.Next` AND pushes `Curr` back onto `FreeListPointer`!',
          'BST In-Order yields sorted ascending order; Post-Order yields RPN. Hash tables average `O(1)` lookup via `Key MOD Size`.',
          'Insertion Sort: `O(n²)` worst / `O(n)` best, `O(1)` space; Merge Sort: `O(n log n)` guaranteed, `O(n)` auxiliary RAM.',
        ],
      },
    ],
  },
  {
    id: 'alcs-cs-8',
    slug: 'unit-8-oop-recursion-graphs-dijkstra-astar-ai',
    title: 'Unit 8: OOP, Files/Exceptions, Recursion, Dijkstra, A* & Neural Networks',
    topicNumber: 8,
    topicName: 'Programming Paradigms, Recursion & Artificial Intelligence (A2 Paper 3 & 4)',
    summary: 'Encapsulation, Inheritance, Polymorphism, Containment, Random Files, `TRY/EXCEPT`, Recursion Call Stack, Weighted Graphs, Dijkstra, A* (`f = g + h`), ANNs & Backpropagation.',
    accentColor: '#059669',
    sections: [
      {
        heading: '8.1–8.3 Paradigms, Pathfinding & Deep Learning',
        formula: 'A*: f(n) = g(n) + h(n) (admissible h ≤ true cost)  |  Stack Frame = Return Addr + Params + Locals',
        points: [
          'Encapsulation hides `PRIVATE` attributes behind Get/Set; Inheritance (`IS-A`) vs Containment (`HAS-A`); Polymorphism overrides methods.',
          'Recursion winds stack frames down to Base Case and unwinds LIFO; iteration uses `O(1)` space avoiding Stack Overflow.',
          'Supervised (labelled), Unsupervised (unlabelled clusters), Reinforcement (rewards), Deep Learning (many hidden layers + Backpropagation).',
        ],
      },
    ],
  },
];

export const ALEVEL_CS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'alcs-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge International AS Computer Science (9618) Paper 1 Theory — May/June 2024',
    tier: 'AS-Level',
    series: 'May/June',
    paperCode: '9618/11',
    durationMinutes: 90,
    totalMarks: 75,
    sampleQuestions: [
      { number: 'Q1', question: 'Perform BCD addition with +0110 correction and distinguish vector drawing lists from bitmaps.', marks: 6, markScheme: ['Sum > 9 triggers +0110 carry; vector uses mathematical objects/properties.'] },
      { number: 'Q2', question: 'Normalise an unnormalised table to 3NF and write an SQL INNER JOIN query.', marks: 8, markScheme: ['Eliminate repeating groups (1NF), partial deps (2NF), transitive deps (3NF); INNER JOIN on PK=FK.'] },
    ],
  },
  {
    id: 'alcs-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge International AS Computer Science (9618) Paper 2 Problem-solving — May/June 2024',
    tier: 'AS-Level',
    series: 'May/June',
    paperCode: '9618/21',
    durationMinutes: 120,
    totalMarks: 75,
    sampleQuestions: [
      { number: 'Q1', question: 'Draw a CIE Structure Chart showing data parameters, Boolean flags, and iteration.', marks: 6, markScheme: ['Open circles for data, filled circles for Boolean flags, loop arc for iteration.'] },
      { number: 'Q2', question: 'Classify Corrective, Adaptive, and Perfective maintenance and compare White-Box vs Black-Box testing.', marks: 6, markScheme: ['Bug fixes vs external change vs enhancements; internal paths vs black-box specs.'] },
    ],
  },
  {
    id: 'alcs-pp-2024-p3',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge International A-Level Computer Science (9618) Paper 3 Advanced Theory — May/June 2024',
    tier: 'A-Level',
    series: 'May/June',
    paperCode: '9618/31',
    durationMinutes: 90,
    totalMarks: 75,
    sampleQuestions: [
      { number: 'Q1', question: 'Normalise a two’s-complement floating-point number and simplify a 4-variable Karnaugh Map.', marks: 8, markScheme: ['Shift mantissa left k to 01/10, subtract k from exponent; Gray code 00,01,11,10 wrap groups.'] },
      { number: 'Q2', question: 'Explain Digital Signature verification, TLS Handshake/Record layers, and A* admissible heuristics.', marks: 8, markScheme: ['Hash + sender private key / verify with public key; f(n)=g(n)+h(n) never overestimates.'] },
    ],
  },
  {
    id: 'alcs-pp-2024-p4',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Cambridge International A-Level Computer Science (9618) Paper 4 Practical — May/June 2024',
    tier: 'A-Level',
    series: 'May/June',
    paperCode: '9618/41',
    durationMinutes: 150,
    totalMarks: 75,
    sampleQuestions: [
      { number: 'Q1', question: 'Implement a Circular Queue, Binary Search, and Insertion Sort cleanly with TRY/EXCEPT file loading.', marks: 15, markScheme: ['(Ptr+1) MOD MaxSize; Mid=(Low+High) DIV 2; shift into sorted prefix; TRY/EXCEPT guard.'] },
      { number: 'Q2', question: 'Implement OOP Encapsulation, Inheritance, Polymorphism, and Recursive Binary Tree In-Order traversal.', marks: 15, markScheme: ['PRIVATE attributes, Get/Set, INHERITS + override, Left → Root → Right traversal.'] },
    ],
  },
  {
    id: 'alcs-pp-2023-p3',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge International A-Level Computer Science (9618) Paper 3 Advanced Theory — Oct/Nov 2023',
    tier: 'A-Level',
    series: 'Oct/Nov',
    paperCode: '9618/32',
    durationMinutes: 90,
    totalMarks: 75,
    sampleQuestions: [
      { number: 'Q1', question: 'Compare RISC vs CISC pipelining, Flynn’s SISD–MIMD taxonomy, and OS Paging vs Segmentation.', marks: 8, markScheme: ['Fixed 1-cycle RISC vs microcode CISC; fixed frames vs variable logical segments.'] },
    ],
  },
  {
    id: 'alcs-pp-2023-p4',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Cambridge International A-Level Computer Science (9618) Paper 4 Practical — Oct/Nov 2023',
    tier: 'A-Level',
    series: 'Oct/Nov',
    paperCode: '9618/42',
    durationMinutes: 150,
    totalMarks: 75,
    sampleQuestions: [
      { number: 'Q1', question: 'Implement an array-backed Ordered Linked List with FreeListPointer recycling and Recursive Winding/Unwinding.', marks: 15, markScheme: ['StartPointer + FreeListPointer update on insert/delete; base case + shrinking general case.'] },
    ],
  },
];

export const ALEVEL_CS_KEY_TERMS: KeyTermEntry[] = [
  // Unit 1
  { id: 'alcs-kt-1', term: 'Binary-Coded Decimal (BCD)', definition: '4-bit-per-decimal-digit encoding eliminating base-2 currency rounding errors (`+0110` correction when sum > 9).', topicNumber: 1, subtopicId: 'al-cs-1-1', subtopicCode: '1.1' },
  { id: 'alcs-kt-2', term: 'Signed Overflow', definition: 'Two’s complement addition error occurring when two same-sign numbers yield an opposite sign bit.', topicNumber: 1, subtopicId: 'al-cs-1-1', subtopicCode: '1.1' },
  { id: 'alcs-kt-3', term: 'IEC Binary Prefix (KiB/MiB)', definition: 'Exact powers of 1,024 (`2¹⁰`, `2²⁰`) distinct from decimal SI prefixes (`10³`, `10⁶`).', topicNumber: 1, subtopicId: 'al-cs-1-1', subtopicCode: '1.1' },
  { id: 'alcs-kt-4', term: 'Vector Graphic & Drawing List', definition: 'Scalable mathematical list of geometric drawing objects and properties without pixelation.', topicNumber: 1, subtopicId: 'al-cs-1-1', subtopicCode: '1.1' },
  { id: 'alcs-kt-5', term: 'Mantissa & Exponent', definition: 'Signed fractional precision bits and signed power-of-2 shift factor in floating-point binary.', topicNumber: 1, subtopicId: 'al-cs-1-2', subtopicCode: '1.2' },
  { id: 'alcs-kt-6', term: 'Floating-Point Normalisation', definition: 'Shifting mantissa left `k` to start with `01` (+ve) or `10` (−ve) while subtracting `k` from exponent.', topicNumber: 1, subtopicId: 'al-cs-1-2', subtopicCode: '1.2' },
  { id: 'alcs-kt-7', term: 'Floating-Point Underflow', definition: 'Error when a tiny non-zero magnitude falls closer to zero than the smallest negative exponent.', topicNumber: 1, subtopicId: 'al-cs-1-2', subtopicCode: '1.2' },
  { id: 'alcs-kt-8', term: 'Dictionary Compression (LZ77/LZW)', definition: 'Lossless compression replacing recurring patterns/phrases with compact dictionary index pointers.', topicNumber: 1, subtopicId: 'al-cs-1-2', subtopicCode: '1.2' },

  // Unit 2
  { id: 'alcs-kt-9', term: 'Client–Server vs Peer-to-Peer', definition: 'Centralised server security/backups vs decentralised equal-status resource sharing.', topicNumber: 2, subtopicId: 'al-cs-2-1', subtopicCode: '2.1' },
  { id: 'alcs-kt-10', term: 'Thin vs Thick Client', definition: 'Server-reliant terminal vs locally processing autonomous workstation.', topicNumber: 2, subtopicId: 'al-cs-2-1', subtopicCode: '2.1' },
  { id: 'alcs-kt-11', term: 'CSMA/CD', definition: 'Ethernet contention protocol using collision detection, jam signals, and random exponential backoff.', topicNumber: 2, subtopicId: 'al-cs-2-1', subtopicCode: '2.1' },
  { id: 'alcs-kt-12', term: 'Public vs Private Cloud', definition: 'Multi-tenant shared cloud infrastructure vs dedicated single-organisation private hosting.', topicNumber: 2, subtopicId: 'al-cs-2-1', subtopicCode: '2.1' },
  { id: 'alcs-kt-13', term: 'CIDR Subnet Mask & NAT', definition: 'Separating IPv4 Network/Host IDs (`2^(32−n) − 2` hosts) and mapping private LAN IPs to public IPv4.', topicNumber: 2, subtopicId: 'al-cs-2-1', subtopicCode: '2.1' },
  { id: 'alcs-kt-14', term: 'Circuit Switching', definition: 'Dedicated exclusive physical path held for a session guaranteeing constant bandwidth and order.', topicNumber: 2, subtopicId: 'al-cs-2-2', subtopicCode: '2.2' },
  { id: 'alcs-kt-15', term: 'Routing Table & Hop Count (TTL)', definition: 'Next-hop network forwarding table and hop counter dropping looping packets at zero.', topicNumber: 2, subtopicId: 'al-cs-2-2', subtopicCode: '2.2' },
  { id: 'alcs-kt-16', term: 'BitTorrent Tracker & Swarm', definition: 'Peer-IP directory server (never hosts file) coordinating all active peers sharing pieces.', topicNumber: 2, subtopicId: 'al-cs-2-2', subtopicCode: '2.2' },
  { id: 'alcs-kt-17', term: 'Seeder vs Leecher', definition: 'BitTorrent peer holding 100% of file uploading pieces vs peer still downloading missing pieces.', topicNumber: 2, subtopicId: 'al-cs-2-2', subtopicCode: '2.2' },
  { id: 'alcs-kt-18', term: 'TCP/IP 4-Layer Stack', definition: 'Application, Transport, Internet (Network), and Link layers structuring encapsulated Internet traffic.', topicNumber: 2, subtopicId: 'al-cs-2-3', subtopicCode: '2.3' },
  { id: 'alcs-kt-19', term: 'SMTP / POP3 / IMAP', definition: 'Outgoing mail push (SMTP), single-device download (POP3), and multi-device server sync (IMAP).', topicNumber: 2, subtopicId: 'al-cs-2-3', subtopicCode: '2.3' },
  { id: 'alcs-kt-20', term: 'TCP vs UDP & Socket', definition: 'Reliable ordered connection vs low-latency connectionless datagrams addressed by `IP:Port`.', topicNumber: 2, subtopicId: 'al-cs-2-3', subtopicCode: '2.3' },

  // Unit 3
  { id: 'alcs-kt-21', term: 'Register Transfer Notation (RTN)', definition: 'Symbolic notation detailing register transfers (`MDR ← [[MAR]]`, `CIR ← [MDR]`).', topicNumber: 3, subtopicId: 'al-cs-3-1', subtopicCode: '3.1' },
  { id: 'alcs-kt-22', term: 'Index Register (IX) & Status Register (SR)', definition: 'Array offset register for indexed addressing and ALU flag register (`Z, C, N, V`).', topicNumber: 3, subtopicId: 'al-cs-3-1', subtopicCode: '3.1' },
  { id: 'alcs-kt-23', term: 'Addressing Modes', definition: 'Immediate (`LDM`), Direct (`LDD`), Indirect (`LDI`), Indexed (`LDX`), and Relative operand resolution.', topicNumber: 3, subtopicId: 'al-cs-3-1', subtopicCode: '3.1' },
  { id: 'alcs-kt-24', term: 'Bitwise Masking (AND/OR/XOR)', definition: 'Clearing/isolating bits with AND, setting with OR, and toggling with XOR.', topicNumber: 3, subtopicId: 'al-cs-3-1', subtopicCode: '3.1' },
  { id: 'alcs-kt-25', term: 'Arithmetic vs Cyclic Shift', definition: 'Sign-bit-preserving right shift for signed numbers vs bit-wrapping rotation.', topicNumber: 3, subtopicId: 'al-cs-3-1', subtopicCode: '3.1' },
  { id: 'alcs-kt-26', term: 'RISC vs CISC', definition: 'Fixed-length 1-cycle pipelined instructions vs rich multi-cycle microcoded instruction sets.', topicNumber: 3, subtopicId: 'al-cs-3-2', subtopicCode: '3.2' },
  { id: 'alcs-kt-27', term: 'Instruction Pipelining', definition: 'Overlapping Fetch, Decode, and Execute of consecutive instructions (flushed on branch/interrupt).', topicNumber: 3, subtopicId: 'al-cs-3-2', subtopicCode: '3.2' },
  { id: 'alcs-kt-28', term: 'Flynn’s Taxonomy (SISD–MIMD)', definition: 'Parallel architecture taxonomy classifying single/multiple instruction and data streams.', topicNumber: 3, subtopicId: 'al-cs-3-2', subtopicCode: '3.2' },
  { id: 'alcs-kt-29', term: 'Virtual Machine (Hypervisor)', definition: 'Software emulation hosting isolated Guest OS instances or platform-independent bytecode.', topicNumber: 3, subtopicId: 'al-cs-3-2', subtopicCode: '3.2' },
  { id: 'alcs-kt-30', term: 'Half Adder & Full Adder', definition: 'Combinational binary adders (`XOR`/`AND`); Full Adder chains two Half Adders + OR for `Cin`.', topicNumber: 3, subtopicId: 'al-cs-3-3', subtopicCode: '3.3' },
  { id: 'alcs-kt-31', term: 'SR & JK Flip-Flops', definition: '1-bit sequential memory elements; clocked JK toggles cleanly on `1,1` eliminating SR race state.', topicNumber: 3, subtopicId: 'al-cs-3-3', subtopicCode: '3.3' },
  { id: 'alcs-kt-32', term: 'De Morgan’s Laws', definition: 'Boolean identities `NOT(A·B) = Ā + B̄` and `NOT(A+B) = Ā·B̄`.', topicNumber: 3, subtopicId: 'al-cs-3-3', subtopicCode: '3.3' },
  { id: 'alcs-kt-33', term: 'Karnaugh Map (K-Map) & Gray Code', definition: 'Gray-code (`00, 01, 11, 10`) grid minimising Boolean expressions via power-of-2 wrap groups.', topicNumber: 3, subtopicId: 'al-cs-3-3', subtopicCode: '3.3' },

  // Unit 4
  { id: 'alcs-kt-34', term: 'Paging & Page Table', definition: 'Fixed-size physical RAM frame allocation tracked via logical-to-physical frame mappings.', topicNumber: 4, subtopicId: 'al-cs-4-1', subtopicCode: '4.1' },
  { id: 'alcs-kt-35', term: 'Segmentation', definition: 'Variable-size logical memory allocation matching code/data/stack structure.', topicNumber: 4, subtopicId: 'al-cs-4-1', subtopicCode: '4.1' },
  { id: 'alcs-kt-36', term: 'Page Fault & LRU Replacement', definition: 'Interrupt on unloaded page (`Presence = 0`) resolved by evicting the Least Recently Used RAM frame.', topicNumber: 4, subtopicId: 'al-cs-4-1', subtopicCode: '4.1' },
  { id: 'alcs-kt-37', term: 'Disk Thrashing', definition: 'Severe throughput collapse caused by continuous page swapping when active apps exceed RAM.', topicNumber: 4, subtopicId: 'al-cs-4-1', subtopicCode: '4.1' },
  { id: 'alcs-kt-38', term: 'Process States & PCB', definition: 'Ready, Running, and Blocked process states preserved inside kernel Process Control Blocks.', topicNumber: 4, subtopicId: 'al-cs-4-1', subtopicCode: '4.1' },
  { id: 'alcs-kt-39', term: 'Round Robin / SJF / MLFQ', definition: 'CPU scheduling algorithms balancing fairness, average wait time, and I/O responsiveness.', topicNumber: 4, subtopicId: 'al-cs-4-1', subtopicCode: '4.1' },
  { id: 'alcs-kt-40', term: '4 Stages of Compilation', definition: 'Lexical Analysis → Syntax Analysis (Parsing) → Code Generation → Code Optimisation.', topicNumber: 4, subtopicId: 'al-cs-4-2', subtopicCode: '4.2' },
  { id: 'alcs-kt-41', term: 'Two-Pass Assembler & Symbol Table', definition: 'Pass 1 records forward label addresses in Symbol Table; Pass 2 outputs binary machine code.', topicNumber: 4, subtopicId: 'al-cs-4-2', subtopicCode: '4.2' },
  { id: 'alcs-kt-42', term: 'Linker & Loader', definition: 'Merging object files with libraries vs copying executables into RAM to begin execution.', topicNumber: 4, subtopicId: 'al-cs-4-2', subtopicCode: '4.2' },
  { id: 'alcs-kt-43', term: 'Backus–Naur Form (BNF)', definition: 'Formal recursive metalanguage (`::=`, `|`, `<non-terminal>`) defining programming language syntax.', topicNumber: 4, subtopicId: 'al-cs-4-2', subtopicCode: '4.2' },
  { id: 'alcs-kt-44', term: 'Reverse Polish Notation (RPN)', definition: 'Bracket-free postfix notation evaluated unambiguously left-to-right on a LIFO stack.', topicNumber: 4, subtopicId: 'al-cs-4-2', subtopicCode: '4.2' },

  // Unit 5
  { id: 'alcs-kt-45', term: 'Security vs Privacy vs Integrity', definition: 'Access/availability protection vs legal personal-data confidentiality vs accuracy/consistency.', topicNumber: 5, subtopicId: 'al-cs-5-1', subtopicCode: '5.1' },
  { id: 'alcs-kt-46', term: 'Digital Signature', definition: 'Message hash digest encrypted with sender’s private key guaranteeing auth, integrity, and non-repudiation.', topicNumber: 5, subtopicId: 'al-cs-5-1', subtopicCode: '5.1' },
  { id: 'alcs-kt-47', term: 'Digital Certificate & CA', definition: 'Certificate Authority credential verifying server identity and authentic Public Key.', topicNumber: 5, subtopicId: 'al-cs-5-1', subtopicCode: '5.1' },
  { id: 'alcs-kt-48', term: 'TLS Handshake & Record Layers', definition: 'Asymmetric certificate/session-key setup followed by high-speed symmetric encryption.', topicNumber: 5, subtopicId: 'al-cs-5-1', subtopicCode: '5.1' },
  { id: 'alcs-kt-49', term: 'Quantum Cryptography (QKD)', definition: 'Photon-polarisation key exchange where eavesdropping disturbs quantum states and exposes interception.', topicNumber: 5, subtopicId: 'al-cs-5-1', subtopicCode: '5.1' },
  { id: 'alcs-kt-50', term: 'Referential Integrity', definition: 'Relational rule requiring every non-null Foreign Key to match an existing parent Primary Key.', topicNumber: 5, subtopicId: 'al-cs-5-2', subtopicCode: '5.2' },
  { id: 'alcs-kt-51', term: '1NF / 2NF / 3NF Normalisation', definition: 'Eliminating repeating groups (1NF), partial composite-key deps (2NF), and transitive deps (3NF).', topicNumber: 5, subtopicId: 'al-cs-5-2', subtopicCode: '5.2' },
  { id: 'alcs-kt-52', term: 'Composite Primary Key & Link Table', definition: 'Multi-attribute primary key resolving a many-to-many (`M:N`) ERD link.', topicNumber: 5, subtopicId: 'al-cs-5-2', subtopicCode: '5.2' },
  { id: 'alcs-kt-53', term: 'SQL DDL vs DML', definition: 'Schema commands (`CREATE`/`ALTER TABLE`) vs data commands (`INNER JOIN`, `INSERT`, `UPDATE`, `DELETE`).', topicNumber: 5, subtopicId: 'al-cs-5-2', subtopicCode: '5.2' },

  // Unit 6
  { id: 'alcs-kt-54', term: 'Waterfall / Iterative / RAD', definition: 'Linear sign-off SDLC vs incremental cycles vs prototype-heavy rapid user feedback.', topicNumber: 6, subtopicId: 'al-cs-6-1', subtopicCode: '6.1' },
  { id: 'alcs-kt-55', term: 'White-Box vs Black-Box Testing', definition: 'Code-level path/branch testing vs specification-based input/output validation.', topicNumber: 6, subtopicId: 'al-cs-6-1', subtopicCode: '6.1' },
  { id: 'alcs-kt-56', term: 'Stub, Alpha & Beta Testing', definition: 'Mock subroutines for top-down testing, in-house QA testing, and volunteer external pre-release testing.', topicNumber: 6, subtopicId: 'al-cs-6-1', subtopicCode: '6.1' },
  { id: 'alcs-kt-57', term: 'Corrective / Adaptive / Perfective', definition: 'Post-release bug fixes, external OS/law adaptation, and speed/feature improvements.', topicNumber: 6, subtopicId: 'al-cs-6-1', subtopicCode: '6.1' },
  { id: 'alcs-kt-58', term: 'Structure Chart & State-Transition Diagram', definition: 'Data (`○`) / Boolean flag (`●`) module hierarchy vs event-driven state/transition graph.', topicNumber: 6, subtopicId: 'al-cs-6-2', subtopicCode: '6.2' },
  { id: 'alcs-kt-59', term: 'Big-O Time & Space Complexity', definition: 'Asymptotic upper bound (`O(1)` to `O(2ⁿ)`) measuring algorithm scalability as `n → ∞`.', topicNumber: 6, subtopicId: 'al-cs-6-2', subtopicCode: '6.2' },
  { id: 'alcs-kt-60', term: 'Intractable Problem & Heuristic', definition: 'Exponential `O(2ⁿ)` problem unsolvable exactly at scale, tackled via fast approximate heuristics.', topicNumber: 6, subtopicId: 'al-cs-6-2', subtopicCode: '6.2' },

  // Unit 7
  { id: 'alcs-kt-61', term: 'Abstract Data Type (ADT)', definition: 'Logical specification of data and valid operations independent of underlying array/pointer storage.', topicNumber: 7, subtopicId: 'al-cs-7-1', subtopicCode: '7.1' },
  { id: 'alcs-kt-62', term: 'Stack (LIFO)', definition: 'Last-In, First-Out ADT with `O(1)` `Push`/`Pop` via `TopPointer` (call stack, undo, RPN).', topicNumber: 7, subtopicId: 'al-cs-7-1', subtopicCode: '7.1' },
  { id: 'alcs-kt-63', term: 'Circular Queue (FIFO)', definition: 'First-In, First-Out ADT wrapping `Head`/`Tail` via `MOD MaxSize` to reuse dequeued slots.', topicNumber: 7, subtopicId: 'al-cs-7-1', subtopicCode: '7.1' },
  { id: 'alcs-kt-64', term: 'Linked List & FreeListPointer', definition: 'Pointer-linked nodes (`Data | NextNode`) recycling deleted slots back onto the Free List.', topicNumber: 7, subtopicId: 'al-cs-7-1', subtopicCode: '7.1' },
  { id: 'alcs-kt-65', term: 'Binary Search Tree (BST)', definition: 'Binary tree maintaining `Left < Root < Right` for `O(log n)` balanced searches.', topicNumber: 7, subtopicId: 'al-cs-7-2', subtopicCode: '7.2' },
  { id: 'alcs-kt-66', term: 'Pre / In / Post-Order Traversal', definition: 'Root-first (cloning), Left-Root-Right (sorted BST), and Root-last (RPN/deletion) recursive walks.', topicNumber: 7, subtopicId: 'al-cs-7-2', subtopicCode: '7.2' },
  { id: 'alcs-kt-67', term: 'Hash Table & Collision Resolution', definition: '`O(1)` direct-index table resolving key collisions via Open Addressing (linear probing) or Chaining.', topicNumber: 7, subtopicId: 'al-cs-7-2', subtopicCode: '7.2' },
  { id: 'alcs-kt-68', term: 'Binary Search', definition: 'Sorted-list `O(log n)` midpoint halving search (`Mid ← (Low + High) DIV 2`).', topicNumber: 7, subtopicId: 'al-cs-7-3', subtopicCode: '7.3' },
  { id: 'alcs-kt-69', term: 'Insertion Sort', definition: 'In-place `O(n²)` worst / `O(n)` best sort inserting each key into a growing sorted prefix.', topicNumber: 7, subtopicId: 'al-cs-7-3', subtopicCode: '7.3' },
  { id: 'alcs-kt-70', term: 'Merge Sort', definition: 'Divide-and-conquer recursive sort guaranteeing `O(n log n)` time with `O(n)` auxiliary memory.', topicNumber: 7, subtopicId: 'al-cs-7-3', subtopicCode: '7.3' },

  // Unit 8
  { id: 'alcs-kt-71', term: 'Encapsulation', definition: 'Protecting `PRIVATE` class attributes behind validated `PUBLIC` getter and setter methods.', topicNumber: 8, subtopicId: 'al-cs-8-1', subtopicCode: '8.1' },
  { id: 'alcs-kt-72', term: 'Inheritance & Polymorphism', definition: 'Reusing superclass members (`IS-A`) and overriding methods for subclass-specific dynamic dispatch.', topicNumber: 8, subtopicId: 'al-cs-8-1', subtopicCode: '8.1' },
  { id: 'alcs-kt-73', term: 'Containment (Aggregation)', definition: 'Composition (`HAS-A`) where one class embeds object instances of another class as attributes.', topicNumber: 8, subtopicId: 'al-cs-8-1', subtopicCode: '8.1' },
  { id: 'alcs-kt-74', term: 'Serial / Sequential / Random Files', definition: 'Chronological append, key-sorted records, and hash-addressed `SEEK`/`GETRECORD` direct files.', topicNumber: 8, subtopicId: 'al-cs-8-1', subtopicCode: '8.1' },
  { id: 'alcs-kt-75', term: 'Exception Handling (TRY/EXCEPT)', definition: 'Structured runtime error trapping preventing crashes on missing files or invalid casts.', topicNumber: 8, subtopicId: 'al-cs-8-1', subtopicCode: '8.1' },
  { id: 'alcs-kt-76', term: 'Base Case, Call Stack & Unwinding', definition: 'Recursive stopping condition and LIFO stack-frame unwinding returning return addr/params/locals.', topicNumber: 8, subtopicId: 'al-cs-8-2', subtopicCode: '8.2' },
  { id: 'alcs-kt-77', term: 'Adjacency Matrix vs Adjacency List', definition: 'Dense `O(V²)` 2D weighted graph table vs compact `O(V + E)` neighbour lists for sparse graphs.', topicNumber: 8, subtopicId: 'al-cs-8-3', subtopicCode: '8.3' },
  { id: 'alcs-kt-78', term: 'Dijkstra’s Shortest Path', definition: 'Uninformed greedy shortest-path search expanding minimum non-negative `g(n)` cost.', topicNumber: 8, subtopicId: 'al-cs-8-3', subtopicCode: '8.3' },
  { id: 'alcs-kt-79', term: 'A* Search & Admissible Heuristic', definition: 'Informed pathfinding minimising `f(n) = g(n) + h(n)` where `h(n)` never overestimates true cost.', topicNumber: 8, subtopicId: 'al-cs-8-3', subtopicCode: '8.3' },
  { id: 'alcs-kt-80', term: 'Deep Learning & Backpropagation', definition: 'Multi-hidden-layer Artificial Neural Networks updating edge weights iteratively from output error.', topicNumber: 8, subtopicId: 'al-cs-8-3', subtopicCode: '8.3' },
];
