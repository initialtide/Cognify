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

export const IGCSE_ENGLISH_LIT_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Poetry Analysis & Anthology',
    subtopics: [
      {
        id: 'iglit-1-1',
        code: '1.1',
        slug: '1.1-poetic-form-structure-metre-imagery',
        title: 'Poetic Form, Structure, Metre & Imagery',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iglit-1-2',
        code: '1.2',
        slug: '1.2-comparing-anthology-poems-writers-methods',
        title: 'Comparing Anthology Poems & Writer’s Methods',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Prose & Novel Study',
    subtopics: [
      {
        id: 'iglit-2-1',
        code: '2.1',
        slug: '2.1-characterisation-narrative-voice-setting',
        title: 'Characterisation, Narrative Voice & Setting',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iglit-2-2',
        code: '2.2',
        slug: '2.2-themes-context-high-grade-prose-essays',
        title: 'Themes, Context & Structuring High-Grade Prose Essays',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Drama & Stagecraft',
    subtopics: [
      {
        id: 'iglit-3-1',
        code: '3.1',
        slug: '3.1-dramatic-structure-tension-irony-stage-directions',
        title: 'Dramatic Structure, Tension, Irony & Stage Directions',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iglit-3-2',
        code: '3.2',
        slug: '3.2-shakespeare-modern-drama-dialogue-soliloquy-staging',
        title: 'Shakespeare & Modern Drama: Dialogue, Soliloquy & Staging',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'Unseen Poetry & Prose',
    subtopics: [
      {
        id: 'iglit-4-1',
        code: '4.1',
        slug: '4.1-approaching-unseen-poetry-tone-shifts-language',
        title: 'Approaching Unseen Poetry: Tone, Shifts & Language',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'iglit-4-2',
        code: '4.2',
        slug: '4.2-unseen-prose-extracts-personal-responses',
        title: 'Unseen Prose Extracts & Writing Perceptive Personal Responses',
        readingMinutes: 9,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_ENGLISH_LIT_NOTES: Record<string, NoteLesson> = {
  'iglit-1-1': {
    subtopicId: 'iglit-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Poetic Form, Structure, Metre & Imagery',
    readingMinutes: 10,
    videoTitle: 'How to Analyse Poetic Form, Structure & Metre for Top Bands',
    youtubeId: 'N_cfOY6lobQ',
    videoChannel: 'Mr Bruff',
    videoDuration: '8:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Paper 1 Poetry',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Poetic Forms: Sonnet, Dramatic Monologue, Elegy & Free Verse', cardId: 'iglit-1-1-c1' },
      { time: '2:45', seconds: 165, label: 'Metre, Rhyme Scheme, Enjambment & Caesura', cardId: 'iglit-1-1-c2' },
      { time: '5:30', seconds: 330, label: 'Figurative Imagery, Sound Devices & AO3 Effect Analysis', cardId: 'iglit-1-1-c3' },
    ],
    cards: [
      {
        id: 'iglit-1-1-c1',
        title: 'Poetic Form & Structural Architecture',
        summary: 'A poem’s form is a deliberate structural choice — link stanzas, shifts, and genre conventions directly to speaker psychology and theme.',
        bullets: [
          '**Sonnet (14 lines)** - Shakespearean (`ABAB CDCD EFEF GG`) or Petrarchan (`ABBAABBA` octave + sestet); look for the **volta** (turning point in argument or mood around line 9 or the final couplet).',
          '**Dramatic monologue** - a single persona speaks to a silent listener, inadvertently revealing bias, obsession, or self-deception (e.g. Browning’s *My Last Duchess* or Duffy’s *Havisham*).',
          '**Elegy, ballad & free verse** - elegies mourn loss with solemn reflection; ballads use narrative quatrains; **free verse** rejects regular metre/rhyme to mirror raw, unrestrained emotion or modern chaos.',
        ],
        subsections: [
          {
            heading: 'Linking Form to Meaning (AO3)',
            bullets: [
              '**Never just label a form** - always explain *why* the poet chose that shape or why the poet *breaks* a tight form at a climactic line.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Form Examples',
            examples: [
              'Shelley’s *Ozymandias* blends Petrarchan and Shakespearean sonnet conventions so the fractured rhyme scheme mirrors the shattered, crumbling statue of absolute power.',
              'Thomas Hardy’s *Neutral Tones* uses four symmetrical quatrains with a cyclical return to the pond in stanza 4, trapping the speaker inside an inescapable memory of bitter disillusionment.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'volta', definition: 'A decisive shift in tone, perspective, or argument within a poem, classically near line 9 or the final couplet of a sonnet.' },
          { term: 'dramatic monologue', definition: 'A poem spoken by a fictional persona to an implied silent listener, exposing the speaker’s hidden motives or flaws.' },
        ],
      },
      {
        id: 'iglit-1-1-c2',
        title: 'Metre, Rhythm, Enjambment & Caesura',
        summary: 'Lineation controls the reader’s breath and emotional tempo — smooth lines suggest control or momentum, whereas fractures signal grief or shock.',
        bullets: [
          '**Iambic pentameter** - five unstressed–stressed beats (`da-DUM` × 5) resembling a natural heartbeat or dignified speech; a sudden disrupted stress (**trochaic inversion**) jolts the reader.',
          '**Enjambment** - a sentence spilling across a line or stanza break without punctuation, creating urgency, overflow of emotion, or unstoppable movement.',
          '**Caesura** - a strong mid-line pause (full stop, dash, semicolon, colon) that fractures rhythm to evoke hesitation, grief, conflict, or blunt finality.',
          '**Half-rhyme (para-rhyme)** - near-matching consonants with mismatched vowels (e.g. *escaped / scooped*) creating unease and unresolved discord.',
        ],
        subsections: [
          {
            heading: 'Analysing Lineation with Precision',
            bullets: [
              '**Quote the exact break** - mark a line break with `/` so the examiner sees where enjambment or caesura physically occurs.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Rhythm Examples',
            examples: [
              'Wilfred Owen’s half-rhymes in war poetry deny the comfort of musical harmony, forcing the ear to register the jagged psychological trauma of trench combat.',
              'Mid-line caesurae ("He fell. The silence spread.") halt the reader abruptly, mirroring the suddenness of loss and leaving an aching pause on the page.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'enjambment', definition: 'Continuation of a syntactic phrase past the end of a poetic line without terminal punctuation, accelerating pace or mirroring emotional overflow.' },
          { term: 'caesura', definition: 'A deliberate pause inside the middle of a line of verse created by punctuation or natural speech rhythm.' },
        ],
      },
      {
        id: 'iglit-1-1-c3',
        title: 'Imagery, Extended Metaphor & Sound Patterning',
        summary: 'Unpack concrete visual, tactile, and auditory imagery down to single-word connotations and recurring semantic fields.',
        bullets: [
          '**Extended metaphor & conceit** - a sustained comparison woven across multiple stanzas that organizes the poem’s central message.',
          '**Auditory craft** - **sibilance** (`s`/`sh` whispering, menace, or soothing water), **plosives** (`p`/`b`/`t`/`d`/`k` violence, anger, shock), **assonance** (long drawn-out vowels creating melancholy or stillness).',
          '**Symbolism & motif** - tangible objects (a faded photograph, winter frost, a caged bird) standing for abstract themes such as memory, oppression, or mortality.',
        ],
        subsections: [
          {
            heading: 'Three-Layer Zoom (Quote → Method → Connotation)',
            bullets: [
              '**Layer 1 (Literal)** - what the image depicts; **Layer 2 (Association)** - specific connotations of 1–2 focal words; **Layer 3 (Thematic resonance)** - how it deepens the poet’s overall attitude.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Imagery Examples',
            examples: [
              'Maya Angelou’s *Caged Bird* contrasts the free bird’s "orange sun rays" (warmth, agency, boundless privilege) against the caged bird’s "bars of rage", transforming physical captivity into a metaphor for systemic oppression.',
              'Seamus Heaney’s tactile verbs and harsh plosives in rural childhood poems ground abstract themes of growing up in muddy, visceral sensory reality.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sibilance', definition: 'Repetition of soft hissing s/sh/z consonant sounds to evoke secrecy, danger, tenderness, or flowing movement.' },
        ],
        memoryAid: 'FLIRT checks every poem fast: Form, Language/imagery, Ideas/themes, Rhythm/rhyme, Tone shifts!',
        commonMistake: 'NEVER feature-spot ("The poet uses enjambment to make the poem flow") — always tie enjambment, metre, or sound to a SPECIFIC emotion or meaning in that exact line!',
      },
    ],
    keyTerms: [
      { term: 'Volta', definition: 'A turning point in mood, perspective, or argument within a poem, especially in a sonnet.' },
      { term: 'Enjambment', definition: 'Running a sentence over a line break without punctuation to build momentum or emotional spillover.' },
      { term: 'Caesura', definition: 'A deliberate mid-line pause created by punctuation that fractures rhythm or spotlights a key idea.' },
      { term: 'Half-rhyme', definition: 'Imperfect consonantal rhyme that creates discord, tension, or unresolved unease.' },
    ],
    checklistPoints: [
      'Explain how poetic forms (sonnet, dramatic monologue, elegy, free verse) actively shape thematic meaning',
      'Analyse metre, volta, enjambment, caesura, and rhyme schemes using exact line-break quotations',
      'Zoom into imagery, extended metaphors, and sound devices without falling into vague feature-spotting',
    ],
  },

  'iglit-1-2': {
    subtopicId: 'iglit-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Comparing Anthology Poems & Writer’s Methods',
    readingMinutes: 10,
    videoTitle: 'Structuring Top-Band Anthology Poetry Essays & Comparisons',
    youtubeId: 'Ctxd2SmMzhs',
    videoChannel: 'Mr Bruff',
    videoDuration: '9:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Anthology Essays',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Decoding 0475 Command Words & Thesis Construction', cardId: 'iglit-1-2-c1' },
      { time: '3:00', seconds: 180, label: 'Embedding Micro-Quotations & Comparing Methods Integratedly', cardId: 'iglit-1-2-c2' },
      { time: '6:10', seconds: 370, label: 'Exploring Alternative Interpretations & Informed Personal Response (AO4)', cardId: 'iglit-1-2-c3' },
    ],
    cards: [
      {
        id: 'iglit-1-2-c1',
        title: 'Decoding Cambridge 0475 Poetry Questions & Framing a Thesis',
        summary: 'Top-band essays open with a sharp conceptual thesis directly answering "In what ways does the poet vividly convey...?" rather than summarising the poem.',
        bullets: [
          '**Cambridge 0475 four Assessment Objectives** - **AO1** (detailed textual knowledge + apt quotes), **AO2** (deeper thematic meanings & attitudes), **AO3** (language, structure, form), **AO4** (sensitive, informed personal response).',
          '**Conceptual thesis** - answer *how* and *why* the poet shapes a complex or shifting emotion (e.g. "While the speaker initially appears detached, subtle cracks in imagery expose enduring grief").',
          '**Track the poem’s arc** - organise body paragraphs chronologically through emotional turning points OR thematically by contrasting tensions, never by random device lists.',
        ],
        subsections: [
          {
            heading: 'Weak Opening vs Band-8 Conceptual Thesis',
            bullets: [
              '**Avoid narrative paraphrase** - the examiner already knows the poem; lead immediately with an interpretative claim about the poet’s craft.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Thesis Examples',
            examples: [
              'Weak: "In *Ozymandias*, Shelley talks about a traveller who sees a broken statue in the desert using metaphors and alliteration."',
              'Band 8: "Shelley frames *Ozymandias* through layered narrative distance and ironic monumental imagery to expose how human tyranny inevitably decays beside indifferent nature and enduring art."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'conceptual thesis', definition: 'An overarching, arguable interpretation in the introduction that unifies every analytical paragraph around the question’s exact focus.' },
          { term: 'narrative distance', definition: 'Separating the poet or reader from events through framed speakers, past retrospection, or ironic detachment.' },
        ],
      },
      {
        id: 'iglit-1-2-c2',
        title: 'Embedding Micro-Quotations & Integrating Method Comparisons',
        summary: 'Weave 1–4 word micro-quotes seamlessly into your own grammar and compare poets’ contrasting *methods*, not just surface topics.',
        bullets: [
          '**Micro-quotation discipline** - embed brief phrases inside your analytical sentences ("The speaker’s dismissal of the painting’s ‘spot of joy’ exposes...") instead of dropping 3-line block quotes.',
          '**Point-by-point comparison** - when contrasting two anthology poems (or comparing two stanzas within one poem), pivot directly on **craft differences** using comparative discourse markers (*whereas, conversely, similarly, while Poet A tightens rhyme to..., Poet B fractures syntax to...*).',
          '**Avoid the "two separate mini-essays" trap** - never write 3 pages on Poem A and bolt Poem B onto the end.',
        ],
        subsections: [
          {
            heading: 'Integrated Comparative Paragraph Blueprint',
            bullets: [
              '**Blueprint** - Shared thematic claim → Poem A micro-quote + method zoom → Comparative pivot (*Whereas / Yet*) → Poem B micro-quote + contrasting method zoom → Evaluative verdict.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Comparative Examples',
            examples: [
              'Both poems interrogate loss of control: whereas Hardy’s monochrome imagery ("ash", "gray") freezes memory in lifeless stasis, Owen’s frantic kinetic verbs drag the reader into visceral panic.',
              'While both speakers confront mortality, Keats’s lush tactile imagery celebrates ripeness even on the edge of winter, whereas Tennyson’s stark monosyllables strip grief down to austere endurance.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'micro-quotation', definition: 'A brief 1–5 word quotation grammatically woven into an analytical sentence for razor-sharp word-level exploration.' },
        ],
      },
      {
        id: 'iglit-1-2-c3',
        title: 'Tentative Nuance, Ambiguity & Personal Response (AO4)',
        summary: 'Band-8 Cambridge responses recognise rich ambiguity and evaluate how conflicting emotions make a poem memorable.',
        bullets: [
          '**Exploratory language** - use modal nuance (*perhaps, simultaneously, could suggest, subtly undermines*) to offer two layered readings of a potent image.',
          '**Authentic AO4 voice** - never write forced formulas like "My personal response is that I like this poem." Instead, convey genuine critical engagement (*"What feels most haunting is...", "The chilling restraint of this line compels the reader to..."*).',
          '**End with resonance** - examine how the closing image or final rhyme leaves the reader unsettled, consoled, or questioning.',
        ],
        subsections: [
          {
            heading: 'Double-Layered Reading in Action',
            bullets: [
              '**Unlock top bands** - show how a single word carries both a surface comfort and an unsettling undercurrent.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Ambiguity Examples',
            examples: [
              'A metaphor of "shelter" may initially suggest maternal protection, yet combined with stifling spatial verbs it simultaneously hints at claustrophobic overprotectiveness.',
              'The final rhyming couplet provides neat musical closure on the surface, yet its bitter irony prevents genuine emotional resolution for the reader.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ambiguity', definition: 'Deliberate openness to more than one simultaneous interpretation, enriching a poem’s emotional and thematic complexity.' },
        ],
        memoryAid: 'Top-band 0475 = Thesis + Micro-quotes + Method-to-Effect Zoom + Ambiguity ("yet simultaneously...")!',
        commonMistake: 'NEVER translate a poem line by line into prose summary ("In stanza 1 he walks, in stanza 2 he feels sad") — examiners award top marks only for analysing HOW the poet’s choices shape meaning!',
      },
    ],
    keyTerms: [
      { term: 'Conceptual thesis', definition: 'An arguable central claim answering the essay question’s focus before body analysis begins.' },
      { term: 'Micro-quotation', definition: 'A concise 1–5 word quotation seamlessly embedded inside an analytical sentence.' },
      { term: 'Ambiguity', definition: 'Coexistence of multiple plausible meanings within an image, line, or ending.' },
      { term: 'AO4 Personal Response', definition: 'Critical, engaged evaluation of a text’s emotional and intellectual impact without chatty clichés.' },
    ],
    checklistPoints: [
      'Open anthology essays with a sharp conceptual thesis directly addressing Cambridge 0475 command words',
      'Embed 1–5 word micro-quotations smoothly and integrate method-based comparisons throughout',
      'Demonstrate AO4 personal engagement by exploring deliberate ambiguity and nuanced double readings',
    ],
  },

  'iglit-2-1': {
    subtopicId: 'iglit-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Characterisation, Narrative Voice & Setting',
    readingMinutes: 10,
    videoTitle: 'Analysing Characterisation, Narrative Perspective & Setting in Prose',
    youtubeId: 'yo0Msk5aonI',
    videoChannel: 'First Rate Tutors',
    videoDuration: '8:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Paper 1 Prose',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Direct vs Indirect Characterisation & Foils', cardId: 'iglit-2-1-c1' },
      { time: '2:50', seconds: 170, label: 'Narrative Voice: First-Person, Omniscient, Free Indirect Discourse', cardId: 'iglit-2-1-c2' },
      { time: '5:45', seconds: 345, label: 'Setting as Psychological Mirror, Symbolism & Pathetic Fallacy', cardId: 'iglit-2-1-c3' },
    ],
    cards: [
      {
        id: 'iglit-2-1-c1',
        title: 'Characterisation as Authorial Construct & Character Foils',
        summary: 'Treat characters as deliberate literary constructs shaped through actions, dialogue, contrasts, and evolution — never as real people you gossip about.',
        bullets: [
          '**Direct vs indirect characterisation** - direct tells traits outright; indirect reveals psychology through **Speech, Thoughts, Effect on others, Actions, and Looks (STEAL)**.',
          '**Character foils** - pairing contrasting characters throws key moral flaws or virtues into sharper relief (e.g. impulsive Okonkwo vs gentle, contemplative Unoka/Nwoye in *Things Fall Apart*, or Atticus Finch vs Bob Ewell in *To Kill a Mockingbird*).',
          '**Dynamic arc vs static character** - track whether a protagonist undergoes disillusionment, moral awakening, or tragic refusal to adapt.',
        ],
        subsections: [
          {
            heading: 'Writing About Characters as Constructs',
            bullets: [
              '**Keep the author as the subject** - write *"Achebe crafts Okonkwo’s rigid fear of weakness to expose..."* rather than *"Okonkwo shouldn’t have been so angry."*',
            ],
            exampleHeading: 'Cambridge 0475 Worked Character Examples',
            examples: [
              'In *Things Fall Apart*, Chinua Achebe uses Okonkwo’s stammer—forcing him to strike out when words fail—to reveal the brittle insecurity beneath his hyper-masculine reputation.',
              'In *To Kill a Mockingbird*, Harper Lee filters Atticus Finch’s quiet courage through Scout’s naive gaze so the reader gradually discovers moral integrity alongside the child narrator.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'foil', definition: 'A contrasting character intentionally positioned alongside a protagonist to highlight specific personality traits, values, or moral blind spots.' },
          { term: 'authorial construct', definition: 'Viewing a character not as a real person, but as a crafted literary tool created by the writer to explore themes and critique society.' },
        ],
      },
      {
        id: 'iglit-2-1-c2',
        title: 'Narrative Voice, Reliability & Free Indirect Discourse',
        summary: 'WHO tells the story—and how much they know or hide—shapes every ounce of reader sympathy, irony, and suspense.',
        bullets: [
          '**First-person narrator** - creates intimacy and immediacy, yet invites scepticism via an **unreliable narrator** (bias, youth, trauma, or self-justification).',
          '**Third-person omniscient vs limited** - omniscient narrators move across minds and deliver moral commentary; limited focalisation locks us inside one consciousness to restrict clues and build claustrophobia.',
          '**Free indirect discourse** - third-person grammar seamlessly absorbs a character’s private idioms, prejudices, and anxious questions without quotation marks.',
        ],
        subsections: [
          {
            heading: 'Spotting Narrative Irony in Dual Perspectives',
            bullets: [
              '**Dual voice (child vs adult retrospection)** - a retrospective adult narrator subtly corrects or reframes a younger self’s innocent misunderstandings.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Narrative Voice Examples',
            examples: [
              'In *To Kill a Mockingbird*, Scout’s literal, childish misreadings of Maycomb’s prejudice create sharp dramatic irony, forcing the adult reader to confront racial injustice more piercingly.',
              'In Jane Austen’s novels, free indirect discourse mimics characters’ pompous internal justifications so the reader laughs at their vanity without overt lecturing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'unreliable narrator', definition: 'A storyteller whose bias, naivety, self-deception, or limited perception causes the reader to question their version of events.' },
          { term: 'free indirect discourse', definition: 'Third-person narration that slips seamlessly into a character’s inner thoughts and voice without explicit speech tags.' },
        ],
      },
      {
        id: 'iglit-2-1-c3',
        title: 'Setting, Microcosms & Symbolic Landscape',
        summary: 'Great novelists turn weather, rooms, towns, and borders into active thematic forces that mirror internal conflict and social hierarchy.',
        bullets: [
          '**Setting as microcosm** - a single town, estate, or village (Maycomb, Umuofia, Gatsby’s East/West Egg) encapsulates wider national conflicts over class, race, or colonial change.',
          '**Pathetic fallacy & atmospheric contrast** - oppressive heat signals simmering social tension; confined domestic interiors mirror gendered entrapment; wild landscapes evoke freedom or spiritual isolation.',
          '**Recurring spatial symbols** - doors, fences, thresholds, darkness vs artificial light signal moral boundaries being crossed.',
        ],
        subsections: [
          {
            heading: 'Analysing Setting Beyond Background Scenery',
            bullets: [
              '**Ask what the setting DOES to the character** - does it trap, expose, comfort, or dwarf them?',
            ],
            exampleHeading: 'Cambridge 0475 Worked Setting Examples',
            examples: [
              'In *The Great Gatsby*, Fitzgerald juxtaposes the glittering illusion of West Egg against the desolate "Valley of Ashes" to visually indict the moral decay beneath the American Dream.',
              'In *Jane Eyre*, Brontë uses the oppressive crimson claustrophobia of the Red-Room to externalise Jane’s powerlessness as an unwanted orphan.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'microcosm', definition: 'A small, bounded setting (a village, house, or island) that reflects the power struggles and values of wider human society.' },
        ],
        memoryAid: 'Prose Trio = Construct (Character + Foil), Lens (Voice + Reliability), World (Microcosm + Setting)!',
        commonMistake: 'NEVER write about characters as if they are real people with independent lives ("I think Okonkwo should have listened to his wife") — always analyse WHY the writer shapes them that way!',
      },
    ],
    keyTerms: [
      { term: 'Foil', definition: 'A contrasting character paired with a protagonist to spotlight key virtues or flaws.' },
      { term: 'Unreliable narrator', definition: 'A narrator whose partiality, youth, or self-deception creates ironic gap between what they say and the truth.' },
      { term: 'Free indirect discourse', definition: 'Third-person narration adopting a character’s private diction and mindset without speech marks.' },
      { term: 'Microcosm', definition: 'A localised fictional setting representing larger societal hierarchies and conflicts.' },
    ],
    checklistPoints: [
      'Analyse characters strictly as crafted authorial constructs using STEAL clues and character foils',
      'Evaluate how narrative perspective, dual retrospection, and free indirect discourse manipulate reader sympathy',
      'Examine setting as a thematic microcosm and psychological mirror rather than mere backdrop',
    ],
  },

  'iglit-2-2': {
    subtopicId: 'iglit-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Themes, Context & Structuring High-Grade Prose Essays',
    readingMinutes: 10,
    videoTitle: 'Structuring Band-8 Cambridge IGCSE Prose Passage & Essay Responses',
    youtubeId: 'GALtYJxL24A',
    videoChannel: 'First Rate Tutors',
    videoDuration: '9:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Prose Essays',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Passage-Based vs Whole-Text Essay Strategy', cardId: 'iglit-2-2-c1' },
      { time: '3:10', seconds: 190, label: 'Weaving Themes, Structural Echoes & Subtle Context', cardId: 'iglit-2-2-c2' },
      { time: '6:20', seconds: 380, label: 'High-Grade Paragraph Architecture (PETAL / Conceptual PEEL)', cardId: 'iglit-2-2-c3' },
    ],
    cards: [
      {
        id: 'iglit-2-2-c1',
        title: 'Mastering Passage-Based vs Whole-Text Prose Questions',
        summary: 'Cambridge 0475 gives you a choice on set novels: passage questions demand forensic close reading of the printed extract, whereas whole-text essays demand strategic selection across the novel’s arc.',
        bullets: [
          '**Passage-based question strategy** - spend **~85% of your essay dissecting the printed extract** (beginning, turning point, and ending of the passage), while making **2–3 brief, purposeful links** to wider moments in the novel only where they sharpen your reading of the passage.',
          '**Whole-text essay strategy** - select **3–4 pivotal scenes** spanning exposition, crisis, and resolution so you show how a theme or character *evolves* across the entire narrative.',
          '**Answer the exact evaluative prompt** - if asked *"To what extent do you feel sympathy for X?"*, weigh **both** the reasons for sympathy and the authorial moments that complicate or undercut it.',
        ],
        subsections: [
          {
            heading: 'Choosing Wisely in the Exam Hall',
            bullets: [
              '**Golden rule** - pick the passage question whenever the extract is rich in imagery, dialogue tension, or turning points — the exact quotes are printed right in front of you!',
            ],
            exampleHeading: 'Cambridge 0475 Planning Splits',
            examples: [
              'Passage question on a tense confrontation: Intro thesis → Opening mood of extract → Dialogue/power shift mid-extract → Climactic closing line + structural echo from earlier in the novel → Conclusion.',
              'Whole-text essay on "How does the writer present power and injustice?": Intro thesis → Scene 1 (institutional power) → Scene 2 (domestic/personal abuse of power) → Scene 3 (resistance or tragic consequence) → Evaluative verdict.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'passage-based essay', definition: 'A Cambridge 0475 exam option focusing deeply on close linguistic and structural analysis of a printed extract in relation to the wider work.' },
          { term: 'structural arc', definition: 'The deliberate progression of a character, motif, or conflict from exposition through turning point to resolution.' },
        ],
      },
      {
        id: 'iglit-2-2-c2',
        title: 'Tracking Themes, Motifs & Subtle Context (Without Bolt-On History)',
        summary: 'Cambridge 0475 rewards textual insight over history essays — weave cultural or social context ONLY when it illuminates a specific word, symbol, or dilemma in the text.',
        bullets: [
          '**Themes are tensions, not single nouns** - upgrade *"a theme is power"* to *"the destructive tension between traditional honour and colonial disruption"* or *"how social hypocrisy silences moral conscience."*',
          '**Motifs bind structure** - tracing how one motif transforms from chapter 1 to the climax proves sophisticated whole-text mastery (e.g. mockingbirds in Lee, fire/yams in Achebe, green light in Fitzgerald).',
          '**Light-touch context** - in Cambridge 0475, context is **NOT** a separate marked AO (unlike AQA GCSE), so avoid long biographical paragraphs; keep social ideas tightly tethered to the writer’s words.',
        ],
        subsections: [
          {
            heading: 'Tethered vs Bolt-On Context',
            bullets: [
              '**Text-first principle** - quote first, analyse the writer’s craft second, and touch briefly on social norms only to explain *why* a character’s choice feels transgressive or tragic.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Context Examples',
            examples: [
              'Bolt-on (weak): "In the 1930s Great Depression many Americans were poor and there were Jim Crow laws in Alabama."',
              'Tethered (Band 8): "Lee’s stark irony when Scout observes the courtroom’s segregated balcony highlights how entrenched racial hierarchy dictates verdicts before a single witness speaks."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'structural motif', definition: 'A recurring object, image, or phrase whose shifting meaning tracks thematic development across an entire novel.' },
        ],
      },
      {
        id: 'iglit-2-2-c3',
        title: 'Building Band-8 Analytical Paragraphs',
        summary: 'Replace robotic single-quote PEE paragraphs with layered conceptual paragraphs that combine 2–3 micro-quotes, method zooms, and counter-readings.',
        bullets: [
          '**Conceptual topic sentence** - state an arguable idea about *how* the writer presents the theme/character, linking directly to the prompt’s keywords.',
          '**Quote cluster + zoom** - pair 2–3 short embedded quotes from the scene, zooming in on connotations of a single verb, metaphor, or syntactic shift.',
          '**Counter-perspective / nuance** - introduce a qualifying turn (*"Yet even here...", "However, the writer complicates our sympathy by..."*) to demonstrate Band-8 discrimination.',
          '**Concluding synthesis** - return cleanly to the prompt without repeating your introduction verbatim; weigh the writer’s lasting moral or emotional verdict.',
        ],
        subsections: [
          {
            heading: 'Upgrading Basic PEE to Band-8 Analysis',
            bullets: [
              '**Checklist for every paragraph** - Does it name the writer? Does it embed ≥2 micro-quotes? Does it zoom into at least one exact word choice or structural choice?',
            ],
            exampleHeading: 'Worked Band-8 Paragraph Transition',
            examples: [
              'Instead of "Another quote that shows tension is...", use: "This uneasy restraint fractures completely when [Author] shifts from measured narration into staccato imperatives..."',
              'Instead of "In conclusion, I have shown three ways...", use: "Ultimately, [Author] refuses to grant the reader easy comfort, leaving the closing image suspended between fragile hope and systemic inertia."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'evaluative verdict', definition: 'A nuanced final judgement weighing conflicting evidence in response to "To what extent..." or "How effectively..." prompts.' },
        ],
        memoryAid: 'Cambridge 0475 Prose = Text First (No History Essays!) + Themes as Tensions + 2–3 Micro-Quotes per Paragraph!',
        commonMistake: 'NEVER write half a page of historical biography or plot retelling on a Cambridge 0475 essay — every paragraph must analyse the writer’s textual methods directly!',
      },
    ],
    keyTerms: [
      { term: 'Passage-based essay', definition: 'Close analytical essay anchored primarily in a printed extract with selective links to the wider novel.' },
      { term: 'Structural motif', definition: 'A repeated symbol or image whose evolving meaning traces a novel’s thematic journey.' },
      { term: 'Evaluative verdict', definition: 'Balanced concluding judgement addressing nuanced or competing interpretations of the prompt.' },
      { term: 'Tethered context', definition: 'Brief cultural or social insight integrated directly into close textual analysis rather than bolted on.' },
    ],
    checklistPoints: [
      'Adapt planning smoothly between passage-based close reading (85% extract) and whole-text thematic arcs',
      'Frame themes as dynamic tensions and track recurring motifs without writing bolt-on history essays',
      'Craft conceptual Band-8 paragraphs using clustered micro-quotes, word zooms, and nuanced counter-readings',
    ],
  },

  'iglit-3-1': {
    subtopicId: 'iglit-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Dramatic Structure, Tension, Irony & Stage Directions',
    readingMinutes: 10,
    videoTitle: 'Analysing Dramatic Structure, Tension, Irony & Stage Directions',
    youtubeId: 'r9bZAgzotbg',
    videoChannel: 'Mr Bruff',
    videoDuration: '8:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Paper 2 Drama',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Freytag’s Pyramid, Rising Tension & Climactic Exits', cardId: 'iglit-3-1-c1' },
      { time: '2:50', seconds: 170, label: 'Dramatic Irony, Structural Irony & Audience Complicity', cardId: 'iglit-3-1-c2' },
      { time: '5:40', seconds: 340, label: 'Stage Directions: Lighting, Props, Silence & Proxemics', cardId: 'iglit-3-1-c3' },
    ],
    cards: [
      {
        id: 'iglit-3-1-c1',
        title: 'Dramatic Structure, Pacing & Theatrical Tension',
        summary: 'Plays are written to be watched and heard live — always refer to the *audience* (not just "reader") and analyse how act endings and scene contrasts control tension.',
        bullets: [
          '**Five-part dramatic arc (Freytag)** - **Exposition** (initial equilibrium & seeds of conflict) → **Inciting incident** → **Rising action** (escalating stakes & secrets) → **Climax / Peripeteia** (irreversible turning point) → **Denouement / Catastrophe**.',
          '**Entrances & exits** - a sharp entrance interrupts complacency (e.g. the Inspector’s doorbell cutting off Birling’s "unsinkable" speech in *An Inspector Calls*); a silent exit amplifies shock.',
          '**Scene juxtaposition** - placing a tender or comic scene immediately before catastrophe heightens emotional whiplash (e.g. the Porter’s dark comedy right after Duncan’s murder in *Macbeth*).',
        ],
        subsections: [
          {
            heading: 'Tracking Tension Across a Printed Extract',
            bullets: [
              '**Notice momentum shifts** - look for interruptions (`—`), rapid single-line exchanges (**stichomythia**), unanswered questions, and sudden shifts in volume or tempo.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Structure Examples',
            examples: [
              'In *An Inspector Calls*, Priestley triggers the sharp doorbell precisely as Arthur Birling dismisses community responsibility, structurally mocking capitalist complacency before the Inspector speaks a word.',
              'In Arthur Miller’s *The Crucible*, Act 3 escalates from legal questioning to frantic mass hysteria, turning the courtroom itself into a theatrical arena of panic.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'peripeteia', definition: 'A sudden, irreversible reversal of fortune or dramatic turning point that shifts the protagonist toward tragedy or revelation.' },
          { term: 'stichomythia', definition: 'Rapid, alternating single-line dialogue between two characters used to sharpen conflict, wit, or mounting panic.' },
        ],
      },
      {
        id: 'iglit-3-1-c2',
        title: 'Dramatic Irony & Audience Positioning',
        summary: 'When the audience knows a vital truth concealed from characters onstage, every innocent remark becomes charged with dread or biting satire.',
        bullets: [
          '**Dramatic irony** - creates a gap between character ignorance and audience awareness, generating either tragic foreboding (watching a hero walk into ruin) or sharp social critique.',
          '**Verbal irony vs situational irony** - verbal irony says one thing while meaning another (sarcasm/double meaning); situational irony delivers the exact opposite outcome of what characters expected.',
          '**Audience complicity** - playwrights position us to judge, pity, or nervously anticipate exposure as characters dig themselves deeper.',
        ],
        subsections: [
          {
            heading: 'Explaining the Effect on the Audience',
            bullets: [
              '**Always specify the audience’s reaction** - does dramatic irony provoke helpless dread, moral indignation, or uncomfortable laughter?',
            ],
            exampleHeading: 'Cambridge 0475 Worked Dramatic Irony Examples',
            examples: [
              'In *Macbeth* (Act 1 Scene 6), King Duncan praises Inverness’s "pleasant seat" and "gentle senses" while the audience already knows Lady Macbeth is plotting his assassination inside, saturating hospitality with chilling dread.',
              'In *A Streetcar Named Desire*, Blanche’s desperate illusions of aristocratic rescue clash ironically with the audience’s growing awareness of Stanley’s investigation into her past.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dramatic irony', definition: 'A theatrical technique where the audience possesses crucial knowledge hidden from characters onstage, heightening suspense, pathos, or satire.' },
        ],
      },
      {
        id: 'iglit-3-1-c3',
        title: 'Stage Directions, Lighting, Sound, Props & Proxemics',
        summary: 'Stage directions are NOT optional filler — playwrights encode subtext, power shifts, and symbolism inside silence, movement, props, and light.',
        bullets: [
          '**Proxemics & blocking** - physical distance, standing over a seated character, pacing, or turning away visually enacts dominance, guilt, or alienation.',
          '**Lighting & soundscape** - harsh brightness exposes hidden truths (Priestley’s shift from "pink and intimate" to "brighter and harder"), while offstage music or storms manifest inner breakdown (Williams’s Varsouviana polka).',
          '**Symbolic props & pauses** - a smashed glass, a paper lantern, a blood-stained dagger, or an awkward `(Pause)` conveys truths that dialogue tries to disguise.',
        ],
        subsections: [
          {
            heading: 'Analysing What Goes UNSAID Onstage',
            bullets: [
              '**Quote italicized directions directly** - treat stage directions with the exact same word-level zoom you apply to spoken dialogue!',
            ],
            exampleHeading: 'Cambridge 0475 Worked Stagecraft Examples',
            examples: [
              'In *A Streetcar Named Desire*, Tennessee Williams’s paper lantern over the naked lightbulb symbolises Blanche’s fragile need for illusion; Mitch tearing it off violently strips away both light filter and dignity.',
              'In *An Inspector Calls*, the lighting direction shifting from "pink and intimate" to "brighter and harder" visually signals the Inspector’s ruthless moral interrogation.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'proxemics', definition: 'The deliberate physical spacing, positioning, and movement of actors onstage to visually communicate power, intimacy, or conflict.' },
          { term: 'subtext', definition: 'The unspoken emotional tension, hidden motive, or true meaning operating beneath characters’ surface dialogue.' },
        ],
        memoryAid: 'Think like a Theatre Director: Audience, Entrances/Exits, Irony, Lighting/Sound, Proxemics & Props!',
        commonMistake: 'NEVER ignore italicised stage directions or call spectators "readers" throughout a drama essay — Cambridge 0475 drama examiners explicitly reward awareness of live theatrical performance!',
      },
    ],
    keyTerms: [
      { term: 'Dramatic irony', definition: 'Audience awareness of crucial facts unknown to onstage characters, intensifying suspense or satire.' },
      { term: 'Stichomythia', definition: 'Fast alternating single-line exchanges that accelerate conflict and emotional urgency.' },
      { term: 'Proxemics', definition: 'Spatial distance and onstage positioning used to display power or alienation visually.' },
      { term: 'Subtext', definition: 'Unspoken motives or psychological currents lurking underneath characters’ spoken lines.' },
    ],
    checklistPoints: [
      'Analyse dramatic structure, entrances/exits, stichomythia, and scene contrasts from a live audience perspective',
      'Explain precisely how dramatic irony manipulates audience suspense, pathos, or critical judgement',
      'Treat stage directions—lighting, soundscapes, props, pauses, and proxemics—as primary analytical evidence',
    ],
  },

  'iglit-3-2': {
    subtopicId: 'iglit-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Shakespeare & Modern Drama: Dialogue, Soliloquy & Staging',
    readingMinutes: 10,
    videoTitle: 'Shakespeare Drama: Structure, Soliloquy & Staging Analysis',
    youtubeId: '95Vfcb7VvCA',
    videoChannel: 'Mr Bruff',
    videoDuration: '9:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Drama Texts',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Soliloquies, Asides & Psychological Intimacy', cardId: 'iglit-3-2-c1' },
      { time: '3:00', seconds: 180, label: 'Blank Verse vs Prose & Shared Lines in Shakespeare', cardId: 'iglit-3-2-c2' },
      { time: '6:05', seconds: 365, label: 'Modern Realism, Expressionism & Power in Dialogue', cardId: 'iglit-3-2-c3' },
    ],
    cards: [
      {
        id: 'iglit-3-2-c1',
        title: 'Soliloquies, Asides & Tragic Hamartia',
        summary: 'Soliloquies strip away social masks so the audience witnesses a character’s raw moral conflict, ambition, or self-deception directly.',
        bullets: [
          '**Soliloquy** - a character speaks alone onstage, sharing private thoughts directly with the audience (note shifts from hesitation to resolve, self-questioning, and recurring imagery).',
          '**Aside** - a brief whispered remark heard only by the audience (or one confidant), exposing duplicity and forging uncomfortable intimacy with a schemer (e.g. Iago or Macbeth).',
          '**Tragic mechanics** - **hamartia** (fatal flaw or misjudgement), **hubris** (excessive pride), **anagnorisis** (moment of agonising self-recognition), and **catharsis** (audience emotional purging of pity and fear).',
        ],
        subsections: [
          {
            heading: 'Analysing Inner Conflict Inside a Soliloquy',
            bullets: [
              '**Watch the syntax** - broken dashes, conditional *"If..."* clauses, and antitheses reveal a mind wrestling with its own conscience.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Soliloquy Examples',
            examples: [
              'In *Macbeth* (1.7), Macbeth’s tangled clauses ("If it were done when ’tis done") and angelic vs hellish antithesis prove he understands Duncan’s moral innocence even as ambition overrides conscience.',
              'In *The Tempest*, Prospero’s reflective speeches chart his gradual shift from vengeful mastery toward mercy and renunciation of magic.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'soliloquy', definition: 'A dramatic speech delivered by a character alone onstage, granting the audience direct access to private fears, motives, or inner debate.' },
          { term: 'hamartia', definition: 'A tragic protagonist’s fatal flaw or crucial error in judgement that precipitates their downfall.' },
        ],
      },
      {
        id: 'iglit-3-2-c2',
        title: 'Blank Verse, Prose Shifts & Shared Lines in Shakespeare',
        summary: 'Shakespeare uses verse rhythm itself as a built-in stage direction — when noble characters abandon blank verse for prose, mental or social order is fracturing.',
        bullets: [
          '**Blank verse** - unrhymed iambic pentameter used for noble rank, composure, and elevated reflection; **rhyming couplets** often seal a decisive plot turn or exit.',
          '**Drop into prose** - traditionally spoken by comic or lower-status characters, so when a tragic noble switches to prose (e.g. Lady Macbeth sleepwalking in Act 5 Scene 1), it signals **psychological disintegration**.',
          '**Shared lines (antistrophe / split pentameter)** - two characters complete a single 10-syllable line together, signalling breathless interruption, urgent conspiracy, or emotional unity.',
        ],
        subsections: [
          {
            heading: 'Decoding Embedded Stage Directions in Elizabethan Texts',
            bullets: [
              '**Minimal original stage directions** - because Shakespeare wrote for daylight thrust stages (like the Globe), cues for darkness, kneeling, tears, or fear are baked directly inside characters’ spoken words!',
            ],
            exampleHeading: 'Cambridge 0475 Worked Shakespeare Craft Examples',
            examples: [
              'In *Macbeth* (2.2), Macbeth and Lady Macbeth split single iambic lines ("Didst thou not hear a noise?" / "I heard the owl scream..."), forcing actors to cue instantaneously with panicked urgency.',
              'Lady Macbeth’s collapse from commanding blank verse in Act 1 into fragmented, repetitive prose ("Out, damned spot!") in Act 5 audibly enacts the shattering of her iron self-control.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'blank verse', definition: 'Unrhymed iambic pentameter, the standard verse form of Shakespearean drama signalling status, order, or measured control.' },
          { term: 'shared line', definition: 'A single line of iambic pentameter split between two speakers to enforce rapid-fire cues, interruption, or intense rapport.' },
        ],
      },
      {
        id: 'iglit-3-2-c3',
        title: 'Modern Drama: Dialogue Power, Realism & Expressionist Staging',
        summary: 'Modern playwrights (Miller, Williams, Priestley, Fugard) weaponise interruptions, dialect, domestic claustrophobia, and plastic theatre to expose social hypocrisy.',
        bullets: [
          '**Conversational dominance** - measure **who speaks most**, who interrupts, who uses imperatives/questions, and whose silence speaks loudest during an interrogation or family argument.',
          '**Social realism vs expressionism (plastic theatre)** - realism mimics everyday middle-class parlours to trap characters in respectable façades; expressionism bends light, colour, and sound to project a character’s fractured mind onstage.',
          '**Multiple staging possibilities** - top Band-8 drama answers briefly consider how an actor’s delivery (e.g. sarcastic vs genuinely pleading) shifts an audience’s sympathy.',
        ],
        subsections: [
          {
            heading: 'Analysing Power Shifts Through Dialogue',
            bullets: [
              '**Compare Act 1 vs Act 3 voices** - watch characters who begin commanding imperatives shrink into defensive questions by the climax.',
            ],
            exampleHeading: 'Cambridge 0475 Worked Modern Drama Examples',
            examples: [
              'In *The Crucible*, John Proctor’s blunt, plain-spoken diction clashes starkly with Deputy Governor Danforth’s cold legalistic rhetoric, staging integrity against corrupt institutional authority.',
              'In *A Streetcar Named Desire*, Tennessee Williams’s "plastic theatre" blends transparent scrim walls, lurid shadows, and jazz rhythms so the staging externalises Blanche’s crumbling sanity.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'plastic theatre', definition: 'Tennessee Williams’s dramatic method combining lighting, sound, set design, and props holistically to externalise psychological states onstage.' },
        ],
        memoryAid: 'Shakespeare = Verse vs Prose + Shared Lines + Soliloquy; Modern Drama = Dialogue Power + Subtext + Lighting/Sound!',
        commonMistake: 'NEVER summarise a soliloquy line-for-line as plot — analyse how its shifting rhythm, antithesis, and imagery expose the speaker’s divided mind to the audience!',
      },
    ],
    keyTerms: [
      { term: 'Soliloquy', definition: 'Private onstage monologue exposing a character’s inner conflict directly to the audience.' },
      { term: 'Hamartia', definition: 'Fatal flaw or tragic error in judgement triggering a protagonist’s downfall.' },
      { term: 'Blank verse', definition: 'Unrhymed iambic pentameter representing order, nobility, or composed speech in Shakespeare.' },
      { term: 'Shared line', definition: 'Split ten-syllable line shared across two speakers to signal hurried interruption or tension.' },
    ],
    checklistPoints: [
      'Analyse how soliloquies, asides, and tragic mechanics (hamartia, hubris, anagnorisis) manipulate audience sympathy',
      'Explain the dramatic significance of blank verse vs prose shifts and split shared lines in Shakespeare',
      'Evaluate dialogue dominance, interruptions, realism, and expressionist staging in modern drama',
    ],
  },

  'iglit-4-1': {
    subtopicId: 'iglit-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Approaching Unseen Poetry: Tone, Shifts & Language',
    readingMinutes: 9,
    videoTitle: 'How to Tackle Cambridge IGCSE 0475 Unseen Poetry Step by Step',
    youtubeId: 'uMzxI-7M3RY',
    videoChannel: 'First Rate Tutors',
    videoDuration: '8:50',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Paper 4 Unseen Poetry',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'The Three-Read Protocol & Decoding the Bullet Prompts', cardId: 'iglit-4-1-c1' },
      { time: '2:50', seconds: 170, label: 'Tracking Tone, Emotional Shifts & Closing Resonance', cardId: 'iglit-4-1-c2' },
      { time: '5:45', seconds: 345, label: 'Selecting High-Yield Images & Handling Unfamiliar Words Calmly', cardId: 'iglit-4-1-c3' },
    ],
    cards: [
      {
        id: 'iglit-4-1-c1',
        title: 'The 10-Minute Three-Read Protocol for Unseen Poetry',
        summary: 'Never dive straight into writing — three disciplined reads transform an intimidating unfamiliar poem into a clear, structured Band-8 essay.',
        bullets: [
          '**Read 1 (Big picture & literal situation)** - read the title, the question, and the **bullet points** (which are examiner signposts!), then read straight through once for the speaker, subject, and core emotion.',
          '**Read 2 (Tone & structural shifts)** - mark where the mood pivots (*yet, but, then, now*), check the opening vs closing stanzas, and notice stanza shapes, enjambment, or refrain.',
          '**Read 3 (Forensic annotation)** - underline **6–8 rich short images** (vivid verbs, metaphors, sound patterns, contrasts) that directly answer the question.',
        ],
        subsections: [
          {
            heading: 'Using Cambridge 0475 Paper 4 Bullet Prompts',
            bullets: [
              '**Treat bullets as launchpads, not rigid boxes** - weaving the bullets’ ideas (e.g. imagery, contrasts, speaker’s changing feelings) into a flowing essay ensures complete coverage without choppy subheadings.',
            ],
            exampleHeading: 'Worked Unseen Annotation Plan (10 mins)',
            examples: [
              'Prompt: "How does the poet memorably convey the speaker’s feelings about returning to a childhood home?"',
              'Plan: Intro thesis (bittersweet collision of nostalgic warmth and alienating decay) → Para 1: Opening sensory comfort → Para 2: Mid-poem shift/volta into jarring emptiness → Para 3: Closing symbolic image & unresolved longing.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'speaker (persona)', definition: 'The narrative voice speaking inside a poem — never automatically assumed to be identical to the poet’s own biography.' },
          { term: 'refrain', definition: 'A recurring line or phrase repeated at intervals in a poem, often subtly shifting in emotional meaning each time it returns.' },
        ],
      },
      {
        id: 'iglit-4-1-c2',
        title: 'Pinpointing Nuanced Tone & Structural Shifts',
        summary: 'Examiners love essays that identify *complex, mixed, or shifting* tones — almost no great unseen poem has only one flat emotion from start to finish.',
        bullets: [
          '**Name mixed emotions** - replace flat labels ("sad", "happy") with paired tensions: **wistful yet wry**, **awed yet intimidated**, **tender yet quietly resentful**, **defiant yet vulnerable**.',
          '**Hunt the turning point** - trace *how* the poem moves: past vs present, outer landscape vs inner memory, illusion vs stark reality, or noise vs silence.',
          '**Spotlight the title and final line** - titles establish ironic expectations; final lines often deliver an emotional twist, lingering question, or haunting echo.',
        ],
        subsections: [
          {
            heading: 'Tracking a Mid-Poem Shift Analytically',
            bullets: [
              '**Compare opening and ending directly** - juxtaposing line 1 with the closing stanza reveals the poet’s overarching structural design in seconds.',
            ],
            exampleHeading: 'Worked Tone-Shift Examples',
            examples: [
              'Opening stanza: soft sibilance and warm domestic imagery evoke nostalgic safety ("glowing hearth", "quiet linen").',
              'Closing stanza after a mid-poem dash: stark monosyllables and winter imagery strip warmth away, exposing the speaker’s painful recognition that childhood cannot be reclaimed.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tonal shift', definition: 'A noticeable change in the speaker’s emotional stance or attitude across a poem, frequently signalling insight, disillusionment, or conflict.' },
        ],
      },
      {
        id: 'iglit-4-1-c3',
        title: 'Staying Calm With Obscure Imagery & Writing Perceptively',
        summary: 'You do NOT need to understand every single archaic word to score 25/25 on Unseen Poetry — anchor yourself in the images you grasp deeply and explore tentative layers.',
        bullets: [
          '**Use context clues for tricky words** - inspect neighbouring words, positive/negative connotations, and punctuation before guessing or moving to clearer focal images.',
          '**Explore possibilities tentatively** - examiners celebrate honest, thoughtful exploration (*"This stark image could evoke both...", "Alternatively, the verb might imply..."*).',
          '**Keep the essay holistic** - avoid dissecting stanza 1 for 25 minutes and rushing the ending; allocate balanced time so you analyse the poem’s closing impact thoroughly.',
        ],
        subsections: [
          {
            heading: 'Unseen Time Budget (75 Minutes Total on Paper 4)',
            bullets: [
              '**Smart pacing** - 12 min reading & planning → 55 min writing (Intro + 4 tight analytical paragraphs + Conclusion) → 8 min proofing & tightening word zooms.',
            ],
            exampleHeading: 'Worked Unseen Word-Zoom Example',
            examples: [
              'Line: "Rust nibbled the padlock’s patient iron jaw."',
              'Band-8 analysis: Personifying rust as "nibbling" evokes slow, relentless decay rather than sudden violence, while the metaphor of a "patient iron jaw" suggests the abandoned gate silently outlasts human haste.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pathos', definition: 'A literary quality that evokes deep pity, tenderness, or poignant sorrow in the reader.' },
        ],
        memoryAid: 'Unseen Poetry 3-Read Rule: 1 = Situation & Tone, 2 = Shifts & Ending, 3 = 6–8 Juicy Micro-Quotes!',
        commonMistake: 'NEVER panic over one unfamiliar word or confuse the fictional "speaker" with the poet’s biography — use "the speaker" for voice and "the poet" for crafting decisions!',
      },
    ],
    keyTerms: [
      { term: 'Speaker (persona)', definition: 'The constructed voice speaking the poem, distinct from the poet who crafts the methods.' },
      { term: 'Tonal shift', definition: 'A deliberate pivot in attitude or emotion across a poem’s progression.' },
      { term: 'Refrain', definition: 'A repeated line or phrase whose emotional weight deepens or alters with each recurrence.' },
      { term: 'Pathos', definition: 'Evocation of poignant pity, vulnerability, or tender sorrow in the reader.' },
    ],
    checklistPoints: [
      'Apply the 3-read protocol to decode unseen poems calmly and utilise Paper 4 bullet prompts naturally',
      'Identify nuanced, mixed tones and track structural shifts between opening, middle, and closing lines',
      'Distinguish cleanly between speaker and poet while zooming into 6–8 high-yield micro-quotations',
    ],
  },

  'iglit-4-2': {
    subtopicId: 'iglit-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Unseen Prose Extracts & Writing Perceptive Personal Responses',
    readingMinutes: 9,
    videoTitle: 'Mastering Cambridge IGCSE 0475 Unseen Prose Analysis & Personal Response',
    youtubeId: '0QQkrnv9Cxo',
    videoChannel: 'First Rate Tutors',
    videoDuration: '9:00',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Literature in English (0475) Paper 4 Unseen Prose',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Mapping Unseen Prose: Narrative Arc, Tension & Focalisation', cardId: 'iglit-4-2-c1' },
      { time: '3:00', seconds: 180, label: 'Analysing Dialogue, Subtext, Syntax & Pacing Shifts', cardId: 'iglit-4-2-c2' },
      { time: '6:00', seconds: 360, label: 'Delivering an Informed, Perceptive Personal Response (AO4)', cardId: 'iglit-4-2-c3' },
    ],
    cards: [
      {
        id: 'iglit-4-2-c1',
        title: 'Mapping an Unseen Prose Extract From Opening to Ending',
        summary: 'Divide every unseen prose passage into 3–4 structural movements (establishing mood → escalating complication → climax/revelation → lingering close) before selecting quotes.',
        bullets: [
          '**Read the contextual rubric first** - the short italicised introduction above the passage names the characters, time period, and exact situation so you orient yourself instantly.',
          '**Spot narrative focalisation** - ask *whose* consciousness filters the scene, what details they obsess over, and what emotions they try to suppress.',
          '**Contrast opening vs closing atmosphere** - unseen prose extracts are carefully curated by examiners to show a subtle psychological shift or sudden disruption.',
        ],
        subsections: [
          {
            heading: 'Four Structural Lenses for Unseen Prose',
            bullets: [
              '**Lens 1** - Establishing setting & sensory mood; **Lens 2** - Character gesture & interiority; **Lens 3** - Dialogue power & silence; **Lens 4** - Pacing shift & final sentence resonance.',
            ],
            exampleHeading: 'Worked Unseen Prose Mapping Example',
            examples: [
              'Movement 1 (Lines 1–12): Long, breathless clauses establish oppressive midday heat and restless anticipation.',
              'Movement 2 (Lines 13–28): Abrupt clipped dialogue reveals simmering family resentment beneath polite small talk.',
              'Movement 3 (Lines 29–40): A single short closing paragraph focuses on a discarded letter, crystallising irreversible estrangement.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'focalisation', definition: 'The specific character perspective through whose senses, biases, and emotions the third-person narrative filters events.' },
          { term: 'interiority', definition: 'The representation of a character’s private thoughts, anxieties, memories, and unspoken psychological reactions.' },
        ],
      },
      {
        id: 'iglit-4-2-c2',
        title: 'Dissecting Syntax, Pacing, Dialogue & Subtext in Prose',
        summary: 'Prose writers build suspense and psychological realism not just through metaphors, but through sentence rhythms, speech tags, physical micro-gestures, and unspoken tension.',
        bullets: [
          '**Syntactic pacing** - **parataxis / short declarative sentences** convey emotional numbness, blunt shock, or urgency; **accumulating lists & subordinate clauses** mirror sensory overwhelm or racing panic.',
          '**Dialogue & reporting verbs** - contrast *what* characters say with *how* they move ("‘I’m fine,’ she said, shredding the napkin beneath the table") to uncover raw subtext.',
          '**Sensory focus & verbs** - pinpoint active vs passive verbs: passive constructions make characters seem helplessly acted upon by setting or authority.',
        ],
        subsections: [
          {
            heading: 'Spotting Subtext in Everyday Gestures',
            bullets: [
              '**Physical tells** - averted gazes, clenched cutlery, forced laughter, and unfinished sentences often reveal far more than direct emotional declarations.',
            ],
            exampleHeading: 'Worked Prose Subtext Examples',
            examples: [
              'Quote: "‘Stay as long as you like,’ Arthur murmured, already folding his spectacles into their brass case."',
              'Band-8 zoom: The polite hospitality of Arthur’s words is directly undermined by the adverb "already" and his closing gesture, exposing quiet impatience and polite hostility.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'parataxis', definition: 'Placing short, clipped clauses side by side without subordinating conjunctions to create stark immediacy, emotional restraint, or rapid pace.' },
          { term: 'ironic juxtaposition', definition: 'Placing a character’s polite surface words directly alongside contradicting gestures or harsh setting details to reveal hidden truth.' },
        ],
      },
      {
        id: 'iglit-4-2-c3',
        title: 'Writing a Perceptive Personal Response (Band-8 AO4)',
        summary: 'Top Cambridge 0475 essays sound like an alert, sensitive literary critic—evaluative, nuanced, and deeply attentive to how every detail shapes reader sympathy.',
        bullets: [
          '**Track shifting reader sympathy** - show how the writer pulls us closer to a flawed character in one paragraph and distances us with unease in the next.',
          '**Avoid mechanical PEE clichés** - vary analytical verbs (*intensifies, unsettles, undercuts, crystallises, juxtaposes, evokes*) instead of repeating *"this shows"* fifteen times.',
          '**Synthesise the closing impact** - examine why the examiner ended the extract at that exact sentence: does it deliver quiet catharsis, an ominous cliffhanger, or bitter irony?',
        ],
        subsections: [
          {
            heading: 'Upgrading Generic Commentary to Perceptive AO4',
            bullets: [
              '**Ask "So what?" after every quote** - push beyond identifying an emotion ("he feels nervous") to explaining *why* that vulnerability compels the reader’s sympathy or unease.',
            ],
            exampleHeading: 'Worked AO4 Upgrade Examples',
            examples: [
              'Generic (Band 5): "This quote shows the narrator feels nervous and makes the reader feel sorry for him."',
              'Perceptive (Band 8): "By reducing the narrator’s defiance to a barely audible stammer, the writer poignantly exposes how years of intimidation erode even ordinary self-assertion, sharpening our indignation on his behalf."',
            ],
          },
        ],
        glossaryPills: [
          { term: 'reader sympathy', definition: 'The degree of emotional alignment, compassion, or critical distance a writer deliberately engineers between the reader and a character.' },
        ],
        memoryAid: 'Unseen Prose = Rubric Context + 3–4 Movements + Subtext in Gestures/Syntax + Shifting Reader Sympathy!',
        commonMistake: 'NEVER treat Unseen Prose like an English Language comprehension test by merely retelling what happens — focus relentlessly on HOW narrative voice, imagery, syntax, and subtext create emotional impact!',
      },
    ],
    keyTerms: [
      { term: 'Focalisation', definition: 'Filtering third-person narration through a specific character’s perception and emotional bias.' },
      { term: 'Interiority', definition: 'Portrayal of a character’s inner consciousness, unspoken doubts, and psychological conflict.' },
      { term: 'Parataxis', definition: 'Succession of short, unsubordinated clauses creating stark tension, pace, or emotional restraint.' },
      { term: 'Reader sympathy', definition: 'Emotional closeness or critical distance actively shaped by a writer’s narrative choices.' },
    ],
    checklistPoints: [
      'Map unseen prose extracts into 3–4 structural movements using the contextual rubric and opening-to-ending contrasts',
      'Analyse dialogue subtext, physical tells, syntactic pacing, and focalisation with micro-quotations',
      'Sustain a perceptive, evaluative AO4 personal voice that tracks shifting reader sympathy without plot summary',
    ],
  },
};

export const IGCSE_ENGLISH_LIT_QUIZZES: QuizQuestion[] = [
  // 1.1 Poetic Form, Structure, Metre & Imagery
  {
    id: 'iglit-q-1-1-1',
    subtopicId: 'iglit-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the literary term for a decisive shift in mood, perspective, or argument within a sonnet?',
    options: ['Caesura', 'Volta', 'Quatrain', 'Stichomythia'],
    correctIndex: 1,
    explanation: 'A volta marks the turning point in thought or tone, classically at line 9 (Petrarchan) or line 13 (Shakespearean).',
  },
  {
    id: 'iglit-q-1-1-2',
    subtopicId: 'iglit-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between enjambment and caesura, and give one specific dramatic effect of EITHER technique in poetry.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Enjambment occurs when a sentence runs across a line break without punctuation, whereas caesura is a mid-line pause created by punctuation. Enjambment can create urgent momentum or emotional overflow (while caesura can fracture rhythm to mirror shock or hesitation).',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Accurately distinguishes enjambment (run-on line) from caesura (mid-line pause)',
          requiredKeywordGroups: [
            ['run', 'across', 'break', 'continues', 'no punctuation', 'spill'],
            ['pause', 'middle', 'mid-line', 'punctuation', 'stop'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Links technique to a specific emotional or rhythmic effect (not generic "flow")',
          requiredKeywordGroups: [
            ['urgency', 'momentum', 'overflow', 'pace', 'hesitation', 'shock', 'grief', 'tension', 'fracture', 'finality', 'breathless'],
          ],
        },
      ],
    },
    explanation: 'Always define the structural device cleanly and tie it to a specific psychological or rhythmic effect.',
  },
  {
    id: 'iglit-q-1-1-3',
    subtopicId: 'iglit-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each poetic method to its precise definition:',
    pairs: [
      { left: 'Dramatic monologue', right: 'Single persona addressing a silent listener, revealing inner bias' },
      { left: 'Half-rhyme', right: 'Near-matching consonants creating discord and unease' },
      { left: 'Sibilance', right: 'Repeated s/sh sounds evoking secrecy, menace, or softness' },
      { left: 'Elegy', right: 'Reflective poem mourning loss or death' },
    ],
    explanation: 'Accurate literary terminology paired with exact contextual effect underpins top-band AO3 marks.',
  },
  {
    id: 'iglit-q-1-1-4',
    subtopicId: 'iglit-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the statements on poetic metre and imagery:',
    segments: ['Ten-syllable verse alternating unstressed and stressed beats is called ', ', and harsh p/b/t/k consonant sounds used to convey violence or force are ', '.'],
    wordBank: ['iambic pentameter', 'plosives', 'free verse', 'assonance'],
    answers: ['iambic pentameter', 'plosives'],
    explanation: 'Iambic pentameter creates a steady five-beat pulse; plosives deliver sharp percussive impact.',
  },
  {
    id: 'iglit-q-1-1-5',
    subtopicId: 'iglit-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is writing "The poet uses enjambment to make the poem flow nicely" weak in Cambridge IGCSE 0475?',
    options: [
      'Enjambment is never used in anthology poems',
      'It is vague feature-spotting that fails to explain the specific mood, pace, or thematic meaning created at that exact line break',
      'Examiners dislike mentioning structural terms',
      'Enjambment only slows poems down',
    ],
    correctIndex: 1,
    explanation: 'Examiners reward method-to-meaning analysis tailored to the exact line rather than generic comments.',
  },

  // 1.2 Comparing Anthology Poems & Writer's Methods
  {
    id: 'iglit-q-1-2-1',
    subtopicId: 'iglit-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which opening sentence represents a Band-8 conceptual thesis for a Cambridge 0475 poetry essay?',
    options: [
      'In this poem there are four stanzas and the poet uses similes, metaphors, and rhyme.',
      'First the speaker looks at the landscape, then remembers a friend, and finally walks away.',
      'Through austere winter imagery and cyclical structure, the poet conveys how bitter disillusionment permanently stains memory.',
      'My personal response is that this is a very interesting and powerful poem.',
    ],
    correctIndex: 2,
    explanation: 'A conceptual thesis directly synthesises overarching methods and deeper thematic meaning in response to the question.',
  },
  {
    id: 'iglit-q-1-2-2',
    subtopicId: 'iglit-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain TWO ways to make a poetry comparison essay genuinely integrated rather than writing two separate mini-essays.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Organise paragraphs around shared themes or contrasting methods rather than poem-by-poem blocks, and pivot directly between both poems inside each paragraph using comparative connectives (whereas, conversely, similarly) to contrast specific language or structural choices.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Structures paragraphs by theme/idea or compares both poems inside every paragraph',
          requiredKeywordGroups: [
            ['theme', 'idea', 'point-by-point', 'within each paragraph', 'both poems', 'side by side'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Compares writer’s methods/craft using comparative discourse markers',
          requiredKeywordGroups: [
            ['method', 'craft', 'imagery', 'structure', 'whereas', 'conversely', 'similarly', 'contrast', 'pivot'],
          ],
        },
      ],
    },
    explanation: 'Integrated method comparison inside every thematic paragraph unlocks top bands.',
  },
  {
    id: 'iglit-q-1-2-3',
    subtopicId: 'iglit-1-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO practices that strongly elevate AO3 and AO4 marks in an anthology poetry essay:',
    options: [
      'Embedding brief 1–5 word micro-quotations smoothly inside analytical sentences',
      'Exploring deliberate ambiguity with tentative double readings ("yet simultaneously suggests...")',
      'Copying entire four-line stanzas before paraphrasing the plot',
      'Writing "My personal response is that I enjoyed this poem" at the end of every paragraph',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Micro-quotations enable sharp word-level zooms, and exploring ambiguity demonstrates mature AO4 engagement.',
  },
  {
    id: 'iglit-q-1-2-4',
    subtopicId: 'iglit-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Cambridge 0475 Assessment Objective strategy:',
    segments: ['Short quotations woven grammatically into your own prose are ', ', while exploring multiple plausible meanings of a rich image demonstrates sensitivity to ', '.'],
    wordBank: ['micro-quotations', 'ambiguity', 'paraphrase', 'stanzas'],
    answers: ['micro-quotations', 'ambiguity'],
    explanation: 'Embedded micro-quotations and sensitivity to ambiguity separate top-band essays from mechanical ones.',
  },
  {
    id: 'iglit-q-1-2-5',
    subtopicId: 'iglit-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which of the following is assessed under AO3 in Cambridge IGCSE Literature in English (0475)?',
    options: [
      'Memorising the poet’s exact birth date',
      'Recognising and appreciating ways in which writers use language, structure, and form to create and shape meanings and effects',
      'Summarising the plot chronologically without quotations',
      'Writing creative stories based on the poem',
    ],
    correctIndex: 1,
    explanation: 'AO3 specifically assesses appreciation of how language, structure, and form shape meaning and effect.',
  },

  // 2.1 Characterisation, Narrative Voice & Setting
  {
    id: 'iglit-q-2-1-1',
    subtopicId: 'iglit-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is a "character foil" in a prose novel?',
    options: [
      'A minor character who never speaks',
      'A contrasting character intentionally positioned alongside a protagonist to highlight specific traits, values, or flaws',
      'The narrator’s childhood memory',
      'A twist ending that reverses the plot',
    ],
    correctIndex: 1,
    explanation: 'Foils throw key aspects of a protagonist’s character and morality into sharper contrast.',
  },
  {
    id: 'iglit-q-2-1-2',
    subtopicId: 'iglit-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain what free indirect discourse is AND how an unreliable narrator can create ironic tension for the reader.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Free indirect discourse blends third-person narration seamlessly with a character’s private inner thoughts and diction without speech marks. An unreliable narrator’s bias, youth, or self-deception creates an ironic gap so the reader sees truths the narrator misses or conceals.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Defines free indirect discourse (third-person blending into character thoughts/voice)',
          requiredKeywordGroups: [
            ['third-person', 'third person', 'narration'],
            ['thought', 'inner', 'voice', 'mind', 'perspective'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Explains unreliable narrator creating gap/irony/questioning via bias or naivety',
          requiredKeywordGroups: [
            ['bias', 'naive', 'self-deception', 'limited', 'hides', 'distort'],
            ['irony', 'gap', 'question', 'truth', 'reader sees', 'doubt'],
          ],
        },
      ],
    },
    explanation: 'Both techniques manipulate the distance between character consciousness and reader judgement.',
  },
  {
    id: 'iglit-q-2-1-3',
    subtopicId: 'iglit-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each prose craft term to its analytical meaning:',
    pairs: [
      { left: 'Authorial construct', right: 'Viewing a character as a crafted literary tool exploring themes' },
      { left: 'Microcosm', right: 'A small fictional setting representing wider societal conflicts' },
      { left: 'Pathetic fallacy', right: 'Weather or environment mirroring character emotion or social tension' },
      { left: 'Dual perspective', right: 'Adult retrospective narrator framing a younger self’s innocent perceptions' },
    ],
    explanation: 'Treating characters, voices, and worlds as deliberate authorial constructs elevates prose essays immediately.',
  },
  {
    id: 'iglit-q-2-1-4',
    subtopicId: 'iglit-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the characterisation principles:',
    segments: ['Indirect characterisation reveals psychology through Speech, Thoughts, Effect on others, Actions, and Looks, while a small town standing for national social divisions acts as a ', '. Always treat characters as ', ' rather than real people.'],
    wordBank: ['microcosm', 'authorial constructs', 'soliloquies', 'refrains'],
    answers: ['microcosm', 'authorial constructs'],
    explanation: 'Keeping the writer’s deliberate craft at the centre prevents chatty character gossip.',
  },
  {
    id: 'iglit-q-2-1-5',
    subtopicId: 'iglit-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which analytical phrasing best treats a fictional character as an authorial construct?',
    options: [
      'Okonkwo was really unfair and should have calmed down.',
      'Achebe constructs Okonkwo’s rigid hostility toward gentleness to expose the psychological toll of hyper-masculine insecurity.',
      'If I met Atticus Finch I would ask him for advice.',
      'Gatsby made bad choices because he loved Daisy too much.',
    ],
    correctIndex: 1,
    explanation: 'Naming the author and active crafting verbs ("constructs... to expose") focuses squarely on literary craft.',
  },

  // 2.2 Themes, Context & Structuring High-Grade Prose Essays
  {
    id: 'iglit-q-2-2-1',
    subtopicId: 'iglit-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'On a Cambridge IGCSE 0475 passage-based prose question, roughly how much of your essay should focus directly on close analysis of the printed extract?',
    options: [
      'About 20% extract and 80% plot summary of the rest of the novel',
      'About 85% close forensic analysis of the printed extract with 2–3 brief, purposeful links to the wider novel',
      '50% historical biography of the author and 50% extract',
      'Only one sentence from the extract',
    ],
    correctIndex: 1,
    explanation: 'Passage questions reward forensic engagement with the printed extract while demonstrating awareness of its wider significance.',
  },
  {
    id: 'iglit-q-2-2-2',
    subtopicId: 'iglit-2-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Why should you avoid writing long standalone historical background paragraphs in Cambridge IGCSE 0475 Literature essays, and how should context be handled instead?',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'In Cambridge 0475, context is not a separate assessed AO, so bolt-on history wastes time and drifts away from the text. Instead, tether brief social or cultural insights directly to specific quotations and authorial choices to sharpen textual meaning.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Notes context is not a separate AO / standalone history distracts from textual analysis',
          requiredKeywordGroups: [
            ['not a separate', 'no separate', 'not separately', 'bolt-on', 'drift', 'waste', 'text first', 'textual'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Advises integrating/tethering brief context directly to specific quotes or writer’s craft',
          requiredKeywordGroups: [
            ['tether', 'link', 'integrate', 'weave', 'brief'],
            ['quote', 'quotation', 'word', 'text', 'craft', 'character', 'meaning'],
          ],
        },
      ],
    },
    explanation: 'Cambridge 0475 assesses AO1–AO4 strictly through the text itself, so context only earns credit when illuminating textual choices.',
  },
  {
    id: 'iglit-q-2-2-3',
    subtopicId: 'iglit-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which phrasing frames a novel’s theme at Band-8 conceptual level rather than a flat single noun?',
    options: [
      'A theme in the book is power.',
      'The novel is about family and money.',
      'The writer interrogates the corrosive tension between inherited privilege and moral integrity.',
      'There are lots of themes like love and war.',
    ],
    correctIndex: 2,
    explanation: 'Framing themes as dynamic tensions immediately enables deeper argument and nuance.',
  },
  {
    id: 'iglit-q-2-2-4',
    subtopicId: 'iglit-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the high-grade prose essay checklist:',
    segments: ['A recurring symbol whose shifting significance unifies a novel is a ', ', and responding to "To what extent..." prompts requires weighing counter-evidence to reach an ', '.'],
    wordBank: ['structural motif', 'evaluative verdict', 'caesura', 'dramatic monologue'],
    answers: ['structural motif', 'evaluative verdict'],
    explanation: 'Tracking evolving motifs and offering a balanced evaluative verdict demonstrate sophisticated control.',
  },
  {
    id: 'iglit-q-2-2-5',
    subtopicId: 'iglit-2-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO strong techniques for structuring a whole-text prose essay:',
    options: [
      'Selecting 3–4 pivotal moments across exposition, crisis, and resolution to trace development',
      'Clustering 2–3 short embedded micro-quotations within each conceptual paragraph',
      'Retelling every chapter in chronological order from Chapter 1 to the end',
      'Repeating the exact same quotation in every paragraph',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Strategic scene selection across the novel’s arc plus clustered micro-quotes shows comprehensive mastery.',
  },

  // 3.1 Dramatic Structure, Tension, Irony & Stage Directions
  {
    id: 'iglit-q-3-1-1',
    subtopicId: 'iglit-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What term describes rapid, alternating single-line dialogue between two onstage characters used to heighten conflict or urgency?',
    options: ['Soliloquy', 'Stichomythia', 'Elegy', 'Parataxis'],
    correctIndex: 1,
    explanation: 'Stichomythia creates quick-fire verbal tennis that escalates dramatic tension onstage.',
  },
  {
    id: 'iglit-q-3-1-2',
    subtopicId: 'iglit-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how dramatic irony works onstage AND give ONE example of how stage directions (lighting, props, or proxemics) convey subtext.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Dramatic irony occurs when the audience knows crucial facts hidden from onstage characters, creating suspense, foreboding, or satire. Stage directions such as harsher lighting, tearing down a symbolic prop, or one character towering over another (proxemics) visually reveal unspoken power shifts or hidden guilt.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Defines dramatic irony (audience knows something characters do not + suspense/satire effect)',
          requiredKeywordGroups: [
            ['audience'],
            ['know', 'aware', 'truth'],
            ['character', 'ignorant', 'unaware', 'hidden', 'suspense', 'dread', 'satire'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Explains a concrete stage direction (lighting/props/proxemics/pause) revealing subtext/power/emotion',
          requiredKeywordGroups: [
            ['lighting', 'prop', 'proxemics', 'distance', 'pause', 'silence', 'sound', 'movement'],
            ['power', 'subtext', 'guilt', 'dominance', 'tension', 'unspoken', 'expose', 'emotion', 'illusion'],
          ],
        },
      ],
    },
    explanation: 'Live drama operates simultaneously through spoken text, audience knowledge, and visual/auditory stagecraft.',
  },
  {
    id: 'iglit-q-3-1-3',
    subtopicId: 'iglit-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each drama term to its theatrical role:',
    pairs: [
      { left: 'Peripeteia', right: 'Irreversible turning point reversing a protagonist’s fortune' },
      { left: 'Proxemics', right: 'Physical spacing between actors showing power or alienation' },
      { left: 'Subtext', right: 'Unspoken motives lurking beneath surface dialogue' },
      { left: 'Scene juxtaposition', right: 'Placing contrasting moods back-to-back for emotional shock' },
    ],
    explanation: 'Analysing staging and structural mechanics proves you understand drama as live theatre.',
  },
  {
    id: 'iglit-q-3-1-4',
    subtopicId: 'iglit-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the drama essay rules:',
    segments: ['Because plays are performed live, always refer to the ', ' rather than only "the reader", and treat italicised ', ' as primary analytical evidence of mood and power.'],
    wordBank: ['audience', 'stage directions', 'chapters', 'footnotes'],
    answers: ['audience', 'stage directions'],
    explanation: 'Awareness of live audience impact and visual stagecraft is essential for Paper 2 Drama.',
  },
  {
    id: 'iglit-q-3-1-5',
    subtopicId: 'iglit-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In Priestley’s *An Inspector Calls*, what is the primary stagecraft effect of shifting the lighting from "pink and intimate" to "brighter and harder" upon the Inspector’s arrival?',
    options: [
      'It saves electricity onstage',
      'It visually strips away cosy bourgeois complacency and signals ruthless moral scrutiny',
      'It indicates the scene has moved outdoors',
      'It shows the Birlings have turned off the lamps',
    ],
    correctIndex: 1,
    explanation: 'Lighting shifts act as visual metaphor for truth exposing comfortable social illusions.',
  },

  // 3.2 Shakespeare & Modern Drama: Dialogue, Soliloquy & Staging
  {
    id: 'iglit-q-3-2-1',
    subtopicId: 'iglit-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'In Shakespearean tragedy, what does it most often signify when a noble character abruptly switches from blank verse into fragmented prose?',
    options: [
      'They have received a promotion in social rank',
      'Psychological breakdown, madness, loss of self-control, or moral disorder',
      'The play is ending happily',
      'Shakespeare ran out of rhyming words',
    ],
    correctIndex: 1,
    explanation: 'Abandoning ordered iambic blank verse audibly signals internal collapse (e.g. Lady Macbeth sleepwalking).',
  },
  {
    id: 'iglit-q-3-2-2',
    subtopicId: 'iglit-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the dramatic effect of a Shakespearean "shared line" AND distinguish a soliloquy from an aside.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'A shared line splits one ten-syllable line of iambic pentameter between two speakers, forcing quick-fire cues that convey panic, interruption, or intense rapport. A soliloquy is delivered alone onstage to reveal deep inner thoughts, whereas an aside is a brief remark spoken privately to the audience while other characters remain onstage unable to hear.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Explains shared line (split pentameter line creating rapid cues/interruption/urgency)',
          requiredKeywordGroups: [
            ['split', 'two speakers', 'share', 'pentameter', 'line'],
            ['rapid', 'fast', 'urgent', 'interrupt', 'panic', 'tension', 'rapport', 'pace'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Distinguishes soliloquy (alone onstage) from aside (others onstage cannot hear)',
          requiredKeywordGroups: [
            ['alone'],
            ['other characters', 'onstage', 'cannot hear', 'whisper', 'brief', 'private'],
          ],
        },
      ],
    },
    explanation: 'Verse structure and speech conventions act as Shakespeare’s built-in performance directions.',
  },
  {
    id: 'iglit-q-3-2-3',
    subtopicId: 'iglit-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each tragic and staging term to its exact meaning:',
    pairs: [
      { left: 'Hamartia', right: 'Fatal flaw or misjudgement triggering downfall' },
      { left: 'Hubris', right: 'Excessive pride defying moral or natural limits' },
      { left: 'Anagnorisis', right: 'Moment of agonising tragic self-recognition' },
      { left: 'Plastic theatre', right: 'Holistic integration of light, sound, and props to project inner psychology' },
    ],
    explanation: 'Classical tragedy terms and modern staging concepts enrich Paper 2 essays.',
  },
  {
    id: 'iglit-q-3-2-4',
    subtopicId: 'iglit-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the drama comparison:',
    segments: ['Unrhymed iambic pentameter in Shakespeare is known as ', ', while a brief speech delivered to the audience that other onstage characters cannot hear is an ', '.'],
    wordBank: ['blank verse', 'aside', 'free verse', 'refrain'],
    answers: ['blank verse', 'aside'],
    explanation: 'Blank verse anchors Shakespearean rhythm; asides foster conspiratorial intimacy with the audience.',
  },
  {
    id: 'iglit-q-3-2-5',
    subtopicId: 'iglit-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How can a Band-8 candidate demonstrate directorial awareness when analysing modern drama dialogue?',
    options: [
      'By ignoring who interrupts whom',
      'By analysing turn-taking dominance, imperatives, pauses, and how alternative vocal deliveries shift audience sympathy',
      'By rewriting the scene as a poem',
      'By counting the total number of words in the play',
    ],
    correctIndex: 1,
    explanation: 'Examining conversational power and actor delivery treats the playscript as a living blueprint for performance.',
  },

  // 4.1 Approaching Unseen Poetry: Tone, Shifts & Language
  {
    id: 'iglit-q-4-1-1',
    subtopicId: 'iglit-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In Cambridge IGCSE 0475 Paper 4 Unseen Poetry, what should you do during your FIRST read-through of the poem?',
    options: [
      'Start writing paragraph 1 immediately after reading line 1',
      'Read the title, prompt bullets, and whole poem straight through to grasp the literal situation and overarching tone',
      'Look up every literary device alphabetically',
      'Skip the title and final stanza',
    ],
    correctIndex: 1,
    explanation: 'Grasping the whole poem’s situation and ending first prevents misreading ironic openings.',
  },
  {
    id: 'iglit-q-4-1-2',
    subtopicId: 'iglit-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why you should distinguish between the "speaker" and the "poet" in an unseen poetry essay, and state how to handle an unfamiliar word calmly.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The speaker is the fictional persona voicing the experience, whereas the poet is the writer deliberately crafting imagery, structure, and tone—they should not be equated automatically. For an unfamiliar word, infer its tone from surrounding context clues or focus close analysis on the 6–8 clear, high-yield images you fully understand.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Distinguishes fictional speaker/persona from the poet crafting the methods',
          requiredKeywordGroups: [
            ['persona', 'voice', 'fictional', 'character', 'not the poet'],
            ['craft', 'writer', 'method', 'creates', 'choices'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Uses context clues or prioritises clear high-yield images rather than panicking',
          requiredKeywordGroups: [
            ['context', 'surrounding', 'clues', 'clear', 'understand', 'other images', 'tentative'],
          ],
        },
      ],
    },
    explanation: 'Separating speaker from poet shows critical precision, and staying composed keeps your essay focused.',
  },
  {
    id: 'iglit-q-4-1-3',
    subtopicId: 'iglit-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the unseen poetry vocabulary:',
    segments: ['A deliberate pivot in attitude across a poem is a ', ', and evoking deep poignant pity or vulnerability in the reader is called ', '.'],
    wordBank: ['tonal shift', 'pathos', 'parataxis', 'proxemics'],
    answers: ['tonal shift', 'pathos'],
    explanation: 'Tracking tonal shifts and pathos lets you trace how a poem moves the reader emotionally.',
  },
  {
    id: 'iglit-q-4-1-4',
    subtopicId: 'iglit-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which tone description shows the sharpest Band-8 nuance for a complex unseen poem?',
    options: [
      'The tone is sad.',
      'The tone is good and emotional.',
      'The tone shifts from wistful nostalgia to quiet, unsettled disillusionment.',
      'The tone has lots of words.',
    ],
    correctIndex: 2,
    explanation: 'Naming paired or evolving emotions reflects how rich literature actually works.',
  },
  {
    id: 'iglit-q-4-1-5',
    subtopicId: 'iglit-4-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO high-value structural features to check during your second read of an unseen poem:',
    options: [
      'Whether the closing line echoes, contrasts, or twists the opening stanza or title',
      'Where key pivot words ("yet", "but", "now", dashes) signal a shift in mood or time',
      'Counting the total number of vowels on the page',
      'Guessing the poet’s exact street address',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Opening-to-closing contrasts and mid-poem pivots reveal structural craft rapidly.',
  },

  // 4.2 Unseen Prose Extracts & Writing Perceptive Personal Responses
  {
    id: 'iglit-q-4-2-1',
    subtopicId: 'iglit-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is reading the short italicised rubric printed above a Cambridge 0475 Unseen Prose extract essential?',
    options: [
      'You should copy it word-for-word as your introduction',
      'It immediately establishes the characters, setting, and situation so you can focus on analysing craft and subtext',
      'It contains the exact mark scheme answers',
      'It replaces reading the final paragraph',
    ],
    correctIndex: 1,
    explanation: 'The rubric gives immediate orientation so you avoid misidentifying who is speaking or where the scene takes place.',
  },
  {
    id: 'iglit-q-4-2-2',
    subtopicId: 'iglit-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how a prose writer can use syntax (sentence length/parataxis) AND physical gestures in dialogue to convey unspoken subtext.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Short, clipped paratactic sentences can convey emotional shock, numbness, or urgency, whereas sprawling multi-clause sentences mirror overwhelm or anxiety. Pairing polite spoken words with tense physical gestures (e.g. clenched hands or averted eyes) creates ironic juxtaposition that exposes concealed hostility or fear.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Links sentence length/parataxis/clauses to specific pacing or psychological state',
          requiredKeywordGroups: [
            ['short', 'clipped', 'parataxis', 'long', 'clause', 'syntax'],
            ['shock', 'urgency', 'numb', 'tension', 'panic', 'overwhelm', 'pace', 'restraint'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Explains contradiction/contrast between polite dialogue and physical gesture revealing subtext',
          requiredKeywordGroups: [
            ['gesture', 'body language', 'action', 'physical', 'eyes', 'hands'],
            ['contradict', 'contrast', 'undermine', 'hidden', 'subtext', 'true', 'conceal', 'irony'],
          ],
        },
      ],
    },
    explanation: 'Prose craft extends far beyond similes—syntax and physical subtext carry huge emotional freight.',
  },
  {
    id: 'iglit-q-4-2-3',
    subtopicId: 'iglit-4-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each unseen prose concept to its definition:',
    pairs: [
      { left: 'Focalisation', right: 'Filtering third-person narration through one character’s senses and biases' },
      { left: 'Interiority', right: 'Depicting private thoughts, memories, and unspoken anxieties' },
      { left: 'Parataxis', right: 'Short clipped clauses placed side by side for stark pace or restraint' },
      { left: 'Reader sympathy', right: 'Emotional closeness or critical distance engineered by the writer' },
    ],
    explanation: 'Accurate prose terminology empowers incisive commentary on Paper 4.',
  },
  {
    id: 'iglit-q-4-2-4',
    subtopicId: 'iglit-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Band-8 Unseen Prose technique:',
    segments: ['Divide the passage into three or four structural ', ' before writing, and replace repetitive "this shows" phrasing with precise analytical ', ' such as "unsettles", "crystallises", or "undercuts".'],
    wordBank: ['movements', 'verbs', 'rhymes', 'footnotes'],
    answers: ['movements', 'verbs'],
    explanation: 'Tracking narrative movements and deploying crisp analytical verbs immediately elevates critical voice.',
  },
  {
    id: 'iglit-q-4-2-5',
    subtopicId: 'iglit-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the biggest danger when answering a Cambridge 0475 Unseen Prose question?',
    options: [
      'Analysing sentence length and dialogue subtext',
      'Drifting into English Language-style plot retelling instead of examining HOW the writer shapes emotional impact',
      'Tracking how reader sympathy shifts across the extract',
      'Zooming into single verb connotations',
    ],
    correctIndex: 1,
    explanation: 'Literature 0475 always rewards analysis of writer’s methods and impact rather than mere comprehension summary.',
  },
];

export const IGCSE_ENGLISH_LIT_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'iglit-fc-1-1-1', subtopicId: 'iglit-1-1', front: 'What is a volta and where does it appear in a sonnet?', backBullets: ['A decisive turning point in mood, perspective, or argument.', 'Typically line 9 in a Petrarchan sonnet or line 13 (final couplet) in a Shakespearean sonnet.'] },
  { id: 'iglit-fc-1-1-2', subtopicId: 'iglit-1-1', front: 'Distinguish enjambment from caesura.', backBullets: ['Enjambment: sentence spills over a line break without punctuation (momentum/overflow).', 'Caesura: deliberate mid-line punctuation pause (hesitation, shock, or fracture).'] },
  { id: 'iglit-fc-1-1-3', subtopicId: 'iglit-1-1', front: 'What defines a dramatic monologue?', backBullets: ['A single fictional persona speaks to an implied silent listener.', 'Often exposes the speaker’s bias, obsession, or self-deception ironically.'] },
  { id: 'iglit-fc-1-1-4', subtopicId: 'iglit-1-1', front: 'What effect does half-rhyme (para-rhyme) create?', backBullets: ['Matches consonants while clashing vowels (e.g. escaped/scooped).', 'Denies musical comfort to create discord, unease, or unresolved trauma.'] },
  { id: 'iglit-fc-1-1-5', subtopicId: 'iglit-1-1', front: 'What does the FLIRT poetry checklist stand for?', backBullets: ['Form, Language/imagery, Ideas/themes, Rhythm/rhyme, Tone shifts.'] },

  // 1.2
  { id: 'iglit-fc-1-2-1', subtopicId: 'iglit-1-2', front: 'List the four Cambridge IGCSE 0475 Assessment Objectives.', backBullets: ['AO1: Detailed textual knowledge + apt quotes.', 'AO2: Deeper thematic meanings & attitudes.', 'AO3: Language, structure & form.', 'AO4: Sensitive, informed personal response.'] },
  { id: 'iglit-fc-1-2-2', subtopicId: 'iglit-1-2', front: 'What is a micro-quotation?', backBullets: ['A tight 1–5 word phrase woven grammatically into your own analytical sentence.', 'Allows razor-sharp word-level zooming without bloated block quotes.'] },
  { id: 'iglit-fc-1-2-3', subtopicId: 'iglit-1-2', front: 'How do you structure an integrated poetry comparison?', backBullets: ['Organise by shared themes/tensions, NOT poem-by-poem blocks.', 'Pivot directly between Poet A and Poet B’s contrasting methods inside every paragraph.'] },
  { id: 'iglit-fc-1-2-4', subtopicId: 'iglit-1-2', front: 'How do you demonstrate Band-8 AO4 without writing clichés?', backBullets: ['Avoid "My personal response is I like this poem."', 'Explore deliberate ambiguity and evaluate what feels haunting, unsettling, or poignant.'] },
  { id: 'iglit-fc-1-2-5', subtopicId: 'iglit-1-2', front: 'What should a conceptual thesis do in your introduction?', backBullets: ['Directly answer the prompt’s exact focus by linking overarching methods to complex thematic meaning.', 'Never waste the introduction summarising the plot.'] },

  // 2.1
  { id: 'iglit-fc-2-1-1', subtopicId: 'iglit-2-1', front: 'Why must you treat characters as "authorial constructs"?', backBullets: ['Characters are crafted literary tools created by the writer to explore themes and critique society.', 'Keep the author as grammatical subject ("Achebe constructs... to expose...").'] },
  { id: 'iglit-fc-2-1-2', subtopicId: 'iglit-2-1', front: 'What is a character foil?', backBullets: ['A contrasting character placed alongside a protagonist to sharpen key virtues, flaws, or moral blind spots.'] },
  { id: 'iglit-fc-2-1-3', subtopicId: 'iglit-2-1', front: 'Define free indirect discourse.', backBullets: ['Third-person narration that absorbs a character’s private idioms, thoughts, and biases seamlessly without speech marks.'] },
  { id: 'iglit-fc-2-1-4', subtopicId: 'iglit-2-1', front: 'How does an unreliable narrator affect the reader?', backBullets: ['Their naivety, bias, or self-deception creates an ironic gap between their claims and the deeper truth the reader uncovers.'] },
  { id: 'iglit-fc-2-1-5', subtopicId: 'iglit-2-1', front: 'What does it mean to analyse setting as a microcosm?', backBullets: ['Showing how a small fictional town, estate, or village reflects wider national conflicts over class, race, or power.'] },

  // 2.2
  { id: 'iglit-fc-2-2-1', subtopicId: 'iglit-2-2', front: 'Ideal extract-to-wider-novel split for a 0475 passage question?', backBullets: ['~85% forensic close reading of the printed extract (beginning, middle shift, ending).', '2–3 brief, purposeful links to wider scenes that sharpen your reading of the passage.'] },
  { id: 'iglit-fc-2-2-2', subtopicId: 'iglit-2-2', front: 'How should historical/social context be used in Cambridge 0475?', backBullets: ['Context is NOT a separate marked AO in 0475 — never write standalone history essays.', 'Tether brief social insight directly to exact quotations and writer’s methods.'] },
  { id: 'iglit-fc-2-2-3', subtopicId: 'iglit-2-2', front: 'How do you upgrade a single-word theme like "power" to Band 8?', backBullets: ['Frame it as a dynamic tension (e.g. "the destructive clash between traditional honour and colonial authority").'] },
  { id: 'iglit-fc-2-2-4', subtopicId: 'iglit-2-2', front: 'What is a structural motif?', backBullets: ['A recurring object, image, or phrase whose changing meaning tracks thematic development across the whole novel.'] },
  { id: 'iglit-fc-2-2-5', subtopicId: 'iglit-2-2', front: 'How do you tackle "To what extent..." prose prompts?', backBullets: ['Weigh BOTH supporting textual evidence and complicating counter-evidence before delivering an evaluative verdict.'] },

  // 3.1
  { id: 'iglit-fc-3-1-1', subtopicId: 'iglit-3-1', front: 'What is dramatic irony?', backBullets: ['The audience possesses vital knowledge concealed from onstage characters.', 'Generates helpless dread, tragic pathos, or biting social satire.'] },
  { id: 'iglit-fc-3-1-2', subtopicId: 'iglit-3-1', front: 'Define stichomythia and its theatrical effect.', backBullets: ['Rapid alternating single-line dialogue between two characters.', 'Accelerates tempo to heighten conflict, wit, or escalating panic.'] },
  { id: 'iglit-fc-3-1-3', subtopicId: 'iglit-3-1', front: 'What is proxemics in stagecraft?', backBullets: ['Deliberate physical distance, height, and movement of actors onstage.', 'Visually enacts dominance, intimacy, guilt, or alienation.'] },
  { id: 'iglit-fc-3-1-4', subtopicId: 'iglit-3-1', front: 'Define peripeteia in dramatic structure.', backBullets: ['A sudden, irreversible turning point or reversal of fortune propelling the play toward climax or catastrophe.'] },
  { id: 'iglit-fc-3-1-5', subtopicId: 'iglit-3-1', front: 'Why should drama essays quote italicised stage directions?', backBullets: ['Playwrights encode subtext, symbolism, and power shifts directly into lighting, sound, props, pauses, and movement.'] },

  // 3.2
  { id: 'iglit-fc-3-2-1', subtopicId: 'iglit-3-2', front: 'Distinguish a soliloquy from an aside.', backBullets: ['Soliloquy: character speaks alone onstage, exposing raw inner conflict.', 'Aside: brief private remark to the audience while other characters remain onstage unable to hear.'] },
  { id: 'iglit-fc-3-2-2', subtopicId: 'iglit-3-2', front: 'What does a noble character dropping from blank verse into prose signal in Shakespeare?', backBullets: ['Psychological breakdown, madness, agitation, or collapse of social/moral order.'] },
  { id: 'iglit-fc-3-2-3', subtopicId: 'iglit-3-2', front: 'What is a Shakespearean shared line?', backBullets: ['One 10-syllable iambic pentameter line split between two speakers.', 'Forces rapid-fire theatrical cues conveying urgency, interruption, or intense rapport.'] },
  { id: 'iglit-fc-3-2-4', subtopicId: 'iglit-3-2', front: 'Define hamartia, hubris, and anagnorisis.', backBullets: ['Hamartia: fatal flaw/error.', 'Hubris: excessive pride.', 'Anagnorisis: agonising moment of tragic self-recognition.'] },
  { id: 'iglit-fc-3-2-5', subtopicId: 'iglit-3-2', front: 'What is Tennessee Williams’s "plastic theatre"?', backBullets: ['Integrating lighting, sound, set design, and props holistically to externalise a character’s inner psychology onstage.'] },

  // 4.1
  { id: 'iglit-fc-4-1-1', subtopicId: 'iglit-4-1', front: 'Outline the 3-Read Protocol for Unseen Poetry.', backBullets: ['Read 1: Title, bullets, literal situation & overall tone.', 'Read 2: Pivots, tonal shifts & opening vs closing contrast.', 'Read 3: Select 6–8 juicy micro-quotes for close zoom.'] },
  { id: 'iglit-fc-4-1-2', subtopicId: 'iglit-4-1', front: 'Why separate "speaker" from "poet" in poetry essays?', backBullets: ['The speaker is the fictional persona inside the poem; the poet is the writer deliberately crafting form, imagery, and tone.'] },
  { id: 'iglit-fc-4-1-3', subtopicId: 'iglit-4-1', front: 'How should you use Paper 4’s bullet prompts?', backBullets: ['Treat them as helpful signposts woven organically into a unified essay rather than choppy separate headings.'] },
  { id: 'iglit-fc-4-1-4', subtopicId: 'iglit-4-1', front: 'What should you do if an unseen poem contains an obscure word?', backBullets: ['Infer emotional tone from surrounding context clues without panicking, and anchor deep zooms on the 6–8 vivid images you grasp clearly.'] },
  { id: 'iglit-fc-4-1-5', subtopicId: 'iglit-4-1', front: 'Give 3 paired tone phrases better than "sad".', backBullets: ['Wistful yet resigned; tender yet haunted; defiant yet quietly vulnerable.'] },

  // 4.2
  { id: 'iglit-fc-4-2-1', subtopicId: 'iglit-4-2', front: 'First two planning steps for an Unseen Prose extract?', backBullets: ['Read the italicised contextual rubric for character/setting orientation.', 'Divide the passage into 3–4 structural movements from opening mood to closing line.'] },
  { id: 'iglit-fc-4-2-2', subtopicId: 'iglit-4-2', front: 'Define focalisation and interiority.', backBullets: ['Focalisation: third-person narration filtered through one character’s senses/bias.', 'Interiority: portrayal of private thoughts, memories, and anxieties.'] },
  { id: 'iglit-fc-4-2-3', subtopicId: 'iglit-4-2', front: 'What is parataxis and what effect does it create in prose?', backBullets: ['Short, clipped clauses placed side by side without subordination.', 'Creates stark urgency, emotional numbness, or tense restraint.'] },
  { id: 'iglit-fc-4-2-4', subtopicId: 'iglit-4-2', front: 'How do prose writers reveal subtext during dialogue?', backBullets: ['Juxtaposing polite spoken lines with contradicting physical tells (averted gaze, clenched hands, unfinished clauses).'] },
  { id: 'iglit-fc-4-2-5', subtopicId: 'iglit-4-2', front: 'Five sharp analytical verbs to replace "this shows"?', backBullets: ['Intensifies, undercuts, crystallises, unsettles, exposes, juxtaposes.'] },
];

export const IGCSE_ENGLISH_LIT_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'iglit-cs-1',
    slug: 'topic-1-poetry-analysis-anthology',
    title: '1. Poetry Analysis & Anthology Cheat Sheet',
    topicNumber: 1,
    topicName: 'Poetry Analysis & Anthology',
    summary: 'FLIRT toolkit, poetic form & metre, integrated comparison, and Band-8 AO3/AO4 craft.',
    accentColor: '#9333EA',
    sections: [
      {
        heading: 'Form, Rhythm & Imagery Toolkit (FLIRT)',
        points: [
          'Form: Sonnet (volta turn), Dramatic Monologue (unintentional self-exposure), Elegy (mourning), Free Verse (unrestrained emotion).',
          'Lineation: Enjambment (momentum/overflow) vs Caesura (shock/hesitation); Half-rhyme (unresolved discord).',
          'Sound & Image: Sibilance, plosives, extended metaphor, semantic field — always tie to SPECIFIC mood, never generic "flow".',
        ],
      },
      {
        heading: 'Band-8 Essay & Comparison Discipline',
        points: [
          'Open with a conceptual thesis uniting methods + deeper thematic tension — zero plot summary.',
          'Embed 1–5 word micro-quotations and explore tentative double readings ("yet simultaneously hints...").',
          'Compare poets point-by-point inside every paragraph using comparative method pivots (whereas, conversely).',
        ],
      },
    ],
  },
  {
    id: 'iglit-cs-2',
    slug: 'topic-2-prose-novel-study',
    title: '2. Prose & Novel Study Cheat Sheet',
    topicNumber: 2,
    topicName: 'Prose & Novel Study',
    summary: 'Authorial constructs, narrative voice, microcosms, passage vs whole-text structure & tethered context.',
    accentColor: '#9333EA',
    sections: [
      {
        heading: 'Character, Voice & Setting Craft',
        points: [
          'Treat every character as an authorial construct (STEAL clues + character foils) — keep the writer as subject.',
          'Evaluate narrative lens: unreliable first-person, dual adult/child perspective, omniscient irony, free indirect discourse.',
          'Analyse setting as thematic microcosm and psychological mirror rather than passive scenery.',
        ],
      },
      {
        heading: 'Cambridge 0475 Exam Structure Rules',
        points: [
          'Passage question: ~85% forensic close reading of printed extract + 2–3 purposeful links to the wider novel.',
          'Whole-text question: 3–4 pivotal scenes tracking arc from exposition through crisis to resolution.',
          'Text-first rule: NO bolt-on history essays — weave brief social insight strictly to sharpen textual analysis.',
        ],
      },
    ],
  },
  {
    id: 'iglit-cs-3',
    slug: 'topic-3-drama-stagecraft',
    title: '3. Drama & Stagecraft Cheat Sheet',
    topicNumber: 3,
    topicName: 'Drama & Stagecraft',
    summary: 'Live audience perspective, dramatic irony, stage directions, Shakespeare verse/prose & modern dialogue power.',
    accentColor: '#9333EA',
    sections: [
      {
        heading: 'Theatre Mechanics & Stage Directions',
        points: [
          'Always write about the LIVE AUDIENCE — track Freytag’s arc, peripeteia, entrances/exits, and scene juxtaposition.',
          'Exploit dramatic irony (audience awareness vs character blindness) for dread, pathos, or social satire.',
          'Quote stage directions directly: lighting, soundscapes, symbolic props, pauses, and proxemics enact subtext.',
        ],
      },
      {
        heading: 'Shakespeare vs Modern Drama Essentials',
        points: [
          'Shakespeare: Soliloquy (alone) vs Aside (private); Blank verse → Prose drop signals breakdown; Shared lines drive urgent pace.',
          'Tragic vocabulary: hamartia (flaw), hubris (pride), anagnorisis (recognition), catharsis (purging).',
          'Modern drama: analyse interruptions, imperatives, silences, realism vs expressionism (plastic theatre), and actor delivery.',
        ],
      },
    ],
  },
  {
    id: 'iglit-cs-4',
    slug: 'topic-4-unseen-poetry-prose',
    title: '4. Unseen Poetry & Prose Cheat Sheet',
    topicNumber: 4,
    topicName: 'Unseen Poetry & Prose',
    summary: '3-Read protocol, structural movements, subtext in syntax/gestures & perceptive Band-8 AO4 voice.',
    accentColor: '#9333EA',
    sections: [
      {
        heading: 'Paper 4 Unseen Poetry Protocol',
        points: [
          '3 Reads (12 mins): 1 = Title + bullets + situation; 2 = Tonal shifts & opening-to-closing arc; 3 = 6–8 juicy micro-quotes.',
          'Separate "speaker" (persona) from "poet" (craftsman); name nuanced mixed tones (wistful yet unsettling).',
          'Stay calm with obscure words — infer tone from context and build deep analysis on vivid images you command.',
        ],
      },
      {
        heading: 'Paper 4 Unseen Prose Protocol',
        points: [
          'Read the italicised contextual rubric first, then map 3–4 structural movements across the passage.',
          'Analyse focalisation, interiority, paratactic pacing, and ironic contrast between polite dialogue and physical gestures.',
          'Sustain perceptive AO4 engagement: track shifting reader sympathy with sharp verbs (unsettles, undercuts, crystallises).',
        ],
      },
    ],
  },
];

export const IGCSE_ENGLISH_LIT_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'iglit-ex-1-1',
    subtopicId: 'iglit-1-1',
    number: 1,
    stimulus: '[Cambridge IGCSE 0475 Paper 1 Poetry Style] Read the closing lines of a poem about a ruined fortress:\n"The watchtower leans. Beneath its fractured crown\nwild brambles stitch the fallen banner down —\nyet still the iron bell swings in the squall,\nringing for sentries who will never call."',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Identify the structural device used after "The watchtower leans." in line 1.',
        kind: 'mcq',
        marks: 1,
        options: ['Enjambment', 'Caesura', 'Stichomythia', 'Free indirect discourse'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'How do the poet’s choices of structure (caesura, enjambment, or volta) and imagery ("fractured crown", "stitch", or "iron bell") convey the passage of time and vanished power?',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The stark mid-line caesura after "The watchtower leans." halts the rhythm abruptly, mirroring physical decay and finality, while the enjambment into "wild brambles stitch" shows nature effortlessly reclaiming human stone. The metaphor "fractured crown" personifies broken royal authority, and the volta "yet still" introduces the haunting iron bell ringing for absent sentries, emphasizing futile endurance against time.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Analyses structural effect of caesura, enjambment, or "yet still" volta',
              requiredKeywordGroups: [
                ['caesura', 'enjambment', 'volta', 'pause', 'break', 'yet still'],
                ['halt', 'decay', 'reclaim', 'shift', 'contrast', 'endure', 'finality', 'unstoppable'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Unpacks "fractured crown" (broken royalty/power/decay)',
              requiredKeywordGroups: [
                ['fractured', 'crown'],
                ['royal', 'power', 'authority', 'broken', 'shatter', 'decay', 'ruin'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Analyses nature’s reclamation ("brambles stitch") OR haunting futility ("iron bell" / absent sentries)',
              requiredKeywordGroups: [
                ['brambles', 'stitch', 'bell', 'sentries'],
                ['nature', 'reclaim', 'haunt', 'futile', 'empty', 'absent', 'ghost', 'outlast'],
              ],
            },
            {
              id: 'mp4',
              markDescription: 'Connects imagery/form explicitly to theme of vanished power or relentless time',
              requiredKeywordGroups: [
                ['time', 'power', 'vanish', 'impermanence', 'forgotten', 'collapse'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-1-2',
    subtopicId: 'iglit-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE 0475 Anthology Comparison Style] Poem A uses tightly rhyming quatrains and frost imagery ("glass-locked pond") to describe heartbreak; Poem B uses jagged free verse and storm verbs ("ripped", "splintered") to depict betrayal.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Write a concise conceptual thesis comparing HOW both poets present emotional pain differently.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'While both poets explore devastating emotional hurt, Poet A uses rigid rhyme and frozen imagery to depict pain as numb, trapped stasis, whereas Poet B deploys fractured free verse and violent verbs to dramatise betrayal as raw, chaotic upheaval.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Contrasts Poem A’s controlled form/frozen numbness with Poem B’s chaotic free verse/violence',
              requiredKeywordGroups: [
                ['rigid', 'tight', 'rhyme', 'frozen', 'numb', 'stasis', 'trapped', 'cold'],
                ['free verse', 'jagged', 'chaotic', 'violent', 'raw', 'storm', 'turbulent'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Uses comparative framing (while/whereas/conversely) focused on writer’s methods',
              requiredKeywordGroups: [
                ['while', 'whereas', 'conversely', 'contrast', 'however', 'both'],
              ],
            },
          ],
        },
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Write an integrated analytical comparison zooming into ONE micro-quotation from Poem A ("glass-locked pond") and ONE from Poem B ("splintered").',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Poet A’s compound image "glass-locked" conveys brittle fragility trapped beneath ice, suggesting grief that is immobile yet liable to shatter; conversely, Poet B’s harsh verb "splintered" carries violent plosive force, evoking sudden, jagged emotional fragmentation that refuses tidy containment.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Zooms into "glass-locked" (fragility, trapped, frozen, immobile)',
              requiredKeywordGroups: [
                ['glass-locked', 'glass', 'locked'],
                ['fragil', 'brittle', 'trap', 'frozen', 'immobile', 'numb', 'cold'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Zooms into "splintered" (violent breaking, sharp pain, fragmentation)',
              requiredKeywordGroups: [
                ['splinter'],
                ['violen', 'sharp', 'shatter', 'fragment', 'broken', 'jagged', 'pain'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Explicit comparative pivot linking the two contrasting effects',
              requiredKeywordGroups: [
                ['whereas', 'conversely', 'contrast', 'unlike', 'however', 'by contrast'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-2-1',
    subtopicId: 'iglit-2-1',
    number: 3,
    stimulus: '[Cambridge IGCSE 0475 Paper 1 Prose Style] Extract from a novel: "Mr Vance adjusted his silver cufflinks as he surveyed the cramped tenements from his carriage window. Surely these folk preferred modest quarters—smaller rooms held warmth so much better in winter, he told himself, snapping the velvet curtain shut."',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which narrative technique is used in "Surely these folk preferred modest quarters—smaller rooms held warmth so much better in winter"?',
        kind: 'mcq',
        marks: 1,
        options: ['Soliloquy', 'Free indirect discourse', 'Stichomythia', 'Dramatic monologue'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'How does the writer use characterisation, narrative voice, and setting contrast to expose Mr Vance’s moral hypocrisy?',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The writer contrasts Mr Vance’s luxury ("silver cufflinks", "velvet curtain") with the "cramped tenements" to spotlight stark class inequality. Through mocking free indirect discourse ("Surely these folk preferred..."), the writer exposes his self-serving rationalisation, while his sharp physical gesture of "snapping" the curtain shut symbolises deliberate blindness to poverty.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Analyses luxury vs poverty contrast (cufflinks/velvet vs cramped tenements)',
              requiredKeywordGroups: [
                ['cufflinks', 'velvet', 'carriage', 'wealth', 'luxury'],
                ['tenements', 'cramped', 'poverty', 'poor', 'inequality', 'contrast'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Analyses ironic free indirect discourse ("Surely...") showing self-deception/excuse',
              requiredKeywordGroups: [
                ['free indirect', 'surely', 'rationalis', 'excuse', 'self-dece', 'irony', 'hypocri'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Analyses "snapping the velvet curtain shut" as symbolic shutting out of reality/empathy',
              requiredKeywordGroups: [
                ['snap', 'curtain', 'shut'],
                ['blind', 'ignor', 'block', 'dismiss', 'shut out', 'indifferen', 'refus'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-2-2',
    subtopicId: 'iglit-2-2',
    number: 4,
    stimulus: '[Cambridge IGCSE 0475 Prose Essay Strategy Style] Exam question: "To what extent do you feel sympathy for the protagonist in this passage and elsewhere in the novel?" The passage shows the protagonist harsh toward his son, yet ends with him secretly weeping beside a broken wooden carving.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which approach to historical/social context is best rewarded on a Cambridge IGCSE 0475 Literature essay?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Opening with two full paragraphs of author biography before mentioning the text',
          'Weaving brief social insight directly into close analysis of specific quotations and writer’s choices',
          'Listing historical dates instead of quoting the novel',
          'Ignoring the printed passage completely',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how you should balance the printed passage against the wider novel AND why a one-sided "I have zero sympathy" essay would lose top-band marks.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Spend around 85% of the essay analysing the printed passage closely with brief, selective links to 2–3 key moments elsewhere in the novel. A one-sided response misses the "To what extent" command and ignores the writer’s deliberate ambiguity—the closing image of secret weeping beside the broken carving complicates our judgement and invites partial compassion alongside criticism.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'States dominant focus on printed passage (~80–85%) + selective links to wider novel',
              requiredKeywordGroups: [
                ['passage', 'extract', 'mostly', '85', '80', 'close'],
                ['wider', 'elsewhere', 'brief', 'selective', 'link'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Notes "To what extent" requires balanced weighing of both sides / nuanced verdict',
              requiredKeywordGroups: [
                ['extent', 'balance', 'both sides', 'weigh', 'nuance', 'counter', 'evaluat'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Cites tension between harshness and secret grief/broken carving complicating sympathy',
              requiredKeywordGroups: [
                ['harsh', 'son', 'critic'],
                ['weep', 'grief', 'carving', 'sympathy', 'compassion', 'vulnerable', 'ambigui'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-3-1',
    subtopicId: 'iglit-3-1',
    number: 5,
    stimulus: '[Cambridge IGCSE 0475 Paper 2 Drama Style] Scene extract:\nCLARA: (Turning slowly from the window; the streetlamp casts iron bars across her face) You swore the deed was safe.\nMARCUS: (Laughing too loudly, stepping between her and the door) Safe? Naturally! Why look so grave?\n(A heavy knock echoes from the hall. Marcus freezes, his smile vanishing.)',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which stagecraft technique is demonstrated by Marcus stepping between Clara and the door?',
        kind: 'mcq',
        marks: 1,
        options: ['Proxemics', 'Half-rhyme', 'Anagnorisis', 'Volta'],
        correctIndex: 0,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how the playwright builds dramatic tension for a live audience using lighting, dialogue subtext, and the offstage sound cue.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The lighting casting "iron bars" across Clara visually foreshadows entrapment or imprisonment. Marcus’s forced laugh ("too loudly") and intimidating proxemics blocking the door expose anxious guilt beneath his bluster, while the sudden offstage heavy knock shatters his façade as he "freezes", creating immediate suspense for the audience.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Analyses "iron bars" lighting metaphor (entrapment, prison, threat)',
              requiredKeywordGroups: [
                ['bars', 'lighting', 'shadow'],
                ['trap', 'prison', 'cage', 'foreshadow', 'confine', 'threat'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Analyses Marcus’s subtext ("too loudly" / blocking door / forced bravado concealing guilt)',
              requiredKeywordGroups: [
                ['too loudly', 'laugh', 'door', 'proxemics', 'step'],
                ['guilt', 'nervous', 'anxious', 'dominan', 'control', 'bluster', 'subtext', 'facade'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Analyses offstage knock + freezing reaction heightening live audience suspense',
              requiredKeywordGroups: [
                ['knock', 'sound', 'freeze', 'smile'],
                ['suspense', 'tension', 'audience', 'expose', 'dread', 'threat', 'shatter'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-3-2',
    subtopicId: 'iglit-3-2',
    number: 6,
    stimulus: '[Cambridge IGCSE 0475 Shakespeare Craft Style] Extract:\nLORD VERO: (Alone) "This crown sits bright, yet burns the trembling brow;\nTo climb was fire — to keep it turns to ice."\n[Later, in Act 5, Lord Vero speaks only in jagged, unrhymed prose fragments: "Locks. Check the locks again. Did they whisper my name?"]',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'What is the dramatic term for Lord Vero’s first speech delivered alone onstage?',
        kind: 'mcq',
        marks: 1,
        options: ['Aside', 'Soliloquy', 'Stichomythia', 'Refrain'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Analyse how Shakespearean techniques (soliloquy, antithesis of fire/ice, and the later shift from blank verse to fragmented prose) chart Lord Vero’s psychological decline.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'Delivered as a soliloquy alone onstage, Lord Vero’s private admission reveals guilt beneath royal splendour. The antithesis between "fire" (passionate ambition) and "ice" (paralyzing fear/isolation) alongside the paradox of a crown that "burns" captures inner torment. By Act 5, abandoning ordered blank verse for fragmented, repetitive prose ("Check the locks") and fearful questions audibly enacts his descent into paranoia and mental collapse.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Explains soliloquy granting audience direct access to private inner torment',
              requiredKeywordGroups: [
                ['soliloquy', 'alone'],
                ['private', 'inner', 'audience', 'guilt', 'conflict', 'torment'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Analyses antithesis/imagery of "fire" vs "ice" or burning crown',
              requiredKeywordGroups: [
                ['antithesis', 'contrast', 'fire', 'ice', 'burns'],
                ['ambition', 'passion', 'cold', 'fear', 'isolation', 'pain', 'guilt'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Explains shift from ordered blank verse into fragmented prose signalling madness/breakdown',
              requiredKeywordGroups: [
                ['blank verse', 'verse'],
                ['prose', 'fragment'],
                ['madness', 'breakdown', 'collapse', 'disorder', 'paranoia', 'control'],
              ],
            },
            {
              id: 'mp4',
              markDescription: 'Zooms into repetition/questions ("Locks", "whisper my name?") revealing paranoia',
              requiredKeywordGroups: [
                ['locks', 'whisper', 'repetition', 'question'],
                ['paranoi', 'fear', 'obsess', 'panic', 'guilt'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-4-1',
    subtopicId: 'iglit-4-1',
    number: 7,
    stimulus: '[Cambridge IGCSE 0475 Paper 4 Unseen Poetry Style] Short unseen poem "Station Platform, November":\n"We traded weather like a fragile coin,\nmeasuring polite inches between coats.\nThen your train shuddered white into the dark —\nand all the honest words arrived too late."',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which pivot word marks the clearest tonal shift in the stanza?',
        kind: 'mcq',
        marks: 1,
        options: ['"weather"', '"Then"', '"coats"', '"polite"'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Identify the subtle tonal shift across the stanza and analyse TWO specific images ("fragile coin", "polite inches", or "arrived too late") to explain how the poet creates pathos.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The tone shifts at "Then" from restrained, awkward politeness into sharp, aching regret. The simile "like a fragile coin" makes small talk about weather feel hollow, transactional, and easily broken, while "polite inches" quantifies the painful emotional gulf hidden beneath courteous restraint. Finally, personifying "honest words" as arriving "too late" creates poignant pathos by mirroring a missed train with a permanently missed chance for reconciliation.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Identifies tonal shift from polite restraint/awkwardness to sharp regret/loss',
              requiredKeywordGroups: [
                ['polite', 'awkward', 'restrain', 'distant'],
                ['regret', 'loss', 'ache', 'grief', 'urgent', 'shift', 'then'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Analyses "fragile coin" OR "polite inches" with concrete connotations',
              requiredKeywordGroups: [
                ['fragile coin', 'coin', 'polite inches', 'inches'],
                ['transactional', 'hollow', 'delicate', 'distance', 'gulf', 'barrier', 'careful'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Analyses "honest words arrived too late" (missed train metaphor / regret)',
              requiredKeywordGroups: [
                ['honest words', 'too late', 'train'],
                ['missed', 'regret', 'unspoken', 'permanent', 'personif', 'final'],
              ],
            },
            {
              id: 'mp4',
              markDescription: 'Explicitly connects craft to poignant pathos or reader emotional response',
              requiredKeywordGroups: [
                ['pathos', 'poignant', 'pity', 'sympathy', 'sorrow', 'haunt', 'ache'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iglit-ex-4-2',
    subtopicId: 'iglit-4-2',
    number: 8,
    stimulus: '[Cambridge IGCSE 0475 Paper 4 Unseen Prose Style] Extract: "Every trophy along the mantelpiece gleamed as though polished for an inspection. ‘We’re proud of you, of course,’ his father said, not looking up from the ledger. Tomas nodded. His fingers curled inside his pockets until his knuckles whitened. He left the prize envelope unopened beside the door."',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which syntactic feature is used in the closing sequence "Tomas nodded. His fingers curled... He left the prize envelope..."?',
        kind: 'mcq',
        marks: 1,
        options: ['Parataxis (short clipped declarative sentences)', 'Iambic pentameter', 'Dramatic monologue', 'Half-rhyme'],
        correctIndex: 0,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how the writer uses setting symbolism, ironic juxtaposition in dialogue, and syntactic pacing to shape reader sympathy for Tomas.',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'The simile comparing the gleaming trophies to an "inspection" transforms home into a cold, militaristic arena of conditional approval. The father’s hollow praise ("of course") is cruelly undercut by his refusal to look up from the ledger, prioritizing accounts over his son. Short paratactic sentences ("Tomas nodded.") mirror Tomas’s suppressed hurt, while his hidden whitened knuckles and abandoning the unopened envelope evoke deep reader sympathy for his quiet disillusionment.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Analyses "gleamed... inspection" (cold, strict, conditional pressure rather than warmth)',
              requiredKeywordGroups: [
                ['inspection', 'trophies', 'gleamed'],
                ['cold', 'strict', 'pressure', 'conditional', 'military', 'judge', 'formal'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Analyses ironic juxtaposition between "proud... of course" and "not looking up from the ledger"',
              requiredKeywordGroups: [
                ['proud', 'of course', 'ledger', 'looking up'],
                ['hollow', 'dismiss', 'undercut', 'indifferen', 'irony', 'contradict', 'cold'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Analyses short syntax ("Tomas nodded.") OR suppressed physical gesture ("knuckles whitened")',
              requiredKeywordGroups: [
                ['nodded', 'short', 'parataxis', 'knuckles', 'pockets', 'curled'],
                ['suppress', 'tension', 'hurt', 'restraint', 'pain', 'anger', 'silent'],
              ],
            },
            {
              id: 'mp4',
              markDescription: 'Evaluates closing symbolic act ("unopened" envelope) & reader sympathy',
              requiredKeywordGroups: [
                ['unopened', 'envelope', 'door'],
                ['sympathy', 'disillusion', 'meaningless', 'reject', 'poignant', 'hollow'],
              ],
            },
          ],
        },
      },
    ],
  },
];

export const IGCSE_ENGLISH_LIT_PAST_PAPERS: PastPaperDoc[] = [];

export const IGCSE_ENGLISH_LIT_KEY_TERMS: KeyTermEntry[] = [
  { id: 'iglit-kt-1', term: 'Volta', definition: 'A decisive shift in tone, perspective, or argument within a poem, classically in a sonnet.', topicNumber: 1, subtopicId: 'iglit-1-1', subtopicCode: '1.1' },
  { id: 'iglit-kt-2', term: 'Enjambment', definition: 'Continuation of a sentence past a line break without punctuation to build momentum or emotional overflow.', topicNumber: 1, subtopicId: 'iglit-1-1', subtopicCode: '1.1' },
  { id: 'iglit-kt-3', term: 'Caesura', definition: 'A deliberate pause inside a poetic line created by punctuation that fractures rhythm or highlights shock.', topicNumber: 1, subtopicId: 'iglit-1-1', subtopicCode: '1.1' },
  { id: 'iglit-kt-4', term: 'Dramatic Monologue', definition: 'A poem delivered by a single fictional persona to a silent listener, subtly exposing inner bias or obsession.', topicNumber: 1, subtopicId: 'iglit-1-1', subtopicCode: '1.1' },
  { id: 'iglit-kt-5', term: 'Micro-Quotation', definition: 'A concise 1–5 word quotation grammatically woven into an analytical sentence for focused word-level zooming.', topicNumber: 1, subtopicId: 'iglit-1-2', subtopicCode: '1.2' },
  { id: 'iglit-kt-6', term: 'Ambiguity', definition: 'Deliberate openness to multiple simultaneous readings that deepens emotional and thematic richness.', topicNumber: 1, subtopicId: 'iglit-1-2', subtopicCode: '1.2' },
  { id: 'iglit-kt-7', term: 'Character Foil', definition: 'A contrasting character paired with a protagonist to spotlight key traits, values, or moral blind spots.', topicNumber: 2, subtopicId: 'iglit-2-1', subtopicCode: '2.1' },
  { id: 'iglit-kt-8', term: 'Free Indirect Discourse', definition: 'Third-person narration absorbing a character’s private idioms and mindset without speech marks.', topicNumber: 2, subtopicId: 'iglit-2-1', subtopicCode: '2.1' },
  { id: 'iglit-kt-9', term: 'Microcosm', definition: 'A localised fictional setting representing wider national hierarchies and moral conflicts.', topicNumber: 2, subtopicId: 'iglit-2-1', subtopicCode: '2.1' },
  { id: 'iglit-kt-10', term: 'Structural Motif', definition: 'A recurring object or image whose evolving meaning traces thematic development across a novel.', topicNumber: 2, subtopicId: 'iglit-2-2', subtopicCode: '2.2' },
  { id: 'iglit-kt-11', term: 'Dramatic Irony', definition: 'Audience awareness of vital facts concealed from onstage characters, generating dread, pathos, or satire.', topicNumber: 3, subtopicId: 'iglit-3-1', subtopicCode: '3.1' },
  { id: 'iglit-kt-12', term: 'Stichomythia', definition: 'Rapid alternating single-line dialogue between two onstage speakers escalating tension or conflict.', topicNumber: 3, subtopicId: 'iglit-3-1', subtopicCode: '3.1' },
  { id: 'iglit-kt-13', term: 'Proxemics', definition: 'Deliberate onstage spacing and physical positioning of actors to visually communicate power or alienation.', topicNumber: 3, subtopicId: 'iglit-3-1', subtopicCode: '3.1' },
  { id: 'iglit-kt-14', term: 'Soliloquy', definition: 'An onstage speech delivered alone, granting the audience unfiltered access to private inner debate.', topicNumber: 3, subtopicId: 'iglit-3-2', subtopicCode: '3.2' },
  { id: 'iglit-kt-15', term: 'Hamartia', definition: 'A tragic protagonist’s fatal flaw or critical error in judgement precipitating their downfall.', topicNumber: 3, subtopicId: 'iglit-3-2', subtopicCode: '3.2' },
  { id: 'iglit-kt-16', term: 'Blank Verse', definition: 'Unrhymed iambic pentameter representing composure, nobility, or order in Shakespearean drama.', topicNumber: 3, subtopicId: 'iglit-3-2', subtopicCode: '3.2' },
  { id: 'iglit-kt-17', term: 'Tonal Shift', definition: 'A purposeful change in emotional stance or attitude across a poem or extract.', topicNumber: 4, subtopicId: 'iglit-4-1', subtopicCode: '4.1' },
  { id: 'iglit-kt-18', term: 'Focalisation', definition: 'Filtering third-person prose narration through one specific character’s senses, biases, and emotions.', topicNumber: 4, subtopicId: 'iglit-4-2', subtopicCode: '4.2' },
  { id: 'iglit-kt-19', term: 'Parataxis', definition: 'Placing short, clipped clauses side by side without subordination for stark immediacy or restraint.', topicNumber: 4, subtopicId: 'iglit-4-2', subtopicCode: '4.2' },
];
