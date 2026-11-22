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

export const ALEVEL_CHEMISTRY_TOPICS: TopicDefinition[] = [
  {
    "number": 1,
    "title": "Atomic Structure, TOF Mass Spec & Ionisation Energy",
    "subtopics": [
      {
        "id": "al-chem-1-1",
        "code": "1.1",
        "slug": "1.1-atomic-orbitals-electronic-configuration",
        "title": "Atomic Orbitals, Sub-Shells & Electronic Configuration",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-1-2",
        "code": "1.2",
        "slug": "1.2-tof-mass-spec-ionisation-energy",
        "title": "TOF Mass Spectrometry & Ionisation Energy Trends",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Amount of Substance & Ideal Gas Law",
    "subtopics": [
      {
        "id": "al-chem-2-1",
        "code": "2.1",
        "slug": "2.1-moles-ideal-gas-stoichiometry",
        "title": "Moles, Ideal Gas Equation (pV = nRT) & Titrations",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Bonding, Structure & VSEPR Shapes",
    "subtopics": [
      {
        "id": "al-chem-3-1",
        "code": "3.1",
        "slug": "3.1-bonding-dative-vsepr-shapes",
        "title": "Ionic, Covalent, Dative Bonding & VSEPR Molecular Shapes",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-3-2",
        "code": "3.2",
        "slug": "3.2-electronegativity-intermolecular-forces",
        "title": "Electronegativity, Bond Polarity & Intermolecular Forces",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Energetics, Thermodynamics & Gibbs Free Energy",
    "subtopics": [
      {
        "id": "al-chem-4-1",
        "code": "4.1",
        "slug": "4.1-enthalpy-calorimetry-hess-law",
        "title": "Enthalpy Changes, Calorimetry & Hess’s Law Cycles",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-4-2",
        "code": "4.2",
        "slug": "4.2-born-haber-entropy-gibbs",
        "title": "Born-Haber Cycles, Entropy & Gibbs Free Energy (ΔG = ΔH − TΔS)",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Kinetics, Maxwell-Boltzmann & Rate Equations",
    "subtopics": [
      {
        "id": "al-chem-5-1",
        "code": "5.1",
        "slug": "5.1-maxwell-boltzmann-rate-equations-arrhenius",
        "title": "Maxwell-Boltzmann, Rate Equations & Arrhenius Analysis",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Equilibria (Kc/Kp) & Acids, Bases & Buffers",
    "subtopics": [
      {
        "id": "al-chem-6-1",
        "code": "6.1",
        "slug": "6.1-equilibria-kc-kp",
        "title": "Dynamic Equilibria, Equilibrium Constants Kc & Kp",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-6-2",
        "code": "6.2",
        "slug": "6.2-acids-bases-ka-kw-buffers",
        "title": "Brønsted-Lowry Acids, Ka, Kw, Buffers & pH Curves",
        "readingMinutes": 15,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 7,
    "title": "Periodicity, Group 2/7 & Transition Metals",
    "subtopics": [
      {
        "id": "al-chem-7-1",
        "code": "7.1",
        "slug": "7.1-period-3-group-2-group-7",
        "title": "Period 3 Oxides, Group 2 & Group 7 Halogens/Halides",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-7-2",
        "code": "7.2",
        "slug": "7.2-transition-metals-complexes-catalysis",
        "title": "Transition Metals, Complex Ions, Chelate Effect & Catalysis",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 8,
    "title": "Organic Mechanisms, Aromatics & Spectroscopy",
    "subtopics": [
      {
        "id": "al-chem-8-1",
        "code": "8.1",
        "slug": "8.1-free-radical-nucleophilic-electrophilic",
        "title": "Free Radical Substitution, Nucleophilic Substitution & Electrophilic Addition",
        "readingMinutes": 14,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-8-2",
        "code": "8.2",
        "slug": "8.2-alcohols-carbonyls-acyl-derivatives",
        "title": "Alcohols, Carbonyls, Carboxylic Acids & Acyl Chlorides",
        "readingMinutes": 14,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-8-3",
        "code": "8.3",
        "slug": "8.3-benzene-aromatics-amines",
        "title": "Benzene Delocalisation, Electrophilic Substitution & Amines",
        "readingMinutes": 14,
        "hasDeepContent": true
      },
      {
        "id": "al-chem-8-4",
        "code": "8.4",
        "slug": "8.4-ir-mass-spec-nmr-spectroscopy",
        "title": "IR, High-Res Mass Spec & ¹H / ¹³C NMR Spectroscopy",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  }
];

export const ALEVEL_CHEMISTRY_NOTES: Record<string, NoteLesson> = {
  "al-chem-1-1": {
    "subtopicId": "al-chem-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "Atomic Orbitals, Sub-Shells & Electronic Configuration",
    "readingMinutes": 11,
    "videoTitle": "AQA 1.1 Atomic Structure REVISION",
    "youtubeId": "-cR7NVcQDNI",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "33:00",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Subatomic Particles & Isotopes",
        "cardId": "al-chem-1-1-c1"
      },
      {
        "time": "8:00",
        "seconds": 480,
        "label": "TOF Mass Spectrometry (Ionisation, Acceleration, Drift)",
        "cardId": "al-chem-1-1-c1"
      },
      {
        "time": "17:00",
        "seconds": 1020,
        "label": "Relative Atomic Mass from Mass Spectra",
        "cardId": "al-chem-1-1-c1"
      },
      {
        "time": "24:40",
        "seconds": 1480,
        "label": "Electron Configuration (s, p, d) & Ionisation Energies",
        "cardId": "al-chem-1-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-1-1-c1",
        "title": "Quantum Shells, Sub-Shells & Atomic Orbitals",
        "summary": "Principal quantum shells, s/p/d/f sub-shell capacities, and Aufbau orbital filling order.",
        "diagram": "atomic-structure",
        "bullets": [
          "**Principal quantum number** (n = 1, 2, 3, 4) holds up to 2n² electrons and splits into sub-shells of differing energy: s (1 orbital, max 2 e⁻), p (3 orbitals, max 6 e⁻), d (5 orbitals, max 10 e⁻), and f (7 orbitals, max 14 e⁻).",
          "An atomic orbital is a region of space around the nucleus with a high (~95%) probability of finding up to two electrons of opposite spin: s-orbitals are spherical; p-orbitals are dumbbell-shaped along x, y, and z axes.",
          "**Aufbau filling order** up to Z = 36: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p. Because 4s has slightly lower energy than empty 3d, 4s fills before 3d."
        ],
        "glossaryPills": [
          {
            "term": "atomic orbital",
            "definition": "A three-dimensional region around an atomic nucleus where there is a high probability of locating up to two spin-paired electrons."
          }
        ],
        "memoryAid": "Sub-shell max electrons increase by +4 each step: s = 2, p = 6, d = 10, f = 14.",
        "subsections": [
          {
            "heading": "Sub-Shell Capacities & Filling Order",
            "bullets": [
              "**Orbital capacities** - s = 1 orbital (2 e⁻), p = 3 orbitals (6 e⁻), d = 5 orbitals (10 e⁻), f = 7 orbitals (14 e⁻); opposite spins pair in each box (Pauli exclusion).",
              "**4s fills first AND empties first** - 4s sits slightly lower than 3d before filling, but once occupied, transition metals ALWAYS lose **4s electrons before 3d** when forming ions!"
            ],
            "exampleHeading": "Worked example: Electron configuration of Fe²⁺ (Z = 26)",
            "examples": [
              "Fe atom: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² → remove 4s² first → Fe²⁺: **1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶**."
            ]
          }
        ]
      },
      {
        "id": "al-chem-1-1-c2",
        "title": "Spin-Pairing Rules, Cr/Cu Anomalies & d-Block Ions",
        "summary": "Hund’s spin-pairing rule, Cr/Cu 3d exceptions, and removing 4s electrons first in cations.",
        "bullets": [
          "**Hund’s rule** of maximum multiplicity: electrons occupy degenerate orbitals of a sub-shell SINGLY with parallel spins before pairing up, minimising inter-electron repulsion.",
          "**Chromium (Z = 24)** is 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ (NOT 3d⁴4s²) and **Copper (Z = 29)** is [Ar] 3d¹⁰ 4s¹ (NOT 3d⁹4s²), because half-filled (3d⁵) and completely filled (3d¹⁰) d-subshells minimise repulsion and confer extra exchange stability.",
          "CRITICAL IONISATION RULE: When d-block atoms form positive ions, **4s electrons are ALWAYS lost BEFORE 3d electrons** (because once 3d contains electrons, 4s sits at a higher energy level). Example: Fe is [Ar] 3d⁶ 4s², so Fe²⁺ is [Ar] 3d⁶ and Fe³⁺ is [Ar] 3d⁵."
        ],
        "glossaryPills": [
          {
            "term": "degenerate orbitals",
            "definition": "Orbitals within the same sub-shell (such as the three 2p orbitals) that share identical energy levels."
          }
        ],
        "commonMistake": "Students frequently write Fe²⁺ as [Ar] 3d⁴ 4s² — WRONG! Always empty 4s first when forming transition metal cations, giving Fe²⁺ = [Ar] 3d⁶."
      },
      {
        "id": "al-chem-1-1-c3",
        "title": "Chromium & Copper Exceptions + Transition Metal Ions",
        "summary": "Why Cr (Z = 24) and Cu (Z = 29) promote a 4s electron into 3d and how to write any d-block ion cleanly.",
        "bullets": [
          "**Chromium (Z = 24)** - **[Ar] 3d⁵ 4s¹** (NOT 3d⁴ 4s²) — extra stability from a half-filled 3d⁵ sub-shell with minimised electron–electron repulsion.",
          "**Copper (Z = 29)** - **[Ar] 3d¹⁰ 4s¹** (NOT 3d⁹ 4s²) — extra stability from a completely filled 3d¹⁰ sub-shell.",
          "**Hund’s Rule of Maximum Multiplicity** - electrons occupy degenerate p or d orbitals **singly with parallel spins** before pairing up."
        ],
        "subsections": [
          {
            "heading": "Step-by-Step Rule for Transition Metal Cations",
            "bullets": [
              "**Step 1** - write the neutral atom configuration (remembering Cr and Cu!).",
              "**Step 2** - strip the **4s** electrons FIRST, then remove remaining required electrons from **3d**."
            ],
            "exampleHeading": "Worked example: Cu²⁺ (Z = 29)",
            "examples": [
              "Cu = [Ar] 3d¹⁰ 4s¹ → lose 4s¹ then one 3d → Cu²⁺ = **[Ar] 3d⁹**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "orbital",
            "definition": "Region of space around a nucleus that can hold up to two electrons with opposite spins."
          },
          {
            "term": "sub-shell",
            "definition": "Group of orbitals of the same type (s, p, d, or f) within a principal energy level."
          }
        ],
        "commonMistake": "NEVER write Fe²⁺ as [Ar] 3d⁴ 4s² — ALWAYS empty the 4s sub-shell BEFORE removing any 3d electrons!"
      }
    ],
    "keyTerms": [
      {
        "term": "Principal quantum number (n)",
        "definition": "Integer shell index determining main energy level and maximum electron capacity (2n²)."
      },
      {
        "term": "Sub-shell",
        "definition": "Subdivision of a principal energy level composed of orbitals of identical shape (s, p, d, or f)."
      },
      {
        "term": "Spin-pairing",
        "definition": "Pairing of two electrons with opposing magnetic spins inside the same atomic orbital (Pauli exclusion principle)."
      },
      {
        "term": "Isoelectronic",
        "definition": "Species (atoms or ions) that possess the exact same electronic configuration (e.g., N³⁻, O²⁻, F⁻, Ne, Na⁺)."
      }
    ],
    "checklistPoints": [
      "Write full and noble-gas-core s, p, d configurations for atoms and ions up to Z = 36 (krypton).",
      "Recall the anomalous configurations of Chromium ([Ar]3d⁵4s¹) and Copper ([Ar]3d¹⁰4s¹).",
      "Remove 4s electrons before 3d electrons whenever writing transition metal cation configurations."
    ]
  },
  "al-chem-1-2": {
    "subtopicId": "al-chem-1-2",
    "subtopicCode": "1.2",
    "subtopicTitle": "TOF Mass Spectrometry & Ionisation Energy Trends",
    "readingMinutes": 13,
    "videoTitle": "Ionisation energy",
    "youtubeId": "hNYqklNE158",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "8:31",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Definition & Equation for First Ionisation Energy",
        "cardId": "al-chem-1-2-c2"
      },
      {
        "time": "2:10",
        "seconds": 130,
        "label": "Factors: Nuclear Charge, Radius & Shielding",
        "cardId": "al-chem-1-2-c2"
      },
      {
        "time": "4:35",
        "seconds": 275,
        "label": "Trends Across Periods & Down Groups",
        "cardId": "al-chem-1-2-c2"
      },
      {
        "time": "6:35",
        "seconds": 395,
        "label": "Successive Ionisation Energies",
        "cardId": "al-chem-1-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-1-2-c1",
        "title": "Time-of-Flight (TOF) Mass Spectrometry",
        "summary": "Electron impact vs electrospray ionisation, kinetic energy acceleration, and ion drift equations.",
        "bullets": [
          "1. Ionisation: **Electron impact** fires high-energy electrons from an electron gun at vaporised low-Mr samples: X(g) → X⁺(g) + e⁻ (can cause fragmentation). Electrospray dissolves high-Mr samples (e.g. proteins) in volatile polar solvent pushed through a high-voltage needle, adding a proton: X(g) + H⁺ → XH⁺(g) (minimal fragmentation; remember to subtract 1 from m/z to find Mr!).",
          "2. Acceleration: Positive ions are accelerated by an electric field so ALL ions receive the SAME kinetic energy: **KE = ½mv²**. Lighter ions (smaller mass m in kg!) achieve higher velocity v = √(2KE / m).",
          "3. Ion Drift & Detection: Ions drift through a vacuum flight tube of length d in time **t = d / v = d√(m / 2KE)**. Lighter ions arrive first; hitting the detector plate, each ion gains an electron generating a current proportional to isotopic abundance.",
          "Relative atomic mass: Aᵣ = Σ(isotopic mass × % abundance) ÷ 100. For kinetic energy problems, convert molar mass to single-ion mass in kg: m = (Mᵣ × 10⁻³) ÷ (6.022 × 10²³)."
        ],
        "glossaryPills": [
          {
            "term": "electrospray",
            "definition": "Soft TOF ionisation method in which sample molecules dissolved in a volatile solvent gain a proton (H⁺) from a high-voltage capillary without fragmenting."
          }
        ],
        "commonMistake": "In TOF kinetic energy calculations, mass MUST be the mass of ONE ION in KILOGRAMS — divide Mᵣ by (1000 × Avogadro constant) before plugging into KE = ½mv²!",
        "subsections": [
          {
            "heading": "TOF Mass Spectrometry Stages & Kinetic Energy Equation",
            "bullets": [
              "**Four TOF stages** - (1) **Ionisation** (Electrospray adds H⁺ → MH⁺ without fragmenting; Electron Impact knocks off e⁻ → M⁺); (2) **Acceleration** (electric field gives ALL 1+ ions the **same KE = ½mv²**); (3) **Ion drift** (lighter ions travel faster, reaching detector first: **t = d √(m / 2KE)**); (4) **Detection** (ions pick up e⁻ generating current proportional to abundance)."
            ],
            "exampleHeading": "Worked example: Electrospray M_r trap",
            "examples": [
              "If an electrospray peak appears at m/z = **181.0**, the molecular mass M_r of the molecule M is 181.0 − 1.0 = **180.0** (subtract the added H⁺!)."
            ]
          }
        ]
      },
      {
        "id": "al-chem-1-2-c2",
        "title": "First & Successive Ionisation Energy Trends",
        "summary": "Period 3 first ionisation energy trends, the Al and S sub-shell dips, and successive IE jumps.",
        "bullets": [
          "**First ionisation energy** (IE₁) is the enthalpy change required to remove 1 mole of electrons from 1 mole of gaseous atoms to form 1 mole of gaseous 1+ ions: X(g) → X⁺(g) + e⁻ (always include (g) state symbols!).",
          "General increase across Period 3 (Na → Ar): nuclear charge increases (more protons), atomic radius shrinks, and electron shielding remains roughly constant (same outer shell), increasing electrostatic attraction to the outer electron.",
          "Two famous Period 3 dips (proving sub-shells exist!): (1) **Mg → Al dip**: Al’s outer electron sits in a higher-energy 3p orbital further from the nucleus and slightly shielded by 3s², requiring less energy to remove than Mg’s 3s²; (2) **P → S dip**: S has a paired set of electrons in one 3p orbital (3p⁴), causing spin-pair repulsion that makes one electron easier to remove than in half-filled P (3p³).",
          "**Successive ionisation energies** rise steadily as effective nuclear charge per remaining electron rises, punctuated by a HUGE JUMP whenever an electron is removed from a new inner quantum shell closer to the nucleus (identifying the element’s Group)."
        ],
        "glossaryPills": [
          {
            "term": "spin-pair repulsion",
            "definition": "Electrostatic repulsion between two electrons sharing the same atomic orbital (as in S 3p⁴ or O 2p⁴), lowering the first ionisation energy."
          }
        ],
        "memoryAid": "Remember the two Period 3 IE dips: Group 2→3 (Al: new higher-energy p sub-shell) and Group 5→6 (S: first spin-paired p orbital repulsion)."
      },
      {
        "id": "al-chem-1-2-c3",
        "title": "Ionisation Energy Anomalies (Group 2→3 & Group 5→6)",
        "summary": "Explaining the two classic dips across Period 3 (Mg→Al and P→S) and reading successive IE jumps.",
        "bullets": [
          "**General trend across Period 3** - First IE increases because nuclear charge increases, shielding is similar (same shell), and atomic radius shrinks → stronger attraction to outer e⁻.",
          "**Dip 1: Mg → Al (Be → B)** - Al’s outer electron enters the higher-energy **3p sub-shell** (further from nucleus and slightly shielded by 3s²), so less energy is needed to remove it.",
          "**Dip 2: P → S (N → O)** - Sulfur has a **paired electron in a 3p orbital** (3p⁴); **spin-pair repulsion** between the two electrons in the same orbital makes it easier to remove one than from phosphorus’s half-filled 3p³!"
        ],
        "subsections": [
          {
            "heading": "Successive Ionisation Energy Jumps",
            "bullets": [
              "**Big jump between nth and (n+1)th IE** - proves the (n+1)th electron is removed from an **inner shell closer to the nucleus with less shielding** ⇒ the element is in **Group n**!"
            ],
            "exampleHeading": "Worked check: IE₁ = 738, IE₂ = 1451, IE₃ = 7733 kJ mol⁻¹",
            "examples": [
              "Huge jump between IE₂ and IE₃ ⇒ 2 outer-shell electrons ⇒ **Group 2** (Magnesium)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "first ionisation energy",
            "definition": "Enthalpy change to remove 1 mole of electrons from 1 mole of gaseous atoms to form 1 mole of gaseous 1+ ions."
          },
          {
            "term": "spin-pair repulsion",
            "definition": "Electrostatic repulsion between two paired electrons occupying the same orbital, lowering ionisation energy (e.g. P → S)."
          }
        ],
        "commonMistake": "When calculating mass m of a single ion for TOF KE = ½mv², divide molar mass (in kg mol⁻¹, i.e. M_r × 10⁻³) by Avogadro’s constant (6.022 × 10²³)!"
      }
    ],
    "keyTerms": [
      {
        "term": "First ionisation energy",
        "definition": "Energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions."
      },
      {
        "term": "Relative atomic mass (Aᵣ)",
        "definition": "Weighted average mass of an atom of an element compared to 1/12th the mass of a carbon-12 atom."
      },
      {
        "term": "Shielding",
        "definition": "Repulsion of outer valence electrons by inner-shell electrons, reducing the net nuclear attraction felt."
      },
      {
        "term": "Time of flight (t)",
        "definition": "Drift time t = d√(m / 2KE) proportional to the square root of isotopic mass for ions of identical charge and kinetic energy."
      }
    ],
    "checklistPoints": [
      "Write equations for electron impact and electrospray ionisation and remember the M+1 mass shift for electrospray.",
      "Solve TOF mass spec drift-time problems converting molar mass into single-ion kg cleanly.",
      "Explain the general Period 3 IE₁ trend and justify both the Mg→Al and P→S anomalies using sub-shell and orbital repulsion theory."
    ]
  },
  "al-chem-2-1": {
    "subtopicId": "al-chem-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Moles, Ideal Gas Equation (pV = nRT) & Titrations",
    "readingMinutes": 13,
    "videoTitle": "Calculations Using the Ideal Gas Equation",
    "youtubeId": "D-3D2d07Puk",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "7:33",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "The Ideal Gas Equation: pV = nRT",
        "cardId": "al-chem-2-1-c1"
      },
      {
        "time": "1:50",
        "seconds": 110,
        "label": "SI Units Conversion (Pa, m³, K)",
        "cardId": "al-chem-2-1-c1"
      },
      {
        "time": "3:55",
        "seconds": 235,
        "label": "Worked Past Paper Calculation",
        "cardId": "al-chem-2-1-c2"
      },
      {
        "time": "5:55",
        "seconds": 355,
        "label": "Common Exam Pitfalls & Rearranging",
        "cardId": "al-chem-2-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-2-1-c1",
        "title": "The Ideal Gas Equation (pV = nRT) & SI Units",
        "summary": "Applying pV = nRT with strict Pa, m³, and K conversions to calculate moles and gas Mr.",
        "bullets": [
          "Ideal gas equation: **pV = nRT**, where R = 8.31 J K⁻¹ mol⁻¹ is the universal gas constant.",
          "Mandatory SI unit conversions BEFORE substituting: Pressure p in Pascals (1 kPa = 10³ Pa); Volume V in cubic metres m³ (cm³ × 10⁻⁶ = m³; dm³ × 10⁻³ = m³); Temperature T in Kelvin (T/K = T/°C + 273).",
          "Combining n = m / Mᵣ with **pV = nRT** allows direct determination of the Mᵣ of a volatile liquid vaporised in a gas syringe: Mᵣ = mRT / (pV)."
        ],
        "glossaryPills": [
          {
            "term": "gas constant",
            "definition": "Universal proportionality constant R = 8.31 J K⁻¹ mol⁻¹ linking pressure, volume, moles, and Kelvin temperature in pV = nRT."
          }
        ],
        "commonMistake": "The #1 cause of lost marks in pV = nRT questions is forgetting to convert cm³ to m³ (multiply by 10⁻⁶, NOT 10⁻³!) or forgetting to add 273 to °C.",
        "subsections": [
          {
            "heading": "Ideal Gas SI Unit Conversions (pV = nRT)",
            "bullets": [
              "**Strict SI units** - **p in Pascals (Pa)** (kPa × 10³), **V in m³** (cm³ × 10⁻⁶; dm³ × 10⁻³), **T in Kelvin (K)** (°C + 273), **R = 8.31 J K⁻¹ mol⁻¹**.",
              "**Percentage uncertainty in burette readings** - burette is read TWICE (initial + final), so total error = **2 × 0.05 = ±0.10 cm³**; % uncertainty = (0.10 / titre) × 100%."
            ],
            "exampleHeading": "Worked example: Volume of 0.50 mol gas at 100 kPa and 27 °C",
            "examples": [
              "V = nRT/p = (0.50 × 8.31 × 300) / 100,000 = **0.0125 m³** (12.5 dm³)."
            ]
          }
        ]
      },
      {
        "id": "al-chem-2-1-c2",
        "title": "Stoichiometry, Hydrated Salts, Yield & Atom Economy",
        "summary": "Empirical and hydrated salt formulas alongside percentage yield vs green atom economy.",
        "bullets": [
          "**Empirical formula** = simplest whole-number ratio of atoms of each element in a compound; divide % or mass by Aᵣ, divide by smallest mole value, and scale to integers. Hydrated salt formula (e.g. CuSO₄·xH₂O): find moles of anhydrous salt and moles of water driven off, then ratio x = n(H₂O) ÷ n(salt).",
          "**Percentage yield** = (Actual moles of product ÷ Theoretical maximum moles) × 100 — reflects practical efficiency (reversible reactions, incomplete transfer, side reactions).",
          "Percentage atom economy = (Mᵣ of desired product ÷ Sum of Mᵣ of ALL reactants) × 100 — reflects chemical sustainability and waste minimisation (addition reactions have 100% atom economy)."
        ],
        "glossaryPills": [
          {
            "term": "atom economy",
            "definition": "Measure of the proportion of reactant atomic mass incorporated into the useful target product, expressed as a percentage."
          }
        ],
        "memoryAid": "Remember: Yield measures how well YOU ran the reaction; Atom Economy measures how wasteful the BALANCED EQUATION itself is.",
        "subsections": [
          {
            "heading": "Atom Economy vs Percentage Yield",
            "bullets": [
              "**% Atom Economy** = (M_r of desired product / Sum of M_r of ALL reactants) × 100% — theoretical measure of waste (addition reactions = 100%!).",
              "**% Yield** = (Actual moles / Theoretical moles) × 100% — practical measure of reaction losses (incomplete reaction, side reactions, transfer loss)."
            ],
            "exampleHeading": "Worked example: Back-titration workflow",
            "examples": [
              "Add known EXCESS acid to insoluble carbonate → titrate leftover acid with standard NaOH → subtract leftover moles from initial excess acid to find moles that reacted!"
            ]
          }
        ]
      },
      {
        "id": "al-chem-2-1-c3",
        "title": "Volumetric Analysis, Standard Solutions & Uncertainties",
        "summary": "Preparing standard solutions, selecting concordant titres, and combining burette uncertainties.",
        "bullets": [
          "Preparing a **standard solution**: weigh primary standard accurately by difference, dissolve in minimal deionised water, transfer with washings into a 250 cm³ volumetric flask, make up to the graduation mark (bottom of meniscus) with a dropping pipette, and invert repeatedly to homogenise.",
          "Concordant titres lie within 0.10 cm³ of each other; calculate mean titre using ONLY concordant results (discarding the rough titre).",
          "Percentage apparatus uncertainty = (Uncertainty × Number of readings ÷ Measured value) × 100. Burette readings involve TWO readings (initial & final, so 2 × ±0.05 = ±0.10 cm³). Increase titre volume (by using a more dilute titrant) to reduce percentage uncertainty."
        ],
        "glossaryPills": [
          {
            "term": "concordant titres",
            "definition": "Repeat titration volumes that agree within 0.10 cm³ of each other, averaged to minimise random reading error."
          }
        ],
        "commonMistake": "A burette with ±0.05 cm³ resolution per reading has a TOTAL uncertainty of ±0.10 cm³ per titre because you take both a start and end reading!"
      }
    ],
    "keyTerms": [
      {
        "term": "Avogadro constant (Nₐ)",
        "definition": "The number of constituent particles in one mole of substance: 6.022 × 10²³ mol⁻¹."
      },
      {
        "term": "Empirical formula",
        "definition": "The simplest whole-number ratio of atoms of each element present in a compound."
      },
      {
        "term": "Atom economy",
        "definition": "(Mᵣ of desired product ÷ ΣMᵣ of all reactants) × 100; measures theoretical green-chemistry efficiency."
      },
      {
        "term": "Water of crystallisation",
        "definition": "Stoichiometric water molecules chemically incorporated within the crystal lattice of a hydrated salt."
      }
    ],
    "checklistPoints": [
      "Convert pressure (Pa), volume (m³), and temperature (K) reliably for every pV = nRT problem.",
      "Calculate empirical formulas, hydrated salt values, limiting reagents, percentage yield, and atom economy.",
      "Propagate burette/balance apparatus uncertainties and explain how to reduce percentage error in titrations."
    ]
  },
  "al-chem-3-1": {
    "subtopicId": "al-chem-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "Ionic, Covalent, Dative Bonding & VSEPR Molecular Shapes",
    "readingMinutes": 13,
    "videoTitle": "Shapes of molecules 1 (no lone pairs)",
    "youtubeId": "eD_4jRVCApA",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "14:56",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Electron Pair Repulsion Theory (VSEPR)",
        "cardId": "al-chem-3-1-c2"
      },
      {
        "time": "3:40",
        "seconds": 220,
        "label": "Linear (180°), Trigonal Planar (120°) & Tetrahedral (109.5°)",
        "cardId": "al-chem-3-1-c2"
      },
      {
        "time": "8:10",
        "seconds": 490,
        "label": "Trigonal Bipyramidal & Octahedral (90°)",
        "cardId": "al-chem-3-1-c2"
      },
      {
        "time": "12:00",
        "seconds": 720,
        "label": "Effect of Lone Pairs & Exam Technique",
        "cardId": "al-chem-3-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-3-1-c1",
        "title": "Strong Bonds & Dative (Coordinate) Covalent Bonding",
        "summary": "Ionic lattice charge density, metallic sea of electrons, and dative coordinate covalent bonds.",
        "diagram": "ionic-covalent-bonding",
        "bullets": [
          "**Ionic bonding**: strong non-directional electrostatic attraction between oppositely charged ions in a giant ionic lattice; stronger with higher ionic charge and smaller ionic radius (higher charge density).",
          "**Metallic bonding**: electrostatic attraction between a lattice of positive metal cations and a sea of delocalised outer electrons (higher charge & smaller radius = higher melting point).",
          "Dative or coordinate covalent bond: a shared pair of electrons in which BOTH electrons originate from the same donor atom (represented by an arrow → from donor lone pair to electron-deficient acceptor). Examples: NH₄⁺ (N donates lone pair to H⁺), H₃O⁺, CO, and dimeric Al₂Cl₆."
        ],
        "subsections": [
          {
            "heading": "Coordinate (dative) bonding examples",
            "bullets": [
              "Represented by an arrow (**→**) pointing from the **donor atom’s lone pair** into an electron-deficient orbital.",
              "Once formed, a dative bond has the **exact same length and bond enthalpy** as an ordinary covalent bond."
            ],
            "exampleHeading": "Classic A-Level coordinate species:",
            "examples": [
              "**Ammonium ion (NH₄⁺)** — Nitrogen donates its lone pair to H⁺, forming a symmetrical tetrahedral ion (109.5°)",
              "**Aluminium chloride dimer (Al₂Cl₆)** — Two bridging Cl atoms each donate a lone pair to electron-deficient Al centres"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "coordinate covalent bond",
            "definition": "A covalent bond in which both shared electrons are donated by the same atom; once formed it is identical in strength and length to a normal covalent bond."
          }
        ],
        "memoryAid": "Once a dative bond forms (like all four N–H bonds in NH₄⁺), it is completely indistinguishable in length and strength from the other covalent bonds."
      },
      {
        "id": "al-chem-3-1-c2",
        "title": "VSEPR Theory & Molecular Shapes",
        "summary": "Predicting 3D molecular shapes and exact bond angles using LP–LP > LP–BP > BP–BP repulsion.",
        "bullets": [
          "Valence Shell Electron Pair Repulsion (**VSEPR**): electron pairs around a central atom arrange themselves as far apart as possible to minimise mutual repulsion.",
          "Repulsion hierarchy: Lone Pair–Lone Pair (LP–LP) > Lone Pair–Bonding Pair (LP–BP) > Bonding Pair–Bonding Pair (BP–BP). Because lone pairs are held closer to the central nucleus, each lone pair compresses adjacent bond angles by ~2.5°.",
          "Standard symmetrical shapes (0 lone pairs): 2 BP = Linear (180°, BeCl₂, CO₂); 3 BP = Trigonal planar (120°, BF₃); 4 BP = Tetrahedral (109.5°, CH₄, NH₄⁺); 5 BP = Trigonal bipyramidal (90° & 120°, PCl₅); 6 BP = Octahedral (90°, SF₆).",
          "Lone-pair distorted shapes: 3 BP + 1 LP = Trigonal pyramidal (107°, NH₃); 2 BP + 2 LP = Bent / V-shaped (104.5°, H₂O); 4 BP + 2 LP = Square planar (90°, XeF₄, ClF₄⁻). Treat double/triple bonds as single regions of electron density when counting shape."
        ],
        "glossaryPills": [
          {
            "term": "lone pair",
            "definition": "A pair of valence electrons on a central atom not shared in a covalent bond, exerting greater electrostatic repulsion than a bonding pair."
          }
        ],
        "commonMistake": "When explaining why H₂O has a 104.5° angle while CH₄ has 109.5°, ALWAYS state: (1) count of bonding pairs and lone pairs on the central atom, (2) electron pairs repel as far apart as possible, AND (3) lone pairs repel MORE strongly than bonding pairs."
      },
      {
        "id": "al-chem-3-1-c3",
        "title": "VSEPR Lone-Pair Compression & Giant vs Molecular Lattices",
        "summary": "Predicting exact bond angles down to 2.5° per lone pair and explaining melting-point trends across four crystal types.",
        "bullets": [
          "**Lone-pair repulsion hierarchy** - **LP–LP > LP–BP > BP–BP** — each lone pair compresses bond angles by roughly **2.5°** (CH₄ 109.5° → NH₃ 107° → H₂O 104.5°; XeF₄ square planar 90° with 2 lone pairs opposite!).",
          "**Dative (coordinate) covalent bond** - shared pair where **BOTH electrons come from ONE atom** (shown with an arrow →, e.g. NH₄⁺, Al₂Cl₆, H₃O⁺); once formed, it has identical length/strength to a normal covalent bond.",
          "**Four crystal structures** - **Ionic** (NaCl: high mp, conducts molten/aq), **Metallic** (Mg: high mp, malleable, conducts solid/molten), **Macromolecular** (diamond/graphite/SiO₂: very high mp; graphite conducts via delocalised e⁻ between layers), **Simple molecular** (I₂/ice: low mp, weak IMFs broken on melting)."
        ],
        "subsections": [
          {
            "heading": "Six Must-Know VSEPR Shapes (No Lone Pairs)",
            "bullets": [
              "**2 BP** - Linear (180°, BeCl₂); **3 BP** - Trigonal planar (120°, BF₃); **4 BP** - Tetrahedral (109.5°, CH₄).",
              "**5 BP** - Trigonal bipyramidal (90° & 120°, PCl₅); **6 BP** - Octahedral (90°, SF₆)."
            ],
            "exampleHeading": "Worked example: Shape and bond angle of ClF₃ (3 BP, 2 LP)",
            "examples": [
              "5 electron pairs (trigonal bipyramidal base) with 2 equatorial lone pairs → **T-shaped** (~87.5°)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "dative covalent bond",
            "definition": "Covalent bond in which both shared electrons originate from the same donor atom (e.g. N → H⁺ in NH₄⁺)."
          },
          {
            "term": "lone pair",
            "definition": "Pair of valence electrons not involved in bonding; repels more strongly than a bonding pair, reducing bond angles by ~2.5°."
          }
        ],
        "commonMistake": "When explaining why NH₃ (107°) has a smaller angle than CH₄ (109.5°), ALWAYS state: \"Lone pairs repel MORE strongly than bonding pairs\" — never just say \"lone pairs take up space\"!"
      }
    ],
    "keyTerms": [
      {
        "term": "Dative covalent bond",
        "definition": "Shared pair of electrons where both electrons come from one donor atom."
      },
      {
        "term": "Charge density",
        "definition": "Ratio of ionic charge to ionic volume/radius; greater charge density yields stronger electrostatic bonding."
      },
      {
        "term": "VSEPR",
        "definition": "Valence Shell Electron Pair Repulsion theory predicting 3D molecular geometry from bonding and lone electron pairs."
      },
      {
        "term": "Square planar",
        "definition": "Molecular geometry with 4 bonding pairs and 2 opposite lone pairs at 90° bond angles (e.g. XeF₄, ClF₄⁻)."
      }
    ],
    "checklistPoints": [
      "Draw dot-and-cross and arrow diagrams for dative species including NH₄⁺, H₃O⁺, and Al₂Cl₆.",
      "Predict shape name and exact bond angle for any neutral molecule or charged polyatomic ion (e.g. ICl₄⁻, PF₆⁻, SF₄).",
      "Write the full 3-mark VSEPR justification referencing LP–LP > LP–BP > BP–BP repulsion."
    ]
  },
  "al-chem-3-2": {
    "subtopicId": "al-chem-3-2",
    "subtopicCode": "3.2",
    "subtopicTitle": "Electronegativity, Bond Polarity & Intermolecular Forces",
    "readingMinutes": 12,
    "videoTitle": "Intermolecular Forces",
    "youtubeId": "wUzlaJkCXrw",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "14:16",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Electronegativity & Polar Bonds",
        "cardId": "al-chem-3-2-c1"
      },
      {
        "time": "3:20",
        "seconds": 200,
        "label": "Induced Dipole-Dipole (van der Waals / London) Forces",
        "cardId": "al-chem-3-2-c2"
      },
      {
        "time": "7:20",
        "seconds": 440,
        "label": "Permanent Dipole-Dipole Interactions",
        "cardId": "al-chem-3-2-c2"
      },
      {
        "time": "10:50",
        "seconds": 650,
        "label": "Hydrogen Bonding & Anomalous Properties of Water",
        "cardId": "al-chem-3-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-3-2-c1",
        "title": "Electronegativity & Molecular Polarity",
        "summary": "Pauling electronegativity trends, polar covalent bonds, and symmetrical dipole cancellation.",
        "bullets": [
          "Electronegativity is the power of an atom to attract the bonding pair of electrons in a covalent bond. It increases across a period (greater nuclear charge, smaller radius) and up a group (less shielding, smaller radius) — peaking at F (4.0), O (3.4), N (3.0), Cl (3.2).",
          "A **polar covalent bond** forms when two bonded atoms differ in electronegativity, pulling electron density toward the more electronegative atom (creating δ⁻ and δ⁺ partial charges).",
          "A molecule containing polar bonds is **NON-POLAR** overall if it is completely symmetrical so individual bond dipoles cancel out (e.g. linear CO₂, trigonal planar BF₃, tetrahedral CCl₄). Asymmetrical molecules (H₂O, NH₃, CHCl₃) have a net permanent dipole."
        ],
        "glossaryPills": [
          {
            "term": "electronegativity",
            "definition": "The ability of an atom to attract the pair of bonding electrons towards itself within a covalent bond."
          }
        ],
        "memoryAid": "FONCl — Fluorine, Oxygen, Nitrogen, Chlorine are the electronegativity champions.",
        "subsections": [
          {
            "heading": "Electronegativity & Molecular Symmetry Cancellation",
            "bullets": [
              "**Pauling electronegativity** - increases across a period and up a group (F > O > N ≈ Cl > C > H).",
              "**Polar bonds vs Polar molecule** - symmetrical molecules like **CO₂ (linear)**, **BF₃ (trigonal planar)**, and **CCl₄ (tetrahedral)** have polar bonds whose dipoles **cancel completely** → **NON-POLAR molecule**!"
            ],
            "exampleHeading": "Worked example: Why is CHCl₃ polar while CCl₄ is non-polar?",
            "examples": [
              "In CCl₄ four identical C–Cl dipoles cancel symmetrically; in CHCl₃ one C–H breaks symmetry, giving a net dipole toward the Cl atoms."
            ]
          }
        ]
      },
      {
        "id": "al-chem-3-2-c2",
        "title": "Induced Dipoles, Permanent Dipoles & Hydrogen Bonding",
        "summary": "Van der Waals induced dipoles, permanent dipoles, hydrogen bonding, and low-density ice.",
        "bullets": [
          "**Induced dipole-dipole** (van der Waals / London dispersion) forces act between ALL molecules: constant **random** movement of electron clouds creates temporary instantaneous dipoles that induce opposite dipoles in neighbouring molecules. Stronger with MORE electrons (higher Mr) and larger unbranched surface contact area.",
          "**Permanent dipole-dipole** attractions occur between oppositely charged δ⁺/δ⁻ ends of polar molecules (e.g., HCl, propanone), adding to van der Waals forces.",
          "Hydrogen bonding is the strongest intermolecular force: occurs strictly when H is covalently bonded directly to a very electronegative N, O, or F atom carrying a lone pair (δ⁺ H attracted to lone pair on δ⁻ N/O/F of another molecule — linear 180° around H).",
          "**Anomalous properties of H₂O**: far higher boiling point than H₂S/H₂Se/H₂Te due to extensive H-bonding (up to 4 per H₂O molecule); ice is LESS dense than liquid water because fixed H-bonds hold H₂O molecules further apart in an open tetrahedral hexagonal lattice."
        ],
        "glossaryPills": [
          {
            "term": "hydrogen bonding",
            "definition": "Strong directional intermolecular attraction between an electron-deficient δ⁺ hydrogen bonded to N, O, or F and a lone pair on a neighbouring N, O, or F atom."
          }
        ],
        "commonMistake": "When boiling simple molecular substances (like I₂ or H₂O), you break INTERMOLECULAR FORCES — NEVER state that covalent bonds break during boiling!"
      },
      {
        "id": "al-chem-3-2-c3",
        "title": "Three Intermolecular Forces & Anomalous Properties of Water",
        "summary": "Ranking van der Waals (London), permanent dipole–dipole, and hydrogen bonds — and explaining why ice floats.",
        "bullets": [
          "**Van der Waals (induced dipole–dipole / London)** - temporary uneven electron distribution creates an instantaneous dipole that induces dipoles in neighbours; **stronger with MORE ELECTRONS (higher M_r) and straighter chains** (greater surface contact).",
          "**Permanent dipole–dipole** - electrostatic attraction between δ⁺ and δ⁻ ends of polar molecules (e.g. HCl, propanone).",
          "**Hydrogen bonding (strongest IMF)** - ONLY when **H is covalently bonded directly to F, O, or N**, attracting a **lone pair on F, O, or N** of a neighbouring molecule (draw with dashed line, δ⁺/δ⁻, and lone pair!)."
        ],
        "subsections": [
          {
            "heading": "Anomalous Properties of H₂O, NH₃ & HF",
            "bullets": [
              "**High boiling points** - H₂O, NH₃, and HF sit far above the Group 5/6/7 hydride trend because extra energy is needed to break strong **hydrogen bonds**.",
              "**Ice is less dense than liquid water** - hydrogen bonds lock water molecules into an **open hexagonal lattice** with wider spacing than liquid water."
            ],
            "exampleHeading": "Worked check: Boiling points of HCl (−85 °C) vs HI (−35 °C) vs HF (+20 °C)",
            "examples": [
              "HI > HCl because I has far more electrons (stronger van der Waals); HF is highest due to **hydrogen bonding**!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "electronegativity",
            "definition": "Power of an atom to attract the pair of electrons in a covalent bond."
          },
          {
            "term": "hydrogen bond",
            "definition": "Strongest intermolecular attraction between a δ⁺ hydrogen bonded to F, O, or N and a lone pair on a neighbouring F, O, or N atom."
          }
        ],
        "commonMistake": "When boiling water or iodine, NEVER say \"covalent bonds break\" — ONLY INTERMOLECULAR FORCES break during melting and boiling of simple molecular substances!"
      }
    ],
    "keyTerms": [
      {
        "term": "Polar bond",
        "definition": "Covalent bond with unequal electron distribution due to electronegativity difference between bonded atoms."
      },
      {
        "term": "Van der Waals forces",
        "definition": "Temporary instantaneous dipole–induced dipole attractions increasing with total electron count and surface area."
      },
      {
        "term": "Hydrogen bond",
        "definition": "Electrostatic attraction between a lone pair on N, O, or F and a δ⁺ H covalently bonded to N, O, or F."
      }
    ],
    "checklistPoints": [
      "Define electronegativity precisely and explain why symmetrical molecules like CCl₄ lack a permanent dipole.",
      "Explain the physical mechanism of induced dipole-dipole forces and how branching affects boiling points.",
      "Draw accurately labelled hydrogen bonds showing δ⁺/δ⁻ charges, lone pairs, and dashed lines between H₂O, NH₃, or HF molecules."
    ]
  },
  "al-chem-4-1": {
    "subtopicId": "al-chem-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "Enthalpy Changes, Calorimetry & Hess’s Law Cycles",
    "readingMinutes": 12,
    "videoTitle": "Hess’s Law and Cycles",
    "youtubeId": "Fq9mqz1TbSw",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "19:14",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Hess Law Principle & Enthalpy Definitions",
        "cardId": "al-chem-4-1-c1"
      },
      {
        "time": "4:30",
        "seconds": 270,
        "label": "Enthalpy of Formation Cycles (Arrows Up)",
        "cardId": "al-chem-4-1-c2"
      },
      {
        "time": "10:20",
        "seconds": 620,
        "label": "Enthalpy of Combustion Cycles (Arrows Down)",
        "cardId": "al-chem-4-1-c2"
      },
      {
        "time": "15:20",
        "seconds": 920,
        "label": "Worked Calculations & Sign Checks",
        "cardId": "al-chem-4-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-4-1-c1",
        "title": "Standard Enthalpies & Calorimetry (q = mcΔT)",
        "summary": "Standard formation/combustion definitions, q = mcΔT calorimetry, and cooling-curve extrapolation.",
        "diagram": "exothermic-endothermic",
        "bullets": [
          "Standard conditions: 100 kPa pressure, 298 K (25°C), 1.0 mol dm⁻³ solutions. ΔfH° = enthalpy change when 1 mole of a compound is formed from its elements in their standard states (ΔfH° of any element = 0). ΔcH° = enthalpy change when 1 mole of a substance burns completely in excess oxygen.",
          "Calorimetry heat energy: **q = m c ΔT** (m = mass of WATER/solution heated in grams, c = 4.18 J g⁻¹ K⁻¹, ΔT = temperature change). Molar enthalpy change: ΔH = −q ÷ (1000 × n) in kJ mol⁻¹ (negative sign for temperature rise = exothermic).",
          "For slow reactions in polystyrene cups, plot temperature vs time and extrapolate the cooling curve back to the instant of mixing to correct for heat loss to the surroundings."
        ],
        "glossaryPills": [
          {
            "term": "extrapolate",
            "definition": "Extending the linear post-reaction cooling trend line backwards to the exact mixing time to estimate the theoretical maximum ΔT without heat loss."
          }
        ],
        "commonMistake": "In spirit burner calorimetry, m in q = mcΔT is the mass of the WATER in the copper calorimeter — NOT the mass of fuel burned! Only use fuel mass to calculate moles n.",
        "subsections": [
          {
            "heading": "Calorimetry (q = mcΔT) & Standard Enthalpy Definitions",
            "bullets": [
              "**q = mcΔT** - **m is the mass of the WATER/SOLUTION heated** (in g, NEVER the mass of fuel burned!), c = 4.18 J g⁻¹ K⁻¹; convert q to **kJ** (÷ 1000) and divide by **moles of limiting reactant** (with − sign for exothermic!).",
              "**Standard conditions** - **100 kPa**, **298 K (25 °C)**, 1.0 mol dm⁻³ solutions, all substances in standard states."
            ],
            "exampleHeading": "Worked example: 0.020 mol ethanol heats 200 g water by 30.0 °C",
            "examples": [
              "q = 200 × 4.18 × 30.0 = 25,080 J = 25.08 kJ → Δ_c H = −25.08 / 0.020 = **−1254 kJ mol⁻¹**."
            ]
          }
        ]
      },
      {
        "id": "al-chem-4-1-c2",
        "title": "Hess’s Law & Mean Bond Enthalpies",
        "summary": "Constructing Hess’s Law cycles from ΔfH° or ΔcH° data and evaluating mean bond enthalpies.",
        "bullets": [
          "**Hess’s Law**: the total enthalpy change for a chemical reaction is independent of the route taken, provided initial and final conditions are identical (conservation of energy).",
          "From formation data (arrows UP from elements): ΔrH° = ΣΔfH°(products) − ΣΔfH°(reactants). From combustion data (arrows DOWN to CO₂ + H₂O): ΔrH° = ΣΔcH°(reactants) − ΣΔcH°(products).",
          "Mean bond enthalpy is the average enthalpy required to break 1 mole of a specific covalent bond across a range of gaseous molecules. ΔH ≈ Σ(bonds broken) − Σ(bonds formed).",
          "Bond-enthalpy calculations differ from experimental Hess values because mean bond enthalpies are averages across many different molecular environments and assume all species are gaseous (ignoring enthalpies of vaporisation)."
        ],
        "glossaryPills": [
          {
            "term": "mean bond enthalpy",
            "definition": "The enthalpy change required to break one mole of a given covalent bond in the gaseous state, averaged over a variety of different compounds."
          }
        ],
        "memoryAid": "Formation = Products − Reactants (arrows point UP); Combustion = Reactants − Products (arrows point DOWN); Bonds = Broken − Formed."
      },
      {
        "id": "al-chem-4-1-c3",
        "title": "Hess’s Law Shortcuts (Formation, Combustion & Mean Bond Enthalpies)",
        "summary": "Never flip a sign in a Hess cycle again — three foolproof algebraic routes and why mean bond enthalpies differ from calorimetry.",
        "bullets": [
          "**From Δ_f H° (elements at bottom, arrows UP)** - **Δ_r H° = Σ Δ_f H°(products) − Σ Δ_f H°(reactants)** (remember: Δ_f H° of any element in its standard state = **0**!).",
          "**From Δ_c H° (CO₂ + H₂O at bottom, arrows DOWN)** - **Δ_r H° = Σ Δ_c H°(reactants) − Σ Δ_c H°(products)**.",
          "**From Mean Bond Enthalpies (gases only!)** - **Δ_r H = Σ(bonds BROKEN) − Σ(bonds FORMED)** — approximate because mean bond enthalpies are **averaged across many different molecules** and assume all species are **gaseous**."
        ],
        "subsections": [
          {
            "heading": "Why Calorimetry Values Are Less Exothermic Than Data-Book Values",
            "bullets": [
              "**Three classic lab errors** - (1) **Heat loss to surroundings** (main error); (2) **Incomplete combustion** (soot/CO forms); (3) **Evaporation of volatile alcohol** from wick / non-standard conditions.",
              "**Cooling curve correction** - plot T vs t before and after mixing, and extrapolate back to the exact moment of mixing to correct for heat loss!"
            ],
            "exampleHeading": "Worked check: Memory trick for Hess signs",
            "examples": [
              "**F**ormation = **P − R** (Products minus Reactants); **C**ombustion & **B**onds = **R − P** (Reactants minus Products)!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "Hess’s law",
            "definition": "Total enthalpy change of a reaction is independent of the route taken, provided initial and final conditions remain the same."
          },
          {
            "term": "mean bond enthalpy",
            "definition": "Enthalpy required to break 1 mole of a specific covalent bond in the gaseous state, averaged over a range of compounds."
          }
        ],
        "commonMistake": "In q = mcΔT for spirit-burner combustion, NEVER plug the mass of fuel burned into m — ALWAYS use the mass of WATER being heated!"
      }
    ],
    "keyTerms": [
      {
        "term": "Hess’s Law",
        "definition": "Total enthalpy change of a reaction depends only on initial and final states, independent of the pathway."
      },
      {
        "term": "Standard enthalpy of formation",
        "definition": "Enthalpy change when 1 mole of compound forms from its elements in standard states under 100 kPa and 298 K."
      },
      {
        "term": "Specific heat capacity",
        "definition": "Energy needed to raise 1 g of a substance by 1 K (water c = 4.18 J g⁻¹ K⁻¹)."
      }
    ],
    "checklistPoints": [
      "Write balanced equations for ΔfH° and ΔcH° using fractional stoichiometric coefficients so exactly 1 mole of target species is specified.",
      "Calculate ΔH from spirit burner and solution calorimetry data including extrapolation for heat loss.",
      "Apply Hess’s Law cleanly using formation data, combustion data, and mean bond enthalpies."
    ]
  },
  "al-chem-4-2": {
    "subtopicId": "al-chem-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Born-Haber Cycles, Entropy & Gibbs Free Energy (ΔG = ΔH − TΔS)",
    "readingMinutes": 14,
    "videoTitle": "Gibbs Free energy change 1",
    "youtubeId": "pQXjL3LQ_h4",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "11:18",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Entropy (ΔS) & Feasibility of Reactions",
        "cardId": "al-chem-4-2-c2"
      },
      {
        "time": "2:50",
        "seconds": 170,
        "label": "Gibbs Free Energy Equation: ΔG = ΔH − TΔS",
        "cardId": "al-chem-4-2-c2"
      },
      {
        "time": "6:00",
        "seconds": 360,
        "label": "Units Trap (kJ vs J) & Calculating ΔG",
        "cardId": "al-chem-4-2-c2"
      },
      {
        "time": "8:50",
        "seconds": 530,
        "label": "Temperature Threshold for Feasibility (T = ΔH/ΔS)",
        "cardId": "al-chem-4-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-4-2-c1",
        "title": "Born-Haber Cycles & Perfect Ionic Model vs Covalent Character",
        "summary": "Born-Haber lattice enthalpy cycles, enthalpy of solution, and cation polarisation covalent character.",
        "bullets": [
          "**Lattice enthalpy of formation** (ΔLEH°, always exothermic): 1 mole of solid ionic lattice formed from its gaseous ions (e.g., Na⁺(g) + Cl⁻(g) → NaCl(s)). Born-Haber steps upward: atomisation of metal & non-metal, 1st (+ 2nd) ionisation energies, 1st electron affinity (exothermic), **2nd electron affinity** (ENDOTHERMIC because adding an e⁻ to a negative ion like O⁻ repels!).",
          "**Enthalpy of solution**: ΔsolH° = ΔLEH°(dissociation) + ΣΔhydH°(ions). Smaller, higher-charged ions have more exothermic hydration enthalpies.",
          "Experimental Born-Haber lattice enthalpy is MORE exothermic than the theoretical value (which assumes 100% spherical point ions) whenever a small, highly charged cation (e.g. Ag⁺, Al³⁺, Mg²⁺) polarises a large anion (e.g. I⁻), pulling electron density between them to introduce covalent character."
        ],
        "glossaryPills": [
          {
            "term": "covalent character",
            "definition": "Additional bonding strength in an ionic compound caused by a high-charge-density cation distorting (polarising) the electron cloud of a large anion."
          }
        ],
        "commonMistake": "Don’t forget stoichiometry in Born-Haber cycles! For MgCl₂ you must DOUBLE Cl atomisation enthalpy AND DOUBLE Cl first electron affinity (plus include BOTH 1st and 2nd IE of Mg)."
      },
      {
        "id": "al-chem-4-2-c2",
        "title": "Entropy (ΔS) & Gibbs Free Energy (ΔG = ΔH − TΔS)",
        "summary": "Calculating entropy changes ΔS°, Gibbs free energy ΔG = ΔH − TΔS, and feasibility temperature.",
        "bullets": [
          "Entropy (S, J K⁻¹ mol⁻¹) quantifies the dispersal of energy and disorder across particles: S(gas) ≫ S(liquid) > S(solid). ΔS° = ΣS°(products) − ΣS°(reactants). Reactions producing more moles of gas have strongly positive ΔS.",
          "Gibbs Free Energy equation: **ΔG = ΔH − TΔS**. A reaction is thermodynamically FEASIBLE (**spontaneous**) when ΔG ≤ 0.",
          "CRITICAL UNIT TRAP: ΔH is in kJ mol⁻¹ while ΔS is in J K⁻¹ mol⁻¹ — ALWAYS divide ΔS by 1000 before subtracting TΔS from ΔH! Feasibility crossover temperature (when ΔG = 0): T = ΔH ÷ (ΔS / 1000) in Kelvin.",
          "Even if ΔG < 0 (thermodynamically feasible), a reaction may not visibly proceed at room temperature if its activation energy (Eₐ) is too high (kinetically stable)."
        ],
        "subsections": [
          {
            "heading": "Four thermodynamic feasibility regimes (ΔG = ΔH − TΔS)",
            "bullets": [
              "**ΔH < 0 and ΔS > 0**: Always feasible at every temperature (ΔG always negative).",
              "**ΔH > 0 and ΔS > 0**: Feasible only at **high temperatures** above crossover **T = ΔH ÷ (ΔS / 1000)**.",
              "**ΔH < 0 and ΔS < 0**: Feasible only at **low temperatures** below crossover T."
            ],
            "exampleHeading": "Worked unit-trap example:",
            "examples": [
              "**CaCO₃(s) → CaO(s) + CO₂(g)** — ΔH° = +178 kJ mol⁻¹, ΔS° = +160 J K⁻¹ mol⁻¹ = +0.160 kJ K⁻¹ mol⁻¹ → feasible above **T = 178 / 0.160 = 1113 K**"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "entropy",
            "definition": "Thermodynamic measure of molecular disorder and the number of ways energy quanta can be distributed among particles (units J K⁻¹ mol⁻¹)."
          }
        ],
        "memoryAid": "Four feasibility cases: ΔH<0 & ΔS>0 (Always feasible); ΔH>0 & ΔS<0 (Never feasible); ΔH>0 & ΔS>0 (Feasible at HIGH T); ΔH<0 & ΔS<0 (Feasible at LOW T)."
      },
      {
        "id": "al-chem-4-2-c3",
        "title": "Covalent Character in Ionic Lattices & Gibbs Feasibility Graphs",
        "summary": "Comparing experimental Born-Haber vs theoretical perfect-ionic lattice enthalpies and extracting ΔH and ΔS from ΔG vs T graphs.",
        "bullets": [
          "**Experimental vs Theoretical Lattice Enthalpy** - if experimental |Δ_LE H| (from Born-Haber) is **MUCH LARGER** than the theoretical perfect-ionic model (e.g. AgI), the small high-charge cation **polarises** the large anion’s electron cloud, adding **covalent character**!",
          "**Enthalpy of Solution** - **Δ_sol H = Δ_LE H(dissociation) + Σ Δ_hyd H(ions)** (or −Δ_LE H(formation) + Σ Δ_hyd H).",
          "**Gibbs graph (ΔG = −ΔS · T + ΔH)** - plotting **ΔG (y-axis) against T (x-axis)** gives a straight line with **y-intercept = ΔH** and **gradient = −ΔS**; reaction becomes feasible where **ΔG ≤ 0**, i.e. **T = ΔH / ΔS** (remember to divide ΔS by **1000** to convert J → kJ!)."
        ],
        "subsections": [
          {
            "heading": "Four Feasibility Cases for ΔG = ΔH − TΔS",
            "bullets": [
              "**ΔH < 0, ΔS > 0** - feasible at **ALL temperatures**; **ΔH > 0, ΔS < 0** - **NEVER** feasible.",
              "**ΔH > 0, ΔS > 0** - feasible only at **HIGH T** (T > ΔH/ΔS); **ΔH < 0, ΔS < 0** - feasible only at **LOW T** (T < ΔH/ΔS)."
            ],
            "exampleHeading": "Worked example: Minimum feasible temperature when ΔH = +120 kJ mol⁻¹, ΔS = +150 J K⁻¹ mol⁻¹",
            "examples": [
              "Convert ΔS = 0.150 kJ K⁻¹ mol⁻¹ → T = 120 / 0.150 = **800 K** (527 °C)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "covalent character",
            "definition": "Electron-cloud distortion (polarisation) of a large anion by a small highly charged cation, strengthening an ionic lattice above the perfect-ionic model."
          },
          {
            "term": "Gibbs free energy",
            "definition": "ΔG = ΔH − TΔS; a reaction is thermodynamically feasible when ΔG ≤ 0."
          }
        ],
        "commonMistake": "ALWAYS divide ΔS (given in J K⁻¹ mol⁻¹) by 1000 before subtracting TΔS from ΔH (in kJ mol⁻¹) — this unit mismatch is the #1 A-Level thermodynamics mark-loser!"
      }
    ],
    "keyTerms": [
      {
        "term": "Lattice enthalpy",
        "definition": "Enthalpy change when 1 mole of an ionic solid forms from (or dissociates into) its gaseous ions."
      },
      {
        "term": "Second electron affinity",
        "definition": "Endothermic enthalpy change adding 1 mole of electrons to 1 mole of gaseous 1− ions against electrostatic repulsion."
      },
      {
        "term": "Gibbs free energy (ΔG)",
        "definition": "Thermodynamic feasibility function ΔG = ΔH − TΔS; reaction is feasible when ΔG ≤ 0."
      }
    ],
    "checklistPoints": [
      "Draw and compute complete Born-Haber cycles for Group 1 halides, MgO, and CaCl₂ without missing factor-of-2 multipliers.",
      "Explain why experimental lattice enthalpy exceeds theoretical ionic model predictions for AgI and MgI₂.",
      "Calculate ΔS°, ΔG°, and minimum feasibility temperatures T = ΔH/ΔS while converting J to kJ accurately."
    ]
  },
  "al-chem-5-1": {
    "subtopicId": "al-chem-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "Maxwell-Boltzmann, Rate Equations & Arrhenius Analysis",
    "readingMinutes": 14,
    "videoTitle": "Arrhenius Equation",
    "youtubeId": "3SKgnqGMx9Q",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "11:45",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Rate Equations & Rate Constant k",
        "cardId": "al-chem-5-1-c2"
      },
      {
        "time": "2:55",
        "seconds": 175,
        "label": "The Arrhenius Equation: k = A e^(-Ea/RT)",
        "cardId": "al-chem-5-1-c3"
      },
      {
        "time": "6:20",
        "seconds": 380,
        "label": "Linear Form: ln k = -Ea/RT + ln A",
        "cardId": "al-chem-5-1-c3"
      },
      {
        "time": "9:10",
        "seconds": 550,
        "label": "Finding Ea from Gradient of Arrhenius Plot",
        "cardId": "al-chem-5-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-5-1-c1",
        "title": "Maxwell-Boltzmann Energy Distributions",
        "summary": "Maxwell-Boltzmann kinetic energy curves and how temperature and catalysts shift successful collisions.",
        "diagram": "exothermic-endothermic",
        "bullets": [
          "A **Maxwell-Boltzmann curve** plots number of molecules against kinetic energy: starts at the origin (0, 0), peaks at the most probable energy (Eₘₚ), trails off asymptotically (never touches x-axis), and total area under the curve equals total number of molecules (constant).",
          "Increasing temperature shifts the peak LOWER and to the RIGHT: a vastly larger fraction of molecules have energy E ≥ Eₐ, so the frequency of SUCCESSFUL collisions increases dramatically.",
          "Adding a **catalyst** does NOT shift the curve; instead it provides an alternative pathway with a LOWER activation energy (Eₐ(cat) shifted left), increasing the shaded area of molecules with E ≥ Eₐ."
        ],
        "glossaryPills": [
          {
            "term": "activation energy",
            "definition": "The minimum kinetic energy colliding particles must possess for a collision to result in a chemical reaction."
          }
        ],
        "commonMistake": "When raising temperature on a Maxwell-Boltzmann sketch, make sure the higher-T peak is BOTH further RIGHT AND LOWER so total area stays unchanged!",
        "subsections": [
          {
            "heading": "Determining Reaction Orders & Rate-Determining Step (RDS)",
            "bullets": [
              "**Rate equation** - **Rate = k [A]ᵐ [B]ⁿ** (orders m, n are found ONLY by experiment, NEVER from the balanced equation!).",
              "**Link to mechanism** - every species in the rate equation (with its power as coefficient) MUST appear in or BEFORE the **rate-determining (slowest) step**!"
            ],
            "exampleHeading": "Worked example: Finding units of k when Rate = k[A]²[B]",
            "examples": [
              "Overall order = 3 → units of k = (mol dm⁻³ s⁻¹) / (mol dm⁻³)³ = **mol⁻² dm⁶ s⁻¹**."
            ]
          }
        ]
      },
      {
        "id": "al-chem-5-1-c2",
        "title": "Orders of Reaction, Rate Equations & Rate-Determining Step",
        "summary": "Determining reaction orders, rate constant units, and rate-determining steps from kinetics data.",
        "bullets": [
          "Rate equation: **Rate = k [A]ᵐ [B]ⁿ**, where m and n are experimentally determined orders (NOT directly from the overall stoichiometric equation!), and overall order = m + n.",
          "Order signatures on Rate vs [A] graphs: **0th order** = horizontal line (rate independent of [A]); **1st order** = straight line through origin (constant half-life on [A] vs time graph!); **2nd order** = upward parabola (rate ∝ [A]²).",
          "Rate-determining step (RDS): the slowest step in a multi-step mechanism. ONLY species taking part in or BEFORE the RDS appear in the rate equation, and their order equals the number of molecules/ions of that species involved up to and including the RDS."
        ],
        "glossaryPills": [
          {
            "term": "rate-determining step",
            "definition": "The slowest elementary step in a reaction mechanism, which dictates the overall rate equation and kinetics."
          }
        ],
        "memoryAid": "Rate constant k units shortcut: (mol dm⁻³)^(1 − overall order) s⁻¹. E.g. 2nd order overall → mol⁻¹ dm³ s⁻¹.",
        "subsections": [
          {
            "heading": "Arrhenius Equation Linear Plot (ln k vs 1/T)",
            "bullets": [
              "**ln k = ln A − (E_a / R)(1 / T)** - plot **ln k against 1/T** → straight line with **gradient = −E_a / R**, so **E_a = −gradient × 8.31** (in J mol⁻¹; ÷ 1000 for kJ mol⁻¹!).",
              "**Half-life check for 1st order** - ONLY a **first-order** concentration–time curve has a **CONSTANT half-life t_½**!"
            ],
            "exampleHeading": "Worked example: Gradient of ln k vs 1/T is −6000 K",
            "examples": [
              "E_a = −(−6000) × 8.31 = 49,860 J mol⁻¹ = **49.9 kJ mol⁻¹**."
            ]
          }
        ]
      },
      {
        "id": "al-chem-5-1-c3",
        "title": "The Arrhenius Equation & Graphical Determination of Eₐ",
        "summary": "Linearising the Arrhenius equation k = A·exp(−Ea/RT) to extract Ea from ln k vs 1/T graphs.",
        "bullets": [
          "Arrhenius equation: k = A e^(−Eₐ / RT), where k = rate constant, A = Arrhenius frequency/pre-exponential factor, Eₐ = activation energy (J mol⁻¹), R = 8.31 J K⁻¹ mol⁻¹, T = Kelvin temperature.",
          "Taking natural logarithms linearises the equation into y = mx + c: **ln k = (−Eₐ / R)(1 / T) + ln A**.",
          "Plotting ln k (y-axis) against 1/T (x-axis, in K⁻¹) produces a straight line of negative gradient m = −Eₐ / R, so Eₐ = −m × 8.31 J mol⁻¹ (divide by 1000 for kJ mol⁻¹), and y-intercept = ln A."
        ],
        "glossaryPills": [
          {
            "term": "Arrhenius equation",
            "definition": "Exponential relationship k = A·exp(−Ea/RT) quantifying how the rate constant rises steeply with absolute temperature."
          }
        ],
        "commonMistake": "Always check whether the x-axis of an Arrhenius plot is scaled as (1/T × 10⁻³) K⁻¹ before calculating the gradient — missing the 10⁻³ makes Eₐ wrong by a factor of 1,000!"
      }
    ],
    "keyTerms": [
      {
        "term": "Order of reaction",
        "definition": "The power to which a reactant concentration is raised in the experimentally determined rate equation."
      },
      {
        "term": "Rate constant (k)",
        "definition": "Temperature-dependent proportionality constant in a rate equation; rises exponentially with T."
      },
      {
        "term": "Half-life (t₁/₂)",
        "definition": "Time taken for reactant concentration to halve; strictly constant for first-order reactions."
      }
    ],
    "checklistPoints": [
      "Sketch Maxwell-Boltzmann curves at two temperatures and mark Eₐ with and without a catalyst.",
      "Deduce orders, rate constants (with units), and consistent multi-step mechanisms from initial-rates tables.",
      "Calculate Eₐ (in kJ mol⁻¹) and A from an Arrhenius ln k vs 1/T graph."
    ]
  },
  "al-chem-6-1": {
    "subtopicId": "al-chem-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Dynamic Equilibria, Equilibrium Constants Kc & Kp",
    "readingMinutes": 13,
    "videoTitle": "AQA 1.6 Equilibria REVISION",
    "youtubeId": "mHnQypDGBzQ",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "25:29",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Dynamic Equilibrium & Le Chatelier Principle",
        "cardId": "al-chem-6-1-c1"
      },
      {
        "time": "7:00",
        "seconds": 420,
        "label": "Writing Kc Expressions & Units",
        "cardId": "al-chem-6-1-c1"
      },
      {
        "time": "14:40",
        "seconds": 880,
        "label": "ICE Table Moles Calculations for Kc",
        "cardId": "al-chem-6-1-c1"
      },
      {
        "time": "20:40",
        "seconds": 1240,
        "label": "Mole Fractions, Partial Pressures & Kp",
        "cardId": "al-chem-6-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-6-1-c1",
        "title": "Equilibrium Constant Kc & ICE Tables",
        "summary": "Writing homogeneous Kc expressions and solving equilibrium concentrations via ICE tables.",
        "bullets": [
          "For homogeneous equilibrium aA + bB ⇌ cC + dD: Kc = ([C]ᶜ [D]ᵈ) ÷ ([A]ᵃ [B]ᵇ). Heterogeneous equilibria omit pure solids and pure liquids from Kc/Kp.",
          "**ICE table method**: list Initial moles, Change in moles (using stoichiometric ratio), and Equilibrium moles; THEN divide every equilibrium mole count by total volume V (in dm³) to convert into equilibrium concentrations [X] before substituting into Kc.",
          "Note: if total moles on LHS equals total moles on RHS (e.g. esterification), volume V cancels out cleanly so moles can be substituted directly and Kc has no units."
        ],
        "glossaryPills": [
          {
            "term": "homogeneous equilibrium",
            "definition": "A reversible reaction at equilibrium in which all reactants and products exist in the same physical phase."
          }
        ],
        "commonMistake": "NEVER substitute equilibrium MOLES directly into Kc when total reactant and product stoichiometric coefficients differ — always divide by volume in dm³ first!",
        "subsections": [
          {
            "heading": "ICE Table Method for Kc & Mole Fractions for Kp",
            "bullets": [
              "**ICE table for Kc** - Initial moles → Change (using stoichiometry!) → Equilibrium moles → divide by **total volume V** (in dm³) to get concentrations (note: if equal moles of gas on both sides, V cancels!).",
              "**Partial pressure for Kp** - **mole fraction x_A = n_A / n_total**; **partial pressure p_A = x_A × P_total**; NEVER use square brackets `[ ]` in a Kp expression — use round brackets `(p_A)`!"
            ],
            "exampleHeading": "Worked example: Kp expression for N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
            "examples": [
              "Kp = p(NH₃)² / [p(N₂) × p(H₂)³], units = **kPa⁻²** (or Pa⁻²)."
            ]
          }
        ]
      },
      {
        "id": "al-chem-6-1-c2",
        "title": "Partial Pressures, Kp & Temperature Dependence",
        "summary": "Mole fractions, partial pressures in Kp, and why only temperature shifts equilibrium constants.",
        "bullets": [
          "For gaseous equilibria: **Mole fraction** x(A) = n(A) ÷ n(total gas moles). Partial pressure p(A) = x(A) × P(total). Sum of all mole fractions = 1; sum of all partial pressures = P(total).",
          "Kp uses rounded parentheses (NEVER square brackets!): Kp = (p(C)ᶜ · p(D)ᵈ) ÷ (p(A)ᵃ · p(B)ᵇ), with pressure units such as kPa⁻¹ or Pa².",
          "CRITICAL RULE: Kc and Kp change **ONLY with TEMPERATURE**! Raising temperature shifts equilibrium in the ENDOTHERMIC direction (if forward is exothermic, Kc/Kp DECREASES; if forward is endothermic, Kc/Kp INCREASES).",
          "Changing pressure, concentration, or adding a **catalyst** leaves Kc and Kp UNCHANGED: when pressure doubles, the quotient temporarily shifts away from Kp, forcing equilibrium position to move towards fewer gas moles until the ratio equals the exact same Kp again."
        ],
        "glossaryPills": [
          {
            "term": "partial pressure",
            "definition": "The pressure that an individual gas in a mixture would exert if it alone occupied the entire container at the same temperature."
          }
        ],
        "memoryAid": "Square brackets [A] are ONLY for concentration (Kc); round brackets p(A) are ONLY for partial pressure (Kp)."
      },
      {
        "id": "al-chem-6-1-c3",
        "title": "Why ONLY Temperature Changes Kc and Kp (Exam Gold!)",
        "summary": "Distinguishing equilibrium shifts caused by pressure/concentration/catalysts from genuine changes in Kc/Kp.",
        "bullets": [
          "**Temperature ONLY changes Kc/Kp** - for an **exothermic** forward reaction (ΔH < 0), raising T shifts equilibrium LEFT and **DECREASES Kc/Kp**; for an **endothermic** forward reaction (ΔH > 0), raising T shifts RIGHT and **INCREASES Kc/Kp**.",
          "**Pressure & Concentration changes** - Kc and Kp stay **CONSTANT**! If pressure doubles, the quotient Q temporarily mismatches Kp, so the equilibrium shifts to restore the exact ratio Kp!",
          "**Catalysts** - speed up forward and reverse reactions **equally**, reaching equilibrium **faster** with **ZERO effect on equilibrium yield or Kc/Kp**."
        ],
        "subsections": [
          {
            "heading": "Heterogeneous Equilibria Rule",
            "bullets": [
              "**Omit pure solids and pure liquids** from heterogeneous Kc and Kp expressions (include ONLY gases in Kp, and gases/aqueous species in Kc!)."
            ],
            "exampleHeading": "Worked check: CaCO₃(s) ⇌ CaO(s) + CO₂(g)",
            "examples": [
              "Kp = **p(CO₂)** (solids omitted!)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "mole fraction",
            "definition": "Ratio of moles of one gas to total moles of all gases in a mixture (x_A = n_A / n_total; all mole fractions sum to 1)."
          },
          {
            "term": "partial pressure",
            "definition": "Pressure exerted by an individual gas in a mixture: p_A = mole fraction × total pressure."
          }
        ],
        "commonMistake": "NEVER write square brackets `[p(CO₂)]` in a Kp expression — square brackets strictly mean concentration (mol dm⁻³) and cost a mark in Kp questions!"
      }
    ],
    "keyTerms": [
      {
        "term": "Dynamic equilibrium",
        "definition": "Closed-system state where forward and reverse reaction rates are equal and macroscopic concentrations stay constant."
      },
      {
        "term": "Mole fraction (x)",
        "definition": "Moles of one gaseous component divided by total moles of all gases in the equilibrium mixture."
      },
      {
        "term": "Kp",
        "definition": "Gas-phase equilibrium constant expressed as the ratio of equilibrium partial pressures raised to stoichiometric powers."
      }
    ],
    "checklistPoints": [
      "Solve multi-step ICE table Kc problems including volume conversions and unit deductions.",
      "Calculate mole fractions, partial pressures, Kp values, and Kp units without using square brackets.",
      "Explain quantitatively why altering pressure changes equilibrium yield while keeping Kp constant, whereas temperature changes Kp itself."
    ]
  },
  "al-chem-6-2": {
    "subtopicId": "al-chem-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Brønsted-Lowry Acids, Ka, Kw, Buffers & pH Curves",
    "readingMinutes": 15,
    "videoTitle": "Acidic and Basic Buffers",
    "youtubeId": "4wSZkM50CBw",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "12:37",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "What Is a Buffer Solution?",
        "cardId": "al-chem-6-2-c2"
      },
      {
        "time": "3:15",
        "seconds": 195,
        "label": "Making an Acidic Buffer (Weak Acid + Salt)",
        "cardId": "al-chem-6-2-c2"
      },
      {
        "time": "6:55",
        "seconds": 415,
        "label": "Equilibrium Shift When Acid or Alkali Added",
        "cardId": "al-chem-6-2-c2"
      },
      {
        "time": "9:55",
        "seconds": 595,
        "label": "Basic Buffers & Blood Buffer System",
        "cardId": "al-chem-6-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-6-2-c1",
        "title": "Strong Acids, Strong Bases (Kw) & Weak Acids (Ka)",
        "summary": "Brønsted-Lowry proton transfer, strong-base Kw calculations, and weak-acid Ka/pKa equilibria.",
        "bullets": [
          "**Brønsted-Lowry acid** = proton (H⁺) donor; base = proton acceptor. **pH = −log₁₀[H⁺]** and [H⁺] = 10^(−pH). Strong monoprotic acids (HCl, HNO₃) fully dissociate ([H⁺] = [HA]); diprotic H₂SO₄ gives [H⁺] ≈ 2[H₂SO₄].",
          "Ionic product of water: **Kw = [H⁺][OH⁻]** = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K. For a strong base (e.g. NaOH), find [H⁺] = Kw ÷ [OH⁻], then **pH = −log₁₀[H⁺]**. Because water dissociation is endothermic, Kw increases with temperature, so pure water remains NEUTRAL ([H⁺] = [OH⁻]) even though its pH drops below 7 when heated!",
          "Weak acid dissociation: Ka = ([H⁺][A⁻]) ÷ [HA]; pKa = −log₁₀(Ka). For a pure weak acid in water, assume [H⁺] = [A⁻] and [HA]eq ≈ [HA]initial, giving [H⁺] = √(Ka × [HA])."
        ],
        "glossaryPills": [
          {
            "term": "ionic product of water",
            "definition": "Temperature-dependent equilibrium constant Kw = [H⁺][OH⁻] governing water self-ionisation (1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K)."
          }
        ],
        "commonMistake": "Pure water at 50°C has pH ~6.63 — it is STILL NEUTRAL, NOT acidic, because [H⁺] still exactly equals [OH⁻]!",
        "subsections": [
          {
            "heading": "Weak Acid Ka & Pure Water Kw (Temperature Trap!)",
            "bullets": [
              "**Weak acid approximation** - for pure HA(aq), [H⁺] = [A⁻] and [HA]_eq ≈ [HA]_initial ⇒ **K_a = [H⁺]² / [HA]**, so **[H⁺] = √(K_a × [HA])**.",
              "**Pure water at higher T** - dissociation H₂O ⇌ H⁺ + OH⁻ is **ENDOTHERMIC**, so raising T increases K_w, raising [H⁺] → **pH drops below 7**, yet water stays **NEUTRAL** because **[H⁺] = [OH⁻]**!"
            ],
            "exampleHeading": "Worked example: pH of 0.10 mol dm⁻³ ethanoic acid (K_a = 1.75 × 10⁻⁵ mol dm⁻³)",
            "examples": [
              "[H⁺] = √(1.75×10⁻⁵ × 0.10) = 1.32 × 10⁻³ mol dm⁻³ → pH = −log₁₀(1.32×10⁻³) = **2.88**."
            ]
          }
        ]
      },
      {
        "id": "al-chem-6-2-c2",
        "title": "Acidic Buffer Solutions & Buffer Calculations",
        "summary": "How acidic buffers absorb added H⁺/OH⁻ and solving buffer pH without the pure-acid shortcut.",
        "bullets": [
          "An **acidic buffer** resists small pH changes upon adding small amounts of acid or alkali; it consists of a weak acid (HA) and a large reservoir of its conjugate base salt (e.g., CH₃COOH + CH₃COONa, or excess weak acid partially neutralised by NaOH).",
          "How it works (HA ⇌ H⁺ + A⁻): adding H⁺ shifts equilibrium LEFT as excess A⁻ reacts with added H⁺ to form undissociated HA; adding OH⁻ neutralises H⁺ to H₂O, shifting equilibrium RIGHT as excess HA dissociates to replenish H⁺.",
          "Buffer calculation: NEVER assume [H⁺] = [A⁻] in a buffer! Instead use [H⁺] = Ka × ([HA] ÷ [A⁻]) = Ka × (n(HA) ÷ n(A⁻)) (volumes cancel when mixed in one flask!). At the **half-equivalence point**, [HA] = [A⁻], so [H⁺] = Ka and pH = pKa."
        ],
        "glossaryPills": [
          {
            "term": "conjugate base",
            "definition": "The species (A⁻) remaining after a Brønsted-Lowry acid (HA) has donated a proton."
          }
        ],
        "memoryAid": "Buffer golden rule: Pure weak acid → [H⁺]² = Ka[HA]. Buffer (weak acid + salt) → [H⁺] = Ka × n(HA)/n(A⁻)!",
        "subsections": [
          {
            "heading": "Buffer Solutions & Half-Equivalence Point (pH = pK_a)",
            "bullets": [
              "**Acidic buffer (weak acid HA + salt A⁻)** - **[H⁺] = K_a × ([HA] / [A⁻])** (or **pH = pK_a + log₁₀([A⁻]/[HA])**); because volumes are identical in the same flask, you can use **moles(HA) / moles(A⁻)** directly!",
              "**Indicator choice** - pick an indicator whose colour-change **pH range lies entirely within the vertical equivalence jump** (methyl orange 3.1–4.4 for strong acid–weak base; phenolphthalein 8.3–10.0 for weak acid–strong base; EITHER for strong–strong; NEITHER for weak–weak!)."
            ],
            "exampleHeading": "Worked check: Half-neutralisation shortcut",
            "examples": [
              "When exactly half the weak acid is neutralised by NaOH, [HA] = [A⁻] ⇒ [H⁺] = K_a ⇒ **pH = pK_a**!"
            ]
          }
        ]
      },
      {
        "id": "al-chem-6-2-c3",
        "title": "pH Titration Curves & Indicator Choice",
        "summary": "Interpreting four acid-base titration curves and choosing indicators inside the vertical jump.",
        "bullets": [
          "Four classic curve profiles: Strong acid + Strong base (steep vertical jump pH 3–11); Weak acid + Strong base (buffer region before the equivalence point, jump pH 7–11); Strong acid + Weak base (jump pH 3–7); Weak acid + Weak base (no sharp vertical jump — use a pH meter instead of an indicator).",
          "An acid-base indicator (HIn ⇌ H⁺ + In⁻) is suitable ONLY if its ENTIRE colour-change pH range lies completely within the steep vertical section of the titration curve (e.g. phenolphthalein 8.3–10.0 for weak acid + strong base; methyl orange 3.1–4.4 for strong acid + weak base)."
        ],
        "glossaryPills": [
          {
            "term": "equivalence point",
            "definition": "The exact volume of titrant added at which stoichiometrically equivalent moles of acid and base have completely neutralised each other."
          }
        ],
        "commonMistake": "When calculating pH of a weak acid + strong base mixture, ALWAYS check which reagent is in excess: excess weak acid forms a BUFFER; excess strong base requires Kw with remaining [OH⁻]!"
      }
    ],
    "keyTerms": [
      {
        "term": "Brønsted-Lowry acid",
        "definition": "Any chemical species that acts as a proton (H⁺) donor."
      },
      {
        "term": "Ka",
        "definition": "Acid dissociation constant measuring weak acid strength: Ka = [H⁺][A⁻] ÷ [HA]."
      },
      {
        "term": "Buffer solution",
        "definition": "Mixture of weak acid and conjugate base (or weak base and conjugate acid) resisting pH change upon small additions of acid or alkali."
      }
    ],
    "checklistPoints": [
      "Calculate pH for strong acids, strong bases via Kw, pure weak acids via Ka, and neutralisation mixtures.",
      "Explain quantitatively and qualitatively how acidic buffers absorb added H⁺ and OH⁻ ions.",
      "Read pKa directly from the half-equivalence point of a weak acid–strong base curve and justify indicator choice."
    ]
  },
  "al-chem-7-1": {
    "subtopicId": "al-chem-7-1",
    "subtopicCode": "7.1",
    "subtopicTitle": "Period 3 Oxides, Group 2 & Group 7 Halogens/Halides",
    "readingMinutes": 13,
    "videoTitle": "AQA 2.3 Group 7, the halogens REVISION",
    "youtubeId": "JuU7U8UggKs",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "28:28",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Group 7 Physical Trends & Oxidising Ability",
        "cardId": "al-chem-7-1-c2"
      },
      {
        "time": "7:30",
        "seconds": 450,
        "label": "Halogen Displacement Reactions",
        "cardId": "al-chem-7-1-c2"
      },
      {
        "time": "15:20",
        "seconds": 920,
        "label": "Halide Ions + Concentrated H2SO4 (Redox)",
        "cardId": "al-chem-7-1-c2"
      },
      {
        "time": "23:00",
        "seconds": 1380,
        "label": "Silver Nitrate Tests & Disproportionation of Chlorine",
        "cardId": "al-chem-7-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-7-1-c1",
        "title": "Period 3 Oxides & Group 2 Trends",
        "summary": "Period 3 oxide bonding and aqueous pH alongside opposite Group 2 hydroxide/sulfate solubilities.",
        "bullets": [
          "**Period 3 oxides** shift from giant ionic lattices (Na₂O → pH 13–14 NaOH; MgO → pH 9 Mg(OH)₂; amphoteric Al₂O₃ insoluble with partial covalent character reacting with both HCl and NaOH) to giant covalent macromolecule (SiO₂ insoluble, acidic reacting with hot conc. NaOH) to simple molecular acidic oxides (P₄O₁₀ → H₃PO₄ pH ~1; SO₂ → H₂SO₃ pH ~3; SO₃ → H₂SO₄ pH ~0).",
          "Group 2 (Mg → Ba): atomic radius increases, IE₁ decreases, reactivity with water increases (Mg slow with cold water, fast with steam → MgO + H₂; Ba vigorous → Ba(OH)₂ + H₂).",
          "Opposite Group 2 solubility trends: **Hydroxides become MORE soluble** down the group (Mg(OH)₂ sparingly soluble antacid; Ca(OH)₂ limewater; Ba(OH)₂ soluble); **Sulfates become LESS soluble** down the group (MgSO₄ soluble; BaSO₄ insoluble white precipitate — used in acidified BaCl₂ sulfate test and medical X-ray barium meals)."
        ],
        "glossaryPills": [
          {
            "term": "amphoteric",
            "definition": "Describing an oxide or hydroxide (such as Al₂O₃) that reacts chemically as both an acid and a base."
          }
        ],
        "memoryAid": "Group 2 solubility: Hydroxides go UP (more soluble down group); Sulfates Sink (less soluble down group → BaSO₄ precipitates!).",
        "subsections": [
          {
            "heading": "Period 3 Oxides Acid–Base Character (Na₂O to SO₃)",
            "bullets": [
              "**Basic ionic oxides** - Na₂O (pH 13–14) and MgO (pH ~9, sparingly soluble) react with acids to form salt + water.",
              "**Amphoteric Al₂O₃** - insoluble in water (pH 7), reacts with BOTH acids (→ Al³⁺) and hot strong alkalis (→ [Al(OH)₄]⁻).",
              "**Acidic covalent oxides** - SiO₂ (giant covalent, insoluble, reacts with hot NaOH → Na₂SiO₃); **P₄O₁₀** → H₃PO₄ (pH 1–2); **SO₂** → H₂SO₃ (pH 2–3); **SO₃** → H₂SO₄ (pH 0–1)."
            ],
            "exampleHeading": "Worked example: Reducing power of halide ions with conc. H₂SO₄",
            "examples": [
              "**Cl⁻** (acid–base only: steamy HCl); **Br⁻** (reduces S(+6) → **SO₂** + brown Br₂); **I⁻** (strongest reducing agent: reduces S(+6) → SO₂ → yellow **S** → rotten-egg **H₂S** + purple I₂!)."
            ]
          }
        ]
      },
      {
        "id": "al-chem-7-1-c2",
        "title": "Group 7 Halogens, Halide Reducing Power & Disproportionation",
        "summary": "Halogen oxidising power, halide redox with conc. H₂SO₄, AgNO₃/NH₃ tests, and Cl₂ disproportionation.",
        "bullets": [
          "Halogen **oxidising power DECREASES** down Group 7 (F₂ > Cl₂ > Br₂ > I₂) as atomic radius and shielding increase; halide ion **REDUCING power INCREASES** down Group 7 (I⁻ > Br⁻ > Cl⁻ > F⁻) as outer electrons are further from the nucleus and lost more easily.",
          "Solid sodium halides + conc. H₂SO₄: NaCl gives ONLY acid-base steamy HCl fumes (Cl⁻ too weak a reducing agent). NaBr gives HBr plus redox brown Br₂ vapour & choking SO₂ (S reduced +6 → +4). NaI reduces H₂SO₄ all the way to SO₂ (+4), yellow solid S (0), AND rotten-egg H₂S (−2) alongside purple I₂ vapour/black solid.",
          "Halide identification with acidified AgNO₃ (dilute HNO₃ removes interfering CO₃²⁻/OH⁻): **AgCl** = white ppt soluble in dilute NH₃; **AgBr** = cream ppt soluble in conc. NH₃; **AgI** = yellow ppt insoluble even in conc. NH₃.",
          "Chlorine disproportionation: Cl₂ + H₂O ⇌ HClO + HCl (0 → +1 and −1, sterilises drinking water); cold aqueous NaOH gives bleach: Cl₂ + 2NaOH → NaClO + NaCl + H₂O."
        ],
        "glossaryPills": [
          {
            "term": "disproportionation",
            "definition": "A redox reaction in which the same element is simultaneously oxidised and reduced into two different oxidation states."
          }
        ],
        "commonMistake": "NEVER acidify AgNO₃ with HCl when testing for halide ions — HCl adds Cl⁻ ions and creates a false-positive white AgCl precipitate! Always use dilute HNO₃."
      },
      {
        "id": "al-chem-7-1-c3",
        "title": "Group 2 Solubility Trends & Chlorine Disproportionation",
        "summary": "The opposing hydroxide/sulfate solubility rules down Group 2 and halogen disproportionation in water and cold NaOH.",
        "bullets": [
          "**Group 2 solubility rules (OPPOSITE trends!)** - **Hydroxides become MORE soluble down Group 2** (Mg(OH)₂ sparingly soluble indigestion antacid → Ba(OH)₂ strongly alkaline); **Sulfates become LESS soluble down Group 2** (MgSO₄ soluble → **BaSO₄ insoluble** white ppt used in barium meals and acidified BaCl₂ sulfate test!).",
          "**Chlorine disproportionation** - in water: **Cl₂ + H₂O ⇌ HCl + HClO** (Cl goes 0 → −1 and +1; kills bacteria); in cold dilute NaOH: **Cl₂ + 2NaOH → NaCl + NaClO + H₂O** (household bleach!).",
          "**Silver nitrate + ammonia halide test** - acidify with **HNO₃** (removes CO₃²⁻) + AgNO₃: **AgCl** (white ppt, dissolves in **dilute NH₃**), **AgBr** (cream ppt, dissolves in **conc. NH₃** only), **AgI** (yellow ppt, **insoluble** in conc. NH₃)."
        ],
        "subsections": [
          {
            "heading": "Why Reducing Power Increases Down Group 7 (Cl⁻ < Br⁻ < I⁻)",
            "bullets": [
              "**Iodide ion (I⁻)** is the LARGEST halide ion with the most shielding → weakest nuclear attraction for its outer electron → **loses an electron most easily** (strongest reducing agent)!"
            ],
            "exampleHeading": "Worked check: Half-equation for H₂SO₄ → H₂S",
            "examples": [
              "H₂SO₄ + 8H⁺ + 8e⁻ → H₂S + 4H₂O (combine with 8I⁻ → 4I₂ + 8e⁻)!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "amphoteric",
            "definition": "Substance (such as Al₂O₃) capable of reacting chemically as both an acid and a base."
          },
          {
            "term": "disproportionation",
            "definition": "Redox reaction in which the exact same element is simultaneously both oxidised and reduced (e.g. Cl₂ → Cl⁻ + ClO⁻)."
          }
        ],
        "commonMistake": "In the halide test with AgNO₃, ALWAYS acidify with dilute NITRIC acid (HNO₃) — NEVER HCl (which introduces Cl⁻ ions and creates a false white AgCl precipitate)!"
      }
    ],
    "keyTerms": [
      {
        "term": "Amphoteric oxide",
        "definition": "Oxide such as Al₂O₃ capable of reacting with both acids and alkalis to produce salts."
      },
      {
        "term": "Reducing agent",
        "definition": "Electron donor species that reduces another substance while itself being oxidised (I⁻ is strongest halide reducer)."
      },
      {
        "term": "Disproportionation",
        "definition": "Simultaneous oxidation and reduction of a single element (e.g. Cl₂ in water or NaOH)."
      }
    ],
    "checklistPoints": [
      "Write balanced equations for all Period 3 oxides reacting with water, acids, and alkalis (including amphoteric Al₂O₃).",
      "Recall Group 2 hydroxide vs sulfate solubility trends and the barium sulfate test.",
      "Write full redox half-equations for NaBr and NaI reacting with conc. H₂SO₄ and distinguish AgCl/AgBr/AgI using dilute and concentrated NH₃."
    ]
  },
  "al-chem-7-2": {
    "subtopicId": "al-chem-7-2",
    "subtopicCode": "7.2",
    "subtopicTitle": "Transition Metals, Complex Ions, Chelate Effect & Catalysis",
    "readingMinutes": 14,
    "videoTitle": "Introduction to transition metals",
    "youtubeId": "u2gOKRYZFGw",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "11:32",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "d-Block vs Transition Metal Definition",
        "cardId": "al-chem-7-2-c1"
      },
      {
        "time": "2:55",
        "seconds": 175,
        "label": "Electron Configurations (Cr and Cu Exceptions)",
        "cardId": "al-chem-7-2-c1"
      },
      {
        "time": "6:15",
        "seconds": 375,
        "label": "Forming Transition Metal Ions (4s Lost First)",
        "cardId": "al-chem-7-2-c1"
      },
      {
        "time": "9:00",
        "seconds": 540,
        "label": "Variable Oxidation States, Catalysts & Complex Ions",
        "cardId": "al-chem-7-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-7-2-c1",
        "title": "Complex Ions, Ligands, Stereoisomerism & Colour",
        "summary": "Multidentate ligands, octahedral/square-planar isomerism, and d-orbital splitting colour origin.",
        "bullets": [
          "A **transition metal** forms at least one stable ion with an INCOMPLETELY FILLED d-subshell (excluding Sc³⁺ [3d⁰] and Zn²⁺ [3d¹⁰]). A ligand is an ion or molecule with a lone pair that forms a coordinate bond to a central metal ion: monodentate (H₂O, NH₃, Cl⁻), bidentate (ethane-1,2-diamine, C₂O₄²⁻), hexadentate (EDTA⁴⁻).",
          "Geometries & isomerism: coordination number 6 = octahedral (e.g. [Cu(H₂O)₆]²⁺); 4 = tetrahedral ([CuCl₄]²⁻ with large Cl⁻ ligands) or square planar (cisplatin [Pt(NH₃)₂Cl₂] — anti-cancer drug binding DNA guanines); 2 = linear ([Ag(NH₃)₂]⁺ Tollens’). Octahedral complexes with 3 bidentate ligands show optical isomerism.",
          "Origin of colour: ligands split the five degenerate **d-orbitals** into lower and higher energy levels separated by ΔE. Electrons absorb a specific visible photon (**ΔE = hν = hc / λ**) to jump from ground to excited d-orbitals; the COMPLEMENTARY colour is transmitted. Changing ligand, oxidation state, or coordination number alters ΔE and shifts colour."
        ],
        "glossaryPills": [
          {
            "term": "ligand",
            "definition": "A molecule or anion containing at least one lone pair of electrons that donates a coordinate bond to a central transition metal ion."
          },
          {
            "term": "cisplatin",
            "definition": "Square-planar platinum(II) complex cis-[Pt(NH₃)₂Cl₂] that cross-links cancer cell DNA strands to inhibit replication."
          }
        ],
        "commonMistake": "Remember why Sc³⁺ (3d⁰) and Cu⁺/Zn²⁺ (3d¹⁰) complexes are COLOURLESS: there are either no d-electrons to excite or no vacant higher-energy d-orbitals for them to jump into!",
        "subsections": [
          {
            "heading": "Origin of Colour (ΔE = hf = hc/λ) & Ligand Substitution",
            "bullets": [
              "**Why transition metal complexes are coloured** - ligands split the 3d sub-shell into two energy levels separated by **ΔE**; visible light of exact frequency **f = ΔE / h** is **absorbed** to promote a d-electron (**d–d transition**), and the **complementary colour** is transmitted! (d⁰ like Sc³⁺ and d¹⁰ like Cu⁺/Zn²⁺ are **colourless**!).",
              "**Changes in colour** - changing the **ligand**, **coordination number**, or **oxidation state** alters ΔE, shifting the absorbed wavelength λ."
            ],
            "exampleHeading": "Worked example: The Chelate Effect (Entropy-Driven!)",
            "examples": [
              "[Cu(H₂O)₆]²⁺ + 3 en → [Cu(en)₃]²⁺ + 6 H₂O: **4 molecules → 7 molecules** ⇒ huge **+ΔS** (ΔH ≈ 0 because similar Cu–O/Cu–N bonds) ⇒ **ΔG < 0**!"
            ]
          }
        ]
      },
      {
        "id": "al-chem-7-2-c2",
        "title": "Chelate Effect, Metal-Aqua Acidity & Catalysis",
        "summary": "Entropy-driven chelate effect, acidic 3+ metal-aqua ions, and heterogeneous/homogeneous catalysis.",
        "bullets": [
          "Chelate effect: replacing monodentate ligands (e.g. 6 H₂O) with multidentate ligands (e.g. 1 EDTA⁴⁻ or 3 en) produces a large INCREASE in total number of independent particles in solution (e.g. 2 → 7 species), making ΔS strongly POSITIVE and **ΔG = ΔH − TΔS** strongly negative.",
          "**Metal-aqua acidity**: [M(H₂O)₆]³⁺ ions (Fe³⁺, Al³⁺) are far more acidic than [M(H₂O)₆]²⁺ (Fe²⁺, Cu²⁺) because the 3+ ion is smaller with higher charge density, polarising coordinated O–H bonds strongly so H⁺ dissociates readily (even reacting with CO₃²⁻ to fizz CO₂!).",
          "Catalysis: **Heterogeneous catalysts** (solid V₂O₅ in Contact Process; Fe in Haber Process) adsorb reactants onto active sites, weakening reactant bonds and lowering Eₐ (susceptible to active-site poisoning). **Homogeneous catalysts** (Fe²⁺/Fe³⁺ in S₂O₈²⁻ + 2I⁻; Mn²⁺ autocatalysis of MnO₄⁻ + C₂O₄²⁻) cycle between variable oxidation states to bypass high-repulsion steps between two negative ions."
        ],
        "glossaryPills": [
          {
            "term": "chelate effect",
            "definition": "Thermodynamic stability gain when multidentate ligands displace monodentate ligands, driven primarily by a large positive entropy increase (ΔS > 0)."
          },
          {
            "term": "autocatalysis",
            "definition": "Reaction in which one of the reaction products (such as Mn²⁺ in manganate-ethanedioate titration) acts as a catalyst, accelerating the reaction rate over time."
          }
        ],
        "memoryAid": "Chelate effect = Entropy engine (more free molecules released → ΔS huge & positive → ΔG very negative)."
      },
      {
        "id": "al-chem-7-2-c3",
        "title": "Heterogeneous vs Homogeneous Catalysis & Autocatalysis",
        "summary": "How V₂O₅, Fe, Fe²⁺, and Mn²⁺ speed up industrial and aqueous reactions via variable oxidation states.",
        "bullets": [
          "**Heterogeneous catalysis (solid catalyst, gas/aq reactants)** - e.g. **Fe** in Haber process, **V₂O₅** in Contact process (SO₂ + V₂O₅ → SO₃ + V₂O₄; 2V₂O₄ + O₂ → 2V₂O₅): reactants **adsorb** onto active sites, bonds weaken, reaction occurs, products **desorb** (poisoning by S/Pb blocks active sites!).",
          "**Homogeneous catalysis (same phase)** - **Fe²⁺** catalyses **S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂** (uncatalysed is slow because two negative ions repel!): (1) S₂O₈²⁻ + 2Fe²⁺ → 2SO₄²⁻ + 2Fe³⁺; (2) 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂.",
          "**Autocatalysis (Mn²⁺ in MnO₄⁻ + C₂O₄²⁻)** - starts slowly (two negative ions repel), then speeds up dramatically once **Mn²⁺ product** forms and catalyses its own reaction via Mn³⁺ intermediate!"
        ],
        "subsections": [
          {
            "heading": "Key Aqueous Transition Metal Colours & Amphoteric Precipitates",
            "bullets": [
              "**[Fe(H₂O)₆]²⁺** (pale green → green ppt Fe(OH)₂); **[Fe(H₂O)₆]³⁺** (yellow/violet → brown ppt Fe(OH)₃); **[Cu(H₂O)₆]²⁺** (blue → blue ppt → deep blue [Cu(NH₃)₄(H₂O)₂]²⁺ in excess NH₃).",
              "**[Al(H₂O)₆]³⁺** - white ppt Al(OH)₃ dissolves in excess **NaOH** (amphoteric → [Al(OH)₄]⁻) but NOT in excess NH₃."
            ],
            "exampleHeading": "Worked check: Why is [Fe(H₂O)₆]³⁺ more acidic than [Fe(H₂O)₆]²⁺?",
            "examples": [
              "Fe³⁺ has higher charge and smaller radius (higher **charge density**) → polarises coordinated O–H bonds more strongly → releases H⁺ more easily!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "chelate effect",
            "definition": "Greater thermodynamic stability of complexes with multidentate ligands over monodentate ones, driven by a large positive entropy change (+ΔS)."
          },
          {
            "term": "autocatalysis",
            "definition": "Catalysis in which one of the reaction products (such as Mn²⁺) acts as the catalyst, causing the rate to accelerate over time."
          }
        ],
        "commonMistake": "When explaining why Cu⁺ or Zn²⁺ complexes are colourless, state explicitly that they have a **COMPLETELY FULL 3d¹⁰ sub-shell**, so NO d–d electron transitions can occur!"
      }
    ],
    "keyTerms": [
      {
        "term": "Coordination number",
        "definition": "Total number of coordinate (dative) bonds formed between ligands and the central transition metal ion."
      },
      {
        "term": "Multidentate ligand",
        "definition": "Ligand capable of forming two or more coordinate bonds simultaneously to the same central metal ion (e.g. EDTA⁴⁻)."
      },
      {
        "term": "Colorimetry",
        "definition": "Analytical method measuring visible light absorbance at a complementary filter wavelength to determine transition metal ion concentration."
      }
    ],
    "checklistPoints": [
      "Explain why complex ions are coloured using ΔE = hc/λ and state three factors that alter ΔE.",
      "Justify the chelate effect thermodynamically using particle count, ΔS, and ΔG = ΔH − TΔS.",
      "Write balanced equations for aqueous [Fe(H₂O)₆]²⁺, [Fe(H₂O)₆]³⁺, [Cu(H₂O)₆]²⁺, and [Al(H₂O)₆]³⁺ with OH⁻, NH₃, and CO₃²⁻, and explain homogeneous Fe²⁺ catalysis."
    ]
  },
  "al-chem-8-1": {
    "subtopicId": "al-chem-8-1",
    "subtopicCode": "8.1",
    "subtopicTitle": "Free Radical Substitution, Nucleophilic Substitution & Electrophilic Addition",
    "readingMinutes": 14,
    "videoTitle": "Electrophilic Addition of Hydrogen Halides",
    "youtubeId": "hfMmrse_dvM",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "11:03",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Alkenes, Pi Bonds & Electrophiles",
        "cardId": "al-chem-8-1-c3"
      },
      {
        "time": "2:50",
        "seconds": 170,
        "label": "Curly Arrow Mechanism: Alkene + HBr",
        "cardId": "al-chem-8-1-c3"
      },
      {
        "time": "6:05",
        "seconds": 365,
        "label": "Carbocation Stability (Primary, Secondary, Tertiary)",
        "cardId": "al-chem-8-1-c3"
      },
      {
        "time": "8:40",
        "seconds": 520,
        "label": "Major vs Minor Products (Markovnikov Rule)",
        "cardId": "al-chem-8-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-8-1-c1",
        "title": "Free Radical Substitution & Ozone Depletion",
        "summary": "UV homolytic initiation, propagation, termination in alkanes, and CFC ozone destruction.",
        "bullets": [
          "**Initiation (UV light)**: homolytic fission splits Cl–Cl evenly into two highly reactive chlorine free radicals (unpaired electron): Cl₂ → 2Cl•.",
          "**Propagation** (two-step chain reaction): (1) Cl• + CH₄ → •CH₃ + HCl; (2) •CH₃ + Cl₂ → CH₃Cl + Cl• (regenerates Cl•). **Termination**: any two radicals collide (e.g., 2•CH₃ → C₂H₆).",
          "Atmospheric chemistry: UV breaks C–Cl bonds in **CFCs** producing Cl• radicals that catalytically destroy stratospheric ozone: Cl• + O₃ → ClO• + O₂ and ClO• + O₃ → Cl• + 2O₂ (overall: 2O₃ → 3O₂)."
        ],
        "glossaryPills": [
          {
            "term": "homolytic fission",
            "definition": "Symmetrical cleavage of a covalent bond where each atom retains one shared electron, forming two neutral free radicals."
          }
        ],
        "commonMistake": "In propagation step 1, NEVER write Cl• + CH₄ → CH₃Cl + H•! Chlorine radical always abstracts a hydrogen atom to form HCl and a methyl radical (•CH₃).",
        "subsections": [
          {
            "heading": "Free Radical Substitution (UV) & Carbocation Stability",
            "bullets": [
              "**Free radical substitution (CH₄ + Cl₂, UV)** - **Initiation**: Cl₂ → 2Cl• (homolytic fission); **Propagation**: Cl• + CH₄ → •CH₃ + HCl, then •CH₃ + Cl₂ → CH₃Cl + Cl•; **Termination**: two radicals pair up.",
              "**Markovnikov’s Rule (Electrophilic Addition)** - major product ALWAYS forms via the **MOST STABLE CARBOCATION** (**tertiary 3° > secondary 2° > primary 1°**) because electron-releasing alkyl groups (+I inductive effect) stabilise the positive charge!"
            ],
            "exampleHeading": "Worked example: Propene + HBr major product",
            "examples": [
              "H⁺ adds to C1 to form the more stable **secondary carbocation** CH₃–CH⁺–CH₃ → major product is **2-bromopropane**!"
            ]
          }
        ]
      },
      {
        "id": "al-chem-8-1-c2",
        "title": "Nucleophilic Substitution vs Elimination in Halogenoalkanes",
        "summary": "Halogenoalkane nucleophilic substitution (OH⁻, CN⁻, NH₃) versus hot ethanolic elimination.",
        "bullets": [
          "Polar C(δ⁺)–X(δ⁻) bond attracts nucleophiles (electron-pair donors: OH⁻, CN⁻, NH₃). Curly arrow starts from lone pair on nucleophile to C(δ⁺), and second arrow breaks C–X bond onto X⁻. Rate depends on C–X bond enthalpy (not polarity): **C–I reacts fastest** (weakest bond), C–F slowest.",
          "Nucleophile reagents: warm aqueous NaOH → alcohol; warm ethanolic KCN → nitrile (extends carbon chain by +1 C!); excess ethanolic NH₃ in sealed tube → primary amine (excess NH₃ suppresses further poly-substitution).",
          "**Competing Elimination**: hot ETHANOLIC NaOH/KOH causes OH⁻ to act as a BASE (proton acceptor) abstracting a β-H while C–X breaks, forming an ALKENE + H₂O + X⁻. Primary halogenoalkanes favour substitution; tertiary favour elimination."
        ],
        "glossaryPills": [
          {
            "term": "nucleophile",
            "definition": "An electron-pair donor species (carrying a lone pair and often a negative charge) attracted to electron-deficient δ⁺ centres."
          }
        ],
        "memoryAid": "OH⁻ solvent rule: Warm Aqueous = Alcohol (Substitution); Hot Ethanolic = Alkene (Elimination).",
        "subsections": [
          {
            "heading": "Haloalkane Nucleophilic Substitution vs Elimination",
            "bullets": [
              "**Warm AQUEOUS NaOH** → **Nucleophilic substitution** (OH⁻ acts as nucleophile → **alcohol**); **Hot ETHANOLIC NaOH (reflux)** → **Elimination** (OH⁻ acts as **BASE** removing H⁺ → **alkene**!).",
              "**Hydrolysis rate trend** - **C–I fastest > C–Br > C–Cl slowest** because **bond enthalpy** dominates over bond polarity (C–I is the weakest bond and breaks fastest!)."
            ],
            "exampleHeading": "Worked check: Curly arrow precision rule",
            "examples": [
              "Every curly arrow MUST start from a **lone pair or covalent bond** and point directly to the **electrophilic atom or new bond**!"
            ]
          }
        ]
      },
      {
        "id": "al-chem-8-1-c3",
        "title": "Electrophilic Addition to Alkenes & Markovnikov’s Rule",
        "summary": "Alkene electrophilic addition curly arrows and Markovnikov 3° > 2° > 1° carbocation stability.",
        "bullets": [
          "The electron-rich C=C π-bond attracts electrophiles (electron-pair acceptors: HBr, Br₂, conc. H₂SO₄). Curly arrow goes FROM the middle of the C=C bond TO the δ⁺ end of the electrophile, forming a positively charged **carbocation intermediate** attacked next by the halide anion.",
          "Asymmetrical alkenes (e.g., propene + HBr) yield a major and minor product: the MAJOR product forms via the MORE STABLE **carbocation intermediate** (tertiary 3° > secondary 2° > primary 1°) because surrounding alkyl groups exert a positive inductive effect pushing electron density towards the positive carbon.",
          "With Br₂ (orange-brown water decolourised to colourless), the approaching π-cloud induces a temporary δ⁺/δ⁻ dipole in the non-polar Br–Br bond."
        ],
        "glossaryPills": [
          {
            "term": "electrophile",
            "definition": "An electron-pair acceptor species attracted to regions of high electron density such as an alkene π-bond or benzene ring."
          },
          {
            "term": "positive inductive effect",
            "definition": "Electron-donating push exerted by alkyl groups through sigma bonds that stabilises adjacent positively charged carbocation centres."
          }
        ],
        "commonMistake": "Always draw curly arrows originating cleanly from an electron-rich bond or lone pair and pointing accurately to the target atom or bond — arrows NEVER show atom movement!"
      }
    ],
    "keyTerms": [
      {
        "term": "Free radical",
        "definition": "Highly reactive species containing an unpaired electron, generated by homolytic fission."
      },
      {
        "term": "Carbocation",
        "definition": "Positively charged carbon intermediate stabilised by the positive inductive effect of attached alkyl groups (3° > 2° > 1°)."
      },
      {
        "term": "Elimination",
        "definition": "Removal of HX across adjacent carbons in a halogenoalkane by ethanolic OH⁻ acting as a base to form a C=C alkene."
      }
    ],
    "checklistPoints": [
      "Write initiation, propagation, and termination equations for alkane chlorination and CFC ozone breakdown.",
      "Draw full curly-arrow mechanisms for nucleophilic substitution (OH⁻, CN⁻, NH₃) and ethanolic elimination.",
      "Predict major/minor products of alkene electrophilic addition using 3° > 2° > 1° carbocation stability."
    ]
  },
  "al-chem-8-2": {
    "subtopicId": "al-chem-8-2",
    "subtopicCode": "8.2",
    "subtopicTitle": "Alcohols, Carbonyls, Carboxylic Acids & Acyl Chlorides",
    "readingMinutes": 14,
    "videoTitle": "AQA 3.8 Aldehydes and Ketones REVISION",
    "youtubeId": "bJM8xHKd_Sw",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "23:35",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Aldehydes vs Ketones & Oxidation Tests (Tollens/Fehling)",
        "cardId": "al-chem-8-2-c1"
      },
      {
        "time": "6:00",
        "seconds": 360,
        "label": "Nucleophilic Addition with NaBH4 (Reduction)",
        "cardId": "al-chem-8-2-c1"
      },
      {
        "time": "12:20",
        "seconds": 740,
        "label": "Nucleophilic Addition with HCN & Racemic Mixtures",
        "cardId": "al-chem-8-2-c1"
      },
      {
        "time": "18:40",
        "seconds": 1120,
        "label": "2,4-DNPH Identification & Mechanism Review",
        "cardId": "al-chem-8-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-8-2-c1",
        "title": "Alcohol Oxidation & Carbonyl Nucleophilic Addition",
        "summary": "Alcohol oxidation, Tollens’/Fehling’s tests, and carbonyl nucleophilic addition giving racemates.",
        "bullets": [
          "**Acidified potassium dichromate** (K₂Cr₂O₇/H₂SO₄, orange Cr₂O₇²⁻ → green Cr³⁺): Primary alcohol + gentle distillation → aldehyde; Primary alcohol + reflux with excess [O] → carboxylic acid; Secondary alcohol + reflux → ketone; Tertiary alcohol → NO oxidation (no C–H on α-carbon).",
          "Distinguishing aldehydes from ketones: **Tollens’ reagent** ([Ag(NH₃)₂]⁺) oxidises aldehydes to give a silver mirror; **Fehling’s solution** (blue Cu²⁺) oxidises aldehydes to a brick-red Cu₂O precipitate; ketones give no change with either.",
          "Nucleophilic addition to planar C=O: (1) **NaBH₄** supplies hydride ion (:H⁻) reducing aldehydes → 1° alcohols and ketones → 2° alcohols; (2) KCN followed by dilute H⁺ supplies :CN⁻ to form hydroxynitriles (extending chain by +1 C).",
          "Because the C=O group is **TRIGONAL PLANAR**, :CN⁻ attacks equally from above or below the plane on an unsymmetrical carbonyl, yielding a 50:50 equimolar RACEMIC mixture of enantiomers that shows zero net rotation of plane-polarised light."
        ],
        "glossaryPills": [
          {
            "term": "racemic mixture",
            "definition": "An equimolar (50:50) mixture of two optical enantiomers whose equal and opposite rotations of plane-polarised light cancel completely."
          }
        ],
        "commonMistake": "When explaining why nucleophilic addition gives a racemic mixture, ALWAYS specify the C=O group is PLANAR so the nucleophile has EQUAL probability of attacking from either side!",
        "subsections": [
          {
            "heading": "Alcohol Oxidation, Carbonyl Tests & Nucleophilic Addition",
            "bullets": [
              "**Acidified K₂Cr₂O₇ (orange → green Cr³⁺)** - **1° alcohol + distil** → **aldehyde**; **1° alcohol + reflux (excess)** → **carboxylic acid**; **2° alcohol + reflux** → **ketone**; **3° alcohol** → **NO oxidation**!",
              "**Distinguishing aldehydes vs ketones** - **Tollens’ reagent** (silver mirror with aldehyde only) or **Fehling’s solution** (blue → brick-red Cu₂O ppt with aldehyde only); **2,4-DNPH** gives an orange ppt with BOTH (melting point identifies exact carbonyl!)."
            ],
            "exampleHeading": "Worked example: Why HCN + unsymmetrical carbonyl gives a racemic mixture",
            "examples": [
              "The planar C=O group is attacked by CN⁻ nucleophile with **equal probability from above or below the plane**, creating a 50:50 **racemic mixture** of both optical enantiomers (optically inactive!)."
            ]
          }
        ]
      },
      {
        "id": "al-chem-8-2-c2",
        "title": "Carboxylic Acids, Esters & Acyl Chlorides",
        "summary": "Carboxylic acid acidity, esterification, and vigorous acyl chloride addition-elimination.",
        "bullets": [
          "Carboxylic acids are weak acids (carboxylate ion RCOO⁻ stabilised by delocalised negative charge across both C–O bonds) that fizz CO₂ with NaHCO₃/Na₂CO₃ and form esters reversibly with alcohols + conc. H₂SO₄ **catalyst**.",
          "**Acyl chlorides** (RCOCl) are highly reactive because both electronegative O and Cl withdraw electron density from the carbonyl carbon (strongly δ⁺), undergoing vigorous room-temperature NUCLEOPHILIC ADDITION-ELIMINATION with H₂O (→ carboxylic acid + HCl), alcohols (→ ester + HCl), NH₃ (→ primary amide), and primary amines (→ N-substituted amide).",
          "Industrial aspirin synthesis uses **ethanoic anhydride** instead of ethanoyl chloride because it is cheaper, less corrosive, reacts less violently with water, and produces safe ethanoic acid instead of toxic corrosive HCl gas."
        ],
        "glossaryPills": [
          {
            "term": "addition-elimination",
            "definition": "Two-stage mechanism of acyl derivatives where a nucleophile first adds to C=O forming a tetrahedral intermediate, followed by C=O reformation and expulsion of the Cl⁻ leaving group."
          }
        ],
        "memoryAid": "Four curly arrows in acyl chloride addition-elimination: 2 in Step 1 (Nu attacks C, C=O breaks to O⁻) + 3 in Step 2 (O⁻ reforms C=O, C–Cl breaks, H⁺ lost)."
      },
      {
        "id": "al-chem-8-2-c3",
        "title": "Acyl Chlorides, Acid Anhydrides & Aspirin Synthesis",
        "summary": "Nucleophilic addition–elimination with acyl chlorides and why industry prefers ethanoic anhydride over ethanoyl chloride.",
        "bullets": [
          "**Nucleophilic addition–elimination of RCOCl** - reacts vigorously at room temperature with **H₂O** (→ carboxylic acid + HCl), **ROH** (→ ester + HCl), **NH₃** (→ primary amide + HCl), and **primary amine R′NH₂** (→ N-substituted amide + HCl).",
          "**Why ethanoic anhydride beats ethanoyl chloride (Aspirin synthesis)** - ethanoic anhydride is **cheaper**, **less corrosive**, **less violently reactive with water**, and produces harmless **ethanoic acid** instead of toxic, corrosive **HCl gas**!",
          "**Acid vs Alkaline Ester Hydrolysis** - **Acid (dilute H⁺/reflux)**: reversible → carboxylic acid + alcohol; **Alkaline (NaOH/reflux)**: goes to **completion** → **carboxylate salt (RCOO⁻Na⁺) + alcohol** (saponification!)."
        ],
        "subsections": [
          {
            "heading": "Organic Functional-Group Chemical Tests Summary",
            "bullets": [
              "**Carboxylic acid** - effervescence with **NaHCO₃ / Na₂CO₃** (CO₂ turns limewater cloudy); phenols & alcohols do NOT fizz with carbonate!",
              "**Acyl chloride** - violent reaction with water releasing **steamy white fumes of HCl**."
            ],
            "exampleHeading": "Worked check: Reduction of aldehydes/ketones",
            "examples": [
              "Use **NaBH₄(aq/ethanol)** (source of **:H⁻ hydride nucleophile**): aldehyde → 1° alcohol; ketone → 2° alcohol!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "racemic mixture",
            "definition": "Equimolar (50:50) mixture of two optical enantiomers whose equal and opposite rotations cancel out (optically inactive)."
          },
          {
            "term": "nucleophilic addition-elimination",
            "definition": "Two-stage acyl chloride mechanism where a nucleophile attacks C=O, then Cl⁻ is expelled as the C=O double bond reforms."
          }
        ],
        "commonMistake": "When oxidising a primary alcohol to an ALDEHYDE, you MUST **DISTIL** the aldehyde off as it forms — heating under reflux oxidises it all the way to a carboxylic acid!"
      }
    ],
    "keyTerms": [
      {
        "term": "Chiral centre",
        "definition": "Asymmetric carbon atom bonded to four different atoms or functional groups, producing non-superimposable optical isomers."
      },
      {
        "term": "Enantiomers",
        "definition": "Pair of mirror-image optical isomers that rotate plane-polarised light by equal angles in opposite directions."
      },
      {
        "term": "Acylation",
        "definition": "Introduction of an acyl group (RCO–) into a nucleophile via addition-elimination with an acyl chloride or acid anhydride."
      }
    ],
    "checklistPoints": [
      "Specify exact reagents and apparatus (distillation vs reflux) for primary/secondary alcohol oxidations.",
      "Draw curly-arrow nucleophilic addition mechanisms with :H⁻ and :CN⁻ and explain racemate formation.",
      "Draw the complete nucleophilic addition-elimination mechanism for ethanoyl chloride with alcohols, water, ammonia, and amines."
    ]
  },
  "al-chem-8-3": {
    "subtopicId": "al-chem-8-3",
    "subtopicCode": "8.3",
    "subtopicTitle": "Benzene Delocalisation, Electrophilic Substitution & Amines",
    "readingMinutes": 14,
    "videoTitle": "AQA 3.10 Aromatic Chemistry REVISION",
    "youtubeId": "RmPnRLcQ4Mk",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "30:13",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Kekulé vs Delocalised Model of Benzene",
        "cardId": "al-chem-8-3-c1"
      },
      {
        "time": "7:40",
        "seconds": 460,
        "label": "Evidence: Bond Lengths, Enthalpy & Reactivity",
        "cardId": "al-chem-8-3-c1"
      },
      {
        "time": "16:00",
        "seconds": 960,
        "label": "Electrophilic Substitution: Nitration of Benzene",
        "cardId": "al-chem-8-3-c1"
      },
      {
        "time": "24:00",
        "seconds": 1440,
        "label": "Friedel-Crafts Acylation & Generating Electrophiles",
        "cardId": "al-chem-8-3-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-8-3-c1",
        "title": "Structure of Benzene & Electrophilic Substitution",
        "summary": "Three proofs of benzene’s delocalised π-ring plus nitration and Friedel-Crafts mechanisms.",
        "bullets": [
          "Benzene (C₆H₆) is a planar hexagonal ring where six unhybridised p-orbitals overlap sideways above and below the ring into a continuous **delocalised π-electron cloud** (6 delocalised electrons).",
          "Three pieces of evidence disproving Kekulé’s alternating C=C model: (1) All C–C bond lengths are identical (0.139 nm, intermediate between C–C 0.154 nm and C=C 0.134 nm); (2) Enthalpy of hydrogenation is −208 kJ mol⁻¹ — 152 kJ mol⁻¹ MORE stable (less exothermic) than 3 × cyclohexene (−360 kJ mol⁻¹); (3) Benzene does NOT decolourise bromine water (undergoes substitution to preserve aromatic delocalisation stability, not addition).",
          "**Nitration** (55°C, conc. HNO₃ + conc. H₂SO₄): generates nitronium electrophile NO₂⁺ (HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺). Electrophilic substitution breaks ring into a horseshoe intermediate (positive charge inside, opening facing the attacked carbon) then loses H⁺ (regenerating H₂SO₄ **catalyst**) to restore the delocalised ring.",
          "**Friedel-Crafts acylation**: RCOCl + anhydrous AlCl₃ generates acylium electrophile RCO⁺ + AlCl₄⁻, introducing a ketone acyl chain onto the benzene ring."
        ],
        "subsections": [
          {
            "heading": "Electrophile generation equations",
            "bullets": [
              "**Nitration (55°C)**: concentrated HNO₃ + concentrated H₂SO₄ acts as an acid-base pair to generate the **nitronium ion (NO₂⁺)**.",
              "**Friedel-Crafts acylation**: acyl chloride + anhydrous **AlCl₃** halogen carrier generates the **acylium ion (RCO⁺)**."
            ],
            "exampleHeading": "Must-memorise generation equations:",
            "examples": [
              "**Nitration** — HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺ (H₂SO₄ is regenerated at the final H⁺ loss step)",
              "**Acylation** — CH₃COCl + AlCl₃ → CH₃CO⁺ + AlCl₄⁻ (forms phenylethanone + HCl + regenerated AlCl₃)"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "delocalisation stability",
            "definition": "Extra thermodynamic stability (~152 kJ mol⁻¹ in benzene) gained by spreading π-electrons evenly across all six ring carbons."
          }
        ],
        "commonMistake": "When drawing the benzene horseshoe intermediate, NEVER let the curved delocalised arc extend onto the sp³ carbon that now holds both H and the electrophile — it must span ONLY the remaining 5 carbons!"
      },
      {
        "id": "al-chem-8-3-c2",
        "title": "Amine Basicity, Amino Acids & Condensation Polymers",
        "summary": "Explaining amine basicity order, amino acid zwitterions, and hydrolysable condensation polymers.",
        "bullets": [
          "Amines act as Brønsted-Lowry bases using the lone pair on nitrogen. Basic strength order: Secondary/Primary aliphatic amines > Ammonia (NH₃) > Phenylamine (C₆H₅NH₂).",
          "Explanation: alkyl groups exert a positive inductive effect pushing electron density onto N, making the lone pair MORE available to accept H⁺. In phenylamine, the N lone pair delocalises into the benzene π-ring, making it MUCH LESS available to accept H⁺.",
          "Amino acids exist as crystalline ionic zwitterions (⁺H₃N–CHR–COO⁻) at their isoelectric point (high melting points, water-soluble). **Condensation polymerisation** joins dicarboxylic acids + diols → polyesters (e.g. Terylene), or dicarboxylic acids + diamines → polyamides (Nylon-6,6, Kevlar) — biodegradable by acid/alkali hydrolysis unlike inert poly(alkenes)."
        ],
        "glossaryPills": [
          {
            "term": "zwitterion",
            "definition": "A dipolar internal salt ion carrying both a positive ammonium group and a negative carboxylate group simultaneously with zero net charge."
          }
        ],
        "memoryAid": "Base strength: Aliphatic (alkyl pushes e⁻ ONTO N → strongest) > Ammonia (neutral) > Aromatic phenylamine (benzene pulls lone pair INTO ring → weakest)."
      },
      {
        "id": "al-chem-8-3-c3",
        "title": "Basicity of Amines & Directing Effects on Benzene Rings",
        "summary": "Comparing base strength of aliphatic amines, ammonia, and phenylamine — plus nitration and Friedel–Crafts acylation.",
        "bullets": [
          "**Base strength order (STRONGEST → WEAKEST)** - **aliphatic amines (CH₃CH₂NH₂) > ammonia (NH₃) > phenylamine (C₆H₅NH₂)**!",
          "**Why?** - Alkyl groups are **electron-donating (+I)**, increasing lone-pair electron density on N (stronger H⁺ acceptor); in **phenylamine**, nitrogen’s lone pair **delocalises into the benzene π-ring**, drastically reducing electron density on N!",
          "**Electrophilic substitution conditions** - **Nitration**: conc. HNO₃ + conc. H₂SO₄ at 55 °C (**NO₂⁺** electrophile: HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻); **Friedel–Crafts acylation**: RCOCl + **anhydrous AlCl₃** (**R–C⁺=O** acylium ion); **Reduction of nitrobenzene → phenylamine**: **Sn + conc. HCl (reflux)** then **NaOH**!"
        ],
        "subsections": [
          {
            "heading": "Three Proofs Against Kekulé’s Alternating-Bond Benzene Model",
            "bullets": [
              "**1. Equal C–C bond lengths** (0.139 nm, intermediate between single 0.154 nm and double 0.134 nm).",
              "**2. Enthalpy of hydrogenation** is **−208 kJ mol⁻¹** — **152 kJ mol⁻¹ MORE STABLE** than predicted 3 × (−120) = −360 kJ mol⁻¹!",
              "**3. Resistance to addition** - benzene does NOT decolourise bromine water; it undergoes **substitution** to preserve the stable delocalised π-ring."
            ],
            "exampleHeading": "Worked check: Why does benzene prefer substitution over addition?",
            "examples": [
              "Addition would destroy the 152 kJ mol⁻¹ delocalisation stabilisation energy; substitution restores the aromatic π-ring!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "delocalisation energy",
            "definition": "Extra thermodynamic stability (~152 kJ mol⁻¹) of benzene due to overlapping p-orbitals sharing 6 π-electrons around the ring."
          },
          {
            "term": "electrophilic substitution",
            "definition": "Signature aromatic mechanism replacing an H atom on benzene with an electrophile while preserving the delocalised π-ring."
          }
        ],
        "commonMistake": "When drawing the horseshoe intermediate in electrophilic substitution of benzene, make sure the open end of the horseshoe faces the tetrahedral carbon carrying BOTH H and E, and covers carbons 2–6!"
      }
    ],
    "keyTerms": [
      {
        "term": "Nitronium ion (NO₂⁺)",
        "definition": "Potent electrophile formed by reacting concentrated nitric acid with concentrated sulfuric acid for benzene nitration."
      },
      {
        "term": "Friedel-Crafts acylation",
        "definition": "Electrophilic substitution attaching an acyl group to benzene using an acyl chloride and AlCl₃ halogen carrier."
      },
      {
        "term": "Condensation polymer",
        "definition": "Polymer formed by joining bifunctional monomers with elimination of small molecules (H₂O or HCl), yielding hydrolysable ester or amide links."
      }
    ],
    "checklistPoints": [
      "Cite all three quantitative and chemical proofs of benzene’s delocalised structure over Kekulé’s structure.",
      "Write electrophile-generation equations and curly-arrow mechanisms for nitration and Friedel-Crafts acylation.",
      "Explain the basicity ranking of primary aliphatic amines, ammonia, and phenylamine in terms of lone-pair availability."
    ]
  },
  "al-chem-8-4": {
    "subtopicId": "al-chem-8-4",
    "subtopicCode": "8.4",
    "subtopicTitle": "IR, High-Res Mass Spec & ¹H / ¹³C NMR Spectroscopy",
    "readingMinutes": 14,
    "videoTitle": "Interpreting NMR Spectra 1",
    "youtubeId": "6U0E7WL8UiE",
    "videoChannel": "Allery Chemistry",
    "videoDuration": "11:01",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Chemical Shift, TMS Standard & Integration",
        "cardId": "al-chem-8-4-c2"
      },
      {
        "time": "2:55",
        "seconds": 175,
        "label": "Proton (¹H) NMR Splitting (n+1 Rule)",
        "cardId": "al-chem-8-4-c2"
      },
      {
        "time": "6:05",
        "seconds": 365,
        "label": "Carbon-13 (¹³C) NMR Environments",
        "cardId": "al-chem-8-4-c2"
      },
      {
        "time": "8:40",
        "seconds": 520,
        "label": "Worked Structure Determination Example",
        "cardId": "al-chem-8-4-c3"
      }
    ],
    "cards": [
      {
        "id": "al-chem-8-4-c1",
        "title": "High-Resolution Mass Spectrometry & Infrared (IR) Spectroscopy",
        "summary": "Identifying exact formulas via 4-d.p. high-res mass spec and key IR absorption bands.",
        "bullets": [
          "**High-resolution mass spectrometry** measures molecular ion m/z to 4 decimal places (e.g., C₃H₈ = 44.0626 vs CO₂ = 43.9898 vs C₂H₄O = 44.0262), identifying the exact molecular formula unambiguously.",
          "**Infrared (IR) radiation** causes covalent bonds to vibrate (stretch/bend) at characteristic frequencies matching exact wavenumbers (cm⁻¹): broad O–H alcohol peak (3230–3550 cm⁻¹), very broad O–H carboxylic acid peak (2500–3000 cm⁻¹), sharp strong C=O carbonyl peak (1680–1750 cm⁻¹).",
          "The fingerprint region (<1500 cm⁻¹) displays unique complex C–C/C–O vibrations matched against spectral databases to confirm exact compound identity."
        ],
        "glossaryPills": [
          {
            "term": "fingerprint region",
            "definition": "Unique lower-wavenumber region (below 1500 cm⁻¹) of an IR spectrum matched directly against known reference spectra to confirm exact molecular identity."
          }
        ],
        "memoryAid": "IR quick-spot: Sharp dagger around 1700 cm⁻¹ = C=O; Smooth U-shaped trough ~3350 cm⁻¹ = alcohol O–H; Messy giant beard 2500–3300 cm⁻¹ = carboxylic acid O–H."
      },
      {
        "id": "al-chem-8-4-c2",
        "title": "¹³C NMR & ¹H NMR (Chemical Shift, Integration & n+1 Splitting)",
        "summary": "TMS calibration, ¹³C carbon environments, and ¹H NMR chemical shifts, integration, and n+1 splitting.",
        "bullets": [
          "**Tetramethylsilane (TMS**, Si(CH₃)₄) is the δ = 0 ppm reference standard because it has 12 chemically equivalent protons (single sharp peak), is inert/non-toxic, volatile (easily removed), and absorbs upfield outside normal organic ranges. Solvents must contain NO ¹H atoms (e.g., CDCl₃ or CCl₄).",
          "**¹³C NMR**: each peak represents one chemically distinct carbon environment (no peak splitting or integration needed); carbonyl C=O appears far downfield (160–220 ppm).",
          "**¹H NMR** gives FOUR clues: (1) Number of peaks = distinct proton environments; (2) Chemical shift δ (ppm) = proximity to electronegative atoms (O, Cl, C=O pull electron density away, deshielding protons downfield); (3) Integration ratio = relative count of protons in each environment; (4) Spin-spin splitting (n + 1 rule): a proton with n chemically non-equivalent protons on ADJACENT carbons splits into (n + 1) peaks (triplet + quartet = classic CH₃CH₂– ethyl signature!).",
          "O–H and N–H protons show singlets (no splitting) that DISAPPEAR when shaken with **D₂O** (proton-deuterium exchange)."
        ],
        "subsections": [
          {
            "heading": "Diagnostic ¹H NMR splitting signatures (n + 1 rule)",
            "bullets": [
              "Count only **chemically non-equivalent protons on immediately adjacent carbons** to predict peak multiplicity.",
              "Run a **D₂O shake** to confirm labile **–OH** or **–NH** singlets, which vanish on deuterium exchange."
            ],
            "exampleHeading": "High-yield structural motifs in exam spectra:",
            "examples": [
              "**Ethyl group (–CH₂CH₃)** — 3H triplet coupled with a 2H quartet",
              "**Isopropyl group (–CH(CH₃)₂)** — 6H doublet coupled with a 1H septet (7 peaks)"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "chemical shift",
            "definition": "Resonance position δ (in ppm) of a ¹H or ¹³C nucleus relative to TMS at 0 ppm, governed by local electronic shielding."
          },
          {
            "term": "spin-spin splitting",
            "definition": "Splitting of a ¹H NMR signal into (n + 1) sub-peaks caused by magnetic coupling with n non-equivalent protons on immediately adjacent carbon atoms."
          }
        ],
        "commonMistake": "When applying the n+1 rule, count ONLY protons on ADJACENT carbons — equivalent protons on the SAME carbon (or separated by an O/C=O bridge) NEVER split each other!"
      },
      {
        "id": "al-chem-8-4-c3",
        "title": "¹H NMR Integration, n + 1 Splitting & D₂O Shake Mastery",
        "summary": "Cracking combined IR + High-Res MS + ¹³C/¹H NMR structure-elucidation puzzles worth 6–8 marks in Paper 2/3.",
        "bullets": [
          "**Four pieces of ¹H NMR information** - (1) **Number of peaks** = number of distinct H environments; (2) **Chemical shift δ (ppm)** = neighbouring functional groups; (3) **Integration ratio** = relative number of protons in each environment; (4) **n + 1 splitting rule** = a proton with **n non-equivalent H atoms on ADJACENT carbons** splits into **(n + 1) peaks**!",
          "**Signature splitting patterns** - **Ethyl group (CH₃CH₂−)**: classic **triplet (3H) + quartet (2H)**; **Isopropyl ((CH₃)₂CH−)**: **doublet (6H) + septet (1H)**; **OH / NH**: broad **singlet** that **disappears on adding D₂O** (proton exchange)!",
          "**TMS standard & CDCl₃ solvent** - **TMS (Si(CH₃)₄)** sets **δ = 0 ppm** (12 equivalent H’s → single sharp peak, inert, volatile, shielded upfield of all organic peaks); **CDCl₃** is deuterated so solvent produces **NO ¹H NMR peak**!"
        ],
        "subsections": [
          {
            "heading": "High-Resolution Mass Spec & IR Fingerprint Region",
            "bullets": [
              "**High-Res MS (4 d.p.)** - distinguishes isomers with the same integer M_r (e.g. C₃H₈O = 60.0575 vs C₂H₄O₂ = 60.0211) using exact atomic masses!",
              "**IR broad vs sharp** - **O–H (alcohol)**: smooth broad peak 3230–3550 cm⁻¹; **O–H (carboxylic acid)**: VERY broad jagged trough 2500–3000 cm⁻¹ + sharp **C=O** at 1680–1750 cm⁻¹."
            ],
            "exampleHeading": "Worked puzzle: C₃H₆O₂ with 2 ¹H NMR peaks — 3H singlet at δ 2.1, 3H singlet at δ 3.7",
            "examples": [
              "No splitting ⇒ no adjacent CH groups; δ 3.7 (O–CH₃) + δ 2.1 (CH₃–C=O) ⇒ **Methyl ethanoate (CH₃COOCH₃)**!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "chemical shift",
            "definition": "Resonance position δ (in ppm relative to TMS at 0 ppm) reflecting the electronic shielding around a ¹H or ¹³C nucleus."
          },
          {
            "term": "spin-spin splitting",
            "definition": "Division of a ¹H NMR peak into (n + 1) sub-peaks caused by magnetic coupling with n non-equivalent protons on adjacent carbons."
          }
        ],
        "commonMistake": "In ¹H NMR, n in the (n + 1) rule counts protons on ADJACENT carbons — NEVER count protons on the SAME carbon or across an oxygen atom (–OH does not normally split neighbours)!"
      }
    ],
    "keyTerms": [
      {
        "term": "TMS",
        "definition": "Tetramethylsilane, Si(CH₃)₄ — inert, volatile reference compound defining δ = 0.0 ppm in ¹H and ¹³C NMR."
      },
      {
        "term": "n + 1 rule",
        "definition": "¹H NMR rule predicting that a proton signal splits into (n + 1) peaks when adjacent carbons carry n non-equivalent protons."
      },
      {
        "term": "D₂O shake",
        "definition": "Diagnostic NMR technique where labile –OH and –NH peaks vanish upon deuterium exchange."
      }
    ],
    "checklistPoints": [
      "Distinguish exact molecular formulas using 4-decimal-place accurate masses and identify IR O–H and C=O bands.",
      "Explain why TMS and CDCl₃ are selected for NMR spectroscopy.",
      "Deduce full organic structures by combining high-res MS, IR, ¹³C NMR peak count, and ¹H NMR chemical shifts, integration ratios, and n+1 splitting patterns."
    ]
  }
};

export const ALEVEL_CHEMISTRY_QUIZZES: QuizQuestion[] = [
  {
    "id": "al-chem-q1",
    "subtopicId": "al-chem-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the ground-state electronic configuration of the Fe²⁺ ion (Fe atomic number = 26)?",
    "options": [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸"
    ],
    "correctIndex": 1,
    "explanation": "Neutral Fe is [Ar] 3d⁶ 4s². Transition metals ALWAYS lose their 4s electrons before 3d electrons, leaving Fe²⁺ = [Ar] 3d⁶."
  },
  {
    "id": "al-chem-q2",
    "subtopicId": "al-chem-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is the first ionisation energy of sulfur (3p⁴) lower than that of phosphorus (3p³)?",
    "options": [
      "Sulfur has fewer protons in its nucleus than phosphorus",
      "Sulfur’s outer electron sits in a 4s sub-shell further from the nucleus",
      "Sulfur has a pair of spin-paired electrons in one 3p orbital experiencing mutual repulsion, making one electron easier to remove",
      "Phosphorus has stronger metallic bonding than sulfur"
    ],
    "correctIndex": 2,
    "explanation": "In 3p⁴, two electrons must share one 3p orbital; spin-pair repulsion reduces the ionisation energy below half-filled 3p³ phosphorus."
  },
  {
    "id": "al-chem-q3",
    "subtopicId": "al-chem-2-1",
    "type": "short-answer",
    "marks": 3,
    "prompt": "A 0.120 mol sample of an ideal gas occupies 2,500 cm³ at 27°C. Calculate its pressure in kPa (R = 8.31 J K⁻¹ mol⁻¹). Give your answer to 3 significant figures.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "V = 2500 × 10⁻⁶ = 2.50 × 10⁻³ m³; T = 27 + 273 = 300 K. p = nRT / V = (0.120 × 8.31 × 300) ÷ 0.00250 = 119,664 Pa = 120 kPa.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct SI conversions: V = 2.5 × 10⁻³ m³ and T = 300 K",
          "requiredKeywordGroups": [
            [
              "300"
            ],
            [
              "0.0025",
              "2.5"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "p = 119664 Pa (or 119.7 kPa)",
          "requiredKeywordGroups": [
            [
              "119",
              "120"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Final answer 120 kPa",
          "numericMatch": {
            "value": 120,
            "tolerance": 0.6
          }
        }
      ]
    },
    "explanation": "p = (0.120 × 8.31 × 300) / 0.0025 = 119,664 Pa = 120 kPa (3 s.f.)."
  },
  {
    "id": "al-chem-q4",
    "subtopicId": "al-chem-3-1",
    "type": "matching",
    "marks": 3,
    "prompt": "Match each molecular species to its VSEPR shape and bond angle.",
    "pairs": [
      {
        "left": "NH₃ (3 BP, 1 LP)",
        "right": "Trigonal pyramidal — 107°"
      },
      {
        "left": "H₂O (2 BP, 2 LP)",
        "right": "Bent / V-shaped — 104.5°"
      },
      {
        "left": "ClF₄⁻ (4 BP, 2 LP)",
        "right": "Square planar — 90°"
      }
    ],
    "explanation": "Lone pairs repel more strongly than bonding pairs, compressing tetrahedral angles by ~2.5° per lone pair; 4 BP + 2 LP gives square planar (90°)."
  },
  {
    "id": "al-chem-q5",
    "subtopicId": "al-chem-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is tetrachloromethane (CCl₄) a non-polar molecule even though every C–Cl bond is polar?",
    "options": [
      "Chlorine and carbon have identical electronegativities",
      "The symmetrical tetrahedral arrangement causes all four bond dipoles to cancel out completely",
      "CCl₄ forms hydrogen bonds that neutralise its polarity",
      "Carbon shares four lone pairs symmetrically"
    ],
    "correctIndex": 1,
    "explanation": "Although each C–Cl bond has a dipole towards Cl, the symmetric tetrahedral geometry cancels out the net vector dipole moment."
  },
  {
    "id": "al-chem-q6",
    "subtopicId": "al-chem-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Hess’s Law formulas using standard enthalpies of formation and combustion.",
    "segments": [
      "From ΔfH° data: ΔrH° = ΣΔfH°(",
      ") − ΣΔfH°(reactants). From ΔcH° data: ΔrH° = ΣΔcH°(",
      ") − ΣΔcH°(products)."
    ],
    "wordBank": [
      "products",
      "reactants",
      "elements",
      "catalysts"
    ],
    "answers": [
      "products",
      "reactants"
    ],
    "explanation": "Formation arrows point up from elements (Products − Reactants); combustion arrows point down to CO₂ + H₂O (Reactants − Products)."
  },
  {
    "id": "al-chem-q7",
    "subtopicId": "al-chem-4-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "A decomposition reaction has ΔH° = +178 kJ mol⁻¹ and ΔS° = +160 J K⁻¹ mol⁻¹. Calculate the minimum temperature (in K) above which this reaction becomes thermodynamically feasible.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Feasible when ΔG = ΔH − TΔS ≤ 0, so T = ΔH ÷ (ΔS / 1000) = 178 ÷ 0.160 = 1112.5 K (1113 K).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Convert ΔS° to 0.160 kJ K⁻¹ mol⁻¹ (or ΔH to 178,000 J)",
          "requiredKeywordGroups": [
            [
              "0.16",
              "178000"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Set ΔG = 0 so T = ΔH / ΔS",
          "requiredKeywordGroups": [
            [
              "178"
            ],
            [
              "0.16",
              "160"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Temperature = 1112.5 K (accept 1110–1113 K)",
          "numericMatch": {
            "value": 1112.5,
            "tolerance": 3
          }
        }
      ]
    },
    "explanation": "Convert ΔS° = 0.160 kJ K⁻¹ mol⁻¹, then T = 178 / 0.160 = 1112.5 K."
  },
  {
    "id": "al-chem-q8",
    "subtopicId": "al-chem-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is the experimental Born-Haber lattice enthalpy of AgI significantly more exothermic than the value predicted by the purely ionic theoretical model?",
    "options": [
      "Ag⁺ ions have a very low charge density",
      "Ag⁺ strongly polarises the large I⁻ electron cloud, introducing significant covalent character that strengthens bonding",
      "Iodide ions undergo spontaneous radioactive decay",
      "Theoretical models omit Avogadro’s constant"
    ],
    "correctIndex": 1,
    "explanation": "Distortion (polarisation) of the large I⁻ ion by Ag⁺ introduces extra covalent bonding character beyond spherical point-charge assumptions."
  },
  {
    "id": "al-chem-q9",
    "subtopicId": "al-chem-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "For the rate equation Rate = k [A]² [B], what are the units of the rate constant k?",
    "options": [
      "s⁻¹",
      "mol⁻¹ dm³ s⁻¹",
      "mol⁻² dm⁶ s⁻¹",
      "mol dm⁻³ s⁻¹"
    ],
    "correctIndex": 2,
    "explanation": "Overall order is 2 + 1 = 3. Units of k = (mol dm⁻³ s⁻¹) ÷ (mol dm⁻³)³ = mol⁻² dm⁶ s⁻¹."
  },
  {
    "id": "al-chem-q10",
    "subtopicId": "al-chem-5-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Which TWO statements are true regarding an Arrhenius plot of ln k against 1/T?",
    "options": [
      "The gradient of the straight line equals −Ea / R",
      "The y-intercept equals ln A",
      "The gradient is positive because k decreases with temperature",
      "Activation energy Ea equals gradient ÷ R"
    ],
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Linearising k = A·exp(−Ea/RT) gives ln k = (−Ea/R)(1/T) + ln A, so gradient = −Ea/R and y-intercept = ln A."
  },
  {
    "id": "al-chem-q11",
    "subtopicId": "al-chem-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "For the exothermic gaseous equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = −92 kJ mol⁻¹), what happens to the numerical value of Kp when total pressure is doubled at constant temperature?",
    "options": [
      "Kp doubles",
      "Kp halves",
      "Kp stays completely unchanged (only temperature alters Kp)",
      "Kp drops to zero"
    ],
    "correctIndex": 2,
    "explanation": "Equilibrium position shifts right to restore the ratio, but the numerical value of Kp changes ONLY with temperature."
  },
  {
    "id": "al-chem-q12",
    "subtopicId": "al-chem-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Calculate the pH of a 0.0500 mol dm⁻³ solution of NaOH at 298 K (Kw = 1.00 × 10⁻¹⁴ mol² dm⁻⁶) to 2 decimal places.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "[H⁺] = Kw / [OH⁻] = (1.00 × 10⁻¹⁴) ÷ 0.0500 = 2.00 × 10⁻¹³ mol dm⁻³. pH = −log₁₀(2.00 × 10⁻¹³) = 12.70.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "[H⁺] = 2.00 × 10⁻¹³ mol dm⁻³ (or pOH = 1.30)",
          "requiredKeywordGroups": [
            [
              "2.0",
              "2 × 10",
              "1.30"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Final pH = 12.70",
          "numericMatch": {
            "value": 12.7,
            "tolerance": 0.03
          }
        }
      ]
    },
    "explanation": "[H⁺] = 10⁻¹⁴ / 0.05 = 2 × 10⁻¹³ mol dm⁻³, giving pH = 12.70."
  },
  {
    "id": "al-chem-q13",
    "subtopicId": "al-chem-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When titrating weak ethanoic acid against strong NaOH, which point on the titration curve directly gives pH = pKa?",
    "options": [
      "At 0 cm³ of NaOH added",
      "At the half-equivalence point (where [HA] = [A⁻])",
      "At the exact equivalence point",
      "After adding double the equivalence volume of NaOH"
    ],
    "correctIndex": 1,
    "explanation": "At half-equivalence, half the weak acid has been neutralised so [HA] = [A⁻], making [H⁺] = Ka and pH = pKa."
  },
  {
    "id": "al-chem-q14",
    "subtopicId": "al-chem-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which solid sodium halide reacts with concentrated H₂SO₄ to produce rotten-egg smelling H₂S gas alongside yellow solid sulfur and purple iodine vapour?",
    "options": [
      "NaF",
      "NaCl",
      "NaBr",
      "NaI"
    ],
    "correctIndex": 3,
    "explanation": "I⁻ is the strongest halide reducing agent, reducing sulfur in H₂SO₄ (+6) all the way through SO₂ (+4) and S (0) down to H₂S (−2)."
  },
  {
    "id": "al-chem-q15",
    "subtopicId": "al-chem-7-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "Explain in thermodynamic terms (using ΔS and ΔG) why EDTA⁴⁻ readily displaces six H₂O ligands from [Cu(H₂O)₆]²⁺ (the chelate effect).",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Replacing six monodentate H₂O ligands with one hexadentate EDTA⁴⁻ ligand increases the number of independent particles in solution from 2 to 7. This produces a large positive entropy change (ΔS > 0), making ΔG = ΔH − TΔS strongly negative (spontaneous) even though ΔH ≈ 0.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Number of particles/moles in solution increases (2 → 7)",
          "requiredKeywordGroups": [
            [
              "increase",
              "more",
              "2 to 7",
              "7"
            ],
            [
              "particle",
              "molecule",
              "mole",
              "species"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Large positive entropy change (ΔS > 0)",
          "requiredKeywordGroups": [
            [
              "entropy",
              "δs",
              "delta s"
            ],
            [
              "positive",
              "increase"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "ΔG = ΔH − TΔS becomes strongly negative / feasible",
          "requiredKeywordGroups": [
            [
              "δg",
              "delta g",
              "gibbs"
            ],
            [
              "negative",
              "feasible",
              "spontaneous"
            ]
          ]
        }
      ]
    },
    "explanation": "Increasing free particles from 2 to 7 creates a huge positive ΔS, making ΔG = ΔH − TΔS strongly negative."
  },
  {
    "id": "al-chem-q16",
    "subtopicId": "al-chem-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "When 2-bromopropane is heated under reflux with HOT ETHANOLIC KOH, what type of mechanism and organic product are favoured?",
    "options": [
      "Nucleophilic substitution forming propan-2-ol",
      "Elimination forming propene",
      "Free radical substitution forming 1,2-dibromopropane",
      "Electrophilic substitution forming benzene"
    ],
    "correctIndex": 1,
    "explanation": "Hot ethanolic OH⁻ acts as a base (eliminating HBr) to form propene; warm aqueous OH⁻ would act as a nucleophile to yield propan-2-ol."
  },
  {
    "id": "al-chem-q17",
    "subtopicId": "al-chem-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does nucleophilic addition of KCN / H⁺ to ethanal produce a racemic mixture that shows no optical activity?",
    "options": [
      "The product has no chiral carbon centre",
      "The planar C=O group is attacked with equal probability from above and below, producing a 50:50 mixture of both enantiomers whose rotations cancel",
      "CN⁻ only attacks from the top face",
      "Ethanal is already optically active"
    ],
    "correctIndex": 1,
    "explanation": "Equal attack on either side of the trigonal planar C=O forms equal amounts of (+) and (−) 2-hydroxypropanenitrile enantiomers."
  },
  {
    "id": "al-chem-q18",
    "subtopicId": "al-chem-8-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is phenylamine (C₆H₅NH₂) a significantly WEAKER base than ethylamine (CH₃CH₂NH₂)?",
    "options": [
      "The ethyl group withdraws electrons from nitrogen",
      "The nitrogen lone pair in phenylamine partially delocalises into the benzene π-ring, making it far less available to accept a proton",
      "Phenylamine has no lone pair on nitrogen",
      "Benzene rings cannot form hydrogen bonds with H⁺"
    ],
    "correctIndex": 1,
    "explanation": "Delocalisation of the N lone pair into the aromatic ring reduces electron density on N, whereas the ethyl group donates electron density via the positive inductive effect."
  },
  {
    "id": "al-chem-q19",
    "subtopicId": "al-chem-8-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "In a ¹H NMR spectrum, a triplet of integration 3H paired with a quartet of integration 2H is the classic diagnostic signature of which functional group?",
    "options": [
      "An isopropyl group, –CH(CH₃)₂",
      "An ethyl group, –CH₂CH₃",
      "A tert-butyl group, –C(CH₃)₃",
      "A carboxylic acid group, –COOH"
    ],
    "correctIndex": 1,
    "explanation": "By the n+1 rule, CH₃ (next to 2 H on CH₂) splits into a 3H triplet, while CH₂ (next to 3 H on CH₃) splits into a 2H quartet."
  },
  {
    "id": "al-chem-q20",
    "subtopicId": "al-chem-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does Chromium (Z = 24) adopt the electronic configuration [Ar] 3d⁵ 4s¹ rather than [Ar] 3d⁴ 4s²?",
    "options": [
      "The 4s orbital can hold a maximum of one electron",
      "A half-filled 3d⁵ sub-shell minimises electron-electron repulsion and confers extra exchange stability",
      "Chromium is a p-block non-metal",
      "The 3d orbitals lie below the 3p sub-shell in energy"
    ],
    "correctIndex": 1,
    "explanation": "Placing one electron in each of the five 3d orbitals (3d⁵ 4s¹) avoids spin-pair repulsion in 4s² and gains half-filled d-subshell stability."
  },
  {
    "id": "al-chem-q21",
    "subtopicId": "al-chem-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the electrospray ionisation equation in Time-of-Flight (TOF) mass spectrometry.",
    "segments": [
      "During electrospray ionisation, sample molecules dissolved in a volatile polar solvent gain a ",
      " to form ",
      " ions with a molecular mass peak at Mr + 1."
    ],
    "wordBank": [
      "proton",
      "XH⁺",
      "neutron",
      "X²⁻",
      "electron"
    ],
    "answers": [
      "proton",
      "XH⁺"
    ],
    "explanation": "Electrospray protonates sample molecules via X(g) + H⁺ → XH⁺(g) without fragmentation, giving a peak at m/z = Mr + 1."
  },
  {
    "id": "al-chem-q22",
    "subtopicId": "al-chem-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A burette has a reading uncertainty of ±0.05 cm³ per reading. For a single titration delivering 25.00 cm³, what is the percentage apparatus uncertainty?",
    "options": [
      "0.10%",
      "0.20%",
      "0.40%",
      "0.80%"
    ],
    "correctIndex": 2,
    "explanation": "A titre requires TWO readings (initial and final), giving total uncertainty = 2 × 0.05 = ±0.10 cm³. Percentage uncertainty = (0.10 / 25.00) × 100 = 0.40%."
  },
  {
    "id": "al-chem-q23",
    "subtopicId": "al-chem-3-1",
    "type": "short-answer",
    "marks": 3,
    "prompt": "Explain using VSEPR theory why a water molecule (H₂O) has a bond angle of 104.5° whereas a methane molecule (CH₄) has a bond angle of 109.5°.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Oxygen in H₂O has 2 bonding pairs and 2 lone pairs of electrons (whereas C in CH₄ has 4 bonding pairs and 0 lone pairs). Electron pairs repel to get as far apart as possible, and lone pairs repel more strongly than bonding pairs (LP–LP > LP–BP > BP–BP), compressing the angle by ~2.5° per lone pair to 104.5°.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "H₂O has 2 bonding pairs and 2 lone pairs (CH₄ has 4 BP, 0 LP)",
          "requiredKeywordGroups": [
            [
              "2 bonding",
              "two bonding"
            ],
            [
              "2 lone",
              "two lone"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Electron pairs repel to maximum separation",
          "requiredKeywordGroups": [
            [
              "repel"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Lone pairs repel more strongly than bonding pairs",
          "requiredKeywordGroups": [
            [
              "lone pair"
            ],
            [
              "more",
              "stronger",
              "greater"
            ]
          ]
        }
      ]
    },
    "explanation": "Two lone pairs on O exert stronger repulsion than bonding pairs, reducing the tetrahedral 109.5° angle by 2 × 2.5° = 5° to 104.5°."
  },
  {
    "id": "al-chem-q24",
    "subtopicId": "al-chem-3-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select TWO molecules that can form intermolecular hydrogen bonds with themselves in the pure liquid state.",
    "options": [
      "Ammonia (NH₃)",
      "Hydrogen fluoride (HF)",
      "Propanone (CH₃COCH₃)",
      "Trichloromethane (CHCl₃)"
    ],
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Hydrogen bonding requires a hydrogen atom covalently bonded directly to a strongly electronegative N, O, or F atom carrying a lone pair."
  },
  {
    "id": "al-chem-q25",
    "subtopicId": "al-chem-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "When 0.0200 mol of propan-1-ol is burned underneath a calorimeter containing 150 g of water (c = 4.18 J g⁻¹ K⁻¹), the water temperature rises by 32.0 K. Calculate the experimental enthalpy of combustion ΔcH in kJ mol⁻¹.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "q = mcΔT = 150 × 4.18 × 32.0 = 20,064 J = 20.064 kJ. ΔcH = −20.064 ÷ 0.0200 = −1003 kJ mol⁻¹.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "q = 20,064 J (or 20.1 kJ)",
          "requiredKeywordGroups": [
            [
              "20064",
              "20,064",
              "20.06",
              "20.1"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "ΔcH = −1003 kJ mol⁻¹ (accept −1000 to −1005)",
          "numericMatch": {
            "value": -1003,
            "tolerance": 5
          }
        }
      ]
    },
    "explanation": "q = 150 × 4.18 × 32 = 20.064 kJ; dividing by 0.0200 mol with an exothermic minus sign gives −1003 kJ mol⁻¹."
  },
  {
    "id": "al-chem-q26",
    "subtopicId": "al-chem-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "An equilibrium mixture at total pressure 400 kPa contains 1.50 mol of N₂, 3.50 mol of H₂, and 5.00 mol of NH₃. Calculate the partial pressure of NH₃ in kPa.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Total gas moles = 1.50 + 3.50 + 5.00 = 10.00 mol. Mole fraction x(NH₃) = 5.00 ÷ 10.00 = 0.500. Partial pressure p(NH₃) = 0.500 × 400 = 200 kPa.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Mole fraction x(NH₃) = 0.50",
          "requiredKeywordGroups": [
            [
              "0.5",
              "5/10",
              "5.00 / 10"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "p(NH₃) = 200 kPa",
          "numericMatch": {
            "value": 200,
            "tolerance": 0.5
          }
        }
      ]
    },
    "explanation": "x(NH₃) = 5.00 / 10.00 = 0.500, so p(NH₃) = 0.500 × 400 kPa = 200 kPa."
  },
  {
    "id": "al-chem-q27",
    "subtopicId": "al-chem-7-1",
    "type": "matching",
    "marks": 3,
    "prompt": "Match each Period 3 oxide to its bonding structure and the approximate pH of its resulting aqueous mixture.",
    "pairs": [
      {
        "left": "Sodium oxide (Na₂O)",
        "right": "Giant ionic lattice — strongly alkaline solution (pH 13–14)"
      },
      {
        "left": "Aluminium oxide (Al₂O₃)",
        "right": "Insoluble amphoteric ionic/covalent lattice — pH 7 in water"
      },
      {
        "left": "Phosphorus(V) oxide (P₄O₁₀)",
        "right": "Simple molecular covalent — strongly acidic H₃PO₄ solution (pH 1)"
      }
    ],
    "explanation": "Metal oxides on the left are ionic and basic; Al₂O₃ is insoluble and amphoteric; non-metal oxides on the right are covalent and strongly acidic."
  },
  {
    "id": "al-chem-q28",
    "subtopicId": "al-chem-7-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why are aqueous solutions of scandium(III) ions (Sc³⁺) and zinc(II) ions (Zn²⁺) colourless?",
    "options": [
      "They do not form coordinate bonds with water molecules",
      "Sc³⁺ has an empty 3d⁰ sub-shell and Zn²⁺ has a full 3d¹⁰ sub-shell, so neither can undergo d–d electron transitions",
      "Their ΔE gap lies in the gamma-ray region of the spectrum",
      "They precipitate immediately as black solids in water"
    ],
    "correctIndex": 1,
    "explanation": "Visible d–d absorption requires a partially filled 3d sub-shell (3d¹ to 3d⁹); 3d⁰ has no d-electrons to excite and 3d¹⁰ has no empty d-orbital space."
  },
  {
    "id": "al-chem-q29",
    "subtopicId": "al-chem-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the major organic product formed when propene (CH₃CH=CH₂) reacts with hydrogen bromide (HBr) via electrophilic addition?",
    "options": [
      "1-bromopropane (via a primary carbocation)",
      "2-bromopropane (via a more stable secondary carbocation)",
      "1,2-dibromopropane",
      "Propan-2-ol"
    ],
    "correctIndex": 1,
    "explanation": "By Markovnikov’s rule, H⁺ adds to CH₂ to form the more stable secondary carbocation CH₃C⁺HCH₃ (stabilised by two alkyl positive inductive groups), yielding 2-bromopropane."
  },
  {
    "id": "al-chem-q30",
    "subtopicId": "al-chem-8-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the industrial rationale for using ethanoic anhydride instead of ethanoyl chloride in aspirin manufacture.",
    "segments": [
      "Ethanoic anhydride is cheaper, less corrosive, reacts more safely with water, and produces ",
      " as a by-product instead of toxic, corrosive ",
      " gas."
    ],
    "wordBank": [
      "ethanoic acid",
      "hydrogen chloride",
      "chlorine",
      "sulfuric acid",
      "ammonia"
    ],
    "answers": [
      "ethanoic acid",
      "hydrogen chloride"
    ],
    "explanation": "Ethanoyl chloride releases corrosive misty HCl fumes, whereas ethanoic anhydride releases mild ethanoic acid."
  },
  {
    "id": "al-chem-q31",
    "subtopicId": "al-chem-8-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "How many distinct peaks appear in the ¹³C NMR spectrum of propanone (CH₃COCH₃)?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "correctIndex": 1,
    "explanation": "By symmetry, both methyl carbons (CH₃) are chemically equivalent (1 peak) and the central carbonyl carbon (C=O) forms the 2nd peak."
  },
  {
    "id": "al-chem-q-1-1-3",
    "subtopicId": "al-chem-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Write the full electron configuration of a Chromium atom (Cr, Z = 24) and explain why it ends in 3d⁵ 4s¹.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹ — a half-filled 3d sub-shell confers extra stability / lowers electron–electron repulsion.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct 3d⁵ 4s¹ ending",
          "requiredKeywordGroups": [
            [
              "3d5 4s1",
              "3d⁵ 4s¹",
              "4s1 3d5",
              "4s¹ 3d⁵"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Half-filled 3d stability / lower repulsion",
          "requiredKeywordGroups": [
            [
              "half",
              "stability",
              "stable",
              "repulsion"
            ]
          ]
        }
      ]
    },
    "explanation": "Cr promotes one 4s electron to achieve a more stable half-filled 3d⁵ sub-shell."
  },
  {
    "id": "al-chem-q-1-1-4",
    "subtopicId": "al-chem-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the electron configuration of the Cu²⁺ ion (Cu has Z = 29)?",
    "options": [
      "[Ar] 3d⁸ 4s¹",
      "[Ar] 3d⁹",
      "[Ar] 3d⁷ 4s²",
      "[Ar] 3d¹⁰"
    ],
    "correctIndex": 1,
    "explanation": "Cu is [Ar] 3d¹⁰ 4s¹; removing 4s¹ and one 3d electron leaves [Ar] 3d⁹."
  },
  {
    "id": "al-chem-q-1-1-5",
    "subtopicId": "al-chem-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the orbital filling rules:",
    "segments": [
      "A single orbital holds at most ",
      " electrons with opposite spins; a d sub-shell contains ",
      " orbitals (max 10 electrons)."
    ],
    "wordBank": [
      "2",
      "5",
      "3",
      "6"
    ],
    "answers": [
      "2",
      "5"
    ],
    "explanation": "Pauli exclusion limits each orbital to 2 e⁻; d has 5 degenerate orbitals."
  },
  {
    "id": "al-chem-q-1-2-3",
    "subtopicId": "al-chem-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why the first ionisation energy of sulfur (S) is LOWER than that of phosphorus (P).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Sulfur has a pair of electrons in one 3p orbital (3p⁴), whereas phosphorus has singly occupied 3p orbitals (3p³); spin-pair repulsion between the paired electrons makes it easier to remove one electron from sulfur.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Paired electron in sulfur 3p orbital",
          "requiredKeywordGroups": [
            [
              "pair",
              "3p4",
              "3p⁴"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Spin-pair / electron-electron repulsion reduces energy needed",
          "requiredKeywordGroups": [
            [
              "repulsion",
              "repel"
            ]
          ]
        }
      ]
    },
    "explanation": "Spin-pair repulsion in S (3p⁴) lowers IE₁ compared to P (3p³)."
  },
  {
    "id": "al-chem-q-1-2-4",
    "subtopicId": "al-chem-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In a TOF mass spectrometer, why do lighter 1+ ions reach the detector before heavier 1+ ions?",
    "options": [
      "Lighter ions are given more kinetic energy",
      "All 1+ ions receive the same kinetic energy, so lighter ions move at higher velocity",
      "Heavier ions lose charge in the flight tube",
      "Lighter ions travel a shorter flight tube"
    ],
    "correctIndex": 1,
    "explanation": "Same KE = ½mv² ⇒ smaller m means larger v ⇒ shorter drift time t = d/v."
  },
  {
    "id": "al-chem-q-1-2-5",
    "subtopicId": "al-chem-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the electrospray & IE jump rules:",
    "segments": [
      "Electrospray ionisation adds a proton to form ",
      " ions; a massive jump between IE₃ and IE₄ places the element in Group ",
      "."
    ],
    "wordBank": [
      "MH⁺",
      "3",
      "M⁻",
      "4"
    ],
    "answers": [
      "MH⁺",
      "3"
    ],
    "explanation": "Electrospray protonates M → MH⁺; 3 outer electrons removed before inner shell ⇒ Group 3."
  },
  {
    "id": "al-chem-q-2-1-3",
    "subtopicId": "al-chem-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Calculate the volume in cm³ occupied by 0.020 mol of CO₂ gas at 100 kPa and 27 °C (R = 8.31 J K⁻¹ mol⁻¹).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "T = 300 K, p = 100,000 Pa. V = (0.020 × 8.31 × 300) / 100,000 = 4.986 × 10⁻⁴ m³ = 499 cm³.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Converts T = 300 K and p = 100,000 Pa",
          "requiredKeywordGroups": [
            [
              "300",
              "100000",
              "100,000"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "499 cm³ (or 4.99×10⁻⁴ m³)",
          "numericMatch": {
            "value": 499,
            "tolerance": 5
          }
        }
      ]
    },
    "explanation": "V = nRT/p = 4.986 × 10⁻⁴ m³ × 10⁶ = 499 cm³."
  },
  {
    "id": "al-chem-q-2-1-4",
    "subtopicId": "al-chem-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A titration uses a burette with reading uncertainty ±0.05 cm³ per reading and gives a titre of 25.00 cm³. What is the percentage uncertainty in the titre?",
    "options": [
      "0.20%",
      "0.40%",
      "0.05%",
      "0.10%"
    ],
    "correctIndex": 1,
    "explanation": "Two readings (start + end) ⇒ ΔV = 0.10 cm³ ⇒ (0.10 / 25.00) × 100% = 0.40%."
  },
  {
    "id": "al-chem-q-2-1-5",
    "subtopicId": "al-chem-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the pV = nRT unit conversions:",
    "segments": [
      "To convert cm³ into m³, multiply by 10 to the power of ",
      "; to convert °C into Kelvin, add ",
      "."
    ],
    "wordBank": [
      "−6",
      "273",
      "−3",
      "100"
    ],
    "answers": [
      "−6",
      "273"
    ],
    "explanation": "1 m³ = 1,000,000 cm³ (10⁻⁶); K = °C + 273."
  },
  {
    "id": "al-chem-q-3-1-3",
    "subtopicId": "al-chem-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State the shape and bond angle of H₂O and explain why its bond angle is smaller than CH₄ (109.5°).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Bent / V-shaped / non-linear with bond angle 104.5°. Oxygen has 2 bonding pairs and 2 lone pairs; lone pairs repel more strongly than bonding pairs, pushing the O–H bonds closer together by ~2.5° per lone pair.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Bent / V-shaped AND 104.5°",
          "requiredKeywordGroups": [
            [
              "bent",
              "v-shaped",
              "non-linear"
            ],
            [
              "104.5",
              "104"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "2 lone pairs repel more strongly than bonding pairs",
          "requiredKeywordGroups": [
            [
              "lone pair"
            ],
            [
              "repel"
            ]
          ]
        }
      ]
    },
    "explanation": "2 BP + 2 LP ⇒ bent, 104.5° due to stronger LP–LP and LP–BP repulsion."
  },
  {
    "id": "al-chem-q-3-1-4",
    "subtopicId": "al-chem-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the shape and bond angle of XeF₄ (4 bonding pairs, 2 lone pairs around Xe)?",
    "options": [
      "Tetrahedral, 109.5°",
      "Square planar, 90°",
      "See-saw, 102°",
      "Octahedral, 90°"
    ],
    "correctIndex": 1,
    "explanation": "6 electron pairs arrange octahedrally; the 2 lone pairs sit opposite (180° apart) leaving 4 fluorines in a square planar 90° arrangement."
  },
  {
    "id": "al-chem-q-3-1-5",
    "subtopicId": "al-chem-3-1",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each molecule/ion to its VSEPR shape and angle:",
    "pairs": [
      {
        "left": "BF₃ (3 BP, 0 LP)",
        "right": "Trigonal planar, 120°"
      },
      {
        "left": "NH₄⁺ (4 BP, 0 LP)",
        "right": "Tetrahedral, 109.5°"
      },
      {
        "left": "NH₃ (3 BP, 1 LP)",
        "right": "Trigonal pyramidal, 107°"
      },
      {
        "left": "SF₆ (6 BP, 0 LP)",
        "right": "Octahedral, 90°"
      }
    ],
    "explanation": "Count bonding + lone pairs around central atom to assign VSEPR geometry."
  },
  {
    "id": "al-chem-q-3-2-3",
    "subtopicId": "al-chem-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why ice is LESS DENSE than liquid water at 0 °C.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "In ice, hydrogen bonds hold water molecules in an open tetrahedral/hexagonal lattice where molecules are spaced further apart than in liquid water, giving a larger volume for the same mass.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Hydrogen bonds hold molecules in an open lattice",
          "requiredKeywordGroups": [
            [
              "hydrogen bond"
            ],
            [
              "open",
              "lattice",
              "hexagonal"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Molecules further apart / larger volume for same mass",
          "requiredKeywordGroups": [
            [
              "further apart",
              "spaced",
              "volume",
              "more space"
            ]
          ]
        }
      ]
    },
    "explanation": "Open hydrogen-bonded crystal lattice makes ice occupy more volume than liquid water."
  },
  {
    "id": "al-chem-q-3-2-4",
    "subtopicId": "al-chem-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which of the following molecules contains polar bonds yet is NON-POLAR overall?",
    "options": [
      "NH₃",
      "H₂O",
      "CCl₄",
      "CHCl₃"
    ],
    "correctIndex": 2,
    "explanation": "CCl₄ is perfectly symmetrical tetrahedral, so the four C–Cl bond dipoles cancel out completely."
  },
  {
    "id": "al-chem-q-3-2-5",
    "subtopicId": "al-chem-3-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the hydrogen bonding rule:",
    "segments": [
      "Hydrogen bonding occurs only when hydrogen is covalently bonded to ",
      ", oxygen, or ",
      "."
    ],
    "wordBank": [
      "fluorine",
      "nitrogen",
      "chlorine",
      "carbon"
    ],
    "answers": [
      "fluorine",
      "nitrogen"
    ],
    "explanation": "F, O, and N are the three small, highly electronegative atoms with lone pairs."
  },
  {
    "id": "al-chem-q-4-1-3",
    "subtopicId": "al-chem-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain TWO reasons why an enthalpy change calculated from mean bond enthalpies often differs from the value found via Hess’s law using standard enthalpy of formation data.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Mean bond enthalpies are average values across many different molecules (not exact for that specific compound). 2. Bond enthalpies apply only to gaseous species, whereas standard formation enthalpies apply to standard states (liquids/solids).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Averaged across a range of different molecules",
          "requiredKeywordGroups": [
            [
              "average",
              "mean",
              "different molecule",
              "range"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Applies only to gases / ignores state changes",
          "requiredKeywordGroups": [
            [
              "gas",
              "gaseous",
              "state"
            ]
          ]
        }
      ]
    },
    "explanation": "Mean values are averages AND strictly for gaseous molecules."
  },
  {
    "id": "al-chem-q-4-1-4",
    "subtopicId": "al-chem-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given standard enthalpies of COMBUSTION (Δ_c H°), which formula correctly calculates Δ_r H° for a reaction?",
    "options": [
      "Σ Δ_c H°(products) − Σ Δ_c H°(reactants)",
      "Σ Δ_c H°(reactants) − Σ Δ_c H°(products)",
      "Σ Δ_c H°(reactants) + Σ Δ_c H°(products)",
      "Σ Δ_c H°(products) ÷ Σ Δ_c H°(reactants)"
    ],
    "correctIndex": 1,
    "explanation": "Combustion arrows point DOWN to combustion products ⇒ Reactants − Products."
  },
  {
    "id": "al-chem-q-4-1-5",
    "subtopicId": "al-chem-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the enthalpy rules:",
    "segments": [
      "Using enthalpies of formation, Δ_r H° = Σ Δ_f H°(products) − Σ Δ_f H°(",
      "); Δ_f H° of any element in its standard state is ",
      " kJ mol⁻¹."
    ],
    "wordBank": [
      "reactants",
      "0",
      "elements",
      "−100"
    ],
    "answers": [
      "reactants",
      "0"
    ],
    "explanation": "Formation = Products − Reactants; elements in standard state have Δ_f H° = 0."
  },
  {
    "id": "al-chem-q-4-2-3",
    "subtopicId": "al-chem-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A reaction has ΔH = +90 kJ mol⁻¹ and ΔS = +180 J K⁻¹ mol⁻¹. Calculate the minimum temperature (in K) at which the reaction becomes feasible.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Convert ΔS = 0.180 kJ K⁻¹ mol⁻¹; set ΔG = 0 → T = ΔH / ΔS = 90 / 0.180 = 500 K.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Converts ΔS to 0.180 kJ K⁻¹ mol⁻¹",
          "requiredKeywordGroups": [
            [
              "0.18",
              "1000"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "T = 500 K",
          "numericMatch": {
            "value": 500,
            "tolerance": 2
          }
        }
      ]
    },
    "explanation": "T = ΔH / ΔS = 90 / 0.180 = 500 K."
  },
  {
    "id": "al-chem-q-4-2-4",
    "subtopicId": "al-chem-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is the experimental lattice enthalpy of AgI significantly more exothermic than its theoretical perfect-ionic value?",
    "options": [
      "Ag⁺ and I⁻ are identical in size",
      "Ag⁺ polarises the large I⁻ ion, giving significant covalent character",
      "Iodine is a gas at room temperature",
      "Born-Haber cycles ignore electron affinity"
    ],
    "correctIndex": 1,
    "explanation": "Polarisation of the large iodide ion adds extra covalent bonding strength."
  },
  {
    "id": "al-chem-q-4-2-5",
    "subtopicId": "al-chem-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the ΔG vs T graph rules:",
    "segments": [
      "On a graph of ΔG against Kelvin temperature T, the y-intercept equals ",
      " and the gradient equals ",
      "."
    ],
    "wordBank": [
      "ΔH",
      "−ΔS",
      "+ΔS",
      "Ea"
    ],
    "answers": [
      "ΔH",
      "−ΔS"
    ],
    "explanation": "ΔG = (−ΔS)T + ΔH matches y = mx + c."
  },
  {
    "id": "al-chem-q-5-1-3",
    "subtopicId": "al-chem-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A reaction has rate equation Rate = k[NO]²[O₂]. State the overall order and the units of the rate constant k (time in seconds).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Overall order = 2 + 1 = 3 (third order); units of k = mol⁻² dm⁶ s⁻¹.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Overall order = 3",
          "numericMatch": {
            "value": 3,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "mol⁻² dm⁶ s⁻¹",
          "requiredKeywordGroups": [
            [
              "mol-2",
              "mol⁻²"
            ],
            [
              "dm6",
              "dm⁶"
            ]
          ]
        }
      ]
    },
    "explanation": "(mol dm⁻³ s⁻¹) / (mol³ dm⁻⁹) = mol⁻² dm⁶ s⁻¹."
  },
  {
    "id": "al-chem-q-5-1-4",
    "subtopicId": "al-chem-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "On an Arrhenius graph of ln(k) against 1/T, what does the gradient equal?",
    "options": [
      "−Ea",
      "−Ea / R",
      "+Ea / R",
      "ln A"
    ],
    "correctIndex": 1,
    "explanation": "ln k = (−Ea/R)(1/T) + ln A ⇒ gradient = −Ea/R."
  },
  {
    "id": "al-chem-q-5-1-5",
    "subtopicId": "al-chem-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the kinetics diagnostics:",
    "segments": [
      "A concentration–time graph with a CONSTANT half-life indicates a ",
      "-order reactant; the slowest step in a mechanism is the ",
      " step."
    ],
    "wordBank": [
      "first",
      "rate-determining",
      "zero",
      "catalyst"
    ],
    "answers": [
      "first",
      "rate-determining"
    ],
    "explanation": "Constant t_½ = 1st order; RDS controls overall rate equation."
  },
  {
    "id": "al-chem-q-6-1-3",
    "subtopicId": "al-chem-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "For the exothermic reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (ΔH = −197 kJ mol⁻¹), state and explain the effect on the VALUE of Kp of: (a) increasing temperature, and (b) doubling total pressure.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "(a) Increasing temperature decreases Kp because the exothermic forward reaction is opposed (shifts left). (b) Doubling total pressure has NO effect on Kp because Kp depends ONLY on temperature.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Higher T decreases Kp (exothermic shifts left)",
          "requiredKeywordGroups": [
            [
              "decrease",
              "smaller",
              "lower"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Higher pressure causes NO change to Kp",
          "requiredKeywordGroups": [
            [
              "no change",
              "unchanged",
              "constant",
              "same",
              "no effect"
            ]
          ]
        }
      ]
    },
    "explanation": "ONLY temperature alters the numerical value of Kc or Kp."
  },
  {
    "id": "al-chem-q-6-1-4",
    "subtopicId": "al-chem-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A gas mixture at total pressure 200 kPa contains 1.0 mol N₂, 3.0 mol H₂, and 1.0 mol NH₃. What is the partial pressure of H₂?",
    "options": [
      "60 kPa",
      "120 kPa",
      "40 kPa",
      "150 kPa"
    ],
    "correctIndex": 1,
    "explanation": "Total moles = 5.0; x(H₂) = 3/5 = 0.6; p(H₂) = 0.6 × 200 = 120 kPa."
  },
  {
    "id": "al-chem-q-6-1-5",
    "subtopicId": "al-chem-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the equilibrium constant rules:",
    "segments": [
      "The ONLY variable that changes the numerical value of Kc or Kp is ",
      "; adding a catalyst increases the ",
      " of reaching equilibrium without changing yield."
    ],
    "wordBank": [
      "temperature",
      "rate",
      "pressure",
      "concentration"
    ],
    "answers": [
      "temperature",
      "rate"
    ],
    "explanation": "Only T alters Kc/Kp; catalysts speed forward & reverse rates equally."
  },
  {
    "id": "al-chem-q-6-2-3",
    "subtopicId": "al-chem-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "At 50 °C, pure water has pH = 6.63. Explain why pure water at 50 °C is STILL neutral despite having pH < 7.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Water dissociation (H₂O ⇌ H⁺ + OH⁻) is endothermic, so heating shifts equilibrium right increasing both [H⁺] and [OH⁻] equally; because [H⁺] still equals [OH⁻], the water remains strictly neutral.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "[H⁺] = [OH⁻] (equal concentrations)",
          "requiredKeywordGroups": [
            [
              "[h+] = [oh-]",
              "h+ = oh-",
              "equal"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Endothermic dissociation increases Kw / [H⁺]",
          "requiredKeywordGroups": [
            [
              "endothermic",
              "kw",
              "dissociation"
            ]
          ]
        }
      ]
    },
    "explanation": "Neutrality means [H⁺] = [OH⁻], NOT pH = 7 at every temperature!"
  },
  {
    "id": "al-chem-q-6-2-4",
    "subtopicId": "al-chem-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which indicator is suitable for titrating ethanoic acid (weak acid) with NaOH (strong base)?",
    "options": [
      "Methyl orange (pH 3.1–4.4)",
      "Phenolphthalein (pH 8.3–10.0)",
      "Both methyl orange and phenolphthalein",
      "Neither indicator works"
    ],
    "correctIndex": 1,
    "explanation": "Weak acid + strong base has its vertical jump around pH 7–11, matching phenolphthalein."
  },
  {
    "id": "al-chem-q-6-2-5",
    "subtopicId": "al-chem-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the buffer & pKa rules:",
    "segments": [
      "At the half-equivalence point of a weak acid titration, pH equals ",
      "; an acidic buffer consists of a weak acid and its ",
      " base (salt)."
    ],
    "wordBank": [
      "pKa",
      "conjugate",
      "7",
      "strong"
    ],
    "answers": [
      "pKa",
      "conjugate"
    ],
    "explanation": "At half-equivalence [HA] = [A⁻] ⇒ pH = pKa."
  },
  {
    "id": "al-chem-q-7-1-3",
    "subtopicId": "al-chem-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Describe how aqueous ammonia is used to distinguish between AgCl, AgBr, and AgI precipitates formed with AgNO₃.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "AgCl (white) dissolves in dilute NH₃; AgBr (cream) is insoluble in dilute NH₃ but dissolves in concentrated NH₃; AgI (yellow) remains insoluble even in concentrated NH₃.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "AgCl dissolves in dilute NH₃",
          "requiredKeywordGroups": [
            [
              "agcl",
              "white"
            ],
            [
              "dilute"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "AgBr dissolves in conc NH₃; AgI insoluble in both",
          "requiredKeywordGroups": [
            [
              "agbr",
              "cream",
              "conc"
            ],
            [
              "agi",
              "yellow",
              "insoluble"
            ]
          ]
        }
      ]
    },
    "explanation": "Dilute NH₃ dissolves AgCl; conc. NH₃ dissolves AgBr; AgI stays insoluble."
  },
  {
    "id": "al-chem-q-7-1-4",
    "subtopicId": "al-chem-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which gaseous sulfur reduction product is formed ONLY with iodide ions (I⁻) and conc. H₂SO₄ (smelling of rotten eggs)?",
    "options": [
      "SO₂",
      "H₂S",
      "SO₃",
      "HI"
    ],
    "correctIndex": 1,
    "explanation": "I⁻ is strong enough to reduce S(+6) all the way to S(−2) in H₂S (rotten-egg smell)."
  },
  {
    "id": "al-chem-q-7-1-5",
    "subtopicId": "al-chem-7-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Group 2 solubility trends:",
    "segments": [
      "Down Group 2, hydroxide solubility ",
      " whereas sulfate solubility ",
      "."
    ],
    "wordBank": [
      "increases",
      "decreases",
      "stays constant",
      "reverses"
    ],
    "answers": [
      "increases",
      "decreases"
    ],
    "explanation": "Ba(OH)₂ is most soluble hydroxide; BaSO₄ is least soluble sulfate."
  },
  {
    "id": "al-chem-q-7-2-3",
    "subtopicId": "al-chem-7-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why replacing six H₂O ligands around [Fe(H₂O)₆]²⁺ with a single hexadentate EDTA⁴⁻ ligand is strongly thermodynamically favourable.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Replacing 6 monodentate ligands with 1 EDTA⁴⁻ increases the number of independent particles in solution from 2 to 7, producing a large positive entropy change (+ΔS); since ΔH ≈ 0, ΔG = ΔH − TΔS is strongly negative (chelate effect).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Number of particles/moles in solution increases (2 → 7)",
          "requiredKeywordGroups": [
            [
              "increase",
              "more particle",
              "more molecule",
              "7"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Large positive entropy change (+ΔS) makes ΔG negative",
          "requiredKeywordGroups": [
            [
              "entropy",
              "δs",
              "ds"
            ],
            [
              "negative",
              "δg",
              "dg",
              "feasible"
            ]
          ]
        }
      ]
    },
    "explanation": "The chelate effect is driven by +ΔS from liberating more free ligand molecules."
  },
  {
    "id": "al-chem-q-7-2-4",
    "subtopicId": "al-chem-7-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is an aqueous solution of Zn²⁺ ions completely COLOURLESS?",
    "options": [
      "Zn²⁺ has no ligands",
      "Zn²⁺ has a completely full 3d¹⁰ sub-shell, preventing d–d transitions",
      "Zn²⁺ absorbs all visible wavelengths",
      "Zn²⁺ is a Group 2 metal"
    ],
    "correctIndex": 1,
    "explanation": "Colour requires a partially filled d sub-shell (d¹–d⁹); Zn²⁺ is d¹⁰ so no d–d promotion can occur."
  },
  {
    "id": "al-chem-q-7-2-5",
    "subtopicId": "al-chem-7-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Fe³⁺ acidity explanation:",
    "segments": [
      "Fe³⁺ has a higher ",
      " density than Fe²⁺, so it ",
      " coordinated O–H bonds more strongly, releasing more H⁺ ions."
    ],
    "wordBank": [
      "charge",
      "polarises",
      "mass",
      "breaks"
    ],
    "answers": [
      "charge",
      "polarises"
    ],
    "explanation": "Higher charge density on M³⁺ polarises H₂O ligands more strongly (pH ~2 vs ~5)."
  },
  {
    "id": "al-chem-q-8-1-3",
    "subtopicId": "al-chem-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why 2-bromopropane is the MAJOR product when propene reacts with HBr.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "2-bromopropane forms via a secondary carbocation intermediate, which is more stable than the primary carbocation (leading to 1-bromopropane) due to the positive inductive effect of two electron-donating alkyl groups.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Secondary carbocation is more stable than primary carbocation",
          "requiredKeywordGroups": [
            [
              "secondary"
            ],
            [
              "primary",
              "stable",
              "stability"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Positive inductive effect / electron-releasing alkyl groups",
          "requiredKeywordGroups": [
            [
              "inductive",
              "alkyl",
              "electron-donating",
              "electron-releasing"
            ]
          ]
        }
      ]
    },
    "explanation": "3° > 2° > 1° carbocation stability governs Markovnikov major products."
  },
  {
    "id": "al-chem-q-8-1-4",
    "subtopicId": "al-chem-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which reagent and conditions convert 1-bromobutane into BUT-1-ENE via elimination?",
    "options": [
      "Warm aqueous NaOH",
      "Hot ethanolic NaOH under reflux",
      "Cold dilute H₂SO₄",
      "KCN in aqueous ethanol"
    ],
    "correctIndex": 1,
    "explanation": "Hot ethanolic OH⁻ acts as a base (elimination → alkene); aqueous OH⁻ substitutes (→ alcohol)."
  },
  {
    "id": "al-chem-q-8-1-5",
    "subtopicId": "al-chem-8-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the haloalkane & radical rules:",
    "segments": [
      "Iodoalkanes hydrolyse fastest because the C–I bond has the lowest bond ",
      "; UV light initiates chlorination of alkanes by ",
      " fission of Cl₂."
    ],
    "wordBank": [
      "enthalpy",
      "homolytic",
      "polarity",
      "heterolytic"
    ],
    "answers": [
      "enthalpy",
      "homolytic"
    ],
    "explanation": "Bond strength (enthalpy) controls hydrolysis speed; UV causes homolytic fission."
  },
  {
    "id": "al-chem-q-8-2-3",
    "subtopicId": "al-chem-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why reacting propanal with HCN (via KCN/H⁺) produces a product that shows NO optical activity despite containing a chiral carbon.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "The C=O group in propanal is planar, so the CN⁻ nucleophile attacks equally from above and below the plane, forming a 50:50 racemic mixture of both enantiomers whose optical rotations cancel out.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Planar C=O attacked equally from above and below",
          "requiredKeywordGroups": [
            [
              "planar",
              "flat"
            ],
            [
              "equal",
              "both side",
              "above and below"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Forms 50:50 racemic mixture (rotations cancel)",
          "requiredKeywordGroups": [
            [
              "racemic",
              "50:50",
              "50/50",
              "cancel"
            ]
          ]
        }
      ]
    },
    "explanation": "Equal attack on both faces of planar C=O yields an optically inactive racemate."
  },
  {
    "id": "al-chem-q-8-2-4",
    "subtopicId": "al-chem-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is ethanoic anhydride preferred over ethanoyl chloride for manufacturing aspirin industrially?",
    "options": [
      "It has a higher boiling point only",
      "It is cheaper, less corrosive, and does not produce toxic HCl fumes",
      "It is a stronger oxidising agent",
      "It reacts instantaneously with air"
    ],
    "correctIndex": 1,
    "explanation": "Ethanoic anhydride avoids dangerous corrosive HCl gas and is cheaper/safer."
  },
  {
    "id": "al-chem-q-8-2-5",
    "subtopicId": "al-chem-8-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the carbonyl & alcohol tests:",
    "segments": [
      "Warming an aldehyde with Tollens’ reagent produces a ",
      " mirror; heating a primary alcohol with acidified K₂Cr₂O₇ under ",
      " yields a carboxylic acid."
    ],
    "wordBank": [
      "silver",
      "reflux",
      "brick-red",
      "distillation"
    ],
    "answers": [
      "silver",
      "reflux"
    ],
    "explanation": "Tollens’ reduces Ag⁺ → Ag (silver mirror); reflux ensures full oxidation to RCOOH."
  },
  {
    "id": "al-chem-q-8-3-2",
    "subtopicId": "al-chem-8-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why ethylamine (CH₃CH₂NH₂) is a STRONGER base than ammonia (NH₃), whereas phenylamine (C₆H₅NH₂) is a WEAKER base than ammonia.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "In ethylamine, the electron-donating ethyl group (+I) increases electron density on the N lone pair making it more available to accept H⁺. In phenylamine, the N lone pair delocalises into the benzene ring, reducing its availability to accept H⁺.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Alkyl group pushes/donates electron density onto N lone pair",
          "requiredKeywordGroups": [
            [
              "ethyl",
              "alkyl",
              "inductive",
              "donat",
              "push"
            ],
            [
              "lone pair",
              "electron density"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Phenylamine lone pair delocalises into benzene ring",
          "requiredKeywordGroups": [
            [
              "delocalis"
            ],
            [
              "ring",
              "benzene"
            ]
          ]
        }
      ]
    },
    "explanation": "Alkyl (+I) raises N lone-pair availability; phenyl delocalisation lowers it."
  },
  {
    "id": "al-chem-q-8-3-3",
    "subtopicId": "al-chem-8-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Write the equation showing how the nitronium ion (NO₂⁺) electrophile is generated from conc. HNO₃ and conc. H₂SO₄.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "HNO₃ + H₂SO₄ → H₂NO₃⁺ + HSO₄⁻ → NO₂⁺ + H₂O + HSO₄⁻ (overall: HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Reactants HNO₃ + H₂SO₄",
          "requiredKeywordGroups": [
            [
              "hno3",
              "hno₃"
            ],
            [
              "h2so4",
              "h₂so₄"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Produces NO₂⁺ + HSO₄⁻ (+ H₂O / H₃O⁺)",
          "requiredKeywordGroups": [
            [
              "no2+",
              "no₂⁺"
            ],
            [
              "hso4",
              "hso₄"
            ]
          ]
        }
      ]
    },
    "explanation": "H₂SO₄ protonates HNO₃, which loses water to form NO₂⁺."
  },
  {
    "id": "al-chem-q-8-3-4",
    "subtopicId": "al-chem-8-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given Δ_hyd H(cyclohexene) = −120 kJ mol⁻¹ and Δ_hyd H(benzene) = −208 kJ mol⁻¹, what is benzene’s delocalisation stabilisation energy?",
    "options": [
      "88 kJ mol⁻¹",
      "152 kJ mol⁻¹",
      "360 kJ mol⁻¹",
      "208 kJ mol⁻¹"
    ],
    "correctIndex": 1,
    "explanation": "Predicted Kekulé = 3 × (−120) = −360 kJ mol⁻¹; difference = 360 − 208 = 152 kJ mol⁻¹."
  },
  {
    "id": "al-chem-q-8-3-5",
    "subtopicId": "al-chem-8-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the aromatic synthesis reagents:",
    "segments": [
      "Friedel–Crafts acylation uses an acyl chloride and anhydrous ",
      " catalyst; nitrobenzene is reduced to phenylamine using ",
      " and conc. HCl."
    ],
    "wordBank": [
      "AlCl₃",
      "Sn",
      "FeBr₃",
      "NaBH₄"
    ],
    "answers": [
      "AlCl₃",
      "Sn"
    ],
    "explanation": "Anhydrous AlCl₃ generates RCO⁺; Tin (Sn) + conc. HCl reduces −NO₂ to −NH₂."
  },
  {
    "id": "al-chem-q-8-4-3",
    "subtopicId": "al-chem-8-4",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State TWO reasons why tetramethylsilane (TMS, Si(CH₃)₄) is used as the reference standard in ¹H and ¹³C NMR spectroscopy.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "All 12 protons (and 4 carbons) are chemically equivalent giving a single sharp intense peak at δ = 0 ppm; it is chemically inert/non-toxic and volatile (easily evaporated to recover the sample); it absorbs upfield away from almost all organic signals.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Single sharp peak (12 equivalent H) at δ = 0 ppm",
          "requiredKeywordGroups": [
            [
              "single",
              "sharp",
              "12 equivalent",
              "one peak"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Inert / volatile / easily removed / away from organic peaks",
          "requiredKeywordGroups": [
            [
              "inert",
              "unreactive",
              "volatile",
              "evaporate",
              "upfield",
              "away"
            ]
          ]
        }
      ]
    },
    "explanation": "Single strong peak at 0 ppm + inert + volatile + non-overlapping."
  },
  {
    "id": "al-chem-q-8-4-4",
    "subtopicId": "al-chem-8-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which pair of ¹H NMR peaks is the unmistakable signature of an ETHYL group (CH₃CH₂−)?",
    "options": [
      "Two singlets (3H and 2H)",
      "A triplet (3H) and a quartet (2H)",
      "A doublet (6H) and a septet (1H)",
      "A doublet (3H) and a triplet (2H)"
    ],
    "correctIndex": 1,
    "explanation": "CH₃ has 2 adjacent H ⇒ triplet (3H); CH₂ has 3 adjacent H ⇒ quartet (2H)."
  },
  {
    "id": "al-chem-q-8-4-5",
    "subtopicId": "al-chem-8-4",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the NMR solvent & OH test rules:",
    "segments": [
      "Solvents like CDCl₃ are deuterated so they produce no ",
      " signal; shaking a sample with ",
      " makes –OH and –NH peaks disappear."
    ],
    "wordBank": [
      "¹H NMR",
      "D₂O",
      "IR",
      "NaOH"
    ],
    "answers": [
      "¹H NMR",
      "D₂O"
    ],
    "explanation": "Deuterium (²H) does not resonate at ¹H frequency; D₂O exchanges –OH to –OD."
  }
];

export const ALEVEL_CHEMISTRY_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "al-chem-fc-1",
    "subtopicId": "al-chem-1-1",
    "front": "Write the anomalous ground-state electron configurations of Cr (Z=24) and Cu (Z=29).",
    "backBullets": [
      "Cr: [Ar] 3d⁵ 4s¹ (extra stability of half-filled 3d⁵)",
      "Cu: [Ar] 3d¹⁰ 4s¹ (extra stability of full 3d¹⁰)",
      "Remember: transition metal ions ALWAYS lose 4s before 3d"
    ]
  },
  {
    "id": "al-chem-fc-2",
    "subtopicId": "al-chem-1-2",
    "front": "Explain the two dips in first ionisation energy across Period 3 (Mg→Al and P→S).",
    "backBullets": [
      "Mg→Al: Al’s outer electron is in a higher-energy 3p orbital shielded by 3s²",
      "P→S: S has spin-paired electrons in one 3p orbital (3p⁴), causing mutual repulsion"
    ]
  },
  {
    "id": "al-chem-fc-3",
    "subtopicId": "al-chem-2-1",
    "front": "State the mandatory SI units for every variable in pV = nRT.",
    "backBullets": [
      "p = Pascals (Pa; 1 kPa = 10³ Pa)",
      "V = cubic metres (m³; cm³ × 10⁻⁶, dm³ × 10⁻³)",
      "T = Kelvin (K = °C + 273); R = 8.31 J K⁻¹ mol⁻¹"
    ]
  },
  {
    "id": "al-chem-fc-4",
    "subtopicId": "al-chem-3-1",
    "front": "State the VSEPR repulsion hierarchy and exact angles for CH₄, NH₃, and H₂O.",
    "backBullets": [
      "Repulsion: LP–LP > LP–BP > BP–BP (~2.5° reduction per lone pair)",
      "CH₄ (4 BP): Tetrahedral 109.5°",
      "NH₃ (3 BP, 1 LP): Trigonal pyramidal 107°",
      "H₂O (2 BP, 2 LP): Bent / V-shaped 104.5°"
    ]
  },
  {
    "id": "al-chem-fc-5",
    "subtopicId": "al-chem-3-2",
    "front": "Why is ice less dense than liquid water?",
    "backBullets": [
      "Each water molecule forms fixed hydrogen bonds in an open tetrahedral crystal lattice",
      "H-bonds hold H₂O molecules further apart in solid ice than in liquid water"
    ]
  },
  {
    "id": "al-chem-fc-6",
    "subtopicId": "al-chem-4-2",
    "front": "When is a reaction thermodynamically feasible under Gibbs Free Energy?",
    "backBullets": [
      "ΔG = ΔH − TΔS ≤ 0 (remember to convert ΔS from J to kJ by dividing by 1000!)",
      "Crossover temperature where ΔG = 0: T = ΔH ÷ (ΔS / 1000)"
    ]
  },
  {
    "id": "al-chem-fc-7",
    "subtopicId": "al-chem-5-1",
    "front": "What do the gradient and y-intercept represent on an Arrhenius graph of ln k vs 1/T?",
    "backBullets": [
      "ln k = (−Ea / R)(1/T) + ln A",
      "Gradient = −Ea / R (so Ea = −gradient × 8.31 J mol⁻¹)",
      "y-intercept = ln A"
    ]
  },
  {
    "id": "al-chem-fc-8",
    "subtopicId": "al-chem-6-1",
    "front": "How do temperature, pressure, concentration, and catalysts affect Kc and Kp?",
    "backBullets": [
      "ONLY TEMPERATURE changes the numerical value of Kc and Kp",
      "Pressure, concentration, and catalysts leave Kc and Kp completely constant"
    ]
  },
  {
    "id": "al-chem-fc-9",
    "subtopicId": "al-chem-6-2",
    "front": "How does an acidic buffer (HA + A⁻) resist pH changes when small H⁺ or OH⁻ is added?",
    "backBullets": [
      "Added H⁺ reacts with large reservoir of A⁻ → shifts left forming HA",
      "Added OH⁻ reacts with H⁺ → H₂O; excess HA dissociates right to replenish H⁺",
      "Calculation: [H⁺] = Ka × (n(HA) ÷ n(A⁻))"
    ]
  },
  {
    "id": "al-chem-fc-10",
    "subtopicId": "al-chem-7-1",
    "front": "State the solubility trends of Group 2 hydroxides and sulfates down the group.",
    "backBullets": [
      "Hydroxides: solubility INCREASES down group (Mg(OH)₂ sparingly soluble → Ba(OH)₂ soluble)",
      "Sulfates: solubility DECREASES down group (MgSO₄ soluble → BaSO₄ insoluble white ppt)"
    ]
  },
  {
    "id": "al-chem-fc-11",
    "subtopicId": "al-chem-7-1",
    "front": "Give the AgNO₃ / NH₃ test results distinguishing Cl⁻, Br⁻, and I⁻.",
    "backBullets": [
      "Acidify with dilute HNO₃ first (never HCl!)",
      "AgCl: white ppt, dissolves in dilute NH₃",
      "AgBr: cream ppt, dissolves only in conc. NH₃",
      "AgI: yellow ppt, insoluble in conc. NH₃"
    ]
  },
  {
    "id": "al-chem-fc-12",
    "subtopicId": "al-chem-7-2",
    "front": "Why are aqueous transition metal complex ions coloured?",
    "backBullets": [
      "Ligands split the 3d sub-shell into two energy levels separated by ΔE",
      "Electrons absorb visible photons matching ΔE = hc/λ to jump to higher d-orbitals",
      "Remaining complementary wavelengths are transmitted"
    ]
  },
  {
    "id": "al-chem-fc-13",
    "subtopicId": "al-chem-8-1",
    "front": "Explain Markovnikov’s rule in alkene electrophilic addition (e.g. propene + HBr).",
    "backBullets": [
      "Major product forms via the more stable carbocation intermediate (3° > 2° > 1°)",
      "More alkyl groups exert a stronger positive inductive effect stabilising the positive carbon"
    ]
  },
  {
    "id": "al-chem-fc-14",
    "subtopicId": "al-chem-8-2",
    "front": "How do Tollens’ and Fehling’s reagents distinguish aldehydes from ketones?",
    "backBullets": [
      "Tollens’ ([Ag(NH₃)₂]⁺): aldehyde → silver mirror; ketone → no change",
      "Fehling’s (blue Cu²⁺): aldehyde → brick-red Cu₂O ppt; ketone → stays blue"
    ]
  },
  {
    "id": "al-chem-fc-15",
    "subtopicId": "al-chem-8-3",
    "front": "List the three proofs disproving Kekulé’s alternating-bond structure of benzene.",
    "backBullets": [
      "1. All six C–C bonds have equal length (0.139 nm, between C–C and C=C)",
      "2. Hydrogenation enthalpy (−208 kJ mol⁻¹) is 152 kJ mol⁻¹ more stable than 3 × cyclohexene (−360 kJ mol⁻¹)",
      "3. Resists electrophilic addition (does not decolourise Br₂ water), undergoing substitution instead"
    ]
  },
  {
    "id": "al-chem-fc-16",
    "subtopicId": "al-chem-8-4",
    "front": "Give 4 reasons why TMS (Si(CH₃)₄) is chosen as the δ = 0 ppm NMR reference standard.",
    "backBullets": [
      "12 chemically equivalent protons → single intense sharp peak",
      "Inert and non-toxic",
      "Volatile (low boiling point → easy to evaporate off sample)",
      "Resonates upfield away from normal organic peaks"
    ]
  },
  {
    "id": "al-chem-fc-17",
    "subtopicId": "al-chem-1-2",
    "front": "Compare electron impact and electrospray ionisation in TOF mass spectrometry.",
    "backBullets": [
      "Electron impact: electron gun knocks out e⁻ → X(g) → X⁺(g) + e⁻ (for low-Mr samples; can fragment)",
      "Electrospray: volatile polar solvent through high-voltage needle adds H⁺ → X(g) + H⁺ → XH⁺(g) (soft ionisation, peak at Mr + 1)"
    ]
  },
  {
    "id": "al-chem-fc-18",
    "subtopicId": "al-chem-2-1",
    "front": "Contrast percentage yield and percentage atom economy.",
    "backBullets": [
      "% Yield = (Actual moles ÷ Theoretical max moles) × 100 (practical efficiency)",
      "% Atom economy = (Mr of desired product ÷ ΣMr of all reactants) × 100 (sustainability / byproduct waste)"
    ]
  },
  {
    "id": "al-chem-fc-19",
    "subtopicId": "al-chem-4-1",
    "front": "Why do enthalpies calculated from mean bond enthalpies differ from Hess’s Law values?",
    "backBullets": [
      "Mean bond enthalpies are average values taken across many different compounds",
      "Bond enthalpies apply strictly to the gaseous state (ignoring latent heats of vaporisation of liquids/solids)"
    ]
  },
  {
    "id": "al-chem-fc-20",
    "subtopicId": "al-chem-4-2",
    "front": "Why is the 2nd electron affinity of oxygen endothermic while the 1st is exothermic?",
    "backBullets": [
      "1st EA attracts an electron into a neutral O(g) atom (exothermic)",
      "2nd EA forces a negatively charged electron onto an already negative O⁻(g) ion, requiring energy to overcome electrostatic repulsion"
    ]
  },
  {
    "id": "al-chem-fc-21",
    "subtopicId": "al-chem-5-1",
    "front": "How does the rate-determining step (RDS) link to the rate equation?",
    "backBullets": [
      "Only species involved up to and including the slowest step (RDS) appear in the rate equation",
      "The order with respect to each reactant equals the number of molecules of that reactant participating up to the RDS"
    ]
  },
  {
    "id": "al-chem-fc-22",
    "subtopicId": "al-chem-6-2",
    "front": "Why is pure water at 50°C still neutral even though its pH is 6.63?",
    "backBullets": [
      "Water self-ionisation H₂O ⇌ H⁺ + OH⁻ is endothermic, so Kw increases with temperature",
      "[H⁺] still exactly equals [OH⁻] in pure water, which is the definition of neutrality"
    ]
  },
  {
    "id": "al-chem-fc-23",
    "subtopicId": "al-chem-7-2",
    "front": "How does Fe²⁺ homogenously catalyse the reaction between peroxodisulfate (S₂O₈²⁻) and iodide (I⁻)?",
    "backBullets": [
      "Uncatalysed reaction has high Ea because two negative ions repel each other",
      "Step 1: S₂O₈²⁻ + 2Fe²⁺ → 2SO₄²⁻ + 2Fe³⁺ (opposite charges attract!)",
      "Step 2: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ (regenerates Fe²⁺ catalyst)"
    ]
  },
  {
    "id": "al-chem-fc-24",
    "subtopicId": "al-chem-8-1",
    "front": "How do conditions control substitution vs elimination when a halogenoalkane reacts with OH⁻?",
    "backBullets": [
      "Warm AQUEOUS NaOH/KOH → OH⁻ acts as a nucleophile → Substitution to form an alcohol",
      "Hot ETHANOLIC NaOH/KOH → OH⁻ acts as a base (removes H⁺) → Elimination to form an alkene"
    ]
  },
  {
    "id": "al-chem-fc-25",
    "subtopicId": "al-chem-8-2",
    "front": "How do you oxidise a primary alcohol to an aldehyde vs a carboxylic acid using acidified K₂Cr₂O₇?",
    "backBullets": [
      "To get an aldehyde: heat gently and DISTIL off the aldehyde immediately as it forms",
      "To get a carboxylic acid: heat strongly under REFLUX with excess oxidising agent (orange Cr₂O₇²⁻ → green Cr³⁺)"
    ]
  },
  {
    "id": "al-chem-fc-26",
    "subtopicId": "al-chem-8-4",
    "front": "What is the purpose of a D₂O shake in ¹H NMR spectroscopy?",
    "backBullets": [
      "Labile –OH and –NH protons rapidly exchange with deuterium (²H, which does not produce a ¹H NMR signal)",
      "The –OH or –NH singlet disappears on the second spectrum, positively identifying that peak"
    ]
  },
  {
    "id": "al-chem-fc-1-1-2",
    "subtopicId": "al-chem-1-1",
    "front": "Electron configurations of Chromium (Z=24) and Copper (Z=29)?",
    "backBullets": [
      "Cr: [Ar] 3d⁵ 4s¹; Cu: [Ar] 3d¹⁰ 4s¹."
    ]
  },
  {
    "id": "al-chem-fc-1-1-3",
    "subtopicId": "al-chem-1-1",
    "front": "Which sub-shell loses electrons FIRST when transition metals form positive ions?",
    "backBullets": [
      "The 4s sub-shell empties FIRST, before any 3d electrons are removed."
    ]
  },
  {
    "id": "al-chem-fc-1-1-4",
    "subtopicId": "al-chem-1-1",
    "front": "Shapes of an s orbital vs a p orbital?",
    "backBullets": [
      "s orbital = spherical; p orbital = dumbbell-shaped (px, py, pz along 3 axes)."
    ]
  },
  {
    "id": "al-chem-fc-1-1-5",
    "subtopicId": "al-chem-1-1",
    "front": "State Hund’s rule when filling degenerate orbitals.",
    "backBullets": [
      "Electrons occupy orbitals of equal energy singly with parallel spins before pairing up."
    ]
  },
  {
    "id": "al-chem-fc-1-2-3",
    "subtopicId": "al-chem-1-2",
    "front": "Why is the first IE of Aluminium lower than Magnesium?",
    "backBullets": [
      "Al’s outer electron is in a higher-energy 3p orbital (further from nucleus and shielded by 3s²), requiring less energy to remove."
    ]
  },
  {
    "id": "al-chem-fc-1-2-4",
    "subtopicId": "al-chem-1-2",
    "front": "Why is electrospray ionisation preferred over electron impact for large biological molecules?",
    "backBullets": [
      "It is a \"soft\" ionisation technique that rarely causes fragmentation of the molecular ion."
    ]
  },
  {
    "id": "al-chem-fc-1-2-5",
    "subtopicId": "al-chem-1-2",
    "front": "State symbol requirement for defining first ionisation energy?",
    "backBullets": [
      "GASEOUS state on BOTH sides: X(g) → X⁺(g) + e⁻!"
    ]
  },
  {
    "id": "al-chem-fc-2-1-3",
    "subtopicId": "al-chem-2-1",
    "front": "Exact SI units required in pV = nRT?",
    "backBullets": [
      "p in Pa, V in m³ (cm³ × 10⁻⁶, dm³ × 10⁻³), n in mol, R = 8.31, T in K (°C + 273)."
    ]
  },
  {
    "id": "al-chem-fc-2-1-4",
    "subtopicId": "al-chem-2-1",
    "front": "Why do concordant titres (within 0.10 cm³) exclude the rough titre?",
    "backBullets": [
      "The rough titre overshoots the end-point; averaging only concordant titres improves precision and accuracy."
    ]
  },
  {
    "id": "al-chem-fc-2-1-5",
    "subtopicId": "al-chem-2-1",
    "front": "How can industry improve sustainability of a reaction with low atom economy?",
    "backBullets": [
      "Find a commercial use for the by-products or switch to an addition-reaction pathway (100% atom economy)."
    ]
  },
  {
    "id": "al-chem-fc-3-1-2",
    "subtopicId": "al-chem-3-1",
    "front": "Bond angles of CH₄, NH₃, and H₂O?",
    "backBullets": [
      "CH₄ (0 LP): 109.5°; NH₃ (1 LP): 107°; H₂O (2 LP): 104.5° (~2.5° reduction per lone pair)."
    ]
  },
  {
    "id": "al-chem-fc-3-1-3",
    "subtopicId": "al-chem-3-1",
    "front": "Shape and bond angles of PCl₅ and SF₆?",
    "backBullets": [
      "PCl₅ (5 BP): trigonal bipyramidal (90° & 120°); SF₆ (6 BP): octahedral (90°)."
    ]
  },
  {
    "id": "al-chem-fc-3-1-4",
    "subtopicId": "al-chem-3-1",
    "front": "Why does graphite conduct electricity while diamond does not?",
    "backBullets": [
      "Each C in graphite forms 3 covalent bonds, leaving 1 delocalised electron per carbon free to move along layers; diamond uses all 4 outer electrons in bonds."
    ]
  },
  {
    "id": "al-chem-fc-3-1-5",
    "subtopicId": "al-chem-3-1",
    "front": "How is a dative covalent bond formed in NH₄⁺?",
    "backBullets": [
      "Nitrogen’s lone pair on NH₃ is donated to an empty 1s orbital on an H⁺ ion."
    ]
  },
  {
    "id": "al-chem-fc-3-2-2",
    "subtopicId": "al-chem-3-2",
    "front": "Why does HI have a higher boiling point than HBr and HCl?",
    "backBullets": [
      "Iodine has more electrons (larger M_r), creating stronger van der Waals (induced dipole–dipole) forces that outweigh dipole differences."
    ]
  },
  {
    "id": "al-chem-fc-3-2-3",
    "subtopicId": "al-chem-3-2",
    "front": "Three features you MUST show when drawing a hydrogen bond between two water molecules?",
    "backBullets": [
      "δ⁺ on H and δ⁻ on O, a lone pair on O, and a dashed line from the lone pair to the δ⁺ H (180° O–H···O angle)."
    ]
  },
  {
    "id": "al-chem-fc-3-2-4",
    "subtopicId": "al-chem-3-2",
    "front": "Why do straight-chain alkanes boil higher than branched isomers of the same M_r?",
    "backBullets": [
      "Straight chains pack closer with greater surface area of contact, forming stronger van der Waals forces."
    ]
  },
  {
    "id": "al-chem-fc-3-2-5",
    "subtopicId": "al-chem-3-2",
    "front": "Define electronegativity cleanly.",
    "backBullets": [
      "The power of an atom to attract the bonding pair of electrons in a covalent bond."
    ]
  },
  {
    "id": "al-chem-fc-4-1-2",
    "subtopicId": "al-chem-4-1",
    "front": "Define standard enthalpy of formation (Δ_f H°).",
    "backBullets": [
      "Enthalpy change when 1 mole of a compound is formed from its elements in their standard states under standard conditions (298 K, 100 kPa)."
    ]
  },
  {
    "id": "al-chem-fc-4-1-3",
    "subtopicId": "al-chem-4-1",
    "front": "Formula for Δ_r H using Δ_f H° vs Δ_c H° vs mean bond enthalpies?",
    "backBullets": [
      "Δ_f H°: Products − Reactants; Δ_c H°: Reactants − Products; Bonds: Broken − Formed."
    ]
  },
  {
    "id": "al-chem-fc-4-1-4",
    "subtopicId": "al-chem-4-1",
    "front": "Why is a spirit-burner experimental Δ_c H always less negative than the data-book value?",
    "backBullets": [
      "Heat loss to surroundings/beaker, incomplete combustion, and alcohol evaporation from wick."
    ]
  },
  {
    "id": "al-chem-fc-4-1-5",
    "subtopicId": "al-chem-4-1",
    "front": "How do you correct for heat loss in a polystyrene-cup neutralisation experiment?",
    "backBullets": [
      "Measure temperature before and after mixing every 30 s and extrapolate the cooling curve back to the time of mixing to find ΔT."
    ]
  },
  {
    "id": "al-chem-fc-4-2-3",
    "subtopicId": "al-chem-4-2",
    "front": "Why is the SECOND electron affinity of oxygen (O⁻(g) + e⁻ → O²⁻(g)) endothermic?",
    "backBullets": [
      "Energy must be supplied to overcome electrostatic repulsion when forcing a negative electron onto an already negative O⁻ ion."
    ]
  },
  {
    "id": "al-chem-fc-4-2-4",
    "subtopicId": "al-chem-4-2",
    "front": "Why might a reaction with ΔG < 0 still NOT occur noticeably at room temperature?",
    "backBullets": [
      "Thermodynamic feasibility (ΔG < 0) says nothing about KINETICS — the activation energy E_a may be too high!"
    ]
  },
  {
    "id": "al-chem-fc-4-2-5",
    "subtopicId": "al-chem-4-2",
    "front": "Two factors that make lattice enthalpy (and hydration enthalpy) MORE exothermic?",
    "backBullets": [
      "Smaller ionic radius AND higher ionic charge (higher charge density ⇒ stronger electrostatic attraction)."
    ]
  },
  {
    "id": "al-chem-fc-5-1-3",
    "subtopicId": "al-chem-5-1",
    "front": "How does the Maxwell–Boltzmann distribution shift when temperature increases?",
    "backBullets": [
      "Peak shifts RIGHT and LOWER; far larger area lies beyond E_a (total area under curve stays constant)."
    ]
  },
  {
    "id": "al-chem-fc-5-1-4",
    "subtopicId": "al-chem-5-1",
    "front": "How do Rate vs [A] graphs look for 0th, 1st, and 2nd order?",
    "backBullets": [
      "0th = horizontal line; 1st = straight line through origin; 2nd = upward-curving parabola through origin."
    ]
  },
  {
    "id": "al-chem-fc-5-1-5",
    "subtopicId": "al-chem-5-1",
    "front": "What is the ONLY factor that changes the value of rate constant k (apart from adding a catalyst)?",
    "backBullets": [
      "Temperature T (higher T increases k exponentially via k = A e^(−Ea/RT))."
    ]
  },
  {
    "id": "al-chem-fc-6-1-2",
    "subtopicId": "al-chem-6-1",
    "front": "Formula for partial pressure p_A of a gas in a mixture?",
    "backBullets": [
      "p_A = (moles of A / total moles of gas) × total pressure P."
    ]
  },
  {
    "id": "al-chem-fc-6-1-3",
    "subtopicId": "al-chem-6-1",
    "front": "Why does changing pressure leave Kp unchanged even though equilibrium shifts?",
    "backBullets": [
      "Kp is constant at fixed T; doubling pressure shifts the numerator/denominator ratio temporarily, so the reaction shifts until the ratio returns to Kp."
    ]
  },
  {
    "id": "al-chem-fc-6-1-4",
    "subtopicId": "al-chem-6-1",
    "front": "Which phases are omitted from heterogeneous Kc and Kp expressions?",
    "backBullets": [
      "Pure solids (s) and pure liquids (l) are omitted (constant concentration / no gas pressure)."
    ]
  },
  {
    "id": "al-chem-fc-6-1-5",
    "subtopicId": "al-chem-6-1",
    "front": "Effect of increasing temperature on Kc for an endothermic forward reaction?",
    "backBullets": [
      "Equilibrium shifts RIGHT (products increase) so Kc INCREASES."
    ]
  },
  {
    "id": "al-chem-fc-6-2-3",
    "subtopicId": "al-chem-6-2",
    "front": "How does an ethanoic acid / sodium ethanoate buffer resist small additions of acid (H⁺) and alkali (OH⁻)?",
    "backBullets": [
      "Added H⁺ reacts with large reservoir of CH₃COO⁻ → CH₃COOH (shifts left); added OH⁻ reacts with H⁺ (forming H₂O), so CH₃COOH dissociates (shifts right) to replace H⁺."
    ]
  },
  {
    "id": "al-chem-fc-6-2-4",
    "subtopicId": "al-chem-6-2",
    "front": "How do you calculate the pH of a STRONG BASE like 0.050 mol dm⁻³ Ba(OH)₂?",
    "backBullets": [
      "[OH⁻] = 2 × 0.050 = 0.10 mol dm⁻³ → [H⁺] = Kw / [OH⁻] = 10⁻¹³ → pH = 13.0!"
    ]
  },
  {
    "id": "al-chem-fc-6-2-5",
    "subtopicId": "al-chem-6-2",
    "front": "Why can no single acid–base indicator be used for a weak acid + weak base titration?",
    "backBullets": [
      "There is no sharp vertical pH jump at the equivalence point, so indicators change colour gradually over many cm³."
    ]
  },
  {
    "id": "al-chem-fc-7-1-3",
    "subtopicId": "al-chem-7-1",
    "front": "Why is BaSO₄ safe to swallow in a barium meal despite Ba²⁺ ions being toxic?",
    "backBullets": [
      "BaSO₄ is virtually insoluble in water/stomach acid, so toxic Ba²⁺ ions are not absorbed into the bloodstream."
    ]
  },
  {
    "id": "al-chem-fc-7-1-4",
    "subtopicId": "al-chem-7-1",
    "front": "Equation and oxidation-state changes when Cl₂ reacts with cold dilute NaOH?",
    "backBullets": [
      "Cl₂ + 2NaOH → NaCl + NaClO + H₂O; Cl disproportionates from 0 to −1 (NaCl) and +1 (NaClO)."
    ]
  },
  {
    "id": "al-chem-fc-7-1-5",
    "subtopicId": "al-chem-7-1",
    "front": "Why is Al₂O₃ described as amphoteric?",
    "backBullets": [
      "It reacts with both acids (forming Al³⁺ salts) and alkalis (forming aluminate [Al(OH)₄]⁻)."
    ]
  },
  {
    "id": "al-chem-fc-7-2-3",
    "subtopicId": "al-chem-7-2",
    "front": "Why are S₂O₈²⁻ and I⁻ slow to react without a catalyst, and how does Fe²⁺ speed it up?",
    "backBullets": [
      "Both reactants are negatively charged and repel (high Ea); Fe²⁺/Fe³⁺ reacts with each oppositely charged ion in two low-Ea steps."
    ]
  },
  {
    "id": "al-chem-fc-7-2-4",
    "subtopicId": "al-chem-7-2",
    "front": "Formula and geometry of cisplatin, and how does it fight cancer?",
    "backBullets": [
      "Square planar cis-[Pt(NH₃)₂Cl₂]; binds to adjacent guanine bases on DNA, kinking the helix and preventing replication."
    ]
  },
  {
    "id": "al-chem-fc-7-2-5",
    "subtopicId": "al-chem-7-2",
    "front": "What happens to [Cu(H₂O)₆]²⁺ when concentrated HCl is added?",
    "backBullets": [
      "Blue octahedral [Cu(H₂O)₆]²⁺ forms yellow-green tetrahedral [CuCl₄]²⁻ (coordination number drops from 6 to 4 because Cl⁻ ligands are larger!)."
    ]
  },
  {
    "id": "al-chem-fc-8-1-3",
    "subtopicId": "al-chem-8-1",
    "front": "Conditions for Nucleophilic Substitution vs Elimination of a haloalkane with OH⁻?",
    "backBullets": [
      "Substitution (→ alcohol): warm AQUEOUS NaOH. Elimination (→ alkene): hot ETHANOLIC NaOH under reflux."
    ]
  },
  {
    "id": "al-chem-fc-8-1-4",
    "subtopicId": "al-chem-8-1",
    "front": "Why do iodoalkanes react faster with AgNO₃(aq)/ethanol than chloroalkanes?",
    "backBullets": [
      "The C–I bond has a much lower bond enthalpy (weaker bond) than C–Cl, outweighing C–Cl’s higher polarity."
    ]
  },
  {
    "id": "al-chem-fc-8-1-5",
    "subtopicId": "al-chem-8-1",
    "front": "How do chlorine radicals (Cl•) from CFCs catalytically destroy ozone (O₃)?",
    "backBullets": [
      "Cl• + O₃ → ClO• + O₂; ClO• + O₃ → 2O₂ + Cl• (Cl• is regenerated, destroying thousands of O₃ molecules!)."
    ]
  },
  {
    "id": "al-chem-fc-8-2-3",
    "subtopicId": "al-chem-8-2",
    "front": "How do Tollens’ and Fehling’s reagents distinguish aldehydes from ketones?",
    "backBullets": [
      "Aldehydes are oxidised (Tollens’ → silver mirror; Fehling’s → blue to brick-red ppt); ketones give NO visible change."
    ]
  },
  {
    "id": "al-chem-fc-8-2-4",
    "subtopicId": "al-chem-8-2",
    "front": "Products when ethanoyl chloride (CH₃COCl) reacts with methanol (CH₃OH) vs ammonia (NH₃)?",
    "backBullets": [
      "With CH₃OH → methyl ethanoate + HCl; with NH₃ → ethanamide (CH₃CONH₂) + HCl (or NH₄Cl)."
    ]
  },
  {
    "id": "al-chem-fc-8-2-5",
    "subtopicId": "al-chem-8-2",
    "front": "Why does alkaline hydrolysis of an ester give a higher yield than acid hydrolysis?",
    "backBullets": [
      "Alkaline hydrolysis is IRREVERSIBLE (forms carboxylate salt RCOO⁻Na⁺ + alcohol), whereas acid hydrolysis is reversible."
    ]
  },
  {
    "id": "al-chem-fc-8-3-2",
    "subtopicId": "al-chem-8-3",
    "front": "Three pieces of evidence proving benzene has a delocalised ring rather than Kekulé’s 3 C=C bonds?",
    "backBullets": [
      "All C–C bonds equal length (0.139 nm); enthalpy of hydrogenation is 152 kJ mol⁻¹ less exothermic than −360; resists addition with Br₂(aq)."
    ]
  },
  {
    "id": "al-chem-fc-8-3-3",
    "subtopicId": "al-chem-8-3",
    "front": "Order of base strength: NH₃, C₂H₅NH₂, C₆H₅NH₂ (strongest first)?",
    "backBullets": [
      "C₂H₅NH₂ (alkyl +I) > NH₃ > C₆H₅NH₂ (lone pair delocalised into benzene ring)."
    ]
  },
  {
    "id": "al-chem-fc-8-3-4",
    "subtopicId": "al-chem-8-3",
    "front": "Reagents & temperature for nitration of benzene to mononitrobenzene?",
    "backBullets": [
      "Conc. HNO₃ + conc. H₂SO₄ at 55 °C (higher T causes dinitration!)."
    ]
  },
  {
    "id": "al-chem-fc-8-3-5",
    "subtopicId": "al-chem-8-3",
    "front": "Why is NaOH added after reducing nitrobenzene with Sn + conc. HCl?",
    "backBullets": [
      "To deprotonate the phenylammonium ion (C₆H₅NH₃⁺) formed in acid back into free phenylamine (C₆H₅NH₂)."
    ]
  },
  {
    "id": "al-chem-fc-8-4-3",
    "subtopicId": "al-chem-8-4",
    "front": "How many ¹³C NMR peaks do propanone (CH₃COCH₃) and propanal (CH₃CH₂CHO) give respectively?",
    "backBullets": [
      "Propanone = 2 peaks (symmetrical methyls); Propanal = 3 peaks (all 3 carbons distinct)."
    ]
  },
  {
    "id": "al-chem-fc-8-4-4",
    "subtopicId": "al-chem-8-4",
    "front": "How do you distinguish an alcohol O–H from a carboxylic acid O–H in an IR spectrum?",
    "backBullets": [
      "Alcohol O–H = smooth broad peak at 3230–3550 cm⁻¹; Carboxylic acid O–H = very broad peak at 2500–3000 cm⁻¹ PLUS sharp C=O at ~1700 cm⁻¹."
    ]
  },
  {
    "id": "al-chem-fc-8-4-5",
    "subtopicId": "al-chem-8-4",
    "front": "What happens to a ¹H NMR spectrum when you add D₂O?",
    "backBullets": [
      "Any peak caused by an –OH or –NH proton disappears due to rapid exchange with deuterium (–OD / –ND)."
    ]
  }
];

export const ALEVEL_CHEMISTRY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-al-chem-atomic-tof",
    "slug": "atomic-structure-tof-and-ionisation-energy",
    "title": "Atomic Orbitals, TOF Mass Spec & Ionisation Energy",
    "topicNumber": 1,
    "topicName": "Atomic Structure, TOF Mass Spec & Ionisation Energy",
    "summary": "s/p/d/f configurations, Cr & Cu exceptions, TOF kinetic energy & drift equations, and Period 3 ionisation energy dips.",
    "accentColor": "#6366f1",
    "sections": [
      {
        "heading": "Orbitals & Configurations",
        "points": [
          "Filling order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p. Anomalies: Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹.",
          "Transition metal cations ALWAYS lose 4s electrons before 3d electrons (e.g. Fe²⁺ = [Ar] 3d⁶)."
        ]
      },
      {
        "heading": "TOF Mass Spec & Ionisation Energy",
        "formula": "KE = ½mv²   |   t = d√(m / 2KE)   |   m(kg) = Mᵣ ÷ (1000 × Nₐ)",
        "points": [
          "Electrospray: X(g) + H⁺ → XH⁺(g) (peak at Mr + 1). Electron impact: X(g) → X⁺(g) + e⁻.",
          "Period 3 IE₁ dips: Al < Mg (3p higher energy/shielded by 3s²); S < P (3p⁴ spin-pair repulsion)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-amount-gas",
    "slug": "moles-ideal-gas-and-volumetric-titrations",
    "title": "Amount of Substance, pV = nRT & Titrations",
    "topicNumber": 2,
    "topicName": "Amount of Substance & Ideal Gas Law",
    "summary": "Ideal gas SI unit conversions, empirical/hydrated salt formulas, yield vs atom economy, and titration uncertainties.",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "Ideal Gas Law & Stoichiometry",
        "formula": "pV = nRT (R = 8.31 J K⁻¹ mol⁻¹)   |   n = m / Mᵣ = c × V(dm³)",
        "points": [
          "Mandatory SI units: p in Pa (kPa × 10³), V in m³ (cm³ × 10⁻⁶, dm³ × 10⁻³), T in K (°C + 273).",
          "% Yield = (Actual / Theoretical) × 100; % Atom Economy = (Mr desired product / ΣMr all reactants) × 100."
        ]
      },
      {
        "heading": "Volumetric Analysis & Uncertainties",
        "formula": "% Uncertainty = (Resolution uncertainty × Number of readings ÷ Measured value) × 100",
        "points": [
          "Concordant titres agree within 0.10 cm³; burettes involve 2 readings (initial & final)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-physical-1",
    "slug": "bonding-vsepr-and-intermolecular-forces",
    "title": "Bonding, VSEPR Shapes & Intermolecular Forces",
    "topicNumber": 3,
    "topicName": "Bonding, Structure & VSEPR Shapes",
    "summary": "Coordinate bonding, VSEPR shapes & bond angles (LP–LP > LP–BP > BP–BP), electronegativity, and H-bonding.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "VSEPR Geometry Summary",
        "formula": "Repulsion: LP–LP > LP–BP > BP–BP (~2.5° compression per lone pair)",
        "points": [
          "0 LP: Linear 180° (2), Trigonal planar 120° (3), Tetrahedral 109.5° (4), Trigonal bipyramidal 90°/120° (5), Octahedral 90° (6).",
          "With LP: Pyramidal 107° (3+1, NH₃), Bent 104.5° (2+2, H₂O), Square planar 90° (4+2, XeF₄ / ClF₄⁻)."
        ]
      },
      {
        "heading": "Intermolecular Forces & Polarity",
        "points": [
          "Symmetrical molecules (CO₂, BF₃, CCl₄, SF₆) have cancelling dipoles and are non-polar overall.",
          "Strength: Hydrogen bonding (H–N/O/F) > Permanent dipole-dipole > Induced dipole-dipole (van der Waals, scales with electron count)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-energetics-gibbs",
    "slug": "enthalpy-born-haber-and-gibbs-free-energy",
    "title": "Calorimetry, Hess Cycles, Born-Haber & Gibbs ΔG",
    "topicNumber": 4,
    "topicName": "Energetics, Thermodynamics & Gibbs Free Energy",
    "summary": "q = mcΔT calorimetry, formation/combustion Hess cycles, Born-Haber covalent character, and ΔG = ΔH − TΔS.",
    "accentColor": "#d97706",
    "sections": [
      {
        "heading": "Calorimetry & Hess’s Law",
        "formula": "q = mcΔT   |   ΔH = −q ÷ (1000n)   |   ΔrH° = ΣΔfH°(prod) − ΣΔfH°(react) = ΣΔcH°(react) − ΣΔcH°(prod)",
        "points": [
          "Extrapolate cooling curves back to the time of mixing to correct for heat loss.",
          "Experimental Born-Haber > theoretical ionic lattice enthalpy proves cation polarisation (covalent character)."
        ]
      },
      {
        "heading": "Entropy & Gibbs Free Energy",
        "formula": "ΔS° = ΣS°(prod) − ΣS°(react)   |   ΔG = ΔH − TΔS ≤ 0   |   T_crossover = ΔH ÷ (ΔS / 1000)",
        "points": [
          "Always divide ΔS (J K⁻¹ mol⁻¹) by 1000 to match ΔH (kJ mol⁻¹) before computing ΔG."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-thermo-kinetics",
    "slug": "maxwell-boltzmann-rate-equations-and-arrhenius",
    "title": "Maxwell-Boltzmann, Rate Equations & Arrhenius",
    "topicNumber": 5,
    "topicName": "Kinetics, Maxwell-Boltzmann & Rate Equations",
    "summary": "Maxwell-Boltzmann curves, orders of reaction, rate constant units, rate-determining steps, and Arrhenius plots.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "Maxwell-Boltzmann & Orders of Reaction",
        "formula": "Rate = k[A]ᵐ[B]ⁿ   |   k units = (mol dm⁻³)^(1 − overall order) s⁻¹",
        "points": [
          "Higher T shifts Maxwell-Boltzmann peak right and lower, exponentially increasing molecules with E ≥ Ea.",
          "0th order: Rate constant; 1st order: Rate ∝ [A] (constant half-life); 2nd order: Rate ∝ [A]²."
        ]
      },
      {
        "heading": "Rate-Determining Step & Arrhenius",
        "formula": "k = A e^(−Ea/RT)   |   ln k = (−Ea / R)(1/T) + ln A",
        "points": [
          "RDS contains all species appearing in the rate equation (up to and including RDS).",
          "Gradient of ln k vs 1/T equals −Ea / R (multiply by −8.31 for Ea in J mol⁻¹); y-intercept = ln A."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-equilibria-acids",
    "slug": "equilibria-buffers-and-ph",
    "title": "Equilibria (Kc/Kp) & Acids, Bases & Buffers",
    "topicNumber": 6,
    "topicName": "Equilibria (Kc/Kp) & Acids, Bases & Buffers",
    "summary": "ICE tables, partial pressures, Kw/Ka shortcuts, acidic buffer shifts, and titration indicator rules.",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "Equilibria",
        "formula": "p(A) = x(A) × P_total   |   Only Temperature changes Kc / Kp",
        "points": [
          "Divide ICE equilibrium moles by volume (dm³) before inserting into Kc; use round brackets for Kp."
        ]
      },
      {
        "heading": "Acids, Bases & Buffers",
        "formula": "pH = −log₁₀[H⁺]  |  Kw = [H⁺][OH⁻] = 10⁻¹⁴  |  Buffer: [H⁺] = Ka × n(HA)/n(A⁻)",
        "points": [
          "Pure weak acid: [H⁺] = √(Ka × [HA]). Half-equivalence point: pH = pKa.",
          "Indicator pH range must fall completely within the steep vertical jump of the titration curve."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-inorganic",
    "slug": "periodicity-halides-and-transition-metals",
    "title": "Period 3, Halides & Transition Metals",
    "topicNumber": 7,
    "topicName": "Periodicity, Group 2/7 & Transition Metals",
    "summary": "Period 3 oxide pHs, Group 2 solubility, conc. H₂SO₄ halide redox, chelate effect, and d-splitting.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "Halide Redox & Identification",
        "points": [
          "NaCl + H₂SO₄ → HCl only. NaBr → SO₂ + Br₂. NaI → SO₂ + S + H₂S + I₂.",
          "AgCl (white, sol. dil. NH₃), AgBr (cream, sol. conc. NH₃), AgI (yellow, insoluble)."
        ]
      },
      {
        "heading": "Transition Metals",
        "formula": "ΔE = hν = hc / λ",
        "points": [
          "Chelate effect: multidentate ligands increase free particle count → large +ΔS → negative ΔG.",
          "[M(H₂O)₆]³⁺ ions are more acidic than 2+ ions due to higher charge density polarising O–H bonds."
        ]
      }
    ]
  },
  {
    "id": "cs-al-chem-organic-spec",
    "slug": "organic-mechanisms-aromatics-and-nmr",
    "title": "Organic Mechanisms, Benzene & NMR",
    "topicNumber": 8,
    "topicName": "Organic Mechanisms, Aromatics & Spectroscopy",
    "summary": "All A-Level curly-arrow mechanisms, benzene electrophilic substitution, IR bands, and ¹H NMR n+1 splitting.",
    "accentColor": "#be185d",
    "sections": [
      {
        "heading": "Mechanism Quick Reference",
        "points": [
          "Alkanes: Free Radical Substitution (UV). Alkenes: Electrophilic Addition (3° > 2° > 1° carbocation).",
          "Halogenoalkanes: Warm aq. OH⁻ → Substitution; Hot ethanolic OH⁻ → Elimination.",
          "Carbonyls: Nucleophilic Addition (planar C=O → racemate). Acyl chlorides: Addition-Elimination. Benzene: Electrophilic Substitution (NO₂⁺ / RCO⁺)."
        ]
      },
      {
        "heading": "Spectroscopy",
        "points": [
          "IR: C=O sharp 1680–1750 cm⁻¹; Alcohol O–H broad 3230–3550 cm⁻¹; Acid O–H very broad 2500–3000 cm⁻¹.",
          "¹H NMR: TMS reference δ = 0 ppm, CDCl₃ solvent, n+1 adjacent-proton splitting, D₂O shake removes O–H/N–H."
        ]
      }
    ]
  }
];

export const ALEVEL_CHEMISTRY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "al-chem-exam-1",
    "subtopicId": "al-chem-1-2",
    "number": 1,
    "stimulus": "A sample of naturally occurring magnesium (²⁴Mg 79.0%, ²⁵Mg 10.0%, ²⁶Mg 11.0%) is analysed in a Time-of-Flight (TOF) mass spectrometer using electron impact ionisation.",
    "diagram": "atomic-structure",
    "parts": [
      {
        "id": "al-chem-exam-1a",
        "label": "a)",
        "prompt": "Which ion reaches the TOF detector plate first after acceleration through the electric field?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "²⁴Mg⁺",
          "²⁵Mg⁺",
          "²⁶Mg⁺",
          "All three isotopes arrive simultaneously"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-chem-exam-1b",
        "label": "b)",
        "prompt": "Calculate the relative atomic mass (Aᵣ) of this magnesium sample to 2 decimal places.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Aᵣ = [(24 × 79.0) + (25 × 10.0) + (26 × 11.0)] ÷ 100 = (1896 + 250 + 286) ÷ 100 = 24.32.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Sum of (mass × abundance) = 2432",
              "requiredKeywordGroups": [
                [
                  "2432",
                  "1896"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Aᵣ = 24.32",
              "numericMatch": {
                "value": 24.32,
                "tolerance": 0.02
              }
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-1c",
        "label": "c)",
        "prompt": "Explain why the first ionisation energy of aluminium (Group 3) is lower than that of magnesium (Group 2).",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Aluminium’s outer electron is in a 3p sub-shell which is at a higher energy level (further from the nucleus) and partially shielded by the inner 3s² electrons compared with magnesium’s 3s outer electron.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Outer electron of Al is in a 3p orbital (higher energy than 3s in Mg)",
              "requiredKeywordGroups": [
                [
                  "3p"
                ],
                [
                  "higher energy",
                  "further",
                  "3s"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "3p electron is shielded by 3s² electrons",
              "requiredKeywordGroups": [
                [
                  "shield"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-2",
    "subtopicId": "al-chem-2-1",
    "number": 2,
    "stimulus": "A volatile organic liquid of mass 0.145 g is injected into a heated gas syringe at 373 K and 100 kPa pressure, vaporising completely to occupy a gas volume of 77.5 cm³ (R = 8.31 J K⁻¹ mol⁻¹).",
    "parts": [
      {
        "id": "al-chem-exam-2a",
        "label": "a)",
        "prompt": "What is 77.5 cm³ expressed in the mandatory SI unit of volume (m³) for pV = nRT?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "7.75 × 10⁻² m³",
          "7.75 × 10⁻³ m³",
          "7.75 × 10⁻⁵ m³",
          "7.75 × 10⁻⁶ m³"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-chem-exam-2b",
        "label": "b)",
        "prompt": "Calculate the relative molecular mass (Mᵣ) of the volatile liquid to 3 significant figures.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "n = pV / RT = (100,000 × 77.5 × 10⁻⁶) ÷ (8.31 × 373) = 7.75 ÷ 3099.63 = 2.50 × 10⁻³ mol. Mᵣ = m / n = 0.145 ÷ 0.00250 = 58.0.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Correct SI substitutions p = 100,000 Pa and V = 7.75 × 10⁻⁵ m³",
              "requiredKeywordGroups": [
                [
                  "100000",
                  "100,000",
                  "7.75"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "n = 2.50 × 10⁻³ mol",
              "requiredKeywordGroups": [
                [
                  "0.0025",
                  "2.50",
                  "2.5 × 10"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Mᵣ = 58.0",
              "numericMatch": {
                "value": 58,
                "tolerance": 0.4
              }
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-2c",
        "label": "c)",
        "prompt": "Explain the difference between percentage yield and percentage atom economy in chemical manufacturing.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Percentage yield compares actual moles obtained experimentally to theoretical maximum moles, whereas percentage atom economy measures the proportion of total reactant Mr incorporated into the desired product in the balanced equation.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Percentage yield compares actual product obtained to theoretical maximum",
              "requiredKeywordGroups": [
                [
                  "actual"
                ],
                [
                  "theoretical",
                  "maximum"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Atom economy is Mr of desired product divided by total Mr of all reactants",
              "requiredKeywordGroups": [
                [
                  "desired",
                  "useful"
                ],
                [
                  "all reactants",
                  "total mr",
                  "by-product",
                  "waste"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-3",
    "subtopicId": "al-chem-3-1",
    "number": 3,
    "stimulus": "Ammonia (NH₃) reacts with a hydrogen ion (H⁺) to form the ammonium ion (NH₄⁺), altering the molecular geometry and bond angle around the central nitrogen atom.",
    "diagram": "ionic-covalent-bonding",
    "parts": [
      {
        "id": "al-chem-exam-3a",
        "label": "a)",
        "prompt": "What type of bond is formed between the nitrogen lone pair in NH₃ and the H⁺ ion?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Ionic bond",
          "Dative (coordinate) covalent bond",
          "Hydrogen bond",
          "Metallic bond"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-chem-exam-3b",
        "label": "b)",
        "prompt": "State and explain the change in H–N–H bond angle when NH₃ (107°) is converted into NH₄⁺ (109.5°).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "NH₃ has 3 bonding pairs and 1 lone pair (trigonal pyramidal, 107°), whereas NH₄⁺ has 4 bonding pairs and 0 lone pairs (tetrahedral, 109.5°). Lone pairs repel more strongly than bonding pairs, so converting the lone pair into a bonding pair removes extra repulsion and opens the angle to 109.5°.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "NH₃ has 3 BP & 1 LP whereas NH₄⁺ has 4 BP & 0 LP",
              "requiredKeywordGroups": [
                [
                  "3 bonding",
                  "1 lone"
                ],
                [
                  "4 bonding",
                  "no lone",
                  "0 lone"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Lone pairs repel more strongly than bonding pairs",
              "requiredKeywordGroups": [
                [
                  "lone pair"
                ],
                [
                  "more",
                  "stronger",
                  "greater"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Equal repulsion between 4 bonding pairs in NH₄⁺ gives tetrahedral 109.5°",
              "requiredKeywordGroups": [
                [
                  "tetrahedral",
                  "109.5",
                  "equal repulsion"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-3c",
        "label": "c)",
        "prompt": "Explain why ammonia (NH₃) has a much higher boiling point than phosphine (PH₃) even though PH₃ has more electrons.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "NH₃ molecules form strong intermolecular hydrogen bonds between the δ⁺ H and the lone pair on the highly electronegative N atom, whereas PH₃ only experiences weaker permanent dipole and van der Waals forces.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "NH₃ forms intermolecular hydrogen bonds",
              "requiredKeywordGroups": [
                [
                  "hydrogen bond"
                ],
                [
                  "nh3",
                  "ammonia"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Hydrogen bonds are stronger than van der Waals / dipole-dipole forces in PH₃",
              "requiredKeywordGroups": [
                [
                  "stronger",
                  "more energy"
                ],
                [
                  "van der waals",
                  "dipole",
                  "ph3"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-4",
    "subtopicId": "al-chem-4-2",
    "number": 4,
    "stimulus": "In a blast furnace, solid iron(III) oxide is reduced by carbon: Fe₂O₃(s) + 3C(s) → 2Fe(s) + 3CO(g), with ΔH° = +492.7 kJ mol⁻¹ and ΔS° = +542.6 J K⁻¹ mol⁻¹.",
    "diagram": "exothermic-endothermic",
    "parts": [
      {
        "id": "al-chem-exam-4a",
        "label": "a)",
        "prompt": "Why is the standard entropy change ΔS° for this reaction strongly positive?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "The reaction is endothermic",
          "4 moles of ordered solids react to produce 3 moles of disordered gas (CO) plus 2 moles of solid (5 moles total)",
          "Iron has a higher atomic number than carbon",
          "Activation energy is zero"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-chem-exam-4b",
        "label": "b)",
        "prompt": "Calculate ΔG° (in kJ mol⁻¹) at 298 K and state whether the reaction is feasible at room temperature.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "ΔG° = ΔH° − TΔS° = 492.7 − (298 × 0.5426) = 492.7 − 161.7 = +331.0 kJ mol⁻¹. Since ΔG° > 0, the reaction is NOT feasible at 298 K.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "ΔG° = +331 kJ mol⁻¹",
              "numericMatch": {
                "value": 331,
                "tolerance": 1.5
              }
            },
            {
              "id": "mp2",
              "markDescription": "Not feasible because ΔG° > 0 (positive)",
              "requiredKeywordGroups": [
                [
                  "not feasible",
                  "non-spontaneous",
                  "positive"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-4c",
        "label": "c)",
        "prompt": "Calculate the minimum temperature (in K) above which this reduction becomes thermodynamically feasible.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "T = ΔH° ÷ (ΔS° / 1000) = 492.7 ÷ 0.5426 = 908 K.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "T = 492.7 / 0.5426",
              "requiredKeywordGroups": [
                [
                  "492.7"
                ],
                [
                  "0.5426",
                  "542.6"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "T = 908 K",
              "numericMatch": {
                "value": 908,
                "tolerance": 2
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-5",
    "subtopicId": "al-chem-5-1",
    "number": 5,
    "stimulus": "Nitrogen monoxide reacts with hydrogen: 2NO(g) + 2H₂(g) → N₂(g) + 2H₂O(g). Initial-rate experiments show that doubling [NO] quadruples the rate, while doubling [H₂] doubles the rate.",
    "parts": [
      {
        "id": "al-chem-exam-5a",
        "label": "a)",
        "prompt": "What is the overall order of this reaction?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "1st order",
          "2nd order",
          "3rd order",
          "4th order"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-chem-exam-5b",
        "label": "b)",
        "prompt": "Write the rate equation for this reaction and deduce the units of the rate constant k.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Rate = k [NO]² [H₂]. Units of k = mol⁻² dm⁶ s⁻¹.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Rate = k[NO]²[H₂]",
              "requiredKeywordGroups": [
                [
                  "no"
                ],
                [
                  "h2"
                ],
                [
                  "2"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Units mol⁻² dm⁶ s⁻¹",
              "requiredKeywordGroups": [
                [
                  "mol-2",
                  "mol⁻²"
                ],
                [
                  "dm6",
                  "dm⁶"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-5c",
        "label": "c)",
        "prompt": "Explain why this reaction cannot occur in a single concerted step matching the overall balanced equation.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "The rate equation shows only 2 NO and 1 H₂ molecule participate up to and including the rate-determining step (not 2 H₂ as in the overall equation), so the second H₂ must react in a subsequent fast step.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Order with respect to H₂ is 1 whereas overall stoichiometry has 2 H₂",
              "requiredKeywordGroups": [
                [
                  "1",
                  "first order"
                ],
                [
                  "h2",
                  "stoichiometr",
                  "overall"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Only species in/before rate-determining step appear in rate equation (must be multi-step)",
              "requiredKeywordGroups": [
                [
                  "rate-determining",
                  "rds",
                  "slow",
                  "multi-step"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-6",
    "subtopicId": "al-chem-6-2",
    "number": 6,
    "stimulus": "A buffer solution is prepared by dissolving 0.150 mol of sodium ethanoate (CH₃COONa) in 500 cm³ of 0.200 mol dm⁻³ ethanoic acid (CH₃COOH, Ka = 1.74 × 10⁻⁵ mol dm⁻³ at 298 K).",
    "parts": [
      {
        "id": "al-chem-exam-6a",
        "label": "a)",
        "prompt": "Which assumption used for pure weak acid calculations MUST NOT be used when calculating the pH of a buffer solution?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "[H⁺] = [A⁻]",
          "pH = −log₁₀[H⁺]",
          "Kw = [H⁺][OH⁻]",
          "Temperature is 298 K"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-chem-exam-6b",
        "label": "b)",
        "prompt": "Calculate the pH of this buffer solution to 2 decimal places.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "n(CH₃COOH) = 0.500 × 0.200 = 0.100 mol; n(CH₃COO⁻) = 0.150 mol. [H⁺] = Ka × (n(HA)/n(A⁻)) = 1.74×10⁻⁵ × (0.100/0.150) = 1.16×10⁻⁵ mol dm⁻³. pH = −log₁₀(1.16×10⁻⁵) = 4.94.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "n(HA) = 0.100 mol (or [A⁻] = 0.300 mol dm⁻³)",
              "requiredKeywordGroups": [
                [
                  "0.10",
                  "0.30"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "[H⁺] = 1.16 × 10⁻⁵ mol dm⁻³",
              "requiredKeywordGroups": [
                [
                  "1.16"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "pH = 4.94",
              "numericMatch": {
                "value": 4.94,
                "tolerance": 0.03
              }
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-6c",
        "label": "c)",
        "prompt": "Explain with an equation how this buffer resists a large drop in pH when a small volume of dilute HCl is added.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "The large reservoir of ethanoate ions (CH₃COO⁻) reacts with the added H⁺ ions (CH₃COO⁻ + H⁺ → CH₃COOH), shifting the dissociation equilibrium to the left so [H⁺] stays almost constant.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Reservoir of CH₃COO⁻ ions reacts with added H⁺ to form CH₃COOH",
              "requiredKeywordGroups": [
                [
                  "ethanoate",
                  "ch3coo",
                  "a-"
                ],
                [
                  "h+",
                  "react"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Equilibrium shifts left keeping [H⁺] / pH nearly constant",
              "requiredKeywordGroups": [
                [
                  "left",
                  "constant"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-7",
    "subtopicId": "al-chem-7-2",
    "number": 7,
    "stimulus": "When aqueous EDTA⁴⁻ is added to pale blue aqueous [Cu(H₂O)₆]²⁺, ligand substitution occurs completely to form dark blue [Cu(EDTA)]²⁻ and six water molecules.",
    "parts": [
      {
        "id": "al-chem-exam-7a",
        "label": "a)",
        "prompt": "What is the coordination number of the copper(II) ion in both [Cu(H₂O)₆]²⁺ and [Cu(EDTA)]²⁻?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-chem-exam-7b",
        "label": "b)",
        "prompt": "Explain in terms of entropy (ΔS) and Gibbs free energy (ΔG) why this ligand substitution is thermodynamically favoured (the chelate effect).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "One hexadentate EDTA⁴⁻ ion replaces six monodentate H₂O ligands, increasing total particles in solution from 2 moles to 7 moles. This gives a large positive entropy change (ΔS > 0); since ΔH ≈ 0, ΔG = ΔH − TΔS is strongly negative.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Increases number of free particles/moles in solution from 2 to 7",
              "requiredKeywordGroups": [
                [
                  "2 to 7",
                  "7",
                  "increase"
                ],
                [
                  "mole",
                  "particle",
                  "species"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Large positive entropy change (ΔS > 0)",
              "requiredKeywordGroups": [
                [
                  "entropy",
                  "δs"
                ],
                [
                  "positive",
                  "increase"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "ΔG = ΔH − TΔS becomes strongly negative",
              "requiredKeywordGroups": [
                [
                  "δg",
                  "gibbs"
                ],
                [
                  "negative",
                  "feasible"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-7c",
        "label": "c)",
        "prompt": "Explain why changing the ligands around Cu²⁺ changes the shade of blue observed.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Different ligands change the d-orbital splitting energy gap ΔE. Therefore a different frequency/wavelength of visible light is absorbed (ΔE = hc/λ) for d–d electron excitation, transmitting a different complementary shade.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Changes the d-orbital energy splitting gap ΔE",
              "requiredKeywordGroups": [
                [
                  "splitting",
                  "gap",
                  "δe",
                  "3d"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Different frequency/wavelength of visible light absorbed (ΔE = hc/λ)",
              "requiredKeywordGroups": [
                [
                  "frequency",
                  "wavelength"
                ],
                [
                  "absorb"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-exam-8",
    "subtopicId": "al-chem-8-3",
    "number": 8,
    "stimulus": "Benzene is nitrated at 55°C using a mixture of concentrated nitric acid and concentrated sulfuric acid to produce nitrobenzene, which can then be reduced to phenylamine.",
    "parts": [
      {
        "id": "al-chem-exam-8a",
        "label": "a)",
        "prompt": "Write the equation showing how the nitronium electrophile (NO₂⁺) is generated.",
        "kind": "short-answer",
        "marks": 1,
        "rubric": {
          "maxMarks": 1,
          "modelAnswer": "HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺ (or HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Balanced equation generating NO₂⁺ and HSO₄⁻",
              "requiredKeywordGroups": [
                [
                  "no2"
                ],
                [
                  "hso4"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-8b",
        "label": "b)",
        "prompt": "Explain why benzene reacts by electrophilic substitution rather than undergoing electrophilic addition like cyclohexene.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Benzene has extra thermodynamic stability (~152 kJ mol⁻¹) due to its delocalised π-electron ring. Addition would permanently destroy this delocalisation stability, whereas substitution restores the stable aromatic π-system.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Extra stability of delocalised π-ring system",
              "requiredKeywordGroups": [
                [
                  "delocalis",
                  "pi"
                ],
                [
                  "stabil",
                  "stable"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Addition would break/destroy delocalisation; substitution retains/restores it",
              "requiredKeywordGroups": [
                [
                  "addition",
                  "substitution"
                ],
                [
                  "destroy",
                  "break",
                  "retain",
                  "restor",
                  "preserv"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-chem-exam-8c",
        "label": "c)",
        "prompt": "State the reagents required to reduce nitrobenzene to phenylamine in the laboratory, and explain why phenylamine is a weaker base than ethylamine.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Heat under reflux with tin (Sn) and concentrated HCl, followed by aqueous NaOH. Phenylamine is a weaker base because the nitrogen lone pair delocalises into the benzene π-ring (making it less available to accept H⁺), whereas the ethyl group has a positive inductive effect pushing electron density onto N.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Reagents: Tin (Sn) and conc. HCl followed by NaOH",
              "requiredKeywordGroups": [
                [
                  "tin",
                  "sn",
                  "fe"
                ],
                [
                  "hcl"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Phenylamine N lone pair delocalises into benzene π-ring (less available for H⁺)",
              "requiredKeywordGroups": [
                [
                  "lone pair"
                ],
                [
                  "delocalis",
                  "ring",
                  "benzene"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Ethyl group exerts positive inductive effect increasing electron density on N",
              "requiredKeywordGroups": [
                [
                  "inductive",
                  "donate",
                  "push"
                ],
                [
                  "ethyl",
                  "alkyl"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-1-1",
    "subtopicId": "al-chem-1-1",
    "number": 9,
    "stimulus": "[AQA 7405 / OCR H432 Style] Manganese (Mn, Z = 25) and Copper (Cu, Z = 29) are both first-row d-block elements.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Give the electron configuration of Mn²⁺ and explain why a 3d orbital holds a maximum of two electrons with opposite spins.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Mn is [Ar] 3d⁵ 4s²; removing the two 4s electrons gives Mn²⁺ = 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ ([Ar] 3d⁵). Each orbital can hold up to 2 electrons with opposite spins to minimise electrostatic repulsion (Pauli exclusion principle).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Removes 4s² electrons first",
              "requiredKeywordGroups": [
                [
                  "4s"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Mn²⁺ = [Ar] 3d⁵ (or 1s²2s²2p⁶3s²3p⁶3d⁵)",
              "requiredKeywordGroups": [
                [
                  "3d5",
                  "3d⁵"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Opposite spins / Pauli exclusion / minimises repulsion",
              "requiredKeywordGroups": [
                [
                  "opposite spin",
                  "pauli",
                  "repulsion"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-3-2",
    "subtopicId": "al-chem-3-2",
    "number": 10,
    "stimulus": "[AQA 7405 / OCR H432 Style] The boiling points of the Group 6 hydrides are: H₂O (+100 °C), H₂S (−60 °C), H₂Se (−41 °C), H₂Te (−2 °C).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain both the unusually high boiling point of H₂O and the steady increase in boiling point from H₂S to H₂Te.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "H₂O forms strong hydrogen bonds between molecules (oxygen is highly electronegative with lone pairs), requiring far more energy to overcome. From H₂S to H₂Te, the number of electrons / Mr increases, strengthening van der Waals (London) forces so more energy is needed to separate molecules.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "H₂O has hydrogen bonding between molecules",
              "requiredKeywordGroups": [
                [
                  "hydrogen bond"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "H₂S to H₂Te has increasing electrons / Mr",
              "requiredKeywordGroups": [
                [
                  "electron",
                  "mr",
                  "size"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Stronger van der Waals / London forces requiring more energy",
              "requiredKeywordGroups": [
                [
                  "van der waals",
                  "london",
                  "induced dipole"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-4-1",
    "subtopicId": "al-chem-4-1",
    "number": 11,
    "stimulus": "[AQA 7405 / OCR H432 Style] 50.0 cm³ of 1.00 mol dm⁻³ HCl is mixed with 50.0 cm³ of 1.00 mol dm⁻³ NaOH in an insulated cup. The temperature rises by 6.7 °C (c = 4.18 J g⁻¹ K⁻¹, density = 1.00 g cm⁻³).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the heat energy q absorbed by the solution and the standard enthalpy of neutralisation Δ_neut H (in kJ mol⁻¹, with sign).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Total mass m = 100 g. q = 100 × 4.18 × 6.7 = 2800.6 J = 2.80 kJ. Moles of water formed = 0.050 mol. Δ_neut H = −2.80 / 0.050 = −56.0 kJ mol⁻¹.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Uses total mass 100 g to get q = 2.80 kJ (2801 J)",
              "requiredKeywordGroups": [
                [
                  "2800",
                  "2801",
                  "2.80",
                  "2.8"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Moles = 0.050 mol",
              "numericMatch": {
                "value": 0.05,
                "tolerance": 0.002
              }
            },
            {
              "id": "mp3",
              "markDescription": "Δ_neut H = −56.0 kJ mol⁻¹ (negative sign!)",
              "numericMatch": {
                "value": -56,
                "tolerance": 0.6
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-6-1",
    "subtopicId": "al-chem-6-1",
    "number": 12,
    "stimulus": "[AQA 7405 / OCR H432 Style] At 700 K, 2.00 mol of HI(g) is placed in a 1.00 dm³ vessel and reaches equilibrium: 2HI(g) ⇌ H₂(g) + I₂(g). At equilibrium, 0.40 mol of H₂(g) is present.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Find the equilibrium moles of I₂ and HI, and calculate the equilibrium constant Kc (state whether it has units).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Equilibrium moles: H₂ = 0.40, I₂ = 0.40, HI = 2.00 − 2(0.40) = 1.20 mol. Kc = (0.40 × 0.40) / (1.20)² = 0.16 / 1.44 = 0.111 (no units because 2 mol gas on both sides).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Equilibrium HI = 1.20 mol (and I₂ = 0.40 mol)",
              "numericMatch": {
                "value": 1.2,
                "tolerance": 0.02
              }
            },
            {
              "id": "mp2",
              "markDescription": "Kc = 0.111 (1/9)",
              "numericMatch": {
                "value": 0.111,
                "tolerance": 0.005
              }
            },
            {
              "id": "mp3",
              "markDescription": "No units",
              "requiredKeywordGroups": [
                [
                  "no unit",
                  "dimensionless",
                  "none"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-7-1",
    "subtopicId": "al-chem-7-1",
    "number": 13,
    "stimulus": "[AQA 7405 / OCR H432 Style] Solid sodium bromide (NaBr) is warmed with concentrated sulfuric acid (H₂SO₄), producing steamy fumes, a choking colourless gas, and brown vapour.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Identify the three products observed and write the balanced redox equation showing Br⁻ reducing H₂SO₄.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Steamy fumes = HBr; choking gas = SO₂; brown vapour = Br₂. Redox equation: 2HBr + H₂SO₄ → Br₂ + SO₂ + 2H₂O (or 2Br⁻ + 2H⁺ + H₂SO₄ → Br₂ + SO₂ + 2H₂O).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies HBr, SO₂, and Br₂",
              "requiredKeywordGroups": [
                [
                  "hbr"
                ],
                [
                  "so2",
                  "so₂"
                ],
                [
                  "br2",
                  "br₂"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Correct redox species (2Br⁻ → Br₂, H₂SO₄ → SO₂)",
              "requiredKeywordGroups": [
                [
                  "br2",
                  "br₂"
                ],
                [
                  "so2",
                  "so₂"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Balanced with 2H₂O",
              "requiredKeywordGroups": [
                [
                  "2h2o",
                  "2h₂o",
                  "2 h2o"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-8-1",
    "subtopicId": "al-chem-8-1",
    "number": 14,
    "stimulus": "[AQA 7405 / OCR H432 Style] Methane reacts with chlorine in the presence of ultraviolet light to form chloromethane (CH₃Cl).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Write the initiation equation and the TWO propagation equations for the formation of CH₃Cl, and explain why trace amounts of ethane (C₂H₆) are also detected.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Initiation: Cl₂ → 2Cl•. Propagation 1: Cl• + CH₄ → •CH₃ + HCl. Propagation 2: •CH₃ + Cl₂ → CH₃Cl + Cl•. Ethane forms via termination when two methyl radicals collide: •CH₃ + •CH₃ → C₂H₆.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Initiation Cl₂ → 2Cl•",
              "requiredKeywordGroups": [
                [
                  "cl2",
                  "cl₂"
                ],
                [
                  "2cl"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Both propagation steps cleanly",
              "requiredKeywordGroups": [
                [
                  "ch3",
                  "•ch3",
                  "hcl"
                ],
                [
                  "ch3cl"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Termination of two •CH₃ radicals forms C₂H₆",
              "requiredKeywordGroups": [
                [
                  "termination",
                  "two methyl",
                  "ch3 + ch3",
                  "•ch3 + •ch3"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-8-2",
    "subtopicId": "al-chem-8-2",
    "number": 15,
    "stimulus": "[AQA 7405 / OCR H432 Style] Three unlabelled liquid bottles contain propan-1-ol, propanal, and propanoic acid.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Describe simple chemical tests (reagents and positive observations) that uniquely identify propanoic acid and propanal.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Add NaHCO₃(aq) or Na₂CO₃(aq): ONLY propanoic acid produces effervescence / fizzing (CO₂ gas). Warm the remaining two with Tollens’ reagent (or Fehling’s): ONLY propanal gives a silver mirror (or brick-red ppt).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Na₂CO₃ / NaHCO₃ gives fizzing/effervescence with propanoic acid",
              "requiredKeywordGroups": [
                [
                  "carbonate",
                  "nahco3",
                  "na2co3"
                ],
                [
                  "fizz",
                  "effervescence",
                  "bubble",
                  "co2"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Tollens’ or Fehling’s reagent used for propanal",
              "requiredKeywordGroups": [
                [
                  "tollens",
                  "fehling"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Silver mirror (or brick-red ppt) confirms propanal",
              "requiredKeywordGroups": [
                [
                  "silver mirror",
                  "brick-red",
                  "brick red"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-chem-ex-8-4",
    "subtopicId": "al-chem-8-4",
    "number": 16,
    "stimulus": "[AQA 7405 / OCR H432 Style] Compound X (molecular formula C₄H₈O₂) shows a sharp IR peak at 1740 cm⁻¹, NO broad O–H peak, and three ¹H NMR peaks: a 3H triplet at δ 1.2, a 3H singlet at δ 2.0, and a 2H quartet at δ 4.1.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Deduce the functional group from IR, identify the structural fragments from the NMR splitting and chemical shifts, and name compound X.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "IR 1740 cm⁻¹ with no O–H confirms an ester (C=O). The 3H triplet (δ 1.2) + 2H quartet (δ 4.1) indicates an O–CH₂CH₃ (ethyl bonded to oxygen) group; the 3H singlet (δ 2.0) is CH₃–C=O. Compound X is ethyl ethanoate (CH₃COOCH₂CH₃).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies ester C=O (no O–H)",
              "requiredKeywordGroups": [
                [
                  "ester",
                  "c=o"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Triplet + quartet at δ 4.1 = O–CH₂CH₃",
              "requiredKeywordGroups": [
                [
                  "ethyl",
                  "och2ch3",
                  "o-ch2ch3",
                  "o–ch₂ch₃",
                  "ch2ch3"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Names ethyl ethanoate",
              "requiredKeywordGroups": [
                [
                  "ethyl ethanoate"
                ]
              ]
            }
          ]
        }
      }
    ]
  }
];

export const ALEVEL_CHEMISTRY_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "al-chem-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 1 — Inorganic & Physical Chemistry (7405/1)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7405/1",
    "durationMinutes": 120,
    "totalMarks": 105,
    "insertNote": "Includes AQA Chemistry Data Booklet (Periodic Table, Electrode Potentials & Thermodynamic Data).",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Explain why the first ionisation energy of aluminium is lower than that of magnesium.",
        "marks": 2,
        "markScheme": [
          "Al outer electron is in a 3p orbital (higher energy / further from nucleus than Mg 3s); slightly more shielded by 3s² electrons."
        ]
      },
      {
        "number": "03.1",
        "question": "Explain why the experimental Born-Haber lattice enthalpy of silver iodide differs from the value calculated using the perfect ionic model.",
        "marks": 2,
        "markScheme": [
          "Ag⁺ polarises/distorts the large I⁻ electron cloud; introduces significant covalent character making experimental lattice stronger/more exothermic."
        ]
      },
      {
        "number": "04.3",
        "question": "Explain why [Fe(H₂O)₆]³⁺ solutions have a much lower pH than equimolar [Fe(H₂O)₆]²⁺ solutions.",
        "marks": 3,
        "markScheme": [
          "Fe³⁺ ion is smaller with a higher charge (higher charge density); polarises coordinated H₂O molecules more strongly; weakens O–H bonds so H⁺ ions dissociate more readily."
        ]
      },
      {
        "number": "06.2",
        "question": "Calculate the pH of a 0.120 mol dm⁻³ solution of barium hydroxide, Ba(OH)₂, at 298 K (Kw = 1.00 × 10⁻¹⁴ mol² dm⁻⁶).",
        "marks": 3,
        "markScheme": [
          "[OH⁻] = 2 × 0.120 = 0.240 mol dm⁻³; [H⁺] = 1.00×10⁻¹⁴ ÷ 0.240 = 4.17×10⁻¹⁴ mol dm⁻³; pH = −log₁₀(4.17×10⁻¹⁴) = 13.38."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 2 — Organic & Physical Chemistry (7405/2)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7405/2",
    "durationMinutes": 120,
    "totalMarks": 105,
    "insertNote": "Includes AQA Data Booklet (Infrared wavenumber table, ¹H NMR & ¹³C NMR chemical shift ranges).",
    "sampleQuestions": [
      {
        "number": "01.3",
        "question": "Explain how the Maxwell-Boltzmann distribution accounts for the large increase in reaction rate for a 10 K temperature rise.",
        "marks": 3,
        "markScheme": [
          "Curve peak shifts right and lower; area under curve beyond Ea increases dramatically; much higher proportion of collisions have energy ≥ Ea."
        ]
      },
      {
        "number": "03.1",
        "question": "Deduce the structure of C₄H₈O₂ showing a sharp IR absorption at 1740 cm⁻¹, no broad O–H band, and a ¹H NMR spectrum with a 3H singlet (δ 2.1), a 2H quartet (δ 4.1), and a 3H triplet (δ 1.3).",
        "marks": 4,
        "markScheme": [
          "IR 1740 cm⁻¹ without O–H indicates ester C=O; 3H triplet + 2H quartet at δ 4.1 = –OCH₂CH₃ attached to O; 3H singlet at δ 2.1 = CH₃C=O; structure is ethyl ethanoate, CH₃COOCH₂CH₃."
        ]
      },
      {
        "number": "05.2",
        "question": "Explain why reaction of ethanal with KCN followed by dilute HCl forms a racemic mixture.",
        "marks": 3,
        "markScheme": [
          "Aldehyde C=O group is trigonal planar; CN⁻ nucleophile attacks with equal probability from above or below plane; produces equimolar 50:50 mixture of two enantiomers whose optical rotations cancel."
        ]
      },
      {
        "number": "07.1",
        "question": "Explain why polyamides such as Nylon-6,6 are biodegradable in soil whereas poly(ethene) is not.",
        "marks": 2,
        "markScheme": [
          "Polyamides contain polar amide (–CONH–) links that can be hydrolysed by water/acids/enzymes; poly(ethene) contains only non-polar, unreactive C–C and C–H bonds."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2024-p3",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 3 — Practical Skills & Synoptic MCQs (7405/3)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7405/3",
    "durationMinutes": 120,
    "totalMarks": 90,
    "insertNote": "Assesses Required Practicals 1–12 (60 marks) and synoptic multiple-choice questions across all specification topics (30 marks).",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Describe how to prepare 250 cm³ of a standard solution of sodium hydrogensulfate from a weighed solid sample.",
        "marks": 4,
        "markScheme": [
          "Dissolve weighed solid in a small volume of deionised water in a beaker; transfer with washings into a 250 cm³ volumetric flask using a funnel; add water to graduation mark (bottom of meniscus) with dropping pipette; stopper and invert several times to mix thoroughly."
        ]
      },
      {
        "number": "02.1",
        "question": "Explain how a student obtains an accurate ΔT for a slow displacement reaction in a polystyrene cup using a temperature-time graph.",
        "marks": 3,
        "markScheme": [
          "Record temperature before mixing and every 30 s after mixing as it cools; plot straight line of best fit along cooling curve; extrapolate cooling line backwards to exact time of mixing to correct for heat loss."
        ]
      },
      {
        "number": "03.2",
        "question": "Describe the test-tube reactions using acidified AgNO₃ and aqueous NH₃ that distinguish aqueous NaCl, NaBr, and NaI.",
        "marks": 3,
        "markScheme": [
          "AgCl gives white ppt soluble in dilute NH₃; AgBr gives cream ppt soluble only in concentrated NH₃; AgI gives yellow ppt insoluble in concentrated NH₃."
        ]
      },
      {
        "number": "04.1",
        "question": "Explain why anti-bumping granules are added to the pear-shaped flask during organic reflux and distillation.",
        "marks": 1,
        "markScheme": [
          "Provide nucleation sites for small bubbles, preventing violent boiling/bumping of the liquid."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 1 — Inorganic & Physical Chemistry (7405/1)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7405/1",
    "durationMinutes": 120,
    "totalMarks": 105,
    "insertNote": "Includes AQA Chemistry Data Booklet (Periodic Table and Standard Electrode Potentials).",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "A ²⁴Mg⁺ ion travels down a 1.50 m TOF flight tube with kinetic energy 1.26 × 10⁻¹³ J. Calculate its time of flight (Nₐ = 6.022 × 10²³ mol⁻¹).",
        "marks": 4,
        "markScheme": [
          "Mass of one ion m = (24 × 10⁻³) ÷ 6.022×10²³ = 3.985×10⁻²⁶ kg; v = √(2KE/m) = √(2.52×10⁻¹³ ÷ 3.985×10⁻²⁶) = 2.515×10⁶ m s⁻¹; t = d/v = 1.50 ÷ 2.515×10⁶ = 5.96 × 10⁻⁷ s."
        ]
      },
      {
        "number": "02.3",
        "question": "Deduce the VSEPR shape and bond angle of the ClF₄⁻ ion.",
        "marks": 3,
        "markScheme": [
          "Cl has 7 valence e⁻ + 4 from F + 1 negative charge = 12 e⁻ = 6 pairs; 4 bonding pairs and 2 lone pairs; lone pairs sit opposite (180°) to minimise LP–LP repulsion giving square planar shape with 90° bond angles."
        ]
      },
      {
        "number": "04.2",
        "question": "Write equations showing the amphoteric behaviour of Al₂O₃ with hydrochloric acid and with aqueous sodium hydroxide.",
        "marks": 2,
        "markScheme": [
          "With HCl: Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; With NaOH: Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄."
        ]
      },
      {
        "number": "06.1",
        "question": "Explain why Kp for an endothermic gaseous decomposition increases when temperature is raised.",
        "marks": 2,
        "markScheme": [
          "Equilibrium shifts right in endothermic direction to absorb heat; partial pressures of products rise and reactants fall, increasing the Kp ratio."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 2 — Organic & Physical Chemistry (7405/2)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7405/2",
    "durationMinutes": 120,
    "totalMarks": 105,
    "insertNote": "Includes AQA Data Booklet (IR, ¹H NMR & ¹³C NMR tables).",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "An Arrhenius plot of ln k against 1/T gives a straight line of gradient −6,420 K. Calculate the activation energy Ea in kJ mol⁻¹ (R = 8.31 J K⁻¹ mol⁻¹).",
        "marks": 2,
        "markScheme": [
          "Gradient = −Ea / R → Ea = 6420 × 8.31 = 53,350 J mol⁻¹ = 53.4 kJ mol⁻¹."
        ]
      },
      {
        "number": "03.1",
        "question": "Write initiation and two propagation equations for the free-radical mono-chlorination of ethane under UV light.",
        "marks": 3,
        "markScheme": [
          "Initiation: Cl₂ → 2Cl•; Propagation 1: Cl• + C₂H₆ → •C₂H₅ + HCl; Propagation 2: •C₂H₅ + Cl₂ → C₂H₅Cl + Cl•."
        ]
      },
      {
        "number": "04.2",
        "question": "Explain why 2-bromopropane is the major product when propene reacts with HBr.",
        "marks": 3,
        "markScheme": [
          "Proceeds via secondary carbocation CH₃C⁺HCH₃ rather than primary CH₃CH₂C⁺H₂; secondary carbocation is more stable due to positive inductive electron donation from two alkyl groups."
        ]
      },
      {
        "number": "06.3",
        "question": "Give three pieces of evidence that support the delocalised π-electron model of benzene over Kekulé’s cyclohexa-1,3,5-triene structure.",
        "marks": 3,
        "markScheme": [
          "All six C–C bond lengths equal (0.139 nm); enthalpy of hydrogenation (−208 kJ mol⁻¹) is 152 kJ mol⁻¹ less exothermic than 3 × cyclohexene (−360 kJ mol⁻¹); undergoes substitution rather than addition with bromine."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2023-p3",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 3 — Practical Skills & Synoptic MCQs (7405/3)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7405/3",
    "durationMinutes": 120,
    "totalMarks": 90,
    "insertNote": "Practical techniques, data analysis, and 30 synoptic multiple-choice questions.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "In the preparation of cyclohexene from cyclohexanol, state the purpose of adding sodium carbonate solution and anhydrous calcium chloride during purification.",
        "marks": 2,
        "markScheme": [
          "Sodium carbonate neutralises remaining phosphoric/sulfuric acid catalyst; anhydrous CaCl₂ acts as a drying agent to remove trace water."
        ]
      },
      {
        "number": "02.3",
        "question": "Explain why phenolphthalein is a suitable indicator for titrating ethanoic acid with NaOH whereas methyl orange is not.",
        "marks": 2,
        "markScheme": [
          "Weak acid–strong base curve has its steep vertical jump between pH 7 and 11; phenolphthalein colour change range (8.3–10.0) lies entirely within the vertical section, whereas methyl orange (3.1–4.4) changes gradually in the buffer region."
        ]
      },
      {
        "number": "03.1",
        "question": "Describe how to recrystallise an impure solid sample of aspirin using hot ethanol.",
        "marks": 4,
        "markScheme": [
          "Dissolve impure solid in minimum volume of hot solvent; filter hot to remove insoluble impurities; cool filtrate in ice bath to crystallise aspirin; filter under reduced pressure (Buchner funnel), wash with cold solvent, and dry."
        ]
      },
      {
        "number": "04.2",
        "question": "State two ways in which melting-point determination shows that a recrystallised organic solid is pure.",
        "marks": 2,
        "markScheme": [
          "Sharp melting range (within 1–2 °C); melts at the exact literature melting temperature (impurities depress and broaden melting point)."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 1 — Inorganic & Physical Chemistry (7405/1)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7405/1",
    "durationMinutes": 120,
    "totalMarks": 105,
    "insertNote": "Includes AQA Chemistry Data Booklet.",
    "sampleQuestions": [
      {
        "number": "01.3",
        "question": "Write full redox equations for the reaction of solid sodium iodide with concentrated sulfuric acid to form hydrogen sulfide.",
        "marks": 2,
        "markScheme": [
          "8NaI + 5H₂SO₄ → 4I₂ + H₂S + 4Na₂SO₄ + 4H₂O (or ionic: 8I⁻ + H₂SO₄ + 8H⁺ → 4I₂ + H₂S + 4H₂O)."
        ]
      },
      {
        "number": "03.2",
        "question": "Explain how Mn²⁺ ions act as an autocatalyst in the reaction between acidified MnO₄⁻ and C₂O₄²⁻ ions.",
        "marks": 3,
        "markScheme": [
          "Reaction starts slowly as two negatively charged ions repel; once trace Mn²⁺ product forms, Mn²⁺ reacts with MnO₄⁻ to form intermediate Mn³⁺, which then oxidises C₂O₄²⁻ and regenerates Mn²⁺, accelerating the rate."
        ]
      },
      {
        "number": "05.1",
        "question": "Calculate the enthalpy of solution of CaCl₂ given lattice dissociation enthalpy = +2258 kJ mol⁻¹, ΔhydH(Ca²⁺) = −1650 kJ mol⁻¹, and ΔhydH(Cl⁻) = −364 kJ mol⁻¹.",
        "marks": 2,
        "markScheme": [
          "ΔsolH = +2258 + (−1650) + 2(−364) = 2258 − 2378 = −120 kJ mol⁻¹."
        ]
      },
      {
        "number": "06.3",
        "question": "Explain why cisplatin must be administered in small controlled doses despite its effectiveness against cancer.",
        "marks": 2,
        "markScheme": [
          "Cisplatin binds to guanine bases in DNA of ALL rapidly dividing cells (not just tumour cells), damaging healthy hair follicle, gut, and kidney cells."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 2 — Organic & Physical Chemistry (7405/2)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7405/2",
    "durationMinutes": 120,
    "totalMarks": 105,
    "insertNote": "Includes AQA Data Booklet (IR, ¹H NMR & ¹³C NMR tables).",
    "sampleQuestions": [
      {
        "number": "02.1",
        "question": "Explain why 1-iodobutane undergoes nucleophilic substitution with aqueous NaOH much faster than 1-chlorobutane.",
        "marks": 2,
        "markScheme": [
          "C–I bond has a much lower bond enthalpy (weaker bond) than C–Cl; C–X bond breaking is the rate-determining factor, outweighing C–Cl’s greater polarity."
        ]
      },
      {
        "number": "04.2",
        "question": "Outline the nucleophilic addition-elimination mechanism for the reaction of ethanoyl chloride with methanol.",
        "marks": 4,
        "markScheme": [
          "Lone pair on methanol O attacks δ⁺ carbonyl C while C=O π-bond breaks to O⁻; tetrahedral intermediate reforms C=O and expels Cl⁻ leaving group; loss of H⁺ yields methyl ethanoate + HCl."
        ]
      },
      {
        "number": "05.3",
        "question": "Draw the structure of the zwitterion of alanine (H₂NCH(CH₃)COOH) at its isoelectric point and explain its high melting point.",
        "marks": 2,
        "markScheme": [
          "⁺H₃NCH(CH₃)COO⁻; strong electrostatic ionic attractions between oppositely charged –NH₃⁺ and –COO⁻ groups in a giant ionic-style crystal lattice."
        ]
      },
      {
        "number": "07.2",
        "question": "Explain why deuterated trichloromethane (CDCl₃) is used as a solvent in ¹H NMR spectroscopy instead of CHCl₃.",
        "marks": 1,
        "markScheme": [
          "Deuterium (²H) does not produce a ¹H NMR resonance signal, preventing a massive solvent peak from swamping the sample spectrum."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2022-p3",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 3 — Practical Skills & Synoptic MCQs (7405/3)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7405/3",
    "durationMinutes": 120,
    "totalMarks": 90,
    "insertNote": "Assesses practical chemistry techniques and synoptic theory across all 3 years of study.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "In an iodine-clock initial-rates experiment, explain the role of the small fixed amount of sodium thiosulfate added to every flask.",
        "marks": 2,
        "markScheme": [
          "Reacts immediately with I₂ as it forms (2S₂O₃²⁻ + I₂ → 2I⁻ + S₄O₆²⁻); delays the blue-black starch colour appearance until an exact fixed number of moles of I₂ has been produced."
        ]
      },
      {
        "number": "02.2",
        "question": "Describe how thin-layer chromatography (TLC) can be used to monitor the completion of aspirin synthesis from salicylic acid.",
        "marks": 3,
        "markScheme": [
          "Spot pure salicylic acid, pure aspirin, and reaction mixture onto TLC baseline; run in solvent and visualise under UV lamp; reaction is complete when no spot remains at the Rf value of salicylic acid."
        ]
      },
      {
        "number": "03.1",
        "question": "Explain why the burette jet must be filled before starting a titration.",
        "marks": 1,
        "markScheme": [
          "Otherwise part of the recorded volume delivered from the burette goes into filling the air bubble in the jet rather than entering the conical flask (making the titre too large)."
        ]
      },
      {
        "number": "04.3",
        "question": "Write the ionic equation for the test confirming the presence of sulfate ions using acidified barium chloride.",
        "marks": 1,
        "markScheme": [
          "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) (white precipitate)."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-cie-9701",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE International A-Level Paper 4 (9701/42)",
    "tier": "A-Level",
    "series": "May/June 2024",
    "paperCode": "9701/42",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Cambridge International A-Level Chemistry covering Thermodynamics, Kinetics, Transition Elements, Arenes & NMR.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Explain why the solubility of Group 2 sulfates decreases down the group from MgSO₄ to BaSO₄.",
        "marks": 3,
        "markScheme": [
          "Both lattice enthalpy and hydration enthalpy become less exothermic as cation radius increases; hydration enthalpy of cation decreases much more rapidly than lattice enthalpy because SO₄²⁻ is already much larger than the cations; ΔsolH becomes more endothermic down the group."
        ]
      },
      {
        "number": "03.1",
        "question": "Calculate the cell EMF E°cell for a Fe³⁺/Fe²⁺ (+0.77 V) and Cr₂O₇²⁻/Cr³⁺ (+1.33 V) electrochemical cell and write the overall feasible equation.",
        "marks": 3,
        "markScheme": [
          "E°cell = 1.33 − 0.77 = +0.56 V; Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 7H₂O + 6Fe³⁺."
        ]
      },
      {
        "number": "05.2",
        "question": "Explain the relative basicities of ammonia, ethylamine, and phenylamine.",
        "marks": 3,
        "markScheme": [
          "Ethylamine > ammonia > phenylamine; ethyl positive inductive effect increases lone-pair availability on N; phenylamine N lone pair delocalises into benzene π-ring reducing proton-accepting ability."
        ]
      },
      {
        "number": "07.1",
        "question": "Explain how high-resolution mass spectrometry distinguishes propanal (C₃H₆O) from butane (C₄H₁₀), both having nominal Mr = 58.",
        "marks": 2,
        "markScheme": [
          "Uses exact isotopic atomic masses to 4 decimal places (¹H = 1.0078, ¹²C = 12.0000, ¹⁶O = 15.9949); C₃H₆O gives m/z = 58.0417 whereas C₄H₁₀ gives m/z = 58.0780."
        ]
      }
    ]
  },
  {
    "id": "al-chem-pp-2019-old",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy Unit CHEM1 & CHEM4 Combined Archive (2420)",
    "tier": "A-Level",
    "series": "June 2019",
    "paperCode": "2420/CHEM",
    "durationMinutes": 105,
    "totalMarks": 90,
    "insertNote": "Legacy specification archive paper covering core stoichiometry, bonding, equilibria, and carbonyl chemistry.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Define the term electronegativity and state the trend across Period 3.",
        "marks": 2,
        "markScheme": [
          "Power of an atom to attract the pair of bonding electrons in a covalent bond; increases across Period 3 due to increasing nuclear charge and decreasing atomic radius at constant shielding."
        ]
      },
      {
        "number": "02.2",
        "question": "Explain why a catalyst has no effect on the position of equilibrium or the value of Kc.",
        "marks": 2,
        "markScheme": [
          "Lowers activation energy equally for both forward and reverse reactions; increases forward and reverse rates by the exact same factor."
        ]
      },
      {
        "number": "03.3",
        "question": "Describe a chemical test that distinguishes propanal from propanone.",
        "marks": 2,
        "markScheme": [
          "Warm with Tollens’ reagent: propanal forms a silver mirror whereas propanone gives no change (or Fehling’s solution: propanal gives brick-red ppt)."
        ]
      },
      {
        "number": "04.1",
        "question": "Write an equation for the reaction of chlorine with cold dilute aqueous sodium hydroxide and state one use of the solution formed.",
        "marks": 2,
        "markScheme": [
          "Cl₂ + 2NaOH → NaClO + NaCl + H₂O; used as household bleach / disinfectant."
        ]
      }
    ]
  }
];

export const ALEVEL_CHEMISTRY_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "al-chem-kt-1",
    "term": "Activation energy (Ea)",
    "definition": "Minimum kinetic energy colliding particles must possess for a collision to lead to reaction.",
    "topicNumber": 5,
    "subtopicId": "al-chem-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-chem-kt-2",
    "term": "Amphoteric",
    "definition": "Species such as Al₂O₃ capable of reacting as both an acid and a base.",
    "topicNumber": 7,
    "subtopicId": "al-chem-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-chem-kt-3",
    "term": "Arrhenius equation",
    "definition": "k = A·exp(−Ea/RT), relating rate constant exponentially to temperature and activation energy.",
    "topicNumber": 5,
    "subtopicId": "al-chem-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-chem-kt-4",
    "term": "Atom economy",
    "definition": "(Mᵣ of desired product ÷ ΣMᵣ of all reactants) × 100.",
    "topicNumber": 2,
    "subtopicId": "al-chem-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "al-chem-kt-5",
    "term": "Autocatalysis",
    "definition": "Catalysis of a reaction by one of its own reaction products (e.g. Mn²⁺ in manganate-oxalate).",
    "topicNumber": 7,
    "subtopicId": "al-chem-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-chem-kt-6",
    "term": "Born-Haber cycle",
    "definition": "Hess’s Law enthalpy cycle used to calculate experimental ionic lattice enthalpies.",
    "topicNumber": 4,
    "subtopicId": "al-chem-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-chem-kt-7",
    "term": "Brønsted-Lowry acid",
    "definition": "Chemical species that acts as a proton (H⁺) donor.",
    "topicNumber": 6,
    "subtopicId": "al-chem-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-chem-kt-8",
    "term": "Buffer solution",
    "definition": "Solution resisting pH change upon small additions of acid or alkali (weak acid + conjugate base).",
    "topicNumber": 6,
    "subtopicId": "al-chem-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-chem-kt-9",
    "term": "Carbocation",
    "definition": "Positively charged carbon intermediate stabilised by adjacent alkyl positive inductive effects (3° > 2° > 1°).",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-chem-kt-10",
    "term": "Chelate effect",
    "definition": "Entropy-driven thermodynamic favourability of multidentate ligands displacing monodentate ligands.",
    "topicNumber": 7,
    "subtopicId": "al-chem-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-chem-kt-11",
    "term": "Chemical shift (δ)",
    "definition": "NMR peak frequency position in ppm relative to TMS (δ = 0), reflecting local electron shielding.",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-4",
    "subtopicCode": "8.4"
  },
  {
    "id": "al-chem-kt-12",
    "term": "Coordinate bond",
    "definition": "Covalent bond in which both shared electrons originate from one donor atom.",
    "topicNumber": 3,
    "subtopicId": "al-chem-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "al-chem-kt-13",
    "term": "Covalent character",
    "definition": "Ionic bond strengthening due to a high-charge-density cation polarising a large anion electron cloud.",
    "topicNumber": 4,
    "subtopicId": "al-chem-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-chem-kt-14",
    "term": "Disproportionation",
    "definition": "Redox reaction in which the same element is simultaneously oxidised and reduced.",
    "topicNumber": 7,
    "subtopicId": "al-chem-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-chem-kt-15",
    "term": "Electronegativity",
    "definition": "Power of an atom to attract the bonding pair of electrons in a covalent bond.",
    "topicNumber": 3,
    "subtopicId": "al-chem-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-chem-kt-16",
    "term": "Electrophile",
    "definition": "Electron-pair acceptor attracted to electron-rich centres such as alkene π-bonds or benzene.",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-chem-kt-17",
    "term": "Entropy (S)",
    "definition": "Measure of disorder and dispersal of energy quanta across particles (J K⁻¹ mol⁻¹).",
    "topicNumber": 4,
    "subtopicId": "al-chem-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-chem-kt-18",
    "term": "First ionisation energy",
    "definition": "Enthalpy change removing 1 mol of electrons from 1 mol of gaseous atoms to give gaseous 1+ ions.",
    "topicNumber": 1,
    "subtopicId": "al-chem-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "al-chem-kt-19",
    "term": "Gibbs free energy (ΔG)",
    "definition": "ΔG = ΔH − TΔS; reaction is thermodynamically feasible when ΔG ≤ 0.",
    "topicNumber": 4,
    "subtopicId": "al-chem-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-chem-kt-20",
    "term": "Hess’s Law",
    "definition": "Total enthalpy change of a reaction is independent of the pathway taken between identical states.",
    "topicNumber": 4,
    "subtopicId": "al-chem-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "al-chem-kt-21",
    "term": "Homolytic fission",
    "definition": "Even cleavage of a covalent bond leaving one unpaired electron on each fragment (forming free radicals).",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-chem-kt-22",
    "term": "Hydrogen bond",
    "definition": "Strong intermolecular attraction between δ⁺ H (bonded to N, O, or F) and a lone pair on N, O, or F.",
    "topicNumber": 3,
    "subtopicId": "al-chem-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-chem-kt-23",
    "term": "Ligand",
    "definition": "Atom, ion, or molecule donating a lone pair to form a coordinate bond with a central metal ion.",
    "topicNumber": 7,
    "subtopicId": "al-chem-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-chem-kt-24",
    "term": "Nucleophile",
    "definition": "Electron-pair donor species attracted to electron-deficient δ⁺ atoms.",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-chem-kt-25",
    "term": "Partial pressure",
    "definition": "Pressure exerted individually by one gas in a mixture: p(A) = mole fraction × total pressure.",
    "topicNumber": 6,
    "subtopicId": "al-chem-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-chem-kt-26",
    "term": "Racemic mixture",
    "definition": "50:50 equimolar mixture of both optical enantiomers exhibiting zero net optical rotation.",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "al-chem-kt-27",
    "term": "Rate-determining step",
    "definition": "Slowest step of a reaction mechanism determining the overall rate equation.",
    "topicNumber": 5,
    "subtopicId": "al-chem-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-chem-kt-28",
    "term": "TMS",
    "definition": "Tetramethylsilane, Si(CH₃)₄ — inert volatile δ = 0 ppm standard in NMR spectroscopy.",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-4",
    "subtopicCode": "8.4"
  },
  {
    "id": "al-chem-kt-29",
    "term": "VSEPR",
    "definition": "Valence Shell Electron Pair Repulsion theory predicting 3D molecular geometries and bond angles.",
    "topicNumber": 3,
    "subtopicId": "al-chem-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "al-chem-kt-30",
    "term": "Zwitterion",
    "definition": "Dipolar amino acid ion carrying both positive –NH₃⁺ and negative –COO⁻ charges simultaneously.",
    "topicNumber": 8,
    "subtopicId": "al-chem-8-3",
    "subtopicCode": "8.3"
  }
];
