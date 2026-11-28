import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const IGCSE_CS_UNITS_1_3_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Data Representation',
    subtopics: [
      {
        id: 'cs-1-1',
        code: '1.1',
        slug: '1.1-binary-hex-twos-complement-shifts',
        title: 'Number Systems: Binary, Hexadecimal, Binary Addition, Shifts & Two’s Complement',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'cs-1-2',
        code: '1.2',
        slug: '1.2-text-sound-bitmap-images',
        title: 'Text (ASCII & Unicode), Sound Sampling & Bitmap Images',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-1-3',
        code: '1.3',
        slug: '1.3-data-storage-file-size-compression',
        title: 'Data Storage Units (KiB/MiB), File Size Calculations & Compression',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Data Transmission',
    subtopics: [
      {
        id: 'cs-2-1',
        code: '2.1',
        slug: '2.1-packets-switching-serial-parallel-usb',
        title: 'Packet Structure, Packet Switching, Serial/Parallel Transmission & USB',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'cs-2-2',
        code: '2.2',
        slug: '2.2-error-detection-parity-checksum-arq',
        title: 'Error Detection: Parity Bits, Checksums, Echo Checks, Check Digits & ARQ',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'cs-2-3',
        code: '2.3',
        slug: '2.3-symmetric-asymmetric-encryption',
        title: 'Symmetric & Asymmetric Encryption (Public & Private Keys)',
        readingMinutes: 9,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Hardware',
    subtopics: [
      {
        id: 'cs-3-1',
        code: '3.1',
        slug: '3.1-von-neumann-fde-cpu-embedded',
        title: 'Von Neumann Architecture, FDE Cycle, CPU Performance & Embedded Systems',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'cs-3-2',
        code: '3.2',
        slug: '3.2-input-output-sensors-network-hardware',
        title: 'Input/Output Devices, Sensors & Network Hardware (NIC, MAC, IP & Routers)',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'cs-3-3',
        code: '3.3',
        slug: '3.3-primary-secondary-virtual-cloud-storage',
        title: 'Primary Memory (RAM/ROM), Secondary Storage, Virtual Memory & Cloud Storage',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_CS_UNITS_1_3_NOTES: Record<string, NoteLesson> = {
  'cs-1-1': {
    subtopicId: 'cs-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Number Systems: Binary, Hexadecimal, Binary Addition, Shifts & Two’s Complement',
    readingMinutes: 11,
    videoTitle: '1. CAMBRIDGE IGCSE (0478-0984) 1.1 How and why computers use binary to represent all forms of data',
    youtubeId: '4ZfqXkptPus',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:45',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Binary? Denary–Binary–Hex Conversions', cardId: 'cs-1-1-c1' },
      { time: '2:40', seconds: 160, label: '8-Bit Binary Addition, Overflow & Logical Shifts', cardId: 'cs-1-1-c2' },
      { time: '5:15', seconds: 315, label: 'Signed Integers Using Two’s Complement', cardId: 'cs-1-1-c3' },
    ],
    cards: [
      {
        id: 'cs-1-1-c1',
        title: 'Binary Logic & Hexadecimal Shorthand',
        summary: 'Transistors store two states (0/1); hexadecimal groups 4 binary bits into one digit (0–9, A–F) for compact human reading.',
        bullets: [
          '**Why computers use binary** — CPUs are built from billions of microscopic **transistors** acting as logic switches with only two reliable voltage states: **OFF (0)** and **ON (1)**.',
          '**Why programmers use hexadecimal** — `1 hex digit = 4 bits (1 nibble)`, making long binary registers shorter, faster to read, and far less error-prone for humans.',
          '**Exam uses of hexadecimal** — **MAC addresses** (`A4:5E:60:C8:11:F2`), **HTML/CSS RGB colours** (`#FF2A00`), **IPv6 addresses**, **error codes**, and **memory dumps**.',
        ],
        subsections: [
          {
            heading: 'Converting Binary ↔ Hexadecimal ↔ Denary',
            bullets: [
              '**Split into 4-bit nibbles** from right to left using place weights `8, 4, 2, 1`, mapping `10→A, 11→B, 12→C, 13→D, 14→E, 15→F`.',
            ],
            exampleHeading: 'Worked example: Convert `1011 0110₂` to Hex and Denary',
            examples: [
              'Left nibble `1011` = `8 + 2 + 1 = 11 = B`; right nibble `0110` = `4 + 2 = 6` → **`B6₁₆`**.',
              'Denary = `(11 × 16) + 6 = 176 + 6 = 182`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hexadecimal', definition: 'Base-16 number system (0–9 and A–F) where each digit represents exactly 4 binary bits.' },
          { term: 'nibble', definition: 'A group of 4 binary bits (half a byte) representing denary values 0 to 15.' },
        ],
      },
      {
        id: 'cs-1-1-c2',
        title: '8-Bit Binary Addition, Overflow & Logical Shifts',
        summary: 'Overflow occurs when an 8-bit sum exceeds 255; logical shifts left multiply by 2ⁿ and right shifts divide by 2ⁿ.',
        bullets: [
          '**Binary addition rules** — `0+0=0`, `0+1=1`, `1+1=0 carry 1`, `1+1+1=1 carry 1`.',
          '**Overflow error** — occurs when the result of an 8-bit unsigned addition requires a **9th bit** (`sum > 255`), causing data loss because the fixed 8-bit register truncates the carry.',
          '**Logical shifts** — shifting **left by n places** multiplies by `2ⁿ` (inserts `0`s on the right); shifting **right by n places** performs integer division by `2ⁿ` (inserts `0`s on the left, discarding shifted-out bits).',
        ],
        subsections: [
          {
            heading: 'Worked 8-Bit Shift & Overflow Check',
            bullets: [
              '**Precision / overflow trap** — shifting a `1` off the MSB (left) causes overflow; shifting a `1` off the LSB (right) loses fractional precision.',
            ],
            exampleHeading: 'Worked example: Shift `00010110` (22) left by 2 places',
            examples: [
              '`00010110 << 2 = 01011000` = `64 + 16 + 8 = 88` (`22 × 2² = 88`, zero overflow because no `1` left the MSB).',
              'Adding `11001000` (200) + `01000110` (70) = `(1) 00001110` → **9th carry bit = overflow error** (270 > 255).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'overflow error', definition: 'Condition where a calculation result exceeds the maximum value storable in the allocated bit width (e.g. > 255 in 8 bits).' },
        ],
      },
      {
        id: 'cs-1-1-c3',
        title: 'Two’s Complement Signed Integers (−128 to +127)',
        summary: 'In 8-bit two’s complement, the leftmost bit carries weight −128 so positive and negative integers share identical adder hardware.',
        bullets: [
          '**Place values** — `−128, 64, 32, 16, 8, 4, 2, 1`, giving an 8-bit signed range of **`−128` to `+127`**.',
          '**Sign bit test** — if the MSB (leftmost bit) is `1`, the number is negative; if `0`, the number is positive or zero.',
          '**Negation rule** — take the positive 8-bit binary pattern, **invert every bit (`0↔1`)**, and **add `1`**.',
        ],
        subsections: [
          {
            heading: 'Worked Negative Integer Conversion',
            bullets: [
              '**Double-check by summing place weights** — always verify your answer by adding `−128` plus all positive `1`-bit weights.',
            ],
            exampleHeading: 'Worked example: Convert `−25` into 8-bit two’s complement',
            examples: [
              '`+25` = `00011001` → invert bits: `11100110` → add `1`: **`11100111`**.',
              'Check: `−128 + 64 + 32 + 4 + 2 + 1 = −25` ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'two’s complement', definition: 'Signed binary encoding where the most significant bit carries a negative weight (−128 in 8 bits).' },
        ],
        memoryAid: 'Two’s complement = Flip all bits, Add 1! Left shift = ×2ⁿ, Right shift = ÷2ⁿ.',
        commonMistake: 'Writing +128 in 8-bit two’s complement as 10000000 — 10000000 is actually −128! The maximum positive 8-bit two’s complement integer is +127 (01111111).',
      },
    ],
    keyTerms: [
      { term: 'Binary (Base-2)', definition: 'Number system using only digits 0 and 1 matching two transistor voltage states.' },
      { term: 'Hexadecimal (Base-16)', definition: 'Compact base-16 notation (0–9, A–F) representing 4 binary bits per character.' },
      { term: 'Overflow Error', definition: 'Error when an arithmetic result requires more bits than the register can hold (e.g. > 255 in 8-bit unsigned).' },
      { term: 'Two’s Complement', definition: 'Signed binary representation where the leftmost bit has weight −128 (range −128 to +127).' },
      { term: 'Logical Binary Shift', definition: 'Moving all bits left (×2ⁿ) or right (÷2ⁿ) while filling vacated positions with 0s.' },
    ],
    checklistPoints: [
      'Convert fluently between denary, 8-bit binary, and hexadecimal',
      'Perform 8-bit binary addition, spot overflow, and trace logical left/right shifts',
      'Encode and decode negative integers using 8-bit two’s complement (−128 to +127)',
    ],
  },

  'cs-1-2': {
    subtopicId: 'cs-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Text (ASCII & Unicode), Sound Sampling & Bitmap Images',
    readingMinutes: 10,
    videoTitle: '9. CAMBRIDGE IGCSE (0478-0984) 1.2 Representing characters and character sets',
    youtubeId: '2RMQd0wpRI0',
    videoChannel: "Craig'n'Dave",
    videoDuration: '6:52',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Character Sets: ASCII vs Extended ASCII vs Unicode', cardId: 'cs-1-2-c1' },
      { time: '2:25', seconds: 145, label: 'Digital Sound: Sample Rate & Sample Resolution', cardId: 'cs-1-2-c2' },
      { time: '4:40', seconds: 280, label: 'Bitmap Images: Pixels, Resolution & Colour Depth', cardId: 'cs-1-2-c3' },
    ],
    cards: [
      {
        id: 'cs-1-2-c1',
        title: 'Character Sets: ASCII vs Unicode',
        summary: 'Character sets map every symbol to a unique binary code; ASCII uses 7 bits (128 chars) while Unicode uses 16–32 bits for global scripts and emoji.',
        bullets: [
          '**Standard ASCII** — uses **7 bits** per character (`2⁷ = 128` codes), covering English uppercase (`A = 65`), lowercase (`a = 97`), digits (`0 = 48`), and control characters.',
          '**Extended ASCII** — uses **8 bits** (`256` codes) to add accented European characters, still insufficient for Arabic, Mandarin, Hindi, or emoji.',
          '**Unicode (UTF-8 / UTF-16 / UTF-32)** — assigns unique code points to over **149,000 characters** across every world writing system and emoji, while remaining backward-compatible with ASCII in UTF-8; trade-off is **more bits per character → larger text files**.',
        ],
        subsections: [
          {
            heading: 'Sequential ASCII Codes',
            bullets: [
              "**Consecutive codes** — because characters are ordered sequentially, if `'A' = 65` (`01000001`), then `'D' = 65 + 3 = 68` (`01000100`).",
            ],
            exampleHeading: 'Worked example: Compare file size for 1,000 characters',
            examples: [
              '8-bit Extended ASCII: `1,000 × 8 bits = 8,000 bits = 1,000 bytes`.',
              '16-bit UTF-16 Unicode: `1,000 × 16 bits = 16,000 bits = 2,000 bytes` (double the storage, global language support).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'character set', definition: 'Complete table mapping every representable text symbol to its unique binary code.' },
          { term: 'Unicode', definition: 'Universal character encoding supporting all international scripts and emoji using 16–32 bits per character.' },
        ],
      },
      {
        id: 'cs-1-2-c2',
        title: 'Analogue-to-Digital Sound Sampling',
        summary: 'Continuous sound waves are sampled at fixed intervals (sample rate in Hz) and quantised to a bit depth (sample resolution).',
        bullets: [
          '**Sample rate (Hz)** — number of amplitude measurements taken **per second** (e.g. CD audio = `44,100 Hz`). Higher sample rate captures rapid wave changes more faithfully.',
          '**Sample resolution (bit depth)** — number of **bits stored per sample** (e.g. `16 bits = 65,536` distinct amplitude levels). Higher resolution gives wider dynamic range and lower quantisation error.',
          '**Trade-off** — raising either sample rate or sample resolution improves audio fidelity **but increases file size proportionally**.',
        ],
        subsections: [
          {
            heading: 'Sound File Size Formula',
            bullets: [
              '**Mono formula**: `File size (bits) = Sample Rate (Hz) × Sample Resolution (bits) × Duration (s)` (multiply by `2` for stereo).',
            ],
            exampleHeading: 'Worked example: 10 s mono clip at 16,000 Hz and 8-bit resolution',
            examples: [
              'Bits = `16,000 × 8 × 10 = 1,280,000 bits`.',
              'Bytes = `1,280,000 ÷ 8 = 160,000 bytes` (`≈ 156.25 KiB`).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sample rate', definition: 'Number of sound wave amplitude samples captured per second, measured in Hertz (Hz).' },
          { term: 'sample resolution', definition: 'Number of bits allocated to store each individual audio sample amplitude.' },
        ],
      },
      {
        id: 'cs-1-2-c3',
        title: 'Bitmap Images: Pixels, Resolution & Colour Depth',
        summary: 'Bitmap images store a grid of pixels whose quality and file size depend on pixel resolution (width × height) and colour depth (bits per pixel).',
        bullets: [
          '**Pixel & Resolution** — a **pixel** is the smallest addressable picture element; **image resolution** is `width × height` in pixels.',
          '**Colour depth (bits per pixel)** — `n` bits per pixel allows `2ⁿ` unique colours (e.g. `8-bit = 256` colours; `24-bit True Colour = 16.7 million` RGB shades).',
          '**Metadata** — header bytes storing width, height, colour depth, and file format so software can decode the raw pixel stream accurately.',
        ],
        subsections: [
          {
            heading: 'Bitmap File Size Calculation',
            bullets: [
              '**Formula**: `Image Size (bits) = Width × Height × Colour Depth (bits)` (divide by `8` for bytes, then `1024` for KiB).',
            ],
            exampleHeading: 'Worked example: 512 × 256 icon at 16-bit colour depth',
            examples: [
              'Total pixels = `512 × 256 = 131,072 pixels`.',
              'Bytes = `(131,072 × 16) ÷ 8 = 262,144 bytes = 256 KiB`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'colour depth', definition: 'Number of bits used to encode the colour of each pixel, yielding 2ⁿ possible colours.' },
        ],
        memoryAid: 'Sound = Rate × Res × Time. Image = Width × Height × Depth. Divide bits by 8 for bytes!',
        commonMistake: 'Forgetting to divide by 8 when converting bits into bytes — Cambridge 0478 always checks the `÷ 8` step before dividing by 1024 for KiB!',
      },
    ],
    keyTerms: [
      { term: 'ASCII', definition: '7-bit character set representing 128 English characters, digits, and control codes.' },
      { term: 'Unicode', definition: 'Universal 16/32-bit character encoding supporting all global scripts and emoji.' },
      { term: 'Sample Rate', definition: 'Number of audio amplitude measurements recorded per second (Hz).' },
      { term: 'Colour Depth', definition: 'Number of bits representing each pixel colour (n bits = 2ⁿ colours).' },
      { term: 'Image Resolution', definition: 'Total pixel dimensions (width × height) of a bitmap image.' },
    ],
    checklistPoints: [
      'Contrast ASCII and Unicode in terms of character range and file size',
      'Explain how sample rate and sample resolution affect sound accuracy and size',
      'Calculate raw bitmap and audio file sizes in bytes and KiB',
    ],
  },

  'cs-1-3': {
    subtopicId: 'cs-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Data Storage Units (KiB/MiB), File Size Calculations & Compression',
    readingMinutes: 10,
    videoTitle: '15. CAMBRIDGE IGCSE (0478-0984) 1.3 Lossy and lossless compression methods',
    youtubeId: 'KJljOO48_vs',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:18',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'IEC Binary Units: Bit, Nibble, Byte, KiB, MiB, GiB, TiB', cardId: 'cs-1-3-c1' },
      { time: '2:30', seconds: 150, label: 'Why Compress Files? Bandwidth, Storage & Streaming', cardId: 'cs-1-3-c2' },
      { time: '4:50', seconds: 290, label: 'Lossy vs Lossless Compression & RLE Worked Trace', cardId: 'cs-1-3-c3' },
    ],
    cards: [
      {
        id: 'cs-1-3-c1',
        title: 'IEC Binary Storage Units (Powers of 1024)',
        summary: 'Cambridge 0478 strictly uses IEC binary prefixes (KiB, MiB, GiB, TiB, PiB, EiB) stepping by factors of 1024 (2¹⁰).',
        bullets: [
          '**Hierarchy** — `1 nibble = 4 bits`, `1 byte = 8 bits`, `1 KiB = 1024 bytes`, `1 MiB = 1024 KiB`, `1 GiB = 1024 MiB`, `1 TiB = 1024 GiB`, `1 PiB = 1024 TiB`, `1 EiB = 1024 PiB`.',
          '**Exam convention** — always divide/multiply by **`1024`** (not 1000) for Cambridge IGCSE 0478 storage calculations.',
        ],
        subsections: [
          {
            heading: 'Step-by-Step Unit Conversion',
            bullets: [
              '**Bits → MiB shortcut** — divide by `8` (bytes), divide by `1024` (KiB), divide by `1024` (MiB).',
            ],
            exampleHeading: 'Worked example: 2048 × 1024 image at 24-bit colour depth in MiB',
            examples: [
              'Bytes = `2048 × 1024 × 3 bytes` (since `24 bits = 3 bytes`) = `6,291,456 bytes`.',
              'MiB = `6,291,456 ÷ (1024 × 1024)` = **`6 MiB`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'kibibyte (KiB)', definition: 'Exactly 1,024 (2¹⁰) bytes under the IEC binary prefix standard used in Cambridge 0478.' },
          { term: 'mebibyte (MiB)', definition: 'Exactly 1,024 KiB (1,048,576 bytes).' },
        ],
      },
      {
        id: 'cs-1-3-c2',
        title: 'Purpose of Data Compression',
        summary: 'Compression shrinks file sizes to save storage space, speed up transmission, reduce bandwidth demand, and avoid email attachment limits.',
        bullets: [
          '**Four core reasons to compress** — uses **less bandwidth** over networks, **faster upload/download** transmission times, requires **less secondary storage**, and allows files to stay under **attachment/streaming caps**.',
          '**Choosing the right method** — depends on whether exact bit-for-bit reconstruction is mandatory (code, databases, documents) or perceptual approximation is acceptable (photos, audio, video).',
        ],
        subsections: [
          {
            heading: 'Bandwidth Impact Calculation',
            bullets: [
              '**Transmission time** — `Time (s) = File Size (bits) ÷ Bandwidth (bits/s)`.',
            ],
            exampleHeading: 'Worked example: Compressing a 20 MiB audio WAV to 2 MiB MP3',
            examples: [
              'Compression ratio = `20 : 2 = 10 : 1` (90% size reduction → uploads 10× faster on mobile data).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'compression', definition: 'Encoding data using fewer bits to reduce storage requirements and network transmission time.' },
        ],
      },
      {
        id: 'cs-1-3-c3',
        title: 'Lossy vs Lossless Compression & Run-Length Encoding (RLE)',
        summary: 'Lossless compression (RLE, ZIP, PNG) restores the exact original file; lossy compression (JPEG, MP3, MP4) permanently discards imperceptible detail for much smaller sizes.',
        bullets: [
          '**Lossless compression** — removes redundant patterns without losing any data; original file is **100% reconstructed** upon decompression. Essential for **source code, spreadsheets, text documents, and executables**.',
          '**Run-Length Encoding (RLE)** — replaces consecutive identical symbols/pixels with `(count, value)` pairs; very effective on flat graphics or logos with long runs, ineffective on noisy photos.',
          '**Lossy compression** — permanently removes detail humans barely notice (perceptual audio masking in **MP3**, chroma subsampling/quantisation in **JPEG**). Achieves much higher compression ratios but **cannot restore the original**.',
        ],
        subsections: [
          {
            heading: 'Worked RLE Encoding Trace',
            bullets: [
              '**Count consecutive repeats** — each run is stored as `(frequency, data value)`.',
            ],
            exampleHeading: 'Worked example: Compress `WWWWWWBBBWWWW` using RLE',
            examples: [
              'Raw string = `13 bytes` (`W,W,W,W,W,W,B,B,B,W,W,W,W`).',
              'RLE pairs = `(6,W)(3,B)(4,W)` = `6 bytes` → saved **7 bytes (53.8% reduction)** with zero data loss!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'run-length encoding (RLE)', definition: 'Lossless algorithm storing repeated consecutive data values as a single count–value pair.' },
          { term: 'lossy compression', definition: 'Compression that permanently discards less noticeable data (e.g. JPEG/MP3) to achieve drastically smaller files.' },
        ],
        memoryAid: 'Lossless = Legal/Code/Text (ZIP, PNG, RLE). Lossy = Looks/Listens (JPEG, MP3, MP4).',
        commonMistake: 'Using 1000 instead of 1024 for KiB/MiB, or suggesting lossy compression for an executable program (discarding even 1 bit corrupts machine code!).',
      },
    ],
    keyTerms: [
      { term: 'Kibibyte (KiB)', definition: 'IEC binary unit equal to 1,024 bytes (2¹⁰ bytes).' },
      { term: 'Lossless Compression', definition: 'Reversible compression where decompression reproduces the exact original bits.' },
      { term: 'Lossy Compression', definition: 'Irreversible compression that permanently strips imperceptible data for far smaller sizes.' },
      { term: 'Run-Length Encoding (RLE)', definition: 'Lossless method replacing consecutive identical values with count–value pairs.' },
    ],
    checklistPoints: [
      'Use powers of 1024 (KiB, MiB, GiB, TiB) accurately in Cambridge file-size calculations',
      'State four advantages of compressing files before storage or transmission',
      'Apply Run-Length Encoding (RLE) and justify lossy vs lossless choices by file type',
    ],
  },

  'cs-2-1': {
    subtopicId: 'cs-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Packet Structure, Packet Switching, Serial/Parallel Transmission & USB',
    readingMinutes: 11,
    videoTitle: '17. CAMBRIDGE IGCSE (0478-0984) 2.1 Packet switching',
    youtubeId: 'PVbuTBS4Sqc',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:12',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Packet Anatomy & Dynamic Packet Switching', cardId: 'cs-2-1-c1' },
      { time: '3:00', seconds: 180, label: 'Serial vs Parallel & Simplex/Half/Full-Duplex', cardId: 'cs-2-1-c2' },
      { time: '5:40', seconds: 340, label: 'Universal Serial Bus (USB) Interface', cardId: 'cs-2-1-c3' },
    ],
    cards: [
      {
        id: 'cs-2-1-c1',
        title: 'Packet Structure & Packet Switching',
        summary: 'Messages are split into packets (header, payload, trailer) routed independently across the network and reassembled in sequence at the destination.',
        diagram: 'tcpip-packet-switching',
        bullets: [
          '**Packet Header** — contains **Destination IP address**, **Source IP address**, and **Packet sequence number** (plus packet size/hop count).',
          '**Packet Payload** — holds the actual chunk of user data (typically up to `64 KiB`).',
          '**Packet Trailer** — marks the end of the packet and carries an **error-checking code** (such as CRC / checksum).',
          '**Packet Switching** — each router inspects the destination IP and forwards every packet along the **least congested / fastest link**; packets may arrive out of order and are reassembled using sequence numbers (missing packets trigger a resend request).',
        ],
        subsections: [
          {
            heading: 'Why Packet Switching Dominates the Internet',
            bullets: [
              '**Resilience & shared bandwidth** — no single dedicated line is tied up; traffic automatically reroutes around failed routers, though packets can suffer minor reordering jitter.',
            ],
            exampleHeading: 'Worked trace: Sending a 180 KiB file in 64 KiB packets',
            examples: [
              'Split into `3 packets` (`P1=64 KiB`, `P2=64 KiB`, `P3=52 KiB`).',
              'If `P2` reroutes around a congested router and arrives after `P3`, Host B reorders `P1 → P2 → P3` using the **packet sequence numbers** in each header.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'packet switching', definition: 'Sending data split into packets that travel independently across routers and are reassembled at the destination.' },
          { term: 'payload', definition: 'The actual portion of user data carried inside a data packet.' },
        ],
      },
      {
        id: 'cs-2-1-c2',
        title: 'Serial vs Parallel & Direction Modes (Simplex, Half, Full-Duplex)',
        summary: 'Serial sends 1 bit at a time over a single wire (reliable over long distances without skew); parallel sends multiple bits simultaneously over short internal buses.',
        bullets: [
          '**Serial transmission** — sends **1 bit at a time** down a single channel; **no bit skew**, minimal crosstalk, cheaper cabling, reliable over long distances (e.g. USB, Ethernet, WANs).',
          '**Parallel transmission** — sends **multiple bits simultaneously** down parallel wires (e.g. 8/16/32 bits); faster over very short distances (CPU internal buses), but suffers from **data skew** (bits arriving out of sync) over long cables.',
          '**Direction modes** — **Simplex** (one-way only, e.g. mic → PC), **Half-duplex** (both ways, one at a time, e.g. walkie-talkie), **Full-duplex** (both ways simultaneously, e.g. broadband / telephone).',
        ],
        subsections: [
          {
            heading: 'Matching Transmission Mode to Hardware',
            bullets: [
              '**Rule of thumb** — external long-distance cables use **serial full-duplex**; motherboard CPU-to-RAM paths use **parallel**.',
            ],
            exampleHeading: 'Worked comparison: Why USB replaced parallel printer cables',
            examples: [
              'At high clock speeds over a `2 m` cable, parallel wires suffer signal **skew** and interference; high-frequency serial USB transmits faster with zero skew.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'data skew', definition: 'Synchronisation error in parallel transmission when bits sent simultaneously arrive at different times over long wires.' },
          { term: 'full-duplex', definition: 'Bidirectional communication allowing both devices to transmit and receive data simultaneously.' },
        ],
      },
      {
        id: 'cs-2-1-c3',
        title: 'Universal Serial Bus (USB) Standard',
        summary: 'USB is an asynchronous serial interface with automatic device detection, built-in power delivery, and backward compatibility.',
        bullets: [
          '**How USB works** — uses **serial** data transmission across shielded twisted-pair data wires (`D+`, `D−`) plus `+5V` power and ground lines.',
          '**Advantages of USB** — **plug-and-play automatic detection** (OS loads drivers automatically), supplies power to peripherals, **universal industry standard**, backward compatible across USB 2.0/3.0/4, and reversible USB-C connectors prevent wrong insertion.',
          '**Limitations** — cable length typically limited to `~5 m` without repeaters, and older USB versions offer lower throughput than modern Thunderbolt/PCIe.',
        ],
        subsections: [
          {
            heading: 'Exam Evaluation of USB',
            bullets: [
              '**Error handling** — USB protocols automatically detect corrupted packets and request retransmission transparently.',
            ],
            exampleHeading: 'Worked example: Plugging a USB-C SSD into a laptop',
            examples: [
              'Voltage change on the data pins alerts the OS → OS queries device descriptor → loads storage driver → full-duplex serial transfer starts at up to `10–40 Gbps`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'USB', definition: 'Universal Serial Bus — industry-standard serial interface supporting plug-and-play data transfer and peripheral power.' },
        ],
        memoryAid: 'Packet = Header (IPs + Seq) · Payload (Data) · Trailer (CRC). Skew kills long Parallel cables!',
        commonMistake: 'Saying parallel is ALWAYS faster than serial — over long distances or high clock frequencies, data skew and crosstalk force parallel down, making modern serial links (USB 3/4, PCIe, SATA) faster and more reliable.',
      },
    ],
    keyTerms: [
      { term: 'Packet Header', definition: 'Metadata at the start of a packet storing source IP, destination IP, and packet sequence number.' },
      { term: 'Packet Switching', definition: 'Method where packets travel independently via routers and reassemble in sequence at the receiver.' },
      { term: 'Serial Transmission', definition: 'Sending data one bit at a time along a single wire, avoiding skew over long distances.' },
      { term: 'Parallel Transmission', definition: 'Sending multiple bits simultaneously across parallel wires, best suited to short internal buses.' },
      { term: 'Full-Duplex', definition: 'Data transmission in both directions simultaneously.' },
    ],
    checklistPoints: [
      'Identify the contents of a packet header, payload, and trailer and trace packet switching',
      'Compare serial vs parallel transmission and simplex, half-duplex, and full-duplex modes',
      'Explain how USB transmits data and evaluate its key advantages and limits',
    ],
  },

  'cs-2-2': {
    subtopicId: 'cs-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Error Detection: Parity Bits, Checksums, Echo Checks, Check Digits & ARQ',
    readingMinutes: 10,
    videoTitle: '21. CAMBRIDGE IGCSE (0478-0984) 2.2 Error detection methods',
    youtubeId: 'TEICs3IaKF4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:34',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Errors Happen & Parity Bits / Parity Blocks', cardId: 'cs-2-2-c1' },
      { time: '3:10', seconds: 190, label: 'Checksums, Echo Checks & Check Digits (ISBN-13)', cardId: 'cs-2-2-c2' },
      { time: '5:55', seconds: 355, label: 'Automatic Repeat Query (ARQ) Protocol', cardId: 'cs-2-2-c3' },
    ],
    cards: [
      {
        id: 'cs-2-2-c1',
        title: 'Parity Bits & 2D Parity Blocks',
        summary: 'Parity checks ensure the total number of 1s in a byte is even (or odd); 2D parity blocks pinpoint the exact corrupted bit.',
        bullets: [
          '**Why transmission errors happen** — electromagnetic **interference**, signal attenuation, packet loss, and skew can flip `0↔1` bits in transit.',
          '**Even vs Odd Parity** — sender and receiver agree on parity before transmission; an extra **parity bit** is set to `0` or `1` so the total count of `1`s in the byte is even (or odd).',
          '**Limitation of single parity** — if **two (or any even number of) bits flip** in the same byte, the parity count stays valid and the error goes **undetected**!',
          '**Parity block (2D check)** — adds a parity byte across columns as well as row parity bits; the **intersection** of the failed row and failed column locates and corrects a single flipped bit.',
        ],
        subsections: [
          {
            heading: 'Worked Even Parity Byte',
            bullets: [
              '**Count the 1s** — if already even, parity bit = `0`; if odd, parity bit = `1`.',
            ],
            exampleHeading: 'Worked example: Add an even parity bit to 7-bit payload `1011001`',
            examples: [
              'Count of `1`s in `1011001` = `4` (already even) → parity bit = **`0`** → transmitted byte = **`01011001`**.',
              'If received as `01011101` (five `1`s → odd), receiver detects an error and requests retransmission.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'parity bit', definition: 'Extra bit appended to a byte so the total count of 1-bits matches the agreed even or odd parity rule.' },
          { term: 'parity block', definition: 'Two-dimensional grid of horizontal and vertical parity bits capable of locating a single corrupted bit.' },
        ],
      },
      {
        id: 'cs-2-2-c2',
        title: 'Checksums, Echo Checks & Check Digits',
        summary: 'Checksums verify transmitted blocks, echo checks compare returned copies, and check digits catch human data-entry errors on barcodes and ISBNs.',
        bullets: [
          '**Checksum** — sender applies a mathematical algorithm to a block of bytes and appends the resulting value; receiver recalculates the checksum on arrival — a mismatch signals corruption.',
          '**Echo check** — receiver sends a **copy** of received data back to the sender to compare against the original; unreliable because corruption might happen on the **return trip** and it doubles bandwidth usage.',
          '**Check digit** — final digit calculated from preceding digits (e.g. **ISBN-13**, **EAN barcodes**) using weighted modulo arithmetic to detect **human transcription/transposition errors** during manual entry or scanning.',
        ],
        subsections: [
          {
            heading: 'Worked Modulo-10 Check Digit Example',
            bullets: [
              '**ISBN-13 rule** — multiply digits alternately by `1` and `3`, sum them, find `remainder = sum MOD 10`, then `check digit = (10 − remainder) MOD 10`.',
            ],
            exampleHeading: 'Worked example: Verify checksum for bytes `[20, 45, 35]` using MOD 256',
            examples: [
              'Sender sum = `20 + 45 + 35 = 100`; `100 MOD 256 = 100` appended to block.',
              'If byte `45` corrupts to `49`, receiver computes `104 ≠ 100` → error detected!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'checksum', definition: 'Calculated value sent alongside a data block and recomputed by the receiver to detect transmission corruption.' },
          { term: 'check digit', definition: 'Extra digit appended to an ID/barcode (e.g. ISBN-13) to catch human typing or scanning errors.' },
        ],
      },
      {
        id: 'cs-2-2-c3',
        title: 'Automatic Repeat Query (ARQ)',
        summary: 'ARQ combines acknowledgements and timeouts so corrupted or lost packets are automatically retransmitted until received error-free.',
        bullets: [
          '**Positive / Negative Acknowledgement (ACK / NACK)** — receiver checks every arriving packet (using parity/checksum) and sends an **ACK** if valid (or **NACK** if corrupted).',
          '**Timeout timer** — sender starts a timer upon sending a frame; if no **ACK** arrives before the **timeout** expires, sender **automatically retransmits** the packet.',
          '**Repeat until confirmed** — loop continues until an ACK arrives or a maximum retry limit is reached.',
        ],
        subsections: [
          {
            heading: 'Exam Step Sequence for ARQ (4 Marks)',
            bullets: [
              '**4 scoring keywords**: (1) sender starts **timeout**, (2) receiver checks error code & returns **ACK** (positive acknowledgement), (3) if no ACK before timeout (or NACK received), (4) sender **retransmits** automatically.',
            ],
            exampleHeading: 'Worked ARQ trace with packet loss',
            examples: [
              'Host A sends `P4` & starts `200 ms` timer → `P4` dropped by noisy Wi-Fi → timer hits `200 ms` with no ACK → Host A resends `P4` → Host B verifies checksum and returns `ACK 4`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ARQ', definition: 'Automatic Repeat Query — protocol using acknowledgements (ACK) and timeouts to trigger automatic retransmission of lost/corrupt frames.' },
        ],
        memoryAid: 'Check DIGIT = Data entry (human/barcode). CheckSUM = Sent data (network). ARQ = ACK + Timeout + Resend!',
        commonMistake: 'Confusing a check digit with a checksum — check digits detect human input/scanning mistakes (like swapping two digits in an ISBN), whereas checksums verify transmitted blocks of binary data.',
      },
    ],
    keyTerms: [
      { term: 'Parity Check', definition: 'Error check adding a bit so total 1-bits are even or odd; fails on transposition or even-bit flips.' },
      { term: 'Checksum', definition: 'Mathematical value computed from a data block before transmission and verified on arrival.' },
      { term: 'Check Digit', definition: 'Calculated validation digit (e.g. ISBN-13) catching human transcription/transposition errors.' },
      { term: 'Echo Check', definition: 'Method where received data is echoed back to the sender for comparison.' },
      { term: 'Automatic Repeat Query (ARQ)', definition: 'Error-control protocol using acknowledgements and timeouts to resend corrupted or missing frames.' },
    ],
    checklistPoints: [
      'Compute even/odd parity bits and explain why a 2-bit flip defeats single-byte parity',
      'Distinguish checksums, echo checks, and check digits with concrete scenarios',
      'Describe all four steps of Automatic Repeat Query (ARQ) using ACK and timeout',
    ],
  },

  'cs-2-3': {
    subtopicId: 'cs-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'Symmetric & Asymmetric Encryption (Public & Private Keys)',
    readingMinutes: 9,
    videoTitle: '24. CAMBRIDGE IGCSE (0478-0984) 2.3 Symmetric and asymmetric encryption',
    youtubeId: 'Ih7BT2uFKh4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:05',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Purpose of Encryption: Plaintext to Ciphertext', cardId: 'cs-2-3-c1' },
      { time: '2:15', seconds: 135, label: 'Symmetric Encryption & Key Exchange Risk', cardId: 'cs-2-3-c2' },
      { time: '4:35', seconds: 275, label: 'Asymmetric Encryption: Public & Private Key Pairs', cardId: 'cs-2-3-c3' },
    ],
    cards: [
      {
        id: 'cs-2-3-c1',
        title: 'Why Encrypt? Plaintext, Ciphertext & Algorithms',
        summary: 'Encryption scrambles readable plaintext into unreadable ciphertext using a key so intercepted data remains meaningless to eavesdroppers.',
        bullets: [
          '**Purpose** — encryption does **not** prevent packets from being intercepted, but makes intercepted data **unintelligible (meaningless)** without the decryption key.',
          '**Core terms** — **Plaintext** (original readable message) + **Encryption Algorithm** + **Key** → **Ciphertext** (scrambled output).',
          '**Key length security** — longer keys exponentially increase brute-force difficulty (`256-bit` AES has `2²⁵⁶` possible keys, making brute force infeasible).',
        ],
        subsections: [
          {
            heading: 'Simple Shift Cipher Illustration',
            bullets: [
              '**Key controls transformation** — without the secret key, ciphertext reveals no useful information.',
            ],
            exampleHeading: 'Worked example: Shift key `+3` on plaintext `DATA`',
            examples: [
              '`D→G`, `A→D`, `T→W`, `A→D` → Ciphertext = **`GDWD`** (modern AES operates on 128-bit blocks with complex rounds).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'plaintext', definition: 'Original readable data before an encryption algorithm is applied.' },
          { term: 'ciphertext', definition: 'Scrambled, unreadable output produced by encrypting plaintext with a key.' },
        ],
      },
      {
        id: 'cs-2-3-c2',
        title: 'Symmetric Encryption (Single Shared Secret Key)',
        summary: 'Symmetric encryption uses the exact same secret key for both encryption and decryption — fast for large files, but vulnerable during key distribution.',
        bullets: [
          '**Mechanism** — Sender encrypts plaintext using the **shared secret key**; Receiver decrypts ciphertext using the **same key**.',
          '**Advantage** — mathematically lightweight and **very fast** for encrypting gigabytes of bulk data (e.g. disk encryption, streaming video).',
          '**Key exchange problem** — the shared key must be transmitted to the receiver first; if an attacker **intercepts the key** in transit, all future messages can be decrypted.',
        ],
        subsections: [
          {
            heading: 'Evaluating Symmetric Encryption',
            bullets: [
              '**Best fit** — bulk data transfer once a secure key has already been established.',
            ],
            exampleHeading: 'Worked scenario: Encrypting a 500 MiB backup file',
            examples: [
              'AES-256 symmetric encryption finishes in `< 1 s`, whereas pure asymmetric RSA would be thousands of times slower.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'symmetric encryption', definition: 'Encryption using one identical shared secret key to both encrypt and decrypt data.' },
        ],
      },
      {
        id: 'cs-2-3-c3',
        title: 'Asymmetric Encryption (Public & Private Key Pairs)',
        summary: 'Asymmetric encryption pairs a freely shared public key with a secret private key, eliminating the key-exchange risk.',
        bullets: [
          '**Mathematically linked key pair** — every user generates a **Public Key** (shared openly with anyone) and a **Private Key** (kept strictly secret on their device).',
          '**Confidentiality workflow** — Sender encrypts the message using the **Recipient’s Public Key**; **only the Recipient’s Private Key** can decrypt it — even the sender cannot decrypt it back!',
          '**Solving key distribution** — because the private key is **never transmitted** over the network, intercepting the public key gives an attacker zero ability to decrypt ciphertext.',
          '**Trade-off** — significantly slower computationally than symmetric encryption, so HTTPS uses asymmetric encryption first to safely exchange a **symmetric session key**.',
        ],
        subsections: [
          {
            heading: 'Exam Workflow: Alice Sends Secret Data to Bob',
            bullets: [
              '**Never mix up whose keys are used!** — Encrypt with **Bob’s Public Key** → Decrypt with **Bob’s Private Key**.',
            ],
            exampleHeading: 'Worked example: 3-step secure message from Alice to Bob',
            examples: [
              '1. Bob shares his **Public Key** openly with Alice.',
              '2. Alice encrypts plaintext with **Bob’s Public Key** → sends ciphertext.',
              '3. Bob decrypts ciphertext with **Bob’s Private Key** (never shared!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'asymmetric encryption', definition: 'Encryption using a mathematically linked public key (to encrypt) and private key (to decrypt) so the secret key never travels over a network.' },
        ],
        memoryAid: 'Symmetric = Same key (Speedy, risky share). Asymmetric = A pair (Public locks it, Private unlocks it!).',
        commonMistake: 'Writing "encryption stops hackers intercepting data" — NEVER say that! Packets can still be intercepted; encryption makes intercepted data unreadable/meaningless without the decryption key.',
      },
    ],
    keyTerms: [
      { term: 'Plaintext', definition: 'Original human-readable message before encryption.' },
      { term: 'Ciphertext', definition: 'Encrypted, unreadable message generated by applying a key and cipher algorithm.' },
      { term: 'Symmetric Encryption', definition: 'Cipher method using the same shared secret key for encryption and decryption.' },
      { term: 'Asymmetric Encryption', definition: 'Public-key cryptography pairing a shared public key with a secret private key.' },
    ],
    checklistPoints: [
      'Explain clearly why encryption makes intercepted data meaningless rather than stopping interception',
      'Compare symmetric and asymmetric encryption on speed and key-exchange security',
      'Trace confidential message delivery using the recipient’s public and private key pair',
    ],
  },

  'cs-3-1': {
    subtopicId: 'cs-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Von Neumann Architecture, FDE Cycle, CPU Performance & Embedded Systems',
    readingMinutes: 12,
    videoTitle: '27. CAMBRIDGE IGCSE (0478-0984) 3.1 Von Neumann architecture',
    youtubeId: 'C0Pch0zpsT4',
    videoChannel: "Craig'n'Dave",
    videoDuration: '9:04',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Von Neumann Registers, ALU, CU & System Buses', cardId: 'cs-3-1-c1' },
      { time: '3:15', seconds: 195, label: 'Fetch–Decode–Execute (FDE) Cycle Step-by-Step', cardId: 'cs-3-1-c2' },
      { time: '6:10', seconds: 370, label: 'CPU Performance (Clock, Cores, Cache) & Embedded Systems', cardId: 'cs-3-1-c3' },
    ],
    cards: [
      {
        id: 'cs-3-1-c1',
        title: 'Von Neumann Architecture: Registers & System Buses',
        summary: 'Von Neumann stores both program instructions and data in the same main memory, connected to the CPU via Address, Data, and Control buses.',
        diagram: 'cpu-fde-architecture',
        bullets: [
          '**Stored-program concept** — both **instructions and data** reside together in main memory (RAM) and travel over shared system buses.',
          '**5 Core Registers** — **PC** (Program Counter: holds address of next instruction), **MAR** (Memory Address Register: holds address being read/written), **MDR** (Memory Data Register: holds data/instruction fetched from or written to RAM), **CIR** (Current Instruction Register: holds instruction being decoded), **ACC** (Accumulator: holds intermediate ALU results).',
          '**3 System Buses** — **Address Bus** (unidirectional CPU → RAM), **Data Bus** (bidirectional CPU ↔ RAM), **Control Bus** (bidirectional read/write/clock/interrupt signals).',
        ],
        subsections: [
          {
            heading: 'ALU vs Control Unit (CU)',
            bullets: [
              '**ALU** — executes arithmetic (`+`, `−`) and logical (`AND`, `OR`, comparisons) operations, storing results in **ACC**.',
              '**CU** — decodes instructions in **CIR**, synchronises components via the system clock, and sends timing/control signals along the Control Bus.',
            ],
            exampleHeading: 'Worked bus trace: Reading memory address `0x04`',
            examples: [
              '`PC (0x04) → MAR (0x04)` → `0x04` sent on **Address Bus** + Read signal on **Control Bus** → instruction travels back on **Data Bus** into **MDR**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Von Neumann architecture', definition: 'Stored-program computer design holding both data and instructions in shared main memory.' },
          { term: 'system bus', definition: 'Parallel wires (Address, Data, Control) connecting the CPU, main memory, and I/O controllers.' },
        ],
      },
      {
        id: 'cs-3-1-c2',
        title: 'The Fetch–Decode–Execute (FDE) Cycle',
        summary: 'Every machine instruction cycles continuously through Fetch (PC→MAR→RAM→MDR→CIR), Decode (CU splits opcode/operand), and Execute (ALU/RAM action).',
        bullets: [
          '**1. Fetch** — `PC` copies address to `MAR` → address placed on Address Bus → CU issues Read on Control Bus → instruction returns via Data Bus into `MDR` → copied to `CIR` → `PC` increments by `1`.',
          '**2. Decode** — the **Control Unit** decodes the instruction in `CIR` into **opcode** (operation) and **operand** (data or memory address) using the CPU’s **instruction set**.',
          '**3. Execute** — CU coordinates the action (e.g. fetch operand from RAM, run ALU arithmetic updating `ACC`, or update `PC` on a branch).',
        ],
        subsections: [
          {
            heading: 'Worked FDE Trace',
            bullets: [
              '**Increment timing** — incrementing `PC` happens during Fetch so `PC` already points to the next instruction even while the current one executes.',
            ],
            exampleHeading: 'Worked example: Executing `ADD 12` at address `100`',
            examples: [
              'Fetch: `MAR ← 100`, `MDR ← ADD 12`, `CIR ← ADD 12`, `PC ← 101`.',
              'Decode & Execute: CU reads `ADD` opcode → fetches value at address `12` → ALU adds it to `ACC` → result stored in `ACC`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'instruction set', definition: 'Complete list of binary machine-code operations (opcodes) that a specific CPU architecture can execute.' },
        ],
      },
      {
        id: 'cs-3-1-c3',
        title: 'CPU Performance Factors & Embedded Systems',
        summary: 'Higher clock speed, more CPU cores, and larger cache boost throughput; embedded systems integrate dedicated microcontrollers inside single-purpose devices.',
        bullets: [
          '**Clock speed (GHz)** — number of FDE cycles per second (`3.5 GHz = 3.5 billion cycles/s`). Higher clock executes more instructions/s but increases heat/power.',
          '**Number of cores** — each core has its own ALU, CU, and registers, enabling **parallel execution** of multiple threads/instructions (diminishing returns if software isn’t parallelised or cores wait on shared RAM).',
          '**Cache memory** — ultra-fast SRAM sitting on/near the CPU holding **frequently used instructions/data**, avoiding slow RAM fetches.',
          '**Embedded systems** — dedicated computer built inside a larger device for one specific task (e.g. washing machine, ABS brakes, pacemaker, microwave); typically low-power, compact, real-time, and non-upgradable.',
        ],
        subsections: [
          {
            heading: 'General-Purpose PC vs Embedded System',
            bullets: [
              '**Firmware in ROM** — embedded systems store fixed control programs in ROM/flash rather than running arbitrary user-installed apps.',
            ],
            exampleHeading: 'Worked performance check: Why doubling cores rarely doubles speed',
            examples: [
              'If a program has sequential tasks that cannot run concurrently, extra cores stay idle; inter-core communication overhead also consumes cycles.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cache memory', definition: 'High-speed SRAM close to the CPU storing frequently accessed data and instructions to cut fetch latency.' },
          { term: 'embedded system', definition: 'Dedicated microprocessor/microcontroller built into a larger appliance to perform one specialised control function.' },
        ],
        memoryAid: 'FDE Registers: PC → MAR → (Bus) → MDR → CIR (CU Decodes) → ALU → ACC!',
        commonMistake: 'Saying the Address Bus is bidirectional — in Cambridge 0478, the Address Bus is strictly UNIDIRECTIONAL (CPU → Memory only), while the Data Bus is bidirectional!',
      },
    ],
    keyTerms: [
      { term: 'Program Counter (PC)', definition: 'CPU register storing the memory address of the next instruction to be fetched.' },
      { term: 'MAR & MDR', definition: 'Memory Address Register (holds target RAM address) and Memory Data Register (holds data fetched/written).' },
      { term: 'Control Unit (CU)', definition: 'CPU component that decodes instructions in CIR and coordinates hardware via timing/control signals.' },
      { term: 'Cache Memory', definition: 'Ultra-fast memory on the CPU storing frequently accessed instructions and data.' },
      { term: 'Embedded System', definition: 'Specialised computer system built inside a larger machine to perform a dedicated task.' },
    ],
    checklistPoints: [
      'Name the 5 Von Neumann registers and explain the direction of all 3 system buses',
      'Trace every step of the Fetch–Decode–Execute cycle accurately',
      'Evaluate how clock speed, core count, and cache affect CPU performance and identify embedded systems',
    ],
  },

  'cs-3-2': {
    subtopicId: 'cs-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Input/Output Devices, Sensors & Network Hardware (NIC, MAC, IP & Routers)',
    readingMinutes: 11,
    videoTitle: '34. CAMBRIDGE IGCSE (0478-0984) 3.2 Sensors - Part 1',
    youtubeId: 'ZmdXZMO_lx0',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:48',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Input & Output Devices: Scanners, Screens & Printers', cardId: 'cs-3-2-c1' },
      { time: '2:40', seconds: 160, label: 'Sensors & ADC Feedback Control Loops', cardId: 'cs-3-2-c2' },
      { time: '5:15', seconds: 315, label: 'Network Hardware: NIC, MAC Address, IPv4/IPv6 & Routers', cardId: 'cs-3-2-c3' },
    ],
    cards: [
      {
        id: 'cs-3-2-c1',
        title: 'Input & Output Devices (How They Work)',
        summary: 'Input devices convert real-world signals into digital binary; output devices convert digital binary into text, graphics, sound, or physical motion.',
        bullets: [
          '**Input devices** — **Barcode & QR scanners** (LED/laser reads reflectance pattern; QR holds far more data 2D + error correction), **Capacitive touchscreens** (detect change in electrostatic field from conductive finger, supports multi-touch) vs **Resistive** (pressure pushes two conductive layers together, works with gloves), **Optical mice**, **Microphones**, **2D/3D scanners**.',
          '**Output devices** — **Laser printers** (charged drum + powdered toner fused by heat — fast high-volume) vs **Inkjet printers** (piezoelectric/thermal ink droplets — vivid photo colour), **3D printers** (additive layer-by-layer manufacturing), **LED/LCD/OLED displays**, **DLP/LCD projectors**, **Actuators & Speakers**.',
        ],
        subsections: [
          {
            heading: 'Comparing Touchscreen Technologies',
            bullets: [
              '**Capacitive vs Resistive** — Capacitive is clearer, multi-touch, and durable on smartphones; Resistive is cheaper and operable with gloved hands in medical/industrial panels.',
            ],
            exampleHeading: 'Worked example: Why supermarkets use barcode scanners + check digits',
            examples: [
              'Laser scans black/white bars → converts to binary product code → looks up live price in database → automatically decrements stock count in milliseconds.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'actuator', definition: 'Output hardware component (motor, valve, heater) that converts electrical control signals into physical movement or action.' },
          { term: 'capacitive touchscreen', definition: 'Display detecting touch via disruptions to an electrostatic field across a conductive glass layer.' },
        ],
      },
      {
        id: 'cs-3-2-c2',
        title: 'Sensors & Analogue-to-Digital Conversion (ADC)',
        summary: 'Sensors continuously measure physical variables (temperature, light, pH, pressure, infrared, moisture) and feed analogue signals via an ADC to a microprocessor.',
        bullets: [
          '**Sensor types** — **Temperature** (greenhouse/oven), **Moisture/Humidity** (irrigation), **Light** (streetlamps), **Infrared/Proximity** (burglar alarms, auto doors), **Pressure** (weighing/car seats), **Acoustic/Gas/pH/Magnetic field**.',
          '**Closed-loop control cycle** — `Sensor measures physical quantity → ADC converts analogue signal to digital → Microprocessor compares reading against stored preset threshold → if out of range, sends signal (via DAC if needed) to Actuator → Continuous feedback loop`.',
        ],
        subsections: [
          {
            heading: '5-Mark Sensor Exam Template',
            bullets: [
              '**Always state all 5 points**: (1) sensor name, (2) **continuous** reading, (3) **ADC** converts analogue to digital, (4) microprocessor **compares** with stored preset value, (5) sends signal to **actuator** + process loops continuously.',
            ],
            exampleHeading: 'Worked example: Automated greenhouse temperature control (`< 18 °C`)',
            examples: [
              'Temperature sensor sends analogue voltage → **ADC** converts to digital → microprocessor checks `temp < 18` → if true, triggers **actuator** to close roof vents and switch heater ON → loop repeats every `5 s`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ADC', definition: 'Analogue-to-Digital Converter — translates continuous analogue sensor voltages into discrete binary numbers for the CPU.' },
        ],
      },
      {
        id: 'cs-3-2-c3',
        title: 'Network Hardware: NIC, MAC Address, IPv4/IPv6 & Routers',
        summary: 'NICs provide hardware network links with permanent 48-bit hex MAC addresses, while routers forward packets across networks using logical IP addresses.',
        bullets: [
          '**NIC (Network Interface Card)** — hardware component allowing a device to connect to a wired/wireless network; assigned a unique **MAC address** at manufacture.',
          '**MAC Address** — **48-bit** (`6 pairs of hex digits`, e.g. `00:1A:2B:3C:4D:5E`) **permanent physical hardware address**: first 24 bits = Manufacturer ID (OUI), last 24 bits = Serial ID.',
          '**IP Address (Logical)** — assigned by the network/ISP (often dynamically via **DHCP** or fixed as **Static IP**). **IPv4** = `32 bits` (`4 denary octets 0–255`, e.g. `192.168.1.42`, `~4.3 billion` addresses); **IPv6** = `128 bits` (`8 groups of 4 hex digits`, e.g. `2001:0db8::7334`, virtually inexhaustible).',
          '**Router** — examines each packet’s **Destination IP**, consults its **routing table**, forwards packets between networks (LAN ↔ Internet), and assigns local private IPs via DHCP.',
        ],
        subsections: [
          {
            heading: 'Static vs Dynamic IP & IPv4 vs IPv6',
            bullets: [
              '**Static IP** stays fixed (ideal for web/email servers); **Dynamic IP** changes each session via DHCP (better privacy, efficient reuse of scarce IPv4 addresses).',
            ],
            exampleHeading: 'Worked comparison: MAC vs IPv4 vs IPv6 bit sizes',
            examples: [
              'MAC = `48 bits` (6 hex pairs, permanent hardware); IPv4 = `32 bits` (4 denary octets); IPv6 = `128 bits` (`2¹²⁸` addresses, eliminates IPv4 exhaustion).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'MAC address', definition: '48-bit hexadecimal physical address burned into a NIC (24-bit manufacturer ID + 24-bit serial number).' },
          { term: 'router', definition: 'Network device that inspects packet IP headers and forwards packets between networks using a routing table.' },
        ],
        memoryAid: 'MAC = Manufacturer (48-bit hex, permanent). IP = Internet Position (32-bit IPv4 / 128-bit IPv6, changes by network)!',
        commonMistake: 'Forgetting the ADC step in sensor questions — microprocessors only process digital binary, so analogue sensor signals MUST pass through an ADC before comparison!',
      },
    ],
    keyTerms: [
      { term: 'Analogue-to-Digital Converter (ADC)', definition: 'Hardware converting continuous analogue sensor output into discrete binary data.' },
      { term: 'Actuator', definition: 'Output device (motor, relay, valve) performing physical work upon microprocessor command.' },
      { term: 'Network Interface Card (NIC)', definition: 'Hardware interface enabling network connectivity and storing the device’s unique MAC address.' },
      { term: 'MAC Address', definition: 'Unique 48-bit hexadecimal physical hardware identifier assigned during manufacturing.' },
      { term: 'IPv4 / IPv6 Address', definition: 'Logical network address (32-bit denary IPv4 or 128-bit hex IPv6) identifying a device on a network.' },
    ],
    checklistPoints: [
      'Compare capacitive vs resistive touchscreens and laser vs inkjet/3D printers',
      'Write a full 5-point closed-loop sensor → ADC → microprocessor → actuator response',
      'Distinguish NIC, 48-bit MAC addresses, 32-bit IPv4 vs 128-bit IPv6, and routers',
    ],
  },

  'cs-3-3': {
    subtopicId: 'cs-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Primary Memory (RAM/ROM), Secondary Storage, Virtual Memory & Cloud Storage',
    readingMinutes: 11,
    videoTitle: '38. CAMBRIDGE IGCSE (0478-0984) 3.3 Common types of secondary storage',
    youtubeId: 'DMq_DV1kWuA',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:02',
    courseMatchSummary: '3 of 3 sections match Cambridge IGCSE Computer Science (0478 / 0984)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Primary Storage: RAM vs ROM', cardId: 'cs-3-3-c1' },
      { time: '2:45', seconds: 165, label: 'Secondary Storage: Magnetic, Optical & Solid-State (SSD)', cardId: 'cs-3-3-c2' },
      { time: '5:30', seconds: 330, label: 'Virtual Memory (Paging) & Cloud Storage', cardId: 'cs-3-3-c3' },
    ],
    cards: [
      {
        id: 'cs-3-3-c1',
        title: 'Primary Memory: RAM vs ROM',
        summary: 'Primary storage is directly accessible by the CPU; RAM is volatile read/write working memory, whereas ROM is non-volatile read-only boot firmware.',
        bullets: [
          '**RAM (Random Access Memory)** — **volatile** (loses contents when power is off), read/write memory storing the currently running **OS, open applications, and active data**.',
          '**ROM (Read-Only Memory)** — **non-volatile** (retains contents without power), read-only memory storing the **bootstrap loader / BIOS / UEFI** startup instructions needed when powering on.',
          '**Why both are essential** — without ROM, a cold-booting CPU would have no initial instructions to load the OS; without RAM, running programs could not update data rapidly.',
        ],
        subsections: [
          {
            heading: 'RAM vs ROM Comparison Table',
            bullets: [
              '**RAM**: Volatile · Read & Write · Larger (`8–64 GiB`) · Stores active OS & user files.',
              '**ROM**: Non-volatile · Read-only · Small (`MiB`) · Stores startup bootstrap firmware.',
            ],
            exampleHeading: 'Worked scenario: Power cut during essay editing',
            examples: [
              'Unsaved edits in **RAM** vanish instantly (volatile), while the saved copy on SSD and the BIOS in **ROM** remain intact (non-volatile).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'volatile', definition: 'Memory property where stored data is lost immediately when electrical power is removed (e.g. RAM).' },
          { term: 'ROM', definition: 'Non-volatile Read-Only Memory permanently storing startup firmware (BIOS/bootstrap).' },
        ],
      },
      {
        id: 'cs-3-3-c2',
        title: 'Secondary Storage: Magnetic, Optical & Solid-State (SSD)',
        summary: 'Non-volatile secondary storage retains files long-term across three physical technologies: magnetic HDD platters, optical laser discs, and solid-state NAND flash.',
        bullets: [
          '**Magnetic (HDD)** — spinning platters divided into **tracks and sectors** magnetised by read/write heads. **High capacity & low cost per GiB**, but slower access, fragile moving parts, noisier.',
          '**Solid-State (SSD / USB Flash)** — uses **NAND/NOR flash memory** (control gate & floating gate transistors trapping electrons) with **zero moving parts**. Ultra-fast access, silent, shock-resistant, low power; higher cost per GiB and finite write cycles.',
          '**Optical (CD / DVD / Blu-ray)** — lasers read/burn microscopic **pits and lands** along a spiral track (`CD ~700 MiB`, `DVD ~4.7 GiB`, `Blu-ray ~25–50 GiB` using shorter blue-violet laser wavelength). Cheap, portable, easily scratched.',
        ],
        subsections: [
          {
            heading: 'Choosing Storage by Use Case',
            bullets: [
              '**Laptop OS drive** → SSD (speed, shock resistance, battery life). **Data-centre archive** → HDD (lowest cost per TiB).',
            ],
            exampleHeading: 'Worked comparison: Why Blu-ray stores >5× more data than DVD',
            examples: [
              'Blu-ray uses a **shorter-wavelength blue laser (`405 nm`)** vs DVD’s red laser (`650 nm`), packing pits and lands far more densely (`25 GiB` vs `4.7 GiB` single-layer).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'solid-state drive (SSD)', definition: 'Non-volatile flash storage using floating-gate transistors with no moving parts for fast, silent, shock-resistant access.' },
          { term: 'pits and lands', definition: 'Microscopic indentations and flat areas on an optical disc surface that reflect laser light differently to encode 0s and 1s.' },
        ],
      },
      {
        id: 'cs-3-3-c3',
        title: 'Virtual Memory & Cloud Storage',
        summary: 'Virtual memory borrows secondary storage as overflow pages when RAM fills up; cloud storage hosts user data on remote internet servers.',
        bullets: [
          '**Virtual Memory** — when **RAM becomes full**, the OS moves inactive **pages** of programs from RAM to a reserved area of secondary storage (HDD/SSD), freeing RAM for active processes. When needed again, pages are swapped back into RAM.',
          '**Disk thrashing** — if RAM is severely undersized, constant page swapping between RAM and slow disk dramatically degrades system performance.',
          '**Cloud Storage** — remote server farms (often replicated across multiple data centres) accessed via the Internet. **Pros**: access anywhere on any device, automatic off-site backup, elastic capacity. **Cons**: requires reliable internet, ongoing subscription costs, data privacy/third-party security reliance.',
        ],
        subsections: [
          {
            heading: 'Tracing Virtual Memory Paging',
            bullets: [
              '**Key exam phrase** — *"Programs are divided into fixed-size pages; inactive pages are moved from RAM to secondary storage so active pages can load into RAM."*',
            ],
            exampleHeading: 'Worked example: Running a 6 GiB video editor + 4 GiB browser on 8 GiB RAM',
            examples: [
              'Total demand = `10 GiB > 8 GiB RAM` → OS pages `2 GiB` of idle browser tabs to SSD virtual memory so the active video timeline keeps running without crashing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'virtual memory', definition: 'Section of secondary storage temporarily used by the OS as an extension of RAM by swapping inactive pages.' },
          { term: 'cloud storage', definition: 'Remote off-site storage hosted on internet-connected servers managed by a third-party provider.' },
        ],
        memoryAid: 'RAM = Volatile Active Workspace. ROM = Non-Volatile Boot. Virtual Memory = Pages swapped to SSD/HDD when RAM is full!',
        commonMistake: 'Saying "virtual memory makes the computer faster" — virtual memory lets you run MORE programs than fit in RAM, but because secondary storage is far slower than RAM, heavy paging actually SLOWS the computer down!',
      },
    ],
    keyTerms: [
      { term: 'RAM (Random Access Memory)', definition: 'Volatile read/write primary memory holding currently executing OS, programs, and data.' },
      { term: 'ROM (Read-Only Memory)', definition: 'Non-volatile primary memory storing permanent startup instructions (BIOS/bootstrap).' },
      { term: 'Solid-State Storage (SSD)', definition: 'Flash memory storage using floating-gate transistors with zero moving parts.' },
      { term: 'Virtual Memory', definition: 'Secondary storage space used as an overflow extension of RAM via page swapping.' },
      { term: 'Cloud Storage', definition: 'Remote storage accessed over the Internet hosted across managed off-site servers.' },
    ],
    checklistPoints: [
      'Contrast RAM and ROM across volatility, editability, and startup role',
      'Explain how magnetic, optical, and solid-state storage store binary data and compare trade-offs',
      'Describe how virtual memory uses paging and evaluate cloud storage benefits vs drawbacks',
    ],
  },
};

export const IGCSE_CS_UNITS_1_3_QUIZZES: QuizQuestion[] = [
  // cs-1-1
  {
    id: 'cs-1-1-q1',
    subtopicId: 'cs-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the hexadecimal equivalent of the 8-bit binary number `1101 1010`?',
    options: ['DA', 'CA', 'DB', 'D9'],
    correctIndex: 0,
    explanation: 'Split into nibbles: 1101 = 8+4+1 = 13 = D, and 1010 = 8+2 = 10 = A, giving DA₁₆.',
  },
  {
    id: 'cs-1-1-q2',
    subtopicId: 'cs-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What denary value does the 8-bit two’s complement binary number `1111 1010` represent?',
    options: ['−6', '−10', '250', '−5'],
    correctIndex: 0,
    explanation: 'Using −128 + 64 + 32 + 16 + 8 + 2 = −6 (or invert 00000101 + 1 = 00000110 = 6, so −6).',
  },
  {
    id: 'cs-1-1-q3',
    subtopicId: 'cs-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statement about binary shifts and overflow.',
    segments: ['A logical shift left by 3 places multiplies an unsigned binary integer by ', ', while an 8-bit unsigned sum greater than 255 triggers an ', ' error.'],
    wordBank: ['8', '6', 'overflow', 'underflow', 'parity'],
    answers: ['8', 'overflow'],
    explanation: 'Left shift by 3 multiplies by 2³ = 8; exceeding 255 in 8-bit unsigned addition causes a 9th carry bit (overflow error).',
  },
  {
    id: 'cs-1-1-q4',
    subtopicId: 'cs-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each binary representation concept to its exact definition.',
    pairs: [
      { left: 'Nibble', right: '4 binary bits represented by 1 hex digit' },
      { left: 'MSB in 8-bit two’s complement', right: 'Carries place value −128' },
      { left: 'Logical right shift by 1', right: 'Integer division by 2 (inserts 0 on left)' },
    ],
    explanation: 'Each nibble maps cleanly to 1 hex digit, the two’s complement MSB is −128, and a right shift by 1 divides by 2.',
  },
  {
    id: 'cs-1-1-q5',
    subtopicId: 'cs-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two reasons why programmers prefer hexadecimal over binary when inspecting memory dumps or MAC addresses. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Hexadecimal is much shorter than binary because each hex digit represents 4 bits, making it easier for humans to read and less prone to transcription errors.',
      markPoints: [
        { id: 'mp1', markDescription: 'Shorter / more compact (1 hex digit = 4 bits)', requiredKeywordGroups: [['shorter', 'compact', 'fewer digits', '4 bits']] },
        { id: 'mp2', markDescription: 'Easier for humans to read or fewer errors', requiredKeywordGroups: [['easier', 'read', 'less prone', 'error', 'mistake']] },
      ],
    },
    explanation: 'Hexadecimal packs 4 bits per digit, making addresses far shorter, easier to read, and less error-prone for humans.',
  },

  // cs-1-2
  {
    id: 'cs-1-2-q1',
    subtopicId: 'cs-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is Unicode used instead of 7-bit ASCII for international websites?',
    options: [
      'Unicode uses more bits per character to represent thousands of global scripts and emoji',
      'Unicode always creates smaller text files than 7-bit ASCII',
      'ASCII cannot represent uppercase English letters',
      'Unicode converts text directly into vector graphics',
    ],
    correctIndex: 0,
    explanation: '7-bit ASCII only holds 128 characters, whereas Unicode allocates 16–32 bits to encode global languages and emoji.',
  },
  {
    id: 'cs-1-2-q2',
    subtopicId: 'cs-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'An uncompressed bitmap image is 200 × 100 pixels with an 8-bit colour depth. What is its raw file size in bytes?',
    options: ['20,000 bytes', '160,000 bytes', '2,500 bytes', '40,000 bytes'],
    correctIndex: 0,
    explanation: '200 × 100 = 20,000 pixels; 8 bits = 1 byte per pixel, so 20,000 × 1 = 20,000 bytes.',
  },
  {
    id: 'cs-1-2-q3',
    subtopicId: 'cs-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statement on digital sound sampling.',
    segments: ['The number of amplitude measurements taken per second is the ', ', while the number of bits per sample is the ', '.'],
    wordBank: ['sample rate', 'sample resolution', 'colour depth', 'bandwidth'],
    answers: ['sample rate', 'sample resolution'],
    explanation: 'Sample rate (Hz) counts samples per second; sample resolution (bit depth) sets the bits stored per sample.',
  },
  {
    id: 'cs-1-2-q4',
    subtopicId: 'cs-1-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each data representation metric to its maximum distinct values.',
    pairs: [
      { left: '7-bit ASCII', right: '128 characters' },
      { left: '4-bit colour depth', right: '16 colours per pixel' },
      { left: '8-bit sample resolution', right: '256 amplitude levels' },
    ],
    explanation: 'With n bits you can represent 2ⁿ unique states: 2⁷ = 128, 2⁴ = 16, and 2⁸ = 256.',
  },
  {
    id: 'cs-1-2-q5',
    subtopicId: 'cs-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'State two effects of increasing the sample rate of a digital audio recording from 8 kHz to 44.1 kHz. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Sound quality and accuracy improve because the digital wave matches the original analogue wave more closely, and the file size increases significantly.',
      markPoints: [
        { id: 'mp1', markDescription: 'Higher sound quality / closer to original analogue wave', requiredKeywordGroups: [['quality', 'accura', 'closer', 'fidelity']] },
        { id: 'mp2', markDescription: 'Larger file size', requiredKeywordGroups: [['file size', 'larger', 'bigger', 'more storage']] },
      ],
    },
    explanation: 'More samples per second track rapid wave changes more accurately, at the cost of a proportionally larger file size.',
  },

  // cs-1-3
  {
    id: 'cs-1-3-q1',
    subtopicId: 'cs-1-3',
    type: 'mcq',
    marks: 1,
    prompt: 'How many bytes are in exactly 4 KiB under Cambridge 0478 IEC binary units?',
    options: ['4,096 bytes', '4,000 bytes', '32,768 bytes', '2,048 bytes'],
    correctIndex: 0,
    explanation: '1 KiB = 1,024 bytes, so 4 KiB = 4 × 1,024 = 4,096 bytes.',
  },
  {
    id: 'cs-1-3-q2',
    subtopicId: 'cs-1-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which file MUST use lossless compression rather than lossy compression?',
    options: [
      'A compiled Python/C++ executable program',
      'A podcast MP3 stream',
      'A social media photograph',
      'A 4K streaming movie',
    ],
    correctIndex: 0,
    explanation: 'Discarding even a single bit from program code or a database corrupts it irreparably; lossless compression guarantees exact reconstruction.',
  },
  {
    id: 'cs-1-3-q3',
    subtopicId: 'cs-1-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the description of compression methods.',
    segments: ['Replacing repeated consecutive characters with a count and value is called ', ', which is a ', ' algorithm.'],
    wordBank: ['Run-Length Encoding', 'lossless', 'lossy', 'asymmetric'],
    answers: ['Run-Length Encoding', 'lossless'],
    explanation: 'Run-Length Encoding (RLE) stores consecutive repeats as (count, value) pairs and reconstructs the original data losslessly.',
  },
  {
    id: 'cs-1-3-q4',
    subtopicId: 'cs-1-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO valid reasons for compressing files before transmitting them over a network.',
    options: [
      'Reduces network bandwidth usage',
      'Reduces upload and download transmission time',
      'Automatically encrypts the file with a private key',
      'Increases pixel colour depth',
    ],
    correctIndices: [0, 1],
    explanation: 'Smaller compressed files require less bandwidth and transmit faster (compression is not encryption and does not add detail).',
  },
  {
    id: 'cs-1-3-q5',
    subtopicId: 'cs-1-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Calculate the uncompressed file size in KiB of a 512 × 512 bitmap image with 8-bit colour depth. Show your value. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: '512 × 512 × 8 bits = 2,097,152 bits ÷ 8 = 262,144 bytes ÷ 1024 = 256 KiB.',
      markPoints: [
        { id: 'mp1', markDescription: 'Correct byte calculation (262,144 bytes or 512×512×1)', requiredKeywordGroups: [['262144', '262,144', '512']] },
        { id: 'mp2', markDescription: 'Final size = 256 KiB', numericMatch: { value: 256, tolerance: 0.1, unit: 'KiB' } },
      ],
    },
    explanation: '512 × 512 = 262,144 pixels × 1 byte = 262,144 bytes; dividing by 1,024 yields exactly 256 KiB.',
  },

  // cs-2-1
  {
    id: 'cs-2-1-q1',
    subtopicId: 'cs-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which field in a data packet header allows the destination computer to reassemble packets arriving out of order?',
    options: ['Packet sequence number', 'Payload', 'Cyclic Redundancy Check', 'MAC vendor prefix'],
    correctIndex: 0,
    explanation: 'Packets can take different paths across routers and arrive out of order; the header’s sequence number lets the receiver reassemble them cleanly.',
  },
  {
    id: 'cs-2-1-q2',
    subtopicId: 'cs-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is serial transmission preferred over parallel transmission for external cables longer than a few metres?',
    options: [
      'Avoids bit skew and crosstalk so bits arrive in exact sequence',
      'Sends 8 bits simultaneously down one copper wire',
      'Requires no error checking protocol',
      'Only operates in simplex mode',
    ],
    correctIndex: 0,
    explanation: 'In long parallel cables, bits travel at slightly different speeds causing data skew; serial transmits 1 bit at a time so bits never overtake each other.',
  },
  {
    id: 'cs-2-1-q3',
    subtopicId: 'cs-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the transmission direction modes.',
    segments: ['Data travelling in both directions simultaneously is called ', ', whereas data travelling both ways one direction at a time is ', '.'],
    wordBank: ['full-duplex', 'half-duplex', 'simplex', 'parallel'],
    answers: ['full-duplex', 'half-duplex'],
    explanation: 'Full-duplex allows simultaneous two-way transfer (e.g. phone/broadband), while half-duplex alternates directions (e.g. walkie-talkie).',
  },
  {
    id: 'cs-2-1-q4',
    subtopicId: 'cs-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each part of a network packet to its role.',
    pairs: [
      { left: 'Header', right: 'Stores source IP, destination IP, and sequence number' },
      { left: 'Payload', right: 'Carries the actual chunk of user data' },
      { left: 'Trailer', right: 'Holds end-of-packet marker and error-check code' },
    ],
    explanation: 'Every packet has a Header (addressing & ordering), Payload (data), and Trailer (EOF & CRC error check).',
  },
  {
    id: 'cs-2-1-q5',
    subtopicId: 'cs-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give two advantages of using a Universal Serial Bus (USB) connection for external computer peripherals. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Devices are automatically detected and configured via plug-and-play, and USB supplies electrical power to peripherals while remaining backward compatible.',
      markPoints: [
        { id: 'mp1', markDescription: 'Automatic device detection / plug-and-play driver loading', requiredKeywordGroups: [['automatic', 'plug-and-play', 'plug and play', 'detect']] },
        { id: 'mp2', markDescription: 'Supplies power OR backward compatible OR universal standard', requiredKeywordGroups: [['power', 'backward', 'standard', 'reversible']] },
      ],
    },
    explanation: 'USB automatically detects peripherals (plug-and-play), delivers power, and offers universal backward compatibility.',
  },

  // cs-2-2
  {
    id: 'cs-2-2-q1',
    subtopicId: 'cs-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Using EVEN parity, which parity bit should be added to the 7-bit data `1101011`?',
    options: ['1', '0', '2', 'Cannot be determined'],
    correctIndex: 0,
    explanation: '1101011 contains five 1s (odd); adding parity bit 1 makes six 1s (even).',
  },
  {
    id: 'cs-2-2-q2',
    subtopicId: 'cs-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Under what circumstance will a single-byte parity check FAIL to detect a transmission error?',
    options: [
      'When an even number of bits (e.g. 2 bits) flip in the same byte',
      'When exactly 1 bit flips from 0 to 1',
      'When exactly 3 bits flip in the same byte',
      'When the parity bit itself flips alone',
    ],
    correctIndex: 0,
    explanation: 'If 2 (or any even number of) bits flip, the parity remains even/odd as expected, masking the error.',
  },
  {
    id: 'cs-2-2-q3',
    subtopicId: 'cs-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the error-control protocol statement.',
    segments: ['In Automatic Repeat Query (ARQ), the sender waits for an ', ' and automatically retransmits if the ', ' expires first.'],
    wordBank: ['acknowledgement', 'timeout', 'check digit', 'echo'],
    answers: ['acknowledgement', 'timeout'],
    explanation: 'ARQ relies on positive acknowledgements (ACK) and a timeout timer to trigger automatic retransmission.',
  },
  {
    id: 'cs-2-2-q4',
    subtopicId: 'cs-2-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each error detection technique to its best description.',
    pairs: [
      { left: 'Check digit', right: 'Calculated final digit on barcodes/ISBNs catching human typing errors' },
      { left: 'Checksum', right: 'Block calculation recomputed on arrival to spot network corruption' },
      { left: 'Echo check', right: 'Receiver returns a full copy of data to sender for comparison' },
    ],
    explanation: 'Check digits catch manual entry errors, checksums verify transmitted blocks, and echo checks return data copies.',
  },
  {
    id: 'cs-2-2-q5',
    subtopicId: 'cs-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how a 2D parity block can locate and correct a single flipped bit during transmission. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Parity is checked across every horizontal row and vertical column; the intersection of the single failed row and failed column identifies the exact corrupted bit to flip back.',
      markPoints: [
        { id: 'mp1', markDescription: 'Checks parity across both rows (horizontal) and columns (vertical)', requiredKeywordGroups: [['row', 'horizontal'], ['column', 'vertical']] },
        { id: 'mp2', markDescription: 'Intersection identifies exact erroneous bit', requiredKeywordGroups: [['intersect', 'cross', 'exact', 'locate', 'identify']] },
      ],
    },
    explanation: 'The single row and single column whose parity fails intersect directly at the corrupted bit.',
  },

  // cs-2-3
  {
    id: 'cs-2-3-q1',
    subtopicId: 'cs-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'In asymmetric encryption, if Alice wants to send a confidential message to Bob, which key does Alice use to encrypt it?',
    options: ['Bob’s public key', 'Bob’s private key', 'Alice’s private key', 'A shared symmetric key'],
    correctIndex: 0,
    explanation: 'Alice encrypts with Bob’s openly shared public key so only Bob’s secret private key can decrypt the ciphertext.',
  },
  {
    id: 'cs-2-3-q2',
    subtopicId: 'cs-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the main security weakness of symmetric encryption over an insecure network?',
    options: [
      'The single shared secret key must be exchanged and could be intercepted',
      'It is slower than asymmetric encryption on huge files',
      'It produces readable plaintext',
      'It requires two different keys per device',
    ],
    correctIndex: 0,
    explanation: 'Both sender and receiver need the exact same key; if that key is intercepted during exchange, security is broken.',
  },
  {
    id: 'cs-2-3-q3',
    subtopicId: 'cs-2-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the encryption terminology.',
    segments: ['An encryption algorithm uses a key to scramble readable ', ' into unreadable ', '.'],
    wordBank: ['plaintext', 'ciphertext', 'checksum', 'header'],
    answers: ['plaintext', 'ciphertext'],
    explanation: 'Plaintext is the readable input; ciphertext is the scrambled output.',
  },
  {
    id: 'cs-2-3-q4',
    subtopicId: 'cs-2-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO accurate statements about asymmetric encryption.',
    options: [
      'The private key never needs to be transmitted over the network',
      'Public and private keys are mathematically linked as a pair',
      'Encryption stops packets from being intercepted on Wi-Fi',
      'The same key is used for both encryption and decryption',
    ],
    correctIndices: [0, 1],
    explanation: 'Asymmetric cryptography uses mathematically linked key pairs and keeps the private key strictly local (never transmitted).',
  },
  {
    id: 'cs-2-3-q5',
    subtopicId: 'cs-2-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why encryption protects confidential data even if an attacker intercepts the transmitted packets. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Plaintext is scrambled into ciphertext using a key so intercepted data is meaningless and unreadable without the matching decryption key.',
      markPoints: [
        { id: 'mp1', markDescription: 'Scrambled into ciphertext / meaningless / unreadable', requiredKeywordGroups: [['ciphertext', 'meaningless', 'unreadable', 'scrambled']] },
        { id: 'mp2', markDescription: 'Cannot be understood without the decryption key', requiredKeywordGroups: [['decryption key', 'key']] },
      ],
    },
    explanation: 'Encryption does not stop interception; it renders intercepted ciphertext unreadable without the decryption key.',
  },

  // cs-3-1
  {
    id: 'cs-3-1-q1',
    subtopicId: 'cs-3-1',
    type: 'mcq',
    marks: 1,
    diagram: 'cpu-fde-architecture',
    prompt: 'Which CPU register holds the memory address of the NEXT instruction to be fetched?',
    options: ['Program Counter (PC)', 'Current Instruction Register (CIR)', 'Accumulator (ACC)', 'Memory Data Register (MDR)'],
    correctIndex: 0,
    explanation: 'The Program Counter (PC) tracks the address of the next instruction and increments during Fetch.',
  },
  {
    id: 'cs-3-1-q2',
    subtopicId: 'cs-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which system bus is strictly UNIDIRECTIONAL (CPU to memory only) in Von Neumann architecture?',
    options: ['Address Bus', 'Data Bus', 'Control Bus', 'USB Bus'],
    correctIndex: 0,
    explanation: 'Memory addresses travel only from the CPU (MAR) to RAM along the unidirectional Address Bus.',
  },
  {
    id: 'cs-3-1-q3',
    subtopicId: 'cs-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the CPU performance statement.',
    segments: ['High-speed ', ' memory stores frequently used instructions near the CPU, while a dedicated microcontroller inside a washing machine is an ', ' system.'],
    wordBank: ['cache', 'embedded', 'optical', 'virtual'],
    answers: ['cache', 'embedded'],
    explanation: 'Cache cuts slow RAM fetches; embedded systems perform dedicated single-purpose control tasks inside appliances.',
  },
  {
    id: 'cs-3-1-q4',
    subtopicId: 'cs-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each CPU component to its exact responsibility.',
    pairs: [
      { left: 'ALU', right: 'Performs arithmetic and logical operations' },
      { left: 'Control Unit (CU)', right: 'Decodes instructions in CIR and sends control signals' },
      { left: 'Accumulator (ACC)', right: 'Temporarily stores intermediate ALU calculation results' },
    ],
    explanation: 'The ALU computes, the CU decodes and coordinates timing/control signals, and the ACC holds intermediate results.',
  },
  {
    id: 'cs-3-1-q5',
    subtopicId: 'cs-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how increasing the size of CPU cache memory improves processor performance. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'More frequently used instructions and data can be stored in fast cache close to the CPU, reducing the number of slower fetches required from main RAM.',
      markPoints: [
        { id: 'mp1', markDescription: 'Stores more frequently used data/instructions close to CPU', requiredKeywordGroups: [['frequently', 'cache', 'closer', 'faster']] },
        { id: 'mp2', markDescription: 'Reduces slower fetches from main memory (RAM)', requiredKeywordGroups: [['ram', 'main memory', 'fewer fetches', 'reducing']] },
      ],
    },
    explanation: 'Cache hits avoid slow RAM trips, letting the CPU execute instructions with far less wait latency.',
  },

  // cs-3-2
  {
    id: 'cs-3-2-q1',
    subtopicId: 'cs-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How many bits make up a standard MAC address and an IPv6 address respectively?',
    options: ['48 bits and 128 bits', '32 bits and 64 bits', '48 bits and 32 bits', '64 bits and 128 bits'],
    correctIndex: 0,
    explanation: 'MAC addresses are 48-bit hex hardware IDs; IPv6 addresses are 128-bit hex logical addresses (IPv4 is 32-bit).',
  },
  {
    id: 'cs-3-2-q2',
    subtopicId: 'cs-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is an Analogue-to-Digital Converter (ADC) required between a temperature sensor and a microprocessor?',
    options: [
      'Sensors output continuous analogue signals, whereas microprocessors only process digital binary data',
      'Sensors output hexadecimal packets directly',
      'ADCs power the mechanical actuator',
      'ADCs increase Wi-Fi router bandwidth',
    ],
    correctIndex: 0,
    explanation: 'Microprocessors operate strictly on discrete binary values, so analogue sensor voltages must be digitised by an ADC.',
  },
  {
    id: 'cs-3-2-q3',
    subtopicId: 'cs-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the network hardware summary.',
    segments: ['A permanent physical hardware address burned into a NIC is a ', ', while a ', ' inspects destination IP addresses to forward packets between networks.'],
    wordBank: ['MAC address', 'router', 'actuator', 'check digit'],
    answers: ['MAC address', 'router'],
    explanation: 'NICs hold a permanent 48-bit MAC address; routers consult routing tables to forward packets by IP address.',
  },
  {
    id: 'cs-2-2-3-2-m',
    subtopicId: 'cs-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each hardware device to its working principle.',
    pairs: [
      { left: 'Capacitive touchscreen', right: 'Detects electrostatic field change from a conductive finger' },
      { left: 'Laser printer', right: 'Fuses powdered toner onto paper using an electrostatic drum' },
      { left: 'Actuator', right: 'Converts electrical control signals into physical movement' },
    ],
    explanation: 'Capacitive screens sense electrostatic shifts, laser printers fuse toner, and actuators produce physical motion.',
  },
  {
    id: 'cs-3-2-q5',
    subtopicId: 'cs-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give two differences between a MAC address and an IPv4 address. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A MAC address is a permanent 48-bit hexadecimal hardware address burned into the NIC, whereas an IPv4 address is a 32-bit denary logical address assigned by the network that changes when moving networks.',
      markPoints: [
        { id: 'mp1', markDescription: 'MAC is permanent/physical (48-bit hex) vs IP is logical/changeable', requiredKeywordGroups: [['permanent', 'hardware', 'physical', '48'], ['logical', 'change', 'assign', 'network']] },
        { id: 'mp2', markDescription: 'Bit-length or format contrast (48-bit hex vs 32-bit denary)', requiredKeywordGroups: [['hex', '48'], ['32', 'denary', 'dynamic', 'static']] },
      ],
    },
    explanation: 'MAC addresses are permanent 48-bit hex physical IDs on the NIC; IPv4 addresses are 32-bit logical network locations.',
  },

  // cs-3-3
  {
    id: 'cs-3-3-q1',
    subtopicId: 'cs-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which storage component is non-volatile and stores the computer’s startup bootstrap instructions?',
    options: ['ROM', 'RAM', 'L1 Cache', 'MDR Register'],
    correctIndex: 0,
    explanation: 'ROM is non-volatile read-only primary memory that permanently holds the BIOS/bootstrap loader.',
  },
  {
    id: 'cs-3-3-q2',
    subtopicId: 'cs-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why are Solid-State Drives (SSDs) more reliable than Magnetic Hard Disk Drives (HDDs) in portable laptops?',
    options: [
      'SSDs use NAND flash transistors with no moving parts, resisting drops and shocks',
      'SSDs store data using blue lasers on removable plastic discs',
      'SSDs are volatile so they clear corrupted files on shutdown',
      'SSDs always cost less per terabyte than magnetic tape',
    ],
    correctIndex: 0,
    explanation: 'Zero moving platters or read/write heads make SSDs shock-resistant, silent, fast, and energy-efficient.',
  },
  {
    id: 'cs-3-3-q3',
    subtopicId: 'cs-3-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statement on virtual memory.',
    segments: ['When ', ' becomes full, the operating system transfers inactive ', ' to secondary storage so active programs can keep running.'],
    wordBank: ['RAM', 'pages', 'ROM', 'registers'],
    answers: ['RAM', 'pages'],
    explanation: 'Virtual memory pages inactive blocks out of RAM onto secondary storage whenever RAM reaches capacity.',
  },
  {
    id: 'cs-3-3-q4',
    subtopicId: 'cs-3-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO drawbacks of relying exclusively on cloud storage for school files.',
    options: [
      'Requires a reliable internet connection to access or upload files',
      'Ongoing subscription costs and reliance on third-party security/privacy',
      'Files cannot be accessed from more than one device',
      'Cloud data centres have zero backup redundancy',
    ],
    correctIndices: [0, 1],
    explanation: 'Cloud storage relies on internet access and third-party providers/subscriptions, though it excels at multi-device access and redundancy.',
  },
  {
    id: 'cs-3-3-q5',
    subtopicId: 'cs-3-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how a magnetic hard disk drive (HDD) stores and reads binary data. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Spinning magnetic platters divided into tracks and sectors have tiny regions magnetised in different polarities to represent 0 and 1, read by moving read/write heads.',
      markPoints: [
        { id: 'mp1', markDescription: 'Spinning platters divided into tracks/sectors with magnetic polarity for 0 and 1', requiredKeywordGroups: [['platter', 'track', 'sector', 'magnet']] },
        { id: 'mp2', markDescription: 'Read/write head moves across surface to sense/change magnetism', requiredKeywordGroups: [['read/write', 'head', 'polarit', '0', '1']] },
      ],
    },
    explanation: 'HDDs magnetise domains along concentric tracks and sectors on spinning platters, sensed by electromagnetic read/write heads.',
  },
];

export const IGCSE_CS_UNITS_1_3_FLASHCARDS: FlashcardItem[] = [
  // cs-1-1
  { id: 'cs-1-1-fc1', subtopicId: 'cs-1-1', front: 'Why do computers represent all data in binary (base-2)?', backBullets: ['CPUs contain billions of transistor switches.', 'Each switch has only two reliable states: OFF (0) and ON (1).'] },
  { id: 'cs-1-1-fc2', subtopicId: 'cs-1-1', front: 'Give 4 real-world uses of hexadecimal in Computer Science.', backBullets: ['MAC addresses & IPv6 addresses.', 'HTML/CSS RGB colour codes (#FF2A00), error codes & memory dumps.'] },
  { id: 'cs-1-1-fc3', subtopicId: 'cs-1-1', front: 'What is an 8-bit overflow error?', backBullets: ['Occurs when an unsigned 8-bit addition exceeds 255.', 'Produces a 9th carry bit that cannot fit inside an 8-bit register.'] },
  { id: 'cs-1-1-fc4', subtopicId: 'cs-1-1', front: 'What do logical left and right binary shifts do?', backBullets: ['Left shift by n places multiplies by 2ⁿ (inserts 0s on right).', 'Right shift by n places performs integer division by 2ⁿ (inserts 0s on left).'] },
  { id: 'cs-1-1-fc5', subtopicId: 'cs-1-1', front: 'How do you negate a positive integer in 8-bit two’s complement?', backBullets: ['Write positive binary, flip all bits (0↔1), and add 1.', 'Range of 8-bit two’s complement is −128 to +127 (MSB weight = −128).'] },

  // cs-1-2
  { id: 'cs-1-2-fc1', subtopicId: 'cs-1-2', front: 'Compare 7-bit ASCII vs Unicode.', backBullets: ['7-bit ASCII encodes 128 English characters; compact file size.', 'Unicode (16–32 bits) encodes 149,000+ global characters & emoji but uses more storage per character.'] },
  { id: 'cs-1-2-fc2', subtopicId: 'cs-1-2', front: 'Define sample rate and sample resolution in digital sound.', backBullets: ['Sample rate (Hz): number of sound amplitude samples taken per second.', 'Sample resolution (bits): number of bits recorded for each sample’s amplitude.'] },
  { id: 'cs-1-2-fc3', subtopicId: 'cs-1-2', front: 'State the formula for uncompressed mono sound file size (in bits).', backBullets: ['Size (bits) = Sample Rate (Hz) × Sample Resolution (bits) × Duration (s).', 'Divide by 8 for bytes, then by 1024 for KiB.'] },
  { id: 'cs-1-2-fc4', subtopicId: 'cs-1-2', front: 'How does colour depth determine the number of colours in a bitmap?', backBullets: ['An n-bit colour depth can represent 2ⁿ distinct colours per pixel.', 'Example: 8-bit = 256 colours; 24-bit = 16.7 million True Colour shades.'] },
  { id: 'cs-1-2-fc5', subtopicId: 'cs-1-2', front: 'State the formula for raw bitmap image file size (in bytes).', backBullets: ['Size (bytes) = (Width × Height × Colour Depth in bits) ÷ 8.', 'Metadata adds a small header storing width, height, and colour depth.'] },

  // cs-1-3
  { id: 'cs-1-3-fc1', subtopicId: 'cs-1-3', front: 'List the Cambridge 0478 IEC binary storage units in ascending order.', backBullets: ['Bit → Nibble (4b) → Byte (8b) → KiB → MiB → GiB → TiB → PiB → EiB.', 'Each step above Byte multiplies by exactly 1,024 (2¹⁰).'] },
  { id: 'cs-1-3-fc2', subtopicId: 'cs-1-3', front: 'Give 4 reasons for compressing files.', backBullets: ['Uses less network bandwidth and transmits faster.', 'Consumes less secondary storage and meets attachment/streaming limits.'] },
  { id: 'cs-1-3-fc3', subtopicId: 'cs-1-3', front: 'Contrast lossy and lossless compression.', backBullets: ['Lossless (RLE, ZIP, PNG): exact bit-for-bit original restored; essential for code/text.', 'Lossy (JPEG, MP3, MP4): permanently discards imperceptible detail for far smaller files.'] },
  { id: 'cs-1-3-fc4', subtopicId: 'cs-1-3', front: 'How does Run-Length Encoding (RLE) compress data?', backBullets: ['Replaces consecutive identical data items with (count, value) pairs.', 'Example: AAAAABBB → (5,A)(3,B).'] },
  { id: 'cs-1-3-fc5', subtopicId: 'cs-1-3', front: 'How does MP3 lossy compression reduce audio file sizes?', backBullets: ['Perceptual music shaping removes frequencies outside human hearing range.', 'Also discards quieter sounds masked by simultaneous louder sounds.'] },

  // cs-2-1
  { id: 'cs-2-1-fc1', subtopicId: 'cs-2-1', front: 'What are the three parts of a network data packet?', backBullets: ['Header (Source IP, Destination IP, Packet Sequence Number).', 'Payload (actual user data) and Trailer (EOF marker & error-checking CRC).'] },
  { id: 'cs-2-1-fc2', subtopicId: 'cs-2-1', front: 'How does packet switching deliver a message across the Internet?', backBullets: ['File is split into packets routed independently by routers along least-congested paths.', 'Destination reassembles packets in sequence using header numbers and requests missing ones.'] },
  { id: 'cs-2-1-fc3', subtopicId: 'cs-2-1', front: 'Compare serial vs parallel data transmission.', backBullets: ['Serial: 1 bit at a time on 1 wire; zero skew, reliable over long distances.', 'Parallel: multiple bits at once on parallel wires; fast over short CPU buses, skews over long cables.'] },
  { id: 'cs-2-1-fc4', subtopicId: 'cs-2-1', front: 'Define simplex, half-duplex, and full-duplex transmission.', backBullets: ['Simplex: one direction only; Half-duplex: both ways, one at a time.', 'Full-duplex: both directions simultaneously (e.g. phone/broadband).'] },
  { id: 'cs-2-1-fc5', subtopicId: 'cs-2-1', front: 'List 3 key advantages of the USB interface.', backBullets: ['Automatic plug-and-play device detection & driver loading.', 'Provides electrical power, universal industry standard, backward compatible.'] },

  // cs-2-2
  { id: 'cs-2-2-fc1', subtopicId: 'cs-2-2', front: 'How do even and odd parity checks detect bit errors?', backBullets: ['A parity bit is added so the total count of 1s in the byte is even (or odd).', 'Receiver recounts 1s; a mismatch indicates corruption (but 2-bit flips go undetected!).'] },
  { id: 'cs-2-2-fc2', subtopicId: 'cs-2-2', front: 'How does a 2D parity block locate a corrupted bit?', backBullets: ['Checks parity across both horizontal rows and vertical columns.', 'The intersection of the failed row and failed column identifies the exact flipped bit.'] },
  { id: 'cs-2-2-fc3', subtopicId: 'cs-2-2', front: 'How does a checksum verify transmitted data?', backBullets: ['Sender computes a numeric value from a data block and transmits it alongside the block.', 'Receiver repeats the same calculation; mismatch triggers a retransmission request.'] },
  { id: 'cs-2-2-fc4', subtopicId: 'cs-2-2', front: 'When is a check digit used instead of a checksum?', backBullets: ['Appended to barcodes, ISBN-13, or account numbers to catch human typing/scanning errors.', 'Detects single-digit mistakes and adjacent digit transpositions on data entry.'] },
  { id: 'cs-2-2-fc5', subtopicId: 'cs-2-2', front: 'Outline the Automatic Repeat Query (ARQ) cycle.', backBullets: ['Sender transmits frame and starts a timeout timer; receiver validates and returns ACK.', 'If no ACK arrives before timeout (or NACK arrives), sender automatically resends the frame.'] },

  // cs-2-3
  { id: 'cs-2-3-fc1', subtopicId: 'cs-2-3', front: 'What is the real purpose of encrypting transmitted data?', backBullets: ['Does NOT stop interception — converts plaintext into meaningless ciphertext.', 'Intercepted data cannot be understood without the matching decryption key.'] },
  { id: 'cs-2-3-fc2', subtopicId: 'cs-2-3', front: 'Define symmetric encryption and state its main risk.', backBullets: ['Uses one identical shared secret key to encrypt and decrypt data.', 'Fast for bulk data, but the shared key could be intercepted during initial exchange.'] },
  { id: 'cs-2-3-fc3', subtopicId: 'cs-2-3', front: 'How does asymmetric encryption solve the key-exchange problem?', backBullets: ['Uses a linked Public Key (shared freely) and Private Key (never transmitted).', 'Data encrypted with the recipient’s Public Key can ONLY be decrypted by their secret Private Key.'] },
  { id: 'cs-2-3-fc4', subtopicId: 'cs-2-3', front: 'Which key encrypts and which decrypts in an asymmetric confidential transfer to Bob?', backBullets: ['Sender encrypts using Bob’s Public Key.', 'Bob decrypts using Bob’s Private Key.'] },
  { id: 'cs-2-3-fc5', subtopicId: 'cs-2-3', front: 'Why do secure protocols like HTTPS combine asymmetric and symmetric encryption?', backBullets: ['Asymmetric safely exchanges a temporary session key without interception risk.', 'Symmetric then encrypts bulk web traffic at high speed.'] },

  // cs-3-1
  { id: 'cs-3-1-fc1', subtopicId: 'cs-3-1', front: 'What is the defining feature of Von Neumann architecture?', backBullets: ['Both program instructions and data are stored together in the same main memory (RAM).', 'CPU fetches instructions sequentially via shared Address, Data, and Control buses.'] },
  { id: 'cs-3-1-fc2', subtopicId: 'cs-3-1', front: 'Name the 5 Von Neumann CPU registers and their roles.', backBullets: ['PC (next instruction address), MAR (current RAM address), MDR (data fetched/written).', 'CIR (current instruction being decoded), ACC (intermediate ALU results).'] },
  { id: 'cs-3-1-fc3', subtopicId: 'cs-3-1', front: 'Summarise the 3 phases of the Fetch–Decode–Execute (FDE) cycle.', backBullets: ['Fetch: PC→MAR→RAM→MDR→CIR and PC increments by 1.', 'Decode: CU splits CIR into opcode/operand. Execute: ALU/CU runs instruction.'] },
  { id: 'cs-3-1-fc4', subtopicId: 'cs-3-1', front: 'How do clock speed, core count, and cache impact CPU performance?', backBullets: ['Clock speed = cycles/s; Cores = parallel thread execution.', 'Cache = fast on-chip SRAM reducing slow RAM fetches.'] },
  { id: 'cs-3-1-fc5', subtopicId: 'cs-3-1', front: 'Define an embedded system and give 3 examples.', backBullets: ['Dedicated microprocessor/microcontroller built inside a larger device for one fixed function.', 'Examples: washing machine controller, car ABS braking, microwave oven, pacemaker.'] },

  // cs-3-2
  { id: 'cs-3-2-fc1', subtopicId: 'cs-3-2', front: 'Contrast capacitive and resistive touchscreens.', backBullets: ['Capacitive: senses electrostatic field change from bare finger; sharp & multi-touch.', 'Resistive: pressure joins two conductive layers; cheaper & works with gloves/stylus.'] },
  { id: 'cs-3-2-fc2', subtopicId: 'cs-3-2', front: 'State the 5-step closed-loop sensor control sequence.', backBullets: ['Sensor reads continuously → ADC converts analogue to digital → Microprocessor compares with preset.', 'If out of range, microprocessor signals Actuator → process loops continuously.'] },
  { id: 'cs-3-2-fc3', subtopicId: 'cs-3-2', front: 'What is a MAC address and how is it structured?', backBullets: ['Unique 48-bit (6 hex pairs) permanent physical address burned into a NIC.', 'First 24 bits = Manufacturer ID; last 24 bits = Serial device ID.'] },
  { id: 'cs-3-2-fc4', subtopicId: 'cs-3-2', front: 'Compare IPv4 and IPv6 addresses.', backBullets: ['IPv4: 32-bit denary (4 octets, ~4.3 billion addresses — exhausted).', 'IPv6: 128-bit hexadecimal (8 hex groups, ~3.4 × 10³⁸ addresses).'] },
  { id: 'cs-3-2-fc5', subtopicId: 'cs-3-2', front: 'What are the two main functions of a network router?', backBullets: ['Inspects packet destination IP addresses and forwards packets across networks via its routing table.', 'Assigns local private IP addresses to LAN devices using DHCP.'] },

  // cs-3-3
  { id: 'cs-3-3-fc1', subtopicId: 'cs-3-3', front: 'Contrast RAM and ROM.', backBullets: ['RAM: volatile, read/write, holds running OS, apps & active user data.', 'ROM: non-volatile, read-only, permanently holds BIOS/bootstrap startup firmware.'] },
  { id: 'cs-3-3-fc2', subtopicId: 'cs-3-3', front: 'Compare Magnetic (HDD), Solid-State (SSD), and Optical storage.', backBullets: ['HDD: spinning magnetised platters; cheap per GiB, fragile moving parts.', 'SSD: NAND flash floating-gate transistors; fast, silent, shock-proof. Optical: laser pits & lands.'] },
  { id: 'cs-3-3-fc3', subtopicId: 'cs-3-3', front: 'Explain how virtual memory prevents crashes when RAM fills up.', backBullets: ['OS moves inactive program pages from RAM onto secondary storage (HDD/SSD).', 'Frees RAM for active tasks; swaps pages back when required (excessive swapping = thrashing).'] },
  { id: 'cs-3-3-fc4', subtopicId: 'cs-3-3', front: 'Give 2 advantages and 2 drawbacks of cloud storage.', backBullets: ['Pros: anywhere/any-device access, automatic off-site backup, scalable capacity.', 'Cons: needs internet access, recurring fees, third-party security/privacy dependence.'] },
  { id: 'cs-3-3-fc5', subtopicId: 'cs-3-3', front: 'How do SSD flash cells store 0s and 1s without moving parts?', backBullets: ['Control gate applies voltage to trap or release electrons inside a floating gate transistor.', 'Trapped charge state persists without power (non-volatile NAND flash).'] },
];

export const IGCSE_CS_UNITS_1_3_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'cs-ex-1-1',
    subtopicId: 'cs-1-1',
    number: 1,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A smart thermostat stores signed temperatures in 8-bit two’s complement binary and outputs diagnostic codes in hexadecimal.',
    parts: [
      {
        id: 'cs-ex-1-1-a',
        label: '(a)',
        prompt: 'Convert the denary temperature −18 into 8-bit two’s complement binary. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '+18 is 00010010; flipping all bits gives 11101101 and adding 1 yields 11101110.',
          markPoints: [
            { id: 'mp1', markDescription: 'Shows positive +18 = 00010010 or valid flip+1 method', requiredKeywordGroups: [['00010010', 'flip', 'invert', '-128']] },
            { id: 'mp2', markDescription: 'Final 8-bit two’s complement value 11101110', requiredKeywordGroups: [['11101110', '1110 1110']] },
          ],
        },
      },
      {
        id: 'cs-ex-1-1-b',
        label: '(b)',
        prompt: 'Explain what happens if two 8-bit unsigned integers `11000000` (192) and `01010000` (80) are added inside an 8-bit register. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'The sum is 272 which exceeds 255 and requires a 9th carry bit, causing an overflow error so the register stores an incorrect truncated value.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies overflow error because sum > 255 (needs 9 bits)', requiredKeywordGroups: [['overflow'], ['255', '9th', '9 bits', '272']] },
            { id: 'mp2', markDescription: 'Carry bit is lost / incorrect truncated result stored', requiredKeywordGroups: [['lost', 'truncat', 'incorrect', 'wrong']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-1-2',
    subtopicId: 'cs-1-2',
    number: 2,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A podcast producer records a 20-second mono voice intro at a sample rate of 20,000 Hz and a sample resolution of 16 bits.',
    parts: [
      {
        id: 'cs-ex-1-2-a',
        label: '(a)',
        prompt: 'Calculate the raw uncompressed size of the audio recording in bytes. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '20,000 × 16 × 20 = 6,400,000 bits; dividing by 8 gives 800,000 bytes.',
          markPoints: [
            { id: 'mp1', markDescription: 'Shows Rate × Resolution × Time ÷ 8', requiredKeywordGroups: [['20000', '20,000', '6400000', '6,400,000']] },
            { id: 'mp2', markDescription: 'Correct result 800,000 bytes', numericMatch: { value: 800000, tolerance: 1, unit: 'bytes' } },
          ],
        },
      },
      {
        id: 'cs-ex-1-2-b',
        label: '(b)',
        prompt: 'Explain how increasing the sample resolution from 16 bits to 24 bits affects the recording. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'More bits per sample capture finer amplitude levels for higher audio accuracy and dynamic range, but the file size increases by 50%.',
          markPoints: [
            { id: 'mp1', markDescription: 'Greater accuracy / more amplitude levels / higher quality', requiredKeywordGroups: [['amplitude', 'accura', 'quality', 'dynamic range']] },
            { id: 'mp2', markDescription: 'Larger file size', requiredKeywordGroups: [['file size', 'larger', 'bigger', 'increases']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-1-3',
    subtopicId: 'cs-1-3',
    number: 3,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A graphic designer needs to email both a 1024 × 512 24-bit promotional photograph and a Python automation script to a client.',
    parts: [
      {
        id: 'cs-ex-1-3-a',
        label: '(a)',
        prompt: 'Calculate the uncompressed file size of the 1024 × 512 24-bit image in KiB. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '1024 × 512 × 3 bytes = 1,572,864 bytes; dividing by 1024 gives 1,536 KiB.',
          markPoints: [
            { id: 'mp1', markDescription: 'Converts 24 bits to 3 bytes (or ÷ 8) and divides by 1024', requiredKeywordGroups: [['1024', '3', '1572864', '1,572,864']] },
            { id: 'mp2', markDescription: 'Final size = 1536 KiB', numericMatch: { value: 1536, tolerance: 0.5, unit: 'KiB' } },
          ],
        },
      },
      {
        id: 'cs-ex-1-3-b',
        label: '(b)',
        prompt: 'Justify why lossless compression must be used for the Python script whereas lossy compression is suitable for the web photograph. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Lossless compression preserves every bit so the Python script executes without syntax corruption, whereas lossy compression removes imperceptible visual detail to shrink the photograph much further for fast web transfer.',
          markPoints: [
            { id: 'mp1', markDescription: 'Script requires exact bit reconstruction / no data loss so code runs', requiredKeywordGroups: [['lossless', 'exact', 'no data loss', 'corrupt', 'code']] },
            { id: 'mp2', markDescription: 'Lossy removes imperceptible photo detail for far smaller file size', requiredKeywordGroups: [['lossy', 'imperceptible', 'smaller', 'detail']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-2-1',
    subtopicId: 'cs-2-1',
    number: 4,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A newsroom transmits a high-definition video across the Internet using packet switching rather than a single dedicated circuit.',
    diagram: 'tcpip-packet-switching',
    parts: [
      {
        id: 'cs-ex-2-1-a',
        label: '(a)',
        prompt: 'Describe how packet switching routes the video packets from sender to receiver and reassembles the file. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The video is split into packets containing source/destination IPs and sequence numbers; routers forward each packet independently along the fastest uncongested route, and the receiver reorders them using the sequence numbers.',
          markPoints: [
            { id: 'mp1', markDescription: 'Data split into packets with IP addresses and sequence numbers', requiredKeywordGroups: [['split', 'packet'], ['sequence', 'ip']] },
            { id: 'mp2', markDescription: 'Routers forward packets independently via different/fastest routes', requiredKeywordGroups: [['router'], ['independent', 'different', 'fastest', 'route']] },
            { id: 'mp3', markDescription: 'Receiver reassembles in correct order using sequence numbers', requiredKeywordGroups: [['reassembl', 'reorder', 'order'], ['sequence']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-2-2',
    subtopicId: 'cs-2-2',
    number: 5,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A satellite telemetry link transfers sensor readings over a noisy wireless channel using odd parity and Automatic Repeat Query (ARQ).',
    parts: [
      {
        id: 'cs-ex-2-2-a',
        label: '(a)',
        prompt: 'Describe how ARQ ensures corrupted or missing telemetry packets are delivered accurately. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The sender transmits a packet and starts a timeout timer; if the receiver verifies no errors it returns an acknowledgement (ACK), otherwise if no ACK arrives before timeout expires the sender automatically retransmits the packet.',
          markPoints: [
            { id: 'mp1', markDescription: 'Sender starts timeout timer upon sending', requiredKeywordGroups: [['timeout', 'timer']] },
            { id: 'mp2', markDescription: 'Receiver validates and sends ACK (acknowledgement)', requiredKeywordGroups: [['ack', 'acknowledg']] },
            { id: 'mp3', markDescription: 'Automatic retransmission if no ACK before timeout', requiredKeywordGroups: [['retransmit', 'resend', 'sent again']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-2-3',
    subtopicId: 'cs-2-3',
    number: 6,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: An online pharmacy sends patients’ prescription records over public Wi-Fi using asymmetric encryption.',
    parts: [
      {
        id: 'cs-ex-2-3-a',
        label: '(a)',
        prompt: 'Explain step-by-step how asymmetric encryption protects the prescription record in transit from the pharmacy to a patient. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The pharmacy encrypts the plaintext prescription using the patient’s openly shared public key to produce ciphertext; only the patient’s secret private key (which is never transmitted) can decrypt the ciphertext back to plaintext.',
          markPoints: [
            { id: 'mp1', markDescription: 'Encrypts plaintext with recipient’s public key into ciphertext', requiredKeywordGroups: [['public key'], ['ciphertext', 'encrypt']] },
            { id: 'mp2', markDescription: 'Only recipient’s private key can decrypt it', requiredKeywordGroups: [['private key'], ['decrypt']] },
            { id: 'mp3', markDescription: 'Private key is never sent over network (solves key exchange)', requiredKeywordGroups: [['never', 'not transmitted', 'secret', 'not shared']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-3-1',
    subtopicId: 'cs-3-1',
    number: 7,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A desktop workstation uses a quad-core 3.6 GHz Von Neumann CPU with 16 MiB L3 cache.',
    diagram: 'cpu-fde-architecture',
    parts: [
      {
        id: 'cs-ex-3-1-a',
        label: '(a)',
        prompt: 'Trace the Fetch stage of the Fetch–Decode–Execute cycle, naming the relevant registers and system buses. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The address in the Program Counter (PC) is copied to the MAR and sent along the Address Bus while the CU sends a read signal on the Control Bus; the instruction returns along the Data Bus into the MDR, is copied to the CIR, and PC increments by 1.',
          markPoints: [
            { id: 'mp1', markDescription: 'PC copied to MAR and placed on Address Bus', requiredKeywordGroups: [['pc', 'program counter'], ['mar'], ['address bus']] },
            { id: 'mp2', markDescription: 'Instruction fetched via Data Bus into MDR and copied to CIR', requiredKeywordGroups: [['data bus'], ['mdr'], ['cir']] },
            { id: 'mp3', markDescription: 'Program Counter (PC) increments by 1', requiredKeywordGroups: [['increment', '+ 1', 'by 1']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-3-2',
    subtopicId: 'cs-3-2',
    number: 8,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A smart city uses light sensors connected to a microprocessor to automatically switch LED streetlights ON whenever ambient light drops below 40 lux.',
    parts: [
      {
        id: 'cs-ex-3-2-a',
        label: '(a)',
        prompt: 'Explain how the light sensor, ADC, microprocessor, and actuator work together to control the streetlights. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The light sensor continuously sends analogue readings to an ADC which converts them to digital binary; the microprocessor compares the digital value against the stored 40 lux preset and, if lower, signals an actuator/relay to switch the streetlights ON in a continuous loop.',
          markPoints: [
            { id: 'mp1', markDescription: 'Sensor continuously measures analogue light level', requiredKeywordGroups: [['continuous', 'sensor'], ['analogue', 'light']] },
            { id: 'mp2', markDescription: 'ADC converts analogue signal to digital binary', requiredKeywordGroups: [['adc', 'analogue-to-digital'], ['digital', 'binary']] },
            { id: 'mp3', markDescription: 'Microprocessor compares against stored preset value (40 lux)', requiredKeywordGroups: [['microprocessor', 'processor'], ['compar', 'preset', '40']] },
            { id: 'mp4', markDescription: 'Signals actuator/switch ON and repeats continuously', requiredKeywordGroups: [['actuator', 'switch', 'relay'], ['loop', 'repeat', 'continuous']] },
          ],
        },
      },
    ],
  },
  {
    id: 'cs-ex-3-3',
    subtopicId: 'cs-3-3',
    number: 9,
    stimulus: 'Cambridge IGCSE 0478 Paper 1: A school laptop has 8 GiB RAM, a 512 GiB NVMe SSD, and backs up student projects to cloud storage.',
    parts: [
      {
        id: 'cs-ex-3-3-a',
        label: '(a)',
        prompt: 'Explain how virtual memory enables the laptop to keep running when open applications demand 11 GiB of memory. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'When 8 GiB RAM becomes full, the operating system transfers inactive pages from RAM onto a reserved area of the SSD, freeing RAM for currently active processes, and swaps pages back when needed.',
          markPoints: [
            { id: 'mp1', markDescription: 'RAM becomes full / exceeds capacity', requiredKeywordGroups: [['ram', 'full', 'exceed']] },
            { id: 'mp2', markDescription: 'OS moves inactive pages from RAM to secondary storage (SSD)', requiredKeywordGroups: [['page', 'inactive', 'unused'], ['ssd', 'secondary storage', 'disk']] },
            { id: 'mp3', markDescription: 'Frees RAM for active tasks and swaps pages back when needed', requiredKeywordGroups: [['free', 'active', 'swap']] },
          ],
        },
      },
    ],
  },
];
