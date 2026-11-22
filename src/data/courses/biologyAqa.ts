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

export const BIOLOGY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Cell Biology',
    subtopics: [
      { id: 'bio-1-1', code: '1.1', slug: '1.1-cell-structure', title: 'Cell Structure', readingMinutes: 9, hasDeepContent: true },
      { id: 'bio-1-2', code: '1.2', slug: '1.2-microscopy-magnification', title: 'Microscopy & Magnification', readingMinutes: 7, hasDeepContent: true },
      { id: 'bio-1-3', code: '1.3', slug: '1.3-cell-division-mitosis', title: 'Cell Division & Mitosis', readingMinutes: 8, hasDeepContent: true },
      { id: 'bio-1-4', code: '1.4', slug: '1.4-transport-in-cells', title: 'Transport in Cells (Diffusion, Osmosis, Active Transport)', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Organisation',
    subtopics: [
      { id: 'bio-2-1', code: '2.1', slug: '2.1-enzymes-digestion', title: 'Enzymes & The Digestive System', readingMinutes: 9, hasDeepContent: true },
      { id: 'bio-2-2', code: '2.2', slug: '2.2-heart-blood-vessels', title: 'The Heart & Blood Vessels', readingMinutes: 9, hasDeepContent: true },
      { id: 'bio-2-3', code: '2.3', slug: '2.3-plant-tissues-transpiration', title: 'Plant Tissues & Transpiration', readingMinutes: 8, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Infection and Response',
    subtopics: [
      { id: 'bio-3-1', code: '3.1', slug: '3.1-communicable-diseases', title: 'Pathogens & Communicable Diseases', readingMinutes: 9, hasDeepContent: true },
      { id: 'bio-3-2', code: '3.2', slug: '3.2-immune-system-vaccines', title: 'Immune System, Vaccines & Drugs', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Bioenergetics',
    subtopics: [
      { id: 'bio-4-1', code: '4.1', slug: '4.1-photosynthesis', title: 'Photosynthesis & Limiting Factors', readingMinutes: 9, hasDeepContent: true },
      { id: 'bio-4-2', code: '4.2', slug: '4.2-respiration', title: 'Aerobic & Anaerobic Respiration', readingMinutes: 8, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Homeostasis and Response',
    subtopics: [
      { id: 'bio-5-1', code: '5.1', slug: '5.1-nervous-system-reflex-arc', title: 'The Nervous System & Reflex Arc', readingMinutes: 9, hasDeepContent: true },
      { id: 'bio-5-2', code: '5.2', slug: '5.2-hormones-blood-glucose', title: 'Endocrine System & Blood Glucose', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Inheritance, Variation and Evolution',
    subtopics: [
      { id: 'bio-6-1', code: '6.1', slug: '6.1-dna-meiosis-inheritance', title: 'DNA, Meiosis & Genetic Inheritance', readingMinutes: 10, hasDeepContent: true },
      { id: 'bio-6-2', code: '6.2', slug: '6.2-natural-selection-evolution', title: 'Natural Selection & Evolution', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 7,
    title: 'Ecology',
    subtopics: [
      { id: 'bio-7-1', code: '7.1', slug: '7.1-ecosystems-food-chains', title: 'Adaptations, Interdependence & Ecosystems', readingMinutes: 9, hasDeepContent: true },
    ],
  },
];

export const BIOLOGY_NOTES: Record<string, NoteLesson> = {
  'bio-1-1': {
    subtopicId: 'bio-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Cell Structure',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Cell Types and Cell Structure',
    youtubeId: 'qHkUOlC8Nbo',
    videoChannel: 'Cognito',
    videoDuration: '6:49',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro: Overview of Cells (Animal, Plant, Bacteria)', cardId: 'bio-1-1-c1' },
      { time: '2:37', seconds: 157, label: 'Nucleus & Animal Cell Organelles', cardId: 'bio-1-1-c2' },
      { time: '4:28', seconds: 268, label: 'Chloroplasts (Plant Cells)', cardId: 'bio-1-1-c3' },
      { time: '6:12', seconds: 372, label: 'Bacterial Flagella & Plasmids', cardId: 'bio-1-1-c4' },
    ],
    cards: [
      {
        id: 'bio-1-1-c1',
        title: 'Eukaryotic and prokaryotic cells',
        summary: 'Distinguishing complex eukaryotic cells with nuclei from smaller prokaryotic bacterial cells.',
        diagram: 'eukaryotic-vs-prokaryotic',
        bullets: [
          'All living organisms are made of cells — either complex **eukaryotic** cells or smaller, simpler **prokaryotic** cells.',
        ],
        subsections: [
          {
            heading: 'Eukaryotes vs Prokaryotes',
            bullets: [
              '**Eukaryotic cells** - found in animals, plants, fungi, and protoctists; genetic material (DNA) is enclosed inside a membrane-bound nucleus.',
              '**Prokaryotic cells** - bacteria are 10–100× smaller with NO nucleus; their DNA is a single circular loop floating freely in the cytoplasm alongside extra small rings called plasmids.',
            ],
            exampleHeading: 'Scale comparison (order of magnitude)',
            examples: [
              'A typical human cheek cell is ~50 μm across, whereas a bacterium like E. coli is ~1–2 μm (roughly 1 to 2 orders of magnitude smaller).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'protoctists', definition: 'Mostly single-celled eukaryotic organisms such as amoeba and certain algae that do not fit into animal, plant, or fungal kingdoms.' },
          { term: 'plasmids', definition: 'Small, circular rings of DNA found in bacteria separate from the main chromosomal loop, often carrying extra genes like antibiotic resistance.' },
        ],
        memoryAid: 'Pro means NO (no nucleus) and Eu means DO (do have a nucleus)!',
      },
      {
        id: 'bio-1-1-c2',
        title: 'Animal cells',
        summary: 'Functions of the five core organelles found inside every animal cell.',
        bullets: [
          'Animal cells contain five essential sub-cellular structures working together to keep the cell alive.',
        ],
        subsections: [
          {
            heading: 'Five Animal Cell Structures',
            bullets: [
              '**Nucleus** - holds genetic material (DNA) organised into chromosomes and controls cellular activities.',
              '**Cytoplasm** - gel-like substance where most enzyme-controlled chemical reactions happen.',
              '**Cell membrane** - holds the cell together and controls which substances enter and leave.',
              '**Mitochondria** - site of aerobic respiration, transferring the energy the cell needs to work.',
              '**Ribosomes** - tiny structures where proteins are synthesised from amino acids.',
            ],
          },
        ],
      },
      {
        id: 'bio-1-1-c3',
        title: 'Plant cells',
        summary: 'The three extra structures present in plant and algal cells alongside animal organelles.',
        bullets: [
          'Plant and algal cells have all five animal cell structures PLUS three extra organelles for support and making food.',
        ],
        subsections: [
          {
            heading: 'Three Extra Plant Structures',
            bullets: [
              '**Cell wall** - rigid outer layer made of cellulose that strengthens and supports the cell.',
              '**Permanent vacuole** - filled with cell sap (weak sugar and salt solution) to keep the cell turgid.',
              '**Chloroplasts** - contain green chlorophyll pigment to absorb light energy for photosynthesis.',
            ],
            exampleHeading: 'Root hair cell exception',
            examples: [
              'Underground root hair cells are plant cells that lack chloroplasts because they receive no sunlight for photosynthesis.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'photosynthesis', definition: 'Endothermic reaction inside chloroplasts where carbon dioxide and water are converted into glucose and oxygen using light energy.' },
        ],
        commonMistake: 'Students often write that a plant cell has a cell wall instead of a cell membrane. Instead, a plant cell has BOTH: the rigid cellulose cell wall sits outside the cell membrane.',
      },
      {
        id: 'bio-1-1-c4',
        title: 'Bacterial cells',
        summary: 'Structure of prokaryotic bacteria including circular chromosomal DNA and plasmids.',
        diagram: 'bacterial-cell',
        bullets: [
          'Bacterial cells possess cytoplasm, a cell membrane, ribosomes, and a non-cellulose cell wall, with NO nucleus, NO chloroplasts, and NO membrane-bound organelles.',
          'Some bacteria also carry a whip-like flagellum for swimming or a protective slime capsule.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Eukaryotic cell', definition: 'Complex cell containing genetic material enclosed within a membrane-bound nucleus.' },
      { term: 'Prokaryotic cell', definition: 'Smaller, simpler single-celled organism without a nucleus, containing a free circular DNA loop.' },
      { term: 'Ribosome', definition: 'Tiny sub-cellular organelle where amino acids are joined to synthesise proteins.' },
      { term: 'Plasmid', definition: 'Small ring of DNA separate from the main chromosome in bacteria.' },
    ],
    checklistPoints: [
      'Eukaryotic cells have a nucleus and membrane-bound sub-cellular structures, while prokaryotic cells are smaller and have no nucleus.',
      'Animal cells contain a nucleus, cytoplasm, cell membrane, mitochondria and ribosomes.',
      'Plant cells have all the structures of an animal cell, plus a cellulose cell wall, a permanent vacuole and chloroplasts.',
      'Bacterial cells are prokaryotic, with a single circular loop of DNA in the cytoplasm and optional plasmids.',
    ],
  },

  'bio-1-2': {
    subtopicId: 'bio-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Microscopy & Magnification',
    readingMinutes: 7,
    videoTitle: 'GCSE Biology - What is Microscopy?',
    youtubeId: 'PB97svr7Ye8',
    videoChannel: 'Cognito',
    videoDuration: '4:39',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Microscopy', cardId: 'bio-1-2-c1' },
      { time: '1:24', seconds: 84, label: 'Object vs Image Size', cardId: 'bio-1-2-c2' },
      { time: '2:10', seconds: 130, label: 'How Light Microscopes Work', cardId: 'bio-1-2-c1' },
      { time: '3:20', seconds: 200, label: 'Resolution & Electron Microscopes', cardId: 'bio-1-2-c3' },
    ],
    cards: [
      {
        id: 'bio-1-2-c1',
        title: 'Light vs Electron Microscopes',
        summary: 'Comparing light and electron microscopes on magnification, resolution, and live specimens.',
        diagram: 'microscope',
        bullets: [
          'Microscopes let biologists visualise sub-cellular structures by increasing both **magnification** and **resolution**.',
        ],
        subsections: [
          {
            heading: 'Comparing Both Microscope Types',
            bullets: [
              '**Light microscopes** - pass visible light through glass lenses (up to ~×1,500–2,000); relatively cheap, portable, and can view living cells in colour.',
              '**Electron microscopes** - use a beam of electrons to achieve over ×1,000,000 magnification and far higher resolution, revealing ribosomes, plasmids, and internal membrane folds.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'resolution', definition: 'The ability of a microscope to distinguish two closely spaced points as separate, sharp objects.' },
          { term: 'magnification', definition: 'How many times larger a microscope image appears compared with the real object (I ÷ A).' },
        ],
        memoryAid: 'M is for Magnify (make bigger) and R is for Resolve (make sharper detail)!',
      },
      {
        id: 'bio-1-2-c2',
        title: 'The Magnification Equation & Unit Conversions',
        summary: 'Applying I = A × M and converting accurately between mm, μm, and nm.',
        bullets: [
          'Always convert image size and actual size into the **same unit** before applying **Magnification = Image size ÷ Actual size**.',
        ],
        subsections: [
          {
            heading: 'SI Unit Ladder & Worked Example',
            bullets: [
              '**Unit conversions (×1,000 each step down)** - 1 mm = 1,000 μm; 1 μm = 1,000 nm (divide by 1,000 going up).',
              '**Rearranging** - I = A × M, M = I ÷ A, and A = I ÷ M.',
            ],
            exampleHeading: 'Worked example: Onion cell magnification',
            examples: [
              'An onion cell image measures 45 mm with a ruler and its actual length is 90 μm.',
              'Convert 45 mm × 1,000 = 45,000 μm → M = 45,000 ÷ 90 = ×500.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'micrometres', definition: 'One thousandth of a millimetre (1 mm = 1,000 μm), standard unit for measuring cell diameters.' },
        ],
        commonMistake: 'Students often divide 45 mm directly by 90 μm without converting units, getting 0.5 instead of ×500. Always convert mm into micrometres (×1,000) first!',
      },
      {
        id: 'bio-1-2-c3',
        title: 'Required Practical: Preparing & Viewing an Onion Slide',
        summary: 'Staining, lowering the coverslip at 45°, and focusing safely from lowest power.',
        bullets: [
          'Preparing a clear onion epidermis slide requires careful staining and avoiding trapped air bubbles.',
        ],
        subsections: [
          {
            heading: 'Step-by-Step Slide Preparation',
            bullets: [
              '**Mount & stain** - place a thin single layer of onion epidermis onto a drop of water, add iodine solution to stain nuclei and cell walls, and lower the coverslip gently at 45° to avoid air bubbles.',
              '**Safe focusing** - clip the slide onto the stage, select the LOWEST-power objective lens first, move the stage up while watching from the side, then focus slowly using coarse and fine focus dials.',
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Magnification', definition: 'How many times larger the image looks compared to the real object (I ÷ A).' },
      { term: 'Resolution', definition: 'The ability to distinguish between two separate points that are very close together.' },
      { term: 'Micrometre (μm)', definition: 'One thousandth of a millimetre (1 mm = 1,000 μm; 1 × 10⁻⁶ m).' },
      { term: 'Order of magnitude', definition: 'Factor of 10 difference in size between two biological structures.' },
    ],
    checklistPoints: [
      'Electron microscopes have much higher magnification and resolution than light microscopes.',
      'Use I = A × M and ensure Image size and Actual size are in identical units before dividing.',
      'Outline how to stain an onion slide and focus safely from the lowest-power objective lens.',
    ],
  },

  'bio-1-3': {
    subtopicId: 'bio-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Cell Division & Mitosis',
    readingMinutes: 8,
    videoTitle: 'GCSE Biology - Mitosis | Chromosomes | Cell Division | Cytokinesis',
    youtubeId: 'UsovRxQAUZ4',
    videoChannel: 'Cognito',
    videoDuration: '5:28',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction: Why Cells Divide', cardId: 'bio-1-3-c1' },
      { time: '1:23', seconds: 83, label: 'DNA, Genes & Chromosomes', cardId: 'bio-1-3-c1' },
      { time: '2:24', seconds: 144, label: 'Mitosis: Chromosome Alignment & Separation', cardId: 'bio-1-3-c2' },
      { time: '3:03', seconds: 183, label: 'Purpose & Outcome of Mitosis', cardId: 'bio-1-3-c3' },
    ],
    cards: [
      {
        id: 'bio-1-3-c1',
        title: 'The Cell Cycle & Mitosis',
        summary: 'Interphase DNA replication, chromosome separation, and cytokinesis forming two identical cells.',
        diagram: 'mitosis-cycle',
        bullets: [
          'Human body (diploid) cells contain **23 pairs of chromosomes (46 total)** inside the nucleus.',
        ],
        subsections: [
          {
            heading: 'Three Stages of the Cell Cycle',
            bullets: [
              '**Stage 1: Interphase (growth & replication)** - cell grows larger, increases organelle numbers, and replicates its DNA so every chromosome forms two identical copies.',
              '**Stage 2: Mitosis** - one full set of chromosomes is pulled to each end of the cell and the nucleus divides.',
              '**Stage 3: Cytokinesis** - cytoplasm and cell membrane divide to produce TWO genetically identical daughter cells for growth and tissue repair.',
            ],
            exampleHeading: 'Worked example: Calculating time spent in mitosis',
            examples: [
              'If a cell cycle lasts 24 hours and 15% of observed root-tip cells are undergoing mitosis, mitosis lasts 0.15 × 24 = 3.6 hours.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Mitosis', definition: 'Stage of the cell cycle where replicated chromosomes are pulled apart and the nucleus divides to give two identical cells.' },
          { term: 'Cytokinesis', definition: 'Final division of cytoplasm and cell membrane to separate two newly formed daughter cells.' },
        ],
        memoryAid: 'Mitosis Makes My Toes — identical body cells for growth and repair!',
      },
      {
        id: 'bio-1-3-c2',
        title: 'Stem Cells & Differentiation',
        summary: 'Comparing embryonic, adult bone marrow, and plant meristem stem cells.',
        bullets: [
          '**Stem cells** are undifferentiated cells that can divide to make more stem cells or differentiate into specialised cells.',
        ],
        subsections: [
          {
            heading: 'Three Sources of Stem Cells',
            bullets: [
              '**Embryonic stem cells** - can differentiate into ANY human cell type; potential to treat diabetes or paralysis, though raises ethical debates over human embryos.',
              '**Adult stem cells (bone marrow)** - can differentiate only into limited cell types (such as blood cells) with fewer ethical objections.',
              '**Plant meristems** - found in root and shoot tips; can differentiate into ANY plant cell throughout the plant’s entire life, allowing fast cloning of rare or disease-resistant crops.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'meristems', definition: 'Growing tissues at plant root and shoot tips containing undifferentiated stem cells able to form any plant cell.' },
        ],
      },
      {
        id: 'bio-1-3-c3',
        title: 'Therapeutic Cloning & Risks',
        summary: 'Matching patient DNA in therapeutic cloning and balancing risks of viral transfer.',
        bullets: [
          'In **therapeutic cloning**, an embryo is produced with the exact same genes as the patient so transplanted stem cells are NOT rejected by the immune system.',
        ],
        subsections: [
          {
            heading: 'Evaluating Stem Cell Treatments',
            bullets: [
              '**Benefits** - could replace damaged nerve cells (paralysis) or insulin-producing pancreatic cells (Type 1 diabetes) without rejection.',
              '**Risks & ethics** - potential transfer of viral infections from lab cultures, plus religious or ethical concerns that an embryo is a potential human life.',
            ],
          },
        ],
        commonMistake: 'Students often say adult bone marrow stem cells can turn into any body cell. Instead, ONLY embryonic stem cells (and plant meristems) can form any cell type; adult bone marrow cells are restricted.',
      },
    ],
    keyTerms: [
      { term: 'Mitosis', definition: 'Cell division producing two genetically identical daughter cells for growth and repair.' },
      { term: 'Chromosome', definition: 'Coiled length of DNA in the nucleus carrying a large number of genes.' },
      { term: 'Meristem', definition: 'Region of undifferentiated stem cells in plants capable of differentiating into any plant cell throughout its life.' },
      { term: 'Therapeutic cloning', definition: 'Producing an embryo genetically identical to a patient so stem cells will not be rejected.' },
    ],
    checklistPoints: [
      'Before mitosis, the cell grows, increases organelles, and duplicates its DNA.',
      'Mitosis produces two genetically identical daughter cells for growth and repair.',
      'Compare embryonic, adult bone marrow, and plant meristem stem cells plus therapeutic cloning.',
    ],
  },

  'bio-1-4': {
    subtopicId: 'bio-1-4',
    subtopicCode: '1.4',
    subtopicTitle: 'Transport in Cells (Diffusion, Osmosis, Active Transport)',
    readingMinutes: 10,
    videoTitle: 'What is Diffusion? How Does it Work? What Factors Affect it?',
    youtubeId: 'lxHMJaXOzP4',
    videoChannel: 'Cognito',
    videoDuration: '5:18',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Diffusion', cardId: 'bio-1-4-c1' },
      { time: '1:43', seconds: 103, label: 'Diffusion in Gases and Liquids', cardId: 'bio-1-4-c1' },
      { time: '3:16', seconds: 196, label: 'Factors Affecting Diffusion Rate: Concentration Gradient', cardId: 'bio-1-4-c2' },
      { time: '4:25', seconds: 265, label: 'Factors Affecting Diffusion Rate: Surface Area', cardId: 'bio-1-4-c3' },
    ],
    cards: [
      {
        id: 'bio-1-4-c1',
        title: 'Diffusion & Surface Area to Volume Ratio',
        summary: 'Passive diffusion factors and exchange-surface adaptations in multicellular organisms.',
        bullets: [
          '**Diffusion** is the net passive spreading out of particles from an area of higher concentration to lower concentration down a **concentration gradient**.',
        ],
        subsections: [
          {
            heading: 'Factors & Exchange Surface Adaptations',
            bullets: [
              '**Three rate factors** - steeper concentration gradient, higher temperature (faster particle kinetic energy), and larger membrane surface area.',
              '**SA : V ratio** - small single-celled organisms have a huge SA : V ratio; large multicellular organisms have a small SA : V ratio so need alveoli, villi, gills, and leaves with large surface area, thin walls, rich blood supply, and ventilation.',
            ],
            exampleHeading: 'Worked example: SA : V ratio of a 2 cm cube vs 4 cm cube',
            examples: [
              '2 cm cube: SA = 24 cm², V = 8 cm³ → SA : V = 3 : 1.',
              '4 cm cube: SA = 96 cm², V = 64 cm³ → SA : V = 1.5 : 1 (drops as size grows!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'concentration gradient', definition: 'The difference in concentration of a substance between two adjacent regions.' },
        ],
      },
      {
        id: 'bio-1-4-c2',
        title: 'Osmosis & Potato Cylinder Practical',
        summary: 'Water movement across partially permeable membranes and computing % mass change.',
        diagram: 'osmosis-membrane',
        bullets: [
          '**Osmosis** is the diffusion of WATER molecules from a dilute solution to a more concentrated solution across a **partially permeable membrane**.',
        ],
        subsections: [
          {
            heading: 'AQA Potato Osmosis Required Practical',
            bullets: [
              '**Procedure** - blot potato cylinders dry, weigh initial mass, immerse in a range of sucrose concentrations for 30 min, blot dry again, and record final mass.',
              '**Percentage change in mass** - ((Final − Initial) ÷ Initial) × 100%; where the line of best fit crosses 0% change gives the potato’s internal sugar concentration.',
            ],
            exampleHeading: 'Worked example: % mass change of a potato cylinder',
            examples: [
              'Initial mass = 2.50 g; final mass in pure water = 2.85 g.',
              '% change = ((2.85 − 2.50) ÷ 2.50) × 100 = +14.0% (water entered by osmosis).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'partially permeable membrane', definition: 'A membrane with tiny pores that allows small water molecules through while blocking larger solute molecules like sucrose.' },
        ],
        commonMistake: 'Students often say "water moves from high solute concentration to low solute concentration". Instead, water moves from DILUTE (high water concentration) to CONCENTRATED (low water concentration)!',
      },
      {
        id: 'bio-1-4-c3',
        title: 'Active Transport',
        summary: 'Energy-requiring transport against a concentration gradient in roots and gut villi.',
        bullets: [
          '**Active transport** moves dissolved ions or sugars from a more dilute to a more concentrated solution (AGAINST a concentration gradient), requiring energy from cellular respiration.',
        ],
        subsections: [
          {
            heading: 'Two Essential GCSE Examples',
            bullets: [
              '**Plant root hair cells** - absorb dilute mineral ions (like nitrates and magnesium) from soil into higher-concentration root cell sap.',
              '**Small intestine villi** - absorb glucose into the bloodstream even when blood sugar concentration is higher than in the gut lumen.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Active transport', definition: 'Movement of ions or molecules against a concentration gradient using energy transferred from respiration.' },
        ],
        memoryAid: 'Diffusion & Osmosis go DOWN the hill for FREE; Active transport climbs UP the hill using RESPIRATION energy!',
      },
    ],
    keyTerms: [
      { term: 'Diffusion', definition: 'Spreading out of particles resulting in net movement from higher to lower concentration.' },
      { term: 'Osmosis', definition: 'Movement of water from a dilute to a more concentrated solution across a partially permeable membrane.' },
      { term: 'Active transport', definition: 'Movement of ions or molecules against a concentration gradient using energy from respiration.' },
      { term: 'Turgid', definition: 'Swollen and firm state of a plant cell when water enters by osmosis and pushes against the cell wall.' },
    ],
    checklistPoints: [
      'Diffusion and osmosis are passive; active transport requires energy from aerobic respiration.',
      'Osmosis applies specifically to water moving across a partially permeable membrane.',
      'Calculate percentage change in mass to fairly compare potato cylinders of slightly different starting masses.',
    ],
  },

  'bio-2-1': {
    subtopicId: 'bio-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Enzymes & The Digestive System',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Digestive Enzymes',
    youtubeId: 'G2y6_VShnwc',
    videoChannel: 'Cognito',
    videoDuration: '4:24',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Enzymes Involved in Digestion', cardId: 'bio-2-1-c1' },
      { time: '1:11', seconds: 71, label: 'Carbohydrate Digestion (Starch)', cardId: 'bio-2-1-c2' },
      { time: '2:38', seconds: 158, label: 'Lipid Digestion & Bile', cardId: 'bio-2-1-c2' },
      { time: '3:24', seconds: 204, label: 'Where Digestive Enzymes are Made', cardId: 'bio-2-1-c3' },
    ],
    cards: [
      {
        id: 'bio-2-1-c1',
        title: 'Enzyme Action & Denaturation',
        summary: 'Lock-and-key active site specificity and irreversible denaturation at high heat or extreme pH.',
        diagram: 'enzyme-lock-key',
        bullets: [
          'Enzymes are biological protein catalysts that speed up reactions without being used up.',
        ],
        subsections: [
          {
            heading: 'Lock & Key + Temperature/pH Effects',
            bullets: [
              '**Lock and key model** - only a substrate with a complementary shape fits into the enzyme’s uniquely shaped active site.',
              '**Denaturation** - above the optimum temperature or at extreme pH, bonds holding the protein fold break so the active site changes shape and the substrate no longer fits.',
            ],
            exampleHeading: 'Worked example: Amylase & pH Required Practical',
            examples: [
              'Mix starch and amylase at different pH buffers (pH 5, 6, 7, 8, 9) and test drops on a spotting tile with orange-brown iodine every 30 s.',
              'At optimum pH (~7), starch breaks down fastest so iodine stops turning blue-black in the shortest time.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'active site', definition: 'The uniquely shaped pocket on an enzyme molecule where its complementary substrate binds.' },
          { term: 'Denaturation', definition: 'Irreversible change in the shape of an enzyme’s active site caused by high temperature or extreme pH.' },
        ],
        commonMistake: 'Students often write that enzymes are "killed" at high temperatures. Instead, enzymes are non-living protein molecules — ALWAYS say they are DENATURED!',
      },
      {
        id: 'bio-2-1-c2',
        title: 'Digestive Enzymes & Bile',
        summary: 'Carbohydrase, protease, and lipase breakdown reactions plus the two functions of bile.',
        bullets: [
          'Digestion breaks large insoluble food polymers into small soluble molecules that can be absorbed into the bloodstream.',
        ],
        subsections: [
          {
            heading: 'Three Enzyme Classes & Bile',
            bullets: [
              '**Carbohydrases (e.g. amylase)** - break starch into simple sugars (maltose/glucose); made in salivary glands, pancreas, and small intestine.',
              '**Proteases (e.g. pepsin)** - break proteins into amino acids; made in stomach, pancreas, and small intestine.',
              '**Lipases** - break lipids (fats) into glycerol + fatty acids; made in pancreas and small intestine.',
              '**Bile (NOT an enzyme!)** - made in the liver and stored in the gall bladder; neutralises acidic stomach chyme (giving alkaline optimum pH for small-intestine enzymes) AND emulsifies fats into tiny droplets to maximise surface area for lipase.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'emulsifies', definition: 'Physically breaks large fat globules into tiny droplets to dramatically increase surface area for lipase digestion.' },
        ],
        memoryAid: 'Bile does two things: Neutralises stomach acid + Emulsifies fats (made in Liver, stored in Gall bladder)!',
      },
      {
        id: 'bio-2-1-c3',
        title: 'Standard Food Tests Required Practical',
        summary: 'Reagents and colour changes for starch, reducing sugars, proteins, and lipids.',
        bullets: [
          'Four qualitative chemical tests identify biological molecules in food samples.',
        ],
        subsections: [
          {
            heading: 'Four Food Tests & Positive Results',
            bullets: [
              '**Starch (Iodine solution)** - orange-brown → blue-black.',
              '**Reducing sugars (Benedict’s solution + water bath heating)** - blue → green → yellow → brick-red precipitate.',
              '**Proteins (Biuret reagent)** - blue → purple/lilac.',
              '**Lipids (Sudan III or ethanol emulsion)** - Sudan III forms a bright red top layer; ethanol + water forms a cloudy white emulsion.',
            ],
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Active site', definition: 'The uniquely shaped pocket on an enzyme where the complementary substrate binds.' },
      { term: 'Denatured', definition: 'Permanent loss of an enzyme’s active site shape caused by excessive heat or extreme pH.' },
      { term: 'Emulsify', definition: 'Breaking large fat globules into tiny droplets to increase surface area for faster lipase digestion.' },
      { term: 'Amylase', definition: 'Carbohydrase enzyme breaking starch down into simple sugars.' },
    ],
    checklistPoints: [
      'Enzymes are protein catalysts with a specific active site complementary to their substrate.',
      'Extreme temperature or pH denatures the active site (never write "killed").',
      'Bile neutralises hydrochloric acid and emulsifies fats (it is not an enzyme!) and recall all 4 food tests.',
    ],
  },

  'bio-2-2': {
    subtopicId: 'bio-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'The Heart & Blood Vessels',
    readingMinutes: 9,
    videoTitle: 'The Circulatory System & The Heart',
    youtubeId: '31nyaBdC-q8',
    videoChannel: 'Cognito',
    videoDuration: '6:51',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Circulation', cardId: 'bio-2-2-c1' },
      { time: '1:23', seconds: 83, label: 'Double Circulatory System', cardId: 'bio-2-2-c1' },
      { time: '3:27', seconds: 207, label: 'Naming the Heart Chambers & Valves', cardId: 'bio-2-2-c2' },
      { time: '5:48', seconds: 348, label: 'Coronary Arteries & Blood Flow', cardId: 'bio-2-2-c3' },
    ],
    cards: [
      {
        id: 'bio-2-2-c1',
        title: 'The Heart, Pacemaker & Coronary Heart Disease',
        summary: 'Double circulation through four heart chambers, pacemaker cells, and CHD treatments.',
        bullets: [
          'Humans have a **double circulatory system**: the right ventricle pumps deoxygenated blood to the lungs (pulmonary artery), while the thick-walled left ventricle pumps oxygenated blood to the entire body (aorta).',
        ],
        subsections: [
          {
            heading: 'Heart Control & CHD Treatments',
            bullets: [
              '**Natural pacemaker** - a group of pacemaker cells in the right atrium wall sends regular electrical impulses setting resting heart rate.',
              '**Coronary heart disease (CHD)** - fatty plaques narrow coronary arteries supplying heart muscle; treated with stents (wire mesh tubes holding arteries open), statins (daily pills lowering LDL cholesterol), replacement valves, or transplants.',
            ],
            exampleHeading: 'Worked example: Blood flow rate',
            examples: [
              'If 1,650 mL of blood flows through an artery in 3 minutes, blood flow rate = 1,650 ÷ 3 = 550 mL/min.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pacemaker cells', definition: 'Specialised group of cells in the right atrium that generate regular electrical impulses controlling heart contraction rate.' },
          { term: 'stents', definition: 'Tiny expandable metal mesh tubes inserted into narrowed coronary arteries to keep them open for blood flow.' },
        ],
        memoryAid: 'LORD on heart diagrams: Left = Oxygenated, Right = Deoxygenated (and Arteries go Away!).',
      },
      {
        id: 'bio-2-2-c2',
        title: 'Arteries, Capillaries & Veins',
        summary: 'Comparing vessel wall thickness, lumen size, and valves to blood pressure and exchange.',
        bullets: [
          'Each blood vessel type is structurally specialised for its blood pressure and exchange role.',
        ],
        subsections: [
          {
            heading: 'Three Blood Vessel Types',
            bullets: [
              '**Arteries (high pressure, away from heart)** - thick muscular walls, elastic fibres that stretch and recoil, and a narrow lumen.',
              '**Capillaries (substance exchange)** - microscopic vessels with permeable walls ONE cell thick for an ultra-short diffusion distance.',
              '**Veins (low pressure, back to heart)** - thinner walls, a wide lumen for low resistance, and one-way valves preventing backflow.',
            ],
          },
        ],
        commonMistake: 'Students often think all arteries carry oxygenated blood. Instead, the pulmonary ARTERY carries DEOXYGENATED blood away from the heart to the lungs!',
      },
      {
        id: 'bio-2-2-c3',
        title: 'Blood Components & Functions',
        summary: 'Roles of plasma, red blood cells, immune leucocytes, and clotting platelets.',
        bullets: [
          'Blood is a specialised tissue consisting of liquid plasma carrying red blood cells, immune defenders, and platelets.',
        ],
        subsections: [
          {
            heading: 'Four Blood Components',
            bullets: [
              '**Plasma** - pale yellow liquid transporting dissolved CO₂, urea, glucose, amino acids, hormones, antibodies, and blood cells.',
              '**Red blood cells** - biconcave discs (large SA : V), no nucleus (extra space), packed with haemoglobin binding oxygen as oxyhaemoglobin.',
              '**Immune defence cells & platelets** - phagocytes engulf pathogens and lymphocytes secrete antibodies/antitoxins; platelets are cell fragments that clot wounds to stop bleeding and block microbes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'oxyhaemoglobin', definition: 'Bright red reversible compound formed in the lungs when oxygen binds to haemoglobin inside red blood cells.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Double circulation', definition: 'Circulatory system in which blood passes through the heart twice per complete circuit.' },
      { term: 'Pacemaker', definition: 'Group of cells in the right atrium regulating resting heart rate with electrical signals.' },
      { term: 'Stent', definition: 'Metal mesh tube keeping a narrowed coronary artery open.' },
      { term: 'Statin', definition: 'Medication taken daily to reduce blood LDL cholesterol levels and slow fatty plaque formation.' },
    ],
    checklistPoints: [
      'Trace oxygenated and deoxygenated blood through all four heart chambers and four major vessels.',
      'Compare artery, capillary, and vein structures directly to their blood pressure and exchange roles.',
      'Evaluate stents, statins, valve replacements, and transplants for treating cardiovascular disease.',
    ],
  },

  'bio-2-3': {
    subtopicId: 'bio-2-3',
    subtopicCode: '2.3',
    subtopicTitle: 'Plant Tissues & Transpiration',
    readingMinutes: 8,
    videoTitle: 'GCSE Biology - Transpiration & Translocation',
    youtubeId: 's06FvGH3QJo',
    videoChannel: 'Cognito',
    videoDuration: '5:17',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Mass Transport Systems', cardId: 'bio-2-3-c1' },
      { time: '1:26', seconds: 86, label: 'Xylem Structure and Function', cardId: 'bio-2-3-c2' },
      { time: '2:47', seconds: 167, label: 'Factors Affecting Transpiration Rate', cardId: 'bio-2-3-c3' },
      { time: '3:39', seconds: 219, label: 'Air Flow and Humidity', cardId: 'bio-2-3-c3' },
    ],
    cards: [
      {
        id: 'bio-2-3-c1',
        title: 'Plant Organs & Leaf Tissue Layers',
        summary: 'Cuticle, palisade mesophyll, spongy air spaces, and stomatal guard cells.',
        diagram: 'root-hair-vs-palisade',
        bullets: [
          'A leaf is an organ whose layered tissues maximise light absorption and gas exchange while limiting water loss.',
        ],
        subsections: [
          {
            heading: 'Leaf Tissues Top to Bottom',
            bullets: [
              '**Waxy cuticle & upper epidermis** - waterproof cuticle cuts evaporation; transparent epidermis lets light reach chloroplasts below.',
              '**Palisade & spongy mesophyll** - tightly packed palisade cells are loaded with chloroplasts; spongy mesophyll has air spaces for rapid CO₂ diffusion.',
              '**Stomata & guard cells** - pairs of guard cells open stomata in bright light (turgid) and close them in darkness or drought (flaccid).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'guard cells', definition: 'Pairs of specialised epidermal cells flanking each stoma that change turgidity to open or close the pore.' },
        ],
      },
      {
        id: 'bio-2-3-c2',
        title: 'Xylem & Phloem Transport Systems',
        summary: 'Upward water transport in dead lignified xylem vs bidirectional translocation in living phloem.',
        bullets: [
          'Vascular bundles contain two contrasting transport tissues running from roots to leaves.',
        ],
        subsections: [
          {
            heading: 'Xylem vs Phloem',
            bullets: [
              '**Xylem (transpiration stream)** - hollow dead tubes with no end walls, strengthened by spiral rings of woody lignin, carrying water and mineral ions UPWARDS only.',
              '**Phloem (translocation)** - living elongated cells with perforated sieve plates transporting dissolved sugars in BOTH directions for respiration or storage.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'translocation', definition: 'Movement of dissolved sugars through living phloem vessels from leaves to growing or storage regions.' },
          { term: 'lignin', definition: 'Strong waterproof woody polymer reinforcing dead xylem vessel walls so they withstand transpiration tension.' },
        ],
        memoryAid: 'Xylem = Water up Dead lignified tubes; Phloem = Phood (sugars) both ways in Living sieve tubes!',
      },
      {
        id: 'bio-2-3-c3',
        title: 'Transpiration & Environmental Factors',
        summary: 'How light, temperature, wind speed, and humidity change potometer transpiration rate.',
        bullets: [
          'Transpiration is the evaporation of water from leaf mesophyll cells and diffusion of water vapour out through open stomata.',
        ],
        subsections: [
          {
            heading: 'Four Environmental Factors',
            bullets: [
              '**Light, temperature & air flow (all INCREASE rate)** - brighter light opens stomata; warmer air gives water molecules more kinetic energy; wind sweeps away humid air to steepen the gradient.',
              '**Humidity (DECREASES rate)** - moist surrounding air reduces the water vapour concentration gradient out of the leaf.',
            ],
            exampleHeading: 'Worked example: Measuring rate with a potometer',
            examples: [
              'An air bubble moves 36 mm along a capillary tube in 12 minutes → rate of water uptake = 36 ÷ 12 = 3.0 mm/min.',
            ],
          },
        ],
        commonMistake: 'Students often think higher humidity speeds up transpiration. Instead, higher HUMIDITY DECREASES transpiration while light, heat, and wind all INCREASE it!',
      },
    ],
    keyTerms: [
      { term: 'Xylem', definition: 'Hollow dead lignified tubes transporting water and mineral ions from roots to leaves.' },
      { term: 'Phloem', definition: 'Living sieve-tube vessels transporting dissolved sugars throughout the plant.' },
      { term: 'Transpiration', definition: 'Evaporation and diffusion of water vapour out of plant leaves through stomata.' },
      { term: 'Translocation', definition: 'Transport of dissolved food (sugars) through phloem tissue.' },
    ],
    checklistPoints: [
      'Relate each leaf tissue (cuticle, epidermis, palisade, spongy, xylem, phloem, guard cells) to its function.',
      'Compare xylem (transpiration, dead, lignin, one-way) with phloem (translocation, living, sieve plates, two-way).',
      'Explain how light intensity, temperature, air flow, and humidity change the rate of transpiration.',
    ],
  },

  'bio-3-1': {
    subtopicId: 'bio-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Pathogens & Communicable Diseases',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Communicable Disease',
    youtubeId: 'coYwh7fdTh8',
    videoChannel: 'Cognito',
    videoDuration: '3:43',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Microorganisms and Pathogens', cardId: 'bio-3-1-c1' },
      { time: '0:49', seconds: 49, label: 'How Pathogens Spread', cardId: 'bio-3-1-c2' },
      { time: '1:46', seconds: 106, label: 'How to Stop Pathogens Spreading (Prevention)', cardId: 'bio-3-1-c3' },
      { time: '2:49', seconds: 169, label: 'Summary of Communicable Diseases', cardId: 'bio-3-1-c3' },
    ],
    cards: [
      {
        id: 'bio-3-1-c1',
        title: 'Four Types of Pathogens & How They Make Us Ill',
        summary: 'How bacteria, viruses, fungi, and protists spread and damage host tissues.',
        diagram: 'virus-particle',
        bullets: [
          'Pathogens are microorganisms (bacteria, viruses, fungi, protists) causing infectious communicable diseases spread by air, water, direct contact, or vectors.',
        ],
        subsections: [
          {
            heading: 'Bacterial Toxins vs Viral Cell Lysis',
            bullets: [
              '**Bacteria** - divide rapidly by binary fission and secrete poisonous toxins that damage tissues and trigger symptoms.',
              '**Viruses** - invade living host cells, hijack cellular machinery to replicate thousands of copies, and burst (lyse) the host cell.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'toxins', definition: 'Poisonous chemicals released by pathogenic bacteria that damage host cells and trigger illness symptoms.' },
        ],
      },
      {
        id: 'bio-3-1-c2',
        title: 'Key AQA Viral & Bacterial Diseases',
        summary: 'Symptoms, transmission, and control of Measles, HIV, TMV, Salmonella, and Gonorrhoea.',
        bullets: [
          'AQA expects exact pathogen type, spread route, symptoms, and prevention for each named disease.',
        ],
        subsections: [
          {
            heading: 'Viral & Bacterial Named Examples',
            bullets: [
              '**Measles & HIV (Viruses)** - Measles spreads by sneeze droplets (fever, red rash; MMR vaccine). HIV spreads via bodily fluids/sexual contact, attacks immune cells leading to AIDS, and is controlled by antiretroviral drugs.',
              '**TMV (Plant Virus)** - Tobacco Mosaic Virus causes mosaic leaf patches, destroying chloroplasts and stunting growth.',
              '**Salmonella & Gonorrhoea (Bacteria)** - Salmonella food poisoning from undercooked poultry causes fever, cramps, vomiting, and diarrhoea (UK chickens vaccinated). Gonorrhoea STI causes yellow/green discharge and pain urinating; prevented by condoms and treated with antibiotics.',
            ],
            exampleHeading: 'Control strategy match',
            examples: [
              'Vaccinating UK poultry breaks the Salmonella food-chain transmission before meat reaches consumers.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'antiretroviral', definition: 'Medicine that slows HIV replication inside body cells to prevent progression to AIDS.' },
        ],
      },
      {
        id: 'bio-3-1-c3',
        title: 'Fungal & Protist Diseases + First-Line Body Defences',
        summary: 'Rose Black Spot, Malaria protist vectors, and physical/chemical human barriers.',
        bullets: [
          'Before the immune system responds, non-specific barriers block most pathogens from entering the body.',
        ],
        subsections: [
          {
            heading: 'Rose Black Spot, Malaria & Body Barriers',
            bullets: [
              '**Rose Black Spot (Fungus)** - purple/black leaf spots turn leaves yellow and drop early, cutting photosynthesis; treated with fungicides and burning fallen leaves.',
              '**Malaria (Protist)** - carried by female mosquito vectors causing recurrent fever; prevented by nets, draining stagnant water, and antimalarials.',
              '**Non-specific human defences** - skin (physical barrier + antimicrobial secretions), nose hairs & trachea cilia/mucus (trap and sweep microbes away), and stomach hydrochloric acid (kills swallowed pathogens).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'vectors', definition: 'Living organisms such as mosquitoes that transmit pathogens between hosts without getting the disease themselves.' },
        ],
        memoryAid: '4 non-specific defences: Skin, Nose hairs, Trachea cilia + mucus, Stomach HCl!',
        commonMistake: 'Students often say mosquitoes cause malaria. Instead, Malaria is caused by a PROTIST pathogen — the mosquito is only the VECTOR!',
      },
    ],
    keyTerms: [
      { term: 'Communicable disease', definition: 'Infectious disease caused by a pathogen that can spread between organisms.' },
      { term: 'Vector', definition: 'Organism (e.g. mosquito) that carries and transmits a pathogen from one host to another.' },
      { term: 'Toxin', definition: 'Harmful chemical produced by bacteria that damages host tissues.' },
      { term: 'Antiretroviral', definition: 'Drug that slows replication of HIV inside the body to stop progression to AIDS.' },
    ],
    checklistPoints: [
      'Explain how bacteria (toxins) and viruses (cell lysis) cause illness differently.',
      'Recall symptoms, transmission, and control methods for Measles, HIV, TMV, Salmonella, Gonorrhoea, Rose Black Spot, and Malaria.',
      'Describe how skin, nose, trachea/bronchi mucus & cilia, and stomach acid defend against pathogen entry.',
    ],
  },

  'bio-3-2': {
    subtopicId: 'bio-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Immune System, Vaccines & Drugs',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Immune System & Defences | Types of White Blood Cell',
    youtubeId: 'k1oCiR9Y2zQ',
    videoChannel: 'Cognito',
    videoDuration: '4:57',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: "Intro to Body's Defence System", cardId: 'bio-3-2-c1' },
      { time: '0:49', seconds: 49, label: 'Physical & Chemical Barriers: Nose, Mouth & Airways', cardId: 'bio-3-2-c1' },
      { time: '2:27', seconds: 147, label: 'Phagocytosis & Antibodies', cardId: 'bio-3-2-c2' },
      { time: '3:55', seconds: 235, label: 'Antibody Specificity & Immune Memory', cardId: 'bio-3-2-c3' },
    ],
    cards: [
      {
        id: 'bio-3-2-c1',
        title: 'Immune Responses & Vaccination',
        summary: 'Phagocytosis, specific antibodies, antitoxins, vaccination, and herd immunity.',
        bullets: [
          'Immune cells destroy invading pathogens via three mechanisms: **phagocytosis**, specific **antibodies**, and **antitoxins**.',
        ],
        subsections: [
          {
            heading: 'How Vaccination Creates Immunity',
            bullets: [
              '**Three immune actions** - phagocytes engulf and digest pathogens; lymphocytes make complementary antibodies to pathogen antigens; antitoxins neutralise bacterial toxins.',
              '**Vaccination & memory** - injecting dead or inactive pathogens teaches lymphocytes to produce complementary antibodies rapidly if the live pathogen enters later, stopping illness before symptoms start.',
              '**Herd immunity** - when most of a population is vaccinated, transmission breaks down, protecting vulnerable unvaccinated individuals.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'antitoxins', definition: 'Specific chemicals secreted by lymphocytes to bind and counteract poisonous bacterial toxins.' },
          { term: 'phagocytosis', definition: 'The engulfing and enzymatic digestion of invading pathogens by phagocyte immune cells.' },
        ],
      },
      {
        id: 'bio-3-2-c2',
        title: 'Antibiotics, Painkillers & Drug Discovery',
        summary: 'Why antibiotics kill bacteria not viruses, painkillers, and natural drug origins.',
        bullets: [
          'Antibiotics (e.g. penicillin) cure bacterial infections without harming human cells — they CANNOT kill viruses because viruses live inside host cells.',
        ],
        subsections: [
          {
            heading: 'Painkillers, Resistance & Historic Origins',
            bullets: [
              '**Painkillers (aspirin, paracetamol)** - relieve symptoms like pain and fever without killing pathogens.',
              '**Three natural origins** - Digitalis heart drug (foxgloves), Aspirin (willow bark), and Penicillin (discovered by Alexander Fleming from Penicillium mould).',
            ],
            exampleHeading: 'Preventing MRSA resistance',
            examples: [
              'Doctors avoid prescribing antibiotics for viral colds, and patients finish full courses so resistant bacteria are not left behind to multiply.',
            ],
          },
        ],
        commonMistake: 'Students often write that "people become immune to antibiotics". Instead, it is the BACTERIA that mutate and evolve resistance to the antibiotic!',
      },
      {
        id: 'bio-3-2-c3',
        title: 'Developing & Testing New Drugs (Clinical Trials)',
        summary: 'Preclinical and double-blind clinical trials testing toxicity, efficacy, and optimum dose.',
        bullets: [
          'Every new medicine must pass rigorous **preclinical** and **clinical** stages before licensing.',
        ],
        subsections: [
          {
            heading: 'Preclinical vs Double-Blind Clinical Trials',
            bullets: [
              '**Three criteria (T-E-D)** - Toxicity (safety), Efficacy (does it work?), and Optimum Dose.',
              '**Preclinical** - tested on lab cells/tissues, then live animals.',
              '**Clinical** - low doses on healthy volunteers first (safety), then larger patient groups split randomly into real drug vs **placebo** in a **double-blind** trial (neither patient nor doctor knows who got which, removing bias).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'placebo', definition: 'An inactive dummy tablet identical in appearance to the real medicine, used as a control in clinical trials.' },
        ],
        memoryAid: 'Test drugs for T-E-D: Toxicity (safe?), Efficacy (works?), Dose (how much?)!',
      },
    ],
    keyTerms: [
      { term: 'Phagocytosis', definition: 'Engulfing and enzymatic digestion of pathogens by phagocytes.' },
      { term: 'Vaccination', definition: 'Introducing dead or inactive pathogens to stimulate antibody and memory cell production.' },
      { term: 'Antibiotic', definition: 'Medicine such as penicillin that kills infective bacteria inside the body (ineffective against viruses).' },
      { term: 'Double-blind trial', definition: 'Clinical test where neither doctor nor patient knows who receives the real drug vs placebo, eliminating bias.' },
    ],
    checklistPoints: [
      'Describe all three immune roles (phagocytosis, antibodies, antitoxins) and herd immunity.',
      'Distinguish antibiotics from painkillers and state the origins of digitalis, aspirin, and penicillin.',
      'Outline preclinical and clinical double-blind trial stages testing toxicity, efficacy, and dose.',
    ],
  },

  'bio-4-1': {
    subtopicId: 'bio-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Photosynthesis & Limiting Factors',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Photosynthesis',
    youtubeId: 'cucQtak-jco',
    videoChannel: 'Cognito',
    videoDuration: '4:05',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Photosynthesis', cardId: 'bio-4-1-c1' },
      { time: '0:28', seconds: 28, label: 'Photosynthesis Equation', cardId: 'bio-4-1-c1' },
      { time: '1:12', seconds: 72, label: 'Obtaining Reactants & Limiting Factors', cardId: 'bio-4-1-c2' },
      { time: '3:13', seconds: 193, label: 'Photosynthesis Rate & Uses of Glucose', cardId: 'bio-4-1-c3' },
    ],
    cards: [
      {
        id: 'bio-4-1-c1',
        title: 'Equations & Endothermic Energy Transfer',
        summary: 'Endothermic photosynthesis word and balanced symbol equations inside chloroplasts.',
        diagram: 'photosynthesis-chloroplast',
        bullets: [
          'Photosynthesis is an **endothermic** reaction inside chloroplasts where chlorophyll absorbs light energy to build glucose.',
        ],
        subsections: [
          {
            heading: 'Word & Balanced Symbol Equations',
            bullets: [
              '**Word equation** - Carbon dioxide + Water → (light) Glucose + Oxygen.',
              '**Balanced symbol equation** - 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'endothermic', definition: 'A reaction that takes energy in from the surroundings (photosynthesis absorbs light energy).' },
        ],
      },
      {
        id: 'bio-4-1-c2',
        title: 'Limiting Factors & Inverse Square Law (Higher)',
        summary: 'Reading limiting factor graphs and applying I ∝ 1/d² for lamp distance.',
        bullets: [
          'The four **limiting factors** are light intensity, CO₂ concentration, temperature, and amount of chlorophyll.',
        ],
        subsections: [
          {
            heading: 'Graph Plateaus & Inverse Square Law',
            bullets: [
              '**Reading graphs** - on the rising slope, the x-axis factor is limiting; on the flat plateau, a different factor is limiting; above ~45 °C, enzymes denature and rate plunges to zero.',
              '**Inverse square law (Higher)** - light intensity ∝ 1 ÷ distance²: doubling lamp distance cuts light intensity to one quarter (¼).',
            ],
            exampleHeading: 'Worked example: Moving a pondweed lamp from 10 cm to 20 cm',
            examples: [
              'At 10 cm: relative intensity = 1 ÷ 10² = 0.01 (arbitrary units).',
              'At 20 cm (2× distance): 1 ÷ 20² = 0.0025 — exactly one quarter of the original intensity!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'inverse square law', definition: 'Mathematical relationship showing light intensity is proportional to 1 divided by distance squared (I ∝ 1/d²).' },
          { term: 'limiting factors', definition: 'Environmental factors in shortest supply that restrict the rate of photosynthesis.' },
        ],
        commonMistake: 'Students often claim moving a lamp twice as far away halves light intensity. Instead, because distance is SQUARED (1/d²), doubling distance cuts intensity to ONE QUARTER!',
      },
      {
        id: 'bio-4-1-c3',
        title: 'Uses of Glucose & Commercial Greenhouses',
        summary: 'Five biological uses of glucose and balancing commercial greenhouse costs vs yield.',
        bullets: [
          'Plants convert glucose into five essential products and growers manipulate limiting factors for profit.',
        ],
        subsections: [
          {
            heading: 'Five Uses of Glucose & Greenhouses',
            bullets: [
              '**Five uses** - (1) Respiration, (2) Insoluble starch for storage, (3) Fats/oils in seeds, (4) Cellulose for cell walls, (5) Combined with soil nitrate ions to make amino acids for proteins.',
              '**Commercial greenhouses** - use artificial lighting, paraffin heaters (raising both temperature AND CO₂), and ventilation, stopping at the point where extra input cost outweighs extra crop yield.',
            ],
          },
        ],
        memoryAid: '5 uses of glucose = R-S-F-C-A (Respiration, Starch, Fats, Cellulose, Amino acids)!',
      },
    ],
    keyTerms: [
      { term: 'Endothermic reaction', definition: 'Reaction that takes in energy from its surroundings — photosynthesis absorbs light energy.' },
      { term: 'Limiting factor', definition: 'Factor in shortest supply that restricts the rate of photosynthesis at a given moment.' },
      { term: 'Inverse square law', definition: 'Light intensity decreases proportionally to 1 ÷ distance².' },
      { term: 'Chlorophyll', definition: 'Green pigment in chloroplasts that absorbs light energy for photosynthesis.' },
    ],
    checklistPoints: [
      'Photosynthesis equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
      'Rate increases with light, CO₂, and temperature until enzymes denature or another factor limits it.',
      'Recall all five biological uses of glucose and apply the inverse square law (1/d²).',
    ],
  },

  'bio-4-2': {
    subtopicId: 'bio-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Aerobic & Anaerobic Respiration',
    readingMinutes: 8,
    videoTitle: 'Aerobic & Anaerobic Respiration',
    youtubeId: 'xzDAZUZido0',
    videoChannel: 'Cognito',
    videoDuration: '5:16',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Cellular Respiration', cardId: 'bio-4-2-c1' },
      { time: '1:28', seconds: 88, label: 'How Organisms Use Energy', cardId: 'bio-4-2-c1' },
      { time: '3:11', seconds: 191, label: 'Anaerobic Respiration & Lactic Acid', cardId: 'bio-4-2-c2' },
      { time: '4:03', seconds: 243, label: 'Anaerobic Respiration in Plants & Yeast', cardId: 'bio-4-2-c3' },
    ],
    cards: [
      {
        id: 'bio-4-2-c1',
        title: 'Aerobic vs Anaerobic Respiration',
        summary: 'Exothermic aerobic respiration vs muscle lactic acid and yeast fermentation equations.',
        bullets: [
          'Respiration is an **exothermic** reaction happening continuously in every living cell to transfer energy for chemical synthesis, muscle movement, and keeping warm.',
        ],
        subsections: [
          {
            heading: 'Three Core Respiration Equations',
            bullets: [
              '**Aerobic (with O₂)** - Glucose + Oxygen → Carbon dioxide + Water (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O); complete oxidation transferring LOTS of energy.',
              '**Anaerobic in muscles** - Glucose → Lactic acid; incomplete oxidation transferring MUCH LESS energy.',
              '**Anaerobic in plants/yeast (fermentation)** - Glucose → Ethanol + Carbon dioxide; used in brewing (ethanol) and baking (CO₂ makes bread dough rise).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fermentation', definition: 'Anaerobic respiration in yeast converting glucose into ethanol and carbon dioxide, used in baking and brewing.' },
        ],
        commonMistake: 'Students often write that respiration "creates" or "produces" energy. Instead, energy cannot be created — ALWAYS write that respiration RELEASES or TRANSFERS energy!',
      },
      {
        id: 'bio-4-2-c2',
        title: 'Response to Exercise & Oxygen Debt (Higher)',
        summary: 'Cardiovascular responses during exercise and repaying oxygen debt in the liver.',
        bullets: [
          'During exercise, heart rate, breathing rate, and breath volume all INCREASE to deliver more oxygenated blood and glucose to contracting muscles and clear CO₂ faster.',
        ],
        subsections: [
          {
            heading: 'Lactic Acid & Repaying Oxygen Debt',
            bullets: [
              '**Muscle fatigue** - during intense sprinting, insufficient O₂ forces anaerobic respiration, building up lactic acid so muscles stop contracting efficiently.',
              '**Oxygen debt (Higher)** - the extra oxygen needed after exercise to react with lactic acid; blood carries lactic acid to the LIVER, where it is converted back into glucose.',
            ],
            exampleHeading: 'Post-sprint recovery',
            examples: [
              'Sprinters keep breathing deeply and rapidly after crossing the finish line to take in extra oxygen and clear lactic acid via the liver.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'oxygen debt', definition: 'The amount of extra oxygen the body needs after vigorous exercise to convert accumulated lactic acid back to glucose in the liver.' },
        ],
      },
      {
        id: 'bio-4-2-c3',
        title: 'Metabolism',
        summary: 'Metabolism as the sum of all enzyme-controlled building and breakdown reactions.',
        bullets: [
          '**Metabolism** is the sum of ALL chemical reactions occurring inside a cell or whole organism.',
        ],
        subsections: [
          {
            heading: 'Key Metabolic Reactions',
            bullets: [
              '**Synthesis reactions** - turning glucose into starch, glycogen, and cellulose; joining 1 glycerol + 3 fatty acids into lipids; combining glucose + nitrate ions into amino acids for proteins.',
              '**Breakdown reactions** - cellular respiration and breaking down excess proteins into urea in the liver for excretion by the kidneys.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Metabolism', definition: 'The sum of all enzyme-controlled chemical reactions taking place inside a cell or organism.' },
        ],
        memoryAid: 'Aerobic = Complete + Lots of energy; Anaerobic = Incomplete + Less energy (Lactic acid in animals, Ethanol + CO₂ in yeast)!',
      },
    ],
    keyTerms: [
      { term: 'Exothermic reaction', definition: 'Chemical reaction that transfers energy out to its surroundings (such as cellular respiration).' },
      { term: 'Anaerobic respiration', definition: 'Incomplete breakdown of glucose without oxygen, releasing far less energy than aerobic respiration.' },
      { term: 'Fermentation', definition: 'Anaerobic respiration in yeast producing ethanol and carbon dioxide.' },
      { term: 'Oxygen debt', definition: 'Extra oxygen needed post-exercise to convert lactic acid back to glucose in the liver.' },
    ],
    checklistPoints: [
      'Write equations for aerobic respiration, muscle anaerobic respiration, and yeast fermentation.',
      'Explain why heart rate, breathing rate, and breath volume increase during exercise.',
      'Define oxygen debt and metabolism with five examples of metabolic reactions.',
    ],
  },

  'bio-5-1': {
    subtopicId: 'bio-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'The Nervous System & Reflex Arc',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - The Nervous System | Reflex Arcs Explained',
    youtubeId: 'BnsZo4j1YvU',
    videoChannel: 'Cognito',
    videoDuration: '5:08',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro & Overview of the Nervous System', cardId: 'bio-5-1-c1' },
      { time: '1:16', seconds: 76, label: 'Synapses: Connecting Neurones', cardId: 'bio-5-1-c2' },
      { time: '2:15', seconds: 135, label: 'Sensory and Motor Pathways: Information Flow', cardId: 'bio-5-1-c2' },
      { time: '3:41', seconds: 221, label: 'Example Reflex Arc Pathway: Touching a Pin', cardId: 'bio-5-1-c3' },
    ],
    cards: [
      {
        id: 'bio-5-1-c1',
        title: 'Homeostasis & The Nervous System',
        summary: 'Internal condition control via receptors, coordination centres, and effectors.',
        bullets: [
          '**Homeostasis** regulates internal conditions (blood glucose, body temperature, water levels) to maintain optimum conditions for enzyme action.',
        ],
        subsections: [
          {
            heading: 'Components of Control Systems',
            bullets: [
              '**Receptors** - specialised cells detecting changes (stimuli) in the environment.',
              '**Coordination centres** - brain, spinal cord (CNS), and pancreas receive and process information.',
              '**Effectors** - muscles (which contract) or glands (which secrete hormones) carrying out the response.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Homeostasis', definition: 'Regulation of internal body conditions to maintain optimum conditions for enzyme action and cell function.' },
        ],
      },
      {
        id: 'bio-5-1-c2',
        title: 'The Reflex Arc & Synapses',
        summary: 'Automatic reflex neurone order and chemical neurotransmitter diffusion across synapses.',
        diagram: 'reflex-arc',
        bullets: [
          'Reflex actions are rapid and automatic, bypassing conscious brain areas to protect the body from injury.',
        ],
        subsections: [
          {
            heading: 'Reflex Pathway & Chemical Synapses',
            bullets: [
              '**Pathway order** - Stimulus → Receptor → Sensory neurone → Relay neurone (in spinal cord) → Motor neurone → Effector → Response.',
              '**Synapse transmission** - an electrical impulse arriving at a synapse triggers release of chemical **neurotransmitters** that diffuse across the gap and bind to the next neurone, starting a new electrical impulse.',
            ],
            exampleHeading: 'Worked example: Touching a hot pan',
            examples: [
              'Heat receptors in skin fire → sensory neurone → relay neurone in spinal cord → motor neurone → arm bicep muscle contracts, pulling the hand away automatically.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'neurotransmitters', definition: 'Chemical messengers that diffuse across a synapse between two neurones to trigger a new electrical impulse.' },
          { term: 'synapse', definition: 'A microscopic junction/gap between two adjacent neurones.' },
        ],
        memoryAid: 'Order of neurones in a reflex arc: S → R → M (Sensory → Relay → Motor)!',
      },
      {
        id: 'bio-5-1-c3',
        title: 'Required Practical: Investigating Reaction Time',
        summary: 'Fair-test controls in the ruler-drop practical measuring caffeine or distraction effects.',
        bullets: [
          'The ruler-drop practical measures catch distance (cm) converted to reaction time (s).',
        ],
        subsections: [
          {
            heading: 'Fair Test Controls & Variables',
            bullets: [
              '**Control variables** - same dominant hand, forearm resting on desk, 0 cm aligned with thumb/index finger, dropped without warning in a quiet room, and multiple repeats to remove anomalies and find a mean.',
              '**Factors** - stimulants (caffeine) shorten reaction time; fatigue, alcohol, or distractions lengthen it.',
            ],
          },
        ],
        commonMistake: 'Students often say an electrical impulse jumps across the synapse. Instead, transmission ALONG a neurone is ELECTRICAL, while transmission ACROSS a synapse is CHEMICAL (diffusion of neurotransmitters)!',
      },
    ],
    keyTerms: [
      { term: 'Synapse', definition: 'Tiny junction between two neurones across which neurotransmitters diffuse.' },
      { term: 'Effector', definition: 'Muscle (which contracts) or gland (which secretes hormones) that carries out a response.' },
      { term: 'Homeostasis', definition: 'Regulation of internal body conditions to maintain optimum enzyme function.' },
      { term: 'Reflex arc', definition: 'Automatic neural pathway bypassing conscious brain areas to prevent injury.' },
    ],
    checklistPoints: [
      'Reflex pathway order: Stimulus → Receptor → Sensory neurone → Relay neurone → Motor neurone → Effector → Response.',
      'Neurotransmitters diffuse across synapses to pass signals between neurones.',
      'Design a fair ruler-drop practical controlling hand, drop height, and repeating for a mean.',
    ],
  },

  'bio-5-2': {
    subtopicId: 'bio-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Endocrine System & Blood Glucose',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - Regulating Glucose | Glucose & Glycogen & Glucagon | Blood Glucose Graphs',
    youtubeId: 'r8zVXKbtbFs',
    videoChannel: 'Cognito',
    videoDuration: '4:50',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Blood Glucose Control', cardId: 'bio-5-2-c1' },
      { time: '1:35', seconds: 95, label: 'How Insulin Lowers Blood Glucose', cardId: 'bio-5-2-c2' },
      { time: '2:39', seconds: 159, label: 'Glucagon vs Glycogen', cardId: 'bio-5-2-c2' },
      { time: '3:36', seconds: 216, label: 'Negative Feedback Loop Summary', cardId: 'bio-5-2-c3' },
    ],
    cards: [
      {
        id: 'bio-5-2-c1',
        title: 'The Endocrine System & Pituitary Master Gland',
        summary: 'Blood-borne hormones from glands and why the pituitary is the master gland.',
        bullets: [
          'Endocrine glands secrete chemical messenger **hormones** directly into the bloodstream; compared with nerves, hormonal effects start slower but last much longer.',
        ],
        subsections: [
          {
            heading: 'Master Gland & Target Organs',
            bullets: [
              '**Pituitary gland** - called the "master gland" because it secretes several hormones (FSH, LH, TSH) that act on other glands to trigger further hormone release.',
              '**Key glands** - pituitary, thyroid, pancreas, adrenal glands, ovaries, and testes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hormones', definition: 'Chemical messengers secreted by endocrine glands directly into the blood to act on specific target organs.' },
        ],
      },
      {
        id: 'bio-5-2-c2',
        title: 'Blood Glucose Negative Feedback & Diabetes',
        summary: 'Insulin vs glucagon negative feedback and contrasting Type 1 with Type 2 diabetes.',
        bullets: [
          'The pancreas monitors blood glucose and maintains steady levels via **negative feedback**.',
        ],
        subsections: [
          {
            heading: 'Insulin, Glucagon & Diabetes Types',
            bullets: [
              '**Blood glucose TOO HIGH** - pancreas secretes INSULIN → liver and muscle cells absorb glucose and convert excess into insoluble **glycogen**.',
              '**Blood glucose TOO LOW (Higher)** - pancreas secretes GLUCAGON → liver breaks glycogen back down into glucose released into blood.',
              '**Type 1 vs Type 2 diabetes** - Type 1: pancreas fails to produce enough insulin (treated with insulin injections). Type 2: body cells stop responding to insulin (obesity risk factor; treated with carbohydrate-controlled diet and exercise).',
            ],
            exampleHeading: 'After a sugary meal vs fasting',
            examples: [
              'After eating pasta, blood glucose spikes → insulin rises → excess stored as liver glycogen until blood glucose returns to normal.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'glycogen', definition: 'Insoluble storage carbohydrate formed from excess glucose in liver and muscle cells.' },
          { term: 'negative feedback', definition: 'Control loop where any deviation from normal triggers a corrective response returning levels to the set point.' },
        ],
        commonMistake: 'Students often mix up the three G-words: GLUCOSE (blood sugar), GLYCOGEN (liver storage polymer), and GLUCAGON (pancreatic hormone that raises blood sugar)!',
      },
      {
        id: 'bio-5-2-c3',
        title: 'Menstrual Cycle, Contraception, Thyroxine & Adrenaline',
        summary: 'FSH, LH, oestrogen, and progesterone interactions plus IVF, thyroxine, and adrenaline.',
        bullets: [
          'Four hormones coordinate the 28-day menstrual cycle and allow hormonal contraception and fertility treatments.',
        ],
        subsections: [
          {
            heading: 'Reproductive & Metabolic Hormones',
            bullets: [
              '**Menstrual cycle** - FSH (pituitary) matures an egg and stimulates oestrogen; Oestrogen (ovaries) thickens uterus lining, inhibits FSH, and triggers LH; LH (pituitary) triggers ovulation; Progesterone maintains lining and inhibits FSH/LH.',
              '**Contraception & IVF** - pills/implants inhibit FSH so no eggs mature; condoms physically block sperm; IVF uses FSH + LH to mature multiple eggs for lab fertilisation.',
              '**Thyroxine & Adrenaline** - thyroxine regulates basal metabolic rate by negative feedback; adrenaline increases heart rate and oxygen/glucose delivery for "fight or flight".',
            ],
          },
        ],
        memoryAid: 'FSH = Follicle Starts Here; LH = Launches egg (ovulation); Progesterone = Protects uterus lining!',
      },
    ],
    keyTerms: [
      { term: 'Pituitary gland', definition: 'Master endocrine gland in the brain secreting hormones that control other glands.' },
      { term: 'Insulin', definition: 'Pancreatic hormone lowering blood glucose by triggering uptake and conversion to glycogen.' },
      { term: 'Glucagon', definition: 'Pancreatic hormone raising blood glucose by stimulating breakdown of glycogen into glucose.' },
      { term: 'Negative feedback', definition: 'Control loop where a change away from normal triggers a corrective response returning levels to normal.' },
    ],
    checklistPoints: [
      'Compare nervous and hormonal control and explain why the pituitary is called the master gland.',
      'Explain negative feedback control of blood glucose by insulin and glucagon, and contrast Type 1 vs Type 2 diabetes.',
      'Explain how FSH, LH, oestrogen, and progesterone interact in the menstrual cycle, contraception, and IVF.',
    ],
  },

  'bio-6-1': {
    subtopicId: 'bio-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'DNA, Meiosis & Genetic Inheritance',
    readingMinutes: 10,
    videoTitle: 'GCSE Biology - DNA Part 1 | Chromosomes & Genome',
    youtubeId: 'fy2F8yFxqOI',
    videoChannel: 'Cognito',
    videoDuration: '5:40',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to DNA', cardId: 'bio-6-1-c1' },
      { time: '0:48', seconds: 48, label: 'Chromosomes & Meiosis Link', cardId: 'bio-6-1-c1' },
      { time: '2:28', seconds: 148, label: 'What is a Gene?', cardId: 'bio-6-1-c2' },
      { time: '4:02', seconds: 242, label: 'Applications of Genome Sequencing', cardId: 'bio-6-1-c3' },
    ],
    cards: [
      {
        id: 'bio-6-1-c1',
        title: 'Meiosis & Sexual vs Asexual Reproduction',
        summary: 'Two-stage meiosis producing four genetically varied haploid gametes vs asexual clones.',
        bullets: [
          'Sexual reproduction fuses male and female haploid **gametes** formed by meiosis, producing genetic variation; asexual reproduction uses mitosis alone to make identical clones.',
        ],
        subsections: [
          {
            heading: 'Meiosis Step-by-Step',
            bullets: [
              '**DNA copies once, cell divides TWICE** - produces FOUR genetically different gametes, each carrying HALF the normal chromosome number (23 in humans).',
              '**Fertilisation** - restores the full diploid number (46 chromosomes) and begins rapid mitosis to form an embryo.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'gametes', definition: 'Haploid sex cells (sperm and egg in animals; pollen and egg cells in plants) carrying half the normal chromosome number.' },
        ],
        memoryAid: 'Mitosis = 2 identical diploid cells; Meiosis = 4 varied haploid gametes ("Meiosis makes ME!").',
      },
      {
        id: 'bio-6-1-c2',
        title: 'DNA, The Genome & Genetic Terminology',
        summary: 'DNA double helix, genes, human genome applications, and allele vocabulary.',
        bullets: [
          'DNA is a two-stranded polymer coiled into a double helix; a **gene** is a short section of DNA coding for a specific sequence of amino acids to build a protein.',
        ],
        subsections: [
          {
            heading: 'Core Inheritance Vocabulary',
            bullets: [
              '**Genome** - the entire genetic material of an organism; mapping the human genome helps identify inherited disease genes, develop treatments, and trace ancient human migration.',
              '**Alleles, genotype & phenotype** - alleles are alternative forms of a gene; homozygous = two identical alleles (BB or bb), heterozygous = two different alleles (Bb). Dominant alleles always express; recessive alleles express only when homozygous (bb).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Genome', definition: 'The complete set of genetic material contained inside an organism.' },
          { term: 'Alleles', definition: 'Different versions of the same gene controlling alternative forms of a characteristic.' },
        ],
      },
      {
        id: 'bio-6-1-c3',
        title: 'Punnett Squares, Inherited Disorders & Sex Determination',
        summary: 'Predicting probabilities for polydactyly, cystic fibrosis, and XX/XY sex determination.',
        bullets: [
          'Punnett squares predict exact genetic ratios for single-gene disorders and biological sex (XX female, XY male — 50% each).',
        ],
        subsections: [
          {
            heading: 'Polydactyly vs Cystic Fibrosis',
            bullets: [
              '**Polydactyly (DOMINANT)** - extra fingers/toes caused by a dominant allele (PP or Pp); no unaffected carriers exist.',
              '**Cystic fibrosis (RECESSIVE)** - thick mucus disorder of cell membranes requiring two recessive alleles (ff); two heterozygous carriers (Ff × Ff) have a 25% (1 in 4) chance per pregnancy.',
            ],
            exampleHeading: 'Worked Punnett cross: Two cystic fibrosis carriers (Ff × Ff)',
            examples: [
              'Offspring genotypes: FF (25% unaffected), Ff (50% unaffected carriers), ff (25% affected with cystic fibrosis).',
            ],
          },
        ],
        commonMistake: 'Students often assume a 25% probability means "1 of 4 children MUST have cystic fibrosis". Instead, each pregnancy is independent with a fresh 25% chance!',
      },
    ],
    keyTerms: [
      { term: 'Meiosis', definition: 'Two-stage cell division producing four genetically different haploid gametes.' },
      { term: 'Genome', definition: 'The complete set of genetic material contained in an organism.' },
      { term: 'Polydactyly', definition: 'Inherited condition causing extra fingers or toes, controlled by a dominant allele.' },
      { term: 'Cystic fibrosis', definition: 'Recessive inherited disorder of cell membranes producing thick, sticky mucus in lungs and pancreas.' },
    ],
    checklistPoints: [
      'Compare mitosis (2 identical diploid cells) with meiosis (4 varied haploid gametes).',
      'Define genome, gene, allele, dominant, recessive, homozygous, heterozygous, genotype, and phenotype.',
      'Draw Punnett squares to predict probabilities for polydactyly, cystic fibrosis, and XX/XY sex determination.',
    ],
  },

  'bio-6-2': {
    subtopicId: 'bio-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Natural Selection & Evolution',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Variation and Evolution',
    youtubeId: '4PtOgToaKP8',
    videoChannel: 'Cognito',
    videoDuration: '5:47',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Variation', cardId: 'bio-6-2-c1' },
      { time: '1:17', seconds: 77, label: 'Influence of Environment on Phenotype', cardId: 'bio-6-2-c1' },
      { time: '2:53', seconds: 173, label: 'Natural Selection & Survival of the Fittest', cardId: 'bio-6-2-c2' },
      { time: '4:48', seconds: 288, label: 'Summary of Evolution', cardId: 'bio-6-2-c3' },
    ],
    cards: [
      {
        id: 'bio-6-2-c1',
        title: 'Variation, Mutations & Natural Selection',
        summary: 'Random DNA mutations, competition, survival, reproduction, and speciation.',
        bullets: [
          'Evolution is the gradual change in inherited characteristics of a population over time via **natural selection**, which can eventually form a new species.',
        ],
        subsections: [
          {
            heading: 'Four-Step Natural Selection Mark Scheme',
            bullets: [
              '**1. Variation from mutation** - random DNA mutations create genetic variation within a population.',
              '**2. Survival advantage** - individuals with the best-adapted alleles survive competition/predation better.',
              '**3. Reproduction & inheritance** - survivors reproduce and pass advantageous alleles to offspring.',
              '**4. Frequency rises** - over many generations, the advantageous allele becomes more common; if two populations can no longer interbreed to produce fertile offspring, they are separate species.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'natural selection', definition: 'Process where individuals with advantageous inherited alleles survive and reproduce more successfully, passing those alleles to future generations.' },
        ],
      },
      {
        id: 'bio-6-2-c2',
        title: 'Selective Breeding & Genetic Engineering',
        summary: 'Artificial selection & inbreeding risks vs transferring genes in genetic engineering.',
        bullets: [
          'Humans modify crops and livestock through traditional selective breeding or modern **genetic engineering**.',
        ],
        subsections: [
          {
            heading: 'Comparing Both Technologies',
            bullets: [
              '**Selective breeding** - choose parents with desired traits (high-yield dairy cows, disease-resistant wheat) and breed over generations; risk of **inbreeding** narrows the gene pool and raises inherited defects.',
              '**Genetic engineering** - cut out a useful gene using enzymes and insert it via a vector (bacterial plasmid or virus) into another organism’s genome.',
            ],
            exampleHeading: 'Worked example: GM bacteria making human insulin',
            examples: [
              'The human insulin gene is inserted into a bacterial plasmid vector; fast-dividing GM bacteria then manufacture pure human insulin in fermenters for Type 1 diabetes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'inbreeding', definition: 'Breeding closely related organisms repeatedly, narrowing the gene pool and increasing risk of recessive genetic disorders.' },
          { term: 'genetic engineering', definition: 'Modifying an organism’s genome by introducing a useful gene from a different species.' },
        ],
        commonMistake: 'Students often say selective breeding happens in one generation or creates new alleles. Instead, selective breeding requires MANY generations and only selects from existing alleles — reducing genetic diversity.',
      },
      {
        id: 'bio-6-2-c3',
        title: 'Fossils, MRSA Resistance & Three-Domain Classification',
        summary: 'Fossil formation, incomplete record, antibiotic resistance, and Carl Woese’s domains.',
        bullets: [
          'Fossils and rapidly evolving antibiotic-resistant bacteria (like MRSA) provide direct evidence for evolution.',
        ],
        subsections: [
          {
            heading: 'Evidence & Modern Classification',
            bullets: [
              '**Fossils & gaps** - form via mineral replacement of hard parts, casts/impressions, or preservation in amber/ice/peat where decay cannot occur. Early life was soft-bodied and geological activity destroyed many fossils.',
              '**Linnaeus vs Woese** - Linnaeus grouped life by Kingdom → Phylum → Class → Order → Family → Genus → Species (binomial name). Carl Woese added the Three-Domain system: Archaea (primitive extremophiles), Bacteria (true bacteria), and Eukaryota.',
            ],
          },
        ],
        memoryAid: 'Carl Woese’s 3 Domains = A-B-E (Archaea, Bacteria, Eukaryota)!',
      },
    ],
    keyTerms: [
      { term: 'Evolution', definition: 'Change in the inherited characteristics of a population over time via natural selection.' },
      { term: 'Selective breeding', definition: 'Choosing parents with desired traits to breed together over many generations.' },
      { term: 'Genetic engineering', definition: 'Modifying an organism’s genome by introducing a gene from another organism.' },
      { term: 'Three-domain system', definition: 'Carl Woese’s classification dividing life into Archaea, Bacteria, and Eukaryota.' },
    ],
    checklistPoints: [
      'Explain natural selection step-by-step including mutations, survival, reproduction, and allele inheritance.',
      'Compare selective breeding (and inbreeding risks) with genetic engineering of insulin and GM crops.',
      'Explain how fossils form, why the fossil record is incomplete, and recall Woese’s three domains.',
    ],
  },

  'bio-7-1': {
    subtopicId: 'bio-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Adaptations, Interdependence & Ecosystems',
    readingMinutes: 9,
    videoTitle: 'GCSE Biology - Food Chains & Predator-Prey Cycles',
    youtubeId: 'e8vzQWjzjm0',
    videoChannel: 'Cognito',
    videoDuration: '5:37',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Biology (8461)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Ecosystems', cardId: 'bio-7-1-c1' },
      { time: '0:20', seconds: 20, label: 'What are Food Chains & Interdependence?', cardId: 'bio-7-1-c1' },
      { time: '2:41', seconds: 161, label: 'Predator-Prey Cycles', cardId: 'bio-7-1-c2' },
      { time: '4:40', seconds: 280, label: 'Time Lag in Predator-Prey Cycles', cardId: 'bio-7-1-c3' },
    ],
    cards: [
      {
        id: 'bio-7-1-c1',
        title: 'Communities, Abiotic/Biotic Factors & Adaptations',
        summary: 'Abiotic vs biotic factors, interdependence, adaptations, and extremophiles.',
        bullets: [
          'An ecosystem is the interaction of a community of living (**biotic**) organisms with non-living (**abiotic**) environmental factors, linked by **interdependence**.',
        ],
        subsections: [
          {
            heading: 'Abiotic, Biotic & Adaptations',
            bullets: [
              '**Abiotic (non-living)** - light intensity, temperature, moisture, soil pH/minerals, wind intensity, CO₂ (plants), O₂ (aquatic life).',
              '**Biotic (living)** - food availability, new predators, new pathogens, and competition between species.',
              '**Three adaptation types** - structural (polar bear blubber, cactus spines), behavioural (migration, basking), and functional (concentrated camel urine, antifreeze proteins); **extremophiles** survive extreme heat, pressure, or salt.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'interdependence', definition: 'Mutual reliance of species within a community for food, shelter, pollination, and seed dispersal.' },
          { term: 'extremophiles', definition: 'Microorganisms adapted to live in extreme environments of high temperature, high pressure, or high salt concentration.' },
        ],
      },
      {
        id: 'bio-7-1-c2',
        title: 'Sampling Ecosystems: Quadrats & Belt Transects',
        summary: 'Random coordinate quadrats for population totals vs belt transects across gradients.',
        bullets: [
          'Choose the sampling method based on whether you are estimating a total population or measuring distribution along an environmental gradient.',
        ],
        subsections: [
          {
            heading: 'Random Quadrats vs Belt Transects',
            bullets: [
              '**Random quadrats** - generate random coordinate pairs along two perpendicular tape measures to avoid bias: Total population = Mean per m² × Total habitat area (m²).',
              '**Belt transect** - place quadrats at regular fixed intervals along a straight tape measure to track how species abundance changes across a gradient (e.g. shade to open sun).',
              '**Predator–prey cycles** - out-of-phase oscillations where predator peaks lag slightly behind prey peaks.',
            ],
            exampleHeading: 'Worked example: Estimating daisies on a field',
            examples: [
              '10 random 1 m² quadrats give a mean of 6.5 daisies/m² on a 400 m² lawn.',
              'Estimated total population = 6.5 × 400 = 2,600 daisies.',
            ],
          },
        ],
        commonMistake: 'Students often write "throw the quadrat randomly over your shoulder". Examiners reject that — ALWAYS state "use a random number generator to pick coordinates on a grid"!',
      },
      {
        id: 'bio-7-1-c3',
        title: 'Carbon Cycle, Biodiversity & Conservation',
        summary: 'Carbon cycling, peat bog/deforestation impacts on biodiversity, and conservation.',
        bullets: [
          '**Biodiversity** is the variety of all different species in an ecosystem; high biodiversity maintains stability by reducing reliance on any single species.',
        ],
        subsections: [
          {
            heading: 'Carbon Cycle & Human Conservation',
            bullets: [
              '**Carbon cycle** - photosynthesis locks CO₂ into glucose; feeding transfers carbon; respiration (plants, animals, decomposers) and fuel combustion release CO₂ back to air.',
              '**Threats & conservation** - peat bog destruction and deforestation release stored CO₂ and destroy habitats; conservation uses breeding programmes, habitat protection, replanting hedgerows, CO₂ targets, and recycling.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Biodiversity', definition: 'The variety of all different species of organisms on Earth or within an ecosystem.' },
        ],
        memoryAid: 'Random coordinates = Population total; Regular transect = Gradient change!',
      },
    ],
    keyTerms: [
      { term: 'Abiotic factor', definition: 'Non-living physical or chemical component of an ecosystem such as temperature, light, or soil pH.' },
      { term: 'Biotic factor', definition: 'Living component affecting a community such as predators, pathogens, food supply, or competition.' },
      { term: 'Quadrat', definition: 'Square sampling frame placed at random coordinates or along a transect to count organisms.' },
      { term: 'Biodiversity', definition: 'Variety of all different species of organisms on Earth or within an ecosystem.' },
    ],
    checklistPoints: [
      'Distinguish abiotic from biotic factors and give structural, behavioural, and functional adaptations.',
      'Use random-coordinate quadrats to estimate population size and belt transects for gradients.',
      'Trace the carbon cycle and evaluate peat bog destruction, deforestation, and conservation programmes.',
    ],
  },
};

export const BIOLOGY_QUIZZES: QuizQuestion[] = [
  // bio-1-1 (5)
  { id: 'bio-q-101', subtopicId: 'bio-1-1', type: 'mcq', marks: 1, prompt: 'Which sub-cellular structure is found in bacterial cells but NOT in animal cells?', options: ['Mitochondria', 'Cell wall', 'Nucleus', 'Chloroplast'], correctIndex: 1, explanation: 'Bacterial cells have a cell wall (and optional plasmids) but lack a nucleus, mitochondria, and chloroplasts.' },
  { id: 'bio-q-102', subtopicId: 'bio-1-1', type: 'multi-select', marks: 2, selectCount: 3, prompt: 'Select the THREE structures found in a plant palisade cell that are absent from an animal cheek cell.', options: ['Chloroplasts', 'Mitochondria', 'Cellulose cell wall', 'Ribosomes', 'Permanent vacuole'], correctIndices: [0, 2, 4], explanation: 'Plant cells share the 5 animal organelles plus a cellulose cell wall, permanent vacuole, and chloroplasts.' },
  { id: 'bio-q-103', subtopicId: 'bio-1-1', type: 'diagram-label', marks: 2, prompt: 'Use the eukaryotic vs prokaryotic diagram to identify each cell type’s genetic material.', diagram: 'eukaryotic-vs-prokaryotic', labels: [{ marker: 'Eukaryotic cell DNA', options: ['Enclosed inside a membrane-bound nucleus', 'Single free circular DNA loop + plasmids'], answer: 'Enclosed inside a membrane-bound nucleus' }, { marker: 'Prokaryotic bacterial DNA', options: ['Enclosed inside a membrane-bound nucleus', 'Single free circular DNA loop + plasmids'], answer: 'Single free circular DNA loop + plasmids' }], explanation: 'Eukaryotes enclose DNA in a nucleus; prokaryotes have a free circular chromosomal loop plus optional plasmids.' },
  { id: 'bio-q-104', subtopicId: 'bio-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the functions of ribosomes and the permanent vacuole.', segments: ['Ribosomes are the site of ', ', while the permanent vacuole contains cell sap to keep plant cells ', '.'], wordBank: ['protein synthesis', 'turgid', 'photosynthesis', 'flaccid'], answers: ['protein synthesis', 'turgid'], explanation: 'Ribosomes synthesise proteins; cell sap in the permanent vacuole maintains cell turgidity.' },
  { id: 'bio-q-105', subtopicId: 'bio-1-1', type: 'short-answer', marks: 2, prompt: 'State the function of mitochondria and ribosomes inside an animal cell.', rubric: { maxMarks: 2, modelAnswer: 'Mitochondria are the site of aerobic respiration releasing energy, and ribosomes are where proteins are synthesised.', markPoints: [{ id: 'mp1', markDescription: 'Mitochondria: site of aerobic respiration / energy transfer', requiredKeywordGroups: [['respirat', 'aerobic'], ['energy']] }, { id: 'mp2', markDescription: 'Ribosomes: site of protein synthesis', requiredKeywordGroups: [['protein'], ['synthes', 'make', 'made']] }] }, explanation: 'Mitochondria carry out aerobic respiration; ribosomes carry out protein synthesis.' },

  // bio-1-2 (5)
  { id: 'bio-q-106', subtopicId: 'bio-1-2', type: 'mcq', marks: 1, prompt: 'A cell image measures 30 mm under a microscope. Its actual diameter is 60 μm. What is the magnification?', options: ['×0.5', '×50', '×500', '×5,000'], correctIndex: 2, explanation: '30 mm = 30,000 μm; Magnification = 30,000 ÷ 60 = ×500.' },
  { id: 'bio-q-107', subtopicId: 'bio-1-2', type: 'diagram-label', marks: 2, prompt: 'Use the light microscope diagram to identify the two key microscopy concepts.', diagram: 'microscope', labels: [{ marker: 'Making an image appear larger', options: ['Magnification', 'Resolution'], answer: 'Magnification' }, { marker: 'Distinguishing two close points sharply', options: ['Magnification', 'Resolution'], answer: 'Resolution' }], explanation: 'Magnification enlarges the image; resolution distinguishes fine adjacent details.' },
  { id: 'bio-q-108', subtopicId: 'bio-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the microscope unit conversions.', segments: ['There are ', ' micrometres (μm) in 1 mm, so 2.5 mm equals ', ' μm.'], wordBank: ['1,000', '2,500', '100', '250', '0.0025'], answers: ['1,000', '2,500'], explanation: 'Multiply millimetres by 1,000 to convert into micrometres.' },
  { id: 'bio-q-109', subtopicId: 'bio-1-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO advantages of an electron microscope compared with a light microscope.', options: ['Much higher magnification', 'Can observe living dividing cells in colour', 'Much higher resolution to see ribosomes and internal organelles', 'Portable and inexpensive for school labs'], correctIndices: [0, 2], explanation: 'Electron microscopes offer vastly higher magnification and resolution, though specimens must be dead in a vacuum.' },
  { id: 'bio-q-110', subtopicId: 'bio-1-2', type: 'short-answer', marks: 2, prompt: 'When preparing an onion slide, explain why iodine solution is added and why the coverslip is lowered at a 45° angle.', rubric: { maxMarks: 2, modelAnswer: 'Iodine stains the transparent cell structures (such as the nucleus and cell wall) so they are visible, and lowering the coverslip gently at 45° prevents trapping air bubbles.', markPoints: [{ id: 'mp1', markDescription: 'Iodine stains organelles/structures to make them visible', requiredKeywordGroups: [['stain', 'colour', 'visible', 'see'], ['nucleus', 'cell', 'structure']] }, { id: 'mp2', markDescription: '45° angle avoids trapping air bubbles', requiredKeywordGroups: [['air bubble', 'bubble']] }] }, explanation: 'Staining increases contrast and gentle 45° lowering avoids obstructing air bubbles.' },

  // bio-1-3 (5)
  { id: 'bio-q-111', subtopicId: 'bio-1-3', type: 'diagram-label', marks: 2, prompt: 'Use the mitosis cell cycle diagram to match each stage to its key event.', diagram: 'mitosis-cycle', labels: [{ marker: 'Interphase (Stage 1)', options: ['Cell grows, copies organelles and replicates DNA', 'Cytoplasm and membrane pinch into two cells'], answer: 'Cell grows, copies organelles and replicates DNA' }, { marker: 'Cytokinesis (Stage 3)', options: ['Cell grows, copies organelles and replicates DNA', 'Cytoplasm and membrane pinch into two cells'], answer: 'Cytoplasm and membrane pinch into two cells' }], explanation: 'Interphase copies DNA/organelles, mitosis divides chromosomes/nucleus, and cytokinesis splits cytoplasm.' },
  { id: 'bio-q-112', subtopicId: 'bio-1-3', type: 'mcq', marks: 1, prompt: 'Where are stem cells found in plants throughout their entire life?', options: ['Dead xylem vessels', 'Waxy cuticle', 'Meristems in shoot and root tips', 'Palisade mesophyll only'], correctIndex: 2, explanation: 'Plant meristems retain undifferentiated stem cells able to differentiate into any plant cell throughout life.' },
  { id: 'bio-q-113', subtopicId: 'bio-1-3', type: 'fill-blank', marks: 2, prompt: 'Complete the outcome of mitosis in human body cells.', segments: ['Mitosis divides a cell with 46 chromosomes into ', ' genetically ', ' daughter cells for growth and repair.'], wordBank: ['two', 'identical', 'four', 'different'], answers: ['two', 'identical'], explanation: 'Mitosis produces two genetically identical diploid daughter cells (46 chromosomes each).' },
  { id: 'bio-q-114', subtopicId: 'bio-1-3', type: 'matching', marks: 2, prompt: 'Match each stem cell source to its differentiation ability.', pairs: [{ left: 'Embryonic stem cells', right: 'Can differentiate into ANY human cell type' }, { left: 'Adult bone marrow stem cells', right: 'Restricted to forming certain cells such as blood cells' }, { left: 'Plant meristem cells', right: 'Can form any plant cell throughout the plant’s life' }], explanation: 'Know the differences in potency and ethics across all three stem cell sources.' },
  { id: 'bio-q-115', subtopicId: 'bio-1-3', type: 'short-answer', marks: 2, prompt: 'Explain the main medical advantage of therapeutic cloning for a patient needing stem cell treatment.', rubric: { maxMarks: 2, modelAnswer: 'The cloned embryo has the exact same genes as the patient, so transplanted stem cells are not rejected by the patient’s immune system.', markPoints: [{ id: 'mp1', markDescription: 'Same DNA/genes as the patient', requiredKeywordGroups: [['same', 'identical'], ['gene', 'dna']] }, { id: 'mp2', markDescription: 'Will not be rejected by the patient’s immune system', requiredKeywordGroups: [['reject']] }] }, explanation: 'Genetically matched stem cells avoid immune rejection.' },

  // bio-1-4 (5)
  { id: 'bio-q-116', subtopicId: 'bio-1-4', type: 'diagram-label', marks: 2, prompt: 'Use the osmosis membrane diagram to identify the direction of net water movement.', diagram: 'osmosis-membrane', labels: [{ marker: 'Water moves from', options: ['Dilute solution (high water conc.)', 'Concentrated sugar solution'], answer: 'Dilute solution (high water conc.)' }, { marker: 'Membrane type required', options: ['Partially permeable membrane', 'Impermeable cellulose wall'], answer: 'Partially permeable membrane' }], explanation: 'Osmosis moves water passively from a dilute to a more concentrated solution across a partially permeable membrane.' },
  { id: 'bio-q-117', subtopicId: 'bio-1-4', type: 'mcq', marks: 1, prompt: 'Which process moves mineral ions from dilute soil water into higher-concentration root hair cells?', options: ['Diffusion', 'Osmosis', 'Active transport', 'Transpiration'], correctIndex: 2, explanation: 'Moving ions against a concentration gradient requires active transport powered by respiration.' },
  { id: 'bio-q-118', subtopicId: 'bio-1-4', type: 'fill-blank', marks: 2, prompt: 'Complete the percentage mass change for a potato cylinder starting at 2.0 g and ending at 2.3 g.', segments: ['The potato gained 0.3 g because water entered by ', ', giving a percentage mass change of +', '%.'], wordBank: ['osmosis', '15', 'diffusion', '30', '13'], answers: ['osmosis', '15'], explanation: '(0.3 ÷ 2.0) × 100 = +15%.' },
  { id: 'bio-q-119', subtopicId: 'bio-1-4', type: 'matching', marks: 2, prompt: 'Match each transport process to its energy requirement and gradient direction.', pairs: [{ left: 'Diffusion', right: 'Passive; particles move down concentration gradient' }, { left: 'Osmosis', right: 'Passive; water moves dilute → concentrated across membrane' }, { left: 'Active transport', right: 'Requires respiration energy; moves against gradient' }], explanation: 'Separate passive gradient-downward movement from energy-requiring upward active transport.' },
  { id: 'bio-q-120', subtopicId: 'bio-1-4', type: 'short-answer', marks: 2, prompt: 'Explain why root hair cells contain large numbers of mitochondria.', rubric: { maxMarks: 2, modelAnswer: 'Mitochondria carry out aerobic respiration to release the energy needed for active transport of mineral ions against a concentration gradient.', markPoints: [{ id: 'mp1', markDescription: 'Carry out aerobic respiration to transfer/release energy', requiredKeywordGroups: [['respirat', 'energy']] }, { id: 'mp2', markDescription: 'Needed for active transport of mineral ions against gradient', requiredKeywordGroups: [['active transport'], ['mineral', 'ion', 'gradient']] }] }, explanation: 'Active transport depends directly on energy released by aerobic respiration.' },

  // bio-2-1 (5)
  { id: 'bio-q-201', subtopicId: 'bio-2-1', type: 'diagram-label', marks: 2, prompt: 'Use the enzyme lock-and-key diagram to match each component.', diagram: 'enzyme-lock-key', labels: [{ marker: 'Pocket where substrate binds', options: ['Active site', 'Product'], answer: 'Active site' }, { marker: 'Result of excessive heat (>45 °C)', options: ['Active site denatures and changes shape', 'Enzyme multiplies faster'], answer: 'Active site denatures and changes shape' }], explanation: 'High temperature breaks bonds holding the protein shape, denaturing the active site.' },
  { id: 'bio-q-202', subtopicId: 'bio-2-1', type: 'matching', marks: 3, prompt: 'Match each digestive enzyme class to its breakdown products.', pairs: [{ left: 'Carbohydrase (amylase)', right: 'Starch → simple sugars' }, { left: 'Protease', right: 'Proteins → amino acids' }, { left: 'Lipase', right: 'Lipids → glycerol + fatty acids' }], explanation: 'Know substrate, enzyme, and soluble products for all three food groups.' },
  { id: 'bio-q-203', subtopicId: 'bio-2-1', type: 'mcq', marks: 1, prompt: 'Which reagent turns from blue to purple/lilac in the presence of protein?', options: ['Iodine solution', 'Benedict’s solution', 'Biuret reagent', 'Sudan III'], correctIndex: 2, explanation: 'Biuret reagent tests for proteins (blue → purple); iodine tests starch; Benedict’s tests reducing sugars.' },
  { id: 'bio-q-204', subtopicId: 'bio-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the two digestive roles of bile.', segments: ['Bile is alkaline so it ', ' stomach hydrochloric acid, and it ', ' large fat globules into tiny droplets.'], wordBank: ['neutralises', 'emulsifies', 'digests', 'denatures'], answers: ['neutralises', 'emulsifies'], explanation: 'Bile is NOT an enzyme; it neutralises acid and physically emulsifies fats to boost surface area for lipase.' },
  { id: 'bio-q-205', subtopicId: 'bio-2-1', type: 'short-answer', marks: 2, prompt: 'Explain why amylase stops breaking down starch when heated to 70 °C.', rubric: { maxMarks: 2, modelAnswer: 'At 70 °C the enzyme becomes denatured, changing the shape of its active site so the starch substrate is no longer complementary and cannot bind.', markPoints: [{ id: 'mp1', markDescription: 'Enzyme denatures / active site changes shape', requiredKeywordGroups: [['denatur', 'active site'], ['shape', 'chang', 'denatur']] }, { id: 'mp2', markDescription: 'Substrate no longer fits / cannot bind', requiredKeywordGroups: [['substrate', 'starch'], ['not fit', 'no longer', 'cannot bind', 'complementary']] }] }, explanation: 'Never say "killed" — explain active site shape change (denaturation).' },

  // bio-2-2 (5)
  { id: 'bio-q-206', subtopicId: 'bio-2-2', type: 'mcq', marks: 1, prompt: 'Why is the muscular wall of the left ventricle much thicker than that of the right ventricle?', options: ['It stores more valves', 'It must pump oxygenated blood at higher pressure around the entire body', 'It pumps blood only the short distance to the lungs', 'It produces red blood cells'], correctIndex: 1, explanation: 'The right ventricle pumps only to the nearby lungs, whereas the left ventricle pumps to the whole body.' },
  { id: 'bio-q-207', subtopicId: 'bio-2-2', type: 'matching', marks: 3, prompt: 'Match each blood vessel type to its key structural adaptation.', pairs: [{ left: 'Arteries', right: 'Thick muscular & elastic walls for high pressure' }, { left: 'Capillaries', right: 'Permeable walls one cell thick for short diffusion' }, { left: 'Veins', right: 'Wide lumen and one-way valves to prevent backflow' }], explanation: 'Structure always links directly to pressure and exchange function.' },
  { id: 'bio-q-208', subtopicId: 'bio-2-2', type: 'fill-blank', marks: 2, prompt: 'Complete how coronary heart disease is treated.', segments: ['A ', ' is a metal mesh tube holding a narrowed coronary artery open, while ', ' are daily drugs lowering blood LDL cholesterol.'], wordBank: ['stent', 'statins', 'pacemaker', 'antibiotics'], answers: ['stent', 'statins'], explanation: 'Stents mechanically widen arteries; statins slow fatty plaque build-up by lowering LDL cholesterol.' },
  { id: 'bio-q-209', subtopicId: 'bio-2-2', type: 'mcq', marks: 1, prompt: 'Which blood vessel carries DEOXYGENATED blood away from the heart to the lungs?', options: ['Aorta', 'Pulmonary artery', 'Pulmonary vein', 'Vena cava'], correctIndex: 1, explanation: 'Arteries carry blood AWAY from the heart; the pulmonary artery takes deoxygenated blood to the lungs.' },
  { id: 'bio-q-210', subtopicId: 'bio-2-2', type: 'short-answer', marks: 2, prompt: 'Give two structural adaptations of red blood cells that help them carry oxygen efficiently.', rubric: { maxMarks: 2, modelAnswer: 'Red blood cells have a biconcave disc shape giving a large surface area to volume ratio for rapid oxygen diffusion, and have no nucleus so there is more room for haemoglobin.', markPoints: [{ id: 'mp1', markDescription: 'Biconcave shape for large surface area to volume ratio', requiredKeywordGroups: [['biconcave', 'surface area']] }, { id: 'mp2', markDescription: 'No nucleus for more room for haemoglobin', requiredKeywordGroups: [['no nucleus', 'lack a nucleus', 'without a nucleus'], ['haemoglobin', 'room', 'space']] }] }, explanation: 'Biconcave shape + no nucleus + abundant haemoglobin maximise oxygen transport.' },

  // bio-2-3 (5)
  { id: 'bio-q-211', subtopicId: 'bio-2-3', type: 'diagram-label', marks: 2, prompt: 'Use the plant cells diagram to match each cell to its primary adaptation.', diagram: 'root-hair-vs-palisade', labels: [{ marker: 'Root hair cell adaptation', options: ['Long hair-like projection giving large surface area for water/mineral uptake', 'Packed with chloroplasts near upper leaf surface'], answer: 'Long hair-like projection giving large surface area for water/mineral uptake' }, { marker: 'Palisade mesophyll cell adaptation', options: ['Long hair-like projection giving large surface area for water/mineral uptake', 'Packed with chloroplasts near upper leaf surface'], answer: 'Packed with chloroplasts near upper leaf surface' }], explanation: 'Root hair cells maximise soil absorption; palisade cells maximise light capture.' },
  { id: 'bio-q-212', subtopicId: 'bio-2-3', type: 'mcq', marks: 1, prompt: 'Which environmental change DECREASES the rate of transpiration from a plant leaf?', options: ['Higher temperature', 'Stronger wind', 'Higher humidity', 'Brighter light intensity'], correctIndex: 2, explanation: 'High humidity reduces the water vapour concentration gradient between the leaf interior and outside air.' },
  { id: 'bio-q-213', subtopicId: 'bio-2-3', type: 'fill-blank', marks: 2, prompt: 'Contrast transport in xylem and phloem vessels.', segments: ['Dead lignified ', ' tubes carry water upwards from roots, while living ', ' sieve tubes transport dissolved sugars both ways.'], wordBank: ['xylem', 'phloem', 'stomata', 'meristem'], answers: ['xylem', 'phloem'], explanation: 'Xylem carries water/minerals one-way upward; phloem carries dissolved sugars both ways (translocation).' },
  { id: 'bio-q-214', subtopicId: 'bio-2-3', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO adaptations of a plant leaf that aid rapid photosynthesis.', options: ['Palisade mesophyll packed with chloroplasts near top of leaf', 'Thick opaque upper epidermis blocking light', 'Spongy mesophyll air spaces allowing fast CO₂ diffusion', 'Stomata permanently closed during daylight'], correctIndices: [0, 2], explanation: 'Transparent epidermis, chloroplast-rich palisade cells, and spongy air spaces optimise photosynthesis.' },
  { id: 'bio-q-215', subtopicId: 'bio-2-3', type: 'short-answer', marks: 2, prompt: 'Explain how guard cells reduce water loss during a hot dry drought.', rubric: { maxMarks: 2, modelAnswer: 'Guard cells lose water and become flaccid, causing the stomata pores to close so less water vapour can diffuse out of the leaf.', markPoints: [{ id: 'mp1', markDescription: 'Guard cells lose water / become flaccid', requiredKeywordGroups: [['flaccid', 'lose water', 'less turgid']] }, { id: 'mp2', markDescription: 'Stomata close to reduce water vapour loss', requiredKeywordGroups: [['close', 'shut'], ['stomata', 'pore', 'water']] }] }, explanation: 'Flaccid guard cells close stomata, curbing transpiration during drought.' },

  // bio-3-1 (5)
  { id: 'bio-q-301', subtopicId: 'bio-3-1', type: 'diagram-label', marks: 2, prompt: 'Use the virus particle diagram to identify how viruses and bacteria damage host tissues.', diagram: 'virus-particle', labels: [{ marker: 'How viruses cause illness', options: ['Replicate inside host cells and burst (lyse) them', 'Secrete bacterial toxins outside cells'], answer: 'Replicate inside host cells and burst (lyse) them' }, { marker: 'How bacteria cause illness', options: ['Replicate inside host cells and burst (lyse) them', 'Secrete bacterial toxins outside cells'], answer: 'Secrete bacterial toxins outside cells' }], explanation: 'Viruses reproduce inside host cells and burst them; bacteria divide rapidly and release toxins.' },
  { id: 'bio-q-302', subtopicId: 'bio-3-1', type: 'mcq', marks: 1, prompt: 'Which type of pathogen causes malaria?', options: ['Bacterium', 'Virus', 'Fungus', 'Protist'], correctIndex: 3, explanation: 'Malaria is caused by a protist pathogen transmitted by female mosquito vectors.' },
  { id: 'bio-q-303', subtopicId: 'bio-3-1', type: 'matching', marks: 3, prompt: 'Match each named AQA disease to its pathogen type.', pairs: [{ left: 'Measles & HIV', right: 'Virus' }, { left: 'Salmonella & Gonorrhoea', right: 'Bacterium' }, { left: 'Rose Black Spot', right: 'Fungus' }, { left: 'Malaria', right: 'Protist (mosquito vector)' }], explanation: 'Memorise the exact pathogen type for all seven AQA named communicable diseases.' },
  { id: 'bio-q-304', subtopicId: 'bio-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete two non-specific human defences against pathogens.', segments: ['The trachea is lined with sticky ', ' to trap microbes and tiny hair-like ', ' to sweep it up to the throat.'], wordBank: ['mucus', 'cilia', 'antibodies', 'villi'], answers: ['mucus', 'cilia'], explanation: 'Mucus traps inhaled microbes while ciliated epithelial cells waft mucus up to be swallowed into stomach acid.' },
  { id: 'bio-q-305', subtopicId: 'bio-3-1', type: 'short-answer', marks: 2, prompt: 'Explain how Tobacco Mosaic Virus (TMV) stunts the growth of tomato plants.', rubric: { maxMarks: 2, modelAnswer: 'TMV creates discoloured mosaic patches on leaves that damage/reduce chloroplasts, reducing photosynthesis so less glucose is made for growth.', markPoints: [{ id: 'mp1', markDescription: 'Damages/reduces chloroplasts or chlorophyll (mosaic patches)', requiredKeywordGroups: [['chloroplast', 'chlorophyll', 'mosaic', 'discolour']] }, { id: 'mp2', markDescription: 'Less photosynthesis so less glucose/proteins for growth', requiredKeywordGroups: [['photosynthesis'], ['less', 'reduc', 'glucose', 'growth']] }] }, explanation: 'Loss of functional chloroplasts cuts photosynthesis and glucose production.' },

  // bio-3-2 (5)
  { id: 'bio-q-306', subtopicId: 'bio-3-2', type: 'mcq', marks: 1, prompt: 'Why CANNOT antibiotics such as penicillin cure a viral infection like flu or measles?', options: ['Antibiotics are only painkillers', 'Viruses live and reproduce inside human host cells, so killing them without harming body cells is difficult', 'Viruses have thick cellulose cell walls', 'Antibiotics destroy human antibodies'], correctIndex: 1, explanation: 'Antibiotics target bacterial cell processes/walls; viruses replicate inside host cells.' },
  { id: 'bio-q-307', subtopicId: 'bio-3-2', type: 'matching', marks: 3, prompt: 'Match each historic medicine to its natural origin.', pairs: [{ left: 'Digitalis (heart drug)', right: 'Foxgloves' }, { left: 'Aspirin (painkiller)', right: 'Willow bark' }, { left: 'Penicillin (antibiotic)', right: 'Penicillium mould (Alexander Fleming)' }], explanation: 'Know all three natural drug origins for AQA Paper 1.' },
  { id: 'bio-q-308', subtopicId: 'bio-3-2', type: 'fill-blank', marks: 2, prompt: 'Complete how a double-blind clinical trial prevents bias.', segments: ['Patients are split between the real drug and an inactive ', ', and ', ' the patient nor the doctor knows who receives which.'], wordBank: ['placebo', 'neither', 'vaccine', 'both'], answers: ['placebo', 'neither'], explanation: 'Double-blind trials remove both the placebo effect and observer bias.' },
  { id: 'bio-q-309', subtopicId: 'bio-3-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO stages tested before a new drug is given to patients with the target illness.', options: ['Preclinical testing on isolated human cells/tissues and animals', 'Phase 1 low-dose safety tests on healthy human volunteers', 'Selling the drug directly to supermarkets', 'Skipping toxicity testing if the drug comes from a plant'], correctIndices: [0, 1], explanation: 'Preclinical cell/animal studies and low-dose healthy-volunteer trials always precede patient efficacy trials.' },
  { id: 'bio-q-310', subtopicId: 'bio-3-2', type: 'short-answer', marks: 3, prompt: 'Explain how a vaccination protects someone from becoming ill if they later catch the live pathogen.', rubric: { maxMarks: 3, modelAnswer: 'A vaccine introduces dead or inactive pathogens carrying antigens, stimulating immune cells to produce complementary antibodies. If the live pathogen enters later, memory cells trigger rapid, large-scale antibody production to destroy it before symptoms develop.', markPoints: [{ id: 'mp1', markDescription: 'Introduces dead/inactive pathogens (antigens)', requiredKeywordGroups: [['dead', 'inactive', 'weakened'], ['pathogen', 'antigen']] }, { id: 'mp2', markDescription: 'Stimulates specific complementary antibody production', requiredKeywordGroups: [['antibod']] }, { id: 'mp3', markDescription: 'Faster/larger secondary antibody response destroys live pathogen before illness', requiredKeywordGroups: [['faster', 'rapid', 'quick', 'memory'], ['destroy', 'kill', 'symptom', 'ill']] }] }, explanation: 'Vaccination primes immune memory for a rapid secondary antibody response.' },

  // bio-4-1 (5)
  { id: 'bio-q-401', subtopicId: 'bio-4-1', type: 'diagram-label', marks: 2, prompt: 'Use the chloroplast photosynthesis diagram to identify the reactants and energy type.', diagram: 'photosynthesis-chloroplast', labels: [{ marker: 'Reactants entering chloroplast', options: ['Carbon dioxide + water', 'Glucose + oxygen'], answer: 'Carbon dioxide + water' }, { marker: 'Energy transfer type', options: ['Endothermic (absorbs light)', 'Exothermic (releases heat)'], answer: 'Endothermic (absorbs light)' }], explanation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ is endothermic, absorbing light via chlorophyll.' },
  { id: 'bio-q-402', subtopicId: 'bio-4-1', type: 'mcq', marks: 1, prompt: 'A pondweed lamp is moved from 10 cm away to 20 cm away. By the inverse square law, how does light intensity change?', options: ['Halves (1/2)', 'Falls to one quarter (1/4)', 'Doubles (×2)', 'Stays unchanged'], correctIndex: 1, explanation: 'I ∝ 1/d²: doubling d multiplies d² by 4, cutting intensity to 1/4.' },
  { id: 'bio-q-403', subtopicId: 'bio-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the balanced symbol equation for photosynthesis.', segments: ['6CO₂ + 6H₂O → ', ' + 6', '.'], wordBank: ['C₆H₁₂O₆', 'O₂', 'CO₂', 'H₂'], answers: ['C₆H₁₂O₆', 'O₂'], explanation: '6CO₂ + 6H₂O → C₆H₁₂O₆ (glucose) + 6O₂ (oxygen).' },
  { id: 'bio-q-404', subtopicId: 'bio-4-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO biological uses of glucose produced during photosynthesis.', options: ['Converted into insoluble starch for storage', 'Combined with soil nitrate ions to produce amino acids for proteins', 'Excreted as urea through roots', 'Turned into haemoglobin'], correctIndices: [0, 1], explanation: 'Glucose is used for respiration, starch storage, fats/oils, cellulose cell walls, and amino acids (+ nitrates).' },
  { id: 'bio-q-405', subtopicId: 'bio-4-1', type: 'short-answer', marks: 2, prompt: 'Why does the rate of photosynthesis drop sharply to zero if temperature rises above ~45 °C?', rubric: { maxMarks: 2, modelAnswer: 'Photosynthesis is controlled by enzymes; above ~45 °C the enzymes denature so their active sites change shape and substrates can no longer bind.', markPoints: [{ id: 'mp1', markDescription: 'Enzymes controlling photosynthesis denature', requiredKeywordGroups: [['enzyme'], ['denatur']] }, { id: 'mp2', markDescription: 'Active site changes shape so substrates cannot bind', requiredKeywordGroups: [['active site', 'shape'], ['bind', 'fit', 'substrate']] }] }, explanation: 'Enzymes denature at high temperatures, halting photosynthetic reactions.' },

  // bio-4-2 (5)
  { id: 'bio-q-406', subtopicId: 'bio-4-2', type: 'mcq', marks: 1, prompt: 'What are the products of anaerobic respiration (fermentation) in yeast cells?', options: ['Lactic acid only', 'Carbon dioxide and water', 'Ethanol and carbon dioxide', 'Glucose and oxygen'], correctIndex: 2, explanation: 'Yeast fermentation: Glucose → Ethanol + Carbon dioxide.' },
  { id: 'bio-q-407', subtopicId: 'bio-4-2', type: 'fill-blank', marks: 2, prompt: 'Complete the comparison of aerobic vs anaerobic respiration in human muscle.', segments: ['Aerobic respiration releases a ', ' amount of energy, while anaerobic respiration forms ', ' due to incomplete glucose breakdown.'], wordBank: ['large', 'lactic acid', 'small', 'ethanol'], answers: ['large', 'lactic acid'], explanation: 'Muscle anaerobic respiration (Glucose → Lactic acid) releases much less energy than aerobic respiration.' },
  { id: 'bio-q-408', subtopicId: 'bio-4-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO physiological changes that occur during vigorous exercise to supply muscles with more oxygen.', options: ['Heart rate increases to pump blood faster', 'Breathing rate and breath volume both increase', 'Heart rate drops to conserve glucose', 'Muscles stop respiring aerobically altogether'], correctIndices: [0, 1], explanation: 'Higher heart rate, breathing rate, and breath volume deliver extra O₂ and glucose to active muscles.' },
  { id: 'bio-q-409', subtopicId: 'bio-4-2', type: 'matching', marks: 2, prompt: 'Match each metabolic process to its site or product.', pairs: [{ left: 'Aerobic respiration', right: 'Glucose + O₂ → CO₂ + H₂O (exothermic)' }, { left: 'Yeast fermentation in baking', right: 'CO₂ gas bubbles make bread dough rise' }, { left: 'Repaying oxygen debt', right: 'Liver converts lactic acid back into glucose' }, { left: 'Excess protein breakdown', right: 'Converted into urea in the liver' }], explanation: 'Link respiration equations directly to exercise physiology and metabolism.' },
  { id: 'bio-q-410', subtopicId: 'bio-4-2', type: 'short-answer', marks: 2, prompt: 'Define oxygen debt and explain how the liver removes lactic acid after sprinting.', rubric: { maxMarks: 2, modelAnswer: 'Oxygen debt is the extra oxygen required after vigorous exercise to react with accumulated lactic acid. Blood transports lactic acid to the liver, where it is converted back into glucose.', markPoints: [{ id: 'mp1', markDescription: 'Extra oxygen needed after exercise to remove lactic acid', requiredKeywordGroups: [['extra oxygen', 'oxygen needed'], ['lactic acid']] }, { id: 'mp2', markDescription: 'Transported in blood to the liver and converted back to glucose', requiredKeywordGroups: [['liver'], ['glucose']] }] }, explanation: 'Deep post-exercise breathing supplies oxygen to clear lactic acid via the liver.' },

  // bio-5-1 (5)
  { id: 'bio-q-501', subtopicId: 'bio-5-1', type: 'diagram-label', marks: 2, prompt: 'Use the reflex arc diagram to place the neurones in the exact signal sequence.', diagram: 'reflex-arc', labels: [{ marker: 'Carries impulse from receptor to spinal cord', options: ['Sensory neurone', 'Relay neurone', 'Motor neurone'], answer: 'Sensory neurone' }, { marker: 'Carries impulse from spinal cord to effector muscle', options: ['Sensory neurone', 'Relay neurone', 'Motor neurone'], answer: 'Motor neurone' }], explanation: 'Order: Receptor → Sensory → Relay (CNS) → Motor → Effector.' },
  { id: 'bio-q-502', subtopicId: 'bio-5-1', type: 'mcq', marks: 1, prompt: 'How is a signal transmitted across the microscopic gap (synapse) between two neurones?', options: ['An electric spark jumps directly across the air gap', 'Chemical neurotransmitters diffuse across the synapse and bind to receptors on the next neurone', 'Hormones flow through blood capillaries inside the synapse', 'Ribosomes physically connect both neurones'], correctIndex: 1, explanation: 'Electrical impulses trigger release of chemical neurotransmitters that diffuse across the synapse.' },
  { id: 'bio-q-503', subtopicId: 'bio-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the role of effectors in homeostasis.', segments: ['An effector is either a ', ' that contracts or a ', ' that secretes hormones to carry out a response.'], wordBank: ['muscle', 'gland', 'receptor', 'neurone'], answers: ['muscle', 'gland'], explanation: 'Effectors execute coordinated responses via contraction (muscles) or secretion (glands).' },
  { id: 'bio-q-504', subtopicId: 'bio-5-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO valid control variables in the ruler-drop reaction time Required Practical.', options: ['Use the same dominant hand with forearm resting on the desk', 'Hold the 0 cm mark level with the thumb and index finger before each drop', 'Shout "Go!" before dropping the ruler each time', 'Change the person catching the ruler halfway through'], correctIndices: [0, 1], explanation: 'Consistent hand, starting position, silent unannounced drop, and repeats ensure valid mean data.' },
  { id: 'bio-q-505', subtopicId: 'bio-5-1', type: 'short-answer', marks: 2, prompt: 'Why are reflex actions vital for survival, and why are they faster than conscious voluntary actions?', rubric: { maxMarks: 2, modelAnswer: 'Reflexes are automatic and rapid so they protect the body from injury (e.g. pulling away from heat). They are faster because impulses bypass the conscious areas of the brain via the spinal cord.', markPoints: [{ id: 'mp1', markDescription: 'Protect the body from harm/injury automatically', requiredKeywordGroups: [['protect', 'harm', 'injury', 'damage', 'automatic']] }, { id: 'mp2', markDescription: 'Bypass conscious parts of the brain (shorter pathway)', requiredKeywordGroups: [['bypass', 'conscious', 'brain', 'spinal cord']] }] }, explanation: 'Short spinal pathways bypass conscious thought for split-second protection.' },

  // bio-5-2 (5)
  { id: 'bio-q-506', subtopicId: 'bio-5-2', type: 'mcq', marks: 1, prompt: 'What happens immediately after the pancreas secretes INSULIN when blood glucose is too high?', options: ['Liver breaks glycogen down into glucose', 'Liver and muscle cells absorb glucose and convert excess into insoluble glycogen', 'Kidneys excrete all blood glucose into urine', 'Pituitary gland stops releasing FSH'], correctIndex: 1, explanation: 'Insulin lowers blood glucose by promoting cellular uptake and glycogen storage in liver and muscles.' },
  { id: 'bio-q-507', subtopicId: 'bio-5-2', type: 'fill-blank', marks: 2, prompt: 'Complete the negative feedback hormone when blood glucose falls too low.', segments: ['When blood glucose drops too low, the pancreas secretes ', ', causing the liver to break ', ' back down into glucose.'], wordBank: ['glucagon', 'glycogen', 'insulin', 'adrenaline'], answers: ['glucagon', 'glycogen'], explanation: 'Glucagon (hormone) converts stored glycogen (polymer) back into blood glucose.' },
  { id: 'bio-q-508', subtopicId: 'bio-5-2', type: 'matching', marks: 3, prompt: 'Match each menstrual cycle hormone to its primary role.', pairs: [{ left: 'FSH (pituitary)', right: 'Matures an egg in the ovary and stimulates oestrogen' }, { left: 'LH (pituitary)', right: 'Triggers release of a mature egg (ovulation)' }, { left: 'Oestrogen (ovaries)', right: 'Thickens uterus lining, inhibits FSH, stimulates LH' }, { left: 'Progesterone (ovaries)', right: 'Maintains uterus lining and inhibits FSH & LH' }], explanation: 'Master all four menstrual hormones for GCSE Paper 2.' },
  { id: 'bio-q-509', subtopicId: 'bio-5-2', type: 'mcq', marks: 1, prompt: 'Which treatment is the primary first-line management for Type 2 diabetes?', options: ['Daily antibiotic tablets', 'Carbohydrate-controlled diet and regular exercise', 'Heart stent surgery', 'Vaccination'], correctIndex: 1, explanation: 'In Type 2 diabetes body cells resist insulin; diet control and exercise restore sensitivity.' },
  { id: 'bio-q-510', subtopicId: 'bio-5-2', type: 'short-answer', marks: 2, prompt: 'Compare how nervous responses differ from endocrine (hormonal) responses in the human body.', rubric: { maxMarks: 2, modelAnswer: 'Nervous responses travel as fast electrical impulses along neurones and act briefly on precise areas, whereas hormonal responses travel slower as chemical messengers in blood and last much longer.', markPoints: [{ id: 'mp1', markDescription: 'Nerves = faster electrical impulses; hormones = slower chemicals in blood', requiredKeywordGroups: [['fast', 'electrical', 'neurone'], ['slow', 'blood', 'chemical']] }, { id: 'mp2', markDescription: 'Nervous effects are short-lived; hormonal effects are long-lasting', requiredKeywordGroups: [['short', 'brief'], ['longer', 'long']] }] }, explanation: 'Contrast speed, carrier (neurone vs blood), and duration (short vs long).' },

  // bio-6-1 (5)
  { id: 'bio-q-601', subtopicId: 'bio-6-1', type: 'mcq', marks: 1, prompt: 'Two unaffected carrier parents (Ff × Ff) for recessive cystic fibrosis plan a child. What is the probability their child has cystic fibrosis (ff)?', options: ['0%', '25% (1 in 4)', '50% (1 in 2)', '75% (3 in 4)'], correctIndex: 1, explanation: 'Ff × Ff gives FF (25%), Ff (50%), and ff (25% affected).' },
  { id: 'bio-q-602', subtopicId: 'bio-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the outcome of meiosis in human reproductive organs.', segments: ['During meiosis, DNA copies once and the cell divides twice to make ', ' genetically different ', ' each with 23 chromosomes.'], wordBank: ['four', 'gametes', 'two', 'clones'], answers: ['four', 'gametes'], explanation: 'Meiosis produces 4 varied haploid gametes (23 chromosomes in humans).' },
  { id: 'bio-q-603', subtopicId: 'bio-6-1', type: 'mcq', marks: 1, prompt: 'Polydactyly (extra fingers or toes) is caused by a DOMINANT allele (P). Which genotype(s) express polydactyly?', options: ['pp only', 'PP and Pp', 'Pp only', 'Neither PP nor Pp'], correctIndex: 1, explanation: 'Only one copy of a dominant allele (PP or Pp) is needed to express the dominant phenotype.' },
  { id: 'bio-q-604', subtopicId: 'bio-6-1', type: 'matching', marks: 2, prompt: 'Match each genetics term to its exact definition.', pairs: [{ left: 'Genome', right: 'Entire genetic material of an organism' }, { left: 'Gene', right: 'Short DNA section coding for a sequence of amino acids' }, { left: 'Homozygous', right: 'Two identical alleles for a gene (BB or bb)' }, { left: 'Heterozygous', right: 'Two different alleles for a gene (Bb)' }], explanation: 'Accurate genetic terminology earns straightforward marks in Paper 2.' },
  { id: 'bio-q-605', subtopicId: 'bio-6-1', type: 'short-answer', marks: 2, prompt: 'Explain why there is always a 50% chance of a baby being male or female at fertilisation.', rubric: { maxMarks: 2, modelAnswer: 'Females carry XX sex chromosomes so all eggs carry X, while males carry XY so half of sperm carry X and half carry Y. Crossing XX × XY gives 50% XX (female) and 50% XY (male).', markPoints: [{ id: 'mp1', markDescription: 'Mother is XX (eggs carry X) and father is XY (sperm carry X or Y)', requiredKeywordGroups: [['xx'], ['xy']] }, { id: 'mp2', markDescription: 'Equal 50% probability of XX (girl) or XY (boy)', requiredKeywordGroups: [['50', 'half', 'equal']] }] }, explanation: 'The father’s sperm (50% X, 50% Y) determines biological sex with equal odds.' },

  // bio-6-2 (5)
  { id: 'bio-q-606', subtopicId: 'bio-6-2', type: 'mcq', marks: 1, prompt: 'What are the three domains in Carl Woese’s modern classification system?', options: ['Plants, Animals, Fungi', 'Archaea, Bacteria, Eukaryota', 'Kingdom, Phylum, Class', 'Prokaryotes, Viruses, Protists'], correctIndex: 1, explanation: 'Woese introduced Archaea (primitive extremophiles), Bacteria (true bacteria), and Eukaryota.' },
  { id: 'bio-q-607', subtopicId: 'bio-6-2', type: 'fill-blank', marks: 2, prompt: 'Complete the main genetic risk of selective breeding.', segments: ['Breeding closely related animals repeatedly causes ', ', which narrows the ', ' and increases inherited defects.'], wordBank: ['inbreeding', 'gene pool', 'speciation', 'mutation'], answers: ['inbreeding', 'gene pool'], explanation: 'Inbreeding reduces genetic diversity, making breeds prone to recessive disorders and disease.' },
  { id: 'bio-q-608', subtopicId: 'bio-6-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO reasons why the fossil record of early life on Earth is incomplete.', options: ['Early life forms were mostly soft-bodied and decayed before fossilising', 'Geological activity (volcanoes, erosion, plate movement) destroyed many fossils', 'Fossils cannot form from bones or shells', 'Life began only 10,000 years ago'], correctIndices: [0, 1], explanation: 'Soft-bodied decay and geological destruction leave unavoidable gaps in the fossil record.' },
  { id: 'bio-q-609', subtopicId: 'bio-6-2', type: 'matching', marks: 2, prompt: 'Match each evolutionary or biotech concept to its example.', pairs: [{ left: 'Natural selection', right: 'MRSA bacteria evolving resistance to antibiotics' }, { left: 'Selective breeding', right: 'Choosing high-yield dairy cows over generations' }, { left: 'Genetic engineering', right: 'Inserting human insulin gene into bacterial plasmid' }, { left: 'Speciation', right: 'Two populations can no longer interbreed to produce fertile offspring' }], explanation: 'Distinguish natural selection, artificial selection, and direct gene transfer.' },
  { id: 'bio-q-610', subtopicId: 'bio-6-2', type: 'short-answer', marks: 3, prompt: 'Explain how a population of bacteria can evolve resistance to an antibiotic by natural selection.', rubric: { maxMarks: 3, modelAnswer: 'A random mutation in bacterial DNA produces an allele conferring antibiotic resistance. When the antibiotic is used, non-resistant bacteria die while resistant bacteria survive, reproduce rapidly, and pass the resistance allele to offspring.', markPoints: [{ id: 'mp1', markDescription: 'Random mutation creates antibiotic-resistance allele/variation', requiredKeywordGroups: [['mutation', 'variation']] }, { id: 'mp2', markDescription: 'Resistant bacteria survive antibiotic treatment', requiredKeywordGroups: [['survive', 'resistant']] }, { id: 'mp3', markDescription: 'Survivors reproduce and pass resistance allele to offspring', requiredKeywordGroups: [['reproduc', 'multiply', 'divide'], ['pass', 'allele', 'gene', 'offspring']] }] }, explanation: 'Always follow Mutation → Survive → Reproduce → Pass on allele.' },

  // bio-7-1 (5)
  { id: 'bio-q-701', subtopicId: 'bio-7-1', type: 'mcq', marks: 1, prompt: 'Which of the following is an ABIOTIC (non-living) factor in a woodland ecosystem?', options: ['A new fungal pathogen', 'Soil pH and moisture level', 'Interspecific competition for light', 'Arrival of a new fox predator'], correctIndex: 1, explanation: 'Soil pH, moisture, temperature, and light are abiotic; pathogens, predators, and competition are biotic.' },
  { id: 'bio-q-702', subtopicId: 'bio-7-1', type: 'fill-blank', marks: 2, prompt: 'Complete the two field sampling methods.', segments: ['Use ', ' coordinates with quadrats to estimate total population size, and a ', ' to study species change along a shade gradient.'], wordBank: ['random', 'belt transect', 'thrown', 'microscope'], answers: ['random', 'belt transect'], explanation: 'Random coordinates remove sampling bias; belt transects measure distribution across environmental gradients.' },
  { id: 'bio-q-703', subtopicId: 'bio-7-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO processes in the carbon cycle that RETURN carbon dioxide to the atmosphere.', options: ['Respiration by plants, animals, and decomposer microorganisms', 'Photosynthesis by green plants and algae', 'Combustion of fossil fuels and peat', 'Formation of limestone rocks'], correctIndices: [0, 2], explanation: 'Respiration and combustion release CO₂ back into the air; photosynthesis removes it.' },
  { id: 'bio-q-704', subtopicId: 'bio-7-1', type: 'matching', marks: 2, prompt: 'Match each adaptation example to its adaptation category.', pairs: [{ left: 'Polar bear thick white fur & blubber', right: 'Structural adaptation' }, { left: 'Swallows migrating south for winter', right: 'Behavioural adaptation' }, { left: 'Desert camel producing concentrated urine', right: 'Functional adaptation' }, { left: 'Deep-sea hydrothermal vent bacteria', right: 'Extremophile' }], explanation: 'Categorise adaptations cleanly into structural, behavioural, or functional.' },
  { id: 'bio-q-705', subtopicId: 'bio-7-1', type: 'short-answer', marks: 2, prompt: 'Explain two negative environmental impacts of destroying peat bogs for garden compost.', rubric: { maxMarks: 2, modelAnswer: 'Destroying peat bogs destroys habitats and reduces biodiversity, and decaying or burning the peat releases large amounts of stored carbon dioxide into the atmosphere, contributing to global warming.', markPoints: [{ id: 'mp1', markDescription: 'Destroys habitats and reduces biodiversity', requiredKeywordGroups: [['habitat', 'biodiversity']] }, { id: 'mp2', markDescription: 'Releases stored CO₂ into atmosphere (global warming)', requiredKeywordGroups: [['co2', 'carbon dioxide'], ['warming', 'greenhouse', 'atmosphere', 'releas']] }] }, explanation: 'Peat bogs are vital carbon sinks and rare biodiversity habitats.' },
];

export const BIOLOGY_FLASHCARDS: FlashcardItem[] = [
  // bio-1-1 (5)
  { id: 'bio-fc-101', subtopicId: 'bio-1-1', front: 'Contrast eukaryotic and prokaryotic cells.', backBullets: ['Eukaryotic (animals, plants, fungi): DNA inside a membrane-bound nucleus.', 'Prokaryotic (bacteria): smaller, NO nucleus, free circular DNA loop + optional plasmids.'], diagram: 'eukaryotic-vs-prokaryotic' },
  { id: 'bio-fc-102', subtopicId: 'bio-1-1', front: 'Name the 5 sub-cellular structures found in animal cells.', backBullets: ['Nucleus, cytoplasm, cell membrane, mitochondria, and ribosomes.'] },
  { id: 'bio-fc-103', subtopicId: 'bio-1-1', front: 'What 3 extra structures do plant cells have compared with animal cells?', backBullets: ['Cellulose cell wall (strength/support).', 'Permanent vacuole with cell sap (turgidity).', 'Chloroplasts with chlorophyll (photosynthesis).'] },
  { id: 'bio-fc-104', subtopicId: 'bio-1-1', front: 'State the functions of mitochondria and ribosomes.', backBullets: ['Mitochondria: site of aerobic respiration releasing energy.', 'Ribosomes: site of protein synthesis.'] },
  { id: 'bio-fc-105', subtopicId: 'bio-1-1', front: 'What are bacterial plasmids and flagella?', backBullets: ['Plasmids: small circular rings of extra DNA (e.g. antibiotic resistance genes).', 'Flagellum: whip-like tail used for movement.'], diagram: 'bacterial-cell' },

  // bio-1-2 (5)
  { id: 'bio-fc-106', subtopicId: 'bio-1-2', front: 'State the magnification formula and how to convert mm to μm.', backBullets: ['Magnification = Image size ÷ Actual size (I = A × M).', '1 mm = 1,000 μm; 1 μm = 1,000 nm.'] },
  { id: 'bio-fc-107', subtopicId: 'bio-1-2', front: 'Distinguish magnification from resolution.', backBullets: ['Magnification: how many times larger the image appears.', 'Resolution: ability to distinguish two closely spaced points sharply.'], diagram: 'microscope' },
  { id: 'bio-fc-108', subtopicId: 'bio-1-2', front: 'Give two advantages of electron microscopes over light microscopes.', backBullets: ['Far higher magnification (over ×1,000,000).', 'Far higher resolution, revealing ribosomes and internal organelle detail.'] },
  { id: 'bio-fc-109', subtopicId: 'bio-1-2', front: 'Why do you add iodine and lower the coverslip at 45° when making an onion slide?', backBullets: ['Iodine stains transparent structures (nuclei/walls) to make them visible.', 'Lowering gently at 45° prevents trapping air bubbles.'] },
  { id: 'bio-fc-110', subtopicId: 'bio-1-2', front: 'Which objective lens should you ALWAYS select first when focusing a microscope?', backBullets: ['The LOWEST-power objective lens, then focus slowly using coarse and fine focus dials.'] },

  // bio-1-3 (5)
  { id: 'bio-fc-111', subtopicId: 'bio-1-3', front: 'List the 3 stages of the cell cycle in order.', backBullets: ['1. Interphase (cell grows, copies organelles & DNA).', '2. Mitosis (chromosomes pulled apart, nucleus divides).', '3. Cytokinesis (cytoplasm & membrane split into 2 identical cells).'], diagram: 'mitosis-cycle' },
  { id: 'bio-fc-112', subtopicId: 'bio-1-3', front: 'How many chromosomes are in a human diploid body cell?', backBullets: ['46 chromosomes arranged in 23 pairs.'] },
  { id: 'bio-fc-113', subtopicId: 'bio-1-3', front: 'Compare embryonic vs adult bone marrow stem cells.', backBullets: ['Embryonic: can differentiate into ANY human cell type (ethical concerns).', 'Adult bone marrow: restricted to certain cell types like blood cells (fewer ethics issues).'] },
  { id: 'bio-fc-114', subtopicId: 'bio-1-3', front: 'Where are plant stem cells located, and why are they useful?', backBullets: ['In meristems at shoot and root tips throughout the plant’s life.', 'Used to clone rare species or disease-resistant crops quickly.'] },
  { id: 'bio-fc-115', subtopicId: 'bio-1-3', front: 'What is the main advantage of therapeutic cloning?', backBullets: ['Embryonic stem cells carry the patient’s own genes so they will NOT be rejected by the immune system.'] },

  // bio-1-4 (5)
  { id: 'bio-fc-116', subtopicId: 'bio-1-4', front: 'Define diffusion and state 3 factors that speed it up.', backBullets: ['Net passive movement of particles from higher to lower concentration.', 'Faster with steeper concentration gradient, higher temperature, and larger surface area.'] },
  { id: 'bio-fc-117', subtopicId: 'bio-1-4', front: 'Define osmosis accurately.', backBullets: ['Diffusion of WATER from a dilute solution to a more concentrated solution across a partially permeable membrane.'], diagram: 'osmosis-membrane' },
  { id: 'bio-fc-118', subtopicId: 'bio-1-4', front: 'How do you find a potato’s internal sugar concentration from an osmosis graph?', backBullets: ['Plot % change in mass against sucrose concentration.', 'Read off the concentration where the line of best fit crosses 0% mass change.'] },
  { id: 'bio-fc-119', subtopicId: 'bio-1-4', front: 'Define active transport and give two GCSE examples.', backBullets: ['Movement against a concentration gradient using energy from respiration.', 'Examples: mineral ion uptake in root hair cells; glucose uptake in small intestine villi.'] },
  { id: 'bio-fc-120', subtopicId: 'bio-1-4', front: 'List 4 adaptations of effective exchange surfaces (alveoli, villi, gills).', backBullets: ['Large surface area and thin walls (short diffusion path).', 'Rich blood supply and ventilation to maintain a steep concentration gradient.'] },

  // bio-2-1 (5)
  { id: 'bio-fc-201', subtopicId: 'bio-2-1', front: 'Explain the lock-and-key model and enzyme denaturation.', backBullets: ['Substrate fits precisely into the enzyme’s complementary active site.', 'Excess heat or extreme pH changes active site shape (denatured — NEVER say "killed"!).'], diagram: 'enzyme-lock-key' },
  { id: 'bio-fc-202', subtopicId: 'bio-2-1', front: 'State the substrates and products of amylase, protease, and lipase.', backBullets: ['Amylase: starch → simple sugars.', 'Protease: proteins → amino acids.', 'Lipase: lipids → glycerol + fatty acids.'] },
  { id: 'bio-fc-203', subtopicId: 'bio-2-1', front: 'Where is bile made and stored, and what are its two functions?', backBullets: ['Made in liver, stored in gall bladder (NOT an enzyme!).', 'Neutralises stomach HCl (alkaline pH) and emulsifies fats into tiny droplets.'] },
  { id: 'bio-fc-204', subtopicId: 'bio-2-1', front: 'Recall the positive results for Iodine, Benedict’s, and Biuret food tests.', backBullets: ['Starch (Iodine): orange-brown → blue-black.', 'Reducing sugars (Benedict’s + heat): blue → brick-red.', 'Proteins (Biuret): blue → purple/lilac.'] },
  { id: 'bio-fc-205', subtopicId: 'bio-2-1', front: 'How do you test a food sample for lipids?', backBullets: ['Sudan III stain forms a bright red top layer, OR ethanol + water forms a cloudy white emulsion.'] },

  // bio-2-2 (5)
  { id: 'bio-fc-206', subtopicId: 'bio-2-2', front: 'Why does the left ventricle have a thicker muscular wall than the right ventricle?', backBullets: ['Left ventricle pumps oxygenated blood at higher pressure around the entire body; right ventricle pumps only to nearby lungs.'] },
  { id: 'bio-fc-207', subtopicId: 'bio-2-2', front: 'Compare arteries, capillaries, and veins.', backBullets: ['Arteries: thick muscular/elastic walls, narrow lumen (high pressure).', 'Capillaries: one cell thick (exchange).', 'Veins: thinner walls, wide lumen, one-way valves (low pressure).'] },
  { id: 'bio-fc-208', subtopicId: 'bio-2-2', front: 'Where are natural pacemaker cells located?', backBullets: ['In the wall of the right atrium, sending regular electrical impulses to set resting heart rate.'] },
  { id: 'bio-fc-209', subtopicId: 'bio-2-2', front: 'Compare stents with statins for treating coronary heart disease.', backBullets: ['Stents: wire mesh tubes inserted surgically to hold narrowed coronary arteries open.', 'Statins: daily tablets lowering blood LDL cholesterol to slow fatty plaque growth.'] },
  { id: 'bio-fc-210', subtopicId: 'bio-2-2', front: 'State the adaptations of red blood cells and the role of platelets.', backBullets: ['Red blood cells: biconcave disc (large SA), no nucleus, packed with haemoglobin.', 'Platelets: cell fragments that help blood clot at wounds.'] },

  // bio-2-3 (5)
  { id: 'bio-fc-211', subtopicId: 'bio-2-3', front: 'Compare xylem and phloem structure and transport.', backBullets: ['Xylem: dead hollow lignified tubes carrying water/minerals UPWARDS (transpiration stream).', 'Phloem: living sieve tubes carrying dissolved sugars BOTH WAYS (translocation).'] },
  { id: 'bio-fc-212', subtopicId: 'bio-2-3', front: 'How do palisade and spongy mesophyll tissues aid photosynthesis?', backBullets: ['Palisade mesophyll: packed with chloroplasts near top of leaf to absorb light.', 'Spongy mesophyll: air spaces give large internal surface area for CO₂ diffusion.'], diagram: 'root-hair-vs-palisade' },
  { id: 'bio-fc-213', subtopicId: 'bio-2-3', front: 'How do guard cells open and close stomata?', backBullets: ['In bright light they take in water, become turgid, and open the stoma.', 'In drought/darkness they lose water, become flaccid, and close the stoma.'] },
  { id: 'bio-fc-214', subtopicId: 'bio-2-3', front: 'Which 3 factors INCREASE transpiration rate, and which 1 DECREASES it?', backBullets: ['INCREASE: brighter light, higher temperature, faster air flow (wind).', 'DECREASE: higher humidity (shallower vapour gradient).'] },
  { id: 'bio-fc-215', subtopicId: 'bio-2-3', front: 'What does a potometer directly measure?', backBullets: ['Rate of water uptake by a leafy shoot (used to estimate transpiration rate).'] },

  // bio-3-1 (5)
  { id: 'bio-fc-301', subtopicId: 'bio-3-1', front: 'Contrast how bacteria and viruses make us feel ill.', backBullets: ['Bacteria: divide rapidly and release poisonous toxins.', 'Viruses: replicate inside living host cells and burst (lyse) them.'], diagram: 'virus-particle' },
  { id: 'bio-fc-302', subtopicId: 'bio-3-1', front: 'Name the 3 viral diseases on AQA GCSE Biology.', backBullets: ['Measles (droplets; MMR vaccine), HIV (bodily fluids; antiretrovirals).', 'Tobacco Mosaic Virus (TMV in plants; destroys chloroplasts).'] },
  { id: 'bio-fc-303', subtopicId: 'bio-3-1', front: 'Name the 2 bacterial diseases on AQA GCSE Biology and their controls.', backBullets: ['Salmonella (food poisoning; UK poultry vaccinated).', 'Gonorrhoea (STI; condoms and antibiotics).'] },
  { id: 'bio-fc-304', subtopicId: 'bio-3-1', front: 'What causes Malaria and Rose Black Spot?', backBullets: ['Malaria: PROTIST pathogen spread by female mosquito vectors.', 'Rose Black Spot: FUNGUS spread by water/wind spores.'] },
  { id: 'bio-fc-305', subtopicId: 'bio-3-1', front: 'List the 4 non-specific human first-line body defences.', backBullets: ['Skin barrier + antimicrobial secretions; nose hairs.', 'Trachea sticky mucus + sweeping cilia; stomach hydrochloric acid.'] },

  // bio-3-2 (5)
  { id: 'bio-fc-306', subtopicId: 'bio-3-2', front: 'List the 3 ways immune cells defend against invading pathogens.', backBullets: ['1. Phagocytosis (engulfing & digesting pathogens).', '2. Producing specific complementary antibodies.', '3. Producing antitoxins to neutralise bacterial toxins.'] },
  { id: 'bio-fc-307', subtopicId: 'bio-3-2', front: 'How does vaccination provide long-term immunity?', backBullets: ['Injects dead or inactive pathogens (antigens) to trigger antibody production and memory cells.', 'If live pathogens enter later, antibodies are produced rapidly before symptoms appear.'] },
  { id: 'bio-fc-308', subtopicId: 'bio-3-2', front: 'Contrast antibiotics with painkillers.', backBullets: ['Antibiotics (e.g. penicillin) kill bacteria inside the body (useless on viruses).', 'Painkillers (e.g. aspirin) only relieve symptoms without killing pathogens.'] },
  { id: 'bio-fc-309', subtopicId: 'bio-3-2', front: 'Match Digitalis, Aspirin, and Penicillin to their natural sources.', backBullets: ['Digitalis → foxgloves; Aspirin → willow bark.', 'Penicillin → Penicillium mould (Alexander Fleming).'] },
  { id: 'bio-fc-310', subtopicId: 'bio-3-2', front: 'What are the 3 criteria tested in drug trials, and what is a double-blind trial?', backBullets: ['T-E-D: Toxicity (safe?), Efficacy (works?), Optimum Dose.', 'Double-blind: neither patient nor doctor knows who got real drug vs placebo (removes bias).'] },

  // bio-4-1 (5)
  { id: 'bio-fc-401', subtopicId: 'bio-4-1', front: 'Write the word and balanced symbol equations for photosynthesis.', backBullets: ['Carbon dioxide + Water → (light) Glucose + Oxygen.', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (endothermic reaction in chloroplasts).'], diagram: 'photosynthesis-chloroplast' },
  { id: 'bio-fc-402', subtopicId: 'bio-4-1', front: 'List the 4 limiting factors of photosynthesis.', backBullets: ['Light intensity, carbon dioxide concentration, temperature, and amount of chlorophyll.'] },
  { id: 'bio-fc-403', subtopicId: 'bio-4-1', front: 'State the inverse square law for pondweed lamp distance.', backBullets: ['Light intensity ∝ 1 ÷ distance².', 'Doubling lamp distance cuts light intensity to one quarter (¼).'] },
  { id: 'bio-fc-404', subtopicId: 'bio-4-1', front: 'List all 5 biological uses of glucose in plants.', backBullets: ['Respiration, insoluble Starch, Fats/oils, Cellulose cell walls, and Amino acids (+ nitrates).'], hint: 'R-S-F-C-A!' },
  { id: 'bio-fc-405', subtopicId: 'bio-4-1', front: 'Why do commercial greenhouses burn paraffin heaters?', backBullets: ['Raises BOTH temperature and CO₂ concentration simultaneously, speeding up photosynthesis to maximise crop profit.'] },

  // bio-4-2 (5)
  { id: 'bio-fc-406', subtopicId: 'bio-4-2', front: 'Write the balanced equation for aerobic respiration.', backBullets: ['Glucose + Oxygen → Carbon dioxide + Water.', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (exothermic — releases lots of energy).'] },
  { id: 'bio-fc-407', subtopicId: 'bio-4-2', front: 'Contrast anaerobic respiration in human muscles vs yeast.', backBullets: ['Muscles: Glucose → Lactic acid (causes fatigue).', 'Yeast (fermentation): Glucose → Ethanol + Carbon dioxide (brewing & baking).'] },
  { id: 'bio-fc-408', subtopicId: 'bio-4-2', front: 'How do heart rate, breathing rate, and breath volume change during exercise?', backBullets: ['All three INCREASE to deliver more oxygenated blood and glucose to contracting muscles and remove CO₂ faster.'] },
  { id: 'bio-fc-409', subtopicId: 'bio-4-2', front: 'Define oxygen debt and state where lactic acid is converted back to glucose.', backBullets: ['Extra oxygen needed post-exercise to react with and clear accumulated lactic acid.', 'Blood transports lactic acid to the LIVER to be converted back into glucose.'] },
  { id: 'bio-fc-410', subtopicId: 'bio-4-2', front: 'Define metabolism and give 3 examples.', backBullets: ['Sum of all enzyme-controlled chemical reactions in a cell or organism.', 'Examples: respiration, starch/glycogen/lipid/protein synthesis, breaking excess protein into urea.'] },

  // bio-5-1 (5)
  { id: 'bio-fc-501', subtopicId: 'bio-5-1', front: 'Define homeostasis and name 3 internal conditions regulated in humans.', backBullets: ['Regulation of internal conditions to maintain optimum enzyme action.', 'Blood glucose concentration, body temperature, and water levels.'] },
  { id: 'bio-fc-502', subtopicId: 'bio-5-1', front: 'List the exact pathway of a reflex arc from stimulus to response.', backBullets: ['Stimulus → Receptor → Sensory neurone → Relay neurone (CNS) → Motor neurone → Effector → Response.'], diagram: 'reflex-arc' },
  { id: 'bio-fc-503', subtopicId: 'bio-5-1', front: 'How does an impulse cross a synapse between two neurones?', backBullets: ['Electrical impulse triggers chemical neurotransmitters to diffuse across the gap.', 'They bind to receptors on the next neurone, starting a new electrical impulse.'] },
  { id: 'bio-fc-504', subtopicId: 'bio-5-1', front: 'What are the two types of effector in the body?', backBullets: ['Muscles (which contract) and glands (which secrete hormones).'] },
  { id: 'bio-fc-505', subtopicId: 'bio-5-1', front: 'Name 3 control variables in the ruler-drop reaction time practical.', backBullets: ['Same dominant hand, 0 cm aligned at start with elbow on desk, silent drop without warning, repeat for mean.'] },

  // bio-5-2 (5)
  { id: 'bio-fc-506', subtopicId: 'bio-5-2', front: 'Why is the pituitary gland called the "master gland"?', backBullets: ['It secretes several hormones (FSH, LH, TSH) that act on other endocrine glands to stimulate further hormone release.'] },
  { id: 'bio-fc-507', subtopicId: 'bio-5-2', front: 'Contrast insulin and glucagon in blood glucose negative feedback.', backBullets: ['High glucose → pancreas secretes INSULIN → liver/muscles store glucose as insoluble glycogen.', 'Low glucose → pancreas secretes GLUCAGON → liver breaks glycogen back into glucose.'] },
  { id: 'bio-fc-508', subtopicId: 'bio-5-2', front: 'Contrast Type 1 and Type 2 diabetes (cause and treatment).', backBullets: ['Type 1: pancreas fails to make enough insulin → insulin injections.', 'Type 2: body cells stop responding to insulin → carbohydrate-controlled diet + exercise.'] },
  { id: 'bio-fc-509', subtopicId: 'bio-5-2', front: 'State the roles of FSH, LH, oestrogen, and progesterone.', backBullets: ['FSH: matures egg; Oestrogen: thickens lining & triggers LH.', 'LH: triggers ovulation; Progesterone: maintains lining & inhibits FSH/LH.'] },
  { id: 'bio-fc-510', subtopicId: 'bio-5-2', front: 'State the roles of thyroxine and adrenaline.', backBullets: ['Thyroxine (thyroid): controls basal metabolic rate via negative feedback.', 'Adrenaline (adrenal): boosts heart rate and oxygen/glucose delivery for fight or flight.'] },

  // bio-6-1 (5)
  { id: 'bio-fc-601', subtopicId: 'bio-6-1', front: 'Compare mitosis and meiosis on division count, cell output, and chromosome number.', backBullets: ['Mitosis: 1 division → 2 genetically identical diploid cells (46).', 'Meiosis: 2 divisions → 4 genetically varied haploid gametes (23).'] },
  { id: 'bio-fc-602', subtopicId: 'bio-6-1', front: 'Define genome, gene, and allele.', backBullets: ['Genome: entire genetic material of an organism.', 'Gene: DNA section coding for a sequence of amino acids; Allele: variant form of a gene.'] },
  { id: 'bio-fc-603', subtopicId: 'bio-6-1', front: 'Distinguish dominant, recessive, homozygous, and heterozygous.', backBullets: ['Dominant: always expressed if present; Recessive: expressed only if two copies (bb).', 'Homozygous: BB or bb; Heterozygous: Bb.'] },
  { id: 'bio-fc-604', subtopicId: 'bio-6-1', front: 'Compare polydactyly and cystic fibrosis inheritance.', backBullets: ['Polydactyly: DOMINANT allele (extra fingers/toes; no carriers).', 'Cystic fibrosis: RECESSIVE allele (ff; thick mucus; two Ff carriers have 25% risk).'] },
  { id: 'bio-fc-605', subtopicId: 'bio-6-1', front: 'What sex chromosomes do human females and males carry?', backBullets: ['Females: XX; Males: XY (50% probability of boy or girl at every fertilisation).'] },

  // bio-6-2 (5)
  { id: 'bio-fc-606', subtopicId: 'bio-6-2', front: 'List the 4 mark-scheme steps of evolution by natural selection.', backBullets: ['1. Random mutation creates genetic variation.', '2. Best-adapted individuals survive competition & reproduce.', '3. Advantageous alleles pass to offspring; 4. Allele frequency rises over generations.'] },
  { id: 'bio-fc-607', subtopicId: 'bio-6-2', front: 'What is the main genetic risk of selective breeding?', backBullets: ['Inbreeding narrows the gene pool, making populations prone to inherited defects and disease.'] },
  { id: 'bio-fc-608', subtopicId: 'bio-6-2', front: 'Outline how genetic engineering makes human insulin using bacteria.', backBullets: ['Cut human insulin gene using enzymes → insert into bacterial plasmid vector → GM bacteria multiply and produce insulin.'] },
  { id: 'bio-fc-609', subtopicId: 'bio-6-2', front: 'Give 2 reasons why the fossil record is incomplete.', backBullets: ['Early organisms were soft-bodied so decayed completely.', 'Geological activity (volcanoes, erosion) destroyed many fossils.'] },
  { id: 'bio-fc-610', subtopicId: 'bio-6-2', front: 'State Linnaeus’s hierarchy and Carl Woese’s 3 domains.', backBullets: ['Linnaeus: Kingdom, Phylum, Class, Order, Family, Genus, Species.', 'Woese’s 3 domains: Archaea, Bacteria, Eukaryota.'] },

  // bio-7-1 (5)
  { id: 'bio-fc-701', subtopicId: 'bio-7-1', front: 'Contrast abiotic and biotic ecosystem factors with 3 examples each.', backBullets: ['Abiotic (non-living): light, temperature, moisture, soil pH, wind.', 'Biotic (living): food supply, new predators, new pathogens, competition.'] },
  { id: 'bio-fc-702', subtopicId: 'bio-7-1', front: 'Give one structural, one behavioural, and one functional adaptation.', backBullets: ['Structural: polar bear fur/blubber or cactus spines.', 'Behavioural: migration/basking; Functional: concentrated camel urine.'] },
  { id: 'bio-fc-703', subtopicId: 'bio-7-1', front: 'When do you use random-coordinate quadrats vs a belt transect?', backBullets: ['Random coordinates: estimate total population in a uniform area (Mean/m² × Area).', 'Belt transect: measure distribution change across an environmental gradient.'] },
  { id: 'bio-fc-704', subtopicId: 'bio-7-1', front: 'How does carbon enter and leave the atmosphere in the carbon cycle?', backBullets: ['Removed by photosynthesis; returned by plant/animal/microbe respiration and fuel combustion.'] },
  { id: 'bio-fc-705', subtopicId: 'bio-7-1', front: 'Why is destroying peat bogs doubly harmful to the environment?', backBullets: ['Destroys unique habitats (reduces biodiversity) AND releases huge stores of CO₂ when peat decays or is burned.'] },
];

export const BIOLOGY_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'cs-bio-1', slug: 'topic-1-cell-biology', title: 'Topic 1: Cell Biology — Complete Cheat Sheet', topicNumber: 1, topicName: 'Cell Biology', summary: 'Eukaryotes vs prokaryotes, microscopy I = AM, mitosis/stem cells, and cell transport.', accentColor: '#059669', sections: [{ heading: '1.1–1.2 Cells & Microscopy', formula: 'Magnification = Image ÷ Actual  |  1 mm = 1,000 μm', points: ['Animal (5): nucleus, cytoplasm, membrane, mitochondria, ribosomes. Plant (+3): cellulose wall, vacuole, chloroplasts.', 'Electron microscopes beat light microscopes on both magnification and resolution.'] }, { heading: '1.3–1.4 Mitosis & Transport', points: ['Mitosis = 2 identical diploid cells; embryonic & plant meristem stem cells can form any cell type.', 'Diffusion & osmosis = passive (down gradient); Active transport = uses respiration energy (up gradient).'] }] },
  { id: 'cs-bio-2', slug: 'topic-2-organisation', title: 'Topic 2: Organisation — Complete Cheat Sheet', topicNumber: 2, topicName: 'Organisation', summary: 'Digestive enzymes, bile, food tests, double circulation, CHD, and xylem/phloem transpiration.', accentColor: '#1a96f3', sections: [{ heading: '2.1 Enzymes & Digestion', points: ['Amylase → sugars; Protease → amino acids; Lipase → glycerol + fatty acids.', 'Bile neutralises stomach acid & emulsifies fats; extreme heat/pH DENATURES enzymes.'] }, { heading: '2.2–2.3 Heart & Plants', points: ['Left ventricle = thickest wall (whole body); arteries high pressure, capillaries 1-cell thick, veins valves.', 'Xylem (dead, lignin, water up) vs Phloem (living, sugars both ways); high humidity slows transpiration.'] }] },
  { id: 'cs-bio-3', slug: 'topic-3-infection', title: 'Topic 3: Infection & Response — Complete Cheat Sheet', topicNumber: 3, topicName: 'Infection and Response', summary: 'Named diseases, body barriers, vaccines, antibiotics vs painkillers, and clinical trials.', accentColor: '#db2777', sections: [{ heading: '3.1–3.2 Pathogens, Immunity & Drugs', points: ['Viruses (Measles, HIV, TMV); Bacteria (Salmonella, Gonorrhoea); Fungus (Rose Black Spot); Protist (Malaria via mosquito vector).', 'Antibiotics kill bacteria ONLY; drug trials test Toxicity, Efficacy, Dose via double-blind placebo trials.'] }] },
  { id: 'cs-bio-4', slug: 'topic-4-bioenergetics', title: 'Topic 4: Bioenergetics — Complete Cheat Sheet', topicNumber: 4, topicName: 'Bioenergetics', summary: 'Photosynthesis equations, limiting factors, inverse square law, respiration, oxygen debt, and metabolism.', accentColor: '#16a34a', sections: [{ heading: '4.1–4.2 Photosynthesis & Respiration', formula: '6CO₂ + 6H₂O ⇌ C₆H₁₂O₆ + 6O₂  |  I ∝ 1 ÷ d²', points: ['5 uses of glucose: Respiration, Starch, Fats, Cellulose, Amino acids (+ nitrates).', 'Muscle anaerobic → Lactic acid (cleared in liver via oxygen debt); Yeast → Ethanol + CO₂.'] }] },
  { id: 'cs-bio-5', slug: 'topic-5-homeostasis', title: 'Topic 5: Homeostasis & Response — Complete Cheat Sheet', topicNumber: 5, topicName: 'Homeostasis and Response', summary: 'Reflex arcs, chemical synapses, insulin/glucagon negative feedback, diabetes, and menstrual hormones.', accentColor: '#7c3aed', sections: [{ heading: '5.1–5.2 Nerves & Hormones', points: ['Reflex arc: Stimulus → Receptor → Sensory → Relay → Motor → Effector; neurotransmitters diffuse across synapses.', 'Insulin stores glucose as liver glycogen; Glucagon breaks glycogen into glucose. FSH matures egg, LH triggers ovulation.'] }] },
  { id: 'cs-bio-6', slug: 'topic-6-inheritance', title: 'Topic 6: Inheritance & Evolution — Complete Cheat Sheet', topicNumber: 6, topicName: 'Inheritance, Variation and Evolution', summary: 'Meiosis, Punnett squares, polydactyly vs cystic fibrosis, natural selection, GM, and Woese’s domains.', accentColor: '#ea580c', sections: [{ heading: '6.1–6.2 Genetics & Evolution', points: ['Meiosis = 4 varied haploid gametes (23); Polydactyly = dominant, Cystic fibrosis = recessive (Ff × Ff → 25%).', 'Natural selection: Mutation → Survive → Reproduce → Pass allele. Woese: Archaea, Bacteria, Eukaryota.'] }] },
  { id: 'cs-bio-7', slug: 'topic-7-ecology', title: 'Topic 7: Ecology — Complete Cheat Sheet', topicNumber: 7, topicName: 'Ecology', summary: 'Abiotic/biotic factors, adaptations, random quadrats, transects, carbon cycle, and biodiversity.', accentColor: '#0284c7', sections: [{ heading: '7.1 Sampling, Carbon Cycle & Biodiversity', formula: 'Population = Mean per m² × Total habitat area', points: ['Random-coordinate quadrats = total population; Belt transect = environmental gradient.', 'Peat bog destruction & deforestation cut biodiversity and release stored CO₂.'] }] },
];

export const BIOLOGY_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'bio-exam-1', subtopicId: 'bio-1-1', number: 1, stimulus: 'A student compares an animal cheek cell, a leaf palisade cell, and a prokaryotic bacterial cell.', diagram: 'eukaryotic-vs-prokaryotic', parts: [{ id: 'bio-exam-1a', label: 'a)', prompt: 'State two structural differences between a prokaryotic bacterial cell and a eukaryotic plant palisade cell.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'The bacterial cell has no membrane-bound nucleus (its DNA is a free circular loop plus plasmids) and lacks chloroplasts and mitochondria, whereas the plant cell has a nucleus, chloroplasts, and cellulose cell wall.', markPoints: [{ id: 'mp1', markDescription: 'Bacterial cell lacks a nucleus / has free circular DNA or plasmids', requiredKeywordGroups: [['no nucleus', 'lack', 'circular dna', 'plasmid']] }, { id: 'mp2', markDescription: 'Plant cell has chloroplasts / permanent vacuole / mitochondria / cellulose wall', requiredKeywordGroups: [['chloroplast', 'vacuole', 'mitochondri', 'cellulose']] }] } }] },
  { id: 'bio-exam-2', subtopicId: 'bio-1-2', number: 2, stimulus: 'A micrograph of a cheek cell measures 36 mm wide under a light microscope. Its actual diameter is 45 μm.', diagram: 'microscope', parts: [{ id: 'bio-exam-2a', label: 'a)', prompt: 'Calculate the magnification of the micrograph, showing unit conversion.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Convert 36 mm × 1,000 = 36,000 μm. Magnification = 36,000 ÷ 45 = ×800.', markPoints: [{ id: 'mp1', markDescription: 'Converts 36 mm to 36,000 μm', numericMatch: { value: 36000, tolerance: 10 } }, { id: 'mp2', markDescription: 'Calculates ×800 magnification', numericMatch: { value: 800, tolerance: 1 } }] } }] },
  { id: 'bio-exam-3', subtopicId: 'bio-1-3', number: 3, stimulus: 'Scientists investigate using embryonic stem cells vs adult bone marrow stem cells to treat Type 1 diabetes.', diagram: 'mitosis-cycle', parts: [{ id: 'bio-exam-3a', label: 'a)', prompt: 'Compare one advantage and one disadvantage of embryonic stem cells compared with adult bone marrow stem cells.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Advantage: embryonic stem cells can differentiate into any human cell type (including pancreatic cells), whereas bone marrow cells are limited. Disadvantage: obtaining embryonic stem cells raises ethical objections over destroying embryos.', markPoints: [{ id: 'mp1', markDescription: 'Embryonic can differentiate into any human cell type', requiredKeywordGroups: [['any'], ['cell', 'differentiat']] }, { id: 'mp2', markDescription: 'Ethical/religious concerns over using human embryos', requiredKeywordGroups: [['ethic', 'moral', 'embryo', 'religious']] }] } }] },
  { id: 'bio-exam-4', subtopicId: 'bio-1-4', number: 4, stimulus: 'A student places a 4.00 g potato cylinder into a concentrated sucrose solution for 30 minutes. Its final mass is 3.40 g.', diagram: 'osmosis-membrane', parts: [{ id: 'bio-exam-4a', label: 'a)', prompt: 'Calculate the percentage change in mass of the potato cylinder and explain why its mass decreased.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: '% change = ((3.40 − 4.00) ÷ 4.00) × 100 = −15%. Mass decreased because water moved out of the potato cells into the more concentrated sucrose solution by osmosis across a partially permeable membrane.', markPoints: [{ id: 'mp1', markDescription: 'Calculates −15% (or 15% loss)', numericMatch: { value: -15, tolerance: 0.2 } }, { id: 'mp2', markDescription: 'Water moves out of potato cells by osmosis', requiredKeywordGroups: [['water'], ['out', 'left', 'leaves'], ['osmosis']] }, { id: 'mp3', markDescription: 'From dilute cell sap to concentrated sucrose across partially permeable membrane', requiredKeywordGroups: [['concentrated', 'partially permeable']] }] } }] },
  { id: 'bio-exam-5', subtopicId: 'bio-2-1', number: 5, stimulus: 'Fat digestion in the small intestine involves both bile from the liver and lipase from the pancreas.', diagram: 'enzyme-lock-key', parts: [{ id: 'bio-exam-5a', label: 'a)', prompt: 'Explain how bile increases the rate at which lipase breaks down lipids in the small intestine.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Bile is alkaline so it neutralises acidic stomach contents to create the optimum alkaline pH for lipase, and it emulsifies large fat droplets into tiny droplets, increasing surface area for faster lipase breakdown into glycerol and fatty acids.', markPoints: [{ id: 'mp1', markDescription: 'Neutralises stomach acid / gives optimum alkaline pH', requiredKeywordGroups: [['neutralis', 'alkaline'], ['acid', 'ph', 'optimum']] }, { id: 'mp2', markDescription: 'Emulsifies fats into smaller droplets', requiredKeywordGroups: [['emulsif', 'droplet']] }, { id: 'mp3', markDescription: 'Increases surface area for lipase action', requiredKeywordGroups: [['surface area'], ['lipase', 'faster']] }] } }] },
  { id: 'bio-exam-6', subtopicId: 'bio-2-2', number: 6, stimulus: 'A patient with narrowed coronary arteries is offered either a coronary stent or daily statin medication.', parts: [{ id: 'bio-exam-6a', label: 'a)', prompt: 'Explain how narrowed coronary arteries can cause a heart attack and state how a stent relieves the problem.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Fatty plaques restrict oxygenated blood flow to heart muscle cells, reducing aerobic respiration and energy transfer so heart muscle dies. A stent is a wire mesh tube inflated inside the artery to keep it open and restore blood flow.', markPoints: [{ id: 'mp1', markDescription: 'Reduces blood and oxygen flow to heart muscle', requiredKeywordGroups: [['less', 'reduc', 'restrict'], ['oxygen', 'blood'], ['heart muscle', 'muscle']] }, { id: 'mp2', markDescription: 'Less aerobic respiration / energy for muscle contraction', requiredKeywordGroups: [['respirat', 'energy']] }, { id: 'mp3', markDescription: 'Stent is a mesh tube holding the artery open', requiredKeywordGroups: [['mesh', 'tube', 'open'], ['artery', 'blood flow']] }] } }] },
  { id: 'bio-exam-7', subtopicId: 'bio-2-3', number: 7, stimulus: 'A student places a leafy shoot inside a potometer in a warm room, then turns on an electric fan directed at the leaves.', diagram: 'root-hair-vs-palisade', parts: [{ id: 'bio-exam-7a', label: 'a)', prompt: 'Predict and explain how turning on the electric fan changes the rate of transpiration.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'The rate of transpiration increases because moving air sweeps water vapour away from the leaf surface, maintaining a steeper water vapour concentration gradient so water diffuses out through stomata faster.', markPoints: [{ id: 'mp1', markDescription: 'Transpiration rate increases', requiredKeywordGroups: [['increas', 'faster', 'higher']] }, { id: 'mp2', markDescription: 'Sweeps/blows water vapour away from leaf surface', requiredKeywordGroups: [['away', 'removes', 'blows', 'sweeps'], ['water vapour', 'vapour']] }, { id: 'mp3', markDescription: 'Maintains steeper concentration gradient for faster diffusion', requiredKeywordGroups: [['gradient', 'diffusion']] }] } }] },
  { id: 'bio-exam-8', subtopicId: 'bio-3-1', number: 8, stimulus: 'Public health teams work to reduce malaria cases in a tropical river valley.', diagram: 'virus-particle', parts: [{ id: 'bio-exam-8a', label: 'a)', prompt: 'Name the type of pathogen causing malaria and explain two effective ways to reduce its spread.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Malaria is caused by a protist carried by female mosquito vectors. Spread is reduced by sleeping under insecticide-treated mosquito nets to stop bites and draining stagnant water to destroy mosquito breeding sites.', markPoints: [{ id: 'mp1', markDescription: 'Identifies protist pathogen', requiredKeywordGroups: [['protist']] }, { id: 'mp2', markDescription: 'Mosquito nets / repellents prevent mosquito bites', requiredKeywordGroups: [['net', 'repellent', 'bite']] }, { id: 'mp3', markDescription: 'Drain stagnant water / insecticides destroy mosquito vector', requiredKeywordGroups: [['stagnant', 'drain', 'insecticide', 'breeding', 'vector']] }] } }] },
  { id: 'bio-exam-9', subtopicId: 'bio-3-2', number: 9, stimulus: 'A pharmaceutical company develops a new antibiotic and runs a double-blind clinical trial before licensing.', parts: [{ id: 'bio-exam-9a', label: 'a)', prompt: 'Explain why new drugs undergo preclinical testing before human trials and why clinical trials use a placebo in a double-blind setup.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Preclinical testing on cells, tissues, and animals checks toxicity and efficacy before risking human harm. A double-blind placebo trial ensures neither patient nor doctor knows who received the active drug, eliminating bias and the placebo effect.', markPoints: [{ id: 'mp1', markDescription: 'Preclinical tests on cells/animals check toxicity/safety first', requiredKeywordGroups: [['cell', 'animal'], ['toxic', 'safe']] }, { id: 'mp2', markDescription: 'Neither doctor nor patient knows who gets drug vs placebo', requiredKeywordGroups: [['neither', 'doctor', 'patient'], ['placebo']] }, { id: 'mp3', markDescription: 'Removes bias and accounts for the placebo effect', requiredKeywordGroups: [['bias', 'placebo effect']] }] } }] },
  { id: 'bio-exam-10', subtopicId: 'bio-4-1', number: 10, stimulus: 'A student investigates pondweed photosynthesis rate by placing an LED lamp at 10 cm, 20 cm, and 30 cm while counting oxygen bubbles per minute.', diagram: 'photosynthesis-chloroplast', parts: [{ id: 'bio-exam-10a', label: 'a)', prompt: 'Explain why an LED lamp is better than a filament bulb and calculate the relative light intensity factor when moving from 10 cm to 30 cm.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'An LED lamp emits very little heat so water temperature stays constant (controlling temperature as a variable). Moving 3× further away reduces light intensity by 1/3² = 1/9 (one ninth).', markPoints: [{ id: 'mp1', markDescription: 'LED emits little heat so temperature stays constant', requiredKeywordGroups: [['heat', 'temperature'], ['constant', 'control', 'less', 'little']] }, { id: 'mp2', markDescription: 'Applies inverse square law 1/d²', requiredKeywordGroups: [['inverse square', '1/9', 'ninth', '9']] }, { id: 'mp3', markDescription: 'Identifies factor of 1/9 (9 times lower)', numericMatch: { value: 9, tolerance: 0 } }] } }] },
  { id: 'bio-exam-11', subtopicId: 'bio-4-2', number: 11, stimulus: 'During a 400 m sprint, an athlete’s breathing rate rises from 14 to 42 breaths per minute and stays elevated for 10 minutes after finishing.', parts: [{ id: 'bio-exam-11a', label: 'a)', prompt: 'Explain why anaerobic respiration occurs during the sprint and why heavy breathing continues after finishing.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Insufficient oxygen reaches leg muscles during intense sprinting, so glucose breaks down incompletely by anaerobic respiration into lactic acid. Heavy breathing continues afterwards to repay the oxygen debt so blood carries lactic acid to the liver to be converted back into glucose.', markPoints: [{ id: 'mp1', markDescription: 'Insufficient oxygen triggers anaerobic respiration forming lactic acid', requiredKeywordGroups: [['insufficient', 'not enough', 'lack'], ['lactic acid']] }, { id: 'mp2', markDescription: 'Repays oxygen debt after exercise', requiredKeywordGroups: [['oxygen debt']] }, { id: 'mp3', markDescription: 'Liver converts lactic acid back into glucose', requiredKeywordGroups: [['liver'], ['glucose']] }] } }] },
  { id: 'bio-exam-12', subtopicId: 'bio-5-1', number: 12, stimulus: 'A cook accidentally touches a hot saucepan handle and pulls their hand back immediately without thinking.', diagram: 'reflex-arc', parts: [{ id: 'bio-exam-12a', label: 'a)', prompt: 'Trace the reflex pathway from skin temperature receptors to arm muscles, explaining how the signal crosses synapses.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Temperature receptors send an electrical impulse along a sensory neurone to a relay neurone in the spinal cord, then along a motor neurone to the arm muscle effector. At each synapse, chemical neurotransmitters diffuse across the gap to trigger an impulse in the next neurone.', markPoints: [{ id: 'mp1', markDescription: 'Correct neurone sequence: sensory → relay (spinal cord) → motor', requiredKeywordGroups: [['sensory'], ['relay'], ['motor']] }, { id: 'mp2', markDescription: 'Muscle effector contracts to pull hand away', requiredKeywordGroups: [['effector', 'muscle']] }, { id: 'mp3', markDescription: 'Chemical neurotransmitters diffuse across synapses', requiredKeywordGroups: [['neurotransmitter', 'chemical'], ['diffus'], ['synapse', 'gap']] }] } }] },
  { id: 'bio-exam-13', subtopicId: 'bio-5-2', number: 13, stimulus: 'A patient’s blood glucose concentration rises sharply after drinking a glucose solution and remains dangerously high for hours.', parts: [{ id: 'bio-exam-13a', label: 'a)', prompt: 'Explain how a healthy pancreas normally lowers high blood glucose and contrast the causes of Type 1 and Type 2 diabetes.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'A healthy pancreas secretes insulin, causing liver and muscle cells to absorb glucose and convert excess into insoluble glycogen. In Type 1 diabetes the pancreas fails to produce enough insulin, whereas in Type 2 diabetes body cells no longer respond to insulin.', markPoints: [{ id: 'mp1', markDescription: 'Pancreas secretes insulin converting glucose to liver glycogen', requiredKeywordGroups: [['insulin'], ['glycogen']] }, { id: 'mp2', markDescription: 'Type 1: pancreas fails to produce sufficient insulin', requiredKeywordGroups: [['type 1'], ['not produce', 'fails to produce', 'lack', 'insufficient']] }, { id: 'mp3', markDescription: 'Type 2: body cells stop responding to insulin', requiredKeywordGroups: [['type 2'], ['respond', 'resistant']] }] } }] },
  { id: 'bio-exam-14', subtopicId: 'bio-6-1', number: 14, stimulus: 'Two parents are both unaffected heterozygous carriers (Ff) for the recessive disorder cystic fibrosis.', parts: [{ id: 'bio-exam-14a', label: 'a)', prompt: 'State the probability (percentage) that their next child will inherit cystic fibrosis and explain why neither parent has symptoms.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Probability is 25% (1 in 4, genotype ff). Neither parent has symptoms because cystic fibrosis is recessive and each carrier has one dominant normal allele (F) that masks the recessive f allele.', markPoints: [{ id: 'mp1', markDescription: 'States 25% (or 1 in 4) probability', numericMatch: { value: 25, tolerance: 0 } }, { id: 'mp2', markDescription: 'Dominant healthy allele F masks recessive f allele', requiredKeywordGroups: [['dominant', 'recessive'], ['mask', 'one copy', 'carrier']] }] } }] },
  { id: 'bio-exam-15', subtopicId: 'bio-6-2', number: 15, stimulus: 'Pedigree dog breeders repeatedly mate closely related prize dogs to preserve flat faces and short legs.', parts: [{ id: 'bio-exam-15a', label: 'a)', prompt: 'Name this process and explain two biological drawbacks of continuing it over many generations.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'This is selective breeding (artificial selection). Repeated mating of relatives causes inbreeding, which reduces the gene pool and makes dogs much more likely to inherit genetic defects and be vulnerable to infectious disease.', markPoints: [{ id: 'mp1', markDescription: 'Identifies selective breeding (artificial selection)', requiredKeywordGroups: [['selective breeding', 'artificial selection']] }, { id: 'mp2', markDescription: 'Inbreeding reduces genetic variation / narrows gene pool', requiredKeywordGroups: [['inbreeding', 'gene pool', 'variation']] }, { id: 'mp3', markDescription: 'Increases inherited genetic defects or disease vulnerability', requiredKeywordGroups: [['defect', 'disorder', 'disease']] }] } }] },
  { id: 'bio-exam-16', subtopicId: 'bio-7-1', number: 16, stimulus: 'Students estimate the total dandelion population on a 500 m² school meadow using 10 randomly placed 1 m² quadrats, counting a total of 40 dandelions across all 10 quadrats.', parts: [{ id: 'bio-exam-16a', label: 'a)', prompt: 'Calculate the estimated total dandelion population on the meadow and describe how to place quadrats without bias.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Mean per m² = 40 ÷ 10 = 4 dandelions/m². Estimated population = 4 × 500 = 2,000 dandelions. Avoid bias by laying two perpendicular tape measures and using a random number generator to choose coordinates.', markPoints: [{ id: 'mp1', markDescription: 'Calculates mean = 4 per m²', numericMatch: { value: 4, tolerance: 0 } }, { id: 'mp2', markDescription: 'Calculates total population = 2,000', numericMatch: { value: 2000, tolerance: 10 } }, { id: 'mp3', markDescription: 'Uses random number generator for grid coordinates', requiredKeywordGroups: [['random number', 'coordinate', 'grid']] }] } }] },
];

export const BIOLOGY_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'bio-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 1: Cell Biology, Organisation, Infection & Bioenergetics (8461/1H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '8461/1H',
    durationMinutes: 105,
    totalMarks: 100,
    sampleQuestions: [
      { number: '01.1', question: 'Compare the structure of a prokaryotic bacterial cell with a eukaryotic plant cell.', marks: 4, markScheme: ['Both have cell membrane, cytoplasm, ribosomes, and cell wall (1 mark)', 'Plant cell has nucleus, chloroplasts, mitochondria, permanent vacuole (2 marks)', 'Bacterial cell has free circular DNA loop and plasmids, no nucleus (1 mark)'] },
      { number: '02.2', question: 'Explain why antibiotics cannot be used to treat viral infections like measles.', marks: 2, markScheme: ['Viruses replicate inside human host cells (1 mark)', 'Antibiotics target bacterial processes without harming human cells (1 mark)'] },
      { number: '03.1', question: 'Describe how bile aids lipid digestion in the small intestine.', marks: 3, markScheme: ['Alkaline to neutralise stomach acid for optimum lipase pH (1 mark)', 'Emulsifies fats into small droplets (1 mark)', 'Increases surface area for faster lipase action (1 mark)'] },
      { number: '04.2', question: 'Explain why moving a pondweed lamp from 10 cm to 20 cm reduces photosynthesis rate.', marks: 2, markScheme: ['By inverse square law (1/d²), light intensity falls to one quarter (1 mark)', 'Light intensity becomes the limiting factor (1 mark)'] },
    ],
  },
  {
    id: 'bio-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 2: Homeostasis, Inheritance, Evolution & Ecology (8461/2H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '8461/2H',
    durationMinutes: 105,
    totalMarks: 100,
    sampleQuestions: [
      { number: '01.1', question: 'Explain how a signal crosses a synapse between a sensory neurone and a relay neurone.', marks: 3, markScheme: ['Electrical impulse triggers neurotransmitter release (1 mark)', 'Neurotransmitters diffuse across the synapse gap (1 mark)', 'Bind to receptors on next neurone starting a new electrical impulse (1 mark)'] },
      { number: '02.2', question: 'Explain how insulin and glucagon maintain blood glucose by negative feedback.', marks: 4, markScheme: ['High glucose: pancreas releases insulin → liver converts excess glucose to glycogen (2 marks)', 'Low glucose: pancreas releases glucagon → liver breaks glycogen back into glucose (2 marks)'] },
      { number: '03.1', question: 'Draw a Punnett square for two heterozygous cystic fibrosis carriers (Ff × Ff) and state the probability of an affected child.', marks: 3, markScheme: ['Gametes F and f on both axes (1 mark)', 'Offspring FF, Ff, Ff, ff (1 mark)', '25% (1 in 4) probability of ff (1 mark)'] },
      { number: '04.2', question: 'Describe how to use a belt transect to investigate how daisy abundance changes from woodland shade into open grass.', marks: 4, markScheme: ['Lay tape measure from shade into open grass (1 mark)', 'Place quadrats at regular intervals along tape (1 mark)', 'Count daisies and measure light intensity at each interval (1 mark)', 'Repeat along parallel transects and calculate means (1 mark)'] },
    ],
  },
  {
    id: 'bio-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 1 (8461/1H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '8461/1H',
    durationMinutes: 105,
    totalMarks: 100,
    sampleQuestions: [
      { number: '01.2', question: 'Calculate the actual diameter in μm of a cell whose image measures 24 mm at ×400 magnification.', marks: 2, markScheme: ['24 mm = 24,000 μm (1 mark)', 'A = 24,000 ÷ 400 = 60 μm (1 mark)'] },
      { number: '02.1', question: 'Compare xylem and phloem vessels in flowering plants.', marks: 3, markScheme: ['Xylem: dead lignified hollow tubes transporting water/minerals upwards (1 mark)', 'Phloem: living sieve tubes transporting dissolved sugars both ways (1 mark)', 'Transpiration stream vs translocation (1 mark)'] },
      { number: '03.3', question: 'Explain how vaccination establishes herd immunity in a population.', marks: 3, markScheme: ['Dead/inactive pathogen stimulates specific antibodies and memory cells (1 mark)', 'Rapid secondary response prevents infection and spread (1 mark)', 'Fewer infected carriers protect unvaccinated vulnerable people (1 mark)'] },
      { number: '04.1', question: 'Define oxygen debt and describe how the body clears lactic acid after sprinting.', marks: 2, markScheme: ['Extra oxygen required after exercise to remove lactic acid (1 mark)', 'Blood carries lactic acid to liver where it is converted back to glucose (1 mark)'] },
    ],
  },
  {
    id: 'bio-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 2 (8461/2H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '8461/2H',
    durationMinutes: 105,
    totalMarks: 100,
    sampleQuestions: [
      { number: '01.2', question: 'Explain the roles of FSH, oestrogen, and LH during the first half of the menstrual cycle.', marks: 3, markScheme: ['FSH matures an egg and stimulates oestrogen (1 mark)', 'Oestrogen thickens uterus lining, inhibits FSH, and triggers LH (1 mark)', 'LH triggers ovulation (1 mark)'] },
      { number: '02.1', question: 'Explain how MRSA bacteria evolve resistance to antibiotics.', marks: 3, markScheme: ['Random mutation creates resistance allele (1 mark)', 'Resistant bacteria survive antibiotic and reproduce (1 mark)', 'Pass resistance allele to offspring, raising frequency (1 mark)'] },
      { number: '03.2', question: 'Give two reasons why the fossil record of early life is incomplete.', marks: 2, markScheme: ['Early organisms were soft-bodied so decayed (1 mark)', 'Geological activity destroyed older fossils (1 mark)'] },
      { number: '04.1', question: 'Explain why draining peat bogs harms both biodiversity and climate.', marks: 2, markScheme: ['Destroys unique bog habitats reducing biodiversity (1 mark)', 'Peat decay/burning releases stored CO₂ enhancing global warming (1 mark)'] },
    ],
  },
  {
    id: 'bio-pp-2022-p1',
    specEra: 'new-9-1',
    year: '2022',
    title: 'Paper 1 (8461/1H)',
    tier: 'Higher',
    series: 'June 2022',
    paperCode: '8461/1H',
    durationMinutes: 105,
    totalMarks: 100,
    sampleQuestions: [
      { number: '01.1', question: 'Describe the three stages of the cell cycle leading to two identical daughter cells.', marks: 3, markScheme: ['Interphase: cell grows, replicates organelles and DNA (1 mark)', 'Mitosis: chromosome sets separate and nucleus divides (1 mark)', 'Cytokinesis: cytoplasm and membrane split into 2 identical cells (1 mark)'] },
      { number: '02.2', question: 'Explain how arteries, capillaries, and veins are adapted to their roles.', marks: 3, markScheme: ['Arteries: thick muscular/elastic walls for high pressure (1 mark)', 'Capillaries: one-cell-thick permeable walls for diffusion (1 mark)', 'Veins: wide lumen and valves to prevent backflow (1 mark)'] },
      { number: '03.1', question: 'Describe the chemical food tests for starch, protein, and reducing sugars.', marks: 3, markScheme: ['Starch: iodine orange-brown → blue-black (1 mark)', 'Protein: Biuret blue → purple (1 mark)', 'Reducing sugar: Benedict’s + heat blue → brick-red (1 mark)'] },
      { number: '04.2', question: 'Explain why yeast fermentation is essential in both bread making and brewing.', marks: 2, markScheme: ['Anaerobic respiration converts glucose into ethanol + CO₂ (1 mark)', 'CO₂ bubbles make dough rise; ethanol produces alcoholic drinks (1 mark)'] },
    ],
  },
  {
    id: 'bio-pp-2022-p2',
    specEra: 'new-9-1',
    year: '2022',
    title: 'Paper 2 (8461/2H)',
    tier: 'Higher',
    series: 'June 2022',
    paperCode: '8461/2H',
    durationMinutes: 105,
    totalMarks: 100,
    sampleQuestions: [
      { number: '01.1', question: 'Contrast Type 1 and Type 2 diabetes in cause and treatment.', marks: 2, markScheme: ['Type 1: insufficient insulin from pancreas → insulin injections (1 mark)', 'Type 2: body cells resist insulin → carbohydrate-controlled diet and exercise (1 mark)'] },
      { number: '02.2', question: 'Compare meiosis with mitosis.', marks: 3, markScheme: ['Mitosis: 1 division, 2 identical diploid cells (46) (1 mark)', 'Meiosis: 2 divisions, 4 varied haploid gametes (23) (2 marks)'] },
      { number: '03.1', question: 'Explain how human insulin is produced using genetically engineered bacteria.', marks: 3, markScheme: ['Cut human insulin gene with enzymes (1 mark)', 'Insert into bacterial plasmid vector (1 mark)', 'GM bacteria multiply rapidly in fermenters producing insulin (1 mark)'] },
      { number: '04.2', question: 'Describe how carbon is recycled between the atmosphere, living organisms, and soil.', marks: 3, markScheme: ['Photosynthesis absorbs CO₂ into plant glucose (1 mark)', 'Feeding passes carbon along food chains (1 mark)', 'Respiration of organisms/decomposers and combustion return CO₂ (1 mark)'] },
    ],
  },
];

// Full A–W Key Terms glossary — 100% unlocked (no Pro blur!)
export const BIOLOGY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'kt-1', term: 'Active site', definition: 'The specifically shaped pocket of an enzyme molecule where the complementary substrate binds.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-2', term: 'Active transport', definition: 'Movement of dissolved molecules or ions across a cell membrane from lower to higher concentration using energy from respiration.', topicNumber: 1, subtopicId: 'bio-1-4', subtopicCode: '1.4' },
  { id: 'kt-3', term: 'Aerobic respiration', definition: 'Exothermic cellular reaction using oxygen to release energy from glucose: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.', topicNumber: 4, subtopicId: 'bio-4-1', subtopicCode: '4.1' },
  { id: 'kt-4', term: 'Antibody', definition: 'Specific protein produced by lymphocytes that binds to complementary antigens on a pathogen.', topicNumber: 3, subtopicId: 'bio-3-1', subtopicCode: '3.1' },
  { id: 'kt-5', term: 'Autosome', definition: 'A chromosome that is not a sex chromosome. A human body cell has 22 pairs of autosomes.', topicNumber: 6, subtopicId: 'bio-6-1', subtopicCode: '6.1' },
  { id: 'kt-6', term: 'Auxin', definition: 'A plant hormone made in the tips of shoots and roots that controls cell elongation.', topicNumber: 5, subtopicId: 'bio-5-1', subtopicCode: '5.1' },
  { id: 'kt-7', term: 'Basal metabolic rate', definition: 'The minimum rate at which the body transfers energy while at complete rest.', topicNumber: 4, subtopicId: 'bio-4-1', subtopicCode: '4.1' },
  { id: 'kt-8', term: "Benedict's test", definition: 'Chemical test for reducing sugars (like glucose) turning from blue to brick-red precipitate when heated.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-9', term: 'Bile', definition: 'Alkaline fluid produced in the liver and stored in the gall bladder that neutralises stomach acid and emulsifies fats.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-10', term: 'Binary fission', definition: 'Simple asexual cell division used by prokaryotic cells such as bacteria to reproduce rapidly.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-11', term: 'Cellulose', definition: 'Tough insoluble carbohydrate polymer that forms the rigid cell wall of plant and algal cells.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-12', term: 'Chloroplast', definition: 'Sub-cellular organelle in green plants and algae containing chlorophyll where photosynthesis occurs.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-13', term: 'Chromosome', definition: 'Thread-like coiled length of DNA found inside the nucleus carrying hundreds of genes.', topicNumber: 1, subtopicId: 'bio-1-3', subtopicCode: '1.3' },
  { id: 'kt-14', term: 'Denatured', definition: 'Irreversible alteration of an enzyme’s active site shape due to extreme temperature or pH.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-15', term: 'Diffusion', definition: 'Net passive movement of particles from a region of higher concentration to lower concentration.', topicNumber: 1, subtopicId: 'bio-1-4', subtopicCode: '1.4' },
  { id: 'kt-16', term: 'Effector', definition: 'A muscle or gland that produces a coordinated response to a stimulus.', topicNumber: 5, subtopicId: 'bio-5-1', subtopicCode: '5.1' },
  { id: 'kt-17', term: 'Emulsify', definition: 'Breaking large fat globules into tiny droplets to maximise surface area for lipase action.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-18', term: 'Eukaryotic cell', definition: 'Complex cell whose DNA is enclosed inside a membrane-bound nucleus.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-19', term: 'Flagellum', definition: 'Whip-like tail used by some bacterial cells and sperm cells for locomotion.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-20', term: 'Guard cell', definition: 'Pair of specialised kidney-shaped cells controlling the opening and closing of a leaf stoma.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-21', term: 'Homeostasis', definition: 'Regulation of internal body conditions (such as temperature and blood glucose) to maintain optimum enzyme function.', topicNumber: 5, subtopicId: 'bio-5-1', subtopicCode: '5.1' },
  { id: 'kt-22', term: 'Interphase', definition: 'Growth and DNA replication phase of the cell cycle prior to mitosis.', topicNumber: 1, subtopicId: 'bio-1-3', subtopicCode: '1.3' },
  { id: 'kt-23', term: 'Limiting factor', definition: 'An environmental factor in shortest supply that caps the rate of a biological process such as photosynthesis.', topicNumber: 4, subtopicId: 'bio-4-1', subtopicCode: '4.1' },
  { id: 'kt-24', term: 'Magnification', definition: 'Ratio of image size to actual object size (I ÷ A).', topicNumber: 1, subtopicId: 'bio-1-2', subtopicCode: '1.2' },
  { id: 'kt-25', term: 'Meristem', definition: 'Growing tissue at plant root and shoot tips containing undifferentiated stem cells.', topicNumber: 1, subtopicId: 'bio-1-3', subtopicCode: '1.3' },
  { id: 'kt-26', term: 'Mitochondria', definition: 'Organelles where aerobic respiration takes place to transfer energy for cell activities.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-27', term: 'Mitosis', definition: 'Cell division producing two genetically identical diploid daughter cells for growth and repair.', topicNumber: 1, subtopicId: 'bio-1-3', subtopicCode: '1.3' },
  { id: 'kt-28', term: 'Nucleus', definition: 'Membrane-bound organelle storing chromosomes (DNA) and controlling cellular activities.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-29', term: 'Osmosis', definition: 'Net diffusion of water from a dilute solution to a more concentrated solution through a partially permeable membrane.', topicNumber: 1, subtopicId: 'bio-1-4', subtopicCode: '1.4' },
  { id: 'kt-30', term: 'Pathogen', definition: 'A disease-causing microorganism such as a bacterium, virus, fungus, or protist.', topicNumber: 3, subtopicId: 'bio-3-1', subtopicCode: '3.1' },
  { id: 'kt-31', term: 'Photosynthesis', definition: 'Endothermic reaction in chloroplasts using light energy to turn carbon dioxide and water into glucose and oxygen.', topicNumber: 4, subtopicId: 'bio-4-1', subtopicCode: '4.1' },
  { id: 'kt-32', term: 'Plasmid', definition: 'Small circular ring of DNA found in prokaryotic bacteria alongside the main chromosome loop.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-33', term: 'Prokaryotic cell', definition: 'Small, simple cell lacking a membrane-bound nucleus, such as a bacterial cell.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-34', term: 'Reflex arc', definition: 'Direct neural pathway bypassing conscious brain centres to produce an automatic protective response.', topicNumber: 5, subtopicId: 'bio-5-1', subtopicCode: '5.1' },
  { id: 'kt-35', term: 'Resolution', definition: 'Ability of a microscope to distinguish two closely spaced points as separate objects.', topicNumber: 1, subtopicId: 'bio-1-2', subtopicCode: '1.2' },
  { id: 'kt-36', term: 'Ribosome', definition: 'Tiny non-membrane-bound organelle responsible for synthesising proteins from amino acids.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-37', term: 'Stem cell', definition: 'Undifferentiated cell capable of dividing and differentiating into specialised cell types.', topicNumber: 1, subtopicId: 'bio-1-3', subtopicCode: '1.3' },
  { id: 'kt-38', term: 'Synapse', definition: 'Microscopic gap between two neurones crossed by diffusing neurotransmitter molecules.', topicNumber: 5, subtopicId: 'bio-5-1', subtopicCode: '5.1' },
  { id: 'kt-39', term: 'Transpiration', definition: 'Evaporation and loss of water vapour from leaves through open stomata, pulling water up the xylem.', topicNumber: 2, subtopicId: 'bio-2-1', subtopicCode: '2.1' },
  { id: 'kt-40', term: 'Vacuole', definition: 'Fluid-filled sac in plant cells holding cell sap that keeps the cell turgid.', topicNumber: 1, subtopicId: 'bio-1-1', subtopicCode: '1.1' },
  { id: 'kt-41', term: 'White blood cell', definition: 'Immune cell defending against pathogens via phagocytosis, antibodies, and antitoxins.', topicNumber: 3, subtopicId: 'bio-3-1', subtopicCode: '3.1' },
];
