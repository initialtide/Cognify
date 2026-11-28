import {
  ExamQuestionItem,
  FlashcardItem,
  NoteLesson,
  QuizQuestion,
  TopicDefinition,
} from '../../../types/curriculum';

export const ALEVEL_CS_UNITS_7_8_TOPICS: TopicDefinition[] = [
  {
    number: 7,
    title: 'Abstract Data Types (ADTs), Searching & Sorting (A2 Paper 3 & 4)',
    subtopics: [
      {
        id: 'al-cs-7-1',
        code: '7.1',
        slug: '7.1-stacks-circular-queues-linked-lists',
        title: 'Stacks (LIFO), Circular Queues (FIFO) & Linked Lists (Pointers & Free-List)',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-7-2',
        code: '7.2',
        slug: '7.2-binary-trees-traversals-hash-tables-dictionaries',
        title: 'Binary Search Trees (Pre/In/Post-Order), Hash Tables (Collisions) & Dictionaries',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-7-3',
        code: '7.3',
        slug: '7.3-binary-search-bubble-insertion-merge-sort',
        title: 'Searching & Sorting: Linear vs Binary Search, Bubble, Insertion & Merge Sort',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 8,
    title: 'Programming Paradigms, Recursion & Artificial Intelligence (A2 Paper 3 & 4)',
    subtopics: [
      {
        id: 'al-cs-8-1',
        code: '8.1',
        slug: '8.1-oop-encapsulation-inheritance-polymorphism-files-exceptions',
        title: 'Object-Oriented Programming (OOP), Serial/Random Files & Exception Handling',
        readingMinutes: 13,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-8-2',
        code: '8.2',
        slug: '8.2-recursion-base-case-call-stack-winding-unwinding',
        title: 'Recursion: Base/General Cases, Call Stack Frames & Winding/Unwinding Traces',
        readingMinutes: 12,
        hasDeepContent: true,
      },
      {
        id: 'al-cs-8-3',
        code: '8.3',
        slug: '8.3-graphs-dijkstra-a-star-neural-networks-machine-learning',
        title: 'Graphs, Dijkstra’s Shortest Path, A* Heuristic, Neural Networks & Machine Learning',
        readingMinutes: 13,
        hasDeepContent: true,
      },
    ],
  },
];

export const ALEVEL_CS_UNITS_7_8_NOTES: Record<string, NoteLesson> = {
  'al-cs-7-1': {
    subtopicId: 'al-cs-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Stacks (LIFO), Circular Queues (FIFO) & Linked Lists (Pointers & Free-List)',
    readingMinutes: 13,
    videoTitle: '89. OCR A Level (H046-H446) SLR14 - 1.4 Data structures part 3 - Stacks & queues',
    youtubeId: '_7_jYMk_R9k',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:22',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3 & 4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Abstract Data Types & LIFO Stack Operations (Push/Pop/Overflow/Underflow)', cardId: 'al-cs-7-1-c1' },
      { time: '2:50', seconds: 170, label: 'Linear vs Circular Queues (FIFO) & Modulo Wrap-Around', cardId: 'al-cs-7-1-c2' },
      { time: '5:40', seconds: 340, label: 'Linked Lists (Data + NextPointer, StartPointer & FreeListPointer)', cardId: 'al-cs-7-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-7-1-c1',
        title: 'Stacks (LIFO) & Array Implementation',
        summary: 'An Abstract Data Type (ADT) defines data and valid operations independent of storage; a Stack obeys Last-In, First-Out (`LIFO`) via a single `TopPointer` in `O(1)` time.',
        diagram: 'adt-structures',
        bullets: [
          '**`Push(Item)`** — check `TopPointer = MaxSize` (if full → **Stack Overflow**); otherwise increment `TopPointer ← TopPointer + 1` and assign `Stack[TopPointer] ← Item`.',
          '**`Pop()`** — check `TopPointer = 0` (or `−1`, if empty → **Stack Underflow**); otherwise save `Val ← Stack[TopPointer]`, decrement `TopPointer ← TopPointer - 1`, and `RETURN Val`.',
          '**Real CS uses** — subroutine **call stack** (saving return addresses & local parameters during recursion), **undo/redo history**, browser Back button, and **RPN expression evaluation**.',
        ],
        subsections: [
          {
            heading: 'Static vs Dynamic ADT Implementation',
            bullets: [
              '**Static (array-backed)**: fixed size (zero pointer overhead, wastes unused slots, can overflow); **Dynamic (heap nodes)**: grows/shrinks on demand via pointers.',
            ],
            exampleHeading: 'Worked Stack trace: `Push(10), Push(25), Pop(), Push(40)`',
            examples: [
              '`[10]` → `[10, 25]` → `Pop()` returns `25` (`[10]`) → `[10, 40]` with `TopPointer = 2`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Abstract Data Type (ADT)', definition: 'Collection of data together with a well-defined set of operations specified independently of underlying implementation.' },
          { term: 'stack (LIFO)', definition: 'Last-In, First-Out linear ADT adding and removing items strictly at the TopPointer in O(1) time.' },
        ],
      },
      {
        id: 'al-cs-7-1-c2',
        title: 'Circular Queues (FIFO) & Preventing False-Full Waste',
        summary: 'Queues obey First-In, First-Out (`FIFO`) using `HeadPointer` (dequeue) and `TailPointer` (enqueue); circular wrap-around reuses freed front slots cleanly via modulo arithmetic.',
        bullets: [
          '**Why Linear Queues waste RAM** — dequeuing advances `HeadPointer`, leaving empty unusable slots at the front even when `TailPointer` hits the array boundary!',
          '**Circular Queue (`NumberOfItems` counter)** — **`Enqueue(Item)`**: if `NumberOfItems = MaxSize` → Queue Full; else `TailPointer ← (TailPointer + 1) MOD MaxSize`, `Queue[TailPointer] ← Item`, `NumberOfItems ← NumberOfItems + 1`. **`Dequeue()`**: if `NumberOfItems = 0` → Queue Empty; else return `Queue[HeadPointer]`, `HeadPointer ← (HeadPointer + 1) MOD MaxSize`, `NumberOfItems ← NumberOfItems - 1`.',
          '**Real CS uses** — OS **Ready process queue**, **printer spooler**, **keyboard input buffers**, and **Breadth-First Search (BFS)** graph traversal.',
        ],
        subsections: [
          {
            heading: 'Worked Circular Wrap-Around Trace (`MaxSize = 5`, 0-indexed)',
            bullets: [
              '**Modulo wrap** — when `TailPointer = 4`, `(4 + 1) MOD 5 = 0` seamlessly reuses slot `0`!',
            ],
            exampleHeading: 'Worked example: `Head=2, Tail=4, Count=3`, `Enqueue("X")`',
            examples: [
              '`Tail ← (4 + 1) MOD 5 = 0`; `Queue[0] ← "X"`; `Count ← 4` (no shifting of elements — strictly **`O(1)`**!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'circular queue', definition: 'FIFO queue wrapping TailPointer and HeadPointer around array bounds with `MOD` to reuse dequeued slots in O(1) time.' },
        ],
      },
      {
        id: 'al-cs-7-1-c3',
        title: 'Linked Lists (Array-of-Nodes & Free-List Pointer Management)',
        summary: 'CIE 9618 implements linked lists using parallel arrays or `Node` records (`Data`, `Pointer`) tracked by `StartPointer` (list head) and `FreeListPointer` (next unused node), enabling `O(1)` pointer insertion/deletion.',
        bullets: [
          '**Node structure** — each node holds `Data` + `NextNode` integer pointer (`−1` = Null pointer marking end of list).',
          '**Inserting into an Ordered Linked List (4 exact pointer steps!)** — (1) Take `NewNode ← FreeListPointer` and advance `FreeListPointer ← List[NewNode].NextNode` (guarding `FreeListPointer = -1` full!); (2) Store `List[NewNode].Data ← Item`; (3) Walk from `StartPointer` tracking `Prev` and `Curr` until `List[Curr].Data > Item` or `Curr = -1`; (4) Link `List[NewNode].NextNode ← Curr` and either `StartPointer ← NewNode` (if inserting at front) or `List[Prev].NextNode ← NewNode`.',
          '**Deleting a Node** — bypass the deleted node (`List[Prev].NextNode ← List[Curr].NextNode`) and **return it to the Free List** (`List[Curr].NextNode ← FreeListPointer; FreeListPointer ← Curr`) so zero memory leaks!',
        ],
        subsections: [
          {
            heading: 'Linked List vs Static Array Trade-Off',
            bullets: [
              '**Insert/Delete middle**: Linked List only rewires 2 pointers (`O(1)` after locating spot) vs shifting `n` items in an array (`O(n)`). **Random index access**: Array is `O(1)` vs Linked List sequential `O(n)` walk!',
            ],
            exampleHeading: 'Worked deletion trace: Deleting `25` between `12 (idx 0)` and `39 (idx 2)`',
            examples: [
              '`Node[0].Next` changes from `1` → `2` (bypassing `25` at idx 1); `Node[1].Next ← FreeListPointer`; `FreeListPointer ← 1` ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'free-list pointer', definition: 'Pointer tracking the head of chained unused nodes in an array-backed linked list or binary tree so deleted nodes are recycled.' },
        ],
        memoryAid: 'Circular Queue Wrap: `(Ptr + 1) MOD MaxSize`! Linked List Delete = Bypass `Prev.Next → Curr.Next` THEN Push `Curr` back to `FreeListPointer`!',
        commonMistake: 'Forgetting to recycle a deleted node back onto `FreeListPointer` in CIE 9618 Paper 3/4 linked-list deletion — skipping that step leaks array slots permanently and drops a full mark!',
      },
    ],
    keyTerms: [
      { term: 'Stack (LIFO)', definition: 'Last-In, First-Out ADT with `O(1)` `Push` and `Pop` via `TopPointer`.' },
      { term: 'Circular Queue (FIFO)', definition: 'First-In, First-Out ADT reusing freed slots via `(Pointer + 1) MOD MaxSize`.' },
      { term: 'Linked List & Null Pointer (`−1`)', definition: 'Pointer-chained node sequence (`Data | NextNode`) allowing `O(1)` insertion/deletion without shifting.' },
      { term: 'FreeListPointer', definition: 'Head pointer of the chain of unused node slots enabling memory recycling on deletion.' },
    ],
    checklistPoints: [
      'Trace and code `Push`/`Pop` for Stacks and modulo wrap-around `Enqueue`/`Dequeue` for Circular Queues',
      'Trace ordered Linked List insertion and deletion including `StartPointer` and `FreeListPointer` recycling',
      'Compare Stacks, Queues, Linked Lists, and Arrays on access/insertion complexity and real OS uses',
    ],
  },

  'al-cs-7-2': {
    subtopicId: 'al-cs-7-2',
    subtopicCode: '7.2',
    subtopicTitle: 'Binary Search Trees (Pre/In/Post-Order), Hash Tables (Collisions) & Dictionaries',
    readingMinutes: 13,
    videoTitle: '90. OCR A Level (H046-H446) SLR14 - 1.4 Data structures part 4 - Trees',
    youtubeId: '0amXaMnTlhI',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:14',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3 & 4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Binary Search Tree (BST) Structure, Insertion & Searching', cardId: 'al-cs-7-2-c1' },
      { time: '2:50', seconds: 170, label: 'Tree Traversals: Pre-Order, In-Order (Sorted!) & Post-Order (RPN!)', cardId: 'al-cs-7-2-c2' },
      { time: '5:35', seconds: 335, label: 'Hash Tables, Hashing Functions, Collision Resolution & Dictionaries', cardId: 'al-cs-7-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-7-2-c1',
        title: 'Binary Search Trees (BST): Array-of-Nodes & Search/Insert',
        summary: 'A Binary Search Tree arranges nodes so every left-subtree value is LESS than the parent and every right-subtree value is GREATER, enabling `O(log n)` average lookup.',
        bullets: [
          '**CIE 9618 Array Node Layout** — each node holds `LeftPointer`, `Data`, `RightPointer` (`−1` = null), managed by `RootPointer` and `FreePointer`.',
          '**Inserting a new key** — start at `RootPointer`; compare `NewItem < Node[Curr].Data`: branch **Left** if smaller, **Right** if larger; repeat until hitting a null (`−1`) child pointer, allocate node from `FreePointer`, and attach!',
          '**Balanced vs Skewed BST** — a balanced BST searches in **`O(log n)`**; inserting already-sorted keys (`1, 2, 3, 4, 5`) degenerates into a right-leaning linked list with **`O(n)`** worst-case search!',
        ],
        subsections: [
          {
            heading: 'Worked BST Insertion Trace',
            bullets: [
              '**Insert order `[50, 28, 74, 15, 35, 91]`** → Root = `50`; `28 < 50` (left); `74 > 50` (right); `15 < 28` (left of 28); `35 > 28` (right of 28); `91 > 74` (right of 74)!',
            ],
            exampleHeading: 'Worked search trace for `35` in BST above',
            examples: [
              '`50 (35 < 50 → Left) → 28 (35 > 28 → Right) → 35` — **FOUND in 3 comparisons**!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'binary search tree (BST)', definition: 'Hierarchical binary tree where every node’s left descendants are smaller and right descendants are larger.' },
        ],
      },
      {
        id: 'al-cs-7-2-c2',
        title: 'Recursive Binary Tree Traversals (Pre-Order, In-Order, Post-Order)',
        summary: 'The position of `Visit(Root)` relative to recursive `Left` and `Right` calls produces Pre-Order (tree cloning), In-Order (sorted ascending output), or Post-Order (RPN / tree deletion).',
        bullets: [
          '**Pre-Order (`Root → Left → Right`)** — visits parent first; ideal for **copying/serialising a tree** or generating Prefix notation.',
          '**In-Order (`Left → Root → Right`)** — visits left subtree, then node, then right subtree; on a BST it ALWAYS outputs all keys in **exact sorted ascending order**!',
          '**Post-Order (`Left → Right → Root`)** — visits both children before parent; ideal for **generating Reverse Polish Notation (RPN)** from expression trees and **safely deleting a tree** bottom-up.',
        ],
        subsections: [
          {
            heading: 'Worked 3-Traversal Output on BST (`Root=50, L=28[15,35], R=74[_,91]`)',
            bullets: [
              '**Notice where `50` appears!** — First in Pre-Order, Middle in In-Order, Last in Post-Order!',
            ],
            exampleHeading: 'Exact traversal outputs',
            examples: [
              'Pre-Order: **`50, 28, 15, 35, 74, 91`** · In-Order (SORTED!): **`15, 28, 35, 50, 74, 91`** · Post-Order: **`15, 35, 28, 91, 74, 50`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'in-order traversal', definition: 'Left → Root → Right recursive binary tree walk that outputs Binary Search Tree keys in ascending sorted order.' },
        ],
      },
      {
        id: 'al-cs-7-2-c3',
        title: 'Hash Tables, Collision Resolution & Dictionaries',
        summary: 'Hash tables compute an array slot directly from a key via a hash function (`Key MOD TableSize`) for `O(1)` average lookup, resolving hash collisions via open addressing or chaining.',
        bullets: [
          '**Hashing & Dictionaries** — a **Dictionary** stores unique `Key → Value` pairs backed by a **Hash Table**. A **Hash Function** (e.g. `Index ← Key MOD 11`) maps keys uniformly across slots so lookup/insert averages **`O(1)`** without searching!',
          '**Hash Collision** — occurs when two distinct keys hash to the **same slot index** (e.g. `15 MOD 11 = 4` and `26 MOD 11 = 4`).',
          '**2 Collision Resolution Methods** — (1) **Open Addressing (Linear Probing)**: step sequentially `(Index + 1) MOD Size` to the next free slot (can cause **primary clustering**; requires tombstone markers on deletion); (2) **Chaining (Closed Addressing)**: each table slot points to a **linked list** (overflow bucket) storing all colliding keys cleanly.',
        ],
        subsections: [
          {
            heading: 'Worked Linear Probing Trace (`TableSize = 7`, `h(k) = k MOD 7`)',
            bullets: [
              '**Lookup stops** ONLY when either the target key matches OR an empty never-used slot is reached!',
            ],
            exampleHeading: 'Insert keys `16`, `23`, `30` into size-7 hash table',
            examples: [
              '`16 MOD 7 = 2` → slot `2`; `23 MOD 7 = 2` (collision!) → probe `+1` → slot **`3`**; `30 MOD 7 = 2` (collision at 2 & 3!) → slot **`4`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hash collision', definition: 'Event where two distinct keys produce the same hash table index, resolved via open addressing (linear probing) or chaining.' },
          { term: 'open addressing', definition: 'Collision resolution placing colliding entries into the next available empty slot inside the hash table array.' },
        ],
        memoryAid: 'Traversals = Where is ROOT? PRE = first · IN = middle (Sorted BST!) · POST = last (RPN!). Hash Lookup = `O(1)` avg via `Key MOD Size`!',
        commonMistake: 'Deleting an entry from an open-addressed hash table by simply setting it to empty — that breaks future linear-probe chains for keys placed past it! Mark deleted slots as a tombstone or use chaining.',
      },
    ],
    keyTerms: [
      { term: 'Binary Search Tree (BST)', definition: 'Binary tree with `Left < Root < Right` invariant enabling `O(log n)` balanced lookups.' },
      { term: 'Pre / In / Post-Order Traversal', definition: 'Root-first (cloning), Left-Root-Right (sorted BST), and Root-last (RPN/deletion) recursive walks.' },
      { term: 'Hash Table & Hash Function', definition: 'Direct-address `O(1)` lookup table computing array index directly from keys (`Key MOD Size`).' },
      { term: 'Open Addressing vs Chaining', definition: 'Linear probing into next free table slot vs storing colliding keys in a slot-linked overflow list.' },
    ],
    checklistPoints: [
      'Trace BST insertion and lookup using CIE 9618 `LeftPointer / Data / RightPointer` arrays',
      'Produce exact Pre-Order, In-Order, and Post-Order outputs and match each to its CS use case',
      'Apply modulo hash functions and resolve collisions using both Open Addressing (linear probing) and Chaining',
    ],
  },

  'al-cs-7-3': {
    subtopicId: 'al-cs-7-3',
    subtopicCode: '7.3',
    subtopicTitle: 'Searching & Sorting: Linear vs Binary Search, Bubble, Insertion & Merge Sort',
    readingMinutes: 13,
    videoTitle: '150. OCR A Level (H446) SLR25 - 2.3 Implement binary search',
    youtubeId: 'eme0m1ABz5M',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:10',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3 & 4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Iterative & Recursive Binary Search (`O(log n)`) vs Linear Search', cardId: 'al-cs-7-3-c1' },
      { time: '2:50', seconds: 170, label: 'Insertion Sort vs Optimised Bubble Sort Step-by-Step', cardId: 'al-cs-7-3-c2' },
      { time: '5:35', seconds: 335, label: 'Merge Sort (Divide & Conquer `O(n log n)`) & Full Complexity Comparison', cardId: 'al-cs-7-3-c3' },
    ],
    cards: [
      {
        id: 'al-cs-7-3-c1',
        title: 'Binary Search (Iterative & Recursive `O(log n)`)',
        summary: 'Binary Search requires a SORTED list and halves the remaining search interval on every comparison using `Mid ← (Low + High) DIV 2`, achieving `O(log n)` worst-case speed.',
        diagram: 'sorting-searching-trace',
        bullets: [
          '**Iterative Binary Search loop** — set `Low ← 0`, `High ← N − 1`, `Found ← FALSE`; `WHILE NOT Found AND Low <= High`: compute `Mid ← (Low + High) DIV 2`; if `Arr[Mid] = Target` → `Found ← TRUE`; else if `Arr[Mid] < Target` → `Low ← Mid + 1`; else `High ← Mid - 1`.',
          '**Termination when NOT present** — when `Low > High`, the remaining search range is empty and the loop safely exits returning `−1` (no infinite loop!).',
          '**When Linear Search still wins** — if the list is **unsorted** and only searched once (sorting costs `O(n log n)` > single `O(n)` linear scan), or if the list is tiny (`n < 15`).',
        ],
        subsections: [
          {
            heading: 'Worked Binary Search Trace (`Target = 19` in `[4, 9, 14, 19, 27, 35, 48]`)',
            bullets: [
              '**Notice `+ 1` and `− 1`** — always exclude `Mid` when shifting `Low` or `High`, otherwise `Low = High` can loop infinitely!',
            ],
            exampleHeading: 'Index trace (`0..6`)',
            examples: [
              'Init `Low=0, High=6` → `Mid = (0+6) DIV 2 = 3` → `Arr[3] = 19 == 19` → **FOUND in 1 check** (worst case for 7 items is strictly `⌊log₂ 7⌋ + 1 = 3` checks!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'binary search', definition: 'Divide-and-conquer `O(log n)` search repeatedly checking the midpoint of a sorted list and discarding half each step.' },
        ],
      },
      {
        id: 'al-cs-7-3-c2',
        title: 'Insertion Sort vs Bubble Sort (Paper 4 Implementation)',
        summary: 'Insertion Sort grows a sorted left subarray one item at a time by shifting larger elements rightward — outperforming Bubble Sort with fewer swaps and `O(n)` best-case speed on nearly sorted data.',
        bullets: [
          '**Insertion Sort algorithm** — `FOR i ← 1 TO N - 1`: save `Key ← Arr[i]`, set `j ← i - 1`; `WHILE j >= 0 AND Arr[j] > Key`: shift `Arr[j + 1] ← Arr[j]`, `j ← j - 1`; insert `Arr[j + 1] ← Key`.',
          '**Why Insertion Sort beats Bubble Sort** — performs shifts instead of costly 3-assignment swaps, adapts naturally to **nearly sorted** input (`O(n)` best case), and can sort streaming data online as items arrive.',
          '**Complexity of both** — Worst/Average time **`O(n²)`**, Best time (already sorted) **`O(n)`**, Auxiliary space **`O(1)` in-place**.',
        ],
        subsections: [
          {
            heading: 'Worked Insertion Sort Pass Trace on `[21, 14, 29, 8]`',
            bullets: [
              '**Element `0` (`[21]`)** starts trivially sorted; each iteration inserts `Arr[i]` into its exact sorted slot on the left.',
            ],
            exampleHeading: 'Pass-by-pass snapshots',
            examples: [
              '`i=1 (Key=14)` → `[14, 21, 29, 8]` · `i=2 (Key=29)` → `[14, 21, 29, 8]` · `i=3 (Key=8)` → **`[8, 14, 21, 29]`**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'insertion sort', definition: 'In-place sorting algorithm that picks each successive item and shifts larger elements right to insert it into a growing sorted prefix.' },
        ],
      },
      {
        id: 'al-cs-7-3-c3',
        title: 'Merge Sort (`O(n log n)` Divide & Conquer)',
        summary: 'Merge Sort recursively splits a list in half down to single-element base lists, then merges sorted halves back together in linear passes — guaranteeing `O(n log n)` time even on reverse-sorted data.',
        bullets: [
          '**Two recursive phases** — (1) **Divide**: split list into `Left` and `Right` halves recursively (`log₂ n` levels) until each sublist has `length <= 1`; (2) **Conquer (Merge)**: compare front elements of two sorted sublists using two pointers, copying the smaller element into a merged output array (`O(n)` work per level).',
          '**Trade-off vs Insertion/Bubble** — guaranteed **`O(n log n)`** across best, average, AND worst cases (massive speedup on large datasets!), **stable sort**, but requires **`O(n)` extra auxiliary RAM** for temporary merged arrays plus recursion call-stack overhead.',
        ],
        subsections: [
          {
            heading: 'Worked Merge Step Trace',
            bullets: [
              '**Merging `[4, 17, 25]` and `[8, 12, 30]`** compares `4 vs 8 (4)`, `17 vs 8 (8)`, `17 vs 12 (12)`, `17 vs 30 (17)`, `25 vs 30 (25)`, then appends `30`!',
            ],
            exampleHeading: 'Scaling benchmark: Sorting `100,000` records',
            examples: [
              'Insertion/Bubble `O(n²)`: `~10¹⁰` ops (several minutes); Merge Sort `O(n log n)`: `~1.7 × 10⁶` ops (`< 20 ms` — **>5,000× faster**!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'merge sort', definition: 'Divide-and-conquer recursive sort splitting arrays into halves and merging sorted runs in guaranteed `O(n log n)` time and `O(n)` space.' },
        ],
        memoryAid: 'Binary Search = Sorted + `Mid=(Low+High) DIV 2` (`O(log n)`). Insertion = Shift into sorted left (`O(n²)`/`O(1)` space). Merge = Halve & Merge (`O(n log n)`/`O(n)` space)!',
        commonMistake: 'Writing `Low ← Mid` instead of `Low ← Mid + 1` in Binary Search — if `Low = 4, High = 5` and target is larger than `Arr[4]`, `Mid` stays `4` forever causing an infinite loop!',
      },
    ],
    keyTerms: [
      { term: 'Binary Search', definition: 'Sorted-array `O(log n)` search halving boundaries via `Mid ← (Low + High) DIV 2`.' },
      { term: 'Insertion Sort', definition: 'In-place `O(n²)` worst / `O(n)` best sort inserting each key into a growing sorted prefix.' },
      { term: 'Merge Sort', definition: 'Recursive divide-and-conquer sort guaranteeing `O(n log n)` time using `O(n)` auxiliary memory.' },
      { term: 'In-Place Algorithm', definition: 'Algorithm transforming data using only `O(1)` constant auxiliary memory (Bubble/Insertion Sort).' },
    ],
    checklistPoints: [
      'Implement and trace both iterative and recursive Binary Search with exact `Low > High` termination',
      'Code and dry-run Insertion Sort and compare its performance on nearly sorted data vs Bubble Sort',
      'Trace Merge Sort’s recursive divide-and-merge stages and compare time/space complexity across all algorithms',
    ],
  },

  'al-cs-8-1': {
    subtopicId: 'al-cs-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Object-Oriented Programming (OOP), Serial/Random Files & Exception Handling',
    readingMinutes: 13,
    videoTitle: '38. OCR A Level (H446) SLR7 - 1.2 Object-oriented languages part 3',
    youtubeId: 'K9XaTFlb5Gw',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:20',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3 & 4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'OOP Classes, Constructors, Encapsulation & Getter/Setter Methods', cardId: 'al-cs-8-1-c1' },
      { time: '2:55', seconds: 175, label: 'Inheritance, Polymorphism (Method Overriding) & Containment (Aggregation)', cardId: 'al-cs-8-1-c2' },
      { time: '5:45', seconds: 345, label: 'Serial, Sequential & Random File Access + Exception Handling (TRY/EXCEPT)', cardId: 'al-cs-8-1-c3' },
    ],
    cards: [
      {
        id: 'al-cs-8-1-c1',
        title: 'Classes, Objects, Constructors & Encapsulation',
        summary: 'OOP models entities as Objects instantiated from Classes bundling `PRIVATE` attributes and `PUBLIC` methods (Encapsulation) so internal state is protected from invalid direct mutation.',
        bullets: [
          '**Class vs Object** — a **Class** is the blueprint defining attributes (properties) and methods; an **Object** is a concrete runtime **instance** created by the **Constructor** (`NEW`).',
          '**Encapsulation** — declaring attributes **`PRIVATE`** so external code CANNOT modify them directly; instead, controlled **`PUBLIC` Getter** (`GetBalance()`) and **Setter** (`SetBalance(Amt)`) methods validate updates before mutating state, enforcing data integrity and hiding internal implementation.',
        ],
        subsections: [
          {
            heading: 'CIE 9618 OOP Pseudocode Blueprint',
            bullets: [
              '**Notice `PRIVATE` attributes + `PUBLIC PROCEDURE NEW(...)`** — standard Paper 4 exam marks!',
            ],
            exampleHeading: 'Worked class excerpt: `BankAccount`',
            examples: [
              '`CLASS Account`: `PRIVATE Balance : REAL`; `PUBLIC PROCEDURE NEW(Init : REAL) Balance ← Init ENDPROCEDURE`; `PUBLIC FUNCTION GetBalance() RETURNS REAL RETURN Balance ENDFUNCTION`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'encapsulation', definition: 'Bundling private data attributes and public methods inside a class to restrict direct external access and protect data integrity.' },
          { term: 'constructor', definition: 'Special class method (`NEW` / `__init__`) executed automatically upon object instantiation to initialise attributes.' },
        ],
      },
      {
        id: 'al-cs-8-1-c2',
        title: 'Inheritance, Polymorphism & Containment (Aggregation)',
        summary: 'Inheritance promotes code reuse (`IS-A`), Polymorphism lets subclasses redefine inherited methods for specialised behaviour, and Containment composes objects inside objects (`HAS-A`).',
        bullets: [
          '**Inheritance (`IS-A`)** — a **Subclass (Derived)** inherits all attributes and methods from a **Superclass (Base)** (`CLASS EBook INHERITS Book`), calling `SUPER.NEW(...)` to initialise inherited attributes and adding specialised fields (e.g. `FileFormat`).',
          '**Polymorphism (Method Overriding)** — a subclass redefines a method sharing the **exact same name and signature** as the superclass (`GetDetails()`), so calling `Item.GetDetails()` on a mixed array of `Book` and `EBook` objects automatically runs the right version at runtime!',
          '**Containment / Aggregation (`HAS-A`)** — one class holds instances of another class as attributes (e.g. `Library` contains an array of `Book` objects) without inheritance.',
        ],
        subsections: [
          {
            heading: 'Inheritance (`IS-A`) vs Containment (`HAS-A`)',
            bullets: [
              '**Test**: *"A Car IS-A Vehicle"* → **Inheritance**; *"A Car HAS-A Engine"* → **Containment**!',
            ],
            exampleHeading: 'Worked polymorphism benefit in Paper 4',
            examples: [
              'Looping `FOR i ← 0 TO 9: OUTPUT Items[i].CalcTax()` works uniformly across `Book`, `EBook`, and `AudioBook` objects with zero `IF Type = ...` branching!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'polymorphism', definition: 'OOP mechanism allowing subclasses to override an inherited method name so the correct specialised implementation executes dynamically per object type.' },
          { term: 'containment', definition: 'Object design relationship ("HAS-A") where a class contains object instances of another class as its attributes.' },
        ],
      },
      {
        id: 'al-cs-8-1-c3',
        title: 'Serial, Sequential & Random Files + Exception Handling',
        summary: 'CIE 9618 distinguishes Serial (chronological), Sequential (key-sorted), and Random (direct hash-addressed) binary files, plus `TRY ... EXCEPT` exception handling to prevent runtime crashes.',
        bullets: [
          '**3 File Organisations** — **Serial** (records appended chronologically, e.g. transaction log — `O(n)` search); **Sequential** (records kept sorted by key field, e.g. payroll batch — must rewrite file to insert); **Random (Direct Access)** (hashing algorithm computes exact record byte address on disk via `SEEK` + `GETRECORD`/`PUTRECORD` for **`O(1)` direct access**!).',
          '**Exception Handling (`TRY ... EXCEPT ... ENDTRY`)** — intercepts unexpected **runtime errors** (`FileNotFound`, `DivisionByZero`, `InvalidIntegerCast`, `EOF`) gracefully so the program outputs a helpful message and cleans up files instead of crashing abruptly.',
        ],
        subsections: [
          {
            heading: 'Worked `TRY / EXCEPT` File Open Pattern (Paper 4)',
            bullets: [
              '**Always wrap external file I/O** in `TRY ... EXCEPT` on Paper 4 practical tasks!',
            ],
            exampleHeading: 'Worked pseudocode exception guard',
            examples: [
              '`TRY: OPENFILE "users.dat" FOR READ ... EXCEPT: OUTPUT "Error: file missing or unreadable" ENDTRY`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'random access file', definition: 'File organisation computing a record’s direct disk address via a hashing function (`SEEK`/`GETRECORD`) for O(1) retrieval.' },
          { term: 'exception handling', definition: 'Structured `TRY ... EXCEPT` runtime error trapping preventing abrupt crashes on missing files, invalid casts, or zero division.' },
        ],
        memoryAid: 'OOP 4 Pillars: Encapsulation (`PRIVATE` + Get/Set) · Inheritance (`IS-A`) · Polymorphism (Override same method) · Containment (`HAS-A`)!',
        commonMistake: 'Writing "Serial and Sequential files are identical" — Serial stores records strictly in chronological arrival order (unsorted), whereas Sequential stores records SORTED by a key field!',
      },
    ],
    keyTerms: [
      { term: 'Encapsulation', definition: 'Hiding `PRIVATE` class attributes behind validated `PUBLIC` getter and setter methods.' },
      { term: 'Inheritance & Polymorphism', definition: 'Subclass reusing superclass members (`IS-A`) and overriding methods for object-specific runtime behaviour.' },
      { term: 'Containment (Aggregation)', definition: 'Composition relationship (`HAS-A`) where one class stores instances of another class as fields.' },
      { term: 'Serial / Sequential / Random Files', definition: 'Chronological append, key-sorted storage, and direct hash-addressed `SEEK`/`GETRECORD` access.' },
      { term: 'Exception Handling (TRY/EXCEPT)', definition: 'Runtime error interception handling missing files or invalid inputs without crashing.' },
    ],
    checklistPoints: [
      'Write CIE 9618 OOP classes with `PRIVATE` attributes, constructors (`NEW`), getters/setters, inheritance, and overridden methods',
      'Distinguish Inheritance (`IS-A`) from Containment (`HAS-A`) and explain dynamic Polymorphism',
      'Compare Serial, Sequential, and Random file access (`SEEK`/`GETRECORD`) and write `TRY ... EXCEPT` guards',
    ],
  },

  'al-cs-8-2': {
    subtopicId: 'al-cs-8-2',
    subtopicCode: '8.2',
    subtopicTitle: 'Recursion: Base/General Cases, Call Stack Frames & Winding/Unwinding Traces',
    readingMinutes: 12,
    videoTitle: '134. OCR A Level (H446) SLR23 - 2.2 Recursion',
    youtubeId: 'N61yojktcH8',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:06',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3 & 4)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Essential Features of Recursion: Base Case & General Case', cardId: 'al-cs-8-2-c1' },
      { time: '2:45', seconds: 165, label: 'How Compilers Implement Recursion Using Call Stack Frames (Winding & Unwinding)', cardId: 'al-cs-8-2-c2' },
      { time: '5:25', seconds: 325, label: 'Recursion vs Iteration Trade-Offs & Tracing Recursive Functions', cardId: 'al-cs-8-2-c3' },
    ],
    cards: [
      {
        id: 'al-cs-8-2-c1',
        title: 'Anatomy of a Valid Recursive Subroutine',
        summary: 'A recursive subroutine calls itself directly or indirectly and MUST possess a terminating Base Case plus a General Case that converges strictly toward that Base Case.',
        bullets: [
          '**3 Mandatory Requirements (CIE 9618)** — (1) **Base Case** (stopping condition returning a direct answer WITHOUT recursing); (2) **General (Recursive) Case** (calls itself on a **smaller/simpler input**); (3) **Guaranteed convergence** toward the base case on every call.',
          '**Missing / unreachable Base Case** — triggers infinite recursion until the OS **call stack overflows** (**Stack Overflow runtime crash**)!',
        ],
        subsections: [
          {
            heading: 'Worked Recursive Factorial Function',
            bullets: [
              '**`Factorial(0) = 1`** is the Base Case; **`n * Factorial(n − 1)`** is the General Case shrinking `n` by `1` each step.',
            ],
            exampleHeading: 'Worked pseudocode & validation guard',
            examples: [
              '`FUNCTION Fact(n : INTEGER) RETURNS INTEGER`: `IF n <= 1 THEN RETURN 1 ELSE RETURN n * Fact(n - 1) ENDIF`.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'base case', definition: 'Terminating branch of a recursive routine that returns directly without making any further recursive call.' },
          { term: 'general case', definition: 'Recursive branch that breaks the problem down and calls itself with an argument closer to the base case.' },
        ],
      },
      {
        id: 'al-cs-8-2-c2',
        title: 'Call Stack Frames: Winding & Unwinding',
        summary: 'Every recursive invocation pushes a new Stack Frame (return address, local variables, parameter values) onto the LIFO Call Stack during Winding, then pops and computes results during Unwinding.',
        bullets: [
          '**What a Stack Frame holds** — (1) **Return address** (where execution resumes after `RETURN`), (2) **Parameter values** for that specific call, and (3) **Local variables** isolated to that invocation.',
          '**Winding Phase** — calls nest deeper (`Fact(4) → Fact(3) → Fact(2) → Fact(1)`), pushing a new stack frame at each step until the Base Case hits.',
          '**Unwinding Phase** — Base Case returns `1` → stack frames **pop in LIFO order**, resuming each paused multiplication (`2×1=2 → 3×2=6 → 4×6=24`) until the original caller receives **`24`**!',
        ],
        subsections: [
          {
            heading: 'Worked Winding & Unwinding Trace Table (`Fact(4)`)',
            bullets: [
              '**Exact Paper 3/4 trace format**: show each call pushing down (`Winding`) and each `RETURN` popping back up (`Unwinding`)!',
            ],
            exampleHeading: 'Trace of `Fact(4)`',
            examples: [
              'Wind: `Fact(4)` waits on `4 * Fact(3)` → `Fact(3)` waits on `3 * Fact(2)` → `Fact(2)` waits on `2 * Fact(1)` → Base `Fact(1) = 1`.',
              'Unwind: `Fact(2) = 2` → `Fact(3) = 6` → `Fact(4) = 24` ✓.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'stack frame', definition: 'Call-stack record created per subroutine call holding return address, parameter values, and local variables.' },
          { term: 'unwinding', definition: 'LIFO return phase of recursion where stacked frames pop sequentially to compute and pass back final results.' },
        ],
      },
      {
        id: 'al-cs-8-2-c3',
        title: 'Recursion vs Iteration & Converting Between Them',
        summary: 'Recursion yields concise, elegant code for naturally hierarchical problems (trees, merge sort, directory walks), whereas iteration avoids stack-frame memory overhead and stack-overflow risk.',
        bullets: [
          '**Advantages of Recursion** — far shorter, cleaner, more readable code for naturally recursive structures (**Binary Tree Traversals**, **Merge Sort**, **Quick Sort**, **Depth-First Search**, **Tower of Hanoi**); requires fewer explicit loop/stack variables.',
          '**Advantages of Iteration** — uses **`O(1)` constant memory** (no stack frame pushed per step), **faster execution** (zero call/return stack push/pop overhead), and **immune to Stack Overflow** on `n = 1,000,000` loops!',
        ],
        subsections: [
          {
            heading: 'Comparing `Fact(n)` Recursive vs Iterative',
            bullets: [
              '**Recursive `Fact(n)`**: `O(n)` call-stack space · **Iterative `FOR i ← 1 TO n`**: `O(1)` constant space!',
            ],
            exampleHeading: 'Worked Paper 4 conversion: Iterative factorial',
            examples: [
              '`Result ← 1; FOR i ← 2 TO n: Result ← Result * i; NEXT i; RETURN Result` — identical answer, zero stack frames!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'stack overflow', definition: 'Runtime crash occurring when excessive or infinite recursive calls exhaust all memory allocated to the program’s call stack.' },
        ],
        memoryAid: 'Recursion = Base Case + Shrinking General Case! Stack Frame stores Return Addr + Params + Locals. Wind DOWN → Unwind UP!',
        commonMistake: 'Forgetting to list ALL THREE contents of a Call Stack Frame on CIE 9618 Paper 3 — always write: (1) Return address, (2) Parameter values, and (3) Local variables!',
      },
    ],
    keyTerms: [
      { term: 'Base Case & General Case', definition: 'Non-recursive stopping condition and self-calling branch converging toward it.' },
      { term: 'Call Stack Frame', definition: 'Per-call stack record storing return address, parameters, and local variables.' },
      { term: 'Winding & Unwinding', definition: 'Pushing nested calls down to the base case vs popping frames in LIFO order to return values.' },
      { term: 'Stack Overflow', definition: 'Memory exhaustion crash caused by missing base case or excessive recursion depth.' },
    ],
    checklistPoints: [
      'Identify Base Case, General Case, and convergence in any recursive algorithm',
      'Explain how compilers manage recursion via Call Stack Frames (return address, parameters, locals)',
      'Trace Winding and Unwinding accurately and convert recursive routines to `O(1)`-space iterative loops',
    ],
  },

  'al-cs-8-3': {
    subtopicId: 'al-cs-8-3',
    subtopicCode: '8.3',
    subtopicTitle: 'Graphs, Dijkstra’s Shortest Path, A* Heuristic, Neural Networks & Machine Learning',
    readingMinutes: 13,
    videoTitle: '157. OCR A Level (H446) SLR26 - 2.3 Dijkstra\'s shortest path',
    youtubeId: 'YHDmA7ZlwqU',
    videoChannel: "Craig'n'Dave",
    videoDuration: '8:28',
    courseMatchSummary: '3 of 3 sections match Cambridge International A-Level Computer Science (9618 Paper 3)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Weighted Graphs, Adjacency Matrices/Lists & Dijkstra’s Algorithm', cardId: 'al-cs-8-3-c1' },
      { time: '2:55', seconds: 175, label: 'A* Pathfinding Heuristic (`f(n) = g(n) + h(n)`) vs Dijkstra', cardId: 'al-cs-8-3-c2' },
      { time: '5:45', seconds: 345, label: 'Artificial Neural Networks (Backpropagation) & Supervised/Unsupervised/Reinforcement ML', cardId: 'al-cs-8-3-c3' },
    ],
    cards: [
      {
        id: 'al-cs-8-3-c1',
        title: 'Weighted Graphs & Dijkstra’s Shortest Path Algorithm',
        summary: 'Graphs model networks of vertices and weighted edges (roads, routers, social links); Dijkstra’s greedy algorithm guarantees the shortest weighted path from a start vertex when edge weights are non-negative.',
        bullets: [
          '**Graph representations** — **Adjacency Matrix** (`V × V` 2D array: `O(1)` edge check, wastes `O(V²)` RAM on sparse graphs) vs **Adjacency List** (list of `(neighbour, weight)` pairs per vertex: compact `O(V + E)` memory for sparse road/web graphs).',
          '**Dijkstra’s Algorithm steps** — (1) Set `dist[Start] ← 0`, all other vertices `∞`; (2) Repeatedly pick the **unvisited vertex `u` with the smallest tentative distance**; (3) For each unvisited neighbour `v`, if `dist[u] + weight(u,v) < dist[v]`, update `dist[v]` and set `prev[v] ← u`; (4) Mark `u` permanently visited until goal is finalised, then backtrack `prev[]`!',
        ],
        subsections: [
          {
            heading: 'Worked Dijkstra Relaxation Check',
            bullets: [
              '**Edge relaxation**: If `A→B = 4`, `A→C = 10`, and `B→C = 3`, visiting `B` updates `dist[C]` from `10` down to `4 + 3 = 7` (`prev[C] ← B`)!',
            ],
            exampleHeading: 'Worked check: Why Dijkstra fails on negative edge weights',
            examples: [
              'Once a vertex is permanently finalised, Dijkstra never re-evaluates it — a later negative edge could undercut an already-finalised path.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'weighted graph', definition: 'Non-linear ADT of vertices (nodes) connected by edges carrying numeric costs such as distance, latency, or travel time.' },
          { term: 'Dijkstra’s algorithm', definition: 'Shortest-path graph algorithm repeatedly expanding the lowest-cost unvisited node to guarantee optimal non-negative paths.' },
        ],
      },
      {
        id: 'al-cs-8-3-c2',
        title: 'A* Pathfinding Algorithm (`f(n) = g(n) + h(n)`)',
        summary: 'A* accelerates Dijkstra by adding an admissible heuristic estimate `h(n)` of remaining distance to the goal, expanding far fewer irrelevant nodes while still guaranteeing the shortest path.',
        bullets: [
          '**A* Cost Function** — **`f(n) = g(n) + h(n)`**, where **`g(n)`** = exact known path cost from Start to node `n`, and **`h(n)`** = **heuristic estimate** of remaining cost from `n` to Goal (e.g. straight-line Euclidean or Manhattan distance).',
          '**Admissible Heuristic requirement** — `h(n)` must **NEVER overestimate** the true remaining cost (`h(n) <= true cost`); if it overestimates, A* might miss the truly shortest route!',
          '**A* vs Dijkstra** — Dijkstra is simply A* with `h(n) = 0` (explores uniformly in all directions); A* steers exploration directly toward the goal, making it dramatically faster for GPS sat-navs and game AI pathfinding.',
        ],
        subsections: [
          {
            heading: 'Worked A* Priority Decision',
            bullets: [
              '**Always expand lowest `f(n) = g(n) + h(n)` first**!',
            ],
            exampleHeading: 'Comparing two frontier nodes `B` and `C`',
            examples: [
              'Node `B`: `g=4, h=9 → f=13` · Node `C`: `g=6, h=3 → f=9` → A* expands **`C` (`f=9 < 13`)** next even though `g(B) < g(C)`, steering straight toward the goal!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'A* algorithm', definition: 'Informed best-first pathfinding search prioritising nodes by `f(n) = g(n) + h(n)` combining actual path cost with an admissible heuristic.' },
          { term: 'admissible heuristic', definition: 'Heuristic estimate `h(n)` guaranteed never to exceed the true remaining cost to the goal, ensuring A* finds the optimal path.' },
        ],
      },
      {
        id: 'al-cs-8-3-c3',
        title: 'Artificial Neural Networks (Deep Learning) & Machine Learning Paradigms',
        summary: 'CIE 9618 Paper 3 covers four ML categories (Supervised, Unsupervised, Reinforcement, Deep Learning) and how multi-layer Neural Networks tune edge weights via Backpropagation.',
        bullets: [
          '**4 ML Categories (CIE 9618 Paper 3)** — **Supervised Learning** (trains on **labelled** input–output pairs for classification/regression, e.g. spam vs ham); **Unsupervised Learning** (discovers hidden clusters/patterns in **unlabelled** data, e.g. customer segmentation); **Reinforcement Learning** (agent learns optimal policy via trial-and-error **rewards and penalties** in an environment, e.g. AlphaGo/robotics); **Deep Learning** (Artificial Neural Networks with **many hidden layers** extracting hierarchical features from raw images/speech).',
          '**How an Artificial Neural Network (ANN) learns** — consists of **Input Layer**, one or more **Hidden Layers**, and **Output Layer** connected by **weighted edges** and **biases**. During forward propagation, each node computes `activation(Σ weight × input + bias)`. **Backpropagation** compares predicted output against target label to calculate **error (loss)** and propagates gradients backward through layers, iteratively **adjusting weights** to minimise error across training epochs!',
        ],
        subsections: [
          {
            heading: 'Why Deep Learning Excels on Unstructured Media',
            bullets: [
              '**Multiple hidden layers** learn progressive abstractions automatically (edges → shapes → faces), though requiring massive datasets and GPU/SIMD compute.',
            ],
            exampleHeading: 'Worked single-neuron forward calculation',
            examples: [
              'Inputs `(x₁=0.8, x₂=0.5)`, weights `(w₁=0.5, w₂=0.4)`, bias `−0.2` → weighted sum = `(0.8×0.5) + (0.5×0.4) − 0.2 = 0.40` passed through activation function!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'backpropagation', definition: 'Training algorithm calculating neural-network output error and propagating adjustments backward across hidden layers to update edge weights.' },
          { term: 'reinforcement learning', definition: 'Machine learning paradigm where an autonomous agent learns optimal actions by maximising cumulative environment rewards and avoiding penalties.' },
        ],
        memoryAid: 'A* = `f(n) = g(n) + h(n)` (admissible `h` never overestimates!). ML 3 Core: Supervised (Labels), Unsupervised (Clusters), Reinforcement (Rewards)!',
        commonMistake: 'Describing A* as expanding the node with the smallest `h(n)` alone — expanding purely on `h(n)` is Greedy Best-First Search and does NOT guarantee the shortest path; A* MUST minimise `f(n) = g(n) + h(n)`!',
      },
    ],
    keyTerms: [
      { term: 'Adjacency Matrix vs List', definition: '2D `O(V²)` dense graph table vs `O(V+E)` compact neighbour lists for sparse graphs.' },
      { term: 'Dijkstra’s Algorithm', definition: 'Uninformed shortest-path algorithm expanding minimum `g(n)` across non-negative weighted graphs.' },
      { term: 'A* Algorithm (`f = g + h`)', definition: 'Heuristic shortest-path search combining actual cost `g(n)` and admissible remaining estimate `h(n)`.' },
      { term: 'Backpropagation & Hidden Layers', definition: 'Iterative weight-adjustment training across multi-layer Artificial Neural Networks (Deep Learning).' },
      { term: 'Supervised / Unsupervised / Reinforcement ML', definition: 'Labelled training data vs unlabelled pattern clustering vs reward-driven agent trial-and-error.' },
    ],
    checklistPoints: [
      'Represent weighted graphs via Adjacency Matrices and Lists and trace Dijkstra’s shortest-path table',
      'Trace A* (`f(n) = g(n) + h(n)`) and explain why admissible heuristics keep A* optimal and faster than Dijkstra',
      'Distinguish Supervised, Unsupervised, Reinforcement, and Deep Learning and explain ANN Backpropagation',
    ],
  },
};

export const ALEVEL_CS_UNITS_7_8_QUIZZES: QuizQuestion[] = [
  // al-cs-7-1
  {
    id: 'al-cs-7-1-q1',
    subtopicId: 'al-cs-7-1',
    type: 'mcq',
    marks: 1,
    diagram: 'adt-structures',
    prompt: 'A 0-indexed Circular Queue has `MaxSize = 6`, `HeadPointer = 2`, `TailPointer = 5`, and `NumberOfItems = 4`. What index becomes the new `TailPointer` on the next `Enqueue()`?',
    options: ['0', '6', '2', '1'],
    correctIndex: 0,
    explanation: 'Modulo wrap-around computes `(5 + 1) MOD 6 = 0`, cleanly reusing freed slot 0 in `O(1)` time.',
  },
  {
    id: 'al-cs-7-1-q2',
    subtopicId: 'al-cs-7-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What MUST be done with a deleted node’s index after bypassing it in an array-backed CIE 9618 Linked List?',
    options: [
      'Link it back onto the front of `FreeListPointer` so the slot is recycled for future insertions',
      'Shift every remaining array element down by 1 index',
      'Set `StartPointer` permanently to −1',
      'Sort the entire linked list with Bubble Sort',
    ],
    correctIndex: 0,
    explanation: 'Returning the bypassed node to `FreeListPointer` prevents permanent slot leaks in fixed array storage.',
  },
  {
    id: 'al-cs-7-1-q3',
    subtopicId: 'al-cs-7-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the linear ADT operating disciplines.',
    segments: ['A Stack operates strictly on a ', ' discipline via `TopPointer`, whereas a Queue operates on a ', ' discipline via `Head` and `Tail` pointers.'],
    wordBank: ['LIFO', 'FIFO', 'BNF', 'RPN'],
    answers: ['LIFO', 'FIFO'],
    explanation: 'Stacks are Last-In, First-Out (LIFO); Queues are First-In, First-Out (FIFO).',
  },
  {
    id: 'al-cs-7-1-q4',
    subtopicId: 'al-cs-7-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each ADT to its classic operating system / CS use case.',
    pairs: [
      { left: 'Stack (LIFO)', right: 'Call stack storing return addresses during recursion' },
      { left: 'Circular Queue (FIFO)', right: 'Printer spooler & OS Ready process queue' },
      { left: 'Linked List', right: 'O(1) middle insertion/deletion by rewiring pointers' },
    ],
    explanation: 'Stacks manage nested calls/undo, queues buffer FIFO jobs, and linked lists avoid array shifting on edits.',
  },
  {
    id: 'al-cs-7-1-q5',
    subtopicId: 'al-cs-7-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why a Circular Queue is more memory-efficient than a simple Linear Queue implemented inside a fixed-size array. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'In a linear queue, dequeuing leaves empty slots at the front that can never be reused once TailPointer hits the array end; a circular queue wraps pointers using MOD arithmetic so freed front slots are reused in O(1) time without shifting.',
      markPoints: [
        { id: 'mp1', markDescription: 'Linear queue wastes dequeued front slots / reaches false-full at end of array', requiredKeywordGroups: [['waste', 'cannot reuse', 'empty', 'front', 'false']] },
        { id: 'mp2', markDescription: 'Circular queue wraps TailPointer with MOD to reuse freed slots in O(1)', requiredKeywordGroups: [['wrap', 'mod', 'reuse', 're-use']] },
      ],
    },
    explanation: 'Circular queues wrap `TailPointer` around to reuse freed front slots without `O(n)` element shifting.',
  },

  // al-cs-7-2
  {
    id: 'al-cs-7-2-q1',
    subtopicId: 'al-cs-7-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which recursive traversal of a Binary Search Tree ALWAYS outputs its elements in ascending sorted order?',
    options: ['In-Order (Left → Root → Right)', 'Pre-Order (Root → Left → Right)', 'Post-Order (Left → Right → Root)', 'Random probing'],
    correctIndex: 0,
    explanation: 'Because `Left < Root < Right` holds at every BST node, In-Order traversal visits all items in exact ascending order.',
  },
  {
    id: 'al-cs-7-2-q2',
    subtopicId: 'al-cs-7-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Keys `12`, `22`, and `32` are inserted into a 10-slot hash table using `h(k) = k MOD 10` with linear probing. Which slot stores key `32`?',
    options: ['Slot 4', 'Slot 2', 'Slot 3', 'Slot 0'],
    correctIndex: 0,
    explanation: '`12` takes slot `2`; `22` collides at `2` and probes to `3`; `32` collides at `2` and `3` and probes to slot `4`.',
  },
  {
    id: 'al-cs-7-2-q3',
    subtopicId: 'al-cs-7-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the tree traversal and hashing rules.',
    segments: ['Generating Reverse Polish Notation from an expression tree uses ', ' traversal, while two keys hashing to the same array index cause a hash ', '.'],
    wordBank: ['Post-Order', 'collision', 'In-Order', 'underflow'],
    answers: ['Post-Order', 'collision'],
    explanation: 'Post-Order (`Left → Right → Root`) yields RPN; two keys mapping to the same slot produce a hash collision.',
  },
  {
    id: 'al-cs-7-2-q4',
    subtopicId: 'al-cs-7-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each hash table or BST concept to its exact description.',
    pairs: [
      { left: 'Open Addressing (Linear Probing)', right: 'Places colliding key in the next empty slot inside the table' },
      { left: 'Chaining (Closed Addressing)', right: 'Each table slot points to an overflow linked list of colliding keys' },
      { left: 'Skewed BST', right: 'Degenerate tree formed by sorted insertions with O(n) worst search' },
    ],
    explanation: 'Open addressing probes internal slots; chaining links overflow buckets; skewed BSTs degrade from `O(log n)` to `O(n)`.',
  },
  {
    id: 'al-cs-7-2-q5',
    subtopicId: 'al-cs-7-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how a Hash Table achieves `O(1)` average lookup time compared to `O(log n)` in a Binary Search Tree. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A hash function computes the exact target array index directly from the key in constant arithmetic time without comparing keys down a tree, allowing immediate direct slot lookup when collisions are low.',
      markPoints: [
        { id: 'mp1', markDescription: 'Hash function calculates array index directly from key in constant time', requiredKeywordGroups: [['hash function', 'calculat', 'comput'], ['index', 'slot', 'address', 'direct']] },
        { id: 'mp2', markDescription: 'Avoids traversing/comparing nodes down a tree (assuming few collisions)', requiredKeywordGroups: [['without', 'direct', 'no traversal', 'collision', 'constant']] },
      ],
    },
    explanation: 'Direct index calculation skips tree comparisons entirely for `O(1)` average retrieval.',
  },

  // al-cs-7-3
  {
    id: 'al-cs-7-3-q1',
    subtopicId: 'al-cs-7-3',
    type: 'mcq',
    marks: 1,
    diagram: 'sorting-searching-trace',
    prompt: 'Which sorting algorithm guarantees `O(n log n)` worst-case time complexity but requires `O(n)` extra auxiliary memory space?',
    options: ['Merge Sort', 'Insertion Sort', 'Bubble Sort', 'Linear Search'],
    correctIndex: 0,
    explanation: 'Merge Sort always achieves `O(n log n)` via divide-and-conquer, trading `O(n)` temporary array space.',
  },
  {
    id: 'al-cs-7-3-q2',
    subtopicId: 'al-cs-7-3',
    type: 'mcq',
    marks: 1,
    prompt: 'In an iterative Binary Search loop `WHILE NOT Found AND Low <= High`, how should `Low` be updated when `Arr[Mid] < Target`?',
    options: ['Low ← Mid + 1', 'Low ← Mid', 'High ← Mid − 1', 'Low ← Low + 1'],
    correctIndex: 0,
    explanation: 'Since `Arr[Mid]` is strictly less than `Target`, discard indices `Low..Mid` by setting `Low ← Mid + 1`.',
  },
  {
    id: 'al-cs-7-3-q3',
    subtopicId: 'al-cs-7-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the sorting algorithm comparison.',
    segments: ['On an already-sorted array, Insertion Sort finishes in ', ' best-case time using ', ' in-place auxiliary memory.'],
    wordBank: ['O(n)', 'O(1)', 'O(n²)', 'O(log n)'],
    answers: ['O(n)', 'O(1)'],
    explanation: 'Insertion Sort verifies an already-sorted list in a single `O(n)` pass with `O(1)` extra space.',
  },
  {
    id: 'al-cs-7-3-q4',
    subtopicId: 'al-cs-7-3',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO valid statements comparing Insertion Sort with Bubble Sort.',
    options: [
      'Insertion Sort shifts items into a growing sorted left prefix instead of swapping adjacent pairs repeatedly',
      'Both have O(n²) worst-case time complexity and O(1) space complexity',
      'Bubble Sort always runs in O(n log n) worst-case time',
      'Insertion Sort requires an unsorted linked list only',
    ],
    correctIndices: [0, 1],
    explanation: 'Both are `O(n²)` worst-case in-place sorts, with Insertion Sort typically outperforming Bubble Sort via fewer assignments.',
  },
  {
    id: 'al-cs-7-3-q5',
    subtopicId: 'al-cs-7-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the prerequisite for Binary Search and why it finds an item in a 1,024-element array in at most 11 comparisons. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The array MUST already be sorted in order. Because each midpoint comparison eliminates half of the remaining items (O(log n)), 1,024 items halve to 1 in log₂(1024) = 10 steps plus 1 final check (at most 11 comparisons).',
      markPoints: [
        { id: 'mp1', markDescription: 'Prerequisite: list MUST be sorted', requiredKeywordGroups: [['sorted', 'ordered']] },
        { id: 'mp2', markDescription: 'Halves search space each step (`log₂ 1024 = 10` / `O(log n)`)', requiredKeywordGroups: [['half', 'halve', 'log', '10']] },
      ],
    },
    explanation: 'Sorting enables halving `1024 → 512 → ... → 1` in `O(log₂ n)` comparisons.',
  },

  // al-cs-8-1
  {
    id: 'al-cs-8-1-q1',
    subtopicId: 'al-cs-8-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which OOP principle hides attributes as `PRIVATE` and restricts all reads/updates through validated `PUBLIC` getter and setter methods?',
    options: ['Encapsulation', 'Polymorphism', 'Inheritance', 'Recursion'],
    correctIndex: 0,
    explanation: 'Encapsulation protects internal object state from invalid external modification.',
  },
  {
    id: 'al-cs-8-1-q2',
    subtopicId: 'al-cs-8-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which file organisation allows `O(1)` direct retrieval of any record using a hashing function and `SEEK` / `GETRECORD`?',
    options: ['Random access file', 'Serial file', 'Sequential text file', 'Bubble file'],
    correctIndex: 0,
    explanation: 'Random access files calculate record addresses directly via hashing without scanning preceding records.',
  },
  {
    id: 'al-cs-8-1-q3',
    subtopicId: 'al-cs-8-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the OOP design distinction.',
    segments: ['Modelling "Dog IS-A Animal" uses ', ', whereas modelling "Library HAS-A Book array" uses ', ' (aggregation).'],
    wordBank: ['inheritance', 'containment', 'encapsulation', 'hashing'],
    answers: ['inheritance', 'containment'],
    explanation: '`IS-A` maps to Inheritance; `HAS-A` maps to Containment/Aggregation.',
  },
  {
    id: 'al-cs-8-1-q4',
    subtopicId: 'al-cs-8-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each OOP / file-handling feature to its role.',
    pairs: [
      { left: 'Polymorphism', right: 'Subclass overrides inherited method for specialised runtime behaviour' },
      { left: 'TRY ... EXCEPT', right: 'Traps runtime errors like missing files gracefully without crashing' },
      { left: 'Sequential file', right: 'Records stored sorted by key field (unlike unsorted chronological Serial)' },
    ],
    explanation: 'Polymorphism overrides methods dynamically, `TRY/EXCEPT` prevents crashes, and Sequential files maintain key order.',
  },
  {
    id: 'al-cs-8-1-q5',
    subtopicId: 'al-cs-8-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how Polymorphism (method overriding) simplifies processing a single array containing both `FullTimeStaff` and `PartTimeStaff` subclasses of `Employee`. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Both subclasses override the same `CalcPay()` method name with their own pay formula, so a single loop can call `Staff[i].CalcPay()` and the runtime automatically invokes the correct subclass implementation without type-checking IF statements.',
      markPoints: [
        { id: 'mp1', markDescription: 'Subclasses override same method name with specialised behaviour', requiredKeywordGroups: [['override', 'same method', 'same name', 'redefin']] },
        { id: 'mp2', markDescription: 'Single uniform loop dynamically calls right implementation per object', requiredKeywordGroups: [['loop', 'dynam', 'correct', 'runtime', 'without if']] },
      ],
    },
    explanation: 'Polymorphism lets uniform calling code dispatch cleanly to each subclass’s specialised overridden method.',
  },

  // al-cs-8-2
  {
    id: 'al-cs-8-2-q1',
    subtopicId: 'al-cs-8-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What happens at runtime if a recursive function lacks an achievable Base Case?',
    options: [
      'Infinite recursion exhausts call-stack memory, causing a Stack Overflow crash',
      'The compiler automatically converts it to a Bubble Sort',
      'It returns 0 immediately in O(1) time',
      'It switches to a circular queue',
    ],
    correctIndex: 0,
    explanation: 'Every nested call pushes a new stack frame until the finite call stack overflows.',
  },
  {
    id: 'al-cs-8-2-q2',
    subtopicId: 'al-cs-8-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Given `FUNCTION Mystery(n): IF n <= 1 THEN RETURN 1 ELSE RETURN n + Mystery(n - 2) ENDIF`, what does `Mystery(5)` return?',
    options: ['9', '15', '6', '5'],
    correctIndex: 0,
    explanation: 'Winding: `5 + Mystery(3)` → `3 + Mystery(1)` → Base `1`. Unwinding: `3 + 1 = 4` → `5 + 4 = 9`.',
  },
  {
    id: 'al-cs-8-2-q3',
    subtopicId: 'al-cs-8-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the recursive execution phases.',
    segments: ['Pushing nested frames down to the base case is called ', ', while popping frames in LIFO order to return final results is ', '.'],
    wordBank: ['winding', 'unwinding', 'probing', 'pipelining'],
    answers: ['winding', 'unwinding'],
    explanation: 'Recursion winds down onto the call stack until the base case, then unwinds back up in LIFO order.',
  },
  {
    id: 'al-cs-8-2-q4',
    subtopicId: 'al-cs-8-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO items stored inside EVERY Call Stack Frame pushed during recursion.',
    options: [
      'Return address indicating where execution resumes after RETURN',
      'Current parameter values and local variables for that invocation',
      'The computer’s permanent 48-bit MAC address',
      'The SQL table Primary Key schema',
    ],
    correctIndices: [0, 1],
    explanation: 'Each stack frame saves the return address, parameter values, and local variables.',
  },
  {
    id: 'al-cs-8-2-q5',
    subtopicId: 'al-cs-8-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give one advantage of Recursion and one advantage of Iteration for implementing algorithms. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Recursion produces shorter, clearer code for naturally hierarchical problems like tree traversals and merge sort; iteration uses O(1) constant memory with no stack-frame overhead and cannot cause a stack overflow.',
      markPoints: [
        { id: 'mp1', markDescription: 'Recursion: concise/readable/natural fit for trees, DFS, or divide-and-conquer', requiredKeywordGroups: [['shorter', 'concise', 'clear', 'readable', 'tree', 'elegant']] },
        { id: 'mp2', markDescription: 'Iteration: less memory / faster / no stack-frame overhead / no stack overflow', requiredKeywordGroups: [['memory', 'ram', 'stack overflow', 'faster', 'overhead', 'o(1)']] },
      ],
    },
    explanation: 'Recursion shines on hierarchical data; iteration avoids call-stack RAM overhead and stack-overflow crashes.',
  },

  // al-cs-8-3
  {
    id: 'al-cs-8-3-q1',
    subtopicId: 'al-cs-8-3',
    type: 'mcq',
    marks: 1,
    prompt: 'In the A* shortest-path algorithm, what do `g(n)` and `h(n)` represent in `f(n) = g(n) + h(n)`?',
    options: [
      '`g(n)` is the exact known cost from Start to `n`; `h(n)` is the heuristic estimate from `n` to the Goal',
      '`g(n)` is the random guess; `h(n)` is the total graph memory in bytes',
      '`g(n)` is the edge count; `h(n)` is always greater than the true remaining distance',
      'Both `g(n)` and `h(n)` are always 0',
    ],
    correctIndex: 0,
    explanation: 'A* balances actual accumulated path cost `g(n)` plus admissible remaining estimate `h(n)`.',
  },
  {
    id: 'al-cs-8-3-q2',
    subtopicId: 'al-cs-8-3',
    type: 'mcq',
    marks: 1,
    prompt: 'Which Machine Learning paradigm trains an autonomous robot agent through trial-and-error REWARDS and PENALTIES in an interactive environment?',
    options: ['Reinforcement learning', 'Supervised learning', 'Unsupervised clustering', 'Linear probing'],
    correctIndex: 0,
    explanation: 'Reinforcement learning maximises cumulative environment rewards through feedback on agent actions.',
  },
  {
    id: 'al-cs-8-3-q3',
    subtopicId: 'al-cs-8-3',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Artificial Neural Network training summary.',
    segments: ['Deep Learning networks contain multiple ', ' layers, and adjust edge weights iteratively from output error using ', '.'],
    wordBank: ['hidden', 'backpropagation', 'linked', 'transport'],
    answers: ['hidden', 'backpropagation'],
    explanation: 'Deep Learning stacks many hidden layers trained by propagating output error backward via Backpropagation.',
  },
  {
    id: 'al-cs-8-3-q4',
    subtopicId: 'al-cs-8-3',
    type: 'matching',
    marks: 2,
    prompt: 'Match each graph or AI term to its definition.',
    pairs: [
      { left: 'Adjacency List', right: 'Memory-efficient O(V + E) graph representation for sparse networks' },
      { left: 'Unsupervised Learning', right: 'Finds hidden clusters/patterns inside unlabelled training data' },
      { left: 'Admissible Heuristic', right: 'Never overestimates true remaining distance so A* stays optimal' },
    ],
    explanation: 'Adjacency lists save RAM on sparse graphs, unsupervised ML clusters unlabelled data, and admissible heuristics keep A* optimal.',
  },
  {
    id: 'al-cs-8-3-q5',
    subtopicId: 'al-cs-8-3',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why A* pathfinding is typically faster than Dijkstra’s algorithm on a large city road network while still finding the optimal shortest route. [2 marks]',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A* uses an admissible heuristic `h(n)` (which never overestimates remaining distance) inside `f(n) = g(n) + h(n)` to guide exploration directly toward the destination, expanding far fewer irrelevant nodes than uninformed Dijkstra while preserving optimality.',
      markPoints: [
        { id: 'mp1', markDescription: 'Uses heuristic `h(n)` in `f(n)=g(n)+h(n)` to steer toward goal / expand fewer nodes', requiredKeywordGroups: [['heuristic', 'h(n)'], ['fewer node', 'steer', 'guide', 'toward', 'goal']] },
        { id: 'mp2', markDescription: 'Admissible heuristic never overestimates remaining cost, keeping path optimal', requiredKeywordGroups: [['admissible', 'never overestimate', 'not overestimate', 'optimal']] },
      ],
    },
    explanation: 'An admissible heuristic focuses A* toward the goal without missing the true shortest path.',
  },
];

export const ALEVEL_CS_UNITS_7_8_FLASHCARDS: FlashcardItem[] = [
  // al-cs-7-1
  { id: 'al-cs-7-1-fc1', subtopicId: 'al-cs-7-1', front: 'Write the Stack `Push` and `Pop` boundary checks.', backBullets: ['`Push`: check `TopPointer = MaxSize` (Overflow) before incrementing `TopPointer`.', '`Pop`: check `TopPointer = 0` or `−1` (Underflow) before returning and decrementing.'] },
  { id: 'al-cs-7-1-fc2', subtopicId: 'al-cs-7-1', front: 'Write the Circular Queue pointer wrap-around formula.', backBullets: ['`TailPointer ← (TailPointer + 1) MOD MaxSize` and `HeadPointer ← (HeadPointer + 1) MOD MaxSize`.', 'Track `NumberOfItems` cleanly to distinguish Queue Full from Queue Empty!'] },
  { id: 'al-cs-7-1-fc3', subtopicId: 'al-cs-7-1', front: 'List the 4 steps to insert into an ordered array-backed Linked List.', backBullets: ['1. Pop node from `FreeListPointer` (guard full = `−1`). 2. Store `Data`.', '3. Walk `StartPointer` tracking `Prev`/`Curr`. 4. Rewire `New.Next ← Curr` & `Prev.Next ← New` (or `StartPointer`).'] },
  { id: 'al-cs-7-1-fc4', subtopicId: 'al-cs-7-1', front: 'What 2 pointer steps delete a node in an array-backed Linked List without leaking memory?', backBullets: ['Bypass deleted node: `List[Prev].Next ← List[Curr].Next`.', 'Recycle slot onto Free List: `List[Curr].Next ← FreeListPointer; FreeListPointer ← Curr`.'] },
  { id: 'al-cs-7-1-fc5', subtopicId: 'al-cs-7-1', front: 'Compare Random Access vs Middle Insertion on an Array vs Linked List.', backBullets: ['Array: `O(1)` random index access, `O(n)` middle insert/delete (shifting).', 'Linked List: `O(n)` sequential access, `O(1)` pointer rewire once position is found.'] },

  // al-cs-7-2
  { id: 'al-cs-7-2-fc1', subtopicId: 'al-cs-7-2', front: 'State the Binary Search Tree invariant and its balanced vs worst search complexity.', backBullets: ['Every left-subtree key < parent key < every right-subtree key.', 'Balanced BST searches in `O(log n)`; skewed sorted insertions degrade to `O(n)`.'] },
  { id: 'al-cs-7-2-fc2', subtopicId: 'al-cs-7-2', front: 'State the visit orders and primary uses of Pre-Order, In-Order, and Post-Order.', backBullets: ['Pre (`R-L-Ri`): clone/serialise tree. In (`L-R-Ri`): sorted ascending BST output.', 'Post (`L-Ri-R`): Reverse Polish Notation (RPN) & bottom-up tree deletion.'] },
  { id: 'al-cs-7-2-fc3', subtopicId: 'al-cs-7-2', front: 'How does a Hash Table provide `O(1)` average lookup?', backBullets: ['Applies a hash function (e.g. `Key MOD TableSize`) directly to compute the slot index.', 'Jumps straight to that array address without searching sequentially or down a tree.'] },
  { id: 'al-cs-7-2-fc4', subtopicId: 'al-cs-7-2', front: 'Contrast Open Addressing (Linear Probing) vs Chaining for Hash Collisions.', backBullets: ['Open Addressing: probes sequentially `(idx + 1) MOD Size` for next empty slot inside array.', 'Chaining: stores colliding items in a linked list attached to each hash slot.'] },
  { id: 'al-cs-7-2-fc5', subtopicId: 'al-cs-7-2', front: 'Why are tombstone markers needed when deleting from a linear-probed hash table?', backBullets: ['Clearing a slot to empty prematurely stops probes searching for later colliding keys.', 'A deleted tombstone lets searches continue probing while allowing future inserts to reuse the slot.'] },

  // al-cs-7-3
  { id: 'al-cs-7-3-fc1', subtopicId: 'al-cs-7-3', front: 'Write the Binary Search midpoint and boundary update rules.', backBullets: ['`Mid ← (Low + High) DIV 2`; loop `WHILE NOT Found AND Low <= High`.', 'If `Arr[Mid] < Target` → `Low ← Mid + 1`; else `High ← Mid - 1`.'] },
  { id: 'al-cs-7-3-fc2', subtopicId: 'al-cs-7-3', front: 'Trace how Insertion Sort places `Key ← Arr[i]`.', backBullets: ['Shifts larger elements in the sorted left prefix (`Arr[j] > Key`) one slot right (`Arr[j+1] ← Arr[j]`).', 'Inserts `Key` into `Arr[j + 1]`; `O(n)` best case on nearly sorted arrays, `O(n²)` worst.'] },
  { id: 'al-cs-7-3-fc3', subtopicId: 'al-cs-7-3', front: 'Explain the two phases of Merge Sort and its time/space complexity.', backBullets: ['Divide: recursively halve arrays until size 1 (`log n` levels). Conquer: merge sorted halves linearly (`O(n)`).', 'Guaranteed `O(n log n)` time in all cases; requires `O(n)` auxiliary memory.'] },
  { id: 'al-cs-7-3-fc4', subtopicId: 'al-cs-7-3', front: 'When is Linear Search preferable to Binary Search?', backBullets: ['When data is UNSORTED and searched only once (pre-sorting costs `O(n log n)` > `O(n)`).', 'Or on tiny arrays where loop overhead is negligible.'] },
  { id: 'al-cs-7-3-fc5', subtopicId: 'al-cs-7-3', front: 'What is the maximum number of Binary Search comparisons on `n = 1,000,000` sorted records?', backBullets: ['`⌊log₂(1,000,000)⌋ + 1 = 20` comparisons!', 'Compare with up to `1,000,000` comparisons for Linear Search!'] },

  // al-cs-8-1
  { id: 'al-cs-8-1-fc1', subtopicId: 'al-cs-8-1', front: 'Define Encapsulation in OOP and explain why attributes are declared `PRIVATE`.', backBullets: ['Bundles `PRIVATE` attributes with `PUBLIC` getter/setter methods inside a class.', 'Prevents invalid direct external edits, enforcing validation and hiding internal layout.'] },
  { id: 'al-cs-8-1-fc2', subtopicId: 'al-cs-8-1', front: 'Contrast Inheritance (`IS-A`) and Containment (`HAS-A`).', backBullets: ['Inheritance: subclass inherits & extends superclass attributes/methods (`EBook IS-A Book`).', 'Containment (Aggregation): class holds instances of another class as fields (`Library HAS-A Book[]`).'] },
  { id: 'al-cs-8-1-fc3', subtopicId: 'al-cs-8-1', front: 'Define Polymorphism (method overriding) in CIE 9618 OOP.', backBullets: ['Subclass redefines an inherited method with the exact same name/signature.', 'Calling that method on mixed subclass objects dynamically runs each class’s specialised version.'] },
  { id: 'al-cs-8-1-fc4', subtopicId: 'al-cs-8-1', front: 'Contrast Serial, Sequential, and Random Access file organisations.', backBullets: ['Serial: chronological append (unsorted). Sequential: sorted by key field.', 'Random: hash computes direct disk address (`SEEK`/`GETRECORD`) for `O(1)` access.'] },
  { id: 'al-cs-8-1-fc5', subtopicId: 'al-cs-8-1', front: 'What is the purpose of `TRY ... EXCEPT` exception handling?', backBullets: ['Catches unexpected runtime errors (missing file, zero division, invalid type cast) gracefully.', 'Prevents abrupt program crashes and allows clean error messages and resource cleanup.'] },

  // al-cs-8-2
  { id: 'al-cs-8-2-fc1', subtopicId: 'al-cs-8-2', front: 'Name the 3 mandatory properties of a valid recursive subroutine.', backBullets: ['1. Base Case (stops without recursing). 2. General Case (calls itself on smaller input).', '3. Guaranteed convergence toward the Base Case on every branch.'] },
  { id: 'al-cs-8-2-fc2', subtopicId: 'al-cs-8-2', front: 'What 3 items does the compiler push onto each Call Stack Frame?', backBullets: ['1. Return address (next instruction after call).', '2. Parameter values and 3. Local variables for that specific invocation.'] },
  { id: 'al-cs-8-2-fc3', subtopicId: 'al-cs-8-2', front: 'Contrast the Winding and Unwinding phases of recursion.', backBullets: ['Winding: calls nest deeper pushing stack frames until the Base Case triggers.', 'Unwinding: stack frames pop in LIFO order computing and returning intermediate results up.'] },
  { id: 'al-cs-8-2-fc4', subtopicId: 'al-cs-8-2', front: 'Why can deep recursion cause a Stack Overflow crash whereas iteration will not?', backBullets: ['Recursion consumes `O(depth)` stack-frame RAM per nested call until stack limits exhaust.', 'Iteration reuses fixed `O(1)` local variables inside one single frame.'] },
  { id: 'al-cs-8-2-fc5', subtopicId: 'al-cs-8-2', front: 'Name 3 CS problems where recursion produces dramatically cleaner code than iteration.', backBullets: ['Binary Tree Traversals (Pre/In/Post-Order) and Merge Sort / Quick Sort.', 'Depth-First Search (DFS) on graphs and nested folder/directory scanning.'] },

  // al-cs-8-3
  { id: 'al-cs-8-3-fc1', subtopicId: 'al-cs-8-3', front: 'Contrast an Adjacency Matrix and an Adjacency List for storing a weighted graph.', backBullets: ['Adjacency Matrix: `O(1)` edge lookup, wastes `O(V²)` RAM on sparse graphs.', 'Adjacency List: compact `O(V + E)` memory for sparse graphs, `O(degree)` edge check.'] },
  { id: 'al-cs-8-3-fc2', subtopicId: 'al-cs-8-3', front: 'Summarise Dijkstra’s Shortest Path algorithm.', backBullets: ['Init `dist[Start]=0`, others `∞`; repeatedly expand lowest-cost unvisited node `u`.', 'Relax neighbours if `dist[u] + w(u,v) < dist[v]`; record `prev[v] ← u` to reconstruct path.'] },
  { id: 'al-cs-8-3-fc3', subtopicId: 'al-cs-8-3', front: 'State the A* evaluation formula and what makes a heuristic admissible.', backBullets: ['`f(n) = g(n) + h(n)` (actual cost from start + estimated remaining cost to goal).', 'Admissible = `h(n)` NEVER overestimates true remaining cost, guaranteeing the optimal path.'] },
  { id: 'al-cs-8-3-fc4', subtopicId: 'al-cs-8-3', front: 'Distinguish Supervised, Unsupervised, Reinforcement, and Deep Learning.', backBullets: ['Supervised: labelled examples. Unsupervised: clusters unlabelled data.', 'Reinforcement: agent learns via rewards/penalties. Deep Learning: multi-hidden-layer Neural Nets.'] },
  { id: 'al-cs-8-3-fc5', subtopicId: 'al-cs-8-3', front: 'Explain how Backpropagation trains an Artificial Neural Network.', backBullets: ['Compares forward-pass prediction against target label to measure error (loss).', 'Propagates error gradients backward through hidden layers, iteratively tuning edge weights to minimise error.'] },
];

export const ALEVEL_CS_UNITS_7_8_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'al-cs-ex-7-1',
    subtopicId: 'al-cs-7-1',
    number: 15,
    stimulus: 'Cambridge International A-Level 9618 Paper 4: An OS print server stores pending jobs in a 0-indexed Circular Queue of `MaxSize = 8` with `HeadPointer = 5`, `TailPointer = 7`, and `NumberOfItems = 3`.',
    diagram: 'adt-structures',
    parts: [
      {
        id: 'al-cs-ex-7-1-a',
        label: '(a)',
        prompt: 'Trace the values of `HeadPointer`, `TailPointer`, and `NumberOfItems` after two `Enqueue()` operations followed by one `Dequeue()` operation. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'First Enqueue wraps TailPointer to (7+1) MOD 8 = 0 (Count=4); second Enqueue sets TailPointer = 1 (Count=5); Dequeue advances HeadPointer to (5+1) MOD 8 = 6 and decrements NumberOfItems to 4. Final state: HeadPointer = 6, TailPointer = 1, NumberOfItems = 4.',
          markPoints: [
            { id: 'mp1', markDescription: 'Final TailPointer = 1 (wrapped via MOD 8)', requiredKeywordGroups: [['tailpointer = 1', 'tail = 1', '1']] },
            { id: 'mp2', markDescription: 'Final HeadPointer = 6', requiredKeywordGroups: [['headpointer = 6', 'head = 6', '6']] },
            { id: 'mp3', markDescription: 'Final NumberOfItems = 4', requiredKeywordGroups: [['numberofitems = 4', 'count = 4', '4']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-7-2',
    subtopicId: 'al-cs-7-2',
    number: 16,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: Values `40, 20, 60, 10, 30, 50` are inserted in order into an initially empty Binary Search Tree.',
    parts: [
      {
        id: 'al-cs-ex-7-2-a',
        label: '(a)',
        prompt: 'Write the exact Pre-Order, In-Order, and Post-Order traversal outputs of the resulting Binary Search Tree. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Pre-Order: 40, 20, 10, 30, 60, 50. In-Order: 10, 20, 30, 40, 50, 60. Post-Order: 10, 30, 20, 50, 60, 40.',
          markPoints: [
            { id: 'mp1', markDescription: 'Pre-Order: 40, 20, 10, 30, 60, 50', requiredKeywordGroups: [['40, 20, 10, 30, 60, 50', '40 20 10 30 60 50']] },
            { id: 'mp2', markDescription: 'In-Order: 10, 20, 30, 40, 50, 60', requiredKeywordGroups: [['10, 20, 30, 40, 50, 60', '10 20 30 40 50 60']] },
            { id: 'mp3', markDescription: 'Post-Order: 10, 30, 20, 50, 60, 40', requiredKeywordGroups: [['10, 30, 20, 50, 60, 40', '10 30 20 50 60 40']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-7-3',
    subtopicId: 'al-cs-7-3',
    number: 17,
    stimulus: 'Cambridge International A-Level 9618 Paper 4: A search engine must sort 500,000 customer IDs daily so it can answer 10,000 instant lookup queries per second.',
    diagram: 'sorting-searching-trace',
    parts: [
      {
        id: 'al-cs-ex-7-3-a',
        label: '(a)',
        prompt: 'Justify choosing Merge Sort (`O(n log n)`) over Insertion Sort (`O(n²)`) for the daily sort, and Binary Search (`O(log n)`) over Linear Search (`O(n)`) for the live queries. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'For 500,000 unsorted IDs, Merge Sort guarantees O(n log n) worst-case performance (~9.5M ops) whereas quadratic Insertion Sort O(n²) degrades to ~2.5×10¹¹ ops (accepting Merge Sort’s O(n) extra RAM trade-off). Once sorted, Binary Search halves the search range each step in O(log n) (at most 19 comparisons) versus up to 500,000 comparisons for Linear Search.',
          markPoints: [
            { id: 'mp1', markDescription: 'Merge Sort guarantees O(n log n) vs Insertion Sort O(n²) on large 500k dataset', requiredKeywordGroups: [['o(n log n)', 'merge sort'], ['o(n²)', 'o(n^2)', 'insertion']] },
            { id: 'mp2', markDescription: 'Notes Merge Sort trade-off: requires O(n) auxiliary RAM', requiredKeywordGroups: [['o(n)', 'memory', 'ram', 'space']] },
            { id: 'mp3', markDescription: 'Binary Search leverages sorted order for O(log n) (~19 checks)', requiredKeywordGroups: [['binary search', 'o(log n)', 'halve']] },
            { id: 'mp4', markDescription: 'Far faster than O(n) Linear Search across 10,000 queries/sec', requiredKeywordGroups: [['linear search', 'o(n)', '500,000', 'faster']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-8-1',
    subtopicId: 'al-cs-8-1',
    number: 18,
    stimulus: 'Cambridge International A-Level 9618 Paper 4: A library platform defines a base class `MediaItem` (`PRIVATE Title`, `PUBLIC FUNCTION GetLoanDays()`) and subclasses `Book` (21 days) and `DVD` (7 days), loading catalogue records from a file.',
    parts: [
      {
        id: 'al-cs-ex-8-1-a',
        label: '(a)',
        prompt: 'Explain how Encapsulation, Inheritance, Polymorphism, and Exception Handling each contribute to this library platform. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Encapsulation keeps Title PRIVATE and protects integrity via public getters/setters; Inheritance lets Book and DVD reuse MediaItem attributes and methods; Polymorphism allows Book and DVD to override GetLoanDays() returning 21 vs 7 dynamically; Exception Handling (TRY/EXCEPT) catches missing or corrupted catalogue files cleanly without crashing.',
          markPoints: [
            { id: 'mp1', markDescription: 'Encapsulation: PRIVATE attributes accessed via public getters/setters', requiredKeywordGroups: [['encapsulation'], ['private', 'getter', 'setter']] },
            { id: 'mp2', markDescription: 'Inheritance: Book/DVD reuse base MediaItem members', requiredKeywordGroups: [['inheritance'], ['reuse', 'base', 'superclass', 'mediaitem']] },
            { id: 'mp3', markDescription: 'Polymorphism: overriding GetLoanDays() for subclass-specific behaviour', requiredKeywordGroups: [['polymorphism'], ['overrid', 'getloandays', '21', '7']] },
            { id: 'mp4', markDescription: 'Exception Handling: TRY/EXCEPT traps missing file errors without crash', requiredKeywordGroups: [['exception', 'try'], ['crash', 'missing', 'file']] },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-8-2',
    subtopicId: 'al-cs-8-2',
    number: 19,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: Consider `FUNCTION Power(Base : INTEGER, Exp : INTEGER) RETURNS INTEGER: IF Exp = 0 THEN RETURN 1 ELSE RETURN Base * Power(Base, Exp - 1) ENDIF`.',
    parts: [
      {
        id: 'al-cs-ex-8-2-a',
        label: '(a)',
        prompt: 'Identify the Base Case and General Case, name the three items pushed per Call Stack Frame, and trace the final return value of `Power(3, 3)`. [3 marks]',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Base Case is `Exp = 0` returning 1; General Case is `Base * Power(Base, Exp - 1)`. Each Call Stack Frame stores the return address, parameter values (Base, Exp), and local variables. Unwinding Power(3,3) computes 3 × (3 × (3 × 1)) = 27.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies Base Case (`Exp = 0 → 1`) and General Case', requiredKeywordGroups: [['exp = 0', 'base case'], ['general case', 'exp - 1']] },
            { id: 'mp2', markDescription: 'Names return address, parameters, and local variables on stack frame', requiredKeywordGroups: [['return address'], ['parameter', 'local']] },
            { id: 'mp3', markDescription: 'Final return value = 27', numericMatch: { value: 27, tolerance: 0.01 } },
          ],
        },
      },
    ],
  },
  {
    id: 'al-cs-ex-8-3',
    subtopicId: 'al-cs-8-3',
    number: 20,
    stimulus: 'Cambridge International A-Level 9618 Paper 3: A medical imaging startup trains a multi-layer Artificial Neural Network on 200,000 labelled X-ray scans to classify pneumonia vs healthy lungs.',
    parts: [
      {
        id: 'al-cs-ex-8-3-a',
        label: '(a)',
        prompt: 'Identify the ML paradigm used (including Deep Learning), and explain how hidden layers and Backpropagation enable the network to improve accuracy over training epochs. [4 marks]',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Because the scans are labelled, this uses Supervised Deep Learning. Multiple hidden layers extract progressively abstract visual features via weighted sums and activation functions; after each forward pass, Backpropagation computes the error between predicted and true labels and propagates gradients backward to iteratively adjust edge weights and biases, minimising error.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies Supervised Learning (labelled data) + Deep Learning', requiredKeywordGroups: [['supervised'], ['label', 'deep learning']] },
            { id: 'mp2', markDescription: 'Multiple hidden layers extract hierarchical features with weighted edges/activations', requiredKeywordGroups: [['hidden layer'], ['weight', 'feature', 'activation']] },
            { id: 'mp3', markDescription: 'Backpropagation compares output vs target label to compute error', requiredKeywordGroups: [['backpropagation'], ['error', 'loss', 'compare']] },
            { id: 'mp4', markDescription: 'Iteratively adjusts edge weights/biases across epochs to minimise error', requiredKeywordGroups: [['adjust', 'update', 'tune'], ['weight']] },
          ],
        },
      },
    ],
  },
];
