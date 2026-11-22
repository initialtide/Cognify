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

export const CHEMISTRY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Atomic Structure & the Periodic Table',
    subtopics: [
      { id: 'chem-1-1', code: '1.1', slug: '1.1-atoms-elements-compounds', title: 'Atoms, Elements & Compounds', readingMinutes: 8, hasDeepContent: true },
      { id: 'chem-1-2', code: '1.2', slug: '1.2-the-periodic-table', title: 'Development & Groups of the Periodic Table', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Bonding, Structure & the Properties of Matter',
    subtopics: [
      { id: 'chem-2-1', code: '2.1', slug: '2.1-ionic-covalent-metallic', title: 'Ionic, Covalent & Metallic Bonding', readingMinutes: 10, hasDeepContent: true },
      { id: 'chem-2-2', code: '2.2', slug: '2.2-diamond-graphite-fullerenes', title: 'States of Matter & Allotropes of Carbon', readingMinutes: 8, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Quantitative Chemistry',
    subtopics: [
      { id: 'chem-3-1', code: '3.1', slug: '3.1-relative-formula-mass-moles', title: 'Relative Formula Mass & Moles', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Chemical Changes',
    subtopics: [
      { id: 'chem-4-1', code: '4.1', slug: '4.1-acids-alkalis-electrolysis', title: 'Reactivity Series, Acids & Electrolysis', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Energy Changes',
    subtopics: [
      { id: 'chem-5-1', code: '5.1', slug: '5.1-exothermic-endothermic', title: 'Exothermic & Endothermic Reactions', readingMinutes: 8, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'The Rate & Extent of Chemical Change',
    subtopics: [
      { id: 'chem-6-1', code: '6.1', slug: '6.1-rates-of-reaction', title: 'Collision Theory & Rates of Reaction', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 7,
    title: 'Organic Chemistry',
    subtopics: [
      { id: 'chem-7-1', code: '7.1', slug: '7.1-crude-oil-alkanes', title: 'Crude Oil, Fractional Distillation & Alkanes', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 8,
    title: 'Chemical Analysis',
    subtopics: [
      { id: 'chem-8-1', code: '8.1', slug: '8.1-chromatography-gas-tests', title: 'Purity, Chromatography & Gas Tests', readingMinutes: 8, hasDeepContent: true },
    ],
  },
  {
    number: 9,
    title: 'Chemistry of the Atmosphere',
    subtopics: [
      { id: 'chem-9-1', code: '9.1', slug: '9.1-evolution-of-atmosphere', title: 'Earth’s Early Atmosphere & Greenhouse Effect', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 10,
    title: 'Using Resources',
    subtopics: [
      { id: 'chem-10-1', code: '10.1', slug: '10.1-potable-water-lca', title: 'Potable Water & Life Cycle Assessments', readingMinutes: 8, hasDeepContent: true },
    ],
  },
];

export const CHEMISTRY_NOTES: Record<string, NoteLesson> = {
  'chem-1-1': {
    subtopicId: 'chem-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Atoms, Elements & Compounds',
    readingMinutes: 8,
    videoTitle: 'Atoms & Ions | Protons, Neutrons, Electrons',
    youtubeId: 'zuQ469vjwgo',
    videoChannel: 'Cognito',
    videoDuration: '7:48',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'What are Atoms?', cardId: 'chem-1-1-c1' },
      { time: '1:18', seconds: 78, label: 'Relative Mass & Charge of Subatomic Particles', cardId: 'chem-1-1-c1' },
      { time: '2:33', seconds: 153, label: 'Atomic Dimensions & Nuclear Symbols', cardId: 'chem-1-1-c2' },
      { time: '6:03', seconds: 363, label: 'Calculating Protons, Neutrons, and Electrons', cardId: 'chem-1-1-c3' },
    ],
    cards: [
      {
        id: 'chem-1-1-c1',
        title: 'Subatomic Particles & Isotopes',
        summary: 'Relative mass and charge of protons, neutrons, and electrons plus isotopes.',
        diagram: 'atomic-structure',
        bullets: [
          'Atoms consist of a tiny positively charged **nucleus** (protons and neutrons) surrounded by orbiting electrons.',
          'Neutral atoms have equal numbers of protons and electrons so their overall electrical charge is 0.',
        ],
        subsections: [
          {
            heading: 'Relative Mass, Charge & Isotopes',
            bullets: [
              '**Protons** - relative mass 1, charge +1; the atomic number equals the number of protons.',
              '**Neutrons** - relative mass 1, charge 0; mass number = protons + neutrons.',
              '**Electrons** - relative mass ~1/1836 (very small), charge −1, occupying energy shells.',
              '**Isotopes** - atoms of the same element (identical proton number) with different numbers of neutrons.',
            ],
            exampleHeading: 'Worked example: Calculating relative atomic mass (Ar) of chlorine',
            examples: [
              'Chlorine exists as 75% ³⁵Cl and 25% ³⁷Cl.',
              'Ar = ((75 × 35) + (25 × 37)) ÷ 100 = (2,625 + 925) ÷ 100 = 35.5.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Isotopes', definition: 'Atoms of the same element with the same atomic number (protons) but different mass numbers (different numbers of neutrons).' },
          { term: 'nucleus', definition: 'The tiny, dense, positively charged centre of an atom containing protons and neutrons.' },
        ],
        memoryAid: 'Atomic number = Proton number (smaller number). Mass number = Protons + Neutrons (bigger top number).',
      },
      {
        id: 'chem-1-1-c2',
        title: 'Electron Configuration (First 20 Elements)',
        summary: 'Filling the 2, 8, 8, 2 shell pattern and linking outer electrons to group number.',
        bullets: [
          'Electrons occupy energy levels (shells) starting from the lowest shell closest to the nucleus.',
        ],
        subsections: [
          {
            heading: 'Shell Filling Rules',
            bullets: [
              '**Shell capacities** - 1st shell holds up to 2 electrons; 2nd shell holds up to 8; 3rd shell holds up to 8 (for GCSE elements 1–20).',
              '**Group link** - the number of outer-shell electrons tells you the element’s Group number (e.g. Na 2,8,1 is in Group 1).',
            ],
            exampleHeading: 'Worked examples: Carbon, Sodium & Calcium',
            examples: [
              'Carbon (atomic number 6) → 2,4 (Group 4).',
              'Sodium (11) → 2,8,1 (Group 1); Calcium (20) → 2,8,8,2 (Group 2).',
            ],
          },
        ],
      },
      {
        id: 'chem-1-1-c3',
        title: 'Compounds vs Mixtures & Separation Techniques',
        summary: 'Separating mixtures physically by filtration, crystallisation, distillation, and chromatography.',
        bullets: [
          'A **compound** contains two or more elements chemically bonded in fixed proportions and can only be separated by chemical reactions.',
        ],
        subsections: [
          {
            heading: 'Physical Separation Methods for Mixtures',
            bullets: [
              '**Filtration** - separates an insoluble solid (residue) from a liquid (filtrate).',
              '**Crystallisation** - gently evaporates solvent from a solution until crystals form upon cooling.',
              '**Simple & fractional distillation** - separates a liquid from a solution (simple) or miscible liquids with different boiling points (fractional).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'compound', definition: 'A substance formed when two or more different elements are chemically bonded together in fixed proportions.' },
        ],
        commonMistake: 'Students often claim mixtures have fixed formulas or fixed boiling points. Instead, mixtures have variable composition and can be separated physically without chemical reactions.',
      },
    ],
    keyTerms: [
      { term: 'Atom', definition: 'Smallest part of an element that can exist, consisting of a central nucleus and orbiting electrons.' },
      { term: 'Isotope', definition: 'Atoms with the same number of protons but different numbers of neutrons.' },
      { term: 'Compound', definition: 'Substance formed when two or more elements are chemically combined in fixed proportions.' },
      { term: 'Mixture', definition: 'Two or more elements or compounds not chemically combined together, separable by physical processes.' },
    ],
    checklistPoints: [
      'Atoms are electrically neutral because number of protons equals number of electrons.',
      'Calculate Ar from isotope percentages and write 2,8,8,2 electron configurations.',
      'Select filtration, crystallisation, distillation, or chromatography to separate mixtures.',
    ],
  },

  'chem-1-2': {
    subtopicId: 'chem-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Development & Groups of the Periodic Table',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Development of the Periodic Table',
    youtubeId: 'NVnnIjUbXNQ',
    videoChannel: 'Cognito',
    videoDuration: '6:07',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Mendeleev & Early Tables', cardId: 'chem-1-2-c1' },
      { time: '1:38', seconds: 98, label: 'Groups & Outer-Shell Electrons', cardId: 'chem-1-2-c2' },
      { time: '3:48', seconds: 228, label: 'Group 0 Elements: Noble Gases', cardId: 'chem-1-2-c2' },
      { time: '5:01', seconds: 301, label: 'Variations in Periodic Table Layouts', cardId: 'chem-1-2-c3' },
    ],
    cards: [
      {
        id: 'chem-1-2-c1',
        title: 'Mendeleev & Development of the Periodic Table',
        summary: 'How Mendeleev’s gaps and atomic number ordering created the modern periodic table.',
        bullets: [
          'Early tables ordered elements strictly by atomic weight, placing elements with totally different chemical properties in the same column.',
        ],
        subsections: [
          {
            heading: 'Why Mendeleev Succeeded',
            bullets: [
              '**Leaving gaps & swapping pairs** - Dmitri Mendeleev left gaps for undiscovered elements (predicting gallium and germanium accurately) and swapped pairs like tellurium and iodine to match chemical properties.',
              '**Isotopes & atomic number** - the later discovery of isotopes explained why atomic weight ordering occasionally failed; the modern table orders by atomic (proton) number.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'atomic number', definition: 'The number of protons in the nucleus of an atom, which determines an element’s position in the modern periodic table.' },
        ],
      },
      {
        id: 'chem-1-2-c2',
        title: 'Group 1 (Alkali Metals) & Group 0 (Noble Gases)',
        summary: 'Why Group 1 reactivity increases down the group while Group 0 remains unreactive.',
        bullets: [
          '**Group 1 (Alkali Metals — Li, Na, K)** are soft metals with 1 outer electron that react vigorously with water to produce alkaline hydroxides and hydrogen gas.',
        ],
        subsections: [
          {
            heading: 'Group 1 & Group 0 Trends',
            bullets: [
              '**Group 1 reactivity INCREASES down the group** - atoms have more shells, so the outer electron is further from the nucleus with greater shielding → weaker attraction → lost more easily.',
              '**Group 0 (Noble Gases — He, Ne, Ar)** - monatomic and unreactive because they have full outer shells; boiling points increase down the group due to stronger intermolecular forces.',
            ],
            exampleHeading: 'Worked equation: Potassium reacting with water',
            examples: [
              '2K(s) + 2H₂O(l) → 2KOH(aq) + H₂(g).',
              'Observations: potassium melts into a sphere, fizzes violently, and burns with a lilac flame.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'shielding', definition: 'Repulsion from inner electron shells that reduces the net attraction felt by outer-shell electrons from the positive nucleus.' },
          { term: 'Noble Gases', definition: 'Unreactive Group 0 elements (He, Ne, Ar) possessing stable full outer electron shells.' },
        ],
      },
      {
        id: 'chem-1-2-c3',
        title: 'Group 7 (Halogens) & Displacement Reactions',
        summary: 'Decreasing reactivity down Group 7 halogens and aqueous halide displacement.',
        bullets: [
          '**Group 7 (Halogens — F₂, Cl₂, Br₂, I₂)** are diatomic non-metals with 7 outer electrons whose melting and boiling points increase down the group.',
        ],
        subsections: [
          {
            heading: 'Group 7 Trend & Displacement',
            bullets: [
              '**Reactivity DECREASES down Group 7** - extra electron shells increase radius and shielding, making it harder for the nucleus to attract an incoming electron into the outer shell.',
              '**Displacement rule** - a more reactive halogen displaces a less reactive halide ion from aqueous salt solution.',
            ],
            exampleHeading: 'Worked example: Chlorine + potassium bromide',
            examples: [
              'Cl₂(aq) + 2KBr(aq) → 2KCl(aq) + Br₂(aq) (solution turns orange as bromine forms).',
              'Ionic equation: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂ (chlorine gains electrons — reduced).',
            ],
          },
        ],
        memoryAid: 'Group 1 = easier to LOSE going down (MORE reactive). Group 7 = harder to GAIN going down (LESS reactive)!',
        commonMistake: 'Students often claim Group 7 gets more reactive down the group like Group 1. Instead, Group 1 loses electrons while Group 7 gains electrons, so their reactivity trends run in OPPOSITE directions.',
      },
    ],
    keyTerms: [
      { term: 'Alkali metals', definition: 'Reactive Group 1 metals with 1 outer electron that react vigorously with water to form alkaline hydroxides and hydrogen.' },
      { term: 'Halogens', definition: 'Group 7 non-metals existing as diatomic molecules (F₂, Cl₂, Br₂, I₂) with 7 outer electrons.' },
      { term: 'Noble gases', definition: 'Unreactive Group 0 elements possessing stable full outer shells.' },
      { term: 'Displacement reaction', definition: 'Reaction in which a more reactive element replaces a less reactive element in a compound.' },
    ],
    checklistPoints: [
      'Explain why Mendeleev left gaps and how isotopes justified atomic number ordering.',
      'Explain opposite reactivity trends in Group 1 (increases down) vs Group 7 (decreases down).',
      'Write balanced displacement equations for halogen + halide reactions.',
    ],
  },

  'chem-2-1': {
    subtopicId: 'chem-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Ionic, Covalent & Metallic Bonding',
    readingMinutes: 10,
    videoTitle: 'GCSE Chemistry - Ionic Bonding - Formation | Dot and Cross Diagrams',
    youtubeId: 'MdU44WeiLps',
    videoChannel: 'Cognito',
    videoDuration: '4:38',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Ionic Bonding', cardId: 'chem-2-1-c1' },
      { time: '0:20', seconds: 20, label: 'What Ions Are', cardId: 'chem-2-1-c1' },
      { time: '2:03', seconds: 123, label: 'Dot & Cross Diagrams', cardId: 'chem-2-1-c2' },
      { time: '2:47', seconds: 167, label: 'Worked Example: Magnesium Chloride', cardId: 'chem-2-1-c3' },
    ],
    cards: [
      {
        id: 'chem-2-1-c1',
        title: 'Ionic Bonding & Giant Ionic Lattices',
        summary: 'Electron transfer from metals to non-metals creating high-melting giant ionic lattices.',
        diagram: 'ionic-covalent-bonding',
        bullets: [
          '**Ionic bonding** forms between a metal and a non-metal when outer electrons transfer to create oppositely charged ions.',
        ],
        subsections: [
          {
            heading: 'Structure & Properties of Ionic Compounds',
            bullets: [
              '**High melting & boiling points** - ions sit in a 3D giant ionic lattice held together by strong electrostatic forces in all directions requiring lots of energy to break.',
              '**Electrical conductivity** - ionic solids DO NOT conduct because ions are locked in fixed positions; molten or aqueous ionic compounds conduct because ions are free to move and carry charge.',
            ],
            exampleHeading: 'Worked example: Magnesium chloride (MgCl₂)',
            examples: [
              'Magnesium (2,8,2) loses 2 outer electrons to become Mg²⁺ (2,8).',
              'Two chlorine atoms (2,8,7) each gain 1 electron to become two Cl⁻ ions (2,8,8), giving MgCl₂.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'giant ionic lattice', definition: 'A regular 3D repeating arrangement of alternating positive and negative ions held by strong electrostatic forces.' },
        ],
      },
      {
        id: 'chem-2-1-c2',
        title: 'Covalent Bonding & Simple Molecules',
        summary: 'Shared electron pairs in simple molecules held together by weak intermolecular forces.',
        bullets: [
          '**Covalent bonding** happens between non-metal atoms sharing one or more pairs of outer electrons.',
        ],
        subsections: [
          {
            heading: 'Why Simple Covalent Molecules Have Low Boiling Points',
            bullets: [
              '**Weak intermolecular forces** - boiling water (H₂O) or methane (CH₄) overcomes ONLY weak intermolecular forces between molecules, requiring little energy.',
              '**Molecule size & conductivity** - larger molecules (such as polymers) have stronger intermolecular forces and higher melting points; simple molecules never conduct electricity because they have no overall charge or free electrons.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'intermolecular forces', definition: 'Weak attractions between separate simple covalent molecules (much weaker than covalent bonds inside molecules).' },
        ],
        commonMistake: 'Students often write that strong covalent bonds break when water boils. Instead, ONLY weak intermolecular forces between H₂O molecules are overcome!',
      },
      {
        id: 'chem-2-1-c3',
        title: 'Metallic Bonding & Alloys',
        summary: 'Positive metal ions in delocalised electrons and why alloys are harder than pure metals.',
        bullets: [
          '**Metallic bonding** consists of regular layers of positive metal ions surrounded by a sea of **delocalised** outer electrons.',
        ],
        subsections: [
          {
            heading: 'Conductivity, Malleability & Alloys',
            bullets: [
              '**Conductors & high melting points** - delocalised electrons move freely to carry electrical charge and thermal energy; strong metallic attraction gives high melting points.',
              '**Pure metals vs alloys** - pure metals are soft/malleable because identical atomic layers slide easily; alloys mix atoms of different sizes that distort the layers and stop them sliding, making alloys harder.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'delocalised', definition: 'Outer-shell electrons not attached to any single atom, free to move through metals or graphite to conduct electricity.' },
        ],
        memoryAid: 'Ionic = Transfer (M + NM); Covalent = Share (NM + NM); Metallic = Sea of delocalised electrons!',
      },
    ],
    keyTerms: [
      { term: 'Ionic bond', definition: 'Strong electrostatic attraction between oppositely charged metal and non-metal ions.' },
      { term: 'Covalent bond', definition: 'Shared pair of electrons between two non-metal atoms.' },
      { term: 'Delocalised electrons', definition: 'Outer-shell electrons free to move throughout a giant metallic lattice or graphite layers.' },
      { term: 'Alloy', definition: 'Mixture of a metal with one or more other elements whose different-sized atoms distort layers and increase hardness.' },
    ],
    checklistPoints: [
      'Ionic compounds conduct electricity only when molten or aqueous because ions must be free to move.',
      'Simple covalent substances have low boiling points because of weak intermolecular forces.',
      'Alloys are harder than pure metals because different-sized atoms disrupt layers from sliding.',
    ],
  },

  'chem-2-2': {
    subtopicId: 'chem-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'States of Matter & Allotropes of Carbon',
    readingMinutes: 8,
    videoTitle: 'GCSE Chemistry - Diamond & Graphite - Structure | Properties',
    youtubeId: 'RVV8pncaA7A',
    videoChannel: 'Cognito',
    videoDuration: '3:46',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Giant Covalent Carbon', cardId: 'chem-2-2-c1' },
      { time: '0:20', seconds: 20, label: 'What are Allotropes? (Diamond)', cardId: 'chem-2-2-c2' },
      { time: '1:37', seconds: 97, label: 'Graphite Structure & Properties', cardId: 'chem-2-2-c2' },
      { time: '2:54', seconds: 174, label: 'Graphene and Fullerenes', cardId: 'chem-2-2-c3' },
    ],
    cards: [
      {
        id: 'chem-2-2-c1',
        title: 'States of Matter & Limitations of the Particle Model',
        summary: 'State symbols (s, l, g, aq) and Higher-tier limitations of the solid-sphere model.',
        bullets: [
          'State symbols in balanced equations: **(s)** solid, **(l)** liquid, **(g)** gas, and **(aq)** aqueous (dissolved in water).',
        ],
        subsections: [
          {
            heading: 'Particle Model Limitations (Higher)',
            bullets: [
              '**No forces shown** - simple dot diagrams omit electrostatic or intermolecular forces between particles.',
              '**Solid inelastic spheres** - real atoms and molecules are not solid balls and vary widely in size and shape.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'aqueous', definition: 'Dissolved in water, represented by the state symbol (aq) in chemical equations.' },
        ],
      },
      {
        id: 'chem-2-2-c2',
        title: 'Diamond & Graphite (Giant Covalent Allotropes)',
        summary: 'Contrasting 4-bond insulating diamond with 3-bond slippery conductive graphite.',
        bullets: [
          'Diamond and graphite are giant covalent **allotropes** of pure carbon with dramatically different properties.',
        ],
        subsections: [
          {
            heading: 'Diamond vs Graphite',
            bullets: [
              '**Diamond** - each carbon forms 4 strong covalent bonds in a rigid 3D lattice → extremely hard, very high melting point, does NOT conduct electricity (no delocalised electrons).',
              '**Graphite** - each carbon forms 3 covalent bonds in flat hexagonal layers with weak intermolecular forces between layers → layers slide easily (soft lubricant).',
              '**Graphite conductivity** - 1 delocalised electron per carbon moves along the layers, allowing graphite to conduct electricity and heat (used in electrodes).',
            ],
            exampleHeading: 'Exam comparison: Cutting tools vs electrodes',
            examples: [
              'Diamond coats drill bits because every atom is locked by 4 strong covalent bonds.',
              'Graphite makes electrolysis electrodes because it has a high melting point AND conducts via delocalised electrons.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'allotropes', definition: 'Different structural forms of the same element in the same physical state (e.g. diamond, graphite, graphene, fullerenes).' },
          { term: 'delocalised', definition: 'Outer-shell electron not bound to a single atom, free to move along graphite layers and conduct electrical current.' },
        ],
        memoryAid: 'Diamond = 4 bonds (hard insulator); Graphite = 3 bonds + 1 free electron (slippery conductor)!',
      },
      {
        id: 'chem-2-2-c3',
        title: 'Graphene, Fullerenes & Carbon Nanotubes',
        summary: 'Single-sheet graphene, spherical C₆₀ fullerenes, and high-strength carbon nanotubes.',
        bullets: [
          'Modern nanotechnology exploits single-layer and hollow carbon structures built from hexagonal rings.',
        ],
        subsections: [
          {
            heading: 'Nanoscale Carbon Structures',
            bullets: [
              '**Graphene** - a single one-atom-thick layer of graphite; extraordinarily strong, ultra-light, and an excellent conductor for flexible electronics and composites.',
              '**Fullerenes (e.g. C₆₀)** - hollow carbon cages used for targeted drug delivery, lubricants, and catalysts (huge surface area).',
              '**Carbon nanotubes** - cylindrical fullerenes with very high length-to-diameter ratios and huge tensile strength for reinforcing tennis rackets and aerospace composites.',
            ],
          },
        ],
        commonMistake: 'Students often say covalent bonds break when graphite layers slide. Instead, ONLY weak intermolecular forces between the hexagonal layers are overcome!',
      },
    ],
    keyTerms: [
      { term: 'Diamond', definition: 'Giant covalent carbon allotrope where each carbon forms 4 strong covalent bonds; extremely hard insulator.' },
      { term: 'Graphite', definition: 'Layered giant covalent carbon allotrope (3 bonds per C) conducting electricity via delocalised electrons.' },
      { term: 'Graphene', definition: 'A single one-atom-thick sheet of graphite with exceptional strength and conductivity.' },
      { term: 'Fullerene', definition: 'Hollow cage or tube molecule of carbon atoms such as Buckminsterfullerene (C₆₀) and carbon nanotubes.' },
    ],
    checklistPoints: [
      'State limitations of the simple solid-sphere particle model.',
      'Explain why diamond is hard and insulating while graphite is slippery and conductive.',
      'Describe structures and uses of graphene, Buckminsterfullerene (C₆₀), and carbon nanotubes.',
    ],
  },

  'chem-3-1': {
    subtopicId: 'chem-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Relative Formula Mass & Moles',
    readingMinutes: 10,
    videoTitle: "GCSE Chemistry - Moles & Mass - Avogadro's Constant | Formula for Moles, Mass & Mr",
    youtubeId: 'kBlmEfS_P00',
    videoChannel: 'Cognito',
    videoDuration: '4:53',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Quantitative Chemistry', cardId: 'chem-3-1-c1' },
      { time: '1:06', seconds: 66, label: "Avogadro's Constant", cardId: 'chem-3-1-c2' },
      { time: '2:40', seconds: 160, label: 'Calculating Mass from Moles', cardId: 'chem-3-1-c2' },
      { time: '3:50', seconds: 230, label: 'Moles in Balanced Equations', cardId: 'chem-3-1-c3' },
    ],
    cards: [
      {
        id: 'chem-3-1-c1',
        title: 'Conservation of Mass & Relative Formula Mass (Mr)',
        summary: 'Conservation of mass, open-vessel gas changes, and calculating Mr.',
        bullets: [
          'The **law of conservation of mass** states that no atoms are created or destroyed during a reaction, so total reactant mass equals total product mass.',
        ],
        subsections: [
          {
            heading: 'Open Vessels & Calculating Mr',
            bullets: [
              '**Apparent mass changes** - mass appears to rise if a gas reactant enters from air (e.g. Mg burning in O₂) or fall if a gas product escapes (e.g. CaCO₃ releasing CO₂).',
              '**Relative formula mass (Mr)** - sum of the relative atomic masses (Ar) of every atom in the formula.',
            ],
            exampleHeading: 'Worked example: Mr of calcium carbonate (CaCO₃)',
            examples: [
              'Ar values: Ca = 40, C = 12, O = 16.',
              'Mr(CaCO₃) = 40 + 12 + (3 × 16) = 40 + 12 + 48 = 100.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Relative formula mass', definition: 'The sum of the relative atomic masses (Ar) of all atoms shown in a substance’s chemical formula.' },
        ],
      },
      {
        id: 'chem-3-1-c2',
        title: 'Moles, Avogadro Constant & Limiting Reactants (Higher)',
        summary: 'Applying n = m ÷ Mr, balanced mole ratios, and identifying the limiting reactant.',
        bullets: [
          'One **mole** of any substance contains **6.02 × 10²³ particles** (Avogadro constant) and has a mass in grams equal to its Mr.',
        ],
        subsections: [
          {
            heading: 'Reacting Masses & Limiting Reactants',
            bullets: [
              '**Core mole formula** - Moles (mol) = Mass (g) ÷ Mr (so Mass = Moles × Mr).',
              '**Limiting reactant** - the reactant completely used up first; it stops the reaction and sets the maximum mass of product formed.',
            ],
            exampleHeading: 'Worked example: Reacting mass of MgO from 4.8 g Mg',
            examples: [
              '2Mg + O₂ → 2MgO (1 : 1 mole ratio between Mg and MgO). Moles of Mg = 4.8 ÷ 24 = 0.20 mol.',
              'Moles of MgO = 0.20 mol → Mass of MgO = 0.20 × (24 + 16) = 0.20 × 40 = 8.0 g.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'limiting reactant', definition: 'The reactant completely consumed first in a reaction, capping how much product can form.' },
          { term: 'Avogadro constant', definition: 'The number of atoms, molecules, or ions in one mole of any substance: 6.02 × 10²³.' },
        ],
        memoryAid: 'Moles = Mass ÷ Mr ("Mr sits underneath Mass!").',
      },
      {
        id: 'chem-3-1-c3',
        title: 'Concentration, Percentage Yield, Atom Economy & Gas Volume',
        summary: 'Computing concentrations (dm³), percentage yield, atom economy, and 24 dm³/mol gas volumes.',
        bullets: [
          'Always convert volume from **cm³ to dm³** by dividing by 1,000 before computing concentration or molar gas volume.',
        ],
        subsections: [
          {
            heading: 'Four Essential Quantitative Formulas',
            bullets: [
              '**Concentration** - c (g/dm³) = mass ÷ volume (dm³), or c (mol/dm³) = moles ÷ volume (dm³).',
              '**Percentage yield** - (Actual mass collected ÷ Theoretical maximum mass) × 100%.',
              '**Atom economy** - (Mr of desired product ÷ Sum of Mr of all reactants) × 100%.',
              '**Molar gas volume** - 1 mole of ANY gas occupies 24 dm³ at room temperature and pressure (20 °C, 1 atm).',
            ],
          },
        ],
        commonMistake: 'Students often ignore the big balancing numbers when computing Atom Economy. Instead, multiply every formula’s Mr by its balancing coefficient in the equation!',
      },
    ],
    keyTerms: [
      { term: 'Relative formula mass', definition: 'Sum of the relative atomic masses of all atoms in a chemical formula (Mr).' },
      { term: 'Avogadro constant', definition: 'Number of atoms, molecules, or ions in one mole: 6.02 × 10²³.' },
      { term: 'Atom economy', definition: 'Measure of the proportion of reactant atoms that end up in the desired useful product.' },
      { term: 'Percentage yield', definition: 'Actual product mass collected divided by theoretical maximum mass, multiplied by 100.' },
    ],
    checklistPoints: [
      'Explain apparent mass increases or decreases in open flasks when gases enter or escape.',
      'Calculate Mr, moles (n = m ÷ Mr), reacting masses, and limiting reactants.',
      'Calculate concentration (g/dm³ and mol/dm³), percentage yield, atom economy, and gas volumes (24 dm³/mol).',
    ],
  },

  'chem-4-1': {
    subtopicId: 'chem-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Reactivity Series, Acids & Electrolysis',
    readingMinutes: 10,
    videoTitle: 'Electrolysis Part 1/3 - Basics and Molten Compounds',
    youtubeId: 'RAEm-kJ_QkU',
    videoChannel: 'Cognito',
    videoDuration: '4:19',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Electrolysis', cardId: 'chem-4-1-c1' },
      { time: '1:19', seconds: 79, label: 'Electrodes and Power Supply', cardId: 'chem-4-1-c2' },
      { time: '2:04', seconds: 124, label: 'Example: Electrolysis of Molten Lead Bromide', cardId: 'chem-4-1-c3' },
      { time: '3:24', seconds: 204, label: 'Summary of Oxidation & Reduction', cardId: 'chem-4-1-c3' },
    ],
    cards: [
      {
        id: 'chem-4-1-c1',
        title: 'Reactivity Series, Metal Extraction & Redox (OIL RIG)',
        summary: 'Reactivity order, carbon reduction vs electrolysis, and electron redox half-equations.',
        bullets: [
          'A metal’s reactivity depends on how easily its atoms lose outer electrons to form positive ions: **K > Na > Li > Ca > Mg > Al > [C] > Zn > Fe > [H] > Cu > Ag > Au**.',
        ],
        subsections: [
          {
            heading: 'Extraction & OIL RIG',
            bullets: [
              '**Carbon reduction vs electrolysis** - metals LESS reactive than carbon (Zn, Fe) are reduced from ores with carbon; metals MORE reactive than carbon (Al, Na) require electrolysis.',
              '**OIL RIG** - Oxidation Is Loss of electrons (or gain of oxygen); Reduction Is Gain of electrons (or loss of oxygen).',
            ],
            exampleHeading: 'Worked ionic half-equations: Mg + CuSO₄ → MgSO₄ + Cu',
            examples: [
              'Oxidation: Mg → Mg²⁺ + 2e⁻ (magnesium loses 2 electrons).',
              'Reduction: Cu²⁺ + 2e⁻ → Cu (copper ions gain 2 electrons).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'reduction', definition: 'Gain of electrons by a species (or loss of oxygen from a compound).' },
        ],
      },
      {
        id: 'chem-4-1-c2',
        title: 'Acids, pH Scale, Strong vs Weak & Making Pure Salts',
        summary: '10× H⁺ pH steps, strong vs weak acids, and the pure dry CuSO₄ crystals practical.',
        bullets: [
          'Acids release **H⁺(aq)** ions and alkalis release **OH⁻(aq)** ions; neutralisation is always **H⁺(aq) + OH⁻(aq) → H₂O(l)**.',
        ],
        subsections: [
          {
            heading: 'Strong vs Weak Acids & Making Copper(II) Sulfate',
            bullets: [
              '**Strong vs weak** - strong acids (HCl, H₂SO₄, HNO₃) completely ionise in water; weak acids (ethanoic, citric, carbonic) only partially ionise. Every 1-unit drop in pH means 10× more H⁺ ions.',
              '**Required Practical (CuSO₄ crystals)** - warm dilute H₂SO₄ → stir in EXCESS insoluble CuO powder until solid remains → filter off excess CuO → gently evaporate half the water on a water bath → cool to crystallise and pat dry.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'strong acids', definition: 'Acids (such as HCl, H₂SO₄, HNO₃) that completely ionise into H⁺ ions in aqueous solution.' },
        ],
      },
      {
        id: 'chem-4-1-c3',
        title: 'Electrolysis of Molten & Aqueous Ionic Compounds',
        summary: 'PANIC electrode rules, cryolite in aluminium extraction, and aqueous solution predictions.',
        bullets: [
          'In electrolysis, passing DC through a molten or dissolved ionic **electrolyte** breaks it down into elements.',
        ],
        subsections: [
          {
            heading: 'Aluminium Extraction & Aqueous Rules',
            bullets: [
              '**Aluminium extraction** - Al₂O₃ is dissolved in molten cryolite to lower its melting point and save energy. Cathode: Al³⁺ + 3e⁻ → Al; Anode: 2O²⁻ → O₂ + 4e⁻ (oxygen burns away the carbon anodes as CO₂).',
              '**Aqueous rules** - Cathode (−): hydrogen forms if metal is MORE reactive than H (else the metal forms). Anode (+): halogen (Cl₂, Br₂, I₂) forms if a halide ion is present; otherwise oxygen forms (4OH⁻ → O₂ + 2H₂O + 4e⁻).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'electrolyte', definition: 'A molten or aqueous ionic substance containing free-moving ions that can be broken down by electrolysis.' },
        ],
        memoryAid: 'PANIC + OIL RIG: Positive Anode (Oxidation Is Loss), Negative Is Cathode (Reduction Is Gain)!',
        commonMistake: 'Students often boil the CuSO₄ filtrate completely dry over a roaring Bunsen flame. Instead, evaporate gently until crystals start forming and let it cool slowly so hydrated crystals do not decompose or spit.',
      },
    ],
    keyTerms: [
      { term: 'Redox reaction', definition: 'Reaction in which one species is oxidised (loses electrons) while another is simultaneously reduced (gains electrons).' },
      { term: 'Strong acid', definition: 'Acid that completely ionises into H⁺ ions in aqueous solution.' },
      { term: 'Electrolyte', definition: 'Molten or dissolved ionic substance broken down by passing an electric current through it.' },
      { term: 'Cryolite', definition: 'Compound mixed with aluminium oxide to lower its melting point during electrolysis.' },
    ],
    checklistPoints: [
      'Apply OIL RIG to write half-equations for displacement and electrolysis.',
      'Explain the 10× H⁺ change per pH unit and contrast strong vs weak acids.',
      'Outline the Required Practical steps to prepare pure dry soluble salt crystals from an insoluble base.',
      'Predict cathode and anode products for molten and aqueous electrolysis.',
    ],
  },

  'chem-5-1': {
    subtopicId: 'chem-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Exothermic & Endothermic Reactions',
    readingMinutes: 8,
    videoTitle: 'GCSE Chemistry - Exothermic & Endothermic Reactions - Reaction Profiles | Activation Energy',
    youtubeId: 'hNNvIsQLSV8',
    videoChannel: 'Cognito',
    videoDuration: '5:47',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Energy Changes', cardId: 'chem-5-1-c1' },
      { time: '1:04', seconds: 64, label: 'Exothermic Reactions', cardId: 'chem-5-1-c1' },
      { time: '2:35', seconds: 155, label: 'Endothermic Reactions', cardId: 'chem-5-1-c2' },
      { time: '5:00', seconds: 300, label: 'Labelling Reaction Profiles & Activation Energy', cardId: 'chem-5-1-c3' },
    ],
    cards: [
      {
        id: 'chem-5-1-c1',
        title: 'Exothermic & Endothermic Reactions + Reaction Profiles',
        summary: 'Temperature changes, real-world uses, and activation energy on reaction profiles.',
        diagram: 'exothermic-endothermic',
        bullets: [
          'Chemical reactions always transfer energy to or from the surroundings, visible as a temperature change on a thermometer.',
        ],
        subsections: [
          {
            heading: 'Comparing Exothermic & Endothermic Profiles',
            bullets: [
              '**Exothermic** - transfers energy TO surroundings (temperature rises): combustion, oxidation, neutralisation; used in hand warmers and self-heating cans. Products sit LOWER than reactants.',
              '**Endothermic** - absorbs energy FROM surroundings (temperature falls): thermal decomposition, citric acid + sodium hydrogencarbonate; used in sports cold packs. Products sit HIGHER than reactants.',
              '**Activation energy (Ea)** - minimum energy colliding particles need to react, shown as the upward arrow from reactant level to the curve peak.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Activation energy', definition: 'The minimum energy colliding reactant particles must possess for a reaction to occur.' },
          { term: 'Exothermic', definition: 'A reaction that transfers energy to the surroundings, causing the surrounding temperature to increase.' },
        ],
      },
      {
        id: 'chem-5-1-c2',
        title: 'Bond Energy Calculations (Higher)',
        summary: 'Computing overall enthalpy change from bonds broken minus bonds made.',
        bullets: [
          'Breaking reactant bonds absorbs energy (ENDOTHERMIC); making product bonds releases energy (EXOTHERMIC).',
        ],
        subsections: [
          {
            heading: 'Bond Energy Formula',
            bullets: [
              '**Overall energy change** - Σ(Energy to break reactant bonds) − Σ(Energy released making product bonds).',
              '**Sign meaning** - negative value = exothermic (more energy released making bonds than taken in breaking bonds); positive = endothermic.',
            ],
            exampleHeading: 'Worked example: H₂ + Cl₂ → 2HCl',
            examples: [
              'Bonds broken: 1 H–H (436) + 1 Cl–Cl (243) = 679 kJ/mol.',
              'Bonds made: 2 H–Cl (2 × 432) = 864 kJ/mol → Overall = 679 − 864 = −185 kJ/mol (exothermic).',
            ],
          },
        ],
        memoryAid: 'BENDO / MEXO: Breaking = ENDOthermic, Making = EXOthermic!',
        commonMistake: 'Students often subtract bonds broken from bonds made (giving the wrong sign). Always compute Broken − Made!',
      },
      {
        id: 'chem-5-1-c3',
        title: 'Temperature Change Practical & Hydrogen Fuel Cells',
        summary: 'Polystyrene cup calorimetry, metal cells, and evaluating hydrogen fuel cells.',
        bullets: [
          'In the calorimetry Required Practical, neutralising HCl with NaOH inside an insulated **polystyrene cup** with a lid minimises heat loss to the surroundings.',
        ],
        subsections: [
          {
            heading: 'Chemical Cells & Hydrogen Fuel Cells',
            bullets: [
              '**Metal-electrolyte cells** - voltage increases with a larger reactivity difference between the two metal electrodes; non-rechargeable cells stop once reactants run out.',
              '**Hydrogen fuel cells** - oxidise hydrogen electrochemically (2H₂ + O₂ → 2H₂O), producing electricity continuously with only water as waste, though H₂ is explosive and energy-intensive to store/produce.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'polystyrene cup', definition: 'Low-thermal-conductivity insulated vessel placed in a beaker with a lid to minimise heat loss during calorimetry.' },
        ],
      },
    ],
    keyTerms: [
      { term: 'Exothermic', definition: 'Reaction transferring energy to the surroundings, causing temperature to rise.' },
      { term: 'Endothermic', definition: 'Reaction taking energy in from the surroundings, causing temperature to fall.' },
      { term: 'Reaction profile', definition: 'Diagram showing relative energies of reactants, products, activation energy, and overall energy change.' },
      { term: 'Fuel cell', definition: 'Electrochemical cell supplied externally with fuel (e.g. H₂) and oxygen to produce electricity continuously.' },
    ],
    checklistPoints: [
      'Draw and interpret exothermic and endothermic reaction profiles including activation energy.',
      'Calculate overall energy change from bond energy tables and explain its sign.',
      'Minimise heat loss in the polystyrene cup Required Practical and evaluate hydrogen fuel cells.',
    ],
  },

  'chem-6-1': {
    subtopicId: 'chem-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Collision Theory & Rates of Reaction',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Factors Affecting Rate of Reaction & Collision Theory',
    youtubeId: 'JK7yPzO9POU',
    videoChannel: 'Cognito',
    videoDuration: '5:37',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Collision Theory', cardId: 'chem-6-1-c1' },
      { time: '2:00', seconds: 120, label: 'Factor 1: Temperature', cardId: 'chem-6-1-c1' },
      { time: '3:01', seconds: 181, label: 'Factor 3: Surface Area', cardId: 'chem-6-1-c2' },
      { time: '4:04', seconds: 244, label: 'How Catalysts Work (Reaction Profiles)', cardId: 'chem-6-1-c3' },
    ],
    cards: [
      {
        id: 'chem-6-1-c1',
        title: 'Measuring Rates & Collision Theory',
        summary: 'Mean and tangent rates plus explaining all four rate factors via collision theory.',
        bullets: [
          '**Collision theory** states that particles react ONLY when they collide with at least the minimum **activation energy**.',
        ],
        subsections: [
          {
            heading: 'Rate Formulas & Collision Factors',
            bullets: [
              '**Measuring rate** - Mean rate = quantity of reactant used (or product formed) ÷ time taken; instantaneous rate at time t = gradient of a tangent drawn to the curve.',
              '**Concentration, gas pressure, surface area** - pack more reacting particles into the same volume (or expose more surface particles), increasing collision FREQUENCY per second.',
              '**Temperature** - particles move faster (more frequent collisions) AND a higher proportion of collisions exceed the activation energy.',
            ],
            exampleHeading: 'Worked example: Mean rate of gas production',
            examples: [
              'Magnesium and HCl produce 48 cm³ of H₂ gas in 16 seconds.',
              'Mean rate = 48 ÷ 16 = 3.0 cm³/s.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Collision theory', definition: 'The principle that chemical reactions occur only when reactant particles collide with energy greater than or equal to the activation energy.' },
        ],
      },
      {
        id: 'chem-6-1-c2',
        title: 'Catalysts & Disappearing Cross Required Practical',
        summary: 'Lower-activation-energy catalysts and measuring turbidity with sodium thiosulfate.',
        bullets: [
          'A **catalyst** speeds up a reaction without being used up by providing an alternative pathway with a LOWER activation energy.',
        ],
        subsections: [
          {
            heading: 'Required Practical: Sodium Thiosulfate + HCl',
            bullets: [
              '**Method** - mix sodium thiosulfate and dilute HCl in a conical flask over a drawn black cross; start a stopwatch and stop when opaque yellow sulfur precipitate hides the cross.',
              '**Fair test controls** - keep total volume, flask size, and the same cross/observer constant while varying concentration or temperature.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'catalyst', definition: 'A substance that increases reaction rate without being chemically changed or used up by lowering the activation energy.' },
        ],
        commonMistake: 'Students often write that a catalyst "gives particles more kinetic energy". Instead, a catalyst LOWERS THE ACTIVATION ENERGY via an alternative pathway!',
      },
      {
        id: 'chem-6-1-c3',
        title: 'Reversible Reactions & Le Chatelier’s Principle (Higher)',
        summary: 'Dynamic equilibrium in closed systems and predicting shifts with Le Chatelier’s principle.',
        bullets: [
          'In a closed system, dynamic **equilibrium** occurs when the forward and reverse reaction rates are exactly equal.',
        ],
        subsections: [
          {
            heading: 'Le Chatelier’s Principle Shifts',
            bullets: [
              '**Temperature** - raising temperature shifts equilibrium in the ENDOTHERMIC direction to absorb excess heat; cooling favours EXOTHERMIC.',
              '**Pressure (gases)** - increasing pressure shifts toward the side with FEWER gas molecules.',
              '**Concentration** - adding more reactant shifts right to make more product.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'equilibrium', definition: 'Dynamic balance in a closed reversible system where forward and reverse reaction rates are equal.' },
        ],
        memoryAid: 'Hot favours ENDO (absorbs heat); High pressure squeezes to FEWER gas moles!',
      },
    ],
    keyTerms: [
      { term: 'Activation energy', definition: 'Minimum energy that colliding particles must possess in order to react.' },
      { term: 'Catalyst', definition: 'Substance that speeds up a chemical reaction by providing an alternative pathway with lower activation energy.' },
      { term: 'Dynamic equilibrium', definition: 'State in a closed reversible system where forward and reverse rates are equal and concentrations stay constant.' },
      { term: 'Le Chatelier’s principle', definition: 'Rule stating that an equilibrium system shifts to counteract any imposed change in temperature, pressure, or concentration.' },
    ],
    checklistPoints: [
      'Calculate mean rates and draw tangents for instantaneous reaction rates.',
      'Explain temperature, concentration, pressure, surface area, and catalysts using collision frequency and activation energy.',
      'Apply Le Chatelier’s principle to predict equilibrium shifts.',
    ],
  },

  'chem-7-1': {
    subtopicId: 'chem-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Crude Oil, Fractional Distillation & Alkanes',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Fractional Distillation - Crude Oil | Hydrocarbons',
    youtubeId: '-qxeVFJh4e4',
    videoChannel: 'Cognito',
    videoDuration: '5:34',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Organic Chemistry', cardId: 'chem-7-1-c1' },
      { time: '0:19', seconds: 19, label: 'What is Crude Oil?', cardId: 'chem-7-1-c1' },
      { time: '2:25', seconds: 145, label: 'The Process of Fractional Distillation', cardId: 'chem-7-1-c2' },
      { time: '4:05', seconds: 245, label: 'Properties and Uses of Fractions', cardId: 'chem-7-1-c3' },
    ],
    cards: [
      {
        id: 'chem-7-1-c1',
        title: 'Crude Oil, Alkanes & Fractional Distillation',
        summary: 'Saturated alkanes (CₙH₂ₙ₊₂) separated by boiling point inside a fractionating column.',
        bullets: [
          'Crude oil is a finite mixture of **hydrocarbons** (compounds containing carbon and hydrogen ONLY), mostly **alkanes** with general formula **CₙH₂ₙ₊₂**.',
        ],
        subsections: [
          {
            heading: 'Fractional Distillation & Chain-Length Trends',
            bullets: [
              '**Column separation** - crude oil is vaporised and enters a column hotter at the bottom and cooler at the top; vapours rise and condense at their distinct boiling points (LPG, petrol, kerosene, diesel, heavy fuel oil).',
              '**Chain-length properties** - shorter chains have weaker intermolecular forces → LOWER boiling points, LOWER viscosity (runnier), and HIGHER flammability.',
            ],
            exampleHeading: 'First four alkanes (CₙH₂ₙ₊₂)',
            examples: [
              'Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hydrocarbons', definition: 'Organic compounds made up exclusively of hydrogen and carbon atoms.' },
          { term: 'alkanes', definition: 'Saturated hydrocarbons with only single C–C bonds and general formula CₙH₂ₙ₊₂.' },
        ],
        memoryAid: 'First 4 alkanes: Monkeys Eat Peanut Butter (Methane, Ethane, Propane, Butane)!',
      },
      {
        id: 'chem-7-1-c2',
        title: 'Combustion & Cracking of Hydrocarbons',
        summary: 'Complete combustion equations and catalytic vs steam cracking of long alkanes.',
        bullets: [
          'Complete combustion in plentiful oxygen oxidises carbon to CO₂ and hydrogen to H₂O, releasing abundant energy.',
        ],
        subsections: [
          {
            heading: 'Why & How Industry Cracks Hydrocarbons',
            bullets: [
              '**Purpose of cracking** - thermally breaks low-demand long alkanes into high-demand shorter fuels PLUS reactive alkenes for making polymers.',
              '**Catalytic vs steam cracking** - catalytic cracking passes vapour over a hot zeolite catalyst (~550 °C); steam cracking mixes vapour with steam at very high temperature (~800 °C).',
            ],
            exampleHeading: 'Worked cracking equation: Decane (C₁₀H₂₂)',
            examples: [
              'C₁₀H₂₂ → C₈H₁₈ (octane fuel) + C₂H₄ (ethene monomer).',
              'Check atom balance: C: 8 + 2 = 10 ✓; H: 18 + 4 = 22 ✓.',
            ],
          },
        ],
      },
      {
        id: 'chem-7-1-c3',
        title: 'Alkenes & Bromine Water Test for Unsaturation',
        summary: 'Reactive C=C alkenes (CₙH₂ₙ), orange-to-colourless bromine test, and addition polymers.',
        bullets: [
          'Alkenes (CₙH₂ₙ: ethene, propene, butene) are **unsaturated** hydrocarbons containing a reactive C=C double bond.',
        ],
        subsections: [
          {
            heading: 'Testing for C=C & Polymerisation',
            bullets: [
              '**Bromine water test** - alkenes turn orange bromine water COLOURLESS immediately; alkanes stay orange.',
              '**Addition polymerisation** - thousands of alkene monomers open their C=C bonds to link into long polymer chains (e.g. ethene → poly(ethene)).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'unsaturated', definition: 'Organic molecule containing one or more carbon–carbon double (C=C) bonds capable of undergoing addition reactions.' },
        ],
        commonMistake: 'Students often write that bromine water turns "clear" with alkenes. Instead, ALWAYS write "orange to COLOURLESS" — clear just means transparent!',
      },
    ],
    keyTerms: [
      { term: 'Hydrocarbon', definition: 'Molecule composed exclusively of carbon and hydrogen atoms.' },
      { term: 'Alkane', definition: 'Saturated hydrocarbon with only single C–C bonds and general formula CₙH₂ₙ₊₂.' },
      { term: 'Fractional distillation', definition: 'Separation of crude oil hydrocarbons into fractions according to boiling point inside a temperature-gradient column.' },
      { term: 'Cracking', definition: 'Thermal breakdown of long-chain hydrocarbons into shorter alkanes and alkenes.' },
    ],
    checklistPoints: [
      'Write formulae for methane, ethane, propane, and butane and describe trends in boiling point, viscosity, and flammability.',
      'Explain how fractional distillation separates crude oil based on boiling points.',
      'Balance cracking equations and state the bromine water colour change distinguishing alkenes from alkanes.',
    ],
  },

  'chem-8-1': {
    subtopicId: 'chem-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Purity, Chromatography & Gas Tests',
    readingMinutes: 8,
    videoTitle: 'GCSE Chemistry - Paper Chromatography',
    youtubeId: 'TdJ57SQ6GAQ',
    videoChannel: 'Cognito',
    videoDuration: '6:32',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'What Is Paper Chromatography?', cardId: 'chem-8-1-c1' },
      { time: '1:20', seconds: 80, label: 'Mobile Phase vs Stationary Phase', cardId: 'chem-8-1-c2' },
      { time: '3:10', seconds: 190, label: 'Setting Up the Practical', cardId: 'chem-8-1-c2' },
      { time: '4:55', seconds: 295, label: 'Calculating Rf Values & Interpreting Spots', cardId: 'chem-8-1-c3' },
    ],
    cards: [
      {
        id: 'chem-8-1-c1',
        title: 'Pure Substances & Formulations',
        summary: 'Sharp melting/boiling points for pure substances vs engineered commercial formulations.',
        bullets: [
          'In chemistry, a **pure substance** is a single element or single compound with a SHARP, specific melting and boiling point (mixtures melt and boil over a range).',
        ],
        subsections: [
          {
            heading: 'Formulations in Everyday Life',
            bullets: [
              '**Definition** - a formulation is a carefully designed mixture made to a precise measured recipe so each component provides a useful property.',
              '**Examples** - fuels, paints, medicines, alloys, fertilisers, foods, and cleaning agents.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'formulation', definition: 'A useful mixture engineered with carefully measured quantities of ingredients to perform a specific function.' },
          { term: 'pure substance', definition: 'A single element or single compound not mixed with any other substance, identified by a sharp melting and boiling point.' },
        ],
      },
      {
        id: 'chem-8-1-c2',
        title: 'Paper Chromatography & Rf Calculations',
        summary: 'Mobile vs stationary phases, pencil baselines, and computing Rf ratios.',
        bullets: [
          'Chromatography separates soluble dyes between a stationary phase (paper) and a **mobile phase** (solvent such as water or ethanol).',
        ],
        subsections: [
          {
            heading: 'Method & Rf Formula',
            bullets: [
              '**Separation principle** - more soluble substances (less attracted to paper) travel further up; a pure substance gives ONE spot, a mixture gives multiple spots.',
              '**Rf formula** - Rf = distance moved by spot ÷ distance moved by solvent front (both measured from the insoluble pencil baseline; Rf is always between 0 and 1).',
            ],
            exampleHeading: 'Worked example: Calculating Rf value',
            examples: [
              'A blue dye travels 3.6 cm from the pencil line while the solvent front travels 6.0 cm.',
              'Rf = 3.6 ÷ 6.0 = 0.60 (no units!).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'mobile phase', definition: 'The liquid solvent that moves up the chromatography paper carrying dissolved substances.' },
        ],
        commonMistake: 'Students often let the solvent sit ABOVE the pencil baseline or draw the line in ink. Instead, draw the baseline in insoluble pencil and keep the solvent level strictly BELOW the spots!',
      },
      {
        id: 'chem-8-1-c3',
        title: 'Four Core AQA Gas Tests & Ion Tests',
        summary: 'Laboratory gas tests for H₂, O₂, CO₂, and Cl₂ plus flame and precipitate tests.',
        bullets: [
          'Every GCSE Chemistry student must recall all four standard gas identification tests word-for-word.',
        ],
        subsections: [
          {
            heading: 'Gas Tests & Separate Chemistry Ion Highlights',
            bullets: [
              '**Hydrogen (H₂)** - burning splint gives a squeaky "pop".',
              '**Oxygen (O₂)** - relights a glowing wooden splint.',
              '**Carbon dioxide (CO₂)** - bubbles through limewater (Ca(OH)₂(aq)), turning it cloudy/milky white.',
              '**Chlorine (Cl₂)** - bleaches damp blue litmus paper white.',
              '**Flame & NaOH tests** - flame colours (Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ green) and NaOH precipitates (Cu²⁺ blue, Fe²⁺ green, Fe³⁺ brown).',
            ],
          },
        ],
        memoryAid: 'H₂ = Pop, O₂ = Glowing relights, CO₂ = Cloudy limewater, Cl₂ = Bleaches damp litmus white!',
      },
    ],
    keyTerms: [
      { term: 'Formulation', definition: 'Mixture specifically designed as a useful product with measured proportions of components.' },
      { term: 'Mobile phase', definition: 'Solvent that moves through the stationary paper carrying dissolved substances.' },
      { term: 'Stationary phase', definition: 'The chromatography paper that does not move and attracts dissolved components to varying degrees.' },
      { term: 'Rf value', definition: 'Ratio of distance moved by a spot to distance moved by the solvent front from the baseline.' },
    ],
    checklistPoints: [
      'Distinguish chemical purity from everyday usage and give examples of formulations.',
      'Carry out paper chromatography properly and calculate Rf values accurately.',
      'Recall all four standard gas tests (H₂, O₂, CO₂, Cl₂) cleanly.',
    ],
  },

  'chem-9-1': {
    subtopicId: 'chem-9-1',
    subtopicCode: '9.1',
    subtopicTitle: 'Earth’s Early Atmosphere & Greenhouse Effect',
    readingMinutes: 9,
    videoTitle: 'GCSE Chemistry - Evolution of the Atmosphere | How the Atmosphere Changed Over Time',
    youtubeId: 'DnFcyhsSVGg',
    videoChannel: 'Cognito',
    videoDuration: '5:11',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to the Evolution of the Atmosphere', cardId: 'chem-9-1-c1' },
      { time: '1:02', seconds: 62, label: 'The Early Atmosphere & Volcanic Activity', cardId: 'chem-9-1-c1' },
      { time: '2:37', seconds: 157, label: 'Formation of Sedimentary Rocks & Fossil Fuels', cardId: 'chem-9-1-c2' },
      { time: '3:43', seconds: 223, label: 'Recap & Modern Atmosphere', cardId: 'chem-9-1-c3' },
    ],
    cards: [
      {
        id: 'chem-9-1-c1',
        title: 'Evolution of Earth’s Atmosphere',
        summary: 'From volcanic CO₂ to oceans, carbonate rocks, fossil fuels, and photosynthetic oxygen.',
        bullets: [
          'Today’s atmosphere (~200 million years stable) is roughly **80% nitrogen (78%)**, **20% oxygen (21%)**, and <1% other gases (argon, water vapour, ~0.04% CO₂).',
        ],
        subsections: [
          {
            heading: 'How CO₂ Fell & O₂ Rose',
            bullets: [
              '**4.6 billion years ago** - intense volcanoes released mostly CO₂, water vapour, nitrogen, and traces of methane/ammonia, with virtually zero oxygen.',
              '**Oceans & limestone** - cooling condensed water vapour into oceans; CO₂ dissolved in seawater to form carbonate precipitates locked inside sedimentary limestone.',
              '**Algal photosynthesis (~2.7 bya)** - algae and plants used 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, steadily raising O₂ and locking carbon into coal, oil, and natural gas.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'photosynthesis', definition: 'Process by which algae and plants absorb CO₂ and water using sunlight to make glucose and release oxygen.' },
        ],
      },
      {
        id: 'chem-9-1-c2',
        title: 'The Greenhouse Effect & Carbon Footprints',
        summary: 'Short-wavelength solar vs long-wavelength infrared warming and cutting carbon footprints.',
        bullets: [
          '**Greenhouse gases** (CO₂, CH₄, H₂O vapour) maintain temperatures high enough to support life, but human emissions enhance global climate change.',
        ],
        subsections: [
          {
            heading: 'Mechanism & Carbon Footprints',
            bullets: [
              '**Radiation mechanism** - short-wavelength solar radiation passes through the atmosphere to warm Earth; greenhouse gases absorb longer-wavelength infrared radiation re-emitted by Earth’s surface.',
              '**Human drivers & footprints** - burning fossil fuels/deforestation raise CO₂ while cattle farming/landfill raise CH₄. A carbon footprint measures total greenhouse gases emitted over a product’s full life cycle.',
            ],
            exampleHeading: 'Concrete ways to reduce carbon footprints',
            examples: [
              'Switching electricity generation from coal to wind/solar and improving home insulation.',
              'Carbon capture and storage (CCS), eating less beef, and taxing high-emission vehicles.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'carbon footprint', definition: 'Total quantity of carbon dioxide and other greenhouse gases released across the full life cycle of a product, event, or service.' },
          { term: 'Greenhouse gases', definition: 'Atmospheric gases (CO₂, CH₄, H₂O vapour) that transmit short-wavelength solar light but absorb long-wavelength infrared radiation.' },
        ],
        commonMistake: 'Students often say greenhouse gases "reflect heat back down". Instead, write that they let SHORT-wavelength solar radiation IN and ABSORB LONG-wavelength (infrared) radiation emitted OUT from Earth!',
      },
      {
        id: 'chem-9-1-c3',
        title: 'Atmospheric Pollutants from Fuel Combustion',
        summary: 'Origins and impacts of CO, soot particulates, SO₂, and NOₓ.',
        bullets: [
          'Burning hydrocarbon fuels in engines and power stations releases four key exam pollutants.',
        ],
        subsections: [
          {
            heading: 'Four Pollutants & Their Effects',
            bullets: [
              '**Carbon monoxide (CO)** - colourless, odourless toxic gas from incomplete combustion; binds to haemoglobin, starving tissues of oxygen.',
              '**Particulates (soot/carbon)** - from incomplete combustion; cause global dimming and respiratory damage.',
              '**Sulfur dioxide (SO₂) & nitrogen oxides (NOₓ)** - from sulfur impurities in fuel (SO₂) and hot engine reactions of air N₂ + O₂ (NOₓ); cause respiratory illness and acid rain.',
            ],
          },
        ],
        memoryAid: 'Short IN, Long ABSORBED (greenhouse effect); SO₂ + NOₓ = Acid rain; CO = Toxic haemoglobin binder!',
      },
    ],
    keyTerms: [
      { term: 'Greenhouse gas', definition: 'Gas such as CO₂, CH₄, or H₂O vapour that absorbs long-wavelength infrared radiation emitted by Earth.' },
      { term: 'Carbon footprint', definition: 'Total greenhouse gas emissions generated over the full life cycle of a product or activity.' },
      { term: 'Global dimming', definition: 'Reduction in sunlight reaching Earth’s surface caused by airborne carbon particulates.' },
      { term: 'Acid rain', definition: 'Rainwater made acidic by dissolved sulfur dioxide (SO₂) and nitrogen oxides (NOₓ), damaging lakes and limestone buildings.' },
    ],
    checklistPoints: [
      'Explain how oceans, sedimentary carbonates, fossil fuels, and algal photosynthesis transformed Earth’s early CO₂ atmosphere into today’s N₂/O₂ mix.',
      'Explain the greenhouse effect mechanism via short-wavelength solar vs long-wavelength infrared radiation.',
      'State the causes and health/environmental effects of CO, particulates, SO₂, and NOₓ.',
    ],
  },

  'chem-10-1': {
    subtopicId: 'chem-10-1',
    subtopicCode: '10.1',
    subtopicTitle: 'Potable Water & Life Cycle Assessments',
    readingMinutes: 8,
    videoTitle: 'GCSE Chemistry - Potable Water - Treating Freshwater | Desalinating Seawater',
    youtubeId: 'td8WR_FOQc0',
    videoChannel: 'Cognito',
    videoDuration: '5:14',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Chemistry (8462)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Potable Water', cardId: 'chem-10-1-c1' },
      { time: '1:16', seconds: 76, label: 'Sources of Fresh Water', cardId: 'chem-10-1-c1' },
      { time: '2:56', seconds: 176, label: 'Sterilisation of Fresh Water', cardId: 'chem-10-1-c2' },
      { time: '4:20', seconds: 260, label: 'Desalination by Reverse Osmosis', cardId: 'chem-10-1-c3' },
    ],
    cards: [
      {
        id: 'chem-10-1-c1',
        title: 'Potable Water, Desalination & Waste Water Treatment',
        summary: 'Freshwater filtration & sterilisation, energy-intensive desalination, and sewage steps.',
        bullets: [
          '**Potable water** is water safe to drink (low dissolved salts and microbes) — it is NOT chemically pure water because it contains harmless dissolved mineral ions.',
        ],
        subsections: [
          {
            heading: 'Treating Fresh, Salty & Waste Water',
            bullets: [
              '**UK fresh water** - filter through mesh screens and sand/gravel beds to remove insoluble solids, then sterilise with chlorine, ozone, or UV light to kill microbes.',
              '**Desalination of seawater** - uses distillation or reverse osmosis; both consume huge amounts of energy and are expensive.',
              '**Sewage treatment** - screening & grit removal → sedimentation (liquid effluent vs solid sludge) → anaerobic digestion of sludge (biogas + fertiliser) and aerobic biological treatment of effluent.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'desalination', definition: 'Removal of dissolved salts from seawater by distillation or reverse osmosis to produce potable water.' },
        ],
      },
      {
        id: 'chem-10-1-c2',
        title: 'Alternative Metal Extraction: Phytomining & Bioleaching (Higher)',
        summary: 'Extracting copper sustainably from low-grade ores using plants and bacteria.',
        bullets: [
          'As high-grade copper ores run low, biological extraction avoids traditional digging, moving, and disposing of vast rock heaps.',
        ],
        subsections: [
          {
            heading: 'Two Low-Grade Copper Methods',
            bullets: [
              '**Phytomining** - plants grown on copper-rich soil absorb metal compounds → plants are harvested and burned to produce ash containing copper compounds.',
              '**Bioleaching** - bacteria feed on low-grade ores to produce leachate solutions containing soluble copper ions.',
              '**Final recovery** - dissolve ash in sulfuric acid and recover pure copper from either solution by displacement with scrap iron or electrolysis.',
            ],
            exampleHeading: 'Copper displacement with scrap iron',
            examples: [
              'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s) — cheap scrap iron displaces less reactive copper.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'phytomining', definition: 'Growing plants on low-grade ore soil to absorb metal ions, then burning the harvested plants to recover metal compounds from the ash.' },
          { term: 'bioleaching', definition: 'Using bacteria to extract soluble metal ions into a leachate solution from low-grade ores.' },
        ],
      },
      {
        id: 'chem-10-1-c3',
        title: 'Life Cycle Assessments (LCAs) & Reduce, Reuse, Recycle',
        summary: 'All four LCA stages, subjective bias risks, and conserving finite resources.',
        bullets: [
          'A Life Cycle Assessment evaluates environmental impact across **four stages**: (1) Extracting & processing raw materials, (2) Manufacturing & packaging, (3) Use & operation during lifetime, (4) Disposal at end of life.',
        ],
        subsections: [
          {
            heading: 'LCA Limitations & Sustainability',
            bullets: [
              '**Objectivity limits** - water and energy inputs are measurable, but scoring pollutant harm involves subjective value judgements, so selective LCAs can be misused in advertising.',
              '**Recycling benefits** - melting and recasting scrap metals or glass uses far less energy than extracting ores and cuts landfill waste.',
            ],
          },
        ],
        memoryAid: '4 LCA stages: Extract → Make → Use → Dispose (plus transport at every step)!',
        commonMistake: 'Students often call potable water "pure water". In chemistry, pure water contains ONLY H₂O molecules, whereas potable tap water contains dissolved minerals.',
      },
    ],
    keyTerms: [
      { term: 'Potable water', definition: 'Water containing low levels of dissolved salts and microbes so that it is safe to drink.' },
      { term: 'Phytomining', definition: 'Extracting metals from low-grade soil ores by growing and harvesting metal-absorbing plants.' },
      { term: 'Bioleaching', definition: 'Using bacteria to produce a metal-rich leachate solution from low-grade ores.' },
      { term: 'Life Cycle Assessment', definition: 'Evaluation of a product’s environmental impact across raw material extraction, manufacture, use, and disposal.' },
    ],
    checklistPoints: [
      'Distinguish potable water from chemically pure water and describe filtration, sterilisation, and desalination.',
      'Outline the four stages of urban sewage waste water treatment.',
      'Explain phytomining and bioleaching and how copper is recovered using scrap iron or electrolysis.',
      'Evaluate products using all four LCA stages and recognise limitations of subjective LCAs.',
    ],
  },
};

export const CHEMISTRY_QUIZZES: QuizQuestion[] = [
  // chem-1-1 (5)
  { id: 'chem-q-101', subtopicId: 'chem-1-1', type: 'mcq', marks: 1, prompt: 'What is the relative mass and relative charge of a neutron?', options: ['Mass 1, Charge +1', 'Mass 1, Charge 0', 'Mass 0, Charge −1', 'Mass 1, Charge −1'], correctIndex: 1, explanation: 'Neutrons sit in the nucleus with a relative mass of 1 and zero electrical charge.' },
  { id: 'chem-q-102', subtopicId: 'chem-1-1', type: 'fill-blank', marks: 2, prompt: 'Complete the definition of isotopes.', segments: ['Isotopes are atoms of the same element with the same number of ', ' but different numbers of ', '.'], wordBank: ['protons', 'neutrons', 'electrons', 'shells'], answers: ['protons', 'neutrons'], explanation: 'Isotopes share identical atomic (proton) number and differ only in neutron count.' },
  { id: 'chem-q-103', subtopicId: 'chem-1-1', type: 'mcq', marks: 1, prompt: 'What is the electron configuration of a neutral sodium atom (atomic number 11)?', options: ['2,9', '2,8,1', '2,6,3', '1,8,2'], correctIndex: 1, explanation: 'Shells fill 2, 8, 8: 2 + 8 + 1 = 11 electrons, placing sodium in Group 1.' },
  { id: 'chem-q-104', subtopicId: 'chem-1-1', type: 'matching', marks: 2, prompt: 'Match each mixture to the best physical separation technique.', pairs: [{ left: 'Sand and water', right: 'Filtration' }, { left: 'Dissolved salt crystals from brine', right: 'Crystallisation' }, { left: 'Ethanol and water (different boiling points)', right: 'Fractional distillation' }, { left: 'Coloured dyes in ink', right: 'Paper chromatography' }], explanation: 'Mixtures are separated physically based on solubility or boiling point differences.' },
  { id: 'chem-q-105', subtopicId: 'chem-1-1', type: 'short-answer', marks: 2, prompt: 'Chlorine consists of 75% ³⁵Cl and 25% ³⁷Cl. Calculate the relative atomic mass (Ar) of chlorine.', rubric: { maxMarks: 2, modelAnswer: 'Ar = ((75 × 35) + (25 × 37)) ÷ 100 = 3550 ÷ 100 = 35.5.', markPoints: [{ id: 'mp1', markDescription: 'Sets up weighted sum (75×35 + 25×37) ÷ 100', requiredKeywordGroups: [['75', '35'], ['25', '37']] }, { id: 'mp2', markDescription: 'Calculates Ar = 35.5', numericMatch: { value: 35.5, tolerance: 0.05 } }] }, explanation: 'Weighted mean: (2625 + 925) ÷ 100 = 35.5.' },

  // chem-1-2 (5)
  { id: 'chem-q-106', subtopicId: 'chem-1-2', type: 'short-answer', marks: 3, prompt: 'Explain why potassium (Group 1) is more reactive than lithium (Group 1).', rubric: { maxMarks: 3, modelAnswer: 'Potassium has more electron shells so its outer electron is further from the nucleus with more shielding. The electrostatic attraction is weaker, so the outer electron is lost more easily.', markPoints: [{ id: 'mp1', markDescription: 'Outer electron is further from the nucleus / more shells', requiredKeywordGroups: [['further', 'larger', 'distance', 'more shells']] }, { id: 'mp2', markDescription: 'Greater shielding / weaker nuclear attraction', requiredKeywordGroups: [['shielding', 'weaker', 'less attraction']] }, { id: 'mp3', markDescription: 'Outer electron is lost more easily', requiredKeywordGroups: [['lost', 'lose'], ['more easily', 'easier']] }] }, explanation: 'Down Group 1, extra shells increase radius and shielding, making the single outer electron easier to lose.' },
  { id: 'chem-q-107', subtopicId: 'chem-1-2', type: 'mcq', marks: 1, prompt: 'Why did Dmitri Mendeleev leave gaps in his 1869 periodic table?', options: ['To keep every row exactly 10 elements wide', 'For undiscovered elements whose properties he predicted from group trends', 'Because noble gases were too heavy to include', 'To separate metals from non-metals randomly'], correctIndex: 1, explanation: 'Mendeleev left gaps for undiscovered elements (such as gallium) so chemically similar elements aligned in groups.' },
  { id: 'chem-q-108', subtopicId: 'chem-1-2', type: 'fill-blank', marks: 2, prompt: 'Complete the reactivity trends for Group 1 and Group 7 going DOWN each group.', segments: ['Going down Group 1, reactivity ', ', whereas going down Group 7, reactivity ', '.'], wordBank: ['increases', 'decreases', 'stays constant', 'drops to zero'], answers: ['increases', 'decreases'], explanation: 'Group 1 metals lose an electron more easily down the group; Group 7 halogens gain an electron less easily down the group.' },
  { id: 'chem-q-109', subtopicId: 'chem-1-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Which TWO statements about Group 0 (Noble Gases) are true?', options: ['They are unreactive because they have full outer electron shells', 'Their boiling points decrease going down the group', 'They exist as single monatomic atoms', 'They react vigorously with cold water'], correctIndices: [0, 2], explanation: 'Group 0 gases are monatomic with stable full outer shells; boiling points increase down the group.' },
  { id: 'chem-q-110', subtopicId: 'chem-1-2', type: 'mcq', marks: 1, prompt: 'Which halogen displacement reaction will occur in aqueous solution?', options: ['I₂ + 2KCl', 'Br₂ + 2KCl', 'Cl₂ + 2KBr', 'I₂ + 2KBr'], correctIndex: 2, explanation: 'Chlorine is more reactive than bromine, so Cl₂ displaces Br⁻ to form 2KCl + Br₂.' },

  // chem-2-1 (5)
  { id: 'chem-q-201', subtopicId: 'chem-2-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO properties of sodium chloride (a giant ionic lattice).', options: ['Conducts electricity when solid', 'Conducts electricity when molten or dissolved in water', 'Low melting point due to weak intermolecular forces', 'High melting point due to strong electrostatic forces between ions'], correctIndices: [1, 3], explanation: 'Giant ionic lattices have high melting points and conduct only when molten or aqueous so ions are free to move.' },
  { id: 'chem-q-202', subtopicId: 'chem-2-1', type: 'matching', marks: 3, prompt: 'Match each bonding model to its particle description.', pairs: [{ left: 'Ionic bonding', right: 'Electrostatic attraction between oppositely charged ions' }, { left: 'Covalent bonding', right: 'Shared pairs of electrons between non-metal atoms' }, { left: 'Metallic bonding', right: 'Positive metal ions in a sea of delocalised electrons' }], explanation: 'Ionic transfers electrons; covalent shares pairs; metallic surrounds cations with delocalised electrons.' },
  { id: 'chem-q-203', subtopicId: 'chem-2-1', type: 'diagram-label', marks: 2, prompt: 'Use the ionic and covalent bonding diagram to identify each bonding mechanism.', diagram: 'ionic-covalent-bonding', labels: [{ marker: 'Metal + non-metal electron behaviour', options: ['Electrons are transferred to form ions', 'Electrons are shared in pairs'], answer: 'Electrons are transferred to form ions' }, { marker: 'Non-metal + non-metal electron behaviour', options: ['Electrons are transferred to form ions', 'Electrons are shared in pairs'], answer: 'Electrons are shared in pairs' }], explanation: 'Ionic bonds transfer electrons between metals and non-metals; covalent bonds share electron pairs between non-metals.' },
  { id: 'chem-q-204', subtopicId: 'chem-2-1', type: 'fill-blank', marks: 2, prompt: 'Complete the explanation for why simple covalent molecules like methane have low boiling points.', segments: ['Boiling methane overcomes only weak ', ' forces between molecules, NOT the strong ', ' bonds inside molecules.'], wordBank: ['intermolecular', 'covalent', 'ionic', 'metallic'], answers: ['intermolecular', 'covalent'], explanation: 'Only weak intermolecular forces break during melting/boiling of simple molecular substances.' },
  { id: 'chem-q-205', subtopicId: 'chem-2-1', type: 'short-answer', marks: 2, prompt: 'Explain why bronze (an alloy) is harder than pure copper.', rubric: { maxMarks: 2, modelAnswer: 'Alloys contain atoms of different sizes that distort the regular layers of metal atoms, making it much harder for layers to slide over each other.', markPoints: [{ id: 'mp1', markDescription: 'Contains atoms of different sizes distorting regular layers', requiredKeywordGroups: [['different size', 'distort', 'disrupt'], ['layer']] }, { id: 'mp2', markDescription: 'Prevents / makes it harder for layers to slide', requiredKeywordGroups: [['slide', 'sliding'], ['harder', 'cannot', 'prevent', 'stop', 'difficult']] }] }, explanation: 'Different-sized atoms break up regular metallic layers so they cannot slide easily.' },

  // chem-2-2 (5)
  { id: 'chem-q-206', subtopicId: 'chem-2-2', type: 'mcq', marks: 1, prompt: 'Why is graphite soft and able to conduct electricity?', options: ['Each carbon forms 4 strong covalent bonds with no free electrons', 'Layers are held by weak intermolecular forces and each carbon has 1 delocalised electron', 'It contains mobile positive and negative ions', 'It consists of individual spherical C₆₀ molecules'], correctIndex: 1, explanation: 'Graphite’s 3-bond hexagonal layers slide over weak forces while 1 delocalised electron per atom conducts.' },
  { id: 'chem-q-207', subtopicId: 'chem-2-2', type: 'fill-blank', marks: 2, prompt: 'Complete the carbon bonding counts in diamond and graphite.', segments: ['Each carbon atom forms ', ' covalent bonds in diamond and ', ' covalent bonds in graphite.'], wordBank: ['4', '3', '2', '6'], answers: ['4', '3'], explanation: 'Diamond has 4 bonds per carbon (no free electrons); graphite has 3 bonds + 1 delocalised electron.' },
  { id: 'chem-q-208', subtopicId: 'chem-2-2', type: 'matching', marks: 2, prompt: 'Match each carbon allotrope to its structure and application.', pairs: [{ left: 'Diamond', right: 'Rigid 3D 4-bond lattice; cutting tools' }, { left: 'Graphite', right: 'Conductive sliding layers; electrolysis electrodes' }, { left: 'Graphene', right: 'Single one-atom-thick sheet; flexible electronics' }, { left: 'Carbon nanotubes', right: 'Cylindrical fullerenes; high-strength composites' }], explanation: 'Link bonding geometry directly to macroscopic material properties.' },
  { id: 'chem-q-209', subtopicId: 'chem-2-2', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO limitations of the simple solid-sphere particle model of matter.', options: ['It shows no forces between particles', 'It assumes particles are solid inelastic spheres', 'It shows solids with particles further apart than gases', 'It predicts gases cannot be compressed'], correctIndices: [0, 1], explanation: 'The simple sphere model ignores intermolecular/electrostatic forces and assumes rigid solid spheres.' },
  { id: 'chem-q-210', subtopicId: 'chem-2-2', type: 'short-answer', marks: 2, prompt: 'Explain why diamond has a very high melting point and does not conduct electricity.', rubric: { maxMarks: 2, modelAnswer: 'Each carbon atom forms 4 strong covalent bonds throughout a giant structure requiring huge energy to break, and there are no delocalised electrons or mobile ions to carry charge.', markPoints: [{ id: 'mp1', markDescription: 'Many strong covalent bonds need lots of energy to break', requiredKeywordGroups: [['strong', 'many'], ['covalent'], ['energy', 'break']] }, { id: 'mp2', markDescription: 'No delocalised/free electrons to carry charge', requiredKeywordGroups: [['no', 'zero', 'not'], ['delocalis', 'free electron']] }] }, explanation: '4 covalent bonds per carbon leave zero free electrons and create an extraordinarily strong giant lattice.' },

  // chem-3-1 (5)
  { id: 'chem-q-301', subtopicId: 'chem-3-1', type: 'short-answer', marks: 2, prompt: 'Calculate the number of moles in 25 g of calcium carbonate (CaCO₃, Mr = 100).', rubric: { maxMarks: 2, modelAnswer: 'Moles = 25 ÷ 100 = 0.25 mol.', markPoints: [{ id: 'mp1', markDescription: 'Correct substitution 25 ÷ 100', requiredKeywordGroups: [['25'], ['100']] }, { id: 'mp2', markDescription: 'Calculates 0.25 mol', numericMatch: { value: 0.25, tolerance: 0.01 } }] }, explanation: 'n = m ÷ Mr = 25 ÷ 100 = 0.25 mol.' },
  { id: 'chem-q-302', subtopicId: 'chem-3-1', type: 'mcq', marks: 1, prompt: 'What volume does 0.50 mol of carbon dioxide gas occupy at room temperature and pressure (24 dm³/mol)?', options: ['6 dm³', '12 dm³', '24 dm³', '48 dm³'], correctIndex: 1, explanation: 'Volume = moles × 24 = 0.50 × 24 = 12 dm³.' },
  { id: 'chem-q-303', subtopicId: 'chem-3-1', type: 'fill-blank', marks: 2, prompt: 'Complete the concentration calculation for 10 g of NaCl dissolved in 500 cm³ of water.', segments: ['First convert 500 cm³ into ', ' dm³, then divide mass by volume to get ', ' g/dm³.'], wordBank: ['0.5', '20', '5', '0.02', '500'], answers: ['0.5', '20'], explanation: '500 ÷ 1,000 = 0.5 dm³; c = 10 ÷ 0.5 = 20 g/dm³.' },
  { id: 'chem-q-304', subtopicId: 'chem-3-1', type: 'mcq', marks: 1, prompt: 'Why does the mass measured on a balance DECREASE when calcium carbonate is heated strongly in an open crucible?', options: ['Atoms are destroyed during heating', 'Carbon dioxide gas escapes into the air', 'Calcium evaporates as a gas', 'Oxygen reacts from the air'], correctIndex: 1, explanation: 'CaCO₃(s) → CaO(s) + CO₂(g): mass is conserved overall, but CO₂ gas escapes the open crucible.' },
  { id: 'chem-q-305', subtopicId: 'chem-3-1', type: 'matching', marks: 2, prompt: 'Match each quantitative chemistry equation to its formula.', pairs: [{ left: 'Moles from mass', right: 'mass (g) ÷ Mr' }, { left: 'Concentration (g/dm³)', right: 'mass (g) ÷ volume (dm³)' }, { left: 'Percentage yield', right: '(actual ÷ theoretical) × 100' }, { left: 'Gas volume (RTP)', right: 'moles × 24 dm³' }], explanation: 'Keep all four quantitative equations clear and always convert cm³ to dm³.' },

  // chem-4-1 (5)
  { id: 'chem-q-401', subtopicId: 'chem-4-1', type: 'mcq', marks: 1, prompt: 'If an acidic solution’s pH decreases from pH 4 to pH 2, how does its H⁺ ion concentration change?', options: ['Increases by a factor of 2', 'Increases by a factor of 20', 'Increases by a factor of 100', 'Decreases by a factor of 100'], correctIndex: 2, explanation: 'Each 1-unit drop in pH is ×10 H⁺ concentration; a 2-unit drop is 10 × 10 = ×100.' },
  { id: 'chem-q-402', subtopicId: 'chem-4-1', type: 'fill-blank', marks: 2, prompt: 'Complete the electrode rules for molten aluminium oxide electrolysis.', segments: ['Al₂O₃ is dissolved in molten ', ' to lower its melting point, and Al³⁺ ions are reduced at the negative ', '.'], wordBank: ['cryolite', 'cathode', 'anode', 'water', 'carbon'], answers: ['cryolite', 'cathode'], explanation: 'Cryolite lowers the operating melting point; positive Al³⁺ cations gain electrons at the negative cathode.' },
  { id: 'chem-q-403', subtopicId: 'chem-4-1', type: 'mcq', marks: 1, prompt: 'What gas is produced at the CATHODE (−) during electrolysis of aqueous sodium chloride (NaCl(aq))?', options: ['Sodium metal', 'Hydrogen gas', 'Chlorine gas', 'Oxygen gas'], correctIndex: 1, explanation: 'Sodium is MORE reactive than hydrogen, so hydrogen gas forms at the cathode while Cl₂ forms at the anode.' },
  { id: 'chem-q-404', subtopicId: 'chem-4-1', type: 'matching', marks: 2, prompt: 'Match each chemical changes concept to its exact meaning.', pairs: [{ left: 'Strong acid (e.g. HCl)', right: 'Completely ionises into H⁺ ions in water' }, { left: 'Weak acid (e.g. ethanoic)', right: 'Only partially ionises in water' }, { left: 'Oxidation (OIL)', right: 'Loss of electrons' }, { left: 'Reduction (RIG)', right: 'Gain of electrons' }], explanation: 'Don’t confuse acid strength (degree of ionisation) with concentration (amount per dm³).' },
  { id: 'chem-q-405', subtopicId: 'chem-4-1', type: 'short-answer', marks: 2, prompt: 'In making pure copper(II) sulfate crystals from sulfuric acid and copper(II) oxide, why is excess CuO added and then filtered?', rubric: { maxMarks: 2, modelAnswer: 'Excess copper(II) oxide ensures all the sulfuric acid completely reacts (neutralises), and filtration removes the unreacted insoluble solid CuO to leave a pure salt solution.', markPoints: [{ id: 'mp1', markDescription: 'Excess ensures all acid is completely reacted/neutralised', requiredKeywordGroups: [['all', 'complete'], ['acid'], ['react', 'neutralis']] }, { id: 'mp2', markDescription: 'Filtration removes unreacted insoluble CuO solid', requiredKeywordGroups: [['filter', 'filtration'], ['unreacted', 'excess', 'insoluble', 'solid']] }] }, explanation: 'Adding excess insoluble base guarantees zero leftover acid, and filtering removes the spare solid.' },

  // chem-5-1 (5)
  { id: 'chem-q-501', subtopicId: 'chem-5-1', type: 'mcq', marks: 1, prompt: 'During a neutralisation reaction inside a polystyrene cup, the thermometer temperature rises by 9 °C. What type of reaction is this?', options: ['Endothermic', 'Exothermic', 'Thermal decomposition', 'Electrolysis'], correctIndex: 1, explanation: 'Energy is transferred to the surroundings causing their temperature to rise — exothermic.' },
  { id: 'chem-q-502', subtopicId: 'chem-5-1', type: 'diagram-label', marks: 2, prompt: 'Use the exothermic and endothermic reaction profile diagram to identify each feature.', diagram: 'exothermic-endothermic', labels: [{ marker: 'Exothermic product energy level', options: ['Lower than reactants', 'Higher than reactants'], answer: 'Lower than reactants' }, { marker: 'Upward hump from reactants to peak', options: ['Activation energy (Ea)', 'Overall energy change'], answer: 'Activation energy (Ea)' }], explanation: 'Exothermic reactions lose chemical energy to surroundings (products lower); the peak height above reactants is Ea.' },
  { id: 'chem-q-503', subtopicId: 'chem-5-1', type: 'fill-blank', marks: 2, prompt: 'Complete the BENDO/MEXO bond-energy rule.', segments: ['Breaking reactant bonds is ', ', whereas forming product bonds is ', '.'], wordBank: ['endothermic', 'exothermic', 'neutral', 'reversible'], answers: ['endothermic', 'exothermic'], explanation: 'Breaking takes energy in (endothermic); making releases energy (exothermic).' },
  { id: 'chem-q-504', subtopicId: 'chem-5-1', type: 'short-answer', marks: 2, prompt: 'For H₂ + Cl₂ → 2HCl, total energy to break bonds is 679 kJ/mol and energy released making bonds is 864 kJ/mol. Calculate the overall energy change and state whether it is exothermic or endothermic.', rubric: { maxMarks: 2, modelAnswer: 'Overall energy change = 679 − 864 = −185 kJ/mol. Because it is negative, the reaction is exothermic.', markPoints: [{ id: 'mp1', markDescription: 'Calculates −185 kJ/mol', numericMatch: { value: -185, tolerance: 1 } }, { id: 'mp2', markDescription: 'Identifies reaction as exothermic', requiredKeywordGroups: [['exothermic']] }] }, explanation: 'Broken − Made = 679 − 864 = −185 kJ/mol (negative → exothermic).' },
  { id: 'chem-q-505', subtopicId: 'chem-5-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO advantages of hydrogen fuel cells over petrol engines.', options: ['Only waste product at the exhaust is water', 'Hydrogen gas is denser and safer to store than petrol', 'Produces electricity continuously as long as fuel is supplied', 'Hydrogen requires zero energy to manufacture'], correctIndices: [0, 2], explanation: 'Fuel cells emit only water and run continuously with fuel, though H₂ storage and production remain challenges.' },

  // chem-6-1 (5)
  { id: 'chem-q-601', subtopicId: 'chem-6-1', type: 'mcq', marks: 1, prompt: 'How does adding a catalyst increase the rate of a reaction?', options: ['It increases the kinetic energy of all reactant particles', 'It lowers the activation energy via an alternative pathway', 'It increases the concentration of products', 'It gets permanently used up to donate extra atoms'], correctIndex: 1, explanation: 'A catalyst lowers activation energy so a greater proportion of collisions are successful.' },
  { id: 'chem-q-602', subtopicId: 'chem-6-1', type: 'fill-blank', marks: 2, prompt: 'Complete the collision theory explanation for increasing temperature.', segments: ['Heating increases particle kinetic energy so collisions are more ', ' and a higher proportion exceed the ', '.'], wordBank: ['frequent', 'activation energy', 'slow', 'relative mass'], answers: ['frequent', 'activation energy'], explanation: 'Higher temperature boosts both collision frequency and the proportion of successful collisions.' },
  { id: 'chem-q-603', subtopicId: 'chem-6-1', type: 'mcq', marks: 1, prompt: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (forward reaction exothermic), what happens to ammonia yield when pressure is INCREASED?', options: ['Yield increases because the right side has fewer gas molecules (2 vs 4)', 'Yield decreases because the left side has more gas molecules', 'Yield stays unchanged', 'Ammonia decomposes completely'], correctIndex: 0, explanation: '4 gas moles on left → 2 gas moles on right; higher pressure shifts equilibrium toward fewer gas molecules (right).' },
  { id: 'chem-q-604', subtopicId: 'chem-6-1', type: 'matching', marks: 2, prompt: 'Match each Le Chatelier change to the direction equilibrium shifts.', pairs: [{ left: 'Increase temperature', right: 'Shifts in the endothermic direction' }, { left: 'Decrease temperature', right: 'Shifts in the exothermic direction' }, { left: 'Increase gas pressure', right: 'Shifts toward fewer gas molecules' }, { left: 'Add more reactant', right: 'Shifts right to produce more product' }], explanation: 'An equilibrium system always shifts to counteract any imposed change.' },
  { id: 'chem-q-605', subtopicId: 'chem-6-1', type: 'short-answer', marks: 2, prompt: 'Explain why powdered marble chips react faster with hydrochloric acid than the same mass of large marble lumps.', rubric: { maxMarks: 2, modelAnswer: 'Powdered marble has a much larger surface area to volume ratio, exposing more reactant particles so there are more frequent successful collisions per second.', markPoints: [{ id: 'mp1', markDescription: 'Larger surface area (to volume ratio) / more particles exposed', requiredKeywordGroups: [['surface area', 'exposed']] }, { id: 'mp2', markDescription: 'More frequent collisions per second', requiredKeywordGroups: [['frequent', 'frequency', 'more collisions', 'per second']] }] }, explanation: 'Greater exposed surface area increases collision frequency per second.' },

  // chem-7-1 (5)
  { id: 'chem-q-701', subtopicId: 'chem-7-1', type: 'mcq', marks: 1, prompt: 'Which reagent distinguishes an alkene from an alkane by changing from orange to colourless?', options: ['Limewater', 'Bromine water', 'Iodine solution', 'Silver nitrate'], correctIndex: 1, explanation: 'Alkenes rapidly decolourise orange bromine water to colourless across their C=C double bond.' },
  { id: 'chem-q-702', subtopicId: 'chem-7-1', type: 'fill-blank', marks: 2, prompt: 'Complete the general formulas for alkanes and alkenes.', segments: ['Saturated alkanes follow ', ', whereas unsaturated alkenes containing a C=C double bond follow ', '.'], wordBank: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CH₄'], answers: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ'], explanation: 'Alkanes are saturated (CₙH₂ₙ₊₂); alkenes have 2 fewer hydrogens because of their C=C bond (CₙH₂ₙ).' },
  { id: 'chem-q-703', subtopicId: 'chem-7-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Which TWO properties describe SHORT-chain hydrocarbons compared with long-chain hydrocarbons?', options: ['Lower boiling point (condense near top of column)', 'Higher viscosity (thick and sticky)', 'Higher flammability (ignite easily)', 'Stronger intermolecular forces'], correctIndices: [0, 2], explanation: 'Short-chain alkanes have weak intermolecular forces, giving low boiling points, low viscosity, and high flammability.' },
  { id: 'chem-q-704', subtopicId: 'chem-7-1', type: 'matching', marks: 2, prompt: 'Match each organic chemistry term to its exact description.', pairs: [{ left: 'Propane', right: 'Alkane with formula C₃H₈' }, { left: 'Fractional distillation', right: 'Separates crude oil fractions by boiling point' }, { left: 'Catalytic cracking', right: 'Hot zeolite catalyst breaking long alkanes' }, { left: 'Ethene (C₂H₄)', right: 'Alkene monomer used to make poly(ethene)' }], explanation: 'Master alkane names (Monkeys Eat Peanut Butter), distillation, cracking, and alkenes.' },
  { id: 'chem-q-705', subtopicId: 'chem-7-1', type: 'short-answer', marks: 2, prompt: 'Balance the cracking equation C₁₂H₂₆ → C₈H₁₈ + ? and explain why industry cracks long-chain alkanes.', rubric: { maxMarks: 2, modelAnswer: 'The missing alkene is C₄H₈ (butene, or 2C₂H₄). Industry cracks long alkanes because demand for shorter fuels (like petrol) and alkenes for polymers is much higher than supply from crude oil.', markPoints: [{ id: 'mp1', markDescription: 'Identifies C₄H₈ (or 2C₂H₄)', requiredKeywordGroups: [['c4h8', 'c₄h₈', 'butene', '2c2h4', '2c₂h₄']] }, { id: 'mp2', markDescription: 'Meets high demand for shorter fuels and alkenes/polymers', requiredKeywordGroups: [['fuel', 'petrol', 'shorter'], ['alkene', 'polymer', 'demand']] }] }, explanation: 'C: 12 − 8 = 4, H: 26 − 18 = 8 → C₄H₈; cracking matches supply to fuel and polymer demand.' },

  // chem-8-1 (5)
  { id: 'chem-q-801', subtopicId: 'chem-8-1', type: 'mcq', marks: 1, prompt: 'Which gas bleaches damp blue litmus paper white?', options: ['Hydrogen', 'Oxygen', 'Carbon dioxide', 'Chlorine'], correctIndex: 3, explanation: 'Chlorine gas bleaches damp litmus paper white.' },
  { id: 'chem-q-802', subtopicId: 'chem-8-1', type: 'fill-blank', marks: 2, prompt: 'Complete the paper chromatography setup and Rf calculation (spot = 3.6 cm, solvent front = 6.0 cm).', segments: ['Draw the baseline in insoluble ', ' and calculate Rf = 3.6 ÷ 6.0 = ', '.'], wordBank: ['pencil', '0.60', 'ink', '1.67', '0.36'], answers: ['pencil', '0.60'], explanation: 'Graphite pencil will not dissolve and run up the paper; Rf = 3.6 ÷ 6.0 = 0.60.' },
  { id: 'chem-q-803', subtopicId: 'chem-8-1', type: 'matching', marks: 2, prompt: 'Match each of the four AQA gases to its positive laboratory test.', pairs: [{ left: 'Hydrogen (H₂)', right: 'Burning splint produces a squeaky pop' }, { left: 'Oxygen (O₂)', right: 'Relights a glowing wooden splint' }, { left: 'Carbon dioxide (CO₂)', right: 'Turns limewater cloudy/milky white' }, { left: 'Chlorine (Cl₂)', right: 'Bleaches damp blue litmus paper white' }], explanation: 'Learn all four gas tests word-for-word for GCSE Paper 2.' },
  { id: 'chem-q-804', subtopicId: 'chem-8-1', type: 'mcq', marks: 1, prompt: 'How can a chemist confirm experimentally that a white solid sample is chemically pure?', options: ['It tastes clean and looks white', 'It melts sharply at one exact fixed temperature rather than over a range', 'It dissolves completely in water', 'It produces three spots on a chromatogram'], correctIndex: 1, explanation: 'A chemically pure substance has a sharp, exact melting and boiling point and produces a single chromatography spot.' },
  { id: 'chem-q-805', subtopicId: 'chem-8-1', type: 'short-answer', marks: 2, prompt: 'Define a formulation and give two everyday examples.', rubric: { maxMarks: 2, modelAnswer: 'A formulation is a useful mixture designed to a precise measured recipe so each component gives a specific property. Examples include paints, medicines, fuels, alloys, or fertilisers.', markPoints: [{ id: 'mp1', markDescription: 'Useful mixture with carefully measured/designed proportions', requiredKeywordGroups: [['mixture'], ['designed', 'measured', 'recipe', 'specific', 'useful']] }, { id: 'mp2', markDescription: 'Gives valid examples (paints, medicines, fuels, alloys, fertilisers, cleaning agents)', requiredKeywordGroups: [['paint', 'medicine', 'fuel', 'alloy', 'fertiliser', 'cleaning', 'food']] }] }, explanation: 'Formulations combine carefully measured ingredients for targeted performance.' },

  // chem-9-1 (5)
  { id: 'chem-q-901', subtopicId: 'chem-9-1', type: 'mcq', marks: 1, prompt: 'Which two processes were primarily responsible for decreasing CO₂ levels in Earth’s early atmosphere?', options: ['Volcanic eruptions and burning fossil fuels', 'Dissolving in oceans (carbonate rocks) and photosynthesis by early algae/plants', 'Rusting of iron and nitrogen fixation', 'Acid rain and global dimming'], correctIndex: 1, explanation: 'CO₂ dissolved in newly formed oceans to form sedimentary carbonates and was absorbed by photosynthesising algae and plants.' },
  { id: 'chem-q-902', subtopicId: 'chem-9-1', type: 'fill-blank', marks: 2, prompt: 'Complete the greenhouse effect radiation mechanism.', segments: ['Greenhouse gases let ', '-wavelength solar light pass through to warm Earth, then absorb ', '-wavelength infrared radiation emitted from Earth.'], wordBank: ['short', 'long', 'gamma', 'ultraviolet'], answers: ['short', 'long'], explanation: 'Short-wavelength solar radiation enters; long-wavelength infrared emitted by Earth is absorbed by greenhouse gases.' },
  { id: 'chem-q-903', subtopicId: 'chem-9-1', type: 'matching', marks: 2, prompt: 'Match each atmospheric pollutant to its main harm.', pairs: [{ left: 'Carbon monoxide (CO)', right: 'Toxic colourless gas binding to haemoglobin' }, { left: 'Carbon particulates (soot)', right: 'Global dimming and respiratory damage' }, { left: 'Sulfur dioxide (SO₂)', right: 'Acid rain and respiratory issues' }, { left: 'Methane (CH₄)', right: 'Potent greenhouse gas from cattle and landfill' }], explanation: 'Distinguish greenhouse gases (CO₂, CH₄) from toxic/acid-rain pollutants (CO, soot, SO₂, NOₓ).' },
  { id: 'chem-q-904', subtopicId: 'chem-9-1', type: 'mcq', marks: 1, prompt: 'Approximately what percentages of nitrogen and oxygen make up Earth’s modern atmosphere?', options: ['50% nitrogen, 50% oxygen', '78% (~80%) nitrogen, 21% (~20%) oxygen', '95% carbon dioxide, 4% nitrogen', '21% nitrogen, 78% oxygen'], correctIndex: 1, explanation: 'Earth’s atmosphere has been ~80% nitrogen and ~20% oxygen for about 200 million years.' },
  { id: 'chem-q-905', subtopicId: 'chem-9-1', type: 'short-answer', marks: 2, prompt: 'Explain how nitrogen oxides (NOₓ) are formed inside a petrol car engine and state one environmental impact.', rubric: { maxMarks: 2, modelAnswer: 'High temperatures inside the car engine cause nitrogen and oxygen from the air to react together to form nitrogen oxides. They dissolve in rainwater to cause acid rain (and respiratory problems).', markPoints: [{ id: 'mp1', markDescription: 'Air nitrogen and oxygen react at high engine temperatures', requiredKeywordGroups: [['high temperature', 'hot'], ['nitrogen', 'oxygen']] }, { id: 'mp2', markDescription: 'Causes acid rain or respiratory problems', requiredKeywordGroups: [['acid rain', 'respiratory', 'asthma', 'breathing']] }] }, explanation: 'NOₓ comes from atmospheric N₂ + O₂ reacting in hot engines, not from the fuel itself.' },

  // chem-10-1 (5)
  { id: 'chem-q-1001', subtopicId: 'chem-10-1', type: 'mcq', marks: 1, prompt: 'Which method uses plants grown on low-grade ore soil to absorb copper compounds before harvesting and burning them?', options: ['Bioleaching', 'Phytomining', 'Desalination', 'Fractional distillation'], correctIndex: 1, explanation: 'Phytomining uses plants to absorb metal compounds from low-grade ores; bioleaching uses bacteria.' },
  { id: 'chem-q-1002', subtopicId: 'chem-10-1', type: 'fill-blank', marks: 2, prompt: 'Complete the two steps used to turn UK rainwater into potable drinking water.', segments: ['First ', ' through sand and gravel beds removes insoluble solids; then ', ' with chlorine, ozone, or UV kills microbes.'], wordBank: ['filtration', 'sterilisation', 'desalination', 'distillation'], answers: ['filtration', 'sterilisation'], explanation: 'UK fresh water requires filtration followed by sterilisation (chlorine, ozone, or UV light).' },
  { id: 'chem-q-1003', subtopicId: 'chem-10-1', type: 'multi-select', marks: 2, selectCount: 2, prompt: 'Select TWO methods used to desalinate seawater into potable water.', options: ['Distillation', 'Reverse osmosis', 'Simple paper filtration', 'Anaerobic digestion'], correctIndices: [0, 1], explanation: 'Dissolved salts cannot be filtered out; seawater requires distillation or reverse osmosis (both energy-intensive).' },
  { id: 'chem-q-1004', subtopicId: 'chem-10-1', type: 'matching', marks: 2, prompt: 'Match each sewage treatment stage to its exact function.', pairs: [{ left: 'Screening & grit removal', right: 'Removes large twigs, plastic, and grit' }, { left: 'Sedimentation', right: 'Separates liquid effluent from solid sewage sludge' }, { left: 'Anaerobic digestion', right: 'Breaks down sludge without O₂ to make biogas' }, { left: 'Aerobic biological treatment', right: 'Uses O₂ and bacteria to purify liquid effluent' }], explanation: 'Remember anaerobic = sludge (no O₂, makes biogas); aerobic = effluent (with O₂).' },
  { id: 'chem-q-1005', subtopicId: 'chem-10-1', type: 'short-answer', marks: 2, prompt: 'Explain why potable tap water is NOT described as "pure water" in GCSE Chemistry, and state one limitation of Life Cycle Assessments (LCAs).', rubric: { maxMarks: 2, modelAnswer: 'Potable water still contains harmless dissolved mineral salts/ions rather than only H₂O molecules. LCAs require subjective value judgements to weigh pollutant impacts, so selective LCAs can be biased.', markPoints: [{ id: 'mp1', markDescription: 'Potable water contains dissolved salts/minerals (not just H₂O)', requiredKeywordGroups: [['dissolved', 'mineral', 'salt', 'ion', 'not only h2o']] }, { id: 'mp2', markDescription: 'LCAs involve subjective value judgements / potential bias', requiredKeywordGroups: [['subjective', 'value judgement', 'bias', 'opinion', 'selective']] }] }, explanation: 'Potable means safe to drink (not chemically pure), and LCAs have subjective weighting limits.' },
];

export const CHEMISTRY_FLASHCARDS: FlashcardItem[] = [
  // chem-1-1 (5)
  { id: 'chem-fc-101', subtopicId: 'chem-1-1', front: 'Give the relative mass and charge of protons, neutrons, and electrons.', backBullets: ['Proton: mass 1, charge +1.', 'Neutron: mass 1, charge 0.', 'Electron: mass ~0 (1/1836), charge −1.'], diagram: 'atomic-structure' },
  { id: 'chem-fc-102', subtopicId: 'chem-1-1', front: 'Define an isotope.', backBullets: ['Atoms of the same element (same proton number).', 'With different numbers of neutrons (different mass number).'] },
  { id: 'chem-fc-103', subtopicId: 'chem-1-1', front: 'How do you calculate relative atomic mass (Ar) from isotope percentages?', backBullets: ['Ar = Σ(% abundance × isotope mass) ÷ 100.', 'Example: Cl = (75×35 + 25×37) ÷ 100 = 35.5.'] },
  { id: 'chem-fc-104', subtopicId: 'chem-1-1', front: 'State the shell capacities for the first 20 elements.', backBullets: ['2 in 1st shell, 8 in 2nd, 8 in 3rd, 2 in 4th.', 'Outer electron count equals Group number.'] },
  { id: 'chem-fc-105', subtopicId: 'chem-1-1', front: 'Contrast a compound with a mixture.', backBullets: ['Compound: elements chemically bonded in fixed proportions.', 'Mixture: not chemically bonded; separable physically (filtration, distillation, chromatography).'] },

  // chem-1-2 (5)
  { id: 'chem-fc-106', subtopicId: 'chem-1-2', front: 'Why was Mendeleev’s periodic table accepted over earlier tables?', backBullets: ['He left gaps for undiscovered elements and accurately predicted their properties.', 'He swapped element pairs (e.g. Te & I) so chemically similar elements sat in the same group.'] },
  { id: 'chem-fc-107', subtopicId: 'chem-1-2', front: 'Why does reactivity INCREASE down Group 1 (Alkali Metals)?', backBullets: ['Atoms have more shells → outer electron is further from nucleus with greater shielding.', 'Weaker nuclear attraction makes the single outer electron easier to lose.'] },
  { id: 'chem-fc-108', subtopicId: 'chem-1-2', front: 'Why does reactivity DECREASE down Group 7 (Halogens)?', backBullets: ['Larger atomic radius and extra inner-shell shielding weaken nuclear pull.', 'Harder to attract an incoming electron into the outer shell.'] },
  { id: 'chem-fc-109', subtopicId: 'chem-1-2', front: 'Why are Group 0 Noble Gases unreactive, and how do their boiling points change down the group?', backBullets: ['Full outer electron shells make them stable and monatomic.', 'Boiling points INCREASE down the group due to stronger intermolecular forces.'] },
  { id: 'chem-fc-110', subtopicId: 'chem-1-2', front: 'Predict the products when chlorine water is added to potassium bromide solution.', backBullets: ['Cl₂ + 2KBr → 2KCl + Br₂.', 'More reactive chlorine displaces bromide ions, turning the solution orange.'] },

  // chem-2-1 (5)
  { id: 'chem-fc-201', subtopicId: 'chem-2-1', front: 'Why do ionic compounds conduct electricity when molten or aqueous, but NOT when solid?', backBullets: ['Solid: ions are locked in a rigid lattice and cannot move.', 'Molten/aqueous: ions are free to move and carry electrical charge.'], diagram: 'ionic-covalent-bonding' },
  { id: 'chem-fc-202', subtopicId: 'chem-2-1', front: 'Why do simple covalent substances (e.g. H₂O, CO₂) have low boiling points?', backBullets: ['Only weak intermolecular forces between molecules need overcoming.', 'Strong covalent bonds inside molecules do NOT break!'] },
  { id: 'chem-fc-203', subtopicId: 'chem-2-1', front: 'Describe metallic bonding and why metals conduct electricity.', backBullets: ['Regular layers of positive metal ions in a sea of delocalised electrons.', 'Delocalised electrons move freely throughout the lattice carrying charge.'] },
  { id: 'chem-fc-204', subtopicId: 'chem-2-1', front: 'Why are alloys harder than pure metals?', backBullets: ['Atoms of different sizes distort the regular metal layers.', 'Prevents layers from sliding over one another easily.'] },
  { id: 'chem-fc-205', subtopicId: 'chem-2-1', front: 'Why do ionic compounds have very high melting points?', backBullets: ['Strong electrostatic forces act in all directions across the giant ionic lattice.', 'Large amounts of energy are needed to break these bonds.'] },

  // chem-2-2 (5)
  { id: 'chem-fc-206', subtopicId: 'chem-2-2', front: 'Contrast diamond and graphite bonding and conductivity.', backBullets: ['Diamond: 4 covalent bonds/C → hard, high MP, NO free electrons (insulator).', 'Graphite: 3 bonds/C in sliding layers + 1 delocalised electron/C → soft conductor.'] },
  { id: 'chem-fc-207', subtopicId: 'chem-2-2', front: 'What breaks when graphite layers slide over one another?', backBullets: ['ONLY weak intermolecular forces between hexagonal layers — NOT covalent bonds!'] },
  { id: 'chem-fc-208', subtopicId: 'chem-2-2', front: 'Describe graphene and give two uses.', backBullets: ['A single one-atom-thick layer of graphite.', 'Extraordinarily strong and conductive; used in flexible electronics and composites.'] },
  { id: 'chem-fc-209', subtopicId: 'chem-2-2', front: 'What are fullerenes and carbon nanotubes used for?', backBullets: ['Fullerenes (e.g. C₆₀): targeted drug delivery, catalysts, lubricants.', 'Carbon nanotubes: reinforcing composites and nanoscale electronics.'] },
  { id: 'chem-fc-210', subtopicId: 'chem-2-2', front: 'State two limitations of the simple solid-sphere particle model.', backBullets: ['Shows no forces between particles.', 'Treats atoms/molecules as identical solid inelastic spheres.'] },

  // chem-3-1 (5)
  { id: 'chem-fc-301', subtopicId: 'chem-3-1', front: 'Write the equations for moles, concentration, and molar gas volume.', backBullets: ['Moles = mass (g) ÷ Mr.', 'Concentration (g/dm³) = mass ÷ volume (dm³); divide cm³ by 1,000.', 'Gas volume (RTP) = moles × 24 dm³.'] },
  { id: 'chem-fc-302', subtopicId: 'chem-3-1', front: 'State Avogadro’s constant.', backBullets: ['6.02 × 10²³ particles (atoms, molecules, or ions) per mole.'] },
  { id: 'chem-fc-303', subtopicId: 'chem-3-1', front: 'Define limiting reactant.', backBullets: ['The reactant completely used up first, stopping the reaction and capping product mass.'] },
  { id: 'chem-fc-304', subtopicId: 'chem-3-1', front: 'Contrast percentage yield with atom economy.', backBullets: ['% yield = (actual mass ÷ theoretical mass) × 100 (practical efficiency).', 'Atom economy = (Mr desired product ÷ sum of Mr all reactants) × 100 (waste minimisation).'] },
  { id: 'chem-fc-305', subtopicId: 'chem-3-1', front: 'Why can mass appear to rise or fall in an open reaction vessel?', backBullets: ['Rises when a gas reactant enters from air (e.g. Mg + O₂).', 'Falls when a gas product escapes (e.g. CaCO₃ releasing CO₂).'] },

  // chem-4-1 (5)
  { id: 'chem-fc-401', subtopicId: 'chem-4-1', front: 'Explain PANIC and OIL RIG in electrolysis.', backBullets: ['Positive Anode (Oxidation Is Loss of electrons).', 'Negative Is Cathode (Reduction Is Gain of electrons).'] },
  { id: 'chem-fc-402', subtopicId: 'chem-4-1', front: 'Why is cryolite used in aluminium extraction, and why must carbon anodes be replaced?', backBullets: ['Cryolite lowers Al₂O₃’s melting point, saving energy and cost.', 'Oxygen formed at hot carbon anodes reacts with carbon to form CO₂, wearing them away.'] },
  { id: 'chem-fc-403', subtopicId: 'chem-4-1', front: 'State the aqueous electrolysis rules at the cathode and anode.', backBullets: ['Cathode (−): H₂ forms if metal is MORE reactive than H; else the metal forms.', 'Anode (+): halogen (Cl₂, Br₂, I₂) forms if halide present; else O₂ forms.'] },
  { id: 'chem-fc-404', subtopicId: 'chem-4-1', front: 'Contrast strong vs weak acids and the pH ×10 rule.', backBullets: ['Strong acids (HCl, H₂SO₄, HNO₃) completely ionise; weak acids (ethanoic) partially ionise.', 'Every 1-unit drop in pH = 10× higher H⁺ concentration.'] },
  { id: 'chem-fc-405', subtopicId: 'chem-4-1', front: 'Outline the Required Practical for making pure dry CuSO₄ crystals.', backBullets: ['Warm H₂SO₄ → add EXCESS CuO → filter off unreacted CuO.', 'Evaporate gently on water bath → cool to crystallise → pat dry.'] },

  // chem-5-1 (5)
  { id: 'chem-fc-501', subtopicId: 'chem-5-1', front: 'Contrast exothermic and endothermic reactions on a reaction profile.', backBullets: ['Exothermic: releases energy (temp rises); products sit LOWER than reactants.', 'Endothermic: absorbs energy (temp falls); products sit HIGHER than reactants.'], diagram: 'exothermic-endothermic' },
  { id: 'chem-fc-502', subtopicId: 'chem-5-1', front: 'State the bond energy formula and BENDO/MEXO.', backBullets: ['Energy change = Σ(bonds broken) − Σ(bonds formed).', 'Breaking = ENDOthermic; Making = EXOthermic. Negative result = exothermic!'] },
  { id: 'chem-fc-503', subtopicId: 'chem-5-1', front: 'How do you minimise heat loss in the neutralisation calorimetry practical?', backBullets: ['React inside an insulated polystyrene cup placed in a beaker with a lid.', 'Stir gently and record the highest thermometer temperature reached.'] },
  { id: 'chem-fc-504', subtopicId: 'chem-5-1', front: 'What determines the voltage produced by a simple two-metal chemical cell?', backBullets: ['The difference in reactivity between the two metal electrodes (bigger difference = higher voltage).'] },
  { id: 'chem-fc-505', subtopicId: 'chem-5-1', front: 'Give one pro and one con of hydrogen fuel cells.', backBullets: ['Pro: only exhaust product is water; runs continuously with fuel supply.', 'Con: hydrogen is explosive, bulky to store, and often made using fossil-fuel energy.'] },

  // chem-6-1 (5)
  { id: 'chem-fc-601', subtopicId: 'chem-6-1', front: 'What TWO reasons explain why higher temperature speeds up reactions?', backBullets: ['Particles move faster → collide more frequently.', 'More particles exceed activation energy → higher proportion of successful collisions.'] },
  { id: 'chem-fc-602', subtopicId: 'chem-6-1', front: 'How does a catalyst speed up a chemical reaction?', backBullets: ['Provides an alternative reaction pathway with a LOWER activation energy (never used up).'] },
  { id: 'chem-fc-603', subtopicId: 'chem-6-1', front: 'How do you find instantaneous reaction rate from a curved gas-volume graph?', backBullets: ['Draw a tangent touching the curve at the target time and compute its gradient (Δy ÷ Δx).'] },
  { id: 'chem-fc-604', subtopicId: 'chem-6-1', front: 'Define dynamic equilibrium in a closed reversible system.', backBullets: ['Forward and reverse reaction rates are EQUAL, so reactant and product amounts stay constant.'] },
  { id: 'chem-fc-605', subtopicId: 'chem-6-1', front: 'Apply Le Chatelier’s principle to higher temperature and higher gas pressure.', backBullets: ['Higher temperature → shifts in the ENDOTHERMIC direction.', 'Higher pressure → shifts toward the side with FEWER gas molecules.'] },

  // chem-7-1 (5)
  { id: 'chem-fc-701', subtopicId: 'chem-7-1', front: 'Name the first four alkanes and state their general formula.', backBullets: ['General formula: CₙH₂ₙ₊₂.', 'Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀).'], hint: 'Monkeys Eat Peanut Butter.' },
  { id: 'chem-fc-702', subtopicId: 'chem-7-1', front: 'How does fractional distillation separate crude oil?', backBullets: ['Crude oil is vaporised into a column hotter at the bottom and cooler at the top.', 'Hydrocarbons rise and condense at their distinct boiling points.'] },
  { id: 'chem-fc-703', subtopicId: 'chem-7-1', front: 'How do boiling point, viscosity, and flammability change for SHORTER hydrocarbons?', backBullets: ['Weaker intermolecular forces → lower boiling point, lower viscosity (runnier), higher flammability.'] },
  { id: 'chem-fc-704', subtopicId: 'chem-7-1', front: 'Why are long alkanes cracked, and what are the two industrial methods?', backBullets: ['Produces high-demand short fuels + alkenes for polymers.', 'Catalytic cracking (hot zeolite catalyst) and Steam cracking (steam + high temperature).'] },
  { id: 'chem-fc-705', subtopicId: 'chem-7-1', front: 'State the exact test and colour change distinguishing alkenes from alkanes.', backBullets: ['Shake with orange bromine water.', 'Alkenes turn it orange to COLOURLESS immediately; alkanes leave it orange.'] },

  // chem-8-1 (5)
  { id: 'chem-fc-801', subtopicId: 'chem-8-1', front: 'How is a chemically pure substance identified experimentally?', backBullets: ['Melts and boils at one SHARP, exact temperature (mixtures melt/boil over a range).', 'Produces only ONE spot on a chromatogram.'] },
  { id: 'chem-fc-802', subtopicId: 'chem-8-1', front: 'Define a formulation and give three examples.', backBullets: ['A useful mixture designed to a precise measured recipe.', 'Examples: paints, medicines, fuels, alloys, fertilisers, cleaning agents.'] },
  { id: 'chem-fc-803', subtopicId: 'chem-8-1', front: 'Write the Rf equation and explain why the baseline is drawn in pencil.', backBullets: ['Rf = distance moved by spot ÷ distance moved by solvent front (always < 1).', 'Pencil graphite is insoluble so it will not dissolve and run up the paper.'] },
  { id: 'chem-fc-804', subtopicId: 'chem-8-1', front: 'Recall all four AQA gas tests (H₂, O₂, CO₂, Cl₂).', backBullets: ['H₂: burning splint squeaky pop; O₂: relights glowing splint.', 'CO₂: turns limewater cloudy; Cl₂: bleaches damp litmus paper white.'] },
  { id: 'chem-fc-805', subtopicId: 'chem-8-1', front: 'State the flame colours for Li⁺, Na⁺, K⁺, Ca²⁺, and Cu²⁺.', backBullets: ['Li⁺ crimson, Na⁺ yellow, K⁺ lilac.', 'Ca²⁺ orange-red, Cu²⁺ green.'] },

  // chem-9-1 (5)
  { id: 'chem-fc-901', subtopicId: 'chem-9-1', front: 'What is the approximate composition of Earth’s modern atmosphere?', backBullets: ['~80% (78%) nitrogen, ~20% (21%) oxygen.', '<1% other gases (argon, water vapour, ~0.04% CO₂).'] },
  { id: 'chem-fc-902', subtopicId: 'chem-9-1', front: 'How did CO₂ drop and O₂ rise from Earth’s early volcanic atmosphere?', backBullets: ['Water condensed to oceans where CO₂ dissolved to form carbonate rocks (limestone).', 'Algae and plants evolved photosynthesis, absorbing CO₂, locking carbon in fossil fuels, and releasing O₂.'] },
  { id: 'chem-fc-903', subtopicId: 'chem-9-1', front: 'Explain the greenhouse effect using wavelengths.', backBullets: ['Short-wavelength solar radiation passes through to warm Earth.', 'Greenhouse gases (CO₂, CH₄, H₂O) absorb long-wavelength infrared radiation re-emitted by Earth.'] },
  { id: 'chem-fc-904', subtopicId: 'chem-9-1', front: 'Why are carbon monoxide (CO) and soot particulates hazardous?', backBullets: ['CO (incomplete combustion): colourless, odourless toxic gas that binds haemoglobin.', 'Soot particulates: cause global dimming and respiratory damage.'] },
  { id: 'chem-fc-905', subtopicId: 'chem-9-1', front: 'How do SO₂ and NOₓ form, and what damage do they cause?', backBullets: ['SO₂ from sulfur impurities in fuels; NOₓ from air N₂ + O₂ reacting in hot engines.', 'Both cause respiratory issues and acid rain.'] },

  // chem-10-1 (5)
  { id: 'chem-fc-1001', subtopicId: 'chem-10-1', front: 'How is UK fresh rainwater treated to make potable water?', backBullets: ['Filter through mesh screens and sand/gravel beds to remove insoluble solids.', 'Sterilise using chlorine, ozone, or UV light to kill microbes.'] },
  { id: 'chem-fc-1002', subtopicId: 'chem-10-1', front: 'Name two desalination methods and their main drawback.', backBullets: ['Distillation and reverse osmosis.', 'Main drawback: both require huge energy input and are expensive.'] },
  { id: 'chem-fc-1003', subtopicId: 'chem-10-1', front: 'List the four stages of urban waste water (sewage) treatment.', backBullets: ['Screening & grit removal → Sedimentation (effluent vs sludge).', 'Anaerobic digestion of sludge (biogas) + aerobic biological treatment of effluent.'] },
  { id: 'chem-fc-1004', subtopicId: 'chem-10-1', front: 'Contrast phytomining with bioleaching for low-grade copper ores.', backBullets: ['Phytomining: plants absorb copper, then harvested and burned to copper-rich ash.', 'Bioleaching: bacteria produce soluble copper leachate; recover Cu via scrap iron or electrolysis.'] },
  { id: 'chem-fc-1005', subtopicId: 'chem-10-1', front: 'Name all four stages of a Life Cycle Assessment (LCA).', backBullets: ['1. Extracting & processing raw materials; 2. Manufacturing & packaging.', '3. Use & operation during lifetime; 4. Disposal at end of life.'] },
];

export const CHEMISTRY_CHEAT_SHEETS: CheatSheetItem[] = [
  { id: 'cs-chem-1', slug: 'topic-1-atomic-structure', title: 'Topic 1: Atomic Structure & Periodic Table', topicNumber: 1, topicName: 'Atomic Structure & the Periodic Table', summary: 'Subatomic particles, Ar isotopes, 2,8,8,2 shells, Mendeleev, and Groups 0, 1, 7.', accentColor: '#2ea582', sections: [{ heading: '1.1 Atoms & Isotopes', formula: 'Ar = Σ(% abundance × mass) ÷ 100', points: ['Proton (+1, 1), Neutron (0, 1), Electron (−1, ~0).', 'Fill first 20 element shells 2, 8, 8, 2; outer electrons = Group number.'] }, { heading: '1.2 Periodic Table Trends', points: ['Group 1 reactivity INCREASES down group (easier to lose outer e⁻).', 'Group 7 reactivity DECREASES down group (harder to gain outer e⁻); Group 0 inert full shells.'] }] },
  { id: 'cs-chem-2', slug: 'topic-2-bonding', title: 'Topic 2: Bonding & Allotropes of Carbon', topicNumber: 2, topicName: 'Bonding, Structure & the Properties of Matter', summary: 'Ionic lattices, simple covalent molecules, metallic alloys, diamond, graphite, graphene, and fullerenes.', accentColor: '#1a96f3', sections: [{ heading: '2.1 Bonding Models', points: ['Giant Ionic: high MP, conducts only molten/aqueous.', 'Simple Covalent: low MP (weak intermolecular forces), never conducts.', 'Metallic & Alloys: delocalised e⁻ conduct; different-sized alloy atoms block layer sliding.'] }, { heading: '2.2 Carbon Allotropes', points: ['Diamond: 4 bonds/C (hard insulator). Graphite: 3 bonds/C + 1 free e⁻ (slippery conductor).', 'Graphene = 1 layer; C₆₀ & nanotubes = hollow fullerenes.'] }] },
  { id: 'cs-chem-3', slug: 'topic-3-quantitative', title: 'Topic 3: Quantitative Chemistry', topicNumber: 3, topicName: 'Quantitative Chemistry', summary: 'Moles, Avogadro’s constant, limiting reactants, concentration, % yield, atom economy, and 24 dm³ gas volume.', accentColor: '#7c3aed', sections: [{ heading: '3.1 Essential Quantitative Equations', formula: 'n = m ÷ Mr  |  c = n ÷ V(dm³)  |  V_gas = 24n', points: ['1 mole = 6.02 × 10²³ particles; always convert cm³ → dm³ (÷ 1,000).', '% yield = (actual ÷ theoretical) × 100; Atom economy = (Mr desired ÷ ΣMr reactants) × 100.'] }] },
  { id: 'cs-chem-4', slug: 'topic-4-chemical-changes', title: 'Topic 4: Chemical Changes & Electrolysis', topicNumber: 4, topicName: 'Chemical Changes', summary: 'Reactivity series, OIL RIG, strong/weak acids, pure dry salts, and molten/aqueous electrolysis.', accentColor: '#ea580c', sections: [{ heading: '4.1 Acids, Salts & Electrolysis', formula: 'H⁺ + OH⁻ → H₂O  |  pH −1 = ×10 [H⁺]', points: ['PANIC + OIL RIG: Positive Anode (Oxidation), Negative Cathode (Reduction).', 'Al₂O₃ dissolved in cryolite; aqueous cathode makes H₂ if metal > H, anode makes halogen if halide else O₂.'] }] },
  { id: 'cs-chem-5', slug: 'topic-5-energy-changes', title: 'Topic 5: Energy Changes', topicNumber: 5, topicName: 'Energy Changes', summary: 'Exothermic vs endothermic profiles, bond energy calculations, calorimetry, and H₂ fuel cells.', accentColor: '#db2777', sections: [{ heading: '5.1 Reaction Profiles & Bond Energies', formula: 'ΔE = Σ(bonds broken) − Σ(bonds made)', points: ['BENDO/MEXO: negative ΔE = exothermic (products lower); positive = endothermic.', 'Polystyrene cup with lid cuts heat loss; H₂ fuel cells output only H₂O.'] }] },
  { id: 'cs-chem-6', slug: 'topic-6-rates', title: 'Topic 6: Rates & Equilibrium', topicNumber: 6, topicName: 'The Rate & Extent of Chemical Change', summary: 'Collision theory, disappearing cross practical, catalysts, and Le Chatelier’s principle.', accentColor: '#8d22cc', sections: [{ heading: '6.1 Rates & Le Chatelier', formula: 'Mean rate = quantity ÷ time', points: ['Catalyst lowers activation energy via alternative pathway.', 'Higher T favours endothermic; higher pressure favours fewer gas moles.'] }] },
  { id: 'cs-chem-7', slug: 'topic-7-organic', title: 'Topic 7: Organic Chemistry', topicNumber: 7, topicName: 'Organic Chemistry', summary: 'Crude oil fractional distillation, alkanes, catalytic/steam cracking, and alkene bromine water test.', accentColor: '#059669', sections: [{ heading: '7.1 Hydrocarbons & Cracking', formula: 'Alkanes: CₙH₂ₙ₊₂  |  Alkenes: CₙH₂ₙ', points: ['Short chains = lower BP, lower viscosity, higher flammability.', 'Alkenes turn orange bromine water COLOURLESS immediately.'] }] },
  { id: 'cs-chem-8', slug: 'topic-8-analysis', title: 'Topic 8: Chemical Analysis', topicNumber: 8, topicName: 'Chemical Analysis', summary: 'Pure melting points, formulations, paper chromatography Rf values, and all four gas tests.', accentColor: '#0284c7', sections: [{ heading: '8.1 Chromatography & Gas Tests', formula: 'Rf = spot distance ÷ solvent front distance', points: ['Draw baseline in insoluble pencil below solvent level.', 'H₂ squeaky pop | O₂ relights glowing splint | CO₂ cloudy limewater | Cl₂ bleaches damp litmus.'] }] },
  { id: 'cs-chem-9', slug: 'topic-9-atmosphere', title: 'Topic 9: Chemistry of the Atmosphere', topicNumber: 9, topicName: 'Chemistry of the Atmosphere', summary: 'Atmosphere evolution, short/long wavelength greenhouse effect, carbon footprints, and pollutants.', accentColor: '#2563eb', sections: [{ heading: '9.1 Atmosphere & Pollutants', points: ['Modern air: ~80% N₂, ~20% O₂, ~0.04% CO₂.', 'Short solar light IN, long infrared ABSORBED by CO₂/CH₄/H₂O; SO₂ & NOₓ cause acid rain.'] }] },
  { id: 'cs-chem-10', slug: 'topic-10-resources', title: 'Topic 10: Using Resources', topicNumber: 10, topicName: 'Using Resources', summary: 'Potable water, desalination, sewage treatment, phytomining, bioleaching, and LCAs.', accentColor: '#0d9488', sections: [{ heading: '10.1 Water, Copper & LCAs', points: ['Fresh water: filter + sterilise (Cl₂/O₃/UV). Seawater: distillation or reverse osmosis.', 'Phytomining (plants) & bioleaching (bacteria) recover Cu from low-grade ores; LCA = Extract → Make → Use → Dispose.'] }] },
];

export const CHEMISTRY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'chem-exam-1',
    subtopicId: 'chem-1-1',
    number: 1,
    stimulus: 'The diagram represents a neutral atom of Carbon-12 (¹²₆C), alongside its isotope Carbon-14 (¹⁴₆C).',
    diagram: 'atomic-structure',
    parts: [
      { id: 'chem-exam-1a', label: 'a)', prompt: 'Explain why a Carbon-12 atom has no overall electrical charge.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'It contains equal numbers of positively charged protons (6) and negatively charged electrons (6), so the charges cancel out.', markPoints: [{ id: 'mp1', markDescription: 'Equal number of protons and electrons', requiredKeywordGroups: [['equal', 'same'], ['proton'], ['electron']] }, { id: 'mp2', markDescription: 'Opposite charges (+1 and −1) cancel out', requiredKeywordGroups: [['positive', 'negative', 'cancel']] }] } },
      { id: 'chem-exam-1b', label: 'b)', prompt: 'State the number of neutrons in a Carbon-14 atom and explain why Carbon-12 and Carbon-14 are isotopes.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Carbon-14 has 14 − 6 = 8 neutrons. They are isotopes because they have the same number of protons (6) but different numbers of neutrons (6 vs 8).', markPoints: [{ id: 'mp1', markDescription: 'Calculates 8 neutrons', numericMatch: { value: 8, tolerance: 0 } }, { id: 'mp2', markDescription: 'Same protons, different neutrons', requiredKeywordGroups: [['same', 'proton'], ['different', 'neutron']] }] } },
    ],
  },
  {
    id: 'chem-exam-2',
    subtopicId: 'chem-1-2',
    number: 2,
    stimulus: 'A teacher drops small pieces of lithium and potassium separately into troughs of cold water containing universal indicator.',
    parts: [
      { id: 'chem-exam-2a', label: 'a)', prompt: 'State two observations showing potassium is more reactive than lithium and give the colour change of universal indicator.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Potassium fizzes much more violently and ignites with a lilac flame. Universal indicator turns purple/blue because alkaline hydroxide solution forms.', markPoints: [{ id: 'mp1', markDescription: 'More vigorous fizzing / melts / lilac flame', requiredKeywordGroups: [['fizz', 'flame', 'lilac', 'faster', 'vigorous']] }, { id: 'mp2', markDescription: 'Indicator turns purple/blue (alkaline hydroxide)', requiredKeywordGroups: [['purple', 'blue', 'alkal']] }] } },
      { id: 'chem-exam-2b', label: 'b)', prompt: 'Explain in terms of atomic structure why chlorine is MORE reactive than iodine (Group 7).', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Chlorine is a smaller atom with fewer shells, so its outer shell is closer to the nucleus with less shielding. This creates stronger nuclear attraction to gain an incoming electron more easily.', markPoints: [{ id: 'mp1', markDescription: 'Smaller atom / outer shell closer to nucleus', requiredKeywordGroups: [['smaller', 'closer', 'fewer shells']] }, { id: 'mp2', markDescription: 'Less shielding / stronger attraction from nucleus', requiredKeywordGroups: [['less shielding', 'stronger', 'greater attraction']] }, { id: 'mp3', markDescription: 'Gains an electron more easily', requiredKeywordGroups: [['gain'], ['electron'], ['easier', 'more easily']] }] } },
    ],
  },
  {
    id: 'chem-exam-3',
    subtopicId: 'chem-2-1',
    number: 3,
    stimulus: 'Magnesium oxide (MgO) melts at 2,852 °C, whereas carbon dioxide (CO₂) sublimes at −78 °C.',
    diagram: 'ionic-covalent-bonding',
    parts: [
      { id: 'chem-exam-3a', label: 'a)', prompt: 'Explain in terms of structure and bonding why MgO has a much higher melting point than CO₂.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'MgO is a giant ionic lattice held together by strong electrostatic forces between Mg²⁺ and O²⁻ ions requiring huge energy to break. CO₂ consists of simple covalent molecules held only by weak intermolecular forces needing little energy to overcome.', markPoints: [{ id: 'mp1', markDescription: 'MgO has strong electrostatic forces in a giant ionic lattice', requiredKeywordGroups: [['ionic', 'electrostatic'], ['strong']] }, { id: 'mp2', markDescription: 'CO₂ has weak intermolecular forces between molecules', requiredKeywordGroups: [['weak'], ['intermolecular']] }, { id: 'mp3', markDescription: 'More energy needed to break MgO bonds than CO₂ forces', requiredKeywordGroups: [['energy'], ['break', 'overcome']] }] } },
    ],
  },
  {
    id: 'chem-exam-4',
    subtopicId: 'chem-2-2',
    number: 4,
    stimulus: 'Graphite is used as electrodes in electrolysis and as a dry lubricant, whereas diamond is used to tip industrial rock-cutting drills.',
    parts: [
      { id: 'chem-exam-4a', label: 'a)', prompt: 'Explain how graphite’s bonding allows it to act as BOTH a lubricant and an electrical conductor.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Each carbon forms 3 covalent bonds in flat hexagonal layers with only weak intermolecular forces between layers, so layers slide easily. Each carbon has 1 delocalised electron free to move along layers and carry electrical charge.', markPoints: [{ id: 'mp1', markDescription: '3 covalent bonds per carbon in flat layers', requiredKeywordGroups: [['3', 'three'], ['layer', 'hexagonal']] }, { id: 'mp2', markDescription: 'Weak forces between layers allow sliding (lubricant)', requiredKeywordGroups: [['weak'], ['slide']] }, { id: 'mp3', markDescription: '1 delocalised electron per carbon carries charge', requiredKeywordGroups: [['delocalis', 'free electron'], ['charge', 'conduct', 'current']] }] } },
    ],
  },
  {
    id: 'chem-exam-5',
    subtopicId: 'chem-3-1',
    number: 5,
    stimulus: 'Magnesium reacts with excess oxygen: 2Mg + O₂ → 2MgO (Ar: Mg = 24, O = 16).',
    parts: [
      { id: 'chem-exam-5a', label: 'a)', prompt: 'Calculate the theoretical mass of MgO produced when 6.0 g of magnesium burns completely.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Moles of Mg = 6.0 ÷ 24 = 0.25 mol. Ratio Mg : MgO is 1 : 1, so mass of MgO = 0.25 × 40 = 10 g.', markPoints: [{ id: 'mp1', markDescription: 'Calculates 0.25 mol Mg', numericMatch: { value: 0.25, tolerance: 0.01 } }, { id: 'mp2', markDescription: 'Calculates 10 g MgO', numericMatch: { value: 10, tolerance: 0.1 } }] } },
      { id: 'chem-exam-5b', label: 'b)', prompt: 'A student actually collects 8.5 g of MgO. Calculate the percentage yield.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Percentage yield = (8.5 ÷ 10) × 100 = 85%.', markPoints: [{ id: 'mp1', markDescription: 'Divides actual 8.5 by theoretical 10', requiredKeywordGroups: [['8.5'], ['10']] }, { id: 'mp2', markDescription: 'Calculates 85%', numericMatch: { value: 85, tolerance: 0.2 } }] } },
    ],
  },
  {
    id: 'chem-exam-6',
    subtopicId: 'chem-4-1',
    number: 6,
    stimulus: 'Aluminium is extracted industrially by electrolysis of molten aluminium oxide dissolved in cryolite using graphite electrodes.',
    parts: [
      { id: 'chem-exam-6a', label: 'a)', prompt: 'State the role of cryolite and explain why the positive carbon anodes must be replaced regularly.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Cryolite lowers the melting point of aluminium oxide so less energy is needed. Oxygen gas produced at the hot positive carbon anodes reacts with the carbon to form carbon dioxide, wearing the anodes away.', markPoints: [{ id: 'mp1', markDescription: 'Cryolite lowers melting point to save energy', requiredKeywordGroups: [['lower', 'reduc'], ['melting point']] }, { id: 'mp2', markDescription: 'Oxygen produced at anode reacts with carbon', requiredKeywordGroups: [['oxygen'], ['carbon', 'anode']] }, { id: 'mp3', markDescription: 'Forms carbon dioxide so anodes wear away', requiredKeywordGroups: [['carbon dioxide', 'co2']] }] } },
    ],
  },
  {
    id: 'chem-exam-7',
    subtopicId: 'chem-5-1',
    number: 7,
    stimulus: 'A student reacts 25 cm³ of 1.0 mol/dm³ HCl with 25 cm³ of 1.0 mol/dm³ NaOH in a polystyrene cup. Temperature rises from 20.5 °C to 27.0 °C.',
    diagram: 'exothermic-endothermic',
    parts: [
      { id: 'chem-exam-7a', label: 'a)', prompt: 'Calculate the temperature change and state whether the reaction is exothermic or endothermic.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Temperature change = 27.0 − 20.5 = 6.5 °C increase, so the reaction is exothermic.', markPoints: [{ id: 'mp1', markDescription: 'Calculates 6.5 °C rise', numericMatch: { value: 6.5, tolerance: 0.05 } }, { id: 'mp2', markDescription: 'Identifies exothermic', requiredKeywordGroups: [['exothermic']] }] } },
      { id: 'chem-exam-7b', label: 'b)', prompt: 'Explain why a polystyrene cup with a lid is used instead of an open glass beaker.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Polystyrene is a good thermal insulator and the lid prevents heat loss by convection/evaporation, giving a more accurate maximum temperature reading.', markPoints: [{ id: 'mp1', markDescription: 'Polystyrene insulates / lid reduces heat loss', requiredKeywordGroups: [['insulat', 'reduce heat loss', 'minimise heat loss', 'less heat']] }, { id: 'mp2', markDescription: 'Improves accuracy of temperature measurement', requiredKeywordGroups: [['accurat', 'higher', 'true']] }] } },
    ],
  },
  {
    id: 'chem-exam-8',
    subtopicId: 'chem-6-1',
    number: 8,
    stimulus: 'In the Haber process, N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the forward reaction is exothermic.',
    parts: [
      { id: 'chem-exam-8a', label: 'a)', prompt: 'Predict and explain the effect of INCREASING temperature on both the rate of reaction and the equilibrium yield of ammonia.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Rate increases because particles have more kinetic energy and collide more frequently with energy above activation energy. Equilibrium shifts left in the endothermic direction to oppose the rise, so ammonia yield decreases.', markPoints: [{ id: 'mp1', markDescription: 'Rate increases due to more frequent collisions above Ea', requiredKeywordGroups: [['rate', 'faster'], ['collision', 'kinetic', 'activation']] }, { id: 'mp2', markDescription: 'Equilibrium shifts in endothermic direction (left)', requiredKeywordGroups: [['endothermic', 'left', 'reverse']] }, { id: 'mp3', markDescription: 'Ammonia yield decreases', requiredKeywordGroups: [['yield'], ['decreas', 'lower', 'less']] }] } },
    ],
  },
  {
    id: 'chem-exam-9',
    subtopicId: 'chem-7-1',
    number: 9,
    stimulus: 'Crude oil is separated in a fractionating column; heavy fuel oil is then cracked into petrol (octane, C₈H₁₈) and ethene (C₂H₄).',
    parts: [
      { id: 'chem-exam-9a', label: 'a)', prompt: 'Explain how fractional distillation separates petrol from heavier diesel inside the column.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Crude oil is heated until it evaporates into vapour. The column is hottest at the bottom and cooler at the top; petrol has shorter chains with lower boiling points so it rises higher before condensing, while diesel condenses lower down.', markPoints: [{ id: 'mp1', markDescription: 'Oil is vaporised into a temperature-gradient column (cool top, hot bottom)', requiredKeywordGroups: [['vapour', 'evaporat'], ['cool', 'hot', 'gradient']] }, { id: 'mp2', markDescription: 'Fractions condense at different boiling points', requiredKeywordGroups: [['condens'], ['boiling point']] }, { id: 'mp3', markDescription: 'Petrol is shorter chain / lower boiling point so condenses higher up', requiredKeywordGroups: [['shorter', 'lower'], ['higher', 'top']] }] } },
    ],
  },
  {
    id: 'chem-exam-10',
    subtopicId: 'chem-8-1',
    number: 10,
    stimulus: 'A food scientist runs paper chromatography on a green colouring. The solvent front moves 8.0 cm while a yellow spot moves 5.2 cm and a blue spot moves 2.0 cm.',
    parts: [
      { id: 'chem-exam-10a', label: 'a)', prompt: 'State what the two spots prove about the green colouring and calculate the Rf value of the yellow spot.', kind: 'short-answer', marks: 2, rubric: { maxMarks: 2, modelAnswer: 'Two spots prove the green colouring is a mixture (impure). Rf of yellow spot = 5.2 ÷ 8.0 = 0.65.', markPoints: [{ id: 'mp1', markDescription: 'Identifies it as a mixture (not pure)', requiredKeywordGroups: [['mixture', 'impure', 'two']] }, { id: 'mp2', markDescription: 'Calculates Rf = 0.65', numericMatch: { value: 0.65, tolerance: 0.01 } }] } },
    ],
  },
  {
    id: 'chem-exam-11',
    subtopicId: 'chem-9-1',
    number: 11,
    stimulus: 'Atmospheric carbon dioxide has risen from 280 ppm to over 420 ppm since the Industrial Revolution.',
    parts: [
      { id: 'chem-exam-11a', label: 'a)', prompt: 'Explain the greenhouse effect mechanism and name two human activities increasing greenhouse gases.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Short-wavelength solar radiation passes through the atmosphere to warm Earth, and greenhouse gases absorb longer-wavelength infrared radiation re-emitted by Earth. Human activities include burning fossil fuels, deforestation, cattle farming, and landfill waste.', markPoints: [{ id: 'mp1', markDescription: 'Short-wavelength solar radiation enters and warms Earth', requiredKeywordGroups: [['short'], ['solar', 'sun', 'warm']] }, { id: 'mp2', markDescription: 'Greenhouse gases absorb long-wavelength infrared emitted by Earth', requiredKeywordGroups: [['long', 'infrared'], ['absorb']] }, { id: 'mp3', markDescription: 'Names human activities (fossil fuels, deforestation, cattle, landfill)', requiredKeywordGroups: [['fossil fuel', 'deforestation', 'cattle', 'landfill', 'burning']] }] } },
    ],
  },
  {
    id: 'chem-exam-12',
    subtopicId: 'chem-10-1',
    number: 12,
    stimulus: 'A coastal desert city must choose between desalinating seawater by reverse osmosis or treating local brackish groundwater.',
    parts: [
      { id: 'chem-exam-12a', label: 'a)', prompt: 'Explain why desalinating seawater is much more expensive than treating UK rainwater, and outline how copper is obtained from low-grade ore by bioleaching.', kind: 'short-answer', marks: 3, rubric: { maxMarks: 3, modelAnswer: 'Desalination by reverse osmosis or distillation requires huge amounts of energy to separate dissolved salts, whereas UK rainwater only needs filtration and sterilisation. In bioleaching, bacteria produce a leachate solution containing copper ions, from which copper is recovered by scrap iron displacement or electrolysis.', markPoints: [{ id: 'mp1', markDescription: 'Desalination requires large amounts of energy', requiredKeywordGroups: [['energy', 'expensive'], ['salt', 'reverse osmosis', 'distillation']] }, { id: 'mp2', markDescription: 'Bacteria produce a soluble copper leachate solution', requiredKeywordGroups: [['bacteria'], ['leachate', 'solution']] }, { id: 'mp3', markDescription: 'Recover copper by displacement with scrap iron or electrolysis', requiredKeywordGroups: [['scrap iron', 'displacement', 'electrolysis']] }] } },
    ],
  },
];

export const CHEMISTRY_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'chem-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 1: Atomic Structure, Bonding, Quantitative, Chemical & Energy Changes (8462/1H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '8462/1H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA Periodic Table of Elements Insert.',
    sampleQuestions: [
      { number: '01.1', question: 'Explain why graphite conducts electricity whereas diamond does not.', marks: 3, markScheme: ['In graphite each carbon forms 3 covalent bonds leaving 1 delocalised electron per atom free to move and carry charge (2 marks)', 'In diamond each carbon forms 4 covalent bonds so no delocalised electrons exist (1 mark)'] },
      { number: '02.2', question: 'Calculate the mass of CO₂ produced when 50 g of CaCO₃ decomposes completely (CaCO₃ → CaO + CO₂; Mr: CaCO₃ = 100, CO₂ = 44).', marks: 2, markScheme: ['Moles CaCO₃ = 50 ÷ 100 = 0.50 mol (1 mark)', 'Mass CO₂ = 0.50 × 44 = 22 g (1 mark)'] },
      { number: '03.1', question: 'Explain why potassium reacts more vigorously with water than lithium.', marks: 3, markScheme: ['Potassium has more electron shells so outer electron is further from nucleus (1 mark)', 'Greater shielding weakens electrostatic attraction (1 mark)', 'Outer electron is lost more easily (1 mark)'] },
      { number: '04.2', question: 'Write the half-equation for the reduction of Al³⁺ ions at the cathode during electrolysis.', marks: 1, markScheme: ['Al³⁺ + 3e⁻ → Al (1 mark)'] },
    ],
  },
  {
    id: 'chem-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 2: Rates, Organic, Analysis, Atmosphere & Using Resources (8462/2H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '8462/2H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA Periodic Table of Elements Insert.',
    sampleQuestions: [
      { number: '01.1', question: 'Explain in terms of collision theory how increasing temperature increases reaction rate.', marks: 3, markScheme: ['Particles gain kinetic energy and move faster (1 mark)', 'Collisions occur more frequently (1 mark)', 'Higher proportion of collisions exceed activation energy (1 mark)'] },
      { number: '02.1', question: 'Describe a chemical test to distinguish propene (C₃H₆) from propane (C₃H₈).', marks: 2, markScheme: ['Add orange bromine water (1 mark)', 'Propene turns orange to colourless; propane stays orange (1 mark)'] },
      { number: '03.2', question: 'Explain why the baseline in paper chromatography must be drawn in pencil above the solvent level.', marks: 2, markScheme: ['Pencil graphite is insoluble so will not run up the paper (1 mark)', 'Keeps ink spots from dissolving straight into the solvent reservoir (1 mark)'] },
      { number: '04.1', question: 'Describe how algal photosynthesis changed Earth’s early atmosphere.', marks: 2, markScheme: ['Absorbed carbon dioxide reducing CO₂ levels (1 mark)', 'Released oxygen gas steadily raising atmospheric O₂ (1 mark)'] },
    ],
  },
  {
    id: 'chem-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 1 (8462/1H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '8462/1H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA Periodic Table of Elements Insert.',
    sampleQuestions: [
      { number: '01.2', question: 'Calculate the relative atomic mass of boron containing 20% ¹⁰B and 80% ¹¹B.', marks: 2, markScheme: ['((20 × 10) + (80 × 11)) ÷ 100 (1 mark)', 'Ar = 10.8 (1 mark)'] },
      { number: '02.1', question: 'Explain why alloys like steel are harder than pure iron.', marks: 2, markScheme: ['Atoms of different sizes distort regular layers (1 mark)', 'Prevents layers sliding over each other easily (1 mark)'] },
      { number: '03.3', question: 'Calculate the concentration in mol/dm³ when 0.40 mol of NaOH is dissolved in 250 cm³ of water.', marks: 2, markScheme: ['Volume = 250 ÷ 1,000 = 0.25 dm³ (1 mark)', 'c = 0.40 ÷ 0.25 = 1.6 mol/dm³ (1 mark)'] },
      { number: '04.1', question: 'Predict the products at both electrodes during electrolysis of aqueous copper(II) sulfate using inert electrodes.', marks: 2, markScheme: ['Cathode (−): copper metal (less reactive than H) (1 mark)', 'Anode (+): oxygen gas (no halide ion present) (1 mark)'] },
    ],
  },
  {
    id: 'chem-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 2 (8462/2H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '8462/2H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA Periodic Table of Elements Insert.',
    sampleQuestions: [
      { number: '01.2', question: 'Explain how a catalyst speeds up a reaction without appearing in the overall equation.', marks: 2, markScheme: ['Provides an alternative pathway with lower activation energy (1 mark)', 'Remains chemically unchanged and is not used up (1 mark)'] },
      { number: '02.3', question: 'Complete the cracking equation: C₁₄H₃₀ → C₁₀H₂₂ + ?.', marks: 1, markScheme: ['C₄H₈ (or 2C₂H₄) (1 mark)'] },
      { number: '03.1', question: 'Give the positive tests for hydrogen gas and carbon dioxide gas.', marks: 2, markScheme: ['H₂: burning splint squeaky pop (1 mark)', 'CO₂: turns limewater cloudy/milky (1 mark)'] },
      { number: '04.2', question: 'Explain how urban sewage sludge and liquid effluent are treated differently.', marks: 2, markScheme: ['Sludge undergoes anaerobic digestion (producing biogas/fertiliser) (1 mark)', 'Effluent undergoes aerobic biological treatment before river release (1 mark)'] },
    ],
  },
  {
    id: 'chem-pp-2022-p1',
    specEra: 'new-9-1',
    year: '2022',
    title: 'Paper 1 (8462/1H)',
    tier: 'Higher',
    series: 'June 2022',
    paperCode: '8462/1H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA Periodic Table of Elements Insert.',
    sampleQuestions: [
      { number: '01.1', question: 'Explain why solid sodium chloride does not conduct electricity whereas molten sodium chloride does.', marks: 2, markScheme: ['Solid: ions fixed in lattice and cannot move (1 mark)', 'Molten: ions free to move and carry electrical charge (1 mark)'] },
      { number: '02.2', question: 'Explain the difference between a dilute strong acid and a concentrated weak acid.', marks: 2, markScheme: ['Strong vs weak = complete vs partial ionisation in water (1 mark)', 'Dilute vs concentrated = fewer vs more acid particles per dm³ (1 mark)'] },
      { number: '03.1', question: 'Calculate the atom economy for making ethanol from ethene + steam: C₂H₄ + H₂O → C₂H₅OH.', marks: 1, markScheme: ['100% because there is only one single product (zero waste by-product) (1 mark)'] },
      { number: '04.3', question: 'Evaluate hydrogen fuel cells compared with rechargeable lithium-ion batteries.', marks: 3, markScheme: ['Fuel cells refuel quickly and run continuously with fuel, emitting only water (1 mark)', 'Batteries store energy more compactly without explosive H₂ tanks (1 mark)', 'Balanced reasoned conclusion (1 mark)'] },
    ],
  },
  {
    id: 'chem-pp-2022-p2',
    specEra: 'new-9-1',
    year: '2022',
    title: 'Paper 2 (8462/2H)',
    tier: 'Higher',
    series: 'June 2022',
    paperCode: '8462/2H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA Periodic Table of Elements Insert.',
    sampleQuestions: [
      { number: '01.1', question: 'Describe how to investigate the effect of concentration on rate using sodium thiosulfate and HCl.', marks: 4, markScheme: ['Place conical flask over drawn black cross (1 mark)', 'Mix measured volumes and time until sulfur precipitate hides cross (1 mark)', 'Repeat across different concentrations controlling total volume and temperature (2 marks)'] },
      { number: '02.2', question: 'Explain why carbon monoxide from faulty gas boilers is so dangerous.', marks: 2, markScheme: ['Colourless and odourless so hard to detect (1 mark)', 'Binds irreversibly to haemoglobin reducing oxygen transport in blood (1 mark)'] },
      { number: '03.1', question: 'Compare phytomining with traditional open-cast mining of copper ore.', marks: 2, markScheme: ['Phytomining extracts from low-grade ores with less rock/habitat destruction (1 mark)', 'Phytomining is much slower than traditional mining (1 mark)'] },
      { number: '04.2', question: 'Explain why Life Cycle Assessments cannot always be purely objective.', marks: 2, markScheme: ['Allocating numerical weight to pollutant impacts requires value judgements (1 mark)', 'Selective LCAs can be biased for marketing/greenwashing (1 mark)'] },
    ],
  },
];

export const CHEMISTRY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'ckt-1', term: 'Isotope', definition: 'Atoms of the same element having equal proton counts but different neutron numbers.', topicNumber: 1, subtopicId: 'chem-1-1', subtopicCode: '1.1' },
  { id: 'ckt-2', term: 'Alkali metal', definition: 'Reactive Group 1 element that loses one outer electron to form a +1 ion.', topicNumber: 1, subtopicId: 'chem-1-2', subtopicCode: '1.2' },
  { id: 'ckt-3', term: 'Noble gases', definition: 'Unreactive Group 0 elements possessing stable, full outer electron shells.', topicNumber: 1, subtopicId: 'chem-1-2', subtopicCode: '1.2' },
  { id: 'ckt-4', term: 'Ionic lattice', definition: 'Giant 3D regular arrangement of alternating positive and negative ions.', topicNumber: 2, subtopicId: 'chem-2-1', subtopicCode: '2.1' },
  { id: 'ckt-5', term: 'Covalent bond', definition: 'Strong electrostatic attraction for a shared pair of electrons between two non-metal nuclei.', topicNumber: 2, subtopicId: 'chem-2-1', subtopicCode: '2.1' },
  { id: 'ckt-6', term: 'Delocalised electron', definition: 'Free-moving outer electron not bound to any single atom, found in metals and graphite.', topicNumber: 2, subtopicId: 'chem-2-1', subtopicCode: '2.1' },
  { id: 'ckt-7', term: 'Allotrope', definition: 'Different structural forms of the same element in the same physical state (e.g. diamond and graphite).', topicNumber: 2, subtopicId: 'chem-2-2', subtopicCode: '2.2' },
  { id: 'ckt-8', term: 'Avogadro constant', definition: 'Number of particles in one mole of any substance: 6.02 × 10²³.', topicNumber: 3, subtopicId: 'chem-3-1', subtopicCode: '3.1' },
  { id: 'ckt-9', term: 'Atom economy', definition: 'Proportion of reactant mass ending up in the desired useful product.', topicNumber: 3, subtopicId: 'chem-3-1', subtopicCode: '3.1' },
  { id: 'ckt-10', term: 'Electrolyte', definition: 'Molten or dissolved ionic substance broken down by passing an electric current through it.', topicNumber: 4, subtopicId: 'chem-4-1', subtopicCode: '4.1' },
  { id: 'ckt-11', term: 'Exothermic', definition: 'Reaction releasing energy to the surroundings, causing temperature to rise.', topicNumber: 5, subtopicId: 'chem-5-1', subtopicCode: '5.1' },
  { id: 'ckt-12', term: 'Activation energy', definition: 'Minimum kinetic energy required when particles collide for a chemical reaction to occur.', topicNumber: 6, subtopicId: 'chem-6-1', subtopicCode: '6.1' },
  { id: 'ckt-13', term: 'Catalyst', definition: 'Substance that speeds up a reaction by lowering activation energy without being used up.', topicNumber: 6, subtopicId: 'chem-6-1', subtopicCode: '6.1' },
  { id: 'ckt-14', term: 'Fractional distillation', definition: 'Separation of crude oil hydrocarbons by boiling point inside a temperature-gradient column.', topicNumber: 7, subtopicId: 'chem-7-1', subtopicCode: '7.1' },
  { id: 'ckt-15', term: 'Formulation', definition: 'Useful mixture engineered with carefully measured proportions of ingredients.', topicNumber: 8, subtopicId: 'chem-8-1', subtopicCode: '8.1' },
  { id: 'ckt-16', term: 'Carbon footprint', definition: 'Total greenhouse gas emissions generated over the full life cycle of a product or activity.', topicNumber: 9, subtopicId: 'chem-9-1', subtopicCode: '9.1' },
  { id: 'ckt-17', term: 'Potable water', definition: 'Water containing low levels of dissolved salts and microbes so it is safe to drink.', topicNumber: 10, subtopicId: 'chem-10-1', subtopicCode: '10.1' },
  { id: 'ckt-18', term: 'Phytomining', definition: 'Extracting metals from low-grade ores by growing, harvesting, and burning metal-absorbing plants.', topicNumber: 10, subtopicId: 'chem-10-1', subtopicCode: '10.1' },
];
