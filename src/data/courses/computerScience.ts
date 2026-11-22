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

export const COMPUTER_SCIENCE_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Data Representation',
    subtopics: [
      { id: 'cs-1-1', code: '1.1', slug: '1.1-binary-hex-twos-complement-shifts', title: 'Number Systems: Binary, Hexadecimal, Two’s Complement & Shifts', readingMinutes: 10, hasDeepContent: true },
      { id: 'cs-1-2', code: '1.2', slug: '1.2-text-sound-images-compression', title: 'Text (ASCII/Unicode), Sound, Bitmap Images & Compression', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Data Transmission & Error Detection',
    subtopics: [
      { id: 'cs-2-1', code: '2.1', slug: '2.1-packets-transmission-errors-encryption', title: 'Packet Switching, Serial/Parallel, Error Checking & Encryption', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Hardware & CPU Architecture',
    subtopics: [
      { id: 'cs-3-1', code: '3.1', slug: '3.1-von-neumann-fde-memory-storage', title: 'Von Neumann Architecture, FDE Cycle, Cache, Primary & Secondary Storage', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Software & Operating Systems',
    subtopics: [
      { id: 'cs-4-1', code: '4.1', slug: '4.1-os-interrupts-translators-ides', title: 'Operating Systems, Interrupts, High/Low-Level Languages & Translators', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'The Internet & Cyber Security',
    subtopics: [
      { id: 'cs-5-1', code: '5.1', slug: '5.1-internet-protocols-cyber-security', title: 'HTTP/HTTPS, DNS, Malware, Social Engineering & Defences', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Algorithms, Programming, Databases & Boolean Logic',
    subtopics: [
      { id: 'cs-6-1', code: '6.1', slug: '6.1-algorithms-programming-validation-testing', title: 'Algorithms, Pseudocode, Trace Tables, Validation & Test Data', readingMinutes: 11, hasDeepContent: true },
      { id: 'cs-6-2', code: '6.2', slug: '6.2-databases-sql-boolean-logic-gates', title: 'Relational Databases, SQL Queries & Boolean Logic Gates', readingMinutes: 11, hasDeepContent: true },
    ],
  },
];

export const COMPUTER_SCIENCE_NOTES: Record<string, NoteLesson> = {
  'cs-1-1': {
    subtopicId: 'cs-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Number Systems: Binary, Hexadecimal, Two’s Complement & Shifts',
    readingMinutes: 10,
    videoTitle: '1. CAMBRIDGE IGCSE (0478-0984) 1.1 How and why computers use binary to represent all forms of data',
    youtubeId: '4ZfqXkptPus',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Binary? Denary–Binary–Hex Conversions', cardId: 'cs-1-1-c1' },
      { time: '2:40', seconds: 160, label: 'Binary Addition, Overflow & Logical Shifts', cardId: 'cs-1-1-c2' },
      { time: '5:15', seconds: 315, label: 'Two’s Complement Signed Integers', cardId: 'cs-1-1-c3' },
    ],
    cards: [
      {
        id: 'cs-1-1-c1',
        title: 'Why Computers Use Binary & Hexadecimal Shorthand',
        summary: 'Logic switches have two states (0/1); hexadecimal packs 4 binary bits into a single character (0–9, A–F) for human readability.',
        bullets: [
          '**Why binary?** - processors are built from billions of microscopic **transistors (switches)** with only two reliable states: **ON (1)** and **OFF (0)**.',
          '**Why hexadecimal?** - 1 hex digit represents exactly **4 bits (1 nibble)**, making long binary numbers shorter, easier to read, and far less error-prone for humans (used in **MAC addresses**, **HTML colour codes #FF2A00**, **IPv6**, and memory dumps).',
        ],
        subsections: [
          {
            heading: 'Converting Binary ↔ Hexadecimal',
            bullets: [
              '**Split into 4-bit nibbles** - convert each nibble using weights 8-4-2-1, mapping 10→A, 11→B, 12→C, 13→D, 14→E, 15→F.',
            ],
            exampleHeading: 'Worked example: Convert 1011 0110₂ to Hex and Denary',
            examples: [
              'Left nibble 1011 = 8+2+1 = 11 = B; Right nibble 0110 = 4+2 = 6 → **B6₁₆**.',
              'Denary = (11 × 16) + 6 = 176 + 6 = **182**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hexadecimal', definition: 'Base-16 number system (0–9 and A–F) where each digit represents exactly 4 binary bits.' },
          { term: 'nibble', definition: 'A group of 4 binary bits (half a byte), representing values 0 to 15.' },
        ],
      },
      {
        id: 'cs-1-1-c2',
        title: '8-Bit Binary Addition, Overflow & Logical Shifts',
        summary: 'Overflow occurs when an 8-bit sum exceeds 255; logical left shifts multiply by 2ⁿ and right shifts divide by 2ⁿ.',
        bullets: [
          '**Overflow error** - happens when the result of adding two 8-bit unsigned integers requires a **9th bit** (sum > 255), causing data loss because the register only holds 8 bits.',
          '**Logical binary shifts** - shifting **left by n places** multiplies by **2ⁿ** (inserting 0s on the right); shifting **right by n places** performs integer division by **2ⁿ** (inserting 0s on the left, losing fractional bits).',
        ],
        subsections: [
          {
            heading: 'Worked Binary Shift',
            bullets: [
              '**Precision loss** - shifting a 1 off the left causes overflow; shifting a 1 off the right loses accuracy.',
            ],
            exampleHeading: 'Worked example: Logical left shift of 00010110 (22) by 2 places',
            examples: [
              '00010110 << 2 = 01011000 = 64 + 16 + 8 = **88** (22 × 2² = 88).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'overflow error', definition: 'Error caused when a calculation produces a value too large to be stored in the allocated number of bits (e.g. > 255 in 8-bit unsigned binary).' },
        ],
      },
      {
        id: 'cs-1-1-c3',
        title: 'Two’s Complement Signed Integers (−128 to +127)',
        summary: 'In 8-bit two’s complement, the leftmost bit has place value −128, allowing negative numbers to be added cleanly.',
        bullets: [
          '**Place values** - **−128, 64, 32, 16, 8, 4, 2, 1** (range: **−128 to +127**).',
          '**Quick negation method** - start from the positive binary number, **flip all bits (0↔1)**, and **add 1**.',
        ],
        subsections: [
          {
            heading: 'Worked Negative Integer Conversion',
            bullets: [
              '**Sign bit check** - if the MSB (leftmost bit) is **1**, the number is negative; if **0**, it is positive.',
            ],
            exampleHeading: 'Worked example: Represent −25 in 8-bit two’s complement',
            examples: [
              '+25 = 00011001 → flip bits: 11100110 → add 1: **11100111**.',
              'Check: −128 + 64 + 32 + 4 + 2 + 1 = −25 ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'two’s complement', definition: 'Signed binary representation where the most significant bit carries a negative place value (−128 in 8 bits).' },
        ],
        memoryAid: 'Two’s complement shortcut: Flip all bits and Add 1! Left shift = ×2, Right shift = ÷2!',
        commonMistake: 'NEVER claim "computers process hexadecimal directly" — computers ALWAYS process binary; hexadecimal is purely for HUMAN convenience!',
      },
    ],
    keyTerms: [
      { term: 'Hexadecimal', definition: 'Base-16 shorthand (0–9, A–F) representing 4 bits per digit.' },
      { term: 'Overflow error', definition: 'Result exceeding the maximum value storable in fixed bits (e.g. > 255 in 8 bits).' },
      { term: 'Logical shift', definition: 'Moving all bits left (×2ⁿ) or right (÷2ⁿ), filling vacated positions with 0.' },
      { term: 'Two’s complement', definition: 'Signed binary format whose MSB has negative weight (−128 in 8-bit).' },
    ],
    checklistPoints: [
      'Convert fluently between binary, denary, and hexadecimal and explain why hex is used',
      'Add 8-bit binary numbers, spot overflow, and predict effects of logical left/right shifts',
      'Convert negative integers into 8-bit two’s complement (−128 to +127)',
    ],
  },

  'cs-1-2': {
    subtopicId: 'cs-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Text (ASCII/Unicode), Sound, Bitmap Images & Compression',
    readingMinutes: 10,
    videoTitle: '14. CAMBRIDGE IGCSE (0478-0984) 1.3 Compression',
    youtubeId: '29kUfFIlVJA',
    videoChannel: "Craig'n'Dave",
    videoDuration: '6:55',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Character Sets (ASCII vs Unicode) & Bitmap Images', cardId: 'cs-1-2-c1' },
      { time: '2:15', seconds: 135, label: 'Sound Sampling & File Size Calculations (KiB/MiB)', cardId: 'cs-1-2-c2' },
      { time: '4:35', seconds: 275, label: 'Lossy vs Lossless Compression (RLE)', cardId: 'cs-1-2-c3' },
    ],
    cards: [
      {
        id: 'cs-1-2-c1',
        title: 'Character Sets & Bitmap Image Representation',
        summary: 'Unicode supports global alphabets and emojis using more bits per character than ASCII; bitmap size scales with resolution and colour depth.',
        bullets: [
          '**ASCII vs Unicode** - 7-bit ASCII encodes 128 English characters; **Unicode** (16/32-bit) represents over a million global scripts and emojis at the cost of larger file sizes.',
          '**Bitmap images** - grid of **pixels**; **resolution** = width × height; **colour depth** = bits per pixel (n bits allow **2ⁿ** colours).',
        ],
        subsections: [
          {
            heading: 'Image File Size Formula (IEC Binary Prefixes)',
            bullets: [
              '**Formula** - Size (bits) = width × height × colour depth; divide by 8 for bytes, by **1024** for **KiB**, by **1024²** for **MiB**.',
            ],
            exampleHeading: 'Worked example: 1024 × 512 image with 16-bit colour depth',
            examples: [
              'Bytes = 1024 × 512 × 2 = 1,048,576 bytes = **1 MiB** (1,048,576 ÷ 1024 ÷ 1024).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'colour depth', definition: 'Number of bits allocated to represent the colour of each pixel in a bitmap image (n bits = 2ⁿ possible colours).' },
        ],
      },
      {
        id: 'cs-1-2-c2',
        title: 'Sound Sampling (Sample Rate & Sample Resolution)',
        summary: 'Analogue sound waves are sampled at fixed intervals; higher sample rate and sample resolution improve fidelity but enlarge file size.',
        bullets: [
          '**Sample rate (Hz)** - number of amplitude measurements taken **per second**.',
          '**Sample resolution (bit depth)** - number of **bits per sample** (more bits = finer amplitude accuracy and less quantisation noise).',
          '**Sound file size** - **Size (bits) = sample rate (Hz) × sample resolution (bits) × duration (s)** (× 2 for stereo).',
        ],
        subsections: [
          {
            heading: 'Worked Sound File Size Calculation',
            bullets: [
              '**Trade-off** - doubling sample rate or bit depth doubles file size and transmission time.',
            ],
            exampleHeading: 'Worked example: 10 s mono clip at 16,000 Hz, 8-bit resolution',
            examples: [
              'Size = 16,000 × 8 × 10 = 1,280,000 bits = 160,000 bytes ≈ **156.25 KiB**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sample rate', definition: 'The number of sound amplitude samples recorded per second, measured in hertz (Hz).' },
        ],
      },
      {
        id: 'cs-1-2-c3',
        title: 'Lossy vs Lossless Compression (RLE)',
        summary: 'Lossy compression permanently removes imperceptible details for tiny media files; lossless compression reconstructs exact original data.',
        bullets: [
          '**Lossy (JPEG, MP3, MP4)** - permanently removes less noticeable data (e.g. subtle colour shades or inaudible frequencies) → much smaller files, **cannot** restore exact original (unsuitable for code or text!).',
          '**Lossless (PNG, ZIP, FLAC, RLE)** - uses algorithms like **Run-Length Encoding (RLE)** (storing value + repeat count, e.g. AAAAA → 5A) so the **exact original file** is restored on decompression.',
        ],
        subsections: [
          {
            heading: 'Why Compress Files?',
            bullets: [
              '**Benefits** - less storage space, faster upload/download across networks, less bandwidth consumed, and fits email attachment limits.',
            ],
            exampleHeading: 'Worked RLE example: WWWWBBBWWWWW',
            examples: [
              '12 characters compressed by RLE → **4W 3B 5W** (6 tokens instead of 12).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'lossless compression', definition: 'Compression that reduces file size without permanently losing any data, allowing exact restoration of the original file.' },
          { term: 'run-length encoding', definition: 'Lossless compression replacing consecutive repeated data values with a single value and count.' },
        ],
        memoryAid: 'Cambridge 0478 uses 1024 (KiB, MiB, GiB, TiB) — ALWAYS divide bytes by 1024, NOT 1000!',
        commonMistake: 'NEVER recommend lossy compression for executable programs, spreadsheets, or text documents — losing a single bit corrupts code!',
      },
    ],
    keyTerms: [
      { term: 'Unicode', definition: 'Character set encoding over a million global characters and emojis using 16–32 bits.' },
      { term: 'Colour depth', definition: 'Number of bits per pixel determining maximum colours (2ⁿ).' },
      { term: 'Sample rate', definition: 'Number of audio samples taken per second (Hz).' },
      { term: 'Lossless compression', definition: 'File size reduction allowing bit-for-bit restoration of original data (e.g. RLE).' },
    ],
    checklistPoints: [
      'Compare ASCII and Unicode and calculate bitmap image and sound file sizes in KiB/MiB using 1024',
      'Explain how sample rate, sample resolution, resolution, and colour depth affect quality and size',
      'Choose appropriately between lossy and lossless compression and encode strings with RLE',
    ],
  },

  'cs-2-1': {
    subtopicId: 'cs-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Packet Switching, Serial/Parallel, Error Checking & Encryption',
    readingMinutes: 10,
    videoTitle: 'What is hashing?',
    youtubeId: '9f8-6mYX_YQ',
    videoChannel: "Craig'n'Dave",
    videoDuration: '6:12',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Data Packets & Packet Switching', cardId: 'cs-2-1-c1' },
      { time: '2:05', seconds: 125, label: 'Serial/Parallel, Simplex/Duplex & Error Detection', cardId: 'cs-2-1-c2' },
      { time: '4:10', seconds: 250, label: 'Symmetric vs Asymmetric Encryption', cardId: 'cs-2-1-c3' },
    ],
    cards: [
      {
        id: 'cs-2-1-c1',
        title: 'Packet Structure & Packet Switching',
        summary: 'Files are split into packets routed independently by routers and reassembled in sequence number order at the destination.',
        bullets: [
          '**Three packet parts** - **Header** (destination IP, sender IP, packet sequence number), **Payload** (actual data chunk), **Trailer** (end-of-packet marker + CRC error check).',
          '**Packet switching** - routers inspect each packet’s destination IP and forward it along the **fastest/least congested available path**; packets may arrive out of order and are **reordered** using sequence numbers.',
        ],
        subsections: [
          {
            heading: 'Serial vs Parallel & Direction Modes',
            bullets: [
              '**Serial (1 bit at a time, 1 wire)** - reliable over long distances with no **data skew** (e.g. USB, Ethernet). **Parallel (multiple bits simultaneously)** - fast over very short internal distances (CPU buses), suffers skew over long cables.',
              '**Simplex** (one-way: TV broadcast), **Half-duplex** (both ways, one at a time: walkie-talkie), **Full-duplex** (both ways simultaneously: phone call/broadband).',
            ],
            exampleHeading: 'Concrete check: Why USB is serial',
            examples: [
              'Serial transmission avoids signal skew/interference between parallel wires and uses thinner, cheaper cables.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'packet switching', definition: 'Transmitting data split into numbered packets that routers forward independently across the fastest routes and reassemble at the destination.' },
        ],
      },
      {
        id: 'cs-2-1-c2',
        title: 'Error Detection (Parity, Checksum, Echo, ARQ & Check Digits)',
        summary: 'Error-detection methods verify data integrity after transmission interference; check digits catch human data-entry typos.',
        bullets: [
          '**Parity bit** - adds a 0 or 1 so total 1s is **even** (even parity) or **odd** (odd parity); fails if 2 bits flip simultaneously (solved by **parity blocks**!).',
          '**Checksum** - sender computes a mathematical sum of bytes and transmits it; receiver recalculates and requests resend if mismatch.',
          '**ARQ (Automatic Repeat Request)** - uses **acknowledgements** and **timeouts**; if no acknowledgement arrives before timeout, sender automatically retransmits.',
          '**Check digit** - final calculated digit in ISBNs/barcodes detecting human typing errors (e.g. transposed digits).',
        ],
        subsections: [
          {
            heading: 'Worked Even Parity Example',
            bullets: [
              '**Count the 1s** - add 1 if odd count, 0 if already even.',
            ],
            exampleHeading: 'Worked example: 7 data bits 1011010 with EVEN parity',
            examples: [
              'Count of 1s = 4 (already even) → parity bit = **0** → transmitted byte = **01011010**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ARQ', definition: 'Automatic Repeat Request — error-control protocol using acknowledgements and timeouts to trigger automatic retransmission of lost/corrupted packets.' },
        ],
      },
      {
        id: 'cs-2-1-c3',
        title: 'Symmetric vs Asymmetric Encryption',
        summary: 'Symmetric encryption uses one shared secret key (fast, key-exchange risk); asymmetric uses a public key to encrypt and matching private key to decrypt.',
        bullets: [
          '**Symmetric encryption** - **same single secret key** both encrypts plaintext → ciphertext and decrypts ciphertext → plaintext (fast, but sharing the key securely over a network is risky).',
          '**Asymmetric encryption** - uses a mathematically linked **public key** (shared openly to **encrypt**) and **private key** (kept strictly secret by receiver to **decrypt**), eliminating the key-exchange problem.',
        ],
        subsections: [
          {
            heading: 'Purpose of Encryption',
            bullets: [
              '**Does NOT stop interception** - encryption makes intercepted ciphertext **meaningless/unreadable** to attackers without the decryption key!',
            ],
            exampleHeading: 'Concrete check: HTTPS handshake',
            examples: [
              'Web browsers use asymmetric encryption to safely exchange a fast symmetric session key.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'asymmetric encryption', definition: 'Encryption using a public key to encrypt data and a separate secret private key to decrypt it.' },
        ],
        memoryAid: 'Public key = Padlock anyone can snap shut (encrypt); Private key = Only YOU hold the key to unlock (decrypt)!',
        commonMistake: 'NEVER claim encryption prevents hackers from intercepting packets — state that it scrambles data into ciphertext so it is UNREADABLE if intercepted!',
      },
    ],
    keyTerms: [
      { term: 'Packet switching', definition: 'Routing data split into numbered packets independently across a network.' },
      { term: 'Parity check', definition: 'Adding an extra bit so total 1s is odd or even to detect single-bit transmission errors.' },
      { term: 'ARQ', definition: 'Protocol using acknowledgements and timeouts to resend failed packets.' },
      { term: 'Asymmetric encryption', definition: 'Public key encrypts; matching secret private key decrypts.' },
    ],
    checklistPoints: [
      'Describe packet headers/payload/trailers and how routers perform packet switching',
      'Compare serial vs parallel, simplex/half/full duplex, and parity/checksum/ARQ/check digits',
      'Contrast symmetric and asymmetric encryption and state encryption’s exact security benefit',
    ],
  },

  'cs-3-1': {
    subtopicId: 'cs-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Von Neumann Architecture, FDE Cycle, Cache, Primary & Secondary Storage',
    readingMinutes: 11,
    videoTitle: 'How does caching get decided?',
    youtubeId: 'L34VrKXTln4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Von Neumann Registers, Buses & FDE Cycle', cardId: 'cs-3-1-c1' },
      { time: '2:25', seconds: 145, label: 'CPU Performance (Cores, Clock, Cache) & Embedded Systems', cardId: 'cs-3-1-c2' },
      { time: '4:50', seconds: 290, label: 'RAM/ROM, Magnetic/Optical/SSD & Virtual Memory', cardId: 'cs-3-1-c3' },
    ],
    cards: [
      {
        id: 'cs-3-1-c1',
        title: 'Von Neumann Architecture, Registers & The FDE Cycle',
        summary: 'Programs and data share main memory; the CPU loops continuously through Fetch, Decode, and Execute using dedicated registers and buses.',
        bullets: [
          '**Key registers** - **PC** (address of next instruction), **MAR** (memory address being read/written), **MDR** (data/instruction fetched from or written to RAM), **CIR** (current instruction being decoded), **ACC** (holds intermediate ALU results).',
          '**Three buses** - **Address bus** (unidirectional CPU → RAM), **Data bus** (bidirectional), **Control bus** (bidirectional timing/read-write signals).',
        ],
        subsections: [
          {
            heading: 'Fetch–Decode–Execute (FDE) Cycle',
            bullets: [
              '**Fetch** - PC copied to MAR → address sent on address bus → instruction fetched along data bus into MDR → copied to CIR → **PC increments by 1**.',
              '**Decode & Execute** - **Control Unit (CU)** decodes CIR opcode/operand → sends control signals; **ALU** performs arithmetic/logic and stores result in ACC.',
            ],
            exampleHeading: 'Concrete check: Stored-program concept',
            examples: [
              'In Von Neumann architecture, BOTH program instructions and data live together in the same RAM.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Von Neumann architecture', definition: 'Computer design storing both program instructions and data together in the same main memory, fetched sequentially by the CPU.' },
          { term: 'Fetch-Decode-Execute cycle', definition: 'The continuous loop by which the CPU retrieves an instruction from RAM, interprets it, and carries it out.' },
        ],
        diagram: 'cpu-fde-architecture',
      },
      {
        id: 'cs-3-1-c2',
        title: 'CPU Performance Factors & Embedded Systems',
        summary: 'Higher clock speed, larger cache, and more cores boost CPU throughput; embedded systems dedicate hardware to one specific device task.',
        bullets: [
          '**Clock speed (GHz)** - more FDE cycles executed per second.',
          '**Cache memory** - ultra-fast SRAM close to CPU storing frequently used instructions/data, reducing slow RAM fetches.',
          '**Multiple cores** - allow parallel execution of multiple instructions simultaneously (if software supports multithreading).',
          '**Embedded system** - dedicated computer built into a larger machine (washing machine, car ABS, microwave) with firmware in ROM.',
        ],
        subsections: [
          {
            heading: 'Sensors & Microprocessors',
            bullets: [
              '**Control loop** - sensor reads analogue environment → **ADC** converts to digital → microprocessor compares with preset value → triggers **actuator** (motor, valve, heater).',
            ],
            exampleHeading: 'Concrete example: Automatic greenhouse',
            examples: [
              'Temperature sensor → ADC → microprocessor checks if T > 28 °C → opens roof vents via motor actuator.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cache memory', definition: 'Small, very fast memory located inside/near the CPU that holds frequently accessed instructions and data.' },
        ],
      },
      {
        id: 'cs-3-1-c3',
        title: 'Primary Memory (RAM/ROM), Secondary Storage & Virtual Memory',
        summary: 'RAM is volatile working memory; ROM is non-volatile boot firmware; SSDs use NAND flash with no moving parts.',
        bullets: [
          '**RAM vs ROM** - **RAM** is **volatile** (loses data on power-off) and read/write for open OS & apps; **ROM** is **non-volatile** read-only storing BIOS/bootstrap start-up instructions.',
          '**Secondary storage** - **Magnetic HDD** (spinning platters, cheap high capacity, fragile moving parts), **Solid-State SSD** (NAND flash transistors, fast, silent, durable, no moving parts), **Optical CD/DVD/Blu-ray** (lasers reading pits/lands).',
          '**Virtual memory** - allocates a slice of secondary storage (HDD/SSD) as temporary overflow pages when RAM is full (slower than RAM).',
        ],
        subsections: [
          {
            heading: 'Cloud Storage Trade-Offs',
            bullets: [
              '**Pros vs Cons** - access files anywhere on any device + automatic offsite backup, vs requires internet connection, recurring subscription cost, and third-party security/privacy reliance.',
            ],
            exampleHeading: 'Concrete check: MAC address vs IP address',
            examples: [
              'A MAC address (48-bit hex) is permanently burned into the NIC at manufacture; an IP address is assigned by the network and changes when switching networks.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'virtual memory', definition: 'Portion of secondary storage used temporarily as an extension of RAM when physical RAM becomes full.' },
        ],
        memoryAid: 'RAM = Volatile Working Desk; ROM = Permanent Start-up Rulebook; Address Bus = One-Way Street!',
        commonMistake: 'NEVER confuse Cache with Virtual Memory: Cache makes the CPU FASTER (SRAM inside CPU); Virtual Memory extends full RAM onto slower secondary storage!',
      },
    ],
    keyTerms: [
      { term: 'Von Neumann architecture', definition: 'Design storing instructions and data together in main memory.' },
      { term: 'Cache memory', definition: 'Fast CPU-proximate memory holding frequently accessed instructions/data.' },
      { term: 'Virtual memory', definition: 'Secondary storage space used temporarily as overflow when RAM is full.' },
      { term: 'Embedded system', definition: 'Dedicated computer built into a larger appliance to perform one specific task.' },
    ],
    checklistPoints: [
      'Trace the complete FDE cycle naming PC, MAR, MDR, CIR, CU, ALU, ACC, and all 3 buses',
      'Explain how clock speed, cache size, and core count affect performance',
      'Compare RAM vs ROM, magnetic vs optical vs SSD storage, virtual memory, and cloud storage',
    ],
  },

  'cs-4-1': {
    subtopicId: 'cs-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Operating Systems, Interrupts, High/Low-Level Languages & Translators',
    readingMinutes: 10,
    videoTitle: 'What is deadlock?',
    youtubeId: 'xE0DXY-Aca8',
    videoChannel: "Craig'n'Dave",
    videoDuration: '6:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Operating System Functions & Interrupt Handling', cardId: 'cs-4-1-c1' },
      { time: '2:10', seconds: 130, label: 'High-Level vs Low-Level Languages (Assembly)', cardId: 'cs-4-1-c2' },
      { time: '4:20', seconds: 260, label: 'Compilers, Interpreters & IDE Features', cardId: 'cs-4-1-c3' },
    ],
    cards: [
      {
        id: 'cs-4-1-c1',
        title: 'Operating System Functions & Interrupts',
        summary: 'The OS manages hardware, memory, files, security, and multitasking; interrupts let urgent hardware/software events pause the CPU cleanly.',
        bullets: [
          '**Core OS tasks** - managing files, **memory allocation**, **multitasking** (CPU time-slicing), **peripheral drivers**, user interface (GUI/CLI), user accounts/security, and handling **interrupts**.',
          '**Interrupt handling** - signal sent to CPU (e.g. keypress, printer out-of-paper, divide-by-zero) → CPU finishes current FDE cycle → saves current register values → runs the **Interrupt Service Routine (ISR)** → restores saved registers and resumes.',
        ],
        subsections: [
          {
            heading: 'Hardware vs Software Interrupts',
            bullets: [
              '**Hardware interrupts** - mouse click, keypress, printer paper jam. **Software interrupts** - division by zero, missing file, two processes clashing for memory.',
            ],
            exampleHeading: 'Concrete check: Why interrupts enable multitasking',
            examples: [
              'Timer interrupts regularly pause the active program so the OS can switch the CPU to the next waiting application.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'interrupt', definition: 'A signal sent from hardware or software to the CPU requesting immediate attention via an Interrupt Service Routine (ISR).' },
        ],
      },
      {
        id: 'cs-4-1-c2',
        title: 'High-Level vs Low-Level Languages',
        summary: 'High-level languages (Python/Java) are portable and human-readable; assembly/machine code offer direct hardware control and compact speed.',
        bullets: [
          '**High-level languages** - close to English, portable across different CPU types, faster to write and debug, but must be translated into machine code.',
          '**Low-level (Assembly & Machine Code)** - machine-dependent; assembly uses mnemonics (e.g. `LDA`, `ADD`) translated by an **assembler**; directly manipulates CPU registers and memory for embedded firmware/drivers.',
        ],
        subsections: [
          {
            heading: 'When Programmers Choose Assembly',
            bullets: [
              '**Use cases** - memory-constrained embedded microcontrollers, real-time hardware drivers, or performance-critical kernels.',
            ],
            exampleHeading: 'Concrete comparison: Python vs Assembly',
            examples: [
              'One Python line `total = a + b` replaces multiple assembly instructions (`LDA a`, `ADD b`, `STA total`).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'assembly language', definition: 'Low-level programming language using short human-readable mnemonics (e.g. LDA, ADD) translated 1-to-1 into machine code by an assembler.' },
        ],
      },
      {
        id: 'cs-4-1-c3',
        title: 'Compilers vs Interpreters & IDEs',
        summary: 'Compilers translate the whole program into a fast standalone executable; interpreters execute line by line for easy debugging.',
        bullets: [
          '**Compiler** - translates the **entire source code at once** into an **executable machine code file**; produces a full list of syntax errors at the end; once compiled, runs very **fast** without needing the compiler or exposing source code.',
          '**Interpreter** - translates and runs **one line at a time**; **stops immediately** at the first error (great during **development/debugging**), but executes slower and needs the interpreter installed every time.',
          '**IDE tools** - code editor (syntax highlighting, auto-complete), translator, runtime debugger (breakpoints, variable watch), and error diagnostics.',
        ],
        subsections: [
          {
            heading: 'Choosing Compiler vs Interpreter',
            bullets: [
              '**Development phase** → Interpreter (instant line-by-line error feedback). **Final distribution** → Compiler (fast standalone executable + protects proprietary source code).',
            ],
            exampleHeading: 'Concrete check: Assembler',
            examples: [
              'Do not mix up the 3 translators: Compiler & Interpreter translate HIGH-level code; Assembler translates ASSEMBLY language!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'compiler', definition: 'Translator that converts an entire high-level source program into a standalone machine-code executable file.' },
          { term: 'interpreter', definition: 'Translator that converts and executes high-level source code one statement at a time, halting at the first error.' },
        ],
        memoryAid: 'Interpreter = Instant line-by-line debugging; Compiler = Creates fast standalone executable!',
        commonMistake: 'Remember the CPU always finishes its CURRENT FDE cycle before servicing an interrupt — it does not drop mid-instruction!',
      },
    ],
    keyTerms: [
      { term: 'Interrupt', definition: 'Hardware or software signal pausing the CPU to run an Interrupt Service Routine.' },
      { term: 'Assembly language', definition: 'Low-level mnemonic language translated into machine code by an assembler.' },
      { term: 'Compiler', definition: 'Translates whole high-level program into a fast standalone executable.' },
      { term: 'Interpreter', definition: 'Translates and executes high-level code line by line, stopping at the first error.' },
    ],
    checklistPoints: [
      'List 6 core OS responsibilities and trace how the CPU saves state to execute an ISR',
      'Compare high-level languages, assembly language, and machine code',
      'Evaluate compilers vs interpreters for development vs commercial distribution and name 4 IDE tools',
    ],
  },

  'cs-5-1': {
    subtopicId: 'cs-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'HTTP/HTTPS, DNS, Malware, Social Engineering & Defences',
    readingMinutes: 10,
    videoTitle: 'Why did half the internet go down again?',
    youtubeId: 'u1XETm8tPNc',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Internet vs WWW, URLs, DNS & HTTP/HTTPS', cardId: 'cs-5-1-c1' },
      { time: '2:25', seconds: 145, label: 'Cyber Threats: Brute Force, DDoS, Phishing, Malware & SQLi', cardId: 'cs-5-1-c2' },
      { time: '4:55', seconds: 295, label: 'Security Solutions: Firewalls, 2FA, Biometrics & TLS', cardId: 'cs-5-1-c3' },
    ],
    cards: [
      {
        id: 'cs-5-1-c1',
        title: 'The Internet, WWW, DNS, Cookies & HTTPS',
        summary: 'The Internet is the global hardware infrastructure; the WWW is the web pages accessed over it via DNS resolution and HTTPS.',
        bullets: [
          '**DNS (Domain Name System)** - translates human-readable domain names (e.g. `cognitoedu.org`) into numerical **IP addresses** so the browser can request the web page.',
          '**HTTPS (HTTP + TLS/SSL)** - encrypts browser–server traffic using digital **TLS certificates** verifying site identity.',
          '**Cookies** - small text files stored on a user’s device by a browser to remember login sessions, shopping baskets, and preferences (session vs persistent cookies).',
        ],
        subsections: [
          {
            heading: 'Parts of a URL',
            bullets: [
              '**`https://www.example.co.uk/notes/cs.html`** - Protocol (`https`) + Domain Name (`www.example.co.uk`) + File Path (`/notes/cs.html`).',
            ],
            exampleHeading: 'Concrete check: Internet vs WWW',
            examples: [
              'Email, VoIP, and gaming run over the Internet WITHOUT using the World Wide Web.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'DNS', definition: 'Domain Name System — directory servers translating human-readable domain names into IP addresses.' },
        ],
      },
      {
        id: 'cs-5-1-c2',
        title: 'Cyber Security Threats & Malware',
        summary: 'Know how brute-force, DDoS, phishing, pharming, ransomware, spyware, Trojans, and SQL injection work.',
        bullets: [
          '**Phishing vs Pharming** - **Phishing** tricks users via fake emails/links into revealing passwords; **Pharming** installs malicious code/DNS poisoning to redirect users silently to a fake website even when they type the real URL.',
          '**DDoS (Distributed Denial of Service)** - floods a server with millions of requests from a **botnet** of hijacked zombie devices, crashing legitimate access.',
          '**Malware types** - **Virus** (attaches to host file & replicates), **Worm** (self-replicates across networks without host file), **Trojan** (disguised as legitimate software), **Ransomware** (encrypts files demanding payment), **Spyware/Keylogger** (secretly records keystrokes).',
        ],
        subsections: [
          {
            heading: 'Social Engineering & SQL Injection',
            bullets: [
              '**Social engineering** - manipulating humans (not code) into disclosing credentials; **SQL injection** inserts malicious SQL commands into an unvalidated web form to dump or delete database records.',
            ],
            exampleHeading: 'Concrete example: SQL injection payload',
            examples: [
              'Typing `\' OR 1=1 --` into an unvalidated login box tricks the database into returning all user rows.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'DDoS attack', definition: 'Flooding a target server with huge volumes of traffic from a botnet so genuine users cannot access the service.' },
          { term: 'pharming', definition: 'Malicious redirection of a user to a fraudulent lookalike website via DNS tampering or local malware even when the genuine URL is entered.' },
        ],
      },
      {
        id: 'cs-5-1-c3',
        title: 'Layered Cyber Security Defences',
        summary: 'Combine firewalls, proxy servers, two-factor authentication, biometrics, anti-malware, and regular encrypted backups.',
        bullets: [
          '**Firewall** - monitors incoming/outgoing network packets against security rules and blocks unauthorised traffic.',
          '**Proxy server** - acts as an intermediary hiding internal IP addresses, filtering traffic, and caching popular pages.',
          '**Authentication** - strong passwords + **2FA** (something you know + something you have) + **biometrics** (fingerprint/retina — unique & cannot be forgotten).',
          '**Preventing data loss** - **regular offline backups** (defeats ransomware), software patching, and **input validation/parameterised SQL** (defeats SQL injection).',
        ],
        subsections: [
          {
            heading: 'Checking a Website Before Entering Card Details',
            bullets: [
              '**TLS checks** - verify `https://` padlock, inspect the digital certificate issued by a trusted Certificate Authority, and check spelling of the domain.',
            ],
            exampleHeading: 'Concrete check: Why backups beat ransomware',
            examples: [
              'Even if ransomware encrypts a server, clean offline backups allow full restoration without paying criminals.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'firewall', definition: 'Hardware or software barrier examining network traffic against rules to block unauthorised incoming or outgoing packets.' },
        ],
        memoryAid: 'Phishing = Fishing with bait emails; Pharming = Farming DNS/hosts to redirect you silently!',
        commonMistake: 'Do NOT confuse a Virus (needs a host file/program) with a Worm (standalone self-replicating across networks)!',
      },
    ],
    keyTerms: [
      { term: 'DNS', definition: 'Translates human-readable domain names into IP addresses.' },
      { term: 'Pharming', definition: 'Silently redirecting users to a fake website via compromised DNS or local malware.' },
      { term: 'DDoS attack', definition: 'Overwhelming a server with botnet traffic to deny legitimate service.' },
      { term: 'Firewall', definition: 'Monitors and filters incoming and outgoing network traffic using rule lists.' },
    ],
    checklistPoints: [
      'Distinguish Internet vs WWW, explain DNS lookup, cookies, and HTTPS/TLS encryption',
      'Explain phishing, pharming, DDoS, SQL injection, and all 5 malware types accurately',
      'Match defences (firewall, proxy, 2FA, biometrics, backups, input sanitisation) to each threat',
    ],
  },

  'cs-6-1': {
    subtopicId: 'cs-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Algorithms, Pseudocode, Trace Tables, Validation & Test Data',
    readingMinutes: 11,
    videoTitle: 'How does a recommendation algorithm decide what you see?',
    youtubeId: 'mje9mwR5AZ4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Decomposition, Standard Algorithms (Linear Search & Bubble Sort)', cardId: 'cs-6-1-c1' },
      { time: '2:35', seconds: 155, label: 'Validation vs Verification & Test Data Types', cardId: 'cs-6-1-c2' },
      { time: '5:10', seconds: 310, label: 'Trace Tables, Arrays & Subroutines (Procedures/Functions)', cardId: 'cs-6-1-c3' },
    ],
    cards: [
      {
        id: 'cs-6-1-c1',
        title: 'Decomposition, Programming Constructs & Standard Algorithms',
        summary: 'Every algorithm uses sequence, selection, and iteration; know linear search, bubble sort, totalling, counting, and min/max.',
        bullets: [
          '**Three constructs** - **Sequence** (step by step), **Selection** (`IF...THEN...ELSE`, `CASE`), **Iteration** (count-controlled `FOR`, pre-condition `WHILE`, post-condition `REPEAT...UNTIL`).',
          '**Linear search** - checks each element in an array one by one until target is found or end is reached (works on unsorted lists!).',
          '**Bubble sort** - repeatedly compares adjacent pairs and swaps if out of order until a full pass makes zero swaps.',
        ],
        subsections: [
          {
            heading: 'WHILE vs REPEAT...UNTIL Loops',
            bullets: [
              '**`WHILE`** - tests condition at the **START** (may run **0 times**).',
              '**`REPEAT...UNTIL`** - tests condition at the **END** (always runs **at least once**).',
            ],
            exampleHeading: 'Worked example: Finding maximum in an array',
            examples: [
              'Initialise `Max ← Scores[1]` (NOT 0, in case all values are negative!), loop `FOR i ← 2 TO N`, update `IF Scores[i] > Max THEN Max ← Scores[i]`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'decomposition', definition: 'Breaking a complex problem down into smaller, manageable sub-problems that can be solved and tested independently.' },
        ],
      },
      {
        id: 'cs-6-1-c2',
        title: 'Validation vs Verification & Choosing Test Data',
        summary: 'Validation checks data is sensible/reasonable; verification checks data was copied accurately without typos.',
        bullets: [
          '**Validation checks (automated sensibility)** - **Range check** (1–100), **Length check** (8 chars), **Type check** (integer), **Presence check** (not blank), **Format check** (DD/MM/YYYY), **Check digit**.',
          '**Verification checks (accuracy of copying)** - **Double entry** (type password twice and compare) and **Visual (screen) check** (human reads back against source).',
          '**Four test data categories (e.g. valid range 1–100)** - **Normal** (50), **Abnormal/Erroneous** (−5 or "abc"), **Extreme** (valid limits: **1 and 100**), **Boundary** (valid limit + just outside: **0 & 1**, or **100 & 101**).',
        ],
        subsections: [
          {
            heading: 'Why Validation Cannot Catch Every Wrong Input',
            bullets: [
              '**Reasonable ≠ correct** - typing `15/06/2009` instead of `16/06/2009` passes every validation check, so verification is also needed!',
            ],
            exampleHeading: 'Worked test data for percentage mark (0 to 100)',
            examples: [
              'Normal: 65; Extreme: 0 and 100; Boundary pair: −1 (rejected) and 0 (accepted); Abnormal: 150 or "ten".',
            ],
          },
        ],
        glossaryPills: [
          { term: 'validation', definition: 'Automated check ensuring entered data is reasonable and obeys rules (range, type, length, format, presence).' },
          { term: 'verification', definition: 'Checking that data has been accurately copied or transcribed from one source to another (double entry or visual check).' },
        ],
        commonMistake: 'NEVER confuse Validation (is it REASONABLE?) with Verification (was it COPIED ACCURATELY?) — double entry is verification, NOT validation!',
      },
      {
        id: 'cs-6-1-c3',
        title: 'Trace Tables, Procedures vs Functions & File Handling',
        summary: 'Trace tables dry-run algorithms column by column; functions return a value whereas procedures perform a task without returning one.',
        bullets: [
          '**Procedure vs Function** - a **procedure** performs a set of instructions without returning a value; a **function** ALWAYS **returns a value** to the calling code.',
          '**Local vs Global variables** - **local** variables exist only inside their subroutine (preventing accidental side effects); **global** variables are accessible everywhere.',
          '**Trace table discipline** - write a new row each time a loop repeats or a variable changes, and record exact `OUTPUT` strings.',
        ],
        subsections: [
          {
            heading: 'Maintainable Code Habits',
            bullets: [
              '**Four practices** - meaningful identifier names, comments, indentation, and modular subroutines with parameters.',
            ],
            exampleHeading: 'Worked pseudocode trace: `Total ← 0; FOR k ← 1 TO 3; Total ← Total + k; NEXT k`',
            examples: [
              'k=1 → Total=1; k=2 → Total=3; k=3 → Total=6 → final OUTPUT = **6**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'trace table', definition: 'A table used to dry-run an algorithm manually, tracking every variable and output step by step to spot logic errors.' },
        ],
        memoryAid: 'Function = returns a Final value; Validation = Reasonable; Verification = Copied right!',
      },
    ],
    keyTerms: [
      { term: 'Decomposition', definition: 'Splitting a complex problem into smaller, manageable sub-problems.' },
      { term: 'Validation', definition: 'Automated rules checking entered data is reasonable (range, length, type, presence, format).' },
      { term: 'Verification', definition: 'Checking data accuracy during transfer/entry via double entry or visual check.' },
      { term: 'Trace table', definition: 'Step-by-step table tracking variable values and outputs during a manual dry run.' },
    ],
    checklistPoints: [
      'Write pseudocode for linear search, bubble sort, min/max, totalling, and counting',
      'Distinguish validation from verification and select normal, abnormal, extreme, and boundary test data',
      'Complete trace tables accurately and contrast procedures vs functions and local vs global scope',
    ],
  },

  'cs-6-2': {
    subtopicId: 'cs-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Relational Databases, SQL Queries & Boolean Logic Gates',
    readingMinutes: 11,
    videoTitle: '108. CAMBRIDGE IGCSE (0478-0984) 10 Logic circuits, truth tables and logic expressions',
    youtubeId: 'Db-DGga53u8',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Computer Science (0478)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Database Tables, Primary Keys & Data Types', cardId: 'cs-6-2-c1' },
      { time: '2:50', seconds: 170, label: 'SQL Queries (SELECT, FROM, WHERE, ORDER BY, SUM/COUNT)', cardId: 'cs-6-2-c2' },
      { time: '5:40', seconds: 340, label: 'Boolean Logic Gates (NOT, AND, OR, NAND, NOR, XOR) & Truth Tables', cardId: 'cs-6-2-c3' },
    ],
    cards: [
      {
        id: 'cs-6-2-c1',
        title: 'Database Tables, Fields, Records & Primary Keys',
        summary: 'Tables store records (rows) made of typed fields (columns), uniquely identified by a primary key.',
        bullets: [
          '**Structure** - **Field** = one column (attribute); **Record** = one row (complete entry for one entity); **Primary key** = field uniquely identifying every single record (never duplicated or blank, e.g. `StudentID`).',
          '**Data types** - Text/Alphanumeric (use for phone numbers with leading `0`!), Integer, Real, Boolean, Date/Time.',
        ],
        subsections: [
          {
            heading: 'Choosing a Primary Key',
            bullets: [
              '**Never use Surname or DateOfBirth** - two people can share a name or birthday; always choose a guaranteed-unique ID code.',
            ],
            exampleHeading: 'Concrete check: Why telephone numbers are stored as TEXT',
            examples: [
              'An Integer field would strip leading zeros (e.g. `07700` → `7700`) and disallow `+` or spaces.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'primary key', definition: 'A field in a database table whose value uniquely identifies every single record with no duplicates.' },
        ],
      },
      {
        id: 'cs-6-2-c2',
        title: 'Writing Cambridge 0478 SQL Queries',
        summary: 'Master SELECT, FROM, WHERE (AND/OR), ORDER BY ASC/DESC, COUNT, and SUM.',
        bullets: [
          '**Core SQL syntax** - `SELECT Field1, Field2 FROM TableName WHERE Condition ORDER BY Field1 ASC;`',
          '**Aggregate functions** - `SELECT COUNT(Field)` counts matching records; `SELECT SUM(Field)` totals numeric values.',
        ],
        subsections: [
          {
            heading: 'Worked SQL Query',
            bullets: [
              '**Quotes around text** - wrap string values in quotes (`WHERE Subject = \'Physics\'`), never wrap numeric comparisons (`WHERE Score >= 80`).',
            ],
            exampleHeading: 'Worked example: Names of students scoring > 75 in Maths, sorted A–Z',
            examples: [
              '`SELECT Name FROM Results WHERE Subject = \'Maths\' AND Score > 75 ORDER BY Name ASC;`',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SQL', definition: 'Structured Query Language — standard declarative language used to search, filter, sort, and aggregate database tables.' },
        ],
      },
      {
        id: 'cs-6-2-c3',
        title: 'Six Boolean Logic Gates & Truth Tables',
        summary: 'Know symbols, Boolean expressions, and 4/8-row truth tables for NOT, AND, OR, NAND, NOR, and XOR.',
        bullets: [
          '**NOT (Ā)** - inverts input (0→1, 1→0). **AND (A·B)** - outputs 1 ONLY if both are 1. **OR (A+B)** - outputs 1 if at least one is 1.',
          '**NAND** - opposite of AND (0 only when both 1). **NOR** - opposite of OR (1 only when both 0). **XOR** - outputs 1 ONLY when inputs are **DIFFERENT** (0,1 or 1,0).',
        ],
        subsections: [
          {
            heading: 'Systematic 3-Input Truth Table Rule',
            bullets: [
              '**8 rows in binary order (000 to 111)** - always add intermediate workspace columns for each sub-gate before writing the final output column X!',
            ],
            exampleHeading: 'Worked expression: X = (A AND NOT B) OR C',
            examples: [
              'When A = 1, B = 0, C = 0: NOT B = 1 → (1 AND 1) = 1 → 1 OR 0 = **1**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'XOR gate', definition: 'Exclusive-OR logic gate that outputs 1 if and only if its two inputs are different (one 1 and one 0).' },
          { term: 'truth table', definition: 'A table listing every possible combination of binary inputs to a logic circuit alongside its resulting output.' },
        ],
        diagram: 'logic-gates-truth',
        memoryAid: 'XOR = eXclusively different (1 only when A ≠ B); 3 inputs = 2³ = 8 rows!',
        commonMistake: 'For 3 inputs (A, B, C) NEVER guess random rows — write 000, 001, 010, 011, 100, 101, 110, 111 in strict binary order so no combination is missed!',
      },
    ],
    keyTerms: [
      { term: 'Primary key', definition: 'Field uniquely identifying every record in a database table.' },
      { term: 'SQL', definition: 'Language using SELECT, FROM, WHERE, ORDER BY, COUNT, and SUM to query databases.' },
      { term: 'XOR gate', definition: 'Logic gate outputting 1 exclusively when its two inputs differ.' },
      { term: 'Truth table', definition: 'Complete listing of all binary input combinations and corresponding logic outputs.' },
    ],
    checklistPoints: [
      'Identify fields, records, suitable data types (text for phone numbers), and valid primary keys',
      'Write accurate SQL queries using SELECT, FROM, WHERE, ORDER BY, COUNT, and SUM',
      'Draw circuits, write Boolean expressions, and complete truth tables for NOT, AND, OR, NAND, NOR, and XOR',
    ],
  },
};

export const COMPUTER_SCIENCE_QUIZZES: QuizQuestion[] = [
  // 1.1
  { id: 'cs-q-1-1-1', subtopicId: 'cs-1-1', type: 'short-answer', marks: 2, prompt: 'Convert the 8-bit binary number 10101100 into hexadecimal AND denary.', rubric: { maxMarks: 2, modelAnswer: '1010 = A, 1100 = C → AC in hexadecimal; denary = (10 × 16) + 12 = 172.', markPoints: [{ id: 'mp1', markDescription: 'Hexadecimal AC', requiredKeywordGroups: [['ac']] }, { id: 'mp2', markDescription: 'Denary 172', numericMatch: { value: 172, tolerance: 0.01 } }] }, explanation: 'Split into nibbles: 1010 (10 = A) and 1100 (12 = C) → AC₁₆ = 172₁₀.' },
  { id: 'cs-q-1-1-2', subtopicId: 'cs-1-1', type: 'mcq', marks: 1, prompt: 'What arithmetic operation is performed by a logical LEFT shift of 3 places on an unsigned binary integer?', options: ['Divide by 3', 'Multiply by 6', 'Multiply by 8 (2³)', 'Divide by 8'], correctIndex: 2, explanation: 'Each left shift doubles the value, so 3 left shifts multiply by 2³ = 8.' },
  { id: 'cs-q-1-1-3', subtopicId: 'cs-1-1', type: 'mcq', marks: 1, prompt: 'What is −18 in 8-bit two’s complement binary?', options: ['10010010', '11101110', '11101101', '00010010'], correctIndex: 1, explanation: '+18 = 00010010 → flip: 11101101 → add 1: 11101110 (−128+64+32+8+4+2 = −18).' },
  { id: 'cs-q-1-1-4', subtopicId: 'cs-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the binary overflow and hex facts:', segments: ['Adding two 8-bit integers exceeding 255 causes an ', ' error, and each hexadecimal digit represents exactly ', ' bits.'], wordBank: ['overflow', '4', 'underflow', '8'], answers: ['overflow', '4'], explanation: '9th carry bit causes overflow; 1 hex digit = 1 nibble = 4 bits.' },
  { id: 'cs-q-1-1-5', subtopicId: 'cs-1-1', type: 'multi-select', marks: 2, prompt: 'Select TWO common real-world uses of hexadecimal:', options: ['MAC addresses and IPv6 addresses', 'HTML RGB colour codes (#1A2B3C)', 'Replacing binary inside CPU transistors', 'Compressing MP3 audio'], selectCount: 2, correctIndices: [0, 1], explanation: 'Hex is used for MAC/IPv6 addresses, HTML colours, and memory dumps for human readability.' },

  // 1.2
  { id: 'cs-q-1-2-1', subtopicId: 'cs-1-2', type: 'short-answer', marks: 2, prompt: 'Calculate the uncompressed file size in KiB of a 512 × 256 pixel image with 8-bit colour depth (1 KiB = 1024 bytes).', rubric: { maxMarks: 2, modelAnswer: '512 × 256 × 1 byte = 131,072 bytes; 131,072 ÷ 1024 = 128 KiB.', markPoints: [{ id: 'mp1', markDescription: '131,072 bytes (or 512 × 256 / 1024)', requiredKeywordGroups: [['131072', '131,072', '1024']] }, { id: 'mp2', markDescription: '128 KiB', numericMatch: { value: 128, tolerance: 0.1 } }] }, explanation: '8 bits = 1 byte → 512 × 256 ÷ 1024 = 128 KiB.' },
  { id: 'cs-q-1-2-2', subtopicId: 'cs-1-2', type: 'mcq', marks: 1, prompt: 'Why must LOSSLESS compression (not lossy) be used on a Python source code file?', options: ['Lossy makes files bigger', 'Permanently losing even one character/bit would corrupt the program so it cannot run', 'Lossless only works on music', 'Python only reads JPEG'], correctIndex: 1, explanation: 'Code and text require exact bit-for-bit restoration.' },
  { id: 'cs-q-1-2-3', subtopicId: 'cs-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the sound and character set facts:', segments: ['The number of sound samples recorded per second is the ', ', and ', ' represents global alphabets and emojis.'], wordBank: ['sample rate', 'Unicode', 'colour depth', 'ASCII'], answers: ['sample rate', 'Unicode'], explanation: 'Sample rate (Hz) measures samples/sec; Unicode supports global scripts.' },
  { id: 'cs-q-1-2-4', subtopicId: 'cs-1-2', type: 'mcq', marks: 1, prompt: 'How many distinct colours can be represented using a 4-bit colour depth?', options: ['4', '8', '16', '256'], correctIndex: 2, explanation: '2⁴ = 16 possible colours.' },
  { id: 'cs-q-1-2-5', subtopicId: 'cs-1-2', type: 'matching', marks: 2, prompt: 'Match each format/method to its compression type:', pairs: [{ left: 'JPEG / MP3', right: 'Lossy compression' }, { left: 'Run-Length Encoding (RLE)', right: 'Lossless compression' }, { left: '1 KiB', right: '1,024 bytes' }, { left: '7-bit ASCII', right: '128 English characters' }], explanation: 'Know IEC binary prefixes and compression categories.' },

  // 2.1
  { id: 'cs-q-2-1-1', subtopicId: 'cs-2-1', type: 'mcq', marks: 1, prompt: 'Which transmission mode sends data in BOTH directions SIMULTANEOUSLY?', options: ['Simplex', 'Half-duplex', 'Full-duplex', 'Parallel only'], correctIndex: 2, explanation: 'Full-duplex supports simultaneous bidirectional communication.' },
  { id: 'cs-q-2-1-2', subtopicId: 'cs-2-1', type: 'short-answer', marks: 2, prompt: 'Explain the key difference between symmetric encryption and asymmetric encryption.', rubric: { maxMarks: 2, modelAnswer: 'Symmetric encryption uses the SAME secret key to encrypt and decrypt, whereas asymmetric encryption uses a public key to encrypt and a separate secret private key to decrypt.', markPoints: [{ id: 'mp1', markDescription: 'Symmetric uses one/same shared key', requiredKeywordGroups: [['symmetric'], ['same', 'one', 'single'], ['key']] }, { id: 'mp2', markDescription: 'Asymmetric uses public key + private key', requiredKeywordGroups: [['public'], ['private']] }] }, explanation: 'Asymmetric eliminates the risk of transmitting a shared secret key.' },
  { id: 'cs-q-2-1-3', subtopicId: 'cs-2-1', type: 'mcq', marks: 1, prompt: 'A system uses ODD parity. Which parity bit must be added to data bits 1011001?', options: ['0', '1', '2', 'Either 0 or 1'], correctIndex: 1, explanation: '1011001 has four 1s (even); add parity bit 1 to make five 1s (odd).' },
  { id: 'cs-q-2-1-4', subtopicId: 'cs-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the error-control and packet rules:', segments: ['In ARQ, if no ', ' arrives before the timeout, the packet is resent; packet headers contain the destination IP and ', ' number.'], wordBank: ['acknowledgement', 'sequence', 'check digit', 'skew'], answers: ['acknowledgement', 'sequence'], explanation: 'ARQ relies on acknowledgements + timeouts; sequence numbers allow reassembly.' },
  { id: 'cs-q-2-1-5', subtopicId: 'cs-2-1', type: 'mcq', marks: 1, prompt: 'Why is SERIAL transmission preferred over PARALLEL transmission for long cables like USB and Ethernet?', options: ['Parallel cannot send binary', 'Serial avoids data skew and crosstalk over long distances', 'Serial always uses 8 wires', 'Parallel is simplex only'], correctIndex: 1, explanation: 'In long parallel cables, bits arrive out of sync (skew).' },

  // 3.1
  { id: 'cs-q-3-1-1', subtopicId: 'cs-3-1', type: 'diagram-label', marks: 2, prompt: 'Identify the Von Neumann CPU components in the FDE cycle:', diagram: 'cpu-fde-architecture', labels: [{ marker: 'Holds address of the NEXT instruction', options: ['Program Counter (PC)', 'Accumulator (ACC)', 'ALU'], answer: 'Program Counter (PC)' }, { marker: 'Performs arithmetic & logic calculations', options: ['ALU', 'MAR', 'ROM'], answer: 'ALU' }], explanation: 'PC points to the next instruction; ALU executes calculations.' },
  { id: 'cs-q-3-1-2', subtopicId: 'cs-3-1', type: 'short-answer', marks: 2, prompt: 'State TWO differences between RAM and ROM.', rubric: { maxMarks: 2, modelAnswer: 'RAM is volatile (loses data when power is off) and read/write for open programs, whereas ROM is non-volatile and read-only for storing start-up BIOS/firmware.', markPoints: [{ id: 'mp1', markDescription: 'RAM volatile vs ROM non-volatile', requiredKeywordGroups: [['volatile'], ['non-volatile', 'non volatile', 'permanent']] }, { id: 'mp2', markDescription: 'RAM read/write (open apps) vs ROM read-only (boot/BIOS)', requiredKeywordGroups: [['read-only', 'read only', 'boot', 'bios', 'start-up', 'startup']] }] }, explanation: 'Volatility and mutability/purpose separate RAM and ROM.' },
  { id: 'cs-q-3-1-3', subtopicId: 'cs-3-1', type: 'mcq', marks: 1, prompt: 'Which CPU bus is UNIDIRECTIONAL (one-way only, from CPU to memory)?', options: ['Data bus', 'Address bus', 'Control bus', 'USB bus'], correctIndex: 1, explanation: 'The CPU sends memory addresses one-way along the address bus.' },
  { id: 'cs-q-3-1-4', subtopicId: 'cs-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete the memory and storage facts:', segments: ['Frequently used CPU instructions sit in fast ', ' memory, while overflow pages when RAM is full move to ', ' memory on secondary storage.'], wordBank: ['cache', 'virtual', 'ROM', 'optical'], answers: ['cache', 'virtual'], explanation: 'Cache speeds CPU access; virtual memory prevents crashes when RAM fills.' },
  { id: 'cs-q-3-1-5', subtopicId: 'cs-3-1', type: 'multi-select', marks: 2, prompt: 'Select TWO advantages of Solid-State Drives (SSDs) over Magnetic Hard Disk Drives (HDDs):', options: ['Faster read/write access times', 'No moving parts — durable, silent, and lower power', 'Cheaper per terabyte for huge archives', 'Uses spinning magnetic platters'], selectCount: 2, correctIndices: [0, 1], explanation: 'SSDs use NAND flash memory with zero moving parts.' },

  // 4.1
  { id: 'cs-q-4-1-1', subtopicId: 'cs-4-1', type: 'mcq', marks: 1, prompt: 'Why is an INTERPRETER often preferred over a COMPILER while a programmer is still writing and debugging code?', options: ['It runs faster than compiled code', 'It stops immediately on the first syntax error so bugs can be fixed line by line', 'It hides the source code', 'It requires no RAM'], correctIndex: 1, explanation: 'Line-by-line execution gives instant debugging feedback.' },
  { id: 'cs-q-4-1-2', subtopicId: 'cs-4-1', type: 'short-answer', marks: 2, prompt: 'Describe what the CPU does when a hardware interrupt (such as a keypress) is received.', rubric: { maxMarks: 2, modelAnswer: 'The CPU finishes its current FDE cycle, saves current register contents, executes the Interrupt Service Routine (ISR), and then restores the saved registers to resume the original task.', markPoints: [{ id: 'mp1', markDescription: 'Finishes current cycle & saves register state', requiredKeywordGroups: [['save', 'store', 'stack', 'current'], ['register', 'cycle', 'state']] }, { id: 'mp2', markDescription: 'Executes Interrupt Service Routine (ISR) & resumes', requiredKeywordGroups: [['isr', 'interrupt service routine', 'handler']] }] }, explanation: 'Save state → run ISR → restore state and resume.' },
  { id: 'cs-q-4-1-3', subtopicId: 'cs-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the translator matches:', segments: ['An ', ' translates assembly language into machine code, whereas a ', ' produces a standalone executable file from high-level code.'], wordBank: ['assembler', 'compiler', 'interpreter', 'browser'], answers: ['assembler', 'compiler'], explanation: 'Assembler = assembly; Compiler = full high-level executable.' },
  { id: 'cs-q-4-1-4', subtopicId: 'cs-4-1', type: 'multi-select', marks: 2, prompt: 'Select TWO core functions of an Operating System:', options: ['Memory management and multitasking', 'Managing peripheral device drivers and file systems', 'Compiling Python into JavaScript automatically', 'Encrypting websites with HTML'], selectCount: 2, correctIndices: [0, 1], explanation: 'OS handles memory, multitasking, files, peripherals, UI, and interrupts.' },
  { id: 'cs-q-4-1-5', subtopicId: 'cs-4-1', type: 'mcq', marks: 1, prompt: 'Which IDE tool lets a programmer pause execution on a chosen line to inspect variable values?', options: ['Syntax highlighter', 'Breakpoint / debugger', 'Auto-indent', 'Compiler linker'], correctIndex: 1, explanation: 'Breakpoints pause execution so the programmer can step through and watch variables.' },

  // 5.1
  { id: 'cs-q-5-1-1', subtopicId: 'cs-5-1', type: 'mcq', marks: 1, prompt: 'What is the role of a DNS (Domain Name System) server when you type a URL into a browser?', options: ['Encrypts the web page', 'Translates the human-readable domain name into its numeric IP address', 'Blocks phishing emails', 'Compresses images'], correctIndex: 1, explanation: 'DNS resolves domain names like cognitoedu.org into routable IP addresses.' },
  { id: 'cs-q-5-1-2', subtopicId: 'cs-5-1', type: 'short-answer', marks: 2, prompt: 'Distinguish between PHISHING and PHARMING.', rubric: { maxMarks: 2, modelAnswer: 'Phishing uses deceptive emails/messages to trick a user into clicking a fake link and entering credentials, whereas pharming installs malicious code or poisons DNS to silently redirect users to a fake website even when they type the genuine URL.', markPoints: [{ id: 'mp1', markDescription: 'Phishing: fake email/link tricking user', requiredKeywordGroups: [['email', 'message', 'link', 'trick']] }, { id: 'mp2', markDescription: 'Pharming: malicious code / DNS redirect even with real URL', requiredKeywordGroups: [['redirect'], ['dns', 'malware', 'code', 'legitimate', 'genuine', 'real']] }] }, explanation: 'Phishing lures users via messages; pharming hijacks redirection silently.' },
  { id: 'cs-q-5-1-3', subtopicId: 'cs-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the cyber security defences:', segments: ['A ', ' filters network packets against security rules, and regular offline ', ' protect an organisation against ransomware.'], wordBank: ['firewall', 'backups', 'cookie', 'worm'], answers: ['firewall', 'backups'], explanation: 'Firewalls filter unauthorised packets; offline backups recover encrypted files.' },
  { id: 'cs-q-5-1-4', subtopicId: 'cs-5-1', type: 'mcq', marks: 1, prompt: 'Which type of cyber attack floods a target web server with huge traffic from a botnet of hijacked computers?', options: ['SQL injection', 'DDoS (Distributed Denial of Service)', 'Keylogging', 'Brute force'], correctIndex: 1, explanation: 'DDoS overwhelms server bandwidth/resources using a distributed botnet.' },
  { id: 'cs-q-5-1-5', subtopicId: 'cs-5-1', type: 'matching', marks: 2, prompt: 'Match each malware type to its behaviour:', pairs: [{ left: 'Ransomware', right: 'Encrypts files and demands payment' }, { left: 'Trojan', right: 'Malware disguised as legitimate software' }, { left: 'Worm', right: 'Self-replicates across networks without host file' }, { left: 'Spyware', right: 'Secretly monitors user activity/keystrokes' }], explanation: 'Exact Cambridge 0478 malware definitions.' },

  // 6.1
  { id: 'cs-q-6-1-1', subtopicId: 'cs-6-1', type: 'mcq', marks: 1, prompt: 'A valid exam score is an integer from 0 to 100 inclusive. Which pair represents BOUNDARY test data at the lower limit?', options: ['50 and 60', '−1 and 0', '0 and 100', '"hello" and 150'], correctIndex: 1, explanation: 'Boundary tests pair the valid limit (0) with the immediately invalid neighbour (−1).' },
  { id: 'cs-q-6-1-2', subtopicId: 'cs-6-1', type: 'short-answer', marks: 2, prompt: 'Explain the difference between VALIDATION and VERIFICATION when entering user data, giving one example of each.', rubric: { maxMarks: 2, modelAnswer: 'Validation automatically checks that data is reasonable/obeys rules (e.g. range check or presence check). Verification checks that data has been copied accurately without typing mistakes (e.g. double entry or visual check).', markPoints: [{ id: 'mp1', markDescription: 'Validation = reasonable/rules + example', requiredKeywordGroups: [['reasonable', 'rule', 'range', 'length', 'type', 'presence', 'format']] }, { id: 'mp2', markDescription: 'Verification = copied accurately + example', requiredKeywordGroups: [['double entry', 'visual check', 'copied', 'accurat']] }] }, explanation: 'Validation tests sensibility; verification tests transcription accuracy.' },
  { id: 'cs-q-6-1-3', subtopicId: 'cs-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the loop and subroutine rules:', segments: ['A REPEAT...UNTIL loop always executes at least ', ' time(s), and a ', ' always returns a value to the caller.'], wordBank: ['1', 'function', '0', 'procedure'], answers: ['1', 'function'], explanation: 'Post-condition REPEAT...UNTIL runs ≥ 1 time; functions return a value.' },
  { id: 'cs-q-6-1-4', subtopicId: 'cs-6-1', type: 'mcq', marks: 1, prompt: 'Which search algorithm works on an UNSORTED array by checking items one by one from start to end?', options: ['Linear search', 'Bubble sort', 'Binary search', 'Hash lookup'], correctIndex: 0, explanation: 'Linear search requires no pre-sorting.' },
  { id: 'cs-q-6-1-5', subtopicId: 'cs-6-1', type: 'matching', marks: 2, prompt: 'Match each validation check to its example:', pairs: [{ left: 'Range check', right: 'Age between 11 and 18' }, { left: 'Length check', right: 'Password at least 8 characters' }, { left: 'Presence check', right: 'Email field cannot be left blank' }, { left: 'Format check', right: 'Date matches DD/MM/YYYY' }], explanation: 'Memorise all 6 IGCSE validation checks.' },

  // 6.2
  { id: 'cs-q-6-2-1', subtopicId: 'cs-6-2', type: 'diagram-label', marks: 2, prompt: 'Identify the Boolean logic gate outputs:', diagram: 'logic-gates-truth', labels: [{ marker: 'Outputs 1 ONLY when both inputs are 1', options: ['AND gate', 'OR gate', 'XOR gate'], answer: 'AND gate' }, { marker: 'Outputs 1 ONLY when inputs are DIFFERENT', options: ['XOR gate', 'NAND gate', 'NOR gate'], answer: 'XOR gate' }], explanation: 'AND requires both 1; XOR requires differing inputs.' },
  { id: 'cs-q-6-2-2', subtopicId: 'cs-6-2', type: 'short-answer', marks: 2, prompt: 'Write an SQL query to display the Title and Price of all books in table Books where Price is less than 15, sorted by Title ascending.', rubric: { maxMarks: 2, modelAnswer: 'SELECT Title, Price FROM Books WHERE Price < 15 ORDER BY Title ASC;', markPoints: [{ id: 'mp1', markDescription: 'SELECT Title, Price FROM Books', requiredKeywordGroups: [['select'], ['title'], ['price'], ['from books']] }, { id: 'mp2', markDescription: 'WHERE Price < 15 ORDER BY Title ASC', requiredKeywordGroups: [['where'], ['< 15', '<15'], ['order by']] }] }, explanation: 'Standard SELECT ... FROM ... WHERE ... ORDER BY syntax.' },
  { id: 'cs-q-6-2-3', subtopicId: 'cs-6-2', type: 'mcq', marks: 1, prompt: 'Why should a telephone number like "07700900123" be stored as TEXT rather than INTEGER in a database?', options: ['Text takes less space', 'An Integer field would strip the leading zero (0) and block spaces/+', 'SQL cannot read integers', 'Phone numbers are Boolean'], correctIndex: 1, explanation: 'Numeric integer fields drop leading zeros.' },
  { id: 'cs-q-6-2-4', subtopicId: 'cs-6-2', type: 'fill-blank', marks: 2, prompt: 'Complete the database and truth-table facts:', segments: ['A ', ' uniquely identifies every record in a table, and a 3-input truth table has ', ' rows.'], wordBank: ['primary key', '8', 'foreign key', '6'], answers: ['primary key', '8'], explanation: 'Primary keys have zero duplicates; 3 binary inputs give 2³ = 8 rows.' },
  { id: 'cs-q-6-2-5', subtopicId: 'cs-6-2', type: 'mcq', marks: 1, prompt: 'What is the output of (1 NAND 1) OR (0 XOR 1)?', options: ['0', '1', '2', 'Undefined'], correctIndex: 1, explanation: '1 NAND 1 = 0; 0 XOR 1 = 1; 0 OR 1 = 1.' },
];

export const COMPUTER_SCIENCE_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'cs-fc-1-1-1', subtopicId: 'cs-1-1', front: 'Why do computers use binary?', backBullets: ['Microscopic transistors/logic gates have only two reliable states: ON (1) and OFF (0).'] },
  { id: 'cs-fc-1-1-2', subtopicId: 'cs-1-1', front: 'Why do humans use hexadecimal instead of binary?', backBullets: ['Each hex digit represents 4 bits — shorter, easier to read/debug, fewer transcription errors (MAC, HTML colours, IPv6).'] },
  { id: 'cs-fc-1-1-3', subtopicId: 'cs-1-1', front: 'Effect of logical left shift by n vs right shift by n?', backBullets: ['Left shift by n multiplies by 2ⁿ; Right shift by n integer-divides by 2ⁿ.'] },
  { id: 'cs-fc-1-1-4', subtopicId: 'cs-1-1', front: 'How do you convert a positive binary number to its negative in two’s complement?', backBullets: ['Flip every bit (0↔1) and add 1 (range in 8 bits: −128 to +127).'] },
  { id: 'cs-fc-1-1-5', subtopicId: 'cs-1-1', front: 'What causes an 8-bit binary overflow error?', backBullets: ['Sum exceeds 255, producing a 9th carry bit that cannot fit in an 8-bit register.'] },
  // 1.2
  { id: 'cs-fc-1-2-1', subtopicId: 'cs-1-2', front: 'ASCII vs Unicode?', backBullets: ['7-bit ASCII covers 128 English chars; Unicode (16/32-bit) covers global scripts & emojis using more storage.'] },
  { id: 'cs-fc-1-2-2', subtopicId: 'cs-1-2', front: 'Bitmap image file size formula?', backBullets: ['width × height × colour depth (bits) → ÷ 8 for bytes → ÷ 1024 for KiB.'] },
  { id: 'cs-fc-1-2-3', subtopicId: 'cs-1-2', front: 'Audio file size formula?', backBullets: ['sample rate (Hz) × sample resolution (bits) × duration (s) (×2 for stereo).'] },
  { id: 'cs-fc-1-2-4', subtopicId: 'cs-1-2', front: 'Lossy vs Lossless compression?', backBullets: ['Lossy (JPEG/MP3) permanently removes imperceptible data for tiny files; Lossless (RLE/PNG/ZIP) restores exact original.'] },
  { id: 'cs-fc-1-2-5', subtopicId: 'cs-1-2', front: 'How does Run-Length Encoding (RLE) work?', backBullets: ['Replaces consecutive repeated values with a count + single value (e.g. AAAAABBB → 5A 3B).'] },
  // 2.1
  { id: 'cs-fc-2-1-1', subtopicId: 'cs-2-1', front: 'Three parts of a network data packet?', backBullets: ['Header (sender/dest IP, sequence number), Payload (data), Trailer (end marker + error check).'] },
  { id: 'cs-fc-2-1-2', subtopicId: 'cs-2-1', front: 'Serial vs Parallel transmission?', backBullets: ['Serial (1 wire, 1 bit at a time): reliable over long distance (no skew); Parallel: fast short-range internal buses only.'] },
  { id: 'cs-fc-2-1-3', subtopicId: 'cs-2-1', front: 'Simplex vs Half-duplex vs Full-duplex?', backBullets: ['Simplex = one-way; Half-duplex = both ways, one at a time; Full-duplex = both ways simultaneously.'] },
  { id: 'cs-fc-2-1-4', subtopicId: 'cs-2-1', front: 'How does ARQ detect and fix lost packets?', backBullets: ['Receiver sends acknowledgements; if none arrives before timeout, sender automatically resends the packet.'] },
  { id: 'cs-fc-2-1-5', subtopicId: 'cs-2-1', front: 'Symmetric vs Asymmetric encryption?', backBullets: ['Symmetric: one shared secret key for encrypt & decrypt; Asymmetric: public key encrypts, secret private key decrypts.'] },
  // 3.1
  { id: 'cs-fc-3-1-1', subtopicId: 'cs-3-1', front: 'Roles of PC, MAR, MDR, CIR, and ACC registers?', backBullets: ['PC: next address; MAR: current address; MDR: fetched data/instruction; CIR: current instruction; ACC: ALU results.'] },
  { id: 'cs-fc-3-1-2', subtopicId: 'cs-3-1', front: 'Directions of the 3 system buses?', backBullets: ['Address bus: unidirectional (CPU → RAM); Data & Control buses: bidirectional.'] },
  { id: 'cs-fc-3-1-3', subtopicId: 'cs-3-1', front: 'Three factors improving CPU performance?', backBullets: ['Higher clock speed (more cycles/s), larger cache (faster frequent access), more cores (parallel execution).'] },
  { id: 'cs-fc-3-1-4', subtopicId: 'cs-3-1', front: 'RAM vs ROM?', backBullets: ['RAM: volatile, read/write, holds open OS/apps; ROM: non-volatile, read-only, holds boot/BIOS instructions.'] },
  { id: 'cs-fc-3-1-5', subtopicId: 'cs-3-1', front: 'What is virtual memory?', backBullets: ['A section of secondary storage used as temporary overflow when RAM becomes full.'] },
  // 4.1
  { id: 'cs-fc-4-1-1', subtopicId: 'cs-4-1', front: 'Six core functions of an Operating System?', backBullets: ['Memory management, multitasking, file management, peripheral drivers, user interface, security & interrupt handling.'] },
  { id: 'cs-fc-4-1-2', subtopicId: 'cs-4-1', front: 'How does the CPU handle an interrupt?', backBullets: ['Finishes current FDE cycle → saves registers → executes Interrupt Service Routine (ISR) → restores state & resumes.'] },
  { id: 'cs-fc-4-1-3', subtopicId: 'cs-4-1', front: 'Compiler vs Interpreter?', backBullets: ['Compiler translates all at once into fast standalone executable; Interpreter runs line-by-line stopping at first error.'] },
  { id: 'cs-fc-4-1-4', subtopicId: 'cs-4-1', front: 'What translates assembly language?', backBullets: ['An assembler (1-to-1 conversion of mnemonics into machine code).'] },
  { id: 'cs-fc-4-1-5', subtopicId: 'cs-4-1', front: 'Four helpful features of an IDE?', backBullets: ['Code editor (syntax highlighting/auto-complete), translator, runtime debugger (breakpoints), error diagnostics.'] },
  // 5.1
  { id: 'cs-fc-5-1-1', subtopicId: 'cs-5-1', front: 'Role of DNS?', backBullets: ['Translates human-readable domain names into numeric IP addresses.'] },
  { id: 'cs-fc-5-1-2', subtopicId: 'cs-5-1', front: 'Phishing vs Pharming?', backBullets: ['Phishing: fake emails/links tricking users; Pharming: DNS poisoning/malware redirecting silently even with genuine URL.'] },
  { id: 'cs-fc-5-1-3', subtopicId: 'cs-5-1', front: 'How does a DDoS attack work?', backBullets: ['Botnet of infected devices floods a target server with requests, crashing legitimate access.'] },
  { id: 'cs-fc-5-1-4', subtopicId: 'cs-5-1', front: 'Virus vs Worm vs Trojan?', backBullets: ['Virus needs host file; Worm self-replicates across networks standalone; Trojan disguises as legitimate software.'] },
  { id: 'cs-fc-5-1-5', subtopicId: 'cs-5-1', front: 'How do firewalls, 2FA, and offline backups protect systems?', backBullets: ['Firewall filters unauthorised packets; 2FA adds second login proof; offline backups restore ransomware-encrypted files.'] },
  // 6.1
  { id: 'cs-fc-6-1-1', subtopicId: 'cs-6-1', front: 'WHILE vs REPEAT...UNTIL loop?', backBullets: ['WHILE checks condition at start (0+ runs); REPEAT...UNTIL checks at end (always ≥ 1 run).'] },
  { id: 'cs-fc-6-1-2', subtopicId: 'cs-6-1', front: 'Validation vs Verification?', backBullets: ['Validation checks data is reasonable (range/type/length/presence/format); Verification checks accurate copying (double entry/visual check).'] },
  { id: 'cs-fc-6-1-3', subtopicId: 'cs-6-1', front: 'Four test data types for range 1–100?', backBullets: ['Normal (50), Abnormal (−5 / "abc"), Extreme (1 and 100), Boundary (0 & 1 or 100 & 101).'] },
  { id: 'cs-fc-6-1-4', subtopicId: 'cs-6-1', front: 'Procedure vs Function?', backBullets: ['Function returns a value to the calling program; Procedure executes tasks without returning a value.'] },
  { id: 'cs-fc-6-1-5', subtopicId: 'cs-6-1', front: 'How does bubble sort work?', backBullets: ['Repeatedly compares adjacent items and swaps if out of order until a full pass has zero swaps.'] },
  // 6.2
  { id: 'cs-fc-6-2-1', subtopicId: 'cs-6-2', front: 'What is a primary key?', backBullets: ['A database field uniquely identifying every record with no duplicates or blanks.'] },
  { id: 'cs-fc-6-2-2', subtopicId: 'cs-6-2', front: 'Why store phone numbers as Text instead of Integer?', backBullets: ['Integer fields strip leading zeros (e.g. 07700) and reject spaces or + signs.'] },
  { id: 'cs-fc-6-2-3', subtopicId: 'cs-6-2', front: 'Core SQL clause order?', backBullets: ['SELECT fields FROM table WHERE condition ORDER BY field ASC/DESC;'] },
  { id: 'cs-fc-6-2-4', subtopicId: 'cs-6-2', front: 'Truth table rule for XOR gate?', backBullets: ['Outputs 1 if and only if the two inputs are DIFFERENT (0,1 or 1,0).'] },
  { id: 'cs-fc-6-2-5', subtopicId: 'cs-6-2', front: 'How many rows are in a 3-input vs 4-input truth table?', backBullets: ['3 inputs = 2³ = 8 rows; 4 inputs = 2⁴ = 16 rows.'] },
];

export const COMPUTER_SCIENCE_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'cs-cs-1', slug: 'topic-1-data-rep', title: '1. Data Representation Cheat Sheet', topicNumber: 1, topicName: 'Data Representation', summary: 'Binary, hex, two’s complement, shifts, file sizes & RLE compression.', accentColor: '#0284C7', sections: [{ heading: 'Key Formulae', points: ['1 hex digit = 4 bits; 1 KiB = 1024 bytes', 'Image = w × h × colour depth; Sound = rate × bit depth × seconds', 'Two’s complement negative: flip bits + 1'] }, { heading: 'Exam Traps', points: ['Divide by 1024 (not 1000) for KiB/MiB', 'Never use lossy compression on code or text'] }] },
  { id: 'cs-cs-2', slug: 'topic-2-transmission', title: '2. Data Transmission Cheat Sheet', topicNumber: 2, topicName: 'Data Transmission & Error Detection', summary: 'Packets, serial/parallel, parity, checksum, ARQ & encryption.', accentColor: '#0284C7', sections: [{ heading: 'Core Concepts', points: ['Packet: Header (IPs + sequence), Payload, Trailer (CRC)', 'Serial avoids skew over long distances; Full-duplex = simultaneous both ways', 'Asymmetric: Public encrypts, Private decrypts'] }, { heading: 'Exam Traps', points: ['Encryption does NOT stop interception — it makes intercepted data unreadable'] }] },
  { id: 'cs-cs-3', slug: 'topic-3-hardware', title: '3. Hardware & CPU Cheat Sheet', topicNumber: 3, topicName: 'Hardware & CPU Architecture', summary: 'Von Neumann, FDE registers, buses, cache, RAM/ROM & SSDs.', accentColor: '#0284C7', sections: [{ heading: 'Registers & Buses', points: ['PC → MAR → RAM → MDR → CIR → CU/ALU/ACC', 'Address bus = unidirectional; Data/Control = bidirectional', 'RAM volatile; ROM non-volatile; SSD = flash, no moving parts'] }, { heading: 'Exam Traps', points: ['Don’t confuse fast CPU cache with slow secondary-storage virtual memory'] }] },
  { id: 'cs-cs-4', slug: 'topic-4-software', title: '4. Software & Translators Cheat Sheet', topicNumber: 4, topicName: 'Software & Operating Systems', summary: 'OS tasks, interrupts/ISRs, high/low-level & compilers vs interpreters.', accentColor: '#0284C7', sections: [{ heading: 'Translators', points: ['Compiler: whole program → fast standalone executable', 'Interpreter: line-by-line → best for debugging', 'Assembler: translates assembly mnemonics 1-to-1'] }, { heading: 'Exam Traps', points: ['CPU finishes current FDE cycle before saving state and running ISR'] }] },
  { id: 'cs-cs-5', slug: 'topic-5-internet-security', title: '5. Internet & Cyber Security Cheat Sheet', topicNumber: 5, topicName: 'The Internet & Cyber Security', summary: 'DNS, HTTPS/TLS, phishing/pharming, DDoS, malware & firewalls.', accentColor: '#0284C7', sections: [{ heading: 'Threats & Defences', points: ['DNS resolves domain → IP; HTTPS uses TLS certificates', 'Phishing (fake email) vs Pharming (DNS/malware redirect)', 'Firewalls, 2FA, biometrics, offline backups, parameterised SQL'] }, { heading: 'Exam Traps', points: ['Worms self-replicate without a host file; viruses attach to host files'] }] },
  { id: 'cs-cs-6', slug: 'topic-6-algorithms-logic', title: '6. Algorithms, SQL & Logic Cheat Sheet', topicNumber: 6, topicName: 'Algorithms, Programming, Databases & Boolean Logic', summary: 'Search/sort, validation/verification, SQL queries & 6 logic gates.', accentColor: '#0284C7', sections: [{ heading: 'SQL & Logic', points: ['SELECT ... FROM ... WHERE ... ORDER BY ... ASC/DESC', 'NOT, AND, OR, NAND, NOR, XOR (1 only when inputs differ)', 'Validation = reasonable; Verification = copied accurately'] }, { heading: 'Exam Traps', points: ['Store phone numbers as TEXT so leading 0s are not stripped'] }] },
];

export const COMPUTER_SCIENCE_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'cs-ex-1-1', subtopicId: 'cs-1-1', number: 1, stimulus: '[Cambridge IGCSE 0478 Paper 1 Style] A register stores 8-bit two’s complement integers.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Convert −42 into 8-bit two’s complement binary and state why programmers often display register dumps in hexadecimal.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: '+42 = 00101010 → flip 11010101 → add 1 = 11010110. Hexadecimal is shorter, easier for humans to read/debug, and reduces transcription errors (1 hex digit = 4 bits).', markPoints: [{ id: 'mp1', markDescription: 'Correct 8-bit binary 11010110', requiredKeywordGroups: [['11010110']] }, { id: 'mp2', markDescription: 'Hex shorter / easier to read', requiredKeywordGroups: [['shorter', 'easier to read', 'human', 'fewer errors']] }, { id: 'mp3', markDescription: '4 bits per hex digit', requiredKeywordGroups: [['4 bits', 'four bits', 'nibble', '16']] }] } },
  ] },
  { id: 'cs-ex-1-2', subtopicId: 'cs-1-2', number: 2, stimulus: '[Cambridge IGCSE 0478 Paper 1 Style] A photographer stores raw bitmaps of 1024 × 1024 pixels with 24-bit colour depth and wants to email them quickly.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Calculate the uncompressed image size in MiB and explain whether lossy or lossless compression is better for emailing preview photos.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: '1024 × 1024 × 3 bytes = 3,145,728 bytes = 3 MiB. Lossy compression (JPEG) is better for previews because it produces much smaller files for faster emailing while removing detail barely noticed by the human eye.', markPoints: [{ id: 'mp1', markDescription: '3 MiB', numericMatch: { value: 3, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Recommends lossy compression', requiredKeywordGroups: [['lossy', 'jpeg']] }, { id: 'mp3', markDescription: 'Smaller file / faster transfer / minor imperceptible quality loss', requiredKeywordGroups: [['smaller', 'faster', 'bandwidth', 'imperceptible', 'unnoticeable']] }] } },
  ] },
  { id: 'cs-ex-2-1', subtopicId: 'cs-2-1', number: 3, stimulus: '[Cambridge IGCSE 0478 Paper 1 Style] A hospital sends confidential patient records across the internet using packet switching and asymmetric encryption.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Describe how packet switching delivers the file and explain how asymmetric encryption keeps the records confidential if intercepted.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'File is split into numbered packets routed independently by routers along the fastest routes and reassembled at the destination using sequence numbers. Data is encrypted with the receiver’s public key so intercepted ciphertext is unreadable without the receiver’s secret private key.', markPoints: [{ id: 'mp1', markDescription: 'Split into numbered packets routed independently & reassembled', requiredKeywordGroups: [['packet', 'router'], ['reassembl', 'reorder', 'sequence']] }, { id: 'mp2', markDescription: 'Public key encrypts, private key decrypts', requiredKeywordGroups: [['public'], ['private']] }, { id: 'mp3', markDescription: 'Unreadable / meaningless if intercepted', requiredKeywordGroups: [['unreadable', 'meaningless', 'ciphertext', 'cannot read']] }] } },
  ] },
  { id: 'cs-ex-3-1', subtopicId: 'cs-3-1', number: 4, stimulus: '[Cambridge IGCSE 0478 Paper 1 Style] A student upgrades a laptop from a single-core CPU with an HDD to a quad-core CPU with larger cache and an SSD.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how larger cache memory and switching to an SSD improve system performance.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Larger cache stores more frequently used instructions/data close to the CPU, reducing slower fetches from RAM. An SSD uses solid-state NAND flash with no moving parts, giving much faster read/write boot and load speeds than a mechanical HDD.', markPoints: [{ id: 'mp1', markDescription: 'Cache holds frequent data/instructions near CPU', requiredKeywordGroups: [['frequent', 'close to cpu', 'faster than ram']] }, { id: 'mp2', markDescription: 'SSD has no moving parts / NAND flash', requiredKeywordGroups: [['no moving parts', 'flash', 'solid']] }, { id: 'mp3', markDescription: 'Faster read/write / boot times', requiredKeywordGroups: [['faster'], ['read', 'write', 'load', 'access', 'boot']] }] } },
  ] },
  { id: 'cs-ex-4-1', subtopicId: 'cs-4-1', number: 5, stimulus: '[Cambridge IGCSE 0478 Paper 1 Style] A software company develops a mobile game in a high-level language and releases it commercially.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain why the company uses an interpreter during testing but a compiler for the final commercial release.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'An interpreter runs line by line and halts at the first syntax error, making debugging fast during development. A compiler produces a fast standalone machine-code executable that runs without needing a translator and hides proprietary source code from customers.', markPoints: [{ id: 'mp1', markDescription: 'Interpreter: line-by-line / easy debugging', requiredKeywordGroups: [['line by line', 'line-by-line', 'first error', 'debug']] }, { id: 'mp2', markDescription: 'Compiler: faster execution / standalone executable', requiredKeywordGroups: [['standalone', 'executable', 'faster']] }, { id: 'mp3', markDescription: 'Protects/hides source code', requiredKeywordGroups: [['source code', 'protect', 'hide', 'translator not needed']] }] } },
  ] },
  { id: 'cs-ex-5-1', subtopicId: 'cs-5-1', number: 6, stimulus: '[Cambridge IGCSE 0478 Paper 1 Style] An online bank suffers a wave of phishing emails and a DDoS attack on its login portal.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how a DDoS attack disrupts the bank’s website and state TWO technical security measures to protect customer accounts.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'A botnet of compromised devices floods the bank’s server with huge traffic so it crashes/cannot serve real customers. Defences: two-factor authentication (2FA), firewalls/proxy traffic filtering, HTTPS/TLS certificates, and biometrics.', markPoints: [{ id: 'mp1', markDescription: 'Botnet floods server denying genuine access', requiredKeywordGroups: [['flood', 'overwhelm', 'botnet'], ['server', 'legitimate', 'access']] }, { id: 'mp2', markDescription: 'Security measure 1 (2FA / biometrics / firewall / proxy)', requiredKeywordGroups: [['2fa', 'two-factor', 'biometric', 'firewall', 'proxy']] }, { id: 'mp3', markDescription: 'Security measure 2 (HTTPS / TLS / strong passwords)', requiredKeywordGroups: [['https', 'tls', 'ssl', 'password', 'firewall', 'biometric', '2fa']] }] } },
  ] },
  { id: 'cs-ex-6-1', subtopicId: 'cs-6-1', number: 7, stimulus: '[Cambridge IGCSE 0478 Paper 2 Style] A school portal accepts student test marks from 0 to 50 inclusive.', parts: [
    { id: 'p1', label: '(a)', prompt: 'State TWO suitable validation checks for the mark input and give one example each of normal, abnormal, and extreme test data.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Validation: range check (0–50) and type check (integer) or presence check. Test data: Normal = 25, Abnormal = −5 or 60 (or "abc"), Extreme = 0 or 50.', markPoints: [{ id: 'mp1', markDescription: '2 validation checks (range, type, presence)', requiredKeywordGroups: [['range'], ['type', 'presence', 'length']] }, { id: 'mp2', markDescription: 'Normal + Abnormal examples', requiredKeywordGroups: [['normal'], ['abnormal']] }, { id: 'mp3', markDescription: 'Extreme = 0 or 50', requiredKeywordGroups: [['0', '50']] }] } },
  ] },
  { id: 'cs-ex-6-2', subtopicId: 'cs-6-2', number: 8, stimulus: '[Cambridge IGCSE 0478 Paper 2 Style] A factory alarm X activates (`X = 1`) when Sensor A is OFF (`0`) AND Sensor B is ON (`1`), OR when Override C is ON (`1`).', parts: [
    { id: 'p1', label: '(a)', prompt: 'Write the Boolean logic expression for X and evaluate X when A = 0, B = 1, C = 0 and when A = 1, B = 1, C = 0.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'X = ((NOT A) AND B) OR C. When A=0, B=1, C=0 → X = 1. When A=1, B=1, C=0 → X = 0.', markPoints: [{ id: 'mp1', markDescription: 'Expression ((NOT A) AND B) OR C', requiredKeywordGroups: [['not a'], ['and b'], ['or c']] }, { id: 'mp2', markDescription: 'X = 1 for (0,1,0)', requiredKeywordGroups: [['1']] }, { id: 'mp3', markDescription: 'X = 0 for (1,1,0)', requiredKeywordGroups: [['0']] }] } },
  ] },
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
  { id: 'cs-kt-1', term: 'Hexadecimal', definition: 'Base-16 shorthand (0–9, A–F) representing 4 binary bits per digit.', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-2', term: 'Two’s Complement', definition: 'Signed binary representation with negative MSB weight (−128 in 8 bits).', topicNumber: 1, subtopicId: 'cs-1-1', subtopicCode: '1.1' },
  { id: 'cs-kt-3', term: 'Lossless Compression', definition: 'Reduces file size while permitting exact bit-for-bit restoration (e.g. RLE).', topicNumber: 1, subtopicId: 'cs-1-2', subtopicCode: '1.2' },
  { id: 'cs-kt-4', term: 'Packet Switching', definition: 'Routing numbered data packets independently across fastest paths and reassembling at destination.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-5', term: 'Asymmetric Encryption', definition: 'Public key encrypts data; matching secret private key decrypts it.', topicNumber: 2, subtopicId: 'cs-2-1', subtopicCode: '2.1' },
  { id: 'cs-kt-6', term: 'Von Neumann Architecture', definition: 'Stored-program design keeping instructions and data together in main memory.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-7', term: 'Virtual Memory', definition: 'Secondary storage temporarily holding overflow pages when RAM is full.', topicNumber: 3, subtopicId: 'cs-3-1', subtopicCode: '3.1' },
  { id: 'cs-kt-8', term: 'Interrupt', definition: 'Hardware or software signal requesting CPU attention via an Interrupt Service Routine.', topicNumber: 4, subtopicId: 'cs-4-1', subtopicCode: '4.1' },
  { id: 'cs-kt-9', term: 'Compiler', definition: 'Translates an entire high-level program into a fast standalone machine-code executable.', topicNumber: 4, subtopicId: 'cs-4-1', subtopicCode: '4.1' },
  { id: 'cs-kt-10', term: 'DNS', definition: 'Domain Name System translating human-readable domain names into IP addresses.', topicNumber: 5, subtopicId: 'cs-5-1', subtopicCode: '5.1' },
  { id: 'cs-kt-11', term: 'Pharming', definition: 'Silent redirection to a fake website via compromised DNS or local malware.', topicNumber: 5, subtopicId: 'cs-5-1', subtopicCode: '5.1' },
  { id: 'cs-kt-12', term: 'Validation', definition: 'Automated checks verifying entered data is reasonable (range, length, type, format, presence).', topicNumber: 6, subtopicId: 'cs-6-1', subtopicCode: '6.1' },
  { id: 'cs-kt-13', term: 'Primary Key', definition: 'Database field uniquely identifying every single record.', topicNumber: 6, subtopicId: 'cs-6-2', subtopicCode: '6.2' },
  { id: 'cs-kt-14', term: 'XOR Gate', definition: 'Logic gate outputting 1 exclusively when its two binary inputs differ.', topicNumber: 6, subtopicId: 'cs-6-2', subtopicCode: '6.2' },
];
