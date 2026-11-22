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
      { time: '2:45', seconds: 165, label: 'Energy Transfer Pathways', cardId: 'phys-1-1-c2' },
      { time: '3:55', seconds: 235, label: 'Mechanical & Electrical Work Done', cardId: 'phys-1-1-c3' },
    ],
    cards: [
      {
        id: 'phys-1-1-c1',
        title: 'Energy Stores, Pathways & Closed Systems',
        summary: 'The 8 energy stores, 4 transfer pathways, and how energy behaves inside a closed system.',
        bullets: [
          'A **system** is simply an object or group of objects you choose to analyse; in a closed system, total energy never changes.',
          'Whenever a system changes, energy shifts from one store to another via one of four transfer pathways.',
        ],
        subsections: [
          {
            heading: 'The 8 Energy Stores',
            bullets: [
              '**Kinetic energy** - stored in any moving object, depending on its mass and speed.',
              '**Gravitational potential** - stored in an object raised above the ground in a gravitational field.',
              '**Elastic potential** - stored when a spring or elastic band is stretched or compressed.',
              '**Thermal, chemical, magnetic, electrostatic, and nuclear** - stored in hot objects, fuels/batteries/food, magnets, electric charges, and atomic nuclei.',
            ],
          },
          {
            heading: 'The 4 Transfer Pathways',
            bullets: [
              '**Mechanical work** - a force moves an object through a distance (W = F × s).',
              '**Electrical work** - electrical charges move through a potential difference in a circuit.',
              '**Heating & radiation** - energy moves because of a temperature difference (heating) or via light and sound waves (radiation).',
            ],
            exampleHeading: 'Energy transfer in a boiling kettle',
            examples: [
              'Electrical work transfers energy from the mains power supply into the thermal energy store of the heating element.',
              'Heating then transfers energy into the thermal store of the water, raising its temperature to 100 °C.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'closed system',
            definition: 'An object or group of objects where neither matter nor energy can enter or leave, so total energy remains strictly constant.',
          },
          {
            term: 'Kinetic energy',
            definition: 'Energy stored in a moving object, calculated using Ek = ½mv².',
          },
        ],
        memoryAid: 'Remember the 8 stores with "Kids Get Excited To Catch Many Elephants Now": Kinetic, Gravitational, Elastic, Thermal, Chemical, Magnetic, Electrostatic, Nuclear.',
      },
      {
        id: 'phys-1-1-c2',
        title: 'Kinetic, Gravitational & Elastic Potential Equations',
        summary: 'Calculating Ek, Ep, Ee, and specific heat capacity using standard SI units.',
        bullets: [
          'Every GCSE energy equation outputs energy in **joules (J)** only when mass is in kg, length in m, and speed in m/s.',
        ],
        subsections: [
          {
            heading: 'Core Energy Store Formulas',
            bullets: [
              '**Kinetic energy** - Ek = 0.5 × m × v² (rearranged for speed: v = √(2Ek ÷ m)).',
              '**Gravitational potential energy** - Ep = m × g × h (on Earth, g = 9.8 N/kg).',
              '**Elastic potential energy** - Ee = 0.5 × k × e², where k is the spring constant (N/m) and e is extension (m), valid up to the limit of proportionality.',
              '**Specific heat capacity** - ΔE = m × c × Δθ links thermal energy change to mass, material c (J/kg °C), and temperature change Δθ.',
            ],
            exampleHeading: 'Worked example: Elastic potential energy in a spring',
            examples: [
              'A spring with spring constant k = 40 N/m stretches by 5 cm. First convert 5 cm to 0.05 m.',
              'Substitute into Ee = 0.5 × k × e² = 0.5 × 40 × (0.05)² = 20 × 0.0025 = 0.05 J.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'spring constant',
            definition: 'A measure of a spring’s stiffness, equal to the force needed per metre of extension (N/m).',
          },
        ],
        commonMistake: 'Students often substitute mass in grams (g) or extension in centimetres (cm) directly into Ek or Ee. Instead, always divide g by 1,000 to get kg and cm by 100 to get m first.',
      },
      {
        id: 'phys-1-1-c3',
        title: 'Equating Energy Stores in Falling & Launching Objects',
        summary: 'Using conservation of energy to equate gravitational potential energy lost to kinetic energy gained.',
        bullets: [
          'In an ideal fall with negligible air resistance, **Ep lost = Ek gained** — no energy is lost via dissipation to the surroundings.',
        ],
        subsections: [
          {
            heading: 'Step-by-Step Conservation Calculation',
            bullets: [
              '**Step 1: Find Ep lost** - use Ep = mgh with the vertical drop height h.',
              '**Step 2: Equate Ep = Ek** - set 0.5 × m × v² equal to Ep lost (notice mass m cancels on both sides!).',
              '**Step 3: Solve for v** - take the square root of (2Ek ÷ m) and include units (m/s).',
            ],
            exampleHeading: 'Worked example: Ball dropped from a 5.0 m ledge',
            examples: [
              'A 2.0 kg ball falls 5.0 m (g = 9.8 N/kg): Ep = 2.0 × 9.8 × 5.0 = 98 J.',
              'Ignoring air resistance, Ek at the bottom = 98 J → 98 = 0.5 × 2.0 × v² → v² = 98 → v = √98 ≈ 9.9 m/s.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'dissipation',
            definition: 'Energy spreading out wastefully into thermal stores of the surroundings where it cannot easily be reused.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Kinetic energy', definition: 'Energy stored in a moving object: Ek = ½mv² (J).' },
      { term: 'Gravitational potential energy', definition: 'Energy stored by an object raised in a gravitational field: Ep = mgh (J).' },
      { term: 'Elastic potential energy', definition: 'Energy stored in a stretched or compressed elastic object: Ee = ½ke² (J).' },
      { term: 'Dissipation', definition: 'Energy spreading out into less useful thermal stores in the surroundings.' },
      { term: 'Specific heat capacity', definition: 'Energy required to raise the temperature of 1 kg of a substance by 1 °C.' },
    ],
    checklistPoints: [
      'Recall all 8 energy stores and 4 energy transfer pathways.',
      'Calculate Ek = ½mv², Ep = mgh, Ee = ½ke², and ΔE = mcΔθ using SI units (kg, m, m/s).',
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
        summary: 'Minimising wasted thermal dissipation with lubrication and low thermal conductivity insulation.',
        bullets: [
          'The **principle of conservation of energy** states that energy cannot be created or destroyed — only transferred usefully, stored, or dissipated.',
        ],
        subsections: [
          {
            heading: 'Practical Ways to Reduce Energy Waste',
            bullets: [
              '**Lubrication** - oil or grease reduces friction between moving mechanical surfaces, lowering wasted heating.',
              '**Thermal insulation** - thicker walls and materials with low thermal conductivity (cavity wall foam, loft fibreglass, double glazing) slow heat loss by conduction.',
              '**Streamlining** - aerodynamic vehicle shapes reduce air resistance (drag), cutting mechanical work wasted against air.',
            ],
            exampleHeading: 'Worked example: Reducing heat loss from a house',
            examples: [
              'Filling a wall cavity with insulating foam traps pockets of still air, which has very low thermal conductivity and prevents convection currents.',
              'Increasing wall thickness further reduces the rate of cooling across the building.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'thermal conductivity',
            definition: 'A measure of how quickly thermal energy transfers through a material by conduction; good insulators have very low thermal conductivity.',
          },
          {
            term: 'conservation of energy',
            definition: 'The law stating that total energy in a closed system stays constant because energy cannot be created or destroyed.',
          },
        ],
      },
      {
        id: 'phys-1-2-c2',
        title: 'Power & Efficiency Calculations',
        summary: 'Calculating rate of energy transfer (P = E/t) and efficiency as a decimal or percentage.',
        bullets: [
          '**Power** is the rate at which energy is transferred or work is done: P = E ÷ t = W ÷ t, measured in watts (1 W = 1 J/s).',
        ],
        subsections: [
          {
            heading: 'Comparing Power & Efficiency',
            bullets: [
              '**Power comparison** - two motors lifting the same weight through the same height do identical work, but the motor finishing in half the time has double the power.',
              '**Efficiency formula** - Efficiency = Useful output energy ÷ Total input energy (or Useful power output ÷ Total power input). Multiply by 100 for a percentage.',
            ],
            exampleHeading: 'Worked example: Lamp efficiency and wasted power',
            examples: [
              'An LED lamp takes in 60 W of electrical power and transfers 45 W usefully as light.',
              'Efficiency = 45 ÷ 60 = 0.75 (or 75%). The remaining 60 − 45 = 15 W is dissipated as thermal energy.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'Efficiency',
            definition: 'The fraction or percentage of total input energy or power that is transferred usefully (never greater than 1 or 100%).',
          },
        ],
        commonMistake: 'Students often divide total input by useful output and get an efficiency above 100% (like 1.33). Instead, efficiency must ALWAYS be useful ÷ total (≤ 1.0 or ≤ 100%).',
      },
      {
        id: 'phys-1-2-c3',
        title: 'National & Global Energy Resources',
        summary: 'Evaluating renewable and non-renewable energy resources on reliability, cost, and environmental impact.',
        bullets: [
          'Every energy resource involves trade-offs between **reliability** (meeting sudden peak electricity demand) and **environmental impact**.',
        ],
        subsections: [
          {
            heading: 'Non-Renewable vs Renewable Resources',
            bullets: [
              '**Non-renewable (coal, oil, gas, nuclear)** - finite reserves; fossil fuels are reliable and respond quickly to demand but release CO₂ (climate change) and SO₂ (acid rain). Nuclear produces no CO₂ during generation but creates radioactive waste.',
              '**Renewable (wind, solar, hydroelectric, geothermal, tidal, wave, biofuels)** - replenished as quickly as used and produce little/no net CO₂ during generation, though wind and solar are intermittent.',
            ],
          },
        ],
        memoryAid: 'Efficiency = Useful ÷ Total (always the SMALLER number divided by the BIGGER number, so it can never beat 1.0!).',
      },
    ],
    keyTerms: [
      { term: 'Power', definition: 'Rate at which energy is transferred or work is done: P = E ÷ t (W).' },
      { term: 'Efficiency', definition: 'Fraction or percentage of input energy transferred usefully.' },
      { term: 'Thermal conductivity', definition: 'Rate at which heat conducts through a material; lower values mean better insulation.' },
      { term: 'Renewable energy resource', definition: 'An energy resource that is replenished naturally at least as quickly as it is used.' },
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
    videoTitle: "GCSE Physics - Voltage, Current & Resistance | V = IR Equation | IV Graphs",
    youtubeId: 'BbizKa6eywo',
    videoChannel: 'Cognito',
    videoDuration: '4:35',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: "Introduction to V=IR (Ohm's Law)", cardId: 'phys-2-1-c1' },
      { time: '0:45', seconds: 45, label: 'Calculating Resistance by Rearranging V=IR', cardId: 'phys-2-1-c1' },
      { time: '2:05', seconds: 125, label: 'How Resistance Value Affects the I-V Graph', cardId: 'phys-2-1-c2' },
      { time: '3:04', seconds: 184, label: 'I-V Graphs for Filament Lamps and Diodes', cardId: 'phys-2-1-c2' },
    ],
    cards: [
      {
        id: 'phys-2-1-c1',
        title: 'Charge, Current, Potential Difference & Circuit Rules',
        summary: 'Applying Q = It, V = IR, and contrasting series with parallel circuits.',
        diagram: 'circuit-series-parallel',
        bullets: [
          'Electric **current** (I, amps) is the rate of flow of electrical charge: Q = I × t (charge Q in coulombs, C).',
          'Potential difference (V, volts) is energy transferred per coulomb of charge: E = Q × V, and **V = I × R**.',
        ],
        subsections: [
          {
            heading: 'Series vs Parallel Circuit Rules',
            bullets: [
              '**Series circuits** - current is identical everywhere (I₁ = I₂), total resistance adds up (R_total = R₁ + R₂), and supply potential difference is shared across components.',
              '**Parallel circuits** - potential difference across every branch equals the supply p.d., total current splits between branches, and adding a branch DECREASES total resistance because charge has extra pathways.',
            ],
            exampleHeading: 'Worked example: Charge flow and Ohm’s Law',
            examples: [
              'A current of 2.5 A flows through a 4 Ω resistor for 2 minutes (120 s).',
              'Charge Q = I × t = 2.5 × 120 = 300 C. Potential difference V = I × R = 2.5 × 4 = 10 V.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'potential difference',
            definition: 'Work done (energy transferred) per coulomb of electrical charge moving between two points in a circuit (1 V = 1 J/C).',
          },
          {
            term: 'current',
            definition: 'The rate of flow of electrical charge around a closed circuit, measured in amperes (A) with an ammeter in series.',
          },
        ],
      },
      {
        id: 'phys-2-1-c2',
        title: 'I–V Characteristics, Thermistors & LDRs',
        summary: 'Interpreting I–V graphs for ohmic resistors, filament lamps, diodes, thermistors, and LDRs.',
        bullets: [
          'An ohmic conductor (fixed resistor at constant temperature) has a straight-line I–V graph through the origin because its resistance stays constant.',
        ],
        subsections: [
          {
            heading: 'Non-Ohmic Components & Sensing Circuits',
            bullets: [
              '**Filament lamp** - S-shaped curve flattening at high p.d.; hotter metal ions vibrate faster and collide more frequently with electrons, increasing resistance.',
              '**Diode** - conducts sharply in the forward direction above ~0.6 V, but has extremely high resistance in reverse so virtually zero current flows backwards.',
              '**Thermistor & LDR** - an NTC thermistor’s resistance drops as temperature rises (used in thermostats); an LDR’s resistance drops as light intensity increases (used in automatic street lights).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'ohmic conductor',
            definition: 'A component whose current is directly proportional to potential difference at constant temperature, giving constant resistance.',
          },
        ],
        memoryAid: 'For BOTH Thermistors and LDRs, MORE input (more heat or more light) = LESS resistance!',
      },
      {
        id: 'phys-2-1-c3',
        title: 'Mains Electricity, Electrical Power & The National Grid',
        summary: 'UK 230 V AC three-core wiring, P = VI = I²R, and National Grid step-up/step-down transformers.',
        bullets: [
          'UK mains electricity is alternating current (AC) at **230 V** and **50 Hz**.',
        ],
        subsections: [
          {
            heading: 'Three-Core Wiring & National Grid Efficiency',
            bullets: [
              '**Cable wires** - Live (brown, 230 V), Neutral (blue, 0 V completing the circuit), and Earth (green/yellow, 0 V safety wire attached to metal casings).',
              '**Electrical power** - P = V × I and P = I² × R; Energy transferred E = P × t = Q × V.',
              '**National Grid transformers** - step-up transformers raise voltage to ~400,000 V to slash current, minimising thermal losses in cables (P = I²R); step-down transformers lower voltage back to a safe 230 V for homes.',
            ],
            exampleHeading: 'Worked example: Power lost in a cable',
            examples: [
              'A cable of resistance 2 Ω carries a current of 10 A → power dissipated as heat P = I²R = 10² × 2 = 200 W.',
              'Halving the current to 5 A cuts wasted power to 5² × 2 = 50 W (a 4× reduction!).',
            ],
          },
        ],
        commonMistake: 'Students often claim an appliance is safe when switched off even if the switch is in the neutral wire. Instead, switches and fuses MUST be placed in the LIVE wire so the appliance is isolated from 230 V.',
      },
    ],
    keyTerms: [
      { term: 'Current', definition: 'Rate of flow of electrical charge measured in amperes (A): Q = It.' },
      { term: 'Potential difference', definition: 'Energy transferred per unit charge passed between two points, measured in volts (V).' },
      { term: 'Ohmic conductor', definition: 'Component whose current is directly proportional to p.d. at constant temperature.' },
      { term: 'Thermistor', definition: 'Temperature-dependent resistor whose resistance decreases as temperature increases.' },
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
      { time: '5:17', seconds: 317, label: 'Specific Latent Heat Calculation Example', cardId: 'phys-3-1-c3' },
    ],
    cards: [
      {
        id: 'phys-3-1-c1',
        title: 'Density & The Eureka Can Required Practical',
        summary: 'Calculating density (ρ = m/V) and measuring irregular solids via water displacement.',
        bullets: [
          '**Density** is mass per unit volume: ρ = m ÷ V (kg/m³ or g/cm³). Solids are usually densest because their particles are packed tightly in fixed positions.',
        ],
        subsections: [
          {
            heading: 'Measuring Density of Irregular Solids',
            bullets: [
              '**Step 1: Measure mass** - place the dry object on an electronic top-pan balance (check for zero error first).',
              '**Step 2: Measure volume** - fill a Eureka (displacement) can to its spout, gently lower the object in on a thread, and collect displaced water in a measuring cylinder.',
              '**Step 3: Calculate ρ** - divide mass by volume; changes of state are physical changes so mass is always conserved.',
            ],
            exampleHeading: 'Worked example: Irregular metal block density',
            examples: [
              'A rock has mass 135 g and displaces 50 cm³ of water in a Eureka can.',
              'Density ρ = 135 ÷ 50 = 2.7 g/cm³ (which equals 2,700 kg/m³).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'Density',
            definition: 'The mass per unit volume of a substance, calculated as ρ = m ÷ V (kg/m³).',
          },
          {
            term: 'physical changes',
            definition: 'Changes of state where no new substances form, mass is conserved, and the original properties return if reversed.',
          },
        ],
      },
      {
        id: 'phys-3-1-c2',
        title: 'Internal Energy & Specific Latent Heat',
        summary: 'Distinguishing ΔE = mcΔθ temperature rises from E = mL state-change plateaus.',
        bullets: [
          'Heating a substance increases its **internal energy** — the total kinetic and potential energy of all particles in the system.',
        ],
        subsections: [
          {
            heading: 'Sloping Lines vs Flat Plateaus on a Heating Graph',
            bullets: [
              '**Temperature rising (sloping line)** - energy increases particles’ kinetic store: ΔE = m × c × Δθ.',
              '**State changing (flat plateau)** - temperature stays constant while energy increases particles’ potential store to weaken or break intermolecular bonds: E = m × L.',
              '**Fusion vs vaporisation** - specific latent heat of fusion covers solid ↔ liquid; vaporisation covers liquid ↔ gas and is much larger because particles must separate completely.',
            ],
            exampleHeading: 'Worked example: Melting ice at 0 °C',
            examples: [
              'Calculate the energy needed to melt 0.40 kg of ice at 0 °C (specific latent heat of fusion L_f = 334,000 J/kg).',
              'E = m × L = 0.40 × 334,000 = 133,600 J (133.6 kJ).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'internal energy',
            definition: 'The total kinetic energy and potential energy stored by all particles (atoms and molecules) making up a system.',
          },
          {
            term: 'specific latent heat',
            definition: 'The energy required to change the state of 1 kg of a substance without changing its temperature (J/kg).',
          },
        ],
        commonMistake: 'Students often say particles lose kinetic energy during boiling because temperature stops rising. Instead, kinetic energy stays constant on a plateau while potential energy increases as bonds break.',
      },
      {
        id: 'phys-3-1-c3',
        title: 'Particle Motion in Gases & Boyle’s Law',
        summary: 'Explaining gas pressure from wall collisions and applying pV = constant.',
        bullets: [
          'Gas molecules move rapidly in constant random motion; every collision with a container wall exerts a force at right angles to the surface, producing pressure.',
        ],
        subsections: [
          {
            heading: 'Temperature, Volume & Pressure Links',
            bullets: [
              '**Constant volume, higher temperature** - particles gain average kinetic energy, hitting walls faster, harder, and more frequently → pressure rises.',
              '**Constant temperature (Boyle’s Law)** - pressure × volume = constant (p₁V₁ = p₂V₂); halving volume doubles collision frequency and doubles pressure.',
              '**Work done on a gas** - compressing a gas rapidly (e.g. a bicycle pump) transfers energy into its internal store, raising its temperature.',
            ],
          },
        ],
        memoryAid: 'Fusion = Freezing/melting (solid ↔ liquid); Vaporisation = Vapour (liquid ↔ gas).',
      },
    ],
    keyTerms: [
      { term: 'Density', definition: 'Mass per unit volume: ρ = m ÷ V (kg/m³).' },
      { term: 'Internal energy', definition: 'Sum of kinetic and potential energies of all particles inside a system.' },
      { term: 'Specific latent heat', definition: 'Energy needed to change the state of 1 kg of a substance with no temperature change: E = mL.' },
      { term: 'Boyle’s Law', definition: 'For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume (pV = constant).' },
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
        summary: 'How Rutherford, Bohr, and Chadwick replaced Thomson’s Plum Pudding Model.',
        diagram: 'atomic-structure',
        bullets: [
          'Experimental evidence forced scientists to update the model of the atom three times in the early 20th century.',
        ],
        subsections: [
          {
            heading: 'Key Historical Milestones',
            bullets: [
              '**Plum Pudding (Thomson)** - proposed a positively charged sphere with negative electrons scattered inside.',
              '**Nuclear model (Rutherford)** - most alpha particles passed straight through thin gold foil (atom is mostly empty space), while a tiny fraction bounced straight back (mass and positive charge sit in a tiny dense nucleus).',
              '**Shells & neutrons (Bohr & Chadwick)** - Bohr showed electrons orbit at fixed energy levels; Chadwick discovered uncharged neutrons, explaining isotopes (same proton number, different neutron number).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'isotopes',
            definition: 'Atoms of the same element with the same number of protons but different numbers of neutrons (different mass numbers).',
          },
        ],
      },
      {
        id: 'phys-4-1-c2',
        title: 'Alpha, Beta & Gamma Decay Equations',
        summary: 'Ionising power, penetration, and balanced nuclear decay equations.',
        bullets: [
          'Radioactive decay is completely random; activity is measured in **becquerels (Bq)** where 1 Bq = 1 decay per second.',
        ],
        subsections: [
          {
            heading: 'Three Types of Nuclear Radiation',
            bullets: [
              '**Alpha (⁴₂He)** - 2 protons + 2 neutrons; strongly ionising, stopped by paper or ~5 cm of air. Mass number drops by 4 and atomic number drops by 2.',
              '**Beta (⁰₋₁e)** - high-speed electron emitted when a neutron turns into a proton; moderately ionising, stopped by ~5 mm aluminium. Mass number stays constant; atomic number increases by 1.',
              '**Gamma (γ)** - high-frequency electromagnetic wave; weakly ionising, reduced by thick lead/concrete. Causes no change to mass or atomic number.',
            ],
            exampleHeading: 'Worked nuclear decay equations',
            examples: [
              'Alpha decay of radium-226: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (check top: 222 + 4 = 226; bottom: 86 + 2 = 88).',
              'Beta decay of carbon-14: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (check top: 14 + 0 = 14; bottom: 7 + (−1) = 6).',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'becquerels',
            definition: 'The SI unit of radioactive activity (Bq), equal to one unstable nucleus decaying every second.',
          },
        ],
        memoryAid: 'Stopping materials in order: Paper (α), Aluminium (β), Lead (γ) — P-A-L!',
      },
      {
        id: 'phys-4-1-c3',
        title: 'Half-Life, Irradiation vs Contamination & Fission/Fusion',
        summary: 'Computing half-life declines, distinguishing irradiation from contamination, and contrasting fission with fusion.',
        bullets: [
          'The **half-life** of an isotope is the time taken for the number of undecayed nuclei (or count rate) to halve.',
        ],
        subsections: [
          {
            heading: 'Half-Life & Radiation Safety',
            bullets: [
              '**Irradiation vs contamination** - irradiation exposes an object to external radiation without making it radioactive; contamination places radioactive atoms ON or INSIDE an object so it keeps emitting radiation (alpha is most dangerous inside the body).',
              '**Fission vs fusion** - nuclear fission splits a large nucleus (U-235) after neutron absorption into two daughter nuclei + 2–3 neutrons + energy; nuclear fusion joins light hydrogen nuclei into helium inside stars.',
            ],
            exampleHeading: 'Worked example: Finding half-life from count rate',
            examples: [
              'A sample’s count rate falls from 400 Bq to 50 Bq in 24 hours.',
              'Count the halvings: 400 → 200 → 100 → 50 (3 half-lives). Therefore 1 half-life = 24 ÷ 3 = 8 hours.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'half-life',
            definition: 'The time taken for half the radioactive nuclei in a sample to decay, or for the activity/count rate to halve.',
          },
        ],
        commonMistake: 'Students often claim an irradiated surgical tool becomes radioactive. Instead, ONLY contamination puts radioactive atoms onto an object — irradiation does not make it radioactive.',
      },
    ],
    keyTerms: [
      { term: 'Becquerel (Bq)', definition: 'Unit of radioactive activity equal to 1 nuclear decay per second.' },
      { term: 'Half-life', definition: 'Time taken for half the radioactive nuclei in a sample to decay.' },
      { term: 'Contamination', definition: 'Unwanted presence of materials containing radioactive atoms on or inside another material.' },
      { term: 'Irradiation', definition: 'Exposing an object to nuclear radiation from an external source without making it radioactive.' },
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
    videoTitle: "GCSE Physics - Newton's 1st & 2nd Laws | Circular Motion | Inertia",
    youtubeId: 'D8XOm4swxOU',
    videoChannel: 'Cognito',
    videoDuration: '6:36',
    courseMatchSummary: '4 of 4 sections match AQA GCSE Physics (8463)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'phys-5-1-c1' },
      { time: '1:11', seconds: 71, label: "Newton's Second Law", cardId: 'phys-5-1-c1' },
      { time: '3:05', seconds: 185, label: 'Circular Motion', cardId: 'phys-5-1-c2' },
      { time: '5:10', seconds: 310, label: 'Inertia & Inertial Mass', cardId: 'phys-5-1-c3' },
    ],
    cards: [
      {
        id: 'phys-5-1-c1',
        title: 'Newton’s Three Laws & Resultant Forces',
        summary: 'Connecting resultant force, inertial mass, and Newton’s three laws of motion.',
        diagram: 'forces-free-body',
        bullets: [
          'A **resultant force** is the single force that produces the exact same acceleration as all individual forces acting together.',
        ],
        subsections: [
          {
            heading: 'Newton’s Three Laws',
            bullets: [
              '**First Law (Inertia)** - if resultant force = 0 N, a stationary object stays still and a moving object continues at constant velocity (constant speed AND direction).',
              '**Second Law (F = ma)** - resultant force (N) = mass (kg) × acceleration (m/s²); inertial mass = F ÷ a measures resistance to a change in velocity.',
              '**Third Law** - whenever two objects interact, they exert equal and opposite forces of the same type on each other.',
            ],
            exampleHeading: 'Worked example: Accelerating car',
            examples: [
              'A 1,200 kg car has a forward driving force of 4,200 N and drag of 1,800 N.',
              'Resultant force F = 4,200 − 1,800 = 2,400 N → acceleration a = F ÷ m = 2,400 ÷ 1,200 = 2.0 m/s².',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'resultant force',
            definition: 'The single overall force having the exact same effect on an object’s motion as all individual acting forces combined.',
          },
          {
            term: 'inertial mass',
            definition: 'A measure of how difficult it is to change an object’s velocity, defined as the ratio of force over acceleration (m = F ÷ a).',
          },
        ],
      },
      {
        id: 'phys-5-1-c2',
        title: 'Uniform Acceleration, Graphs & Terminal Velocity',
        summary: 'Applying a = (v − u)/t, v² − u² = 2as, velocity–time graphs, and terminal velocity.',
        bullets: [
          'On a velocity–time graph, the **gradient** equals acceleration and the **area under the curve** equals total distance travelled.',
        ],
        subsections: [
          {
            heading: 'Kinematics & Falling Objects',
            bullets: [
              '**Uniform acceleration formulas** - a = (v − u) ÷ t and v² − u² = 2as (s in metres).',
              '**Terminal velocity** - as a skydiver speeds up, upward air resistance grows until it balances downward weight (resultant force = 0 N → constant top speed).',
            ],
            exampleHeading: 'Worked example: Runway take-off distance',
            examples: [
              'An aircraft starts from rest (u = 0) and accelerates uniformly at 2.5 m/s² over 900 m.',
              'v² = u² + 2as = 0 + 2 × 2.5 × 900 = 4,500 → v = √4,500 ≈ 67.1 m/s.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'Terminal velocity',
            definition: 'The constant maximum velocity reached by a falling object when upward air resistance equals downward weight so resultant force is zero.',
          },
        ],
      },
      {
        id: 'phys-5-1-c3',
        title: 'Stopping Distances & Momentum Safety',
        summary: 'Separating thinking vs braking distance factors and using F = Δp/Δt for crash safety.',
        bullets: [
          '**Stopping distance** = thinking distance + braking distance.',
        ],
        subsections: [
          {
            heading: 'Thinking vs Braking & Crash Protection',
            bullets: [
              '**Thinking distance** - distance covered during reaction time (~0.2–0.9 s); increased by higher speed, tiredness, alcohol/drugs, and distractions.',
              '**Braking distance** - proportional to speed² (doubling speed quadruples braking distance since Ek = ½mv² = F × d); worsened by wet/icy roads, worn tyres, or worn brakes.',
              '**Momentum & safety features** - p = mv (conserved in closed collisions) and F = Δp ÷ Δt. Crumple zones, airbags, and seatbelts increase collision duration Δt to reduce impact force F.',
            ],
          },
        ],
        memoryAid: 'Thinking = Driver’s brain (tiredness, drugs, phone); Braking = Car & road (ice, tyres, brakes); SPEED increases BOTH!',
        commonMistake: 'Students often write that icy roads increase thinking distance. Instead, road and tyre conditions affect ONLY braking distance — only driver reaction time and speed affect thinking distance.',
      },
    ],
    keyTerms: [
      { term: 'Resultant force', definition: 'Single overall force having the same effect on motion as all individual forces combined.' },
      { term: 'Thinking distance', definition: 'Distance a vehicle travels between the driver spotting a hazard and applying the brakes.' },
      { term: 'Braking distance', definition: 'Distance a vehicle travels under the braking force until it comes to a complete stop.' },
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
      { time: '3:42', seconds: 222, label: 'The Wave Speed Equation', cardId: 'phys-6-1-c2' },
      { time: '4:42', seconds: 282, label: 'Transverse vs Longitudinal Waves', cardId: 'phys-6-1-c3' },
    ],
    cards: [
      {
        id: 'phys-6-1-c1',
        title: 'Wave Properties, Types & The Wave Equation',
        summary: 'Transverse vs longitudinal oscillations, v = fλ, T = 1/f, and ripple tank measurements.',
        diagram: 'transverse-wave',
        bullets: [
          'Waves transfer **energy** without transferring matter; particles simply oscillate around fixed equilibrium positions.',
        ],
        subsections: [
          {
            heading: 'Comparing Wave Types & Key Quantities',
            bullets: [
              '**Transverse waves** - oscillations are perpendicular (90°) to energy transfer (all EM waves, water ripples, seismic S-waves).',
              '**Longitudinal waves** - oscillations are parallel to energy transfer, creating compressions and rarefactions (sound, ultrasound, seismic P-waves).',
              '**Wave equations** - v = f × λ (m/s = Hz × m) and period T = 1 ÷ f (s). Measure wavelength across 10 waves and divide by 10 in a ripple tank to reduce percentage error.',
            ],
            exampleHeading: 'Worked example: Wave speed with kHz prefix',
            examples: [
              'A sound wave has frequency 2.0 kHz (2,000 Hz) and wavelength 0.17 m.',
              'v = f × λ = 2,000 × 0.17 = 340 m/s. Its period is T = 1 ÷ 2,000 = 0.0005 s.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'wavelength',
            definition: 'The distance from a point on one wave to the equivalent point on the adjacent wave (metres).',
          },
          {
            term: 'Transverse waves',
            definition: 'Waves in which the oscillations are perpendicular (at 90°) to the direction of energy transfer.',
          },
        ],
      },
      {
        id: 'phys-6-1-c2',
        title: 'Refraction & Wavefront Diagrams',
        summary: 'Explaining why waves bend toward the normal when entering an optically denser medium.',
        bullets: [
          '**Refraction** occurs when a wave crosses a boundary at an angle into a medium where its speed changes.',
        ],
        subsections: [
          {
            heading: 'Wavefront Explanation of Refraction',
            bullets: [
              '**Entering a denser medium (air → glass)** - the edge of each wavefront entering glass first slows down while the rest keeps moving faster, pivoting the wave toward the normal.',
              '**What changes vs stays constant** - speed and wavelength decrease proportionally, while frequency remains strictly unchanged.',
              '**Along the normal (0° incidence)** - the whole wavefront slows simultaneously, so the ray slows down without changing direction.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'Refraction',
            definition: 'Change in a wave’s direction caused by a change in speed when crossing into a different medium at an angle.',
          },
        ],
        commonMistake: 'Students often write that frequency changes during refraction. Instead, ONLY wave speed and wavelength change — frequency is fixed by the wave source.',
      },
      {
        id: 'phys-6-1-c3',
        title: 'The Electromagnetic Spectrum & Hazards',
        summary: 'Order, production, uses, and ionising hazards across all seven EM bands.',
        bullets: [
          'All electromagnetic waves are transverse waves travelling at **3.0 × 10⁸ m/s** in a vacuum.',
        ],
        subsections: [
          {
            heading: 'Order, Origins & Ionising Risk',
            bullets: [
              '**Long λ / low f → short λ / high f** - Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays.',
              '**Origins** - radio waves come from oscillations in electrical circuits; gamma rays come from changes inside atomic nuclei.',
              '**Hazards** - UV, X-rays, and gamma rays are ionising: UV causes skin ageing/skin cancer; X-rays and gamma rays mutate DNA (dose measured in sieverts, Sv).',
            ],
          },
        ],
        memoryAid: 'EM order (low f → high f): Rich Men In Vegas Use X-ray Glasses!',
      },
    ],
    keyTerms: [
      { term: 'Frequency', definition: 'Number of complete waves passing a fixed point each second, measured in hertz (Hz).' },
      { term: 'Wavelength', definition: 'Distance from a point on one wave to the equivalent point on the adjacent wave.' },
      { term: 'Refraction', definition: 'Change in wave direction caused by a change in wave speed when entering a different medium at an angle.' },
      { term: 'Longitudinal wave', definition: 'Wave whose oscillations are parallel to the direction of energy transfer, with compressions and rarefactions.' },
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
      { time: '3:40', seconds: 220, label: 'Force Calculation Worked Example', cardId: 'phys-7-1-c3' },
    ],
    cards: [
      {
        id: 'phys-7-1-c1',
        title: 'Magnetic Fields, Induced Magnets & Electromagnets',
        summary: 'Permanent vs induced magnets, field lines, and boosting solenoid strength.',
        bullets: [
          'Magnetic field lines always point from **North to South** and are closest together at the poles where the field is strongest.',
        ],
        subsections: [
          {
            heading: 'Permanent, Induced & Electromagnets',
            bullets: [
              '**Permanent vs induced magnets** - permanent magnets keep their own field; induced magnets (iron, steel, cobalt, nickel) become magnetic only inside another field and ALWAYS attract.',
              '**Current in a wire** - creates concentric circular field lines (Right-Hand Thumb Rule: thumb = current, curled fingers = field).',
              '**Solenoid & electromagnet** - coiling wire into a solenoid produces a strong, uniform internal field; adding an iron core creates a switchable electromagnet.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'solenoid',
            definition: 'A long helical coil of insulated wire that produces a strong, uniform magnetic field inside when electric current passes through it.',
          },
          {
            term: 'induced magnets',
            definition: 'Magnetic materials (such as soft iron) that temporarily become magnets only when placed inside an existing magnetic field.',
          },
        ],
      },
      {
        id: 'phys-7-1-c2',
        title: 'The Motor Effect, F = BIl & DC Motors',
        summary: 'Applying F = BIl, Fleming’s Left-Hand Rule, DC motors, and loudspeakers.',
        bullets: [
          'A wire carrying current I at 90° to a magnetic field of flux density B (tesla, T) experiences a force: **F = B × I × l**.',
        ],
        subsections: [
          {
            heading: 'Direction & Applications of the Motor Effect',
            bullets: [
              '**Fleming’s Left-Hand Rule** - ThuMb = Motion/Force, First finger = Field (N → S), SeCond finger = Conventional Current (+ → −).',
              '**DC motor** - a split-ring commutator swaps contacts every half-turn so current reverses in the coil and keeps it spinning continuously in the same direction.',
              '**Loudspeaker** - alternating audio current pushes a coil attached to a paper cone back and forth, creating longitudinal sound waves.',
            ],
            exampleHeading: 'Worked example: Force on a wire in a magnetic field',
            examples: [
              'A 0.25 m wire carries 4.0 A perpendicular to a 0.30 T magnetic field.',
              'F = B × I × l = 0.30 × 4.0 × 0.25 = 0.30 N.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'flux density',
            definition: 'A measure of magnetic field strength (symbol B), measured in tesla (T).',
          },
        ],
        memoryAid: 'F = BIl ("Force equals Bill") and LEFT hand for motors!',
      },
      {
        id: 'phys-7-1-c3',
        title: 'The Generator Effect & Transformers',
        summary: 'Alternators vs dynamos, microphones, and AC transformer voltage/current equations.',
        bullets: [
          'Moving a conductor relative to a magnetic field induces a potential difference across the wire (and an induced current in a complete circuit).',
        ],
        subsections: [
          {
            heading: 'Generators & Transformers',
            bullets: [
              '**Alternators vs dynamos** - alternators use slip rings to generate alternating current (AC); dynamos use a split-ring commutator to generate direct current (DC).',
              '**Transformer mechanism** - alternating current in the primary coil creates an alternating magnetic field in the laminated iron core, inducing an alternating p.d. across the secondary coil.',
              '**Transformer equations** - Vp ÷ Vs = np ÷ ns, and for a 100% efficient transformer Vp × Ip = Vs × Is.',
            ],
            exampleHeading: 'Worked example: Step-down laptop charger',
            examples: [
              'A charger has np = 1,150 turns on 230 V mains and ns = 100 secondary turns.',
              'Vs = Vp × (ns ÷ np) = 230 × (100 ÷ 1,150) = 20 V.',
            ],
          },
        ],
        commonMistake: 'Students often say transformers work with DC batteries. Instead, transformers REQUIRE alternating current (AC) because a steady DC current produces an unchanging magnetic field and induces zero voltage.',
      },
    ],
    keyTerms: [
      { term: 'Magnetic flux density (B)', definition: 'Strength of a magnetic field measured in tesla (T), used in F = BIl.' },
      { term: 'Motor effect', definition: 'Force exerted on a current-carrying conductor placed at an angle to a magnetic field.' },
      { term: 'Generator effect', definition: 'Induction of a potential difference when a conductor moves relative to a magnetic field.' },
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
      { time: '4:17', seconds: 257, label: 'Formation of a Neutron Star or Black Hole', cardId: 'phys-8-1-c3' },
    ],
    cards: [
      {
        id: 'phys-8-1-c1',
        title: 'Circular Orbits & Gravity',
        summary: 'Why orbiting planets and satellites have constant speed yet constantly changing velocity.',
        bullets: [
          'Gravity provides the inward centripetal force that keeps planets orbiting the Sun and satellites orbiting Earth.',
        ],
        subsections: [
          {
            heading: 'Speed, Velocity & Orbital Radius',
            bullets: [
              '**Constant speed, changing velocity** - in a circular orbit, direction continuously changes, so velocity continuously changes and the satellite accelerates inward toward the centre.',
              '**Orbital speed vs radius** - a faster satellite must move into a SMALLER radius orbit where gravity is stronger to stay in a stable circle; a slower satellite orbits further out.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'centripetal force',
            definition: 'A resultant force directed toward the centre of a circle that keeps an object moving along a circular orbit.',
          },
        ],
        commonMistake: 'Students often write that a planet in a circular orbit has constant velocity. Instead, its SPEED is constant, while its VELOCITY constantly changes because its direction is always changing.',
      },
      {
        id: 'phys-8-1-c2',
        title: 'Life Cycle of Stars & Element Synthesis',
        summary: 'Evolution of Sun-sized vs massive stars and where elements heavier than iron are forged.',
        bullets: [
          'All stars form when gravity pulls gas and dust in a **nebula** into a hot, dense protostar until core hydrogen fusion ignites.',
        ],
        subsections: [
          {
            heading: 'Two Stellar Evolution Pathways',
            bullets: [
              '**Main sequence equilibrium** - inward gravitational pull balances outward radiation/thermal pressure from nuclear fusion.',
              '**Sun-sized stars** - Main Sequence → Red Giant → White Dwarf → Black Dwarf (cooled remnant).',
              '**Much more massive stars** - Main Sequence → Red Supergiant → Supernova → Neutron Star (or Black Hole for the heaviest cores).',
              '**Origin of elements** - fusion inside stars forms elements up to iron; only a supernova explosion forges heavier elements (e.g. gold, uranium) and scatters them across space.',
            ],
            exampleHeading: 'Worked comparison: Why gold exists on Earth',
            examples: [
              'Core fusion stops releasing energy at iron (atomic number 26).',
              'Earth’s gold and uranium were formed inside an ancient supernova before our Solar System condensed from the resulting nebula.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'supernova',
            definition: 'Colossal explosion ending the life of a massive red supergiant, forging elements heavier than iron and dispersing them through space.',
          },
          {
            term: 'nebula',
            definition: 'A vast interstellar cloud of dust and hydrogen gas from which protostars collapse under gravity.',
          },
        ],
        memoryAid: 'Sun-sized = Giant → White Dwarf → Black Dwarf. Massive = Supergiant → Supernova → Neutron Star / Black Hole!',
      },
      {
        id: 'phys-8-1-c3',
        title: 'Red-Shift & Evidence for The Big Bang',
        summary: 'Galactic red-shift, the Big Bang Theory, and accelerating cosmic expansion.',
        bullets: [
          '**Red-shift** is the observed increase in wavelength of light from distant galaxies moving away as space itself expands.',
        ],
        subsections: [
          {
            heading: 'Evidence for an Expanding Universe',
            bullets: [
              '**Distance–speed pattern** - more distant galaxies show a larger red-shift, proving they are receding faster from Earth.',
              '**Big Bang Theory** - running expansion backwards implies the Universe began ~13.8 billion years ago from an extremely small, hot, dense region.',
              '**Accelerating expansion** - supernova observations since 1998 show cosmic expansion is speeding up, pointing to mysterious dark energy alongside dark matter.',
            ],
          },
        ],
        glossaryPills: [
          {
            term: 'Red-shift',
            definition: 'Increase in observed wavelength of light emitted by distant receding galaxies due to the expansion of space.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Main sequence star', definition: 'Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.' },
      { term: 'Supernova', definition: 'Explosive death of a massive star that produces elements heavier than iron.' },
      { term: 'Red-shift', definition: 'Lengthening of light wavelengths from distant galaxies moving away from Earth.' },
      { term: 'Protostar', definition: 'Hot, dense collapsing cloud of dust and gas before core hydrogen fusion begins.' },
    ],
    checklistPoints: [
      'Explain why an orbiting satellite has constant speed yet changing velocity and inward acceleration.',
      'Compare the evolutionary paths of Sun-sized vs massive stars and explain where elements heavier than iron form.',
      'Explain how galactic red-shift provides evidence for an expanding Universe and the Big Bang.',
    ],
  },
};

export const PHYSICS_QUIZZES: QuizQuestion[] = [
  // ---- phys-1-1 (5 questions) ----
  {
    id: 'phys-q-101',
    subtopicId: 'phys-1-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A 1,000 kg car travels at 20 m/s. What is its kinetic energy?',
    options: ['10,000 J', '20,000 J', '200,000 J', '400,000 J'],
    correctIndex: 2,
    explanation: 'Ek = ½mv² = 0.5 × 1,000 × 20² = 500 × 400 = 200,000 J (200 kJ).',
  },
  {
    id: 'phys-q-102',
    subtopicId: 'phys-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the gravitational potential energy calculation for a 500 g ball lifted 4.0 m (g = 9.8 N/kg).',
    segments: ['First convert 500 g into ', ' kg, then calculate Ep = mgh = ', ' J.'],
    wordBank: ['0.5', '5.0', '19.6', '196', '39.2'],
    answers: ['0.5', '19.6'],
    explanation: 'm = 500 ÷ 1,000 = 0.5 kg, so Ep = 0.5 × 9.8 × 4.0 = 19.6 J.',
  },
  {
    id: 'phys-q-103',
    subtopicId: 'phys-1-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO of the following are energy transfer pathways (rather than energy stores)?',
    options: ['Mechanical work', 'Elastic potential', 'Electrical work', 'Chemical'],
    correctIndices: [0, 2],
    explanation: 'Mechanical work, electrical work, heating, and radiation are the 4 energy transfer pathways; elastic potential and chemical are energy stores.',
  },
  {
    id: 'phys-q-104',
    subtopicId: 'phys-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each energy calculation to its correct GCSE Physics formula.',
    pairs: [
      { left: 'Kinetic energy', right: 'Ek = ½mv²' },
      { left: 'Gravitational potential energy', right: 'Ep = mgh' },
      { left: 'Elastic potential energy', right: 'Ee = ½ke²' },
      { left: 'Thermal energy change', right: 'ΔE = mcΔθ' },
    ],
    explanation: 'Each energy store formula uses SI units: mass in kg, speed in m/s, height/extension in m, and temperature change in °C.',
  },
  {
    id: 'phys-q-105',
    subtopicId: 'phys-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'A 2.0 kg ball falls 5.0 m from rest with negligible air resistance (g = 9.8 N/kg). Calculate its impact speed just before hitting the ground.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Ep = mgh = 2.0 × 9.8 × 5.0 = 98 J. Equating Ek = Ep gives 0.5 × 2.0 × v² = 98, so v = √98 = 9.9 m/s.',
      markPoints: [
        { id: 'mp1', markDescription: 'Calculates Ep lost = 98 J', numericMatch: { value: 98, tolerance: 0.5 } },
        { id: 'mp2', markDescription: 'Calculates speed v = 9.9 m/s', numericMatch: { value: 9.9, tolerance: 0.15 } },
      ],
    },
    explanation: 'By conservation of energy, Ep lost (98 J) = Ek gained, giving v = √(2 × 98 ÷ 2.0) ≈ 9.9 m/s.',
  },

  // ---- phys-1-2 (5 questions) ----
  {
    id: 'phys-q-106',
    subtopicId: 'phys-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'An electric motor transfers 360 J of useful mechanical work from 480 J of electrical input. What is its efficiency?',
    options: ['0.25 (25%)', '0.75 (75%)', '0.80 (80%)', '1.33 (133%)'],
    correctIndex: 1,
    explanation: 'Efficiency = Useful ÷ Total = 360 ÷ 480 = 0.75 (75%). Efficiency can never exceed 1.0.',
  },
  {
    id: 'phys-q-107',
    subtopicId: 'phys-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the power calculation for a crane doing 24,000 J of work in 12 seconds.',
    segments: ['Power is the rate of doing work (P = W ÷ t), giving ', ' W, which is equal to ', ' kW.'],
    wordBank: ['2,000', '2', '200', '288,000', '0.5'],
    answers: ['2,000', '2'],
    explanation: 'P = 24,000 ÷ 12 = 2,000 W = 2 kW.',
  },
  {
    id: 'phys-q-108',
    subtopicId: 'phys-1-2',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO measures that directly reduce unwanted thermal energy loss from a brick house.',
    options: [
      'Installing cavity wall foam with low thermal conductivity',
      'Using thinner outer walls made of metal',
      'Fitting double-glazed windows with trapped air/argon gaps',
      'Increasing the indoor thermostat setting by 5 °C',
    ],
    correctIndices: [0, 2],
    explanation: 'Low thermal conductivity cavity foam and double glazing both slow conduction and convection out of the building.',
  },
  {
    id: 'phys-q-109',
    subtopicId: 'phys-1-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each energy resource to its main characteristic.',
    pairs: [
      { left: 'Wind turbines', right: 'Renewable, no CO₂ during generation, weather-dependent' },
      { left: 'Natural gas', right: 'Non-renewable, fast start-up for peak demand, emits CO₂' },
      { left: 'Nuclear fuel', right: 'Non-renewable, zero CO₂ during generation, radioactive waste' },
      { left: 'Hydroelectric', right: 'Renewable, reliable rapid response, floods valley habitats' },
    ],
    explanation: 'Comparing reliability against environmental impact is essential for 6-mark energy evaluation questions.',
  },
  {
    id: 'phys-q-110',
    subtopicId: 'phys-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how oiling a bicycle chain improves the efficiency of the bicycle.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Oil lubricates the chain to reduce friction between moving parts, so less energy is wasted/dissipated as thermal energy to the surroundings.',
      markPoints: [
        { id: 'mp1', markDescription: 'Lubrication reduces friction between moving parts', requiredKeywordGroups: [['friction', 'lubricat']] },
        { id: 'mp2', markDescription: 'Less energy wasted / dissipated as thermal energy (heat)', requiredKeywordGroups: [['thermal', 'heat'], ['dissipat', 'wast', 'less', 'reduc']] },
      ],
    },
    explanation: 'Reducing friction cuts unwanted heating, increasing the proportion of input energy transferred usefully to kinetic energy.',
  },

  // ---- phys-2-1 (5 questions) ----
  {
    id: 'phys-q-201',
    subtopicId: 'phys-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Adding a second identical resistor in PARALLEL across a battery causes the total resistance of the circuit to:',
    options: ['Double', 'Stay unchanged', 'Decrease because current has an extra path', 'Drop to zero'],
    correctIndex: 2,
    explanation: 'Adding a parallel branch gives charge another route across the same supply p.d., increasing total current and lowering total resistance.',
  },
  {
    id: 'phys-q-202',
    subtopicId: 'phys-2-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'A 12 V battery drives a 2.0 A current through a resistor for 50 seconds. Calculate the resistance of the resistor and the total charge that flows.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Resistance R = V ÷ I = 12 ÷ 2.0 = 6 Ω. Charge Q = I × t = 2.0 × 50 = 100 C.',
      markPoints: [
        { id: 'mp1', markDescription: 'Resistance R = 6 Ω', numericMatch: { value: 6, tolerance: 0.1 } },
        { id: 'mp2', markDescription: 'Charge Q = 100 C', numericMatch: { value: 100, tolerance: 0.5 } },
      ],
    },
    explanation: 'Using V = IR gives R = 12 ÷ 2 = 6 Ω; using Q = It gives Q = 2 × 50 = 100 C.',
  },
  {
    id: 'phys-q-203',
    subtopicId: 'phys-2-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the series and parallel circuit diagram to assign the correct circuit rule to each layout.',
    diagram: 'circuit-series-parallel',
    labels: [
      {
        marker: 'Series circuit rule',
        options: ['Current is identical everywhere; p.d. is shared', 'p.d. is identical across each lamp; current splits'],
        answer: 'Current is identical everywhere; p.d. is shared',
      },
      {
        marker: 'Parallel circuit rule',
        options: ['Total resistance increases when branches are added', 'p.d. across every branch equals supply p.d.'],
        answer: 'p.d. across every branch equals supply p.d.',
      },
    ],
    explanation: 'In series, I is constant and V is shared; in parallel, V across each branch equals the supply p.d. and current splits.',
  },
  {
    id: 'phys-q-204',
    subtopicId: 'phys-2-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO statements about UK mains electricity are correct?',
    options: [
      'UK mains is alternating current at 230 V and 50 Hz',
      'The neutral wire is brown and stays at 230 V',
      'Switches and fuses must be connected in the live (brown) wire',
      'The earth wire carries the normal return current during everyday operation',
    ],
    correctIndices: [0, 2],
    explanation: 'UK mains is 230 V, 50 Hz AC; live is brown (230 V) and houses fuses/switches, neutral is blue (0 V), and earth is a safety wire.',
  },
  {
    id: 'phys-q-205',
    subtopicId: 'phys-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each electrical component to its I–V or sensing behaviour.',
    pairs: [
      { left: 'Fixed resistor (constant temp)', right: 'Straight line through origin; constant resistance' },
      { left: 'Filament lamp', right: 'Resistance rises as filament heats up and ions vibrate more' },
      { left: 'Diode', right: 'Conducts in forward direction only; huge resistance in reverse' },
      { left: 'NTC Thermistor', right: 'Resistance decreases as temperature increases' },
    ],
    explanation: 'Know all four component characteristics for AQA GCSE Physics Paper 1.',
  },

  // ---- phys-3-1 (5 questions) ----
  {
    id: 'phys-q-301',
    subtopicId: 'phys-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does the temperature of pure ice stay constant at 0 °C while it is actively melting?',
    options: [
      'Heat stops entering the ice until it becomes liquid',
      'Energy supplied increases particles’ potential energy to weaken intermolecular bonds rather than kinetic energy',
      'The specific heat capacity of ice becomes infinite at 0 °C',
      'Mass is destroyed during melting',
    ],
    correctIndex: 1,
    explanation: 'On a heating-curve plateau, supplied latent heat breaks/weakens intermolecular forces (increasing potential energy) while average kinetic energy (temperature) stays constant.',
  },
  {
    id: 'phys-q-302',
    subtopicId: 'phys-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the density calculation for a 445 g copper sample that displaces 50 cm³ of water.',
    segments: ['Using ρ = m ÷ V gives a density of ', ' g/cm³, which equals ', ' kg/m³.'],
    wordBank: ['8.9', '8,900', '0.11', '890', '22,250'],
    answers: ['8.9', '8,900'],
    explanation: 'ρ = 445 ÷ 50 = 8.9 g/cm³ = 8,900 kg/m³.',
  },
  {
    id: 'phys-q-303',
    subtopicId: 'phys-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Calculate the energy required to boil 0.25 kg of water at 100 °C into steam (specific latent heat of vaporisation L_v = 2,260,000 J/kg).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Using E = mL: E = 0.25 × 2,260,000 = 565,000 J (565 kJ).',
      markPoints: [
        { id: 'mp1', markDescription: 'Applies E = mL formula', requiredKeywordGroups: [['e', 'm', 'l'], ['0.25', '2260000', '2,260,000']] },
        { id: 'mp2', markDescription: 'Calculates 565,000 J (or 565 kJ)', numericMatch: { value: 565000, tolerance: 500 } },
      ],
    },
    explanation: 'E = m × L = 0.25 × 2,260,000 = 565,000 J.',
  },
  {
    id: 'phys-q-304',
    subtopicId: 'phys-3-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO changes increase the pressure of a fixed mass of gas inside a sealed cylinder?',
    options: [
      'Heating the gas at constant volume so particles collide faster and more frequently',
      'Increasing the volume of the cylinder at constant temperature',
      'Compressing the gas into half the volume at constant temperature',
      'Cooling the gas so particles lose kinetic energy',
    ],
    correctIndices: [0, 2],
    explanation: 'Both raising temperature (faster, harder, more frequent collisions) and reducing volume (pV = constant) increase gas pressure.',
  },
  {
    id: 'phys-q-305',
    subtopicId: 'phys-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each particle-model concept to its correct formula or measurement tool.',
    pairs: [
      { left: 'Density of irregular solid', right: 'Electronic balance + Eureka displacement can' },
      { left: 'Temperature rise (sloping graph)', right: 'ΔE = mcΔθ' },
      { left: 'State change (flat plateau)', right: 'E = mL' },
      { left: 'Gas compressed at constant temp', right: 'pV = constant' },
    ],
    explanation: 'Matching the equation to the exact physical process prevents mixing up specific heat capacity and latent heat.',
  },

  // ---- phys-4-1 (5 questions) ----
  {
    id: 'phys-q-401',
    subtopicId: 'phys-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'A radioactive sample has an initial activity of 800 Bq and a half-life of 6 hours. What is its activity after 18 hours?',
    options: ['400 Bq', '200 Bq', '100 Bq', '50 Bq'],
    correctIndex: 2,
    explanation: '18 ÷ 6 = 3 half-lives: 800 → 400 → 200 → 100 Bq.',
  },
  {
    id: 'phys-q-402',
    subtopicId: 'phys-4-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the atomic structure diagram to match each subatomic region to its discovery.',
    diagram: 'atomic-structure',
    labels: [
      {
        marker: 'Tiny dense positive nucleus',
        options: ['Rutherford alpha-scattering', 'Thomson Plum Pudding', 'Bohr energy shells'],
        answer: 'Rutherford alpha-scattering',
      },
      {
        marker: 'Fixed electron energy levels',
        options: ['Chadwick neutron discovery', 'Bohr energy shells', 'Thomson Plum Pudding'],
        answer: 'Bohr energy shells',
      },
    ],
    explanation: 'Rutherford discovered the tiny dense positive nucleus; Bohr placed electrons in discrete shells; Chadwick discovered neutrons.',
  },
  {
    id: 'phys-q-403',
    subtopicId: 'phys-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the beta-minus (β⁻) decay of carbon-14 into nitrogen: ¹⁴₆C → ?N + ⁰₋₁e.',
    segments: ['A neutron turns into a proton plus an electron, so the mass number stays ', ' and the atomic number increases to ', '.'],
    wordBank: ['14', '7', '10', '4', '5'],
    answers: ['14', '7'],
    explanation: '¹⁴₆C → ¹⁴₇N + ⁰₋₁e: mass number is unchanged (14) and atomic number rises by 1 from 6 to 7.',
  },
  {
    id: 'phys-q-404',
    subtopicId: 'phys-4-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each type of radiation to its stopping material and ionising power.',
    pairs: [
      { left: 'Alpha (⁴₂He)', right: 'Stopped by paper; strongly ionising' },
      { left: 'Beta (⁰₋₁e)', right: 'Stopped by ~5 mm aluminium; moderately ionising' },
      { left: 'Gamma (γ)', right: 'Reduced by thick lead; weakly ionising' },
    ],
    explanation: 'Remember P-A-L (Paper, Aluminium, Lead): penetration rises while ionising power drops from alpha to gamma.',
  },
  {
    id: 'phys-q-405',
    subtopicId: 'phys-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between irradiation and radioactive contamination.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Irradiation is exposing an object to radiation from an external source without making it radioactive. Contamination is unwanted radioactive atoms getting on or inside an object so it continues emitting radiation.',
      markPoints: [
        { id: 'mp1', markDescription: 'Irradiation exposes an object to external radiation without making it radioactive', requiredKeywordGroups: [['irradiat', 'expos'], ['not radioactive', 'doesnt become radioactive', 'without making it radioactive', 'external']] },
        { id: 'mp2', markDescription: 'Contamination is radioactive atoms/material on or inside the object', requiredKeywordGroups: [['contaminat'], ['atoms', 'material', 'inside', 'surface', 'on']] },
      ],
    },
    explanation: 'Irradiation stops the moment shielding is added or the source moves away; contamination persists until removed or decayed.',
  },

  // ---- phys-5-1 (5 questions) ----
  {
    id: 'phys-q-501',
    subtopicId: 'phys-5-1',
    type: 'mcq',
    marks: 1,
    prompt: 'If a car’s speed doubles from 15 m/s to 30 m/s on a dry road, its braking distance increases by a factor of:',
    options: ['2', '3', '4', '8'],
    correctIndex: 2,
    explanation: 'Work done by brakes F × d = Ek = ½mv². Since v is squared, doubling speed quadruples kinetic energy and braking distance.',
  },
  {
    id: 'phys-q-502',
    subtopicId: 'phys-5-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the free-body force diagram to identify the motion for balanced vs unbalanced horizontal forces.',
    diagram: 'forces-free-body',
    labels: [
      {
        marker: 'Thrust = Drag (resultant 0 N)',
        options: ['Constant velocity (Newton’s 1st Law)', 'Uniform forward acceleration'],
        answer: 'Constant velocity (Newton’s 1st Law)',
      },
      {
        marker: 'Thrust > Drag (resultant > 0 N)',
        options: ['Accelerates forward (F = ma)', 'Decelerates to a stop'],
        answer: 'Accelerates forward (F = ma)',
      },
    ],
    explanation: 'Zero resultant force gives constant velocity; a forward resultant force accelerates the object according to F = ma.',
  },
  {
    id: 'phys-q-503',
    subtopicId: 'phys-5-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete Newton’s Second Law for a 1,500 kg van accelerating at 2.0 m/s².',
    segments: ['Applying ', ' gives a resultant force of ', ' N.'],
    wordBank: ['F = ma', '3,000', '750', 'F = m ÷ a', '1,502'],
    answers: ['F = ma', '3,000'],
    explanation: 'F = m × a = 1,500 × 2.0 = 3,000 N.',
  },
  {
    id: 'phys-q-504',
    subtopicId: 'phys-5-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Which TWO factors increase a driver’s THINKING distance (not just braking distance)?',
    options: ['Driver fatigue / tiredness', 'Worn brake pads', 'Wet or icy road surface', 'Distraction from a mobile phone'],
    correctIndices: [0, 3],
    explanation: 'Fatigue and distractions lengthen reaction time, increasing thinking distance; worn brakes and ice affect braking distance.',
  },
  {
    id: 'phys-q-505',
    subtopicId: 'phys-5-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Use the relationship between force, momentum, and time (F = Δp ÷ Δt) to explain how car crumple zones reduce injury in a crash.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Crumple zones increase the time taken for the car and passengers to stop (increase Δt) for the same change in momentum, which decreases the rate of change of momentum and lowers the impact force on passengers.',
      markPoints: [
        { id: 'mp1', markDescription: 'Increases the time taken for momentum to change / collision time', requiredKeywordGroups: [['increase', 'longer', 'extend'], ['time', 'duration', 't']] },
        { id: 'mp2', markDescription: 'Reduces rate of change of momentum / lowers impact force', requiredKeywordGroups: [['reduc', 'lower', 'decreas', 'smaller'], ['force', 'rate of change']] },
      ],
    },
    explanation: 'For a fixed momentum change Δp, increasing collision duration Δt reduces the average force F = Δp ÷ Δt.',
  },

  // ---- phys-6-1 (5 questions) ----
  {
    id: 'phys-q-601',
    subtopicId: 'phys-6-1',
    type: 'diagram-label',
    marks: 2,
    prompt: 'Use the transverse wave diagram to label the two core wave dimensions.',
    diagram: 'transverse-wave',
    labels: [
      {
        marker: 'Crest to adjacent crest',
        options: ['Wavelength (λ)', 'Amplitude', 'Time period (T)'],
        answer: 'Wavelength (λ)',
      },
      {
        marker: 'Rest line to crest',
        options: ['Wavelength (λ)', 'Amplitude', 'Frequency (f)'],
        answer: 'Amplitude',
      },
    ],
    explanation: 'Wavelength λ is crest-to-crest distance; amplitude is the maximum displacement from the undisturbed rest line.',
  },
  {
    id: 'phys-q-602',
    subtopicId: 'phys-6-1',
    type: 'mcq',
    marks: 1,
    prompt: 'When a light ray travels at an angle from air into glass, which quantities change?',
    options: [
      'Speed and wavelength decrease; frequency stays constant',
      'Frequency and wavelength decrease; speed stays constant',
      'Speed increases; frequency and wavelength stay constant',
      'Only direction changes; speed stays constant',
    ],
    correctIndex: 0,
    explanation: 'Glass is optically denser than air, so light slows down and its wavelength shortens while frequency stays fixed.',
  },
  {
    id: 'phys-q-603',
    subtopicId: 'phys-6-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the period and wave speed values for a 50 Hz wave of wavelength 2.0 m.',
    segments: ['Time period T = 1 ÷ f = ', ' s, and wave speed v = fλ = ', ' m/s.'],
    wordBank: ['0.02', '100', '25', '0.5', '50'],
    answers: ['0.02', '100'],
    explanation: 'T = 1 ÷ 50 = 0.02 s and v = 50 × 2.0 = 100 m/s.',
  },
  {
    id: 'phys-q-604',
    subtopicId: 'phys-6-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO types of longitudinal waves.',
    options: ['Sound waves in air', 'Visible light', 'Seismic P-waves', 'Water ripples'],
    correctIndices: [0, 2],
    explanation: 'Sound waves and seismic P-waves oscillate parallel to energy transfer (longitudinal); light and water ripples are transverse.',
  },
  {
    id: 'phys-q-605',
    subtopicId: 'phys-6-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each electromagnetic band to a standard GCSE use or hazard.',
    pairs: [
      { left: 'Radio waves', right: 'Television and radio broadcasting' },
      { left: 'Infrared', right: 'Thermal imaging cameras and electric heaters' },
      { left: 'Ultraviolet', right: 'Energy-efficient lamps; can cause skin cancer' },
      { left: 'Gamma rays', right: 'Sterilising medical equipment and cancer radiotherapy' },
    ],
    explanation: 'All EM bands are transverse waves travelling at 3.0 × 10⁸ m/s in vacuum, ordered from radio to gamma.',
  },

  // ---- phys-7-1 (5 questions) ----
  {
    id: 'phys-q-701',
    subtopicId: 'phys-7-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain why a transformer only operates with alternating current (AC) and calculate the force on a 0.25 m wire carrying 4.0 A at 90° to a 0.30 T magnetic field.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Transformers need AC to create a continuously changing (alternating) magnetic field in the iron core that induces a p.d. in the secondary coil. Force F = BIl = 0.30 × 4.0 × 0.25 = 0.30 N.',
      markPoints: [
        { id: 'mp1', markDescription: 'AC produces a changing/alternating magnetic field to induce p.d.', requiredKeywordGroups: [['changing', 'alternating'], ['magnetic field', 'field']] },
        { id: 'mp2', markDescription: 'Calculates F = 0.30 N', numericMatch: { value: 0.3, tolerance: 0.02 } },
      ],
    },
    explanation: 'A steady DC field never changes so it induces 0 V; F = BIl = 0.30 × 4.0 × 0.25 = 0.30 N.',
  },
  {
    id: 'phys-q-702',
    subtopicId: 'phys-7-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In Fleming’s Left-Hand Rule for the motor effect, what does the FIRST finger represent?',
    options: [
      'Direction of force (motion)',
      'Direction of magnetic field (North to South)',
      'Direction of conventional current (+ to −)',
      'Direction of electron flow',
    ],
    correctIndex: 1,
    explanation: 'ThuMb = Motion/Force, First finger = Field (N → S), SeCond finger = Conventional Current.',
  },
  {
    id: 'phys-q-703',
    subtopicId: 'phys-7-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the transformer calculation for 200 primary turns at 12 V and 1,000 secondary turns.',
    segments: ['This is a ', ' transformer whose secondary potential difference Vs is ', ' V.'],
    wordBank: ['step-up', 'step-down', '60', '2.4', '240'],
    answers: ['step-up', '60'],
    explanation: 'More turns on the secondary coil means step-up, and Vs = 12 × (1,000 ÷ 200) = 60 V.',
  },
  {
    id: 'phys-q-704',
    subtopicId: 'phys-7-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each electromagnetic device to its key component or function.',
    pairs: [
      { left: 'DC motor', right: 'Split-ring commutator reverses coil current every half-turn' },
      { left: 'Alternator', right: 'Slip rings output alternating current (AC)' },
      { left: 'Dynamo', right: 'Split-ring commutator outputs direct current (DC)' },
      { left: 'Solenoid + iron core', right: 'Electromagnet with strong uniform internal field' },
    ],
    explanation: 'Keep slip rings (AC alternator) clearly distinct from split-ring commutators (DC motor and dynamo).',
  },
  {
    id: 'phys-q-705',
    subtopicId: 'phys-7-1',
    type: 'multi-select',
    marks: 2,
    selectCount: 2,
    prompt: 'Select TWO ways to increase the strength of an electromagnet.',
    options: [
      'Increase the electric current in the coil',
      'Replace the iron core with a plastic rod',
      'Increase the number of turns on the solenoid coil',
      'Reduce the battery potential difference',
    ],
    correctIndices: [0, 2],
    explanation: 'More current, more turns per unit length, and a soft iron core all increase electromagnet strength.',
  },

  // ---- phys-8-1 (5 questions) ----
  {
    id: 'phys-q-801',
    subtopicId: 'phys-8-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Where are naturally occurring elements heavier than iron (such as gold and uranium) synthesised?',
    options: [
      'Inside white dwarfs',
      'During main sequence hydrogen fusion',
      'During supernova explosions of massive stars',
      'Inside black dwarfs',
    ],
    correctIndex: 2,
    explanation: 'Stellar fusion builds elements only up to iron; heavier elements are forged during catastrophic supernova explosions.',
  },
  {
    id: 'phys-q-802',
    subtopicId: 'phys-8-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is a satellite moving in a circular orbit at constant speed still accelerating?',
    options: [
      'Its mass is continuously decreasing',
      'Its direction is constantly changing, so its velocity is changing',
      'Air resistance pushes it faster around Earth',
      'Gravity acts tangentially along its path',
    ],
    correctIndex: 1,
    explanation: 'Velocity is a vector (speed + direction); changing direction means changing velocity, which is inward centripetal acceleration.',
  },
  {
    id: 'phys-q-803',
    subtopicId: 'phys-8-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the life cycle of a star with roughly the same mass as the Sun.',
    segments: ['After the main sequence, a Sun-sized star expands into a ', ' before cooling into a ', ' and eventually a black dwarf.'],
    wordBank: ['red giant', 'white dwarf', 'supernova', 'neutron star', 'black hole'],
    answers: ['red giant', 'white dwarf'],
    explanation: 'Sun-sized stars follow Main Sequence → Red Giant → White Dwarf → Black Dwarf.',
  },
  {
    id: 'phys-q-804',
    subtopicId: 'phys-8-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each astrophysics stage or term to its exact description.',
    pairs: [
      { left: 'Nebula', right: 'Interstellar cloud of dust and hydrogen gas' },
      { left: 'Main sequence', right: 'Inward gravity balanced by outward fusion pressure' },
      { left: 'Red-shift', right: 'Increased wavelength of light from receding galaxies' },
      { left: 'Dark energy', right: 'Hypothesised cause of the accelerating expansion of space' },
    ],
    explanation: 'Link each stage of stellar evolution and cosmology to the underlying forces and evidence.',
  },
  {
    id: 'phys-q-805',
    subtopicId: 'phys-8-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain how galactic red-shift provides evidence for the Big Bang Theory.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Light from distant galaxies is shifted toward the red (longer wavelength) end of the spectrum, and more distant galaxies have a greater red-shift and move away faster, showing space is expanding from a tiny, hot, dense beginning.',
      markPoints: [
        { id: 'mp1', markDescription: 'Light shifts to longer wavelength / further galaxies recede faster', requiredKeywordGroups: [['wavelength', 'red', 'longer'], ['further', 'distant', 'faster', 'away']] },
        { id: 'mp2', markDescription: 'Shows the Universe is expanding from an initial small, hot, dense state', requiredKeywordGroups: [['expand'], ['hot', 'dense', 'small', 'big bang']] },
      ],
    },
    explanation: 'Greater red-shift at greater distance proves space is expanding uniformly from an initial Big Bang.',
  },
];

export const PHYSICS_FLASHCARDS: FlashcardItem[] = [
  // phys-1-1 (5)
  { id: 'phys-fc-101', subtopicId: 'phys-1-1', front: 'List all 8 GCSE energy stores.', backBullets: ['Kinetic, Gravitational potential, Elastic potential, Thermal.', 'Chemical, Magnetic, Electrostatic, and Nuclear.'], hint: 'Kids Get Excited To Catch Many Elephants Now.' },
  { id: 'phys-fc-102', subtopicId: 'phys-1-1', front: 'What are the 4 energy transfer pathways?', backBullets: ['Mechanical work (force moving an object).', 'Electrical work (charges moving through p.d.).', 'Heating and Radiation (light/sound waves).'] },
  { id: 'phys-fc-103', subtopicId: 'phys-1-1', front: 'Write the equations for Ek, Ep, and Ee (with SI units).', backBullets: ['Ek = ½mv² (m in kg, v in m/s).', 'Ep = mgh (g = 9.8 N/kg on Earth, h in m).', 'Ee = ½ke² (k in N/m, extension e in m).'] },
  { id: 'phys-fc-104', subtopicId: 'phys-1-1', front: 'What happens to kinetic energy if an object’s speed doubles?', backBullets: ['Kinetic energy quadruples (×4) because v is squared in Ek = ½mv².'], hint: 'Look at the exponent on v.' },
  { id: 'phys-fc-105', subtopicId: 'phys-1-1', front: 'Exam trap: What must you convert BEFORE substituting into Ek, Ep, or Ee?', backBullets: ['Convert grams to kilograms (÷ 1,000).', 'Convert centimetres to metres (÷ 100) and kJ to J (× 1,000).'] },

  // phys-1-2 (5)
  { id: 'phys-fc-106', subtopicId: 'phys-1-2', front: 'State the two GCSE formulas for Power and its unit.', backBullets: ['P = E ÷ t (energy transferred ÷ time).', 'P = W ÷ t (work done ÷ time).', 'Unit: watt (W), where 1 W = 1 joule per second.'] },
  { id: 'phys-fc-107', subtopicId: 'phys-1-2', front: 'How do you calculate efficiency, and what is its maximum possible value?', backBullets: ['Efficiency = Useful output ÷ Total input (energy or power).', 'Maximum possible value is 1.0 (or 100%) — never greater!'] },
  { id: 'phys-fc-108', subtopicId: 'phys-1-2', front: 'How does thermal conductivity affect heat loss through a wall?', backBullets: ['Materials with LOWER thermal conductivity transfer heat more slowly.', 'Thicker walls + low thermal conductivity insulation cut cooling rate.'] },
  { id: 'phys-fc-109', subtopicId: 'phys-1-2', front: 'How does lubrication reduce wasted energy in machines?', backBullets: ['Oil or grease reduces friction between moving parts.', 'Less energy is dissipated into thermal stores of the surroundings.'] },
  { id: 'phys-fc-110', subtopicId: 'phys-1-2', front: 'Compare reliability vs CO₂ emissions for wind power vs natural gas.', backBullets: ['Wind: renewable, zero CO₂ during operation, but intermittent.', 'Natural gas: finite, emits CO₂, but reliable with rapid start-up for peak demand.'] },

  // phys-2-1 (5)
  { id: 'phys-fc-201', subtopicId: 'phys-2-1', front: 'Compare current, p.d., and resistance in SERIES vs PARALLEL circuits.', backBullets: ['Series: I same everywhere; V shared; R_total = R₁ + R₂.', 'Parallel: V across every branch = supply V; I splits; adding branches lowers R_total.'], diagram: 'circuit-series-parallel' },
  { id: 'phys-fc-202', subtopicId: 'phys-2-1', front: 'Write the 4 core GCSE electricity equations linking Q, I, t, V, R, P, E.', backBullets: ['Q = I × t and V = I × R.', 'P = V × I = I² × R.', 'E = P × t = Q × V.'] },
  { id: 'phys-fc-203', subtopicId: 'phys-2-1', front: 'Why does a filament lamp’s resistance increase at higher potential differences?', backBullets: ['Higher current heats the metal filament.', 'Hotter metal ions vibrate more, causing more frequent collisions with flowing electrons.'] },
  { id: 'phys-fc-204', subtopicId: 'phys-2-1', front: 'How do NTC thermistors and LDRs respond to heat and light?', backBullets: ['Thermistor: higher temperature → LOWER resistance.', 'LDR: higher light intensity → LOWER resistance.'], hint: 'More input = less resistance for both.' },
  { id: 'phys-fc-205', subtopicId: 'phys-2-1', front: 'Why does the National Grid step voltage UP to 400,000 V for long cables?', backBullets: ['For fixed power P = VI, raising V lowers current I.', 'Cable heating loss P = I²R drops dramatically when I is tiny.'] },

  // phys-3-1 (5)
  { id: 'phys-fc-301', subtopicId: 'phys-3-1', front: 'Outline the Eureka can required practical for finding an irregular solid’s density.', backBullets: ['Measure dry mass m on an electronic balance.', 'Lower object into a full Eureka can and catch displaced water in a measuring cylinder for volume V.', 'Calculate ρ = m ÷ V.'] },
  { id: 'phys-fc-302', subtopicId: 'phys-3-1', front: 'Define internal energy.', backBullets: ['Total kinetic energy + potential energy stored by all particles making up a system.'] },
  { id: 'phys-fc-303', subtopicId: 'phys-3-1', front: 'When do you use ΔE = mcΔθ vs E = mL on a heating curve?', backBullets: ['Sloping section (temperature changing): ΔE = mcΔθ (kinetic energy rises).', 'Flat plateau (state changing at constant T): E = mL (potential energy rises).'] },
  { id: 'phys-fc-304', subtopicId: 'phys-3-1', front: 'Distinguish specific latent heat of fusion from vaporisation.', backBullets: ['Fusion: solid ↔ liquid (melting/freezing).', 'Vaporisation: liquid ↔ gas (boiling/condensing — usually much larger).'] },
  { id: 'phys-fc-305', subtopicId: 'phys-3-1', front: 'Explain using particles why heating a sealed gas cylinder raises its pressure.', backBullets: ['Particles gain average kinetic energy and move faster.', 'They hit the walls harder and more frequently, increasing force per unit area.'] },

  // phys-4-1 (5)
  { id: 'phys-fc-401', subtopicId: 'phys-4-1', front: 'What two conclusions came from Rutherford’s alpha-scattering gold foil experiment?', backBullets: ['Most alpha particles passed straight through → atom is mostly empty space.', 'A tiny fraction bounced straight back → mass and positive charge sit in a tiny dense nucleus.'], diagram: 'atomic-structure' },
  { id: 'phys-fc-402', subtopicId: 'phys-4-1', front: 'Recall the stopping materials and ionising power of α, β, and γ radiation.', backBullets: ['Alpha (⁴₂He): Paper / 5 cm air; strongly ionising.', 'Beta (⁰₋₁e): ~5 mm aluminium; moderately ionising.', 'Gamma (γ): Thick lead/concrete; weakly ionising.'], hint: 'P-A-L!' },
  { id: 'phys-fc-403', subtopicId: 'phys-4-1', front: 'How do mass number (A) and atomic number (Z) change in α vs β⁻ decay?', backBullets: ['Alpha decay: A drops by 4, Z drops by 2.', 'Beta-minus decay: A stays unchanged, Z increases by 1 (neutron → proton + e⁻).'] },
  { id: 'phys-fc-404', subtopicId: 'phys-4-1', front: 'Define half-life.', backBullets: ['Time taken for half the radioactive nuclei in a sample to decay (or for count rate/activity to halve).'] },
  { id: 'phys-fc-405', subtopicId: 'phys-4-1', front: 'Exam trap: Does irradiating an object make it radioactive?', backBullets: ['NO — irradiation only exposes an object to external radiation.', 'Only CONTAMINATION transfers radioactive atoms onto or inside an object.'] },

  // phys-5-1 (5)
  { id: 'phys-fc-501', subtopicId: 'phys-5-1', front: 'State Newton’s First and Second Laws of Motion.', backBullets: ['1st Law: If resultant force = 0 N, velocity remains constant.', '2nd Law: Resultant force = mass × acceleration (F = ma).'], diagram: 'forces-free-body' },
  { id: 'phys-fc-502', subtopicId: 'phys-5-1', front: 'What do the gradient and area of a velocity–time graph represent?', backBullets: ['Gradient = acceleration (m/s²).', 'Area under the graph = total distance travelled (m).'] },
  { id: 'phys-fc-503', subtopicId: 'phys-5-1', front: 'How does a skydiver reach terminal velocity?', backBullets: ['As speed rises, upward air resistance grows until it equals downward weight.', 'Resultant force becomes 0 N, so acceleration stops and speed stays constant.'] },
  { id: 'phys-fc-504', subtopicId: 'phys-5-1', front: 'Separate factors affecting thinking distance vs braking distance.', backBullets: ['Thinking: tiredness, alcohol/drugs, distractions, speed.', 'Braking: wet/icy roads, worn tyres, worn brakes, speed (∝ v²).'] },
  { id: 'phys-fc-505', subtopicId: 'phys-5-1', front: 'Explain how airbags and crumple zones reduce injury using F = Δp ÷ Δt.', backBullets: ['They increase collision duration Δt for the same change in momentum Δp.', 'This lowers the rate of change of momentum and reduces peak impact force F.'] },

  // phys-6-1 (5)
  { id: 'phys-fc-601', subtopicId: 'phys-6-1', front: 'Contrast transverse and longitudinal waves with two examples of each.', backBullets: ['Transverse: oscillations ⊥ to energy transfer (EM waves, water ripples, S-waves).', 'Longitudinal: oscillations ∥ to energy transfer with compressions/rarefactions (sound, P-waves).'], diagram: 'transverse-wave' },
  { id: 'phys-fc-602', subtopicId: 'phys-6-1', front: 'Write the wave speed and time period equations with units.', backBullets: ['v = f × λ (m/s = Hz × m).', 'T = 1 ÷ f (seconds = 1 ÷ Hz).'] },
  { id: 'phys-fc-603', subtopicId: 'phys-6-1', front: 'Why does light bend TOWARD the normal when entering glass from air?', backBullets: ['Glass is denser, so the side of each wavefront hitting glass first slows down.', 'Wave speed and wavelength decrease while frequency stays constant.'] },
  { id: 'phys-fc-604', subtopicId: 'phys-6-1', front: 'List all 7 electromagnetic bands from longest wavelength to shortest.', backBullets: ['Radio, Microwave, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays.'], hint: 'Rich Men In Vegas Use X-ray Glasses.' },
  { id: 'phys-fc-605', subtopicId: 'phys-6-1', front: 'Which EM waves are ionising, and what health risks do they carry?', backBullets: ['Ultraviolet (skin ageing & skin cancer).', 'X-rays and Gamma rays (DNA mutation and cancer; dose in sieverts, Sv).'] },

  // phys-7-1 (5)
  { id: 'phys-fc-701', subtopicId: 'phys-7-1', front: 'Contrast permanent magnets with induced magnets.', backBullets: ['Permanent magnets produce their own constant magnetic field.', 'Induced magnets (iron, steel, cobalt, nickel) become magnetic only inside a field and ALWAYS attract.'] },
  { id: 'phys-fc-702', subtopicId: 'phys-7-1', front: 'State the motor effect equation and Fleming’s Left-Hand Rule.', backBullets: ['F = B × I × l (B in tesla, I in amps, l in metres).', 'Left hand: ThuMb = Motion/Force, First = Field (N→S), SeCond = Current (+→−).'] },
  { id: 'phys-fc-703', subtopicId: 'phys-7-1', front: 'What does a split-ring commutator do inside a DC motor?', backBullets: ['Swaps electrical contacts every half-turn so current direction reverses in the coil.', 'Keeps turning forces acting in the same rotational direction.'] },
  { id: 'phys-fc-704', subtopicId: 'phys-7-1', front: 'Contrast an alternator with a dynamo.', backBullets: ['Alternator: uses slip rings → outputs alternating current (AC).', 'Dynamo: uses a split-ring commutator → outputs direct current (DC).'] },
  { id: 'phys-fc-705', subtopicId: 'phys-7-1', front: 'Write both transformer equations and explain why transformers need AC.', backBullets: ['Vp ÷ Vs = np ÷ ns and VpIp = VsIs (100% efficient).', 'AC is needed to create an alternating magnetic field in the iron core that induces secondary p.d.'] },

  // phys-8-1 (5)
  { id: 'phys-fc-801', subtopicId: 'phys-8-1', front: 'Why does a satellite in circular orbit accelerate even at constant speed?', backBullets: ['Its direction is continually changing, so its velocity is continually changing.', 'Gravity supplies inward centripetal acceleration toward the orbit’s centre.'] },
  { id: 'phys-fc-802', subtopicId: 'phys-8-1', front: 'What happens to a satellite’s stable orbital radius if its orbital speed increases?', backBullets: ['It must move to a SMALLER radius orbit where gravitational pull is stronger.'] },
  { id: 'phys-fc-803', subtopicId: 'phys-8-1', front: 'Trace the life cycle of a Sun-sized star vs a massive star.', backBullets: ['Sun-sized: Nebula → Protostar → Main Sequence → Red Giant → White Dwarf → Black Dwarf.', 'Massive: Nebula → Protostar → Main Sequence → Red Supergiant → Supernova → Neutron Star / Black Hole.'] },
  { id: 'phys-fc-804', subtopicId: 'phys-8-1', front: 'What balances a main sequence star for billions of years?', backBullets: ['Inward gravitational force balances outward thermal/radiation pressure from core hydrogen fusion.'] },
  { id: 'phys-fc-805', subtopicId: 'phys-8-1', front: 'How does galactic red-shift support the Big Bang Theory?', backBullets: ['Wavelengths from distant galaxies are stretched toward red because galaxies are receding.', 'More distant galaxies show larger red-shift (recede faster), showing space is expanding from a tiny, hot, dense origin.'] },
];

export const PHYSICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'cs-phys-topic-1',
    slug: 'topic-1-energy',
    title: 'Topic 1: Energy — Complete Cheat Sheet',
    topicNumber: 1,
    topicName: 'Energy',
    summary: 'Stores, pathways, Ek/Ep/Ee/SHC calculations, power, efficiency, and national energy resources.',
    accentColor: '#8d22cc',
    sections: [
      {
        heading: '1.1 Energy Stores, Kinetic & Gravitational Potential Energy',
        formula: 'Ek = ½mv²  |  Ep = mgh  |  Ee = ½ke²  |  ΔE = mcΔθ',
        points: [
          '8 stores: Kinetic, Gravitational, Elastic, Thermal, Chemical, Magnetic, Electrostatic, Nuclear.',
          '4 pathways: Mechanical work, Electrical work, Heating, Radiation.',
          'Always convert mass to kg and extension to m before substituting; equate Ep lost = Ek gained when air resistance is negligible.',
        ],
      },
      {
        heading: '1.2 Conservation of Energy, Power & Efficiency',
        formula: 'P = E ÷ t = W ÷ t  |  Efficiency = Useful ÷ Total',
        points: [
          'Lubrication cuts friction; thick walls + low thermal conductivity insulation slow conduction.',
          'Efficiency is ALWAYS ≤ 1.0 (≤ 100%).',
          'Weigh reliability vs CO₂/waste when comparing fossil fuels, nuclear, and renewables.',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-2',
    slug: 'topic-2-electricity',
    title: 'Topic 2: Electricity — Complete Cheat Sheet',
    topicNumber: 2,
    topicName: 'Electricity',
    summary: 'Charge, Ohm’s law, series vs parallel rules, I–V curves, mains safety, and the National Grid.',
    accentColor: '#1a96f3',
    sections: [
      {
        heading: '2.1 Circuits, I–V Graphs & Mains Electricity',
        formula: 'Q = It  |  V = IR  |  P = VI = I²R  |  E = QV',
        points: [
          'Series: I constant, V shared, R adds. Parallel: V constant per branch, I splits, adding branches lowers total R.',
          'Thermistor & LDR: more heat or light = LOWER resistance.',
          'UK mains: 230 V, 50 Hz AC; brown live (fuses/switches), blue neutral, green/yellow earth. Step-up transformers cut I²R cable losses.',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-3',
    slug: 'topic-3-particle-model-of-matter',
    title: 'Topic 3: Particle Model of Matter — Complete Cheat Sheet',
    topicNumber: 3,
    topicName: 'Particle Model of Matter',
    summary: 'Density practicals, internal energy, specific latent heat plateaus, and Boyle’s law.',
    accentColor: '#059669',
    sections: [
      {
        heading: '3.1 Density, Internal Energy & Latent Heat',
        formula: 'ρ = m ÷ V  |  ΔE = mcΔθ  |  E = mL  |  pV = constant',
        points: [
          'Irregular solid density: electronic balance + Eureka displacement can.',
          'Sloping heating curve = kinetic energy rises (ΔE = mcΔθ); flat plateau = potential energy rises as bonds weaken (E = mL).',
          'Higher gas temperature → faster, harder, more frequent wall collisions → higher pressure.',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-4',
    slug: 'topic-4-atomic-structure',
    title: 'Topic 4: Atomic Structure — Complete Cheat Sheet',
    topicNumber: 4,
    topicName: 'Atomic Structure',
    summary: 'Atomic models, α/β/γ decay equations, half-life ratios, safety, and fission vs fusion.',
    accentColor: '#ea580c',
    sections: [
      {
        heading: '4.1 Alpha, Beta, Gamma Radiation & Half-Life',
        formula: 'α: A−4, Z−2  |  β⁻: A, Z+1  |  1 Bq = 1 decay/s',
        points: [
          'Plum Pudding → Rutherford nuclear (gold foil) → Bohr shells → Chadwick neutrons.',
          'Stopping materials (P-A-L): Paper (α), Aluminium (β), Lead (γ).',
          'Irradiation does NOT make an object radioactive; contamination places radioactive atoms on/inside it.',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-5',
    slug: 'topic-5-forces',
    title: 'Topic 5: Forces — Complete Cheat Sheet',
    topicNumber: 5,
    topicName: 'Forces',
    summary: 'Newton’s laws, kinematics, terminal velocity, stopping distances, and momentum safety.',
    accentColor: '#7c3aed',
    sections: [
      {
        heading: '5.1 Resultant Forces, F = ma & Stopping Distances',
        formula: 'F = ma  |  v² − u² = 2as  |  p = mv  |  F = Δp ÷ Δt',
        points: [
          'v–t graph: gradient = acceleration; area under line = distance travelled.',
          'Stopping = Thinking (driver state + speed) + Braking (road/tyres/brakes + speed²).',
          'Crumple zones/airbags increase collision time Δt to lower impact force F.',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-6',
    slug: 'topic-6-waves',
    title: 'Topic 6: Waves — Complete Cheat Sheet',
    topicNumber: 6,
    topicName: 'Waves',
    summary: 'Transverse vs longitudinal waves, ripple tanks, refraction, and the full EM spectrum.',
    accentColor: '#0284c7',
    sections: [
      {
        heading: '6.1 Transverse & Longitudinal Waves (v = fλ)',
        formula: 'v = fλ  |  T = 1 ÷ f  |  c = 3.0 × 10⁸ m/s',
        points: [
          'Transverse = perpendicular (EM, water, S-waves); Longitudinal = parallel (sound, P-waves).',
          'Refraction into denser media slows speed & shrinks wavelength while frequency stays constant.',
          'EM order: Radio → Microwave → IR → Visible → UV → X-ray → Gamma (last 3 are ionising).',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-7',
    slug: 'topic-7-magnetism-and-electromagnetism',
    title: 'Topic 7: Magnetism and Electromagnetism — Complete Cheat Sheet',
    topicNumber: 7,
    topicName: 'Magnetism and Electromagnetism',
    summary: 'Solenoids, F = BIl, Fleming’s Left-Hand Rule, alternators vs dynamos, and AC transformers.',
    accentColor: '#db2777',
    sections: [
      {
        heading: '7.1 Magnetic Fields, Motor Effect & Transformers',
        formula: 'F = BIl  |  Vp ÷ Vs = np ÷ ns  |  VpIp = VsIs',
        points: [
          'Fleming’s Left-Hand Rule: ThuMb = Force, First = Field (N→S), SeCond = Current.',
          'Alternator = slip rings (AC); Dynamo & DC motor = split-ring commutator (DC).',
          'Transformers require AC to create an alternating magnetic field in the iron core.',
        ],
      },
    ],
  },
  {
    id: 'cs-phys-topic-8',
    slug: 'topic-8-space-physics',
    title: 'Topic 8: Space Physics — Complete Cheat Sheet',
    topicNumber: 8,
    topicName: 'Space Physics',
    summary: 'Circular orbits, stellar life cycles, supernova element synthesis, and galactic red-shift.',
    accentColor: '#2563eb',
    sections: [
      {
        heading: '8.1 Life Cycle of Stars & Red-Shift',
        formula: 'v_orbit = 2πr ÷ T',
        points: [
          'Circular orbit: constant SPEED, constantly changing VELOCITY (inward centripetal acceleration).',
          'Sun-sized → Red Giant → White Dwarf → Black Dwarf; Massive → Red Supergiant → Supernova → Neutron Star / Black Hole.',
          'Greater red-shift in more distant galaxies proves expanding space and supports the Big Bang.',
        ],
      },
    ],
  },
];

export const PHYSICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'phys-exam-1',
    subtopicId: 'phys-1-1',
    number: 1,
    stimulus: 'A 60 kg bungee jumper steps off a 20 m bridge (g = 9.8 N/kg). Ignore air resistance until the elastic cord begins to stretch.',
    parts: [
      {
        id: 'phys-exam-1a',
        label: 'a)',
        prompt: 'Calculate the gravitational potential energy lost during the 20 m drop.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Ep = mgh = 60 × 9.8 × 20 = 11,760 J.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies Ep = mgh correctly', requiredKeywordGroups: [['mgh', '60'], ['9.8', '20']] },
            { id: 'mp2', markDescription: 'Calculates 11,760 J', numericMatch: { value: 11760, tolerance: 20 } },
          ],
        },
      },
      {
        id: 'phys-exam-1b',
        label: 'b)',
        prompt: 'At maximum stretch, the elastic cord extends by 8.0 m with spring constant k = 350 N/m. Calculate the elastic potential energy stored in the cord.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Ee = 0.5 × k × e² = 0.5 × 350 × 8.0² = 175 × 64 = 11,200 J.',
          markPoints: [
            { id: 'mp1', markDescription: 'Substitutes into Ee = 0.5 × k × e²', requiredKeywordGroups: [['350'], ['64', '8']] },
            { id: 'mp2', markDescription: 'Calculates 11,200 J', numericMatch: { value: 11200, tolerance: 20 } },
          ],
        },
      },
      {
        id: 'phys-exam-1c',
        label: 'c)',
        prompt: 'Explain why the elastic potential energy stored (11,200 J) is slightly less than the gravitational potential energy lost (11,760 J).',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Some energy is dissipated into the thermal energy store of the air and cord due to air resistance and stretching friction.',
          markPoints: [
            { id: 'mp1', markDescription: 'Energy is dissipated / wasted as thermal energy (heat)', requiredKeywordGroups: [['thermal', 'heat'], ['dissipat', 'wast', 'surround', 'air']] },
            { id: 'mp2', markDescription: 'Work done against air resistance / friction in the cord', requiredKeywordGroups: [['air resistance', 'drag', 'friction']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-2',
    subtopicId: 'phys-1-2',
    number: 2,
    stimulus: 'An electric winch motor draws 800 W of electrical power and lifts a 120 kg crate vertically by 5.0 m in 10 s (g = 9.8 N/kg).',
    parts: [
      {
        id: 'phys-exam-2a',
        label: 'a)',
        prompt: 'Calculate the useful gravitational potential energy gained by the crate and the useful power output of the winch.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Useful Ep = 120 × 9.8 × 5.0 = 5,880 J. Useful power = 5,880 ÷ 10 = 588 W.',
          markPoints: [
            { id: 'mp1', markDescription: 'Calculates useful work = 5,880 J', numericMatch: { value: 5880, tolerance: 20 } },
            { id: 'mp2', markDescription: 'Calculates useful power = 588 W', numericMatch: { value: 588, tolerance: 2 } },
          ],
        },
      },
      {
        id: 'phys-exam-2b',
        label: 'b)',
        prompt: 'Calculate the percentage efficiency of the winch motor.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Efficiency = (588 ÷ 800) × 100 = 73.5%.',
          markPoints: [
            { id: 'mp1', markDescription: 'Divides useful power (588) by total input power (800)', requiredKeywordGroups: [['588'], ['800']] },
            { id: 'mp2', markDescription: 'Obtains 73.5% (or 0.735)', numericMatch: { value: 73.5, tolerance: 0.5 } },
          ],
        },
      },
      {
        id: 'phys-exam-2c',
        label: 'c)',
        prompt: 'State one practical way an engineer could increase the efficiency of the winch gears.',
        kind: 'short-answer',
        marks: 1,
        rubric: {
          maxMarks: 1,
          modelAnswer: 'Lubricate (oil or grease) the gears to reduce friction and cut thermal dissipation.',
          markPoints: [
            { id: 'mp1', markDescription: 'Lubricate/oil gears to reduce friction', requiredKeywordGroups: [['lubricat', 'oil', 'grease'], ['friction', 'heat', 'thermal']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-3',
    subtopicId: 'phys-2-1',
    number: 3,
    stimulus: 'The diagram compares two identical 12 Ω lamps connected in series and in parallel across a 6.0 V battery.',
    diagram: 'circuit-series-parallel',
    parts: [
      {
        id: 'phys-exam-3a',
        label: 'a)',
        prompt: 'State the potential difference across each lamp when connected in parallel across the 6.0 V battery.',
        kind: 'short-answer',
        marks: 1,
        rubric: {
          maxMarks: 1,
          modelAnswer: 'Each lamp receives the full 6.0 V potential difference.',
          markPoints: [
            { id: 'mp1', markDescription: '6 V across each branch', numericMatch: { value: 6, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'phys-exam-3b',
        label: 'b)',
        prompt: 'Calculate the current through one 12 Ω lamp in the parallel circuit and the total current drawn from the battery.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Branch current I = V ÷ R = 6.0 ÷ 12 = 0.5 A. With two identical branches, total battery current = 0.5 + 0.5 = 1.0 A.',
          markPoints: [
            { id: 'mp1', markDescription: 'Branch current = 0.5 A', numericMatch: { value: 0.5, tolerance: 0.02 } },
            { id: 'mp2', markDescription: 'Total battery current = 1.0 A', numericMatch: { value: 1.0, tolerance: 0.02 } },
          ],
        },
      },
      {
        id: 'phys-exam-3c',
        label: 'c)',
        prompt: 'Explain why the lamps glow brighter in parallel than in series.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'In parallel each lamp receives the full 6 V instead of sharing 3 V each, so each lamp draws a larger current and transfers more electrical power (P = VI).',
          markPoints: [
            { id: 'mp1', markDescription: 'Full 6 V across each lamp (rather than shared)', requiredKeywordGroups: [['full', 'greater', 'higher', '6'], ['voltage', 'potential difference', 'pd', 'v']] },
            { id: 'mp2', markDescription: 'Larger current / greater power transferred (P = VI)', requiredKeywordGroups: [['current', 'power', 'energy']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-4',
    subtopicId: 'phys-3-1',
    number: 4,
    stimulus: 'A student determines the density of an irregular brass statue of mass 420 g using a Eureka can, then heats 0.50 kg of solid wax through its melting point (L_f = 180,000 J/kg).',
    parts: [
      {
        id: 'phys-exam-4a',
        label: 'a)',
        prompt: 'The brass statue displaces 50 cm³ of water from the Eureka can. Calculate its density in g/cm³.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'ρ = m ÷ V = 420 ÷ 50 = 8.4 g/cm³.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies ρ = m ÷ V', requiredKeywordGroups: [['420'], ['50']] },
            { id: 'mp2', markDescription: 'Calculates 8.4 g/cm³', numericMatch: { value: 8.4, tolerance: 0.05 } },
          ],
        },
      },
      {
        id: 'phys-exam-4b',
        label: 'b)',
        prompt: 'Calculate the energy needed to melt all 0.50 kg of solid wax at its melting point.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'E = m × L = 0.50 × 180,000 = 90,000 J (90 kJ).',
          markPoints: [
            { id: 'mp1', markDescription: 'Substitutes into E = mL', requiredKeywordGroups: [['0.5', '0.50'], ['180000', '180,000']] },
            { id: 'mp2', markDescription: 'Calculates 90,000 J', numericMatch: { value: 90000, tolerance: 100 } },
          ],
        },
      },
      {
        id: 'phys-exam-4c',
        label: 'c)',
        prompt: 'Explain what happens to the kinetic energy and potential energy of the wax particles while it is melting.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Average kinetic energy stays constant because temperature does not change, while potential energy increases as supplied energy weakens intermolecular bonds.',
          markPoints: [
            { id: 'mp1', markDescription: 'Kinetic energy stays constant (constant temperature)', requiredKeywordGroups: [['kinetic'], ['constant', 'same', 'unchanged']] },
            { id: 'mp2', markDescription: 'Potential energy increases as bonds/forces weaken or break', requiredKeywordGroups: [['potential'], ['increas', 'bond', 'force']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-5',
    subtopicId: 'phys-4-1',
    number: 5,
    stimulus: 'A medical tracer isotope has an initial count rate of 640 counts/s (after background subtraction) and a half-life of 4.0 hours. It emits gamma radiation.',
    parts: [
      {
        id: 'phys-exam-5a',
        label: 'a)',
        prompt: 'Calculate the count rate of the tracer 12 hours after injection.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '12 ÷ 4 = 3 half-lives. Count rate halves three times: 640 → 320 → 160 → 80 counts/s.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies 3 half-lives (12 ÷ 4)', numericMatch: { value: 3, tolerance: 0 } },
            { id: 'mp2', markDescription: 'Calculates final count rate = 80 counts/s', numericMatch: { value: 80, tolerance: 0.5 } },
          ],
        },
      },
      {
        id: 'phys-exam-5b',
        label: 'b)',
        prompt: 'Explain why a gamma emitter with a 4-hour half-life is suitable as an internal medical tracer rather than an alpha emitter.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Gamma radiation is weakly ionising so causes minimal tissue damage inside the body, can pass out of the body to be detected externally, and a 4-hour half-life gives enough time for scanning before decaying away quickly (whereas alpha is strongly ionising and cannot leave the body).',
          markPoints: [
            { id: 'mp1', markDescription: 'Gamma is weakly ionising (less cell/DNA damage) vs strongly ionising alpha', requiredKeywordGroups: [['weak', 'less', 'low'], ['ionis', 'damage']] },
            { id: 'mp2', markDescription: 'Gamma penetrates out of the body to reach the detector', requiredKeywordGroups: [['pass', 'penetrat', 'leave', 'exit'], ['detect', 'body', 'outside']] },
            { id: 'mp3', markDescription: 'Short half-life means activity decays quickly so patient exposure is brief', requiredKeywordGroups: [['short', 'quick', 'decay'], ['exposure', 'safe', 'scan', 'hours']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-6',
    subtopicId: 'phys-5-1',
    number: 6,
    stimulus: 'A 1,400 kg car travels at 20 m/s when the driver spots an obstacle. The driver’s reaction time is 0.50 s, and the brakes then bring the car to rest over 25 m.',
    diagram: 'forces-free-body',
    parts: [
      {
        id: 'phys-exam-6a',
        label: 'a)',
        prompt: 'Calculate the car’s thinking distance and total stopping distance.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Thinking distance = speed × reaction time = 20 × 0.50 = 10 m. Total stopping distance = 10 + 25 = 35 m.',
          markPoints: [
            { id: 'mp1', markDescription: 'Thinking distance = 10 m', numericMatch: { value: 10, tolerance: 0.1 } },
            { id: 'mp2', markDescription: 'Total stopping distance = 35 m', numericMatch: { value: 35, tolerance: 0.1 } },
          ],
        },
      },
      {
        id: 'phys-exam-6b',
        label: 'b)',
        prompt: 'Calculate the uniform deceleration of the car while braking using v² − u² = 2as.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: '0² − 20² = 2 × a × 25 → −400 = 50a → a = −8.0 m/s² (deceleration = 8.0 m/s²).',
          markPoints: [
            { id: 'mp1', markDescription: 'Substitutes u = 20, v = 0, s = 25 into v² − u² = 2as', requiredKeywordGroups: [['400', '20'], ['50', '25']] },
            { id: 'mp2', markDescription: 'Calculates deceleration of 8 m/s² (or −8 m/s²)', numericMatch: { value: 8, tolerance: 0.1 } },
          ],
        },
      },
      {
        id: 'phys-exam-6c',
        label: 'c)',
        prompt: 'Calculate the resultant braking force acting on the 1,400 kg car.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'F = m × a = 1,400 × 8.0 = 11,200 N.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies F = ma', requiredKeywordGroups: [['1400', '1,400'], ['8']] },
            { id: 'mp2', markDescription: 'Calculates 11,200 N', numericMatch: { value: 11200, tolerance: 50 } },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-7',
    subtopicId: 'phys-6-1',
    number: 7,
    stimulus: 'Students use a ripple tank to measure water wave speed. They measure the distance across 10 complete waves as 0.30 m and count 40 waves passing a fixed mark in 8.0 seconds.',
    diagram: 'transverse-wave',
    parts: [
      {
        id: 'phys-exam-7a',
        label: 'a)',
        prompt: 'Calculate the wavelength λ and frequency f of the water waves.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Wavelength λ = 0.30 ÷ 10 = 0.03 m. Frequency f = 40 ÷ 8.0 = 5.0 Hz.',
          markPoints: [
            { id: 'mp1', markDescription: 'Wavelength = 0.03 m', numericMatch: { value: 0.03, tolerance: 0.002 } },
            { id: 'mp2', markDescription: 'Frequency = 5 Hz', numericMatch: { value: 5, tolerance: 0.1 } },
          ],
        },
      },
      {
        id: 'phys-exam-7b',
        label: 'b)',
        prompt: 'Calculate the wave speed v of the ripples.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'v = f × λ = 5.0 × 0.03 = 0.15 m/s.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies v = fλ', requiredKeywordGroups: [['5'], ['0.03']] },
            { id: 'mp2', markDescription: 'Calculates 0.15 m/s', numericMatch: { value: 0.15, tolerance: 0.01 } },
          ],
        },
      },
      {
        id: 'phys-exam-7c',
        label: 'c)',
        prompt: 'Explain why measuring across 10 wavelengths and dividing by 10 improves accuracy compared to measuring a single wavelength.',
        kind: 'short-answer',
        marks: 1,
        rubric: {
          maxMarks: 1,
          modelAnswer: 'Measuring a larger total distance reduces the percentage uncertainty (measurement error) and averages out small reading errors.',
          markPoints: [
            { id: 'mp1', markDescription: 'Reduces percentage uncertainty / measurement error', requiredKeywordGroups: [['reduc', 'lower', 'small', 'average'], ['error', 'uncertaint']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-8',
    subtopicId: 'phys-7-1',
    number: 8,
    stimulus: 'A laptop charger contains an ideal (100% efficient) step-down transformer with 1,150 primary turns connected to 230 V UK mains and 100 secondary turns delivering 2.3 A to the laptop.',
    parts: [
      {
        id: 'phys-exam-8a',
        label: 'a)',
        prompt: 'Calculate the secondary potential difference Vs output to the laptop.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Vs = Vp × (ns ÷ np) = 230 × (100 ÷ 1,150) = 20 V.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies Vp/Vs = np/ns', requiredKeywordGroups: [['230'], ['100', '1150', '1,150']] },
            { id: 'mp2', markDescription: 'Calculates Vs = 20 V', numericMatch: { value: 20, tolerance: 0.2 } },
          ],
        },
      },
      {
        id: 'phys-exam-8b',
        label: 'b)',
        prompt: 'Calculate the primary current Ip drawn from the 230 V mains supply.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Using Vp × Ip = Vs × Is: 230 × Ip = 20 × 2.3 = 46 → Ip = 46 ÷ 230 = 0.20 A.',
          markPoints: [
            { id: 'mp1', markDescription: 'Applies VpIp = VsIs (46 W)', numericMatch: { value: 46, tolerance: 0.5 } },
            { id: 'mp2', markDescription: 'Calculates Ip = 0.2 A', numericMatch: { value: 0.2, tolerance: 0.01 } },
          ],
        },
      },
      {
        id: 'phys-exam-8c',
        label: 'c)',
        prompt: 'Explain the role of the iron core inside the transformer.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Iron is easily magnetised and demagnetised, so it channels the alternating magnetic field produced by the primary coil cleanly through the secondary coil.',
          markPoints: [
            { id: 'mp1', markDescription: 'Iron is easily magnetised and demagnetised', requiredKeywordGroups: [['magnetis', 'soft iron']] },
            { id: 'mp2', markDescription: 'Links/channels the alternating magnetic field to the secondary coil', requiredKeywordGroups: [['alternating', 'changing', 'magnetic field'], ['secondary']] },
          ],
        },
      },
    ],
  },
  {
    id: 'phys-exam-9',
    subtopicId: 'phys-8-1',
    number: 9,
    stimulus: 'Astronomers observe absorption spectra from two distant galaxies: Galaxy A shows a small red-shift, while Galaxy B shows a much larger red-shift.',
    parts: [
      {
        id: 'phys-exam-9a',
        label: 'a)',
        prompt: 'State which galaxy is further from Earth and compare their speeds of recession.',
        kind: 'short-answer',
        marks: 2,
        rubric: {
          maxMarks: 2,
          modelAnswer: 'Galaxy B is further from Earth because its larger red-shift shows it is receding faster than Galaxy A.',
          markPoints: [
            { id: 'mp1', markDescription: 'Identifies Galaxy B as further away', requiredKeywordGroups: [['galaxy b', 'b'], ['further', 'farther']] },
            { id: 'mp2', markDescription: 'Galaxy B is moving away faster', requiredKeywordGroups: [['faster', 'greater speed', 'higher speed'], ['away', 'reced']] },
          ],
        },
      },
      {
        id: 'phys-exam-9b',
        label: 'b)',
        prompt: 'Compare the final evolutionary stages of a star like the Sun with a star 20 times more massive than the Sun.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'After the main sequence, a Sun-sized star expands into a red giant and then cools into a white dwarf and black dwarf. A much more massive star becomes a red supergiant, explodes in a supernova, and leaves a neutron star or black hole.',
          markPoints: [
            { id: 'mp1', markDescription: 'Sun-sized: red giant → white dwarf (→ black dwarf)', requiredKeywordGroups: [['red giant'], ['white dwarf']] },
            { id: 'mp2', markDescription: 'Massive star: red supergiant → supernova', requiredKeywordGroups: [['supergiant'], ['supernova']] },
            { id: 'mp3', markDescription: 'Massive remnant: neutron star or black hole', requiredKeywordGroups: [['neutron star', 'black hole']] },
          ],
        },
      },
    ],
  },
];

export const PHYSICS_PAST_PAPERS: PastPaperDoc[] = [
  {
    id: 'phys-pp-2024-p1',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 1: Energy, Electricity, Particle Model & Atomic Structure (8463/1H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '8463/1H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA GCSE Physics Equations Sheet Insert (2024).',
    sampleQuestions: [
      {
        number: '01.1',
        question: 'Calculate the gravitational potential energy gained by a 65 kg climber ascending 40 m (g = 9.8 N/kg).',
        marks: 2,
        markScheme: ['Formula: Ep = mgh (1 mark)', 'Ep = 65 × 9.8 × 40 = 25,480 J (1 mark)'],
      },
      {
        number: '02.1',
        question: 'Explain why a filament lamp is a non-ohmic conductor as the potential difference across it increases.',
        marks: 3,
        markScheme: [
          'Current increases so the metal filament gets hotter (1 mark)',
          'Metal ions vibrate with greater amplitude (1 mark)',
          'More frequent collisions with flowing electrons increase resistance (1 mark)',
        ],
      },
      {
        number: '03.2',
        question: 'Calculate the energy required to melt 0.75 kg of ice at 0 °C (L_f = 334,000 J/kg).',
        marks: 2,
        markScheme: ['Formula: E = mL (1 mark)', 'E = 0.75 × 334,000 = 250,500 J (1 mark)'],
      },
      {
        number: '04.3',
        question: 'Write the balanced nuclear equation for the alpha decay of ²²⁶₈₈Ra into radon (Rn).',
        marks: 2,
        markScheme: ['Mass number 222 and atomic number 86 for Rn (1 mark)', 'Alpha particle written as ⁴₂He (1 mark)'],
      },
    ],
  },
  {
    id: 'phys-pp-2024-p2',
    specEra: 'new-9-1',
    year: '2024',
    title: 'Paper 2: Forces, Waves, Magnetism & Space Physics (8463/2H)',
    tier: 'Higher',
    series: 'June 2024',
    paperCode: '8463/2H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA GCSE Physics Equations Sheet Insert (2024).',
    sampleQuestions: [
      {
        number: '01.1',
        question: 'Explain how red-shift of light from distant galaxies provides evidence for the Big Bang Theory.',
        marks: 3,
        markScheme: [
          'Observed wavelength increases / shifts toward red end of spectrum (1 mark)',
          'More distant galaxies have greater red-shift and recede faster (1 mark)',
          'Shows space itself is expanding from an initial small, hot, dense state (1 mark)',
        ],
      },
      {
        number: '02.2',
        question: 'A 1,200 kg car accelerates uniformly from 5 m/s to 25 m/s in 8.0 s. Calculate the resultant force on the car.',
        marks: 3,
        markScheme: ['a = (25 − 5) ÷ 8 = 2.5 m/s² (1 mark)', 'F = ma = 1,200 × 2.5 (1 mark)', 'F = 3,000 N (1 mark)'],
      },
      {
        number: '03.1',
        question: 'A microwave signal has frequency 2.5 × 10⁹ Hz and speed 3.0 × 10⁸ m/s. Calculate its wavelength.',
        marks: 2,
        markScheme: ['λ = v ÷ f = (3.0 × 10⁸) ÷ (2.5 × 10⁹) (1 mark)', 'λ = 0.12 m (1 mark)'],
      },
      {
        number: '04.2',
        question: 'Explain why a step-up transformer is placed immediately after a power station in the National Grid.',
        marks: 3,
        markScheme: [
          'Increases potential difference and decreases current for the same power (1 mark)',
          'Less thermal energy dissipated in transmission cables via P = I²R (1 mark)',
          'Increases overall efficiency of electricity transmission (1 mark)',
        ],
      },
    ],
  },
  {
    id: 'phys-pp-2023-p1',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 1: Energy, Electricity, Particle Model & Atomic Structure (8463/1H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '8463/1H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA GCSE Physics Equations Sheet Insert (2023).',
    sampleQuestions: [
      {
        number: '01.2',
        question: 'A 2.4 kW kettle boils water in 150 seconds. Calculate the electrical energy transferred in kJ.',
        marks: 2,
        markScheme: ['E = P × t = 2,400 × 150 = 360,000 J (1 mark)', '360 kJ (1 mark)'],
      },
      {
        number: '02.3',
        question: 'Describe how to measure the density of an irregular stone using a Eureka can.',
        marks: 4,
        markScheme: [
          'Measure mass m using an electronic balance (1 mark)',
          'Fill Eureka can to spout and gently submerge stone (1 mark)',
          'Measure volume V of displaced water in a measuring cylinder (1 mark)',
          'Calculate density using ρ = m ÷ V (1 mark)',
        ],
      },
      {
        number: '03.1',
        question: 'An LDR is connected in series with a fixed resistor across a 6 V cell. State what happens to the LDR resistance when light intensity increases.',
        marks: 2,
        markScheme: ['LDR resistance decreases (1 mark)', 'Total circuit current increases (1 mark)'],
      },
      {
        number: '04.1',
        question: 'A sample’s activity falls from 960 Bq to 60 Bq in 20 minutes. Calculate its half-life.',
        marks: 2,
        markScheme: ['4 half-lives: 960 → 480 → 240 → 120 → 60 (1 mark)', 'Half-life = 20 ÷ 4 = 5 minutes (1 mark)'],
      },
    ],
  },
  {
    id: 'phys-pp-2023-p2',
    specEra: 'new-9-1',
    year: '2023',
    title: 'Paper 2: Forces, Waves, Magnetism & Space Physics (8463/2H)',
    tier: 'Higher',
    series: 'June 2023',
    paperCode: '8463/2H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA GCSE Physics Equations Sheet Insert (2023).',
    sampleQuestions: [
      {
        number: '01.3',
        question: 'A skydiver jumps from an aircraft. Explain why her acceleration decreases until she reaches terminal velocity.',
        marks: 4,
        markScheme: [
          'Initially weight > air resistance so she accelerates downwards (1 mark)',
          'As speed increases, upward air resistance increases (1 mark)',
          'Resultant downward force decreases, so acceleration decreases (1 mark)',
          'When air resistance = weight, resultant force = 0 N → constant terminal velocity (1 mark)',
        ],
      },
      {
        number: '02.1',
        question: 'Describe what happens to wavefronts of light entering a glass block at an angle from air.',
        marks: 3,
        markScheme: [
          'Edge entering glass first slows down (1 mark)',
          'Wavefront pivots so ray bends toward the normal (1 mark)',
          'Wavelength decreases while frequency stays constant (1 mark)',
        ],
      },
      {
        number: '03.2',
        question: 'A 0.15 m wire carries 3.2 A at 90° to a 0.50 T magnetic field. Calculate the motor effect force.',
        marks: 2,
        markScheme: ['F = BIl = 0.50 × 3.2 × 0.15 (1 mark)', 'F = 0.24 N (1 mark)'],
      },
      {
        number: '04.1',
        question: 'State the role of a split-ring commutator inside a simple DC electric motor.',
        marks: 2,
        markScheme: ['Reverses current direction in the coil every half-turn (1 mark)', 'Keeps the coil rotating continuously in the same direction (1 mark)'],
      },
    ],
  },
  {
    id: 'phys-pp-2022-p1',
    specEra: 'new-9-1',
    year: '2022',
    title: 'Paper 1: Energy, Electricity, Particle Model & Atomic Structure (8463/1H)',
    tier: 'Higher',
    series: 'June 2022',
    paperCode: '8463/1H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA GCSE Physics Equations Sheet Insert (2022).',
    sampleQuestions: [
      {
        number: '01.1',
        question: 'Calculate the temperature rise when 42,000 J heats 2.0 kg of water (c = 4,200 J/kg °C).',
        marks: 2,
        markScheme: ['Δθ = ΔE ÷ (mc) = 42,000 ÷ (2.0 × 4,200) (1 mark)', 'Δθ = 5.0 °C (1 mark)'],
      },
      {
        number: '02.2',
        question: 'Explain why an earth wire is essential on a metal-cased electric toaster.',
        marks: 3,
        markScheme: [
          'If the live wire touches the metal case, the case becomes live at 230 V (1 mark)',
          'Earth wire provides a low-resistance path to ground (1 mark)',
          'Large current surges and melts the fuse, disconnecting the live supply (1 mark)',
        ],
      },
      {
        number: '03.3',
        question: 'A gas occupies 0.040 m³ at 150 kPa. Calculate its pressure when compressed to 0.015 m³ at constant temperature.',
        marks: 2,
        markScheme: ['p₁V₁ = p₂V₂ → p₂ = (150 × 0.040) ÷ 0.015 (1 mark)', 'p₂ = 400 kPa (1 mark)'],
      },
      {
        number: '04.2',
        question: 'Explain why Rutherford’s alpha-scattering results disproved Thomson’s Plum Pudding model.',
        marks: 3,
        markScheme: [
          'Plum pudding predicted only tiny deflections (1 mark)',
          'Large-angle deflections showed concentrated positive charge and mass (1 mark)',
          'Most alpha particles passing straight through showed the atom is mostly empty space (1 mark)',
        ],
      },
    ],
  },
  {
    id: 'phys-pp-2022-p2',
    specEra: 'new-9-1',
    year: '2022',
    title: 'Paper 2: Forces, Waves, Magnetism & Space Physics (8463/2H)',
    tier: 'Higher',
    series: 'June 2022',
    paperCode: '8463/2H',
    durationMinutes: 105,
    totalMarks: 100,
    insertNote: 'Includes Official AQA GCSE Physics Equations Sheet Insert (2022).',
    sampleQuestions: [
      {
        number: '01.1',
        question: 'A 1,000 kg car moving at 12 m/s collides and sticks to a stationary 2,000 kg van. Calculate their joint velocity immediately after impact.',
        marks: 3,
        markScheme: ['Initial momentum = 1,000 × 12 = 12,000 kg m/s (1 mark)', 'Total mass = 3,000 kg (1 mark)', 'v = 12,000 ÷ 3,000 = 4.0 m/s (1 mark)'],
      },
      {
        number: '02.2',
        question: 'Compare the structure of an alternator and a dynamo.',
        marks: 2,
        markScheme: ['Alternator uses slip rings to produce AC (1 mark)', 'Dynamo uses a split-ring commutator to produce DC (1 mark)'],
      },
      {
        number: '03.1',
        question: 'Explain why a planet orbiting the Sun at constant speed is continuously accelerating.',
        marks: 2,
        markScheme: ['Direction of motion is constantly changing so velocity changes (1 mark)', 'Gravity provides an inward resultant (centripetal) force (1 mark)'],
      },
      {
        number: '04.2',
        question: 'Give one use and one hazard of X-rays.',
        marks: 2,
        markScheme: ['Use: medical imaging of broken bones / airport security scanners (1 mark)', 'Hazard: ionising radiation that can mutate DNA / cause cancer (1 mark)'],
      },
    ],
  },
];

export const PHYSICS_KEY_TERMS: KeyTermEntry[] = [
  { id: 'phys-kt-1', term: 'Kinetic energy', definition: 'Energy stored in a moving object: Ek = ½mv² (J).', topicNumber: 1, subtopicId: 'phys-1-1', subtopicCode: '1.1' },
  { id: 'phys-kt-2', term: 'Dissipation', definition: 'Energy spreading out wastefully into thermal stores of the surroundings.', topicNumber: 1, subtopicId: 'phys-1-1', subtopicCode: '1.1' },
  { id: 'phys-kt-3', term: 'Elastic potential energy', definition: 'Energy stored in a stretched or compressed elastic object: Ee = ½ke² (J).', topicNumber: 1, subtopicId: 'phys-1-1', subtopicCode: '1.1' },
  { id: 'phys-kt-4', term: 'Specific heat capacity', definition: 'Energy required to raise 1 kg of a substance by 1 °C: ΔE = mcΔθ.', topicNumber: 1, subtopicId: 'phys-1-1', subtopicCode: '1.1' },
  { id: 'phys-kt-5', term: 'Power', definition: 'Rate at which energy is transferred or work is done: P = E ÷ t (W).', topicNumber: 1, subtopicId: 'phys-1-2', subtopicCode: '1.2' },
  { id: 'phys-kt-6', term: 'Efficiency', definition: 'Fraction or percentage of input energy transferred usefully (≤ 1.0).', topicNumber: 1, subtopicId: 'phys-1-2', subtopicCode: '1.2' },
  { id: 'phys-kt-7', term: 'Thermal conductivity', definition: 'Rate at which heat conducts through a material; lower values mean better insulation.', topicNumber: 1, subtopicId: 'phys-1-2', subtopicCode: '1.2' },
  { id: 'phys-kt-8', term: 'Current', definition: 'Rate of flow of electrical charge measured in amperes (A): Q = It.', topicNumber: 2, subtopicId: 'phys-2-1', subtopicCode: '2.1' },
  { id: 'phys-kt-9', term: 'Potential difference', definition: 'Energy transferred per coulomb of charge passed between two points (V = E ÷ Q).', topicNumber: 2, subtopicId: 'phys-2-1', subtopicCode: '2.1' },
  { id: 'phys-kt-10', term: 'Ohmic conductor', definition: 'Component whose current is directly proportional to p.d. at constant temperature.', topicNumber: 2, subtopicId: 'phys-2-1', subtopicCode: '2.1' },
  { id: 'phys-kt-11', term: 'Density', definition: 'Mass per unit volume: ρ = m ÷ V (kg/m³).', topicNumber: 3, subtopicId: 'phys-3-1', subtopicCode: '3.1' },
  { id: 'phys-kt-12', term: 'Internal energy', definition: 'Sum of kinetic and potential energies of all particles inside a system.', topicNumber: 3, subtopicId: 'phys-3-1', subtopicCode: '3.1' },
  { id: 'phys-kt-13', term: 'Specific latent heat', definition: 'Energy needed to change the state of 1 kg of a substance with no temperature change: E = mL.', topicNumber: 3, subtopicId: 'phys-3-1', subtopicCode: '3.1' },
  { id: 'phys-kt-14', term: 'Becquerel (Bq)', definition: 'Unit of radioactive activity equal to 1 nuclear decay per second.', topicNumber: 4, subtopicId: 'phys-4-1', subtopicCode: '4.1' },
  { id: 'phys-kt-15', term: 'Half-life', definition: 'Time taken for half the radioactive nuclei in a sample to decay.', topicNumber: 4, subtopicId: 'phys-4-1', subtopicCode: '4.1' },
  { id: 'phys-kt-16', term: 'Contamination', definition: 'Unwanted presence of materials containing radioactive atoms on or inside another material.', topicNumber: 4, subtopicId: 'phys-4-1', subtopicCode: '4.1' },
  { id: 'phys-kt-17', term: 'Resultant force', definition: 'Single overall force having the same effect on motion as all individual forces combined.', topicNumber: 5, subtopicId: 'phys-5-1', subtopicCode: '5.1' },
  { id: 'phys-kt-18', term: 'Thinking distance', definition: 'Distance a vehicle travels between the driver spotting a hazard and applying the brakes.', topicNumber: 5, subtopicId: 'phys-5-1', subtopicCode: '5.1' },
  { id: 'phys-kt-19', term: 'Momentum', definition: 'Product of mass and velocity (p = mv), conserved in closed collisions.', topicNumber: 5, subtopicId: 'phys-5-1', subtopicCode: '5.1' },
  { id: 'phys-kt-20', term: 'Frequency', definition: 'Number of complete waves passing a fixed point each second, measured in hertz (Hz).', topicNumber: 6, subtopicId: 'phys-6-1', subtopicCode: '6.1' },
  { id: 'phys-kt-21', term: 'Wavelength', definition: 'Distance from a point on one wave to the equivalent point on the adjacent wave (m).', topicNumber: 6, subtopicId: 'phys-6-1', subtopicCode: '6.1' },
  { id: 'phys-kt-22', term: 'Refraction', definition: 'Change in wave direction caused by a change in wave speed when entering a different medium at an angle.', topicNumber: 6, subtopicId: 'phys-6-1', subtopicCode: '6.1' },
  { id: 'phys-kt-23', term: 'Magnetic flux density (B)', definition: 'Strength of a magnetic field measured in tesla (T), used in F = BIl.', topicNumber: 7, subtopicId: 'phys-7-1', subtopicCode: '7.1' },
  { id: 'phys-kt-24', term: 'Motor effect', definition: 'Force exerted on a current-carrying conductor placed at an angle to a magnetic field.', topicNumber: 7, subtopicId: 'phys-7-1', subtopicCode: '7.1' },
  { id: 'phys-kt-25', term: 'Transformer', definition: 'Device with primary and secondary coils on an iron core that steps alternating voltage up or down.', topicNumber: 7, subtopicId: 'phys-7-1', subtopicCode: '7.1' },
  { id: 'phys-kt-26', term: 'Main sequence star', definition: 'Stable period in a star’s life where inward gravity balances outward pressure from core nuclear fusion.', topicNumber: 8, subtopicId: 'phys-8-1', subtopicCode: '8.1' },
  { id: 'phys-kt-27', term: 'Supernova', definition: 'Explosive death of a massive star that produces elements heavier than iron.', topicNumber: 8, subtopicId: 'phys-8-1', subtopicCode: '8.1' },
  { id: 'phys-kt-28', term: 'Red-shift', definition: 'Lengthening of light wavelengths from distant galaxies moving away from Earth.', topicNumber: 8, subtopicId: 'phys-8-1', subtopicCode: '8.1' },
];
