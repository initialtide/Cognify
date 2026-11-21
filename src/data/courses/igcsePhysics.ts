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

export const IGCSE_PHYSICS_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Motion, Forces & Energy',
    subtopics: [
      {
        id: 'igcse-phys-1-1',
        code: '1.1',
        slug: '1.1-measurement-speed-motion-graphs',
        title: 'Physical Quantities, Speed & Motion Graphs',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-1-2',
        code: '1.2',
        slug: '1.2-mass-weight-density-forces',
        title: 'Mass, Weight, Density, Forces & Newton’s Laws',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-1-3',
        code: '1.3',
        slug: '1.3-moments-momentum-pressure',
        title: 'Moments, Momentum, Impulse & Pressure',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-1-4',
        code: '1.4',
        slug: '1.4-energy-work-power-efficiency',
        title: 'Energy Stores, Work Done, Power & Efficiency',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Thermal Physics',
    subtopics: [
      {
        id: 'igcse-phys-2-1',
        code: '2.1',
        slug: '2.1-kinetic-particle-model-gas-laws',
        title: 'Kinetic Particle Model of Matter & Gas Laws',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-2-2',
        code: '2.2',
        slug: '2.2-specific-heat-latent-heat-transfer',
        title: 'Specific Heat Capacity, Latent Heat & Thermal Transfer',
        readingMinutes: 11,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Waves & Optics',
    subtopics: [
      {
        id: 'igcse-phys-3-1',
        code: '3.1',
        slug: '3.1-general-wave-properties',
        title: 'General Wave Properties, Reflection, Refraction & Diffraction',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-3-2',
        code: '3.2',
        slug: '3.2-light-lenses-tir-em-spectrum',
        title: 'Light, Lenses, Total Internal Reflection & EM Spectrum',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-3-3',
        code: '3.3',
        slug: '3.3-sound-waves-echoes-ultrasound',
        title: 'Sound Waves, Echoes & Ultrasound',
        readingMinutes: 8,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'Electricity & Magnetism',
    subtopics: [
      {
        id: 'igcse-phys-4-1',
        code: '4.1',
        slug: '4.1-charge-current-emf-resistance',
        title: 'Electric Charge, Current, EMF, Potential Difference & Resistance',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-4-2',
        code: '4.2',
        slug: '4.2-series-parallel-circuits-safety',
        title: 'Series & Parallel Circuits, Potential Dividers & Mains Safety',
        readingMinutes: 11,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-4-3',
        code: '4.3',
        slug: '4.3-magnetism-motor-effect-transformers',
        title: 'Magnetism, Motor Effect, EM Induction & Transformers',
        readingMinutes: 12,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 5,
    title: 'Nuclear Physics',
    subtopics: [
      {
        id: 'igcse-phys-5-1',
        code: '5.1',
        slug: '5.1-nuclear-atom-isotopes-fission-fusion',
        title: 'The Nuclear Model of the Atom, Isotopes, Fission & Fusion',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-5-2',
        code: '5.2',
        slug: '5.2-radioactive-decay-half-life-safety',
        title: 'Radioactive Decay (Alpha, Beta, Gamma) & Half-Life',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 6,
    title: 'Space Physics',
    subtopics: [
      {
        id: 'igcse-phys-6-1',
        code: '6.1',
        slug: '6.1-earth-solar-system-orbits',
        title: 'Earth, The Solar System & Orbital Motion',
        readingMinutes: 9,
        hasDeepContent: true,
      },
      {
        id: 'igcse-phys-6-2',
        code: '6.2',
        slug: '6.2-stars-redshift-big-bang',
        title: 'Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_PHYSICS_NOTES: Record<string, NoteLesson> = {
  'igcse-phys-1-1': {
    subtopicId: 'igcse-phys-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Physical Quantities, Speed & Motion Graphs',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Velocity-Time Graphs - How to Find Acceleration & Distance Travelled',
    youtubeId: 'VJefeYJL3uE',
    videoChannel: 'Cognito',
    videoDuration: '5:32',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-phys-1-1-c1' },
      { time: '0:38', seconds: 38, label: 'How Gradient Represents Acceleration', cardId: 'igcse-phys-1-1-c2' },
      { time: '2:36', seconds: 156, label: 'Distance Travelled - Area Under the Curve', cardId: 'igcse-phys-1-1-c3' },
      { time: '4:01', seconds: 241, label: 'Estimating Distance for Curved Sections', cardId: 'igcse-phys-1-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-1-1-c1',
        title: 'Measurement Techniques, Scalars & Vectors',
        summary: 'Using precision measuring instruments and distinguishing scalar vs vector quantities.',
        bullets: [
          'Length is measured with rulers (to 1 mm), vernier callipers (to 0.1 mm), or micrometer screw gauges (to 0.01 mm). Always check for zero error and read **perpendicular** to the scale to avoid parallax error.',
          'To measure the period T of a pendulum accurately, time 20 complete oscillations with a stopwatch and divide the total time by 20 — this reduces the percentage error from human reaction time.',
          '**A scalar quantity has magnitude (size) only:** distance, speed, time, mass, energy, temperature, and density.',
          'A vector quantity has both magnitude and direction: displacement, velocity, acceleration, force, weight, momentum, and gravitational/electric field strength.',
          'Resultant of two **perpendicular** vectors (e.g., 3 N east and 4 N north): magnitude = √(3² + 4²) = 5 N, direction found by tan θ = 4/3 (θ = 53.1° north of east).',
        ],
        glossaryPills: [
          {
            term: 'parallax error',
            definition: 'Apparent shift in reading a scale caused by viewing the pointer or meniscus from an angle rather than straight on at eye level.',
          },
          {
            term: 'vector quantity',
            definition: 'A physical quantity described fully by both its numerical magnitude and its direction in space.',
          },
        ],
        memoryAid: 'Think V for Vector = Value + direction arrow; S for Scalar = Size only.',
      },
      {
        id: 'igcse-phys-1-1-c2',
        title: 'Speed, Velocity & Uniform Acceleration',
        summary: 'Calculating average speed, velocity, uniform acceleration, and free fall.',
        bullets: [
          'Average speed = total distance travelled ÷ total time taken: **v = s ÷ t** (SI unit: m/s). Velocity is speed in a specified direction.',
          '**Acceleration is the rate of change of velocity:** **a = (v − u) ÷ t** (SI unit: m/s²), where u is initial velocity and v is final velocity.',
          'Negative acceleration (deceleration) occurs when velocity decreases in the forward direction (e.g., braking from 24 m/s to 6 m/s in 6 s gives a = (6 − 24) ÷ 6 = −3.0 m/s²).',
          'Near Earth’s surface, all objects in free fall (ignoring air resistance) experience constant gravitational acceleration g ≈ 9.8 m/s² (CIE 0625 uses g = 9.8 m/s²).',
        ],
        commonMistake: 'When calculating average speed over a two-stage journey, NEVER average the two speeds directly — always divide TOTAL distance by TOTAL time.',
      },
      {
        id: 'igcse-phys-1-1-c3',
        title: 'Interpreting Distance–Time & Speed–Time Graphs',
        summary: 'Reading gradients and areas from distance-time and speed-time graphs.',
        diagram: 'forces-free-body',
        bullets: [
          '**On a distance–time graph:** gradient = speed; a horizontal line means the object is stationary; a straight sloped line means constant speed; an upward-curving slope means accelerating.',
          '**On a speed–time (or velocity–time) graph:** gradient = acceleration; a horizontal line above zero means constant speed; a downward straight line means uniform deceleration.',
          'The area under a speed–time graph equals the distance travelled. Split complex regions into rectangles (base × height) and triangles (½ × base × height).',
          '**Worked example:** A cyclist accelerates uniformly from 0 to 12 m/s in 8 s, then rides at 12 m/s for 20 s. Distance = (½ × 8 × 12) + (20 × 12) = 48 + 240 = 288 m.',
        ],
        glossaryPills: [
          {
            term: 'gradient',
            definition: 'Steepness of a graph calculated as vertical change divided by horizontal change (Δy ÷ Δx).',
          },
        ],
        memoryAid: 'On a v–t graph: Gradient = Acceleration, Area = Distance (remember "G-A, A-D").',
      },
    ],
    keyTerms: [
      { term: 'Scalar', definition: 'A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy).' },
      { term: 'Vector', definition: 'A physical quantity with both magnitude and direction (e.g., velocity, force, momentum).' },
      { term: 'Acceleration', definition: 'Rate of change of velocity per unit time: a = (v − u) ÷ t, measured in m/s².' },
      { term: 'Uniform acceleration', definition: 'Constant rate of increase of velocity, shown as a straight line on a speed–time graph.' },
    ],
    checklistPoints: [
      'Distinguish between scalar and vector quantities and find the resultant of two perpendicular vectors.',
      'Calculate average speed (v = s/t) and acceleration (a = (v − u)/t) with correct SI units.',
      'Determine speed from the gradient of a distance–time graph, and both acceleration (gradient) and distance (area) from a speed–time graph.',
    ],
  },
  'igcse-phys-1-2': {
    subtopicId: 'igcse-phys-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Mass, Weight, Density, Forces & Newton’s Laws',
    readingMinutes: 11,
    videoTitle: 'GCSE Physics - Newton\'s 1st & 2nd Laws | Circular Motion | Inertia',
    youtubeId: 'D8XOm4swxOU',
    videoChannel: 'Cognito',
    videoDuration: '6:36',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-phys-1-2-c1' },
      { time: '1:11', seconds: 71, label: 'Newton\'s Second Law', cardId: 'igcse-phys-1-2-c3' },
      { time: '3:05', seconds: 185, label: 'Circular Motion', cardId: 'igcse-phys-1-2-c3' },
      { time: '5:10', seconds: 310, label: 'Inertia & Inertial Mass', cardId: 'igcse-phys-1-2-c1' },
    ],
    cards: [
      {
        id: 'igcse-phys-1-2-c1',
        title: 'Mass, Weight & Density',
        summary: 'Linking mass, weight (W = mg), gravitational field strength, and density.',
        bullets: [
          'Mass (kg) is a measure of the quantity of matter in an object and resists changes in motion (inertia). Mass stays constant everywhere in the Universe.',
          'Weight (N) is the gravitational force acting on a mass: **W = m × g**, where gravitational field strength g = W ÷ m ≈ 9.8 N/kg on Earth (~1.6 N/kg on the Moon).',
          '**Density is mass per unit volume:** **ρ = m ÷ V** (units: kg/m³ or g/cm³, where 1 g/cm³ = 1,000 kg/m³).',
          'To measure the density of an irregular sinking solid: measure mass on a top-pan balance, submerge in a measuring cylinder (or Eureka displacement can) to find volume displaced, then compute **ρ = m ÷ V**. An object floats in a liquid if its density is lower than the liquid’s density.',
        ],
        glossaryPills: [
          {
            term: 'inertia',
            definition: 'The tendency of an object to remain at rest or continue moving at constant velocity unless acted on by a resultant external force.',
          },
          {
            term: 'gravitational field strength',
            definition: 'Gravitational force exerted per unit mass at a point in space: g = W ÷ m (N/kg).',
          },
        ],
        commonMistake: 'Students often say "weight is measured in kg". Weight is a FORCE measured in newtons (N) using a newtonmeter; mass is measured in kilograms (kg).',
      },
      {
        id: 'igcse-phys-1-2-c2',
        title: 'Hooke’s Law & Spring Constant',
        summary: 'Spring extension, spring constant k, and the limit of proportionality.',
        bullets: [
          'Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: **F = k × x**.',
          'Spring constant k = F ÷ x (units: N/m or N/cm) represents the stiffness of the spring and equals the gradient of the straight-line region of a force–extension graph.',
          'Beyond the limit of proportionality (elastic limit), the graph curves, the spring deforms plastically, and it will not return to its original length when unloaded.',
          '**Worked example:** A 4.0 N load stretches a spring from 12.0 cm to 17.0 cm. Extension x = 17.0 − 12.0 = 5.0 cm = 0.05 m, so k = 4.0 ÷ 0.05 = 80 N/m.',
        ],
        glossaryPills: [
          {
            term: 'limit of proportionality',
            definition: 'The point on a load–extension graph beyond which extension is no longer directly proportional to load.',
          },
        ],
        memoryAid: 'Always subtract the ORIGINAL unstretched length from the new length to get extension x before using F = kx.',
      },
      {
        id: 'igcse-phys-1-2-c3',
        title: 'Newton’s Laws, Circular Motion & Terminal Velocity',
        summary: 'Applying F = ma, circular motion forces, and skydiver terminal velocity.',
        diagram: 'forces-free-body',
        bullets: [
          '**Newton’s First Law:** If resultant force F = 0 N, a stationary object remains stationary and a moving object continues at constant speed in a straight line.',
          '**Newton’s Second Law:** Resultant force = mass × acceleration (**F = m × a**). Acceleration acts in the exact direction of the resultant force.',
          '**Newton’s Third Law:** Every action force has an equal and opposite reaction force acting on the two different interacting bodies.',
          '**Circular motion:** An object moving in a circle at constant speed is constantly changing direction, so its velocity is changing — it accelerates toward the centre under a perpendicular centripetal force (gravity for orbits, tension for a string, friction for a turning car).',
          'Terminal velocity of a falling skydiver: Initially weight > air resistance (downward acceleration ≈ 9.8 m/s²). As speed rises, drag increases, reducing resultant force and acceleration until air resistance = weight → resultant force = 0 → constant terminal velocity. Opening the parachute greatly increases drag > weight, causing rapid upward resultant force (deceleration) until a new, much slower terminal velocity is reached.',
        ],
        glossaryPills: [
          {
            term: 'terminal velocity',
            definition: 'The constant maximum velocity reached by a falling object when upward air resistance equals its downward weight.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Density', definition: 'Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³).' },
      { term: 'Spring constant', definition: 'Force required per unit extension of a spring: k = F ÷ x (N/m).' },
      { term: 'Resultant force', definition: 'The single force that has the same effect on an object’s motion as all individual forces combined.' },
      { term: 'Terminal velocity', definition: 'Steady final speed when drag balances weight so resultant force and acceleration are zero.' },
    ],
    checklistPoints: [
      'Calculate weight using W = mg and density using ρ = m/V, including displacement measurements.',
      'Apply Hooke’s Law (F = kx) and identify the limit of proportionality on a load–extension graph.',
      'Use F = ma and explain all stages of terminal velocity for a falling parachutist.',
    ],
  },
  'igcse-phys-1-3': {
    subtopicId: 'igcse-phys-1-3',
    subtopicCode: '1.3',
    subtopicTitle: 'Moments, Momentum, Impulse & Pressure',
    readingMinutes: 11,
    videoTitle: 'GCSE Physics - Momentum (Part 1 of 2) | Conservation of Momentum',
    youtubeId: 'mjeOuh0G-gw',
    videoChannel: 'Cognito',
    videoDuration: '7:33',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Momentum', cardId: 'igcse-phys-1-3-c2' },
      { time: '0:58', seconds: 58, label: 'Momentum as a Vector Quantity', cardId: 'igcse-phys-1-3-c2' },
      { time: '3:47', seconds: 227, label: 'Recoil and Explosions', cardId: 'igcse-phys-1-3-c2' },
      { time: '6:44', seconds: 404, label: 'Symbol for Momentum', cardId: 'igcse-phys-1-3-c2' },
    ],
    cards: [
      {
        id: 'igcse-phys-1-3-c1',
        title: 'Moments, Principle of Moments & Centre of Gravity',
        summary: 'Balancing turning moments, equilibrium conditions, and centre of gravity.',
        bullets: [
          'The moment of a force measures its turning effect about a pivot: Moment = Force × perpendicular distance from the pivot (**M = F × d**, unit: N m).',
          'For an object to be in complete equilibrium, two conditions must hold: (1) Zero resultant force, AND (2) Zero resultant moment (total clockwise moments = total anticlockwise moments about any pivot).',
          'Centre of gravity is the single point where the entire weight of an object appears to act. For an irregular lamina, hang it from two different pin holes with a plumb line; the intersection of the vertical lines marks the centre of gravity.',
          'An object is more stable if it has a LOWER centre of gravity and a WIDER base area (it topples only when the vertical line through its centre of gravity falls outside its base).',
        ],
        glossaryPills: [
          {
            term: 'centre of gravity',
            definition: 'The point in or near an object through which the whole weight of the body can be considered to act.',
          },
          {
            term: 'equilibrium',
            definition: 'State of balance where both resultant force and resultant turning moment equal zero.',
          },
        ],
        memoryAid: 'Think of a racing car: low to the ground (low CoG) and wide wheelbase (wide base) = maximum stability!',
      },
      {
        id: 'igcse-phys-1-3-c2',
        title: 'Momentum, Conservation & Impulse',
        summary: 'Conservation of momentum in collisions and impulse in car safety.',
        bullets: [
          '**Momentum is a vector quantity defined as:** **p = m × v** (units: kg m/s or N s).',
          '**Principle of conservation of momentum:** In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.',
          'Impulse is the change in momentum produced by a resultant force acting over time: Impulse = F × Δt = Δp = mv − mu.',
          'Car safety features (crumple zones, airbags, seatbelts) reduce injury by INCREASING the impact duration Δt for the same change in momentum Δp; since F = Δp ÷ Δt, the force on the passenger decreases dramatically.',
          '**Worked example:** A 2.0 kg trolley at 3.0 m/s collides and sticks to a stationary 1.0 kg trolley. Total p = 2.0 × 3.0 = 6.0 kg m/s. Combined mass = 3.0 kg, so final velocity v = 6.0 ÷ 3.0 = 2.0 m/s.',
        ],
        glossaryPills: [
          {
            term: 'impulse',
            definition: 'Product of resultant force and time for which it acts (FΔt), numerically equal to change in momentum (Δp).',
          },
        ],
        commonMistake: 'Momentum is a VECTOR — if two objects move toward each other, one velocity MUST be entered as negative!',
      },
      {
        id: 'igcse-phys-1-3-c3',
        title: 'Pressure in Solids & Liquids',
        summary: 'Calculating solid pressure, hydrostatic liquid pressure, and hydraulics.',
        bullets: [
          '**Pressure is force exerted per unit area:** **p = F ÷ A** (SI unit: pascal, Pa, where 1 Pa = 1 N/m²). A sharp knife concentrates force over a tiny area for high pressure; snowshoes spread weight over a large area for low pressure.',
          'Pressure in a liquid increases with depth h, liquid density ρ, and gravitational field strength g: **Δp = ρ × g × Δh**. Pressure acts equally in all directions at a given depth.',
          'Hydraulic systems (e.g., car brakes) exploit the fact that liquids are incompressible, transmitting pressure equally: F₁ ÷ A₁ = F₂ ÷ A₂ (a small force on a small master piston creates a huge force on a large slave piston).',
          '**Worked example:** Find the excess water pressure 15 m below the surface of seawater (ρ = 1,030 kg/m³, g = 9.8 N/kg): Δp = 1030 × 9.8 × 15 = 151,410 Pa ≈ 151 kPa.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Moment', definition: 'Turning effect of a force about a pivot: M = F × d (N m).' },
      { term: 'Momentum', definition: 'Product of mass and velocity (p = mv), a conserved vector quantity in closed collisions.' },
      { term: 'Impulse', definition: 'Force multiplied by time (FΔt), equal to the change in momentum (Δp).' },
      { term: 'Pascal (Pa)', definition: 'SI unit of pressure equal to one newton per square metre (1 N/m²).' },
    ],
    checklistPoints: [
      'Apply the principle of moments (clockwise = anticlockwise) to solve balanced beam problems.',
      'Use p = mv, conservation of momentum, and F = Δp/Δt to explain crumple zones and solve collisions.',
      'Calculate solid pressure (p = F/A) and hydrostatic liquid pressure (Δp = ρgΔh).',
    ],
  },
  'igcse-phys-1-4': {
    subtopicId: 'igcse-phys-1-4',
    subtopicCode: '1.4',
    subtopicTitle: 'Energy Stores, Work Done, Power & Efficiency',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Energy Stores, Transferring Energy & Work Done',
    youtubeId: 'JGwcDCeYRYo',
    videoChannel: 'Cognito',
    videoDuration: '5:09',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Conservation of Energy Principle', cardId: 'igcse-phys-1-4-c1' },
      { time: '1:05', seconds: 65, label: 'The 8 Energy Stores', cardId: 'igcse-phys-1-4-c1' },
      { time: '2:45', seconds: 165, label: 'Energy Transfer Pathways', cardId: 'igcse-phys-1-4-c1' },
      { time: '3:55', seconds: 235, label: 'Mechanical & Electrical Work Done', cardId: 'igcse-phys-1-4-c2' },
    ],
    cards: [
      {
        id: 'igcse-phys-1-4-c1',
        title: 'Energy Stores, Transfers & Mechanical Work',
        summary: 'The 8 energy stores, transfer pathways, mechanical work, Ek, and Ep.',
        bullets: [
          'Energy is stored in kinetic, gravitational potential, chemical, elastic (strain), nuclear, electrostatic, magnetic, and internal (thermal) stores.',
          'Energy is transferred between stores mechanically (forces doing work), electrically (currents), by heating (conduction/convection/radiation), or by waves (light/sound).',
          'Mechanical work done equals energy transferred when a force moves an object through distance d in the direction of the force: **W = F × d = ΔE** (unit: joule, J).',
          '**Core energy formulas:** Kinetic energy **Ek = ½mv²**; Gravitational potential energy **ΔEp = mgΔh**.',
          'By conservation of energy, for a frictionless roller coaster descending height h: ½mv² = mgh, so v = √(2gh) (independent of mass!).',
        ],
        glossaryPills: [
          {
            term: 'work done',
            definition: 'Energy transferred mechanically when a force moves its point of application in the direction of the force: W = F × d.',
          },
        ],
        memoryAid: 'Doubling speed quadruples kinetic energy (×4) because v is squared in Ek = ½mv².',
      },
      {
        id: 'igcse-phys-1-4-c2',
        title: 'Power & Efficiency',
        summary: 'Calculating power, percentage efficiency, and reading Sankey diagrams.',
        bullets: [
          'Power is the rate of work done or energy transferred: **P = W ÷ t = ΔE ÷ t** (SI unit: watt, W, where 1 W = 1 J/s).',
          'Percentage efficiency = (Useful energy output ÷ Total energy input) × 100%, or equivalently (Useful power output ÷ Total power input) × 100%.',
          'No real machine can exceed 100% efficiency because friction and electrical resistance always dissipate some energy into thermal stores in the surroundings.',
          'Sankey diagrams represent energy transfers to scale: arrow width is strictly proportional to the amount of energy in joules.',
        ],
        commonMistake: 'When calculating power in watts, ALWAYS convert time from minutes to seconds (×60) and energy from kJ to J (×1,000).',
      },
      {
        id: 'igcse-phys-1-4-c3',
        title: 'Renewable & Non-Renewable Energy Resources',
        summary: 'Comparing reliability, cost, and environmental impacts of energy resources.',
        bullets: [
          'Non-renewable resources (coal, oil, natural gas, nuclear fission of uranium) are finite. Fossil fuels are reliable and high energy-density but release CO₂ (greenhouse gas) and SO₂ (acid rain). Nuclear produces no CO₂ during generation but creates long-lived radioactive waste.',
          'Renewable resources (solar PV, wind, hydroelectric, wave, tidal, geothermal, biofuels) are replenished naturally and have low running costs/carbon emissions.',
          '**Trade-offs:** Solar and wind are intermittent (weather-dependent); hydroelectric is reliable and fast-response but floods valleys; geothermal is reliable only in volcanic regions.',
          'The Sun is the ultimate source of energy for almost all Earth resources (fossil fuels, wind, waves, hydro, biofuels, solar) EXCEPT geothermal, nuclear, and tidal (Moon’s gravity).',
        ],
        glossaryPills: [
          {
            term: 'renewable',
            definition: 'An energy resource that is naturally replenished as fast as or faster than it is used and will not run out.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Power', definition: 'Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W).' },
      { term: 'Efficiency', definition: 'Proportion of total energy input transferred usefully: (Useful output ÷ Total input) × 100%.' },
      { term: 'Work done', definition: 'Force multiplied by distance moved in the direction of the force: W = Fd (J).' },
    ],
    checklistPoints: [
      'Apply W = Fd, Ek = ½mv², and ΔEp = mgΔh, including equating Ep lost to Ek gained.',
      'Calculate power (P = E/t) and percentage efficiency using Sankey diagrams.',
      'Evaluate environmental, reliability, and cost trade-offs of renewable vs non-renewable energy resources.',
    ],
  },
  'igcse-phys-2-1': {
    subtopicId: 'igcse-phys-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'Kinetic Particle Model of Matter & Gas Laws',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Specific Heat Capacity | Internal Energy & Temperature',
    youtubeId: 'LUHGFLR2p8k',
    videoChannel: 'Cognito',
    videoDuration: '5:01',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-phys-2-1-c1' },
      { time: '1:02', seconds: 62, label: 'How Heating Affects Internal Energy and Temperature', cardId: 'igcse-phys-2-1-c2' },
      { time: '2:21', seconds: 141, label: 'The Specific Heat Capacity Equation', cardId: 'igcse-phys-2-1-c2' },
      { time: '4:07', seconds: 247, label: 'Practical Considerations: Energy Loss', cardId: 'igcse-phys-2-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-2-1-c1',
        title: 'States of Matter & Brownian Motion',
        summary: 'Particle arrangement in solids, liquids, and gases plus Brownian motion.',
        bullets: [
          '**Solids:** Particles tightly packed in a regular lattice, held by strong intermolecular forces, vibrating about fixed positions (fixed shape and volume).',
          '**Liquids:** Particles close together but irregularly arranged, sliding past one another (fixed volume, takes container shape).',
          '**Gases:** Particles far apart with negligible intermolecular forces, moving rapidly and randomly in all directions (compressible, fills container).',
          'Brownian motion: Tiny smoke particles in air (or pollen in water) observed under a microscope jitter in random zig-zag paths because much smaller, faster-moving invisible air/water molecules collide unevenly with them from all sides.',
        ],
        glossaryPills: [
          {
            term: 'Brownian motion',
            definition: 'Random erratic movement of visible microscopic particles (like smoke) caused by bombardment from much smaller, fast-moving fluid molecules.',
          },
        ],
        memoryAid: 'Remember: Smoke particles are HUGE and slow; air molecules are TINY, invisible, and fast — collisions push the smoke randomly.',
      },
      {
        id: 'igcse-phys-2-1-c2',
        title: 'Temperature, Absolute Zero & The Kelvin Scale',
        summary: 'Linking temperature to kinetic energy, absolute zero, and the Kelvin scale.',
        bullets: [
          'Temperature is a measure of the average **kinetic energy** of the particles in a substance.',
          '**Absolute zero** (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure.',
          '**Converting between Celsius and Kelvin:** T (K) = θ (°C) + 273. For example, 27 °C = 300 K; 100 °C = 373 K.',
          'Note that a temperature CHANGE of 1 °C equals a change of 1 K (ΔT in K = Δθ in °C).',
        ],
        commonMistake: 'In gas-law calculations linking pressure or volume to temperature, NEVER use Celsius — always convert to Kelvin (+273) first!',
      },
      {
        id: 'igcse-phys-2-1-c3',
        title: 'Gas Pressure & Boyle’s Law (p₁V₁ = p₂V₂)',
        summary: 'Explaining gas pressure via collisions and solving Boyle’s Law problems.',
        bullets: [
          'Gas pressure arises from millions of gas particles colliding with the container walls every second. Each collision changes a particle’s momentum, exerting a force on the wall (**p = F ÷ A**).',
          'Heating a fixed mass of gas at constant volume increases average particle **kinetic energy** and speed → particles hit the walls MORE FREQUENTLY and HARDER (greater momentum change per collision) → pressure increases.',
          'Boyle’s Law (constant temperature & fixed mass): Pressure is inversely proportional to volume: p × V = constant, so **p₁V₁ = p₂V₂**.',
          'Halving the volume packs the same particles into half the space, doubling the number of collisions per second per unit wall area, so pressure doubles.',
          '**Worked example:** 400 cm³ of gas at 100 kPa is compressed isothermally to 160 cm³. New pressure p₂ = (100 × 400) ÷ 160 = 250 kPa.',
        ],
        glossaryPills: [
          {
            term: 'Boyle’s Law',
            definition: 'For a fixed mass of gas at constant temperature, pressure and volume are inversely proportional (p₁V₁ = p₂V₂).',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Absolute zero', definition: '0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy.' },
      { term: 'Brownian motion', definition: 'Random zig-zag motion of visible specks suspended in a fluid due to collisions with invisible fluid molecules.' },
      { term: 'Boyle’s Law', definition: 'p₁V₁ = p₂V₂ for a fixed mass of gas held at constant temperature.' },
    ],
    checklistPoints: [
      'Describe particle arrangement, motion, and forces in solids, liquids, and gases.',
      'Explain Brownian motion as evidence for the kinetic particle model.',
      'Convert between °C and Kelvin and apply p₁V₁ = p₂V₂ to solve gas compression problems.',
    ],
  },
  'igcse-phys-2-2': {
    subtopicId: 'igcse-phys-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Specific Heat Capacity, Latent Heat & Thermal Transfer',
    readingMinutes: 11,
    videoTitle: 'GCSE Physics - Conduction, Convection & Radiation | How Heat Energy is Transferred',
    youtubeId: 'rUnABMRPzvg',
    videoChannel: 'Cognito',
    videoDuration: '4:30',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Heat Transfer', cardId: 'igcse-phys-2-2-c1' },
      { time: '0:24', seconds: 24, label: 'Conduction Explained', cardId: 'igcse-phys-2-2-c3' },
      { time: '2:10', seconds: 130, label: 'Convection Currents Explained', cardId: 'igcse-phys-2-2-c3' },
      { time: '3:17', seconds: 197, label: 'Radiation Explained', cardId: 'igcse-phys-2-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-2-2-c1',
        title: 'Specific Heat Capacity & Latent Heat',
        summary: 'Using ΔE = mcΔT, latent heat plateaus, and evaporative cooling.',
        bullets: [
          'Internal energy is the sum of the random kinetic energies AND intermolecular potential energies of all particles in a body.',
          'Specific heat capacity (c) is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K): **ΔE = m × c × ΔT** (units of c: J/(kg °C)). Water has a very high c ≈ 4,200 J/(kg °C).',
          'During a change of state (melting or boiling), temperature remains CONSTANT on a heating curve even though energy is still supplied — this latent heat increases particles’ potential energy by weakening/breaking intermolecular bonds rather than increasing **kinetic energy**.',
          '**Evaporation differs from boiling:** it occurs at ANY temperature below the boiling point and ONLY at the liquid’s surface. Because the fastest, highest-energy molecules escape, the average kinetic energy of the remaining liquid drops — causing evaporative cooling.',
        ],
        glossaryPills: [
          {
            term: 'specific heat capacity',
            definition: 'Thermal energy needed per unit mass per unit temperature rise: c = ΔE ÷ (m × ΔT).',
          },
          {
            term: 'latent heat',
            definition: 'Hidden thermal energy absorbed or released during a change of state at constant temperature to break or form intermolecular bonds.',
          },
        ],
        commonMistake: 'On a flat plateau of a heating curve, NEVER say "no energy is being absorbed" — energy IS absorbed to break intermolecular bonds (potential energy rises while kinetic energy/temperature stays flat).',
      },
      {
        id: 'igcse-phys-2-2-c2',
        title: 'Thermal Expansion & Real-World Applications',
        summary: 'Why solids, liquids, and gases expand when heated and practical applications.',
        bullets: [
          'When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least.',
          '**Practical consequences:** Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter.',
          '**Applications:** Liquid-in-glass thermometers expand mercury/alcohol up a narrow capillary; bimetallic strips bend on heating (brass expands more than iron) to switch thermostats.',
        ],
      },
      {
        id: 'igcse-phys-2-2-c3',
        title: 'Conduction, Convection & Infrared Radiation',
        summary: 'How conduction, convection currents, and infrared radiation transfer heat.',
        bullets: [
          '**Conduction (mainly in solids):** Vibrating particles pass kinetic energy along a lattice. Metals are exceptional thermal conductors because DELOCALISED FREE ELECTRONS diffuse rapidly through the lattice and collide with distant metal ions.',
          '**Convection (fluids — liquids & gases ONLY):** Heated fluid expands, becomes LESS DENSE, and rises while cooler, denser fluid sinks to replace it, forming a convection current.',
          '**Infrared (IR) radiation:** Electromagnetic waves that require NO medium and can travel through the vacuum of space. Matt black surfaces are the BEST emitters and BEST absorbers of IR; shiny silver surfaces are the WORST emitters/absorbers and BEST reflectors.',
          '**Vacuum flask design:** Vacuum wall prevents conduction & convection; silvered glass reflects IR radiation; plastic cap/stopper reduces conduction and evaporation.',
        ],
        glossaryPills: [
          {
            term: 'convection current',
            definition: 'Circular flow in a liquid or gas driven by hotter, less dense fluid rising and cooler, denser fluid sinking.',
          },
        ],
        memoryAid: 'Metals conduct via Free Electrons; Fluids convect via Density differences; Vacuum transfers ONLY by Radiation!',
      },
    ],
    keyTerms: [
      { term: 'Internal energy', definition: 'Total random kinetic and potential energy of all particles inside a system.' },
      { term: 'Specific heat capacity', definition: 'Energy required to raise 1 kg of a substance by 1 °C: ΔE = mcΔT.' },
      { term: 'Evaporation', definition: 'Escape of the most energetic molecules from a liquid surface below boiling point, cooling the remaining liquid.' },
      { term: 'Thermal conduction', definition: 'Transfer of thermal energy through a solid by lattice vibrations and (in metals) free electron diffusion.' },
    ],
    checklistPoints: [
      'Use ΔE = mcΔT and explain why temperature remains constant during melting and boiling.',
      'Explain why evaporation cools a liquid and list factors increasing its rate (temperature, surface area, draught).',
      'Compare conduction (including free electrons in metals), convection (density changes), and IR radiation (surface colour/texture).',
    ],
  },
  'igcse-phys-3-1': {
    subtopicId: 'igcse-phys-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'General Wave Properties, Reflection, Refraction & Diffraction',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Longitudinal & Transverse Waves - Labelling & Calculating Wave Speed',
    youtubeId: '1DFAy8MXkMA',
    videoChannel: 'Cognito',
    videoDuration: '6:40',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Waves', cardId: 'igcse-phys-3-1-c1' },
      { time: '2:02', seconds: 122, label: 'Labelling a Wave (Displacement-Time Graph)', cardId: 'igcse-phys-3-1-c1' },
      { time: '3:42', seconds: 222, label: 'The Wave Speed Equation', cardId: 'igcse-phys-3-1-c2' },
      { time: '4:42', seconds: 282, label: 'Transverse vs Longitudinal Waves', cardId: 'igcse-phys-3-1-c1' },
    ],
    cards: [
      {
        id: 'igcse-phys-3-1-c1',
        title: 'Transverse vs Longitudinal Waves & Wave Parameters',
        summary: 'Comparing transverse and longitudinal waves, amplitude, frequency, and wavelength.',
        diagram: 'transverse-wave',
        bullets: [
          'Waves transfer ENERGY and information without transferring matter from place to place.',
          '**Transverse waves:** Vibrations are perpendicular (90°) to the direction of wave travel (examples: all electromagnetic waves, water surface waves, seismic S-waves).',
          '**Longitudinal waves:** Vibrations are parallel to wave travel, forming alternating high-pressure compressions and low-pressure rarefactions (examples: sound waves, ultrasound, seismic P-waves).',
          '**Key terms:** Amplitude (A) = maximum displacement from rest; Wavelength (λ) = distance between adjacent crests; Frequency (f) = waves per second (Hz); Period **T = 1 ÷ f** (s).',
        ],
        glossaryPills: [
          {
            term: 'wavelength',
            definition: 'Distance from one point on a wave to the exact corresponding point on the next adjacent wave (e.g., crest to crest), measured in metres.',
          },
          {
            term: 'compressions',
            definition: 'Regions in a longitudinal wave where particles are pushed closer together, producing higher pressure.',
          },
        ],
        memoryAid: 'Transverse has a T (perpendicular 90° crossbar); Longitudinal is aLong the same line (parallel).',
      },
      {
        id: 'igcse-phys-3-1-c2',
        title: 'The Wave Equation (v = fλ)',
        summary: 'Applying the wave speed equation v = fλ and time period T = 1/f.',
        bullets: [
          'Wave speed (m/s) = frequency (Hz) × wavelength (m): **v = f × λ**.',
          '**Also link period and frequency:** **T = 1 ÷ f**, so a wave of frequency 50 Hz has a time period T = 0.02 s.',
          '**Worked example:** A radio wave travels at 3.0 × 10⁸ m/s with frequency 100 MHz (1.0 × 10⁸ Hz). Wavelength λ = v ÷ f = (3.0 × 10⁸) ÷ (1.0 × 10⁸) = 3.0 m.',
          'When a wave crosses into a new medium, its FREQUENCY stays unchanged — only its wave speed and wavelength change proportionally.',
        ],
        commonMistake: 'Remember to convert kHz (×10³), MHz (×10⁶), and cm (÷100) into Hz and metres before calculating v = fλ!',
      },
      {
        id: 'igcse-phys-3-1-c3',
        title: 'Reflection, Refraction & Diffraction in a Ripple Tank',
        summary: 'Wavefront diagrams for reflection, refraction, and diffraction through gaps.',
        bullets: [
          '**Reflection:** Wavefronts bounce off a barrier with angle of incidence = angle of reflection (i = r); speed, frequency, and wavelength stay unchanged.',
          '**Refraction:** Water waves moving from deep to shallow water SLOW DOWN, their wavelength DECREASES, and if they hit the boundary at an angle they bend TOWARD the normal (frequency stays constant).',
          'Diffraction: Spreading of waves as they pass through a gap or around an obstacle. Diffraction is MAXIMUM when the gap width is roughly equal to the wavelength (gap ≈ λ).',
          'Longer-wavelength waves (like radio waves) diffract more around hills than shorter-wavelength microwaves.',
        ],
        glossaryPills: [
          {
            term: 'diffraction',
            definition: 'The spreading out of wavefronts after passing through a narrow gap or past the edge of an obstacle.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Transverse wave', definition: 'Wave whose oscillations are perpendicular to the direction of energy transfer.' },
      { term: 'Longitudinal wave', definition: 'Wave whose oscillations are parallel to the direction of energy transfer (compressions & rarefactions).' },
      { term: 'Frequency', definition: 'Number of complete oscillations passing a point per second (Hz).' },
      { term: 'Diffraction', definition: 'Spreading of waves around edges or through apertures, strongest when aperture width ≈ wavelength.' },
    ],
    checklistPoints: [
      'Compare transverse and longitudinal waves with examples of each.',
      'Calculate wave speed, frequency, wavelength, and period using v = fλ and T = 1/f.',
      'Draw wavefront diagrams for reflection, refraction (deep → shallow), and diffraction through narrow vs wide gaps.',
    ],
  },
  'igcse-phys-3-2': {
    subtopicId: 'igcse-phys-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Light, Lenses, Total Internal Reflection & EM Spectrum',
    readingMinutes: 11,
    videoTitle: 'GCSE Physics - How Lenses Work - Convex & Concave Lenses | Real & Virtual Images',
    youtubeId: '0O3NdG0uWM4',
    videoChannel: 'Cognito',
    videoDuration: '6:36',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Lenses and Refraction', cardId: 'igcse-phys-3-2-c1' },
      { time: '1:01', seconds: 61, label: 'Concave (Diverging) Lenses Explained', cardId: 'igcse-phys-3-2-c2' },
      { time: '2:22', seconds: 142, label: 'Lens Axis, Focal Length and Lens Power', cardId: 'igcse-phys-3-2-c2' },
      { time: '5:29', seconds: 329, label: 'How to Describe Images', cardId: 'igcse-phys-3-2-c2' },
    ],
    cards: [
      {
        id: 'igcse-phys-3-2-c1',
        title: 'Reflection, Snell’s Law & Total Internal Reflection',
        summary: 'Plane mirrors, Snell’s Law, critical angle, and optical fibre TIR.',
        bullets: [
          'Plane mirrors form an image that is virtual, upright, same size as the object, laterally inverted, and the same distance behind the mirror as the object is in front.',
          'Refractive index n = speed of light in vacuum ÷ speed in medium = sin i ÷ sin r (where i is angle in air and r is angle in glass/water). Light slows and bends TOWARD the normal entering denser glass, and AWAY leaving into air.',
          'Total Internal Reflection (TIR) occurs ONLY when two conditions are met: (1) Light travels from a denser to a less dense medium (e.g., glass → air), AND (2) Angle of incidence exceeds the critical angle c (i > c).',
          'Critical angle equation: **sin c = 1 ÷ n**. For glass with n = 1.5, sin c = 1/1.5 = 0.667, giving c ≈ 41.8°.',
          '**Applications of TIR:** High-speed optical fibre communications (broadband) and medical endoscopes (keyhole surgery).',
        ],
        glossaryPills: [
          {
            term: 'critical angle',
            definition: 'The angle of incidence inside a denser medium for which the refracted ray emerges exactly along the boundary (r = 90°).',
          },
          {
            term: 'refractive index',
            definition: 'Ratio of the speed of light in a vacuum to its speed in a material: n = c / v = sin i / sin r.',
          },
        ],
        commonMistake: 'Angles of incidence i and refraction r are ALWAYS measured from the NORMAL (the 90° dotted line), NEVER from the glass surface!',
      },
      {
        id: 'igcse-phys-3-2-c2',
        title: 'Thin Converging & Diverging Lenses',
        summary: 'Ray diagrams for converging lenses, real vs virtual images, and eye defects.',
        bullets: [
          'A thin converging (convex) lens bends **parallel** rays to meet at the principal focus F; focal length f is the distance from the optical centre to F.',
          '**Ray diagram rules for a converging lens:** (1) Ray parallel to principal axis refracts through F; (2) Ray through optical centre continues straight undeviated.',
          'Object beyond 2F → real, inverted, diminished image (camera/eye). Object between F and 2F → real, inverted, magnified image (projector). Object closer than F → VIRTUAL, upright, magnified image (magnifying glass).',
          '**Eye defects:** Short-sightedness (myopia, focuses in front of retina) is corrected with a diverging (concave) lens; long-sightedness (hyperopia, focuses behind retina) is corrected with a converging (convex) lens.',
        ],
        glossaryPills: [
          {
            term: 'virtual',
            definition: 'An optical image where light rays only appear to diverge from a point behind a mirror or lens and cannot be projected onto a screen.',
          },
        ],
      },
      {
        id: 'igcse-phys-3-2-c3',
        title: 'Dispersion & The Electromagnetic Spectrum',
        summary: 'Prism dispersion plus properties, uses, and hazards of the EM spectrum.',
        bullets: [
          '**Dispersion:** A glass prism splits white light into ROYGBIV because violet light slows down slightly more (higher n) than red light and refracts through a larger angle.',
          'All EM waves are transverse and travel through a vacuum at c = 3.0 × 10⁸ m/s. Order of INCREASING frequency (decreasing wavelength): Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma rays.',
          '**Uses:** Radio (broadcasting, RFID), Microwaves (satellites, mobile phones, cooking), Infrared (thermal imaging, optical fibres, remotes), UV (security ink, sterilising water), X-rays (medical bone imaging, baggage scanners), Gamma (sterilising surgical kit, cancer radiotherapy).',
          '**Hazards:** Microwaves cause internal heating of body tissue; IR causes surface skin burns; UV damages skin cells/eyes (skin cancer/cataracts); X-rays and gamma rays are ionising and cause DNA mutations/cancer.',
        ],
        memoryAid: 'Remember EM order (long λ → short λ): Rich Men In Vegas Use X-ray Glasses (Radio, Micro, IR, Visible, UV, X-ray, Gamma).',
      },
    ],
    keyTerms: [
      { term: 'Snell’s Law', definition: 'n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index.' },
      { term: 'Total internal reflection', definition: 'Complete reflection of light inside a denser medium when angle of incidence exceeds critical angle c.' },
      { term: 'Focal length', definition: 'Distance from the optical centre of a thin lens to its principal focus F.' },
      { term: 'Ionising radiation', definition: 'High-energy radiation (UV, X-rays, gamma) capable of knocking electrons off atoms and damaging DNA.' },
    ],
    checklistPoints: [
      'Apply n = sin i / sin r and sin c = 1 / n, and state the two conditions required for Total Internal Reflection.',
      'Construct converging lens ray diagrams and distinguish real vs virtual images (including magnifying glass and eye correction).',
      'Recall the full EM spectrum in order of wavelength/frequency along with uses and biological hazards.',
    ],
  },
  'igcse-phys-3-3': {
    subtopicId: 'igcse-phys-3-3',
    subtopicCode: '3.3',
    subtopicTitle: 'Sound Waves, Echoes & Ultrasound',
    readingMinutes: 8,
    videoTitle: 'GCSE Physics - Sound Waves and Hearing',
    youtubeId: 's9wZkP64rAc',
    videoChannel: 'Cognito',
    videoDuration: '5:08',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-phys-3-3-c1' },
      { time: '0:51', seconds: 51, label: 'How Sound Travels Through Solids', cardId: 'igcse-phys-3-3-c1' },
      { time: '2:38', seconds: 158, label: 'Refraction, Reflection & Absorption', cardId: 'igcse-phys-3-3-c1' },
      { time: '4:21', seconds: 261, label: 'Human Hearing Range', cardId: 'igcse-phys-3-3-c2' },
    ],
    cards: [
      {
        id: 'igcse-phys-3-3-c1',
        title: 'Production, Transmission & Speed of Sound',
        summary: 'How sound travels through media and calculating echo or sonar distances.',
        bullets: [
          'Sound is produced by vibrating sources and travels as a LONGITUDINAL wave of compressions and rarefactions. Sound CANNOT travel through a vacuum (demonstrated by the bell-in-a-vacuum-jar experiment).',
          'Speed of sound depends on how closely packed particles are: fastest in solids (~5,000 m/s in steel), moderate in liquids (~1,500 m/s in water), slowest in gases (~330–340 m/s in air at room temperature).',
          '**Measuring speed of sound via echoes:** Clap in front of a wall at distance d and time the echo t; the sound travels THERE AND BACK (total distance = 2d), so **v = 2d ÷ t**.',
          '**Worked example:** A ship’s sonar pulse returns from the seabed after 0.80 s (speed in water = 1,500 m/s). Depth d = (v × t) ÷ 2 = (1500 × 0.80) ÷ 2 = 600 m.',
        ],
        commonMistake: 'In echo and sonar calculations, forgetting to DIVIDE BY 2 (or multiply distance by 2) is the #1 error — remember the pulse goes out AND bounces back!',
      },
      {
        id: 'igcse-phys-3-3-c2',
        title: 'Pitch, Loudness & Ultrasound Applications',
        summary: 'Connecting pitch to frequency, loudness to amplitude, and ultrasound uses.',
        bullets: [
          'Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz).',
          'Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace).',
          'Ultrasound is sound with a frequency GREATER than 20 kHz (above human hearing).',
          'Uses of ultrasound: Prenatal medical scanning (safe non-ionising reflection at tissue boundaries), industrial non-destructive testing (detecting cracks inside metal pipes/castings), and sonar depth mapping.',
        ],
        glossaryPills: [
          {
            term: 'ultrasound',
            definition: 'Longitudinal sound waves with frequencies above the upper limit of human hearing (> 20,000 Hz).',
          },
          {
            term: 'oscilloscope',
            definition: 'Laboratory instrument that displays electrical voltage signals (such as sound waveforms from a microphone) against time.',
          },
        ],
        memoryAid: 'Frequency = Pitch (more waves squeezed on screen); Amplitude = Loudness (taller wave peaks).',
      },
    ],
    keyTerms: [
      { term: 'Audible range', definition: 'Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz.' },
      { term: 'Ultrasound', definition: 'Sound waves with frequency exceeding 20 kHz, used in medical imaging and flaw detection.' },
      { term: 'Echo', definition: 'Reflected sound wave heard after bouncing off a hard flat surface.' },
    ],
    checklistPoints: [
      'Explain why sound cannot travel in a vacuum and why it travels fastest in solids.',
      'Calculate echo and sonar distances accurately using 2d = v × t.',
      'Link pitch to frequency, loudness to amplitude, and explain medical/industrial uses of ultrasound.',
    ],
  },
  'igcse-phys-4-1': {
    subtopicId: 'igcse-phys-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Electric Charge, Current, EMF, Potential Difference & Resistance',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Voltage, Current & Resistance | V = IR Equation | IV Graphs',
    youtubeId: 'BbizKa6eywo',
    videoChannel: 'Cognito',
    videoDuration: '4:35',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to V=IR (Ohm\'s Law)', cardId: 'igcse-phys-4-1-c1' },
      { time: '0:45', seconds: 45, label: 'Calculating Resistance by Rearranging V=IR', cardId: 'igcse-phys-4-1-c2' },
      { time: '2:05', seconds: 125, label: 'How Resistance Value Affects the I-V Graph', cardId: 'igcse-phys-4-1-c2' },
      { time: '3:04', seconds: 184, label: 'I-V Graphs for Filament Lamps and Diodes', cardId: 'igcse-phys-4-1-c2' },
    ],
    cards: [
      {
        id: 'igcse-phys-4-1-c1',
        title: 'Electrostatics, Current & Charge (Q = It)',
        summary: 'Electrostatic charging by electron transfer, electric fields, and Q = It.',
        bullets: [
          'Charging insulators by friction transfers NEGATIVELY CHARGED ELECTRONS only (protons never move in solids). Gaining electrons makes an object negative; losing electrons leaves it positive. Like charges repel; opposite charges attract.',
          'An electric field is a region where an electric charge experiences a force; field lines always point away from positive charges and toward negative charges.',
          'Electric current (I, amperes A) is the rate of flow of electric charge: I = Q ÷ t (or **Q = I × t**, with charge Q in coulombs, C).',
          'In metallic conductors, current is a flow of delocalised electrons from negative to positive, whereas CONVENTIONAL CURRENT is drawn from positive (+) to negative (−).',
        ],
        glossaryPills: [
          {
            term: 'conventional current',
            definition: 'Standard circuit convention showing current flowing from the positive terminal to the negative terminal of a cell, opposite to electron flow.',
          },
        ],
        commonMistake: 'Never say "positive charges moved onto the cloth" during static charging — ONLY electrons transfer between rubbed insulators!',
      },
      {
        id: 'igcse-phys-4-1-c2',
        title: 'EMF, Potential Difference & Ohm’s Law (V = IR)',
        summary: 'EMF vs potential difference, Ohm’s Law, wire resistance, and I-V graphs.',
        bullets: [
          'Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C).',
          'Potential difference (p.d., V) is the work done by unit charge passing through a component: V = W ÷ Q. Voltmeters are connected in **PARALLEL**; ammeters in SERIES.',
          'Resistance R = V ÷ I (unit: ohm, Ω). For a uniform metal wire at constant temperature, R is directly proportional to length L and inversely proportional to cross-sectional area A (doubling diameter quadruples area, so R drops to ¼!).',
          '**I–V graphs:** Ohmic resistor at constant temperature gives a straight line through the origin (I ∝ V). Filament lamp curves flatter at higher V because heating causes metal lattice ions to vibrate more, increasing collisions and resistance. Diode conducts only in the forward direction above ~0.6 V.',
        ],
        glossaryPills: [
          {
            term: 'electromotive force',
            definition: 'Total energy supplied by a power source per coulomb of charge driven around a complete circuit (measured in volts).',
          },
        ],
        memoryAid: 'Longer wire = more obstacles (higher R); Thicker wire = wider motorway (lower R).',
      },
      {
        id: 'igcse-phys-4-1-c3',
        title: 'Electrical Power & Kilowatt-Hours',
        summary: 'Calculating electrical power, energy in joules, and kilowatt-hour bills.',
        bullets: [
          '**Electrical power:** **P = I × V = I²R = V² ÷ R** (watts, W).',
          '**Electrical energy transferred:** E = P × t = I × V × t (joules, J).',
          'Domestic electricity bills measure energy in kilowatt-hours (kWh): 1 kWh = 1,000 W × 3,600 s = 3.6 MJ. Cost = Power (kW) × Time (h) × Price per kWh.',
          '**Worked example:** A 2.4 kW kettle runs for 10 minutes (1/6 h). Energy = 2.4 × (1/6) = 0.40 kWh. At 30p/kWh, cost = 0.40 × 30p = 12p.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Electric current', definition: 'Rate of flow of charge: I = Q ÷ t, measured in amperes (A).' },
      { term: 'Potential difference', definition: 'Energy transferred per coulomb of charge across a component: V = W ÷ Q (V).' },
      { term: 'Ohm’s Law', definition: 'Current through a metallic conductor is directly proportional to p.d. at constant temperature (V = IR).' },
      { term: 'Kilowatt-hour (kWh)', definition: 'Unit of electrical energy equal to a 1 kW appliance operating for 1 hour (3.6 × 10⁶ J).' },
    ],
    checklistPoints: [
      'Apply Q = It, V = W/Q, V = IR, P = IV, and E = IVt with correct SI and kWh units.',
      'Sketch and explain I–V graphs for an ohmic resistor, filament lamp, and diode.',
      'Predict how changing wire length or diameter alters electrical resistance.',
    ],
  },
  'igcse-phys-4-2': {
    subtopicId: 'igcse-phys-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Series & Parallel Circuits, Potential Dividers & Mains Safety',
    readingMinutes: 11,
    videoTitle: 'GCSE Physics - Series Circuits',
    youtubeId: 'Hk4JEB5DITw',
    videoChannel: 'Cognito',
    videoDuration: '6:32',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction', cardId: 'igcse-phys-4-2-c1' },
      { time: '1:08', seconds: 68, label: 'Potential Difference (Voltage) in Series', cardId: 'igcse-phys-4-2-c1' },
      { time: '2:48', seconds: 168, label: 'Resistance in Series', cardId: 'igcse-phys-4-2-c1' },
      { time: '5:31', seconds: 331, label: 'Voltage & Resistance Relationship', cardId: 'igcse-phys-4-2-c2' },
    ],
    cards: [
      {
        id: 'igcse-phys-4-2-c1',
        title: 'Series vs Parallel Circuits',
        summary: 'Current, voltage, and combined resistance rules in series and parallel.',
        diagram: 'circuit-series-parallel',
        bullets: [
          '**Series circuits:** Current is identical at every point (I = I₁ = I₂). Supply p.d. is shared across components (V_total = V₁ + V₂). Combined resistance adds up: R_total = R₁ + R₂.',
          '**Parallel circuits:** Potential difference is identical across every branch (V = V₁ = V₂). Current from the source equals the sum of branch currents (I_total = I₁ + I₂).',
          'Combined resistance of two resistors in parallel: **1/R_total = 1/R₁ + 1/R₂** (or R_total = (R₁R₂)/(R₁+R₂)). R_total is ALWAYS smaller than the smallest individual branch resistor!',
          '**Why lamps are wired in parallel in homes:** Every lamp receives full mains voltage (full brightness), each can be switched independently, and if one fails the others stay lit.',
        ],
        memoryAid: 'Series = Same current, Shared voltage; Parallel = Same voltage, Split current, Lower total R.',
      },
      {
        id: 'igcse-phys-4-2-c2',
        title: 'Sensing Components & Potential Dividers',
        summary: 'How NTC thermistors, LDRs, and potential dividers control automatic circuits.',
        bullets: [
          'NTC Thermistor: As temperature **increases**, its resistance **decreases** (used in fire alarms and incubators).',
          '**Light-Dependent Resistor (LDR):** As light intensity INCREASES, its resistance DECREASES (bright light → low R; darkness → high R; used in automatic street lamps).',
          'Potential divider: Two resistors R₁ and R₂ in series divide the supply voltage in the exact ratio of their resistances: **V₁ ÷ V₂ = R₁ ÷ R₂** (or V_out = V_in × R₂ / (R₁ + R₂)).',
          '**In an automatic night light:** Put the LDR at the bottom (output) of the divider. At night, R_LDR rises sharply → it takes a larger share of V_in → V_out rises above threshold and switches the lamp ON.',
        ],
        glossaryPills: [
          {
            term: 'potential divider',
            definition: 'Two resistors connected in series across a supply to split the potential difference into a desired fraction: V₁/V₂ = R₁/R₂.',
          },
          {
            term: 'thermistor',
            definition: 'Temperature-dependent semiconductor resistor whose resistance drops markedly as temperature rises (NTC type).',
          },
        ],
      },
      {
        id: 'igcse-phys-4-2-c3',
        title: 'Electrical Hazards & Mains Safety',
        summary: 'Mains wiring colours, fuses, circuit breakers, earthing, and double insulation.',
        bullets: [
          '**Mains wiring:** Live wire (brown, ~230 V AC), Neutral wire (blue, ~0 V, completes circuit), Earth wire (green/yellow, safety path to ground). Switches and fuses MUST ALWAYS be placed in the LIVE wire!',
          '**Fuse:** Contains a thin wire that melts and breaks the circuit if current exceeds its rating (pick the fuse rating just ABOVE normal operating current, e.g., 5 A fuse for a 4.2 A appliance).',
          '**Circuit breakers (trip switches / MCBs):** Use an electromagnet to trip open faster than a fuse and can be reset easily without replacement.',
          '**Earthing protects metal-cased appliances:** if a loose live wire touches the metal casing, a huge fault current surges safely down the low-resistance earth wire, instantly melting the fuse or tripping the breaker. Double-insulated appliances have non-conducting plastic casings and need NO earth wire.',
        ],
        commonMistake: 'Never put a switch or fuse in the neutral wire — even when open, the appliance would remain connected to the live 230 V supply and deliver a lethal shock!',
      },
    ],
    keyTerms: [
      { term: 'Parallel circuit', definition: 'Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced.' },
      { term: 'LDR', definition: 'Light-Dependent Resistor whose resistance falls when light intensity increases.' },
      { term: 'Fuse', definition: 'Safety device in the live wire that melts to disconnect the circuit when current exceeds a safe rating.' },
      { term: 'Double insulation', definition: 'Design enclosing live electrical parts in two layers of plastic/insulator so no earth wire is required.' },
    ],
    checklistPoints: [
      'Calculate combined resistance in series (R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂).',
      'Use V₁/V₂ = R₁/R₂ to explain thermistor and LDR potential-divider sensing circuits.',
      'Explain how fuses, trip switches, earthing, and double insulation prevent electrocution and fire.',
    ],
  },
  'igcse-phys-4-3': {
    subtopicId: 'igcse-phys-4-3',
    subtopicCode: '4.3',
    subtopicTitle: 'Magnetism, Motor Effect, EM Induction & Transformers',
    readingMinutes: 12,
    videoTitle: 'GCSE Physics - How Transformers Work',
    youtubeId: '7RtBUEZbKmI',
    videoChannel: 'Cognito',
    videoDuration: '4:19',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro & Role in National Grid', cardId: 'igcse-phys-4-3-c3' },
      { time: '1:07', seconds: 67, label: 'Transformer Structure', cardId: 'igcse-phys-4-3-c3' },
      { time: '1:24', seconds: 84, label: 'How Transformers Work (Step-by-Step)', cardId: 'igcse-phys-4-3-c2' },
      { time: '3:21', seconds: 201, label: 'Changing the Voltage (Step-up vs Step-down)', cardId: 'igcse-phys-4-3-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-4-3-c1',
        title: 'Magnetic Fields, Electromagnets & The Motor Effect',
        summary: 'Magnetic fields, electromagnets, Fleming’s Left-Hand Rule, and DC motors.',
        bullets: [
          'Magnetic field lines run from NORTH to SOUTH outside a magnet; closer spacing indicates a stronger field. Soft iron is easily magnetised and demagnetised (ideal for electromagnets and transformer cores); steel retains magnetism (permanent magnets).',
          'A current-carrying wire creates concentric circular magnetic field lines (Right-Hand Grip Rule). Coiling the wire into a solenoid with a soft-iron core builds a strong controllable electromagnet.',
          '**The Motor Effect:** A current-carrying conductor placed at right angles to a magnetic field experiences a force. Direction is found by Fleming’s LEFT-Hand Rule: ThuMb = Motion/Force, First finger = Field (N→S), SeCond finger = Conventional current (+→−).',
          '**DC Electric Motor:** Opposite sides of a rectangular coil carry current in opposite directions, producing an upward force on one side and downward force on the other (turning couple). The SPLIT-RING COMMUTATOR reverses current direction in the coil every half-turn so it keeps spinning continuously in one direction.',
        ],
        glossaryPills: [
          {
            term: 'split-ring commutator',
            definition: 'Rotating electrical switch in a DC motor that reverses the current through the coil every half-rotation to maintain continuous rotation in one direction.',
          },
        ],
        memoryAid: 'Use your LEFT hand for Motors (power IN → Motion OUT) and note that reversing EITHER current OR field reverses the force (reversing both leaves direction unchanged).',
      },
      {
        id: 'igcse-phys-4-3-c2',
        title: 'Electromagnetic Induction & AC Generators',
        summary: 'Inducing voltage by cutting field lines, Lenz’s Law, and AC generators.',
        bullets: [
          'Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends.',
          'Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil.',
          '**Lenz’s Law (conservation of energy):** The direction of an induced current always OPPOSES the change producing it (e.g., pushing a North pole into a coil induces a North pole at that end to repel it).',
          '**AC Generator (alternator):** A coil rotates in a magnetic field and connects to the external circuit via SLIP RINGS and carbon brushes (NOT a split ring), producing an alternating sine-wave voltage whose peak occurs when the coil is horizontal (cutting field lines fastest).',
        ],
        glossaryPills: [
          {
            term: 'electromagnetic induction',
            definition: 'Production of an electromotive force (voltage) across a conductor when it cuts magnetic field lines or experiences a changing magnetic field.',
          },
        ],
      },
      {
        id: 'igcse-phys-4-3-c3',
        title: 'Transformers & High-Voltage Power Transmission',
        summary: 'Transformer turns ratios and why high-voltage cables cut I²R losses.',
        bullets: [
          'A transformer consists of primary and secondary coils wound on a laminated soft-iron core. Alternating current in the primary produces a continuously changing magnetic field in the iron core, inducing an alternating e.m.f. in the secondary coil (transformers ONLY work with AC!).',
          '**Transformer turns ratio equation:** **Vp ÷ Vs = Np ÷ Ns**. Step-up transformers have Ns > Np (increase V); step-down transformers have Ns < Np (decrease V).',
          '**For an ideal (100% efficient) transformer:** Input power = Output power → **Vp × Ip = Vs × Is**.',
          '**National Grid efficiency:** Step-up transformers boost transmission voltage to ~400 kV so current I becomes very small (for the same power P = VI). Since cable heating loss is **P_loss = I²R**, lowering current drastically reduces wasted thermal energy in long cables!',
        ],
        commonMistake: 'Never say "high voltage reduces resistance of the cables" — high voltage reduces CURRENT I, which slashes power loss via P = I²R!',
      },
    ],
    keyTerms: [
      { term: 'Motor effect', definition: 'Force experienced by a current-carrying wire placed across a magnetic field.' },
      { term: 'Lenz’s Law', definition: 'An induced current always flows in a direction that opposes the magnetic change causing it.' },
      { term: 'Step-up transformer', definition: 'Transformer with more turns on the secondary coil than primary coil, increasing alternating voltage while decreasing current.' },
    ],
    checklistPoints: [
      'Apply Fleming’s Left-Hand Rule and explain the role of the split-ring commutator in a DC motor.',
      'Distinguish slip rings (AC generator) from split-ring commutators (DC motor) and explain Lenz’s Law.',
      'Solve transformer problems using Vp/Vs = Np/Ns and VpIp = VsIs, and justify high-voltage transmission using P_loss = I²R.',
    ],
  },
  'igcse-phys-5-1': {
    subtopicId: 'igcse-phys-5-1',
    subtopicCode: '5.1',
    subtopicTitle: 'The Nuclear Model of the Atom, Isotopes, Fission & Fusion',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Nuclear Fission - How it Works | Nuclear Reactors | Pros & Cons',
    youtubeId: 'JQEZaJX7NVQ',
    videoChannel: 'Cognito',
    videoDuration: '4:14',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Nuclear Fission', cardId: 'igcse-phys-5-1-c3' },
      { time: '0:27', seconds: 27, label: 'Types of Nuclear Fission', cardId: 'igcse-phys-5-1-c3' },
      { time: '2:19', seconds: 139, label: 'Controlling Fission in Nuclear Reactors', cardId: 'igcse-phys-5-1-c3' },
      { time: '2:52', seconds: 172, label: 'Pros and Cons of Nuclear Energy', cardId: 'igcse-phys-5-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-5-1-c1',
        title: 'Rutherford Scattering & Subatomic Particles',
        summary: 'Rutherford’s gold foil findings and properties of protons, neutrons, and electrons.',
        diagram: 'atomic-structure',
        bullets: [
          'Geiger–Marsden–Rutherford alpha scattering experiment fired positive alpha particles at ultra-thin gold foil in a vacuum:',
          '**Observation 1:** Most alpha particles passed straight through undeflected → Conclusion: The atom is mostly EMPTY SPACE.',
          '**Observation 2:** A tiny fraction deflected through large angles (>90°, some bouncing straight back) → Conclusion: Nearly all mass and ALL POSITIVE CHARGE are concentrated in a tiny, dense central NUCLEUS.',
          '**Subatomic particles:** Proton (mass 1, charge +1, in nucleus); Neutron (mass 1, charge 0, in nucleus); Electron (negligible mass ~1/1840, charge −1, orbiting nucleus).',
        ],
        glossaryPills: [
          {
            term: 'nucleus',
            definition: 'The extremely tiny, dense, positively charged core at the centre of an atom containing protons and neutrons.',
          },
        ],
        memoryAid: 'Link the 3 Rutherford clues: Straight through = Empty space; Deflected = Positive core; Bounced back = Dense heavy nucleus.',
      },
      {
        id: 'igcse-phys-5-1-c2',
        title: 'Nuclide Notation & Isotopes',
        summary: 'Reading nuclide notation and comparing isotopes of the same element.',
        bullets: [
          'Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z.',
          'Isotopes are atoms of the SAME element having the SAME number of protons (Z) but DIFFERENT numbers of neutrons (A − Z). Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n).',
          'Isotopes have identical chemical properties (same electron configuration) but different masses and nuclear stability (radioisotopes have unstable nuclei).',
        ],
        glossaryPills: [
          {
            term: 'isotopes',
            definition: 'Atoms of the same element with the same proton number but different nucleon (neutron) numbers.',
          },
        ],
      },
      {
        id: 'igcse-phys-5-1-c3',
        title: 'Nuclear Fission & Nuclear Fusion',
        summary: 'Splitting heavy nuclei in reactors vs fusing light nuclei in stars.',
        bullets: [
          '**Nuclear FISSION:** A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators).',
          '**Nuclear FUSION:** Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg.',
          'Fusion requires immense temperature so positively charged nuclei have enough **kinetic energy** to overcome electrostatic repulsion and get close enough for the strong nuclear force to bind them.',
        ],
        commonMistake: 'Do not mix up fission and fusion! Fission = Splitting (like a fissure/crack); Fusion = Fusing/joining light nuclei together.',
      },
    ],
    keyTerms: [
      { term: 'Nucleon number (A)', definition: 'Total number of protons plus neutrons in an atomic nucleus.' },
      { term: 'Isotope', definition: 'Variants of the same element with identical proton numbers but different neutron numbers.' },
      { term: 'Nuclear fission', definition: 'Splitting of a heavy unstable nucleus into lighter daughter nuclei plus neutrons and energy.' },
      { term: 'Nuclear fusion', definition: 'Joining of two light nuclei at ultra-high temperature/pressure to form a heavier nucleus, powering stars.' },
    ],
    checklistPoints: [
      'Explain how Rutherford’s gold foil observations established the nuclear model of the atom.',
      'Calculate proton, neutron, and electron counts from nuclide notation and define isotopes.',
      'Contrast nuclear fission (splitting heavy nuclei) with nuclear fusion (joining light nuclei in stars).',
    ],
  },
  'igcse-phys-5-2': {
    subtopicId: 'igcse-phys-5-2',
    subtopicCode: '5.2',
    subtopicTitle: 'Radioactive Decay (Alpha, Beta, Gamma) & Half-Life',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - Alpha, Beta & Gamma Radiation | How Ionising & Penetrating They Are',
    youtubeId: '1ui5YnYkYpc',
    videoChannel: 'Cognito',
    videoDuration: '4:57',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Isotopes & Radioactive Decay', cardId: 'igcse-phys-5-2-c1' },
      { time: '2:09', seconds: 129, label: 'What is Beta Radiation?', cardId: 'igcse-phys-5-2-c2' },
      { time: '2:55', seconds: 175, label: 'What is Gamma Radiation?', cardId: 'igcse-phys-5-2-c1' },
      { time: '4:00', seconds: 240, label: 'Summary of Radiation Penetrating Power', cardId: 'igcse-phys-5-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-5-2-c1',
        title: 'Properties of Alpha, Beta & Gamma Radiation',
        summary: 'Ionising power, penetration, and field deflection of alpha, beta, and gamma.',
        bullets: [
          'Background radiation comes from natural sources (radon gas from rocks, cosmic rays, food/buildings) and artificial sources (medical X-rays/scans). Always subtract background count rate before half-life calculations!',
          'Alpha (α, ⁴₂He nucleus): Charge +2, heavy, VERY strongly ionising, stopped by paper or ~5 cm of air.',
          'Beta-minus (β⁻, ⁰₋₁e fast electron emitted when a neutron turns into a proton + electron): Charge −1, moderately ionising, stopped by ~3–5 mm of aluminium.',
          'Gamma (γ, high-frequency EM wave): No mass, zero charge, weakly ionising, greatly reduced only by thick lead or metres of concrete.',
          '**In electric or magnetic fields:** Alpha deflects slightly toward the negative plate (heavy, +2); Beta deflects strongly in the OPPOSITE direction toward the positive plate (tiny mass, −1); Gamma is undeflected (uncharged).',
        ],
        glossaryPills: [
          {
            term: 'ionising',
            definition: 'Ability of radiation to knock electrons out of neutral atoms to form charged ions, which can damage living DNA.',
          },
          {
            term: 'background radiation',
            definition: 'Low-level ambient ionising radiation always present in the environment from natural and human-made sources.',
          },
        ],
        memoryAid: 'Penetration order: Paper stops Alpha, Aluminium stops Beta, Lead reduces Gamma (P-A-L). Ionising power is the EXACT reverse!',
      },
      {
        id: 'igcse-phys-5-2-c2',
        title: 'Balanced Nuclear Decay Equations',
        summary: 'Balancing nucleon and proton numbers in alpha and beta decay equations.',
        bullets: [
          'Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation.',
          '**Alpha decay (loses 2p and 2n):** ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.',
          'Beta-minus decay (1 neutron → 1 proton + 1 electron): ᴬ_Z X → ᴬ_{Z+1} Y + ⁰₋₁β. Nucleon number A stays constant, proton number Z INCREASES by 1! Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.',
          'Gamma emission releases excess nuclear energy only — neither A nor Z changes.',
        ],
        commonMistake: 'In beta-minus decay, Z INCREASES by 1 (not decreases!) because (Z + 1) + (−1) = Z on the right-hand side.',
      },
      {
        id: 'igcse-phys-5-2-c3',
        title: 'Half-Life, Uses & Safe Handling',
        summary: 'Half-life calculations, practical uses of isotopes, and safe handling.',
        bullets: [
          'Radioactive decay is spontaneous and RANDOM — it is impossible to predict when a single nucleus will decay, and decay rate is unaffected by temperature or chemical bonding.',
          'Half-life (t_½) is the time taken for HALF of the unstable nuclei in a sample to decay (or for the corrected count rate/activity in becquerels, Bq, to halve).',
          '**Worked example:** A sample has corrected activity 640 Bq and half-life 6 hours. After 18 hours (3 half-lives): 640 → 320 → 160 → 80 Bq.',
          '**Applications:** Alpha in smoke detectors (short range, ionises air); Beta for monitoring paper/aluminium thickness; Gamma for medical tracers (short half-life), radiotherapy, and food/surgical sterilisation; Carbon-14 dating for ancient organic artefacts.',
          '**Safety:** Store in lead-lined boxes, handle with tongs (maximise distance), minimise exposure time, and distinguish irradiation (outside exposure) from contamination (radioactive material on/in the body).',
        ],
        glossaryPills: [
          {
            term: 'half-life',
            definition: 'The average time taken for half of the undecayed radioactive nuclei in a sample to decay, or for the corrected activity to halve.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Alpha particle', definition: 'Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper).' },
      { term: 'Beta particle', definition: 'High-speed electron emitted from a nucleus when a neutron decays into a proton.' },
      { term: 'Half-life', definition: 'Time taken for half the unstable nuclei in a sample to decay.' },
      { term: 'Becquerel (Bq)', definition: 'SI unit of radioactive activity equal to one nuclear decay per second.' },
    ],
    checklistPoints: [
      'Compare α, β, and γ radiation by nature, charge, penetration, ionising power, and field deflection.',
      'Balance alpha and beta nuclear decay equations accurately.',
      'Subtract background count rate and compute remaining activity or age using half-life graphs and equations.',
    ],
  },
  'igcse-phys-6-1': {
    subtopicId: 'igcse-phys-6-1',
    subtopicCode: '6.1',
    subtopicTitle: 'Earth, The Solar System & Orbital Motion',
    readingMinutes: 9,
    videoTitle: 'GCSE Physics - Gravitational Potential Energy & Gravity | How to Calculate Weight',
    youtubeId: 'hSzEdvFEVq8',
    videoChannel: 'Cognito',
    videoDuration: '6:51',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Introduction to Gravity, Mass, Weight and Energy', cardId: 'igcse-phys-6-1-c1' },
      { time: '1:34', seconds: 94, label: 'What is a Gravitational Field?', cardId: 'igcse-phys-6-1-c2' },
      { time: '3:19', seconds: 199, label: 'The Difference Between Mass and Weight', cardId: 'igcse-phys-6-1-c2' },
      { time: '5:19', seconds: 319, label: 'Gravitational Potential Energy Calculation Example', cardId: 'igcse-phys-6-1-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-6-1-c1',
        title: 'Earth’s Motion, Seasons & The Moon',
        summary: 'How Earth’s rotation, 23.5° axial tilt, and lunar orbit create days and seasons.',
        bullets: [
          '**Day and night:** Earth spins on its tilted axis (23.5°) once every 24 hours; the Sun appears to rise in the east and set in the west.',
          '**Seasons:** Earth orbits the Sun once every ~365.25 days while keeping its 23.5° axial tilt fixed. When the Northern Hemisphere tilts TOWARD the Sun, it receives more direct sunlight over longer days (summer), while the Southern Hemisphere experiences winter.',
          'Phases of the Moon (~27.3–29.5 day lunar orbit): As the Moon orbits Earth, we view varying fractions of its sunlit half (New Moon → Waxing Crescent → First Quarter → Full Moon → Waning).',
        ],
        commonMistake: 'Seasons are NOT caused by Earth getting closer to the Sun — they are caused by Earth’s 23.5° axial tilt changing the angle of sunlight and daylight hours!',
      },
      {
        id: 'igcse-phys-6-1-c2',
        title: 'The Solar System & Accretion Model',
        summary: 'Planet order and how the accretion disc formed rocky vs gaseous worlds.',
        bullets: [
          '**Order of the 8 planets from the Sun:** Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants).',
          '**Accretion model of Solar System formation:** A rotating nebula of gas and dust collapsed under gravity into a swirling accretion disc. The hot dense core formed the Sun; near the Sun only rocky/metallic elements with high melting points condensed (rocky planets), whereas further out cooler gases and ices clumped into gas giants.',
          'Gravitational field strength at a planet’s surface increases with planet mass, and gravity between two bodies weakens rapidly as distance increases.',
        ],
        glossaryPills: [
          {
            term: 'accretion disc',
            definition: 'Flattened rotating disc of gas and dust drawn together by gravity around a newly forming star from which planets coalesce.',
          },
        ],
        memoryAid: 'Planet order: My Very Easy Method Just Speeds Up Naming (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune).',
      },
      {
        id: 'igcse-phys-6-1-c3',
        title: 'Orbital Speed & Elliptical Comet Orbits',
        summary: 'Calculating orbital speed (v = 2πr/T) and elliptical comet energy transfers.',
        bullets: [
          'Average orbital speed for a circular orbit of radius r and orbital period T: **v = (2 × π × r) ÷ T**.',
          'As orbital radius increases across the Solar System, the Sun’s gravitational pull weakens, so outer planets orbit much MORE SLOWLY and have much LONGER orbital periods (years) than inner planets.',
          'Comets follow highly elliptical orbits with the Sun off-centre at one focus. By conservation of energy, as a comet falls closer to the Sun its **gravitational potential energy** converts into kinetic energy — so it travels FASTEST at closest approach and SLOWEST far out.',
          '**Worked example:** Earth orbits the Sun at r = 1.50 × 10¹¹ m in T = 365.25 × 86,400 = 3.156 × 10⁷ s. Orbital speed v = 2π(1.50 × 10¹¹) ÷ (3.156 × 10⁷) ≈ 29,900 m/s (≈ 30 km/s).',
        ],
        glossaryPills: [
          {
            term: 'orbital period',
            definition: 'The time T taken for a planet, moon, or satellite to complete one full orbit around its parent body.',
          },
        ],
      },
    ],
    keyTerms: [
      { term: 'Orbital speed', definition: 'Average speed along a circular orbit: v = 2πr ÷ T.' },
      { term: 'Accretion', definition: 'Process by which dust and gas particles clump together under gravity to form stars and planets.' },
      { term: 'Elliptical orbit', definition: 'Oval-shaped orbit followed by planets and strongly elongated for comets, with the Sun at one focus.' },
    ],
    checklistPoints: [
      'Explain day/night, the seasons (23.5° tilt), and lunar phases clearly.',
      'Explain why inner planets are rocky while outer planets are gaseous using the accretion model.',
      'Calculate orbital speed with v = 2πr/T and explain why comets accelerate near the Sun via energy conservation.',
    ],
  },
  'igcse-phys-6-2': {
    subtopicId: 'igcse-phys-6-2',
    subtopicCode: '6.2',
    subtopicTitle: 'Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)',
    readingMinutes: 10,
    videoTitle: 'GCSE Physics - What is Red Shift?',
    youtubeId: 'bWEtm-7cYzM',
    videoChannel: 'Cognito',
    videoDuration: '5:59',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Physics (0625)',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Intro to Red Shift & Big Bang', cardId: 'igcse-phys-6-2-c2' },
      { time: '1:45', seconds: 105, label: 'Red Shift Observed in Distant Galaxies', cardId: 'igcse-phys-6-2-c2' },
      { time: '3:08', seconds: 188, label: 'Balloon Model of the Expanding Universe', cardId: 'igcse-phys-6-2-c2' },
      { time: '4:46', seconds: 286, label: 'How the Universe Began: The Big Bang Theory', cardId: 'igcse-phys-6-2-c3' },
    ],
    cards: [
      {
        id: 'igcse-phys-6-2-c1',
        title: 'Light-Years & Life Cycle of Stars',
        summary: 'Light-years and stellar evolution from nebulae to white dwarfs or black holes.',
        bullets: [
          'A light-year is a unit of DISTANCE (not time!) — the distance light travels in a vacuum in one year: 1 light-year ≈ 9.5 × 10¹⁵ m. Our Sun sits in the Milky Way galaxy (~100,000 light-years across).',
          '**Star birth:** Gravity pulls dust and hydrogen gas in a NEBULA inward to form a dense hot PROTOSTAR. Once core temperature reaches millions of kelvin, hydrogen nuclear FUSION begins.',
          '**Main Sequence Star (stable phase like the Sun):** Outward radiation/thermal pressure from hydrogen fusion exactly BALANCES inward gravitational collapse for billions of years.',
          '**Low-mass stars (like our Sun):** Hydrogen runs low → expands and cools into a RED GIANT (fuses helium to carbon) → sheds outer layers as a PLANETARY NEBULA leaving a hot, dense WHITE DWARF that slowly cools.',
          'High-mass stars (>8× Sun’s mass): Expand into a RED SUPERGIANT (fusing elements up to iron) → catastrophic SUPERNOVA explosion (forging heavy elements beyond iron like gold and uranium and scattering them into new nebulae) → core collapses into an ultra-dense NEUTRON STAR or, if massive enough, a BLACK HOLE.',
        ],
        glossaryPills: [
          {
            term: 'light-year',
            definition: 'Astronomical unit of distance equal to how far light travels through a vacuum in one Earth year (~9.5 × 10¹⁵ m).',
          },
          {
            term: 'supernova',
            definition: 'Catastrophic explosion of a massive red supergiant star that synthesises heavy elements and disperses them across space.',
          },
        ],
        memoryAid: 'Sun-like path: Nebula → Protostar → Main Sequence → Red Giant → Planetary Nebula → White Dwarf. Massive path: ... → Red Supergiant → Supernova → Neutron Star / Black Hole.',
      },
      {
        id: 'igcse-phys-6-2-c2',
        title: 'Red-Shift, CMBR & The Big Bang Theory',
        summary: 'Galactic red-shift and CMBR as core evidence for the Big Bang.',
        bullets: [
          'Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us.',
          '**Key observation:** The FURTHER away a galaxy is, the GREATER its red-shift — meaning distant galaxies are receding FASTER than closer ones, proving the Universe is expanding.',
          '**Cosmic Microwave Background Radiation (CMBR):** Uniform microwave radiation arriving from every direction in space. Originally high-energy gamma radiation emitted shortly after the Big Bang (~13.8 billion years ago), it has been stretched into the microwave region by billions of years of cosmic expansion.',
          'Both galactic red-shift AND CMBR provide independent, compelling evidence for the **Big Bang Theory**.',
        ],
        glossaryPills: [
          {
            term: 'red-shift',
            definition: 'Increase in observed wavelength of light from a receding galaxy due to the expansion of space.',
          },
        ],
        commonMistake: 'Red-shift does NOT mean galaxies look bright red — it means their dark absorption spectral lines shift toward longer wavelengths relative to laboratory measurements on Earth.',
      },
      {
        id: 'igcse-phys-6-2-c3',
        title: 'Hubble’s Law & Age of the Universe (CIE Extended)',
        summary: 'Applying Hubble’s Law (H₀ = v/d) to estimate the age of the Universe.',
        bullets: [
          'Hubble’s Law states that a galaxy’s recession speed v is directly proportional to its distance d from Earth: **v = H₀ × d**, where H₀ = v ÷ d is the Hubble constant.',
          '**Current measured value of the Hubble constant:** H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹.',
          '**Estimating the age of the Universe:** Assuming galaxies have expanded at speed v over time t = d ÷ v, we obtain Age of Universe ≈ 1 ÷ H₀ ≈ 1 ÷ (2.2 × 10⁻¹⁸ s⁻¹) ≈ 4.5 × 10¹⁷ s ≈ 1.4 × 10¹⁰ years (~14 billion years).',
          'Astronomers find distances d to distant galaxies by measuring the apparent brightness of Type Ia supernovae (whose true peak luminosity is known).',
        ],
      },
    ],
    keyTerms: [
      { term: 'Main sequence star', definition: 'Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion.' },
      { term: 'Red-shift', definition: 'Stretching of light wavelengths from distant receding galaxies, providing evidence of cosmic expansion.' },
      { term: 'CMBR', definition: 'Cosmic Microwave Background Radiation — relic thermal radiation from the early Universe stretched into microwaves.' },
      { term: 'Hubble constant (H₀)', definition: 'Ratio of galaxy recession velocity to distance (H₀ = v ÷ d ≈ 2.2 × 10⁻¹⁸ s⁻¹); 1/H₀ estimates the Universe’s age.' },
    ],
    checklistPoints: [
      'Trace the complete stellar life cycle for both Sun-sized stars and high-mass stars.',
      'Explain how galactic red-shift and CMBR support the Big Bang Theory.',
      'Apply Hubble’s Law (H₀ = v/d) and show how 1/H₀ estimates the age of the Universe.',
    ],
  },
};

export const IGCSE_PHYSICS_QUIZZES: QuizQuestion[] = [
  {
    "id": "igcse-phys-q1",
    "subtopicId": "igcse-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "On a speed–time graph, what physical quantities are represented by the gradient and the area under the line?",
    "options": [
      "Gradient = speed; Area = acceleration",
      "Gradient = acceleration; Area = distance travelled",
      "Gradient = distance; Area = speed",
      "Gradient = force; Area = work done"
    ],
    "correctIndex": 1,
    "explanation": "On a speed–time graph, Δv/Δt (gradient) gives acceleration and v × t (area under the graph) gives distance travelled."
  },
  {
    "id": "igcse-phys-q2",
    "subtopicId": "igcse-phys-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A solid metal block has mass 540 g and volume 200 cm³. Calculate its density in g/cm³.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "ρ = m ÷ V = 540 ÷ 200 = 2.7 g/cm³.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Use ρ = m ÷ V (540 ÷ 200)",
          "requiredKeywordGroups": [
            [
              "540",
              "200"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct answer 2.7 g/cm³",
          "numericMatch": {
            "value": 2.7,
            "tolerance": 0.05
          }
        }
      ]
    },
    "explanation": "Density ρ = m ÷ V = 540 g ÷ 200 cm³ = 2.7 g/cm³ (aluminium)."
  },
  {
    "id": "igcse-phys-q3",
    "subtopicId": "igcse-phys-1-3",
    "type": "short-answer",
    "marks": 3,
    "prompt": "A uniform seesaw balances horizontally at its centre. A 300 N child sits 2.0 m to the left of the pivot. How far to the right must a 400 N child sit to balance the seesaw?",
    "rubric": {
      "maxMarks": 3,
      "modelAnswer": "Anticlockwise moment = 300 × 2.0 = 600 N m. Clockwise moment = 400 × d = 600 → d = 600 ÷ 400 = 1.5 m.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Anticlockwise moment = 600 N m",
          "requiredKeywordGroups": [
            [
              "600"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Equate clockwise and anticlockwise moments (400 × d = 600)",
          "requiredKeywordGroups": [
            [
              "400"
            ]
          ]
        },
        {
          "id": "mp3",
          "markDescription": "Correct distance 1.5 m",
          "numericMatch": {
            "value": 1.5,
            "tolerance": 0.02
          }
        }
      ]
    },
    "explanation": "By the principle of moments, 300 × 2.0 = 400 × d, giving d = 600 ÷ 400 = 1.5 m."
  },
  {
    "id": "igcse-phys-q4",
    "subtopicId": "igcse-phys-1-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "An electric motor draws 500 W of electrical power and lifts a load at a useful rate of 350 W. What is its percentage efficiency?",
    "options": [
      "35%",
      "60%",
      "70%",
      "143%"
    ],
    "correctIndex": 2,
    "explanation": "Efficiency = (Useful power ÷ Total power) × 100% = (350 ÷ 500) × 100% = 70%."
  },
  {
    "id": "igcse-phys-q5",
    "subtopicId": "igcse-phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A trapped gas occupies 600 cm³ at a pressure of 100 kPa. It is compressed at constant temperature to 250 cm³. Calculate the new pressure in kPa.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "p₁V₁ = p₂V₂ → p₂ = (100 × 600) ÷ 250 = 240 kPa.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Apply p₁V₁ = p₂V₂ (100 × 600 = p₂ × 250)",
          "requiredKeywordGroups": [
            [
              "600",
              "250"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct pressure 240 kPa",
          "numericMatch": {
            "value": 240,
            "tolerance": 0.5
          }
        }
      ]
    },
    "explanation": "Using Boyle’s Law: p₂ = (100 × 600) ÷ 250 = 240 kPa."
  },
  {
    "id": "igcse-phys-q6",
    "subtopicId": "igcse-phys-2-2",
    "type": "fill-blank",
    "marks": 3,
    "prompt": "Complete the explanation of thermal energy transfer mechanisms.",
    "segments": [
      "Metals conduct heat rapidly mainly because of ",
      ". In liquids and gases, warmer fluid rises because it becomes ",
      ". Across the vacuum of space, heat travels only by ",
      "."
    ],
    "wordBank": [
      "free electrons",
      "less dense",
      "infrared radiation",
      "more dense",
      "convection"
    ],
    "answers": [
      "free electrons",
      "less dense",
      "infrared radiation"
    ],
    "explanation": "Delocalised free electrons transfer energy in metals; heated fluids expand and become less dense to drive convection; only EM infrared radiation crosses a vacuum."
  },
  {
    "id": "igcse-phys-q7",
    "subtopicId": "igcse-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Water waves move from deep water into shallow water. Which statement is TRUE?",
    "options": [
      "Frequency decreases and wavelength stays constant",
      "Speed and wavelength both decrease while frequency stays constant",
      "Speed increases and frequency increases",
      "Wavelength increases while speed decreases"
    ],
    "correctIndex": 1,
    "explanation": "Entering shallow water slows the wave and shortens its wavelength, while frequency set by the source never changes."
  },
  {
    "id": "igcse-phys-q8",
    "subtopicId": "igcse-phys-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which pair of conditions is required for Total Internal Reflection inside a glass optical fibre?",
    "options": [
      "Light goes from air to glass and i < c",
      "Light goes from glass to air and i > c",
      "Light goes from glass to air and i < c",
      "Light goes from air to glass and i = 90°"
    ],
    "correctIndex": 1,
    "explanation": "TIR requires light travelling from optically denser (glass) toward less dense (air) at an angle of incidence exceeding the critical angle (i > c)."
  },
  {
    "id": "igcse-phys-q9",
    "subtopicId": "igcse-phys-3-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A boat emits an ultrasound sonar pulse straight down and detects the echo 0.60 s later. Given speed of sound in water = 1,500 m/s, calculate the depth of the water.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "2d = v × t = 1500 × 0.60 = 900 m, so depth d = 450 m.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Recognise round-trip distance 900 m or divide by 2",
          "requiredKeywordGroups": [
            [
              "900",
              "2"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct depth 450 m",
          "numericMatch": {
            "value": 450,
            "tolerance": 1
          }
        }
      ]
    },
    "explanation": "Total path = 1500 × 0.60 = 900 m. Depth d = 900 ÷ 2 = 450 m."
  },
  {
    "id": "igcse-phys-q10",
    "subtopicId": "igcse-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their combined resistance?",
    "options": [
      "9 Ω",
      "4.5 Ω",
      "2 Ω",
      "0.5 Ω"
    ],
    "correctIndex": 2,
    "explanation": "1/R = 1/6 + 1/3 = 3/6 = 1/2, so R = 2 Ω (always smaller than the smallest branch resistor)."
  },
  {
    "id": "igcse-phys-q11",
    "subtopicId": "igcse-phys-4-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A step-down transformer has 1,000 turns on its primary coil and 50 turns on its secondary coil. If primary voltage is 240 V AC, calculate the secondary output voltage.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Vs = Vp × (Ns ÷ Np) = 240 × (50 ÷ 1000) = 12 V.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Use Vp/Vs = Np/Ns ratio",
          "requiredKeywordGroups": [
            [
              "240",
              "50",
              "1000"
            ]
          ]
        },
        {
          "id": "mp2",
          "markDescription": "Correct output voltage 12 V",
          "numericMatch": {
            "value": 12,
            "tolerance": 0.1
          }
        }
      ]
    },
    "explanation": "Vp/Vs = Np/Ns → 240/Vs = 1000/50 = 20 → Vs = 240 ÷ 20 = 12 V."
  },
  {
    "id": "igcse-phys-q12",
    "subtopicId": "igcse-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A radioactive isotope has a half-life of 4 days. Its corrected activity starts at 800 Bq. What will its activity be after 12 days?",
    "options": [
      "400 Bq",
      "200 Bq",
      "100 Bq",
      "50 Bq"
    ],
    "correctIndex": 2,
    "explanation": "12 days = 3 half-lives. 800 → 400 (4 d) → 200 (8 d) → 100 Bq (12 d)."
  },
  {
    "id": "igcse-phys-q13",
    "subtopicId": "igcse-phys-6-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select TWO pieces of observational evidence that support the Big Bang Theory.",
    "options": [
      "Red-shift of light from distant galaxies increasing with distance",
      "The tilt of Earth’s axis at 23.5°",
      "Cosmic Microwave Background Radiation (CMBR) arriving uniformly from all directions",
      "Comets speeding up as they approach the Sun"
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Galactic red-shift proves space is expanding, and uniform CMBR is relic radiation from the hot early Universe stretched by expansion."
  },
  {
    "id": "igcse-phys-q-extra-113",
    "subtopicId": "igcse-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.1 (Physical Quantities, Speed & Motion Graphs), which of the following is the accurate definition of \"Scalar\"?",
    "options": [
      "A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy).",
      "The inverse ratio of Vector measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Physical Quantities, Speed & Motion Graphs.",
      "An experimental error caused by neglecting unit conversions in Measurement Techniques, Scalars & Vectors."
    ],
    "correctIndex": 0,
    "explanation": "Scalar is defined as: A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy)."
  },
  {
    "id": "igcse-phys-q-extra-114",
    "subtopicId": "igcse-phys-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Speed, Velocity & Uniform Acceleration\" (1.1 Physical Quantities, Speed & Motion Graphs).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Average speed = total distance travelled ÷ total time taken: v = s ÷ t (SI unit: m/s). Velocity is speed in a specified direction. 2. Acceleration is the rate of change of velocity: a = (v − u) ÷ t (SI unit: m/s²), where u is initial velocity and v is final velocity.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Average speed = total distance travelled ÷ total time taken: v = s ÷ t (SI unit: m/s). Velocity is speed in a specified direction."
        },
        {
          "id": "mp2",
          "markDescription": "Acceleration is the rate of change of velocity: a = (v − u) ÷ t (SI unit: m/s²), where u is initial velocity and v is final velocity."
        }
      ]
    },
    "explanation": "From Speed, Velocity & Uniform Acceleration: Average speed = total distance travelled ÷ total time taken: v = s ÷ t (SI unit: m/s). Velocity is speed in a specified direction."
  },
  {
    "id": "igcse-phys-q-extra-115",
    "subtopicId": "igcse-phys-1-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.1 Physical Quantities, Speed & Motion Graphs.",
    "options": [
      "Distinguish between scalar and vector quantities and find the resultant of two perpendicular vectors.",
      "In Physical Quantities, Speed & Motion Graphs, standard unit conversions are never required before applying formulas.",
      "Calculate average speed (v = s/t) and acceleration (a = (v − u)/t) with correct SI units.",
      "Scalar and Vector always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Distinguish between scalar and vector quantities and find the resultant of two perpendicular vectors.\" and \"Calculate average speed (v = s/t) and acceleration (a = (v − u)/t) with correct SI units.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-116",
    "subtopicId": "igcse-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.1 (Physical Quantities, Speed & Motion Graphs)?",
    "options": [
      "When calculating average speed over a two-stage journey, NEVER average the two speeds directly — always divide TOTAL distance by TOTAL time.",
      "Always omit units and rounding in Physical Quantities, Speed & Motion Graphs calculations.",
      "Never show intermediate working steps in 1.1 questions.",
      "Assume Scalar is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When calculating average speed over a two-stage journey, NEVER average the two speeds directly — always divide TOTAL distance by TOTAL time."
  },
  {
    "id": "igcse-phys-q-extra-118",
    "subtopicId": "igcse-phys-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.2 (Mass, Weight, Density, Forces & Newton’s Laws), which of the following is the accurate definition of \"Density\"?",
    "options": [
      "Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³).",
      "The inverse ratio of Spring constant measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Mass, Weight, Density, Forces & Newton’s Laws.",
      "An experimental error caused by neglecting unit conversions in Mass, Weight & Density."
    ],
    "correctIndex": 0,
    "explanation": "Density is defined as: Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³)."
  },
  {
    "id": "igcse-phys-q-extra-119",
    "subtopicId": "igcse-phys-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Hooke’s Law & Spring Constant\" (1.2 Mass, Weight, Density, Forces & Newton’s Laws).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: F = k × x. 2. Spring constant k = F ÷ x (units: N/m or N/cm) represents the stiffness of the spring and equals the gradient of the straight-line region of a force–extension graph.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: F = k × x."
        },
        {
          "id": "mp2",
          "markDescription": "Spring constant k = F ÷ x (units: N/m or N/cm) represents the stiffness of the spring and equals the gradient of the straight-line region of a force–extension graph."
        }
      ]
    },
    "explanation": "From Hooke’s Law & Spring Constant: Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: F = k × x."
  },
  {
    "id": "igcse-phys-q-extra-120",
    "subtopicId": "igcse-phys-1-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.2 Mass, Weight, Density, Forces & Newton’s Laws.",
    "options": [
      "Calculate weight using W = mg and density using ρ = m/V, including displacement measurements.",
      "In Mass, Weight, Density, Forces & Newton’s Laws, standard unit conversions are never required before applying formulas.",
      "Apply Hooke’s Law (F = kx) and identify the limit of proportionality on a load–extension graph.",
      "Density and Spring constant always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate weight using W = mg and density using ρ = m/V, including displacement measurements.\" and \"Apply Hooke’s Law (F = kx) and identify the limit of proportionality on a load–extension graph.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-121",
    "subtopicId": "igcse-phys-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.2 (Mass, Weight, Density, Forces & Newton’s Laws)?",
    "options": [
      "Students often say \"weight is measured in kg\". Weight is a FORCE measured in newtons (N) using a newtonmeter; mass is measured in kilograms (kg).",
      "Always omit units and rounding in Mass, Weight, Density, Forces & Newton’s Laws calculations.",
      "Never show intermediate working steps in 1.2 questions.",
      "Assume Density is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Students often say \"weight is measured in kg\". Weight is a FORCE measured in newtons (N) using a newtonmeter; mass is measured in kilograms (kg)."
  },
  {
    "id": "igcse-phys-q-extra-123",
    "subtopicId": "igcse-phys-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.3 (Moments, Momentum, Impulse & Pressure), which of the following is the accurate definition of \"Moment\"?",
    "options": [
      "Turning effect of a force about a pivot: M = F × d (N m).",
      "The inverse ratio of Momentum measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Moments, Momentum, Impulse & Pressure.",
      "An experimental error caused by neglecting unit conversions in Moments, Principle of Moments & Centre of Gravity."
    ],
    "correctIndex": 0,
    "explanation": "Moment is defined as: Turning effect of a force about a pivot: M = F × d (N m)."
  },
  {
    "id": "igcse-phys-q-extra-124",
    "subtopicId": "igcse-phys-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Momentum, Conservation & Impulse\" (1.3 Moments, Momentum, Impulse & Pressure).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s). 2. Principle of conservation of momentum: In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s)."
        },
        {
          "id": "mp2",
          "markDescription": "Principle of conservation of momentum: In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂."
        }
      ]
    },
    "explanation": "From Momentum, Conservation & Impulse: Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s)."
  },
  {
    "id": "igcse-phys-q-extra-125",
    "subtopicId": "igcse-phys-1-3",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.3 Moments, Momentum, Impulse & Pressure.",
    "options": [
      "Apply the principle of moments (clockwise = anticlockwise) to solve balanced beam problems.",
      "In Moments, Momentum, Impulse & Pressure, standard unit conversions are never required before applying formulas.",
      "Use p = mv, conservation of momentum, and F = Δp/Δt to explain crumple zones and solve collisions.",
      "Moment and Momentum always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply the principle of moments (clockwise = anticlockwise) to solve balanced beam problems.\" and \"Use p = mv, conservation of momentum, and F = Δp/Δt to explain crumple zones and solve collisions.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-126",
    "subtopicId": "igcse-phys-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.3 (Moments, Momentum, Impulse & Pressure)?",
    "options": [
      "Momentum is a VECTOR — if two objects move toward each other, one velocity MUST be entered as negative!",
      "Always omit units and rounding in Moments, Momentum, Impulse & Pressure calculations.",
      "Never show intermediate working steps in 1.3 questions.",
      "Assume Moment is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Momentum is a VECTOR — if two objects move toward each other, one velocity MUST be entered as negative!"
  },
  {
    "id": "igcse-phys-q-extra-128",
    "subtopicId": "igcse-phys-1-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 1.4 (Energy Stores, Work Done, Power & Efficiency), which of the following is the accurate definition of \"Power\"?",
    "options": [
      "Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W).",
      "The inverse ratio of Efficiency measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Energy Stores, Work Done, Power & Efficiency.",
      "An experimental error caused by neglecting unit conversions in Energy Stores, Transfers & Mechanical Work."
    ],
    "correctIndex": 0,
    "explanation": "Power is defined as: Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W)."
  },
  {
    "id": "igcse-phys-q-extra-129",
    "subtopicId": "igcse-phys-1-4",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Power & Efficiency\" (1.4 Energy Stores, Work Done, Power & Efficiency).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Power is the rate of work done or energy transferred: P = W ÷ t = ΔE ÷ t (SI unit: watt, W, where 1 W = 1 J/s). 2. Percentage efficiency = (Useful energy output ÷ Total energy input) × 100%, or equivalently (Useful power output ÷ Total power input) × 100%.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Power is the rate of work done or energy transferred: P = W ÷ t = ΔE ÷ t (SI unit: watt, W, where 1 W = 1 J/s)."
        },
        {
          "id": "mp2",
          "markDescription": "Percentage efficiency = (Useful energy output ÷ Total energy input) × 100%, or equivalently (Useful power output ÷ Total power input) × 100%."
        }
      ]
    },
    "explanation": "From Power & Efficiency: Power is the rate of work done or energy transferred: P = W ÷ t = ΔE ÷ t (SI unit: watt, W, where 1 W = 1 J/s)."
  },
  {
    "id": "igcse-phys-q-extra-130",
    "subtopicId": "igcse-phys-1-4",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 1.4 Energy Stores, Work Done, Power & Efficiency.",
    "options": [
      "Apply W = Fd, Ek = ½mv², and ΔEp = mgΔh, including equating Ep lost to Ek gained.",
      "In Energy Stores, Work Done, Power & Efficiency, standard unit conversions are never required before applying formulas.",
      "Calculate power (P = E/t) and percentage efficiency using Sankey diagrams.",
      "Power and Efficiency always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply W = Fd, Ek = ½mv², and ΔEp = mgΔh, including equating Ep lost to Ek gained.\" and \"Calculate power (P = E/t) and percentage efficiency using Sankey diagrams.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-131",
    "subtopicId": "igcse-phys-1-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 1.4 (Energy Stores, Work Done, Power & Efficiency)?",
    "options": [
      "When calculating power in watts, ALWAYS convert time from minutes to seconds (×60) and energy from kJ to J (×1,000).",
      "Always omit units and rounding in Energy Stores, Work Done, Power & Efficiency calculations.",
      "Never show intermediate working steps in 1.4 questions.",
      "Assume Power is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "When calculating power in watts, ALWAYS convert time from minutes to seconds (×60) and energy from kJ to J (×1,000)."
  },
  {
    "id": "igcse-phys-q-extra-133",
    "subtopicId": "igcse-phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.1 (Kinetic Particle Model of Matter & Gas Laws), which of the following is the accurate definition of \"Absolute zero\"?",
    "options": [
      "0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy.",
      "The inverse ratio of Brownian motion measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Kinetic Particle Model of Matter & Gas Laws.",
      "An experimental error caused by neglecting unit conversions in States of Matter & Brownian Motion."
    ],
    "correctIndex": 0,
    "explanation": "Absolute zero is defined as: 0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy."
  },
  {
    "id": "igcse-phys-q-extra-134",
    "subtopicId": "igcse-phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Temperature, Absolute Zero & The Kelvin Scale\" (2.1 Kinetic Particle Model of Matter & Gas Laws).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Temperature is a measure of the average kinetic energy of the particles in a substance. 2. Absolute zero (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Temperature is a measure of the average kinetic energy of the particles in a substance."
        },
        {
          "id": "mp2",
          "markDescription": "Absolute zero (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure."
        }
      ]
    },
    "explanation": "From Temperature, Absolute Zero & The Kelvin Scale: Temperature is a measure of the average kinetic energy of the particles in a substance."
  },
  {
    "id": "igcse-phys-q-extra-135",
    "subtopicId": "igcse-phys-2-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.1 Kinetic Particle Model of Matter & Gas Laws.",
    "options": [
      "Describe particle arrangement, motion, and forces in solids, liquids, and gases.",
      "In Kinetic Particle Model of Matter & Gas Laws, standard unit conversions are never required before applying formulas.",
      "Explain Brownian motion as evidence for the kinetic particle model.",
      "Absolute zero and Brownian motion always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Describe particle arrangement, motion, and forces in solids, liquids, and gases.\" and \"Explain Brownian motion as evidence for the kinetic particle model.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-136",
    "subtopicId": "igcse-phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.1 (Kinetic Particle Model of Matter & Gas Laws)?",
    "options": [
      "In gas-law calculations linking pressure or volume to temperature, NEVER use Celsius — always convert to Kelvin (+273) first!",
      "Always omit units and rounding in Kinetic Particle Model of Matter & Gas Laws calculations.",
      "Never show intermediate working steps in 2.1 questions.",
      "Assume Absolute zero is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "In gas-law calculations linking pressure or volume to temperature, NEVER use Celsius — always convert to Kelvin (+273) first!"
  },
  {
    "id": "igcse-phys-q-extra-138",
    "subtopicId": "igcse-phys-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 2.2 (Specific Heat Capacity, Latent Heat & Thermal Transfer), which of the following is the accurate definition of \"Internal energy\"?",
    "options": [
      "Total random kinetic and potential energy of all particles inside a system.",
      "The inverse ratio of Specific heat capacity measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Specific Heat Capacity, Latent Heat & Thermal Transfer.",
      "An experimental error caused by neglecting unit conversions in Specific Heat Capacity & Latent Heat."
    ],
    "correctIndex": 0,
    "explanation": "Internal energy is defined as: Total random kinetic and potential energy of all particles inside a system."
  },
  {
    "id": "igcse-phys-q-extra-139",
    "subtopicId": "igcse-phys-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Thermal Expansion & Real-World Applications\" (2.2 Specific Heat Capacity, Latent Heat & Thermal Transfer).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least. 2. Practical consequences: Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least."
        },
        {
          "id": "mp2",
          "markDescription": "Practical consequences: Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter."
        }
      ]
    },
    "explanation": "From Thermal Expansion & Real-World Applications: When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least."
  },
  {
    "id": "igcse-phys-q-extra-140",
    "subtopicId": "igcse-phys-2-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 2.2 Specific Heat Capacity, Latent Heat & Thermal Transfer.",
    "options": [
      "Use ΔE = mcΔT and explain why temperature remains constant during melting and boiling.",
      "In Specific Heat Capacity, Latent Heat & Thermal Transfer, standard unit conversions are never required before applying formulas.",
      "Explain why evaporation cools a liquid and list factors increasing its rate (temperature, surface area, draught).",
      "Internal energy and Specific heat capacity always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Use ΔE = mcΔT and explain why temperature remains constant during melting and boiling.\" and \"Explain why evaporation cools a liquid and list factors increasing its rate (temperature, surface area, draught).\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-141",
    "subtopicId": "igcse-phys-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 2.2 (Specific Heat Capacity, Latent Heat & Thermal Transfer)?",
    "options": [
      "On a flat plateau of a heating curve, NEVER say \"no energy is being absorbed\" — energy IS absorbed to break intermolecular bonds (potential energy rises while kinetic energy/temperature stays flat).",
      "Always omit units and rounding in Specific Heat Capacity, Latent Heat & Thermal Transfer calculations.",
      "Never show intermediate working steps in 2.2 questions.",
      "Assume Internal energy is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "On a flat plateau of a heating curve, NEVER say \"no energy is being absorbed\" — energy IS absorbed to break intermolecular bonds (potential energy rises while kinetic energy/temperature stays flat)."
  },
  {
    "id": "igcse-phys-q-extra-143",
    "subtopicId": "igcse-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.1 (General Wave Properties, Reflection, Refraction & Diffraction), which of the following is the accurate definition of \"Transverse wave\"?",
    "options": [
      "Wave whose oscillations are perpendicular to the direction of energy transfer.",
      "The inverse ratio of Longitudinal wave measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in General Wave Properties, Reflection, Refraction & Diffraction.",
      "An experimental error caused by neglecting unit conversions in Transverse vs Longitudinal Waves & Wave Parameters."
    ],
    "correctIndex": 0,
    "explanation": "Transverse wave is defined as: Wave whose oscillations are perpendicular to the direction of energy transfer."
  },
  {
    "id": "igcse-phys-q-extra-144",
    "subtopicId": "igcse-phys-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"The Wave Equation (v = fλ)\" (3.1 General Wave Properties, Reflection, Refraction & Diffraction).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Wave speed (m/s) = frequency (Hz) × wavelength (m): v = f × λ. 2. Also link period and frequency: T = 1 ÷ f, so a wave of frequency 50 Hz has a time period T = 0.02 s.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Wave speed (m/s) = frequency (Hz) × wavelength (m): v = f × λ."
        },
        {
          "id": "mp2",
          "markDescription": "Also link period and frequency: T = 1 ÷ f, so a wave of frequency 50 Hz has a time period T = 0.02 s."
        }
      ]
    },
    "explanation": "From The Wave Equation (v = fλ): Wave speed (m/s) = frequency (Hz) × wavelength (m): v = f × λ."
  },
  {
    "id": "igcse-phys-q-extra-145",
    "subtopicId": "igcse-phys-3-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.1 General Wave Properties, Reflection, Refraction & Diffraction.",
    "options": [
      "Compare transverse and longitudinal waves with examples of each.",
      "In General Wave Properties, Reflection, Refraction & Diffraction, standard unit conversions are never required before applying formulas.",
      "Calculate wave speed, frequency, wavelength, and period using v = fλ and T = 1/f.",
      "Transverse wave and Longitudinal wave always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Compare transverse and longitudinal waves with examples of each.\" and \"Calculate wave speed, frequency, wavelength, and period using v = fλ and T = 1/f.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-146",
    "subtopicId": "igcse-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.1 (General Wave Properties, Reflection, Refraction & Diffraction)?",
    "options": [
      "Remember to convert kHz (×10³), MHz (×10⁶), and cm (÷100) into Hz and metres before calculating v = fλ!",
      "Always omit units and rounding in General Wave Properties, Reflection, Refraction & Diffraction calculations.",
      "Never show intermediate working steps in 3.1 questions.",
      "Assume Transverse wave is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Remember to convert kHz (×10³), MHz (×10⁶), and cm (÷100) into Hz and metres before calculating v = fλ!"
  },
  {
    "id": "igcse-phys-q-extra-148",
    "subtopicId": "igcse-phys-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.2 (Light, Lenses, Total Internal Reflection & EM Spectrum), which of the following is the accurate definition of \"Snell’s Law\"?",
    "options": [
      "n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index.",
      "The inverse ratio of Total internal reflection measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Light, Lenses, Total Internal Reflection & EM Spectrum.",
      "An experimental error caused by neglecting unit conversions in Reflection, Snell’s Law & Total Internal Reflection."
    ],
    "correctIndex": 0,
    "explanation": "Snell’s Law is defined as: n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index."
  },
  {
    "id": "igcse-phys-q-extra-149",
    "subtopicId": "igcse-phys-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Thin Converging & Diverging Lenses\" (3.2 Light, Lenses, Total Internal Reflection & EM Spectrum).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. A thin converging (convex) lens bends parallel rays to meet at the principal focus F; focal length f is the distance from the optical centre to F. 2. Ray diagram rules for a converging lens: (1) Ray parallel to principal axis refracts through F; (2) Ray through optical centre continues straight undeviated.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "A thin converging (convex) lens bends parallel rays to meet at the principal focus F; focal length f is the distance from the optical centre to F."
        },
        {
          "id": "mp2",
          "markDescription": "Ray diagram rules for a converging lens: (1) Ray parallel to principal axis refracts through F; (2) Ray through optical centre continues straight undeviated."
        }
      ]
    },
    "explanation": "From Thin Converging & Diverging Lenses: A thin converging (convex) lens bends parallel rays to meet at the principal focus F; focal length f is the distance from the optical centre to F."
  },
  {
    "id": "igcse-phys-q-extra-150",
    "subtopicId": "igcse-phys-3-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.2 Light, Lenses, Total Internal Reflection & EM Spectrum.",
    "options": [
      "Apply n = sin i / sin r and sin c = 1 / n, and state the two conditions required for Total Internal Reflection.",
      "In Light, Lenses, Total Internal Reflection & EM Spectrum, standard unit conversions are never required before applying formulas.",
      "Construct converging lens ray diagrams and distinguish real vs virtual images (including magnifying glass and eye correction).",
      "Snell’s Law and Total internal reflection always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply n = sin i / sin r and sin c = 1 / n, and state the two conditions required for Total Internal Reflection.\" and \"Construct converging lens ray diagrams and distinguish real vs virtual images (including magnifying glass and eye correction).\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-151",
    "subtopicId": "igcse-phys-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.2 (Light, Lenses, Total Internal Reflection & EM Spectrum)?",
    "options": [
      "Angles of incidence i and refraction r are ALWAYS measured from the NORMAL (the 90° dotted line), NEVER from the glass surface!",
      "Always omit units and rounding in Light, Lenses, Total Internal Reflection & EM Spectrum calculations.",
      "Never show intermediate working steps in 3.2 questions.",
      "Assume Snell’s Law is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Angles of incidence i and refraction r are ALWAYS measured from the NORMAL (the 90° dotted line), NEVER from the glass surface!"
  },
  {
    "id": "igcse-phys-q-extra-153",
    "subtopicId": "igcse-phys-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 3.3 (Sound Waves, Echoes & Ultrasound), which of the following is the accurate definition of \"Audible range\"?",
    "options": [
      "Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz.",
      "The inverse ratio of Ultrasound measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Sound Waves, Echoes & Ultrasound.",
      "An experimental error caused by neglecting unit conversions in Production, Transmission & Speed of Sound."
    ],
    "correctIndex": 0,
    "explanation": "Audible range is defined as: Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz."
  },
  {
    "id": "igcse-phys-q-extra-154",
    "subtopicId": "igcse-phys-3-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Pitch, Loudness & Ultrasound Applications\" (3.3 Sound Waves, Echoes & Ultrasound).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz). 2. Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz)."
        },
        {
          "id": "mp2",
          "markDescription": "Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace)."
        }
      ]
    },
    "explanation": "From Pitch, Loudness & Ultrasound Applications: Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz)."
  },
  {
    "id": "igcse-phys-q-extra-155",
    "subtopicId": "igcse-phys-3-3",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 3.3 Sound Waves, Echoes & Ultrasound.",
    "options": [
      "Explain why sound cannot travel in a vacuum and why it travels fastest in solids.",
      "In Sound Waves, Echoes & Ultrasound, standard unit conversions are never required before applying formulas.",
      "Calculate echo and sonar distances accurately using 2d = v × t.",
      "Audible range and Ultrasound always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Explain why sound cannot travel in a vacuum and why it travels fastest in solids.\" and \"Calculate echo and sonar distances accurately using 2d = v × t.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-156",
    "subtopicId": "igcse-phys-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 3.3 (Sound Waves, Echoes & Ultrasound)?",
    "options": [
      "In echo and sonar calculations, forgetting to DIVIDE BY 2 (or multiply distance by 2) is the #1 error — remember the pulse goes out AND bounces back!",
      "Always omit units and rounding in Sound Waves, Echoes & Ultrasound calculations.",
      "Never show intermediate working steps in 3.3 questions.",
      "Assume Audible range is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "In echo and sonar calculations, forgetting to DIVIDE BY 2 (or multiply distance by 2) is the #1 error — remember the pulse goes out AND bounces back!"
  },
  {
    "id": "igcse-phys-q-extra-158",
    "subtopicId": "igcse-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.1 (Electric Charge, Current, EMF, Potential Difference & Resistance), which of the following is the accurate definition of \"Electric current\"?",
    "options": [
      "Rate of flow of charge: I = Q ÷ t, measured in amperes (A).",
      "The inverse ratio of Potential difference measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Electric Charge, Current, EMF, Potential Difference & Resistance.",
      "An experimental error caused by neglecting unit conversions in Electrostatics, Current & Charge (Q = It)."
    ],
    "correctIndex": 0,
    "explanation": "Electric current is defined as: Rate of flow of charge: I = Q ÷ t, measured in amperes (A)."
  },
  {
    "id": "igcse-phys-q-extra-159",
    "subtopicId": "igcse-phys-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"EMF, Potential Difference & Ohm’s Law (V = IR)\" (4.1 Electric Charge, Current, EMF, Potential Difference & Resistance).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C). 2. Potential difference (p.d., V) is the work done by unit charge passing through a component: V = W ÷ Q. Voltmeters are connected in PARALLEL; ammeters in SERIES.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C)."
        },
        {
          "id": "mp2",
          "markDescription": "Potential difference (p.d., V) is the work done by unit charge passing through a component: V = W ÷ Q. Voltmeters are connected in PARALLEL; ammeters in SERIES."
        }
      ]
    },
    "explanation": "From EMF, Potential Difference & Ohm’s Law (V = IR): Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C)."
  },
  {
    "id": "igcse-phys-q-extra-160",
    "subtopicId": "igcse-phys-4-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.1 Electric Charge, Current, EMF, Potential Difference & Resistance.",
    "options": [
      "Apply Q = It, V = W/Q, V = IR, P = IV, and E = IVt with correct SI and kWh units.",
      "In Electric Charge, Current, EMF, Potential Difference & Resistance, standard unit conversions are never required before applying formulas.",
      "Sketch and explain I–V graphs for an ohmic resistor, filament lamp, and diode.",
      "Electric current and Potential difference always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply Q = It, V = W/Q, V = IR, P = IV, and E = IVt with correct SI and kWh units.\" and \"Sketch and explain I–V graphs for an ohmic resistor, filament lamp, and diode.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-161",
    "subtopicId": "igcse-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.1 (Electric Charge, Current, EMF, Potential Difference & Resistance)?",
    "options": [
      "Never say \"positive charges moved onto the cloth\" during static charging — ONLY electrons transfer between rubbed insulators!",
      "Always omit units and rounding in Electric Charge, Current, EMF, Potential Difference & Resistance calculations.",
      "Never show intermediate working steps in 4.1 questions.",
      "Assume Electric current is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never say \"positive charges moved onto the cloth\" during static charging — ONLY electrons transfer between rubbed insulators!"
  },
  {
    "id": "igcse-phys-q-extra-162",
    "subtopicId": "igcse-phys-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Electrical Power & Kilowatt-Hours\" for 4.1 Electric Charge, Current, EMF, Potential Difference & Resistance.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Electrical power: P = I × V = I²R = V² ÷ R (watts, W). Electrical energy transferred: E = P × t = I × V × t (joules, J).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Electrical power: P = I × V = I²R = V² ÷ R (watts, W)."
        },
        {
          "id": "mp2",
          "markDescription": "Electrical energy transferred: E = P × t = I × V × t (joules, J)."
        }
      ]
    },
    "explanation": "Electrical power: P = I × V = I²R = V² ÷ R (watts, W)."
  },
  {
    "id": "igcse-phys-q-extra-163",
    "subtopicId": "igcse-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.2 (Series & Parallel Circuits, Potential Dividers & Mains Safety), which of the following is the accurate definition of \"Parallel circuit\"?",
    "options": [
      "Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced.",
      "The inverse ratio of LDR measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Series & Parallel Circuits, Potential Dividers & Mains Safety.",
      "An experimental error caused by neglecting unit conversions in Series vs Parallel Circuits."
    ],
    "correctIndex": 0,
    "explanation": "Parallel circuit is defined as: Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced."
  },
  {
    "id": "igcse-phys-q-extra-164",
    "subtopicId": "igcse-phys-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Sensing Components & Potential Dividers\" (4.2 Series & Parallel Circuits, Potential Dividers & Mains Safety).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. NTC Thermistor: As temperature increases, its resistance decreases (used in fire alarms and incubators). 2. Light-Dependent Resistor (LDR): As light intensity INCREASES, its resistance DECREASES (bright light → low R; darkness → high R; used in automatic street lamps).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "NTC Thermistor: As temperature increases, its resistance decreases (used in fire alarms and incubators)."
        },
        {
          "id": "mp2",
          "markDescription": "Light-Dependent Resistor (LDR): As light intensity INCREASES, its resistance DECREASES (bright light → low R; darkness → high R; used in automatic street lamps)."
        }
      ]
    },
    "explanation": "From Sensing Components & Potential Dividers: NTC Thermistor: As temperature increases, its resistance decreases (used in fire alarms and incubators)."
  },
  {
    "id": "igcse-phys-q-extra-165",
    "subtopicId": "igcse-phys-4-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.2 Series & Parallel Circuits, Potential Dividers & Mains Safety.",
    "options": [
      "Calculate combined resistance in series (R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂).",
      "In Series & Parallel Circuits, Potential Dividers & Mains Safety, standard unit conversions are never required before applying formulas.",
      "Use V₁/V₂ = R₁/R₂ to explain thermistor and LDR potential-divider sensing circuits.",
      "Parallel circuit and LDR always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Calculate combined resistance in series (R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂).\" and \"Use V₁/V₂ = R₁/R₂ to explain thermistor and LDR potential-divider sensing circuits.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-166",
    "subtopicId": "igcse-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.2 (Series & Parallel Circuits, Potential Dividers & Mains Safety)?",
    "options": [
      "Never put a switch or fuse in the neutral wire — even when open, the appliance would remain connected to the live 230 V supply and deliver a lethal shock!",
      "Always omit units and rounding in Series & Parallel Circuits, Potential Dividers & Mains Safety calculations.",
      "Never show intermediate working steps in 4.2 questions.",
      "Assume Parallel circuit is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never put a switch or fuse in the neutral wire — even when open, the appliance would remain connected to the live 230 V supply and deliver a lethal shock!"
  },
  {
    "id": "igcse-phys-q-extra-168",
    "subtopicId": "igcse-phys-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 4.3 (Magnetism, Motor Effect, EM Induction & Transformers), which of the following is the accurate definition of \"Motor effect\"?",
    "options": [
      "Force experienced by a current-carrying wire placed across a magnetic field.",
      "The inverse ratio of Lenz’s Law measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Magnetism, Motor Effect, EM Induction & Transformers.",
      "An experimental error caused by neglecting unit conversions in Magnetic Fields, Electromagnets & The Motor Effect."
    ],
    "correctIndex": 0,
    "explanation": "Motor effect is defined as: Force experienced by a current-carrying wire placed across a magnetic field."
  },
  {
    "id": "igcse-phys-q-extra-169",
    "subtopicId": "igcse-phys-4-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Electromagnetic Induction & AC Generators\" (4.3 Magnetism, Motor Effect, EM Induction & Transformers).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends. 2. Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends."
        },
        {
          "id": "mp2",
          "markDescription": "Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil."
        }
      ]
    },
    "explanation": "From Electromagnetic Induction & AC Generators: Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends."
  },
  {
    "id": "igcse-phys-q-extra-170",
    "subtopicId": "igcse-phys-4-3",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 4.3 Magnetism, Motor Effect, EM Induction & Transformers.",
    "options": [
      "Apply Fleming’s Left-Hand Rule and explain the role of the split-ring commutator in a DC motor.",
      "In Magnetism, Motor Effect, EM Induction & Transformers, standard unit conversions are never required before applying formulas.",
      "Distinguish slip rings (AC generator) from split-ring commutators (DC motor) and explain Lenz’s Law.",
      "Motor effect and Lenz’s Law always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Apply Fleming’s Left-Hand Rule and explain the role of the split-ring commutator in a DC motor.\" and \"Distinguish slip rings (AC generator) from split-ring commutators (DC motor) and explain Lenz’s Law.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-171",
    "subtopicId": "igcse-phys-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 4.3 (Magnetism, Motor Effect, EM Induction & Transformers)?",
    "options": [
      "Never say \"high voltage reduces resistance of the cables\" — high voltage reduces CURRENT I, which slashes power loss via P = I²R!",
      "Always omit units and rounding in Magnetism, Motor Effect, EM Induction & Transformers calculations.",
      "Never show intermediate working steps in 4.3 questions.",
      "Assume Motor effect is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Never say \"high voltage reduces resistance of the cables\" — high voltage reduces CURRENT I, which slashes power loss via P = I²R!"
  },
  {
    "id": "igcse-phys-q-extra-173",
    "subtopicId": "igcse-phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.1 (The Nuclear Model of the Atom, Isotopes, Fission & Fusion), which of the following is the accurate definition of \"Nucleon number (A)\"?",
    "options": [
      "Total number of protons plus neutrons in an atomic nucleus.",
      "The inverse ratio of Isotope measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in The Nuclear Model of the Atom, Isotopes, Fission & Fusion.",
      "An experimental error caused by neglecting unit conversions in Rutherford Scattering & Subatomic Particles."
    ],
    "correctIndex": 0,
    "explanation": "Nucleon number (A) is defined as: Total number of protons plus neutrons in an atomic nucleus."
  },
  {
    "id": "igcse-phys-q-extra-174",
    "subtopicId": "igcse-phys-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Nuclide Notation & Isotopes\" (5.1 The Nuclear Model of the Atom, Isotopes, Fission & Fusion).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z. 2. Isotopes are atoms of the SAME element having the SAME number of protons (Z) but DIFFERENT numbers of neutrons (A − Z). Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n).",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z."
        },
        {
          "id": "mp2",
          "markDescription": "Isotopes are atoms of the SAME element having the SAME number of protons (Z) but DIFFERENT numbers of neutrons (A − Z). Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n)."
        }
      ]
    },
    "explanation": "From Nuclide Notation & Isotopes: Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z."
  },
  {
    "id": "igcse-phys-q-extra-175",
    "subtopicId": "igcse-phys-5-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.1 The Nuclear Model of the Atom, Isotopes, Fission & Fusion.",
    "options": [
      "Explain how Rutherford’s gold foil observations established the nuclear model of the atom.",
      "In The Nuclear Model of the Atom, Isotopes, Fission & Fusion, standard unit conversions are never required before applying formulas.",
      "Calculate proton, neutron, and electron counts from nuclide notation and define isotopes.",
      "Nucleon number (A) and Isotope always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Explain how Rutherford’s gold foil observations established the nuclear model of the atom.\" and \"Calculate proton, neutron, and electron counts from nuclide notation and define isotopes.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-176",
    "subtopicId": "igcse-phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.1 (The Nuclear Model of the Atom, Isotopes, Fission & Fusion)?",
    "options": [
      "Do not mix up fission and fusion! Fission = Splitting (like a fissure/crack); Fusion = Fusing/joining light nuclei together.",
      "Always omit units and rounding in The Nuclear Model of the Atom, Isotopes, Fission & Fusion calculations.",
      "Never show intermediate working steps in 5.1 questions.",
      "Assume Nucleon number (A) is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Do not mix up fission and fusion! Fission = Splitting (like a fissure/crack); Fusion = Fusing/joining light nuclei together."
  },
  {
    "id": "igcse-phys-q-extra-177",
    "subtopicId": "igcse-phys-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Nuclear Fission & Nuclear Fusion\" for 5.1 The Nuclear Model of the Atom, Isotopes, Fission & Fusion.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators). Nuclear FUSION: Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators)."
        },
        {
          "id": "mp2",
          "markDescription": "Nuclear FUSION: Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg."
        }
      ]
    },
    "explanation": "Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators)."
  },
  {
    "id": "igcse-phys-q-extra-178",
    "subtopicId": "igcse-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 5.2 (Radioactive Decay (Alpha, Beta, Gamma) & Half-Life), which of the following is the accurate definition of \"Alpha particle\"?",
    "options": [
      "Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper).",
      "The inverse ratio of Beta particle measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Radioactive Decay (Alpha, Beta, Gamma) & Half-Life.",
      "An experimental error caused by neglecting unit conversions in Properties of Alpha, Beta & Gamma Radiation."
    ],
    "correctIndex": 0,
    "explanation": "Alpha particle is defined as: Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper)."
  },
  {
    "id": "igcse-phys-q-extra-179",
    "subtopicId": "igcse-phys-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Balanced Nuclear Decay Equations\" (5.2 Radioactive Decay (Alpha, Beta, Gamma) & Half-Life).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation. 2. Alpha decay (loses 2p and 2n): ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation."
        },
        {
          "id": "mp2",
          "markDescription": "Alpha decay (loses 2p and 2n): ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He."
        }
      ]
    },
    "explanation": "From Balanced Nuclear Decay Equations: Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation."
  },
  {
    "id": "igcse-phys-q-extra-180",
    "subtopicId": "igcse-phys-5-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 5.2 Radioactive Decay (Alpha, Beta, Gamma) & Half-Life.",
    "options": [
      "Compare α, β, and γ radiation by nature, charge, penetration, ionising power, and field deflection.",
      "In Radioactive Decay (Alpha, Beta, Gamma) & Half-Life, standard unit conversions are never required before applying formulas.",
      "Balance alpha and beta nuclear decay equations accurately.",
      "Alpha particle and Beta particle always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Compare α, β, and γ radiation by nature, charge, penetration, ionising power, and field deflection.\" and \"Balance alpha and beta nuclear decay equations accurately.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-181",
    "subtopicId": "igcse-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 5.2 (Radioactive Decay (Alpha, Beta, Gamma) & Half-Life)?",
    "options": [
      "In beta-minus decay, Z INCREASES by 1 (not decreases!) because (Z + 1) + (−1) = Z on the right-hand side.",
      "Always omit units and rounding in Radioactive Decay (Alpha, Beta, Gamma) & Half-Life calculations.",
      "Never show intermediate working steps in 5.2 questions.",
      "Assume Alpha particle is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "In beta-minus decay, Z INCREASES by 1 (not decreases!) because (Z + 1) + (−1) = Z on the right-hand side."
  },
  {
    "id": "igcse-phys-q-extra-183",
    "subtopicId": "igcse-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.1 (Earth, The Solar System & Orbital Motion), which of the following is the accurate definition of \"Orbital speed\"?",
    "options": [
      "Average speed along a circular orbit: v = 2πr ÷ T.",
      "The inverse ratio of Accretion measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Earth, The Solar System & Orbital Motion.",
      "An experimental error caused by neglecting unit conversions in Earth’s Motion, Seasons & The Moon."
    ],
    "correctIndex": 0,
    "explanation": "Orbital speed is defined as: Average speed along a circular orbit: v = 2πr ÷ T."
  },
  {
    "id": "igcse-phys-q-extra-184",
    "subtopicId": "igcse-phys-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"The Solar System & Accretion Model\" (6.1 Earth, The Solar System & Orbital Motion).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Order of the 8 planets from the Sun: Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants). 2. Accretion model of Solar System formation: A rotating nebula of gas and dust collapsed under gravity into a swirling accretion disc. The hot dense core formed the Sun; near the Sun only rocky/metallic elements with high melting points condensed (rocky planets), whereas further out cooler gases and ices clumped into gas giants.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Order of the 8 planets from the Sun: Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants)."
        },
        {
          "id": "mp2",
          "markDescription": "Accretion model of Solar System formation: A rotating nebula of gas and dust collapsed under gravity into a swirling accretion disc. The hot dense core formed the Sun; near the Sun only rocky/metallic elements with high melting points condensed (rocky planets), whereas further out cooler gases and ices clumped into gas giants."
        }
      ]
    },
    "explanation": "From The Solar System & Accretion Model: Order of the 8 planets from the Sun: Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants)."
  },
  {
    "id": "igcse-phys-q-extra-185",
    "subtopicId": "igcse-phys-6-1",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.1 Earth, The Solar System & Orbital Motion.",
    "options": [
      "Explain day/night, the seasons (23.5° tilt), and lunar phases clearly.",
      "In Earth, The Solar System & Orbital Motion, standard unit conversions are never required before applying formulas.",
      "Explain why inner planets are rocky while outer planets are gaseous using the accretion model.",
      "Orbital speed and Accretion always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Explain day/night, the seasons (23.5° tilt), and lunar phases clearly.\" and \"Explain why inner planets are rocky while outer planets are gaseous using the accretion model.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-186",
    "subtopicId": "igcse-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.1 (Earth, The Solar System & Orbital Motion)?",
    "options": [
      "Seasons are NOT caused by Earth getting closer to the Sun — they are caused by Earth’s 23.5° axial tilt changing the angle of sunlight and daylight hours!",
      "Always omit units and rounding in Earth, The Solar System & Orbital Motion calculations.",
      "Never show intermediate working steps in 6.1 questions.",
      "Assume Orbital speed is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Seasons are NOT caused by Earth getting closer to the Sun — they are caused by Earth’s 23.5° axial tilt changing the angle of sunlight and daylight hours!"
  },
  {
    "id": "igcse-phys-q-extra-187",
    "subtopicId": "igcse-phys-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Explain the core rule covered in \"Orbital Speed & Elliptical Comet Orbits\" for 6.1 Earth, The Solar System & Orbital Motion.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Average orbital speed for a circular orbit of radius r and orbital period T: v = (2 × π × r) ÷ T. As orbital radius increases across the Solar System, the Sun’s gravitational pull weakens, so outer planets orbit much MORE SLOWLY and have much LONGER orbital periods (years) than inner planets.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Average orbital speed for a circular orbit of radius r and orbital period T: v = (2 × π × r) ÷ T."
        },
        {
          "id": "mp2",
          "markDescription": "As orbital radius increases across the Solar System, the Sun’s gravitational pull weakens, so outer planets orbit much MORE SLOWLY and have much LONGER orbital periods (years) than inner planets."
        }
      ]
    },
    "explanation": "Average orbital speed for a circular orbit of radius r and orbital period T: v = (2 × π × r) ÷ T."
  },
  {
    "id": "igcse-phys-q-extra-188",
    "subtopicId": "igcse-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In 6.2 (Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)), which of the following is the accurate definition of \"Main sequence star\"?",
    "options": [
      "Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion.",
      "The inverse ratio of Red-shift measured under zero-load conditions.",
      "A constant quantity that remains unaffected by any change in Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law).",
      "An experimental error caused by neglecting unit conversions in Light-Years & Life Cycle of Stars."
    ],
    "correctIndex": 0,
    "explanation": "Main sequence star is defined as: Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion."
  },
  {
    "id": "igcse-phys-q-extra-189",
    "subtopicId": "igcse-phys-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State two key principles or relationships from \"Red-Shift, CMBR & The Big Bang Theory\" (6.2 Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)).",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1. Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us. 2. Key observation: The FURTHER away a galaxy is, the GREATER its red-shift — meaning distant galaxies are receding FASTER than closer ones, proving the Universe is expanding.",
      "markPoints": [
        {
          "id": "mp1",
          "markDescription": "Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us."
        },
        {
          "id": "mp2",
          "markDescription": "Key observation: The FURTHER away a galaxy is, the GREATER its red-shift — meaning distant galaxies are receding FASTER than closer ones, proving the Universe is expanding."
        }
      ]
    },
    "explanation": "From Red-Shift, CMBR & The Big Bang Theory: Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us."
  },
  {
    "id": "igcse-phys-q-extra-190",
    "subtopicId": "igcse-phys-6-2",
    "type": "multi-select",
    "marks": 2,
    "selectCount": 2,
    "prompt": "Select the TWO correct statements regarding 6.2 Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law).",
    "options": [
      "Trace the complete stellar life cycle for both Sun-sized stars and high-mass stars.",
      "In Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law), standard unit conversions are never required before applying formulas.",
      "Explain how galactic red-shift and CMBR support the Big Bang Theory.",
      "Main sequence star and Red-shift always have identical numerical values and units."
    ],
    "correctIndices": [
      0,
      2
    ],
    "explanation": "Both \"Trace the complete stellar life cycle for both Sun-sized stars and high-mass stars.\" and \"Explain how galactic red-shift and CMBR support the Big Bang Theory.\" are core specification points."
  },
  {
    "id": "igcse-phys-q-extra-191",
    "subtopicId": "igcse-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which exam advice applies directly to 6.2 (Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law))?",
    "options": [
      "Red-shift does NOT mean galaxies look bright red — it means their dark absorption spectral lines shift toward longer wavelengths relative to laboratory measurements on Earth.",
      "Always omit units and rounding in Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law) calculations.",
      "Never show intermediate working steps in 6.2 questions.",
      "Assume Main sequence star is always equal to 100 in every question."
    ],
    "correctIndex": 0,
    "explanation": "Red-shift does NOT mean galaxies look bright red — it means their dark absorption spectral lines shift toward longer wavelengths relative to laboratory measurements on Earth."
  }
];

export const IGCSE_PHYSICS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "igcse-phys-fc-1",
    "subtopicId": "igcse-phys-1-1",
    "front": "How do you find acceleration and distance from a speed–time graph?",
    "backBullets": [
      "Acceleration = Gradient (Δv ÷ Δt)",
      "Distance = Area under the graph (triangles + rectangles)"
    ]
  },
  {
    "id": "igcse-phys-fc-2",
    "subtopicId": "igcse-phys-1-2",
    "front": "State Hooke’s Law and define the spring constant k.",
    "backBullets": [
      "F = k × x (up to the limit of proportionality)",
      "k = F ÷ x is the force per unit extension (N/m)"
    ]
  },
  {
    "id": "igcse-phys-fc-3",
    "subtopicId": "igcse-phys-1-3",
    "front": "How do crumple zones and airbags protect passengers using impulse?",
    "backBullets": [
      "Impulse FΔt = Δp (same change in momentum)",
      "Increasing impact duration Δt lowers the average force F = Δp ÷ Δt on passengers"
    ]
  },
  {
    "id": "igcse-phys-fc-4",
    "subtopicId": "igcse-phys-1-3",
    "front": "State the equation for pressure beneath a liquid surface.",
    "backBullets": [
      "Δp = ρ g Δh",
      "ρ = density (kg/m³), g = 9.8 N/kg, Δh = depth (m)"
    ]
  },
  {
    "id": "igcse-phys-fc-5",
    "subtopicId": "igcse-phys-1-4",
    "front": "Which 3 energy resources do NOT originally come from the Sun?",
    "backBullets": [
      "Geothermal (hot rocks inside Earth)",
      "Nuclear (uranium fission)",
      "Tidal (Moon’s gravitational pull)"
    ]
  },
  {
    "id": "igcse-phys-fc-6",
    "subtopicId": "igcse-phys-2-1",
    "front": "How do you convert Celsius (°C) to Kelvin (K), and what is Boyle’s Law?",
    "backBullets": [
      "T(K) = θ(°C) + 273 (0 K = −273 °C)",
      "Boyle’s Law at constant T: p₁V₁ = p₂V₂"
    ]
  },
  {
    "id": "igcse-phys-fc-7",
    "subtopicId": "igcse-phys-2-2",
    "front": "Why does evaporation cool the remaining liquid?",
    "backBullets": [
      "The highest kinetic-energy molecules escape from the surface",
      "Average kinetic energy of remaining molecules drops → temperature falls"
    ]
  },
  {
    "id": "igcse-phys-fc-8",
    "subtopicId": "igcse-phys-3-1",
    "front": "When is wave diffraction through a gap strongest?",
    "backBullets": [
      "When the gap width is approximately equal to the wavelength (gap ≈ λ)"
    ]
  },
  {
    "id": "igcse-phys-fc-9",
    "subtopicId": "igcse-phys-3-2",
    "front": "State Snell’s Law and the critical angle equation.",
    "backBullets": [
      "n = sin i ÷ sin r",
      "sin c = 1 ÷ n (for TIR when light travels from denser to less dense and i > c)"
    ]
  },
  {
    "id": "igcse-phys-fc-10",
    "subtopicId": "igcse-phys-3-3",
    "front": "What is the human hearing range and what defines ultrasound?",
    "backBullets": [
      "Audible range: 20 Hz to 20,000 Hz (20 kHz)",
      "Ultrasound: sound waves with frequency > 20 kHz"
    ]
  },
  {
    "id": "igcse-phys-fc-11",
    "subtopicId": "igcse-phys-4-1",
    "front": "How does doubling a wire’s diameter change its resistance?",
    "backBullets": [
      "Doubling diameter increases cross-sectional area by ×4 (A = πr²)",
      "Since R ∝ 1/A, resistance drops to ¼ of its original value"
    ]
  },
  {
    "id": "igcse-phys-fc-12",
    "subtopicId": "igcse-phys-4-2",
    "front": "How do NTC thermistors and LDRs behave as temperature or light increases?",
    "backBullets": [
      "Both decrease resistance when their input increases",
      "Higher T → lower R_thermistor; Brighter light → lower R_LDR"
    ]
  },
  {
    "id": "igcse-phys-fc-13",
    "subtopicId": "igcse-phys-4-3",
    "front": "Why does the National Grid transmit electricity at very high voltage?",
    "backBullets": [
      "For fixed power P = VI, step-up transformers raise V and sharply lower current I",
      "Lower I drastically reduces cable heating loss P_loss = I²R"
    ]
  },
  {
    "id": "igcse-phys-fc-14",
    "subtopicId": "igcse-phys-5-1",
    "front": "What did Rutherford’s gold foil experiment prove?",
    "backBullets": [
      "Most α passed straight through → atom is mostly empty space",
      "A few deflected >90° → tiny, dense, positively charged nucleus"
    ]
  },
  {
    "id": "igcse-phys-fc-15",
    "subtopicId": "igcse-phys-5-2",
    "front": "What happens to nucleon number A and proton number Z in alpha vs beta-minus decay?",
    "backBullets": [
      "Alpha (⁴₂He): A decreases by 4, Z decreases by 2",
      "Beta-minus (⁰₋₁e): A stays unchanged, Z INCREASES by 1"
    ]
  },
  {
    "id": "igcse-phys-fc-16",
    "subtopicId": "igcse-phys-6-1",
    "front": "State the orbital speed formula.",
    "backBullets": [
      "v = 2πr ÷ T",
      "r = orbital radius (m), T = orbital period (s)"
    ]
  },
  {
    "id": "igcse-phys-fc-17",
    "subtopicId": "igcse-phys-6-2",
    "front": "State Hubble’s Law and how it gives the age of the Universe.",
    "backBullets": [
      "H₀ = v ÷ d (≈ 2.2 × 10⁻¹⁸ s⁻¹)",
      "Age of the Universe ≈ d ÷ v = 1 ÷ H₀ (~14 billion years)"
    ]
  },
  {
    "id": "igcse-phys-fc-extra-117",
    "subtopicId": "igcse-phys-1-1",
    "front": "1.1 Measurement Techniques, Scalars & Vectors: What are the essential exam points to remember?",
    "backBullets": [
      "Length is measured with rulers (to 1 mm), vernier callipers (to 0.1 mm), or micrometer screw gauges (to 0.01 mm). Always check for zero error and read perpendicular to the scale to avoid parallax error.",
      "To measure the period T of a pendulum accurately, time 20 complete oscillations with a stopwatch and divide the total time by 20 — this reduces the percentage error from human reaction time.",
      "A scalar quantity has magnitude (size) only: distance, speed, time, mass, energy, temperature, and density."
    ],
    "hint": "Think V for Vector = Value + direction arrow; S for Scalar = Size only."
  },
  {
    "id": "igcse-phys-fc-extra-118",
    "subtopicId": "igcse-phys-1-1",
    "front": "1.1 Speed, Velocity & Uniform Acceleration: What are the essential exam points to remember?",
    "backBullets": [
      "Average speed = total distance travelled ÷ total time taken: v = s ÷ t (SI unit: m/s). Velocity is speed in a specified direction.",
      "Acceleration is the rate of change of velocity: a = (v − u) ÷ t (SI unit: m/s²), where u is initial velocity and v is final velocity.",
      "Negative acceleration (deceleration) occurs when velocity decreases in the forward direction (e.g., braking from 24 m/s to 6 m/s in 6 s gives a = (6 − 24) ÷ 6 = −3.0 m/s²)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-119",
    "subtopicId": "igcse-phys-1-1",
    "front": "1.1 Interpreting Distance–Time & Speed–Time Graphs: What are the essential exam points to remember?",
    "backBullets": [
      "On a distance–time graph: gradient = speed; a horizontal line means the object is stationary; a straight sloped line means constant speed; an upward-curving slope means accelerating.",
      "On a speed–time (or velocity–time) graph: gradient = acceleration; a horizontal line above zero means constant speed; a downward straight line means uniform deceleration.",
      "The area under a speed–time graph equals the distance travelled. Split complex regions into rectangles (base × height) and triangles (½ × base × height)."
    ],
    "hint": "On a v–t graph: Gradient = Acceleration, Area = Distance (remember \"G-A, A-D\")."
  },
  {
    "id": "igcse-phys-fc-extra-120",
    "subtopicId": "igcse-phys-1-1",
    "front": "Define: Scalar (1.1)",
    "backBullets": [
      "A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-121",
    "subtopicId": "igcse-phys-1-2",
    "front": "1.2 Mass, Weight & Density: What are the essential exam points to remember?",
    "backBullets": [
      "Mass (kg) is a measure of the quantity of matter in an object and resists changes in motion (inertia). Mass stays constant everywhere in the Universe.",
      "Weight (N) is the gravitational force acting on a mass: W = m × g, where gravitational field strength g = W ÷ m ≈ 9.8 N/kg on Earth (~1.6 N/kg on the Moon).",
      "Density is mass per unit volume: ρ = m ÷ V (units: kg/m³ or g/cm³, where 1 g/cm³ = 1,000 kg/m³)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-122",
    "subtopicId": "igcse-phys-1-2",
    "front": "1.2 Hooke’s Law & Spring Constant: What are the essential exam points to remember?",
    "backBullets": [
      "Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: F = k × x.",
      "Spring constant k = F ÷ x (units: N/m or N/cm) represents the stiffness of the spring and equals the gradient of the straight-line region of a force–extension graph.",
      "Beyond the limit of proportionality (elastic limit), the graph curves, the spring deforms plastically, and it will not return to its original length when unloaded."
    ],
    "hint": "Always subtract the ORIGINAL unstretched length from the new length to get extension x before using F = kx."
  },
  {
    "id": "igcse-phys-fc-extra-123",
    "subtopicId": "igcse-phys-1-2",
    "front": "1.2 Newton’s Laws, Circular Motion & Terminal Velocity: What are the essential exam points to remember?",
    "backBullets": [
      "Newton’s First Law: If resultant force F = 0 N, a stationary object remains stationary and a moving object continues at constant speed in a straight line.",
      "Newton’s Second Law: Resultant force = mass × acceleration (F = m × a). Acceleration acts in the exact direction of the resultant force.",
      "Newton’s Third Law: Every action force has an equal and opposite reaction force acting on the two different interacting bodies."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-124",
    "subtopicId": "igcse-phys-1-2",
    "front": "Define: Density (1.2)",
    "backBullets": [
      "Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-125",
    "subtopicId": "igcse-phys-1-3",
    "front": "1.3 Moments, Principle of Moments & Centre of Gravity: What are the essential exam points to remember?",
    "backBullets": [
      "The moment of a force measures its turning effect about a pivot: Moment = Force × perpendicular distance from the pivot (M = F × d, unit: N m).",
      "For an object to be in complete equilibrium, two conditions must hold: (1) Zero resultant force, AND (2) Zero resultant moment (total clockwise moments = total anticlockwise moments about any pivot).",
      "Centre of gravity is the single point where the entire weight of an object appears to act. For an irregular lamina, hang it from two different pin holes with a plumb line; the intersection of the vertical lines marks the centre of gravity."
    ],
    "hint": "Think of a racing car: low to the ground (low CoG) and wide wheelbase (wide base) = maximum stability!"
  },
  {
    "id": "igcse-phys-fc-extra-126",
    "subtopicId": "igcse-phys-1-3",
    "front": "1.3 Momentum, Conservation & Impulse: What are the essential exam points to remember?",
    "backBullets": [
      "Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s).",
      "Principle of conservation of momentum: In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
      "Impulse is the change in momentum produced by a resultant force acting over time: Impulse = F × Δt = Δp = mv − mu."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-127",
    "subtopicId": "igcse-phys-1-3",
    "front": "1.3 Pressure in Solids & Liquids: What are the essential exam points to remember?",
    "backBullets": [
      "Pressure is force exerted per unit area: p = F ÷ A (SI unit: pascal, Pa, where 1 Pa = 1 N/m²). A sharp knife concentrates force over a tiny area for high pressure; snowshoes spread weight over a large area for low pressure.",
      "Pressure in a liquid increases with depth h, liquid density ρ, and gravitational field strength g: Δp = ρ × g × Δh. Pressure acts equally in all directions at a given depth.",
      "Hydraulic systems (e.g., car brakes) exploit the fact that liquids are incompressible, transmitting pressure equally: F₁ ÷ A₁ = F₂ ÷ A₂ (a small force on a small master piston creates a huge force on a large slave piston)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-128",
    "subtopicId": "igcse-phys-1-4",
    "front": "1.4 Energy Stores, Transfers & Mechanical Work: What are the essential exam points to remember?",
    "backBullets": [
      "Energy is stored in kinetic, gravitational potential, chemical, elastic (strain), nuclear, electrostatic, magnetic, and internal (thermal) stores.",
      "Energy is transferred between stores mechanically (forces doing work), electrically (currents), by heating (conduction/convection/radiation), or by waves (light/sound).",
      "Mechanical work done equals energy transferred when a force moves an object through distance d in the direction of the force: W = F × d = ΔE (unit: joule, J)."
    ],
    "hint": "Doubling speed quadruples kinetic energy (×4) because v is squared in Ek = ½mv²."
  },
  {
    "id": "igcse-phys-fc-extra-129",
    "subtopicId": "igcse-phys-1-4",
    "front": "1.4 Power & Efficiency: What are the essential exam points to remember?",
    "backBullets": [
      "Power is the rate of work done or energy transferred: P = W ÷ t = ΔE ÷ t (SI unit: watt, W, where 1 W = 1 J/s).",
      "Percentage efficiency = (Useful energy output ÷ Total energy input) × 100%, or equivalently (Useful power output ÷ Total power input) × 100%.",
      "No real machine can exceed 100% efficiency because friction and electrical resistance always dissipate some energy into thermal stores in the surroundings."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-130",
    "subtopicId": "igcse-phys-1-4",
    "front": "1.4 Renewable & Non-Renewable Energy Resources: What are the essential exam points to remember?",
    "backBullets": [
      "Non-renewable resources (coal, oil, natural gas, nuclear fission of uranium) are finite. Fossil fuels are reliable and high energy-density but release CO₂ (greenhouse gas) and SO₂ (acid rain). Nuclear produces no CO₂ during generation but creates long-lived radioactive waste.",
      "Renewable resources (solar PV, wind, hydroelectric, wave, tidal, geothermal, biofuels) are replenished naturally and have low running costs/carbon emissions.",
      "Trade-offs: Solar and wind are intermittent (weather-dependent); hydroelectric is reliable and fast-response but floods valleys; geothermal is reliable only in volcanic regions."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-131",
    "subtopicId": "igcse-phys-1-4",
    "front": "Define: Power (1.4)",
    "backBullets": [
      "Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-132",
    "subtopicId": "igcse-phys-2-1",
    "front": "2.1 States of Matter & Brownian Motion: What are the essential exam points to remember?",
    "backBullets": [
      "Solids: Particles tightly packed in a regular lattice, held by strong intermolecular forces, vibrating about fixed positions (fixed shape and volume).",
      "Liquids: Particles close together but irregularly arranged, sliding past one another (fixed volume, takes container shape).",
      "Gases: Particles far apart with negligible intermolecular forces, moving rapidly and randomly in all directions (compressible, fills container)."
    ],
    "hint": "Remember: Smoke particles are HUGE and slow; air molecules are TINY, invisible, and fast — collisions push the smoke randomly."
  },
  {
    "id": "igcse-phys-fc-extra-133",
    "subtopicId": "igcse-phys-2-1",
    "front": "2.1 Temperature, Absolute Zero & The Kelvin Scale: What are the essential exam points to remember?",
    "backBullets": [
      "Temperature is a measure of the average kinetic energy of the particles in a substance.",
      "Absolute zero (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure.",
      "Converting between Celsius and Kelvin: T (K) = θ (°C) + 273. For example, 27 °C = 300 K; 100 °C = 373 K."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-134",
    "subtopicId": "igcse-phys-2-1",
    "front": "2.1 Gas Pressure & Boyle’s Law (p₁V₁ = p₂V₂): What are the essential exam points to remember?",
    "backBullets": [
      "Gas pressure arises from millions of gas particles colliding with the container walls every second. Each collision changes a particle’s momentum, exerting a force on the wall (p = F ÷ A).",
      "Heating a fixed mass of gas at constant volume increases average particle kinetic energy and speed → particles hit the walls MORE FREQUENTLY and HARDER (greater momentum change per collision) → pressure increases.",
      "Boyle’s Law (constant temperature & fixed mass): Pressure is inversely proportional to volume: p × V = constant, so p₁V₁ = p₂V₂."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-135",
    "subtopicId": "igcse-phys-2-1",
    "front": "Define: Absolute zero (2.1)",
    "backBullets": [
      "0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-136",
    "subtopicId": "igcse-phys-2-2",
    "front": "2.2 Specific Heat Capacity & Latent Heat: What are the essential exam points to remember?",
    "backBullets": [
      "Internal energy is the sum of the random kinetic energies AND intermolecular potential energies of all particles in a body.",
      "Specific heat capacity (c) is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K): ΔE = m × c × ΔT (units of c: J/(kg °C)). Water has a very high c ≈ 4,200 J/(kg °C).",
      "During a change of state (melting or boiling), temperature remains CONSTANT on a heating curve even though energy is still supplied — this latent heat increases particles’ potential energy by weakening/breaking intermolecular bonds rather than increasing kinetic energy."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-137",
    "subtopicId": "igcse-phys-2-2",
    "front": "2.2 Thermal Expansion & Real-World Applications: What are the essential exam points to remember?",
    "backBullets": [
      "When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least.",
      "Practical consequences: Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter.",
      "Applications: Liquid-in-glass thermometers expand mercury/alcohol up a narrow capillary; bimetallic strips bend on heating (brass expands more than iron) to switch thermostats."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-138",
    "subtopicId": "igcse-phys-2-2",
    "front": "2.2 Conduction, Convection & Infrared Radiation: What are the essential exam points to remember?",
    "backBullets": [
      "Conduction (mainly in solids): Vibrating particles pass kinetic energy along a lattice. Metals are exceptional thermal conductors because DELOCALISED FREE ELECTRONS diffuse rapidly through the lattice and collide with distant metal ions.",
      "Convection (fluids — liquids & gases ONLY): Heated fluid expands, becomes LESS DENSE, and rises while cooler, denser fluid sinks to replace it, forming a convection current.",
      "Infrared (IR) radiation: Electromagnetic waves that require NO medium and can travel through the vacuum of space. Matt black surfaces are the BEST emitters and BEST absorbers of IR; shiny silver surfaces are the WORST emitters/absorbers and BEST reflectors."
    ],
    "hint": "Metals conduct via Free Electrons; Fluids convect via Density differences; Vacuum transfers ONLY by Radiation!"
  },
  {
    "id": "igcse-phys-fc-extra-139",
    "subtopicId": "igcse-phys-2-2",
    "front": "Define: Internal energy (2.2)",
    "backBullets": [
      "Total random kinetic and potential energy of all particles inside a system."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-140",
    "subtopicId": "igcse-phys-3-1",
    "front": "3.1 Transverse vs Longitudinal Waves & Wave Parameters: What are the essential exam points to remember?",
    "backBullets": [
      "Waves transfer ENERGY and information without transferring matter from place to place.",
      "Transverse waves: Vibrations are perpendicular (90°) to the direction of wave travel (examples: all electromagnetic waves, water surface waves, seismic S-waves).",
      "Longitudinal waves: Vibrations are parallel to wave travel, forming alternating high-pressure compressions and low-pressure rarefactions (examples: sound waves, ultrasound, seismic P-waves)."
    ],
    "hint": "Transverse has a T (perpendicular 90° crossbar); Longitudinal is aLong the same line (parallel)."
  },
  {
    "id": "igcse-phys-fc-extra-141",
    "subtopicId": "igcse-phys-3-1",
    "front": "3.1 The Wave Equation (v = fλ): What are the essential exam points to remember?",
    "backBullets": [
      "Wave speed (m/s) = frequency (Hz) × wavelength (m): v = f × λ.",
      "Also link period and frequency: T = 1 ÷ f, so a wave of frequency 50 Hz has a time period T = 0.02 s.",
      "Worked example: A radio wave travels at 3.0 × 10⁸ m/s with frequency 100 MHz (1.0 × 10⁸ Hz). Wavelength λ = v ÷ f = (3.0 × 10⁸) ÷ (1.0 × 10⁸) = 3.0 m."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-142",
    "subtopicId": "igcse-phys-3-1",
    "front": "3.1 Reflection, Refraction & Diffraction in a Ripple Tank: What are the essential exam points to remember?",
    "backBullets": [
      "Reflection: Wavefronts bounce off a barrier with angle of incidence = angle of reflection (i = r); speed, frequency, and wavelength stay unchanged.",
      "Refraction: Water waves moving from deep to shallow water SLOW DOWN, their wavelength DECREASES, and if they hit the boundary at an angle they bend TOWARD the normal (frequency stays constant).",
      "Diffraction: Spreading of waves as they pass through a gap or around an obstacle. Diffraction is MAXIMUM when the gap width is roughly equal to the wavelength (gap ≈ λ)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-143",
    "subtopicId": "igcse-phys-3-1",
    "front": "Define: Transverse wave (3.1)",
    "backBullets": [
      "Wave whose oscillations are perpendicular to the direction of energy transfer."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-144",
    "subtopicId": "igcse-phys-3-2",
    "front": "3.2 Reflection, Snell’s Law & Total Internal Reflection: What are the essential exam points to remember?",
    "backBullets": [
      "Plane mirrors form an image that is virtual, upright, same size as the object, laterally inverted, and the same distance behind the mirror as the object is in front.",
      "Refractive index n = speed of light in vacuum ÷ speed in medium = sin i ÷ sin r (where i is angle in air and r is angle in glass/water). Light slows and bends TOWARD the normal entering denser glass, and AWAY leaving into air.",
      "Total Internal Reflection (TIR) occurs ONLY when two conditions are met: (1) Light travels from a denser to a less dense medium (e.g., glass → air), AND (2) Angle of incidence exceeds the critical angle c (i > c)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-145",
    "subtopicId": "igcse-phys-3-2",
    "front": "3.2 Thin Converging & Diverging Lenses: What are the essential exam points to remember?",
    "backBullets": [
      "A thin converging (convex) lens bends parallel rays to meet at the principal focus F; focal length f is the distance from the optical centre to F.",
      "Ray diagram rules for a converging lens: (1) Ray parallel to principal axis refracts through F; (2) Ray through optical centre continues straight undeviated.",
      "Object beyond 2F → real, inverted, diminished image (camera/eye). Object between F and 2F → real, inverted, magnified image (projector). Object closer than F → VIRTUAL, upright, magnified image (magnifying glass)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-146",
    "subtopicId": "igcse-phys-3-2",
    "front": "3.2 Dispersion & The Electromagnetic Spectrum: What are the essential exam points to remember?",
    "backBullets": [
      "Dispersion: A glass prism splits white light into ROYGBIV because violet light slows down slightly more (higher n) than red light and refracts through a larger angle.",
      "All EM waves are transverse and travel through a vacuum at c = 3.0 × 10⁸ m/s. Order of INCREASING frequency (decreasing wavelength): Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma rays.",
      "Uses: Radio (broadcasting, RFID), Microwaves (satellites, mobile phones, cooking), Infrared (thermal imaging, optical fibres, remotes), UV (security ink, sterilising water), X-rays (medical bone imaging, baggage scanners), Gamma (sterilising surgical kit, cancer radiotherapy)."
    ],
    "hint": "Remember EM order (long λ → short λ): Rich Men In Vegas Use X-ray Glasses (Radio, Micro, IR, Visible, UV, X-ray, Gamma)."
  },
  {
    "id": "igcse-phys-fc-extra-147",
    "subtopicId": "igcse-phys-3-2",
    "front": "Define: Snell’s Law (3.2)",
    "backBullets": [
      "n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-148",
    "subtopicId": "igcse-phys-3-3",
    "front": "3.3 Production, Transmission & Speed of Sound: What are the essential exam points to remember?",
    "backBullets": [
      "Sound is produced by vibrating sources and travels as a LONGITUDINAL wave of compressions and rarefactions. Sound CANNOT travel through a vacuum (demonstrated by the bell-in-a-vacuum-jar experiment).",
      "Speed of sound depends on how closely packed particles are: fastest in solids (~5,000 m/s in steel), moderate in liquids (~1,500 m/s in water), slowest in gases (~330–340 m/s in air at room temperature).",
      "Measuring speed of sound via echoes: Clap in front of a wall at distance d and time the echo t; the sound travels THERE AND BACK (total distance = 2d), so v = 2d ÷ t."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-149",
    "subtopicId": "igcse-phys-3-3",
    "front": "3.3 Pitch, Loudness & Ultrasound Applications: What are the essential exam points to remember?",
    "backBullets": [
      "Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz).",
      "Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace).",
      "Ultrasound is sound with a frequency GREATER than 20 kHz (above human hearing)."
    ],
    "hint": "Frequency = Pitch (more waves squeezed on screen); Amplitude = Loudness (taller wave peaks)."
  },
  {
    "id": "igcse-phys-fc-extra-150",
    "subtopicId": "igcse-phys-3-3",
    "front": "Define: Audible range (3.3)",
    "backBullets": [
      "Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-151",
    "subtopicId": "igcse-phys-3-3",
    "front": "Define: Ultrasound (3.3)",
    "backBullets": [
      "Sound waves with frequency exceeding 20 kHz, used in medical imaging and flaw detection."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-152",
    "subtopicId": "igcse-phys-4-1",
    "front": "4.1 Electrostatics, Current & Charge (Q = It): What are the essential exam points to remember?",
    "backBullets": [
      "Charging insulators by friction transfers NEGATIVELY CHARGED ELECTRONS only (protons never move in solids). Gaining electrons makes an object negative; losing electrons leaves it positive. Like charges repel; opposite charges attract.",
      "An electric field is a region where an electric charge experiences a force; field lines always point away from positive charges and toward negative charges.",
      "Electric current (I, amperes A) is the rate of flow of electric charge: I = Q ÷ t (or Q = I × t, with charge Q in coulombs, C)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-153",
    "subtopicId": "igcse-phys-4-1",
    "front": "4.1 EMF, Potential Difference & Ohm’s Law (V = IR): What are the essential exam points to remember?",
    "backBullets": [
      "Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C).",
      "Potential difference (p.d., V) is the work done by unit charge passing through a component: V = W ÷ Q. Voltmeters are connected in PARALLEL; ammeters in SERIES.",
      "Resistance R = V ÷ I (unit: ohm, Ω). For a uniform metal wire at constant temperature, R is directly proportional to length L and inversely proportional to cross-sectional area A (doubling diameter quadruples area, so R drops to ¼!)."
    ],
    "hint": "Longer wire = more obstacles (higher R); Thicker wire = wider motorway (lower R)."
  },
  {
    "id": "igcse-phys-fc-extra-154",
    "subtopicId": "igcse-phys-4-1",
    "front": "4.1 Electrical Power & Kilowatt-Hours: What are the essential exam points to remember?",
    "backBullets": [
      "Electrical power: P = I × V = I²R = V² ÷ R (watts, W).",
      "Electrical energy transferred: E = P × t = I × V × t (joules, J).",
      "Domestic electricity bills measure energy in kilowatt-hours (kWh): 1 kWh = 1,000 W × 3,600 s = 3.6 MJ. Cost = Power (kW) × Time (h) × Price per kWh."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-155",
    "subtopicId": "igcse-phys-4-1",
    "front": "Define: Electric current (4.1)",
    "backBullets": [
      "Rate of flow of charge: I = Q ÷ t, measured in amperes (A)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-156",
    "subtopicId": "igcse-phys-4-2",
    "front": "4.2 Series vs Parallel Circuits: What are the essential exam points to remember?",
    "backBullets": [
      "Series circuits: Current is identical at every point (I = I₁ = I₂). Supply p.d. is shared across components (V_total = V₁ + V₂). Combined resistance adds up: R_total = R₁ + R₂.",
      "Parallel circuits: Potential difference is identical across every branch (V = V₁ = V₂). Current from the source equals the sum of branch currents (I_total = I₁ + I₂).",
      "Combined resistance of two resistors in parallel: 1/R_total = 1/R₁ + 1/R₂ (or R_total = (R₁R₂)/(R₁+R₂)). R_total is ALWAYS smaller than the smallest individual branch resistor!"
    ],
    "hint": "Series = Same current, Shared voltage; Parallel = Same voltage, Split current, Lower total R."
  },
  {
    "id": "igcse-phys-fc-extra-157",
    "subtopicId": "igcse-phys-4-2",
    "front": "4.2 Sensing Components & Potential Dividers: What are the essential exam points to remember?",
    "backBullets": [
      "NTC Thermistor: As temperature increases, its resistance decreases (used in fire alarms and incubators).",
      "Light-Dependent Resistor (LDR): As light intensity INCREASES, its resistance DECREASES (bright light → low R; darkness → high R; used in automatic street lamps).",
      "Potential divider: Two resistors R₁ and R₂ in series divide the supply voltage in the exact ratio of their resistances: V₁ ÷ V₂ = R₁ ÷ R₂ (or V_out = V_in × R₂ / (R₁ + R₂))."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-158",
    "subtopicId": "igcse-phys-4-2",
    "front": "4.2 Electrical Hazards & Mains Safety: What are the essential exam points to remember?",
    "backBullets": [
      "Mains wiring: Live wire (brown, ~230 V AC), Neutral wire (blue, ~0 V, completes circuit), Earth wire (green/yellow, safety path to ground). Switches and fuses MUST ALWAYS be placed in the LIVE wire!",
      "Fuse: Contains a thin wire that melts and breaks the circuit if current exceeds its rating (pick the fuse rating just ABOVE normal operating current, e.g., 5 A fuse for a 4.2 A appliance).",
      "Circuit breakers (trip switches / MCBs): Use an electromagnet to trip open faster than a fuse and can be reset easily without replacement."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-159",
    "subtopicId": "igcse-phys-4-2",
    "front": "Define: Parallel circuit (4.2)",
    "backBullets": [
      "Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-160",
    "subtopicId": "igcse-phys-4-3",
    "front": "4.3 Magnetic Fields, Electromagnets & The Motor Effect: What are the essential exam points to remember?",
    "backBullets": [
      "Magnetic field lines run from NORTH to SOUTH outside a magnet; closer spacing indicates a stronger field. Soft iron is easily magnetised and demagnetised (ideal for electromagnets and transformer cores); steel retains magnetism (permanent magnets).",
      "A current-carrying wire creates concentric circular magnetic field lines (Right-Hand Grip Rule). Coiling the wire into a solenoid with a soft-iron core builds a strong controllable electromagnet.",
      "The Motor Effect: A current-carrying conductor placed at right angles to a magnetic field experiences a force. Direction is found by Fleming’s LEFT-Hand Rule: ThuMb = Motion/Force, First finger = Field (N→S), SeCond finger = Conventional current (+→−)."
    ],
    "hint": "Use your LEFT hand for Motors (power IN → Motion OUT) and note that reversing EITHER current OR field reverses the force (reversing both leaves direction unchanged)."
  },
  {
    "id": "igcse-phys-fc-extra-161",
    "subtopicId": "igcse-phys-4-3",
    "front": "4.3 Electromagnetic Induction & AC Generators: What are the essential exam points to remember?",
    "backBullets": [
      "Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends.",
      "Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil.",
      "Lenz’s Law (conservation of energy): The direction of an induced current always OPPOSES the change producing it (e.g., pushing a North pole into a coil induces a North pole at that end to repel it)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-162",
    "subtopicId": "igcse-phys-4-3",
    "front": "4.3 Transformers & High-Voltage Power Transmission: What are the essential exam points to remember?",
    "backBullets": [
      "A transformer consists of primary and secondary coils wound on a laminated soft-iron core. Alternating current in the primary produces a continuously changing magnetic field in the iron core, inducing an alternating e.m.f. in the secondary coil (transformers ONLY work with AC!).",
      "Transformer turns ratio equation: Vp ÷ Vs = Np ÷ Ns. Step-up transformers have Ns > Np (increase V); step-down transformers have Ns < Np (decrease V).",
      "For an ideal (100% efficient) transformer: Input power = Output power → Vp × Ip = Vs × Is."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-163",
    "subtopicId": "igcse-phys-4-3",
    "front": "Define: Motor effect (4.3)",
    "backBullets": [
      "Force experienced by a current-carrying wire placed across a magnetic field."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-164",
    "subtopicId": "igcse-phys-5-1",
    "front": "5.1 Rutherford Scattering & Subatomic Particles: What are the essential exam points to remember?",
    "backBullets": [
      "Geiger–Marsden–Rutherford alpha scattering experiment fired positive alpha particles at ultra-thin gold foil in a vacuum:",
      "Observation 1: Most alpha particles passed straight through undeflected → Conclusion: The atom is mostly EMPTY SPACE.",
      "Observation 2: A tiny fraction deflected through large angles (>90°, some bouncing straight back) → Conclusion: Nearly all mass and ALL POSITIVE CHARGE are concentrated in a tiny, dense central NUCLEUS."
    ],
    "hint": "Link the 3 Rutherford clues: Straight through = Empty space; Deflected = Positive core; Bounced back = Dense heavy nucleus."
  },
  {
    "id": "igcse-phys-fc-extra-165",
    "subtopicId": "igcse-phys-5-1",
    "front": "5.1 Nuclide Notation & Isotopes: What are the essential exam points to remember?",
    "backBullets": [
      "Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z.",
      "Isotopes are atoms of the SAME element having the SAME number of protons (Z) but DIFFERENT numbers of neutrons (A − Z). Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n).",
      "Isotopes have identical chemical properties (same electron configuration) but different masses and nuclear stability (radioisotopes have unstable nuclei)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-166",
    "subtopicId": "igcse-phys-5-1",
    "front": "5.1 Nuclear Fission & Nuclear Fusion: What are the essential exam points to remember?",
    "backBullets": [
      "Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators).",
      "Nuclear FUSION: Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg.",
      "Fusion requires immense temperature so positively charged nuclei have enough kinetic energy to overcome electrostatic repulsion and get close enough for the strong nuclear force to bind them."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-167",
    "subtopicId": "igcse-phys-5-1",
    "front": "Define: Nucleon number (A) (5.1)",
    "backBullets": [
      "Total number of protons plus neutrons in an atomic nucleus."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-168",
    "subtopicId": "igcse-phys-5-2",
    "front": "5.2 Properties of Alpha, Beta & Gamma Radiation: What are the essential exam points to remember?",
    "backBullets": [
      "Background radiation comes from natural sources (radon gas from rocks, cosmic rays, food/buildings) and artificial sources (medical X-rays/scans). Always subtract background count rate before half-life calculations!",
      "Alpha (α, ⁴₂He nucleus): Charge +2, heavy, VERY strongly ionising, stopped by paper or ~5 cm of air.",
      "Beta-minus (β⁻, ⁰₋₁e fast electron emitted when a neutron turns into a proton + electron): Charge −1, moderately ionising, stopped by ~3–5 mm of aluminium."
    ],
    "hint": "Penetration order: Paper stops Alpha, Aluminium stops Beta, Lead reduces Gamma (P-A-L). Ionising power is the EXACT reverse!"
  },
  {
    "id": "igcse-phys-fc-extra-169",
    "subtopicId": "igcse-phys-5-2",
    "front": "5.2 Balanced Nuclear Decay Equations: What are the essential exam points to remember?",
    "backBullets": [
      "Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation.",
      "Alpha decay (loses 2p and 2n): ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.",
      "Beta-minus decay (1 neutron → 1 proton + 1 electron): ᴬ_Z X → ᴬ_{Z+1} Y + ⁰₋₁β. Nucleon number A stays constant, proton number Z INCREASES by 1! Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-170",
    "subtopicId": "igcse-phys-5-2",
    "front": "5.2 Half-Life, Uses & Safe Handling: What are the essential exam points to remember?",
    "backBullets": [
      "Radioactive decay is spontaneous and RANDOM — it is impossible to predict when a single nucleus will decay, and decay rate is unaffected by temperature or chemical bonding.",
      "Half-life (t_½) is the time taken for HALF of the unstable nuclei in a sample to decay (or for the corrected count rate/activity in becquerels, Bq, to halve).",
      "Worked example: A sample has corrected activity 640 Bq and half-life 6 hours. After 18 hours (3 half-lives): 640 → 320 → 160 → 80 Bq."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-171",
    "subtopicId": "igcse-phys-5-2",
    "front": "Define: Alpha particle (5.2)",
    "backBullets": [
      "Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-172",
    "subtopicId": "igcse-phys-6-1",
    "front": "6.1 Earth’s Motion, Seasons & The Moon: What are the essential exam points to remember?",
    "backBullets": [
      "Day and night: Earth spins on its tilted axis (23.5°) once every 24 hours; the Sun appears to rise in the east and set in the west.",
      "Seasons: Earth orbits the Sun once every ~365.25 days while keeping its 23.5° axial tilt fixed. When the Northern Hemisphere tilts TOWARD the Sun, it receives more direct sunlight over longer days (summer), while the Southern Hemisphere experiences winter.",
      "Phases of the Moon (~27.3–29.5 day lunar orbit): As the Moon orbits Earth, we view varying fractions of its sunlit half (New Moon → Waxing Crescent → First Quarter → Full Moon → Waning)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-173",
    "subtopicId": "igcse-phys-6-1",
    "front": "6.1 The Solar System & Accretion Model: What are the essential exam points to remember?",
    "backBullets": [
      "Order of the 8 planets from the Sun: Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants).",
      "Accretion model of Solar System formation: A rotating nebula of gas and dust collapsed under gravity into a swirling accretion disc. The hot dense core formed the Sun; near the Sun only rocky/metallic elements with high melting points condensed (rocky planets), whereas further out cooler gases and ices clumped into gas giants.",
      "Gravitational field strength at a planet’s surface increases with planet mass, and gravity between two bodies weakens rapidly as distance increases."
    ],
    "hint": "Planet order: My Very Easy Method Just Speeds Up Naming (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)."
  },
  {
    "id": "igcse-phys-fc-extra-174",
    "subtopicId": "igcse-phys-6-1",
    "front": "6.1 Orbital Speed & Elliptical Comet Orbits: What are the essential exam points to remember?",
    "backBullets": [
      "Average orbital speed for a circular orbit of radius r and orbital period T: v = (2 × π × r) ÷ T.",
      "As orbital radius increases across the Solar System, the Sun’s gravitational pull weakens, so outer planets orbit much MORE SLOWLY and have much LONGER orbital periods (years) than inner planets.",
      "Comets follow highly elliptical orbits with the Sun off-centre at one focus. By conservation of energy, as a comet falls closer to the Sun its gravitational potential energy converts into kinetic energy — so it travels FASTEST at closest approach and SLOWEST far out."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-175",
    "subtopicId": "igcse-phys-6-1",
    "front": "Define: Orbital speed (6.1)",
    "backBullets": [
      "Average speed along a circular orbit: v = 2πr ÷ T."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-176",
    "subtopicId": "igcse-phys-6-2",
    "front": "6.2 Light-Years & Life Cycle of Stars: What are the essential exam points to remember?",
    "backBullets": [
      "A light-year is a unit of DISTANCE (not time!) — the distance light travels in a vacuum in one year: 1 light-year ≈ 9.5 × 10¹⁵ m. Our Sun sits in the Milky Way galaxy (~100,000 light-years across).",
      "Star birth: Gravity pulls dust and hydrogen gas in a NEBULA inward to form a dense hot PROTOSTAR. Once core temperature reaches millions of kelvin, hydrogen nuclear FUSION begins.",
      "Main Sequence Star (stable phase like the Sun): Outward radiation/thermal pressure from hydrogen fusion exactly BALANCES inward gravitational collapse for billions of years."
    ],
    "hint": "Sun-like path: Nebula → Protostar → Main Sequence → Red Giant → Planetary Nebula → White Dwarf. Massive path: ... → Red Supergiant → Supernova → Neutron Star / Black Hole."
  },
  {
    "id": "igcse-phys-fc-extra-177",
    "subtopicId": "igcse-phys-6-2",
    "front": "6.2 Red-Shift, CMBR & The Big Bang Theory: What are the essential exam points to remember?",
    "backBullets": [
      "Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us.",
      "Key observation: The FURTHER away a galaxy is, the GREATER its red-shift — meaning distant galaxies are receding FASTER than closer ones, proving the Universe is expanding.",
      "Cosmic Microwave Background Radiation (CMBR): Uniform microwave radiation arriving from every direction in space. Originally high-energy gamma radiation emitted shortly after the Big Bang (~13.8 billion years ago), it has been stretched into the microwave region by billions of years of cosmic expansion."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-178",
    "subtopicId": "igcse-phys-6-2",
    "front": "6.2 Hubble’s Law & Age of the Universe (CIE Extended): What are the essential exam points to remember?",
    "backBullets": [
      "Hubble’s Law states that a galaxy’s recession speed v is directly proportional to its distance d from Earth: v = H₀ × d, where H₀ = v ÷ d is the Hubble constant.",
      "Current measured value of the Hubble constant: H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹.",
      "Estimating the age of the Universe: Assuming galaxies have expanded at speed v over time t = d ÷ v, we obtain Age of Universe ≈ 1 ÷ H₀ ≈ 1 ÷ (2.2 × 10⁻¹⁸ s⁻¹) ≈ 4.5 × 10¹⁷ s ≈ 1.4 × 10¹⁰ years (~14 billion years)."
    ]
  },
  {
    "id": "igcse-phys-fc-extra-179",
    "subtopicId": "igcse-phys-6-2",
    "front": "Define: Main sequence star (6.2)",
    "backBullets": [
      "Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion."
    ]
  }
];

export const IGCSE_PHYSICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "cs-igcse-phys-topic-1",
    "slug": "topic-1-motion-forces-energy",
    "title": "Topic 1: Motion, Forces & Energy — Complete Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Motion, Forces & Energy",
    "summary": "One-page revision summary covering 1.1 Physical Quantities, Speed & Motion Graphs; 1.2 Mass, Weight, Density, Forces & Newton’s Laws; 1.3 Moments, Momentum, Impulse & Pressure; 1.4 Energy Stores, Work Done, Power & Efficiency.",
    "accentColor": "#8d22cc",
    "sections": [
      {
        "heading": "1.1 Physical Quantities, Speed & Motion Graphs",
        "formula": "v = s/t  |  a = (v − u)/t  |  W = mg  |  ρ = m/V  |  F = ma  |  F = kx",
        "points": [
          "Distinguish between scalar and vector quantities and find the resultant of two perpendicular vectors.",
          "Calculate average speed (v = s/t) and acceleration (a = (v − u)/t) with correct SI units.",
          "Tip: Think V for Vector = Value + direction arrow; S for Scalar = Size only."
        ]
      },
      {
        "heading": "1.2 Mass, Weight, Density, Forces & Newton’s Laws",
        "formula": "M = Fd  |  p = mv  |  FΔt = Δp  |  Δp = ρgΔh  |  Ek = ½mv²  |  ΔEp = mgΔh  |  P = E/t",
        "points": [
          "Calculate weight using W = mg and density using ρ = m/V, including displacement measurements.",
          "Apply Hooke’s Law (F = kx) and identify the limit of proportionality on a load–extension graph.",
          "Watch out: Students often say \"weight is measured in kg\". Weight is a FORCE measured in newtons (N) using a newtonmeter; mass is measured in kilograms (kg)."
        ]
      },
      {
        "heading": "1.3 Moments, Momentum, Impulse & Pressure",
        "formula": "v = s/t  |  a = (v − u)/t  |  W = mg  |  ρ = m/V  |  F = ma  |  F = kx",
        "points": [
          "Apply the principle of moments (clockwise = anticlockwise) to solve balanced beam problems.",
          "Use p = mv, conservation of momentum, and F = Δp/Δt to explain crumple zones and solve collisions.",
          "Tip: Think of a racing car: low to the ground (low CoG) and wide wheelbase (wide base) = maximum stability!"
        ]
      },
      {
        "heading": "1.4 Energy Stores, Work Done, Power & Efficiency",
        "formula": "M = Fd  |  p = mv  |  FΔt = Δp  |  Δp = ρgΔh  |  Ek = ½mv²  |  ΔEp = mgΔh  |  P = E/t",
        "points": [
          "Apply W = Fd, Ek = ½mv², and ΔEp = mgΔh, including equating Ep lost to Ek gained.",
          "Calculate power (P = E/t) and percentage efficiency using Sankey diagrams.",
          "Tip: Doubling speed quadruples kinetic energy (×4) because v is squared in Ek = ½mv²."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-phys-topic-2",
    "slug": "topic-2-thermal-physics",
    "title": "Topic 2: Thermal Physics — Complete Cheat Sheet",
    "topicNumber": 2,
    "topicName": "Thermal Physics",
    "summary": "One-page revision summary covering 2.1 Kinetic Particle Model of Matter & Gas Laws; 2.2 Specific Heat Capacity, Latent Heat & Thermal Transfer.",
    "accentColor": "#1a96f3",
    "sections": [
      {
        "heading": "2.1 Kinetic Particle Model of Matter & Gas Laws",
        "formula": "T(K) = θ(°C) + 273  |  p₁V₁ = p₂V₂ (Boyle’s Law)",
        "points": [
          "Describe particle arrangement, motion, and forces in solids, liquids, and gases.",
          "Explain Brownian motion as evidence for the kinetic particle model.",
          "Tip: Remember: Smoke particles are HUGE and slow; air molecules are TINY, invisible, and fast — collisions push the smoke randomly."
        ]
      },
      {
        "heading": "2.2 Specific Heat Capacity, Latent Heat & Thermal Transfer",
        "formula": "c = ΔE ÷ (mΔT)  |  ΔE = mcΔT",
        "points": [
          "Use ΔE = mcΔT and explain why temperature remains constant during melting and boiling.",
          "Explain why evaporation cools a liquid and list factors increasing its rate (temperature, surface area, draught).",
          "Watch out: On a flat plateau of a heating curve, NEVER say \"no energy is being absorbed\" — energy IS absorbed to break intermolecular bonds (potential energy rises while kinetic energy/temperature stays flat)."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-phys-topic-3",
    "slug": "topic-3-waves-optics",
    "title": "Topic 3: Waves & Optics — Complete Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Waves & Optics",
    "summary": "One-page revision summary covering 3.1 General Wave Properties, Reflection, Refraction & Diffraction; 3.2 Light, Lenses, Total Internal Reflection & EM Spectrum; 3.3 Sound Waves, Echoes & Ultrasound.",
    "accentColor": "#059669",
    "sections": [
      {
        "heading": "3.1 General Wave Properties, Reflection, Refraction & Diffraction",
        "formula": "v = fλ  |  T = 1 ÷ f  |  n = sin i ÷ sin r",
        "points": [
          "Compare transverse and longitudinal waves with examples of each.",
          "Calculate wave speed, frequency, wavelength, and period using v = fλ and T = 1/f.",
          "Tip: Transverse has a T (perpendicular 90° crossbar); Longitudinal is aLong the same line (parallel)."
        ]
      },
      {
        "heading": "3.2 Light, Lenses, Total Internal Reflection & EM Spectrum",
        "formula": "sin c = 1 ÷ n  |  Echoes & Sonar: 2d = v × t",
        "points": [
          "Apply n = sin i / sin r and sin c = 1 / n, and state the two conditions required for Total Internal Reflection.",
          "Construct converging lens ray diagrams and distinguish real vs virtual images (including magnifying glass and eye correction).",
          "Watch out: Angles of incidence i and refraction r are ALWAYS measured from the NORMAL (the 90° dotted line), NEVER from the glass surface!"
        ]
      },
      {
        "heading": "3.3 Sound Waves, Echoes & Ultrasound",
        "formula": "v = fλ  |  T = 1 ÷ f  |  n = sin i ÷ sin r",
        "points": [
          "Explain why sound cannot travel in a vacuum and why it travels fastest in solids.",
          "Calculate echo and sonar distances accurately using 2d = v × t.",
          "Watch out: In echo and sonar calculations, forgetting to DIVIDE BY 2 (or multiply distance by 2) is the #1 error — remember the pulse goes out AND bounces back!"
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-phys-topic-4",
    "slug": "topic-4-electricity-magnetism",
    "title": "Topic 4: Electricity & Magnetism — Complete Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Electricity & Magnetism",
    "summary": "One-page revision summary covering 4.1 Electric Charge, Current, EMF, Potential Difference & Resistance; 4.2 Series & Parallel Circuits, Potential Dividers & Mains Safety; 4.3 Magnetism, Motor Effect, EM Induction & Transformers.",
    "accentColor": "#ea580c",
    "sections": [
      {
        "heading": "4.1 Electric Charge, Current, EMF, Potential Difference & Resistance",
        "formula": "Q = It  |  V = W/Q  |  V = IR  |  P = IV = I²R  |  E = IVt",
        "points": [
          "Apply Q = It, V = W/Q, V = IR, P = IV, and E = IVt with correct SI and kWh units.",
          "Sketch and explain I–V graphs for an ohmic resistor, filament lamp, and diode.",
          "Watch out: Never say \"positive charges moved onto the cloth\" during static charging — ONLY electrons transfer between rubbed insulators!"
        ]
      },
      {
        "heading": "4.2 Series & Parallel Circuits, Potential Dividers & Mains Safety",
        "formula": "1/R_p = 1/R₁ + 1/R₂  |  V₁/V₂ = R₁/R₂  |  Vp/Vs = Np/Ns  |  P_loss = I²R",
        "points": [
          "Calculate combined resistance in series (R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂).",
          "Use V₁/V₂ = R₁/R₂ to explain thermistor and LDR potential-divider sensing circuits.",
          "Tip: Series = Same current, Shared voltage; Parallel = Same voltage, Split current, Lower total R."
        ]
      },
      {
        "heading": "4.3 Magnetism, Motor Effect, EM Induction & Transformers",
        "formula": "Q = It  |  V = W/Q  |  V = IR  |  P = IV = I²R  |  E = IVt",
        "points": [
          "Apply Fleming’s Left-Hand Rule and explain the role of the split-ring commutator in a DC motor.",
          "Distinguish slip rings (AC generator) from split-ring commutators (DC motor) and explain Lenz’s Law.",
          "Tip: Use your LEFT hand for Motors (power IN → Motion OUT) and note that reversing EITHER current OR field reverses the force (reversing both leaves direction unchanged)."
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-phys-topic-5",
    "slug": "topic-5-nuclear-physics",
    "title": "Topic 5: Nuclear Physics — Complete Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Nuclear Physics",
    "summary": "One-page revision summary covering 5.1 The Nuclear Model of the Atom, Isotopes, Fission & Fusion; 5.2 Radioactive Decay (Alpha, Beta, Gamma) & Half-Life.",
    "accentColor": "#7c3aed",
    "sections": [
      {
        "heading": "5.1 The Nuclear Model of the Atom, Isotopes, Fission & Fusion",
        "formula": "Nuclide: ᴬ_Z X (N = A − Z)",
        "points": [
          "Explain how Rutherford’s gold foil observations established the nuclear model of the atom.",
          "Calculate proton, neutron, and electron counts from nuclide notation and define isotopes.",
          "Tip: Link the 3 Rutherford clues: Straight through = Empty space; Deflected = Positive core; Bounced back = Dense heavy nucleus."
        ]
      },
      {
        "heading": "5.2 Radioactive Decay (Alpha, Beta, Gamma) & Half-Life",
        "formula": "α: ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂He  |  β⁻: ᴬ_Z X → ᴬ_{Z+1} Y + ⁰₋₁e",
        "points": [
          "Compare α, β, and γ radiation by nature, charge, penetration, ionising power, and field deflection.",
          "Balance alpha and beta nuclear decay equations accurately.",
          "Tip: Penetration order: Paper stops Alpha, Aluminium stops Beta, Lead reduces Gamma (P-A-L). Ionising power is the EXACT reverse!"
        ]
      }
    ]
  },
  {
    "id": "cs-igcse-phys-topic-6",
    "slug": "topic-6-space-physics",
    "title": "Topic 6: Space Physics — Complete Cheat Sheet",
    "topicNumber": 6,
    "topicName": "Space Physics",
    "summary": "One-page revision summary covering 6.1 Earth, The Solar System & Orbital Motion; 6.2 Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law).",
    "accentColor": "#0284c7",
    "sections": [
      {
        "heading": "6.1 Earth, The Solar System & Orbital Motion",
        "formula": "v = 2πr ÷ T (Orbital Speed)",
        "points": [
          "Explain day/night, the seasons (23.5° tilt), and lunar phases clearly.",
          "Explain why inner planets are rocky while outer planets are gaseous using the accretion model.",
          "Watch out: Seasons are NOT caused by Earth getting closer to the Sun — they are caused by Earth’s 23.5° axial tilt changing the angle of sunlight and daylight hours!"
        ]
      },
      {
        "heading": "6.2 Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)",
        "formula": "H₀ = v ÷ d ≈ 2.2 × 10⁻¹⁸ s⁻¹  |  Age of Universe ≈ 1 ÷ H₀",
        "points": [
          "Trace the complete stellar life cycle for both Sun-sized stars and high-mass stars.",
          "Explain how galactic red-shift and CMBR support the Big Bang Theory.",
          "Tip: Sun-like path: Nebula → Protostar → Main Sequence → Red Giant → Planetary Nebula → White Dwarf. Massive path: ... → Red Supergiant → Supernova → Neutron Star / Black Hole."
        ]
      }
    ]
  }
];

export const IGCSE_PHYSICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "igcse-phys-exam-1",
    "subtopicId": "igcse-phys-4-2",
    "number": 1,
    "stimulus": "A student connects two identical 12 Ω lamps in parallel across a 6.0 V battery of negligible internal resistance.",
    "diagram": "circuit-series-parallel",
    "parts": [
      {
        "id": "igcse-phys-exam-1a",
        "label": "a)",
        "prompt": "Calculate the combined resistance of the two 12 Ω lamps connected in parallel.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "1/R = 1/12 + 1/12 = 2/12 = 1/6, so R = 6.0 Ω.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Correct parallel formula 1/R = 1/12 + 1/12",
              "requiredKeywordGroups": [
                [
                  "12"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Combined resistance = 6 Ω",
              "numericMatch": {
                "value": 6,
                "tolerance": 0.05
              }
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-1b",
        "label": "b)",
        "prompt": "Calculate the total current drawn from the 6.0 V battery.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "I = V ÷ R = 6.0 ÷ 6.0 = 1.0 A.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Apply I = V / R",
              "requiredKeywordGroups": [
                [
                  "6"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Total current = 1 A",
              "numericMatch": {
                "value": 1,
                "tolerance": 0.05
              }
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-1c",
        "label": "c)",
        "prompt": "Explain one key principle or common pitfall when solving exam problems on Series & Parallel Circuits, Potential Dividers & Mains Safety.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Never put a switch or fuse in the neutral wire — even when open, the appliance would remain connected to the live 230 V supply and deliver a lethal shock!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies key rule: Calculate combined resistance in series (R₁ + R₂) and parallel (1/R = 1/R₁ + 1/R₂)."
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
    "id": "igcse-phys-exam-2",
    "subtopicId": "igcse-phys-3-2",
    "number": 2,
    "stimulus": "A ray of red light enters a glass block of refractive index n = 1.50 from air at an angle of incidence of 42°.",
    "parts": [
      {
        "id": "igcse-phys-exam-2a",
        "label": "a)",
        "prompt": "Calculate the critical angle c for this glass–air boundary (give your answer to 1 decimal place).",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "sin c = 1 ÷ 1.50 = 0.6667 → c = sin⁻¹(0.6667) = 41.8°.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Use sin c = 1 / n (1 / 1.5)",
              "requiredKeywordGroups": [
                [
                  "1.5",
                  "0.67",
                  "0.667"
                ]
              ]
            },
            {
              "id": "mp2",
              "markDescription": "Critical angle ≈ 41.8°",
              "numericMatch": {
                "value": 41.8,
                "tolerance": 0.3
              }
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-2b",
        "label": "b)",
        "prompt": "State why optical fibres are preferred over copper cables for long-distance telecommunications.",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Optical fibres carry higher bandwidth signals over longer distances with much less signal attenuation",
          "Optical fibres transmit electricity directly to homes",
          "Light moves slower in glass than electrons drift in copper",
          "Optical fibres do not rely on total internal reflection"
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-2c",
        "label": "c)",
        "prompt": "Explain one key principle or common pitfall when solving exam problems on Light, Lenses, Total Internal Reflection & EM Spectrum.",
        "kind": "short-answer",
        "marks": 2,
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Angles of incidence i and refraction r are ALWAYS measured from the NORMAL (the 90° dotted line), NEVER from the glass surface!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Identifies key rule: Apply n = sin i / sin r and sin c = 1 / n, and state the two conditions required for Total Internal Reflection."
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
    "id": "igcse-phys-exam-3",
    "subtopicId": "igcse-phys-1-1",
    "number": 3,
    "stimulus": "Structured exam question on Topic 1.1 (Physical Quantities, Speed & Motion Graphs). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "igcse-phys-exam-3a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Physical Quantities, Speed & Motion Graphs?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Distinguish between scalar and vector quantities and find the resultant of two perpendicular vectors.",
          "It violates the core rule of Physical Quantities, Speed & Motion Graphs by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Scalar.",
          "It assumes Vector remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-3b",
        "label": "b)",
        "prompt": "Define \"Scalar\" and explain the key principles covered in \"Speed, Velocity & Uniform Acceleration\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Scalar: A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy). Furthermore, Average speed = total distance travelled ÷ total time taken: v = s ÷ t (SI unit: m/s). Velocity is speed in a specified direction. Acceleration is the rate of change of velocity: a = (v − u) ÷ t (SI unit: m/s²), where u is initial velocity and v is final velocity.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Scalar: A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Average speed = total distance travelled ÷ total time taken: v = s ÷ t (SI unit: m/s). Velocity is speed in a specified direction."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Acceleration is the rate of change of velocity: a = (v − u) ÷ t (SI unit: m/s²), where u is initial velocity and v is final velocity."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-3c",
        "label": "c)",
        "prompt": "Apply \"Interpreting Distance–Time & Speed–Time Graphs\" to explain how examiners award full marks on Physical Quantities, Speed & Motion Graphs problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "On a distance–time graph: gradient = speed; a horizontal line means the object is stationary; a straight sloped line means constant speed; an upward-curving slope means accelerating. On a speed–time (or velocity–time) graph: gradient = acceleration; a horizontal line above zero means constant speed; a downward straight line means uniform deceleration.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "On a distance–time graph: gradient = speed; a horizontal line means the object is stationary; a straight sloped line means constant speed; an upward-curving slope means accelerating."
            },
            {
              "id": "mp2",
              "markDescription": "On a speed–time (or velocity–time) graph: gradient = acceleration; a horizontal line above zero means constant speed; a downward straight line means uniform deceleration."
            },
            {
              "id": "mp3",
              "markDescription": "Think V for Vector = Value + direction arrow; S for Scalar = Size only."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-4",
    "subtopicId": "igcse-phys-1-2",
    "number": 4,
    "stimulus": "Structured exam question on Topic 1.2 (Mass, Weight, Density, Forces & Newton’s Laws). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "igcse-phys-exam-4a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Mass, Weight, Density, Forces & Newton’s Laws?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Calculate weight using W = mg and density using ρ = m/V, including displacement measurements.",
          "It violates the core rule of Mass, Weight, Density, Forces & Newton’s Laws by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Density.",
          "It assumes Spring constant remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-4b",
        "label": "b)",
        "prompt": "Define \"Density\" and explain the key principles covered in \"Hooke’s Law & Spring Constant\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Density: Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³). Furthermore, Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: F = k × x. Spring constant k = F ÷ x (units: N/m or N/cm) represents the stiffness of the spring and equals the gradient of the straight-line region of a force–extension graph.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Density: Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Hooke’s Law states that the extension x of a spring is directly proportional to the stretching load F, provided the limit of proportionality is not exceeded: F = k × x."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Spring constant k = F ÷ x (units: N/m or N/cm) represents the stiffness of the spring and equals the gradient of the straight-line region of a force–extension graph."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-4c",
        "label": "c)",
        "prompt": "Apply \"Newton’s Laws, Circular Motion & Terminal Velocity\" to explain how examiners award full marks on Mass, Weight, Density, Forces & Newton’s Laws problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Newton’s First Law: If resultant force F = 0 N, a stationary object remains stationary and a moving object continues at constant speed in a straight line. Newton’s Second Law: Resultant force = mass × acceleration (F = m × a). Acceleration acts in the exact direction of the resultant force.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Newton’s First Law: If resultant force F = 0 N, a stationary object remains stationary and a moving object continues at constant speed in a straight line."
            },
            {
              "id": "mp2",
              "markDescription": "Newton’s Second Law: Resultant force = mass × acceleration (F = m × a). Acceleration acts in the exact direction of the resultant force."
            },
            {
              "id": "mp3",
              "markDescription": "Calculate weight using W = mg and density using ρ = m/V, including displacement measurements."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-5",
    "subtopicId": "igcse-phys-1-3",
    "number": 5,
    "stimulus": "Structured exam question on Topic 1.3 (Moments, Momentum, Impulse & Pressure). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "igcse-phys-exam-5a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Moments, Momentum, Impulse & Pressure?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Apply the principle of moments (clockwise = anticlockwise) to solve balanced beam problems.",
          "It violates the core rule of Moments, Momentum, Impulse & Pressure by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Moment.",
          "It assumes Momentum remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-5b",
        "label": "b)",
        "prompt": "Define \"Moment\" and explain the key principles covered in \"Momentum, Conservation & Impulse\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Moment: Turning effect of a force about a pivot: M = F × d (N m). Furthermore, Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s). Principle of conservation of momentum: In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Moment: Turning effect of a force about a pivot: M = F × d (N m)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Principle of conservation of momentum: In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-5c",
        "label": "c)",
        "prompt": "Apply \"Pressure in Solids & Liquids\" to explain how examiners award full marks on Moments, Momentum, Impulse & Pressure problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Pressure is force exerted per unit area: p = F ÷ A (SI unit: pascal, Pa, where 1 Pa = 1 N/m²). A sharp knife concentrates force over a tiny area for high pressure; snowshoes spread weight over a large area for low pressure. Pressure in a liquid increases with depth h, liquid density ρ, and gravitational field strength g: Δp = ρ × g × Δh. Pressure acts equally in all directions at a given depth.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Pressure is force exerted per unit area: p = F ÷ A (SI unit: pascal, Pa, where 1 Pa = 1 N/m²). A sharp knife concentrates force over a tiny area for high pressure; snowshoes spread weight over a large area for low pressure."
            },
            {
              "id": "mp2",
              "markDescription": "Pressure in a liquid increases with depth h, liquid density ρ, and gravitational field strength g: Δp = ρ × g × Δh. Pressure acts equally in all directions at a given depth."
            },
            {
              "id": "mp3",
              "markDescription": "Think of a racing car: low to the ground (low CoG) and wide wheelbase (wide base) = maximum stability!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-6",
    "subtopicId": "igcse-phys-1-4",
    "number": 6,
    "stimulus": "Structured exam question on Topic 1.4 (Energy Stores, Work Done, Power & Efficiency). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "igcse-phys-exam-6a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Energy Stores, Work Done, Power & Efficiency?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Apply W = Fd, Ek = ½mv², and ΔEp = mgΔh, including equating Ep lost to Ek gained.",
          "It violates the core rule of Energy Stores, Work Done, Power & Efficiency by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Power.",
          "It assumes Efficiency remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-6b",
        "label": "b)",
        "prompt": "Define \"Power\" and explain the key principles covered in \"Power & Efficiency\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Power: Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W). Furthermore, Power is the rate of work done or energy transferred: P = W ÷ t = ΔE ÷ t (SI unit: watt, W, where 1 W = 1 J/s). Percentage efficiency = (Useful energy output ÷ Total energy input) × 100%, or equivalently (Useful power output ÷ Total power input) × 100%.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Power: Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Power is the rate of work done or energy transferred: P = W ÷ t = ΔE ÷ t (SI unit: watt, W, where 1 W = 1 J/s)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Percentage efficiency = (Useful energy output ÷ Total energy input) × 100%, or equivalently (Useful power output ÷ Total power input) × 100%."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-6c",
        "label": "c)",
        "prompt": "Apply \"Renewable & Non-Renewable Energy Resources\" to explain how examiners award full marks on Energy Stores, Work Done, Power & Efficiency problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Non-renewable resources (coal, oil, natural gas, nuclear fission of uranium) are finite. Fossil fuels are reliable and high energy-density but release CO₂ (greenhouse gas) and SO₂ (acid rain). Nuclear produces no CO₂ during generation but creates long-lived radioactive waste. Renewable resources (solar PV, wind, hydroelectric, wave, tidal, geothermal, biofuels) are replenished naturally and have low running costs/carbon emissions.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Non-renewable resources (coal, oil, natural gas, nuclear fission of uranium) are finite. Fossil fuels are reliable and high energy-density but release CO₂ (greenhouse gas) and SO₂ (acid rain). Nuclear produces no CO₂ during generation but creates long-lived radioactive waste."
            },
            {
              "id": "mp2",
              "markDescription": "Renewable resources (solar PV, wind, hydroelectric, wave, tidal, geothermal, biofuels) are replenished naturally and have low running costs/carbon emissions."
            },
            {
              "id": "mp3",
              "markDescription": "Doubling speed quadruples kinetic energy (×4) because v is squared in Ek = ½mv²."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-7",
    "subtopicId": "igcse-phys-2-1",
    "number": 7,
    "stimulus": "Structured exam question on Topic 2.1 (Kinetic Particle Model of Matter & Gas Laws). Study the information and answer parts (a), (b), and (c).",
    "diagram": "circuit-series-parallel",
    "parts": [
      {
        "id": "igcse-phys-exam-7a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Kinetic Particle Model of Matter & Gas Laws?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Describe particle arrangement, motion, and forces in solids, liquids, and gases.",
          "It violates the core rule of Kinetic Particle Model of Matter & Gas Laws by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Absolute zero.",
          "It assumes Brownian motion remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-7b",
        "label": "b)",
        "prompt": "Define \"Absolute zero\" and explain the key principles covered in \"Temperature, Absolute Zero & The Kelvin Scale\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Absolute zero: 0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy. Furthermore, Temperature is a measure of the average kinetic energy of the particles in a substance. Absolute zero (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Absolute zero: 0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Temperature is a measure of the average kinetic energy of the particles in a substance."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Absolute zero (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-7c",
        "label": "c)",
        "prompt": "Apply \"Gas Pressure & Boyle’s Law (p₁V₁ = p₂V₂)\" to explain how examiners award full marks on Kinetic Particle Model of Matter & Gas Laws problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Gas pressure arises from millions of gas particles colliding with the container walls every second. Each collision changes a particle’s momentum, exerting a force on the wall (p = F ÷ A). Heating a fixed mass of gas at constant volume increases average particle kinetic energy and speed → particles hit the walls MORE FREQUENTLY and HARDER (greater momentum change per collision) → pressure increases.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Gas pressure arises from millions of gas particles colliding with the container walls every second. Each collision changes a particle’s momentum, exerting a force on the wall (p = F ÷ A)."
            },
            {
              "id": "mp2",
              "markDescription": "Heating a fixed mass of gas at constant volume increases average particle kinetic energy and speed → particles hit the walls MORE FREQUENTLY and HARDER (greater momentum change per collision) → pressure increases."
            },
            {
              "id": "mp3",
              "markDescription": "Remember: Smoke particles are HUGE and slow; air molecules are TINY, invisible, and fast — collisions push the smoke randomly."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-8",
    "subtopicId": "igcse-phys-2-2",
    "number": 8,
    "stimulus": "Structured exam question on Topic 2.2 (Specific Heat Capacity, Latent Heat & Thermal Transfer). Study the information and answer parts (a), (b), and (c).",
    "diagram": "circuit-series-parallel",
    "parts": [
      {
        "id": "igcse-phys-exam-8a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Specific Heat Capacity, Latent Heat & Thermal Transfer?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Use ΔE = mcΔT and explain why temperature remains constant during melting and boiling.",
          "It violates the core rule of Specific Heat Capacity, Latent Heat & Thermal Transfer by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Internal energy.",
          "It assumes Specific heat capacity remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-8b",
        "label": "b)",
        "prompt": "Define \"Internal energy\" and explain the key principles covered in \"Thermal Expansion & Real-World Applications\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Internal energy: Total random kinetic and potential energy of all particles inside a system. Furthermore, When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least. Practical consequences: Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Internal energy: Total random kinetic and potential energy of all particles inside a system."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Practical consequences: Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-8c",
        "label": "c)",
        "prompt": "Apply \"Conduction, Convection & Infrared Radiation\" to explain how examiners award full marks on Specific Heat Capacity, Latent Heat & Thermal Transfer problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Conduction (mainly in solids): Vibrating particles pass kinetic energy along a lattice. Metals are exceptional thermal conductors because DELOCALISED FREE ELECTRONS diffuse rapidly through the lattice and collide with distant metal ions. Convection (fluids — liquids & gases ONLY): Heated fluid expands, becomes LESS DENSE, and rises while cooler, denser fluid sinks to replace it, forming a convection current.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Conduction (mainly in solids): Vibrating particles pass kinetic energy along a lattice. Metals are exceptional thermal conductors because DELOCALISED FREE ELECTRONS diffuse rapidly through the lattice and collide with distant metal ions."
            },
            {
              "id": "mp2",
              "markDescription": "Convection (fluids — liquids & gases ONLY): Heated fluid expands, becomes LESS DENSE, and rises while cooler, denser fluid sinks to replace it, forming a convection current."
            },
            {
              "id": "mp3",
              "markDescription": "Use ΔE = mcΔT and explain why temperature remains constant during melting and boiling."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-9",
    "subtopicId": "igcse-phys-3-1",
    "number": 9,
    "stimulus": "Structured exam question on Topic 3.1 (General Wave Properties, Reflection, Refraction & Diffraction). Study the information and answer parts (a), (b), and (c).",
    "diagram": "transverse-wave",
    "parts": [
      {
        "id": "igcse-phys-exam-9a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of General Wave Properties, Reflection, Refraction & Diffraction?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Compare transverse and longitudinal waves with examples of each.",
          "It violates the core rule of General Wave Properties, Reflection, Refraction & Diffraction by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Transverse wave.",
          "It assumes Longitudinal wave remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-9b",
        "label": "b)",
        "prompt": "Define \"Transverse wave\" and explain the key principles covered in \"The Wave Equation (v = fλ)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Transverse wave: Wave whose oscillations are perpendicular to the direction of energy transfer. Furthermore, Wave speed (m/s) = frequency (Hz) × wavelength (m): v = f × λ. Also link period and frequency: T = 1 ÷ f, so a wave of frequency 50 Hz has a time period T = 0.02 s.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Transverse wave: Wave whose oscillations are perpendicular to the direction of energy transfer."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Wave speed (m/s) = frequency (Hz) × wavelength (m): v = f × λ."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Also link period and frequency: T = 1 ÷ f, so a wave of frequency 50 Hz has a time period T = 0.02 s."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-9c",
        "label": "c)",
        "prompt": "Apply \"Reflection, Refraction & Diffraction in a Ripple Tank\" to explain how examiners award full marks on General Wave Properties, Reflection, Refraction & Diffraction problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Reflection: Wavefronts bounce off a barrier with angle of incidence = angle of reflection (i = r); speed, frequency, and wavelength stay unchanged. Refraction: Water waves moving from deep to shallow water SLOW DOWN, their wavelength DECREASES, and if they hit the boundary at an angle they bend TOWARD the normal (frequency stays constant).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Reflection: Wavefronts bounce off a barrier with angle of incidence = angle of reflection (i = r); speed, frequency, and wavelength stay unchanged."
            },
            {
              "id": "mp2",
              "markDescription": "Refraction: Water waves moving from deep to shallow water SLOW DOWN, their wavelength DECREASES, and if they hit the boundary at an angle they bend TOWARD the normal (frequency stays constant)."
            },
            {
              "id": "mp3",
              "markDescription": "Transverse has a T (perpendicular 90° crossbar); Longitudinal is aLong the same line (parallel)."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-10",
    "subtopicId": "igcse-phys-3-3",
    "number": 10,
    "stimulus": "Structured exam question on Topic 3.3 (Sound Waves, Echoes & Ultrasound). Study the information and answer parts (a), (b), and (c).",
    "diagram": "transverse-wave",
    "parts": [
      {
        "id": "igcse-phys-exam-10a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Sound Waves, Echoes & Ultrasound?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Explain why sound cannot travel in a vacuum and why it travels fastest in solids.",
          "It violates the core rule of Sound Waves, Echoes & Ultrasound by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Audible range.",
          "It assumes Ultrasound remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-10b",
        "label": "b)",
        "prompt": "Define \"Audible range\" and explain the key principles covered in \"Pitch, Loudness & Ultrasound Applications\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Audible range: Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz. Furthermore, Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz). Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Audible range: Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace)."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-10c",
        "label": "c)",
        "prompt": "Apply \"Pitch, Loudness & Ultrasound Applications\" to explain how examiners award full marks on Sound Waves, Echoes & Ultrasound problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz). Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz)."
            },
            {
              "id": "mp2",
              "markDescription": "Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace)."
            },
            {
              "id": "mp3",
              "markDescription": "Explain why sound cannot travel in a vacuum and why it travels fastest in solids."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-11",
    "subtopicId": "igcse-phys-4-1",
    "number": 11,
    "stimulus": "Structured exam question on Topic 4.1 (Electric Charge, Current, EMF, Potential Difference & Resistance). Study the information and answer parts (a), (b), and (c).",
    "diagram": "circuit-series-parallel",
    "parts": [
      {
        "id": "igcse-phys-exam-11a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Electric Charge, Current, EMF, Potential Difference & Resistance?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Apply Q = It, V = W/Q, V = IR, P = IV, and E = IVt with correct SI and kWh units.",
          "It violates the core rule of Electric Charge, Current, EMF, Potential Difference & Resistance by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Electric current.",
          "It assumes Potential difference remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-11b",
        "label": "b)",
        "prompt": "Define \"Electric current\" and explain the key principles covered in \"EMF, Potential Difference & Ohm’s Law (V = IR)\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Electric current: Rate of flow of charge: I = Q ÷ t, measured in amperes (A). Furthermore, Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C). Potential difference (p.d., V) is the work done by unit charge passing through a component: V = W ÷ Q. Voltmeters are connected in PARALLEL; ammeters in SERIES.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Electric current: Rate of flow of charge: I = Q ÷ t, measured in amperes (A)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Electromotive force (e.m.f., E) is the electrical work done by a source in moving unit charge around a complete circuit: E = W ÷ Q (unit: volt, V, where 1 V = 1 J/C)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Potential difference (p.d., V) is the work done by unit charge passing through a component: V = W ÷ Q. Voltmeters are connected in PARALLEL; ammeters in SERIES."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-11c",
        "label": "c)",
        "prompt": "Apply \"Electrical Power & Kilowatt-Hours\" to explain how examiners award full marks on Electric Charge, Current, EMF, Potential Difference & Resistance problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Electrical power: P = I × V = I²R = V² ÷ R (watts, W). Electrical energy transferred: E = P × t = I × V × t (joules, J).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Electrical power: P = I × V = I²R = V² ÷ R (watts, W)."
            },
            {
              "id": "mp2",
              "markDescription": "Electrical energy transferred: E = P × t = I × V × t (joules, J)."
            },
            {
              "id": "mp3",
              "markDescription": "Apply Q = It, V = W/Q, V = IR, P = IV, and E = IVt with correct SI and kWh units."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-12",
    "subtopicId": "igcse-phys-4-3",
    "number": 12,
    "stimulus": "Structured exam question on Topic 4.3 (Magnetism, Motor Effect, EM Induction & Transformers). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-phys-exam-12a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Magnetism, Motor Effect, EM Induction & Transformers?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Apply Fleming’s Left-Hand Rule and explain the role of the split-ring commutator in a DC motor.",
          "It violates the core rule of Magnetism, Motor Effect, EM Induction & Transformers by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Motor effect.",
          "It assumes Lenz’s Law remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-12b",
        "label": "b)",
        "prompt": "Define \"Motor effect\" and explain the key principles covered in \"Electromagnetic Induction & AC Generators\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Motor effect: Force experienced by a current-carrying wire placed across a magnetic field. Furthermore, Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends. Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Motor effect: Force experienced by a current-carrying wire placed across a magnetic field."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-12c",
        "label": "c)",
        "prompt": "Apply \"Transformers & High-Voltage Power Transmission\" to explain how examiners award full marks on Magnetism, Motor Effect, EM Induction & Transformers problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "A transformer consists of primary and secondary coils wound on a laminated soft-iron core. Alternating current in the primary produces a continuously changing magnetic field in the iron core, inducing an alternating e.m.f. in the secondary coil (transformers ONLY work with AC!). Transformer turns ratio equation: Vp ÷ Vs = Np ÷ Ns. Step-up transformers have Ns > Np (increase V); step-down transformers have Ns < Np (decrease V). Avoid: Never say \"high voltage reduces resistance of the cables\" — high voltage reduces CURRENT I, which slashes power loss via P = I²R!",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "A transformer consists of primary and secondary coils wound on a laminated soft-iron core. Alternating current in the primary produces a continuously changing magnetic field in the iron core, inducing an alternating e.m.f. in the secondary coil (transformers ONLY work with AC!)."
            },
            {
              "id": "mp2",
              "markDescription": "Transformer turns ratio equation: Vp ÷ Vs = Np ÷ Ns. Step-up transformers have Ns > Np (increase V); step-down transformers have Ns < Np (decrease V)."
            },
            {
              "id": "mp3",
              "markDescription": "Never say \"high voltage reduces resistance of the cables\" — high voltage reduces CURRENT I, which slashes power loss via P = I²R!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-13",
    "subtopicId": "igcse-phys-5-1",
    "number": 13,
    "stimulus": "Structured exam question on Topic 5.1 (The Nuclear Model of the Atom, Isotopes, Fission & Fusion). Study the information and answer parts (a), (b), and (c).",
    "diagram": "atomic-structure",
    "parts": [
      {
        "id": "igcse-phys-exam-13a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of The Nuclear Model of the Atom, Isotopes, Fission & Fusion?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Explain how Rutherford’s gold foil observations established the nuclear model of the atom.",
          "It violates the core rule of The Nuclear Model of the Atom, Isotopes, Fission & Fusion by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Nucleon number (A).",
          "It assumes Isotope remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-13b",
        "label": "b)",
        "prompt": "Define \"Nucleon number (A)\" and explain the key principles covered in \"Nuclide Notation & Isotopes\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Nucleon number (A): Total number of protons plus neutrons in an atomic nucleus. Furthermore, Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z. Isotopes are atoms of the SAME element having the SAME number of protons (Z) but DIFFERENT numbers of neutrons (A − Z). Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Nucleon number (A): Total number of protons plus neutrons in an atomic nucleus."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Nuclide notation ᴬ_Z X: Proton (atomic) number Z = number of protons (defines the element); Nucleon (mass) number A = protons + neutrons; Neutron number N = A − Z."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Isotopes are atoms of the SAME element having the SAME number of protons (Z) but DIFFERENT numbers of neutrons (A − Z). Example: Carbon-12 (6p, 6n) and Carbon-14 (6p, 8n)."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-13c",
        "label": "c)",
        "prompt": "Apply \"Nuclear Fission & Nuclear Fusion\" to explain how examiners award full marks on The Nuclear Model of the Atom, Isotopes, Fission & Fusion problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators). Nuclear FUSION: Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg. Avoid: Do not mix up fission and fusion! Fission = Splitting (like a fissure/crack); Fusion = Fusing/joining light nuclei together.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators)."
            },
            {
              "id": "mp2",
              "markDescription": "Nuclear FUSION: Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg."
            },
            {
              "id": "mp3",
              "markDescription": "Do not mix up fission and fusion! Fission = Splitting (like a fissure/crack); Fusion = Fusing/joining light nuclei together."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-14",
    "subtopicId": "igcse-phys-5-2",
    "number": 14,
    "stimulus": "Structured exam question on Topic 5.2 (Radioactive Decay (Alpha, Beta, Gamma) & Half-Life). Study the information and answer parts (a), (b), and (c).",
    "diagram": "forces-free-body",
    "parts": [
      {
        "id": "igcse-phys-exam-14a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Radioactive Decay (Alpha, Beta, Gamma) & Half-Life?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Compare α, β, and γ radiation by nature, charge, penetration, ionising power, and field deflection.",
          "It violates the core rule of Radioactive Decay (Alpha, Beta, Gamma) & Half-Life by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Alpha particle.",
          "It assumes Beta particle remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-14b",
        "label": "b)",
        "prompt": "Define \"Alpha particle\" and explain the key principles covered in \"Balanced Nuclear Decay Equations\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Alpha particle: Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper). Furthermore, Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation. Alpha decay (loses 2p and 2n): ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Alpha particle: Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper)."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Alpha decay (loses 2p and 2n): ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-14c",
        "label": "c)",
        "prompt": "Apply \"Half-Life, Uses & Safe Handling\" to explain how examiners award full marks on Radioactive Decay (Alpha, Beta, Gamma) & Half-Life problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Radioactive decay is spontaneous and RANDOM — it is impossible to predict when a single nucleus will decay, and decay rate is unaffected by temperature or chemical bonding. Half-life (t_½) is the time taken for HALF of the unstable nuclei in a sample to decay (or for the corrected count rate/activity in becquerels, Bq, to halve).",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Radioactive decay is spontaneous and RANDOM — it is impossible to predict when a single nucleus will decay, and decay rate is unaffected by temperature or chemical bonding."
            },
            {
              "id": "mp2",
              "markDescription": "Half-life (t_½) is the time taken for HALF of the unstable nuclei in a sample to decay (or for the corrected count rate/activity in becquerels, Bq, to halve)."
            },
            {
              "id": "mp3",
              "markDescription": "Penetration order: Paper stops Alpha, Aluminium stops Beta, Lead reduces Gamma (P-A-L). Ionising power is the EXACT reverse!"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-15",
    "subtopicId": "igcse-phys-6-1",
    "number": 15,
    "stimulus": "Structured exam question on Topic 6.1 (Earth, The Solar System & Orbital Motion). Study the information and answer parts (a), (b), and (c).",
    "diagram": "transverse-wave",
    "parts": [
      {
        "id": "igcse-phys-exam-15a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Earth, The Solar System & Orbital Motion?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Explain day/night, the seasons (23.5° tilt), and lunar phases clearly.",
          "It violates the core rule of Earth, The Solar System & Orbital Motion by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Orbital speed.",
          "It assumes Accretion remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-15b",
        "label": "b)",
        "prompt": "Define \"Orbital speed\" and explain the key principles covered in \"The Solar System & Accretion Model\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Orbital speed: Average speed along a circular orbit: v = 2πr ÷ T. Furthermore, Order of the 8 planets from the Sun: Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants). Accretion model of Solar System formation: A rotating nebula of gas and dust collapsed under gravity into a swirling accretion disc. The hot dense core formed the Sun; near the Sun only rocky/metallic elements with high melting points condensed (rocky planets), whereas further out cooler gases and ices clumped into gas giants.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Orbital speed: Average speed along a circular orbit: v = 2πr ÷ T."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Order of the 8 planets from the Sun: Mercury, Venus, Earth, Mars (4 small, rocky, dense inner planets) — Asteroid Belt — Jupiter, Saturn, Uranus, Neptune (4 large, cold, low-density gas/ice giants)."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Accretion model of Solar System formation: A rotating nebula of gas and dust collapsed under gravity into a swirling accretion disc. The hot dense core formed the Sun; near the Sun only rocky/metallic elements with high melting points condensed (rocky planets), whereas further out cooler gases and ices clumped into gas giants."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-15c",
        "label": "c)",
        "prompt": "Apply \"Orbital Speed & Elliptical Comet Orbits\" to explain how examiners award full marks on Earth, The Solar System & Orbital Motion problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Average orbital speed for a circular orbit of radius r and orbital period T: v = (2 × π × r) ÷ T. As orbital radius increases across the Solar System, the Sun’s gravitational pull weakens, so outer planets orbit much MORE SLOWLY and have much LONGER orbital periods (years) than inner planets.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Average orbital speed for a circular orbit of radius r and orbital period T: v = (2 × π × r) ÷ T."
            },
            {
              "id": "mp2",
              "markDescription": "As orbital radius increases across the Solar System, the Sun’s gravitational pull weakens, so outer planets orbit much MORE SLOWLY and have much LONGER orbital periods (years) than inner planets."
            },
            {
              "id": "mp3",
              "markDescription": "Explain day/night, the seasons (23.5° tilt), and lunar phases clearly."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-exam-16",
    "subtopicId": "igcse-phys-6-2",
    "number": 16,
    "stimulus": "Structured exam question on Topic 6.2 (Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)). Study the information and answer parts (a), (b), and (c).",
    "parts": [
      {
        "id": "igcse-phys-exam-16a",
        "label": "a)",
        "prompt": "Which statement accurately describes a core principle of Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)?",
        "kind": "mcq",
        "marks": 1,
        "options": [
          "Trace the complete stellar life cycle for both Sun-sized stars and high-mass stars.",
          "It violates the core rule of Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law) by reversing the relationship between variables.",
          "It ignores the required standard units and boundary conditions for Main sequence star.",
          "It assumes Red-shift remains zero under all operating conditions."
        ],
        "correctIndex": 0
      },
      {
        "id": "igcse-phys-exam-16b",
        "label": "b)",
        "prompt": "Define \"Main sequence star\" and explain the key principles covered in \"Red-Shift, CMBR & The Big Bang Theory\".",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Main sequence star: Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion. Furthermore, Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us. Key observation: The FURTHER away a galaxy is, the GREATER its red-shift — meaning distant galaxies are receding FASTER than closer ones, proving the Universe is expanding.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Defines Main sequence star: Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion."
            },
            {
              "id": "mp2",
              "markDescription": "States key mechanism/formula: Red-shift: Light emitted by distant galaxies is shifted toward the RED (longer wavelength, lower frequency) end of the spectrum because the space between galaxies is expanding and the galaxies are receding away from us."
            },
            {
              "id": "mp3",
              "markDescription": "Applies principle accurately: Key observation: The FURTHER away a galaxy is, the GREATER its red-shift — meaning distant galaxies are receding FASTER than closer ones, proving the Universe is expanding."
            }
          ]
        }
      },
      {
        "id": "igcse-phys-exam-16c",
        "label": "c)",
        "prompt": "Apply \"Hubble’s Law & Age of the Universe (CIE Extended)\" to explain how examiners award full marks on Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law) problems.",
        "kind": "short-answer",
        "marks": 3,
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Hubble’s Law states that a galaxy’s recession speed v is directly proportional to its distance d from Earth: v = H₀ × d, where H₀ = v ÷ d is the Hubble constant. Current measured value of the Hubble constant: H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹.",
          "markPoints": [
            {
              "id": "mp1",
              "markDescription": "Hubble’s Law states that a galaxy’s recession speed v is directly proportional to its distance d from Earth: v = H₀ × d, where H₀ = v ÷ d is the Hubble constant."
            },
            {
              "id": "mp2",
              "markDescription": "Current measured value of the Hubble constant: H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹."
            },
            {
              "id": "mp3",
              "markDescription": "Sun-like path: Nebula → Protostar → Main Sequence → Red Giant → Planetary Nebula → White Dwarf. Massive path: ... → Red Supergiant → Supernova → Neutron Star / Black Hole."
            }
          ]
        }
      }
    ]
  }
];

export const IGCSE_PHYSICS_PAST_PAPERS: PastPaperDoc[] = [
  {
    "id": "igcse-phys-pp-2024-p2",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0625 Paper 2 Multiple Choice Extended (0625/22)",
    "tier": "Extended",
    "series": "May/June 2024",
    "paperCode": "0625/22",
    "durationMinutes": 45,
    "totalMarks": 40,
    "insertNote": "Use g = 9.8 N/kg throughout CIE 0625 (2023–2025 syllabus).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.1 — Physical Quantities, Speed & Motion Graphs] (a) Define Scalar. (b) Apply the principles of \"Measurement Techniques, Scalars & Vectors\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Scalar — A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy).",
          "2 marks: Length is measured with rulers (to 1 mm), vernier callipers (to 0.1 mm), or micrometer screw gauges (to 0.01 mm). Always check for zero error and read perpendicular to the scale to avoid parallax error.",
          "1 mark: To measure the period T of a pendulum accurately, time 20 complete oscillations with a stopwatch and divide the total time by 20 — this reduces the percentage error from human reaction time."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 1.3 — Moments, Momentum, Impulse & Pressure] (a) Define Moment. (b) Apply the principles of \"Momentum, Conservation & Impulse\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Moment — Turning effect of a force about a pivot: M = F × d (N m).",
          "2 marks: Momentum is a vector quantity defined as: p = m × v (units: kg m/s or N s).",
          "1 mark: Principle of conservation of momentum: In any closed system (no external forces), total momentum before a collision or explosion equals total momentum after: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 2.1 — Kinetic Particle Model of Matter & Gas Laws] (a) Define Absolute zero. (b) Apply the principles of \"Gas Pressure & Boyle’s Law (p₁V₁ = p₂V₂)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Absolute zero — 0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy.",
          "2 marks: Gas pressure arises from millions of gas particles colliding with the container walls every second. Each collision changes a particle’s momentum, exerting a force on the wall (p = F ÷ A).",
          "1 mark: Heating a fixed mass of gas at constant volume increases average particle kinetic energy and speed → particles hit the walls MORE FREQUENTLY and HARDER (greater momentum change per collision) → pressure increases."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 3.1 — General Wave Properties, Reflection, Refraction & Diffraction] (a) Define Transverse wave. (b) Apply the principles of \"Transverse vs Longitudinal Waves & Wave Parameters\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Transverse wave — Wave whose oscillations are perpendicular to the direction of energy transfer.",
          "2 marks: Waves transfer ENERGY and information without transferring matter from place to place.",
          "1 mark: Transverse waves: Vibrations are perpendicular (90°) to the direction of wave travel (examples: all electromagnetic waves, water surface waves, seismic S-waves)."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2024-p4",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0625 Paper 4 Extended Theory (0625/42)",
    "tier": "Extended",
    "series": "May/June 2024",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "insertNote": "Includes CIE 0625 Constants & Electrical Symbols Data Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.4 — Energy Stores, Work Done, Power & Efficiency] (a) Define Power. (b) Apply the principles of \"Energy Stores, Transfers & Mechanical Work\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Power — Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W).",
          "2 marks: Energy is stored in kinetic, gravitational potential, chemical, elastic (strain), nuclear, electrostatic, magnetic, and internal (thermal) stores.",
          "1 mark: Energy is transferred between stores mechanically (forces doing work), electrically (currents), by heating (conduction/convection/radiation), or by waves (light/sound)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.2 — Specific Heat Capacity, Latent Heat & Thermal Transfer] (a) Define Internal energy. (b) Apply the principles of \"Thermal Expansion & Real-World Applications\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Internal energy — Total random kinetic and potential energy of all particles inside a system.",
          "2 marks: When heated, particles vibrate or move faster and push further apart, causing expansion: gases expand the most, liquids moderately, and solids the least.",
          "1 mark: Practical consequences: Railway tracks and bridges have expansion joints to prevent buckling in summer; overhead power cables are hung slack so they do not snap in winter."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 3.2 — Light, Lenses, Total Internal Reflection & EM Spectrum] (a) Define Snell’s Law. (b) Apply the principles of \"Dispersion & The Electromagnetic Spectrum\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Snell’s Law — n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index.",
          "2 marks: Dispersion: A glass prism splits white light into ROYGBIV because violet light slows down slightly more (higher n) than red light and refracts through a larger angle.",
          "1 mark: All EM waves are transverse and travel through a vacuum at c = 3.0 × 10⁸ m/s. Order of INCREASING frequency (decreasing wavelength): Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma rays."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.1 — Electric Charge, Current, EMF, Potential Difference & Resistance] (a) Define Electric current. (b) Apply the principles of \"Electrostatics, Current & Charge (Q = It)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Electric current — Rate of flow of charge: I = Q ÷ t, measured in amperes (A).",
          "2 marks: Charging insulators by friction transfers NEGATIVELY CHARGED ELECTRONS only (protons never move in solids). Gaining electrons makes an object negative; losing electrons leaves it positive. Like charges repel; opposite charges attract.",
          "1 mark: An electric field is a region where an electric charge experiences a force; field lines always point away from positive charges and toward negative charges."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2024-p6",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "CIE 0625 Paper 6 Alternative to Practical (0625/62)",
    "tier": "Core & Extended",
    "series": "May/June 2024",
    "paperCode": "0625/62",
    "durationMinutes": 60,
    "totalMarks": 40,
    "insertNote": "Experimental Planning, Ray-Tracing & Graph Analysis Paper.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.1 — General Wave Properties, Reflection, Refraction & Diffraction] (a) Define Transverse wave. (b) Apply the principles of \"Transverse vs Longitudinal Waves & Wave Parameters\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Transverse wave — Wave whose oscillations are perpendicular to the direction of energy transfer.",
          "2 marks: Waves transfer ENERGY and information without transferring matter from place to place.",
          "1 mark: Transverse waves: Vibrations are perpendicular (90°) to the direction of wave travel (examples: all electromagnetic waves, water surface waves, seismic S-waves)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 3.3 — Sound Waves, Echoes & Ultrasound] (a) Define Audible range. (b) Apply the principles of \"Pitch, Loudness & Ultrasound Applications\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Audible range — Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz.",
          "2 marks: Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz).",
          "1 mark: Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 4.2 — Series & Parallel Circuits, Potential Dividers & Mains Safety] (a) Define Parallel circuit. (b) Apply the principles of \"Electrical Hazards & Mains Safety\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Parallel circuit — Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced.",
          "2 marks: Mains wiring: Live wire (brown, ~230 V AC), Neutral wire (blue, ~0 V, completes circuit), Earth wire (green/yellow, safety path to ground). Switches and fuses MUST ALWAYS be placed in the LIVE wire!",
          "1 mark: Fuse: Contains a thin wire that melts and breaks the circuit if current exceeds its rating (pick the fuse rating just ABOVE normal operating current, e.g., 5 A fuse for a 4.2 A appliance)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 5.1 — The Nuclear Model of the Atom, Isotopes, Fission & Fusion] (a) Define Nucleon number (A). (b) Apply the principles of \"Rutherford Scattering & Subatomic Particles\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Nucleon number (A) — Total number of protons plus neutrons in an atomic nucleus.",
          "2 marks: Geiger–Marsden–Rutherford alpha scattering experiment fired positive alpha particles at ultra-thin gold foil in a vacuum:",
          "1 mark: Observation 1: Most alpha particles passed straight through undeflected → Conclusion: The atom is mostly EMPTY SPACE."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "CIE 0625 Paper 2 Multiple Choice Extended (0625/22)",
    "tier": "Extended",
    "series": "Oct/Nov 2023",
    "paperCode": "0625/22",
    "durationMinutes": 45,
    "totalMarks": 40,
    "insertNote": "Use g = 9.8 N/kg throughout CIE 0625.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 4.1 — Electric Charge, Current, EMF, Potential Difference & Resistance] (a) Define Electric current. (b) Apply the principles of \"Electrostatics, Current & Charge (Q = It)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Electric current — Rate of flow of charge: I = Q ÷ t, measured in amperes (A).",
          "2 marks: Charging insulators by friction transfers NEGATIVELY CHARGED ELECTRONS only (protons never move in solids). Gaining electrons makes an object negative; losing electrons leaves it positive. Like charges repel; opposite charges attract.",
          "1 mark: An electric field is a region where an electric charge experiences a force; field lines always point away from positive charges and toward negative charges."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.3 — Magnetism, Motor Effect, EM Induction & Transformers] (a) Define Motor effect. (b) Apply the principles of \"Electromagnetic Induction & AC Generators\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Motor effect — Force experienced by a current-carrying wire placed across a magnetic field.",
          "2 marks: Electromagnetic induction: Whenever a conductor cuts across magnetic field lines (or magnetic flux through a coil changes), an e.m.f. is INDUCED across its ends.",
          "1 mark: Increase induced e.m.f. by: (1) moving the magnet/coil faster, (2) using a stronger magnet, or (3) using more turns on the coil."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.2 — Radioactive Decay (Alpha, Beta, Gamma) & Half-Life] (a) Define Alpha particle. (b) Apply the principles of \"Half-Life, Uses & Safe Handling\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Alpha particle — Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper).",
          "2 marks: Radioactive decay is spontaneous and RANDOM — it is impossible to predict when a single nucleus will decay, and decay rate is unaffected by temperature or chemical bonding.",
          "1 mark: Half-life (t_½) is the time taken for HALF of the unstable nuclei in a sample to decay (or for the corrected count rate/activity in becquerels, Bq, to halve)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 6.2 — Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)] (a) Define Main sequence star. (b) Apply the principles of \"Light-Years & Life Cycle of Stars\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Main sequence star — Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion.",
          "2 marks: A light-year is a unit of DISTANCE (not time!) — the distance light travels in a vacuum in one year: 1 light-year ≈ 9.5 × 10¹⁵ m. Our Sun sits in the Milky Way galaxy (~100,000 light-years across).",
          "1 mark: Star birth: Gravity pulls dust and hydrogen gas in a NEBULA inward to form a dense hot PROTOSTAR. Once core temperature reaches millions of kelvin, hydrogen nuclear FUSION begins."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2023-p4",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "CIE 0625 Paper 4 Extended Theory (0625/42)",
    "tier": "Extended",
    "series": "Oct/Nov 2023",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "insertNote": "Includes CIE 0625 Constants & Electrical Symbols Data Sheet.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 4.3 — Magnetism, Motor Effect, EM Induction & Transformers] (a) Define Motor effect. (b) Apply the principles of \"Magnetic Fields, Electromagnets & The Motor Effect\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Motor effect — Force experienced by a current-carrying wire placed across a magnetic field.",
          "2 marks: Magnetic field lines run from NORTH to SOUTH outside a magnet; closer spacing indicates a stronger field. Soft iron is easily magnetised and demagnetised (ideal for electromagnets and transformer cores); steel retains magnetism (permanent magnets).",
          "1 mark: A current-carrying wire creates concentric circular magnetic field lines (Right-Hand Grip Rule). Coiling the wire into a solenoid with a soft-iron core builds a strong controllable electromagnet."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 5.2 — Radioactive Decay (Alpha, Beta, Gamma) & Half-Life] (a) Define Alpha particle. (b) Apply the principles of \"Balanced Nuclear Decay Equations\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Alpha particle — Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper).",
          "2 marks: Both total nucleon number (top) and total proton number (bottom) MUST balance on both sides of a nuclear equation.",
          "1 mark: Alpha decay (loses 2p and 2n): ᴬ_Z X → ᴬ⁻⁴_{Z−2} Y + ⁴₂α. Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 6.2 — Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)] (a) Define Main sequence star. (b) Apply the principles of \"Hubble’s Law & Age of the Universe (CIE Extended)\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Main sequence star — Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion.",
          "2 marks: Hubble’s Law states that a galaxy’s recession speed v is directly proportional to its distance d from Earth: v = H₀ × d, where H₀ = v ÷ d is the Hubble constant.",
          "1 mark: Current measured value of the Hubble constant: H₀ ≈ 2.2 × 10⁻¹⁸ s⁻¹."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 1.2 — Mass, Weight, Density, Forces & Newton’s Laws] (a) Define Density. (b) Apply the principles of \"Mass, Weight & Density\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Density — Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³).",
          "2 marks: Mass (kg) is a measure of the quantity of matter in an object and resists changes in motion (inertia). Mass stays constant everywhere in the Universe.",
          "1 mark: Weight (N) is the gravitational force acting on a mass: W = m × g, where gravitational field strength g = W ÷ m ≈ 9.8 N/kg on Earth (~1.6 N/kg on the Moon)."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2022-p2",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "CIE 0625 Paper 2 Multiple Choice Extended (0625/22)",
    "tier": "Extended",
    "series": "May/June 2022",
    "paperCode": "0625/22",
    "durationMinutes": 45,
    "totalMarks": 40,
    "insertNote": "Includes CIE 0625 Physical Constants Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 1.3 — Moments, Momentum, Impulse & Pressure] (a) Define Moment. (b) Apply the principles of \"Moments, Principle of Moments & Centre of Gravity\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Moment — Turning effect of a force about a pivot: M = F × d (N m).",
          "2 marks: The moment of a force measures its turning effect about a pivot: Moment = Force × perpendicular distance from the pivot (M = F × d, unit: N m).",
          "1 mark: For an object to be in complete equilibrium, two conditions must hold: (1) Zero resultant force, AND (2) Zero resultant moment (total clockwise moments = total anticlockwise moments about any pivot)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 2.1 — Kinetic Particle Model of Matter & Gas Laws] (a) Define Absolute zero. (b) Apply the principles of \"Temperature, Absolute Zero & The Kelvin Scale\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Absolute zero — 0 K (−273 °C), the temperature at which particles possess minimum possible kinetic energy.",
          "2 marks: Temperature is a measure of the average kinetic energy of the particles in a substance.",
          "1 mark: Absolute zero (−273 °C or 0 K) is the lowest theoretically possible temperature, where particles have minimum (zero) kinetic energy and exert zero gas pressure."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 3.1 — General Wave Properties, Reflection, Refraction & Diffraction] (a) Define Transverse wave. (b) Apply the principles of \"Reflection, Refraction & Diffraction in a Ripple Tank\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Transverse wave — Wave whose oscillations are perpendicular to the direction of energy transfer.",
          "2 marks: Reflection: Wavefronts bounce off a barrier with angle of incidence = angle of reflection (i = r); speed, frequency, and wavelength stay unchanged.",
          "1 mark: Refraction: Water waves moving from deep to shallow water SLOW DOWN, their wavelength DECREASES, and if they hit the boundary at an angle they bend TOWARD the normal (frequency stays constant)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 3.3 — Sound Waves, Echoes & Ultrasound] (a) Define Audible range. (b) Apply the principles of \"Pitch, Loudness & Ultrasound Applications\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Audible range — Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz.",
          "2 marks: Human audible hearing range is approximately 20 Hz to 20,000 Hz (20 kHz).",
          "1 mark: Higher FREQUENCY produces a higher PITCH (closer waves on an oscilloscope trace). Larger AMPLITUDE produces a LOUDER sound (taller peaks on an oscilloscope trace)."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2022-p4",
    "specEra": "new-9-1",
    "year": "2022",
    "title": "CIE 0625 Paper 4 Extended Theory (0625/42)",
    "tier": "Extended",
    "series": "May/June 2022",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "insertNote": "Includes CIE 0625 Physical Constants Insert.",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 2.2 — Specific Heat Capacity, Latent Heat & Thermal Transfer] (a) Define Internal energy. (b) Apply the principles of \"Specific Heat Capacity & Latent Heat\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Internal energy — Total random kinetic and potential energy of all particles inside a system.",
          "2 marks: Internal energy is the sum of the random kinetic energies AND intermolecular potential energies of all particles in a body.",
          "1 mark: Specific heat capacity (c) is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K): ΔE = m × c × ΔT (units of c: J/(kg °C)). Water has a very high c ≈ 4,200 J/(kg °C)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 3.2 — Light, Lenses, Total Internal Reflection & EM Spectrum] (a) Define Snell’s Law. (b) Apply the principles of \"Thin Converging & Diverging Lenses\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Snell’s Law — n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index.",
          "2 marks: A thin converging (convex) lens bends parallel rays to meet at the principal focus F; focal length f is the distance from the optical centre to F.",
          "1 mark: Ray diagram rules for a converging lens: (1) Ray parallel to principal axis refracts through F; (2) Ray through optical centre continues straight undeviated."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 4.1 — Electric Charge, Current, EMF, Potential Difference & Resistance] (a) Define Electric current. (b) Apply the principles of \"Electrical Power & Kilowatt-Hours\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Electric current — Rate of flow of charge: I = Q ÷ t, measured in amperes (A).",
          "2 marks: Electrical power: P = I × V = I²R = V² ÷ R (watts, W).",
          "1 mark: Electrical energy transferred: E = P × t = I × V × t (joules, J)."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 4.3 — Magnetism, Motor Effect, EM Induction & Transformers] (a) Define Motor effect. (b) Apply the principles of \"Magnetic Fields, Electromagnets & The Motor Effect\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Motor effect — Force experienced by a current-carrying wire placed across a magnetic field.",
          "2 marks: Magnetic field lines run from NORTH to SOUTH outside a magnet; closer spacing indicates a stronger field. Soft iron is easily magnetised and demagnetised (ideal for electromagnets and transformer cores); steel retains magnetism (permanent magnets).",
          "1 mark: A current-carrying wire creates concentric circular magnetic field lines (Right-Hand Grip Rule). Coiling the wire into a solenoid with a soft-iron core builds a strong controllable electromagnet."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2019-p4",
    "specEra": "old",
    "year": "2019",
    "title": "CIE 0625 Paper 4 Extended Theory (Legacy Series — 0625/42)",
    "tier": "Extended",
    "series": "May/June 2019",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "insertNote": "Legacy Syllabus Series (g = 10 N/kg prior to 2023 Space Physics expansion).",
    "sampleQuestions": [
      {
        "number": "01",
        "question": "[Topic 3.3 — Sound Waves, Echoes & Ultrasound] (a) Define Audible range. (b) Apply the principles of \"Production, Transmission & Speed of Sound\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Audible range — Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz.",
          "2 marks: Sound is produced by vibrating sources and travels as a LONGITUDINAL wave of compressions and rarefactions. Sound CANNOT travel through a vacuum (demonstrated by the bell-in-a-vacuum-jar experiment).",
          "1 mark: Speed of sound depends on how closely packed particles are: fastest in solids (~5,000 m/s in steel), moderate in liquids (~1,500 m/s in water), slowest in gases (~330–340 m/s in air at room temperature)."
        ]
      },
      {
        "number": "02",
        "question": "[Topic 4.2 — Series & Parallel Circuits, Potential Dividers & Mains Safety] (a) Define Parallel circuit. (b) Apply the principles of \"Sensing Components & Potential Dividers\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Parallel circuit — Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced.",
          "2 marks: NTC Thermistor: As temperature increases, its resistance decreases (used in fire alarms and incubators).",
          "1 mark: Light-Dependent Resistor (LDR): As light intensity INCREASES, its resistance DECREASES (bright light → low R; darkness → high R; used in automatic street lamps)."
        ]
      },
      {
        "number": "03",
        "question": "[Topic 5.1 — The Nuclear Model of the Atom, Isotopes, Fission & Fusion] (a) Define Nucleon number (A). (b) Apply the principles of \"Nuclear Fission & Nuclear Fusion\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Nucleon number (A) — Total number of protons plus neutrons in an atomic nucleus.",
          "2 marks: Nuclear FISSION: A heavy unstable nucleus (e.g., Uranium-235) absorbs a slow neutron and SPLITS into two smaller daughter nuclei, releasing 2–3 fast neutrons and vast kinetic/thermal energy. Excess neutrons can trigger a chain reaction (controlled in nuclear reactors using boron control rods and graphite/water moderators).",
          "1 mark: Nuclear FUSION: Two light nuclei (e.g., hydrogen isotopes deuterium and tritium) JOIN at extremely high temperatures and pressures (as in the core of the Sun) to form a heavier helium nucleus, releasing even greater energy per kg."
        ]
      },
      {
        "number": "04",
        "question": "[Topic 6.1 — Earth, The Solar System & Orbital Motion] (a) Define Orbital speed. (b) Apply the principles of \"Earth’s Motion, Seasons & The Moon\" to solve and explain a standard exam scenario.",
        "marks": 4,
        "markScheme": [
          "1 mark: Accurate definition of Orbital speed — Average speed along a circular orbit: v = 2πr ÷ T.",
          "2 marks: Day and night: Earth spins on its tilted axis (23.5°) once every 24 hours; the Sun appears to rise in the east and set in the west.",
          "1 mark: Seasons: Earth orbits the Sun once every ~365.25 days while keeping its 23.5° axial tilt fixed. When the Northern Hemisphere tilts TOWARD the Sun, it receives more direct sunlight over longer days (summer), while the Southern Hemisphere experiences winter."
        ]
      }
    ]
  }
];

export const IGCSE_PHYSICS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "ipkt-1",
    "term": "Acceleration",
    "definition": "Rate of change of velocity: a = (v − u) ÷ t (m/s²).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "ipkt-2",
    "term": "Vector quantity",
    "definition": "Physical quantity having both magnitude and direction (e.g., force, velocity, momentum).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "ipkt-3",
    "term": "Density",
    "definition": "Mass per unit volume of a substance: ρ = m ÷ V (kg/m³ or g/cm³).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "ipkt-4",
    "term": "Terminal velocity",
    "definition": "Constant maximum falling speed reached when upward drag equals downward weight.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "ipkt-5",
    "term": "Moment",
    "definition": "Turning effect of a force about a pivot: M = F × d (N m).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "ipkt-6",
    "term": "Impulse",
    "definition": "Product of force and time (FΔt), equal to change in momentum (Δp).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "ipkt-7",
    "term": "Efficiency",
    "definition": "Ratio of useful energy/power output to total energy/power input, expressed as a percentage.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-4",
    "subtopicCode": "1.4"
  },
  {
    "id": "ipkt-8",
    "term": "Brownian motion",
    "definition": "Random erratic movement of visible smoke/pollen specks caused by bombardment from invisible fluid molecules.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "ipkt-9",
    "term": "Absolute zero",
    "definition": "0 K (−273 °C), the lowest possible temperature where particles have minimum kinetic energy.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "ipkt-10",
    "term": "Specific heat capacity",
    "definition": "Thermal energy required to raise 1 kg of a substance by 1 °C: ΔE = mcΔT.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "ipkt-11",
    "term": "Latent heat",
    "definition": "Energy absorbed or released during a change of state at constant temperature.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "ipkt-12",
    "term": "Diffraction",
    "definition": "Spreading of waves around obstacles or through gaps, strongest when gap width ≈ wavelength.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "ipkt-13",
    "term": "Total internal reflection",
    "definition": "Complete reflection inside a denser medium when angle of incidence exceeds critical angle c.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "ipkt-14",
    "term": "Ultrasound",
    "definition": "Longitudinal sound waves with frequencies greater than 20 kHz.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-3",
    "subtopicCode": "3.3"
  },
  {
    "id": "ipkt-15",
    "term": "Electromotive force",
    "definition": "Electrical work done by a power source per unit charge driven around a complete circuit (V).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "ipkt-16",
    "term": "Potential divider",
    "definition": "Series resistor arrangement splitting supply p.d. according to V₁/V₂ = R₁/R₂.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "ipkt-17",
    "term": "Electromagnetic induction",
    "definition": "Generation of an e.m.f. across a conductor cutting magnetic field lines or experiencing changing flux.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "ipkt-18",
    "term": "Isotopes",
    "definition": "Atoms of the same element with the same proton number but different neutron numbers.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "ipkt-19",
    "term": "Half-life",
    "definition": "Time taken for half the radioactive nuclei in a sample to decay, or corrected count rate to halve.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "ipkt-20",
    "term": "Orbital speed",
    "definition": "Average circular orbit speed given by v = 2πr ÷ T.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "ipkt-21",
    "term": "Red-shift",
    "definition": "Increase in observed wavelength of light from receding galaxies due to cosmic expansion.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "ipkt-22",
    "term": "Hubble constant (H₀)",
    "definition": "Ratio of galactic recession speed to distance (H₀ = v ÷ d ≈ 2.2 × 10⁻¹⁸ s⁻¹).",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-phys-kt-122",
    "term": "Scalar",
    "definition": "A physical quantity that has magnitude only and no direction (e.g., speed, mass, energy).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-phys-kt-123",
    "term": "Vector",
    "definition": "A physical quantity with both magnitude and direction (e.g., velocity, force, momentum).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-phys-kt-124",
    "term": "Uniform acceleration",
    "definition": "Constant rate of increase of velocity, shown as a straight line on a speed–time graph.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-phys-kt-125",
    "term": "Parallax error",
    "definition": "Apparent shift in reading a scale caused by viewing the pointer or meniscus from an angle rather than straight on at eye level.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-phys-kt-126",
    "term": "Gradient",
    "definition": "Steepness of a graph calculated as vertical change divided by horizontal change (Δy ÷ Δx).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-phys-kt-127",
    "term": "Spring constant",
    "definition": "Force required per unit extension of a spring: k = F ÷ x (N/m).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-phys-kt-128",
    "term": "Resultant force",
    "definition": "The single force that has the same effect on an object’s motion as all individual forces combined.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-phys-kt-129",
    "term": "Inertia",
    "definition": "The tendency of an object to remain at rest or continue moving at constant velocity unless acted on by a resultant external force.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-phys-kt-130",
    "term": "Gravitational field strength",
    "definition": "Gravitational force exerted per unit mass at a point in space: g = W ÷ m (N/kg).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-phys-kt-131",
    "term": "Limit of proportionality",
    "definition": "The point on a load–extension graph beyond which extension is no longer directly proportional to load.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-phys-kt-132",
    "term": "Momentum",
    "definition": "Product of mass and velocity (p = mv), a conserved vector quantity in closed collisions.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-phys-kt-133",
    "term": "Pascal (Pa)",
    "definition": "SI unit of pressure equal to one newton per square metre (1 N/m²).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-phys-kt-134",
    "term": "Centre of gravity",
    "definition": "The point in or near an object through which the whole weight of the body can be considered to act.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-phys-kt-135",
    "term": "Equilibrium",
    "definition": "State of balance where both resultant force and resultant turning moment equal zero.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-phys-kt-136",
    "term": "Power",
    "definition": "Rate of doing work or transferring energy: P = E ÷ t, measured in watts (W).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-4",
    "subtopicCode": "1.4"
  },
  {
    "id": "igcse-phys-kt-137",
    "term": "Work done",
    "definition": "Force multiplied by distance moved in the direction of the force: W = Fd (J).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-4",
    "subtopicCode": "1.4"
  },
  {
    "id": "igcse-phys-kt-138",
    "term": "Renewable",
    "definition": "An energy resource that is naturally replenished as fast as or faster than it is used and will not run out.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-4",
    "subtopicCode": "1.4"
  },
  {
    "id": "igcse-phys-kt-139",
    "term": "Boyle’s Law",
    "definition": "p₁V₁ = p₂V₂ for a fixed mass of gas held at constant temperature.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-phys-kt-140",
    "term": "Internal energy",
    "definition": "Total random kinetic and potential energy of all particles inside a system.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-phys-kt-141",
    "term": "Evaporation",
    "definition": "Escape of the most energetic molecules from a liquid surface below boiling point, cooling the remaining liquid.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-phys-kt-142",
    "term": "Thermal conduction",
    "definition": "Transfer of thermal energy through a solid by lattice vibrations and (in metals) free electron diffusion.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-phys-kt-143",
    "term": "Convection current",
    "definition": "Circular flow in a liquid or gas driven by hotter, less dense fluid rising and cooler, denser fluid sinking.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-phys-kt-144",
    "term": "Transverse wave",
    "definition": "Wave whose oscillations are perpendicular to the direction of energy transfer.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-phys-kt-145",
    "term": "Longitudinal wave",
    "definition": "Wave whose oscillations are parallel to the direction of energy transfer (compressions & rarefactions).",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-phys-kt-146",
    "term": "Frequency",
    "definition": "Number of complete oscillations passing a point per second (Hz).",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-phys-kt-147",
    "term": "Wavelength",
    "definition": "Distance from one point on a wave to the exact corresponding point on the next adjacent wave (e.g., crest to crest), measured in metres.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-phys-kt-148",
    "term": "Compressions",
    "definition": "Regions in a longitudinal wave where particles are pushed closer together, producing higher pressure.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-phys-kt-149",
    "term": "Snell’s Law",
    "definition": "n = sin i ÷ sin r, relating angles of incidence and refraction to refractive index.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-150",
    "term": "Focal length",
    "definition": "Distance from the optical centre of a thin lens to its principal focus F.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-151",
    "term": "Ionising radiation",
    "definition": "High-energy radiation (UV, X-rays, gamma) capable of knocking electrons off atoms and damaging DNA.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-152",
    "term": "Critical angle",
    "definition": "The angle of incidence inside a denser medium for which the refracted ray emerges exactly along the boundary (r = 90°).",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-153",
    "term": "Refractive index",
    "definition": "Ratio of the speed of light in a vacuum to its speed in a material: n = c / v = sin i / sin r.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-154",
    "term": "Virtual",
    "definition": "An optical image where light rays only appear to diverge from a point behind a mirror or lens and cannot be projected onto a screen.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-155",
    "term": "Audible range",
    "definition": "Range of sound frequencies detectable by a healthy human ear: 20 Hz to 20 kHz.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-3",
    "subtopicCode": "3.3"
  },
  {
    "id": "igcse-phys-kt-156",
    "term": "Echo",
    "definition": "Reflected sound wave heard after bouncing off a hard flat surface.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-3",
    "subtopicCode": "3.3"
  },
  {
    "id": "igcse-phys-kt-157",
    "term": "Oscilloscope",
    "definition": "Laboratory instrument that displays electrical voltage signals (such as sound waveforms from a microphone) against time.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-3",
    "subtopicCode": "3.3"
  },
  {
    "id": "igcse-phys-kt-158",
    "term": "Electric current",
    "definition": "Rate of flow of charge: I = Q ÷ t, measured in amperes (A).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-phys-kt-159",
    "term": "Potential difference",
    "definition": "Energy transferred per coulomb of charge across a component: V = W ÷ Q (V).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-phys-kt-160",
    "term": "Ohm’s Law",
    "definition": "Current through a metallic conductor is directly proportional to p.d. at constant temperature (V = IR).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-phys-kt-161",
    "term": "Kilowatt-hour (kWh)",
    "definition": "Unit of electrical energy equal to a 1 kW appliance operating for 1 hour (3.6 × 10⁶ J).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-phys-kt-162",
    "term": "Conventional current",
    "definition": "Standard circuit convention showing current flowing from the positive terminal to the negative terminal of a cell, opposite to electron flow.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-phys-kt-163",
    "term": "Parallel circuit",
    "definition": "Circuit with multiple branches where each branch receives full supply p.d. and total resistance is reduced.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-phys-kt-164",
    "term": "LDR",
    "definition": "Light-Dependent Resistor whose resistance falls when light intensity increases.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-phys-kt-165",
    "term": "Fuse",
    "definition": "Safety device in the live wire that melts to disconnect the circuit when current exceeds a safe rating.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-phys-kt-166",
    "term": "Double insulation",
    "definition": "Design enclosing live electrical parts in two layers of plastic/insulator so no earth wire is required.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-phys-kt-167",
    "term": "Thermistor",
    "definition": "Temperature-dependent semiconductor resistor whose resistance drops markedly as temperature rises (NTC type).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-phys-kt-168",
    "term": "Motor effect",
    "definition": "Force experienced by a current-carrying wire placed across a magnetic field.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "igcse-phys-kt-169",
    "term": "Lenz’s Law",
    "definition": "An induced current always flows in a direction that opposes the magnetic change causing it.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "igcse-phys-kt-170",
    "term": "Step-up transformer",
    "definition": "Transformer with more turns on the secondary coil than primary coil, increasing alternating voltage while decreasing current.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "igcse-phys-kt-171",
    "term": "Split-ring commutator",
    "definition": "Rotating electrical switch in a DC motor that reverses the current through the coil every half-rotation to maintain continuous rotation in one direction.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "igcse-phys-kt-172",
    "term": "Nucleon number (A)",
    "definition": "Total number of protons plus neutrons in an atomic nucleus.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-173",
    "term": "Isotope",
    "definition": "Variants of the same element with identical proton numbers but different neutron numbers.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-174",
    "term": "Nuclear fission",
    "definition": "Splitting of a heavy unstable nucleus into lighter daughter nuclei plus neutrons and energy.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-175",
    "term": "Nuclear fusion",
    "definition": "Joining of two light nuclei at ultra-high temperature/pressure to form a heavier nucleus, powering stars.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-176",
    "term": "Nucleus",
    "definition": "The extremely tiny, dense, positively charged core at the centre of an atom containing protons and neutrons.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-177",
    "term": "Alpha particle",
    "definition": "Helium nucleus (2 protons + 2 neutrons), strongly ionising with short range (stopped by paper).",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-phys-kt-178",
    "term": "Beta particle",
    "definition": "High-speed electron emitted from a nucleus when a neutron decays into a proton.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-phys-kt-179",
    "term": "Becquerel (Bq)",
    "definition": "SI unit of radioactive activity equal to one nuclear decay per second.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-phys-kt-180",
    "term": "Ionising",
    "definition": "Ability of radiation to knock electrons out of neutral atoms to form charged ions, which can damage living DNA.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-phys-kt-181",
    "term": "Background radiation",
    "definition": "Low-level ambient ionising radiation always present in the environment from natural and human-made sources.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-phys-kt-182",
    "term": "Accretion",
    "definition": "Process by which dust and gas particles clump together under gravity to form stars and planets.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-phys-kt-183",
    "term": "Elliptical orbit",
    "definition": "Oval-shaped orbit followed by planets and strongly elongated for comets, with the Sun at one focus.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-phys-kt-184",
    "term": "Accretion disc",
    "definition": "Flattened rotating disc of gas and dust drawn together by gravity around a newly forming star from which planets coalesce.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-phys-kt-185",
    "term": "Orbital period",
    "definition": "The time T taken for a planet, moon, or satellite to complete one full orbit around its parent body.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-phys-kt-186",
    "term": "Main sequence star",
    "definition": "Stable star where inward gravity is balanced by outward pressure from core hydrogen fusion.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-phys-kt-187",
    "term": "CMBR",
    "definition": "Cosmic Microwave Background Radiation — relic thermal radiation from the early Universe stretched into microwaves.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-phys-kt-188",
    "term": "Light-year",
    "definition": "Astronomical unit of distance equal to how far light travels through a vacuum in one Earth year (~9.5 × 10¹⁵ m).",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-phys-kt-189",
    "term": "Supernova",
    "definition": "Catastrophic explosion of a massive red supergiant star that synthesises heavy elements and disperses them across space.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  }
];
