import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_CS_UNITS_3_4_TOPICS: TopicDefinition[] = [
  {
    number: 3,
    title: 'Hardware, Processor Architecture & Boolean Logic (AS + A2)',
    subtopics: [
      {
        id: 'al-cs-3-1',
        code: '3.1',
        slug: '3.1-registers-buses-assembly-addressing-bit-manipulation',
        title: 'Registers, Buses, Assembly Language, Addressing Modes & Bit Manipulation',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-3-2',
        code: '3.2',
        slug: '3.2-risc-cisc-pipelining-parallel-virtual-machines',
        title: 'RISC vs CISC, Pipelining, Parallel Architectures (SISD–MIMD) & Virtual Machines',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-3-3',
        code: '3.3',
        slug: '3.3-adders-flip-flops-boolean-algebra-karnaugh-maps',
        title: 'Half/Full Adders, Flip-Flops, Boolean Algebra, De Morgan’s & Karnaugh Maps',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'System Software, Operating Systems & Translation (AS + A2)',
    subtopics: [
      {
        id: 'al-cs-4-1',
        code: '4.1',
        slug: '4.1-os-paging-segmentation-virtual-memory-scheduling',
        title: 'OS Memory Management (Paging, Segmentation, Virtual Memory) & CPU Scheduling',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-4-2',
        code: '4.2',
        slug: '4.2-compilation-stages-two-pass-assembler-bnf-rpn',
        title: 'Compilation Stages, Two-Pass Assembly, Linkers/Loaders, BNF & Reverse Polish Notation',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_CS_UNITS_3_4_NOTES: Record<string, NoteLesson> = {
  'al-cs-3-1': {
    subtopicId: 'al-cs-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Registers, Buses, Assembly Language, Addressing Modes & Bit Manipulation',
    readingMinutes: 13,
    videoTitle: '34. OCR A Level (H046-H446) SLR7 - 1.2 Assembly language and LMC language',
    youtubeId: 'nAbLDiytl2M',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:20',
    courseMatchSummary: '3 of 3 sections match Cambridge International AS & A-Level Computer Science (9618 Paper 1)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Special-Purpose Registers (IX, SR, PC, MAR, MDR, CIR, ACC) & Register Transfer Notation', cardId: 'al-cs-3-1-c1' },
      { time: '2:50', seconds: 170, label: 'Cambridge 9618 Assembly Addressing Modes (Immediate, Direct, Indirect, Indexed, Relative)', cardId: 'al-cs-3-1-c2' },
      { time: '5:40', seconds: 340, label: 'Bit Manipulation (AND/OR/XOR Masking) & Logical vs Arithmetic vs Cyclic Shifts', cardId: 'al-cs-3-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-3-1-c1',
        title: 'Special-Purpose Registers & Register Transfer Notation (RTN)',
        summary: 'Beyond IGCSE registers, CIE 9618 adds the Index Register (`IX`) for array offsets and the Status Register (`SR`) holding Carry, Zero, Negative, and Overflow flags.',
        diagram: 'cpu-fde-architecture',
        bullets: [
          '**Index Register (`IX`)** — stores an integer offset added to a base operand address during **indexed addressing** (`LDX 200` reads address `200 + [IX]`), making array loops concise in Assembly.',
          '**Status Register (`SR`)** — individual flag bits updated by the ALU (`Z` = Zero, `C` = Carry, `N` = Negative, `V` = Overflow) tested by conditional branch instructions (`JPE`, `JPN`).',
          '**Register Transfer Notation (RTN)** — `MAR ← [PC]`, `PC ← [PC] + 1`, `MDR ← [[MAR]]` (double brackets `[[MAR]]` mean *"contents of the memory address stored inside MAR"*), `CIR ← [MDR]`.',
        ],
        subsections: [
          {
            heading: 'Bus Width Effects on Performance',
            bullets: [
              '**Address Bus width `n`** determines maximum directly addressable memory locations (`2ⁿ` locations, e.g. 32-bit = `4 GiB`); **Data Bus width** determines bits transferred per memory read/write.',
            ],
            exampleHeading: 'Worked RTN trace of Fetch cycle',
            examples: [
              '1. `MAR ← [PC]` · 2. `PC ← [PC] + 1` · 3. `MDR ← [[MAR]]` · 4. `CIR ← [MDR]`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'index register (IX)', definition: 'Special-purpose register holding a dynamic offset added to a base memory address for indexed addressing.' },
          { term: 'status register (SR)', definition: 'Flag register recording ALU condition bits (Carry, Zero, Negative, Overflow) for conditional branching.' },
        ],
      },
      {
        id: 'al-cs-3-1-c2',
        title: 'Cambridge 9618 Assembly Addressing Modes',
        summary: 'Addressing modes determine whether the operand field holds a literal value, a direct memory address, a pointer to an address, or an offset relative to `IX` or `PC`.',
        bullets: [
          '**Immediate (`LDM #45`)** — operand IS the literal data value `45` (loaded directly into `ACC`, zero extra RAM fetch).',
          '**Direct (`LDD 200`)** — operand `200` is the RAM address holding the target data (`ACC ← [200]`).',
          '**Indirect (`LDI 200`)** — RAM address `200` holds a **pointer** to the real address (`ACC ← [[200]]`, e.g. if `[200] = 350`, loads `[350]`).',
          '**Indexed (`LDX 200`)** — effective address = `200 + [IX]` (`ACC ← [200 + [IX]]`, ideal for stepping through arrays).',
          '**Relative (`JMP +4`)** — effective address = `[PC] + offset`, allowing **relocatable** machine code anywhere in RAM.',
        ],
        subsections: [
          {
            heading: 'Worked Addressing Mode Trace',
            bullets: [
              '**Given**: `[IX] = 2`, `RAM[100] = 102`, `RAM[101] = 55`, `RAM[102] = 88`.',
            ],
            exampleHeading: 'Evaluate `LDM #100`, `LDD 100`, `LDI 100`, and `LDX 100`',
            examples: [
              '`LDM #100` → `ACC = 100` · `LDD 100` → `ACC = 102` · `LDI 100` → `ACC = [102] = 88` · `LDX 100` → `ACC = [100+2] = 88`!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'indirect addressing', definition: 'Addressing mode where the operand gives a memory address holding a pointer to the actual operand address.' },
          { term: 'indexed addressing', definition: 'Addressing mode calculating the effective address by adding the Index Register (`IX`) to the instruction’s base address.' },
        ],
      },
      {
        id: 'al-cs-3-1-c3',
        title: 'Bitwise Masking & Logical / Arithmetic / Cyclic Shifts',
        summary: 'Bitwise `AND`, `OR`, and `XOR` masks clear, set, test, or toggle specific hardware bits; Arithmetic right shift preserves the sign bit while Cyclic shift wraps shifted-out bits around.',
        bullets: [
          '**Bitwise Masks (8-bit register `X`)** — **`AND` mask** clears (`0`s) unwanted bits / isolates target bits (`X AND 00001111` keeps lower nibble); **`OR` mask** forces selected bits ON (`1`); **`XOR` mask** toggles (`0↔1`) selected bits wherever mask has `1`.',
          '**Logical shift (`LSL`/`LSR`)** — shifts in `0`s; discarded bits enter Carry flag.',
          '**Arithmetic right shift** — preserves the **sign bit (MSB)** on the left so negative two’s complement integers stay negative (`11110100` (`−12`) ASR 1 → `11111010` (`−6`)!).',
          '**Cyclic (Rotate) shift** — bit shifted off one end **wraps around** directly into the vacated opposite end (zero bit loss, used in cryptography/checksums).',
        ],
        subsections: [
          {
            heading: 'Worked Bit Masking Example',
            bullets: [
              "**Lowercase-to-uppercase ASCII trick** — `'a'` (`01100001`) `AND 11011111` clears bit 5 → `'A'` (`01000001`)!",
            ],
            exampleHeading: 'Worked example: Clear upper 4 bits of `10110110` using `AND`',
            examples: [
              '`10110110 AND 00001111 = 00000110` (`0`s mask out upper nibble, `1`s preserve lower nibble!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'bit masking', definition: 'Applying bitwise AND (clear/isolate), OR (set), or XOR (toggle) against a binary mask to manipulate specific hardware bits.' },
        ],
        memoryAid: 'Masking: `AND 0` = Clear · `OR 1` = Set · `XOR 1` = Toggle! `LDM #` = Immediate · `LDD` = Direct · `LDI` = Indirect · `LDX` = Indexed!',
        commonMistake: 'Forgetting double brackets `[[MAR]]` in Register Transfer Notation — `[MAR]` is the address number itself, whereas `[[MAR]]` is the DATA stored at that RAM address!',
      },
    ],
    keyTerms: [
      { term: 'Register Transfer Notation (RTN)', definition: 'Formal notation describing data transfers between CPU registers and memory (`MDR ← [[MAR]]`).' },
      { term: 'Addressing Modes', definition: 'Immediate (`LDM`), Direct (`LDD`), Indirect (`LDI`), Indexed (`LDX`), and Relative operand resolution.' },
      { term: 'Bitwise Masking (AND/OR/XOR)', definition: 'Isolating/clearing (AND), setting (OR), or toggling (XOR) targeted register bits.' },
      { term: 'Arithmetic vs Cyclic Shift', definition: 'Sign-preserving right shift for signed integers vs bit-wrapping rotation with zero data loss.' },
    ],
    checklistPoints: [
      'Write exact RTN transfers for Fetch–Decode–Execute including `IX` and `SR` roles',
      'Trace Immediate, Direct, Indirect, Indexed, and Relative Cambridge 9618 assembly instructions',
      'Design AND/OR/XOR bitmasks and distinguish Logical, Arithmetic, and Cyclic shifts',
    ],
  },

  'al-cs-3-2': {
    subtopicId: 'al-cs-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'RISC vs CISC, Pipelining, Parallel Architectures (SISD–MIMD) & Virtual Machines',
    readingMinutes: 12,
    videoTitle: '6. OCR A Level (H046-H446) SLR2 - 1.1 CISC vs RISC',
    youtubeId: 'PaeXsm5HGJs',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:12',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'RISC vs CISC Processor Design & Instruction Pipelining', cardId: 'al-cs-3-2-c1' },
      { time: '2:45', seconds: 165, label: 'Flynn’s Taxonomy: SISD, SIMD, MISD & MIMD Parallel Processing', cardId: 'al-cs-3-2-c2' },
      { time: '5:30', seconds: 330, label: 'Virtual Machines (Host/Guest OS, Bytecode VM & Trade-Offs)', cardId: 'al-cs-3-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-3-2-c1',
        title: 'RISC vs CISC Processors & Instruction Pipelining',
        summary: 'RISC uses small, fixed-length, single-cycle instructions ideal for pipelining and low-power mobile CPUs (ARM); CISC packs rich variable-length multi-cycle instructions into hardware (x86).',
        bullets: [
          '**RISC (Reduced Instruction Set Computer)** — few simple **fixed-length** instructions executing in **1 clock cycle**, large bank of general-purpose registers, Load/Store memory architecture, simpler hardwired control unit, **low power/heat** (ARM smartphones/Apple Silicon), relies more heavily on optimising compilers.',
          '**CISC (Complex Instruction Set Computer)** — rich set of **variable-length, multi-cycle** instructions (can combine memory fetch + arithmetic in 1 instruction), complex microcode control unit, smaller RAM footprint for machine code, simpler compiler design (x86 desktops/servers).',
          '**Pipelining** — overlaps Fetch, Decode, and Execute of consecutive instructions in an assembly-line conveyor: while instruction `N` executes, `N+1` decodes and `N+2` fetches — approaching **1 instruction completed per clock cycle**! **Interrupt / Branch hazard**: a branch or interrupt forces the pipeline to **flush** prefetched instructions.',
        ],
        subsections: [
          {
            heading: 'Why RISC Pipelines Cleanly',
            bullets: [
              '**Uniform cycle duration** — because every RISC instruction has identical length and takes 1 clock stage, stages never stall waiting for variable-length multi-cycle CISC instructions.',
            ],
            exampleHeading: 'Worked speedup: 5 instructions through a 3-stage pipeline (F, D, E)',
            examples: [
              'Without pipelining: `5 × 3 = 15 cycles`. With 3-stage pipelining: `3 + (5 − 1) = 7 cycles` (`2.14×` faster throughput!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pipelining', definition: 'Processor technique overlapping Fetch, Decode, and Execute stages of consecutive instructions to raise instruction throughput.' },
          { term: 'RISC', definition: 'Reduced Instruction Set Computer using small, fixed-length, single-cycle instructions suited to pipelining and high energy efficiency.' },
        ],
      },
      {
        id: 'al-cs-3-2-c2',
        title: 'Parallel Computing & Flynn’s Taxonomy (SISD, SIMD, MISD, MIMD)',
        summary: 'Parallel processing accelerates large workloads by executing instructions across multiple cores/ALUs categorised by instruction streams and data streams.',
        bullets: [
          '**SISD (Single Instruction, Single Data)** — classic single-core sequential Von Neumann processor executing 1 instruction on 1 data value at a time.',
          '**SIMD (Single Instruction, Multiple Data)** — executes the **exact same instruction simultaneously** across an array of different data elements (ideal for **GPUs**, pixel brightness filters, matrix/AI tensor ops).',
          '**MISD (Multiple Instruction, Single Data)** — runs multiple independent algorithms simultaneously on the **same input data** (rare; used in **fault-tolerant avionics / spacecraft flight computers** comparing redundant outputs).',
          '**MIMD (Multiple Instruction, Multiple Data)** — multiple autonomous processors/cores running **different programs on different datasets** concurrently (modern **multi-core CPUs** and **massively parallel supercomputer clusters**).',
        ],
        subsections: [
          {
            heading: 'Limits to Parallelism',
            bullets: [
              '**Software bottleneck** — inherently sequential algorithms cannot be split arbitrarily across cores, and inter-processor synchronisation/communication adds overhead.',
            ],
            exampleHeading: 'Worked match: Applying `+10` brightness to `2 million` pixels',
            examples: [
              '**SIMD** (GPU vector lanes) executes identical `+10` across thousands of pixels in parallel in a single clock beat!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'SIMD', definition: 'Single Instruction, Multiple Data — parallel architecture applying one identical instruction simultaneously across an array of data items (e.g. GPU).' },
          { term: 'MIMD', definition: 'Multiple Instruction, Multiple Data — multi-core or clustered processors independently running separate instructions on separate datasets.' },
        ],
      },
      {
        id: 'al-cs-3-2-c3',
        title: 'Virtual Machines (System VMs & Process/Bytecode VMs)',
        summary: 'A Virtual Machine emulates a complete computer system in software via a hypervisor (Host OS → Guest OS), enabling safe sandboxing, legacy compatibility, and cloud server consolidation.',
        bullets: [
          '**How a System VM works** — **Host OS / Hypervisor** allocates virtualised slices of physical CPU, RAM, NIC, and storage to isolated **Guest OS** instances; the VM intercepts guest privileged calls and translates them onto host hardware.',
          '**Key benefits** — run multiple OS platforms (Windows + Linux) on one server (**server consolidation**), **malware sandboxing** (crash/infection stays trapped inside guest VM), easy snapshots/testing across OS versions, running **legacy software** on modern hardware.',
          '**Drawbacks** — extra translation/emulation layer causes **slower execution** than native hardware, heavy **RAM/storage overhead** per guest OS, and limited access to low-level specialised hardware.',
        ],
        subsections: [
          {
            heading: 'Bytecode Virtual Machines (JVM)',
            bullets: [
              '**Write Once, Run Anywhere** — Java compiles to platform-independent **bytecode** executed by each OS’s Java Virtual Machine (JVM).',
            ],
            exampleHeading: 'Worked scenario: Cybersecurity lab analysing ransomware safely',
            examples: [
              'Analyst runs malware inside an isolated **Guest VM** snapshot with virtual networking disabled → Host OS stays `100%` unharmed and VM resets cleanly in seconds.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'virtual machine (VM)', definition: 'Software emulation of a physical computer system enabling isolated Guest OS execution or platform-independent bytecode runtime.' },
        ],
        memoryAid: 'RISC = Fixed-length, 1-cycle, Pipelines cleanly! Flynn’s: SISD (1 core), SIMD (GPU pixels), MISD (Spacecraft redundancy), MIMD (Multi-core/Clusters)!',
        commonMistake: 'Saying a Virtual Machine runs faster than the native Host OS — VMs ALWAYS add a hypervisor/emulation translation overhead, making native hardware execution faster!',
      },
    ],
    keyTerms: [
      { term: 'RISC vs CISC', definition: 'Simple fixed-length 1-cycle pipelined instructions vs rich multi-cycle microcoded instructions.' },
      { term: 'Instruction Pipelining', definition: 'Overlapping Fetch, Decode, and Execute of consecutive instructions to boost throughput.' },
      { term: 'Flynn’s Taxonomy (SISD–MIMD)', definition: 'Classification of computer architectures by single/multiple instruction and data streams.' },
      { term: 'Virtual Machine (Host/Guest OS)', definition: 'Software-emulated computer managed by a hypervisor for sandboxing and multi-OS consolidation.' },
    ],
    checklistPoints: [
      'Compare RISC and CISC across instruction length, register count, compiler load, power, and pipelining',
      'Classify real workloads accurately across SISD, SIMD, MISD, and MIMD',
      'Explain how Host OS, Hypervisor, and Guest OS interact in Virtual Machines and evaluate trade-offs',
    ],
  },

  'al-cs-3-3': {
    subtopicId: 'al-cs-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Half/Full Adders, Flip-Flops, Boolean Algebra, De Morgan’s & Karnaugh Maps',
    readingMinutes: 13,
    videoTitle: '105. OCR A Level (H446) SLR15 - 1.4 Half & full adders',
    youtubeId: 'X4mzhHX8IwI',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:15',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Combinational Adders (Half Adder & Full Adder) and Sequential SR/JK Flip-Flops', cardId: 'al-cs-3-3-c1' },
      { time: '2:55', seconds: 175, label: 'Boolean Algebra Identities & De Morgan’s Laws', cardId: 'al-cs-3-3-c2' },
      { time: '5:45', seconds: 345, label: 'Karnaugh Maps (K-Maps): Gray Code, Wrap-Around Grouping & Minimisation', cardId: 'al-cs-3-3-c3' },
    ],
    cards: [
      {
        id: 'al-cs-3-3-c1',
        title: 'Half Adders, Full Adders & SR / JK Flip-Flops',
        summary: 'Half/Full Adders perform combinational binary addition inside the ALU, while SR and JK Flip-Flops are sequential memory elements storing 1 bit of state (building blocks of SRAM & registers).',
        diagram: 'logic-gates-truth',
        bullets: [
          '**Half Adder (2 inputs `A, B`)** — computes `Sum = A XOR B` and `Carry = A AND B`. Cannot accept a `Carry-In` from a previous column.',
          '**Full Adder (3 inputs `A, B, Cin`)** — links **two Half Adders + one `OR` gate**: `Sum = (A XOR B) XOR Cin` and `Cout = (A AND B) OR (Cin AND (A XOR B))`. Chaining `8` Full Adders creates an 8-bit ripple-carry ALU adder!',
          '**SR Flip-Flop (Set–Reset)** — sequential circuit with feedback storing 1 bit (`Q`): `S=1, R=0` sets `Q=1`; `S=0, R=1` resets `Q=0`; `S=0, R=0` holds previous state. **Flaw**: `S=1, R=1` enters an **invalid/unstable race state**.',
          '**JK Flip-Flop (Clocked)** — solves the SR invalid state! On a clock edge: `J=1, K=0` sets `Q=1`; `J=0, K=1` resets `Q=0`; `J=0, K=0` holds; **`J=1, K=1` cleanly TOGGLES `Q → NOT Q`**! Used in registers, counters, and SRAM.',
        ],
        subsections: [
          {
            heading: 'Combinational vs Sequential Logic',
            bullets: [
              '**Combinational** (Adders): output depends ONLY on current inputs. **Sequential** (Flip-Flops): output depends on current inputs **AND previous stored state** (via feedback + clock).',
            ],
            exampleHeading: 'Worked Full Adder check: `A = 1, B = 1, Cin = 1`',
            examples: [
              '`Sum = (1 XOR 1) XOR 1 = 0 XOR 1 = 1`; `Cout = (1 AND 1) OR (1 AND 0) = 1` → binary `11₂ = 3` ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'full adder', definition: 'Combinational circuit of two half adders and an OR gate adding A, B, and Carry-In to produce Sum and Carry-Out.' },
          { term: 'JK flip-flop', definition: 'Clocked 1-bit sequential memory circuit resolving SR instability by toggling Q whenever J = 1 and K = 1.' },
        ],
      },
      {
        id: 'al-cs-3-3-c2',
        title: 'Boolean Algebra Laws & De Morgan’s Laws',
        summary: 'Boolean algebra laws simplify complex gate expressions into cheaper, faster circuits with fewer logic gates and lower power consumption.',
        bullets: [
          '**Identity & Null** — `A + 0 = A`, `A · 1 = A`, `A + 1 = 1`, `A · 0 = 0`.',
          '**Idempotent & Complement** — `A + A = A`, `A · A = A`, `A + Ā = 1`, `A · Ā = 0`, `A̿ = A` (Double Negation).',
          '**Absorption & Distributive** — `A + (A · B) = A`, `A · (A + B) = A`, `A + (Ā · B) = A + B`, `A · (B + C) = A·B + A·C`.',
          '**De Morgan’s Laws ("Break the line, change the sign!")** — `NOT(A AND B) = (NOT A) OR (NOT B)` and `NOT(A OR B) = (NOT A) AND (NOT B)`.',
        ],
        subsections: [
          {
            heading: 'Worked Step-by-Step Algebraic Simplification',
            bullets: [
              '**Always state each law applied** when asked to simplify in CIE 9618 Paper 3!',
            ],
            exampleHeading: 'Worked example: Simplify `Ā·B + A·B + A·B̄`',
            examples: [
              'Group first two terms: `B·(Ā + A) + A·B̄ = B·1 + A·B̄ = B + A·B̄`.',
              'Apply Redundancy/Absorption law (`B + B̄·A = B + A`) → **`A + B`** (reduces 5 gates down to **1 OR gate**!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'De Morgan’s laws', definition: 'Equivalences transforming negated conjunctions/disjunctions: `NOT(A·B) = Ā + B̄` and `NOT(A+B) = Ā·B̄`.' },
        ],
      },
      {
        id: 'al-cs-3-3-c3',
        title: 'Karnaugh Maps (K-Maps) & Gray Code Grouping',
        summary: 'Karnaugh maps visually group adjacent `1`s in power-of-2 rectangles (`1, 2, 4, 8`) using Gray code ordering so changing variables cancel automatically.',
        bullets: [
          '**Gray Code ordering (`00, 01, 11, 10`)** — consecutive row/column labels MUST differ by **only 1 bit** so adjacent cells cancel one literal cleanly (note `11` comes BEFORE `10`!).',
          '**5 K-Map Grouping Rules** — (1) Group ONLY `1`s in rectangles of size **`1, 2, 4, or 8`** (powers of 2); (2) Make groups as **LARGE** as possible; (3) **Overlap** groups whenever it creates a larger power-of-2 block; (4) **Wrap around** top↔bottom and left↔right edges (cylinder/torus); (5) Every `1` must be covered using the **minimum number of groups**.',
          '**Reading simplified terms** — keep ONLY variables that stay **constant** across all cells in a group (`1` → `A`, `0` → `Ā`), discard any variable that takes both `0` and `1`, then OR all group terms together.',
        ],
        subsections: [
          {
            heading: 'Worked 3-Variable K-Map Reduction',
            bullets: [
              '**4-cell wrap group** covering columns `00` and `10` across both rows `A=0` and `A=1`: `A` changes (drop!), `B` changes (`0→1`, drop!), `C` stays `0` → simplifies all 4 minterms to just **`C̄`**!',
            ],
            exampleHeading: 'Worked check: Why larger K-Map groups mean fewer gates',
            examples: [
              'Group of `1` cell drops `0` vars; group of `2` drops `1` var; group of `4` drops `2` vars; group of `8` drops `3` vars (`X = 1`)!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Karnaugh map (K-Map)', definition: 'Gray-code grid visualising truth-table outputs to minimise Boolean expressions via power-of-2 rectangular groupings.' },
          { term: 'Gray code', definition: 'Binary ordering (`00, 01, 11, 10`) where adjacent entries differ in exactly one bit position.' },
        ],
        memoryAid: 'De Morgan: Break the Bar, Change the Sign! K-Map Headers: `00, 01, 11, 10` (Gray code!) + Group powers of 2 (`1, 2, 4, 8`) + Wrap edges!',
        commonMistake: 'Writing K-Map column headers in binary order `00, 01, 10, 11` instead of Gray code `00, 01, 11, 10` — adjacent cells `01` and `10` differ in 2 bits, breaking the entire K-Map cancellation!',
      },
    ],
    keyTerms: [
      { term: 'Half Adder & Full Adder', definition: 'Combinational ALU circuits computing Sum (`XOR`) and Carry (`AND`/`OR`) with or without Carry-In.' },
      { term: 'SR & JK Flip-Flops', definition: '1-bit sequential memory circuits; JK resolves SR’s invalid `1,1` state by toggling on clock edge.' },
      { term: 'De Morgan’s Laws', definition: 'Boolean identities `NOT(A·B) = Ā + B̄` and `NOT(A+B) = Ā·B̄`.' },
      { term: 'Karnaugh Map (K-Map)', definition: 'Gray-code truth grid simplifying Boolean logic via overlapping power-of-2 wrap-around groups.' },
    ],
    checklistPoints: [
      'Draw and trace Half Adders, Full Adders, SR Flip-Flops, and clocked JK Flip-Flops',
      'Simplify Boolean expressions using De Morgan’s, Absorption, and Distributive identities',
      'Construct 3- and 4-variable Gray-code Karnaugh Maps with wrap-around grouping to read minimal SOP expressions',
    ],
  },

  'al-cs-4-1': {
    subtopicId: 'al-cs-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'OS Memory Management (Paging, Segmentation, Virtual Memory) & CPU Scheduling',
    readingMinutes: 13,
    videoTitle: '14. OCR A Level (H046-H446) SLR4 - 1.2 Paging, segmentation and virtual memory',
    youtubeId: 'O4nwUqQodAg',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:30',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'OS Memory Management: Paging vs Segmentation & Page Tables', cardId: 'al-cs-4-1-c1' },
      { time: '2:55', seconds: 175, label: 'Virtual Memory, Page Faults, Replacement & Disk Thrashing', cardId: 'al-cs-4-1-c2' },
      { time: '5:45', seconds: 345, label: 'OS Process States (Ready/Running/Blocked) & CPU Scheduling Algorithms', cardId: 'al-cs-4-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-4-1-c1',
        title: 'Memory Management: Paging vs Segmentation',
        summary: 'Both paging and segmentation let programs occupy non-contiguous RAM blocks: paging uses uniform physical fixed-size pages, whereas segmentation uses variable-size logical program modules.',
        diagram: 'compiler-pipeline-os',
        bullets: [
          '**Paging** — divides physical RAM into **fixed-size page frames** (e.g. `4 KiB`) and programs into equal-size **pages** without considering code structure. A **Page Table** maps logical page numbers to physical frame numbers + presence/dirty bits. **Flaw**: minor **internal fragmentation** inside the final partially filled page.',
          '**Segmentation** — divides programs into **variable-size logical blocks** matching natural structure (main code, subroutines, data array, stack), tracked by a **Segment Table** (`base address + length/limit`). Makes sharing libraries & permissions cleaner, but causes **external fragmentation** (scattered free holes in RAM).',
        ],
        subsections: [
          {
            heading: 'Comparing Paging vs Segmentation in CIE 9618',
            bullets: [
              '**Paging**: fixed physical size · page table · internal fragmentation · simple swap-to-disk.',
              '**Segmentation**: variable logical size · segment map table · external fragmentation · logical protection.',
            ],
            exampleHeading: 'Worked page-size calculation: `14 KiB` program with `4 KiB` pages',
            examples: [
              'Requires `CEIL(14 ÷ 4) = 4 pages` (`16 KiB` allocated) → **`2 KiB` internal fragmentation** wasted inside Page 4.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'paging', definition: 'Memory management dividing RAM and processes into fixed-size physical blocks mapped via a page table.' },
          { term: 'segmentation', definition: 'Memory management splitting a process into variable-size logical modules matching program structure.' },
        ],
      },
      {
        id: 'al-cs-4-1-c2',
        title: 'Virtual Memory, Page Faults & Disk Thrashing',
        summary: 'Virtual memory maps secondary-storage swap pages onto logical addresses via the page table; accessing an unmapped page triggers a page fault interrupt, and excessive swapping causes disk thrashing.',
        bullets: [
          '**Page Fault sequence** — CPU accesses logical address → MMU checks **Page Table** → **Presence bit = `0`** (page is on SSD/HDD, not in RAM) → triggers **Page Fault interrupt** → OS chooses a victim page in RAM (using **FIFO** or **LRU — Least Recently Used**), writes it back if dirty, loads required page into the free frame, updates Page Table (`Presence = 1`), and restarts the instruction!',
          '**Disk Thrashing** — occurs when total active working sets far exceed physical RAM, forcing the OS to spend nearly 100% of CPU time continuously swapping pages to/from slow disk instead of executing useful work (solved by adding RAM or closing heavy apps).',
        ],
        subsections: [
          {
            heading: 'Page Replacement Policies (FIFO vs LRU)',
            bullets: [
              '**LRU (Least Recently Used)** evicts the page untouched for the longest time (better locality than FIFO, which can evict a heavily used early page!).',
            ],
            exampleHeading: 'Worked trace: Page Table lookup with `Presence = 0`',
            examples: [
              'Process requests `Page 5` → `PageTable[5].present == 0` → Page Fault → OS evicts LRU `Page 2` → loads `Page 5` into `Frame 3` → updates `PageTable[5] = {frame:3, present:1}`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'page fault', definition: 'Interrupt raised when a program accesses a memory page currently stored on disk rather than loaded in physical RAM.' },
          { term: 'disk thrashing', definition: 'Severe performance collapse caused by excessive continuous page swapping between full RAM and secondary storage.' },
        ],
      },
      {
        id: 'al-cs-4-1-c3',
        title: 'Process States (Ready / Running / Blocked) & CPU Scheduling',
        summary: 'The OS kernel schedules processes between Ready, Running, and Blocked states using preemptive or non-preemptive policies to maximise throughput and avoid starvation.',
        bullets: [
          '**3 Process States & Transitions** — **Ready** (waiting in scheduler queue for CPU), **Running** (actively executing on CPU core), **Blocked** (suspended waiting for slow I/O, disk read, or user input). Transitions: `Ready → Running` (dispatched), `Running → Ready` (time slice expired / higher-priority preemption), `Running → Blocked` (requests I/O), `Blocked → Ready` (I/O complete interrupt).',
          '**Process Control Block (PCB)** — OS data structure storing a process’s PID, current state, priority, saved registers/PC, memory page table pointer, and open file handles during a **context switch**.',
          '**Scheduling Algorithms** — **Round Robin** (fixed CPU time quantum per process — fair, prevents starvation), **First Come First Served (FCFS)** (simple FIFO, suffers convoy effect on short jobs), **Shortest Job First (SJF)** (minimises average wait time, risks starving long jobs), **Multi-Level Feedback Queues (MLFQ)** (dynamically demotes CPU-bound hogs while keeping interactive I/O jobs snappy).',
        ],
        subsections: [
          {
            heading: 'Why a Blocked Process NEVER Jumps Straight to Running',
            bullets: [
              '**Mandatory rule**: When I/O completes, a `Blocked` process ALWAYS returns to the **`Ready` queue** first until the scheduler dispatches it!',
            ],
            exampleHeading: 'Worked Round Robin trace (`quantum = 4 ms`) on `P1(7 ms), P2(3 ms)`',
            examples: [
              '`0–4 ms: P1` (3 ms left → Ready) → `4–7 ms: P2` (finishes!) → `7–10 ms: P1` (finishes!). Zero starvation!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Process Control Block (PCB)', definition: 'Kernel data structure preserving a process’s state, registers, PC, priority, and memory mappings during context switches.' },
          { term: 'starvation', definition: 'Scheduling flaw where a low-priority or long process waits indefinitely without ever receiving CPU time.' },
        ],
        memoryAid: 'Paging = Fixed physical frames · Segmentation = Variable logical blocks! Blocked → ALWAYS returns to READY (never directly to Running)!',
        commonMistake: 'Drawing an arrow directly from `Blocked` to `Running` on an OS state diagram — when I/O finishes, another process is currently on the CPU, so the woken process MUST enter the `Ready` queue first!',
      },
    ],
    keyTerms: [
      { term: 'Paging & Page Table', definition: 'Fixed-size RAM frame allocation mapping logical page numbers to physical frames + presence bits.' },
      { term: 'Segmentation', definition: 'Variable-size logical memory allocation matching code/data/stack program structure.' },
      { term: 'Page Fault & Disk Thrashing', definition: 'Interrupt triggered by accessing an unloaded page vs severe slowdown from constant disk swapping.' },
      { term: 'Process Control Block (PCB)', definition: 'Kernel record holding PID, state, saved registers, and priority for context switching.' },
      { term: 'Round Robin / MLFQ Scheduling', definition: 'Preemptive time-sliced scheduling preventing starvation and prioritising responsive I/O tasks.' },
    ],
    checklistPoints: [
      'Compare paging and segmentation across block size, logical structure, and internal vs external fragmentation',
      'Trace a complete Page Fault cycle including Page Table updates, LRU replacement, and thrashing causes',
      'Draw the Ready/Running/Blocked state machine and evaluate FCFS, SJF, Round Robin, and MLFQ scheduling',
    ],
  },

  'al-cs-4-2': {
    subtopicId: 'al-cs-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Compilation Stages, Two-Pass Assembly, Linkers/Loaders, BNF & Reverse Polish Notation',
    readingMinutes: 13,
    videoTitle: '24. OCR A Level (H046-H446) SLR5 - 1.2 Translators',
    youtubeId: 'g0vjHlO7n1Y',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:08',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 1 & 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: '4 Stages of Compilation, Two-Pass Assembly & Linkers/Loaders', cardId: 'al-cs-4-2-c1' },
      { time: '2:55', seconds: 175, label: 'Backus–Naur Form (BNF) & Syntax Diagrams', cardId: 'al-cs-4-2-c2' },
      { time: '5:40', seconds: 340, label: 'Reverse Polish Notation (RPN / Postfix) & Stack Evaluation', cardId: 'al-cs-4-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-4-2-c1',
        title: '4 Stages of Compilation, Two-Pass Assembler & Linkers/Loaders',
        summary: 'Compilers convert source code through Lexical Analysis, Syntax Analysis, Code Generation, and Optimisation; Assemblers resolve forward labels across two passes.',
        bullets: [
          '**1. Lexical Analysis** — strips comments & redundant whitespace, converts keywords/identifiers/literals into fixed-length **tokens**, and builds the **Symbol Table** (storing identifier names, types, scopes).',
          '**2. Syntax Analysis (Parsing)** — validates the token stream against formal language grammar rules (**BNF**), constructs a **Parse Tree / Abstract Syntax Tree (AST)**, performs **semantic/type checking**, and reports syntax errors.',
          '**3. Code Generation** — traverses the parse tree to emit equivalent target **object code** (machine code or intermediate bytecode).',
          '**4. Code Optimisation** — transforms generated code to execute **faster** and occupy **less RAM** (e.g. constant folding, removing dead unreachable code, hoisting loop invariants) without altering behaviour.',
          '**Two-Pass Assembler & Linker/Loader** — **Pass 1** removes comments and populates the **Symbol Table** with memory addresses of every symbolic label (resolving **forward references**); **Pass 2** translates mnemonics + symbol table addresses into final machine code. **Linker** merges object files + library modules; **Loader** copies the executable into RAM and sets `PC`.',
        ],
        subsections: [
          {
            heading: 'Why Assemblers Need Two Passes',
            bullets: [
              '**Forward branch problem**: `JMP DONE` may appear on line 5 before label `DONE:` is defined on line 20 — Pass 1 records `DONE → 20` so Pass 2 can encode the exact binary target address!',
            ],
            exampleHeading: 'Worked constant-folding optimisation',
            examples: [
              'Source `Seconds ← 60 * 60 * 24` is pre-evaluated at compile time to `Seconds ← 86400`, saving runtime multiplication cycles!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'lexical analysis', definition: 'First compiler stage removing comments/whitespace, generating tokens, and populating the symbol table.' },
          { term: 'symbol table', definition: 'Compiler/assembler lookup table recording identifiers, data types, scopes, and resolved memory addresses.' },
        ],
      },
      {
        id: 'al-cs-4-2-c2',
        title: 'Backus–Naur Form (BNF) & Syntax Diagrams',
        summary: 'BNF is a formal metalanguage defining valid programming-language syntax unambiguously using `<non-terminals>`, `::=` ("is defined as"), `|` ("OR"), and recursion.',
        bullets: [
          '**BNF Metasymbols** — `<angle brackets>` = **non-terminal** syntactic category; `::=` = *"is defined as"*; `|` = *"OR"*; bare characters (`+`, `0`, `A`) = **terminal symbols** that appear literally in valid strings.',
          '**Recursion in BNF** — allows arbitrary-length lists or identifiers cleanly: `<unsigned_int> ::= <digit> | <digit><unsigned_int>`.',
          '**Syntax Diagrams** — equivalent graphical railroad charts showing terminals in **circles/ovals** and non-terminals in **rectangles**, following directed arrows from entry to exit.',
        ],
        subsections: [
          {
            heading: 'Worked BNF Grammar Derivation',
            bullets: [
              '**Rule**: `<id> ::= <letter> | <letter><rest>` where `<rest> ::= <alphanum> | <alphanum><rest>` ensures identifiers start with a letter and can be any length.',
            ],
            exampleHeading: 'Worked check: Is `"A9B"` valid under `<code ::= <letter><digit><letter>`?',
            examples: [
              '`A` (`<letter>`) + `9` (`<digit>`) + `B` (`<letter>`) → **VALID**; `"9AB"` fails immediately on `<letter>`!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Backus–Naur Form (BNF)', definition: 'Formal recursive metalanguage (`::=`, `|`, `<non-terminal>`) specifying unambiguous programming language grammar rules.' },
        ],
      },
      {
        id: 'al-cs-4-2-c3',
        title: 'Reverse Polish Notation (RPN / Postfix) & Stack Evaluation',
        summary: 'RPN places operators AFTER their operands (`A B +`), eliminating brackets and operator-precedence ambiguity so compilers evaluate expressions cleanly using a single LIFO stack.',
        bullets: [
          '**Why compilers love RPN** — **zero brackets required**, **unambiguous left-to-right single-pass evaluation**, and maps 1-to-1 onto a **LIFO stack** machine!',
          '**Stack evaluation algorithm** — scan tokens left-to-right: (1) If **operand**, `PUSH` onto stack; (2) If **operator**, `POP` top two values (`y` then `x` — note order matters for `−` and `÷`!), compute `x op y`, and `PUSH` result back.',
          '**Infix → RPN conversion** — respect precedence (`^`, `* /`, `+ −`) and brackets: e.g. `(3 + 4) * (5 - 2)` → **`3 4 + 5 2 - *`**. Note: In-order traversal of a binary expression tree gives Infix; **Post-order traversal gives RPN**!',
        ],
        subsections: [
          {
            heading: 'Worked Stack Trace of RPN Expression',
            bullets: [
              '**Watch subtraction order!** — popping `2` (right operand) then `5` (left operand) computes **`5 − 2 = 3`** (NOT `2 − 5`!).',
            ],
            exampleHeading: 'Worked stack trace: Evaluate `6 2 3 + * 4 -`',
            examples: [
              'Push `6`, `2`, `3` → `+` pops `3,2`, pushes `5` (`[6, 5]`) → `*` pops `5,6`, pushes `30` (`[30]`) → push `4` (`[30, 4]`) → `-` pops `4,30`, pushes **`26`**!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Reverse Polish Notation (RPN)', definition: 'Postfix mathematical notation writing operators after their operands so expressions evaluate unambiguously via a stack without brackets.' },
        ],
        memoryAid: 'Compilation = L-S-C-O (Lexical → Syntax → Code Gen → Optimise). RPN = Post-Order Tree Traversal → Push Operands, Pop Two on Operator!',
        commonMistake: 'Reversing operand order during RPN stack subtraction/division — the FIRST item popped is the RIGHT operand (`b`) and the SECOND item popped is the LEFT operand (`a`), so compute `a − b`!',
      },
    ],
    keyTerms: [
      { term: 'Lexical & Syntax Analysis', definition: 'Tokenising source code/building Symbol Table vs grammar parsing into an Abstract Syntax Tree.' },
      { term: 'Two-Pass Assembler', definition: 'Pass 1 resolves forward label addresses into Symbol Table; Pass 2 outputs binary machine code.' },
      { term: 'Backus–Naur Form (BNF)', definition: 'Formal recursive grammar notation (`::=`, `|`, `<non-terminal>`) defining valid language syntax.' },
      { term: 'Reverse Polish Notation (RPN)', definition: 'Bracket-free postfix notation evaluated left-to-right using a LIFO stack.' },
    ],
    checklistPoints: [
      'Detail all four compiler stages, two-pass assembly, and linker/loader roles',
      'Write and validate recursive Backus–Naur Form (BNF) rules and equivalent syntax diagrams',
      'Convert between Infix and Reverse Polish Notation (RPN) and trace RPN evaluation on a stack',
    ],
  },
};

export const ALEVEL_CS_UNITS_3_4_QUIZZES: QuizQuestion[] = [
  // al-cs-3-1
  {
    id: 'al-cs-3-1-q1',
    subtopicId: 'al-cs-3-1',
    type: 'mcq',
    marks: 1,
    diagram: 'cpu-fde-architecture',
    prompt: 'Given `RAM[50] = 75`, `RAM[75] = 99`, and `[IX] = 25`, what value is loaded into `ACC` by the INDIRECT instruction `LDI 50`?',
    options: ['99', '75', '50', '25'],
    correctIndex: 0,
    explanation: 'Indirect addressing `LDI 50` reads pointer `RAM[50] = 75`, then fetches the contents of `RAM[75] = 99`.',
  },
  {
    id: 'al-cs-3-1-q2',
    subtopicId: 'al-cs-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the result of applying an ARITHMETIC right shift by 1 place to the 8-bit two’s-complement integer `11110100` (−12)?',
    options: ['11111010 (−6)', '01111010 (+122)', '11101000 (−24)', '00001010 (+10)'],
    correctIndex: 0,
    explanation: 'Arithmetic right shift preserves the sign bit (MSB = 1) on the left, dividing −12 by 2 cleanly to give 11111010 (−6).',
  },
  {
    id: 'al-cs-3-1-q3',
    subtopicId: 'al-cs-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the bitwise masking rules.',
    segments: ['Applying a bitwise ', ' mask with 0s clears targeted bits, while applying a bitwise ', ' mask with 1s toggles targeted bits (0↔1).'],
    wordBank: ['AND', 'XOR', 'OR', 'NOT'],
    answers: ['AND', 'XOR'],
    explanation: '`AND 0` clears bits, `OR 1` sets bits, and `XOR 1` toggles bits.',
  },
  {
    id: 'al-cs-3-1-q4',
    subtopicId: 'al-cs-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Cambridge 9618 Assembly opcode to its addressing mode.',
    pairs: [
      { left: 'LDM #12', right: 'Immediate addressing (loads literal 12)' },
      { left: 'LDX 200', right: 'Indexed addressing (loads from address 200 + [IX])' },
      { left: 'LDD 200', right: 'Direct addressing (loads contents of address 200)' },
    ],
    explanation: 'LDM = Immediate, LDD = Direct, LDI = Indirect, LDX = Indexed.',
  },
  {
    id: 'al-cs-3-1-q5',
    subtopicId: 'al-cs-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the role of the Index Register (`IX`) and Status Register (`SR`) in a CIE 9618 processor. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The Index Register stores a dynamic integer offset added to a base memory address during indexed addressing (e.g. stepping through arrays), while the Status Register holds ALU condition flags (Carry, Zero, Negative, Overflow) used for conditional branching.',
      markPoints: [
        { id: 'mp1', markDescription: 'IX stores offset added to base address for indexed addressing / arrays', requiredKeywordGroups: [['offset', 'indexed', 'array', 'base address']] },
        { id: 'mp2', markDescription: 'SR holds ALU flags (Zero, Carry, Negative, Overflow) for conditional jumps', requiredKeywordGroups: [['flag', 'carry', 'zero', 'overflow', 'negative', 'branch']] },
      ],
    },
    explanation: '`IX` simplifies indexed array iteration; `SR` stores ALU condition flags enabling conditional branches.',
  },

  // al-cs-3-2
  {
    id: 'al-cs-3-2-q1',
    subtopicId: 'al-cs-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Flynn’s Taxonomy architecture is best suited for a GPU applying an identical brightness adjustment simultaneously across millions of pixels?',
    options: ['SIMD (Single Instruction, Multiple Data)', 'SISD (Single Instruction, Single Data)', 'MISD (Multiple Instruction, Single Data)', 'Single-threaded CISC'],
    correctIndex: 0,
    explanation: 'SIMD runs one identical instruction across huge parallel arrays of data simultaneously.',
  },
  {
    id: 'al-cs-3-2-q2',
    subtopicId: 'al-cs-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is a RISC processor architecture generally easier to PIPELINE cleanly than CISC?',
    options: [
      'RISC instructions have fixed length and typically complete each stage in a single uniform clock cycle',
      'RISC processors execute zero branch instructions',
      'CISC instructions cannot access main memory',
      'RISC uses only 1 register',
    ],
    correctIndex: 0,
    explanation: 'Fixed instruction width and uniform single-cycle stages prevent uneven multi-cycle pipeline stalls.',
  },
  {
    id: 'al-cs-3-2-q3',
    subtopicId: 'al-cs-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Virtual Machine and pipelining concepts.',
    segments: ['When an interrupt or branch occurs, a CPU pipeline must ', ' prefetched instructions, while a hypervisor lets a Host OS run an isolated ', ' OS safely.'],
    wordBank: ['flush', 'Guest', 'compile', 'hash'],
    answers: ['flush', 'Guest'],
    explanation: 'Branches/interrupts invalidate prefetched pipeline stages (requiring a flush); a Host hypervisor runs isolated Guest OS VMs.',
  },
  {
    id: 'al-cs-3-2-q4',
    subtopicId: 'al-cs-3-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO genuine advantages of deploying Virtual Machines on enterprise servers.',
    options: [
      'Isolates malware testing and software crashes safely inside a sandboxed Guest OS',
      'Consolidates multiple different operating systems onto a single physical server',
      'Runs Guest OS programs faster than native bare-metal hardware',
      'Eliminates the need for physical RAM',
    ],
    correctIndices: [0, 1],
    explanation: 'VMs provide safe sandboxing and multi-OS server consolidation, though emulation adds slight performance/RAM overhead.',
  },
  {
    id: 'al-cs-3-2-q5',
    subtopicId: 'al-cs-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'State two hardware/architectural differences between RISC and CISC processors. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'RISC uses a small set of fixed-length single-cycle instructions with many general-purpose registers and hardwired control, whereas CISC uses a large set of variable-length multi-cycle instructions with microcode control.',
      markPoints: [
        { id: 'mp1', markDescription: 'Fixed-length 1-cycle RISC vs variable-length multi-cycle CISC instructions', requiredKeywordGroups: [['fixed', 'single', '1 cycle', 'small'], ['variable', 'multi', 'complex', 'large']] },
        { id: 'mp2', markDescription: 'More registers / hardwired / lower power / heavier compiler in RISC vs microcode in CISC', requiredKeywordGroups: [['register', 'hardwired', 'power', 'compiler', 'microcode', 'pipelin']] },
      ],
    },
    explanation: 'RISC favours fixed-length single-cycle instructions, many registers, and clean pipelining; CISC packs complex variable-length microcoded instructions.',
  },

  // al-cs-3-3
  {
    id: 'al-cs-3-3-q1',
    subtopicId: 'al-cs-3-3',
    type: 'mcq',
    marks: 1,
    diagram: 'logic-gates-truth',
    prompt: 'How does a clocked JK Flip-Flop resolve the invalid `S = 1, R = 1` state of an SR Flip-Flop?',
    options: [
      'When J = 1 and K = 1, output Q cleanly toggles (inverts its previous state) on the clock pulse',
      'It permanently forces Q = 0 forever',
      'It removes all feedback loops from the circuit',
      'It adds two 8-bit integers',
    ],
    correctIndex: 0,
    explanation: 'In a JK Flip-Flop, `J=1, K=1` cleanly toggles `Q → NOT Q` on the clock edge, eliminating the unstable SR race condition.',
  },
  {
    id: 'al-cs-3-3-q2',
    subtopicId: 'al-cs-3-3',
    type: 'mcq',
    marks: 1,
    prompt: 'According to De Morgan’s Law, what is `NOT (A AND (NOT B))` equivalent to?',
    options: ['(NOT A) OR B', '(NOT A) AND B', 'A OR (NOT B)', '(NOT A) OR (NOT B)'],
    correctIndex: 0,
    explanation: 'Break the negation across AND → OR and invert each operand: `NOT A OR NOT(NOT B) = (NOT A) OR B`.',
  },
  {
    id: 'al-cs-3-3-q3',
    subtopicId: 'al-cs-3-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Half Adder and Karnaugh Map rules.',
    segments: ['A Half Adder computes `Sum = A ', ' B` and `Carry = A AND B`, while K-Map rows/columns MUST be labelled in ', ' code (`00, 01, 11, 10`).'],
    wordBank: ['XOR', 'Gray', 'NOR', 'ASCII'],
    answers: ['XOR', 'Gray'],
    explanation: 'Half Adder Sum is `A XOR B`; K-Maps mandate Gray code so adjacent cells differ by strictly 1 bit.',
  },
  {
    id: 'al-cs-3-3-q4',
    subtopicId: 'al-cs-3-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each Boolean algebra expression to its simplified form.',
    pairs: [
      { left: 'A + (A · B)', right: 'A (Absorption law)' },
      { left: 'A + (Ā · B)', right: 'A + B (Redundancy law)' },
      { left: 'NOT(A + B)', right: 'Ā · B̄ (De Morgan’s law)' },
    ],
    explanation: 'Memorise Absorption, Redundancy, and De Morgan’s identities for fast Paper 3 algebraic proofs.',
  },
  {
    id: 'al-cs-3-3-q5',
    subtopicId: 'al-cs-3-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how a Full Adder differs structurally and functionally from a Half Adder. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A Full Adder accepts a third Carry-In input alongside A and B (unlike a Half Adder which only adds two bits), built from two Half Adders joined by an OR gate so multiple Full Adders can chain into multi-bit binary adders.',
      markPoints: [
        { id: 'mp1', markDescription: 'Full Adder accepts Carry-In (3 inputs) whereas Half Adder only takes 2 inputs', requiredKeywordGroups: [['carry-in', 'carry in', 'cin', 'three input', '3 input']] },
        { id: 'mp2', markDescription: 'Constructed from two Half Adders + one OR gate (enables multi-bit chaining)', requiredKeywordGroups: [['two half adder', '2 half adder', 'or gate', 'chain', 'multi-bit']] },
      ],
    },
    explanation: 'Full Adders combine two Half Adders + an OR gate to handle Carry-In, enabling multi-bit ALU addition.',
  },

  // al-cs-4-1
  {
    id: 'al-cs-4-1-q1',
    subtopicId: 'al-cs-4-1',
    type: 'mcq',
    marks: 1,
    diagram: 'compiler-pipeline-os',
    prompt: 'When a Blocked process finishes waiting for a disk read I/O interrupt, which OS process state does it transition into NEXT?',
    options: ['Ready', 'Running immediately', 'Terminated', 'Swapped permanently'],
    correctIndex: 0,
    explanation: 'A process waking from Blocked ALWAYS enters the Ready queue until the CPU scheduler dispatches it to Running.',
  },
  {
    id: 'al-cs-4-1-q2',
    subtopicId: 'al-cs-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the fundamental distinction between PAGING and SEGMENTATION in OS memory management?',
    options: [
      'Paging divides RAM into equal fixed-size physical blocks, whereas segmentation uses variable-size logical program modules',
      'Segmentation uses fixed 4 KiB blocks, whereas paging uses variable modules',
      'Paging prevents all internal fragmentation, whereas segmentation has zero external fragmentation',
      'Segmentation does not require any mapping table',
    ],
    correctIndex: 0,
    explanation: 'Paging = fixed physical chunks (internal fragmentation); Segmentation = variable logical chunks (external fragmentation).',
  },
  {
    id: 'al-cs-4-1-q3',
    subtopicId: 'al-cs-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the virtual memory diagnosis.',
    segments: ['Accessing a page whose Page Table presence bit is 0 triggers a ', ', and excessive continuous swapping between full RAM and disk causes ', '.'],
    wordBank: ['page fault', 'disk thrashing', 'deadlock', 'pipelining'],
    answers: ['page fault', 'disk thrashing'],
    explanation: 'Unloaded pages raise a page fault interrupt; relentless swapping collapses throughput via disk thrashing.',
  },
  {
    id: 'al-cs-4-1-q4',
    subtopicId: 'al-cs-4-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each CPU scheduling algorithm to its key property.',
    pairs: [
      { left: 'Round Robin', right: 'Preemptive fixed time quantum giving fair CPU turns with no starvation' },
      { left: 'Shortest Job First (SJF)', right: 'Minimises average wait time but can starve long processes' },
      { left: 'Process Control Block (PCB)', right: 'Stores saved registers, PID, priority, and state during context switch' },
    ],
    explanation: 'Know the strengths and starvation risks of each OS scheduler and the role of the PCB.',
  },
  {
    id: 'al-cs-4-1-q5',
    subtopicId: 'al-cs-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why a Least Recently Used (LRU) page replacement policy usually causes fewer page faults than First-In First-Out (FIFO). [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'LRU evicts the page that has gone unused for the longest time (preserving frequently accessed active pages), whereas FIFO blindly evicts the oldest loaded page even if the program still uses it constantly.',
      markPoints: [
        { id: 'mp1', markDescription: 'LRU evicts the page untouched longest / keeps actively used pages in RAM', requiredKeywordGroups: [['unused', 'longest', 'recently', 'active', 'frequent']] },
        { id: 'mp2', markDescription: 'FIFO may evict an old but still heavily used page', requiredKeywordGroups: [['oldest', 'fifo', 'still used', 'heavily used', 'blindly']] },
      ],
    },
    explanation: 'LRU exploits temporal locality by keeping frequently referenced pages resident in RAM.',
  },

  // al-cs-4-2
  {
    id: 'al-cs-4-2-q1',
    subtopicId: 'al-cs-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Evaluate the Reverse Polish Notation (RPN) expression `8 3 - 4 2 + *` using a stack.',
    options: ['30', '18', '26', '−30'],
    correctIndex: 0,
    explanation: '`8 3 -` = `5`; `4 2 +` = `6`; `5 6 *` = `30`.',
  },
  {
    id: 'al-cs-4-2-q2',
    subtopicId: 'al-cs-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which compiler stage removes comments and whitespace, produces fixed-length tokens, and populates the Symbol Table?',
    options: ['Lexical analysis', 'Syntax analysis', 'Code generation', 'Code optimisation'],
    correctIndex: 0,
    explanation: 'Lexical analysis tokenises the raw character stream and builds the initial Symbol Table.',
  },
  {
    id: 'al-cs-4-2-q3',
    subtopicId: 'al-cs-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the formal grammar and RPN rules.',
    segments: ['In Backus–Naur Form (BNF), `|` means ', ' and `<name>` denotes a non-terminal, while Reverse Polish Notation requires zero ', ' during stack evaluation.'],
    wordBank: ['OR', 'brackets', 'AND', 'registers'],
    answers: ['OR', 'brackets'],
    explanation: 'BNF `|` denotes alternative choices (OR); RPN encodes precedence directly by position so no brackets are needed.',
  },
  {
    id: 'al-cs-4-2-q4',
    subtopicId: 'al-cs-4-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each translation tool to its exact task.',
    pairs: [
      { left: 'Pass 1 of Two-Pass Assembler', right: 'Builds Symbol Table recording forward label addresses' },
      { left: 'Linker', right: 'Combines compiled object files with pre-compiled library routines' },
      { left: 'Code Optimiser', right: 'Makes object code faster/smaller without changing output semantics' },
    ],
    explanation: 'Two-pass assembly solves forward references; linkers merge libraries; optimisers refine speed and memory.',
  },
  {
    id: 'al-cs-4-2-q5',
    subtopicId: 'al-cs-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Convert the infix expression `(A + B) * (C - D)` into Reverse Polish Notation (RPN) and explain one advantage of RPN for compilers. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'RPN is `A B + C D - *`. Compilers favour RPN because it requires no brackets or precedence rules and evaluates unambiguously left-to-right in a single pass using a LIFO stack.',
      markPoints: [
        { id: 'mp1', markDescription: 'Correct RPN `A B + C D - *`', requiredKeywordGroups: [['a b + c d - *', 'ab+cd-*']] },
        { id: 'mp2', markDescription: 'No brackets / unambiguous / single-pass stack evaluation', requiredKeywordGroups: [['no bracket', 'without bracket', 'unambiguous', 'stack', 'precedence']] },
      ],
    },
    explanation: '`A B + C D - *` removes all parentheses and evaluates directly via push/pop on a stack.',
  },
];

export const ALEVEL_CS_UNITS_3_4_FLASHCARDS: FlashcardItem[] = [
  // al-cs-3-1
  { id: 'al-cs-3-1-fc1', subtopicId: 'al-cs-3-1', front: 'Write the 4 Register Transfer Notation (RTN) lines for the Fetch cycle.', backBullets: ['`MAR ← [PC]` · `PC ← [PC] + 1`', '`MDR ← [[MAR]]` · `CIR ← [MDR]` (double brackets = RAM contents at MAR!).'] },
  { id: 'al-cs-3-1-fc2', subtopicId: 'al-cs-3-1', front: 'State the 5 Cambridge 9618 Assembly addressing modes.', backBullets: ['Immediate (`LDM #n`: literal), Direct (`LDD addr`), Indirect (`LDI ptr`: `[[ptr]]`).', 'Indexed (`LDX base`: `[base + [IX]]`), Relative (`[PC] + offset`).'] },
  { id: 'al-cs-3-1-fc3', subtopicId: 'al-cs-3-1', front: 'What are the exact purposes of bitwise `AND`, `OR`, and `XOR` masks?', backBullets: ['`AND` with `0`s clears/isolates bits; `OR` with `1`s sets bits ON.', '`XOR` with `1`s toggles/inverts targeted bits (`0↔1`).'] },
  { id: 'al-cs-3-1-fc4', subtopicId: 'al-cs-3-1', front: 'Contrast Logical, Arithmetic, and Cyclic right shifts.', backBullets: ['Logical inserts `0` on left; Arithmetic copies the MSB sign bit to keep negatives negative.', 'Cyclic wraps the LSB around directly into the MSB with zero bit loss.'] },
  { id: 'al-cs-3-1-fc5', subtopicId: 'al-cs-3-1', front: 'What flags are stored inside the CPU Status Register (`SR`)?', backBullets: ['Zero (`Z`), Carry (`C`), Negative (`N`), and Overflow (`V`).', 'Tested by conditional jump instructions (`JPE`, `JPN`).'] },

  // al-cs-3-2
  { id: 'al-cs-3-2-fc1', subtopicId: 'al-cs-3-2', front: 'Compare RISC and CISC processor architectures.', backBullets: ['RISC: small fixed-length 1-cycle set, many registers, hardwired CU, clean pipelining, low power.', 'CISC: large variable-length multi-cycle set, microcode CU, smaller code size, simpler compiler.'] },
  { id: 'al-cs-3-2-fc2', subtopicId: 'al-cs-3-2', front: 'How does Instruction Pipelining increase CPU throughput, and what causes a flush?', backBullets: ['Overlaps Fetch, Decode, and Execute of consecutive instructions (approaches 1 instruction/cycle).', 'Conditional branches or interrupts invalidate prefetched stages, forcing a pipeline flush.'] },
  { id: 'al-cs-3-2-fc3', subtopicId: 'al-cs-3-2', front: 'Define all 4 categories of Flynn’s Taxonomy.', backBullets: ['SISD (single-core PC), SIMD (GPU vector processing), MISD (fault-tolerant spacecraft).', 'MIMD (multi-core CPUs & distributed supercomputer clusters).'] },
  { id: 'al-cs-3-2-fc4', subtopicId: 'al-cs-3-2', front: 'Explain the Host OS / Hypervisor / Guest OS relationship in a Virtual Machine.', backBullets: ['Host OS / Hypervisor virtualises CPU, RAM, and I/O into isolated Guest OS sandboxes.', 'Intercepts guest privileged instructions and translates them onto physical host hardware.'] },
  { id: 'al-cs-3-2-fc5', subtopicId: 'al-cs-3-2', front: 'Give 2 benefits and 2 drawbacks of Virtual Machines.', backBullets: ['Pros: safe malware sandboxing, multi-OS server consolidation, running legacy OSes.', 'Cons: slower than bare-metal native execution, high RAM/disk overhead per guest.'] },

  // al-cs-3-3
  { id: 'al-cs-3-3-fc1', subtopicId: 'al-cs-3-3', front: 'State the logic equations for a Half Adder and a Full Adder.', backBullets: ['Half Adder: `Sum = A XOR B`, `Carry = A AND B`.', 'Full Adder (2 Half Adders + OR): `Sum = (A XOR B) XOR Cin`, `Cout = (A·B) + Cin·(A XOR B)`.'] },
  { id: 'al-cs-3-3-fc2', subtopicId: 'al-cs-3-3', front: 'Why is a JK Flip-Flop superior to an SR Flip-Flop?', backBullets: ['SR Flip-Flop enters an invalid unstable race state when `S=1, R=1`.', 'Clocked JK Flip-Flop cleanly toggles `Q → NOT Q` when `J=1, K=1`.'] },
  { id: 'al-cs-3-3-fc3', subtopicId: 'al-cs-3-3', front: 'State both of De Morgan’s Laws.', backBullets: ['`NOT(A AND B) = (NOT A) OR (NOT B)` (`(A·B)̄ = Ā + B̄`).', '`NOT(A OR B) = (NOT A) AND (NOT B)` (`(A+B)̄ = Ā · B̄`).'] },
  { id: 'al-cs-3-3-fc4', subtopicId: 'al-cs-3-3', front: 'State the key Boolean Absorption and Redundancy laws.', backBullets: ['Absorption: `A + A·B = A` and `A·(A + B) = A`.', 'Redundancy: `A + Ā·B = A + B`.'] },
  { id: 'al-cs-3-3-fc5', subtopicId: 'al-cs-3-3', front: 'List the 4 golden rules for simplifying with a Karnaugh Map (K-Map).', backBullets: ['Label headers in Gray code (`00, 01, 11, 10`); group ONLY `1`s in power-of-2 rectangles (`1, 2, 4, 8`).', 'Make groups as large as possible, overlap freely, and wrap top↔bottom & left↔right edges!'] },

  // al-cs-4-1
  { id: 'al-cs-4-1-fc1', subtopicId: 'al-cs-4-1', front: 'Contrast Paging and Segmentation in OS memory management.', backBullets: ['Paging: fixed-size physical page frames, Page Table, suffers minor internal fragmentation.', 'Segmentation: variable-size logical program blocks, Segment Table, suffers external fragmentation.'] },
  { id: 'al-cs-4-1-fc2', subtopicId: 'al-cs-4-1', front: 'Trace what the OS does when a Page Fault occurs.', backBullets: ['Presence bit = 0 triggers interrupt → OS selects victim frame (e.g. LRU) and saves if dirty.', 'Loads missing page from disk into RAM frame → sets Presence = 1 → restarts instruction.'] },
  { id: 'al-cs-4-1-fc3', subtopicId: 'al-cs-4-1', front: 'What is Disk Thrashing and how is it fixed?', backBullets: ['Constant continuous page swapping when active apps exceed physical RAM, freezing throughput.', 'Fixed by installing more physical RAM or closing memory-hungry processes.'] },
  { id: 'al-cs-4-1-fc4', subtopicId: 'al-cs-4-1', front: 'List all valid transitions between Ready, Running, and Blocked process states.', backBullets: ['`Ready → Running` (dispatch), `Running → Ready` (time slice/preempt), `Running → Blocked` (I/O wait).', '`Blocked → Ready` (I/O complete — NEVER directly to Running!).'] },
  { id: 'al-cs-4-1-fc5', subtopicId: 'al-cs-4-1', front: 'Compare Round Robin, SJF, FCFS, and MLFQ CPU schedulers.', backBullets: ['Round Robin: fair time slices, zero starvation. FCFS: simple FIFO, convoy delays.', 'SJF: minimum average wait, can starve long jobs. MLFQ: dynamic priority queues favouring interactive I/O.'] },

  // al-cs-4-2
  { id: 'al-cs-4-2-fc1', subtopicId: 'al-cs-4-2', front: 'List the 4 stages of compilation in exact order.', backBullets: ['1. Lexical Analysis (tokens + Symbol Table) → 2. Syntax Analysis (BNF Parse Tree + type check).', '3. Code Generation (machine/object code) → 4. Code Optimisation (faster & smaller).'] },
  { id: 'al-cs-4-2-fc2', subtopicId: 'al-cs-4-2', front: 'Why does an Assembler perform two passes?', backBullets: ['Pass 1 strips comments and populates the Symbol Table with addresses of all labels (resolving forward jumps).', 'Pass 2 translates opcodes and replaces every symbolic label with its exact binary address.'] },
  { id: 'al-cs-4-2-fc3', subtopicId: 'al-cs-4-2', front: 'Contrast a Linker and a Loader.', backBullets: ['Linker combines compiled object modules with pre-compiled library routines into one executable.', 'Loader copies the executable into main RAM, resolves base addresses, and sets `PC` to start.'] },
  { id: 'al-cs-4-2-fc4', subtopicId: 'al-cs-4-2', front: 'Explain the BNF metasymbols `<...>`, `::=`, `|`, and recursion.', backBullets: ['`<...>` = non-terminal; `::=` = "is defined as"; `|` = "OR"; bare text = terminal.', 'Recursion (`<num> ::= <d> | <d><num>`) defines variable-length syntax cleanly.'] },
  { id: 'al-cs-4-2-fc5', subtopicId: 'al-cs-4-2', front: 'How does a compiler evaluate Reverse Polish Notation (RPN) using a stack?', backBullets: ['Scan left-to-right: PUSH operands; on operator, POP right operand `b` then left operand `a`.', 'Compute `a op b` and PUSH result back; final remaining stack item is the answer.'] },
];

export const ALEVEL_CS_UNITS_3_4_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'al-cs-ex-3-1',
    subtopicId: 'al-cs-3-1',
    number: 6,
    stimulus: 'Cambridge International AS 9618 Paper 1: A processor executes assembly instructions with `[IX] = 3` and memory contents `RAM[200] = 203`, `RAM[203] = 42`. An 8-bit hardware register holds `10101101`.',
    diagram: 'cpu-fde-architecture',
    parts: [
      {
        id: 'al-cs-ex-3-1-a',
        label: '(a)',
        prompt: 'State the value loaded into `ACC` by `LDD 200` and `LDX 200`, and write the 8-bit `AND` mask required to isolate only the lower 4 bits of `10101101`. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'LDD 200 (direct) loads 203; LDX 200 (indexed: 200 + 3 = 203) loads 42. Using AND mask 00001111 isolates the lower 4 bits giving 00001101.',
          markPoints: [
            { id: 'mp1', markDescription: 'LDD 200 = 203', requiredKeywordGroups: [['203']] },
            { id: 'mp2', markDescription: 'LDX 200 = 42', requiredKeywordGroups: [['42']] },
            { id: 'mp3', markDescription: 'AND mask 00001111 (yielding 00001101)', requiredKeywordGroups: [['00001111']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-3-2',
    subtopicId: 'al-cs-3-2',
    number: 7,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A mobile chipmaker adopts a pipelined multi-core ARM RISC processor instead of a single-core CISC CPU.',
    parts: [
      {
        id: 'al-cs-ex-3-2-a',
        label: '(a)',
        prompt: 'Explain how pipelining increases throughput on a RISC processor and state what happens to the pipeline when an interrupt occurs. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Pipelining overlaps Fetch, Decode, and Execute of consecutive fixed-length single-cycle instructions so up to one instruction completes every clock cycle. When an interrupt arrives, prefetched instructions in the pipeline must be flushed/discarded before jumping to the ISR.',
          markPoints: [
            { id: 'mp1', markDescription: 'Overlaps Fetch, Decode, and Execute stages of consecutive instructions', requiredKeywordGroups: [['overlap', 'concurren', 'simultaneous'], ['fetch', 'decode', 'execute']] },
            { id: 'mp2', markDescription: 'Approaches 1 instruction completed per clock cycle (aided by fixed RISC cycles)', requiredKeywordGroups: [['per clock', 'throughput', 'faster', 'fixed']] },
            { id: 'mp3', markDescription: 'Pipeline must be flushed/cleared when an interrupt/branch occurs', requiredKeywordGroups: [['flush', 'discard', 'clear']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-3-3',
    subtopicId: 'al-cs-3-3',
    number: 8,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A digital circuit implements `X = NOT((NOT A) AND (NOT B)) + (A AND B)`.',
    diagram: 'logic-gates-truth',
    parts: [
      {
        id: 'al-cs-ex-3-3-a',
        label: '(a)',
        prompt: 'Apply De Morgan’s Law and Boolean absorption identities step-by-step to simplify `X` to its minimal form. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'By De Morgan’s Law, NOT((NOT A) AND (NOT B)) = A OR B. Substituting gives X = A + B + A·B. Applying Absorption (A + A·B = A) simplifies X to `A + B` (A OR B).',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies De Morgan’s Law to obtain A + B (A OR B)', requiredKeywordGroups: [['de morgan'], ['a + b', 'a or b']] },
            { id: 'mp2', markDescription: 'Applies Absorption law (A + A·B = A)', requiredKeywordGroups: [['absorption', 'a + b +']] },
            { id: 'mp3', markDescription: 'Final minimal form A + B (A OR B)', requiredKeywordGroups: [['a + b', 'a or b']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-4-1',
    subtopicId: 'al-cs-4-1',
    number: 9,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A server running 12 virtual machines suddenly slows to a crawl with constant SSD activity while RAM sits at 100% utilisation.',
    diagram: 'compiler-pipeline-os',
    parts: [
      {
        id: 'al-cs-ex-4-1-a',
        label: '(a)',
        prompt: 'Name this OS phenomenon, explain how Page Faults cause it under virtual memory paging, and state how the OS updates the Page Table when loading a missing page. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'This is disk thrashing. Because RAM is full, processes trigger constant page faults (presence bit = 0) forcing the OS to continuously evict pages and swap required pages between slow SSD and RAM. Upon loading a missing page into a RAM frame, the OS updates the Page Table with the new physical frame number and sets its presence bit to 1.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies disk thrashing', requiredKeywordGroups: [['thrashing']] },
            { id: 'mp2', markDescription: 'Constant page faults causing continuous swapping between RAM and disk', requiredKeywordGroups: [['page fault'], ['swap', 'evict', 'ssd', 'disk']] },
            { id: 'mp3', markDescription: 'Updates Page Table with physical frame number', requiredKeywordGroups: [['page table'], ['frame']] },
            { id: 'mp4', markDescription: 'Sets presence bit to 1', requiredKeywordGroups: [['presence', 'present'], ['1']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-4-2',
    subtopicId: 'al-cs-4-2',
    number: 10,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A compiler front end checks variable names via BNF and translates arithmetic expressions into Reverse Polish Notation (RPN).',
    parts: [
      {
        id: 'al-cs-ex-4-2-a',
        label: '(a)',
        prompt: 'Trace the stack contents step-by-step to evaluate the RPN expression `9 4 - 2 3 + *` and state the final numeric answer. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Push 9, push 4 → operator `-` pops 4 and 9, computes 9 − 4 = 5, pushes 5. Push 2, push 3 → operator `+` pops 3 and 2, computes 2 + 3 = 5, pushes 5. Operator `*` pops 5 and 5, computes 5 × 5 = 25.',
          markPoints: [
            { id: 'mp1', markDescription: 'Correct intermediate `9 − 4 = 5` on stack', requiredKeywordGroups: [['9', '4', '5']] },
            { id: 'mp2', markDescription: 'Correct intermediate `2 + 3 = 5` on stack', requiredKeywordGroups: [['2', '3', '5']] },
            { id: 'mp3', markDescription: 'Final evaluated result = 25', numericMatch: { value: 25, tolerance: 0.01 } },
          ],
        },
      },
    ],
  },
];
