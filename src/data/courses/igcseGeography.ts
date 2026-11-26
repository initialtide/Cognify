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

export const IGCSE_GEOGRAPHY_TOPICS: TopicDefinition[] = [
  {
    number: 1,
    title: 'Plate Tectonics, Earthquakes & Weather Hazards',
    subtopics: [
      {
        id: 'iggeog-1-1',
        code: '1.1',
        slug: '1.1-plate-margins-earthquakes-volcanoes',
        title: 'Plate Margins, Earthquakes & Volcanoes',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iggeog-1-2',
        code: '1.2',
        slug: '1.2-weather-climate-rainforests-hot-deserts',
        title: 'Weather, Climate, Tropical Rainforests & Hot Deserts',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 2,
    title: 'Rivers & Coasts',
    subtopics: [
      {
        id: 'iggeog-2-1',
        code: '2.1',
        slug: '2.1-river-processes-landforms-flood-management',
        title: 'River Processes, Landforms & Flood Management',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iggeog-2-2',
        code: '2.2',
        slug: '2.2-coastal-erosion-deposition-landforms-defences',
        title: 'Coastal Erosion, Deposition, Landforms & Defences',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 3,
    title: 'Population & Settlement',
    subtopics: [
      {
        id: 'iggeog-3-1',
        code: '3.1',
        slug: '3.1-population-dynamics-dtm-migration',
        title: 'Population Dynamics, Demographic Transition & Migration',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iggeog-3-2',
        code: '3.2',
        slug: '3.2-urbanisation-land-use-models-sustainable-cities',
        title: 'Urbanisation, Land-Use Models & Sustainable Cities',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
  {
    number: 4,
    title: 'Economic Development & Resource Management',
    subtopics: [
      {
        id: 'iggeog-4-1',
        code: '4.1',
        slug: '4.1-development-indicators-globalisation-industry',
        title: 'Development Indicators, Globalisation & Industry',
        readingMinutes: 10,
        hasDeepContent: true,
      },
      {
        id: 'iggeog-4-2',
        code: '4.2',
        slug: '4.2-food-water-energy-security-sustainable-development',
        title: 'Food, Water & Energy Security + Sustainable Development',
        readingMinutes: 10,
        hasDeepContent: true,
      },
    ],
  },
];

export const IGCSE_GEOGRAPHY_NOTES: Record<string, NoteLesson> = {
  'iggeog-1-1': {
    subtopicId: 'iggeog-1-1',
    subtopicCode: '1.1',
    subtopicTitle: 'Plate Margins, Earthquakes & Volcanoes',
    readingMinutes: 10,
    videoTitle: 'Plate Tectonics, Plate Margins, Earthquakes & Volcanoes Explained',
    youtubeId: '9BwGKUFnaS4',
    videoChannel: 'Internet Geography',
    videoDuration: '8:45',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 2.1 Earthquakes & Volcanoes',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Crust Types & Destructive, Constructive, Conservative Margins', cardId: 'iggeog-1-1-c1' },
      { time: '3:00', seconds: 180, label: 'Earthquake Mechanics, Hazard Vulnerability & Case Studies', cardId: 'iggeog-1-1-c2' },
      { time: '6:00', seconds: 360, label: 'Volcano Types, Living Near Volcanoes & 3Ps Management', cardId: 'iggeog-1-1-c3' },
    ],
    cards: [
      {
        id: 'iggeog-1-1-c1',
        title: 'Earth’s Structure & The Three Plate Margins',
        summary: 'Earth’s lithosphere is broken into tectonic plates driven by mantle convection currents, ridge push, and slab pull — producing distinct hazards at each boundary.',
        diagram: 'tectonic-plate-margins',
        bullets: [
          '**Oceanic vs continental crust** - oceanic crust is **thin (5–10 km), denser basalt**, and younger; continental crust is **thick (30–70 km), less dense granite**, and ancient.',
          '**Destructive (convergent) margin** - denser oceanic plate **subducts** beneath continental plate into the mantle, forming an **ocean trench**, violent **composite volcanoes**, fold mountains, and powerful earthquakes (e.g. Nazca under South American plate). Note: **collision** of two continental plates creates fold mountains (Himalayas) & strong earthquakes, but **no volcanoes**.',
          '**Constructive (divergent) margin** - plates pull apart; basaltic magma rises smoothly to form new oceanic crust, **mid-ocean ridges**, and gently sloping **shield volcanoes** (e.g. Mid-Atlantic Ridge, Iceland).',
          '**Conservative (transform) margin** - plates slide horizontally past each other; friction locks rock until sudden slip triggers shallow, violent **earthquakes** with **NO volcanic activity** (e.g. San Andreas Fault, California).',
        ],
        subsections: [
          {
            heading: 'Comparing Hazards Across Margins',
            bullets: [
              '**Exam rule** - always specify *why* the oceanic plate sinks ("because oceanic basalt is denser than continental granite") to unlock full sequence marks.',
            ],
            exampleHeading: 'Cambridge 0460 Plate Margin Examples',
            examples: [
              'Destructive subduction: Pacific / Philippine plates beneath Eurasian plate → Mount Fuji & 2011 Tohoku M9.0 tsunami.',
              'Constructive divergence: North American & Eurasian plates separating across Iceland → Eyjafjallajökull & mid-ocean ridge.',
              'Conservative fault: Enriquillo–Plantain Garden fault system near Port-au-Prince (Haiti) & San Andreas Fault (USA).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'subduction', definition: 'The sinking of a denser oceanic tectonic plate beneath a less dense continental or younger oceanic plate into the mantle at a destructive margin.' },
          { term: 'slab pull', definition: 'The dominant gravitational force pulling a dense, cooling subducting tectonic plate downward into the asthenosphere.' },
        ],
      },
      {
        id: 'iggeog-1-1-c2',
        title: 'Earthquake Mechanics & Why Impacts Vary Between LICs and HICs',
        summary: 'Two earthquakes of similar magnitude produce drastically different death tolls depending on depth of focus, epicentre proximity, building codes, and emergency capacity.',
        bullets: [
          '**Focus vs epicentre** - the **focus** is the exact underground rock rupture point where seismic energy releases; the **epicentre** is the point directly above it on Earth’s surface (shallow focus = far greater surface shaking!).',
          '**Primary vs secondary impacts** - **primary** occur immediately from ground shaking (collapsed buildings, ruptured gas/water pipes); **secondary** follow afterwards (fires, landslides, tsunamis, cholera outbreaks, homelessness).',
          '**Human vulnerability factors** - weak unreinforced masonry, high urban density, lack of aseismic engineering, poor healthcare access, and slow rescue logistics multiply casualties in LICs.',
        ],
        subsections: [
          {
            heading: 'Paired Cambridge 0460 Earthquake Case Studies',
            bullets: [
              '**Include named facts & figures** - Cambridge 0460 7-mark case-study questions require place-specific statistics and clear cause–impact–response links.',
            ],
            exampleHeading: 'Haiti (2010, LIC) vs Christchurch, New Zealand (2011, HIC)',
            examples: [
              'Haiti (Jan 2010, M7.0, shallow 13 km focus, 25 km from Port-au-Prince): ~220,000–316,000 killed, 1.5 million homeless, port & hospital destroyed, secondary cholera epidemic; relied heavily on international aid.',
              'Christchurch, New Zealand (Feb 2011, M6.3, shallow 5 km focus): 185 killed despite severe liquefaction in the CBD; strict building standards, trained civil defence rescue teams, and insurance payouts accelerated recovery.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'epicentre', definition: 'The point on Earth’s surface vertically above an earthquake’s underground focus where shaking is usually most intense.' },
          { term: 'liquefaction', definition: 'Process where intense seismic shaking causes saturated loose soil or silt to behave like a liquid, collapsing building foundations.' },
        ],
      },
      {
        id: 'iggeog-1-1-c3',
        title: 'Volcanic Hazards, Opportunities & Reducing Tectonic Risk (3Ps)',
        summary: 'Millions continue living beside active volcanoes for fertile soils, geothermal power, and tourism — relying on Prediction, Protection, and Planning to cut risk.',
        bullets: [
          '**Composite (stratovolcano) vs shield volcano** - **composite** (destructive margins): steep sides, viscous acidic lava, explosive ash clouds & lethal **pyroclastic flows**; **shield** (constructive/hotspots): broad gentle slopes, runny basic basalt lava, frequent non-explosive eruptions.',
          '**Why people live near volcanoes** - **fertile volcanic ash soils** (high crop yields e.g. coffee/rice on Mount Merapi, Java), **geothermal energy** (Iceland heats ~90% of homes), **tourism jobs** (Mount Vesuvius/Etna), mineral mining (sulphur), and family ties/poverty limiting relocation.',
          '**Hazard management (3Ps)** - **Prediction/Monitoring** (seismometers for harmonic tremors, tiltmeters detecting magma swelling, SO₂ gas sensors); **Protection** (base-isolation bearings, cross-braced steel frames, shatterproof glass); **Planning** (hazard zoning, tsunami evacuation towers, annual earthquake drills in Japan).',
        ],
        subsections: [
          {
            heading: 'Named Volcanic Case Study Details',
            bullets: [
              '**Balance hazards with opportunities** - 0460 questions frequently ask *why* people stay in hazardous areas as well as *how* eruptions affect communities.',
            ],
            exampleHeading: 'Cambridge 0460 Volcano Case Studies',
            examples: [
              'Mount Merapi, Indonesia (2010, destructive margin): pyroclastic flows travelled 15 km down flanks killing ~353 people, yet 20 km exclusion-zone evacuations saved an estimated 10,000+ lives; farmers returned quickly for nutrient-rich volcanic soils.',
              'Eyjafjallajökull, Iceland (2010, constructive margin): sub-glacial eruption launched an ash plume that grounded ~100,000 European flights (costing airlines ~$1.7 bn) and disrupted perishable flower exports from Kenya.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pyroclastic flow', definition: 'A superheated, fast-moving avalanche of volcanic ash, toxic gases, and rock fragments travelling down a volcano’s flank at over 100 km/h.' },
        ],
        memoryAid: 'Volcanoes happen at Destructive (oceanic) & Constructive margins — NEVER Conservative or Continental Collision!',
        commonMistake: 'NEVER claim that earthquakes can be predicted accurately by date and time — seismometers monitor volcanic magma movement to forecast eruptions, whereas earthquakes can only be forecast probabilistically and managed through aseismic Protection & Planning!',
      },
    ],
    keyTerms: [
      { term: 'Subduction', definition: 'Denser oceanic crust sinking beneath less dense crust into the mantle at a destructive margin.' },
      { term: 'Epicentre', definition: 'Point on Earth’s surface directly above an earthquake’s underground focus.' },
      { term: 'Pyroclastic flow', definition: 'Fast-moving superheated cloud of volcanic ash, gas, and rock racing down a volcano’s slope.' },
      { term: 'Liquefaction', definition: 'Loss of strength in waterlogged loose soils during seismic shaking, causing structures to sink or tilt.' },
    ],
    checklistPoints: [
      'Compare crust densities, plate movements, landforms, and hazards at destructive, constructive, collision, and conservative margins',
      'Explain earthquake mechanics (focus vs epicentre) and contrast LIC vs HIC vulnerability using named case studies (Haiti vs Christchurch)',
      'Evaluate composite vs shield volcanoes, why communities live beside volcanoes, and 3Ps hazard management',
    ],
  },

  'iggeog-1-2': {
    subtopicId: 'iggeog-1-2',
    subtopicCode: '1.2',
    subtopicTitle: 'Weather, Climate, Tropical Rainforests & Hot Deserts',
    readingMinutes: 10,
    videoTitle: 'Weather Instruments, Climate Zones, Tropical Rainforests & Hot Deserts',
    youtubeId: 'WH9Qe7TFFZA',
    videoChannel: 'Internet Geography',
    videoDuration: '9:10',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 2.4–2.5 Weather, Climate & Ecosystems',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Weather Instruments, Stevenson Screen & Climate Controls', cardId: 'iggeog-1-2-c1' },
      { time: '3:05', seconds: 185, label: 'Equatorial Tropical Rainforests: Nutrient Cycle & Deforestation', cardId: 'iggeog-1-2-c2' },
      { time: '6:15', seconds: 375, label: 'Hot Deserts: Hadley Cell, Adaptations & Desertification', cardId: 'iggeog-1-2-c3' },
    ],
    cards: [
      {
        id: 'iggeog-1-2-c1',
        title: 'Measuring Weather (Stevenson Screen) & Climate Controls',
        summary: 'Weather is short-term atmospheric conditions measured with standardised instruments; climate is the 30-year average controlled by latitude, altitude, ocean currents, and atmospheric circulation.',
        bullets: [
          '**Stevenson screen design (Paper 2/4 favourite!)** - painted **white** (reflects solar heat), **louvred/slatted sides** (free airflow while blocking direct sunlight), raised **1.25 m above grass** (avoids ground radiation & concrete heat), door facing away from midday sun; houses **max–min thermometer** and **wet-and-dry bulb hygrometer** (relative humidity).',
          '**Outdoor instruments** - **rain gauge** (sunk into grass in open space away from trees/buildings, rim 30 cm high to stop splash-in), **cup anemometer** (wind speed in km/h or knots), **wind vane** (direction wind blows *from*), **barometer** (air pressure in hPa/mb).',
          '**Cloud cover & climate controls** - cloud cover is measured in **oktas (0–8 eighths)**; **latitude** controls solar insolation angle, **altitude** cools air ~6.5 °C per 1,000 m, and **continentality** produces extreme summer/winter temperature ranges inland.',
        ],
        subsections: [
          {
            heading: 'Siting Weather Instruments Correctly',
            bullets: [
              '**Avoid microclimate bias** - placing a rain gauge under trees causes interception (under-reading), while placing it beside walls causes rain-shadow or drip errors.',
            ],
            exampleHeading: 'Cambridge 0460 Paper 2/4 Worked Siting Examples',
            examples: [
              'Why is a Stevenson screen placed over short grass rather than tarmac? Dark tarmac absorbs solar radiation and re-radiates heat, artificially inflating thermometer readings.',
              'How is wind direction named? A "south-westerly wind" blows FROM the south-west toward the north-east (the arrow of a wind vane points INTO the oncoming wind).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Stevenson screen', definition: 'A white, slatted wooden box elevated 1.25 m over grass to shelter thermometers and hygrometers from direct sun and ground heat while allowing airflow.' },
          { term: 'oktas', definition: 'Unit representing eighths of the sky covered by cloud, ranging from 0/8 (clear sky) to 8/8 (completely overcast).' },
        ],
      },
      {
        id: 'iggeog-1-2-c2',
        title: 'Equatorial Tropical Rainforests: Structure, Adaptations & Deforestation',
        summary: 'Low pressure at the Equator drives daily convectional rainfall (>2,000 mm/yr) and constant 26–28 °C warmth, sustaining four stratified forest layers and rapid nutrient cycling.',
        bullets: [
          '**Four vertical layers** - **emergents** (40–50 m giants catching full sun), **canopy** (dense 25–35 m umbrella holding ~80% of biodiversity), **under-canopy**, and dark humid **shrub/forest floor**.',
          '**Plant adaptations** - **buttress roots** anchor tall shallow-rooted trees; **drip-tip leaves** shed heavy downpours to prevent fungal rot; **lianas** climb trunks toward sunlight; **epiphytes** perch high on branches absorbing rainwater.',
          '**Fragile nutrient cycle & deforestation** - warm wet conditions decompose litter rapidly, so most nutrients sit in **biomass** rather than soil; clearing forest exposes thin **latosol soil** to rapid **leaching** and erosion.',
        ],
        subsections: [
          {
            heading: 'Case Study: Amazon Rainforest, Brazil',
            bullets: [
              '**Drivers & impacts** - cattle ranching (~70–80%), commercial soy farming, logging, hydroelectric dams (Belo Monte), and mining (Carajás) cause biodiversity loss, indigenous displacement, soil leaching, and global carbon emissions.',
            ],
            exampleHeading: 'Amazon Deforestation & Sustainable Management',
            examples: [
              'Local & global impacts: Losing transpiration reduces local rainfall by up to 20–30%, while burning/clearing releases stored CO₂ accelerating global climate change.',
              'Sustainable management: Selective logging (removing only mature trees), debt-for-nature swaps, ecotourism, and protected indigenous reserves (e.g. Xingu Park).',
            ],
          },
        ],
        glossaryPills: [
          { term: 'leaching', definition: 'The washing downward of soluble soil minerals by heavy percolating rainwater, leaving tropical latosol soils infertile once vegetation is cleared.' },
          { term: 'buttress roots', definition: 'Wide, above-ground flared roots providing structural stability for tall rainforest trees rooted in shallow nutrient-poor soil.' },
        ],
      },
      {
        id: 'iggeog-1-2-c3',
        title: 'Hot Deserts: Subtropical High Pressure, Adaptations & Desertification',
        summary: 'Hot deserts lie around 15°–30° N/S under descending dry air of the Hadley Cell, creating <250 mm annual rainfall, extreme diurnal temperature ranges, and specialised xerophytes.',
        bullets: [
          '**Why hot deserts are dry** - air warmed at the Equator rises, cools, rains heavily, and then **sinks at ~30° N/S (subtropical high pressure)**; sinking air warms by compression, stopping cloud condensation. Cold offshore ocean currents (e.g. Benguela current off the Namib) and rain shadows also starve moisture.',
          '**Extreme diurnal range** - cloudless skies let intense heat scorch the ground by day (45 °C+) and escape rapidly to space at night (near 0 °C).',
          '**Plant & animal adaptations** - **xerophytes** (cacti/acacia) use **waxy cuticles** and **spines** (cutting transpiration & deterring grazers), succulent water-storing stems, and deep taproots/wide shallow roots; **camels** store fat in humps, have wide padded feet, and slit nostrils.',
        ],
        subsections: [
          {
            heading: 'Case Study: Thar / Sahara Desert & Sahel Desertification',
            bullets: [
              '**Causes & solutions** - overgrazing, over-cultivation, fuelwood removal, and climate drought degrade marginal soils; reversed via **stone lines (bunds)** trapping runoff, **drip irrigation**, and **Great Green Wall** tree-planting.',
            ],
            exampleHeading: 'Cambridge 0460 Hot Desert Examples',
            examples: [
              'Namib Desert (SW Africa): Cold Benguela ocean current cools onshore air so moisture condenses into coastal fog rather than rainfall, leaving <50 mm/yr rain.',
              'Sahel region (south of Sahara): Magic stones (low contour bunds in Burkina Faso) slow surface runoff, increase infiltration, and raise millet yields by up to 50%.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'xerophyte', definition: 'A plant structurally adapted to survive extreme aridity through waxy surfaces, spines instead of leaves, succulent stems, or extensive root systems.' },
        ],
        memoryAid: 'Equatorial Low = Rising Air = Clouds & Rainforest; 30° Subtropical High = Sinking Air = Clear Skies & Hot Desert!',
        commonMistake: 'NEVER claim tropical rainforest soils are naturally deep and fertile — the forest thrives ONLY because warm, wet decay recycles nutrients rapidly through biomass; once trees are cleared, leaching strips the soil fast!',
      },
    ],
    keyTerms: [
      { term: 'Stevenson screen', definition: 'Elevated, white, slatted shelter protecting thermometers and hygrometers for accurate air readings.' },
      { term: 'Leaching', definition: 'Downward removal of dissolved soil nutrients by heavy percolating rainwater.' },
      { term: 'Buttress roots', definition: 'Wide flared base roots stabilising tall rainforest trees in shallow tropical soils.' },
      { term: 'Xerophyte', definition: 'Plant specially adapted to conserve moisture in arid hot desert climates.' },
    ],
    checklistPoints: [
      'Explain Stevenson screen design features, proper weather instrument siting, and okta/climate controls',
      'Link equatorial low pressure to tropical rainforest stratification, adaptations, rapid nutrient cycling, and Amazon management',
      'Explain Hadley Cell high-pressure aridity, xerophyte/animal adaptations, and desertification solutions in arid zones',
    ],
  },

  'iggeog-2-1': {
    subtopicId: 'iggeog-2-1',
    subtopicCode: '2.1',
    subtopicTitle: 'River Processes, Landforms & Flood Management',
    readingMinutes: 10,
    videoTitle: 'River Processes, Waterfalls, Meanders, Floodplains & Flood Defences',
    youtubeId: '8rFaFK2d018',
    videoChannel: 'Internet Geography',
    videoDuration: '9:20',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 2.2 Rivers',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Drainage Basin System, Erosion & Transportation Processes', cardId: 'iggeog-2-1-c1' },
      { time: '3:05', seconds: 185, label: 'Upper, Middle & Lower Course Landforms (Waterfalls to Deltas)', cardId: 'iggeog-2-1-c2' },
      { time: '6:15', seconds: 375, label: 'Storm Hydrographs, Flooding Causes & Hard vs Soft Engineering', cardId: 'iggeog-2-1-c3' },
    ],
    cards: [
      {
        id: 'iggeog-2-1-c1',
        title: 'Drainage Basins, River Erosion & Transportation',
        summary: 'Rivers work as open drainage-basin systems whose discharge, velocity, and sediment load transform the valley from steep V-shaped mountains to wide coastal deltas.',
        bullets: [
          '**Drainage basin key features** - **watershed** (highland boundary separating basins), **confluence** (where a tributary joins the main channel), **interception**, **infiltration**, **throughflow**, **groundwater flow**, and **surface runoff (overland flow)**.',
          '**Four erosion processes** - **hydraulic action** (sheer water force & trapped air compressing bed/bank cracks), **abrasion / corrasion** (sandpaper grinding by carried stones), **attrition** (rocks colliding in transit, becoming smaller & rounder), **solution / corrosion** (weak acids dissolving soluble rocks like limestone).',
          '**Four transportation processes** - **traction** (heavy boulders rolled along bed), **saltation** (pebbles bouncing/hopping), **suspension** (fine silt/clay carried inside water), **solution** (dissolved minerals invisible in flow).',
        ],
        subsections: [
          {
            heading: 'Bradshaw Model Changes Downstream',
            bullets: [
              '**Upstream → Downstream** - gradient falls and sediment particle size shrinks, while **discharge, channel width, depth, velocity**, and total load all **increase** downstream (lower wetted-perimeter friction ratio makes lower courses flow faster!).',
            ],
            exampleHeading: 'Worked Exam Distinctions',
            examples: [
              'Abrasion vs Attrition: Abrasion erodes the river **bed and banks**; attrition ONLY erodes the **carried rocks themselves** as they bash together.',
              'Why is a lower-course river often faster than an upper-course mountain stream? Despite a gentler slope, the deep, smooth, wide channel has proportionally far less bed/bank friction.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'hydraulic action', definition: 'Erosion caused by the sheer force of rushing water forcing air into cracks in the river bank or bed, weakening and breaking rock apart.' },
          { term: 'abrasion', definition: 'Sandpaper-like scraping and wearing away of the river channel bed and banks by sediment load carried in the current.' },
        ],
      },
      {
        id: 'iggeog-2-1-c2',
        title: 'Formation of River Landforms (Upper, Middle & Lower Course)',
        summary: 'Every Cambridge 0460 landform answer must give a clear step-by-step causal sequence naming exact rock types, erosion processes, and deposition triggers.',
        bullets: [
          '**Upper course (vertical erosion)** - **V-shaped valleys & interlocking spurs**; **waterfalls & gorges** form where resistant caprock overlies softer rock → hydraulic action & abrasion undercut soft rock to carve a **plunge pool** and overhanging caprock → unsupported caprock collapses → waterfall retreats upstream leaving a steep-sided **gorge** (e.g. High Force, River Tees).',
          '**Middle course (lateral erosion & deposition)** - **meanders & ox-bow lakes**: faster helicoidal flow on the **outside bend** erodes a steep **river cliff**, while slower shallow flow on the **inside bend** deposits a **slip-off slope (point bar)**; continued erosion narrows the meander neck until a flood cuts straight through, sealing off an **ox-bow lake**.',
          '**Lower course (deposition)** - **floodplains & levées** build when flooding water loses velocity outside the channel, dropping heaviest coarse silt right beside the banks (raised **levées**) and finer alluvium across the flat **floodplain**; **deltas** form at low-tide river mouths where flocculation and slack water drop sediment into **distributaries** (e.g. Nile & Ganges–Brahmaputra deltas).',
        ],
        subsections: [
          {
            heading: 'Step-by-Step Landform Sequences (4-Mark Standard)',
            bullets: [
              '**Sequence discipline** - examiners mark landforms strictly in causal order; skipping "undercutting → overhang → collapse → retreat" drops marks!',
            ],
            exampleHeading: 'Cambridge 0460 Named River Landform Examples',
            examples: [
              'River Tees (NE England): High Force Waterfall (hard Whin Sill dolerite over soft sandstone/shale) retreating to form a 700 m gorge; prominent meanders around Yarm.',
              'Ganges–Brahmaputra Delta (Bangladesh): One of the world’s largest fertile arcuate deltas supporting dense rice farming via nutrient-rich seasonal alluvium, yet highly flood-prone.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'ox-bow lake', definition: 'A U-shaped lake formed when lateral erosion breaks through a narrow meander neck during high discharge and deposition seals off the abandoned bend.' },
          { term: 'levée', definition: 'Naturally raised bank of coarse sediment deposited alongside a lower-course river channel after repeated flood events.' },
        ],
      },
      {
        id: 'iggeog-2-1-c3',
        title: 'Storm Hydrographs, Flooding & Hard vs Soft Flood Management',
        summary: 'Flashy hydrographs with short lag times trigger severe floods when impermeable urban surfaces, deforestation, or intense monsoon rain overwhelm channel capacity.',
        bullets: [
          '**Storm hydrograph anatomy** - **lag time** is the gap between **peak rainfall** and **peak discharge**; a **flashy hydrograph** has a steep rising limb and short lag time (caused by impermeable clay/granite, steep slopes, saturated soil, deforestation, and tarmac urban drainage).',
          '**Hard engineering** - **dams & reservoirs** (regulate discharge & generate HEP, e.g. Three Gorges Dam, yet displace people and starve downstream silt), **channel straightening & embankments** (speed water past a town, but increase flood risk downstream).',
          '**Soft engineering** - **afforestation** (trees boost interception & infiltration), **floodplain zoning** (keep housing off high-risk zones, leaving parks/playing fields), **washlands / wetland restoration**, and **early flood warnings** (cost-effective & sustainable).',
        ],
        subsections: [
          {
            heading: 'Case Study: River Flooding in Bangladesh (LIC) vs Boscastle / River Severn (HIC)',
            bullets: [
              '**Explain BOTH physical & human causes** - never mention only heavy rain; link monsoon rain + Himalayan snowmelt + deforestation + rapid urbanisation!',
            ],
            exampleHeading: 'Cambridge 0460 Flood Case Studies',
            examples: [
              'Bangladesh (1998 & 2022 floods): 80% of country sits on low-lying Ganges–Brahmaputra–Meghna floodplain; monsoon rain + snowmelt + upstream deforestation inundated up to two-thirds of land, destroying rice crops & causing waterborne disease; managed via raised flood shelters, flood forecasting, and embankments.',
              'River Tees / Jubilee River (UK): Combines flood relief channels, Tees Barrage, and floodplain zoning to protect urban homes while preserving upstream wetlands.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'lag time', definition: 'The time delay on a storm hydrograph between peak rainfall intensity and peak river discharge.' },
        ],
        memoryAid: 'River Erosion = HAAS (Hydraulic action, Abrasion, Attrition, Solution); Transport = TSSS (Traction, Saltation, Suspension, Solution)!',
        commonMistake: 'NEVER say a river moves fastest in the steep upper course — water is actually faster in the wide, deep lower course because friction against the wetted perimeter is proportionally much smaller!',
      },
    ],
    keyTerms: [
      { term: 'Hydraulic action', definition: 'Force of moving water compressing trapped air inside rock cracks to fracture banks and bed.' },
      { term: 'Abrasion', definition: 'Grinding and scraping of channel bed and banks by transported rock fragments.' },
      { term: 'Ox-bow lake', definition: 'Cut-off U-shaped river bend formed when a river breaches a narrow meander neck.' },
      { term: 'Lag time', definition: 'Delay between peak rainfall and peak river discharge on a storm hydrograph.' },
    ],
    checklistPoints: [
      'Distinguish all four river erosion processes, four transport processes, and Bradshaw model downstream changes',
      'Explain step-by-step formation of waterfalls/gorges, meanders/ox-bow lakes, floodplains, levées, and deltas',
      'Interpret storm hydrographs and evaluate hard vs soft river flood management with named case studies',
    ],
  },

  'iggeog-2-2': {
    subtopicId: 'iggeog-2-2',
    subtopicCode: '2.2',
    subtopicTitle: 'Coastal Erosion, Deposition, Landforms & Defences',
    readingMinutes: 10,
    videoTitle: 'Coastal Waves, Longshore Drift, Landforms & Coastal Management',
    youtubeId: '-iKwoZu0MzM',
    videoChannel: 'Internet Geography',
    videoDuration: '9:00',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 2.3 Coasts',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Constructive vs Destructive Waves & Longshore Drift', cardId: 'iggeog-2-2-c1' },
      { time: '3:00', seconds: 180, label: 'Erosional & Depositional Landforms (Headlands, Stacks, Spits & Coral Reefs)', cardId: 'iggeog-2-2-c2' },
      { time: '6:00', seconds: 360, label: 'Hard vs Soft Coastal Defences & Holderness Coast Case Study', cardId: 'iggeog-2-2-c3' },
    ],
    cards: [
      {
        id: 'iggeog-2-2-c1',
        title: 'Constructive vs Destructive Waves & Longshore Drift',
        summary: 'Wave energy—controlled by wind speed, duration, and fetch—determines whether waves build sandy beaches or tear back cliffs while shifting sediment downcoast.',
        bullets: [
          '**Constructive waves** - low height (<1 m), long wavelength, low frequency (6–8/min), **strong swash & weak backwash** → deposit sand and build wide, gentle beaches.',
          '**Destructive waves** - tall (>1 m), short steep wavelength, high frequency (10–14/min), **weak swash & strong backwash** → comb sediment down beaches and erode cliff bases via hydraulic action & abrasion.',
          '**Longshore drift (LSD)** - prevailing winds drive **swash** obliquely up the beach at an angle (e.g. 45°), while gravity pulls **backwash** straight back down at **90°** to the shoreline, transporting sediment in a continuous zigzag along the coast.',
        ],
        subsections: [
          {
            heading: 'Drawing & Explaining Longshore Drift for Full Marks',
            bullets: [
              '**Three mandatory phrases** - (1) prevailing wind angle driving oblique swash; (2) gravity pulling backwash straight down at right angles; (3) net zigzag movement along the coastline.',
            ],
            exampleHeading: 'Cambridge 0460 Wave & LSD Checks',
            examples: [
              'Fetch impact: SW winds blowing across ~6,000 km of the Atlantic Ocean generate far larger destructive waves hitting Cornwall than short-fetch waves across the sheltered English Channel.',
              'Sand movement proof: Sediment piles up steeply on the UPDRIFT side of wooden groynes while the DOWNDRIFT side sits visibly lower.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'fetch', definition: 'The uninterrupted distance of open water over which wind blows to generate waves — longer fetch produces higher wave energy.' },
          { term: 'longshore drift', definition: 'Zigzag transport of beach sediment along a coastline caused by angled swash driven by prevailing wind and perpendicular backwash driven by gravity.' },
        ],
      },
      {
        id: 'iggeog-2-2-c2',
        title: 'Coastal Erosional, Depositional & Biological Landforms',
        summary: 'Concordant/discordant geology sculpts headlands, bays, and arches; longshore drift builds spits and bars; warm shallow tropical seas nurture coral reefs and mangroves.',
        bullets: [
          '**Headlands, bays & wave-cut platforms** - on **discordant coasts**, alternating bands of soft clay and resistant chalk/limestone erode at different rates (**differential erosion**) creating sheltered **bays** and projecting **headlands**; undercutting at high-tide base carves a **wave-cut notch** until cliff overhang collapses and retreats, leaving a rocky **wave-cut platform**.',
          '**Crack → Cave → Arch → Stack → Stump** - hydraulic action & abrasion widen a headland fault into a **cave**, break through into an **arch** (e.g. Durdle Door), collapse the arch roof via weathering/gravity to leave an isolated **stack** (e.g. Old Harry), eroded down into a **stump**.',
          '**Spits, bars & sand dunes** - where a coastline changes direction at an estuary, longshore drift deposits a narrow finger of sand (**spit**); secondary wind shifts curve its tip (**recurved hook**), sheltering calm mudflats that evolve into a **salt marsh** behind it; a spit stretching completely across a bay forms a **bar** trapping a **lagoon**.',
          '**Coral reefs & mangroves (0460 essential!)** - **coral reefs** require warm clear water (**23–25 °C**), shallow sunlight (<25 m), normal salinity, and gentle oxygenation (fringing, barrier, atoll); **mangrove swamps** trap silt with tangled prop roots and absorb storm-surge energy.',
        ],
        subsections: [
          {
            heading: 'Named Coastal Landform Case Examples',
            bullets: [
              '**Pair erosion with biology** - Cambridge 0460 explicitly tests tropical coastal ecosystems (coral reefs & mangroves) alongside temperate cliffs and spits.',
            ],
            exampleHeading: 'Cambridge 0460 Landform Examples',
            examples: [
              'Spurn Head (Holderness, UK): A 5.5 km curved sand-and-shingle spit extending across the Humber Estuary mouth, shielding mudflats and salt marshes behind it.',
              'Great Barrier Reef (Australia) & Sundarbans Mangroves (Bangladesh/India): Provide vital fish nurseries, ecotourism revenue, and natural wave-energy buffers now threatened by coral bleaching and shrimp-farm clearance.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'wave-cut platform', definition: 'A flat, gently sloping rocky ledge left at the cliff base after repeated wave-cut notch formation, cliff collapse, and retreat.' },
          { term: 'spit', definition: 'An elongated ridge of sand or shingle attached to land at one end and extending across a bay or estuary via longshore drift, often with a recurved hook.' },
        ],
      },
      {
        id: 'iggeog-2-2-c3',
        title: 'Coastal Management: Hard Engineering, Soft Engineering & Conflicts',
        summary: 'Protecting one stretch of eroding coast frequently starves downdrift beaches of sediment — creating sharp economic and environmental conflicts.',
        bullets: [
          '**Hard engineering** - **sea walls** (curved concrete reflecting wave energy; effective 30–50 yrs, very expensive ~£5,000–£10,000/m), **rock armour / rip-rap** (large granite boulders absorbing energy), **groynes** (wooden/rock fences trapping longshore drift to widen beaches, yet causing **terminal groyne syndrome** downdrift), **gabions** (wire rock cages).',
          '**Soft engineering** - **beach nourishment** (pumping offshore sand to rebuild natural wave buffer; looks natural but needs repeated replenishment), **dune regeneration**, and **managed retreat (coastal realignment)** letting low-value farmland flood into natural salt marsh.',
        ],
        subsections: [
          {
            heading: 'Case Study: Holderness Coast, Yorkshire (Europe’s Fastest-Eroding Coast)',
            bullets: [
              '**Why it erodes ~2 m/year** - soft, unconsolidated **boulder clay** cliffs + long North Sea fetch + narrow beaches starved by defences.',
            ],
            exampleHeading: 'Holderness Management Successes & Conflicts',
            examples: [
              'Mappleton (1991): £2 million rock groynes and boulder rip-rap successfully protected the village and B1242 road by trapping a wide sandy beach.',
              'Downdrift conflict at Cowden & Great Cowden: Blocking southward longshore drift starved downdrift beaches, accelerating cliff retreat to ~4–10 m/yr and destroying farms and holiday parks.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'terminal groyne syndrome', definition: 'Accelerated coastal erosion immediately downdrift of the final groyne because updrift groynes have trapped and starved the natural longshore sediment supply.' },
        ],
        memoryAid: 'C-C-A-S-S = Crack → Cave → Arch → Stack → Stump; Constructive = Strong Swash (builds); Destructive = Big Backwash (breaks)!',
        commonMistake: 'NEVER state that groynes directly stop cliffs from being hit by waves without explaining the mechanism — groynes trap longshore drift to build a WIDER BEACH, and it is the wider beach that absorbs wave energy before reaching the cliff!',
      },
    ],
    keyTerms: [
      { term: 'Fetch', definition: 'Uninterrupted expanse of open sea over which wind blows to build wave energy.' },
      { term: 'Longshore drift', definition: 'Zigzag movement of beach sediment along a shoreline via angled swash and perpendicular backwash.' },
      { term: 'Wave-cut platform', definition: 'Flat rocky foreshore ledge revealed as a coastal cliff repeatedly collapses and retreats.' },
      { term: 'Spit', definition: 'Long finger of deposited sand extending from a bend in the coastline across a bay or estuary.' },
    ],
    checklistPoints: [
      'Compare constructive vs destructive waves and diagram/explain the zigzag mechanics of longshore drift',
      'Trace formation sequences of wave-cut platforms, caves–arches–stacks, spits/bars, coral reefs, and mangroves',
      'Evaluate hard vs soft coastal engineering and explain downdrift conflicts using the Holderness Coast case study',
    ],
  },

  'iggeog-3-1': {
    subtopicId: 'iggeog-3-1',
    subtopicCode: '3.1',
    subtopicTitle: 'Population Dynamics, Demographic Transition & Migration',
    readingMinutes: 10,
    videoTitle: 'Demographic Transition Model, Population Pyramids & Migration',
    youtubeId: 'm0sc8-F2PmI',
    videoChannel: 'Internet Geography',
    videoDuration: '9:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 1.1–1.4 Population & Migration',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Natural Change, Demographic Transition Model & Population Pyramids', cardId: 'iggeog-3-1-c1' },
      { time: '3:05', seconds: 185, label: 'Youthful vs Ageing Populations & Population Policies', cardId: 'iggeog-3-1-c2' },
      { time: '6:15', seconds: 375, label: 'International & Internal Migration: Push–Pull Factors & Impacts', cardId: 'iggeog-3-1-c3' },
    ],
    cards: [
      {
        id: 'iggeog-3-1-c1',
        title: 'Population Growth, Demographic Transition Model & Pyramids',
        summary: 'Population change depends on Natural Change (Birth Rate − Death Rate) plus Net Migration — tracked across the five stages of the Demographic Transition Model (DTM).',
        bullets: [
          '**Natural increase formula** - $\\text{Natural Increase} = \\text{Birth Rate} - \\text{Death Rate}$ (per 1,000 people per year).',
          '**DTM Stages 1–5** - **Stage 1** (remote Amazon tribes: high fluctuating BR & DR); **Stage 2** (Niger/Afghanistan: high BR, rapidly falling DR due to clean water/vaccines → rapid population boom); **Stage 3** (India/Brazil: falling BR via female education, urbanisation & contraception, low DR); **Stage 4** (UK/USA: low stable BR & DR); **Stage 5** (Japan/Germany: BR drops *below* DR → natural population decline).',
          '**Reading population pyramids** - **wide base + concave sides** = high BR, youthful population (Stage 2); **straight column** = low stable growth (Stage 4); **narrowing base + broad top** = low fertility & ageing population (Stage 5).',
        ],
        subsections: [
          {
            heading: 'Dependency Ratio & Over- vs Under-Population',
            bullets: [
              '**Dependency ratio** - ratio of non-working dependents (ages 0–14 and 65+) to economically active workers (ages 15–64); both very youthful LICs and rapidly ageing HICs face high dependency burdens.',
            ],
            exampleHeading: 'Cambridge 0460 Over- vs Under-Population Examples',
            examples: [
              'Over-populated: Bangladesh (~170 million on a small delta) faces land scarcity, traffic congestion, and housing pressure relative to available resources.',
              'Under-populated: Australia (vast iron ore, gas, and farmland relative to ~26 million residents) faces skilled labour shortages and high infrastructure costs per capita.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Demographic Transition Model', definition: 'A five-stage framework showing how birth rates, death rates, and total population evolve as a country develops economically.' },
          { term: 'dependency ratio', definition: 'The proportion of economically dependent people (under 15 and 65+) compared with the working-age population (15–64).' },
        ],
      },
      {
        id: 'iggeog-3-1-c2',
        title: 'Youthful vs Ageing Populations & Pro-/Anti-Natalist Policies',
        summary: 'Governments use anti-natalist policies to curb unsustainable growth and pro-natalist policies to counter shrinking workforces and rising pension costs.',
        bullets: [
          '**High natural increase (Niger — fertility ~6.7 births/woman)** - causes: farm child labour, high infant mortality, early marriage, limited contraception; impacts: overcrowded schools/hospitals, youth unemployment, food shortages; solution: girls’ secondary schooling & family planning clinics.',
          '**Ageing population (Japan — >29% aged 65+)** - causes: high life expectancy (~84 yrs) + ultra-low fertility (~1.2); impacts: soaring healthcare & state pension bills, shrinking tax base, labour shortages, closed rural schools.',
          '**Policies** - **Anti-natalist**: China’s One-Child Policy (1979–2015) averted ~400m births but created severe gender imbalance and a "4-2-1" ageing crisis (now shifted to Three-Child Policy). **Pro-natalist**: Singapore’s Baby Bonus cash grants, subsidised childcare, and extended parental leave.',
        ],
        subsections: [
          {
            heading: 'Evaluating Policy Trade-Offs (7-Mark Case Study Focus)',
            bullets: [
              '**Balanced evaluation** - always note *unintended consequences* (e.g. China’s ageing workforce; Singapore’s fertility remaining below 2.1 replacement rate despite generous grants because housing & career costs stay high).',
            ],
            exampleHeading: 'Cambridge 0460 Population Case Studies',
            examples: [
              'Japan (Ageing HIC): Responds by raising retirement age to 65–70, investing in elder-care robotics, encouraging female workforce participation, and selectively admitting foreign care workers.',
              'Niger (Rapid Growth LIC): Over 50% of population is under 18, putting intense pressure on Sahel farmland, clean water, and primary schooling.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'pro-natalist policy', definition: 'Government incentives (tax breaks, baby bonuses, paid leave, childcare subsidies) designed to encourage families to have more children.' },
          { term: 'anti-natalist policy', definition: 'Government measures aiming to lower birth rates through family planning access, education, or limits/fines on family size.' },
        ],
      },
      {
        id: 'iggeog-3-1-c3',
        title: 'Migration: Types, Push–Pull Factors & Origin vs Destination Impacts',
        summary: 'Migration redistributes labour, skills, and remittances — creating distinct positive and negative impacts for BOTH origin (source) and destination (host) countries.',
        bullets: [
          '**Voluntary vs forced migration** - voluntary economic migrants seek higher wages/education; **forced migrants / refugees** flee conflict, persecution, or climate disasters (e.g. Syrian refugees).',
          '**Lee’s push–pull model** - **push factors** drive people out (unemployment, low wages, drought, crime); **pull factors** attract them (jobs, higher living standards, safety, family networks); **intervening obstacles** (visas, border walls, cost, language) filter who moves.',
          '**Origin vs destination impacts** - **Origin**: gains **remittances** and reduced unemployment, yet loses skilled young adults (**brain drain**) and splits families. **Destination**: fills labour shortages (farming, healthcare, construction), boosts tax revenue and cultural diversity, yet can strain local housing/schools or spark social tension.',
        ],
        subsections: [
          {
            heading: 'Case Study: Mexico to USA International Migration',
            bullets: [
              '**Specific figures** - over 10 million Mexican-born residents live in the USA; Mexico receives >$60 billion/yr in remittances (~4% of GDP).',
            ],
            exampleHeading: 'Mexico–USA Push, Pull & Impacts',
            examples: [
              'Push (Mexico): Rural poverty, lower average wages, and gang violence in parts of northern/central Mexico; Pull (USA): Higher wages, established Hispanic communities, and agricultural/service jobs.',
              'Impacts: US agriculture and hospitality gain vital labour while border states face policing/school funding debates; rural Mexican villages receive vital remittance income for roofs/clinics yet suffer abandoned farmland and ageing villages.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'remittances', definition: 'Money earned by migrants abroad and sent back home to support families and stimulate local origin economies.' },
          { term: 'brain drain', definition: 'The emigration of highly educated or skilled workers (e.g. doctors, engineers) from an origin country, slowing its domestic development.' },
        ],
        memoryAid: 'DTM Stage 2 = Death Rate Drops First (boom!); Stage 3 = Birth Rate Follows (education & contraception); Stage 5 = Decline!',
        commonMistake: 'NEVER confuse high population DENSITY with OVER-POPULATION — Singapore has ultra-high density yet high living standards because its resources and economy comfortably support its population!',
      },
    ],
    keyTerms: [
      { term: 'Demographic Transition Model', definition: 'Five-stage model charting changes in birth rate, death rate, and population growth during development.' },
      { term: 'Dependency ratio', definition: 'Ratio of young (0–14) and elderly (65+) dependents to working-age adults (15–64).' },
      { term: 'Remittances', definition: 'Money sent back to families in an origin country by migrants working abroad.' },
      { term: 'Brain drain', definition: 'Loss of educated, skilled professionals from a country through outward migration.' },
    ],
    checklistPoints: [
      'Interpret all five stages of the Demographic Transition Model, population pyramids, and dependency ratios',
      'Compare challenges and policies for youthful (Niger/China) vs ageing (Japan/Singapore) populations',
      'Analyse push–pull factors, intervening obstacles, and balanced origin/destination migration impacts (Mexico–USA)',
    ],
  },

  'iggeog-3-2': {
    subtopicId: 'iggeog-3-2',
    subtopicCode: '3.2',
    subtopicTitle: 'Urbanisation, Land-Use Models & Sustainable Cities',
    readingMinutes: 10,
    videoTitle: 'Urbanisation, Land-Use Models, Squatter Settlements & Sustainable Cities',
    youtubeId: 'sCmV9fZRmpU',
    videoChannel: 'Internet Geography',
    videoDuration: '9:05',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 1.5–1.7 Settlements & Urbanisation',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Settlement Hierarchy, Sphere of Influence & Urban Land-Use Models', cardId: 'iggeog-3-2-c1' },
      { time: '3:00', seconds: 180, label: 'Rapid Urbanisation & Squatter Settlements (Rio de Janeiro / Mumbai)', cardId: 'iggeog-3-2-c2' },
      { time: '6:05', seconds: 365, label: 'Urban Problems, Congestion & Sustainable Cities (Curitiba)', cardId: 'iggeog-3-2-c3' },
    ],
    cards: [
      {
        id: 'iggeog-3-2-c1',
        title: 'Settlement Hierarchy, Services & Urban Land-Use Models',
        summary: 'Larger settlements offer high-order comparison goods with wide spheres of influence, while bid-rent land values sort cities into distinct functional zones.',
        bullets: [
          '**Settlement hierarchy & services** - isolated dwelling → hamlet → village → town → city → conurbation/megacity; **low-order convenience goods** (bread, milk) have a small **threshold population** and tiny **range**, whereas **high-order comparison goods** (hospitals, universities, designer boutiques) demand a huge threshold and draw customers across a wide **sphere of influence**.',
          '**Burgess Concentric Ring Model** - **CBD** (highest land value, skyscrapers, transport hub, low resident count) → **Inner City / Zone of Transition** (older terraced housing & former factories) → **Inner Suburbs** → **Outer Suburbs / Commuter Belt** (larger detached houses, lower land cost).',
          '**Hoyt Sector Model** - land uses radiate in **wedges** following transport arteries (railways, rivers, motorways), so heavy industry sticks along canals/rails and high-class housing sits upwind away from industrial smoke.',
        ],
        subsections: [
          {
            heading: 'HIC vs LIC City Structure Contrast',
            bullets: [
              '**Key reversal** - in many **LIC/NEE cities** (e.g. Rio de Janeiro, Lima), wealthy gated apartments cluster close to the CBD or scenic coasts while low-income **informal squatter settlements** occupy steep hillsides or distant urban-rural fringes!',
            ],
            exampleHeading: 'Cambridge 0460 Land-Use & Retail Examples',
            examples: [
              'Why is the CBD densely built upwards? Steep "bid-rent" land values near the accessible city centre make horizontal space too expensive, favouring multi-storey offices and department stores.',
              'Out-of-town retail parks & brownfield vs greenfield sites: Developing brownfield inner-city land recycles derelict plots and protects countryside, though site decontamination costs more than greenfield building.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sphere of influence', definition: 'The geographical catchment area from which people travel to access a settlement’s shops, hospitals, or services.' },
          { term: 'threshold population', definition: 'The minimum number of potential customers required for a shop or service to remain financially viable.' },
        ],
      },
      {
        id: 'iggeog-3-2-c2',
        title: 'Rapid Urbanisation & Informal Squatter Settlements',
        summary: 'Rural-to-urban migration plus youthful natural increase drives explosive megacity growth in LICs/NEEs — outpacing formal housing and creating vibrant yet vulnerable informal settlements.',
        bullets: [
          '**Causes of rapid LIC/NEE urbanisation** - rural push (mechanised farming, drought, lack of schools) + urban pull (factory/service jobs, hospitals) + youthful migrants producing high urban natural increase.',
          '**Squatter settlement characteristics** - illegal land occupation on steep landslide-prone hills or floodplains, self-built makeshift shelters, narrow alleys, illegal electricity taps, lack of piped sewage (cholera/dengue risk), and reliance on **informal economy** jobs (street vending, recycling).',
          '**Three upgrading approaches** - **clearance/bulldozing** (fails because displaced residents simply rebuild elsewhere), **site-and-service schemes** (authorities provide legal plots, water pipes & roads; residents build homes gradually), and **self-help upgrading** (supplying bricks, loans, land titles, and clinics in situ).',
        ],
        subsections: [
          {
            heading: 'Case Study: Rio de Janeiro (Rocinha & Favela Bairro Project)',
            bullets: [
              '**Balanced evaluation** - upgrading improves health, security, and property rights dramatically, yet rents can rise (gentrification) and maintenance funding sometimes lags.',
            ],
            exampleHeading: 'Rio de Janeiro & Dharavi Mumbai Examples',
            examples: [
              'Favela Bairro Project (Rio de Janeiro): Invested ~$1 bn paving steep hillside roads, laying water/sewer pipes, installing the Complexo do Alemão cable car, granting legal land ownership, and training residents in construction — slashing infant mortality and improving school attendance.',
              'Dharavi (Mumbai, India): One of Asia’s densest informal settlements (~1 million people in ~2.1 km²) yet generates ~$1 billion/yr through micro-scale plastic recycling, pottery, and leather workshops.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'site-and-service scheme', definition: 'An urban housing strategy where authorities supply legal plots with basic water, drainage, and road infrastructure so low-income families can build permanent homes incrementally.' },
        ],
      },
      {
        id: 'iggeog-3-2-c3',
        title: 'Urban Challenges & Sustainable City Planning',
        summary: 'Sustainable cities cut congestion, air pollution, and urban sprawl through integrated public transit, green belts, waste recycling, and compact mixed-use neighbourhoods.',
        bullets: [
          '**Major urban challenges** - **traffic congestion** (lost productivity, NOₓ/PM₂.₅ smog, respiratory illness), **urban sprawl** swallowing greenfield farmland, **housing affordability**, and **solid waste / water pollution**.',
          '**Traffic & pollution fixes** - congestion charges (London), dedicated Bus Rapid Transit (BRT), park-and-ride hubs, pedestrianised CBDs, cycle superhighways, and electric metro rail.',
          '**Sustainable urban principles** - compact brownfield redevelopment, mixed-use zoning (work near home), green spaces absorbing floodwater/CO₂, and circular waste-to-energy recycling.',
        ],
        subsections: [
          {
            heading: 'Case Study: Curitiba, Brazil — Global Model of Sustainable Urban Planning',
            bullets: [
              '**Integrated transit + waste + parks** - Curitiba proved that an NEE city can achieve world-class sustainability cheaply without an expensive underground metro.',
            ],
            exampleHeading: 'Curitiba Sustainable City Features',
            examples: [
              'Bus Rapid Transit (BRT): Triple-articulated buses running on dedicated lanes with pre-paid glass "tube stations" carry ~2 million passengers/day (~70% of commuters), cutting car congestion and fuel use ~25% below similar Brazilian cities.',
              'Green Exchange (Cambio Verde) & Flood Parks: Residents in narrow favelas swap sorted recycling bags for fresh fruit, vegetables, and bus tokens (~70% city waste recycled); 28+ flood-meadow parks mowed by municipal sheep prevent river flooding naturally.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'brownfield site', definition: 'Previously developed, often derelict urban land redeveloped for new housing or offices to curb rural sprawl.' },
        ],
        memoryAid: 'Urban Trio = Bid-Rent Models (Burgess Rings vs Hoyt Wedges) + Rio Favela Bairro Upgrading + Curitiba BRT & Green Exchange!',
        commonMistake: 'NEVER claim that bulldozing squatter settlements solves urban poverty — without affordable legal alternatives, displaced families immediately rebuild makeshift housing elsewhere; in-situ self-help and site-and-service schemes are far more sustainable!',
      },
    ],
    keyTerms: [
      { term: 'Sphere of influence', definition: 'Catchment area from which people travel to use a settlement’s shops and services.' },
      { term: 'Threshold population', definition: 'Minimum customer base needed to sustain a particular shop or service.' },
      { term: 'Site-and-service scheme', definition: 'Providing serviced legal plots with water, roads, and drainage for low-income self-build housing.' },
      { term: 'Brownfield site', definition: 'Previously built urban land reused for regeneration instead of building on untouched greenfield countryside.' },
    ],
    checklistPoints: [
      'Apply settlement hierarchy, threshold/range/sphere of influence, and Burgess vs Hoyt land-use models',
      'Explain rapid urbanisation, informal settlement conditions, and upgrading schemes (Rio Favela Bairro / Dharavi)',
      'Evaluate congestion, sprawl, and sustainable urban strategies using the Curitiba case study',
    ],
  },

  'iggeog-4-1': {
    subtopicId: 'iggeog-4-1',
    subtopicCode: '4.1',
    subtopicTitle: 'Development Indicators, Globalisation & Industry',
    readingMinutes: 10,
    videoTitle: 'Development Indicators, HDI, Globalisation, TNCs & Industry',
    youtubeId: 'XXCNEk2wVq8',
    videoChannel: 'Internet Geography',
    videoDuration: '9:25',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 3.1–3.4 Development, Industry & Tourism',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Measuring Development: GNI, HDI & The Development Gap', cardId: 'iggeog-4-1-c1' },
      { time: '3:05', seconds: 185, label: 'Employment Sectors, Clark–Fisher Model & Industrial Location', cardId: 'iggeog-4-1-c2' },
      { time: '6:15', seconds: 375, label: 'Globalisation, TNCs & Tourism Pros/Cons Case Studies', cardId: 'iggeog-4-1-c3' },
    ],
    cards: [
      {
        id: 'iggeog-4-1-c1',
        title: 'Measuring Development: Single Indicators vs Composite HDI',
        summary: 'Economic wealth alone hides inequality — the composite Human Development Index (HDI) captures health, education, and income together.',
        bullets: [
          '**Economic vs social indicators** - **GNI per capita (PPP)** measures average income, yet hides huge wealth gaps between billionaires and slums; **social indicators** (literacy rate, infant mortality rate, life expectancy, doctors per 1,000, access to clean water) measure real quality of life.',
          '**Human Development Index (HDI, 0 to 1)** - combines **three equally weighted dimensions**: (1) **Health** (life expectancy at birth), (2) **Education** (mean & expected years of schooling), and (3) **Standard of living** (GNI per capita at PPP). Norway/Switzerland score >0.95; Chad/Niger score <0.41.',
          '**Causes of the development gap** - physical (landlocked geography, arid climate, tectonic hazards), historical (colonial extraction of raw commodities), and economic/political (debt burdens, unfair trade tariffs, corruption, conflict).',
        ],
        subsections: [
          {
            heading: 'Why HDI Beats GNI Per Capita Alone',
            bullets: [
              '**Exam insight** - oil-rich states can boast very high GNI per capita while lagging in gender equality or rural schooling, whereas Costa Rica or Kerala achieves high life expectancy and literacy on modest income.',
            ],
            exampleHeading: 'Cambridge 0460 Worked Indicator Comparisons',
            examples: [
              'Norway (HDI ~0.96): High life expectancy (~83 yrs), universal schooling, strong welfare redistribution.',
              'Sub-Saharan landlocked LICs (e.g. Niger, HDI ~0.39): Face high transport costs to ocean ports, Sahel drought vulnerability, and reliance on low-value primary commodity exports.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'Human Development Index (HDI)', definition: 'A composite UN measure (0–1) combining life expectancy, years of schooling, and GNI per capita (PPP) to assess overall development.' },
          { term: 'GNI per capita', definition: 'Total income generated by a country’s residents and businesses (including overseas earnings) divided by its total population.' },
        ],
      },
      {
        id: 'iggeog-4-1-c2',
        title: 'Employment Sectors, Clark–Fisher Model & Industrial Location',
        summary: 'As economies industrialise and deindustrialise, workers shift from Primary farming → Secondary manufacturing → Tertiary services → Quaternary R&D.',
        bullets: [
          '**Four economic sectors** - **Primary** (extracting raw materials: farming, mining, fishing), **Secondary** (manufacturing/assembly: steel, textiles, smartphones), **Tertiary** (services: retail, healthcare, tourism, banking), **Quaternary** (high-tech knowledge, software, biotech R&D).',
          '**Clark–Fisher Model** - LICs (e.g. Malawi) remain heavily **Primary**; NEEs (e.g. Vietnam, China, Mexico) surge in **Secondary** manufacturing; post-industrial HICs (e.g. UK, USA) employ >75% in **Tertiary & Quaternary** sectors.',
          '**Industrial location factors** - heavy bulk-reducing industries locate near raw materials/ports; **footloose hi-tech quaternary firms** cluster near top universities, motorways/airports, skilled graduates, and pleasant environments (e.g. **Cambridge Science Park, UK** or **Bangalore IT cluster, India**).',
        ],
        subsections: [
          {
            heading: 'Manufacturing & Hi-Tech Cluster Examples',
            bullets: [
              '**Agglomeration economies** - hi-tech firms cluster together to share talent pools, research labs, venture capital, and specialised suppliers.',
            ],
            exampleHeading: 'Cambridge 0460 Industrial Case Examples',
            examples: [
              'Bangalore ("Silicon Valley of India"): Low English-speaking graduate wages, premier engineering universities (IISc), software technology parks, and time-zone advantage attracted Infosys, Google, and Microsoft.',
              'Toyota / Nissan car assembly (Burnaston/Sunderland, UK): Located near flat greenfield land, motorway/port access for export, government grants, and skilled local labour.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'quaternary sector', definition: 'Knowledge-based industries specialising in information technology, scientific research, biotechnology, and financial consultancy.' },
          { term: 'footloose industry', definition: 'Light or high-tech industry not tied to heavy raw-material sources, free to locate near skilled talent, universities, and transport hubs.' },
        ],
      },
      {
        id: 'iggeog-4-1-c3',
        title: 'Globalisation, TNCs & International Tourism',
        summary: 'Containerisation, air travel, and fibre-optic internet let Transnational Corporations (TNCs) split R&D in HICs and factory assembly in NEEs — bringing investment alongside exploitation risks.',
        bullets: [
          '**TNC advantages for host NEEs** - Foreign Direct Investment (FDI), formal factory jobs, **multiplier effect** boosting local suppliers/shops, upgraded roads/ports, and skills transfer (e.g. **Nike/Samsung in Vietnam** or **Shell in Nigeria**).',
          '**TNC disadvantages for host NEEs** - **profit leakage** repatriated to HIC headquarters, low wages or harsh working hours, environmental pollution (e.g. Niger Delta oil spills), and risk of sudden relocation if wages rise.',
          '**Tourism & ecotourism (Kenya / Jamaica)** - brings vital foreign currency, jobs, and wildlife conservation funding (e.g. Maasai Mara), yet risks seasonal unemployment, **economic leakage** to foreign hotel chains, water shortages, and habitat damage — countered by community-run **ecotourism**.',
        ],
        subsections: [
          {
            heading: 'Balanced 7-Mark TNC & Tourism Evaluation',
            bullets: [
              '**Always argue both sides** - weigh short-term jobs and multiplier gains against profit leakage, labour conditions, and ecological footprints.',
            ],
            exampleHeading: 'Cambridge 0460 TNC & Tourism Case Studies',
            examples: [
              'Nike in Vietnam: Employs >400,000 workers via contracted factories earning above national average rural farm wages and boosting export revenues, yet faces scrutiny over long overtime shifts and corporate profit repatriation to the USA.',
              'Jamaica / Kenya Tourism: Generates ~20–30% of GDP and funds marine/safari parks, while community-owned ecolodges (e.g. Basecamp Maasai Mara) keep wages local and use solar power.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'transnational corporation (TNC)', definition: 'A large company operating factories, supply chains, or offices across multiple countries, usually headquartered in an HIC with manufacturing in NEEs/LICs.' },
          { term: 'multiplier effect', definition: 'The upward spiral where new industrial or tourism jobs generate wages spent in local shops and services, creating further employment and tax revenues.' },
        ],
        memoryAid: 'HDI = Health (life expectancy) + Education (schooling years) + Wealth (GNI per capita PPP)!',
        commonMistake: 'NEVER assume TNCs or mass tourism automatically lift everyone out of poverty — always evaluate ECONOMIC LEAKAGE (profits flowing back to foreign headquarters) and working/environmental conditions!',
      },
    ],
    keyTerms: [
      { term: 'Human Development Index (HDI)', definition: 'Composite index (0–1) uniting life expectancy, education years, and GNI per capita (PPP).' },
      { term: 'Quaternary sector', definition: 'High-tech research, software engineering, and knowledge-intensive industries.' },
      { term: 'Transnational corporation (TNC)', definition: 'Global corporation operating production and retail networks across multiple nations.' },
      { term: 'Multiplier effect', definition: 'Snowball growth in local jobs, spending, and tax revenue sparked by new investment.' },
    ],
    checklistPoints: [
      'Compare single economic/social indicators with composite HDI and explain causes of the global development gap',
      'Apply the Clark–Fisher employment model and explain industrial/hi-tech location factors (Bangalore / Cambridge)',
      'Evaluate TNCs and tourism (multiplier effect vs economic leakage and ecotourism) using named case studies',
    ],
  },

  'iggeog-4-2': {
    subtopicId: 'iggeog-4-2',
    subtopicCode: '4.2',
    subtopicTitle: 'Food, Water & Energy Security + Sustainable Development',
    readingMinutes: 10,
    videoTitle: 'Food, Water & Energy Security and Sustainable Resource Management',
    youtubeId: 'FtTsddEjPNk',
    videoChannel: 'Internet Geography',
    videoDuration: '9:15',
    courseMatchSummary: '4 of 4 sections match Cambridge IGCSE Geography (0460) Theme 3.2, 3.5–3.7 Food, Water, Energy & Environment',
    timestamps: [
      { time: '0:00', seconds: 0, label: 'Farming Systems, Food Insecurity & Increasing Yields Sustainably', cardId: 'iggeog-4-2-c1' },
      { time: '3:05', seconds: 185, label: 'Water Scarcity, Supply Schemes & Conservation', cardId: 'iggeog-4-2-c2' },
      { time: '6:15', seconds: 375, label: 'Energy Mix, Renewables vs Fossil Fuels & Climate Sustainability', cardId: 'iggeog-4-2-c3' },
    ],
    cards: [
      {
        id: 'iggeog-4-2-c1',
        title: 'Agricultural Systems & Solving Food Insecurity',
        summary: 'Food insecurity stems from physical hazards (drought, pests, soil degradation) AND human failures (conflict, poverty, cash-crop export focus) — solved through sustainable yield upgrades.',
        bullets: [
          '**Farming types** - **arable** (crops) vs **pastoral** (livestock) vs **mixed**; **subsistence** (feeding own family) vs **commercial** (profit sale); **intensive** (high inputs/yield per hectare, e.g. rice paddies or Dutch greenhouses) vs **extensive** (low inputs over vast ranches, e.g. Australian cattle).',
          '**Causes of food shortages (e.g. Darfur/South Sudan & Sahel)** - prolonged Sahel drought & locust swarms, civil conflict displacing farmers, soil exhaustion/desertification, poverty preventing seed/fertiliser purchase, and switching staple farmland into export cash crops.',
          '**Sustainable food boosts** - **drip irrigation** (delivers water directly to roots, cutting evaporation ~50%), drought-tolerant crops, **appropriate technology** (stone bunds, biogas, rainwater harvesting), **agroforestry** (trees shading crops & fixing nitrogen), and fair-trade cooperatives.',
        ],
        subsections: [
          {
            heading: 'Case Study: Food Insecurity & Green Revolution Lessons',
            bullets: [
              '**Weigh trade-offs** - High-Yielding Varieties (HYVs) dramatically cut famine in India, yet required expensive chemical fertilisers and heavy groundwater pumping that indebted smallholders and salinised soils.',
            ],
            exampleHeading: 'Cambridge 0460 Food Security Case Examples',
            examples: [
              'Darfur / South Sudan: Civil conflict + erratic rainfall + collapsed transport infrastructure triggered acute famine requiring UN World Food Programme emergency aid alongside long-term drought-resilient sorghum seeds.',
              'Almería / Netherlands vs Kenya Sand Dams: While high-tech hydroponics boosts HIC yields, low-cost community sand dams in Machakos, Kenya store seasonal river water underground evaporation-free, doubling smallholder harvests.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'food security', definition: 'Reliable, year-round physical and economic access to sufficient, safe, and nutritious food to maintain a healthy active life.' },
          { term: 'appropriate technology', definition: 'Affordable, locally maintainable tools and methods (such as drip irrigation, sand dams, or stone bunds) tailored to community skills and budgets.' },
        ],
      },
      {
        id: 'iggeog-4-2-c2',
        title: 'Water Supply, Scarcity & Sustainable Water Management',
        summary: 'Global water consumption is dominated by agriculture (~70%), followed by industry (~20%) and domestic use (~10%) — creating sharp physical and economic water scarcity.',
        bullets: [
          '**Physical vs economic water scarcity** - **physical scarcity** occurs where rainfall/rivers cannot meet demand (e.g. Saudi Arabia, Egypt); **economic scarcity** occurs where water exists physically but poverty/weak governance prevents pipes and treatment plants (e.g. parts of Democratic Republic of Congo & rural Sub-Saharan Africa).',
          '**Large-scale supply projects** - **dams & water-transfer schemes** (e.g. **Lesotho Highlands Water Project** supplying Johannesburg, South Africa; **Three Gorges Dam**, China) and **desalination** (removing salt from seawater in UAE/Saudi Arabia — energy-intensive & leaves toxic hypersaline brine).',
          '**Sustainable water conservation** - fixing leaking municipal pipes, **greywater recycling**, water metering, drip irrigation, and protected watershed forests.',
        ],
        subsections: [
          {
            heading: 'Case Study: Lesotho Highlands Water Project (LHWP)',
            bullets: [
              '**Cross-border transfer trade-offs** - benefits both countries economically yet displaces highland villages and alters downstream river ecosystems.',
            ],
            exampleHeading: 'Cambridge 0460 Water Supply Examples',
            examples: [
              'Lesotho Highlands Water Project: Katse & Mohale dams transfer clean mountain water via tunnels to arid Gauteng/Johannesburg (boosting South African industry) while earning Lesotho vital royalty payments (~$70m+/yr) and hydroelectric power — at the cost of displacing ~20,000–30,000 villagers.',
              'Singapore’s Four National Taps: Combines local catchments, imported water, desalination, and advanced **NEWater** sewage reclamation to achieve long-term urban water resilience.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'desalination', definition: 'Industrial removal of dissolved salts from seawater via reverse osmosis or distillation to create potable freshwater in arid coastal regions.' },
          { term: 'greywater recycling', definition: 'Capturing lightly used wastewater from sinks, showers, and washing machines for toilet flushing or garden irrigation.' },
        ],
      },
      {
        id: 'iggeog-4-2-c3',
        title: 'Energy Security, Renewable Transition & Environmental Sustainability',
        summary: 'Balancing affordable energy security with decarbonisation requires shifting away from finite, carbon-intensive fossil fuels toward renewables, efficiency, and international climate agreements.',
        bullets: [
          '**Non-renewable vs renewable energy** - **fossil fuels** (coal, oil, gas: reliable/high energy density, but finite and major drivers of enhanced greenhouse effect & acid rain); **nuclear** (low operational CO₂ & continuous baseload, yet costly construction & long-lived radioactive waste); **renewables** (solar, wind, HEP, **geothermal**, tidal, biomass: infinite & clean, though wind/solar are intermittent and need battery/grid storage).',
          '**Enhanced greenhouse effect & sustainability** - burning fossil fuels and deforestation raise atmospheric CO₂ and CH₄, trapping outgoing infrared radiation → sea-level rise threatening Maldives/Bangladesh, coral bleaching, and extreme droughts.',
          '**Sustainable development** - *"meeting the needs of the present without compromising the ability of future generations to meet their own needs"* (Brundtland) — integrating **environmental protection, economic viability, and social equity**.',
        ],
        subsections: [
          {
            heading: 'Named Renewable Energy Case Studies',
            bullets: [
              '**Match energy choice to physical geography** - Iceland exploits constructive plate heat; Morocco exploits intense Sahara insolation; Norway/China harness steep mountain rivers.',
            ],
            exampleHeading: 'Cambridge 0460 Energy Case Studies',
            examples: [
              'Iceland (Geothermal & HEP): Nearly 100% renewable electricity and ~90% geothermal district home heating (e.g. Hellisheiði & Nesjavellir plants), slashing imported oil bills and powering aluminium smelters & greenhouses.',
              'Noor–Ouarzazate Solar Complex (Morocco): One of the world’s largest concentrated solar power plants using molten-salt thermal storage to keep generating electricity up to 7 hours after sunset, cutting fossil-fuel import dependence.',
            ],
          },
        ],
        glossaryPills: [
          { term: 'sustainable development', definition: 'Development that meets the economic and social needs of the present generation without depleting resources or degrading ecosystems for future generations.' },
        ],
        memoryAid: 'Water Pie = 70% Agriculture, 20% Industry, 10% Domestic! Sustainability = People + Planet + Profit (Present & Future)!',
        commonMistake: 'NEVER claim nuclear energy is a "renewable" fuel or that solar/wind have zero drawbacks — uranium is finite (non-renewable, though low-carbon), and wind/solar require storage or backup to handle intermittency!',
      },
    ],
    keyTerms: [
      { term: 'Food security', definition: 'Reliable physical and economic access to sufficient nutritious food year-round.' },
      { term: 'Appropriate technology', definition: 'Low-cost, locally maintainable innovations matched to community resources and skills.' },
      { term: 'Desalination', definition: 'Removing salt from seawater to supply freshwater in arid coastal nations.' },
      { term: 'Sustainable development', definition: 'Meeting present human needs without compromising ecological and resource security for future generations.' },
    ],
    checklistPoints: [
      'Classify agricultural systems, diagnose causes of food insecurity, and evaluate sustainable yield strategies',
      'Distinguish physical vs economic water scarcity and evaluate water transfer, desalination, and conservation schemes',
      'Compare fossil fuels, nuclear, and renewables (Iceland geothermal / Morocco solar) within sustainable development goals',
    ],
  },
};

export const IGCSE_GEOGRAPHY_QUIZZES: QuizQuestion[] = [
  // 1.1 Plate Margins, Earthquakes & Volcanoes
  {
    id: 'iggeog-q-1-1-1',
    subtopicId: 'iggeog-1-1',
    type: 'mcq',
    marks: 1,
    diagram: 'tectonic-plate-margins',
    prompt: 'Using the diagram of the three tectonic plate margins, which margin produces powerful earthquakes due to friction between sliding plates WITHOUT volcanic eruptions?',
    options: [
      'Destructive (oceanic–continental) margin',
      'Constructive (divergent) margin',
      'Conservative (transform) margin',
      'Hotspot volcanic margin',
    ],
    correctIndex: 2,
    explanation: 'At conservative margins, plates slide past one another with no subduction or magma rising, so earthquakes occur without volcanoes.',
  },
  {
    id: 'iggeog-q-1-1-2',
    subtopicId: 'iggeog-1-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain WHY the oceanic plate subducts beneath the continental plate at a destructive margin, and state ONE landform created there.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'The oceanic plate subducts because oceanic basalt crust is denser (heavier) than continental granite crust. Landforms created include deep ocean trenches, composite volcanoes, or fold mountains.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Explains oceanic crust is denser/heavier than continental crust',
          requiredKeywordGroups: [
            ['oceanic'],
            ['denser', 'heavier', 'more dense'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Names valid destructive-margin landform (ocean trench, composite volcano, fold mountains)',
          requiredKeywordGroups: [
            ['trench', 'volcano', 'composite', 'fold mountain', 'island arc'],
          ],
        },
      ],
    },
    explanation: 'Density contrast drives subduction, generating ocean trenches, magma chambers, composite volcanoes, and fold mountains.',
  },
  {
    id: 'iggeog-q-1-1-3',
    subtopicId: 'iggeog-1-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each tectonic term to its exact geographical definition:',
    pairs: [
      { left: 'Epicentre', right: 'Surface point directly above an earthquake’s underground rupture' },
      { left: 'Pyroclastic flow', right: 'Fast-moving superheated cloud of volcanic ash, gas, and rock' },
      { left: 'Liquefaction', right: 'Waterlogged loose soils turning liquid-like under seismic shaking' },
      { left: 'Shield volcano', right: 'Broad, gently sloping volcano formed by runny basaltic lava' },
    ],
    explanation: 'Precise tectonic definitions earn rapid AO1 marks across Cambridge 0460 Paper 1.',
  },
  {
    id: 'iggeog-q-1-1-4',
    subtopicId: 'iggeog-1-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the tectonic hazard contrast:',
    segments: ['Earthquakes with a shallow ', ' cause far more violent surface shaking, and farmers continue living on Mount Merapi’s flanks because weathered volcanic ash produces highly ', ' soils.'],
    wordBank: ['focus', 'fertile', 'fetch', 'arable'],
    answers: ['focus', 'fertile'],
    explanation: 'Shallow-focus quakes lose little seismic energy before hitting cities; volcanic ash creates mineral-rich agricultural soil.',
  },
  {
    id: 'iggeog-q-1-1-5',
    subtopicId: 'iggeog-1-1',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO reasons why the 2010 Haiti earthquake (M7.0) caused far more deaths than the 2011 Christchurch earthquake (M6.3):',
    options: [
      'Unreinforced concrete buildings in Port-au-Prince lacked aseismic building codes and collapsed rapidly',
      'Limited emergency services, destroyed medical infrastructure, and poor sanitation triggered secondary cholera outbreaks',
      'Haiti sits on a constructive mid-ocean ridge with shield volcanoes',
      'New Zealand completely prevented the earthquake from happening using tiltmeters',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Human vulnerability—building quality, infrastructure resilience, and medical response—explains the stark LIC vs HIC casualty gap.',
  },

  // 1.2 Weather, Climate, Tropical Rainforests & Hot Deserts
  {
    id: 'iggeog-q-1-2-1',
    subtopicId: 'iggeog-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is a Stevenson screen painted white and mounted 1.25 metres above short grass?',
    options: [
      'To attract rainfall directly into the thermometers',
      'To reflect direct solar heat and prevent ground radiation from artificially inflating air temperature readings',
      'To measure underground soil temperature accurately',
      'To block wind completely so air stays trapped inside',
    ],
    correctIndex: 1,
    explanation: 'White paint reflects solar insolation, slatted sides allow airflow, and grass height prevents ground-heat distortion.',
  },
  {
    id: 'iggeog-q-1-2-2',
    subtopicId: 'iggeog-1-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain WHY hot deserts such as the Sahara form around 15°–30° north and south of the Equator, AND state ONE adaptation of desert xerophyte plants.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Dry air descends at ~30° N/S under the subtropical high-pressure belt of the Hadley Cell; sinking air warms by compression, stopping cloud condensation and rainfall. Xerophyte adaptations include spines instead of leaves to cut transpiration, thick waxy cuticles, succulent water-storing stems, or deep taproots.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Explains descending/sinking air at subtropical high pressure preventing cloud formation/rain',
          requiredKeywordGroups: [
            ['high pressure', 'hadley', 'descend', 'sink'],
            ['warm', 'dry', 'no clouds', 'condens', 'rain'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Names concrete xerophyte adaptation + water-saving function',
          requiredKeywordGroups: [
            ['spine', 'waxy', 'succulent', 'taproot', 'shallow root', 'stomata', 'thick stem'],
            ['transpiration', 'water', 'moisture', 'evaporation', 'store'],
          ],
        },
      ],
    },
    explanation: 'Hadley Cell high pressure creates aridity; xerophytes minimise transpiration and maximise moisture storage.',
  },
  {
    id: 'iggeog-q-1-2-3',
    subtopicId: 'iggeog-1-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the equatorial tropical rainforest statements:',
    segments: ['Tall rainforest trees stay anchored in shallow soil using flared ', ', and once trees are cleared heavy rainfall washes away soil nutrients through ', '.'],
    wordBank: ['buttress roots', 'leaching', 'oktas', 'attrition'],
    answers: ['buttress roots', 'leaching'],
    explanation: 'Buttress roots stabilise giant emergents; clearing the canopy exposes latosol soils to intense leaching.',
  },
  {
    id: 'iggeog-q-1-2-4',
    subtopicId: 'iggeog-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which weather instrument measures wind SPEED, and in which unit is cloud cover recorded on synoptic charts?',
    options: [
      'Barometer; millimetres',
      'Cup anemometer; oktas (eighths of the sky)',
      'Hygrometer; degrees Celsius',
      'Wind vane; hectopascals',
    ],
    correctIndex: 1,
    explanation: 'An anemometer measures wind speed, whereas cloud cover is estimated in oktas from 0/8 to 8/8.',
  },
  {
    id: 'iggeog-q-1-2-5',
    subtopicId: 'iggeog-1-2',
    type: 'mcq',
    marks: 1,
    prompt: 'What is the largest single driver of deforestation in the Brazilian Amazon rainforest?',
    options: [
      'Ski resort construction',
      'Commercial cattle ranching (pasture clearance)',
      'Desalination plants',
      'Geothermal heating pipes',
    ],
    correctIndex: 1,
    explanation: 'Cattle ranching accounts for roughly 70–80% of Amazon deforestation alongside commercial soy farming, logging, and mining.',
  },

  // 2.1 River Processes, Landforms & Flood Management
  {
    id: 'iggeog-q-2-1-1',
    subtopicId: 'iggeog-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which river erosion process involves transported pebbles colliding with EACH OTHER in mid-flow until they become smaller and smoother?',
    options: ['Hydraulic action', 'Abrasion (corrasion)', 'Attrition', 'Solution'],
    correctIndex: 2,
    explanation: 'Attrition wears down carried stones against one another; abrasion scrapes the channel bed and banks.',
  },
  {
    id: 'iggeog-q-2-1-2',
    subtopicId: 'iggeog-2-1',
    type: 'short-answer',
    marks: 3,
    prompt: 'Explain step by step how a waterfall retreats upstream to form a steep-sided gorge.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'A band of resistant hard caprock overlies softer, less resistant rock. Hydraulic action and abrasion erode the softer rock faster, undercutting the hard rock and carving a deep plunge pool. The unsupported overhang of hard caprock collapses under gravity, and repetition causes the waterfall to retreat upstream leaving a steep-sided gorge.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Identifies hard caprock overlying softer less resistant rock',
          requiredKeywordGroups: [
            ['hard', 'resistant', 'caprock'],
            ['soft', 'less resistant'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Describes hydraulic action/abrasion undercutting soft rock & forming a plunge pool',
          requiredKeywordGroups: [
            ['hydraulic', 'abrasion', 'undercut'],
            ['plunge pool', 'overhang'],
          ],
        },
        {
          id: 'mp3',
          markDescription: 'Explains overhang collapse + repeated upstream retreat forming a gorge',
          requiredKeywordGroups: [
            ['collapse', 'falls'],
            ['retreat', 'upstream', 'gorge'],
          ],
        },
      ],
    },
    explanation: 'Follow the exact causal sequence: geology → undercutting + plunge pool → overhang collapse → retreat → gorge.',
  },
  {
    id: 'iggeog-q-2-1-3',
    subtopicId: 'iggeog-2-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each river transportation process to how sediment moves:',
    pairs: [
      { left: 'Traction', right: 'Heavy boulders rolled along the riverbed' },
      { left: 'Saltation', right: 'Small pebbles bouncing and hopping along the bed' },
      { left: 'Suspension', right: 'Fine silt and clay held floating within turbulent water' },
      { left: 'Solution', right: 'Dissolved soluble minerals carried invisibly in water' },
    ],
    explanation: 'Remember TSSS (Traction, Saltation, Suspension, Solution) from heaviest to dissolved load.',
  },
  {
    id: 'iggeog-q-2-1-4',
    subtopicId: 'iggeog-2-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the meander and storm hydrograph rules:',
    segments: ['On a river meander, faster current on the outside bend erodes a steep ', ', while impermeable tarmac surfaces in cities shorten the ', ' on a storm hydrograph and increase flood risk.'],
    wordBank: ['river cliff', 'lag time', 'slip-off slope', 'watershed'],
    answers: ['river cliff', 'lag time'],
    explanation: 'Outside bend = erosion (river cliff); inside bend = deposition (slip-off slope). Urban tarmac speeds runoff and cuts lag time.',
  },
  {
    id: 'iggeog-q-2-1-5',
    subtopicId: 'iggeog-2-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which flood management method is classified as SOFT engineering?',
    options: [
      'Building a concrete hydroelectric dam across the valley',
      'Straightening and lining the channel with concrete walls',
      'Planting woodland upstream (afforestation) and enforcing floodplain zoning',
      'Constructing high concrete embankments along the town centre',
    ],
    correctIndex: 2,
    explanation: 'Soft engineering works with natural basin processes—trees boost interception and zoning keeps housing off high-risk floodplains.',
  },

  // 2.2 Coastal Erosion, Deposition, Landforms & Defences
  {
    id: 'iggeog-q-2-2-1',
    subtopicId: 'iggeog-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which combination correctly describes CONSTRUCTIVE coastal waves?',
    options: [
      'Tall steep waves, high frequency (12–14/min), strong backwash eroding beaches',
      'Low wave height, long wavelength, low frequency (6–8/min), strong swash depositing sand',
      'Caused only by submarine earthquakes',
      'Occur exclusively at conservative plate margins',
    ],
    correctIndex: 1,
    explanation: 'Constructive waves have stronger swash than backwash, pushing sediment up the beach to build gentle profiles.',
  },
  {
    id: 'iggeog-q-2-2-2',
    subtopicId: 'iggeog-2-2',
    type: 'short-answer',
    marks: 3,
    prompt: 'Explain how longshore drift transports sediment along a beach AND how it forms a coastal spit with a salt marsh behind it.',
    rubric: {
      maxMarks: 3,
      modelAnswer: 'Prevailing winds drive swash obliquely up the beach at an angle, while gravity pulls backwash straight down at 90 degrees, moving sand in a zigzag along the coast. Where the coastline changes direction at a bay or estuary, energy drops and sediment deposits outward into a spit; secondary wind shifts curve its tip (recurved hook), sheltering calm water behind where silt accumulates into a salt marsh.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Explains angled swash (prevailing wind) + 90° backwash (gravity) zigzag transport',
          requiredKeywordGroups: [
            ['swash', 'angle', 'prevailing wind'],
            ['backwash', '90', 'right angle', 'gravity', 'zigzag'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Explains coastline bend/estuary causing deposition outward into a spit',
          requiredKeywordGroups: [
            ['bend', 'change', 'direction', 'estuary', 'bay'],
            ['deposit', 'spit', 'finger', 'extends'],
          ],
        },
        {
          id: 'mp3',
          markDescription: 'Notes recurved hook (wind shift) + sheltered calm water trapping silt for salt marsh',
          requiredKeywordGroups: [
            ['hook', 'curve', 'shelter', 'calm'],
            ['salt marsh', 'silt', 'mudflat'],
          ],
        },
      ],
    },
    explanation: 'Link angled swash/perpendicular backwash directly to deposition at a coastal bend and sheltered marsh accumulation.',
  },
  {
    id: 'iggeog-q-2-2-3',
    subtopicId: 'iggeog-2-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the coastal erosion and defence terminology:',
    segments: ['On a headland, erosion widens a cave through to an ', ' whose roof eventually collapses to leave an isolated stack, while groynes trapping beach sand at Mappleton accelerated downdrift erosion through ', '.'],
    wordBank: ['arch', 'terminal groyne syndrome', 'bar', 'ox-bow lake'],
    answers: ['arch', 'terminal groyne syndrome'],
    explanation: 'Headland sequence: Crack → Cave → Arch → Stack → Stump. Starving downdrift beaches triggers terminal groyne syndrome.',
  },
  {
    id: 'iggeog-q-2-2-4',
    subtopicId: 'iggeog-2-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO environmental conditions strictly required for tropical CORAL REEFS to grow healthily:',
    options: [
      'Warm clear seawater between roughly 23 °C and 25 °C',
      'Shallow water (<25 m) so sunlight penetrates for symbiotic algae photosynthesis',
      'Freezing polar currents below 4 °C',
      'Heavy muddy freshwater runoff from large river estuaries',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Coral polyps need warm, clear, shallow, sunlit salty water; muddy sediment chokes polyps and kills reefs.',
  },
  {
    id: 'iggeog-q-2-2-5',
    subtopicId: 'iggeog-2-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How do wooden or rock GROYNES actually protect coastal cliffs from erosion?',
    options: [
      'They physically cover the cliff face like concrete paint',
      'They trap sediment moving via longshore drift to build a wider beach that absorbs incoming wave energy',
      'They pump water out of the sea',
      'They reverse the prevailing wind direction',
    ],
    correctIndex: 1,
    explanation: 'Groynes do not shield the cliff directly—they trap longshore drift to build a sacrificial wave-absorbing beach.',
  },

  // 3.1 Population Dynamics, Demographic Transition & Migration
  {
    id: 'iggeog-q-3-1-1',
    subtopicId: 'iggeog-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'In which stage of the Demographic Transition Model (DTM) do birth rates drop BELOW death rates, causing natural population decline (e.g. Japan)?',
    options: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 5'],
    correctIndex: 3,
    explanation: 'Stage 5 features ultra-low fertility below death rate, producing a narrowing pyramid base and ageing society.',
  },
  {
    id: 'iggeog-q-3-1-2',
    subtopicId: 'iggeog-3-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'State ONE positive impact AND ONE negative impact of international migration (such as Mexico to USA) on the ORIGIN (source) country.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Positive: Migrants send home remittances that raise family incomes, pay for housing/education, and boost the local economy (or unemployment eases). Negative: Out-migration of young educated adults causes brain drain, splits families, and leaves ageing rural villages short of farm labour.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Valid positive origin impact (remittances / reduced unemployment / returning skills)',
          requiredKeywordGroups: [
            ['remittance', 'money sent', 'send money', 'unemployment', 'returning skills', 'income'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Valid negative origin impact (brain drain / family separation / ageing villages / labour loss)',
          requiredKeywordGroups: [
            ['brain drain', 'skilled', 'young', 'family', 'separat', 'ageing', 'abandoned', 'labour shortage'],
          ],
        },
      ],
    },
    explanation: 'Cambridge 0460 frequently distinguishes impacts on the ORIGIN country vs the DESTINATION country—read the prompt carefully!',
  },
  {
    id: 'iggeog-q-3-1-3',
    subtopicId: 'iggeog-3-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each population concept to its correct example or meaning:',
    pairs: [
      { left: 'Stage 2 DTM pyramid', right: 'Wide base and concave sides indicating high birth rate and rapid growth' },
      { left: 'Pro-natalist policy', right: 'Singapore’s Baby Bonus grants and childcare subsidies encouraging births' },
      { left: 'Anti-natalist policy', right: 'China’s former One-Child Policy aiming to curb rapid growth' },
      { left: 'Dependency ratio', right: 'Proportion of young (0–14) and elderly (65+) relative to working-age adults' },
    ],
    explanation: 'Linking models directly to named country examples unlocks top marks.',
  },
  {
    id: 'iggeog-q-3-1-4',
    subtopicId: 'iggeog-3-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the demographic and migration calculations:',
    segments: ['A country’s birth rate minus its death rate equals its ', ', and when skilled doctors or engineers emigrate permanently from an LIC the source country suffers a ', '.'],
    wordBank: ['natural increase', 'brain drain', 'multiplier effect', 'sphere of influence'],
    answers: ['natural increase', 'brain drain'],
    explanation: 'Natural increase excludes migration; losing trained specialists drains origin-country capacity.',
  },
  {
    id: 'iggeog-q-3-1-5',
    subtopicId: 'iggeog-3-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is Singapore NOT classified as "over-populated" despite having one of the highest population densities on Earth?',
    options: [
      'Because its total area is larger than Australia',
      'Because over-population measures population relative to available resources and economic capacity, and Singapore’s high-value economy supports high living standards',
      'Because Singapore is in Stage 1 of the DTM',
      'Because Singapore bans international trade',
    ],
    correctIndex: 1,
    explanation: 'Over-population means too many people for available resources/technology—not simply high headcount per km².',
  },

  // 3.2 Urbanisation, Land-Use Models & Sustainable Cities
  {
    id: 'iggeog-q-3-2-1',
    subtopicId: 'iggeog-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which service has the LARGEST threshold population and widest sphere of influence?',
    options: [
      'A corner bakery selling daily bread',
      'A village primary school',
      'A specialist regional university hospital or international airport',
      'A local newsagent',
    ],
    correctIndex: 2,
    explanation: 'High-order specialist services require huge customer thresholds and attract users across entire regions.',
  },
  {
    id: 'iggeog-q-3-2-2',
    subtopicId: 'iggeog-3-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain WHY in-situ self-help upgrading or site-and-service schemes (e.g. Rio’s Favela Bairro) are generally more sustainable than bulldozing squatter settlements.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Bulldozing destroys communities and fails to solve poverty because displaced families simply rebuild makeshift shanties elsewhere. In-situ upgrading and site-and-service schemes supply piped water, sewers, paved roads, and legal land titles so residents invest safely in permanent homes while keeping existing jobs and community networks.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Explains why clearance/bulldozing fails (displaced people rebuild elsewhere / breaks jobs/community)',
          requiredKeywordGroups: [
            ['rebuild', 'elsewhere', 'displace', 'homeless', 'does not solve', 'community', 'jobs'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Explains benefits of upgrading/site-and-service (water/sewers/roads/land ownership/permanent homes)',
          requiredKeywordGroups: [
            ['water', 'sewer', 'sanitation', 'road', 'title', 'ownership', 'legal', 'permanent', 'clinic', 'invest'],
          ],
        },
      ],
    },
    explanation: 'Evaluating upgrading vs clearance is a classic Cambridge 0460 Paper 1 Theme 1.7 question.',
  },
  {
    id: 'iggeog-q-3-2-3',
    subtopicId: 'iggeog-3-2',
    type: 'matching',
    marks: 2,
    prompt: 'Match each urban geography term to its correct definition:',
    pairs: [
      { left: 'Burgess model', right: 'Concentric rings radiating outward from the Central Business District' },
      { left: 'Hoyt model', right: 'Land-use wedges expanding along major transport corridors' },
      { left: 'Brownfield site', right: 'Previously developed urban plot regenerated for new uses' },
      { left: 'Sphere of influence', right: 'Catchment area served by a town’s shops and services' },
    ],
    explanation: 'Distinguish Burgess rings from Hoyt transport wedges clearly on urban map questions.',
  },
  {
    id: 'iggeog-q-3-2-4',
    subtopicId: 'iggeog-3-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the Curitiba sustainable city case study:',
    segments: ['Curitiba cuts road congestion using dedicated-lane ', ' buses with pre-paid glass tube stations, and its Green Exchange programme swaps sorted household ', ' for fresh produce and bus tokens.'],
    wordBank: ['Bus Rapid Transit', 'recycling', 'desalination', 'subsistence'],
    answers: ['Bus Rapid Transit', 'recycling'],
    explanation: 'Curitiba’s BRT + Green Exchange + flood parks showcase affordable, joined-up urban sustainability.',
  },
  {
    id: 'iggeog-q-3-2-5',
    subtopicId: 'iggeog-3-2',
    type: 'mcq',
    marks: 1,
    prompt: 'How does land use in many LIC/NEE cities (such as Rio de Janeiro) commonly DIFFER from the classic Burgess HIC model?',
    options: [
      'LIC cities have no Central Business District',
      'High-income housing often clusters near the CBD or scenic coast while low-income informal squatter settlements sit on steep hills or the urban-rural fringe',
      'All factories are built underground',
      'Land values are lowest inside the CBD',
    ],
    correctIndex: 1,
    explanation: 'Unlike Burgess’s wealthy outer suburbs, many LIC/NEE elites live close to central amenities while recent migrants settle peripheral or hazardous hillsides.',
  },

  // 4.1 Development Indicators, Globalisation & Industry
  {
    id: 'iggeog-q-4-1-1',
    subtopicId: 'iggeog-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Which THREE components make up the UN Human Development Index (HDI)?',
    options: [
      'Birth rate, coastline length, and military budget',
      'Life expectancy at birth, years of schooling (education), and GNI per capita (PPP)',
      'Total population, rainfall, and road length',
      'Number of tourists, oil exports, and factory count',
    ],
    correctIndex: 1,
    explanation: 'HDI integrates health, education, and standard of living on a 0–1 scale to surpass narrow GDP-only metrics.',
  },
  {
    id: 'iggeog-q-4-1-2',
    subtopicId: 'iggeog-4-1',
    type: 'short-answer',
    marks: 2,
    prompt: 'Give ONE advantage AND ONE disadvantage of Transnational Corporations (TNCs) locating factories in NEEs or LICs (such as Vietnam or Nigeria).',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Advantage: TNCs bring Foreign Direct Investment (FDI), formal waged jobs, infrastructure upgrades, and a local multiplier effect. Disadvantage: Profits leak back to HIC headquarters (economic leakage), workers may face low wages or long hours, and industrial pollution can damage local ecosystems.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Valid TNC advantage (jobs / FDI / multiplier effect / skills / infrastructure / taxes)',
          requiredKeywordGroups: [
            ['job', 'employment', 'fdi', 'investment', 'multiplier', 'infrastructure', 'skill', 'wage', 'tax'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Valid TNC disadvantage (profit leakage / exploitation / pollution / footloose closure risk)',
          requiredKeywordGroups: [
            ['leakage', 'profit', 'headquarters', 'low wage', 'exploit', 'pollution', 'environment', 'relocate', 'conditions'],
          ],
        },
      ],
    },
    explanation: 'Balanced TNC analysis weighs domestic jobs and investment against profit leakage and labour/environmental costs.',
  },
  {
    id: 'iggeog-q-4-1-3',
    subtopicId: 'iggeog-4-1',
    type: 'matching',
    marks: 2,
    prompt: 'Match each employment sector to a concrete example:',
    pairs: [
      { left: 'Primary sector', right: 'Copper mining, commercial fishing, and rice farming' },
      { left: 'Secondary sector', right: 'Car assembly, garment factories, and steel smelting' },
      { left: 'Tertiary sector', right: 'Hospital nursing, hotel tourism, and retail banking' },
      { left: 'Quaternary sector', right: 'Biotechnology research and AI software engineering' },
    ],
    explanation: 'The Clark–Fisher model charts how employment shifts across these four sectors during development.',
  },
  {
    id: 'iggeog-q-4-1-4',
    subtopicId: 'iggeog-4-1',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the industrial location and tourism concepts:',
    segments: ['High-tech software firms not tied to heavy raw materials are called ', ' industries, while new factory wages spent in local shops triggering further job creation exemplify the ', '.'],
    wordBank: ['footloose', 'multiplier effect', 'attrition', 'leaching'],
    answers: ['footloose', 'multiplier effect'],
    explanation: 'Footloose hi-tech clusters prize skilled university talent and connectivity; local spending drives the multiplier effect.',
  },
  {
    id: 'iggeog-q-4-1-5',
    subtopicId: 'iggeog-4-1',
    type: 'mcq',
    marks: 1,
    prompt: 'Why does community-owned ECOTOURISM (such as Basecamp Maasai Mara, Kenya) score better for sustainable development than foreign-owned all-inclusive mega-resorts?',
    options: [
      'It bans all local residents from working in lodges',
      'It reduces economic leakage by keeping wages and profits inside local villages while funding wildlife conservation and solar/low-impact lodging',
      'It requires clearing rainforest for golf courses',
      'It relies entirely on coal power',
    ],
    correctIndex: 1,
    explanation: 'Ecotourism retains revenue locally, educates guests, and gives communities direct financial incentives to conserve ecosystems.',
  },

  // 4.2 Food, Water & Energy Security + Sustainable Development
  {
    id: 'iggeog-q-4-2-1',
    subtopicId: 'iggeog-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Which sector accounts for the LARGEST share (~70%) of global freshwater withdrawals?',
    options: [
      'Domestic household showering and drinking',
      'Agriculture (crop irrigation and livestock)',
      'Computer data centres',
      'Tourism swimming pools',
    ],
    correctIndex: 1,
    explanation: 'Agriculture consumes roughly 70% of global freshwater, making efficient drip irrigation crucial for water security.',
  },
  {
    id: 'iggeog-q-4-2-2',
    subtopicId: 'iggeog-4-2',
    type: 'short-answer',
    marks: 2,
    prompt: 'Explain the difference between PHYSICAL water scarcity and ECONOMIC water scarcity, and name ONE sustainable way to conserve freshwater.',
    rubric: {
      maxMarks: 2,
      modelAnswer: 'Physical water scarcity occurs where arid climate and limited rivers/aquifers cannot meet human demand (e.g. Middle East), whereas economic water scarcity occurs where freshwater exists physically but poverty or poor infrastructure prevents clean piped supply. Sustainable conservation methods include drip irrigation, greywater recycling, fixing leaking pipes, or water metering.',
      markPoints: [
        {
          id: 'mp1',
          markDescription: 'Distinguishes physical scarcity (climate/lack of water) from economic scarcity (lack of money/infrastructure)',
          requiredKeywordGroups: [
            ['dry', 'arid', 'rainfall', 'demand', 'not enough water', 'physical'],
            ['money', 'poverty', 'afford', 'infrastructure', 'pipes', 'treatment', 'invest'],
          ],
        },
        {
          id: 'mp2',
          markDescription: 'Names concrete sustainable water conservation measure',
          requiredKeywordGroups: [
            ['drip', 'greywater', 'leak', 'meter', 'rainwater', 'harvest', 'sand dam', 'recycle'],
          ],
        },
      ],
    },
    explanation: 'Knowing physical vs economic scarcity helps tailor solutions appropriately between arid HICs and water-rich LICs.',
  },
  {
    id: 'iggeog-q-4-2-3',
    subtopicId: 'iggeog-4-2',
    type: 'fill-blank',
    marks: 2,
    prompt: 'Complete the resource security strategies:',
    segments: ['Removing salt from seawater to supply arid coastal cities like Dubai is ', ', whereas affordable locally maintained tools such as sand dams and stone bunds are examples of ', '.'],
    wordBank: ['desalination', 'appropriate technology', 'subduction', 'longshore drift'],
    answers: ['desalination', 'appropriate technology'],
    explanation: 'Desalination suits wealthy arid coastlines (despite high energy cost); appropriate technology empowers rural LIC communities.',
  },
  {
    id: 'iggeog-q-4-2-4',
    subtopicId: 'iggeog-4-2',
    type: 'mcq',
    marks: 1,
    prompt: 'Why is NUCLEAR power classified as low-carbon yet NON-RENEWABLE?',
    options: [
      'It burns coal inside the reactor',
      'Nuclear fission emits virtually no CO₂ during electricity generation, yet relies on finite mined uranium ore',
      'It only works during sunny afternoons',
      'It uses hydroelectric dams',
    ],
    correctIndex: 1,
    explanation: 'Uranium reserves are finite (non-renewable) and create radioactive waste, even though operation avoids greenhouse emissions.',
  },
  {
    id: 'iggeog-q-4-2-5',
    subtopicId: 'iggeog-4-2',
    type: 'multi-select',
    marks: 2,
    prompt: 'Select TWO accurate statements about Iceland’s geothermal energy or Morocco’s Noor solar complex:',
    options: [
      'Iceland exploits tectonic heat along the constructive Mid-Atlantic Ridge to heat ~90% of homes sustainably',
      'Morocco’s Noor plant uses molten-salt thermal storage so solar power continues generating electricity hours after sunset',
      'Iceland relies 100% on desert solar panels',
      'Geothermal energy produces large volumes of radioactive plutonium waste',
    ],
    selectCount: 2,
    correctIndices: [0, 1],
    explanation: 'Matching renewable engineering directly to physical geography (tectonics in Iceland; Sahara sunshine in Morocco) ensures resilient energy security.',
  },
];

export const IGCSE_GEOGRAPHY_FLASHCARDS: FlashcardItem[] = [
  // 1.1
  { id: 'iggeog-fc-1-1-1', subtopicId: 'iggeog-1-1', diagram: 'tectonic-plate-margins', front: 'Compare hazards at Destructive, Constructive, and Conservative plate margins.', backBullets: ['Destructive (oceanic–continental): subduction, deep trenches, violent composite volcanoes & strong earthquakes.', 'Constructive: diverging plates, new crust, shield volcanoes & mild earthquakes.', 'Conservative: sliding plates, violent shallow earthquakes, ZERO volcanoes.'] },
  { id: 'iggeog-fc-1-1-2', subtopicId: 'iggeog-1-1', front: 'Why does oceanic crust subduct beneath continental crust?', backBullets: ['Oceanic crust (thin basalt) is denser than continental crust (thick granite), so gravity pulls it downward into the mantle (slab pull).'] },
  { id: 'iggeog-fc-1-1-3', subtopicId: 'iggeog-1-1', front: 'Contrast Haiti (2010, LIC) vs Christchurch (2011, HIC) earthquakes.', backBullets: ['Haiti (M7.0, 13 km focus): >220,000 dead, weak unreinforced buildings, secondary cholera epidemic.', 'Christchurch (M6.3, 5 km focus): 185 dead despite severe liquefaction; strict building codes & rapid civil defence cut casualties.'] },
  { id: 'iggeog-fc-1-1-4', subtopicId: 'iggeog-1-1', front: 'Give 4 reasons why millions live near active volcanoes.', backBullets: ['Mineral-rich fertile volcanic soils (Mount Merapi).', 'Clean geothermal power & heating (Iceland).', 'Tourism employment & sulphur mining.', 'Family roots or poverty preventing relocation.'] },
  { id: 'iggeog-fc-1-1-5', subtopicId: 'iggeog-1-1', front: 'Explain the 3Ps of tectonic hazard management.', backBullets: ['Prediction/Monitoring: tiltmeters, gas sensors & seismometers (for volcanoes).', 'Protection: base-isolated aseismic buildings & cross-bracing.', 'Planning: hazard zoning, tsunami walls & regular drills.'] },

  // 1.2
  { id: 'iggeog-fc-1-2-1', subtopicId: 'iggeog-1-2', front: 'Four design features of a Stevenson screen and why each matters?', backBullets: ['Painted white: reflects solar heat.', 'Louvred/slatted sides: allows free airflow while shading instruments.', '1.25 m above grass: avoids ground radiation heat.', 'Houses max–min thermometer & wet-and-dry bulb hygrometer.'] },
  { id: 'iggeog-fc-1-2-2', subtopicId: 'iggeog-1-2', front: 'How are rainforest trees adapted to heavy rain and shallow soils?', backBullets: ['Buttress roots anchor tall trunks in shallow soil.', 'Drip-tip leaves shed heavy rain to prevent fungal rot.', 'Lianas climb trunks & epiphytes perch high to reach sunlight.'] },
  { id: 'iggeog-fc-1-2-3', subtopicId: 'iggeog-1-2', front: 'Why do tropical rainforest soils turn infertile quickly after deforestation?', backBullets: ['Most nutrients sit in living biomass rather than thin latosol soil.', 'Removing the canopy exposes soil to torrential rainfall, rapidly washing minerals downward (leaching).'] },
  { id: 'iggeog-fc-1-2-4', subtopicId: 'iggeog-1-2', front: 'Why are hot deserts located around 15°–30° N/S?', backBullets: ['Dry air from the Hadley Cell descends at subtropical high-pressure belts.', 'Sinking air warms by compression, stopping cloud condensation and leaving <250 mm/yr rain.'] },
  { id: 'iggeog-fc-1-2-5', subtopicId: 'iggeog-1-2', front: 'Give 3 xerophyte plant adaptations + 1 Sahel desertification solution.', backBullets: ['Xerophytes: waxy cuticles, spines instead of leaves, succulent stems, deep taproots.', 'Sahel solution: stone contour bunds (magic stones) trap runoff, boost infiltration, and curb erosion.'] },

  // 2.1
  { id: 'iggeog-fc-2-1-1', subtopicId: 'iggeog-2-1', front: 'Name and distinguish the four river erosion processes (HAAS).', backBullets: ['Hydraulic action: water/air pressure cracking banks.', 'Abrasion: stones scraping bed/banks.', 'Attrition: carried rocks bashing each other smaller/rounder.', 'Solution: weak acids dissolving limestone/chalk.'] },
  { id: 'iggeog-fc-2-1-2', subtopicId: 'iggeog-2-1', front: 'Outline the 4-step formation of a waterfall and gorge.', backBullets: ['Hard caprock overlies softer rock.', 'Hydraulic action & abrasion undercut soft rock, carving a plunge pool.', 'Unsupported hard overhang collapses.', 'Repeated upstream retreat carves a steep-sided gorge (e.g. High Force, River Tees).'] },
  { id: 'iggeog-fc-2-1-3', subtopicId: 'iggeog-2-1', front: 'How does an ox-bow lake form on a river floodplain?', backBullets: ['Faster flow on outside meander bends erodes river cliffs; slower inside bends deposit slip-off slopes.', 'Lateral erosion narrows the meander neck until a flood cuts straight through.', 'Deposition seals off the abandoned U-shaped ox-bow lake.'] },
  { id: 'iggeog-fc-2-1-4', subtopicId: 'iggeog-2-1', front: 'What creates a "flashy" storm hydrograph with a short lag time?', backBullets: ['Intense rainfall, impermeable rocks or urban tarmac, steep valley slopes, saturated soils, and deforestation.'] },
  { id: 'iggeog-fc-2-1-5', subtopicId: 'iggeog-2-1', front: 'Compare Hard vs Soft river flood engineering with examples.', backBullets: ['Hard: dams, concrete embankments, channel straightening (effective locally, costly, may worsen downstream floods).', 'Soft: afforestation, floodplain zoning, wetlands & early warnings (sustainable & natural).'] },

  // 2.2
  { id: 'iggeog-fc-2-2-1', subtopicId: 'iggeog-2-2', front: 'Constructive vs Destructive coastal waves?', backBullets: ['Constructive: low, long wavelength, 6–8/min, strong swash builds beaches.', 'Destructive: tall, steep, 10–14/min, strong backwash erodes beaches and cliffs.'] },
  { id: 'iggeog-fc-2-2-2', subtopicId: 'iggeog-2-2', front: 'Describe the zigzag process of Longshore Drift (LSD).', backBullets: ['Prevailing wind pushes swash obliquely up the beach at an angle.', 'Gravity pulls backwash straight back down at 90° to the shoreline.', 'Sediment zigzags continuously along the coast.'] },
  { id: 'iggeog-fc-2-2-3', subtopicId: 'iggeog-2-2', front: 'State the headland erosion sequence (C-C-A-S-S).', backBullets: ['Crack → Cave → Arch → Stack → Stump (via hydraulic action, abrasion, weathering & gravity collapse).'] },
  { id: 'iggeog-fc-2-2-4', subtopicId: 'iggeog-2-2', front: 'What conditions do coral reefs need, and how do mangroves protect coasts?', backBullets: ['Coral reefs: warm clear seawater (23–25 °C), shallow sunlight (<25 m), normal salinity.', 'Mangroves: dense prop roots trap silt, build land, and dissipate hurricane storm-surge waves.'] },
  { id: 'iggeog-fc-2-2-5', subtopicId: 'iggeog-2-2', front: 'Explain "terminal groyne syndrome" on the Holderness Coast.', backBullets: ['Rock groynes at Mappleton trapped southward longshore drift to widen Mappleton’s beach.', 'This starved downdrift beaches at Cowden, accelerating cliff erosion to 4–10 m/year.'] },

  // 3.1
  { id: 'iggeog-fc-3-1-1', subtopicId: 'iggeog-3-1', front: 'Summarise Stages 2, 3, and 5 of the Demographic Transition Model.', backBullets: ['Stage 2 (Niger): Death rate drops rapidly (healthcare/water) while birth rate stays high → population boom.', 'Stage 3 (India/Brazil): Birth rate falls (female schooling, contraception) → slowing growth.', 'Stage 5 (Japan): Birth rate drops below death rate → ageing natural decline.'] },
  { id: 'iggeog-fc-3-1-2', subtopicId: 'iggeog-3-1', front: 'Key challenges of Japan’s ageing population (>29% aged 65+)?', backBullets: ['Soaring healthcare & state pension spending, shrinking workforce and tax base, rural depopulation.', 'Managed via raising retirement age, elder-care robotics, and selective foreign labour.'] },
  { id: 'iggeog-fc-3-1-3', subtopicId: 'iggeog-3-1', front: 'Pro-natalist vs Anti-natalist population policies (named examples)?', backBullets: ['Pro-natalist: Singapore Baby Bonus grants, childcare subsidies & paid leave to boost low fertility.', 'Anti-natalist: China’s former One-Child Policy cut growth yet left an ageing 4-2-1 demographic crunch.'] },
  { id: 'iggeog-fc-3-1-4', subtopicId: 'iggeog-3-1', front: 'Origin vs Destination impacts of Mexico → USA migration?', backBullets: ['Origin (Mexico): +$60bn/yr remittances & lower unemployment vs brain drain & separated families.', 'Destination (USA): fills farm/service labour shortages & adds cultural diversity vs local housing/border debates.'] },
  { id: 'iggeog-fc-3-1-5', subtopicId: 'iggeog-3-1', front: 'Why is high population density NOT the same as over-population?', backBullets: ['Over-population compares people against available resources/economy (e.g. Bangladesh faces strain; high-density Singapore enjoys high wealth & living standards).'] },

  // 3.2
  { id: 'iggeog-fc-3-2-1', subtopicId: 'iggeog-3-2', front: 'Define threshold population, range, and sphere of influence.', backBullets: ['Threshold: minimum customers needed to keep a service profitable.', 'Range: maximum distance customers travel for a good.', 'Sphere of influence: geographic catchment area served by a settlement.'] },
  { id: 'iggeog-fc-3-2-2', subtopicId: 'iggeog-3-2', front: 'Difference between Burgess and Hoyt urban land-use models?', backBullets: ['Burgess: concentric rings outward from the CBD based on land-value bid-rent.', 'Hoyt: wedge-shaped sectors extending outward along key transport routes (rails, rivers, roads).'] },
  { id: 'iggeog-fc-3-2-3', subtopicId: 'iggeog-3-2', front: 'How did Rio de Janeiro’s Favela Bairro project improve informal housing?', backBullets: ['Paved hillside streets, piped water/sewers, legal land titles, cable cars, and local construction training.', 'Far more sustainable than bulldozing, which merely displaces poverty elsewhere.'] },
  { id: 'iggeog-fc-3-2-4', subtopicId: 'iggeog-3-2', front: 'Three flagship sustainability features of Curitiba, Brazil?', backBullets: ['Dedicated-lane Bus Rapid Transit (BRT) with pre-paid tube stations (~70% commuters).', 'Green Exchange trading sorted recycling for fresh produce/bus tokens (~70% recycled).', '28+ flood-meadow parks mowed by sheep preventing urban river floods.'] },
  { id: 'iggeog-fc-3-2-5', subtopicId: 'iggeog-3-2', front: 'Brownfield vs Greenfield urban development trade-offs?', backBullets: ['Brownfield: recycles derelict inner-city land & protects countryside, yet decontamination costs more.', 'Greenfield: cheaper flat land on urban fringe, yet drives sprawl and wildlife habitat loss.'] },

  // 4.1
  { id: 'iggeog-fc-4-1-1', subtopicId: 'iggeog-4-1', front: 'What three metrics form the composite Human Development Index (HDI)?', backBullets: ['Health (life expectancy at birth), Education (mean & expected years of schooling), and Standard of living (GNI per capita at PPP).'] },
  { id: 'iggeog-fc-4-1-2', subtopicId: 'iggeog-4-1', front: 'Outline the Clark–Fisher employment sector shift.', backBullets: ['LICs: Primary dominated → NEEs: Secondary manufacturing boom → Post-industrial HICs: >75% Tertiary services & Quaternary R&D.'] },
  { id: 'iggeog-fc-4-1-3', subtopicId: 'iggeog-4-1', front: 'Why did Bangalore become India’s leading quaternary IT hub?', backBullets: ['Elite engineering universities, skilled English-speaking graduates at competitive wages, government tech parks, and global time-zone advantage.'] },
  { id: 'iggeog-fc-4-1-4', subtopicId: 'iggeog-4-1', front: 'Two pros and two cons of TNCs (e.g. Nike in Vietnam)?', backBullets: ['Pros: FDI capital, formal waged jobs, local multiplier effect, better transport links.', 'Cons: Profit leakage to HIC headquarters, long overtime/working conditions, pollution & relocation risk.'] },
  { id: 'iggeog-fc-4-1-5', subtopicId: 'iggeog-4-1', front: 'How does ecotourism tackle the drawbacks of mass tourism?', backBullets: ['Small-scale, locally owned lodges retain revenue inside villages (cutting leakage), use renewables, and fund wildlife conservation directly.'] },

  // 4.2
  { id: 'iggeog-fc-4-2-1', subtopicId: 'iggeog-4-2', front: 'Compare intensive vs extensive and subsistence vs commercial farming.', backBullets: ['Intensive: high inputs/yield per hectare (rice paddies); Extensive: low inputs over vast land (cattle ranches).', 'Subsistence: grown to feed the farmer’s family; Commercial: grown for market profit.'] },
  { id: 'iggeog-fc-4-2-2', subtopicId: 'iggeog-4-2', front: 'Give 3 sustainable ways to tackle food insecurity in LICs.', backBullets: ['Drip irrigation (cuts evaporation ~50%), drought-tolerant crops & agroforestry, and appropriate technology (sand dams & stone bunds).'] },
  { id: 'iggeog-fc-4-2-3', subtopicId: 'iggeog-4-2', front: 'Physical vs Economic water scarcity + global water split?', backBullets: ['Global split: ~70% Agriculture, ~20% Industry, ~10% Domestic.', 'Physical scarcity = arid climate lacks water; Economic scarcity = poverty/lack of pipes blocks clean access.'] },
  { id: 'iggeog-fc-4-2-4', subtopicId: 'iggeog-4-2', front: 'Evaluative summary of the Lesotho Highlands Water Project (LHWP)?', backBullets: ['Benefits: Supplies Gauteng/Johannesburg industry + earns Lesotho vital water royalties & HEP.', 'Costs: Displaced 20,000–30,000 highland villagers and altered downstream river flows.'] },
  { id: 'iggeog-fc-4-2-5', subtopicId: 'iggeog-4-2', front: 'Why are Iceland (geothermal) & Morocco (Noor solar) standout renewable case studies?', backBullets: ['Iceland: exploits constructive Mid-Atlantic heat for ~90% home heating & ~100% renewable grid.', 'Morocco Noor: molten-salt solar storage keeps generating electricity hours after sunset, slashing oil imports.'] },
];

export const IGCSE_GEOGRAPHY_CHEAT_SHEETS: CheatSheetItem[] = [
  {
    id: 'iggeog-cs-1',
    slug: 'topic-1-tectonics-weather-ecosystems',
    title: '1. Tectonics, Weather & Ecosystems Cheat Sheet',
    topicNumber: 1,
    topicName: 'Plate Tectonics, Earthquakes & Weather Hazards',
    summary: 'Plate margins, Haiti vs Christchurch, Stevenson screen, Amazon rainforest & hot desert systems.',
    accentColor: '#0D9488',
    sections: [
      {
        heading: 'Plate Tectonics & Hazard Management',
        points: [
          'Destructive (oceanic subducts under continental): trenches, composite volcanoes, violent quakes; Constructive: shield volcanoes; Conservative: quakes ONLY (no volcanoes).',
          'Case studies: Haiti 2010 (LIC, M7.0, >220k deaths, weak masonry + cholera) vs Christchurch 2011 (HIC, M6.3, 185 deaths, strict codes).',
          '3Ps: Monitoring/Prediction (volcanoes ONLY via tiltmeters/SO₂), Protection (aseismic frames), Planning (zoning & drills).',
        ],
      },
      {
        heading: 'Weather Instruments, Rainforests & Hot Deserts',
        points: [
          'Stevenson screen: white, slatted, 1.25 m over grass; anemometer (wind speed), oktas (cloud 0–8).',
          'Equatorial Low → Rainforest (buttress roots, drip tips, rapid biomass cycling, rapid leaching when cleared — Amazon).',
          '30° Subtropical High → Hot Desert (<250 mm rain, xerophyte spines/waxy leaves; Sahel stone bunds fight desertification).',
        ],
      },
    ],
  },
  {
    id: 'iggeog-cs-2',
    slug: 'topic-2-rivers-coasts',
    title: '2. Rivers & Coasts Cheat Sheet',
    topicNumber: 2,
    topicName: 'Rivers & Coasts',
    summary: 'HAAS/TSSS processes, waterfalls to deltas, longshore drift, spits, coral reefs & Holderness defences.',
    accentColor: '#0D9488',
    sections: [
      {
        heading: 'River Processes, Landforms & Floods',
        points: [
          'Erosion = HAAS (Hydraulic action, Abrasion, Attrition, Solution); Transport = TSSS (Traction, Saltation, Suspension, Solution).',
          'Waterfalls: hard caprock over soft rock → undercutting + plunge pool → overhang collapse → retreat → gorge (High Force, River Tees).',
          'Meanders: outside erosion (river cliff) + inside deposition (slip-off slope) → neck cut-off → ox-bow lake; Soft engineering (afforestation, zoning) beats concrete downstream.',
        ],
      },
      {
        heading: 'Coastal Waves, Landforms & Holderness Case Study',
        points: [
          'Constructive (strong swash builds beaches) vs Destructive (strong backwash erodes); LSD = angled swash + 90° backwash.',
          'Headlands: Crack → Cave → Arch → Stack → Stump; Spits curve with wind shifts sheltering salt marshes (Spurn Head).',
          'Coral reefs need 23–25 °C clear shallow sunlit water; Mappleton groynes triggered downdrift terminal groyne syndrome at Cowden.',
        ],
      },
    ],
  },
  {
    id: 'iggeog-cs-3',
    slug: 'topic-3-population-settlement',
    title: '3. Population & Settlement Cheat Sheet',
    topicNumber: 3,
    topicName: 'Population & Settlement',
    summary: 'DTM Stages 1–5, Niger vs Japan, Mexico–USA migration, Burgess/Hoyt models, Rio & Curitiba.',
    accentColor: '#0D9488',
    sections: [
      {
        heading: 'Population Dynamics & Migration',
        points: [
          'Natural Increase = BR − DR; DTM Stage 2 (boom, Niger) → Stage 3 (BR drops) → Stage 5 (ageing decline, Japan >29% 65+).',
          'Policies: China anti-natalist (averted ~400m births → ageing crisis) vs Singapore pro-natalist (Baby Bonus grants).',
          'Mexico → USA migration: remittances (+$60bn/yr) vs brain drain at origin; fills US labour gaps vs housing/border debate at destination.',
        ],
      },
      {
        heading: 'Urban Models, Upgrading & Sustainability',
        points: [
          'High-order services = big threshold + wide sphere of influence; Burgess = concentric rings; Hoyt = transport wedges.',
          'Rio Favela Bairro (pipes, titles, roads, cable car) outperforms bulldozing by keeping communities intact.',
          'Curitiba sustainability: Bus Rapid Transit (~70% commuters), Green Exchange recycling (~70%), sheep-mowed flood parks.',
        ],
      },
    ],
  },
  {
    id: 'iggeog-cs-4',
    slug: 'topic-4-development-resources',
    title: '4. Development & Resources Cheat Sheet',
    topicNumber: 4,
    topicName: 'Economic Development & Resource Management',
    summary: 'HDI, Clark–Fisher sectors, TNCs & ecotourism, food/water/energy security & sustainable development.',
    accentColor: '#0D9488',
    sections: [
      {
        heading: 'Development, Industry & Globalisation',
        points: [
          'HDI (0–1) = Life Expectancy + Schooling Years + GNI per capita (PPP) — more rounded than GNI alone.',
          'Clark–Fisher: Primary (LIC) → Secondary (NEE) → Tertiary & Quaternary hi-tech footloose clusters (Bangalore / Cambridge).',
          'TNCs & Tourism (Nike Vietnam / Kenya): weigh FDI, jobs & multiplier effect against profit leakage, labour standards & pollution.',
        ],
      },
      {
        heading: 'Food, Water & Energy Security',
        points: [
          'Food security: tackle drought/conflict with drip irrigation, agroforestry & appropriate technology (sand dams, stone bunds).',
          'Water use: 70% Agriculture, 20% Industry, 10% Domestic; compare LHWP water transfer, desalination & greywater recycling.',
          'Energy transition: Iceland geothermal (~90% home heating) & Morocco Noor molten-salt solar slash fossil CO₂ reliably.',
        ],
      },
    ],
  },
];

export const IGCSE_GEOGRAPHY_EXAM_PRACTICE: ExamQuestionItem[] = [
  {
    id: 'iggeog-ex-1-1',
    subtopicId: 'iggeog-1-1',
    number: 1,
    diagram: 'tectonic-plate-margins',
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 2.1 Style] Study the plate-margin diagram comparing Destructive, Constructive, and Conservative plate boundaries. Two earthquakes of similar magnitude struck Haiti (2010, LIC, M7.0) and Christchurch, New Zealand (2011, HIC, M6.3), yet death tolls differed by more than a thousand-fold.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'At which plate margin shown in the diagram does rising basaltic magma form new oceanic crust and gently sloping shield volcanoes?',
        kind: 'mcq',
        marks: 1,
        options: ['Destructive margin', 'Constructive margin', 'Conservative margin', 'Continental collision zone'],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain TWO physical or human reasons why earthquakes typically cause far higher death tolls in LICs such as Haiti (2010) than in HICs such as New Zealand (2011).',
        kind: 'short-answer',
        marks: 4,
        rubric: {
          maxMarks: 4,
          modelAnswer: 'First, poor building quality and lack of enforced aseismic building codes in Haiti caused unreinforced concrete homes and hospitals to collapse instantly, whereas New Zealand enforced strict earthquake-resistant engineering. Second, weak emergency services, blocked roads, and poor water sanitation in LICs delay rescue and trigger fatal secondary cholera outbreaks, whereas HICs deploy rapid civil defence rescue teams and well-funded healthcare.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Identifies building quality / lack of aseismic building codes in LIC vs strict HIC engineering',
              requiredKeywordGroups: [
                ['building', 'code', 'concrete', 'aseismic', 'collapse', 'weak', 'reinforced'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Explains consequence (buildings collapse trapping/crushing residents vs HIC buildings surviving)',
              requiredKeywordGroups: [
                ['collapse', 'crush', 'trap', 'survive', 'withstand', 'death', 'casualt'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Identifies emergency services / medical capacity / sanitation / aid delay',
              requiredKeywordGroups: [
                ['hospital', 'medical', 'rescue', 'emergency', 'sanitation', 'cholera', 'disease', 'aid', 'preparation'],
              ],
            },
            {
              id: 'mp4',
              markDescription: 'Explicit comparative contrast between LIC (Haiti) and HIC (New Zealand / Christchurch)',
              requiredKeywordGroups: [
                ['haiti', 'lic'],
                ['christchurch', 'new zealand', 'hic'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-1-2',
    subtopicId: 'iggeog-1-2',
    number: 2,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 & Paper 2 Theme 2.5 Style] Climate data: Station A (Manaus, Amazon Basin, 3°S) records mean monthly temperatures of 26–28 °C year-round and 2,300 mm annual rainfall. Station B (Tamanrasset, Sahara, 22°N) records 45 mm annual rainfall and daily temperature swings exceeding 25 °C.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which atmospheric circulation feature best explains Station B’s extreme aridity at 22°N?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Rising moist air at the equatorial low-pressure belt',
          'Descending warm, dry air at the subtropical high-pressure belt of the Hadley Cell',
          'Frontal depressions from polar latitudes',
          'Daily monsoon sea breezes',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain why clearing tropical rainforest around Station A rapidly degrades soil fertility AND state ONE sustainable management strategy used in the Amazon.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'In tropical rainforests, rapid decomposition keeps most nutrients stored in living biomass rather than thin latosol soil. Clearing trees stops leaf litter replenishment and exposes bare soil to heavy equatorial downpours, causing intense leaching that washes soluble nutrients away. Sustainable management includes selective logging, protected indigenous reserves, debt-for-nature swaps, or ecotourism.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Notes nutrients sit mostly in biomass / leaf litter cycle breaks when trees removed',
              requiredKeywordGroups: [
                ['biomass', 'litter', 'canopy', 'trees', 'nutrient cycle', 'shallow', 'thin'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Explains heavy rainfall causing leaching/erosion of bare soil',
              requiredKeywordGroups: [
                ['leach', 'wash', 'erod'],
                ['rain', 'nutrients', 'mineral', 'infertile', 'soil'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Names concrete sustainable Amazon strategy',
              requiredKeywordGroups: [
                ['selective logging', 'ecotourism', 'indigenous', 'reserve', 'debt-for-nature', 'replant', 'afforestation'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-2-1',
    subtopicId: 'iggeog-2-1',
    number: 3,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 2.2 Style] Two adjacent drainage basins receive 45 mm of rainfall in 3 hours. Basin X is heavily urbanised with tarmac roads, storm drains, and cleared hillsides; Basin Y has dense woodland upstream and protected marshland along its floodplain.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'How will Basin X’s storm hydrograph compare with Basin Y’s?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Longer lag time and lower peak discharge',
          'Shorter lag time, steeper rising limb, and higher peak discharge (flashier)',
          'Identical discharge curve with zero runoff',
          'No peak discharge at all',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain WHY Basin Y’s woodland and floodplain wetlands reduce flood risk, AND evaluate ONE disadvantage of relying solely on hard engineering (such as channel straightening or concrete embankments) to protect a town.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'In Basin Y, tree canopies intercept rainfall while roots increase soil infiltration, slowing water transfer and lengthening lag time, while floodplain wetlands store excess floodwater naturally. Hard engineering such as straightening or embankments is very expensive, looks unnatural, and accelerates floodwater rapidly past the town, increasing severe flood risk for communities downstream.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Explains woodland interception and root infiltration slowing runoff / lengthening lag time',
              requiredKeywordGroups: [
                ['intercept', 'infiltrat', 'absorb', 'root', 'slow'],
                ['lag time', 'runoff', 'peak', 'water'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Notes floodplain wetlands naturally store excess floodwater',
              requiredKeywordGroups: [
                ['wetland', 'marsh', 'floodplain'],
                ['store', 'absorb', 'hold', 'sponge', 'soak'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Evaluates hard engineering drawback (downstream flood surge, high cost, ugly/habitat loss)',
              requiredKeywordGroups: [
                ['downstream', 'expensive', 'cost', 'ugly', 'habitat', 'silt', 'breach'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-2-2',
    subtopicId: 'iggeog-2-2',
    number: 4,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 2.3 Style] Along the Holderness Coast (Yorkshire), prevailing winds drive longshore drift southward past soft boulder-clay cliffs eroding at ~2 metres per year. In 1991, two rock groynes and boulder armour were built to defend the village of Mappleton.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'What is the main reason boulder-clay cliffs at Holderness retreat so rapidly?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Boulder clay is soft, unconsolidated glacial till easily undercut by destructive North Sea waves and prone to slumping',
          'Boulder clay is harder than granite',
          'Constructive waves dominate year-round',
          'Coral reefs block all longshore drift',
        ],
        correctIndex: 0,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain how the rock groynes protected Mappleton AND why farmers 3 km south at Cowden strongly opposed the scheme.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The rock groynes trapped southward-moving sediment carried by longshore drift, building a wide sandy beach in front of Mappleton that absorbed incoming wave energy before it reached the cliffs and protected the B1242 road. However, trapping sand starved beaches further south at Cowden (terminal groyne syndrome), exposing their soft cliffs to direct wave attack and accelerating erosion to 4–10 m/yr, destroying farmland.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Explains groynes trapping longshore drift to widen the beach at Mappleton',
              requiredKeywordGroups: [
                ['trap', 'longshore drift', 'sand', 'sediment'],
                ['beach', 'wider', 'build'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Explains wider beach absorbs wave energy before waves reach Mappleton’s cliffs',
              requiredKeywordGroups: [
                ['absorb', 'wave energy', 'protect', 'cliff', 'road'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Explains downdrift sediment starvation (terminal groyne syndrome) accelerating erosion/farm loss at Cowden',
              requiredKeywordGroups: [
                ['starve', 'downdrift', 'south', 'terminal groyne', 'cowden'],
                ['faster', 'accelerat', 'erosion', 'farm', 'loss', 'destroy'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-3-1',
    subtopicId: 'iggeog-3-1',
    number: 5,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 1.1–1.3 Style] Demographic data:\n• Country P (Niger): Birth rate 45/1,000, Death rate 8/1,000, >50% of population aged under 18.\n• Country Q (Japan): Birth rate 6/1,000, Death rate 12/1,000, >29% of population aged 65+.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Calculate Country P’s natural increase per 1,000 people and identify its Demographic Transition Model stage.',
        kind: 'mcq',
        marks: 1,
        options: [
          '+37 per 1,000; Stage 2',
          '-6 per 1,000; Stage 5',
          '+53 per 1,000; Stage 4',
          '+8 per 1,000; Stage 1',
        ],
        correctIndex: 0,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Explain TWO socio-economic challenges facing Country Q (Japan) due to its Stage 5 ageing population AND suggest ONE government policy to manage it.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'First, a growing proportion of elderly retirees sharply raises government spending on state pensions and hospital/elder care. Second, a shrinking working-age population reduces income tax revenues and causes labour shortages across farms, factories, and care homes. Governments respond by raising the retirement age, investing in automation/robotics, offering pro-natalist childcare subsidies, or selectively admitting foreign workers.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Challenge 1: rising healthcare, elder-care, or pension expenditure',
              requiredKeywordGroups: [
                ['pension', 'healthcare', 'hospital', 'care', 'cost', 'spending'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Challenge 2: shrinking workforce, labour shortages, or falling tax base',
              requiredKeywordGroups: [
                ['workforce', 'labour shortage', 'tax', 'workers', 'dependency', 'economy'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Valid management policy (raise retirement age, robotics, pro-natalist incentives, migration)',
              requiredKeywordGroups: [
                ['retirement age', 'robot', 'automation', 'pro-natalist', 'childcare', 'immigrant', 'foreign worker', 'female'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-3-2',
    subtopicId: 'iggeog-3-2',
    number: 6,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 1.7 Style] Rapid rural-to-urban migration has pushed millions into self-built hillside squatter settlements (favelas) in Rio de Janeiro, while Curitiba in southern Brazil has gained global acclaim for sustainable urban transport and waste management.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which urban planning feature allowed Curitiba to move ~70% of commuters cheaply without building an underground metro?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Eight-lane inner-city motorways',
          'Dedicated-lane Bus Rapid Transit (BRT) with pre-paid glass boarding tubes',
          'Banning all buses from the CBD',
          'Demolishing all urban parks',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Describe TWO living-condition problems in squatter settlements such as Rocinha (Rio de Janeiro) and explain how the Favela Bairro upgrading scheme addressed them.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Squatter settlements suffer from unpiped sewage and unsafe water causing diseases like cholera, as well as unstable self-built shelters on steep landslide-prone hillsides with poor road access. Rio’s Favela Bairro scheme installed piped clean water and sewage drains, paved hillside roads and built cable cars, and granted legal land ownership so residents upgraded homes permanently.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Problem 1: lack of clean water/sewage/sanitation causing disease OR illegal unsafe electricity',
              requiredKeywordGroups: [
                ['water', 'sewage', 'sanitation', 'disease', 'cholera', 'electricity', 'waste'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Problem 2: steep landslide risk, overcrowded makeshift housing, poor access, or crime',
              requiredKeywordGroups: [
                ['landslide', 'steep', 'makeshift', 'overcrowd', 'access', 'road', 'crime', 'insecure'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Explains Favela Bairro upgrades (piped water/sewers, paved roads/cable car, land titles, clinics)',
              requiredKeywordGroups: [
                ['pipe', 'sewer', 'pave', 'road', 'cable car', 'title', 'ownership', 'clinic', 'training'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-4-1',
    subtopicId: 'iggeog-4-1',
    number: 7,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 3.1 & 3.3 Style] Country M has GNI per capita of $28,000 but a literacy rate of 71% and wide urban–rural poverty gaps. Meanwhile, a major US footwear TNC announces a new 12,000-worker assembly complex in an NEE port city.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Why does the Human Development Index (HDI) provide a more reliable measure of Country M’s development than GNI per capita alone?',
        kind: 'mcq',
        marks: 1,
        options: [
          'HDI ignores income completely',
          'HDI combines income (GNI PPP) with social measures of life expectancy and years of schooling, exposing weak health or education hidden by average income',
          'HDI only counts factory output',
          'HDI is always identical to GNI per capita',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Evaluate how the new TNC assembly complex could BOTH benefit AND harm the host NEE port city.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'The TNC brings 12,000 formal jobs, FDI capital, improved port/road links, and a local multiplier effect as factory wages are spent in local shops and supply businesses. However, bulk profits leak back to the US headquarters (economic leakage), workers may suffer low wages or harsh overtime, and the TNC could relocate abruptly to a cheaper country leaving mass unemployment.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Benefit: jobs/FDI/infrastructure/skills transfer',
              requiredKeywordGroups: [
                ['job', 'fdi', 'investment', 'infrastructure', 'port', 'road', 'skill', 'wage'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Benefit explained via multiplier effect / local spending / tax revenue',
              requiredKeywordGroups: [
                ['multiplier', 'local shop', 'supplier', 'spend', 'tax', 'economy'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Harm: profit leakage, poor labour conditions, pollution, or sudden relocation risk',
              requiredKeywordGroups: [
                ['leakage', 'profit', 'headquarters', 'exploit', 'low wage', 'overtime', 'pollution', 'relocate', 'close'],
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'iggeog-ex-4-2',
    subtopicId: 'iggeog-4-2',
    number: 8,
    stimulus: '[Cambridge IGCSE 0460 Paper 1 Theme 3.5–3.7 Style] An arid coastal nation currently generates 85% of its electricity from imported natural gas and pumps overdrawn groundwater to irrigate open-furrow farms while facing rapid population growth.',
    parts: [
      {
        id: 'p1',
        label: '(a)',
        prompt: 'Which irrigation upgrade directly cuts agricultural evaporation losses by up to 50%?',
        kind: 'mcq',
        marks: 1,
        options: [
          'Open flood-furrow irrigation at midday',
          'Drip (trickle) irrigation delivering water directly to plant roots',
          'Clearing surrounding tree windbreaks',
          'Pumping salty seawater onto crops',
        ],
        correctIndex: 1,
      },
      {
        id: 'p2',
        label: '(b)',
        prompt: 'Suggest ONE sustainable renewable energy strategy (citing a named example such as Morocco or Iceland) AND ONE water-management trade-off if the nation expands seawater desalination.',
        kind: 'short-answer',
        marks: 3,
        rubric: {
          maxMarks: 3,
          modelAnswer: 'Because the nation is arid and sunny, it could build concentrated solar power with molten-salt thermal storage like Morocco’s Noor–Ouarzazate complex, cutting fossil gas imports and CO₂ while generating power even after sunset. Expanding desalination reliably supplies coastal freshwater independent of drought, yet consumes vast electricity (costly/carbon-heavy unless solar-powered) and discharges toxic hypersaline brine that harms marine habitats.',
          markPoints: [
            {
              id: 'mp1',
              markDescription: 'Proposes suitable renewable energy strategy (solar with storage / wind / geothermal) with named example',
              requiredKeywordGroups: [
                ['solar', 'noor', 'morocco', 'geothermal', 'iceland', 'wind', 'renewable'],
              ],
            },
            {
              id: 'mp2',
              markDescription: 'Explains sustainability benefit (cuts imported fossil fuel, lowers CO₂, energy security)',
              requiredKeywordGroups: [
                ['co2', 'carbon', 'greenhouse', 'import', 'energy security', 'infinite', 'clean', 'sunset', 'storage'],
              ],
            },
            {
              id: 'mp3',
              markDescription: 'Evaluates desalination trade-off (reliable water vs high energy cost / hypersaline brine harming marine life)',
              requiredKeywordGroups: [
                ['desalination'],
                ['energy', 'expensive', 'cost', 'brine', 'salt', 'marine', 'ecosystem', 'reliable'],
              ],
            },
          ],
        },
      },
    ],
  },
];

export const IGCSE_GEOGRAPHY_PAST_PAPERS: PastPaperDoc[] = [];

export const IGCSE_GEOGRAPHY_KEY_TERMS: KeyTermEntry[] = [
  { id: 'iggeog-kt-1', term: 'Subduction', definition: 'Sinking of denser oceanic basalt crust beneath less dense crust into the mantle at a destructive margin.', topicNumber: 1, subtopicId: 'iggeog-1-1', subtopicCode: '1.1' },
  { id: 'iggeog-kt-2', term: 'Epicentre', definition: 'Point on Earth’s surface directly above an earthquake’s underground focus where shaking is usually strongest.', topicNumber: 1, subtopicId: 'iggeog-1-1', subtopicCode: '1.1' },
  { id: 'iggeog-kt-3', term: 'Pyroclastic Flow', definition: 'Superheated, fast-moving cloud of volcanic ash, toxic gases, and rock racing down a volcano’s slope.', topicNumber: 1, subtopicId: 'iggeog-1-1', subtopicCode: '1.1' },
  { id: 'iggeog-kt-4', term: 'Stevenson Screen', definition: 'White, slatted wooden shelter raised 1.25 m above grass to protect weather thermometers from direct sun and ground heat.', topicNumber: 1, subtopicId: 'iggeog-1-2', subtopicCode: '1.2' },
  { id: 'iggeog-kt-5', term: 'Leaching', definition: 'Downward washing of soluble soil minerals by heavy percolating rainwater once forest cover is removed.', topicNumber: 1, subtopicId: 'iggeog-1-2', subtopicCode: '1.2' },
  { id: 'iggeog-kt-6', term: 'Xerophyte', definition: 'Plant specially adapted to arid hot deserts via spines, waxy cuticles, succulent stems, or deep roots.', topicNumber: 1, subtopicId: 'iggeog-1-2', subtopicCode: '1.2' },
  { id: 'iggeog-kt-7', term: 'Hydraulic Action', definition: 'Erosive force of moving water compressing trapped air into cracks in riverbanks or coastal cliffs.', topicNumber: 2, subtopicId: 'iggeog-2-1', subtopicCode: '2.1' },
  { id: 'iggeog-kt-8', term: 'Ox-Bow Lake', definition: 'U-shaped cut-off lake created when lateral river erosion breaches a narrow meander neck during high flow.', topicNumber: 2, subtopicId: 'iggeog-2-1', subtopicCode: '2.1' },
  { id: 'iggeog-kt-9', term: 'Lag Time', definition: 'Time interval between peak rainfall and peak river discharge on a storm hydrograph.', topicNumber: 2, subtopicId: 'iggeog-2-1', subtopicCode: '2.1' },
  { id: 'iggeog-kt-10', term: 'Longshore Drift', definition: 'Zigzag movement of beach sediment along a shoreline via angled swash and perpendicular gravity backwash.', topicNumber: 2, subtopicId: 'iggeog-2-2', subtopicCode: '2.2' },
  { id: 'iggeog-kt-11', term: 'Terminal Groyne Syndrome', definition: 'Accelerated coastal cliff erosion downdrift of groynes that trap and starve natural longshore sediment supply.', topicNumber: 2, subtopicId: 'iggeog-2-2', subtopicCode: '2.2' },
  { id: 'iggeog-kt-12', term: 'Demographic Transition Model', definition: 'Five-stage model charting shifts in birth rates, death rates, and natural population growth as economies develop.', topicNumber: 3, subtopicId: 'iggeog-3-1', subtopicCode: '3.1' },
  { id: 'iggeog-kt-13', term: 'Remittances', definition: 'Earnings sent home by international migrants to support families and stimulate local origin economies.', topicNumber: 3, subtopicId: 'iggeog-3-1', subtopicCode: '3.1' },
  { id: 'iggeog-kt-14', term: 'Sphere of Influence', definition: 'Geographical catchment area from which customers travel to access a settlement’s services.', topicNumber: 3, subtopicId: 'iggeog-3-2', subtopicCode: '3.2' },
  { id: 'iggeog-kt-15', term: 'Site-and-Service Scheme', definition: 'Providing serviced legal plots with water, roads, and drainage so low-income families can build permanent homes.', topicNumber: 3, subtopicId: 'iggeog-3-2', subtopicCode: '3.2' },
  { id: 'iggeog-kt-16', term: 'Human Development Index (HDI)', definition: 'Composite UN metric (0–1) integrating life expectancy, schooling years, and GNI per capita (PPP).', topicNumber: 4, subtopicId: 'iggeog-4-1', subtopicCode: '4.1' },
  { id: 'iggeog-kt-17', term: 'Multiplier Effect', definition: 'Upward economic spiral where new jobs and wages stimulate local businesses, creating further employment and taxes.', topicNumber: 4, subtopicId: 'iggeog-4-1', subtopicCode: '4.1' },
  { id: 'iggeog-kt-18', term: 'Food Security', definition: 'Reliable physical and economic access to sufficient safe, nutritious food for a healthy active life.', topicNumber: 4, subtopicId: 'iggeog-4-2', subtopicCode: '4.2' },
  { id: 'iggeog-kt-19', term: 'Desalination', definition: 'Industrial removal of salts from seawater to produce potable freshwater in arid coastal regions.', topicNumber: 4, subtopicId: 'iggeog-4-2', subtopicCode: '4.2' },
  { id: 'iggeog-kt-20', term: 'Sustainable Development', definition: 'Meeting present human needs without compromising resource security or ecosystem health for future generations.', topicNumber: 4, subtopicId: 'iggeog-4-2', subtopicCode: '4.2' },
];
