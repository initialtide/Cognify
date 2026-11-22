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

export const IGCSE_CHEMISTRY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'States of Matter & Experimental Techniques',
    subtopics: [
      { id: 'igchem-1-1', code: '1.1', slug: '1.1-states-of-matter-diffusion', title: 'States of Matter, Heating Curves & Diffusion', readingMinutes: 9, hasDeepContent: true },
      { id: 'igchem-1-2', code: '1.2', slug: '1.2-separation-purification-chromatography', title: 'Separation Techniques, Purity & Chromatography', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Atoms, Elements & Bonding',
    subtopics: [
      { id: 'igchem-2-1', code: '2.1', slug: '2.1-atomic-structure-isotopes', title: 'Atomic Structure, Electron Shells & Isotopes', readingMinutes: 9, hasDeepContent: true },
      { id: 'igchem-2-2', code: '2.2', slug: '2.2-ionic-covalent-metallic-bonding', title: 'Ionic, Covalent, Giant Covalent & Metallic Bonding', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Stoichiometry & The Mole Concept',
    subtopics: [
      { id: 'igchem-3-1', code: '3.1', slug: '3.1-moles-empirical-formula-titration', title: 'Moles, Reacting Masses, Gas Volumes & Titrations', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Electrochemistry',
    subtopics: [
      { id: 'igchem-4-1', code: '4.1', slug: '4.1-electrolysis-half-equations-cells', title: 'Electrolysis, Half-Equations & Hydrogen Fuel Cells', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Chemical Energetics',
    subtopics: [
      { id: 'igchem-5-1', code: '5.1', slug: '5.1-exothermic-endothermic-bond-energy', title: 'Exothermic & Endothermic Reactions & Bond Energies', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Chemical Reactions, Rates & Equilibria',
    subtopics: [
      { id: 'igchem-6-1', code: '6.1', slug: '6.1-rates-collision-theory-catalysts', title: 'Collision Theory, Rates of Reaction & Catalysts', readingMinutes: 10, hasDeepContent: true },
      { id: 'igchem-6-2', code: '6.2', slug: '6.2-reversible-reactions-haber-contact', title: 'Reversible Reactions, Equilibrium, Haber & Contact Processes', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 7,
    title: 'Acids, Bases, Salts & Chemical Analysis',
    subtopics: [
      { id: 'igchem-7-1', code: '7.1', slug: '7.1-acids-bases-oxides-salts', title: 'Acids, Bases, Oxides & Salt Preparation', readingMinutes: 10, hasDeepContent: true },
      { id: 'igchem-7-2', code: '7.2', slug: '7.2-qualitative-analysis-ion-gas-tests', title: 'Flame Tests, Cation/Anion Precipitates & Gas Tests', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 8,
    title: 'The Periodic Table & Metals',
    subtopics: [
      { id: 'igchem-8-1', code: '8.1', slug: '8.1-periodic-table-groups-transitions', title: 'Periodic Table: Groups I, VII, VIII & Transition Metals', readingMinutes: 10, hasDeepContent: true },
      { id: 'igchem-8-2', code: '8.2', slug: '8.2-reactivity-series-extraction-rusting', title: 'Reactivity Series, Extraction of Iron & Aluminium & Rusting', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 9,
    title: 'Organic Chemistry',
    subtopics: [
      { id: 'igchem-9-1', code: '9.1', slug: '9.1-crude-oil-alkanes-alkenes', title: 'Crude Oil, Fractional Distillation, Alkanes & Alkenes', readingMinutes: 10, hasDeepContent: true },
      { id: 'igchem-9-2', code: '9.2', slug: '9.2-alcohols-carboxylic-acids-polymers', title: 'Alcohols, Carboxylic Acids, Esters & Polymers', readingMinutes: 11, hasDeepContent: true },
    ],
  },
  {
    number: 10,
    title: 'Chemistry of the Environment',
    subtopics: [
      { id: 'igchem-10-1', code: '10.1', slug: '10.1-water-air-greenhouse-pollutants', title: 'Water Treatment, Air Pollutants & Climate Change', readingMinutes: 9, hasDeepContent: true },
    ],
  },
];

export const IGCSE_CHEMISTRY_NOTES: Record<string, NoteLesson> = {
  'igchem-1-1': {
    subtopicId: 'igchem-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'States of Matter, Heating Curves & Diffusion',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - States of Matter & Changing State',
    youtubeId: 'hkBrw2fG75U',
    videoChannel: 'Cognito',
    videoDuration: '4:21',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Solids, Liquids & Gases (Kinetic Theory)', cardId: 'igchem-1-1-c1' },
      { time: '1:30', seconds: 90, label: 'Heating & Cooling Curves', cardId: 'igchem-1-1-c2' },
      { time: '2:55', seconds: 175, label: 'Diffusion & Relative Molecular Mass (M_r)', cardId: 'igchem-1-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-1-1-c1',
        title: 'Kinetic Particle Model of Solids, Liquids & Gases',
        summary: 'Compare arrangement, separation, and motion of particles across all three states.',
        bullets: [
          '**Solids** - tightly packed in a regular lattice, vibrating around fixed positions (fixed shape & volume).',
          '**Liquids** - close together but randomly arranged, able to slide past one another (fixed volume, takes container shape).',
          '**Gases** - far apart, moving rapidly and randomly in all directions (compressible, fills container).',
        ],
        subsections: [
          {
            heading: 'Effect of Temperature & Pressure on Gases',
            bullets: [
              '**Increasing temperature** - raises average kinetic energy of particles so they move faster and expand the gas.',
              '**Increasing pressure** - pushes gas particles closer together, decreasing volume.',
            ],
            exampleHeading: 'Concrete example: Predicting state from melting & boiling points',
            examples: [
              'Bromine melts at −7 °C and boils at 59 °C. At room temperature (25 °C), 25 °C lies between −7 °C and 59 °C, so bromine is a liquid.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'kinetic particle theory', definition: 'The model describing matter as tiny particles in constant motion whose arrangement and energy determine state.' },
        ],
      },
      {
        id: 'igchem-1-1-c2',
        title: 'Heating Curves & Changes of State',
        summary: 'Flat horizontal plateaus occur during melting and boiling because energy breaks intermolecular forces instead of raising temperature.',
        bullets: [
          '**State changes** - solid → liquid (**melting**), liquid → gas (**boiling/evaporation**), gas → liquid (**condensing**), liquid → solid (**freezing**).',
        ],
        subsections: [
          {
            heading: 'Why Heating Curves Have Flat Sections',
            bullets: [
              '**Sloping regions** - heat increases the average kinetic energy of particles, so temperature rises.',
              '**Flat plateaus** - heat energy overcomes forces of attraction between particles rather than raising kinetic energy, so temperature stays constant until the change of state finishes.',
            ],
            exampleHeading: 'Concrete example: Pure water heated from −10 °C to 110 °C',
            examples: [
              'Horizontal plateaus appear sharply at exactly 0 °C (melting) and 100 °C (boiling); impure water melts over a range below 0 °C and boils above 100 °C.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'boiling point', definition: 'The fixed temperature at which a pure liquid rapidly turns into a gas throughout its bulk.' },
        ],
      },
      {
        id: 'igchem-1-1-c3',
        title: 'Diffusion & Relative Molecular Mass (M_r)',
        summary: 'Lighter gas molecules (smaller M_r) move faster at the same temperature and diffuse more rapidly.',
        bullets: [
          '**Diffusion** - net movement of particles from a region of **higher concentration** to **lower concentration** down a concentration gradient due to random motion.',
        ],
        subsections: [
          {
            heading: 'Ammonia + Hydrogen Chloride Tube Experiment',
            bullets: [
              '**Effect of M_r** - NH₃ has M_r = 17 while HCl has M_r = 36.5. Because NH₃ is lighter, it diffuses faster and the white ring of NH₄Cl forms **closer to the HCl end**.',
            ],
            exampleHeading: 'Worked comparison: NH₃ (M_r = 17) vs HCl (M_r = 36.5)',
            examples: [
              'Cotton wool soaked in conc. NH₃ (left) and conc. HCl (right) release gases that meet to form a white smoke ring of ammonium chloride closer to the HCl end.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'diffusion', definition: 'Net spreading of particles from higher concentration to lower concentration by random motion.' },
        ],
        memoryAid: 'Lighter M_r = Faster diffusion! NH₃ (17) beats HCl (36.5) so the white ring forms nearer HCl.',
        commonMistake: 'Never say diffusion happens because particles "want to spread out" — state that it results from RANDOM motion down a concentration gradient.',
      },
    ],
    keyTerms: [
      { term: 'Kinetic particle theory', definition: 'Model describing solids, liquids, and gases in terms of particle arrangement and motion.' },
      { term: 'Diffusion', definition: 'Net movement of particles from higher to lower concentration due to random motion.' },
      { term: 'Boiling point', definition: 'Fixed temperature at which a pure liquid changes to gas throughout the liquid.' },
      { term: 'Sublimation', definition: 'Direct state change from solid to gas without passing through the liquid state.' },
    ],
    checklistPoints: [
      'Describe particle arrangement, spacing, and motion in solids, liquids, and gases',
      'Explain flat plateaus on heating curves in terms of breaking intermolecular forces',
      'Predict diffusion rates from relative molecular mass M_r (NH₃ vs HCl white ring)',
    ],
  },

  'igchem-1-2': {
    subtopicId: 'igchem-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Separation Techniques, Purity & Chromatography',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Separation Techniques - Filtration | Evaporation | Crystallisation',
    youtubeId: '29Rd-Lly-fw',
    videoChannel: 'Cognito',
    videoDuration: '5:19',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Filtration, Crystallisation & Purity Tests', cardId: 'igchem-1-2-c1' },
      { time: '1:50', seconds: 110, label: 'Simple & Fractional Distillation', cardId: 'igchem-1-2-c2' },
      { time: '3:35', seconds: 215, label: 'Paper Chromatography, R_f Values & Locating Agents', cardId: 'igchem-1-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-1-2-c1',
        title: 'Filtration, Crystallisation & Testing Purity',
        summary: 'Filter insoluble solids; crystallise soluble salts gently; pure substances melt and boil at sharp fixed temperatures.',
        bullets: [
          '**Filtration** - separates an **insoluble** solid (residue) from a liquid/solution (filtrate).',
          '**Crystallisation** - gently evaporate solvent to the crystallisation point, cool so crystals form, filter, wash with minimal cold water, and pat dry.',
        ],
        subsections: [
          {
            heading: 'Assessing Purity',
            bullets: [
              '**Pure substance** - melts and boils at a **single sharp fixed temperature** (e.g. pure water: 0 °C and 100 °C).',
              '**Impure mixture** - melts **below** and over a range, and boils **above** the pure boiling point.',
            ],
            exampleHeading: 'Concrete example: Checking aspirin purity',
            examples: [
              'Pure aspirin melts sharply at 135 °C; a sample melting from 128–133 °C is impure.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'filtrate', definition: 'The liquid or solution that passes through filter paper during filtration.' },
        ],
      },
      {
        id: 'igchem-1-2-c2',
        title: 'Simple Distillation vs Fractional Distillation',
        summary: 'Use simple distillation for solvent + dissolved solid, and fractional distillation for miscible liquids with close boiling points.',
        bullets: [
          '**Simple distillation** - separates a liquid solvent from a dissolved solid (e.g. pure water from sea water) via boiling and cooling in a Liebig condenser.',
          '**Fractional distillation** - separates **miscible liquids** with different boiling points (e.g. ethanol 78 °C and water 100 °C) using a glass-bead fractionating column.',
        ],
        subsections: [
          {
            heading: 'Condenser Water Flow & Thermometer Placement',
            bullets: [
              '**Cold water enters at the bottom** of the condenser and leaves at the top to ensure complete cooling jacket filling.',
              '**Thermometer bulb** sits level with the side-arm to record the exact boiling point of the distilling vapour.',
            ],
            exampleHeading: 'Concrete example: Separating ethanol (78 °C) from water (100 °C)',
            examples: [
              'Ethanol vapour reaches the top of the fractionating column first and condenses at 78 °C while higher-boiling water vapour condenses back down the column.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fractional distillation', definition: 'Separation of miscible liquids with different boiling points using a fractionating column.' },
        ],
      },
      {
        id: 'igchem-1-2-c3',
        title: 'Paper Chromatography, R_f Values & Locating Agents',
        summary: 'Draw the baseline in PENCIL above the solvent level, compute R_f = spot ÷ solvent front, and spray locating agents for colourless spots.',
        bullets: [
          '**R_f value formula** - **R_f = distance travelled by substance ÷ distance travelled by solvent front** (always between 0 and 1, no units).',
        ],
        subsections: [
          {
            heading: 'Key Lab Rules & Colourless Mixtures',
            bullets: [
              '**Pencil baseline** - graphite is insoluble so it will not dissolve and run up the paper like ink.',
              '**Baseline above solvent** - prevents spots from dissolving directly into the beaker solvent.',
              '**Locating agents** - colourless substances (like amino acids or sugars) are sprayed with a **locating agent** (e.g. ninhydrin) to produce visible coloured spots.',
            ],
            exampleHeading: 'Worked example: Calculating R_f',
            examples: [
              'Spot travels 4.2 cm while solvent front travels 7.0 cm → R_f = 4.2 ÷ 7.0 = 0.60.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'locating agent', definition: 'A chemical sprayed onto a chromatogram to react with colourless spots and make them visible.' },
          { term: 'R_f value', definition: 'Retention factor = distance moved by spot divided by distance moved by solvent front.' },
        ],
        memoryAid: 'Pencil line ABOVE solvent; R_f = Spot ÷ Solvent (always < 1)!',
        commonMistake: 'Never measure chromatography distances from the bottom edge of the paper — ALWAYS measure from the PENCIL BASELINE!',
      },
    ],
    keyTerms: [
      { term: 'Filtrate', definition: 'Liquid that passes through filter paper.' },
      { term: 'Fractional distillation', definition: 'Technique separating miscible liquids with different boiling points.' },
      { term: 'R_f value', definition: 'Distance travelled by substance ÷ distance travelled by solvent front.' },
      { term: 'Locating agent', definition: 'Reagent used to reveal colourless spots on a chromatogram.' },
    ],
    checklistPoints: [
      'Choose the right separation technique (filtration, crystallisation, simple/fractional distillation, chromatography)',
      'Distinguish pure vs impure substances by sharpness of melting/boiling points',
      'Calculate R_f values and explain why pencil baselines and locating agents are used',
    ],
  },

  'igchem-2-1': {
    subtopicId: 'igchem-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Atomic Structure, Electron Shells & Isotopes',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Elements, Isotopes & Relative Atomic Mass',
    youtubeId: '-FBk8cNvJds',
    videoChannel: 'Cognito',
    videoDuration: '7:22',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Protons, Neutrons, Electrons & Notation', cardId: 'igchem-2-1-c1' },
      { time: '2:25', seconds: 145, label: 'Electronic Configuration (2,8,8,2)', cardId: 'igchem-2-1-c2' },
      { time: '4:50', seconds: 290, label: 'Isotopes & Relative Atomic Mass (A_r)', cardId: 'igchem-2-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-2-1-c1',
        title: 'Subatomic Particles & Atomic Notation',
        summary: 'Protons (+1, mass 1) and neutrons (0, mass 1) occupy the nucleus; electrons (−1, mass 1/1840) orbit in shells.',
        bullets: [
          '**Numbers** - **Proton (atomic) number Z** = protons (= electrons in a neutral atom); **Nucleon (mass) number A** = protons + neutrons; Neutrons = A − Z.',
        ],
        subsections: [
          {
            heading: 'Ions vs Neutral Atoms',
            bullets: [
              '**Cations (+)** - formed by LOSING electrons (e.g. Mg²⁺ has 12 protons and 10 electrons).',
              '**Anions (−)** - formed by GAINING electrons (e.g. Cl⁻ has 17 protons and 18 electrons).',
            ],
            exampleHeading: 'Worked example: Particles in ²³₁₁Na⁺',
            examples: [
              'Protons = 11, Neutrons = 23 − 11 = 12, Electrons = 11 − 1 = 10.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'nucleon number', definition: 'The total number of protons and neutrons in the nucleus of an atom (also called mass number A).' },
        ],
        diagram: 'atomic-structure',
      },
      {
        id: 'igchem-2-1-c2',
        title: 'Electronic Configuration & The Periodic Table',
        summary: 'Shells fill 2, 8, 8, 2 for the first 20 elements; outer electrons give Group number and occupied shells give Period number.',
        bullets: [
          '**Shell capacities (elements 1–20)** - 1st shell holds up to 2; 2nd holds up to 8; 3rd holds up to 8; 4th starts with 2 (calcium = 2,8,8,2).',
        ],
        subsections: [
          {
            heading: 'Reading Group & Period Directly',
            bullets: [
              '**Group number** - equals the number of outer-shell (valence) electrons (determines chemical properties).',
              '**Period number** - equals the number of occupied electron shells.',
            ],
            exampleHeading: 'Worked example: Sulfur (Z = 16)',
            examples: [
              'Configuration = 2,8,6 → 3 shells (Period 3) and 6 outer electrons (Group VI / 16).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'electronic configuration', definition: 'The arrangement of electrons in concentric energy shells around an atomic nucleus (e.g. 2,8,1).' },
        ],
      },
      {
        id: 'igchem-2-1-c3',
        title: 'Isotopes & Calculating Relative Atomic Mass (A_r)',
        summary: 'Isotopes have identical chemical properties (same outer electrons) and A_r is the abundance-weighted average mass.',
        bullets: [
          '**Why isotopes react identically** - they have the **same number of electrons** (same electronic configuration); only physical properties like density/mass differ slightly.',
        ],
        subsections: [
          {
            heading: 'Weighted Average A_r Formula',
            bullets: [
              '**A_r formula** - A_r = Σ(isotope mass × % abundance) ÷ 100.',
            ],
            exampleHeading: 'Worked example: Chlorine (75% ³⁵Cl and 25% ³⁷Cl)',
            examples: [
              'A_r = ((35 × 75) + (37 × 25)) ÷ 100 = (2625 + 925) ÷ 100 = 35.5.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'isotope', definition: 'Different atoms of the same element containing the same number of protons but different numbers of neutrons.' },
          { term: 'relative atomic mass', definition: 'The weighted average mass of naturally occurring isotopes of an element on a scale where ¹²C = 12.' },
        ],
        memoryAid: 'Group = outer electrons; Period = number of shells; Isotopes = same protons & electrons, different neutrons!',
        commonMistake: 'When explaining why isotopes have identical chemical properties, always state they have the SAME NUMBER OF OUTER ELECTRONS (not just same protons).',
      },
    ],
    keyTerms: [
      { term: 'Nucleon number', definition: 'Total number of protons and neutrons in a nucleus.' },
      { term: 'Electronic configuration', definition: 'Distribution of electrons in atomic shells (e.g. 2,8,8,1).' },
      { term: 'Isotope', definition: 'Atoms of the same element with equal protons but different neutrons.' },
      { term: 'Relative atomic mass (A_r)', definition: 'Abundance-weighted average mass of isotopes relative to ¹²C = 12.' },
    ],
    checklistPoints: [
      'Determine protons, neutrons, and electrons for neutral atoms and ions',
      'Write electronic configurations for elements 1–20 and link them to Group and Period',
      'Calculate A_r from isotopic abundances and explain why isotopes react identically',
    ],
  },

  'igchem-2-2': {
    subtopicId: 'igchem-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Ionic, Covalent, Giant Covalent & Metallic Bonding',
    readingMinutes: 11,
    videoTitle: 'GCSE Chemistry - Covalent Bonding - Formation | Drawing Covalent Bonds',
    youtubeId: '7IkYm7ZgiAw',
    videoChannel: 'Cognito',
    videoDuration: '5:56',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Ionic Lattices & Properties', cardId: 'igchem-2-2-c1' },
      { time: '2:00', seconds: 120, label: 'Simple Molecular Covalent & Giant Covalent', cardId: 'igchem-2-2-c2' },
      { time: '4:05', seconds: 245, label: 'Metallic Bonding & Alloys', cardId: 'igchem-2-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-2-2-c1',
        title: 'Ionic Bonding & Giant Ionic Lattices',
        summary: 'Metals transfer electrons to non-metals, forming giant ionic lattices with high melting points that conduct ONLY when molten or aqueous.',
        bullets: [
          '**Ionic bond** - strong **electrostatic attraction** between oppositely charged ions (metal cations + non-metal anions).',
        ],
        subsections: [
          {
            heading: 'Explaining Ionic Properties',
            bullets: [
              '**High melting/boiling points** - lots of energy is needed to overcome the strong electrostatic forces throughout the giant 3D lattice.',
              '**Electrical conductivity** - do NOT conduct when solid (ions fixed in lattice), DO conduct when **molten or dissolved in water** because ions are free to move and carry charge.',
            ],
            exampleHeading: 'Worked example: Magnesium oxide (MgO) formation',
            examples: [
              'Mg (2,8,2) loses 2 electrons → Mg²⁺ (2,8); O (2,6) gains 2 electrons → O²⁻ (2,8).',
              'Higher ion charges (+2/−2 vs +1/−1 in NaCl) make MgO’s melting point much higher than NaCl.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ionic bond', definition: 'Strong electrostatic attraction between oppositely charged ions formed by electron transfer.' },
        ],
        diagram: 'ionic-covalent-bonding',
      },
      {
        id: 'igchem-2-2-c2',
        title: 'Simple Molecular vs Giant Covalent Structures',
        summary: 'Simple molecules melt easily (weak intermolecular forces); giant covalent lattices like diamond, graphite, and SiO₂ have very high melting points.',
        bullets: [
          '**Simple covalent (e.g. CO₂, CH₄, H₂O)** - strong covalent bonds INSIDE molecules, but **weak intermolecular forces** BETWEEN molecules → low melting/boiling points and no electrical conductivity.',
        ],
        subsections: [
          {
            heading: 'Diamond, Graphite & Silicon(IV) Oxide (SiO₂)',
            bullets: [
              '**Diamond** - each C forms **4** strong covalent bonds in a rigid tetrahedral lattice → very hard, high m.p., no free electrons (insulator).',
              '**Graphite** - each C forms **3** covalent bonds in hexagonal layers; weak forces between layers let layers slide (lubricant) and **1 delocalised electron per C** conducts electricity.',
              '**SiO₂** - giant tetrahedral structure similar to diamond (1 Si : 2 O) → very hard, high m.p., insulator.',
            ],
            exampleHeading: 'Concrete comparison: Why graphite conducts while diamond does not',
            examples: [
              'Graphite has 1 delocalised electron per carbon atom free to move along its layers; diamond uses all 4 outer electrons in covalent bonds.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'intermolecular forces', definition: 'Weak forces of attraction between separate covalent molecules that break during melting or boiling.' },
          { term: 'delocalised electrons', definition: 'Outer electrons not bound to a single atom, free to move through graphite or a metal lattice and carry charge.' },
        ],
        commonMistake: 'NEVER write that melting water or CO₂ breaks covalent bonds — melting simple molecules ONLY overcomes weak INTERMOLECULAR forces!',
      },
      {
        id: 'igchem-2-2-c3',
        title: 'Metallic Bonding & Why Alloys Are Harder',
        summary: 'Metals consist of positive metal ions in a sea of delocalised electrons; different-sized atoms in alloys distort layers to stop sliding.',
        bullets: [
          '**Metallic bond** - electrostatic attraction between a giant lattice of **positive metal ions** and a **sea of delocalised electrons**.',
        ],
        subsections: [
          {
            heading: 'Malleability & Alloy Strength',
            bullets: [
              '**Pure metals are malleable** - regular layers of identically sized ions slide smoothly over each other without breaking metallic attraction.',
              '**Alloys (e.g. brass, steel) are harder** - differently sized foreign atoms **distort the regular layers**, making it much harder for layers to slide.',
            ],
            exampleHeading: 'Concrete example: Pure iron vs Steel',
            examples: [
              'Adding small carbon atoms disrupts iron’s regular lattice layers, turning soft pure iron into strong, hard steel.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'alloy', definition: 'A mixture of a metal with one or more other elements whose differently sized atoms disrupt regular layers, increasing hardness.' },
        ],
        memoryAid: 'Ionic melts → FREE IONS conduct; Metals & Graphite → DELOCALISED ELECTRONS conduct!',
      },
    ],
    keyTerms: [
      { term: 'Ionic bond', definition: 'Electrostatic attraction between oppositely charged ions.' },
      { term: 'Intermolecular forces', definition: 'Weak attractions between simple covalent molecules.' },
      { term: 'Delocalised electrons', definition: 'Mobile electrons free to move through a metal or graphite lattice.' },
      { term: 'Alloy', definition: 'Mixture of a metal with other elements that disrupts lattice layers for greater hardness.' },
    ],
    checklistPoints: [
      'Explain ionic melting points and molten/aqueous conductivity via ions',
      'Distinguish weak intermolecular forces in simple molecules from giant covalent lattices (diamond, graphite, SiO₂)',
      'Explain metallic conductivity, malleability, and why alloys are harder than pure metals',
    ],
  },

  'igchem-3-1': {
    subtopicId: 'igchem-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Moles, Reacting Masses, Gas Volumes & Titrations',
    readingMinutes: 11,
    videoTitle: 'GCSE Chemistry - Moles, Concentration & Volume Calculations',
    youtubeId: 'MEQ1YGxfAQ4',
    videoChannel: 'Cognito',
    videoDuration: '6:03',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Moles, Avogadro Constant & Reacting Masses', cardId: 'igchem-3-1-c1' },
      { time: '2:00', seconds: 120, label: 'Gas Volumes (24 dm³) & Solution Concentration', cardId: 'igchem-3-1-c2' },
      { time: '4:05', seconds: 245, label: 'Empirical Formula, Limiting Reactant & % Yield', cardId: 'igchem-3-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-3-1-c1',
        title: 'The Mole, Avogadro’s Constant & Reacting Masses',
        summary: 'One mole contains 6.02 × 10²³ particles; convert mass → moles → mole ratio → target mass.',
        bullets: [
          '**Mole-mass formula** - **n = mass (g) ÷ M_r**; 1 mole of any substance contains **6.02 × 10²³** particles (Avogadro’s constant).',
        ],
        subsections: [
          {
            heading: 'Four-Step Reacting Mass Method',
            bullets: [
              '**Step 1–4** - (1) Write balanced equation; (2) Find moles of known substance; (3) Use stoichiometric ratio; (4) Multiply by target M_r.',
            ],
            exampleHeading: 'Worked example: Mass of MgO from 4.8 g of Mg (2Mg + O₂ → 2MgO)',
            examples: [
              'Moles of Mg = 4.8 ÷ 24 = 0.20 mol → 1:1 ratio gives 0.20 mol MgO.',
              'M_r(MgO) = 24 + 16 = 40 → Mass = 0.20 × 40 = 8.0 g.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mole', definition: 'The SI unit of amount of substance containing 6.02 × 10²³ particles (Avogadro’s constant).' },
        ],
      },
      {
        id: 'igchem-3-1-c2',
        title: 'Molar Gas Volume (24 dm³) & Titration Concentration',
        summary: '1 mol of any gas occupies 24 dm³ at r.t.p.; always convert cm³ to dm³ by dividing by 1,000.',
        bullets: [
          '**Gas volume at r.t.p.** - **n = Volume (dm³) ÷ 24** (or Volume (cm³) ÷ 24,000).',
          '**Solutions & titrations** - **n = c × V** where c is in mol/dm³ and V is in **dm³** (cm³ ÷ 1000).',
        ],
        subsections: [
          {
            heading: 'Worked Titration Calculation',
            bullets: [
              '**Concentration conversion** - g/dm³ = mol/dm³ × M_r.',
            ],
            exampleHeading: 'Worked example: 25.0 cm³ of NaOH neutralised by 20.0 cm³ of 0.50 mol/dm³ HCl',
            examples: [
              'n(HCl) = 0.50 × (20.0 / 1000) = 0.010 mol → 1:1 ratio gives n(NaOH) = 0.010 mol.',
              'c(NaOH) = 0.010 ÷ (25.0 / 1000) = 0.40 mol/dm³.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'molar gas volume', definition: 'The volume occupied by 1 mole of any gas at room temperature and pressure (24 dm³).' },
        ],
        commonMistake: 'Forgetting to divide cm³ by 1,000 before using n = c × V is the #1 error in titration questions!',
      },
      {
        id: 'igchem-3-1-c3',
        title: 'Empirical Formula, Limiting Reactant & % Yield / Purity',
        summary: 'Divide mass/% by A_r to get the simplest mole ratio; the limiting reactant caps maximum product.',
        bullets: [
          '**Empirical formula** - simplest whole-number ratio of atoms (divide mass or % by A_r, then divide all by the smallest mole value).',
          '**Percentage yield & purity** - **% yield = (actual ÷ theoretical) × 100%**; **% purity = (mass of pure ÷ total impure mass) × 100%**.',
        ],
        subsections: [
          {
            heading: 'Molecular Formula from Empirical Formula',
            bullets: [
              '**Multiplier** - factor = M_r(molecular) ÷ M_r(empirical); multiply every subscript by that integer.',
            ],
            exampleHeading: 'Worked example: 80% C and 20% H with M_r = 30',
            examples: [
              'Moles: C = 80/12 = 6.67, H = 20/1 = 20 → divide by 6.67 → C₁H₃ (empirical CH₃, mass 15).',
              'Multiplier = 30 ÷ 15 = 2 → Molecular formula = C₂H₆.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'empirical formula', definition: 'The simplest whole-number ratio of atoms of each element in a compound.' },
          { term: 'limiting reactant', definition: 'The reactant that is completely used up first, determining the maximum amount of product formed.' },
        ],
        memoryAid: 'Three Golden Mole Equations: n = m/M_r | n = cV (dm³) | n = V_gas / 24!',
      },
    ],
    keyTerms: [
      { term: 'Mole', definition: 'Amount of substance containing 6.02 × 10²³ particles.' },
      { term: 'Molar gas volume', definition: '24 dm³ per mole of any gas at room temperature and pressure.' },
      { term: 'Empirical formula', definition: 'Simplest whole-number ratio of atoms in a compound.' },
      { term: 'Limiting reactant', definition: 'Reactant completely consumed first, capping product yield.' },
    ],
    checklistPoints: [
      'Convert fluently between mass, moles, gas volume (24 dm³), and solution concentration (mol/dm³)',
      'Solve acid–alkali titration calculations with cm³ → dm³ conversions',
      'Derive empirical and molecular formulae, identify limiting reactants, and compute % yield / % purity',
    ],
  },

  'igchem-4-1': {
    subtopicId: 'igchem-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Electrolysis, Half-Equations & Hydrogen Fuel Cells',
    readingMinutes: 11,
    videoTitle: 'Electrolysis Part 3/3 - Aqueous Solutions',
    youtubeId: 'me19WmGg8Dw',
    videoChannel: 'Cognito',
    videoDuration: '6:03',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Molten Electrolysis & OILRIG Half-Equations', cardId: 'igchem-4-1-c1' },
      { time: '2:00', seconds: 120, label: 'Aqueous Solutions & Discharge Rules', cardId: 'igchem-4-1-c2' },
      { time: '4:05', seconds: 245, label: 'Electroplating & Hydrogen-Oxygen Fuel Cells', cardId: 'igchem-4-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-4-1-c1',
        title: 'Molten Electrolysis & OILRIG',
        summary: 'Positive cations gain electrons (reduction) at the negative cathode; negative anions lose electrons (oxidation) at the positive anode.',
        bullets: [
          '**Electrolysis** - breakdown of an ionic compound (molten or aqueous **electrolyte**) by passing a direct electric current (d.c.).',
          '**PANIC & OILRIG** - **P**ositive **A**node, **N**egative **I**s **C**athode; **O**xidation **I**s **L**oss of electrons (at anode), **R**eduction **I**s **G**ain of electrons (at cathode).',
        ],
        subsections: [
          {
            heading: 'Molten Lead(II) Bromide (PbBr₂)',
            bullets: [
              '**Cathode (−)** - Pb²⁺ + 2e⁻ → Pb (silvery molten lead forms).',
              '**Anode (+)** - 2Br⁻ → Br₂ + 2e⁻ (red-brown bromine vapour forms).',
            ],
            exampleHeading: 'Concrete check: Charge flow in external wire vs electrolyte',
            examples: [
              'Electrons move through the external metal wires and electrodes; IONS move through the molten or aqueous electrolyte.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'electrolyte', definition: 'A molten or aqueous ionic compound that conducts electricity via mobile ions and decomposes during electrolysis.' },
        ],
        memoryAid: 'PANIC (Positive Anode, Negative Is Cathode) + OILRIG (Oxidation Is Loss, Reduction Is Gain)!',
      },
      {
        id: 'igchem-4-1-c2',
        title: 'Aqueous Electrolysis Rules (Brine, CuSO₄ & H₂SO₄)',
        summary: 'In aqueous solutions, water supplies H⁺ and OH⁻ ions that compete with salt ions at inert electrodes.',
        bullets: [
          '**Cathode (−) rule** - **hydrogen gas (H₂)** is produced UNLESS the metal is LESS reactive than hydrogen (Cu, Ag, Au — then the metal deposits).',
          '**Anode (+) rule** - if a **concentrated halide** (Cl⁻, Br⁻, I⁻) is present, the halogen forms; otherwise **oxygen gas (O₂)** forms via 4OH⁻ → O₂ + 2H₂O + 4e⁻.',
        ],
        subsections: [
          {
            heading: 'Copper(II) Sulfate: Inert Graphite vs Active Copper Electrodes',
            bullets: [
              '**Inert graphite electrodes** - Cu deposits on cathode, O₂ bubbles at anode, blue Cu²⁺ colour fades.',
              '**Copper electrodes (purification)** - impure copper anode dissolves (Cu → Cu²⁺ + 2e⁻) and pure copper plates onto cathode (Cu²⁺ + 2e⁻ → Cu); blue colour stays constant.',
            ],
            exampleHeading: 'Worked example: Electrolysis of concentrated aqueous NaCl (brine)',
            examples: [
              'Cathode: 2H⁺ + 2e⁻ → H₂ (Na is more reactive than H). Anode: 2Cl⁻ → Cl₂ + 2e⁻ (concentrated halide). Remaining solution: NaOH(aq) (alkaline).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'half-equation', definition: 'An equation showing either oxidation (loss of electrons) or reduction (gain of electrons) at one electrode.' },
        ],
      },
      {
        id: 'igchem-4-1-c3',
        title: 'Electroplating & Hydrogen–Oxygen Fuel Cells',
        summary: 'Make the object to be plated the cathode; hydrogen fuel cells generate electricity with water as the sole chemical product.',
        bullets: [
          '**Electroplating** - object to be plated = **cathode (−)**; pure plating metal = **anode (+)**; electrolyte = aqueous salt of the plating metal (improves appearance & prevents corrosion).',
        ],
        subsections: [
          {
            heading: 'Hydrogen–Oxygen Fuel Cell',
            bullets: [
              '**Overall reaction** - **2H₂ + O₂ → 2H₂O**, converting chemical energy directly into electrical energy.',
              '**Pros vs Cons** - only emission at point of use is **water** (zero CO₂/NOₓ) and high efficiency; drawbacks are storing flammable compressed H₂ gas and high cost/fossil energy often used to make H₂.',
            ],
            exampleHeading: 'Concrete example: Silver-plating a steel spoon',
            examples: [
              'Cathode (−): steel spoon; Anode (+): pure silver rod; Electrolyte: aqueous silver nitrate (AgNO₃).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fuel cell', definition: 'An electrochemical cell that continuously converts chemical energy of a fuel (such as hydrogen) and oxygen directly into electricity.' },
        ],
        commonMistake: 'In electroplating, ALWAYS place the object being plated at the CATHODE (−) so positive metal ions move to it and coat it!',
      },
    ],
    keyTerms: [
      { term: 'Electrolyte', definition: 'Molten or aqueous ionic compound that conducts via mobile ions.' },
      { term: 'Cathode', definition: 'Negative electrode where positive cations gain electrons (reduction).' },
      { term: 'Anode', definition: 'Positive electrode where negative anions lose electrons (oxidation).' },
      { term: 'Fuel cell', definition: 'Device converting H₂ and O₂ directly into electricity and water.' },
    ],
    checklistPoints: [
      'Write balanced cathode and anode half-equations for molten and aqueous electrolytes',
      'Predict aqueous electrolysis products for brine, dilute H₂SO₄, and CuSO₄ (carbon vs copper electrodes)',
      'Set up electroplating circuits and evaluate hydrogen–oxygen fuel cells',
    ],
  },

  'igchem-5-1': {
    subtopicId: 'igchem-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Exothermic & Endothermic Reactions & Bond Energies',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Bond Energies - Determining if Reactions are Exothermic or Endothermic',
    youtubeId: 'CegXaqWMyr4',
    videoChannel: 'Cognito',
    videoDuration: '4:54',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Exothermic vs Endothermic & Reaction Pathways', cardId: 'igchem-5-1-c1' },
      { time: '1:40', seconds: 100, label: 'Bond Breaking vs Bond Making (BENDO-MEXO)', cardId: 'igchem-5-1-c2' },
      { time: '3:15', seconds: 195, label: 'Worked Bond Energy Calculations (ΔH)', cardId: 'igchem-5-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-5-1-c1',
        title: 'Exothermic & Endothermic Reactions and Pathway Diagrams',
        summary: 'Exothermic reactions release heat to surroundings (ΔH negative, T rises); endothermic reactions absorb heat (ΔH positive, T falls).',
        bullets: [
          '**Exothermic (ΔH < 0)** - transfers thermal energy OUT to surroundings so temperature **increases** (combustion, neutralisation, respiration); products lie **lower** than reactants.',
          '**Endothermic (ΔH > 0)** - takes thermal energy IN from surroundings so temperature **decreases** (thermal decomposition, photosynthesis, citric acid + NaHCO₃); products lie **higher** than reactants.',
        ],
        subsections: [
          {
            heading: 'Activation Energy (E_a)',
            bullets: [
              '**E_a** - the minimum kinetic energy colliding particles must possess in order to react, shown as the hump from reactants up to the peak.',
            ],
            exampleHeading: 'Concrete check: Reading ΔH arrow direction',
            examples: [
              'Exothermic: arrow points DOWN from reactants to products (ΔH negative). Endothermic: arrow points UP from reactants to products (ΔH positive).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'activation energy', definition: 'The minimum energy that colliding particles must have for a chemical reaction to occur.' },
          { term: 'enthalpy change', definition: 'The thermal energy transferred during a reaction at constant pressure (ΔH), negative for exothermic and positive for endothermic.' },
        ],
        diagram: 'exothermic-endothermic',
      },
      {
        id: 'igchem-5-1-c2',
        title: 'Bond Breaking & Bond Making (BENDO–MEXO)',
        summary: 'Breaking bonds absorbs energy (endothermic); making new bonds releases energy (exothermic).',
        bullets: [
          '**Bond breaking is ENDOTHERMIC** - energy must be taken in to break reactant bonds.',
          '**Bond making is EXOTHERMIC** - energy is released when new product bonds form.',
        ],
        subsections: [
          {
            heading: 'Predicting Overall Sign of ΔH',
            bullets: [
              '**Overall exothermic** - energy released forming product bonds > energy absorbed breaking reactant bonds.',
              '**Overall endothermic** - energy absorbed breaking reactant bonds > energy released forming product bonds.',
            ],
            exampleHeading: 'Formula: ΔH = Σ(Bonds Broken) − Σ(Bonds Formed)',
            examples: [
              'Always subtract MADE from BROKEN — never reverse the subtraction!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'bond energy', definition: 'The energy required to break 1 mole of a specific covalent bond in the gaseous state (in kJ/mol).' },
        ],
        memoryAid: 'BENDO MEXO: Breaking is ENDOthermic, Making is EXOthermic; ΔH = Broken − Made!',
      },
      {
        id: 'igchem-5-1-c3',
        title: 'Worked Bond Energy Calculation',
        summary: 'Sketch displayed structures to count every single and double bond accurately before computing Broken − Made.',
        bullets: [
          '**Step-by-step check** - multiply each bond count by the stoichiometric balancing coefficient in the equation.',
        ],
        subsections: [
          {
            heading: 'Worked Example: H₂ + Cl₂ → 2HCl',
            bullets: [
              '**Given bond energies** - H–H = 436 kJ/mol, Cl–Cl = 243 kJ/mol, H–Cl = 432 kJ/mol.',
            ],
            exampleHeading: 'Full Calculation',
            examples: [
              'Bonds broken (reactants): 436 + 243 = 679 kJ/mol.',
              'Bonds formed (products): 2 × 432 = 864 kJ/mol.',
              'ΔH = 679 − 864 = −185 kJ/mol (negative → exothermic).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'exothermic', definition: 'A reaction that releases thermal energy to the surroundings, causing a temperature rise (ΔH < 0).' },
        ],
        commonMistake: 'Do NOT forget stoichiometric coefficients like the "2" in 2HCl or "2" in 2H₂O when summing bonds formed — drawing out all molecules prevents missed bonds!',
      },
    ],
    keyTerms: [
      { term: 'Exothermic reaction', definition: 'Releases thermal energy to surroundings; temperature rises and ΔH is negative.' },
      { term: 'Endothermic reaction', definition: 'Absorbs thermal energy from surroundings; temperature drops and ΔH is positive.' },
      { term: 'Activation energy (E_a)', definition: 'Minimum energy colliding particles need to react.' },
      { term: 'Bond energy', definition: 'Energy required to break 1 mole of a specific bond (kJ/mol).' },
    ],
    checklistPoints: [
      'Draw and label reaction pathway diagrams for exothermic and endothermic reactions including E_a and ΔH',
      'Explain overall energy change in terms of bond breaking (endothermic) vs bond making (exothermic)',
      'Calculate ΔH accurately using ΔH = Σ(bonds broken) − Σ(bonds formed)',
    ],
  },

  'igchem-6-1': {
    subtopicId: 'igchem-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Collision Theory, Rates of Reaction & Catalysts',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Rates of Reaction - How to Measure it | How to Show it on Graphs',
    youtubeId: 'HaQm4pNMZug',
    videoChannel: 'Cognito',
    videoDuration: '5:02',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Measuring Rate & Reading Rate Graphs', cardId: 'igchem-6-1-c1' },
      { time: '1:45', seconds: 105, label: 'Collision Theory: Concentration, Pressure, Surface Area', cardId: 'igchem-6-1-c2' },
      { time: '3:25', seconds: 205, label: 'Temperature & Catalysts (Lowering E_a)', cardId: 'igchem-6-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-6-1-c1',
        title: 'Measuring Rate & Interpreting Reaction Curves',
        summary: 'Rate equals gradient of a product-vs-time curve; it starts steepest and falls to zero when the limiting reactant runs out.',
        bullets: [
          '**Three lab methods** - (1) Collect gas in a **gas syringe**; (2) Track **mass loss** on a balance as gas escapes; (3) Time a **disappearing cross** turbidity reaction (e.g. Na₂S₂O₃ + HCl).',
        ],
        subsections: [
          {
            heading: 'Reading Rate Graphs',
            bullets: [
              '**Steeper gradient** = faster rate; **flat plateau** = reaction finished (limiting reactant consumed).',
              '**Final plateau height** - depends ONLY on moles of limiting reactant (powder vs lumps of equal mass reach the EXACT same final volume, just faster!).',
            ],
            exampleHeading: 'Worked example: Mean rate from 0 to 20 s',
            examples: [
              '48 cm³ of CO₂ collected in 20 s → Mean rate = 48 ÷ 20 = 2.4 cm³/s.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'rate of reaction', definition: 'The change in amount of reactant used or product formed per unit time.' },
        ],
      },
      {
        id: 'igchem-6-1-c2',
        title: 'Collision Theory: Concentration, Pressure & Surface Area',
        summary: 'More particles per unit volume (or more exposed surface) increases the frequency of successful collisions per second.',
        bullets: [
          '**Collision theory** - particles must collide with **energy ≥ activation energy (E_a)** to react (**successful collision**).',
        ],
        subsections: [
          {
            heading: 'Exam-Grade Explanations',
            bullets: [
              '**Higher concentration (solutions) / higher pressure (gases)** - **more particles per unit volume** → more frequent collisions per second → faster rate.',
              '**Smaller pieces / powder (larger surface area)** - more solid surface particles exposed → more frequent collisions per second.',
            ],
            exampleHeading: 'Concrete check: Why "more collisions" alone loses marks',
            examples: [
              'Examiners require "more FREQUENT collisions" (or "more collisions PER SECOND"), not merely "more collisions"!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'collision theory', definition: 'The principle that chemical reactions occur only when reactant particles collide with energy at least equal to the activation energy.' },
        ],
        commonMistake: 'NEVER write "more collisions" without adding "per second" or "more FREQUENT collisions" — frequency is what determines rate!',
      },
      {
        id: 'igchem-6-1-c3',
        title: 'Temperature & Catalysts',
        summary: 'Raising temperature both increases collision frequency AND gives a much higher proportion of particles energy ≥ E_a; catalysts lower E_a.',
        bullets: [
          '**Higher temperature (two effects)** - particles gain kinetic energy so they move faster (**more frequent collisions**) AND a much larger proportion of collisions have **energy ≥ activation energy** (the dominant effect!).',
          '**Catalyst** - speeds up a reaction without being chemically used up by providing an **alternative reaction pathway with a lower activation energy (E_a)**.',
        ],
        subsections: [
          {
            heading: 'Catalysts on Pathway Diagrams',
            bullets: [
              '**Unchanged ΔH** - a catalyst lowers the peak height (E_a) ONLY; reactant and product energy levels (and ΔH) stay completely unchanged.',
            ],
            exampleHeading: 'Concrete example: MnO₂ catalysing H₂O₂ decomposition',
            examples: [
              'Manganese(IV) oxide rapidly speeds up 2H₂O₂ → 2H₂O + O₂ and can be filtered, dried, and re-weighed with identical mass at the end.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'catalyst', definition: 'A substance that increases reaction rate without being used up by providing an alternative pathway of lower activation energy.' },
        ],
        memoryAid: 'Catalyst = Alternative Pathway + Lower E_a (NEVER say "gives particles more energy")!',
      },
    ],
    keyTerms: [
      { term: 'Rate of reaction', definition: 'Amount of product formed or reactant used per unit time.' },
      { term: 'Collision theory', definition: 'Particles must collide with energy ≥ E_a to react successfully.' },
      { term: 'Catalyst', definition: 'Increases rate without being consumed by providing an alternative pathway with lower E_a.' },
      { term: 'Surface area', definition: 'Total exposed area of a solid; powdering increases collision frequency.' },
    ],
    checklistPoints: [
      'Measure reaction rates via gas syringe, mass loss, or disappearing cross and read graph gradients',
      'Explain concentration, pressure, and surface area effects using collision FREQUENCY',
      'Explain temperature (kinetic energy + proportion ≥ E_a) and catalysts (alternative pathway, lower E_a)',
    ],
  },

  'igchem-6-2': {
    subtopicId: 'igchem-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Reversible Reactions, Equilibrium, Haber & Contact Processes',
    readingMinutes: 11,
    videoTitle: 'GCSE Chemistry - Reversible Reactions & Dynamic Equilibrium',
    youtubeId: '5rC6f_P_A48',
    videoChannel: 'Cognito',
    videoDuration: '6:28',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Reversible Reactions & Dynamic Equilibrium', cardId: 'igchem-6-2-c1' },
      { time: '2:15', seconds: 135, label: 'Le Chatelier’s Principle (T, P, Concentration)', cardId: 'igchem-6-2-c2' },
      { time: '4:20', seconds: 260, label: 'Haber Process (NH₃) & Contact Process (H₂SO₄)', cardId: 'igchem-6-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-6-2-c1',
        title: 'Reversible Reactions & Dynamic Equilibrium',
        summary: 'At dynamic equilibrium in a closed system, forward and reverse rates are EQUAL and concentrations remain CONSTANT.',
        bullets: [
          '**Classic hydrated salt tests** - blue CuSO₄·5H₂O ⇌ white anhydrous CuSO₄ + 5H₂O; pink CoCl₂·6H₂O ⇌ blue anhydrous CoCl₂ + 6H₂O (both used to test for the presence of water!).',
        ],
        subsections: [
          {
            heading: 'Two Defining Features of Equilibrium',
            bullets: [
              '**Rate of forward reaction = rate of reverse reaction** (both still happening continuously → dynamic).',
              '**Concentrations of reactants and products remain CONSTANT** (NOT necessarily equal!), requiring a **closed system**.',
            ],
            exampleHeading: 'Common exam trap check',
            examples: [
              'At equilibrium, concentrations are CONSTANT — never write that reactant and product concentrations are "equal"!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'dynamic equilibrium', definition: 'State in a closed system where forward and reverse reaction rates are equal and all concentrations stay constant.' },
        ],
      },
      {
        id: 'igchem-6-2-c2',
        title: 'Shifting Equilibrium (Le Chatelier’s Principle)',
        summary: 'An equilibrium shifts to oppose any imposed change in temperature, pressure, or concentration; catalysts do not shift position.',
        bullets: [
          '**Temperature** - increasing T shifts equilibrium in the **endothermic** direction; decreasing T favours the **exothermic** direction.',
          '**Pressure (gases only)** - increasing P shifts towards the side with **FEWER moles of gas**; decreasing P shifts towards MORE moles of gas.',
          '**Catalyst** - speeds up BOTH forward and reverse rates equally → reaches equilibrium faster with **NO change in yield/position**.',
        ],
        subsections: [
          {
            heading: 'Worked Shift Prediction',
            bullets: [
              '**Counting gas moles** - in N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH < 0), there are 4 gas moles on the left and 2 on the right.',
            ],
            exampleHeading: 'Worked example: Raising pressure on N₂ + 3H₂ ⇌ 2NH₃',
            examples: [
              'Higher pressure shifts right (4 gas moles → 2 gas moles), increasing NH₃ yield.',
              'Higher temperature shifts left (endothermic reverse reaction), decreasing NH₃ yield.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'closed system', definition: 'A reaction vessel from which no reactants or products can escape or enter.' },
        ],
      },
      {
        id: 'igchem-6-2-c3',
        title: 'The Haber Process & The Contact Process',
        summary: 'Both industrial processes use compromise temperatures (~450 °C) to balance decent yield against fast reaction rate.',
        bullets: [
          '**Haber Process (Ammonia)** - N₂ + 3H₂ ⇌ 2NH₃ (exothermic); conditions: **450 °C**, **200 atm (20,000 kPa)**, **iron catalyst** (N₂ from air, H₂ from methane/natural gas).',
          '**Contact Process (Sulfuric acid)** - key equilibrium **2SO₂ + O₂ ⇌ 2SO₃** (exothermic); conditions: **450 °C**, **2 atm (200 kPa)**, **vanadium(V) oxide (V₂O₅) catalyst**.',
        ],
        subsections: [
          {
            heading: 'Why Compromise Conditions Are Chosen',
            bullets: [
              '**450 °C compromise** - lower temperature gives a higher yield (forward is exothermic), but the rate would be far too slow economically.',
              '**200 atm (Haber) vs 2 atm (Contact)** - very high pressure costs huge energy and thick-walled equipment; Contact already achieves ~99% yield at just 2 atm!',
            ],
            exampleHeading: 'Fertilisers from ammonia',
            examples: [
              'NPK fertilisers supply Nitrogen (leaf growth), Phosphorus (roots), and Potassium (flowering/fruiting) — e.g. ammonium nitrate (NH₄NO₃).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Haber process', definition: 'Industrial synthesis of ammonia from nitrogen and hydrogen at 450 °C, 200 atm, with an iron catalyst.' },
          { term: 'Contact process', definition: 'Industrial manufacture of sulfuric acid via 2SO₂ + O₂ ⇌ 2SO₃ at 450 °C, 2 atm, with a V₂O₅ catalyst.' },
        ],
        memoryAid: 'Both Haber & Contact use 450 °C! Haber = 200 atm + Fe catalyst; Contact = 2 atm + V₂O₅ catalyst!',
        commonMistake: 'Never claim a catalyst increases equilibrium yield — it ONLY increases rate so equilibrium is reached faster!',
      },
    ],
    keyTerms: [
      { term: 'Dynamic equilibrium', definition: 'Forward and reverse rates equal in a closed system; concentrations stay constant.' },
      { term: 'Closed system', definition: 'Vessel preventing escape or entry of matter.' },
      { term: 'Haber process', definition: 'N₂ + 3H₂ ⇌ 2NH₃ at 450 °C, 200 atm, Fe catalyst.' },
      { term: 'Contact process', definition: '2SO₂ + O₂ ⇌ 2SO₃ at 450 °C, 2 atm, V₂O₅ catalyst.' },
    ],
    checklistPoints: [
      'State both conditions of dynamic equilibrium (equal rates, constant concentrations in a closed system)',
      'Predict equilibrium shifts for temperature, pressure, concentration, and catalysts',
      'Recall exact conditions, catalysts, and compromise explanations for the Haber and Contact processes',
    ],
  },

  'igchem-7-1': {
    subtopicId: 'igchem-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Acids, Bases, Oxides & Salt Preparation',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Acids & Bases - pH | Features | Neutralisation Reactions',
    youtubeId: 'Yrf3Z_TQu_k',
    videoChannel: 'Cognito',
    videoDuration: '5:32',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Strong vs Weak Acids, Proton Donors & Bases', cardId: 'igchem-7-1-c1' },
      { time: '1:50', seconds: 110, label: 'Acidic, Basic & Amphoteric Oxides', cardId: 'igchem-7-1-c2' },
      { time: '3:40', seconds: 220, label: 'Three Salt Preparation Methods (Excess, Titration, Precipitation)', cardId: 'igchem-7-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-7-1-c1',
        title: 'Acids, Bases & Strong vs Weak Acids',
        summary: 'Acids are proton (H⁺) donors; bases are proton acceptors; strong acids dissociate completely while weak acids dissociate only partially.',
        bullets: [
          '**Brønsted–Lowry definitions** - **Acid** = proton (H⁺) donor (forms H⁺(aq)); **Base** = proton acceptor (soluble bases are **alkalis**, forming OH⁻(aq)); neutralisation ionic equation: **H⁺(aq) + OH⁻(aq) → H₂O(l)**.',
        ],
        subsections: [
          {
            heading: 'Strong vs Weak Acids',
            bullets: [
              '**Strong acid (HCl, HNO₃, H₂SO₄)** - **completely dissociates** in water (HCl → H⁺ + Cl⁻), giving a higher H⁺ concentration and lower pH.',
              '**Weak acid (ethanoic acid CH₃COOH)** - **partially dissociates** reversibly (CH₃COOH ⇌ CH₃COO⁻ + H⁺), giving a higher pH at the same concentration.',
            ],
            exampleHeading: 'Concrete check: Indicators',
            examples: [
              'Methyl orange: red in acid, yellow in alkali; Thymolphthalein: colourless in acid, blue in alkali.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'strong acid', definition: 'An acid that completely dissociates into H⁺ ions in aqueous solution (e.g. HCl, H₂SO₄, HNO₃).' },
        ],
      },
      {
        id: 'igchem-7-1-c2',
        title: 'Types of Oxides (Basic, Acidic & Amphoteric)',
        summary: 'Metal oxides are usually basic, non-metal oxides are acidic, and Al₂O₃ & ZnO are amphoteric (react with both acids and alkalis).',
        bullets: [
          '**Basic oxides (metals, e.g. CuO, CaO)** - react with acids to form salt + water.',
          '**Acidic oxides (non-metals, e.g. SO₂, CO₂)** - react with bases/alkalis to form salt + water.',
          '**Amphoteric oxides (Al₂O₃, ZnO)** - react with **BOTH acids AND alkalis** to produce a salt and water.',
        ],
        subsections: [
          {
            heading: 'Key Acid Reactions',
            bullets: [
              '**Four core equations** - Acid + Metal → Salt + H₂; Acid + Base → Salt + H₂O; Acid + Carbonate → Salt + H₂O + CO₂; Alkali + Ammonium salt → Salt + H₂O + NH₃.',
            ],
            exampleHeading: 'Concrete example: Neutralising acidic soil',
            examples: [
              'Farmers spread calcium oxide (quicklime) or calcium hydroxide (slaked lime) — basic oxides/hydroxides — to raise soil pH.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'amphoteric oxide', definition: 'An oxide (such as Al₂O₃ or ZnO) that reacts with both acids and alkalis to form a salt and water.' },
        ],
      },
      {
        id: 'igchem-7-1-c3',
        title: 'Choosing the Right Salt Preparation Method',
        summary: 'Match the salt’s solubility to Excess Solid, Titration, or Precipitation.',
        bullets: [
          '**1. Soluble salt (from insoluble base/carbonate, e.g. CuSO₄)** - add **excess** CuO to warm H₂SO₄, filter off excess solid, evaporate filtrate partially, cool to crystallise, filter & pat dry.',
          '**2. Soluble Na⁺/K⁺/NH₄⁺ salt (e.g. NaCl)** - use **titration** (all reactants are soluble!) with indicator to find exact volume, repeat WITHOUT indicator, then crystallise.',
          '**3. Insoluble salt (e.g. BaSO₄, AgCl, PbI₂)** - **precipitation**: mix two soluble salt solutions, **filter**, wash residue with distilled water, and dry.',
        ],
        subsections: [
          {
            heading: 'Solubility Rules',
            bullets: [
              '**Always soluble** - ALL sodium, potassium, ammonium, and nitrate salts; most chlorides (except AgCl, PbCl₂); most sulfates (except BaSO₄, CaSO₄, PbSO₄).',
            ],
            exampleHeading: 'Worked example: Preparing pure insoluble barium sulfate (BaSO₄)',
            examples: [
              'Mix aqueous barium nitrate + aqueous sodium sulfate → white BaSO₄ precipitate forms → filter, rinse with distilled water, dry in a warm oven.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'precipitation', definition: 'Formation of an insoluble solid salt when two aqueous solutions of soluble salts are mixed.' },
        ],
        memoryAid: 'Soluble + Insoluble base = Excess; Na/K/NH₄ = Titration; Insoluble salt = Precipitation!',
        commonMistake: 'When making a soluble salt by titration, NEVER evaporate the solution that still contains indicator — repeat the exact titre WITHOUT indicator to get pure white crystals!',
      },
    ],
    keyTerms: [
      { term: 'Strong acid', definition: 'Acid that completely dissociates in aqueous solution.' },
      { term: 'Weak acid', definition: 'Acid that only partially dissociates in water.' },
      { term: 'Amphoteric oxide', definition: 'Oxide (Al₂O₃, ZnO) reacting with both acids and alkalis.' },
      { term: 'Precipitation', definition: 'Mixing two soluble salt solutions to form an insoluble salt solid.' },
    ],
    checklistPoints: [
      'Define acids as H⁺ donors, bases as H⁺ acceptors, and distinguish strong vs weak dissociation',
      'Classify basic, acidic, and amphoteric oxides (Al₂O₃, ZnO)',
      'Select and outline Excess-Solid, Titration, or Precipitation methods to prepare any target salt',
    ],
  },

  'igchem-7-2': {
    subtopicId: 'igchem-7-2',
    subtopicCode: '7.2',
    subtopicTitle: 'Flame Tests, Cation/Anion Precipitates & Gas Tests',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Testing for Gases - Hydrogen/Chlorine/Oxygen/CO2',
    youtubeId: 'QH-7X5STCO4',
    videoChannel: 'Cognito',
    videoDuration: '4:01',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Flame Tests & Gas Identification Tests', cardId: 'igchem-7-2-c1' },
      { time: '1:25', seconds: 85, label: 'Aqueous Cation Tests (NaOH & NH₃)', cardId: 'igchem-7-2-c2' },
      { time: '2:45', seconds: 165, label: 'Anion Tests (Carbonates, Halides, Sulfates, Nitrates)', cardId: 'igchem-7-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-7-2-c1',
        title: 'Flame Tests & Six Standard Gas Tests',
        summary: 'Memorise exact flame colours for metal ions and positive observations for all six IGCSE gases.',
        bullets: [
          '**Flame colours** - **Li⁺** red, **Na⁺** yellow, **K⁺** lilac, **Ca²⁺** orange-red, **Ba²⁺** light green, **Cu²⁺** blue-green.',
        ],
        subsections: [
          {
            heading: 'Tests for Six Gases',
            bullets: [
              '**H₂** - lighted splint gives a **squeaky pop**; **O₂** - **relights** a glowing splint; **CO₂** - turns **limewater milky/cloudy**.',
              '**Cl₂** - **bleaches** damp litmus paper white; **NH₃** - turns damp red litmus **blue**; **SO₂** - turns acidified aqueous potassium manganate(VII) from **purple to colourless**.',
            ],
            exampleHeading: 'Concrete check: Damp litmus is essential',
            examples: [
              'Always specify DAMP litmus paper for Cl₂ and NH₃ so the gas dissolves to form acidic/alkaline ions on the paper.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'flame test', definition: 'Qualitative test identifying metal cations from the characteristic flame colour produced when heated in a clean Bunsen flame.' },
        ],
      },
      {
        id: 'igchem-7-2-c2',
        title: 'Cation Precipitate Tests with NaOH(aq) & NH₃(aq)',
        summary: 'Transition metal hydroxides give distinctive coloured precipitates; excess NaOH and NH₃ separate white precipitates (Al³⁺, Zn²⁺, Ca²⁺).',
        bullets: [
          '**Coloured hydroxide precipitates** - **Cu²⁺** light blue (dissolves in excess NH₃ to deep blue); **Fe²⁺** green; **Fe³⁺** red-brown; **Cr³⁺** grey-green (dissolves in excess NaOH).',
        ],
        subsections: [
          {
            heading: 'Distinguishing Al³⁺, Zn²⁺, Ca²⁺ & NH₄⁺',
            bullets: [
              '**White precipitates** - **Ca²⁺** stays insoluble in excess NaOH (and no ppt with NH₃); **Al³⁺** dissolves in excess NaOH only; **Zn²⁺** dissolves in **BOTH** excess NaOH AND excess NH₃.',
              '**Ammonium (NH₄⁺)** - warm with NaOH(aq) → releases **ammonia gas** turning damp red litmus blue.',
            ],
            exampleHeading: 'Worked example: Unknown salt gives white ppt soluble in BOTH excess NaOH and excess NH₃',
            examples: [
              'Only Zn²⁺ dissolves in both excess NaOH and excess NH₃ → the cation is Zn²⁺.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'precipitate', definition: 'An insoluble solid formed from a reaction in aqueous solution.' },
        ],
        memoryAid: 'Cu²⁺ = blue, Fe²⁺ = green, Fe³⁺ = rust red-brown; Zn²⁺ dissolves in BOTH excesses, Al³⁺ in NaOH only!',
      },
      {
        id: 'igchem-7-2-c3',
        title: 'Anion Tests (Carbonates, Halides, Sulfates, Nitrates & Sulfites)',
        summary: 'Always acidify FIRST with the correct acid before adding AgNO₃ or Ba(NO₃)₂ to eliminate interfering carbonate ions.',
        bullets: [
          '**Carbonate (CO₃²⁻)** - add dilute acid → effervescence of CO₂ turning limewater milky.',
          '**Halides (Cl⁻, Br⁻, I⁻)** - acidify with dilute **nitric acid (HNO₃)**, then add **AgNO₃(aq)** → **Cl⁻ white**, **Br⁻ cream**, **I⁻ yellow** precipitate.',
          '**Sulfate (SO₄²⁻)** - acidify with dilute **HNO₃ (or HCl)**, then add **Ba(NO₃)₂(aq) (or BaCl₂)** → **white precipitate** of BaSO₄.',
          '**Nitrate (NO₃⁻)** - add NaOH(aq) + **aluminium foil** and warm gently → ammonia gas turns damp red litmus blue.',
        ],
        subsections: [
          {
            heading: 'Why We Acidify First',
            bullets: [
              '**Preventing false positives** - carbonate ions (CO₃²⁻) also form white precipitates with Ag⁺ and Ba²⁺; adding dilute HNO₃ destroys any CO₃²⁻ first.',
            ],
            exampleHeading: 'Why you NEVER use HCl before AgNO₃',
            examples: [
              'Hydrochloric acid introduces Cl⁻ ions, causing a false white AgCl precipitate even if no chloride was originally present!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'halide', definition: 'A negative ion formed by a Group VII halogen (Cl⁻, Br⁻, or I⁻).' },
        ],
        commonMistake: 'NEVER acidify with HCl before adding AgNO₃, and NEVER acidify with H₂SO₄ before adding Ba(NO₃)₂ — use dilute NITRIC ACID (HNO₃) for both!',
      },
    ],
    keyTerms: [
      { term: 'Flame test', definition: 'Identifies metal ions by characteristic flame colours (Li⁺ red, Na⁺ yellow, K⁺ lilac).' },
      { term: 'Precipitate', definition: 'Insoluble solid formed in solution during qualitative ion testing.' },
      { term: 'Halide test', definition: 'Acidify with HNO₃ + AgNO₃(aq): Cl⁻ white, Br⁻ cream, I⁻ yellow.' },
      { term: 'Sulfate test', definition: 'Acidify with HNO₃ + Ba(NO₃)₂(aq) → white BaSO₄ precipitate.' },
    ],
    checklistPoints: [
      'Recall all 6 flame test colours and all 6 gas tests (H₂, O₂, CO₂, Cl₂, NH₃, SO₂)',
      'Distinguish Cu²⁺, Fe²⁺, Fe³⁺, Cr³⁺, Al³⁺, Zn²⁺, Ca²⁺, and NH₄⁺ using NaOH and NH₃',
      'Perform acidified halide, sulfate, carbonate, and nitrate anion tests without acid-choice errors',
    ],
  },

  'igchem-8-1': {
    subtopicId: 'igchem-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Periodic Table: Groups I, VII, VIII & Transition Metals',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Group 7 & Group 0 Elements - Halogens & Noble Gases | Properties | Trends',
    youtubeId: 'uYubwlPRdCs',
    videoChannel: 'Cognito',
    videoDuration: '5:18',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Group I Alkali Metals Trends', cardId: 'igchem-8-1-c1' },
      { time: '1:45', seconds: 105, label: 'Group VII Halogens & Displacement', cardId: 'igchem-8-1-c2' },
      { time: '3:30', seconds: 210, label: 'Transition Elements & Group VIII Noble Gases', cardId: 'igchem-8-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-8-1-c1',
        title: 'Group I Alkali Metals (Li, Na, K)',
        summary: 'Reactivity INCREASES down Group I because the outer electron sits further from the nucleus with more shielding and is lost more easily.',
        bullets: [
          '**Physical trends down Group I** - soft metals with low density (Li, Na, K float on water); **melting point decreases** and **density generally increases** going down.',
          '**Reaction with water** - 2Na + 2H₂O → 2NaOH + H₂ (fizzing, alkaline solution; K burns with a **lilac flame**).',
        ],
        subsections: [
          {
            heading: 'Why Reactivity Increases Down Group I',
            bullets: [
              '**Atomic radius & shielding** - more electron shells put the single outer electron further from the positive nucleus with stronger inner-shell shielding, so weaker electrostatic attraction makes it **easier to lose**.',
            ],
            exampleHeading: 'Concrete prediction: Rubidium (Rb) below potassium',
            examples: [
              'Rb will be even softer, have a lower melting point than K, and react explosively with cold water.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'alkali metals', definition: 'Soft, reactive Group I metals (Li, Na, K...) with 1 outer electron that react with water to form alkaline hydroxides and hydrogen.' },
        ],
      },
      {
        id: 'igchem-8-1-c2',
        title: 'Group VII Halogens & Displacement Reactions',
        summary: 'Halogens exist as diatomic molecules (X₂); reactivity DECREASES down Group VII because gaining an outer electron becomes harder.',
        bullets: [
          '**Appearance at r.t.p.** - **Cl₂** pale yellow-green gas; **Br₂** red-brown liquid; **I₂** grey-black solid (melting/boiling points **increase** down the group as molecules get heavier).',
          '**Displacement rule** - a **more reactive halogen displaces a less reactive halide** from aqueous solution: Cl₂ + 2KBr → 2KCl + Br₂ (solution turns orange-brown).',
        ],
        subsections: [
          {
            heading: 'Why Reactivity Decreases Down Group VII',
            bullets: [
              '**Electron attraction** - more shells increase distance and shielding, weakening the nucleus’s pull on an incoming outer electron so it is **harder to gain**.',
            ],
            exampleHeading: 'Worked ionic equation: Chlorine + potassium iodide',
            examples: [
              'Cl₂(aq) + 2I⁻(aq) → 2Cl⁻(aq) + I₂(aq) (brown solution forms; Cl₂ is reduced, I⁻ is oxidised).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'halogen', definition: 'Reactive non-metal element in Group VII existing as diatomic molecules (F₂, Cl₂, Br₂, I₂) with 7 outer electrons.' },
        ],
        memoryAid: 'Group I gets MORE reactive going down (easier to LOSE 1 e⁻); Group VII gets LESS reactive going down (harder to GAIN 1 e⁻)!',
      },
      {
        id: 'igchem-8-1-c3',
        title: 'Transition Elements & Group VIII Noble Gases',
        summary: 'Transition metals have high densities/melting points, form coloured compounds with variable oxidation states, and act as catalysts; noble gases are inert monatomic gases.',
        bullets: [
          '**Four hallmark transition element features** - (1) **High densities & high melting points**; (2) Form **coloured compounds** (e.g. blue Cu²⁺, green Fe²⁺, brown Fe³⁺); (3) Have **variable oxidation states** (Fe²⁺ / Fe³⁺); (4) Act as **catalysts** (Fe in Haber, V₂O₅ in Contact, Ni in hydrogenation).',
          '**Group VIII / 0 Noble gases** - unreactive **monatomic** gases because they already have a **full outer electron shell** (He = 2; Ne = 2,8; Ar = 2,8,8).',
        ],
        subsections: [
          {
            heading: 'Noble Gas Uses',
            bullets: [
              '**Helium** - weather balloons/airships (low density and non-flammable).',
              '**Argon** - inert atmosphere in welding and filament lamps (prevents hot metal reacting with oxygen).',
            ],
            exampleHeading: 'Contrast: Iron vs Sodium',
            examples: [
              'Iron is hard, dense, high m.p., forms coloured salts & acts as a catalyst; sodium is soft, low density, low m.p., forms white salts only, and reacts violently with water.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'transition elements', definition: 'Central d-block metals having high densities and melting points, coloured compounds, variable oxidation states, and catalytic activity.' },
        ],
        commonMistake: 'Remember Group I and Group VII reactivity trends go in OPPOSITE directions down the Periodic Table!',
      },
    ],
    keyTerms: [
      { term: 'Alkali metals', definition: 'Group I metals whose reactivity increases down the group as losing 1 outer electron gets easier.' },
      { term: 'Halogens', definition: 'Group VII diatomic non-metals whose reactivity decreases down the group.' },
      { term: 'Transition elements', definition: 'Dense, high-m.p. metals with variable oxidation states, coloured compounds, and catalytic uses.' },
      { term: 'Noble gases', definition: 'Inert monatomic Group VIII gases with full outer electron shells.' },
    ],
    checklistPoints: [
      'Explain opposite reactivity trends down Group I and Group VII using shells, distance, and shielding',
      'Write balanced and ionic equations for halogen displacement reactions',
      'List all 4 distinctive properties of transition elements and explain why noble gases are inert',
    ],
  },

  'igchem-8-2': {
    subtopicId: 'igchem-8-2',
    subtopicCode: '8.2',
    subtopicTitle: 'Reactivity Series, Extraction of Iron & Aluminium & Rusting',
    readingMinutes: 11,
    videoTitle: 'GCSE Chemistry - The Reactivity Series - Metal Reactions | Displacement Reactions',
    youtubeId: 'NBw5s7cuwMc',
    videoChannel: 'Cognito',
    videoDuration: '4:28',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Reactivity Series & Extraction Method Choice', cardId: 'igchem-8-2-c1' },
      { time: '1:30', seconds: 90, label: 'Blast Furnace (Iron) & Electrolysis of Bauxite (Aluminium)', cardId: 'igchem-8-2-c2' },
      { time: '3:00', seconds: 180, label: 'Rusting Conditions, Barrier Methods & Galvanising', cardId: 'igchem-8-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-8-2-c1',
        title: 'The Reactivity Series & Metal Extraction Rule',
        summary: 'Metals above carbon require electrolysis; metals below carbon are reduced by carbon/CO in a furnace.',
        bullets: [
          '**Order** - **K > Na > Ca > Mg > Al > [CARBON] > Zn > Fe > [HYDROGEN] > Cu > Ag > Au**.',
          '**Extraction rule** - metals **more reactive than carbon** (K → Al) are extracted by **electrolysis** of molten ore; metals **less reactive than carbon** (Zn, Fe) by **reduction with carbon**.',
        ],
        subsections: [
          {
            heading: 'Aluminium’s Apparent Unreactivity',
            bullets: [
              '**Oxide layer** - although Al sits high in the reactivity series, it rapidly forms a tough, unreactive, impermeable layer of **aluminium oxide (Al₂O₃)** on its surface that prevents further reaction.',
            ],
            exampleHeading: 'Worked ionic displacement: Zinc in copper(II) sulfate',
            examples: [
              'Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) — zinc loses electrons (oxidised) and Cu²⁺ gains electrons (reduced).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'reactivity series', definition: 'An ordering of metals by their tendency to lose electrons and form positive ions.' },
        ],
        memoryAid: 'Please Stop Calling Me A Careless Zebra Instead Try Learning How Copper Saves Gold!',
      },
      {
        id: 'igchem-8-2-c2',
        title: 'Blast Furnace (Iron) & Electrolysis of Aluminium',
        summary: 'Hematite is reduced by CO while limestone removes silica slag; molten Al₂O₃ is dissolved in cryolite to cut melting point and energy costs.',
        bullets: [
          '**Blast Furnace (Hematite Fe₂O₃ + Coke C + Limestone CaCO₃ + Hot Air)** - (1) C + O₂ → CO₂ (exothermic heat); (2) CO₂ + C → 2CO; (3) **Fe₂O₃ + 3CO → 2Fe + 3CO₂**; (4) CaCO₃ → CaO + CO₂, then **CaO + SiO₂ → CaSiO₃ (slag)**.',
        ],
        subsections: [
          {
            heading: 'Aluminium Extraction from Bauxite (Al₂O₃)',
            bullets: [
              '**Role of molten cryolite** - dissolves Al₂O₃ to **lower operating temperature** from ~2,050 °C to ~950 °C (saving huge energy) and increases conductivity.',
              '**Electrode reactions** - Cathode: **Al³⁺ + 3e⁻ → Al**; Anode: **2O²⁻ → O₂ + 4e⁻**. Carbon anodes must be **replaced regularly** because hot oxygen burns them away as CO₂ (C + O₂ → CO₂)!',
            ],
            exampleHeading: 'Concrete check: Why Al extraction is expensive',
            examples: [
              'Requires large continuous amounts of electricity for electrolysis plus regular replacement of burnt carbon anodes.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cryolite', definition: 'Molten mineral used to dissolve aluminium oxide at a much lower operating temperature during aluminium electrolysis.' },
        ],
      },
      {
        id: 'igchem-8-2-c3',
        title: 'Rusting of Iron & Sacrificial Protection (Galvanising)',
        summary: 'Rusting requires BOTH water and oxygen; zinc galvanising protects iron even when scratched because zinc oxidises preferentially.',
        bullets: [
          '**Rusting** - hydration/oxidation of iron forming **hydrated iron(III) oxide**; requires **BOTH oxygen AND water** (accelerated by salt/acid).',
        ],
        subsections: [
          {
            heading: 'Barrier Methods vs Sacrificial Protection',
            bullets: [
              '**Barrier methods** - painting, greasing, oiling, or plastic coating physically block water and oxygen (fails once scratched!).',
              '**Galvanising (zinc coating)** - works as a barrier AND by **sacrificial protection**: because zinc is **more reactive than iron**, even if scratched zinc **loses electrons more readily** (Zn → Zn²⁺ + 2e⁻) and corrodes instead of iron.',
            ],
            exampleHeading: 'Concrete example: Protecting steel ship hulls',
            examples: [
              'Blocks of zinc or magnesium are bolted to steel hulls; they oxidise sacrificially and are simply replaced when worn away.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sacrificial protection', definition: 'Preventing iron from rusting by attaching a more reactive metal (such as zinc or magnesium) that oxidises preferentially.' },
        ],
        commonMistake: 'When explaining why carbon anodes wear away in aluminium extraction, explicitly state that OXYGEN produced at the anode reacts with the hot CARBON to form CO₂!',
      },
    ],
    keyTerms: [
      { term: 'Reactivity series', definition: 'Ranking of metals by ease of forming positive ions.' },
      { term: 'Cryolite', definition: 'Solvent lowering the melting point of Al₂O₃ in aluminium electrolysis.' },
      { term: 'Slag', definition: 'Calcium silicate (CaSiO₃) formed when basic CaO neutralises acidic SiO₂ impurity in the blast furnace.' },
      { term: 'Sacrificial protection', definition: 'Attaching a more reactive metal like zinc so it loses electrons instead of iron.' },
    ],
    checklistPoints: [
      'Write all key blast furnace equations including reduction by CO and slag formation',
      'Explain the role of cryolite, electrode half-equations, and why carbon anodes burn away in Al extraction',
      'Explain rusting conditions and why galvanising protects steel even when scratched',
    ],
  },

  'igchem-9-1': {
    subtopicId: 'igchem-9-1',
    subtopicCode: '9.1',
    subtopicTitle: 'Crude Oil, Fractional Distillation, Alkanes & Alkenes',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Cracking & Alkenes - Catalytic & Steam Cracking | Equations',
    youtubeId: 'LfweGr7Y8L4',
    videoChannel: 'Cognito',
    videoDuration: '6:41',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Crude Oil Fractions & Homologous Series', cardId: 'igchem-9-1-c1' },
      { time: '2:15', seconds: 135, label: 'Alkanes (Substitution) vs Alkenes (Bromine Test)', cardId: 'igchem-9-1-c2' },
      { time: '4:30', seconds: 270, label: 'Cracking & Alkene Addition Reactions', cardId: 'igchem-9-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-9-1-c1',
        title: 'Fractional Distillation of Crude Oil & Homologous Series',
        summary: 'Short-chain fractions condense near the cool top of the column with lower boiling points, lower viscosity, and higher flammability.',
        bullets: [
          '**Fractions (top → bottom)** - **Refinery gas → Gasoline (petrol) → Naphtha → Kerosene → Diesel oil → Fuel oil → Lubricating oil → Bitumen**.',
          '**Trend down the column** - chain length increases → stronger intermolecular forces → **higher boiling point, higher viscosity, darker colour, less flammable**.',
        ],
        subsections: [
          {
            heading: 'Homologous Series & Structural Isomers',
            bullets: [
              '**Homologous series** - organic family sharing the same **general formula**, same **functional group**, similar chemical properties, and differing by **–CH₂–** per step.',
              '**Structural isomers** - compounds with the **same molecular formula** but **different structural formulae** (e.g. but-1-ene and but-2-ene).',
            ],
            exampleHeading: 'Concrete check: Naphtha fraction',
            examples: [
              'Naphtha is used primarily as a chemical feedstock to manufacture plastics and petrochemicals.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'homologous series', definition: 'A family of organic compounds sharing the same functional group and general formula, with consecutive members differing by CH₂.' },
          { term: 'structural isomers', definition: 'Molecules having the same molecular formula but different arrangements of atoms.' },
        ],
      },
      {
        id: 'igchem-9-1-c2',
        title: 'Alkanes vs Alkenes & The Bromine Water Test',
        summary: 'Alkanes are saturated (CₙH₂ₙ₊₂) undergoing UV substitution; alkenes are unsaturated (CₙH₂ₙ, C=C) decolourising bromine water.',
        bullets: [
          '**Alkanes (CₙH₂ₙ₊₂)** - **saturated** (only C–C single bonds); generally unreactive except combustion and **photochemical substitution** with Cl₂ in **UV light** (CH₄ + Cl₂ → CH₃Cl + HCl).',
          '**Alkenes (CₙH₂ₙ)** - **unsaturated** (contain a **C=C** double bond); turn **orange-brown aqueous bromine water colourless** instantaneously via addition.',
        ],
        subsections: [
          {
            heading: 'Why Bromine Water Distinguishes Them',
            bullets: [
              '**Alkanes** - no reaction with bromine water in the dark (remains orange-brown).',
              '**Alkenes** - C=C opens to add Br atoms across the double bond, forming colourless dibromoalkane (e.g. C₂H₄ + Br₂ → C₂H₄Br₂).',
            ],
            exampleHeading: 'Concrete check: Colour wording',
            examples: [
              'Always write "turns from orange/brown to COLOURLESS" — NEVER write "clear" (a coloured solution can still be clear)!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'unsaturated hydrocarbon', definition: 'A hydrocarbon containing at least one carbon–carbon double bond (C=C), such as an alkene.' },
        ],
        commonMistake: 'NEVER say bromine water turns "clear" — say "decolourises" or turns "COLOURLESS"!',
      },
      {
        id: 'igchem-9-1-c3',
        title: 'Cracking & Addition Reactions of Alkenes',
        summary: 'Cracking breaks long low-demand alkanes into shorter high-demand fuels + useful alkenes using heat and an Al₂O₃/SiO₂ catalyst.',
        bullets: [
          '**Cracking** - thermal decomposition of long-chain alkanes at ~600–700 °C over a hot **alumina/silica catalyst** (or steam) → shorter alkane + alkene(s) (or H₂).',
        ],
        subsections: [
          {
            heading: 'Three Key Addition Reactions of Alkenes',
            bullets: [
              '**+ H₂ (Hydrogenation)** - 150–200 °C, **nickel catalyst** → alkane.',
              '**+ H₂O(g) (Hydration)** - 300 °C, 60 atm, **phosphoric(V) acid catalyst** → alcohol (ethanol).',
              '**+ Br₂ (Bromination)** - room temperature → dibromoalkane.',
            ],
            exampleHeading: 'Worked cracking equation: Decane (C₁₀H₂₂)',
            examples: [
              'C₁₀H₂₂ → C₈H₁₈ (octane for petrol) + C₂H₄ (ethene for poly(ethene)). Check atoms: 10 C = 8 + 2; 22 H = 18 + 4.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'cracking', definition: 'Breaking long-chain hydrocarbon molecules into shorter alkanes and alkenes using high temperature and a catalyst.' },
        ],
        memoryAid: 'Addition = ONLY ONE product formed! Alkanes = CₙH₂ₙ₊₂ (single); Alkenes = CₙH₂ₙ (double C=C).',
      },
    ],
    keyTerms: [
      { term: 'Homologous series', definition: 'Organic family with same functional group, general formula, and CH₂ increment.' },
      { term: 'Structural isomers', definition: 'Same molecular formula, different structural arrangement.' },
      { term: 'Cracking', definition: 'Breaking long alkanes into shorter alkanes and alkenes with heat and catalyst.' },
      { term: 'Unsaturated hydrocarbon', definition: 'Hydrocarbon containing a C=C double bond that decolourises bromine water.' },
    ],
    checklistPoints: [
      'Recall crude oil fractions in order and boiling point/viscosity trends down the column',
      'Distinguish alkanes and alkenes using bromine water (orange → colourless) and UV substitution',
      'Balance cracking equations and state conditions for hydrogenation and hydration of ethene',
    ],
  },

  'igchem-9-2': {
    subtopicId: 'igchem-9-2',
    subtopicCode: '9.2',
    subtopicTitle: 'Alcohols, Carboxylic Acids, Esters & Polymers',
    readingMinutes: 11,
    videoTitle: 'GCSE Chemistry - Addition Polymers & Polymerisation',
    youtubeId: '1ZUg6ZC3ltA',
    videoChannel: 'Cognito',
    videoDuration: '7:11',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Ethanol Manufacture & Oxidation to Ethanoic Acid', cardId: 'igchem-9-2-c1' },
      { time: '2:25', seconds: 145, label: 'Carboxylic Acids & Esterification', cardId: 'igchem-9-2-c2' },
      { time: '4:50', seconds: 290, label: 'Addition vs Condensation Polymers (Nylon, PET, Proteins)', cardId: 'igchem-9-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-9-2-c1',
        title: 'Alcohols (–OH): Fermentation vs Catalytic Hydration',
        summary: 'Compare renewable batch fermentation of glucose with fast continuous hydration of ethene from crude oil.',
        bullets: [
          '**Fermentation** - C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ using **yeast** at **25–35 °C** in **anaerobic** conditions (renewable crops, low energy, but slow batch process needing distillation).',
          '**Hydration of ethene** - C₂H₄ + H₂O(g) → C₂H₅OH at **300 °C, 60 atm, H₃PO₄ catalyst** (fast, continuous, 100% pure ethanol, but uses non-renewable crude oil & high energy).',
        ],
        subsections: [
          {
            heading: 'Oxidation of Ethanol to Ethanoic Acid',
            bullets: [
              '**Two oxidation routes** - bacterial oxidation in air (wine turning to vinegar) OR heating under reflux with **acidified potassium manganate(VII)** (turns **purple to colourless**).',
            ],
            exampleHeading: 'Concrete check: Why fermentation must stay anaerobic & ~30 °C',
            examples: [
              'Too hot (>40 °C) denatures yeast enzymes; oxygen oxidises ethanol into ethanoic acid (vinegar).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fermentation', definition: 'Anaerobic breakdown of aqueous glucose by yeast enzymes at ~30 °C to produce ethanol and carbon dioxide.' },
        ],
      },
      {
        id: 'igchem-9-2-c2',
        title: 'Carboxylic Acids (–COOH) & Esters (–COO–)',
        summary: 'Carboxylic acids are weak acids reacting with alcohols in the presence of an acid catalyst to form sweet-smelling esters + water.',
        bullets: [
          '**Carboxylic acids** - weak acids (partially dissociate); react with metals, bases, and carbonates to form **–anoate** salts (e.g. sodium ethanoate).',
          '**Esterification** - **Alcohol + Carboxylic acid ⇌ Ester + Water** (concentrated H₂SO₄ catalyst + heat).',
        ],
        subsections: [
          {
            heading: 'Naming Esters Accurately',
            bullets: [
              '**Alcohol first (–yl), Acid second (–oate)** - ethanol + propanoic acid → **ethyl propanoate** + water.',
            ],
            exampleHeading: 'Worked example: Naming the ester from propanol + ethanoic acid',
            examples: [
              'Propanol → propyl; ethanoic acid → ethanoate → **propyl ethanoate** + H₂O.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ester', definition: 'A fruity-smelling organic compound containing the –COO– linkage formed by reacting an alcohol with a carboxylic acid.' },
        ],
        memoryAid: 'Ester naming: Alcohol gives the –YL prefix, Acid gives the –OATE suffix!',
      },
      {
        id: 'igchem-9-2-c3',
        title: 'Addition Polymers vs Condensation Polymers',
        summary: 'Addition polymers open C=C double bonds with no by-product; condensation polymers (nylon, PET, proteins) link two functional groups while eliminating H₂O.',
        bullets: [
          '**Addition polymerisation** - many alkene monomers open their C=C double bond to form one long chain only (e.g. ethene → poly(ethene)); non-biodegradable because strong C–C bonds resist microbes.',
          '**Condensation polymerisation** - monomers with two functional groups join, eliminating a small molecule (**H₂O**): **Nylon** (polyamide, –CONH– linkage from diamine + dicarboxylic acid), **PET** (polyester, –COO– linkage from diol + dicarboxylic acid), and **Proteins** (natural polyamides from amino acids).',
        ],
        subsections: [
          {
            heading: 'Environmental Impacts of Plastics',
            bullets: [
              '**Disposal issues** - landfill accumulation (non-biodegradable), toxic gases (HCl/CO) when incinerated, and harm to marine wildlife.',
            ],
            exampleHeading: 'Concrete check: Finding monomer from addition repeat unit',
            examples: [
              'Remove the two trailing extension bonds of –[CH₂–CHCl]– and restore the C=C double bond → CH₂=CHCl (chloroethene).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'condensation polymerisation', definition: 'Joining monomers with two functional groups into a polymer chain while eliminating a small molecule such as water.' },
        ],
        commonMistake: 'When drawing a polymer REPEAT UNIT, NEVER forget the trailing extension bonds sticking out through both square brackets!',
      },
    ],
    keyTerms: [
      { term: 'Fermentation', definition: 'Anaerobic conversion of glucose into ethanol and CO₂ using yeast at ~30 °C.' },
      { term: 'Ester', definition: 'Sweet-smelling compound with –COO– linkage made from alcohol + carboxylic acid.' },
      { term: 'Addition polymer', definition: 'Polymer formed by opening C=C bonds of alkene monomers with no by-product.' },
      { term: 'Condensation polymer', definition: 'Polymer (nylon, PET, protein) formed by linking monomers while eliminating H₂O.' },
    ],
    checklistPoints: [
      'Compare fermentation and catalytic hydration for industrial ethanol production',
      'Name and draw esters formed from any alcohol + carboxylic acid pair',
      'Distinguish addition polymers from condensation polymers (nylon polyamide vs PET polyester vs proteins)',
    ],
  },

  'igchem-10-1': {
    subtopicId: 'igchem-10-1',
    subtopicCode: '10.1',
    subtopicTitle: 'Water Treatment, Air Pollutants & Climate Change',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Potable Water - Treating Freshwater | Desalinating Seawater',
    youtubeId: 'td8WR_FOQc0',
    videoChannel: 'Cognito',
    videoDuration: '5:14',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Chemistry (0620)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Chemical Tests for Water & Domestic Water Treatment', cardId: 'igchem-10-1-c1' },
      { time: '1:45', seconds: 105, label: 'Composition of Air, Pollutants & Catalytic Converters', cardId: 'igchem-10-1-c2' },
      { time: '3:30', seconds: 210, label: 'Greenhouse Effect, Climate Change & Photosynthesis', cardId: 'igchem-10-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-10-1-c1',
        title: 'Testing Water & Domestic Water Treatment',
        summary: 'Test chemically with anhydrous CuSO₄/CoCl₂, check purity via sharp 0 °C/100 °C, and treat domestic water by sedimentation, filtration, carbon, and chlorination.',
        bullets: [
          '**Chemical tests for water** - turns white anhydrous **copper(II) sulfate blue**; turns blue anhydrous **cobalt(II) chloride pink** (tests PRESENCE only — sharp boiling point 100 °C tests PURITY!).',
        ],
        subsections: [
          {
            heading: 'Four Stages of Domestic Water Treatment',
            bullets: [
              '**1. Sedimentation & Filtration** - removes insoluble grit, mud, and suspended solids.',
              '**2. Activated carbon** - removes unpleasant tastes and odours.',
              '**3. Chlorination** - kills harmful microbes/bacteria to make water safe to drink.',
            ],
            exampleHeading: 'Concrete check: Why labs use distilled water instead of tap water',
            examples: [
              'Tap water contains dissolved mineral ions (e.g. Ca²⁺, Cl⁻) that would cause false precipitates in qualitative ion tests.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'chlorination', definition: 'Adding small controlled amounts of chlorine to water supplies to kill disease-causing microorganisms.' },
        ],
      },
      {
        id: 'igchem-10-1-c2',
        title: 'Clean Air Composition, Pollutants & Catalytic Converters',
        summary: 'Clean dry air is 78% N₂, 21% O₂, ~0.9% Ar, 0.04% CO₂; catalytic converters turn toxic CO and NO into harmless N₂ and CO₂.',
        bullets: [
          '**Major air pollutants** - **CO** (incomplete combustion → toxic, binds haemoglobin); **SO₂** (sulfur impurities in fossil fuels → acid rain); **NOₓ** (high-temperature car engines → acid rain & photochemical smog); **particulates** (respiratory harm & cancer); **CH₄** (livestock/decay → potent greenhouse gas).',
        ],
        subsections: [
          {
            heading: 'Reducing Air Pollution',
            bullets: [
              '**Catalytic converter equation** - **2CO + 2NO → 2CO₂ + N₂** (using Pt/Rh catalyst on a honeycomb support for high surface area).',
              '**Flue gas desulfurisation** - spraying basic **calcium oxide (CaO)** neutralises acidic SO₂ in power station chimneys.',
            ],
            exampleHeading: 'Concrete check: Why CO is deadly',
            examples: [
              'Carbon monoxide binds irreversibly to haemoglobin in red blood cells, preventing oxygen transport around the body.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'catalytic converter', definition: 'Car exhaust device using platinum/rhodium catalysts to convert toxic CO and NO into harmless CO₂ and N₂.' },
        ],
      },
      {
        id: 'igchem-10-1-c3',
        title: 'The Greenhouse Effect & Mitigating Climate Change',
        summary: 'Greenhouse gases (CO₂, CH₄) allow short-wave sunlight in but absorb and re-emit outgoing long-wave infrared radiation.',
        bullets: [
          '**Greenhouse mechanism** - short-wavelength solar radiation passes through the atmosphere and warms Earth’s surface; Earth emits **longer-wavelength infrared (thermal) radiation**, which **CO₂ and CH₄ absorb and re-emit in all directions**, trapping heat.',
        ],
        subsections: [
          {
            heading: 'Consequences & Mitigation Strategies',
            bullets: [
              '**Impacts** - melting glaciers/polar ice, rising sea levels, extreme weather, habitat loss.',
              '**Strategies** - switch to renewable energy/hydrogen, plant trees (photosynthesis: **6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂**), reduce livestock methane.',
            ],
            exampleHeading: 'Concrete check: Exact radiation wording',
            examples: [
              'Always specify that greenhouse gases absorb OUTGOING THERMAL/INFRARED radiation emitted by Earth’s surface — do NOT say they "reflect sunlight"!',
            ],
          },
        ],
        glossaryPills: [
          { term: 'greenhouse gas', definition: 'An atmospheric gas (such as CO₂ or CH₄) that absorbs and re-emits outgoing infrared radiation, warming Earth’s lower atmosphere.' },
        ],
        memoryAid: 'Air: 78% N₂, 21% O₂, 0.9% Ar, 0.04% CO₂; Catalytic converter: 2CO + 2NO → 2CO₂ + N₂!',
        commonMistake: 'Do NOT confuse the test for PRESENCE of water (white CuSO₄ → blue) with the test for PURITY of water (sharp boiling point at exactly 100 °C)!',
      },
    ],
    keyTerms: [
      { term: 'Chlorination', definition: 'Adding chlorine to domestic water to kill harmful bacteria.' },
      { term: 'Catalytic converter', definition: 'Converts toxic CO and NO into CO₂ and N₂ in vehicle exhausts.' },
      { term: 'Greenhouse effect', definition: 'Trapping of outgoing infrared radiation by CO₂ and CH₄ in the atmosphere.' },
      { term: 'Acid rain', definition: 'Acidic precipitation formed when SO₂ and NOₓ dissolve in rainwater.' },
    ],
    checklistPoints: [
      'Distinguish chemical tests for water presence from physical tests for water purity, and outline water treatment',
      'Link CO, SO₂, NOₓ, particulates, and CH₄ to their sources, harms, and mitigation equations',
      'Explain the greenhouse effect precisely in terms of outgoing thermal/infrared absorption and re-emission',
    ],
  },
};

export const IGCSE_CHEMISTRY_QUIZZES: QuizQuestion[] = [
  // 1.1
  { id: 'igchem-q-1-1-1', subtopicId: 'igchem-1-1', type: 'mcq', marks: 1, prompt: 'In the NH₃ (M_r = 17) and HCl (M_r = 36.5) glass-tube diffusion experiment, where does the white ring of NH₄Cl form?', options: ['Exactly in the middle', 'Closer to the HCl end because NH₃ has lower M_r and diffuses faster', 'Closer to the NH₃ end because HCl is heavier', 'No ring forms without heating'], correctIndex: 1, explanation: 'Lighter NH₃ molecules move faster at the same temperature, travelling further before meeting HCl.' },
  { id: 'igchem-q-1-1-2', subtopicId: 'igchem-1-1', type: 'short-answer', marks: 2, prompt: 'Explain why the temperature of pure ice stays constant at 0 °C while it is melting despite continuous heating.', rubric: { maxMarks: 2, modelAnswer: 'The thermal energy supplied is used to overcome forces of attraction between particles rather than increasing their average kinetic energy, so temperature remains constant.', markPoints: [{ id: 'mp1', markDescription: 'Energy overcomes forces between particles', requiredKeywordGroups: [['overcome', 'break'], ['forces', 'bonds', 'attraction']] }, { id: 'mp2', markDescription: 'Kinetic energy does not increase', requiredKeywordGroups: [['kinetic energy', 'not raise', 'constant']] }] }, explanation: 'Latent heat breaks intermolecular attractions without increasing particle kinetic energy.' },
  { id: 'igchem-q-1-1-3', subtopicId: 'igchem-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the kinetic theory description:', segments: ['Particles in a solid ', ' about fixed positions, and diffusion is net movement from ', ' to lower concentration.'], wordBank: ['vibrate', 'higher', 'slide', 'zero'], answers: ['vibrate', 'higher'], explanation: 'Solid particles vibrate in place; diffusion moves down a concentration gradient.' },
  { id: 'igchem-q-1-1-4', subtopicId: 'igchem-1-1', type: 'mcq', marks: 1, prompt: 'Substance X melts at −30 °C and boils at 45 °C. What is its state at 20 °C?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctIndex: 1, explanation: '20 °C lies between its melting point (−30 °C) and boiling point (45 °C), so it is a liquid.' },
  { id: 'igchem-q-1-1-5', subtopicId: 'igchem-1-1', type: 'matching', marks: 2, prompt: 'Match each state change to its name:', pairs: [{ left: 'Solid → Liquid', right: 'Melting' }, { left: 'Liquid → Gas', right: 'Boiling / Evaporation' }, { left: 'Gas → Liquid', right: 'Condensing' }, { left: 'Solid → Gas directly', right: 'Sublimation' }], explanation: 'Standard state-change terminology for IGCSE 0620.' },

  // 1.2
  { id: 'igchem-q-1-2-1', subtopicId: 'igchem-1-2', type: 'short-answer', marks: 2, prompt: 'On a chromatogram, a dye moves 3.6 cm from the pencil baseline while the solvent front moves 6.0 cm. Calculate the R_f value.', rubric: { maxMarks: 2, modelAnswer: 'R_f = 3.6 ÷ 6.0 = 0.60.', markPoints: [{ id: 'mp1', markDescription: 'Divides 3.6 by 6.0', requiredKeywordGroups: [['3.6'], ['6']] }, { id: 'mp2', markDescription: 'Answer 0.6', numericMatch: { value: 0.6, tolerance: 0.01 } }] }, explanation: 'R_f = spot distance ÷ solvent front distance = 3.6 / 6.0 = 0.60.' },
  { id: 'igchem-q-1-2-2', subtopicId: 'igchem-1-2', type: 'mcq', marks: 1, prompt: 'Why must the baseline on chromatography paper be drawn in PENCIL rather than ink?', options: ['Pencil absorbs water faster', 'Graphite pencil is insoluble and will not run up the paper and interfere with spots', 'Ink evaporates immediately', 'Pencil acts as a locating agent'], correctIndex: 1, explanation: 'Pen ink is soluble and would separate into dyes, ruining the chromatogram.' },
  { id: 'igchem-q-1-2-3', subtopicId: 'igchem-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the purity and separation facts:', segments: ['A pure substance has a ', ' melting point, and ', ' distillation separates miscible liquids with close boiling points.'], wordBank: ['sharp', 'fractional', 'wide', 'simple'], answers: ['sharp', 'fractional'], explanation: 'Pure solids melt sharply at one temperature; fractional distillation separates miscible liquids.' },
  { id: 'igchem-q-1-2-4', subtopicId: 'igchem-1-2', type: 'mcq', marks: 1, prompt: 'How are colourless amino acid spots made visible on a finished paper chromatogram?', options: ['Heating in an oven', 'Spraying with a locating agent', 'Using a magnet', 'Filtering the paper'], correctIndex: 1, explanation: 'Locating agents react chemically with colourless spots to give visible colours.' },
  { id: 'igchem-q-1-2-5', subtopicId: 'igchem-1-2', type: 'matching', marks: 2, prompt: 'Match each mixture to the best separation technique:', pairs: [{ left: 'Sand + water', right: 'Filtration' }, { left: 'Pure water from sea water', right: 'Simple distillation' }, { left: 'Ethanol + water', right: 'Fractional distillation' }, { left: 'Food colourings', right: 'Paper chromatography' }], explanation: 'Match physical state and solubility to the right method.' },

  // 2.1
  { id: 'igchem-q-2-1-1', subtopicId: 'igchem-2-1', type: 'diagram-label', marks: 2, prompt: 'Identify the subatomic locations in the nuclear atom:', diagram: 'atomic-structure', labels: [{ marker: 'Central core', options: ['Nucleus (protons + neutrons)', 'Outer shell', 'Ion lattice'], answer: 'Nucleus (protons + neutrons)' }, { marker: 'Surrounding energy levels', options: ['Electron shells', 'Neutron rings', 'Proton orbits'], answer: 'Electron shells' }], explanation: 'Protons and neutrons sit in the nucleus; electrons occupy shells.' },
  { id: 'igchem-q-2-1-2', subtopicId: 'igchem-2-1', type: 'short-answer', marks: 2, prompt: 'Chlorine consists of 75% ³⁵Cl and 25% ³⁷Cl. Calculate its relative atomic mass (A_r).', rubric: { maxMarks: 2, modelAnswer: 'A_r = ((35 × 75) + (37 × 25)) / 100 = 3550 / 100 = 35.5.', markPoints: [{ id: 'mp1', markDescription: 'Weighted sum 3550 / 100', requiredKeywordGroups: [['2625', '3550', '35']] }, { id: 'mp2', markDescription: 'A_r = 35.5', numericMatch: { value: 35.5, tolerance: 0.05 } }] }, explanation: '(2625 + 925) ÷ 100 = 35.5.' },
  { id: 'igchem-q-2-1-3', subtopicId: 'igchem-2-1', type: 'mcq', marks: 1, prompt: 'Why do isotopes of the same element have identical chemical properties?', options: ['Same number of neutrons', 'Same electronic configuration (same number of outer electrons)', 'Same mass number', 'Same density'], correctIndex: 1, explanation: 'Chemical reactions involve outer-shell electrons, which are identical across isotopes.' },
  { id: 'igchem-q-2-1-4', subtopicId: 'igchem-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the electronic configuration of calcium (Z = 20):', segments: ['Calcium has configuration 2,8,8,', ', placing it in Group ', ' and Period 4.'], wordBank: ['2', 'II', '8', 'IV'], answers: ['2', 'II'], explanation: '2+8+8+2 = 20; 2 outer electrons → Group II, 4 shells → Period 4.' },
  { id: 'igchem-q-2-1-5', subtopicId: 'igchem-2-1', type: 'mcq', marks: 1, prompt: 'How many electrons are in an oxide ion O²⁻ (Z = 8)?', options: ['6', '8', '10', '16'], correctIndex: 2, explanation: 'Neutral O has 8 electrons; gaining 2 electrons gives 10 electrons (2,8).' },

  // 2.2
  { id: 'igchem-q-2-2-1', subtopicId: 'igchem-2-2', type: 'diagram-label', marks: 2, prompt: 'Distinguish ionic from covalent bonding:', diagram: 'ionic-covalent-bonding', labels: [{ marker: 'Metal + Non-metal', options: ['Electron transfer forming ions', 'Shared electron pairs', 'Delocalised sea'], answer: 'Electron transfer forming ions' }, { marker: 'Non-metal + Non-metal', options: ['Shared pair of electrons', 'Electrostatic ion transfer', 'Metallic lattice'], answer: 'Shared pair of electrons' }], explanation: 'Ionic transfers electrons; covalent shares pairs of electrons.' },
  { id: 'igchem-q-2-2-2', subtopicId: 'igchem-2-2', type: 'short-answer', marks: 2, prompt: 'Explain why alloys such as steel are harder than pure metals such as pure iron.', rubric: { maxMarks: 2, modelAnswer: 'Alloys contain atoms of different sizes, which distort the regular lattice layers and prevent layers of metal ions from sliding easily over each other.', markPoints: [{ id: 'mp1', markDescription: 'Different-sized atoms distort regular layers', requiredKeywordGroups: [['different size', 'larger', 'smaller', 'distort', 'disrupt']] }, { id: 'mp2', markDescription: 'Layers cannot slide easily', requiredKeywordGroups: [['layers'], ['slide', 'sliding']] }] }, explanation: 'Disrupted layers resist sliding under force.' },
  { id: 'igchem-q-2-2-3', subtopicId: 'igchem-2-2', type: 'mcq', marks: 1, prompt: 'Why does carbon dioxide (CO₂) have a very low sublimation/boiling point?', options: ['Weak covalent bonds inside CO₂', 'Weak intermolecular forces between CO₂ molecules require little energy to overcome', 'It is a giant ionic lattice', 'It has delocalised electrons'], correctIndex: 1, explanation: 'Only weak intermolecular forces break when simple molecular substances change state.' },
  { id: 'igchem-q-2-2-4', subtopicId: 'igchem-2-2', type: 'fill-blank', marks: 2, prompt: 'Complete the graphite vs diamond comparison:', segments: ['In graphite, each carbon forms ', ' covalent bonds leaving one ', ' electron per atom to conduct electricity.'], wordBank: ['3', 'delocalised', '4', 'ionic'], answers: ['3', 'delocalised'], explanation: '3 bonds per C leaves 1 delocalised electron free to move along the hexagonal layers.' },
  { id: 'igchem-q-2-2-5', subtopicId: 'igchem-2-2', type: 'multi-select', marks: 2, prompt: 'Select the TWO substances that conduct electricity when SOLID:', options: ['Graphite', 'Copper metal', 'Solid sodium chloride', 'Diamond'], selectCount: 2, correctIndices: [0, 1], explanation: 'Graphite and metals have mobile delocalised electrons in the solid state.' },

  // 3.1
  { id: 'igchem-q-3-1-1', subtopicId: 'igchem-3-1', type: 'short-answer', marks: 2, prompt: 'Calculate the volume (in dm³) occupied by 0.25 moles of CO₂ gas at r.t.p. (molar gas volume = 24 dm³).', rubric: { maxMarks: 2, modelAnswer: 'Volume = 0.25 × 24 = 6.0 dm³.', markPoints: [{ id: 'mp1', markDescription: 'Multiplies 0.25 × 24', requiredKeywordGroups: [['0.25'], ['24']] }, { id: 'mp2', markDescription: '6 dm³', numericMatch: { value: 6, tolerance: 0.05 } }] }, explanation: '0.25 × 24 = 6.0 dm³.' },
  { id: 'igchem-q-3-1-2', subtopicId: 'igchem-3-1', type: 'mcq', marks: 1, prompt: 'How many moles of NaOH are in 50 cm³ of 2.0 mol/dm³ NaOH(aq)?', options: ['100 mol', '0.10 mol', '0.025 mol', '40 mol'], correctIndex: 1, explanation: 'Convert 50 cm³ = 0.050 dm³; n = 2.0 × 0.050 = 0.10 mol.' },
  { id: 'igchem-q-3-1-3', subtopicId: 'igchem-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete the stoichiometry rules:', segments: ['1 mole contains 6.02 × 10²³ particles (', ' constant), and to convert cm³ to dm³ you divide by ', '.'], wordBank: ['Avogadro’s', '1000', 'Boyle’s', '24'], answers: ['Avogadro’s', '1000'], explanation: 'N_A = 6.02 × 10²³ mol⁻¹; 1 dm³ = 1,000 cm³.' },
  { id: 'igchem-q-3-1-4', subtopicId: 'igchem-3-1', type: 'mcq', marks: 1, prompt: 'A compound has empirical formula CH₂ and M_r = 56. What is its molecular formula? (C = 12, H = 1)', options: ['C₂H₄', 'C₃H₆', 'C₄H₈', 'C₅H₁₀'], correctIndex: 2, explanation: 'Empirical mass of CH₂ = 14; 56 ÷ 14 = 4 → C₄H₈.' },
  { id: 'igchem-q-3-1-5', subtopicId: 'igchem-3-1', type: 'mcq', marks: 1, prompt: 'A reaction has a theoretical yield of 20 g and produces 15 g of product. What is the percentage yield?', options: ['133%', '75%', '60%', '80%'], correctIndex: 1, explanation: '(15 ÷ 20) × 100% = 75%.' },

  // 4.1
  { id: 'igchem-q-4-1-1', subtopicId: 'igchem-4-1', type: 'mcq', marks: 1, prompt: 'What is produced at the CATHODE (−) during electrolysis of concentrated aqueous sodium chloride (brine)?', options: ['Sodium metal', 'Hydrogen gas', 'Chlorine gas', 'Oxygen gas'], correctIndex: 1, explanation: 'Sodium is more reactive than hydrogen, so H⁺ ions are discharged to form H₂ gas.' },
  { id: 'igchem-q-4-1-2', subtopicId: 'igchem-4-1', type: 'short-answer', marks: 2, prompt: 'Write the balanced half-equation at the anode (+) for the electrolysis of molten lead(II) bromide (PbBr₂) and state whether it is oxidation or reduction.', rubric: { maxMarks: 2, modelAnswer: '2Br⁻ → Br₂ + 2e⁻; this is oxidation because bromide ions lose electrons.', markPoints: [{ id: 'mp1', markDescription: '2Br⁻ → Br₂ + 2e⁻', requiredKeywordGroups: [['2br', 'br-'], ['br2', 'br₂'], ['2e']] }, { id: 'mp2', markDescription: 'Oxidation (loss of electrons)', requiredKeywordGroups: [['oxidation', 'oxidised']] }] }, explanation: 'Anions lose electrons at the anode (OILRIG: Oxidation Is Loss).' },
  { id: 'igchem-q-4-1-3', subtopicId: 'igchem-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the electroplating setup:', segments: ['To silver-plate a spoon, make the spoon the ', ' (−) and pure silver the ', ' (+).'], wordBank: ['cathode', 'anode', 'electrolyte', 'salt bridge'], answers: ['cathode', 'anode'], explanation: 'Ag⁺ cations migrate to the negative spoon cathode and deposit as metallic silver.' },
  { id: 'igchem-q-4-1-4', subtopicId: 'igchem-4-1', type: 'mcq', marks: 1, prompt: 'What is the ONLY chemical product emitted at point of use by a hydrogen–oxygen fuel cell?', options: ['Carbon dioxide', 'Water', 'Nitrogen dioxide', 'Methane'], correctIndex: 1, explanation: '2H₂ + O₂ → 2H₂O.' },
  { id: 'igchem-q-4-1-5', subtopicId: 'igchem-4-1', type: 'matching', marks: 2, prompt: 'Match each electrolysis term to its definition:', pairs: [{ left: 'Cathode', right: 'Negative electrode (reduction)' }, { left: 'Anode', right: 'Positive electrode (oxidation)' }, { left: 'Electrolyte', right: 'Molten/aqueous ionic liquid' }, { left: 'Charge carriers in wire', right: 'Electrons' }], explanation: 'Electrons flow in wires; ions flow in electrolytes.' },

  // 5.1
  { id: 'igchem-q-5-1-1', subtopicId: 'igchem-5-1', type: 'diagram-label', marks: 2, prompt: 'Identify the features of exothermic and endothermic reaction pathway diagrams:', diagram: 'exothermic-endothermic', labels: [{ marker: 'Products LOWER than reactants', options: ['Exothermic (ΔH negative)', 'Endothermic (ΔH positive)', 'Zero activation energy'], answer: 'Exothermic (ΔH negative)' }, { marker: 'Reactants up to peak', options: ['Activation energy E_a', 'Enthalpy change ΔH', 'Catalyst mass'], answer: 'Activation energy E_a' }], explanation: 'Exothermic reactions release energy (products lower); peak height from reactants is E_a.' },
  { id: 'igchem-q-5-1-2', subtopicId: 'igchem-5-1', type: 'short-answer', marks: 2, prompt: 'In a reaction, total energy to break reactant bonds is 900 kJ/mol and total energy released making product bonds is 1,150 kJ/mol. Calculate ΔH and state whether the reaction is exothermic or endothermic.', rubric: { maxMarks: 2, modelAnswer: 'ΔH = 900 − 1150 = −250 kJ/mol, which is exothermic.', markPoints: [{ id: 'mp1', markDescription: 'ΔH = −250 kJ/mol', numericMatch: { value: -250, tolerance: 0.5 } }, { id: 'mp2', markDescription: 'Exothermic', requiredKeywordGroups: [['exothermic']] }] }, explanation: 'ΔH = Broken − Made = 900 − 1150 = −250 kJ/mol (negative = exothermic).' },
  { id: 'igchem-q-5-1-3', subtopicId: 'igchem-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the BENDO–MEXO rule:', segments: ['Bond breaking is always ', ', while bond making is always ', '.'], wordBank: ['endothermic', 'exothermic', 'neutral', 'reversible'], answers: ['endothermic', 'exothermic'], explanation: 'Energy goes IN to break bonds and comes OUT when bonds form.' },
  { id: 'igchem-q-5-1-4', subtopicId: 'igchem-5-1', type: 'mcq', marks: 1, prompt: 'In an endothermic reaction carried out in a polystyrene cup, what happens to the thermometer reading?', options: ['Rises sharply', 'Falls (decreases)', 'Stays unchanged', 'Drops to 0 °C always'], correctIndex: 1, explanation: 'Endothermic reactions absorb thermal energy from the solution/surroundings, lowering temperature.' },
  { id: 'igchem-q-5-1-5', subtopicId: 'igchem-5-1', type: 'mcq', marks: 1, prompt: 'Which of these is an ENDOTHERMIC process?', options: ['Combustion of methane', 'Neutralisation of HCl with NaOH', 'Thermal decomposition of calcium carbonate', 'Respiration'], correctIndex: 2, explanation: 'Thermal decomposition requires continuous heat absorption.' },

  // 6.1
  { id: 'igchem-q-6-1-1', subtopicId: 'igchem-6-1', type: 'mcq', marks: 1, prompt: 'How does a catalyst increase the rate of a chemical reaction?', options: ['Gives reactant particles more kinetic energy', 'Provides an alternative pathway with a lower activation energy E_a', 'Increases concentration of reactants', 'Makes ΔH more negative'], correctIndex: 1, explanation: 'Catalysts lower E_a via an alternative mechanism without changing ΔH.' },
  { id: 'igchem-q-6-1-2', subtopicId: 'igchem-6-1', type: 'short-answer', marks: 2, prompt: 'Explain, using collision theory, why increasing temperature dramatically increases the rate of reaction.', rubric: { maxMarks: 2, modelAnswer: 'Particles have more kinetic energy so they move faster, giving more frequent collisions, AND a much larger proportion of collisions have energy greater than or equal to the activation energy.', markPoints: [{ id: 'mp1', markDescription: 'More kinetic energy / more frequent collisions', requiredKeywordGroups: [['kinetic energy', 'faster'], ['frequent', 'per second']] }, { id: 'mp2', markDescription: 'Greater proportion ≥ activation energy', requiredKeywordGroups: [['activation energy', 'e_a', 'ea'], ['proportion', 'more', 'exceed', 'greater']] }] }, explanation: 'Both higher collision frequency and more particles exceeding E_a accelerate rate.' },
  { id: 'igchem-q-6-1-3', subtopicId: 'igchem-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the surface area and concentration effects:', segments: ['Crushing marble chips into powder increases ', ', and higher concentration means more particles per unit ', '.'], wordBank: ['surface area', 'volume', 'activation energy', 'mass'], answers: ['surface area', 'volume'], explanation: 'Larger surface area and higher particles/unit volume both raise collision frequency.' },
  { id: 'igchem-q-6-1-4', subtopicId: 'igchem-6-1', type: 'mcq', marks: 1, prompt: 'Equal masses of powdered and lump CaCO₃ react with excess HCl. How do their gas-volume vs time graphs compare?', options: ['Powder finishes faster and makes twice as much gas', 'Powder has a steeper initial gradient but reaches the SAME final gas volume', 'Lumps finish faster', 'Both graphs are identical'], correctIndex: 1, explanation: 'Same limiting mass of CaCO₃ produces the exact same total volume of CO₂, just faster with powder.' },
  { id: 'igchem-q-6-1-5', subtopicId: 'igchem-6-1', type: 'multi-select', marks: 2, prompt: 'Select the TWO valid ways to follow the rate of CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂:', options: ['Measure CO₂ volume in a gas syringe over time', 'Measure total mass loss on a digital balance over time', 'Time a disappearing cross precipitate', 'Use a pH paper strip only'], selectCount: 2, correctIndices: [0, 1], explanation: 'Since CO₂ gas is produced, gas syringe or mass-loss tracking work accurately.' },

  // 6.2
  { id: 'igchem-q-6-2-1', subtopicId: 'igchem-6-2', type: 'mcq', marks: 1, prompt: 'What are the industrial conditions for the Haber process (N₂ + 3H₂ ⇌ 2NH₃)?', options: ['100 °C, 1 atm, V₂O₅ catalyst', '450 °C, 200 atm, iron catalyst', '450 °C, 2 atm, V₂O₅ catalyst', '900 °C, 50 atm, nickel catalyst'], correctIndex: 1, explanation: 'Haber uses 450 °C, 200 atm, and an iron catalyst (Contact uses 450 °C, 2 atm, V₂O₅).' },
  { id: 'igchem-q-6-2-2', subtopicId: 'igchem-6-2', type: 'short-answer', marks: 2, prompt: 'State the TWO defining characteristics of a chemical system at dynamic equilibrium.', rubric: { maxMarks: 2, modelAnswer: '1) The rate of the forward reaction equals the rate of the reverse reaction, and 2) the concentrations of reactants and products remain constant (in a closed system).', markPoints: [{ id: 'mp1', markDescription: 'Forward and reverse rates are equal', requiredKeywordGroups: [['rate'], ['equal', 'same']] }, { id: 'mp2', markDescription: 'Concentrations remain constant', requiredKeywordGroups: [['concentration', 'amount'], ['constant', 'unchanged']] }] }, explanation: 'Equal rates + constant concentrations in a closed system.' },
  { id: 'igchem-q-6-2-3', subtopicId: 'igchem-6-2', type: 'fill-blank', marks: 2, prompt: 'Complete Le Chatelier’s Principle:', segments: ['Increasing pressure shifts a gaseous equilibrium towards ', ' moles of gas, and adding a catalyst changes the yield by ', '.'], wordBank: ['fewer', 'nothing', 'more', '50%'], answers: ['fewer', 'nothing'], explanation: 'Higher pressure favours fewer gas moles; catalysts do not shift equilibrium position.' },
  { id: 'igchem-q-6-2-4', subtopicId: 'igchem-6-2', type: 'mcq', marks: 1, prompt: 'What colour change occurs when water is added to white anhydrous copper(II) sulfate?', options: ['White to pink', 'White to blue', 'Blue to white', 'Green to brown'], correctIndex: 1, explanation: 'Anhydrous white CuSO₄ hydrates into blue CuSO₄·5H₂O.' },
  { id: 'igchem-q-6-2-5', subtopicId: 'igchem-6-2', type: 'mcq', marks: 1, prompt: 'In 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (forward exothermic), what happens if temperature is INCREASED?', options: ['Shifts right, more SO₃', 'Shifts left (endothermic direction), less SO₃', 'No change in equilibrium', 'Reaction stops'], correctIndex: 1, explanation: 'Raising temperature always favours the endothermic direction (here reverse/left).' },

  // 7.1
  { id: 'igchem-q-7-1-1', subtopicId: 'igchem-7-1', type: 'mcq', marks: 1, prompt: 'Which pair of oxides are BOTH amphoteric (react with both acids and alkalis)?', options: ['Na₂O and CO₂', 'Al₂O₃ and ZnO', 'SO₂ and NO₂', 'CuO and MgO'], correctIndex: 1, explanation: 'Aluminium oxide (Al₂O₃) and zinc oxide (ZnO) are the two classic IGCSE amphoteric oxides.' },
  { id: 'igchem-q-7-1-2', subtopicId: 'igchem-7-1', type: 'short-answer', marks: 2, prompt: 'Explain the difference between a strong acid (like HCl) and a weak acid (like ethanoic acid) in aqueous solution.', rubric: { maxMarks: 2, modelAnswer: 'A strong acid completely dissociates (ionises) into H⁺ ions in water, whereas a weak acid only partially dissociates.', markPoints: [{ id: 'mp1', markDescription: 'Strong acid completely dissociates', requiredKeywordGroups: [['strong'], ['completely', 'fully'], ['dissociat', 'ionis']] }, { id: 'mp2', markDescription: 'Weak acid partially dissociates', requiredKeywordGroups: [['weak'], ['partially', 'incomplete', 'slightly'], ['dissociat', 'ionis']] }] }, explanation: 'Strength refers strictly to degree of dissociation, not concentration.' },
  { id: 'igchem-q-7-1-3', subtopicId: 'igchem-7-1', type: 'fill-blank', marks: 2, prompt: 'Complete the salt preparation rule:', segments: ['To prepare an insoluble salt like BaSO₄ use ', ', and to prepare sodium chloride use ', '.'], wordBank: ['precipitation', 'titration', 'filtration only', 'electrolysis'], answers: ['precipitation', 'titration'], explanation: 'Insoluble salts → precipitation; Group I/NH₄⁺ soluble salts → titration.' },
  { id: 'igchem-q-7-1-4', subtopicId: 'igchem-7-1', type: 'mcq', marks: 1, prompt: 'What is the ionic equation for EVERY acid–alkali neutralisation reaction?', options: ['Na⁺ + Cl⁻ → NaCl', 'H⁺(aq) + OH⁻(aq) → H₂O(l)', 'H₂ + O₂ → 2H₂O', 'H⁺ + CO₃²⁻ → CO₂'], correctIndex: 1, explanation: 'Spectator ions cancel, leaving H⁺(aq) + OH⁻(aq) → H₂O(l).' },
  { id: 'igchem-q-7-1-5', subtopicId: 'igchem-7-1', type: 'matching', marks: 2, prompt: 'Match each salt to its preparation method:', pairs: [{ left: 'Copper(II) sulfate (soluble)', right: 'Excess insoluble CuO + H₂SO₄' }, { left: 'Potassium nitrate (Group I)', right: 'Titration (KOH + HNO₃)' }, { left: 'Silver chloride (insoluble)', right: 'Precipitation (AgNO₃ + NaCl)' }, { left: 'Zinc sulfate (soluble)', right: 'Excess ZnCO₃ + H₂SO₄' }], explanation: 'Choose method from reactant and product solubility.' },

  // 7.2
  { id: 'igchem-q-7-2-1', subtopicId: 'igchem-7-2', type: 'mcq', marks: 1, prompt: 'An aqueous solution gives a YELLOW precipitate when acidified with dilute HNO₃ and treated with AgNO₃(aq). Which anion is present?', options: ['Chloride (Cl⁻)', 'Bromide (Br⁻)', 'Iodide (I⁻)', 'Sulfate (SO₄²⁻)'], correctIndex: 2, explanation: 'AgCl = white, AgBr = cream, AgI = yellow.' },
  { id: 'igchem-q-7-2-2', subtopicId: 'igchem-7-2', type: 'short-answer', marks: 2, prompt: 'Describe the chemical test and positive observation for sulfate ions (SO₄²⁻) in solution.', rubric: { maxMarks: 2, modelAnswer: 'Acidify the sample with dilute nitric acid (or HCl), then add aqueous barium nitrate (or barium chloride); a white precipitate of barium sulfate forms.', markPoints: [{ id: 'mp1', markDescription: 'Acidify + add barium nitrate/chloride', requiredKeywordGroups: [['nitric', 'hcl', 'acid'], ['barium']] }, { id: 'mp2', markDescription: 'White precipitate', requiredKeywordGroups: [['white'], ['precipitate', 'ppt']] }] }, explanation: 'Acidified Ba²⁺(aq) gives a white BaSO₄ precipitate.' },
  { id: 'igchem-q-7-2-3', subtopicId: 'igchem-7-2', type: 'matching', marks: 2, prompt: 'Match each metal cation to its flame colour or hydroxide precipitate:', pairs: [{ left: 'K⁺ flame', right: 'Lilac' }, { left: 'Na⁺ flame', right: 'Yellow' }, { left: 'Fe²⁺ + NaOH(aq)', right: 'Green precipitate' }, { left: 'Fe³⁺ + NaOH(aq)', right: 'Red-brown precipitate' }], explanation: 'High-frequency Cambridge 0620 qualitative analysis tests.' },
  { id: 'igchem-q-7-2-4', subtopicId: 'igchem-7-2', type: 'fill-blank', marks: 2, prompt: 'Complete the gas tests:', segments: ['Chlorine gas ', ' damp litmus paper, while ammonia turns damp red litmus ', '.'], wordBank: ['bleaches', 'blue', 'relights', 'milky'], answers: ['bleaches', 'blue'], explanation: 'Cl₂ bleaches damp litmus white; alkaline NH₃ turns red litmus blue.' },
  { id: 'igchem-q-7-2-5', subtopicId: 'igchem-7-2', type: 'mcq', marks: 1, prompt: 'Which cation forms a white precipitate with NaOH(aq) that redissolves in BOTH excess NaOH and excess NH₃?', options: ['Ca²⁺', 'Al³⁺', 'Zn²⁺', 'Cu²⁺'], correctIndex: 2, explanation: 'Zn²⁺ dissolves in both excesses; Al³⁺ dissolves in excess NaOH only; Ca²⁺ stays insoluble.' },

  // 8.1
  { id: 'igchem-q-8-1-1', subtopicId: 'igchem-8-1', type: 'mcq', marks: 1, prompt: 'What happens when aqueous chlorine is added to colourless aqueous potassium bromide (KBr)?', options: ['No reaction', 'Solution turns orange-brown as bromine is displaced', 'A lilac flame appears', 'Solid potassium forms'], correctIndex: 1, explanation: 'Cl₂ is more reactive than Br₂, displacing orange-brown Br₂: Cl₂ + 2KBr → 2KCl + Br₂.' },
  { id: 'igchem-q-8-1-2', subtopicId: 'igchem-8-1', type: 'short-answer', marks: 2, prompt: 'Explain why Group I metals become MORE reactive as you go down the group.', rubric: { maxMarks: 2, modelAnswer: 'Down Group I atoms have more electron shells, so the outer electron is further from the nucleus with greater shielding; electrostatic attraction is weaker, making the outer electron easier to lose.', markPoints: [{ id: 'mp1', markDescription: 'More shells / greater distance / more shielding', requiredKeywordGroups: [['shell', 'radius', 'further', 'distance', 'shielding']] }, { id: 'mp2', markDescription: 'Weaker attraction so outer electron easier to lose', requiredKeywordGroups: [['easier', 'less energy'], ['lose', 'lost'], ['electron']] }] }, explanation: 'Greater radius and shielding reduce nuclear hold on the single outer electron.' },
  { id: 'igchem-q-8-1-3', subtopicId: 'igchem-8-1', type: 'multi-select', marks: 2, prompt: 'Select TWO properties typical of transition elements (like iron or copper) but NOT Group I metals:', options: ['Form coloured compounds', 'Act as catalysts', 'Soft enough to cut with a knife', 'Float on cold water'], selectCount: 2, correctIndices: [0, 1], explanation: 'Transition metals form coloured ions, have variable oxidation states, and act as catalysts.' },
  { id: 'igchem-q-8-1-4', subtopicId: 'igchem-8-1', type: 'fill-blank', marks: 2, prompt: 'Complete the noble gas explanation:', segments: ['Group VIII noble gases are unreactive ', ' gases because they have a ', ' outer shell of electrons.'], wordBank: ['monatomic', 'full', 'diatomic', 'empty'], answers: ['monatomic', 'full'], explanation: 'Full valence shells give noble gases complete stability as single atoms.' },
  { id: 'igchem-q-8-1-5', subtopicId: 'igchem-8-1', type: 'mcq', marks: 1, prompt: 'What is the physical state and colour of iodine (I₂) at room temperature?', options: ['Pale yellow gas', 'Red-brown liquid', 'Grey-black solid', 'Green gas'], correctIndex: 2, explanation: 'Cl₂ = green gas, Br₂ = red-brown liquid, I₂ = grey-black solid.' },

  // 8.2
  { id: 'igchem-q-8-2-1', subtopicId: 'igchem-8-2', type: 'mcq', marks: 1, prompt: 'Why is molten cryolite added to aluminium oxide during aluminium extraction?', options: ['To oxidise the aluminium', 'To lower the melting/operating temperature and save energy costs', 'To remove silicon dioxide as slag', 'To prevent carbon anodes burning'], correctIndex: 1, explanation: 'Cryolite dissolves Al₂O₃ at ~950 °C instead of ~2,050 °C.' },
  { id: 'igchem-q-8-2-2', subtopicId: 'igchem-8-2', type: 'short-answer', marks: 2, prompt: 'Explain why galvanised (zinc-coated) steel still does NOT rust even when the zinc layer is scratched to expose iron.', rubric: { maxMarks: 2, modelAnswer: 'Zinc is more reactive than iron, so it acts by sacrificial protection — zinc loses electrons (oxidises) preferentially instead of the iron.', markPoints: [{ id: 'mp1', markDescription: 'Zinc is more reactive than iron', requiredKeywordGroups: [['zinc'], ['more reactive']] }, { id: 'mp2', markDescription: 'Sacrificial protection / zinc loses electrons preferentially', requiredKeywordGroups: [['sacrificial', 'loses electrons', 'oxidise', 'corrodes instead']] }] }, explanation: 'Zinc sacrifices itself by oxidising first.' },
  { id: 'igchem-q-8-2-3', subtopicId: 'igchem-8-2', type: 'fill-blank', marks: 2, prompt: 'Complete the blast furnace chemistry:', segments: ['Iron(III) oxide is reduced mainly by ', ', and calcium oxide neutralises silicon(IV) oxide to form molten ', '.'], wordBank: ['carbon monoxide', 'slag', 'cryolite', 'hydrogen'], answers: ['carbon monoxide', 'slag'], explanation: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂; CaO + SiO₂ → CaSiO₃ (slag).' },
  { id: 'igchem-q-8-2-4', subtopicId: 'igchem-8-2', type: 'mcq', marks: 1, prompt: 'Why must the carbon anodes be replaced regularly during aluminium extraction?', options: ['Molten aluminium dissolves them', 'Oxygen produced at the anodes reacts with hot carbon to form CO₂', 'Cryolite melts them', 'They turn into steel'], correctIndex: 1, explanation: 'C(s) + O₂(g) → CO₂(g) gradually burns away the anodes.' },
  { id: 'igchem-q-8-2-5', subtopicId: 'igchem-8-2', type: 'mcq', marks: 1, prompt: 'Which two substances are BOTH essential for iron to rust?', options: ['Water and nitrogen', 'Water and oxygen', 'Oxygen and carbon dioxide', 'Salt and nitrogen'], correctIndex: 1, explanation: 'Rusting requires both H₂O and O₂.' },

  // 9.1
  { id: 'igchem-q-9-1-1', subtopicId: 'igchem-9-1', type: 'mcq', marks: 1, prompt: 'What is observed when ethene gas is bubbled through aqueous bromine water?', options: ['Stays orange-brown', 'Turns from orange-brown to colourless', 'Forms a white precipitate', 'Turns blue'], correctIndex: 1, explanation: 'Unsaturated alkenes rapidly decolourise bromine water via addition across C=C.' },
  { id: 'igchem-q-9-1-2', subtopicId: 'igchem-9-1', type: 'short-answer', marks: 2, prompt: 'Balance the cracking equation for dodecane (C₁₂H₂₆) forming octane (C₈H₁₈) and ethene (C₂H₄): C₁₂H₂₆ → C₈H₁₈ + ___ C₂H₄, and state why cracking is useful.', rubric: { maxMarks: 2, modelAnswer: 'C₁₂H₂₆ → C₈H₁₈ + 2 C₂H₄. Cracking converts abundant low-demand long alkanes into high-demand shorter fuels (petrol) and alkenes for making plastics.', markPoints: [{ id: 'mp1', markDescription: 'Coefficient 2 for C₂H₄', numericMatch: { value: 2, tolerance: 0.01 } }, { id: 'mp2', markDescription: 'Makes high-demand shorter fuels / alkenes for polymers', requiredKeywordGroups: [['fuel', 'petrol', 'demand', 'alkene', 'polymer', 'plastic']] }] }, explanation: '12 − 8 = 4 C and 26 − 18 = 8 H → 2 molecules of C₂H₄.' },
  { id: 'igchem-q-9-1-3', subtopicId: 'igchem-9-1', type: 'fill-blank', marks: 2, prompt: 'Complete the alkane vs alkene general formulae:', segments: ['Alkanes have general formula ', ' and react with chlorine in ', ' light via substitution.'], wordBank: ['CₙH₂ₙ₊₂', 'UV', 'CₙH₂ₙ', 'infrared'], answers: ['CₙH₂ₙ₊₂', 'UV'], explanation: 'Alkanes are saturated (CₙH₂ₙ₊₂) and undergo photochemical substitution under UV light.' },
  { id: 'igchem-q-9-1-4', subtopicId: 'igchem-9-1', type: 'mcq', marks: 1, prompt: 'Moving DOWN a crude oil fractional distillation column, how do boiling point and viscosity change?', options: ['Both decrease', 'Both increase', 'Boiling point increases, viscosity decreases', 'Both stay constant'], correctIndex: 1, explanation: 'Longer chains have stronger intermolecular forces → higher boiling point and thicker viscosity.' },
  { id: 'igchem-q-9-1-5', subtopicId: 'igchem-9-1', type: 'mcq', marks: 1, prompt: 'Which catalyst is used to hydrogenate an alkene into an alkane (C₂H₄ + H₂ → C₂H₆)?', options: ['Iron', 'Nickel', 'Vanadium(V) oxide', 'Phosphoric acid'], correctIndex: 1, explanation: 'Hydrogenation uses a nickel catalyst at ~150–200 °C.' },

  // 9.2
  { id: 'igchem-q-9-2-1', subtopicId: 'igchem-9-2', type: 'mcq', marks: 1, prompt: 'What is the name of the ester formed when ethanol reacts with propanoic acid?', options: ['Propyl ethanoate', 'Ethyl propanoate', 'Ethyl ethanoate', 'Propyl propanoate'], correctIndex: 1, explanation: 'Alcohol → ethyl; Carboxylic acid → propanoate → ethyl propanoate.' },
  { id: 'igchem-q-9-2-2', subtopicId: 'igchem-9-2', type: 'short-answer', marks: 2, prompt: 'Compare ONE advantage and ONE disadvantage of making ethanol by fermentation compared with catalytic hydration of ethene.', rubric: { maxMarks: 2, modelAnswer: 'Advantage: uses renewable plant sugars and low temperature (~30 °C / low energy). Disadvantage: slow batch process producing impure aqueous ethanol that needs fractional distillation.', markPoints: [{ id: 'mp1', markDescription: 'Advantage (renewable / low energy / low temp)', requiredKeywordGroups: [['renewable', 'low energy', 'low temp', '30']] }, { id: 'mp2', markDescription: 'Disadvantage (slow / batch / impure / needs distillation)', requiredKeywordGroups: [['slow', 'batch', 'impure', 'distillation']] }] }, explanation: 'Fermentation is renewable and low-energy, but slow and impure.' },
  { id: 'igchem-q-9-2-3', subtopicId: 'igchem-9-2', type: 'fill-blank', marks: 2, prompt: 'Complete the polymerisation contrast:', segments: ['Nylon is a condensation ', ' containing the –CONH– linkage, and ', ' is eliminated when condensation monomers join.'], wordBank: ['polyamide', 'water', 'polyester', 'hydrogen'], answers: ['polyamide', 'water'], explanation: 'Nylon is a polyamide; condensation polymerisation eliminates H₂O.' },
  { id: 'igchem-q-9-2-4', subtopicId: 'igchem-9-2', type: 'mcq', marks: 1, prompt: 'What colour change is seen when ethanol is oxidised by warming with acidified potassium manganate(VII)?', options: ['Orange to green', 'Purple to colourless', 'Blue to brick-red', 'Colourless to yellow'], correctIndex: 1, explanation: 'MnO₄⁻ (purple) is reduced to Mn²⁺ (colourless) as ethanol oxidises to ethanoic acid.' },
  { id: 'igchem-q-9-2-5', subtopicId: 'igchem-9-2', type: 'matching', marks: 2, prompt: 'Match each organic family to its functional group:', pairs: [{ left: 'Alcohol', right: '–OH' }, { left: 'Carboxylic acid', right: '–COOH' }, { left: 'Ester / Polyester', right: '–COO–' }, { left: 'Polyamide (Nylon/Protein)', right: '–CONH–' }], explanation: 'Recognise functional groups instantly for organic and polymer questions.' },

  // 10.1
  { id: 'igchem-q-10-1-1', subtopicId: 'igchem-10-1', type: 'mcq', marks: 1, prompt: 'What is the approximate composition of clean, dry air?', options: ['78% oxygen, 21% nitrogen', '78% nitrogen, 21% oxygen, ~0.9% argon, 0.04% CO₂', '50% nitrogen, 50% oxygen', '78% nitrogen, 15% oxygen, 7% CO₂'], correctIndex: 1, explanation: 'Clean dry air is 78% N₂, 21% O₂, and ~1% noble gases (mainly Ar) + 0.04% CO₂.' },
  { id: 'igchem-q-10-1-2', subtopicId: 'igchem-10-1', type: 'short-answer', marks: 2, prompt: 'Write the balanced chemical equation for the removal of carbon monoxide and nitrogen monoxide inside a car’s catalytic converter.', rubric: { maxMarks: 2, modelAnswer: '2CO + 2NO → 2CO₂ + N₂.', markPoints: [{ id: 'mp1', markDescription: 'Correct reactants & products (CO + NO → CO₂ + N₂)', requiredKeywordGroups: [['co'], ['no'], ['co2', 'co₂'], ['n2', 'n₂']] }, { id: 'mp2', markDescription: 'Balanced with 2CO + 2NO → 2CO₂ + N₂', requiredKeywordGroups: [['2co'], ['2no'], ['2co2', '2co₂']] }] }, explanation: '2CO + 2NO → 2CO₂ + N₂ turns two toxic gases into harmless ones.' },
  { id: 'igchem-q-10-1-3', subtopicId: 'igchem-10-1', type: 'fill-blank', marks: 2, prompt: 'Complete the water treatment steps:', segments: ['Activated ', ' removes bad tastes and odours from domestic water, and ', ' kills harmful bacteria.'], wordBank: ['carbon', 'chlorination', 'limestone', 'filtration'], answers: ['carbon', 'chlorination'], explanation: 'Activated carbon adsorbs tastes/odours; chlorination disinfects microbes.' },
  { id: 'igchem-q-10-1-4', subtopicId: 'igchem-10-1', type: 'mcq', marks: 1, prompt: 'How do greenhouse gases such as CO₂ and CH₄ cause global warming?', options: ['They block incoming sunlight completely', 'They absorb and re-emit outgoing thermal (infrared) radiation emitted by Earth', 'They destroy the ozone layer', 'They react exothermically with nitrogen'], correctIndex: 1, explanation: 'Short-wave sunlight enters; greenhouse gases absorb and re-emit outgoing long-wave infrared.' },
  { id: 'igchem-q-10-1-5', subtopicId: 'igchem-10-1', type: 'matching', marks: 2, prompt: 'Match each pollutant to its main harmful effect:', pairs: [{ left: 'Carbon monoxide (CO)', right: 'Toxic; reduces oxygen transport in blood' }, { left: 'Sulfur dioxide (SO₂)', right: 'Acid rain' }, { left: 'Methane (CH₄)', right: 'Potent greenhouse gas' }, { left: 'Particulates', right: 'Respiratory problems & cancer' }], explanation: 'Know the source and harm of every Cambridge 0620 air pollutant.' },
];

export const IGCSE_CHEMISTRY_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'igchem-fc-1-1-1', subtopicId: 'igchem-1-1', front: 'Why does temperature stay constant on the flat plateau of a heating curve?', backBullets: ['Supplied heat energy breaks intermolecular forces rather than increasing kinetic energy.'] },
  { id: 'igchem-fc-1-1-2', subtopicId: 'igchem-1-1', front: 'How does relative molecular mass M_r affect rate of gas diffusion?', backBullets: ['Lower M_r (lighter) molecules move faster and diffuse faster (NH₃ beats HCl).'] },
  { id: 'igchem-fc-1-1-3', subtopicId: 'igchem-1-1', front: 'Describe particle arrangement and motion in a liquid.', backBullets: ['Close together, randomly arranged, able to slide past one another.'] },
  { id: 'igchem-fc-1-1-4', subtopicId: 'igchem-1-1', front: 'Where does the white NH₄Cl ring form in the NH₃ / HCl diffusion tube?', backBullets: ['Closer to the HCl end because NH₃ (M_r 17) diffuses faster than HCl (M_r 36.5).'] },
  { id: 'igchem-fc-1-1-5', subtopicId: 'igchem-1-1', front: 'Effect of impurities on melting and boiling points?', backBullets: ['Lowers melting point over a range; raises boiling point.'] },
  // 1.2
  { id: 'igchem-fc-1-2-1', subtopicId: 'igchem-1-2', front: 'Formula for R_f value in paper chromatography?', backBullets: ['R_f = distance moved by spot ÷ distance moved by solvent front (always 0–1).'] },
  { id: 'igchem-fc-1-2-2', subtopicId: 'igchem-1-2', front: 'Why draw the chromatography baseline in pencil above the solvent?', backBullets: ['Graphite is insoluble (will not run); keeping it above solvent stops spots dissolving into the beaker.'] },
  { id: 'igchem-fc-1-2-3', subtopicId: 'igchem-1-2', front: 'Purpose of a locating agent in chromatography?', backBullets: ['Reacts with colourless spots (e.g. amino acids) to make them visible.'] },
  { id: 'igchem-fc-1-2-4', subtopicId: 'igchem-1-2', front: 'Simple distillation vs fractional distillation?', backBullets: ['Simple: solvent from dissolved solid; Fractional: miscible liquids with close boiling points.'] },
  { id: 'igchem-fc-1-2-5', subtopicId: 'igchem-1-2', front: 'How do you obtain pure dry salt crystals from an aqueous solution?', backBullets: ['Evaporate gently to crystallisation point, cool, filter, wash with minimal cold water, pat dry.'] },
  // 2.1
  { id: 'igchem-fc-2-1-1', subtopicId: 'igchem-2-1', front: 'Relative masses and charges of proton, neutron, and electron?', backBullets: ['Proton (+1, 1); Neutron (0, 1); Electron (−1, 1/1840).'] },
  { id: 'igchem-fc-2-1-2', subtopicId: 'igchem-2-1', front: 'How do electronic configuration shells relate to Group and Period?', backBullets: ['Outer electrons = Group number; Number of occupied shells = Period number.'] },
  { id: 'igchem-fc-2-1-3', subtopicId: 'igchem-2-1', front: 'Why do isotopes of an element have identical chemical properties?', backBullets: ['Same number of outer-shell electrons (identical electronic configuration).'] },
  { id: 'igchem-fc-2-1-4', subtopicId: 'igchem-2-1', front: 'Formula for relative atomic mass A_r from % abundances?', backBullets: ['A_r = Σ(isotopic mass × % abundance) ÷ 100.'] },
  { id: 'igchem-fc-2-1-5', subtopicId: 'igchem-2-1', front: 'Electronic configuration of calcium (Z = 20)?', backBullets: ['2,8,8,2 (Period 4, Group II).'] },
  // 2.2
  { id: 'igchem-fc-2-2-1', subtopicId: 'igchem-2-2', front: 'Why do ionic compounds conduct only when molten or aqueous?', backBullets: ['Ions are fixed in the solid lattice, but free to move and carry charge when molten or dissolved.'] },
  { id: 'igchem-fc-2-2-2', subtopicId: 'igchem-2-2', front: 'Why do simple covalent molecules have low melting points?', backBullets: ['Weak intermolecular forces between molecules need little energy to overcome.'] },
  { id: 'igchem-fc-2-2-3', subtopicId: 'igchem-2-2', front: 'Why does graphite conduct electricity and act as a lubricant?', backBullets: ['Each C forms 3 bonds: 1 delocalised electron conducts; weak forces between layers let them slide.'] },
  { id: 'igchem-fc-2-2-4', subtopicId: 'igchem-2-2', front: 'Compare diamond and silicon(IV) oxide (SiO₂).', backBullets: ['Both are giant tetrahedral covalent lattices — very hard, very high m.p., electrical insulators.'] },
  { id: 'igchem-fc-2-2-5', subtopicId: 'igchem-2-2', front: 'Why are alloys harder than pure metals?', backBullets: ['Differently sized atoms distort regular metal layers, preventing layers from sliding easily.'] },
  // 3.1
  { id: 'igchem-fc-3-1-1', subtopicId: 'igchem-3-1', front: 'Three golden mole equations?', backBullets: ['n = mass / M_r; n = c × V (dm³); n = gas volume (dm³) / 24.'] },
  { id: 'igchem-fc-3-1-2', subtopicId: 'igchem-3-1', front: 'Value of Avogadro’s constant and molar gas volume at r.t.p.?', backBullets: ['6.02 × 10²³ particles/mol; 24 dm³/mol at r.t.p.'] },
  { id: 'igchem-fc-3-1-3', subtopicId: 'igchem-3-1', front: 'How do you convert cm³ to dm³?', backBullets: ['Divide by 1,000 (e.g. 25 cm³ = 0.025 dm³).'] },
  { id: 'igchem-fc-3-1-4', subtopicId: 'igchem-3-1', front: 'Steps to find an empirical formula?', backBullets: ['Divide mass/% by A_r for each element, then divide all mole values by the smallest value.'] },
  { id: 'igchem-fc-3-1-5', subtopicId: 'igchem-3-1', front: 'Formula for % yield and % purity?', backBullets: ['% yield = (actual ÷ theoretical) × 100%; % purity = (pure mass ÷ impure mass) × 100%.'] },
  // 4.1
  { id: 'igchem-fc-4-1-1', subtopicId: 'igchem-4-1', front: 'What do PANIC and OILRIG stand for?', backBullets: ['Positive Anode, Negative Is Cathode; Oxidation Is Loss, Reduction Is Gain (of electrons).'] },
  { id: 'igchem-fc-4-1-2', subtopicId: 'igchem-4-1', front: 'Cathode rule for aqueous electrolysis?', backBullets: ['Hydrogen forms UNLESS the metal is less reactive than H (Cu, Ag, Au).'] },
  { id: 'igchem-fc-4-1-3', subtopicId: 'igchem-4-1', front: 'Anode rule for aqueous electrolysis?', backBullets: ['Concentrated halide → halogen (Cl₂, Br₂, I₂); otherwise oxygen (4OH⁻ → O₂ + 2H₂O + 4e⁻).'] },
  { id: 'igchem-fc-4-1-4', subtopicId: 'igchem-4-1', front: 'Which electrode holds the object being electroplated?', backBullets: ['The CATHODE (−), with pure plating metal as the anode (+).'] },
  { id: 'igchem-fc-4-1-5', subtopicId: 'igchem-4-1', front: 'Overall equation and main advantage of a hydrogen fuel cell?', backBullets: ['2H₂ + O₂ → 2H₂O; water is the only emission at point of use.'] },
  // 5.1
  { id: 'igchem-fc-5-1-1', subtopicId: 'igchem-5-1', front: 'Sign of ΔH and temperature change for exothermic vs endothermic?', backBullets: ['Exothermic: ΔH < 0, T rises; Endothermic: ΔH > 0, T falls.'] },
  { id: 'igchem-fc-5-1-2', subtopicId: 'igchem-5-1', front: 'Define activation energy E_a.', backBullets: ['Minimum kinetic energy colliding particles must possess to react.'] },
  { id: 'igchem-fc-5-1-3', subtopicId: 'igchem-5-1', front: 'What does BENDO–MEXO mean?', backBullets: ['Bond Breaking is ENDOthermic; Bond Making is EXOthermic.'] },
  { id: 'igchem-fc-5-1-4', subtopicId: 'igchem-5-1', front: 'Formula for enthalpy change ΔH from bond energies?', backBullets: ['ΔH = Σ(bonds broken in reactants) − Σ(bonds formed in products).'] },
  { id: 'igchem-fc-5-1-5', subtopicId: 'igchem-5-1', front: 'Where do products sit relative to reactants on an exothermic pathway diagram?', backBullets: ['Products lie LOWER in energy than reactants.'] },
  // 6.1
  { id: 'igchem-fc-6-1-1', subtopicId: 'igchem-6-1', front: 'How does higher concentration speed up a reaction?', backBullets: ['More particles per unit volume → more frequent successful collisions per second.'] },
  { id: 'igchem-fc-6-1-2', subtopicId: 'igchem-6-1', front: 'Two reasons higher temperature increases reaction rate?', backBullets: ['Particles move faster (more frequent collisions) AND a higher proportion have energy ≥ E_a.'] },
  { id: 'igchem-fc-6-1-3', subtopicId: 'igchem-6-1', front: 'How does a catalyst work?', backBullets: ['Provides an alternative reaction pathway with a lower activation energy without being used up.'] },
  { id: 'igchem-fc-6-1-4', subtopicId: 'igchem-6-1', front: 'Does crushing a solid into powder change the final volume of gas produced?', backBullets: ['No — only the initial gradient is steeper; final volume depends only on moles of limiting reactant.'] },
  { id: 'igchem-fc-6-1-5', subtopicId: 'igchem-6-1', front: 'Three ways to measure reaction rate in the lab?', backBullets: ['Gas syringe volume, digital balance mass loss, or disappearing cross turbidity timer.'] },
  // 6.2
  { id: 'igchem-fc-6-2-1', subtopicId: 'igchem-6-2', front: 'Two defining conditions of dynamic equilibrium?', backBullets: ['Forward rate = reverse rate, and concentrations of reactants & products stay constant (closed system).'] },
  { id: 'igchem-fc-6-2-2', subtopicId: 'igchem-6-2', front: 'Effect of raising temperature on an equilibrium?', backBullets: ['Shifts in the ENDOTHERMIC direction to absorb added heat.'] },
  { id: 'igchem-fc-6-2-3', subtopicId: 'igchem-6-2', front: 'Effect of increasing pressure on a gaseous equilibrium?', backBullets: ['Shifts towards the side with FEWER moles of gas.'] },
  { id: 'igchem-fc-6-2-4', subtopicId: 'igchem-6-2', front: 'Haber process conditions and catalyst?', backBullets: ['N₂ + 3H₂ ⇌ 2NH₃ at 450 °C, 200 atm, iron catalyst.'] },
  { id: 'igchem-fc-6-2-5', subtopicId: 'igchem-6-2', front: 'Contact process conditions and catalyst?', backBullets: ['2SO₂ + O₂ ⇌ 2SO₃ at 450 °C, 2 atm, vanadium(V) oxide (V₂O₅) catalyst.'] },
  // 7.1
  { id: 'igchem-fc-7-1-1', subtopicId: 'igchem-7-1', front: 'Brønsted–Lowry definitions of acid and base?', backBullets: ['Acid = proton (H⁺) donor; Base = proton (H⁺) acceptor.'] },
  { id: 'igchem-fc-7-1-2', subtopicId: 'igchem-7-1', front: 'Strong acid vs weak acid?', backBullets: ['Strong acid completely dissociates in water (HCl); weak acid partially dissociates (CH₃COOH).'] },
  { id: 'igchem-fc-7-1-3', subtopicId: 'igchem-7-1', front: 'Two classic IGCSE amphoteric oxides?', backBullets: ['Aluminium oxide (Al₂O₃) and zinc oxide (ZnO) — react with both acids and alkalis.'] },
  { id: 'igchem-fc-7-1-4', subtopicId: 'igchem-7-1', front: 'How do you make a soluble Na⁺/K⁺/NH₄⁺ salt?', backBullets: ['Titration with indicator to find volume, repeat WITHOUT indicator, then crystallise.'] },
  { id: 'igchem-fc-7-1-5', subtopicId: 'igchem-7-1', front: 'How do you make an insoluble salt like BaSO₄?', backBullets: ['Precipitation: mix two soluble salt solutions, filter, wash with distilled water, dry.'] },
  // 7.2
  { id: 'igchem-fc-7-2-1', subtopicId: 'igchem-7-2', front: 'Flame colours for Li⁺, Na⁺, K⁺, Ca²⁺, Ba²⁺, Cu²⁺?', backBullets: ['Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Ba²⁺ light green, Cu²⁺ blue-green.'] },
  { id: 'igchem-fc-7-2-2', subtopicId: 'igchem-7-2', front: 'Precipitates with NaOH(aq) for Cu²⁺, Fe²⁺, Fe³⁺?', backBullets: ['Cu²⁺ light blue, Fe²⁺ green, Fe³⁺ red-brown.'] },
  { id: 'igchem-fc-7-2-3', subtopicId: 'igchem-7-2', front: 'How do you distinguish Al³⁺, Zn²⁺, and Ca²⁺ white precipitates?', backBullets: ['Ca²⁺ insoluble in excess NaOH; Al³⁺ dissolves in excess NaOH only; Zn²⁺ dissolves in BOTH excess NaOH and NH₃.'] },
  { id: 'igchem-fc-7-2-4', subtopicId: 'igchem-7-2', front: 'Test for Cl⁻, Br⁻, I⁻ halides?', backBullets: ['Acidify with dilute HNO₃ + AgNO₃(aq): Cl⁻ white, Br⁻ cream, I⁻ yellow.'] },
  { id: 'igchem-fc-7-2-5', subtopicId: 'igchem-7-2', front: 'Test for nitrate ions (NO₃⁻)?', backBullets: ['Add NaOH(aq) + aluminium foil and warm → ammonia gas turns damp red litmus blue.'] },
  // 8.1
  { id: 'igchem-fc-8-1-1', subtopicId: 'igchem-8-1', front: 'Reactivity trend down Group I and why?', backBullets: ['Increases down group: more shells, greater distance & shielding → outer electron easier to lose.'] },
  { id: 'igchem-fc-8-1-2', subtopicId: 'igchem-8-1', front: 'Reactivity trend down Group VII and why?', backBullets: ['Decreases down group: more shells & shielding → weaker nuclear pull, harder to gain 1 electron.'] },
  { id: 'igchem-fc-8-1-3', subtopicId: 'igchem-8-1', front: 'Appearance of Cl₂, Br₂, and I₂ at r.t.p.?', backBullets: ['Cl₂ pale yellow-green gas; Br₂ red-brown liquid; I₂ grey-black solid.'] },
  { id: 'igchem-fc-8-1-4', subtopicId: 'igchem-8-1', front: 'Four hallmark properties of transition elements?', backBullets: ['High density/m.p., coloured compounds, variable oxidation states, act as catalysts.'] },
  { id: 'igchem-fc-8-1-5', subtopicId: 'igchem-8-1', front: 'Why are Group VIII noble gases unreactive?', backBullets: ['They already have a full outer electron shell and exist as stable monatomic gases.'] },
  // 8.2
  { id: 'igchem-fc-8-2-1', subtopicId: 'igchem-8-2', front: 'Blast furnace equation reducing hematite (Fe₂O₃)?', backBullets: ['Fe₂O₃ + 3CO → 2Fe + 3CO₂.'] },
  { id: 'igchem-fc-8-2-2', subtopicId: 'igchem-8-2', front: 'Role of limestone (CaCO₃) in the blast furnace?', backBullets: ['Decomposes to CaO, which neutralises acidic SiO₂ impurity to form molten slag (CaSiO₃).'] },
  { id: 'igchem-fc-8-2-3', subtopicId: 'igchem-8-2', front: 'Why is cryolite used in aluminium electrolysis?', backBullets: ['Dissolves Al₂O₃ to lower operating temperature (~950 °C) and save energy.'] },
  { id: 'igchem-fc-8-2-4', subtopicId: 'igchem-8-2', front: 'Why do carbon anodes need replacing in Al extraction?', backBullets: ['Oxygen formed at the anodes reacts with hot carbon to form CO₂ gas.'] },
  { id: 'igchem-fc-8-2-5', subtopicId: 'igchem-8-2', front: 'How does galvanising (zinc) protect scratched steel?', backBullets: ['Zinc is more reactive than iron, so it loses electrons preferentially (sacrificial protection).'] },
  // 9.1
  { id: 'igchem-fc-9-1-1', subtopicId: 'igchem-9-1', front: 'Chemical test distinguishing alkenes from alkanes?', backBullets: ['Bromine water: alkenes turn orange-brown → colourless; alkanes show no change.'] },
  { id: 'igchem-fc-9-1-2', subtopicId: 'igchem-9-1', front: 'General formulae for alkanes and alkenes?', backBullets: ['Alkanes: CₙH₂ₙ₊₂ (saturated); Alkenes: CₙH₂ₙ (unsaturated C=C).'] },
  { id: 'igchem-fc-9-1-3', subtopicId: 'igchem-9-1', front: 'Condition needed for methane + chlorine substitution?', backBullets: ['Ultraviolet (UV) light: CH₄ + Cl₂ → CH₃Cl + HCl.'] },
  { id: 'igchem-fc-9-1-4', subtopicId: 'igchem-9-1', front: 'Conditions and purpose of cracking?', backBullets: ['~600–700 °C + Al₂O₃/SiO₂ catalyst; turns long alkanes into shorter fuels + alkenes.'] },
  { id: 'igchem-fc-9-1-5', subtopicId: 'igchem-9-1', front: 'Order of crude oil fractions from top (coolest) to bottom?', backBullets: ['Refinery gas, gasoline, naphtha, kerosene, diesel, fuel oil, lubricating oil, bitumen.'] },
  // 9.2
  { id: 'igchem-fc-9-2-1', subtopicId: 'igchem-9-2', front: 'Two industrial methods for making ethanol?', backBullets: ['Fermentation of glucose (yeast, 30 °C, anaerobic) OR hydration of ethene (300 °C, 60 atm, H₃PO₄).'] },
  { id: 'igchem-fc-9-2-2', subtopicId: 'igchem-9-2', front: 'Reagent & colour change oxidising ethanol to ethanoic acid?', backBullets: ['Acidified potassium manganate(VII) + heat → turns purple to colourless.'] },
  { id: 'igchem-fc-9-2-3', subtopicId: 'igchem-9-2', front: 'Esterification equation and naming rule?', backBullets: ['Alcohol + Carboxylic acid ⇌ Ester + H₂O (H₂SO₄ catalyst); Alcohol gives –yl, Acid gives –oate.'] },
  { id: 'igchem-fc-9-2-4', subtopicId: 'igchem-9-2', front: 'Linkage in Nylon vs PET polyester?', backBullets: ['Nylon (polyamide): –CONH–; PET (polyester): –COO–. Both eliminate H₂O.'] },
  { id: 'igchem-fc-9-2-5', subtopicId: 'igchem-9-2', front: 'Natural condensation polymer made from amino acids?', backBullets: ['Proteins (natural polyamides with –CONH– peptide links).'] },
  // 10.1
  { id: 'igchem-fc-10-1-1', subtopicId: 'igchem-10-1', front: 'Chemical tests for the presence of water vs purity of water?', backBullets: ['Presence: white CuSO₄ → blue, blue CoCl₂ → pink. Purity: sharp m.p. 0 °C & b.p. 100 °C.'] },
  { id: 'igchem-fc-10-1-2', subtopicId: 'igchem-10-1', front: 'Composition of clean dry air?', backBullets: ['78% N₂, 21% O₂, ~0.9% Ar, 0.04% CO₂.'] },
  { id: 'igchem-fc-10-1-3', subtopicId: 'igchem-10-1', front: 'Catalytic converter balanced equation?', backBullets: ['2CO + 2NO → 2CO₂ + N₂ (Pt/Rh catalyst).'] },
  { id: 'igchem-fc-10-1-4', subtopicId: 'igchem-10-1', front: 'How do CO₂ and CH₄ cause the greenhouse effect?', backBullets: ['Allow short-wave sunlight in, then absorb and re-emit outgoing thermal/infrared radiation from Earth.'] },
  { id: 'igchem-fc-10-1-5', subtopicId: 'igchem-10-1', front: 'Role of activated carbon and chlorine in water treatment?', backBullets: ['Activated carbon removes tastes/odours; chlorine kills harmful microbes/bacteria.'] },
];

export const IGCSE_CHEMISTRY_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'igchem-cs-1', slug: 'topic-1-states-separation', title: '1. States of Matter & Separation Cheat Sheet', topicNumber: 1, topicName: 'States of Matter & Experimental Techniques', summary: 'Kinetic theory, heating curves, diffusion (M_r) & chromatography R_f.', accentColor: '#059669', sections: [{ heading: 'Key Rules & Formulae', points: ['R_f = spot distance ÷ solvent front distance (0–1)', 'Lighter M_r diffuses faster (NH₃ 17 beats HCl 36.5)', 'Pure substance = sharp m.p. and b.p.'] }, { heading: 'Exam Traps', points: ['Draw chromatography baseline in PENCIL above solvent', 'Temperature stays flat during melting/boiling as heat breaks forces'] }] },
  { id: 'igchem-cs-2', slug: 'topic-2-atoms-bonding', title: '2. Atomic Structure & Bonding Cheat Sheet', topicNumber: 2, topicName: 'Atoms, Elements & Bonding', summary: 'Subatomic particles, A_r, ionic, simple/giant covalent & alloys.', accentColor: '#059669', sections: [{ heading: 'Key Rules & Formulae', points: ['A_r = Σ(mass × % abundance) ÷ 100', 'Ionic: conducts molten/aq (free ions); Metals/Graphite: delocalised electrons', 'Alloys: different-sized atoms stop layers sliding'] }, { heading: 'Exam Traps', points: ['Melting simple molecules breaks weak intermolecular forces, NEVER covalent bonds', 'Isotopes react identically due to same outer electrons'] }] },
  { id: 'igchem-cs-3', slug: 'topic-3-stoichiometry', title: '3. Stoichiometry & Moles Cheat Sheet', topicNumber: 3, topicName: 'Stoichiometry & The Mole Concept', summary: 'Moles, 24 dm³ gas volume, titrations, empirical formula & % yield.', accentColor: '#059669', sections: [{ heading: 'Three Mole Formulae', points: ['n = m / M_r', 'n = c × V (with V in dm³ = cm³ ÷ 1000)', 'n = V_gas (dm³) / 24 at r.t.p.', '% yield = (actual ÷ theoretical) × 100%'] }, { heading: 'Exam Traps', points: ['Always divide cm³ by 1,000 before using n = cV'] }] },
  { id: 'igchem-cs-4', slug: 'topic-4-electrochemistry', title: '4. Electrochemistry Cheat Sheet', topicNumber: 4, topicName: 'Electrochemistry', summary: 'PANIC, OILRIG, aqueous discharge rules, electroplating & fuel cells.', accentColor: '#059669', sections: [{ heading: 'Discharge Rules', points: ['Cathode (−, reduction): H₂ unless metal < H (Cu, Ag, Au)', 'Anode (+, oxidation): conc. halide → halogen, else O₂ (4OH⁻ → O₂ + 2H₂O + 4e⁻)', 'Fuel cell: 2H₂ + O₂ → 2H₂O'] }, { heading: 'Exam Traps', points: ['Object to be plated ALWAYS goes at the cathode (−)'] }] },
  { id: 'igchem-cs-5', slug: 'topic-5-energetics', title: '5. Chemical Energetics Cheat Sheet', topicNumber: 5, topicName: 'Chemical Energetics', summary: 'Exothermic/endothermic pathways, E_a, BENDO–MEXO & ΔH calculations.', accentColor: '#059669', sections: [{ heading: 'Core Formulae', points: ['ΔH = Σ(Bonds Broken) − Σ(Bonds Formed)', 'Exothermic: ΔH < 0, T rises, products lower', 'Endothermic: ΔH > 0, T falls, products higher'] }, { heading: 'Exam Traps', points: ['Never forget stoichiometric multipliers when counting bonds formed'] }] },
  { id: 'igchem-cs-6', slug: 'topic-6-rates-equilibria', title: '6. Rates & Equilibria Cheat Sheet', topicNumber: 6, topicName: 'Chemical Reactions, Rates & Equilibria', summary: 'Collision theory, catalysts, Le Chatelier, Haber & Contact processes.', accentColor: '#059669', sections: [{ heading: 'Industrial Conditions', points: ['Haber: N₂ + 3H₂ ⇌ 2NH₃ | 450 °C, 200 atm, Fe catalyst', 'Contact: 2SO₂ + O₂ ⇌ 2SO₃ | 450 °C, 2 atm, V₂O₅ catalyst', 'Equilibrium: equal forward/reverse rates + constant concentrations'] }, { heading: 'Exam Traps', points: ['Always say "more FREQUENT collisions", not just "more collisions"', 'Catalysts lower E_a and NEVER change equilibrium yield'] }] },
  { id: 'igchem-cs-7', slug: 'topic-7-acids-analysis', title: '7. Acids, Salts & Analysis Cheat Sheet', topicNumber: 7, topicName: 'Acids, Bases, Salts & Chemical Analysis', summary: 'Strong/weak acids, amphoteric oxides, salt prep & all ion/gas tests.', accentColor: '#059669', sections: [{ heading: 'Analysis Summary', points: ['Halides (HNO₃ + AgNO₃): Cl⁻ white, Br⁻ cream, I⁻ yellow', 'Sulfate (HNO₃ + Ba(NO₃)₂): white BaSO₄', 'Amphoteric oxides: Al₂O₃, ZnO', 'Cations + NaOH: Cu²⁺ blue, Fe²⁺ green, Fe³⁺ red-brown'] }, { heading: 'Exam Traps', points: ['Never acidify with HCl before AgNO₃ — use dilute HNO₃'] }] },
  { id: 'igchem-cs-8', slug: 'topic-8-periodic-metals', title: '8. Periodic Table & Metals Cheat Sheet', topicNumber: 8, topicName: 'The Periodic Table & Metals', summary: 'Groups I, VII, VIII, transition metals, blast furnace, Al electrolysis & rusting.', accentColor: '#059669', sections: [{ heading: 'Key Equations', points: ['Blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂; CaO + SiO₂ → CaSiO₃', 'Al electrolysis: Al³⁺ + 3e⁻ → Al; 2O²⁻ → O₂ + 4e⁻ (cryolite ~950 °C)', 'Galvanising: Zn oxidises sacrificially instead of Fe'] }, { heading: 'Exam Traps', points: ['Group I reactivity rises going down; Group VII falls going down'] }] },
  { id: 'igchem-cs-9', slug: 'topic-9-organic', title: '9. Organic Chemistry Cheat Sheet', topicNumber: 9, topicName: 'Organic Chemistry', summary: 'Crude oil, alkanes/alkenes, cracking, ethanol, esters & addition/condensation polymers.', accentColor: '#059669', sections: [{ heading: 'Core Reactions', points: ['Alkene + Br₂(aq) → orange to colourless', 'Ethene + H₂O (300 °C, 60 atm, H₃PO₄) → ethanol', 'Alcohol + Acid ⇌ Ester + H₂O (–yl –oate)', 'Nylon (–CONH–) & PET (–COO–) eliminate H₂O'] }, { heading: 'Exam Traps', points: ['Say bromine water turns COLOURLESS (never "clear")'] }] },
  { id: 'igchem-cs-10', slug: 'topic-10-environment', title: '10. Chemistry of the Environment Cheat Sheet', topicNumber: 10, topicName: 'Chemistry of the Environment', summary: 'Water tests/treatment, air composition, catalytic converters & climate change.', accentColor: '#059669', sections: [{ heading: 'Core Facts', points: ['Air: 78% N₂, 21% O₂, 0.9% Ar, 0.04% CO₂', 'Catalytic converter: 2CO + 2NO → 2CO₂ + N₂', 'Water presence: white CuSO₄ → blue; Purity: sharp 100 °C'] }, { heading: 'Exam Traps', points: ['Greenhouse gases absorb outgoing INFRARED radiation emitted by Earth'] }] },
];

export const IGCSE_CHEMISTRY_EXAM_PRACTICE: ExamQuestionItem[] = [
  { id: 'igchem-ex-1-1', subtopicId: 'igchem-1-1', number: 1, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Cotton wool soaked in concentrated aqueous ammonia (M_r = 17) and concentrated hydrochloric acid (M_r = 36.5) are placed at opposite ends of a sealed horizontal glass tube.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain where the white ring of ammonium chloride (NH₄Cl) forms inside the tube.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Closer to the HCl end, because ammonia molecules have a smaller relative molecular mass (17 vs 36.5) and therefore diffuse faster.', markPoints: [{ id: 'mp1', markDescription: 'Closer to HCl end', requiredKeywordGroups: [['closer', 'nearer'], ['hcl', 'hydrochloric']] }, { id: 'mp2', markDescription: 'NH₃ has lower M_r so diffuses faster', requiredKeywordGroups: [['lighter', 'smaller', 'lower'], ['faster', 'quicker']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Predict how repeating the experiment at a higher temperature would affect the time taken for the ring to appear.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'The ring forms in less time (faster), because gas particles have greater kinetic energy and move/diffuse faster.', markPoints: [{ id: 'mp1', markDescription: 'Faster / less time', requiredKeywordGroups: [['faster', 'less time', 'sooner', 'quicker']] }, { id: 'mp2', markDescription: 'Higher kinetic energy', requiredKeywordGroups: [['kinetic energy', 'move faster']] }] } },
  ] },
  { id: 'igchem-ex-1-2', subtopicId: 'igchem-1-2', number: 2, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] A student uses paper chromatography to analyse a colourless mixture of amino acids. Spot A travels 4.5 cm and the solvent front travels 7.5 cm.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Calculate the R_f value of Spot A.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'R_f = 4.5 / 7.5 = 0.60.', markPoints: [{ id: 'mp1', markDescription: '4.5 ÷ 7.5', requiredKeywordGroups: [['4.5'], ['7.5']] }, { id: 'mp2', markDescription: '0.60', numericMatch: { value: 0.6, tolerance: 0.01 } }] } },
    { id: 'p2', label: '(b)', prompt: 'State how the student makes the colourless amino acid spots visible and how they would check if a solid sample is pure.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Spray with a locating agent to reveal the spots; check purity by measuring melting point (a pure solid melts at a single sharp fixed temperature).', markPoints: [{ id: 'mp1', markDescription: 'Use a locating agent', requiredKeywordGroups: [['locating agent', 'ninhydrin']] }, { id: 'mp2', markDescription: 'Sharp fixed melting point', requiredKeywordGroups: [['sharp', 'fixed', 'single'], ['melting']] }] } },
  ] },
  { id: 'igchem-ex-2-1', subtopicId: 'igchem-2-1', number: 3, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Naturally occurring boron consists of 20% ¹⁰B and 80% ¹¹B (Z = 5).', parts: [
    { id: 'p1', label: '(a)', prompt: 'Calculate the relative atomic mass (A_r) of boron.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'A_r = ((10 × 20) + (11 × 80)) / 100 = (200 + 880) / 100 = 10.8.', markPoints: [{ id: 'mp1', markDescription: 'Sets up weighted sum', requiredKeywordGroups: [['200', '880', '1080']] }, { id: 'mp2', markDescription: '10.8', numericMatch: { value: 10.8, tolerance: 0.02 } }] } },
    { id: 'p2', label: '(b)', prompt: 'State the number of neutrons in ¹¹B and explain why ¹⁰B and ¹¹B have identical chemical properties.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: '¹¹B has 11 − 5 = 6 neutrons. Both isotopes have the same number of outer electrons (same electronic configuration 2,3), so they react identically.', markPoints: [{ id: 'mp1', markDescription: '6 neutrons', numericMatch: { value: 6, tolerance: 0.01 } }, { id: 'mp2', markDescription: 'Same outer electrons / electronic configuration', requiredKeywordGroups: [['same'], ['electron']] }] } },
  ] },
  { id: 'igchem-ex-2-2', subtopicId: 'igchem-2-2', number: 4, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Magnesium oxide (MgO) melts at 2,852 °C whereas carbon dioxide (CO₂) sublimes at −78 °C.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain, in terms of structure and bonding, why MgO has a much higher melting point than CO₂.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'MgO has a giant ionic lattice with strong electrostatic attractions between Mg²⁺ and O²⁻ ions requiring lots of energy to overcome. CO₂ is simple molecular with weak intermolecular forces between molecules needing very little energy to overcome.', markPoints: [{ id: 'mp1', markDescription: 'MgO giant ionic lattice + strong electrostatic forces', requiredKeywordGroups: [['giant ionic', 'ionic lattice', 'electrostatic']] }, { id: 'mp2', markDescription: 'CO₂ simple molecular + weak intermolecular forces', requiredKeywordGroups: [['weak'], ['intermolecular']] }, { id: 'mp3', markDescription: 'Compares energy needed to overcome forces', requiredKeywordGroups: [['energy'], ['more', 'little', 'less', 'lots']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain why molten MgO conducts electricity while solid MgO does not.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'In solid MgO, ions are held in fixed positions and cannot move; when molten, the ions are free to move and carry electric charge.', markPoints: [{ id: 'mp1', markDescription: 'Solid ions fixed', requiredKeywordGroups: [['fixed', 'cannot move']] }, { id: 'mp2', markDescription: 'Molten ions free to move', requiredKeywordGroups: [['ions'], ['free', 'move']] }] } },
  ] },
  { id: 'igchem-ex-3-1', subtopicId: 'igchem-3-1', number: 5, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] In a titration, 25.0 cm³ of aqueous NaOH is neutralised exactly by 20.0 cm³ of 0.15 mol/dm³ H₂SO₄: 2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Calculate the number of moles of H₂SO₄ used and hence the moles of NaOH neutralised.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'n(H₂SO₄) = 0.15 × (20/1000) = 0.0030 mol; 2:1 ratio gives n(NaOH) = 0.0060 mol.', markPoints: [{ id: 'mp1', markDescription: 'n(H₂SO₄) = 0.003 mol', numericMatch: { value: 0.003, tolerance: 0.0001 } }, { id: 'mp2', markDescription: 'n(NaOH) = 0.006 mol', numericMatch: { value: 0.006, tolerance: 0.0001 } }] } },
    { id: 'p2', label: '(b)', prompt: 'Calculate the concentration of the NaOH solution in mol/dm³.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'c(NaOH) = 0.0060 ÷ (25.0 / 1000) = 0.24 mol/dm³.', markPoints: [{ id: 'mp1', markDescription: 'Divides by 0.025 dm³', requiredKeywordGroups: [['0.025', '25']] }, { id: 'mp2', markDescription: '0.24 mol/dm³', numericMatch: { value: 0.24, tolerance: 0.005 } }] } },
  ] },
  { id: 'igchem-ex-4-1', subtopicId: 'igchem-4-1', number: 6, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Concentrated aqueous sodium chloride (brine) is electrolysed using inert graphite electrodes.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Write the half-equations at the cathode (−) and anode (+).', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Cathode: 2H⁺ + 2e⁻ → H₂; Anode: 2Cl⁻ → Cl₂ + 2e⁻.', markPoints: [{ id: 'mp1', markDescription: 'Cathode 2H⁺ + 2e⁻ → H₂', requiredKeywordGroups: [['h+', 'h⁺'], ['h2', 'h₂']] }, { id: 'mp2', markDescription: 'Anode 2Cl⁻ → Cl₂ + 2e⁻', requiredKeywordGroups: [['cl-', 'cl⁻'], ['cl2', 'cl₂']] }] } },
    { id: 'p2', label: '(b)', prompt: 'State and explain what happens to the pH of the remaining solution.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'The pH increases (becomes alkaline) because Na⁺ and OH⁻ ions remain in solution, forming aqueous sodium hydroxide (NaOH).', markPoints: [{ id: 'mp1', markDescription: 'pH increases / becomes alkaline', requiredKeywordGroups: [['alkaline', 'increases', 'higher', 'basic']] }, { id: 'mp2', markDescription: 'NaOH / OH⁻ ions remain', requiredKeywordGroups: [['naoh', 'sodium hydroxide', 'oh-', 'oh⁻']] }] } },
  ] },
  { id: 'igchem-ex-5-1', subtopicId: 'igchem-5-1', number: 7, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Hydrogen burns in oxygen: 2H₂ + O₂ → 2H₂O. Bond energies (kJ/mol): H–H = 436, O=O = 498, O–H = 464.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Calculate the total energy absorbed breaking reactant bonds and total energy released making product bonds.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Broken: 2(436) + 498 = 1,370 kJ/mol. Formed: 4(464) = 1,856 kJ/mol.', markPoints: [{ id: 'mp1', markDescription: 'Broken = 1370 kJ/mol', numericMatch: { value: 1370, tolerance: 2 } }, { id: 'mp2', markDescription: 'Formed = 1856 kJ/mol', numericMatch: { value: 1856, tolerance: 2 } }] } },
    { id: 'p2', label: '(b)', prompt: 'Calculate ΔH and explain why the reaction is exothermic.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'ΔH = 1370 − 1856 = −486 kJ/mol. It is exothermic because more energy is released forming product bonds than is absorbed breaking reactant bonds.', markPoints: [{ id: 'mp1', markDescription: 'ΔH = −486 kJ/mol', numericMatch: { value: -486, tolerance: 2 } }, { id: 'mp2', markDescription: 'More energy released making bonds than absorbed breaking', requiredKeywordGroups: [['more energy', 'greater'], ['forming', 'making'], ['breaking']] }] } },
  ] },
  { id: 'igchem-ex-6-1', subtopicId: 'igchem-6-1', number: 8, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Excess zinc granules react with 50 cm³ of 1.0 mol/dm³ hydrochloric acid at 20 °C.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain, using collision theory, how doubling the HCl concentration to 2.0 mol/dm³ affects the initial reaction rate.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'There are twice as many H⁺ ions per unit volume, causing more frequent successful collisions per second and a faster initial rate.', markPoints: [{ id: 'mp1', markDescription: 'More particles per unit volume', requiredKeywordGroups: [['per unit volume', 'crowded', 'more particles', 'twice']] }, { id: 'mp2', markDescription: 'More frequent collisions', requiredKeywordGroups: [['frequent', 'per second'], ['collision']] }] } },
    { id: 'p2', label: '(b)', prompt: 'State how doubling the HCl concentration (with zinc still in excess) affects the final volume of H₂ gas collected.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'The final volume of H₂ gas doubles because HCl is the limiting reactant and there are twice as many moles of HCl.', markPoints: [{ id: 'mp1', markDescription: 'Volume doubles', requiredKeywordGroups: [['double', 'twice', '2x']] }, { id: 'mp2', markDescription: 'HCl is limiting reactant / twice as many moles', requiredKeywordGroups: [['limiting', 'moles']] }] } },
  ] },
  { id: 'igchem-ex-6-2', subtopicId: 'igchem-6-2', number: 9, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Ammonia is manufactured via N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (forward reaction is exothermic) at 450 °C, 200 atm, with an iron catalyst.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain why 450 °C is used as a compromise temperature instead of 100 °C.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Although a lower temperature (100 °C) shifts equilibrium right to give a higher NH₃ yield, the reaction rate would be far too slow to be economical.', markPoints: [{ id: 'mp1', markDescription: 'Lower T gives higher yield (exothermic)', requiredKeywordGroups: [['higher yield', 'more ammonia', 'exothermic']] }, { id: 'mp2', markDescription: 'Rate too slow at low T', requiredKeywordGroups: [['rate'], ['slow']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain the effect of increasing pressure on the yield of ammonia.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Yield increases because equilibrium shifts to the right, where there are fewer moles of gas (4 moles on the left → 2 moles on the right).', markPoints: [{ id: 'mp1', markDescription: 'Yield increases / shifts right', requiredKeywordGroups: [['increase', 'right', 'more']] }, { id: 'mp2', markDescription: 'Fewer moles of gas (4 → 2)', requiredKeywordGroups: [['fewer', 'less'], ['moles', 'molecules'], ['gas']] }] } },
  ] },
  { id: 'igchem-ex-7-1', subtopicId: 'igchem-7-1', number: 10, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] A student wants to prepare pure dry crystals of copper(II) sulfate from insoluble copper(II) oxide (CuO) and dilute sulfuric acid.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Outline the main steps to prepare pure dry copper(II) sulfate crystals.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Add excess CuO to warm dilute H₂SO₄ until no more dissolves; filter off the excess solid CuO; gently evaporate the blue filtrate to crystallisation point, cool, filter crystals, and pat dry.', markPoints: [{ id: 'mp1', markDescription: 'Add excess CuO to warm acid', requiredKeywordGroups: [['excess'], ['cuo', 'oxide']] }, { id: 'mp2', markDescription: 'Filter off excess solid', requiredKeywordGroups: [['filter']] }, { id: 'mp3', markDescription: 'Evaporate partially, cool to crystallise & dry', requiredKeywordGroups: [['crystallis', 'evaporate', 'cool'], ['dry']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain why excess CuO is added.', kind: 'short-answer', marks: 1, rubric: { maxMarks: 1, modelAnswer: 'To ensure all of the sulfuric acid has completely reacted (neutralised) so the filtrate contains no unreacted acid.', markPoints: [{ id: 'mp1', markDescription: 'All acid reacts / neutralised', requiredKeywordGroups: [['all'], ['acid'], ['react', 'used', 'neutralis']] }] } },
  ] },
  { id: 'igchem-ex-7-2', subtopicId: 'igchem-7-2', number: 11, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Salt X gives a green precipitate with NaOH(aq), and when acidified with dilute HNO₃ + AgNO₃(aq) it gives a cream precipitate.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Identify the cation, the anion, and the full chemical name of Salt X.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Cation = Fe²⁺ (iron(II)), Anion = Br⁻ (bromide), so Salt X is iron(II) bromide (FeBr₂).', markPoints: [{ id: 'mp1', markDescription: 'Iron(II) / Fe²⁺', requiredKeywordGroups: [['fe2+', 'fe²⁺', 'iron(ii)', 'iron (ii)']] }, { id: 'mp2', markDescription: 'Bromide / Br⁻', requiredKeywordGroups: [['bromide', 'br-', 'br⁻']] }, { id: 'mp3', markDescription: 'Iron(II) bromide', requiredKeywordGroups: [['iron(ii) bromide', 'iron (ii) bromide', 'febr2', 'febr₂']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain why dilute nitric acid (NOT hydrochloric acid) is added before AgNO₃(aq).', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'HNO₃ removes interfering carbonate ions; HCl must not be used because it introduces Cl⁻ ions that would form a false white AgCl precipitate.', markPoints: [{ id: 'mp1', markDescription: 'Removes carbonate ions', requiredKeywordGroups: [['carbonate', 'co3']] }, { id: 'mp2', markDescription: 'HCl adds Cl⁻ causing false white ppt', requiredKeywordGroups: [['hcl', 'cl-', 'chloride'], ['false', 'white', 'agcl', 'interfere']] }] } },
  ] },
  { id: 'igchem-ex-8-1', subtopicId: 'igchem-8-1', number: 12, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Chlorine water is added to aqueous potassium iodide (KI).', parts: [
    { id: 'p1', label: '(a)', prompt: 'Write the balanced ionic equation and describe the colour change observed.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Cl₂ + 2I⁻ → 2Cl⁻ + I₂; the colourless solution turns brown (yellow-brown) as iodine forms.', markPoints: [{ id: 'mp1', markDescription: 'Cl₂ + 2I⁻ → 2Cl⁻ + I₂', requiredKeywordGroups: [['cl2', 'cl₂'], ['2i', 'i-'], ['i2', 'i₂']] }, { id: 'mp2', markDescription: 'Colourless to brown', requiredKeywordGroups: [['brown', 'yellow-brown']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain in terms of electron transfer why chlorine is more reactive than iodine.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Chlorine has fewer electron shells and less shielding, so its outer shell is closer to the nucleus; stronger electrostatic attraction makes it easier to gain an electron.', markPoints: [{ id: 'mp1', markDescription: 'Fewer shells / closer to nucleus / less shielding', requiredKeywordGroups: [['fewer shells', 'smaller', 'closer', 'less shielding']] }, { id: 'mp2', markDescription: 'Easier to gain an electron', requiredKeywordGroups: [['easier', 'stronger'], ['gain', 'attract'], ['electron']] }] } },
  ] },
  { id: 'igchem-ex-8-2', subtopicId: 'igchem-8-2', number: 13, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Aluminium is extracted by electrolysis of molten aluminium oxide dissolved in cryolite using carbon electrodes.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Write the cathode and anode half-equations for aluminium extraction.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Cathode: Al³⁺ + 3e⁻ → Al; Anode: 2O²⁻ → O₂ + 4e⁻.', markPoints: [{ id: 'mp1', markDescription: 'Al³⁺ + 3e⁻ → Al', requiredKeywordGroups: [['al3+', 'al³⁺'], ['3e']] }, { id: 'mp2', markDescription: '2O²⁻ → O₂ + 4e⁻', requiredKeywordGroups: [['2o', 'o2-', 'o²⁻'], ['o2', 'o₂'], ['4e']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain TWO reasons why aluminium extraction is much more expensive than iron extraction in a blast furnace.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: '1) Electrolysis uses huge amounts of expensive electrical energy; 2) the carbon anodes burn away in oxygen (forming CO₂) and must be replaced regularly.', markPoints: [{ id: 'mp1', markDescription: 'High electricity/energy cost', requiredKeywordGroups: [['electricity', 'electrical', 'energy']] }, { id: 'mp2', markDescription: 'Carbon anodes burn to CO₂ and must be replaced', requiredKeywordGroups: [['anode', 'carbon'], ['replace', 'burn', 'co2', 'co₂']] }] } },
  ] },
  { id: 'igchem-ex-9-1', subtopicId: 'igchem-9-1', number: 14, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Propene (C₃H₆) is an unsaturated alkene obtained by cracking long-chain alkanes.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Describe a chemical test to distinguish propene from propane, stating observations for BOTH.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Shake each gas with orange-brown aqueous bromine water: propene turns bromine water colourless rapidly, while propane gives no colour change (stays orange-brown).', markPoints: [{ id: 'mp1', markDescription: 'Adds bromine water; propene turns colourless', requiredKeywordGroups: [['bromine'], ['colourless', 'colorless', 'decolourise']] }, { id: 'mp2', markDescription: 'Propane stays orange/no change', requiredKeywordGroups: [['propane'], ['no change', 'stays orange', 'remains', 'no reaction']] }] } },
    { id: 'p2', label: '(b)', prompt: 'State the conditions needed to convert ethene into ethanol by catalytic hydration.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Steam (H₂O(g)) at 300 °C, 60 atm pressure, and a phosphoric(V) acid (H₃PO₄) catalyst.', markPoints: [{ id: 'mp1', markDescription: '300 °C and 60 atm / high pressure & steam', requiredKeywordGroups: [['300', 'steam', '60 atm']] }, { id: 'mp2', markDescription: 'Phosphoric acid catalyst', requiredKeywordGroups: [['phosphoric', 'h3po4', 'h₃po₄']] }] } },
  ] },
  { id: 'igchem-ex-9-2', subtopicId: 'igchem-9-2', number: 15, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Poly(ethene) is an addition polymer whereas nylon and PET are synthetic condensation polymers.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain TWO structural/mechanistic differences between addition polymerisation and condensation polymerisation.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Addition polymerisation opens C=C double bonds to form only ONE product (the polymer), whereas condensation polymerisation links monomers with two functional groups and eliminates a small molecule (water).', markPoints: [{ id: 'mp1', markDescription: 'Addition uses C=C / forms polymer only', requiredKeywordGroups: [['c=c', 'double bond', 'one product', 'no by-product']] }, { id: 'mp2', markDescription: 'Condensation eliminates small molecule (H₂O)', requiredKeywordGroups: [['water', 'h2o', 'h₂o', 'small molecule'], ['eliminat', 'lost', 'produced', 'by-product']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Name the ester formed when methanol reacts with butanoic acid, and state the catalyst required.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Methyl butanoate, using concentrated sulfuric acid (H₂SO₄) catalyst.', markPoints: [{ id: 'mp1', markDescription: 'Methyl butanoate', requiredKeywordGroups: [['methyl butanoate']] }, { id: 'mp2', markDescription: 'Concentrated sulfuric acid', requiredKeywordGroups: [['sulfuric', 'sulphuric', 'h2so4', 'h₂so₄', 'acid catalyst']] }] } },
  ] },
  { id: 'igchem-ex-10-1', subtopicId: 'igchem-10-1', number: 16, stimulus: '[Cambridge IGCSE 0620 Paper 4 Style] Burning fossil fuels in power stations and petrol cars releases CO₂, CO, SO₂, and NOₓ.', parts: [
    { id: 'p1', label: '(a)', prompt: 'Explain how oxides of nitrogen (NOₓ) form inside car engines and how a catalytic converter removes NO and CO.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'High engine temperatures make atmospheric N₂ and O₂ react; a catalytic converter converts CO and NO into harmless CO₂ and N₂ (2CO + 2NO → 2CO₂ + N₂).', markPoints: [{ id: 'mp1', markDescription: 'High temperature causes N₂ + O₂ to react', requiredKeywordGroups: [['high temp', 'heat'], ['nitrogen', 'n2', 'n₂'], ['oxygen', 'o2', 'o₂']] }, { id: 'mp2', markDescription: 'Catalytic converter forms CO₂ and N₂', requiredKeywordGroups: [['co2', 'co₂'], ['n2', 'n₂']] }] } },
    { id: 'p2', label: '(b)', prompt: 'Explain how increased atmospheric CO₂ causes global warming.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'CO₂ lets short-wave solar radiation reach Earth, then absorbs and re-emits outgoing longer-wave infrared (thermal) radiation back towards Earth’s surface, trapping heat.', markPoints: [{ id: 'mp1', markDescription: 'Absorbs outgoing thermal/infrared radiation', requiredKeywordGroups: [['absorb'], ['infrared', 'thermal']] }, { id: 'mp2', markDescription: 'Re-emits heat back towards Earth / traps heat', requiredKeywordGroups: [['re-emit', 'trap', 'warm']] }] } },
  ] },
];

export const IGCSE_CHEMISTRY_PAST_PAPERS: PastPaperDoc[] = [
  { id: 'igchem-pp-2024-p2', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Chemistry (0620) Paper 2 (Extended MCQ) — May/June 2024', tier: 'Extended', series: 'May/June', paperCode: '0620/22', durationMinutes: 45, totalMarks: 40, sampleQuestions: [{ number: 'Q1', question: 'Predict where the NH₄Cl white ring forms between NH₃ and HCl.', marks: 1, markScheme: ['Closer to HCl end because NH₃ has lower M_r (17 vs 36.5).'] }, { number: 'Q2', question: 'Identify the products at both electrodes during electrolysis of concentrated brine.', marks: 1, markScheme: ['Cathode: H₂; Anode: Cl₂; Solution becomes NaOH(aq).'] }] },
  { id: 'igchem-pp-2024-p4', specEra: 'new-9-1', year: '2024', title: 'Cambridge IGCSE Chemistry (0620) Paper 4 (Extended Theory) — May/June 2024', tier: 'Extended', series: 'May/June', paperCode: '0620/42', durationMinutes: 75, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Calculate ΔH using bond energies for 2H₂ + O₂ → 2H₂O and sketch the pathway diagram.', marks: 6, markScheme: ['Broken = 1370, Formed = 1856, ΔH = −486 kJ/mol (exothermic).'] }, { number: 'Q2', question: 'Explain Haber process compromise conditions (450 °C, 200 atm, Fe catalyst).', marks: 6, markScheme: ['Balances forward exothermic yield against economical rate; high pressure favours 4→2 gas moles.'] }] },
  { id: 'igchem-pp-2023n-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Chemistry (0620) Paper 2 (Extended MCQ) — Oct/Nov 2023', tier: 'Extended', series: 'Oct/Nov', paperCode: '0620/22', durationMinutes: 45, totalMarks: 40, sampleQuestions: [{ number: 'Q1', question: 'Calculate A_r of boron from 20% ¹⁰B and 80% ¹¹B.', marks: 1, markScheme: ['(200 + 880)/100 = 10.8.'] }, { number: 'Q2', question: 'Identify the pair of amphoteric oxides from four options.', marks: 1, markScheme: ['Al₂O₃ and ZnO react with both acids and alkalis.'] }] },
  { id: 'igchem-pp-2023n-p4', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Chemistry (0620) Paper 4 (Extended Theory) — Oct/Nov 2023', tier: 'Extended', series: 'Oct/Nov', paperCode: '0620/42', durationMinutes: 75, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Solve a 2NaOH + H₂SO₄ titration calculation and outline pure salt preparation.', marks: 6, markScheme: ['Convert cm³ to dm³, apply 2:1 ratio, repeat without indicator, crystallise.'] }, { number: 'Q2', question: 'Explain aluminium electrolysis (cryolite, half-equations, anode replacement).', marks: 6, markScheme: ['Cryolite lowers m.p.; Al³⁺ + 3e⁻ → Al; 2O²⁻ → O₂ + 4e⁻; C + O₂ → CO₂.'] }] },
  { id: 'igchem-pp-2023-p2', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Chemistry (0620) Paper 2 (Extended MCQ) — May/June 2023', tier: 'Extended', series: 'May/June', paperCode: '0620/22', durationMinutes: 45, totalMarks: 40, sampleQuestions: [{ number: 'Q1', question: 'Distinguish graphite, diamond, and SiO₂ by structure and conductivity.', marks: 1, markScheme: ['Graphite has 3 bonds/C and 1 delocalised electron; diamond & SiO₂ have 4 bonds and insulate.'] }, { number: 'Q2', question: 'Name the ester formed from ethanol and propanoic acid.', marks: 1, markScheme: ['Ethyl propanoate.'] }] },
  { id: 'igchem-pp-2023-p4', specEra: 'new-9-1', year: '2023', title: 'Cambridge IGCSE Chemistry (0620) Paper 4 (Extended Theory) — May/June 2023', tier: 'Extended', series: 'May/June', paperCode: '0620/42', durationMinutes: 75, totalMarks: 80, sampleQuestions: [{ number: 'Q1', question: 'Identify Salt X from cation/anion precipitate tests and justify using HNO₃.', marks: 6, markScheme: ['Fe²⁺ green ppt, Br⁻ cream ppt → FeBr₂; HNO₃ avoids Cl⁻ interference.'] }, { number: 'Q2', question: 'Contrast addition vs condensation polymerisation and write the catalytic converter equation.', marks: 6, markScheme: ['Addition opens C=C only; condensation eliminates H₂O; 2CO + 2NO → 2CO₂ + N₂.'] }] },
];

export const IGCSE_CHEMISTRY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'igchem-kt-1', term: 'Diffusion', definition: 'Net movement of particles from higher to lower concentration due to random motion.', topicNumber: 1, subtopicId: 'igchem-1-1', subtopicCode: '1.1' },
  { id: 'igchem-kt-2', term: 'R_f Value', definition: 'Distance moved by a spot divided by distance moved by the solvent front in chromatography.', topicNumber: 1, subtopicId: 'igchem-1-2', subtopicCode: '1.2' },
  { id: 'igchem-kt-3', term: 'Isotope', definition: 'Atoms of the same element with equal proton number but different numbers of neutrons.', topicNumber: 2, subtopicId: 'igchem-2-1', subtopicCode: '2.1' },
  { id: 'igchem-kt-4', term: 'Relative Atomic Mass (A_r)', definition: 'Weighted average mass of naturally occurring isotopes on the ¹²C = 12 scale.', topicNumber: 2, subtopicId: 'igchem-2-1', subtopicCode: '2.1' },
  { id: 'igchem-kt-5', term: 'Delocalised Electrons', definition: 'Outer electrons free to move through graphite or a metal lattice and carry charge.', topicNumber: 2, subtopicId: 'igchem-2-2', subtopicCode: '2.2' },
  { id: 'igchem-kt-6', term: 'Alloy', definition: 'Mixture of a metal with other elements whose different atom sizes stop layers sliding.', topicNumber: 2, subtopicId: 'igchem-2-2', subtopicCode: '2.2' },
  { id: 'igchem-kt-7', term: 'Empirical Formula', definition: 'Simplest whole-number ratio of atoms of each element in a compound.', topicNumber: 3, subtopicId: 'igchem-3-1', subtopicCode: '3.1' },
  { id: 'igchem-kt-8', term: 'Molar Gas Volume', definition: '24 dm³ occupied by 1 mole of any gas at room temperature and pressure.', topicNumber: 3, subtopicId: 'igchem-3-1', subtopicCode: '3.1' },
  { id: 'igchem-kt-9', term: 'Electrolyte', definition: 'Molten or aqueous ionic compound broken down by passing a direct electric current.', topicNumber: 4, subtopicId: 'igchem-4-1', subtopicCode: '4.1' },
  { id: 'igchem-kt-10', term: 'Activation Energy (E_a)', definition: 'Minimum kinetic energy colliding particles must possess for a reaction to occur.', topicNumber: 5, subtopicId: 'igchem-5-1', subtopicCode: '5.1' },
  { id: 'igchem-kt-11', term: 'Catalyst', definition: 'Substance speeding up a reaction without being consumed by providing an alternative pathway of lower E_a.', topicNumber: 6, subtopicId: 'igchem-6-1', subtopicCode: '6.1' },
  { id: 'igchem-kt-12', term: 'Dynamic Equilibrium', definition: 'Closed-system state where forward and reverse rates are equal and concentrations remain constant.', topicNumber: 6, subtopicId: 'igchem-6-2', subtopicCode: '6.2' },
  { id: 'igchem-kt-13', term: 'Amphoteric Oxide', definition: 'Oxide (Al₂O₃, ZnO) that reacts with both acids and alkalis to form salt and water.', topicNumber: 7, subtopicId: 'igchem-7-1', subtopicCode: '7.1' },
  { id: 'igchem-kt-14', term: 'Precipitation', definition: 'Formation of an insoluble solid salt on mixing two aqueous soluble salt solutions.', topicNumber: 7, subtopicId: 'igchem-7-1', subtopicCode: '7.1' },
  { id: 'igchem-kt-15', term: 'Transition Elements', definition: 'Dense, high-m.p. metals forming coloured compounds with variable oxidation states and catalytic activity.', topicNumber: 8, subtopicId: 'igchem-8-1', subtopicCode: '8.1' },
  { id: 'igchem-kt-16', term: 'Sacrificial Protection', definition: 'Protecting iron from rusting by attaching a more reactive metal (zinc/magnesium) that oxidises instead.', topicNumber: 8, subtopicId: 'igchem-8-2', subtopicCode: '8.2' },
  { id: 'igchem-kt-17', term: 'Homologous Series', definition: 'Organic family sharing a general formula and functional group, differing by CH₂ per step.', topicNumber: 9, subtopicId: 'igchem-9-1', subtopicCode: '9.1' },
  { id: 'igchem-kt-18', term: 'Cracking', definition: 'Thermal/catalytic breakdown of long alkanes into shorter fuels and unsaturated alkenes.', topicNumber: 9, subtopicId: 'igchem-9-1', subtopicCode: '9.1' },
  { id: 'igchem-kt-19', term: 'Condensation Polymerisation', definition: 'Linking monomers with two functional groups into a polymer while eliminating water.', topicNumber: 9, subtopicId: 'igchem-9-2', subtopicCode: '9.2' },
  { id: 'igchem-kt-20', term: 'Catalytic Converter', definition: 'Exhaust device converting toxic CO and NO into harmless CO₂ and N₂ over Pt/Rh.', topicNumber: 10, subtopicId: 'igchem-10-1', subtopicCode: '10.1' },
];
