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
      { id: 'igchem-1-1', code: '1.1', slug: '1.1-states-of-matter-diffusion', title: 'States of Matter, Heating Curves & Diffusion', readingMinutes: 8, hasDeepContent: true },
      { id: 'igchem-1-2', code: '1.2', slug: '1.2-separation-purification-chromatography', title: 'Separation Techniques, Purity & Chromatography', readingMinutes: 9, hasDeepContent: true },
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
      { id: 'igchem-4-1', code: '4.1', slug: '4.1-electrolysis-half-equations-cells', title: 'Electrolysis, Half-Equations & Hydrogen Fuel Cells', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Chemical Energetics',
    subtopics: [
      { id: 'igchem-5-1', code: '5.1', slug: '5.1-exothermic-endothermic-bond-energy', title: 'Exothermic & Endothermic Reactions & Bond Energies', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Chemical Reactions, Rates & Equilibria',
    subtopics: [
      { id: 'igchem-6-1', code: '6.1', slug: '6.1-rates-collision-theory-catalysts', title: 'Collision Theory, Rates of Reaction & Catalysts', readingMinutes: 9, hasDeepContent: true },
      { id: 'igchem-6-2', code: '6.2', slug: '6.2-reversible-reactions-haber-contact', title: 'Reversible Reactions, Equilibrium, Haber & Contact Processes', readingMinutes: 10, hasDeepContent: true },
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
      { id: 'igchem-8-1', code: '8.1', slug: '8.1-periodic-table-groups-transitions', title: 'Periodic Table: Groups I, VII, VIII & Transition Metals', readingMinutes: 9, hasDeepContent: true },
      { id: 'igchem-8-2', code: '8.2', slug: '8.2-reactivity-series-extraction-rusting', title: 'Reactivity Series, Extraction of Iron & Aluminium & Rusting', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 9,
    title: 'Organic Chemistry',
    subtopics: [
      { id: 'igchem-9-1', code: '9.1', slug: '9.1-crude-oil-alkanes-alkenes', title: 'Crude Oil, Fractional Distillation, Alkanes & Alkenes', readingMinutes: 10, hasDeepContent: true },
      { id: 'igchem-9-2', code: '9.2', slug: '9.2-alcohols-carboxylic-acids-polymers', title: 'Alcohols, Carboxylic Acids, Esters & Polymers', readingMinutes: 10, hasDeepContent: true },
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
    readingMinutes: 8,
    videoTitle: 'GCSE Chemistry - States of Matter & Changing State',
    youtubeId: 'hkBrw2fG75U',
    videoChannel: 'Cognito',
    videoDuration: '4:21',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Particle Theory Overview', cardId: 'igchem-1-1-c1' },
      { time: '0:50', seconds: 50, label: 'Solids, Liquids & Gases', cardId: 'igchem-1-1-c1' },
      { time: '2:15', seconds: 135, label: 'Melting, Boiling & Freezing', cardId: 'igchem-1-1-c2' },
      { time: '3:25', seconds: 205, label: 'Cooling Curves & Limitations of Model', cardId: 'igchem-1-1-c2' },
    ],
    cards: [
      {
        id: 'igchem-1-1-c1',
        title: 'Kinetic Particle Theory of Solids, Liquids & Gases',
        summary: 'Particle arrangement, motion, and pressure behaviour across solids, liquids, and gases.',
        bullets: [
          '**Solids**: particles packed tightly in a regular fixed lattice; vibrate around fixed positions; fixed shape and volume; incompressible.',
          '**Liquids**: particles remain close together in an irregular arrangement; slide past one another; fixed volume but take the shape of the container.',
          '**Gases**: particles far apart in random arrangement; move rapidly in all directions; easily compressed and fill any container.',
          'Heating a gas at constant volume increases average **kinetic energy** so particles collide with container walls more frequently and forcefully, raising pressure.',
        ],
        glossaryPills: [
          { term: 'lattice', definition: 'A regular, repeating 3D arrangement of particles in a crystalline solid.' },
        ],
      },
      {
        id: 'igchem-1-1-c2',
        title: 'Heating & Cooling Curves',
        summary: 'Interpreting flat latent-heat plateaus at melting and boiling points on heating curves.',
        bullets: [
          'State changes: melting (solid → liquid), boiling/evaporation (liquid → gas), freezing (liquid → solid), condensing (gas → liquid).',
          'On a **heating curve** of a **pure substance**, temperature stays CONSTANT (flat plateau) at the melting point and boiling point even though heat is still supplied.',
          'During a plateau, absorbed thermal energy is used to overcome intermolecular forces of attraction between particles rather than increasing **kinetic energy**.',
          'Melting and boiling are endothermic (take in heat); freezing and condensing are exothermic (release heat to surroundings as intermolecular attractions form).',
        ],
        commonMistake: 'When describing melting or boiling of molecular substances like water or iodine, state that energy overcomes INTERMOLECULAR FORCES — never write that covalent bonds break!',
      },
      {
        id: 'igchem-1-1-c3',
        title: 'Diffusion & Effect of Relative Molecular Mass (Mr)',
        summary: 'How relative molecular mass controls gas diffusion speed in the NH₃ and HCl tube experiment.',
        bullets: [
          '**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration due to random motion.',
          'At the same temperature, gases with a LOWER relative molecular mass (Mr) move faster and diffuse more rapidly than heavier gases.',
          'Classic tube experiment: cotton wool soaked in concentrated NH₃ (Mr = 17) at one end and concentrated HCl (Mr = 36.5) at the other. A white smoke ring of solid ammonium chloride (NH₄Cl) forms CLOSER to the HCl end because lighter NH₃ molecules diffuse much faster.',
        ],
        glossaryPills: [
          { term: 'relative molecular mass', definition: 'The sum of relative atomic masses of all atoms present in one molecule (Mr).' },
        ],
        memoryAid: 'Lighter gases race faster: NH₃ (17) beats HCl (36.5), so the white NH₄Cl ring forms near the slow HCl end!',
      },
    ],
    keyTerms: [
      { term: 'Kinetic particle theory', definition: 'Model explaining physical states and state changes in terms of particle arrangement, motion, and energy.' },
      { term: 'Evaporation', definition: 'Escape of the most energetic molecules from a liquid surface at temperatures below the boiling point.' },
      { term: 'Diffusion', definition: 'Spreading and mixing of gas or dissolved particles from higher to lower concentration due to random motion.' },
      { term: 'Sublimation', definition: 'Direct transition from solid to gas without passing through the liquid state (e.g., dry ice CO₂ or iodine).' },
    ],
    checklistPoints: [
      'I can describe particle separation, arrangement, and motion in solids, liquids, and gases.',
      'I can explain why pure substances produce flat horizontal plateaus at their melting and boiling points on heating curves.',
      'I can explain the NH₃ + HCl diffusion tube experiment using relative molecular mass (Mr).',
    ],
  },

  'igchem-1-2': {
    subtopicId: 'igchem-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Separation Techniques, Purity & Chromatography',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Separation Techniques - Filtration | Evaporation | Crystallisation',
    youtubeId: '29Rd-Lly-fw',
    videoChannel: 'Cognito',
    videoDuration: '5:19',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Separation Methods', cardId: 'igchem-1-2-c1' },
      { time: '0:27', seconds: 27, label: 'Mixtures, Solutions, Solutes, and Solvents', cardId: 'igchem-1-2-c1' },
      { time: '2:52', seconds: 172, label: 'Evaporation', cardId: 'igchem-1-2-c1' },
      { time: '3:50', seconds: 230, label: 'Crystallisation & Purity', cardId: 'igchem-1-2-c1' },
    ],
    cards: [
      {
        id: 'igchem-1-2-c1',
        title: 'Assessing Purity & Choosing Separation Methods',
        summary: 'Checking purity via sharp melting/boiling points and choosing filtration, crystallisation, or distillation.',
        bullets: [
          'A **pure substance** consists of only one element or one compound and has a SHARP, exact melting point and boiling point (e.g., pure water melts at exactly 0 °C and boils at 100 °C).',
          'Impurities LOWER the melting point, RAISE the boiling point, and cause melting/boiling to occur over a wide temperature range.',
          '**Filtration** separates an insoluble solid (residue) from a liquid (filtrate). **Crystallisation** obtains pure hydrated crystals from a solution by heating gently to the point of saturation, cooling to form crystals, filtering, and drying between filter paper.',
          '**Simple distillation** recovers a pure solvent from a solution (e.g., pure water from salty seawater) using a Liebig condenser; **fractional distillation** separates miscible liquids with different boiling points (e.g., ethanol 78 °C and water 100 °C) using a glass-bead fractionating column.',
        ],
        glossaryPills: [
          { term: 'miscible', definition: 'Two or more liquids that dissolve completely in each other to form a single uniform layer (e.g., ethanol and water).' },
        ],
      },
      {
        id: 'igchem-1-2-c2',
        title: 'Paper Chromatography & Rf Calculations',
        summary: 'Separating soluble dyes or colourless amino acids with paper chromatography and calculating Rf values.',
        bullets: [
          '**Paper chromatography** separates mixtures of soluble coloured dyes (or colourless amino acids/sugars made visible by spraying a locating agent such as ninhydrin) based on differences in solubility in the mobile phase (solvent) and attraction to the stationary phase (paper).',
          'Draw the baseline in PENCIL (graphite is insoluble in water/organic solvents, whereas ink would dissolve and smudge). Keep the solvent level BELOW the pencil baseline so spots do not wash directly into the solvent.',
          'A **pure substance** produces ONE single spot; a mixture separates into two or more spots. Compare spots horizontally against known reference samples.',
          'Retention factor formula: Rf = distance travelled by spot ÷ distance travelled by solvent front (both measured from the pencil baseline; Rf is always between 0 and 1 with NO units).',
        ],
        glossaryPills: [
          { term: 'locating agent', definition: 'Chemical spray (such as ninhydrin) that reacts with colourless substances on a chromatogram to form coloured visible spots.' },
        ],
        commonMistake: 'Always measure BOTH spot distance and solvent front distance from the PENCIL BASELINE — never from the bottom edge of the chromatography paper!',
      },
      {
        id: 'igchem-1-2-c3',
        title: 'Accurate Measurement Apparatus in Practical Chemistry',
        summary: 'Selecting pipettes, burettes, and gas syringes for precise laboratory measurements.',
        bullets: [
          'Volumetric pipette: delivers a single exact fixed volume (e.g., 25.0 cm³) during titrations.',
          'Burette: measures variable volumes accurately to the nearest 0.05 cm³ (read from the bottom of the meniscus).',
          'Gas syringe: collects and measures exact gas volumes for rate experiments (works even for water-soluble gases like CO₂ or NH₃).',
          'Digital balance (mass to 0.01 g), stopwatch (time), and thermometer (temperature).',
        ],
        memoryAid: 'Pipette = Precise single fixed volume; Burette = Best for variable titration drops!',
      },
    ],
    keyTerms: [
      { term: 'Pure substance', definition: 'Single element or compound melting and boiling at sharp, fixed temperatures.' },
      { term: 'Fractional distillation', definition: 'Separation of miscible liquids with differing boiling points using a fractionating column.' },
      { term: 'Rf value', definition: 'Ratio of distance moved by a substance to distance moved by the solvent front from the baseline.' },
      { term: 'Filtrate', definition: 'Liquid that passes through filter paper during filtration.' },
      { term: 'Residue', definition: 'Insoluble solid trapped on filter paper during filtration.' },
    ],
    checklistPoints: [
      'I can explain how impurities alter the melting and boiling point of a substance.',
      'I can choose between filtration, crystallisation, simple distillation, fractional distillation, and chromatography for any given mixture.',
      'I can explain why the baseline is drawn in pencil and calculate Rf accurately.',
      'I can explain how locating agents reveal colourless amino acids or sugars on a chromatogram.',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Elements & Atoms', cardId: 'igchem-2-1-c1' },
      { time: '0:49', seconds: 49, label: 'Nuclear Symbols (Z and A)', cardId: 'igchem-2-1-c1' },
      { time: '3:42', seconds: 222, label: 'Isotopes & Relative Atomic Mass (Ar)', cardId: 'igchem-2-1-c3' },
      { time: '4:48', seconds: 288, label: 'Calculating Ar from Abundances', cardId: 'igchem-2-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-2-1-c1',
        title: 'Subatomic Particles, Proton Number & Nucleon Number',
        summary: 'Mass and charge of protons, neutrons, and electrons plus calculating particle counts in ions.',
        diagram: 'atomic-structure',
        bullets: [
          'An atom has a tiny dense central **nucleus** (containing protons and neutrons) surrounded by **electrons** orbiting in shells.',
          'Proton: relative mass 1, charge +1. Neutron: relative mass 1, charge 0. Electron: relative mass 1/1840 (negligible), charge −1.',
          '**Proton number** (atomic number, Z) = number of protons in the **nucleus** (defines the element). Nucleon number (mass number, A) = total number of protons + neutrons. Neutrons = A − Z.',
          'Neutral atoms have equal **protons** and **electrons**; ions have unequal protons and electrons (losing electrons creates positive cations like Mg²⁺; gaining electrons creates negative anions like Cl⁻).',
        ],
        glossaryPills: [
          { term: 'nucleon number', definition: 'Total number of protons and neutrons in the nucleus of an atom (also called mass number).' },
        ],
      },
      {
        id: 'igchem-2-1-c2',
        title: 'Electron Configurations & Periodic Table Links',
        summary: 'Filling electron shells (2,8,8,2) and linking shells and outer electrons to Periods and Groups.',
        bullets: [
          'Electrons fill shells from innermost to outermost: maximum 2 in shell 1, 8 in shell 2, 8 in shell 3, and 2 in shell 4 (for elements 1–20, e.g., Calcium 20 = 2,8,8,2).',
          'The number of occupied electron shells equals the Period number; the number of outer-shell electrons equals the Group number (Groups I–VII).',
          '**Group VIII** (0) noble gases have completely full outer shells (He = 2; Ne = 2,8; Ar = 2,8,8), making them chemically unreactive.',
        ],
        memoryAid: 'Period = number of shells; Group = outer electrons!',
      },
      {
        id: 'igchem-2-1-c3',
        title: 'Isotopes & Relative Atomic Mass (Ar)',
        summary: 'Why isotopes share identical chemical properties and calculating weighted relative atomic mass (Ar).',
        bullets: [
          'Isotopes are different atoms of the SAME element that have the same number of protons but different numbers of neutrons (e.g., ³⁵Cl has 18 neutrons and ³⁷Cl has 20 neutrons).',
          'Isotopes of the same element have IDENTICAL chemical properties because they have the exact same number of electrons and identical outer-shell electron configuration (they differ slightly in physical properties like density).',
          'Relative atomic mass (Ar) is the weighted average mass of the naturally occurring isotopes of an element on a scale where an atom of carbon-12 has a mass of exactly 12.',
          'Worked example for **Chlorine** (75% ³⁵Cl, 25% ³⁷Cl): Ar = [(75 × 35) + (25 × 37)] ÷ 100 = 35.5.',
        ],
        glossaryPills: [
          { term: 'isotopes', definition: 'Atoms of the same element with the same proton number but different numbers of neutrons.' },
        ],
        commonMistake: 'When asked WHY isotopes have identical chemical properties, always state "same number of electrons / same outer-shell electron configuration" — NOT just "same number of protons".',
      },
    ],
    keyTerms: [
      { term: 'Proton number', definition: 'Number of protons in the nucleus of an atom (atomic number, Z).' },
      { term: 'Nucleon number', definition: 'Sum of protons and neutrons in an atomic nucleus (mass number, A).' },
      { term: 'Isotope', definition: 'Atoms of the same element having the same number of protons but different numbers of neutrons.' },
      { term: 'Relative atomic mass', definition: 'Average mass of the isotopes of an element compared to 1/12th the mass of a carbon-12 atom.' },
    ],
    checklistPoints: [
      'I can state the relative mass and charge of protons, neutrons, and electrons and calculate particle counts for atoms and ions.',
      'I can write electron configurations up to element 20 (Calcium: 2,8,8,2) and link them to Group and Period.',
      'I can explain why isotopes share identical chemical properties and calculate Ar from percentage abundances.',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Bonding', cardId: 'igchem-2-2-c1' },
      { time: '0:53', seconds: 53, label: 'How Covalent Bonds Form', cardId: 'igchem-2-2-c2' },
      { time: '2:25', seconds: 145, label: 'Dot-and-Cross & 3D Models', cardId: 'igchem-2-2-c2' },
      { time: '4:06', seconds: 246, label: 'Simple vs Giant Covalent Substances', cardId: 'igchem-2-2-c2' },
    ],
    cards: [
      {
        id: 'igchem-2-2-c1',
        title: 'Ionic Bonding & Giant Ionic Lattices',
        summary: 'Electron transfer forming giant ionic lattices with high melting points and molten/aqueous conductivity.',
        diagram: 'ionic-covalent-bonding',
        bullets: [
          'Ionic bonds form between metals and non-metals: metal atoms LOSE outer **electrons** to form positive cations; non-metal atoms GAIN electrons to form negative anions with full outer shells.',
          'An ionic bond is the strong electrostatic attraction between oppositely charged ions arranged in a regular 3D **giant ionic lattice** (e.g., NaCl, MgO).',
          'High melting and boiling points because huge amounts of energy are required to overcome strong **electrostatic forces** throughout the lattice (MgO melts higher than NaCl because Mg²⁺ and O²⁻ have greater ionic charges).',
          'Conduct electricity ONLY when molten or dissolved in water (aqueous) because ions are free to move and carry charge; in solid state, ions are locked in fixed positions.',
        ],
        glossaryPills: [
          { term: 'electrostatic attraction', definition: 'Strong force of attraction between oppositely charged positive and negative particles.' },
        ],
      },
      {
        id: 'igchem-2-2-c2',
        title: 'Simple Molecular Covalent vs Giant Covalent Structures',
        summary: 'Comparing low-melting simple covalent molecules with giant covalent diamond, graphite, and SiO₂.',
        bullets: [
          'A covalent bond is a shared pair of electrons between two non-metal atoms (single bond = 1 pair e.g. H₂, CH₄, NH₃; double bond = 2 pairs e.g. O₂, CO₂, C₂H₄; triple bond = 3 pairs e.g. N₂).',
          'Simple covalent molecules (H₂O, CO₂, Cl₂) have LOW melting/boiling points because only WEAK intermolecular forces between molecules need overcoming — and they NEVER conduct electricity because they have no free ions or delocalised electrons.',
          '**Giant covalent structures** (macromolecules) have VERY HIGH melting points because billions of strong covalent bonds must be broken:',
          '**Diamond**: each carbon forms 4 strong covalent bonds tetrahedrally → extremely hard (cutting tools), no free electrons (insulator). Silicon(IV) oxide (SiO₂, sand) has a similar tetrahedral giant covalent structure (each Si bonded to 4 O, each O to 2 Si).',
          '**Graphite**: each carbon forms 3 covalent bonds in flat hexagonal layers leaving 1 delocalised electron per carbon → conducts electricity (electrodes); weak forces between layers allow layers to slide → soft & slippery (lubricant / pencil lead).',
        ],
        glossaryPills: [
          { term: 'delocalised electron', definition: 'An outer-shell electron free to move across a structure and carry electrical current (in metals and graphite).' },
        ],
        commonMistake: 'NEVER say ionic compounds conduct electricity because of "delocalised electrons" — ionic liquids conduct via FREE-MOVING IONS, whereas metals and graphite conduct via DELOCALISED ELECTRONS!',
      },
      {
        id: 'igchem-2-2-c3',
        title: 'Metallic Bonding & Alloys',
        summary: 'Delocalised electron sea in metallic lattices and why different-sized atoms make alloys harder.',
        bullets: [
          '**Metallic bonding** is the strong electrostatic attraction between a regular giant lattice of positive metal ions and a "sea" of delocalised outer **electrons**.',
          'Good electrical and thermal conductors because delocalised **electrons** move freely throughout the metal; high melting points due to strong metallic bonds.',
          'Pure metals are malleable and ductile because regular layers of identical-sized ions can slide over each other without breaking the metallic bonding.',
          '**Alloys** (e.g., brass = Cu + Zn, stainless steel = Fe + Cr + Ni + C) are mixtures of metals with other elements: atoms of DIFFERENT SIZES distort the regular layers, making it harder for layers to slide → alloys are much harder and stronger than pure metals.',
        ],
        memoryAid: 'Alloys are harder because "Different-sized atoms Disrupt layers from sliding" (D-D)!',
      },
    ],
    keyTerms: [
      { term: 'Ionic bond', definition: 'Strong electrostatic attraction between oppositely charged ions formed by electron transfer.' },
      { term: 'Covalent bond', definition: 'Shared pair of electrons attracting the nuclei of two non-metal atoms.' },
      { term: 'Giant covalent structure', definition: 'Huge 3D network of atoms joined entirely by strong covalent bonds (e.g., diamond, graphite, SiO₂).' },
      { term: 'Metallic bonding', definition: 'Electrostatic attraction between positive metal ions in a giant lattice and delocalised electrons.' },
      { term: 'Alloy', definition: 'Mixture of a metal with one or more other elements whose different atom sizes disrupt layers, increasing hardness.' },
    ],
    checklistPoints: [
      'I can draw dot-and-cross diagrams for ionic compounds and simple covalent molecules (including CO₂, N₂, C₂H₄, CH₃OH).',
      'I can explain melting point and conductivity differences between giant ionic, simple molecular, diamond, graphite, SiO₂, and metallic structures.',
      'I can explain why pure metals are malleable while alloys are much harder.',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Moles, Concentration & Volume Formula', cardId: 'igchem-3-1-c1' },
      { time: '0:17', seconds: 17, label: 'Units for Volume (cm³ to dm³) and Concentration', cardId: 'igchem-3-1-c2' },
      { time: '1:23', seconds: 83, label: 'Example: Calculating Concentration', cardId: 'igchem-3-1-c2' },
      { time: '2:04', seconds: 124, label: 'Titration Calculations', cardId: 'igchem-3-1-c2' },
    ],
    cards: [
      {
        id: 'igchem-3-1-c1',
        title: 'The Mole, Avogadro Constant & Reacting Masses',
        summary: 'Applying Avogadro’s constant, n = m ÷ Mr, balanced mole ratios, and limiting reactants.',
        bullets: [
          '**One mole** (mol) of any substance contains exactly 6.02 × 10²³ particles (Avogadro constant) and has a mass in grams equal to its relative atomic/formula mass (Ar or Mr).',
          'Core mass equation: moles (n) = mass in grams (m) ÷ Mr.',
          'Reacting mass method: (1) Convert known mass to moles (n = m ÷ Mr); (2) Use the balanced chemical equation’s stoichiometric mole ratio to find moles of target; (3) Multiply moles by target Mr to find mass.',
          'Limiting reactant: the reactant that runs out completely first and determines the maximum theoretical moles of product formed (the other reactant is in excess).',
        ],
        glossaryPills: [
          { term: 'Avogadro constant', definition: 'Number of particles (atoms, molecules, or ions) in exactly one mole of any substance: 6.02 × 10²³.' },
          { term: 'limiting reactant', definition: 'The reactant completely used up first in a reaction, capping the maximum quantity of product formed.' },
        ],
        memoryAid: 'Think "Mass over Mr gives Moles" — Mr sits underneath mass: n = m / Mr!',
      },
      {
        id: 'igchem-3-1-c2',
        title: 'Molar Gas Volume & Titration Concentration Calculations',
        summary: 'Using 24 dm³ molar gas volume at r.t.p. and n = c × V for titration calculations.',
        bullets: [
          'At room temperature and pressure (r.t.p., 20 °C and 1 atm), 1 mole of ANY gas occupies 24 dm³ (= 24,000 cm³). Equation: moles of gas = Volume (dm³) ÷ 24.',
          'Solution concentration equation: moles (n) = concentration (mol/dm³) × volume (dm³). Always divide cm³ by 1,000 to convert into dm³! Also concentration in g/dm³ = concentration in mol/dm³ × Mr.',
          'Titration calculation workflow: (1) Find moles of known standard solution (n = c × V/1000); (2) Apply the balanced acid-alkali mole ratio; (3) Calculate unknown concentration c = n ÷ (V/1000).',
        ],
        commonMistake: 'Forgetting to convert titration or gas volumes from cm³ into dm³ (÷ 1,000) causes answers to be off by a factor of 1,000!',
      },
      {
        id: 'igchem-3-1-c3',
        title: 'Empirical Formula, Percentage Yield & Percentage Purity',
        summary: 'Deriving empirical and molecular formulae and computing percentage yield and purity.',
        bullets: [
          'Empirical formula (simplest whole-number ratio of atoms): (1) List mass or % of each element; (2) Divide each by its Ar to get moles; (3) Divide all mole values by the SMALLEST mole value; (4) Multiply if needed to reach whole numbers.',
          'Molecular formula = Empirical formula × (actual Mr ÷ empirical formula mass). For example, empirical CH₂ (mass 14) with Mr 56 → multiplier 4 → C₄H₈.',
          'Percentage yield = (Actual mass obtained ÷ Theoretical maximum mass) × 100%. Yield is <100% due to reversible reactions, side reactions, or product lost during filtration/transfer.',
          '**Percentage purity** = (Mass of **pure substance** ÷ Total mass of impure sample) × 100%.',
        ],
        glossaryPills: [
          { term: 'empirical formula', definition: 'The simplest whole-number ratio of atoms of each element present in a compound.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Mole', definition: 'Amount of substance containing 6.02 × 10²³ particles, with mass equal to Ar or Mr in grams.' },
      { term: 'Molar gas volume', definition: 'Volume occupied by one mole of any gas at r.t.p., equal to 24 dm³ (24,000 cm³).' },
      { term: 'Empirical formula', definition: 'Simplest whole-number ratio of the different atoms in a compound.' },
      { term: 'Limiting reactant', definition: 'Reactant completely consumed first that restricts the amount of product formed.' },
      { term: 'Percentage yield', definition: 'Actual product mass divided by theoretical maximum mass, multiplied by 100.' },
    ],
    checklistPoints: [
      'I can apply n = m ÷ Mr, n = V(dm³) ÷ 24, and n = c × V(dm³) smoothly including cm³ → dm³ conversions.',
      'I can identify the limiting reactant and calculate reacting masses and titration concentrations.',
      'I can derive empirical and molecular formulae from mass or percentage composition data.',
      'I can compute percentage yield and percentage purity accurately.',
    ],
  },

  'igchem-4-1': {
    subtopicId: 'igchem-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Electrolysis, Half-Equations & Hydrogen Fuel Cells',
    readingMinutes: 10,
    videoTitle: 'Electrolysis Part 3/3 - Aqueous Solutions',
    youtubeId: 'me19WmGg8Dw',
    videoChannel: 'Cognito',
    videoDuration: '6:03',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Electrolysis Recap & Intro to Aqueous Solutions', cardId: 'igchem-4-1-c1' },
      { time: '1:39', seconds: 99, label: 'Rules for Ion Discharge at Cathode', cardId: 'igchem-4-1-c2' },
      { time: '2:29', seconds: 149, label: 'Rule 2: Discharge at the Anode (Halides)', cardId: 'igchem-4-1-c2' },
      { time: '4:42', seconds: 282, label: 'Example: Electrolysis of Aqueous Sodium Chloride', cardId: 'igchem-4-1-c2' },
    ],
    cards: [
      {
        id: 'igchem-4-1-c1',
        title: 'Principles of Electrolysis & Molten Electrolytes',
        summary: 'Cathode reduction and anode oxidation (PANIC + OIL RIG) during electrolysis of molten salts.',
        bullets: [
          '**Electrolysis** is the breakdown of an ionic compound (molten or aqueous — the electrolyte) by passing a direct electric current (d.c.) through it.',
          'Positive cations migrate to the NEGATIVE **CATHODE** where they GAIN electrons (Reduction). Negative anions migrate to the POSITIVE **ANODE** where they LOSE electrons (Oxidation).',
          'Inert electrodes (graphite or platinum) conduct electricity without reacting with the electrolyte. External wires carry **electrons**; the electrolyte conducts via mobile ions.',
          'Molten lead(II) bromide (PbBr₂): Cathode forms shiny molten lead (Pb²⁺ + 2e⁻ → Pb); Anode releases brown bromine vapour (2Br⁻ → Br₂ + 2e⁻).',
        ],
        glossaryPills: [
          { term: 'electrolyte', definition: 'A molten or aqueous ionic compound that conducts electricity via mobile ions and is decomposed during electrolysis.' },
        ],
        memoryAid: 'PANIC (Positive Anode, Negative Is Cathode) + OIL RIG (Oxidation Is Loss of electrons, Reduction Is Gain of electrons)!',
      },
      {
        id: 'igchem-4-1-c2',
        title: 'Aqueous Electrolysis Rules & Half-Equations',
        summary: 'Discharge competition rules in aqueous brine and CuSO₄ plus balanced ionic half-equations.',
        bullets: [
          'Aqueous solutions also contain H⁺ and OH⁻ ions from water, so ions compete for discharge at each electrode:',
          'At the **CATHODE** (−): if the metal is MORE reactive than hydrogen (e.g., Na⁺, K⁺, Ca²⁺, Mg²⁺, Al³⁺), HYDROGEN gas is produced (2H⁺ + 2e⁻ → H₂). If the metal is LESS reactive than hydrogen (Cu²⁺, Ag⁺), the METAL is plated (Cu²⁺ + 2e⁻ → Cu).',
          'At the **ANODE** (+): if a concentrated halide ion is present (Cl⁻, Br⁻, I⁻), the HALOGEN forms (2Cl⁻ → Cl₂ + 2e⁻). Otherwise (e.g., SO₄²⁻, NO₃⁻, dilute solutions), OH⁻ discharges to form OXYGEN gas and water (4OH⁻ → O₂ + 2H₂O + 4e⁻).',
          'Concentrated aqueous NaCl (brine): H₂ at cathode, Cl₂ at anode, and alkaline NaOH solution left behind! Copper(II) sulfate with inert carbon electrodes deposits pink-brown Cu at cathode and O₂ at anode; with active COPPER electrodes, the copper anode dissolves (Cu → Cu²⁺ + 2e⁻) while pure Cu plates the cathode (used to purify copper and electroplate objects).',
        ],
        commonMistake: 'Remember the cathode/anode ionic half-equations must balance BOTH atoms AND electrical charges! For oxygen at the anode, memorise: 4OH⁻ → O₂ + 2H₂O + 4e⁻.',
      },
      {
        id: 'igchem-4-1-c3',
        title: 'Electroplating & Hydrogen-Oxygen Fuel Cells',
        summary: 'Electroplating metallic objects and evaluating zero-tailpipe hydrogen-oxygen fuel cells.',
        bullets: [
          'Electroplating coats a metal object (made the **CATHODE**) with a thin layer of another metal such as silver or chromium (made the **ANODE**) inside an electrolyte containing ions of the plating metal — improves appearance and prevents corrosion.',
          'A hydrogen-oxygen fuel cell uses hydrogen and oxygen directly to generate electrical energy with WATER as the ONLY chemical product: 2H₂ + O₂ → 2H₂O.',
          'Advantages over petrol engines: zero CO₂, NOₓ, or CO tailpipe emissions; high efficiency; quiet operation. Disadvantages: hydrogen is a flammable gas difficult/expensive to store under high pressure, limited refuelling network, and producing H₂ currently often uses fossil fuels.',
        ],
        glossaryPills: [
          { term: 'fuel cell', definition: 'Electrochemical cell that converts chemical energy from a continuous supply of fuel (such as H₂) and oxygen directly into electricity.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Electrolysis', definition: 'Decomposition of a molten or aqueous ionic compound using direct electrical current.' },
      { term: 'Cathode', definition: 'Negative electrode where cations gain electrons (reduction).' },
      { term: 'Anode', definition: 'Positive electrode where anions lose electrons (oxidation).' },
      { term: 'Electroplating', definition: 'Coating an object with a thin metallic layer via electrolysis to improve appearance and prevent corrosion.' },
      { term: 'Hydrogen fuel cell', definition: 'Device reacting hydrogen and oxygen electrochemically to produce electricity with water as the only product.' },
    ],
    checklistPoints: [
      'I can predict cathode and anode products for molten salts, concentrated brine, dilute H₂SO₄, and CuSO₄ (with inert vs copper electrodes).',
      'I can write balanced oxidation and reduction ionic half-equations for every standard electrode reaction.',
      'I can set up an electroplating circuit identifying cathode, anode, and electrolyte.',
      'I can write the overall equation and evaluate pros/cons of hydrogen-oxygen fuel cells.',
    ],
  },

  'igchem-5-1': {
    subtopicId: 'igchem-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Exothermic & Endothermic Reactions & Bond Energies',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Bond Energies - Determining if Reactions are Exothermic or Endothermic',
    youtubeId: 'CegXaqWMyr4',
    videoChannel: 'Cognito',
    videoDuration: '4:54',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Chemical Energetics', cardId: 'igchem-5-1-c1' },
      { time: '0:53', seconds: 53, label: 'Bond Breaking (Endothermic) vs Bond Forming (Exothermic)', cardId: 'igchem-5-1-c2' },
      { time: '1:16', seconds: 76, label: 'Calculating Overall Energy Change (ΔH)', cardId: 'igchem-5-1-c2' },
      { time: '2:59', seconds: 179, label: 'Worked Example: N₂ + 3H₂ → 2NH₃', cardId: 'igchem-5-1-c2' },
    ],
    cards: [
      {
        id: 'igchem-5-1-c1',
        title: 'Exothermic vs Endothermic Reactions & Reaction Pathways',
        summary: 'Exothermic vs endothermic thermal transfers, activation energy, and reaction pathway profiles.',
        diagram: 'exothermic-endothermic',
        bullets: [
          '**Exothermic reaction**: transfers thermal energy OUT to the surroundings, causing the temperature of the surroundings to INCREASE (negative ΔH). Examples: combustion, neutralisation, respiration, metal + acid.',
          '**Endothermic reaction**: takes thermal energy IN from the surroundings, causing the temperature of the surroundings to DECREASE (positive ΔH). Examples: thermal decomposition of CaCO₃, photosynthesis, citric acid + sodium hydrogencarbonate.',
          'Activation energy (Ea) is the minimum energy that colliding particles must possess in order to react — shown as the upward arrow from reactants to the peak of a reaction pathway diagram.',
          'On a reaction pathway diagram: for **exothermic** reactions, products sit LOWER in energy than reactants (downward ΔH arrow); for **endothermic** reactions, products sit HIGHER than reactants (upward ΔH arrow).',
        ],
        glossaryPills: [
          { term: 'activation energy', definition: 'Minimum kinetic energy colliding reactant particles must have to break initial bonds and start a reaction.' },
        ],
        memoryAid: 'EXOthermic = Heat EXits (ΔH negative, thermometer goes UP); ENDOthermic = Heat ENters (ΔH positive, thermometer goes DOWN).',
      },
      {
        id: 'igchem-5-1-c2',
        title: 'Bond Breaking, Bond Making & Bond Energy Calculations',
        summary: 'Calculating ΔH from bond energies using Σ(bonds broken) − Σ(bonds formed).',
        bullets: [
          'Breaking chemical bonds in reactants is ENDOTHERMIC (absorbs energy). Forming new chemical bonds in products is EXOTHERMIC (releases energy).',
          'Enthalpy change equation: ΔH = Σ(Energy needed to break reactant bonds) − Σ(Energy released making product bonds).',
          'A reaction is **exothermic** overall if MORE energy is released forming product bonds than is absorbed breaking reactant bonds (ΔH < 0).',
          'Worked example — H₂ + Cl₂ → 2HCl (H–H = 436, Cl–Cl = 242, H–Cl = 431 kJ/mol): Bonds broken = 436 + 242 = 678 kJ; Bonds formed = 2 × 431 = 862 kJ; ΔH = 678 − 862 = −184 kJ/mol (**exothermic**!).',
        ],
        memoryAid: 'Remember B-E-N-D-O / M-E-X-O: Breaking is ENDOthermic, Making is EXOthermic!',
        commonMistake: 'Always draw out full displayed structures before summing bond energies so you do not miss double bonds (like O=O or C=O) or forget to multiply by stoichiometric coefficients (e.g., 2 H₂O has FOUR O–H bonds, not two!).',
      },
      {
        id: 'igchem-5-1-c3',
        title: 'Calorimetry & Measuring Temperature Changes',
        summary: 'Reducing heat losses in polystyrene cup calorimetry and spirit burner experiments.',
        bullets: [
          'In solution calorimetry (neutralisation or displacement), perform the reaction inside an insulated polystyrene cup with a lid to minimise heat loss to the surroundings.',
          'For combustion of liquid fuels (spirit burner heating water in a copper can), shield from draughts and stir continuously; measured ΔH is typically less **exothermic** than textbook values due to heat loss to air/apparatus and incomplete combustion.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Exothermic', definition: 'Reaction transferring thermal energy to the surroundings, raising their temperature (negative ΔH).' },
      { term: 'Endothermic', definition: 'Reaction absorbing thermal energy from the surroundings, lowering their temperature (positive ΔH).' },
      { term: 'Enthalpy change', definition: 'Transfer of thermal energy during a reaction at constant pressure, denoted ΔH (kJ/mol).' },
      { term: 'Activation energy', definition: 'Minimum energy required by colliding particles for a successful reaction.' },
    ],
    checklistPoints: [
      'I can draw and label exothermic and endothermic reaction pathway diagrams including Ea and ΔH arrows.',
      'I can explain why a reaction is exothermic or endothermic overall by comparing energy absorbed in bond breaking with energy released in bond forming.',
      'I can calculate ΔH accurately from a table of mean bond energies including negative/positive signs.',
    ],
  },

  'igchem-6-1': {
    subtopicId: 'igchem-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Collision Theory, Rates of Reaction & Catalysts',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Rates of Reaction - How to Measure it | How to Show it on Graphs',
    youtubeId: 'HaQm4pNMZug',
    videoChannel: 'Cognito',
    videoDuration: '5:02',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Reaction Rates', cardId: 'igchem-6-1-c1' },
      { time: '0:54', seconds: 54, label: 'How to Measure Reaction Rates', cardId: 'igchem-6-1-c1' },
      { time: '2:35', seconds: 155, label: 'Mean Rate of Reaction & Curves', cardId: 'igchem-6-1-c1' },
      { time: '3:52', seconds: 232, label: 'Other Units for Rate of Reaction', cardId: 'igchem-6-1-c2' },
    ],
    cards: [
      {
        id: 'igchem-6-1-c1',
        title: 'Measuring Rate & Interpreting Rate Graphs',
        summary: 'Following reaction rate by gas syringe, mass loss, or turbidity and reading rate curve gradients.',
        bullets: [
          '**Rate of reaction** = quantity of reactant used (or product formed) ÷ time taken.',
          'Three practical methods: (1) Gas syringe measuring volume of gas over time; (2) Top-pan balance measuring mass loss as a heavy gas like CO₂ escapes through a cotton wool plug (cotton wool prevents acid spray escaping while letting gas out); (3) Disappearing cross timing sulfur turbidity in Na₂S₂O₃ + HCl.',
          'On a product-vs-time curve, the STEEPER the gradient, the FASTER the rate (steepest at t = 0 when reactant concentration is highest; gradient falls to 0 when **limiting reactant** runs out).',
          'Doubling the concentration/mass of the LIMITING reactant doubles the final plateau height; changing temperature, **catalyst**, or surface area changes the steepness ONLY, reaching the SAME final height.',
        ],
        glossaryPills: [
          { term: 'turbidity', definition: 'Cloudiness caused by an insoluble solid precipitate (such as sulfur) forming suspended in a solution.' },
        ],
      },
      {
        id: 'igchem-6-1-c2',
        title: 'Collision Theory: Concentration, Pressure, Surface Area & Temperature',
        summary: 'Explaining concentration, pressure, surface area, and temperature via collision frequency and Ea.',
        bullets: [
          'Particles only react when they collide with **kinetic energy** equal to or greater than the activation energy (Ea) — a successful (effective) collision.',
          'Increasing concentration (solutions) or pressure (gases): MORE particles per unit volume → MORE FREQUENT collisions per second → faster rate.',
          'Increasing solid surface area (powder vs lumps): MORE surface particles exposed → MORE FREQUENT collisions per second → faster rate (and risk of dust explosions in flour mills/coal mines).',
          'Increasing temperature has TWO effects: (1) particles gain **kinetic energy** and move faster → MORE FREQUENT collisions; (2) a MUCH HIGHER PROPORTION of particles have energy ≥ Ea → more collisions are successful (the dominant reason temperature speeds reactions so dramatically).',
        ],
        commonMistake: 'When explaining concentration, surface area, or temperature, NEVER just say "more collisions" — examiners require "more FREQUENT collisions" (or "more collisions PER SECOND")!',
      },
      {
        id: 'igchem-6-1-c3',
        title: 'Catalysts & Enzymes',
        summary: 'How catalysts speed reactions via lower-activation-energy pathways without being consumed.',
        bullets: [
          'A catalyst increases the rate of a chemical reaction and remains chemically unchanged at the end (its mass does not change).',
          'A catalyst works by providing an ALTERNATIVE REACTION PATHWAY with a LOWER ACTIVATION ENERGY (Ea), so a greater proportion of colliding particles possess energy ≥ Ea.',
          'Catalysts do NOT increase particle **kinetic energy** and do NOT alter the overall enthalpy change (ΔH) or total mass of product formed.',
        ],
        glossaryPills: [
          { term: 'catalyst', definition: 'Substance that speeds up a reaction by offering an alternative pathway with lower activation energy without being chemically changed.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Rate of reaction', definition: 'Change in concentration, mass, or volume of reactant or product per unit time.' },
      { term: 'Collision theory', definition: 'Theory stating that reactions occur only when particles collide with energy ≥ activation energy.' },
      { term: 'Catalyst', definition: 'Substance that increases reaction rate by lowering activation energy without being used up.' },
    ],
    checklistPoints: [
      'I can describe three experimental methods to follow reaction rate and interpret gradient and plateau changes on rate curves.',
      'I can explain the effects of surface area, concentration, pressure, and temperature using collision frequency and activation energy.',
      'I can draw a catalysed vs uncatalysed reaction pathway diagram showing the lowered Ea peak.',
    ],
  },

  'igchem-6-2': {
    subtopicId: 'igchem-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Reversible Reactions, Equilibrium, Haber & Contact Processes',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Reversible Reactions & Dynamic Equilibrium',
    youtubeId: '5rC6f_P_A48',
    videoChannel: 'Cognito',
    videoDuration: '6:28',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Reversible Reactions', cardId: 'igchem-6-2-c1' },
      { time: '1:10', seconds: 70, label: 'Dynamic Equilibrium in Closed Systems', cardId: 'igchem-6-2-c1' },
      { time: '2:22', seconds: 142, label: 'Position of Equilibrium', cardId: 'igchem-6-2-c2' },
      { time: '4:03', seconds: 243, label: 'Endothermic & Exothermic Directions', cardId: 'igchem-6-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-6-2-c1',
        title: 'Reversible Reactions & Dynamic Equilibrium',
        summary: 'Hydrated salt reversibility and the two defining criteria of dynamic equilibrium in closed systems.',
        bullets: [
          '**Reversible reactions** (⇌) can proceed in both forward and reverse directions: heating blue hydrated copper(II) sulfate drives off water to form white anhydrous CuSO₄ (**endothermic**); adding water reverses it exothermically. Likewise pink hydrated cobalt(II) chloride turns blue when heated.',
          'In a CLOSED system (no reactants or products can escape), a reversible reaction reaches dynamic equilibrium when: (1) the RATE of the forward reaction EQUALS the RATE of the reverse reaction; and (2) the CONCENTRATIONS of reactants and products remain CONSTANT (not necessarily equal!).',
        ],
        glossaryPills: [
          { term: 'dynamic equilibrium', definition: 'State in a closed reversible reaction where forward and reverse reaction rates are equal and all concentrations remain constant.' },
        ],
        commonMistake: 'NEVER write that the concentrations of reactants and products are "equal" at equilibrium — write that they remain CONSTANT while forward and reverse RATES are equal!',
      },
      {
        id: 'igchem-6-2-c2',
        title: 'Shifting Equilibrium Position (Le Chatelier’s Principle)',
        summary: 'Predicting equilibrium shifts from temperature, gas pressure, concentration, and catalysts.',
        bullets: [
          'If a system at equilibrium is disturbed, the position of equilibrium shifts to OPPOSE the change:',
          'Temperature: INCREASING temperature shifts equilibrium in the ENDOTHERMIC direction (absorbs added heat); DECREASING temperature shifts in the EXOTHERMIC direction.',
          'Pressure (gases only): INCREASING pressure shifts equilibrium to the side with FEWER MOLES OF GAS; DECREASING pressure shifts to the side with MORE MOLES OF GAS.',
          'Concentration: adding a reactant shifts equilibrium right (to consume it); removing a product shifts right (to replace it). Adding a CATALYST speeds up both forward and reverse rates equally — it reaches equilibrium FASTER with NO change in equilibrium position/yield.',
        ],
      },
      {
        id: 'igchem-6-2-c3',
        title: 'Industrial Compromise Conditions: Haber & Contact Processes',
        summary: 'Compromise industrial conditions and catalysts for the Haber (NH₃) and Contact (H₂SO₄) processes.',
        bullets: [
          'Haber Process (**Ammonia**): N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (forward exothermic; 4 gas moles → 2 gas moles). Sources: N₂ from air, H₂ from natural gas (methane + steam).',
          'Haber conditions: 450 °C (compromise — lower temp gives higher yield but too slow a rate), 200 atm (high pressure boosts yield & rate without dangerously thick, expensive pipes), Iron catalyst.',
          'Contact Process (Sulfuric acid): S + O₂ → SO₂; key reversible step: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (forward exothermic; 3 gas moles → 2 gas moles).',
          'Contact conditions: 450 °C (compromise between rate and exothermic yield), 2 atm (already >99% conversion so higher pressure wastes money), Vanadium(V) oxide (V₂O₅) catalyst.',
        ],
        memoryAid: 'Both Haber and Contact use 450 °C! Haber uses 200 atm + Fe; Contact uses 2 atm + V₂O₅.',
      },
    ],
    keyTerms: [
      { term: 'Reversible reaction', definition: 'Chemical reaction in which products can react back to reform the original reactants (⇌).' },
      { term: 'Closed system', definition: 'System in which matter cannot enter or escape, allowing dynamic equilibrium to be established.' },
      { term: 'Haber process', definition: 'Industrial manufacture of ammonia from nitrogen and hydrogen at 450 °C, 200 atm, and Fe catalyst.' },
      { term: 'Contact process', definition: 'Industrial manufacture of sulfuric acid via 2SO₂ + O₂ ⇌ 2SO₃ at 450 °C, 2 atm, and V₂O₅ catalyst.' },
    ],
    checklistPoints: [
      'I can state the two defining conditions of dynamic equilibrium in a closed system.',
      'I can predict equilibrium shifts caused by changing temperature, pressure, concentration, or adding a catalyst.',
      'I can recall equations, raw materials, catalysts, and compromise temperature/pressure justifications for both the Haber and Contact processes.',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Acids & Bases', cardId: 'igchem-7-1-c1' },
      { time: '1:26', seconds: 86, label: 'How to Measure pH & Indicators', cardId: 'igchem-7-1-c1' },
      { time: '2:47', seconds: 167, label: 'Defining Acids, Bases & Neutralisation', cardId: 'igchem-7-1-c2' },
      { time: '4:33', seconds: 273, label: 'Common Acids, Bases & Salt Preparation', cardId: 'igchem-7-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-7-1-c1',
        title: 'Acids, Bases, Strong vs Weak & Indicators',
        summary: 'Proton donor/acceptor definitions, strong vs weak dissociation, neutralisation, and indicator colours.',
        bullets: [
          'Acids are PROTON DONORS (release H⁺ ions in aqueous solution, pH < 7); bases are PROTON ACCEPTORS (metal oxides/hydroxides; soluble bases are alkalis releasing OH⁻ ions, pH > 7).',
          'Neutralisation ionic equation for ANY acid + alkali: H⁺(aq) + OH⁻(aq) → H₂O(l).',
          '**Strong acids** (HCl, H₂SO₄, HNO₃) COMPLETELY dissociate into H⁺ ions in water (HCl → H⁺ + Cl⁻); **weak acids** (ethanoic acid CH₃COOH) only PARTIALLY dissociate (CH₃COOH ⇌ H⁺ + CH₃COO⁻) so have a higher pH at equal concentration.',
          'Indicators: Litmus (red in acid / blue in alkali), Thymolphthalein (colourless in acid / blue in alkali), Methyl orange (red in acid / yellow in alkali).',
        ],
        glossaryPills: [
          { term: 'dissociate', definition: 'Splitting of acid molecules into separate aqueous hydrogen ions (H⁺) and anions when dissolved in water.' },
        ],
        commonMistake: 'Do not confuse STRONG vs WEAK (degree of ionisation) with CONCENTRATED vs DILUTE (moles of acid per dm³ of water)! You can have dilute strong HCl or concentrated weak ethanoic acid.',
      },
      {
        id: 'igchem-7-1-c2',
        title: 'Classification of Oxides & Acid Reactions',
        summary: 'Core acid equations and classifying oxides as basic, acidic, or amphoteric (Al₂O₃ and ZnO).',
        bullets: [
          'Core acid reactions: Acid + Metal → Salt + H₂; Acid + Base → Salt + H₂O; Acid + Carbonate → Salt + H₂O + CO₂. Base + Ammonium salt (+ warm) → Salt + H₂O + NH₃ gas.',
          '**Basic oxides** (metal oxides, e.g., CuO, CaO, Na₂O): react with acids to form salt + water.',
          '**Acidic oxides** (non-metal oxides, e.g., SO₂, CO₂, NO₂): react with alkalis/bases to form salt + water.',
          'Amphoteric oxides (e.g., aluminium oxide Al₂O₃ and zinc oxide ZnO): react with BOTH acids AND alkalis to form salts and water!',
        ],
        glossaryPills: [
          { term: 'amphoteric', definition: 'An oxide (such as Al₂O₃ or ZnO) capable of reacting with both acids and alkalis to form a salt and water.' },
        ],
        memoryAid: 'Remember the two IGCSE amphoteric oxides as "Al & Zn" (Aluminium oxide & Zinc oxide).',
      },
      {
        id: 'igchem-7-1-c3',
        title: 'Solubility Rules & Three Methods of Salt Preparation',
        summary: 'Solubility rules and choosing excess solid, titration, or precipitation to prepare pure dry salts.',
        bullets: [
          'Solubility rules: ALL sodium, potassium, ammonium, and nitrate salts are SOLUBLE. Chlorides are soluble EXCEPT silver & lead(II) chloride. Sulfates are soluble EXCEPT barium, calcium & lead(II) sulfate. Carbonates & hydroxides are insoluble EXCEPT Na⁺, K⁺, NH₄⁺.',
          'Method 1 — Soluble salt (not Na/K/NH₄, e.g., CuSO₄): warm acid + EXCESS insoluble metal oxide/carbonate/metal → filter off unreacted excess solid → evaporate filtrate to crystallisation point → cool, filter crystals, dry.',
          'Method 2 — Soluble Na/K/NH₄ salt (e.g., NaCl): acid-alkali TITRATION using burette, pipette & indicator to find exact neutralisation volume → repeat WITHOUT indicator → evaporate & crystallise.',
          'Method 3 — Insoluble salt (e.g., BaSO₄ or AgCl): **PRECIPITATION** — mix two aqueous solutions containing the required ions (e.g., AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)) → filter precipitate → wash with distilled water → dry in warm oven.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Strong acid', definition: 'Acid that completely dissociates into H⁺ ions in aqueous solution (e.g., HCl, H₂SO₄).' },
      { term: 'Weak acid', definition: 'Acid that only partially dissociates in aqueous solution (e.g., ethanoic acid).' },
      { term: 'Amphoteric oxide', definition: 'Oxide such as Al₂O₃ or ZnO that reacts with both acids and alkalis.' },
      { term: 'Precipitation', definition: 'Formation of an insoluble solid salt when two aqueous salt solutions are mixed.' },
    ],
    checklistPoints: [
      'I can define acids/bases via proton transfer and distinguish strong vs weak acids.',
      'I can classify metal and non-metal oxides as basic, acidic, or amphoteric (Al₂O₃, ZnO).',
      'I can apply solubility rules to select excess-solid, titration, or precipitation for preparing any pure dry salt.',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Laboratory Gas Tests', cardId: 'igchem-7-2-c3' },
      { time: '1:27', seconds: 87, label: 'Test for Oxygen (Glowing Splint)', cardId: 'igchem-7-2-c3' },
      { time: '1:58', seconds: 118, label: 'Test for Hydrogen (Squeaky Pop)', cardId: 'igchem-7-2-c3' },
      { time: '3:09', seconds: 189, label: 'CO₂, Chlorine & Full Qualitative Recap', cardId: 'igchem-7-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-7-2-c1',
        title: 'Flame Tests & Aqueous Cation Tests (NaOH & NH₃)',
        summary: 'Identifying metal cations using flame colours and aqueous NaOH / NH₃ precipitate tests.',
        bullets: [
          '**Flame tests** (clean nichrome/platinum wire dipped in concentrated HCl then sample, held in roaring blue Bunsen flame): Li⁺ = red, Na⁺ = yellow, K⁺ = lilac, Ca²⁺ = orange-red, Ba²⁺ = light green, Cu²⁺ = blue-green.',
          'Coloured hydroxide precipitates with NaOH(aq): Cu²⁺ → light blue precipitate; Fe²⁺ → green precipitate (turns brown at surface); Fe³⁺ → red-brown precipitate; Cr³⁺ → grey-green precipitate (redissolves in excess NaOH to dark green solution).',
          'White precipitates with NaOH(aq): Al³⁺, Zn²⁺, and Ca²⁺ all give white precipitates. Adding EXCESS NaOH dissolves Al³⁺ and Zn²⁺ (colourless solution), leaving Ca²⁺ insoluble. Using excess aqueous AMMONIA (NH₃) distinguishes Al³⁺ (insoluble) from Zn²⁺ (dissolves to colourless solution) and gives Cu²⁺ a deep dark-blue solution.',
          'Ammonium ions (NH₄⁺): warm with NaOH(aq) → ammonia gas (NH₃) released, turning damp red litmus paper BLUE.',
        ],
        glossaryPills: [
          { term: 'precipitate', definition: 'An insoluble solid formed immediately inside a solution during a chemical reaction.' },
        ],
        memoryAid: 'White precipitates dissolving in excess: "Al & Zn dissolve in NaOH; ONLY Zn dissolves in excess NH₃"!',
      },
      {
        id: 'igchem-7-2-c2',
        title: 'Anion Tests (Carbonate, Halides, Sulfate, Nitrate, Sulfite)',
        summary: 'Testing for carbonate, chloride, bromide, iodide, sulfate, nitrate, and sulfite anions.',
        bullets: [
          'Carbonate (CO₃²⁻): add dilute acid → effervescence; gas turns limewater milky/cloudy (CO₂).',
          'Halides (Cl⁻, Br⁻, I⁻): acidify with dilute NITRIC ACID (HNO₃ — removes interfering carbonate ions), then add aqueous silver nitrate (AgNO₃): Cl⁻ → white ppt (AgCl); Br⁻ → cream ppt (AgBr); I⁻ → yellow ppt (AgI).',
          'Sulfate (SO₄²⁻): acidify with dilute HCl or HNO₃, then add aqueous barium nitrate/chloride → thick WHITE precipitate of BaSO₄.',
          'Nitrate (NO₃⁻): add aqueous NaOH + aluminium foil and warm gently → ammonia gas evolved (turns damp red litmus blue). Sulfite (SO₃²⁻): warm with dilute acid → SO₂ gas decolourises acidified purple KMnO₄.',
        ],
        commonMistake: 'NEVER acidify a halide test with HCl or a sulfate test with H₂SO₄ — adding HCl introduces Cl⁻ ions (giving a false white AgCl precipitate) and adding H₂SO₄ introduces SO₄²⁻ ions!',
      },
      {
        id: 'igchem-7-2-c3',
        title: 'Six Essential IGCSE Gas Tests',
        summary: 'Positive laboratory tests for hydrogen, oxygen, carbon dioxide, chlorine, ammonia, and SO₂.',
        bullets: [
          '**Hydrogen** (H₂): lighted splint burns with a squeaky "pop".',
          '**Oxygen** (O₂): relights a glowing wooden splint.',
          '**Carbon dioxide** (CO₂): turns limewater (aqueous Ca(OH)₂) milky/cloudy white.',
          '**Chlorine** (Cl₂): bleaches damp blue litmus paper white (turns red briefly then bleaches white).',
          '**Ammonia** (NH₃): turns damp red litmus paper blue (pungent alkaline gas).',
          '**Sulfur dioxide** (SO₂): turns acidified aqueous potassium manganate(VII) from purple to colourless.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Flame test', definition: 'Qualitative test identifying metal ions from the characteristic coloured flame emitted when heated.' },
      { term: 'Limewater', definition: 'Aqueous calcium hydroxide solution that turns milky/cloudy in the presence of CO₂.' },
      { term: 'Effervescence', definition: 'Rapid fizzing caused by gas bubbles being produced in a liquid.' },
    ],
    checklistPoints: [
      'I can recall all six IGCSE flame colours and how to clean a wire loop with HCl.',
      'I can identify Cu²⁺, Fe²⁺, Fe³⁺, Cr³⁺, Al³⁺, Zn²⁺, Ca²⁺, and NH₄⁺ using NaOH(aq) and NH₃(aq) including excess behaviour.',
      'I can explain why nitric acid is added before AgNO₃ and state precipitate colours for Cl⁻, Br⁻, I⁻, and SO₄²⁻.',
      'I can state the positive laboratory test for H₂, O₂, CO₂, Cl₂, NH₃, and SO₂.',
    ],
  },

  'igchem-8-1': {
    subtopicId: 'igchem-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Periodic Table: Groups I, VII, VIII & Transition Metals',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Group 7 & Group 0 Elements - Halogens & Noble Gases | Properties | Trends',
    youtubeId: 'uYubwlPRdCs',
    videoChannel: 'Cognito',
    videoDuration: '5:18',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Periodic Groups', cardId: 'igchem-8-1-c1' },
      { time: '1:05', seconds: 65, label: 'Covalent Bonding & Trends in Halogens', cardId: 'igchem-8-1-c2' },
      { time: '3:18', seconds: 198, label: 'Halogen Displacement Reactions', cardId: 'igchem-8-1-c2' },
      { time: '4:38', seconds: 278, label: 'Trends in the Noble Gases (Group VIII)', cardId: 'igchem-8-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-8-1-c1',
        title: 'Group I Alkali Metals',
        summary: 'Softness, water reactions, and increasing reactivity down Group I alkali metals.',
        bullets: [
          '**Group I** metals (Li, Na, K, Rb) are soft (easily cut with a knife), have low densities (Li, Na, K float on water), and low melting points that DECREASE down the group.',
          'They react vigorously with water to form an alkaline metal hydroxide and hydrogen gas: 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g). Potassium melts into a ball and burns with a lilac flame.',
          'Reactivity INCREASES down **Group I** because atomic radius increases with more electron shells, increasing shielding and weakening nuclear attraction to the single outer electron — so it is LOST MORE EASILY.',
        ],
      },
      {
        id: 'igchem-8-1-c2',
        title: 'Group VII Halogens & Displacement Reactions',
        summary: 'Diatomic trends, decreasing reactivity down Group VII halogens, and displacement equations.',
        bullets: [
          'Halogens exist as diatomic covalent molecules (Cl₂, Br₂, I₂). Going DOWN **Group VII**: colour gets darker, density and boiling point INCREASE (Cl₂ = pale yellow-green gas; Br₂ = red-brown liquid; I₂ = grey-black solid / purple vapour) because larger molecules have stronger intermolecular forces.',
          'Reactivity DECREASES down **Group VII** because more electron shells increase distance and shielding, making it HARDER for the nucleus to attract an incoming outer electron.',
          'Halogen displacement: a MORE reactive halogen displaces a LESS reactive halide ion from aqueous solution — e.g., Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq) (solution turns orange-brown); Cl₂ + 2KI → 2KCl + I₂ (turns brown). Ionic redox: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂.',
        ],
        glossaryPills: [
          { term: 'diatomic', definition: 'Molecules made up of two atoms covalently bonded together (such as Cl₂, Br₂, I₂, O₂, H₂).' },
        ],
      },
      {
        id: 'igchem-8-1-c3',
        title: 'Transition Metals & Group VIII Noble Gases',
        summary: 'Coloured compounds, variable oxidation states, and catalytic transition metals vs inert noble gases.',
        bullets: [
          'Transition elements (central d-block metals: Fe, Cu, Cr, Mn, V) have HIGH densities, HIGH melting points, form COLOURED compounds (e.g., blue CuSO₄, green FeSO₄, brown FeCl₃), exhibit VARIABLE OXIDATION NUMBERS (Fe²⁺ and Fe³⁺), and act as industrial CATALYSTS (Fe in Haber, V₂O₅ in Contact, Ni in hydrogenation).',
          '**Group VIII** (0) noble gases (He, Ne, Ar) are monatomic, colourless, and chemically UNREACTIVE because they have stable full outer electron shells (uses: He in balloons, Ar inert atmosphere in light bulbs/welding).',
        ],
        glossaryPills: [
          { term: 'monatomic', definition: 'Existing as single unbonded atoms rather than molecules (characteristic of Group VIII noble gases).' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Alkali metals', definition: 'Soft, reactive Group I metals forming +1 ions and alkaline hydroxides with water.' },
      { term: 'Halogens', definition: 'Diatomic Group VII non-metals forming −1 halide ions whose reactivity decreases down the group.' },
      { term: 'Transition element', definition: 'High-density central block metal forming coloured compounds, variable oxidation states, and effective catalysts.' },
      { term: 'Noble gas', definition: 'Unreactive monatomic Group VIII gas with a full outer electron shell.' },
    ],
    checklistPoints: [
      'I can explain opposing reactivity trends down Group I (increases) and Group VII (decreases) using shells, distance, and nuclear attraction.',
      'I can predict halogen displacement observations and write ionic equations.',
      'I can state four distinctive properties of transition metals and explain why noble gases are inert.',
    ],
  },

  'igchem-8-2': {
    subtopicId: 'igchem-8-2',
    subtopicCode: '8.2',
    subtopicTitle: 'Reactivity Series, Extraction of Iron & Aluminium & Rusting',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - The Reactivity Series - Metal Reactions | Displacement Reactions',
    youtubeId: 'NBw5s7cuwMc',
    videoChannel: 'Cognito',
    videoDuration: '4:28',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Metals', cardId: 'igchem-8-2-c1' },
      { time: '0:25', seconds: 25, label: 'What is the Reactivity Series?', cardId: 'igchem-8-2-c1' },
      { time: '2:52', seconds: 172, label: 'Reactions with Water & Extraction', cardId: 'igchem-8-2-c2' },
      { time: '3:21', seconds: 201, label: 'Displacement Reactions & Sacrificial Protection', cardId: 'igchem-8-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-8-2-c1',
        title: 'Reactivity Series & Aluminium’s Unreactive Oxide Layer',
        summary: 'Ordering metals by tendency to lose electrons, displacement redox, and aluminium’s oxide layer.',
        bullets: [
          'Order from most to least reactive: K > Na > Ca > Mg > Al > [Carbon] > Zn > Fe > [**Hydrogen**] > Cu > Ag > Au.',
          'Higher reactivity means a stronger tendency to LOSE **electrons** and form positive ions. A more reactive metal displaces a less reactive metal from its aqueous salt or heated oxide (e.g., Zn + CuSO₄ → ZnSO₄ + Cu — Zn is oxidised, Cu²⁺ is reduced).',
          'Aluminium appears less reactive than its true position because its surface is sealed by a thin, tough, impermeable protective layer of aluminium oxide (Al₂O₃).',
        ],
        memoryAid: '"Please Stop Calling Me A Careless Zebra Instead Try Learning How Copper Saves Gold" (K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, H, Cu, Ag, Au).',
      },
      {
        id: 'igchem-8-2-c2',
        title: 'Blast Furnace (Iron) vs Electrolysis (Aluminium)',
        summary: 'Blast furnace reduction of iron ore with CO vs Hall-Héroult electrolysis of bauxite in cryolite.',
        bullets: [
          'Metals BELOW carbon (Zn, Fe) are extracted economically by reduction with carbon; metals ABOVE carbon (Al, Mg, Na) require expensive electrolysis of molten ores.',
          '**Blast Furnace** (**haematite** ore Fe₂O₃ + coke C + limestone CaCO₃ + hot air blast): (1) C + O₂ → CO₂ (exothermic heat); (2) CO₂ + C → 2CO (forms reducing agent); (3) Fe₂O₃ + 3CO → 2Fe + 3CO₂ (reduces iron oxide to molten iron).',
          'Limestone removes acidic silicon(IV) oxide (sand) impurity: CaCO₃ → CaO + CO₂, then CaO + SiO₂ → CaSiO₃ (molten calcium silicate slag floating on iron).',
          'Aluminium extraction (Hall-Héroult cell): purified **bauxite** (Al₂O₃) is dissolved in molten CRYOLITE (lowers melting point from ~2,050 °C to ~950 °C, saving huge energy, and improves conductivity). Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻. Hot oxygen reacts with the carbon anodes (C + O₂ → CO₂), so carbon anodes burn away and must be replaced periodically.',
        ],
        glossaryPills: [
          { term: 'cryolite', definition: 'Molten mineral solvent mixed with aluminium oxide to lower its operating temperature and boost electrical conductivity.' },
        ],
        commonMistake: 'In the Blast Furnace, remember the MAIN reducing agent is CARBON MONOXIDE (CO), and in aluminium electrolysis remember the CARBON ANODES (not cathodes!) burn away to CO₂.',
      },
      {
        id: 'igchem-8-2-c3',
        title: 'Rusting of Iron & Sacrificial Protection',
        summary: 'Conditions for iron rusting and how galvanising protects scratched steel sacrificially.',
        bullets: [
          '**Rusting** specifically refers to the oxidation of iron to hydrated iron(III) oxide and requires BOTH OXYGEN and WATER (accelerated by salt).',
          'Barrier methods (painting, oiling/greasing, plastic coating) exclude air and water, but fail once scratched.',
          'Galvanising (coating iron with zinc) and sacrificial protection (attaching zinc or magnesium blocks to steel ship hulls/pipes) keep protecting iron EVEN WHEN SCRATCHED: because zinc is MORE REACTIVE than iron, zinc loses electrons preferentially and oxidises instead of iron (Zn → Zn²⁺ + 2e⁻).',
        ],
        glossaryPills: [
          { term: 'sacrificial protection', definition: 'Attaching a more reactive metal (such as zinc or magnesium) to steel so it oxidises preferentially, preventing the iron from rusting.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Haematite', definition: 'Main iron ore consisting primarily of iron(III) oxide (Fe₂O₃).' },
      { term: 'Bauxite', definition: 'Main aluminium ore purified to obtain aluminium oxide (Al₂O₃).' },
      { term: 'Cryolite', definition: 'Solvent used to dissolve Al₂O₃ at ~950 °C, cutting energy costs during aluminium electrolysis.' },
      { term: 'Galvanising', definition: 'Coating steel or iron with zinc to provide both a physical barrier and sacrificial protection.' },
    ],
    checklistPoints: [
      'I can explain reactivity order in terms of ease of forming positive ions and explain aluminium’s oxide layer.',
      'I can write all five balanced equations for the Blast Furnace (including limestone slag removal).',
      'I can explain the role of cryolite, write Al³⁺/O²⁻ half-equations, and explain why carbon anodes need replacing.',
      'I can explain why galvanising protects scratched steel via sacrificial electron loss by zinc.',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Crude Oil & Cracking', cardId: 'igchem-9-1-c1' },
      { time: '1:18', seconds: 78, label: 'Types of Cracking (Catalytic & Steam)', cardId: 'igchem-9-1-c2' },
      { time: '3:36', seconds: 216, label: 'Worked Cracking Equation Example', cardId: 'igchem-9-1-c2' },
      { time: '5:32', seconds: 332, label: 'Properties of Alkenes & Bromine Test', cardId: 'igchem-9-1-c3' },
    ],
    cards: [
      {
        id: 'igchem-9-1-c1',
        title: 'Homologous Series, Isomers & Petroleum Fractions',
        summary: 'Homologous series, structural isomerism, and separating petroleum fractions by boiling point.',
        bullets: [
          'A homologous series is a family of organic compounds with the same functional group, same general formula, consecutive members differing by CH₂, similar chemical properties, and a smooth trend in physical properties.',
          'Structural isomers have the SAME molecular formula but DIFFERENT structural formulae (e.g., but-1-ene and but-2-ene, or propan-1-ol and propan-2-ol).',
          'Fractional distillation separates petroleum (a mixture of hydrocarbons) in a tower hotter at the bottom and cooler at the top: small molecules have weak **intermolecular forces** → low boiling points, low viscosity, high volatility → condense near the top.',
          'Fractions top → bottom: Refinery gas (bottled gas) → Gasoline/petrol (cars) → Naphtha (chemical feedstock) → Kerosene/paraffin (jet fuel) → Diesel (lorries) → Fuel oil (ships) → Lubricating oil → Bitumen (road surfacing).',
        ],
        glossaryPills: [
          { term: 'homologous series', definition: 'Family of organic compounds sharing the same functional group and general formula, differing by CH₂ per step.' },
          { term: 'structural isomers', definition: 'Compounds having the exact same molecular formula but different arrangements of bonded atoms.' },
        ],
      },
      {
        id: 'igchem-9-1-c2',
        title: 'Alkanes & Catalytic Cracking',
        summary: 'Saturated alkane combustion, UV photochemical substitution, and catalytic cracking.',
        bullets: [
          '**Alkanes** (general formula CₙH₂ₙ₊₂: methane, ethane, propane, butane) are SATURATED hydrocarbons containing only C–C and C–H single covalent bonds.',
          '**Alkanes** are generally unreactive except for: (1) Complete combustion (→ CO₂ + H₂O) or incomplete combustion (→ toxic CO + soot C); (2) Photochemical SUBSTITUTION with chlorine in UV light (e.g., CH₄ + Cl₂ → CH₃Cl + HCl).',
          '**Cracking** breaks less-useful long-chain alkanes into high-demand shorter alkanes (fuels) plus reactive ALKENES (monomers for plastics) using high temperature (~600–700 °C) and an aluminium oxide/silicate catalyst (e.g., C₁₀H₂₂ → C₈H₁₈ + C₂H₄).',
        ],
      },
      {
        id: 'igchem-9-1-c3',
        title: 'Alkenes, Bromine Water Test & Addition Reactions',
        summary: 'Unsaturated C=C alkenes, bromine water decolourisation, and addition with Br₂, H₂, and steam.',
        bullets: [
          'Alkenes (general formula CₙH₂ₙ: ethene, propene, butene) are UNSATURATED hydrocarbons containing at least one reactive C=C double covalent bond.',
          'Test for unsaturation (C=C): shake with aqueous **BROMINE WATER** — alkenes rapidly DECOLOURISE bromine water from ORANGE-BROWN to COLOURLESS; alkanes leave bromine water orange-brown.',
          'Alkenes undergo ADDITION reactions where the C=C opens to form a single product: (1) + Br₂ → dibromoalkane; (2) + H₂ (Ni catalyst, 150–200 °C) → alkane (hydrogenation); (3) + H₂O(g) steam (300 °C, 60 atm, H₃PO₄ catalyst) → alcohol (hydration).',
        ],
        commonMistake: 'For the bromine water test, ALWAYS write "orange-brown to COLOURLESS" — NEVER write "clear" (an orange solution is already transparent/clear!).',
      },
    ],
    keyTerms: [
      { term: 'Hydrocarbon', definition: 'Compound containing ONLY hydrogen and carbon atoms.' },
      { term: 'Alkane', definition: 'Saturated hydrocarbon containing only single C–C bonds (general formula CₙH₂ₙ₊₂).' },
      { term: 'Alkene', definition: 'Unsaturated hydrocarbon containing a C=C double bond (general formula CₙH₂ₙ).' },
      { term: 'Cracking', definition: 'Thermal catalytic breakdown of long-chain alkanes into shorter alkanes and alkenes.' },
    ],
    checklistPoints: [
      'I can name fractions of petroleum top-to-bottom along with boiling point, chain length, viscosity, and uses.',
      'I can distinguish saturated alkanes from unsaturated alkenes using the bromine water colour change (orange-brown → colourless).',
      'I can write equations for alkane UV substitution, catalytic cracking, and alkene addition with Br₂, H₂, and steam.',
    ],
  },

  'igchem-9-2': {
    subtopicId: 'igchem-9-2',
    subtopicCode: '9.2',
    subtopicTitle: 'Alcohols, Carboxylic Acids, Esters & Polymers',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Addition Polymers & Polymerisation',
    youtubeId: '1ZUg6ZC3ltA',
    videoChannel: 'Cognito',
    videoDuration: '7:11',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Polymerisation', cardId: 'igchem-9-2-c3' },
      { time: '1:08', seconds: 68, label: 'Representing Polymerisation (Full Structure)', cardId: 'igchem-9-2-c3' },
      { time: '2:06', seconds: 126, label: 'How to Draw Monomers & Repeating Units', cardId: 'igchem-9-2-c3' },
      { time: '6:30', seconds: 390, label: 'Reaction Conditions & Condensation Links', cardId: 'igchem-9-2-c3' },
    ],
    cards: [
      {
        id: 'igchem-9-2-c1',
        title: 'Alcohols: Two Routes to Ethanol',
        summary: 'Comparing glucose fermentation with catalytic hydration of ethene for making ethanol.',
        bullets: [
          'Alcohols carry the –OH functional group (CₙH₂ₙ₊₁OH: methanol, ethanol, propanol, butanol). Ethanol is used as a solvent and biofuel (burns cleanly: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O).',
          'Route 1 — **Fermentation** of aqueous glucose with yeast (anaerobic, 25–35 °C): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Pros: renewable crops, low energy/temperature. Cons: slow batch process, impure dilute ethanol needing **fractional distillation**.',
          'Route 2 — Catalytic addition of steam to ethene (300 °C, 60 atm, H₃PO₄ **catalyst**): C₂H₄ + H₂O → C₂H₅OH. Pros: fast continuous process, 100% pure ethanol, no waste gas. Cons: non-renewable crude oil feedstock, high energy cost.',
        ],
      },
      {
        id: 'igchem-9-2-c2',
        title: 'Carboxylic Acids & Esters',
        summary: 'Weak carboxylic acids, oxidation of ethanol, and naming fruity esters from esterification.',
        bullets: [
          '**Carboxylic acids** carry the –COOH functional group (methanoic, ethanoic, propanoic, butanoic acid). They are WEAK acids reacting with metals, bases, and carbonates to form –oate salts (e.g., sodium ethanoate).',
          'Ethanoic acid is produced by oxidising ethanol either with atmospheric oxygen (bacterial fermentation to vinegar) or by heating with acidified potassium manganate(VII) (purple → colourless).',
          'Esterification: Alcohol + Carboxylic acid ⇌ Ester + Water (heated with concentrated H₂SO₄ acid catalyst). E.g., ethanol + ethanoic acid ⇌ ethyl ethanoate + water. Esters have fruity smells used in flavourings and perfumes.',
        ],
        glossaryPills: [
          { term: 'esterification', definition: 'Reversible condensation reaction between an alcohol and a carboxylic acid using an acid catalyst to produce a sweet-smelling ester and water.' },
        ],
        memoryAid: 'Naming esters: the ALCOHOL gives the "-yl" first name (ethanol → ethyl) and the CARBOXYLIC ACID gives the "-oate" surname (ethanoic acid → ethanoate)!',
      },
      {
        id: 'igchem-9-2-c3',
        title: 'Addition Polymers vs Condensation Polymers',
        summary: 'Addition poly(ethene) repeat units vs condensation polyamides (nylon), polyesters (PET), and plastics.',
        bullets: [
          'Addition polymerisation joins thousands of unsaturated alkene monomers by opening their C=C double bonds to form a single polymer chain with NO other product (e.g., n C₂H₄ → poly(ethene)).',
          'Condensation polymerisation joins dicarboxylic acids with diols or diamines, eliminating a small molecule (WATER) at every linkage:',
          'Polyamides (e.g., Nylon) link via amide bonds (–CONH–) between dicarboxylic acids and diamines. Polyesters (e.g., PET) link via ester bonds (–COO–) between dicarboxylic acids and diols. **Proteins** are natural polyamides built from amino acid monomers.',
          'Environmental impact of plastics: non-biodegradable addition plastics persist in landfill, pollute oceans harming wildlife, and emit toxic gases/CO₂ when incinerated (PET can be chemically depolymerised and recycled).',
        ],
        glossaryPills: [
          { term: 'condensation polymerisation', definition: 'Joining of monomers with two functional groups into long polymer chains while eliminating a small molecule such as water at each bond.' },
        ],
        commonMistake: 'When drawing the repeat unit of an addition polymer, NEVER include a C=C double bond inside the square brackets — it opens into a single C–C bond with two trailing extension bonds crossing the brackets!',
      },
    ],
    keyTerms: [
      { term: 'Fermentation', definition: 'Anaerobic breakdown of glucose by yeast enzymes at 25–35 °C to form ethanol and CO₂.' },
      { term: 'Ester', definition: 'Sweet-smelling organic compound containing the –COO– linkage formed from an alcohol and carboxylic acid.' },
      { term: 'Addition polymer', definition: 'Long-chain polymer built from unsaturated alkene monomers with no by-product formed.' },
      { term: 'Polyamide', definition: 'Condensation polymer (such as nylon or protein) whose monomers are linked by –CONH– amide bonds.' },
      { term: 'Polyester', definition: 'Condensation polymer (such as PET) whose monomers are linked by –COO– ester bonds.' },
    ],
    checklistPoints: [
      'I can compare fermentation and ethene hydration for manufacturing ethanol in terms of speed, purity, energy, and renewability.',
      'I can write equations for ethanol oxidation and name/draw esters such as ethyl ethanoate.',
      'I can draw monomer-to-polymer repeat units for addition polymers, nylon (polyamide), and PET (polyester).',
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
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Potable Water', cardId: 'igchem-10-1-c1' },
      { time: '1:16', seconds: 76, label: 'Sources of Fresh Water & Filtration', cardId: 'igchem-10-1-c1' },
      { time: '2:56', seconds: 176, label: 'Sterilisation of Fresh Water', cardId: 'igchem-10-1-c1' },
      { time: '4:20', seconds: 260, label: 'Desalination by Reverse Osmosis', cardId: 'igchem-10-1-c1' },
    ],
    cards: [
      {
        id: 'igchem-10-1-c1',
        title: 'Testing Water, Potable Water Treatment & NPK Fertilisers',
        summary: 'Anhydrous CuSO₄/CoCl₂ water tests, freshwater chlorination, and NPK agricultural fertilisers.',
        bullets: [
          'Chemical tests for presence of water: anhydrous copper(II) sulfate turns WHITE → BLUE; anhydrous cobalt(II) chloride turns BLUE → PINK. Purity of water is confirmed by measuring melting point (0 °C) and boiling point (100 °C).',
          'Treating domestic freshwater: (1) Sedimentation and filtration (sand/gravel beds) remove insoluble solids; (2) Activated carbon removes unpleasant tastes and odours; (3) Chlorination kills harmful microbes.',
          '**NPK fertilisers** supply Nitrogen (ammonium salts/nitrates for proteins & leaf growth), Phosphorus (phosphates for root growth), and Potassium (potassium compounds for flowering/fruiting) to maximise crop yields.',
        ],
        glossaryPills: [
          { term: 'chlorination', definition: 'Addition of small controlled quantities of chlorine gas to drinking water to kill pathogenic bacteria and microbes.' },
        ],
      },
      {
        id: 'igchem-10-1-c2',
        title: 'Clean Air Composition & Major Air Pollutants',
        summary: 'Clean air composition, toxic CO/SO₂/NOₓ pollutants, flue gas desulfurisation, and catalytic converters.',
        bullets: [
          'Clean dry air contains ~78% nitrogen (N₂), ~21% oxygen (O₂), ~0.9% argon (noble gases), and ~0.04% carbon dioxide (CO₂).',
          '**Carbon monoxide** (CO) from incomplete combustion of fossil fuels binds irreversibly to haemoglobin, preventing O₂ transport (toxic). Particulates (soot) cause respiratory illness and global dimming.',
          '**Sulfur dioxide** (SO₂) from burning sulfur-containing coal/oil and oxides of nitrogen (NOₓ) from high-temperature car engines dissolve in rainwater to form ACID RAIN (corrodes limestone buildings, kills aquatic life and trees).',
          'Mitigation: flue gas desulfurisation neutralises SO₂ in power stations using calcium oxide/carbonate; car catalytic converters convert toxic CO and NO into harmless N₂ and CO₂: 2CO + 2NO → 2CO₂ + N₂.',
        ],
        glossaryPills: [
          { term: 'catalytic converter', definition: 'Honeycomb platinum/rhodium car exhaust unit catalysing conversion of toxic CO and NO into harmless CO₂ and N₂.' },
        ],
      },
      {
        id: 'igchem-10-1-c3',
        title: 'Greenhouse Gases & Enhanced Global Warming',
        summary: 'Infrared radiation trapping by CO₂ and CH₄ driving enhanced global warming and mitigation options.',
        bullets: [
          'Key greenhouse gases: **Carbon dioxide** (CO₂ — fossil fuel combustion & deforestation) and Methane (CH₄ — cattle digestion, rice paddies, decomposing landfill waste).',
          'Mechanism: short-wavelength solar radiation passes through the atmosphere and warms Earth’s surface; Earth re-emits longer-wavelength thermal (infrared) radiation, which greenhouse gas molecules ABSORB and RE-EMIT in all directions, trapping heat in the lower atmosphere.',
          'Higher greenhouse gas concentrations cause climate change: melting polar ice, rising sea levels, extreme droughts/storms, and habitat loss. Strategies include renewable energy (solar/wind), hydrogen vehicles, tree planting, and reducing livestock methane.',
        ],
        commonMistake: 'Do NOT confuse the Greenhouse Effect (trapping infrared radiation by CO₂/CH₄) with Ozone Depletion (UV radiation due to CFCs) or Acid Rain (SO₂/NOₓ) — keep all three atmospheric mechanisms strictly separate!',
      },
    ],
    keyTerms: [
      { term: 'Potable water', definition: 'Water that has been treated so it is safe for humans to drink.' },
      { term: 'Acid rain', definition: 'Rainwater acidified by dissolved SO₂ and NOₓ gases, damaging ecosystems and stonework.' },
      { term: 'Catalytic converter', definition: 'Exhaust device converting toxic CO and NO into harmless N₂ and CO₂.' },
      { term: 'Greenhouse gas', definition: 'Atmospheric gas (such as CO₂ or CH₄) that absorbs and re-emits infrared thermal radiation emitted by Earth.' },
    ],
    checklistPoints: [
      'I can state both chemical tests for water (CuSO₄ white→blue; CoCl₂ blue→pink) and the three stages of domestic water treatment.',
      'I can state the sources, harms, and mitigation methods for CO, particulates, SO₂, and NOₓ (including the 2CO + 2NO → 2CO₂ + N₂ equation).',
      'I can accurately explain the enhanced greenhouse effect using short-wavelength sunlight and re-emitted infrared radiation.',
    ],
  },
};

export const IGCSE_CHEMISTRY_QUIZZES: QuizQuestion[] = [
  {
    id: 'igchem-q1',
    subtopicId: 'igchem-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In the ammonia (Mr = 17) and hydrogen chloride (Mr = 36.5) diffusion tube experiment, where does the white ring of ammonium chloride form?',
    options: [
      'Closer to the ammonia end because NH₃ is heavier',
      'Exactly in the middle of the tube',
      'Closer to the HCl end because lighter NH₃ molecules diffuse faster',
      'Only at the outside of the glass tube',
    ],
    correctIndex: 2,
    explanation: 'Ammonia has a lower relative molecular mass (17 vs 36.5), so NH₃ molecules move faster and travel further down the tube before meeting HCl.',
  },
  {
    id: 'igchem-q2',
    subtopicId: 'igchem-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'On a paper chromatogram, a dye spot moved 3.6 cm from the pencil baseline while the solvent front moved 9.0 cm from the baseline. Calculate the Rf value.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Rf = 3.6 ÷ 9.0 = 0.40.',
      markPoints: [
        { id: 'mp1', markDescription: 'Correct substitution: 3.6 ÷ 9.0', requiredKeywordGroups: [['3.6'], ['9']] },
        { id: 'mp2', markDescription: 'Correct Rf value of 0.4', numericMatch: { value: 0.4, tolerance: 0.01 } },
      ],
    },
    explanation: 'Rf = distance moved by spot ÷ distance moved by solvent front = 3.6 ÷ 9.0 = 0.40 (no units).',
  },
  {
    id: 'igchem-q3',
    subtopicId: 'igchem-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why do isotopes of the same element (such as ³⁵Cl and ³⁷Cl) have identical chemical properties?',
    options: [
      'They have the same mass number',
      'They have the same number of neutrons',
      'They have the same number of electrons and identical outer-shell configuration',
      'They belong to Group VIII',
    ],
    correctIndex: 2,
    explanation: 'Chemical reactions depend on outer-shell electrons; isotopes share the same electron configuration.',
  },
  {
    id: 'igchem-q4',
    subtopicId: 'igchem-2-2',
    type: 'matching',
    marks: 4,
    prompt: 'Match each solid substance to its bonding and structure.',
    pairs: [
      { left: 'Sodium chloride (NaCl)', right: 'Giant ionic lattice; conducts only when molten/aqueous' },
      { left: 'Diamond (C)', right: 'Giant covalent tetrahedral (4 bonds/C); very hard insulator' },
      { left: 'Graphite (C)', right: 'Layered giant covalent (3 bonds/C); conducts via delocalised electrons' },
      { left: 'Carbon dioxide (CO₂)', right: 'Simple molecular covalent; low sublimation point' },
    ],
    explanation: 'Each structure’s physical properties follow directly from its bonding and mobile charge carriers.',
  },
  {
    id: 'igchem-q5',
    subtopicId: 'igchem-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Calculate the volume (in dm³) occupied by 0.25 moles of oxygen gas at room temperature and pressure (molar gas volume = 24 dm³).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Volume = 0.25 × 24 = 6.0 dm³.',
      markPoints: [
        { id: 'mp1', markDescription: 'Multiplies moles by 24 dm³', requiredKeywordGroups: [['24']] },
        { id: 'mp2', markDescription: 'Correct answer of 6 dm³', numericMatch: { value: 6, tolerance: 0.05 } },
      ],
    },
    explanation: 'Volume = moles × 24 dm³ = 0.25 × 24 = 6.0 dm³.',
  },
  {
    id: 'igchem-q6',
    subtopicId: 'igchem-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What products are formed at the inert electrodes during electrolysis of concentrated aqueous sodium chloride (brine)?',
    options: [
      'Sodium at cathode, oxygen at anode',
      'Hydrogen at cathode, chlorine at anode',
      'Chlorine at cathode, hydrogen at anode',
      'Sodium at cathode, chlorine at anode',
    ],
    correctIndex: 1,
    explanation: 'Sodium is more reactive than hydrogen so H₂ forms at the cathode; concentrated Cl⁻ discharges over OH⁻ to give Cl₂ at the anode.',
  },
  {
    id: 'igchem-q7',
    subtopicId: 'igchem-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the energy transfer rules for chemical bonds.',
    segments: ['Breaking reactant bonds is ', ', whereas forming new product bonds is ', '.'],
    wordBank: ['endothermic', 'exothermic', 'neutral', 'reversible'],
    answers: ['endothermic', 'exothermic'],
    explanation: 'Energy must be supplied to break bonds (endothermic) and energy is released when new bonds form (exothermic).',
  },
  {
    id: 'igchem-q8',
    subtopicId: 'igchem-6-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO accurate statements about a reversible reaction at dynamic equilibrium in a closed container.',
    options: [
      'The forward and reverse reactions have stopped completely',
      'The rate of the forward reaction equals the rate of the reverse reaction',
      'The concentrations of reactants and products remain constant',
      'Adding a catalyst shifts equilibrium towards the products',
    ],
    correctIndices: [1, 2],
    explanation: 'At dynamic equilibrium both reactions continue at equal rates so concentrations stay constant; catalysts do not shift the equilibrium position.',
  },
  {
    id: 'igchem-q9',
    subtopicId: 'igchem-7-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which pair of oxides are BOTH amphoteric (react with both acids and alkalis)?',
    options: ['CO₂ and SO₂', 'CaO and CuO', 'Al₂O₃ and ZnO', 'Na₂O and MgO'],
    correctIndex: 2,
    explanation: 'Aluminium oxide (Al₂O₃) and zinc oxide (ZnO) are the two key amphoteric oxides in IGCSE Chemistry.',
  },
  {
    id: 'igchem-q10',
    subtopicId: 'igchem-7-2',
    type: 'mcq',
    marks: 1,
    prompt: 'A salt solution is acidified with dilute nitric acid and aqueous silver nitrate is added, producing a YELLOW precipitate. Which anion is present?',
    options: ['Chloride (Cl⁻)', 'Bromide (Br⁻)', 'Iodide (I⁻)', 'Sulfate (SO₄²⁻)'],
    correctIndex: 2,
    explanation: 'With acidified AgNO₃: Cl⁻ gives white AgCl, Br⁻ gives cream AgBr, and I⁻ gives yellow AgI.',
  },
  {
    id: 'igchem-q11',
    subtopicId: 'igchem-8-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is aluminium oxide dissolved in molten cryolite before electrolysis?',
    options: [
      'To oxidise aluminium ions into oxygen',
      'To lower the melting point/operating temperature and improve conductivity',
      'To prevent carbon anodes reacting with oxygen',
      'To turn aluminium into an alloy',
    ],
    correctIndex: 1,
    explanation: 'Cryolite lowers the operating temperature from ~2,050 °C to ~950 °C, saving vast amounts of electrical energy, and increases conductivity.',
  },
  {
    id: 'igchem-q12',
    subtopicId: 'igchem-9-1',
    type: 'mcq',
    marks: 1,
    prompt: 'What is observed when propene gas (an alkene) is bubbled through aqueous bromine water?',
    options: [
      'Turns from blue to brick-red',
      'Turns from orange-brown to colourless',
      'Remains orange-brown with no change',
      'Forms a white precipitate',
    ],
    correctIndex: 1,
    explanation: 'Alkenes undergo rapid addition across their C=C double bond, decolourising orange-brown bromine water to colourless.',
  },
  {
    id: 'igchem-q13',
    subtopicId: 'igchem-9-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which ester is formed when ethanol reacts with propanoic acid in the presence of an acid catalyst?',
    options: ['Propyl ethanoate', 'Ethyl propanoate', 'Ethyl ethanoate', 'Methyl propanoate'],
    correctIndex: 1,
    explanation: 'Alcohol gives the -yl prefix (ethanol → ethyl) and carboxylic acid gives the -oate suffix (propanoic acid → propanoate).',
  },
  {
    id: 'igchem-q14',
    subtopicId: 'igchem-10-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which balanced equation occurs inside a car catalytic converter to remove toxic CO and NO?',
    options: [
      '2CO + 2NO → 2CO₂ + N₂',
      'CO + O₂ → CO₂ + NO₂',
      'SO₂ + H₂O → H₂SO₃',
      'CH₄ + 2O₂ → CO₂ + 2H₂O',
    ],
    correctIndex: 0,
    explanation: 'Catalytic converters reduce nitrogen monoxide and oxidise carbon monoxide simultaneously: 2CO + 2NO → 2CO₂ + N₂.',
  },
];

export const IGCSE_CHEMISTRY_FLASHCARDS: FlashcardItem[] = [
  { id: 'igchem-fc-1', subtopicId: 'igchem-1-1', front: 'Why does the NH₄Cl ring form closer to HCl in the NH₃ + HCl diffusion tube?', backBullets: ['NH₃ has a smaller Mr (17) than HCl (36.5)', 'Lighter NH₃ molecules move faster and diffuse further in the same time'] },
  { id: 'igchem-fc-2', subtopicId: 'igchem-1-2', front: 'State the chromatography Rf formula and why the baseline is drawn in pencil.', backBullets: ['Rf = distance moved by spot ÷ distance moved by solvent front', 'Pencil graphite is insoluble in the solvent so will not run or contaminate spots'] },
  { id: 'igchem-fc-3', subtopicId: 'igchem-2-1', front: 'Why do isotopes share identical chemical properties?', backBullets: ['They have the exact same number of electrons and identical outer-shell electron configuration'] },
  { id: 'igchem-fc-4', subtopicId: 'igchem-2-2', front: 'Why are alloys harder than pure metals?', backBullets: ['Atoms of different sizes distort the regular metal ion layers', 'Layers can no longer slide easily over each other'] },
  { id: 'igchem-fc-5', subtopicId: 'igchem-3-1', front: 'List the three core mole equations for mass, gas volume (r.t.p.), and solutions.', backBullets: ['n = m ÷ Mr', 'n = Volume(dm³) ÷ 24', 'n = concentration(mol/dm³) × Volume(dm³)'] },
  { id: 'igchem-fc-6', subtopicId: 'igchem-4-1', front: 'State the half-equations at cathode and anode for aqueous CuSO₄ using inert electrodes.', backBullets: ['Cathode (−): Cu²⁺ + 2e⁻ → Cu (pink-brown deposit)', 'Anode (+): 4OH⁻ → O₂ + 2H₂O + 4e⁻ (oxygen bubbles)'] },
  { id: 'igchem-fc-7', subtopicId: 'igchem-5-1', front: 'Write the formula linking enthalpy change (ΔH) to bond energies.', backBullets: ['ΔH = Σ(bonds broken in reactants) − Σ(bonds formed in products)', 'Negative ΔH = exothermic; Positive ΔH = endothermic'] },
  { id: 'igchem-fc-8', subtopicId: 'igchem-6-2', front: 'State the conditions for the Haber Process and Contact Process.', backBullets: ['Haber (NH₃): 450 °C, 200 atm, Iron (Fe) catalyst', 'Contact (2SO₂ + O₂ ⇌ 2SO₃): 450 °C, 2 atm, Vanadium(V) oxide (V₂O₅) catalyst'] },
  { id: 'igchem-fc-9', subtopicId: 'igchem-7-1', front: 'Distinguish between a strong acid and a weak acid.', backBullets: ['Strong acid (e.g., HCl): completely dissociates into H⁺ ions in water', 'Weak acid (e.g., CH₃COOH): only partially dissociates in water'] },
  { id: 'igchem-fc-10', subtopicId: 'igchem-7-2', front: 'How do you distinguish Al³⁺, Zn²⁺, and Ca²⁺ using NaOH(aq) and NH₃(aq)?', backBullets: ['All 3 give white precipitates with NaOH; excess NaOH dissolves Al³⁺ and Zn²⁺ (Ca²⁺ stays insoluble)', 'Excess NH₃(aq) dissolves ONLY Zn²⁺ (Al³⁺ stays insoluble)'] },
  { id: 'igchem-fc-11', subtopicId: 'igchem-8-1', front: 'List four characteristic properties of transition metals.', backBullets: ['High densities & high melting points', 'Form coloured compounds, exhibit variable oxidation numbers, and act as catalysts'] },
  { id: 'igchem-fc-12', subtopicId: 'igchem-8-2', front: 'Why must carbon anodes be replaced regularly during aluminium electrolysis?', backBullets: ['Oxygen gas produced at the hot anodes reacts with the carbon graphite', 'C + O₂ → CO₂, gradually burning the anodes away'] },
  { id: 'igchem-fc-13', subtopicId: 'igchem-9-1', front: 'Describe the chemical test distinguishing an alkene from an alkane.', backBullets: ['Shake with aqueous bromine water', 'Alkene: orange-brown → colourless; Alkane: remains orange-brown'] },
  { id: 'igchem-fc-14', subtopicId: 'igchem-9-2', front: 'Contrast addition polymerisation and condensation polymerisation.', backBullets: ['Addition: unsaturated alkene monomers join into one polymer with NO by-product', 'Condensation: two-group monomers join (e.g., nylon/PET) eliminating a small molecule like H₂O'] },
  { id: 'igchem-fc-15', subtopicId: 'igchem-10-1', front: 'Give the two chemical tests for the presence of water.', backBullets: ['Anhydrous copper(II) sulfate: white → blue', 'Anhydrous cobalt(II) chloride paper: blue → pink'] },
];

export const IGCSE_CHEMISTRY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-igchem-moles',
    slug: 'igcse-moles-and-energetics',
    title: 'Stoichiometry, Moles & Bond Energies',
    topicNumber: 3,
    topicName: 'Stoichiometry & Chemical Energetics',
    summary: 'All mole equations (mass, 24 dm³ gas, titration), empirical formula steps, and ΔH bond energy rules.',
    accentColor: '#2ea582',
    sections: [
      {
        heading: 'Core Mole Equations',
        formula: 'n = m / Mr   |   n = V(dm³) / 24   |   n = c × V(dm³)',
        points: ['Always divide cm³ by 1,000 before using dm³ equations!', 'Avogadro constant = 6.02 × 10²³ particles/mol.'],
      },
      {
        heading: 'Bond Energy Enthalpy',
        formula: 'ΔH = Σ(Reactant bonds broken) − Σ(Product bonds formed)',
        points: ['Breaking = Endothermic (+); Making = Exothermic (−).'],
      },
    ],
  },
  {
    id: 'cs-igchem-analysis',
    slug: 'igcse-qualitative-ion-and-gas-tests',
    title: 'Qualitative Analysis: Ions, Flames & Gases',
    topicNumber: 7,
    topicName: 'Acids, Bases & Chemical Analysis',
    summary: 'Complete CIE 0620 ion precipitate, flame colour, and gas identification reference sheet.',
    accentColor: '#1a96f3',
    sections: [
      {
        heading: 'Flame Colours & Anion Tests',
        points: [
          'Flames: Li⁺ red, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Ba²⁺ light green, Cu²⁺ blue-green.',
          'Acidified AgNO₃: Cl⁻ white, Br⁻ cream, I⁻ yellow. Acidified Ba(NO₃)₂: SO₄²⁻ white.',
        ],
      },
      {
        heading: 'Gas Tests',
        points: [
          'H₂ squeaky pop; O₂ relights glowing splint; CO₂ turns limewater milky.',
          'Cl₂ bleaches damp litmus; NH₃ turns damp red litmus blue; SO₂ decolourises purple KMnO₄.',
        ],
      },
    ],
  },
  {
    id: 'cs-igchem-industrial',
    slug: 'igcse-haber-contact-extraction',
    title: 'Industrial Chemistry & Organic Polymers',
    topicNumber: 8,
    topicName: 'Equilibria, Metals & Organic Chemistry',
    summary: 'Blast Furnace, Aluminium Electrolysis, Haber & Contact conditions, plus Addition vs Condensation polymers.',
    accentColor: '#8d22cc',
    sections: [
      {
        heading: 'Haber & Contact Conditions',
        points: [
          'Haber (N₂ + 3H₂ ⇌ 2NH₃): 450 °C, 200 atm, Fe catalyst.',
          'Contact (2SO₂ + O₂ ⇌ 2SO₃): 450 °C, 2 atm, V₂O₅ catalyst.',
        ],
      },
      {
        heading: 'Condensation Linkages',
        points: ['Polyamide (Nylon/Protein): –CONH– linkage + H₂O.', 'Polyester (PET): –COO– linkage + H₂O.'],
      },
    ],
  },
];

export const IGCSE_CHEMISTRY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'igchem-exam-1',
    subtopicId: 'igchem-8-2',
    number: 1,
    stimulus: 'Aluminium is extracted on an industrial scale by the electrolysis of purified aluminium oxide dissolved in molten cryolite using graphite electrodes.',
    parts: [
      {
        id: 'igchem-exam-1a',
        label: 'a)',
        prompt: 'Explain why aluminium oxide is dissolved in molten cryolite rather than electrolysed pure.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Cryolite lowers the melting point / operating temperature of aluminium oxide (saving energy) and improves electrical conductivity.',
          markPoints: [
            { id: 'mp1', markDescription: 'Lowers melting point / operating temperature', requiredKeywordGroups: [['lower', 'reduc', 'decreas'], ['melting point', 'temperature']] },
            { id: 'mp2', markDescription: 'Saves energy / lowers cost or improves conductivity', requiredKeywordGroups: [['energy', 'cost', 'conductiv']] },
          ],
        },
      },
      {
        id: 'igchem-exam-1b',
        label: 'b)',
        prompt: 'Explain why the positive graphite anodes must be replaced periodically during extraction.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Oxygen gas produced at the hot anode reacts with the carbon graphite anodes to form carbon dioxide gas, wearing the anodes away.',
          markPoints: [
            { id: 'mp1', markDescription: 'Oxygen produced at anode reacts with carbon/graphite', requiredKeywordGroups: [['oxygen'], ['carbon', 'graphite', 'anode']] },
            { id: 'mp2', markDescription: 'Forms carbon dioxide gas / burns away', requiredKeywordGroups: [['carbon dioxide', 'co2', 'burn', 'worn']] },
          ],
        },
      },
    ],
  },
  {
    id: 'igchem-exam-2',
    subtopicId: 'igchem-6-2',
    number: 2,
    stimulus: 'Ammonia is manufactured in the Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). The forward reaction is exothermic.',
    parts: [
      {
        id: 'igchem-exam-2a',
        label: 'a)',
        prompt: 'Explain why increasing the pressure increases the equilibrium yield of ammonia.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'There are fewer moles of gas on the right-hand product side (2 moles vs 4 moles on the left), so increasing pressure shifts the equilibrium position to the right.',
          markPoints: [
            { id: 'mp1', markDescription: 'Fewer gas moles on right/product side (2 vs 4)', requiredKeywordGroups: [['fewer', 'less', '4', '2'], ['mole', 'molecule', 'gas']] },
            { id: 'mp2', markDescription: 'Equilibrium shifts right / forward', requiredKeywordGroups: [['shift', 'move'], ['right', 'forward', 'ammonia']] },
          ],
        },
      },
      {
        id: 'igchem-exam-2b',
        label: 'b)',
        prompt: 'Which catalyst is used in the Haber process?',
        kind: 'mcq',
        marks: 1,
        options: ['Vanadium(V) oxide', 'Iron', 'Nickel', 'Phosphoric acid'],
        correctIndex: 1,
      },
    ],
  },
];

export const IGCSE_CHEMISTRY_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'igchem-pp-2024-p4',
    specEra: 'new-9-1',
    year: '2024',
    title: 'CIE 0620 Paper 4 Theory (Extended)',
    tier: 'Extended',
    series: 'May/June 2024',
    paperCode: '0620/42',
    durationMinutes: 75,
    totalMarks: 80,
    insertNote: 'Includes Cambridge IGCSE Periodic Table of Elements.',
    sampleQuestions: [
      { number: '2(a)', question: 'Explain why silicon(IV) oxide has a high melting point and does not conduct electricity.', marks: 3, markScheme: ['Giant covalent structure with many strong covalent bonds requiring lots of energy to break; no free ions or delocalised electrons to carry charge.'] },
      { number: '5(c)', question: 'Write the ionic half-equation for the formation of oxygen gas at the anode during electrolysis of dilute sulfuric acid.', marks: 2, markScheme: ['4OH⁻ → O₂ + 2H₂O + 4e⁻'] },
    ],
  },
  {
    id: 'igchem-pp-2024-p6',
    specEra: 'new-9-1',
    year: '2024',
    title: 'CIE 0620 Paper 6 Alternative to Practical',
    tier: 'Extended',
    series: 'May/June 2024',
    paperCode: '0620/62',
    durationMinutes: 60,
    totalMarks: 40,
    sampleQuestions: [
      { number: '3(b)', question: 'Describe how to prepare pure dry crystals of copper(II) sulfate starting from solid copper(II) oxide and dilute sulfuric acid.', marks: 4, markScheme: ['Add excess CuO to warm H₂SO₄ and stir until solid remains; filter off unreacted CuO; heat filtrate to crystallisation point; cool to form crystals, filter and dry between filter paper.'] },
    ],
  },
  {
    id: 'igchem-pp-2023-edexcel',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Edexcel International GCSE Paper 1C (4CH1/1C)',
    tier: 'Extended',
    series: 'June 2023',
    paperCode: '4CH1/1C',
    durationMinutes: 120,
    totalMarks: 110,
    sampleQuestions: [
      { number: '6(a)', question: 'Explain why a zinc block bolted to an iron ship hull prevents the iron from rusting.', marks: 3, markScheme: ['Zinc is more reactive than iron; zinc loses electrons/oxidises preferentially instead of iron (sacrificial protection).'] },
    ],
  },
];

export const IGCSE_CHEMISTRY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'igckt-1', term: 'Activation energy', definition: 'Minimum kinetic energy required by colliding particles for a successful reaction.', topicNumber: 5, subtopicId: 'igchem-5-1', subtopicCode: '5.1' },
  { id: 'igckt-2', term: 'Alloy', definition: 'Mixture of a metal with other elements whose different atom sizes disrupt regular layers, increasing hardness.', topicNumber: 2, subtopicId: 'igchem-2-2', subtopicCode: '2.2' },
  { id: 'igckt-3', term: 'Amphoteric oxide', definition: 'Oxide such as Al₂O₃ or ZnO that reacts with both acids and alkalis to produce salts and water.', topicNumber: 7, subtopicId: 'igchem-7-1', subtopicCode: '7.1' },
  { id: 'igckt-4', term: 'Avogadro constant', definition: 'Number of particles in one mole of any substance, equal to 6.02 × 10²³.', topicNumber: 3, subtopicId: 'igchem-3-1', subtopicCode: '3.1' },
  { id: 'igckt-5', term: 'Catalytic converter', definition: 'Car exhaust catalyst converting toxic CO and NO into harmless CO₂ and N₂.', topicNumber: 10, subtopicId: 'igchem-10-1', subtopicCode: '10.1' },
  { id: 'igckt-6', term: 'Condensation polymerisation', definition: 'Polymer formation linking monomers while eliminating a small molecule such as water.', topicNumber: 9, subtopicId: 'igchem-9-2', subtopicCode: '9.2' },
  { id: 'igckt-7', term: 'Contact process', definition: 'Industrial production of sulfuric acid using V₂O₅ catalyst at 450 °C and 2 atm.', topicNumber: 6, subtopicId: 'igchem-6-2', subtopicCode: '6.2' },
  { id: 'igckt-8', term: 'Cracking', definition: 'Breaking long-chain alkanes into shorter alkanes and alkenes using heat and a catalyst.', topicNumber: 9, subtopicId: 'igchem-9-1', subtopicCode: '9.1' },
  { id: 'igckt-9', term: 'Cryolite', definition: 'Molten mineral used to dissolve aluminium oxide at lower temperature during electrolysis.', topicNumber: 8, subtopicId: 'igchem-8-2', subtopicCode: '8.2' },
  { id: 'igckt-10', term: 'Dynamic equilibrium', definition: 'State in a closed reversible system where forward and reverse rates are equal and concentrations remain constant.', topicNumber: 6, subtopicId: 'igchem-6-2', subtopicCode: '6.2' },
  { id: 'igckt-11', term: 'Electrolysis', definition: 'Decomposition of a molten or aqueous ionic electrolyte by direct electric current.', topicNumber: 4, subtopicId: 'igchem-4-1', subtopicCode: '4.1' },
  { id: 'igckt-12', term: 'Empirical formula', definition: 'Simplest whole-number ratio of atoms of each element in a compound.', topicNumber: 3, subtopicId: 'igchem-3-1', subtopicCode: '3.1' },
  { id: 'igckt-13', term: 'Esterification', definition: 'Acid-catalysed reaction between an alcohol and carboxylic acid producing an ester and water.', topicNumber: 9, subtopicId: 'igchem-9-2', subtopicCode: '9.2' },
  { id: 'igckt-14', term: 'Haber process', definition: 'Industrial synthesis of ammonia from N₂ and H₂ at 450 °C, 200 atm, and Fe catalyst.', topicNumber: 6, subtopicId: 'igchem-6-2', subtopicCode: '6.2' },
  { id: 'igckt-15', term: 'Homologous series', definition: 'Organic family sharing a functional group, general formula, and consecutive CH₂ increments.', topicNumber: 9, subtopicId: 'igchem-9-1', subtopicCode: '9.1' },
  { id: 'igckt-16', term: 'Isotope', definition: 'Atoms of the same element with equal proton numbers but different neutron counts.', topicNumber: 2, subtopicId: 'igchem-2-1', subtopicCode: '2.1' },
  { id: 'igckt-17', term: 'Locating agent', definition: 'Chemical spray revealing colourless spots such as amino acids on a paper chromatogram.', topicNumber: 1, subtopicId: 'igchem-1-2', subtopicCode: '1.2' },
  { id: 'igckt-18', term: 'Molar gas volume', definition: 'Volume occupied by 1 mole of any gas at r.t.p., equal to 24 dm³.', topicNumber: 3, subtopicId: 'igchem-3-1', subtopicCode: '3.1' },
  { id: 'igckt-19', term: 'Rf value', definition: 'Chromatography ratio of spot distance to solvent front distance measured from the baseline.', topicNumber: 1, subtopicId: 'igchem-1-2', subtopicCode: '1.2' },
  { id: 'igckt-20', term: 'Sacrificial protection', definition: 'Attaching a more reactive metal like zinc to steel so it oxidises in place of iron.', topicNumber: 8, subtopicId: 'igchem-8-2', subtopicCode: '8.2' },
];
