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
    "number": 1,
    "title": "Motion, Forces & Energy",
    "subtopics": [
      {
        "id": "igcse-phys-1-1",
        "code": "1.1",
        "slug": "1.1-measurement-speed-motion-graphs",
        "title": "Physical Quantities, Speed & Motion Graphs",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-1-2",
        "code": "1.2",
        "slug": "1.2-mass-weight-density-forces",
        "title": "Mass, Weight, Density, Forces & Newton’s Laws",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-1-3",
        "code": "1.3",
        "slug": "1.3-moments-momentum-pressure",
        "title": "Moments, Momentum, Impulse & Pressure",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-1-4",
        "code": "1.4",
        "slug": "1.4-energy-work-power-efficiency",
        "title": "Energy Stores, Work Done, Power & Efficiency",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 2,
    "title": "Thermal Physics",
    "subtopics": [
      {
        "id": "igcse-phys-2-1",
        "code": "2.1",
        "slug": "2.1-kinetic-particle-model-gas-laws",
        "title": "Kinetic Particle Model of Matter & Gas Laws",
        "readingMinutes": 9,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-2-2",
        "code": "2.2",
        "slug": "2.2-specific-heat-latent-heat-transfer",
        "title": "Specific Heat Capacity, Latent Heat & Thermal Transfer",
        "readingMinutes": 11,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 3,
    "title": "Waves & Optics",
    "subtopics": [
      {
        "id": "igcse-phys-3-1",
        "code": "3.1",
        "slug": "3.1-general-wave-properties",
        "title": "General Wave Properties, Reflection, Refraction & Diffraction",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-3-2",
        "code": "3.2",
        "slug": "3.2-light-lenses-tir-em-spectrum",
        "title": "Light, Lenses, Total Internal Reflection & EM Spectrum",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-3-3",
        "code": "3.3",
        "slug": "3.3-sound-waves-echoes-ultrasound",
        "title": "Sound Waves, Echoes & Ultrasound",
        "readingMinutes": 8,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 4,
    "title": "Electricity & Magnetism",
    "subtopics": [
      {
        "id": "igcse-phys-4-1",
        "code": "4.1",
        "slug": "4.1-charge-current-emf-resistance",
        "title": "Electric Charge, Current, EMF, Potential Difference & Resistance",
        "readingMinutes": 10,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-4-2",
        "code": "4.2",
        "slug": "4.2-series-parallel-circuits-safety",
        "title": "Series & Parallel Circuits, Potential Dividers & Mains Safety",
        "readingMinutes": 11,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-4-3",
        "code": "4.3",
        "slug": "4.3-magnetism-motor-effect-transformers",
        "title": "Magnetism, Motor Effect, EM Induction & Transformers",
        "readingMinutes": 12,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 5,
    "title": "Nuclear Physics",
    "subtopics": [
      {
        "id": "igcse-phys-5-1",
        "code": "5.1",
        "slug": "5.1-nuclear-atom-isotopes-fission-fusion",
        "title": "The Nuclear Model of the Atom, Isotopes, Fission & Fusion",
        "readingMinutes": 9,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-5-2",
        "code": "5.2",
        "slug": "5.2-radioactive-decay-half-life-safety",
        "title": "Radioactive Decay (Alpha, Beta, Gamma) & Half-Life",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  },
  {
    "number": 6,
    "title": "Space Physics",
    "subtopics": [
      {
        "id": "igcse-phys-6-1",
        "code": "6.1",
        "slug": "6.1-earth-solar-system-orbits",
        "title": "Earth, The Solar System & Orbital Motion",
        "readingMinutes": 9,
        "hasDeepContent": true
      },
      {
        "id": "igcse-phys-6-2",
        "code": "6.2",
        "slug": "6.2-stars-redshift-big-bang",
        "title": "Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)",
        "readingMinutes": 10,
        "hasDeepContent": true
      }
    ]
  }
];

export const IGCSE_PHYSICS_NOTES: Record<string, NoteLesson> = {
  "igcse-phys-1-1": {
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1",
    "subtopicTitle": "Physical Quantities, Speed & Motion Graphs",
    "readingMinutes": 10,
    "videoTitle": "GCSE Physics - Velocity-Time Graphs - How to Find Acceleration & Distance Travelled",
    "youtubeId": "VJefeYJL3uE",
    "videoChannel": "Cognito",
    "videoDuration": "5:32",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Measurement, Scalars & Vectors",
        "cardId": "igcse-phys-1-1-c1"
      },
      {
        "time": "1:50",
        "seconds": 110,
        "label": "Speed, Velocity & Acceleration",
        "cardId": "igcse-phys-1-1-c2"
      },
      {
        "time": "3:40",
        "seconds": 220,
        "label": "Distance-Time & Speed-Time Graphs",
        "cardId": "igcse-phys-1-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-1-1-c1",
        "title": "Precision Measurement, Scalars & Vectors",
        "summary": "Use multiple-oscillation timing for pendulums and distinguish scalar (size only) from vector (size + direction).",
        "bullets": [
          "**Scalars vs Vectors** - a **scalar** has magnitude only (distance, speed, mass, time, energy, temperature); a **vector** has both magnitude and direction (displacement, velocity, acceleration, force, momentum)."
        ],
        "subsections": [
          {
            "heading": "Reducing Measurement Error & Combining Vectors",
            "bullets": [
              "**Pendulum period T** - time 20 complete oscillations and divide by 20 to reduce percentage error from human reaction time; read scales at eye level to avoid **parallax error**.",
              "**Perpendicular vectors** - combine two right-angled vectors using Pythagoras R = √(F₁² + F₂²) and tan θ = F₂ / F₁."
            ],
            "exampleHeading": "Worked example: Resultant of 6 N East and 8 N North",
            "examples": [
              "Magnitude R = √(6² + 8²) = √100 = 10 N.",
              "Direction: tan θ = 8/6 → θ = 53.1° north of east."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "parallax error",
            "definition": "An apparent shift in a scale reading caused by viewing the instrument from an angle rather than perpendicularly at eye level."
          },
          {
            "term": "vector",
            "definition": "A physical quantity that has both magnitude (size) and a specified direction."
          }
        ]
      },
      {
        "id": "igcse-phys-1-1-c2",
        "title": "Speed, Velocity & Acceleration",
        "summary": "Acceleration is the rate of change of velocity: a = (v − u) / t, and free fall on Earth has g = 9.8 m/s².",
        "bullets": [
          "**Average speed** - total distance ÷ total time (v = s / t); **acceleration** a = (v − u) / t measured in m/s²."
        ],
        "subsections": [
          {
            "heading": "Free Fall & Terminal Velocity",
            "bullets": [
              "**Without air resistance** - all objects fall with constant acceleration g = 9.8 m/s² near Earth’s surface.",
              "**With air resistance** - air drag increases with speed until upward drag equals downward weight, giving zero resultant force and constant **terminal velocity**."
            ],
            "exampleHeading": "Worked example: Car accelerating from 4 m/s to 22 m/s in 6 s",
            "examples": [
              "a = (v − u) / t = (22 − 4) / 6 = 18 / 6 = 3.0 m/s²."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "terminal velocity",
            "definition": "The constant maximum velocity reached by a falling object when upward air resistance balances downward weight."
          }
        ],
        "memoryAid": "Gradient of Distance-Time = Speed; Gradient of Speed-Time = Acceleration; Area under Speed-Time = Distance!"
      },
      {
        "id": "igcse-phys-1-1-c3",
        "title": "Distance-Time & Speed-Time Graphs",
        "summary": "Read gradients for speed/acceleration and calculate the area under a speed-time graph for total distance.",
        "bullets": [
          "**Distance-time graph** - horizontal line = stationary; straight diagonal = constant speed; gradient = speed."
        ],
        "subsections": [
          {
            "heading": "Speed-Time Graph Area & Deceleration",
            "bullets": [
              "**Speed-time gradient** - positive slope = acceleration; horizontal line = constant speed; negative slope = deceleration.",
              "**Distance travelled** - split the area under a speed-time graph into triangles (½bh), rectangles (bh), and trapezia (½(a+b)h)."
            ],
            "exampleHeading": "Worked example: Distance from 0 to 12 m/s in 5 s, then steady for 10 s",
            "examples": [
              "Triangle area = ½ × 5 × 12 = 30 m; Rectangle area = 10 × 12 = 120 m.",
              "Total distance travelled = 30 + 120 = 150 m."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "deceleration",
            "definition": "Negative acceleration — a decrease in speed over time."
          }
        ],
        "commonMistake": "A horizontal line on a DISTANCE-time graph means stationary (speed = 0), whereas a horizontal line on a SPEED-time graph means moving at CONSTANT speed!"
      }
    ],
    "checklistPoints": [
      "Distinguish scalar and vector quantities and resolve perpendicular vectors",
      "Calculate average speed, acceleration a = (v − u)/t, and explain terminal velocity",
      "Extract speed, acceleration, and total distance from distance-time and speed-time graphs"
    ],
    "keyTerms": [
      {
        "term": "Parallax error",
        "definition": "An apparent shift in a scale reading caused by viewing the instrument from an angle rather than perpendicularly at eye level."
      },
      {
        "term": "Vector",
        "definition": "A physical quantity that has both magnitude (size) and a specified direction."
      },
      {
        "term": "Terminal velocity",
        "definition": "The constant maximum velocity reached by a falling object when upward air resistance balances downward weight."
      },
      {
        "term": "Deceleration",
        "definition": "Negative acceleration — a decrease in speed over time."
      }
    ]
  },
  "igcse-phys-1-2": {
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2",
    "subtopicTitle": "Mass, Weight, Density, Forces & Newton’s Laws",
    "readingMinutes": 11,
    "videoTitle": "GCSE Physics - Newton's First and Second Laws",
    "youtubeId": "D8XOm4swxOU",
    "videoChannel": "Cognito",
    "videoDuration": "6:36",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Mass, Weight & Density",
        "cardId": "igcse-phys-1-2-c1"
      },
      {
        "time": "2:15",
        "seconds": 135,
        "label": "Newton’s Laws & Circular Motion",
        "cardId": "igcse-phys-1-2-c2"
      },
      {
        "time": "4:30",
        "seconds": 270,
        "label": "Hooke’s Law & Limit of Proportionality",
        "cardId": "igcse-phys-1-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-1-2-c1",
        "title": "Mass, Weight & Density",
        "summary": "Mass (kg) stays constant everywhere; weight (N) is W = mg; density is mass per unit volume ρ = m/V.",
        "bullets": [
          "**Weight vs Mass** - **mass** is the quantity of matter (scalar, kg) and resists changes in motion (**inertia**); **weight** is the gravitational force W = mg (vector, N, where g = 9.8 N/kg on Earth)."
        ],
        "subsections": [
          {
            "heading": "Measuring Density & Floating",
            "bullets": [
              "**Density formula** - ρ = m / V (in kg/m³ or g/cm³); an object floats if its density is less than the liquid’s density.",
              "**Irregular solid** - measure mass on a balance and volume by displacement of water in a measuring cylinder."
            ],
            "exampleHeading": "Worked example: Density of a metal block",
            "examples": [
              "Mass = 270 g; water level rises from 40 cm³ to 140 cm³ → Volume V = 100 cm³.",
              "Density ρ = 270 / 100 = 2.7 g/cm³ (2,700 kg/m³)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "density",
            "definition": "Mass per unit volume of a substance: ρ = m / V."
          },
          {
            "term": "inertia",
            "definition": "The tendency of an object to stay at rest or keep moving at constant velocity unless acted on by a resultant force."
          }
        ]
      },
      {
        "id": "igcse-phys-1-2-c2",
        "title": "Resultant Forces, Newton’s Laws & Circular Motion",
        "summary": "Zero resultant force gives constant velocity; unbalanced force causes acceleration F = ma (or centripetal turning).",
        "bullets": [
          "**Newton’s 1st & 2nd Laws** - if resultant force = 0, an object stays at rest or moves at constant velocity; if resultant force ≠ 0, it accelerates according to **F = ma**."
        ],
        "subsections": [
          {
            "heading": "Newton’s 3rd Law & Circular Motion",
            "bullets": [
              "**Newton’s 3rd Law** - when body A exerts a force on body B, body B exerts an equal and opposite force of the same type on body A.",
              "**Circular motion** - a perpendicular **centripetal force** directed towards the centre continuously changes velocity direction even at constant speed."
            ],
            "exampleHeading": "Worked example: Accelerating a 1,200 kg car",
            "examples": [
              "Driving force = 4,000 N forward; friction = 1,000 N backward → Resultant F = 3,000 N.",
              "Acceleration a = F / m = 3,000 / 1,200 = 2.5 m/s²."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "resultant force",
            "definition": "The single overall force having the same effect as all individual forces acting on an object combined."
          }
        ],
        "diagram": "forces-free-body",
        "memoryAid": "F = ma uses RESULTANT force — always subtract opposing friction/drag first!"
      },
      {
        "id": "igcse-phys-1-2-c3",
        "title": "Hooke’s Law & Spring Constant",
        "summary": "Extension is directly proportional to load (F = kx) only up to the limit of proportionality.",
        "bullets": [
          "**Hooke’s Law** - F = kx, where k is the **spring constant** (N/m or N/cm) and x is the extension (stretched length − original unstretched length)."
        ],
        "subsections": [
          {
            "heading": "Load–Extension Graph",
            "bullets": [
              "**Linear region** - straight line through the origin where gradient = k (stiffer spring = steeper gradient).",
              "**Limit of proportionality** - the point where the graph begins to curve and Hooke’s law no longer applies."
            ],
            "exampleHeading": "Worked example: Spring stretches from 12 cm to 17 cm under a 10 N load",
            "examples": [
              "Extension x = 17 − 12 = 5 cm = 0.05 m.",
              "Spring constant k = F / x = 10 / 0.05 = 200 N/m."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "spring constant",
            "definition": "The force required per unit extension of a spring (k = F / x), measuring its stiffness."
          }
        ],
        "commonMistake": "In F = kx, x is the EXTENSION (new length minus original length) — NEVER substitute the total stretched length!"
      }
    ],
    "checklistPoints": [
      "Distinguish mass from weight (W = mg) and calculate density by displacement",
      "Apply F = ma with resultant forces and explain circular motion via centripetal force",
      "Calculate spring constant k = F/x using extension and identify the limit of proportionality"
    ],
    "keyTerms": [
      {
        "term": "Density",
        "definition": "Mass per unit volume of a substance: ρ = m / V."
      },
      {
        "term": "Inertia",
        "definition": "The tendency of an object to stay at rest or keep moving at constant velocity unless acted on by a resultant force."
      },
      {
        "term": "Resultant force",
        "definition": "The single overall force having the same effect as all individual forces acting on an object combined."
      },
      {
        "term": "Spring constant",
        "definition": "The force required per unit extension of a spring (k = F / x), measuring its stiffness."
      }
    ]
  },
  "igcse-phys-1-3": {
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3",
    "subtopicTitle": "Moments, Momentum, Impulse & Pressure",
    "readingMinutes": 11,
    "videoTitle": "GCSE Physics - Momentum (Part 1 of 2) | Conservation of Momentum",
    "youtubeId": "mjeOuh0G-gw",
    "videoChannel": "Cognito",
    "videoDuration": "7:33",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Moments, Equilibrium & Centre of Gravity",
        "cardId": "igcse-phys-1-3-c1"
      },
      {
        "time": "2:30",
        "seconds": 150,
        "label": "Momentum, Conservation & Impulse",
        "cardId": "igcse-phys-1-3-c2"
      },
      {
        "time": "5:10",
        "seconds": 310,
        "label": "Pressure in Solids & Liquids (p = ρgh)",
        "cardId": "igcse-phys-1-3-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-1-3-c1",
        "title": "Moments, Principle of Moments & Stability",
        "summary": "A beam is in equilibrium when resultant force is zero AND total clockwise moment equals total anticlockwise moment.",
        "bullets": [
          "**Moment of a force** - Moment = Force × perpendicular distance from pivot (M = Fd, unit N m)."
        ],
        "subsections": [
          {
            "heading": "Equilibrium & Centre of Gravity",
            "bullets": [
              "**Principle of moments** - for equilibrium: Sum of clockwise moments = Sum of anticlockwise moments AND zero resultant force.",
              "**Stability** - lowered **centre of gravity** and wider base increase stability; an object topples when the vertical line from its centre of gravity falls outside its base."
            ],
            "exampleHeading": "Worked example: Balancing a uniform seesaw",
            "examples": [
              "A 400 N child sits 1.5 m left of the pivot: anticlockwise moment = 400 × 1.5 = 600 N m.",
              "A 300 N child on the right must sit at d = 600 ÷ 300 = 2.0 m from the pivot."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "moment",
            "definition": "The turning effect of a force about a pivot, equal to force multiplied by perpendicular distance from the pivot."
          }
        ]
      },
      {
        "id": "igcse-phys-1-3-c2",
        "title": "Momentum, Conservation & Impulse",
        "summary": "Total momentum before a collision equals total momentum after; crumple zones lengthen collision time to cut impact force.",
        "bullets": [
          "**Momentum & Impulse** - p = mv (kg m/s, vector); **Impulse** = FΔt = Δp = mv − mu (N s), so resultant force F = Δp / Δt."
        ],
        "subsections": [
          {
            "heading": "Conservation of Momentum & Car Safety",
            "bullets": [
              "**Conservation law** - in a closed system with no external forces, total momentum before = total momentum after (assign + and − signs to opposite directions!).",
              "**Airbags & crumple zones** - increase collision duration Δt for the same change in momentum Δp, reducing average impact force F = Δp / Δt."
            ],
            "exampleHeading": "Worked example: Trolley collision sticking together",
            "examples": [
              "A 2 kg trolley at 6 m/s hits a stationary 4 kg trolley and sticks: initial p = 2 × 6 = 12 kg m/s.",
              "Combined mass = 6 kg → final velocity v = 12 ÷ 6 = 2.0 m/s."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "impulse",
            "definition": "Force multiplied by the time for which it acts (FΔt), equal to the change in momentum (Δp)."
          }
        ],
        "memoryAid": "Safety devices (airbags, seatbelts, crumple zones): SAME Δp, LONGER Δt → SMALLER force F = Δp/Δt!"
      },
      {
        "id": "igcse-phys-1-3-c3",
        "title": "Pressure in Solids & Hydrostatic Pressure in Liquids",
        "summary": "Solid pressure is p = F/A (Pa); liquid pressure increases with depth and density via Δp = ρgΔh.",
        "bullets": [
          "**Solid pressure** - p = F / A (1 Pa = 1 N/m²); sharp knives cut easily because tiny area A produces huge pressure."
        ],
        "subsections": [
          {
            "heading": "Liquid Pressure Δp = ρgΔh",
            "bullets": [
              "**Depth & density** - liquid pressure acts equally in all directions and depends ONLY on density ρ, gravitational field strength g, and vertical depth h — NOT container shape."
            ],
            "exampleHeading": "Worked example: Water pressure at 10 m depth (ρ = 1000 kg/m³, g = 9.8 N/kg)",
            "examples": [
              "Δp = ρgh = 1000 × 9.8 × 10 = 98,000 Pa (98 kPa)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "pressure",
            "definition": "Force acting perpendicularly per unit area (p = F / A), measured in pascals (Pa)."
          }
        ],
        "commonMistake": "In conservation of momentum, remember momentum is a VECTOR — if two trolleys approach head-on, one velocity MUST be negative!"
      }
    ],
    "checklistPoints": [
      "Apply the principle of moments and explain stability using centre of gravity",
      "Solve momentum conservation problems and explain safety features using F = Δp/Δt",
      "Calculate solid pressure (p = F/A) and liquid pressure (Δp = ρgΔh)"
    ],
    "keyTerms": [
      {
        "term": "Moment",
        "definition": "The turning effect of a force about a pivot, equal to force multiplied by perpendicular distance from the pivot."
      },
      {
        "term": "Impulse",
        "definition": "Force multiplied by the time for which it acts (FΔt), equal to the change in momentum (Δp)."
      },
      {
        "term": "Pressure",
        "definition": "Force acting perpendicularly per unit area (p = F / A), measured in pascals (Pa)."
      },
      {
        "term": "Moments, Principle of Moments & Stability",
        "definition": "A beam is in equilibrium when resultant force is zero AND total clockwise moment equals total anticlockwise moment."
      }
    ]
  },
  "igcse-phys-1-4": {
    "subtopicId": "igcse-phys-1-4",
    "subtopicCode": "1.4",
    "subtopicTitle": "Energy Stores, Work Done, Power & Efficiency",
    "readingMinutes": 10,
    "videoTitle": "GCSE Physics - Energy Stores, Transferring Energy & Work Done",
    "youtubeId": "JGwcDCeYRYo",
    "videoChannel": "Cognito",
    "videoDuration": "5:09",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Energy Stores, Conservation & EK / EP",
        "cardId": "igcse-phys-1-4-c1"
      },
      {
        "time": "1:45",
        "seconds": 105,
        "label": "Work Done, Power & Efficiency",
        "cardId": "igcse-phys-1-4-c2"
      },
      {
        "time": "3:30",
        "seconds": 210,
        "label": "Renewable vs Non-Renewable Energy Resources",
        "cardId": "igcse-phys-1-4-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-1-4-c1",
        "title": "Energy Stores, Kinetic Energy & Gravitational Potential Energy",
        "summary": "Energy cannot be created or destroyed; equate ΔEP = EK for frictionless falling objects.",
        "bullets": [
          "**Key equations** - Kinetic energy E_k = ½mv² and Gravitational potential energy ΔE_p = mgΔh (both in joules, J)."
        ],
        "subsections": [
          {
            "heading": "Conservation of Mechanical Energy",
            "bullets": [
              "**Rollercoaster / free fall** - ignoring air resistance, loss in GPE = gain in KE, so mgΔh = ½mv² → v = √(2gΔh) (mass cancels!)."
            ],
            "exampleHeading": "Worked example: 2 kg ball dropped from 5 m (g = 9.8 N/kg)",
            "examples": [
              "ΔE_p = 2 × 9.8 × 5 = 98 J → ½(2)v² = 98 → v² = 98 → v = 9.9 m/s."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "kinetic energy",
            "definition": "Energy stored by a moving object, given by E_k = ½mv²."
          }
        ]
      },
      {
        "id": "igcse-phys-1-4-c2",
        "title": "Work Done, Power & Efficiency",
        "summary": "Work done equals energy transferred (W = Fd), power is rate of energy transfer (P = W/t), and efficiency compares useful output to total input.",
        "bullets": [
          "**Work & Power** - Work done W = Fd (1 J = 1 N m); Power P = ΔE / t = W / t (1 W = 1 J/s)."
        ],
        "subsections": [
          {
            "heading": "Percentage Efficiency & Sankey Diagrams",
            "bullets": [
              "**Efficiency** - (Useful energy output ÷ Total energy input) × 100%, or (Useful power output ÷ Total power input) × 100%; can NEVER exceed 100%."
            ],
            "exampleHeading": "Worked example: Crane lifting 500 N through 12 m in 15 s",
            "examples": [
              "Work done W = 500 × 12 = 6,000 J.",
              "Useful power P = 6,000 ÷ 15 = 400 W. If electrical input is 500 W, efficiency = (400/500) × 100% = 80%."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "power",
            "definition": "The rate of doing work or transferring energy (P = W / t), measured in watts (W)."
          },
          {
            "term": "efficiency",
            "definition": "The fraction or percentage of total energy/power input converted into useful output."
          }
        ],
        "memoryAid": "Power = Energy per second (1 Watt = 1 Joule per second)."
      },
      {
        "id": "igcse-phys-1-4-c3",
        "title": "Renewable & Non-Renewable Energy Resources",
        "summary": "Compare reliability, carbon emissions, and environmental impacts of fossil, nuclear, solar, wind, hydro, and geothermal sources.",
        "bullets": [
          "**Sun as the origin** - the Sun is the ultimate source of energy for fossil fuels, biofuels, wind, waves, hydroelectricity, and solar cells — the exceptions are **nuclear, geothermal, and tidal**."
        ],
        "subsections": [
          {
            "heading": "Trade-Offs in Power Generation",
            "bullets": [
              "**Fossil fuels** - reliable and high output, but non-renewable and emit CO₂ (global warming) and SO₂ (acid rain).",
              "**Nuclear** - reliable with zero CO₂ during operation, but produces hazardous radioactive waste requiring long-term storage.",
              "**Renewables (wind/solar)** - zero operating CO₂ and never run out, but intermittent (depend on weather/daylight)."
            ],
            "exampleHeading": "Concrete comparison: Hydroelectric vs Wind",
            "examples": [
              "Hydroelectric starts up rapidly to meet peak demand, but flooding valleys destroys habitats.",
              "Wind turbines have no fuel cost, but output drops to zero on calm days."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "renewable energy resource",
            "definition": "An energy resource that is replenished naturally at a rate equal to or faster than it is used."
          }
        ],
        "commonMistake": "When calculating v from E_k = ½mv², remember to multiply by 2, divide by m, AND take the square root — forgetting √ is the #1 calculation slip!"
      }
    ],
    "checklistPoints": [
      "Calculate KE = ½mv², GPE = mgΔh, and equate them for energy conservation",
      "Compute work done W = Fd, power P = W/t, and percentage efficiency",
      "Identify the 3 energy resources NOT originating from the Sun (nuclear, geothermal, tidal)"
    ],
    "keyTerms": [
      {
        "term": "Kinetic energy",
        "definition": "Energy stored by a moving object, given by E_k = ½mv²."
      },
      {
        "term": "Power",
        "definition": "The rate of doing work or transferring energy (P = W / t), measured in watts (W)."
      },
      {
        "term": "Efficiency",
        "definition": "The fraction or percentage of total energy/power input converted into useful output."
      },
      {
        "term": "Renewable energy resource",
        "definition": "An energy resource that is replenished naturally at a rate equal to or faster than it is used."
      }
    ]
  },
  "igcse-phys-2-1": {
    "subtopicId": "igcse-phys-2-1",
    "subtopicCode": "2.1",
    "subtopicTitle": "Kinetic Particle Model of Matter & Gas Laws",
    "readingMinutes": 9,
    "videoTitle": "GCSE Physics - Specific Heat Capacity | Internal Energy & Temperature",
    "youtubeId": "LUHGFLR2p8k",
    "videoChannel": "Cognito",
    "videoDuration": "5:01",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "States of Matter & Brownian Motion",
        "cardId": "igcse-phys-2-1-c1"
      },
      {
        "time": "1:40",
        "seconds": 100,
        "label": "Kelvin Scale & Gas Pressure Mechanism",
        "cardId": "igcse-phys-2-1-c2"
      },
      {
        "time": "3:20",
        "seconds": 200,
        "label": "Boyle’s Law (p₁V₁ = p₂V₂) & Thermal Expansion",
        "cardId": "igcse-phys-2-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-2-1-c1",
        "title": "States of Matter & Brownian Motion",
        "summary": "Brownian motion of visible smoke particles provides direct evidence that invisible gas molecules move rapidly and randomly.",
        "bullets": [
          "**Three states** - solids vibrate in fixed lattices; liquids slide past one another while staying close; gases move rapidly and randomly far apart."
        ],
        "subsections": [
          {
            "heading": "Explaining Brownian Motion",
            "bullets": [
              "**Observation** - bright smoke specks jiggle continuously in random zig-zag paths under a microscope.",
              "**Explanation** - tiny, fast-moving, invisible air molecules collide unevenly and randomly with the much larger smoke particles from all sides."
            ],
            "exampleHeading": "Exam wording check: Brownian motion",
            "examples": [
              "Always state that FAST, RANDOM collisions by MUCH SMALLER invisible air/water molecules push the larger visible smoke/pollen particles."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "Brownian motion",
            "definition": "The random, jerky movement of microscopic suspended particles (such as smoke in air) caused by uneven bombardment by fast-moving fluid molecules."
          }
        ]
      },
      {
        "id": "igcse-phys-2-1-c2",
        "title": "Absolute Zero, Kelvin Scale & Gas Pressure",
        "summary": "Gas pressure comes from molecules colliding with container walls and exerting a force per unit area.",
        "bullets": [
          "**Kelvin conversion** - T(K) = θ(°C) + 273; **absolute zero** (0 K = −273 °C) is the lowest possible temperature where particles have minimum kinetic energy."
        ],
        "subsections": [
          {
            "heading": "Effect of Heating a Gas at Constant Volume",
            "bullets": [
              "**Molecular explanation** - raising temperature increases average kinetic energy and speed of molecules, so they hit the walls **more frequently** and **harder** (greater Δp per collision), increasing force and pressure."
            ],
            "exampleHeading": "Worked example: Converting temperatures",
            "examples": [
              "27 °C = 27 + 273 = 300 K; 373 K = 373 − 273 = 100 °C."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "absolute zero",
            "definition": "0 K (−273 °C), the lowest theoretically possible temperature at which particles have minimum kinetic energy."
          }
        ],
        "memoryAid": "Heating a fixed-volume gas makes molecules hit walls MORE OFTEN and HARDER → Higher pressure!"
      },
      {
        "id": "igcse-phys-2-1-c3",
        "title": "Boyle’s Law (Constant Temperature) & Thermal Expansion",
        "summary": "At constant temperature, pressure is inversely proportional to volume (p₁V₁ = p₂V₂); gases expand far more than solids when heated.",
        "bullets": [
          "**Boyle’s Law** - for a fixed mass of gas at constant temperature: **p₁V₁ = p₂V₂** (halving volume doubles collision frequency with walls, doubling pressure)."
        ],
        "subsections": [
          {
            "heading": "Thermal Expansion Applications",
            "bullets": [
              "**Order of expansion** - Gases > Liquids > Solids (weakest intermolecular forces allow greatest increase in separation).",
              "**Engineering** - railway expansion gaps prevent buckling; bimetallic strips bend to act as thermostats."
            ],
            "exampleHeading": "Worked example: Compressing gas at constant temperature",
            "examples": [
              "Gas at 100 kPa occupies 600 cm³ and is compressed to 150 cm³.",
              "p₂ = (100 × 600) ÷ 150 = 400 kPa."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "Boyle’s law",
            "definition": "For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume (pV = constant)."
          }
        ],
        "commonMistake": "In Brownian motion answers, never say the smoke particles are \"living\" or moving on their own — explicitly state they are bombarded by smaller invisible air molecules."
      }
    ],
    "checklistPoints": [
      "Explain Brownian motion in terms of collisions with smaller, faster fluid molecules",
      "Convert between °C and Kelvin (T = θ + 273) and explain gas pressure using particle collisions",
      "Calculate unknown pressures or volumes using Boyle’s Law p₁V₁ = p₂V₂"
    ],
    "keyTerms": [
      {
        "term": "Brownian motion",
        "definition": "The random, jerky movement of microscopic suspended particles (such as smoke in air) caused by uneven bombardment by fast-moving fluid molecules."
      },
      {
        "term": "Absolute zero",
        "definition": "0 K (−273 °C), the lowest theoretically possible temperature at which particles have minimum kinetic energy."
      },
      {
        "term": "Boyle’s law",
        "definition": "For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume (pV = constant)."
      },
      {
        "term": "States of Matter & Brownian Motion",
        "definition": "Brownian motion of visible smoke particles provides direct evidence that invisible gas molecules move rapidly and randomly."
      }
    ]
  },
  "igcse-phys-2-2": {
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2",
    "subtopicTitle": "Specific Heat Capacity, Latent Heat & Thermal Transfer",
    "readingMinutes": 11,
    "videoTitle": "GCSE Physics - Conduction, Convection & Radiation | How Heat Energy is Transferred",
    "youtubeId": "rUnABMRPzvg",
    "videoChannel": "Cognito",
    "videoDuration": "4:30",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Specific Heat Capacity & Changes of State",
        "cardId": "igcse-phys-2-2-c1"
      },
      {
        "time": "1:30",
        "seconds": 90,
        "label": "Conduction & Convection Mechanisms",
        "cardId": "igcse-phys-2-2-c2"
      },
      {
        "time": "3:00",
        "seconds": 180,
        "label": "Infrared Radiation & Vacuum Flasks",
        "cardId": "igcse-phys-2-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-2-2-c1",
        "title": "Specific Heat Capacity, Evaporation & Latent Heat",
        "summary": "Use ΔE = mcΔθ during temperature rise; temperature stays flat during melting/boiling as energy breaks intermolecular bonds.",
        "bullets": [
          "**Specific heat capacity (c)** - energy needed to raise 1 kg of a substance by 1 °C: **ΔE = mcΔθ** (unit J / (kg °C))."
        ],
        "subsections": [
          {
            "heading": "Evaporation Cooling & Heating Curves",
            "bullets": [
              "**Flat plateaus on heating curves** - during melting or boiling, supplied energy increases potential energy to overcome intermolecular forces instead of raising kinetic energy, so temperature stays constant.",
              "**Evaporation cools a liquid** - the most energetic (fastest) molecules escape from the surface, lowering the average kinetic energy — and thus temperature — of the remaining liquid."
            ],
            "exampleHeading": "Worked example: Heating 1.5 kg of water from 20 °C to 80 °C (c = 4200 J/(kg °C))",
            "examples": [
              "Δθ = 80 − 20 = 60 °C.",
              "ΔE = 1.5 × 4200 × 60 = 378,000 J (378 kJ)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "specific heat capacity",
            "definition": "The thermal energy required to raise the temperature of 1 kg of a substance by 1 °C."
          }
        ]
      },
      {
        "id": "igcse-phys-2-2-c2",
        "title": "Conduction & Convection",
        "summary": "Metals conduct rapidly via delocalised free electrons; convection currents occur in fluids due to density changes.",
        "bullets": [
          "**Conduction** - vibrating particles pass kinetic energy to neighbours in all solids; metals conduct much faster because **delocalised (free) electrons** move through the lattice and collide with ions."
        ],
        "subsections": [
          {
            "heading": "Convection Currents in Liquids & Gases",
            "bullets": [
              "**Convection mechanism** - heating makes a fluid expand → becomes **less dense** → rises; cooler, denser fluid sinks to replace it, setting up a continuous convection current.",
              "**No convection in solids** - particles in solids are fixed in place and cannot flow."
            ],
            "exampleHeading": "Concrete example: Sea breeze during the day",
            "examples": [
              "Land heats up faster than sea; warm air over land expands, becomes less dense, and rises.",
              "Cooler, denser air from over the sea flows inland to replace it."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "convection",
            "definition": "Thermal energy transfer in fluids caused by warmer, less dense fluid rising and cooler, denser fluid sinking."
          }
        ],
        "commonMistake": "NEVER write \"heat rises\" — always write \"warmer fluid expands, becomes LESS DENSE, and rises\"!"
      },
      {
        "id": "igcse-phys-2-2-c3",
        "title": "Thermal (Infrared) Radiation & Insulation",
        "summary": "Infrared radiation travels as EM waves even through a vacuum; matte black surfaces emit and absorb best.",
        "bullets": [
          "**Surface properties** - **dull (matte) black** surfaces are the best emitters and absorbers of infrared radiation; **shiny silver/white** surfaces are the worst emitters/absorbers and best reflectors."
        ],
        "subsections": [
          {
            "heading": "How a Vacuum Flask Stops All Three Transfers",
            "bullets": [
              "**Vacuum between double glass walls** - prevents conduction and convection (no particles).",
              "**Silvered inner walls** - minimise infrared radiation emission and reflect heat back inside.",
              "**Insulating plastic stopper** - reduces conduction and stops convection/evaporation out the top."
            ],
            "exampleHeading": "Concrete example: Leslie’s cube experiment",
            "examples": [
              "Fill a hollow metal cube with boiling water and measure each face with an infrared detector at equal distance.",
              "The matte black face gives the highest reading; the shiny silver face gives the lowest."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "infrared radiation",
            "definition": "Electromagnetic waves emitted by all objects above absolute zero that transfer thermal energy without needing a medium."
          }
        ],
        "memoryAid": "Matte Black = Best Absorber & Best Emitter; Shiny Silver = Best Reflector!"
      }
    ],
    "checklistPoints": [
      "Calculate thermal energy changes with ΔE = mcΔθ and explain evaporation cooling",
      "Explain metallic conduction (lattice vibrations + free electrons) and convection (expansion → lower density → rises)",
      "Compare matte black vs shiny silver surfaces and explain every insulating feature of a vacuum flask"
    ],
    "keyTerms": [
      {
        "term": "Specific heat capacity",
        "definition": "The thermal energy required to raise the temperature of 1 kg of a substance by 1 °C."
      },
      {
        "term": "Convection",
        "definition": "Thermal energy transfer in fluids caused by warmer, less dense fluid rising and cooler, denser fluid sinking."
      },
      {
        "term": "Infrared radiation",
        "definition": "Electromagnetic waves emitted by all objects above absolute zero that transfer thermal energy without needing a medium."
      },
      {
        "term": "Specific Heat Capacity, Evaporation & Latent Heat",
        "definition": "Use ΔE = mcΔθ during temperature rise; temperature stays flat during melting/boiling as energy breaks intermolecular bonds."
      }
    ]
  },
  "igcse-phys-3-1": {
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1",
    "subtopicTitle": "General Wave Properties, Reflection, Refraction & Diffraction",
    "readingMinutes": 10,
    "videoTitle": "GCSE Physics - Longitudinal & Transverse Waves - Labelling & Calculating Wave Speed",
    "youtubeId": "1DFAy8MXkMA",
    "videoChannel": "Cognito",
    "videoDuration": "6:40",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Transverse vs Longitudinal & Wave Equation",
        "cardId": "igcse-phys-3-1-c1"
      },
      {
        "time": "2:15",
        "seconds": 135,
        "label": "Reflection & Refraction (Wavefronts)",
        "cardId": "igcse-phys-3-1-c2"
      },
      {
        "time": "4:30",
        "seconds": 270,
        "label": "Diffraction Through Gaps & Around Edges",
        "cardId": "igcse-phys-3-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-3-1-c1",
        "title": "Transverse vs Longitudinal Waves & v = fλ",
        "summary": "Waves transfer energy without transferring matter; speed equals frequency multiplied by wavelength.",
        "bullets": [
          "**Transverse waves** - oscillations are **perpendicular** to energy transfer (all EM waves, water waves, seismic S-waves).",
          "**Longitudinal waves** - oscillations are **parallel** to energy transfer, forming compressions and rarefactions (sound waves, seismic P-waves)."
        ],
        "subsections": [
          {
            "heading": "Wave Equation & Definitions",
            "bullets": [
              "**v = fλ and f = 1/T** - wave speed v (m/s) = frequency f (Hz) × wavelength λ (m); amplitude is max displacement from rest."
            ],
            "exampleHeading": "Worked example: Water wave with f = 4 Hz and λ = 0.25 m",
            "examples": [
              "Wave speed v = fλ = 4 × 0.25 = 1.0 m/s; Period T = 1 / 4 = 0.25 s."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "wavelength",
            "definition": "The distance between two consecutive identical points on a wave (e.g. crest to crest), measured in metres."
          },
          {
            "term": "frequency",
            "definition": "The number of complete waves passing a fixed point each second, measured in hertz (Hz)."
          }
        ],
        "diagram": "transverse-wave"
      },
      {
        "id": "igcse-phys-3-1-c2",
        "title": "Reflection & Refraction in Ripple Tanks",
        "summary": "Frequency NEVER changes during refraction — only wave speed and wavelength change when depth or medium changes.",
        "bullets": [
          "**Reflection** - angle of incidence i = angle of reflection r (measured to the normal); speed, wavelength, and frequency stay unchanged."
        ],
        "subsections": [
          {
            "heading": "Refraction of Water Waves (Deep → Shallow)",
            "bullets": [
              "**Slowing down** - entering shallow water makes water waves **slow down**, **wavelength decreases** (wavefronts bunch closer), and waves bend **towards the normal**, while **frequency stays constant**."
            ],
            "exampleHeading": "Worked example: Deep to shallow water transition",
            "examples": [
              "Deep water: v = 0.40 m/s, f = 5 Hz → λ = 0.08 m.",
              "Shallow water: v drops to 0.25 m/s, f remains 5 Hz → λ shrinks to 0.25 ÷ 5 = 0.05 m."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "refraction",
            "definition": "The change in speed and direction of a wave when it crosses a boundary into a medium of different density or depth."
          }
        ],
        "memoryAid": "FAST (Faster Away from normal, Slower Towards normal) — and Frequency NEVER changes!"
      },
      {
        "id": "igcse-phys-3-1-c3",
        "title": "Diffraction Through Gaps & Around Obstacles",
        "summary": "Waves spread out most dramatically when the gap width is approximately equal to the wavelength.",
        "bullets": [
          "**Diffraction** - the spreading out of waves when passing through a gap or past an edge; wavelength, frequency, and speed stay unchanged."
        ],
        "subsections": [
          {
            "heading": "Effect of Gap Width vs Wavelength",
            "bullets": [
              "**Maximum diffraction** - occurs when gap width ≈ wavelength λ (nearly semicircular wavefronts).",
              "**Minimal diffraction** - when the gap is much wider than λ, waves mostly pass straight through with only slight curving at the edges."
            ],
            "exampleHeading": "Concrete example: Why you hear around corners better than you see",
            "examples": [
              "Sound wavelengths (~0.5–2 m) are similar to doorway widths, so sound diffracts strongly around doors.",
              "Light wavelengths (~5 × 10⁻⁷ m) are millions of times smaller than a doorway, so light barely diffracts."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "diffraction",
            "definition": "The spreading of waves as they pass through a narrow gap or around an obstacle."
          }
        ],
        "commonMistake": "Never claim that refraction changes wave frequency — frequency is fixed by the source and stays constant across boundaries!"
      }
    ],
    "checklistPoints": [
      "Compare transverse and longitudinal waves and solve calculations with v = fλ and T = 1/f",
      "Explain refraction of water waves from deep to shallow water (speed & λ decrease, f constant)",
      "Draw diffracted wavefronts and state that maximum diffraction happens when gap width ≈ wavelength"
    ],
    "keyTerms": [
      {
        "term": "Wavelength",
        "definition": "The distance between two consecutive identical points on a wave (e.g. crest to crest), measured in metres."
      },
      {
        "term": "Frequency",
        "definition": "The number of complete waves passing a fixed point each second, measured in hertz (Hz)."
      },
      {
        "term": "Refraction",
        "definition": "The change in speed and direction of a wave when it crosses a boundary into a medium of different density or depth."
      },
      {
        "term": "Diffraction",
        "definition": "The spreading of waves as they pass through a narrow gap or around an obstacle."
      }
    ]
  },
  "igcse-phys-3-2": {
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2",
    "subtopicTitle": "Light, Lenses, Total Internal Reflection & EM Spectrum",
    "readingMinutes": 11,
    "videoTitle": "GCSE Physics - How Lenses Work - Convex & Concave Lenses | Real & Virtual Images",
    "youtubeId": "0O3NdG0uWM4",
    "videoChannel": "Cognito",
    "videoDuration": "6:36",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Snell’s Law & Total Internal Reflection",
        "cardId": "igcse-phys-3-2-c1"
      },
      {
        "time": "2:10",
        "seconds": 130,
        "label": "Converging & Diverging Lenses + Eye Correction",
        "cardId": "igcse-phys-3-2-c2"
      },
      {
        "time": "4:25",
        "seconds": 265,
        "label": "Electromagnetic Spectrum Uses & Hazards",
        "cardId": "igcse-phys-3-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-3-2-c1",
        "title": "Refractive Index, Snell’s Law & Total Internal Reflection",
        "summary": "Use n = sin i / sin r and sin c = 1 / n; TIR occurs only from a denser to less dense medium when i > c.",
        "bullets": [
          "**Refractive index n** - n = sin i / sin r = c_air / v_medium (always ≥ 1, no units)."
        ],
        "subsections": [
          {
            "heading": "Two Conditions for Total Internal Reflection (TIR)",
            "bullets": [
              "**Condition 1** - light must travel from an optically **denser** medium towards a **less dense** medium (e.g. glass → air).",
              "**Condition 2** - angle of incidence i must be **greater than the critical angle c**, where sin c = 1 / n.",
              "**Applications** - optical fibres for high-speed broadband/endoscopes and reflective prisms."
            ],
            "exampleHeading": "Worked example: Critical angle of glass with n = 1.50",
            "examples": [
              "sin c = 1 / 1.50 = 0.667 → c = sin⁻¹(0.667) = 41.8°."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "total internal reflection",
            "definition": "Complete reflection of a light ray back inside a denser medium when the angle of incidence exceeds the critical angle."
          },
          {
            "term": "critical angle",
            "definition": "The angle of incidence in a denser medium that produces an angle of refraction of exactly 90° along the boundary."
          }
        ]
      },
      {
        "id": "igcse-phys-3-2-c2",
        "title": "Thin Converging Lenses & Sight Correction",
        "summary": "Convex lenses form real inverted images when object distance > f and magnified virtual images when object distance < f.",
        "bullets": [
          "**Real vs Virtual image** - a **real** image can be projected onto a screen (rays actually cross); a **virtual** image cannot be caught on a screen (rays only appear to diverge from it)."
        ],
        "subsections": [
          {
            "heading": "Ray Rules & Short/Long Sight Correction",
            "bullets": [
              "**Magnifying glass** - object placed closer than the focal length (u < f) to a converging lens produces a **virtual, upright, magnified** image.",
              "**Correcting vision** - **short-sightedness (myopia)** (focuses in front of retina) is corrected with a **diverging (concave)** lens; **long-sightedness (hyperopia)** (focuses behind retina) is corrected with a **converging (convex)** lens."
            ],
            "exampleHeading": "Concrete check: Dispersion through a glass prism",
            "examples": [
              "Violet light slows down the most (highest n), so it refracts the most; red refracts the least (ROYGBIV)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "focal length",
            "definition": "The distance between the optical centre of a thin lens and its principal focus F."
          }
        ],
        "commonMistake": "Angles of incidence i and refraction r are ALWAYS measured between the ray and the NORMAL — never between the ray and the glass surface!"
      },
      {
        "id": "igcse-phys-3-2-c3",
        "title": "The Electromagnetic Spectrum",
        "summary": "All EM waves are transverse and travel at 3.0 × 10⁸ m/s in a vacuum, ordered from Radio to Gamma.",
        "bullets": [
          "**Order (increasing frequency & energy, decreasing wavelength)** - **Radio → Microwaves → Infrared → Visible → Ultraviolet → X-rays → Gamma rays**."
        ],
        "subsections": [
          {
            "heading": "Key Uses & Hazards",
            "bullets": [
              "**Low frequency** - Radio (broadcasting/Bluetooth), Microwaves (satellite TV/heating water in food), Infrared (thermal imaging/optical fibres/remotes).",
              "**High frequency (ionising)** - UV (fluorescent lamps/skin cancer risk), X-rays (bone imaging/cell mutation), Gamma rays (sterilising food/radiotherapy/DNA damage)."
            ],
            "exampleHeading": "Worked example: Wavelength of a 100 MHz FM radio wave",
            "examples": [
              "λ = c / f = (3.0 × 10⁸) / (100 × 10⁶) = 3.0 m."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "electromagnetic spectrum",
            "definition": "The continuous family of transverse waves that travel at 3.0 × 10⁸ m/s in a vacuum."
          }
        ],
        "memoryAid": "Roman Men Invented Very Unusual X-ray Guns (Radio, Micro, IR, Visible, UV, X-ray, Gamma)!"
      }
    ],
    "checklistPoints": [
      "Apply Snell’s Law n = sin i / sin r and state both conditions for total internal reflection",
      "Draw converging lens ray diagrams and match concave/convex lenses to short/long sight",
      "Recall all 7 regions of the EM spectrum in order with their speed (3.0 × 10⁸ m/s), uses, and hazards"
    ],
    "keyTerms": [
      {
        "term": "Total internal reflection",
        "definition": "Complete reflection of a light ray back inside a denser medium when the angle of incidence exceeds the critical angle."
      },
      {
        "term": "Critical angle",
        "definition": "The angle of incidence in a denser medium that produces an angle of refraction of exactly 90° along the boundary."
      },
      {
        "term": "Focal length",
        "definition": "The distance between the optical centre of a thin lens and its principal focus F."
      },
      {
        "term": "Electromagnetic spectrum",
        "definition": "The continuous family of transverse waves that travel at 3.0 × 10⁸ m/s in a vacuum."
      }
    ]
  },
  "igcse-phys-3-3": {
    "subtopicId": "igcse-phys-3-3",
    "subtopicCode": "3.3",
    "subtopicTitle": "Sound Waves, Echoes & Ultrasound",
    "readingMinutes": 8,
    "videoTitle": "GCSE Physics - Sound Waves and Hearing",
    "youtubeId": "s9wZkP64rAc",
    "videoChannel": "Cognito",
    "videoDuration": "5:08",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Longitudinal Sound Waves, Pitch & Loudness",
        "cardId": "igcse-phys-3-3-c1"
      },
      {
        "time": "1:45",
        "seconds": 105,
        "label": "Speed of Sound & Echo Calculations",
        "cardId": "igcse-phys-3-3-c2"
      },
      {
        "time": "3:25",
        "seconds": 205,
        "label": "Ultrasound (> 20 kHz) Medical & Sonar Uses",
        "cardId": "igcse-phys-3-3-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-3-3-c1",
        "title": "Production of Sound, Pitch & Loudness",
        "summary": "Sound is a longitudinal wave needing a medium; frequency controls pitch and amplitude controls loudness.",
        "bullets": [
          "**Medium required** - sound travels via vibrating particles as alternating **compressions** (high pressure) and **rarefactions** (low pressure); it CANNOT travel through a vacuum."
        ],
        "subsections": [
          {
            "heading": "Pitch, Loudness & Human Hearing Range",
            "bullets": [
              "**Pitch & Loudness** - higher **frequency** = higher pitch; larger **amplitude** = louder sound.",
              "**Audible range** - healthy young human ears hear **20 Hz to 20,000 Hz (20 kHz)**."
            ],
            "exampleHeading": "Concrete example: Reading a CRO trace",
            "examples": [
              "More waves crammed across the oscilloscope screen = higher frequency = higher pitch; taller peaks = larger amplitude = louder sound."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "compression",
            "definition": "A region in a longitudinal wave where particles are squashed closer together at higher pressure."
          },
          {
            "term": "rarefaction",
            "definition": "A region in a longitudinal wave where particles are spread further apart at lower pressure."
          }
        ]
      },
      {
        "id": "igcse-phys-3-3-c2",
        "title": "Speed of Sound in Media & Echo Distance Formula",
        "summary": "Sound travels fastest in solids and slowest in gases (~330–340 m/s in air); always account for the 2× round trip in echoes.",
        "bullets": [
          "**Speed order** - **Solids (~5000 m/s) > Liquids (~1500 m/s) > Gases (~340 m/s)** because closer, tightly bonded particles pass vibrations much faster."
        ],
        "subsections": [
          {
            "heading": "Echo & Sonar Formula",
            "bullets": [
              "**Round-trip factor of 2** - an echo travels to the reflector and back, so total distance = 2d, giving **d = (v × t) / 2**."
            ],
            "exampleHeading": "Worked example: Ship sonar pulse returns after 0.8 s (v = 1500 m/s in seawater)",
            "examples": [
              "Total path 2d = 1500 × 0.8 = 1200 m → Sea depth d = 1200 ÷ 2 = 600 m."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "echo",
            "definition": "A reflected sound wave heard after bouncing off a hard flat surface."
          }
        ],
        "commonMistake": "In echo and sonar calculations, NEVER forget to divide by 2 — the sound travels to the seabed/cliff AND back again!"
      },
      {
        "id": "igcse-phys-3-3-c3",
        "title": "Ultrasound (> 20 kHz) Applications",
        "summary": "Ultrasound partially reflects at boundaries between different tissues or internal metal cracks, making it ideal for non-ionising imaging.",
        "bullets": [
          "**Ultrasound** - sound waves with frequency **above 20,000 Hz (20 kHz)**, beyond human hearing."
        ],
        "subsections": [
          {
            "heading": "Medical Scanning, Industrial Testing & Sonar",
            "bullets": [
              "**Foetal scanning** - ultrasound is **non-ionising** (unlike X-rays), so it does not damage fetal DNA; reflections at tissue boundaries build a live image.",
              "**Non-destructive testing** - detects internal cracks inside metal pipes/aircraft wings without cutting them open."
            ],
            "exampleHeading": "Worked example: Detecting a crack in a steel block (v = 6000 m/s)",
            "examples": [
              "Echo from crack arrives at t = 10 μs (1 × 10⁻⁵ s).",
              "Depth of crack d = (6000 × 1 × 10⁻⁵) / 2 = 0.03 m = 3.0 cm."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "ultrasound",
            "definition": "Longitudinal sound waves with a frequency greater than 20,000 Hz (20 kHz)."
          }
        ],
        "memoryAid": "Loudness = Amplitude; Pitch = Frequency; Echo depth = (v × t) ÷ 2!"
      }
    ],
    "checklistPoints": [
      "Explain why sound cannot travel through a vacuum and links between pitch/frequency and loudness/amplitude",
      "Compare sound speeds in solids, liquids, and gases and solve echo problems with d = vt/2",
      "Define ultrasound (> 20 kHz) and explain why it is safer than X-rays for prenatal scanning"
    ],
    "keyTerms": [
      {
        "term": "Compression",
        "definition": "A region in a longitudinal wave where particles are squashed closer together at higher pressure."
      },
      {
        "term": "Rarefaction",
        "definition": "A region in a longitudinal wave where particles are spread further apart at lower pressure."
      },
      {
        "term": "Echo",
        "definition": "A reflected sound wave heard after bouncing off a hard flat surface."
      },
      {
        "term": "Ultrasound",
        "definition": "Longitudinal sound waves with a frequency greater than 20,000 Hz (20 kHz)."
      }
    ]
  },
  "igcse-phys-4-1": {
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1",
    "subtopicTitle": "Electric Charge, Current, EMF, Potential Difference & Resistance",
    "readingMinutes": 10,
    "videoTitle": "GCSE Physics - Voltage, Current & Resistance | V = IR Equation | IV Graphs",
    "youtubeId": "BbizKa6eywo",
    "videoChannel": "Cognito",
    "videoDuration": "4:35",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Electrostatics, Charge & Current (Q = It)",
        "cardId": "igcse-phys-4-1-c1"
      },
      {
        "time": "1:35",
        "seconds": 95,
        "label": "EMF, Potential Difference & Ohm’s Law",
        "cardId": "igcse-phys-4-1-c2"
      },
      {
        "time": "3:05",
        "seconds": 185,
        "label": "I–V Graphs, Wire Resistance & Electrical Power",
        "cardId": "igcse-phys-4-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-4-1-c1",
        "title": "Electrostatics, Charge & Electric Current",
        "summary": "Friction transfers negative electrons only; current is the rate of flow of charge I = Q / t.",
        "bullets": [
          "**Charging by friction** - ONLY negatively charged **electrons** move between insulators; gaining electrons makes an object negative, losing them leaves it positive. Like charges repel, opposite charges attract."
        ],
        "subsections": [
          {
            "heading": "Current vs Electron Flow",
            "bullets": [
              "**I = Q / t (Q = It)** - 1 ampere (A) = 1 coulomb (C) passing per second.",
              "**Conventional current vs electrons** - conventional current flows from **+ to −**, whereas actual electrons in metals flow from **− to +**."
            ],
            "exampleHeading": "Worked example: Charge flowing in 2 minutes at 3.5 A",
            "examples": [
              "Convert time: t = 2 × 60 = 120 s.",
              "Q = It = 3.5 × 120 = 420 C."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "electric current",
            "definition": "The rate of flow of electric charge (I = Q / t), measured in amperes (A)."
          }
        ]
      },
      {
        "id": "igcse-phys-4-1-c2",
        "title": "EMF, Potential Difference & Resistance (V = IR)",
        "summary": "EMF is energy supplied by a source per coulomb; p.d. is work done across a component per coulomb.",
        "bullets": [
          "**EMF vs p.d.** - both equal **W / Q** (1 volt = 1 joule per coulomb), measured with a **voltmeter in parallel**; **ammeters go in series**."
        ],
        "subsections": [
          {
            "heading": "Ohm’s Law & Wire Resistance Factors",
            "bullets": [
              "**V = IR** - resistance R = V / I (ohms, Ω).",
              "**Wire geometry** - resistance is **directly proportional to length** (R ∝ L) and **inversely proportional to cross-sectional area** (R ∝ 1/A). Doubling wire diameter multiplies area by 4, cutting resistance to ¼!"
            ],
            "exampleHeading": "Worked example: Wire doubled in length and doubled in cross-sectional area",
            "examples": [
              "Doubling length ×2 and doubling area ÷2 cancel out, so resistance stays unchanged."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "electromotive force",
            "definition": "The electrical work done by a source in moving a unit charge (1 C) around a complete circuit (E = W / Q)."
          },
          {
            "term": "potential difference",
            "definition": "The work done per unit charge passing between two points in a circuit (V = W / Q)."
          }
        ]
      },
      {
        "id": "igcse-phys-4-1-c3",
        "title": "I–V Characteristics & Electrical Power / Energy",
        "summary": "Ohmic resistors give straight lines through (0,0); filament lamps curve as heating raises resistance; diodes conduct one way.",
        "bullets": [
          "**Three I–V graphs** - **ohmic resistor** (constant temperature): straight line through origin; **filament lamp**: S-curve flattening at high V as temperature and resistance rise; **diode**: zero current in reverse, steep rise forward."
        ],
        "subsections": [
          {
            "heading": "Electrical Power & Kilowatt-Hours (kWh)",
            "bullets": [
              "**Power & Energy** - **P = IV = I²R = V²/R** and **E = IVt** (in joules).",
              "**Domestic electricity cost** - Energy (kWh) = Power (kW) × time (hours); Cost = kWh × price per unit."
            ],
            "exampleHeading": "Worked example: 2.5 kW kettle running for 30 minutes at 20p/kWh",
            "examples": [
              "Energy = 2.5 kW × 0.5 h = 1.25 kWh → Cost = 1.25 × 20p = 25p."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "ohmic conductor",
            "definition": "A component whose current is directly proportional to potential difference at constant temperature (constant resistance)."
          }
        ],
        "memoryAid": "Ammeter in Series (A-S), Voltmeter in Parallel (V-P); P = IV and E = IVt!",
        "commonMistake": "NEVER say positive protons move during static charging — ONLY electrons transfer between objects!"
      }
    ],
    "checklistPoints": [
      "Calculate charge Q = It and distinguish conventional current (+ to −) from electron flow (− to +)",
      "Distinguish EMF from potential difference and scale wire resistance with length and cross-sectional area",
      "Sketch and explain I–V graphs for resistors, filament lamps, and diodes, and compute P = IV and kWh costs"
    ],
    "keyTerms": [
      {
        "term": "Electric current",
        "definition": "The rate of flow of electric charge (I = Q / t), measured in amperes (A)."
      },
      {
        "term": "Electromotive force",
        "definition": "The electrical work done by a source in moving a unit charge (1 C) around a complete circuit (E = W / Q)."
      },
      {
        "term": "Potential difference",
        "definition": "The work done per unit charge passing between two points in a circuit (V = W / Q)."
      },
      {
        "term": "Ohmic conductor",
        "definition": "A component whose current is directly proportional to potential difference at constant temperature (constant resistance)."
      },
      {
        "term": "Electromotive Force (EMF)",
        "definition": "Electrical work done by a source in moving 1 C of charge around a complete circuit (E = W / Q)."
      }
    ]
  },
  "igcse-phys-4-2": {
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2",
    "subtopicTitle": "Series & Parallel Circuits, Potential Dividers & Mains Safety",
    "readingMinutes": 11,
    "videoTitle": "GCSE Physics - Series Circuits",
    "youtubeId": "Hk4JEB5DITw",
    "videoChannel": "Cognito",
    "videoDuration": "6:32",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Series vs Parallel Current, Voltage & Resistance",
        "cardId": "igcse-phys-4-2-c1"
      },
      {
        "time": "2:10",
        "seconds": 130,
        "label": "Potential Dividers, Thermistors & LDRs",
        "cardId": "igcse-phys-4-2-c2"
      },
      {
        "time": "4:20",
        "seconds": 260,
        "label": "Mains Safety: Fuses, Earthing & Double Insulation",
        "cardId": "igcse-phys-4-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-4-2-c1",
        "title": "Series & Parallel Circuit Rules",
        "summary": "Series circuits share voltage with identical current; parallel branches share full voltage and lower total resistance.",
        "bullets": [
          "**Series** - current is the SAME everywhere; total voltage splits (V = V₁ + V₂); total resistance adds (**R_total = R₁ + R₂**).",
          "**Parallel** - voltage is the SAME across each branch; total current splits (I = I₁ + I₂); **1/R_total = 1/R₁ + 1/R₂** (always LESS than the smallest branch resistor!)."
        ],
        "subsections": [
          {
            "heading": "Two Resistors in Parallel Shortcut",
            "bullets": [
              "**Product over sum** - for two resistors in parallel, R_total = (R₁ × R₂) / (R₁ + R₂)."
            ],
            "exampleHeading": "Worked example: 6 Ω and 3 Ω in parallel across a 12 V battery",
            "examples": [
              "R_total = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω.",
              "Total supply current I = 12 / 2 = 6 A (4 A through 3 Ω branch + 2 A through 6 Ω branch)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "parallel circuit",
            "definition": "A circuit with multiple branches where each branch receives the full supply potential difference independently."
          }
        ],
        "diagram": "circuit-series-parallel"
      },
      {
        "id": "igcse-phys-4-2-c2",
        "title": "Potential Dividers, NTC Thermistors & LDRs",
        "summary": "In a series divider, the resistor with the larger resistance grabs the larger share of supply voltage.",
        "bullets": [
          "**Potential divider equation** - V₁ / V₂ = R₁ / R₂, or V_out = V_in × (R_out / (R₁ + R₂))."
        ],
        "subsections": [
          {
            "heading": "Sensing Components",
            "bullets": [
              "**NTC Thermistor** - as temperature **increases**, resistance **decreases** (used in thermostats/fire alarms).",
              "**LDR (Light-Dependent Resistor)** - as light intensity **increases**, resistance **decreases** (used in automatic street lamps)."
            ],
            "exampleHeading": "Worked example: Automatic street light using an LDR",
            "examples": [
              "In darkness, the LDR’s resistance becomes very high, so it takes a much larger share of the supply p.d.",
              "This higher voltage across the LDR triggers a switch/relay to turn the street lamp ON."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "thermistor",
            "definition": "A temperature-dependent resistor whose resistance decreases sharply as temperature increases (NTC type)."
          },
          {
            "term": "potential divider",
            "definition": "Two resistors connected in series that split an input potential difference in the ratio of their resistances."
          }
        ],
        "memoryAid": "TURD & LURD: Temperature Up → Resistance Down (Thermistor); Light Up → Resistance Down (LDR)!"
      },
      {
        "id": "igcse-phys-4-2-c3",
        "title": "Electrical Safety: Fuses, Circuit Breakers & Earthing",
        "summary": "Switches and fuses always go on the LIVE wire; earthing creates a low-resistance path to blow the fuse if a metal case becomes live.",
        "bullets": [
          "**Three mains wires** - **Live** (brown, 230 V alternating), **Neutral** (blue, ~0 V return), **Earth** (green/yellow, 0 V safety wire attached to metal casings)."
        ],
        "subsections": [
          {
            "heading": "Fuses, Earthing & Double Insulation",
            "bullets": [
              "**Choosing a fuse** - pick the standard rating just **above** normal operating current (e.g. a 5.2 A appliance needs a 13 A fuse, not 5 A).",
              "**How earthing saves lives** - if a loose live wire touches a metal case, a huge current flows straight to Earth through the low-resistance earth wire, melting the fuse in the live wire and disconnecting the appliance.",
              "**Double insulation** - plastic outer casing means no exposed metal parts can become live, so no earth wire is needed."
            ],
            "exampleHeading": "Worked example: Fuse selection for a 1,150 W, 230 V toaster",
            "examples": [
              "Normal current I = P / V = 1150 / 230 = 5.0 A → fit the next standard fuse up (e.g. 10 A or 13 A; a 3 A fuse would blow immediately)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "fuse",
            "definition": "A thin wire placed in the live wire that melts and breaks the circuit if current exceeds a safe rating."
          }
        ],
        "commonMistake": "When calculating 1/R_total = 1/R₁ + 1/R₂, ALWAYS flip (take the reciprocal of) your final fraction to get R_total!"
      }
    ],
    "checklistPoints": [
      "Solve combined series and parallel circuit current, p.d., and resistance problems",
      "Explain how NTC thermistors and LDRs control output voltage in potential dividers",
      "Explain why fuses/switches sit in the live wire and how earthing + fuse prevent electric shock"
    ],
    "keyTerms": [
      {
        "term": "Parallel circuit",
        "definition": "A circuit with multiple branches where each branch receives the full supply potential difference independently."
      },
      {
        "term": "Thermistor",
        "definition": "A temperature-dependent resistor whose resistance decreases sharply as temperature increases (NTC type)."
      },
      {
        "term": "Potential divider",
        "definition": "Two resistors connected in series that split an input potential difference in the ratio of their resistances."
      },
      {
        "term": "Fuse",
        "definition": "A thin wire placed in the live wire that melts and breaks the circuit if current exceeds a safe rating."
      }
    ]
  },
  "igcse-phys-4-3": {
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3",
    "subtopicTitle": "Magnetism, Motor Effect, EM Induction & Transformers",
    "readingMinutes": 12,
    "videoTitle": "GCSE Physics - How Transformers Work",
    "youtubeId": "7RtBUEZbKmI",
    "videoChannel": "Cognito",
    "videoDuration": "4:19",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Magnetic Fields, Electromagnets & Motor Effect",
        "cardId": "igcse-phys-4-3-c1"
      },
      {
        "time": "1:25",
        "seconds": 85,
        "label": "Electromagnetic Induction & A.C. Generators",
        "cardId": "igcse-phys-4-3-c2"
      },
      {
        "time": "2:50",
        "seconds": 170,
        "label": "Transformers & High-Voltage Grid Transmission",
        "cardId": "igcse-phys-4-3-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-4-3-c1",
        "title": "Magnetic Fields, Soft Iron & The Motor Effect",
        "summary": "Field lines run North to South; use Fleming’s Left-Hand Rule for motor force and a split-ring commutator to keep a DC motor spinning.",
        "bullets": [
          "**Magnetic materials** - **soft iron** magnetises and demagnetises easily (used in electromagnets and transformer cores); **steel** retains magnetism (permanent magnets)."
        ],
        "subsections": [
          {
            "heading": "Fleming’s Left-Hand Rule & DC Motors",
            "bullets": [
              "**Left-hand rule** - **Thumb** = Motion/Force, **First finger** = Field (N → S), **Second finger** = Current (+ → −).",
              "**Split-ring commutator** - reverses current direction in the coil every half-turn so the turning moment always pushes the coil in the same rotational direction."
            ],
            "exampleHeading": "Concrete check: Increasing DC motor speed",
            "examples": [
              "Increase current, use stronger magnets, or add more turns of wire on the coil."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "split-ring commutator",
            "definition": "A rotating switch in a DC motor that reverses current direction in the coil every half-revolution to maintain continuous rotation."
          }
        ]
      },
      {
        "id": "igcse-phys-4-3-c2",
        "title": "Electromagnetic Induction & A.C. Generators",
        "summary": "Moving a conductor across magnetic field lines induces an EMF that opposes the change producing it (Lenz’s Law).",
        "bullets": [
          "**Induced EMF** - produced whenever a wire cuts magnetic field lines or the magnetic flux through a coil changes; increase it by moving faster, using a stronger magnet, or adding more turns."
        ],
        "subsections": [
          {
            "heading": "Lenz’s Law & Slip Rings",
            "bullets": [
              "**Lenz’s law** - the direction of an induced current always opposes the motion/change that created it (conserving energy).",
              "**A.C. generator** - uses **slip rings** (NOT a split-ring commutator) to output alternating current whose peak EMF occurs when the coil cuts field lines fastest (coil horizontal)."
            ],
            "exampleHeading": "Concrete check: Pushing a North pole into a solenoid",
            "examples": [
              "The near end of the solenoid becomes a North pole to repel the incoming magnet."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "electromagnetic induction",
            "definition": "The generation of an electromotive force (EMF) across a conductor exposed to a changing magnetic field."
          }
        ],
        "memoryAid": "Left Hand = Motor (electrical → motion); Right Hand = Generator (motion → electrical)!"
      },
      {
        "id": "igcse-phys-4-3-c3",
        "title": "Transformers & High-Voltage Power Transmission",
        "summary": "Transformers require A.C. to create a changing magnetic field in the soft-iron core, obeying V_p/V_s = N_p/N_s and I_pV_p = I_sV_s.",
        "bullets": [
          "**Transformer equations** - **V_p / V_s = N_p / N_s** and for a 100% efficient transformer **I_p V_p = I_s V_s**."
        ],
        "subsections": [
          {
            "heading": "Why the National Grid Uses High Voltage",
            "bullets": [
              "**Cutting I²R cable losses** - stepping UP voltage dramatically steps DOWN current (I = P / V). Because heating power loss in cables is **P_loss = I²R**, reducing current by 10× reduces wasted heat by 100×!",
              "**Why A.C. is essential** - D.C. creates a steady magnetic field that stops changing, so zero voltage is induced in the secondary coil."
            ],
            "exampleHeading": "Worked example: Step-down transformer from 240 V to 12 V",
            "examples": [
              "Primary has 2,000 turns → Secondary turns N_s = 2000 × (12 / 240) = 100 turns.",
              "If secondary current is 4 A, primary current I_p = (12 × 4) / 240 = 0.20 A."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "step-up transformer",
            "definition": "A transformer with more turns on the secondary coil than the primary coil, increasing voltage and decreasing current."
          }
        ],
        "commonMistake": "Never say electricity flows through the iron core of a transformer — the coils are electrically insulated; energy transfers purely via the CHANGING MAGNETIC FIELD in the soft-iron core!"
      }
    ],
    "checklistPoints": [
      "Apply Fleming’s Left-Hand Rule and explain the role of the split-ring commutator in DC motors",
      "Explain electromagnetic induction, Lenz’s Law, and how slip rings produce A.C. in a generator",
      "Calculate transformer turns/voltages/currents and explain why high voltage reduces P = I²R grid losses"
    ],
    "keyTerms": [
      {
        "term": "Split-ring commutator",
        "definition": "A rotating switch in a DC motor that reverses current direction in the coil every half-revolution to maintain continuous rotation."
      },
      {
        "term": "Electromagnetic induction",
        "definition": "The generation of an electromotive force (EMF) across a conductor exposed to a changing magnetic field."
      },
      {
        "term": "Step-up transformer",
        "definition": "A transformer with more turns on the secondary coil than the primary coil, increasing voltage and decreasing current."
      },
      {
        "term": "Magnetic Fields, Soft Iron & The Motor Effect",
        "definition": "Field lines run North to South; use Fleming’s Left-Hand Rule for motor force and a split-ring commutator to keep a DC motor spinning."
      }
    ]
  },
  "igcse-phys-5-1": {
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1",
    "subtopicTitle": "The Nuclear Model of the Atom, Isotopes, Fission & Fusion",
    "readingMinutes": 9,
    "videoTitle": "GCSE Physics - Nuclear Fission - How it Works | Nuclear Reactors | Pros & Cons",
    "youtubeId": "JQEZaJX7NVQ",
    "videoChannel": "Cognito",
    "videoDuration": "4:14",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Rutherford Alpha Scattering & Nuclear Model",
        "cardId": "igcse-phys-5-1-c1"
      },
      {
        "time": "1:25",
        "seconds": 85,
        "label": "Nuclide Notation & Isotopes",
        "cardId": "igcse-phys-5-1-c2"
      },
      {
        "time": "2:50",
        "seconds": 170,
        "label": "Nuclear Fission vs Nuclear Fusion",
        "cardId": "igcse-phys-5-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-5-1-c1",
        "title": "Rutherford’s Gold Foil Alpha-Scattering Experiment",
        "summary": "Most alpha particles passed straight through (mostly empty space), while a tiny fraction rebounded (tiny, dense, positive nucleus).",
        "bullets": [
          "**Three key conclusions** - (1) Most went straight through → atom is mostly **empty space**; (2) Small fraction deflected at large angles → nucleus is **positively charged**; (3) Very few bounced straight back → nucleus is **tiny and contains almost all the mass**."
        ],
        "subsections": [
          {
            "heading": "Subatomic Particles",
            "bullets": [
              "**Protons (+1, mass 1)** and **Neutrons (0, mass 1)** sit in the central nucleus; **Electrons (−1, negligible mass)** orbit in shells."
            ],
            "exampleHeading": "Concrete check: Why a vacuum was required",
            "examples": [
              "Alpha particles have a very short range in air (a few cm), so the chamber had to be evacuated."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "nucleus",
            "definition": "The tiny, dense, positively charged core of an atom containing protons and neutrons."
          }
        ],
        "diagram": "atomic-structure"
      },
      {
        "id": "igcse-phys-5-1-c2",
        "title": "Nuclide Notation & Isotopes",
        "summary": "Mass number A = protons + neutrons; atomic number Z = protons; isotopes share Z but differ in neutron number.",
        "bullets": [
          "**Nuclide notation ᴬ_Z X** - **Z** (bottom) = proton (atomic) number; **A** (top) = nucleon (mass) number = protons + neutrons; Neutrons = A − Z."
        ],
        "subsections": [
          {
            "heading": "Isotopes & Nuclear Stability",
            "bullets": [
              "**Isotopes** - atoms of the SAME element with the same number of protons (Z) but DIFFERENT numbers of neutrons (hence different A)."
            ],
            "exampleHeading": "Worked example: Carbon-12 vs Carbon-14 (Z = 6)",
            "examples": [
              "¹²₆C has 6 protons and 6 neutrons; ¹⁴₆C has 6 protons and 8 neutrons (radioactive isotope)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "isotope",
            "definition": "Atoms of the same element with the same number of protons but different numbers of neutrons."
          }
        ]
      },
      {
        "id": "igcse-phys-5-1-c3",
        "title": "Nuclear Fission & Nuclear Fusion",
        "summary": "Fission splits a heavy nucleus (U-235) after neutron absorption; fusion joins light nuclei (hydrogen) under extreme temperature and pressure.",
        "bullets": [
          "**Nuclear fission** - a slow neutron is absorbed by uranium-235, splitting it into two smaller daughter nuclei, 2–3 fast neutrons (sustaining a **chain reaction**), and huge kinetic energy.",
          "**Nuclear fusion** - two light nuclei (e.g. deuterium + tritium) combine into a heavier helium nucleus, releasing massive energy — powers all stars."
        ],
        "subsections": [
          {
            "heading": "Why Fusion Requires Extreme Conditions",
            "bullets": [
              "**Electrostatic repulsion** - positively charged light nuclei strongly repel each other, requiring extremely high **temperature** (high kinetic energy) and high **pressure/density** to collide closely enough to fuse."
            ],
            "exampleHeading": "Concrete comparison: Reactor control rods vs moderator",
            "examples": [
              "Control rods (boron) absorb excess neutrons to control chain-reaction rate; the moderator (graphite/water) slows fast neutrons down."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "nuclear fission",
            "definition": "The splitting of a large unstable nucleus (such as U-235) into smaller daughter nuclei plus neutrons and energy."
          },
          {
            "term": "nuclear fusion",
            "definition": "The joining of two light atomic nuclei to form a heavier nucleus, releasing energy."
          }
        ],
        "memoryAid": "Fission = Division (splitting heavy nuclei); Fusion = Fusing together (joining light nuclei in stars)!",
        "commonMistake": "Do NOT confuse control rods with the moderator: control rods ABSORB neutrons, while the moderator SLOWS them down!"
      }
    ],
    "checklistPoints": [
      "Link each observation from Rutherford’s gold-foil experiment to its nuclear conclusion",
      "Calculate protons, neutrons (A − Z), and electrons from nuclide notation and define isotopes",
      "Contrast nuclear fission (chain reaction in reactors) with nuclear fusion (powering stars)"
    ],
    "keyTerms": [
      {
        "term": "Nucleus",
        "definition": "The tiny, dense, positively charged core of an atom containing protons and neutrons."
      },
      {
        "term": "Isotope",
        "definition": "Atoms of the same element with the same number of protons but different numbers of neutrons."
      },
      {
        "term": "Nuclear fission",
        "definition": "The splitting of a large unstable nucleus (such as U-235) into smaller daughter nuclei plus neutrons and energy."
      },
      {
        "term": "Nuclear fusion",
        "definition": "The joining of two light atomic nuclei to form a heavier nucleus, releasing energy."
      }
    ]
  },
  "igcse-phys-5-2": {
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2",
    "subtopicTitle": "Radioactive Decay (Alpha, Beta, Gamma) & Half-Life",
    "readingMinutes": 10,
    "videoTitle": "GCSE Physics - Alpha, Beta & Gamma Radiation | How Ionising & Penetrating They Are",
    "youtubeId": "1ui5YnYkYpc",
    "videoChannel": "Cognito",
    "videoDuration": "4:57",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Alpha, Beta & Gamma Properties & Deflection",
        "cardId": "igcse-phys-5-2-c1"
      },
      {
        "time": "1:45",
        "seconds": 105,
        "label": "Balancing Nuclear Decay Equations",
        "cardId": "igcse-phys-5-2-c2"
      },
      {
        "time": "3:20",
        "seconds": 200,
        "label": "Half-Life, Background Radiation & Safety",
        "cardId": "igcse-phys-5-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-5-2-c1",
        "title": "Properties & Field Deflection of Alpha, Beta & Gamma",
        "summary": "Alpha is strongly ionising but stopped by paper; beta is moderate (aluminium); gamma is weakly ionising EM radiation (thick lead).",
        "bullets": [
          "**Alpha (α = ⁴₂He)** - +2 charge, mass 4, **highest ionising power**, stopped by paper or ~5 cm air.",
          "**Beta (β⁻ = ⁰₋₁e)** - −1 charge, tiny mass, moderate ionising power, stopped by ~3–5 mm aluminium.",
          "**Gamma (γ)** - uncharged EM wave, **lowest ionising power**, greatly reduced by thick lead or metres of concrete."
        ],
        "subsections": [
          {
            "heading": "Deflection in Electric & Magnetic Fields",
            "bullets": [
              "**Electric field** - positive α deflects slightly towards the negative plate; lightweight negative β deflects **sharply** towards the positive plate; uncharged γ passes straight through."
            ],
            "exampleHeading": "Concrete check: Why β deflects more than α",
            "examples": [
              "Although α has twice the charge magnitude, its mass is ~7,300 times larger than an electron, giving β a much larger charge-to-mass ratio."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "ionisation",
            "definition": "Knocking electrons off neutral atoms to turn them into charged ions, which can damage living DNA."
          }
        ]
      },
      {
        "id": "igcse-phys-5-2-c2",
        "title": "Balancing Nuclear Decay Equations",
        "summary": "Total mass number (top) and total atomic number (bottom) must balance across the arrow.",
        "bullets": [
          "**Alpha decay** - mass number A decreases by **4**, atomic number Z decreases by **2** (emits ⁴₂He).",
          "**Beta-minus decay** - a neutron turns into a proton + fast electron (⁰₋₁e), so A stays **unchanged** and Z **increases by 1**.",
          "**Gamma emission** - releases excess nuclear energy only; A and Z stay unchanged."
        ],
        "subsections": [
          {
            "heading": "Worked Nuclear Equations",
            "bullets": [
              "**Check sums both sides** - top numbers left = top numbers right; bottom numbers left = bottom numbers right."
            ],
            "exampleHeading": "Worked example: Alpha decay of ²²⁶₈₈Ra and Beta decay of ¹⁴₆C",
            "examples": [
              "²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (222 + 4 = 226; 86 + 2 = 88).",
              "¹⁴₆C → ¹⁴₇N + ⁰₋₁e (14 + 0 = 14; 7 − 1 = 6)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "beta particle",
            "definition": "A high-speed electron (⁰₋₁e) emitted from an unstable nucleus when a neutron changes into a proton."
          }
        ]
      },
      {
        "id": "igcse-phys-5-2-c3",
        "title": "Half-Life, Background Radiation & Applications",
        "summary": "Always subtract background count rate FIRST before halving to find half-life.",
        "bullets": [
          "**Half-life (t_½)** - the average time taken for half the unstable nuclei in a sample to decay (or for the corrected count rate to halve). Decay is **random and spontaneous** (unaffected by temperature or chemical bonding)."
        ],
        "subsections": [
          {
            "heading": "Background Correction & Practical Uses",
            "bullets": [
              "**Background radiation** - comes from radon gas, rocks/buildings, cosmic rays, and medical X-rays; always subtract background from readings BEFORE finding half-life.",
              "**Matching isotope to use** - smoke detectors use α (ionises air, stopped safely by casing); paper thickness gauges use β; medical tracers use short half-life γ (escapes body, low ionisation, decays quickly)."
            ],
            "exampleHeading": "Worked example: Count rate with background = 20 cpm",
            "examples": [
              "Measured rate drops from 340 cpm to 100 cpm in 12 hours.",
              "Corrected rates: 320 cpm → 80 cpm (320 → 160 → 80 = 2 half-lives), so t_½ = 12 ÷ 2 = 6 hours."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "half-life",
            "definition": "The time taken for half of the radioactive nuclei in a sample to decay, or for the activity/corrected count rate to halve."
          }
        ],
        "memoryAid": "Background FIRST, halve SECOND! Always subtract background before dividing by 2.",
        "commonMistake": "Never forget to subtract background count rate before halving — dividing raw 340 cpm directly gives the wrong half-life!"
      }
    ],
    "checklistPoints": [
      "Compare α, β, and γ ionisation, penetration, and deflection in electric/magnetic fields",
      "Balance alpha and beta decay equations accurately",
      "Subtract background radiation first to compute half-life and match isotopes to practical uses"
    ],
    "keyTerms": [
      {
        "term": "Ionisation",
        "definition": "Knocking electrons off neutral atoms to turn them into charged ions, which can damage living DNA."
      },
      {
        "term": "Beta particle",
        "definition": "A high-speed electron (⁰₋₁e) emitted from an unstable nucleus when a neutron changes into a proton."
      },
      {
        "term": "Half-life",
        "definition": "The time taken for half of the radioactive nuclei in a sample to decay, or for the activity/corrected count rate to halve."
      },
      {
        "term": "Properties & Field Deflection of Alpha, Beta & Gamma",
        "definition": "Alpha is strongly ionising but stopped by paper; beta is moderate (aluminium); gamma is weakly ionising EM radiation (thick lead)."
      }
    ]
  },
  "igcse-phys-6-1": {
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1",
    "subtopicTitle": "Earth, The Solar System & Orbital Motion",
    "readingMinutes": 9,
    "videoTitle": "GCSE Physics - Gravitational Potential Energy & Gravity | How to Calculate Weight",
    "youtubeId": "hSzEdvFEVq8",
    "videoChannel": "Cognito",
    "videoDuration": "6:51",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Earth’s Rotation, Tilt, Seasons & Moon Phases",
        "cardId": "igcse-phys-6-1-c1"
      },
      {
        "time": "2:15",
        "seconds": 135,
        "label": "The Solar System, Accretion & Elliptical Orbits",
        "cardId": "igcse-phys-6-1-c2"
      },
      {
        "time": "4:35",
        "seconds": 275,
        "label": "Orbital Speed Formula v = 2πr / T",
        "cardId": "igcse-phys-6-1-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-6-1-c1",
        "title": "Earth’s Rotation, Axial Tilt, Seasons & Phases of the Moon",
        "summary": "Earth’s 24 h spin causes day/night; its 23.5° axial tilt causes seasons; the Moon’s ~27.3–29.5 day orbit creates phases.",
        "bullets": [
          "**Day & Night** - caused by Earth rotating once on its axis every **24 hours** (Sun appears to rise in the East and set in the West).",
          "**Seasons** - caused by Earth’s **23.5° axial tilt** as it orbits the Sun every **365.25 days** (NOT because Earth is closer to the Sun!)."
        ],
        "subsections": [
          {
            "heading": "Moon Phases",
            "bullets": [
              "**Phases of the Moon** - as the Moon orbits Earth roughly once a month, we see different fractions of its sunlit hemisphere (New → Waxing Crescent → First Quarter → Full → Waning)."
            ],
            "exampleHeading": "Concrete check: Why Northern Summer is warmer",
            "examples": [
              "When the Northern Hemisphere tilts towards the Sun, days are longer and sunlight strikes at a steeper angle, concentrating energy per unit area."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "orbit",
            "definition": "The curved gravitational path followed by a planet around a star or a moon/satellite around a planet."
          }
        ]
      },
      {
        "id": "igcse-phys-6-1-c2",
        "title": "Structure of the Solar System & Accretion Model",
        "summary": "Four small rocky inner planets, four huge gaseous/icy outer giants, formed by gravitational collapse of a rotating nebula.",
        "bullets": [
          "**Planet order** - **Mercury, Venus, Earth, Mars** (small, dense, rocky) | Asteroid Belt | **Jupiter, Saturn, Uranus, Neptune** (large, cold, gas/ice giants)."
        ],
        "subsections": [
          {
            "heading": "Accretion Disc & Elliptical Comet Orbits",
            "bullets": [
              "**Accretion model** - a giant rotating cloud of gas and dust collapsed under gravity into a flat spinning **accretion disc**; high temperatures near the young Sun allowed only metals/rocks to condense into inner planets, while lighter gases/ices formed outer giants.",
              "**Comets** - follow highly **elliptical** orbits; as a comet approaches the Sun, gravitational potential energy converts into kinetic energy so it travels **fastest at closest approach**."
            ],
            "exampleHeading": "Concrete check: Sun’s mass dominance",
            "examples": [
              "The Sun contains >99.8% of the Solar System’s mass, providing the huge gravitational pull holding all planets in orbit."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "accretion disc",
            "definition": "A rotating flat disc of gas and dust around a forming star from which planets coalesce under gravity."
          }
        ],
        "memoryAid": "My Very Educated Mother Just Served Us Noodles (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)!"
      },
      {
        "id": "igcse-phys-6-1-c3",
        "title": "Orbital Speed v = 2πr / T & Gravitational Field Strength",
        "summary": "Outer planets experience weaker solar gravity and move more slowly along much longer orbits.",
        "bullets": [
          "**Average orbital speed** - **v = 2πr / T**, where r is the average orbital radius and T is the orbital period."
        ],
        "subsections": [
          {
            "heading": "Trends Moving Outward from the Sun",
            "bullets": [
              "**As orbital distance r increases** - gravitational field strength **decreases**, orbital speed **decreases**, orbital period **increases**, and surface temperature generally **decreases**."
            ],
            "exampleHeading": "Worked example: Earth’s orbital speed (r = 1.5 × 10¹¹ m, T = 365 days)",
            "examples": [
              "T = 365 × 24 × 3600 = 3.15 × 10⁷ s.",
              "v = (2π × 1.5 × 10¹¹) / (3.15 × 10⁷) ≈ 2.99 × 10⁴ m/s (≈ 30 km/s)."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "orbital period",
            "definition": "The time T taken for a planet, moon, or satellite to complete one full orbit."
          }
        ],
        "commonMistake": "NEVER claim summer happens because Earth is closer to the Sun — seasons are caused solely by Earth’s 23.5° axial tilt!"
      }
    ],
    "checklistPoints": [
      "Explain day/night, seasons (axial tilt), and lunar phases clearly",
      "Recall planet order, the accretion model, and energy conservation in elliptical comet orbits",
      "Calculate average orbital speed using v = 2πr / T in consistent SI units"
    ],
    "keyTerms": [
      {
        "term": "Orbit",
        "definition": "The curved gravitational path followed by a planet around a star or a moon/satellite around a planet."
      },
      {
        "term": "Accretion disc",
        "definition": "A rotating flat disc of gas and dust around a forming star from which planets coalesce under gravity."
      },
      {
        "term": "Orbital period",
        "definition": "The time T taken for a planet, moon, or satellite to complete one full orbit."
      },
      {
        "term": "Earth’s Rotation, Axial Tilt, Seasons & Phases of the Moon",
        "definition": "Earth’s 24 h spin causes day/night; its 23.5° axial tilt causes seasons; the Moon’s ~27.3–29.5 day orbit creates phases."
      }
    ]
  },
  "igcse-phys-6-2": {
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2",
    "subtopicTitle": "Life Cycle of Stars, Red-Shift & The Big Bang (Hubble’s Law)",
    "readingMinutes": 10,
    "videoTitle": "GCSE Physics - What is Red Shift?",
    "youtubeId": "bWEtm-7cYzM",
    "videoChannel": "Cognito",
    "videoDuration": "5:59",
    "courseMatchSummary": "4 of 4 sections match Cambridge IGCSE Physics (0625)",
    "timestamps": [
      {
        "time": "0:00",
        "seconds": 0,
        "label": "Star Life Cycles (Sun-like vs Massive Stars)",
        "cardId": "igcse-phys-6-2-c1"
      },
      {
        "time": "2:00",
        "seconds": 120,
        "label": "Galaxies, Light-Years & Red-Shift",
        "cardId": "igcse-phys-6-2-c2"
      },
      {
        "time": "4:00",
        "seconds": 240,
        "label": "CMBR, Big Bang & Hubble’s Law (H₀)",
        "cardId": "igcse-phys-6-2-c3"
      }
    ],
    "cards": [
      {
        "id": "igcse-phys-6-2-c1",
        "title": "Life Cycle of Stars (Sun-Like vs Massive Stars)",
        "summary": "Stable main-sequence stars balance inward gravity against outward radiation pressure from hydrogen fusion.",
        "bullets": [
          "**Formation** - interstellar **nebula** collapses under gravity → **protostar** heats until core fuses hydrogen into helium → stable **main sequence star** (gravity = outward radiation pressure)."
        ],
        "subsections": [
          {
            "heading": "Two Evolutionary Paths",
            "bullets": [
              "**Sun-like (low-mass) star** - Main sequence → **Red Giant** → Planetary Nebula + **White Dwarf** (cools to black dwarf).",
              "**Massive star** - Main sequence → **Red Supergiant** → **Supernova** explosion (creates elements heavier than iron!) → **Neutron Star** or **Black Hole**."
            ],
            "exampleHeading": "Concrete check: Origin of heavy elements like gold & uranium",
            "examples": [
              "Fusion inside stars builds elements up to iron; elements heavier than iron are forged in supernova explosions and scattered into new nebulae."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "supernova",
            "definition": "The colossal explosion at the end of a massive star’s life that synthesises elements heavier than iron and scatters them into space."
          }
        ]
      },
      {
        "id": "igcse-phys-6-2-c2",
        "title": "Light-Years, Galaxies & Cosmological Red-Shift",
        "summary": "Light from distant galaxies is stretched to longer (redder) wavelengths, showing the Universe is expanding.",
        "bullets": [
          "**Light-year** - the **DISTANCE** light travels in a vacuum in one year (≈ 9.5 × 10¹⁵ m). Our Sun sits inside the **Milky Way** galaxy of billions of stars."
        ],
        "subsections": [
          {
            "heading": "Red-Shift as Evidence of Expansion",
            "bullets": [
              "**Cosmological red-shift** - absorption lines from distant galaxies are shifted towards the **red (longer wavelength, lower frequency)** end of the spectrum because space itself is expanding.",
              "**Further = faster** - more distant galaxies show GREATER red-shift, proving they are receding faster."
            ],
            "exampleHeading": "Concrete analogy: Expanding raisin dough",
            "examples": [
              "As bread dough expands in an oven, every raisin moves away from every other raisin — the further apart two raisins are, the faster they separate."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "red-shift",
            "definition": "The increase in observed wavelength of light emitted by receding distant galaxies due to the expansion of space."
          },
          {
            "term": "light-year",
            "definition": "A unit of distance equal to the distance light travels in a vacuum in one year (≈ 9.5 × 10¹⁵ m)."
          }
        ]
      },
      {
        "id": "igcse-phys-6-2-c3",
        "title": "CMBR, The Big Bang & Hubble’s Law",
        "summary": "CMBR is stretched early-Universe radiation; Hubble’s Law v = H₀d allows estimating the age of the Universe as 1 / H₀.",
        "bullets": [
          "**Cosmic Microwave Background Radiation (CMBR)** - uniform microwave radiation arriving from all directions in space; remnant thermal radiation from the hot early Big Bang stretched into microwaves by expansion."
        ],
        "subsections": [
          {
            "heading": "Hubble’s Law & Age of the Universe",
            "bullets": [
              "**Hubble’s constant H₀** - **H₀ = v / d** ≈ 2.2 × 10⁻¹⁸ s⁻¹, where v is recession speed and d is galaxy distance.",
              "**Age of the Universe** - **t = d / v = 1 / H₀** ≈ 1 / (2.2 × 10⁻¹⁸) ≈ 4.5 × 10¹⁷ s (≈ 14 billion years)."
            ],
            "exampleHeading": "Worked example: Recession speed of a galaxy at d = 5.0 × 10²⁴ m",
            "examples": [
              "v = H₀ d = (2.2 × 10⁻¹⁸) × (5.0 × 10²⁴) = 1.1 × 10⁷ m/s."
            ]
          }
        ],
        "glossaryPills": [
          {
            "term": "CMBR",
            "definition": "Cosmic Microwave Background Radiation — uniform microwave radiation filling all of space, left over from the early hot Big Bang."
          }
        ],
        "memoryAid": "Two Big Bang pillars: 1) Red-shift of distant galaxies (space expanding) + 2) CMBR (cooled glow from the hot beginning)!",
        "commonMistake": "A light-year is a unit of DISTANCE (~9.5 × 10¹⁵ m), NOT a unit of time!"
      }
    ],
    "checklistPoints": [
      "Trace both Sun-like and massive star life cycles and state why main-sequence stars are stable",
      "Define light-year (distance) and explain how red-shift and CMBR support the Big Bang theory",
      "Use Hubble’s Law H₀ = v / d and estimate the age of the Universe as 1 / H₀"
    ],
    "keyTerms": [
      {
        "term": "Supernova",
        "definition": "The colossal explosion at the end of a massive star’s life that synthesises elements heavier than iron and scatters them into space."
      },
      {
        "term": "Red-shift",
        "definition": "The increase in observed wavelength of light emitted by receding distant galaxies due to the expansion of space."
      },
      {
        "term": "Light-year",
        "definition": "A unit of distance equal to the distance light travels in a vacuum in one year (≈ 9.5 × 10¹⁵ m)."
      },
      {
        "term": "CMBR",
        "definition": "Cosmic Microwave Background Radiation — uniform microwave radiation filling all of space, left over from the early hot Big Bang."
      }
    ]
  }
};

export const IGCSE_PHYSICS_QUIZZES: QuizQuestion[] = [
  {
    "id": "igcse-phys-q-1-1-1",
    "subtopicId": "igcse-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What does the AREA underneath a speed-time graph represent?",
    "options": [
      "Acceleration",
      "Distance travelled",
      "Resultant force",
      "Average speed"
    ],
    "correctIndex": 1,
    "explanation": "Gradient of a speed-time graph is acceleration; area under the graph is distance travelled."
  },
  {
    "id": "igcse-phys-q-1-1-2",
    "subtopicId": "igcse-phys-1-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A cyclist accelerates uniformly from 3 m/s to 15 m/s in 4 s. Calculate the acceleration.",
    "explanation": "a = (15 − 3) ÷ 4 = 3 m/s².",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "a = (v − u) / t = (15 − 3) / 4 = 12 / 4 = 3 m/s².",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "12",
              "15 - 3",
              "15 − 3"
            ]
          ],
          "markDescription": "Uses (15 − 3)/4"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 3,
            "tolerance": 0.05
          },
          "markDescription": "Acceleration 3 m/s²"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-1-1-3",
    "subtopicId": "igcse-phys-1-1",
    "type": "multi-select",
    "marks": 2,
    "prompt": "Select the TWO vector quantities:",
    "options": [
      "Velocity",
      "Momentum",
      "Mass",
      "Temperature"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Velocity and momentum have both magnitude and direction; mass and temperature are scalars."
  },
  {
    "id": "igcse-phys-q-1-1-4",
    "subtopicId": "igcse-phys-1-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the explanation of terminal velocity:",
    "segments": [
      "A skydiver reaches terminal velocity when upward ",
      " equals downward ",
      ", making the resultant force zero."
    ],
    "wordBank": [
      "air resistance",
      "weight",
      "acceleration",
      "mass"
    ],
    "answers": [
      "air resistance",
      "weight"
    ],
    "explanation": "Balanced air resistance and weight produce zero resultant force and constant velocity."
  },
  {
    "id": "igcse-phys-q-1-1-5",
    "subtopicId": "igcse-phys-1-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Two perpendicular forces of 3 N and 4 N act on a point. What is the magnitude of their resultant force?",
    "options": [
      "7 N",
      "5 N",
      "1 N",
      "12 N"
    ],
    "correctIndex": 1,
    "explanation": "R = √(3² + 4²) = √25 = 5 N."
  },
  {
    "id": "igcse-phys-q-1-2-1",
    "subtopicId": "igcse-phys-1-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A spring stretches from 10 cm to 16 cm when a 12 N weight is hung on it. Calculate its spring constant k in N/cm.",
    "explanation": "Subtract original length first: x = 6 cm, then k = 12 ÷ 6 = 2 N/cm.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Extension x = 16 − 10 = 6 cm; k = F / x = 12 / 6 = 2 N/cm.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 6,
            "tolerance": 0.01
          },
          "markDescription": "Extension 6 cm"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 2,
            "tolerance": 0.01
          },
          "markDescription": "Spring constant 2 N/cm"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-1-2-2",
    "subtopicId": "igcse-phys-1-2",
    "type": "diagram-label",
    "marks": 2,
    "prompt": "Identify the force concepts shown on a free-body diagram:",
    "diagram": "forces-free-body",
    "labels": [
      {
        "marker": "Balanced forces (resultant = 0)",
        "options": [
          "Constant velocity or rest",
          "Increasing acceleration",
          "Free fall"
        ],
        "answer": "Constant velocity or rest"
      },
      {
        "marker": "Unbalanced resultant force F",
        "options": [
          "Acceleration a = F / m",
          "Zero motion",
          "Constant mass"
        ],
        "answer": "Acceleration a = F / m"
      }
    ],
    "explanation": "Newton’s 1st and 2nd laws directly link resultant force to acceleration."
  },
  {
    "id": "igcse-phys-q-1-2-3",
    "subtopicId": "igcse-phys-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A rock has mass 150 g and displaces 50 cm³ of water. What is its density?",
    "options": [
      "0.33 g/cm³",
      "3.0 g/cm³",
      "100 g/cm³",
      "7500 g/cm³"
    ],
    "correctIndex": 1,
    "explanation": "ρ = m / V = 150 / 50 = 3.0 g/cm³."
  },
  {
    "id": "igcse-phys-q-1-2-4",
    "subtopicId": "igcse-phys-1-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the distinction between mass and weight:",
    "segments": [
      "Mass is measured in ",
      " and stays constant everywhere, while weight is a force in ",
      " given by W = mg."
    ],
    "wordBank": [
      "kilograms",
      "newtons",
      "joules",
      "pascals"
    ],
    "answers": [
      "kilograms",
      "newtons"
    ],
    "explanation": "Mass is in kg; weight is a gravitational force in N."
  },
  {
    "id": "igcse-phys-q-1-2-5",
    "subtopicId": "igcse-phys-1-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "In uniform circular motion, which direction does the centripetal force always act?",
    "options": [
      "Outwards away from the centre",
      "Tangentially forward",
      "Inwards towards the centre of the circle",
      "Vertically upwards"
    ],
    "correctIndex": 2,
    "explanation": "Centripetal force always acts perpendicular to velocity towards the centre."
  },
  {
    "id": "igcse-phys-q-1-3-1",
    "subtopicId": "igcse-phys-1-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A 3 kg trolley moving at 4 m/s collides with and sticks to a stationary 1 kg trolley. Calculate their combined velocity.",
    "explanation": "Conserve momentum: 12 = (3 + 1)v → v = 3 m/s.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Total momentum before = 3 × 4 = 12 kg m/s; combined mass = 4 kg; v = 12 / 4 = 3 m/s.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 12,
            "tolerance": 0.05
          },
          "markDescription": "Initial momentum 12 kg m/s"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 3,
            "tolerance": 0.05
          },
          "markDescription": "Combined velocity 3 m/s"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-1-3-2",
    "subtopicId": "igcse-phys-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why do car airbags reduce injury during a crash?",
    "options": [
      "They reduce the total change in momentum",
      "They increase collision time Δt, reducing average force F = Δp/Δt",
      "They decrease the car’s mass",
      "They eliminate impulse completely"
    ],
    "correctIndex": 1,
    "explanation": "Same Δp over a longer time Δt produces a much smaller impact force."
  },
  {
    "id": "igcse-phys-q-1-3-3",
    "subtopicId": "igcse-phys-1-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the equilibrium condition:",
    "segments": [
      "For a beam to be in equilibrium, the total clockwise ",
      " must equal the total anticlockwise moment, and the ",
      " force must be zero."
    ],
    "wordBank": [
      "moment",
      "resultant",
      "impulse",
      "pressure"
    ],
    "answers": [
      "moment",
      "resultant"
    ],
    "explanation": "Both rotational (moments) and translational (forces) equilibrium are required."
  },
  {
    "id": "igcse-phys-q-1-3-4",
    "subtopicId": "igcse-phys-1-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Calculate the liquid pressure at 5 m depth in water (ρ = 1000 kg/m³, g = 9.8 N/kg).",
    "options": [
      "490 Pa",
      "4,900 Pa",
      "49,000 Pa",
      "2,000 Pa"
    ],
    "correctIndex": 2,
    "explanation": "Δp = ρgh = 1000 × 9.8 × 5 = 49,000 Pa."
  },
  {
    "id": "igcse-phys-q-1-3-5",
    "subtopicId": "igcse-phys-1-3",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each quantity to its formula:",
    "pairs": [
      {
        "left": "Moment",
        "right": "F × d"
      },
      {
        "left": "Momentum",
        "right": "m × v"
      },
      {
        "left": "Impulse",
        "right": "F × Δt"
      },
      {
        "left": "Liquid pressure",
        "right": "ρ × g × h"
      }
    ],
    "explanation": "Core mechanics and pressure formulae for 0625."
  },
  {
    "id": "igcse-phys-q-1-4-1",
    "subtopicId": "igcse-phys-1-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which set of energy resources does NOT originate from the Sun?",
    "options": [
      "Wind, solar, biofuels",
      "Nuclear, geothermal, tidal",
      "Hydroelectric, waves, coal",
      "Oil, natural gas, wind"
    ],
    "correctIndex": 1,
    "explanation": "Nuclear (fissionable isotopes), geothermal (Earth’s core), and tidal (Moon’s gravity) do not come from the Sun."
  },
  {
    "id": "igcse-phys-q-1-4-2",
    "subtopicId": "igcse-phys-1-4",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A motor uses 800 J of electrical energy to do 600 J of useful mechanical work. Calculate its percentage efficiency.",
    "explanation": "(600 ÷ 800) × 100% = 75%.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Efficiency = (600 / 800) × 100% = 75%.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "600"
            ],
            [
              "800"
            ]
          ],
          "markDescription": "Divides useful 600 by total 800"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 75,
            "tolerance": 0.1
          },
          "markDescription": "75%"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-1-4-3",
    "subtopicId": "igcse-phys-1-4",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the mechanical energy formulae:",
    "segments": [
      "Kinetic energy is E_k = ½m",
      ", and work done is W = ",
      " × d."
    ],
    "wordBank": [
      "v²",
      "F",
      "v",
      "P"
    ],
    "answers": [
      "v²",
      "F"
    ],
    "explanation": "E_k = ½mv² and W = Fd."
  },
  {
    "id": "igcse-phys-q-1-4-4",
    "subtopicId": "igcse-phys-1-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "A 4 kg object moves at 5 m/s. What is its kinetic energy?",
    "options": [
      "10 J",
      "20 J",
      "50 J",
      "100 J"
    ],
    "correctIndex": 2,
    "explanation": "E_k = ½ × 4 × 5² = 2 × 25 = 50 J."
  },
  {
    "id": "igcse-phys-q-1-4-5",
    "subtopicId": "igcse-phys-1-4",
    "type": "mcq",
    "marks": 1,
    "prompt": "A lift does 15,000 J of work in 10 s. What is its useful power output?",
    "options": [
      "150 W",
      "1,500 W",
      "150,000 W",
      "1.5 W"
    ],
    "correctIndex": 1,
    "explanation": "P = W / t = 15,000 ÷ 10 = 1,500 W."
  },
  {
    "id": "igcse-phys-q-2-1-1",
    "subtopicId": "igcse-phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is 27 °C on the Kelvin temperature scale?",
    "options": [
      "−246 K",
      "246 K",
      "300 K",
      "273 K"
    ],
    "correctIndex": 2,
    "explanation": "T(K) = 27 + 273 = 300 K."
  },
  {
    "id": "igcse-phys-q-2-1-2",
    "subtopicId": "igcse-phys-2-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A fixed mass of gas has pressure 120 kPa and volume 500 cm³. It is compressed at constant temperature to 200 cm³. Calculate the new pressure.",
    "explanation": "120 × 500 ÷ 200 = 300 kPa.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "p₁V₁ = p₂V₂ → p₂ = (120 × 500) / 200 = 300 kPa.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "60000",
              "120",
              "200"
            ]
          ],
          "markDescription": "Applies p₁V₁ = p₂V₂"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 300,
            "tolerance": 0.5
          },
          "markDescription": "300 kPa"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-2-1-3",
    "subtopicId": "igcse-phys-2-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the explanation of Brownian motion:",
    "segments": [
      "Smoke particles move randomly because they are bombarded unevenly by much smaller, fast-moving ",
      " molecules, and absolute zero equals ",
      " °C."
    ],
    "wordBank": [
      "air",
      "−273",
      "smoke",
      "0"
    ],
    "answers": [
      "air",
      "−273"
    ],
    "explanation": "Invisible air molecules bombard larger visible smoke particles; 0 K = −273 °C."
  },
  {
    "id": "igcse-phys-q-2-1-4",
    "subtopicId": "igcse-phys-2-1",
    "type": "multi-select",
    "marks": 2,
    "prompt": "When a gas in a rigid sealed tank is heated, select the TWO changes that raise its pressure:",
    "options": [
      "Molecules hit the walls more frequently",
      "Molecules hit the walls harder (greater momentum change)",
      "The mass of each molecule increases",
      "The number of molecules increases"
    ],
    "selectCount": 2,
    "correctIndices": [
      0,
      1
    ],
    "explanation": "Faster molecules collide both harder and more often with the container walls."
  },
  {
    "id": "igcse-phys-q-2-1-5",
    "subtopicId": "igcse-phys-2-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which state of matter expands the MOST for a given temperature rise?",
    "options": [
      "Solid",
      "Liquid",
      "Gas",
      "All expand equally"
    ],
    "correctIndex": 2,
    "explanation": "Gases have negligible intermolecular forces, so they expand far more than liquids or solids."
  },
  {
    "id": "igcse-phys-q-2-2-1",
    "subtopicId": "igcse-phys-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which surface is the BEST emitter and BEST absorber of infrared radiation?",
    "options": [
      "Shiny white",
      "Shiny silver",
      "Matte black",
      "Glossy white"
    ],
    "correctIndex": 2,
    "explanation": "Dull (matte) black surfaces absorb and emit infrared radiation most rapidly."
  },
  {
    "id": "igcse-phys-q-2-2-2",
    "subtopicId": "igcse-phys-2-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Calculate the thermal energy required to heat 2 kg of water (c = 4200 J/(kg °C)) by 10 °C.",
    "explanation": "2 × 4200 × 10 = 84,000 J.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "ΔE = mcΔθ = 2 × 4200 × 10 = 84,000 J (84 kJ).",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "4200",
              "mc"
            ]
          ],
          "markDescription": "Uses mcΔθ"
        },
        {
          "id": "mp2",
          "requiredKeywordGroups": [
            [
              "84000",
              "84,000",
              "84 kj",
              "84kj"
            ]
          ],
          "markDescription": "84000 J or 84 kJ"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-2-2-3",
    "subtopicId": "igcse-phys-2-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the convection explanation:",
    "segments": [
      "When water at the bottom of a pan is heated, it expands, becomes ",
      " dense, and rises; metals conduct heat quickly using ",
      " electrons."
    ],
    "wordBank": [
      "less",
      "delocalised",
      "more",
      "fixed"
    ],
    "answers": [
      "less",
      "delocalised"
    ],
    "explanation": "Warm fluid becomes less dense and rises; free/delocalised electrons speed conduction in metals."
  },
  {
    "id": "igcse-phys-q-2-2-4",
    "subtopicId": "igcse-phys-2-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does evaporation cool the remaining liquid?",
    "options": [
      "Slowest molecules escape first",
      "Most energetic molecules escape, lowering the average kinetic energy of those left behind",
      "Water gains latent heat from the air",
      "Density increases rapidly"
    ],
    "correctIndex": 1,
    "explanation": "Fastest molecules escape from the surface, reducing average KE (and temperature) of the rest."
  },
  {
    "id": "igcse-phys-q-2-2-5",
    "subtopicId": "igcse-phys-2-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each vacuum flask feature to the transfer method it stops:",
    "pairs": [
      {
        "left": "Vacuum gap",
        "right": "Conduction and convection"
      },
      {
        "left": "Silvered inner walls",
        "right": "Infrared radiation"
      },
      {
        "left": "Plastic stopper",
        "right": "Evaporation and convection"
      },
      {
        "left": "Insulating foam support",
        "right": "Conduction to outer case"
      }
    ],
    "explanation": "Each vacuum flask feature targets specific thermal transfer mechanisms."
  },
  {
    "id": "igcse-phys-q-3-1-1",
    "subtopicId": "igcse-phys-3-1",
    "type": "diagram-label",
    "marks": 2,
    "prompt": "Identify the labelled quantities on a transverse wave:",
    "diagram": "transverse-wave",
    "labels": [
      {
        "marker": "Crest to crest distance",
        "options": [
          "Wavelength λ",
          "Amplitude",
          "Frequency"
        ],
        "answer": "Wavelength λ"
      },
      {
        "marker": "Rest position to crest",
        "options": [
          "Amplitude",
          "Wavelength λ",
          "Period"
        ],
        "answer": "Amplitude"
      }
    ],
    "explanation": "Wavelength is horizontal crest-to-crest; amplitude is vertical rest-to-crest."
  },
  {
    "id": "igcse-phys-q-3-1-2",
    "subtopicId": "igcse-phys-3-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A wave has frequency 25 Hz and wavelength 0.4 m. Calculate its speed.",
    "explanation": "v = 25 × 0.4 = 10 m/s.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "v = fλ = 25 × 0.4 = 10 m/s.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "25"
            ],
            [
              "0.4"
            ]
          ],
          "markDescription": "Uses v = fλ"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 10,
            "tolerance": 0.05
          },
          "markDescription": "10 m/s"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-3-1-3",
    "subtopicId": "igcse-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "When water waves travel from deep water into shallow water, what happens to their speed, wavelength, and frequency?",
    "options": [
      "All three decrease",
      "Speed and wavelength decrease; frequency stays constant",
      "Speed decreases; wavelength increases; frequency constant",
      "Frequency decreases; speed stays constant"
    ],
    "correctIndex": 1,
    "explanation": "Frequency never changes across a boundary; slower speed means shorter wavelength."
  },
  {
    "id": "igcse-phys-q-3-1-4",
    "subtopicId": "igcse-phys-3-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the diffraction and oscillation facts:",
    "segments": [
      "Maximum diffraction occurs when the gap width is approximately equal to the ",
      ", and longitudinal waves oscillate ",
      " to energy transfer."
    ],
    "wordBank": [
      "wavelength",
      "parallel",
      "amplitude",
      "perpendicular"
    ],
    "answers": [
      "wavelength",
      "parallel"
    ],
    "explanation": "Gap ≈ λ maximises diffraction; longitudinal waves vibrate parallel to travel."
  },
  {
    "id": "igcse-phys-q-3-1-5",
    "subtopicId": "igcse-phys-3-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which of these is a LONGITUDINAL wave?",
    "options": [
      "Microwaves",
      "Light waves",
      "Sound waves",
      "Water surface ripples"
    ],
    "correctIndex": 2,
    "explanation": "Sound waves are longitudinal compressions and rarefactions; all EM waves and water ripples are transverse."
  },
  {
    "id": "igcse-phys-q-3-2-1",
    "subtopicId": "igcse-phys-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the speed of all electromagnetic waves in a vacuum?",
    "options": [
      "340 m/s",
      "3.0 × 10⁶ m/s",
      "3.0 × 10⁸ m/s",
      "3.0 × 10¹⁰ m/s"
    ],
    "correctIndex": 2,
    "explanation": "All EM waves travel at c = 3.0 × 10⁸ m/s in a vacuum."
  },
  {
    "id": "igcse-phys-q-3-2-2",
    "subtopicId": "igcse-phys-3-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State the TWO conditions required for total internal reflection (TIR) of light.",
    "explanation": "Both medium direction (denser → less dense) and i > c are essential.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1) Light must travel from a denser medium towards a less dense medium, and 2) the angle of incidence must be greater than the critical angle (i > c).",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "denser",
              "more dense"
            ],
            [
              "less dense",
              "air"
            ]
          ],
          "markDescription": "Denser to less dense medium"
        },
        {
          "id": "mp2",
          "requiredKeywordGroups": [
            [
              "greater",
              "bigger",
              "exceeds",
              ">"
            ],
            [
              "critical"
            ]
          ],
          "markDescription": "Angle of incidence > critical angle"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-3-2-3",
    "subtopicId": "igcse-phys-3-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the vision-correction rules:",
    "segments": [
      "Short-sightedness is corrected using a ",
      " lens, while long-sightedness is corrected using a ",
      " lens."
    ],
    "wordBank": [
      "diverging",
      "converging",
      "plane",
      "prism"
    ],
    "answers": [
      "diverging",
      "converging"
    ],
    "explanation": "Concave (diverging) lenses spread rays for myopia; convex (converging) lenses focus rays for hyperopia."
  },
  {
    "id": "igcse-phys-q-3-2-4",
    "subtopicId": "igcse-phys-3-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which EM region has the HIGHEST frequency and photon energy?",
    "options": [
      "Radio waves",
      "Ultraviolet",
      "X-rays",
      "Gamma rays"
    ],
    "correctIndex": 3,
    "explanation": "Gamma rays sit at the highest-frequency, shortest-wavelength end of the EM spectrum."
  },
  {
    "id": "igcse-phys-q-3-2-5",
    "subtopicId": "igcse-phys-3-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each EM wave to its primary use:",
    "pairs": [
      {
        "left": "Microwaves",
        "right": "Satellite TV & mobile phones"
      },
      {
        "left": "Infrared",
        "right": "Thermal imaging & optical fibres"
      },
      {
        "left": "X-rays",
        "right": "Hospital bone imaging"
      },
      {
        "left": "Gamma rays",
        "right": "Sterilising surgical equipment"
      }
    ],
    "explanation": "Classic Cambridge 0625 EM wave uses."
  },
  {
    "id": "igcse-phys-q-3-3-1",
    "subtopicId": "igcse-phys-3-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A student claps 170 m from a cliff and hears the echo 1.0 s later. Calculate the speed of sound in air.",
    "explanation": "Sound travels 170 m there and 170 m back = 340 m in 1.0 s → 340 m/s.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Total round-trip distance = 2 × 170 = 340 m; v = 340 / 1.0 = 340 m/s.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "340",
              "2 × 170",
              "2*170"
            ]
          ],
          "markDescription": "Uses round-trip 340 m"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 340,
            "tolerance": 1
          },
          "markDescription": "340 m/s"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-3-3-2",
    "subtopicId": "igcse-phys-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the approximate frequency range of healthy human hearing?",
    "options": [
      "2 Hz to 2,000 Hz",
      "20 Hz to 20,000 Hz",
      "200 Hz to 200,000 Hz",
      "1 Hz to 10,000 Hz"
    ],
    "correctIndex": 1,
    "explanation": "Humans hear roughly 20 Hz to 20 kHz; ultrasound is > 20 kHz."
  },
  {
    "id": "igcse-phys-q-3-3-3",
    "subtopicId": "igcse-phys-3-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the sound-wave relationships:",
    "segments": [
      "Increasing frequency produces a higher ",
      ", while increasing ",
      " produces a louder sound."
    ],
    "wordBank": [
      "pitch",
      "amplitude",
      "wavelength",
      "speed"
    ],
    "answers": [
      "pitch",
      "amplitude"
    ],
    "explanation": "Frequency ↔ pitch; Amplitude ↔ loudness."
  },
  {
    "id": "igcse-phys-q-3-3-4",
    "subtopicId": "igcse-phys-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is ultrasound preferred over X-rays for prenatal baby scans?",
    "options": [
      "Ultrasound travels faster than light",
      "Ultrasound is non-ionising and does not damage fetal cells/DNA",
      "X-rays cannot pass through water",
      "Ultrasound has higher frequency than X-rays"
    ],
    "correctIndex": 1,
    "explanation": "Ultrasound is a non-ionising mechanical wave, whereas X-rays are ionising."
  },
  {
    "id": "igcse-phys-q-3-3-5",
    "subtopicId": "igcse-phys-3-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In which medium does sound travel FASTEST?",
    "options": [
      "Vacuum",
      "Air",
      "Water",
      "Steel"
    ],
    "correctIndex": 3,
    "explanation": "Closely packed, strongly bonded particles in solids (steel) transmit vibrations fastest."
  },
  {
    "id": "igcse-phys-q-4-1-1",
    "subtopicId": "igcse-phys-4-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A current of 2.5 A flows through a lamp for 40 s. Calculate the total charge that passes through the lamp.",
    "explanation": "Q = 2.5 × 40 = 100 C.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "Q = It = 2.5 × 40 = 100 C.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "2.5"
            ],
            [
              "40"
            ]
          ],
          "markDescription": "Uses Q = It"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 100,
            "tolerance": 0.1
          },
          "markDescription": "100 C"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-4-1-2",
    "subtopicId": "igcse-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "A copper wire has resistance 8 Ω. A second copper wire of the SAME length has TWICE the cross-sectional area. What is its resistance?",
    "options": [
      "16 Ω",
      "4 Ω",
      "2 Ω",
      "8 Ω"
    ],
    "correctIndex": 1,
    "explanation": "R ∝ 1/A, so doubling cross-sectional area halves resistance to 4 Ω."
  },
  {
    "id": "igcse-phys-q-4-1-3",
    "subtopicId": "igcse-phys-4-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the circuit-meter rules:",
    "segments": [
      "An ammeter is always connected in ",
      ", while a voltmeter is always connected in ",
      " across a component."
    ],
    "wordBank": [
      "series",
      "parallel",
      "reverse",
      "earth"
    ],
    "answers": [
      "series",
      "parallel"
    ],
    "explanation": "Ammeters measure through-current in series; voltmeters measure p.d. across in parallel."
  },
  {
    "id": "igcse-phys-q-4-1-4",
    "subtopicId": "igcse-phys-4-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does the I–V graph of a filament lamp curve and flatten at higher voltages?",
    "options": [
      "Its resistance decreases as it cools",
      "Higher current heats the filament, increasing its resistance",
      "Electrons stop flowing",
      "Voltage becomes negative"
    ],
    "correctIndex": 1,
    "explanation": "Hotter metal ions vibrate more vigorously, obstructing electrons and raising resistance."
  },
  {
    "id": "igcse-phys-q-4-1-5",
    "subtopicId": "igcse-phys-4-1",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each electrical formula to its quantity:",
    "pairs": [
      {
        "left": "Charge Q",
        "right": "I × t"
      },
      {
        "left": "Potential difference V",
        "right": "I × R"
      },
      {
        "left": "Electrical power P",
        "right": "I × V"
      },
      {
        "left": "Electrical energy E",
        "right": "I × V × t"
      }
    ],
    "explanation": "Essential electricity equations for Cambridge 0625."
  },
  {
    "id": "igcse-phys-q-4-2-1",
    "subtopicId": "igcse-phys-4-2",
    "type": "diagram-label",
    "marks": 2,
    "prompt": "Identify the rules for series and parallel circuits:",
    "diagram": "circuit-series-parallel",
    "labels": [
      {
        "marker": "Series loop",
        "options": [
          "Same current everywhere",
          "Same voltage everywhere",
          "Lower total resistance"
        ],
        "answer": "Same current everywhere"
      },
      {
        "marker": "Parallel branches",
        "options": [
          "Each branch gets full supply p.d.",
          "Total resistance = R₁ + R₂",
          "Current stops if one bulb breaks"
        ],
        "answer": "Each branch gets full supply p.d."
      }
    ],
    "explanation": "Series shares voltage with equal current; parallel shares current with equal branch voltage."
  },
  {
    "id": "igcse-phys-q-4-2-2",
    "subtopicId": "igcse-phys-4-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "Calculate the combined resistance of a 12 Ω resistor and a 4 Ω resistor connected in parallel.",
    "explanation": "(12 × 4) / (12 + 4) = 48 / 16 = 3 Ω.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1/R = 1/12 + 1/4 = 4/12 = 1/3, so R = 3 Ω.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "1/12",
              "1/3",
              "48/16",
              "12 × 4"
            ]
          ],
          "markDescription": "Uses parallel formula"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 3,
            "tolerance": 0.05
          },
          "markDescription": "3 Ω"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-4-2-3",
    "subtopicId": "igcse-phys-4-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the sensor and mains-safety rules:",
    "segments": [
      "As light intensity increases, the resistance of an LDR ",
      ", and fuses must always be wired into the ",
      " wire."
    ],
    "wordBank": [
      "decreases",
      "live",
      "increases",
      "neutral"
    ],
    "answers": [
      "decreases",
      "live"
    ],
    "explanation": "Brighter light lowers LDR resistance; fuses disconnect the high-voltage live wire."
  },
  {
    "id": "igcse-phys-q-4-2-4",
    "subtopicId": "igcse-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why does a double-insulated appliance with a plastic casing NOT need an earth wire?",
    "options": [
      "It uses D.C. only",
      "Its outer plastic casing is an insulator and cannot become live",
      "It has zero resistance",
      "It has no live wire"
    ],
    "correctIndex": 1,
    "explanation": "No exposed metal parts can become live, preventing electric shock on contact."
  },
  {
    "id": "igcse-phys-q-4-2-5",
    "subtopicId": "igcse-phys-4-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "A 10 Ω resistor and a 30 Ω resistor are in series across a 12 V battery. What is the p.d. across the 30 Ω resistor?",
    "options": [
      "3 V",
      "6 V",
      "9 V",
      "12 V"
    ],
    "correctIndex": 2,
    "explanation": "V = 12 × (30 / (10 + 30)) = 12 × 3/4 = 9 V."
  },
  {
    "id": "igcse-phys-q-4-3-1",
    "subtopicId": "igcse-phys-4-3",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A transformer has 500 primary turns and 2,500 secondary turns. If the primary input is 12 V a.c., calculate the secondary output voltage.",
    "explanation": "V_s / 12 = 2500 / 500 → V_s = 60 V.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "V_s = 12 × (2500 / 500) = 12 × 5 = 60 V.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "2500",
              "500",
              "5"
            ]
          ],
          "markDescription": "Turns ratio 5"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 60,
            "tolerance": 0.1
          },
          "markDescription": "60 V"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-4-3-2",
    "subtopicId": "igcse-phys-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is electrical power transmitted across national grid cables at very high voltage?",
    "options": [
      "To increase current in the cables",
      "To reduce current and therefore cut I²R thermal energy losses",
      "To make transformers work on D.C.",
      "To increase cable resistance"
    ],
    "correctIndex": 1,
    "explanation": "High voltage means low current for the same power, drastically slashing P = I²R heating."
  },
  {
    "id": "igcse-phys-q-4-3-3",
    "subtopicId": "igcse-phys-4-3",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the motor and transformer rules:",
    "segments": [
      "A DC motor uses a ",
      " commutator to reverse coil current every half-turn, and a transformer core is made of ",
      " iron."
    ],
    "wordBank": [
      "split-ring",
      "soft",
      "slip-ring",
      "hard"
    ],
    "answers": [
      "split-ring",
      "soft"
    ],
    "explanation": "Split-ring commutator keeps DC rotation one-way; soft iron magnetises/demagnetises easily."
  },
  {
    "id": "igcse-phys-q-4-3-4",
    "subtopicId": "igcse-phys-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Fleming’s Left-Hand Rule, what does the THUMB represent?",
    "options": [
      "Magnetic field direction",
      "Conventional current direction",
      "Force / motion direction",
      "Induced voltage"
    ],
    "correctIndex": 2,
    "explanation": "Thumb = Motion/Force, First finger = Field, Second finger = Current."
  },
  {
    "id": "igcse-phys-q-4-3-5",
    "subtopicId": "igcse-phys-4-3",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why will a transformer NOT output a steady voltage if connected to a D.C. battery?",
    "options": [
      "Iron blocks D.C.",
      "A steady D.C. produces a constant magnetic field with no changing flux to induce EMF",
      "Secondary coils only conduct A.C.",
      "D.C. melts the insulation"
    ],
    "correctIndex": 1,
    "explanation": "Electromagnetic induction requires a CHANGING magnetic field."
  },
  {
    "id": "igcse-phys-q-5-1-1",
    "subtopicId": "igcse-phys-5-1",
    "type": "diagram-label",
    "marks": 2,
    "prompt": "Identify the atomic components in the nuclear model:",
    "diagram": "atomic-structure",
    "labels": [
      {
        "marker": "Central dense core",
        "options": [
          "Nucleus (protons + neutrons)",
          "Electron shell",
          "Alpha beam"
        ],
        "answer": "Nucleus (protons + neutrons)"
      },
      {
        "marker": "Orbiting negatively charged particles",
        "options": [
          "Electrons",
          "Neutrons",
          "Protons"
        ],
        "answer": "Electrons"
      }
    ],
    "explanation": "Protons and neutrons form the dense central nucleus; electrons orbit around it."
  },
  {
    "id": "igcse-phys-q-5-1-2",
    "subtopicId": "igcse-phys-5-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "How many protons and neutrons are in a nucleus of uranium-235 (²³⁵₉₂U)?",
    "explanation": "Z = 92 protons; neutrons = A − Z = 235 − 92 = 143.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "92 protons and 235 − 92 = 143 neutrons.",
      "markPoints": [
        {
          "id": "mp1",
          "numericMatch": {
            "value": 92,
            "tolerance": 0.01
          },
          "markDescription": "92 protons"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 143,
            "tolerance": 0.01
          },
          "markDescription": "143 neutrons"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-5-1-3",
    "subtopicId": "igcse-phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "In Rutherford’s gold-foil experiment, why did the vast majority of alpha particles pass straight through?",
    "options": [
      "Gold has no electrons",
      "Atoms are mostly empty space",
      "Alpha particles are neutral",
      "Gold nuclei are negatively charged"
    ],
    "correctIndex": 1,
    "explanation": "Most alpha particles never encountered the tiny central nucleus."
  },
  {
    "id": "igcse-phys-q-5-1-4",
    "subtopicId": "igcse-phys-5-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the fission vs fusion comparison:",
    "segments": [
      "Nuclear ",
      " splits a heavy nucleus like U-235, whereas nuclear ",
      " joins light hydrogen nuclei inside stars."
    ],
    "wordBank": [
      "fission",
      "fusion",
      "ionisation",
      "conduction"
    ],
    "answers": [
      "fission",
      "fusion"
    ],
    "explanation": "Fission splits heavy nuclei; fusion joins light nuclei."
  },
  {
    "id": "igcse-phys-q-5-1-5",
    "subtopicId": "igcse-phys-5-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the definition of ISOTOPES?",
    "options": [
      "Same neutrons, different protons",
      "Same protons, different neutrons",
      "Same electrons, different charge",
      "Same mass number, different elements"
    ],
    "correctIndex": 1,
    "explanation": "Isotopes are atoms of the same element (same Z) with different neutron counts (different A)."
  },
  {
    "id": "igcse-phys-q-5-2-1",
    "subtopicId": "igcse-phys-5-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A radioactive isotope has a half-life of 4 hours and an initial corrected activity of 640 Bq. What is its activity after 12 hours?",
    "explanation": "640 ÷ 2³ = 80 Bq.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "12 ÷ 4 = 3 half-lives: 640 → 320 → 160 → 80 Bq.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "3",
              "three",
              "160",
              "320"
            ]
          ],
          "markDescription": "3 half-lives"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 80,
            "tolerance": 0.1
          },
          "markDescription": "80 Bq"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-5-2-2",
    "subtopicId": "igcse-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "When a nucleus emits a beta-minus (β⁻) particle, what happens to its mass number A and proton number Z?",
    "options": [
      "A decreases by 4, Z decreases by 2",
      "A stays the same, Z increases by 1",
      "A stays the same, Z decreases by 1",
      "Both stay the same"
    ],
    "correctIndex": 1,
    "explanation": "A neutron turns into a proton + electron, so A is unchanged and Z increases by 1."
  },
  {
    "id": "igcse-phys-q-5-2-3",
    "subtopicId": "igcse-phys-5-2",
    "type": "matching",
    "marks": 2,
    "prompt": "Match each radiation type to its absorber:",
    "pairs": [
      {
        "left": "Alpha (α)",
        "right": "Sheet of paper or ~5 cm air"
      },
      {
        "left": "Beta (β⁻)",
        "right": "Few mm of aluminium"
      },
      {
        "left": "Gamma (γ)",
        "right": "Thick lead or thick concrete"
      },
      {
        "left": "Medical tracer",
        "right": "Short half-life gamma emitter"
      }
    ],
    "explanation": "Penetrating power rises from α → β → γ as ionising power falls."
  },
  {
    "id": "igcse-phys-q-5-2-4",
    "subtopicId": "igcse-phys-5-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the half-life lab procedure:",
    "segments": [
      "Before calculating half-life from GM-tube readings, always subtract ",
      " radiation first; radioactive decay is random and ",
      "."
    ],
    "wordBank": [
      "background",
      "spontaneous",
      "thermal",
      "predictable"
    ],
    "answers": [
      "background",
      "spontaneous"
    ],
    "explanation": "Always remove background count rate first; decay cannot be sped up by heat or chemistry."
  },
  {
    "id": "igcse-phys-q-5-2-5",
    "subtopicId": "igcse-phys-5-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which radiation is NOT deflected by an electric or magnetic field?",
    "options": [
      "Alpha",
      "Beta",
      "Gamma",
      "All are deflected"
    ],
    "correctIndex": 2,
    "explanation": "Gamma rays are uncharged electromagnetic waves."
  },
  {
    "id": "igcse-phys-q-6-1-1",
    "subtopicId": "igcse-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "What is the primary cause of Earth’s seasons?",
    "options": [
      "Earth’s changing distance from the Sun",
      "Earth’s 23.5° axial tilt as it orbits the Sun",
      "The Moon’s gravity",
      "Solar flares"
    ],
    "correctIndex": 1,
    "explanation": "Axial tilt alters day length and angle of sunlight hitting each hemisphere."
  },
  {
    "id": "igcse-phys-q-6-1-2",
    "subtopicId": "igcse-phys-6-1",
    "type": "short-answer",
    "marks": 2,
    "prompt": "A satellite orbits at radius r = 7.0 × 10⁶ m with orbital period T = 5,800 s. Calculate its orbital speed to 2 significant figures.",
    "explanation": "2 × π × 7.0 × 10⁶ ÷ 5800 ≈ 7,580 m/s.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "v = 2πr / T = (2π × 7.0 × 10⁶) / 5800 = 7,580 m/s ≈ 7,600 m/s.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "2π",
              "2pi",
              "4.4",
              "4398"
            ]
          ],
          "markDescription": "Applies v = 2πr / T"
        },
        {
          "id": "mp2",
          "numericMatch": {
            "value": 7583,
            "tolerance": 120
          },
          "markDescription": "7580–7600 m/s"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-6-1-3",
    "subtopicId": "igcse-phys-6-1",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the Solar System facts:",
    "segments": [
      "The four inner planets are small and ",
      ", and a comet travels ",
      " when it is closest to the Sun."
    ],
    "wordBank": [
      "rocky",
      "fastest",
      "gaseous",
      "slowest"
    ],
    "answers": [
      "rocky",
      "fastest"
    ],
    "explanation": "Inner planets condensed from rock/metal; comets speed up as GPE converts to KE near the Sun."
  },
  {
    "id": "igcse-phys-q-6-1-4",
    "subtopicId": "igcse-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "As you move to planets further from the Sun, what happens to orbital speed and orbital period?",
    "options": [
      "Speed increases, period decreases",
      "Speed decreases, period increases",
      "Both increase",
      "Both decrease"
    ],
    "correctIndex": 1,
    "explanation": "Weaker solar gravity gives slower orbital speeds over much larger circumferences."
  },
  {
    "id": "igcse-phys-q-6-1-5",
    "subtopicId": "igcse-phys-6-1",
    "type": "mcq",
    "marks": 1,
    "prompt": "Which planet lies directly beyond the Asteroid Belt?",
    "options": [
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus"
    ],
    "correctIndex": 1,
    "explanation": "The Asteroid Belt sits between Mars and Jupiter."
  },
  {
    "id": "igcse-phys-q-6-2-1",
    "subtopicId": "igcse-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "What quantity is measured by a LIGHT-YEAR?",
    "options": [
      "Time",
      "Speed",
      "Distance",
      "Luminosity"
    ],
    "correctIndex": 2,
    "explanation": "A light-year is the DISTANCE light travels in a vacuum in one year (≈ 9.5 × 10¹⁵ m)."
  },
  {
    "id": "igcse-phys-q-6-2-2",
    "subtopicId": "igcse-phys-6-2",
    "type": "short-answer",
    "marks": 2,
    "prompt": "State the TWO main pieces of observational evidence supporting the Big Bang theory.",
    "explanation": "Red-shift proves expansion; CMBR is the stretched thermal afterglow of the hot early Universe.",
    "rubric": {
      "maxMarks": 2,
      "modelAnswer": "1) Cosmological red-shift of light from distant galaxies (showing space is expanding) and 2) Cosmic Microwave Background Radiation (CMBR) arriving uniformly from all directions.",
      "markPoints": [
        {
          "id": "mp1",
          "requiredKeywordGroups": [
            [
              "red-shift",
              "redshift",
              "red shift"
            ]
          ],
          "markDescription": "Red-shift of distant galaxies"
        },
        {
          "id": "mp2",
          "requiredKeywordGroups": [
            [
              "cmbr",
              "cosmic microwave",
              "microwave background"
            ]
          ],
          "markDescription": "CMBR / Cosmic Microwave Background"
        }
      ]
    }
  },
  {
    "id": "igcse-phys-q-6-2-3",
    "subtopicId": "igcse-phys-6-2",
    "type": "fill-blank",
    "marks": 2,
    "prompt": "Complete the star-evolution stages:",
    "segments": [
      "A Sun-like star becomes a red giant and then a ",
      ", whereas elements heavier than iron are created in a ",
      "."
    ],
    "wordBank": [
      "white dwarf",
      "supernova",
      "black hole",
      "protostar"
    ],
    "answers": [
      "white dwarf",
      "supernova"
    ],
    "explanation": "Low-mass stars end as white dwarfs; massive stars explode as supernovae creating heavy elements."
  },
  {
    "id": "igcse-phys-q-6-2-4",
    "subtopicId": "igcse-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Using Hubble’s Law H₀ = v / d, which expression estimates the age of the Universe?",
    "options": [
      "H₀",
      "1 / H₀",
      "H₀²",
      "v × d"
    ],
    "correctIndex": 1,
    "explanation": "Time t = d / v = 1 / H₀ ≈ 4.5 × 10¹⁷ s (≈ 14 billion years)."
  },
  {
    "id": "igcse-phys-q-6-2-5",
    "subtopicId": "igcse-phys-6-2",
    "type": "mcq",
    "marks": 1,
    "prompt": "Why is a main-sequence star stable in size for billions of years?",
    "options": [
      "It has no gravity",
      "Inward gravitational pull balances outward radiation pressure from nuclear fusion",
      "Hydrogen stops fusing",
      "It rotates very slowly"
    ],
    "correctIndex": 1,
    "explanation": "Equilibrium between inward gravity and outward thermal/radiation pressure maintains a stable radius."
  }
];

export const IGCSE_PHYSICS_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "igcse-phys-fc-1-1-1",
    "subtopicId": "igcse-phys-1-1",
    "front": "Difference between a scalar and a vector?",
    "backBullets": [
      "Scalar = magnitude only (speed, mass); Vector = magnitude + direction (velocity, force, momentum)."
    ]
  },
  {
    "id": "igcse-phys-fc-1-1-2",
    "subtopicId": "igcse-phys-1-1",
    "front": "What do gradient and area represent on a speed-time graph?",
    "backBullets": [
      "Gradient = acceleration; Area under graph = distance travelled."
    ]
  },
  {
    "id": "igcse-phys-fc-1-1-3",
    "subtopicId": "igcse-phys-1-1",
    "front": "Equation for uniform acceleration?",
    "backBullets": [
      "a = (v − u) / t (unit: m/s²)."
    ]
  },
  {
    "id": "igcse-phys-fc-1-1-4",
    "subtopicId": "igcse-phys-1-1",
    "front": "Why do you time 20 oscillations of a pendulum instead of 1?",
    "backBullets": [
      "Reduces percentage uncertainty caused by human reaction time."
    ]
  },
  {
    "id": "igcse-phys-fc-1-1-5",
    "subtopicId": "igcse-phys-1-1",
    "front": "Condition for terminal velocity?",
    "backBullets": [
      "Upward air resistance = downward weight → resultant force = 0 → constant velocity."
    ]
  },
  {
    "id": "igcse-phys-fc-1-2-1",
    "subtopicId": "igcse-phys-1-2",
    "front": "Equation linking weight, mass, and g?",
    "backBullets": [
      "W = mg (g ≈ 9.8 N/kg on Earth)."
    ]
  },
  {
    "id": "igcse-phys-fc-1-2-2",
    "subtopicId": "igcse-phys-1-2",
    "front": "Density equation and floating condition?",
    "backBullets": [
      "ρ = m / V; object floats if its density < density of the liquid."
    ]
  },
  {
    "id": "igcse-phys-fc-1-2-3",
    "subtopicId": "igcse-phys-1-2",
    "front": "Newton’s Second Law equation?",
    "backBullets": [
      "F = ma (F must be the RESULTANT force)."
    ]
  },
  {
    "id": "igcse-phys-fc-1-2-4",
    "subtopicId": "igcse-phys-1-2",
    "front": "Hooke’s Law equation and meaning of x?",
    "backBullets": [
      "F = kx, where x is extension (stretched length − original length) up to the limit of proportionality."
    ]
  },
  {
    "id": "igcse-phys-fc-1-2-5",
    "subtopicId": "igcse-phys-1-2",
    "front": "Direction of centripetal force in circular motion?",
    "backBullets": [
      "Always towards the centre of the circle, perpendicular to velocity."
    ]
  },
  {
    "id": "igcse-phys-fc-1-3-1",
    "subtopicId": "igcse-phys-1-3",
    "front": "Two conditions for an object to be in equilibrium?",
    "backBullets": [
      "1) Zero resultant force AND 2) Total clockwise moment = Total anticlockwise moment."
    ]
  },
  {
    "id": "igcse-phys-fc-1-3-2",
    "subtopicId": "igcse-phys-1-3",
    "front": "Momentum and Impulse equations?",
    "backBullets": [
      "p = mv; Impulse = FΔt = Δp = mv − mu."
    ]
  },
  {
    "id": "igcse-phys-fc-1-3-3",
    "subtopicId": "igcse-phys-1-3",
    "front": "How do crumple zones and airbags reduce force?",
    "backBullets": [
      "Increase impact time Δt for the same Δp, reducing force F = Δp / Δt."
    ]
  },
  {
    "id": "igcse-phys-fc-1-3-4",
    "subtopicId": "igcse-phys-1-3",
    "front": "Formula for pressure beneath a liquid surface?",
    "backBullets": [
      "Δp = ρgΔh (depends only on density, g, and vertical depth)."
    ]
  },
  {
    "id": "igcse-phys-fc-1-3-5",
    "subtopicId": "igcse-phys-1-3",
    "front": "Two ways to make an object more stable?",
    "backBullets": [
      "Lower its centre of gravity and widen its base."
    ]
  },
  {
    "id": "igcse-phys-fc-1-4-1",
    "subtopicId": "igcse-phys-1-4",
    "front": "Formulae for Kinetic Energy and Gravitational Potential Energy?",
    "backBullets": [
      "E_k = ½mv² and ΔE_p = mgΔh."
    ]
  },
  {
    "id": "igcse-phys-fc-1-4-2",
    "subtopicId": "igcse-phys-1-4",
    "front": "Formulae for Work Done and Power?",
    "backBullets": [
      "W = Fd (J); P = W / t = ΔE / t (W)."
    ]
  },
  {
    "id": "igcse-phys-fc-1-4-3",
    "subtopicId": "igcse-phys-1-4",
    "front": "Percentage efficiency equation?",
    "backBullets": [
      "(Useful energy or power output ÷ Total input) × 100%."
    ]
  },
  {
    "id": "igcse-phys-fc-1-4-4",
    "subtopicId": "igcse-phys-1-4",
    "front": "Three energy resources NOT derived from the Sun?",
    "backBullets": [
      "Nuclear, geothermal, and tidal."
    ]
  },
  {
    "id": "igcse-phys-fc-1-4-5",
    "subtopicId": "igcse-phys-1-4",
    "front": "Speed of a frictionless falling object dropped from height h?",
    "backBullets": [
      "mgΔh = ½mv² → v = √(2gh) (independent of mass)."
    ]
  },
  {
    "id": "igcse-phys-fc-2-1-1",
    "subtopicId": "igcse-phys-2-1",
    "front": "What causes Brownian motion of smoke specks?",
    "backBullets": [
      "Uneven, random collisions by much smaller, fast-moving invisible air molecules."
    ]
  },
  {
    "id": "igcse-phys-fc-2-1-2",
    "subtopicId": "igcse-phys-2-1",
    "front": "How do you convert Celsius to Kelvin?",
    "backBullets": [
      "T(K) = θ(°C) + 273 (absolute zero = 0 K = −273 °C)."
    ]
  },
  {
    "id": "igcse-phys-fc-2-1-3",
    "subtopicId": "igcse-phys-2-1",
    "front": "Why does heating a sealed gas raise its pressure?",
    "backBullets": [
      "Molecules move faster, hitting container walls more frequently and harder."
    ]
  },
  {
    "id": "igcse-phys-fc-2-1-4",
    "subtopicId": "igcse-phys-2-1",
    "front": "State Boyle’s Law equation and condition.",
    "backBullets": [
      "p₁V₁ = p₂V₂ for a fixed mass of gas at constant temperature."
    ]
  },
  {
    "id": "igcse-phys-fc-2-1-5",
    "subtopicId": "igcse-phys-2-1",
    "front": "Rank thermal expansion from greatest to least.",
    "backBullets": [
      "Gases > Liquids > Solids."
    ]
  },
  {
    "id": "igcse-phys-fc-2-2-1",
    "subtopicId": "igcse-phys-2-2",
    "front": "Specific heat capacity formula?",
    "backBullets": [
      "ΔE = mcΔθ (c in J / (kg °C))."
    ]
  },
  {
    "id": "igcse-phys-fc-2-2-2",
    "subtopicId": "igcse-phys-2-2",
    "front": "Why does temperature stay constant during melting or boiling?",
    "backBullets": [
      "Supplied energy breaks intermolecular bonds (raises potential energy) rather than increasing kinetic energy."
    ]
  },
  {
    "id": "igcse-phys-fc-2-2-3",
    "subtopicId": "igcse-phys-2-2",
    "front": "Why are metals far better thermal conductors than plastics?",
    "backBullets": [
      "Metals contain delocalised (free) electrons that move rapidly and transfer energy across the lattice."
    ]
  },
  {
    "id": "igcse-phys-fc-2-2-4",
    "subtopicId": "igcse-phys-2-2",
    "front": "Explain how a convection current forms.",
    "backBullets": [
      "Heated fluid expands, becomes less dense, and rises; cooler, denser fluid sinks to replace it."
    ]
  },
  {
    "id": "igcse-phys-fc-2-2-5",
    "subtopicId": "igcse-phys-2-2",
    "front": "Best emitter/absorber vs best reflector of infrared?",
    "backBullets": [
      "Matte black = best emitter & absorber; Shiny silver = best reflector & worst emitter."
    ]
  },
  {
    "id": "igcse-phys-fc-3-1-1",
    "subtopicId": "igcse-phys-3-1",
    "front": "Wave speed equation and frequency–period link?",
    "backBullets": [
      "v = fλ and f = 1 / T."
    ]
  },
  {
    "id": "igcse-phys-fc-3-1-2",
    "subtopicId": "igcse-phys-3-1",
    "front": "Transverse vs longitudinal oscillation direction?",
    "backBullets": [
      "Transverse = perpendicular to energy transfer; Longitudinal = parallel to energy transfer."
    ]
  },
  {
    "id": "igcse-phys-fc-3-1-3",
    "subtopicId": "igcse-phys-3-1",
    "front": "What changes and what stays constant during refraction?",
    "backBullets": [
      "Speed and wavelength change; frequency ALWAYS stays constant."
    ]
  },
  {
    "id": "igcse-phys-fc-3-1-4",
    "subtopicId": "igcse-phys-3-1",
    "front": "Condition for maximum diffraction through a gap?",
    "backBullets": [
      "Gap width ≈ wavelength λ."
    ]
  },
  {
    "id": "igcse-phys-fc-3-1-5",
    "subtopicId": "igcse-phys-3-1",
    "front": "Which way does a wave bend when slowing down?",
    "backBullets": [
      "Towards the normal (Slower Towards, Faster Away)."
    ]
  },
  {
    "id": "igcse-phys-fc-3-2-1",
    "subtopicId": "igcse-phys-3-2",
    "front": "Snell’s Law and critical angle equations?",
    "backBullets": [
      "n = sin i / sin r and sin c = 1 / n."
    ]
  },
  {
    "id": "igcse-phys-fc-3-2-2",
    "subtopicId": "igcse-phys-3-2",
    "front": "Two conditions for Total Internal Reflection (TIR)?",
    "backBullets": [
      "1) Denser → less dense medium AND 2) angle of incidence i > critical angle c."
    ]
  },
  {
    "id": "igcse-phys-fc-3-2-3",
    "subtopicId": "igcse-phys-3-2",
    "front": "Which lens corrects short-sight vs long-sight?",
    "backBullets": [
      "Short-sight (myopia) → diverging (concave); Long-sight (hyperopia) → converging (convex)."
    ]
  },
  {
    "id": "igcse-phys-fc-3-2-4",
    "subtopicId": "igcse-phys-3-2",
    "front": "Order of the EM spectrum from lowest to highest frequency?",
    "backBullets": [
      "Radio, Microwaves, Infrared, Visible, Ultraviolet, X-rays, Gamma rays."
    ]
  },
  {
    "id": "igcse-phys-fc-3-2-5",
    "subtopicId": "igcse-phys-3-2",
    "front": "Real vs virtual image?",
    "backBullets": [
      "Real = rays intersect, can be projected on a screen; Virtual = rays appear to diverge, cannot be caught on a screen."
    ]
  },
  {
    "id": "igcse-phys-fc-3-3-1",
    "subtopicId": "igcse-phys-3-3",
    "front": "Human audible frequency range and ultrasound definition?",
    "backBullets": [
      "Human range: 20 Hz to 20,000 Hz (20 kHz); Ultrasound: > 20,000 Hz."
    ]
  },
  {
    "id": "igcse-phys-fc-3-3-2",
    "subtopicId": "igcse-phys-3-3",
    "front": "Echo / sonar depth formula?",
    "backBullets": [
      "d = (v × t) / 2 (dividing by 2 for the out-and-back journey)."
    ]
  },
  {
    "id": "igcse-phys-fc-3-3-3",
    "subtopicId": "igcse-phys-3-3",
    "front": "Order of sound speed in solids, liquids, and gases?",
    "backBullets": [
      "Solids (~5000 m/s) > Liquids (~1500 m/s) > Gases (~340 m/s); 0 in a vacuum."
    ]
  },
  {
    "id": "igcse-phys-fc-3-3-4",
    "subtopicId": "igcse-phys-3-3",
    "front": "Which wave property controls pitch vs loudness?",
    "backBullets": [
      "Frequency controls pitch; Amplitude controls loudness."
    ]
  },
  {
    "id": "igcse-phys-fc-3-3-5",
    "subtopicId": "igcse-phys-3-3",
    "front": "Why is ultrasound safe for foetal imaging?",
    "backBullets": [
      "It is non-ionising (does not cause DNA mutation like X-rays)."
    ]
  },
  {
    "id": "igcse-phys-fc-4-1-1",
    "subtopicId": "igcse-phys-4-1",
    "front": "Charge, Ohm’s Law, and Electrical Power formulae?",
    "backBullets": [
      "Q = It, V = IR, P = IV = I²R, E = IVt."
    ]
  },
  {
    "id": "igcse-phys-fc-4-1-2",
    "subtopicId": "igcse-phys-4-1",
    "front": "Direction of conventional current vs electron flow?",
    "backBullets": [
      "Conventional current: + to −; Electrons: − to +."
    ]
  },
  {
    "id": "igcse-phys-fc-4-1-3",
    "subtopicId": "igcse-phys-4-1",
    "front": "How does wire resistance depend on length L and area A?",
    "backBullets": [
      "R ∝ L and R ∝ 1/A (longer = higher R; thicker = lower R)."
    ]
  },
  {
    "id": "igcse-phys-fc-4-1-4",
    "subtopicId": "igcse-phys-4-1",
    "front": "Shape of I–V graph for a filament lamp?",
    "backBullets": [
      "S-curve through (0,0) flattening at higher V because heating increases resistance."
    ]
  },
  {
    "id": "igcse-phys-fc-4-1-5",
    "subtopicId": "igcse-phys-4-1",
    "front": "How is an ammeter vs voltmeter connected?",
    "backBullets": [
      "Ammeter in series; Voltmeter in parallel."
    ]
  },
  {
    "id": "igcse-phys-fc-4-2-1",
    "subtopicId": "igcse-phys-4-2",
    "front": "Series vs parallel combined resistance equations?",
    "backBullets": [
      "Series: R = R₁ + R₂; Parallel: 1/R = 1/R₁ + 1/R₂."
    ]
  },
  {
    "id": "igcse-phys-fc-4-2-2",
    "subtopicId": "igcse-phys-4-2",
    "front": "Potential divider formula?",
    "backBullets": [
      "V₁ / V₂ = R₁ / R₂ (larger resistance gets larger share of supply voltage)."
    ]
  },
  {
    "id": "igcse-phys-fc-4-2-3",
    "subtopicId": "igcse-phys-4-2",
    "front": "How do NTC thermistors and LDRs respond to rising T / light?",
    "backBullets": [
      "Thermistor: T up → R down; LDR: Light up → R down."
    ]
  },
  {
    "id": "igcse-phys-fc-4-2-4",
    "subtopicId": "igcse-phys-4-2",
    "front": "Which wire must contain the fuse and switch?",
    "backBullets": [
      "The LIVE wire (brown), so the appliance is isolated from 230 V when blown/off."
    ]
  },
  {
    "id": "igcse-phys-fc-4-2-5",
    "subtopicId": "igcse-phys-4-2",
    "front": "How do earthing and a fuse protect against a live metal case?",
    "backBullets": [
      "Low-resistance earth wire carries a large fault current to Earth, melting the fuse and cutting off the live supply."
    ]
  },
  {
    "id": "igcse-phys-fc-4-3-1",
    "subtopicId": "igcse-phys-4-3",
    "front": "Fleming’s Left-Hand Rule fingers?",
    "backBullets": [
      "Thumb = Motion/Force, First = Field (N→S), Second = Current (+→−)."
    ]
  },
  {
    "id": "igcse-phys-fc-4-3-2",
    "subtopicId": "igcse-phys-4-3",
    "front": "Role of split-ring commutator in a DC motor?",
    "backBullets": [
      "Reverses coil current every half-turn so turning force stays in the same rotational direction."
    ]
  },
  {
    "id": "igcse-phys-fc-4-3-3",
    "subtopicId": "igcse-phys-4-3",
    "front": "Transformer voltage and ideal power equations?",
    "backBullets": [
      "V_p / V_s = N_p / N_s and I_p V_p = I_s V_s."
    ]
  },
  {
    "id": "igcse-phys-fc-4-3-4",
    "subtopicId": "igcse-phys-4-3",
    "front": "Why do national grids transmit at high voltage?",
    "backBullets": [
      "Lowers current I for the same power, drastically reducing cable heat loss P = I²R."
    ]
  },
  {
    "id": "igcse-phys-fc-4-3-5",
    "subtopicId": "igcse-phys-4-3",
    "front": "Why do transformers need A.C. instead of D.C.?",
    "backBullets": [
      "Only A.C. produces a continuously changing magnetic field in the soft-iron core to induce EMF."
    ]
  },
  {
    "id": "igcse-phys-fc-5-1-1",
    "subtopicId": "igcse-phys-5-1",
    "front": "Three conclusions from Rutherford’s alpha-scattering experiment?",
    "backBullets": [
      "Atom is mostly empty space; nucleus is tiny, dense (most mass), and positively charged."
    ]
  },
  {
    "id": "igcse-phys-fc-5-1-2",
    "subtopicId": "igcse-phys-5-1",
    "front": "How do you find neutron number from ᴬ_Z X?",
    "backBullets": [
      "Neutrons = A − Z (nucleon number minus proton number)."
    ]
  },
  {
    "id": "igcse-phys-fc-5-1-3",
    "subtopicId": "igcse-phys-5-1",
    "front": "Define isotopes.",
    "backBullets": [
      "Atoms of the same element with the same proton number (Z) but different neutron numbers."
    ]
  },
  {
    "id": "igcse-phys-fc-5-1-4",
    "subtopicId": "igcse-phys-5-1",
    "front": "Nuclear fission vs nuclear fusion?",
    "backBullets": [
      "Fission splits heavy U-235 into smaller nuclei + neutrons; Fusion joins light hydrogen nuclei into helium."
    ]
  },
  {
    "id": "igcse-phys-fc-5-1-5",
    "subtopicId": "igcse-phys-5-1",
    "front": "Why does nuclear fusion require extreme temperature & pressure?",
    "backBullets": [
      "To overcome strong electrostatic repulsion between positively charged nuclei."
    ]
  },
  {
    "id": "igcse-phys-fc-5-2-1",
    "subtopicId": "igcse-phys-5-2",
    "front": "Composition, charge, and absorber of α, β⁻, and γ?",
    "backBullets": [
      "α (⁴₂He, +2, paper); β⁻ (⁰₋₁e, −1, aluminium); γ (EM wave, 0, thick lead)."
    ]
  },
  {
    "id": "igcse-phys-fc-5-2-2",
    "subtopicId": "igcse-phys-5-2",
    "front": "Effect of alpha vs beta decay on A and Z?",
    "backBullets": [
      "Alpha: A − 4, Z − 2; Beta-minus: A unchanged, Z + 1."
    ]
  },
  {
    "id": "igcse-phys-fc-5-2-3",
    "subtopicId": "igcse-phys-5-2",
    "front": "Define half-life.",
    "backBullets": [
      "Time taken for half the unstable nuclei in a sample to decay (or corrected count rate to halve)."
    ]
  },
  {
    "id": "igcse-phys-fc-5-2-4",
    "subtopicId": "igcse-phys-5-2",
    "front": "Crucial first step before computing half-life from raw counts?",
    "backBullets": [
      "Subtract background count rate from every reading first!"
    ]
  },
  {
    "id": "igcse-phys-fc-5-2-5",
    "subtopicId": "igcse-phys-5-2",
    "front": "Why are gamma emitters with short half-lives used as medical tracers?",
    "backBullets": [
      "Gamma penetrates out of the body with low ionisation, and short half-life minimises patient dose."
    ]
  },
  {
    "id": "igcse-phys-fc-6-1-1",
    "subtopicId": "igcse-phys-6-1",
    "front": "What causes Earth’s seasons?",
    "backBullets": [
      "Earth’s 23.5° axial tilt as it orbits the Sun every 365.25 days."
    ]
  },
  {
    "id": "igcse-phys-fc-6-1-2",
    "subtopicId": "igcse-phys-6-1",
    "front": "Order of the 8 planets from the Sun?",
    "backBullets": [
      "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
    ]
  },
  {
    "id": "igcse-phys-fc-6-1-3",
    "subtopicId": "igcse-phys-6-1",
    "front": "Average orbital speed equation?",
    "backBullets": [
      "v = 2πr / T."
    ]
  },
  {
    "id": "igcse-phys-fc-6-1-4",
    "subtopicId": "igcse-phys-6-1",
    "front": "Where in its elliptical orbit does a comet move fastest?",
    "backBullets": [
      "Closest to the Sun (minimum GPE → maximum KE)."
    ]
  },
  {
    "id": "igcse-phys-fc-6-1-5",
    "subtopicId": "igcse-phys-6-1",
    "front": "Why are inner planets rocky while outer planets are gas/ice giants?",
    "backBullets": [
      "High temperature near the young Sun in the accretion disc allowed only high-melting-point rocks/metals to condense close in."
    ]
  },
  {
    "id": "igcse-phys-fc-6-2-1",
    "subtopicId": "igcse-phys-6-2",
    "front": "Life cycle of a Sun-like star vs a massive star?",
    "backBullets": [
      "Sun-like: Main Seq → Red Giant → White Dwarf; Massive: Main Seq → Red Supergiant → Supernova → Neutron Star / Black Hole."
    ]
  },
  {
    "id": "igcse-phys-fc-6-2-2",
    "subtopicId": "igcse-phys-6-2",
    "front": "What is a light-year?",
    "backBullets": [
      "The DISTANCE light travels in a vacuum in 1 year (≈ 9.5 × 10¹⁵ m)."
    ]
  },
  {
    "id": "igcse-phys-fc-6-2-3",
    "subtopicId": "igcse-phys-6-2",
    "front": "What does cosmological red-shift show?",
    "backBullets": [
      "Light from distant galaxies is stretched to longer wavelengths because space is expanding; further galaxies recede faster."
    ]
  },
  {
    "id": "igcse-phys-fc-6-2-4",
    "subtopicId": "igcse-phys-6-2",
    "front": "What is CMBR?",
    "backBullets": [
      "Cosmic Microwave Background Radiation — uniform microwave afterglow from the hot early Big Bang stretched by expansion."
    ]
  },
  {
    "id": "igcse-phys-fc-6-2-5",
    "subtopicId": "igcse-phys-6-2",
    "front": "Hubble’s Law and age of the Universe formula?",
    "backBullets": [
      "H₀ = v / d (≈ 2.2 × 10⁻¹⁸ s⁻¹); Age of Universe = 1 / H₀ ≈ 14 billion years."
    ]
  }
];

export const IGCSE_PHYSICS_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    "id": "igcse-phys-cs-1",
    "slug": "topic-1-motion-forces-energy",
    "title": "1. Motion, Forces & Energy Cheat Sheet",
    "topicNumber": 1,
    "topicName": "Motion, Forces & Energy",
    "summary": "Kinematics, Newton’s laws, Hooke’s law, moments, momentum, pressure, work & power.",
    "accentColor": "#7C3AED",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "a = (v − u)/t | v = s/t",
          "W = mg | ρ = m/V | F = ma | F = kx",
          "M = Fd | p = mv | FΔt = Δp",
          "p = F/A | Δp = ρgΔh",
          "E_k = ½mv² | ΔE_p = mgΔh | W = Fd | P = W/t"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "In F = kx use EXTENSION, not total length",
          "Area under speed-time graph = distance (gradient = acceleration)"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Always subtract opposing forces before F = ma",
          "Assign + and − signs to opposite directions in momentum problems"
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-cs-2",
    "slug": "topic-2-thermal-physics",
    "title": "2. Thermal Physics Cheat Sheet",
    "topicNumber": 2,
    "topicName": "Thermal Physics",
    "summary": "Kinetic model, Brownian motion, Boyle’s law, SHC, conduction, convection & radiation.",
    "accentColor": "#7C3AED",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "T(K) = θ(°C) + 273",
          "p₁V₁ = p₂V₂ (constant T)",
          "ΔE = mcΔθ"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Never say \"heat rises\" — say warmer fluid expands, becomes less dense, and rises",
          "Evaporation cools because fastest molecules escape"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Matte black = best emitter & absorber; shiny silver = best reflector"
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-cs-3",
    "slug": "topic-3-waves-optics",
    "title": "3. Waves & Optics Cheat Sheet",
    "topicNumber": 3,
    "topicName": "Waves & Optics",
    "summary": "Wave equation, refraction, diffraction, TIR, lenses, EM spectrum & ultrasound.",
    "accentColor": "#7C3AED",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "v = fλ | f = 1/T",
          "n = sin i / sin r | sin c = 1/n",
          "c = 3.0 × 10⁸ m/s",
          "Echo depth d = vt / 2"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Frequency NEVER changes during refraction",
          "Always measure i and r from the NORMAL, not the glass surface"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Divide echo time by 2 for one-way depth",
          "Memorise EM order: R-M-I-V-U-X-G"
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-cs-4",
    "slug": "topic-4-electricity-magnetism",
    "title": "4. Electricity & Magnetism Cheat Sheet",
    "topicNumber": 4,
    "topicName": "Electricity & Magnetism",
    "summary": "Charge, Ohm’s law, series/parallel, potential dividers, safety, motors & transformers.",
    "accentColor": "#7C3AED",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "Q = It | V = IR | P = IV = I²R | E = IVt",
          "1/R = 1/R₁ + 1/R₂ | V₁/V₂ = R₁/R₂",
          "V_p/V_s = N_p/N_s | I_p V_p = I_s V_s"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Flip 1/R_total at the end of parallel calculations",
          "Transformers need A.C. — D.C. induces zero steady output"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "High grid voltage cuts current I and slashes P = I²R losses",
          "Left hand = Motor; Right hand = Generator"
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-cs-5",
    "slug": "topic-5-nuclear-physics",
    "title": "5. Nuclear Physics Cheat Sheet",
    "topicNumber": 5,
    "topicName": "Nuclear Physics",
    "summary": "Rutherford scattering, isotopes, fission, fusion, α/β/γ decay & half-life.",
    "accentColor": "#7C3AED",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "Neutrons = A − Z",
          "α: A−4, Z−2 | β⁻: A same, Z+1",
          "Corrected count = Raw − Background"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "ALWAYS subtract background radiation BEFORE halving for half-life",
          "Control rods absorb neutrons; moderator slows them"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Check top (A) and bottom (Z) totals balance across nuclear arrows"
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-cs-6",
    "slug": "topic-6-space-physics",
    "title": "6. Space Physics Cheat Sheet",
    "topicNumber": 6,
    "topicName": "Space Physics",
    "summary": "Earth/seasons, Solar System, orbital speed, star life cycles, red-shift, CMBR & Hubble’s Law.",
    "accentColor": "#7C3AED",
    "sections": [
      {
        "heading": "Key Formulae & Core Rules",
        "points": [
          "v = 2πr / T",
          "1 light-year ≈ 9.5 × 10¹⁵ m",
          "H₀ = v / d | Age = 1 / H₀"
        ]
      },
      {
        "heading": "Common Exam Traps to Avoid",
        "points": [
          "Seasons are caused by axial tilt, NOT distance from the Sun",
          "Light-year is DISTANCE, not time"
        ]
      },
      {
        "heading": "Top Exam Technique Tips",
        "points": [
          "Quote both red-shift AND CMBR as Big Bang evidence"
        ]
      }
    ]
  }
];

export const IGCSE_PHYSICS_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    "id": "igcse-phys-ex-1-1",
    "subtopicId": "igcse-phys-1-1",
    "number": 1,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A train starts from rest and accelerates uniformly to 20 m/s in 10 s, then travels at constant 20 m/s for 30 s.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the acceleration during the first 10 s.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "a = (20 − 0) / 10 = 2.0 m/s².",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "20"
                ],
                [
                  "10"
                ]
              ],
              "markDescription": "Uses (v − u)/t"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 2,
                "tolerance": 0.05
              },
              "markDescription": "2 m/s²"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the total distance travelled in the 40 s journey.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Triangle area = ½ × 10 × 20 = 100 m; Rectangle area = 30 × 20 = 600 m; Total = 700 m.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 100,
                "tolerance": 1
              },
              "markDescription": "First stage 100 m"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 600,
                "tolerance": 1
              },
              "markDescription": "Second stage 600 m"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 700,
                "tolerance": 1
              },
              "markDescription": "Total 700 m"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-1-2",
    "subtopicId": "igcse-phys-1-2",
    "number": 2,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A 1,500 kg car experiences a forward engine force of 4,200 N and total resistive drag of 1,200 N.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the resultant force and acceleration of the car.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Resultant force = 4200 − 1200 = 3000 N; a = 3000 / 1500 = 2.0 m/s².",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 3000,
                "tolerance": 1
              },
              "markDescription": "Resultant 3000 N"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 2,
                "tolerance": 0.05
              },
              "markDescription": "Acceleration 2 m/s²"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain what happens to the car’s acceleration as its speed rises further.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Air resistance increases with speed, reducing the resultant force, so acceleration decreases until air resistance equals engine force (top speed).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "air resistance",
                  "drag",
                  "friction"
                ],
                [
                  "increase",
                  "rises",
                  "greater"
                ]
              ],
              "markDescription": "Air resistance/drag increases"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "resultant",
                  "acceleration"
                ],
                [
                  "decrease",
                  "smaller",
                  "zero"
                ]
              ],
              "markDescription": "Resultant force and acceleration decrease"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-1-3",
    "subtopicId": "igcse-phys-1-3",
    "number": 3,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A 0.5 kg football moving at 12 m/s is caught and brought to rest by a goalkeeper’s gloves in 0.20 s.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the impulse and average force exerted by the gloves on the ball.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Δp = 0.5 × 12 = 6.0 kg m/s (N s); F = Δp / Δt = 6.0 / 0.20 = 30 N.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 6,
                "tolerance": 0.1
              },
              "markDescription": "Impulse 6 N s"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 30,
                "tolerance": 0.2
              },
              "markDescription": "Force 30 N"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain why pulling hands backwards while catching reduces stinging.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "It increases the stopping time Δt for the same change in momentum Δp, reducing the average impact force F = Δp/Δt.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "time",
                  "longer",
                  "increases"
                ]
              ],
              "markDescription": "Increases stopping time"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "force"
                ],
                [
                  "smaller",
                  "less",
                  "reduces",
                  "decreases"
                ]
              ],
              "markDescription": "Reduces force for same momentum change"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-1-4",
    "subtopicId": "igcse-phys-1-4",
    "number": 4,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A 60 kg skier descends a frictionless slope of vertical height 20 m (g = 9.8 N/kg).",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the loss in gravitational potential energy.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "ΔE_p = mgΔh = 60 × 9.8 × 20 = 11,760 J.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "60"
                ],
                [
                  "9.8",
                  "10"
                ]
              ],
              "markDescription": "Uses mgh"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 11760,
                "tolerance": 250
              },
              "markDescription": "11760 J (or 12000 J with g=10)"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the skier’s maximum speed at the bottom of the slope.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "½ × 60 × v² = 11760 → v² = 392 → v = 19.8 m/s (or 20 m/s).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "392",
                  "400",
                  "19.8",
                  "20"
                ]
              ],
              "markDescription": "Equates KE = GPE"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 19.9,
                "tolerance": 0.2
              },
              "markDescription": "Speed 19.8–20.0 m/s"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-2-1",
    "subtopicId": "igcse-phys-2-1",
    "number": 5,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] Air of volume 400 cm³ at pressure 100 kPa is trapped in a sealed syringe at constant temperature.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate: The piston is pushed until the volume is 160 cm³. Calculate the new pressure.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "p₂ = (100 × 400) / 160 = 250 kPa.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "40000",
                  "160"
                ]
              ],
              "markDescription": "Applies p₁V₁ = p₂V₂"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 250,
                "tolerance": 0.5
              },
              "markDescription": "250 kPa"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain in terms of molecules why compressing the gas at constant temperature raises its pressure.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "The molecules have the same average speed, but in a smaller volume they collide with the walls more frequently, increasing force per unit area.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "smaller volume",
                  "closer",
                  "same speed",
                  "per unit volume"
                ]
              ],
              "markDescription": "Same speed / more molecules per unit volume"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "frequent",
                  "more often",
                  "collisions"
                ],
                [
                  "wall"
                ]
              ],
              "markDescription": "More frequent collisions with walls"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-2-2",
    "subtopicId": "igcse-phys-2-2",
    "number": 6,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A 1,000 W electric heater warms 0.5 kg of oil (c = 2,000 J/(kg °C)) for 60 s with no heat loss.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the temperature rise of the oil.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "E = Pt = 1000 × 60 = 60,000 J; Δθ = 60,000 / (0.5 × 2000) = 60 °C.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 60000,
                "tolerance": 10
              },
              "markDescription": "Energy 60,000 J"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 60,
                "tolerance": 0.2
              },
              "markDescription": "Temp rise 60 °C"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain why painting a solar water-heating panel matte black improves its efficiency.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Matte black surfaces are the best absorbers of infrared radiation from the Sun, transferring thermal energy rapidly to the water.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "absorb",
                  "absorber"
                ]
              ],
              "markDescription": "Best absorber"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "infrared",
                  "radiation",
                  "thermal"
                ]
              ],
              "markDescription": "Infrared/thermal radiation"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-3-1",
    "subtopicId": "igcse-phys-3-1",
    "number": 7,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] Water waves of frequency 5 Hz and wavelength 6 cm travel from deep water into shallow water where their speed drops to 0.20 m/s.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the wave speed in deep water (in m/s) and the new wavelength in shallow water (in cm).",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Deep speed = 5 × 0.06 = 0.30 m/s; Shallow λ = 0.20 / 5 = 0.04 m = 4 cm.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 0.3,
                "tolerance": 0.01
              },
              "markDescription": "Deep speed 0.30 m/s"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "4 cm",
                  "4cm",
                  "0.04"
                ]
              ],
              "markDescription": "Shallow λ = 4 cm (0.04 m)"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "State what happens to the frequency and direction of waves striking the shallow boundary at an angle.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Frequency stays constant at 5 Hz, and the waves refract (bend) towards the normal.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "frequency"
                ],
                [
                  "constant",
                  "same",
                  "unchanged"
                ]
              ],
              "markDescription": "Frequency constant"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "towards"
                ],
                [
                  "normal"
                ]
              ],
              "markDescription": "Bends towards normal"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-3-2",
    "subtopicId": "igcse-phys-3-2",
    "number": 8,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A ray of light in air strikes a glass block (n = 1.50) at an angle of incidence of 45°.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the angle of refraction inside the glass to 1 decimal place.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "sin r = sin 45° / 1.50 = 0.4714 → r = 28.1°.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "0.47",
                  "sin 45",
                  "sin45"
                ]
              ],
              "markDescription": "sin r = 0.471"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 28.1,
                "tolerance": 0.2
              },
              "markDescription": "r = 28.1°"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the critical angle of this glass to 1 decimal place.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "sin c = 1 / 1.50 = 0.667 → c = 41.8°.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "0.667",
                  "0.67",
                  "1/1.5"
                ]
              ],
              "markDescription": "sin c = 1/1.5"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 41.8,
                "tolerance": 0.2
              },
              "markDescription": "c = 41.8°"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-3-3",
    "subtopicId": "igcse-phys-3-3",
    "number": 9,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A fishing boat transmits an ultrasound pulse vertically down into seawater (v = 1,500 m/s) and detects the echo from a shoal of fish 0.12 s later.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the depth of the shoal of fish below the boat.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "d = (1500 × 0.12) / 2 = 180 / 2 = 90 m.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "180",
                  "/ 2",
                  "÷ 2"
                ]
              ],
              "markDescription": "Divides round-trip 180 m by 2"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 90,
                "tolerance": 0.2
              },
              "markDescription": "Depth 90 m"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Describe the nature of ultrasound waves in terms of frequency and particle oscillation.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Ultrasound is a longitudinal wave (particles oscillate parallel to energy transfer) with a frequency above 20,000 Hz (20 kHz).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "longitudinal",
                  "parallel"
                ]
              ],
              "markDescription": "Longitudinal / parallel oscillation"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "20,000",
                  "20000",
                  "20 khz",
                  "20khz"
                ]
              ],
              "markDescription": "Frequency > 20,000 Hz / 20 kHz"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-4-1",
    "subtopicId": "igcse-phys-4-1",
    "number": 10,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] An electric heater rated at 230 V draws a steady current of 10 A for 5 minutes.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the resistance and power rating of the heater.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "R = V / I = 230 / 10 = 23 Ω; P = IV = 10 × 230 = 2,300 W (2.3 kW).",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 23,
                "tolerance": 0.1
              },
              "markDescription": "R = 23 Ω"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 2300,
                "tolerance": 5
              },
              "markDescription": "P = 2300 W"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate the total electrical energy transferred in 5 minutes (in kJ).",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "t = 300 s; E = Pt = 2300 × 300 = 690,000 J = 690 kJ.",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 300,
                "tolerance": 0.5
              },
              "markDescription": "Converts 5 min to 300 s"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "690",
                  "690,000",
                  "690000"
                ]
              ],
              "markDescription": "690 kJ (690,000 J)"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-4-2",
    "subtopicId": "igcse-phys-4-2",
    "number": 11,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A 12 V battery feeds a potential divider made of a fixed 2 kΩ resistor in series with an NTC thermistor.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate: When the thermistor resistance is 6 kΩ, calculate the p.d. across the thermistor.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "V = 12 × (6 / (2 + 6)) = 12 × 6/8 = 9.0 V.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "8",
                  "6/8",
                  "3/4"
                ]
              ],
              "markDescription": "Total R = 8 kΩ"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 9,
                "tolerance": 0.05
              },
              "markDescription": "9 V"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain what happens to the p.d. across the thermistor when the room gets hotter.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "As temperature rises, the NTC thermistor’s resistance decreases, so it takes a smaller fraction of the 12 V supply and its p.d. decreases.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "resistance"
                ],
                [
                  "decrease",
                  "drops",
                  "falls",
                  "lower"
                ]
              ],
              "markDescription": "Thermistor resistance decreases"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "voltage",
                  "p.d.",
                  "pd",
                  "potential difference"
                ],
                [
                  "decrease",
                  "drops",
                  "falls",
                  "smaller"
                ]
              ],
              "markDescription": "p.d. across thermistor decreases"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-4-3",
    "subtopicId": "igcse-phys-4-3",
    "number": 12,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A 100%-efficient step-up transformer has 400 primary turns and 8,000 secondary turns. Input is 250 V a.c. at 20 A.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the secondary output voltage and secondary current.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "V_s = 250 × (8000 / 400) = 5,000 V; I_s = (250 × 20) / 5000 = 1.0 A.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "20",
                  "8000"
                ]
              ],
              "markDescription": "Turns ratio 20"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 5000,
                "tolerance": 5
              },
              "markDescription": "V_s = 5000 V"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 1,
                "tolerance": 0.02
              },
              "markDescription": "I_s = 1 A"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain how the primary coil induces a voltage in the secondary coil.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "Alternating current in the primary creates a continuously changing magnetic field in the soft-iron core, which cuts the secondary coil and induces an alternating EMF.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "changing",
                  "alternating"
                ],
                [
                  "magnetic field"
                ]
              ],
              "markDescription": "Changing magnetic field in iron core"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "induce",
                  "induced"
                ],
                [
                  "secondary"
                ]
              ],
              "markDescription": "Induces EMF/voltage in secondary"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-5-1",
    "subtopicId": "igcse-phys-5-1",
    "number": 13,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] In a nuclear reactor, uranium-235 absorbs a slow neutron and undergoes fission.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Describe how a self-sustaining chain reaction occurs during nuclear fission of U-235.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "The U-235 nucleus splits into two daughter nuclei and releases 2–3 neutrons, which can be absorbed by further U-235 nuclei to trigger more fissions.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "splits",
                  "daughter"
                ],
                [
                  "neutron"
                ]
              ],
              "markDescription": "Splits and releases neutrons"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "further",
                  "other",
                  "more",
                  "another"
                ],
                [
                  "uranium",
                  "nuclei",
                  "fission"
                ]
              ],
              "markDescription": "Neutrons hit further U-235 nuclei"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "State the functions of the moderator and control rods in the reactor.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "The moderator slows down fast neutrons so U-235 can absorb them; control rods absorb excess neutrons to regulate the reaction rate.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "moderator"
                ],
                [
                  "slow"
                ]
              ],
              "markDescription": "Moderator slows neutrons"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "control"
                ],
                [
                  "absorb"
                ]
              ],
              "markDescription": "Control rods absorb neutrons"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-5-2",
    "subtopicId": "igcse-phys-5-2",
    "number": 14,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A detector records a constant background count rate of 15 counts/min. With a sample placed nearby, the reading is 255 counts/min, falling to 45 counts/min after 18 minutes.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate the half-life of the radioactive sample.",
        "marks": 3,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 3,
          "modelAnswer": "Corrected rates: 255 − 15 = 240 cpm and 45 − 15 = 30 cpm. 240 → 120 → 60 → 30 is 3 half-lives, so t_½ = 18 ÷ 3 = 6 minutes.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "240"
                ],
                [
                  "30"
                ]
              ],
              "markDescription": "Subtracts 15 to get 240 and 30"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "3",
                  "three"
                ]
              ],
              "markDescription": "Identifies 3 half-lives"
            },
            {
              "id": "mp3",
              "numericMatch": {
                "value": 6,
                "tolerance": 0.05
              },
              "markDescription": "Half-life = 6 minutes"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Write: Complete the alpha decay of polonium-210 (²¹⁰₈₄Po) into lead (Pb).",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He (mass number 206, atomic number 82).",
          "markPoints": [
            {
              "id": "mp1",
              "numericMatch": {
                "value": 206,
                "tolerance": 0.01
              },
              "markDescription": "Mass number 206"
            },
            {
              "id": "mp2",
              "numericMatch": {
                "value": 82,
                "tolerance": 0.01
              },
              "markDescription": "Atomic number 82"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-6-1",
    "subtopicId": "igcse-phys-6-1",
    "number": 15,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] A comet follows a highly elliptical orbit around the Sun.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Explain in terms of energy conservation why the comet travels fastest when closest to the Sun.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "As the comet moves closer to the Sun, its gravitational potential energy decreases and transfers into kinetic energy, so its orbital speed increases to a maximum at closest approach.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "gravitational potential",
                  "gpe"
                ],
                [
                  "kinetic",
                  "ke"
                ]
              ],
              "markDescription": "GPE decreases / transfers to KE"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "speed",
                  "fastest",
                  "maximum"
                ]
              ],
              "markDescription": "Speed reaches maximum closest to Sun"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Calculate: A planet orbits at r = 2.0 × 10¹¹ m with period T = 6.0 × 10⁷ s. Calculate its average orbital speed to 2 s.f.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "v = 2πr / T = (2π × 2.0 × 10¹¹) / (6.0 × 10⁷) = 2.1 × 10⁴ m/s (21,000 m/s).",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "2π",
                  "2pi",
                  "1.26"
                ]
              ],
              "markDescription": "Uses 2πr / T"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "21000",
                  "20900",
                  "2.1",
                  "20,900",
                  "21,000"
                ]
              ],
              "markDescription": "21000 m/s (2.1 × 10⁴)"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "igcse-phys-ex-6-2",
    "subtopicId": "igcse-phys-6-2",
    "number": 16,
    "stimulus": "[Cambridge IGCSE 0625 Paper 4 Style] Astronomers measure a distant galaxy receding at v = 6.6 × 10⁶ m/s, using H₀ = 2.2 × 10⁻¹⁸ s⁻¹.",
    "parts": [
      {
        "id": "p1",
        "label": "(a)",
        "prompt": "Calculate: Use Hubble’s Law to calculate the distance d to this galaxy in metres.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "d = v / H₀ = (6.6 × 10⁶) / (2.2 × 10⁻¹⁸) = 3.0 × 10²⁴ m.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "6.6"
                ],
                [
                  "2.2"
                ]
              ],
              "markDescription": "Uses d = v / H₀"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "3.0",
                  "3 × 10",
                  "3x10",
                  "3e24",
                  "10^24",
                  "10²⁴"
                ]
              ],
              "markDescription": "3.0 × 10²⁴ m"
            }
          ]
        }
      },
      {
        "id": "p2",
        "label": "(b)",
        "prompt": "Explain what CMBR is and why it provides strong evidence for the Big Bang.",
        "marks": 2,
        "kind": "short-answer",
        "rubric": {
          "maxMarks": 2,
          "modelAnswer": "CMBR is uniform microwave radiation arriving from all directions in space; it is high-energy thermal radiation emitted shortly after the hot Big Bang that has been stretched (red-shifted) into microwaves by the expansion of space.",
          "markPoints": [
            {
              "id": "mp1",
              "requiredKeywordGroups": [
                [
                  "microwave"
                ],
                [
                  "all directions",
                  "uniform",
                  "everywhere",
                  "space"
                ]
              ],
              "markDescription": "Uniform microwave radiation from all directions"
            },
            {
              "id": "mp2",
              "requiredKeywordGroups": [
                [
                  "stretched",
                  "red-shift",
                  "redshift",
                  "expanded",
                  "expanding",
                  "early",
                  "hot"
                ]
              ],
              "markDescription": "Stretched/red-shifted early Big Bang radiation"
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
    "title": "Cambridge IGCSE Physics (0625) Paper 2 (Extended MCQ) — May/June 2024",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0625/22",
    "durationMinutes": 45,
    "totalMarks": 40,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Identify resultant force from perpendicular vectors and speed-time graph areas.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Select the correct I–V characteristic for a filament lamp and NTC thermistor.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Determine nuclide numbers after sequential alpha and beta decays.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2024-p4",
    "specEra": "new-9-1",
    "year": "2024",
    "title": "Cambridge IGCSE Physics (0625) Paper 4 (Extended Theory) — May/June 2024",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Calculate impulse and explain how airbags reduce impact force using F = Δp/Δt.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Calculate critical angle for glass (n = 1.50) and state both conditions for TIR.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Explain how a step-up transformer reduces I²R losses in grid transmission cables.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2023n-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Physics (0625) Paper 2 (Extended MCQ) — Oct/Nov 2023",
    "tier": "Extended",
    "series": "Oct/Nov",
    "paperCode": "0625/22",
    "durationMinutes": 45,
    "totalMarks": 40,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Calculate spring constant using extension rather than total length.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Predict wavelength and frequency changes from deep to shallow water.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Compare rocky inner planets with gas giants using the accretion model.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2023n-p4",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Physics (0625) Paper 4 (Extended Theory) — Oct/Nov 2023",
    "tier": "Extended",
    "series": "Oct/Nov",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Explain terminal velocity in terms of increasing air resistance and zero resultant force.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Calculate parallel resistance and LDR potential divider output voltage.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Subtract background radiation before determining half-life from decay counts.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2023-p2",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Physics (0625) Paper 2 (Extended MCQ) — May/June 2023",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0625/22",
    "durationMinutes": 45,
    "totalMarks": 40,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Calculate hydrostatic pressure at depth using Δp = ρgΔh.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Compute sonar depth remembering the factor of 2.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Match Rutherford gold-foil observations to nuclear conclusions.",
        "marks": 3,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  },
  {
    "id": "igcse-phys-pp-2023-p4",
    "specEra": "new-9-1",
    "year": "2023",
    "title": "Cambridge IGCSE Physics (0625) Paper 4 (Extended Theory) — May/June 2023",
    "tier": "Extended",
    "series": "May/June",
    "paperCode": "0625/42",
    "durationMinutes": 75,
    "totalMarks": 80,
    "sampleQuestions": [
      {
        "number": "Q1",
        "question": "Explain Boyle’s Law pressure rise in terms of collision frequency with container walls.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q2",
        "question": "Explain why nuclear fusion requires extreme temperature and pressure.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      },
      {
        "number": "Q3",
        "question": "Use Hubble’s Law H₀ = v/d to calculate galaxy distance and age of the Universe.",
        "marks": 6,
        "markScheme": [
          "Apply the correct Cambridge IGCSE Physics (0625) method and show full working.",
          "State final numerical value to appropriate significant figures with correct SI/metric units."
        ]
      }
    ]
  }
];

export const IGCSE_PHYSICS_KEY_TERMS: KeyTermEntry[] = [
  {
    "id": "igcse-phys-kt-1",
    "term": "Terminal Velocity",
    "definition": "Constant maximum falling speed reached when upward air resistance balances downward weight.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-1",
    "subtopicCode": "1.1"
  },
  {
    "id": "igcse-phys-kt-2",
    "term": "Spring Constant",
    "definition": "Force per unit extension (k = F / x) measuring a spring’s stiffness up to the limit of proportionality.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-2",
    "subtopicCode": "1.2"
  },
  {
    "id": "igcse-phys-kt-3",
    "term": "Impulse",
    "definition": "Force × time (FΔt), equal to change in momentum (Δp = mv − mu).",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-3",
    "subtopicCode": "1.3"
  },
  {
    "id": "igcse-phys-kt-4",
    "term": "Efficiency",
    "definition": "(Useful energy or power output ÷ Total input) × 100%.",
    "topicNumber": 1,
    "subtopicId": "igcse-phys-1-4",
    "subtopicCode": "1.4"
  },
  {
    "id": "igcse-phys-kt-5",
    "term": "Brownian Motion",
    "definition": "Random zig-zag motion of visible smoke/pollen specks caused by uneven collisions with smaller invisible fluid molecules.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-phys-kt-6",
    "term": "Absolute Zero",
    "definition": "0 K (−273 °C), the lowest possible temperature where particles have minimum kinetic energy.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-1",
    "subtopicCode": "2.1"
  },
  {
    "id": "igcse-phys-kt-7",
    "term": "Specific Heat Capacity",
    "definition": "Thermal energy needed to raise 1 kg of a substance by 1 °C (ΔE = mcΔθ).",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-phys-kt-8",
    "term": "Convection",
    "definition": "Heat transfer in fluids as warm, less dense fluid rises and cool, denser fluid sinks.",
    "topicNumber": 2,
    "subtopicId": "igcse-phys-2-2",
    "subtopicCode": "2.2"
  },
  {
    "id": "igcse-phys-kt-9",
    "term": "Refraction",
    "definition": "Change in wave speed and direction across a boundary while frequency remains constant.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-1",
    "subtopicCode": "3.1"
  },
  {
    "id": "igcse-phys-kt-10",
    "term": "Total Internal Reflection",
    "definition": "Complete internal reflection occurring from a denser to less dense medium when i > critical angle c.",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-2",
    "subtopicCode": "3.2"
  },
  {
    "id": "igcse-phys-kt-11",
    "term": "Ultrasound",
    "definition": "Longitudinal sound waves with frequency above 20,000 Hz (20 kHz).",
    "topicNumber": 3,
    "subtopicId": "igcse-phys-3-3",
    "subtopicCode": "3.3"
  },
  {
    "id": "igcse-phys-kt-12",
    "term": "Electromotive Force (EMF)",
    "definition": "Electrical work done by a source in moving 1 C of charge around a complete circuit (E = W / Q).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-1",
    "subtopicCode": "4.1"
  },
  {
    "id": "igcse-phys-kt-13",
    "term": "Potential Divider",
    "definition": "Series resistors splitting supply voltage in direct proportion to their resistances (V₁/V₂ = R₁/R₂).",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-2",
    "subtopicCode": "4.2"
  },
  {
    "id": "igcse-phys-kt-14",
    "term": "Electromagnetic Induction",
    "definition": "Inducing an EMF across a conductor when magnetic field lines are cut or magnetic flux changes.",
    "topicNumber": 4,
    "subtopicId": "igcse-phys-4-3",
    "subtopicCode": "4.3"
  },
  {
    "id": "igcse-phys-kt-15",
    "term": "Isotope",
    "definition": "Atoms of the same element with equal proton number Z but different neutron numbers.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-16",
    "term": "Nuclear Fusion",
    "definition": "Joining two light nuclei into a heavier nucleus under extreme temperature and pressure, releasing energy.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-1",
    "subtopicCode": "5.1"
  },
  {
    "id": "igcse-phys-kt-17",
    "term": "Half-Life",
    "definition": "Time taken for half the radioactive nuclei in a sample to decay or corrected count rate to halve.",
    "topicNumber": 5,
    "subtopicId": "igcse-phys-5-2",
    "subtopicCode": "5.2"
  },
  {
    "id": "igcse-phys-kt-18",
    "term": "Accretion Disc",
    "definition": "Spinning flat disc of nebula gas and dust from which planets coalesced around the young Sun.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-1",
    "subtopicCode": "6.1"
  },
  {
    "id": "igcse-phys-kt-19",
    "term": "Red-Shift",
    "definition": "Stretching of light from receding galaxies to longer wavelengths due to expansion of space.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  },
  {
    "id": "igcse-phys-kt-20",
    "term": "CMBR",
    "definition": "Cosmic Microwave Background Radiation — uniform microwave afterglow from the early Big Bang.",
    "topicNumber": 6,
    "subtopicId": "igcse-phys-6-2",
    "subtopicCode": "6.2"
  }
];
