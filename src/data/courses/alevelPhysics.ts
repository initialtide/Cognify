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

export const ALEVEL_PHYSICS_TOPICS: TopicDefinition[] = [
  {
    "number": 1,
    "title": "Measurements, Uncertainties & SI Units",
    "subtopics": [
      {
        "id": "al-phys-1-1",
        "code": "1.1",
        "slug": "1.1-si-units-uncertainties-graphs",
        "title": "SI Base Units, Uncertainty Propagation & Graph Analysis",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Particles, Quantum Phenomena & Wave-Particle Duality",
    "subtopics": [
      {
        "id": "al-phys-2-1",
        "code": "2.1",
        "slug": "2.1-particles-quarks-conservation-laws",
        "title": "Particles, Quarks, Antiparticles & Conservation Laws",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-2-2",
        "code": "2.2",
        "slug": "2.2-photoelectric-effect-wave-particle-duality",
        "title": "Photoelectric Effect, Energy Levels & Wave-Particle Duality",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Waves, Diffraction & Optics",
    "subtopics": [
      {
        "id": "al-phys-3-1",
        "code": "3.1",
        "slug": "3.1-progressive-stationary-waves",
        "title": "Progressive Waves, Polarisation & Stationary Waves",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-3-2",
        "code": "3.2",
        "slug": "3.2-interference-diffraction-refraction",
        "title": "Young’s Double Slit, Diffraction Gratings & Refraction/TIR",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Mechanics, Projectiles, Impulse & Materials",
    "subtopics": [
      {
        "id": "al-phys-4-1",
        "code": "4.1",
        "slug": "4.1-vectors-moments-suvat-projectiles",
        "title": "Vectors, Moments, SUVAT & 2D Projectile Motion",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-4-2",
        "code": "4.2",
        "slug": "4.2-impulse-momentum-young-modulus",
        "title": "Momentum, Impulse, Work-Energy & Young Modulus",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Electricity, EMF & Potential Dividers",
    "subtopics": [
      {
        "id": "al-phys-5-1",
        "code": "5.1",
        "slug": "5.1-iv-characteristics-resistivity-superconductors",
        "title": "I–V Characteristics, Resistivity & Superconductors",
        "readingMinutes": 12,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-5-2",
        "code": "5.2",
        "slug": "5.2-kirchhoff-emf-internal-resistance-dividers",
        "title": "Kirchhoff’s Laws, EMF, Internal Resistance & Potential Dividers",
        "readingMinutes": 13,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Circular Motion, Simple Harmonic Motion & Ideal Gases",
    "subtopics": [
      {
        "id": "al-phys-6-1",
        "code": "6.1",
        "slug": "6.1-circular-motion-shm-resonance",
        "title": "Circular Motion, Simple Harmonic Motion & Resonance",
        "readingMinutes": 14,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-6-2",
        "code": "6.2",
        "slug": "6.2-thermal-physics-ideal-gases-kinetic-theory",
        "title": "Thermal Physics, Ideal Gases & Kinetic Theory Derivation",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 7,
    "title": "Gravitational, Electric & Magnetic Fields + Capacitors",
    "subtopics": [
      {
        "id": "al-phys-7-1",
        "code": "7.1",
        "slug": "7.1-gravitational-electric-fields",
        "title": "Gravitational & Electric Fields, Potentials & Orbits",
        "readingMinutes": 14,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-7-2",
        "code": "7.2",
        "slug": "7.2-capacitors-exponential-discharge",
        "title": "Capacitors, Dielectrics & Exponential Charge/Discharge",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-7-3",
        "code": "7.3",
        "slug": "7.3-magnetic-fields-electromagnetic-induction",
        "title": "Magnetic Fields, Flux Linkage, Faraday/Lenz & Transformers",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 8,
    "title": "Nuclear Physics, Binding Energy & Thermal Reactors",
    "subtopics": [
      {
        "id": "al-phys-8-1",
        "code": "8.1",
        "slug": "8.1-radioactivity-exponential-decay-nuclear-radius",
        "title": "Radioactive Decay, Half-Life & Nuclear Radius",
        "readingMinutes": 13,
        "hasDeepContent": true
      },
      {
        "id": "al-phys-8-2",
        "code": "8.2",
        "slug": "8.2-mass-defect-binding-energy-reactors",
        "title": "Mass Defect, Binding Energy & Thermal Nuclear Reactors",
        "readingMinutes": 14,
        "hasDeepContent": true
      }
    ]
  }
];

export const ALEVEL_PHYSICS_NOTES: Record<string, NoteLesson> = {
  "al-phys-1-1": {
    "subtopicId": "al-phys-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "SI Base Units, Uncertainty Propagation & Graph Analysis",
    "readingMinutes": 12,
    "videoTitle": "ERRORS & UNCERTAINTIES - A-level Physics Practical Skills",
    "youtubeId": "tqUEriXGELI",
    "videoChannel": "Science Shorts",
    "videoDuration": "8:49",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Random vs Systematic Errors & Precision vs Accuracy",
        "cardId": "al-phys-1-1-c2"
      },
      {
        "time": "2:20",
        "seconds": 140,
        "label": "Absolute, Fractional & Percentage Uncertainties",
        "cardId": "al-phys-1-1-c2"
      },
      {
        "time": "4:55",
        "seconds": 295,
        "label": "Combining Uncertainties (+, −, ×, ÷, powers)",
        "cardId": "al-phys-1-1-c2"
      },
      {
        "time": "7:05",
        "seconds": 425,
        "label": "Error Bars & Max/Min Gradient Lines",
        "cardId": "al-phys-1-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-1-1-c1",
        "title": "SI Base Units & Equation Homogeneity",
        "summary": "The seven SI base units, standard prefixes, and dimensional homogeneity checks.",
        "bullets": [
          "The **7 SI base units**: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), and candela (cd). Every derived unit decomposes uniquely into base units: Force 1 N = kg m s⁻²; Energy 1 J = kg m² s⁻²; Potential difference 1 V = J C⁻¹ = kg m² s⁻³ A⁻¹; Resistance 1 Ω = kg m² s⁻³ A⁻².",
          "A physical equation is dimensionally homogeneous ONLY if the SI base units of every additive term on the left and right sides match identically (note: dimensionless constants like ½ or 2π cannot be verified by units alone).",
          "Standard prefixes to master: femto (f, 10⁻¹⁵), pico (p, 10⁻¹²), nano (n, 10⁻⁹), micro (μ, 10⁻⁶), milli (m, 10⁻³), kilo (k, 10³), mega (M, 10⁶), giga (G, 10⁹), tera (T, 10¹²)."
        ],
        "glossaryPills": [
          {
            "term": "dimensionally homogeneous",
            "definition": "Property of a valid physical equation where all terms on both sides reduce to the exact same combination of SI base units."
          }
        ],
        "memoryAid": "Remember 1 V = 1 J / 1 C = (kg m² s⁻²) / (A s) = kg m² s⁻³ A⁻¹ — derive it in 5 seconds instead of memorising!",
        "subsections": [
          {
            "heading": "Deriving SI Base Units Step by Step",
            "bullets": [
              "**Replace derived units systematically** - substitute F = ma (kg m s⁻²), W = Fs (kg m² s⁻²), P = W/t (kg m² s⁻³), and Q = It (A s) until only kg, m, s, A, K, mol remain.",
              "**Homogeneity check** - an equation is dimensionally valid ONLY if every added/equated term reduces to the exact same base units (note: dimensionless constants like ½ cannot be verified this way)."
            ],
            "exampleHeading": "Worked example: Base units of electrical resistance (Ω)",
            "examples": [
              "R = V / I = (W / Q) / I = W / (I²t) = (kg m² s⁻²) / (A² s) = **kg m² s⁻³ A⁻²**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-1-1-c2",
        "title": "Errors, Uncertainty Propagation & Worst-Fit Gradients",
        "summary": "Random vs systematic errors, combining uncertainties, and worst-fit gradient error bars.",
        "bullets": [
          "**Random errors** scatter readings unpredictably around the mean (reduced by taking repeat readings and averaging); systematic errors shift ALL readings consistently in one direction (e.g., zero error on a micrometer — NOT reduced by repeating, must recalibrate or subtract offset).",
          "Uncertainty of a repeat mean = ½ × (range) = (max − min) ÷ 2. **Percentage uncertainty** = (absolute uncertainty ÷ measured value) × 100.",
          "Combining uncertainties: (1) Addition/Subtraction (y = a ± b): **ADD ABSOLUTE uncertainties** (Δy = Δa + Δb); (2) Multiplication/Division (y = ab / c): **ADD PERCENTAGE uncertainties** (%Δy = %Δa + %Δb + %Δc); (3) Powers (y = aⁿ): **MULTIPLY percentage uncertainty** by the power (%Δy = |n| × %Δa).",
          "Graphical uncertainty: plot error bars, draw the best-fit line AND the steepest or shallowest worst-acceptable line passing through all error bars. **Percentage uncertainty** in gradient = (|m_best − m_worst| ÷ m_best) × 100."
        ],
        "glossaryPills": [
          {
            "term": "systematic errors",
            "definition": "Consistent directional measurement offsets caused by faulty calibration or zero error that degrade accuracy and cannot be removed by averaging repeats."
          }
        ],
        "commonMistake": "When subtracting two measurements (e.g. ΔL = L₂ − L₁), you STILL ADD their absolute uncertainties — uncertainties NEVER subtract!"
      },
      {
        "id": "al-phys-1-1-c3",
        "title": "Practical Graphs, Error Bars & Gradient Uncertainties",
        "summary": "How A-Level practical papers test error bars, steepest/shallowest worst-fit lines, and percentage uncertainty in gradients.",
        "bullets": [
          "**Linearising power laws** - rearrange nonlinear equations (e.g. T = 2π√(L/g) → T² = (4π²/g)L) into y = mx + c before plotting.",
          "**Error bars** - draw horizontal/vertical bars of ±Δx and ±Δy around each plotted point; the line of best fit must pass through every error bar.",
          "**Gradient uncertainty** - plot the steepest (m_max) and shallowest (m_min) acceptable lines passing through all error bars: **Δm = ½(m_max − m_min)**."
        ],
        "subsections": [
          {
            "heading": "Uncertainty Combination Rules",
            "bullets": [
              "**Addition / subtraction (y = a ± b)** - add **ABSOLUTE** uncertainties: Δy = Δa + Δb.",
              "**Multiplication / division (y = ab / c)** - add **PERCENTAGE** uncertainties: %Δy = %Δa + %Δb + %Δc.",
              "**Powers (y = aⁿ)** - multiply percentage uncertainty by the magnitude of the power: %Δy = |n| × %Δa."
            ],
            "exampleHeading": "Worked example: Percentage uncertainty in g = 4π²L / T²",
            "examples": [
              "If %ΔL = 0.8% and %ΔT = 1.2%, then %Δg = 0.8% + 2(1.2%) = **3.2%**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "systematic error",
            "definition": "Consistent offset shifting all readings in the same direction (e.g. zero error), reducing accuracy."
          },
          {
            "term": "homogeneity",
            "definition": "Condition that all terms in a physical equation share identical SI base units."
          }
        ],
        "commonMistake": "When subtracting two measurements (e.g. ΔL = L₂ − L₁), NEVER subtract their uncertainties — ALWAYS ADD absolute uncertainties!"
      }
    ],
    "keyTerms": [
      {
        "term": "Precision",
        "definition": "Closeness of repeat measurements to one another (small spread / low random error), independent of closeness to the true value."
      },
      {
        "term": "Accuracy",
        "definition": "Closeness of a measured value to the true accepted physical value."
      },
      {
        "term": "Resolution",
        "definition": "Smallest change in physical quantity that a measuring instrument can detect."
      }
    ],
    "checklistPoints": [
      "Reduce derived units (N, J, Pa, V, Ω, T) to SI base units and check equations for homogeneity.",
      "Propagate absolute and percentage uncertainties through sums, differences, products, quotients, and powers.",
      "Calculate percentage gradient and y-intercept uncertainty using steepest/shallowest worst-fit lines."
    ]
  },
  "al-phys-2-1": {
    "subtopicId": "al-phys-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Particles, Quarks, Antiparticles & Conservation Laws",
    "readingMinutes": 13,
    "videoTitle": "All of PARTICLES & QUANTUM in 15 mins - AS & A-level Physics",
    "youtubeId": "6-ocHsmjiDQ",
    "videoChannel": "Science Shorts",
    "videoDuration": "14:26",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Particle Zoo - Hadrons, Baryons, Leptons, Quarks",
        "cardId": "al-phys-2-1-c2"
      },
      {
        "time": "3:40",
        "seconds": 220,
        "label": "Specific Charge",
        "cardId": "al-phys-2-1-c1"
      },
      {
        "time": "6:49",
        "seconds": 409,
        "label": "Annihilation & Pair Production",
        "cardId": "al-phys-2-1-c1"
      },
      {
        "time": "13:01",
        "seconds": 781,
        "label": "Electron Diffraction",
        "cardId": "al-phys-2-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-2-1-c1",
        "title": "Specific Charge, Strong Force & Pair Production/Annihilation",
        "summary": "Specific charge, strong nuclear force range, and pair production vs annihilation energy.",
        "diagram": "atomic-structure",
        "bullets": [
          "**Specific charge** = Charge (C) ÷ Mass (kg), units C kg⁻¹ (for a nucleus, remember to use proton count Z for charge and nucleon count A for mass!).",
          "The **strong nuclear force** holds nucleons together against electrostatic proton repulsion: repulsive below ~0.5 fm (preventing nuclear collapse), strongly attractive between 0.5 fm and 3.0 fm, and negligible beyond 3 fm.",
          "Pair production: a single high-energy γ photon converts into a particle-antiparticle pair (e.g., e⁻ + e⁺); minimum photon energy E_min = 2E₀ (twice the rest energy of one particle). **Annihilation**: particle + antiparticle annihilate into TWO identical photons travelling in opposite directions (conserving momentum), each of minimum energy hf_min = E₀."
        ],
        "glossaryPills": [
          {
            "term": "pair production",
            "definition": "Conversion of a high-energy gamma photon of energy at least 2E₀ into a particle and its corresponding antiparticle."
          }
        ],
        "commonMistake": "Annihilation produces TWO photons (each with E_min = E₀) to conserve momentum — pair production requires ONE photon with E_min = 2E₀!",
        "subsections": [
          {
            "heading": "Pair Production & Annihilation Thresholds",
            "bullets": [
              "**Pair production** - a high-energy gamma photon converts into a particle–antiparticle pair near a nucleus (to conserve momentum): **E_min = 2E₀**.",
              "**Annihilation** - a particle and its antiparticle collide and convert entirely into **two** identical gamma photons travelling in opposite directions (conserving momentum): **hf_min = E₀** per photon."
            ],
            "exampleHeading": "Worked example: Minimum photon energy for electron–positron pair production",
            "examples": [
              "Electron rest energy E₀ = 0.511 MeV → E_min = 2 × 0.511 = **1.022 MeV** (1.64 × 10⁻¹³ J)."
            ]
          }
        ]
      },
      {
        "id": "al-phys-2-1-c2",
        "title": "Classification of Particles, Quarks & Conservation Laws",
        "summary": "Baryons, mesons, u/d/s quarks, leptons, exchange bosons, and conservation of Q, B, L, and S.",
        "bullets": [
          "**Hadrons** feel the **strong nuclear force** and are made of quarks: **Baryons** = 3 quarks (B = +1; proton uud, neutron udd — proton is the ONLY stable free baryon; all other baryons eventually decay to a proton); Mesons = quark + antiquark (B = 0; pions π⁺ = uđ, π⁻ = dū; kaons contain a strange quark s or s̄).",
          "Quark quantum numbers: up (u: Q = +⅔, B = +⅓, S = 0), down (d: Q = −⅓, B = +⅓, S = 0), strange (s: Q = −⅓, B = +⅓, S = −1; antiquark s̄ has S = +1!).",
          "**Leptons** are fundamental particles that do NOT feel the strong force: e⁻, νₑ (Le = +1), μ⁻, νμ (Lμ = +1), plus their antiparticles (L = −1). Fundamental forces are mediated by exchange bosons; in **β⁻ decay**, a down quark changes to an up quark via a W⁻ boson: d → u + e⁻ + ν̄ₑ (conserving Q, B, and Le!).",
          "Conservation laws: Charge (Q), Baryon number (B), and Lepton numbers (Le, Lμ) are ALWAYS conserved in every interaction. **Strangeness (S)** is conserved in STRONG interactions (strange particles produced in pairs!), but can change by 0 or ±1 in WEAK decays."
        ],
        "glossaryPills": [
          {
            "term": "exchange bosons",
            "definition": "Virtual gauge particles mediating fundamental forces: photons (EM), W⁺/W⁻ bosons (weak), gluons/pions (strong)."
          }
        ],
        "memoryAid": "Watch the sneaky sign of strangeness: the strange quark s has S = −1, while the anti-strange quark s̄ has S = +1!"
      },
      {
        "id": "al-phys-2-1-c3",
        "title": "Exchange Bosons, Feynman Diagrams & Strangeness Rules",
        "summary": "How to read and verify particle interactions using exchange particles and strict conservation laws.",
        "bullets": [
          "**Four fundamental interactions** - strong nuclear (gluon/pion, hadrons only), electromagnetic (virtual photon, charged particles), weak nuclear (W⁺/W⁻/Z⁰, all particles — ONLY interaction that can change quark flavour!), gravitational (graviton, mass).",
          "**Beta decay via W boson** - β⁻ decay: **n → p + e⁻ + ν̄_e** (d → u via W⁻); β⁺ decay: **p → n + e⁺ + ν_e** (u → d via W⁺); electron capture: **p + e⁻ → n + ν_e** (via W⁺).",
          "**Strangeness conservation** - strange particles are ALWAYS created in pairs by the **strong** interaction (ΔS = 0), and decay individually via the **weak** interaction (ΔS = ±1 or 0)."
        ],
        "subsections": [
          {
            "heading": "Conservation Checklist for Any Particle Equation",
            "bullets": [
              "**ALWAYS conserved** - Charge (Q), Baryon number (B), Lepton numbers (L_e, L_μ separately!), and Mass-Energy / Momentum.",
              "**Strong & EM ONLY** - Strangeness (S) is conserved in strong/EM interactions, but can change by ±1 in weak decays."
            ],
            "exampleHeading": "Worked check: Is p + p → p + n + π⁺ allowed?",
            "examples": [
              "Q: +2 → +2 ✓; B: +2 → +2 ✓; L: 0 → 0 ✓; S: 0 → 0 ✓ → **Allowed** (strong interaction)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "baryon number",
            "definition": "Quantum number equal to +1 for baryons (qqq), −1 for antibaryons, and 0 for mesons and leptons."
          },
          {
            "term": "strangeness",
            "definition": "Quantum number carried by strange quarks (s has S = −1, s̄ has S = +1); conserved in strong interactions."
          }
        ],
        "commonMistake": "A strange quark (s) has strangeness S = −1 (MINUS one), while an anti-strange quark (s̄) has S = +1!"
      }
    ],
    "keyTerms": [
      {
        "term": "Specific charge",
        "definition": "Ratio of a particle or ion’s total charge in coulombs to its total mass in kilograms (C kg⁻¹)."
      },
      {
        "term": "Baryon",
        "definition": "Hadron composed of three quarks (B = +1), such as the proton (uud) and neutron (udd)."
      },
      {
        "term": "Lepton",
        "definition": "Fundamental non-quark particle (electron, muon, neutrinos) unaffected by the strong nuclear force."
      },
      {
        "term": "Weak interaction",
        "definition": "Force mediated by W⁺/W⁻ bosons capable of changing quark flavour (β decay) and violating strangeness conservation."
      }
    ],
    "checklistPoints": [
      "Calculate specific charge for nuclei and ions and sketch the strong nuclear force vs nucleon separation graph.",
      "Calculate threshold photon frequency/wavelength for pair production (2E₀) and annihilation (E₀ per photon).",
      "Check particle equations for Q, B, Le, Lμ, and S conservation and draw Feynman diagrams for β⁻, β⁺, and electron capture."
    ]
  },
  "al-phys-2-2": {
    "subtopicId": "al-phys-2-2",
    "subtopicCode": "2.2",
    "subtopicTitle": "Photoelectric Effect, Energy Levels & Wave-Particle Duality",
    "readingMinutes": 13,
    "videoTitle": "Photoelectric Effect - A-level Physics",
    "youtubeId": "I_7ZfMlIKhk",
    "videoChannel": "Science Shorts",
    "videoDuration": "9:39",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro",
        "cardId": "al-phys-2-2-c1"
      },
      {
        "time": "3:33",
        "seconds": 213,
        "label": "Stopping Potential",
        "cardId": "al-phys-2-2-c1"
      },
      {
        "time": "5:25",
        "seconds": 325,
        "label": "Ek vs Frequency Graph",
        "cardId": "al-phys-2-2-c1"
      },
      {
        "time": "8:28",
        "seconds": 508,
        "label": "Proof & Equation Walkthrough",
        "cardId": "al-phys-2-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-2-2-c1",
        "title": "The Photoelectric Effect & Einstein’s Equation",
        "summary": "Photon energy E = hf, why wave theory fails, Einstein’s photoelectric equation, and stopping potential.",
        "bullets": [
          "Light travels as discrete energy packets called photons of energy **E = hf = hc / λ** (where h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹).",
          "Einstein’s photoelectric equation: **hf = φ + Ek(max)**, where φ = hf₀ is the metal’s work function (minimum energy needed to liberate a surface electron) and Ek(max) = eVs (measured by the stopping potential Vs required to halt the fastest photoelectrons).",
          "Why **classical wave theory fails**: (1) Wave theory predicts any frequency should eventually eject electrons if intensity is high enough — yet ZERO emission occurs below threshold frequency f₀; (2) Emission is instantaneous with no build-up delay; (3) Increasing intensity increases the NUMBER of photons per second (raising photoelectric current), NOT Ek(max) (which depends strictly on frequency f because each electron absorbs ONE photon in a one-to-one interaction).",
          "Graph of Ek(max) against f is a straight line: gradient = Planck constant h (identical for ALL metals!), x-intercept = threshold frequency f₀, y-intercept = −φ."
        ],
        "subsections": [
          {
            "heading": "Graphical analysis of Ek(max) against frequency f",
            "bullets": [
              "Rearranging Einstein’s equation into **y = mx + c** gives **Ek(max) = hf − φ**.",
              "Different metals produce **parallel straight lines** sharing the exact same gradient (**h**) shifted horizontally to each metal’s **threshold frequency f₀**."
            ],
            "exampleHeading": "Worked stopping-potential check:",
            "examples": [
              "**UV photon (4.97 eV) on potassium (φ = 2.30 eV)** — Ek(max) = 2.67 eV → stopping potential **Vs = 2.67 V**"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "work function",
            "definition": "The minimum photon energy φ (in J or eV) required to remove an electron from the surface of a specific metal."
          },
          {
            "term": "stopping potential",
            "definition": "The minimum reverse voltage Vs applied across a photocell needed to reduce the photoelectric current to zero, where eVs = Ek(max)."
          }
        ],
        "commonMistake": "When converting electronvolts (eV) into Joules BEFORE dividing by h, multiply by 1.60 × 10⁻¹⁹ (1 eV = 1.60 × 10⁻¹⁹ J)!"
      },
      {
        "id": "al-phys-2-2-c2",
        "title": "Atomic Energy Levels & de Broglie Wave-Particle Duality",
        "summary": "Discrete atomic excitation/line spectra, fluorescent tubes, and de Broglie electron diffraction.",
        "bullets": [
          "Electrons in isolated atoms occupy **discrete negative energy levels** (n = 1 ground state, E = 0 = ionisation). Excitation occurs when an electron absorbs a photon of EXACT energy ΔE = E₂ − E₁ = hf or collides with a free electron (free electron can transfer partial energy and keep the remainder).",
          "De-excitation emits discrete line spectra photons matching ΔE = hf (**fluorescent tubes**: accelerated electrons excite mercury atoms → UV photons emitted → phosphor coating absorbs UV and de-excites in steps emitting visible light).",
          "Wave-particle duality: light exhibits wave properties (diffraction/interference) and particle properties (photoelectric effect); matter exhibits wave properties via de Broglie wavelength λ = h / p = h / (mv).",
          "**Electron diffraction** through polycrystalline graphite produces concentric bright rings because electron λ matches atomic crystal spacing; raising accelerating anode voltage increases v, decreases λ = h/mv, and makes the diffraction rings CONTRACT inward."
        ],
        "glossaryPills": [
          {
            "term": "de Broglie wavelength",
            "definition": "The wave-like wavelength λ = h / mv associated with any moving particle of momentum mv."
          }
        ],
        "memoryAid": "Higher electron accelerating voltage → faster v → smaller λ = h/mv → LESS diffraction (tighter rings on the screen)."
      },
      {
        "id": "al-phys-2-2-c3",
        "title": "Stopping Potential, Fluorescent Tubes & Electron Diffraction",
        "summary": "Measuring E_k(max) with a stopping voltage, mercury vapour excitation, and de Broglie diffraction patterns.",
        "bullets": [
          "**Stopping potential (V_s)** - reverse potential that just halts the most energetic photoelectrons: **E_k(max) = eV_s**; plotting V_s against frequency f gives gradient **h/e** and y-intercept **−Φ/e**.",
          "**Fluorescent tube mechanism** - fast electrons collide with mercury atoms causing **excitation**; as electrons de-excite they emit **UV photons**, which are absorbed by the phosphor coating and re-emitted as **visible light**.",
          "**Electron diffraction** - electrons accelerated through anode voltage V gain E_k = eV and diffract through polycrystalline graphite into concentric rings; **increasing V increases p**, which **decreases λ = h/p**, making diffraction rings **shrink** (smaller angle)."
        ],
        "subsections": [
          {
            "heading": "Intensity vs Frequency in the Photoelectric Effect",
            "bullets": [
              "**Increasing frequency (f > f₀)** - increases photon energy hf, so **E_k(max) increases** (higher stopping potential V_s).",
              "**Increasing intensity (at constant f > f₀)** - increases the **number of photons per second**, so **photoelectric current increases**, while E_k(max) stays UNCHANGED!"
            ],
            "exampleHeading": "Worked example: Electron de Broglie wavelength at V = 4000 V",
            "examples": [
              "p = √(2m_e eV) = √(2 × 9.11×10⁻³¹ × 1.6×10⁻¹⁹ × 4000) = 3.41×10⁻²³ kg m s⁻¹ → λ = h/p = **1.94 × 10⁻¹¹ m**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "stopping potential",
            "definition": "Minimum reverse potential difference V_s needed to reduce photoelectric current to zero (eV_s = E_k(max))."
          },
          {
            "term": "work function",
            "definition": "Minimum energy Φ required to liberate an electron from the surface of a metal."
          }
        ],
        "commonMistake": "Increasing light intensity does NOT increase the maximum kinetic energy of photoelectrons — each electron absorbs only ONE photon!"
      }
    ],
    "keyTerms": [
      {
        "term": "Threshold frequency (f₀)",
        "definition": "Minimum incident radiation frequency required to liberate photoelectrons from a metal surface (f₀ = φ / h)."
      },
      {
        "term": "Electronvolt (eV)",
        "definition": "Kinetic energy gained by one electron accelerated across 1 V potential difference (1.60 × 10⁻¹⁹ J)."
      },
      {
        "term": "Ionisation energy",
        "definition": "Energy needed to completely remove an electron from an atom’s ground state to E = 0."
      }
    ],
    "checklistPoints": [
      "Use hf = φ + Ek(max) and eVs = Ek(max) fluently with eV ↔ J conversions.",
      "Explain clearly why intensity increases photoelectric current while frequency governs Ek(max) (one-to-one photon-electron interaction).",
      "Calculate line spectrum wavelengths from energy level transitions and electron de Broglie wavelengths from accelerating voltage."
    ]
  },
  "al-phys-3-1": {
    "subtopicId": "al-phys-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "Progressive Waves, Polarisation & Stationary Waves",
    "readingMinutes": 12,
    "videoTitle": "Stationary Waves & Phase - A-level Physics",
    "youtubeId": "TAGlpuMYdk4",
    "videoChannel": "Science Shorts",
    "videoDuration": "17:16",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Phase & Radians",
        "cardId": "al-phys-3-1-c1"
      },
      {
        "time": "5:00",
        "seconds": 300,
        "label": "Constructive & Destructive Interference",
        "cardId": "al-phys-3-1-c2"
      },
      {
        "time": "10:38",
        "seconds": 638,
        "label": "Higher Harmonics",
        "cardId": "al-phys-3-1-c2"
      },
      {
        "time": "13:21",
        "seconds": 801,
        "label": "Stationary Waves in Pipes",
        "cardId": "al-phys-3-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-3-1-c1",
        "title": "Progressive Waves, Phase Difference & Polarisation",
        "summary": "Wave speed, phase difference in radians, and why only transverse waves can be polarised.",
        "diagram": "transverse-wave",
        "bullets": [
          "Wave speed c = fλ and frequency f = 1/T. Phase difference between two points separated by distance Δx along a wave: Δφ = (2π Δx) / λ radians (or 360° Δx / λ). In phase = 0, 2π, 4π rad; in antiphase = π, 3π rad.",
          "**Polarisation** restricts the oscillations of a TRANSVERSE wave to a SINGLE plane perpendicular to the direction of energy propagation. Longitudinal waves (sound) CANNOT be polarised because their oscillations are already parallel to propagation.",
          "Applications of polarisation: Polaroid sunglasses block horizontally polarised glare reflected from water/roads; aligned TV/radio transmitter and receiver dipoles maximise signal induction."
        ],
        "glossaryPills": [
          {
            "term": "phase difference",
            "definition": "Angular offset (in radians or degrees) describing how far one oscillating point lags or leads another along a wave cycle."
          }
        ],
        "memoryAid": "One full wavelength λ = 2π rad (360°); half a wavelength ½λ = π rad (180°, antiphase).",
        "subsections": [
          {
            "heading": "Phase Difference & Polarisation Rules",
            "bullets": [
              "**Phase difference** - Δφ = (2π × Δx) / λ radians (or 360° × Δx / λ); in-phase points differ by 2nπ, antiphase by (2n + 1)π.",
              "**Polarisation** - restricts oscillations of a **transverse** wave to a single plane; **longitudinal** waves (sound) CANNOT be polarised because oscillations are parallel to energy transfer."
            ],
            "exampleHeading": "Worked example: Phase difference between points 0.15 m apart on a wave of λ = 0.60 m",
            "examples": [
              "Δφ = 2π × (0.15 / 0.60) = **π/2 rad** (90°)."
            ]
          }
        ]
      },
      {
        "id": "al-phys-3-1-c2",
        "title": "Stationary (Standing) Waves & Harmonics",
        "summary": "Superposition of opposing waves into nodes/antinodes and first harmonic f = (1/2L)√(T/μ).",
        "bullets": [
          "A **stationary wave** forms by the superposition of two progressive waves of the SAME frequency, wavelength, and amplitude travelling in OPPOSITE directions (e.g., an incident wave superposing with its reflection).",
          "**Nodes (N)** are fixed points of permanent zero amplitude (destructive interference); Antinodes (A) are points of maximum amplitude (constructive interference). Distance between adjacent nodes = ½λ. No net energy is transferred along a **stationary wave**.",
          "Phase contrast: along a progressive wave, phase varies continuously; in a **stationary wave**, ALL points between two adjacent nodes vibrate IN PHASE with each other, and in ANTIPHASE (π rad) with points in the neighbouring loop!",
          "First harmonic (fundamental) frequency of a stretched string of length L, tension T (N), and mass per unit length μ (kg m⁻¹): **f = (1 / 2L) √(T / μ)**. Higher harmonics occur at fₙ = n f₁."
        ],
        "glossaryPills": [
          {
            "term": "antinodes",
            "definition": "Fixed positions along a stationary wave where constructive superposition produces maximum oscillation amplitude."
          }
        ],
        "commonMistake": "When calculating mass per unit length μ = m / L for f = (1/2L)√(T/μ), always convert grams to KILOGRAMS before dividing by metres!"
      },
      {
        "id": "al-phys-3-1-c3",
        "title": "First Harmonic on a Stretched String (Meldé’s Experiment)",
        "summary": "How string length, tension, and mass per unit length determine the fundamental stationary-wave frequency.",
        "bullets": [
          "**First harmonic formula** - **f = (1 / 2L) √(T / μ)**, where L = vibrating length (m), T = tension (N), and μ = mass per unit length (kg m⁻¹).",
          "**Harmonic progression** - for a string fixed at both ends, the nth harmonic has **n antinodes**, **(n + 1) nodes**, length L = nλ/2, and frequency **f_n = n f₁**.",
          "**Stationary vs Progressive waves** - stationary waves transfer **no net energy**; amplitude varies from 0 (node) to max (antinode); all particles between two adjacent nodes oscillate **in phase** (0 rad), and adjacent loops are in **antiphase** (π rad)."
        ],
        "subsections": [
          {
            "heading": "Proportionality Shifts on a Stretched String",
            "bullets": [
              "**Doubling length L** - halves f₁ (f ∝ 1/L).",
              "**Quadrupling tension T** - doubles f₁ (f ∝ √T)."
            ],
            "exampleHeading": "Worked example: Fundamental frequency of a 0.80 m guitar string (T = 64 N, μ = 0.0025 kg m⁻¹)",
            "examples": [
              "f = (1 / 1.60) √(64 / 0.0025) = 0.625 × √25600 = 0.625 × 160 = **100 Hz**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "node",
            "definition": "Point on a stationary wave with permanently zero amplitude due to destructive superposition."
          },
          {
            "term": "antinode",
            "definition": "Point on a stationary wave oscillating with maximum amplitude due to constructive superposition."
          }
        ],
        "commonMistake": "Two adjacent nodes are separated by HALF a wavelength (λ/2), NOT a full wavelength λ!"
      }
    ],
    "keyTerms": [
      {
        "term": "Polarisation",
        "definition": "Confining transverse wave oscillations strictly to a single plane perpendicular to wave travel."
      },
      {
        "term": "Superposition",
        "definition": "Principle that when two or more waves meet, the resultant displacement equals the vector sum of individual displacements."
      },
      {
        "term": "Node",
        "definition": "Stationary point along a standing wave where destructive interference produces permanently zero displacement."
      }
    ],
    "checklistPoints": [
      "Calculate phase differences in radians and compare progressive vs stationary waves across energy transfer, amplitude, and phase.",
      "Explain why only transverse waves can be polarised and how stationary waves form from opposing waves.",
      "Apply f = (1/2L)√(T/μ) to compute string tension, linear density, or harmonic frequencies."
    ]
  },
  "al-phys-3-2": {
    "subtopicId": "al-phys-3-2",
    "subtopicCode": "3.2",
    "subtopicTitle": "Young’s Double Slit, Diffraction Gratings & Refraction/TIR",
    "readingMinutes": 13,
    "videoTitle": "Diffraction (Young’s Double Slit & Grating) - A-level Physics",
    "youtubeId": "8GIwQ_QQ9uA",
    "videoChannel": "Science Shorts",
    "videoDuration": "19:00",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Intro",
        "cardId": "al-phys-3-2-c1"
      },
      {
        "time": "0:54",
        "seconds": 54,
        "label": "Young’s Double Slit Experiment",
        "cardId": "al-phys-3-2-c1"
      },
      {
        "time": "10:31",
        "seconds": 631,
        "label": "Interference Patterns: Double & Single Slits",
        "cardId": "al-phys-3-2-c1"
      },
      {
        "time": "12:15",
        "seconds": 735,
        "label": "Diffraction Grating Equation",
        "cardId": "al-phys-3-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-3-2-c1",
        "title": "Coherence, Young’s Double Slit & Diffraction Gratings",
        "summary": "Coherence, Young’s double slit w = λD/s, single-slit profiles, and diffraction gratings d sin θ = nλ.",
        "bullets": [
          "Two sources are **COHERENT** if they have the same wavelength/frequency and a CONSTANT phase difference. Constructive interference occurs when path difference = nλ; destructive interference when path difference = (n + ½)λ.",
          "Young’s double-slit fringe spacing: **w = (λ D) / s**, where s = slit separation, D = slit-to-screen distance. White light produces a bright white central fringe (zero path difference for all λ) flanked by spectra with violet innermost and red outermost (shorter λ → smaller w).",
          "Single-slit diffraction gives a bright central maximum TWICE the width of each outer fringe, dropping sharply in intensity outward.",
          "Diffraction grating equation: **d sin θ = nλ**, where d = 1 / N is the slit spacing (if a grating has N lines per mm, convert to lines per metre first: d = 10⁻³ / N!). Because sin θ ≤ 1, maximum integer order n_max = floor(d / λ). Gratings produce far sharper, brighter, more widely spaced maxima than double slits (ideal for stellar spectroscopy)."
        ],
        "glossaryPills": [
          {
            "term": "path difference",
            "definition": "The difference in physical distance travelled by two coherent waves from their sources to a meeting point."
          }
        ],
        "commonMistake": "When finding maximum order n_max from d / λ = 3.85, ALWAYS round DOWN to n_max = 3 (never round up to 4 — sin θ cannot exceed 1!).",
        "subsections": [
          {
            "heading": "Double Slit vs Diffraction Grating Formulae",
            "bullets": [
              "**Young’s double slit** - **w = λD / s** (fringe spacing w, slit-to-screen distance D, slit separation s); fringes are equally spaced, dimmer away from centre.",
              "**Diffraction grating** - **d sin θ = nλ**, where **d = 1 / N** (spacing in metres if N lines per metre); gives much **sharper, brighter, wider-spaced** maxima than a double slit!"
            ],
            "exampleHeading": "Worked example: Maximum order n for λ = 580 nm on a 500 lines mm⁻¹ grating",
            "examples": [
              "d = 1 / (500 × 10³) = 2.0 × 10⁻⁶ m; sin θ ≤ 1 ⇒ n_max = floor(d / λ) = floor(2.0×10⁻⁶ / 5.8×10⁻⁷) = floor(3.45) = **3** (7 total maxima including n = 0)."
            ]
          }
        ]
      },
      {
        "id": "al-phys-3-2-c2",
        "title": "Refraction, Total Internal Reflection & Optical Fibres",
        "summary": "Snell’s Law, total internal reflection conditions, and modal vs material optical fibre dispersion.",
        "bullets": [
          "Absolute refractive index n = c / cₛ (where cₛ is wave speed in the medium; frequency stays constant, wavelength shrinks as λₛ = λ / n). **Snell’s Law**: n₁ sin θ₁ = n₂ sin θ₂.",
          "**Total Internal Reflection (TIR)** requires TWO conditions: (1) light travels from a higher-n medium into a lower-n medium (n₁ > n₂), AND (2) angle of incidence θᵢ exceeds critical angle θ_c, where sin θ_c = n₂ / n₁.",
          "**Step-index optical fibres** use a high-n glass core surrounded by a lower-n cladding (protects core surface from scratches, prevents crosstalk, and raises critical angle to reduce multipath modal dispersion).",
          "Pulse broadening (signal distortion) arises from: (1) Modal dispersion (rays at different angles travel different path lengths — reduced using a very narrow single-mode core); (2) **Material dispersion** (different wavelengths have slightly different refractive indices and speeds — reduced using monochromatic laser light)."
        ],
        "glossaryPills": [
          {
            "term": "modal dispersion",
            "definition": "Broadening of a light pulse in an optical fibre because rays entering at steeper angles undergo more reflections and travel a longer path than axial rays."
          }
        ],
        "memoryAid": "Fix Modal dispersion → Make core narrow (single-mode); Fix Material dispersion → Monochromatic light!"
      },
      {
        "id": "al-phys-3-2-c3",
        "title": "Optical Fibres: Modal & Material Dispersion",
        "summary": "Why step-index optical fibres suffer pulse broadening and how physics engineers minimise signal degradation.",
        "bullets": [
          "**Cladding purpose** - lower refractive index than the core (n_cladding < n_core) to ensure **total internal reflection** at the core–cladding boundary, protect the core from scratches, and prevent crosstalk.",
          "**Modal (multipath) dispersion** - light rays entering at different angles travel different path lengths down the fibre, arriving at different times and smearing pulses; reduced by a **narrow (single-mode) core**.",
          "**Material (chromatic) dispersion** - white light contains multiple wavelengths with slightly different refractive indices in glass (violet slows more than red), spreading pulses; reduced by using **monochromatic laser light**."
        ],
        "subsections": [
          {
            "heading": "Snell’s Law & Critical Angle",
            "bullets": [
              "**Snell’s law** - **n₁ sin θ₁ = n₂ sin θ₂** (with n = c / c_s).",
              "**Critical angle (TIR)** - **sin θ_c = n₂ / n₁** (requires travelling from optically denser n₁ to less dense n₂ with θ_i > θ_c)."
            ],
            "exampleHeading": "Worked example: Critical angle for glass core n₁ = 1.52 and cladding n₂ = 1.44",
            "examples": [
              "sin θ_c = 1.44 / 1.52 = 0.9474 → θ_c = **71.3°**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "coherent",
            "definition": "Waves with a constant phase relationship and identical frequency/wavelength."
          },
          {
            "term": "modal dispersion",
            "definition": "Pulse broadening caused by rays taking different path lengths along an optical fibre."
          }
        ],
        "commonMistake": "For a grating with N lines per MILLIMETRE (e.g. 300 mm⁻¹), convert to lines per METRE (300,000 m⁻¹) before computing d = 1/N!"
      }
    ],
    "keyTerms": [
      {
        "term": "Coherent sources",
        "definition": "Wave sources emitting identical frequency/wavelength with a constant phase relationship."
      },
      {
        "term": "Critical angle (θc)",
        "definition": "Angle of incidence in the optically denser medium that produces a 90° angle of refraction along the boundary."
      },
      {
        "term": "Material dispersion",
        "definition": "Pulse broadening caused by different wavelengths in white light travelling at different speeds inside glass."
      }
    ],
    "checklistPoints": [
      "Calculate fringe spacing w = λD/s and grating angles d sin θ = nλ (converting lines/mm to d in metres cleanly).",
      "Compare double-slit, single-slit, and diffraction-grating intensity profiles.",
      "State both TIR conditions, apply Snell’s Law, and distinguish modal vs material dispersion in optical fibres."
    ]
  },
  "al-phys-4-1": {
    "subtopicId": "al-phys-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "Vectors, Moments, SUVAT & 2D Projectile Motion",
    "readingMinutes": 12,
    "videoTitle": "Projectile Motion & SUVAT - A-level Physics",
    "youtubeId": "p30tWWEElxU",
    "videoChannel": "Science Shorts",
    "videoDuration": "11:59",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "SUVAT Equations for Uniform Acceleration",
        "cardId": "al-phys-4-1-c2"
      },
      {
        "time": "3:00",
        "seconds": 180,
        "label": "Independence of Horizontal & Vertical Motion",
        "cardId": "al-phys-4-1-c2"
      },
      {
        "time": "6:30",
        "seconds": 390,
        "label": "Resolving Launch Velocity Components",
        "cardId": "al-phys-4-1-c1"
      },
      {
        "time": "9:25",
        "seconds": 565,
        "label": "Worked Projectile Motion Exam Problems",
        "cardId": "al-phys-4-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-4-1-c1",
        "title": "Vectors, Equilibrium, Moments & Couples",
        "summary": "Resolving forces on inclined planes, equilibrium conditions, principle of moments, and couples.",
        "diagram": "forces-free-body",
        "bullets": [
          "Resolving force F at angle θ to horizontal: Fₓ = F cos θ, Fᵧ = F sin θ. On a slope of angle θ: weight parallel down slope = mg sin θ; weight perpendicular into slope = mg cos θ.",
          "Conditions for full mechanical equilibrium: (1) Resultant force in every perpendicular direction equals zero (ΣFₓ = 0, ΣFᵧ = 0 — closed vector triangle); AND (2) **Principle of Moments**: sum of clockwise moments equals sum of anticlockwise moments about ANY pivot (ΣM_cw = ΣM_acw).",
          "A couple consists of two equal, parallel, opposite forces whose lines of action do not coincide, generating pure rotation: Torque of a couple = F × d (where d is the perpendicular distance between the two forces)."
        ],
        "glossaryPills": [
          {
            "term": "couple",
            "definition": "A pair of equal and opposite parallel forces acting along separate lines to produce a pure turning torque without translational acceleration."
          }
        ],
        "memoryAid": "On any ramp of angle θ: Sine Slides down the Slope (mg sin θ); Cosine Crushes into the ramp (mg cos θ)."
      },
      {
        "id": "al-phys-4-1-c2",
        "title": "SUVAT Kinematics, Projectile Motion & Drag",
        "summary": "SUVAT kinematics, independent horizontal/vertical 2D projectiles, air drag, and terminal velocity.",
        "bullets": [
          "Constant-acceleration **SUVAT equations**: v = u + at; s = ½(u + v)t; s = ut + ½at²; v² = u² + 2as. On a v–t graph: gradient = acceleration, area = displacement.",
          "**2D Projectiles** (neglecting air resistance): Horizontal and vertical components are COMPLETELY INDEPENDENT and linked solely by time of flight t! Horizontally: aₓ = 0, constant velocity vₓ = u cos θ, range x = (u cos θ) t. Vertically: constant acceleration aᵧ = −g (−9.81 m s⁻²), initial velocity uᵧ = u sin θ, and vᵧ = 0 at maximum height.",
          "With air resistance (drag ∝ v²): horizontal velocity decelerates continuously, reducing both maximum height and horizontal range, and producing an asymmetrical trajectory steeper on descent; falling objects reach terminal velocity when drag + upthrust = weight (zero resultant force)."
        ],
        "subsections": [
          {
            "heading": "Two-column 2D projectile workflow",
            "bullets": [
              "**Horizontal column (aₓ = 0)**: constant velocity **vₓ = u cos θ** and range **x = (u cos θ) t**.",
              "**Vertical column (aᵧ = −9.81 m s⁻²)**: initial velocity **uᵧ = u sin θ**, peak height when **vᵧ = 0**, linked to x solely by **time t**."
            ],
            "exampleHeading": "Typical launch-angle benchmarks (no drag):",
            "examples": [
              "**Horizontal launch from cliff height h** — Time of flight depends strictly on vertical drop: **t = √(2h / g)**",
              "**Level-ground launch at angle θ** — Maximum range occurs at **45°**, symmetrical parabolic trajectory"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "terminal velocity",
            "definition": "Constant maximum falling speed achieved when upward fluid drag equals downward weight so resultant force and acceleration become zero."
          }
        ],
        "commonMistake": "NEVER mix horizontal and vertical speeds into the same SUVAT equation — build two separate columns (Horizontal vs Vertical) linked ONLY by time t!"
      },
      {
        "id": "al-phys-4-1-c3",
        "title": "Moments, Couples & Equilibrium of Rigid Bodies",
        "summary": "Two exact conditions for static equilibrium, torque of a couple, and resolving forces on inclined planes.",
        "bullets": [
          "**Conditions for static equilibrium** - (1) **Resultant force = 0** (in any two perpendicular directions); (2) **Sum of clockwise moments = sum of anticlockwise moments** about ANY pivot.",
          "**Torque of a couple** - two equal, opposite, parallel forces separated by perpendicular distance d produce a pure turning effect **T = F × d** (independent of pivot choice!).",
          "**Closed vector triangle** - if three coplanar forces keep an object in equilibrium, they form a **closed triangle** nose-to-tail (and their lines of action pass through one point)."
        ],
        "subsections": [
          {
            "heading": "Air Resistance Effect on 2D Projectiles",
            "bullets": [
              "**Reduced range & height** - drag opposes motion at all times, making the descent **steeper** than the ascent (asymmetric trajectory).",
              "**Horizontal deceleration** - v_x decreases continuously instead of staying constant."
            ],
            "exampleHeading": "Worked example: Uniform 4.0 m beam (weight 200 N) pivoted 1.0 m from left end",
            "examples": [
              "Centre of mass is at 2.0 m (1.0 m right of pivot) → CW moment = 200 × 1.0 = 200 N m → upward force at right end (3.0 m from pivot) = 200 / 3.0 = **66.7 N**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "couple",
            "definition": "Pair of equal and opposite coplanar forces acting along different parallel lines, producing rotation without translation (T = Fd)."
          },
          {
            "term": "principle of moments",
            "definition": "For a body in rotational equilibrium, sum of clockwise moments equals sum of anticlockwise moments about any point."
          }
        ],
        "commonMistake": "When calculating a moment M = Fd, d MUST be the PERPENDICULAR distance from the pivot to the line of action of the force!"
      }
    ],
    "keyTerms": [
      {
        "term": "Moment of a force",
        "definition": "Turning effect of a force about a pivot: Force × perpendicular distance from line of action to pivot (N m)."
      },
      {
        "term": "Torque of a couple",
        "definition": "Magnitude of one force multiplied by the perpendicular separation between the two opposite forces."
      },
      {
        "term": "Projectile",
        "definition": "Object moving under gravity alone with independent constant horizontal velocity and constant vertical acceleration g."
      }
    ],
    "checklistPoints": [
      "Resolve forces on inclined planes and solve two-support beam moment problems by choosing a pivot through an unknown support.",
      "Solve multi-stage 2D projectile range, peak height, and impact velocity problems by separating x and y components.",
      "Explain how air drag alters projectile trajectories and causes terminal velocity."
    ]
  },
  "al-phys-4-2": {
    "subtopicId": "al-phys-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Momentum, Impulse, Work-Energy & Young Modulus",
    "readingMinutes": 13,
    "videoTitle": "Stress, Strain and Young’s Modulus - A Level Physics",
    "youtubeId": "EC2dNWGSHCc",
    "videoChannel": "Physics Online",
    "videoDuration": "3:32",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Tensile Stress (F/A) & Strain (ΔL/L)",
        "cardId": "al-phys-4-2-c2"
      },
      {
        "time": "1:05",
        "seconds": 65,
        "label": "Young Modulus (E = stress/strain) & Units",
        "cardId": "al-phys-4-2-c2"
      },
      {
        "time": "2:15",
        "seconds": 135,
        "label": "Stress-Strain Graphs & Elastic Limit",
        "cardId": "al-phys-4-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-4-2-c1",
        "title": "Momentum, Impulse & Collisions",
        "summary": "Momentum form F = Δ(mv)/Δt, impulse area under F–t graphs, and elastic vs inelastic collisions.",
        "bullets": [
          "Newton’s 2nd Law in general momentum form: resultant force equals rate of change of momentum, **F = Δ(mv) / Δt**. Rearranging gives Impulse = F Δt = Δ(mv) = area under a Force–Time graph (units N s = kg m s⁻¹).",
          "Vehicle safety (crumple zones, airbags, seatbelts): for a fixed passenger mass and velocity change, Δ(mv) is fixed — extending collision impact duration Δt significantly REDUCES the average impact force F = Δp / Δt.",
          "Linear momentum is ALWAYS conserved in an isolated system (no external resultant force). **Elastic collision**: BOTH momentum AND total kinetic energy are conserved; **Inelastic collision**: momentum is conserved, but kinetic energy is converted to thermal/sound/deformation energy.",
          "Work done W = F s cos θ; Power P = ΔW / Δt = F v (driving force × constant velocity)."
        ],
        "glossaryPills": [
          {
            "term": "impulse",
            "definition": "Product of force and duration (F Δt), equal to the total change in momentum Δ(mv) and the area under a force-time graph."
          }
        ],
        "commonMistake": "Momentum is a VECTOR! When a ball rebounds off a wall from +u to −v, the change in momentum is Δp = m(−v − u) = −m(v + u), NOT m(v − u)!",
        "subsections": [
          {
            "heading": "Impulse, Force–Time Graphs & Elastic Collisions",
            "bullets": [
              "**Newton’s 2nd Law (general form)** - **F = Δ(mv) / Δt**; **Impulse = FΔt = Δp = area under a Force–Time graph**.",
              "**Elastic vs Inelastic collisions** - momentum is ALWAYS conserved (in closed systems); **kinetic energy is conserved ONLY in elastic collisions**."
            ],
            "exampleHeading": "Worked example: 0.20 kg ball rebounds from a wall from +15 m/s to −10 m/s in 0.050 s",
            "examples": [
              "Δp = 0.20(−10 − 15) = **−5.0 N s**; average force magnitude F = 5.0 / 0.050 = **100 N**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-4-2-c2",
        "title": "Materials, Hooke’s Law & Young Modulus",
        "summary": "Hooke’s law, tensile stress/strain, Young modulus E = σ/ε, and brittle/ductile/polymer curves.",
        "bullets": [
          "**Hooke’s Law** (up to limit of proportionality): F = k ΔL. Elastic strain energy stored = area under F–ΔL graph = ½ F ΔL = ½ k (ΔL)².",
          "**Tensile stress** σ = F / A (Pa = N m⁻²); **Tensile strain** ε = ΔL / L (dimensionless ratio). Young modulus E = σ / ε = (F L) / (A ΔL) (Pa), representing the intrinsic stiffness of a material independent of wire dimensions (gradient of the linear elastic region of a stress–strain graph; area beneath = elastic energy stored per unit volume).",
          "Material behaviours on σ–ε curves: **Brittle** (glass, cast iron — obeys Hooke’s law straight to fracture with negligible plastic deformation); **Ductile** (copper, mild steel — yields past elastic limit and undergoes extensive plastic necking before breaking); **Polymeric** (rubber — large non-linear elastic extension with hysteresis unloading loop dissipating heat)."
        ],
        "glossaryPills": [
          {
            "term": "Young modulus",
            "definition": "Intrinsic measure of material stiffness defined as the ratio of tensile stress to tensile strain (E = σ/ε) in the linear Hookean region."
          }
        ],
        "memoryAid": "Young modulus practical uses a LONG, THIN test wire (minimising % uncertainty in ΔL by making extension larger) plus a vernier scale and micrometer screw gauge for diameter d (A = πd²/4)."
      },
      {
        "id": "al-phys-4-2-c3",
        "title": "Stress–Strain Curves, Brittle vs Ductile & Elastic Energy",
        "summary": "Comparing brittle, ductile, and polymeric materials on stress–strain graphs and computing stored strain energy.",
        "bullets": [
          "**Young Modulus** - **E = tensile stress / tensile strain = (F/A) / (ΔL/L) = FL / (AΔL)** (gradient of the linear Hookean region of a stress–strain graph).",
          "**Elastic strain energy** - area under a Force–Extension graph **E_el = ½FΔL = ½k(ΔL)²**; **energy per unit volume** = area under a Stress–Strain graph = **½ × stress × strain**.",
          "**Material behaviour** - **brittle** (glass/cast iron: straight line to sudden fracture, negligible plastic deformation); **ductile** (copper/mild steel: yield point followed by extensive plastic stretching); **polymeric** (rubber: hysteresis loop showing thermal energy lost per loading cycle)."
        ],
        "subsections": [
          {
            "heading": "Work, Power & Efficiency Links",
            "bullets": [
              "**Mechanical power** - **P = ΔW / Δt = Fv** (force × velocity at constant speed against drag).",
              "**Energy conservation** - ΔE_k + ΔE_p = W_driving − W_friction."
            ],
            "exampleHeading": "Worked example: Young Modulus of a 2.0 m wire (A = 1.0 × 10⁻⁶ m²) stretched 1.0 mm by 100 N",
            "examples": [
              "E = (100 × 2.0) / (1.0×10⁻⁶ × 1.0×10⁻³) = **2.0 × 10¹¹ Pa** (200 GPa — typical steel)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "impulse",
            "definition": "Product of force and impact time (FΔt), equal to change in momentum Δp and area under an F–t graph."
          },
          {
            "term": "Young modulus",
            "definition": "Ratio of tensile stress to tensile strain in the linear elastic region (E = σ/ε, units Pa), measuring stiffness."
          }
        ],
        "commonMistake": "When a ball REBOUNDS off a wall, velocity reverses sign — so Δp = m(v − u) = m(−v_out − v_in) ADDS the speeds rather than subtracting!"
      }
    ],
    "keyTerms": [
      {
        "term": "Elastic collision",
        "definition": "Collision in which both total linear momentum and total kinetic energy are conserved."
      },
      {
        "term": "Tensile stress (σ)",
        "definition": "Tensile force per unit cross-sectional area, F / A (Pa)."
      },
      {
        "term": "Tensile strain (ε)",
        "definition": "Fractional extension ΔL / L (no units)."
      },
      {
        "term": "Yield point",
        "definition": "Stress at which a ductile material suddenly stretches plastically with little or no additional load."
      }
    ],
    "checklistPoints": [
      "Apply F = Δ(mv)/Δt to rebound collisions, rocket propulsion, and crumple-zone safety explanations.",
      "Test quantitatively whether a collision is elastic or inelastic using Σ(½mv²).",
      "Calculate tensile stress, strain, Young modulus, and elastic strain energy per unit volume, and interpret brittle/ductile/polymeric stress-strain graphs."
    ]
  },
  "al-phys-5-1": {
    "subtopicId": "al-phys-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "I–V Characteristics, Resistivity & Superconductors",
    "readingMinutes": 12,
    "videoTitle": "Voltage, Current & Resistance | V = IR Equation | IV Graphs",
    "youtubeId": "BbizKa6eywo",
    "videoChannel": "Cognito",
    "videoDuration": "4:35",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to V=IR (Ohm’s Law)",
        "cardId": "al-phys-5-1-c1"
      },
      {
        "time": "0:45",
        "seconds": 45,
        "label": "Calculating Resistance by Rearranging V=IR",
        "cardId": "al-phys-5-1-c1"
      },
      {
        "time": "2:05",
        "seconds": 125,
        "label": "How Resistance Value Affects the I-V Graph",
        "cardId": "al-phys-5-1-c1"
      },
      {
        "time": "3:04",
        "seconds": 184,
        "label": "I-V Graphs for Filament Lamps and Diodes",
        "cardId": "al-phys-5-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-5-1-c1",
        "title": "I–V Characteristics & Microscopic Conduction Physics",
        "summary": "Ohmic wires, filament lamp lattice vibration, NTC thermistor charge carriers, and diodes.",
        "bullets": [
          "Electric current I = ΔQ / Δt; Potential difference V = W / Q (energy transferred per coulomb); Resistance R = V / I (ALWAYS the ratio V/I at a point on an I–V curve, NOT 1/gradient for non-ohmic devices!).",
          "**Ohmic conductor** (metallic wire at CONSTANT temperature): I ∝ V (straight line through origin). **Filament lamp**: S-shaped curve flattening at high V because higher current heats the filament, increasing positive metal-ion lattice vibration amplitude → more frequent electron-ion collisions → higher resistance.",
          "**NTC Thermistor**: resistance DECREASES sharply as temperature rises because thermal energy liberates vastly more free charge carriers (conduction electrons) in the semiconductor, overwhelming increased lattice vibration.",
          "**Semiconductor diode**: conducts sharply in forward bias above ~0.6–0.7 V threshold; infinite resistance (negligible current) in reverse bias."
        ],
        "glossaryPills": [
          {
            "term": "charge carriers",
            "definition": "Mobile charged particles (such as delocalised electrons in metals or electrons/holes in semiconductors) whose drift constitutes electric current."
          }
        ],
        "commonMistake": "For a filament lamp I–V graph, resistance at a point is strictly V ÷ I, NEVER the reciprocal of the tangent gradient!",
        "subsections": [
          {
            "heading": "Microscopic Conduction in Metals vs NTC Thermistors",
            "bullets": [
              "**Filament lamp (metal)** - higher current heats the lattice ions, increasing vibration amplitude → **more frequent electron–ion collisions** → resistance **increases** with temperature.",
              "**NTC thermistor (semiconductor)** - higher temperature liberates **exponentially more free charge carriers (n)**, outweighing extra lattice collisions → resistance **decreases** steeply."
            ],
            "exampleHeading": "Worked example: Resistance of a 1.5 m copper wire (ρ = 1.7 × 10⁻⁸ Ω m, A = 0.50 mm²)",
            "examples": [
              "A = 0.50 × 10⁻⁶ m² → R = ρL/A = (1.7×10⁻⁸ × 1.5) / (5.0×10⁻⁷) = **0.051 Ω**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-5-1-c2",
        "title": "Resistivity (ρ = RA / L) & Superconductors",
        "summary": "Measuring intrinsic resistivity ρ = RA/L and zero-resistance superconductors below Tc.",
        "bullets": [
          "**Resistivity ρ = R A / L** (units Ω m) is an intrinsic material property depending ONLY on material and temperature (NOT length or diameter). Plotting R vs L for constant diameter yields a straight line through the origin of gradient ρ / A.",
          "A **superconductor** cooled at or below its critical transition temperature Tc drops abruptly to EXACTLY ZERO electrical resistance (ρ = 0).",
          "Consequences & applications: zero Joule heating (P = I²R = 0) allows huge steady currents to sustain ultra-strong magnetic fields in MRI hospital scanners, particle accelerators (LHC), maglev trains, and lossless power transmission cables (limited mainly by cryogenic liquid helium/nitrogen cooling costs)."
        ],
        "glossaryPills": [
          {
            "term": "critical transition temperature",
            "definition": "Threshold temperature Tc at or below which a superconducting material loses all electrical resistance completely."
          }
        ],
        "memoryAid": "Remember the unit of resistivity is Ω m (ohm-metres), NOT Ω m⁻¹! Check: ρ = R·A/L = Ω·m²/m = Ω m."
      },
      {
        "id": "al-phys-5-1-c3",
        "title": "Resistivity Practical & Applications of Superconductors",
        "summary": "Measuring wire resistivity with a micrometer and why superconductors eliminate Joule heating below T_c.",
        "bullets": [
          "**Resistivity practical (ρ = RA/L)** - measure wire diameter d in 3 perpendicular places with a **micrometer** (A = πd²/4); keep current low to prevent heating; plot **R against L** → gradient = **ρ/A**, so **ρ = gradient × A**.",
          "**Superconductivity** - below the **critical temperature (T_c)**, a superconductor’s resistivity drops abruptly to **EXACTLY ZERO** (zero energy loss P = I²R = 0).",
          "**Applications** - high-field **MRI superconducting magnets**, lossless power cables, maglev trains, and particle-accelerator electromagnets (limited by expensive liquid-helium/nitrogen cooling)."
        ],
        "subsections": [
          {
            "heading": "Drift Velocity & Carrier Density (I = nAvq)",
            "bullets": [
              "**I = nAvq** - links current I to charge-carrier number density n, cross-sectional area A, drift velocity v, and charge q (e = 1.6 × 10⁻¹⁹ C).",
              "**Comparison** - metals have huge n (~10²⁸ m⁻³) so drift speed v is tiny (~0.1 mm/s); semiconductors have far smaller n, so electrons drift faster for the same current."
            ],
            "exampleHeading": "Concrete check: Resistance at a point on a curved I–V graph",
            "examples": [
              "Resistance at any point is **R = V / I** from the coordinates — NEVER 1 / gradient of the tangent on a non-ohmic curve!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "critical temperature",
            "definition": "Transition temperature T_c below which a superconductor’s electrical resistivity drops to zero."
          },
          {
            "term": "resistivity",
            "definition": "Intrinsic material property ρ = RA / L (units Ω m) independent of wire length or thickness."
          }
        ],
        "commonMistake": "On a curved I–V graph (filament lamp or diode), NEVER compute resistance as 1/gradient — ALWAYS use the coordinate ratio R = V/I at that specific point!"
      }
    ],
    "keyTerms": [
      {
        "term": "Ohm’s Law",
        "definition": "Current through an ohmic conductor is directly proportional to potential difference across it provided physical conditions (temperature) remain constant."
      },
      {
        "term": "Resistivity (ρ)",
        "definition": "Intrinsic material property ρ = RA / L (Ω m) quantifying opposition to electric current."
      },
      {
        "term": "Superconductor",
        "definition": "Material exhibiting strictly zero electrical resistance when cooled at or below its critical temperature Tc."
      }
    ],
    "checklistPoints": [
      "Explain filament lamp and NTC thermistor resistance changes at the microscopic lattice-ion / charge-carrier level.",
      "Calculate resistivity using ρ = RA/L (with micrometer diameter → A = πd²/4) and interpret R vs L graphs.",
      "Sketch resistance vs temperature for a superconductor showing Tc and give two industrial applications."
    ]
  },
  "al-phys-5-2": {
    "subtopicId": "al-phys-5-2",
    "subtopicCode": "5.2",
    "subtopicTitle": "Kirchhoff’s Laws, EMF, Internal Resistance & Potential Dividers",
    "readingMinutes": 13,
    "videoTitle": "EMF & Internal Resistance - A-level Physics",
    "youtubeId": "9r3Xgd79MFw",
    "videoChannel": "Science Shorts",
    "videoDuration": "5:30",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "What Are EMF & Internal Resistance?",
        "cardId": "al-phys-5-2-c1"
      },
      {
        "time": "1:35",
        "seconds": 95,
        "label": "Terminal PD Equation: E = V + Ir",
        "cardId": "al-phys-5-2-c1"
      },
      {
        "time": "3:15",
        "seconds": 195,
        "label": "V against I Graph (Gradient = −r, Intercept = E)",
        "cardId": "al-phys-5-2-c1"
      },
      {
        "time": "4:35",
        "seconds": 275,
        "label": "Worked Circuit Calculations",
        "cardId": "al-phys-5-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-5-2-c1",
        "title": "Kirchhoff’s Laws, EMF & Internal Resistance",
        "summary": "Kirchhoff’s conservation laws, EMF equation V = ε − Ir, and reading ε and −r from V–I graphs.",
        "diagram": "circuit-series-parallel",
        "bullets": [
          "**Kirchhoff’s 1st Law** (conservation of charge): ΣI_in = ΣI_out at any circuit junction. **Kirchhoff’s 2nd Law** (conservation of energy): around any closed circuit loop, Σ(EMFs) = Σ(potential drops IR).",
          "**Electromotive force (ε)** is the total chemical/electrical energy supplied per coulomb of charge by a source: ε = E / Q. Real cells possess internal resistance r, causing \"lost volts\" (Ir) dissipated internally as heat inside the cell.",
          "Core EMF equation: ε = I(R + r) = V + Ir, rearranged as terminal PD: **V = −rI + ε**. Plotting terminal PD (V) on the y-axis against current (I) on the x-axis produces a downward straight line: y-intercept = EMF ε, gradient = −r (negative internal resistance!).",
          "Maximum useful power delivered to an external load resistor R occurs when load resistance matches internal resistance: R = r."
        ],
        "glossaryPills": [
          {
            "term": "internal resistance",
            "definition": "Opposition to current flow inside the power supply itself, causing terminal voltage V to drop by lost volts (Ir) as current increases."
          }
        ],
        "commonMistake": "When a car starter motor draws huge current from a 12 V battery, the headlights dim NOT because EMF drops, but because \"lost volts\" (Ir) across internal resistance r rises, lowering terminal PD (V = ε − Ir)!"
      },
      {
        "id": "al-phys-5-2-c2",
        "title": "Potential Dividers & Sensor Circuits",
        "summary": "Calculating series potential divider ratios and designing LDR/thermistor sensor circuits.",
        "bullets": [
          "A potential divider places two resistors R₁ and R₂ in series to split supply voltage V_in strictly in proportion to their resistances: V_out (across R₂) = V_in × R₂ / (R₁ + R₂), or V₁ / V₂ = R₁ / R₂.",
          "Sensor circuits replace R₁ or R₂ with an **LDR** (resistance drops as light intensity increases) or NTC thermistor (resistance drops as temperature increases) to drive temperature alarms or automatic street lamps.",
          "Example: to make V_out RISE when it gets DARK, place the **LDR** as R₂ (across V_out): in darkness R_LDR increases → R_LDR takes a larger share of V_in → V_out rises to switch on the lamp."
        ],
        "subsections": [
          {
            "heading": "Choosing sensor placement in a potential divider",
            "bullets": [
              "Put the **LDR or NTC thermistor across V_out (bottom)** if you want output voltage to **RISE** when sensor resistance rises (e.g., darkness or cold).",
              "Put the sensor in the **top position (R₁)** if you want **V_out to RISE** when light intensity or temperature increases."
            ],
            "exampleHeading": "Worked automatic night-lamp design:",
            "examples": [
              "**6.0 V supply, fixed R₁ = 2.0 kΩ, LDR as R₂** — In bright light R_LDR = 0.5 kΩ → V_out = 1.2 V (OFF); in darkness R_LDR = 18 kΩ → V_out = 5.4 V (ON)"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "potential divider",
            "definition": "Series resistor network that splits an input voltage into a controlled smaller output voltage proportional to resistance ratios."
          }
        ],
        "memoryAid": "To make V_out rise when a sensor’s resistance rises, put the sensor in the BOTTOM (V_out) position; to make V_out fall, put it at the TOP!"
      },
      {
        "id": "al-phys-5-2-c3",
        "title": "EMF & Internal Resistance Practical + Maximum Power Transfer",
        "summary": "Extracting ε and r from a terminal-pd vs current graph and designing potential-divider sensor circuits.",
        "bullets": [
          "**Terminal pd equation** - **V = ε − Ir** (compare with y = mx + c: plotting **V against I** gives **y-intercept = ε** and **gradient = −r**!).",
          "**Lost volts** - **Ir = ε − V** is the energy per coulomb dissipated as heat INSIDE the cell; as external load R decreases, current I rises, lost volts Ir rise, and terminal pd V drops.",
          "**Maximum power transfer theorem** - maximum power is delivered to an external load resistor R when **R = r** (internal resistance of the supply)."
        ],
        "subsections": [
          {
            "heading": "Potential Divider Sensor Design",
            "bullets": [
              "**V_out = V_in × R₂ / (R₁ + R₂)** - the resistor with the LARGER resistance takes the LARGER share of the supply pd.",
              "**Light/temperature switching** - place an LDR or NTC thermistor as R₂ if you want V_out to **rise in the dark / cold** (when its resistance rises), or as R₁ if you want V_out to **rise in bright light / heat**!"
            ],
            "exampleHeading": "Worked example: 9.0 V battery (r = 1.5 Ω) connected across a 7.5 Ω load",
            "examples": [
              "I = ε / (R + r) = 9.0 / (7.5 + 1.5) = **1.0 A**; terminal pd V = 9.0 − 1.0(1.5) = **7.5 V** (lost volts = 1.5 V)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "electromotive force",
            "definition": "Chemical energy converted to electrical energy per coulomb of charge passing through a cell (ε = E/Q)."
          },
          {
            "term": "lost volts",
            "definition": "Potential difference Ir dropped across a cell’s internal resistance (Ir = ε − V)."
          }
        ],
        "commonMistake": "When cells are connected in PARALLEL (identical ε and r), total EMF stays ε (NOT 2ε!), while combined internal resistance HALVES to r/2!"
      }
    ],
    "keyTerms": [
      {
        "term": "Electromotive force (ε)",
        "definition": "Total energy transferred from chemical/other forms to electrical energy per unit charge driven around a complete circuit (J C⁻¹ = V)."
      },
      {
        "term": "Terminal potential difference",
        "definition": "Voltage measured across cell terminals under load: V = ε − Ir."
      },
      {
        "term": "Lost volts",
        "definition": "Potential difference Ir dropped across a cell’s internal resistance when current I flows."
      }
    ],
    "checklistPoints": [
      "Apply Kirchhoff’s 1st and 2nd laws to multi-branch resistor networks.",
      "Determine ε and r from a V vs I graph and explain headlight dimming using V = ε − Ir.",
      "Design and calculate output voltages for thermistor and LDR potential divider circuits."
    ]
  },
  "al-phys-6-1": {
    "subtopicId": "al-phys-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Circular Motion, Simple Harmonic Motion & Resonance",
    "readingMinutes": 14,
    "videoTitle": "SHM (Simple Harmonic Motion) - A-level Physics",
    "youtubeId": "BjbELOH7KoE",
    "videoChannel": "Science Shorts",
    "videoDuration": "16:24",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Conditions for SHM",
        "cardId": "al-phys-6-1-c2"
      },
      {
        "time": "2:00",
        "seconds": 120,
        "label": "Acceleration Equation",
        "cardId": "al-phys-6-1-c2"
      },
      {
        "time": "10:04",
        "seconds": 604,
        "label": "Height of Pendulum (Energy)",
        "cardId": "al-phys-6-1-c2"
      },
      {
        "time": "12:18",
        "seconds": 738,
        "label": "Energy Graphs",
        "cardId": "al-phys-6-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-6-1-c1",
        "title": "Uniform Circular Motion & Centripetal Force",
        "summary": "Radians, angular velocity ω = v/r, centripetal force mv²/r, and vertical loop reactions.",
        "bullets": [
          "Angular displacement θ (rad) = s / r (360° = 2π rad). **Angular velocity** ω = Δθ / Δt = 2πf = 2π / T (rad s⁻¹), linked to linear tangential speed by v = ωr.",
          "Even at constant speed, an object moving in a circle accelerates continuously because its velocity direction constantly changes. **Centripetal acceleration** a = v² / r = ω² r directed strictly TOWARDS the centre; Centripetal force **F = mv² / r = mω² r**.",
          "Vertical loops (rollercoaster/bucket): at the TOP, mg + R = mv²/r (minimum speed to stay on track when R = 0 is v = √(gr)); at the BOTTOM, R − mg = mv²/r (normal reaction R is maximum!)."
        ],
        "glossaryPills": [
          {
            "term": "centripetal force",
            "definition": "Resultant force acting strictly perpendicular to velocity towards the centre of circular motion (provided by tension, friction, gravity, or normal reaction)."
          }
        ],
        "commonMistake": "NEVER draw \"centripetal force\" as an extra standalone arrow on a free-body diagram — centripetal force is the RESULTANT of real physical forces (gravity, tension, reaction, friction)!",
        "subsections": [
          {
            "heading": "Centripetal Force in Vertical Circles & Banked Tracks",
            "bullets": [
              "**Centripetal acceleration** - **a = v²/r = ω²r** directed ALWAYS toward the centre of the circle; **F_c = mv²/r = mω²r** is provided by an existing force (tension, gravity, friction, normal reaction — NEVER draw it as an extra force!).",
              "**Vertical circle extremes** - at the **bottom**: T − mg = mv²/r (maximum tension!); at the **top**: T + mg = mv²/r (minimum speed to stay taut when T = 0: **v_min = √(gr)**)."
            ],
            "exampleHeading": "Worked example: Minimum speed at the top of a 2.5 m radius vertical loop (g = 9.81 m/s²)",
            "examples": [
              "Set reaction R = 0 → mg = mv²/r → v = √(9.81 × 2.5) = **4.95 m/s**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-6-1-c2",
        "title": "Simple Harmonic Motion (SHM), Energy & Resonance",
        "summary": "SHM equation a = −ω²x, mass-spring and pendulum periods, energy exchange, damping, and resonance.",
        "bullets": [
          "SHM defining condition: acceleration is directly proportional to displacement from equilibrium and ALWAYS directed towards equilibrium: **a = −ω² x** (negative straight line through origin on an a–x graph, gradient = −ω²).",
          "Solutions (starting from amplitude +A at t = 0): **x = A cos(ωt)**; velocity **v = ±ω√(A² − x²)** with v_max = ωA at equilibrium (x = 0); a_max = ω²A at the extremes (x = ±A).",
          "Two isochronous SHM systems (period T independent of amplitude A): Mass-spring **T = 2π√(m / k)**; Simple pendulum (small angles <10°) **T = 2π√(l / g)**. Total mechanical energy E_total = ½kA² = ½mω²A² stays constant in undamped SHM, exchanging continuously between Ek and Ep (parabolic U and inverted-U graphs vs x).",
          "**Damping** dissipates energy via friction/drag, reducing amplitude exponentially (light, critical — car shock absorbers returning swiftly without overshoot — and heavy). Resonance occurs when driving frequency equals natural frequency (f_drive = f₀), producing maximum amplitude; heavier damping lowers peak amplitude, broadens the peak, and shifts peak frequency slightly lower."
        ],
        "glossaryPills": [
          {
            "term": "isochronous",
            "definition": "Describing an oscillation such as SHM whose time period T is completely independent of its amplitude A."
          },
          {
            "term": "resonance",
            "definition": "Large-amplitude oscillation occurring when an external periodic driving force matches the system’s natural frequency f₀."
          }
        ],
        "memoryAid": "SHM extremes: At Equilibrium (x = 0) → v is MAX, a = 0, Ek is MAX; At Amplitude (x = ±A) → v = 0, a is MAX, Ep is MAX!"
      },
      {
        "id": "al-phys-6-1-c3",
        "title": "SHM Energy Exchange, Pendulum/Spring Periods & Damping",
        "summary": "Mass–spring and simple-pendulum time periods, kinetic/potential energy graphs, and damping effects on resonance.",
        "bullets": [
          "**Defining SHM equation** - **a = −ω²x** (acceleration proportional to displacement and always directed toward equilibrium); solutions **x = A cos(ωt)**, **v_max = ωA**, **a_max = ω²A**.",
          "**Two classic SHM oscillators** - **Mass–spring**: **T = 2π√(m / k)** (independent of g — works identically on the Moon!); **Simple pendulum** (small angles < 10°): **T = 2π√(L / g)** (independent of mass!).",
          "**Resonance & Damping** - **resonance** occurs when driving frequency equals natural frequency (**f_d = f₀**), giving maximum amplitude; **heavier damping** lowers the resonant peak, broadens the curve, and shifts the peak slightly to a **lower frequency**."
        ],
        "subsections": [
          {
            "heading": "SHM Energy vs Displacement Graphs",
            "bullets": [
              "**Total energy** - E_total = ½kA² = constant (horizontal line); **E_p = ½kx²** (U-shaped parabola, max at ±A); **E_k = ½k(A² − x²)** (inverted parabola, max at x = 0).",
              "**Energy frequency** - E_k and E_p complete **TWO** full cycles per ONE oscillation period T!"
            ],
            "exampleHeading": "Worked example: Maximum speed of an SHM oscillator (f = 2.5 Hz, A = 0.040 m)",
            "examples": [
              "ω = 2π(2.5) = 5π rad s⁻¹ → v_max = ωA = 5π × 0.040 = **0.628 m/s**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "simple harmonic motion",
            "definition": "Oscillation where acceleration is directly proportional to displacement from equilibrium and always directed toward it (a = −ω²x)."
          },
          {
            "term": "resonance",
            "definition": "Large-amplitude oscillation occurring when the driving frequency matches the system’s natural frequency (f_d = f₀)."
          }
        ],
        "commonMistake": "In a simple pendulum T = 2π√(L/g), changing the bob’s MASS has ZERO effect on the time period — only length L and gravity g matter!"
      }
    ],
    "keyTerms": [
      {
        "term": "Angular velocity (ω)",
        "definition": "Rate of change of angular displacement, ω = 2πf = v / r (rad s⁻¹)."
      },
      {
        "term": "Simple harmonic motion",
        "definition": "Oscillatory motion satisfying a = −ω²x where restoring acceleration is proportional and opposite to displacement."
      },
      {
        "term": "Critical damping",
        "definition": "Exact level of damping returning a displaced system to equilibrium in the shortest possible time without oscillating."
      }
    ],
    "checklistPoints": [
      "Solve vertical circular motion, banked track, and conical pendulum problems using F = mv²/r = mω²r.",
      "Calculate SHM displacement, speed, acceleration, and kinetic/potential energy using x = A cos(ωt) and v = ±ω√(A² − x²).",
      "Sketch resonance amplitude-frequency curves for light, moderate, and heavy damping."
    ]
  },
  "al-phys-6-2": {
    "subtopicId": "al-phys-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Thermal Physics, Ideal Gases & Kinetic Theory Derivation",
    "readingMinutes": 14,
    "videoTitle": "Gas Laws - A-level Physics",
    "youtubeId": "QhnlyHV8evY",
    "videoChannel": "Science Shorts",
    "videoDuration": "12:47",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Boyle’s Law",
        "cardId": "al-phys-6-2-c2"
      },
      {
        "time": "1:56",
        "seconds": 116,
        "label": "Pressure Law",
        "cardId": "al-phys-6-2-c2"
      },
      {
        "time": "2:56",
        "seconds": 176,
        "label": "Kelvin & Absolute Zero",
        "cardId": "al-phys-6-2-c1"
      },
      {
        "time": "8:58",
        "seconds": 538,
        "label": "Isobaric & Isothermal Examples",
        "cardId": "al-phys-6-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-6-2-c1",
        "title": "Internal Energy, Specific Heat Capacity & Latent Heat",
        "summary": "Internal energy as molecular Ek + Ep, specific heat capacity Q = mcΔθ, and latent heat Q = ml.",
        "bullets": [
          "Internal energy (U) of a system is the sum of the randomly distributed kinetic energies AND potential energies of all its molecules. Heating raises Ek during temperature rise (**Q = mcΔθ**), and increases molecular Ep (breaking intermolecular bonds at constant temperature) during a phase change (**Q = ml**, specific latent heat of fusion or vaporisation).",
          "For an IDEAL gas, intermolecular potential energy is assumed ZERO — so internal energy is 100% kinetic energy and depends strictly on absolute Kelvin temperature T!",
          "**Absolute zero** (0 K = −273.15°C) is the temperature at which objects have minimum internal energy (zero classical molecular kinetic energy)."
        ],
        "glossaryPills": [
          {
            "term": "internal energy",
            "definition": "Total randomly distributed kinetic energy plus intermolecular potential energy of all particles within a thermodynamic system."
          }
        ],
        "commonMistake": "During boiling or melting, kinetic energy (and temperature) stay CONSTANT — added latent heat increases ONLY molecular POTENTIAL energy as intermolecular bonds break.",
        "subsections": [
          {
            "heading": "Internal Energy, SHC & Specific Latent Heat",
            "bullets": [
              "**Internal energy (U)** - sum of the randomly distributed **kinetic** and **potential** energies of all molecules in a substance.",
              "**Heating vs Change of state** - during temperature rise, **KE rises** (Q = mcΔθ); during melting/boiling at constant temperature, **KE stays constant** while **PE rises** as intermolecular bonds break (Q = mL)."
            ],
            "exampleHeading": "Worked example: Continuous-flow heating power P = (Δm/Δt)cΔθ",
            "examples": [
              "Water flowing at 0.050 kg s⁻¹ heated by 15 K (c = 4200 J kg⁻¹ K⁻¹): P = 0.050 × 4200 × 15 = **3150 W**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-6-2-c2",
        "title": "Ideal Gas Laws & Kinetic Theory of Gases",
        "summary": "Ideal gas equation pV = nRT = NkT, kinetic theory pV = ⅓Nm⟨c²⟩, and mean KE = 3/2 kT.",
        "bullets": [
          "Experimental gas laws combine into **pV = nRT** = NkT (where N = n Nₐ = number of molecules, and Boltzmann constant k = R / Nₐ = 1.38 × 10⁻²³ J K⁻¹). Note: Work done expanding a gas at constant pressure W = p ΔV.",
          "Kinetic Theory equation: **pV = ⅓ N m ⟨c²⟩** (or p = ⅓ ρ ⟨c²⟩), where m = mass of ONE molecule (kg) and ⟨c²⟩ = mean square speed (c_rms = √⟨c²⟩).",
          "Equating **pV = ⅓ N m ⟨c²⟩** = NkT yields the celebrated result for mean translational kinetic energy of a single ideal gas molecule: **Ek(mean) = ½ m ⟨c²⟩ = (3/2) k T** = (3RT) / (2Nₐ) — proportional ONLY to Kelvin temperature T!",
          "Key Kinetic Theory Assumptions: (1) Vast number of identical molecules in **random** motion; (2) Volume of molecules themselves is negligible compared to container volume; (3) Collisions are perfectly elastic; (4) Duration of collisions is negligible compared to time between collisions; (5) Zero intermolecular forces except during impact; (6) Newton’s laws apply."
        ],
        "glossaryPills": [
          {
            "term": "Boltzmann constant",
            "definition": "Gas constant per single molecule, k = R / Nₐ = 1.38 × 10⁻²³ J K⁻¹, linking absolute temperature directly to mean molecular kinetic energy."
          }
        ],
        "memoryAid": "Remember mean KE = 3/2 kT is the SAME for ALL ideal gases at the same temperature T — lighter molecules (like H₂) simply move faster (higher c_rms) than heavier O₂ molecules!"
      },
      {
        "id": "al-phys-6-2-c3",
        "title": "Kinetic Theory Assumptions & Molecular Mean Kinetic Energy",
        "summary": "Connecting macroscopic ideal gas pressure pV = ⅓Nmc̄² to Boltzmann temperature ½mc̄² = ³/₂ kT.",
        "bullets": [
          "**Kinetic theory equation** - **pV = ⅓ N m (c_rms)²**, combined with **pV = N k T** yields **mean molecular KE = ½ m (c_rms)² = ³/₂ k T = ³/₂ RT / N_A** (depends ONLY on Kelvin temperature T!).",
          "**Ideal gas internal energy** - because an ideal gas has **zero intermolecular forces** (zero PE), its total internal energy is purely kinetic: **U = ³/₂ N k T = ³/₂ n R T**.",
          "**Key Kinetic Theory Assumptions** - (1) large number of molecules in random motion; (2) volume of molecules negligible compared to container; (3) perfectly elastic collisions; (4) zero intermolecular forces except during collisions; (5) collision duration negligible compared to time between collisions."
        ],
        "subsections": [
          {
            "heading": "Root-Mean-Square Speed (c_rms) & Kelvin Scale",
            "bullets": [
              "**ALWAYS convert to Kelvin** - T(K) = θ(°C) + 273.15 before using pV = nRT or ½mc̄² = ³/₂ kT!",
              "**Different gases at same T** - same mean KE, so **lighter molecules move faster** (c_rms ∝ 1/√m)."
            ],
            "exampleHeading": "Worked example: Mean KE of one gas molecule at 27 °C (300 K)",
            "examples": [
              "E_k = ³/₂ × (1.38 × 10⁻²³) × 300 = **6.21 × 10⁻²¹ J**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "internal energy",
            "definition": "Sum of the random kinetic and potential energies of all particles within a system."
          },
          {
            "term": "absolute zero",
            "definition": "0 K (−273.15 °C), the lowest possible temperature where particles have minimum internal energy (zero KE)."
          }
        ],
        "commonMistake": "NEVER plug degrees Celsius into pV = nRT or ½mc̄² = ³/₂ kT! Doubling 20 °C to 40 °C does NOT double KE — convert to Kelvin (293 K → 313 K) first!"
      }
    ],
    "keyTerms": [
      {
        "term": "Specific latent heat (l)",
        "definition": "Energy required per unit mass to change phase of a substance without changing its temperature (J kg⁻¹)."
      },
      {
        "term": "Root mean square speed (c_rms)",
        "definition": "Square root of the mean of the squared molecular speeds: c_rms = √(3kT / m)."
      },
      {
        "term": "Boyle’s Law",
        "definition": "At constant temperature, pressure of a fixed mass of ideal gas is inversely proportional to its volume (pV = constant)."
      }
    ],
    "checklistPoints": [
      "Solve thermal mixing and continuous-flow electrical heating problems using Q = mcΔθ and Q = ml.",
      "Derive pV = ⅓Nm⟨c²⟩ from elastic wall collisions (Δp = 2mvₓ, Δt = 2L/vₓ, isotropic ⟨vₓ²⟩ = ⅓⟨c²⟩).",
      "Calculate mean molecular KE = (3/2)kT, total gas internal energy = (3/2)nRT, and c_rms accurately."
    ]
  },
  "al-phys-7-1": {
    "subtopicId": "al-phys-7-1",
    "subtopicCode": "7.1",
    "subtopicTitle": "Gravitational & Electric Fields, Potentials & Orbits",
    "readingMinutes": 14,
    "videoTitle": "All of GRAVITATIONAL & ELECTRIC FIELDS in 12 mins - A-level Physics",
    "youtubeId": "fX-KlCQRjqY",
    "videoChannel": "Science Shorts",
    "videoDuration": "11:50",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Gravitational & Electric Fields",
        "cardId": "al-phys-7-1-c1"
      },
      {
        "time": "7:24",
        "seconds": 444,
        "label": "Satellites",
        "cardId": "al-phys-7-1-c1"
      },
      {
        "time": "9:17",
        "seconds": 557,
        "label": "Escape Velocity & Distance of Closest Approach",
        "cardId": "al-phys-7-1-c1"
      },
      {
        "time": "10:19",
        "seconds": 619,
        "label": "Parallel Plates",
        "cardId": "al-phys-7-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-7-1-c1",
        "title": "Gravitational Fields, Potentials & Satellite Orbits",
        "summary": "Newton’s gravitation, negative potential V = −GM/r, escape velocity, and Kepler’s 3rd Law.",
        "bullets": [
          "**Newton’s Law of Gravitation**: F = GMm / r² (G = 6.67 × 10⁻¹¹ N m² kg⁻²). Gravitational field strength g = F / m = GM / r² (N kg⁻¹ = m s⁻²).",
          "Gravitational potential **V = −GM / r** (J kg⁻¹) is work done per unit mass bringing a small test mass from infinity (where V = 0) to that point; ALWAYS NEGATIVE because gravity is purely attractive. Field strength equals negative potential gradient: g = −ΔV / Δr. Work done moving mass m: ΔW = m ΔV.",
          "Circular orbits: equating GMm/r² = mv²/r = mω²r gives orbital speed v = √(GM/r) and **Kepler’s 3rd Law**: T² = (4π² / GM) r³ (so T² ∝ r³!). **Geostationary satellites** orbit directly above the equator, travelling west-to-east with period T = 24 hours (~42,200 km from Earth’s centre).",
          "**Escape velocity** (equating ½mv² = GMm/r): v_esc = √(2GM / r) — independent of the escaping object’s mass!"
        ],
        "glossaryPills": [
          {
            "term": "gravitational potential",
            "definition": "Work done per unit mass in bringing a small test mass from infinity to a point in a gravitational field (V = −GM/r, always negative)."
          }
        ],
        "commonMistake": "When calculating orbital radius r in Kepler’s Law or v = √(GM/r), ALWAYS add the satellite’s altitude h to the planet’s radius R_planet: r = R_planet + h!",
        "subsections": [
          {
            "heading": "Gravitational vs Electric Fields Comparison",
            "bullets": [
              "**Inverse-square laws** - Gravity **F = GMm / r²** (always attractive, V_g = −GM/r always negative); Electric **F = Q₁Q₂ / (4πε₀r²)** (attractive OR repulsive, V_e = Q/(4πε₀r) positive or negative).",
              "**Field strength = −potential gradient** - **g = −ΔV_g / Δr** and **E = −ΔV_e / Δr** (area under a g–r or E–r graph gives potential difference ΔV!)."
            ],
            "exampleHeading": "Worked example: Uniform parallel plates (V = 600 V, d = 1.5 cm)",
            "examples": [
              "E = V / d = 600 / 0.015 = **4.0 × 10⁴ V m⁻¹**; force on an electron = eE = 1.6×10⁻¹⁹ × 4.0×10⁴ = **6.4 × 10⁻¹⁵ N**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-7-1-c2",
        "title": "Electric Fields, Coulomb’s Law & Uniform Parallel Plates",
        "summary": "Coulomb’s Law, uniform electric fields E = V/d, parabolic beam deflection, and equipotentials.",
        "bullets": [
          "**Coulomb’s Law**: F = (Q₁ Q₂) / (4πε₀ r²) where ε₀ = 8.85 × 10⁻¹² F m⁻¹ (attractive for opposite charges, repulsive for like charges — key contrast with purely attractive gravity!). Radial field strength E = F / Q = Q / (4πε₀ r²).",
          "Uniform electric field between parallel plates separated by d at voltage V: **E = V / d** = F / Q (N C⁻¹ = V m⁻¹). A charged particle entering perpendicularly undergoes parabolic projectile-like deflection with constant vertical acceleration a = EQ / m.",
          "Electric potential V = Q / (4πε₀ r) (positive around +Q, negative around −Q); E = −ΔV / Δr (gradient of V–r graph gives −E; area under E–r graph gives ΔV!). Work done moving charge q across potential difference ΔV: W = q ΔV (zero along an equipotential surface because equipotentials are always perpendicular to field lines!)."
        ],
        "glossaryPills": [
          {
            "term": "equipotential surface",
            "definition": "Surface connecting all points of identical gravitational or electric potential, always intersecting field lines at 90° so zero work is done moving along it."
          }
        ],
        "memoryAid": "Field analogies: Replace mass m ↔ charge Q and G ↔ 1/(4πε₀) — EVERY radial field equation maps 1-to-1 (remembering gravity is attractive-only while electric can attract or repel)!"
      },
      {
        "id": "al-phys-7-1-c3",
        "title": "Satellite Orbits, Kepler’s 3rd Law & Escape Velocity",
        "summary": "Deriving T² ∝ r³, geostationary orbit criteria, and parabolic deflection of charged particles in uniform electric fields.",
        "bullets": [
          "**Kepler’s 3rd law derivation** - equate gravity to centripetal force: **GMm / r² = m ω² r = m (4π² / T²) r** ⇒ **T² = (4π² / GM) r³** (orbital speed **v = √(GM / r)** — higher orbits move SLOWER!).",
          "**Geostationary satellites** - (1) orbital period **T = 24 hours**, (2) directly above the **equator**, (3) orbiting **west-to-east** in the same direction as Earth’s spin (fixed sky position for TV/comms dishes).",
          "**Escape velocity** - set ½mv² = GMm/r ⇒ **v_esc = √(2GM / r)** (independent of the rocket’s mass!)."
        ],
        "subsections": [
          {
            "heading": "Parabolic Deflection in a Uniform Electric Field",
            "bullets": [
              "**Identical to 2D projectiles** - horizontal velocity stays constant; vertical electric acceleration **a_y = qE / m = qV / (md)** deflects the beam into a parabola.",
              "**Equipotentials** - surfaces of equal potential are ALWAYS **perpendicular** to field lines; **zero work** is done moving along an equipotential (W = qΔV = 0)."
            ],
            "exampleHeading": "Concrete check: Why is gravitational potential always negative?",
            "examples": [
              "Potential is defined as ZERO at infinity, and gravity is purely attractive — so work must be done BY an external force to pull a mass to infinity!"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "equipotential",
            "definition": "Surface on which every point has the same potential; always perpendicular to field lines, requiring zero work to move along."
          },
          {
            "term": "geostationary orbit",
            "definition": "Equatorial circular orbit with a 24-hour period moving west-to-east so the satellite remains fixed over one point on Earth."
          }
        ],
        "commonMistake": "In orbital mechanics, a HIGHER satellite orbit has a LOWER orbital speed (v = √(GM/r)) and a LONGER period (T² ∝ r³) — NOT faster!"
      }
    ],
    "keyTerms": [
      {
        "term": "Geostationary orbit",
        "definition": "Equatorial west-to-east circular orbit with a 24-hour period so the satellite stays fixed above one point on Earth."
      },
      {
        "term": "Escape velocity",
        "definition": "Minimum launch speed v = √(2GM/R) required to reach infinity with zero kinetic energy."
      },
      {
        "term": "Electric field strength (E)",
        "definition": "Force per unit positive test charge at a point in an electric field (N C⁻¹ or V m⁻¹)."
      }
    ],
    "checklistPoints": [
      "Derive Kepler’s 3rd Law T² = (4π²/GM)r³ and escape velocity v = √(2GM/r) from first principles.",
      "Calculate forces, field strengths, potentials, and neutral points for radial gravitational and electric fields.",
      "Analyse parabolic deflection of electron/ion beams across uniform parallel plates (E = V/d)."
    ]
  },
  "al-phys-7-2": {
    "subtopicId": "al-phys-7-2",
    "subtopicCode": "7.2",
    "subtopicTitle": "Capacitors, Dielectrics & Exponential Charge/Discharge",
    "readingMinutes": 13,
    "videoTitle": "All of CAPACITORS in 5 mins - A-level Physics",
    "youtubeId": "GfyOLoTretE",
    "videoChannel": "Science Shorts",
    "videoDuration": "5:32",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Capacitance",
        "cardId": "al-phys-7-2-c1"
      },
      {
        "time": "1:05",
        "seconds": 65,
        "label": "Capacitor Discharge & Time Constant",
        "cardId": "al-phys-7-2-c2"
      },
      {
        "time": "3:08",
        "seconds": 188,
        "label": "Capacitor Structure & Dielectrics",
        "cardId": "al-phys-7-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-7-2-c1",
        "title": "Capacitance, Dielectrics & Energy Stored",
        "summary": "Capacitance C = Q/V, polar dielectrics boosting εr, and capacitor energy E = ½CV².",
        "bullets": [
          "**Capacitance C = Q / V** (units: Farad, 1 F = 1 C V⁻¹) is the charge stored per unit potential difference across the plates.",
          "Parallel-plate capacitor with dielectric: **C = (A ε₀ εᵣ) / d**, where A = overlap area, d = plate separation, and εᵣ = relative permittivity (dielectric constant).",
          "How a polar dielectric increases C: polar dielectric molecules align against the applied electric field, generating an opposing internal field that reduces the net E-field and PD V between plates for a fixed charge Q — hence C = Q / V increases by factor εᵣ.",
          "Energy stored on a capacitor equals the AREA under a V–Q graph: **E = ½ Q V = ½ C V²** = ½ Q² / C. Note: when charging from a constant-voltage battery, the battery supplies QV of energy, ½QV is stored in the capacitor, and the other ½QV is ALWAYS dissipated as heat in circuit resistance!"
        ],
        "glossaryPills": [
          {
            "term": "relative permittivity",
            "definition": "Dimensionless ratio εᵣ = C_dielectric / C_vacuum measuring how much an insulating dielectric enhances a capacitor’s charge-storage capacity."
          }
        ],
        "commonMistake": "When adding capacitors, the series/parallel rules are OPPOSITE to resistors: Parallel C_total = C₁ + C₂; Series 1/C_total = 1/C₁ + 1/C₂!",
        "subsections": [
          {
            "heading": "Parallel-Plate Dielectrics & Capacitor Energy Storage",
            "bullets": [
              "**Parallel-plate capacitance** - **C = ε₀ ε_r A / d**; inserting a **polar dielectric** (relative permittivity ε_r > 1) aligns dipoles to oppose the applied field, lowering pd for the same charge and **increasing capacitance** by factor ε_r.",
              "**Stored energy** - **E = ½QV = ½CV² = ½Q²/C** = area under a Q–V graph (remember: **50%** of energy supplied by a battery QV is dissipated as heat in circuit resistance during charging!)."
            ],
            "exampleHeading": "Worked example: Energy stored on a 470 μF capacitor charged to 12 V",
            "examples": [
              "E = ½CV² = 0.5 × (470 × 10⁻⁶) × 144 = **0.0338 J** (33.8 mJ)."
            ]
          }
        ]
      },
      {
        "id": "al-phys-7-2-c2",
        "title": "Exponential Charge/Discharge & Time Constant (τ = RC)",
        "summary": "Exponential RC discharge/charging equations, time constant τ = RC, and half-time RC ln 2.",
        "bullets": [
          "Discharging through resistance R: charge, voltage, and current ALL decay exponentially with identical decay constant 1/(RC): **Q = Q₀ e^(−t/RC)**, V = V₀ e^(−t/RC), I = I₀ e^(−t/RC).",
          "Time constant τ = R C (units: Ω × F = seconds!): the time required for Q, V, or I to fall to 1/e (≈ 37%) of its initial value during discharge, or rise to (1 − 1/e) (≈ 63%) of V₀ during charging.",
          "Charging equations: Q = Q₀ (1 − e^(−t/RC)) and V = V₀ (1 − e^(−t/RC)), while charging current STILL decays exponentially: I = I₀ e^(−t/RC) as capacitor voltage opposes the supply!",
          "Half-time (constant ratio property of exponential decay): **T₁/₂ = R C ln 2** ≈ 0.693 RC. Plotting ln(V) against t yields a straight line of gradient −1 / (RC) and y-intercept ln(V₀)."
        ],
        "glossaryPills": [
          {
            "term": "time constant",
            "definition": "Characteristic time τ = RC (in seconds) taken for a discharging capacitor’s charge, voltage, and current to fall to 37% (1/e) of their starting value."
          }
        ],
        "memoryAid": "During CHARGING, Q and V curve UP towards asymptotic max (1 − e^(−t/RC)), while Current I still curves DOWN exponentially (e^(−t/RC))!"
      },
      {
        "id": "al-phys-7-2-c3",
        "title": "Time Constant (τ = RC), Half-Life & Log-Linear Capacitor Graphs",
        "summary": "Interpreting exponential discharge curves, computing T_½ = RC ln 2, and finding RC from ln V vs t graphs.",
        "bullets": [
          "**Time constant τ = RC** - the time for charge Q, voltage V, or current I to fall to **1/e ≈ 37%** of its initial value during discharge (or reach **63%** of V₀ during charging!).",
          "**Discharge equations** - **X = X₀ e^(−t/RC)** for X = Q, V, or I; **charging**: **V = V₀(1 − e^(−t/RC))** and **Q = Q₀(1 − e^(−t/RC))**, while charging current STILL decays **I = I₀ e^(−t/RC)**!",
          "**Log-linear plot** - taking logs of V = V₀ e^(−t/RC) gives **ln V = ln V₀ − (1/RC) t** → straight line with **gradient = −1/(RC)** and y-intercept = **ln V₀**."
        ],
        "subsections": [
          {
            "heading": "Capacitor Half-Life Shortcut",
            "bullets": [
              "**T_½ = RC ln 2 ≈ 0.693 RC** - constant halving time independent of starting voltage!",
              "**Capacitors in series vs parallel** - Parallel: **C_tot = C₁ + C₂**; Series: **1/C_tot = 1/C₁ + 1/C₂** (OPPOSITE to resistors!)."
            ],
            "exampleHeading": "Worked example: Time for a 220 μF capacitor discharging through 100 kΩ to drop to half voltage",
            "examples": [
              "τ = RC = (100×10³)(220×10⁻⁶) = **22 s** → T_½ = 22 × ln 2 = **15.2 s**."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "time constant",
            "definition": "Product τ = RC (in seconds): time for discharging Q, V, or I to fall to 1/e (37%) of its initial value."
          },
          {
            "term": "dielectric",
            "definition": "Insulating material with polar molecules placed between capacitor plates to increase capacitance by factor ε_r."
          }
        ],
        "commonMistake": "When a capacitor is CHARGING, V and Q rise as (1 − e^(−t/RC)), but the CHARGING CURRENT I STILL DECAYS exponentially as I = I₀ e^(−t/RC)!"
      }
    ],
    "keyTerms": [
      {
        "term": "Farad (F)",
        "definition": "SI unit of capacitance equal to 1 coulomb stored per volt of potential difference."
      },
      {
        "term": "Dielectric",
        "definition": "Polar insulating material inserted between capacitor plates to align against the field and boost capacitance by εᵣ."
      },
      {
        "term": "Half-time (T₁/₂)",
        "definition": "Constant time interval RC ln 2 for a discharging capacitor’s voltage or charge to halve."
      }
    ],
    "checklistPoints": [
      "Explain microscopically how polar dielectric molecules increase capacitance C = Aε₀εᵣ/d.",
      "Calculate energy stored E = ½CV² and explain why 50% of battery work is lost as heat during charging.",
      "Solve exponential discharge/charging equations and determine RC from ln V vs t gradients."
    ]
  },
  "al-phys-7-3": {
    "subtopicId": "al-phys-7-3",
    "subtopicCode": "7.3",
    "subtopicTitle": "Magnetic Fields, Flux Linkage, Faraday/Lenz & Transformers",
    "readingMinutes": 14,
    "videoTitle": "Electromagnetic Induction, Dynamo Effect & Lenz’s Law - A-level Physics",
    "youtubeId": "OObvIrzIfbA",
    "videoChannel": "Science Shorts",
    "videoDuration": "11:38",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Dynamo Effect & Fleming Right-Hand Rule",
        "cardId": "al-phys-7-3-c1"
      },
      {
        "time": "2:43",
        "seconds": 163,
        "label": "Lenz Law & Conservation of Energy",
        "cardId": "al-phys-7-3-c2"
      },
      {
        "time": "6:00",
        "seconds": 360,
        "label": "Faraday Law: Induced EMF & Flux Linkage",
        "cardId": "al-phys-7-3-c2"
      },
      {
        "time": "9:00",
        "seconds": 540,
        "label": "AC Generators & Transformers Link",
        "cardId": "al-phys-7-3-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-7-3-c1",
        "title": "Magnetic Forces on Conductors & Moving Charges (Cyclotrons)",
        "summary": "Motor force F = BIL sin θ, circular motion F = BQv, and speed-independent cyclotron period.",
        "bullets": [
          "Force on a current-carrying wire in magnetic flux density B (Tesla, 1 T = 1 N A⁻¹ m⁻¹): **F = B I L sin θ** (direction given by Fleming’s Left-Hand Rule).",
          "Force on a free charge Q moving at velocity v perpendicular to B: **F = B Q v**. Because F is always perpendicular to velocity v, magnetic force does ZERO work (speed stays constant!) and provides centripetal force: BQv = mv² / r → radius **r = mv / (BQ)**.",
          "**Cyclotron principle**: time period of one orbit T = 2πr / v = 2πm / (BQ) — completely INDEPENDENT of particle speed v and radius r (at non-relativistic speeds)! Thus a constant-frequency alternating voltage across the gap accelerates particles smoothly into ever-wider spirals."
        ],
        "glossaryPills": [
          {
            "term": "magnetic flux density",
            "definition": "Force per unit current per unit length acting on a wire placed perpendicular to a magnetic field, measured in Tesla (T)."
          }
        ],
        "commonMistake": "When applying Fleming’s Left-Hand Rule to a moving ELECTRON (negative charge), point your second finger in the OPPOSITE direction to electron motion (conventional current direction)!",
        "subsections": [
          {
            "heading": "Cyclotron Frequency & Velocity Selector",
            "bullets": [
              "**Circular path in uniform B-field** - magnetic force **BQv = mv²/r** gives radius **r = mv / (BQ)** and cyclotron frequency **f = BQ / (2πm)** — remarkably **INDEPENDENT of particle speed v and radius r**!",
              "**Velocity selector** - crossed E and B fields allow ONLY particles with **qE = Bqv ⇒ v = E / B** to pass undeflected."
            ],
            "exampleHeading": "Worked example: Induced EMF in an aircraft wing (L = 30 m, v = 250 m/s, B_v = 50 μT)",
            "examples": [
              "ε = BLv = (50 × 10⁻⁶) × 30 × 250 = **0.375 V**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-7-3-c2",
        "title": "Flux Linkage, Faraday’s & Lenz’s Laws & Transformers",
        "summary": "Magnetic flux linkage BAN cos θ, Faraday/Lenz laws, RMS AC power, and transformer core losses.",
        "bullets": [
          "Magnetic flux Φ = B A (Webers, Wb = T m²). Magnetic flux linkage through an N-turn coil whose normal makes angle θ with B: **NΦ = B A N cos θ** (Wb turns).",
          "**Faraday’s Law**: magnitude of induced EMF equals the rate of change of magnetic flux linkage: ε = N (ΔΦ / Δt) (for a straight rod moving across B: ε = B l v). Lenz’s Law: the direction of an induced EMF/current ALWAYS opposes the change in flux that created it (direct consequence of conservation of energy!).",
          "Rotating AC generator coil: NΦ = BAN cos(ωt) → induced sinusoidal EMF ε = BANω sin(ωt) (peak EMF ε₀ = BANω occurs when flux linkage is ZERO and changing fastest!). RMS values for sinusoidal AC: **V_rms = V₀ / √2**, I_rms = I₀ / √2, mean power P = I_rms V_rms = ½ I₀ V₀.",
          "**Ideal transformer**: Vₛ / Vₚ = Nₛ / Nₚ and efficiency η = (Iₛ Vₛ) / (Iₚ Vₚ). Minimising losses: (1) low-resistance thick copper windings (I²R heat); (2) laminated soft-iron core with insulating layers (breaks up eddy currents); (3) soft iron (minimises magnetic hysteresis loss)."
        ],
        "glossaryPills": [
          {
            "term": "Lenz’s Law",
            "definition": "Conservation-of-energy law stating that an induced EMF always acts to oppose the change in magnetic flux linkage producing it."
          },
          {
            "term": "eddy currents",
            "definition": "Circulating currents induced inside a solid metal transformer core that dissipate heat; suppressed by laminating the iron core."
          }
        ],
        "memoryAid": "Flux linkage is MAXIMUM when coil face is perpendicular to B (θ = 0°), while induced EMF is MAXIMUM when coil plane is PARALLEL to B (θ = 90°, cutting flux fastest)!"
      },
      {
        "id": "al-phys-7-3-c3",
        "title": "AC Generators, RMS Values & Transformer Efficiency Losses",
        "summary": "Sinusoidal EMF from a rotating coil (ε = BANω sin ωt), root-mean-square AC power, and reducing core energy losses.",
        "bullets": [
          "**Rotating coil AC generator** - flux linkage **NΦ = BAN cos(ωt)** → by Faraday’s law **ε = −d(NΦ)/dt = BANω sin(ωt)**; peak EMF **ε₀ = BANω** occurs when the coil plane is **PARALLEL** to B (flux = 0, rate of cutting = MAX!).",
          "**RMS values** - **V_rms = V₀ / √2** and **I_rms = I₀ / √2**; average AC power **P_mean = I_rms V_rms = ½ I₀ V₀**.",
          "**Four transformer losses & fixes** - (1) **Eddy currents** → **laminated** iron core; (2) **Hysteresis** → **soft iron** core (easy to magnetise/demagnetise); (3) **Copper I²R heating** → **thick low-resistance copper** windings; (4) **Flux leakage** → wind primary & secondary closely on same limb."
        ],
        "subsections": [
          {
            "heading": "Lenz’s Law & Conservation of Energy",
            "bullets": [
              "**Lenz’s law** - induced EMF/current ALWAYS acts to **oppose the change in flux linkage** that produced it — if it aided the motion, kinetic and electrical energy would be created from nothing!",
              "**High-voltage transmission** - stepping up V by factor k cuts current I by factor k, slashing transmission cable heat losses **P_loss = I²R** by factor **k²**."
            ],
            "exampleHeading": "Worked example: Peak voltage of UK 230 V_rms mains supply",
            "examples": [
              "V₀ = √2 × 230 = **325 V** (peak-to-peak = 650 V)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "flux linkage",
            "definition": "Product of number of coil turns N and magnetic flux Φ = BA cos θ through each turn (NΦ = BAN cos θ, units Wb turns)."
          },
          {
            "term": "Lenz’s law",
            "definition": "The direction of an induced EMF/current always opposes the change in magnetic flux linkage causing it."
          }
        ],
        "commonMistake": "In an AC generator, EMF is MAXIMUM when magnetic flux through the coil is ZERO (coil parallel to B), because the rate of change of flux is steepest there!"
      }
    ],
    "keyTerms": [
      {
        "term": "Magnetic flux (Φ)",
        "definition": "Product of perpendicular magnetic flux density and area, Φ = BA (Webers, Wb)."
      },
      {
        "term": "Faraday’s Law",
        "definition": "Induced EMF in a circuit equals the rate of change of magnetic flux linkage: ε = N ΔΦ / Δt."
      },
      {
        "term": "RMS voltage",
        "definition": "Direct-current voltage equivalent delivering the same average heating power as sinusoidal AC: V_rms = V₀ / √2."
      }
    ],
    "checklistPoints": [
      "Derive cyclotron radius r = mv/(BQ) and show frequency f = BQ/(2πm) is independent of speed.",
      "Calculate flux linkage BAN cos θ, rotating coil peak EMF BANω, and apply Lenz’s Law to falling magnets through copper pipes.",
      "Calculate RMS power and justify all four transformer efficiency design features."
    ]
  },
  "al-phys-8-1": {
    "subtopicId": "al-phys-8-1",
    "subtopicCode": "8.1",
    "subtopicTitle": "Radioactive Decay, Half-Life & Nuclear Radius",
    "readingMinutes": 13,
    "videoTitle": "Radioactive Decay & Half-life | How to Calculate Activity & Half-life",
    "youtubeId": "wvgT52mwM3Y",
    "videoChannel": "Cognito",
    "videoDuration": "6:48",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Introduction to Radioactive Decay",
        "cardId": "al-phys-8-1-c1"
      },
      {
        "time": "1:33",
        "seconds": 93,
        "label": "What is Half-life?",
        "cardId": "al-phys-8-1-c1"
      },
      {
        "time": "3:44",
        "seconds": 224,
        "label": "Calculating Half-life from a Graph",
        "cardId": "al-phys-8-1-c1"
      },
      {
        "time": "5:14",
        "seconds": 314,
        "label": "Half-Life Calculation Example",
        "cardId": "al-phys-8-1-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-8-1-c1",
        "title": "Exponential Radioactive Decay & Stability Curve",
        "summary": "Spontaneous exponential decay N = N₀e^(−λt), activity A = λN, half-life, and the N–Z stability belt.",
        "bullets": [
          "Radioactive decay is **spontaneous** (unaffected by external temperature, pressure, or chemical bonding) and **random** (impossible to predict which exact nucleus decays next, though each nucleus has constant decay probability per second λ, the decay constant in s⁻¹).",
          "Activity A (Becquerels, 1 Bq = 1 decay s⁻¹) equals −dN/dt = λ N. Integrating yields exponential decay: **N = N₀ e^(−λt)**, A = A₀ e^(−λt), and corrected count rate C = C₀ e^(−λt) (always subtract background count rate FIRST!).",
          "Half-life **T₁/₂ = ln 2 / λ** ≈ 0.693 / λ. Gamma radiation intensity obeys the inverse-square law I = k / x² (verified by plotting 1/√I vs distance x to find source offset).",
          "**N–Z stability chart**: light stable nuclei follow N = Z; heavier nuclei require more neutrons (N > Z, up to ~1.5:1) to supply strong nuclear attraction offsetting growing proton-proton Coulomb repulsion. Neutron-rich nuclei (above belt) emit β⁻; proton-rich (below belt) emit β⁺ or undergo electron capture; very heavy nuclei (Z > 82) emit α."
        ],
        "glossaryPills": [
          {
            "term": "decay constant",
            "definition": "Probability λ (s⁻¹) that an individual unstable nucleus will decay per unit time, linked to half-life by λ = ln 2 / T₁/₂."
          }
        ],
        "commonMistake": "When using A = λN in Becquerels (decays per SECOND), make sure λ is in s⁻¹ — convert half-life from hours, days, or years into SECONDS before calculating λ = ln 2 / T₁/₂!",
        "subsections": [
          {
            "heading": "Exponential Decay Law & Nuclear Stability Curve",
            "bullets": [
              "**Activity & decay constant** - **A = λN** (Bq = s⁻¹), **N = N₀ e^(−λt)**, **A = A₀ e^(−λt)**, and **T_½ = ln 2 / λ** (make sure T_½ and λ use matching time units!).",
              "**N–Z stability belt** - light stable nuclei have **N = Z**; heavy stable nuclei need **N > Z** (~1.5×) so extra strong nuclear force offsets long-range proton–proton electrostatic repulsion."
            ],
            "exampleHeading": "Worked example: Decay constant and activity of 1.0 × 10¹⁵ atoms with T_½ = 100 s",
            "examples": [
              "λ = ln 2 / 100 = **6.93 × 10⁻³ s⁻¹**; A = λN = 6.93×10⁻³ × 10¹⁵ = **6.93 × 10¹² Bq**."
            ]
          }
        ]
      },
      {
        "id": "al-phys-8-1-c2",
        "title": "Measuring Nuclear Radius & Constant Nuclear Density",
        "summary": "Alpha closest approach, electron diffraction nuclear radii, and constant nuclear density from R = R₀A^(1/3).",
        "bullets": [
          "Method 1 — Alpha closest approach (gives upper bound): equate initial alpha kinetic energy to electrostatic potential energy at stopping distance r_min: Ek = (Q_α Q_nucleus) / (4πε₀ r_min).",
          "Method 2 — High-energy electron diffraction (more accurate; electrons are leptons unaffected by the **strong nuclear force** and have λ ≈ 10⁻¹⁵ m): first diffraction minimum angle θ satisfies sin θ ≈ 0.61 λ / R (or 1.22 λ / 2R).",
          "Empirical radius relation: **R = R₀ A^(1/3)** (where R₀ ≈ 1.05–1.2 × 10⁻¹⁵ m). Because nuclear volume V = (4/3)πR³ = (4/3)πR₀³ A is directly proportional to nucleon number A (mass M ≈ A u), nuclear density ρ = M / V = u / ((4/3)πR₀³) ≈ 2 × 10¹⁷ kg m⁻³ is CONSTANT and INDEPENDENT of A!"
        ],
        "glossaryPills": [
          {
            "term": "nuclear density",
            "definition": "Enormous constant density (~2 × 10¹⁷ kg m⁻³) shared by all atomic nuclei regardless of nucleon number A, proving nucleons are tightly packed."
          }
        ],
        "memoryAid": "R ∝ A^(1/3) means Volume ∝ R³ ∝ A — mass and volume scale identically with A, so A cancels out of density ρ = M/V!"
      },
      {
        "id": "al-phys-8-1-c3",
        "title": "Closest Approach, Electron Diffraction & Constant Nuclear Density",
        "summary": "Two independent methods to measure nuclear radius R = R₀ A^(1/3) and proof that nuclear density is constant for all elements.",
        "bullets": [
          "**Rutherford closest approach (upper limit)** - equate alpha KE to electric PE at turning point: **E_k = Q_α Q_nuc / (4πε₀ r_min)** (gives an upper bound because the alpha never touches the nucleus).",
          "**High-energy electron diffraction (accurate R)** - electrons do NOT feel the strong force and have de Broglie λ ≈ 10⁻¹⁵ m; first diffraction minimum satisfies **sin θ ≈ 0.61 λ / R**.",
          "**Constant nuclear density proof** - **R = R₀ A^(1/3)** (R₀ ≈ 1.05–1.2 fm) ⇒ volume V = (4/3)πR³ = (4/3)πR₀³ A ∝ A, and mass M ≈ A·u ∝ A → **ρ = M/V = u / ((4/3)πR₀³) ≈ 2 × 10¹⁷ kg m⁻³** (A cancels out!)."
        ],
        "subsections": [
          {
            "heading": "Inverse-Square Law for Gamma Radiation",
            "bullets": [
              "**I = k / x²** - count rate (after subtracting **background count**) falls inversely with distance squared; plotting **1 / √(C_corrected)** against x gives a straight line whose x-intercept reveals any dead-space offset inside the GM tube!",
              "**Decay modes on N–Z chart** - neutron-rich (above belt) → **β⁻**; proton-rich (below belt) → **β⁺ / electron capture**; very heavy (Z > 82) → **α**."
            ],
            "exampleHeading": "Worked example: Nuclear radius of Carbon-12 (A = 12, R₀ = 1.05 fm)",
            "examples": [
              "R = 1.05 × 12^(1/3) = 1.05 × 2.289 = **2.40 fm** (2.40 × 10⁻¹⁵ m)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "decay constant",
            "definition": "Probability λ (in s⁻¹) that an individual unstable nucleus decays per second (A = λN, T_½ = ln 2 / λ)."
          },
          {
            "term": "closest approach",
            "definition": "Minimum separation r_min reached by a head-on alpha particle when all its kinetic energy converts to electrostatic PE."
          }
        ],
        "commonMistake": "When computing A = λN in Becquerels (decays per SECOND), ALWAYS convert half-life T_½ into SECONDS before finding λ = ln 2 / T_½!"
      }
    ],
    "keyTerms": [
      {
        "term": "Activity (A)",
        "definition": "Number of unstable nuclei decaying per second, A = λN (Becquerels, Bq)."
      },
      {
        "term": "Electron diffraction (nuclear)",
        "definition": "Scattering of high-energy leptons (~100s MeV) off nuclei to measure true nuclear radius without strong-force distortion."
      },
      {
        "term": "Inverse-square law",
        "definition": "Intensity of gamma radiation from a point source falls off proportionally to 1/x² as photons spread over expanding spheres."
      }
    ],
    "checklistPoints": [
      "Solve radioactive dating and activity problems using A = λN, N = N₀e^(−λt), and T₁/₂ = ln 2 / λ with clean unit conversions.",
      "Explain the N–Z stability curve and predict α, β⁻, and β⁺ decay regions.",
      "Use R = R₀A^(1/3) to prove nuclear density is independent of nucleon number A."
    ]
  },
  "al-phys-8-2": {
    "subtopicId": "al-phys-8-2",
    "subtopicCode": "8.2",
    "subtopicTitle": "Mass Defect, Binding Energy & Thermal Nuclear Reactors",
    "readingMinutes": 14,
    "videoTitle": "Binding Energy - A-level Physics",
    "youtubeId": "b7upbQtJeno",
    "videoChannel": "Science Shorts",
    "videoDuration": "11:37",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Relative Atomic Mass Unit",
        "cardId": "al-phys-8-2-c1"
      },
      {
        "time": "2:23",
        "seconds": 143,
        "label": "Mass Defect",
        "cardId": "al-phys-8-2-c1"
      },
      {
        "time": "6:49",
        "seconds": 409,
        "label": "Fission & Fusion",
        "cardId": "al-phys-8-2-c2"
      },
      {
        "time": "9:05",
        "seconds": 545,
        "label": "Binding Energy per Nucleon Curve",
        "cardId": "al-phys-8-2-c3"
      }
    ],
    "cards": [
      {
        "id": "al-phys-8-2-c1",
        "title": "Mass Defect, Binding Energy & The Fe-56 Stability Peak",
        "summary": "Mass defect Δm, binding energy E = Δmc², and why the Fe-56 peak powers both fission and fusion.",
        "bullets": [
          "**Mass defect (Δm)** is the difference between the total mass of a nucleus’s separate constituent nucleons and the actual mass of the bound nucleus: Δm = [Z mₚ + (A − Z) mₙ] − m_nucleus.",
          "Binding energy (E = Δm c²) is the minimum work required to completely separate a nucleus into its individual protons and neutrons (1 atomic mass unit u = 1.661 × 10⁻²⁷ kg ≡ 931.5 MeV).",
          "Binding Energy PER NUCLEON (BE / A) measures nuclear stability and peaks sharply at **Iron-56** (~8.8 MeV per nucleon). Energy released in any nuclear reaction: ΔE = Σ(BE of products) − Σ(BE of reactants) = (mass of reactants − mass of products) × c².",
          "**Nuclear fusion** joins light nuclei (A < 56, steep upward slope → huge energy release per kg, requires ~10⁸ K to overcome Coulomb repulsion); **nuclear fission** splits heavy nuclei (A > 56, e.g., U-235 → Ba + Kr + 2–3 neutrons) into two more tightly bound daughter nuclei with HIGHER binding energy per nucleon."
        ],
        "glossaryPills": [
          {
            "term": "binding energy",
            "definition": "Energy equivalent of the mass defect (Δmc²) needed to completely dismantle a nucleus into separate free protons and neutrons."
          }
        ],
        "commonMistake": "When calculating energy released from binding energies: Energy Released = Binding Energy of PRODUCTS minus Binding Energy of REACTANTS (more tightly bound products have LOWER total mass!)."
      },
      {
        "id": "al-phys-8-2-c2",
        "title": "Thermal Nuclear Reactors & Safety Engineering",
        "summary": "U-235 thermal reactor engineering: elastic moderator, boron control rods, coolant, and vitrified waste.",
        "bullets": [
          "Induced fission of **Uranium-235** requires slow \"thermal\" neutrons (~0.025 eV) to be captured smoothly, forming unstable U-236 which splits into two daughter nuclei, ~200 MeV kinetic energy, and 2–3 fast neutrons sustaining a chain reaction (minimum fuel mass = critical mass).",
          "Moderator (water or graphite): slows fast fission neutrons down to thermal speeds via repeated ELASTIC COLLISIONS — moderator nuclei must have a small mass similar to a neutron (to maximise kinetic energy transfer per collision) and low neutron absorption.",
          "**Control rods** (boron or cadmium): absorb excess thermal neutrons to keep exactly ONE neutron per fission triggering another fission (steady output); lowering rods further shuts the reactor down.",
          "**Coolant** (pressurised water or CO₂): transfers thermal energy from the reactor core to heat exchangers driving steam turbines. Safety: thick reinforced concrete & steel biological shielding absorbs gamma/neutrons; spent high-level waste (long-lived α/β/γ fission fragments) is stored first in cooling ponds, then vitrified into glass blocks sealed in stainless steel canisters in deep geologically stable repositories."
        ],
        "subsections": [
          {
            "heading": "Thermal reactor safety & waste hierarchy",
            "bullets": [
              "**Emergency shutdown**: boron control rods drop fully into the core under gravity to absorb neutrons and quench criticality immediately.",
              "**High-level fission waste** emits intense α, β, and γ radiation for millennia and requires active cooling ponds before glass **vitrification** and deep geological disposal."
            ],
            "exampleHeading": "Why elastic mass-matching matters for moderators:",
            "examples": [
              "**Water (¹H nuclei) & Graphite (¹²C)** — Low nuclear mass transfers large kinetic energy fraction per elastic collision",
              "**Heavy lead nuclei (²⁰⁸Pb)** — Neutrons rebound with almost unchanged speed, making lead ineffective as a moderator"
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "moderator",
            "definition": "Low-mass reactor material (water or graphite) that slows fast fission neutrons down to thermal speeds via elastic collisions so U-235 can capture them."
          }
        ],
        "memoryAid": "Moderator = slows neutrons (elastic collisions); Control rods = absorbs neutrons (boron/cadmium); Coolant = removes heat!"
      },
      {
        "id": "al-phys-8-2-c3",
        "title": "Nuclear Fusion Conditions & Radioactive Waste Management",
        "summary": "Why fusion releases more energy per nucleon than fission, why it requires extreme temperatures, and how spent nuclear fuel is handled.",
        "bullets": [
          "**Binding energy per nucleon peak at Fe-56** - nuclei lighter than Fe-56 release energy via **FUSION** (steepest climb → highest energy per nucleon!); heavy nuclei like U-235 release energy via **FISSION** — both move products **UP** the curve toward higher binding energy per nucleon!",
          "**Why fusion needs ~10⁸ K** - two positively charged nuclei experience huge **electrostatic Coulomb repulsion**; extreme temperature gives enough kinetic energy to bring them within ~1–2 fm where the **strong nuclear force** binds them.",
          "**Reactor waste management** - spent fuel rods contain highly radioactive fission fragments (Sr-90, Cs-137) → cooled underwater in **cooling ponds** for years → vitrified in glass / sealed in steel drums → stored in deep geologically stable repositories."
        ],
        "subsections": [
          {
            "heading": "Three Core Thermal Reactor Components (Exam Classic!)",
            "bullets": [
              "**Moderator (water / graphite)** - slows fast fission neutrons to **thermal speeds** via **elastic collisions** with light nuclei so U-235 can absorb them.",
              "**Control rods (boron / cadmium)** - **absorb neutrons** to hold **k = 1** (exactly 1 neutron per fission causes the next fission); drop fully in for emergency shutdown.",
              "**Coolant (pressurised water / CO₂)** - transfers thermal energy from the core to heat exchangers to make steam for turbines."
            ],
            "exampleHeading": "Worked example: Energy released from mass defect Δm = 0.215 u",
            "examples": [
              "1 u ≡ 931.5 MeV → ΔE = 0.215 × 931.5 = **200.3 MeV** (3.21 × 10⁻¹¹ J per fission)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "binding energy",
            "definition": "Work required to completely separate a nucleus into its individual free protons and neutrons (ΔE = Δmc²)."
          },
          {
            "term": "moderator",
            "definition": "Material (e.g. water or graphite) that slows fast fission neutrons to thermal energies via elastic collisions."
          }
        ],
        "commonMistake": "NEVER say the moderator \"absorbs neutrons\" — that is the CONTROL RODS! The moderator SLOWS neutrons down via elastic collisions!"
      }
    ],
    "keyTerms": [
      {
        "term": "Mass defect (Δm)",
        "definition": "Mass deficit between separated nucleons and the assembled nucleus, equivalent to binding energy via ΔE = Δmc²."
      },
      {
        "term": "Thermal neutron",
        "definition": "Low-energy neutron (~0.025 eV) in thermal equilibrium with the moderator, readily absorbed by U-235 to induce fission."
      },
      {
        "term": "Critical mass",
        "definition": "Minimum mass of fissile fuel required so at least one neutron per fission triggers a further fission on average."
      }
    ],
    "checklistPoints": [
      "Calculate mass defect, binding energy per nucleon, and fission/fusion energy release using both Δmc² and 1 u = 931.5 MeV.",
      "Sketch the binding energy per nucleon vs nucleon number A graph marking He-4, Fe-56 peak, fusion, and fission regions.",
      "Explain the exact physical purpose and material choice for the moderator, control rods, coolant, shielding, and waste vitrification."
    ]
  }
};

export const ALEVEL_PHYSICS_QUIZZES: QuizQuestion[] = [
  {
    "id": "al-phys-q1",
    "subtopicId": "al-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which combination of SI base units is equivalent to the Volt (V)?",
    "options": [
      "kg m² s⁻² A⁻¹",
      "kg m² s⁻³ A⁻¹",
      "kg m s⁻³ A⁻²",
      "kg m² s⁻³ A⁻²"
    ],
    "correctIndex": 1,
    "explanation": "1 V = 1 J / 1 C = (kg m² s⁻²) / (A s) = kg m² s⁻³ A⁻¹."
  },
  {
    "id": "al-phys-q2",
    "subtopicId": "al-phys-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A student measures a wire’s diameter d with a percentage uncertainty of 2.5% and its length L with 1.0%. Given cross-sectional area A = πd²/4, calculate the total percentage uncertainty in A / L.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "% uncertainty in d² = 2 × 2.5% = 5.0%. Adding % uncertainty in L (1.0%) gives 5.0% + 1.0% = 6.0%.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Doubles diameter % uncertainty to 5.0%",
          "requiredKeywordGroups": [
            [
              "5",
              "2 × 2.5",
              "2*2.5"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Total percentage uncertainty = 6.0%",
          "numericMatch": {
            "value": 6,
            "tolerance": 0.1
          }
        }
      ]
    },
    "explanation": "%Δ(A/L) = 2(%Δd) + %ΔL = 2(2.5%) + 1.0% = 6.0%."
  },
  {
    "id": "al-phys-q3",
    "subtopicId": "al-phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which quark change and exchange boson occur during β⁻ radioactive decay of a neutron into a proton?",
    "options": [
      "u → d + e⁺ + νₑ via W⁺ boson",
      "d → u + e⁻ + ν̄ₑ via W⁻ boson",
      "s → u + e⁻ + νₑ via photon γ",
      "u → s + e⁻ + ν̄ₑ via gluon"
    ],
    "correctIndex": 1,
    "explanation": "A neutron (udd) becomes a proton (uud) when a down quark changes flavour to an up quark via a W⁻ boson, emitting an electron and electron antineutrino."
  },
  {
    "id": "al-phys-q4",
    "subtopicId": "al-phys-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Monochromatic light above threshold frequency strikes a clean zinc plate, emitting photoelectrons. If the light INTENSITY is doubled while frequency remains constant, what happens?",
    "options": [
      "Maximum kinetic energy of photoelectrons doubles while current stays constant",
      "Number of photoelectrons emitted per second (current) doubles while maximum kinetic energy stays unchanged",
      "Work function of zinc halves",
      "Stopping potential doubles immediately"
    ],
    "correctIndex": 1,
    "explanation": "Higher intensity at constant frequency doubles photon arrival rate (doubling current), while each photon still has the exact same energy hf so Ek(max) = hf − φ is unchanged."
  },
  {
    "id": "al-phys-q5",
    "subtopicId": "al-phys-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Light of photon energy 4.20 eV strikes a metal with work function φ = 2.10 eV. State the stopping potential Vs required to halt the fastest photoelectrons.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Ek(max) = hf − φ = 4.20 − 2.10 = 2.10 eV. Since eVs = Ek(max), Vs = 2.10 V.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Ek(max) = 2.10 eV",
          "requiredKeywordGroups": [
            [
              "2.1"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Stopping potential Vs = 2.10 V",
          "numericMatch": {
            "value": 2.1,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "Ek(max) = 4.20 − 2.10 = 2.10 eV, so stopping potential Vs = 2.10 V."
  },
  {
    "id": "al-phys-q6",
    "subtopicId": "al-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why can transverse electromagnetic waves be polarised whereas longitudinal sound waves cannot?",
    "options": [
      "Sound waves have too low a frequency to pass through slits",
      "Longitudinal oscillations occur parallel to wave energy propagation, whereas polarisation restricts transverse oscillations perpendicular to propagation into one plane",
      "Sound waves cannot undergo superposition",
      "Transverse waves travel only in solids"
    ],
    "correctIndex": 1,
    "explanation": "Only transverse waves have oscillations perpendicular to travel direction that can be filtered into a single plane."
  },
  {
    "id": "al-phys-q7",
    "subtopicId": "al-phys-3-2",
    "type": "short-answer",
    "marks": 3,
    "prompt": "A laser of wavelength λ = 600 nm illuminates a diffraction grating with 500 lines per mm. Calculate the maximum integer order n_max of bright maxima observable.",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Grating spacing d = 10⁻³ ÷ 500 = 2.00 × 10⁻⁶ m. Maximum order n ≤ d / λ = (2.00 × 10⁻⁶) ÷ (600 × 10⁻⁹) = 3.33, so maximum integer order n_max = 3.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "d = 2.0 × 10⁻⁶ m",
          "requiredKeywordGroups": [
            [
              "2.0",
              "2 × 10",
              "2e-6"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "d / λ = 3.33",
          "requiredKeywordGroups": [
            [
              "3.33",
              "3.3"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Rounds down to integer order 3",
          "numericMatch": {
            "value": 3,
            "tolerance": 0
          }
        }
      ]
    },
    "explanation": "d = 10⁻³/500 = 2.0 × 10⁻⁶ m; d/λ = 3.33, rounding down gives n_max = 3."
  },
  {
    "id": "al-phys-q8",
    "subtopicId": "al-phys-3-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each optical fibre pulse-broadening mechanism to its engineering solution.",
    "pairs": [
      {
        "left": "Modal dispersion (different ray path lengths)",
        "right": "Use a very narrow single-mode core & small core-cladding Δn"
      },
      {
        "left": "Material dispersion (different speeds for different wavelengths)",
        "right": "Transmit pulses using monochromatic laser light"
      }
    ],
    "explanation": "Narrow single-mode fibres limit ray angles (modal dispersion), while monochromatic lasers eliminate wavelength speed differences (material dispersion)."
  },
  {
    "id": "al-phys-q9",
    "subtopicId": "al-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A cannonball is launched horizontally at 30 m s⁻¹ from a 45 m high cliff (neglecting air resistance, g = 9.81 m s⁻²). Which statement about its motion is correct?",
    "options": [
      "Its horizontal velocity decreases steadily by 9.81 m s⁻¹ every second",
      "It hits the ground in the exact same time as a ball dropped vertically from rest from 45 m",
      "Its vertical acceleration at the cliff edge is zero",
      "Its vertical velocity remains constant at 30 m s⁻¹"
    ],
    "correctIndex": 1,
    "explanation": "Horizontal and vertical components are completely independent; both balls start with u_y = 0 and accelerate downward at g = 9.81 m s⁻²."
  },
  {
    "id": "al-phys-q10",
    "subtopicId": "al-phys-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the explanation of how car crumple zones reduce injury during a crash.",
    "segments": [
      "For a fixed change in momentum Δ(mv), crumple zones increase the collision impact ",
      ", which directly reduces the average resultant ",
      " acting on the passenger (F = Δp / Δt)."
    ],
    "wordBank": [
      "time",
      "force",
      "velocity",
      "impulse",
      "strain"
    ],
    "answers": [
      "time",
      "force"
    ],
    "explanation": "Impulse FΔt = Δ(mv) is fixed; extending impact duration Δt lowers average impact force F."
  },
  {
    "id": "al-phys-q11",
    "subtopicId": "al-phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does the resistance of an NTC thermistor DECREASE markedly when heated, whereas a metallic filament wire’s resistance INCREASES?",
    "options": [
      "Metal ions stop vibrating at high temperatures",
      "Heating liberates vastly more free charge carriers in the semiconductor thermistor, outweighing increased lattice collisions",
      "Thermistors become superconductors above room temperature",
      "Electrons move slower in metals when voltage increases"
    ],
    "correctIndex": 1,
    "explanation": "In semiconductors, thermal excitation exponentially increases conduction charge carrier density, lowering resistance."
  },
  {
    "id": "al-phys-q12",
    "subtopicId": "al-phys-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A cell of EMF ε = 12.0 V and internal resistance r = 0.50 Ω supplies a current of 4.0 A to an external load. Calculate the terminal potential difference V.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "V = ε − Ir = 12.0 − (4.0 × 0.50) = 12.0 − 2.0 = 10.0 V.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Lost volts Ir = 2.0 V",
          "requiredKeywordGroups": [
            [
              "2.0",
              "2 v",
              "12 - 2"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Terminal PD = 10.0 V",
          "numericMatch": {
            "value": 10,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "V = ε − Ir = 12.0 − (4.0 × 0.50) = 10.0 V."
  },
  {
    "id": "al-phys-q13",
    "subtopicId": "al-phys-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select TWO exact conditions satisfied by any oscillator executing Simple Harmonic Motion (SHM).",
    "options": [
      "Acceleration is directly proportional to displacement from equilibrium (a ∝ −x)",
      "Acceleration is always directed towards the equilibrium position",
      "Time period doubles whenever amplitude is doubled",
      "Velocity reaches its maximum at the extreme displacements x = ±A"
    ],
    "correctIndices": [
      0,
      1
    ],
    "explanation": "SHM is defined by a = −ω²x: acceleration is proportional to displacement and directed back towards equilibrium; period is independent of amplitude."
  },
  {
    "id": "al-phys-q14",
    "subtopicId": "al-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Helium gas (M = 4 g mol⁻¹) and oxygen gas (M = 32 g mol⁻¹) are kept at the exact same temperature of 300 K. How do their mean molecular translational kinetic energies compare?",
    "options": [
      "Oxygen molecules have 8× the mean kinetic energy of helium",
      "Helium molecules have 8× the mean kinetic energy of oxygen",
      "Both gases have the EXACT SAME mean molecular kinetic energy (3/2 kT)",
      "Both gases have zero kinetic energy at 300 K"
    ],
    "correctIndex": 2,
    "explanation": "Mean translational kinetic energy ½m⟨c²⟩ = (3/2)kT depends ONLY on absolute temperature T; helium simply has a higher c_rms speed."
  },
  {
    "id": "al-phys-q15",
    "subtopicId": "al-phys-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "According to Kepler’s 3rd Law (T² ∝ r³), if a satellite’s circular orbital radius r around Earth is increased by a factor of 4, by what factor does its orbital period T increase?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correctIndex": 2,
    "explanation": "T² ∝ r³ → T ∝ r^(3/2). Scaling r by 4 scales T by 4^(3/2) = (√4)³ = 2³ = 8."
  },
  {
    "id": "al-phys-q16",
    "subtopicId": "al-phys-7-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A 470 μF capacitor charged to 12.0 V discharges through a 10 kΩ resistor. Calculate the time constant τ = RC in seconds.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "τ = RC = (10 × 10³ Ω) × (470 × 10⁻⁶ F) = 4.70 s.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct SI powers 10⁴ × 470×10⁻⁶",
          "requiredKeywordGroups": [
            [
              "470",
              "10"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Time constant = 4.7 s",
          "numericMatch": {
            "value": 4.7,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "τ = (1.0 × 10⁴)(4.70 × 10⁻⁴) = 4.70 s."
  },
  {
    "id": "al-phys-q17",
    "subtopicId": "al-phys-7-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "A proton enters a uniform magnetic field perpendicularly and follows a circular cyclotron path of radius r = mv/(BQ). If its speed v is doubled inside the same magnetic field B, what happens to its orbital time period T?",
    "options": [
      "T doubles",
      "T halves",
      "T remains completely unchanged (T = 2πm / BQ)",
      "T quadruples"
    ],
    "correctIndex": 2,
    "explanation": "Doubling v doubles radius r = mv/(BQ), so circumference 2πr doubles while speed doubles — leaving period T = 2πm/(BQ) completely constant!"
  },
  {
    "id": "al-phys-q18",
    "subtopicId": "al-phys-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Given empirical nuclear radius R = R₀ A^(1/3), how does the density of a Uranium-238 nucleus compare with that of a Carbon-12 nucleus?",
    "options": [
      "Uranium-238 is nearly 20× denser than Carbon-12",
      "Carbon-12 is denser because it has fewer neutrons",
      "Both nuclei have essentially the EXACT SAME constant nuclear density (~2 × 10¹⁷ kg m⁻³)",
      "Nuclear density scales as A³"
    ],
    "correctIndex": 2,
    "explanation": "Volume V = (4/3)πR₀³ A and mass M ≈ Au are both directly proportional to A, so A cancels out of density ρ = M/V."
  },
  {
    "id": "al-phys-q19",
    "subtopicId": "al-phys-8-2",
    "type": "matching",
    "marks": 3,
    "prompt": "Match each thermal nuclear reactor component to its exact physical role.",
    "pairs": [
      {
        "left": "Moderator (water or graphite)",
        "right": "Slows fast fission neutrons to thermal speeds via elastic collisions"
      },
      {
        "left": "Control rods (boron or cadmium)",
        "right": "Absorbs excess thermal neutrons to regulate chain reaction rate"
      },
      {
        "left": "Coolant (pressurised water / CO₂)",
        "right": "Transfers thermal energy from core to steam heat exchangers"
      }
    ],
    "explanation": "Moderators slow neutrons, control rods absorb neutrons, and coolant extracts heat to generate steam."
  },
  {
    "id": "al-phys-q20",
    "subtopicId": "al-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A micrometer screw gauge has a zero error of +0.03 mm that is not subtracted from repeated readings of a wire’s diameter. How does this error affect precision and accuracy?",
    "options": [
      "It is a random error that reduces precision",
      "It is a systematic error that reduces accuracy while leaving precision (spread of repeat readings) unchanged",
      "It increases both precision and accuracy",
      "It can be eliminated by taking the mean of 10 repeat readings"
    ],
    "correctIndex": 1,
    "explanation": "Zero error shifts every reading by +0.03 mm (systematic error), degrading accuracy without changing the scatter (precision) of repeats."
  },
  {
    "id": "al-phys-q21",
    "subtopicId": "al-phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "An electron (rest energy E₀ = 0.511 MeV) annihilates with a positron at rest to produce two identical gamma photons. State the minimum energy (in MeV) of each photon and explain why TWO photons are produced.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Each photon has a minimum energy of 0.511 MeV. Two photons travelling in opposite directions are required to conserve total linear momentum (which is initially zero).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Minimum energy of each photon = 0.511 MeV",
          "numericMatch": {
            "value": 0.511,
            "tolerance": 0.005
          }
        },
        {
          "id": "mp2",
          "markDescription": "Two photons moving in opposite directions conserve momentum",
          "requiredKeywordGroups": [
            [
              "momentum"
            ],
            [
              "conserv",
              "opposite"
            ]
          ]
        }
      ]
    },
    "explanation": "Total rest energy 2E₀ splits equally into two opposite photons of energy E₀ = 0.511 MeV to conserve zero net momentum."
  },
  {
    "id": "al-phys-q22",
    "subtopicId": "al-phys-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A stretched guitar string of length L = 0.65 m and mass per unit length μ = 2.0 × 10⁻³ kg m⁻¹ is held under tension T = 72 N. Calculate its first harmonic (fundamental) frequency in Hz to 2 significant figures.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "f = (1 / 2L) √(T / μ) = (1 ÷ 1.30) × √(72 ÷ 0.0020) = (1 ÷ 1.30) × √36,000 = 190 ÷ 1.30 = 146 Hz (150 Hz).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "√(T / μ) = √36000 = 189.7 m s⁻¹",
          "requiredKeywordGroups": [
            [
              "36000",
              "189",
              "190"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "f = 146 Hz (accept 145–150 Hz)",
          "numericMatch": {
            "value": 146,
            "tolerance": 4
          }
        }
      ]
    },
    "explanation": "f = (1 / 1.30) × √(72 / 0.0020) = 189.7 / 1.30 = 146 Hz."
  },
  {
    "id": "al-phys-q23",
    "subtopicId": "al-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A crate of mass m rests on a rough inclined plane angled at θ to the horizontal. What is the component of the crate’s weight acting parallel down the slope?",
    "options": [
      "mg cos θ",
      "mg sin θ",
      "mg tan θ",
      "mg / cos θ"
    ],
    "correctIndex": 1,
    "explanation": "Resolving weight mg: parallel down the incline is mg sin θ, and perpendicular into the incline is mg cos θ."
  },
  {
    "id": "al-phys-q24",
    "subtopicId": "al-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "On a tensile stress (σ) against tensile strain (ε) graph for a metal wire, what physical quantities are represented by the initial linear gradient and the area under the linear region?",
    "options": [
      "Gradient = spring constant k; Area = total force",
      "Gradient = Young modulus E; Area = elastic strain energy stored per unit volume",
      "Gradient = resistivity ρ; Area = work done",
      "Gradient = impulse; Area = momentum change"
    ],
    "correctIndex": 1,
    "explanation": "Gradient σ / ε = Young modulus E (Pa); area ½σε = (½FΔL) / (AL) = elastic strain energy per unit volume (J m⁻³)."
  },
  {
    "id": "al-phys-q25",
    "subtopicId": "al-phys-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A nichrome wire of length L = 1.60 m and cross-sectional area A = 2.0 × 10⁻⁷ m² has a resistance of 8.8 Ω. Calculate the resistivity ρ of nichrome in Ω m.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "ρ = R A / L = (8.8 × 2.0 × 10⁻⁷) ÷ 1.60 = 1.1 × 10⁻⁶ Ω m.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct substitution (8.8 × 2.0×10⁻⁷) / 1.60",
          "requiredKeywordGroups": [
            [
              "8.8"
            ],
            [
              "1.6"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "ρ = 1.1 × 10⁻⁶ Ω m",
          "requiredKeywordGroups": [
            [
              "1.1"
            ]
          ]
        }
      ]
    },
    "explanation": "ρ = RA / L = (8.8 × 2.0 × 10⁻⁷) / 1.60 = 1.1 × 10⁻⁶ Ω m."
  },
  {
    "id": "al-phys-q26",
    "subtopicId": "al-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In a potential divider circuit powered by a 9.0 V battery, a fixed resistor R₁ = 3.0 kΩ is in series with an LDR of resistance R₂ = 6.0 kΩ. What is the output voltage V_out across the LDR?",
    "options": [
      "3.0 V",
      "4.5 V",
      "6.0 V",
      "9.0 V"
    ],
    "correctIndex": 2,
    "explanation": "V_out = V_in × R₂ / (R₁ + R₂) = 9.0 × 6.0 / (3.0 + 6.0) = 6.0 V."
  },
  {
    "id": "al-phys-q27",
    "subtopicId": "al-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "When light damping is increased to heavy damping on a forced mechanical oscillator, how does the resonance amplitude-frequency curve change?",
    "options": [
      "Peak amplitude rises and shifts to a higher frequency",
      "Peak amplitude decreases, the resonance curve broadens, and the peak shifts slightly below natural frequency f₀",
      "Natural frequency f₀ doubles",
      "Resonance occurs at zero driving frequency"
    ],
    "correctIndex": 1,
    "explanation": "Greater damping dissipates more energy per cycle, lowering and flattening the resonance peak while shifting it slightly below f₀."
  },
  {
    "id": "al-phys-q28",
    "subtopicId": "al-phys-7-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the statement on gravitational potential V and equipotential surfaces.",
    "segments": [
      "Gravitational potential V = −GM / r is always ",
      " because the gravitational force is purely attractive, and the work done moving a mass along an equipotential surface is ",
      "."
    ],
    "wordBank": [
      "negative",
      "zero",
      "positive",
      "infinite",
      "constant"
    ],
    "answers": [
      "negative",
      "zero"
    ],
    "explanation": "Infinity is defined as V = 0 and external work is required to pull a mass back to infinity (so V < 0); ΔV = 0 along an equipotential so W = mΔV = 0."
  },
  {
    "id": "al-phys-q29",
    "subtopicId": "al-phys-7-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "An alternating sinusoidal mains supply has a root-mean-square voltage V_rms = 230 V. What is its peak voltage V₀?",
    "options": [
      "115 V",
      "163 V",
      "230 V",
      "325 V"
    ],
    "correctIndex": 3,
    "explanation": "V₀ = V_rms × √2 = 230 × 1.414 = 325 V."
  },
  {
    "id": "al-phys-q30",
    "subtopicId": "al-phys-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A radioactive isotope has a half-life T₁/₂ of 138 days. Calculate the fraction of original undecayed nuclei remaining after 414 days.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Number of half-lives n = 414 ÷ 138 = 3 half-lives. Fraction remaining = (½)³ = 1/8 = 0.125.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "3 half-lives (414 / 138)",
          "requiredKeywordGroups": [
            [
              "3",
              "three"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "0.125 (or 1/8 or 12.5%)",
          "numericMatch": {
            "value": 0.125,
            "tolerance": 0.005
          }
        }
      ]
    },
    "explanation": "414 / 138 = 3 half-lives, leaving (1/2)³ = 1/8 = 0.125."
  },
  {
    "id": "al-phys-q-1-1-4",
    "subtopicId": "al-phys-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A student calculates area A = πr² where the radius r has a percentage uncertainty of 1.5%. Calculate the percentage uncertainty in A.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Since r is squared, multiply % uncertainty by 2: 2 × 1.5% = 3.0%.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Multiplies percentage uncertainty by power 2",
          "requiredKeywordGroups": [
            [
              "2",
              "double",
              "power"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "3.0%",
          "numericMatch": {
            "value": 3,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "For y = aⁿ, %Δy = n × %Δa = 2 × 1.5% = 3.0%."
  },
  {
    "id": "al-phys-q-1-1-5",
    "subtopicId": "al-phys-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the uncertainty propagation rules:",
    "segments": [
      "When adding or subtracting quantities, add ",
      " uncertainties; when multiplying or dividing, add ",
      " uncertainties."
    ],
    "wordBank": [
      "absolute",
      "percentage",
      "random",
      "systematic"
    ],
    "answers": [
      "absolute",
      "percentage"
    ],
    "explanation": "+/− adds absolute Δ; ×/÷ adds fractional or percentage %Δ."
  },
  {
    "id": "al-phys-q-2-1-3",
    "subtopicId": "al-phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State the quark composition of a proton and a neutron, and state which quark changes during β⁻ decay.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Proton = uud, neutron = udd. During β⁻ decay a down quark changes into an up quark (d → u).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Proton uud and neutron udd",
          "requiredKeywordGroups": [
            [
              "uud"
            ],
            [
              "udd"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Down quark changes to up quark",
          "requiredKeywordGroups": [
            [
              "down"
            ],
            [
              "up"
            ]
          ]
        }
      ]
    },
    "explanation": "n (udd) → p (uud) + e⁻ + ν̄_e via the weak interaction (W⁻ boson)."
  },
  {
    "id": "al-phys-q-2-1-4",
    "subtopicId": "al-phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which fundamental interaction is the ONLY one capable of changing quark flavour (e.g. s → u or d → u)?",
    "options": [
      "Strong nuclear",
      "Electromagnetic",
      "Weak nuclear",
      "Gravitational"
    ],
    "correctIndex": 2,
    "explanation": "Only the weak nuclear interaction (mediated by W⁺/W⁻ bosons) changes quark flavour."
  },
  {
    "id": "al-phys-q-2-1-5",
    "subtopicId": "al-phys-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the annihilation conservation rule:",
    "segments": [
      "When an electron and positron annihilate, ",
      " gamma photons are produced travelling in opposite directions to conserve ",
      "."
    ],
    "wordBank": [
      "two",
      "momentum",
      "one",
      "strangeness"
    ],
    "answers": [
      "two",
      "momentum"
    ],
    "explanation": "Initial momentum ≈ 0 requires two equal photons moving in opposite directions."
  },
  {
    "id": "al-phys-q-2-2-3",
    "subtopicId": "al-phys-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A metal has a work function of 2.1 eV and is illuminated by photons of energy 3.4 eV. State the maximum kinetic energy of emitted photoelectrons in eV and the stopping potential V_s.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "E_k(max) = hf − Φ = 3.4 − 2.1 = 1.3 eV, so stopping potential V_s = 1.3 V.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "E_k(max) = 1.3 eV",
          "numericMatch": {
            "value": 1.3,
            "tolerance": 0.05
          }
        },
        {
          "id": "mp2",
          "markDescription": "Stopping potential 1.3 V",
          "requiredKeywordGroups": [
            [
              "1.3 v",
              "1.3v",
              "1.3"
            ]
          ]
        }
      ]
    },
    "explanation": "E_k(max) = 3.4 − 2.1 = 1.3 eV ⇒ V_s = 1.3 V."
  },
  {
    "id": "al-phys-q-2-2-4",
    "subtopicId": "al-phys-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In an electron diffraction tube, if the accelerating anode voltage V is INCREASED, what happens to the diameter of the diffraction rings?",
    "options": [
      "Increases because λ increases",
      "Decreases because λ decreases",
      "Stays identical",
      "Disappears completely"
    ],
    "correctIndex": 1,
    "explanation": "Higher V ⇒ greater momentum p ⇒ smaller de Broglie wavelength λ = h/p ⇒ less diffraction ⇒ smaller rings."
  },
  {
    "id": "al-phys-q-2-2-5",
    "subtopicId": "al-phys-2-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete Einstein’s photoelectric graph relationships:",
    "segments": [
      "On a graph of E_k(max) against frequency f, the gradient equals ",
      " and the y-intercept equals ",
      "."
    ],
    "wordBank": [
      "h",
      "−Φ",
      "e",
      "f₀"
    ],
    "answers": [
      "h",
      "−Φ"
    ],
    "explanation": "E_k(max) = hf − Φ matches y = mx + c with m = h and c = −Φ."
  },
  {
    "id": "al-phys-q-3-1-3",
    "subtopicId": "al-phys-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A stretched string of length 0.60 m vibrates in its 3rd harmonic at 450 Hz. Calculate the wavelength and wave speed on the string.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "3rd harmonic has L = 3(λ/2) → λ = 2(0.60)/3 = 0.40 m. Speed v = fλ = 450 × 0.40 = 180 m/s.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "λ = 0.40 m",
          "numericMatch": {
            "value": 0.4,
            "tolerance": 0.01
          }
        },
        {
          "id": "mp2",
          "markDescription": "v = 180 m/s",
          "numericMatch": {
            "value": 180,
            "tolerance": 1
          }
        }
      ]
    },
    "explanation": "L = 1.5λ ⇒ λ = 0.40 m ⇒ v = 450 × 0.40 = 180 m/s."
  },
  {
    "id": "al-phys-q-3-1-4",
    "subtopicId": "al-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the phase difference between two oscillating points on EITHER SIDE of a single node in a stationary wave?",
    "options": [
      "0 rad",
      "π/2 rad",
      "π rad (180°)",
      "2π rad"
    ],
    "correctIndex": 2,
    "explanation": "Points in the same loop are in phase (0); points in adjacent loops across a node are in antiphase (π rad)."
  },
  {
    "id": "al-phys-q-3-1-5",
    "subtopicId": "al-phys-3-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the polarisation principle:",
    "segments": [
      "Only ",
      " waves can be polarised; the distance between two adjacent nodes on a stationary wave equals ",
      "."
    ],
    "wordBank": [
      "transverse",
      "λ/2",
      "longitudinal",
      "λ"
    ],
    "answers": [
      "transverse",
      "λ/2"
    ],
    "explanation": "Longitudinal waves cannot be polarised; node-to-node spacing is λ/2."
  },
  {
    "id": "al-phys-q-3-2-3",
    "subtopicId": "al-phys-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Monochromatic light of wavelength 600 nm hits a diffraction grating with slit spacing d = 2.5 × 10⁻⁶ m. Find the maximum order n observable.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "n_max = floor(d / λ) = floor(2.5×10⁻⁶ / 6.0×10⁻⁷) = floor(4.17) = 4.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Uses d/λ with sin θ = 1 (gives 4.17)",
          "requiredKeywordGroups": [
            [
              "4.1",
              "4.17",
              "2.5"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Rounds DOWN to integer n = 4",
          "numericMatch": {
            "value": 4,
            "tolerance": 0.01
          }
        }
      ]
    },
    "explanation": "sin θ ≤ 1 ⇒ n ≤ d/λ = 4.17 ⇒ max integer order n = 4."
  },
  {
    "id": "al-phys-q-3-2-4",
    "subtopicId": "al-phys-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "How do engineers reduce MATERIAL (chromatic) dispersion in optical fibres?",
    "options": [
      "Use a wider core",
      "Use monochromatic light (single wavelength)",
      "Remove the cladding",
      "Increase the refractive index of cladding above the core"
    ],
    "correctIndex": 1,
    "explanation": "Material dispersion arises from different wavelengths travelling at different speeds; monochromatic light eliminates it."
  },
  {
    "id": "al-phys-q-3-2-5",
    "subtopicId": "al-phys-3-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the single-slit & double-slit rules:",
    "segments": [
      "In single-slit diffraction, the central bright fringe is ",
      " as wide as the outer fringes; in Young’s double slit, fringe spacing w = ",
      "D / s."
    ],
    "wordBank": [
      "twice",
      "λ",
      "half",
      "d"
    ],
    "answers": [
      "twice",
      "λ"
    ],
    "explanation": "Central maximum width = 2 × outer fringe width; w = λD / s."
  },
  {
    "id": "al-phys-q-4-1-3",
    "subtopicId": "al-phys-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A ball is projected horizontally at 12 m/s from a 19.6 m tall cliff (g = 9.8 m/s²). Calculate its time of flight and horizontal range.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Vertical: 19.6 = ½(9.8)t² → t² = 4 → t = 2.0 s. Horizontal range = 12 × 2.0 = 24 m.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "t = 2.0 s",
          "numericMatch": {
            "value": 2,
            "tolerance": 0.05
          }
        },
        {
          "id": "mp2",
          "markDescription": "Range = 24 m",
          "numericMatch": {
            "value": 24,
            "tolerance": 0.5
          }
        }
      ]
    },
    "explanation": "4.9t² = 19.6 ⇒ t = 2 s ⇒ x = 12 × 2 = 24 m."
  },
  {
    "id": "al-phys-q-4-1-4",
    "subtopicId": "al-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How does significant air resistance change the path of a projectile launched at 45°?",
    "options": [
      "Symmetrical parabola with larger range",
      "Lower maximum height, shorter range, and a steeper descent than ascent",
      "Higher maximum height and constant horizontal velocity",
      "No effect on vertical motion"
    ],
    "correctIndex": 1,
    "explanation": "Drag slows both v_x and v_y, shortening range/height and making the downward path steeper."
  },
  {
    "id": "al-phys-q-4-1-5",
    "subtopicId": "al-phys-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the equilibrium conditions:",
    "segments": [
      "For a body in equilibrium, resultant force equals ",
      " and clockwise moments equal ",
      " moments about any pivot."
    ],
    "wordBank": [
      "zero",
      "anticlockwise",
      "weight",
      "parallel"
    ],
    "answers": [
      "zero",
      "anticlockwise"
    ],
    "explanation": "Translational equilibrium (ΣF = 0) + rotational equilibrium (ΣM_CW = ΣM_ACW)."
  },
  {
    "id": "al-phys-q-4-2-3",
    "subtopicId": "al-phys-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A car of weight 12,000 N travels at constant 25 m/s against resistive forces totalling 800 N. Calculate the engine’s output power.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "At constant speed driving force F = 800 N, so P = Fv = 800 × 25 = 20,000 W (20 kW).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Uses P = Fv with F = 800 N",
          "requiredKeywordGroups": [
            [
              "800",
              "fv"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "20,000 W (20 kW)",
          "numericMatch": {
            "value": 20000,
            "tolerance": 200
          }
        }
      ]
    },
    "explanation": "P = Fv = 800 × 25 = 20,000 W."
  },
  {
    "id": "al-phys-q-4-2-4",
    "subtopicId": "al-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "What physical quantity is represented by the AREA underneath a tensile stress–strain graph up to the limit of proportionality?",
    "options": [
      "Young modulus",
      "Total elastic strain energy",
      "Elastic strain energy per unit volume",
      "Ultimate tensile strength"
    ],
    "correctIndex": 2,
    "explanation": "Area = ½ × (F/A) × (ΔL/L) = (½FΔL) / (AL) = strain energy per unit volume (J m⁻³)."
  },
  {
    "id": "al-phys-q-4-2-5",
    "subtopicId": "al-phys-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the collision & safety physics:",
    "segments": [
      "Crumple zones increase the impact ",
      " for the same change in momentum, which ",
      " the average impact force."
    ],
    "wordBank": [
      "time",
      "reduces",
      "mass",
      "increases"
    ],
    "answers": [
      "time",
      "reduces"
    ],
    "explanation": "Since F = Δp / Δt, increasing Δt lowers peak force F."
  },
  {
    "id": "al-phys-q-5-1-3",
    "subtopicId": "al-phys-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain microscopically why the resistance of an NTC thermistor DECREASES as its temperature increases.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Heating gives valence electrons enough thermal energy to break free, dramatically increasing the number density (n) of free charge carriers, which outweighs increased lattice collisions.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "More free charge carriers / higher carrier density n",
          "requiredKeywordGroups": [
            [
              "charge carrier",
              "free electron",
              "number density",
              "n increases"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Outweighs increased lattice ion collisions",
          "requiredKeywordGroups": [
            [
              "outweigh",
              "more than",
              "lattice",
              "collision"
            ]
          ]
        }
      ]
    },
    "explanation": "Semiconductors release exponentially more charge carriers when heated."
  },
  {
    "id": "al-phys-q-5-1-4",
    "subtopicId": "al-phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A wire of resistance 12 Ω is melted and redrawn to TWICE its original length (keeping volume constant). What is its new resistance?",
    "options": [
      "6 Ω",
      "24 Ω",
      "48 Ω",
      "12 Ω"
    ],
    "correctIndex": 2,
    "explanation": "Constant volume ⇒ 2L means ½A ⇒ R = ρ(2L)/(½A) = 4R = 48 Ω!"
  },
  {
    "id": "al-phys-q-5-1-5",
    "subtopicId": "al-phys-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the superconductor statement:",
    "segments": [
      "Below its ",
      " temperature, a superconductor has ",
      " electrical resistance, eliminating I²R heating losses."
    ],
    "wordBank": [
      "critical",
      "zero",
      "melting",
      "infinite"
    ],
    "answers": [
      "critical",
      "zero"
    ],
    "explanation": "T < T_c ⇒ R = 0 Ω exactly."
  },
  {
    "id": "al-phys-q-5-2-3",
    "subtopicId": "al-phys-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A cell of EMF 12 V and internal resistance 2.0 Ω is connected to a 4.0 Ω external resistor. Calculate the current and terminal potential difference.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "I = 12 / (4.0 + 2.0) = 2.0 A; terminal pd V = 12 − (2.0 × 2.0) = 8.0 V (or 2.0 × 4.0 = 8.0 V).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "I = 2.0 A",
          "numericMatch": {
            "value": 2,
            "tolerance": 0.05
          }
        },
        {
          "id": "mp2",
          "markDescription": "Terminal pd = 8.0 V",
          "numericMatch": {
            "value": 8,
            "tolerance": 0.1
          }
        }
      ]
    },
    "explanation": "I = ε/(R+r) = 12/6 = 2 A; V = IR = 8 V."
  },
  {
    "id": "al-phys-q-5-2-4",
    "subtopicId": "al-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "On a graph of terminal potential difference V (y-axis) against current I (x-axis), what do the y-intercept and gradient equal?",
    "options": [
      "Intercept = r, Gradient = ε",
      "Intercept = ε, Gradient = −r",
      "Intercept = −r, Gradient = ε",
      "Intercept = ε, Gradient = +r"
    ],
    "correctIndex": 1,
    "explanation": "V = −rI + ε ⇒ y-intercept = ε and gradient = −r."
  },
  {
    "id": "al-phys-q-5-2-5",
    "subtopicId": "al-phys-5-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete Kirchhoff’s laws:",
    "segments": [
      "Kirchhoff’s first law expresses conservation of ",
      " at a junction; Kirchhoff’s second law expresses conservation of ",
      " around any closed loop."
    ],
    "wordBank": [
      "charge",
      "energy",
      "momentum",
      "mass"
    ],
    "answers": [
      "charge",
      "energy"
    ],
    "explanation": "ΣI_in = ΣI_out (charge); Σε = ΣIR (energy)."
  },
  {
    "id": "al-phys-q-6-1-3",
    "subtopicId": "al-phys-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A mass oscillates in SHM with amplitude 0.050 m and angular frequency ω = 12 rad s⁻¹. Calculate its maximum speed and maximum acceleration.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "v_max = ωA = 12 × 0.050 = 0.60 m/s; a_max = ω²A = 144 × 0.050 = 7.2 m/s².",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "v_max = 0.60 m/s",
          "numericMatch": {
            "value": 0.6,
            "tolerance": 0.02
          }
        },
        {
          "id": "mp2",
          "markDescription": "a_max = 7.2 m/s²",
          "numericMatch": {
            "value": 7.2,
            "tolerance": 0.1
          }
        }
      ]
    },
    "explanation": "v_max = ωA = 0.60 m/s; a_max = ω²A = 7.2 m/s²."
  },
  {
    "id": "al-phys-q-6-1-4",
    "subtopicId": "al-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How does increasing damping affect the amplitude–driving frequency resonance curve?",
    "options": [
      "Taller, narrower peak at higher frequency",
      "Lower, broader peak shifted slightly to a lower frequency",
      "Identical peak height at double the frequency",
      "Eliminates all oscillations at every frequency"
    ],
    "correctIndex": 1,
    "explanation": "Damping dissipates energy per cycle: peak lowers, broadens, and shifts slightly below f₀."
  },
  {
    "id": "al-phys-q-6-1-5",
    "subtopicId": "al-phys-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the defining conditions for SHM:",
    "segments": [
      "Acceleration is directly proportional to ",
      " from equilibrium and always directed ",
      " the equilibrium position."
    ],
    "wordBank": [
      "displacement",
      "towards",
      "velocity",
      "away from"
    ],
    "answers": [
      "displacement",
      "towards"
    ],
    "explanation": "a = −ω²x captures both proportionality and restoring direction."
  },
  {
    "id": "al-phys-q-6-2-2",
    "subtopicId": "al-phys-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain in terms of kinetic theory why heating a fixed volume of ideal gas increases its pressure.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Higher temperature increases mean molecular speed/KE, so molecules collide with the container walls more frequently and with a greater change in momentum per collision, increasing force per unit area (pressure).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Molecules move faster / greater momentum change per collision",
          "requiredKeywordGroups": [
            [
              "faster",
              "speed",
              "momentum",
              "kinetic energy"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "More frequent wall collisions ⇒ larger force/pressure",
          "requiredKeywordGroups": [
            [
              "more frequent",
              "collision",
              "force"
            ]
          ]
        }
      ]
    },
    "explanation": "Higher T ⇒ larger Δp per collision AND more collisions per second."
  },
  {
    "id": "al-phys-q-6-2-3",
    "subtopicId": "al-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Helium (molar mass 4 g) and Oxygen (molar mass 32 g) are at the same temperature. Which statement is true?",
    "options": [
      "Oxygen has greater mean molecular KE",
      "Both have the SAME mean molecular KE, but Helium has a higher c_rms",
      "Both have the same c_rms",
      "Helium has 8× the mean molecular KE"
    ],
    "correctIndex": 1,
    "explanation": "Mean KE = ³/₂ kT depends ONLY on T; smaller mass m gives higher c_rms."
  },
  {
    "id": "al-phys-q-6-2-4",
    "subtopicId": "al-phys-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Calculate the mean kinetic energy of a single ideal gas molecule at 127 °C (k = 1.38 × 10⁻²³ J K⁻¹).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "T = 127 + 273 = 400 K; E_k = 1.5 × 1.38×10⁻²³ × 400 = 8.28 × 10⁻²¹ J.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Converts to T = 400 K",
          "numericMatch": {
            "value": 400,
            "tolerance": 1
          }
        },
        {
          "id": "mp2",
          "markDescription": "8.28 × 10⁻²¹ J",
          "requiredKeywordGroups": [
            [
              "8.28",
              "8.3"
            ]
          ]
        }
      ]
    },
    "explanation": "T = 400 K ⇒ E_k = ³/₂ kT = 8.28 × 10⁻²¹ J."
  },
  {
    "id": "al-phys-q-6-2-5",
    "subtopicId": "al-phys-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the change-of-state energy rule:",
    "segments": [
      "While ice melts at 0 °C, average molecular kinetic energy stays ",
      " while molecular ",
      " energy increases."
    ],
    "wordBank": [
      "constant",
      "potential",
      "zero",
      "nuclear"
    ],
    "answers": [
      "constant",
      "potential"
    ],
    "explanation": "Constant T ⇒ constant mean KE; latent heat breaks bonds, raising PE."
  },
  {
    "id": "al-phys-q-7-1-3",
    "subtopicId": "al-phys-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State the THREE essential conditions for a satellite to be in a geostationary orbit.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Orbital period of exactly 24 hours, orbits directly above the equator, and travels west-to-east (same direction as Earth’s rotation).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Period = 24 hours",
          "requiredKeywordGroups": [
            [
              "24 hour",
              "24h",
              "24 hr",
              "same period"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Above equator AND west-to-east / same spin direction",
          "requiredKeywordGroups": [
            [
              "equator"
            ],
            [
              "west",
              "same direction",
              "rotation"
            ]
          ]
        }
      ]
    },
    "explanation": "24 h period + equatorial plane + west-to-east rotation keeps it stationary overhead."
  },
  {
    "id": "al-phys-q-7-1-4",
    "subtopicId": "al-phys-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "How much work is done moving a +2.0 μC charge by 5.0 cm ALONG an equipotential surface at +400 V?",
    "options": [
      "0 J",
      "4.0 × 10⁻⁵ J",
      "8.0 × 10⁻⁴ J",
      "20 J"
    ],
    "correctIndex": 0,
    "explanation": "Along an equipotential ΔV = 0, so W = QΔV = 0 J."
  },
  {
    "id": "al-phys-q-7-1-5",
    "subtopicId": "al-phys-7-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete Kepler’s 3rd Law & field links:",
    "segments": [
      "For circular orbits around mass M, T² is proportional to ",
      ", and electric field strength E equals minus the ",
      " gradient."
    ],
    "wordBank": [
      "r³",
      "potential",
      "r²",
      "charge"
    ],
    "answers": [
      "r³",
      "potential"
    ],
    "explanation": "T² = (4π²/GM)r³; E = −dV/dr."
  },
  {
    "id": "al-phys-q-7-2-2",
    "subtopicId": "al-phys-7-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A 500 μF capacitor discharges through a 40 kΩ resistor. Calculate the time constant τ and the time taken for the voltage to halve.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "τ = RC = (40×10³)(500×10⁻⁶) = 20 s; T_½ = 20 × ln 2 = 13.9 s.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "τ = 20 s",
          "numericMatch": {
            "value": 20,
            "tolerance": 0.2
          }
        },
        {
          "id": "mp2",
          "markDescription": "T_½ = 13.9 s",
          "numericMatch": {
            "value": 13.9,
            "tolerance": 0.3
          }
        }
      ]
    },
    "explanation": "RC = 20 s; T_½ = RC ln 2 = 13.86 s."
  },
  {
    "id": "al-phys-q-7-2-3",
    "subtopicId": "al-phys-7-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When a battery transfers total charge Q to a capacitor up to voltage V, what fraction of the battery’s energy (QV) is actually stored in the capacitor?",
    "options": [
      "100%",
      "50% (half is dissipated as heat in resistance)",
      "37%",
      "63%"
    ],
    "correctIndex": 1,
    "explanation": "Battery supplies E = QV; capacitor stores ½QV; the other ½QV heats the circuit resistance."
  },
  {
    "id": "al-phys-q-7-2-4",
    "subtopicId": "al-phys-7-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "On a graph of ln(V) against time t for a discharging capacitor, what does the gradient equal?",
    "options": [
      "−RC",
      "−1 / (RC)",
      "+1 / (RC)",
      "ln(V₀)"
    ],
    "correctIndex": 1,
    "explanation": "ln V = −(1/RC)t + ln V₀ ⇒ gradient = −1/(RC)."
  },
  {
    "id": "al-phys-q-7-2-5",
    "subtopicId": "al-phys-7-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the dielectric & time constant rules:",
    "segments": [
      "Inserting a polar dielectric between plates ",
      " the capacitance; after one time constant RC, a discharging capacitor retains ",
      "% of its initial charge."
    ],
    "wordBank": [
      "increases",
      "37",
      "decreases",
      "63"
    ],
    "answers": [
      "increases",
      "37"
    ],
    "explanation": "C = ε₀ε_r A/d increases; 1/e ≈ 36.8% ≈ 37%."
  },
  {
    "id": "al-phys-q-7-3-3",
    "subtopicId": "al-phys-7-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A coil of 200 turns and area 0.015 m² sits perpendicular to a 0.40 T field that drops uniformly to zero in 0.050 s. Calculate the magnitude of the induced EMF.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Δ(NΦ) = 200 × 0.40 × 0.015 = 1.2 Wb turns; ε = Δ(NΦ)/Δt = 1.2 / 0.050 = 24 V.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Flux linkage change 1.2 Wb turns",
          "numericMatch": {
            "value": 1.2,
            "tolerance": 0.05
          }
        },
        {
          "id": "mp2",
          "markDescription": "Induced EMF = 24 V",
          "numericMatch": {
            "value": 24,
            "tolerance": 0.5
          }
        }
      ]
    },
    "explanation": "ε = NΔ(BA)/Δt = 200(0.40)(0.015)/0.050 = 24 V."
  },
  {
    "id": "al-phys-q-7-3-4",
    "subtopicId": "al-phys-7-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is a transformer’s soft iron core made from thin insulated LAMINATIONS?",
    "options": [
      "To reduce hysteresis loss",
      "To reduce induced eddy currents and associated heating",
      "To increase flux leakage",
      "To increase primary coil resistance"
    ],
    "correctIndex": 1,
    "explanation": "Insulated laminations break up eddy-current loops, greatly reducing I²R core heating."
  },
  {
    "id": "al-phys-q-7-3-5",
    "subtopicId": "al-phys-7-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the cyclotron & AC rules:",
    "segments": [
      "Cyclotron frequency f = BQ / (2πm) is independent of particle ",
      "; RMS voltage equals peak voltage V₀ divided by ",
      "."
    ],
    "wordBank": [
      "speed",
      "√2",
      "charge",
      "2"
    ],
    "answers": [
      "speed",
      "√2"
    ],
    "explanation": "Faster particles orbit wider r = mv/(BQ), keeping period T = 2πm/(BQ) constant; V_rms = V₀/√2."
  },
  {
    "id": "al-phys-q-8-1-3",
    "subtopicId": "al-phys-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain why high-energy electron diffraction gives a more accurate measurement of nuclear radius than alpha-particle closest approach.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Electrons are leptons and do not experience the strong nuclear force (unlike alphas, which only give an upper limit because they turn back before touching the nucleus), and high-energy electrons have a de Broglie wavelength comparable to nuclear size (~10⁻¹⁵ m).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Electrons do not experience strong nuclear force (alphas give upper bound)",
          "requiredKeywordGroups": [
            [
              "strong",
              "lepton",
              "upper"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Electron de Broglie wavelength comparable to nuclear radius",
          "requiredKeywordGroups": [
            [
              "wavelength",
              "de broglie",
              "10^-15",
              "diffract"
            ]
          ]
        }
      ]
    },
    "explanation": "Electrons interact purely electromagnetically with λ ≈ R, directly resolving nuclear diameter."
  },
  {
    "id": "al-phys-q-8-1-4",
    "subtopicId": "al-phys-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "If nucleus X has nucleon number A = 8 and nucleus Y has A = 64, what is the ratio of their nuclear radii R_Y / R_X?",
    "options": [
      "8",
      "4",
      "2",
      "64"
    ],
    "correctIndex": 2,
    "explanation": "R ∝ A^(1/3) ⇒ (64/8)^(1/3) = 8^(1/3) = 2."
  },
  {
    "id": "al-phys-q-8-1-5",
    "subtopicId": "al-phys-8-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the nuclear density & stability facts:",
    "segments": [
      "Because nuclear volume is proportional to nucleon number A, nuclear density is ",
      " for all nuclei; neutron-rich nuclei above the stability belt emit ",
      " particles."
    ],
    "wordBank": [
      "constant",
      "β⁻",
      "proportional to A",
      "β⁺"
    ],
    "answers": [
      "constant",
      "β⁻"
    ],
    "explanation": "Mass ∝ A and Volume ∝ A ⇒ ρ = M/V is constant; neutron-rich decays n → p + β⁻."
  },
  {
    "id": "al-phys-q-8-2-2",
    "subtopicId": "al-phys-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the distinct roles of the MODERATOR and the CONTROL RODS inside a thermal nuclear reactor.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "The moderator slows fast fission neutrons to thermal speeds via elastic collisions so they can be absorbed by U-235; control rods absorb excess neutrons to maintain a steady chain reaction (1 neutron per fission causing another).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Moderator slows neutrons via elastic collisions",
          "requiredKeywordGroups": [
            [
              "slow",
              "thermal"
            ],
            [
              "collision",
              "elastic",
              "u-235",
              "u235"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Control rods absorb neutrons to control rate",
          "requiredKeywordGroups": [
            [
              "absorb"
            ],
            [
              "control",
              "steady",
              "chain",
              "rate"
            ]
          ]
        }
      ]
    },
    "explanation": "Moderator = slows neutrons; Control rods = absorbs neutrons."
  },
  {
    "id": "al-phys-q-8-2-3",
    "subtopicId": "al-phys-8-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A nuclear reaction has a mass defect of 0.020 u. Calculate the energy released in MeV (1 u = 931.5 MeV).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "ΔE = 0.020 × 931.5 = 18.63 MeV.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Multiplies 0.020 by 931.5",
          "requiredKeywordGroups": [
            [
              "931.5",
              "0.02"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "18.6 MeV",
          "numericMatch": {
            "value": 18.63,
            "tolerance": 0.2
          }
        }
      ]
    },
    "explanation": "0.020 × 931.5 = 18.63 MeV."
  },
  {
    "id": "al-phys-q-8-2-4",
    "subtopicId": "al-phys-8-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why must a moderator contain nuclei of SIMILAR mass to a neutron (such as hydrogen in water or carbon in graphite)?",
    "options": [
      "So neutrons bounce straight back with no energy loss",
      "To transfer the maximum fraction of kinetic energy per elastic collision",
      "So the moderator undergoes fission too",
      "To absorb all beta radiation"
    ],
    "correctIndex": 1,
    "explanation": "Maximum kinetic energy is transferred in elastic collisions between particles of similar mass."
  },
  {
    "id": "al-phys-q-8-2-5",
    "subtopicId": "al-phys-8-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the binding-energy stability rule:",
    "segments": [
      "The most stable nucleus at the peak of the binding energy per nucleon curve is ",
      "; both fission and fusion release energy because products have ",
      " binding energy per nucleon."
    ],
    "wordBank": [
      "Fe-56",
      "higher",
      "U-235",
      "lower"
    ],
    "answers": [
      "Fe-56",
      "higher"
    ],
    "explanation": "Iron-56 sits at the peak (~8.8 MeV/nucleon); higher BE/A = lower mass per nucleon = energy released!"
  }
];

export const ALEVEL_PHYSICS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "al-phys-fc-1",
    "subtopicId": "al-phys-1-1",
    "front": "State the three rules for combining uncertainties (sums, products, powers).",
    "backBullets": [
      "Addition/Subtraction (a ± b): ADD ABSOLUTE uncertainties (Δa + Δb)",
      "Multiplication/Division (ab/c): ADD PERCENTAGE uncertainties (%Δa + %Δb + %Δc)",
      "Powers (aⁿ): MULTIPLY percentage uncertainty by |n|"
    ]
  },
  {
    "id": "al-phys-fc-2",
    "subtopicId": "al-phys-2-1",
    "front": "Sketch the range and nature of the strong nuclear force between nucleons.",
    "backBullets": [
      "Below 0.5 fm: strongly REPULSIVE (prevents nuclear collapse)",
      "0.5 fm to 3.0 fm: strongly ATTRACTIVE (overcomes proton Coulomb repulsion)",
      "Beyond ~3 fm: drops swiftly to ZERO"
    ]
  },
  {
    "id": "al-phys-fc-3",
    "subtopicId": "al-phys-2-2",
    "front": "State Einstein’s photoelectric equation and what the gradient/intercepts of Ek(max) vs f show.",
    "backBullets": [
      "hf = φ + Ek(max), with Ek(max) = eVs",
      "Gradient = Planck constant h (same for all metals)",
      "x-intercept = threshold frequency f₀; y-intercept = −φ"
    ]
  },
  {
    "id": "al-phys-fc-4",
    "subtopicId": "al-phys-3-1",
    "front": "Compare phase and energy transfer in a progressive wave vs a stationary wave.",
    "backBullets": [
      "Progressive: transfers energy; phase varies continuously; all particles share same amplitude",
      "Stationary: no net energy transfer; amplitude varies (nodes → antinodes); all points between adjacent nodes are IN PHASE"
    ]
  },
  {
    "id": "al-phys-fc-5",
    "subtopicId": "al-phys-3-2",
    "front": "State the two conditions required for Total Internal Reflection (TIR).",
    "backBullets": [
      "1. Light must travel from a higher refractive index medium to a lower one (n₁ > n₂)",
      "2. Angle of incidence θᵢ must exceed the critical angle θc (sin θc = n₂ / n₁)"
    ]
  },
  {
    "id": "al-phys-fc-6",
    "subtopicId": "al-phys-4-2",
    "front": "Define tensile stress, tensile strain, and Young modulus (with units).",
    "backBullets": [
      "Stress σ = F / A (Pa = N m⁻²)",
      "Strain ε = ΔL / L (dimensionless)",
      "Young modulus E = σ / ε = FL / (AΔL) (Pa; gradient of linear σ–ε graph)"
    ]
  },
  {
    "id": "al-phys-fc-7",
    "subtopicId": "al-phys-5-2",
    "front": "From a terminal PD (V) vs current (I) graph, how do you read EMF ε and internal resistance r?",
    "backBullets": [
      "V = −rI + ε (straight line with negative slope)",
      "y-intercept = EMF (ε)",
      "Gradient = −r (so internal resistance r = −gradient)"
    ]
  },
  {
    "id": "al-phys-fc-8",
    "subtopicId": "al-phys-6-1",
    "front": "Write the SHM defining equation and the periods of a mass-spring and simple pendulum.",
    "backBullets": [
      "SHM condition: a = −ω²x (v = ±ω√(A² − x²))",
      "Mass-spring: T = 2π√(m / k)",
      "Simple pendulum: T = 2π√(l / g)"
    ]
  },
  {
    "id": "al-phys-fc-9",
    "subtopicId": "al-phys-6-2",
    "front": "State the kinetic theory pressure equation and the formula for mean kinetic energy of an ideal gas molecule.",
    "backBullets": [
      "pV = ⅓ N m ⟨c²⟩ = N k T",
      "Mean translational KE: ½ m ⟨c²⟩ = (3/2) k T = (3RT)/(2Nₐ)",
      "Depends ONLY on absolute Kelvin temperature T"
    ]
  },
  {
    "id": "al-phys-fc-10",
    "subtopicId": "al-phys-7-1",
    "front": "State the three exact orbital properties of a geostationary satellite.",
    "backBullets": [
      "1. Orbits directly above the equator",
      "2. Travels west-to-east (same direction as Earth’s rotation)",
      "3. Orbital period T = exactly 24 hours (stays fixed above one point on Earth)"
    ]
  },
  {
    "id": "al-phys-fc-11",
    "subtopicId": "al-phys-7-2",
    "front": "Define the capacitor time constant τ = RC and explain why 50% of energy is lost during charging.",
    "backBullets": [
      "τ = RC = time for discharging Q, V, or I to fall to 37% (1/e) of initial value",
      "Battery supplies energy W = QV; capacitor stores only E = ½QV; remaining ½QV heats circuit resistance"
    ]
  },
  {
    "id": "al-phys-fc-12",
    "subtopicId": "al-phys-7-3",
    "front": "State Faraday’s Law and Lenz’s Law of electromagnetic induction.",
    "backBullets": [
      "Faraday’s Law: magnitude of induced EMF is proportional to rate of change of magnetic flux linkage (ε = N ΔΦ/Δt)",
      "Lenz’s Law: direction of induced EMF/current opposes the change in flux that created it (energy conservation)"
    ]
  },
  {
    "id": "al-phys-fc-13",
    "subtopicId": "al-phys-8-1",
    "front": "Why is high-energy electron diffraction more accurate than alpha closest approach for measuring nuclear radius?",
    "backBullets": [
      "Electrons are leptons unaffected by the strong nuclear force (pure diffraction)",
      "Alpha closest approach only gives an upper limit where alpha turns back outside the nucleus"
    ]
  },
  {
    "id": "al-phys-fc-14",
    "subtopicId": "al-phys-8-2",
    "front": "Why do BOTH fusion of light nuclei and fission of heavy nuclei release energy?",
    "backBullets": [
      "Binding energy per nucleon peaks at Iron-56 (~8.8 MeV/nucleon)",
      "Both light fusion (A < 56) and heavy fission (A > 56) move products UP towards Fe-56 (higher BE/nucleon, lower total mass → ΔE = Δmc² released)"
    ]
  },
  {
    "id": "al-phys-fc-15",
    "subtopicId": "al-phys-1-1",
    "front": "How do you find the percentage uncertainty in a graph gradient using error bars?",
    "backBullets": [
      "Draw the line of best fit (gradient m_best) AND the steepest or shallowest worst-acceptable line passing through all error bars (gradient m_worst)",
      "% uncertainty = (|m_best − m_worst| ÷ m_best) × 100"
    ]
  },
  {
    "id": "al-phys-fc-16",
    "subtopicId": "al-phys-2-1",
    "front": "When is strangeness conserved in particle interactions, and when can it change?",
    "backBullets": [
      "Strangeness is ALWAYS conserved in STRONG nuclear interactions (kaons are produced in pairs)",
      "Strangeness can change by 0 or ±1 in WEAK nuclear decays"
    ]
  },
  {
    "id": "al-phys-fc-17",
    "subtopicId": "al-phys-2-2",
    "front": "How does increasing the accelerating voltage affect an electron diffraction ring pattern?",
    "backBullets": [
      "Higher voltage increases electron speed v and momentum p = mv",
      "By λ = h / (mv), de Broglie wavelength λ DECREASES",
      "Smaller wavelength produces LESS diffraction, so the bright rings move closer together (contract)"
    ]
  },
  {
    "id": "al-phys-fc-18",
    "subtopicId": "al-phys-3-2",
    "front": "Distinguish modal dispersion and material dispersion in optical fibres and state how each is reduced.",
    "backBullets": [
      "Modal dispersion: rays at different angles travel different path lengths → use a narrow single-mode core",
      "Material dispersion: different wavelengths travel at different speeds in glass → use monochromatic laser light"
    ]
  },
  {
    "id": "al-phys-fc-19",
    "subtopicId": "al-phys-4-1",
    "front": "State the two conditions required for a rigid body to be in complete static equilibrium.",
    "backBullets": [
      "1. Resultant force in any direction is zero (ΣFx = 0, ΣFy = 0 — closed vector triangle)",
      "2. Algebraic sum of clockwise moments equals sum of anticlockwise moments about any pivot"
    ]
  },
  {
    "id": "al-phys-fc-20",
    "subtopicId": "al-phys-4-2",
    "front": "Distinguish elastic and inelastic collisions in terms of momentum and kinetic energy.",
    "backBullets": [
      "Total linear momentum is conserved in BOTH elastic and inelastic collisions (provided no external forces act)",
      "Total kinetic energy is conserved ONLY in an elastic collision"
    ]
  },
  {
    "id": "al-phys-fc-21",
    "subtopicId": "al-phys-5-1",
    "front": "What is a superconductor and give two major engineering applications?",
    "backBullets": [
      "A material whose resistivity drops strictly to zero below its critical transition temperature Tc",
      "Zero I²R heating loss enables strong electromagnets for MRI scanners, particle accelerators (LHC), and maglev trains"
    ]
  },
  {
    "id": "al-phys-fc-22",
    "subtopicId": "al-phys-6-2",
    "front": "List four key assumptions of the kinetic theory of an ideal gas.",
    "backBullets": [
      "1. Molecules are in rapid random motion obeying Newton’s laws",
      "2. Volume of molecules themselves is negligible compared with container volume",
      "3. Collisions are perfectly elastic and of negligible duration",
      "4. No intermolecular forces act except during collisions"
    ]
  },
  {
    "id": "al-phys-fc-23",
    "subtopicId": "al-phys-7-1",
    "front": "State two similarities and one key difference between gravitational and electrostatic radial fields.",
    "backBullets": [
      "Similarities: Both obey an inverse-square force law (F ∝ 1/r²) and have radial field lines around point sources",
      "Difference: Gravitational force is always attractive, whereas electrostatic force can be attractive or repulsive"
    ]
  },
  {
    "id": "al-phys-fc-24",
    "subtopicId": "al-phys-7-3",
    "front": "State three design features that maximise the efficiency of an AC transformer.",
    "backBullets": [
      "1. Laminated iron core with insulating layers to block circulating eddy currents",
      "2. Soft iron core (easily magnetised/demagnetised) to minimise hysteresis heat loss",
      "3. Thick low-resistance copper windings to minimise I²R heating"
    ]
  },
  {
    "id": "al-phys-fc-25",
    "subtopicId": "al-phys-8-1",
    "front": "Why do heavy stable nuclei (Z > 20) have more neutrons than protons (N > Z)?",
    "backBullets": [
      "Electrostatic Coulomb repulsion acts long-range between every proton in the nucleus",
      "Extra neutrons add short-range strong nuclear attraction without adding any electrostatic repulsion"
    ]
  },
  {
    "id": "al-phys-fc-26",
    "subtopicId": "al-phys-8-2",
    "front": "Why must a nuclear reactor moderator be made of a low-mass nuclide such as water or graphite?",
    "backBullets": [
      "Fast fission neutrons slow down via elastic collisions with moderator nuclei",
      "Maximum kinetic energy is transferred per elastic collision when the target nucleus has a mass similar to a neutron"
    ]
  },
  {
    "id": "al-phys-fc-1-1-3",
    "subtopicId": "al-phys-1-1",
    "front": "SI base units of the Joule (J) and Watt (W)?",
    "backBullets": [
      "Joule = kg m² s⁻²; Watt = kg m² s⁻³."
    ]
  },
  {
    "id": "al-phys-fc-1-1-4",
    "subtopicId": "al-phys-1-1",
    "front": "How do you find uncertainty in the gradient of a graph?",
    "backBullets": [
      "Draw steepest (m_max) and shallowest (m_min) worst-fit lines through error bars; Δm = ½(m_max − m_min)."
    ]
  },
  {
    "id": "al-phys-fc-1-1-5",
    "subtopicId": "al-phys-1-1",
    "front": "Difference between precision and accuracy?",
    "backBullets": [
      "Precision = small spread about the mean (low random error); Accuracy = closeness to the true value (low systematic error)."
    ]
  },
  {
    "id": "al-phys-fc-2-1-3",
    "subtopicId": "al-phys-2-1",
    "front": "Quark structure of baryons vs mesons?",
    "backBullets": [
      "Baryons = 3 quarks (qqq), B = +1; Mesons = quark + antiquark (qq̄), B = 0."
    ]
  },
  {
    "id": "al-phys-fc-2-1-4",
    "subtopicId": "al-phys-2-1",
    "front": "Range of the strong nuclear force (repulsive vs attractive)?",
    "backBullets": [
      "Repulsive below ~0.5 fm; attractive from ~0.5 fm to ~3 fm; negligible beyond 3 fm."
    ]
  },
  {
    "id": "al-phys-fc-2-1-5",
    "subtopicId": "al-phys-2-1",
    "front": "Why are strange particles always produced in pairs in proton collisions?",
    "backBullets": [
      "Production occurs via the strong interaction, which must conserve strangeness (ΔS = 0), e.g. S = +1 and S = −1."
    ]
  },
  {
    "id": "al-phys-fc-2-2-3",
    "subtopicId": "al-phys-2-2",
    "front": "Why does wave theory fail to explain the threshold frequency f₀?",
    "backBullets": [
      "Wave theory predicts energy accumulates over time so ANY frequency should eventually release electrons — contradicting instantaneous emission above f₀ only."
    ]
  },
  {
    "id": "al-phys-fc-2-2-4",
    "subtopicId": "al-phys-2-2",
    "front": "How does the phosphor coating in a fluorescent tube produce visible light?",
    "backBullets": [
      "Mercury atoms emit UV photons on de-excitation; phosphor absorbs UV, excites, and de-excites via smaller steps emitting visible photons."
    ]
  },
  {
    "id": "al-phys-fc-2-2-5",
    "subtopicId": "al-phys-2-2",
    "front": "de Broglie wavelength equation and experimental evidence for electron wave nature?",
    "backBullets": [
      "λ = h / (mv); evidenced by electrons diffracting through polycrystalline graphite into rings."
    ]
  },
  {
    "id": "al-phys-fc-3-1-2",
    "subtopicId": "al-phys-3-1",
    "front": "Equation for the first harmonic frequency of a stretched string?",
    "backBullets": [
      "f = (1 / 2L) √(T / μ), where T = tension and μ = mass per unit length."
    ]
  },
  {
    "id": "al-phys-fc-3-1-3",
    "subtopicId": "al-phys-3-1",
    "front": "How is a stationary wave formed?",
    "backBullets": [
      "Superposition of two progressive waves of identical frequency, wavelength, and amplitude travelling in opposite directions."
    ]
  },
  {
    "id": "al-phys-fc-3-1-4",
    "subtopicId": "al-phys-3-1",
    "front": "Phase relationship between points in the same loop vs adjacent loops of a stationary wave?",
    "backBullets": [
      "Same loop (between adjacent nodes): in phase (0 rad); Adjacent loops: antiphase (π rad)."
    ]
  },
  {
    "id": "al-phys-fc-3-1-5",
    "subtopicId": "al-phys-3-1",
    "front": "Why can polaroid sunglasses reduce glare from wet roads?",
    "backBullets": [
      "Reflected light from horizontal surfaces is partially horizontally polarised; vertically aligned polaroids block it."
    ]
  },
  {
    "id": "al-phys-fc-3-2-3",
    "subtopicId": "al-phys-3-2",
    "front": "Why are diffraction grating maxima sharper than double-slit fringes?",
    "backBullets": [
      "Many slits interfere constructively ONLY at exact angles d sin θ = nλ; slight deviations cause complete destructive cancellation."
    ]
  },
  {
    "id": "al-phys-fc-3-2-4",
    "subtopicId": "al-phys-3-2",
    "front": "Distinguish modal dispersion and material dispersion in optical fibres.",
    "backBullets": [
      "Modal = different ray path lengths (fix: narrow core); Material = different speeds for different wavelengths (fix: monochromatic light)."
    ]
  },
  {
    "id": "al-phys-fc-3-2-5",
    "subtopicId": "al-phys-3-2",
    "front": "Two conditions required for Total Internal Reflection (TIR)?",
    "backBullets": [
      "Light travels from higher to lower refractive index (n₁ > n₂), AND angle of incidence exceeds critical angle (θ_i > θ_c)."
    ]
  },
  {
    "id": "al-phys-fc-4-1-2",
    "subtopicId": "al-phys-4-1",
    "front": "Define the torque of a couple and state its formula.",
    "backBullets": [
      "Turning effect of two equal, opposite, parallel forces separated by perpendicular distance d: Torque = F × d."
    ]
  },
  {
    "id": "al-phys-fc-4-1-3",
    "subtopicId": "al-phys-4-1",
    "front": "Two conditions for a rigid body to be in static equilibrium?",
    "backBullets": [
      "Zero resultant force (ΣF = 0) AND zero resultant moment about any point (ΣM = 0)."
    ]
  },
  {
    "id": "al-phys-fc-4-1-4",
    "subtopicId": "al-phys-4-1",
    "front": "How do you resolve a force F at angle θ to the horizontal?",
    "backBullets": [
      "Horizontal component = F cos θ; Vertical component = F sin θ."
    ]
  },
  {
    "id": "al-phys-fc-4-1-5",
    "subtopicId": "al-phys-4-1",
    "front": "Why does a skydiver reach terminal velocity?",
    "backBullets": [
      "Air resistance grows with speed until drag equals weight (ΣF = 0), so acceleration drops to zero."
    ]
  },
  {
    "id": "al-phys-fc-4-2-3",
    "subtopicId": "al-phys-4-2",
    "front": "Distinguish an elastic collision from an inelastic collision.",
    "backBullets": [
      "Both conserve momentum; ONLY elastic collisions conserve total kinetic energy."
    ]
  },
  {
    "id": "al-phys-fc-4-2-4",
    "subtopicId": "al-phys-4-2",
    "front": "What do the gradient and area of a Stress–Strain graph represent?",
    "backBullets": [
      "Gradient = Young modulus (E); Area = elastic strain energy per unit volume (J m⁻³)."
    ]
  },
  {
    "id": "al-phys-fc-4-2-5",
    "subtopicId": "al-phys-4-2",
    "front": "How does the Young modulus of a wire change if its length and diameter are doubled?",
    "backBullets": [
      "Unchanged — Young modulus is an intrinsic material property independent of dimensions!"
    ]
  },
  {
    "id": "al-phys-fc-5-1-2",
    "subtopicId": "al-phys-5-1",
    "front": "Why does a filament lamp’s resistance rise as current increases?",
    "backBullets": [
      "Heating increases metal lattice ion vibration amplitude, causing more frequent collisions with drifting electrons."
    ]
  },
  {
    "id": "al-phys-fc-5-1-3",
    "subtopicId": "al-phys-5-1",
    "front": "How do you find resistivity ρ from a Resistance vs Length graph?",
    "backBullets": [
      "Gradient = ρ / A, so ρ = gradient × cross-sectional area A (where A = πd²/4)."
    ]
  },
  {
    "id": "al-phys-fc-5-1-4",
    "subtopicId": "al-phys-5-1",
    "front": "Define a superconductor and give two applications.",
    "backBullets": [
      "Material whose resistivity drops to zero below T_c; used in MRI magnets, lossless power cables, maglev trains."
    ]
  },
  {
    "id": "al-phys-fc-5-1-5",
    "subtopicId": "al-phys-5-1",
    "front": "Common error when finding resistance from a non-ohmic I–V curve?",
    "backBullets": [
      "Using 1/gradient! Always use the direct ratio R = V / I at the point."
    ]
  },
  {
    "id": "al-phys-fc-5-2-2",
    "subtopicId": "al-phys-5-2",
    "front": "Which conservation laws underpin Kirchhoff’s 1st and 2nd laws?",
    "backBullets": [
      "1st law (junction current) = conservation of CHARGE; 2nd law (loop pd) = conservation of ENERGY."
    ]
  },
  {
    "id": "al-phys-fc-5-2-3",
    "subtopicId": "al-phys-5-2",
    "front": "How do you find EMF ε and internal resistance r from a V–I graph?",
    "backBullets": [
      "V = −rI + ε: y-intercept = EMF (ε); gradient = −r (so r = −gradient)."
    ]
  },
  {
    "id": "al-phys-fc-5-2-4",
    "subtopicId": "al-phys-5-2",
    "front": "Condition for maximum power transfer to an external load resistor R?",
    "backBullets": [
      "External load resistance R equals the supply’s internal resistance r (R = r)."
    ]
  },
  {
    "id": "al-phys-fc-5-2-5",
    "subtopicId": "al-phys-5-2",
    "front": "What happens to V_out across a fixed resistor in series with an NTC thermistor when temperature rises?",
    "backBullets": [
      "Thermistor resistance falls ⇒ takes smaller share of pd ⇒ V_out across the fixed resistor RISES!"
    ]
  },
  {
    "id": "al-phys-fc-6-1-2",
    "subtopicId": "al-phys-6-1",
    "front": "Time period formulae for a mass–spring system and a simple pendulum?",
    "backBullets": [
      "Mass–spring: T = 2π√(m/k); Simple pendulum: T = 2π√(L/g)."
    ]
  },
  {
    "id": "al-phys-fc-6-1-3",
    "subtopicId": "al-phys-6-1",
    "front": "Where in an SHM cycle are speed, acceleration, and PE maximised?",
    "backBullets": [
      "Speed (and KE) max at equilibrium x = 0; Acceleration (and PE) max at extreme amplitudes x = ±A."
    ]
  },
  {
    "id": "al-phys-fc-6-1-4",
    "subtopicId": "al-phys-6-1",
    "front": "Why does a car going round a flat bend at constant speed still accelerate?",
    "backBullets": [
      "Velocity is a vector — its direction continuously changes, producing centripetal acceleration a = v²/r toward the centre."
    ]
  },
  {
    "id": "al-phys-fc-6-1-5",
    "subtopicId": "al-phys-6-1",
    "front": "Effect of heavier damping on a resonance curve?",
    "backBullets": [
      "Lower peak amplitude, broader peak, and resonant peak shifts slightly to a lower frequency."
    ]
  },
  {
    "id": "al-phys-fc-6-2-3",
    "subtopicId": "al-phys-6-2",
    "front": "Formula linking mean molecular kinetic energy to Kelvin temperature T?",
    "backBullets": [
      "½ m (c_rms)² = ³/₂ k T (where k = 1.38 × 10⁻²³ J K⁻¹ is Boltzmann’s constant)."
    ]
  },
  {
    "id": "al-phys-fc-6-2-4",
    "subtopicId": "al-phys-6-2",
    "front": "State three key assumptions of the Kinetic Theory of an ideal gas.",
    "backBullets": [
      "Negligible molecular volume; perfectly elastic collisions; zero intermolecular forces except during collisions; random motion."
    ]
  },
  {
    "id": "al-phys-fc-6-2-5",
    "subtopicId": "al-phys-6-2",
    "front": "What is the difference between c_rms and mean speed?",
    "backBullets": [
      "c_rms = √(mean of squared speeds) — square each speed, find the mean, then take the square root!"
    ]
  },
  {
    "id": "al-phys-fc-7-1-3",
    "subtopicId": "al-phys-7-1",
    "front": "Why is gravitational potential negative everywhere near a planet?",
    "backBullets": [
      "V_g = 0 at infinity and gravity is attractive, so energy is lost as a mass approaches (work is needed to escape to infinity)."
    ]
  },
  {
    "id": "al-phys-fc-7-1-4",
    "subtopicId": "al-phys-7-1",
    "front": "How do orbital speed v and total energy change as orbital radius r increases?",
    "backBullets": [
      "Orbital speed v = √(GM/r) DECREASES, KE decreases, GPE rises by twice as much, so total energy E = −GMm/(2r) INCREASES (less negative)."
    ]
  },
  {
    "id": "al-phys-fc-7-1-5",
    "subtopicId": "al-phys-7-1",
    "front": "Two key similarities and one key difference between gravitational and radial electric fields?",
    "backBullets": [
      "Similarities: both follow 1/r² force laws and 1/r potential laws. Difference: gravity is only attractive; electric fields can attract or repel."
    ]
  },
  {
    "id": "al-phys-fc-7-2-2",
    "subtopicId": "al-phys-7-2",
    "front": "How does inserting a polar dielectric increase capacitance?",
    "backBullets": [
      "Polar molecules align opposite to the external E-field, reducing the net E-field and pd for the same stored charge Q, so C = Q/V rises."
    ]
  },
  {
    "id": "al-phys-fc-7-2-3",
    "subtopicId": "al-phys-7-2",
    "front": "Three expressions for energy stored in a capacitor?",
    "backBullets": [
      "E = ½QV = ½CV² = ½Q²/C."
    ]
  },
  {
    "id": "al-phys-fc-7-2-4",
    "subtopicId": "al-phys-7-2",
    "front": "What happens to charging current I over time while a capacitor charges?",
    "backBullets": [
      "It decays exponentially from I₀ = V₀/R to zero: I = I₀ e^(−t/RC)."
    ]
  },
  {
    "id": "al-phys-fc-7-2-5",
    "subtopicId": "al-phys-7-2",
    "front": "How do capacitors combine in parallel vs in series?",
    "backBullets": [
      "Parallel: C_tot = C₁ + C₂; Series: 1/C_tot = 1/C₁ + 1/C₂ (opposite of resistors!)."
    ]
  },
  {
    "id": "al-phys-fc-7-3-3",
    "subtopicId": "al-phys-7-3",
    "front": "Why is cyclotron frequency f = BQ/(2πm) independent of particle speed?",
    "backBullets": [
      "Higher speed increases orbital radius r = mv/(BQ) proportionally, so distance 2πr / v = 2πm/(BQ) stays constant!"
    ]
  },
  {
    "id": "al-phys-fc-7-3-4",
    "subtopicId": "al-phys-7-3",
    "front": "How does Lenz’s law uphold conservation of energy?",
    "backBullets": [
      "Opposing the magnet’s motion forces mechanical work to be done against the opposing field, converting mechanical energy into electrical energy."
    ]
  },
  {
    "id": "al-phys-fc-7-3-5",
    "subtopicId": "al-phys-7-3",
    "front": "Four causes of transformer energy loss and how each is minimised?",
    "backBullets": [
      "Eddy currents (laminated core), hysteresis (soft iron), copper heating (thick copper wire), flux leakage (close-wound coils)."
    ]
  },
  {
    "id": "al-phys-fc-8-1-3",
    "subtopicId": "al-phys-8-1",
    "front": "Why is nuclear density virtually identical (~2×10¹⁷ kg m⁻³) for all nuclei?",
    "backBullets": [
      "R = R₀A^(1/3) ⇒ Volume ∝ A and Mass ∝ A, so A cancels in ρ = M/V (nucleons are tightly packed)."
    ]
  },
  {
    "id": "al-phys-fc-8-1-4",
    "subtopicId": "al-phys-8-1",
    "front": "Why do heavy stable nuclei require more neutrons than protons (N > Z)?",
    "backBullets": [
      "Long-range electrostatic repulsion between protons grows with Z²; extra neutrons add short-range strong attraction without adding repulsion."
    ]
  },
  {
    "id": "al-phys-fc-8-1-5",
    "subtopicId": "al-phys-8-1",
    "front": "Formula linking decay constant λ to half-life T_½?",
    "backBullets": [
      "T_½ = ln 2 / λ (convert T_½ to seconds for λ in s⁻¹!)."
    ]
  },
  {
    "id": "al-phys-fc-8-2-3",
    "subtopicId": "al-phys-8-2",
    "front": "Why do BOTH nuclear fission and nuclear fusion release energy?",
    "backBullets": [
      "Both move nuclei UP toward the Fe-56 peak: products have higher binding energy per nucleon and lower total mass (ΔE = Δmc²)."
    ]
  },
  {
    "id": "al-phys-fc-8-2-4",
    "subtopicId": "al-phys-8-2",
    "front": "Why does nuclear fusion require temperatures of ~10⁸ K?",
    "backBullets": [
      "To give positively charged nuclei enough kinetic energy to overcome electrostatic repulsion and get close enough for the strong nuclear force to act."
    ]
  },
  {
    "id": "al-phys-fc-8-2-5",
    "subtopicId": "al-phys-8-2",
    "front": "Define critical mass in a fission reactor.",
    "backBullets": [
      "Minimum mass of fissile fuel needed so that on average at least one neutron from each fission triggers a further fission (sustaining the chain reaction)."
    ]
  }
];

export const ALEVEL_PHYSICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-al-phys-measurements",
    "slug": "si-units-uncertainties-and-error-bars",
    "title": "SI Base Units, Uncertainty Rules & Graph Analysis",
    "topicNumber": 1,
    "topicName": "Measurements, Uncertainties & SI Units",
    "summary": "The 7 SI base units, derived unit conversions, propagation rules for sums/products/powers, and worst-fit gradient error bars.",
    "accentColor": "#4f46e5",
    "sections": [
      {
        "heading": "SI Base Units & Derived Equivalents",
        "formula": "1 N = kg m s⁻²   |   1 J = kg m² s⁻²   |   1 V = kg m² s⁻³ A⁻¹   |   1 Ω = kg m² s⁻³ A⁻²",
        "points": [
          "7 SI base units: m, kg, s, A, K, mol, cd. Valid physical equations must be dimensionally homogeneous."
        ]
      },
      {
        "heading": "Combining Uncertainties & Worst-Fit Lines",
        "formula": "a ± b → Δy = Δa + Δb   |   ab/c → %Δy = %Δa + %Δb + %Δc   |   aⁿ → %Δy = |n| × %Δa",
        "points": [
          "Gradient % uncertainty = (|m_best − m_worst| ÷ m_best) × 100 using steepest/shallowest line through all error bars."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-quantum-waves",
    "slug": "quantum-particles-and-photoelectric-effect",
    "title": "Particles, Quarks, Photoelectric Effect & Duality",
    "topicNumber": 2,
    "topicName": "Particles, Quantum Phenomena & Wave-Particle Duality",
    "summary": "Quark numbers, conservation laws, pair production/annihilation, Einstein’s photoelectric equation, and de Broglie wavelength.",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "Particles, Quarks & Conservation Laws",
        "formula": "Specific charge = Q / m   |   Pair prod: E_min = 2E₀   |   Annihilation: E_photon = E₀",
        "points": [
          "Quarks: u (+⅔), d (−⅓), s (−⅓, S = −1). Baryons = qqq (p = uud, n = udd); Mesons = qq̄.",
          "Q, B, Le, Lμ always conserved; S conserved in strong interactions, ΔS = 0 or ±1 in weak interactions."
        ]
      },
      {
        "heading": "Photoelectric Effect & Wave-Particle Duality",
        "formula": "E = hf = hc/λ   |   hf = φ + Ek(max)   |   Ek(max) = eVs   |   λ = h / (mv)",
        "points": [
          "Ek(max) vs f graph: gradient = h, x-intercept = f₀, y-intercept = −φ."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-waves-optics",
    "slug": "progressive-stationary-waves-and-optics",
    "title": "Stationary Waves, Diffraction Gratings & Optical Fibres",
    "topicNumber": 3,
    "topicName": "Waves, Diffraction & Optics",
    "summary": "Phase difference in radians, polarisation, string harmonics, Young’s double slit, gratings, and TIR optical fibres.",
    "accentColor": "#0891b2",
    "sections": [
      {
        "heading": "Phase, Polarisation & Stationary Waves",
        "formula": "Δφ = 2πΔx / λ   |   c = fλ   |   First harmonic: f = (1 / 2L) √(T / μ)",
        "points": [
          "Only transverse waves can be polarised. Stationary waves store energy between nodes (adjacent nodes = ½λ apart)."
        ]
      },
      {
        "heading": "Interference, Gratings & Refraction",
        "formula": "w = λD / s   |   d sin θ = nλ (n_max = floor(d/λ))   |   n₁ sin θ₁ = n₂ sin θ₂   |   sin θc = n₂ / n₁",
        "points": [
          "Optical fibre pulse broadening: Modal dispersion (fix with narrow single-mode core); Material dispersion (fix with monochromatic light)."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-mechanics-materials",
    "slug": "projectiles-impulse-and-young-modulus",
    "title": "Projectiles, Momentum, Impulse & Young Modulus",
    "topicNumber": 4,
    "topicName": "Mechanics, Projectiles, Impulse & Materials",
    "summary": "Equilibrium moments, 2D projectile motion, impulse FΔt = Δ(mv), elastic collisions, and Young modulus stress-strain curves.",
    "accentColor": "#d97706",
    "sections": [
      {
        "heading": "Projectiles, Momentum & Impulse",
        "formula": "F_slope = mg sin θ   |   F = Δ(mv) / Δt   |   Impulse = FΔt = Area under F–t graph",
        "points": [
          "Projectiles: separate horizontal (constant u cos θ) and vertical (a = −9.81 m s⁻²), linked only by time t.",
          "Elastic collisions conserve BOTH momentum and kinetic energy."
        ]
      },
      {
        "heading": "Hooke’s Law & Young Modulus",
        "formula": "F = kΔL   |   E_elastic = ½FΔL   |   σ = F/A   |   ε = ΔL/L   |   E = σ/ε = FL / (AΔL)",
        "points": [
          "Young modulus = gradient of linear stress-strain graph; area under linear σ–ε graph = strain energy per unit volume."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-mechanics-elec",
    "slug": "resistivity-emf-and-potential-dividers",
    "title": "I–V Curves, Resistivity, EMF & Potential Dividers",
    "topicNumber": 5,
    "topicName": "Electricity, EMF & Potential Dividers",
    "summary": "Microscopic filament/thermistor conduction, resistivity, superconductors, V = ε − Ir, and sensor potential dividers.",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "I–V Characteristics, Resistivity & Superconductors",
        "formula": "R = V / I   |   ρ = R A / L (Ω m)   |   P = I V = I² R = V² / R",
        "points": [
          "Filament lamp R rises with T (lattice ion vibrations); NTC thermistor R drops with T (more charge carriers liberated).",
          "Superconductors have strictly zero resistance (ρ = 0) at or below critical temperature Tc."
        ]
      },
      {
        "heading": "Kirchhoff’s Laws, EMF & Potential Dividers",
        "formula": "ε = I(R + r) = V + Ir   |   V = −rI + ε   |   V_out = V_in × R₂ / (R₁ + R₂)",
        "points": [
          "V vs I graph: y-intercept = ε, gradient = −r. Maximum power delivered to load when R = r."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-shm-thermal",
    "slug": "circular-shm-and-thermal-gases",
    "title": "Circular Motion, SHM & Ideal Gases",
    "topicNumber": 6,
    "topicName": "Circular Motion, Simple Harmonic Motion & Ideal Gases",
    "summary": "Centripetal force, SHM kinematics/periods, resonance damping, and kinetic theory of gases.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "Circular Motion & SHM",
        "formula": "F = mv²/r = mω²r  |  a = −ω²x  |  v = ±ω√(A² − x²)  |  T = 2π√(m/k) = 2π√(l/g)",
        "points": [
          "Resonance peaks at f_drive = f₀; heavier damping lowers peak, broadens curve, and shifts peak slightly left."
        ]
      },
      {
        "heading": "Thermal & Kinetic Theory",
        "formula": "pV = nRT = NkT = ⅓Nm⟨c²⟩   |   ½m⟨c²⟩ = (3/2)kT",
        "points": [
          "Ideal gas internal energy is purely kinetic (U = 3/2 nRT); latent heat Q = ml increases potential energy only."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-fields-capacitors",
    "slug": "gravitational-electric-magnetic-fields-and-capacitors",
    "title": "Gravitational, Electric & Magnetic Fields + Capacitors",
    "topicNumber": 7,
    "topicName": "Gravitational, Electric & Magnetic Fields + Capacitors",
    "summary": "Kepler’s 3rd Law, escape velocity, Coulomb/uniform E-fields, RC capacitor exponential decay, cyclotrons, and Faraday/Lenz.",
    "accentColor": "#9333ea",
    "sections": [
      {
        "heading": "Gravitational, Electric Fields & Capacitors",
        "formula": "g = GM/r²  |  V_g = −GM/r  |  T² = (4π²/GM)r³  |  E = Q/(4πε₀r²) = V/d  |  Q = Q₀e^(−t/RC)",
        "points": [
          "Capacitor dielectric increases C = Aε₀εᵣ/d; energy stored E = ½CV²; time constant τ = RC; half-time T₁/₂ = RC ln 2."
        ]
      },
      {
        "heading": "Magnetic Fields & Electromagnetic Induction",
        "formula": "F = BIL sin θ   |   F = BQv → r = mv/(BQ)   |   NΦ = BAN cos θ   |   ε = N ΔΦ/Δt",
        "points": [
          "Lenz’s Law opposes flux change (energy conservation). RMS AC: V_rms = V₀/√2; laminated soft-iron transformer cores cut losses."
        ]
      }
    ]
  },
  {
    "id": "cs-al-phys-fields-nuclear",
    "slug": "radioactive-decay-binding-energy-and-reactors",
    "title": "Radioactive Decay, Nuclear Radius & Thermal Reactors",
    "topicNumber": 8,
    "topicName": "Nuclear Physics, Binding Energy & Thermal Reactors",
    "summary": "Exponential decay A = λN, N–Z stability, constant nuclear density R = R₀A^(1/3), Fe-56 binding energy, and reactor physics.",
    "accentColor": "#dc2626",
    "sections": [
      {
        "heading": "Radioactive Decay & Nuclear Radius",
        "formula": "A = λN   |   N = N₀e^(−λt)   |   T₁/₂ = ln 2 / λ   |   R = R₀A^(1/3)",
        "points": [
          "Nuclear volume V ∝ R³ ∝ A and mass M ∝ A, so nuclear density ρ ≈ 2 × 10¹⁷ kg m⁻³ is constant for all nuclei."
        ]
      },
      {
        "heading": "Mass Defect, Binding Energy & Reactors",
        "formula": "ΔE = Δm c²   |   1 u = 931.5 MeV   |   ΔE = ΣBE(products) − ΣBE(reactants)",
        "points": [
          "Binding energy per nucleon peaks at Fe-56 (~8.8 MeV).",
          "Reactor: Moderator slows neutrons (elastic collisions); Control rods absorb neutrons (boron/cadmium); Coolant extracts heat."
        ]
      }
    ]
  }
];

export const ALEVEL_PHYSICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "al-phys-exam-1",
    "subtopicId": "al-phys-1-1",
    "number": 1,
    "stimulus": "A student determines the density ρ = m / V of a metal sphere by measuring its mass m = 64.0 ± 0.8 g and diameter d = 24.0 ± 0.4 mm (where sphere volume V = ⅙πd³).",
    "parts": [
      {
        "id": "al-phys-exam-1a",
        "label": "a)",
        "prompt": "What is the percentage uncertainty in the measured diameter d?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "0.40%",
          "1.25%",
          "1.67%",
          "5.00%"
        ],
        "correctIndex": 2
      },
      {
        "id": "al-phys-exam-1b",
        "label": "b)",
        "prompt": "Calculate the total percentage uncertainty in the calculated density ρ of the sphere.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "%Δm = (0.8 / 64.0) × 100 = 1.25%. %Δ(d³) = 3 × (0.4 / 24.0 × 100) = 3 × 1.67% = 5.00%. Total %Δρ = 1.25% + 5.00% = 6.25%.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "%Δm = 1.25% and 3 × %Δd = 5.0%",
              "requiredKeywordGroups": [
                [
                  "1.25"
                ],
                [
                  "5",
                  "5.0"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Total % uncertainty = 6.25% (accept 6.2–6.3%)",
              "numericMatch": {
                "value": 6.25,
                "tolerance": 0.1
              }
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-1c",
        "label": "c)",
        "prompt": "Explain how the student should check for and correct a zero error on the micrometer screw gauge before measuring diameter d.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Close the micrometer jaws gently using the ratchet with no object present and record the offset reading from zero; subtract this systematic zero error from all subsequent diameter measurements.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Close jaws fully using ratchet and read offset from zero",
              "requiredKeywordGroups": [
                [
                  "close",
                  "jaws",
                  "ratchet"
                ],
                [
                  "zero",
                  "reading"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Subtract (or add) systematic zero offset from all measured values",
              "requiredKeywordGroups": [
                [
                  "subtract",
                  "correct",
                  "systematic"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-2",
    "subtopicId": "al-phys-2-2",
    "number": 2,
    "stimulus": "Ultraviolet light of wavelength λ = 250 nm is incident on a clean potassium metal cathode whose work function is φ = 2.30 eV (h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, e = 1.60 × 10⁻¹⁹ C).",
    "diagram": "atomic-structure",
    "parts": [
      {
        "id": "al-phys-exam-2a",
        "label": "a)",
        "prompt": "Calculate the energy of one incident UV photon in electronvolts (eV) to 3 significant figures.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "E = hc/λ = (6.63×10⁻³⁴ × 3.00×10⁸) ÷ (250×10⁻⁹) = 7.956×10⁻¹⁹ J. In eV: 7.956×10⁻¹⁹ ÷ 1.60×10⁻¹⁹ = 4.97 eV.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "E = 7.96 × 10⁻¹⁹ J",
              "requiredKeywordGroups": [
                [
                  "7.95",
                  "7.96"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "4.97 eV",
              "numericMatch": {
                "value": 4.97,
                "tolerance": 0.05
              }
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-2b",
        "label": "b)",
        "prompt": "Calculate the maximum kinetic energy of the emitted photoelectrons in Joules and explain why some emitted electrons have less than this maximum energy.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Ek(max) = (4.97 − 2.30) eV = 2.67 eV = 4.27 × 10⁻¹⁹ J. Electrons deeper beneath the metal surface lose extra energy colliding with metal ions while escaping, so only surface electrons leave with Ek(max).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Ek(max) = 2.67 eV or 4.27 × 10⁻¹⁹ J",
              "requiredKeywordGroups": [
                [
                  "4.27",
                  "4.28",
                  "2.67"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Work function φ applies only to surface electrons",
              "requiredKeywordGroups": [
                [
                  "surface"
                ],
                [
                  "minimum",
                  "deep",
                  "below"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Deeper electrons require extra energy to reach surface / lose energy in collisions",
              "requiredKeywordGroups": [
                [
                  "deep",
                  "below"
                ],
                [
                  "extra",
                  "collision",
                  "more energy"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-2c",
        "label": "c)",
        "prompt": "State and explain the effect on the photoelectric current and on Ek(max) if the UV intensity is doubled at constant wavelength 250 nm.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Photoelectric current doubles because twice as many photons arrive per second, liberating twice as many photoelectrons per second. Ek(max) remains unchanged because each photon still has the same energy hf.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Current doubles because twice as many photons arrive per second",
              "requiredKeywordGroups": [
                [
                  "current",
                  "electrons"
                ],
                [
                  "double",
                  "twice"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Ek(max) unchanged because individual photon energy hf is unchanged",
              "requiredKeywordGroups": [
                [
                  "unchanged",
                  "same",
                  "constant"
                ],
                [
                  "photon energy",
                  "hf"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-3",
    "subtopicId": "al-phys-3-2",
    "number": 3,
    "stimulus": "Monochromatic laser light of wavelength 532 nm passes normally through a diffraction grating with 600 lines per mm onto a screen.",
    "diagram": "transverse-wave",
    "parts": [
      {
        "id": "al-phys-exam-3a",
        "label": "a)",
        "prompt": "What is the grating slit spacing d in metres?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "1.67 × 10⁻³ m",
          "1.67 × 10⁻⁶ m",
          "6.00 × 10⁻⁴ m",
          "6.00 × 10⁻⁷ m"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-phys-exam-3b",
        "label": "b)",
        "prompt": "Calculate the diffraction angle θ of the second-order (n = 2) bright maximum to 1 decimal place.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "sin θ = nλ / d = (2 × 532 × 10⁻⁹) ÷ (1.667 × 10⁻⁶) = 0.6384 → θ = 39.7°.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "sin θ = 0.638",
              "requiredKeywordGroups": [
                [
                  "0.638",
                  "0.639"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "θ = 39.7°",
              "numericMatch": {
                "value": 39.7,
                "tolerance": 0.3
              }
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-3c",
        "label": "c)",
        "prompt": "Explain two advantages of using a diffraction grating rather than Young’s double slits to measure the wavelength of light accurately.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Maxima are much sharper and brighter, and the angular separation between adjacent maxima is much larger, dramatically reducing the percentage uncertainty in measuring angles/positions.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Maxima are much sharper and brighter",
              "requiredKeywordGroups": [
                [
                  "sharp",
                  "bright",
                  "narrow"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Larger angular separation reduces percentage measurement uncertainty",
              "requiredKeywordGroups": [
                [
                  "wider",
                  "larger",
                  "further apart"
                ],
                [
                  "uncertainty",
                  "accura"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-4",
    "subtopicId": "al-phys-4-1",
    "number": 4,
    "stimulus": "A golf ball is struck from level ground with an initial speed of 40.0 m s⁻¹ at an angle of 30.0° above the horizontal (neglect air resistance, g = 9.81 m s⁻²).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "al-phys-exam-4a",
        "label": "a)",
        "prompt": "What are the initial horizontal (u_x) and vertical (u_y) velocity components of the golf ball?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "u_x = 20.0 m s⁻¹, u_y = 34.6 m s⁻¹",
          "u_x = 34.6 m s⁻¹, u_y = 20.0 m s⁻¹",
          "u_x = 40.0 m s⁻¹, u_y = 0 m s⁻¹",
          "u_x = 28.3 m s⁻¹, u_y = 28.3 m s⁻¹"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-phys-exam-4b",
        "label": "b)",
        "prompt": "Calculate the maximum vertical height reached by the golf ball to 3 significant figures.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "At peak height v_y = 0: v_y² = u_y² − 2gh → h = 20.0² ÷ (2 × 9.81) = 400 ÷ 19.62 = 20.4 m.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Uses u_y = 20.0 m s⁻¹ and v_y = 0 in v² = u² + 2as",
              "requiredKeywordGroups": [
                [
                  "20",
                  "400"
                ],
                [
                  "19.62",
                  "9.81"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Maximum height = 20.4 m",
              "numericMatch": {
                "value": 20.4,
                "tolerance": 0.2
              }
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-4c",
        "label": "c)",
        "prompt": "Describe two ways in which air resistance would alter the trajectory of the golf ball.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Both the maximum vertical height and the total horizontal range decrease, and the trajectory becomes asymmetrical with a steeper descent angle than launch angle.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Decreases maximum height and reduces horizontal range",
              "requiredKeywordGroups": [
                [
                  "lower",
                  "reduc",
                  "decreas"
                ],
                [
                  "height",
                  "range"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Asymmetrical path / steeper angle of descent",
              "requiredKeywordGroups": [
                [
                  "asymmetr",
                  "steeper"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-5",
    "subtopicId": "al-phys-5-2",
    "number": 5,
    "stimulus": "A battery of EMF ε = 6.0 V and internal resistance r = 1.5 Ω is connected in series with a variable load resistor R, an ideal ammeter, and an ideal voltmeter across the battery terminals.",
    "diagram": "circuit-series-parallel",
    "parts": [
      {
        "id": "al-phys-exam-5a",
        "label": "a)",
        "prompt": "What does the voltmeter read when the external switch is OPEN (zero current)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "0 V",
          "1.5 V",
          "4.5 V",
          "6.0 V"
        ],
        "correctIndex": 3
      },
      {
        "id": "al-phys-exam-5b",
        "label": "b)",
        "prompt": "When the variable resistor is set to R = 4.5 Ω and the switch is closed, calculate the circuit current I and the terminal potential difference V.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "I = ε / (R + r) = 6.0 ÷ (4.5 + 1.5) = 1.0 A. Terminal PD V = ε − Ir = 6.0 − (1.0 × 1.5) = 4.5 V.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Current I = 1.0 A",
              "requiredKeywordGroups": [
                [
                  "1.0",
                  "1 a"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Terminal PD V = 4.5 V",
              "numericMatch": {
                "value": 4.5,
                "tolerance": 0.05
              }
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-5c",
        "label": "c)",
        "prompt": "Explain how a student can determine both ε and r from a graph of terminal PD (V) against current (I) as R is varied.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Since V = −rI + ε, the y-intercept (at I = 0) equals the EMF ε, and the negative gradient of the straight line equals −r (so internal resistance r = −gradient).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "y-intercept gives EMF ε",
              "requiredKeywordGroups": [
                [
                  "intercept"
                ],
                [
                  "emf",
                  "ε"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Gradient equals −r (magnitude of gradient = internal resistance)",
              "requiredKeywordGroups": [
                [
                  "gradient",
                  "slope"
                ],
                [
                  "internal resistance",
                  "-r"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-6",
    "subtopicId": "al-phys-6-1",
    "number": 6,
    "stimulus": "A 0.25 kg mass suspended from a vertical spring of spring constant k = 36 N m⁻¹ is pulled down 0.050 m from equilibrium and released to oscillate in Simple Harmonic Motion.",
    "parts": [
      {
        "id": "al-phys-exam-6a",
        "label": "a)",
        "prompt": "What is the angular frequency ω = √(k / m) of this mass-spring oscillator?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "6.0 rad s⁻¹",
          "12.0 rad s⁻¹",
          "72.0 rad s⁻¹",
          "144 rad s⁻¹"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-phys-exam-6b",
        "label": "b)",
        "prompt": "Calculate the maximum speed v_max and maximum acceleration a_max of the oscillating mass.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "v_max = ωA = 12.0 × 0.050 = 0.60 m s⁻¹. a_max = ω²A = 144 × 0.050 = 7.2 m s⁻².",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "v_max = 0.60 m s⁻¹",
              "requiredKeywordGroups": [
                [
                  "0.6",
                  "0.60"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "a_max = 7.2 m s⁻²",
              "numericMatch": {
                "value": 7.2,
                "tolerance": 0.1
              }
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-6c",
        "label": "c)",
        "prompt": "Describe the energy transfers taking place during one quarter-cycle as the mass moves from its lowest extreme displacement (+A) to the equilibrium position (x = 0).",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "At +A, elastic potential energy is maximum and kinetic energy is zero. As it moves to equilibrium, elastic potential energy converts into kinetic energy and gravitational potential energy, reaching maximum kinetic energy at x = 0.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "At extreme (+A) kinetic energy is zero and potential energy is maximum",
              "requiredKeywordGroups": [
                [
                  "zero"
                ],
                [
                  "maximum",
                  "extreme",
                  "amplitude"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Potential energy converts to maximum kinetic energy at equilibrium (x = 0)",
              "requiredKeywordGroups": [
                [
                  "kinetic"
                ],
                [
                  "equilibrium",
                  "centre"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-7",
    "subtopicId": "al-phys-7-1",
    "number": 7,
    "stimulus": "A communications satellite orbits Earth in a circular geostationary orbit of period T = 86,400 s (G = 6.67 × 10⁻¹¹ N m² kg⁻², Earth mass M = 5.97 × 10²⁴ kg).",
    "parts": [
      {
        "id": "al-phys-exam-7a",
        "label": "a)",
        "prompt": "In which direction and over which line of latitude must a geostationary satellite orbit?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "East-to-west over the Prime Meridian",
          "West-to-east directly above the Equator",
          "North-to-south over the poles",
          "Any inclination provided altitude is 400 km"
        ],
        "correctIndex": 1
      },
      {
        "id": "al-phys-exam-7b",
        "label": "b)",
        "prompt": "Show by equating gravitational force to centripetal force that orbital radius obeys r³ = (G M T²) / (4π²), and calculate r in km to 3 significant figures.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "GMm/r² = mω²r = m(2π/T)²r → r³ = GMT² / 4π² = (6.67×10⁻¹¹ × 5.97×10²⁴ × 86400²) ÷ (4π²) = 7.53×10²² m³ → r = 4.22×10⁷ m = 42,200 km.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Equates GMm/r² = mω²r with ω = 2π/T",
              "requiredKeywordGroups": [
                [
                  "gm",
                  "2π",
                  "4π"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "r = 4.22 × 10⁷ m (or 42,200 km)",
              "numericMatch": {
                "value": 42200,
                "tolerance": 300
              }
            },
            {
              "id": "mp3",
              "markDescription": "Clear algebraic rearrangement to r³",
              "requiredKeywordGroups": [
                [
                  "r3",
                  "r³",
                  "cube"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-7c",
        "label": "c)",
        "prompt": "Give one advantage of a geostationary satellite over a low-Earth polar satellite for domestic satellite television broadcasting.",
        "kind": "short-answer",
        "marks": 1,
        "rubric": {
          "maxMarks": 1,
          "modelAnswer": "Remains stationary above a fixed point on Earth’s equator so domestic receiver dishes can remain fixed without tracking motors.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Satellite stays fixed relative to Earth so dish does not need to track/move",
              "requiredKeywordGroups": [
                [
                  "fixed",
                  "stationary",
                  "track",
                  "dish"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-exam-8",
    "subtopicId": "al-phys-8-2",
    "number": 8,
    "stimulus": "In a thermal nuclear reactor, fast neutrons (~2 MeV) released by Uranium-235 fission must be moderated before causing further fission.",
    "parts": [
      {
        "id": "al-phys-exam-8a",
        "label": "a)",
        "prompt": "What is the approximate kinetic energy of a \"thermal\" neutron in equilibrium with the moderator?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "0.025 eV",
          "2.0 MeV",
          "200 MeV",
          "931.5 MeV"
        ],
        "correctIndex": 0
      },
      {
        "id": "al-phys-exam-8b",
        "label": "b)",
        "prompt": "Explain why water or graphite nuclei are far more effective moderator materials than heavy lead nuclei.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Neutrons slow down through elastic collisions with moderator nuclei. Momentum and kinetic energy transfer per collision is maximised when the moderator nucleus has a small mass comparable to a neutron; against heavy lead nuclei, neutrons simply rebound elastically with almost unchanged kinetic energy.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Neutrons lose kinetic energy via elastic collisions with moderator nuclei",
              "requiredKeywordGroups": [
                [
                  "elastic"
                ],
                [
                  "collision"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Maximum kinetic energy transferred when moderator nuclear mass is small / similar to neutron mass",
              "requiredKeywordGroups": [
                [
                  "mass",
                  "similar",
                  "small"
                ],
                [
                  "transfer",
                  "kinetic"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Against heavy lead nuclei, neutrons bounce off losing very little KE",
              "requiredKeywordGroups": [
                [
                  "lead",
                  "heavy"
                ],
                [
                  "rebound",
                  "bounce",
                  "little"
                ]
              ]
            }
          ]
        }
      },
      {
        "id": "al-phys-exam-8c",
        "label": "c)",
        "prompt": "Explain how boron control rods maintain a steady power output in the reactor core.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Boron absorbs thermal neutrons; adjusting control rod depth ensures that on average exactly one neutron from each fission event survives to trigger one subsequent fission.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Boron absorbs neutrons",
              "requiredKeywordGroups": [
                [
                  "absorb"
                ],
                [
                  "neutron"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Ensures exactly one neutron per fission induces another fission (criticality = 1)",
              "requiredKeywordGroups": [
                [
                  "one neutron",
                  "1 neutron",
                  "constant rate",
                  "steady"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-2-1",
    "subtopicId": "al-phys-2-1",
    "number": 9,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A stationary carbon-14 nucleus undergoes β⁻ decay into nitrogen-14: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄_e.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "State the quark change that occurs, name the exchange boson responsible, and explain why an antineutrino must be emitted.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "A down quark changes into an up quark (d → u), mediated by a W⁻ boson. The electron antineutrino (L_e = −1) is required to conserve electron lepton number (0 → +1 − 1 = 0) and energy/momentum.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Down quark to up quark (d → u)",
              "requiredKeywordGroups": [
                [
                  "down"
                ],
                [
                  "up"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "W⁻ exchange boson (weak interaction)",
              "requiredKeywordGroups": [
                [
                  "w-",
                  "w−",
                  "w minus",
                  "weak"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Conserves electron lepton number",
              "requiredKeywordGroups": [
                [
                  "lepton"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-3-1",
    "subtopicId": "al-phys-3-1",
    "number": 10,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A string of length 1.20 m and mass per unit length μ = 4.0 × 10⁻³ kg m⁻¹ is held under tension T = 90 N.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the first harmonic (fundamental) frequency of the string and explain how the frequency changes if the tension is quadrupled.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "f₁ = (1 / 2.40) × √(90 / 0.004) = (1/2.40) × √22500 = 150 / 2.40 = 62.5 Hz. Since f ∝ √T, quadrupling tension doubles the frequency to 125 Hz.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Wave speed √(T/μ) = 150 m/s",
              "numericMatch": {
                "value": 150,
                "tolerance": 1
              }
            },
            {
              "id": "mp2",
              "markDescription": "f₁ = 62.5 Hz",
              "numericMatch": {
                "value": 62.5,
                "tolerance": 0.5
              }
            },
            {
              "id": "mp3",
              "markDescription": "Quadrupling T doubles f (f ∝ √T)",
              "requiredKeywordGroups": [
                [
                  "double",
                  "doubles",
                  "125",
                  "2"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-4-2",
    "subtopicId": "al-phys-4-2",
    "number": 11,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A 0.060 kg tennis ball strikes a vertical wall horizontally at 25 m/s and rebounds directly back at 20 m/s. Contact lasts 0.015 s.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the magnitude of the change in momentum (impulse) and the average force exerted by the wall on the ball.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Δp = 0.060 × (25 − (−20)) = 0.060 × 45 = 2.7 N s. Average force F = Δp / Δt = 2.7 / 0.015 = 180 N.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Correct velocity change 45 m/s (opposite signs)",
              "numericMatch": {
                "value": 45,
                "tolerance": 0.5
              }
            },
            {
              "id": "mp2",
              "markDescription": "Impulse 2.7 N s",
              "numericMatch": {
                "value": 2.7,
                "tolerance": 0.05
              }
            },
            {
              "id": "mp3",
              "markDescription": "Average force 180 N",
              "numericMatch": {
                "value": 180,
                "tolerance": 2
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-5-1",
    "subtopicId": "al-phys-5-1",
    "number": 12,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A constantan wire of length 1.20 m has diameter 0.40 mm and resistance 4.68 Ω.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the cross-sectional area of the wire and hence its resistivity ρ (in Ω m).",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "r = 0.20 × 10⁻³ m → A = πr² = π(2.0×10⁻⁴)² = 1.26 × 10⁻⁷ m². ρ = RA/L = (4.68 × 1.26×10⁻⁷) / 1.20 = 4.9 × 10⁻⁷ Ω m.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Converts diameter to radius 2.0×10⁻⁴ m and computes A ≈ 1.26×10⁻⁷ m²",
              "requiredKeywordGroups": [
                [
                  "1.26",
                  "1.25",
                  "0.2"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Uses ρ = RA / L",
              "requiredKeywordGroups": [
                [
                  "ra/l",
                  "4.68",
                  "1.2"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "ρ ≈ 4.9 × 10⁻⁷ Ω m",
              "requiredKeywordGroups": [
                [
                  "4.9",
                  "4.89",
                  "4.90"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-6-2",
    "subtopicId": "al-phys-6-2",
    "number": 13,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A sealed cylinder of volume 0.025 m³ holds 2.0 mol of an ideal gas at 300 K (R = 8.31 J mol⁻¹ K⁻¹).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the gas pressure (in kPa) and the total internal energy of the gas.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "p = nRT / V = (2.0 × 8.31 × 300) / 0.025 = 199,440 Pa ≈ 199 kPa. Total internal energy U = ³/₂ nRT = 1.5 × 2.0 × 8.31 × 300 = 7480 J (7.48 kJ).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Uses pV = nRT cleanly",
              "requiredKeywordGroups": [
                [
                  "8.31",
                  "300",
                  "0.025"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Pressure ≈ 199 kPa (1.99×10⁵ Pa)",
              "requiredKeywordGroups": [
                [
                  "199",
                  "200",
                  "1.99"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Internal energy ≈ 7480 J (7.48 kJ)",
              "requiredKeywordGroups": [
                [
                  "7480",
                  "7479",
                  "7.48",
                  "7.5"
                ]
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-7-2",
    "subtopicId": "al-phys-7-2",
    "number": 14,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A 200 μF capacitor charged to 10.0 V is discharged through a 50 kΩ resistor.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the initial energy stored, the time constant τ, and the potential difference remaining after 10.0 s.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "E = ½(200×10⁻⁶)(10²) = 0.010 J (10 mJ). τ = RC = (50×10³)(200×10⁻⁶) = 10 s. After 10 s (= 1τ), V = 10 × e⁻¹ = 3.68 V.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "E = 0.010 J (10 mJ)",
              "numericMatch": {
                "value": 0.01,
                "tolerance": 0.001
              }
            },
            {
              "id": "mp2",
              "markDescription": "τ = 10 s",
              "numericMatch": {
                "value": 10,
                "tolerance": 0.2
              }
            },
            {
              "id": "mp3",
              "markDescription": "V = 3.68 V",
              "numericMatch": {
                "value": 3.68,
                "tolerance": 0.1
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-7-3",
    "subtopicId": "al-phys-7-3",
    "number": 15,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A 230 V_rms power supply feeds a step-down transformer with 1,000 primary turns and 100 secondary turns at 92% efficiency. Secondary current is 5.0 A.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the secondary voltage, secondary output power, and primary current drawn from the mains.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "V_s = 230 × (100/1000) = 23 V. Output power P_s = 23 × 5.0 = 115 W. Input power P_p = 115 / 0.92 = 125 W → I_p = 125 / 230 = 0.543 A.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "V_s = 23 V",
              "numericMatch": {
                "value": 23,
                "tolerance": 0.2
              }
            },
            {
              "id": "mp2",
              "markDescription": "P_s = 115 W",
              "numericMatch": {
                "value": 115,
                "tolerance": 1
              }
            },
            {
              "id": "mp3",
              "markDescription": "I_p = 0.543 A (0.54 A)",
              "numericMatch": {
                "value": 0.543,
                "tolerance": 0.02
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "al-phys-ex-8-1",
    "subtopicId": "al-phys-8-1",
    "number": 16,
    "stimulus": "[AQA 7408 / CIE 9702 Style] A sample of iodine-131 has a half-life of 8.0 days (6.91 × 10⁵ s) and an initial activity of 4.0 × 10⁶ Bq.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the decay constant λ (in s⁻¹), the initial number of undecayed nuclei N₀, and the activity after 24 days.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "λ = ln 2 / (6.91×10⁵) = 1.00 × 10⁻⁶ s⁻¹. N₀ = A₀ / λ = 4.0×10⁶ / 1.00×10⁻⁶ = 4.0 × 10¹² nuclei. 24 days = 3 half-lives → A = 4.0×10⁶ / 8 = 5.0 × 10⁵ Bq.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "λ = 1.00 × 10⁻⁶ s⁻¹",
              "requiredKeywordGroups": [
                [
                  "1.0",
                  "1.00",
                  "10^-6",
                  "10⁻⁶"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "N₀ = 4.0 × 10¹²",
              "requiredKeywordGroups": [
                [
                  "4.0",
                  "4×10",
                  "4 x 10"
                ]
              ]
            },
            {
              "id": "mp3",
              "markDescription": "Activity after 24 days = 5.0 × 10⁵ Bq",
              "requiredKeywordGroups": [
                [
                  "5.0",
                  "500000",
                  "500,000",
                  "5×10"
                ]
              ]
            }
          ]
        }
      }
    ]
  }
];

export const ALEVEL_PHYSICS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "al-phys-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 1 — Core Topics 1–5 & Periodic Motion (7408/1)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7408/1",
    "durationMinutes": 120,
    "totalMarks": 85,
    "insertNote": "Includes AQA Physics Formulae & Constants Data Booklet (60 marks structured + 25 MCQs).",
    "sampleQuestions": [
      {
        "number": "01.3",
        "question": "Explain why classical wave theory could not account for the existence of a threshold frequency in the photoelectric effect.",
        "marks": 3,
        "markScheme": [
          "Wave theory assumes energy is spread continuously over wavefronts; any frequency should eventually accumulate enough energy to release an electron; photon theory requires one photon of energy hf ≥ φ in a one-to-one interaction."
        ]
      },
      {
        "number": "02.2",
        "question": "Write the quark composition of a π⁺ meson and a neutron, and verify baryon number conservation in p + p → p + n + π⁺.",
        "marks": 2,
        "markScheme": [
          "π⁺ = uđ (B = 0), neutron = udd (B = +1); LHS B = 1 + 1 = 2, RHS B = 1 + 1 + 0 = 2 (conserved)."
        ]
      },
      {
        "number": "03.2",
        "question": "Explain how a step-index optical fibre reduces modal dispersion.",
        "marks": 2,
        "markScheme": [
          "Using a very narrow core (small diameter) and small refractive index difference between core and cladding restricts maximum ray angle / path length difference between axial and reflected rays."
        ]
      },
      {
        "number": "05.1",
        "question": "Explain why car headlights dim momentarily when the starter motor draws a large current from the 12 V battery.",
        "marks": 2,
        "markScheme": [
          "Large current I increases lost volts (Ir) across the battery’s internal resistance r; terminal potential difference V = ε − Ir across the headlights drops."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 2 — Thermal, Fields & Nuclear (7408/2)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7408/2",
    "durationMinutes": 120,
    "totalMarks": 85,
    "insertNote": "Includes AQA Physics Formulae & Constants Data Booklet (60 marks structured + 25 MCQs).",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Use the kinetic theory of gases to explain why the pressure of an ideal gas at constant volume increases when its absolute temperature increases.",
        "marks": 3,
        "markScheme": [
          "Higher T increases mean molecular kinetic energy (3/2 kT) and RMS speed; molecules hit container walls more frequently and with a larger change in momentum per collision; rate of change of momentum (force) per unit area increases."
        ]
      },
      {
        "number": "02.1",
        "question": "Explain how inserting a polar dielectric between isolated charged capacitor plates increases its capacitance.",
        "marks": 3,
        "markScheme": [
          "Polar molecules rotate and align with the electric field; aligned dipoles create an opposing internal electric field; net electric field and potential difference V across plates decrease for fixed Q, so C = Q/V increases."
        ]
      },
      {
        "number": "04.2",
        "question": "Explain why a laminated soft-iron core improves the electrical efficiency of a step-up transformer.",
        "marks": 3,
        "markScheme": [
          "Laminations separated by insulating layers increase resistance to circulating eddy currents, cutting I²R core heating; soft iron magnetises and demagnetises easily, minimising magnetic hysteresis energy loss."
        ]
      },
      {
        "number": "05.3",
        "question": "Use the binding energy per nucleon curve to explain why nuclear fusion of deuterium and tritium releases energy.",
        "marks": 2,
        "markScheme": [
          "Helium-4 product has a much higher binding energy per nucleon than light hydrogen isotopes; total mass of products is less than reactants, releasing ΔE = Δmc²."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2024-p3",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "A-Level Paper 3A — Practical Skills & Data Analysis (7408/3A)",
    "tier": "A-Level",
    "series": "June 2024",
    "paperCode": "7408/3A",
    "durationMinutes": 120,
    "totalMarks": 80,
    "insertNote": "Assesses Required Practicals 1–12, uncertainty propagation, logarithmic linearisation, and worst-fit line analysis.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Describe how to determine the percentage uncertainty in the gradient of a graph with error bars.",
        "marks": 2,
        "markScheme": [
          "Draw the line of best fit and the steepest or shallowest worst-acceptable line still passing through all error bars; % uncertainty = (|m_best − m_worst| ÷ m_best) × 100."
        ]
      },
      {
        "number": "02.1",
        "question": "Explain why a long, thin wire is used when determining the Young modulus of copper in Searle’s apparatus.",
        "marks": 2,
        "markScheme": [
          "Produces a larger extension ΔL for a given load; reduces the percentage uncertainty in measuring extension with the vernier scale."
        ]
      },
      {
        "number": "03.3",
        "question": "Describe how to use a linear plot of ln(V) against time t to determine the capacitance C of a capacitor discharging through a known resistor R.",
        "marks": 2,
        "markScheme": [
          "Since ln V = −t/(RC) + ln V₀, measure the gradient m of the straight line; calculate C = −1 / (m R)."
        ]
      },
      {
        "number": "04.1",
        "question": "State two safety precautions when handling a sealed gamma source in the inverse-square law practical.",
        "marks": 2,
        "markScheme": [
          "Handle using long tongs to maximise distance from body; point source away from people and return immediately to lead-lined storage box after readings."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 1 — Core Topics 1–5 & Periodic Motion (7408/1)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7408/1",
    "durationMinutes": 120,
    "totalMarks": 85,
    "insertNote": "Includes AQA Physics Formulae & Constants Data Booklet.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Calculate the specific charge of a ⁴²₂₀Ca²⁺ ion (e = 1.60 × 10⁻¹⁹ C, u = 1.661 × 10⁻²⁷ kg).",
        "marks": 2,
        "markScheme": [
          "Charge Q = 2 × 1.60×10⁻¹⁹ = 3.20×10⁻¹⁹ C; Mass m = 42 × 1.661×10⁻²⁷ = 6.976×10⁻²⁶ kg; Q/m = 4.59 × 10⁶ C kg⁻¹."
        ]
      },
      {
        "number": "02.3",
        "question": "Explain how a stationary wave is formed on a stretched string and compare the phase of particles within the same loop and adjacent loops.",
        "marks": 3,
        "markScheme": [
          "Incident progressive wave reflects at fixed end; two waves of same frequency and amplitude travelling in opposite directions superpose; particles within the same loop oscillate in phase, and in antiphase (π rad) with particles in the adjacent loop."
        ]
      },
      {
        "number": "04.2",
        "question": "Use Newton’s laws to explain how a helicopter hovers at constant altitude by pushing air downwards.",
        "marks": 3,
        "markScheme": [
          "Rotor blades accelerate air downwards, giving air a downward rate of change of momentum (F = Δ(mv)/Δt); by Newton’s 3rd law, air exerts an equal and opposite upward force on the blades equal to the helicopter’s weight."
        ]
      },
      {
        "number": "06.1",
        "question": "Derive the expression for the minimum speed v_min = √(gr) for a rollercoaster car to remain in contact with a vertical circular loop of radius r at the top.",
        "marks": 2,
        "markScheme": [
          "At top of loop: mg + R = mv²/r; at minimum speed normal reaction R → 0, so mg = mv²/r → v = √(gr)."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 2 — Thermal, Fields & Nuclear (7408/2)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7408/2",
    "durationMinutes": 120,
    "totalMarks": 85,
    "insertNote": "Includes AQA Physics Formulae & Constants Data Booklet.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Explain why the internal energy of an ideal gas is equal solely to the sum of the kinetic energies of its molecules.",
        "marks": 2,
        "markScheme": [
          "Internal energy is sum of random kinetic and intermolecular potential energies; an ideal gas has zero intermolecular forces so potential energy is zero."
        ]
      },
      {
        "number": "02.3",
        "question": "Explain why no work is done when a positive charge moves along an equipotential surface in an electric field.",
        "marks": 2,
        "markScheme": [
          "All points on an equipotential have the same potential so ΔV = 0 (and electric force acts perpendicular to displacement); since W = QΔV, work done is zero."
        ]
      },
      {
        "number": "04.1",
        "question": "Show that the orbital time period T of a charged particle moving perpendicular to a uniform magnetic field B in a cyclotron is independent of its speed.",
        "marks": 2,
        "markScheme": [
          "BQv = mv²/r → r = mv/(BQ); T = 2πr / v = 2πm / (BQ), where speed v cancels out."
        ]
      },
      {
        "number": "05.2",
        "question": "Explain why high-energy electron diffraction gives a more accurate value for nuclear radius than Rutherford alpha closest approach.",
        "marks": 2,
        "markScheme": [
          "Electrons are leptons so do not experience the strong nuclear force; alpha closest approach only gives an upper bound where the alpha particle stops outside the nucleus."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2023-p3",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "A-Level Paper 3A — Practical Skills & Data Analysis (7408/3A)",
    "tier": "A-Level",
    "series": "June 2023",
    "paperCode": "7408/3A",
    "durationMinutes": 120,
    "totalMarks": 80,
    "insertNote": "Assesses practical investigation skills and uncertainty analysis.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Explain why a fiducial marker is placed at the centre (equilibrium position) of a simple pendulum oscillation when timing 20 periods.",
        "marks": 2,
        "markScheme": [
          "Pendulum bob moves at maximum speed at equilibrium; passes the marker in the shortest time, minimising human reaction-time uncertainty in starting/stopping the stopwatch."
        ]
      },
      {
        "number": "02.2",
        "question": "Explain how a student uses a log-log graph of ln(T) against ln(L) to verify that pendulum period obeys T ∝ L^0.5.",
        "marks": 2,
        "markScheme": [
          "Since T = kL^n, ln T = n ln L + ln k; plot ln T against ln L and verify it forms a straight line of gradient n = 0.50."
        ]
      },
      {
        "number": "03.1",
        "question": "Describe how to measure the diameter of a resistance wire accurately to reduce random and systematic errors.",
        "marks": 2,
        "markScheme": [
          "Check micrometer zero error first; measure diameter at several different positions and perpendicular orientations along the wire and calculate the mean."
        ]
      },
      {
        "number": "04.2",
        "question": "In the Boyle’s Law gas column experiment, explain why the student waits 1 minute after each pressure change before reading volume.",
        "marks": 1,
        "markScheme": [
          "Allows the trapped air column to return to room temperature (isothermal condition)."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 1 — Core Topics 1–5 & Periodic Motion (7408/1)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7408/1",
    "durationMinutes": 120,
    "totalMarks": 85,
    "insertNote": "Includes AQA Physics Formulae & Constants Data Booklet.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Explain how a fluorescent tube converts electrical energy into visible light.",
        "marks": 4,
        "markScheme": [
          "Mobile electrons collide with mercury atoms exciting orbital electrons to higher energy levels; mercury electrons de-excite emitting UV photons; phosphor coating absorbs UV photons and de-excites in steps emitting visible photons."
        ]
      },
      {
        "number": "03.1",
        "question": "State what is meant by coherent wave sources and explain how bright fringes form in Young’s double-slit experiment.",
        "marks": 3,
        "markScheme": [
          "Same frequency/wavelength and constant phase difference; bright fringes occur where path difference = nλ so waves arrive in phase and interfere constructively."
        ]
      },
      {
        "number": "04.3",
        "question": "Compare the stress-strain behaviour of a brittle material (glass) and a ductile material (copper) up to fracture.",
        "marks": 2,
        "markScheme": [
          "Glass obeys Hooke’s law linearly right up to sudden brittle fracture with zero plastic deformation; copper yields past its elastic limit and undergoes extensive plastic deformation/necking before fracture."
        ]
      },
      {
        "number": "06.2",
        "question": "Explain why critical damping is used in vehicle suspension shock absorbers.",
        "marks": 2,
        "markScheme": [
          "Returns the chassis to equilibrium in the shortest possible time after hitting a bump without oscillating past equilibrium."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 2 — Thermal, Fields & Nuclear (7408/2)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7408/2",
    "durationMinutes": 120,
    "totalMarks": 85,
    "insertNote": "Includes AQA Physics Formulae & Constants Data Booklet.",
    "sampleQuestions": [
      {
        "number": "01.3",
        "question": "Explain why more energy is required to vaporise 1 kg of water at 100°C than to melt 1 kg of ice at 0°C.",
        "marks": 2,
        "markScheme": [
          "Vaporisation completely separates molecules against intermolecular hydrogen bonds AND does work pΔV pushing back the atmosphere; melting only slightly loosens the crystal lattice."
        ]
      },
      {
        "number": "03.1",
        "question": "Explain why only 50% of the electrical energy supplied by a constant-voltage battery is stored in a capacitor when it is charged.",
        "marks": 2,
        "markScheme": [
          "Battery moves charge Q through potential difference V doing work W = QV; average voltage across capacitor during charging is ½V so energy stored is ½QV; remaining ½QV is dissipated as heat in circuit resistance."
        ]
      },
      {
        "number": "04.2",
        "question": "Use Lenz’s Law to explain why a strong neodymium magnet falls much more slowly through a vertical copper pipe than through a plastic pipe.",
        "marks": 3,
        "markScheme": [
          "Falling magnet changes magnetic flux linkage through copper walls, inducing eddy currents by Faraday’s law; by Lenz’s law, induced currents create a magnetic field opposing the magnet’s motion (upward magnetic drag force); gravitational potential energy is dissipated as Joule heating."
        ]
      },
      {
        "number": "05.1",
        "question": "Explain how high-level radioactive waste from spent nuclear fuel rods is processed and stored safely.",
        "marks": 3,
        "markScheme": [
          "Stored initially in deep water cooling ponds for several years to decay short-lived isotopes and remove decay heat; vitrified into solid borosilicate glass blocks; sealed in corrosion-resistant stainless steel canisters buried in deep geologically stable underground repositories."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2022-p3",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "A-Level Paper 3A — Practical Skills & Data Analysis (7408/3A)",
    "tier": "A-Level",
    "series": "June 2022",
    "paperCode": "7408/3A",
    "durationMinutes": 120,
    "totalMarks": 80,
    "insertNote": "Assesses Required Practicals 1–12 and data analysis.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Describe how to use a vernier caliper and a digital balance to determine the density of a metal cylinder with minimal uncertainty.",
        "marks": 3,
        "markScheme": [
          "Check zero errors on both instruments; measure diameter at several points/orientations and length with vernier caliper; calculate volume V = πd²L/4 and divide mass by volume."
        ]
      },
      {
        "number": "02.3",
        "question": "In the stationary waves on a string practical, explain how the student varies tension T and finds the fundamental resonant length L.",
        "marks": 2,
        "markScheme": [
          "Vary tension by adding calibrated slotted masses m over the pulley (T = mg); adjust bridge position until maximum antinode amplitude is observed at the centre of the loop."
        ]
      },
      {
        "number": "03.2",
        "question": "Explain why an oscilloscope with high input impedance is suitable for monitoring capacitor discharge voltage.",
        "marks": 1,
        "markScheme": [
          "Draws negligible current from the capacitor so it does not alter the time constant RC of the discharge circuit."
        ]
      },
      {
        "number": "04.1",
        "question": "Explain how plotting 1 / √C_corrected against distance x verifies the inverse-square law for gamma radiation and accounts for source depth.",
        "marks": 2,
        "markScheme": [
          "If C = k / (x + e)², then 1/√C = (x + e)/√k; yields a straight line whose negative x-intercept gives the internal source offset distance e."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-cie-9702",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE International A-Level Paper 4 (9702/42)",
    "tier": "A-Level",
    "series": "May/June 2024",
    "paperCode": "9702/42",
    "durationMinutes": 120,
    "totalMarks": 100,
    "insertNote": "Cambridge International A-Level Physics covering Gravitational/Electric/Magnetic Fields, Oscillations, Ideal Gases & Nuclear Physics.",
    "sampleQuestions": [
      {
        "number": "01.2",
        "question": "Derive the expression for the escape velocity v = √(2GM / R) from the surface of a planet of mass M and radius R.",
        "marks": 2,
        "markScheme": [
          "Minimum kinetic energy needed so total energy at infinity is zero: ½mv² − GMm/R = 0 → v = √(2GM/R)."
        ]
      },
      {
        "number": "03.1",
        "question": "Calculate the root-mean-square speed c_rms of helium atoms (m = 6.64 × 10⁻²⁷ kg) at 300 K (k = 1.38 × 10⁻²³ J K⁻¹).",
        "marks": 2,
        "markScheme": [
          "½m⟨c²⟩ = 3/2 kT → c_rms = √(3kT / m) = √(3 × 1.38×10⁻²³ × 300 ÷ 6.64×10⁻²⁷) = 1367 m s⁻¹ (1370 m s⁻¹)."
        ]
      },
      {
        "number": "05.2",
        "question": "A rectangular 120-turn coil of area 0.015 m² rotates at 50 Hz in a uniform 0.40 T magnetic field. Calculate the peak induced EMF.",
        "marks": 2,
        "markScheme": [
          "ω = 2πf = 100π rad s⁻¹; ε₀ = BANω = 0.40 × 0.015 × 120 × 100π = 226 V."
        ]
      },
      {
        "number": "07.1",
        "question": "Show from R = R₀A^(1/3) that all atomic nuclei share approximately the same nuclear density.",
        "marks": 3,
        "markScheme": [
          "Volume V = (4/3)πR³ = (4/3)πR₀³A; nuclear mass M ≈ Au; density ρ = M/V = u / [(4/3)πR₀³], where A cancels out leaving a constant independent of nucleon number."
        ]
      }
    ]
  },
  {
    "id": "al-phys-pp-2019-old",
    "specEra": "old",
    "year": "2019",
    "title": "Legacy Unit PHYA1 & PHYA4 Combined Archive (2450)",
    "tier": "A-Level",
    "series": "June 2019",
    "paperCode": "2450/PHYA",
    "durationMinutes": 105,
    "totalMarks": 85,
    "insertNote": "Legacy specification archive paper covering quantum phenomena, electricity, mechanics, and fields.",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Define the work function of a metal and threshold frequency in the photoelectric effect.",
        "marks": 2,
        "markScheme": [
          "Work function: minimum photon energy required to liberate an electron from the metal surface; Threshold frequency: minimum frequency of incident EM radiation needed to eject photoelectrons (f₀ = φ/h)."
        ]
      },
      {
        "number": "02.2",
        "question": "State Ohm’s Law and explain why a filament lamp does not obey it as potential difference increases.",
        "marks": 2,
        "markScheme": [
          "Current is directly proportional to potential difference at constant temperature; increasing current heats the filament so lattice ions vibrate more vigorously, increasing electron-ion collision frequency and resistance."
        ]
      },
      {
        "number": "03.3",
        "question": "State the two conditions for an oscillation to be Simple Harmonic Motion.",
        "marks": 2,
        "markScheme": [
          "Acceleration is directly proportional to displacement from equilibrium; acceleration is always directed towards the equilibrium position (a = −ω²x)."
        ]
      },
      {
        "number": "04.1",
        "question": "Define magnetic flux density B and the Tesla.",
        "marks": 2,
        "markScheme": [
          "Force per unit current per unit length on a straight wire placed perpendicular to the magnetic field (B = F / IL); 1 T = 1 N A⁻¹ m⁻¹."
        ]
      }
    ]
  }
];

export const ALEVEL_PHYSICS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "al-phys-kt-1",
    "term": "Activity (A)",
    "definition": "Rate of nuclear decay (decays per second, Bq): A = λN.",
    "topicNumber": 8,
    "subtopicId": "al-phys-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-phys-kt-2",
    "term": "Binding energy",
    "definition": "Minimum energy Δmc² needed to completely separate a nucleus into its individual free nucleons.",
    "topicNumber": 8,
    "subtopicId": "al-phys-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "al-phys-kt-3",
    "term": "Boltzmann constant (k)",
    "definition": "Gas constant per single molecule, k = R/Nₐ = 1.38 × 10⁻²³ J K⁻¹.",
    "topicNumber": 6,
    "subtopicId": "al-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-phys-kt-4",
    "term": "Capacitance (C)",
    "definition": "Charge stored per unit potential difference across a capacitor, C = Q/V (Farads).",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-phys-kt-5",
    "term": "Centripetal force",
    "definition": "Resultant force directed towards the centre of a circular path: F = mv²/r = mω²r.",
    "topicNumber": 6,
    "subtopicId": "al-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-phys-kt-6",
    "term": "Coherent sources",
    "definition": "Wave sources sharing identical frequency/wavelength and a constant phase difference.",
    "topicNumber": 3,
    "subtopicId": "al-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-phys-kt-7",
    "term": "Critical temperature (Tc)",
    "definition": "Temperature at or below which a superconductor’s electrical resistivity drops strictly to zero.",
    "topicNumber": 5,
    "subtopicId": "al-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "al-phys-kt-8",
    "term": "de Broglie wavelength",
    "definition": "Wave-like wavelength λ = h/(mv) associated with any moving particle.",
    "topicNumber": 2,
    "subtopicId": "al-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-phys-kt-9",
    "term": "Decay constant (λ)",
    "definition": "Probability of decay of an individual unstable nucleus per second (s⁻¹); λ = ln 2 / T₁/₂.",
    "topicNumber": 8,
    "subtopicId": "al-phys-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "al-phys-kt-10",
    "term": "Dielectric",
    "definition": "Polar insulating material inserted between capacitor plates to align against the field and boost capacitance.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-phys-kt-11",
    "term": "Eddy currents",
    "definition": "Induced circulating currents in solid transformer cores that waste energy as heat; reduced by laminations.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-3",
    "subtopicCode": "7.3"
  },
  {
    "id": "al-phys-kt-12",
    "term": "Electromotive force (ε)",
    "definition": "Total electrical energy supplied by a source per coulomb of charge driven around a circuit.",
    "topicNumber": 5,
    "subtopicId": "al-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "al-phys-kt-13",
    "term": "Equipotential surface",
    "definition": "Surface of uniform potential always perpendicular to field lines along which zero work is done.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-phys-kt-14",
    "term": "Faraday’s Law",
    "definition": "Induced EMF equals the rate of change of magnetic flux linkage: ε = N ΔΦ/Δt.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-3",
    "subtopicCode": "7.3"
  },
  {
    "id": "al-phys-kt-15",
    "term": "Gravitational potential",
    "definition": "Work done per unit mass bringing a test mass from infinity to a point: V = −GM/r.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "al-phys-kt-16",
    "term": "Impulse",
    "definition": "Force × time (F Δt), equal to change in momentum Δ(mv) and area under an F–t graph.",
    "topicNumber": 4,
    "subtopicId": "al-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "al-phys-kt-17",
    "term": "Internal energy",
    "definition": "Sum of randomly distributed kinetic and potential energies of all molecules in a system.",
    "topicNumber": 6,
    "subtopicId": "al-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "al-phys-kt-18",
    "term": "Lenz’s Law",
    "definition": "Direction of an induced EMF/current always opposes the change in magnetic flux creating it.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-3",
    "subtopicCode": "7.3"
  },
  {
    "id": "al-phys-kt-19",
    "term": "Mass defect (Δm)",
    "definition": "Difference between mass of separated constituent nucleons and mass of the bound nucleus.",
    "topicNumber": 8,
    "subtopicId": "al-phys-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "al-phys-kt-20",
    "term": "Modal dispersion",
    "definition": "Optical fibre pulse broadening caused by rays entering at different angles travelling different path lengths.",
    "topicNumber": 3,
    "subtopicId": "al-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "al-phys-kt-21",
    "term": "Moderator",
    "definition": "Low-mass reactor material (water/graphite) slowing fast fission neutrons via elastic collisions.",
    "topicNumber": 8,
    "subtopicId": "al-phys-8-2",
    "subtopicCode": "8.2"
  },
  {
    "id": "al-phys-kt-22",
    "term": "Pair production",
    "definition": "Conversion of a single high-energy photon (E ≥ 2E₀) into a particle-antiparticle pair.",
    "topicNumber": 2,
    "subtopicId": "al-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "al-phys-kt-23",
    "term": "Polarisation",
    "definition": "Restriction of transverse wave oscillations to a single plane perpendicular to wave propagation.",
    "topicNumber": 3,
    "subtopicId": "al-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "al-phys-kt-24",
    "term": "Resonance",
    "definition": "Maximum-amplitude forced oscillation occurring when driving frequency matches natural frequency f₀.",
    "topicNumber": 6,
    "subtopicId": "al-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-phys-kt-25",
    "term": "Simple harmonic motion",
    "definition": "Periodic motion defined by a = −ω²x where restoring acceleration is proportional and opposite to displacement.",
    "topicNumber": 6,
    "subtopicId": "al-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "al-phys-kt-26",
    "term": "Specific charge",
    "definition": "Ratio of electric charge to mass (Q/m) of a particle or ion in C kg⁻¹.",
    "topicNumber": 2,
    "subtopicId": "al-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "al-phys-kt-27",
    "term": "Stopping potential (Vs)",
    "definition": "Minimum reverse voltage halting the most energetic photoelectrons: eVs = Ek(max).",
    "topicNumber": 2,
    "subtopicId": "al-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-phys-kt-28",
    "term": "Time constant (τ = RC)",
    "definition": "Time for a discharging capacitor’s Q, V, or I to decay to 1/e (37%) of its initial value.",
    "topicNumber": 7,
    "subtopicId": "al-phys-7-2",
    "subtopicCode": "7.2"
  },
  {
    "id": "al-phys-kt-29",
    "term": "Work function (φ)",
    "definition": "Minimum photon energy required to liberate an electron from a metal surface.",
    "topicNumber": 2,
    "subtopicId": "al-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "al-phys-kt-30",
    "term": "Young modulus (E)",
    "definition": "Intrinsic material stiffness equal to tensile stress divided by tensile strain (E = σ/ε) in the linear region.",
    "topicNumber": 4,
    "subtopicId": "al-phys-4-2",
    "subtopicCode": "4.2"
  }
];
