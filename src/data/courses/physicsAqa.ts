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

export const PHYSICS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Energy',
    subtopics: [
      { id: 'phys-1-1', code: '1.1', slug: '1.1-energy-stores-transfers', title: 'Energy Stores, Kinetic & Gravitational Potential Energy', readingMinutes: 9, hasDeepContent: true },
      { id: 'phys-1-2', code: '1.2', slug: '1.2-conservation-efficiency', title: 'Conservation of Energy, Power & Efficiency', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 2,
    title: 'Electricity',
    subtopics: [
      { id: 'phys-2-1', code: '2.1', slug: '2.1-current-pd-resistance', title: 'Current, Potential Difference & Series/Parallel Circuits', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 3,
    title: 'Particle Model of Matter',
    subtopics: [
      { id: 'phys-3-1', code: '3.1', slug: '3.1-density-specific-latent-heat', title: 'Density, Internal Energy & Latent Heat', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 4,
    title: 'Atomic Structure',
    subtopics: [
      { id: 'phys-4-1', code: '4.1', slug: '4.1-radioactive-decay-half-life', title: 'Alpha, Beta, Gamma Radiation & Half-Life', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 5,
    title: 'Forces',
    subtopics: [
      { id: 'phys-5-1', code: '5.1', slug: '5.1-newtons-laws-momentum', title: 'Resultant Forces, F = ma & Stopping Distances', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 6,
    title: 'Waves',
    subtopics: [
      { id: 'phys-6-1', code: '6.1', slug: '6.1-transverse-longitudinal-waves', title: 'Transverse & Longitudinal Waves (v = fλ)', readingMinutes: 9, hasDeepContent: true },
    ],
  },
  {
    number: 7,
    title: 'Magnetism and Electromagnetism',
    subtopics: [
      { id: 'phys-7-1', code: '7.1', slug: '7.1-motor-effect-transformers', title: 'Magnetic Fields, Motor Effect & Transformers', readingMinutes: 10, hasDeepContent: true },
    ],
  },
  {
    number: 8,
    title: 'Space Physics',
    subtopics: [
      { id: 'phys-8-1', code: '8.1', slug: '8.1-life-cycle-stars-redshift', title: 'Life Cycle of Stars & Red-Shift', readingMinutes: 9, hasDeepContent: true },
    ],
  },
];

export const PHYSICS_NOTES: Record<string, NoteLesson> = {
  'phys-1-1': {
    subtopicId: 'phys-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Energy Stores, Kinetic & Gravitational Potential Energy',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Energy Stores, Transferring Energy & Work Done',
    youtubeId: 'JGwcDCeYRYo',
    videoChannel: 'Cognito',
    videoDuration: '5:09',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Conservation of Energy Principle', cardId: 'phys-1-1-c1' },
      { time: '1:05', seconds: 65, label: 'The 8 Energy Stores', cardId: 'phys-1-1-c1' },
      { time: '2:45', seconds: 165, label: 'Energy Transfer Pathways', cardId: 'phys-1-1-c1' },
      { time: '3:55', seconds: 235, label: 'Mechanical & Electrical Work Done', cardId: 'phys-1-1-c2' },
    ],
    cards: [
      {
        id: 'phys-1-1-c1',
        title: 'Energy Stores & Pathways',
        summary: 'The 8 energy stores, 4 transfer pathways, and closed systems.',
        bullets: [
          '**The 8 energy stores:** Kinetic, Gravitational potential, Elastic potential, Thermal, Chemical, Magnetic, Electrostatic, and Nuclear.',
          'Energy is transferred between stores by 4 pathways: Mechanical work (a force moving an object), Electrical work (charges moving through a p.d.), Heating, and Radiation (light/sound waves).',
          'A closed system experiences no net change in total energy — energy can only be transferred usefully, stored, or dissipated.',
        ],
        glossaryPills: [
          {
            term: 'closed system',
            definition: 'An object or group of objects where neither matter nor energy can enter or leave, so total energy remains strictly constant.',
          },
        ],
        memoryAid: 'Remember Kinetic = ½mv² (velocity is squared, so doubling speed quadruples kinetic energy!).',
      },
      {
        id: 'phys-1-1-c2',
        title: 'Kinetic, Gravitational & Elastic Potential Equations',
        summary: 'Calculating kinetic (Ek), gravitational (Ep), and elastic (Ee) potential energy.',
        bullets: [
          '**Kinetic energy:** Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m).',
          '**Gravitational potential energy:** Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth.',
          'Elastic potential energy stored in a stretched spring (up to limit of proportionality): **Ee = 0.5 × spring constant k (N/m) × extension² (m)**.',
          '**Specific heat capacity** links thermal store change to temperature rise: ΔE = m × c × Δθ.',
        ],
        commonMistake: 'Always convert mass from grams (g) to kilograms (kg) by dividing by 1,000 and extension from cm to m before using Ek, Ep, or Ee!',
      },
      {
        id: 'phys-1-1-c3',
        title: 'Worked Conservation of Energy Example',
        summary: 'Equating gravitational potential energy lost to kinetic energy gained.',
        bullets: [
          'When a 2.0 kg ball drops from a 5.0 m ledge (ignoring air resistance), all Ep lost converts into Ek gained.',
          'Ep = mgh = 2.0 × 9.8 × 5.0 = 98 J → Ek = 98 J just before hitting the ground.',
          '**Find impact speed:** 98 = 0.5 × 2.0 × v² → v² = 98 → v = √98 ≈ 9.9 m/s.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Kinetic energy', definition: 'Energy stored in a moving object: Ek = ½mv².' },
      { term: 'Dissipation', definition: 'Energy spreading out into less useful thermal stores in the surroundings.' },
      { term: 'Elastic potential energy', definition: 'Energy stored in a stretched or compressed elastic object: Ee = ½ke².' },
    ],
    checklistPoints: [
      'Recall all 8 energy stores and 4 energy transfer pathways.',
      'Calculate Ek = ½mv², Ep = mgh, and Ee = ½ke² using SI units (kg, m, m/s).',
      'Equate Ep lost to Ek gained for falling objects with negligible air resistance.',
    ],
  },
  'phys-1-2': {
    subtopicId: 'phys-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Conservation of Energy, Power & Efficiency',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Efficiency | Energy & Power',
    youtubeId: 'KbrqbW0um0Y',
    videoChannel: 'Cognito',
    videoDuration: '5:36',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'phys-1-2-c1' },
      { time: '1:15', seconds: 75, label: 'How to Calculate Efficiency', cardId: 'phys-1-2-c2' },
      { time: '3:15', seconds: 195, label: 'Common Mistakes When Calculating Efficiency', cardId: 'phys-1-2-c2' },
      { time: '4:35', seconds: 275, label: 'Waste Energy & 100% Efficiency', cardId: 'phys-1-2-c3' },
    ],
    cards: [
      {
        id: 'phys-1-2-c1',
        title: 'Reducing Unwanted Energy Transfers',
        summary: 'Cutting wasted thermal dissipation using lubrication and low-conductivity insulation.',
        bullets: [
          '**Principle of conservation of energy:** Energy cannot be created or destroyed, only transferred usefully, stored, or dissipated into thermal stores of the surroundings.',
          'Lubrication (oil/grease) reduces friction between moving mechanical parts, cutting unwanted heating.',
          'Thermal insulation reduces heat loss from buildings: thicker walls and materials with LOWER thermal conductivity (cavity wall foam, double glazing, loft fibreglass) slow the rate of conduction.',
        ],
        glossaryPills: [
          {
            term: 'thermal conductivity',
            definition: 'A measure of how quickly thermal energy transfers through a material by conduction; good insulators have very low thermal conductivity.',
          },
        ],
      },
      {
        id: 'phys-1-2-c2',
        title: 'Power & Efficiency Calculations',
        summary: 'Calculating power (P = E/t) and efficiency as a decimal or percentage.',
        bullets: [
          'Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second).',
          'Two motors lifting the same weight to the same height do identical work, but the motor completing the lift in HALF the time has TWICE the power.',
          'Efficiency = Useful output energy transfer ÷ Total input energy transfer (or Useful power output ÷ Total power input). Multiply by 100 for a percentage.',
          '**Worked example:** A lamp takes in 60 J/s (60 W) and outputs 45 W as light. Efficiency = 45 ÷ 60 = 0.75 (or 75%). The remaining 15 W dissipates as heat.',
        ],
        commonMistake: 'Efficiency can NEVER exceed 1.0 (or 100%). If your calculation gives 1.33, you divided total input by useful output upside down!',
      },
      {
        id: 'phys-1-2-c3',
        title: 'National & Global Energy Resources',
        summary: 'Evaluating renewable vs non-renewable electricity resources on reliability and CO₂.',
        bullets: [
          '**Non-renewable** resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain).',
          '**Renewable** resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation.',
          'Transitioning to renewables involves balancing environmental benefits against intermittency (wind/solar depend on weather), high upfront construction costs, and visual/habitat impacts.',
        ],
        memoryAid: 'Efficiency = Useful ÷ Total (always a smaller number divided by a bigger number, ≤ 1)!',
      },
    ],
    keyTerms: [
      { term: 'Power', definition: 'Rate at which energy is transferred or work is done: P = E ÷ t (W).' },
      { term: 'Efficiency', definition: 'Fraction or percentage of input energy transferred usefully.' },
      { term: 'Thermal conductivity', definition: 'Rate at which heat conducts through a material; lower values mean better insulation.' },
    ],
    checklistPoints: [
      'Explain how lubrication and low thermal conductivity insulation reduce unwanted dissipation.',
      'Calculate power using P = E/t = W/t and efficiency as a decimal or percentage.',
      'Compare reliability and environmental impacts of renewable and non-renewable energy resources.',
    ],
  },
  'phys-2-1': {
    subtopicId: 'phys-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Current, Potential Difference & Series/Parallel Circuits',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Voltage, Current & Resistance | V = IR Equation | IV Graphs',
    youtubeId: 'BbizKa6eywo',
    videoChannel: 'Cognito',
    videoDuration: '4:35',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to V=IR (Ohm\'s Law)', cardId: 'phys-2-1-c1' },
      { time: '0:45', seconds: 45, label: 'Calculating Resistance by Rearranging V=IR', cardId: 'phys-2-1-c1' },
      { time: '2:05', seconds: 125, label: 'How Resistance Value Affects the I-V Graph', cardId: 'phys-2-1-c2' },
      { time: '3:04', seconds: 184, label: 'I-V Graphs for Filament Lamps and Diodes', cardId: 'phys-2-1-c2' },
    ],
    cards: [
      {
        id: 'phys-2-1-c1',
        title: 'Charge, Current, Potential Difference & Resistance',
        summary: 'Applying Q = It, V = IR, and series vs parallel circuit rules.',
        diagram: 'circuit-series-parallel',
        bullets: [
          'Electric current (I, amps) is the rate of flow of electrical charge: **Q = I × t** (charge Q in coulombs, C).',
          'Potential difference (V, volts) is the energy transferred per coulomb of charge: E = Q × V. Ohm’s Law: **V = I × R** (resistance R in ohms, Ω).',
          '**In Series:** Current is identical everywhere (I₁ = I₂); total resistance adds up (R_total = R₁ + R₂); potential difference is shared between components.',
          '**In Parallel:** Potential difference across every branch equals the supply voltage; current splits between branches; adding resistors in parallel DECREASES total resistance because charge has extra paths.',
        ],
        glossaryPills: [
          {
            term: 'potential difference',
            definition: 'Work done (energy transferred) per coulomb of electrical charge moving between two points in a circuit (1 V = 1 J/C).',
          },
        ],
      },
      {
        id: 'phys-2-1-c2',
        title: 'I–V Characteristics, Thermistors & LDRs',
        summary: 'Explaining I–V graphs for resistors, lamps, diodes, thermistors, and LDRs.',
        bullets: [
          'Ohmic conductor (fixed resistor at constant temperature): I–V graph is a straight line through the origin (R is constant).',
          '**Filament lamp:** S-shaped curve flattening at high V — as current heats the filament, vibrating metal ions collide more with electrons, INCREASING resistance.',
          '**Diode:** Very high resistance in reverse direction (zero current); conducts sharply in forward direction above ~0.6 V.',
          '**Thermistor (NTC):** Resistance DECREASES as temperature increases (thermostats/incubators). LDR: Resistance DECREASES as light intensity increases (automatic night lights).',
        ],
        memoryAid: 'For BOTH Thermistors and LDRs, MORE input (more heat or more light) = LESS resistance!',
      },
      {
        id: 'phys-2-1-c3',
        title: 'Mains Electricity, Electrical Power & The National Grid',
        summary: 'UK 230 V mains wiring safety, electrical power, and National Grid transformers.',
        bullets: [
          'UK mains electricity is alternating current (AC) at 230 V and 50 Hz. Three-core cable: Live (brown, 230 V), Neutral (blue, 0 V), Earth (green/yellow, safety wire connected to metal casing).',
          '**Power formulas:** P = V × I = I² × R; Energy transferred: E = P × t = Q × V.',
          'The National Grid uses step-up transformers to increase voltage (up to 400,000 V) and decrease current so thermal energy wasted in cables (P = I²R) is minimised, then step-down transformers lower voltage back to a safe 230 V for homes.',
        ],
        commonMistake: 'Do NOT write that the live wire is safe when a switch is off if the switch was wired in the neutral wire — switches and fuses belong ONLY in the live wire!',
      },
    ],
    keyTerms: [
      { term: 'Current', definition: 'Rate of flow of electrical charge measured in amperes (A): Q = It.' },
      { term: 'Potential difference', definition: 'Energy transferred per unit charge passed between two points, measured in volts (V).' },
      { term: 'Ohmic conductor', definition: 'Component whose current is directly proportional to p.d. at constant temperature.' },
    ],
    checklistPoints: [
      'Apply Q = It, V = IR, P = VI = I²R, and E = QV accurately.',
      'Compare series and parallel circuit rules and sketch I–V graphs for resistor, lamp, and diode.',
      'Explain UK mains wiring safety and how National Grid transformers cut I²R cable losses.',
    ],
  },
  'phys-3-1': {
    subtopicId: 'phys-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Density, Internal Energy & Latent Heat',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Specific Latent Heat - Vaporisation & Fusion | Equation',
    youtubeId: 'VFwf1JldiJA',
    videoChannel: 'Cognito',
    videoDuration: '6:29',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Specific Latent Heat', cardId: 'phys-3-1-c1' },
      { time: '1:34', seconds: 94, label: 'State Changes on a Cooling Curve', cardId: 'phys-3-1-c2' },
      { time: '2:41', seconds: 161, label: 'Specific Latent Heat of Vaporisation vs Fusion', cardId: 'phys-3-1-c2' },
      { time: '5:17', seconds: 317, label: 'Specific Latent Heat Calculation Example', cardId: 'phys-3-1-c2' },
    ],
    cards: [
      {
        id: 'phys-3-1-c1',
        title: 'Density & Particle Model of States of Matter',
        summary: 'Particle density (ρ = m/V), the Eureka can practical, and state changes.',
        bullets: [
          'Density = mass ÷ volume: **ρ = m ÷ V** (kg/m³). Solids are usually densest because particles are tightly packed in a regular arrangement; gases have very low density due to huge gaps between fast-moving particles.',
          '**Required practical (irregular solid density):** Measure mass m on an electronic balance; submerge the object gently into a Eureka can filled to the spout and collect displaced water in a measuring cylinder to find volume V; calculate **ρ = m ÷ V**.',
          'Changes of state (melting, freezing, boiling, condensing, sublimating) are PHYSICAL changes — mass is conserved and no new substances form, though the substance’s internal energy changes.',
        ],
        glossaryPills: [
          {
            term: 'internal energy',
            definition: 'The total kinetic energy and potential energy stored by all particles (atoms and molecules) making up a system.',
          },
        ],
      },
      {
        id: 'phys-3-1-c2',
        title: 'Internal Energy, Specific Heat Capacity & Specific Latent Heat',
        summary: 'Distinguishing ΔE = mcΔθ from specific latent heat E = mL plateaus.',
        bullets: [
          'Heating a system increases its internal energy — either raising temperature (increasing particles’ **kinetic energy**: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break).',
          'Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: **E = m × L** (units of L: J/kg).',
          '**Specific latent heat** of FUSION = solid ↔ liquid (melting/freezing). Specific latent heat of VAPORISATION = liquid ↔ gas (boiling/condensing — usually much larger because intermolecular forces must be completely overcome).',
          '**Worked example:** How much energy melts 0.40 kg of ice at 0 °C (L_f = 334,000 J/kg)? E = 0.40 × 334,000 = 133,600 J (133.6 kJ).',
        ],
        commonMistake: 'Use ΔE = mcΔθ on the SLOPING parts of a heating graph (temperature changing) and E = mL on the FLAT plateaus (state changing at constant temperature)!',
      },
      {
        id: 'phys-3-1-c3',
        title: 'Particle Motion in Gases & Boyle’s Law',
        summary: 'Explaining gas pressure via particle collisions and applying pV = constant.',
        bullets: [
          'Gas molecules move rapidly in random motion. Collisions with container walls exert a net outward force at right angles to the wall, creating pressure.',
          'At constant volume, raising gas temperature increases average **kinetic energy** → faster, harder, and more frequent collisions → higher pressure.',
          'At constant temperature for a fixed mass of gas: pressure × volume = constant (pV = constant). Doing work to compress a gas rapidly (e.g., bicycle pump) transfers energy to its internal store, raising its temperature!',
        ],
        memoryAid: 'Fusion = Freezing/melting (solid ↔ liquid); Vaporisation = Vapour (liquid ↔ gas).',
      },
    ],
    keyTerms: [
      { term: 'Density', definition: 'Mass per unit volume: ρ = m ÷ V (kg/m³).' },
      { term: 'Internal energy', definition: 'Sum of kinetic and potential energies of all particles inside a system.' },
      { term: 'Specific latent heat', definition: 'Energy needed to change the state of 1 kg of a substance with no temperature change: E = mL.' },
    ],
    checklistPoints: [
      'Describe the Eureka can practical to determine the density of irregular solids.',
      'Distinguish ΔE = mcΔθ (temperature change) from E = mL (state change: fusion vs vaporisation).',
      'Explain gas pressure using particle collisions and apply pV = constant at fixed temperature.',
    ],
  },
  'phys-4-1': {
    subtopicId: 'phys-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Alpha, Beta, Gamma Radiation & Half-Life',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Radioactive Decay & Half-life | How to Calculate Activity & Half-life',
    youtubeId: 'wvgT52mwM3Y',
    videoChannel: 'Cognito',
    videoDuration: '6:48',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Radioactive Decay', cardId: 'phys-4-1-c1' },
      { time: '1:33', seconds: 93, label: 'What is Half-life?', cardId: 'phys-4-1-c2' },
      { time: '3:44', seconds: 224, label: 'Calculating Half-life from a Graph', cardId: 'phys-4-1-c3' },
      { time: '5:14', seconds: 314, label: 'Half-Life Calculation Example', cardId: 'phys-4-1-c3' },
    ],
    cards: [
      {
        id: 'phys-4-1-c1',
        title: 'Development of the Atomic Model & Isotopes',
        summary: 'How Rutherford, Bohr, and Chadwick overturned the Plum Pudding Model.',
        diagram: 'atomic-structure',
        bullets: [
          'Thomson’s Plum Pudding Model imagined a positively charged sphere studded with negative electrons.',
          'Rutherford’s alpha particle scattering experiment disproved it: most alpha particles passed straight through gold foil (atom is mostly empty space), while a tiny fraction deflected sharply back (mass and positive charge sit in a tiny dense nucleus).',
          'Niels Bohr refined the nuclear model so electrons orbit at fixed energy levels (shells); James Chadwick later discovered uncharged neutrons in the nucleus, explaining isotopes (same proton number, different neutron number).',
        ],
      },
      {
        id: 'phys-4-1-c2',
        title: 'Alpha, Beta & Gamma Decay Equations',
        summary: 'Properties and balanced nuclear decay equations for alpha, beta, and gamma.',
        bullets: [
          'Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life.',
          'Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.',
          'Beta (⁰₋₁e): Fast electron ejected when a neutron turns into a proton. Moderately ionising, stopped by ~5 mm aluminium. Mass number stays the same; atomic number INCREASES by 1: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.',
          'Gamma (γ): High-frequency **electromagnetic** wave, weakly ionising, reduced by thick lead/concrete. Causes NO change to mass or atomic number.',
        ],
        glossaryPills: [
          {
            term: 'half-life',
            definition: 'The time taken for the number of radioactive nuclei in an isotope to halve, or for its count rate to fall to half its initial level.',
          },
        ],
        memoryAid: 'Stopping materials: Paper (α), Aluminium (β), Lead (γ) — P-A-L!',
      },
      {
        id: 'phys-4-1-c3',
        title: 'Half-Life, Contamination vs Irradiation & Fission/Fusion',
        summary: 'Half-life ratios, irradiation vs contamination, and nuclear fission vs fusion.',
        bullets: [
          '**Half-life:** Time for undecayed nuclei (or count rate) to halve. Example: 400 Bq dropping to 50 Bq requires 3 halvings (400 → 200 → 100 → 50); if this takes 24 hours, half-life = 24 ÷ 3 = 8 hours.',
          'Irradiation is exposing an object to radiation from an external source (does NOT make the object radioactive; stopped by lead shielding/distance). Contamination is unwanted radioactive atoms getting ON or INSIDE an object (continues emitting radiation until decayed/removed — alpha is most dangerous inside the body!).',
          'Nuclear Fission splits a large nucleus (U-235) after neutron absorption into two daughter nuclei + 2–3 neutrons + energy (chain reaction controlled by boron control rods). Nuclear Fusion joins two light nuclei (hydrogen → helium) at ultra-high core star temperatures, converting a tiny fraction of mass into huge energy.',
        ],
        commonMistake: 'Students often claim an irradiated surgical tool becomes radioactive — IT DOES NOT! Only CONTAMINATION transfers radioactive atoms onto the object.',
      },
    ],
    keyTerms: [
      { term: 'Becquerel (Bq)', definition: 'Unit of radioactive activity equal to 1 nuclear decay per second.' },
      { term: 'Half-life', definition: 'Time taken for half the radioactive nuclei in a sample to decay.' },
      { term: 'Contamination', definition: 'Unwanted presence of materials containing radioactive atoms on or inside another material.' },
    ],
    checklistPoints: [
      'Compare Plum Pudding, Rutherford nuclear, Bohr shells, and Chadwick’s neutron discovery.',
      'Write balanced alpha and beta nuclear equations and compute net decline ratios using half-life.',
      'Distinguish irradiation from contamination and nuclear fission from nuclear fusion.',
    ],
  },
  'phys-5-1': {
    subtopicId: 'phys-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'Resultant Forces, F = ma & Stopping Distances',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Newton\'s 1st & 2nd Laws | Circular Motion | Inertia',
    youtubeId: 'D8XOm4swxOU',
    videoChannel: 'Cognito',
    videoDuration: '6:36',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'phys-5-1-c1' },
      { time: '1:11', seconds: 71, label: 'Newton\'s Second Law', cardId: 'phys-5-1-c1' },
      { time: '3:05', seconds: 185, label: 'Circular Motion', cardId: 'phys-5-1-c2' },
      { time: '5:10', seconds: 310, label: 'Inertia & Inertial Mass', cardId: 'phys-5-1-c3' },
    ],
    cards: [
      {
        id: 'phys-5-1-c1',
        title: 'Newton’s Three Laws & Resultant Forces',
        summary: 'Resultant forces, inertial mass, and Newton’s First, Second, and Third Laws.',
        diagram: 'forces-free-body',
        bullets: [
          '**Newton’s First Law:** If resultant force is 0 N, a stationary object stays stationary and a moving object continues at constant velocity (same speed AND direction).',
          '**Newton’s Second Law:** Resultant force (N) = mass (kg) × acceleration (m/s²): **F = m × a**. Inertial mass = F ÷ a measures how hard it is to change an object’s velocity.',
          '**Newton’s Third Law:** Whenever two objects interact, the forces they exert on each other are equal in magnitude and opposite in direction (e.g., rocket pushes exhaust down, exhaust pushes rocket up).',
        ],
        glossaryPills: [
          {
            term: 'resultant force',
            definition: 'The single overall force having the exact same effect on an object’s motion as all individual acting forces combined.',
          },
        ],
      },
      {
        id: 'phys-5-1-c2',
        title: 'Uniform Acceleration & Terminal Velocity',
        summary: 'Applying v² − u² = 2as, velocity–time graphs, and terminal velocity.',
        bullets: [
          '**Kinematics formulas:** **a = (v − u) ÷ t** and **v² − u² = 2 × a × s** (where s is distance in metres).',
          'On a velocity–time graph, gradient = acceleration and area under the line = distance travelled.',
          'Falling objects reach TERMINAL VELOCITY when upward air resistance grows to balance downward weight (resultant force = 0 N → constant maximum speed).',
        ],
      },
      {
        id: 'phys-5-1-c3',
        title: 'Stopping Distances & Momentum Safety',
        summary: 'Thinking vs braking stopping distances and momentum safety features.',
        bullets: [
          'Stopping Distance = Thinking Distance + Braking Distance.',
          'Thinking distance (distance travelled during driver reaction time, ~0.2–0.9 s) increases with speed, tiredness, alcohol/drugs, and distractions (phone).',
          'Braking distance (distance under brakes until stopping) increases with speed² (doubling speed quadruples braking distance because **Ek = ½mv²** = F × d!), wet/icy roads, worn tyres, or worn brake pads.',
          'Momentum **p = m × v** (conserved in closed collisions). Force = rate of change of momentum: F = (mv − mu) ÷ Δt. Crumple zones, airbags, and cycle helmets increase collision duration Δt to drastically lower impact force F.',
        ],
        commonMistake: 'Do NOT list "icy road" as affecting thinking distance — road/tyre conditions affect BRAKING distance only; driver state (drugs, fatigue, distraction) affects THINKING distance; SPEED affects BOTH!',
      },
    ],
    keyTerms: [
      { term: 'Resultant force', definition: 'Single overall force having the same effect on motion as all individual forces combined.' },
      { term: 'Thinking distance', definition: 'Distance a vehicle travels between the driver spotting a hazard and applying the brakes.' },
      { term: 'Momentum', definition: 'Product of mass and velocity (p = mv), conserved in closed collisions.' },
    ],
    checklistPoints: [
      'Apply Newton’s three laws, F = ma, and v² − u² = 2as to motion problems.',
      'Separate factors affecting thinking distance vs braking distance (and explain why speed affects both).',
      'Use F = Δp/Δt to explain car crumple zones, seatbelts, and airbags.',
    ],
  },
  'phys-6-1': {
    subtopicId: 'phys-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Transverse & Longitudinal Waves (v = fλ)',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Longitudinal & Transverse Waves - Labelling & Calculating Wave Speed',
    youtubeId: '1DFAy8MXkMA',
    videoChannel: 'Cognito',
    videoDuration: '6:40',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Waves', cardId: 'phys-6-1-c1' },
      { time: '2:02', seconds: 122, label: 'Labelling a Wave (Displacement-Time Graph)', cardId: 'phys-6-1-c1' },
      { time: '3:42', seconds: 222, label: 'The Wave Speed Equation', cardId: 'phys-6-1-c1' },
      { time: '4:42', seconds: 282, label: 'Transverse vs Longitudinal Waves', cardId: 'phys-6-1-c1' },
    ],
    cards: [
      {
        id: 'phys-6-1-c1',
        title: 'Wave Properties & The Wave Equation',
        summary: 'Transverse vs longitudinal oscillations, v = fλ, and ripple tank measurements.',
        diagram: 'transverse-wave',
        bullets: [
          'Waves transfer ENERGY without transferring matter. Amplitude = max displacement from undisturbed position; Wavelength λ = distance from crest to adjacent crest; Frequency f = complete waves passing a point per second (Hz); Period **T = 1 ÷ f**.',
          '**Transverse waves** (all EM waves, water ripples, S-waves): oscillations are PERPENDICULAR (90°) to energy transfer.',
          '**Longitudinal waves** (sound, ultrasound, P-waves): oscillations are PARALLEL to energy transfer, forming compressions and rarefactions.',
          '**Wave speed equation:** **v = f × λ** (m/s = Hz × m). In the ripple tank practical, measure the length of 10 waves and divide by 10 for accurate λ, and count waves passing a mark in 10 s ÷ 10 for f.',
        ],
        glossaryPills: [
          {
            term: 'wavelength',
            definition: 'Distance from a point on one wave to the equivalent point on the adjacent wave (metres).',
          },
        ],
      },
      {
        id: 'phys-6-1-c2',
        title: 'Refraction & Wavefront Diagrams',
        summary: 'Why wavefronts bend toward the normal when slowing into denser media.',
        bullets: [
          'When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal.',
          'During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged.',
          'A ray striking the boundary straight along the normal (angle of incidence = 0°) slows down but does NOT change direction.',
        ],
      },
      {
        id: 'phys-6-1-c3',
        title: 'The Electromagnetic Spectrum & Hazards',
        summary: 'Order, origins, uses, and ionising hazards across the EM spectrum.',
        bullets: [
          'Continuous spectrum of **transverse waves** travelling at 3.0 × 10⁸ m/s in vacuum (long λ → short λ): Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays.',
          'Radio waves are produced by oscillations in electrical circuits; gamma rays originate from changes inside atomic nuclei.',
          'UV, X-rays, and gamma rays are ionising radiation — UV causes premature skin ageing and skin cancer; X-rays and gamma rays can mutate DNA and cause cancer (radiation dose is measured in sieverts, Sv).',
        ],
        memoryAid: 'EM order (low f → high f): Rich Men In Vegas Use X-ray Glasses!',
      },
    ],
    keyTerms: [
      { term: 'Frequency', definition: 'Number of complete waves passing a fixed point each second, measured in hertz (Hz).' },
      { term: 'Wavelength', definition: 'Distance from a point on one wave to the equivalent point on the adjacent wave.' },
      { term: 'Refraction', definition: 'Change in wave direction caused by a change in wave speed when entering a different medium at an angle.' },
    ],
    checklistPoints: [
      'Distinguish transverse and longitudinal waves and measure wave speed in a ripple tank.',
      'Apply v = fλ and T = 1/f with standard unit prefixes (kHz, MHz, cm).',
      'Recall the full EM spectrum order, uses, and ionising hazards.',
    ],
  },
  'phys-7-1': {
    subtopicId: 'phys-7-1',
    subtopicCode: '7.1',
    subtopicTitle: 'Magnetic Fields, Motor Effect & Transformers',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Motor Effect - How to Find Force Direction & Strength',
    youtubeId: 'XWL8963-AuQ',
    videoChannel: 'Cognito',
    videoDuration: '4:56',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to the Motor Effect', cardId: 'phys-7-1-c1' },
      { time: '1:12', seconds: 72, label: 'Finding the Direction of the Force', cardId: 'phys-7-1-c2' },
      { time: '3:05', seconds: 185, label: 'Calculating the Strength of the Force', cardId: 'phys-7-1-c2' },
      { time: '3:40', seconds: 220, label: 'Force Calculation Worked Example', cardId: 'phys-7-1-c2' },
    ],
    cards: [
      {
        id: 'phys-7-1-c1',
        title: 'Magnetic Fields, Induced Magnets & Electromagnets',
        summary: 'Permanent vs induced magnets, right-hand thumb rule, and solenoids.',
        bullets: [
          'Permanent magnets produce their own constant magnetic field; induced magnets (iron, steel, cobalt, nickel) become magnetic only when placed inside a magnetic field and ALWAYS experience an ATTRACTIVE force.',
          'Field lines point from NORTH to SOUTH and are densest at the poles where the field is strongest.',
          'A current in a straight wire generates circular concentric magnetic field lines (Right-Hand Thumb Rule). Shaping the wire into a SOLENOID creates a uniform strong field inside (like a bar magnet) that becomes an electromagnet when an iron core is inserted.',
        ],
        glossaryPills: [
          {
            term: 'solenoid',
            definition: 'A long helical coil of insulated wire that produces a strong, uniform magnetic field inside when electric current passes through it.',
          },
        ],
      },
      {
        id: 'phys-7-1-c2',
        title: 'The Motor Effect, F = BIl & DC Motors',
        summary: 'Applying F = BIl, Fleming’s Left-Hand Rule, DC motors, and loudspeakers.',
        bullets: [
          'When a wire carrying current I sits at 90° to a magnetic field of flux density B (tesla, T), it experiences a force: **F = B × I × l** (where l is wire length inside the field in metres).',
          '**Fleming’s LEFT-Hand Rule gives the direction:** ThuMb = Force/Motion, First finger = Field (N → S), SeCond finger = Conventional Current (+ → −).',
          'Electric motors & loudspeakers use the motor effect: in a DC motor, a split-ring commutator swaps coil contacts every half-turn to reverse current and keep torque rotating in the same direction. In a loudspeaker, varying AC audio currents push a coil/cone back and forth to create sound pressure waves.',
        ],
        memoryAid: 'F = BIl (remember "Force equals Bill") and LEFT hand for motors!',
      },
      {
        id: 'phys-7-1-c3',
        title: 'The Generator Effect & Transformers',
        summary: 'Alternators vs dynamos, microphones, and AC step-up/step-down transformers.',
        bullets: [
          '**Generator effect (electromagnetic induction):** Moving a conductor relative to a magnetic field (or changing a magnetic field through a coil) induces a potential difference across the wire — and an induced current if in a complete circuit.',
          'Alternators use SLIP RINGS to output alternating current (AC); Dynamos use a SPLIT-RING COMMUTATOR to output direct current (DC). Microphones use sound vibrations on a diaphragm to move a coil near a magnet, inducing an electrical audio signal.',
          'Transformers (AC ONLY!): Primary alternating current creates an alternating magnetic field in the iron core, inducing an alternating p.d. in the secondary coil. Equations: Vp ÷ Vs = np ÷ ns and (100% efficient) VpIp = VsIs.',
        ],
        commonMistake: 'Transformers DO NOT work with direct current (DC) because a steady DC current produces an unchanging magnetic field — inducing ZERO voltage in the secondary coil!',
      },
    ],
    keyTerms: [
      { term: 'Magnetic flux density (B)', definition: 'Strength of a magnetic field measured in tesla (T), used in F = BIl.' },
      { term: 'Motor effect', definition: 'Force exerted on a current-carrying conductor placed at an angle to a magnetic field.' },
      { term: 'Transformer', definition: 'Device with primary and secondary coils on an iron core that steps alternating voltage up or down.' },
    ],
    checklistPoints: [
      'Apply F = BIl and Fleming’s Left-Hand Rule to wires, DC motors, and loudspeakers.',
      'Contrast alternators (AC, slip rings) with dynamos (DC, split-ring commutator).',
      'Solve transformer problems using Vp/Vs = np/ns and VpIp = VsIs and explain why AC is mandatory.',
    ],
  },
  'phys-8-1': {
    subtopicId: 'phys-8-1',
    subtopicCode: '8.1',
    subtopicTitle: 'Life Cycle of Stars & Red-Shift',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Life Cycle of Stars | How Stars are Formed & Destroyed',
    youtubeId: 'V69KZun35K8',
    videoChannel: 'Cognito',
    videoDuration: '6:31',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to the Life Cycle of Stars', cardId: 'phys-8-1-c1' },
      { time: '0:55', seconds: 55, label: 'Nuclear Fusion and Main Sequence Stars', cardId: 'phys-8-1-c2' },
      { time: '2:57', seconds: 177, label: 'Transition from Red Giant to White Dwarf and Black Dwarf', cardId: 'phys-8-1-c2' },
      { time: '4:17', seconds: 257, label: 'Formation of a Neutron Star or Black Hole', cardId: 'phys-8-1-c2' },
    ],
    cards: [
      {
        id: 'phys-8-1-c1',
        title: 'Circular Orbits & Gravity',
        summary: 'Why circular orbits have constant speed yet changing velocity and acceleration.',
        bullets: [
          'Gravity supplies the inward centripetal force that keeps planets orbiting the Sun and natural/artificial satellites orbiting planets.',
          'For a circular orbit at constant SPEED, the object’s DIRECTION is constantly changing → therefore its VELOCITY is changing → it is continuously accelerating toward the centre of the orbit!',
          'If a satellite’s orbital speed increases, it must move to a SMALLER radius orbit to stay in stable circular motion (where gravitational pull is stronger); lower speeds require larger orbital radii.',
        ],
        commonMistake: 'Never write "a planet in a circular orbit has constant velocity" — its SPEED is constant, but its VELOCITY constantly changes because direction keeps changing!',
      },
      {
        id: 'phys-8-1-c2',
        title: 'Life Cycle of Stars & Element Synthesis',
        summary: 'Stellar evolution for Sun-sized vs massive stars and heavy-element synthesis.',
        bullets: [
          'All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium.',
          '**Main sequence stage:** Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion.',
          '**Stars about the same size as the Sun:** Main Sequence → Red Giant → White Dwarf → Black Dwarf (cooled remnant).',
          '**Stars MUCH more massive than the Sun:** Main Sequence → Red Supergiant → Supernova → Neutron Star (or Black Hole for the heaviest cores).',
          'Fusion in stars creates all naturally occurring elements up to IRON; only a SUPERNOVA explosion creates heavier elements (like gold and uranium) and scatters them across space to form new planets.',
        ],
        glossaryPills: [
          {
            term: 'supernova',
            definition: 'Colossal explosion ending the life of a massive red supergiant, forging elements heavier than iron and dispersing them through space.',
          },
        ],
        memoryAid: 'Sun-sized = Giant → White Dwarf → Black Dwarf. Massive = Supergiant → Supernova → Neutron Star / Black Hole!',
      },
      {
        id: 'phys-8-1-c3',
        title: 'Red-Shift & Evidence for The Big Bang',
        summary: 'Galactic red-shift, the Big Bang Theory, and accelerating expansion.',
        bullets: [
          'Red-shift is the observed increase in wavelength of light arriving from distant galaxies — absorption lines shift toward the red end of the spectrum because galaxies are moving away as space itself expands.',
          'The further away a galaxy is, the GREATER its red-shift and the FASTER it is receding away from us.',
          'This supports the **Big Bang Theory** (the Universe began ~13.8 billion years ago from a tiny, hot, dense region that has been expanding ever since).',
          'Recent observations of distant supernovae since 1998 show the expansion of the Universe is actually ACCELERATING — leading physicists to hypothesise Dark Energy alongside Dark Matter.',
        ],
        glossaryPills: [
          {
            term: 'red-shift',
            definition: 'Increase in observed wavelength of light emitted by distant receding galaxies due to the expansion of space.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Main sequence star', definition: 'Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.' },
      { term: 'Supernova', definition: 'Explosive death of a massive star that produces elements heavier than iron.' },
      { term: 'Red-shift', definition: 'Lengthening of light wavelengths from distant galaxies moving away from Earth.' },
    ],
    checklistPoints: [
      'Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration.',
      'Compare the evolutionary paths of Sun-sized vs massive stars and explain where elements heavier than iron form.',
      'Explain how galactic red-shift provides evidence for an expanding Universe and the Big Bang.',
    ],
  },
};

export const PHYSICS_QUIZZES: QuizQuestion[] = [
  {
    "id": "phys-q1",
    "subtopicId": "phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A 2 kg trolley moves at 3 m/s. Calculate its kinetic energy using Ek = ½mv².",
    "options": [
      "3 J",
      "6 J",
      "9 J",
      "18 J"
    ],
    "correctIndex": 2,
    "explanation": "Ek = 0.5 × 2 × 3² = 0.5 × 2 × 9 = 9 J."
  },
  {
    "id": "phys-q2",
    "subtopicId": "phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What happens to an object’s kinetic energy if its speed doubles while mass stays constant?",
    "options": [
      "Halves",
      "Doubles",
      "Quadruples (×4)",
      "Stays the same"
    ],
    "correctIndex": 2,
    "explanation": "Since Ek ∝ v², doubling v multiplies Ek by 2² = 4."
  },
  {
    "id": "phys-q3",
    "subtopicId": "phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A potential difference of 12 V drives a current of 1.5 A through a resistor. Calculate its resistance.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "R = V ÷ I = 12 ÷ 1.5 = 8 Ω.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Correct rearrangement R = V / I (12 ÷ 1.5)",
          "requiredKeywordGroups": [
            [
              "12",
              "1.5"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct value 8 Ω",
          "numericMatch": {
            "value": 8,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "V = IR rearranges to R = V ÷ I = 12 ÷ 1.5 = 8 Ω."
  },
  {
    "id": "phys-q4",
    "subtopicId": "phys-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Compare transverse and longitudinal wave oscillations.",
    "segments": [
      "In a transverse wave, oscillations are ",
      " to energy transfer. Sound is a ",
      " wave."
    ],
    "wordBank": [
      "perpendicular",
      "longitudinal",
      "parallel",
      "electromagnetic"
    ],
    "answers": [
      "perpendicular",
      "longitudinal"
    ],
    "explanation": "Transverse waves oscillate at 90° (perpendicular); sound travels as longitudinal compressions and rarefactions."
  },
  {
    "id": "phys-q5",
    "subtopicId": "phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A car travels at a constant velocity of 20 m/s along a straight road. What is the resultant horizontal force on the car?",
    "options": [
      "20 N forwards",
      "0 N",
      "Depends on its mass",
      "Equal to its weight"
    ],
    "correctIndex": 1,
    "explanation": "Constant velocity means zero acceleration, so by Newton’s First/Second Law resultant force is 0 N."
  },
  {
    "id": "phys-q6",
    "subtopicId": "phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "While pure ice is melting at 0 °C, why does its temperature stay constant even though thermal energy is still supplied?",
    "options": [
      "No energy enters the ice during melting",
      "The energy increases particles’ potential energy by weakening intermolecular bonds rather than kinetic energy",
      "The mass of the ice decreases as it melts",
      "Thermal conductivity drops to zero"
    ],
    "correctIndex": 1,
    "explanation": "Latent heat of fusion breaks intermolecular bonds (increasing internal potential energy) without increasing average kinetic energy/temperature."
  },
  {
    "id": "phys-q7",
    "subtopicId": "phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "When Carbon-14 (¹⁴₆C) undergoes beta-minus decay, what are the mass number and atomic number of the daughter nucleus?",
    "options": [
      "Mass 10, Atomic 4",
      "Mass 14, Atomic 7",
      "Mass 14, Atomic 5",
      "Mass 13, Atomic 6"
    ],
    "correctIndex": 1,
    "explanation": "In beta-minus decay, a neutron turns into a proton + electron, so mass number stays 14 while atomic number increases from 6 to 7 (Nitrogen-14)."
  },
  {
    "id": "phys-q8",
    "subtopicId": "phys-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A 0.50 m wire carrying 4.0 A sits perpendicular to a 0.30 T magnetic field. Calculate the force F = BIl on the wire.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "F = 0.30 × 4.0 × 0.50 = 0.60 N.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Substitute B = 0.30, I = 4.0, l = 0.50 into F = BIl",
          "requiredKeywordGroups": [
            [
              "0.3",
              "4",
              "0.5"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct force 0.6 N",
          "numericMatch": {
            "value": 0.6,
            "tolerance": 0.02
          }
        }
      ]
    },
    "explanation": "F = BIl = 0.30 × 4.0 × 0.50 = 0.60 N."
  },
  {
    "id": "phys-q9",
    "subtopicId": "phys-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Where in the Universe are elements heavier than iron (such as gold and uranium) synthesised?",
    "options": [
      "Inside main sequence stars like the Sun",
      "In planetary nebulae",
      "During supernova explosions of massive stars",
      "Inside black dwarfs"
    ],
    "correctIndex": 2,
    "explanation": "Fusion in stars builds elements up to iron; heavier elements are forged only during catastrophic supernova explosions."
  },
  {
    "id": "phys-q-extra-109",
    "subtopicId": "phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.1 (Energy Stores, Kinetic & Gravitational Potential Energy), which of the following is the accurate definition of \"Kinetic energy\"?",
    "options": [
      "Energy stored in a moving object: Ek = ½mv².",
      "The inverse ratio of Dissipation measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Energy Stores, Kinetic & Gravitational Potential Energy.",
      "An experimental error caused by neglecting unit conversions in Energy Stores & Pathways."
    ],
    "correctIndex": 0,
    "explanation": "Kinetic energy is defined as: Energy stored in a moving object: Ek = ½mv²."
  },
  {
    "id": "phys-q-extra-110",
    "subtopicId": "phys-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Kinetic, Gravitational & Elastic Potential Equations\" (1.1 Energy Stores, Kinetic & Gravitational Potential Energy).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m). 2. Gravitational potential energy: Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m)."
        },
        {
          "id": "mp2",
          "markDescription": "Gravitational potential energy: Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth."
        }
      ]
    },
    "explanation": "From Kinetic, Gravitational & Elastic Potential Equations: Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m)."
  },
  {
    "id": "phys-q-extra-111",
    "subtopicId": "phys-1-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.1 Energy Stores, Kinetic & Gravitational Potential Energy.",
    "options": [
      "Recall all 8 energy stores and 4 energy transfer pathways.",
      "In Energy Stores, Kinetic & Gravitational Potential Energy, standard unit conversions are never required before applying formulas.",
      "Calculate Ek = ½mv², Ep = mgh, and Ee = ½ke² using SI units (kg, m, m/s).",
      "Kinetic energy and Dissipation always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Recall all 8 energy stores and 4 energy transfer pathways.\" and \"Calculate Ek = ½mv², Ep = mgh, and Ee = ½ke² using SI units (kg, m, m/s).\" are core specification points."
  },
  {
    "id": "phys-q-extra-114",
    "subtopicId": "phys-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.2 (Conservation of Energy, Power & Efficiency), which of the following is the accurate definition of \"Power\"?",
    "options": [
      "Rate at which energy is transferred or work is done: P = E ÷ t (W).",
      "The inverse ratio of Efficiency measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Conservation of Energy, Power & Efficiency.",
      "An experimental error caused by neglecting unit conversions in Reducing Unwanted Energy Transfers."
    ],
    "correctIndex": 0,
    "explanation": "Power is defined as: Rate at which energy is transferred or work is done: P = E ÷ t (W)."
  },
  {
    "id": "phys-q-extra-115",
    "subtopicId": "phys-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Power & Efficiency Calculations\" (1.2 Conservation of Energy, Power & Efficiency).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second). 2. Two motors lifting the same weight to the same height do identical work, but the motor completing the lift in HALF the time has TWICE the power.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second)."
        },
        {
          "id": "mp2",
          "markDescription": "Two motors lifting the same weight to the same height do identical work, but the motor completing the lift in HALF the time has TWICE the power."
        }
      ]
    },
    "explanation": "From Power & Efficiency Calculations: Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second)."
  },
  {
    "id": "phys-q-extra-116",
    "subtopicId": "phys-1-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.2 Conservation of Energy, Power & Efficiency.",
    "options": [
      "Explain how lubrication and low thermal conductivity insulation reduce unwanted dissipation.",
      "In Conservation of Energy, Power & Efficiency, standard unit conversions are never required before applying formulas.",
      "Calculate power using P = E/t = W/t and efficiency as a decimal or percentage.",
      "Power and Efficiency always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Explain how lubrication and low thermal conductivity insulation reduce unwanted dissipation.\" and \"Calculate power using P = E/t = W/t and efficiency as a decimal or percentage.\" are core specification points."
  },
  {
    "id": "phys-q-extra-117",
    "subtopicId": "phys-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.2 (Conservation of Energy, Power & Efficiency)?",
    "options": [
      "Efficiency can NEVER exceed 1.0 (or 100%). If your calculation gives 1.33, you divided total input by useful output upside down!",
      "Always omit units and rounding in Conservation of Energy, Power & Efficiency calculations.",
      "Never show intermediate working steps in 1.2 questions.",
      "Assume Power is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Efficiency can NEVER exceed 1.0 (or 100%). If your calculation gives 1.33, you divided total input by useful output upside down!"
  },
  {
    "id": "phys-q-extra-118",
    "subtopicId": "phys-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"National & Global Energy Resources\" for 1.2 Conservation of Energy, Power & Efficiency.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain). Renewable resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain)."
        },
        {
          "id": "mp2",
          "markDescription": "Renewable resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation."
        }
      ]
    },
    "explanation": "Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain)."
  },
  {
    "id": "phys-q-extra-119",
    "subtopicId": "phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.1 (Current, Potential Difference & Series/Parallel Circuits), which of the following is the accurate definition of \"Current\"?",
    "options": [
      "Rate of flow of electrical charge measured in amperes (A): Q = It.",
      "The inverse ratio of Potential difference measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Current, Potential Difference & Series/Parallel Circuits.",
      "An experimental error caused by neglecting unit conversions in Charge, Current, Potential Difference & Resistance."
    ],
    "correctIndex": 0,
    "explanation": "Current is defined as: Rate of flow of electrical charge measured in amperes (A): Q = It."
  },
  {
    "id": "phys-q-extra-120",
    "subtopicId": "phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"I–V Characteristics, Thermistors & LDRs\" (2.1 Current, Potential Difference & Series/Parallel Circuits).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Ohmic conductor (fixed resistor at constant temperature): I–V graph is a straight line through the origin (R is constant). 2. Filament lamp: S-shaped curve flattening at high V — as current heats the filament, vibrating metal ions collide more with electrons, INCREASING resistance.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Ohmic conductor (fixed resistor at constant temperature): I–V graph is a straight line through the origin (R is constant)."
        },
        {
          "id": "mp2",
          "markDescription": "Filament lamp: S-shaped curve flattening at high V — as current heats the filament, vibrating metal ions collide more with electrons, INCREASING resistance."
        }
      ]
    },
    "explanation": "From I–V Characteristics, Thermistors & LDRs: Ohmic conductor (fixed resistor at constant temperature): I–V graph is a straight line through the origin (R is constant)."
  },
  {
    "id": "phys-q-extra-121",
    "subtopicId": "phys-2-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.1 Current, Potential Difference & Series/Parallel Circuits.",
    "options": [
      "Apply Q = It, V = IR, P = VI = I²R, and E = QV accurately.",
      "In Current, Potential Difference & Series/Parallel Circuits, standard unit conversions are never required before applying formulas.",
      "Compare series and parallel circuit rules and sketch I–V graphs for resistor, lamp, and diode.",
      "Current and Potential difference always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply Q = It, V = IR, P = VI = I²R, and E = QV accurately.\" and \"Compare series and parallel circuit rules and sketch I–V graphs for resistor, lamp, and diode.\" are core specification points."
  },
  {
    "id": "phys-q-extra-122",
    "subtopicId": "phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.1 (Current, Potential Difference & Series/Parallel Circuits)?",
    "options": [
      "Do NOT write that the live wire is safe when a switch is off if the switch was wired in the neutral wire — switches and fuses belong ONLY in the live wire!",
      "Always omit units and rounding in Current, Potential Difference & Series/Parallel Circuits calculations.",
      "Never show intermediate working steps in 2.1 questions.",
      "Assume Current is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Do NOT write that the live wire is safe when a switch is off if the switch was wired in the neutral wire — switches and fuses belong ONLY in the live wire!"
  },
  {
    "id": "phys-q-extra-124",
    "subtopicId": "phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.1 (Density, Internal Energy & Latent Heat), which of the following is the accurate definition of \"Density\"?",
    "options": [
      "Mass per unit volume: ρ = m ÷ V (kg/m³).",
      "The inverse ratio of Internal energy measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Density, Internal Energy & Latent Heat.",
      "An experimental error caused by neglecting unit conversions in Density & Particle Model of States of Matter."
    ],
    "correctIndex": 0,
    "explanation": "Density is defined as: Mass per unit volume: ρ = m ÷ V (kg/m³)."
  },
  {
    "id": "phys-q-extra-125",
    "subtopicId": "phys-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Internal Energy, Specific Heat Capacity & Specific Latent Heat\" (3.1 Density, Internal Energy & Latent Heat).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break). 2. Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: E = m × L (units of L: J/kg).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break)."
        },
        {
          "id": "mp2",
          "markDescription": "Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: E = m × L (units of L: J/kg)."
        }
      ]
    },
    "explanation": "From Internal Energy, Specific Heat Capacity & Specific Latent Heat: Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break)."
  },
  {
    "id": "phys-q-extra-126",
    "subtopicId": "phys-3-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.1 Density, Internal Energy & Latent Heat.",
    "options": [
      "Describe the Eureka can practical to determine the density of irregular solids.",
      "In Density, Internal Energy & Latent Heat, standard unit conversions are never required before applying formulas.",
      "Distinguish ΔE = mcΔθ (temperature change) from E = mL (state change: fusion vs vaporisation).",
      "Density and Internal energy always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Describe the Eureka can practical to determine the density of irregular solids.\" and \"Distinguish ΔE = mcΔθ (temperature change) from E = mL (state change: fusion vs vaporisation).\" are core specification points."
  },
  {
    "id": "phys-q-extra-127",
    "subtopicId": "phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.1 (Density, Internal Energy & Latent Heat)?",
    "options": [
      "Use ΔE = mcΔθ on the SLOPING parts of a heating graph (temperature changing) and E = mL on the FLAT plateaus (state changing at constant temperature)!",
      "Always omit units and rounding in Density, Internal Energy & Latent Heat calculations.",
      "Never show intermediate working steps in 3.1 questions.",
      "Assume Density is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Use ΔE = mcΔθ on the SLOPING parts of a heating graph (temperature changing) and E = mL on the FLAT plateaus (state changing at constant temperature)!"
  },
  {
    "id": "phys-q-extra-129",
    "subtopicId": "phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.1 (Alpha, Beta, Gamma Radiation & Half-Life), which of the following is the accurate definition of \"Becquerel (Bq)\"?",
    "options": [
      "Unit of radioactive activity equal to 1 nuclear decay per second.",
      "The inverse ratio of Half-life measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Alpha, Beta, Gamma Radiation & Half-Life.",
      "An experimental error caused by neglecting unit conversions in Development of the Atomic Model & Isotopes."
    ],
    "correctIndex": 0,
    "explanation": "Becquerel (Bq) is defined as: Unit of radioactive activity equal to 1 nuclear decay per second."
  },
  {
    "id": "phys-q-extra-130",
    "subtopicId": "phys-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Alpha, Beta & Gamma Decay Equations\" (4.1 Alpha, Beta, Gamma Radiation & Half-Life).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life. 2. Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life."
        },
        {
          "id": "mp2",
          "markDescription": "Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He."
        }
      ]
    },
    "explanation": "From Alpha, Beta & Gamma Decay Equations: Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life."
  },
  {
    "id": "phys-q-extra-131",
    "subtopicId": "phys-4-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.1 Alpha, Beta, Gamma Radiation & Half-Life.",
    "options": [
      "Compare Plum Pudding, Rutherford nuclear, Bohr shells, and Chadwick’s neutron discovery.",
      "In Alpha, Beta, Gamma Radiation & Half-Life, standard unit conversions are never required before applying formulas.",
      "Write balanced alpha and beta nuclear equations and compute net decline ratios using half-life.",
      "Becquerel (Bq) and Half-life always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Compare Plum Pudding, Rutherford nuclear, Bohr shells, and Chadwick’s neutron discovery.\" and \"Write balanced alpha and beta nuclear equations and compute net decline ratios using half-life.\" are core specification points."
  },
  {
    "id": "phys-q-extra-132",
    "subtopicId": "phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.1 (Alpha, Beta, Gamma Radiation & Half-Life)?",
    "options": [
      "Students often claim an irradiated surgical tool becomes radioactive — IT DOES NOT! Only CONTAMINATION transfers radioactive atoms onto the object.",
      "Always omit units and rounding in Alpha, Beta, Gamma Radiation & Half-Life calculations.",
      "Never show intermediate working steps in 4.1 questions.",
      "Assume Becquerel (Bq) is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Students often claim an irradiated surgical tool becomes radioactive — IT DOES NOT! Only CONTAMINATION transfers radioactive atoms onto the object."
  },
  {
    "id": "phys-q-extra-134",
    "subtopicId": "phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.1 (Resultant Forces, F = ma & Stopping Distances), which of the following is the accurate definition of \"Resultant force\"?",
    "options": [
      "Single overall force having the same effect on motion as all individual forces combined.",
      "The inverse ratio of Thinking distance measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Resultant Forces, F = ma & Stopping Distances.",
      "An experimental error caused by neglecting unit conversions in Newton’s Three Laws & Resultant Forces."
    ],
    "correctIndex": 0,
    "explanation": "Resultant force is defined as: Single overall force having the same effect on motion as all individual forces combined."
  },
  {
    "id": "phys-q-extra-135",
    "subtopicId": "phys-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Uniform Acceleration & Terminal Velocity\" (5.1 Resultant Forces, F = ma & Stopping Distances).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres). 2. On a velocity–time graph, gradient = acceleration and area under the line = distance travelled.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres)."
        },
        {
          "id": "mp2",
          "markDescription": "On a velocity–time graph, gradient = acceleration and area under the line = distance travelled."
        }
      ]
    },
    "explanation": "From Uniform Acceleration & Terminal Velocity: Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres)."
  },
  {
    "id": "phys-q-extra-136",
    "subtopicId": "phys-5-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.1 Resultant Forces, F = ma & Stopping Distances.",
    "options": [
      "Apply Newton’s three laws, F = ma, and v² − u² = 2as to motion problems.",
      "In Resultant Forces, F = ma & Stopping Distances, standard unit conversions are never required before applying formulas.",
      "Separate factors affecting thinking distance vs braking distance (and explain why speed affects both).",
      "Resultant force and Thinking distance always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply Newton’s three laws, F = ma, and v² − u² = 2as to motion problems.\" and \"Separate factors affecting thinking distance vs braking distance (and explain why speed affects both).\" are core specification points."
  },
  {
    "id": "phys-q-extra-137",
    "subtopicId": "phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.1 (Resultant Forces, F = ma & Stopping Distances)?",
    "options": [
      "Do NOT list \"icy road\" as affecting thinking distance — road/tyre conditions affect BRAKING distance only; driver state (drugs, fatigue, distraction) affects THINKING distance; SPEED affects BOTH!",
      "Always omit units and rounding in Resultant Forces, F = ma & Stopping Distances calculations.",
      "Never show intermediate working steps in 5.1 questions.",
      "Assume Resultant force is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Do NOT list \"icy road\" as affecting thinking distance — road/tyre conditions affect BRAKING distance only; driver state (drugs, fatigue, distraction) affects THINKING distance; SPEED affects BOTH!"
  },
  {
    "id": "phys-q-extra-139",
    "subtopicId": "phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.1 (Transverse & Longitudinal Waves (v = fλ)), which of the following is the accurate definition of \"Frequency\"?",
    "options": [
      "Number of complete waves passing a fixed point each second, measured in hertz (Hz).",
      "The inverse ratio of Wavelength measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Transverse & Longitudinal Waves (v = fλ).",
      "An experimental error caused by neglecting unit conversions in Wave Properties & The Wave Equation."
    ],
    "correctIndex": 0,
    "explanation": "Frequency is defined as: Number of complete waves passing a fixed point each second, measured in hertz (Hz)."
  },
  {
    "id": "phys-q-extra-140",
    "subtopicId": "phys-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Refraction & Wavefront Diagrams\" (6.1 Transverse & Longitudinal Waves (v = fλ)).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal. 2. During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal."
        },
        {
          "id": "mp2",
          "markDescription": "During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged."
        }
      ]
    },
    "explanation": "From Refraction & Wavefront Diagrams: When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal."
  },
  {
    "id": "phys-q-extra-141",
    "subtopicId": "phys-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.1 Transverse & Longitudinal Waves (v = fλ).",
    "options": [
      "Distinguish transverse and longitudinal waves and measure wave speed in a ripple tank.",
      "In Transverse & Longitudinal Waves (v = fλ), standard unit conversions are never required before applying formulas.",
      "Apply v = fλ and T = 1/f with standard unit prefixes (kHz, MHz, cm).",
      "Frequency and Wavelength always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Distinguish transverse and longitudinal waves and measure wave speed in a ripple tank.\" and \"Apply v = fλ and T = 1/f with standard unit prefixes (kHz, MHz, cm).\" are core specification points."
  },
  {
    "id": "phys-q-extra-142",
    "subtopicId": "phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.1 (Transverse & Longitudinal Waves (v = fλ))?",
    "options": [
      "EM order (low f → high f): Rich Men In Vegas Use X-ray Glasses!",
      "Always omit units and rounding in Transverse & Longitudinal Waves (v = fλ) calculations.",
      "Never show intermediate working steps in 6.1 questions.",
      "Assume Frequency is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "EM order (low f → high f): Rich Men In Vegas Use X-ray Glasses!"
  },
  {
    "id": "phys-q-extra-144",
    "subtopicId": "phys-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 7.1 (Magnetic Fields, Motor Effect & Transformers), which of the following is the accurate definition of \"Magnetic flux density (B)\"?",
    "options": [
      "Strength of a magnetic field measured in tesla (T), used in F = BIl.",
      "The inverse ratio of Motor effect measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Magnetic Fields, Motor Effect & Transformers.",
      "An experimental error caused by neglecting unit conversions in Magnetic Fields, Induced Magnets & Electromagnets."
    ],
    "correctIndex": 0,
    "explanation": "Magnetic flux density (B) is defined as: Strength of a magnetic field measured in tesla (T), used in F = BIl."
  },
  {
    "id": "phys-q-extra-145",
    "subtopicId": "phys-7-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"The Motor Effect, F = BIl & DC Motors\" (7.1 Magnetic Fields, Motor Effect & Transformers).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When a wire carrying current I sits at 90° to a magnetic field of flux density B (tesla, T), it experiences a force: F = B × I × l (where l is wire length inside the field in metres). 2. Fleming’s LEFT-Hand Rule gives the direction: ThuMb = Force/Motion, First finger = Field (N → S), SeCond finger = Conventional Current (+ → −).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When a wire carrying current I sits at 90° to a magnetic field of flux density B (tesla, T), it experiences a force: F = B × I × l (where l is wire length inside the field in metres)."
        },
        {
          "id": "mp2",
          "markDescription": "Fleming’s LEFT-Hand Rule gives the direction: ThuMb = Force/Motion, First finger = Field (N → S), SeCond finger = Conventional Current (+ → −)."
        }
      ]
    },
    "explanation": "From The Motor Effect, F = BIl & DC Motors: When a wire carrying current I sits at 90° to a magnetic field of flux density B (tesla, T), it experiences a force: F = B × I × l (where l is wire length inside the field in metres)."
  },
  {
    "id": "phys-q-extra-146",
    "subtopicId": "phys-7-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 7.1 Magnetic Fields, Motor Effect & Transformers.",
    "options": [
      "Apply F = BIl and Fleming’s Left-Hand Rule to wires, DC motors, and loudspeakers.",
      "In Magnetic Fields, Motor Effect & Transformers, standard unit conversions are never required before applying formulas.",
      "Contrast alternators (AC, slip rings) with dynamos (DC, split-ring commutator).",
      "Magnetic flux density (B) and Motor effect always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply F = BIl and Fleming’s Left-Hand Rule to wires, DC motors, and loudspeakers.\" and \"Contrast alternators (AC, slip rings) with dynamos (DC, split-ring commutator).\" are core specification points."
  },
  {
    "id": "phys-q-extra-147",
    "subtopicId": "phys-7-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 7.1 (Magnetic Fields, Motor Effect & Transformers)?",
    "options": [
      "Transformers DO NOT work with direct current (DC) because a steady DC current produces an unchanging magnetic field — inducing ZERO voltage in the secondary coil!",
      "Always omit units and rounding in Magnetic Fields, Motor Effect & Transformers calculations.",
      "Never show intermediate working steps in 7.1 questions.",
      "Assume Magnetic flux density (B) is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Transformers DO NOT work with direct current (DC) because a steady DC current produces an unchanging magnetic field — inducing ZERO voltage in the secondary coil!"
  },
  {
    "id": "phys-q-extra-149",
    "subtopicId": "phys-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 8.1 (Life Cycle of Stars & Red-Shift), which of the following is the accurate definition of \"Main sequence star\"?",
    "options": [
      "Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.",
      "The inverse ratio of Supernova measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Life Cycle of Stars & Red-Shift.",
      "An experimental error caused by neglecting unit conversions in Circular Orbits & Gravity."
    ],
    "correctIndex": 0,
    "explanation": "Main sequence star is defined as: Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion."
  },
  {
    "id": "phys-q-extra-150",
    "subtopicId": "phys-8-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Life Cycle of Stars & Element Synthesis\" (8.1 Life Cycle of Stars & Red-Shift).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium. 2. Main sequence stage: Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium."
        },
        {
          "id": "mp2",
          "markDescription": "Main sequence stage: Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion."
        }
      ]
    },
    "explanation": "From Life Cycle of Stars & Element Synthesis: All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium."
  },
  {
    "id": "phys-q-extra-151",
    "subtopicId": "phys-8-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 8.1 Life Cycle of Stars & Red-Shift.",
    "options": [
      "Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration.",
      "In Life Cycle of Stars & Red-Shift, standard unit conversions are never required before applying formulas.",
      "Compare the evolutionary paths of Sun-sized vs massive stars and explain where elements heavier than iron form.",
      "Main sequence star and Supernova always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration.\" and \"Compare the evolutionary paths of Sun-sized vs massive stars and explain where elements heavier than iron form.\" are core specification points."
  },
  {
    "id": "phys-q-extra-152",
    "subtopicId": "phys-8-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 8.1 (Life Cycle of Stars & Red-Shift)?",
    "options": [
      "Never write \"a planet in a circular orbit has constant velocity\" — its SPEED is constant, but its VELOCITY constantly changes because direction keeps changing!",
      "Always omit units and rounding in Life Cycle of Stars & Red-Shift calculations.",
      "Never show intermediate working steps in 8.1 questions.",
      "Assume Main sequence star is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never write \"a planet in a circular orbit has constant velocity\" — its SPEED is constant, but its VELOCITY constantly changes because direction keeps changing!"
  }
];

export const PHYSICS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "phys-fc-1",
    "subtopicId": "phys-1-1",
    "front": "Write the formula for Kinetic Energy.",
    "backBullets": [
      "Ek = ½ m v²",
      "m in kg, v in m/s, Ek in joules (J)"
    ]
  },
  {
    "id": "phys-fc-2",
    "subtopicId": "phys-1-1",
    "front": "Write the formula for Gravitational Potential Energy.",
    "backBullets": [
      "Ep = m g h",
      "g ≈ 9.8 N/kg on Earth"
    ]
  },
  {
    "id": "phys-fc-3",
    "subtopicId": "phys-2-1",
    "front": "How does adding another resistor in parallel affect total circuit resistance?",
    "backBullets": [
      "Total resistance DECREASES because charge now has more pathways to flow"
    ]
  },
  {
    "id": "phys-fc-4",
    "subtopicId": "phys-5-1",
    "front": "State Newton’s Second Law as an equation.",
    "backBullets": [
      "F = m a (Resultant force = mass × acceleration)"
    ]
  },
  {
    "id": "phys-fc-5",
    "subtopicId": "phys-6-1",
    "front": "State the wave speed equation.",
    "backBullets": [
      "v = f λ (Wave speed m/s = frequency Hz × wavelength m)"
    ]
  },
  {
    "id": "phys-fc-6",
    "subtopicId": "phys-3-1",
    "front": "State the formula for Specific Latent Heat.",
    "backBullets": [
      "E = m L",
      "m in kg, L in J/kg (temperature stays constant during state change)"
    ]
  },
  {
    "id": "phys-fc-7",
    "subtopicId": "phys-4-1",
    "front": "What is the difference between Irradiation and Contamination?",
    "backBullets": [
      "Irradiation: exposure to external radiation (object does NOT become radioactive)",
      "Contamination: radioactive atoms get on/inside an object and keep emitting"
    ]
  },
  {
    "id": "phys-fc-8",
    "subtopicId": "phys-7-1",
    "front": "State the motor effect force equation and why transformers need AC.",
    "backBullets": [
      "F = B I l (B in tesla, I in amps, l in metres)",
      "Transformers need AC to create a continuously changing magnetic field in the iron core"
    ]
  },
  {
    "id": "phys-fc-9",
    "subtopicId": "phys-8-1",
    "front": "Outline the life cycle of a star similar in mass to the Sun.",
    "backBullets": [
      "Nebula → Protostar → Main Sequence → Red Giant → White Dwarf → Black Dwarf"
    ]
  },
  {
    "id": "phys-fc-extra-109",
    "subtopicId": "phys-1-1",
    "front": "1.1 Energy Stores & Pathways: What are the essential exam points to remember?",
    "backBullets": [
      "The 8 energy stores: Kinetic, Gravitational potential, Elastic potential, Thermal, Chemical, Magnetic, Electrostatic, and Nuclear.",
      "Energy is transferred between stores by 4 pathways: Mechanical work (a force moving an object), Electrical work (charges moving through a p.d.), Heating, and Radiation (light/sound waves).",
      "A closed system experiences no net change in total energy — energy can only be transferred usefully, stored, or dissipated."
    ],
    "hint": "Remember Kinetic = ½mv² (velocity is squared, so doubling speed quadruples kinetic energy!)."
  },
  {
    "id": "phys-fc-extra-110",
    "subtopicId": "phys-1-1",
    "front": "1.1 Kinetic, Gravitational & Elastic Potential Equations: What are the essential exam points to remember?",
    "backBullets": [
      "Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m).",
      "Gravitational potential energy: Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth.",
      "Elastic potential energy stored in a stretched spring (up to limit of proportionality): Ee = 0.5 × spring constant k (N/m) × extension² (m)."
    ]
  },
  {
    "id": "phys-fc-extra-111",
    "subtopicId": "phys-1-1",
    "front": "1.1 Worked Conservation of Energy Example: What are the essential exam points to remember?",
    "backBullets": [
      "When a 2.0 kg ball drops from a 5.0 m ledge (ignoring air resistance), all Ep lost converts into Ek gained.",
      "Ep = mgh = 2.0 × 9.8 × 5.0 = 98 J → Ek = 98 J just before hitting the ground.",
      "Find impact speed: 98 = 0.5 × 2.0 × v² → v² = 98 → v = √98 ≈ 9.9 m/s."
    ]
  },
  {
    "id": "phys-fc-extra-112",
    "subtopicId": "phys-1-2",
    "front": "1.2 Reducing Unwanted Energy Transfers: What are the essential exam points to remember?",
    "backBullets": [
      "Principle of conservation of energy: Energy cannot be created or destroyed, only transferred usefully, stored, or dissipated into thermal stores of the surroundings.",
      "Lubrication (oil/grease) reduces friction between moving mechanical parts, cutting unwanted heating.",
      "Thermal insulation reduces heat loss from buildings: thicker walls and materials with LOWER thermal conductivity (cavity wall foam, double glazing, loft fibreglass) slow the rate of conduction."
    ]
  },
  {
    "id": "phys-fc-extra-113",
    "subtopicId": "phys-1-2",
    "front": "1.2 Power & Efficiency Calculations: What are the essential exam points to remember?",
    "backBullets": [
      "Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second).",
      "Two motors lifting the same weight to the same height do identical work, but the motor completing the lift in HALF the time has TWICE the power.",
      "Efficiency = Useful output energy transfer ÷ Total input energy transfer (or Useful power output ÷ Total power input). Multiply by 100 for a percentage."
    ]
  },
  {
    "id": "phys-fc-extra-114",
    "subtopicId": "phys-1-2",
    "front": "1.2 National & Global Energy Resources: What are the essential exam points to remember?",
    "backBullets": [
      "Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain).",
      "Renewable resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation.",
      "Transitioning to renewables involves balancing environmental benefits against intermittency (wind/solar depend on weather), high upfront construction costs, and visual/habitat impacts."
    ],
    "hint": "Efficiency = Useful ÷ Total (always a smaller number divided by a bigger number, ≤ 1)!"
  },
  {
    "id": "phys-fc-extra-115",
    "subtopicId": "phys-1-2",
    "front": "Define: Power (1.2)",
    "backBullets": [
      "Rate at which energy is transferred or work is done: P = E ÷ t (W)."
    ]
  },
  {
    "id": "phys-fc-extra-116",
    "subtopicId": "phys-1-2",
    "front": "Define: Efficiency (1.2)",
    "backBullets": [
      "Fraction or percentage of input energy transferred usefully."
    ]
  },
  {
    "id": "phys-fc-extra-117",
    "subtopicId": "phys-2-1",
    "front": "2.1 Charge, Current, Potential Difference & Resistance: What are the essential exam points to remember?",
    "backBullets": [
      "Electric current (I, amps) is the rate of flow of electrical charge: Q = I × t (charge Q in coulombs, C).",
      "Potential difference (V, volts) is the energy transferred per coulomb of charge: E = Q × V. Ohm’s Law: V = I × R (resistance R in ohms, Ω).",
      "In Series: Current is identical everywhere (I₁ = I₂); total resistance adds up (R_total = R₁ + R₂); potential difference is shared between components."
    ]
  },
  {
    "id": "phys-fc-extra-118",
    "subtopicId": "phys-2-1",
    "front": "2.1 I–V Characteristics, Thermistors & LDRs: What are the essential exam points to remember?",
    "backBullets": [
      "Ohmic conductor (fixed resistor at constant temperature): I–V graph is a straight line through the origin (R is constant).",
      "Filament lamp: S-shaped curve flattening at high V — as current heats the filament, vibrating metal ions collide more with electrons, INCREASING resistance.",
      "Diode: Very high resistance in reverse direction (zero current); conducts sharply in forward direction above ~0.6 V."
    ],
    "hint": "For BOTH Thermistors and LDRs, MORE input (more heat or more light) = LESS resistance!"
  },
  {
    "id": "phys-fc-extra-119",
    "subtopicId": "phys-2-1",
    "front": "2.1 Mains Electricity, Electrical Power & The National Grid: What are the essential exam points to remember?",
    "backBullets": [
      "UK mains electricity is alternating current (AC) at 230 V and 50 Hz. Three-core cable: Live (brown, 230 V), Neutral (blue, 0 V), Earth (green/yellow, safety wire connected to metal casing).",
      "Power formulas: P = V × I = I² × R; Energy transferred: E = P × t = Q × V.",
      "The National Grid uses step-up transformers to increase voltage (up to 400,000 V) and decrease current so thermal energy wasted in cables (P = I²R) is minimised, then step-down transformers lower voltage back to a safe 230 V for homes."
    ]
  },
  {
    "id": "phys-fc-extra-120",
    "subtopicId": "phys-2-1",
    "front": "Define: Current (2.1)",
    "backBullets": [
      "Rate of flow of electrical charge measured in amperes (A): Q = It."
    ]
  },
  {
    "id": "phys-fc-extra-121",
    "subtopicId": "phys-3-1",
    "front": "3.1 Density & Particle Model of States of Matter: What are the essential exam points to remember?",
    "backBullets": [
      "Density = mass ÷ volume: ρ = m ÷ V (kg/m³). Solids are usually densest because particles are tightly packed in a regular arrangement; gases have very low density due to huge gaps between fast-moving particles.",
      "Required practical (irregular solid density): Measure mass m on an electronic balance; submerge the object gently into a Eureka can filled to the spout and collect displaced water in a measuring cylinder to find volume V; calculate ρ = m ÷ V.",
      "Changes of state (melting, freezing, boiling, condensing, sublimating) are PHYSICAL changes — mass is conserved and no new substances form, though the substance’s internal energy changes."
    ]
  },
  {
    "id": "phys-fc-extra-122",
    "subtopicId": "phys-3-1",
    "front": "3.1 Internal Energy, Specific Heat Capacity & Specific Latent Heat: What are the essential exam points to remember?",
    "backBullets": [
      "Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break).",
      "Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: E = m × L (units of L: J/kg).",
      "Specific latent heat of FUSION = solid ↔ liquid (melting/freezing). Specific latent heat of VAPORISATION = liquid ↔ gas (boiling/condensing — usually much larger because intermolecular forces must be completely overcome)."
    ]
  },
  {
    "id": "phys-fc-extra-123",
    "subtopicId": "phys-3-1",
    "front": "3.1 Particle Motion in Gases & Boyle’s Law: What are the essential exam points to remember?",
    "backBullets": [
      "Gas molecules move rapidly in random motion. Collisions with container walls exert a net outward force at right angles to the wall, creating pressure.",
      "At constant volume, raising gas temperature increases average kinetic energy → faster, harder, and more frequent collisions → higher pressure.",
      "At constant temperature for a fixed mass of gas: pressure × volume = constant (pV = constant). Doing work to compress a gas rapidly (e.g., bicycle pump) transfers energy to its internal store, raising its temperature!"
    ],
    "hint": "Fusion = Freezing/melting (solid ↔ liquid); Vaporisation = Vapour (liquid ↔ gas)."
  },
  {
    "id": "phys-fc-extra-124",
    "subtopicId": "phys-3-1",
    "front": "Define: Density (3.1)",
    "backBullets": [
      "Mass per unit volume: ρ = m ÷ V (kg/m³)."
    ]
  },
  {
    "id": "phys-fc-extra-125",
    "subtopicId": "phys-4-1",
    "front": "4.1 Development of the Atomic Model & Isotopes: What are the essential exam points to remember?",
    "backBullets": [
      "Thomson’s Plum Pudding Model imagined a positively charged sphere studded with negative electrons.",
      "Rutherford’s alpha particle scattering experiment disproved it: most alpha particles passed straight through gold foil (atom is mostly empty space), while a tiny fraction deflected sharply back (mass and positive charge sit in a tiny dense nucleus).",
      "Niels Bohr refined the nuclear model so electrons orbit at fixed energy levels (shells); James Chadwick later discovered uncharged neutrons in the nucleus, explaining isotopes (same proton number, different neutron number)."
    ]
  },
  {
    "id": "phys-fc-extra-126",
    "subtopicId": "phys-4-1",
    "front": "4.1 Alpha, Beta & Gamma Decay Equations: What are the essential exam points to remember?",
    "backBullets": [
      "Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life.",
      "Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.",
      "Beta (⁰₋₁e): Fast electron ejected when a neutron turns into a proton. Moderately ionising, stopped by ~5 mm aluminium. Mass number stays the same; atomic number INCREASES by 1: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e."
    ],
    "hint": "Stopping materials: Paper (α), Aluminium (β), Lead (γ) — P-A-L!"
  },
  {
    "id": "phys-fc-extra-127",
    "subtopicId": "phys-4-1",
    "front": "4.1 Half-Life, Contamination vs Irradiation & Fission/Fusion: What are the essential exam points to remember?",
    "backBullets": [
      "Half-life: Time for undecayed nuclei (or count rate) to halve. Example: 400 Bq dropping to 50 Bq requires 3 halvings (400 → 200 → 100 → 50); if this takes 24 hours, half-life = 24 ÷ 3 = 8 hours.",
      "Irradiation is exposing an object to radiation from an external source (does NOT make the object radioactive; stopped by lead shielding/distance). Contamination is unwanted radioactive atoms getting ON or INSIDE an object (continues emitting radiation until decayed/removed — alpha is most dangerous inside the body!).",
      "Nuclear Fission splits a large nucleus (U-235) after neutron absorption into two daughter nuclei + 2–3 neutrons + energy (chain reaction controlled by boron control rods). Nuclear Fusion joins two light nuclei (hydrogen → helium) at ultra-high core star temperatures, converting a tiny fraction of mass into huge energy."
    ]
  },
  {
    "id": "phys-fc-extra-128",
    "subtopicId": "phys-4-1",
    "front": "Define: Becquerel (Bq) (4.1)",
    "backBullets": [
      "Unit of radioactive activity equal to 1 nuclear decay per second."
    ]
  },
  {
    "id": "phys-fc-extra-129",
    "subtopicId": "phys-5-1",
    "front": "5.1 Newton’s Three Laws & Resultant Forces: What are the essential exam points to remember?",
    "backBullets": [
      "Newton’s First Law: If resultant force is 0 N, a stationary object stays stationary and a moving object continues at constant velocity (same speed AND direction).",
      "Newton’s Second Law: Resultant force (N) = mass (kg) × acceleration (m/s²): F = m × a. Inertial mass = F ÷ a measures how hard it is to change an object’s velocity.",
      "Newton’s Third Law: Whenever two objects interact, the forces they exert on each other are equal in magnitude and opposite in direction (e.g., rocket pushes exhaust down, exhaust pushes rocket up)."
    ]
  },
  {
    "id": "phys-fc-extra-130",
    "subtopicId": "phys-5-1",
    "front": "5.1 Uniform Acceleration & Terminal Velocity: What are the essential exam points to remember?",
    "backBullets": [
      "Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres).",
      "On a velocity–time graph, gradient = acceleration and area under the line = distance travelled.",
      "Falling objects reach TERMINAL VELOCITY when upward air resistance grows to balance downward weight (resultant force = 0 N → constant maximum speed)."
    ]
  },
  {
    "id": "phys-fc-extra-131",
    "subtopicId": "phys-5-1",
    "front": "5.1 Stopping Distances & Momentum Safety: What are the essential exam points to remember?",
    "backBullets": [
      "Stopping Distance = Thinking Distance + Braking Distance.",
      "Thinking distance (distance travelled during driver reaction time, ~0.2–0.9 s) increases with speed, tiredness, alcohol/drugs, and distractions (phone).",
      "Braking distance (distance under brakes until stopping) increases with speed² (doubling speed quadruples braking distance because Ek = ½mv² = F × d!), wet/icy roads, worn tyres, or worn brake pads."
    ]
  },
  {
    "id": "phys-fc-extra-132",
    "subtopicId": "phys-5-1",
    "front": "Define: Resultant force (5.1)",
    "backBullets": [
      "Single overall force having the same effect on motion as all individual forces combined."
    ]
  },
  {
    "id": "phys-fc-extra-133",
    "subtopicId": "phys-6-1",
    "front": "6.1 Wave Properties & The Wave Equation: What are the essential exam points to remember?",
    "backBullets": [
      "Waves transfer ENERGY without transferring matter. Amplitude = max displacement from undisturbed position; Wavelength λ = distance from crest to adjacent crest; Frequency f = complete waves passing a point per second (Hz); Period T = 1 ÷ f.",
      "Transverse waves (all EM waves, water ripples, S-waves): oscillations are PERPENDICULAR (90°) to energy transfer.",
      "Longitudinal waves (sound, ultrasound, P-waves): oscillations are PARALLEL to energy transfer, forming compressions and rarefactions."
    ]
  },
  {
    "id": "phys-fc-extra-134",
    "subtopicId": "phys-6-1",
    "front": "6.1 Refraction & Wavefront Diagrams: What are the essential exam points to remember?",
    "backBullets": [
      "When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal.",
      "During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged.",
      "A ray striking the boundary straight along the normal (angle of incidence = 0°) slows down but does NOT change direction."
    ]
  },
  {
    "id": "phys-fc-extra-135",
    "subtopicId": "phys-6-1",
    "front": "6.1 The Electromagnetic Spectrum & Hazards: What are the essential exam points to remember?",
    "backBullets": [
      "Continuous spectrum of transverse waves travelling at 3.0 × 10⁸ m/s in vacuum (long λ → short λ): Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays.",
      "Radio waves are produced by oscillations in electrical circuits; gamma rays originate from changes inside atomic nuclei.",
      "UV, X-rays, and gamma rays are ionising radiation — UV causes premature skin ageing and skin cancer; X-rays and gamma rays can mutate DNA and cause cancer (radiation dose is measured in sieverts, Sv)."
    ],
    "hint": "EM order (low f → high f): Rich Men In Vegas Use X-ray Glasses!"
  },
  {
    "id": "phys-fc-extra-136",
    "subtopicId": "phys-6-1",
    "front": "Define: Frequency (6.1)",
    "backBullets": [
      "Number of complete waves passing a fixed point each second, measured in hertz (Hz)."
    ]
  },
  {
    "id": "phys-fc-extra-137",
    "subtopicId": "phys-7-1",
    "front": "7.1 Magnetic Fields, Induced Magnets & Electromagnets: What are the essential exam points to remember?",
    "backBullets": [
      "Permanent magnets produce their own constant magnetic field; induced magnets (iron, steel, cobalt, nickel) become magnetic only when placed inside a magnetic field and ALWAYS experience an ATTRACTIVE force.",
      "Field lines point from NORTH to SOUTH and are densest at the poles where the field is strongest.",
      "A current in a straight wire generates circular concentric magnetic field lines (Right-Hand Thumb Rule). Shaping the wire into a SOLENOID creates a uniform strong field inside (like a bar magnet) that becomes an electromagnet when an iron core is inserted."
    ]
  },
  {
    "id": "phys-fc-extra-138",
    "subtopicId": "phys-7-1",
    "front": "7.1 The Motor Effect, F = BIl & DC Motors: What are the essential exam points to remember?",
    "backBullets": [
      "When a wire carrying current I sits at 90° to a magnetic field of flux density B (tesla, T), it experiences a force: F = B × I × l (where l is wire length inside the field in metres).",
      "Fleming’s LEFT-Hand Rule gives the direction: ThuMb = Force/Motion, First finger = Field (N → S), SeCond finger = Conventional Current (+ → −).",
      "Electric motors & loudspeakers use the motor effect: in a DC motor, a split-ring commutator swaps coil contacts every half-turn to reverse current and keep torque rotating in the same direction. In a loudspeaker, varying AC audio currents push a coil/cone back and forth to create sound pressure waves."
    ],
    "hint": "F = BIl (remember \"Force equals Bill\") and LEFT hand for motors!"
  },
  {
    "id": "phys-fc-extra-139",
    "subtopicId": "phys-7-1",
    "front": "7.1 The Generator Effect & Transformers: What are the essential exam points to remember?",
    "backBullets": [
      "Generator effect (electromagnetic induction): Moving a conductor relative to a magnetic field (or changing a magnetic field through a coil) induces a potential difference across the wire — and an induced current if in a complete circuit.",
      "Alternators use SLIP RINGS to output alternating current (AC); Dynamos use a SPLIT-RING COMMUTATOR to output direct current (DC). Microphones use sound vibrations on a diaphragm to move a coil near a magnet, inducing an electrical audio signal.",
      "Transformers (AC ONLY!): Primary alternating current creates an alternating magnetic field in the iron core, inducing an alternating p.d. in the secondary coil. Equations: Vp ÷ Vs = np ÷ ns and (100% efficient) VpIp = VsIs."
    ]
  },
  {
    "id": "phys-fc-extra-140",
    "subtopicId": "phys-7-1",
    "front": "Define: Magnetic flux density (B) (7.1)",
    "backBullets": [
      "Strength of a magnetic field measured in tesla (T), used in F = BIl."
    ]
  },
  {
    "id": "phys-fc-extra-141",
    "subtopicId": "phys-8-1",
    "front": "8.1 Circular Orbits & Gravity: What are the essential exam points to remember?",
    "backBullets": [
      "Gravity supplies the inward centripetal force that keeps planets orbiting the Sun and natural/artificial satellites orbiting planets.",
      "For a circular orbit at constant SPEED, the object’s DIRECTION is constantly changing → therefore its VELOCITY is changing → it is continuously accelerating toward the centre of the orbit!",
      "If a satellite’s orbital speed increases, it must move to a SMALLER radius orbit to stay in stable circular motion (where gravitational pull is stronger); lower speeds require larger orbital radii."
    ]
  },
  {
    "id": "phys-fc-extra-142",
    "subtopicId": "phys-8-1",
    "front": "8.1 Life Cycle of Stars & Element Synthesis: What are the essential exam points to remember?",
    "backBullets": [
      "All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium.",
      "Main sequence stage: Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion.",
      "Stars about the same size as the Sun: Main Sequence → Red Giant → White Dwarf → Black Dwarf (cooled remnant)."
    ],
    "hint": "Sun-sized = Giant → White Dwarf → Black Dwarf. Massive = Supergiant → Supernova → Neutron Star / Black Hole!"
  },
  {
    "id": "phys-fc-extra-143",
    "subtopicId": "phys-8-1",
    "front": "8.1 Red-Shift & Evidence for The Big Bang: What are the essential exam points to remember?",
    "backBullets": [
      "Red-shift is the observed increase in wavelength of light arriving from distant galaxies — absorption lines shift toward the red end of the spectrum because galaxies are moving away as space itself expands.",
      "The further away a galaxy is, the GREATER its red-shift and the FASTER it is receding away from us.",
      "This supports the Big Bang Theory (the Universe began ~13.8 billion years ago from a tiny, hot, dense region that has been expanding ever since)."
    ]
  },
  {
    "id": "phys-fc-extra-144",
    "subtopicId": "phys-8-1",
    "front": "Define: Main sequence star (8.1)",
    "backBullets": [
      "Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion."
    ]
  }
];

export const PHYSICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-phys-topic-1",
    "slug": "topic-1-energy",
    "title": "Topic 1: Energy — Complete Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Energy",
    "summary": "One-page revision summary covering 1.1 Energy Stores, Kinetic & Gravitational Potential Energy; 1.2 Conservation of Energy, Power & Efficiency.",
    "accentColor": "#8d22cc",
    "sections": [
      {
        "heading": "1.1 Energy Stores, Kinetic & Gravitational Potential Energy",
        "formula": "Ek = ½mv²  |  Ep = mgh  |  Ee = ½ke²",
        "points": [
          "Recall all 8 energy stores and 4 energy transfer pathways.",
          "Calculate Ek = ½mv², Ep = mgh, and Ee = ½ke² using SI units (kg, m, m/s).",
          "Tip: Remember Kinetic = ½mv² (velocity is squared, so doubling speed quadruples kinetic energy!)."
        ]
      },
      {
        "heading": "1.2 Conservation of Energy, Power & Efficiency",
        "formula": "P = E ÷ t = W ÷ t  |  Efficiency = Useful ÷ Total",
        "points": [
          "Explain how lubrication and low thermal conductivity insulation reduce unwanted dissipation.",
          "Calculate power using P = E/t = W/t and efficiency as a decimal or percentage."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-2",
    "slug": "topic-2-electricity",
    "title": "Topic 2: Electricity — Complete Cheat Sheet",
    "topicNumber": 2,
    "topicName": "Electricity",
    "summary": "One-page revision summary covering 2.1 Current, Potential Difference & Series/Parallel Circuits.",
    "accentColor": "#1a96f3",
    "sections": [
      {
        "heading": "2.1 Current, Potential Difference & Series/Parallel Circuits",
        "formula": "Q = It  |  V = IR  |  E = QV",
        "points": [
          "Apply Q = It, V = IR, P = VI = I²R, and E = QV accurately.",
          "Compare series and parallel circuit rules and sketch I–V graphs for resistor, lamp, and diode."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-3",
    "slug": "topic-3-particle-model-of-matter",
    "title": "Topic 3: Particle Model of Matter — Complete Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Particle Model of Matter",
    "summary": "One-page revision summary covering 3.1 Density, Internal Energy & Latent Heat.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "3.1 Density, Internal Energy & Latent Heat",
        "formula": "ρ = m ÷ V  |  ΔE = mcΔθ",
        "points": [
          "Describe the Eureka can practical to determine the density of irregular solids.",
          "Distinguish ΔE = mcΔθ (temperature change) from E = mL (state change: fusion vs vaporisation)."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-4",
    "slug": "topic-4-atomic-structure",
    "title": "Topic 4: Atomic Structure — Complete Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Atomic Structure",
    "summary": "One-page revision summary covering 4.1 Alpha, Beta, Gamma Radiation & Half-Life.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "4.1 Alpha, Beta, Gamma Radiation & Half-Life",
        "formula": "α decay: A−4, Z−2  |  β⁻ decay: A, Z+1",
        "points": [
          "Compare Plum Pudding, Rutherford nuclear, Bohr shells, and Chadwick’s neutron discovery.",
          "Write balanced alpha and beta nuclear equations and compute net decline ratios using half-life."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-5",
    "slug": "topic-5-forces",
    "title": "Topic 5: Forces — Complete Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Forces",
    "summary": "One-page revision summary covering 5.1 Resultant Forces, F = ma & Stopping Distances.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "5.1 Resultant Forces, F = ma & Stopping Distances",
        "formula": "W = mg  |  F = ma  |  W = Fs  |  F = ke",
        "points": [
          "Apply Newton’s three laws, F = ma, and v² − u² = 2as to motion problems.",
          "Separate factors affecting thinking distance vs braking distance (and explain why speed affects both)."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-6",
    "slug": "topic-6-waves",
    "title": "Topic 6: Waves — Complete Cheat Sheet",
    "topicNumber": 6,
    "topicName": "Waves",
    "summary": "One-page revision summary covering 6.1 Transverse & Longitudinal Waves (v = fλ).",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "6.1 Transverse & Longitudinal Waves (v = fλ)",
        "formula": "v = fλ  |  T = 1 ÷ f",
        "points": [
          "Distinguish transverse and longitudinal waves and measure wave speed in a ripple tank.",
          "Apply v = fλ and T = 1/f with standard unit prefixes (kHz, MHz, cm)."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-7",
    "slug": "topic-7-magnetism-and-electromagnetism",
    "title": "Topic 7: Magnetism and Electromagnetism — Complete Cheat Sheet",
    "topicNumber": 7,
    "topicName": "Magnetism and Electromagnetism",
    "summary": "One-page revision summary covering 7.1 Magnetic Fields, Motor Effect & Transformers.",
    "accentColor": "#db2777",
    "sections": [
      {
        "heading": "7.1 Magnetic Fields, Motor Effect & Transformers",
        "formula": "F = BIl (Motor Effect)",
        "points": [
          "Apply F = BIl and Fleming’s Left-Hand Rule to wires, DC motors, and loudspeakers.",
          "Contrast alternators (AC, slip rings) with dynamos (DC, split-ring commutator)."
        ]
      }
    ]
  },
  {
    "id": "cs-phys-topic-8",
    "slug": "topic-8-space-physics",
    "title": "Topic 8: Space Physics — Complete Cheat Sheet",
    "topicNumber": 8,
    "topicName": "Space Physics",
    "summary": "One-page revision summary covering 8.1 Life Cycle of Stars & Red-Shift.",
    "accentColor": "#2563eb",
    "sections": [
      {
        "heading": "8.1 Life Cycle of Stars & Red-Shift",
        "formula": "v_orbit = 2πr ÷ T",
        "points": [
          "Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration.",
          "Compare the evolutionary paths of Sun-sized vs massive stars and explain where elements heavier than iron form.",
          "Watch out: Never write \"a planet in a circular orbit has constant velocity\" — its SPEED is constant, but its VELOCITY constantly changes because direction keeps changing!"
        ]
      }
    ]
  }
];

export const PHYSICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "phys-exam-1",
    "subtopicId": "phys-2-1",
    "number": 1,
    "stimulus": "The diagram compares two lamps connected in series and in parallel to identical 6 V cells.",
    "diagram": "circuit-series-parallel",
    "parts": [
      {
        "id": "phys-exam-1a",
        "label": "a)",
        "prompt": "State what happens to the potential difference across each lamp when two identical lamps are connected in parallel across a 6 V cell.",
        "kind": "short-answer",
        "marks": 1,
        "rubric": {
          "maxMarks": 1,
          "modelAnswer": "Each lamp receives the full 6 V potential difference.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "6 V across each lamp / same as battery",
              "numericMatch": {
                "value": 6,
                "tolerance": 0
              }
            }
          ]
        }
      },
      {
        "id": "phys-exam-1b",
        "label": "b)",
        "prompt": "Define the term \"Current\" and state its significance in Current, Potential Difference & Series/Parallel Circuits.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Current: Rate of flow of electrical charge measured in amperes (A): Q = It. Apply Q = It, V = IR, P = VI = I²R, and E = QV accurately.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Accurate definition of Current (Rate of flow of electrical charge measured in amperes (A): Q = It.)"
            },
            {
              "id": "mp2",
              "markDescription": "Clear link to 2.1 Current, Potential Difference & Series/Parallel Circuits principle"
            }
          ]
        }
      },
      {
        "id": "phys-exam-1c",
        "label": "c)",
        "prompt": "Explain one key principle or common pitfall when solving exam problems on Current, Potential Difference & Series/Parallel Circuits.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Do NOT write that the live wire is safe when a switch is off if the switch was wired in the neutral wire — switches and fuses belong ONLY in the live wire!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies key rule: Apply Q = It, V = IR, P = VI = I²R, and E = QV accurately."
            },
            {
              "id": "mp2",
              "markDescription": "Explains correct method/units/application clearly"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-2",
    "subtopicId": "phys-7-1",
    "number": 2,
    "stimulus": "A laptop charger contains a step-down transformer with 1,150 turns on the primary coil connected to 230 V UK mains and 100 turns on the secondary coil.",
    "parts": [
      {
        "id": "phys-exam-2a",
        "label": "a)",
        "prompt": "Calculate the potential difference output across the secondary coil.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Vs = 230 × (100 ÷ 1150) = 20 V.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Use Vp/Vs = np/ns",
              "requiredKeywordGroups": [
                [
                  "230",
                  "100",
                  "1150"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Secondary voltage = 20 V",
              "numericMatch": {
                "value": 20,
                "tolerance": 0.1
              }
            }
          ]
        }
      },
      {
        "id": "phys-exam-2b",
        "label": "b)",
        "prompt": "Define the term \"Magnetic flux density (B)\" and state its significance in Magnetic Fields, Motor Effect & Transformers.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Magnetic flux density (B): Strength of a magnetic field measured in tesla (T), used in F = BIl. Apply F = BIl and Fleming’s Left-Hand Rule to wires, DC motors, and loudspeakers.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Accurate definition of Magnetic flux density (B) (Strength of a magnetic field measured in tesla (T), used in F = BIl.)"
            },
            {
              "id": "mp2",
              "markDescription": "Clear link to 7.1 Magnetic Fields, Motor Effect & Transformers principle"
            }
          ]
        }
      },
      {
        "id": "phys-exam-2c",
        "label": "c)",
        "prompt": "Explain one key principle or common pitfall when solving exam problems on Magnetic Fields, Motor Effect & Transformers.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Transformers DO NOT work with direct current (DC) because a steady DC current produces an unchanging magnetic field — inducing ZERO voltage in the secondary coil!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies key rule: Apply F = BIl and Fleming’s Left-Hand Rule to wires, DC motors, and loudspeakers."
            },
            {
              "id": "mp2",
              "markDescription": "Explains correct method/units/application clearly"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-3",
    "subtopicId": "phys-1-1",
    "number": 3,
    "stimulus": "Structured exam question on Topic 1.1 (Energy Stores, Kinetic & Gravitational Potential Energy). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "phys-exam-3a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Energy Stores, Kinetic & Gravitational Potential Energy?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Recall all 8 energy stores and 4 energy transfer pathways.",
          "It violates the core rule of Energy Stores, Kinetic & Gravitational Potential Energy by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Kinetic energy.",
          "It assumes Dissipation remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-3b",
        "label": "b)",
        "prompt": "Define \"Kinetic energy\" and explain the key principles covered in \"Kinetic, Gravitational & Elastic Potential Equations\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Kinetic energy: Energy stored in a moving object: Ek = ½mv². Furthermore, Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m). Gravitational potential energy: Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Kinetic energy: Energy stored in a moving object: Ek = ½mv²."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Gravitational potential energy: Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth."
            }
          ]
        }
      },
      {
        "id": "phys-exam-3c",
        "label": "c)",
        "prompt": "Apply \"Worked Conservation of Energy Example\" to explain how examiners award full marks on Energy Stores, Kinetic & Gravitational Potential Energy problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "When a 2.0 kg ball drops from a 5.0 m ledge (ignoring air resistance), all Ep lost converts into Ek gained. Ep = mgh = 2.0 × 9.8 × 5.0 = 98 J → Ek = 98 J just before hitting the ground.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "When a 2.0 kg ball drops from a 5.0 m ledge (ignoring air resistance), all Ep lost converts into Ek gained."
            },
            {
              "id": "mp2",
              "markDescription": "Ep = mgh = 2.0 × 9.8 × 5.0 = 98 J → Ek = 98 J just before hitting the ground."
            },
            {
              "id": "mp3",
              "markDescription": "Remember Kinetic = ½mv² (velocity is squared, so doubling speed quadruples kinetic energy!)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-4",
    "subtopicId": "phys-1-2",
    "number": 4,
    "stimulus": "Structured exam question on Topic 1.2 (Conservation of Energy, Power & Efficiency). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "phys-exam-4a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Conservation of Energy, Power & Efficiency?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Explain how lubrication and low thermal conductivity insulation reduce unwanted dissipation.",
          "It violates the core rule of Conservation of Energy, Power & Efficiency by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Power.",
          "It assumes Efficiency remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-4b",
        "label": "b)",
        "prompt": "Define \"Power\" and explain the key principles covered in \"Power & Efficiency Calculations\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Power: Rate at which energy is transferred or work is done: P = E ÷ t (W). Furthermore, Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second). Two motors lifting the same weight to the same height do identical work, but the motor completing the lift in HALF the time has TWICE the power.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Power: Rate at which energy is transferred or work is done: P = E ÷ t (W)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Power is the rate of energy transfer or rate of doing work: P = E ÷ t = W ÷ t (unit: watt, W, where 1 W = 1 joule per second)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Two motors lifting the same weight to the same height do identical work, but the motor completing the lift in HALF the time has TWICE the power."
            }
          ]
        }
      },
      {
        "id": "phys-exam-4c",
        "label": "c)",
        "prompt": "Apply \"National & Global Energy Resources\" to explain how examiners award full marks on Conservation of Energy, Power & Efficiency problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain). Renewable resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain)."
            },
            {
              "id": "mp2",
              "markDescription": "Renewable resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation."
            },
            {
              "id": "mp3",
              "markDescription": "Explain how lubrication and low thermal conductivity insulation reduce unwanted dissipation."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-5",
    "subtopicId": "phys-3-1",
    "number": 5,
    "stimulus": "Structured exam question on Topic 3.1 (Density, Internal Energy & Latent Heat). Study the information and answer parts (a), (b), and (c).",
    "diagram": "transverse-wave",
    "parts": [
      {
        "id": "phys-exam-5a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Density, Internal Energy & Latent Heat?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Describe the Eureka can practical to determine the density of irregular solids.",
          "It violates the core rule of Density, Internal Energy & Latent Heat by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Density.",
          "It assumes Internal energy remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-5b",
        "label": "b)",
        "prompt": "Define \"Density\" and explain the key principles covered in \"Internal Energy, Specific Heat Capacity & Specific Latent Heat\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Density: Mass per unit volume: ρ = m ÷ V (kg/m³). Furthermore, Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break). Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: E = m × L (units of L: J/kg).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Density: Mass per unit volume: ρ = m ÷ V (kg/m³)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: E = m × L (units of L: J/kg)."
            }
          ]
        }
      },
      {
        "id": "phys-exam-5c",
        "label": "c)",
        "prompt": "Apply \"Particle Motion in Gases & Boyle’s Law\" to explain how examiners award full marks on Density, Internal Energy & Latent Heat problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Gas molecules move rapidly in random motion. Collisions with container walls exert a net outward force at right angles to the wall, creating pressure. At constant volume, raising gas temperature increases average kinetic energy → faster, harder, and more frequent collisions → higher pressure.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Gas molecules move rapidly in random motion. Collisions with container walls exert a net outward force at right angles to the wall, creating pressure."
            },
            {
              "id": "mp2",
              "markDescription": "At constant volume, raising gas temperature increases average kinetic energy → faster, harder, and more frequent collisions → higher pressure."
            },
            {
              "id": "mp3",
              "markDescription": "Describe the Eureka can practical to determine the density of irregular solids."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-6",
    "subtopicId": "phys-4-1",
    "number": 6,
    "stimulus": "Structured exam question on Topic 4.1 (Alpha, Beta, Gamma Radiation & Half-Life). Study the information and answer parts (a), (b), and (c).",
    "diagram": "atomic-structure",
    "parts": [
      {
        "id": "phys-exam-6a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Alpha, Beta, Gamma Radiation & Half-Life?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Compare Plum Pudding, Rutherford nuclear, Bohr shells, and Chadwick’s neutron discovery.",
          "It violates the core rule of Alpha, Beta, Gamma Radiation & Half-Life by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Becquerel (Bq).",
          "It assumes Half-life remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-6b",
        "label": "b)",
        "prompt": "Define \"Becquerel (Bq)\" and explain the key principles covered in \"Alpha, Beta & Gamma Decay Equations\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Becquerel (Bq): Unit of radioactive activity equal to 1 nuclear decay per second. Furthermore, Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life. Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Becquerel (Bq): Unit of radioactive activity equal to 1 nuclear decay per second."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He."
            }
          ]
        }
      },
      {
        "id": "phys-exam-6c",
        "label": "c)",
        "prompt": "Apply \"Half-Life, Contamination vs Irradiation & Fission/Fusion\" to explain how examiners award full marks on Alpha, Beta, Gamma Radiation & Half-Life problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Half-life: Time for undecayed nuclei (or count rate) to halve. Example: 400 Bq dropping to 50 Bq requires 3 halvings (400 → 200 → 100 → 50); if this takes 24 hours, half-life = 24 ÷ 3 = 8 hours. Irradiation is exposing an object to radiation from an external source (does NOT make the object radioactive; stopped by lead shielding/distance). Contamination is unwanted radioactive atoms getting ON or INSIDE an object (continues emitting radiation until decayed/removed — alpha is most dangerous inside the body!). Avoid: Students often claim an irradiated surgical tool becomes radioactive — IT DOES NOT! Only CONTAMINATION transfers radioactive atoms onto the object.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Half-life: Time for undecayed nuclei (or count rate) to halve. Example: 400 Bq dropping to 50 Bq requires 3 halvings (400 → 200 → 100 → 50); if this takes 24 hours, half-life = 24 ÷ 3 = 8 hours."
            },
            {
              "id": "mp2",
              "markDescription": "Irradiation is exposing an object to radiation from an external source (does NOT make the object radioactive; stopped by lead shielding/distance). Contamination is unwanted radioactive atoms getting ON or INSIDE an object (continues emitting radiation until decayed/removed — alpha is most dangerous inside the body!)."
            },
            {
              "id": "mp3",
              "markDescription": "Students often claim an irradiated surgical tool becomes radioactive — IT DOES NOT! Only CONTAMINATION transfers radioactive atoms onto the object."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-7",
    "subtopicId": "phys-5-1",
    "number": 7,
    "stimulus": "Structured exam question on Topic 5.1 (Resultant Forces, F = ma & Stopping Distances). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "phys-exam-7a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Resultant Forces, F = ma & Stopping Distances?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Apply Newton’s three laws, F = ma, and v² − u² = 2as to motion problems.",
          "It violates the core rule of Resultant Forces, F = ma & Stopping Distances by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Resultant force.",
          "It assumes Thinking distance remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-7b",
        "label": "b)",
        "prompt": "Define \"Resultant force\" and explain the key principles covered in \"Uniform Acceleration & Terminal Velocity\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Resultant force: Single overall force having the same effect on motion as all individual forces combined. Furthermore, Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres). On a velocity–time graph, gradient = acceleration and area under the line = distance travelled.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Resultant force: Single overall force having the same effect on motion as all individual forces combined."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: On a velocity–time graph, gradient = acceleration and area under the line = distance travelled."
            }
          ]
        }
      },
      {
        "id": "phys-exam-7c",
        "label": "c)",
        "prompt": "Apply \"Stopping Distances & Momentum Safety\" to explain how examiners award full marks on Resultant Forces, F = ma & Stopping Distances problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Stopping Distance = Thinking Distance + Braking Distance. Thinking distance (distance travelled during driver reaction time, ~0.2–0.9 s) increases with speed, tiredness, alcohol/drugs, and distractions (phone). Avoid: Do NOT list \"icy road\" as affecting thinking distance — road/tyre conditions affect BRAKING distance only; driver state (drugs, fatigue, distraction) affects THINKING distance; SPEED affects BOTH!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Stopping Distance = Thinking Distance + Braking Distance."
            },
            {
              "id": "mp2",
              "markDescription": "Thinking distance (distance travelled during driver reaction time, ~0.2–0.9 s) increases with speed, tiredness, alcohol/drugs, and distractions (phone)."
            },
            {
              "id": "mp3",
              "markDescription": "Do NOT list \"icy road\" as affecting thinking distance — road/tyre conditions affect BRAKING distance only; driver state (drugs, fatigue, distraction) affects THINKING distance; SPEED affects BOTH!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-8",
    "subtopicId": "phys-6-1",
    "number": 8,
    "stimulus": "Structured exam question on Topic 6.1 (Transverse & Longitudinal Waves (v = fλ)). Study the information and answer parts (a), (b), and (c).",
    "diagram": "transverse-wave",
    "parts": [
      {
        "id": "phys-exam-8a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Transverse & Longitudinal Waves (v = fλ)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Distinguish transverse and longitudinal waves and measure wave speed in a ripple tank.",
          "It violates the core rule of Transverse & Longitudinal Waves (v = fλ) by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Frequency.",
          "It assumes Wavelength remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-8b",
        "label": "b)",
        "prompt": "Define \"Frequency\" and explain the key principles covered in \"Refraction & Wavefront Diagrams\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Frequency: Number of complete waves passing a fixed point each second, measured in hertz (Hz). Furthermore, When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal. During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Frequency: Number of complete waves passing a fixed point each second, measured in hertz (Hz)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged."
            }
          ]
        }
      },
      {
        "id": "phys-exam-8c",
        "label": "c)",
        "prompt": "Apply \"The Electromagnetic Spectrum & Hazards\" to explain how examiners award full marks on Transverse & Longitudinal Waves (v = fλ) problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Continuous spectrum of transverse waves travelling at 3.0 × 10⁸ m/s in vacuum (long λ → short λ): Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays. Radio waves are produced by oscillations in electrical circuits; gamma rays originate from changes inside atomic nuclei.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Continuous spectrum of transverse waves travelling at 3.0 × 10⁸ m/s in vacuum (long λ → short λ): Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays."
            },
            {
              "id": "mp2",
              "markDescription": "Radio waves are produced by oscillations in electrical circuits; gamma rays originate from changes inside atomic nuclei."
            },
            {
              "id": "mp3",
              "markDescription": "Distinguish transverse and longitudinal waves and measure wave speed in a ripple tank."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "phys-exam-9",
    "subtopicId": "phys-8-1",
    "number": 9,
    "stimulus": "Structured exam question on Topic 8.1 (Life Cycle of Stars & Red-Shift). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "phys-exam-9a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Life Cycle of Stars & Red-Shift?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration.",
          "It violates the core rule of Life Cycle of Stars & Red-Shift by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Main sequence star.",
          "It assumes Supernova remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "phys-exam-9b",
        "label": "b)",
        "prompt": "Define \"Main sequence star\" and explain the key principles covered in \"Life Cycle of Stars & Element Synthesis\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Main sequence star: Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion. Furthermore, All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium. Main sequence stage: Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Main sequence star: Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Main sequence stage: Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion."
            }
          ]
        }
      },
      {
        "id": "phys-exam-9c",
        "label": "c)",
        "prompt": "Apply \"Red-Shift & Evidence for The Big Bang\" to explain how examiners award full marks on Life Cycle of Stars & Red-Shift problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Red-shift is the observed increase in wavelength of light arriving from distant galaxies — absorption lines shift toward the red end of the spectrum because galaxies are moving away as space itself expands. The further away a galaxy is, the GREATER its red-shift and the FASTER it is receding away from us.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Red-shift is the observed increase in wavelength of light arriving from distant galaxies — absorption lines shift toward the red end of the spectrum because galaxies are moving away as space itself expands."
            },
            {
              "id": "mp2",
              "markDescription": "The further away a galaxy is, the GREATER its red-shift and the FASTER it is receding away from us."
            },
            {
              "id": "mp3",
              "markDescription": "Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration."
            }
          ]
        }
      }
    ]
  }
];

export const PHYSICS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "phys-pp-2024-p1",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Paper 1: Energy, Electricity, Particle Model & Atomic Structure (8463/1H)",
    "tier": "Higher",
    "series": "June 2024",
    "paperCode": "8463/1H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes Official AQA GCSE Physics Equations Sheet Insert (2024).",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Calculate the gravitational potential energy gained by a 65 kg climber ascending 40 m (g = 9.8 N/kg).",
        "marks": 2,
        "markScheme": [
          "Formula: Ep = mgh (1 mark)",
          "Ep = 65 × 9.8 × 40 = 25,480 J (1 mark)"
        ]
      },
      {
        "number": "01",
        "question": "[Topic 1.1 — Energy Stores, Kinetic & Gravitational Potential Energy] (a) Define Kinetic energy. (b) Apply the principles of \"Energy Stores & Pathways\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Kinetic energy — Energy stored in a moving object: Ek = ½mv².",
          "2 marks: The 8 energy stores: Kinetic, Gravitational potential, Elastic potential, Thermal, Chemical, Magnetic, Electrostatic, and Nuclear.",
          "1 mark: Energy is transferred between stores by 4 pathways: Mechanical work (a force moving an object), Electrical work (charges moving through a p.d.), Heating, and Radiation (light/sound waves)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.1 — Current, Potential Difference & Series/Parallel Circuits] (a) Define Current. (b) Apply the principles of \"I–V Characteristics, Thermistors & LDRs\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Current — Rate of flow of electrical charge measured in amperes (A): Q = It.",
          "2 marks: Ohmic conductor (fixed resistor at constant temperature): I–V graph is a straight line through the origin (R is constant).",
          "1 mark: Filament lamp: S-shaped curve flattening at high V — as current heats the filament, vibrating metal ions collide more with electrons, INCREASING resistance."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 4.1 — Alpha, Beta, Gamma Radiation & Half-Life] (a) Define Becquerel (Bq). (b) Apply the principles of \"Half-Life, Contamination vs Irradiation & Fission/Fusion\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Becquerel (Bq) — Unit of radioactive activity equal to 1 nuclear decay per second.",
          "2 marks: Half-life: Time for undecayed nuclei (or count rate) to halve. Example: 400 Bq dropping to 50 Bq requires 3 halvings (400 → 200 → 100 → 50); if this takes 24 hours, half-life = 24 ÷ 3 = 8 hours.",
          "1 mark: Irradiation is exposing an object to radiation from an external source (does NOT make the object radioactive; stopped by lead shielding/distance). Contamination is unwanted radioactive atoms getting ON or INSIDE an object (continues emitting radiation until decayed/removed — alpha is most dangerous inside the body!)."
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Paper 2: Forces, Waves, Magnetism & Space Physics (8463/2H)",
    "tier": "Higher",
    "series": "June 2024",
    "paperCode": "8463/2H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes Official AQA GCSE Physics Equations Sheet Insert (2024).",
    "sampleQuestions": [
      {
        "number": "01.1",
        "question": "Explain how red-shift of light from distant galaxies provides evidence for the Big Bang Theory.",
        "marks": 3,
        "markScheme": [
          "Observed wavelength increases / shifts toward red end of spectrum",
          "More distant galaxies have greater red-shift and recede faster",
          "Proves space itself is expanding from an initial hot, dense state"
        ]
      },
      {
        "number": "01",
        "question": "[Topic 4.1 — Alpha, Beta, Gamma Radiation & Half-Life] (a) Define Becquerel (Bq). (b) Apply the principles of \"Development of the Atomic Model & Isotopes\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Becquerel (Bq) — Unit of radioactive activity equal to 1 nuclear decay per second.",
          "2 marks: Thomson’s Plum Pudding Model imagined a positively charged sphere studded with negative electrons.",
          "1 mark: Rutherford’s alpha particle scattering experiment disproved it: most alpha particles passed straight through gold foil (atom is mostly empty space), while a tiny fraction deflected sharply back (mass and positive charge sit in a tiny dense nucleus)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 6.1 — Transverse & Longitudinal Waves (v = fλ)] (a) Define Frequency. (b) Apply the principles of \"Refraction & Wavefront Diagrams\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Frequency — Number of complete waves passing a fixed point each second, measured in hertz (Hz).",
          "2 marks: When a wave crosses a boundary at an angle into a denser medium (e.g., air → glass), the wavefront slows down first on the side entering glass, causing the wave to bend TOWARD the normal.",
          "1 mark: During refraction, wave SPEED and WAVELENGTH decrease proportionally while FREQUENCY stays strictly unchanged."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 8.1 — Life Cycle of Stars & Red-Shift] (a) Define Main sequence star. (b) Apply the principles of \"Red-Shift & Evidence for The Big Bang\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Main sequence star — Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.",
          "2 marks: Red-shift is the observed increase in wavelength of light arriving from distant galaxies — absorption lines shift toward the red end of the spectrum because galaxies are moving away as space itself expands.",
          "1 mark: The further away a galaxy is, the GREATER its red-shift and the FASTER it is receding away from us."
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2023-p1",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Paper 1: Energy, Electricity, Particle Model & Atomic Structure (8463/1H)",
    "tier": "Higher",
    "series": "June 2023",
    "paperCode": "8463/1H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes Official AQA GCSE Physics Equations Sheet Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.2 — Conservation of Energy, Power & Efficiency] (a) Define Power. (b) Apply the principles of \"Reducing Unwanted Energy Transfers\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Power — Rate at which energy is transferred or work is done: P = E ÷ t (W).",
          "2 marks: Principle of conservation of energy: Energy cannot be created or destroyed, only transferred usefully, stored, or dissipated into thermal stores of the surroundings.",
          "1 mark: Lubrication (oil/grease) reduces friction between moving mechanical parts, cutting unwanted heating."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 3.1 — Density, Internal Energy & Latent Heat] (a) Define Density. (b) Apply the principles of \"Internal Energy, Specific Heat Capacity & Specific Latent Heat\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Density — Mass per unit volume: ρ = m ÷ V (kg/m³).",
          "2 marks: Heating a system increases its internal energy — either raising temperature (increasing particles’ kinetic energy: ΔE = mcΔθ) OR producing a change of state (increasing particles’ potential energy as intermolecular bonds weaken/break).",
          "1 mark: Specific latent heat (L) is the energy required to change the state of 1 kg of a substance WITHOUT changing its temperature: E = m × L (units of L: J/kg)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.1 — Resultant Forces, F = ma & Stopping Distances] (a) Define Resultant force. (b) Apply the principles of \"Stopping Distances & Momentum Safety\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Resultant force — Single overall force having the same effect on motion as all individual forces combined.",
          "2 marks: Stopping Distance = Thinking Distance + Braking Distance.",
          "1 mark: Thinking distance (distance travelled during driver reaction time, ~0.2–0.9 s) increases with speed, tiredness, alcohol/drugs, and distractions (phone)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 7.1 — Magnetic Fields, Motor Effect & Transformers] (a) Define Magnetic flux density (B). (b) Apply the principles of \"Magnetic Fields, Induced Magnets & Electromagnets\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Magnetic flux density (B) — Strength of a magnetic field measured in tesla (T), used in F = BIl.",
          "2 marks: Permanent magnets produce their own constant magnetic field; induced magnets (iron, steel, cobalt, nickel) become magnetic only when placed inside a magnetic field and ALWAYS experience an ATTRACTIVE force.",
          "1 mark: Field lines point from NORTH to SOUTH and are densest at the poles where the field is strongest."
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Paper 2: Forces, Waves, Magnetism & Space Physics (8463/2H)",
    "tier": "Higher",
    "series": "June 2023",
    "paperCode": "8463/2H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes Official AQA GCSE Physics Equations Sheet Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 5.1 — Resultant Forces, F = ma & Stopping Distances] (a) Define Resultant force. (b) Apply the principles of \"Newton’s Three Laws & Resultant Forces\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Resultant force — Single overall force having the same effect on motion as all individual forces combined.",
          "2 marks: Newton’s First Law: If resultant force is 0 N, a stationary object stays stationary and a moving object continues at constant velocity (same speed AND direction).",
          "1 mark: Newton’s Second Law: Resultant force (N) = mass (kg) × acceleration (m/s²): F = m × a. Inertial mass = F ÷ a measures how hard it is to change an object’s velocity."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 7.1 — Magnetic Fields, Motor Effect & Transformers] (a) Define Magnetic flux density (B). (b) Apply the principles of \"The Motor Effect, F = BIl & DC Motors\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Magnetic flux density (B) — Strength of a magnetic field measured in tesla (T), used in F = BIl.",
          "2 marks: When a wire carrying current I sits at 90° to a magnetic field of flux density B (tesla, T), it experiences a force: F = B × I × l (where l is wire length inside the field in metres).",
          "1 mark: Fleming’s LEFT-Hand Rule gives the direction: ThuMb = Force/Motion, First finger = Field (N → S), SeCond finger = Conventional Current (+ → −)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 1.1 — Energy Stores, Kinetic & Gravitational Potential Energy] (a) Define Kinetic energy. (b) Apply the principles of \"Worked Conservation of Energy Example\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Kinetic energy — Energy stored in a moving object: Ek = ½mv².",
          "2 marks: When a 2.0 kg ball drops from a 5.0 m ledge (ignoring air resistance), all Ep lost converts into Ek gained.",
          "1 mark: Ep = mgh = 2.0 × 9.8 × 5.0 = 98 J → Ek = 98 J just before hitting the ground."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 2.1 — Current, Potential Difference & Series/Parallel Circuits] (a) Define Current. (b) Apply the principles of \"Charge, Current, Potential Difference & Resistance\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Current — Rate of flow of electrical charge measured in amperes (A): Q = It.",
          "2 marks: Electric current (I, amps) is the rate of flow of electrical charge: Q = I × t (charge Q in coulombs, C).",
          "1 mark: Potential difference (V, volts) is the energy transferred per coulomb of charge: E = Q × V. Ohm’s Law: V = I × R (resistance R in ohms, Ω)."
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2022-p1",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Paper 1: Energy, Electricity, Particle Model & Atomic Structure (8463/1H)",
    "tier": "Higher",
    "series": "June 2022",
    "paperCode": "8463/1H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes Official AQA GCSE Physics Equations Sheet Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 2.1 — Current, Potential Difference & Series/Parallel Circuits] (a) Define Current. (b) Apply the principles of \"Charge, Current, Potential Difference & Resistance\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Current — Rate of flow of electrical charge measured in amperes (A): Q = It.",
          "2 marks: Electric current (I, amps) is the rate of flow of electrical charge: Q = I × t (charge Q in coulombs, C).",
          "1 mark: Potential difference (V, volts) is the energy transferred per coulomb of charge: E = Q × V. Ohm’s Law: V = I × R (resistance R in ohms, Ω)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.1 — Alpha, Beta, Gamma Radiation & Half-Life] (a) Define Becquerel (Bq). (b) Apply the principles of \"Alpha, Beta & Gamma Decay Equations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Becquerel (Bq) — Unit of radioactive activity equal to 1 nuclear decay per second.",
          "2 marks: Radioactive decay is completely RANDOM; activity is measured in becquerels (Bq = 1 decay/s) using a Geiger–Müller tube and decreases exponentially over each half-life.",
          "1 mark: Alpha (⁴₂He): 2 protons + 2 neutrons, strongly ionising, stopped by paper or ~5 cm air. Equation reduces mass number by 4 and atomic number by 2: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 6.1 — Transverse & Longitudinal Waves (v = fλ)] (a) Define Frequency. (b) Apply the principles of \"The Electromagnetic Spectrum & Hazards\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Frequency — Number of complete waves passing a fixed point each second, measured in hertz (Hz).",
          "2 marks: Continuous spectrum of transverse waves travelling at 3.0 × 10⁸ m/s in vacuum (long λ → short λ): Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays.",
          "1 mark: Radio waves are produced by oscillations in electrical circuits; gamma rays originate from changes inside atomic nuclei."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 8.1 — Life Cycle of Stars & Red-Shift] (a) Define Main sequence star. (b) Apply the principles of \"Circular Orbits & Gravity\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Main sequence star — Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.",
          "2 marks: Gravity supplies the inward centripetal force that keeps planets orbiting the Sun and natural/artificial satellites orbiting planets.",
          "1 mark: For a circular orbit at constant SPEED, the object’s DIRECTION is constantly changing → therefore its VELOCITY is changing → it is continuously accelerating toward the centre of the orbit!"
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "Paper 2: Forces, Waves, Magnetism & Space Physics (8463/2H)",
    "tier": "Higher",
    "series": "June 2022",
    "paperCode": "8463/2H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes Official AQA GCSE Physics Equations Sheet Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 6.1 — Transverse & Longitudinal Waves (v = fλ)] (a) Define Frequency. (b) Apply the principles of \"Wave Properties & The Wave Equation\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Frequency — Number of complete waves passing a fixed point each second, measured in hertz (Hz).",
          "2 marks: Waves transfer ENERGY without transferring matter. Amplitude = max displacement from undisturbed position; Wavelength λ = distance from crest to adjacent crest; Frequency f = complete waves passing a point per second (Hz); Period T = 1 ÷ f.",
          "1 mark: Transverse waves (all EM waves, water ripples, S-waves): oscillations are PERPENDICULAR (90°) to energy transfer."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 8.1 — Life Cycle of Stars & Red-Shift] (a) Define Main sequence star. (b) Apply the principles of \"Life Cycle of Stars & Element Synthesis\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Main sequence star — Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.",
          "2 marks: All stars begin when gravity pulls dust and hydrogen gas in a NEBULA together into a hot dense PROTOSTAR, igniting nuclear fusion of hydrogen into helium.",
          "1 mark: Main sequence stage: Inward gravitational pull is in exact equilibrium with outward thermal/radiation pressure from fusion."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 1.2 — Conservation of Energy, Power & Efficiency] (a) Define Power. (b) Apply the principles of \"National & Global Energy Resources\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Power — Rate at which energy is transferred or work is done: P = E ÷ t (W).",
          "2 marks: Non-renewable resources (coal, oil, natural gas, nuclear fuel) are finite. Fossil fuels are reliable and meet peak electricity demand rapidly, but emit CO₂ (global warming) and SO₂ (acid rain).",
          "1 mark: Renewable resources (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels) are replenished as quickly as they are used and release little/no net CO₂ during electricity generation."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 3.1 — Density, Internal Energy & Latent Heat] (a) Define Density. (b) Apply the principles of \"Density & Particle Model of States of Matter\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Density — Mass per unit volume: ρ = m ÷ V (kg/m³).",
          "2 marks: Density = mass ÷ volume: ρ = m ÷ V (kg/m³). Solids are usually densest because particles are tightly packed in a regular arrangement; gases have very low density due to huge gaps between fast-moving particles.",
          "1 mark: Required practical (irregular solid density): Measure mass m on an electronic balance; submerge the object gently into a Eureka can filled to the spout and collect displaced water in a measuring cylinder to find volume V; calculate ρ = m ÷ V."
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2019-p1",
    "specEra": "old",
    "year": "2019",
    "title": "Paper 1 (Pre-Covid Full Exam Series — 8463/1H)",
    "tier": "Higher",
    "series": "June 2019",
    "paperCode": "8463/1H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes AQA Physics Data & Formulae Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.1 — Density, Internal Energy & Latent Heat] (a) Define Density. (b) Apply the principles of \"Density & Particle Model of States of Matter\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Density — Mass per unit volume: ρ = m ÷ V (kg/m³).",
          "2 marks: Density = mass ÷ volume: ρ = m ÷ V (kg/m³). Solids are usually densest because particles are tightly packed in a regular arrangement; gases have very low density due to huge gaps between fast-moving particles.",
          "1 mark: Required practical (irregular solid density): Measure mass m on an electronic balance; submerge the object gently into a Eureka can filled to the spout and collect displaced water in a measuring cylinder to find volume V; calculate ρ = m ÷ V."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 5.1 — Resultant Forces, F = ma & Stopping Distances] (a) Define Resultant force. (b) Apply the principles of \"Uniform Acceleration & Terminal Velocity\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Resultant force — Single overall force having the same effect on motion as all individual forces combined.",
          "2 marks: Kinematics formulas: a = (v − u) ÷ t and v² − u² = 2 × a × s (where s is distance in metres).",
          "1 mark: On a velocity–time graph, gradient = acceleration and area under the line = distance travelled."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 7.1 — Magnetic Fields, Motor Effect & Transformers] (a) Define Magnetic flux density (B). (b) Apply the principles of \"The Generator Effect & Transformers\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Magnetic flux density (B) — Strength of a magnetic field measured in tesla (T), used in F = BIl.",
          "2 marks: Generator effect (electromagnetic induction): Moving a conductor relative to a magnetic field (or changing a magnetic field through a coil) induces a potential difference across the wire — and an induced current if in a complete circuit.",
          "1 mark: Alternators use SLIP RINGS to output alternating current (AC); Dynamos use a SPLIT-RING COMMUTATOR to output direct current (DC). Microphones use sound vibrations on a diaphragm to move a coil near a magnet, inducing an electrical audio signal."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 1.1 — Energy Stores, Kinetic & Gravitational Potential Energy] (a) Define Kinetic energy. (b) Apply the principles of \"Energy Stores & Pathways\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Kinetic energy — Energy stored in a moving object: Ek = ½mv².",
          "2 marks: The 8 energy stores: Kinetic, Gravitational potential, Elastic potential, Thermal, Chemical, Magnetic, Electrostatic, and Nuclear.",
          "1 mark: Energy is transferred between stores by 4 pathways: Mechanical work (a force moving an object), Electrical work (charges moving through a p.d.), Heating, and Radiation (light/sound waves)."
        ]
      }
    ]
  },
  {
    "id": "phys-pp-2019-p2",
    "specEra": "old",
    "year": "2019",
    "title": "Paper 2 (Pre-Covid Full Exam Series — 8463/2H)",
    "tier": "Higher",
    "series": "June 2019",
    "paperCode": "8463/2H",
    "durationMinutes": 105,
    "totalMarks": 100,
    "insertNote": "Includes AQA Physics Data & Formulae Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 7.1 — Magnetic Fields, Motor Effect & Transformers] (a) Define Magnetic flux density (B). (b) Apply the principles of \"Magnetic Fields, Induced Magnets & Electromagnets\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Magnetic flux density (B) — Strength of a magnetic field measured in tesla (T), used in F = BIl.",
          "2 marks: Permanent magnets produce their own constant magnetic field; induced magnets (iron, steel, cobalt, nickel) become magnetic only when placed inside a magnetic field and ALWAYS experience an ATTRACTIVE force.",
          "1 mark: Field lines point from NORTH to SOUTH and are densest at the poles where the field is strongest."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 1.1 — Energy Stores, Kinetic & Gravitational Potential Energy] (a) Define Kinetic energy. (b) Apply the principles of \"Kinetic, Gravitational & Elastic Potential Equations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Kinetic energy — Energy stored in a moving object: Ek = ½mv².",
          "2 marks: Kinetic energy: Ek = 0.5 × mass (kg) × speed² (m/s). Rearranged for speed: v = √(2Ek ÷ m).",
          "1 mark: Gravitational potential energy: Ep = mass (kg) × gravitational field strength (N/kg) × height (m), where g = 9.8 N/kg on Earth."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 2.1 — Current, Potential Difference & Series/Parallel Circuits] (a) Define Current. (b) Apply the principles of \"Mains Electricity, Electrical Power & The National Grid\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Current — Rate of flow of electrical charge measured in amperes (A): Q = It.",
          "2 marks: UK mains electricity is alternating current (AC) at 230 V and 50 Hz. Three-core cable: Live (brown, 230 V), Neutral (blue, 0 V), Earth (green/yellow, safety wire connected to metal casing).",
          "1 mark: Power formulas: P = V × I = I² × R; Energy transferred: E = P × t = Q × V."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.1 — Alpha, Beta, Gamma Radiation & Half-Life] (a) Define Becquerel (Bq). (b) Apply the principles of \"Development of the Atomic Model & Isotopes\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Becquerel (Bq) — Unit of radioactive activity equal to 1 nuclear decay per second.",
          "2 marks: Thomson’s Plum Pudding Model imagined a positively charged sphere studded with negative electrons.",
          "1 mark: Rutherford’s alpha particle scattering experiment disproved it: most alpha particles passed straight through gold foil (atom is mostly empty space), while a tiny fraction deflected sharply back (mass and positive charge sit in a tiny dense nucleus)."
        ]
      }
    ]
  }
];

export const PHYSICS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "pkt-1",
    "term": "Acceleration",
    "definition": "Rate of change of velocity per second: a = (v − u) ÷ t (m/s²).",
    "topicNumber": 5,
    "subtopicId": "phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "pkt-2",
    "term": "Amplitude",
    "definition": "Maximum displacement of a point on a wave from its undisturbed rest position.",
    "topicNumber": 6,
    "subtopicId": "phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "pkt-3",
    "term": "Current",
    "definition": "Rate of flow of electric charge around a circuit, measured in amperes (A).",
    "topicNumber": 2,
    "subtopicId": "phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "pkt-4",
    "term": "Efficiency",
    "definition": "Ratio of useful energy (or power) output to total energy (or power) input.",
    "topicNumber": 1,
    "subtopicId": "phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "pkt-5",
    "term": "Frequency",
    "definition": "Number of complete wave cycles passing a point every second (Hz).",
    "topicNumber": 6,
    "subtopicId": "phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "pkt-6",
    "term": "Kinetic energy",
    "definition": "Energy stored in a moving object given by ½mv².",
    "topicNumber": 1,
    "subtopicId": "phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "pkt-7",
    "term": "Resistance",
    "definition": "Opposition to the flow of current, measured in ohms (Ω), where R = V ÷ I.",
    "topicNumber": 2,
    "subtopicId": "phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "pkt-8",
    "term": "Wavelength",
    "definition": "Distance between two adjacent corresponding points on a wave (crest to crest).",
    "topicNumber": 6,
    "subtopicId": "phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "pkt-9",
    "term": "Specific latent heat",
    "definition": "Energy required to change the state of 1 kg of a substance without changing temperature: E = mL.",
    "topicNumber": 3,
    "subtopicId": "phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "pkt-10",
    "term": "Half-life",
    "definition": "Time taken for half the unstable nuclei in a radioactive sample to decay.",
    "topicNumber": 4,
    "subtopicId": "phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "pkt-11",
    "term": "Magnetic flux density",
    "definition": "Strength of a magnetic field measured in tesla (T), used in F = BIl.",
    "topicNumber": 7,
    "subtopicId": "phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "pkt-12",
    "term": "Red-shift",
    "definition": "Observed lengthening of light wavelengths from distant receding galaxies.",
    "topicNumber": 8,
    "subtopicId": "phys-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "phys-kt-112",
    "term": "Dissipation",
    "definition": "Energy spreading out into less useful thermal stores in the surroundings.",
    "topicNumber": 1,
    "subtopicId": "phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "phys-kt-113",
    "term": "Elastic potential energy",
    "definition": "Energy stored in a stretched or compressed elastic object: Ee = ½ke².",
    "topicNumber": 1,
    "subtopicId": "phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "phys-kt-114",
    "term": "Closed system",
    "definition": "An object or group of objects where neither matter nor energy can enter or leave, so total energy remains strictly constant.",
    "topicNumber": 1,
    "subtopicId": "phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "phys-kt-115",
    "term": "Power",
    "definition": "Rate at which energy is transferred or work is done: P = E ÷ t (W).",
    "topicNumber": 1,
    "subtopicId": "phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "phys-kt-116",
    "term": "Thermal conductivity",
    "definition": "Rate at which heat conducts through a material; lower values mean better insulation.",
    "topicNumber": 1,
    "subtopicId": "phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "phys-kt-117",
    "term": "Potential difference",
    "definition": "Energy transferred per unit charge passed between two points, measured in volts (V).",
    "topicNumber": 2,
    "subtopicId": "phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "phys-kt-118",
    "term": "Ohmic conductor",
    "definition": "Component whose current is directly proportional to p.d. at constant temperature.",
    "topicNumber": 2,
    "subtopicId": "phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "phys-kt-119",
    "term": "Density",
    "definition": "Mass per unit volume: ρ = m ÷ V (kg/m³).",
    "topicNumber": 3,
    "subtopicId": "phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "phys-kt-120",
    "term": "Internal energy",
    "definition": "Sum of kinetic and potential energies of all particles inside a system.",
    "topicNumber": 3,
    "subtopicId": "phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "phys-kt-121",
    "term": "Becquerel (Bq)",
    "definition": "Unit of radioactive activity equal to 1 nuclear decay per second.",
    "topicNumber": 4,
    "subtopicId": "phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "phys-kt-122",
    "term": "Contamination",
    "definition": "Unwanted presence of materials containing radioactive atoms on or inside another material.",
    "topicNumber": 4,
    "subtopicId": "phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "phys-kt-123",
    "term": "Resultant force",
    "definition": "Single overall force having the same effect on motion as all individual forces combined.",
    "topicNumber": 5,
    "subtopicId": "phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "phys-kt-124",
    "term": "Thinking distance",
    "definition": "Distance a vehicle travels between the driver spotting a hazard and applying the brakes.",
    "topicNumber": 5,
    "subtopicId": "phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "phys-kt-125",
    "term": "Momentum",
    "definition": "Product of mass and velocity (p = mv), conserved in closed collisions.",
    "topicNumber": 5,
    "subtopicId": "phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "phys-kt-126",
    "term": "Refraction",
    "definition": "Change in wave direction caused by a change in wave speed when entering a different medium at an angle.",
    "topicNumber": 6,
    "subtopicId": "phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "phys-kt-127",
    "term": "Magnetic flux density (B)",
    "definition": "Strength of a magnetic field measured in tesla (T), used in F = BIl.",
    "topicNumber": 7,
    "subtopicId": "phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "phys-kt-128",
    "term": "Motor effect",
    "definition": "Force exerted on a current-carrying conductor placed at an angle to a magnetic field.",
    "topicNumber": 7,
    "subtopicId": "phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "phys-kt-129",
    "term": "Transformer",
    "definition": "Device with primary and secondary coils on an iron core that steps alternating voltage up or down.",
    "topicNumber": 7,
    "subtopicId": "phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "phys-kt-130",
    "term": "Solenoid",
    "definition": "A long helical coil of insulated wire that produces a strong, uniform magnetic field inside when electric current passes through it.",
    "topicNumber": 7,
    "subtopicId": "phys-7-1",
    "subtopicCode": "7.1"
  },
  {
    "id": "phys-kt-131",
    "term": "Main sequence star",
    "definition": "Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.",
    "topicNumber": 8,
    "subtopicId": "phys-8-1",
    "subtopicCode": "8.1"
  },
  {
    "id": "phys-kt-132",
    "term": "Supernova",
    "definition": "Explosive death of a massive star that produces elements heavier than iron.",
    "topicNumber": 8,
    "subtopicId": "phys-8-1",
    "subtopicCode": "8.1"
  }
];
