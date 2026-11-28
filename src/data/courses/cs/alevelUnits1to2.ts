import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_CS_UNITS_1_2_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Information Representation & Multimedia (AS + A2)',
    subtopics: [
      {
        id: 'al-cs-1-1',
        code: '1.1',
        slug: '1.1-binary-bcd-character-sets-bitmap-vector-sound',
        title: 'Binary Integers, BCD Arithmetic, Character Sets, Bitmap/Vector Graphics & Sound',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-1-2',
        code: '1.2',
        slug: '1.2-floating-point-normalisation-precision-compression',
        title: 'Floating-Point Binary, Normalisation, Rounding Errors & RLE/Dictionary Compression',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Communication, Networking & Internet Protocols (AS + A2)',
    subtopics: [
      {
        id: 'al-cs-2-1',
        code: '2.1',
        slug: '2.1-client-server-p2p-topologies-cloud-subnetting',
        title: 'Client–Server vs P2P, Network Topologies, Cloud Computing, Hardware & IP Addressing',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-2-2',
        code: '2.2',
        slug: '2.2-circuit-packet-switching-routing-bittorrent',
        title: 'Circuit Switching vs Packet Switching, Routing Tables & BitTorrent Protocol',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-2-3',
        code: '2.3',
        slug: '2.3-tcp-ip-stack-application-protocols-dns',
        title: 'TCP/IP 4-Layer Protocol Stack, HTTP/SMTP/POP3/IMAP/FTP & DNS Resolution',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_CS_UNITS_1_2_NOTES: Record<string, NoteLesson> = {
  'al-cs-1-1': {
    subtopicId: 'al-cs-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Binary Integers, BCD Arithmetic, Character Sets, Bitmap/Vector Graphics & Sound',
    readingMinutes: 12,
    videoTitle: '73. OCR A Level (H046-H446) SLR13 - 1.4 Binary positive integers',
    youtubeId: 'y8mo6u7kF9E',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:10',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 1 & 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Two’s Complement Arithmetic & Binary-Coded Decimal (BCD)', cardId: 'al-cs-1-1-c1' },
      { time: '2:45', seconds: 165, label: 'Character Sets (ASCII, Extended ASCII, Unicode) & Multimedia Headers', cardId: 'al-cs-1-1-c2' },
      { time: '5:30', seconds: 330, label: 'Bitmap vs Vector Graphics & Sound Sampling/Quantisation', cardId: 'al-cs-1-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-1-1-c1',
        title: 'Two’s Complement Subtraction & Binary-Coded Decimal (BCD)',
        summary: 'Two’s complement unifies addition/subtraction via MSB negative weight, while BCD encodes each decimal digit separately in 4 bits for exact financial/display accuracy.',
        bullets: [
          '**Two’s complement subtraction** — compute `A − B` as `A + (−B)` by negating `B` (invert bits + add `1`) and discarding carry out of the MSB; signed overflow happens ONLY when adding two positives produces a negative (or two negatives produce a positive).',
          '**Binary-Coded Decimal (BCD)** — encodes every individual denary digit (`0–9`) into a 4-bit nibble (`0000` to `1001`). Essential in **financial/banking ledgers** (no binary floating-point rounding drift like `0.1 + 0.2 ≠ 0.3`) and **7-segment digital displays**.',
          '**BCD addition correction (`+ 0110`)** — whenever a nibble sum exceeds `9` (`1010–1111`) or generates a carry out of bit 3, add `0110` (`+6`) to skip the 6 invalid hex states and carry `1` into the next decimal digit!',
        ],
        subsections: [
          {
            heading: 'Worked BCD Addition (`0.38 + 0.25`)',
            bullets: [
              '**Pack two BCD digits per byte** — each nibble is checked independently for `> 9`.',
            ],
            exampleHeading: 'Worked example: Add BCD `8` (`1000`) + `5` (`0101`)',
            examples: [
              '`1000 + 0101 = 1101` (`13 > 9`, invalid BCD!) → add correction `0110` (`+6`) → **`1 0011`** = carry `1`, units nibble `3` (`13`) ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'BCD (Binary-Coded Decimal)', definition: 'Encoding where each decimal digit (0–9) is stored independently in its own 4-bit binary nibble.' },
          { term: 'signed overflow', definition: 'Condition in two’s complement addition when two same-sign operands produce an opposite-sign result.' },
        ],
      },
      {
        id: 'al-cs-1-1-c2',
        title: 'Character Sets (ASCII, Extended ASCII & Unicode) and Binary Prefixes',
        summary: 'CIE 9618 distinguishes decimal SI prefixes (kB = 10³) from binary IEC prefixes (KiB = 2¹⁰) and compares 7-bit ASCII, 8-bit Extended ASCII, and multi-byte Unicode.',
        bullets: [
          '**Decimal vs Binary Prefixes** — `1 kB = 1000 B` (`10³`), `1 MB = 10⁶ B`, `1 GB = 10⁹ B` vs **`1 KiB = 1024 B` (`2¹⁰`)**, `1 MiB = 2²⁰ B`, `1 GiB = 2³⁰ B`, `1 TiB = 2⁴⁰ B`.',
          "**Unicode (UTF-8 / UTF-16 / UTF-32)** — assigns unique hexadecimal code points (`U+0041` = `'A'`) across every human writing system; UTF-8 uses variable-length 1–4 bytes so ASCII stays 1 byte per character while supporting >1.1M code points.",
        ],
        subsections: [
          {
            heading: 'Unicode Compatibility & Storage Overhead',
            bullets: [
              '**Trade-off** — UTF-16 doubles file size for pure English text compared to 8-bit Extended ASCII, but avoids conflicting regional code pages.',
            ],
            exampleHeading: 'Worked example: `4,096` ASCII vs UTF-16 characters in KiB',
            examples: [
              '8-bit Extended ASCII: `4,096 × 1 B = 4 KiB`; 16-bit UTF-16: `4,096 × 2 B = 8 KiB`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'IEC binary prefix', definition: 'Standardised base-2 unit multipliers (KiB = 2¹⁰, MiB = 2²⁰, GiB = 2³⁰) preventing ambiguity with decimal SI prefixes.' },
        ],
      },
      {
        id: 'al-cs-1-1-c3',
        title: 'Bitmap vs Vector Graphics & Sound Sampling/Editing',
        summary: 'Bitmaps store pixel grids suited to photographs (pixelate when scaled); vector graphics store mathematical drawing objects & properties that scale losslessly to any resolution.',
        bullets: [
          '**Bitmap Graphics** — grid of pixels (`file header + width × height × bit depth`); excels at complex photorealistic colour gradients, but enlarges with **pixelation** and large file sizes.',
          '**Vector Graphics** — **drawing list** of geometric **drawing objects** (`circle`, `line`, `Bezier polygon`) defined by mathematical coordinates plus **properties** (`fill colour`, `stroke width`, `radius`). Scales infinitely without pixelation with tiny file sizes, but unsuitable for detailed photographs.',
          '**Digital Sound & Quantisation** — analogue wave sampled at `f` Hz and rounded to `b`-bit **sampling resolution** (`quantisation error` drops as bit depth rises). Audio editing software supports trimming, splicing, fading, amplification, and noise filtering.',
        ],
        subsections: [
          {
            heading: 'Bitmap File Size Including Header',
            bullets: [
              '**Always add file header overhead** if specified in a CIE 9618 Paper 1 question (`Total = Header + (W × H × Depth ÷ 8)`).',
            ],
            exampleHeading: 'Worked example: `800 × 600` 24-bit bitmap with `54 B` header',
            examples: [
              'Pixel bytes = `800 × 600 × 3 = 1,440,000 B` → `+ 54 B` = `1,440,054 B ≈ 1,406.3 KiB`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'vector graphic', definition: 'Image encoded as a mathematical drawing list of geometric primitives and styling properties that scales without pixelation.' },
          { term: 'drawing object', definition: 'Individual geometric primitive (line, arc, rectangle, path) defined by equations and attributes inside a vector image.' },
        ],
        memoryAid: 'BCD sum > 9? Add `0110` (+6)! Vector = Drawing List + Properties (scales cleanly); Bitmap = Pixel Grid (photorealism)!',
        commonMistake: 'Forgetting to add `0110` (+6) during BCD addition when a 4-bit sum falls in `1010–1111` (10–15) — raw binary `1100` is invalid BCD and MUST be corrected to `1 0010`!',
      },
    ],
    keyTerms: [
      { term: 'Binary-Coded Decimal (BCD)', definition: '4-bit-per-digit decimal encoding avoiding floating-point rounding drift in financial calculations.' },
      { term: 'Signed Overflow', definition: 'Two’s complement error when adding two same-sign numbers yields an opposite sign bit.' },
      { term: 'Vector Graphic', definition: 'Scalable image stored as a mathematical drawing list of geometric objects and properties.' },
      { term: 'Sampling Resolution', definition: 'Bit depth per audio sample governing dynamic range and quantisation precision.' },
    ],
    checklistPoints: [
      'Perform two’s complement subtraction and BCD addition with `+0110` correction',
      'Distinguish decimal SI (kB/MB) from IEC binary (KiB/MiB) prefixes and Unicode vs ASCII',
      'Compare bitmap vs vector graphics (drawing list & properties) and calculate media sizes with headers',
    ],
  },

  'al-cs-1-2': {
    subtopicId: 'al-cs-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Floating-Point Binary, Normalisation, Rounding Errors & RLE/Dictionary Compression',
    readingMinutes: 13,
    videoTitle: '80. OCR A Level (H046-H446) SLR13 - 1.4 Floating point binary part 2 - Normalisation',
    youtubeId: 'IGQ9YOnhWxA',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:45',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Two’s Complement Floating-Point: Mantissa × 2^Exponent', cardId: 'al-cs-1-2-c1' },
      { time: '3:00', seconds: 180, label: 'Normalisation (`0.1` / `1.0`), Precision vs Range, Overflow & Underflow', cardId: 'al-cs-1-2-c2' },
      { time: '5:55', seconds: 355, label: 'Lossless Compression: RLE & Dictionary Coding (LZ77/LZW) vs Lossy', cardId: 'al-cs-1-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-1-2-c1',
        title: 'Two’s Complement Floating-Point Binary Representation',
        summary: 'Floating-point numbers split storage into a signed two’s-complement Mantissa (significant digits) and a signed two’s-complement Exponent (binary point shift): `Value = Mantissa × 2^Exponent`.',
        bullets: [
          '**Fixed binary point** — in CIE 9618, the implicit binary point sits immediately **after the sign bit** of the mantissa: weights are `−1, 1/2 (0.5), 1/4 (0.25), 1/8 (0.125), 1/16 ...`.',
          '**Decoding method (2 easy steps)** — (1) Decode the two’s-complement **Exponent `E`**; (2) Shift the binary point in the Mantissa **right by `E`** if `E > 0` (or **left by `|E|`** if `E < 0`), then sum place weights (remembering the leading `−` weight if negative!).',
        ],
        subsections: [
          {
            heading: 'Worked 8-Bit Mantissa + 4-Bit Exponent Conversion',
            bullets: [
              '**Keep the sign bit!** — shifting right preserves the negative MSB weight at its new shifted power of 2.',
            ],
            exampleHeading: 'Worked example: Decode Mantissa `01011000`, Exponent `0011` (`+3`)',
            examples: [
              'Binary point starts at `0.1011000` → shift right `3` places (`E = +3`) → `0101.1000`.',
              'Value = `4 + 1 + 0.5` = **`+5.5`**! (Check: `0.6875 × 2³ = 5.5` ✓.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mantissa', definition: 'Signed fractional two’s complement part of a floating-point number holding its significant precision bits.' },
          { term: 'exponent', definition: 'Signed two’s complement integer specifying the power of 2 scaling (shift of the binary point).' },
        ],
      },
      {
        id: 'al-cs-1-2-c2',
        title: 'Normalisation, Precision vs Range, Overflow & Underflow',
        summary: 'Normalised floating-point numbers start with `0.1...` (positive) or `1.0...` (negative), maximising precision and ensuring every value has a unique bit pattern.',
        bullets: [
          '**Why normalise?** — (1) Eliminates wasted leading duplicate sign bits (`0.001...` or `1.110...`) to give **maximum precision** for a fixed mantissa length; (2) Ensures **one unique representation** per number (fast equality comparison).',
          '**Normalisation rule** — shift the mantissa **left** until the first two bits differ (`01...` for positive, `10...` for negative), and **subtract the number of left shifts from the Exponent**!',
          '**Precision vs Range trade-off** — for a fixed word size (e.g. 16 bits), **more mantissa bits → higher precision** (smaller gap between adjacent numbers) at the expense of narrower range; **more exponent bits → wider range** at the expense of lower precision.',
          '**Rounding, Overflow & Underflow** — fractions like `0.1₁₀` (`0.0001100110011...₂`) recur infinitely in binary causing **rounding/truncation errors**; **Overflow** = magnitude too large for max exponent; **Underflow** = non-zero magnitude too close to zero for min negative exponent (rounds to `0`).',
        ],
        subsections: [
          {
            heading: 'Worked Normalisation Trace',
            bullets: [
              '**Golden check**: Left shift mantissa by `k` → `Exponent ← Exponent − k`!',
            ],
            exampleHeading: 'Worked example: Normalise `M = 11101000`, `E = 0101` (`+5`)',
            examples: [
              'Leading bits are `1110...` → shift left `2` places to start with `10...`: `M = 10100000`.',
              'Decrement exponent by `2`: `5 − 2 = 3` → `E = 0011`. (Value stays `−0.75 × 2³ = −6.0` ✓.)',
            ],
          },
        ],
        glossaryPills: [
          { term: 'normalisation', definition: 'Adjusting a floating-point mantissa to begin with `01` (positive) or `10` (negative) while adjusting the exponent for maximum precision and uniqueness.' },
          { term: 'underflow', definition: 'Floating-point error occurring when a tiny non-zero value is closer to zero than the smallest representable negative exponent.' },
        ],
      },
      {
        id: 'al-cs-1-2-c3',
        title: 'Advanced Compression: RLE & Dictionary Coding (LZ77 / LZW)',
        summary: 'Lossless dictionary compression replaces recurring substrings with compact index pointers into a dynamically built dictionary, outperforming RLE on text and source code.',
        bullets: [
          '**Run-Length Encoding (RLE)** — encodes consecutive identical runs as `(count, symbol)`; expands file size if data has few consecutive repeats (e.g. random noise or plain English prose).',
          '**Dictionary Compression (LZ77 / LZW)** — scans text/data, records repeated words/phrases inside a **dictionary table** mapped to short integer codes/tokens, and replaces every repeat with its compact **index pointer** (often bundled with the dictionary or rebuilt identically during decompression).',
          '**Lossy media techniques** — **Perceptual audio coding** (removes frequencies beyond human hearing + psychoacoustic masking in MP3/AAC) and **Bitmap chroma subsampling / DCT quantisation** (JPEG reduces colour precision humans barely perceive).',
        ],
        subsections: [
          {
            heading: 'Worked Dictionary Compression Example',
            bullets: [
              '**Ideal for text & HTML** — recurring phrases (`"the "`, `"computer "`, `"<div class="`) shrink dramatically.',
            ],
            exampleHeading: 'Worked example: Encoding `"TO BE OR NOT TO BE"`',
            examples: [
              'Dictionary: `1="TO"`, `2="BE"`, `3="OR"`, `4="NOT"` → Stream = **`1 2 3 4 1 2`** (replaces `18` chars with `6` short tokens losslessly!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dictionary compression', definition: 'Lossless compression replacing repeating patterns/substrings with compact numeric references into a lookup dictionary.' },
        ],
        memoryAid: 'Normalised FP = `01...` (+ve) or `10...` (−ve)! Shift Mantissa LEFT `k` → Subtract `k` from Exponent!',
        commonMistake: 'Forgetting to adjust the exponent after shifting the mantissa left during normalisation — every 1-bit left shift multiplies the mantissa by 2, so you MUST subtract 1 from the exponent to preserve the exact numeric value!',
      },
    ],
    keyTerms: [
      { term: 'Mantissa & Exponent', definition: 'Signed fractional significant digits and signed base-2 power scaling factor in floating-point binary.' },
      { term: 'Normalised Floating-Point', definition: 'Representation starting with `01` (+ve) or `10` (−ve) ensuring maximum precision and unique encoding.' },
      { term: 'Underflow vs Overflow', definition: 'Magnitude too close to zero vs magnitude too large for the available exponent range.' },
      { term: 'Dictionary Compression', definition: 'Lossless method replacing repeated substrings with compact dictionary index pointers.' },
    ],
    checklistPoints: [
      'Convert between denary and two’s-complement floating-point binary (mantissa + exponent)',
      'Normalise positive (`01`) and negative (`10`) floating-point values and explain precision vs range trade-offs',
      'Explain binary rounding error, overflow/underflow, and trace RLE vs dictionary compression',
    ],
  },

  'al-cs-2-1': {
    subtopicId: 'al-cs-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Client–Server vs P2P, Network Topologies, Cloud Computing, Hardware & IP Addressing',
    readingMinutes: 12,
    videoTitle: '63. OCR A Level (H046-H446) SLR11 - 1.3 Client server & peer to peer',
    youtubeId: 'ViiflbmWoIo',
    videoChannel: "Craig'n'Dave",
    videoDuration: '7:48',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 1)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Client–Server vs Peer-to-Peer (P2P) & Thin vs Thick Clients', cardId: 'al-cs-2-1-c1' },
      { time: '2:40', seconds: 160, label: 'Topologies (Star, Mesh, Bus), Cloud Models & LAN/WAN Hardware', cardId: 'al-cs-2-1-c2' },
      { time: '5:20', seconds: 320, label: 'IPv4 Classless Subnetting (CIDR), Private vs Public IPs & NAT', cardId: 'al-cs-2-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-2-1-c1',
        title: 'Client–Server vs Peer-to-Peer & Thin vs Thick Clients',
        summary: 'Client–Server centralises data, security, and backups on dedicated servers; Peer-to-Peer distributes files equally across peers with zero central server cost.',
        bullets: [
          '**Client–Server model** — dedicated high-spec **servers** store central databases, authenticate users, and serve client requests. **Pros**: centralised security/backups, scalable access control. **Cons**: expensive server hardware/admin, single point of failure/bottleneck if server crashes.',
          '**Peer-to-Peer (P2P)** — every node acts as **both client and server**, sharing resources directly. **Pros**: cheap, easy setup, resilient without a single central server. **Cons**: decentralised security, inconsistent backups, slower if host peer powers off.',
          '**Thin Client vs Thick Client** — **Thin client** depends heavily on the server for processing/storage (low local spec, easy central updates, unusable offline); **Thick client** runs heavy processing/storage locally (works offline, responsive, harder to patch uniformly).',
        ],
        subsections: [
          {
            heading: 'Selecting Architecture in CIE 9618 Case Studies',
            bullets: [
              '**Hospital / School MIS** → Client–Server (strict access control, consistent central DB). **Small home printer/file share or BitTorrent** → Peer-to-Peer.',
            ],
            exampleHeading: 'Worked comparison: Browser Chromebook vs Native CAD Workstation',
            examples: [
              'Chromebook running Google Docs = **Thin Client** (cloud-reliant); CAD workstation running local 3D rendering = **Thick Client**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'thin client', definition: 'Networked device delegating almost all application processing and data storage to a central server.' },
          { term: 'peer-to-peer (P2P)', definition: 'Decentralised network architecture where every node shares equal status as both client and server.' },
        ],
      },
      {
        id: 'al-cs-2-1-c2',
        title: 'Network Topologies, Cloud Models & Transmission Media',
        summary: 'Star topologies dominate LANs via switches, Mesh topologies provide fault-tolerant WAN/IoT routing, and fibre-optic outperforms copper on speed and EMI immunity.',
        bullets: [
          '**Topologies** — **Star** (central switch sends unicast frames directly to target MAC → zero collisions, easy fault isolation, switch is single point of failure), **Mesh** (multiple redundant paths → high resilience & direct routing, costly cabling in wired full mesh), **Bus** (single shared backbone with terminators → cheap, collisions & backbone cut downs entire LAN).',
          '**Transmission Media** — **Fibre-optic** (pulses of light → highest bandwidth `>100 Gbps`, longest distance, **immune to EMI**, costly), **Twisted-pair copper** (cheap LAN cabling, shorter distance, moderate EMI), **Wireless Wi-Fi/Radio** (mobility, lower throughput, interference & eavesdropping risk → needs WPA3).',
          '**Cloud Computing** — **Public Cloud** (shared multi-tenant infrastructure e.g. AWS/Azure) vs **Private Cloud** (dedicated enterprise infrastructure behind firewall for strict regulatory compliance). Hardware: **Switch** (forwards LAN frames by MAC), **Router** (routes packets between networks by IP), **WAP** (bridges wireless clients to wired LAN), **Bridge** (links two identical LAN segments).',
        ],
        subsections: [
          {
            heading: 'Ethernet CSMA/CD vs Switched Full-Duplex',
            bullets: [
              '**CSMA/CD** (Carrier Sense Multiple Access with Collision Detection) listens for idle channel, detects collisions via voltage spike, sends a **jam signal**, and waits a **random exponential backoff** time before retrying.',
            ],
            exampleHeading: 'Worked calculation: Full-mesh links for `n = 6` routers',
            examples: [
              'Links required = `n(n − 1) ÷ 2 = 6 × 5 ÷ 2 = 15` links (grows `O(n²)` → partial mesh preferred at large scale!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'CSMA/CD', definition: 'Carrier Sense Multiple Access with Collision Detection — Ethernet protocol handling collisions via jam signals and random backoff.' },
          { term: 'private cloud', definition: 'Dedicated cloud infrastructure provisioned exclusively for one organisation to maximise security and regulatory control.' },
        ],
      },
      {
        id: 'al-cs-2-1-c3',
        title: 'IPv4/IPv6 Addressing, Subnetting (CIDR) & Public vs Private IPs',
        summary: 'CIDR subnet masks split IPv4 addresses into Network ID and Host ID portions; Private RFC-1918 ranges conserve scarce IPv4 space via NAT at the boundary router.',
        bullets: [
          '**Network ID vs Host ID (CIDR)** — a subnet mask like `255.255.255.0` (`/24`) bitwise-ANDed with an IP extracts the **Network ID** (first 24 bits) and leaves 8 bits (`2⁸ − 2 = 254` usable hosts; `.0` = network, `.255` = broadcast).',
          '**Private vs Public IPs** — **Private ranges** (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) are non-routable on the public Internet and reusable inside millions of LANs; **NAT (Network Address Translation)** on the boundary router maps private LAN IPs to one shared **Public IP**.',
          '**IPv6 (`128-bit`)** — written as 8 groups of 4 hex digits (`2001:0db8:0000:0000:0000:ff00:0042:8329` → compressed via `::` to `2001:db8::ff00:42:8329`), eliminating IPv4 exhaustion and built-in NAT hacks.',
        ],
        subsections: [
          {
            heading: 'Worked Subnet Host Capacity Check',
            bullets: [
              '**Formula**: Usable hosts = `2^(32 − prefix) − 2` (subtract network address and broadcast address).',
            ],
            exampleHeading: 'Worked example: `/26` subnet mask (`255.255.255.192`)',
            examples: [
              'Host bits = `32 − 26 = 6` bits → `2⁶ − 2 = 62` usable hosts per subnet (splits one `/24` into `4` isolated departmental subnets!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'subnet mask', definition: '32-bit mask bitwise-ANDed with an IPv4 address to separate the Network ID prefix from the Host ID suffix.' },
        ],
        memoryAid: 'Switch = MAC (LAN). Router = IP (WAN). Usable IPv4 Hosts = `2^(host bits) − 2`! CSMA/CD = Listen → Collide → Jam → Random Backoff!',
        commonMistake: 'Forgetting to subtract `2` when counting usable IPv4 host addresses in a subnet — the all-zeros host address is reserved for the Network ID and the all-ones host address is reserved for Broadcast!',
      },
    ],
    keyTerms: [
      { term: 'Client–Server vs Peer-to-Peer', definition: 'Centralised dedicated server architecture vs equal-status decentralised peer sharing.' },
      { term: 'Thin vs Thick Client', definition: 'Server-dependent terminal vs locally processing self-sufficient workstation.' },
      { term: 'CSMA/CD', definition: 'Ethernet contention protocol detecting collisions and scheduling random backoff retries.' },
      { term: 'CIDR Subnetting & NAT', definition: 'Splitting IPv4 into Network/Host IDs and translating private LAN IPs to a shared public IP.' },
    ],
    checklistPoints: [
      'Evaluate Client–Server vs P2P and Thin vs Thick clients for real organisational case studies',
      'Compare Star, Mesh, and Bus topologies, fibre vs copper media, CSMA/CD, and Public vs Private Cloud',
      'Calculate usable hosts from CIDR masks, distinguish private vs public IPv4, and compress IPv6',
    ],
  },

  'al-cs-2-2': {
    subtopicId: 'al-cs-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Circuit Switching vs Packet Switching, Routing Tables & BitTorrent Protocol',
    readingMinutes: 12,
    videoTitle: '60. OCR A Level (H046-H446) SLR11 - 1.3 Packet & circuit switching',
    youtubeId: 'tcqjISYlr8w',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:04',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Circuit Switching vs Packet Switching Trade-Offs', cardId: 'al-cs-2-2-c1' },
      { time: '2:45', seconds: 165, label: 'Router Forwarding, Routing Tables & Hop Count (TTL)', cardId: 'al-cs-2-2-c2' },
      { time: '5:25', seconds: 325, label: 'BitTorrent Peer-to-Peer Protocol (Swarm, Tracker, Seeder, Leecher)', cardId: 'al-cs-2-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-2-2-c1',
        title: 'Circuit Switching vs Packet Switching',
        summary: 'Circuit switching reserves one dedicated physical path for the entire session (zero jitter, wastes idle bandwidth); packet switching shares links dynamically across routed chunks.',
        bullets: [
          '**Circuit Switching** — establishes a **dedicated end-to-end physical link** before data flows (traditional PSTN landlines) and holds it exclusively until teardown. **Pros**: guaranteed constant bandwidth, data arrives strictly **in sequence** with minimal jitter/latency. **Cons**: wastes bandwidth during silent pauses, setup delay, single link break terminates the call, unscalable.',
          '**Packet Switching** — splits messages into independent numbered packets sharing network links across many users. **Pros**: efficient shared bandwidth utilisation, **high fault tolerance** (reroutes around failed nodes), easily scales globally. **Cons**: variable latency (**jitter**), out-of-order reassembly overhead, packet header overhead.',
        ],
        subsections: [
          {
            heading: 'When Each Switching Method Fits Best',
            bullets: [
              '**Circuit switching** fits dedicated real-time private telecom trunks; **Packet switching** powers the entire Internet (email, web, VoIP with jitter buffers).',
            ],
            exampleHeading: 'Worked efficiency calculation: Voice call with `40%` silence',
            examples: [
              'Circuit switching wastes `40%` of link capacity during pauses; packet switching fills those gaps immediately with packets from other hosts!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'circuit switching', definition: 'Communication method establishing a dedicated exclusive physical path between sender and receiver for the entire session.' },
          { term: 'jitter', definition: 'Variation in packet arrival delay across a packet-switched network caused by differing router paths and queue lengths.' },
        ],
      },
      {
        id: 'al-cs-2-2-c2',
        title: 'Routers, Routing Tables & Time-to-Live (Hop Count)',
        summary: 'Every router consults its routing table to pick the optimal next hop based on destination IP and decrements the packet’s hop counter (TTL) to kill infinite routing loops.',
        bullets: [
          '**Packet Header Fields (A-Level 9618)** — Source IP, Destination IP, Packet Sequence Number, Total Packets, Payload Size, Protocol ID, and **Hop Count / Time-to-Live (TTL)**.',
          '**Routing Table** — lookup table maintained by each router mapping destination network prefixes → **next-hop router IP**, outgoing interface, and **route metric/cost** (hop count, latency, bandwidth).',
          '**Why TTL / Hop Count matters** — decremented by `1` at every router hop; if `TTL` hits `0`, the router **drops the packet** and notifies the sender, preventing undeliverable packets from looping forever and congesting the Internet.',
        ],
        subsections: [
          {
            heading: 'Dynamic Route Updates',
            bullets: [
              '**Adaptive routing** — if router `R2` fails, neighbouring routers update routing tables dynamically and redirect subsequent packets over alternate links.',
            ],
            exampleHeading: 'Worked trace: Packet with `TTL = 3` enters a 2-router loop',
            examples: [
              '`R1 (TTL→2) → R2 (TTL→1) → R1 (TTL→0)` → **`R1` discards packet**, preventing infinite bandwidth saturation!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'routing table', definition: 'Data table stored inside a router listing network destinations, next-hop interfaces, and route cost metrics.' },
          { term: 'hop count (TTL)', definition: 'Packet header counter decremented at each router so packets stuck in loops are dropped upon reaching zero.' },
        ],
      },
      {
        id: 'al-cs-2-2-c3',
        title: 'BitTorrent Peer-to-Peer File Distribution (CIE 9618 Essential)',
        summary: 'BitTorrent accelerates huge file sharing by splitting files into small pieces exchanged simultaneously across a swarm of peers coordinated by a tracker.',
        bullets: [
          '**Core CIE 9618 BitTorrent Terms** — **`.torrent` file** (metadata containing tracker URL, piece hashes, file size), **Tracker** (central server tracking active peer IPs in the swarm — does NOT host the file!), **Swarm** (all peers currently downloading/uploading that torrent).',
          '**Seeders vs Leechers** — **Seeder** = peer possessing **100% of the file** and uploading pieces to others; **Leecher** = peer still downloading pieces (while simultaneously uploading pieces it already holds — or having a poor upload ratio).',
          '**Piece exchange & `"rarest-first"`** — files are split into fixed **pieces** (`256 KiB–4 MiB`); clients prioritise downloading the rarest pieces across multiple seeders/peers in parallel and verify each piece against its SHA hash.',
        ],
        subsections: [
          {
            heading: 'Why BitTorrent Scales Better Than Direct HTTP Download',
            bullets: [
              '**Self-scaling bandwidth** — on a central server, adding `10,000` downloaders crushes server upload bandwidth; in a BitTorrent swarm, every new peer ALSO contributes upload bandwidth!',
            ],
            exampleHeading: 'Worked trace: Downloading a `4 GiB` Linux ISO via BitTorrent',
            examples: [
              'Client reads `.torrent` → queries **Tracker** for swarm IP list → downloads `Piece 1` from Peer A, `Piece 2` from Seeder B simultaneously while uploading `Piece 1` to Peer C.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'seeder', definition: 'BitTorrent peer holding 100% of a shared file and uploading pieces to other peers in the swarm.' },
          { term: 'tracker', definition: 'Server coordinating a BitTorrent swarm by maintaining a live directory of peer IP addresses without hosting file data itself.' },
        ],
        memoryAid: 'BitTorrent Cast: Tracker = Phonebook (IPs only) · Swarm = All peers · Seeder = Has 100% · Leecher = Still downloading!',
        commonMistake: 'Saying the BitTorrent Tracker sends the actual file pieces — the Tracker ONLY hands out IP addresses of peers in the swarm; actual file pieces travel directly peer-to-peer!',
      },
    ],
    keyTerms: [
      { term: 'Circuit Switching', definition: 'Dedicated physical path reserved end-to-end for an entire session (constant bandwidth, zero reordering).' },
      { term: 'Routing Table & TTL', definition: 'Router next-hop lookup table and hop-limit counter preventing infinite packet loops.' },
      { term: 'BitTorrent Swarm & Tracker', definition: 'Group of peers sharing file pieces coordinated by a tracker server storing peer IPs.' },
      { term: 'Seeder vs Leecher', definition: 'BitTorrent peer holding 100% of file vs peer still downloading missing pieces.' },
    ],
    checklistPoints: [
      'Compare circuit switching and packet switching on latency, bandwidth efficiency, security, and resilience',
      'Explain how routers use routing tables and TTL/hop counts to forward packets safely',
      'Define torrent file, tracker, swarm, seeder, leecher, and piece exchange in the BitTorrent protocol',
    ],
  },

  'al-cs-2-3': {
    subtopicId: 'al-cs-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'TCP/IP 4-Layer Protocol Stack, HTTP/SMTP/POP3/IMAP/FTP & DNS Resolution',
    readingMinutes: 12,
    videoTitle: '58. OCR A Level (H046-H446) SLR11 - 1.3 TCP IP, DNS & protocol layers',
    youtubeId: 'H5jGQingnWI',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:22',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Why Layer Protocols? The 4-Layer TCP/IP Stack & Encapsulation', cardId: 'al-cs-2-3-c1' },
      { time: '2:50', seconds: 170, label: 'Application Protocols: HTTP/S, FTP, SMTP, POP3 & IMAP', cardId: 'al-cs-2-3-c2' },
      { time: '5:35', seconds: 335, label: 'TCP vs UDP, Sockets/Ports & Hierarchical DNS Lookup', cardId: 'al-cs-2-3-c3' },
    ],
    cards: [
      {
        id: 'al-cs-2-3-c1',
        title: 'TCP/IP 4-Layer Protocol Suite & Data Encapsulation',
        summary: 'Layering breaks networking into 4 independent modular layers — Application, Transport, Internet (Network), and Link — where each layer wraps data with its own header.',
        diagram: 'tcpip-packet-switching',
        bullets: [
          '**4. Application Layer** — generates/consumes user application data via protocols (**HTTP/HTTPS**, **FTP**, **SMTP**, **POP3/IMAP**, **DNS**, **BitTorrent**).',
          '**3. Transport Layer (TCP / UDP)** — splits data into **segments**, adds **source/destination port numbers**, sequence numbers, and checksums; manages end-to-end reliability & flow control (TCP).',
          '**2. Internet / Network Layer (IP)** — wraps segments into **IP packets**, attaching **Source & Destination IP addresses** and routing packets hop-by-hop across networks.',
          '**1. Link / Network Access Layer** — wraps packets into **frames** with **Source & Destination MAC addresses** (updated at every router hop!) and transmits raw electrical/optical/radio signals over Ethernet or Wi-Fi.',
          '**Why use layered stacks?** — hardware/software at one layer (e.g. upgrading Wi-Fi to Fibre at Link Layer) can change independently without rewriting upper-layer applications; promotes global interoperability.',
        ],
        subsections: [
          {
            heading: 'Encapsulation Down / Decapsulation Up',
            bullets: [
              '**Sender**: `Data → Segment (TCP) → Packet (IP) → Frame (MAC)` · **Receiver**: strips headers in reverse order (`Link → Internet → Transport → Application`)!',
            ],
            exampleHeading: 'Worked hop check: What changes at each router?',
            examples: [
              '**IP addresses stay fixed** end-to-end (`Host A → Host B`), whereas **MAC addresses change on every single hop** (`Host A→R1`, `R1→R2`, `R2→Host B`)!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'protocol stack', definition: 'Hierarchical suite of modular communication layers where each layer provides services to the layer above and hides implementation details.' },
          { term: 'encapsulation', definition: 'Process of wrapping payload data with layer-specific headers (TCP port → IP address → MAC frame) as it descends the TCP/IP stack.' },
        ],
      },
      {
        id: 'al-cs-2-3-c2',
        title: 'Application Layer Protocols: Web, File Transfer & Email',
        summary: 'Distinct application protocols govern web browsing (HTTP/HTTPS), bulk file transfer (FTP), outgoing mail push (SMTP), and inbox retrieval (POP3 vs IMAP).',
        bullets: [
          '**HTTP / HTTPS** — stateless request–response (`GET`, `POST`) transferring HTML/JSON web assets (port `80` / `443` with TLS encryption).',
          '**FTP (File Transfer Protocol)** — transfers files between client and server using separate control (`port 21`) and data (`port 20`) connections (FTPS/SFTP add encryption).',
          '**SMTP (Simple Mail Transfer Protocol)** — **push** protocol used to **send** emails from a client to a mail server and relay emails between mail servers.',
          '**POP3 vs IMAP (Retrieving Email)** — **POP3** downloads emails to one local device and typically **deletes** them from the server (poor multi-device sync); **IMAP** keeps emails synchronised on the server so folders, read flags, and drafts mirror seamlessly across phone, laptop, and webmail.',
        ],
        subsections: [
          {
            heading: 'Comparing POP3 vs IMAP in Exam Scenarios',
            bullets: [
              '**Multi-device executive** → MUST recommend **IMAP** (server-side sync) + **SMTP** (sending)!',
            ],
            exampleHeading: 'Worked trace: Sending an email from Alice (`@alpha.com`) to Bob (`@beta.org`)',
            examples: [
              'Alice → `SMTP` → `alpha.com` mail server → `SMTP` → `beta.org` mail server → Bob reads synced inbox via **`IMAP`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SMTP', definition: 'Simple Mail Transfer Protocol — push protocol sending and relaying outgoing emails between clients and mail servers.' },
          { term: 'IMAP', definition: 'Internet Message Access Protocol — keeps emails stored and synchronised on the mail server across multiple client devices.' },
        ],
      },
      {
        id: 'al-cs-2-3-c3',
        title: 'TCP vs UDP, Port Sockets & Hierarchical DNS Resolution',
        summary: 'TCP guarantees ordered, error-free delivery via handshakes and ACKs; UDP sends lightweight connectionless datagrams for low-latency streaming; DNS resolves names hierarchically.',
        bullets: [
          '**TCP vs UDP** — **TCP** is connection-oriented (3-way handshake, sequence ordering, retransmissions → web, email, banking); **UDP** is connectionless with minimal header overhead and zero retransmission delay (live gaming, VoIP, DNS lookups).',
          '**Socket = `IP Address : Port Number`** — uniquely identifies a specific service running on a host (`198.51.100.10:443` = HTTPS daemon).',
          '**Hierarchical DNS Resolution** — browser checks local OS cache → queries local **Recursive Resolver** → if uncached, queries **Root DNS** → **TLD Server (`.org`)** → **Authoritative Name Server** → caches & returns IP to client.',
        ],
        subsections: [
          {
            heading: 'Why DNS Uses Caching & Hierarchy',
            bullets: [
              '**Scalability** — no single DNS server could store billions of domains; hierarchy delegates zones while local caching cuts lookup latency to `< 2 ms`.',
            ],
            exampleHeading: 'Worked example: `192.0.2.5:80` vs `192.0.2.5:25`',
            examples: [
              'Same server IP, two sockets: port `80` routes packets to the **HTTP web server**, port `25` routes packets to the **SMTP mail server**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'socket', definition: 'Combination of an IP address and a Transport-layer port number uniquely identifying a network application endpoint.' },
        ],
        memoryAid: 'TCP/IP Top-Down = A-T-I-L (Application · Transport · Internet · Link). Email: SMTP = Send Mail To People; IMAP = Syncs Across Devices!',
        commonMistake: 'Saying SMTP is used to download emails into your inbox — SMTP ONLY sends/relays outgoing mail; POP3 or IMAP is used to retrieve incoming mail!',
      },
    ],
    keyTerms: [
      { term: 'TCP/IP 4-Layer Stack', definition: 'Application, Transport, Internet (Network), and Link layers structuring Internet communications.' },
      { term: 'Encapsulation', definition: 'Wrapping payload data with TCP port, IP address, and MAC frame headers down the stack.' },
      { term: 'SMTP / POP3 / IMAP', definition: 'Push email sending protocol vs single-device download (POP3) vs multi-device server sync (IMAP).' },
      { term: 'TCP vs UDP', definition: 'Reliable ordered connection-oriented transport vs low-latency connectionless datagrams.' },
    ],
    checklistPoints: [
      'Explain all four layers of the TCP/IP stack, encapsulation, and why MAC changes per hop while IP stays fixed',
      'Distinguish HTTP/HTTPS, FTP, SMTP, POP3, and IMAP with exact use cases',
      'Compare TCP vs UDP, define IP:Port sockets, and trace hierarchical DNS resolution',
    ],
  },
};

export const ALEVEL_CS_UNITS_1_2_QUIZZES: QuizQuestion[] = [
  // al-cs-1-1
  {
    id: 'al-cs-1-1-q1',
    subtopicId: 'al-cs-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'When adding two 4-bit BCD digits `0111` (7) + `0110` (6), raw binary produces `1101`. What correction must be added to produce valid BCD?',
    options: ['Add 0110 (+6) to obtain 1 0011', 'Subtract 0011 (−3)', 'Shift right by 1 bit', 'Invert all bits'],
    correctIndex: 0,
    explanation: 'Whenever a BCD nibble sum exceeds 9 (1001), adding 0110 (+6) skips the 6 invalid hex codes and generates the decimal carry into the tens nibble (13 → 1 0011).',
  },
  {
    id: 'al-cs-1-1-q2',
    subtopicId: 'al-cs-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does a logo designed as a VECTOR graphic stay razor-sharp when enlarged onto a 10-metre billboard?',
    options: [
      'It stores mathematical equations for drawing objects and properties that are recalculated at any scale',
      'It stores 100 million uncompressed RGB bitmap pixels',
      'It uses Run-Length Encoding on raw pixel rows',
      'It compresses colours using 7-bit ASCII',
    ],
    correctIndex: 0,
    explanation: 'Vector graphics store geometric equations and attributes (drawing list + properties) rather than fixed pixel grids.',
  },
  {
    id: 'al-cs-1-1-q3',
    subtopicId: 'al-cs-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the CIE 9618 prefix and representation facts.',
    segments: ['Under IEC standards, 1 KiB equals ', ' bytes (2¹⁰), and two’s complement addition suffers signed ', ' when two positive integers produce a negative sign bit.'],
    wordBank: ['1024', 'overflow', '1000', 'underflow'],
    answers: ['1024', 'overflow'],
    explanation: '1 KiB = 1024 bytes (`2¹⁰`); adding two same-sign numbers yielding an opposite sign indicates signed overflow.',
  },
  {
    id: 'al-cs-1-1-q4',
    subtopicId: 'al-cs-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each multimedia/data concept to its best application.',
    pairs: [
      { left: 'BCD (Binary-Coded Decimal)', right: 'Exact decimal currency storage without floating-point rounding drift' },
      { left: 'Vector Graphic', right: 'Scalable architectural blueprint or corporate logo' },
      { left: 'Bitmap Graphic', right: 'Complex camera photograph with subtle shading' },
    ],
    explanation: 'BCD preserves exact decimal digits, vectors scale geometric art cleanly, and bitmaps represent photorealism.',
  },
  {
    id: 'al-cs-1-1-q5',
    subtopicId: 'al-cs-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why banks often use Binary-Coded Decimal (BCD) rather than pure binary floating-point to store currency values. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'In pure binary floating-point, simple decimal fractions like 0.1 recur infinitely and cause rounding errors; BCD encodes every decimal digit exactly in 4 bits so monetary arithmetic has zero decimal rounding drift.',
      markPoints: [
        { id: 'mp1', markDescription: 'Binary floating-point cannot represent some decimal fractions (e.g. 0.1) accurately causing rounding error', requiredKeywordGroups: [['rounding', 'inaccura', 'recur', '0.1', 'floating']] },
        { id: 'mp2', markDescription: 'BCD stores each decimal digit exactly in 4 bits for exact monetary precision', requiredKeywordGroups: [['4 bit', 'each digit', 'exact', 'no rounding']] },
      ],
    },
    explanation: 'BCD avoids binary fraction rounding errors (like `0.1 + 0.2 = 0.30000000000000004`) by encoding each base-10 digit exactly in 4 bits.',
  },

  // al-cs-1-2
  {
    id: 'al-cs-1-2-q1',
    subtopicId: 'al-cs-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What denary value is represented by the two’s-complement floating-point number with 8-bit mantissa `01100000` and 4-bit exponent `0010` (+2)?',
    options: ['+3.0', '+1.5', '+6.0', '−3.0'],
    correctIndex: 0,
    explanation: 'Mantissa `0.1100000` = `0.5 + 0.25 = 0.75`; exponent `+2` shifts binary point right 2 places → `011.00000 = +3.0` (`0.75 × 2²`).',
  },
  {
    id: 'al-cs-1-2-q2',
    subtopicId: 'al-cs-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which pair of starting bits indicates a NORMALISED two’s-complement floating-point mantissa?',
    options: ['01 for positive, 10 for negative', '00 for positive, 11 for negative', '11 for positive, 00 for negative', '01 for both positive and negative'],
    correctIndex: 0,
    explanation: 'Normalisation eliminates redundant leading sign bits so positives start with `01...` (`0.1...`) and negatives start with `10...` (`1.0...`).',
  },
  {
    id: 'al-cs-1-2-q3',
    subtopicId: 'al-cs-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the floating-point trade-off rule for a fixed 16-bit word.',
    segments: ['Allocating more bits to the mantissa increases ', ', whereas allocating more bits to the exponent increases ', '.'],
    wordBank: ['precision', 'range', 'bandwidth', 'latency'],
    answers: ['precision', 'range'],
    explanation: 'More mantissa bits increase precision/accuracy; more exponent bits widen the representable magnitude range.',
  },
  {
    id: 'al-cs-1-2-q4',
    subtopicId: 'al-cs-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO reasons why floating-point numbers are normalised before storage.',
    options: [
      'Maximises precision by using all mantissa bits for significant digits',
      'Guarantees one unique bit representation per number for simple comparisons',
      'Eliminates all binary rounding errors for decimal 0.1',
      'Doubles the total physical RAM installed',
    ],
    correctIndices: [0, 1],
    explanation: 'Normalisation maximises significant-bit precision and ensures uniqueness (it cannot eliminate recurring binary fractions like 0.1).',
  },
  {
    id: 'al-cs-1-2-q5',
    subtopicId: 'al-cs-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Distinguish between floating-point OVERFLOW and UNDERFLOW. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Overflow occurs when a calculation produces a magnitude larger than the maximum representable exponent, whereas underflow occurs when a tiny non-zero value is too close to zero to represent with the minimum negative exponent and rounds to zero.',
      markPoints: [
        { id: 'mp1', markDescription: 'Overflow: value magnitude too large for available exponent range', requiredKeywordGroups: [['overflow'], ['too large', 'exceed', 'maximum', 'bigger']] },
        { id: 'mp2', markDescription: 'Underflow: tiny non-zero value too close to zero / too small for negative exponent', requiredKeywordGroups: [['underflow'], ['close to zero', 'too small', 'minimum', 'tiny', 'rounds to zero']] },
      ],
    },
    explanation: 'Overflow exceeds maximum magnitude; underflow falls below the smallest representable non-zero magnitude near zero.',
  },

  // al-cs-2-1
  {
    id: 'al-cs-2-1-q1',
    subtopicId: 'al-cs-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'How many usable host IP addresses are available on an IPv4 subnet with CIDR prefix `/26` (`255.255.255.192`)?',
    options: ['62', '64', '30', '254'],
    correctIndex: 0,
    explanation: '32 − 26 = 6 host bits → `2⁶ − 2 = 64 − 2 = 62` usable hosts (excluding network and broadcast addresses).',
  },
  {
    id: 'al-cs-2-1-q2',
    subtopicId: 'al-cs-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In Ethernet CSMA/CD, what do colliding stations do immediately after detecting a collision voltage spike?',
    options: [
      'Transmit a jam signal and wait a random exponential backoff period before retransmitting',
      'Switch automatically to fibre-optic cables',
      'Delete their local MAC addresses',
      'Send an SMTP email to the router',
    ],
    correctIndex: 0,
    explanation: 'CSMA/CD broadcasts a jam signal so all stations abort, then uses random backoff timers to prevent repeated simultaneous collisions.',
  },
  {
    id: 'al-cs-2-1-q3',
    subtopicId: 'al-cs-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the client architecture and cloud comparison.',
    segments: ['A ', ' client performs minimal local processing and depends heavily on a central server, while a ', ' cloud dedicates infrastructure exclusively to one organisation.'],
    wordBank: ['thin', 'private', 'thick', 'public'],
    answers: ['thin', 'private'],
    explanation: 'Thin clients offload processing to servers; private clouds provide dedicated isolated resources for strict security.',
  },
  {
    id: 'al-cs-2-1-q4',
    subtopicId: 'al-cs-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each network device/medium to its key property.',
    pairs: [
      { left: 'Fibre-optic cable', right: 'Transmits light pulses; highest bandwidth & immune to EMI' },
      { left: 'LAN Switch', right: 'Forwards Ethernet frames directly using MAC address tables' },
      { left: 'NAT (Network Address Translation)', right: 'Maps private RFC-1918 LAN IPs onto a shared public IPv4' },
    ],
    explanation: 'Fibre uses light (EMI-immune), switches forward via MAC tables, and NAT conserves public IPv4 space.',
  },
  {
    id: 'al-cs-2-1-q5',
    subtopicId: 'al-cs-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give two advantages of a Client–Server network over a Peer-to-Peer network for a 1,500-student college. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'User authentication, access permissions, and automated backups are managed centrally on dedicated servers, and shared files remain consistently available even when individual student workstations are switched off.',
      markPoints: [
        { id: 'mp1', markDescription: 'Centralised security, user authentication, or automated backups', requiredKeywordGroups: [['central', 'security', 'backup', 'permission', 'authenticat']] },
        { id: 'mp2', markDescription: 'Consistent shared file availability / scalability independent of client power state', requiredKeywordGroups: [['availab', 'consisten', 'scalab', 'always on', 'switched off']] },
      ],
    },
    explanation: 'Client–Server networks provide centralised security, automated backups, and 24/7 resource availability at scale.',
  },

  // al-cs-2-2
  {
    id: 'al-cs-2-2-q1',
    subtopicId: 'al-cs-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'In the BitTorrent protocol, what is the exact role of the TRACKER server?',
    options: [
      'Maintains a list of IP addresses of active peers in the swarm without storing or sending the actual file data',
      'Stores 100% of the movie file and streams it directly to every client',
      'Encrypts packets using quantum key distribution',
      'Reserves a dedicated physical circuit across routers',
    ],
    correctIndex: 0,
    explanation: 'The Tracker coordinates peer discovery (swarm IPs only); actual file pieces are exchanged directly peer-to-peer.',
  },
  {
    id: 'al-cs-2-2-q2',
    subtopicId: 'al-cs-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does an IP packet header include a Hop Count / Time-to-Live (TTL) field?',
    options: [
      'Prevents undeliverable packets from looping indefinitely between misconfigured routers by dropping them at TTL = 0',
      'Measures the physical cable length in metres',
      'Stores the symmetric decryption key',
      'Orders BitTorrent pieces alphabetically',
    ],
    correctIndex: 0,
    explanation: 'Each router decrements TTL by 1 and drops the packet if TTL reaches 0, eliminating endless routing loops.',
  },
  {
    id: 'al-cs-2-2-q3',
    subtopicId: 'al-cs-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the BitTorrent peer terminology.',
    segments: ['A peer holding 100% of the shared file and uploading to the swarm is a ', ', while a peer still downloading missing pieces is a ', '.'],
    wordBank: ['seeder', 'leecher', 'tracker', 'router'],
    answers: ['seeder', 'leecher'],
    explanation: 'Seeders possess the complete file; leechers are still downloading (or upload far less than they download).',
  },
  {
    id: 'al-cs-2-2-q4',
    subtopicId: 'al-cs-2-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each switching technology to its defining characteristic.',
    pairs: [
      { left: 'Circuit Switching', right: 'Dedicated physical path; constant bandwidth & in-order arrival' },
      { left: 'Packet Switching', right: 'Dynamic shared links; reroutes around failures; may incur jitter' },
      { left: 'Routing Table', right: 'Maps destination network prefixes to optimal next-hop interfaces' },
    ],
    explanation: 'Circuit switching guarantees fixed dedicated channels; packet switching shares links resiliently via routing tables.',
  },
  {
    id: 'al-cs-2-2-q5',
    subtopicId: 'al-cs-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two advantages of Packet Switching over Circuit Switching for general Internet traffic. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Links are shared dynamically across many users so bandwidth is never wasted during idle pauses, and packets automatically reroute around failed or congested routers for high resilience.',
      markPoints: [
        { id: 'mp1', markDescription: 'Efficient shared bandwidth / no wasted idle capacity', requiredKeywordGroups: [['shared', 'bandwidth', 'efficien', 'idle', 'not wasted']] },
        { id: 'mp2', markDescription: 'Fault tolerant / automatically reroutes around failed routers', requiredKeywordGroups: [['reroute', 'resilien', 'fault', 'fail', 'congest']] },
      ],
    },
    explanation: 'Packet switching maximises link utilisation and automatically routes around failed links without dropping sessions.',
  },

  // al-cs-2-3
  {
    id: 'al-cs-2-3-q1',
    subtopicId: 'al-cs-2-3',
    type: 'mcq',
    marks: 1,
    diagram: 'tcpip-packet-switching',
    prompt: 'Which two layers of the TCP/IP stack add Port Numbers and IP Addresses respectively during encapsulation?',
    options: [
      'Transport Layer (Ports) and Internet Layer (IP Addresses)',
      'Application Layer (Ports) and Link Layer (IP Addresses)',
      'Link Layer (Ports) and Transport Layer (IP Addresses)',
      'Internet Layer (Ports) and Application Layer (IP Addresses)',
    ],
    correctIndex: 0,
    explanation: 'Transport (TCP/UDP) attaches port numbers; Internet (IP) attaches source/destination IP addresses; Link attaches MAC addresses.',
  },
  {
    id: 'al-cs-2-3-q2',
    subtopicId: 'al-cs-2-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is IMAP strongly preferred over POP3 by a user reading work emails across a phone, tablet, and laptop?',
    options: [
      'IMAP keeps emails and read/folder states synchronised on the mail server across all devices',
      'IMAP pushes outgoing emails between mail servers without SMTP',
      'POP3 encrypts video calls using UDP',
      'IMAP requires zero internet connection to fetch new emails',
    ],
    correctIndex: 0,
    explanation: 'POP3 downloads and typically removes mail from the server to one device, whereas IMAP mirrors server-side mailboxes across all devices.',
  },
  {
    id: 'al-cs-2-3-q3',
    subtopicId: 'al-cs-2-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the email and transport protocol pairings.',
    segments: ['Outgoing email is pushed to mail servers using ', ', while live low-latency online gaming typically chooses connectionless ', ' at the Transport layer.'],
    wordBank: ['SMTP', 'UDP', 'POP3', 'FTP'],
    answers: ['SMTP', 'UDP'],
    explanation: 'SMTP pushes outgoing email; UDP delivers minimal-latency connectionless datagrams ideal for live gaming/VoIP.',
  },
  {
    id: 'al-cs-2-3-q4',
    subtopicId: 'al-cs-2-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each TCP/IP layer to its primary protocol/addressing role.',
    pairs: [
      { left: 'Application Layer', right: 'HTTP, HTTPS, FTP, SMTP, IMAP, DNS' },
      { left: 'Transport Layer', right: 'TCP/UDP segmentation, ports & reliability' },
      { left: 'Link Layer', right: 'MAC framing over Ethernet or Wi-Fi hardware' },
    ],
    explanation: 'Each TCP/IP layer isolates a cleanly defined responsibility.',
  },
  {
    id: 'al-cs-2-3-q5',
    subtopicId: 'al-cs-2-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain two benefits of designing network communication as a modular layered protocol stack (TCP/IP). [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Each layer handles one isolated task so hardware or software at one layer can be upgraded without rewriting other layers, and standardised interfaces ensure interoperability across different vendors.',
      markPoints: [
        { id: 'mp1', markDescription: 'Modularity / one layer can change or upgrade independently without breaking other layers', requiredKeywordGroups: [['modular', 'independent', 'without', 'upgrade', 'change', 'one layer']] },
        { id: 'mp2', markDescription: 'Interoperability across manufacturers/platforms OR easier debugging', requiredKeywordGroups: [['interoperab', 'standard', 'vendor', 'manufacturer', 'debug']] },
      ],
    },
    explanation: 'Layering decouples hardware upgrades from application software and guarantees global cross-vendor interoperability.',
  },
];

export const ALEVEL_CS_UNITS_1_2_FLASHCARDS: FlashcardItem[] = [
  // al-cs-1-1
  { id: 'al-cs-1-1-fc1', subtopicId: 'al-cs-1-1', front: 'How is `A − B` computed in two’s complement, and when does signed overflow occur?', backBullets: ['Compute `A + (−B)` (invert B and add 1), ignoring carry out of the MSB.', 'Signed overflow happens ONLY when two same-sign inputs produce an opposite-sign output.'] },
  { id: 'al-cs-1-1-fc2', subtopicId: 'al-cs-1-1', front: 'What is BCD addition’s `+0110` correction rule?', backBullets: ['If a 4-bit BCD nibble sum > 9 (`1010–1111`) or produces a carry out, add `0110` (+6).', 'Skips the 6 unused hex codes and carries 1 into the next decimal digit.'] },
  { id: 'al-cs-1-1-fc3', subtopicId: 'al-cs-1-1', front: 'Contrast IEC binary prefixes (`KiB/MiB`) with decimal SI prefixes (`kB/MB`).', backBullets: ['IEC binary prefixes step by `2¹⁰ = 1024` (`1 KiB = 1024 B`, `1 MiB = 1024 KiB`).', 'SI decimal prefixes step by `10³ = 1000` (`1 kB = 1000 B`).'] },
  { id: 'al-cs-1-1-fc4', subtopicId: 'al-cs-1-1', front: 'Contrast Bitmap and Vector graphic representation.', backBullets: ['Bitmap: grid of pixels + header; photorealistic, pixelates when scaled.', 'Vector: mathematical drawing list of drawing objects + properties; scales infinitely with tiny files.'] },
  { id: 'al-cs-1-1-fc5', subtopicId: 'al-cs-1-1', front: 'Why do financial databases prefer BCD over binary floating-point?', backBullets: ['Simple decimals like `0.1` recur infinitely in base-2 floating-point causing rounding drift.', 'BCD stores every decimal digit exact in 4 bits with zero rounding inaccuracy.'] },

  // al-cs-1-2
  { id: 'al-cs-1-2-fc1', subtopicId: 'al-cs-1-2', front: 'How do you decode a two’s-complement floating-point number?', backBullets: ['Value = `Mantissa × 2^Exponent` (implicit binary point after sign bit).', 'Shift binary point right by `E` if positive (left if negative) and sum place weights.'] },
  { id: 'al-cs-1-2-fc2', subtopicId: 'al-cs-1-2', front: 'How do you normalise a floating-point mantissa and adjust its exponent?', backBullets: ['Shift mantissa left `k` places until leading bits are `01` (+ve) or `10` (−ve).', 'Subtract `k` from the Exponent so the numeric value remains identical!'] },
  { id: 'al-cs-1-2-fc3', subtopicId: 'al-cs-1-2', front: 'State the precision vs range trade-off for a fixed floating-point word size.', backBullets: ['More mantissa bits → higher precision/accuracy, smaller range.', 'More exponent bits → wider magnitude range, lower precision.'] },
  { id: 'al-cs-1-2-fc4', subtopicId: 'al-cs-1-2', front: 'Contrast floating-point Overflow vs Underflow.', backBullets: ['Overflow: magnitude too large for max exponent.', 'Underflow: tiny non-zero value closer to 0 than smallest negative exponent (rounds to 0).'] },
  { id: 'al-cs-1-2-fc5', subtopicId: 'al-cs-1-2', front: 'How does lossless Dictionary Compression (LZ77/LZW) compress text?', backBullets: ['Builds a dictionary table mapping repeated substrings/words to short integer tokens.', 'Replaces repeated occurrences with compact dictionary index pointers (lossless!).'] },

  // al-cs-2-1
  { id: 'al-cs-2-1-fc1', subtopicId: 'al-cs-2-1', front: 'Contrast Client–Server and Peer-to-Peer (P2P) networks.', backBullets: ['Client–Server: central dedicated servers, strong security/backups, higher cost/single point of failure.', 'P2P: every node is equal client & server, low cost, weak central security & uneven availability.'] },
  { id: 'al-cs-2-1-fc2', subtopicId: 'al-cs-2-1', front: 'Contrast Thin Client vs Thick Client.', backBullets: ['Thin client: relies on central server for CPU/storage, easy maintenance, fails offline.', 'Thick client: runs processing locally, works offline, harder to update uniformly.'] },
  { id: 'al-cs-2-1-fc3', subtopicId: 'al-cs-2-1', front: 'Outline Ethernet’s CSMA/CD collision handling protocol.', backBullets: ['Listen for idle wire → transmit → detect voltage spike collision → broadcast jam signal.', 'Each colliding station waits a random exponential backoff delay before retrying.'] },
  { id: 'al-cs-2-1-fc4', subtopicId: 'al-cs-2-1', front: 'How many usable hosts are in an IPv4 CIDR `/n` subnet?', backBullets: ['Usable hosts = `2^(32 − n) − 2` (excludes Network ID and Broadcast address).', 'Example: `/24` has `2⁸ − 2 = 254` hosts; `/26` has `2⁶ − 2 = 62` hosts.'] },
  { id: 'al-cs-2-1-fc5', subtopicId: 'al-cs-2-1', front: 'What is the role of NAT with Private IPv4 addresses?', backBullets: ['Private ranges (`10.x`, `172.16–31.x`, `192.168.x`) are reused inside millions of LANs.', 'Boundary router performs NAT to translate private IPs onto one shared Public IPv4.'] },

  // al-cs-2-2
  { id: 'al-cs-2-2-fc1', subtopicId: 'al-cs-2-2', front: 'Compare Circuit Switching vs Packet Switching.', backBullets: ['Circuit: dedicated physical channel, constant bandwidth, ordered arrival, wastes idle time.', 'Packet: dynamic shared links, fault-tolerant rerouting, variable jitter & reassembly overhead.'] },
  { id: 'al-cs-2-2-fc2', subtopicId: 'al-cs-2-2', front: 'What does a router’s Routing Table store?', backBullets: ['Destination network prefixes, outgoing interface, next-hop router IP, and route cost metric.', 'Updated dynamically when links congest or fail.'] },
  { id: 'al-cs-2-2-fc3', subtopicId: 'al-cs-2-2', front: 'Why does every IP packet carry a Hop Count / TTL?', backBullets: ['Decremented by 1 at each router hop; router discards packet when TTL hits 0.', 'Prevents misrouted packets from looping forever and flooding links.'] },
  { id: 'al-cs-2-2-fc4', subtopicId: 'al-cs-2-2', front: 'Define `.torrent`, Tracker, and Swarm in BitTorrent.', backBullets: ['`.torrent`: metadata file with tracker URL & piece hashes. Tracker: server tracking live peer IPs (no file!).', 'Swarm: all connected peers currently sharing pieces of that file.'] },
  { id: 'al-cs-2-2-fc5', subtopicId: 'al-cs-2-2', front: 'Contrast Seeder and Leecher in BitTorrent.', backBullets: ['Seeder: peer possessing 100% of the file uploading pieces to others.', 'Leecher: peer still downloading missing pieces (or uploading far less than downloading).'] },

  // al-cs-2-3
  { id: 'al-cs-2-3-fc1', subtopicId: 'al-cs-2-3', front: 'Name the 4 layers of the TCP/IP protocol stack from top to bottom.', backBullets: ['4. Application (HTTP/SMTP/DNS) → 3. Transport (TCP/UDP ports).', '2. Internet (IP routing) → 1. Link (MAC frames & physical media).'] },
  { id: 'al-cs-2-3-fc2', subtopicId: 'al-cs-2-3', front: 'Which addresses stay fixed and which change across router hops?', backBullets: ['Source & Destination IP addresses stay fixed end-to-end across the journey.', 'Source & Destination MAC addresses change on every single link hop!'] },
  { id: 'al-cs-2-3-fc3', subtopicId: 'al-cs-2-3', front: 'Contrast SMTP, POP3, and IMAP for email.', backBullets: ['SMTP pushes outgoing email between client/servers.', 'POP3 downloads & removes from server (1 device); IMAP syncs mailboxes on server across all devices.'] },
  { id: 'al-cs-2-3-fc4', subtopicId: 'al-cs-2-3', front: 'Contrast TCP and UDP at the Transport Layer.', backBullets: ['TCP: connection-oriented, ordered, ACKs/retransmissions (web, email, FTP).', 'UDP: connectionless, low header overhead, no resend delay (VoIP, live gaming, DNS).'] },
  { id: 'al-cs-2-3-fc5', subtopicId: 'al-cs-2-3', front: 'Trace how hierarchical DNS resolves an uncached domain name.', backBullets: ['Local cache miss → Recursive Resolver → Root DNS → TLD server (`.org`) → Authoritative server.', 'IP returned and cached locally to speed future lookups.'] },
];

export const ALEVEL_CS_UNITS_1_2_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'al-cs-ex-1-1',
    subtopicId: 'al-cs-1-1',
    number: 1,
    stimulus: 'Cambridge International AS & A-Level 9618 Paper 1: A cash register firmware stores prices in packed Binary-Coded Decimal (BCD) and prints scalable receipts using vector icons.',
    parts: [
      {
        id: 'al-cs-ex-1-1-a',
        label: '(a)',
        prompt: 'Add the BCD nibbles `1001` (9) and `0100` (4), showing the `+0110` correction step and final 2-digit BCD output. [2 marks]',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Raw binary sum is 1101 (13 > 9, invalid BCD). Adding correction 0110 (+6) yields 1 0011, representing tens nibble 0001 and units nibble 0011 (13).',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies raw sum 1101 > 9 and adds 0110 (+6)', requiredKeywordGroups: [['1101', '0110', '+6', 'add 6']] },
            { id: 'mp2', markDescription: 'Correct final BCD 0001 0011 (or 1 0011)', requiredKeywordGroups: [['0011'], ['13', '0001', '1 0011']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-1-2',
    subtopicId: 'al-cs-1-2',
    number: 2,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A computer represents floating-point numbers using an 8-bit two’s-complement mantissa and a 4-bit two’s-complement exponent.',
    parts: [
      {
        id: 'al-cs-ex-1-2-a',
        label: '(a)',
        prompt: 'Normalise the unnormalised floating-point number `Mantissa = 00010100`, `Exponent = 0100` (+4) and give its denary value. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Shift mantissa left 2 places to begin with 01: normalised mantissa = 01010000. Subtract 2 from exponent (+4 − 2 = +2): normalised exponent = 0010. Denary value = 010.10000 = +2.5.',
          markPoints: [
            { id: 'mp1', markDescription: 'Normalised mantissa = 01010000', requiredKeywordGroups: [['01010000']] },
            { id: 'mp2', markDescription: 'Normalised exponent = 0010 (+2)', requiredKeywordGroups: [['0010']] },
            { id: 'mp3', markDescription: 'Denary value = 2.5', numericMatch: { value: 2.5, tolerance: 0.01 } },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-2-1',
    subtopicId: 'al-cs-2-1',
    number: 3,
    stimulus: 'Cambridge International AS & A-Level 9618 Paper 1: A multinational hospital deploys thin-client ward terminals connected over a fibre-optic star LAN to a private cloud.',
    parts: [
      {
        id: 'al-cs-ex-2-1-a',
        label: '(a)',
        prompt: 'Justify why the hospital chooses a Private Cloud and Fibre-Optic cabling rather than Public Cloud and twisted-pair copper. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'A private cloud provides dedicated infrastructure under full hospital security control to meet medical data privacy regulations. Fibre-optic transmits light pulses with far higher bandwidth, longer distance without repeaters, and complete immunity to electromagnetic interference from hospital scanners.',
          markPoints: [
            { id: 'mp1', markDescription: 'Private cloud: dedicated hardware / strict security & patient privacy control', requiredKeywordGroups: [['private cloud', 'dedicated'], ['security', 'privacy', 'control', 'regulat']] },
            { id: 'mp2', markDescription: 'Fibre-optic: much higher bandwidth / faster throughput', requiredKeywordGroups: [['bandwidth', 'faster', 'speed']] },
            { id: 'mp3', markDescription: 'Fibre-optic: immune to electromagnetic interference (EMI)', requiredKeywordGroups: [['interference', 'emi', 'electromagnetic']] },
            { id: 'mp4', markDescription: 'Fibre-optic: longer transmission distance without signal attenuation', requiredKeywordGroups: [['distance', 'repeater', 'attenuat', 'light']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-2-2',
    subtopicId: 'al-cs-2-2',
    number: 4,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: An open-source studio distributes a 12 GiB game engine update to 50,000 developers worldwide using BitTorrent instead of a single download server.',
    parts: [
      {
        id: 'al-cs-ex-2-2-a',
        label: '(a)',
        prompt: 'Explain how the `.torrent` file, tracker, swarm, seeders, and leechers cooperate to distribute the 12 GiB update rapidly. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Clients load the .torrent metadata file and contact the tracker server to receive IP addresses of active peers in the swarm. Seeders holding 100% of the file and leechers still downloading exchange split file pieces directly peer-to-peer in parallel, scaling total upload bandwidth as the swarm grows.',
          markPoints: [
            { id: 'mp1', markDescription: '.torrent metadata directs client to Tracker for swarm peer IPs', requiredKeywordGroups: [['tracker'], ['ip', 'peer', 'swarm']] },
            { id: 'mp2', markDescription: 'File split into pieces exchanged directly peer-to-peer in parallel', requiredKeywordGroups: [['piece'], ['parallel', 'peer-to-peer', 'direct']] },
            { id: 'mp3', markDescription: 'Distinguishes Seeders (100% file) and Leechers (still downloading)', requiredKeywordGroups: [['seeder'], ['leecher']] },
            { id: 'mp4', markDescription: 'Scales bandwidth without bottlenecking one central server', requiredKeywordGroups: [['bandwidth', 'bottleneck', 'scale', 'upload']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-2-3',
    subtopicId: 'al-cs-2-3',
    number: 5,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A browser opens `https://portal.uni.edu` over Wi-Fi, traversing three routers before reaching the university web server.',
    diagram: 'tcpip-packet-switching',
    parts: [
      {
        id: 'al-cs-ex-2-3-a',
        label: '(a)',
        prompt: 'Explain how encapsulation operates across all four layers of the TCP/IP stack and state which address changes at every router hop. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The Application layer generates the HTTPS request; the Transport layer adds TCP port numbers and sequence numbers; the Internet layer wraps the segment in an IP packet with fixed end-to-end source/destination IP addresses; the Link layer wraps it into a frame with MAC addresses which are rewritten at every router hop.',
          markPoints: [
            { id: 'mp1', markDescription: 'Application generates HTTPS data & Transport attaches TCP port/sequence numbers', requiredKeywordGroups: [['application', 'https'], ['transport', 'port']] },
            { id: 'mp2', markDescription: 'Internet layer attaches fixed source/destination IP addresses', requiredKeywordGroups: [['internet', 'network'], ['ip']] },
            { id: 'mp3', markDescription: 'Link layer frames with MAC addresses', requiredKeywordGroups: [['link'], ['mac', 'frame']] },
            { id: 'mp4', markDescription: 'MAC address changes at each router hop while IP remains constant', requiredKeywordGroups: [['mac'], ['hop', 'change', 'rewrit', 'router']] },
          ],
        },
      },
    ],
  },
];
