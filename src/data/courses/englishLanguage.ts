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

export const ENGLISH_LANGUAGE_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Reading Comprehension & Language Analysis',
    subtopics: [
      { id: 'englang-1-1', code: '1.1', slug: '1.1-explicit-implicit-meaning-inference', title: 'Explicit vs Implicit Meaning, Inference & Own-Words Paraphrasing', readingMinutes: 9, hasDeepContent: true },
      { id: 'englang-1-2', code: '1.2', slug: '1.2-writers-effect-imagery-language-analysis', title: 'Writer’s Effect, Imagery, Connotation & Structural Analysis', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Summary & Directed Writing',
    subtopics: [
      { id: 'englang-2-1', code: '2.1', slug: '2.1-summary-writing-concision-synthesis', title: 'Summary Writing: Selecting 15 Points, Own Words & Concision', readingMinutes: 9, hasDeepContent: true },
      { id: 'englang-2-2', code: '2.2', slug: '2.2-directed-writing-varpf-text-types', title: 'Directed Writing: Letters, Speeches, Articles, Interviews & Reports', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Narrative & Descriptive Composition',
    subtopics: [
      { id: 'englang-3-1', code: '3.1', slug: '3.1-descriptive-narrative-composition-craft', title: 'Descriptive & Narrative Composition: Show Don’t Tell, Structure & Voice', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Argumentative Writing & Technical Accuracy',
    subtopics: [
      { id: 'englang-4-1', code: '4.1', slug: '4.1-persuasive-rhetoric-spag-punctuation', title: 'Persuasive & Discursive Rhetoric + Grammar & Punctuation Precision', readingMinutes: 10, hasDeepContent: true },
    ],
  },
];

export const ENGLISH_LANGUAGE_NOTES: Record<string, NoteLesson> = {
  'englang-1-1': {
    subtopicId: 'englang-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Explicit vs Implicit Meaning, Inference & Own-Words Paraphrasing',
    readingMinutes: 9,
    videoTitle: '2026 AQA English Language Paper 1 Question 1: Your Guide',
    youtubeId: 'OlIwGb7bSOI',
    videoChannel: 'Mr Bruff',
    videoDuration: '6:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE First Language English (0500)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Explicit Retrieval vs Implicit Inference', cardId: 'englang-1-1-c1' },
      { time: '2:15', seconds: 135, label: 'Using Your Own Words Without Losing Precision', cardId: 'englang-1-1-c2' },
      { time: '4:30', seconds: 270, label: 'Identifying Tone, Attitude & Bias', cardId: 'englang-1-1-c3' },
    ],
    cards: [
      {
        id: 'englang-1-1-c1',
        title: 'Explicit Meaning vs Implicit Meaning (Inference)',
        summary: 'Explicit facts are stated directly on the page; implicit meanings are deduced by reading between the lines using textual clues.',
        bullets: [
          '**Explicit meaning** - information stated directly and literally in the passage (copy briefly or pinpoint precisely when asked "Give two facts...").',
          '**Implicit meaning (inference)** - attitudes, emotions, or causes **suggested** rather than stated outright (look at body language, word choice, and contrasts).',
        ],
        subsections: [
          {
            heading: 'Worked Inference Example',
            bullets: [
              '**Reading clues** - ask *why* a character behaves a certain way or *what attitude* a verb reveals.',
            ],
            exampleHeading: 'Worked example: "Maya folded the brochure sharply and shoved it under three textbooks."',
            examples: [
              'Explicit: Maya folds a brochure and hides it under books.',
              'Implicit: Maya feels frustrated, reluctant, or anxious about the event/opportunity advertised and wants to avoid thinking about it.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'inference', definition: 'A logical conclusion about an unstated feeling, attitude, or meaning deduced from textual clues.' },
          { term: 'explicit meaning', definition: 'Information stated directly and unambiguously on the surface of a text.' },
        ],
      },
      {
        id: 'englang-1-1-c2',
        title: 'Answering "Using Your Own Words"',
        summary: 'Replace EVERY key content word with an accurate synonym rather than rearranging the passage’s original words.',
        bullets: [
          '**Zero-lift rule** - when Cambridge 0500 Paper 1 asks "Using your own words, explain...", lifting key words from the text scores **0 marks** even if your meaning is right!',
        ],
        subsections: [
          {
            heading: 'Two-Step Own-Words Technique',
            bullets: [
              '**Step 1** - underline the 2–3 exact keywords in the quote; **Step 2** - replace EACH keyword with a precise synonym matching the context (check you didn’t weaken or distort the meaning).',
            ],
            exampleHeading: 'Worked paraphrase: "The expedition stalled due to relentless gales and dwindling rations."',
            examples: [
              'Own words: The journey was forced to halt because of **non-stop fierce winds** and **rapidly running-out food supplies**.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'paraphrase', definition: 'Restating a writer’s exact meaning completely in fresh, original vocabulary without lifting source wording.' },
        ],
      },
      {
        id: 'englang-1-1-c3',
        title: 'Spotting Tone, Attitude & Bias',
        summary: 'Pinpoint a writer’s stance with precise adjectives (sceptical, reverent, sardonic, nostalgic) rather than vague words like "positive".',
        bullets: [
          '**Precision vocabulary for tone** - replace "happy/sad/angry" with exact tone words: **ironic, cynical, admiring, nostalgic, urgent, dismissive, apprehensive**.',
        ],
        subsections: [
          {
            heading: 'Detecting Bias in Non-Fiction',
            bullets: [
              '**Signs of bias** - one-sided statistics, loaded/emotive adjectives ("reckless scheme" vs "bold vision"), and omitting counterarguments.',
            ],
            exampleHeading: 'Concrete comparison: Neutral vs Biased reporting',
            examples: [
              'Neutral: "The council proposed a 5% parking fee increase." Biased: "Greedy bureaucrats are plotting yet another punishing raid on motorists."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tone', definition: 'The writer’s attitude or emotional stance toward the subject or reader, conveyed through diction and syntax.' },
        ],
        memoryAid: 'Own-words questions = Underline EVERY key word in the quote and swap ALL of them!',
        commonMistake: 'NEVER answer an "in your own words" question by copying the main verb or adjective from the passage — even one lifted keyword can lose the mark!',
      },
    ],
    keyTerms: [
      { term: 'Explicit meaning', definition: 'Facts stated directly and literally in a text.' },
      { term: 'Inference', definition: 'Deduction of implied feelings, motives, or ideas from textual evidence.' },
      { term: 'Paraphrase', definition: 'Restating a source idea cleanly in your own original words.' },
      { term: 'Tone', definition: 'The writer’s attitude or emotional voice created through word choice.' },
    ],
    checklistPoints: [
      'Distinguish explicit surface retrieval from implicit inference backed by textual clues',
      'Paraphrase every keyword accurately on "Using your own words" comprehension questions',
      'Identify nuanced tone, attitude, and emotive bias using precise adjectives',
    ],
  },

  'englang-1-2': {
    subtopicId: 'englang-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Writer’s Effect, Imagery, Connotation & Structural Analysis',
    readingMinutes: 10,
    videoTitle: 'AQA English Language Paper 1 Question 2 (2026 Onwards)',
    youtubeId: 'L_dE68iUg-k',
    videoChannel: 'Mr Bruff',
    videoDuration: '9:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE First Language English (0500)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Choosing Rich Quotes & Literal vs Figurative Meaning', cardId: 'englang-1-2-c1' },
      { time: '3:05', seconds: 185, label: 'Analysing Connotations, Verbs, Metaphors & Sensory Imagery', cardId: 'englang-1-2-c2' },
      { time: '6:10', seconds: 370, label: 'Sentence Structure, Pace & Top-Band 0500 Q2(d) Formula', cardId: 'englang-1-2-c3' },
    ],
    cards: [
      {
        id: 'englang-1-2-c1',
        title: 'Selecting High-Value Images & The 0500 Writer’s Effect Formula',
        summary: 'Pick 3 rich, concise phrases per paragraph, state the overall atmosphere first, then unpack literal meaning + connotations + effect.',
        bullets: [
          '**Cambridge 0500 Paper 1 Q2(d) golden structure** - (1) Open with a 1-sentence **overall effect/atmosphere** of the paragraph; (2) Analyse **3 strong, short phrases** (2–5 words each, never whole sentences!); (3) For EACH phrase, give its **literal/explicit meaning in context** AND its **figurative connotations/emotional effect**.',
        ],
        subsections: [
          {
            heading: 'What Makes a Quote Worth Selecting?',
            bullets: [
              '**Choose imagery & vivid verbs** - metaphors, similes, personification, violent/delicate verbs, oxymorons, or sensory contrasts — avoid bland factual phrases.',
            ],
            exampleHeading: 'Worked Band-5 mini-analysis: "the harbour swallowed the last sliver of amber light"',
            examples: [
              'Overall effect: creates a menacing, ominous twilight atmosphere.',
              'Analysis: The personification "swallowed" literally shows darkness covering the water, while connoting a predatory monster devouring the fragile "sliver" of warmth, making the harbour feel threatening and inescapable.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'connotation', definition: 'The secondary emotional associations, suggestions, or overtones carried by a word beyond its literal dictionary meaning.' },
          { term: 'personification', definition: 'Giving human actions, intentions, or emotions to an inanimate object or natural force.' },
        ],
      },
      {
        id: 'englang-1-2-c2',
        title: 'Figurative Language, Sound Devices & Semantic Fields',
        summary: 'Always link devices (metaphor, sibilance, semantic field) to the SPECIFIC mood or character insight — never just name-drop techniques.',
        bullets: [
          '**Key devices** - **Metaphor** (direct equation), **Simile** (like/as comparison), **Pathetic fallacy** (weather mirroring mood), **Sibilance** (soft/sinister `s`/`sh` sounds), **Plosives** (harsh `p`/`b`/`t`/`k` impact), **Semantic field** (cluster of related words, e.g. warfare or decay).',
        ],
        subsections: [
          {
            heading: 'Zooming In on Single Words',
            bullets: [
              '**Word-level zoom** - after analysing a phrase, isolate the **single sharpest verb or adjective** inside it to unlock top-band marks.',
            ],
            exampleHeading: 'Worked word zoom: "sliver" vs "piece"',
            examples: [
              'Using "sliver" rather than "piece" implies something razor-thin, delicate, and about to vanish completely.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'semantic field', definition: 'A deliberate group of words across a passage connected by a shared theme (e.g. battle, decay, light) to build a sustained atmosphere.' },
        ],
      },
      {
        id: 'englang-1-2-c3',
        title: 'Analysing Structure, Pacing & Banishing Empty Comments',
        summary: 'Short minor sentences accelerate tension; long multi-clause sentences mirror calm or overwhelm; banish generic phrases like "makes the reader want to read on".',
        bullets: [
          '**Structural choices** - **short sentences/fragments** create sudden shock or breathless pace; **lists (asyndetic/polysyndetic)** create overwhelming abundance; **juxtaposition/contrast** sharpens emotional shifts; **cyclical endings** evoke entrapment or resolution.',
        ],
        subsections: [
          {
            heading: 'Banned Empty Comments vs Top-Band Effects',
            bullets: [
              '**NEVER write** - "puts a picture in the reader’s head", "makes the reader want to read on", or "shows good description" (0 marks!).',
              '**ALWAYS write** - the EXACT emotion/impression created (e.g. "evokes claustrophobic dread", "highlights his brittle arrogance").',
            ],
            exampleHeading: 'Upgrade example',
            examples: [
              'Weak: "The metaphor makes it interesting." Strong: "Comparing the crowd to a surging tide removes their individuality, making the narrator feel helplessly swept away."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'juxtaposition', definition: 'Placing two contrasting images, ideas, or moods side by side to intensify their differences.' },
        ],
        memoryAid: '0500 Q2(d) = Overall Effect + 3 Short Quotes × (Literal Meaning + Connotation/Image + Specific Effect)!',
        commonMistake: 'NEVER quote a full 20-word sentence or write "puts an image in the reader’s mind" — pick 2–5 vivid words and explain their EXACT connotations!',
      },
    ],
    keyTerms: [
      { term: 'Connotation', definition: 'Emotional or symbolic associations suggested by a word beyond its literal meaning.' },
      { term: 'Personification', definition: 'Attributing human actions or intentions to non-human objects or nature.' },
      { term: 'Semantic field', definition: 'Cluster of thematically linked words sustaining a mood across a passage.' },
      { term: 'Juxtaposition', definition: 'Side-by-side placement of contrasting images or ideas for heightened effect.' },
    ],
    checklistPoints: [
      'Structure 0500 Writer’s Effect answers with overall atmosphere + 3 short quotes per paragraph',
      'Pair literal context meaning with figurative connotations and single-word zooms',
      'Analyse structural pacing and eliminate generic empty comments',
    ],
  },

  'englang-2-1': {
    subtopicId: 'englang-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Summary Writing: Selecting 15 Points, Own Words & Concision',
    readingMinutes: 9,
    videoTitle: '2026 AQA English Language Paper 2 Question 2: Your Guide',
    youtubeId: 'Y51zxEf4QYQ',
    videoChannel: 'Mr Bruff',
    videoDuration: '7:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE First Language English (0500)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Targeting 15 Distinct Content Points Strictly on Focus', cardId: 'englang-2-1-c1' },
      { time: '2:30', seconds: 150, label: 'Grouping Points & Writing Continuous Concise Prose (≤120 Words)', cardId: 'englang-2-1-c2' },
      { time: '5:00', seconds: 300, label: 'Avoiding Repetition, Quotations, Examples & Opinions', cardId: 'englang-2-1-c3' },
    ],
    cards: [
      {
        id: 'englang-2-1-c1',
        title: 'Selecting Relevant Points (The 15-Point Reading Target)',
        summary: 'Cambridge 0500 Paper 1 Q1(f) awards 10 marks for reading points and 5 marks for concise own-words writing within 120 words.',
        bullets: [
          '**Read the focus twice** - underline the EXACT topic required (e.g. "challenges faced by Antarctic researchers" — ignore general scenery or history!).',
          '**Hunt for 12–15 distinct points** - number every relevant fact in the margin before writing a single word so you hit full content marks even if one overlaps.',
        ],
        subsections: [
          {
            heading: 'What to Cut Immediately',
            bullets: [
              '**Exclude filler** - cut anecdotes, statistics/dates (unless core points), direct speech quotes, repeated points phrased differently, and your own opinions!',
            ],
            exampleHeading: 'Worked pruning example',
            examples: [
              'Source (26 words): "For instance, Dr Patel once waited six freezing hours outside Tent 4 because the fierce blizzards completely jammed the satellite dish."',
              'Concise point (7 words): "Severe storms frequently disrupt satellite communications."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'synthesis', definition: 'Combining multiple related facts from across a text cleanly into one concise, original sentence.' },
        ],
      },
      {
        id: 'englang-2-1-c2',
        title: 'Grouping Points & Writing Tight Continuous Prose (120 Words)',
        summary: 'Group related points logically and link them with concise connectives inside a strict 120-word ceiling.',
        bullets: [
          '**Continuous prose only** - write ONE cohesive paragraph (never bullet points!); aim for **100–120 words** (going significantly over 120 words penalises the writing mark!).',
          '**Pack 2–3 points per sentence** - use compact structures (`not only... but also`, `furthermore`, `consequently`, participle clauses) to stay crisp and fluent.',
        ],
        subsections: [
          {
            heading: 'Own-Words Discipline in Summaries',
            bullets: [
              '**Paraphrase without inflating word count** - swap original phrases for tighter single words (e.g. "did not have enough money" → "lacked funds").',
            ],
            exampleHeading: 'Worked synthesis of 3 points in 19 words',
            examples: [
              '"Not only do extreme temperatures drain battery power rapidly, but isolation also harms crew morale and delays medical evacuations."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'concision', definition: 'Expressing maximum factual content in the fewest clear, grammatically accurate words.' },
        ],
      },
      {
        id: 'englang-2-1-c3',
        title: 'Five Fatal Summary Mistakes to Avoid',
        summary: 'Stay objective, skip introductions/conclusions, never copy chunks, never include personal opinions, and never exceed the word limit.',
        bullets: [
          '**Zero intro / zero conclusion** - start directly with Point 1 in sentence 1 (do NOT waste 15 words writing "In this passage the author talks about...").',
          '**Objective third-person tone** - remain neutral and factual; never add outside knowledge not found in the text.',
        ],
        subsections: [
          {
            heading: 'Final 30-Second Word-Count Audit',
            bullets: [
              '**Count words accurately** - hyphenated compounds count as one word; trim redundant adjectives if over 120 words.',
            ],
            exampleHeading: 'Quick trim check',
            examples: [
              '"In order to reduce the amount of" (7 words) → "To cut" (2 words) — saves 5 words instantly!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'continuous prose', definition: 'Connected sentences arranged in paragraph form without bullet points or subheadings.' },
        ],
        memoryAid: '0500 Summary = 15 points → Group → Continuous prose → Own words → ≤120 words → Zero intro/opinion!',
        commonMistake: 'NEVER waste words on "This summary will discuss..." or copy full phrases verbatim — jump straight into Point 1 in your own words!',
      },
    ],
    keyTerms: [
      { term: 'Synthesis', definition: 'Merging related points smoothly into compact original sentences.' },
      { term: 'Concision', definition: 'Conveying full factual meaning in the fewest clear words.' },
      { term: 'Continuous prose', definition: 'Full connected paragraph writing without bullet lists.' },
      { term: 'Objective tone', definition: 'Neutral, factual voice free of personal opinion or bias.' },
    ],
    checklistPoints: [
      'Identify 12–15 distinct focus-matched content points while cutting anecdotes and quotes',
      'Synthesise grouped points into fluent own-words continuous prose within 120 words',
      'Eliminate filler introductions, personal opinions, and repetition',
    ],
  },

  'englang-2-2': {
    subtopicId: 'englang-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Directed Writing: Letters, Speeches, Articles, Interviews & Reports',
    readingMinutes: 10,
    videoTitle: 'GCSE English Language: Writing An Article',
    youtubeId: '60NkImwWrvc',
    videoChannel: 'Mr Bruff',
    videoDuration: '8:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE First Language English (0500)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'VARPF: Voice, Audience, Register, Purpose & Format', cardId: 'englang-2-2-c1' },
      { time: '2:55', seconds: 175, label: 'Covering All Three Prompt Bullets Equally & Developing Details', cardId: 'englang-2-2-c2' },
      { time: '5:50', seconds: 350, label: 'Format Conventions: Letter, Speech, Article, Report & Interview', cardId: 'englang-2-2-c3' },
    ],
    cards: [
      {
        id: 'englang-2-2-c1',
        title: 'Mastering VARPF & Sustaining Authentic Voice',
        summary: 'On Cambridge 0500 Paper 1 Q3 and Paper 2 Q1, adopt the exact persona, audience, register, and text-type conventions demanded by the prompt.',
        bullets: [
          '**VARPF checklist** - **V**oice (who are you writing as?), **A**udience (headteacher, teenager, town council?), **R**egister (formal, semi-formal, conversational?), **P**urpose (persuade, inform, reflect, evaluate?), **F**ormat (letter, speech, article, report, journal, interview).',
        ],
        subsections: [
          {
            heading: 'Register Calibration',
            bullets: [
              '**Formal report / formal letter** - impersonal or polite standard English, zero slang, clear topic sentences.',
              '**Speech / magazine article** - engaging direct address ("you/we"), rhetorical questions, punchy anecdotes, rhythmic variety.',
            ],
            exampleHeading: 'Concrete check: Journal vs Formal Report',
            examples: [
              'Journal: reflective first-person ("I still can’t shake the memory of..."). Formal Report: objective headings ("Findings", "Recommendations") and passive/formal phrasing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'register', definition: 'The level of formality in vocabulary and grammar chosen to suit a specific audience and purpose.' },
          { term: 'persona', definition: 'The fictional role or character voice a writer adopts in a Directed Writing response.' },
        ],
      },
      {
        id: 'englang-2-2-c2',
        title: 'The Three-Bullet Rule & Rooted Development',
        summary: 'Give equal, thorough coverage to ALL THREE prompt bullets (especially Bullet 3!) by inferring and developing directly from passage clues.',
        bullets: [
          '**Equal coverage of all 3 bullets** - Paper 1 Q3 ALWAYS gives 3 bullet points (Bullets 1–2 draw on explicit facts; **Bullet 3 tests implicit inference/future advice/feelings** — neglecting Bullet 3 caps your Reading mark!).',
          '**Rooted development** - expand passage clues plausibly in your own words without inventing wild, contradictory plotlines.',
        ],
        subsections: [
          {
            heading: 'Paper 2 Q1 Evaluation (Counterarguments)',
            bullets: [
              '**Evaluate BOTH texts** - don’t merely summarise Text A & Text B; **challenge, weigh, and judge** the arguments using counterarguments and real-world implications.',
            ],
            exampleHeading: 'Worked Paper 2 Q1 evaluative sentence',
            examples: [
              '"While Text A celebrates remote work for cutting commuter emissions, it overlooks the isolating impact on junior employees who rely on in-person mentoring."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'evaluation', definition: 'Weighing the strengths, weaknesses, assumptions, and implications of ideas in source texts rather than merely repeating them.' },
        ],
      },
      {
        id: 'englang-2-2-c3',
        title: 'Text-Type Format Conventions',
        summary: 'Use crisp, realistic layout markers without wasting time drawing boxes or pictures.',
        bullets: [
          '**Formal Letter** - `Dear Sir/Madam,` → `Yours faithfully,` | `Dear Mr Patel,` → `Yours sincerely,`.',
          '**Speech** - welcome audience directly, use spoken signposts ("Consider this...", "Finally..."), end with a memorable call to action.',
          '**Article** - snappy headline + subheading + engaging hook + lively sub-sections.',
          '**Report** - title, `Introduction`, 2–3 subheaded `Findings`, and `Recommendations`.',
          '**Interview** - use ONLY the 3 given interviewer questions as headings and write full, characterful spoken answers (no extra made-up questions!).',
        ],
        subsections: [
          {
            heading: 'Faithfully vs Sincerely Rule',
            bullets: [
              '**Easy trick** - never put two S’s together: **S**ir → **F**aithfully; **Name** → **S**incerely!',
            ],
            exampleHeading: 'Concrete check: Newspaper report lead',
            examples: [
              'Open with the 5 Ws (Who, What, Where, When, Why) in paragraph 1, include realistic witness quotes, and stay objective.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'directed writing', definition: 'A task requiring you to transform, develop, or evaluate ideas from one or more source texts into a new specified format and voice.' },
        ],
        memoryAid: 'VARPF + All 3 Bullets Equally + Zero Copying + Never Two S’s (Sir → Faithfully, Name → Sincerely)!',
        commonMistake: 'In 0500 Paper 1 Q3, NEVER copy sentences from the source text or rush Bullet 3 — allocate roughly one-third of your essay to EACH of the 3 bullets!',
      },
    ],
    keyTerms: [
      { term: 'Register', definition: 'Level of formality matched to audience, purpose, and text type.' },
      { term: 'Persona', definition: 'Adopted role or character voice in a Directed Writing task.' },
      { term: 'Evaluation', definition: 'Weighing and challenging arguments in source texts rather than summarising passively.' },
      { term: 'Directed writing', definition: 'Transforming source ideas into a new format, audience, and voice.' },
    ],
    checklistPoints: [
      'Apply VARPF to calibrate tone, format, and register for letters, speeches, articles, reports, and interviews',
      'Give balanced, own-words coverage to all 3 prompt bullets with text-rooted inference on Bullet 3',
      'Evaluate and challenge source arguments rather than merely summarising on Paper 2 Q1',
    ],
  },

  'englang-3-1': {
    subtopicId: 'englang-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Descriptive & Narrative Composition: Show Don’t Tell, Structure & Voice',
    readingMinutes: 10,
    videoTitle: '2026 Descriptive Writing: Secrets of the New Mark Scheme!',
    youtubeId: 'M4IE_jSK6lg',
    videoChannel: 'Mr Bruff',
    videoDuration: '10:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE First Language English (0500)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Descriptive Writing: Zoom Structure & Show Don’t Tell', cardId: 'englang-3-1-c1' },
      { time: '3:25', seconds: 205, label: 'Narrative Craft: Tight Scope, Pacing & Characterisation', cardId: 'englang-3-1-c2' },
      { time: '6:50', seconds: 410, label: 'Sensory Precision, Extended Metaphors & Sentence Craft', cardId: 'englang-3-1-c3' },
    ],
    cards: [
      {
        id: 'englang-3-1-c1',
        title: 'Descriptive Composition: Camera-Lens Zoom & Show, Don’t Tell',
        summary: 'Great descriptions avoid plot drift by zooming smoothly across 4–5 vivid focal points with a shift in mood or light.',
        bullets: [
          '**Zoom structure** - (1) Wide panoramic establishing shot; (2) Zoom in on a vivid foreground detail/sound; (3) Shift to a contrasting interior or human movement; (4) Subtle shift in weather, light, or mood; (5) Cyclical panoramic close echoing the opening.',
          '**Show, don’t tell** - instead of telling "The station was busy and scary", SHOW physical details: "Elbows clipped ribs beneath flickering fluorescent tubes as departure boards clacked relentlessly."',
        ],
        subsections: [
          {
            heading: 'Avoid Turning Description into a Story',
            bullets: [
              '**Stay descriptive** - focus on atmosphere, colour, texture, sound, and smell across a short moment rather than inventing dialogue and dramatic plot twists.',
            ],
            exampleHeading: 'Upgrade example: Telling vs Showing',
            examples: [
              'Telling: "He was very nervous." Showing: "His thumb worried the frayed hem of his cuff; every ticking second hammered behind his ribs."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'show, don’t tell', definition: 'Conveying emotion or atmosphere through concrete sensory details and actions instead of flatly naming the feeling.' },
        ],
      },
      {
        id: 'englang-3-1-c2',
        title: 'Narrative Composition: Small Canvas, Big Depth',
        summary: 'Write about ONE tight 10-minute turning point with 1–2 developed characters — never a sprawling action movie with 6 characters.',
        bullets: [
          '**5-part narrative arc** - **Hook/In medias res** (start inside action or tension) → **Rising tension / flashback** → **Emotional climax** → **Brief falling action** → **Resonant ending** (twist, echo, or quiet realisation — NEVER "and then I woke up"!).',
          '**Keep dialogue sparse** - use 2–4 sharp lines of realistic, properly punctuated speech to reveal character tension rather than pages of empty chat.',
        ],
        subsections: [
          {
            heading: 'Tense & Perspective Consistency',
            bullets: [
              '**Lock your tense** - choose past or present tense and stick to it cleanly unless executing a deliberate, clearly signposted flashback.',
            ],
            exampleHeading: 'Worked opening hook (in medias res)',
            examples: [
              '"The key snapped halfway inside the rusted padlock, leaving only the cold brass bow trembling between my fingers."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'in medias res', definition: 'Beginning a narrative directly in the middle of an action or moment of tension rather than with slow background exposition.' },
        ],
      },
      {
        id: 'englang-3-1-c3',
        title: 'Motifs, Extended Metaphors & Deliberate Sentence Variety',
        summary: 'Weave one recurring motif across the piece and vary sentence lengths intentionally for rhythm and climax.',
        bullets: [
          '**Motif / extended metaphor** - thread one recurring image (e.g. a cracked watch, encroaching fog, caged birds) from opening to closing paragraph to unify your essay.',
          '**Sentence craft** - pair flowing multi-clause descriptions with a stark **1–3 word minor sentence** at the exact moment of shock or realisation.',
        ],
        subsections: [
          {
            heading: 'Precision Verbs Beat Adjective Overload',
            bullets: [
              '**One sharp verb > three weak adjectives** - "the lantern **guttered**" hits harder than "the very old, slightly dim, weak lantern flickered".',
            ],
            exampleHeading: 'Worked rhythmic contrast',
            examples: [
              '"Across the flooded courtyard, gutters overflowed in silver ribbons and shutters slammed against damp brickwork. Then the siren stopped. Silence."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'motif', definition: 'A recurring image, object, or symbol woven across a composition to deepen theme and unity.' },
        ],
        memoryAid: 'Descriptive = Camera Zoom + 5 Senses + Mood Shift; Narrative = 1 Small Moment + 2 Characters + Sharp Motif!',
        commonMistake: 'NEVER end a story with "it was all a dream" or overstuff every noun with three thesaurus adjectives — natural, exact verbs always score higher!',
      },
    ],
    keyTerms: [
      { term: 'Show, don’t tell', definition: 'Revealing mood and emotion via concrete sensory action rather than flat labels.' },
      { term: 'In medias res', definition: 'Starting a story immediately inside action or conflict.' },
      { term: 'Motif', definition: 'Recurring symbol or image threaded through a piece for structural unity.' },
      { term: 'Cyclical structure', definition: 'Ending a composition by echoing or contrasting its opening image.' },
    ],
    checklistPoints: [
      'Plan descriptive pieces with a 5-stage camera-zoom structure and subtle atmospheric shift',
      'Focus narrative compositions on one tight moment with clear arc, sparse dialogue, and consistent tense',
      'Use precise verbs, show-don’t-tell sensory detail, a recurring motif, and varied sentence lengths',
    ],
  },

  'englang-4-1': {
    subtopicId: 'englang-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Persuasive & Discursive Rhetoric + Grammar & Punctuation Precision',
    readingMinutes: 10,
    videoTitle: 'Writing A Speech: AQA English Language Paper 2 Question 5',
    youtubeId: 'EMmAriRCl20',
    videoChannel: 'Mr Bruff',
    videoDuration: '8:55',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE First Language English (0500)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Persuasive Rhetoric (DAFOREST, Ethos/Pathos/Logos & Counterarguments)', cardId: 'englang-4-1-c1' },
      { time: '3:00', seconds: 180, label: 'Eliminating Comma Splices & Mastering Semicolons/Colons/Dashes', cardId: 'englang-4-1-c2' },
      { time: '6:00', seconds: 360, label: 'Speech Punctuation, Apostrophes & Homophones Proofreading', cardId: 'englang-4-1-c3' },
    ],
    cards: [
      {
        id: 'englang-4-1-c1',
        title: 'Persuasive & Discursive Structure + Rhetorical Craft',
        summary: 'Top persuasive writing balances logic (logos), emotion (pathos), credibility (ethos), and a pre-emptive counterargument.',
        bullets: [
          '**Aristotle’s triad** - **Ethos** (credibility/authority), **Pathos** (vivid human anecdote evoking empathy), **Logos** (clear reasoning, evidence, and cause-and-effect).',
          '**Counterargument & rebuttal** - conceding a reasonable opposing view ("Critics reasonably argue that...") before dismantling it ("Yet this overlooks...") shows mature Band-1 control.',
          '**Rhetorical toolkit** - direct address (`we`/`our`), rule of three (**tricolon**), **anaphora** (repeated sentence openings for rhythm), and well-placed rhetorical questions.',
        ],
        subsections: [
          {
            heading: 'Persuasive vs Discursive Tone',
            bullets: [
              '**Persuasive/Argumentative** - commits clearly to one stance from start to finish; **Discursive** - weighs both sides evenly before arriving at a nuanced verdict.',
            ],
            exampleHeading: 'Worked anaphora + tricolon',
            examples: [
              '"We cannot wait for another drought; we cannot wait for another flood; we cannot wait until our children inherit an unlivable coast."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'anaphora', definition: 'Deliberate repetition of the same word or phrase at the start of successive clauses or sentences for rhythmic emphasis.' },
          { term: 'counterargument', definition: 'Acknowledging an opposing viewpoint before refuting it to strengthen the credibility of your own argument.' },
        ],
      },
      {
        id: 'englang-4-1-c2',
        title: 'Punctuation Precision: Fixing Comma Splices, Colons & Semicolons',
        summary: 'Eliminating comma splices and using colons, semicolons, and paired dashes accurately unlocks top Writing accuracy bands.',
        bullets: [
          '**Comma splice (MAJOR error)** - NEVER join two complete independent sentences with a comma alone (`The bell rang, everyone rushed out` ❌). Fix with a **full stop**, **semicolon** (`The bell rang; everyone rushed out` ✓), or **conjunction** (`The bell rang, so everyone rushed out` ✓).',
          '**Colon (:)** - introduces an explanation, dramatic reveal, or list AFTER a complete clause (`Only one obstacle remained: fear.`).',
          '**Semicolon (;)** - links two closely related complete sentences without a conjunction (`The sky bruised purple; the harbour fell silent.`).',
          '**Paired dashes (— ... —)** - frame dramatic extra parenthesis inside a sentence.',
        ],
        subsections: [
          {
            heading: 'Check Before Using a Semicolon',
            bullets: [
              '**Two-sentence test** - cover the semicolon: BOTH the left side AND the right side must stand alone as complete sentences!',
            ],
            exampleHeading: 'Correct vs Incorrect Semicolon',
            examples: [
              'Incorrect: "Because it was raining; we stayed inside." ❌ | Correct: "Rain lashed the windows; we stayed inside." ✓',
            ],
          },
        ],
        glossaryPills: [
          { term: 'comma splice', definition: 'A grammatical error where two independent main clauses are joined solely by a comma instead of a full stop, semicolon, or conjunction.' },
        ],
      },
      {
        id: 'englang-4-1-c3',
        title: 'Dialogue Punctuation, Apostrophes & Final 5-Minute Proofread',
        summary: 'New speaker = new line, punctuation goes INSIDE closing speech marks, and check its/it’s and their/there/they’re.',
        bullets: [
          '**Speech rules** - (1) **New speaker, new line**; (2) Comma/question mark/full stop sits **INSIDE** the closing speech marks (`"Wait here," she whispered.`); (3) Lowercase tag after a comma or question mark (`"Are you sure?" he asked.`).',
          '**Apostrophes** - **contraction** (`it’s` = it is; `they’re` = they are) and **possession** (`the student’s notes` singular vs `the students’ notes` plural); **NEVER use an apostrophe for a simple plural** (`apple’s` ❌) or possessive `its` (`the dog wagged its tail` ✓).',
        ],
        subsections: [
          {
            heading: 'Five-Minute Proofreading Checklist',
            bullets: [
              '**Scan for 4 killers** - (1) Comma splices; (2) `their / there / they’re`, `affect / effect`, `practice / practise`; (3) Tense consistency; (4) Paragraphing for every shift in time, place, topic, or speaker (TiPToP).',
            ],
            exampleHeading: 'Concrete check: Affect vs Effect',
            examples: [
              'Affect = Verb ("Storms **affect** travel"); Effect = Noun ("The storm had a dramatic **effect**").',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tricolon', definition: 'A rhetorical series of three parallel words, phrases, or clauses used for memorable emphasis.' },
        ],
        memoryAid: 'TiPToP paragraphs (Time, Place, Topic, Person speaking); RAVEN (Remember Affect Verb, Effect Noun)!',
        commonMistake: 'NEVER write "it’s" to show possession ("the cat licked it’s paw" ❌) — `it’s` ALWAYS means "it is" or "it has"!',
      },
    ],
    keyTerms: [
      { term: 'Anaphora', definition: 'Repeating the opening words of successive clauses for rhetorical force.' },
      { term: 'Counterargument', definition: 'Addressing and rebutting an opposing viewpoint to show balanced sophistication.' },
      { term: 'Comma splice', definition: 'Error of joining two complete main clauses with only a comma.' },
      { term: 'Tricolon', definition: 'Three parallel words or clauses grouped for memorable emphasis.' },
    ],
    checklistPoints: [
      'Combine ethos, pathos, logos, anaphora, tricolon, and a strong counterargument in persuasive essays',
      'Eliminate comma splices and deploy colons, semicolons, and paired dashes accurately',
      'Punctuate dialogue cleanly and proofread apostrophes, homophones, and TiPToP paragraphing',
    ],
  },
};

export const ENGLISH_LANGUAGE_QUIZZES: QuizQuestion[] = [
  // 1.1
  { id: 'englang-q-1-1-1', subtopicId: 'englang-1-1', type: 'mcq', marks: 1, prompt: 'What happens if you lift key words directly from the passage on a Cambridge 0500 "Using your own words" question?', options: ['You get bonus accuracy marks', 'You lose the marks because key words were not paraphrased into your own vocabulary', 'It only matters in summaries', 'Examiners prefer direct copying'], correctIndex: 1, explanation: 'Own-words questions strictly test vocabulary paraphrase — lifted keywords score zero.' },
  { id: 'englang-q-1-1-2', subtopicId: 'englang-1-1', type: 'short-answer', marks: 2, prompt: 'Paraphrase "The project collapsed due to dwindling funds and fierce opposition" completely in your own words.', rubric: { maxMarks: 2, modelAnswer: 'The scheme failed because money was rapidly running out and there was strong resistance against it.', markPoints: [{ id: 'mp1', markDescription: 'Paraphrases collapsed + dwindling funds without lifting', requiredKeywordGroups: [['failed', 'ended', 'fell apart', 'stopped'], ['money', 'finance', 'budget', 'running out', 'shrinking', 'declining']] }, { id: 'mp2', markDescription: 'Paraphrases fierce opposition', requiredKeywordGroups: [['strong', 'intense', 'harsh', 'heavy'], ['resistance', 'protest', 'disagreement', 'criticism', 'objection']] }] }, explanation: 'Swap every key content word (collapsed, dwindling, funds, fierce, opposition) accurately.' },
  { id: 'englang-q-1-1-3', subtopicId: 'englang-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the reading comprehension definitions:', segments: ['Information stated directly on the page is ', ' meaning, whereas deducing an unstated emotion from clues is making an ', '.'], wordBank: ['explicit', 'inference', 'anaphora', 'biased'], answers: ['explicit', 'inference'], explanation: 'Explicit = literal surface; Inference = implied deduction.' },
  { id: 'englang-q-1-1-4', subtopicId: 'englang-1-1', type: 'mcq', marks: 1, prompt: '"Liam stared at his shoes and muttered a single syllable before edging toward the exit." What is IMPLICITLY suggested?', options: ['Liam is wearing new shoes', 'Liam feels embarrassed, uncomfortable, or eager to leave', 'Liam loves public speaking', 'The exit is locked'], correctIndex: 1, explanation: 'Body language clues imply embarrassment and a desire to escape.' },
  { id: 'englang-q-1-1-5', subtopicId: 'englang-1-1', type: 'mcq', marks: 1, prompt: 'Which phrase shows the clearest emotive BIAS?', options: ['The bridge opened in May', 'The reckless vanity project squandered taxpayers’ cash', 'Construction took 18 months', 'Traffic fell by 12%'], correctIndex: 1, explanation: 'Loaded adjectives ("reckless", "vanity", "squandered") push a biased stance.' },

  // 1.2
  { id: 'englang-q-1-2-1', subtopicId: 'englang-1-2', type: 'mcq', marks: 1, prompt: 'Which analytical comment would earn ZERO marks on a Writer’s Effect question?', options: ['"Swallowed" personifies the mist as a hungry predator, creating menace', '"It puts a vivid image in the reader’s mind and makes them want to read on"', 'The harsh plosives mirror the violent impact of the hail', 'The semantic field of decay emphasises abandonment'], correctIndex: 1, explanation: 'Generic comments like "makes the reader want to read on" analyse nothing specific.' },
  { id: 'englang-q-1-2-2', subtopicId: 'englang-1-2', type: 'short-answer', marks: 2, prompt: 'Analyse the metaphor "the winter wind knifed through our coats" by giving its literal meaning in context AND its figurative effect.', rubric: { maxMarks: 2, modelAnswer: 'Literally, the freezing wind blew right through their clothing; figuratively, the violent verb "knifed" likens the cold to a sharp weapon attacking them, evoking painful hostility and vulnerability.', markPoints: [{ id: 'mp1', markDescription: 'Literal meaning (freezing wind blew through clothes)', requiredKeywordGroups: [['cold', 'freezing', 'blew', 'wind', 'clothes', 'coats']] }, { id: 'mp2', markDescription: 'Figurative connotations of weapon/pain/hostile attack', requiredKeywordGroups: [['weapon', 'blade', 'sharp', 'pain', 'attack', 'violent', 'hostile', 'stab']] }] }, explanation: 'Pair exact context meaning with specific weapon/pain connotations.' },
  { id: 'englang-q-1-2-3', subtopicId: 'englang-1-2', type: 'matching', marks: 2, prompt: 'Match each language/structural device to its definition:', pairs: [{ left: 'Personification', right: 'Giving human actions to non-human objects' }, { left: 'Semantic field', right: 'Cluster of words linked by a shared theme' }, { left: 'Juxtaposition', right: 'Placing contrasting ideas side by side' }, { left: 'Pathetic fallacy', right: 'Weather reflecting character mood' }], explanation: 'Know exact device definitions and always link them to specific effect.' },
  { id: 'englang-q-1-2-4', subtopicId: 'englang-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the 0500 Writer’s Effect strategy:', segments: ['Begin each paragraph by stating the ', ' effect, then analyse three short phrases examining both literal meaning and ', '.'], wordBank: ['overall', 'connotations', 'random', 'rhymes'], answers: ['overall', 'connotations'], explanation: 'Overall atmosphere + 3 short quotes with literal meaning & connotations.' },
  { id: 'englang-q-1-2-5', subtopicId: 'englang-1-2', type: 'mcq', marks: 1, prompt: 'What is the typical structural effect of placing a 2-word minor sentence directly after a long, flowing complex sentence?', options: ['Creates boredom', 'Creates sudden dramatic shock, tension, or abrupt halt in pace', 'Proves poor grammar', 'Adds comic relief only'], correctIndex: 1, explanation: 'Contrasting sentence lengths sharply alters rhythm and highlights turning points.' },

  // 2.1
  { id: 'englang-q-2-1-1', subtopicId: 'englang-2-1', type: 'mcq', marks: 1, prompt: 'What is the strict target word limit and format for a Cambridge IGCSE 0500 Summary (Paper 1 Q1f)?', options: ['300 words in bullet points', 'Up to 120 words of continuous prose in your own words', '50 words with direct quotations', '250 words with personal opinions'], correctIndex: 1, explanation: '0500 Summary requires ≤120 words of own-words continuous prose.' },
  { id: 'englang-q-2-1-2', subtopicId: 'englang-2-1', type: 'short-answer', marks: 2, prompt: 'State TWO things you must EXCLUDE when writing a top-band 0500 summary.', rubric: { maxMarks: 2, modelAnswer: 'Exclude personal opinions/outside knowledge, direct quotations, anecdotes/examples, repetition, or filler introductions.', markPoints: [{ id: 'mp1', markDescription: 'Exclusion 1 (opinions / quotes / anecdotes / intro)', requiredKeywordGroups: [['opinion', 'quote', 'quotation', 'anecdote', 'example', 'intro', 'bullet']] }, { id: 'mp2', markDescription: 'Exclusion 2 (distinct second exclusion)', requiredKeywordGroups: [['repetition', 'outside', 'filler', 'opinion', 'quote', 'example', 'intro', 'bullet']] }] }, explanation: 'Cutting filler preserves your 120-word budget for maximum factual points.' },
  { id: 'englang-q-2-1-3', subtopicId: 'englang-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the summary best practices:', segments: ['Aim to select around ', ' distinct content points and write in ', ' prose rather than bullet points.'], wordBank: ['15', 'continuous', '3', 'poetic'], answers: ['15', 'continuous'], explanation: 'Targeting 12–15 points in connected prose maximises both reading and writing marks.' },
  { id: 'englang-q-2-1-4', subtopicId: 'englang-2-1', type: 'mcq', marks: 1, prompt: 'Which sentence is the BEST opening for a summary on "benefits of urban parks"?', options: ['In this text, the writer explains several great reasons why people love parks.', 'Urban parks lower city temperatures, filter air pollution, and boost residents’ mental wellbeing.', 'I personally think parks are wonderful places to walk dogs.', '"Parks are the green lungs of every metropolis," says Dr Green.'], correctIndex: 1, explanation: 'Packs 3 distinct factual points immediately in concise own words with zero filler.' },
  { id: 'englang-q-2-1-5', subtopicId: 'englang-2-1', type: 'mcq', marks: 1, prompt: 'Why is grouping related points together before drafting a summary helpful?', options: ['It makes the essay longer', 'It improves logical flow and lets you synthesise 2–3 points smoothly in one concise sentence', 'It lets you copy whole paragraphs', 'It removes the need for punctuation'], correctIndex: 1, explanation: 'Grouping enables fluent synthesis and prevents repetitive listing.' },

  // 2.2
  { id: 'englang-q-2-2-1', subtopicId: 'englang-2-2', type: 'mcq', marks: 1, prompt: 'Which sign-off matches a formal letter addressed to "Dear Sir/Madam,"?', options: ['Yours sincerely,', 'Yours faithfully,', 'Best wishes,', 'Cheers,'], correctIndex: 1, explanation: 'Sir/Madam → Yours faithfully; named recipient (Dear Ms Chen) → Yours sincerely.' },
  { id: 'englang-q-2-2-2', subtopicId: 'englang-2-2', type: 'short-answer', marks: 2, prompt: 'Explain what VARPF stands for in Directed Writing and why Bullet 3 of a Cambridge 0500 Q3 prompt requires extra care.', rubric: { maxMarks: 2, modelAnswer: 'VARPF stands for Voice, Audience, Register, Purpose, and Format. Bullet 3 usually demands implicit inference and developed ideas rooted in passage clues rather than direct surface facts, so neglecting it caps Reading marks.', markPoints: [{ id: 'mp1', markDescription: 'Names Voice, Audience, Register, Purpose, Format', requiredKeywordGroups: [['voice'], ['audience'], ['register'], ['purpose', 'format']] }, { id: 'mp2', markDescription: 'Bullet 3 requires inference / equal coverage / development from clues', requiredKeywordGroups: [['infer', 'implicit', 'develop', 'equal', 'clues']] }] }, explanation: 'VARPF controls writing style; balanced 3-bullet coverage unlocks Band 1 reading.' },
  { id: 'englang-q-2-2-3', subtopicId: 'englang-2-2', type: 'fill-blank', marks: 2, prompt: 'Complete the Directed Writing rules:', segments: ['On Paper 2 Q1, top students ', ' and challenge arguments from the texts rather than just summarising, and a formal report uses clear ', '.'], wordBank: ['evaluate', 'subheadings', 'copy', 'rhymes'], answers: ['evaluate', 'subheadings'], explanation: 'Paper 2 Q1 rewards evaluation; reports use structured subheadings.' },
  { id: 'englang-q-2-2-4', subtopicId: 'englang-2-2', type: 'mcq', marks: 1, prompt: 'In a Cambridge 0500 Interview Directed Writing task, how should you handle the 3 given interviewer questions?', options: ['Invent 5 extra questions of your own', 'Use ONLY the 3 given questions and write detailed, in-character spoken responses covering all bullets', 'Rewrite them as a formal report', 'Answer each in one sentence'], correctIndex: 1, explanation: 'Stick strictly to the 3 prompt questions and focus your word count on rich in-character responses.' },
  { id: 'englang-q-2-2-5', subtopicId: 'englang-2-2', type: 'multi-select', marks: 2, prompt: 'Select TWO essential features of a persuasive magazine ARTICLE:', options: ['Engaging headline and lively opening hook', 'Semi-formal conversational voice addressing the reader', '"Dear Sir/Madam" and "Yours faithfully"', 'Strict bullet-point lists only'], selectCount: 2, correctIndices: [0, 1], explanation: 'Articles use punchy headlines, hooks, and an engaging voice.' },

  // 3.1
  { id: 'englang-q-3-1-1', subtopicId: 'englang-3-1', type: 'mcq', marks: 1, prompt: 'Which sentence demonstrates "SHOW, DON’T TELL" effectively?', options: ['The room was very old and frightening.', 'Peeling wallpaper curled from damp plaster while the floorboards groaned beneath my boots.', 'I felt super scared when I walked in.', 'It was a creepy, spooky, scary house.'], correctIndex: 1, explanation: 'Concrete sensory imagery evokes eeriness without flatly stating "scary".' },
  { id: 'englang-q-3-1-2', subtopicId: 'englang-3-1', type: 'short-answer', marks: 2, prompt: 'Explain TWO ways to structure a high-scoring DESCRIPTIVE composition so it does NOT turn into a rambling story.', rubric: { maxMarks: 2, modelAnswer: 'Use a camera-lens zoom structure moving from a wide panorama to 3–4 close sensory focal points, include a subtle shift in light/weather/mood, and close with a cyclical echo of the opening without inventing dramatic dialogue or plot.', markPoints: [{ id: 'mp1', markDescription: 'Camera zoom / wide-to-close focal points', requiredKeywordGroups: [['zoom', 'panoram', 'wide', 'focal', 'cyclical']] }, { id: 'mp2', markDescription: 'Mood/light shift OR avoiding plot/dialogue drift', requiredKeywordGroups: [['shift', 'mood', 'light', 'weather', 'no plot', 'dialogue', 'sensory']] }] }, explanation: 'Controlled zoom + atmospheric shift keeps descriptive essays focused and vivid.' },
  { id: 'englang-q-3-1-3', subtopicId: 'englang-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete the narrative craft terms:', segments: ['Starting a story directly inside action is called ', ', and a recurring symbol woven across a piece is a ', '.'], wordBank: ['in medias res', 'motif', 'anaphora', 'synthesis'], answers: ['in medias res', 'motif'], explanation: 'In medias res hooks instantly; a motif provides structural cohesion.' },
  { id: 'englang-q-3-1-4', subtopicId: 'englang-3-1', type: 'mcq', marks: 1, prompt: 'Why do examiners advise writing a narrative about ONE tight 10-minute turning point with 1–2 characters?', options: ['Shorter stories need fewer words', 'A tight scope leaves room for rich atmosphere, deep characterisation, and controlled pacing instead of rushed plot summary', 'Examiners dislike dialogue', 'Longer time spans are forbidden'], correctIndex: 1, explanation: 'Small canvas allows depth and crafted style rather than breathless "and then..." listing.' },
  { id: 'englang-q-3-1-5', subtopicId: 'englang-3-1', type: 'mcq', marks: 1, prompt: 'Which ending is strongly DISCOURAGED in IGCSE narrative writing?', options: ['A cyclical echo of the opening image', 'A quiet emotional realisation', '"Suddenly my alarm rang and I realised it was all a dream!"', 'An ironic twist prepared earlier by a clue'], correctIndex: 2, explanation: '"It was all a dream" destroys narrative stakes and feels clichéd.' },

  // 4.1
  { id: 'englang-q-4-1-1', subtopicId: 'englang-4-1', type: 'mcq', marks: 1, prompt: 'Which sentence is punctuated CORRECTLY with NO comma splice?', options: ['The train was delayed, passengers crowded the platform.', 'The train was delayed; passengers crowded the platform.', 'Because the train was delayed; passengers waited.', 'The train was delayed, therefore, we missed it.'], correctIndex: 1, explanation: 'A semicolon cleanly joins two closely related complete independent clauses.' },
  { id: 'englang-q-4-1-2', subtopicId: 'englang-4-1', type: 'short-answer', marks: 2, prompt: 'Correct the punctuation and apostrophe errors in: `"I cant believe its already midnight", he whispered, the dog wagged it’s tail.`', rubric: { maxMarks: 2, modelAnswer: '"I can’t believe it’s already midnight," he whispered. The dog wagged its tail. (Fixes can’t, it’s, comma inside speech marks, comma splice full stop/semicolon, and possessive its.)', markPoints: [{ id: 'mp1', markDescription: 'Fixes contractions (can’t, it’s) & possessive its', requiredKeywordGroups: [['can\'t', 'can’t'], ['it\'s', 'it’s'], ['its tail']] }, { id: 'mp2', markDescription: 'Fixes comma inside speech marks and comma splice', requiredKeywordGroups: [['midnight,"', 'midnight,”'], ['whispered.', 'whispered;']] }] }, explanation: 'Applies contraction vs possessive its, speech punctuation, and fixes the comma splice.' },
  { id: 'englang-q-4-1-3', subtopicId: 'englang-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the grammar and rhetoric rules:', segments: ['Affect is usually a ', ' while effect is usually a noun, and acknowledging then refuting an opposing view is a ', '.'], wordBank: ['verb', 'counterargument', 'pronoun', 'simile'], answers: ['verb', 'counterargument'], explanation: 'RAVEN: Affect = Verb, Effect = Noun; counterarguments build persuasive maturity.' },
  { id: 'englang-q-4-1-4', subtopicId: 'englang-4-1', type: 'mcq', marks: 1, prompt: '"We must act for our oceans; we must act for our forests; we must act for our future." Which two devices are combined here?', options: ['Simile and oxymoron', 'Anaphora and tricolon (rule of three)', 'Pathetic fallacy and dialogue', 'Comma splice and slang'], correctIndex: 1, explanation: 'Repeated opening ("We must act for our...") = anaphora; 3 parallel clauses = tricolon.' },
  { id: 'englang-q-4-1-5', subtopicId: 'englang-4-1', type: 'mcq', marks: 1, prompt: 'What does TiPToP remind you to do in every extended piece of writing?', options: ['Start a new paragraph for every shift in Time, Place, Topic, or Person speaking', 'Use three metaphors per sentence', 'Write only in present tense', 'Add bullet points to essays'], correctIndex: 0, explanation: 'TiPToP ensures clear, purposeful paragraphing throughout your writing.' },
];

export const ENGLISH_LANGUAGE_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'englang-fc-1-1-1', subtopicId: 'englang-1-1', front: 'Explicit vs Implicit meaning?', backBullets: ['Explicit = stated literally on the page; Implicit = inferred from clues between the lines.'] },
  { id: 'englang-fc-1-1-2', subtopicId: 'englang-1-1', front: 'Golden rule for "Using your own words" questions?', backBullets: ['Replace EVERY key content word with an accurate contextual synonym — zero lifting!'] },
  { id: 'englang-fc-1-1-3', subtopicId: 'englang-1-1', front: 'Give 4 precise tone words better than "negative".', backBullets: ['Cynical, dismissive, apprehensive, sardonic, indignant, melancholic.'] },
  { id: 'englang-fc-1-1-4', subtopicId: 'englang-1-1', front: 'Three clues that reveal writer bias?', backBullets: ['Loaded emotive adjectives, one-sided statistics, and omitted counterarguments.'] },
  { id: 'englang-fc-1-1-5', subtopicId: 'englang-1-1', front: 'How do you spot implicit character feelings?', backBullets: ['Examine body language, verb choices, dialogue hesitation, and contrasts.'] },
  // 1.2
  { id: 'englang-fc-1-2-1', subtopicId: 'englang-1-2', front: 'Structure of a top-band 0500 Writer’s Effect paragraph?', backBullets: ['1-sentence overall effect + 3 short vivid quotes (2–5 words), each unpacked for literal meaning + connotations/effect.'] },
  { id: 'englang-fc-1-2-2', subtopicId: 'englang-1-2', front: 'Define connotation.', backBullets: ['Emotional associations and symbolic overtones carried by a word beyond its literal meaning.'] },
  { id: 'englang-fc-1-2-3', subtopicId: 'englang-1-2', front: 'Define semantic field and pathetic fallacy.', backBullets: ['Semantic field = cluster of thematically linked words; Pathetic fallacy = weather reflecting human mood.'] },
  { id: 'englang-fc-1-2-4', subtopicId: 'englang-1-2', front: 'Why are comments like "makes the reader want to read on" worth 0 marks?', backBullets: ['They are generic and could apply to any text — always state the SPECIFIC mood or impression created.'] },
  { id: 'englang-fc-1-2-5', subtopicId: 'englang-1-2', front: 'Effect of a short minor sentence after a long complex sentence?', backBullets: ['Sharp rhythmic contrast that creates sudden tension, shock, or emphasis.'] },
  // 2.1
  { id: 'englang-fc-2-1-1', subtopicId: 'englang-2-1', front: 'Word limit, point target, and format for 0500 Summary?', backBullets: ['≤120 words, targeting 12–15 distinct focus-matched points, in continuous own-words prose.'] },
  { id: 'englang-fc-2-1-2', subtopicId: 'englang-2-1', front: 'Four things NEVER to include in a summary?', backBullets: ['Personal opinions, direct quotes, filler introductions, and anecdotes/repeated points.'] },
  { id: 'englang-fc-2-1-3', subtopicId: 'englang-2-1', front: 'How do you pack 15 points cleanly into 120 words?', backBullets: ['Group related points and synthesise 2–3 points per concise sentence using compact connectives.'] },
  { id: 'englang-fc-2-1-4', subtopicId: 'englang-2-1', front: 'Should a summary use bullet points?', backBullets: ['No — continuous paragraph prose is required for full writing marks.'] },
  { id: 'englang-fc-2-1-5', subtopicId: 'englang-2-1', front: 'Should a summary start with "In this passage the author writes..."?', backBullets: ['No — jump straight into Point 1 in sentence 1 to save precious words.'] },
  // 2.2
  { id: 'englang-fc-2-2-1', subtopicId: 'englang-2-2', front: 'What does VARPF stand for?', backBullets: ['Voice, Audience, Register, Purpose, Format.'] },
  { id: 'englang-fc-2-2-2', subtopicId: 'englang-2-2', front: 'When do you sign off "Yours faithfully" vs "Yours sincerely"?', backBullets: ['Dear Sir/Madam → Yours faithfully; Dear Mr/Ms [Name] → Yours sincerely (never two S’s).'] },
  { id: 'englang-fc-2-2-3', subtopicId: 'englang-2-2', front: 'Why is Bullet 3 crucial on 0500 Paper 1 Q3?', backBullets: ['It tests implicit inference and rooted development; neglecting it caps the reading band.'] },
  { id: 'englang-fc-2-2-4', subtopicId: 'englang-2-2', front: 'Key skill needed for Paper 2 Q1 Directed Writing?', backBullets: ['Evaluating and challenging arguments across both source texts — not passively summarising them.'] },
  { id: 'englang-fc-2-2-5', subtopicId: 'englang-2-2', front: 'Rule for Interview format in Directed Writing?', backBullets: ['Use ONLY the 3 given interviewer questions and develop rich, authentic spoken answers.'] },
  // 3.1
  { id: 'englang-fc-3-1-1', subtopicId: 'englang-3-1', front: 'How do you structure a descriptive composition without turning it into a story?', backBullets: ['Camera-lens zoom: wide panorama → 3–4 close sensory details → subtle mood/light shift → cyclical close.'] },
  { id: 'englang-fc-3-1-2', subtopicId: 'englang-3-1', front: 'What does "Show, don’t tell" mean?', backBullets: ['Reveal emotions via concrete sensory imagery and physical actions instead of naming the emotion flatly.'] },
  { id: 'englang-fc-3-1-3', subtopicId: 'englang-3-1', front: 'What is "in medias res"?', backBullets: ['Opening a narrative immediately inside a tense moment or action rather than slow exposition.'] },
  { id: 'englang-fc-3-1-4', subtopicId: 'englang-3-1', front: 'Why limit a 45-minute narrative to 1–2 characters and one short moment?', backBullets: ['Allows vivid atmosphere, convincing characterisation, and controlled pacing instead of rushed plot listing.'] },
  { id: 'englang-fc-3-1-5', subtopicId: 'englang-3-1', front: 'What is a motif?', backBullets: ['A recurring image or object threaded through opening, middle, and ending for cohesion.'] },
  // 4.1
  { id: 'englang-fc-4-1-1', subtopicId: 'englang-4-1', front: 'Define ethos, pathos, and logos.', backBullets: ['Ethos = credibility/trust; Pathos = emotional appeal; Logos = logic and evidence.'] },
  { id: 'englang-fc-4-1-2', subtopicId: 'englang-4-1', front: 'What is a comma splice and 3 ways to fix it?', backBullets: ['Joining two complete sentences with only a comma; fix with a full stop, semicolon, or conjunction.'] },
  { id: 'englang-fc-4-1-3', subtopicId: 'englang-4-1', front: 'When is a semicolon grammatically valid?', backBullets: ['When BOTH sides could stand alone as complete, closely related sentences.'] },
  { id: 'englang-fc-4-1-4', subtopicId: 'englang-4-1', front: 'Difference between "its" and "it’s", and "affect" vs "effect"?', backBullets: ['its = possessive; it’s = it is/has. Affect = Verb; Effect = Noun (RAVEN).'] },
  { id: 'englang-fc-4-1-5', subtopicId: 'englang-4-1', front: 'Three rules for punctuating direct speech?', backBullets: ['New speaker = new line; punctuation goes INSIDE closing speech marks; lowercase tag after comma/question mark.'] },
];

export const ENGLISH_LANGUAGE_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'englang-cs-1', slug: 'topic-1-reading-language', title: '1. Reading & Writer’s Effect Cheat Sheet', topicNumber: 1, topicName: 'Reading Comprehension & Language Analysis', summary: 'Inference, own-words paraphrasing & 0500 Q2(d) Writer’s Effect.', accentColor: '#E11D48', sections: [{ heading: 'Top-Band Formulae', points: ['Own-words: replace EVERY key content word with contextual synonyms', 'Writer’s Effect: 1-sentence overall mood + 3 short quotes (literal + connotations + specific effect)', 'Banish "makes the reader want to read on"'] }] },
  { id: 'englang-cs-2', slug: 'topic-2-summary-directed', title: '2. Summary & Directed Writing Cheat Sheet', topicNumber: 2, topicName: 'Summary & Directed Writing', summary: '120-word summaries, VARPF, 3-bullet parity & text formats.', accentColor: '#E11D48', sections: [{ heading: 'Exam Checklists', points: ['Summary: 12–15 points, continuous prose, ≤120 words, zero intro/quotes/opinion', 'Directed Writing: VARPF + equal coverage of all 3 bullets (develop Bullet 3!)', 'Dear Sir/Madam → Yours faithfully | Dear Name → Yours sincerely'] }] },
  { id: 'englang-cs-3', slug: 'topic-3-composition', title: '3. Descriptive & Narrative Composition Cheat Sheet', topicNumber: 3, topicName: 'Narrative & Descriptive Composition', summary: 'Camera-zoom description, tight narrative scope, show-don’t-tell & motifs.', accentColor: '#E11D48', sections: [{ heading: 'Craft Essentials', points: ['Descriptive: wide panorama → 3–4 close zooms → mood/light shift → cyclical close', 'Narrative: 1 short turning point, 1–2 characters, in medias res, no "it was a dream"', 'Precision verbs beat adjective overload'] }] },
  { id: 'englang-cs-4', slug: 'topic-4-rhetoric-spag', title: '4. Rhetoric & Technical Accuracy Cheat Sheet', topicNumber: 4, topicName: 'Argumentative Writing & Technical Accuracy', summary: 'Ethos/pathos/logos, counterarguments, semicolons & SPaG.', accentColor: '#E11D48', sections: [{ heading: 'Accuracy Rules', points: ['Never comma-splice: use full stop, semicolon (two complete clauses), or conjunction', 'TiPToP paragraphs; RAVEN (Affect Verb, Effect Noun); its (possessive) vs it’s (it is)', 'New speaker = new line; punctuation INSIDE speech marks'] }] },
];

export const ENGLISH_LANGUAGE_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'englang-ex-1-1', subtopicId: 'englang-1-1', number: 1, stimulus: '[Cambridge IGCSE 0500 Paper 1 Q1 Style] Read the extract: "Despite the brochure’s glossy promises of untouched serenity, the cove was choked with roaring jet-skis and neon billboards."', parts: [
    { id: 'p1', label: '(a)', prompt: 'Using your own words, explain the contrast the writer creates and identify the writer’s tone.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'The travel leaflet advertised unspoilt peace and quiet, yet the bay was overcrowded with loud watercraft and garish bright signs. The writer’s tone is disillusioned, sarcastic, or critical.', markPoints: [{ id: 'mp1', markDescription: 'Paraphrases brochure’s calm/unspoilt promise', requiredKeywordGroups: [['peace', 'quiet', 'calm', 'unspoilt', 'natural']] }, { id: 'mp2', markDescription: 'Paraphrases crowded/noisy/garish reality without lifting', requiredKeywordGroups: [['noisy', 'loud', 'crowded', 'packed', 'bright', 'garish', 'commercial']] }, { id: 'mp3', markDescription: 'Precise tone word (disillusioned, critical, sarcastic, disappointed)', requiredKeywordGroups: [['disillusion', 'sarcastic', 'ironic', 'critical', 'disappoint', 'cynical']] }] } },
  ] },
  { id: 'englang-ex-1-2', subtopicId: 'englang-1-2', number: 2, stimulus: '[Cambridge IGCSE 0500 Paper 1 Q2(d) Style] Extract: "Fog crept like a silent thief along the alleyways, swallowing streetlamps one by one until the harbour vanished."', parts: [
    { id: 'p1', label: '(a)', prompt: 'State the overall atmosphere and analyse the writer’s use of TWO short images from the sentence.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Overall atmosphere: eerie, stealthy menace. "Crept like a silent thief" compares the mist to a criminal sneaking invisibly, evoking unease and stealth; "swallowing streetlamps" personifies the fog as a vast predator devouring light and safety.', markPoints: [{ id: 'mp1', markDescription: 'States specific eerie/sinister/menacing atmosphere', requiredKeywordGroups: [['eerie', 'menac', 'sinister', 'stealth', 'unsettling', 'tense', 'ominous']] }, { id: 'mp2', markDescription: 'Analyses "crept like a silent thief" (criminal/stealth connotations)', requiredKeywordGroups: [['thief', 'crept'], ['criminal', 'stealth', 'sneak', 'unseen', 'danger']] }, { id: 'mp3', markDescription: 'Analyses "swallowing" (personification/predator consuming light/safety)', requiredKeywordGroups: [['swallow'], ['personif', 'predator', 'monster', 'devour', 'consum', 'darkness']] }] } },
  ] },
  { id: 'englang-ex-2-1', subtopicId: 'englang-2-1', number: 3, stimulus: '[Cambridge IGCSE 0500 Paper 1 Q1(f) Style] Source notes: Solar micro-grids cut diesel bills for remote villages, reduce indoor smoke illnesses, allow children to study after sunset, and create local technician jobs.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Synthesise ALL FOUR benefits into ONE concise own-words sentence of under 35 words.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Local solar power networks lower rural energy expenses, improve health by reducing smoke, extend evening study hours for students, and generate skilled community employment.', markPoints: [{ id: 'mp1', markDescription: 'Includes lower costs & improved health (own words)', requiredKeywordGroups: [['cost', 'expense', 'cheaper', 'bill'], ['health', 'illness', 'cleaner air', 'smoke']] }, { id: 'mp2', markDescription: 'Includes evening study & local jobs', requiredKeywordGroups: [['study', 'homework', 'education', 'evening', 'night'], ['job', 'employment', 'work']] }, { id: 'mp3', markDescription: 'Concise continuous synthesis', requiredKeywordGroups: [['solar', 'renewable', 'energy', 'power']] }] } },
  ] },
  { id: 'englang-ex-2-2', subtopicId: 'englang-2-2', number: 4, stimulus: '[Cambridge IGCSE 0500 Paper 2 Q1 Style] Text A argues that banning smartphones in schools boosts exam grades; Text B argues students need supervised practice to build healthy digital habits.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Write a short evaluative paragraph for a speech to parents that weighs BOTH perspectives and reaches a reasoned judgement.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'While removing phones during lessons undeniably eliminates distracting notifications and helps students focus on exams, a blanket ban misses a vital chance to teach teenagers self-control. Surely our goal is not merely quiet classrooms today, but responsible digital citizens tomorrow.', markPoints: [{ id: 'mp1', markDescription: 'Evaluates Text A benefit (focus / fewer distractions / grades)', requiredKeywordGroups: [['focus', 'distract', 'grade', 'exam', 'concentrat']] }, { id: 'mp2', markDescription: 'Evaluates Text B point (self-control / digital habits / real world)', requiredKeywordGroups: [['habit', 'self-control', 'responsible', 'real world', 'supervised', 'digital']] }, { id: 'mp3', markDescription: 'Authentic spoken voice + clear reasoned judgement', requiredKeywordGroups: [['we', 'our', 'you', 'however', 'while', 'yet', 'ultimately']] }] } },
  ] },
  { id: 'englang-ex-3-1', subtopicId: 'englang-3-1', number: 5, stimulus: '[Cambridge IGCSE 0500 Paper 2 Section B Style] A student wrote: "The market was very noisy and colourful and smelled nice. Everyone was busy."', parts: [
    { id: 'p1', label: '(a)', prompt: 'Rewrite this moment in 2–3 crafted sentences using "Show, don’t tell", sensory precision, and a vivid verb or metaphor.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Pyramids of saffron and crimson pomegranates blazed beneath canvas awnings while stallholders barked prices over the hiss of frying spices. Shoppers wove shoulder-to-shoulder through air thick with roasted cumin and citrus.', markPoints: [{ id: 'mp1', markDescription: 'Concrete visual or colour imagery (beyond "colourful")', requiredKeywordGroups: [['crimson', 'gold', 'saffron', 'bright', 'awning', 'pyramid', 'fabric', 'glow', 'blaze', 'shimmer']] }, { id: 'mp2', markDescription: 'Concrete sound or smell sensory detail', requiredKeywordGroups: [['spice', 'cumin', 'cinnamon', 'bread', 'coffee', 'shout', 'bark', 'hiss', 'clatter', 'chatter', 'aroma', 'scent']] }, { id: 'mp3', markDescription: 'Vivid action verb / figurative craft', requiredKeywordGroups: [['wove', 'surged', 'bustl', 'drifted', 'echo', 'blaze', 'hiss', 'bark', 'like', 'ribbon', 'wave']] }] } },
  ] },
  { id: 'englang-ex-4-1', subtopicId: 'englang-4-1', number: 6, stimulus: '[Cambridge IGCSE 0500 Paper 2 Accuracy Style] Draft sentence: "Public libraries are vital for teenagers, they offer quiet study spaces, free books, and community support, its foolish to close them."', parts: [
    { id: 'p1', label: '(a)', prompt: 'Rewrite the sentence fixing EVERY comma splice and apostrophe error using at least one colon or semicolon.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Public libraries are vital for teenagers: they offer quiet study spaces, free books, and community support; it’s foolish to close them.', markPoints: [{ id: 'mp1', markDescription: 'Rewrites clause cleanly with colon/semicolon (teenagers / offer)', requiredKeywordGroups: [['teenagers', 'colon', 'semicolon'], ['offer', 'study']] }, { id: 'mp2', markDescription: 'Fixes second comma splice before it’s', requiredKeywordGroups: [['support'], ['foolish', 'close']] }, { id: 'mp3', markDescription: 'Corrects "its" to "it’s" (or "it is")', requiredKeywordGroups: [['it’s', 'it\'s', 'it is']] }] } },
  ] },
];

export const ENGLISH_LANGUAGE_PAST_PAPERS: PastPaperDoc[] = [
  { id: 'englang-pp-2024-p1', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE First Language English (0500) Paper 1 (Reading) — May/June 2024', tier: 'Core', series: 'May/June', paperCode: '0500/12', durationMinutes: 120, totalMarks: 80, sampleQuestions: [{ number: 'Q1(f)', question: 'Summarise the challenges described in Text B in no more than 120 words of continuous prose.', marks: 15, markScheme: ['10 reading marks (select 12–15 points) + 5 writing marks (concise own words, ≤120 words).'] }, { number: 'Q2(d)', question: 'Analyse the writer’s choice of language across two specified paragraphs (3 phrases each).', marks: 15, markScheme: ['Overall effect + literal meaning + connotations/imagery for 6 vivid choices.'] }] },
  { id: 'englang-pp-2024-p2', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE First Language English (0500) Paper 2 (Directed Writing & Composition) — May/June 2024', tier: 'Core', series: 'May/June', paperCode: '0500/22', durationMinutes: 120, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Write a speech evaluating arguments for and against smartphone bans in schools.', marks: 40, markScheme: ['15 reading (evaluation of both texts) + 25 writing (authentic voice, rhetoric, accuracy).'] }, { number: 'Q2–5', question: 'Write a descriptive or narrative composition (350–450 words).', marks: 40, markScheme: ['16 content & structure + 24 style & accuracy (show-don’t-tell, motif, varied punctuation).'] }] },
  { id: 'englang-pp-2023n-p1', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE First Language English (0500) Paper 1 (Reading) — Oct/Nov 2023', tier: 'Core', series: 'Oct/Nov', paperCode: '0500/12', durationMinutes: 120, totalMarks: 80, sampleQuestions: [{ number: 'Q3', question: 'Write an interview response adopting the expedition leader’s voice covering all 3 bullets.', marks: 25, markScheme: ['15 reading (equal 3-bullet coverage + Bullet 3 inference) + 10 writing (VARPF).'] }] },
  { id: 'englang-pp-2023n-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE First Language English (0500) Paper 2 — Oct/Nov 2023', tier: 'Core', series: 'Oct/Nov', paperCode: '0500/22', durationMinutes: 120, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Write a formal letter to a town council evaluating a proposed pedestrian-only high street.', marks: 40, markScheme: ['Dear Sir/Madam → Yours faithfully; balanced evaluation & counterarguments.'] }] },
  { id: 'englang-pp-2023-p1', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE First Language English (0500) Paper 1 (Reading) — May/June 2023', tier: 'Core', series: 'May/June', paperCode: '0500/12', durationMinutes: 120, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Answer explicit retrieval and own-words paraphrase questions on Text A.', marks: 15, markScheme: ['Zero lifting on own-words items; precise inference from clues.'] }] },
  { id: 'englang-pp-2023-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE First Language English (0500) Paper 2 — May/June 2023', tier: 'Core', series: 'May/June', paperCode: '0500/22', durationMinutes: 120, totalMarks: 80, sampleQuestions: [{ number: 'Q2', question: 'Describe a bustling harbour at dusk (350–450 words).', marks: 40, markScheme: ['Camera-zoom structure, sensory detail, atmospheric shift, accurate punctuation.'] }] },
];

export const ENGLISH_LANGUAGE_KEY_TERMS: KeyTermEntry[] = [
  { id: 'englang-kt-1', term: 'Inference', definition: 'Logical deduction of an unstated feeling, attitude, or cause from textual clues.', topicNumber: 1, subtopicId: 'englang-1-1', subtopicCode: '1.1' },
  { id: 'englang-kt-2', term: 'Paraphrase', definition: 'Restating a writer’s exact meaning in fresh original vocabulary without lifting source words.', topicNumber: 1, subtopicId: 'englang-1-1', subtopicCode: '1.1' },
  { id: 'englang-kt-3', term: 'Connotation', definition: 'Emotional or symbolic associations implied by a word beyond its dictionary definition.', topicNumber: 1, subtopicId: 'englang-1-2', subtopicCode: '1.2' },
  { id: 'englang-kt-4', term: 'Semantic Field', definition: 'Cluster of thematically linked words sustaining a mood across a passage.', topicNumber: 1, subtopicId: 'englang-1-2', subtopicCode: '1.2' },
  { id: 'englang-kt-5', term: 'Juxtaposition', definition: 'Placing contrasting images or moods side by side to sharpen their impact.', topicNumber: 1, subtopicId: 'englang-1-2', subtopicCode: '1.2' },
  { id: 'englang-kt-6', term: 'Synthesis', definition: 'Combining related factual points cleanly into compact original sentences.', topicNumber: 2, subtopicId: 'englang-2-1', subtopicCode: '2.1' },
  { id: 'englang-kt-7', term: 'Register', definition: 'Level of formality in diction and syntax matched to audience and text type.', topicNumber: 2, subtopicId: 'englang-2-2', subtopicCode: '2.2' },
  { id: 'englang-kt-8', term: 'Evaluation', definition: 'Weighing strengths, flaws, and assumptions in source arguments rather than summarising passively.', topicNumber: 2, subtopicId: 'englang-2-2', subtopicCode: '2.2' },
  { id: 'englang-kt-9', term: 'Show, Don’t Tell', definition: 'Conveying atmosphere and emotion through sensory details and physical actions rather than flat labels.', topicNumber: 3, subtopicId: 'englang-3-1', subtopicCode: '3.1' },
  { id: 'englang-kt-10', term: 'In Medias Res', definition: 'Opening a narrative directly in the middle of action or tension.', topicNumber: 3, subtopicId: 'englang-3-1', subtopicCode: '3.1' },
  { id: 'englang-kt-11', term: 'Motif', definition: 'Recurring symbol or image woven across a composition for structural unity.', topicNumber: 3, subtopicId: 'englang-3-1', subtopicCode: '3.1' },
  { id: 'englang-kt-12', term: 'Anaphora', definition: 'Repeating the opening words of successive clauses for rhetorical rhythm and emphasis.', topicNumber: 4, subtopicId: 'englang-4-1', subtopicCode: '4.1' },
  { id: 'englang-kt-13', term: 'Counterargument', definition: 'Conceding and then refuting an opposing viewpoint to strengthen persuasive authority.', topicNumber: 4, subtopicId: 'englang-4-1', subtopicCode: '4.1' },
  { id: 'englang-kt-14', term: 'Comma Splice', definition: 'Grammatical error of joining two complete independent clauses with only a comma.', topicNumber: 4, subtopicId: 'englang-4-1', subtopicCode: '4.1' },
];
