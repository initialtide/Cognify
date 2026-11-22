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

export const IGCSE_BIOLOGY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Characteristics, Classification & Cells',
    subtopics: [
      { id: 'igbio-1-1', code: '1.1', slug: '1.1-characteristics-of-living-organisms', title: 'Characteristics of Living Organisms', readingMinutes: 8, hasDeepContent: true },
      { id: 'igbio-1-2', code: '1.2', slug: '1.2-variety-of-living-organisms', title: 'Variety of Living Organisms', readingMinutes: 9, hasDeepContent: true },
      { id: 'igbio-1-3', code: '1.3', slug: '1.3-species-and-naming', title: 'Species & Naming', readingMinutes: 8, hasDeepContent: true },
      { id: 'igbio-1-4', code: '1.4', slug: '1.4-cell-structure-magnification', title: 'Cell Structure, Specialised Cells & Magnification', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Movement Into & Out of Cells',
    subtopics: [
      { id: 'igbio-2-1', code: '2.1', slug: '2.1-diffusion-osmosis-active-transport', title: 'Diffusion, Osmosis & Active Transport', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Biological Molecules & Enzymes',
    subtopics: [
      { id: 'igbio-3-1', code: '3.1', slug: '3.1-biological-molecules-food-tests', title: 'Biological Molecules, Food Tests & DNA', readingMinutes: 9, hasDeepContent: true },
      { id: 'igbio-3-2', code: '3.2', slug: '3.2-enzymes-mechanism-factors', title: 'Enzymes, Specificity & Denaturation', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Plant Nutrition & Transport',
    subtopics: [
      { id: 'igbio-4-1', code: '4.1', slug: '4.1-photosynthesis-leaf-structure', title: 'Photosynthesis, Leaf Structure & Limiting Factors', readingMinutes: 10, hasDeepContent: true },
      { id: 'igbio-4-2', code: '4.2', slug: '4.2-xylem-phloem-transpiration', title: 'Xylem, Phloem, Transpiration & Translocation', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Human Nutrition & Gas Exchange',
    subtopics: [
      { id: 'igbio-5-1', code: '5.1', slug: '5.1-balanced-diet-human-digestion', title: 'Balanced Diet, Digestion & Absorption', readingMinutes: 10, hasDeepContent: true },
      { id: 'igbio-5-2', code: '5.2', slug: '5.2-gas-exchange-respiration', title: 'Human Gas Exchange, Breathing & Respiration', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Transport in Animals & Immunity',
    subtopics: [
      { id: 'igbio-6-1', code: '6.1', slug: '6.1-heart-blood-circulation', title: 'Double Circulation, The Heart & Blood Vessels', readingMinutes: 10, hasDeepContent: true },
      { id: 'igbio-6-2', code: '6.2', slug: '6.2-pathogens-immunity-vaccines', title: 'Pathogens, Immunity & Vaccination', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 7,
    title: 'Excretion, Coordination & Homeostasis',
    subtopics: [
      { id: 'igbio-7-1', code: '7.1', slug: '7.1-excretion-kidneys-nephron', title: 'Excretion, The Liver & Kidney Nephron', readingMinutes: 10, hasDeepContent: true },
      { id: 'igbio-7-2', code: '7.2', slug: '7.2-nervous-system-eye-synapses', title: 'Nervous System, Reflex Arc, Synapses & The Eye', readingMinutes: 10, hasDeepContent: true },
      { id: 'igbio-7-3', code: '7.3', slug: '7.3-hormones-homeostasis-tropisms', title: 'Hormones, Homeostasis & Plant Tropisms', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 8,
    title: 'Reproduction & Inheritance',
    subtopics: [
      { id: 'igbio-8-1', code: '8.1', slug: '8.1-mitosis-meiosis-reproduction', title: 'Mitosis, Meiosis & Reproduction', readingMinutes: 10, hasDeepContent: true },
      { id: 'igbio-8-2', code: '8.2', slug: '8.2-dna-protein-synthesis-genetics', title: 'DNA, Protein Synthesis & Genetic Inheritance', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 9,
    title: 'Variation, Selection & Biotechnology',
    subtopics: [
      { id: 'igbio-9-1', code: '9.1', slug: '9.1-variation-natural-selection-gm', title: 'Variation, Natural Selection & Genetic Modification', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 10,
    title: 'Ecology, Nutrient Cycles & Conservation',
    subtopics: [
      { id: 'igbio-10-1', code: '10.1', slug: '10.1-ecosystems-cycles-conservation', title: 'Food Webs, Carbon & Nitrogen Cycles & Conservation', readingMinutes: 10, hasDeepContent: true },
    ],
  },
];

export const IGCSE_BIOLOGY_NOTES: Record<string, NoteLesson> = {
  'igbio-1-1': {
    subtopicId: 'igbio-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Characteristics of Living Organisms',
    readingMinutes: 8,
    videoTitle: 'GCSE Biology - Characteristics of Living Things (Organisms)',
    youtubeId: 'aGDFNZApXXI',
    videoChannel: 'Cognito',
    videoDuration: '6:22',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'MRS GREN Overview (M, R, S)', cardId: 'igbio-1-1-c1' },
      { time: '2:10', seconds: 130, label: 'Growth, Reproduction & Excretion (G, R, E)', cardId: 'igbio-1-1-c2' },
      { time: '4:20', seconds: 260, label: 'Nutrition & Exam Distinctions (Excretion vs Egestion)', cardId: 'igbio-1-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-1-1-c1',
        title: 'Movement, Respiration & Sensitivity',
        summary: 'All living organisms carry out seven life processes summarised by MRS GREN.',
        bullets: [
          '**Movement** - an action by an organism or part of an organism causing a change of position or place (including plant shoots bending towards light).',
        ],
        subsections: [
          {
            heading: 'Respiration & Sensitivity',
            bullets: [
              '**Respiration** - chemical reactions inside cells that break down nutrient molecules (e.g. glucose) and **release energy** for metabolism.',
              '**Sensitivity** - the ability to detect and respond to changes in the internal or external environment (stimuli).',
            ],
            exampleHeading: 'Concrete examples in plants',
            examples: [
              'Sunflowers show sensitivity and movement by growing towards sunlight (phototropism).',
              'Plant cells carry out respiration 24 hours a day to release energy for active transport and growth.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'respiration', definition: 'Chemical reactions inside cells that break down nutrient molecules to release energy for metabolism.' },
          { term: 'sensitivity', definition: 'The ability to detect changes in the internal or external environment and make appropriate responses.' },
        ],
        memoryAid: 'MRS GREN = Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition!',
      },
      {
        id: 'igbio-1-1-c2',
        title: 'Growth, Reproduction & Excretion',
        summary: 'Growth is a permanent increase in size and dry mass; excretion removes toxic metabolic waste.',
        bullets: [
          '**Growth** - a **permanent** increase in size and **dry mass** by an increase in cell number, cell size, or both.',
        ],
        subsections: [
          {
            heading: 'Reproduction & Excretion',
            bullets: [
              '**Reproduction** - processes that make more of the same kind of organism (sexual or asexual).',
              '**Excretion** - removal of **toxic materials**, **waste products of metabolism** (such as CO₂ and urea), and substances in excess of requirements.',
            ],
            exampleHeading: 'Concrete example: Measuring true growth',
            examples: [
              'Weighing dry mass removes fluctuating water content so only permanent new biomass is measured.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'excretion', definition: 'Removal from organisms of toxic materials, metabolic waste products, and substances in excess of requirements.' },
        ],
      },
      {
        id: 'igbio-1-1-c3',
        title: 'Nutrition & Crucial Exam Distinctions',
        summary: 'Never confuse respiration with breathing, or excretion with egestion (faeces).',
        bullets: [
          '**Nutrition** - taking in materials for energy, growth, and development (plants make organic nutrients via photosynthesis; animals ingest organic food).',
        ],
        subsections: [
          {
            heading: 'Two High-Frequency Exam Traps',
            bullets: [
              '**Excretion vs Egestion** - passing faeces is **egestion** (undigested food never entered body cells); removing **urea** in urine or **CO₂** from lungs is **excretion** (metabolic waste).',
              '**Respiration vs Breathing** - breathing is mechanical ventilation of lungs; respiration is a **chemical reaction inside every living cell**.',
            ],
            exampleHeading: 'Exam wording check',
            examples: [
              'NEVER write that respiration "produces" or "creates" energy — ALWAYS write "RELEASES energy"!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'egestion', definition: 'Removal of undigested food (faeces) from the alimentary canal — NOT a product of cellular metabolism.' },
        ],
        commonMistake: 'Examiners penalise saying respiration "makes energy" or calling faeces "excretion" — always write "releases energy" and distinguish metabolic excretion from egestion!',
      },
    ],
    keyTerms: [
      { term: 'Respiration', definition: 'Chemical reactions in cells breaking down nutrients to release energy.' },
      { term: 'Sensitivity', definition: 'Ability to detect and respond to internal or external stimuli.' },
      { term: 'Excretion', definition: 'Removal of metabolic waste products (urea, CO₂), toxins, and excess substances.' },
      { term: 'Growth', definition: 'Permanent increase in size and dry mass by increasing cell number or cell size.' },
    ],
    checklistPoints: [
      'Define all seven MRS GREN characteristics using exact Cambridge 0610 phrasing',
      'Distinguish cellular respiration (releases energy) from mechanical breathing',
      'Distinguish excretion of metabolic waste (CO₂, urea) from egestion of faeces',
    ],
  },

  'igbio-1-2': {
    subtopicId: 'igbio-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Variety of Living Organisms',
    readingMinutes: 9,
    videoTitle: 'Kingdoms of Life - Animals, Plants, Fungi, Protoctists, Bacteria and Viruses',
    youtubeId: 'Xzy4Ze93G3g',
    videoChannel: 'Cognito',
    videoDuration: '9:42',
    courseMatchSummary: '2 of 5 sections match Cambridge IGCSE Extended Biology',
    timestamps: [
      { time: '0:04', seconds: 4, label: 'Kingdoms, eukaryotes and prokaryotes', outsideCourse: true },
      { time: '1:51', seconds: 111, label: 'Animals and plants', outsideCourse: true },
      { time: '3:32', seconds: 212, label: 'Fungi and protoctists', outsideCourse: true },
      { time: '6:23', seconds: 383, label: 'Bacteria and viruses', cardId: 'igbio-1-2-c1' },
      { time: '8:10', seconds: 490, label: 'Comparing kingdoms & pathogens', cardId: 'igbio-1-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-1-2-c1',
        title: 'The features of bacteria and viruses',
        summary: 'The cell structure of bacteria, and why viruses are non-living particles that can only reproduce inside a host.',
        bullets: [],
        subsections: [
          {
            heading: 'Bacteria',
            bullets: [
              'Bacteria make up the **prokaryote kingdom**.',
              'A bacterium is a **microscopic, single-celled** organism.',
              'The cell has **no nucleus** - instead the genetic material is a single **circular chromosome** of DNA loose in the cell.',
              'Every bacterial cell has a **cell wall**, a **cell membrane**, and **cytoplasm**.',
              'Many also carry small separate rings of DNA called **plasmids**.',
              'Some bacteria can **photosynthesise**, but most feed off other organisms, living or dead.',
            ],
            exampleHeading: 'Examples of bacteria:',
            examples: [
              '*Lactobacillus bulgaricus* - A rod-shaped bacterium used to turn milk into yoghurt',
              '*Pneumococcus* - A spherical bacterium that causes pneumonia',
            ],
            diagram: 'bacterial-cell',
          },
          {
            heading: 'Viruses',
            bullets: [
              'Viruses are **not living organisms** and are **not placed in any kingdom**.',
              'A virus is a **particle**, much **smaller** than a bacterium, with **no cellular structure** at all.',
              'It is simply a **protein coat** wrapped around a small amount of genetic material, which can be either DNA or RNA.',
              'Viruses come in a wide variety of shapes and sizes, and the one shown below is just one of them.',
            ],
            diagram: 'virus-particle',
          },
          {
            heading: 'How viruses reproduce',
            bullets: [
              'A virus **cannot** reproduce on its own.',
              'It can only reproduce **inside the living cells** of another organism, which it takes over.',
              'A virus therefore depends entirely on a **host** and acts as a parasite.',
              'Because of this, all viruses are **pathogens** - they cause disease.',
              'A **pathogen** is any organism that causes disease. Pathogens can be **fungi, bacteria, protoctists, or viruses**.',
              'Viruses aren’t living organisms, but they still count as pathogens.',
            ],
            exampleHeading: 'Examples of viruses:',
            examples: [
              '**Tobacco mosaic virus** - Discolours the leaves of tobacco plants by stopping them making chloroplasts',
              '**Influenza virus** - Causes flu',
              '**HIV** - Causes AIDS',
            ],
          },
        ],
        glossaryPills: [
          { term: 'parasite', definition: 'An organism or agent that lives inside or on another living host, obtaining resources at the host’s expense.' },
        ],
        commonMistake: 'Students often confuse the genetic material of bacteria and viruses. Remember that bacteria have a circular chromosome of DNA, whereas a virus can contain either DNA or RNA.',
      },
      {
        id: 'igbio-1-2-c2',
        title: 'The four eukaryotic kingdoms',
        summary: 'Comparing the cell structure, cell walls, and nutrition of animals, plants, fungi, and protoctists.',
        diagram: 'eukaryotic-vs-prokaryotic',
        bullets: [
          '**Animals**: multicellular eukaryotes with **no cell wall** and no chloroplasts; store carbohydrate as **glycogen** and usually show nervous coordination.',
          '**Plants**: multicellular eukaryotes with **cellulose cell walls** and **chloroplasts** for photosynthesis; store carbohydrate as **starch**.',
          '**Fungi**: eukaryotes with **chitin cell walls**, no chloroplasts, and thread-like **hyphae** forming a mycelium; feed by **saprotrophic nutrition** (secreting extracellular enzymes) and store **glycogen**.',
          '**Protoctists**: diverse, mostly **single-celled eukaryotes** — some resemble animal cells (*Amoeba*, *Plasmodium* causing malaria) and others resemble plant cells (*Chlorella* with chloroplasts).',
        ],
        glossaryPills: [
          { term: 'saprotrophic nutrition', definition: 'Extracellular digestion where fungi secrete enzymes onto dead organic matter and absorb the soluble products.' },
        ],
      },
      {
        id: 'igbio-1-2-c3',
        title: 'Comparing Five Kingdoms, Cell Walls & Vertebrate/Arthropod Groups',
        summary: 'Contrast cell wall materials (cellulose vs chitin vs peptidoglycan) and recall arthropod & plant subdivisions.',
        bullets: [
          '**Cell wall comparison** - Plants = **cellulose**; Fungi = **chitin**; Bacteria = **peptidoglycan** (non-cellulose); Animals & Viruses = **none**.',
        ],
        subsections: [
          {
            heading: 'Arthropods & Flowering Plants (Monocots vs Dicots)',
            bullets: [
              '**Arthropods (jointed legs + exoskeleton)** - **Insects** (3 body parts, 6 legs, wings), **Arachnids** (8 legs, 2 parts), **Crustaceans** (10+ legs, 2 pairs antennae), **Myriapods** (many segments & legs).',
              '**Monocotyledons vs Dicotyledons** - Monocots have **parallel leaf veins** and petals in multiples of 3; Dicots have **branching network veins** and petals in multiples of 4 or 5.',
            ],
            exampleHeading: 'Concrete check: Ferns vs Flowering plants',
            examples: [
              'Ferns have fronds and reproduce by SPORES (no flowers/seeds); flowering plants reproduce by seeds inside fruits.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'arthropod', definition: 'An invertebrate animal with jointed legs, a segmented body, and a waterproof exoskeleton.' },
        ],
        memoryAid: 'Cell walls: Plants = Cellulose, Fungi = Chitin, Bacteria = non-cellulose; Insects = 6 legs, Arachnids = 8 legs!',
      },
    ],
    keyTerms: [
      { term: 'Pathogen', definition: 'A microorganism or virus (fungi, bacteria, protoctists, or viruses) that causes disease.' },
      { term: 'Prokaryote', definition: 'A single-celled microscopic organism such as a bacterium whose DNA is not enclosed in a nucleus.' },
      { term: 'Plasmid', definition: 'A small separate circular ring of DNA found in many bacterial cells.' },
      { term: 'Parasite', definition: 'An organism or viral particle that depends on a living host to survive and reproduce, harming the host.' },
    ],
    checklistPoints: [
      'Bacteria are microscopic, single-celled organisms with a circular chromosome instead of a nucleus.',
      'Viruses are non-living particles that can only reproduce inside the living cells of a host.',
      'Animals, plants, fungi, and protoctists are eukaryotic kingdoms with DNA enclosed inside a nucleus.',
    ],
  },

  'igbio-1-3': {
    subtopicId: 'igbio-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Species & Naming',
    readingMinutes: 8,
    videoTitle: 'Kingdoms of Life - Animals, Plants, Fungi, Protoctists, Bacteria and Viruses',
    youtubeId: 'Xzy4Ze93G3g',
    videoChannel: 'Cognito',
    videoDuration: '9:42',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Definition of Species & Binomial Naming', cardId: 'igbio-1-3-c1' },
      { time: '3:00', seconds: 180, label: 'DNA Base Sequences & Evolutionary Trees', cardId: 'igbio-1-3-c2' },
      { time: '6:15', seconds: 375, label: 'Dichotomous Keys', cardId: 'igbio-1-3-c3' },
    ],
    cards: [
      {
        id: 'igbio-1-3-c1',
        title: 'Species & The Binomial Naming System',
        summary: 'A species reproduces to produce fertile offspring; scientific names use Capitalised Genus followed by lowercase species.',
        bullets: [
          '**Species** - a group of organisms that can reproduce together to produce **fertile offspring**.',
          '**Binomial system** - international two-part Latin name: **Genus** (Capital first letter) + **species** (all lowercase), italicised in print or underlined by hand (e.g. *Homo sapiens*, *Panthera leo*).',
        ],
        subsections: [
          {
            heading: 'Why Hybrids Are Not One Species',
            bullets: [
              '**Mules & ligers** - a horse and donkey can mate to produce a mule, but the mule is **infertile (sterile)**, proving horses and donkeys are different species.',
            ],
            exampleHeading: 'Concrete example: Reading closely related species',
            examples: [
              '*Panthera leo* (lion) and *Panthera tigris* (tiger) share the same Genus (*Panthera*), showing they are closely related.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'species', definition: 'A group of organisms that can reproduce to produce fertile offspring.' },
          { term: 'binomial system', definition: 'Internationally agreed system naming every species with two Latin words: Genus followed by species.' },
        ],
      },
      {
        id: 'igbio-1-3-c2',
        title: 'DNA Base Sequences & Modern Classification',
        summary: 'Comparing DNA base sequences reflects evolutionary relationships far more accurately than outward physical anatomy alone.',
        bullets: [
          '**Evolutionary classification** - organisms sharing a more recent common ancestor have **more similar DNA base sequences** (and more similar amino acid sequences in proteins).',
        ],
        subsections: [
          {
            heading: 'Taxonomic Hierarchy',
            bullets: [
              '**Order from broadest to narrowest** - Kingdom → Phylum → Class → Order → Family → Genus → Species.',
            ],
            exampleHeading: 'Worked DNA comparison',
            examples: [
              'If Species A shares 98% of its DNA bases with Species B and 89% with Species C, A and B share a much more recent common ancestor.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'common ancestor', definition: 'An ancestral species from which two or more modern species evolved.' },
        ],
        memoryAid: 'King Philip Came Over For Good Soup (Kingdom, Phylum, Class, Order, Family, Genus, Species)!',
      },
      {
        id: 'igbio-1-3-c3',
        title: 'Using & Constructing Dichotomous Keys',
        summary: 'Dichotomous keys split organisms step by step using clear, observable, contrasting yes/no questions.',
        bullets: [
          '**Dichotomous key** - each step offers exactly **two contrasting observable statements** leading either to another numbered step or directly to the organism’s name.',
        ],
        subsections: [
          {
            heading: 'Rules for Writing Good Keys',
            bullets: [
              '**Use measurable/visible features** - e.g. "has 6 legs / has 8 legs", "has wings / lacks wings" — avoid vague terms like "big" or "fast".',
            ],
            exampleHeading: 'Worked key step',
            examples: [
              '1a. Has 3 pairs of jointed legs → go to 2. 1b. Has 4 pairs of jointed legs → Arachnid.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dichotomous key', definition: 'A branching or numbered identification tool using pairs of contrasting observable features.' },
        ],
        commonMistake: 'When writing a binomial name in an exam, NEVER capitalise the second (species) word — write *Homo sapiens*, NOT *Homo Sapiens*!',
      },
    ],
    keyTerms: [
      { term: 'Species', definition: 'Group of organisms capable of reproducing to produce fertile offspring.' },
      { term: 'Binomial system', definition: 'Two-part scientific name consisting of Genus (capitalised) and species (lowercase).' },
      { term: 'Dichotomous key', definition: 'Identification guide based on pairs of contrasting observable traits.' },
      { term: 'Common ancestor', definition: 'Earlier species from which descendant species diverged.' },
    ],
    checklistPoints: [
      'Define species (including "fertile offspring") and format binomial names accurately',
      'Explain why DNA base sequence comparison is more accurate than morphology alone',
      'Follow and construct clear dichotomous keys using observable features',
    ],
  },

  'igbio-1-4': {
    subtopicId: 'igbio-1-4',
    subtopicCode: '1.4',
    subtopicTitle: 'Cell Structure, Specialised Cells & Magnification',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Cell Types and Cell Structure',
    youtubeId: 'qHkUOlC8Nbo',
    videoChannel: 'Cognito',
    videoDuration: '6:49',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Animal & Plant Cell Organelles', cardId: 'igbio-1-4-c1' },
      { time: '2:20', seconds: 140, label: 'Specialised Cells & Organisation Levels', cardId: 'igbio-1-4-c2' },
      { time: '4:40', seconds: 280, label: 'Magnification Formula (I = A × M) & Unit Conversion', cardId: 'igbio-1-4-c3' },
    ],
    cards: [
      {
        id: 'igbio-1-4-c1',
        title: 'Animal & Plant Cell Structures',
        summary: 'Plant cells have three extra structures beyond animal cells: cellulose cell wall, permanent vacuole, and chloroplasts.',
        bullets: [
          '**Shared structures** - **Nucleus** (controls cell via DNA), **cytoplasm** (site of chemical reactions), **cell membrane** (partially permeable entry/exit control), **mitochondria** (aerobic respiration releasing energy), **ribosomes** (protein synthesis).',
          '**Plant-only structures** - **Cellulose cell wall** (structural support/prevents bursting), **chloroplasts** (contain chlorophyll for photosynthesis), **permanent vacuole** (contains cell sap maintaining turgor).',
        ],
        subsections: [
          {
            heading: 'Levels of Organisation',
            bullets: [
              '**Hierarchy** - Cell → **Tissue** (similar cells with one function) → **Organ** (several tissues working together) → **Organ system** → Organism.',
            ],
            exampleHeading: 'Concrete example: Leaf as an organ',
            examples: [
              'A leaf is an organ containing palisade mesophyll tissue, spongy mesophyll, epidermis, xylem, and phloem.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mitochondria', definition: 'Organelles where aerobic respiration occurs to release energy for cellular processes.' },
          { term: 'ribosomes', definition: 'Tiny organelles in cytoplasm and rough ER where amino acids are assembled into proteins.' },
        ],
        diagram: 'root-hair-vs-palisade',
      },
      {
        id: 'igbio-1-4-c2',
        title: 'Specialised Cells & Their Adaptations',
        summary: 'Every specialised cell’s structure directly equips it for a specific role.',
        bullets: [
          '**Ciliated cells** - tiny beating cilia sweep mucus and trapped dust/bacteria up the trachea away from lungs.',
          '**Root hair cells** - long hair-like projection creates huge **surface area** for absorbing water and mineral ions (no chloroplasts because underground!).',
          '**Palisade mesophyll cells** - tall column shape packed with **chloroplasts** near upper leaf surface to maximise light absorption.',
        ],
        subsections: [
          {
            heading: 'Blood, Nerve & Gamete Adaptations',
            bullets: [
              '**Red blood cells** - biconcave disc (large SA:V), **no nucleus** (more space for haemoglobin), flexible to squeeze through capillaries.',
              '**Sperm & Egg cells** - sperm has flagellum (swimming), packed mitochondria (energy), and acrosome enzymes; egg has nutrient-rich cytoplasm.',
            ],
            exampleHeading: 'Concrete check: Why root hair cells lack chloroplasts',
            examples: [
              'Roots grow underground in the dark where no light reaches, so chloroplasts would serve no purpose.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'tissue', definition: 'A group of cells with similar structures working together to perform a shared function.' },
        ],
      },
      {
        id: 'igbio-1-4-c3',
        title: 'Magnification Formula (I = A × M) & Micrometre Conversions',
        summary: 'Always convert image size (mm) and actual size (μm) into the SAME unit before dividing!',
        bullets: [
          '**Formula** - **Magnification = Image size ÷ Actual size** (M = I / A; rearrange A = I / M).',
          '**Unit conversions** - **1 mm = 1,000 μm** (multiply mm by 1,000 to get μm; divide μm by 1,000 to get mm).',
        ],
        subsections: [
          {
            heading: 'Worked Microscope Calculation',
            bullets: [
              '**No units on magnification** - write magnification as ×500 (never mm or μm).',
            ],
            exampleHeading: 'Worked example: Drawing of a cell measures 45 mm at ×1,500 magnification',
            examples: [
              'Convert 45 mm to μm: 45 × 1,000 = 45,000 μm.',
              'Actual size A = I ÷ M = 45,000 ÷ 1,500 = 30 μm.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'magnification', definition: 'The ratio of the size of a drawing or image to the actual size of the specimen (M = I / A).' },
        ],
        diagram: 'microscope',
        memoryAid: 'I AM triangle: Image on top, Actual × Magnification on bottom; 1 mm = 1,000 μm!',
        commonMistake: 'NEVER divide mm by μm directly — convert BOTH image size and actual size to μm (×1000 from mm) first!',
      },
    ],
    keyTerms: [
      { term: 'Mitochondria', definition: 'Site of aerobic respiration releasing energy in cells.' },
      { term: 'Ribosomes', definition: 'Site of protein synthesis in cytoplasm.' },
      { term: 'Tissue', definition: 'Group of similar cells working together for one function.' },
      { term: 'Magnification', definition: 'Image size divided by actual size (in identical units).' },
    ],
    checklistPoints: [
      'Identify functions of nucleus, cytoplasm, membrane, mitochondria, ribosomes, cell wall, chloroplasts, and vacuole',
      'Link adaptations of root hair, palisade, ciliated, red blood, and gamete cells to their functions',
      'Solve I = A × M calculations accurately including mm ↔ μm (×1,000) conversions',
    ],
  },

  'igbio-2-1': {
    subtopicId: 'igbio-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Diffusion, Osmosis & Active Transport',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Osmosis',
    youtubeId: 'vCJVXYmXkzM',
    videoChannel: 'Cognito',
    videoDuration: '4:24',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Diffusion & Surface Area : Volume Ratio', cardId: 'igbio-2-1-c1' },
      { time: '1:25', seconds: 85, label: 'Osmosis, Water Potential & Turgid vs Plasmolysed Cells', cardId: 'igbio-2-1-c2' },
      { time: '2:55', seconds: 175, label: 'Active Transport & Carrier Proteins', cardId: 'igbio-2-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-2-1-c1',
        title: 'Diffusion & Factors Affecting Diffusion Rate',
        summary: 'Passive net movement from higher to lower concentration powered by random kinetic energy of particles.',
        bullets: [
          '**Four factors speeding up diffusion** - larger **surface area**, higher **temperature** (more kinetic energy), steeper **concentration gradient**, and shorter **diffusion distance**.',
        ],
        subsections: [
          {
            heading: 'Biological Examples of Diffusion',
            bullets: [
              '**Gas exchange** - O₂ diffuses from alveoli into blood; CO₂ diffuses from air spaces into leaf mesophyll cells.',
            ],
            exampleHeading: 'Concrete check: Why diffusion is passive',
            examples: [
              'Energy for diffusion comes from the random kinetic energy of particles themselves — NO energy from respiration is required.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'diffusion', definition: 'Net movement of particles from a region of higher concentration to a region of lower concentration down a concentration gradient.' },
        ],
      },
      {
        id: 'igbio-2-1-c2',
        title: 'Osmosis, Water Potential & Plant vs Animal Cells',
        summary: 'Water moves from higher water potential (dilute) to lower water potential (concentrated) across a partially permeable membrane.',
        bullets: [
          '**Exact Cambridge definition** - **Osmosis** is the net movement of **water molecules** from a region of **higher water potential** (dilute solution) to a region of **lower water potential** (concentrated solution) through a **partially permeable membrane**.',
        ],
        subsections: [
          {
            heading: 'Effect on Plant & Animal Cells',
            bullets: [
              '**In pure water (higher water potential outside)** - plant cells swell and become **turgid** (cell wall prevents bursting, supporting the plant); animal cells (red blood cells) **burst (lyse)** because they lack a cell wall.',
              '**In concentrated sucrose/salt solution** - water leaves by osmosis; plant cells become **flaccid** and then **plasmolysed** (cell membrane pulls away from cell wall); animal cells shrink/crenate.',
            ],
            exampleHeading: 'Worked example: Potato cylinder in 0.8 mol/dm³ sucrose',
            examples: [
              'Potato mass decreases from 4.0 g to 3.4 g (−15%): water moved out of potato cells down the water potential gradient into the lower water potential sucrose solution.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'water potential', definition: 'A measure of the tendency of water molecules to diffuse out of a solution (pure water has the highest water potential).' },
          { term: 'plasmolysed', definition: 'State of a plant cell in a concentrated solution where water loss causes the cell membrane to pull away from the cell wall.' },
        ],
        diagram: 'osmosis-membrane',
        commonMistake: 'In osmosis answers, ALWAYS refer to WATER POTENTIAL (not "water concentration") and mention the PARTIALLY PERMEABLE MEMBRANE!',
      },
      {
        id: 'igbio-2-1-c3',
        title: 'Active Transport',
        summary: 'Moves particles AGAINST a concentration gradient using protein carriers and energy released by respiration.',
        bullets: [
          '**Active transport** - movement of particles through a cell membrane from **lower concentration to higher concentration** (**against** a concentration gradient) using **energy from respiration** and **protein carriers**.',
        ],
        subsections: [
          {
            heading: 'Essential Biological Examples',
            bullets: [
              '**Root hair cells** - absorbing mineral ions (e.g. nitrate NO₃⁻, Mg²⁺) from dilute soil water into more concentrated root cytoplasm.',
              '**Small intestine villi** - absorbing glucose into blood even when blood glucose exceeds gut concentration.',
            ],
            exampleHeading: 'Concrete check: Effect of cyanide / zero oxygen on active transport',
            examples: [
              'Stopping aerobic respiration cuts energy supply, so active transport halts — whereas passive diffusion and osmosis continue!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'active transport', definition: 'Movement of ions or molecules against a concentration gradient across a membrane using protein carriers and energy from respiration.' },
        ],
        memoryAid: 'Diffusion/Osmosis = Down gradient, Passive; Active Transport = Against gradient, ATP from respiration + Protein carriers!',
      },
    ],
    keyTerms: [
      { term: 'Osmosis', definition: 'Net movement of water from higher to lower water potential through a partially permeable membrane.' },
      { term: 'Water potential', definition: 'Tendency of water molecules to move out of a solution; highest in pure water.' },
      { term: 'Turgid', definition: 'Firm state of a plant cell swollen with water pushing against its inelastic cellulose cell wall.' },
      { term: 'Active transport', definition: 'Uptake of molecules against a concentration gradient using protein carriers and energy from respiration.' },
    ],
    checklistPoints: [
      'State the 4 factors increasing diffusion rate and explain why diffusion is passive',
      'Define osmosis using water potential and explain turgid, flaccid, plasmolysed, and burst cells',
      'Define active transport (against gradient, carrier proteins, respiration energy) with root hair & villi examples',
    ],
  },

  'igbio-3-1': {
    subtopicId: 'igbio-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Biological Molecules, Food Tests & DNA',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Food Tests Practicals',
    youtubeId: '2fPwfvbBRT0',
    videoChannel: 'Cognito',
    videoDuration: '5:06',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Carbohydrates, Fats & Proteins Subunits', cardId: 'igbio-3-1-c1' },
      { time: '1:45', seconds: 105, label: 'Five Biochemical Food Tests (Iodine, Benedict’s, Biuret, Emulsion, DCPIP)', cardId: 'igbio-3-1-c2' },
      { time: '3:30', seconds: 210, label: 'DNA Double Helix & Complementary Base Pairing', cardId: 'igbio-3-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-3-1-c1',
        title: 'Elements & Subunits of Biological Molecules',
        summary: 'Carbohydrates and fats contain C, H, O; proteins also contain Nitrogen (N) and fold into specific 3D shapes.',
        bullets: [
          '**Carbohydrates (C, H, O)** - simple sugars like **glucose** join into long chains: **starch** (plant storage), **glycogen** (animal storage), and **cellulose** (plant cell walls).',
          '**Fats & Oils / Lipids (C, H, O)** - made of **1 glycerol** molecule joined to **3 fatty acids**.',
          '**Proteins (C, H, O, N)** - long chains of **amino acids** folded into specific 3D shapes (enzymes, antibodies, haemoglobin).',
        ],
        subsections: [
          {
            heading: 'Role of Water as a Solvent',
            bullets: [
              '**Water** - essential solvent for metabolic reactions inside cytoplasm, transport in blood plasma/xylem, and digestion.',
            ],
            exampleHeading: 'Concrete check: Why protein sequence matters',
            examples: [
              'Different sequences of the 20 amino acids fold into unique 3D shapes — giving every enzyme its specific active site and every antibody its specific binding site.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'amino acid', definition: 'The small soluble monomer unit linked in chains to build protein molecules.' },
        ],
      },
      {
        id: 'igbio-3-1-c2',
        title: 'The Five Cambridge Food Tests',
        summary: 'Know exact reagent, heating requirement, starting colour, and positive result for all five tests.',
        bullets: [
          '**Starch → Iodine solution** - orange-brown → **blue-black**.',
          '**Reducing sugar (glucose) → Benedict’s solution + HEAT in water bath** - blue → **green / yellow / orange / brick-red precipitate**.',
          '**Protein → Biuret reagent** - blue → **purple / lilac** (no heating!).',
          '**Fats / Lipids → Ethanol emulsion test** - shake with ethanol, pour into cold water → **cloudy white emulsion**.',
          '**Vitamin C → DCPIP** - **blue DCPIP turns colourless**.',
        ],
        subsections: [
          {
            heading: 'Benedict’s Semi-Quantitative Scale',
            bullets: [
              '**Concentration indicator** - green = trace glucose, yellow/orange = moderate, **brick-red** = high concentration of reducing sugar.',
            ],
            exampleHeading: 'Concrete check: Testing solid food for lipids',
            examples: [
              'Crush food, dissolve fats in ETHANOL first, then add distilled water and shake — fats are insoluble in water so tiny droplets form a milky white emulsion.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'emulsion', definition: 'A cloudy suspension of tiny insoluble lipid droplets dispersed in water after ethanol extraction.' },
        ],
        memoryAid: 'Starch = Iodine (Blue-Black); Sugar = Benedict’s + HEAT (Brick-Red); Protein = Biuret (Purple); Fat = Ethanol (White Emulsion); Vit C = DCPIP (Blue → Colourless)!',
      },
      {
        id: 'igbio-3-1-c3',
        title: 'Structure of DNA',
        summary: 'DNA is a double helix of two strands joined by complementary base pairs: A always pairs with T, and C always pairs with G.',
        bullets: [
          '**Double helix** - two antiparallel strands coiled into a helix; cross-links between strands are formed by pairs of nitrogenous **bases**: **A–T** (Adenine–Thymine) and **C–G** (Cytosine–Guanine).',
        ],
        subsections: [
          {
            heading: 'Complementary Base Calculations',
            bullets: [
              '**Chargaff ratio** - %A always equals %T, and %C always equals %G.',
            ],
            exampleHeading: 'Worked example: DNA strand with 22% Adenine',
            examples: [
              '%T = 22%, so A + T = 44%. Remaining 56% splits equally → %C = 28% and %G = 28%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'complementary base pairing', definition: 'Specific pairing of DNA bases across the two strands of the double helix: A with T, and C with G.' },
        ],
        commonMistake: 'NEVER forget to state HEAT (in a boiling water bath) for the Benedict’s test — without heating, Benedict’s stays blue even when glucose is present!',
      },
    ],
    keyTerms: [
      { term: 'Amino acid', definition: 'Subunit molecule joined in specific sequences to build proteins.' },
      { term: 'Benedict’s test', definition: 'Heated test turning blue → brick-red precipitate in the presence of reducing sugars.' },
      { term: 'DCPIP', definition: 'Blue dye decolourised (blue → colourless) by Vitamin C.' },
      { term: 'Complementary base pairing', definition: 'A pairs with T and C pairs with G across the DNA double helix.' },
    ],
    checklistPoints: [
      'State elements and subunits of carbohydrates, lipids (glycerol + 3 fatty acids), and proteins',
      'Recall reagents, heating steps, and colour changes for all 5 food tests including DCPIP',
      'Describe the DNA double helix and calculate base percentages using A=T and C=G',
    ],
  },

  'igbio-3-2': {
    subtopicId: 'igbio-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Enzymes, Specificity & Denaturation',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Enzymes - How Temperature and pH Affect Rate of Reaction',
    youtubeId: 'n9He_FK6nao',
    videoChannel: 'Cognito',
    videoDuration: '3:37',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Biological Catalysts & Complementary Active Site', cardId: 'igbio-3-2-c1' },
      { time: '1:15', seconds: 75, label: 'Effect of Temperature & Denaturation', cardId: 'igbio-3-2-c2' },
      { time: '2:30', seconds: 150, label: 'Effect of pH & Digestive Enzyme Optima', cardId: 'igbio-3-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-3-2-c1',
        title: 'Enzymes as Biological Catalysts & Specificity',
        summary: 'Enzymes are proteins with uniquely shaped active sites complementary to one specific substrate.',
        bullets: [
          '**Enzyme** - a **protein** acting as a **biological catalyst** that speeds up metabolic reactions without being used up.',
          '**Lock-and-key specificity** - each enzyme’s **active site** has a unique 3D shape **complementary** to only one **substrate**, forming an **enzyme–substrate complex** before releasing products.',
        ],
        subsections: [
          {
            heading: 'Exact Terminology Check',
            bullets: [
              '**Complementary, NOT "same shape"** - a key is complementary to a lock, not the same shape as the lock!',
            ],
            exampleHeading: 'Concrete example: Amylase + Starch',
            examples: [
              'Only starch fits amylase’s complementary active site to break down into maltose; proteins and lipids will not fit.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'active site', definition: 'The specifically shaped pocket on an enzyme molecule that is complementary to its substrate.' },
          { term: 'enzyme–substrate complex', definition: 'Temporary structure formed when a substrate binds inside the complementary active site of an enzyme.' },
        ],
        diagram: 'enzyme-lock-key',
      },
      {
        id: 'igbio-3-2-c2',
        title: 'Effect of Temperature & Denaturation',
        summary: 'Rate rises up to optimum temperature due to faster kinetic energy collisions, then plummets above optimum as the active site denatures.',
        bullets: [
          '**Below optimum T** - rising temperature gives molecules more **kinetic energy**, causing **more frequent effective collisions** and more **enzyme–substrate complexes** per second.',
          '**Above optimum T (Denaturation)** - excessive vibration breaks bonds holding the protein’s 3D shape, permanently changing the **shape of the active site** so the substrate **no longer fits** (**denatured**).',
        ],
        subsections: [
          {
            heading: 'Low Temperature Is NOT Denaturation',
            bullets: [
              '**Reversible slowing at 0 °C** - cold enzymes are merely inactive (low kinetic energy), NOT denatured; warming restores full activity.',
            ],
            exampleHeading: 'Worked graph check: Human enzyme optimum ~37 °C',
            examples: [
              'Rate climbs steadily from 10 °C to 37 °C, peaks at 37 °C, and crashes sharply to 0 by ~55–60 °C due to denaturation.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'denaturation', definition: 'Irreversible change in the 3D shape of an enzyme’s active site caused by high temperature or extreme pH so the substrate can no longer bind.' },
        ],
        commonMistake: 'NEVER write that enzymes are "killed" or "die" at high temperature — enzymes are non-living proteins; ALWAYS write that they are DENATURED and the ACTIVE SITE changes shape!',
      },
      {
        id: 'igbio-3-2-c3',
        title: 'Effect of pH on Enzyme Activity',
        summary: 'Extreme pH either side of an enzyme’s optimum breaks ionic bonds and denatures its active site.',
        bullets: [
          '**Symmetrical bell curve** - activity peaks at optimum pH and falls rapidly on BOTH acidic and alkaline sides as H⁺/OH⁻ ions disrupt bonds maintaining active-site shape.',
        ],
        subsections: [
          {
            heading: 'Different Optimum pH Values in the Gut',
            bullets: [
              '**Pepsin (stomach protease)** - optimum **pH 2** (hydrochloric acid kills bacteria and provides acidic optimum).',
              '**Salivary amylase (mouth)** - optimum **pH 7** (neutral).',
              '**Trypsin / pancreatic lipase (small intestine)** - optimum **pH 8** (alkaline due to bile neutralising stomach acid).',
            ],
            exampleHeading: 'Concrete check: Why pepsin stops working in the small intestine',
            examples: [
              'Alkaline bile raises duodenal pH to ~8, which denatures stomach pepsin.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'optimum pH', definition: 'The specific pH at which a given enzyme works at its maximum rate.' },
        ],
        memoryAid: 'Three golden words for enzyme marks: COMPLEMENTARY active site → ENZYME–SUBSTRATE COMPLEX → DENATURED (never "killed")!',
      },
    ],
    keyTerms: [
      { term: 'Active site', definition: 'Region of an enzyme with a specific 3D shape complementary to one substrate.' },
      { term: 'Enzyme–substrate complex', definition: 'Temporary binding of substrate inside the enzyme’s active site.' },
      { term: 'Denaturation', definition: 'Permanent loss of active-site 3D shape due to high heat or extreme pH.' },
      { term: 'Optimum temperature', definition: 'Temperature giving the maximum rate of enzyme-catalysed reaction.' },
    ],
    checklistPoints: [
      'Explain enzyme specificity using complementary active site and enzyme–substrate complexes',
      'Explain the asymmetric temperature curve (kinetic energy rise vs denaturation drop)',
      'Compare pH optima for pepsin (pH 2), amylase (pH 7), and trypsin/lipase (pH 8)',
    ],
  },

  'igbio-4-1': {
    subtopicId: 'igbio-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Photosynthesis, Leaf Structure & Limiting Factors',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Factors Affecting the Rate of Photosynthesis | Limiting Factor Graphs',
    youtubeId: '6sLrh-SDv_Y',
    videoChannel: 'Cognito',
    videoDuration: '5:27',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Equations, Uses of Glucose & Mineral Ions', cardId: 'igbio-4-1-c1' },
      { time: '1:50', seconds: 110, label: 'Leaf Cross-Section Adaptations', cardId: 'igbio-4-1-c2' },
      { time: '3:40', seconds: 220, label: 'Limiting Factors & Hydrogen Carbonate Indicator', cardId: 'igbio-4-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-4-1-c1',
        title: 'Photosynthesis Equations, Glucose Uses & Mineral Ions',
        summary: 'Chlorophyll transfers light energy into chemical energy in glucose; nitrates build amino acids and magnesium builds chlorophyll.',
        bullets: [
          '**Balanced equation** - **6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂** (requires light energy and chlorophyll inside chloroplasts).',
          '**Mineral ion deficiencies** - **Nitrate ions (NO₃⁻)** make **amino acids/proteins** (deficiency → stunted growth); **Magnesium ions (Mg²⁺)** make **chlorophyll** (deficiency → yellow leaves / chlorosis).',
        ],
        subsections: [
          {
            heading: 'Fate of Glucose Made in Photosynthesis',
            bullets: [
              '**Five uses** - (1) **Starch** (insoluble energy store); (2) **Cellulose** (cell walls); (3) **Respiration** (energy); (4) **Sucrose** (transported in phloem); (5) **Amino acids/proteins** (with nitrates) & lipids.',
            ],
            exampleHeading: 'Concrete check: Testing a leaf for starch',
            examples: [
              'Boil in water (kills cell/breaks membranes) → warm in ETHANOL in a water bath (removes green chlorophyll safely, no naked flame!) → rinse → add iodine (blue-black where starch is present).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'chlorophyll', definition: 'Green pigment in chloroplasts that transfers light energy into chemical energy for synthesising carbohydrates.' },
        ],
        diagram: 'photosynthesis-chloroplast',
      },
      {
        id: 'igbio-4-1-c2',
        title: 'Internal Leaf Structure & Adaptations',
        summary: 'Thin broad lamina, transparent upper epidermis, packed palisade cells, spongy air spaces, and stomatal guard cells maximise photosynthesis.',
        bullets: [
          '**Waxy cuticle & upper epidermis** - waterproof layer reduces water loss; transparent cells let light straight through.',
          '**Palisade mesophyll** - tightly packed upright cells full of chloroplasts near the top surface to maximise light absorption.',
          '**Spongy mesophyll & stomata** - air spaces allow rapid **CO₂ diffusion** from open **stomata** (controlled by **guard cells**) to palisade cells; vascular bundles bring water (**xylem**) and export sucrose (**phloem**).',
        ],
        subsections: [
          {
            heading: 'Gas Exchange Across Day and Night',
            bullets: [
              '**Hydrogen carbonate indicator** - **red** (normal CO₂), **purple** (low CO₂ in bright light — net photosynthesis), **yellow** (high CO₂ in dark — respiration only).',
            ],
            exampleHeading: 'Concrete check: Bright light vs dark tube with aquatic leaf',
            examples: [
              'In bright light, photosynthesis rate > respiration rate → net CO₂ uptake → indicator turns PURPLE. In darkness, respiration releases CO₂ → indicator turns YELLOW.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'stomata', definition: 'Microscopic pores mostly on the lower leaf epidermis, opened and closed by guard cells to regulate gas exchange and water loss.' },
        ],
      },
      {
        id: 'igbio-4-1-c3',
        title: 'Limiting Factors & Glasshouse Optimisation',
        summary: 'Whichever factor (light, CO₂, or temperature) is in shortest supply limits rate; once a graph flattens, another factor has become limiting.',
        bullets: [
          '**Limiting factor** - something present in the environment in such short supply that it restricts life processes.',
        ],
        subsections: [
          {
            heading: 'Reading Limiting Factor Graphs',
            bullets: [
              '**Sloping section** - the factor on the x-axis (e.g. light intensity) is limiting.',
              '**Flat plateau** - increasing the x-axis factor has no further effect because **temperature or CO₂ concentration** is now limiting (raising either lifts the plateau!).',
            ],
            exampleHeading: 'Concrete check: Commercial greenhouses',
            examples: [
              'Growers burn paraffin heaters or pipe in CO₂, add artificial lighting, and control temperature to maximise crop yield profitably.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'limiting factor', definition: 'An environmental factor in shortest supply that caps the rate of a process such as photosynthesis.' },
        ],
        memoryAid: 'Hydrogen carbonate indicator: Purple = low CO₂ (Photosynthesis!), Red = neutral, Yellow = high CO₂ (Respiration)!',
        commonMistake: 'When describing how to decolourise a leaf in ethanol, ALWAYS specify a hot WATER BATH (no Bunsen flame) because ethanol is flammable!',
      },
    ],
    keyTerms: [
      { term: 'Photosynthesis', definition: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ using light energy absorbed by chlorophyll.' },
      { term: 'Chlorophyll', definition: 'Green pigment converting light energy into chemical energy in carbohydrates.' },
      { term: 'Limiting factor', definition: 'Factor in shortest supply restricting the rate of photosynthesis.' },
      { term: 'Stomata', definition: 'Leaf pores flanked by guard cells controlling CO₂ entry and water vapour loss.' },
    ],
    checklistPoints: [
      'Write the balanced photosynthesis equation and explain nitrate (amino acids) and magnesium (chlorophyll) deficiencies',
      'Explain every leaf layer’s adaptation and predict hydrogen carbonate indicator colours in light vs dark',
      'Identify limiting factors on sloping vs plateau regions of multi-curve photosynthesis graphs',
    ],
  },

  'igbio-4-2': {
    subtopicId: 'igbio-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Xylem, Phloem, Transpiration & Translocation',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Transpiration & Translocation',
    youtubeId: 's06FvGH3QJo',
    videoChannel: 'Cognito',
    videoDuration: '5:17',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Xylem Vessels & Transpiration Pull', cardId: 'igbio-4-2-c1' },
      { time: '1:45', seconds: 105, label: 'Factors Affecting Transpiration Rate & Wilting', cardId: 'igbio-4-2-c2' },
      { time: '3:30', seconds: 210, label: 'Phloem & Translocation (Source to Sink)', cardId: 'igbio-4-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-4-2-c1',
        title: 'Xylem Structure & The Transpiration Stream',
        summary: 'Dead hollow lignin-strengthened xylem tubes pull a continuous column of water upward by cohesion and transpiration pull.',
        bullets: [
          '**Xylem adaptations** - dead hollow cells with **no end walls** and no cytoplasm (unobstructed water flow), thickened with waterproof **lignin** (supports stem & stops vessels collapsing under tension).',
          '**Transpiration** - loss of **water vapour** from leaves by **evaporation** from mesophyll cell surfaces into air spaces, followed by **diffusion** out through open **stomata**.',
        ],
        subsections: [
          {
            heading: 'Mechanism of Upward Water Movement',
            bullets: [
              '**Transpiration pull** - evaporation lowers water potential in leaves, drawing water up xylem as a continuous column held together by **cohesion** (attraction between water molecules).',
            ],
            exampleHeading: 'Pathway of water through a plant',
            examples: [
              'Soil water → Root hair cell (osmosis) → Root cortex → Xylem vessels → Leaf mesophyll cells → Air spaces (evaporation) → Stomata (diffusion to air).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'transpiration', definition: 'Loss of water vapour from plant leaves by evaporation from mesophyll cell surfaces followed by diffusion through stomata.' },
          { term: 'lignin', definition: 'Strong waterproof substance thickening xylem vessel walls for structural support.' },
        ],
      },
      {
        id: 'igbio-4-2-c2',
        title: 'Factors Affecting Transpiration Rate & Wilting',
        summary: 'Higher temperature, higher wind speed, and higher light increase transpiration; higher humidity decreases it.',
        bullets: [
          '**Increases transpiration** - **higher temperature** (faster evaporation & diffusion), **higher wind speed** (blows humid air away, keeping water vapour gradient steep), **higher light** (stomata open wider for CO₂).',
          '**Decreases transpiration** - **higher humidity** (air already saturated with water vapour, reducing the diffusion gradient).',
        ],
        subsections: [
          {
            heading: 'Wilting & Potometers',
            bullets: [
              '**Wilting** - occurs when water loss by transpiration exceeds water uptake by roots → cells lose turgor and become **flaccid**.',
              '**Potometer** - measures rate of **water uptake** (closely approximates transpiration rate) by timing an air bubble moving along a capillary tube.',
            ],
            exampleHeading: 'Worked potometer rate',
            examples: [
              'Air bubble moves 36 mm in 12 minutes → uptake rate = 36 ÷ 12 = 3.0 mm/min.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'potometer', definition: 'Apparatus used to estimate transpiration rate by measuring the rate of water uptake by a leafy shoot.' },
        ],
      },
      {
        id: 'igbio-4-2-c3',
        title: 'Phloem & Translocation (Sources to Sinks)',
        summary: 'Living phloem transports sucrose and amino acids bidirectionally from sources (producing/releasing) to sinks (using/storing).',
        bullets: [
          '**Translocation** - movement of **sucrose** and **amino acids** in **phloem** from regions of production (**sources**) to regions of storage or use in respiration/growth (**sinks**).',
        ],
        subsections: [
          {
            heading: 'How Sources and Sinks Swap with Seasons',
            bullets: [
              '**Summer** - photosynthesising **leaves are sources** exporting sucrose down to roots/tubers (**sinks**).',
              '**Spring** - stored starch in **roots/tubers** breaks down into sucrose, making roots the **source** supplying growing buds/flowers (**sinks**).',
            ],
            exampleHeading: 'Contrast: Xylem vs Phloem',
            examples: [
              'Xylem: dead, lignified, water + mineral ions, upward only. Phloem: living, sucrose + amino acids, bidirectional (up and down).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'translocation', definition: 'Bidirectional transport of sucrose and amino acids in phloem from sources to sinks.' },
        ],
        memoryAid: 'Xylem = Water Up (lignin, dead); Phloem = Food Flows both ways (sucrose & amino acids, living)!',
        commonMistake: 'NEVER write that phloem transports "glucose" — Cambridge 0610 specifically requires **sucrose and amino acids**!',
      },
    ],
    keyTerms: [
      { term: 'Transpiration', definition: 'Evaporation of water from mesophyll cells followed by diffusion of water vapour out of stomata.' },
      { term: 'Translocation', definition: 'Movement of sucrose and amino acids in phloem from sources to sinks.' },
      { term: 'Lignin', definition: 'Waterproof strengthening material lining dead xylem vessels.' },
      { term: 'Potometer', definition: 'Device measuring rate of water uptake by a cut leafy shoot.' },
    ],
    checklistPoints: [
      'Trace water movement from soil to atmosphere and explain cohesion + transpiration pull in xylem',
      'Explain how temperature, wind, light, and humidity change transpiration rate and cause wilting',
      'Define translocation (sucrose & amino acids in phloem) and explain seasonal source–sink reversal',
    ],
  },

  'igbio-5-1': {
    subtopicId: 'igbio-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Balanced Diet, Digestion & Absorption',
    readingMinutes: 10,
    videoTitle: 'The Digestive System',
    youtubeId: 'eSGRpPcJGlA',
    videoChannel: 'Cognito',
    videoDuration: '8:26',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Balanced Diet, Deficiency Diseases & Mechanical Digestion', cardId: 'igbio-5-1-c1' },
      { time: '2:50', seconds: 170, label: 'Chemical Digestion: Enzymes, HCl & Bile', cardId: 'igbio-5-1-c2' },
      { time: '5:40', seconds: 340, label: 'Small Intestine Villi & Absorption', cardId: 'igbio-5-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-5-1-c1',
        title: 'Balanced Diet, Deficiencies & Physical Digestion',
        summary: 'A balanced diet supplies all 7 nutrient groups in right proportions; vitamin C prevents scurvy and vitamin D/calcium prevent rickets.',
        bullets: [
          '**Deficiencies** - **Vitamin C** → **scurvy** (bleeding gums); **Vitamin D / Calcium** → **rickets** (soft bent bones); **Iron** → **anaemia** (low haemoglobin); **Fibre** → constipation (needed for peristalsis).',
          '**Physical digestion** - chewing by teeth, churning in stomach, and **emulsification by bile** break large food pieces into smaller pieces to increase **surface area** for enzymes (without chemical change).',
        ],
        subsections: [
          {
            heading: 'Teeth & Peristalsis',
            bullets: [
              '**Incisors** cut/bite, **canines** tear, **premolars & molars** grind; **peristalsis** is rhythmic contraction of circular and longitudinal gut muscles pushing food along.',
            ],
            exampleHeading: 'Concrete check: Why emulsification is physical digestion',
            examples: [
              'Bile breaks large fat globules into tiny fat droplets — fat molecules themselves remain chemically unchanged until lipase digests them.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'emulsification', definition: 'Physical breaking of large lipid droplets into tiny droplets by bile salts to increase surface area for lipase.' },
        ],
      },
      {
        id: 'igbio-5-1-c2',
        title: 'Chemical Digestion: Enzymes, Stomach Acid & Bile',
        summary: 'Chemical digestion breaks large insoluble molecules into small soluble molecules that can cross gut walls into blood.',
        bullets: [
          '**Starch** → (amylase) → **maltose** → (maltase on villus membranes) → **glucose**.',
          '**Protein** → (pepsin in stomach pH 2 / trypsin in small intestine pH 8) → **amino acids**.',
          '**Fats/lipids** → (lipase from pancreas) → **fatty acids + glycerol**.',
        ],
        subsections: [
          {
            heading: 'Two Roles of Bile (Made in Liver, Stored in Gall Bladder)',
            bullets: [
              '**Role 1** - **alkaline** bile **neutralises acidic chyme** from the stomach to provide the **optimum pH (~8)** for pancreatic enzymes.',
              '**Role 2** - **emulsifies fats** into tiny droplets, greatly increasing surface area for faster lipase action.',
            ],
            exampleHeading: 'Concrete check: Two roles of stomach HCl',
            examples: [
              '1) Kills harmful bacteria in swallowed food; 2) Creates acidic pH 2 optimum for pepsin.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'bile', definition: 'Alkaline fluid produced by the liver and stored in the gall bladder that neutralises stomach acid and emulsifies fats (contains NO enzymes).' },
        ],
        commonMistake: 'NEVER claim bile contains digestive enzymes — bile contains NO enzymes; it ONLY neutralises acid and physically emulsifies fats!',
      },
      {
        id: 'igbio-5-1-c3',
        title: 'Absorption in the Small Intestine & Villi Adaptations',
        summary: 'Millions of finger-like villi with microvilli, thin one-cell walls, dense capillaries, and lacteals maximise absorption.',
        bullets: [
          '**Villi adaptations** - (1) Folded walls + **microvilli** give huge **surface area**; (2) **One-cell-thick epithelium** gives very short diffusion distance; (3) Dense **capillary network** maintains steep concentration gradient for glucose & amino acids; (4) **Lacteal** absorbs fatty acids & glycerol into lymph.',
        ],
        subsections: [
          {
            heading: 'Hepatic Portal Vein & Water Absorption',
            bullets: [
              '**Transport to liver** - capillaries merge into the **hepatic portal vein** carrying absorbed glucose and amino acids straight to the liver for **assimilation**.',
              '**Water absorption** - most water is absorbed in the **small intestine**, with the remainder absorbed in the **colon**.',
            ],
            exampleHeading: 'Concrete check: Active transport in villi',
            examples: [
              'Villus epithelial cells contain abundant mitochondria to power active transport of glucose when gut glucose concentration drops below blood glucose.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'villi', definition: 'Tiny finger-like projections lining the ileum that massively increase surface area for absorption of digested nutrients.' },
          { term: 'lacteal', definition: 'Central lymphatic vessel inside each villus that absorbs digested fatty acids and glycerol.' },
        ],
        memoryAid: 'Bile = Made in Liver, Stored in Gall Bladder, NO enzymes — Neutralises acid + Emulsifies fats!',
      },
    ],
    keyTerms: [
      { term: 'Emulsification', definition: 'Breaking large fat globules into tiny droplets by bile to increase surface area.' },
      { term: 'Bile', definition: 'Alkaline liver secretion (no enzymes) that neutralises acid and emulsifies fats.' },
      { term: 'Villi', definition: 'Finger-like projections in the small intestine maximising nutrient absorption.' },
      { term: 'Assimilation', definition: 'Uptake and use of absorbed nutrients by body cells.' },
    ],
    checklistPoints: [
      'Link Vitamin C (scurvy), Vitamin D/Ca (rickets), Iron (anaemia), and Fibre to deficiency symptoms',
      'State sites, substrates, products, and pH optima for amylase, maltase, pepsin, trypsin, and lipase + roles of bile & HCl',
      'Explain all 4 structural adaptations of small intestine villi including capillaries and lacteals',
    ],
  },

  'igbio-5-2': {
    subtopicId: 'igbio-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Human Gas Exchange, Breathing & Respiration',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - The Lungs & Gas Exchange',
    youtubeId: 'Nn4ke02sW8Q',
    videoChannel: 'Cognito',
    videoDuration: '6:52',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Alveoli Adaptations & Inspired vs Expired Air', cardId: 'igbio-5-2-c1' },
      { time: '2:20', seconds: 140, label: 'Ventilation Mechanics (Diaphragm & Intercostal Muscles)', cardId: 'igbio-5-2-c2' },
      { time: '4:40', seconds: 280, label: 'Aerobic vs Anaerobic Respiration & Oxygen Debt', cardId: 'igbio-5-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-5-2-c1',
        title: 'Alveoli Adaptations & Inspired vs Expired Air',
        summary: 'Alveoli provide huge surface area, thin one-cell walls, moist linings, and rich capillary supply; expired air has less O₂ and ~100× more CO₂.',
        bullets: [
          '**Four alveoli adaptations** - (1) Millions of alveoli → **huge surface area**; (2) **One-cell-thick** alveolar & capillary walls → **short diffusion distance**; (3) **Moist** lining dissolves gases; (4) **Good ventilation + rich capillary blood supply** maintain steep concentration gradients.',
          '**Air composition** - Inspired: 21% O₂, 0.04% CO₂, variable water vapour. Expired: **16% O₂**, **4% CO₂**, saturated water vapour (N₂ stays ~78%).',
        ],
        subsections: [
          {
            heading: 'Protecting the Airways',
            bullets: [
              '**Goblet cells** secrete sticky mucus trapping pathogens and dust; **ciliated epithelial cells** waft mucus up to the throat to be swallowed (cartilage C-rings keep the trachea open).',
            ],
            exampleHeading: 'Concrete check: Testing expired air for CO₂',
            examples: [
              'Bubbling exhaled air through clear limewater turns it milky much faster than inhaling atmospheric air through limewater.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'alveoli', definition: 'Tiny thin-walled air sacs in the lungs where oxygen diffuses into the blood and carbon dioxide diffuses out.' },
        ],
      },
      {
        id: 'igbio-5-2-c2',
        title: 'Mechanics of Breathing (Inhalation vs Exhalation)',
        summary: 'Antagonistic intercostal muscles and diaphragm change thorax volume, creating pressure differences that pull air in or push it out.',
        bullets: [
          '**Inhalation (Breathing IN)** - **external intercostal muscles contract** (internal relax) pulling ribcage **up & out**; **diaphragm contracts and flattens** → thorax **volume INCREASES** → thorax **pressure DECREASES** below atmospheric → air flows IN.',
          '**Exhalation (Breathing OUT)** - external intercostals relax (internal contract in forced breathing), ribcage drops **down & in**; diaphragm relaxes & **domes upward** → thorax **volume DECREASES** → **pressure INCREASES** → air forced OUT.',
        ],
        subsections: [
          {
            heading: 'Why Breathing Rate Rises During Exercise',
            bullets: [
              '**CO₂ stimulus** - working muscles respire faster, raising **blood CO₂** (lowering blood pH); the brain detects this and triggers deeper, faster breathing to expel CO₂ and take in O₂.',
            ],
            exampleHeading: 'Exam wording check',
            examples: [
              'Always link muscle contraction → thorax VOLUME change → air PRESSURE change → air flow direction!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ventilation', definition: 'Mechanical movement of air into and out of the lungs driven by thorax volume and pressure changes.' },
        ],
      },
      {
        id: 'igbio-5-2-c3',
        title: 'Aerobic vs Anaerobic Respiration & Oxygen Debt',
        summary: 'Aerobic respiration releases far more energy per glucose; anaerobic muscle respiration forms lactic acid creating an oxygen debt repaid in the liver.',
        bullets: [
          '**Aerobic respiration** - **C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O** (releases large amount of energy in mitochondria).',
          '**Anaerobic in muscles** - **Glucose → Lactic acid** (much less energy, no O₂).',
          '**Anaerobic in yeast** - **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂** (ethanol + CO₂ for brewing & bread-making).',
        ],
        subsections: [
          {
            heading: 'Repaying Oxygen Debt After Vigorous Exercise',
            bullets: [
              '**Why heart & breathing stay elevated** - fast heart rate transports **lactic acid** in blood from muscles to the **liver**, while deep fast breathing supplies extra **oxygen** for the liver to **oxidise lactic acid** back into CO₂ + H₂O (or glucose).',
            ],
            exampleHeading: 'Concrete check: Why yeast makes bread rise',
            examples: [
              'CO₂ bubbles from anaerobic yeast respiration expand dough; baking kills yeast and evaporates ethanol.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'oxygen debt', definition: 'The extra oxygen needed after vigorous exercise to transport lactic acid to the liver and oxidise it.' },
        ],
        memoryAid: 'Inhalation = Diaphragm Flattens, Ribs Up & Out, Volume UP, Pressure DOWN!',
        commonMistake: 'In ventilation answers, NEVER say "the lungs contract/expand on their own" — lungs have no muscles; the DIAPHRAGM and INTERCOSTAL MUSCLES change thorax volume!',
      },
    ],
    keyTerms: [
      { term: 'Alveoli', definition: 'Thin-walled lung air sacs providing huge surface area for gas exchange.' },
      { term: 'Aerobic respiration', definition: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O releasing large energy in cells.' },
      { term: 'Anaerobic respiration', definition: 'Incomplete breakdown of glucose without oxygen forming lactic acid (muscles) or ethanol + CO₂ (yeast).' },
      { term: 'Oxygen debt', definition: 'Extra oxygen required after exercise so the liver can break down accumulated lactic acid.' },
    ],
    checklistPoints: [
      'List all 4 alveoli adaptations and exact inspired (21% O₂, 0.04% CO₂) vs expired (16% O₂, 4% CO₂) percentages',
      'Explain inhalation and exhalation step by step via intercostals, diaphragm, volume, and pressure',
      'Write aerobic/anaerobic equations and explain how the liver clears lactic acid to repay oxygen debt',
    ],
  },

  'igbio-6-1': {
    subtopicId: 'igbio-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Double Circulation, The Heart & Blood Vessels',
    readingMinutes: 10,
    videoTitle: 'The Circulatory System & The Heart',
    youtubeId: '31nyaBdC-q8',
    videoChannel: 'Cognito',
    videoDuration: '6:51',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Double Circulation & Heart Chambers/Valves', cardId: 'igbio-6-1-c1' },
      { time: '2:20', seconds: 140, label: 'Arteries, Veins, Capillaries & CHD', cardId: 'igbio-6-1-c2' },
      { time: '4:40', seconds: 280, label: 'Blood Components & Clotting Cascade', cardId: 'igbio-6-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-6-1-c1',
        title: 'Double Circulation & Structure of the Mammalian Heart',
        summary: 'Mammals pump blood through the heart twice per circuit — keeping oxygenated and deoxygenated blood separate at high pressure.',
        bullets: [
          '**Double circulation advantage** - low pressure to delicate lung capillaries prevents damage, then re-pressurisation by the thick **left ventricle** maintains high systemic pressure for rapid O₂ delivery to body organs.',
          '**Left vs Right ventricle** - the **left ventricle** has a much **thicker muscular wall** than the right ventricle because it pumps blood at higher pressure all around the entire body (right only pumps to nearby lungs).',
        ],
        subsections: [
          {
            heading: 'Four Major Vessels & Valves',
            bullets: [
              '**Vessels** - Vena cava → Right Atrium → Right Ventricle → **Pulmonary artery** (to lungs) → **Pulmonary vein** (from lungs) → Left Atrium → Left Ventricle → **Aorta** (to body).',
              '**Valves** - atrioventricular (tricuspid/bicuspid) and semilunar valves **prevent backflow of blood**; the **septum** separates oxygenated and deoxygenated blood.',
            ],
            exampleHeading: 'Concrete check: Left & Right on heart diagrams',
            examples: [
              'Heart diagrams are always drawn as if facing the patient — the LEFT ventricle (thickest wall) appears on the RIGHT side of the printed page!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'double circulation', definition: 'Circulatory system in which blood passes through the heart twice during one complete circuit of the body (pulmonary and systemic loops).' },
        ],
      },
      {
        id: 'igbio-6-1-c2',
        title: 'Arteries, Veins, Capillaries & Coronary Heart Disease (CHD)',
        summary: 'Arteries have thick elastic/muscular walls for high pressure; veins have wide lumens and valves; capillaries are one cell thick for exchange.',
        bullets: [
          '**Arteries** - carry blood **Away** from heart at **high pressure**; thick muscular & elastic walls, narrow lumen, no valves (except heart base).',
          '**Veins** - return blood to heart at **low pressure**; thinner walls, wide lumen, **valves** to prevent backflow.',
          '**Capillaries** - **one-cell-thick** walls for rapid short-distance diffusion of O₂, glucose, and CO₂.',
        ],
        subsections: [
          {
            heading: 'Coronary Heart Disease (CHD)',
            bullets: [
              '**Cause** - fatty plaques (**atheroma**) narrow/block **coronary arteries** supplying the heart muscle itself → starving cardiac muscle of O₂ and glucose → heart muscle stops respiring aerobically and dies (heart attack).',
              '**Risk factors** - diet high in saturated fat, smoking, high stress, lack of exercise, genetic predisposition.',
            ],
            exampleHeading: 'Concrete check: Main hepatic/renal vessels',
            examples: [
              'Renal artery/vein serve the kidneys; hepatic artery, hepatic portal vein (from gut), and hepatic vein serve the liver.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'coronary arteries', definition: 'Arteries branching from the aorta that supply oxygenated blood and glucose directly to the heart muscle.' },
        ],
      },
      {
        id: 'igbio-6-1-c3',
        title: 'Blood Components & Blood Clotting',
        summary: 'Red blood cells carry oxygen via haemoglobin; white blood cells fight pathogens; platelets trigger fibrinogen → insoluble fibrin mesh.',
        bullets: [
          '**Four components** - **Plasma** (transports CO₂, ions, nutrients, urea, hormones), **Red blood cells** (haemoglobin transports O₂), **White blood cells** (**phagocytes** engulf pathogens; **lymphocytes** make antibodies), **Platelets** (clotting).',
        ],
        subsections: [
          {
            heading: 'Blood Clotting Mechanism',
            bullets: [
              '**Fibrinogen → Fibrin** - at a wound, **platelets** trigger conversion of soluble **fibrinogen** into an insoluble **fibrin** mesh that traps red blood cells to form a clot/scab — stopping **blood loss** and blocking **pathogen entry**.',
            ],
            exampleHeading: 'Concrete check: Two roles of clotting',
            examples: [
              '1) Prevents excessive bleeding/blood loss; 2) Prevents entry of disease-causing pathogens into the bloodstream.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fibrin', definition: 'Insoluble protein fibres formed from soluble fibrinogen during blood clotting to form a mesh trapping blood cells.' },
        ],
        memoryAid: 'Arteries = Away (thick walls); Veins = Valves (wide lumen); Platelets turn soluble Fibrinogen → insoluble Fibrin!',
        commonMistake: 'NEVER say the pulmonary artery carries oxygenated blood — ALL arteries carry blood AWAY from the heart, and the pulmonary artery carries DEOXYGENATED blood to the lungs!',
      },
    ],
    keyTerms: [
      { term: 'Double circulation', definition: 'Blood passes through the heart twice per complete body circuit.' },
      { term: 'Coronary arteries', definition: 'Vessels supplying oxygen and glucose to cardiac muscle; blockage causes CHD.' },
      { term: 'Phagocyte', definition: 'White blood cell with lobed nucleus that engulfs and digests pathogens.' },
      { term: 'Fibrin', definition: 'Insoluble fibrous mesh converted from soluble fibrinogen to clot blood.' },
    ],
    checklistPoints: [
      'Trace blood through all 4 chambers, valves, and major vessels, explaining why the left ventricle wall is thickest',
      'Compare structure and pressure in arteries, veins, and capillaries and explain CHD risk factors',
      'State functions of all 4 blood components and the fibrinogen → fibrin clotting cascade',
    ],
  },

  'igbio-6-2': {
    subtopicId: 'igbio-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Pathogens, Immunity & Vaccination',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Vaccinations | How Vaccines Work',
    youtubeId: 'Rz5RxEFo2CM',
    videoChannel: 'Cognito',
    videoDuration: '3:42',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Pathogens, Transmission & Body Defences', cardId: 'igbio-6-2-c1' },
      { time: '1:15', seconds: 75, label: 'Antibodies, Memory Cells & Vaccination', cardId: 'igbio-6-2-c2' },
      { time: '2:30', seconds: 150, label: 'Active vs Passive Immunity & Antibiotics', cardId: 'igbio-6-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-6-2-c1',
        title: 'Pathogens, Cholera & First-Line Defences',
        summary: 'Pathogens spread by direct contact or indirect routes (water, food, vectors, droplets); skin, mucus, and stomach acid block entry.',
        bullets: [
          '**Mechanical & chemical barriers** - **skin** (physical barrier), **nose hairs & trachea mucus/cilia** (trap and sweep pathogens), **stomach HCl** (kills swallowed bacteria).',
          '**Cholera bacterium** - transmitted in contaminated water; releases a **toxin** causing chloride ions to be secreted into the small intestine lumen → lowering lumen water potential → osmotic water loss → severe watery **diarrhoea** & dehydration (treated by oral rehydration therapy).',
        ],
        subsections: [
          {
            heading: 'Hygienic Control Measures',
            bullets: [
              '**Breaking transmission** - clean chlorinated water, proper sewage disposal, hygienic food prep, handwashing, and waste disposal.',
            ],
            exampleHeading: 'Concrete check: Why cholera causes dehydration',
            examples: [
              'Cl⁻ secretion into the gut lowers water potential in the lumen so water leaves intestinal cells into the gut by OSMOSIS.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'antigen', definition: 'A specific protein marker on the surface of a pathogen or cell that triggers an immune response.' },
        ],
      },
      {
        id: 'igbio-6-2-c2',
        title: 'Antibodies, Memory Cells & How Vaccines Work',
        summary: 'Lymphocytes produce complementary antibodies against antigens; vaccines trigger memory cells for rapid future secondary responses.',
        bullets: [
          '**Specific antibodies** - **lymphocytes** make **antibodies** with binding sites **complementary** in shape to a pathogen’s **antigens**, marking pathogens for destruction by **phagocytes** or clumping them together.',
          '**Vaccination steps** - inject weakened/dead pathogens (or harmless **antigens**) → stimulates lymphocytes to make specific antibodies AND **memory cells** → on real infection later, memory cells divide rapidly to produce **much higher antibody levels much faster** before symptoms develop.',
        ],
        subsections: [
          {
            heading: 'Herd Immunity',
            bullets: [
              '**Mass vaccination** - reduces the number of susceptible hosts so the pathogen cannot easily spread through the population, protecting even unvaccinated individuals.',
            ],
            exampleHeading: 'Concrete check: Primary vs Secondary response',
            examples: [
              'Secondary response has a much shorter lag time, steeper rise, higher peak antibody concentration, and lasts much longer thanks to memory cells.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'antibody', definition: 'A specific protein secreted by lymphocytes that binds to complementary antigens on pathogens to destroy or neutralise them.' },
          { term: 'memory cell', definition: 'Long-lived lymphocyte produced after infection or vaccination that triggers a rapid, massive secondary antibody response upon re-exposure.' },
        ],
      },
      {
        id: 'igbio-6-2-c3',
        title: 'Active vs Passive Immunity & Why Antibiotics Fail on Viruses',
        summary: 'Active immunity makes your own memory cells (long-term); passive immunity receives ready-made antibodies (short-term); antibiotics target bacteria only.',
        bullets: [
          '**Active immunity** - body makes its **own antibodies and memory cells** after infection or vaccination (**long-term** protection).',
          '**Passive immunity** - ready-made antibodies received from another source (across **placenta**, in **breast milk**, or via antiserum injection) → **immediate but short-term** because **no memory cells** are formed.',
        ],
        subsections: [
          {
            heading: 'Antibiotics vs Viruses',
            bullets: [
              '**Why antibiotics do NOT cure flu/HIV** - antibiotics kill **bacteria** by disrupting bacterial cell walls or metabolic enzymes; **viruses have no cell wall or metabolism** and hide inside host cells.',
            ],
            exampleHeading: 'Concrete check: Preventing antibiotic resistance (MRSA)',
            examples: [
              'Only prescribe antibiotics for genuine bacterial infections, never viral colds, and always complete the full prescribed course.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'passive immunity', definition: 'Short-term defence acquired by receiving ready-made antibodies from another individual (e.g. breast milk) without producing memory cells.' },
        ],
        memoryAid: 'Active = Makes Own Antibodies + Memory Cells (Long-term); Passive = Pre-made Antibodies, NO Memory Cells (Short-term)!',
        commonMistake: 'NEVER confuse ANTIGENS (markers on the pathogen) with ANTIBODIES (proteins made by your lymphocytes) or ANTIBIOTICS (medicines killing bacteria only)!',
      },
    ],
    keyTerms: [
      { term: 'Antigen', definition: 'Specific surface molecule on a pathogen that triggers lymphocyte antibody production.' },
      { term: 'Antibody', definition: 'Complementary protein made by lymphocytes that binds antigens to destroy pathogens.' },
      { term: 'Memory cell', definition: 'Long-lived lymphocyte enabling rapid secondary immunity.' },
      { term: 'Passive immunity', definition: 'Short-term protection from externally supplied antibodies without memory cell formation.' },
    ],
    checklistPoints: [
      'Explain body defences and the osmotic mechanism of cholera diarrhoea',
      'Explain antibody–antigen specificity and how vaccination builds long-term memory-cell immunity',
      'Contrast active vs passive immunity and explain why antibiotics work on bacteria only, never viruses',
    ],
  },

  'igbio-7-1': {
    subtopicId: 'igbio-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Excretion, The Liver & Kidney Nephron',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - How the Kidneys Work - (Kidneys Part 1/3)',
    youtubeId: 'gWnIFIdDeto',
    videoChannel: 'Cognito',
    videoDuration: '7:06',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Excretory Organs & Deamination in the Liver', cardId: 'igbio-7-1-c1' },
      { time: '2:25', seconds: 145, label: 'Kidney Structure & Ultrafiltration in Glomerulus', cardId: 'igbio-7-1-c2' },
      { time: '4:50', seconds: 290, label: 'Selective Reabsorption & Urine Composition', cardId: 'igbio-7-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-7-1-c1',
        title: 'Excretory Organs & Deamination in the Liver',
        summary: 'Lungs excrete CO₂; kidneys excrete urea, excess water, and ions; the liver converts excess toxic amino acids into urea via deamination.',
        bullets: [
          '**Deamination (in liver)** - excess **amino acids** cannot be stored, so the liver removes their nitrogen-containing amine group, forming toxic ammonia which is immediately converted into less toxic **urea** (transported in plasma to kidneys).',
        ],
        subsections: [
          {
            heading: 'Urinary System Pathway',
            bullets: [
              '**Organs in order** - **Kidney** (filters blood & makes urine) → **Ureter** (tube to bladder) → **Bladder** (stores urine) → **Urethra** (exits body).',
            ],
            exampleHeading: 'Spelling check: Ureter vs Urethra',
            examples: [
              'Two URETERS connect the two kidneys to the bladder; ONE URETHRA carries urine out of the bladder!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'deamination', definition: 'Removal of the nitrogen-containing part of excess amino acids in the liver to form urea.' },
        ],
      },
      {
        id: 'igbio-7-1-c2',
        title: 'The Kidney Nephron & Ultrafiltration',
        summary: 'High blood pressure in the glomerulus forces small molecules (water, glucose, urea, ions) into Bowman’s capsule while holding back proteins and blood cells.',
        bullets: [
          '**Kidney layers** - outer **cortex** (contains glomeruli & Bowman’s capsules) and inner **medulla** (contains loops of Henle & collecting ducts).',
          '**Ultrafiltration** - high pressure in the capillary knot (**glomerulus**) filters **water, glucose, urea, and ions** into **Bowman’s capsule**; **large protein molecules and blood cells** are too big to pass through.',
        ],
        subsections: [
          {
            heading: 'Why Proteins & Red Blood Cells Stay in Blood',
            bullets: [
              '**Molecular size filter** - finding protein or blood cells in urine indicates damaged glomeruli.',
            ],
            exampleHeading: 'Concrete check: Glomerular filtrate contents',
            examples: [
              'Filtrate contains water, glucose, urea, and mineral ions — ZERO proteins and ZERO red blood cells.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'glomerulus', definition: 'A high-pressure knot of capillaries inside Bowman’s capsule where ultrafiltration occurs.' },
          { term: 'nephron', definition: 'The microscopic functional filtering unit of the kidney.' },
        ],
      },
      {
        id: 'igbio-7-1-c3',
        title: 'Selective Reabsorption & Urine Volume/Concentration',
        summary: 'All glucose is reabsorbed back into blood by active transport; variable water and ions are reabsorbed depending on hydration.',
        bullets: [
          '**Selective reabsorption (tubule)** - **100% of glucose** is reabsorbed (by active transport), along with **some water** and **some ions** needed by the body; **urea** is NOT reabsorbed and stays in urine.',
        ],
        subsections: [
          {
            heading: 'Urine Changes on Hot vs Cold Days',
            bullets: [
              '**Hot day / heavy sweating / dehydration** - kidneys reabsorb MORE water → small volume of dark, **concentrated** urine.',
              '**Cold day / drinking lots of water** - kidneys reabsorb LESS water → large volume of pale, **dilute** urine.',
            ],
            exampleHeading: 'Concrete check: Glucose in urine',
            examples: [
              'Healthy urine has ZERO glucose; glucose appearing in urine is a classic diagnostic sign of uncontrolled diabetes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'selective reabsorption', definition: 'Reabsorption of all glucose and required amounts of water and ions from the kidney tubule back into surrounding capillaries.' },
        ],
        memoryAid: 'Two Ureters → Bladder → One Urethra; Glomerulus filters small molecules; Tubule reabsorbs 100% glucose!',
        commonMistake: 'NEVER say urea is produced in the kidneys — urea is made in the LIVER by deamination and merely EXCRETED by the kidneys!',
      },
    ],
    keyTerms: [
      { term: 'Deamination', definition: 'Liver breakdown of excess amino acids removing nitrogen to produce urea.' },
      { term: 'Nephron', definition: 'Microscopic filtering tubule inside the kidney.' },
      { term: 'Ultrafiltration', definition: 'High-pressure filtration of small solutes from glomerulus into Bowman’s capsule.' },
      { term: 'Selective reabsorption', definition: 'Reabsorbing 100% of glucose and needed water/ions back into blood along the nephron.' },
    ],
    checklistPoints: [
      'Explain deamination of excess amino acids into urea in the liver',
      'Describe ultrafiltration in the glomerulus (what passes through vs what stays in blood)',
      'Explain selective reabsorption of 100% glucose, variable water/ions, and urine concentration changes',
    ],
  },

  'igbio-7-2': {
    subtopicId: 'igbio-7-2',
    subtopicCode: '7.2',
    subtopicTitle: 'Nervous System, Reflex Arc, Synapses & The Eye',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - The Nervous System | Reflex Arcs Explained',
    youtubeId: 'BnsZo4j1YvU',
    videoChannel: 'Cognito',
    videoDuration: '5:08',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Reflex Arc Pathway & Three Neurones', cardId: 'igbio-7-2-c1' },
      { time: '1:45', seconds: 105, label: 'Synaptic Transmission (Neurotransmitters)', cardId: 'igbio-7-2-c2' },
      { time: '3:25', seconds: 205, label: 'The Eye: Pupil Reflex, Accommodation & Rods/Cones', cardId: 'igbio-7-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-7-2-c1',
        title: 'Nervous System & The Reflex Arc',
        summary: 'Reflexes are fast, automatic protective responses bypassing conscious brain decision-making via sensory, relay, and motor neurones.',
        bullets: [
          '**Reflex arc sequence** - **Stimulus → Receptor → Sensory neurone → Relay neurone (in spinal cord/CNS) → Motor neurone → Effector (muscle or gland) → Response**.',
        ],
        subsections: [
          {
            heading: 'CNS vs PNS',
            bullets: [
              '**CNS** - brain and spinal cord (coordinates responses); **PNS** - all peripheral nerves carrying electrical **impulses** to and from the CNS.',
            ],
            exampleHeading: 'Concrete example: Touching a hot pan',
            examples: [
              'Heat receptor → sensory neurone → relay neurone in spinal cord → motor neurone → biceps contracts → hand pulls away automatically before pain is consciously felt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'reflex action', definition: 'A fast, automatic, involuntary response to a stimulus that protects the body from harm.' },
        ],
        diagram: 'reflex-arc',
      },
      {
        id: 'igbio-7-2-c2',
        title: 'Synapses & One-Way Chemical Transmission',
        summary: 'Impulses cross the tiny synaptic gap by diffusing neurotransmitter molecules binding to complementary receptors on the next neurone.',
        bullets: [
          '**Four synaptic steps** - (1) Electrical impulse reaches axon terminal → triggers **vesicles** to release **neurotransmitter** into the **synaptic gap**; (2) Neurotransmitter **diffuses** across gap; (3) Binds to **complementary receptor proteins** on next neurone; (4) Triggers a new electrical impulse.',
        ],
        subsections: [
          {
            heading: 'Why Impulses Travel One Way Only',
            bullets: [
              '**Unidirectional** - vesicles containing neurotransmitter exist ONLY on the presynaptic side, and receptors exist ONLY on the postsynaptic membrane.',
            ],
            exampleHeading: 'Concrete check: Electrical vs Chemical',
            examples: [
              'Signal travels ELECTRICALLY along neurones, and CHEMICALLY (by diffusion of neurotransmitter) across synapses!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'synapse', definition: 'A microscopic junction between two neurones across which impulses pass via diffusing neurotransmitter molecules.' },
          { term: 'neurotransmitter', definition: 'Chemical messenger released from vesicles that diffuses across a synaptic gap to bind complementary receptors.' },
        ],
        diagram: 'synaptic-transmission',
      },
      {
        id: 'igbio-7-2-c3',
        title: 'The Human Eye: Pupil Reflex, Accommodation & Retina',
        summary: 'Antagonistic iris muscles adjust pupil size; ciliary muscles and suspensory ligaments alter lens thickness to focus near vs distant objects.',
        bullets: [
          '**Pupil reflex (bright light)** - **circular iris muscles contract**, **radial muscles relax** → pupil **constricts** (smaller) to protect retina from bright-light damage (reverse in dim light).',
          '**Accommodation (NEAR object)** - **ciliary muscles contract** → **suspensory ligaments slacken** → lens becomes **thicker / more convex** → refracts light **more strongly** onto retina (reverse for distant object!).',
          '**Rods vs Cones** - **Rods** detect dim light (black/white); **Cones** detect bright colour (red, green, blue), densely packed at the **fovea**.',
        ],
        subsections: [
          {
            heading: 'Cornea & Optic Nerve',
            bullets: [
              '**Cornea** does most fixed refraction of entering light; **optic nerve** carries impulses from retina to brain (where it exits is the **blind spot** with no rods/cones).',
            ],
            exampleHeading: 'Memory check for accommodation',
            examples: [
              'NEAR = Ciliary Contract, Suspensory Slacken, Lens Fat (thick); FAR = Ciliary Relax, Suspensory Pulled Tight, Lens Thin!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'accommodation', definition: 'Changing the shape (thickness) of the eye lens to focus light accurately onto the retina from near or distant objects.' },
        ],
        memoryAid: 'Bright light = Circular Contracts (Constricts); Near focus = Ciliary Contracts, Suspensory Slacken, Lens Fat!',
        commonMistake: 'NEVER say "electrical impulses jump across a synapse" — ALWAYS describe vesicles releasing NEUROTRANSMITTER diffusing across the gap to complementary RECEPTORS!',
      },
    ],
    keyTerms: [
      { term: 'Reflex arc', definition: 'Stimulus → receptor → sensory → relay → motor neurone → effector → response.' },
      { term: 'Synapse', definition: 'Junction between two neurones using chemical neurotransmitter diffusion for one-way transmission.' },
      { term: 'Accommodation', definition: 'Adjusting lens thickness via ciliary muscles and suspensory ligaments for near/far focus.' },
      { term: 'Fovea', definition: 'Region of the retina densely packed with cone cells for sharpest colour vision.' },
    ],
    checklistPoints: [
      'Trace a reflex arc and distinguish sensory, relay, and motor neurones',
      'Explain all 4 steps of synaptic transmission and why synapses ensure one-way conduction',
      'Explain antagonistic iris muscles (pupil reflex), ciliary/suspensory accommodation, and rods vs cones',
    ],
  },

  'igbio-7-3': {
    subtopicId: 'igbio-7-3',
    subtopicCode: '7.3',
    subtopicTitle: 'Hormones, Homeostasis & Plant Tropisms',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Homeostasis | Receptors, Coordination Centres, Effectors | Negative Feedback',
    youtubeId: 'zvDwNd_aKsk',
    videoChannel: 'Cognito',
    videoDuration: '6:09',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Endocrine Hormones vs Nervous Control & Adrenaline', cardId: 'igbio-7-3-c1' },
      { time: '2:05', seconds: 125, label: 'Homeostasis: Blood Glucose & Thermoregulation', cardId: 'igbio-7-3-c2' },
      { time: '4:10', seconds: 250, label: 'Plant Tropisms & Auxin Mechanism', cardId: 'igbio-7-3-c3' },
    ],
    cards: [
      {
        id: 'igbio-7-3-c1',
        title: 'Hormones vs Nervous Control & Adrenaline',
        summary: 'Hormones are blood-borne chemical messengers acting slower and longer than electrical nerve impulses.',
        bullets: [
          '**Hormone** - a chemical substance produced by an **endocrine gland**, carried in **blood plasma**, which alters the activity of specific **target organs**.',
          '**Adrenaline (fight-or-flight)** - secreted by **adrenal glands**: increases **heart rate**, **breathing rate**, **pupil dilation**, and converts liver glycogen → glucose to supply muscles with extra glucose & O₂ for respiration.',
        ],
        subsections: [
          {
            heading: 'Nervous vs Hormonal Comparison',
            bullets: [
              '**Nervous** - electrical impulses via neurones, very fast, short-lived, localised target.',
              '**Hormonal** - chemical messengers via blood, slower, longer-lasting, can act on multiple target organs.',
            ],
            exampleHeading: 'Key endocrine glands',
            examples: [
              'Pancreas (insulin/glucagon), Adrenal glands (adrenaline), Testes (testosterone), Ovaries (oestrogen).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hormone', definition: 'Chemical messenger secreted by an endocrine gland and carried in blood plasma to specific target organs.' },
        ],
      },
      {
        id: 'igbio-7-3-c2',
        title: 'Homeostasis: Blood Glucose & Body Temperature',
        summary: 'Negative feedback restores internal conditions to a set point via insulin/glucagon and skin vasodilation/vasoconstriction.',
        bullets: [
          '**Blood glucose control (Pancreas)** - **High glucose** → pancreas secretes **insulin** → liver & muscles absorb glucose and convert it into insoluble **glycogen** (lowers blood glucose). **Low glucose** → pancreas secretes **glucagon** → liver breaks glycogen back into glucose (raises blood glucose). Type 1 diabetes = pancreas fails to produce insulin.',
          '**Thermoregulation (Brain/Skin)** - **Too hot**: sweating (evaporation cools skin) + **vasodilation** (arterioles widen, more blood near surface radiates heat). **Too cold**: shivering (muscle respiration releases heat), hairs stand up, + **vasoconstriction** (arterioles narrow, less blood near surface).',
        ],
        subsections: [
          {
            heading: 'Negative Feedback Principle',
            bullets: [
              '**Negative feedback** - any deviation from the set point triggers corrective effectors that reverse the change and bring levels back to normal.',
            ],
            exampleHeading: 'Exam trap: Vasodilation wording',
            examples: [
              'NEVER say "capillaries move closer to the skin surface"! Say **arterioles supplying skin surface capillaries DILATE**, allowing MORE blood flow near the surface so more heat is lost by radiation.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'homeostasis', definition: 'Maintenance of a constant internal environment by negative feedback.' },
          { term: 'vasodilation', definition: 'Widening of arterioles supplying skin surface capillaries so more blood flows near the skin and more heat is lost.' },
        ],
        commonMistake: 'NEVER write "blood vessels move closer to the skin" or confuse GLYCOGEN (storage carbohydrate) with GLUCAGON (hormone)!',
      },
      {
        id: 'igbio-7-3-c3',
        title: 'Plant Tropisms & Role of Auxin',
        summary: 'Auxin collects on the shaded/lower side of shoots and stimulates cell elongation, making shoots bend towards light and away from gravity.',
        bullets: [
          '**Phototropism** - shoot grows **towards light** (+ve) to maximise photosynthesis; **Gravitropism** - root grows **towards gravity** (+ve) for water/anchorage while shoot grows **away from gravity** (−ve).',
        ],
        subsections: [
          {
            heading: 'How Auxin Causes Bending in Shoots',
            bullets: [
              '**Unilateral light** - **auxin** is made in the **shoot tip**, diffuses downward, and accumulates on the **SHADED side** → stimulates **faster cell elongation** on the shaded side → shoot bends **towards the light**.',
            ],
            exampleHeading: 'Concrete check: Horizontal shoot in dark',
            examples: [
              'Gravity causes auxin to accumulate on the LOWER side of a horizontal shoot → lower-side cells elongate faster → shoot bends UPWARDS (negative gravitropism).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'auxin', definition: 'Plant growth hormone made in shoot tips that diffuses away from light and stimulates cell elongation in shoots.' },
        ],
        memoryAid: 'Insulin = glucose IN to liver (as glycogen); Glucagon = glucose is GONE (breaks glycogen back to glucose)!',
      },
    ],
    keyTerms: [
      { term: 'Homeostasis', definition: 'Maintaining a constant internal environment via negative feedback.' },
      { term: 'Insulin', definition: 'Pancreatic hormone stimulating liver/muscle uptake of glucose to store as glycogen.' },
      { term: 'Vasodilation', definition: 'Widening of skin arterioles to increase blood flow near the surface and lose heat.' },
      { term: 'Auxin', definition: 'Plant hormone accumulating on the shaded side of shoots to stimulate faster cell elongation.' },
    ],
    checklistPoints: [
      'Compare nervous and hormonal control and list 4 physiological effects of adrenaline',
      'Explain negative feedback for blood glucose (insulin/glucagon) and temperature (vasodilation/vasoconstriction)',
      'Explain phototropism and gravitropism in shoots via uneven auxin distribution and cell elongation',
    ],
  },

  'igbio-8-1': {
    subtopicId: 'igbio-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Mitosis, Meiosis & Reproduction',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Meiosis',
    youtubeId: 'nRAwve3OVp4',
    videoChannel: 'Cognito',
    videoDuration: '5:33',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Mitosis vs Meiosis (Diploid vs Haploid)', cardId: 'igbio-8-1-c1' },
      { time: '1:55', seconds: 115, label: 'Sexual Reproduction in Plants (Pollination & Germination)', cardId: 'igbio-8-1-c2' },
      { time: '3:45', seconds: 225, label: 'Human Reproduction, Placenta & Menstrual Hormones', cardId: 'igbio-8-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-8-1-c1',
        title: 'Mitosis vs Meiosis & Stem Cells',
        summary: 'Mitosis makes 2 genetically identical diploid cells for growth/repair; meiosis makes 4 genetically different haploid gametes.',
        bullets: [
          '**Mitosis** - nuclear division giving **2 genetically identical diploid** cells (46 chromosomes in humans); used for **growth, tissue repair, replacement, and asexual reproduction**.',
          '**Meiosis (reduction division)** - halves chromosome number from **diploid (2n) to haploid (n = 23)**, producing **4 genetically different gametes** (creating genetic variation).',
        ],
        subsections: [
          {
            heading: 'Asexual vs Sexual Reproduction',
            bullets: [
              '**Asexual** - 1 parent, fast, no mate needed, genetically identical offspring (clones) — vulnerable if disease/environment changes.',
              '**Sexual** - fusion of two haploid gamete nuclei forming a diploid **zygote** → genetic variation enabling adaptation/evolution.',
            ],
            exampleHeading: 'Concrete check: Stem cells',
            examples: [
              'Unspecialised cells able to divide by mitosis and differentiate into specialised cells.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'haploid', definition: 'A nucleus containing a single set of unpaired chromosomes (n = 23 in human gametes).' },
          { term: 'meiosis', definition: 'Reduction division halving chromosome number from diploid to haploid to produce genetically varied gametes.' },
        ],
        diagram: 'mitosis-cycle',
      },
      {
        id: 'igbio-8-1-c2',
        title: 'Plant Pollination, Fertilisation & Germination',
        summary: 'Compare insect- vs wind-pollinated flowers and recall the 3 conditions for seed germination (WOW: Water, Oxygen, Warmth).',
        bullets: [
          '**Insect-pollinated flowers** - large colourful petals, scent/nectar, sticky spiky pollen, anthers/stigma inside flower.',
          '**Wind-pollinated flowers** - dull small petals, no nectar, huge amounts of smooth lightweight pollen, **dangling anthers** and **feathery stigmas** outside flower.',
          '**Germination needs WOW** - **Water** (activates enzymes), **Oxygen** (aerobic respiration), **Warmth** (suitable temperature for enzymes) — light is NOT required until shoots emerge!',
        ],
        subsections: [
          {
            heading: 'Pollination vs Fertilisation',
            bullets: [
              '**Pollination** - transfer of pollen grains from anther to stigma; **Fertilisation** - pollen tube grows down style into ovule where male nucleus fuses with female ovule nucleus.',
            ],
            exampleHeading: 'Concrete check: Fruit vs Seed',
            examples: [
              'After fertilisation, the OVULE becomes the seed and the OVARY becomes the fruit.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pollination', definition: 'The transfer of pollen grains from an anther to a stigma.' },
        ],
      },
      {
        id: 'igbio-8-1-c3',
        title: 'Human Reproduction, Placenta & Menstrual Hormones',
        summary: 'The placenta exchanges nutrients, O₂, and waste without mixing maternal and fetal blood; FSH, LH, oestrogen, and progesterone regulate the menstrual cycle.',
        bullets: [
          '**Placenta & umbilical cord** - exchanges **O₂, glucose, amino acids, antibodies** from mother to fetus and removes **CO₂ and urea** (also blocks most bacteria, though some viruses like HIV and nicotine/alcohol can cross).',
          '**Four menstrual hormones** - **FSH** matures an egg follicle; **Oestrogen** thickens uterus lining & inhibits FSH; **LH** triggers **ovulation** (day 14); **Progesterone** maintains uterus lining during pregnancy.',
        ],
        subsections: [
          {
            heading: 'Amniotic Fluid & HIV',
            bullets: [
              '**Amniotic sac & fluid** - cushions fetus against mechanical shock and maintains stable temperature.',
            ],
            exampleHeading: 'Concrete check: What happens if progesterone drops',
            examples: [
              'If fertilisation does not occur, the corpus luteum breaks down, progesterone falls, and the uterus lining sheds (menstruation).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'placenta', definition: 'Organ connecting fetus to uterine wall for exchange of dissolved nutrients, oxygen, antibodies, and waste products.' },
        ],
        memoryAid: 'Germination = WOW (Water, Oxygen, Warmth — NO light needed); Mitosis = Identical Two; Meiosis = Gametes (Half)!',
        commonMistake: 'NEVER state that maternal blood mixes directly with fetal blood in the placenta — nutrients and gases cross by DIFFUSION across thin membranes without mixing!',
      },
    ],
    keyTerms: [
      { term: 'Mitosis', definition: 'Division producing two genetically identical diploid cells for growth and repair.' },
      { term: 'Meiosis', definition: 'Reduction division producing four genetically varied haploid gametes.' },
      { term: 'Placenta', definition: 'Exchange organ supplying fetal O₂/nutrients and removing CO₂/urea without mixing blood.' },
      { term: 'Progesterone', definition: 'Hormone maintaining the thickened uterine lining during the menstrual cycle and pregnancy.' },
    ],
    checklistPoints: [
      'Contrast mitosis (2 identical diploid) and meiosis (4 varied haploid gametes)',
      'Compare insect- vs wind-pollinated flowers and state the 3 germination conditions (WOW)',
      'Explain roles of the placenta, amniotic fluid, and FSH/LH/oestrogen/progesterone in the menstrual cycle',
    ],
  },

  'igbio-8-2': {
    subtopicId: 'igbio-8-2',
    subtopicCode: '8.2',
    subtopicTitle: 'DNA, Protein Synthesis & Genetic Inheritance',
    readingMinutes: 11,
    videoTitle: 'GCSE Biology - Genetic Diagrams | Punnett Squares',
    youtubeId: 'BtPo9F-nkho',
    videoChannel: 'Cognito',
    videoDuration: '7:24',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'DNA, Genes & Protein Synthesis (mRNA & Ribosomes)', cardId: 'igbio-8-2-c1' },
      { time: '2:30', seconds: 150, label: 'Monohybrid Punnett Squares & Test Crosses', cardId: 'igbio-8-2-c2' },
      { time: '5:00', seconds: 300, label: 'Codominance (ABO Blood Groups) & Sex-Linked Inheritance', cardId: 'igbio-8-2-c3' },
    ],
    cards: [
      {
        id: 'igbio-8-2-c1',
        title: 'Genes, Alleles & Protein Synthesis',
        summary: 'A gene’s DNA base sequence is copied into mRNA in the nucleus, which travels to ribosomes to assemble a specific sequence of amino acids.',
        bullets: [
          '**Protein synthesis steps** - (1) Gene in nuclear **DNA** is copied into a single-stranded **mRNA** molecule; (2) mRNA leaves the nucleus into the cytoplasm and attaches to a **ribosome**; (3) Ribosome reads the base sequence and assembles **amino acids** in the exact order to fold into a specific **protein**.',
        ],
        subsections: [
          {
            heading: 'Core Genetic Definitions',
            bullets: [
              '**Gene** - length of DNA coding for a protein; **Allele** - alternative form of a gene.',
              '**Genotype vs Phenotype** - **genotype** = genetic makeup (e.g. Bb); **phenotype** = observable features resulting from genotype + environment.',
            ],
            exampleHeading: 'Concrete check: Why all body cells look different despite identical DNA',
            examples: [
              'Every cell holds the same genome, but specialised cells only EXPRESS (switch on) the specific genes needed for their function.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'allele', definition: 'An alternative version of a gene occupying the same position on a chromosome.' },
          { term: 'mRNA', definition: 'Messenger RNA — single-stranded copy of a gene carrying genetic instructions from nuclear DNA to cytoplasmic ribosomes.' },
        ],
      },
      {
        id: 'igbio-8-2-c2',
        title: 'Monohybrid Crosses, Ratios & Test Crosses',
        summary: 'Crossing two heterozygotes (Bb × Bb) yields a 3:1 dominant:recessive phenotype ratio; test crosses use a homozygous recessive partner.',
        bullets: [
          '**Classic ratios** - **Bb × Bb** → 1 BB : 2 Bb : 1 bb (**3 : 1** phenotype ratio); **Bb × bb** → **1 : 1** phenotype ratio.',
          '**Test cross** - cross an unknown dominant-phenotype organism (BB or Bb) with a **homozygous recessive (bb)** individual; if ANY recessive offspring appear, the parent must be heterozygous (Bb).',
        ],
        subsections: [
          {
            heading: 'Sex Determination in Humans',
            bullets: [
              '**XX vs XY** - females have XX (eggs always carry X); males have XY (50% sperm carry X, 50% carry Y) → always a **50% (1:1)** probability of a boy or girl at every birth.',
            ],
            exampleHeading: 'Worked Punnett square: Bb × Bb',
            examples: [
              'Gametes: B, b × B, b → Offspring: BB, Bb, Bb, bb → 75% dominant phenotype, 25% recessive phenotype.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'heterozygous', definition: 'Having two different alleles for a particular gene (e.g. Bb).' },
        ],
      },
      {
        id: 'igbio-8-2-c3',
        title: 'Codominance (ABO Blood Groups) & Sex-Linked Traits',
        summary: 'Both codominant alleles express in heterozygotes (IᴬIᴮ = blood group AB); X-linked recessive traits like colour blindness affect males far more often.',
        bullets: [
          '**ABO Blood Groups** - **Iᴬ** and **Iᴮ** are **codominant**, and both are dominant over recessive **I⁰**: Group A (IᴬIᴬ or IᴬI⁰), Group B (IᴮIᴮ or IᴮI⁰), Group AB (**IᴬIᴮ**), Group O (**I⁰I⁰**).',
          '**Sex-linked characteristics** - genes carried on the **X chromosome** (e.g. red-green colour blindness, Xᵇ). Males (XᵇY) need only ONE recessive allele to show the trait because the shorter Y chromosome has no matching allele; females need TWO (XᵇXᵇ) — XᴮXᵇ females are unaffected **carriers**.',
        ],
        subsections: [
          {
            heading: 'Worked Sex-Linked Cross',
            bullets: [
              '**Carrier mother (XᴮXᵇ) × Unaffected father (XᴮY)** - offspring: XᴮXᴮ (unaffected girl), XᴮXᵇ (carrier girl), XᴮY (unaffected boy), XᵇY (**colour-blind boy** → 25% overall, 50% of sons).',
            ],
            exampleHeading: 'Worked ABO cross: IᴬI⁰ × IᴮI⁰',
            examples: [
              'Can produce ALL FOUR blood groups: IᴬIᴮ (AB), IᴬI⁰ (A), IᴮI⁰ (B), and I⁰I⁰ (O) in a 1:1:1:1 ratio!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'codominance', definition: 'Situation in which both alleles in a heterozygote are fully expressed in the phenotype (e.g. IᴬIᴮ giving blood group AB).' },
        ],
        memoryAid: 'In genetic diagrams ALWAYS label: Parent Phenotypes → Parent Genotypes → Gametes (circled) → Punnett Square → Offspring Phenotype Ratio!',
        commonMistake: 'In ABO genetics NEVER write AB × O — ALWAYS write official superscript alleles Iᴬ, Iᴮ, and I⁰!',
      },
    ],
    keyTerms: [
      { term: 'Allele', definition: 'Alternative form of a gene.' },
      { term: 'Heterozygous', definition: 'Having two different alleles for a gene (e.g. Bb).' },
      { term: 'Codominance', definition: 'Both alleles fully expressed in heterozygote phenotype (e.g. IᴬIᴮ = AB blood).' },
      { term: 'Sex-linked characteristic', definition: 'Trait controlled by a gene located on a sex chromosome (usually X).' },
    ],
    checklistPoints: [
      'Outline protein synthesis from nuclear DNA → mRNA → ribosome → specific amino acid sequence',
      'Draw full labelled monohybrid, test-cross, and XX/XY genetic diagrams',
      'Solve ABO codominance (Iᴬ, Iᴮ, I⁰) and X-linked recessive inheritance problems',
    ],
  },

  'igbio-9-1': {
    subtopicId: 'igbio-9-1',
    subtopicCode: '9.1',
    subtopicTitle: 'Variation, Natural Selection & Genetic Modification',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Variation and Evolution',
    youtubeId: '4PtOgToaKP8',
    videoChannel: 'Cognito',
    videoDuration: '5:47',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Continuous vs Discontinuous Variation & Mutation', cardId: 'igbio-9-1-c1' },
      { time: '1:55', seconds: 115, label: 'Natural Selection, Antibiotic Resistance & Selective Breeding', cardId: 'igbio-9-1-c2' },
      { time: '3:50', seconds: 230, label: 'Biotechnology, Fermenters & Genetic Modification', cardId: 'igbio-9-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-9-1-c1',
        title: 'Variation, Mutation & Adaptive Features',
        summary: 'Discontinuous variation is purely genetic (distinct categories); continuous variation involves genes + environment (bell curve); mutation creates new alleles.',
        bullets: [
          '**Continuous variation** - full range of values with no distinct categories (height, body mass), controlled by **genes AND environment**.',
          '**Discontinuous variation** - limited distinct categories with no intermediates (ABO blood group, seed shape), controlled by **genes ONLY**.',
          '**Mutation** - a spontaneous **genetic change** (change in DNA base sequence) — the ONLY way completely **new alleles** arise (rate increased by ionising radiation and chemical mutagens).',
        ],
        subsections: [
          {
            heading: 'Xerophytes & Hydrophytes',
            bullets: [
              '**Xerophytes (desert cacti)** - thick waxy cuticle, sunken stomata, spines instead of leaves (tiny surface area), extensive roots to minimise transpiration.',
              '**Hydrophytes (water lilies)** - large air spaces for buoyancy, stomata on **upper leaf surface**, thin cuticle.',
            ],
            exampleHeading: 'Concrete check: Plotting variation graphs',
            examples: [
              'Continuous data → histogram (touching bars, bell curve); Discontinuous data → bar chart with gaps.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mutation', definition: 'A spontaneous change in the base sequence of DNA that can form a new allele.' },
        ],
      },
      {
        id: 'igbio-9-1-c2',
        title: 'Natural Selection, Antibiotic Resistance & Selective Breeding',
        summary: 'Better-adapted variants survive, reproduce, and pass advantageous alleles to offspring, raising allele frequency across generations.',
        bullets: [
          '**Five-step natural selection template** - (1) **Genetic variation** exists in population (from random **mutation**); (2) **Selection pressure / competition** (e.g. antibiotic or predator); (3) Better-adapted individuals **survive**; (4) Survivors **reproduce**; (5) Pass advantageous **alleles** to offspring, increasing allele frequency over generations.',
        ],
        subsections: [
          {
            heading: 'Natural Selection vs Selective Breeding (Artificial Selection)',
            bullets: [
              '**Selective breeding** - **humans** choose parents with desirable traits (e.g. high-milk cows, disease-resistant wheat), breed them together, select the best offspring, and repeat over many generations (faster, but reduces genetic diversity).',
            ],
            exampleHeading: 'Exam trap: Antibiotic resistance wording',
            examples: [
              'Antibiotics do NOT "cause" the mutation — the resistant allele ALREADY existed by random mutation; the antibiotic kills non-resistant bacteria so resistant ones survive and multiply!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'natural selection', definition: 'Process by which organisms better adapted to their environment are more likely to survive, reproduce, and pass advantageous alleles to offspring.' },
        ],
        commonMistake: 'NEVER write that bacteria "become immune" or "mutate on purpose to beat antibiotics" — mutations are RANDOM, and natural selection favours pre-existing resistant variants!',
      },
      {
        id: 'igbio-9-1-c3',
        title: 'Genetic Modification (GM) & Industrial Biotechnology',
        summary: 'Restriction enzymes cut human insulin DNA and bacterial plasmids with complementary sticky ends; DNA ligase joins recombinant plasmids.',
        bullets: [
          '**Inserting the human insulin gene into bacteria** - (1) Cut human insulin gene from human DNA using a **restriction enzyme** leaving **sticky ends**; (2) Cut bacterial **plasmid** with the **SAME restriction enzyme** giving complementary sticky ends; (3) Join gene into plasmid using **DNA ligase** to form a **recombinant plasmid**; (4) Insert into bacteria and grow in a **fermenter** to mass-produce pure human insulin.',
        ],
        subsections: [
          {
            heading: 'Why Bacteria Are Ideal & Other Biotech Uses',
            bullets: [
              '**Why bacteria?** - rapid reproduction rate, ability to make complex proteins using the universal genetic code, presence of plasmids, and few ethical objections.',
              '**Other biotech** - **pectinase** clears fruit juice; biological washing powders use **lipases/proteases**; **lactase** makes lactose-free milk; **GM crops** resist herbicides/pests or add vitamins (Golden Rice).',
            ],
            exampleHeading: 'Concrete check: Fermenter cooling jacket',
            examples: [
              'Respiring bacteria release heat — a water cooling jacket prevents temperature rising above optimum and denaturing enzymes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'restriction enzyme', definition: 'Enzyme that cuts DNA at specific base sequences, often leaving exposed complementary sticky ends.' },
          { term: 'DNA ligase', definition: 'Enzyme that joins complementary sticky ends of a target gene and a cut plasmid to form recombinant DNA.' },
        ],
        memoryAid: 'GM Scissors & Glue: SAME Restriction Enzyme cuts sticky ends → DNA Ligase glues into plasmid → Fermenter!',
      },
    ],
    keyTerms: [
      { term: 'Mutation', definition: 'Spontaneous change in DNA base sequence creating new alleles.' },
      { term: 'Natural selection', definition: 'Survival and reproduction of better-adapted individuals passing advantageous alleles on.' },
      { term: 'Restriction enzyme', definition: 'Molecular scissors cutting DNA at specific sequences to produce sticky ends.' },
      { term: 'DNA ligase', definition: 'Enzyme sealing the inserted gene into a cut bacterial plasmid.' },
    ],
    checklistPoints: [
      'Distinguish continuous (genes + environment) and discontinuous (genes only) variation',
      'Apply the 5-step natural selection template to MRSA antibiotic resistance and contrast with selective breeding',
      'Describe all 4 steps of GM human insulin production using restriction enzymes, sticky ends, plasmids, and DNA ligase',
    ],
  },

  'igbio-10-1': {
    subtopicId: 'igbio-10-1',
    subtopicCode: '10.1',
    subtopicTitle: 'Food Webs, Carbon & Nitrogen Cycles & Conservation',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Carbon Cycle & Water Cycle',
    youtubeId: 'wSNSGcOqb38',
    videoChannel: 'Cognito',
    videoDuration: '5:18',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Biology (0610)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Energy Flow, Trophic Levels & Ecological Pyramids', cardId: 'igbio-10-1-c1' },
      { time: '1:45', seconds: 105, label: 'The Carbon Cycle & The Nitrogen Cycle', cardId: 'igbio-10-1-c2' },
      { time: '3:35', seconds: 215, label: 'Eutrophication, Deforestation & Conservation', cardId: 'igbio-10-1-c3' },
    ],
    cards: [
      {
        id: 'igbio-10-1-c1',
        title: 'Energy Flow, Trophic Levels & Pyramids of Biomass/Energy',
        summary: 'About 90% of energy is lost at every trophic transfer, which limits food chains to 4–5 levels and always makes pyramids of energy pyramid-shaped.',
        bullets: [
          '**Why food chains rarely exceed 5 trophic levels** - roughly **90% of energy is lost** at each step via **respiration (heat)**, movement, **uneaten parts** (bones/roots), and **faeces/urine**, leaving too little energy to support higher predators.',
        ],
        subsections: [
          {
            heading: 'Pyramids of Numbers vs Biomass vs Energy',
            bullets: [
              '**Pyramid of numbers** - can be inverted (e.g. 1 oak tree feeding 1,000 caterpillars).',
              '**Pyramid of energy / biomass** - shows actual energy or dry mass at each trophic level (pyramids of energy are ALWAYS strictly upright!).',
            ],
            exampleHeading: 'Worked efficiency calculation',
            examples: [
              'Grass captures 20,000 kJ; rabbits gain 1,800 kJ → Transfer efficiency = (1,800 / 20,000) × 100% = 9%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'trophic level', definition: 'The feeding position of an organism in a food chain, food web, or ecological pyramid.' },
        ],
      },
      {
        id: 'igbio-10-1-c2',
        title: 'The Carbon Cycle & The Nitrogen Cycle',
        summary: 'Photosynthesis is the sole biological process removing CO₂ from air; specialised soil bacteria drive nitrogen fixation, nitrification, and denitrification.',
        bullets: [
          '**Carbon cycle** - **Photosynthesis** removes atmospheric CO₂; **respiration** (plants, animals, decomposers) and **combustion** of fossil fuels return CO₂ to the air.',
          '**Nitrogen cycle bacteria** - **Nitrogen-fixing bacteria** (in soil / legume root nodules) convert N₂ gas → ammonium/nitrates; **Decomposers** turn dead proteins/urea → ammonium ions; **Nitrifying bacteria** oxidise ammonium → **nitrates (NO₃⁻)** for plant absorption; **Denitrifying bacteria** (in waterlogged anaerobic soil) convert nitrates back to N₂ gas.',
        ],
        subsections: [
          {
            heading: 'Ploughing & Aerating Soil',
            bullets: [
              '**Why farmers aerate soil** - oxygen favours aerobic nitrifying bacteria and suppresses anaerobic denitrifying bacteria, keeping nitrate levels high.',
            ],
            exampleHeading: 'Concrete check: Role of lightning',
            examples: [
              'Lightning provides high energy to combine atmospheric N₂ and O₂ directly into nitrogen oxides that dissolve into soil nitrates.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'nitrification', definition: 'Conversion of ammonium ions into nitrate ions by aerobic nitrifying bacteria in soil.' },
          { term: 'denitrification', definition: 'Conversion of soil nitrate ions back into atmospheric nitrogen gas by anaerobic denitrifying bacteria.' },
        ],
      },
      {
        id: 'igbio-10-1-c3',
        title: 'Eutrophication, Deforestation & Sustainable Conservation',
        summary: 'Nitrate runoff triggers algal blooms, light blockage, bacterial decomposition, oxygen depletion, and death of aquatic animals.',
        bullets: [
          '**Six-step Eutrophication cascade** - (1) Excess **nitrate fertiliser / sewage** leaches into water; (2) Rapid **algal bloom** on surface; (3) Algae **block sunlight** from reaching submerged plants; (4) Submerged plants **die** (cannot photosynthesise); (5) Aerobic **decomposer bacteria** multiply rapidly feeding on dead plants and use up **dissolved oxygen** in **respiration**; (6) Fish and aquatic animals **die** from lack of oxygen.',
        ],
        subsections: [
          {
            heading: 'Deforestation & Conservation',
            bullets: [
              '**Deforestation harms** - habitat loss/extinction, soil erosion & flooding, and rising atmospheric CO₂ (fewer trees photosynthesising + burning releases CO₂).',
              '**Conservation methods** - sustainable forestry (replanting), fishing quotas & minimum mesh sizes, protected reserves, captive breeding programmes, and **seed banks**.',
            ],
            exampleHeading: 'Exam wording check on eutrophication',
            examples: [
              'Always explicitly state it is the AEROBIC DECOMPOSER BACTERIA respiring that deplete dissolved oxygen — NOT the living algae!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'eutrophication', definition: 'Nutrient enrichment of water causing algal blooms, death of aquatic plants, bacterial oxygen depletion, and suffocation of aquatic life.' },
        ],
        memoryAid: 'Eutrophication chain: Nitrates → Algal Bloom → Blocks Light → Plants Die → Bacteria Respire → O₂ Gone → Fish Die!',
        commonMistake: 'In eutrophication answers, NEVER say "algae use up all the oxygen" — algae block light, submerged plants die, and DECOMPOSER BACTERIA use up dissolved oxygen via aerobic respiration!',
      },
    ],
    keyTerms: [
      { term: 'Trophic level', definition: 'Feeding position of an organism in a food chain or ecological pyramid.' },
      { term: 'Nitrification', definition: 'Bacterial oxidation of ammonium ions into nitrates absorbed by plant roots.' },
      { term: 'Denitrification', definition: 'Anaerobic bacterial conversion of soil nitrates back into atmospheric N₂ gas.' },
      { term: 'Eutrophication', definition: 'Nutrient-driven algal bloom and subsequent bacterial deoxygenation of water.' },
    ],
    checklistPoints: [
      'Explain why energy losses (~90% per transfer) restrict food chain length and calculate % efficiency',
      'Trace both the Carbon Cycle and all 4 bacterial roles in the Nitrogen Cycle',
      'Explain the full 6-step eutrophication sequence and sustainable conservation strategies',
    ],
  },
};

export const IGCSE_BIOLOGY_QUIZZES: QuizQuestion[] = [
  // 1.1
  { id: 'igbio-q-1-1-1', subtopicId: 'igbio-1-1', type: 'mcq', marks: 1, prompt: 'Which process is an example of EXCRETION (rather than egestion)?', options: ['Passing undigested fibre out as faeces', 'Removing urea in urine and CO₂ via the lungs', 'Swallowing food', 'Absorbing glucose into blood'], correctIndex: 1, explanation: 'Urea and CO₂ are metabolic waste products made inside cells; faeces is undigested food (egestion).' },
  { id: 'igbio-q-1-1-2', subtopicId: 'igbio-1-1', type: 'short-answer', marks: 2, prompt: 'Define respiration and growth as characteristics of living organisms.', rubric: { maxMarks: 2, modelAnswer: 'Respiration is the chemical reactions in cells that break down nutrient molecules to release energy. Growth is a permanent increase in size and dry mass by an increase in cell number or cell size.', markPoints: [{ id: 'mp1', markDescription: 'Respiration: chemical reactions in cells releasing energy', requiredKeywordGroups: [['release'], ['energy'], ['cell', 'nutrient', 'glucose']] }, { id: 'mp2', markDescription: 'Growth: permanent increase in size and dry mass', requiredKeywordGroups: [['permanent'], ['dry mass', 'size', 'cell number']] }] }, explanation: 'Use exact Cambridge 0610 wording: "releases energy" and "permanent increase in dry mass".' },
  { id: 'igbio-q-1-1-3', subtopicId: 'igbio-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the MRS GREN definitions:', segments: ['Detecting and responding to stimuli is ', ', and passing undigested faeces is called ', '.'], wordBank: ['sensitivity', 'egestion', 'excretion', 'nutrition'], answers: ['sensitivity', 'egestion'], explanation: 'Sensitivity detects stimuli; faeces removal is egestion.' },
  { id: 'igbio-q-1-1-4', subtopicId: 'igbio-1-1', type: 'mcq', marks: 1, prompt: 'Why is measuring DRY MASS a better measure of plant growth than fresh mass?', options: ['Water content fluctuates daily and is not permanent growth', 'Dry mass is always heavier', 'Fresh mass excludes cellulose', 'Plants contain no water'], correctIndex: 0, explanation: 'Water uptake varies rapidly without representing permanent biomass gain.' },
  { id: 'igbio-q-1-1-5', subtopicId: 'igbio-1-1', type: 'matching', marks: 2, prompt: 'Match each life process to its example:', pairs: [{ left: 'Sensitivity', right: 'Shoot bending towards sunlight' }, { left: 'Excretion', right: 'Kidneys filtering urea from blood' }, { left: 'Respiration', right: 'Mitochondria releasing energy from glucose' }, { left: 'Nutrition', right: 'Leaf making glucose by photosynthesis' }], explanation: 'Each example maps directly to one MRS GREN process.' },

  // 1.2
  { id: 'igbio-q-1-2-1', subtopicId: 'igbio-1-2', type: 'diagram-label', marks: 2, prompt: 'Identify the features of a bacterial cell:', diagram: 'bacterial-cell', labels: [{ marker: 'Genetic material without a nucleus', options: ['Circular chromosome of DNA + plasmids', 'Linear chromosomes in nucleus', 'Chloroplasts'], answer: 'Circular chromosome of DNA + plasmids' }, { marker: 'Kingdom', options: ['Prokaryote', 'Fungi', 'Protoctist'], answer: 'Prokaryote' }], explanation: 'Bacteria are prokaryotes with a loose circular DNA chromosome and small plasmid rings.' },
  { id: 'igbio-q-1-2-2', subtopicId: 'igbio-1-2', type: 'short-answer', marks: 2, prompt: 'Explain why viruses are NOT classified as living organisms, yet are still classed as pathogens.', rubric: { maxMarks: 2, modelAnswer: 'Viruses have no cellular structure (only a protein coat and DNA or RNA) and cannot reproduce on their own outside a living host cell, but they still cause disease so they count as pathogens.', markPoints: [{ id: 'mp1', markDescription: 'No cellular structure / cannot reproduce outside host', requiredKeywordGroups: [['host', 'no cell', 'protein coat', 'cannot reproduce']] }, { id: 'mp2', markDescription: 'Still cause disease (pathogen)', requiredKeywordGroups: [['disease', 'pathogen']] }] }, explanation: 'Viruses are non-cellular parasitic particles that cause disease.' },
  { id: 'igbio-q-1-2-3', subtopicId: 'igbio-1-2', type: 'mcq', marks: 1, prompt: 'What material makes up the cell wall of FUNGI?', options: ['Cellulose', 'Chitin', 'Glycogen', 'Starch'], correctIndex: 1, explanation: 'Fungi have chitin cell walls; plants have cellulose cell walls.' },
  { id: 'igbio-q-1-2-4', subtopicId: 'igbio-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the flowering plant comparison:', segments: ['Monocotyledons have ', ' leaf veins, whereas ', ' have branching network veins and petals in 4s or 5s.'], wordBank: ['parallel', 'dicotyledons', 'ferns', 'chitin'], answers: ['parallel', 'dicotyledons'], explanation: 'Parallel veins = monocots; branching veins = dicots.' },
  { id: 'igbio-q-1-2-5', subtopicId: 'igbio-1-2', type: 'matching', marks: 2, prompt: 'Match each arthropod class to its defining feature:', pairs: [{ left: 'Insects', right: '3 pairs of legs (6) & 3 body parts' }, { left: 'Arachnids', right: '4 pairs of legs (8) & no antennae' }, { left: 'Crustaceans', right: '5+ pairs of legs & 2 pairs antennae' }, { left: 'Myriapods', right: 'Many identical segments with legs' }], explanation: 'Standard Cambridge 0610 arthropod classification.' },

  // 1.3
  { id: 'igbio-q-1-3-1', subtopicId: 'igbio-1-3', type: 'mcq', marks: 1, prompt: 'Which scientific name is formatted CORRECTLY according to the binomial system?', options: ['homo Sapiens', 'Homo Sapiens', 'Homo sapiens', 'HOMO sapiens'], correctIndex: 2, explanation: 'Capitalised Genus + lowercase species: Homo sapiens.' },
  { id: 'igbio-q-1-3-2', subtopicId: 'igbio-1-3', type: 'short-answer', marks: 2, prompt: 'Define a species and explain why a horse and a donkey belong to DIFFERENT species even though they can mate to produce a mule.', rubric: { maxMarks: 2, modelAnswer: 'A species is a group of organisms that can reproduce to produce fertile offspring. Mules are infertile (sterile), proving horses and donkeys are different species.', markPoints: [{ id: 'mp1', markDescription: 'Reproduce to produce fertile offspring', requiredKeywordGroups: [['fertile'], ['offspring']] }, { id: 'mp2', markDescription: 'Mule is infertile/sterile', requiredKeywordGroups: [['infertile', 'sterile', 'cannot reproduce']] }] }, explanation: 'Fertility of offspring is the defining test of a single species.' },
  { id: 'igbio-q-1-3-3', subtopicId: 'igbio-1-3', type: 'fill-blank', marks: 2, prompt: 'Complete the modern classification rule:', segments: ['Organisms sharing a more recent common ancestor have more similar ', ' base sequences, and a ', ' key uses pairs of contrasting features.'], wordBank: ['DNA', 'dichotomous', 'starch', 'random'], answers: ['DNA', 'dichotomous'], explanation: 'DNA sequence similarity reflects evolutionary closeness.' },
  { id: 'igbio-q-1-3-4', subtopicId: 'igbio-1-3', type: 'mcq', marks: 1, prompt: 'Which two organisms are MOST closely related: Panthera leo, Panthera tigris, or Felis catus?', options: ['Panthera leo and Felis catus', 'Panthera leo and Panthera tigris', 'Panthera tigris and Felis catus', 'All equally related'], correctIndex: 1, explanation: 'They share the exact same Genus (Panthera).' },
  { id: 'igbio-q-1-3-5', subtopicId: 'igbio-1-3', type: 'mcq', marks: 1, prompt: 'Which taxonomic rank comes immediately BELOW Family?', options: ['Order', 'Class', 'Genus', 'Phylum'], correctIndex: 2, explanation: 'Kingdom → Phylum → Class → Order → Family → Genus → Species.' },

  // 1.4
  { id: 'igbio-q-1-4-1', subtopicId: 'igbio-1-4', type: 'short-answer', marks: 2, prompt: 'A drawing of a mitochondrion measures 24 mm long. Its actual length is 4 μm. Calculate the magnification of the drawing.', rubric: { maxMarks: 2, modelAnswer: 'Convert 24 mm = 24,000 μm; Magnification = 24,000 ÷ 4 = ×6,000.', markPoints: [{ id: 'mp1', markDescription: 'Converts 24 mm to 24,000 μm', requiredKeywordGroups: [['24000', '24,000', '1000']] }, { id: 'mp2', markDescription: 'Magnification 6000', numericMatch: { value: 6000, tolerance: 5 } }] }, explanation: '24 × 1,000 = 24,000 μm; 24,000 ÷ 4 = ×6,000.' },
  { id: 'igbio-q-1-4-2', subtopicId: 'igbio-1-4', type: 'diagram-label', marks: 2, prompt: 'Compare the adaptations of root hair and palisade mesophyll cells:', diagram: 'root-hair-vs-palisade', labels: [{ marker: 'Root hair cell', options: ['Long hair projection for large SA; no chloroplasts', 'Packed with chloroplasts', 'Biconcave disc with haemoglobin'], answer: 'Long hair projection for large SA; no chloroplasts' }, { marker: 'Palisade mesophyll cell', options: ['Packed with chloroplasts near upper leaf surface', 'No nucleus', 'Beating cilia'], answer: 'Packed with chloroplasts near upper leaf surface' }], explanation: 'Structure matches underground water absorption vs sunlit photosynthesis.' },
  { id: 'igbio-q-1-4-3', subtopicId: 'igbio-1-4', type: 'multi-select', marks: 2, prompt: 'Select TWO structures found in plant palisade cells but NOT in animal cells:', options: ['Cellulose cell wall', 'Permanent vacuole', 'Mitochondria', 'Cell membrane'], selectCount: 2, correctIndices: [0, 1], explanation: 'Cellulose cell wall, chloroplasts, and permanent vacuole are plant-only.' },
  { id: 'igbio-q-1-4-4', subtopicId: 'igbio-1-4', type: 'fill-blank', marks: 2, prompt: 'Complete the organelle functions:', segments: ['Aerobic respiration happens in ', ', and proteins are assembled at ', '.'], wordBank: ['mitochondria', 'ribosomes', 'vacuoles', 'cilia'], answers: ['mitochondria', 'ribosomes'], explanation: 'Mitochondria = aerobic respiration; ribosomes = protein synthesis.' },
  { id: 'igbio-q-1-4-5', subtopicId: 'igbio-1-4', type: 'mcq', marks: 1, prompt: 'How is a red blood cell adapted to carry maximum oxygen?', options: ['Thick cellulose wall', 'Biconcave shape and no nucleus to pack more haemoglobin', 'Packed with chloroplasts', 'Long axon'], correctIndex: 1, explanation: 'Large SA:V and absent nucleus maximise haemoglobin capacity.' },

  // 2.1
  { id: 'igbio-q-2-1-1', subtopicId: 'igbio-2-1', type: 'diagram-label', marks: 2, prompt: 'Identify the osmosis process across a membrane:', diagram: 'osmosis-membrane', labels: [{ marker: 'Direction of net water flow', options: ['Higher to lower water potential', 'Lower to higher water potential', 'Requires ATP'], answer: 'Higher to lower water potential' }, { marker: 'Membrane type required', options: ['Partially permeable membrane', 'Impermeable cell wall', 'Lignin tube'], answer: 'Partially permeable membrane' }], explanation: 'Osmosis moves water passively down a water potential gradient across a partially permeable membrane.' },
  { id: 'igbio-q-2-1-2', subtopicId: 'igbio-2-1', type: 'short-answer', marks: 2, prompt: 'Explain what happens to a plant cell placed in a very concentrated sugar solution.', rubric: { maxMarks: 2, modelAnswer: 'Water moves out of the cell by osmosis down a water potential gradient through the partially permeable membrane; the cell loses turgor, becomes flaccid, and then plasmolysed (membrane pulls away from cell wall).', markPoints: [{ id: 'mp1', markDescription: 'Water moves out by osmosis down water potential gradient', requiredKeywordGroups: [['water'], ['out', 'leaves'], ['osmosis', 'water potential']] }, { id: 'mp2', markDescription: 'Becomes flaccid / plasmolysed', requiredKeywordGroups: [['flaccid', 'plasmolys']] }] }, explanation: 'Water exits into the lower water potential sugar solution, causing plasmolysis.' },
  { id: 'igbio-q-2-1-3', subtopicId: 'igbio-2-1', type: 'mcq', marks: 1, prompt: 'Why do red blood cells burst in pure distilled water while plant cells do NOT?', options: ['Plant cells have no cell membrane', 'Plant cells have a strong inelastic cellulose cell wall resisting turgor pressure', 'Water cannot enter plant cells', 'Red blood cells use active transport'], correctIndex: 1, explanation: 'The cellulose cell wall exerts inward pressure preventing bursting.' },
  { id: 'igbio-q-2-1-4', subtopicId: 'igbio-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the active transport definition:', segments: ['Active transport moves particles ', ' a concentration gradient using protein carriers and energy from ', '.'], wordBank: ['against', 'respiration', 'down', 'osmosis'], answers: ['against', 'respiration'], explanation: 'Active transport requires ATP from cellular respiration and carrier proteins.' },
  { id: 'igbio-q-2-1-5', subtopicId: 'igbio-2-1', type: 'mcq', marks: 1, prompt: 'Which process is used by root hair cells to absorb mineral ions from dilute soil water?', options: ['Osmosis', 'Active transport', 'Transpiration', 'Evaporation'], correctIndex: 1, explanation: 'Mineral concentration is higher inside the root hair than in soil, requiring active transport.' },

  // 3.1
  { id: 'igbio-q-3-1-1', subtopicId: 'igbio-3-1', type: 'mcq', marks: 1, prompt: 'Which reagent and positive colour change tests for Vitamin C?', options: ['Iodine: brown to blue-black', 'DCPIP: blue to colourless', 'Biuret: blue to purple', 'Benedict’s: blue to brick-red'], correctIndex: 1, explanation: 'Vitamin C decolourises blue DCPIP dye.' },
  { id: 'igbio-q-3-1-2', subtopicId: 'igbio-3-1', type: 'short-answer', marks: 2, prompt: 'A sample of DNA contains 30% Guanine (G). Calculate the percentage of Adenine (A) in the sample.', rubric: { maxMarks: 2, modelAnswer: 'Since G = C, C = 30% (G + C = 60%). The remaining 40% is split equally between A and T, so Adenine = 20%.', markPoints: [{ id: 'mp1', markDescription: 'C = 30% so A + T = 40%', requiredKeywordGroups: [['30', '60', '40']] }, { id: 'mp2', markDescription: 'Adenine = 20%', numericMatch: { value: 20, tolerance: 0.1 } }] }, explanation: 'G=C=30% → A+T=40% → A=20%.' },
  { id: 'igbio-q-3-1-3', subtopicId: 'igbio-3-1', type: 'matching', marks: 2, prompt: 'Match each food test to its positive result:', pairs: [{ left: 'Starch (Iodine)', right: 'Blue-black' }, { left: 'Glucose (Benedict’s + heat)', right: 'Brick-red precipitate' }, { left: 'Protein (Biuret)', right: 'Purple / lilac' }, { left: 'Fats (Ethanol + water)', right: 'Cloudy white emulsion' }], explanation: 'Know every food test cold for Paper 2, 4, and 6.' },
  { id: 'igbio-q-3-1-4', subtopicId: 'igbio-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete the lipid and protein subunits:', segments: ['A fat molecule is made of 1 glycerol and 3 ', ', while proteins are chains of ', '.'], wordBank: ['fatty acids', 'amino acids', 'glucoses', 'nucleotides'], answers: ['fatty acids', 'amino acids'], explanation: 'Lipids = glycerol + 3 fatty acids; proteins = amino acids.' },
  { id: 'igbio-q-3-1-5', subtopicId: 'igbio-3-1', type: 'mcq', marks: 1, prompt: 'Which chemical element is present in ALL proteins but NOT in carbohydrates or fats?', options: ['Carbon', 'Hydrogen', 'Oxygen', 'Nitrogen'], correctIndex: 3, explanation: 'Proteins contain C, H, O, and Nitrogen (N).' },

  // 3.2
  { id: 'igbio-q-3-2-1', subtopicId: 'igbio-3-2', type: 'diagram-label', marks: 2, prompt: 'Label the enzyme mechanism concepts:', diagram: 'enzyme-lock-key', labels: [{ marker: 'Region where substrate binds', options: ['Complementary active site', 'Cell wall', 'Ribosome'], answer: 'Complementary active site' }, { marker: 'Effect of extreme heat (>60 °C)', options: ['Denaturation (active site changes shape)', 'Enzyme freezes', 'Substrate multiplies'], answer: 'Denaturation (active site changes shape)' }], explanation: 'Enzymes bind complementary substrates and denature when active-site shape changes.' },
  { id: 'igbio-q-3-2-2', subtopicId: 'igbio-3-2', type: 'short-answer', marks: 2, prompt: 'Explain why an enzyme stops working above 60 °C (using exact biological terms).', rubric: { maxMarks: 2, modelAnswer: 'High temperature breaks bonds maintaining the protein’s 3D structure so the enzyme is denatured; its active site changes shape and the substrate is no longer complementary and cannot bind.', markPoints: [{ id: 'mp1', markDescription: 'Enzyme denatures / active site changes shape', requiredKeywordGroups: [['denatur'], ['active site'], ['shape']] }, { id: 'mp2', markDescription: 'Substrate no longer complementary / cannot bind', requiredKeywordGroups: [['substrate'], ['fit', 'bind', 'complementary']] }] }, explanation: 'Never say "killed" — always say denatured and active site changes shape.' },
  { id: 'igbio-q-3-2-3', subtopicId: 'igbio-3-2', type: 'mcq', marks: 1, prompt: 'What is the approximate optimum pH of the stomach protease enzyme PEPSIN?', options: ['pH 2', 'pH 7', 'pH 8.5', 'pH 11'], correctIndex: 0, explanation: 'Stomach HCl maintains acidic pH ~2 optimal for pepsin.' },
  { id: 'igbio-q-3-2-4', subtopicId: 'igbio-3-2', type: 'fill-blank', marks: 2, prompt: 'Complete the enzyme-temperature explanation:', segments: ['Rising temperature up to optimum increases ', ' energy so more ', ' complexes form per second.'], wordBank: ['kinetic', 'enzyme–substrate', 'light', 'denatured'], answers: ['kinetic', 'enzyme–substrate'], explanation: 'Higher kinetic energy gives more frequent effective collisions.' },
  { id: 'igbio-q-3-2-5', subtopicId: 'igbio-3-2', type: 'mcq', marks: 1, prompt: 'What happens to an enzyme cooled to 2 °C and then warmed back to 37 °C?', options: ['Permanently denatured', 'Temporarily slow at 2 °C, then regains full activity at 37 °C', 'Destroyed by ice', 'Turns into starch'], correctIndex: 1, explanation: 'Low temperature slows collisions reversibly without denaturing the active site.' },

  // 4.1
  { id: 'igbio-q-4-1-1', subtopicId: 'igbio-4-1', type: 'diagram-label', marks: 2, prompt: 'Identify the chloroplast photosynthesis inputs and pigment:', diagram: 'photosynthesis-chloroplast', labels: [{ marker: 'Green light-absorbing pigment', options: ['Chlorophyll', 'Haemoglobin', 'Melanin'], answer: 'Chlorophyll' }, { marker: 'Gas released as a product', options: ['Oxygen (O₂)', 'Nitrogen (N₂)', 'Methane (CH₄)'], answer: 'Oxygen (O₂)' }], explanation: 'Chlorophyll absorbs light to convert CO₂ + H₂O into glucose + O₂.' },
  { id: 'igbio-q-4-1-2', subtopicId: 'igbio-4-1', type: 'short-answer', marks: 2, prompt: 'State the role of magnesium ions (Mg²⁺) and nitrate ions (NO₃⁻) in plants, and one deficiency symptom of magnesium shortage.', rubric: { maxMarks: 2, modelAnswer: 'Magnesium ions are needed to make chlorophyll (shortage causes yellow leaves / chlorosis); nitrate ions are needed to make amino acids for proteins.', markPoints: [{ id: 'mp1', markDescription: 'Mg²⁺ makes chlorophyll / deficiency yellow leaves', requiredKeywordGroups: [['chlorophyll'], ['yellow', 'chlorosis']] }, { id: 'mp2', markDescription: 'NO₃⁻ makes amino acids / proteins', requiredKeywordGroups: [['amino acid', 'protein']] }] }, explanation: 'Mg²⁺ → chlorophyll (yellow leaves if lacking); NO₃⁻ → amino acids (stunted growth).' },
  { id: 'igbio-q-4-1-3', subtopicId: 'igbio-4-1', type: 'mcq', marks: 1, prompt: 'A submerged pondweed in bright sunlight is placed in red hydrogen carbonate indicator. What colour does the indicator turn?', options: ['Yellow', 'Purple', 'Blue-black', 'Brick-red'], correctIndex: 1, explanation: 'Fast photosynthesis absorbs CO₂, lowering dissolved CO₂ and turning the indicator purple.' },
  { id: 'igbio-q-4-1-4', subtopicId: 'igbio-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the balanced photosynthesis equation:', segments: ['6CO₂ + 6H₂O → ', ' + 6', ' (using light energy and chlorophyll).'], wordBank: ['C₆H₁₂O₆', 'O₂', 'CH₄', 'CO'], answers: ['C₆H₁₂O₆', 'O₂'], explanation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.' },
  { id: 'igbio-q-4-1-5', subtopicId: 'igbio-4-1', type: 'mcq', marks: 1, prompt: 'On a photosynthesis vs light-intensity graph, what does the FLAT horizontal plateau indicate?', options: ['Light is still limiting', 'Another factor (CO₂ concentration or temperature) is now limiting', 'Photosynthesis has stopped', 'Chlorophyll has been used up'], correctIndex: 1, explanation: 'Once more light gives no rate increase, CO₂ or temperature limits the rate.' },

  // 4.2
  { id: 'igbio-q-4-2-1', subtopicId: 'igbio-4-2', type: 'mcq', marks: 1, prompt: 'Which two substances are transported in PHLOEM during translocation?', options: ['Water and nitrates', 'Sucrose and amino acids', 'Starch and oxygen', 'Glucose and chlorophyll'], correctIndex: 1, explanation: 'Phloem translocates sucrose and amino acids from sources to sinks.' },
  { id: 'igbio-q-4-2-2', subtopicId: 'igbio-4-2', type: 'short-answer', marks: 2, prompt: 'Explain why high atmospheric HUMIDITY decreases the rate of transpiration from a leaf.', rubric: { maxMarks: 2, modelAnswer: 'High humidity means the air outside already holds lots of water vapour, reducing the water vapour concentration gradient between the leaf air spaces and outside air, so diffusion out of stomata slows down.', markPoints: [{ id: 'mp1', markDescription: 'Smaller water vapour concentration gradient', requiredKeywordGroups: [['gradient'], ['smaller', 'less steep', 'reduced', 'lower']] }, { id: 'mp2', markDescription: 'Slower diffusion out of stomata', requiredKeywordGroups: [['diffusion', 'evaporat'], ['slower', 'decreases', 'less']] }] }, explanation: 'Humid air flattens the water vapour diffusion gradient.' },
  { id: 'igbio-q-4-2-3', subtopicId: 'igbio-4-2', type: 'fill-blank', marks: 2, prompt: 'Complete xylem adaptations:', segments: ['Dead xylem vessels have walls strengthened with waterproof ', ', and water columns stay unbroken due to ', ' between water molecules.'], wordBank: ['lignin', 'cohesion', 'chitin', 'active transport'], answers: ['lignin', 'cohesion'], explanation: 'Lignin supports xylem; cohesion maintains an unbroken transpiration stream.' },
  { id: 'igbio-q-4-2-4', subtopicId: 'igbio-4-2', type: 'multi-select', marks: 2, prompt: 'Select TWO environmental changes that INCREASE the rate of transpiration:', options: ['Higher temperature', 'Higher wind speed', 'Higher humidity', 'Complete darkness'], selectCount: 2, correctIndices: [0, 1], explanation: 'Warmth speeds evaporation/diffusion; wind sweeps humid air away from stomata.' },
  { id: 'igbio-q-4-2-5', subtopicId: 'igbio-4-2', type: 'mcq', marks: 1, prompt: 'In early spring when stored starch in potato tubers feeds new growing shoots, what is the SOURCE and what is the SINK?', options: ['Leaves = source, tuber = sink', 'Tuber = source, growing shoots = sink', 'Both are sinks', 'Xylem = source'], correctIndex: 1, explanation: 'Tubers export sucrose in spring (source) to growing buds/shoots (sinks).' },

  // 5.1
  { id: 'igbio-q-5-1-1', subtopicId: 'igbio-5-1', type: 'mcq', marks: 1, prompt: 'Where is BILE produced, and where is it stored before entering the duodenum?', options: ['Made in gall bladder, stored in liver', 'Made in liver, stored in gall bladder', 'Made in pancreas, stored in stomach', 'Made in stomach, stored in ileum'], correctIndex: 1, explanation: 'The liver produces bile; the gall bladder stores and concentrates it.' },
  { id: 'igbio-q-5-1-2', subtopicId: 'igbio-5-1', type: 'short-answer', marks: 2, prompt: 'State the TWO functions of bile in the small intestine.', rubric: { maxMarks: 2, modelAnswer: '1) Alkaline bile neutralises acidic stomach chyme to provide optimum pH for pancreatic enzymes; 2) Bile emulsifies large fat droplets into tiny droplets, increasing surface area for lipase.', markPoints: [{ id: 'mp1', markDescription: 'Neutralises stomach acid for enzyme optimum pH', requiredKeywordGroups: [['neutralis'], ['acid', 'ph', 'alkaline']] }, { id: 'mp2', markDescription: 'Emulsifies fats increasing surface area for lipase', requiredKeywordGroups: [['emulsif'], ['surface area', 'droplets', 'lipase']] }] }, explanation: 'Neutralisation + emulsification (remember: bile has NO enzymes!).' },
  { id: 'igbio-q-5-1-3', subtopicId: 'igbio-5-1', type: 'matching', marks: 2, prompt: 'Match each nutrient deficiency to its disease:', pairs: [{ left: 'Vitamin C', right: 'Scurvy' }, { left: 'Vitamin D / Calcium', right: 'Rickets' }, { left: 'Iron', right: 'Anaemia' }, { left: 'Dietary fibre', right: 'Constipation' }], explanation: 'Classic human nutrition deficiency table.' },
  { id: 'igbio-q-5-1-4', subtopicId: 'igbio-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the villus absorption roles:', segments: ['Inside each villus, capillaries absorb glucose and amino acids while the central ', ' absorbs ', ' and glycerol.'], wordBank: ['lacteal', 'fatty acids', 'alveolus', 'starch'], answers: ['lacteal', 'fatty acids'], explanation: 'Lacteals absorb digested lipids; capillaries absorb glucose and amino acids.' },
  { id: 'igbio-q-5-1-5', subtopicId: 'igbio-5-1', type: 'mcq', marks: 1, prompt: 'Which enzyme converts maltose into glucose on the membranes of small intestine epithelial cells?', options: ['Amylase', 'Maltase', 'Pepsin', 'Lipase'], correctIndex: 1, explanation: 'Amylase: starch → maltose; Maltase: maltose → glucose.' },

  // 5.2
  { id: 'igbio-q-5-2-1', subtopicId: 'igbio-5-2', type: 'mcq', marks: 1, prompt: 'During INHALATION (breathing in), what happens to the diaphragm and thorax pressure?', options: ['Diaphragm domes up; thorax pressure rises', 'Diaphragm contracts and flattens; thorax volume increases and pressure drops', 'Diaphragm relaxes; thorax volume increases', 'Intercostals pull ribs down and in'], correctIndex: 1, explanation: 'Contracting diaphragm flattens, expanding thorax volume and lowering pressure below atmospheric.' },
  { id: 'igbio-q-5-2-2', subtopicId: 'igbio-5-2', type: 'short-answer', marks: 2, prompt: 'Explain why breathing rate and heart rate remain high for several minutes AFTER vigorous sprinting stops.', rubric: { maxMarks: 2, modelAnswer: 'Anaerobic respiration produced lactic acid creating an oxygen debt; fast heart rate carries lactic acid in blood to the liver, and fast deep breathing supplies extra oxygen to oxidise the lactic acid.', markPoints: [{ id: 'mp1', markDescription: 'Oxygen debt / lactic acid transported to liver', requiredKeywordGroups: [['lactic acid', 'oxygen debt'], ['liver', 'blood']] }, { id: 'mp2', markDescription: 'Extra oxygen oxidises/breaks down lactic acid', requiredKeywordGroups: [['oxygen'], ['break down', 'oxidis', 'remove']] }] }, explanation: 'Repaying oxygen debt clears accumulated lactic acid in the liver.' },
  { id: 'igbio-q-5-2-3', subtopicId: 'igbio-5-2', type: 'fill-blank', marks: 2, prompt: 'Complete the inspired vs expired air values:', segments: ['Inspired air contains 21% O₂ and 0.04% CO₂, whereas expired air contains about ', '% O₂ and ', '% CO₂.'], wordBank: ['16', '4', '0', '78'], answers: ['16', '4'], explanation: 'Expired air drops to ~16% O₂ and rises ~100-fold to ~4% CO₂.' },
  { id: 'igbio-q-5-2-4', subtopicId: 'igbio-5-2', type: 'mcq', marks: 1, prompt: 'What are the products of ANAEROBIC respiration in yeast?', options: ['Lactic acid only', 'Ethanol and carbon dioxide', 'Carbon dioxide and water', 'Glucose and oxygen'], correctIndex: 1, explanation: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.' },
  { id: 'igbio-q-5-2-5', subtopicId: 'igbio-5-2', type: 'multi-select', marks: 2, prompt: 'Select TWO adaptations that make alveoli highly efficient for gas exchange:', options: ['One-cell-thick walls for short diffusion distance', 'Huge total surface area and rich capillary supply', 'Thick muscular walls', 'Dry waterproof cuticle'], selectCount: 2, correctIndices: [0, 1], explanation: 'Thin walls, huge surface area, moisture, and rich blood supply maximise diffusion.' },

  // 6.1
  { id: 'igbio-q-6-1-1', subtopicId: 'igbio-6-1', type: 'mcq', marks: 1, prompt: 'Why is the muscular wall of the LEFT ventricle much thicker than that of the RIGHT ventricle?', options: ['Left ventricle holds more blood', 'Left ventricle pumps blood at higher pressure to the entire body (right only pumps to nearby lungs)', 'Right ventricle has no valves', 'Left ventricle receives blood from the vena cava'], correctIndex: 1, explanation: 'Systemic circulation around the whole body requires far greater pumping pressure.' },
  { id: 'igbio-q-6-1-2', subtopicId: 'igbio-6-1', type: 'short-answer', marks: 2, prompt: 'Describe the role of platelets and fibrinogen in blood clotting, and state ONE reason clotting is vital.', rubric: { maxMarks: 2, modelAnswer: 'Platelets trigger conversion of soluble fibrinogen into an insoluble fibrin mesh that traps red blood cells to form a clot, preventing blood loss and blocking entry of pathogens.', markPoints: [{ id: 'mp1', markDescription: 'Soluble fibrinogen converted to insoluble fibrin mesh', requiredKeywordGroups: [['fibrinogen'], ['fibrin']] }, { id: 'mp2', markDescription: 'Prevents blood loss OR stops pathogen entry', requiredKeywordGroups: [['blood loss', 'bleeding', 'pathogen', 'bacteria', 'infection']] }] }, explanation: 'Fibrinogen → fibrin stops bleeding and blocks pathogens.' },
  { id: 'igbio-q-6-1-3', subtopicId: 'igbio-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the blood vessel features:', segments: ['Blood returning to the heart at low pressure flows in ', ' which contain ', ' to prevent backflow.'], wordBank: ['veins', 'valves', 'arteries', 'cilia'], answers: ['veins', 'valves'], explanation: 'Veins have wide lumens and one-way valves.' },
  { id: 'igbio-q-6-1-4', subtopicId: 'igbio-6-1', type: 'mcq', marks: 1, prompt: 'Which blood vessel carries DEOXYGENATED blood AWAY from the heart to the lungs?', options: ['Aorta', 'Pulmonary artery', 'Pulmonary vein', 'Vena cava'], correctIndex: 1, explanation: 'Pulmonary artery leaves the right ventricle carrying deoxygenated blood to the lungs.' },
  { id: 'igbio-q-6-1-5', subtopicId: 'igbio-6-1', type: 'mcq', marks: 1, prompt: 'Blockage of which blood vessels causes a heart attack (coronary heart disease)?', options: ['Renal arteries', 'Coronary arteries', 'Hepatic portal vein', 'Pulmonary veins'], correctIndex: 1, explanation: 'Coronary arteries supply heart muscle itself with oxygen and glucose.' },

  // 6.2
  { id: 'igbio-q-6-2-1', subtopicId: 'igbio-6-2', type: 'mcq', marks: 1, prompt: 'Why is immunity gained by a baby through antibodies in breast milk classified as PASSIVE immunity?', options: ['It lasts a lifetime', 'The baby receives ready-made antibodies and does NOT produce its own memory cells', 'Breast milk contains antibiotics', 'It involves live pathogens'], correctIndex: 1, explanation: 'Passive immunity provides ready-made antibodies without stimulating memory cells.' },
  { id: 'igbio-q-6-2-2', subtopicId: 'igbio-6-2', type: 'short-answer', marks: 2, prompt: 'Explain how a vaccine gives long-term active immunity against a disease.', rubric: { maxMarks: 2, modelAnswer: 'A vaccine introduces harmless antigens (dead/weakened pathogens), stimulating lymphocytes to produce complementary antibodies and long-lived memory cells so that on future exposure antibodies are produced much faster and in greater quantities.', markPoints: [{ id: 'mp1', markDescription: 'Antigens stimulate lymphocytes to make antibodies & memory cells', requiredKeywordGroups: [['lymphocyte', 'antigen'], ['memory cell']] }, { id: 'mp2', markDescription: 'Faster, larger secondary antibody response on re-exposure', requiredKeywordGroups: [['faster', 'rapid', 'more'], ['antibod']] }] }, explanation: 'Memory cells drive the rapid secondary response.' },
  { id: 'igbio-q-6-2-3', subtopicId: 'igbio-6-2', type: 'mcq', marks: 1, prompt: 'Why are antibiotics ineffective against influenza (flu) or HIV?', options: ['Viruses are too large', 'Antibiotics target bacterial cell walls/metabolism, which viruses lack', 'Viruses live in the stomach', 'Antibiotics only work on fungi'], correctIndex: 1, explanation: 'Viruses have no cellular structure or bacterial targets.' },
  { id: 'igbio-q-6-2-4', subtopicId: 'igbio-6-2', type: 'fill-blank', marks: 2, prompt: 'Complete the cholera mechanism:', segments: ['Cholera toxin causes secretion of ', ' ions into the small intestine, causing osmotic loss of ', ' and severe diarrhoea.'], wordBank: ['chloride', 'water', 'iron', 'glucose'], answers: ['chloride', 'water'], explanation: 'Cl⁻ lowers lumen water potential, drawing water out by osmosis.' },
  { id: 'igbio-q-6-2-5', subtopicId: 'igbio-6-2', type: 'matching', marks: 2, prompt: 'Match each immune term to its definition:', pairs: [{ left: 'Antigen', right: 'Surface protein marker on a pathogen' }, { left: 'Antibody', right: 'Complementary protein made by lymphocytes' }, { left: 'Phagocyte', right: 'White blood cell that engulfs pathogens' }, { left: 'Active immunity', right: 'Long-term immunity with memory cells' }], explanation: 'Keep immune vocabulary razor sharp.' },

  // 7.1
  { id: 'igbio-q-7-1-1', subtopicId: 'igbio-7-1', type: 'mcq', marks: 1, prompt: 'Where in the human body is UREA produced, and by what process?', options: ['Kidney, by ultrafiltration', 'Liver, by deamination of excess amino acids', 'Bladder, by osmosis', 'Lungs, by respiration'], correctIndex: 1, explanation: 'Deamination of excess amino acids in the liver forms urea.' },
  { id: 'igbio-q-7-1-2', subtopicId: 'igbio-7-1', type: 'short-answer', marks: 2, prompt: 'Why does healthy glomerular filtrate contain glucose and urea, yet healthy URINE contains urea and ZERO glucose?', rubric: { maxMarks: 2, modelAnswer: 'Small molecules like glucose and urea are filtered into Bowman’s capsule by ultrafiltration; along the nephron tubule, 100% of glucose is selectively reabsorbed back into the blood by active transport, whereas urea is not reabsorbed.', markPoints: [{ id: 'mp1', markDescription: '100% of glucose is selectively reabsorbed into blood', requiredKeywordGroups: [['glucose'], ['reabsorb']] }, { id: 'mp2', markDescription: 'Urea is not reabsorbed / remains in urine', requiredKeywordGroups: [['urea'], ['not reabsorb', 'remains', 'excret']] }] }, explanation: 'Selective reabsorption recovers all glucose while leaving urea to be excreted.' },
  { id: 'igbio-q-7-1-3', subtopicId: 'igbio-7-1', type: 'fill-blank', marks: 2, prompt: 'Complete the urinary pathway:', segments: ['Urine travels from the kidneys to the bladder via two ', ', and leaves the bladder via the ', '.'], wordBank: ['ureters', 'urethra', 'nephrons', 'veins'], answers: ['ureters', 'urethra'], explanation: 'Kidney → ureter → bladder → urethra.' },
  { id: 'igbio-q-7-1-4', subtopicId: 'igbio-7-1', type: 'mcq', marks: 1, prompt: 'Why are large blood proteins NOT normally found in Bowman’s capsule filtrate?', options: ['They are digested in the glomerulus', 'Protein molecules are too large to pass through the glomerulus filter', 'They are reabsorbed immediately', 'Blood contains no proteins'], correctIndex: 1, explanation: 'Ultrafiltration separates by molecular size.' },
  { id: 'igbio-q-7-1-5', subtopicId: 'igbio-7-1', type: 'mcq', marks: 1, prompt: 'On a very hot day with heavy sweating and low water intake, how does urine change?', options: ['Large volume, dilute', 'Small volume, concentrated', 'Contains glucose', 'Contains red blood cells'], correctIndex: 1, explanation: 'Kidneys reabsorb more water to conserve body water.' },

  // 7.2
  { id: 'igbio-q-7-2-1', subtopicId: 'igbio-7-2', type: 'diagram-label', marks: 2, prompt: 'Identify the reflex arc components:', diagram: 'reflex-arc', labels: [{ marker: 'Neurone inside spinal cord linking sensory to motor', options: ['Relay neurone', 'Effector', 'Receptor'], answer: 'Relay neurone' }, { marker: 'Muscle or gland carrying out the response', options: ['Effector', 'Sensory neurone', 'Synapse'], answer: 'Effector' }], explanation: 'Stimulus → receptor → sensory → relay → motor → effector.' },
  { id: 'igbio-q-7-2-2', subtopicId: 'igbio-7-2', type: 'diagram-label', marks: 2, prompt: 'Identify how impulses cross a synapse:', diagram: 'synaptic-transmission', labels: [{ marker: 'Chemical crossing the synaptic gap', options: ['Neurotransmitter diffusing', 'Electrical spark', 'Haemoglobin'], answer: 'Neurotransmitter diffusing' }, { marker: 'Binding site on next neurone', options: ['Complementary receptor proteins', 'Vesicles', 'Myelin'], answer: 'Complementary receptor proteins' }], explanation: 'Vesicles release neurotransmitter that diffuses across and binds complementary receptors.' },
  { id: 'igbio-q-7-2-3', subtopicId: 'igbio-7-2', type: 'short-answer', marks: 2, prompt: 'Describe how the ciliary muscles, suspensory ligaments, and lens change when focusing on a NEAR object.', rubric: { maxMarks: 2, modelAnswer: 'Ciliary muscles contract, suspensory ligaments slacken (loosen), and the lens becomes thicker (more convex) to refract light more strongly onto the retina.', markPoints: [{ id: 'mp1', markDescription: 'Ciliary muscles contract + suspensory ligaments slacken', requiredKeywordGroups: [['ciliary'], ['contract'], ['slack', 'loosen', 'less tension']] }, { id: 'mp2', markDescription: 'Lens becomes thicker / more convex / refracts more', requiredKeywordGroups: [['thicker', 'fatter', 'more convex', 'more curved']] }] }, explanation: 'Near = Ciliary Contract, Suspensory Slacken, Lens Thick.' },
  { id: 'igbio-q-7-2-4', subtopicId: 'igbio-7-2', type: 'mcq', marks: 1, prompt: 'In BRIGHT light, how do the iris muscles change pupil diameter?', options: ['Circular muscles contract, radial muscles relax → pupil constricts', 'Radial muscles contract, circular relax → pupil dilates', 'Both contract', 'Lens thickens'], correctIndex: 0, explanation: 'Circular contraction narrows the pupil to protect the retina.' },
  { id: 'igbio-q-7-2-5', subtopicId: 'igbio-7-2', type: 'fill-blank', marks: 2, prompt: 'Complete the retinal cell roles:', segments: ['Retinal ', ' detect dim light in black and white, while ', ' detect bright colour and are concentrated at the fovea.'], wordBank: ['rods', 'cones', 'platelets', 'cilia'], answers: ['rods', 'cones'], explanation: 'Rods = dim light; Cones = bright colour (fovea).' },

  // 7.3
  { id: 'igbio-q-7-3-1', subtopicId: 'igbio-7-3', type: 'mcq', marks: 1, prompt: 'Which hormone is secreted by the pancreas when blood glucose rises AFTER a sugary meal?', options: ['Glucagon', 'Insulin', 'Adrenaline', 'Oestrogen'], correctIndex: 1, explanation: 'Insulin stimulates liver and muscles to take up glucose and store it as insoluble glycogen.' },
  { id: 'igbio-q-7-3-2', subtopicId: 'igbio-7-3', type: 'short-answer', marks: 2, prompt: 'Explain how auxin causes a plant shoot to bend towards light shining from one side.', rubric: { maxMarks: 2, modelAnswer: 'Auxin made in the shoot tip diffuses downwards and accumulates on the shaded side; higher auxin concentration stimulates faster cell elongation on the shaded side, causing the shoot to bend towards the light.', markPoints: [{ id: 'mp1', markDescription: 'Auxin accumulates on shaded side', requiredKeywordGroups: [['auxin'], ['shaded', 'dark', 'away from light']] }, { id: 'mp2', markDescription: 'Stimulates faster cell elongation on shaded side', requiredKeywordGroups: [['elongat', 'longer'], ['bend', 'towards']] }] }, explanation: 'Uneven auxin → faster cell elongation on shaded side → bends towards light.' },
  { id: 'igbio-q-7-3-3', subtopicId: 'igbio-7-3', type: 'fill-blank', marks: 2, prompt: 'Complete thermoregulation in hot weather:', segments: ['When body temperature rises, skin arterioles undergo ', ' so more blood flows near the skin surface, and evaporation of ', ' cools the body.'], wordBank: ['vasodilation', 'sweat', 'vasoconstriction', 'shivering'], answers: ['vasodilation', 'sweat'], explanation: 'Vasodilation increases heat radiation; sweat evaporation removes latent heat.' },
  { id: 'igbio-q-7-3-4', subtopicId: 'igbio-7-3', type: 'multi-select', marks: 2, prompt: 'Select TWO physiological effects of adrenaline:', options: ['Increases heart rate and breathing rate', 'Converts liver glycogen into glucose', 'Constricts pupils', 'Lowers blood glucose'], selectCount: 2, correctIndices: [0, 1], explanation: 'Adrenaline prepares muscles for fight-or-flight with extra O₂ and glucose.' },
  { id: 'igbio-q-7-3-5', subtopicId: 'igbio-7-3', type: 'mcq', marks: 1, prompt: 'Which condition results when the pancreas fails to produce sufficient insulin?', options: ['Rickets', 'Type 1 diabetes', 'Scurvy', 'Cholera'], correctIndex: 1, explanation: 'Type 1 diabetes requires blood glucose monitoring and insulin injections.' },

  // 8.1
  { id: 'igbio-q-8-1-1', subtopicId: 'igbio-8-1', type: 'diagram-label', marks: 2, prompt: 'Identify the features of mitotic cell division:', diagram: 'mitosis-cycle', labels: [{ marker: 'Number & genetics of daughter cells', options: ['2 genetically identical diploid cells', '4 genetically different haploid gametes', '1 zygote'], answer: '2 genetically identical diploid cells' }, { marker: 'Primary role in mammals', options: ['Growth and tissue repair', 'Producing sperm/eggs', 'Fertilisation'], answer: 'Growth and tissue repair' }], explanation: 'Mitosis produces 2 identical diploid cells for growth and repair.' },
  { id: 'igbio-q-8-1-2', subtopicId: 'igbio-8-1', type: 'short-answer', marks: 2, prompt: 'State the THREE environmental conditions required for seed germination.', rubric: { maxMarks: 2, modelAnswer: 'Water (to activate enzymes), Oxygen (for aerobic respiration), and Warmth / suitable temperature (for enzyme activity).', markPoints: [{ id: 'mp1', markDescription: 'Water and Oxygen', requiredKeywordGroups: [['water'], ['oxygen']] }, { id: 'mp2', markDescription: 'Warmth / suitable temperature', requiredKeywordGroups: [['warmth', 'temperature', 'warm']] }] }, explanation: 'WOW: Water, Oxygen, Warmth (not light!).' },
  { id: 'igbio-q-8-1-3', subtopicId: 'igbio-8-1', type: 'mcq', marks: 1, prompt: 'Which hormone triggers OVULATION around day 14 of the menstrual cycle?', options: ['FSH', 'LH', 'Progesterone', 'Insulin'], correctIndex: 1, explanation: 'An LH surge triggers release of the mature egg from the ovary.' },
  { id: 'igbio-q-8-1-4', subtopicId: 'igbio-8-1', type: 'fill-blank', marks: 2, prompt: 'Complete wind-pollinated flower adaptations:', segments: ['Wind-pollinated flowers have ', ' stigmas to catch airborne pollen and large quantities of smooth, ', ' pollen grains.'], wordBank: ['feathery', 'lightweight', 'sticky', 'scented'], answers: ['feathery', 'lightweight'], explanation: 'Feathery stigmas increase surface area to trap wind-blown pollen.' },
  { id: 'igbio-q-8-1-5', subtopicId: 'igbio-8-1', type: 'mcq', marks: 1, prompt: 'Human body cells have 46 chromosomes. How many chromosomes are in a human sperm cell produced by meiosis?', options: ['46', '92', '23', '12'], correctIndex: 2, explanation: 'Meiosis halves diploid (46) to haploid (23).' },

  // 8.2
  { id: 'igbio-q-8-2-1', subtopicId: 'igbio-8-2', type: 'mcq', marks: 1, prompt: 'Two parents with genotypes IᴬI⁰ (Group A) and IᴮI⁰ (Group B) have a child. What is the probability the child has blood group O (I⁰I⁰)?', options: ['0%', '25%', '50%', '75%'], correctIndex: 1, explanation: 'IᴬI⁰ × IᴮI⁰ gives IᴬIᴮ, IᴬI⁰, IᴮI⁰, I⁰I⁰ — 1 in 4 (25%) Group O.' },
  { id: 'igbio-q-8-2-2', subtopicId: 'igbio-8-2', type: 'short-answer', marks: 2, prompt: 'Outline the role of mRNA and ribosomes in making a protein from a gene in the nucleus.', rubric: { maxMarks: 2, modelAnswer: 'A copy of the gene’s base sequence is made as mRNA in the nucleus, which moves to the cytoplasm and attaches to a ribosome; the ribosome translates the mRNA sequence to assemble amino acids in a specific order to form the protein.', markPoints: [{ id: 'mp1', markDescription: 'mRNA carries gene copy from nucleus to ribosome', requiredKeywordGroups: [['mrna'], ['ribosome']] }, { id: 'mp2', markDescription: 'Assembles specific sequence of amino acids', requiredKeywordGroups: [['amino acid'], ['sequence', 'order']] }] }, explanation: 'DNA (nucleus) → mRNA → ribosome → amino acid sequence → folded protein.' },
  { id: 'igbio-q-8-2-3', subtopicId: 'igbio-8-2', type: 'mcq', marks: 1, prompt: 'Why are X-linked recessive conditions like red-green colour blindness much more common in MALES than FEMALES?', options: ['Males have two X chromosomes', 'Males have only one X chromosome (XY), so a single recessive allele is expressed', 'Y chromosome carries the colour-blind allele', 'Females cannot inherit X chromosomes from their fathers'], correctIndex: 1, explanation: 'With only one X chromosome, males have no second dominant allele to mask a recessive Xᵇ.' },
  { id: 'igbio-q-8-2-4', subtopicId: 'igbio-8-2', type: 'fill-blank', marks: 2, prompt: 'Complete the monohybrid ratio facts:', segments: ['Crossing two heterozygotes (Bb × Bb) gives a phenotype ratio of ', ' : 1, and a test cross always uses a homozygous ', ' partner.'], wordBank: ['3', 'recessive', '1', 'dominant'], answers: ['3', 'recessive'], explanation: 'Bb × Bb → 3:1; test cross uses bb.' },
  { id: 'igbio-q-8-2-5', subtopicId: 'igbio-8-2', type: 'mcq', marks: 1, prompt: 'What is the probability that a couple’s FOURTH child will be a girl if their first three children are all boys?', options: ['100%', '75%', '50%', '12.5%'], correctIndex: 2, explanation: 'Every fertilisation is independent with 50% X-sperm and 50% Y-sperm.' },

  // 9.1
  { id: 'igbio-q-9-1-1', subtopicId: 'igbio-9-1', type: 'mcq', marks: 1, prompt: 'Which two enzymes are used to cut out the human insulin gene and seal it into a bacterial plasmid?', options: ['Amylase and pepsin', 'Restriction enzyme and DNA ligase', 'Lipase and maltase', 'Pectinase and lactase'], correctIndex: 1, explanation: 'Same restriction enzyme cuts complementary sticky ends; DNA ligase seals the recombinant plasmid.' },
  { id: 'igbio-q-9-1-2', subtopicId: 'igbio-9-1', type: 'short-answer', marks: 2, prompt: 'Explain, using natural selection, how a population of bacteria can evolve resistance to an antibiotic.', rubric: { maxMarks: 2, modelAnswer: 'A random mutation produces an allele for antibiotic resistance in some bacteria; when the antibiotic is used, non-resistant bacteria die while resistant bacteria survive, reproduce, and pass the resistant allele to offspring, increasing its frequency.', markPoints: [{ id: 'mp1', markDescription: 'Random mutation creates resistant variant', requiredKeywordGroups: [['mutation'], ['resistant', 'variation', 'allele']] }, { id: 'mp2', markDescription: 'Resistant survive, reproduce, pass allele on', requiredKeywordGroups: [['survive'], ['reproduce', 'multiply'], ['allele', 'offspring', 'gene']] }] }, explanation: 'Random mutation → survival under selection pressure → reproduction → allele frequency rises.' },
  { id: 'igbio-q-9-1-3', subtopicId: 'igbio-9-1', type: 'fill-blank', marks: 2, prompt: 'Complete variation types:', segments: ['ABO blood group is ', ' variation caused by genes only, while human height is ', ' variation caused by genes and environment.'], wordBank: ['discontinuous', 'continuous', 'adaptive', 'artificial'], answers: ['discontinuous', 'continuous'], explanation: 'Distinct categories = discontinuous; smooth range = continuous.' },
  { id: 'igbio-q-9-1-4', subtopicId: 'igbio-9-1', type: 'mcq', marks: 1, prompt: 'Which enzyme is used industrially to break down pectin in plant cell walls and produce clear fruit juice?', options: ['Lactase', 'Pectinase', 'Lipase', 'Trypsin'], correctIndex: 1, explanation: 'Pectinase digests pectin, increasing juice yield and clarity.' },
  { id: 'igbio-q-9-1-5', subtopicId: 'igbio-9-1', type: 'mcq', marks: 1, prompt: 'How is a desert xerophyte (like a cactus) adapted to reduce transpiration?', options: ['Broad thin leaves with stomata on upper surface', 'Spines instead of leaves, thick waxy cuticle, and sunken stomata', 'Large air spaces for floating', 'No cuticle'], correctIndex: 1, explanation: 'Tiny surface area, thick cuticle, and sunken stomata conserve scarce desert water.' },

  // 10.1
  { id: 'igbio-q-10-1-1', subtopicId: 'igbio-10-1', type: 'mcq', marks: 1, prompt: 'During EUTROPHICATION, what directly uses up the dissolved oxygen in a river or lake?', options: ['Nitrates reacting chemically with O₂', 'Aerobic decomposer bacteria respiring as they feed on dead aquatic plants', 'Living algae photosynthesising', 'Fish drinking too much water'], correctIndex: 1, explanation: 'Algal blooms block light, submerged plants die, and aerobic decomposers consume O₂.' },
  { id: 'igbio-q-10-1-2', subtopicId: 'igbio-10-1', type: 'short-answer', marks: 2, prompt: 'Explain why food chains rarely have more than 4 or 5 trophic levels.', rubric: { maxMarks: 2, modelAnswer: 'About 90% of energy is lost at each trophic transfer (via respiration as heat, movement, uneaten parts, and faeces/urine), leaving too little energy to support another trophic level.', markPoints: [{ id: 'mp1', markDescription: 'Energy lost at each transfer (respiration/heat/faeces/uneaten)', requiredKeywordGroups: [['energy lost', 'lost', 'respiration', 'heat', 'faeces']] }, { id: 'mp2', markDescription: 'Too little energy left to support further levels', requiredKeywordGroups: [['too little', 'not enough', 'insufficient', 'decreases'], ['energy']] }] }, explanation: 'Cumulative energy loss restricts food chain length.' },
  { id: 'igbio-q-10-1-3', subtopicId: 'igbio-10-1', type: 'matching', marks: 2, prompt: 'Match each Nitrogen Cycle bacterium to its conversion:', pairs: [{ left: 'Nitrogen-fixing bacteria', right: 'N₂ gas → ammonium / nitrates' }, { left: 'Decomposers', right: 'Dead proteins → ammonium ions' }, { left: 'Nitrifying bacteria', right: 'Ammonium ions → nitrate ions' }, { left: 'Denitrifying bacteria', right: 'Nitrate ions → N₂ gas' }], explanation: 'Master all 4 bacterial conversions in the Nitrogen Cycle.' },
  { id: 'igbio-q-10-1-4', subtopicId: 'igbio-10-1', type: 'fill-blank', marks: 2, prompt: 'Complete the Carbon Cycle facts:', segments: ['The only biological process removing CO₂ from the atmosphere is ', ', while respiration and ', ' return CO₂ to the air.'], wordBank: ['photosynthesis', 'combustion', 'nitrification', 'osmosis'], answers: ['photosynthesis', 'combustion'], explanation: 'Photosynthesis removes CO₂; respiration and combustion release CO₂.' },
  { id: 'igbio-q-10-1-5', subtopicId: 'igbio-10-1', type: 'multi-select', marks: 2, prompt: 'Select TWO methods used to conserve endangered species and biodiversity:', options: ['Captive breeding programmes and seed banks', 'Sustainable fishing quotas and protected reserves', 'Large-scale monoculture deforestation', 'Dumping untreated nitrate fertiliser in rivers'], selectCount: 2, correctIndices: [0, 1], explanation: 'Captive breeding, seed banks, quotas, and reserves maintain genetic diversity.' },
];

export const IGCSE_BIOLOGY_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'igbio-fc-1-1-1', subtopicId: 'igbio-1-1', front: 'What does MRS GREN stand for?', backBullets: ['Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.'] },
  { id: 'igbio-fc-1-1-2', subtopicId: 'igbio-1-1', front: 'Cambridge definition of respiration?', backBullets: ['Chemical reactions in cells that break down nutrient molecules and release energy for metabolism.'] },
  { id: 'igbio-fc-1-1-3', subtopicId: 'igbio-1-1', front: 'Difference between excretion and egestion?', backBullets: ['Excretion removes metabolic waste (urea, CO₂); egestion removes undigested food (faeces).'] },
  { id: 'igbio-fc-1-1-4', subtopicId: 'igbio-1-1', front: 'Cambridge definition of growth?', backBullets: ['Permanent increase in size and dry mass by an increase in cell number or cell size or both.'] },
  { id: 'igbio-fc-1-1-5', subtopicId: 'igbio-1-1', front: 'Cambridge definition of sensitivity?', backBullets: ['Ability to detect and respond to changes in the internal or external environment.'] },
  // 1.2
  { id: 'igbio-fc-1-2-1', subtopicId: 'igbio-1-2', front: 'Compare the genetic material of bacteria and viruses.', backBullets: ['Bacteria: single circular DNA chromosome loose in cytoplasm (+ plasmids); Viruses: DNA or RNA inside a protein coat.'] },
  { id: 'igbio-fc-1-2-2', subtopicId: 'igbio-1-2', front: 'Cell wall material of plants, fungi, and animals?', backBullets: ['Plants: cellulose; Fungi: chitin; Animals: no cell wall.'] },
  { id: 'igbio-fc-1-2-3', subtopicId: 'igbio-1-2', front: 'Why are viruses not placed in any living kingdom?', backBullets: ['Non-cellular particles that cannot reproduce independently outside a living host cell.'] },
  { id: 'igbio-fc-1-2-4', subtopicId: 'igbio-1-2', front: 'How do fungi feed by saprotrophic nutrition?', backBullets: ['Secrete extracellular enzymes onto dead organic matter and absorb soluble digestion products.'] },
  { id: 'igbio-fc-1-2-5', subtopicId: 'igbio-1-2', front: 'Monocotyledons vs Dicotyledons leaf veins and petals?', backBullets: ['Monocots: parallel veins, petals in 3s; Dicots: branching network veins, petals in 4s or 5s.'] },
  // 1.3
  { id: 'igbio-fc-1-3-1', subtopicId: 'igbio-1-3', front: 'Define a species.', backBullets: ['A group of organisms that can reproduce to produce fertile offspring.'] },
  { id: 'igbio-fc-1-3-2', subtopicId: 'igbio-1-3', front: 'Formatting rule for binomial scientific names?', backBullets: ['Capitalised Genus + lowercase species (italicised or underlined), e.g. Homo sapiens.'] },
  { id: 'igbio-fc-1-3-3', subtopicId: 'igbio-1-3', front: 'Why is DNA base sequencing better than morphology for classification?', backBullets: ['Organisms sharing a more recent common ancestor have more similar DNA base sequences.'] },
  { id: 'igbio-fc-1-3-4', subtopicId: 'igbio-1-3', front: 'Seven taxonomic ranks from broadest to narrowest?', backBullets: ['Kingdom, Phylum, Class, Order, Family, Genus, Species.'] },
  { id: 'igbio-fc-1-3-5', subtopicId: 'igbio-1-3', front: 'How does a dichotomous key work?', backBullets: ['Uses sequential pairs of contrasting observable features to identify an organism.'] },
  // 1.4
  { id: 'igbio-fc-1-4-1', subtopicId: 'igbio-1-4', front: 'Three structures in plant cells absent from animal cells?', backBullets: ['Cellulose cell wall, chloroplasts, and permanent vacuole containing cell sap.'] },
  { id: 'igbio-fc-1-4-2', subtopicId: 'igbio-1-4', front: 'Functions of mitochondria and ribosomes?', backBullets: ['Mitochondria: aerobic respiration (releases energy); Ribosomes: protein synthesis.'] },
  { id: 'igbio-fc-1-4-3', subtopicId: 'igbio-1-4', front: 'Magnification formula and mm ↔ μm conversion?', backBullets: ['Magnification = Image size ÷ Actual size; 1 mm = 1,000 μm.'] },
  { id: 'igbio-fc-1-4-4', subtopicId: 'igbio-1-4', front: 'Adaptations of a root hair cell?', backBullets: ['Long hair-like projection gives large surface area for absorbing water and mineral ions (no chloroplasts).'] },
  { id: 'igbio-fc-1-4-5', subtopicId: 'igbio-1-4', front: 'Levels of organisation from cell to organism?', backBullets: ['Cell → Tissue → Organ → Organ system → Organism.'] },
  // 2.1
  { id: 'igbio-fc-2-1-1', subtopicId: 'igbio-2-1', front: 'Cambridge definition of osmosis?', backBullets: ['Net movement of water molecules from higher to lower water potential across a partially permeable membrane.'] },
  { id: 'igbio-fc-2-1-2', subtopicId: 'igbio-2-1', front: 'Plant cell vs animal cell in pure distilled water?', backBullets: ['Plant cell becomes turgid (cell wall stops bursting); animal cell swells and bursts.'] },
  { id: 'igbio-fc-2-1-3', subtopicId: 'igbio-2-1', front: 'What does plasmolysed mean?', backBullets: ['Plant cell in concentrated solution loses water so its cell membrane pulls away from the cell wall.'] },
  { id: 'igbio-fc-2-1-4', subtopicId: 'igbio-2-1', front: 'Define active transport.', backBullets: ['Movement of particles against a concentration gradient using protein carriers and energy from respiration.'] },
  { id: 'igbio-fc-2-1-5', subtopicId: 'igbio-2-1', front: 'Four factors increasing diffusion rate?', backBullets: ['Larger surface area, higher temperature, steeper concentration gradient, shorter diffusion distance.'] },
  // 3.1
  { id: 'igbio-fc-3-1-1', subtopicId: 'igbio-3-1', front: 'Subunits of starch, lipids, and proteins?', backBullets: ['Starch: glucose; Lipids: 1 glycerol + 3 fatty acids; Proteins: amino acids.'] },
  { id: 'igbio-fc-3-1-2', subtopicId: 'igbio-3-1', front: 'Test for reducing sugar (glucose)?', backBullets: ['Add Benedict’s solution and HEAT in a water bath → blue turns green/yellow/orange/brick-red.'] },
  { id: 'igbio-fc-3-1-3', subtopicId: 'igbio-3-1', front: 'Tests for starch, protein, fats, and Vitamin C?', backBullets: ['Starch: Iodine (blue-black); Protein: Biuret (purple); Fats: Ethanol+water (white emulsion); Vit C: DCPIP (blue→colourless).'] },
  { id: 'igbio-fc-3-1-4', subtopicId: 'igbio-3-1', front: 'Complementary base pairing rules in DNA?', backBullets: ['Adenine (A) pairs with Thymine (T); Cytosine (C) pairs with Guanine (G).'] },
  { id: 'igbio-fc-3-1-5', subtopicId: 'igbio-3-1', front: 'Element found in proteins but NOT in carbohydrates or lipids?', backBullets: ['Nitrogen (N).'] },
  // 3.2
  { id: 'igbio-fc-3-2-1', subtopicId: 'igbio-3-2', front: 'Why are enzymes specific to one substrate?', backBullets: ['Each enzyme’s active site has a unique 3D shape complementary to only one substrate.'] },
  { id: 'igbio-fc-3-2-2', subtopicId: 'igbio-3-2', front: 'What happens to an enzyme above its optimum temperature?', backBullets: ['It denatures: bonds break, active site changes shape permanently, and substrate can no longer bind.'] },
  { id: 'igbio-fc-3-2-3', subtopicId: 'igbio-3-2', front: 'Why does rate increase up to optimum temperature?', backBullets: ['Higher kinetic energy gives faster movement, more frequent effective collisions, and more enzyme–substrate complexes.'] },
  { id: 'igbio-fc-3-2-4', subtopicId: 'igbio-3-2', front: 'Optimum pH of pepsin, salivary amylase, and trypsin?', backBullets: ['Pepsin: pH 2; Amylase: pH 7; Trypsin/lipase: pH 8.'] },
  { id: 'igbio-fc-3-2-5', subtopicId: 'igbio-3-2', front: 'Does 0 °C denature an enzyme?', backBullets: ['No — it only slows collisions reversibly; warming restores normal activity.'] },
  // 4.1
  { id: 'igbio-fc-4-1-1', subtopicId: 'igbio-4-1', front: 'Balanced chemical equation for photosynthesis?', backBullets: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in presence of light and chlorophyll).'] },
  { id: 'igbio-fc-4-1-2', subtopicId: 'igbio-4-1', front: 'Roles & deficiency signs of nitrate and magnesium ions?', backBullets: ['Nitrates: make amino acids (stunted growth); Magnesium: makes chlorophyll (yellow leaves).'] },
  { id: 'igbio-fc-4-1-3', subtopicId: 'igbio-4-1', front: 'Three limiting factors of photosynthesis?', backBullets: ['Light intensity, carbon dioxide concentration, and temperature.'] },
  { id: 'igbio-fc-4-1-4', subtopicId: 'igbio-4-1', front: 'Hydrogen carbonate indicator colours in bright light vs dark?', backBullets: ['Bright light (low CO₂): Purple; Normal: Red; Dark (high CO₂): Yellow.'] },
  { id: 'igbio-fc-4-1-5', subtopicId: 'igbio-4-1', front: 'How do palisade and spongy mesophyll layers differ?', backBullets: ['Palisade: packed chloroplasts near top for light; Spongy: air spaces for rapid CO₂ diffusion.'] },
  // 4.2
  { id: 'igbio-fc-4-2-1', subtopicId: 'igbio-4-2', front: 'Define transpiration.', backBullets: ['Loss of water vapour from leaves by evaporation from mesophyll cell surfaces and diffusion out through stomata.'] },
  { id: 'igbio-fc-4-2-2', subtopicId: 'igbio-4-2', front: 'Adaptations of xylem vessels?', backBullets: ['Dead hollow cells, no end walls, waterproof lignin thickening for support and continuous water flow.'] },
  { id: 'igbio-fc-4-2-3', subtopicId: 'igbio-4-2', front: 'Effect of wind, temperature, and humidity on transpiration?', backBullets: ['Higher wind/temp → faster transpiration; Higher humidity → slower transpiration (smaller gradient).'] },
  { id: 'igbio-fc-4-2-4', subtopicId: 'igbio-4-2', front: 'Define translocation.', backBullets: ['Movement of sucrose and amino acids in phloem from sources to sinks.'] },
  { id: 'igbio-fc-4-2-5', subtopicId: 'igbio-4-2', front: 'What causes a plant to wilt?', backBullets: ['Transpiration water loss exceeds root uptake, so cells lose turgor and become flaccid.'] },
  // 5.1
  { id: 'igbio-fc-5-1-1', subtopicId: 'igbio-5-1', front: 'Deficiency diseases for Vitamin C, Vitamin D, and Iron?', backBullets: ['Vitamin C → scurvy; Vitamin D/Ca → rickets; Iron → anaemia.'] },
  { id: 'igbio-fc-5-1-2', subtopicId: 'igbio-5-1', front: 'Two functions of bile (made in liver, stored in gall bladder)?', backBullets: ['1) Neutralises acidic chyme for optimum enzyme pH; 2) Emulsifies fats into tiny droplets (NO enzymes!).'] },
  { id: 'igbio-fc-5-1-3', subtopicId: 'igbio-5-1', front: 'Two functions of hydrochloric acid in the stomach?', backBullets: ['1) Kills swallowed bacteria; 2) Provides acidic pH 2 optimum for pepsin.'] },
  { id: 'igbio-fc-5-1-4', subtopicId: 'igbio-5-1', front: 'Four adaptations of small intestine villi?', backBullets: ['Huge SA (villi + microvilli), 1-cell-thick walls, rich capillary network, and central lacteal.'] },
  { id: 'igbio-fc-5-1-5', subtopicId: 'igbio-5-1', front: 'Substrates and products of amylase, maltase, protease, and lipase?', backBullets: ['Amylase: starch→maltose; Maltase: maltose→glucose; Protease: protein→amino acids; Lipase: lipids→fatty acids+glycerol.'] },
  // 5.2
  { id: 'igbio-fc-5-2-1', subtopicId: 'igbio-5-2', front: 'Four adaptations of alveoli?', backBullets: ['Huge surface area, 1-cell-thick walls, moist surface, rich capillary supply + ventilation.'] },
  { id: 'igbio-fc-5-2-2', subtopicId: 'igbio-5-2', front: 'O₂ and CO₂ percentages in inspired vs expired air?', backBullets: ['Inspired: 21% O₂, 0.04% CO₂; Expired: 16% O₂, 4% CO₂.'] },
  { id: 'igbio-fc-5-2-3', subtopicId: 'igbio-5-2', front: 'Describe inhalation mechanics.', backBullets: ['External intercostals contract (ribs up & out), diaphragm contracts/flattens → thorax volume up → pressure down → air enters.'] },
  { id: 'igbio-fc-5-2-4', subtopicId: 'igbio-5-2', front: 'Aerobic vs muscle anaerobic vs yeast anaerobic equations?', backBullets: ['Aerobic: C₆H₁₂O₆+6O₂→6CO₂+6H₂O; Muscle: glucose→lactic acid; Yeast: glucose→ethanol+CO₂.'] },
  { id: 'igbio-fc-5-2-5', subtopicId: 'igbio-5-2', front: 'How is oxygen debt repaid after sprinting?', backBullets: ['Fast heart rate carries lactic acid to liver; deep fast breathing supplies O₂ to oxidise lactic acid.'] },
  // 6.1
  { id: 'igbio-fc-6-1-1', subtopicId: 'igbio-6-1', front: 'Why is the left ventricle wall thicker than the right ventricle wall?', backBullets: ['Left ventricle must pump blood at higher pressure around the entire body; right only pumps to nearby lungs.'] },
  { id: 'igbio-fc-6-1-2', subtopicId: 'igbio-6-1', front: 'Compare arteries, veins, and capillaries.', backBullets: ['Arteries: thick elastic/muscular walls, narrow lumen, high pressure; Veins: thin walls, wide lumen, valves; Capillaries: 1 cell thick.'] },
  { id: 'igbio-fc-6-1-3', subtopicId: 'igbio-6-1', front: 'What causes coronary heart disease (CHD)?', backBullets: ['Fatty plaque blockage of coronary arteries starving heart muscle of oxygen and glucose.'] },
  { id: 'igbio-fc-6-1-4', subtopicId: 'igbio-6-1', front: 'How do platelets clot blood?', backBullets: ['Trigger conversion of soluble fibrinogen into an insoluble fibrin mesh trapping red blood cells.'] },
  { id: 'igbio-fc-6-1-5', subtopicId: 'igbio-6-1', front: 'Two types of white blood cells and their roles?', backBullets: ['Phagocytes engulf and digest pathogens; Lymphocytes secrete specific complementary antibodies.'] },
  // 6.2
  { id: 'igbio-fc-6-2-1', subtopicId: 'igbio-6-2', front: 'How does cholera cause severe watery diarrhoea?', backBullets: ['Toxin causes Cl⁻ secretion into gut lumen → lowers water potential → osmotic water loss into gut.'] },
  { id: 'igbio-fc-6-2-2', subtopicId: 'igbio-6-2', front: 'How does a vaccine give long-term immunity?', backBullets: ['Harmless antigens stimulate lymphocytes to make antibodies and memory cells for a faster, bigger secondary response.'] },
  { id: 'igbio-fc-6-2-3', subtopicId: 'igbio-6-2', front: 'Active immunity vs Passive immunity?', backBullets: ['Active: own antibodies + memory cells (long-term); Passive: ready-made antibodies, NO memory cells (short-term).'] },
  { id: 'igbio-fc-6-2-4', subtopicId: 'igbio-6-2', front: 'Why do antibiotics fail against viruses?', backBullets: ['Antibiotics disrupt bacterial cell walls/metabolism; viruses are non-cellular particles lacking those targets.'] },
  { id: 'igbio-fc-6-2-5', subtopicId: 'igbio-6-2', front: 'Difference between an antigen and an antibody?', backBullets: ['Antigen = surface marker on pathogen; Antibody = complementary protein secreted by lymphocytes.'] },
  // 7.1
  { id: 'igbio-fc-7-1-1', subtopicId: 'igbio-7-1', front: 'Define deamination and state where it occurs.', backBullets: ['Removal of the nitrogen-containing part of excess amino acids in the LIVER to form urea.'] },
  { id: 'igbio-fc-7-1-2', subtopicId: 'igbio-7-1', front: 'What passes into Bowman’s capsule during ultrafiltration?', backBullets: ['Small molecules: water, glucose, urea, and ions (large proteins and blood cells stay in blood).'] },
  { id: 'igbio-fc-7-1-3', subtopicId: 'igbio-7-1', front: 'What happens during selective reabsorption in the nephron?', backBullets: ['100% of glucose (by active transport) plus required water and ions return to blood; urea stays in urine.'] },
  { id: 'igbio-fc-7-1-4', subtopicId: 'igbio-7-1', front: 'Difference between ureter and urethra?', backBullets: ['Ureters carry urine from kidneys to bladder; urethra carries urine from bladder out of the body.'] },
  { id: 'igbio-fc-7-1-5', subtopicId: 'igbio-7-1', front: 'How does urine change when dehydrated on a hot day?', backBullets: ['More water is reabsorbed → smaller volume of more concentrated urine.'] },
  // 7.2
  { id: 'igbio-fc-7-2-1', subtopicId: 'igbio-7-2', front: 'Order of components in a reflex arc?', backBullets: ['Stimulus → Receptor → Sensory neurone → Relay neurone → Motor neurone → Effector → Response.'] },
  { id: 'igbio-fc-7-2-2', subtopicId: 'igbio-7-2', front: 'How does an impulse cross a synapse?', backBullets: ['Vesicles release neurotransmitter → diffuses across gap → binds complementary receptors → triggers new impulse (one-way only).'] },
  { id: 'igbio-fc-7-2-3', subtopicId: 'igbio-7-2', front: 'Pupil reflex in bright light vs dim light?', backBullets: ['Bright: circular contract, radial relax (constricts); Dim: radial contract, circular relax (dilates).'] },
  { id: 'igbio-fc-7-2-4', subtopicId: 'igbio-7-2', front: 'Eye accommodation for a NEAR object?', backBullets: ['Ciliary muscles contract → suspensory ligaments slacken → lens becomes thicker (more convex) → refracts light more.'] },
  { id: 'igbio-fc-7-2-5', subtopicId: 'igbio-7-2', front: 'Roles of rods, cones, and the fovea?', backBullets: ['Rods: dim light (B&W); Cones: bright colour (RGB), concentrated at the fovea for sharpest vision.'] },
  // 7.3
  { id: 'igbio-fc-7-3-1', subtopicId: 'igbio-7-3', front: 'Compare nervous vs hormonal control.', backBullets: ['Nervous: electrical, fast, short-lived, localised; Hormonal: chemical in blood, slower, longer-lasting.'] },
  { id: 'igbio-fc-7-3-2', subtopicId: 'igbio-7-3', front: 'Four effects of adrenaline?', backBullets: ['Raises heart rate, breathing rate, pupil dilation, and liver glycogen → glucose conversion.'] },
  { id: 'igbio-fc-7-3-3', subtopicId: 'igbio-7-3', front: 'Roles of insulin vs glucagon?', backBullets: ['Insulin lowers high blood glucose (stores glycogen); Glucagon raises low blood glucose (breaks glycogen → glucose).'] },
  { id: 'igbio-fc-7-3-4', subtopicId: 'igbio-7-3', front: 'How do vasodilation and vasoconstriction regulate body temperature?', backBullets: ['Hot: skin arterioles widen (more blood near surface radiates heat); Cold: arterioles narrow (conserves heat).'] },
  { id: 'igbio-fc-7-3-5', subtopicId: 'igbio-7-3', front: 'How does auxin cause positive phototropism in shoots?', backBullets: ['Accumulates on the shaded side, stimulating faster cell elongation so the shoot bends towards light.'] },
  // 8.1
  { id: 'igbio-fc-8-1-1', subtopicId: 'igbio-8-1', front: 'Compare mitosis and meiosis.', backBullets: ['Mitosis: 2 identical diploid cells (growth/repair); Meiosis: 4 varied haploid gametes.'] },
  { id: 'igbio-fc-8-1-2', subtopicId: 'igbio-8-1', front: 'Three conditions for seed germination (WOW)?', backBullets: ['Water, Oxygen, Warmth (suitable temperature) — light NOT required.'] },
  { id: 'igbio-fc-8-1-3', subtopicId: 'igbio-8-1', front: 'Wind-pollinated vs insect-pollinated flowers?', backBullets: ['Wind: dull petals, feathery stigmas, dangling anthers, light smooth pollen; Insect: bright petals, nectar, sticky pollen.'] },
  { id: 'igbio-fc-8-1-4', subtopicId: 'igbio-8-1', front: 'Roles of FSH, oestrogen, LH, and progesterone?', backBullets: ['FSH matures egg; Oestrogen builds lining; LH triggers ovulation; Progesterone maintains lining.'] },
  { id: 'igbio-fc-8-1-5', subtopicId: 'igbio-8-1', front: 'Functions of the placenta?', backBullets: ['Exchanges O₂, glucose, amino acids, antibodies to fetus and removes CO₂ and urea without mixing blood.'] },
  // 8.2
  { id: 'igbio-fc-8-2-1', subtopicId: 'igbio-8-2', front: 'Steps of protein synthesis from DNA?', backBullets: ['Gene copied to mRNA in nucleus → travels to ribosome → assembles specific sequence of amino acids → folds into protein.'] },
  { id: 'igbio-fc-8-2-2', subtopicId: 'igbio-8-2', front: 'Phenotype ratio of Bb × Bb vs Bb × bb?', backBullets: ['Bb × Bb = 3:1; Bb × bb (test cross) = 1:1.'] },
  { id: 'igbio-fc-8-2-3', subtopicId: 'igbio-8-2', front: 'Genotypes for all four ABO blood groups?', backBullets: ['A: IᴬIᴬ or IᴬI⁰; B: IᴮIᴮ or IᴮI⁰; AB: IᴬIᴮ (codominant); O: I⁰I⁰.'] },
  { id: 'igbio-fc-8-2-4', subtopicId: 'igbio-8-2', front: 'Why are X-linked recessive traits commoner in males?', backBullets: ['Males (XY) have only one X chromosome, so a single recessive allele is always expressed.'] },
  { id: 'igbio-fc-8-2-5', subtopicId: 'igbio-8-2', front: 'Define genotype and phenotype.', backBullets: ['Genotype = genetic makeup (alleles); Phenotype = observable features.'] },
  // 9.1
  { id: 'igbio-fc-9-1-1', subtopicId: 'igbio-9-1', front: 'Continuous vs discontinuous variation causes and examples?', backBullets: ['Continuous: genes + environment (height); Discontinuous: genes only (ABO blood group).'] },
  { id: 'igbio-fc-9-1-2', subtopicId: 'igbio-9-1', front: 'Five steps of natural selection?', backBullets: ['Random mutation/variation → selection pressure → better-adapted survive → reproduce → pass advantageous alleles on.'] },
  { id: 'igbio-fc-9-1-3', subtopicId: 'igbio-9-1', front: 'Roles of restriction enzymes and DNA ligase in GM?', backBullets: ['Same restriction enzyme cuts gene & plasmid leaving sticky ends; DNA ligase seals recombinant plasmid.'] },
  { id: 'igbio-fc-9-1-4', subtopicId: 'igbio-9-1', front: 'Why are bacteria used in biotechnology/GM?', backBullets: ['Rapid reproduction, plasmids, universal genetic code, make complex molecules, few ethical issues.'] },
  { id: 'igbio-fc-9-1-5', subtopicId: 'igbio-9-1', front: 'Xerophyte adaptations to arid habitats?', backBullets: ['Spines (low SA), thick waxy cuticle, sunken stomata, extensive roots.'] },
  // 10.1
  { id: 'igbio-fc-10-1-1', subtopicId: 'igbio-10-1', front: 'Why do food chains rarely exceed 4–5 trophic levels?', backBullets: ['~90% of energy is lost at each transfer (respiration/heat, movement, uneaten parts, faeces), leaving too little for higher predators.'] },
  { id: 'igbio-fc-10-1-2', subtopicId: 'igbio-10-1', front: 'Four bacterial processes in the Nitrogen Cycle?', backBullets: ['Nitrogen fixation (N₂→NH₄⁺/NO₃⁻), Decomposition (protein→NH₄⁺), Nitrification (NH₄⁺→NO₃⁻), Denitrification (NO₃⁻→N₂).'] },
  { id: 'igbio-fc-10-1-3', subtopicId: 'igbio-10-1', front: 'Six steps of eutrophication?', backBullets: ['Nitrate runoff → algal bloom → blocks light → submerged plants die → aerobic bacteria respire using O₂ → fish suffocate.'] },
  { id: 'igbio-fc-10-1-4', subtopicId: 'igbio-10-1', front: 'Only biological process removing CO₂ from the atmosphere?', backBullets: ['Photosynthesis (respiration and combustion return CO₂).'] },
  { id: 'igbio-fc-10-1-5', subtopicId: 'igbio-10-1', front: 'Four conservation methods for endangered species?', backBullets: ['Protected reserves, captive breeding, seed banks, sustainable quotas/replanting.'] },
];

export const IGCSE_BIOLOGY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'igbio-cs-1',
    slug: 'topic-1-classification-cells',
    title: '1. Classification & Cells Cheat Sheet',
    topicNumber: 1,
    topicName: 'Characteristics, Classification & Cells',
    summary: 'MRS GREN, 5 kingdoms, viruses, binomial naming, cell organelles & magnification.',
    accentColor: '#16A34A',
    sections: [
      { heading: 'MRS GREN Life Processes', points: ['Movement, Respiration (releases energy), Sensitivity, Growth (permanent dry mass), Reproduction, Excretion (metabolic waste), Nutrition', 'Excretion (urea, CO₂) ≠ Egestion (faeces)'] },
      { heading: 'Five Kingdoms & Viruses', points: ['Cell walls: Plants = cellulose, Fungi = chitin, Bacteria = non-cellulose, Animals = none', 'Viruses: non-living protein coat + DNA or RNA; reproduce only inside host cells'] },
      { heading: 'Species & Binomial System', points: ['Species reproduce to produce fertile offspring', 'Format: Capital Genus + lowercase species (Homo sapiens); DNA sequences show closest ancestors'] },
      { heading: 'Cell Organelles & Specialised Cells', points: ['Plant-only: cellulose cell wall, chloroplasts, permanent vacuole', 'Mitochondria (aerobic respiration), ribosomes (protein synthesis), root hair (large SA), palisade (chloroplasts)'] },
      { heading: 'Magnification & Exam Traps', points: ['M = Image ÷ Actual; 1 mm = 1,000 μm — convert to identical units before dividing', 'Never capitalise the species word or claim respiration "makes" energy'], formula: 'M = I ÷ A' },
    ],
  },
  { id: 'igbio-cs-2', slug: 'topic-2-cell-transport', title: '2. Movement Into & Out of Cells Cheat Sheet', topicNumber: 2, topicName: 'Movement Into & Out of Cells', summary: 'Diffusion, osmosis (water potential) & active transport.', accentColor: '#16A34A', sections: [{ heading: 'Core Rules', points: ['Osmosis: water moves high → low water potential across partially permeable membrane', 'Active transport: against gradient + carrier proteins + respiration energy'] }, { heading: 'Exam Traps', points: ['Always say "water potential", not "water concentration"', 'Plant cells become turgid/plasmolysed; animal cells burst/shrink'] }] },
  { id: 'igbio-cs-3', slug: 'topic-3-molecules-enzymes', title: '3. Biological Molecules & Enzymes Cheat Sheet', topicNumber: 3, topicName: 'Biological Molecules & Enzymes', summary: 'Food tests, DNA base pairing & enzyme kinetics/denaturation.', accentColor: '#16A34A', sections: [{ heading: 'Food Tests & Enzymes', points: ['Iodine (blue-black), Benedict’s+HEAT (brick-red), Biuret (purple), Ethanol (white emulsion), DCPIP (blue→colourless)', 'DNA: A=T, C=G; Active site complementary to substrate'] }, { heading: 'Exam Traps', points: ['Never say enzymes are "killed" — say DENATURED (active site changes shape)'] }] },
  { id: 'igbio-cs-4', slug: 'topic-4-plant-nutrition-transport', title: '4. Plant Nutrition & Transport Cheat Sheet', topicNumber: 4, topicName: 'Plant Nutrition & Transport', summary: 'Photosynthesis, limiting factors, xylem transpiration & phloem translocation.', accentColor: '#16A34A', sections: [{ heading: 'Core Processes', points: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂; NO₃⁻ → amino acids; Mg²⁺ → chlorophyll', 'Xylem: dead, lignified, water up; Phloem: living, sucrose & amino acids both ways'] }, { heading: 'Exam Traps', points: ['Phloem transports SUCROSE and amino acids, not glucose', 'High humidity lowers transpiration by reducing the diffusion gradient'] }] },
  { id: 'igbio-cs-5', slug: 'topic-5-human-digestion-respiration', title: '5. Human Nutrition & Respiration Cheat Sheet', topicNumber: 5, topicName: 'Human Nutrition & Gas Exchange', summary: 'Digestive enzymes, bile, villi, ventilation & aerobic/anaerobic respiration.', accentColor: '#16A34A', sections: [{ heading: 'Core Facts', points: ['Bile: made in liver, stored in gall bladder, NO enzymes — neutralises acid & emulsifies fats', 'Inspired: 21% O₂, 0.04% CO₂ | Expired: 16% O₂, 4% CO₂', 'Oxygen debt: liver oxidises lactic acid using extra O₂'] }, { heading: 'Exam Traps', points: ['Lungs have no muscles — diaphragm & intercostals drive volume/pressure changes'] }] },
  { id: 'igbio-cs-6', slug: 'topic-6-circulation-immunity', title: '6. Circulation & Immunity Cheat Sheet', topicNumber: 6, topicName: 'Transport in Animals & Immunity', summary: 'Double circulation, heart/vessels, clotting, vaccines & antibiotics.', accentColor: '#16A34A', sections: [{ heading: 'Core Facts', points: ['Left ventricle thickest wall (pumps to whole body)', 'Platelets convert soluble fibrinogen → insoluble fibrin mesh', 'Active = own antibodies + memory cells; Passive = ready-made, no memory cells'] }, { heading: 'Exam Traps', points: ['Antibiotics kill bacteria ONLY, never viruses'] }] },
  { id: 'igbio-cs-7', slug: 'topic-7-excretion-coordination', title: '7. Excretion, Nervous System & Homeostasis Cheat Sheet', topicNumber: 7, topicName: 'Excretion, Coordination & Homeostasis', summary: 'Deamination, nephron, reflex arc, synapses, eye, glucose/temp & auxin.', accentColor: '#16A34A', sections: [{ heading: 'Core Mechanisms', points: ['Liver deaminates excess amino acids → urea; nephron reabsorbs 100% glucose', 'Near eye focus: ciliary contract, suspensory slacken, lens thickens', 'Auxin accumulates on shaded side of shoot → faster cell elongation'] }, { heading: 'Exam Traps', points: ['Never say capillaries move closer to skin — say arterioles DILATE (vasodilation)'] }] },
  { id: 'igbio-cs-8', slug: 'topic-8-reproduction-genetics', title: '8. Reproduction & Inheritance Cheat Sheet', topicNumber: 8, topicName: 'Reproduction & Inheritance', summary: 'Mitosis/meiosis, pollination, placenta, protein synthesis, ABO & X-linked.', accentColor: '#16A34A', sections: [{ heading: 'Core Genetics', points: ['DNA → mRNA → ribosome → amino acid sequence', 'Bb×Bb = 3:1; ABO codominant IᴬIᴮ; X-linked recessive commoner in XY males', 'Germination = WOW (Water, Oxygen, Warmth)'] }, { heading: 'Exam Traps', points: ['Maternal and fetal blood NEVER mix directly in the placenta'] }] },
  { id: 'igbio-cs-9', slug: 'topic-9-variation-biotech', title: '9. Variation, Selection & Biotech Cheat Sheet', topicNumber: 9, topicName: 'Variation, Selection & Biotechnology', summary: 'Continuous/discontinuous, natural selection, selective breeding & GM insulin.', accentColor: '#16A34A', sections: [{ heading: 'GM & Selection', points: ['Natural selection: random mutation → selection pressure → survive → reproduce → pass alleles', 'GM: same restriction enzyme (sticky ends) + DNA ligase → recombinant plasmid → fermenter'] }, { heading: 'Exam Traps', points: ['Antibiotics select pre-existing resistant mutants — they do NOT cause mutation'] }] },
  { id: 'igbio-cs-10', slug: 'topic-10-ecology', title: '10. Ecology, Cycles & Conservation Cheat Sheet', topicNumber: 10, topicName: 'Ecology, Nutrient Cycles & Conservation', summary: 'Energy loss, Carbon & Nitrogen cycles, eutrophication & conservation.', accentColor: '#16A34A', sections: [{ heading: 'Core Cycles', points: ['~90% energy lost per trophic transfer → max 4–5 levels', 'Nitrogen bacteria: fixing, decomposers, nitrifying (NH₄⁺→NO₃⁻), denitrifying (NO₃⁻→N₂)', 'Eutrophication: nitrates → algae → blocks light → plants die → bacteria respire → O₂ depleted'] }, { heading: 'Exam Traps', points: ['Decomposer bacteria — NOT living algae — deplete dissolved oxygen in eutrophication'] }] },
];

export const IGCSE_BIOLOGY_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'igbio-ex-1-1', subtopicId: 'igbio-1-1', number: 1, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A potted plant grows taller, bends towards a sunny window, and releases carbon dioxide at night.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Identify the THREE MRS GREN characteristics shown and explain why releasing CO₂ at night is excretion.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Growth (grows taller), sensitivity/movement (bends towards light), and respiration/excretion (releases CO₂). CO₂ is a waste product of cellular respiration (metabolism), so its removal is excretion.', markPoints: [{ id: 'mp1', markDescription: 'Names growth & sensitivity/movement', requiredKeywordGroups: [['growth'], ['sensitivity', 'movement']] }, { id: 'mp2', markDescription: 'Names respiration/excretion', requiredKeywordGroups: [['respiration', 'excretion']] }, { id: 'mp3', markDescription: 'CO₂ is metabolic waste', requiredKeywordGroups: [['metabolic', 'respiration'], ['waste']] }] } },
  ] },
  { id: 'igbio-ex-1-2', subtopicId: 'igbio-1-2', number: 2, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Both *Pneumococcus* (a bacterium) and Influenza virus can infect human airways and cause disease.', parts: [
    { id: 'p1', label: '(a)', prompt: 'State TWO structural differences between a bacterial cell and a virus particle.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Bacteria have a cell wall, cell membrane, cytoplasm, and circular DNA chromosome (+ plasmids), whereas viruses have no cellular structure and consist only of a protein coat around DNA or RNA.', markPoints: [{ id: 'mp1', markDescription: 'Bacteria have cell wall/membrane/cytoplasm/plasmids', requiredKeywordGroups: [['cell wall', 'cytoplasm', 'membrane', 'plasmid']] }, { id: 'mp2', markDescription: 'Viruses have protein coat + no cellular structure', requiredKeywordGroups: [['protein coat', 'no cell', 'rna']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain why antibiotics can treat *Pneumococcus* pneumonia but NOT influenza.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Antibiotics target bacterial cell walls or bacterial metabolism; viruses have no cell walls and reproduce inside host cells, so antibiotics have no effect on them.', markPoints: [{ id: 'mp1', markDescription: 'Antibiotics target bacterial cell walls/metabolism', requiredKeywordGroups: [['bacteria'], ['cell wall', 'metabolism', 'kill']] }, { id: 'mp2', markDescription: 'Viruses lack cell walls / inside host cells', requiredKeywordGroups: [['virus'], ['no cell wall', 'host', 'not living']] }] } },
  ] },
  { id: 'igbio-ex-1-3', subtopicId: 'igbio-1-3', number: 3, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Scientists compare DNA base sequences of three big cats: *Panthera leo*, *Panthera pardus*, and *Acinonyx jubatus*.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Identify the two most closely related species and explain how DNA evidence confirms evolutionary closeness.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: '*Panthera leo* and *Panthera pardus* share the same genus (*Panthera*); closely related species share a more recent common ancestor and therefore have more similar DNA base sequences.', markPoints: [{ id: 'mp1', markDescription: 'Names Panthera leo & Panthera pardus (same genus)', requiredKeywordGroups: [['panthera'], ['genus']] }, { id: 'mp2', markDescription: 'More similar DNA sequences = more recent common ancestor', requiredKeywordGroups: [['similar'], ['dna', 'base'], ['ancestor']] }] } },
  ] },
  { id: 'igbio-ex-1-4', subtopicId: 'igbio-1-4', number: 4, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A micrograph shows a palisade cell with an image length of 60 mm at magnification ×1,200.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Calculate the actual length of the palisade cell in micrometres (μm).', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: '60 mm = 60,000 μm; Actual size = 60,000 ÷ 1,200 = 50 μm.', markPoints: [{ id: 'mp1', markDescription: 'Converts 60 mm to 60,000 μm', requiredKeywordGroups: [['60000', '60,000', '1000']] }, { id: 'mp2', markDescription: '50 μm', numericMatch: { value: 50, tolerance: 0.2 } }] } },
    { id: 'p2', label: '(b)', prompt: 'State TWO ways a palisade cell is adapted for photosynthesis.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Contains many chloroplasts (rich in chlorophyll) and has a tall regular column shape positioned near the upper leaf surface to maximise light absorption.', markPoints: [{ id: 'mp1', markDescription: 'Many chloroplasts', requiredKeywordGroups: [['chloroplast']] }, { id: 'mp2', markDescription: 'Near upper surface / column shape for maximum light', requiredKeywordGroups: [['upper', 'top', 'light', 'column']] }] } },
  ] },
  { id: 'igbio-ex-2-1', subtopicId: 'igbio-2-1', number: 5, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Identical potato cylinders (mass 5.0 g) are placed in pure water (Tube A) and 1.0 mol/dm³ sucrose (Tube B) for 1 hour.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Predict and explain the mass and texture change of the potato cylinder in Tube A.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Mass increases and the cylinder becomes firm/turgid because pure water has a higher water potential than potato cells, so water enters cells by osmosis through partially permeable membranes.', markPoints: [{ id: 'mp1', markDescription: 'Mass increases & becomes firm/turgid', requiredKeywordGroups: [['increase', 'heavier'], ['firm', 'turgid']] }, { id: 'mp2', markDescription: 'Higher water potential outside → enters by osmosis', requiredKeywordGroups: [['water potential'], ['osmosis']] }, { id: 'mp3', markDescription: 'Across partially permeable membrane', requiredKeywordGroups: [['partially permeable', 'semi-permeable']] }] } },
  ] },
  { id: 'igbio-ex-3-1', subtopicId: 'igbio-3-1', number: 6, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A student tests a sports drink for glucose, protein, and Vitamin C.', parts: [
    { id: 'p1', label: '(a)', prompt: 'State the reagent, any heating needed, and positive result for glucose and Vitamin C.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Glucose: add Benedict’s solution and heat in a water bath → blue turns brick-red/orange. Vitamin C: add blue DCPIP → turns colourless.', markPoints: [{ id: 'mp1', markDescription: 'Benedict’s + heat', requiredKeywordGroups: [['benedict'], ['heat', 'boil', 'warm']] }, { id: 'mp2', markDescription: 'Blue to brick-red/orange', requiredKeywordGroups: [['brick', 'orange', 'red', 'green']] }, { id: 'mp3', markDescription: 'DCPIP blue to colourless', requiredKeywordGroups: [['dcpip'], ['colourless', 'colorless']] }] } },
  ] },
  { id: 'igbio-ex-3-2', subtopicId: 'igbio-3-2', number: 7, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Salivary amylase digests starch fastest at 37 °C, very slowly at 5 °C, and not at all at 70 °C.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain the difference between enzyme behaviour at 5 °C and at 70 °C.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'At 5 °C molecules have low kinetic energy so there are few collisions (enzyme is intact, not denatured). At 70 °C the enzyme is denatured — its active site permanently changes shape so starch can no longer fit.', markPoints: [{ id: 'mp1', markDescription: '5 °C: low kinetic energy / few collisions', requiredKeywordGroups: [['kinetic energy', 'slow', 'collision']] }, { id: 'mp2', markDescription: '70 °C: denatured / active site changes shape', requiredKeywordGroups: [['denatur'], ['active site'], ['shape']] }, { id: 'mp3', markDescription: 'Substrate cannot bind/fit', requiredKeywordGroups: [['fit', 'bind', 'complementary']] }] } },
  ] },
  { id: 'igbio-ex-4-1', subtopicId: 'igbio-4-1', number: 8, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A crop grown in mineral-poor soil shows yellow leaves and stunted growth.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Identify the TWO missing mineral ions and explain why each shortage slows plant growth.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Lack of magnesium ions prevents chlorophyll synthesis (yellow leaves → less light absorbed → less photosynthesis/glucose). Lack of nitrate ions prevents amino acid and protein synthesis (stunted growth).', markPoints: [{ id: 'mp1', markDescription: 'Magnesium → chlorophyll → less photosynthesis', requiredKeywordGroups: [['magnesium'], ['chlorophyll']] }, { id: 'mp2', markDescription: 'Nitrate → amino acids/proteins', requiredKeywordGroups: [['nitrate'], ['amino acid', 'protein']] }, { id: 'mp3', markDescription: 'Links reduced photosynthesis/protein to poor growth', requiredKeywordGroups: [['photosynthesis', 'growth', 'glucose']] }] } },
  ] },
  { id: 'igbio-ex-4-2', subtopicId: 'igbio-4-2', number: 9, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A leafy shoot in a potometer is moved from a still, humid room into a warm, breezy greenhouse.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how BOTH higher temperature and wind speed change the rate of bubble movement in the potometer.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Bubble moves faster (higher transpiration rate). Higher temperature gives water molecules more kinetic energy for faster evaporation/diffusion; wind blows humid air away from stomata, maintaining a steep water vapour diffusion gradient.', markPoints: [{ id: 'mp1', markDescription: 'Faster rate / faster bubble', requiredKeywordGroups: [['faster', 'increases', 'higher']] }, { id: 'mp2', markDescription: 'Warmth: more kinetic energy / faster evaporation', requiredKeywordGroups: [['kinetic', 'evaporat']] }, { id: 'mp3', markDescription: 'Wind removes humid air / steeper gradient', requiredKeywordGroups: [['wind', 'gradient', 'humid', 'blows away']] }] } },
  ] },
  { id: 'igbio-ex-5-1', subtopicId: 'igbio-5-1', number: 10, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A patient has gallstones blocking the bile duct between the gall bladder and duodenum.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain TWO ways blocking the bile duct reduces the digestion of lipids in the small intestine.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: '1) Fats are not emulsified into tiny droplets, leaving a much smaller surface area for lipase; 2) Acidic stomach chyme is not neutralised, so duodenal pH is too low (acidic) for optimum lipase activity.', markPoints: [{ id: 'mp1', markDescription: 'No emulsification → smaller surface area', requiredKeywordGroups: [['emulsif'], ['surface area']] }, { id: 'mp2', markDescription: 'Stomach acid not neutralised → wrong pH for lipase', requiredKeywordGroups: [['neutralis', 'acid'], ['ph', 'optimum', 'lipase']] }, { id: 'mp3', markDescription: 'Slower lipid breakdown to fatty acids + glycerol', requiredKeywordGroups: [['slower', 'less', 'lipase', 'fatty acid']] }] } },
  ] },
  { id: 'igbio-ex-5-2', subtopicId: 'igbio-5-2', number: 11, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A 400 m sprinter finishes a race panting heavily with a heart rate of 175 bpm.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Write the word equation for anaerobic respiration in human muscles and explain how the body repays the resulting oxygen debt.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Glucose → Lactic acid. High heart rate transports lactic acid from muscles to the liver, and fast deep breathing supplies extra oxygen so the liver can oxidise lactic acid.', markPoints: [{ id: 'mp1', markDescription: 'Glucose → lactic acid', requiredKeywordGroups: [['glucose'], ['lactic acid']] }, { id: 'mp2', markDescription: 'Blood transports lactic acid to liver', requiredKeywordGroups: [['liver']] }, { id: 'mp3', markDescription: 'Extra oxygen oxidises/breaks down lactic acid', requiredKeywordGroups: [['oxygen'], ['oxidis', 'break down']] }] } },
  ] },
  { id: 'igbio-ex-6-1', subtopicId: 'igbio-6-1', number: 12, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Mammals have a double circulatory system with thick-walled arteries and thin-walled veins.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain ONE advantage of a double circulation and ONE structural adaptation of arteries to high blood pressure.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Double circulation keeps oxygenated and deoxygenated blood separate and re-pressurises blood after the lungs so oxygen reaches body organs rapidly at high pressure. Arteries have thick muscular and elastic walls to withstand high pressure and recoil.', markPoints: [{ id: 'mp1', markDescription: 'Maintains high systemic pressure / keeps oxygenated separate', requiredKeywordGroups: [['high pressure', 'separate', 'oxygenated', 'rapid']] }, { id: 'mp2', markDescription: 'Arteries have thick muscular/elastic walls', requiredKeywordGroups: [['thick'], ['muscular', 'elastic']] }, { id: 'mp3', markDescription: 'Withstand high pressure / elastic recoil', requiredKeywordGroups: [['pressure', 'recoil', 'burst']] }] } },
  ] },
  { id: 'igbio-ex-6-2', subtopicId: 'igbio-6-2', number: 13, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A graph shows blood antibody concentration after a first vaccine dose (Week 0) and a booster dose (Week 6).', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain why antibody concentration rises much faster and reaches a higher peak after the Week 6 exposure.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'The first dose stimulated lymphocytes to produce long-lived memory cells; on second exposure, memory cells immediately recognise the complementary antigen, divide rapidly, and secrete huge quantities of specific antibodies.', markPoints: [{ id: 'mp1', markDescription: 'Memory cells produced from first dose', requiredKeywordGroups: [['memory cell']] }, { id: 'mp2', markDescription: 'Recognise antigen & divide rapidly', requiredKeywordGroups: [['antigen', 'recognise', 'divide', 'clone']] }, { id: 'mp3', markDescription: 'Faster, larger antibody production', requiredKeywordGroups: [['faster', 'more', 'higher'], ['antibod']] }] } },
  ] },
  { id: 'igbio-ex-7-1', subtopicId: 'igbio-7-1', number: 14, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Analysis of fluid inside a healthy person’s renal artery, Bowman’s capsule, and collecting duct shows protein only in the renal artery and glucose absent from the collecting duct.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain the absence of protein from Bowman’s capsule and the absence of glucose from the collecting duct.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Protein molecules are too large to pass out of the glomerulus during ultrafiltration. Glucose is small enough to be filtered, but 100% of glucose is selectively reabsorbed back into blood along the nephron tubule by active transport.', markPoints: [{ id: 'mp1', markDescription: 'Proteins too large for ultrafiltration', requiredKeywordGroups: [['protein'], ['too large', 'too big', 'ultrafiltration']] }, { id: 'mp2', markDescription: '100% glucose selectively reabsorbed', requiredKeywordGroups: [['glucose'], ['reabsorb']] }, { id: 'mp3', markDescription: 'By active transport into blood', requiredKeywordGroups: [['active transport', 'blood', 'capillar']] }] } },
  ] },
  { id: 'igbio-ex-7-2', subtopicId: 'igbio-7-2', number: 15, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A person looks up from reading a book to watch a distant aeroplane in bright sunshine.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how the lens adjusts to focus on the distant aeroplane and how the pupil responds to bright sunshine.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'For distant focus: ciliary muscles relax, suspensory ligaments tighten/pull, making the lens thinner (less convex) to refract light less. In bright sun: circular iris muscles contract and radial muscles relax so the pupil constricts.', markPoints: [{ id: 'mp1', markDescription: 'Ciliary relax + suspensory tighten', requiredKeywordGroups: [['ciliary'], ['relax'], ['tight', 'taut', 'pull']] }, { id: 'mp2', markDescription: 'Lens becomes thinner / less convex', requiredKeywordGroups: [['thinner', 'flatter', 'less convex']] }, { id: 'mp3', markDescription: 'Circular muscles contract → pupil constricts', requiredKeywordGroups: [['circular'], ['contract'], ['constrict', 'smaller']] }] } },
  ] },
  { id: 'igbio-ex-7-3', subtopicId: 'igbio-7-3', number: 16, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] After running a marathon in warm weather, an athlete’s skin looks flushed (red) and damp with sweat.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how vasodilation and sweating work together to return core body temperature to 37 °C.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Skin arterioles dilate (vasodilation) so more blood flows through capillaries near the skin surface, increasing heat loss by radiation. Sweat glands secrete sweat onto the skin; evaporation of sweat transfers thermal energy away from the body.', markPoints: [{ id: 'mp1', markDescription: 'Arterioles dilate → more blood near surface', requiredKeywordGroups: [['arteriole', 'vasodilation'], ['surface', 'blood flow']] }, { id: 'mp2', markDescription: 'More heat lost by radiation', requiredKeywordGroups: [['heat'], ['radiation', 'lost']] }, { id: 'mp3', markDescription: 'Sweat evaporates cooling skin', requiredKeywordGroups: [['evaporat'], ['cool', 'heat', 'energy']] }] } },
  ] },
  { id: 'igbio-ex-8-1', subtopicId: 'igbio-8-1', number: 17, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] A pregnant woman attends a prenatal clinic to learn about fetal nutrition and protection.', parts: [
    { id: 'p1', label: '(a)', prompt: 'State TWO substances transferred from mother to fetus across the placenta, ONE waste product removed from fetus, and ONE function of amniotic fluid.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'To fetus: oxygen and glucose (or amino acids / antibodies). Removed: carbon dioxide (or urea). Amniotic fluid protects/cushions the fetus from mechanical shock.', markPoints: [{ id: 'mp1', markDescription: '2 useful substances (O₂, glucose, amino acids, antibodies)', requiredKeywordGroups: [['oxygen', 'o2', 'o₂'], ['glucose', 'amino', 'antibod']] }, { id: 'mp2', markDescription: 'Waste removed (CO₂ or urea)', requiredKeywordGroups: [['carbon dioxide', 'co2', 'co₂', 'urea']] }, { id: 'mp3', markDescription: 'Amniotic fluid cushions against shock', requiredKeywordGroups: [['shock', 'cushion', 'protect', 'bump']] }] } },
  ] },
  { id: 'igbio-ex-8-2', subtopicId: 'igbio-8-2', number: 18, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Red-green colour blindness is caused by a recessive X-linked allele (Xᵇ). A carrier woman (XᴮXᵇ) has children with a man with normal colour vision (XᴮY).', parts: [
    { id: 'p1', label: '(a)', prompt: 'State the four possible offspring genotypes and calculate the percentage chance that a child is colour-blind.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Genotypes: XᴮXᴮ, XᴮXᵇ, XᴮY, and XᵇY. Only XᵇY (1 out of 4) is colour-blind, so the probability is 25% (0.25).', markPoints: [{ id: 'mp1', markDescription: 'Female genotypes XᴮXᴮ and XᴮXᵇ', requiredKeywordGroups: [['xbxb', 'xᵇxᵇ', 'xᴮxᴮ', 'xᴮxᵇ']] }, { id: 'mp2', markDescription: 'Male genotypes XᴮY and XᵇY', requiredKeywordGroups: [['xby', 'xᵇy', 'xᴮy']] }, { id: 'mp3', markDescription: '25% probability', numericMatch: { value: 25, tolerance: 0.1 } }] } },
  ] },
  { id: 'igbio-ex-9-1', subtopicId: 'igbio-9-1', number: 19, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Human insulin for diabetic patients is now manufactured commercially using genetically modified bacteria.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Outline the steps used to produce recombinant plasmids containing the human insulin gene.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Cut the human insulin gene from human DNA using a restriction enzyme to leave sticky ends; cut bacterial plasmids with the SAME restriction enzyme to create complementary sticky ends; join the gene and plasmid using DNA ligase.', markPoints: [{ id: 'mp1', markDescription: 'Same restriction enzyme cuts human DNA & plasmid', requiredKeywordGroups: [['restriction'], ['plasmid']] }, { id: 'mp2', markDescription: 'Forms complementary sticky ends', requiredKeywordGroups: [['sticky end']] }, { id: 'mp3', markDescription: 'DNA ligase joins gene into plasmid', requiredKeywordGroups: [['ligase']] }] } },
  ] },
  { id: 'igbio-ex-10-1', subtopicId: 'igbio-10-1', number: 20, stimulus: '[Cambridge IGCSE 0610 Paper 4 Style] Heavy rainfall washes excess nitrate fertiliser from arable farmland into a nearby lake, killing most of the fish within three weeks.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain the biological sequence of events (eutrophication) that caused the fish to die.', kind: 'short-answer', marks: 4, rubric: { maxMarks: 4, modelAnswer: 'Excess nitrates cause rapid algal bloom on the surface, which blocks sunlight from reaching submerged aquatic plants. Submerged plants cannot photosynthesise and die; aerobic decomposer bacteria multiply and respire using up dissolved oxygen, so fish suffocate and die.', markPoints: [{ id: 'mp1', markDescription: 'Nitrates cause algal bloom', requiredKeywordGroups: [['alga'], ['bloom', 'grow', 'multiply']] }, { id: 'mp2', markDescription: 'Blocks light so submerged plants die', requiredKeywordGroups: [['light'], ['die', 'photosynthes']] }, { id: 'mp3', markDescription: 'Decomposer bacteria respire using dissolved oxygen', requiredKeywordGroups: [['bacteria', 'decomposer'], ['respir'], ['oxygen']] }, { id: 'mp4', markDescription: 'Fish die from lack of oxygen', requiredKeywordGroups: [['fish'], ['oxygen', 'suffocat', 'die']] }] } },
  ] },
];

export const IGCSE_BIOLOGY_PAST_PAPERS: PastPaperDoc[] = [
  { id: 'igbio-pp-2024-p2', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Biology (0610) Paper 2 (Extended MCQ) — May/June 2024', tier: 'Extended', series: 'May/June', paperCode: '0610/22', durationMinutes: 45, totalMarks: 40, sampleQuestions: [{ number: 'Q1', question: 'Calculate actual size of a palisade cell in μm from a 60 mm drawing at ×1,200.', marks: 1, markScheme: ['60,000 ÷ 1,200 = 50 μm.'] }, { number: 'Q2', question: 'Identify the hormone responsible for triggering ovulation on day 14.', marks: 1, markScheme: ['LH (luteinising hormone).'] }] },
  { id: 'igbio-pp-2024-p4', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Biology (0610) Paper 4 (Extended Theory) — May/June 2024', tier: 'Extended', series: 'May/June', paperCode: '0610/42', durationMinutes: 75, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Explain the full 6-step eutrophication cascade following nitrate fertiliser leaching.', marks: 6, markScheme: ['Algal bloom → blocks light → submerged plants die → aerobic decomposers respire using O₂ → fish die.'] }, { number: 'Q2', question: 'Outline recombinant plasmid creation for human insulin using restriction enzymes and DNA ligase.', marks: 5, markScheme: ['Same restriction enzyme → complementary sticky ends → DNA ligase seals plasmid → fermenter.'] }] },
  { id: 'igbio-pp-2023n-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Biology (0610) Paper 2 (Extended MCQ) — Oct/Nov 2023', tier: 'Extended', series: 'Oct/Nov', paperCode: '0610/22', durationMinutes: 45, totalMarks: 40, sampleQuestions: [{ number: 'Q1', question: 'Calculate % Adenine in a DNA sample containing 30% Guanine.', marks: 1, markScheme: ['G=C=30% → A+T=40% → A=20%.'] }, { number: 'Q2', question: 'Identify which substance turns blue DCPIP colourless.', marks: 1, markScheme: ['Vitamin C.'] }] },
  { id: 'igbio-pp-2023n-p4', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Biology (0610) Paper 4 (Extended Theory) — Oct/Nov 2023', tier: 'Extended', series: 'Oct/Nov', paperCode: '0610/42', durationMinutes: 75, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Explain eye accommodation for distant objects and pupil constriction in bright sunlight.', marks: 6, markScheme: ['Ciliary relax, suspensory tighten, lens thins; circular iris contracts, radial relaxes.'] }, { number: 'Q2', question: 'Compare active vs passive immunity and explain memory cells in vaccination.', marks: 6, markScheme: ['Active builds memory cells (long-term); passive uses ready-made antibodies (short-term).'] }] },
  { id: 'igbio-pp-2023-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Biology (0610) Paper 2 (Extended MCQ) — May/June 2023', tier: 'Extended', series: 'May/June', paperCode: '0610/22', durationMinutes: 45, totalMarks: 40, sampleQuestions: [{ number: 'Q1', question: 'Distinguish excretion from egestion and identify the organ producing urea.', marks: 1, markScheme: ['Liver produces urea by deamination; excretion removes metabolic waste.'] }, { number: 'Q2', question: 'Predict hydrogen carbonate indicator colour with a leaf in bright light.', marks: 1, markScheme: ['Purple (net CO₂ uptake by photosynthesis).'] }] },
  { id: 'igbio-pp-2023-p4', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Biology (0610) Paper 4 (Extended Theory) — May/June 2023', tier: 'Extended', series: 'May/June', paperCode: '0610/42', durationMinutes: 75, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Draw an X-linked genetic diagram for a carrier mother (XᴮXᵇ) and normal father (XᴮY).', marks: 5, markScheme: ['Offspring XᴮXᴮ, XᴮXᵇ, XᴮY, XᵇY → 25% colour-blind (50% of sons).'] }, { number: 'Q2', question: 'Explain how the kidney nephron carries out ultrafiltration and selective reabsorption.', marks: 6, markScheme: ['Glomerulus filters small solutes (not proteins); tubule reabsorbs 100% glucose by active transport.'] }] },
];

export const IGCSE_BIOLOGY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'igbkt-1', term: 'Excretion', definition: 'Removal of toxic materials, metabolic waste products (CO₂, urea), and excess substances.', topicNumber: 1, subtopicId: 'igbio-1-1', subtopicCode: '1.1' },
  { id: 'igbkt-2', term: 'Pathogen', definition: 'A microorganism or virus (fungi, bacteria, protoctists, or viruses) that causes disease.', topicNumber: 1, subtopicId: 'igbio-1-2', subtopicCode: '1.2' },
  { id: 'igbkt-3', term: 'Binomial system', definition: 'International two-part Latin naming convention using Capitalised Genus followed by lowercase species.', topicNumber: 1, subtopicId: 'igbio-1-3', subtopicCode: '1.3' },
  { id: 'igbkt-4', term: 'Magnification', definition: 'Image size divided by actual size (in the same units; 1 mm = 1,000 μm).', topicNumber: 1, subtopicId: 'igbio-1-4', subtopicCode: '1.4' },
  { id: 'igbkt-5', term: 'Osmosis', definition: 'Net movement of water from higher to lower water potential through a partially permeable membrane.', topicNumber: 2, subtopicId: 'igbio-2-1', subtopicCode: '2.1' },
  { id: 'igbkt-6', term: 'Active transport', definition: 'Movement of particles against a concentration gradient using carrier proteins and energy from respiration.', topicNumber: 2, subtopicId: 'igbio-2-1', subtopicCode: '2.1' },
  { id: 'igbkt-7', term: 'Complementary base pairing', definition: 'A pairs with T and C pairs with G across the DNA double helix.', topicNumber: 3, subtopicId: 'igbio-3-1', subtopicCode: '3.1' },
  { id: 'igbkt-8', term: 'Denaturation', definition: 'Permanent loss of an enzyme’s active-site 3D shape due to high heat or extreme pH.', topicNumber: 3, subtopicId: 'igbio-3-2', subtopicCode: '3.2' },
  { id: 'igbkt-9', term: 'Limiting factor', definition: 'Environmental factor in shortest supply restricting the rate of photosynthesis.', topicNumber: 4, subtopicId: 'igbio-4-1', subtopicCode: '4.1' },
  { id: 'igbkt-10', term: 'Translocation', definition: 'Transport of sucrose and amino acids in phloem from sources to sinks.', topicNumber: 4, subtopicId: 'igbio-4-2', subtopicCode: '4.2' },
  { id: 'igbkt-11', term: 'Emulsification', definition: 'Physical breaking of large lipid droplets into tiny droplets by bile salts to raise surface area.', topicNumber: 5, subtopicId: 'igbio-5-1', subtopicCode: '5.1' },
  { id: 'igbio-kt-12', term: 'Oxygen debt', definition: 'Extra oxygen required after vigorous exercise so the liver can oxidise lactic acid.', topicNumber: 5, subtopicId: 'igbio-5-2', subtopicCode: '5.2' },
  { id: 'igbio-kt-13', term: 'Double circulation', definition: 'Blood flows through the heart twice per complete body circuit (pulmonary and systemic).', topicNumber: 6, subtopicId: 'igbio-6-1', subtopicCode: '6.1' },
  { id: 'igbio-kt-14', term: 'Memory cell', definition: 'Long-lived lymphocyte producing rapid, massive secondary antibody responses.', topicNumber: 6, subtopicId: 'igbio-6-2', subtopicCode: '6.2' },
  { id: 'igbio-kt-15', term: 'Deamination', definition: 'Removal of the nitrogen-containing group from excess amino acids in the liver to form urea.', topicNumber: 7, subtopicId: 'igbio-7-1', subtopicCode: '7.1' },
  { id: 'igbio-kt-16', term: 'Synapse', definition: 'Microscopic junction between two neurones where diffusing neurotransmitter passes impulses one way.', topicNumber: 7, subtopicId: 'igbio-7-2', subtopicCode: '7.2' },
  { id: 'igbio-kt-17', term: 'Homeostasis', definition: 'Maintenance of a constant internal environment using negative feedback.', topicNumber: 7, subtopicId: 'igbio-7-3', subtopicCode: '7.3' },
  { id: 'igbio-kt-18', term: 'Codominance', definition: 'Expression of both alleles in a heterozygote phenotype (e.g. IᴬIᴮ giving AB blood).', topicNumber: 8, subtopicId: 'igbio-8-2', subtopicCode: '8.2' },
  { id: 'igbio-kt-19', term: 'Restriction enzyme', definition: 'Enzyme cutting DNA at specific sequences to leave complementary sticky ends for GM.', topicNumber: 9, subtopicId: 'igbio-9-1', subtopicCode: '9.1' },
  { id: 'igbio-kt-20', term: 'Eutrophication', definition: 'Nitrate-driven algal bloom, light blockage, plant death, and bacterial deoxygenation of water.', topicNumber: 10, subtopicId: 'igbio-10-1', subtopicCode: '10.1' },
];
